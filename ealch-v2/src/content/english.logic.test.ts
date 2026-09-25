import { test } from 'node:test';
import { strictEqual } from 'node:assert/strict';
import {
  enTailOf,
  englishMode,
  englishShown,
  glossToggleApplies,
  migrateLessonEnglishMode,
  stripEnTail,
  type EnglishMode,
} from './english.logic.ts';

test('A1 and A2 always show English, whatever the preference', () => {
  for (const band of ['sons', 'a1', 'a2']) {
    strictEqual(glossToggleApplies(band), false);
    strictEqual(englishShown(band, false), true);
  }
});

test('B1 to C2 follow the preference', () => {
  for (const band of ['b1', 'b2', 'c1', 'c2']) {
    strictEqual(glossToggleApplies(band), true);
    strictEqual(englishShown(band, false), false);
    strictEqual(englishShown(band, true), true);
  }
});

test('an unknown band shows English rather than hiding it', () => {
  strictEqual(englishShown(undefined, false), true);
});

test('the English tail is removed and the French kept', () => {
  strictEqual(stripEnTail('Pars de nous. EN: Start from nous.'), 'Pars de nous.');
  strictEqual(stripEnTail('Pars de nous.\nEN: Start from nous.'), 'Pars de nous.');
  strictEqual(stripEnTail('EN: only English'), '');
});

test('the tail comes back without its marker, for its own line', () => {
  // It read as the next sentence of the same paragraph on a Pixel 6 when the
  // renderer simply left it in place: "...d'un autre passé. EN: A photo, a..."
  strictEqual(enTailOf('Pars de nous. EN: Start from nous.'), 'Start from nous.');
  strictEqual(enTailOf('Pars de nous.'), null);
  strictEqual(enTailOf('CITOYEN: pas une glose'), null);
});

test('text without a tail is untouched', () => {
  const s = "L'imparfait pose le décor.";
  strictEqual(stripEnTail(s), s);
  strictEqual(stripEnTail('CITOYEN: pas une glose'), 'CITOYEN: pas une glose');
});

// ── englishMode (D-13): the three-valued mode a band actually renders ──────

test('English-taught bands (sons, a1, a2) are always both, whatever the preference', () => {
  for (const band of ['sons', 'a1', 'a2']) {
    for (const pref of ['fr', 'both', 'onDemand'] as const) {
      strictEqual(englishMode(band, pref), 'both');
    }
  }
});

test('B1 to C2 follow the preference verbatim', () => {
  for (const band of ['b1', 'b2', 'c1', 'c2']) {
    for (const pref of ['fr', 'both', 'onDemand'] as const) {
      strictEqual(englishMode(band, pref), pref);
    }
  }
});

test('an unknown or missing band reads both, matching englishShown\'s default-on contract', () => {
  strictEqual(englishMode(null, 'fr'), 'both');
  strictEqual(englishMode(undefined, 'fr'), 'both');
  strictEqual(englishMode(null, 'onDemand'), 'both');
});

// ── migrateLessonEnglishMode (D-42): the v6 → v7 store mapping, pulled out
// pure because useStore.ts cannot be imported under `node --test` (it pulls
// in AsyncStorage/react-native — see useProgress.ts's own header note for the
// same reasoning applied to a whole store instead of one field). ──────────

test('the old true maps to both, never to onDemand — this is the one that ships broken', () => {
  const out: EnglishMode = migrateLessonEnglishMode(true);
  strictEqual(out, 'both');
});

test('the old false maps to fr', () => {
  strictEqual(migrateLessonEnglishMode(false), 'fr');
});

test('a missing old value (pre-toggle installs) maps to fr, the old default', () => {
  strictEqual(migrateLessonEnglishMode(undefined), 'fr');
});

test('nothing migrates into onDemand: it has no old value to come from', () => {
  for (const oldValue of [true, false, undefined]) {
    strictEqual(migrateLessonEnglishMode(oldValue) === 'onDemand', false);
  }
});
