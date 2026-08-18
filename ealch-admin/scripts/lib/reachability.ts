// PART A of SEED-IS-GENERATED-FIX-PLAN.md: refuse an authored row that nothing
// reaches.
//
// ── THE DEFECT THIS EXISTS FOR ─────────────────────────────────────────────
//
// Doctrine §E has always said every item must be reachable — named by a
// section, or released by a deckTranche and carrying a `flashcard` drill.
// Nothing enforced it, so a2.29 authored `fr.a2.hebergement.086`
// « Le problème n'est pas réglé. », no lesson ever named it, and it shipped
// past 33 green guards.
//
// It surfaced three weeks later for an unrelated reason: v51 was the first
// `content:publish` in a week, the publish REGENERATES seed.json from Postgres
// and applies the cut, `hebergement` is not in `SEED_CUT.themes`, so the
// unreferenced row was dropped and `a2-29-hotel.test.ts` went red on a count it
// had been asserting against the seed.
//
// The row itself was never the expensive part. The expensive part was that
// nothing asked the question at authoring time, when the answer was one line.
//
// ── WHY A ROW LIKE THIS IS WORSE THAN IT LOOKS ─────────────────────────────
//
//   1. no learner can reach it, so it teaches nobody
//   2. the publish cut drops it, so the seed and the source disagree
//   3. any test counting the block in the seed breaks on the next publish
//   4. it is invisible until (3) happens, which may be weeks later
//
// Call this from an authoring batch BEFORE the write. It costs nothing and it
// is the whole of PART A.
import type { Lesson } from '../../../ealch-v2/src/content/schema.ts';

const ITEM_ID = /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/;

/** Every corpus id this lesson can put in front of a learner.
 *
 *  A plain recursive string walk rather than a field list, deliberately: a row
 *  is reachable if ANYTHING names it, and a walk cannot go stale when a new
 *  section type starts carrying ids. `itemIds`, `deckTranche` and `drills` are
 *  unioned in explicitly because they are id lists rather than prose. */
export function reachableIds(lesson: Lesson): Set<string> {
  const out = new Set<string>();
  const walk = (v: unknown): void => {
    if (typeof v === 'string') { if (ITEM_ID.test(v)) out.add(v); return; }
    if (Array.isArray(v)) { v.forEach(walk); return; }
    if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  walk(lesson.sections);
  walk(lesson.sheets);
  for (const id of lesson.itemIds ?? []) out.add(id);
  for (const t of lesson.deckTranche ?? []) for (const id of t) out.add(id);
  for (const d of lesson.drills ?? []) for (const id of d.items ?? []) out.add(id);
  return out;
}

/** The rows this build authored that nothing reaches. Empty is the only
 *  acceptable answer. */
export function unreachableRows<T extends { id: string; fr?: string }>(
  lesson: Lesson,
  authored: readonly T[],
): T[] {
  const reachable = reachableIds(lesson);
  return authored.filter((r) => !reachable.has(r.id));
}

/** Throw unless every authored row is reachable.
 *
 *  `die` is passed in so the batch's own STOP formatting and exit code are used
 *  rather than a second convention. */
export function assertReachable<T extends { id: string; fr?: string }>(
  lesson: Lesson,
  authored: readonly T[],
  die: (message: string) => never,
): void {
  const orphans = unreachableRows(lesson, authored);
  if (!orphans.length) return;
  const list = orphans.map((r) => `${r.id}${r.fr ? ` "${r.fr.slice(0, 44)}"` : ''}`).join('\n      ');
  die(
    `${orphans.length} authored row(s) are reachable from nothing:\n      ${list}\n`
    + '\n  Doctrine §E: name it in a section, release it in a deckTranche, or do not author it.'
    + '\n  An unreachable row teaches nobody, is dropped by the publish cut when its theme is'
    + '\n  outside SEED_CUT.themes, and takes any seed-based block count down with it three'
    + '\n  weeks later. a2.29 shipped fr.a2.hebergement.086 exactly this way.',
  );
}
