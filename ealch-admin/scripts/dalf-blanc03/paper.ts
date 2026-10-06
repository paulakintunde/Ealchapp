// DALF C1 blanc-03: the assembled paper.
//
// ── Four sections, in the FEI order, with the format's clocks ──────────────
//
// CO 2400 s, CE 3000 s, PE 9000 s, PO 1800 s (EXAM_FORMAT_FACTS.dalf_c1). The
// exposé's hour of preparation is on the task's prepS, NOT inside the PO
// figure: a runner that folded it in would hand the candidate their
// preparation as speaking time.
//
// PO carries four tasks because the candidate draws two subjects and chooses
// one: exposé 1, entretien 1, exposé 2, entretien 2 (BLUEPRINT §6).
//
// ── Key scattering, MCQ only ────────────────────────────────────────────────
//
// The MCQ are authored key-first (correct: 0) beside their `why`. The shared
// DALF scatter (dalf/scatter.ts) places them PER PART from a PRNG seeded on the
// task id and part index, leaves short answers (correct -1) and vrai/faux
// (Vrai/Faux never reordered) untouched, and rejects any result holding a
// strictly ascending run of three. A pure function of the paper: re-running
// yields the same keys.
import type { ExamPaper, ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, PAPER_ID, PAPER_NO, FORMAT_VERSION } from './common.ts';
import { CO_PART1, CO_PART2 } from './co.ts';
import { CE_TASK } from './ce.ts';
import { PE_SYNTHESE, PE_ESSAI, PO1_EXPOSE, PO1_ENTRETIEN, PO2_EXPOSE, PO2_ENTRETIEN } from './open.ts';

/** OUR reading of the blueprint, distinct from the board's spec edition. */
const BLUEPRINT_ID = FORMAT_VERSION;

export { hasAscendingRun, scatterMcqKeys } from '../dalf/scatter.ts';
import { scatterMcqKeys } from '../dalf/scatter.ts';

export const CO_TASKS: ExamTask[] = [CO_PART1, CO_PART2].map(scatterMcqKeys);
export const CE_TASKS: ExamTask[] = [CE_TASK].map(scatterMcqKeys);
export const PE_TASKS: ExamTask[] = [PE_SYNTHESE, PE_ESSAI];
export const PO_TASKS: ExamTask[] = [PO1_EXPOSE, PO1_ENTRETIEN, PO2_EXPOSE, PO2_ENTRETIEN];

export const TASKS: ExamTask[] = [...CO_TASKS, ...CE_TASKS, ...PE_TASKS, ...PO_TASKS];

export const PAPER: ExamPaper = {
  id: PAPER_ID,
  format: FORMAT,
  variant: VARIANT,
  paperNo: PAPER_NO,
  // No `status` here: it is not part of ExamPaper. Everything lands in_review.
  sections: [
    { skill: 'CO', timingS: 2400, blueprintId: BLUEPRINT_ID, taskIds: CO_TASKS.map((t) => t.id) },
    { skill: 'CE', timingS: 3000, blueprintId: BLUEPRINT_ID, taskIds: CE_TASKS.map((t) => t.id) },
    { skill: 'PE', timingS: 9000, blueprintId: BLUEPRINT_ID, taskIds: PE_TASKS.map((t) => t.id) },
    { skill: 'PO', timingS: 1800, blueprintId: BLUEPRINT_ID, taskIds: PO_TASKS.map((t) => t.id) },
  ],
};

/** Re-exported so a paper module is one import for the shared rules (see
 *  dalf/paper-rules.ts's DalfPaper). The draw lives in common.ts. */
export { TOPICS } from './common.ts';
