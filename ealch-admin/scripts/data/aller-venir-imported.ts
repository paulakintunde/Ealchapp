// What a2.02 imports rather than authors, and what it reads without importing.
//
// The rows themselves are in aller-venir-rows.gen.ts, a recorded read of Postgres
// taken by scripts/_a202_manifest.ts. This file is the meaning laid over them.
//
// ── THE SIX ARE ALL IMPORTED, AND SO ARE FOUR SENTENCES ────────────────────
//
// Every verb this lesson teaches already exists in Postgres and not one is
// authored. That is now five builds in a row (a2.01 30, a2.09 17, a2.10 10,
// a2.10.l2 12, a2.11 7) and it should be treated as certain rather than probed
// hopefully.
//
//   aller 2 rows · venir 1 · tenir 1 · revenir 3 · devenir 2 · obtenir 2
//   appartenir 1
//
// The row chosen for each verb is the one with: a home in `verbes-essentiels`
// where one exists, a respelling present, and NO `gender`. That last one is not
// fussiness. A single-word row carrying `gender` joins a1.03's measured ending
// population, and `a1-03-genre.test.ts` re-measures twenty printed figures from
// the seed on every run. The generator refuses to emit a gendered row at all.
//
// `devenir` is the one to watch and the pre-flight flagged it:
// `fr.b2.philosophie.136` is `le devenir`, a NOUN with gender=m. Importing that
// row instead of `fr.sons.verbes-essentiels.083` would have moved a1.03.
//
// `obtenir` comes from `examens-et-diplomes` rather than from a verb theme,
// because the only row in `verbes` is level b1. A row's level is a fact about
// where it was authored, not about who may reference it.
//
// ── THE SEVENTH VERB IS READ AND NOT IMPORTED ─────────────────────────────
//
// The brief's settled block says all seven headwords "are imported, not
// authored". Six are. `appartenir` is read from Postgres and imported by nothing,
// named on no screen, and absent from IMPORTED_ROWS, from IMPORTED_IDS and from
// the lesson's itemIds.
//
// The reason is the brief's own test list, which caps the compounds at three:
// "At most three compounds appear, and the family principle is not taught."
// Three is what the family card carries — revenir, devenir, obtenir — and
// `appartenir` would be a fourth. It is also the weakest of the four as evidence:
// "to belong" is an abstract relation, so a learner reading `il appartient` gets
// no help at all from `il tient la clé`, while `il obtient la clé` is the same
// sentence with two letters added.
//
// a2.10 settled the rule for the band and its wording is worth keeping: context
// is a display string, not a released row. Here it is not even a display string.
//
// ── FOUR SENTENCES ARE IMPORTED, AND THAT IS NEW IN THIS BAND ─────────────
//
// a2.01, a2.09, a2.10, a2.10.l2 and a2.11 all imported zero sentences and
// authored their whole paradigm, because the published corpus has plenty of forms
// and no minimal pairs. That finding holds here too (see the corpus header: five
// of tenir's six cells do not exist at all).
//
// What is different is that TWO NEIGHBOURS ALREADY AUTHORED MINIMAL PAIRS ON
// THIS LESSON'S FRAME WORD and said in their own headers that they chose it so a
// later lesson could hold their pairs beside its own:
//
//   fr.a2.verbes.183 / .186   a2.10.l1   Il finit tôt.  ·  Ils finissent tôt.
//   fr.a2.verbes.463 / .464   a2.10.l2   Il part tôt.   ·  Ils partent tôt.
//
// Authoring twins of those would put four performances on the screen instead of
// four cells, which is the mistake a2.11's corpus header warns about from the
// other direction. So they are imported whole, and this lesson adds the third
// pair on the same frame.
//
// ── THE SEED IS A CUT AND THIS IS WHY THE MERGE CARRIES ROWS ──────────────
//
// `verbes` and `verbes-essentiels` are both outside SEED_CUT.themes: measured
// 2026-08-12, `verbes` holds 494 published rows in Postgres and
// `verbes-essentiels` 535, against a small fraction of each in the seed. a2.11
// found that NEITHER of the two rows its lesson leaned on hardest was in the
// seed. A lesson whose itemIds resolve to nothing renders empty cards on a
// device, so the merge CARRIES all ten.
//
// ── Two levels appear here and that is correct ────────────────────────────
//
// Five of the six verbs live at level `sons` and one at `a2`. A row's level is a
// fact about where it was authored. Doctrine §C's "everything you author is A2"
// binds the twenty-nine rows in aller-venir-corpus.ts, and all twenty-nine are
// `level: 'a2'`.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import {
  IMPORTED_SENTENCE_ROWS,
  IMPORTED_VERB_ROWS,
  READ_ONLY_ROW_IDS,
  READ_ONLY_VERB_ROWS,
  VERB_ROW_IDS,
} from './aller-venir-rows.gen.ts';

export { IMPORTED_SENTENCE_ROWS, IMPORTED_VERB_ROWS, READ_ONLY_VERB_ROWS };

/** One imported verb: the pairing, plus the row it points at. */
export type ImportedVerb = { verb: string; id: string; row: Item };

const ROW_BY_ID = new Map(IMPORTED_VERB_ROWS.map((r) => [r.id, r] as const));

/** The six, in the order the learner meets them. */
export const IMPORTED_VERBS: ImportedVerb[] = VERB_ROW_IDS.map(([verb, id]) => {
  const row = ROW_BY_ID.get(id);
  if (!row) throw new Error(`aller-venir: ${id} is paired with "${verb}" and is not in the generated rows`);
  if (row.fr !== verb) throw new Error(`aller-venir: ${id} holds ${JSON.stringify(row.fr)}, paired with ${JSON.stringify(verb)}`);
  return { verb, id, row };
});

const READ_ONLY_BY_ID = new Map(READ_ONLY_VERB_ROWS.map((r) => [r.id, r] as const));

/** The one this lesson reads and refuses to release. Never carried, never in
 *  itemIds, and named on no screen. */
export const READ_ONLY_VERBS: ImportedVerb[] = READ_ONLY_ROW_IDS.map(([verb, id]) => {
  const row = READ_ONLY_BY_ID.get(id);
  if (!row) throw new Error(`aller-venir: read-only ${id} is paired with "${verb}" and is not in the generated rows`);
  if (row.fr !== verb) throw new Error(`aller-venir: ${id} holds ${JSON.stringify(row.fr)}, paired with ${JSON.stringify(verb)}`);
  return { verb, id, row };
});

/** Every row this lesson carries into the seed without owning it.
 *
 *  THE READ-ONLY ROW IS NOT HERE, and that is the whole point of the split. */
export const IMPORTED_ROWS: Item[] = [...IMPORTED_VERB_ROWS, ...IMPORTED_SENTENCE_ROWS];

/** Every imported id, verbs then sentences. */
export const IMPORTED_IDS: string[] = IMPORTED_ROWS.map((r) => r.id);

/** The four neighbours' sentences, by id, so the cross-lesson screen names them
 *  rather than restating their French. */
export const IMPORTED_SENTENCE_IDS: string[] = IMPORTED_SENTENCE_ROWS.map((r) => r.id);

/** verb -> its imported row. The lesson builds every verb card through this, so
 *  no screen restates a gloss or a respelling. */
export const VERB_BY_NAME: ReadonlyMap<string, ImportedVerb> = new Map(IMPORTED_VERBS.map((v) => [v.verb, v]));

const lookup = (verb: string): ImportedVerb => {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`aller-venir: "${verb}" is not one of the six imported verbs`);
  return v;
};

/** The id carrying one verb. */
export const verbId = (verb: string): string => lookup(verb).id;

/** The English gloss of one verb, from the row rather than retyped. */
export const verbEn = (verb: string): string => lookup(verb).row.en;

/** The respelling STORED for one verb. Unlike a2.11 this build repairs NOTHING,
 *  so the stored value IS the displayed value and there is no second function
 *  standing between them. See RESPELL_REPAIRS in the corpus for why. */
export const verbRespell = (verb: string): string => {
  const r = lookup(verb).row.respell;
  return r ? `[${r}]` : '';
};

/** The same, unbracketed, for a cell that is not notation. */
export const verbRespellBare = (verb: string): string => verbRespell(verb).replace(/^\[|\]$/g, '');

/** One imported sentence's French, read from the recorded row rather than
 *  retyped. The cross-lesson screen prints two neighbours' sentences and a
 *  hand-typed copy would be free to drift from the row the same screen plays. */
const SENTENCE_BY_ID = new Map(IMPORTED_SENTENCE_ROWS.map((r) => [r.id, r] as const));

export const importedFr = (id: string): string => {
  const r = SENTENCE_BY_ID.get(id);
  if (!r) throw new Error(`aller-venir: ${id} is not one of the imported sentences`);
  return r.fr;
};

export const importedRespell = (id: string): string => {
  const r = SENTENCE_BY_ID.get(id);
  if (!r) throw new Error(`aller-venir: ${id} is not one of the imported sentences`);
  return r.respell ?? '';
};

export const importedEn = (id: string): string => {
  const r = SENTENCE_BY_ID.get(id);
  if (!r) throw new Error(`aller-venir: ${id} is not one of the imported sentences`);
  return r.en;
};

/** One verb as a groupDrill item.
 *
 *  `itemId` is what puts the row on a screen rather than merely in `itemIds`:
 *  a1.08 declared 43 itemIds that resolved perfectly and were drawn by nothing,
 *  and `vocabThemes` cards carry no itemId at all, which is why the six are
 *  presented as a groupDrill and not as a vocabulary hub. */
export function verbCard(verb: string): { fr: string; itemId: string; respell: string; en: string } {
  const v = lookup(verb);
  return { fr: v.verb, itemId: v.id, respell: verbRespell(verb), en: v.row.en };
}
