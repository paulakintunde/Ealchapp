// The imported half of a2.17, and the only place a repaired respelling is
// applied.
//
// adverbes-rows.gen.ts is a RECORDED READ of Postgres: it holds what the
// database said on the day the manifest was regenerated, byte for byte, and
// nothing in it is edited by hand. This file is the layer between that record
// and a screen.
//
// ── WHY A LAYER IS NEEDED AT ALL ──────────────────────────────────────────
//
// TEN OF THE TWENTY-EIGHT CARRIED ROWS DO NOT DISPLAY WHAT POSTGRES HELD WHEN
// THE MANIFEST WAS TAKEN. All ten are nasal repairs and `displayRespell()` is
// the only function any screen may call for an imported respelling: a screen
// reading `row.respell` straight off the manifest would print `lahnt-MAHN` on
// the hero row of a lesson whose subject is that word.
//
//   REPAIRS  10  every one of them read off a published row rather than chosen,
//                and TWO of them carry a second nasal the checker cannot see
//   ADDITIONS 0  every imported row already carries a respelling. That is a
//                first in this band: a2.16 supplied four and a2.03 supplied
//                several. Asserted empty rather than omitted.
//
// ── WHAT IS NOT HERE, THOUGH IT EXISTS ────────────────────────────────────
//
// `lente` and `douce` have no accessor in this file, because they are the two
// forms the corpus does not hold and the corpus file authors them. So do
// `évident` and `constant`. `parfaitement` and `certainement` have none either,
// and that absence is load-bearing: they are the answers to the two
// generalisation questions and importing either would delete its question.
//
// ── AND NOTHING GENDERED IS CARRIED ───────────────────────────────────────
//
// Zero of the twenty-eight rows has a gender, and here that is easy rather than
// hard: an adjective and an adverb are not nouns. The one gendered row this
// lesson's subject matter would have wanted is `le mieux`
// (fr.sons.voyelles.174), and it is refused twice over — for the gender and
// because the comparative is a2.08's.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import {
  BLOCK_MEASURED, CARRIED_IDS, EVIDENCE_ROW_IDS, IMPORTABLE_IDS,
  IMPORTED_EVIDENCE_ROWS, IMPORTED_NAMING_ROWS, NAMING_ROW_IDS,
  READ_ONLY_ROWS, SOURCE_THEMES, TWO_WAYS_EVIDENCE,
} from './adverbes-rows.gen.ts';
import {
  ADJ_ORDER, ALL_REPAIRS, CHAIN_ROW, RESPELL_ADDITIONS, UNSEEN,
  has, step, stepRespell, type Adj, type Repair, type Step,
} from './adverbes-corpus.ts';

/** Every IMPORTABLE row, by id. The read-only rows are deliberately NOT in
 *  here: nothing that iterates the imports may reach them. */
export const IMPORTED_BY_ID: Map<string, Item> = new Map(
  [...IMPORTED_NAMING_ROWS, ...IMPORTED_EVIDENCE_ROWS].map((r) => [r.id, r]),
);

/** Every id this lesson may put in `itemIds`. */
export const IMPORTED_IDS: string[] = [...IMPORTABLE_IDS];

export { SOURCE_THEMES, CARRIED_IDS, READ_ONLY_ROWS, BLOCK_MEASURED, TWO_WAYS_EVIDENCE };

const must = (id: string): Item => {
  const r = IMPORTED_BY_ID.get(id);
  if (!r) {
    const unseen = UNSEEN.find((u) => u.adverb === id || u.adj === id);
    const extra = unseen
      ? ` ${JSON.stringify(id)} is one of the UNSEEN words: it exists in the corpus and this lesson must never import it, because it is the answer to a generalisation question.`
      : '';
    throw new Error(`${unitRef('a2.17')}: ${id} is not an importable row. Regenerate the manifest, or stop quoting it.${extra}`);
  }
  return r;
};

export const importedFr = (id: string): string => must(id).fr;
export const importedEn = (id: string): string => must(id).en ?? '';

/** THE ONLY FUNCTION A SCREEN MAY CALL FOR AN IMPORTED RESPELLING.
 *
 *  It applies the repairs, so a screen can never disagree with what the batch
 *  has written into Postgres. a2.14 §5 found two copies of a respelling one file
 *  apart with nothing comparing them; here there is one function and the batch,
 *  the merge and the test all read it. */
export function displayRespell(id: string, repairs: readonly Repair[] = ALL_REPAIRS): string {
  let s = must(id).respell ?? '';
  if (!s) {
    const add = RESPELL_ADDITIONS.find((a) => a.id === id);
    if (add) return add.to;
    return '';
  }
  for (const r of repairs) if (r.id === id) s = s.split(r.from).join(r.to);
  return s;
}

/** THE HALF-REPAIRED VALUE: what you get by repairing exactly what
 *  `hasPlainNasalFor` reports and nothing else.
 *
 *  It is not used by any screen. It exists so the guards can assert the thing
 *  corrections §6 describes and nothing measures: that for two of these ten rows
 *  the half-repaired value is DIFFERENT from the correct one and the checker
 *  calls it clean. A build that trusted the checker would ship it. */
export function halfRepaired(id: string): string {
  const r = ALL_REPAIRS.find((x) => x.id === id);
  const stored = must(id).respell ?? '';
  return r ? stored.split(r.from).join(r.half) : stored;
}

/** An imported row as a card. `note` carries the respelling and the gloss. */
export const importedCard = (id: string) => {
  const r = displayRespell(id);
  const gloss = importedEn(id);
  return { fr: importedFr(id), itemId: id, note: [r ? `[${r}]` : '', gloss].filter(Boolean).join(' · ') };
};

/* ── The twenty imported headwords ──────────────────────────────────────── */

const NAMING_ID = new Map(NAMING_ROW_IDS);

/** The row id for one of the twenty imported headwords. THROWS on anything this
 *  lesson did not import, which is the guard that keeps the corpus honest: a
 *  screen cannot invent a form, and in particular it cannot reach for `lente`,
 *  `douce`, `évident` or `constant` through this path, because all four are
 *  authored and live in the corpus. */
export const namingId = (word: string): string => {
  const id = NAMING_ID.get(word);
  if (!id) {
    const authored = ['lente', 'douce', 'évident', 'constant'].includes(word)
      ? ` ${JSON.stringify(word)} is one of the four adjectives the corpus does not hold. It is AUTHORED: read it from the corpus, not from here.`
      : '';
    const unseen = UNSEEN.some((u) => u.adj === word || u.fem === word || u.adverb === word)
      ? ` ${JSON.stringify(word)} is one of the UNSEEN words. It must appear on no screen except the exam question that asks for it.`
      : '';
    throw new Error(`${unitRef('a2.17')}: no imported row for "${word}".${authored}${unseen}`);
  }
  return id;
};
export const namingCard = (word: string) => importedCard(namingId(word));
export const namingRespell = (word: string) => displayRespell(namingId(word));
export const NAMING_WORDS: string[] = NAMING_ROW_IDS.map(([v]) => v);

/* ── The eight imported sentences ───────────────────────────────────────── */

const EVIDENCE_ID = new Map(EVIDENCE_ROW_IDS);

export const evidenceId = (frText: string): string => {
  const id = EVIDENCE_ID.get(frText);
  if (!id) throw new Error(`${unitRef('a2.17')}: no evidence row for ${JSON.stringify(frText)}`);
  return id;
};
export const evidenceCard = (frText: string) => importedCard(evidenceId(frText));
export const EVIDENCE_FR: string[] = EVIDENCE_ROW_IDS.map(([v]) => v);
export const EVIDENCE_IDS: string[] = EVIDENCE_ROW_IDS.map(([, id]) => id);

/* ── The chain, resolved ────────────────────────────────────────────────── */

/** The id behind one cell of the hero table. Two of the nine cells are AUTHORED
 *  (`lente`, `douce`) and the corpus holds them; the other seven resolve here.
 *  This is the accessor the hero, the listening screen, the decks and the exam
 *  all reach the chain through, so no screen can print a cell that is not the
 *  row the learner is scored on. */
export const chainId = (a: Adj, s: Step): string => CHAIN_ROW[a][s];
export const chainIsAuthored = (a: Adj, s: Step): boolean => has(CHAIN_ROW[a][s]);
/** The respelling of one cell, whichever half of the corpus it lives in. */
export const chainRespell = (a: Adj, s: Step): string =>
  (chainIsAuthored(a, s) ? stepRespell(a, s) : displayRespell(chainId(a, s)));

/** Proof that the accessor and the CHAIN constant agree about what each cell IS.
 *  a2.13 §6.2 shipped a grid rendered from its own table that disagreed with the
 *  cards the learner was scored on; here the two copies are compared at import
 *  time and the module refuses to load if they have drifted.
 *
 *  For the imported cells the check runs on the WORD, and for `sérieux` on all
 *  three, which is the a2.03 payoff proved rather than asserted. */
for (const a of ADJ_ORDER) {
  for (const s of ['masc', 'fem', 'adverb'] as const) {
    if (chainIsAuthored(a, s)) continue;
    const row = IMPORTED_BY_ID.get(chainId(a, s));
    if (!row) throw new Error(`${unitRef('a2.17')}: the chain cell ${a}/${s} resolves to ${chainId(a, s)}, which is not an importable row`);
    if (row.fr !== step(a, s)) {
      throw new Error(
        `${unitRef('a2.17')}: the chain says ${a}/${s} is "${step(a, s)}" and ${chainId(a, s)} holds ${JSON.stringify(row.fr)}. One of the two has moved.`,
      );
    }
    if (chainRespell(a, s) !== stepRespell(a, s)) {
      throw new Error(
        `${unitRef('a2.17')}: the chain says ${a}/${s} respells as ${JSON.stringify(stepRespell(a, s))} and the repaired row gives ${JSON.stringify(chainRespell(a, s))}.`,
      );
    }
  }
}

/** The three placement rows whose respellings are the reason the ten repairs are
 *  a bringing-into-line rather than an invention. Re-derived off the manifest so
 *  a comment cannot go stale. */
export const twoWays = () => TWO_WAYS_EVIDENCE;
