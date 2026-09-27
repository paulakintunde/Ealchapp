// A paid unit whose lessons are not on the device (premium packs) still draws
// its heading and every act row from the skeleton's outline, locked for a free
// user, identical to the rows the lesson bodies would have drawn.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { trailRows, trailLessonsOf, type TrailInput } from './trail.logic.ts';
import { validateUnit, type Lesson, type Unit } from './schema.ts';

const T = { trailReleaseSome: '{n} new cards', trailReleaseNone: 'No new cards' };

const lesson = {
  id: 'b1.01.l1',
  unitId: 'b1.01',
  title: 'L',
  acts: [{ title: 'Act one' }, { title: 'Act two' }],
  deckTranche: [['fr.b1.x.001', 'fr.b1.x.002'], []],
  narration: { stages: [] },
  features: ['narrated'],
} as unknown as Lesson;

const full: Unit = { id: 'b1.01', seq: 1, title: 'Unit', sub: 'Unité', lessonIds: ['b1.01.l1'] };
const skeleton: Unit = {
  ...full,
  outline: [{ lessonId: 'b1.01.l1', title: 'L', acts: [{ title: 'Act one', cards: 2 }, { title: 'Act two', cards: 0 }], narrated: true }],
};

const input = (units: Unit[], lessons: Lesson[], levelsAll: boolean): TrailInput => ({
  units,
  lessonsOf: () => lessons,
  band: 'b1',
  levelsAll,
  freeBands: ['sons', 'a1'],
  doneActs: () => new Set<number>(),
  hasFreshResume: false,
  orientationDismissed: true,
  placementDismissed: true,
  T,
});

test('the outline draws the same rows as the lesson body would', () => {
  const fromBody = trailRows(input([full], [lesson], false));
  const fromOutline = trailRows(input([skeleton], [], false));
  deepStrictEqual(fromOutline, fromBody);
  ok(fromOutline.filter((r) => r.kind === 'act').every((r) => r.kind === 'act' && r.locked), 'locked for a free user');
  const acts = fromOutline.filter((r) => r.kind === 'act');
  strictEqual(acts.length, 2);
  strictEqual(acts[0].kind === 'act' && acts[0].releaseLine, '2 new cards');
});

test('one real lesson and the outline is ignored', () => {
  const both = trailLessonsOf(skeleton, [{ ...lesson, acts: [{ title: 'Only' }] } as unknown as Lesson]);
  deepStrictEqual(both.map((l) => l.actTitles), [['Only']]);
});

test('validateUnit: an outline must name the unit\'s own lessons and carry integer card counts', () => {
  deepStrictEqual(validateUnit(skeleton), []);
  const bad = { ...skeleton, outline: [{ lessonId: 'b1.02.l1', title: 'x', acts: [{ title: 'a', cards: -1 }] }] };
  const issues = validateUnit(bad).map((i) => i.message).join(' | ');
  ok(/not one of this unit's lessonIds/.test(issues), issues);
  ok(/cards must be an integer/.test(issues), issues);
});
