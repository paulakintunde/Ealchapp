// MCQ key placement for a DALF paper, shared by every blanc (moved here from
// dalf-blanc02 when blanc-01 turned out to need it too).
//
// A DALF comprehension task mixes MCQ, short answers (correct -1, which
// scatterKeys would throw on) and vrai/faux (whose Vrai/Faux order must never
// move). So each part's MCQ go through scatterKeys on a shadow task and are put
// back in their slots; short and tfj items keep their authored order and keys.
//
// PER PART, not per task: scattered across a whole task, two three-question
// extracts read A B C and A B C B, balanced and visibly a rotation. Each part
// is seeded on `<task id>#p<part index>`; a result holding a strictly ascending
// OR descending run of three or more (A B C, C B A) is rejected and the next
// salt (`.1`, `.2`, ...) tried.
// A pure function of the paper: re-running yields the same keys.
import type { ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { scatterKeys } from '../tef/finalise.ts';

const isMcq = (i: QcmItem) => (i.kind ?? 'mcq') === 'mcq';

/** True when the sequence holds a strictly ascending run of three or more. */
export const hasAscendingRun = (keys: number[]): boolean =>
  keys.some((k, i) => i + 2 < keys.length && k < keys[i + 1]! && keys[i + 1]! < keys[i + 2]!);

/** Ascending or descending: C B A reads as a rotation as plainly as A B C
 *  (blanc-04 author, 2026-10-06). */
export const hasMonotoneRun = (keys: number[]): boolean =>
  hasAscendingRun(keys) || hasAscendingRun([...keys].reverse());

export function scatterMcqKeys(task: ExamTask): ExamTask {
  const parts = task.parts ?? [];
  return {
    ...task,
    parts: parts.map((p, k) => {
      const mcq = p.items.filter(isMcq);
      let placed = mcq;
      for (let salt = 0; salt < 50; salt += 1) {
        const id = `${task.id}#p${k}${salt ? `.${salt}` : ''}`;
        placed = scatterKeys({ ...task, id, parts: [{ ...p, items: mcq }] }).parts![0]!.items;
        if (!hasMonotoneRun(placed.map((i) => i.correct))) break;
      }
      const queue = [...placed];
      return { ...p, items: p.items.map((it) => (isMcq(it) ? queue.shift()! : it)) };
    }),
  };
}
