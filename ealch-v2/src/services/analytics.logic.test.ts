import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  carryGuestMilestones, claimOnce, distinctId, enqueueOutbox, identityCaptureBody, milestoneKey, OUTBOX_LIMIT, OUTBOX_MAX_AGE_MS,
  captureHttp, paywallSource, pruneOutbox, retryableCapture, safeProperties, validOutbox, verifiedSignup, type OutboxEntry,
} from './analytics.logic.ts';

test('only declared properties reach the product event body', () => {
  deepStrictEqual(safeProperties('first_open', { local_day: '2026-09-29', email: 'secret', transcript: 'private' } as any), { local_day: '2026-09-29' });
  deepStrictEqual(safeProperties('purchase_failed', { plan: 'yr', failure_category: 'other', message: 'raw purchase error' } as any), { plan: 'yr', failure_category: 'other' });
  const campaign = safeProperties('install_attribution', { status: 'campaign', source: 'a'.repeat(150), raw_referrer: 'private' } as any);
  strictEqual(campaign.source.length, 100);
  strictEqual('raw_referrer' in campaign, false);
  strictEqual(safeProperties('install_attribution', { status: 'campaign', campaign: 'https://example.com/?email=a@b.com' }).campaign, 'redacted');
  strictEqual(paywallSource('person@example.com'), 'direct');
  deepStrictEqual(safeProperties('lesson_completed', {
    lesson_id: 'a1.01.l1', lesson_version: '2', session_id: 'visit-1', completion_kind: 'quiz',
    answer: 'private answer', transcript: 'private speech',
  } as any), { lesson_id: 'a1.01.l1', lesson_version: '2', session_id: 'visit-1', completion_kind: 'quiz' });
});

test('first open is per install and repeat milestones use a stable claim key', () => {
  const a = milestoneKey('first_open', { local_day: '2026-09-29' }, 'install-a', 'guest');
  strictEqual(a, milestoneKey('first_open', { local_day: '2026-09-30' }, 'install-a', 'guest'));
  strictEqual(a === milestoneKey('first_open', {}, 'install-b', 'guest'), false);
  strictEqual(claimOnce(new Set([a!]), a!), false);
  strictEqual(milestoneKey('streak_updated', { local_day: '2026-09-29' }, 'install-a', 'guest'), 'streak_updated:guest:2026-09-29');
  strictEqual(milestoneKey('placement_result', { attempt_id: 'one' }, 'install-a', 'guest'), 'placement_result:one');
  const lesson = { lesson_id: 'a1.01.l1', lesson_version: '2', session_id: 'visit-1' };
  strictEqual(milestoneKey('lesson_completed', lesson, 'install-a', 'guest'), milestoneKey('lesson_completed', lesson, 'install-b', 'guest'));
  strictEqual(milestoneKey('lesson_completed', lesson, 'install-a', 'guest') ===
    milestoneKey('lesson_completed', { ...lesson, session_id: 'visit-2' }, 'install-a', 'guest'), false);
});

test('only the matching new signup links; existing sign in and fake signup user stay separate', () => {
  const pending = { signupUserId: 'new-user', signupNonce: 'nonce-1', guestJourneyId: 'guest-1' };
  strictEqual(verifiedSignup(pending, null), false);
  strictEqual(verifiedSignup(pending, { id: 'existing-user', user_metadata: { ealch_signup_nonce: 'nonce-1' } }), false);
  strictEqual(verifiedSignup(pending, { id: 'new-user', user_metadata: {} }), false);
  strictEqual(verifiedSignup(pending, { id: 'new-user', user_metadata: { ealch_signup_nonce: 'nonce-1' } }), true);
  strictEqual(distinctId(null, 'guest-1'), 'guest-1');
  strictEqual(distinctId(null, 'guest-2'), 'guest-2'); // sign-out rotation
  strictEqual(distinctId('account-a', 'phone-guest'), distinctId('account-a', 'tablet-guest'));
  strictEqual(milestoneKey('first_lesson_started', {}, 'phone', distinctId('account-a', 'phone-guest')),
    milestoneKey('first_lesson_started', {}, 'tablet', distinctId('account-a', 'tablet-guest')));
});

test('verified signup can carry learner milestones without touching install milestones', () => {
  const claims = ['first_lesson_started:guest-1', 'streak_updated:guest-1:2026-09-29', 'first_open:install-1', 'first_lesson_started:guest-2'];
  const carried = carryGuestMilestones(claims, 'guest-1', 'account-1');
  strictEqual(carried.includes('first_lesson_started:account-1'), true);
  strictEqual(carried.includes('streak_updated:account-1:2026-09-29'), true);
  strictEqual(carried.includes('first_open:install-1'), true);
  strictEqual(carried.includes('first_lesson_started:guest-2'), true);
  strictEqual(carried.includes('first_lesson_started:account-2'), false);
});

test('verified signup uses the documented identify wire shape without personal fields', () => {
  const body = identityCaptureBody('public-key', 'account-1', 'guest-1', 'install-1', 'event-1', '2026-09-29T00:00:00.000Z');
  strictEqual(body.event, '$identify');
  strictEqual(body.distinct_id, 'account-1');
  strictEqual(body.properties.$anon_distinct_id, 'guest-1');
  strictEqual(JSON.stringify(body).includes('email'), false);
  strictEqual(JSON.stringify(body).includes('nonce'), false);
});

test('install attribution reports each status once per install', () => {
  const failed = milestoneKey('install_attribution', { status: 'lookup_failed' }, 'install-a', 'guest');
  strictEqual(failed, milestoneKey('install_attribution', { status: 'lookup_failed' }, 'install-a', 'other-guest'));
  strictEqual(failed === milestoneKey('install_attribution', { status: 'campaign' }, 'install-a', 'guest'), false);
});

test('only offline, throttled and server failures are retried', () => {
  const d = (status: number | 'offline' | 'no_key') => ({ event_id: 'e', event: 'first_open', status, accepted: false });
  strictEqual(retryableCapture(d('offline')), true);
  strictEqual(retryableCapture(d(408)), true);
  strictEqual(retryableCapture(d(429)), true);
  strictEqual(retryableCapture(d(503)), true);
  strictEqual(retryableCapture(d(400)), false);
  strictEqual(retryableCapture(d('no_key')), false);
});

test('the outbox keeps one copy per event, drops stale entries, and keeps the oldest when full', () => {
  const now = Date.parse('2026-09-30T12:00:00.000Z');
  const entry = (uuid: string, at = '2026-09-30T11:00:00.000Z'): OutboxEntry =>
    ({ event: 'first_open', distinct_id: 'guest', uuid, properties: {}, timestamp: at });
  const one = enqueueOutbox([], entry('a'), now);
  deepStrictEqual(enqueueOutbox(one, entry('a'), now), one);
  const stale = entry('old', new Date(now - OUTBOX_MAX_AGE_MS - 1).toISOString());
  deepStrictEqual(pruneOutbox([stale, ...one], now), one);
  const full = Array.from({ length: OUTBOX_LIMIT }, (_, i) => entry(`e${i}`));
  const after = enqueueOutbox(full, entry('newest'), now);
  strictEqual(after.length, OUTBOX_LIMIT);
  strictEqual(after[0].uuid, 'e0');
  strictEqual(after.some((queued) => queued.uuid === 'newest'), false);
  strictEqual('api_key' in after[0], false);
});

const captureBody = { api_key: 'k', event: 'first_open', distinct_id: 'g', uuid: 'u', properties: {}, timestamp: '2026-09-30T00:00:00.000Z' };

test('a 2xx that is not PostHog JSON (captive portal) is treated as offline, not accepted', async () => {
  const portal = async () => ({ ok: true, status: 200, json: async () => { throw new SyntaxError('<html>'); } }) as unknown as Response;
  deepStrictEqual(await captureHttp(portal, 'https://h', captureBody), { event_id: 'u', event: 'first_open', status: 'offline', accepted: false });
  const posthog = async () => ({ ok: true, status: 200, json: async () => ({ status: 1 }) }) as unknown as Response;
  strictEqual((await captureHttp(posthog, 'https://h', captureBody)).accepted, true);
  const rejected = async () => ({ ok: true, status: 200, json: async () => ({ status: 0 }) }) as unknown as Response;
  strictEqual((await captureHttp(rejected, 'https://h', captureBody)).accepted, false);
});

test('a hung request times out as offline', async () => {
  const hung = (_url: string, init: RequestInit) => new Promise<Response>((_, reject) => {
    init.signal?.addEventListener('abort', () => reject(new Error('aborted')));
  });
  deepStrictEqual(await captureHttp(hung, 'https://h', captureBody, 20), { event_id: 'u', event: 'first_open', status: 'offline', accepted: false });
});

test('stored outbox entries are validated', () => {
  const good = { event: 'first_open', distinct_id: 'g', uuid: 'u', properties: {}, timestamp: '2026-09-30T00:00:00.000Z' };
  deepStrictEqual(validOutbox([null, 'x', { uuid: 1 }, good]), [good]);
  deepStrictEqual(validOutbox({ not: 'an array' }), []);
});
