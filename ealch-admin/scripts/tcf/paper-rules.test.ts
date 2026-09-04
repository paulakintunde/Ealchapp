// The ramp gate, checked both ways.
//
// E9's gate for this format is "band ramp correct on all TCF papers". These
// tests exercise the rules on synthetic input, which is the only way to see a
// guard FIRE: blanc-01 now calls tcfPaperRules and passes it, and a rule proved
// only against a paper that satisfies it has been proved to do nothing.
//
// The clock rule at the bottom was added after the fact it describes. It is
// there because two green checks — the blueprint's clock constant and the
// document length envelope — were both satisfied by a section whose audio ran
// longer than its own clock.
import { deepStrictEqual, ok } from 'node:assert';
import { test } from 'node:test';
import {
  ANSWER_S_PER_ITEM,
  BANDS,
  RAMP,
  clockShortfalls,
  rampViolations,
  distributionViolations,
  type ClockedTask,
} from './paper-rules.ts';

/** A correct épreuve: 3 a1, 6 a2, 10 b1, 10 b2, 7 c1, 3 c2, in that order. */
function goodRamp(): string[] {
  return BANDS.flatMap((b) => Array.from({ length: RAMP[b] }, () => b as string));
}

test('a correct ramp reports nothing', () => {
  deepStrictEqual(rampViolations(goodRamp()), []);
  deepStrictEqual(distributionViolations(goodRamp()), []);
  deepStrictEqual(goodRamp().length, 39);
});

test('a single item out of order is caught, and named', () => {
  // The failure this exists for: one b2 item early. The counts still balance,
  // so a distribution check alone passes it — which is why the ramp is checked
  // separately rather than inferred from the totals.
  const seq = goodRamp();
  const swap = seq[6]!;
  seq[6] = 'b2';
  seq[25] = swap;
  const v = rampViolations(seq);
  ok(v.length > 0, 'a b2 item at position 7 must be reported');
  ok(v[0]!.includes('item 8'), `expected the position after the jump, got: ${v[0]}`);
  deepStrictEqual(distributionViolations(seq), [], 'the counts still balance — that is the point');
});

test('a ramp that ends where it started is caught', () => {
  const seq = goodRamp();
  seq[38] = 'a1';
  ok(rampViolations(seq).length > 0);
});

test('the wrong number of items in a band is caught even when the order is fine', () => {
  // Monotonic and still wrong: one c2 short, one c1 long. The sequence never
  // goes backwards, so only the distribution check can see it.
  //
  // It has to be the FIRST c2 that becomes c1, not the last. Changing the last
  // one gives ...c2, c2, c1, which goes backwards — the ramp check fires and
  // the test proves nothing about the distribution check. My first version did
  // exactly that and failed for the wrong reason.
  const seq = goodRamp();
  seq[36] = 'c1';
  deepStrictEqual(rampViolations(seq), [], 'still monotonic');
  const v = distributionViolations(seq);
  ok(v.some((m) => m.startsWith('c1:')), `expected c1 flagged, got: ${v.join(' · ')}`);
  ok(v.some((m) => m.startsWith('c2:')), `expected c2 flagged, got: ${v.join(' · ')}`);
});

test('a band that is not a band is caught', () => {
  const seq = goodRamp();
  seq[0] = 'a0';
  ok(distributionViolations(seq).some((m) => m.includes('not a band')));
});

test('an empty épreuve is not silently correct', () => {
  // A paper with no items must fail the distribution, not pass it for lack of
  // anything to disagree with.
  ok(distributionViolations([]).length > 0);
});

/* ── The clock against its own contents ────────────────────────────────────
 *
 * The numbers below are the real C1 task at the moment the defect existed: a
 * 375-second clock over three documents totalling 305 seconds of audio and 86
 * seconds of reading window. Both the blueprint check and the length check
 * were green on that paper at the same time.
 */
const co = (timingS: number, parts: ClockedTask['parts']): ClockedTask => ({
  label: 'Compréhension orale · C1',
  timingS,
  parts,
});
const doc = (durationS: number, readWindowS: number, items: number, playCount = 1) => ({
  durationS,
  readWindowS,
  playCount,
  items: Array.from({ length: items }, () => ({ correct: 0 })),
});

test('a clock shorter than its own audio is caught', () => {
  const bad = clockShortfalls([co(375, [doc(93, 30, 3), doc(98, 28, 2), doc(93, 28, 2)])]);
  ok(bad.length === 1, `expected one shortfall, got: ${bad.join(' · ')}`);
  ok(bad[0].includes('375s on the clock'), bad[0]);
});

test('the redistributed clock passes', () => {
  deepStrictEqual(clockShortfalls([co(475, [doc(93, 30, 3), doc(98, 28, 2), doc(93, 28, 2)])]), []);
});

test('answering time is part of the need, not a bonus', () => {
  // A clock that exactly covers audio plus reading still leaves no time to
  // answer, and that is the failure this floor exists to name.
  const audioAndReading = 100 + 20;
  deepStrictEqual(clockShortfalls([co(audioAndReading + 2 * ANSWER_S_PER_ITEM, [doc(100, 20, 2)])]), []);
  ok(clockShortfalls([co(audioAndReading, [doc(100, 20, 2)])]).length === 1);
});

test('a document played twice costs its duration twice', () => {
  // playCount is the difference between a section that fits and one that does
  // not, and reading durationS alone would miss it entirely.
  // One play needs 80 + 20 + 16 = 116s; two plays need 196s. A 180s clock is
  // the only interval that tells the two apart.
  deepStrictEqual(clockShortfalls([co(180, [doc(80, 20, 2, 1)])]), []);
  ok(clockShortfalls([co(180, [doc(80, 20, 2, 2)])]).length === 1);
});

test('a task with no parts is skipped rather than failed', () => {
  // Open tasks carry no audio. They must not read as a zero-second section.
  deepStrictEqual(clockShortfalls([{ label: 'Expression écrite', timingS: 0, parts: [] }]), []);
});
