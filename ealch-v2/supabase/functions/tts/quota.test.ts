// TTS quota guard. Runs on plain Node — quota.ts imports nothing at all,
// which is why this runs with no Deno, no network and no secrets. These
// tests are not ceremony: each one pins a rule that, if it broke, would
// cost money or lie silently — the burst-isolation test in particular
// exists because a quota check that only looks at ONE window would let a
// burst attacker through as long as they stayed under the daily total.
import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  classifyTier,
  decide,
  evaluateFreePreview,
  evaluatePremiumUsage,
  DEFAULT_LIMITS,
  type EntitlementRow,
  type UsageSnapshot,
} from './quota.ts';

test('classifyTier(null uid) is always guest, regardless of the entitlement argument', () => {
  strictEqual(classifyTier(null, null, Date.now()), 'guest');
  strictEqual(classifyTier(null, { plan: 'monthly', expiry: null }, Date.now()), 'guest');
});

test('classifyTier: signed-in user with no entitlements row at all is free (D-07)', () => {
  strictEqual(classifyTier('u1', null, Date.now()), 'free');
});

test('classifyTier: a non-free plan with no expiry is premium (no expiry = lifetime/active)', () => {
  const row: EntitlementRow = { plan: 'monthly', expiry: null };
  strictEqual(classifyTier('u1', row, Date.now()), 'premium');
});

test('classifyTier: a non-free plan with a future expiry is premium', () => {
  const row: EntitlementRow = { plan: 'monthly', expiry: new Date(Date.now() + 86_400_000).toISOString() };
  strictEqual(classifyTier('u1', row, Date.now()), 'premium');
});

test('classifyTier: an expired entitlement reads as free, never premium — fail-closed', () => {
  const row: EntitlementRow = { plan: 'monthly', expiry: new Date(Date.now() - 86_400_000).toISOString() };
  strictEqual(classifyTier('u1', row, Date.now()), 'free');
});

test('classifyTier: an explicit free plan is free', () => {
  const row: EntitlementRow = { plan: 'free', expiry: null };
  strictEqual(classifyTier('u1', row, Date.now()), 'free');
});

test('DEFAULT_LIMITS pins the exact D-05/D-06 numbers so nobody rounds them later', () => {
  deepStrictEqual(DEFAULT_LIMITS, {
    premiumDailyChars: 2000,
    premiumMonthlyChars: 25000,
    premiumDailyRequests: 30,
    premiumBurstPerMinute: 3,
    freePreviewChars: 2500,
  });
});

test('decide: guest is always rejected and never reads usage at all', () => {
  deepStrictEqual(decide('guest', null, null, DEFAULT_LIMITS), {
    allowed: false,
    reason: 'guest_not_allowed',
    tier: 'guest',
  });
  const generousUsage: UsageSnapshot = { dayChars: 0, dayRequests: 0, monthChars: 0, minuteRequests: 0 };
  deepStrictEqual(decide('guest', generousUsage, null, DEFAULT_LIMITS), {
    allowed: false,
    reason: 'guest_not_allowed',
    tier: 'guest',
  });
});

test('decide: premium comfortably under every window is allowed', () => {
  const usage: UsageSnapshot = { dayChars: 100, dayRequests: 1, monthChars: 100, minuteRequests: 1 };
  deepStrictEqual(decide('premium', usage, null, DEFAULT_LIMITS), { allowed: true, reason: null, tier: 'premium' });
});

test('decide: burst alone trips it even while every daily/monthly cap is fine (Pitfall 2 isolation)', () => {
  const usage: UsageSnapshot = { dayChars: 100, dayRequests: 1, monthChars: 100, minuteRequests: 4 };
  deepStrictEqual(decide('premium', usage, null, DEFAULT_LIMITS), { allowed: false, reason: 'burst', tier: 'premium' });
});

test('decide: over daily chars only reports daily_chars, checked before requests/monthly/burst', () => {
  const usage: UsageSnapshot = { dayChars: 2001, dayRequests: 1, monthChars: 2001, minuteRequests: 1 };
  deepStrictEqual(decide('premium', usage, null, DEFAULT_LIMITS), {
    allowed: false,
    reason: 'daily_chars',
    tier: 'premium',
  });
});

test('decide: over daily requests reports daily_requests', () => {
  const usage: UsageSnapshot = { dayChars: 100, dayRequests: 31, monthChars: 100, minuteRequests: 1 };
  deepStrictEqual(decide('premium', usage, null, DEFAULT_LIMITS), {
    allowed: false,
    reason: 'daily_requests',
    tier: 'premium',
  });
});

test('decide: over monthly chars reports monthly_chars', () => {
  const usage: UsageSnapshot = { dayChars: 100, dayRequests: 1, monthChars: 25001, minuteRequests: 1 };
  deepStrictEqual(decide('premium', usage, null, DEFAULT_LIMITS), {
    allowed: false,
    reason: 'monthly_chars',
    tier: 'premium',
  });
});

test('decide: free tier exactly at the cap is still allowed — boundary inclusive', () => {
  deepStrictEqual(decide('free', null, 2500, DEFAULT_LIMITS), { allowed: true, reason: null, tier: 'free' });
});

test('decide: free tier one char over the cap is rejected as free_preview_exhausted', () => {
  deepStrictEqual(decide('free', null, 2501, DEFAULT_LIMITS), {
    allowed: false,
    reason: 'free_preview_exhausted',
    tier: 'free',
  });
});

test('free path is a structural one-shot lifetime total, never a day/month window (Pitfall 3)', () => {
  // There is no day/month field anywhere in the free path's inputs for a
  // reset to hide behind — calling decide() twice with the SAME literal
  // running total must return the identical result both times, because
  // this module has no time-awareness to reset it even if it wanted to.
  const first = decide('free', null, 5000, DEFAULT_LIMITS);
  const second = decide('free', null, 5000, DEFAULT_LIMITS);
  deepStrictEqual(first, { allowed: false, reason: 'free_preview_exhausted', tier: 'free' });
  deepStrictEqual(second, { allowed: false, reason: 'free_preview_exhausted', tier: 'free' });
});

test('evaluatePremiumUsage: comfortably under every limit returns null, the "nothing tripped" sentinel', () => {
  const usage: UsageSnapshot = { dayChars: 1, dayRequests: 1, monthChars: 1, minuteRequests: 1 };
  strictEqual(evaluatePremiumUsage(usage, DEFAULT_LIMITS), null);
});

test('evaluateFreePreview: under the cap returns null, over it returns free_preview_exhausted', () => {
  strictEqual(evaluateFreePreview(2500, DEFAULT_LIMITS), null);
  strictEqual(evaluateFreePreview(2501, DEFAULT_LIMITS), 'free_preview_exhausted');
});
