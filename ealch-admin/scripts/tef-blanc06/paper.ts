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
import { CO_SCORING, CE_SCORING, EE_SCORING, EO_SCORING } from '../tef/scoring.ts';

// The stricter scatter now lives in tef/finalise.ts (decision 44): this paper
// was the first to use it, and every NEW TEF paper does. Re-exported so this
// paper's test and imports keep their names.
export { keysOf, hasRepeatingCycle, looksPatterned, scatterWithoutRuns } from '../tef/finalise.ts';
import { scatterWithoutRuns } from '../tef/finalise.ts';

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
