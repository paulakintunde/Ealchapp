// The imported half of a2.04, and the only place a repaired respelling is
// applied.
//
// prepositions-lieu-rows.gen.ts is a RECORDED READ of Postgres: it holds what
// the database said on the day the manifest was regenerated, byte for byte, and
// nothing in it is edited by hand. This file is the layer between that record
// and a screen.
//
// ── WHY A LAYER IS NEEDED AT ALL ──────────────────────────────────────────
//
// NINE OF THE THIRTY-SEVEN CARRIED ROWS DO NOT DISPLAY WHAT POSTGRES HELD WHEN
// THE MANIFEST WAS TAKEN. All nine are nasal repairs and `displayRespell()` is
// the only function any screen may call for an imported respelling: a screen
// reading `row.respell` straight off the manifest would print `mayd-SAN` on the
// hero card of a lesson whose subject is that phrase.
//
//   REPAIRS   9  every one read off a published row or a one-character change,
//                TWO of them INVISIBLE to the shared checker and THREE of them
//                house-convention rather than minimal
//   ADDITIONS 0  every imported row already carries a respelling
//
// ── WHAT IS NOT HERE, THOUGH IT EXISTS ────────────────────────────────────
//
// `le notaire`, `la piscine`, `Marseille` and `le Portugal` have no accessor,
// and that absence is load-bearing: they are the four answers to the
// generalisation drill, and importing any of them would delete its question.
// The manifest generator refuses them by name.
//
// `chez elle`, `aux États-Unis` in a sentence, `à Lyon` in a sentence and three
// others have no accessor either, because every one of them carries U+203F.
// See READ_NOT_IMPORTED in the corpus file for the list and the consequence.
//
// ── AND THIS IS THE ONE LESSON IN THE BAND THAT CARRIES GENDER ────────────
//
// Fourteen of the thirty-seven rows have a `gender`, and every other manifest
// in this band refuses one. The reason those refuse it is a1.03's measured
// ending population, which a gendered SINGLE-WORD row joins; the reason this
// one cannot is that its subject is nouns. Every gendered row here is IMPORTED
// and therefore already in that population, and the corpus file authors ZERO
// headwords, so the population does not move. The batch measures it through the
// real `endingPopulation` before and after rather than asserting it.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { ALL_REPAIRS } from './prepositions-lieu-corpus.ts';
import { PREPOSITIONS_LIEU_ROWS, STORED_RESPELL } from './prepositions-lieu-rows.gen.ts';

/** id -> the value a screen must print, which is the repaired one where this
 *  build repairs the row and the stored one everywhere else. */
const REPAIRED: Record<string, string> = Object.fromEntries(
  ALL_REPAIRS.map((r) => [r.id, r.to]),
);

/** The recorded row. Throws rather than returning undefined: a card silently
 *  missing its row looks like a card that never wanted one. */
export function imported(id: string): Item {
  const r = PREPOSITIONS_LIEU_ROWS[id];
  if (!r) throw new Error(`a2.04: ${id} is not in the manifest. Re-run scripts/_a204_manifest.ts.`);
  return r;
}

export const importedFr = (id: string): string => imported(id).fr;
export const importedEn = (id: string): string => imported(id).en;
export const importedIpa = (id: string): string => imported(id).ipa ?? '';

/** THE ONLY FUNCTION A SCREEN MAY CALL FOR AN IMPORTED RESPELLING. A screen
 *  reading `imported(id).respell` gets what the database held, which for nine of
 *  these rows is the value this build is replacing. */
export function displayRespell(id: string): string {
  const r = imported(id);
  return REPAIRED[id] ?? r.respell ?? '';
}

/** Bracketed, as the cards print it. */
export const sub = (id: string): string => `[${displayRespell(id)}]`;

/** What Postgres held when the manifest was taken, for a guard that wants to
 *  compare a repair against the READ rather than against a second copy of the
 *  same string. a2.14 §5: if a lesson prints a respelling in more than one
 *  place, compare them. */
export const stored = (id: string): string => STORED_RESPELL[id] ?? '';

/** Is this row one the build repairs? */
export const isRepaired = (id: string): boolean => id in REPAIRED;

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

export { PREPOSITIONS_LIEU_ROWS, STORED_RESPELL };
