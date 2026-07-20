// Gate H review triage (CONTENT-AUTHORING-GUIDE.md §12) — computed on the
// fly, not stored: nothing here is a new column, all of it is derivable
// from data the row and a cheap re-check already have. Two of §12's four
// "always 100%" triggers are genuinely NOT mechanically detectable and this
// module does not pretend otherwise:
//
//   - "Any content making a cultural claim" has no detector anywhere in this
//     codebase. A reviewer must still apply this rule by eye regardless of
//     the tier badge shown.
//   - "Anything an earlier gate flagged" is only cheaply re-checkable for
//     the pure-TypeScript gates (recycled-vocab, CEFR heuristic) — the
//     gender/IPA gates are Python subprocesses and are NOT re-run live on
//     every review-queue render (too slow for a page load). A row can show
//     'sampled' here and still have an outstanding gender/IPA warning from
//     the last publish dry-run; the Schedule/publish output remains the
//     authoritative source for those two.
//
// Both gaps are why this triage is a floor, not a substitute for judgment.
export type ReviewTier = 'full' | 'sampled';

export interface ReviewTierInput {
  level: string;
  /** Exam task types only: the open ones (po_monologue/po_interaction/
   *  pe_short/pe_essay, always full — model answers, rubrics, answer keys)
   *  vs the closed ones (co_mcq/ce_mcq, machine-markable). */
  examTaskType?: string;
  hasRubricOrModelAnswer?: boolean;
  /** Set by the caller when a cheap re-check (recycled-vocab, CEFR
   *  heuristic) already flagged this row — see the module comment above on
   *  what this does and does not cover. */
  gateFlagged?: boolean;
}

const FULL_REVIEW_LEVELS = new Set(['sons', 'a1']);
const OPEN_EXAM_TASK_TYPES = new Set(['po_monologue', 'po_interaction', 'pe_short', 'pe_essay']);

export function reviewTierFor(input: ReviewTierInput): ReviewTier {
  if (FULL_REVIEW_LEVELS.has(input.level)) return 'full';
  if (input.examTaskType && OPEN_EXAM_TASK_TYPES.has(input.examTaskType)) return 'full';
  if (input.hasRubricOrModelAnswer) return 'full';
  if (input.gateFlagged) return 'full';
  return 'sampled';
}
