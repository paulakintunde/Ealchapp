/// <reference types="jest" />
const mockStorage = new Map<string, string>();
let mockCounter = 0;
let mockUserId: string | null = null;
jest.mock('@react-native-async-storage/async-storage', () => ({
  __esModule: true,
  default: {
    getItem: jest.fn(async (key: string) => mockStorage.get(key) ?? null),
    setItem: jest.fn(async (key: string, value: string) => { mockStorage.set(key, value); }),
    removeItem: jest.fn(async (key: string) => { mockStorage.delete(key); }),
  },
}));
jest.mock('expo-crypto', () => ({
  randomUUID: () => `00000000-0000-4000-a000-${String(++mockCounter).padStart(12, '0')}`,
  CryptoDigestAlgorithm: { SHA256: 'SHA256' },
  digestStringAsync: async () => 'a'.repeat(64),
}));
jest.mock('@/services/env', () => ({ ENV: {
  posthogKey: 'public-test-key', posthogHost: 'https://capture.test', analyticsTestBuild: true,
} }));
jest.mock('@/store/useStore', () => ({ useStore: { getState: () => ({ userId: mockUserId, freeze: 1 }) } }));

import {
  flushAnalyticsOutbox, getCaptureDiagnostics, guestJourneyId, handleAuthTransition,
  prepareEmailSignup, recordAcceptedEmailSignup, track,
} from '@/services/analytics';
import { useProgress } from '@/store/useProgress';

const flush = () => new Promise((resolve) => setTimeout(resolve, 20));
const originalFetch = globalThis.fetch;
afterAll(() => { globalThis.fetch = originalFetch; });
beforeEach(() => { mockUserId = null; });

test('track returns immediately; configured capture records HTTP acceptance and rejection', async () => {
  const calls: Array<{ event: string; properties: Record<string, unknown> }> = [];
  const fetchMock = jest.fn(async (_url: string, init: RequestInit) => {
    const body = JSON.parse(String(init.body));
    calls.push(body);
    if (calls.length === 1) return { ok: false, status: 400, json: async () => ({}) };
    if (calls.length === 2) throw new Error('offline private detail');
    return { ok: true, status: 200, json: async () => ({ status: 1 }) };
  });
  globalThis.fetch = fetchMock as unknown as typeof fetch;
  expect(track('paywall_viewed', { from: 'direct' })).toBeUndefined();
  track('paywall_viewed', { from: 'home' });
  track('paywall_viewed', { from: 'settings' });
  await flush();
  // The offline event waits in the outbox and goes out first, ahead of the next live event.
  expect(getCaptureDiagnostics().map((d) => [d.event, d.status, d.accepted])).toEqual([
    ['paywall_viewed', 400, false], ['paywall_viewed', 'offline', false], ['paywall_viewed', 200, true], ['paywall_viewed', 200, true],
  ]);
  expect(calls.map((call) => call.properties.from)).toEqual(['direct', 'home', 'home', 'settings']);
  expect(calls[0].properties).toHaveProperty('install_id');
  expect(calls[0].properties).toHaveProperty('journey_id');
  expect(JSON.stringify(calls)).not.toContain('offline private detail');
});

test('only a verified new signup sends identify before signup completed; existing sign-in does not merge', async () => {
  const events: Array<{ event: string; distinct_id: string; properties: Record<string, unknown> }> = [];
  globalThis.fetch = jest.fn(async (_url: string, init: RequestInit) => {
    events.push(JSON.parse(String(init.body)));
    return { ok: true, status: 200, json: async () => ({ status: 1 }) };
  }) as unknown as typeof fetch;
  const before = await guestJourneyId();
  const { nonce, guestJourneyId: journey } = await prepareEmailSignup();
  expect(journey).toBe(before);
  await recordAcceptedEmailSignup('fake-signup-user', nonce, journey);
  await handleAuthTransition('SIGNED_IN', { id: 'existing-account', user_metadata: {} });
  expect(events).toHaveLength(0);
  await recordAcceptedEmailSignup('new-account', nonce, journey);
  await handleAuthTransition('SIGNED_IN', { id: 'new-account', user_metadata: { ealch_signup_nonce: nonce } });
  await flush();
  expect(events.map((e) => e.event)).toEqual(['$identify', 'signup_completed']);
  expect(events[0].properties.$anon_distinct_id).toBe(before);
  expect(events[1].distinct_id).toBe('new-account');
  await handleAuthTransition('SIGNED_IN', { id: 'new-account', user_metadata: { ealch_signup_nonce: nonce } });
  expect(events).toHaveLength(2);
  await handleAuthTransition('SIGNED_OUT', null);
  expect(await guestJourneyId()).not.toBe(before);
});

test('the first logged practice session of a local day produces one accepted streak capture', async () => {
  const events: Array<{ event: string; properties: Record<string, unknown> }> = [];
  globalThis.fetch = jest.fn(async (_url: string, init: RequestInit) => {
    events.push(JSON.parse(String(init.body)));
    return { ok: true, status: 200, json: async () => ({ status: 1 }) };
  }) as unknown as typeof fetch;
  useProgress.setState({ sessions: [] });
  useProgress.getState().logSession('placement', 1);
  useProgress.getState().logSession('lesson', 1);
  await flush();
  const streaks = events.filter((event) => event.event === 'streak_updated');
  expect(streaks).toHaveLength(1);
  expect(streaks[0].properties.days).toBe(1);
  expect(streaks[0].properties.event_id).toBeTruthy();
  expect(getCaptureDiagnostics().some((diagnostic) => diagnostic.event === 'streak_updated' && diagnostic.accepted)).toBe(true);
});

test('verified guest signup keeps first lesson once, while an existing sign-in stays separate', async () => {
  const events: Array<{ event: string; distinct_id: string }> = [];
  globalThis.fetch = jest.fn(async (_url: string, init: RequestInit) => {
    events.push(JSON.parse(String(init.body)));
    return { ok: true, status: 200, json: async () => ({ status: 1 }) };
  }) as unknown as typeof fetch;
  const guest = await guestJourneyId();
  track('first_lesson_started', { lesson_id: 'sons.01.l1', unit_id: 'sons.01' });
  await flush();
  const { nonce, guestJourneyId: journey } = await prepareEmailSignup();
  expect(journey).toBe(guest);
  await recordAcceptedEmailSignup('linked-account', nonce, journey);
  mockUserId = 'linked-account';
  await handleAuthTransition('SIGNED_IN', { id: 'linked-account', user_metadata: { ealch_signup_nonce: nonce } });
  track('first_lesson_started', { lesson_id: 'sons.02.l1', unit_id: 'sons.02' });
  await flush();
  expect(events.filter(({ event }) => event === 'first_lesson_started')).toHaveLength(1);

  await handleAuthTransition('SIGNED_OUT', null);
  mockUserId = null;
  track('first_lesson_started', { lesson_id: 'sons.03.l1', unit_id: 'sons.03' });
  await flush();
  mockUserId = 'existing-account';
  await handleAuthTransition('SIGNED_IN', { id: 'existing-account', user_metadata: {} });
  track('first_lesson_started', { lesson_id: 'sons.04.l1', unit_id: 'sons.04' });
  await flush();
  const lessonEvents = events.filter(({ event }) => event === 'first_lesson_started');
  expect(lessonEvents).toHaveLength(3);
  expect(lessonEvents[0].distinct_id).toBe(guest);
  expect(lessonEvents[1].distinct_id).not.toBe(guest);
  expect(lessonEvents[2].distinct_id).toBe('existing-account');
});

test('an offline milestone waits in the outbox and is resent with its original ID and time; a 400 is not retried', async () => {
  mockStorage.delete('ealch-analytics-outbox');
  const sent: Array<{ event: string; uuid: string; timestamp: string; api_key: string }> = [];
  let online = false;
  globalThis.fetch = jest.fn(async (_url: string, init: RequestInit) => {
    if (!online) throw new Error('offline');
    const body = JSON.parse(String(init.body));
    sent.push(body);
    return body.event === 'paywall_viewed'
      ? { ok: false, status: 400, json: async () => ({}) }
      : { ok: true, status: 200, json: async () => ({ status: 1 }) };
  }) as unknown as typeof fetch;

  track('first_open', { local_day: '2026-09-30', opened_at: '2026-09-30T08:00:00.000Z' });
  await flush();
  const queued = JSON.parse(mockStorage.get('ealch-analytics-outbox') ?? '[]');
  expect(queued.map((entry: { event: string }) => entry.event)).toEqual(['first_open']);
  expect(JSON.stringify(queued)).not.toContain('public-test-key');

  // The milestone stays claimed: a repeat call must not create a second event.
  track('first_open', { local_day: '2026-09-30', opened_at: '2026-09-30T08:00:00.000Z' });
  await flush();
  expect(JSON.parse(mockStorage.get('ealch-analytics-outbox') ?? '[]')).toHaveLength(1);

  online = true;
  await flushAnalyticsOutbox();
  expect(sent.map((body) => body.event)).toEqual(['first_open']);
  expect(sent[0].uuid).toBe(queued[0].uuid);
  expect(sent[0].timestamp).toBe(queued[0].timestamp);
  expect(sent[0].api_key).toBe('public-test-key');
  expect(mockStorage.has('ealch-analytics-outbox')).toBe(false);

  // A rejected request is a defect for QA, not something to resend forever.
  track('paywall_viewed', { from: 'home' });
  await flush();
  expect(mockStorage.has('ealch-analytics-outbox')).toBe(false);
});

test('a 5xx stops a flush partway, keeps the rest in order, and new events queue behind them', async () => {
  mockStorage.delete('ealch-analytics-outbox');
  const sent: string[] = [];
  let mode: 'offline' | 'second-fails' | 'online' = 'offline';
  globalThis.fetch = jest.fn(async (_url: string, init: RequestInit) => {
    if (mode === 'offline') throw new Error('offline');
    const body = JSON.parse(String(init.body));
    if (mode === 'second-fails' && sent.length === 1) return { ok: false, status: 503, json: async () => ({}) };
    sent.push(body.properties.plan);
    return { ok: true, status: 200, json: async () => ({ status: 1 }) };
  }) as unknown as typeof fetch;
  track('plan_selected', { plan: 'mo' });
  track('plan_selected', { plan: 'yr' });
  await flush();
  expect(JSON.parse(mockStorage.get('ealch-analytics-outbox') ?? '[]')).toHaveLength(2);

  mode = 'second-fails';
  await flushAnalyticsOutbox();
  expect(sent).toEqual(['mo']);
  const left = JSON.parse(mockStorage.get('ealch-analytics-outbox') ?? '[]');
  expect(left.map((entry: { properties: { plan: string } }) => entry.properties.plan)).toEqual(['yr']);

  // Still failing: a new event must not overtake the queued one.
  mode = 'offline';
  track('plan_selected', { plan: 'mo' });
  await flush();
  expect(JSON.parse(mockStorage.get('ealch-analytics-outbox') ?? '[]').map((entry: { properties: { plan: string } }) => entry.properties.plan)).toEqual(['yr', 'mo']);

  mode = 'online';
  await flushAnalyticsOutbox();
  expect(sent).toEqual(['mo', 'yr', 'mo']);
  expect(mockStorage.has('ealch-analytics-outbox')).toBe(false);
});

test('a malformed stored entry is skipped instead of blocking the outbox', async () => {
  mockStorage.set('ealch-analytics-outbox', JSON.stringify([null, 'junk', { uuid: 7 }]));
  const sent: string[] = [];
  globalThis.fetch = jest.fn(async (_url: string, init: RequestInit) => {
    sent.push(JSON.parse(String(init.body)).event);
    return { ok: true, status: 200, json: async () => ({ status: 1 }) };
  }) as unknown as typeof fetch;
  await flushAnalyticsOutbox();
  expect(mockStorage.has('ealch-analytics-outbox')).toBe(false);
  track('plan_selected', { plan: 'yr' });
  await flush();
  expect(sent).toEqual(['plan_selected']);
});
