// trail.logic.ts's guard. Runs on plain Node: node --test src/content/trail.logic.test.ts
//
// Two kinds of claims live here, and each says which it rests on:
//   - MEASURED, against the shipped seed.json — which is a CUT of the full
//     Postgres corpus (roughly a quarter of it), so a count proven here is a
//     fact about the seed, not necessarily about the whole curriculum.
//   - SYNTHESISED, against a hand-built fixture — used wherever the real seed
//     has no data yet (there is no B1 unit in the shipped seed at all), and
//     named as synthesised in the test's own title so a future reader does
//     not mistake a fixture shape for a measured one.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import seed from './seed.json' with { type: 'json' };
import { unitBand, type Lesson, type Unit } from './schema.ts';
import { ENGLISH_TAUGHT_BANDS } from './english.logic.ts';
import {
  acteZeroLessonOf,
  headingLabel,
  releaseLine,
  trailRows,
  type TrailInput,
  type TrailRow,
} from './trail.logic.ts';

const T = { trailReleaseSome: '{n} mots partis en révision', trailReleaseNone: 'Aucun mot à réviser pour cet acte.' };

const seedUnits = seed.units as unknown as Unit[];
const seedLessons = seed.lessons as unknown as Lesson[];

/** Mirrors content.logic.ts's unitsInBand: keyed on unitBand(u.id), sorted on
 *  seq. Not imported from content.logic.ts (that module lives in
 *  src/services, and trail.logic.ts's own zero-import rule is what this file
 *  guards) — restated here as a small, honest duplicate. */
function unitsOfBand(units: Unit[], band: string): Unit[] {
  return units.filter((u) => unitBand(u.id) === band).sort((a, b) => a.seq - b.seq);
}

/** Mirrors content.logic.ts's lessonsOfUnit: resolves lessons in the unit's
 *  own `lessonIds` order — the order D-27 requires a two-lesson unit's acts
 *  to appear in. */
function lessonsOfSeedUnit(unitId: string): Lesson[] {
  const u = seedUnits.find((x) => x.id === unitId);
  if (!u) return [];
  return u.lessonIds.map((id) => seedLessons.find((l) => l.id === id)).filter((l): l is Lesson => !!l);
}

const baseInput = (band: string, units: Unit[]): TrailInput => ({
  units,
  lessonsOf: lessonsOfSeedUnit,
  band: band as TrailInput['band'],
  levelsAll: true,
  freeBands: ['sons', 'a1'],
  doneActs: () => new Set<number>(),
  hasFreshResume: true,
  orientationDismissed: true,
  placementDismissed: true,
  T,
});

/* ─── the a2 band, measured against the shipped seed ────────────────────── */

test('MEASURED: trailRows over the seed a2 band returns exactly 36 heading rows and 222 act rows', () => {
  const units = unitsOfBand(seedUnits, 'a2');
  // 36 since 2026-09-30: a2.36 « Les pronoms toniques » (6 acts) at seq 35.
  strictEqual(units.length, 36, 'sanity: the seed carries 36 a2 units today');
  const rows = trailRows(baseInput('a2', units));
  const headings = rows.filter((r) => r.kind === 'heading');
  const acts = rows.filter((r) => r.kind === 'act');
  strictEqual(headings.length, 36);
  strictEqual(acts.length, 222);
  strictEqual(rows.length, 258, 'no card, gate or boundary row: levelsAll is true and both cards are dismissed');
});

test('MEASURED: every row has a unique, stable id, identical across two calls with the same inputs', () => {
  const units = unitsOfBand(seedUnits, 'a2');
  const input = baseInput('a2', units);
  const idsA = trailRows(input).map((r) => r.id);
  const idsB = trailRows(baseInput('a2', units)).map((r) => r.id);
  deepStrictEqual(idsA, idsB);
  strictEqual(new Set(idsA).size, idsA.length, 'no duplicate row id');
});

/* ─── D-08/SC-3: heading language, driven by the constant ───────────────── */

test('MEASURED: sons.04 heading reads its English title, a2.07 reads its English title', () => {
  const sons04 = seedUnits.find((u) => u.id === 'sons.04')!;
  const a207 = seedUnits.find((u) => u.id === 'a2.07')!;
  strictEqual(sons04.title, 'French Consonants');
  strictEqual(a207.title, 'At the Restaurant');
  strictEqual(headingLabel(sons04, 'sons'), 'French Consonants');
  strictEqual(headingLabel(a207, 'a2'), 'At the Restaurant');
});

test('SYNTHESISED: a b1 unit heading reads its French sub, not its English title', () => {
  const b1Unit: Unit = { id: 'b1.01', seq: 1, title: 'Imperfect Formation', sub: "L'imparfait : la formation", lessonIds: [] };
  strictEqual(headingLabel(b1Unit, 'b1'), "L'imparfait : la formation");
});

test('headingLabel is driven by ENGLISH_TAUGHT_BANDS membership, proven by mutating the constant itself', () => {
  const mutable = ENGLISH_TAUGHT_BANDS as unknown as string[];
  const unit: Unit = { id: 'b1.01', seq: 1, title: 'EN TITLE', sub: 'SOUS-TITRE FR', lessonIds: [] };
  strictEqual(headingLabel(unit, 'b1'), 'SOUS-TITRE FR', 'b1 is not (yet) English-taught');
  ok(!mutable.includes('b1'));
  mutable.push('b1');
  try {
    strictEqual(headingLabel(unit, 'b1'), 'EN TITLE', 'flips once the constant itself grows to include b1');
  } finally {
    mutable.pop();
  }
});

/* ─── D-27: both lessons of a two-lesson unit ────────────────────────────── */

test('MEASURED: a1.30 (a two-lesson unit) yields one heading row and both lessons\' acts under it, in lessonIds order', () => {
  const a1_30 = seedUnits.find((u) => u.id === 'a1.30')!;
  deepStrictEqual(a1_30.lessonIds, ['a1.30.l1', 'a1.30.l2']);
  const rows = trailRows(baseInput('a1', unitsOfBand(seedUnits, 'a1')));
  const headingsForUnit = rows.filter((r) => r.kind === 'heading' && r.unitId === 'a1.30');
  strictEqual(headingsForUnit.length, 1);
  const actsForUnit = rows.filter((r): r is Extract<TrailRow, { kind: 'act' }> => r.kind === 'act' && r.unitId === 'a1.30');
  ok(actsForUnit.length > 0);
  const l1Ix = actsForUnit.findIndex((r) => r.lessonId === 'a1.30.l2');
  ok(l1Ix >= 0, 'a1.30.l2 (the A1 exam) must be reachable as an act row');
  // l1's acts must all precede l2's acts — lessonIds order.
  const lessonOrder = actsForUnit.map((r) => r.lessonId);
  const firstL2 = lessonOrder.indexOf('a1.30.l2');
  ok(lessonOrder.slice(0, firstL2).every((id) => id === 'a1.30.l1'));
});

test('MEASURED: the union of a1 band act rows includes a1.30.l2', () => {
  const rows = trailRows(baseInput('a1', unitsOfBand(seedUnits, 'a1')));
  const lessonIds = new Set(rows.filter((r): r is Extract<TrailRow, { kind: 'act' }> => r.kind === 'act').map((r) => r.lessonId));
  ok(lessonIds.has('a1.30.l2'));
});

/* ─── D-11: the acte 00 predicate ────────────────────────────────────────── */

test('acteZeroLessonOf returns the first qualifying lesson (narration AND features includes narrated)', () => {
  const qualifies: Lesson = { ...emptyLesson('x.01.l1'), narration: emptyNarration(), features: ['narrated'] };
  const featureOnly: Lesson = { ...emptyLesson('x.01.l1'), features: ['narrated'] };
  const narrationOnly: Lesson = { ...emptyLesson('x.01.l1'), narration: emptyNarration() };
  strictEqual(acteZeroLessonOf([qualifies]), qualifies);
  strictEqual(acteZeroLessonOf([featureOnly]), undefined, 'features alone, with no script, must not qualify');
  strictEqual(acteZeroLessonOf([narrationOnly]), undefined, 'a script with no feature flag must not qualify');
});

test('SYNTHESISED: on a two-lesson unit where only the second lesson qualifies, acteZeroLessonOf returns the second', () => {
  const first: Lesson = { ...emptyLesson('x.01.l1') };
  const second: Lesson = { ...emptyLesson('x.01.l2'), narration: emptyNarration(), features: ['narrated'] };
  strictEqual(acteZeroLessonOf([first, second]), second);
});

test('MEASURED: 10 sons units and 30 a1 units carry an acte0 row (41 qualifying LESSONS collapse to 40 unit-level rows: a1.30 has two qualifying lessons under one heading, and acteZeroLessonOf is per-unit); a2 drives none', () => {
  // acte-zero.test.ts (Task 3, SC-4) pins the LESSON-level count (41: sons 10,
  // a1 31) against seed.json directly. This test pins the ROW-level count
  // trailRows actually composes, which is one lower for a1: a1.30 carries
  // TWO qualifying lessons (a1.30.l1 and a1.30.l2) under one heading, and
  // D-11's acteZeroLessonOf returns only the first — one row per unit, never
  // two acte0 rows stacked under a single heading.
  const sonsRows = trailRows(baseInput('sons', unitsOfBand(seedUnits, 'sons')));
  const a1Rows = trailRows(baseInput('a1', unitsOfBand(seedUnits, 'a1')));
  const a2Rows = trailRows(baseInput('a2', unitsOfBand(seedUnits, 'a2')));
  strictEqual(sonsRows.filter((r) => r.kind === 'acte0').length, 10);
  strictEqual(a1Rows.filter((r) => r.kind === 'acte0').length, 30);
  strictEqual(a2Rows.filter((r) => r.kind === 'acte0').length, 0);
  // The a1.30 unit itself still carries exactly one acte0 row, resolved to
  // its FIRST qualifying lesson (a1.30.l1), not a1.30.l2.
  const a130Acte0 = a1Rows.find((r) => r.kind === 'acte0' && r.unitId === 'a1.30');
  ok(a130Acte0 && a130Acte0.kind === 'acte0' && a130Acte0.lessonId === 'a1.30.l1');
});

/* ─── D-45: the release line never fabricates a zero ─────────────────────── */

test('releaseLine: a non-empty tranche gets the authored plural line, an empty or absent one gets the empty-state line', () => {
  strictEqual(releaseLine(['fr.a1.cafe.001', 'fr.a1.cafe.002'], T), '2 mots partis en révision');
  strictEqual(releaseLine([], T), T.trailReleaseNone);
  strictEqual(releaseLine(undefined, T), T.trailReleaseNone);
  ok(!releaseLine([], T).includes('0 '));
  ok(!releaseLine(undefined, T).includes('0 '));
});

/* ─── locked, gate, boundary (D-21, D-24, T-07.1-13) ─────────────────────── */

test('locked is true on every heading/acte0/act row of a band outside freeBands when levelsAll is false, false otherwise', () => {
  const units = unitsOfBand(seedUnits, 'a2'); // a2 is not in freeBands below
  const lockedInput: TrailInput = { ...baseInput('a2', units), levelsAll: false, freeBands: ['sons', 'a1'] };
  const rows = trailRows(lockedInput);
  const relevant = rows.filter((r) => r.kind === 'heading' || r.kind === 'acte0' || r.kind === 'act');
  ok(relevant.length > 0);
  ok(relevant.every((r) => 'locked' in r && r.locked === true));

  const freeInput: TrailInput = { ...baseInput('a1', unitsOfBand(seedUnits, 'a1')), levelsAll: false, freeBands: ['sons', 'a1'] };
  const freeRows = trailRows(freeInput);
  const freeRelevant = freeRows.filter((r) => r.kind === 'heading' || r.kind === 'acte0' || r.kind === 'act');
  ok(freeRelevant.every((r) => 'locked' in r && r.locked === false));
});

test('SYNTHESISED: the C1 tab draws a published C1 unit from its core skeleton, gated for a free learner, open once entitled', () => {
  // C1 Phase 0 (2026-09-30): today no C1 unit exists, so the tab is empty. The
  // first C1 unit reaches a free phone as a skeleton (outline, no lesson body).
  const c1: Unit = {
    id: 'c1.20', seq: 20, title: 'Reading between the lines', sub: 'Lire entre les lignes', lessonIds: ['c1.20.l1'],
    outline: [{ lessonId: 'c1.20.l1', title: 'Lire entre les lignes', acts: [{ title: 'Acte 1', cards: 4 }, { title: 'Acte 2', cards: 0 }] }],
  } as Unit;
  strictEqual(unitBand(c1.id), 'c1');
  const input: TrailInput = { ...baseInput('c1', [c1]), lessonsOf: () => [] };
  strictEqual(trailRows({ ...input, units: [] }).filter((r) => r.kind === 'heading').length, 0, 'no C1 unit, no heading');

  const locked = trailRows({ ...input, levelsAll: false });
  strictEqual(locked[0]?.kind, 'gate');
  strictEqual(locked.filter((r) => r.kind === 'heading').length, 1);
  strictEqual(locked.filter((r) => r.kind === 'act').length, 2);
  ok(locked.filter((r) => r.kind === 'heading' || r.kind === 'act').every((r) => 'locked' in r && r.locked === true));

  const open = trailRows(input);
  strictEqual(open.filter((r) => r.kind === 'gate').length, 0);
  ok(open.filter((r) => r.kind === 'act').every((r) => 'locked' in r && r.locked === false));
});

test('a gate row is emitted at index 0 iff the band is locked, and never alongside a boundary row', () => {
  const lockedRows = trailRows({ ...baseInput('a2', unitsOfBand(seedUnits, 'a2')), levelsAll: false, freeBands: ['sons', 'a1'] });
  strictEqual(lockedRows[0]?.kind, 'gate');
  strictEqual(lockedRows.filter((r) => r.kind === 'gate').length, 1);
  strictEqual(lockedRows.filter((r) => r.kind === 'boundary').length, 0);

  const unlockedRows = trailRows(baseInput('a2', unitsOfBand(seedUnits, 'a2')));
  strictEqual(unlockedRows.filter((r) => r.kind === 'gate').length, 0);
});

test('a boundary row is emitted after the last a1 act row iff band is a1 and levelsAll is false', () => {
  const units = unitsOfBand(seedUnits, 'a1');
  const rows = trailRows({ ...baseInput('a1', units), levelsAll: false, freeBands: ['sons', 'a1'] });
  strictEqual(rows[rows.length - 1]?.kind, 'boundary');
  strictEqual(rows.filter((r) => r.kind === 'boundary').length, 1);
  strictEqual(rows.filter((r) => r.kind === 'gate').length, 0, 'a1 is a free band: no gate row, even though levelsAll is false');

  const allRows = trailRows(baseInput('a1', units)); // levelsAll: true
  strictEqual(allRows.filter((r) => r.kind === 'boundary').length, 0);
});

/* ─── D-18: the start marker ──────────────────────────────────────────────── */

test('startMarker lands on exactly one act row (the first unstarted one) when there is no fresh resume', () => {
  const units = unitsOfBand(seedUnits, 'sons');
  const doneActs = (lessonId: string) => (lessonId === 'sons.01.l1' ? new Set([0, 1, 2, 3, 4, 5]) : new Set<number>());
  const rows = trailRows({ ...baseInput('sons', units), hasFreshResume: false, doneActs });
  const marked = rows.filter((r) => r.kind === 'act' && r.startMarker);
  strictEqual(marked.length, 1);
});

test('no row carries startMarker on a locked band: every act there routes to the paywall', () => {
  // Device pass 2026-09-24: the ring sat on a2.01's first act for a guest,
  // inviting a tap that could only reach the paywall. The gate row is the
  // locked band's call to action; the same band unlocked still gets a marker.
  const units = unitsOfBand(seedUnits, 'a2');
  const locked = trailRows({ ...baseInput('a2', units), levelsAll: false, freeBands: ['sons', 'a1'], hasFreshResume: false });
  strictEqual(locked.filter((r) => r.kind === 'act' && r.startMarker).length, 0);
  const open = trailRows({ ...baseInput('a2', units), levelsAll: true, hasFreshResume: false });
  strictEqual(open.filter((r) => r.kind === 'act' && r.startMarker).length, 1);
});

test('no row carries startMarker when a fresh resume exists', () => {
  const units = unitsOfBand(seedUnits, 'sons');
  const rows = trailRows({ ...baseInput('sons', units), hasFreshResume: true });
  strictEqual(rows.filter((r) => r.kind === 'act' && r.startMarker).length, 0);
});

/* ─── D-19: orientation and placement ─────────────────────────────────────── */

test('orientation and placement cards appear before the first heading iff not dismissed, and never carry a startMarker', () => {
  const units = unitsOfBand(seedUnits, 'sons');
  const rows = trailRows({ ...baseInput('sons', units), orientationDismissed: false, placementDismissed: false });
  const firstHeadingIx = rows.findIndex((r) => r.kind === 'heading');
  const orientationIx = rows.findIndex((r) => r.kind === 'orientation');
  const placementIx = rows.findIndex((r) => r.kind === 'placement');
  ok(orientationIx >= 0 && orientationIx < firstHeadingIx);
  ok(placementIx >= 0 && placementIx < firstHeadingIx);
  // Neither row shape even has a startMarker field to check — the type
  // itself keeps them from competing with the act rows' primary action.
  ok(!('startMarker' in rows[orientationIx]));
  ok(!('startMarker' in rows[placementIx]));

  const dismissed = trailRows({ ...baseInput('sons', units), orientationDismissed: true, placementDismissed: true });
  strictEqual(dismissed.some((r) => r.kind === 'orientation'), false);
  strictEqual(dismissed.some((r) => r.kind === 'placement'), false);
});

/* ─── zero em dash, zero "honest" (standing rule for every string this plan authors) ─ */

test('the module authors no em dash and never the word "honest" outside its own comments', () => {
  const here = dirname(fileURLToPath(import.meta.url));
  const src = readFileSync(resolve(here, 'trail.logic.ts'), 'utf8');
  const codeLines = src.replace(/\r\n/g, '\n').split('\n').filter((l) => !/^\s*[/*]/.test(l));
  ok(!codeLines.some((l) => l.includes('—')));
  ok(!/honest/i.test(codeLines.join('\n')));
});

/* ─── SYNTHESISED: the 391-row projection, a fixture, not a seed fact ────── */

test('SYNTHESISED: a 30-unit/12-act-per-lesson b1 fixture composes to 30 headings + 360 acts = 390 rows (the 391 claim is a projection, not measured)', () => {
  const units: Unit[] = Array.from({ length: 30 }, (_, i) => ({
    id: `b1.${String(i + 1).padStart(2, '0')}`,
    seq: i + 1,
    title: `Unit ${i + 1}`,
    sub: `Unité ${i + 1}`,
    lessonIds: [`b1.${String(i + 1).padStart(2, '0')}.l1`],
  }));
  const lessonsByUnit = new Map<string, Lesson[]>(
    units.map((u) => [
      u.id,
      [
        {
          ...emptyLesson(`${u.id}.l1`),
          acts: Array.from({ length: 12 }, (_, a) => ({ id: `a${a}`, title: `Act ${a}`, sections: [], milestone: 'm', estScreens: 1 })),
        },
      ],
    ])
  );
  const input: TrailInput = {
    ...baseInput('b1', units),
    lessonsOf: (unitId) => lessonsByUnit.get(unitId) ?? [],
  };
  const rows = trailRows(input);
  strictEqual(rows.filter((r) => r.kind === 'heading').length, 30);
  strictEqual(rows.filter((r) => r.kind === 'act').length, 360);
  strictEqual(rows.length, 390, 'this fixture composes to 390, not 391 — the 391 figure elsewhere is its own separate projection, not reproduced by this fixture');
});

/* ─── fixtures ─────────────────────────────────────────────────────────────── */

function emptyLesson(id: string): Lesson {
  return {
    id,
    unitId: id.replace(/\.l\d+$/, ''),
    seq: 1,
    title: 'L',
    level: 'sons',
    tag: 'T',
    intro: 'x',
    sections: [{ type: 'teach', title: 't', body: 'b' }],
    itemIds: [],
    version: 1,
  };
}

function emptyNarration() {
  return { stages: [] } as unknown as Lesson['narration'];
}
