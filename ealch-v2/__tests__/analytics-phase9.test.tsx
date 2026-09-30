/// <reference types="jest" />
const mockStorage = new Map<string, string>();
let mockCounter = 0;
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
jest.mock('@/store/useStore', () => ({ useStore: { getState: () => ({ userId: null, freeze: 1 }) } }));

import {
  getCaptureDiagnostics, guestJourneyId, handleAuthTransition,
  prepareEmailSignup, recordAcceptedEmailSignup, track,
} from '@/services/analytics';
import { useProgress } from '@/store/useProgress';

const flush = () => new Promise((resolve) => setTimeout(resolve, 20));
const originalFetch = globalThis.fetch;
afterAll(() => { globalThis.fetch = originalFetch; });

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
  expect(getCaptureDiagnostics().map((d) => [d.status, d.accepted])).toEqual([
    [400, false], ['offline', false], [200, true],
  ]);
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
