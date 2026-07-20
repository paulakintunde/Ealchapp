// RevenueCat — the ONLY writer of a non-free entitlement in the app (CF-15).
// Everything here funnels through one `apply()`: customerInfo → pure mapping →
// AsyncStorage cache → useEntitlement. Screens never see the SDK.
//
// Three honest degrade states, because this ships ahead of its binary:
//   'no-key'      EXPO_PUBLIC_REVENUECAT_KEY unset (CC-B not done) — the
//                 paywall renders prices from pricing.ts but cannot sell.
//   'unavailable' key set but the native module is missing (a dev client from
//                 before react-native-purchases was added) or configure threw.
//   'ready'       configured; purchase/restore are real.
// The module is require()d lazily inside try/catch so a binary without the
// native side loads the JS bundle fine and lands in 'unavailable', never a
// crash at import time.
import { useEffect } from 'react';
import { AppState } from 'react-native';
import { ENV } from './env';
import { setCachedEntitlement } from './entitlement';
import {
  entitlementFromCustomerInfo,
  isPremium,
  type CustomerInfoLike,
} from '@/store/entitlement.logic';
import { ANON_USER, useEntitlement } from '@/store/useEntitlement';
import { useStore } from '@/store/useStore';

type RCModule = typeof import('react-native-purchases').default;

let rc: RCModule | null = null;
let loadTried = false;
function loadModule(): RCModule | null {
  if (!loadTried) {
    loadTried = true;
    try {
      rc = (require('react-native-purchases') as { default: RCModule }).default;
    } catch {
      rc = null;
    }
  }
  return rc;
}

export type PurchasesStatus = 'ready' | 'no-key' | 'unavailable';
let status: PurchasesStatus = ENV.revenueCatKey ? 'unavailable' : 'no-key';
let configured = false;

export const purchasesStatus = (): PurchasesStatus => status;

/** customerInfo → cache → store. The single entitlement write path. */
async function apply(info: CustomerInfoLike): Promise<void> {
  const uid = useStore.getState().userId ?? ANON_USER;
  const e = entitlementFromCustomerInfo(uid, info);
  await setCachedEntitlement(e);
  useEntitlement.getState().setEntitlement(e);
}

/** Configure once. Safe to call again (no-op) and safe with no key/native. */
export async function initPurchases(): Promise<void> {
  if (configured || !ENV.revenueCatKey) return;
  const RC = loadModule();
  if (!RC) return; // native side absent — stays 'unavailable'
  try {
    RC.configure({
      apiKey: ENV.revenueCatKey,
      // The Phase 9 auth uid IS the RevenueCat appUserID, so an entitlement
      // survives reinstalls and follows the account across devices. Signed-out
      // users get a RevenueCat anonymous id; logIn() aliases it on sign-in.
      appUserID: useStore.getState().userId ?? undefined,
    });
    RC.addCustomerInfoUpdateListener((info) => void apply(info));
    configured = true;
    status = 'ready';
  } catch {
    status = 'unavailable';
  }
}

/** Pull fresh customerInfo and re-derive the entitlement. Called on every
 *  foreground — this is the reconcile that makes a dropped webhook or an
 *  offline renewal harmless. */
export async function refreshEntitlement(): Promise<void> {
  if (!configured) return;
  try {
    await apply((await loadModule()!.getCustomerInfo()) as unknown as CustomerInfoLike);
  } catch {
    // Offline: the cached entitlement stands until we can reconcile.
  }
}

/** Follow an auth identity change: swap the cached entitlement immediately
 *  (offline-honest), then alias/reset the RevenueCat identity and reconcile. */
async function syncIdentity(userId: string | null): Promise<void> {
  await useEntitlement.getState().loadFor(userId);
  if (!configured) return;
  const RC = loadModule()!;
  try {
    if (userId) {
      const { customerInfo } = await RC.logIn(userId);
      await apply(customerInfo as unknown as CustomerInfoLike);
    } else if (!(await RC.isAnonymous())) {
      await apply((await RC.logOut()) as unknown as CustomerInfoLike);
    }
  } catch {
    // Identity sync failing must not strand the UI: the cache load above
    // already put the right user's last-known entitlement in place.
  }
}

/** Mount once from _layout. Boot order: cached entitlement (instant, offline
 *  honest) → configure → live reconcile; then re-reconcile on every foreground
 *  and follow sign-in/out. The same AppState pattern useForegroundSync uses. */
export function useEntitlementSync(): void {
  useEffect(() => {
    void (async () => {
      await useEntitlement.getState().loadFor(useStore.getState().userId);
      await initPurchases();
      await refreshEntitlement();
    })();
    const app = AppState.addEventListener('change', (next) => {
      if (next === 'active') void refreshEntitlement();
    });
    const unsub = useStore.subscribe((s, prev) => {
      if (s.userId !== prev.userId) void syncIdentity(s.userId);
    });
    return () => {
      app.remove();
      unsub();
    };
  }, []);
}

/* ─── Paywall-facing operations ──────────────────────────────────────────── */

/** A live store offer. When these exist they are what the user will actually
 *  be charged (the store's own currency and localized price), so the paywall
 *  shows them VERBATIM and the pricing.ts matrix steps back to fallback. */
export type LiveOffer = {
  plan: 'mo' | 'yr';
  /** Localized, store-authoritative price string, straight from the store SDK. */
  priceString: string;
  /** Intro free-trial length as "N unit" (e.g. "7 day"), or null. Only a
   *  zero-price intro counts — a paid intro offer is not a "free trial". */
  trial: string | null;
};

export async function getLiveOffers(): Promise<LiveOffer[] | null> {
  if (!configured) return null;
  try {
    const current = (await loadModule()!.getOfferings()).current;
    if (!current) return null;
    const trialOf = (pkg: { product: { introPrice: { price: number; periodNumberOfUnits: number; periodUnit: string } | null } }) => {
      const ip = pkg.product.introPrice;
      return ip && ip.price === 0 ? `${ip.periodNumberOfUnits} ${ip.periodUnit.toLowerCase()}` : null;
    };
    const out: LiveOffer[] = [];
    if (current.monthly) out.push({ plan: 'mo', priceString: current.monthly.product.priceString, trial: trialOf(current.monthly) });
    if (current.annual) out.push({ plan: 'yr', priceString: current.annual.product.priceString, trial: trialOf(current.annual) });
    return out.length > 0 ? out : null;
  } catch {
    return null;
  }
}

export type PurchaseResult =
  | { ok: true }
  | { ok: false; cancelled: boolean; message: string };

/** Buy Première. The entitlement lands via apply(); the paywall only needs
 *  ok/cancelled/failed for its own state and funnel events. */
export async function purchasePremiere(plan: 'mo' | 'yr'): Promise<PurchaseResult> {
  if (!configured) return { ok: false, cancelled: false, message: 'purchases-unavailable' };
  const RC = loadModule()!;
  try {
    const current = (await RC.getOfferings()).current;
    const pkg = plan === 'yr' ? current?.annual : current?.monthly;
    if (!pkg) return { ok: false, cancelled: false, message: 'no-offering' };
    const { customerInfo } = await RC.purchasePackage(pkg);
    await apply(customerInfo as unknown as CustomerInfoLike);
    return { ok: true };
  } catch (err) {
    const e = err as { userCancelled?: boolean; message?: string };
    return { ok: false, cancelled: e.userCancelled === true, message: e.message ?? 'purchase-failed' };
  }
}

/** Real Restore — the control Phase 0 removed because it restored nothing.
 *  `premium` in the result is what the restore actually recovered, so the
 *  screen can say "restored" vs "no purchases found" truthfully. */
export async function restorePurchases(): Promise<{ ok: boolean; premium: boolean; message?: string }> {
  if (!configured) return { ok: false, premium: false, message: 'purchases-unavailable' };
  try {
    const info = await loadModule()!.restorePurchases();
    await apply(info as unknown as CustomerInfoLike);
    return { ok: true, premium: isPremium(useEntitlement.getState().entitlement, Date.now()) };
  } catch (err) {
    return { ok: false, premium: false, message: (err as Error).message };
  }
}
