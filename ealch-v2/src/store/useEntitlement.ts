// The runtime entitlement — what THIS user may access, right now.
//
// Deliberately NOT persisted by zustand: the durable copy lives in the
// per-user AsyncStorage cache (src/services/entitlement.ts), written only when
// the Adapty profile says so. This store is the in-memory read model that
// screens subscribe to. The authority chain, per the master plan's invariant:
//
//   Adapty profile (access levels; runtime authority, refreshed on foreground)
//     → entitlementFromProfile (pure mapping, entitlement.logic.ts)
//       → setCachedEntitlement (offline reconciliation copy)
//       → this store (what screens gate on)
//
// The admin `subscriptions`/`entitlements` tables are webhook-fed mirrors for
// analytics and the server-side coach exemption — the client NEVER reads them
// to grant access; a dropped webhook must not gate a paying user.
import { create } from 'zustand';
import type { Entitlement } from '@/content/progress-schema';
import { getCachedEntitlement } from '@/services/entitlement';
import { hasFeature, isPremium, type Feature } from './entitlement.logic';

/** The cache key for a user who never signed in. A guest can browse the free
 *  tier; purchasing requires an account (the entitlement hangs off the Phase 9
 *  auth uid, so Adapty can restore it on a new device). */
export const ANON_USER = 'anon';

const freeFor = (userId: string): Entitlement => ({ userId, plan: 'free', features: [], source: 'iap' });

type EntitlementState = {
  entitlement: Entitlement;
  /** False only before the first cache read; the default is the honest free. */
  hydrated: boolean;
  /** The only writer. Called by purchases.ts (profile updates) and loadFor (cache). */
  setEntitlement: (e: Entitlement) => void;
  /** Swap to `userId`'s cached entitlement (sign-in/out, boot). The cache may
   *  be stale-generous; purchases.refreshEntitlement reconciles right after
   *  whenever Adapty is reachable. */
  loadFor: (userId: string | null) => Promise<void>;
};

export const useEntitlement = create<EntitlementState>()((set) => ({
  entitlement: freeFor(ANON_USER),
  hydrated: false,
  setEntitlement: (entitlement) => set({ entitlement }),
  loadFor: async (userId) => {
    const e = await getCachedEntitlement(userId ?? ANON_USER);
    set({ entitlement: e, hydrated: true });
  },
}));

/* ─── The reads screens use ──────────────────────────────────────────────── */

/** Reactive: does the current user hold `feature`? */
export function useFeature(feature: Feature): boolean {
  return useEntitlement((s) => hasFeature(s.entitlement, feature, Date.now()));
}

/** Reactive: paying plan in force. The derived read that replaced `premium`. */
export function useIsPremium(): boolean {
  return useEntitlement((s) => isPremium(s.entitlement, Date.now()));
}

/** Imperative read for non-component code (gates inside handlers). */
export function currentEntitlement(): Entitlement {
  return useEntitlement.getState().entitlement;
}
