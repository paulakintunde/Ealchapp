// The imported half of a2.18, and the only place a repaired or supplied
// respelling is applied.
//
// prepositions-temps-rows.gen.ts is a RECORDED READ of Postgres: it holds what
// the database said on the day the manifest was regenerated, byte for byte, and
// nothing in it is edited by hand. This file is the layer between that record
// and a screen.
//
// ── WHY A LAYER IS NEEDED AT ALL ──────────────────────────────────────────
//
// SIX OF THE TWELVE CARRIED ROWS DO NOT DISPLAY WHAT POSTGRES HELD WHEN THE
// MANIFEST WAS TAKEN. Five are nasal repairs and one had no respelling at all.
// `displayRespell()` is the only function any screen may call for an imported
// respelling: a screen reading `row.respell` straight off the manifest would
// print `pahn-DAHN` on the hero card of a lesson that spends five missions on
// the word.
//
//   REPAIRS   5  every one read off a published row, all five VISIBLE to the
//                shared checker and all five MINIMAL. No blind row and no
//                house-convention row, which is a first in this band.
//   ADDITIONS 1  fr.a1.prepositions-essentielles.093 « Il pleut pendant la
//                nuit. » is the only published sentence in this lesson's own
//                theme that puts pendant with the PRESENT tense, and it has no
//                respelling. It is supplied rather than the row being dropped.
//
// ── WHAT IS NOT HERE, THOUGH IT EXISTS ────────────────────────────────────
//
// fr.sons.alphabet.414 « Il y a deux s dans mon nom. » is the best "there is"
// card in the corpus and it has no accessor. It respells the three words one
// way and fr.sons.jours-et-mois.081 respells them another; neither is flagged
// and neither breaks a rule, so invariants §9 forbids repairing either, and
// this lesson's whole trap is that those three words have two jobs. Two
// spellings of them inside it would read as marking the two jobs.
//
// Nine published `depuis` sentences with respellings already on them have no
// accessor either, because they spell the glide the other of the two ways the
// corpus uses. See DEPUIS_RESPELL in the corpus file: one spelling per word
// inside one lesson was judged worth more than the sentences, and that is the
// most expensive decision in this build.
//
// ── AND NOT ONE ROW HERE CARRIES A GENDER ─────────────────────────────────
//
// a2.04's ledger amendment §0: a1.03's ending population is measured off THE
// SEED, so a CARRY adds a gendered single-word noun to it even though the row
// already exists in Postgres, and a2.04 v1 moved four of a1.03's printed
// figures that way. The manifest generator REFUSES a gendered row outright and
// the merge measures the population off the seed before and after anyway.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { ALL_REPAIRS, RESPELL_ADDITIONS } from './prepositions-temps-corpus.ts';
import { PREPOSITIONS_TEMPS_ROWS, STORED_RESPELL, MEASURED } from './prepositions-temps-rows.gen.ts';

/** id -> the value a screen must print: the repaired one where this build
 *  repairs the row, the supplied one where it had none, and the stored one
 *  everywhere else. */
const APPLIED: Record<string, string> = {
  ...Object.fromEntries(ALL_REPAIRS.map((r) => [r.id, r.to])),
  ...Object.fromEntries(RESPELL_ADDITIONS.map((r) => [r.id, r.to])),
};

/** The recorded row. Throws rather than returning undefined: a card silently
 *  missing its row looks like a card that never wanted one. */
export function imported(id: string): Item {
  const r = PREPOSITIONS_TEMPS_ROWS[id];
  if (!r) throw new Error(`${unitRef('a2.18')}: ${id} is not in the manifest. Re-run scripts/_a218_manifest.ts.`);
  return r;
}

export const importedFr = (id: string): string => imported(id).fr;
export const importedEn = (id: string): string => imported(id).en;
export const importedIpa = (id: string): string => imported(id).ipa ?? '';

/** THE ONLY FUNCTION A SCREEN MAY CALL FOR AN IMPORTED RESPELLING. A screen
 *  reading `imported(id).respell` gets what the database held, which for six of
 *  these rows is the value this build is replacing or supplying. */
export function displayRespell(id: string): string {
  const r = imported(id);
  return APPLIED[id] ?? r.respell ?? '';
}

/** Bracketed, as the cards print it. */
export const sub = (id: string): string => `[${displayRespell(id)}]`;

/** What Postgres held when the manifest was taken, for a guard that wants to
 *  compare a repair against the READ rather than against a second copy of the
 *  same string. a2.14 §5. An empty string is a row that had none. */
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

export { PREPOSITIONS_TEMPS_ROWS, STORED_RESPELL, MEASURED };
