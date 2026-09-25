// SC-4 / D-11 / D-37 guard: the acte 00 predicate, pinned before app/den.tsx's
// own `Narré` pill is replaced by a real trail row (plan 08). This is the
// exact source line den.tsx:186-188 already used — acteZeroLessonOf
// (trail.logic.ts) is that line lifted verbatim, and this test is what keeps
// the two from drifting apart once the screen changes.
//
// D-37 (decided in this plan): a locked band still yields acte0 rows. The
// Den's old behaviour (`!tabLocked` at den.tsx:234) hid the narrated entry
// point on a locked tab; D-22 says a locked row "stays readable and stays
// pressable", so this plan reverses that hide and this test pins the
// reversal.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import seed from './seed.json' with { type: 'json' };
import { type Lesson, type Unit } from './schema.ts';
import { flattenNarration, stageRanges } from './narration.logic.ts';
import { acteZeroLessonOf, trailRows, type TrailInput } from './trail.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const appDir = resolve(here, '../../app');
const readScreen = (name: string) => readFileSync(resolve(appDir, name), 'utf8').replace(/\r\n/g, '\n');

const seedLessons = seed.lessons as unknown as Lesson[];
const seedUnits = seed.units as unknown as Unit[];

/* ─── the predicate over the whole seed (MEASURED) ───────────────────────── */

const qualifying = seedLessons.filter((l) => l.narration && l.features?.includes('narrated'));

test('MEASURED: exactly 41 lessons carry both narration and the narrated feature, split sons 10 / a1 31 / a2 0', () => {
  strictEqual(qualifying.length, 41);
  strictEqual(qualifying.filter((l) => l.id.startsWith('sons.')).length, 10);
  strictEqual(qualifying.filter((l) => l.id.startsWith('a1.')).length, 31);
  strictEqual(qualifying.filter((l) => l.id.startsWith('a2.')).length, 0);
});

test('MEASURED: zero lessons carry the narrated feature with no script written', () => {
  const featureOnlyNoScript = seedLessons.filter((l) => l.features?.includes('narrated') && !l.narration);
  deepStrictEqual(
    featureOnlyNoScript.map((l) => l.id),
    [],
    'if this ever fires, name the lessons here rather than loosen the assertion — they must drive NO acte0 row, never a disabled one'
  );
});

test('SYNTHESISED: a lesson with the feature flag and no narration script yields no acte0 row (not a disabled one)', () => {
  const featureOnly: Lesson = { ...emptyLesson('x.01.l1'), features: ['narrated'] };
  strictEqual(acteZeroLessonOf([featureOnly]), undefined);
});

/* ─── acteZeroLessonOf's own contract ─────────────────────────────────────── */

test('acteZeroLessonOf returns the first qualifying lesson, or undefined when none qualify', () => {
  const qual: Lesson = { ...emptyLesson('x.01.l1'), narration: fakeNarration(), features: ['narrated'] };
  const none: Lesson = { ...emptyLesson('x.02.l1') };
  strictEqual(acteZeroLessonOf([qual]), qual);
  strictEqual(acteZeroLessonOf([none]), undefined);
  strictEqual(acteZeroLessonOf([]), undefined);
});

test('SYNTHESISED: on a two-lesson unit where only the SECOND lesson qualifies, acteZeroLessonOf returns the second', () => {
  const first: Lesson = { ...emptyLesson('x.01.l1') };
  const second: Lesson = { ...emptyLesson('x.01.l2'), narration: fakeNarration(), features: ['narrated'] };
  strictEqual(acteZeroLessonOf([first, second]), second);
});

/* ─── the pre-roll sheet's numbers come from the real narration reader ──── */

test('MEASURED: every qualifying lesson resolves through flattenNarration/stageRanges without throwing', () => {
  for (const l of qualifying) {
    ok(l.narration, `${l.id} is in the qualifying set, so it must carry a narration`);
    const steps = flattenNarration(l.narration!);
    const ranges = stageRanges(steps);
    ok(Array.isArray(steps));
    ok(Array.isArray(ranges));
  }
});

test('MEASURED: sons.01.l1 resolves to 7 stages, 24 spoken segments, and 7 mic moments across 3 stages, matching D-12', () => {
  const l = seedLessons.find((x) => x.id === 'sons.01.l1');
  ok(l?.narration, 'sons.01.l1 must carry a narration');
  const steps = flattenNarration(l!.narration!);
  const ranges = stageRanges(steps);
  strictEqual(ranges.length, 7);
  deepStrictEqual(
    ranges.map((r) => r.stage),
    ['warm', 'focus', 'input', 'practice', 'produce', 'check', 'cheat']
  );
  strictEqual(steps.filter((s) => s.kind === 'segment').length, 24);
  const interactions = steps.filter((s) => s.kind === 'interaction');
  strictEqual(interactions.length, 7);
  strictEqual(new Set(interactions.map((s) => s.stageIndex)).size, 3);
});

/* ─── D-12's other half: the mic never opens on its own ──────────────────── */

test('narrated.tsx never auto-starts the recogniser: stt.listen is reachable only from a tap, never from a mount-time effect', () => {
  const src = readScreen('narrated.tsx');
  ok(src.includes('never auto-listen'), 'the file must state the rule in its own comments');
  ok(src.includes('stt.listen('), 'the recogniser call must exist');
  ok(!/useEffect\(\s*\(\s*\)\s*=>\s*\{[^}]*stt\.listen\(/.test(src), 'stt.listen must not be called from inside a useEffect');
  ok(src.includes('onPress={mic}'), 'the mic call is reachable only from a tap target');
});

/* ─── D-37: acte 00 still shows, and routes to the paywall, on a locked band ─ */

test('SYNTHESISED: trailRows still emits a locked acte0 row for a locked band, never zero rows (D-37 reverses den.tsx\'s old hide-on-lock)', () => {
  const b1Unit: Unit = { id: 'b1.01', seq: 1, title: 'Imperfect', sub: "L'imparfait", lessonIds: ['b1.01.l1'] };
  const b1Lesson: Lesson = { ...emptyLesson('b1.01.l1'), narration: fakeNarration(), features: ['narrated'] };
  const input: TrailInput = {
    units: [b1Unit],
    lessonsOf: (unitId) => (unitId === 'b1.01' ? [b1Lesson] : []),
    band: 'b1',
    levelsAll: false,
    freeBands: ['sons', 'a1'],
    doneActs: () => new Set<number>(),
    hasFreshResume: true,
    orientationDismissed: true,
    placementDismissed: true,
    T: { trailReleaseSome: '{n} mots partis en révision', trailReleaseNone: 'Aucun mot à réviser pour cet acte.' },
  };
  const rows = trailRows(input);
  const acte0 = rows.find((r) => r.kind === 'acte0');
  ok(acte0, 'a locked band must still carry an acte0 row, not zero rows');
  ok(acte0!.kind === 'acte0' && acte0.locked === true, 'the row must read as locked, matching every other row on this band');
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

function fakeNarration(): NonNullable<Lesson['narration']> {
  return { stages: [] } as unknown as NonNullable<Lesson['narration']>;
}
