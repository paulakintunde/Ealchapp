// The imported half of a2.23.
//
// pronominaux-passe-rows.gen.ts is a RECORDED READ of Postgres: it holds what
// the database said on the day the manifest was regenerated, byte for byte, and
// nothing in it is edited by hand. This file is the layer between that record
// and a screen.
//
// ── WHY A LAYER IS NEEDED AT ALL, WHEN THERE ARE NO REPAIRS ────────────────
//
// This build repairs NOTHING and supplies NOTHING. Every headword it imports
// already holds the house respelling, and the two rows it might have had to
// repair belong to a2.21's `nous sommes` false positive, which this build
// authors rather than imports. So the layer exists for the other reason, which
// a2.21 §5 and a2.22 both met:
//
//   ALL EIGHT IMPORTED SENTENCES CARRY NO RESPELLING. That is normal for a
//   published sentence and it is fatal on a card that prints one. `respell()`
//   below THROWS rather than returning undefined, so a card that wants a
//   respelling for a row that has none fails in the batch instead of drawing an
//   empty bracket on a phone.
//
//   respell present   the twelve headwords
//   respell absent    all eight sentences, without exception
//
// ── AND THE FIELD THAT IS NOT A RESPELLING AND LOOKS LIKE ONE ──────────────
//
// a2.22 found that `fr.a1.cuisine.228` carries a `notes` field holding a JSON
// tile breakdown rather than a teaching note, and that a screen reading
// `row.notes` for a hint would print raw JSON. `note()` below refuses anything
// that parses as JSON, because the next such row is how it would ship. This
// build imports `fr.a1.cuisine.183` from the same theme and the guard is kept
// rather than dropped: the shape is a property of the corpus, not of that row.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { RESPELL_ADDITIONS, IMPORTED } from './pronominaux-passe-corpus.ts';
import { PRONOMINAUX_PASSE_IMPORT_ROWS, STORED_RESPELL } from './pronominaux-passe-rows.gen.ts';

/** id -> the value a screen must print. Empty today, and kept because the shape
 *  is what makes a future repair a one-line change rather than a rewrite. */
const APPLIED: Record<string, string> = {
  ...Object.fromEntries(RESPELL_ADDITIONS.map((r) => [r.id, r.to])),
};

/** The recorded row. Throws rather than returning undefined: a card silently
 *  missing its row looks like a card that never wanted one. */
export function imported(id: string): Item {
  const r = PRONOMINAUX_PASSE_IMPORT_ROWS[id];
  if (!r) {
    throw new Error(
      `${unitRef('a2.23')}: ${id} is not in the recorded read. Add it to IMPORTED in pronominaux-passe-corpus.ts `
      + 'and re-run scripts/_a223_manifest.ts; never hand-edit the .gen file.',
    );
  }
  return r;
}

export const importedFr = (id: string): string => imported(id).fr;
export const importedEn = (id: string): string => imported(id).en;

/** The respelling a screen prints. THROWS when the row has none, which is all
 *  eight of the imported sentences. */
export function respell(id: string): string {
  const applied = APPLIED[id];
  if (applied) return applied;
  const stored = imported(id).respell;
  if (!stored) {
    throw new Error(
      `${unitRef('a2.23')}: ${id} « ${importedFr(id)} » has no respelling in the database, and a screen is asking for one. `
      + 'Either read it off a row that has one, declare a RESPELL_ADDITIONS entry with the reason, '
      + 'or write the card so it does not print a respelling.',
    );
  }
  return stored;
}

export const sub = (id: string): string => `[${respell(id)}]`;

/** True when a screen CAN print a respelling for this row, so a card can decide
 *  rather than throw. Used by the decks that mix headwords and sentences. */
export const hasRespell = (id: string): boolean =>
  Boolean(APPLIED[id] ?? imported(id).respell);

/** A teaching note off an imported row, refusing the JSON-tile payload some rows
 *  carry in the same column. */
export function note(id: string): string | null {
  const n = imported(id).notes;
  if (!n) return null;
  const t = n.trim();
  if (t.startsWith('{') || t.startsWith('[')) return null;
  return n;
}

/** A card built from an imported row, for the decks that show what already
 *  exists. Prints the respelling only when there is one. */
export const rowCard = (id: string): { fr: string; sub: string } => ({
  fr: importedFr(id),
  sub: hasRespell(id) ? `${sub(id)} ${importedEn(id)}` : importedEn(id),
});

/** Every imported row, for the merge's carry. The seed is a CUT and a lesson
 *  whose itemIds resolve to nothing renders empty cards (corrections §10). */
export const IMPORTED_ITEMS: Item[] = IMPORTED.map((i) => imported(i.id));

/** What the recorded read said each respelling was, so the test can assert the
 *  stored values without a database call. */
export { STORED_RESPELL };
