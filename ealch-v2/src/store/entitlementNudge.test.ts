// Phase 5 / D-11, D-13: the upgrade-nudge cadence predicate. Fires at the
// moment a free user brushes the roleplay limit without being blocked by it —
// they finished today's free scenario, and the next one would route to the
// paywall. Deliberately not a coach-side equivalent (see entitlement.logic.ts
// comment) — roleplay is this phase's proactive nudge.
import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import { NUDGE_COOLDOWN_MS, roleplayNudgeDue } from './entitlement.logic.ts';
import type { Entitlement } from '../content/progress-schema.ts';

const NOW = Date.UTC(2026, 8, 20, 12, 0, 0);
const DAY = 86_400_000;
const premium = (userId: string, expiry: number | undefined = NOW + 30 * DAY): Entitlement =>
  ({ userId, plan: 'premiere', features: ['levels.all', 'coach.unlimited', 'roleplay.unlimited'], source: 'iap', expiry }) as Entitlement;
const free = (userId: string): Entitlement =>
  ({ userId, plan: 'free', features: [], source: 'iap' }) as Entitlement;

const today = '2026-09-20';
const yesterday = '2026-09-19';

test('NUDGE_COOLDOWN_MS is 24 hours', () => {
  strictEqual(NUDGE_COOLDOWN_MS, 86_400_000);
});

test('a user with roleplay.unlimited is never due', () => {
  const attempts = [{ activity: 'roleplay', date: today, itemId: 'sc.t0' }];
  strictEqual(roleplayNudgeDue(premium('u1'), attempts, today, 0, NOW), false);
});

test('a free user who has not played today is not due', () => {
  strictEqual(roleplayNudgeDue(free('u1'), [], today, 0, NOW), false);
});

test('a free user at exactly the free allowance, never nudged, is due', () => {
  const attempts = [{ activity: 'roleplay', date: today, itemId: 'sc.t0' }];
  strictEqual(roleplayNudgeDue(free('u1'), attempts, today, 0, NOW), true);
});

test('a free user past the allowance (>=, not ===) is still due', () => {
  const attempts = [
    { activity: 'roleplay', date: today, itemId: 'sc.t0' },
    { activity: 'roleplay', date: today, itemId: 'sc2.t0' },
  ];
  strictEqual(roleplayNudgeDue(free('u1'), attempts, today, 0, NOW), true);
});

test('attempts on a different date do not count', () => {
  const attempts = [{ activity: 'roleplay', date: yesterday, itemId: 'sc.t0' }];
  strictEqual(roleplayNudgeDue(free('u1'), attempts, today, 0, NOW), false);
});

test('attempts with a different activity do not count', () => {
  const attempts = [{ activity: 'flashcards', date: today, itemId: 'sc.t0' }];
  strictEqual(roleplayNudgeDue(free('u1'), attempts, today, 0, NOW), false);
});

test('multiple turns of the same scenario count as one scenario', () => {
  const attempts = [
    { activity: 'roleplay', date: today, itemId: 'sc.t0' },
    { activity: 'roleplay', date: today, itemId: 'sc.t1' },
    { activity: 'roleplay', date: today, itemId: 'sc.t2' },
  ];
  strictEqual(roleplayNudgeDue(free('u1'), attempts, today, 0, NOW), true);
});

test('cooldown: just under 24h since the last nudge is not due', () => {
  const attempts = [{ activity: 'roleplay', date: today, itemId: 'sc.t0' }];
  const lastNudgeAtMs = NOW - (NUDGE_COOLDOWN_MS - 1);
  strictEqual(roleplayNudgeDue(free('u1'), attempts, today, lastNudgeAtMs, NOW), false);
});

test('cooldown: exactly 24h since the last nudge is due', () => {
  const attempts = [{ activity: 'roleplay', date: today, itemId: 'sc.t0' }];
  const lastNudgeAtMs = NOW - NUDGE_COOLDOWN_MS;
  strictEqual(roleplayNudgeDue(free('u1'), attempts, today, lastNudgeAtMs, NOW), true);
});
