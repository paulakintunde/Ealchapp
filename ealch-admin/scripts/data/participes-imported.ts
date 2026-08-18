// The imported half of a2.20, and the only place a repaired respelling is
// applied.
//
// participes-rows.gen.ts is a RECORDED READ of Postgres: it holds what the
// database said on the day the manifest was regenerated, byte for byte, and
// nothing in it is edited by hand. This file is the layer between that record
// and a screen.
//
// ── WHY A LAYER IS NEEDED AT ALL ──────────────────────────────────────────
//
// ONE OF THE THIRTY-NINE CARRIED ROWS HAS A RESPELLING THIS BUILD REPAIRS, and
// a screen reading `row.respell` straight off the manifest would print the
// broken value on the -it group's own card.
//
//   REPAIRS   1  fr.sons.verbes-essentiels.118 « construire », [kohn-STRWEER]
//                to [kohⁿ-STRWEER]. VISIBLE: a hyphen follows the n, so a2.18
//                §1's rule says the checker can see it, and it does.
//   ADDITIONS 0  and asserted empty rather than omitted.
//
// ── WHAT IS NOT HERE, THOUGH IT EXISTS ────────────────────────────────────
//
// Four rows this lesson wanted and refused for `gender`: `le reçu` twice
// (fr.sons.accents.058, fr.sons.consonnes.086) and the gendered copies of
// `écrire` and `lire` (fr.a1.ecole.049, .048). a2.04's ledger amendment §0: a
// CARRY is what puts a row into a1.03's ending population, so a gendered
// single-word row costs twenty printed figures in a1-03-genre.test.ts.
//
// And three rows with no respelling at all — fr.a1.cafe.112 « Nous restons
// assis à l'intérieur. », fr.a1.presentation-personnelle.107 « Je suis né à
// Marseille. » and fr.a1.evenements-familiaux.003 — where supplying one would
// have needed tokens no published row holds. See READ_NOT_IMPORTED in the
// corpus file for all seven refusals and their reasons.
//
// ── THIRTEEN OF THE THIRTY-NINE ARE ABSENT FROM THE SEED ──────────────────
//
// Corrections §10, and it bites harder here than anywhere: `être`, `voir`,
// `naître`, `mourir`, `croire`, `recevoir`, `construire` and `s'asseoir` are
// all missing from the cut, and every one of them is the naming form of a past
// form this lesson teaches. A lesson whose itemIds resolve to nothing renders
// empty cards, so the merge carries all thirty-nine.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { ALL_REPAIRS, RESPELL_ADDITIONS } from './participes-corpus.ts';
import { PARTICIPES_ROWS, STORED_RESPELL, EVIDENCE, MEASURED } from './participes-rows.gen.ts';

/** id -> the value a screen must print: the repaired one, and the stored one
 *  everywhere else. */
const APPLIED: Record<string, string> = {
  ...Object.fromEntries(ALL_REPAIRS.map((r) => [r.id, r.to])),
  ...Object.fromEntries(RESPELL_ADDITIONS.map((r) => [r.id, r.to])),
};

/** The recorded row. Throws rather than returning undefined: a card silently
 *  missing its row looks like a card that never wanted one. */
export function imported(id: string): Item {
  const r = PARTICIPES_ROWS[id];
  if (!r) throw new Error(`a2.20: ${id} is not in the manifest. Re-run scripts/_a220_manifest.ts.`);
  return r;
}

export const importedFr = (id: string): string => imported(id).fr;
export const importedEn = (id: string): string => imported(id).en;
export const importedIpa = (id: string): string => imported(id).ipa ?? '';

/** THE ONLY FUNCTION A SCREEN MAY CALL FOR AN IMPORTED RESPELLING. A screen
 *  reading `imported(id).respell` gets what the database held, which for
 *  `construire` is the value being repaired. */
export function displayRespell(id: string): string {
  const r = imported(id);
  return APPLIED[id] ?? r.respell ?? '';
}

/** Bracketed, as the cards print it. */
export const sub = (id: string): string => `[${displayRespell(id)}]`;

/** What Postgres held when the manifest was taken, for a guard that wants to
 *  compare a repaired value against the READ rather than against a second copy
 *  of the same string. a2.14 §5. */
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
 *  and `respell`/`en` are NOT passed. Ledger §a2.14-12. */
export const rowCard = (id: string) => ({
  fr: importedFr(id),
  ipa: importedIpa(id),
  note: `${sub(id)} ${importedEn(id)}`,
});

export { PARTICIPES_ROWS, STORED_RESPELL, EVIDENCE, MEASURED };
