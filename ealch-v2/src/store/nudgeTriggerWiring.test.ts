// Phase 5 / D-11, D-12, D-13: the upgrade nudge's one trigger site. The
// DECISION is unit-tested in entitlementNudge.test.ts; this file asserts the
// wiring that cannot be unit-tested without RNTL (TEST-02 is a later phase),
// following entitlementDowngrade.test.ts's source-text pattern.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const read = (p: string) => readFileSync(resolve(root, p), 'utf8');
const count = (s: string, needle: string) => s.split(needle).length - 1;

test('the nudge fires from roleplay completion, through the shared predicate', () => {
  const src = read('app/roleplay.tsx');
  ok(src.includes('roleplayNudgeDue('), 'the cadence decision must come from the pure predicate');
  ok(src.includes("showBanner({ kind: 'upgradeNudge', trigger: 'roleplay', copy: T.nudgeRoleplayBody })"), 'it must raise the shared banner slot, not a bespoke surface');
  ok(src.includes("trackEvent('upgrade_nudge_shown', { trigger: 'roleplay' })"), 'the nudge must be observable in the funnel');
  const clearIx = src.indexOf("clearResume('roleplay')");
  const nudgeIx = src.indexOf('roleplayNudgeDue(');
  ok(clearIx > -1 && nudgeIx > clearIx, 'the trigger sits in the completion branch, after the session is logged');
});

test('the cooldown is stamped before the banner is raised', () => {
  const src = read('app/roleplay.tsx');
  const stampIx = src.indexOf("setField('lastNudgeAt'");
  const showIx = src.indexOf("showBanner({ kind: 'upgradeNudge'");
  ok(stampIx > -1 && showIx > stampIx, 'writing the timestamp first makes a double-fire impossible');
  ok(src.includes('useProgress.getState().attempts'), 'the attempt log must be read live, not from a stale closure');
});

test('the nudge does not invent a coach-side trigger', () => {
  // 05-RESEARCH Pitfall 5 / Open Question 2: no client-side remaining-turn
  // signal exists for the coach cap. A coach nudge must not be hand-rolled
  // from a locally counted message total.
  ok(!read('app/chat.tsx').includes('upgradeNudge'), 'chat.tsx must not raise a nudge this phase');
  strictEqual(count(read('app/roleplay.tsx'), "kind: 'upgradeNudge'"), 1, 'exactly one nudge trigger site');
});

test('the nudge never blocks anything', () => {
  const src = read('app/roleplay.tsx');
  // The nudge is the moment BEFORE the wall. The block itself stays in start().
  ok(src.includes("router.push({ pathname: '/paywall', params: { from: 'gate:roleplay' } })"), 'start() keeps the real gate');
  ok(src.includes('roleplayLocked('), 'the block still uses its own predicate');
});
