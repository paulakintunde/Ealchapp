// DELF B2 tout public blanc-04 — the assembled paper.
//
// ── Order matters, but not for TCF's reason ────────────────────────────────
//
// On TCF the position of an item IS its band, so a reordered section stops
// being a TCF paper. DELF has one band and no ramp. What order carries here is
// the WEIGHTING: exercises 1 and 2 are the long documents worth 9 each, and
// exercise 3 is the short-document exercise worth 7. Moving exercise 3 up would
// put the one-listening exercise before the two-listening ones and change the
// difficulty of the épreuve.
//
// ── Four sections, and the floor is the thing to show ──────────────────────
//
// Each épreuve is out of 25 and the diploma needs 50/100 AND at least 5/25 on
// every one. Unlike TCF's NCLC grid or TEF's levels there is no scale to map
// onto: a mark per épreuve, a total, and the floor.
import type { ExamPaper, ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, PAPER_ID, FORMAT_VERSION } from './common.ts';

/** OUR reading of the blueprint, distinct from the board's spec edition. */
const BLUEPRINT_ID = FORMAT_VERSION;
import { CO_EX1, CO_EX2, CO_EX3 } from './co.ts';
import { CE_EX1, CE_EX2, CE_EX3 } from './ce.ts';
import { PE_T1, PO_T1, PO_T2 } from './open.ts';
import { scatterKeys } from '../tef/finalise.ts';

// Scattered, EXCEPT the attribution exercise — for the same reason as blanc-02.
//
// These tasks are authored key-first, with the right answer at index 0, and
// scatterKeys places it deterministically from a seed keyed on format AND
// variant. That seeding is why no two papers in the pack share a key sequence:
// five TEF papers once did, because the scatter keyed on the question index
// alone and every paper therefore scattered identically.
//
// CE exercise 3 must NOT be scattered. Its options are four speakers' names,
// and the scatter would reorder them per item — six different lists to a
// candidate scanning down the page, when the whole task is choosing between the
// same four people six times. Its keys are authored across the four names
// directly, and delf/paper-rules.ts asserts both halves: one fixed display
// order, and no name answering more than half the items.
export const CO_TASKS: ExamTask[] = [CO_EX1, CO_EX2, CO_EX3].map(scatterKeys);
export const CE_TASKS: ExamTask[] = [...[CE_EX1, CE_EX2].map(scatterKeys), CE_EX3];
export const PE_TASKS: ExamTask[] = [PE_T1];
export const PO_TASKS: ExamTask[] = [PO_T1, PO_T2];

export const TASKS: ExamTask[] = [...CO_TASKS, ...CE_TASKS, ...PE_TASKS, ...PO_TASKS];

export const PAPER: ExamPaper = {
  id: PAPER_ID,
  format: FORMAT,
  variant: VARIANT,
  paperNo: 4,
  // No `status` here: it is not part of ExamPaper. Everything lands in_review
  // and apply-paper deliberately omits status from its update, so re-applying a
  // published paper leaves it published rather than silently unpublishing it.
  sections: [
    {
      skill: 'CO',
      timingS: 1800,
      blueprintId: BLUEPRINT_ID,
      taskIds: CO_TASKS.map((t) => t.id),
    },
    {
      skill: 'CE',
      timingS: 3600,
      blueprintId: BLUEPRINT_ID,
      taskIds: CE_TASKS.map((t) => t.id),
    },
    {
      skill: 'PE',
      timingS: 3600,
      blueprintId: BLUEPRINT_ID,
      taskIds: PE_TASKS.map((t) => t.id),
    },
    {
      // The monologue's thirty minutes of preparation are clocked on the task's
      // own prepS and are NOT inside this figure — a runner that folds them in
      // hands the better-prepared candidate less time to speak.
      skill: 'PO',
      timingS: 1200,
      blueprintId: BLUEPRINT_ID,
      taskIds: PO_TASKS.map((t) => t.id),
    },
  ],
};

/** Re-exported so a paper module is one import for the shared rules — see
 *  delf/paper-rules.ts's DelfPaper. The draw itself lives in common.ts beside
 *  the table that explains it. */
export { TOPICS } from './common.ts';
