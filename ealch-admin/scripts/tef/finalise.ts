// Key scattering.
//
// ── The problem this exists to solve ────────────────────────────────────────
//
// The exam runner renders options in AUTHORED ORDER. `taskQuestions` flattens
// parts and items and nothing permutes anything, unlike the lesson quiz which
// shuffles at runtime. So the authored order IS what the candidate sees.
//
// Every item in this paper is authored with the key written FIRST. That is
// deliberate and it is what makes review possible: a reviewer reading the
// source sees the intended answer at the top of every option list, next to the
// `why` that justifies it. Shipping that order would also mean a candidate who
// picks the first option every time scores 40 out of 40.
//
// So the key is placed here instead, mechanically, after authoring.
//
// ── Why deterministic and not random ────────────────────────────────────────
//
// The authoring script is idempotent: re-running it upserts the same rows. A
// random scatter would move the answer key on every run, which would silently
// invalidate any attempt already logged against the old key and make two runs
// of the same script produce two different papers. The scatter is therefore a
// pure function of the question's position.
//
// ── Why this is not sleight of hand ─────────────────────────────────────────
//
// Authoring the key first and randomising its position afterwards is ordinary
// test construction. What would be sleight of hand is a scatter that looked
// balanced and was not, so `keyPositionCounts` exists to be asserted on: no
// position may carry a disproportionate share, and the paper's test does that
// check for real.
import type { ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';

/** Where the key goes, by the question's index within its task. Chosen so no
 *  two consecutive questions put the key in the same place and each position
 *  gets an equal share over any run of four. */
const SCATTER_4 = [2, 0, 3, 1];
/** Block C is the paper's only three-option block. */
const SCATTER_3 = [1, 2, 0];

/** Move the key from index 0 to `pos`, keeping the distractors in order. */
function place(item: QcmItem, pos: number): QcmItem {
  if (item.correct !== 0) {
    throw new Error(
      `scatterKeys expects every item authored key-first (correct: 0); got correct: ${item.correct} on "${item.q}"`
    );
  }
  const [key, ...rest] = item.opts;
  if (key === undefined) throw new Error(`item has no options: "${item.q}"`);
  const target = Math.min(pos, rest.length);
  return { ...item, opts: [...rest.slice(0, target), key, ...rest.slice(target)], correct: target };
}

/**
 * Scatter one closed task's keys.
 *
 * The counter runs across the WHOLE task, not per part, so a block of
 * seventeen single-question documents scatters properly instead of putting
 * every key in the same place.
 */
export function scatterKeys(task: ExamTask): ExamTask {
  let n = 0;
  const next = (opts: string[]) =>
    (opts.length === 3 ? SCATTER_3[n % SCATTER_3.length]! : SCATTER_4[n % SCATTER_4.length]!);

  if (task.parts) {
    return {
      ...task,
      parts: task.parts.map((p) => ({
        ...p,
        items: p.items.map((it) => {
          const placed = place(it, next(it.opts));
          n += 1;
          return placed;
        }),
      })),
    };
  }
  if (task.items) {
    return {
      ...task,
      items: task.items.map((it) => {
        const placed = place(it, next(it.opts));
        n += 1;
        return placed;
      }),
    };
  }
  return task;
}

/** Key positions across a set of tasks, for the distribution assertion. */
export function keyPositionCounts(tasks: ExamTask[]): Record<number, number> {
  const counts: Record<number, number> = {};
  for (const t of tasks) {
    const items = t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []);
    for (const it of items) counts[it.correct] = (counts[it.correct] ?? 0) + 1;
  }
  return counts;
}

/** Every option string, for the length and echo checks the standard asks for. */
export function allItems(tasks: ExamTask[]): QcmItem[] {
  return tasks.flatMap((t) => (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? [])));
}
