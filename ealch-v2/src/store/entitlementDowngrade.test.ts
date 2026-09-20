// Phase 4 / D-08: the transition table for `wasDowngraded`. A same-user,
// active-premium → not-premium write is the only case this must catch — an
// identity swap (sign-in/out) or a previous entitlement that was already
// inactive must never be reported, or the signal becomes noise nobody trusts.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { isPremium, wasDowngraded } from './entitlement.logic.ts';
import type { Entitlement } from '../content/progress-schema.ts';

const NOW = Date.UTC(2026, 8, 20, 12, 0, 0);
const DAY = 86_400_000;
const premium = (userId: string, expiry: number | undefined = NOW + 30 * DAY): Entitlement =>
  ({ userId, plan: 'premiere', features: ['levels.all', 'coach.unlimited'], source: 'iap', expiry }) as Entitlement;
const free = (userId: string): Entitlement =>
  ({ userId, plan: 'free', features: [], source: 'iap' }) as Entitlement;

test('losing a paying plan on the same account is a downgrade', () => {
  strictEqual(wasDowngraded(premium('u1'), free('u1'), NOW), true);
  strictEqual(wasDowngraded(free('u1'), free('u1'), NOW), false, 'already free');
  strictEqual(wasDowngraded(free('u1'), premium('u1'), NOW), false, 'an upgrade');
  strictEqual(wasDowngraded(premium('u1'), premium('u1'), NOW), false, 'a refresh, no change');
});

test('signing out is not a downgrade', () => {
  // purchases.ts's apply() keys the new entitlement on the current uid
  // (ANON_USER when signed out), and syncIdentity swaps to a different user's
  // cached entitlement on sign-in — both are a change of WHO, not a loss.
  strictEqual(wasDowngraded(premium('u1'), free('anon'), NOW), false, 'sign-out');
  strictEqual(wasDowngraded(premium('u1'), free('u2'), NOW), false, 'sign-in swap to another account');
});

test('an entitlement that had already expired is not downgraded again', () => {
  const expired = premium('u1', NOW - DAY);
  ok(!isPremium(expired, NOW), 'sanity: the fixture really is inactive at NOW');
  strictEqual(wasDowngraded(expired, free('u1'), NOW), false);
});

test('a plan that still says premiere but has expired is a downgrade', () => {
  strictEqual(wasDowngraded(premium('u1'), premium('u1', NOW - DAY), NOW), true);
});
