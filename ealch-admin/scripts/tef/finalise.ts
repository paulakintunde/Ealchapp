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

/** Where the key goes for blanc-01, by the question's index within its task.
 *
 *  FROZEN. blanc-01 is published and has been sat; moving its keys would
 *  invalidate every attempt already logged against them. This cycle is what
 *  that paper shipped with and it stays. */
const LEGACY_CYCLE_4 = [2, 0, 3, 1];
/** Block C is the paper's only three-option block. */
const LEGACY_CYCLE_3 = [1, 2, 0];

/** Papers whose key order is frozen because learners have already sat them.
 *
 *  Keyed by FORMAT AND VARIANT, not variant alone. Every format numbers its
 *  papers from blanc-01, so a bare 'blanc-01' would freeze TCF's first paper
 *  onto TEF's legacy cycle — the one thing this file exists to stop, applied to
 *  a paper nobody has ever sat. Caught the day TCF blanc-01 was assembled. */
const FROZEN = new Set(['tef_canada:blanc-01']);

/** FNV-1a. Small, deterministic, and the same on every machine — which is the
 *  whole requirement here. Not a cryptographic hash and not used as one. */
function hash32(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** mulberry32: a seeded PRNG, so "random" here still means reproducible. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

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
 * ── The defect this shape exists to fix ─────────────────────────────────────
 *
 * The first version was "a pure function of the question's position", cycling
 * [2,0,3,1] by index. With one paper that was fine. With five it was a hole:
 * every paper has the same block layout and the same item counts, so all five
 * produced the IDENTICAL key sequence — 80 of 80 positions matching. A
 * candidate who sat blanc-01 and wrote down the positions could have scored
 * 80/80 on the other four without reading a question. The sequence was also a
 * visible rotation, so it was partly guessable inside a single paper too.
 *
 * The balance assertion never saw it, because balance was never the risk: a
 * cycle is perfectly balanced by construction. Identity across papers was the
 * risk, and nothing was looking at it.
 *
 * ── What replaces it ────────────────────────────────────────────────────────
 *
 * A PRNG seeded from the paper's variant and the task's id. Still a pure
 * function of the paper, so the authoring script stays idempotent and a re-run
 * cannot move a key out from under a logged attempt. But two papers no longer
 * agree, and the sequence inside one paper is no longer an arithmetic pattern.
 *
 * Two properties are enforced rather than hoped for, because a raw PRNG gives
 * neither: the key never lands in the same position twice running, and the
 * positions stay balanced (the least-used eligible position wins, ties broken
 * by the seed).
 *
 * The counter runs across the WHOLE task, not per part, so a block of
 * seventeen single-question documents scatters properly instead of putting
 * every key in the same place.
 */
export function scatterKeys(task: ExamTask): ExamTask {
  const legacy = FROZEN.has(`${task.format}:${task.variant}`);
  const rnd = mulberry32(hash32(`${task.variant}:${task.id}`));
  const used = new Map<number, number[]>();
  let n = 0;
  let prev = -1;

  const next = (width: number): number => {
    if (legacy) {
      const cycle = width === 3 ? LEGACY_CYCLE_3 : LEGACY_CYCLE_4;
      return cycle[n % cycle.length]!;
    }
    if (!used.has(width)) used.set(width, new Array<number>(width).fill(0));
    const counts = used.get(width)!;
    // Never the previous position, unless the task is so narrow that excluding
    // it would leave nothing (width 1 cannot happen here, but the guard costs
    // nothing and an empty pool would be a crash rather than a bad paper).
    let pool = [...counts.keys()].filter((p) => p !== prev);
    if (pool.length === 0) pool = [...counts.keys()];
    const min = Math.min(...pool.map((p) => counts[p]!));
    const tied = pool.filter((p) => counts[p] === min);
    const chosen = tied[Math.floor(rnd() * tied.length)] ?? tied[0]!;
    counts[chosen] += 1;
    prev = chosen;
    return chosen;
  };

  const scatter = (it: QcmItem): QcmItem => {
    const placed = place(it, next(it.opts.length));
    n += 1;
    return placed;
  };

  if (task.parts) {
    return { ...task, parts: task.parts.map((p) => ({ ...p, items: p.items.map(scatter) })) };
  }
  if (task.items) {
    return { ...task, items: task.items.map(scatter) };
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
