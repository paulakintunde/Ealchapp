// The imported half of a2.19, and the only place a supplied respelling is
// applied.
//
// futur-proche-rows.gen.ts is a RECORDED READ of Postgres: it holds what the
// database said on the day the manifest was regenerated, byte for byte, and
// nothing in it is edited by hand. This file is the layer between that record
// and a screen.
//
// ── WHY A LAYER IS NEEDED AT ALL ──────────────────────────────────────────
//
// FOUR OF THE SEVENTEEN CARRIED ROWS HAVE NO RESPELLING IN POSTGRES AT ALL, and
// they are the four published negatives this lesson's whole argument rests on.
// `displayRespell()` is the only function any screen may call for an imported
// respelling: a screen reading `row.respell` straight off the manifest would
// print an empty bracket on the four cards a learner is being asked to say.
//
//   REPAIRS   0  every value this lesson displays was already correct. Seven
//                naming forms out of themes the sons band went through, and
//                three sentences respelled by a2.02, a2.04, a2.13 and a2.18
//                inside this same band.
//   ADDITIONS 4  fr.a2.negation-et-restriction.107, .152, .158 and .164, none
//                of which has ever had a respelling. Every syllable was read
//                off a published row and the manifest generator re-checks that
//                the row it was read off still has one.
//
// ── WHAT IS NOT HERE, THOUGH IT EXISTS ────────────────────────────────────
//
// Seven more published negatives, and the best of them is
// fr.a2.negation-et-restriction.157 « Il ne va pas prendre le train demain. »,
// which would need two different spellings of one vowel in one sentence. See
// READ_NOT_IMPORTED in the corpus file for all nine refusals and their reasons.
//
// ── AND NOT ONE ROW HERE CARRIES A GENDER ─────────────────────────────────
//
// a2.04's ledger amendment §0: a1.03's ending population is measured off THE
// SEED, so a CARRY adds a gendered single-word noun to it even though the row
// already exists in Postgres, and a2.04 v1 moved four of a1.03's printed
// figures that way. The manifest generator REFUSES a gendered row outright and
// the merge measures the population off the seed before and after anyway.
//
// ── SIX OF THE SEVENTEEN ARE ABSENT FROM THE SEED ─────────────────────────
//
// Corrections §10. `fr.sons.consonnes.098` is the frame naming form and four of
// the five others are the published negatives. A lesson whose itemIds resolve
// to nothing renders empty cards, so the merge carries all seventeen.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { ALL_REPAIRS, RESPELL_ADDITIONS } from './futur-proche-corpus.ts';
import { FUTUR_PROCHE_ROWS, STORED_RESPELL, MEASURED } from './futur-proche-rows.gen.ts';

/** id -> the value a screen must print: the supplied one where this build
 *  supplies it, and the stored one everywhere else. `ALL_REPAIRS` is empty and
 *  is spread anyway, so a later author who adds one gets the behaviour rather
 *  than having to find out this file existed. */
const APPLIED: Record<string, string> = {
  ...Object.fromEntries(ALL_REPAIRS.map((r) => [r.id, r.to])),
  ...Object.fromEntries(RESPELL_ADDITIONS.map((r) => [r.id, r.to])),
};

/** The recorded row. Throws rather than returning undefined: a card silently
 *  missing its row looks like a card that never wanted one. */
export function imported(id: string): Item {
  const r = FUTUR_PROCHE_ROWS[id];
  if (!r) throw new Error(`${unitRef('a2.19')}: ${id} is not in the manifest. Re-run scripts/_a219_manifest.ts.`);
  return r;
}

export const importedFr = (id: string): string => imported(id).fr;
export const importedEn = (id: string): string => imported(id).en;
export const importedIpa = (id: string): string => imported(id).ipa ?? '';

/** THE ONLY FUNCTION A SCREEN MAY CALL FOR AN IMPORTED RESPELLING. A screen
 *  reading `imported(id).respell` gets what the database held, which for four
 *  of these rows is nothing at all. */
export function displayRespell(id: string): string {
  const r = imported(id);
  return APPLIED[id] ?? r.respell ?? '';
}

/** Bracketed, as the cards print it. */
export const sub = (id: string): string => `[${displayRespell(id)}]`;

/** What Postgres held when the manifest was taken, for a guard that wants to
 *  compare a supplied value against the READ rather than against a second copy
 *  of the same string. a2.14 §5. An empty string is a row that had none. */
export const stored = (id: string): string => STORED_RESPELL[id] ?? '';

/** Is this row one the build changes the display of? */
export const isApplied = (id: string): boolean => id in APPLIED;

/** A card literal for an imported row, so a deck names an id rather than
 *  restating four strings. */
export const impCard = (id: string, label: string, body: string) => ({
  label,
  head: importedFr(id),
  sub: sub(id),
  body,
});

/** A groupDrill item at `lg`. MissionRich.tsx:439 draws `fr`, `ipa` and `note`
 *  AND NOTHING ELSE at this size, so the respelling and the gloss go in `note`
 *  and `respell`/`en` are NOT passed. a2.13 shipped 59 cards and a2.14 53 with
 *  the fields present and read by nothing; ledger §a2.14-12. */
export const rowCard = (id: string) => ({
  fr: importedFr(id),
  ipa: importedIpa(id),
  note: `${sub(id)} ${importedEn(id)}`,
});

export { FUTUR_PROCHE_ROWS, STORED_RESPELL, MEASURED };
