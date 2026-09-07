// Reading an ExamTask, in ways no format owns.
//
// Extracted from tef/paper-rules.ts when TCF needed a verifier of its own. Only
// the HELPERS moved: the 37 rules stayed where they are, because most of them
// speak about blocks and TCF has none, and lifting a working guard off five
// published papers to make room for a format with no papers yet would be
// trading a certainty for a hope.
//
// What did move is the part both formats genuinely share — how to get the items
// out of a task whether they hang off `items` or off `parts`, and what counts
// as text a candidate reads. A second copy of `candidateFacing` is how a banned
// word ends up caught on one format and not the other.
import type { ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';

/** Every scored item in a task, whether it carries them directly or per part. */
export const itemsOf = (t: ExamTask): QcmItem[] => (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []));

export const countOf = (t: ExamTask): number => itemsOf(t).length;

/** Words, the way a marker counts them. */
export const words = (s: string): number => s.trim().split(/\s+/).filter(Boolean).length;

/**
 * Everything a candidate or a grader actually reads.
 *
 * The list is deliberately wide: a rubric descriptor and an interlocutor's
 * catch-all line are both read by a person, so a banned word in either is a
 * banned word shipped. Anything omitted here is a surface no text rule can see.
 */
export function candidateFacing(tasks: ExamTask[]): string[] {
  const out: string[] = [];
  for (const t of tasks) {
    out.push(t.prompt, t.label ?? '', t.modelAnswer ?? '');
    for (const part of t.parts ?? []) out.push(part.label, part.text ?? '', part.imageAlt ?? '');
    for (const it of itemsOf(t)) out.push(it.q, it.why ?? '', ...it.opts);
    for (const c of t.rubric?.criteria ?? []) out.push(c.label, ...(c.descriptors ?? []));
    const b = t.interlocutor;
    if (b) for (const turn of [b.opening, b.catchAll, b.closing, ...b.answers]) out.push(turn.text, turn.covers);
  }
  return out.filter(Boolean);
}
