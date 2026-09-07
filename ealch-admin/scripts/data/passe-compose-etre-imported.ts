// The imported half of a2.21, and the only place a repaired respelling is
// applied.
//
// passe-compose-etre-rows.gen.ts is a RECORDED READ of Postgres: it holds what
// the database said on the day the manifest was regenerated, byte for byte, and
// nothing in it is edited by hand. This file is the layer between that record
// and a screen.
//
// ── WHY A LAYER IS NEEDED AT ALL ──────────────────────────────────────────
//
// TWO OF THE TWENTY-TWO CARRIED ROWS HAVE A RESPELLING THIS BUILD REPAIRS, and a
// screen reading `row.respell` straight off the manifest would print the broken
// value on the up-and-down family's own card.
//
//   REPAIRS   2  fr.a1.transports-quotidiens.044 « monter », [mohn-TAY] to
//                [mohⁿ-TAY], and fr.sons.verbes-essentiels.044 « tomber »,
//                [tohn-BAY] to [tohⁿ-BAY]. BOTH VISIBLE to hasPlainNasalFor,
//                against a brief and a corrections file that both call them
//                invisible. Corpus file §8.
//   ADDITIONS 0  and asserted empty rather than omitted.
//
// ── WHAT IS NOT HERE, THOUGH IT EXISTS ────────────────────────────────────
//
// Two rows refused for `gender`: `fr.b2.musees.048` « la nature morte » and
// `fr.b2.argot-des-jeunes.029` « tomber ». The second is a single-word row and
// would join a1.03's ending population the moment the merge CARRIED it
// (a2.04's ledger amendment §0). The first is a multi-word phrase and would
// pass, and is refused because it is a B2 card about painting: its respelling
// [lah nah-TÜR MOHRT] is READ OFF for the audible-feminine claim and the row is
// not carried.
//
// And five more, including the brief's own example sentence. See
// READ_NOT_IMPORTED in the corpus file for all seven refusals and their reasons.
//
// ── NINE OF THE TWENTY-TWO ARE ABSENT FROM THE SEED ───────────────────────
//
// Corrections §10. `monter`, `rester`, `tomber`, `retourner`, `passer`,
// `devenir`, `revenir`, `repartir` and `sortir la poubelle` are all missing from
// the cut, and every one of them names something a screen in this lesson draws.
// A lesson whose itemIds resolve to nothing renders empty cards, so the merge
// carries all twenty-two and MEASURES the carry rather than predicting it
// (a2.05 §6, and a2.20 mispredicted its own by four).

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { ALL_REPAIRS, RESPELL_ADDITIONS } from './passe-compose-etre-corpus.ts';
import {
  ETRE_IMPORT_ROWS, STORED_RESPELL, TRANSITIVE_MEASURED, CELL_EVIDENCE, MEASURED,
} from './passe-compose-etre-rows.gen.ts';

/** id -> the value a screen must print: the repaired one, and the stored one
 *  everywhere else. */
const APPLIED: Record<string, string> = {
  ...Object.fromEntries(ALL_REPAIRS.map((r) => [r.id, r.to])),
  ...Object.fromEntries(RESPELL_ADDITIONS.map((r) => [r.id, r.to])),
};

/** The recorded row. Throws rather than returning undefined: a card silently
 *  missing its row looks like a card that never wanted one. */
export function imported(id: string): Item {
  const r = ETRE_IMPORT_ROWS[id];
  if (!r) throw new Error(`a2.21: ${id} is not in the manifest. Re-run scripts/_a221_manifest.ts.`);
  return r;
}

export const importedFr = (id: string): string => imported(id).fr;
export const importedEn = (id: string): string => imported(id).en;
export const importedIpa = (id: string): string => imported(id).ipa ?? '';

/** THE ONLY FUNCTION A SCREEN MAY CALL FOR AN IMPORTED RESPELLING. A screen
 *  reading `imported(id).respell` gets what the database held, which for
 *  `monter` and `tomber` is the value being repaired. */
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

export { ETRE_IMPORT_ROWS, STORED_RESPELL, TRANSITIVE_MEASURED, CELL_EVIDENCE, MEASURED };
