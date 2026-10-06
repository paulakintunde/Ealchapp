// The dossier of an open exam task: the documents a DALF C1 synthèse is written
// from, or an exposé is prepared from. Pure, no React.
//
// ── Why parts, and not a new field ─────────────────────────────────────────
//
// A closed task's `parts` are documents WITH questions (a CE passage, a CO
// transcript). An open task's are the same documents with none: a label, a
// text, nothing to tick. Reusing the field needs no column and no publish
// mapping (content_exam_tasks.parts is already jsonb); validateExamTask holds
// the open shape apart (text required, no questions, no audio, no image).
//
// ── Why the grader is shown the dossier ────────────────────────────────────
//
// A synthèse is marked on whether it keeps the documents' ideas and adds none
// of its own (FEI demo paper: « vous ne devez pas introduire d'autres idées »).
// A grader shown only the instruction cannot tell a faithful synthèse from an
// invented one, so the stimulus it receives is the instruction followed by
// every document, labelled as the candidate saw it.

import { OPEN_TASK_TYPES, type ExamTask } from '../content/schema.ts';

const OPEN: ReadonlySet<ExamTask['taskType']> = new Set(OPEN_TASK_TYPES);

export type DossierDocument = { label: string; text: string };

/** The documents of an open task, in authored order. Empty for a closed task
 *  (its parts are question blocks, drawn by the closed runner) and for an open
 *  task without a dossier. */
export function dossierOf(task: Pick<ExamTask, 'parts' | 'taskType'>): DossierDocument[] {
  if (!OPEN.has(task.taskType)) return [];
  return (task.parts ?? [])
    .filter((p) => typeof p.text === 'string' && p.text.trim() !== '')
    .map((p) => ({ label: p.label, text: p.text! }));
}

/** What the grader is told the candidate was answering: the instruction, then
 *  the dossier. A task without one sends its prompt unchanged. */
export function graderStimulus(task: Pick<ExamTask, 'prompt' | 'parts' | 'taskType'>): string {
  const docs = dossierOf(task);
  if (docs.length === 0) return task.prompt;
  return [task.prompt, ...docs.map((d) => `--- ${d.label} ---\n${d.text}`)].join('\n\n');
}

