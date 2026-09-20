// Phase 5 / D-08 + D-02 + D-03 + D-04: the paywall's contextual copy, the
// examiner explainer branch, and the three exam call sites that make it
// reachable. Screen JSX with no RNTL infra to render it (TEST-02 is a later
// phase), so this is the source-text assertion pattern entitlementDowngrade.
// test.ts already uses.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

const appDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../app');
const read = (f: string) => readFileSync(resolve(appDir, f), 'utf8');
const count = (s: string, needle: string) => s.split(needle).length - 1;

test('the paywall maps every gate trigger to its own copy, with a generic fallback', () => {
  const src = read('paywall.tsx');
  ok(src.includes('const PAYWALL_COPY'), 'the copy map must exist');
  for (const k of ['gate:levels', 'gate:coach', 'gate:roleplay']) {
    ok(src.includes(`'${k}':`), `${k} must have contextual copy`);
  }
  ok(src.includes("PAYWALL_COPY[from ?? ''] ?? { title: T.pwTitle, lead: T.pwLead }"), 'a non-gate `from` must fall back to the generic sell copy');
  ok(src.includes('{copy.title}') && src.includes('{copy.lead}'), 'the headline must read from the map');
});

test('the examiner gate gets an explainer, never the Premiere plan picker', () => {
  const src = read('paywall.tsx');
  const branchIx = src.indexOf("if (from === 'gate:examiner')");
  const premiumIx = src.indexOf('if (premium || purchased) {');
  ok(branchIx > -1, 'the examiner branch must exist');
  ok(premiumIx > -1 && branchIx < premiumIx, 'it must be checked before the already-premium branch');
  ok(src.includes('T.pwExamTitle') && src.includes('T.pwExamBody') && src.includes('T.pwExamGotIt'), 'it must use the explainer copy');
  // 'gate:examiner' must NOT be a PAYWALL_COPY key — that would route it to the sell screen.
  const mapStart = src.indexOf('const PAYWALL_COPY');
  const mapEnd = src.indexOf('};', mapStart);
  ok(!src.slice(mapStart, mapEnd).includes('gate:examiner'), 'the examiner case must not be a sell-screen copy variant');
});

test('every exam gate tells the paywall it was an exam gate', () => {
  strictEqual(count(read('exam.tsx'), "from: 'gate:examiner'"), 1);
  strictEqual(count(read('exam-paper.tsx'), "from: 'gate:examiner'"), 2);
  ok(!read('exam.tsx').includes("router.push('/paywall')"), 'no context-free push may remain');
  ok(!read('exam-paper.tsx').includes("router.push('/paywall')"), 'no context-free push may remain');
});

test('D-03 and D-04: the paywall sells exactly the three features that are real gates', () => {
  // 05-RESEARCH.md Pitfall 1: CONTEXT.md's D-03 assumed an `audio.packs`
  // marketing bullet existed to remove. It does not, and must not appear.
  const src = read('paywall.tsx');
  strictEqual(count(src, 'T.pwFeat'), 6, 'three feature rows, each with a title and a sub');
  ok(!src.includes('audio.packs') && !src.includes('pwFeatPacks'), 'nothing may market the unbuilt audio packs');
  ok(src.includes('T.pwFeatLevels') && src.includes('T.pwFeatCoach') && src.includes('T.pwFeatRoleplay'), 'D-04: the three bullets stay granular');
});

test('D-09/D-10: every paywall branch dismisses back, and none of them unlocks anything', () => {
  const src = read('paywall.tsx');
  strictEqual(count(src, 'onClose={() => router.back()}'), 3, 'all three branches share the same dismiss');
  ok(!src.includes('setEntitlement('), 'the paywall must never write entitlement state itself');
});
