// The imported half of a2.05, and the only place a supplied or repaired
// respelling is applied.
//
// passe-compose-rows.gen.ts is a RECORDED READ of Postgres: it holds what the
// database said on the day the manifest was regenerated, byte for byte, and
// nothing in it is edited by hand. This file is the layer between that record
// and a screen.
//
// ── WHY A LAYER IS NEEDED AT ALL ──────────────────────────────────────────
//
// FOUR OF THE TWENTY-THREE CARRIED ROWS HAVE NO RESPELLING IN POSTGRES AT ALL,
// and they are four of the ninety published negatives this lesson's evidence
// rests on. `displayRespell()` is the only function any screen may call for an
// imported respelling: a screen reading `row.respell` straight off the manifest
// would print an empty bracket on four cards a learner is being asked to say.
//
//   REPAIRS   1  fr.sons.jours-et-mois.027 « avant-hier », [ah-vahn-TYEHR] to
//                [ah-vahⁿ-TYEHR]. VISIBLE: a hyphen follows the n, so a2.18 §1's
//                rule says the checker can see it, and it does.
//   ADDITIONS 4  fr.a2.negation-et-restriction.113, .114, .117 and .142, none of
//                which has ever had a respelling, and all four of which carry
//                `dictation` as their ONLY drill. Every syllable was read off a
//                published row and the manifest generator re-checks that the
//                row it was read off still has one.
//
// ── THE ONE ROW THAT NEEDED NEITHER ───────────────────────────────────────
//
// fr.sons.masterclass.021 « Il n'a pas mangé. » is the `il` row of this
// lesson's own paradigm and it arrived already correct: [eel na pa mahⁿ-ZHAY],
// clean under the nasal checker, twelve letters, and already carrying a
// dictation drill. It is the one respelled passé-composé negative in the
// database and it happens to be in this lesson's frame verb.
//
// ── WHAT IS NOT HERE, THOUGH IT EXISTS ────────────────────────────────────
//
// fr.sons.jours-et-mois.036 « la semaine dernière », because it carries
// gender=f and a CARRY is what puts a row into a1.03's ending population
// (a2.04 ledger §0). Its VALUE is read off for two respellings, which does not
// carry it. fr.sons.masterclass.020 « Il n'a pas encore mangé. » carries U+203F
// and is refused outright. See READ_NOT_IMPORTED in the corpus file for all
// seven refusals and their reasons.
//
// ── FIVE OF THE TWENTY-THREE ARE ABSENT FROM THE SEED ─────────────────────
//
// Corrections §10. Four are the published negatives and the fifth is
// masterclass.021, which is a row of the paradigm. A lesson whose itemIds
// resolve to nothing renders empty cards, so the merge carries all twenty-three.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { ALL_REPAIRS, RESPELL_ADDITIONS } from './passe-compose-corpus.ts';
import { PASSE_COMPOSE_ROWS, STORED_RESPELL, MEASURED } from './passe-compose-rows.gen.ts';

/** id -> the value a screen must print: the repaired one, the supplied one, and
 *  the stored one everywhere else. */
const APPLIED: Record<string, string> = {
  ...Object.fromEntries(ALL_REPAIRS.map((r) => [r.id, r.to])),
  ...Object.fromEntries(RESPELL_ADDITIONS.map((r) => [r.id, r.to])),
};

/** The recorded row. Throws rather than returning undefined: a card silently
 *  missing its row looks like a card that never wanted one. */
export function imported(id: string): Item {
  const r = PASSE_COMPOSE_ROWS[id];
  if (!r) throw new Error(`${unitRef('a2.05')}: ${id} is not in the manifest. Re-run scripts/_a205_manifest.ts.`);
  return r;
}

export const importedFr = (id: string): string => imported(id).fr;
export const importedEn = (id: string): string => imported(id).en;
export const importedIpa = (id: string): string => imported(id).ipa ?? '';

/** THE ONLY FUNCTION A SCREEN MAY CALL FOR AN IMPORTED RESPELLING. A screen
 *  reading `imported(id).respell` gets what the database held, which for four of
 *  these rows is nothing at all and for one is the value being repaired. */
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

export { PASSE_COMPOSE_ROWS, STORED_RESPELL, MEASURED };
