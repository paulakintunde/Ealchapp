// Two papers must not agree on where the answers are.
//
// This is the test that did not exist when it was needed. `scatterKeys` was a
// pure function of the question's INDEX, and every paper in the pack has the
// same block layout and the same item counts, so all five produced the same
// key sequence: 80 of 80 positions identical. A candidate who sat one paper
// and wrote down the positions could have scored 80/80 on the other four
// without reading a question.
//
// The existing assertion — no position holds more than 35% of the keys —
// passed the whole time, because a repeating cycle is perfectly balanced by
// construction. Balance was never the risk. Nothing compared two papers.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { CO_TASKS as CO1, CE_TASKS as CE1 } from '../tef-blanc01/paper.ts';
import { CO_TASKS as CO2, CE_TASKS as CE2 } from '../tef-blanc02/paper.ts';
import { CO_TASKS as CO3, CE_TASKS as CE3 } from '../tef-blanc03/paper.ts';
import { CO_TASKS as CO4, CE_TASKS as CE4 } from '../tef-blanc04/paper.ts';
import { CO_TASKS as CO5, CE_TASKS as CE5 } from '../tef-blanc05/paper.ts';

const PAPERS: [string, ExamTask[]][] = [
  ['blanc-01', [...CO1, ...CE1]],
  ['blanc-02', [...CO2, ...CE2]],
  ['blanc-03', [...CO3, ...CE3]],
  ['blanc-04', [...CO4, ...CE4]],
  ['blanc-05', [...CO5, ...CE5]],
];

/** The answer key as a candidate would write it down: one position per scored
 *  question, in the order the runner presents them. */
const keySequence = (tasks: ExamTask[]): number[] =>
  tasks.flatMap((t) => (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []))).map((i) => i.correct);

test('no two papers share an answer key sequence', () => {
  for (let i = 0; i < PAPERS.length; i += 1) {
    for (let j = i + 1; j < PAPERS.length; j += 1) {
      const [na, a] = PAPERS[i]!;
      const [nb, b] = PAPERS[j]!;
      const ka = keySequence(a);
      const kb = keySequence(b);
      strictEqual(ka.length, kb.length, `${na} and ${nb} differ in question count`);
      const same = ka.filter((x, k) => x === kb[k]).length;
      const share = same / ka.length;
      // Chance agreement between two 4-option papers is about 25%. The bar is
      // set well above it so this fails on a shared ALGORITHM, not on luck.
      ok(
        share < 0.5,
        `${na} and ${nb} put the key in the same place on ${same}/${ka.length} questions (${Math.round(share * 100)}%). ` +
          `Sitting one paper would hand a candidate most of the other.`
      );
    }
  }
});

test('the key never lands in the same position twice running', () => {
  // A run of identical positions is the pattern a candidate notices first.
  for (const [name, tasks] of PAPERS) {
    for (const t of tasks) {
      const seq = (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? [])).map((i) => i.correct);
      for (let k = 1; k < seq.length; k += 1) {
        ok(seq[k] !== seq[k - 1], `${name} ${t.label}: key at position ${seq[k]} twice running (item ${k})`);
      }
    }
  }
});

test('blanc-01 keys are frozen: it is published and has been sat', () => {
  // Moving a published paper's keys invalidates every attempt already logged
  // against them. This is the sequence blanc-01 shipped with, verified task by
  // task against the published rows in Postgres on 2026-09-02, not copied from
  // the code it is meant to police. If this test fails, the change is wrong
  // however good it looks.
  strictEqual(
    keySequence([...CO1, ...CE1]).join(''),
    '20312031120120202031202203120312031203122031203203120203120312203120312020312031'
  );
});
