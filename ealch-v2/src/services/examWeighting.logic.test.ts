// Per-question weighting, and the reason it is not optional.
//
// TEF and TCF give every question the same weight. DELF B2 does not: its
// questions are worth 0.5, 1, 1.5, 2 or 2.5 points, printed on the paper, and
// they sum to 9, 9 and 7 across the three exercises of each comprehension
// épreuve. `QcmItem.points` carries that; absent means 1.
//
// The weights below are the published values of one real DELF B2 paper, used
// here as ARITHMETIC — the numbers a mark is computed from — and not as
// content. No question, option or document from that paper appears anywhere in
// this repo.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { scoreClosedTask } from './content.logic.ts';
import { validateExamTask, type ExamTask, type QcmItem } from '../content/schema.ts';

/** Published per-question values, DELF B2 listening: exercises of 9, 9 and 7. */
const CO_WEIGHTS = [1, 0.5, 2, 1.5, 0.5, 2.5, 1, 0.5, 1, 1, 1.5, 1.5, 1, 2.5, 0.5, 1, 1.5, 2, 1.5, 0.5];
/** The same, reading: also 9, 9 and 7, distributed differently. */
const CE_WEIGHTS = [1, 2.5, 2.5, 1, 0.5, 1, 0.5, 1, 2.5, 2.5, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1.5, 1.5, 0.5];

const sum = (a: number[]) => a.reduce((x, y) => x + y, 0);

const item = (over: Partial<QcmItem> = {}): QcmItem => ({
  q: 'Question ?',
  opts: ['Bonne réponse', 'Autre réponse'],
  correct: 0,
  ...over,
});

const task = (items: QcmItem[]): ExamTask => ({
  id: 'exam.delf_b2.blanc-01.ce_mcq.001',
  format: 'delf_b2',
  variant: 'blanc-01',
  formatVersion: 'delf-b2-2026.09',
  taskType: 'ce_mcq',
  skill: 'CE',
  level: 'b2',
  prompt: 'Lisez le document et choisissez la bonne réponse.',
  // DELF B2 reading is an hour. Required: validateExamTask refuses a task with
  // no clock, on the grounds that it is a worksheet rather than an exam task.
  timingS: 3600,
  items,
});

/** Answer the questions at `ix`, leave the rest wrong. */
const answering = (ix: number[]): Record<string, number> =>
  Object.fromEntries(ix.map((i) => [`i${i}`, 0]));

test('with no weights declared, scoring is exactly what it always was', () => {
  // The compatibility guarantee. Every TEF and TCF paper must score
  // byte-identically to before this field existed, and the way that is
  // guaranteed is that the two pairs come out equal by construction.
  const t = task([item(), item(), item(), item()]);
  const s = scoreClosedTask(t, answering([0, 2]));
  strictEqual(s.correct, 2);
  strictEqual(s.total, 4);
  strictEqual(s.points, s.correct, 'unweighted points must equal the count');
  strictEqual(s.pointsTotal, s.total, 'unweighted total must equal the question count');
});

test('a weighted task scores marks, and the counts stay counts', () => {
  const t = task(CE_WEIGHTS.map((p) => item({ points: p })));
  // Right on the two dearest questions only.
  const s = scoreClosedTask(t, answering([1, 2]));
  strictEqual(s.correct, 2, 'two questions right');
  strictEqual(s.total, 20);
  strictEqual(s.points, 5, 'worth 2.5 each');
  strictEqual(s.pointsTotal, 25, 'the épreuve is out of 25');
});

test('the épreuve totals reconcile with the published exercise totals', () => {
  // 9 + 9 + 7 on both. If an authored paper does not reconcile, its weights are
  // wrong however plausible each one looks alone.
  for (const [name, w] of [['CO', CO_WEIGHTS], ['CE', CE_WEIGHTS]] as const) {
    strictEqual(sum(w.slice(0, 7)), 9, `${name} exercise 1`);
    strictEqual(sum(w.slice(7, 14)), 9, `${name} exercise 2`);
    strictEqual(sum(w.slice(14, 20)), 7, `${name} exercise 3`);
    strictEqual(sum(w), 25, `${name} épreuve`);
  }
});

test('equal weighting misreports a real paper by a fifth of the épreuve', () => {
  // The measurement this whole field exists for. Same number of correct
  // answers, two different candidates, and equal weighting cannot tell them
  // apart while the real paper marks them eight points differently.
  const t = task(CE_WEIGHTS.map((p) => item({ points: p })));

  const byValue = CE_WEIGHTS.map((p, i) => ({ p, i })).sort((a, b) => a.p - b.p);
  const cheapest = byValue.slice(0, 8).map((x) => x.i);
  const dearest = byValue.slice(-8).map((x) => x.i);

  const low = scoreClosedTask(t, answering(cheapest));
  const high = scoreClosedTask(t, answering(dearest));

  strictEqual(low.correct, 8);
  strictEqual(high.correct, 8, 'both candidates answered eight questions correctly');

  const equalWeight = (25 * 8) / 20; // 10.0 — what counting questions would say
  ok(
    high.points - low.points >= 8,
    `the same eight-correct performance spans ${low.points} to ${high.points} marks`
  );
  ok(
    Math.abs(equalWeight - low.points) >= 5 || Math.abs(equalWeight - high.points) >= 5,
    'equal weighting is out by at least five marks on one of them'
  );
});

test('the 5/25 floor is where equal weighting actually does harm', () => {
  // DELF requires at least 5/25 on EVERY épreuve whatever the total, so this is
  // the case that decides pass or fail rather than merely misreporting a mark.
  // Four correct scores exactly 5.00 under equal weighting — precisely on the
  // floor — while the true mark ranges from below it to well above.
  const t = task(CE_WEIGHTS.map((p) => item({ points: p })));
  const byValue = CE_WEIGHTS.map((p, i) => ({ p, i })).sort((a, b) => a.p - b.p);

  const equalWeight = (25 * 4) / 20;
  strictEqual(equalWeight, 5, 'four of twenty is exactly the floor, under equal weighting');

  const low = scoreClosedTask(t, answering(byValue.slice(0, 4).map((x) => x.i)));
  ok(
    low.points < 5,
    `a candidate on the floor by question count actually scored ${low.points}/25 and has failed the épreuve`
  );
});

test('the validator refuses a weight that would silently remove a question', () => {
  // Zero and negative are the dangerous ones: the question still renders, still
  // gets answered, and contributes nothing to the mark.
  for (const bad of [0, -1]) {
    const issues = validateExamTask(task([item({ points: bad })]));
    ok(
      issues.some((i) => i.message.includes('points must be a positive number')),
      `points: ${bad} was accepted`
    );
  }
});

test('the validator refuses a weight off the half-point grid', () => {
  // Every published value is a half-step, so 1.25 is a typo rather than a
  // choice, and a typo here shifts an épreuve total off its published number.
  const issues = validateExamTask(task([item({ points: 1.25 })]));
  ok(issues.some((i) => i.message.includes('multiple of 0.5')), '1.25 was accepted');

  // …and accepts every value the format actually uses.
  for (const good of [0.5, 1, 1.5, 2, 2.5]) {
    deepStrictEqual(validateExamTask(task([item({ points: good })])), [], `points: ${good} was rejected`);
  }
});
