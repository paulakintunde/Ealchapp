// Phase 07.1 / D-32: unitBand() returns null for a band LEVELS does not know.
// The old `?? 'a1'` fallback at both level-gate chokepoints made an unknown
// band read as FREE. This guard asserts a null band reads as LOCKED instead,
// at both app/lesson.tsx and app/narrated.tsx, and that neither file still
// carries the fail-open fallback.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok } from 'node:assert';
import { test } from 'node:test';

const appDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../app');
// Normalize CRLF -> LF: this checkout's app/*.tsx files carry Windows line
// endings, and the literal source matches below would false-negative on
// every file here without it (drillGateWiring.test.ts:13-17).
const readScreen = (name: string) => readFileSync(resolve(appDir, `${name}.tsx`), 'utf8').replace(/\r\n/g, '\n');

const SCREENS = ['lesson', 'narrated'] as const;

test('neither gate chokepoint still carries the fail-open unknown-band fallback', () => {
  for (const s of SCREENS) {
    const src = readScreen(s);
    ok(!src.includes("?? 'a1'"), `${s}.tsx must not fall back an unknown band to 'a1'`);
  }
});

test('both gate chokepoints derive bandLocked so a null band reads as LOCKED', () => {
  for (const s of SCREENS) {
    const src = readScreen(s);
    // The derivation reads the band once, then treats null OR non-free as
    // locked -- so a band unitBand() cannot classify never reads as free.
    ok(
      /const band = L \? unitBand\(L\.unitId\) : null;/.test(src),
      `${s}.tsx must derive band as null when there is no lesson`,
    );
    ok(
      /band === null \|\| !\(FREE_BANDS as readonly string\[\]\)\.includes\(band\)/.test(src),
      `${s}.tsx must lock on a null band, not free it`,
    );
  }
});

test('lesson.tsx keeps its __DEV__ devPreview bypass, now for the whole draft band', () => {
  const src = readScreen('lesson');
  // It was `L?.id === 'b1.01.l1'`. The B1 drafts grew to fourteen lessons, and
  // a hard-coded id silently gated the other thirteen behind the paywall, so
  // the set now comes from the overlay itself and cannot fall behind it.
  ok(src.includes('DRAFT_LESSON_IDS.has(L.id)'), 'devPreview must read the draft id set from the overlay');
  ok(src.includes('__DEV__'), 'the bypass must stay dev-only');
  ok(!src.includes("L?.id === 'b1.01.l1'"), 'the single hard-coded draft id must be gone');
  ok(src.includes('!devPreview'), 'bandLocked must still exempt the dev preview');
});

test('both gate chokepoints still track the block and redirect to the gated paywall (D-23)', () => {
  for (const s of SCREENS) {
    const src = readScreen(s);
    ok(src.includes(`trackEvent('gate_blocked', { feature: 'levels.all', from: '${s}' })`), `${s}.tsx must still track the block`);
    ok(src.includes("router.replace({ pathname: '/paywall', params: { from: 'gate:levels' } })"), `${s}.tsx must still redirect with gate context`);
  }
});
