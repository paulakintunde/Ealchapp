// Product analytics — the paywall funnel Phase 10 specs, and the seam every
// later event goes through. PostHog over its plain HTTP capture endpoint: no
// SDK, no autocapture, no session replay; one POST per event. With no
// EXPO_PUBLIC_POSTHOG_KEY set this is a complete no-op — never a queue that
// pretends it will flush somewhere.
//
// Phase 2 named "no cohort telemetry (PostHog)" as a gap; this closes the
// client half. Events are fire-and-forget and this module never throws — an
// analytics outage must not cost a purchase.
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';
import { Platform } from 'react-native';
import { ENV } from './env';
import { useStore } from '@/store/useStore';

/** The funnel vocabulary — every event the paywall/gating layer may emit.
 *  A union, not free strings, so a typo is a compile error rather than a
 *  dashboard mystery. Server-side events (coach_turn_cap_reached, webhook
 *  renewals) are emitted by the edge functions under their own names. */
export type AnalyticsEvent =
  | 'paywall_viewed' // props: from (trigger entry point)
  | 'plan_selected' // props: plan ('mo' | 'yr')
  | 'purchase_started' // props: plan, currency
  | 'purchase_completed' // props: plan, currency
  | 'purchase_cancelled' // props: plan
  | 'purchase_failed' // props: plan, message
  | 'restore_started'
  | 'restore_completed' // props: found (boolean)
  | 'gate_blocked' // props: feature, from
  | 'placement_paywall_offered'; // props: level

type Props = Record<string, string | number | boolean>;

/** Stable per-install id for users with no account. Kept separate from any
 *  auth identity; once a user signs in, their auth uid becomes the distinct
 *  id and PostHog's own aliasing (if ever wanted) is a server-side concern. */
let anonIdCache: string | null = null;
async function anonId(): Promise<string> {
  if (anonIdCache) return anonIdCache;
  try {
    const stored = await AsyncStorage.getItem('ealch-analytics-id');
    if (stored) return (anonIdCache = stored);
    const fresh = Crypto.randomUUID();
    await AsyncStorage.setItem('ealch-analytics-id', fresh);
    return (anonIdCache = fresh);
  } catch {
    // Storage refused: a per-launch id still beats dropping the event.
    return (anonIdCache = Crypto.randomUUID());
  }
}

async function send(event: AnalyticsEvent, props: Props): Promise<void> {
  try {
    const distinctId = useStore.getState().userId ?? (await anonId());
    await fetch(`${ENV.posthogHost}/capture/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: ENV.posthogKey,
        event,
        distinct_id: distinctId,
        properties: { ...props, $lib: 'ealch-app', platform: Platform.OS },
        timestamp: new Date().toISOString(),
      }),
    });
  } catch {
    // Offline or PostHog down — the event is lost, and that is the honest
    // trade at this stage: no local queue claiming durability it lacks.
  }
}

/** Emit a funnel event. Synchronous signature on purpose — call sites must
 *  never await analytics on a user-facing path. */
export function track(event: AnalyticsEvent, props: Props = {}): void {
  if (!ENV.posthogKey) return;
  void send(event, props);
}
