// The imported half of a2.24.
//
// pronoms-indirect-rows.gen.ts is a RECORDED READ of Postgres: it holds what the
// database said on the day the manifest was regenerated, byte for byte, and
// nothing in it is edited by hand. This file is the layer between that record
// and a screen.
//
// ── WHY A LAYER IS NEEDED, AND THE NEW REASON THIS BUILD ADDS ──────────────
//
// THE SIX IMPORTED SENTENCES CARRY NO RESPELLING. Normal for a published
//   sentence and fatal on a card that prints one. `respell()` THROWS rather than
//   returning undefined, so a card wanting a respelling for a row that has none
//   fails in the batch instead of drawing an empty bracket on a phone.
//
//     respell present   the ten headwords and the two pronoun phrases
//     respell absent    all six sentences, without exception
//
// AND THE NEW ONE: THIS BUILD REPAIRS A ROW IT IMPORTS. `envoyer` has four
//   published rows and every one of them is flagged, so there is no correct row
//   to prefer and the import IS the repair target. a2.06's rule was « import the
//   correct one, repair the five that are wrong »; that rule has no answer here.
//   `APPLIED` is the map from id to the value a screen must print, DERIVED from
//   RESPELL_REPAIRS rather than retyped, so the repair table and the display
//   layer cannot drift apart — which matters more when one of the fifteen repair
//   targets is also one of the eighteen imports.
//
// ── AND THE FIELD THAT IS NOT A RESPELLING AND LOOKS LIKE ONE ──────────────
//
// a2.22 found `fr.a1.cuisine.228` carrying a `notes` field holding a JSON tile
// breakdown rather than a teaching note, and that a screen reading `row.notes`
// for a hint would print raw JSON. `note()` refuses anything that parses as
// JSON. Kept, and this build has a second reason to be careful with `notes`:
// several of its imported rows carry notes written in GRAMMAR JARGON — « The
// indirect object pronoun 'leur' never takes an s » — so a card that surfaced
// them would put the exact phrase this lesson refuses onto a learner surface.
// `note()` is therefore not called by the lesson at all, and the jargon walk in
// all three layers would catch it if it were.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import {
  IMPORTED, IMPORTED_PHRASES, IMPORTED_SENTENCES, RESPELL_REPAIRS,
} from './pronoms-indirect-corpus.ts';
import { PRONOMS_INDIRECT_IMPORT_ROWS, STORED_RESPELL } from './pronoms-indirect-rows.gen.ts';

/** id -> the value a screen must print, DERIVED from the repair table. A row
 *  this build repairs displays the repaired value everywhere, including before
 *  the batch has run, so the lesson and the database agree by construction. */
const APPLIED: Record<string, string> = Object.fromEntries(
  RESPELL_REPAIRS.map((r) => [r.id, r.to]),
);

const BY_ID = new Map(PRONOMS_INDIRECT_IMPORT_ROWS.map((r) => [r.id, r]));

export function row(id: string): Item {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.24: imported row ${id} is not in the manifest. Re-run scripts/_a224_manifest.ts.`);
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
      `a2.24: ${id} « ${r.fr} » has no respelling and a card asked for one. `
      + 'Published sentences usually carry none. Use importedFr() or pick a headword.',
    );
  }
  return r.respell;
}

/** A teaching note, refusing anything that parses as JSON. NOT CALLED BY THE
 *  LESSON: several imported rows carry notes written in the grammar jargon this
 *  build keeps off every learner surface. Kept because the shape is a property
 *  of the corpus rather than of one row. */
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

/** The rows whose stored respelling this build changes. Exported so the merge
 *  can carry the REPAIRED value rather than the recorded one, and so the test
 *  can assert the two agree. */
export const REPAIRED_IDS: readonly string[] = RESPELL_REPAIRS.map((r) => r.id);

/** The intersection that has no precedent in this band: a row that is BOTH
 *  imported and repaired. Named so the merge and the test can assert it lands
 *  with the repaired value rather than the recorded one. */
export const IMPORTED_AND_REPAIRED: readonly string[] =
  IMPORTED_IDS.filter((id) => REPAIRED_IDS.includes(id));

/** What the database held before the repair, for the guard that asserts the
 *  repair table has not drifted from the recorded read. */
export { STORED_RESPELL };
