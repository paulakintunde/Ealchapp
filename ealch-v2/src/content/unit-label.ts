// How a lesson refers to another lesson ON A LEARNER SURFACE.
//
// A card used to say « a2.24's line ». A learner has never seen `a2.24` and has
// no way to find it, so a citation named the thing only the authors could
// resolve. It now says « lesson 22's line ».
//
// ── THE TRAP THIS MODULE EXISTS TO CLOSE ───────────────────────────────────
//
// **THE ID NUMBER IS NOT THE LESSON NUMBER.** Ids were assigned before each
// trail was sequenced, and they disagree almost everywhere:
//
//     a2.12 is lesson 6      a2.02 is lesson 5      a2.08 is lesson 32
//     a1.17 is lesson 20     a1.03 is lesson 5      sons.07 is lesson 8
//
// Measured across the corpus: 31 of 35 A2 units disagree, 27 of 30 A1 and 4 of
// 10 sons. So a label is ALWAYS resolved through `unit.seq` and never by
// slicing the id. a2.24 shipped « since seq 17 of A1 » about a1.17 for months,
// which is this mistake reaching a learner.
//
// ── WHY IT READS TWO WAYS ──────────────────────────────────────────────────
//
// « lesson 24 in A2's six ways » puts a possessive on a prepositional phrase
// and repeats the track at a reader who is already in A2. Within one track the
// track is recoverable from context, so the possessive form drops it and reads
// « lesson 24's six ways ». Across tracks it is kept, because there it is the
// whole point: « lesson 20 in A1 » is the only form that is not ambiguous.

import seed from './seed.json' with { type: 'json' };

const TRACK: Record<string, string> = {
  a1: 'A1', a2: 'A2', b1: 'B1', b2: 'B2', c1: 'C1', sons: 'Sounds',
};

type SeedUnit = { id: string; seq: number | string };

/** id -> "lesson N in A2". Built once from the shipped units, so it cannot
 *  drift from the trail the learner actually walks. */
const FULL = new Map<string, string>();
/** id -> "lesson N", for the same-track possessive. */
const SHORT = new Map<string, string>();

for (const u of (seed.units as unknown as SeedUnit[])) {
  const track = u.id.split('.')[0];
  if (!TRACK[track]) continue;
  FULL.set(u.id, `lesson ${Number(u.seq)} in ${TRACK[track]}`);
  SHORT.set(u.id, `lesson ${Number(u.seq)}`);
}

/** The label a learner surface uses for `unitId`.
 *
 *  `citingTrack` is the track of the lesson doing the citing. Pass it to get
 *  the short possessive form when the citation stays inside one track; leave it
 *  out for the full form, which is what non-possessive prose uses.
 *
 *  Returns the id unchanged for anything with no unit behind it, so an unknown
 *  id is visible in a failure rather than silently becoming a lesson number
 *  that does not exist. */
export function unitLabel(unitId: string, citingTrack?: string): string {
  const full = FULL.get(unitId);
  if (!full) return unitId;
  if (citingTrack && unitId.startsWith(`${citingTrack}.`)) return SHORT.get(unitId)!;
  return full;
}

/** Every form a learner surface may use for `unitId`. A guard asking « is this
 *  unit named here » should accept either, because whether a citation is
 *  possessive is a fact about the sentence rather than about the citation. */
export function unitLabels(unitId: string): string[] {
  const full = FULL.get(unitId);
  if (!full) return [unitId];
  return [full, SHORT.get(unitId)!];
}

/** Does `hay` name `unitId` in any of its learner-facing forms?
 *
 *  This is what a guard should call instead of looking for the raw id. It
 *  deliberately does NOT match the id itself: after the migration an id on a
 *  learner surface is a defect, and a guard that accepted both would stop
 *  catching it.
 *
 *  CASE-INSENSITIVE. A citation that opens a sentence is capitalised at
 *  interpolation time, so « Lesson 10 in A1 taught you this » and « as lesson
 *  10 in A1 taught you » are one citation. Matching case-sensitively made this
 *  return false on every sentence-initial citation in the band, which is most
 *  of them. */
export function namesUnitLabel(hay: string, unitId: string): boolean {
  const h = hay.toLowerCase();
  return unitLabels(unitId).some((l) => h.includes(l.toLowerCase()));
}
