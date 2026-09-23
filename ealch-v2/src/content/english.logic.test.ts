import { test } from 'node:test';
import { strictEqual } from 'node:assert/strict';
import { enTailOf, englishShown, glossToggleApplies, stripEnTail } from './english.logic.ts';

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
