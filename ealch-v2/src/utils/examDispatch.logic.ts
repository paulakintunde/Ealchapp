// Which component renders a given exam task.
//
// ── Why this is a module and not an inline ternary ─────────────────────────
//
// It WAS an inline ternary in exam-section.tsx, and it shipped a broken paper.
//
// The chain read: `taskType === 'po_interaction'` → the interaction component,
// else `skill === 'PO'` → the plain recorder. When `po_debate` was added it
// inherited `skill: 'PO'`, so it fell through to the recorder — and a DELF
// débat rendered as a task where the candidate talks and the examiner never
// raises an objection. The bank was authored, validated, rendered to
// twenty-nine clips, published, and never read. Its own prompt tells the
// candidate « L'examinateur va contester la position que vous venez de
// défendre », so the screen promised the challenge and delivered a microphone.
//
// Nothing failed. Every test passed, because they all exercised the logic
// module directly and none of them asked what the screen would draw.
//
// A ternary chain has no shape a compiler can check. This does: the switch
// below is exhaustive over ExamTaskType, and the `never` assignment at the end
// means ADDING A TASK TYPE IS A COMPILE ERROR until it is given a surface.
// That is the guard the previous shape could not offer — not a test someone
// has to remember to write, but a build that stops.

import type { ExamTask, ExamTaskType } from '../content/schema.ts';

/** The surfaces exam-section.tsx can draw. */
export type ExamSurface =
  /** Multiple choice with audio parts. */
  | 'listening'
  /** Multiple choice, read only. */
  | 'closed'
  /** A written answer against a rubric. */
  | 'open'
  /** The candidate speaks; nothing answers back. */
  | 'speak'
  /** The candidate asks; a recorded examiner answers. TEF and TCF. */
  | 'interaction'
  /** A recorded examiner challenges the candidate's position. DELF. */
  | 'debate';

/**
 * The surface for one task.
 *
 * Reads `taskType` FIRST and `skill` only where a type genuinely has two
 * presentations. The old chain had that order backwards for the PO family,
 * which is exactly how a new PO type inherited the wrong surface in silence.
 */
export function surfaceFor(task: Pick<ExamTask, 'taskType' | 'parts'>): ExamSurface {
  switch (task.taskType) {
    case 'co_mcq':
      // Listening tasks carry their documents in `parts`. A CO task with none
      // is malformed, and the closed surface is the honest fallback: it shows
      // the questions rather than a player with nothing to play.
      return task.parts?.length ? 'listening' : 'closed';
    case 'ce_mcq':
      return 'closed';
    case 'po_monologue':
      return 'speak';
    case 'po_interaction':
      return 'interaction';
    case 'po_debate':
      return 'debate';
    case 'pe_short':
    case 'pe_essay':
      return 'open';
    default: {
      // The whole point. A new member of ExamTaskType lands here, TypeScript
      // refuses to widen it to `never`, and the build fails at the moment the
      // type is added — before anything is authored, rendered or published.
      const unreachable: never = task.taskType;
      throw new Error(`no surface for exam task type "${String(unreachable)}"`);
    }
  }
}

/** Every task type, and the surface it draws. Exported so a test can assert
 *  the mapping is total without re-deriving it. */
export const SURFACE_BY_TASK_TYPE: Record<ExamTaskType, ExamSurface> = {
  co_mcq: 'listening',
  ce_mcq: 'closed',
  po_monologue: 'speak',
  po_interaction: 'interaction',
  po_debate: 'debate',
  pe_short: 'open',
  pe_essay: 'open',
};
