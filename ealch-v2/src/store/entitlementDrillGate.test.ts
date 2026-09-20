// Phase 5 / D-06: the drill-deck band gate. The four flat-deck drill screens
// (flashcards, dictation, voiceflash, sentence) have no unit to gate — they
// hold a raw corpus slice reached either by an explicit `?level=` param or by
// no level at all (a mixed theme/domain deck). drillDeckGate is the one call
// both shapes route through.
import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { drillDeckGate, drillLevelLocked, freeBandItems } from './entitlement.logic.ts';

test('freeBandItems: an entitled user gets the deck untouched', () => {
  deepStrictEqual(freeBandItems([], true), []);
  const deck = [{ level: 'sons' }, { level: 'a1' }, { level: 'a2' }, { level: 'b2' }];
  deepStrictEqual(freeBandItems(deck, true), deck);
});

test('freeBandItems: a free user keeps only sons/a1, in input order', () => {
  const deck = [{ level: 'sons' }, { level: 'a1' }, { level: 'a2' }, { level: 'b2' }];
  deepStrictEqual(freeBandItems(deck, false), [{ level: 'sons' }, { level: 'a1' }]);
});

test('drillLevelLocked: absent level is a mixed deck, never locked here', () => {
  strictEqual(drillLevelLocked(undefined, false), false);
});

test('drillLevelLocked: an explicit non-free band is locked for a free user', () => {
  strictEqual(drillLevelLocked('a2', false), true);
  strictEqual(drillLevelLocked('a1', false), false);
  strictEqual(drillLevelLocked('sons', false), false);
  strictEqual(drillLevelLocked('a2', true), false);
});

test('drillLevelLocked: an unrecognised band reads as locked, never free', () => {
  strictEqual(drillLevelLocked('not-a-band', false), true);
});

test('drillDeckGate: a locked explicit level empties the deck regardless of raw', () => {
  const raw = [{ level: 'a2' }, { level: 'b1' }];
  deepStrictEqual(drillDeckGate(raw, 'a2', false), { items: [], locked: true });
});

test('drillDeckGate: a mixed deck with no level param filters to free bands', () => {
  deepStrictEqual(drillDeckGate([{ level: 'a1' }, { level: 'a2' }], undefined, false), {
    items: [{ level: 'a1' }],
    locked: false,
  });
});

test('drillDeckGate: a mixed deck that filters to nothing IS locked', () => {
  deepStrictEqual(drillDeckGate([{ level: 'a2' }, { level: 'b1' }], undefined, false), {
    items: [],
    locked: true,
  });
});

test('drillDeckGate: an empty corpus query is an empty deck, not a paywall', () => {
  deepStrictEqual(drillDeckGate([], undefined, false), { items: [], locked: false });
});

test('drillDeckGate: an entitled user with no level param gets everything', () => {
  deepStrictEqual(drillDeckGate([{ level: 'a2' }], undefined, true), {
    items: [{ level: 'a2' }],
    locked: false,
  });
});
