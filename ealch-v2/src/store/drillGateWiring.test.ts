// Phase 5 / D-06: the four drill screens had ZERO entitlement checks. These are
// JSX behaviours with no RNTL infra to render them (TEST-02 is a later phase),
// so the guard is the source-text assertion pattern entitlementDowngrade.test.ts
// already uses for the store write path. If any screen loses its gate, this fails.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok } from 'node:assert';
import { test } from 'node:test';

const appDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../app');
const SCREENS = ['flashcards', 'dictation', 'voiceflash', 'sentence'] as const;
// Normalize CRLF → LF: this checkout's app/*.tsx files carry Windows line
// endings, and the multiline placeholder assertion below is a literal source
// match — without normalizing, it would false-negative on every file here
// despite the gate being wired correctly.
const readScreen = (name: string) => readFileSync(resolve(appDir, `${name}.tsx`), 'utf8').replace(/\r\n/g, '\n');

test('every drill screen runs its deck through the shared band gate', () => {
  for (const s of SCREENS) {
    const src = readScreen(s);
    ok(src.includes('drillDeckGate('), `${s}.tsx must call drillDeckGate`);
    ok(src.includes("useFeature('levels.all')"), `${s}.tsx must read the reactive entitlement`);
    ok(!src.includes('FREE_BANDS'), `${s}.tsx must not re-derive band logic locally`);
  }
});

test('every drill screen redirects to the contextual paywall when locked', () => {
  for (const s of SCREENS) {
    const src = readScreen(s);
    ok(src.includes(`trackEvent('gate_blocked', { feature: 'levels.all', from: '${s}' })`), `${s}.tsx must track the block`);
    ok(src.includes("router.replace({ pathname: '/paywall', params: { from: 'gate:levels' } })"), `${s}.tsx must redirect with gate context`);
  }
});

test('every drill screen short-circuits its render on the locked pass', () => {
  for (const s of SCREENS) {
    const src = readScreen(s);
    ok(
      src.includes('if (bandLocked) {\n    return <View style={{ flex: 1, backgroundColor: t.bg }} />;\n  }'),
      `${s}.tsx must return the bare placeholder before any content JSX`,
    );
  }
});
