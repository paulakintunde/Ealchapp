// TEF Canada blanc-06 — the assembled paper.
//
// Where the authored blocks become a paper: the keys are scattered, the sections
// are ordered, and the scoring tables are attached. Everything downstream reads
// from here, so nothing can validate one shape and write another.
//
// The scoring tables come from `../tef/scoring.ts`, shared with every TEF paper.
import type { ExamPaper, ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, FORMAT_VERSION, VARIANT, PAPER_ID } from './common.ts';
import { CO_A, CO_B, CO_C, CO_D } from './co.ts';
import { CO_E, CO_F, CO_G } from './co-efg.ts';
import { CE_A, CE_B, CE_C } from './ce.ts';
import { CE_DE, CE_F, CE_G } from './ce-fg.ts';
import { EE_A, EE_B, EO_A, EO_B } from './open.ts';
import { scatterKeys } from '../tef/finalise.ts';
import { hasMonotoneRun } from '../dalf/scatter.ts';
import { CO_SCORING, CE_SCORING, EE_SCORING, EO_SCORING } from '../tef/scoring.ts';

export const keysOf = (t: ExamTask): number[] =>
  (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? [])).map((i) => i.correct);

/** True when a short block of keys repeats back to back: A B A B A B, or
 *  A C B A C B, or A C B D A C B D. A balanced PRNG walk produces these often
 *  in a seventeen-item block (the first seed for block G read ACBD three times
 *  running), and a candidate spots a repeating cycle as fast as A B C. */
export const hasRepeatingCycle = (keys: number[]): boolean => {
  const same = (i: number, j: number, k: number) => keys.slice(i, i + k).join() === keys.slice(j, j + k).join();
  for (let i = 0; i < keys.length; i += 1) {
    if (i + 6 <= keys.length && same(i, i + 2, 2) && same(i, i + 4, 2)) return true;
    for (const k of [3, 4]) if (i + 2 * k <= keys.length && same(i, i + k, k)) return true;
  }
  return false;
};

/** A key order a candidate could read as a pattern. */
export const looksPatterned = (keys: number[]): boolean => hasMonotoneRun(keys) || hasRepeatingCycle(keys);

/**
 * The same scatter every TEF paper uses (`scatterKeys`: seeded, balanced, never
 * the same position twice running), with one addition from the DALF papers: a
 * block whose key sequence reads as a visible rotation (A B C or C B A, three
 * or more in a row) or a repeating cycle (see hasRepeatingCycle) is re-seeded with a salt (`#1`, `#2`, ...) until it does
 * not. The salt only changes the seed; the task keeps its own id.
 *
 * Still a pure function of the paper, so re-running cannot move a key.
 * blanc-05 shipped without the run check (its block A reads A B C D); this
 * paper is the first TEF paper to apply it.
 */
export function scatterWithoutRuns(task: ExamTask): ExamTask {
  for (let salt = 0; salt < 5000; salt += 1) {
    const seeded = scatterKeys(salt === 0 ? task : { ...task, id: `${task.id}#${salt}` });
    if (!looksPatterned(keysOf(seeded))) return { ...seeded, id: task.id };
  }
  throw new Error(`${task.id}: no run-free key order found`);
}

/** Closed tasks pass through the key scatter; open tasks have no keys. */
export const CO_TASKS: ExamTask[] = [CO_A, CO_B, CO_C, CO_D, CO_E, CO_F, CO_G].map(scatterWithoutRuns);
export const CE_TASKS: ExamTask[] = [CE_A, CE_B, CE_C, CE_DE, CE_F, CE_G].map(scatterWithoutRuns);
export const EE_TASKS: ExamTask[] = [EE_A, EE_B];
export const EO_TASKS: ExamTask[] = [EO_A, EO_B];

export const TASKS: ExamTask[] = [...CO_TASKS, ...CE_TASKS, ...EE_TASKS, ...EO_TASKS];

/** BLUEPRINT §3.1: block G carries the 7 unallocated questions under G-elastic. */
const CO_BLUEPRINT = `${FORMAT_VERSION}+G-elastic`;

export const PAPER: ExamPaper = {
  id: PAPER_ID,
  format: FORMAT,
  variant: VARIANT,
  paperNo: 6,
  sections: [
    { skill: 'CO', taskIds: CO_TASKS.map((t) => t.id), timingS: 2400, blueprintId: CO_BLUEPRINT, scoring: CO_SCORING },
    { skill: 'CE', taskIds: CE_TASKS.map((t) => t.id), timingS: 3600, blueprintId: FORMAT_VERSION, scoring: CE_SCORING },
    { skill: 'PE', taskIds: EE_TASKS.map((t) => t.id), timingS: 3600, blueprintId: FORMAT_VERSION, scoring: EE_SCORING },
    { skill: 'PO', taskIds: EO_TASKS.map((t) => t.id), timingS: 900, blueprintId: FORMAT_VERSION, scoring: EO_SCORING },
  ],
};
