import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parcoursSteps, themeLevels, themeOfWeek, themeSummaries } from './theme.logic.ts';
import type { Item, Scenario } from './schema.ts';

const item = (id: string, theme: string, level: Item['level'], drills: Item['drills']): Item => ({
  id,
  kind: 'word',
  level,
  theme,
  fr: 'x',
  en: 'x',
  tags: [],
  drills,
  version: 1,
});

const sc: Scenario = {
  id: 'sc.a1.cafe.001',
  level: 'a1',
  theme: 'cafe',
  title: 'Au comptoir',
  turns: [
    { ai: 'a', en: 'a', user: 'b' },
    { ai: 'c', en: 'c', user: 'd' },
  ],
  version: 1,
};

const items: Item[] = [
  item('fr.a1.cafe.001', 'cafe', 'a1', ['flashcard', 'sentence']),
  item('fr.a1.cafe.002', 'cafe', 'a1', ['flashcard', 'voiceflash']),
  item('fr.a2.cafe.001', 'cafe', 'a2', ['flashcard']),
  item('fr.a1.marche.001', 'marche', 'a1', ['flashcard']),
];

test('themeSummaries groups items and scenarios, derives levels and progress', () => {
  const sums = themeSummaries(items, [sc], [{ itemId: 'fr.a1.cafe.001', correct: true }]);
  const cafe = sums.find((s) => s.slug === 'cafe');
  assert.ok(cafe);
  assert.deepEqual(cafe.levels, ['a1', 'a2']);
  assert.equal(cafe.total, 3 + 2); // 3 items + 2 scenario turns
  assert.equal(cafe.learned, 1);
  // biggest theme leads
  assert.equal(sums[0].slug, 'cafe');
});

test('themeSummaries counts learned scenario turns', () => {
  const sums = themeSummaries([], [sc], [{ itemId: 'sc.a1.cafe.001.t0', correct: true }]);
  assert.equal(sums[0].learned, 1);
});

test('parcoursSteps: first non-empty step open, rest locked, empty steps skipped as gates', () => {
  const steps = parcoursSteps(items, [sc], [], 'cafe', 'a1');
  const by = Object.fromEntries(steps.map((s) => [s.key, s]));
  assert.equal(by.decouvrir.state, 'open'); // 2 flashcard items
  assert.equal(by.decouvrir.total, 2);
  assert.equal(by.construire.state, 'locked'); // 1 sentence item
  assert.equal(by.prononcer.state, 'locked');
  assert.equal(by.ecouter.state, 'empty'); // no dictation items
  assert.equal(by.scene.state, 'locked');
  assert.equal(by.scene.total, 2); // scenario turns
});

test('parcoursSteps: a done step opens the next; empty never gates', () => {
  const attempts = [
    { itemId: 'fr.a1.cafe.001', correct: true },
    { itemId: 'fr.a1.cafe.002', correct: true },
  ];
  const steps = parcoursSteps(items, [sc], attempts, 'cafe', 'a1');
  const by = Object.fromEntries(steps.map((s) => [s.key, s]));
  assert.equal(by.decouvrir.state, 'done');
  assert.equal(by.construire.state, 'done'); // its 1 item is fr.a1.cafe.001, already correct
  assert.equal(by.prononcer.state, 'done'); // fr.a1.cafe.002
  assert.equal(by.ecouter.state, 'empty');
  assert.equal(by.scene.state, 'open'); // empty écouter does not lock the scene
});

test('parcoursSteps without a level spans all bands', () => {
  const steps = parcoursSteps(items, [], [], 'cafe');
  assert.equal(steps[0].total, 3); // a1 + a2 flashcards
});

test('themeLevels unions item and scenario bands in order', () => {
  assert.deepEqual(themeLevels(items, [sc], 'cafe'), ['a1', 'a2']);
  assert.deepEqual(themeLevels(items, [sc], 'marche'), ['a1']);
});

test('themeOfWeek is deterministic and turns over weekly', () => {
  const sums = themeSummaries(items, [sc], []);
  assert.equal(themeOfWeek(sums, 1)?.slug, themeOfWeek(sums, 7)?.slug);
  assert.notEqual(themeOfWeek(sums, 1)?.slug, themeOfWeek(sums, 8)?.slug);
  assert.equal(themeOfWeek([], 5), undefined);
});
