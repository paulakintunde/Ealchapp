// The imported half of a2.16, and the only place a repaired or supplied
// respelling is applied.
//
// beau-nouveau-rows.gen.ts is a RECORDED READ of Postgres: it holds what the
// database said on the day the manifest was regenerated, byte for byte, and
// nothing in it is edited by hand. This file is the layer between that record
// and a screen.
//
// ── WHY A LAYER IS NEEDED AT ALL ──────────────────────────────────────────
//
// FIVE OF THE TWELVE CARRIED ROWS DO NOT DISPLAY WHAT POSTGRES HELD WHEN THE
// MANIFEST WAS TAKEN. Four gain a respelling they never had, and one is
// repaired. `displayRespell()` is the only function any screen may call for an
// imported respelling: a screen reading `row.respell` straight off the manifest
// would print NOTHING for the four third-form sentences, which are the hero
// rows of the whole lesson.
//
//   ADDITIONS  4  C'est un bel arbre / nouvel ami / vieil immeuble / bel homme.
//                 The only published rows in the corpus holding a third form in
//                 a teachable frame, and not one of them could be said aloud.
//   HOUSE      1  `nouvelle` noo-VELL against `belle` BEL and `vieille` VYEY.
//                 Two of the three pairs already agree byte for byte, written
//                 by different authors in different themes. The third did not,
//                 and this lesson prints all six on one grid whose claim is
//                 that each pair is ONE SOUND.
//
// ── WHAT IS NOT HERE, THOUGH IT EXISTS ────────────────────────────────────
//
// `nouvel` has no accessor in this file, because it is the one form the corpus
// does not hold and the corpus file authors it. `beaux`, `belles`, `nouveaux`,
// `nouvelles` and `vieilles` have none either: none of the five exists as a
// headword anywhere, and all five appear only inside the authored predicate
// sentences, which is where a plural belongs.
//
// ── AND NOTHING GENDERED IS CARRIED ───────────────────────────────────────
//
// Zero of the twelve rows has a gender, and that is by construction rather than
// by luck. Every noun this lesson needs — appartement, immeuble, arbre, ami,
// homme, sac — exists as a gendered single-word row, and importing any of them
// would join a1.03's measured ending population and move twenty printed figures
// in a1-03-genre.test.ts. So every noun appears INSIDE a sentence instead, and
// the ones the build read and refused are in READ_NOT_IMPORTED with the reason.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import {
  BLOCK_MEASURED, CARRIED_IDS, EVIDENCE_ROW_IDS, IMPORTABLE_IDS,
  IMPORTED_EVIDENCE_ROWS, IMPORTED_NAMING_ROWS, NAMING_ROW_IDS,
  ONE_SOUND_EVIDENCE, READ_ONLY_ROWS, SOURCE_THEMES,
} from './beau-nouveau-rows.gen.ts';
import {
  ADJ_ORDER, ALL_REPAIRS, RESPELL_ADDITIONS, SILENT_H_ROW, VOWEL_ROW,
  form, type Adj, type Repair,
} from './beau-nouveau-corpus.ts';

/** Every IMPORTABLE row, by id. The read-only rows are deliberately NOT in
 *  here: nothing that iterates the imports may reach them. */
export const IMPORTED_BY_ID: Map<string, Item> = new Map(
  [...IMPORTED_NAMING_ROWS, ...IMPORTED_EVIDENCE_ROWS].map((r) => [r.id, r]),
);

/** Every id this lesson may put in `itemIds`. */
export const IMPORTED_IDS: string[] = [...IMPORTABLE_IDS];

export { SOURCE_THEMES, CARRIED_IDS, READ_ONLY_ROWS, BLOCK_MEASURED, ONE_SOUND_EVIDENCE };

const must = (id: string): Item => {
  const r = IMPORTED_BY_ID.get(id);
  if (!r) throw new Error(`a2.16: ${id} is not an importable row. Regenerate the manifest, or stop quoting it.`);
  return r;
};

export const importedFr = (id: string): string => must(id).fr;
export const importedEn = (id: string): string => must(id).en ?? '';

/** THE ONLY FUNCTION A SCREEN MAY CALL FOR AN IMPORTED RESPELLING.
 *
 *  It applies the repairs AND the supplied respellings, so a screen can never
 *  disagree with what the batch has written into Postgres. a2.14 §5 found two
 *  copies of a respelling one file apart with nothing comparing them; here
 *  there is one function and the batch, the merge and the test all read it. */
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

/** An imported row as a card. `note` carries the respelling and the gloss.
 *
 *  e584bd8 taught MissionRich to draw `respell` and `en` on an `lg` groupDrill
 *  card as well, with `note` winning when it is present, so passing them is no
 *  longer the trap a2.13 and a2.14 both shipped. What still has to hold is that
 *  a card puts SOMETHING under the French, which for four of these rows is only
 *  true because this build supplies it. */
export const importedCard = (id: string) => {
  const r = displayRespell(id);
  const gloss = importedEn(id);
  return { fr: importedFr(id), itemId: id, note: [r ? `[${r}]` : '', gloss].filter(Boolean).join(' · ') };
};

/* ── The eight forms that already existed ───────────────────────────────── */

const NAMING_ID = new Map(NAMING_ROW_IDS);

/** The row id for one of the eight imported forms. THROWS on anything this
 *  lesson did not import, which is the guard that keeps the corpus honest: a
 *  screen cannot invent a form, and in particular it cannot reach for `nouvel`
 *  through this path, because `nouvel` is authored and lives in the corpus. */
export const namingId = (word: string): string => {
  const id = NAMING_ID.get(word);
  if (!id) {
    const extra = word === 'nouvel'
      ? ' `nouvel` is the one form the corpus did not hold. It is AUTHORED: read it from the corpus, not from here.'
      : '';
    throw new Error(`a2.16: no imported row for "${word}".${extra}`);
  }
  return id;
};
export const namingCard = (word: string) => importedCard(namingId(word));
export const namingRespell = (word: string) => displayRespell(namingId(word));
export const NAMING_WORDS: string[] = NAMING_ROW_IDS.map(([v]) => v);

/* ── The four third-form sentences ──────────────────────────────────────── */

const EVIDENCE_ID = new Map(EVIDENCE_ROW_IDS);

export const evidenceId = (frText: string): string => {
  const id = EVIDENCE_ID.get(frText);
  if (!id) throw new Error(`a2.16: no evidence row for ${JSON.stringify(frText)}`);
  return id;
};
export const evidenceCard = (frText: string) => importedCard(evidenceId(frText));
export const EVIDENCE_FR: string[] = EVIDENCE_ROW_IDS.map(([v]) => v);
export const EVIDENCE_IDS: string[] = EVIDENCE_ROW_IDS.map(([, id]) => id);

/** The third-form cell of the grid, for one adjective. This is the accessor the
 *  grid, the contrast act, the decks and the exam all reach the second column
 *  through, so no screen can print a third form that is not the row the learner
 *  is scored on. It resolves to an IMPORTED row for all three, which is the
 *  corrections §3 counterexample in one line of code. */
export const vowelRowId = (adj: Adj): string => VOWEL_ROW[adj];
export const vowelFr = (adj: Adj): string => importedFr(vowelRowId(adj));
export const vowelRespell = (adj: Adj): string => displayRespell(vowelRowId(adj));

/** The silent-h row and the row it is paired with on screen. Same adjective,
 *  same frame, one noun starting with a vowel LETTER and one with a silent h. */
export const silentHId = SILENT_H_ROW;
export const silentHPartnerId = VOWEL_ROW.beau;

/** The order the grid prints the third-form cells in, checked against the
 *  adjective order rather than restated. */
export const VOWEL_IDS: string[] = ADJ_ORDER.map((a) => VOWEL_ROW[a]);

/** Proof that the accessor and the GRID constant agree about what the third
 *  form of each adjective IS. a2.13 §6.2 shipped a grid rendered from its own
 *  table that disagreed with the cards the learner was scored on; here the two
 *  copies are compared at import time and the module refuses to load if they
 *  have drifted. */
for (const a of ADJ_ORDER) {
  const inSentence = importedFr(VOWEL_ROW[a]);
  const onGrid = form(a, 'vowel');
  const re = new RegExp(`(?<![\\p{L}\\p{N}'’-])${onGrid}(?![\\p{L}\\p{N}'’-])`, 'u');
  if (!re.test(inSentence)) {
    throw new Error(
      `a2.16: the grid says the form before a vowel for "${a}" is "${onGrid}", and the row it resolves to is ${JSON.stringify(inSentence)}. One of the two has moved.`,
    );
  }
}
