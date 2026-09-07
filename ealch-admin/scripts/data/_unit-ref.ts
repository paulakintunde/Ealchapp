// How authored content refers to another lesson ON A LEARNER SURFACE.
//
//   `${PLACE_UNIT} taught this.`            ->  "a1.06 taught this."      WRONG
//   `${unitRef(PLACE_UNIT)} taught this.`   ->  "lesson 10 in A1 taught this."
//
// ── WHY THIS EXISTS ────────────────────────────────────────────────────────
//
// A2-BUILD-DOCTRINE.md:199 said « name the earlier instance by unit id », and
// every A2 build did, so 36 of 37 lesson bodies printed `a2.24` on a card. A
// learner has never seen that string and cannot look it up.
//
// ── THE TRAP ───────────────────────────────────────────────────────────────
//
// **THE ID NUMBER IS NOT THE LESSON NUMBER.** Ids were assigned before each
// trail was sequenced. Measured across the corpus: 31 of 35 A2 units disagree
// with their own seq, 27 of 30 A1, and 4 of 10 sons.
//
//     a2.12 is lesson 6      a2.02 is lesson 5      a2.08 is lesson 32
//     a1.17 is lesson 20     a1.03 is lesson 5      sons.07 is lesson 8
//
// So a label is ALWAYS resolved through `seq`. `a2.24` shipped « since seq 17
// of A1 » about a1.17 for months, which is this exact mistake reaching a
// learner: somebody read the id as the position.
//
// ── WHAT IT DELIBERATELY DOES NOT COVER ────────────────────────────────────
//
// `grammarAssumed`, `grammarIntroduced` and `prereqUnitIds` are addressed to
// the CURRICULUM and are resolved against `content_units`. They keep the raw
// id and must never be passed through here. That separation is why the source
// change is mechanical: prose interpolates `${X_UNIT}` inside a template
// literal, and the metadata arrays hold a bare `X_UNIT`.

import seed from '../../../ealch-v2/src/content/seed.json' with { type: 'json' };

const TRACK: Record<string, string> = {
  a1: 'A1', a2: 'A2', b1: 'B1', b2: 'B2', c1: 'C1', sons: 'Sounds',
};

type SeedUnit = { id: string; seq: number | string };

const FULL = new Map<string, string>();
const SHORT = new Map<string, string>();
for (const u of (seed.units as unknown as SeedUnit[])) {
  const track = u.id.split('.')[0];
  if (!TRACK[track]) continue;
  FULL.set(u.id, `lesson ${Number(u.seq)} in ${TRACK[track]}`);
  SHORT.set(u.id, `lesson ${Number(u.seq)}`);
}

/** The label a learner surface uses for `unitId`.
 *
 *  Pass `citingTrack` to get the SHORT form, which is what a possessive wants
 *  when the citation stays inside one track: « lesson 24's six ways » rather
 *  than « lesson 24 in A2's six ways », which puts a possessive on a
 *  prepositional phrase and repeats the track at a reader already in it.
 *
 *  An id with no unit behind it comes back unchanged, so a typo shows up as a
 *  raw id on a card and fails the guard rather than silently becoming a lesson
 *  number that does not exist. */
export function unitRef(unitId: string, citingTrack?: string): string {
  const full = FULL.get(unitId);
  if (!full) return unitId;
  if (citingTrack && unitId.startsWith(`${citingTrack}.`)) return SHORT.get(unitId)!;
  return full;
}

/** The possessive form. Sugar for the same-track short label, so a card can
 *  write `${unitPoss(OBJECT_UNIT, 'a2')}'s line` and read as English. */
export function unitPoss(unitId: string, citingTrack: string): string {
  return unitRef(unitId, citingTrack);
}

/** Does `hay` name `unitId` THE WAY A LEARNER READS IT?
 *
 *  The guard half of the same migration. A batch used to assert
 *  `hasWord(LEARNER_TEXT, 'a2.06')`, which after the migration can only fail:
 *  the surface now says « lesson 21 in A2 » and the id is gone.
 *
 *  Case-insensitive, because a citation that opens a sentence is capitalised at
 *  interpolation time, so « Lesson 21 in A2 » and « lesson 21 in A2 » are one
 *  citation.
 *
 *  It deliberately does NOT also accept the raw id. A guard taking either would
 *  pass on exactly the thing this change removed. */
export function namesUnitLabel(hay: string, unitId: string): boolean {
  const h = hay.toLowerCase();
  const full = FULL.get(unitId);
  if (!full) return false;
  return [full, SHORT.get(unitId)!].some((l) => h.includes(l.toLowerCase()));
}
