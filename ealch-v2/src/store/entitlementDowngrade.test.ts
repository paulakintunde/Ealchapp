// Phase 4 / D-08: the transition table for `wasDowngraded`. A same-user,
// active-premium → not-premium write is the only case this must catch — an
// identity swap (sign-in/out) or a previous entitlement that was already
// inactive must never be reported, or the signal becomes noise nobody trusts.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { isPremium, wasDowngraded } from './entitlement.logic.ts';
import type { Entitlement } from '../content/progress-schema.ts';

const srcDir = dirname(fileURLToPath(import.meta.url));

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

// The store file, read as text: the transition must be detected on the live
// write path and nowhere else. A future refactor that "simplifies" this by
// hooking the store generically would flag every offline cold start.
test('the downgrade event fires from setEntitlement, never from loadFor', () => {
  const src = readFileSync(resolve(srcDir, './useEntitlement.ts'), 'utf8');
  // `setEntitlement:`/`loadFor:` each appear more than once — in the
  // EntitlementState type declaration, in the create() implementation, and
  // (for `loadFor:`) inside the setEntitlement doc-comment explaining why
  // detection is NOT there. Anchor on the property key at the start of a
  // line (only true of the real object-literal entries) so a plain
  // substring match on prose can't be mistaken for the implementation.
  const implStart = src.indexOf('export const useEntitlement');
  const rest = src.slice(implStart);
  const setKey = /^\s*setEntitlement:/m.exec(rest);
  const loadKey = /^\s*loadFor:/m.exec(rest);
  ok(setKey && loadKey, 'both store keys must be found in the implementation');
  const setBody = rest.slice(setKey!.index, loadKey!.index);
  const loadBody = rest.slice(loadKey!.index);
  ok(setBody.includes("track('entitlement_downgraded'"), 'setEntitlement must fire the event');
  ok(setBody.includes('wasDowngraded('), 'setEntitlement must use the pure predicate');
  ok(!loadBody.includes('entitlement_downgraded'), 'loadFor must NOT fire it (offline cold start)');
});
