// Adapty — the ONLY writer of a non-free entitlement in the app (CF-15, vendor
// amended from RevenueCat to Adapty 2026-07-22, Paul's decision — see BF-02).
// Everything here funnels through one `apply()`: AdaptyProfile → pure mapping →
// AsyncStorage cache → useEntitlement. Screens never see the SDK; this module's
// public API is deliberately identical to the RevenueCat version it replaced,
// so paywall.tsx and settings.tsx did not change in the swap.
//
// Three honest degrade states, because this ships ahead of its binary:
//   'no-key'      EXPO_PUBLIC_ADAPTY_KEY unset (CC-B not done) — the paywall
//                 renders prices from pricing.ts but cannot sell.
//   'unavailable' key set but the native module is missing (a dev client from
//                 before react-native-adapty was added) or activate threw.
//   'ready'       activated; purchase/restore are real.
// The module is require()d lazily inside try/catch so a binary without the
// native side loads the JS bundle fine and lands in 'unavailable', never a
// crash at import time. (In Expo Go/Web the SDK self-mocks; in a dev client
// it needs the native module — added 2026-07-22, so any client built before
// then reads 'unavailable' until the next EAS build. iOS builds additionally
// need expo-build-properties useFrameworks 'dynamic' + deploymentTarget 15.0
// per Adapty's SPM requirement — an EAS config step, recorded for CC-B.)
import { useEffect } from 'react';
import { AppState } from 'react-native';
import { ENV } from './env';
import { setCachedEntitlement } from './entitlement';
import {
  entitlementFromProfile,
  isPremium,
  type ProfileLike,
} from '@/store/entitlement.logic';
import { ANON_USER, useEntitlement } from '@/store/useEntitlement';
import { useStore } from '@/store/useStore';

type AdaptyModule = (typeof import('react-native-adapty'))['adapty'];

/** The Adapty dashboard PLACEMENT id the paywall pulls its products from.
 *  CC-B creates it under exactly this id, with the monthly + annual Première
 *  products attached. Pinned here for the same reason the access-level ids
 *  are pinned in entitlement.logic.ts. */
export const PLACEMENT_PREMIERE = 'premiere';

let mod: AdaptyModule | null = null;
let loadTried = false;
function loadModule(): AdaptyModule | null {
  if (!loadTried) {
    loadTried = true;
    try {
      mod = (require('react-native-adapty') as { adapty: AdaptyModule }).adapty;
    } catch {
      mod = null;
    }
  }
  return mod;
}

export type PurchasesStatus = 'ready' | 'no-key' | 'unavailable';
let status: PurchasesStatus = ENV.adaptyKey ? 'unavailable' : 'no-key';
let configured = false;

export const purchasesStatus = (): PurchasesStatus => status;

/** AdaptyProfile → cache → store. The single entitlement write path. */
async function apply(profile: ProfileLike): Promise<void> {
  const uid = useStore.getState().userId ?? ANON_USER;
  const e = entitlementFromProfile(uid, profile);
  await setCachedEntitlement(e);
  useEntitlement.getState().setEntitlement(e);
}

/** Activate once. Safe to call again (no-op) and safe with no key/native.
 *  The isActivated() guard covers Fast Refresh in dev: the JS module state
 *  resets but the native SDK stays activated, and a second activate() throws
 *  (the exact failure of AdaptySDK-React-Native issue #283). */
export async function initPurchases(): Promise<void> {
  if (configured || !ENV.adaptyKey) return;
  const A = loadModule();
  if (!A) return; // native side absent — stays 'unavailable'
  try {
    A.addEventListener('onLatestProfileLoad', (profile) => void apply(profile as ProfileLike));
    if (!(await A.isActivated())) {
      await A.activate(ENV.adaptyKey, {
        // The Phase 9 auth uid IS the Adapty customerUserId, so an entitlement
        // survives reinstalls and follows the account across devices. Signed-
        // out users get an Adapty anonymous profile; identify() merges it on
        // sign-in.
        customerUserId: useStore.getState().userId ?? undefined,
      });
    }
    configured = true;
    status = 'ready';
  } catch {
    status = 'unavailable';
  }
}

/** Pull a fresh profile and re-derive the entitlement. Called on every
 *  foreground — this is the reconcile that makes a dropped webhook or an
 *  offline renewal harmless. */
export async function refreshEntitlement(): Promise<void> {
  if (!configured) return;
  try {
    await apply((await loadModule()!.getProfile()) as ProfileLike);
  } catch {
    // Offline: the cached entitlement stands until we can reconcile.
  }
}

/** Follow an auth identity change: swap the cached entitlement immediately
 *  (offline-honest), then re-point the Adapty identity and reconcile. */
async function syncIdentity(userId: string | null): Promise<void> {
  await useEntitlement.getState().loadFor(userId);
  if (!configured) return;
  const A = loadModule()!;
  try {
    if (userId) await A.identify(userId);
    else await A.logout();
    await apply((await A.getProfile()) as ProfileLike);
  } catch {
    // Identity sync failing must not strand the UI: the cache load above
    // already put the right user's last-known entitlement in place.
  }
}

/** Mount once from _layout. Boot order: cached entitlement (instant, offline
 *  honest) → activate → live reconcile; then re-reconcile on every foreground
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
   *  free_trial phase counts — a paid intro offer is not a "free trial". */
  trial: string | null;
};

/** The Première products from the placement, keyed to our two plans. Products
 *  whose period is neither 1-month nor yearly are skipped rather than guessed
 *  at, and a product without a localized price string cannot be offered. */
async function premiereProducts(): Promise<Map<'mo' | 'yr', import('react-native-adapty').AdaptyPaywallProduct>> {
  const A = loadModule()!;
  const flow = await A.getFlow(PLACEMENT_PREMIERE);
  const products = await A.getPaywallProducts(flow);
  const out = new Map<'mo' | 'yr', (typeof products)[number]>();
  for (const p of products) {
    const period = p.subscription?.subscriptionPeriod;
    if (!period) continue;
    if (period.unit === 'year') out.set('yr', p);
    else if (period.unit === 'month' && period.numberOfUnits === 1) out.set('mo', p);
  }
  return out;
}

function trialOf(p: import('react-native-adapty').AdaptyPaywallProduct): string | null {
  const phases = p.subscription?.offer?.phases ?? [];
  const free = phases.find((ph) => ph.paymentMode === 'free_trial');
  if (!free) return null;
  const sp = free.subscriptionPeriod;
  return `${sp.numberOfUnits} ${sp.unit}`;
}

export async function getLiveOffers(): Promise<LiveOffer[] | null> {
  if (!configured) return null;
  try {
    const byPlan = await premiereProducts();
    const out: LiveOffer[] = [];
    for (const plan of ['mo', 'yr'] as const) {
      const p = byPlan.get(plan);
      const priceString = p?.price?.localizedString;
      if (p && priceString) out.push({ plan, priceString, trial: trialOf(p) });
    }
    return out.length > 0 ? out : null;
  } catch {
    return null;
  }
}

export type PurchaseResult =
  | { ok: true }
  | { ok: false; cancelled: boolean; message: string };

/** Buy Première. The entitlement lands via apply(); the paywall only needs
 *  ok/cancelled/failed for its own state and funnel events. A 'pending'
 *  result (deferred/ask-to-buy) is reported as a non-cancel failure — the
 *  grant arrives later through the profile listener if it is approved. */
export async function purchasePremiere(plan: 'mo' | 'yr'): Promise<PurchaseResult> {
  if (!configured) return { ok: false, cancelled: false, message: 'purchases-unavailable' };
  const A = loadModule()!;
  try {
    const product = (await premiereProducts()).get(plan);
    if (!product) return { ok: false, cancelled: false, message: 'no-offering' };
    const result = await A.makePurchase(product);
    if (result.type === 'success') {
      await apply(result.profile as ProfileLike);
      return { ok: true };
    }
    if (result.type === 'user_cancelled') return { ok: false, cancelled: true, message: 'cancelled' };
    return { ok: false, cancelled: false, message: 'purchase-pending' };
  } catch (err) {
    return { ok: false, cancelled: false, message: (err as Error).message ?? 'purchase-failed' };
  }
}

/** Real Restore — the control Phase 0 removed because it restored nothing.
 *  `premium` in the result is what the restore actually recovered, so the
 *  screen can say "restored" vs "no purchases found" truthfully. */
export async function restorePurchases(): Promise<{ ok: boolean; premium: boolean; message?: string }> {
  if (!configured) return { ok: false, premium: false, message: 'purchases-unavailable' };
  try {
    const profile = await loadModule()!.restorePurchases();
    await apply(profile as ProfileLike);
    return { ok: true, premium: isPremium(useEntitlement.getState().entitlement, Date.now()) };
  } catch (err) {
    return { ok: false, premium: false, message: (err as Error).message };
  }
}
