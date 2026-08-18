// The imported half of a2.25.
//
// y-en-rows.gen.ts is a RECORDED READ of Postgres: it holds what the database
// said on the day the manifest was regenerated, byte for byte, and nothing in it
// is edited by hand. This file is the layer between that record and a screen.
//
// ── WHY A LAYER IS NEEDED ──────────────────────────────────────────────────
//
// THE TWELVE IMPORTED SENTENCES MOSTLY CARRY NO RESPELLING. Normal for a
//   published sentence and fatal on a card that prints one. `respell()` THROWS
//   rather than returning undefined, so a card wanting a respelling for a row
//   that has none fails in the batch instead of drawing an empty bracket on a
//   phone.
//
//     respell present   the 7 headwords, the 8 phrases, and 5 of the sentences
//     respell absent    7 sentences
//
// AND THIS BUILD REPAIRS FOUR ROWS IT IMPORTS, which is a2.24's `envoyer` shape
//   for the second time in this block and worse: the corpus systematically
//   breaks the nasal of the pronoun `en`, so THREE of the four respelled rows
//   this lesson reads its own values off are themselves repair targets.
//   `APPLIED` is the map from id to the value a screen must print, DERIVED from
//   RESPELL_REPAIRS rather than retyped, so the repair table and the display
//   layer cannot drift apart.
//
// ── AND THE FIELD THAT IS NOT A RESPELLING AND LOOKS LIKE ONE ──────────────
//
// a2.22 found `fr.a1.cuisine.228` carrying a `notes` field holding a JSON tile
// breakdown rather than a teaching note, and that a screen reading `row.notes`
// for a hint would print raw JSON. `note()` refuses anything that parses as
// JSON. Kept, and this build has the same second reason a2.24 had: several
// imported rows carry notes written in grammar jargon — « En replaces de + a
// noun already mentioned » is the mildest of them — so `note()` is not called by
// the lesson at all, and the jargon walk in all three layers would catch it if
// it were.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import {
  IMPORTED, IMPORTED_PHRASES, IMPORTED_SENTENCES, RESPELL_REPAIRS,
} from './y-en-corpus.ts';
import { Y_EN_IMPORT_ROWS, STORED_RESPELL, SIX_ROW_SET } from './y-en-rows.gen.ts';

/** id -> the value a screen must print, DERIVED from the repair table. A row
 *  this build repairs displays the repaired value everywhere, including before
 *  the batch has run, so the lesson and the database agree by construction. */
const APPLIED: Record<string, string> = Object.fromEntries(
  RESPELL_REPAIRS.map((r) => [r.id, r.to]),
);

const BY_ID = new Map(Y_EN_IMPORT_ROWS.map((r) => [r.id, r]));

export function row(id: string): Item {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.25: imported row ${id} is not in the manifest. Re-run scripts/_a225_manifest.ts.`);
  return r;
}

export const importedFr = (id: string): string => row(id).fr;
export const importedEn = (id: string): string => row(id).en;

/** THROWS rather than returning undefined. A card that wants a respelling for a
 *  row that has none is an authoring error, and the batch is where it should
 *  surface. */
export function respell(id: string): string {
  const applied = APPLIED[id];
  if (applied) return applied;
  const r = row(id);
  if (!r.respell) {
    throw new Error(
      `a2.25: ${id} « ${r.fr} » has no respelling and a card asked for one. `
      + 'Published sentences usually carry none. Use importedFr() or pick a headword.',
    );
  }
  return r.respell;
}

/** Whether a row carries a respelling at all, so a card can choose its shape
 *  rather than crash. Used by the two pair cards whose named half is an imported
 *  sentence: one has a respelling and one does not. */
export const hasRespell = (id: string): boolean => Boolean(APPLIED[id] ?? row(id).respell);

/** A teaching note, refusing anything that parses as JSON. NOT CALLED BY THE
 *  LESSON. */
export function note(id: string): string | undefined {
  const n = row(id).notes;
  if (!n) return undefined;
  const t = n.trim();
  if ((t.startsWith('{') && t.endsWith('}')) || (t.startsWith('[') && t.endsWith(']'))) {
    try { JSON.parse(t); return undefined; } catch { /* real prose that happens to start with a brace */ }
  }
  return n;
}

/** The bracketed form a card prints under the French. */
export const respellCard = (id: string): string => `[${respell(id)}]`;

/** Every id this lesson imports, in one list, for the merge and the guards. */
export const IMPORTED_IDS: readonly string[] = [
  ...IMPORTED.map((i) => i.id),
  ...IMPORTED_PHRASES.map((i) => i.id),
  ...IMPORTED_SENTENCES.map((i) => i.id),
];

/** The rows whose stored respelling this build changes. */
export const REPAIRED_IDS: readonly string[] = RESPELL_REPAIRS.map((r) => r.id);

/** The intersection. a2.24 had ONE row that was both imported and repaired and
 *  called it the case with no precedent in the band. This build has FOUR,
 *  because the corpus breaks the nasal of the pronoun `en` on almost every row
 *  that has one, and three of the four are the rows this lesson reads its own
 *  respellings off. */
export const IMPORTED_AND_REPAIRED: readonly string[] =
  IMPORTED_IDS.filter((id) => REPAIRED_IDS.includes(id));

export { STORED_RESPELL, SIX_ROW_SET };
