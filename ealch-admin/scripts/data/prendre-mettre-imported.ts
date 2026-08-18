// The imported half of a2.15, and the only place a repaired respelling is
// applied.
//
// prendre-mettre-rows.gen.ts is a RECORDED READ of Postgres: it holds what the
// database said on the day the manifest was regenerated, byte for byte, and
// nothing in it is edited by hand. This file is the layer between that record
// and a screen.
//
// ── WHY A LAYER IS NEEDED AT ALL ──────────────────────────────────────────
//
// FIVE OF THE THIRTEEN CARRIED ROWS ARE REPAIRED, and every one of the five is
// the same error: a nasal vowel closed with a plain n in a prendre-family word.
// `repairedRespell()` is the only function any screen may call for an imported
// respelling. A screen reading `row.respell` straight off the manifest would
// print `PRAHNDR` while Postgres held `PRAHⁿDR`, which is precisely the drift
// a2.12 found in its own merge one layer down.
//
// TWO OF THE FIVE ARE VISIBLE TO `hasPlainNasalFor` AND THREE ARE NOT, which is
// why the corpus splits the table. The brief said all four were invisible and
// there are five; see the corpus header, item 1.
//
// ── THE ROW THAT IS CARRIED AND NOT IMPORTED ──────────────────────────────
//
// `fr.a1.transports-quotidiens.041` is repaired and written to the seed and it
// is in NO accessor here. There is no function in this file that could put it on
// a screen, and the batch asserts it is in no itemId. A row this build changes
// in Postgres has to reach the seed with the change on it or the two copies
// disagree; that is all it is doing.
//
// ── THE RULE THIS FILE ENFORCES ───────────────────────────────────────────
//
// EVERY NAMING FORM IN THIS LESSON IS IMPORTED except the three that do not
// exist. `battre`, `combattre` and `remettre` are authored in the corpus, which
// makes a2.15 the first A2 build to author an infinitive; corrections §2
// predicted exactly that and this file is where the split shows.
//
// AND `admettre` IS NOT HERE THOUGH IT EXISTS. fr.b1.verbes.086 holds it,
// respelled, ungendered and published. It is one of the two compounds the exam
// gives cold, and an accessor for it would be an accessor for the one thing this
// lesson must not show.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import {
  CARRIED_IDS, CARRIED_THEMES, EVIDENCE_MEASURED, EVIDENCE_ROW_IDS,
  IMPORTABLE_IDS, IMPORTED_EVIDENCE_ROWS, IMPORTED_NAMING_ROWS,
  NAMING_ROW_IDS, READ_ONLY_ROWS, REPAIR_ONLY_ROWS, SOURCE_THEMES,
} from './prendre-mettre-rows.gen.ts';
import { ALL_REPAIRS, UNSEEN_INFINITIVES, type Repair } from './prendre-mettre-corpus.ts';

/** Every IMPORTABLE row, by id. The repair-only row and the read-only rows are
 *  deliberately NOT in here: nothing that iterates the imports may reach them. */
export const IMPORTED_BY_ID: Map<string, Item> = new Map(
  [...IMPORTED_NAMING_ROWS, ...IMPORTED_EVIDENCE_ROWS].map((r) => [r.id, r]),
);

/** Every row the merge writes into the seed, including the repair-only one. */
export const CARRIED_BY_ID: Map<string, Item> = new Map(
  [...IMPORTED_NAMING_ROWS, ...IMPORTED_EVIDENCE_ROWS, ...REPAIR_ONLY_ROWS].map((r) => [r.id, r]),
);

/** Every id this lesson may put in `itemIds`. */
export const IMPORTED_IDS: string[] = [...IMPORTABLE_IDS];

export { SOURCE_THEMES, CARRIED_THEMES, CARRIED_IDS, READ_ONLY_ROWS, REPAIR_ONLY_ROWS, EVIDENCE_MEASURED };

const must = (id: string): Item => {
  const r = IMPORTED_BY_ID.get(id);
  if (!r) throw new Error(`${unitRef('a2.15')}: ${id} is not an importable row. Regenerate the manifest, or stop quoting it.`);
  return r;
};

/** The French of an imported row. */
export const importedFr = (id: string): string => must(id).fr;
/** Its English gloss. */
export const importedEn = (id: string): string => must(id).en ?? '';

/** THE ONLY FUNCTION A SCREEN MAY CALL FOR AN IMPORTED RESPELLING. */
export function repairedRespell(id: string, repairs: readonly Repair[] = ALL_REPAIRS): string {
  let s = must(id).respell ?? '';
  if (!s) return '';
  for (const r of repairs) if (r.id === id) s = s.split(r.from).join(r.to);
  return s;
}

/** An imported row as a groupDrill item, respelling already repaired.
 *
 *  `note` carries the respelling and the gloss. e584bd8 taught MissionRich to
 *  draw `respell` and `en` on an `lg` card as well, with `note` winning when it
 *  is present, so passing them is no longer the trap a2.13 and a2.14 met. What
 *  still has to hold is that a card puts SOMETHING under the French: a card
 *  carrying none of the four renders as a word and a play button. */
export const importedCard = (id: string) => {
  const r = repairedRespell(id);
  const gloss = importedEn(id);
  return { fr: importedFr(id), itemId: id, note: [r ? `[${r}]` : '', gloss].filter(Boolean).join(' · ') };
};

/* ── The naming forms ───────────────────────────────────────────────────── */

const NAMING_ID = new Map(NAMING_ROW_IDS);

/** The row id for one of the eight imported naming forms. THROWS on a verb this
 *  lesson did not import, which is the guard that keeps the corpus honest: a
 *  screen cannot invent a headword, and in particular it cannot reach for
 *  `admettre` or `reprendre`. */
export const namingId = (word: string): string => {
  const id = NAMING_ID.get(word);
  if (!id) {
    const extra = UNSEEN_INFINITIVES.includes(word)
      ? ` "${word}" is one of the two compounds the exam gives cold and it must appear on no teaching card.`
      : '';
    throw new Error(`${unitRef('a2.15')}: "${word}" is not an imported naming form.${extra}`);
  }
  return id;
};
export const namingCard = (word: string) => importedCard(namingId(word));

/** Every imported naming form, in manifest order. */
export const NAMING_WORDS: string[] = NAMING_ROW_IDS.map(([v]) => v);

/* ── The published evidence ─────────────────────────────────────────────── */

const EV_ID = new Map(EVIDENCE_ROW_IDS);

/** The row id for a published evidence sentence, looked up by its own French so
 *  a caller cannot cite an id that has moved. */
export const evidenceId = (frText: string): string => {
  const id = EV_ID.get(frText);
  if (!id) throw new Error(`${unitRef('a2.15')}: ${JSON.stringify(frText)} is not imported evidence`);
  return id;
};
export const evidenceCard = (frText: string) => importedCard(evidenceId(frText));

/** Every imported evidence sentence, in manifest order: the two prendre-family
 *  rows first, then the two mettre ones. */
export const EVIDENCE_FR: string[] = EVIDENCE_ROW_IDS.map(([v]) => v);
export const EVIDENCE_IDS: string[] = EVIDENCE_ROW_IDS.map(([, id]) => id);
