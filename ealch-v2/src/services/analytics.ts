// Explicit, fire-and-forget product events through PostHog HTTP capture.
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';
import { Platform } from 'react-native';
import { ENV } from './env';
import { useStore } from '@/store/useStore';
import { setPracticeDayListener } from '@/store/useProgress';
import { practicedDayMilestone } from './engagement.logic';
import {
  captureHttp, claimOnce, distinctId, identityCaptureBody, milestoneKey, safeProperties, verifiedSignup,
  type AnalyticsEvent, type CaptureBody, type CaptureDiagnostic, type EventProperties,
  type NoPropsEvent, type PendingSignup, type PropsEvent, type VerifiedUser,
} from './analytics.logic';

export type { AnalyticsEvent, EventProperties } from './analytics.logic';

const INSTALL_KEY = 'ealch-analytics-id'; // preserve IDs made by older installs
const JOURNEY_KEY = 'ealch-analytics-journey-id';
const CLAIMS_KEY = 'ealch-analytics-milestones';
const SIGNUP_KEY = 'ealch-analytics-pending-signup';
const LINKED_KEY = 'ealch-analytics-linked-signups';
let installCache: string | null = null;
let journeyCache: string | null = null;
let installPending: Promise<string> | null = null;
let journeyPending: Promise<string> | null = null;
let taskTail: Promise<void> = Promise.resolve();
let identityTail: Promise<void> = Promise.resolve();
const captureDiagnostics: CaptureDiagnostic[] = [];
function recordDiagnostic(diagnostic: CaptureDiagnostic): void {
  if (!ENV.analyticsTestBuild || !ENV.posthogKey) return;
  captureDiagnostics.push(diagnostic);
  if (captureDiagnostics.length > 200) captureDiagnostics.shift();
}

async function storedId(key: string, cached: string | null, save: (id: string) => void): Promise<string> {
  if (cached) return cached;
  try {
    const id = (await AsyncStorage.getItem(key)) || Crypto.randomUUID();
    save(id);
    await AsyncStorage.setItem(key, id);
    return id;
  } catch {
    const id = Crypto.randomUUID();
    save(id);
    return id;
  }
}

export function installId(): Promise<string> {
  if (installCache) return Promise.resolve(installCache);
  return (installPending ??= storedId(INSTALL_KEY, installCache, (id) => { installCache = id; }));
}
export async function guestJourneyId(): Promise<string> {
  if (journeyCache) return journeyCache;
  return (journeyPending ??= (async () => {
    try {
      // A legacy install ID can contain several people's guest activity on a
      // shared device. Start a separate journey when this key first appears.
      const id = (await AsyncStorage.getItem(JOURNEY_KEY)) || Crypto.randomUUID();
      journeyCache = id;
      await AsyncStorage.setItem(JOURNEY_KEY, id);
      return id;
    } catch {
      return (journeyCache = Crypto.randomUUID());
    }
  })());
}

/** Keep each guest period distinct, including on a shared device. */
export async function rotateGuestJourney(): Promise<string> {
  await guestJourneyId();
  const id = Crypto.randomUUID();
  journeyCache = id;
  try { await AsyncStorage.setItem(JOURNEY_KEY, id); } catch { /* best effort */ }
  return id;
}

async function eventIdFor(key: string | null): Promise<string> {
  if (!key) return Crypto.randomUUID();
  const hex = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, key);
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-5${hex.slice(13, 16)}-a${hex.slice(17, 20)}-${hex.slice(20, 32)}`;
}

async function claimMilestone(key: string): Promise<boolean> {
  try {
    const claims = JSON.parse((await AsyncStorage.getItem(CLAIMS_KEY)) ?? '[]') as string[];
    if (!claimOnce(new Set(claims), key)) return false;
    claims.push(key);
    await AsyncStorage.setItem(CLAIMS_KEY, JSON.stringify(claims));
    return true;
  } catch {
    return true; // storage outage must not block a learner action
  }
}

async function send<E extends AnalyticsEvent>(event: E, input: EventProperties[E], userId: string | null): Promise<void> {
  try {
    const [install_id, journey_id] = await Promise.all([installId(), guestJourneyId()]);
    const properties = safeProperties(event, input);
    const identity = distinctId(userId, journey_id);
    const key = milestoneKey(event, properties, install_id, identity);
    if (key && !(await claimMilestone(key))) return;
    const event_id = await eventIdFor(key);
    const body: CaptureBody = {
      api_key: ENV.posthogKey, event, distinct_id: identity, uuid: event_id,
      properties: { ...properties, event_id, install_id, journey_id, $lib: 'ealch-app', platform: Platform.OS },
      timestamp: new Date().toISOString(),
    };
    const diagnostic = await captureHttp(fetch, ENV.posthogHost, body);
    recordDiagnostic(diagnostic);
  } catch { /* Analytics cannot interrupt the app. */ }
}

/** Capture call sites never await analytics. The UID is snapshotted at call time. */
export function track<E extends PropsEvent>(event: E, props: EventProperties[E]): void;
export function track<E extends NoPropsEvent>(event: E): void;
export function track(event: AnalyticsEvent, props: EventProperties[AnalyticsEvent] = {}): void {
  if (!ENV.posthogKey) return;
  const userId = useStore.getState().userId;
  taskTail = taskTail.then(() => send(event, props, userId)).catch(() => {});
}

/** Test builds can inspect acceptance without exposing event bodies or credentials. */
export function getCaptureDiagnostics(): readonly CaptureDiagnostic[] {
  return ENV.analyticsTestBuild ? [...captureDiagnostics] : [];
}

export async function prepareEmailSignup(): Promise<{ nonce: string; guestJourneyId: string }> {
  return { nonce: Crypto.randomUUID(), guestJourneyId: await guestJourneyId() };
}

export async function recordAcceptedEmailSignup(signupUserId: string, signupNonce: string, journeyId: string): Promise<void> {
  const pending: PendingSignup = { signupUserId, signupNonce, guestJourneyId: journeyId };
  try { await AsyncStorage.setItem(SIGNUP_KEY, JSON.stringify(pending)); } catch { /* no cross-restart link */ }
}

async function pendingSignup(): Promise<PendingSignup | null> {
  try {
    const raw = await AsyncStorage.getItem(SIGNUP_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as PendingSignup;
    return value.signupUserId && value.signupNonce && value.guestJourneyId ? value : null;
  } catch { return null; }
}

/** Run after Supabase has confirmed a session, never on a signup form response alone. */
async function applyAuthTransition(event: string, user: VerifiedUser | null): Promise<void> {
  if (!user) {
    if (event === 'SIGNED_OUT') {
      try { await AsyncStorage.removeItem(SIGNUP_KEY); } catch { /* best effort */ }
      await rotateGuestJourney();
    }
    return;
  }
  const pending = await pendingSignup();
  if (!pending) return;
  try { await AsyncStorage.removeItem(SIGNUP_KEY); } catch { /* best effort */ }
  if (!verifiedSignup(pending, user)) return; // existing-account sign-in or fake signup response
  let linked: string[] = [];
  try { linked = JSON.parse((await AsyncStorage.getItem(LINKED_KEY)) ?? '[]') as string[]; } catch { /* best effort */ }
  if (linked.includes(user.id)) return;
  linked.push(user.id);
  try { await AsyncStorage.setItem(LINKED_KEY, JSON.stringify(linked)); } catch { /* best effort */ }
  taskTail = taskTail.then(async () => {
    const [install_id] = await Promise.all([installId()]);
    const event_id = Crypto.randomUUID();
    const body = identityCaptureBody(ENV.posthogKey, user.id, pending.guestJourneyId, install_id, event_id, new Date().toISOString());
    const diagnostic = await captureHttp(fetch, ENV.posthogHost, body);
    recordDiagnostic(diagnostic);
  }).then(() => send('signup_completed', { method: 'email', account_id: user.id }, user.id)).catch(() => {});
}

export function handleAuthTransition(event: string, user: VerifiedUser | null): Promise<void> {
  identityTail = identityTail.then(() => applyAuthTransition(event, user)).catch(() => {});
  return identityTail;
}

// Session persistence owns the boundary; analytics supplies the current freeze
// count without introducing a useProgress -> useStore import cycle.
setPracticeDayListener((before, after, day) => {
  const milestone = practicedDayMilestone(before, after, day, useStore.getState().freeze);
  if (milestone) track('streak_updated', milestone);
});
