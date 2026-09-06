// DELF B2 tout public blanc-01 — the assembled paper.
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

// Scattered, EXCEPT the attribution exercise — and the exception is the point.
//
// These tasks are authored key-first, with the right answer at index 0, and
// scatterKeys places it deterministically from a seed seeded on format AND
// variant. Without it every answer is option A, which this paper's own test
// caught: a candidate answering A throughout would have scored 100 percent.
//
// CE exercise 3 must NOT be scattered. Its options are four speakers' names,
// and the scatter would reorder them per item — six different lists to a
// candidate scanning down the page, when the whole task is choosing between the
// same four people six times. Its keys are authored across the four names
// directly, and paper.test.ts asserts both halves: one fixed display order, and
// no name answering more than half the items.
export const CO_TASKS: ExamTask[] = [CO_EX1, CO_EX2, CO_EX3].map(scatterKeys);
export const CE_TASKS: ExamTask[] = [...[CE_EX1, CE_EX2].map(scatterKeys), CE_EX3];
export const PE_TASKS: ExamTask[] = [PE_T1];
export const PO_TASKS: ExamTask[] = [PO_T1, PO_T2];

export const TASKS: ExamTask[] = [...CO_TASKS, ...CE_TASKS, ...PE_TASKS, ...PO_TASKS];

export const PAPER: ExamPaper = {
  id: PAPER_ID,
  format: FORMAT,
  variant: VARIANT,
  paperNo: 1,
  sections: [
    {
      skill: 'CO',
      // ~30 minutes, and the recording carries its own pauses: the invigilator
      // starts it once and does not intervene.
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
      // The 20 minutes of passation. The 30 minutes of preparation are clocked
      // separately on PO_T1.prepS and are NOT inside this figure — a runner
      // that folds them together hands the candidate their prep as speaking
      // time.
      skill: 'PO',
      timingS: 1200,
      blueprintId: BLUEPRINT_ID,
      taskIds: PO_TASKS.map((t) => t.id),
    },
  ],
};
