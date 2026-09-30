import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { claimOnce, distinctId, identityCaptureBody, milestoneKey, paywallSource, safeProperties, verifiedSignup } from './analytics.logic.ts';

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

test('verified signup uses the documented identify wire shape without personal fields', () => {
  const body = identityCaptureBody('public-key', 'account-1', 'guest-1', 'install-1', 'event-1', '2026-09-29T00:00:00.000Z');
  strictEqual(body.event, '$identify');
  strictEqual(body.distinct_id, 'account-1');
  strictEqual(body.properties.$anon_distinct_id, 'guest-1');
  strictEqual(JSON.stringify(body).includes('email'), false);
  strictEqual(JSON.stringify(body).includes('nonce'), false);
});
