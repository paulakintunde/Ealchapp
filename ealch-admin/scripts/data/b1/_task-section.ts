// DRAFT — the `task` lesson section proposed for B1 and above. NOT in
// schema.ts yet, and nothing renders it. The four pilot lessons (b1.01-b1.04)
// author against this type so the review can judge real content, and the
// schema/renderer/grader work starts only once Paul approves the drafts.
//
// WHY A NEW SECTION. Every existing lesson section is fixed-answer: quiz,
// trapDrill, listening, groupDrill all mark an index. B1's unit outcomes are
// productive ("narrate a coherent past episode"), and a fixed-answer check
// cannot tell whether a learner can do that. The Examiner already grades open
// answers against a rubric (src/services/examGrader.ts,
// supabase/functions/grade-exam), so this section reuses its contract:
// `Rubric` and `ResponseSpec` are imported, not reinvented.
//
// WHAT IS DIFFERENT FROM AN ExamTask. A lesson task is formative, not a
// measurement: it gives the criteria BEFORE the learner writes, it offers a
// scaffold, and its feedback names the lesson section to revisit (`ref`) rather
// than a band. There is no timer and no scoringMap.
//
// PROPOSED RENDER. One mission, three steps:
//   1. the brief: situation, what to produce, the criteria as a checklist
//   2. the response: text box (or mic when kind is 'audio'), scaffold chips
//   3. the feedback: per-criterion verdict from the grader, the model answer,
//      and a "see this again" jump per failed criterion via `ref`
// Offline or grader failure falls back to self-check: the learner ticks the
// criteria against the model answer. The lesson never blocks on the network.

import type { LessonSection, Rubric, ResponseSpec } from '../../../../ealch-v2/src/content/schema.ts';

export type TaskSection = {
  type: 'task';
  id: string;
  title: string;
  /** French subtitle, as every mission section carries. */
  frSub?: string;
  /** The situation, in the lesson's instruction language (B1: simple French). */
  brief: string;
  /** One-line English gloss of the brief. B1 only; B2 drops it. */
  briefEn?: string;
  /** Exactly what to produce, as a single imperative sentence. */
  produce: string;
  responseSpec: ResponseSpec;
  /** Reused from ExamTask. Every criterion carries descriptors: at B1 the
   *  learner reads them before writing, so they double as the checklist. */
  rubric: Rubric;
  /** Optional sentence starters or connectors offered as tap-to-insert chips.
   *  Scaffolding, not an answer: none of them may complete the task alone. */
  scaffold?: string[];
  /** What a good answer looks like, at the level (not above it). */
  modelAnswer: string;
  modelAnswerEn?: string;
  /** Errors the grader should name when it sees them, each pointing at the
   *  section that teaches the fix. `criterion` is a rubric key. */
  watchFor: { pattern: string; criterion: string; feedback: string; ref?: string }[];
  /** Notes for the grader prompt only, never shown to the learner. */
  graderNotes?: string[];
};

/** What a B1 draft lesson's `sections` array holds until `task` is in the
 *  schema union. */
export type DraftSection = LessonSection | TaskSection;
