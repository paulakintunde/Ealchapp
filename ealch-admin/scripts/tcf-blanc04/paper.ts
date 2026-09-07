// TCF Canada blanc-04 — the assembled paper.
//
// ── Order is load-bearing here ─────────────────────────────────────────────
//
// CO_TASKS and CE_TASKS are concatenated LOW BAND FIRST, and that is not a
// tidiness preference: on this format the position of an item is what gives it
// its band. Swap two entries in either array and the paper still has 39
// questions with a correct distribution, and it is no longer a TCF paper.
// scripts/tcf/paper-rules.ts refuses exactly that.
import type { ExamPaper, ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, PAPER_ID, FORMAT_VERSION } from './common.ts';

/** OUR reading of the blueprint, distinct from the board's spec edition. */
const BLUEPRINT_ID = FORMAT_VERSION;
import { CO_A1, CO_A2, CO_B1 } from './co.ts';
import { CO_B2, CO_C1, CO_C2 } from './co-hi.ts';
import { CE_A1, CE_A2, CE_B1 } from './ce.ts';
import { CE_B2, CE_C1, CE_C2 } from './ce-hi.ts';
import { EE_T1, EE_T2, EE_T3, EO_T1, EO_T2, EO_T3 } from './open.ts';
import { scatterKeys } from '../tef/finalise.ts';
import { CO_SCORING, CE_SCORING, EE_SCORING, EO_SCORING } from '../tcf/scoring.ts';

// Authored key-first so a reviewer sees the intended answer at the top of
// every option list; scatterKeys places it deterministically, seeded on this
// paper's format AND variant. That seed is why blanc-04 cannot inherit
// an earlier paper's key sequence — five TEF papers once shared one because the
// scatter keyed on the question's index instead.
export const CO_TASKS: ExamTask[] = [CO_A1, CO_A2, CO_B1, CO_B2, CO_C1, CO_C2].map(scatterKeys);
export const CE_TASKS: ExamTask[] = [CE_A1, CE_A2, CE_B1, CE_B2, CE_C1, CE_C2].map(scatterKeys);
export const EE_TASKS: ExamTask[] = [EE_T1, EE_T2, EE_T3];
export const EO_TASKS: ExamTask[] = [EO_T1, EO_T2, EO_T3];

export const TASKS: ExamTask[] = [...CO_TASKS, ...CE_TASKS, ...EE_TASKS, ...EO_TASKS];

export const PAPER: ExamPaper = {
  id: PAPER_ID,
  format: FORMAT,
  variant: VARIANT,
  paperNo: 4,
  sections: [
    {
      skill: 'CO',
      timingS: 2100,
      blueprintId: BLUEPRINT_ID,
      scoring: CO_SCORING,
      taskIds: CO_TASKS.map((t) => t.id),
    },
    {
      skill: 'CE',
      timingS: 3600,
      blueprintId: BLUEPRINT_ID,
      scoring: CE_SCORING,
      taskIds: CE_TASKS.map((t) => t.id),
    },
    {
      // ONE clock for the three writing tâches (STANDARD-tcf §7). The per-task
      // budgets sum to this; they are not three countdowns.
      skill: 'PE',
      timingS: 3600,
      blueprintId: BLUEPRINT_ID,
      scoring: EE_SCORING,
      taskIds: EE_TASKS.map((t) => t.id),
    },
    {
      // Tâche 2's two minutes of preparation are clocked separately, on the
      // task's own prepS, and are NOT inside this figure.
      skill: 'PO',
      timingS: 720,
      blueprintId: BLUEPRINT_ID,
      scoring: EO_SCORING,
      taskIds: EO_TASKS.map((t) => t.id),
    },
  ],
};
