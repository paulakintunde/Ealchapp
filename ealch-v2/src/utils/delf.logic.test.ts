// The DELF instrument, and the one thing it must never get wrong.
//
// BLUEPRINT-delf-b2 §8 names the failure mode in advance: "a candidate who
// scores 60/100 with 4/25 on one épreuve has failed. Any score display we build
// has to show the per-épreuve floor, or it will tell a candidate they passed
// when they did not." That case is tested first and by name, because it is the
// only way this module can be confidently, quietly wrong.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { EXAM_FORMATS, SCORE_BANDS, type ExamSkill } from '../content/schema.ts';
import {
  DELF_BAND_MARK,
  DELF_EPREUVE_FLOOR,
  DELF_EPREUVE_MAX,
  DELF_PASS_TOTAL,
  DELF_TOTAL_MAX,
  delfEpreuve,
  delfOutcome,
  formatMark,
  markFromBands,
} from './delf.logic.ts';
import { INSTRUMENT_BY_FORMAT, instrumentFor } from './examInstrument.logic.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const appDir = resolve(HERE, '../../app');

const SKILLS: ExamSkill[] = ['CO', 'CE', 'PE', 'PO'];
/** Four épreuves at the given marks, all cleanly scored. */
const marked = (...marks: number[]) =>
  marks.map((points, i) => delfEpreuve({ skill: SKILLS[i]!, status: 'scored', points }));

/* ── The floor ────────────────────────────────────────────────────────────── */

test('60 out of 100 with 4 on one épreuve is a FAIL, and says which', () => {
  // The blueprint's own example, verbatim. 4 + 20 + 18 + 18 = 60.
  const out = delfOutcome(marked(4, 20, 18, 18));
  strictEqual(out.total, 60);
  ok(out.total >= DELF_PASS_TOTAL, 'the premise: the total alone would pass');
  strictEqual(out.verdict, 'fail', 'the floor governs, whatever the total says');
  deepStrictEqual(out.failedOn, ['floor']);
  deepStrictEqual(out.floored, ['CO'], 'the report has to name the épreuve, not just refuse');
});

test('exactly 5 clears the floor and exactly 50 passes', () => {
  // Both thresholds are inclusive. An off-by-one here fails a candidate who
  // passed, which is the worse direction of the two.
  const out = delfOutcome(marked(5, 15, 15, 15));
  strictEqual(out.total, 50);
  strictEqual(out.verdict, 'pass');
  deepStrictEqual(out.floored, []);
});

test('49.5 fails on the total alone, with nothing floored', () => {
  const out = delfOutcome(marked(12, 12.5, 12.5, 12.5));
  strictEqual(out.total, 49.5);
  strictEqual(out.verdict, 'fail');
  deepStrictEqual(out.failedOn, ['total']);
  deepStrictEqual(out.floored, []);
});

test('both reasons are reported when both are true', () => {
  const out = delfOutcome(marked(3, 8, 8, 8));
  strictEqual(out.verdict, 'fail');
  deepStrictEqual(out.failedOn, ['total', 'floor']);
  deepStrictEqual(out.floored, ['CO']);
});

/* ── Absence is not zero ──────────────────────────────────────────────────── */

test('an ungraded épreuve produces no total, not a total of three', () => {
  // 20 + 20 + 20 = 60 would pass. Reporting it would be a mark out of 75 held
  // against a threshold defined out of 100.
  const out = delfOutcome([
    ...marked(20, 20, 20),
    delfEpreuve({ skill: 'PO', status: 'not-graded', bands: null }),
  ]);
  strictEqual(out.total, null);
  strictEqual(out.verdict, 'incomplete');
  deepStrictEqual(out.missing, ['PO']);
});

test('an unscored épreuve is not below the floor', () => {
  // A missing mark is unknown, not zero. Calling it floored would report our
  // gap as the candidate's failure.
  for (const status of ['not-sat', 'practice', 'not-graded', 'audio-failed'] as const) {
    const e = delfEpreuve({ skill: 'CO', status, points: null });
    strictEqual(e.mark, null, `${status} must carry no mark`);
    strictEqual(e.belowFloor, false, `${status} must not read as below the floor`);
  }
});

test('a practice sitting is excluded even when every answer was right', () => {
  const out = delfOutcome([
    delfEpreuve({ skill: 'CO', status: 'practice', points: 25 }),
    ...marked(25, 25, 25).slice(0, 3).map((e, i) => ({ ...e, skill: SKILLS[i + 1]! })),
  ]);
  strictEqual(out.verdict, 'incomplete');
  deepStrictEqual(out.missing, ['CO']);
});

/* ── The band table ───────────────────────────────────────────────────────── */

test('the mark table rises with the band and stays inside the épreuve', () => {
  let last = -1;
  for (const band of SCORE_BANDS) {
    const mark = DELF_BAND_MARK[band];
    ok(mark > last, `${band} must be worth more than the band below it`);
    ok(mark >= 0 && mark <= DELF_EPREUVE_MAX, `${band} scores ${mark}, outside 0..${DELF_EPREUVE_MAX}`);
    last = mark;
  }
});

test('the level the paper asks for passes, and the level below it does not', () => {
  // The single most consequential property of the table. Four B2 épreuves are a
  // B2 candidate, and a B2 candidate earns a B2 diploma; four B1 épreuves do
  // not, however sympathetic that would be.
  const four = (n: number) => delfOutcome(marked(n, n, n, n));
  strictEqual(four(DELF_BAND_MARK.b2).verdict, 'pass', 'B2 work must earn the B2 diploma');
  strictEqual(four(DELF_BAND_MARK.b1).verdict, 'fail', 'B1 work must not');
});

test('an A1 performance trips the floor, and an A2 one does not', () => {
  strictEqual(delfEpreuve({ skill: 'PE', status: 'scored', bands: ['a1'] }).belowFloor, true);
  strictEqual(delfEpreuve({ skill: 'PE', status: 'scored', bands: ['a2'] }).belowFloor, false);
  ok(DELF_BAND_MARK.a2 >= DELF_EPREUVE_FLOOR, 'A2 is meant to clear the floor, barely');
  ok(DELF_BAND_MARK.a1 < DELF_EPREUVE_FLOOR, 'A1 is meant to trip it');
});

test('no band earns a full 25', () => {
  // A full mark is a claim about a specific performance against ten criteria.
  // A band is not that, and awarding 25 off one would overstate what was known.
  for (const band of SCORE_BANDS) ok(DELF_BAND_MARK[band] < DELF_EPREUVE_MAX, `${band} scores full marks`);
});

/* ── Two phases, one épreuve ──────────────────────────────────────────────── */

test('production orale averages its two phases onto the half-point grid', () => {
  // The monologue and the débat are phases of one épreuve, not two épreuves.
  strictEqual(markFromBands(['b2', 'b2']), DELF_BAND_MARK.b2);
  // b2 (15) and b1 (10) average to 12.5, which is on the grid §7 marks in.
  strictEqual(markFromBands(['b2', 'b1']), 12.5);
  // c1 (20) and a2 (6) average to 13.
  strictEqual(markFromBands(['c1', 'a2']), 13);
  strictEqual(markFromBands([]), null, 'no phases graded is no mark, not zero');
});

test('every producible mark lands on the half-point grid', () => {
  for (const a of SCORE_BANDS) {
    for (const b of SCORE_BANDS) {
      const m = markFromBands([a, b])!;
      strictEqual(m * 2, Math.round(m * 2), `${a}+${b} produced ${m}, off the half-point grid`);
    }
  }
});

/* ── The instrument split ─────────────────────────────────────────────────── */

test('every exam format is told how it is marked, with none left over', () => {
  deepStrictEqual(
    Object.keys(INSTRUMENT_BY_FORMAT).sort(),
    [...EXAM_FORMATS].sort(),
    'the instrument map and the format union have drifted apart'
  );
  strictEqual(instrumentFor('delf_b2'), 'delf');
  strictEqual(instrumentFor('tef_canada'), 'nclc');
  strictEqual(instrumentFor('tcf_canada'), 'nclc');
});

test('the report screen draws both instruments', () => {
  // The other half, and the half that was missing when a débat surface existed
  // and no screen referenced it. A total map is worth nothing if the report has
  // no branch for one of its values.
  const src = readFileSync(resolve(appDir, 'exam-report.tsx'), 'utf8');
  ok(src.includes('delfOutcome'), 'exam-report.tsx never folds a DELF result');
  ok(src.includes('paperOutcome'), 'exam-report.tsx never folds an NCLC result');
  ok(src.includes('instrumentFor') || src.includes('INSTRUMENT_BY_FORMAT'),
    'exam-report.tsx picks its instrument some other way than the total map');
});

test('the report states the floor rule, or the total reads as the whole answer', () => {
  // §8 again: the display has to show the per-épreuve floor. A screen that
  // prints 60/100 and "échec" without saying why has reproduced the exact
  // confusion the blueprint warned about.
  const src = readFileSync(resolve(appDir, 'exam-report.tsx'), 'utf8');
  ok(src.includes('delfFloor'), 'no copy on the report explains the 5/25 floor');
});

/* ── Presentation ─────────────────────────────────────────────────────────── */

test('a mark is written the way its language writes decimals', () => {
  strictEqual(formatMark(14.5, 25, 'fr'), '14,5 / 25');
  strictEqual(formatMark(14.5, 25, 'en'), '14.5 / 25');
  strictEqual(formatMark(15, 25, 'fr'), '15 / 25', 'a whole mark carries no decimal');
  strictEqual(formatMark(60, DELF_TOTAL_MAX, 'fr'), '60 / 100');
});
