// The offline-entitlement-cache SEAM Phase 9's target names ("an offline
// entitlement cache that reconciles on foreground") — not the feature. There
// is no entitlement source yet: RevenueCat is Phase 10. Building a cache with
// no real writer would be exactly the kind of surface this codebase's own
// rule forbids ("no surface without a backing") if anything read it as truth
// today — so nothing does. This module exists only so Phase 10 has a ready
// place to put `customerInfo` when it lands, the same "extract the seam now,
// wire it later" move Phase 0 made for pricing.ts.
//
// getCachedEntitlement's default (`plan: 'free', features: []`) is honest
// until Phase 10 calls setCachedEntitlement — it is what a user who has never
// paid actually has, not a placeholder standing in for a paid state.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isValidEntitlement, type Entitlement } from '@/content/progress-schema';

const KEY_PREFIX = 'ealch-entitlement:';

function freeEntitlement(userId: string): Entitlement {
  return { userId, plan: 'free', features: [], source: 'iap' };
}

/** Read the last entitlement Phase 10 cached for this user, or the honest
 *  free default if none was ever cached (which is every user, today). Never
 *  throws — a corrupt or missing cache reads as "free", not an error. */
export async function getCachedEntitlement(userId: string): Promise<Entitlement> {
  try {
    const raw = await AsyncStorage.getItem(KEY_PREFIX + userId);
    if (!raw) return freeEntitlement(userId);
    const parsed = JSON.parse(raw);
    return isValidEntitlement(parsed) && parsed.userId === userId ? parsed : freeEntitlement(userId);
  } catch {
    return freeEntitlement(userId);
  }
}

/** Persist the latest known entitlement, keyed by user. Phase 10 calls this
 *  after every Adapty profile update (purchase, restore, renewal,
 *  webhook-driven change) so a later offline foreground has something
 *  truthful to reconcile against before the network round trip completes. */
export async function setCachedEntitlement(entitlement: Entitlement): Promise<void> {
  try {
    await AsyncStorage.setItem(KEY_PREFIX + entitlement.userId, JSON.stringify(entitlement));
  } catch {
    // Best-effort cache; Adapty's live profile remains authoritative
    // regardless of whether the cache write succeeded.
  }
}
