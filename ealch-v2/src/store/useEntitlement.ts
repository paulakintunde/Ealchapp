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
import { guardedNow } from '@/services/serverClock';
import { track } from '@/services/analytics';
import { a2LockLifted, hasFeature, isPremium, wasDowngraded, type Feature } from './entitlement.logic';
import { useUI } from './useUI';

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
  // D-08: the ONE place a premium→free flip becomes visible. This is the live,
  // Adapty-derived write path (purchases.ts's apply(), the only caller), which
  // is why the detection hangs here and NOT in the cache-read path below: that
  // path reads the offline cache, and an offline cold start for a paying user
  // must never look like a downgrade. See entitlement.logic.ts's own comment
  // on the predicate for why a user-id change and an already-inactive
  // entitlement both read as "not a downgrade".
  setEntitlement: (entitlement) =>
    set((prev) => {
      if (wasDowngraded(prev.entitlement, entitlement, guardedNow())) {
        track('entitlement_downgraded', {
          fromPlan: prev.entitlement.plan,
          toPlan: entitlement.plan,
          hadExpiry: prev.entitlement.expiry != null,
        });
        // D-15/D-16: the explanation a user is owed before the paywall
        // reappears. Raised here, as a direct side effect beside the analytics
        // call, NOT by listening to it — `track` is a one-way PostHog POST
        // gated behind ENV.posthogKey, so a build with no key configured would
        // otherwise show no notice at all (05-RESEARCH Pitfall 3).
        // Inherits this branch's two false-positive guards for free: a user-id
        // change (sign-in/out) and an already-inactive previous entitlement
        // both read as "not a downgrade", so an offline cold start for a paying
        // user can never raise this banner.
        track('reconciliation_shown');
        useUI.getState().showBanner({ kind: 'reconciliation' });
      }
      return { entitlement };
    }),
  loadFor: async (userId) => {
    const e = await getCachedEntitlement(userId ?? ANON_USER);
    set({ entitlement: e, hydrated: true });
  },
}));

/* ─── The reads screens use ──────────────────────────────────────────────── */
//
// Every one of them evaluates at `guardedNow()`, never `Date.now()`. Expiry is
// checked on-device so a lapse holds offline, which means the timestamp is the
// enforcement — and a bare device clock is a number the user can set backwards.
// See services/serverClock.ts.

/** Reactive: does the current user hold `feature`? */
export function useFeature(feature: Feature): boolean {
  const lifted = feature === 'levels.all' && a2LockLifted();
  return useEntitlement((s) => lifted || hasFeature(s.entitlement, feature, guardedNow()));
}

/** Reactive: paying plan in force. The derived read that replaced `premium`. */
export function useIsPremium(): boolean {
  return useEntitlement((s) => isPremium(s.entitlement, guardedNow()));
}

/** Imperative read for non-component code (gates inside handlers). */
export function currentEntitlement(): Entitlement {
  return useEntitlement.getState().entitlement;
}
