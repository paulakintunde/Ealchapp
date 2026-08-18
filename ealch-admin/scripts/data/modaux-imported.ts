// The imported half of a2.13, and the one place a repaired respelling is
// applied.
//
// modaux-rows.gen.ts is a RECORDED READ of Postgres: it holds what the database
// said on the day the manifest was regenerated, byte for byte, and nothing in it
// is edited by hand. This file is the layer between that record and a screen.
//
// ── WHY A LAYER IS NEEDED AT ALL ──────────────────────────────────────────
//
// Three things stand between the stored value and the displayed one:
//
//   1. NASAL REPAIRS. Three imported words and three imported sentences respell
//      a nasal vowel with a plain n. This lesson puts them on screens beside its
//      own rows, which DO carry the superscript, and a learner comparing
//      `ah-TAHN-druh` with `ah-TAHⁿ-druh` on one page is being taught that the
//      mark means nothing. `repairedRespell()` is the only function any screen
//      may call for an imported respelling.
//
//   2. RESPELLINGS THAT DO NOT EXIST. Both halves of the register pair carry
//      NO respelling in the database. A card the learner cannot say is not a
//      contrast, so this build supplies one. Those two are the only rows in the
//      lesson whose respelling comes from the build rather than from Postgres,
//      and they are kept in their own accessor so that fact stays visible.
//
//   3. THE UNSEEN VERB, WHICH MUST NEVER REACH A CARD. `arroser` has a row and
//      is deliberately not an import. `unseenRespell()` exists so the one
//      mission that prints it reads the checked value, and there is no accessor
//      that would let it into `itemIds`.
//
// ── THE RULE THIS FILE ENFORCES ───────────────────────────────────────────
//
// EVERY INFINITIVE IN THIS LESSON IS IMPORTED. Not one is authored. The Owns is
// that a modal lets a learner use a verb nobody taught them, and a corpus that
// authored its own infinitives would be quietly contradicting the missions.
// `infinitiveId()` throws on a verb that is not in the manifest, so a screen
// cannot invent one.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
import {
  IMPORTED_INFINITIVE_ROWS, IMPORTED_REGISTER_ROWS, IMPORTED_SENTENCE_ROWS,
  IMPORTED_VERB_ROWS, IMPORTABLE_IDS, INFINITIVE_ROW_IDS, READ_ONLY_ROWS,
  REGISTER_ROW_IDS, SENTENCE_ROW_IDS, SOURCE_THEMES, UNSEEN_VERB_ROW, VERB_ROW_IDS,
} from './modaux-rows.gen.ts';
import {
  RESPELL_ADDITIONS, RESPELL_REPAIRS_SENTENCES, RESPELL_REPAIRS_VISIBLE,
  UNSEEN_VERB, type Modal, type Repair,
} from './modaux-corpus.ts';

/** Every imported row, by id. The read-only rows and the unseen row are
 *  deliberately NOT in here: nothing that iterates the imports may reach them. */
export const IMPORTED_BY_ID: Map<string, Item> = new Map(
  [...IMPORTED_VERB_ROWS, ...IMPORTED_INFINITIVE_ROWS, ...IMPORTED_SENTENCE_ROWS, ...IMPORTED_REGISTER_ROWS]
    .map((r) => [r.id, r]),
);

/** Every id this lesson may put in `itemIds`. */
export const IMPORTED_IDS: string[] = [...IMPORTABLE_IDS];

export { SOURCE_THEMES, READ_ONLY_ROWS, UNSEEN_VERB_ROW };

const must = (id: string): Item => {
  const r = IMPORTED_BY_ID.get(id);
  if (!r) throw new Error(`${unitRef('a2.13')}: ${id} is not an imported row. Regenerate the manifest, or stop quoting it.`);
  return r;
};

/** The French of an imported row. */
export const importedFr = (id: string): string => must(id).fr;
/** Its English gloss. */
export const importedEn = (id: string): string => must(id).en ?? '';

/** THE ONLY FUNCTION A SCREEN MAY CALL FOR AN IMPORTED RESPELLING.
 *
 *  Applies this build's repairs to the stored value. A screen that read
 *  `row.respell` straight off the manifest would print `ah-TAHN-druh` while
 *  Postgres held the repaired form — which is precisely the drift a2.12 found in
 *  its own merge, one layer down.
 *
 *  Returns the empty string for a row that has no respelling and no addition, so
 *  a caller can decide whether to draw the bracket at all. */
export function repairedRespell(id: string, repairs: readonly Repair[] = ALL_REPAIRS): string {
  const added = RESPELL_ADDITIONS.find((a) => a.id === id);
  if (added) return added.to;
  let s = must(id).respell ?? '';
  if (!s) return '';
  for (const r of repairs) if (r.id === id) s = s.split(r.from).join(r.to);
  return s;
}

/** Word repairs and sentence repairs are one list to a caller and two lists in
 *  the corpus, because the second kind is partial: one token inside a long
 *  respelling rather than the whole value. */
export const ALL_REPAIRS: readonly Repair[] = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_SENTENCES];

/** An imported row as a groupDrill item, respelling already repaired.
 *
 *  `note` rather than `respell` + `en`. At `lg` — which every groupDrill in
 *  this lesson is — MissionRich.tsx:439 draws `fr`, `ipa` and `note` and
 *  nothing else, so the other two are dropped in silence. Found on a Pixel 6
 *  after v1 shipped; see the note on `rowCard` in modaux-lesson.ts. */
export const importedCard = (id: string) => {
  const r = repairedRespell(id);
  const en = importedEn(id);
  const note = [r ? `[${r}]` : '', en].filter(Boolean).join(' · ');
  return { fr: importedFr(id), itemId: id, ...(note ? { note } : {}) };
};

/* ── The three naming forms ─────────────────────────────────────────────── */

const VERB_ID = new Map(VERB_ROW_IDS);

/** The row id for one of the three verbs. */
export const verbId = (m: Modal | string): string => {
  const id = VERB_ID.get(String(m));
  if (!id) throw new Error(`${unitRef('a2.13')}: ${m} is not one of the three naming forms`);
  return id;
};

/** A naming form as a card. */
export const verbCard = (m: Modal | string) => importedCard(verbId(m));

/* ── The infinitives ────────────────────────────────────────────────────── */

const INF_ID = new Map(INFINITIVE_ROW_IDS);

/** The row id for an infinitive. THROWS on a verb this lesson did not import,
 *  which is the guard that keeps the corpus honest about its own claim: if a
 *  screen wants a verb, the verb has to have come from somewhere else. */
export const infinitiveId = (verb: string): string => {
  const id = INF_ID.get(verb);
  if (!id) throw new Error(`${unitRef('a2.13')}: "${verb}" is not an imported infinitive. Every infinitive here is imported, never authored.`);
  return id;
};

/** An infinitive as a card. */
export const infinitiveCard = (verb: string) => importedCard(infinitiveId(verb));

/** Every imported infinitive, in manifest order. */
export const INFINITIVES: string[] = INFINITIVE_ROW_IDS.map(([v]) => v);

/* ── The imported sentences and the register pair ───────────────────────── */

const SENT_ID = new Map(SENTENCE_ROW_IDS);

/** The row id for one of the six imported modal frames, looked up by its own
 *  French so a caller cannot cite an id that has moved. */
export const sentenceId = (frText: string): string => {
  const id = SENT_ID.get(frText);
  if (!id) throw new Error(`${unitRef('a2.13')}: ${JSON.stringify(frText)} is not an imported sentence`);
  return id;
};

const REG_ID = new Map(REGISTER_ROW_IDS);

/** The row id for one half of the register pair. */
export const registerId = (frText: string): string => {
  const id = REG_ID.get(frText);
  if (!id) throw new Error(`${unitRef('a2.13')}: ${JSON.stringify(frText)} is not half of the register pair`);
  return id;
};

/** THE TWO ROWS WHOSE RESPELLING THIS BUILD SUPPLIED. Named so that a reader of
 *  any screen can tell which brackets came out of Postgres and which did not. */
export const RESPELL_ADDED_IDS: string[] = RESPELL_ADDITIONS.map((a) => a.id);

/* ── The unseen verb ────────────────────────────────────────────────────── */

/** The respelling the generalisation mission prints, read from the recorded row
 *  and checked against the corpus constant.
 *
 *  THERE IS NO ACCESSOR THAT PUTS `arroser` IN `itemIds`, AND THAT IS THE POINT.
 *  The moment the lesson hands the learner a card for it, the lesson has taught
 *  it, and the claim being tested is that they can use a verb it never taught. */
export function unseenRespell(): string {
  const row = UNSEEN_VERB_ROW[0];
  if (!row || row.fr !== UNSEEN_VERB.fr) {
    throw new Error(`${Cap(unitRef('a2.13'))}: the unseen verb row is missing or is not the verb the corpus names`);
  }
  if (row.respell !== UNSEEN_VERB.respell) {
    throw new Error(`${unitRef('a2.13')}: the unseen verb respelling moved. Postgres says ${JSON.stringify(row.respell)}, the corpus says ${JSON.stringify(UNSEEN_VERB.respell)}.`);
  }
  return UNSEEN_VERB.respell;
}
