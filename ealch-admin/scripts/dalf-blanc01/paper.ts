// DALF C1 blanc-01 — the assembled paper.
//
// ── Four sections, the four clocks of EXAM_FORMAT_FACTS.dalf_c1 ─────────────
//
//   CO 2400 s · CE 3000 s · PE 9000 s · PO 1800 s
//
// PO's hour of preparation lives on each exposé's prepS (3600), not inside the
// section figure: a runner that folds them together hands the candidate their
// preparation as speaking time.
//
// ── Draw two, choose one ────────────────────────────────────────────────────
//
// PO carries both subjects, in the order exposé 1, entretien 1, exposé 2,
// entretien 2 (BLUEPRINT §6). The candidate sits one pair.
import type { ExamPaper, ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, PAPER_ID, FORMAT_VERSION } from './common.ts';
import { CO_P1, CO_P2 } from './co.ts';
import { CE_T1 } from './ce.ts';
import { PE_SYNTHESE, PE_ESSAI, PO1_EXPOSE, PO1_ENTRETIEN, PO2_EXPOSE, PO2_ENTRETIEN } from './open.ts';

/** OUR reading of the blueprint, distinct from the board's spec edition. */
const BLUEPRINT_ID = FORMAT_VERSION;

/** MCQ keys are placed per part by the shared DALF scatter (short and tfj
 *  untouched, no strictly ascending run of three). Re-exported under the name
 *  this paper's test used. */
export { scatterMcqKeys as scatterMcq } from '../dalf/scatter.ts';
import { scatterMcqKeys as scatterMcq } from '../dalf/scatter.ts';

export const CO_TASKS: ExamTask[] = [CO_P1, CO_P2].map(scatterMcq);
export const CE_TASKS: ExamTask[] = [CE_T1].map(scatterMcq);
export const PE_TASKS: ExamTask[] = [PE_SYNTHESE, PE_ESSAI];
export const PO_TASKS: ExamTask[] = [PO1_EXPOSE, PO1_ENTRETIEN, PO2_EXPOSE, PO2_ENTRETIEN];

export const TASKS: ExamTask[] = [...CO_TASKS, ...CE_TASKS, ...PE_TASKS, ...PO_TASKS];

export const PAPER: ExamPaper = {
  id: PAPER_ID,
  format: FORMAT,
  variant: VARIANT,
  paperNo: 1,
  sections: [
    {
      // ~40 minutes; the recording carries its own read windows and pauses.
      skill: 'CO',
      timingS: 2400,
      blueprintId: BLUEPRINT_ID,
      taskIds: CO_TASKS.map((t) => t.id),
    },
    {
      skill: 'CE',
      timingS: 3000,
      blueprintId: BLUEPRINT_ID,
      taskIds: CE_TASKS.map((t) => t.id),
    },
    {
      // 2 h 30 for the synthèse and the essai together.
      skill: 'PE',
      timingS: 9000,
      blueprintId: BLUEPRINT_ID,
      taskIds: PE_TASKS.map((t) => t.id),
    },
    {
      // About 30 minutes of passation; the hour of preparation is on prepS.
      skill: 'PO',
      timingS: 1800,
      blueprintId: BLUEPRINT_ID,
      taskIds: PO_TASKS.map((t) => t.id),
    },
  ],
};

/** Re-exported so a paper module is one import for the shared rules (see
 *  dalf/paper-rules.ts's DalfPaper). */
export { TOPICS } from './common.ts';
