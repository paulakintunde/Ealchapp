// The a1.23 corpus: what this lesson SERVES, what it authors, and the thirty-seven
// shipped respellings it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the sixty food words, the two
// article columns, the authored sentences and every transcription a1.23 puts on
// a screen. The lesson body (nourriture-lesson.ts) reads `fr`, `ipa`, `respell`
// and `en` FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE PROBE RAN. THE BRIEF'S CENTRAL PREMISE IS CORRECT AND ITS SCALE WAS
//  UNDERSTATED: 57 OF 62 FOOD WORDS ALREADY EXIST, ARTICLED AND PUBLISHED.
// ══════════════════════════════════════════════════════════════════════════
//
// Measured 2026-08-07 with `pnpm corpus:probe`, `scripts/_nourriture_manifest.ts`
// (every candidate enumerated against Postgres, not sampled),
// `scripts/_nourriture_dump.ts` and `scripts/_nourriture_genre_impact.ts`.
//
//   1. The brief says "44 food headwords in one theme". The real number across
//      the four themes that hold food is FIFTY-SEVEN, and the brief's own list
//      was short by `le poulet` (.015), `le porc` (.124), `la saucisse` (.128),
//      `le raisin` (.048), `le melon` (.072), `l'ail` (.101), `la pomme de
//      terre` (.032), `le fruit`, `le vin`, `la bière`, `les frites` and
//      `l'œuf`. Authoring any of them would have failed
//      flashhub-coverage.test.ts, which treats two rows sharing an `fr` in one
//      theme as one card served twice.
//
//   2. THE PROBE ITSELF REPORTS FALSE ABSENCES ON ACCENTED WORDS. It matches
//      the stored `fr` literally and does not normalise accents or the œ
//      ligature. The first run of this build was told, in the probe's own
//      words, "ABSENT in every article form. Safe to author" for:
//
//          biere  cafe  the  gateau  creme  boeuf  pates  oeuf  legume
//
//      Every one exists; `café` has twenty rows. Probing `bœuf` and `œuf` with
//      the ligature finds them immediately. This is invariant §0's third trap
//      wearing a new coat, and on a food lesson accented words are most of the
//      list. Always probe with the real orthography.
//
//   3. The brief's UNVERIFIED list asked whether the corpus models the
//      aimer/manger contrast. IT DOES, RICHLY: 20 like-verb sentences and 66
//      eat-or-drink sentences in the seed alone. The lesson therefore authors
//      almost no sentences and SERVES the corpus's own, which is the whole
//      point of the contrast being real rather than invented for a lesson.
//
//      The pair the lesson is built on was already published, by two different
//      authors, in two different themes, on the same noun:
//
//          fr.a1.cafe.149     « J'aime le café. »
//          fr.a1.cuisine.268  « Je bois du café. »
//
//   4. `nourriture`, the theme the unit declares, is EMPTY IN BOTH COPIES
//      (0 in Postgres, 0 in the seed) and is also declared by a2.07. Per
//      invariant §0 a theme empty in Postgres is dead and is dropped or
//      replaced, not populated. This lesson rebinds a1.23 to
//      ["cuisine", "marche"]. See THEME_DECISION below.
//
//   5. a1.03's ending population was measured through the REAL
//      `endingPopulation`, not a copy. a1.03 prints 27 endings and NONE of them
//      is -a, -t, -it or -uit, so the three authored rows move nothing it
//      states. `les céréales` is plural-only and excluded from the population
//      by construction. Figures in AUTHORED below.
//
// ── Why the import list is eight rows and not forty ────────────────────────
//
// a1.22 had to carry forty rows because `pays-et-nationalites` sits OUTSIDE
// SEED_CUT.themes. This lesson's two themes are INSIDE it (`cuisine` 425/425,
// `marche` 343/343), so almost everything it serves is already in the binary.
// Only the eight rows below are outside and have to be carried:
//
//     7 from `au-restaurant`  (346 published, 10 in the seed)
//     1 from `mots-essentiels`
//
// See nourriture-imported.ts.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { IMPORTED as IMPORTED_ROWS, REUSED as REUSED_ROWS } from './nourriture-imported.ts';

/* ─── The theme decision ───────────────────────────────────────────────────
 *
 * `a1.23` ships declaring `themes: ["nourriture"]`, which holds 0 rows in
 * Postgres and 0 in the seed. Three options were measured and one is right.
 *
 *   POPULATE `nourriture`      REJECTED. It would build a 60-row theme beside a
 *                              271-row theme holding the same words, and
 *                              `a2.07 "At the Restaurant"` also declares
 *                              `nourriture`, so the rows would surface in an A2
 *                              unit's vocabulary hub as well.
 *
 *   BIND TO `cuisine` ALONE    REJECTED. It works, but it leaves `marche` (343
 *                              published rows, all in the seed) declared by NO
 *                              UNIT AT ALL, which is how it is today.
 *
 *   BIND TO cuisine + marche   CHOSEN. Both are inside SEED_CUT.themes, both
 *                              are already populated, and the rebinding
 *                              surfaces marche's 343 rows in the Den for the
 *                              first time. `cuisine` is also declared by a1.29,
 *                              which is deliberate: a learner who finishes
 *                              partitives finds the food deck waiting.
 *
 * What it means downstream, reported rather than silently absorbed:
 *
 *   a2.07  declares ["nourriture", "cafe"] and is left with one live theme and
 *          one dead one. NOT this lesson's to fix, and named so the next author
 *          does not read it as damage from here.
 *   a1.30  gates on a1.23 and is unblocked by this lesson existing.            */
export const THEME_DECISION = {
  was: ['nourriture'],
  now: ['cuisine', 'marche'],
  why: 'nourriture holds 0 rows in Postgres and 0 in the seed; cuisine and marche are populated and inside the seed cut',
  leavesDeadFor: 'a2.07',
} as const;

export const UNIT_THEMES: string[] = [...THEME_DECISION.now];

/* ─── Display ──────────────────────────────────────────────────────────────
 *
 * One shape for everything the learner reads, so a card and a quiz option and a
 * drill cannot disagree about how a word is spelled or said.                  */

export type Display = { fr: string; ipa: string; respell: string; en: string };

/** A food word as this lesson serves it. */
export type Food = {
  /** The published row this lesson SERVES. Nothing here is re-authored. */
  id: string;
  /** The bare noun, for grouping and for the gender rules. */
  bare: string;
  /** As stored, WITH its article. This is the headword shape the lesson teaches. */
  fr: string;
  en: string;
  /** 'm' | 'f'. Plural-only rows carry the gender of their singular. */
  gender: 'm' | 'f';
  /** The transcription AFTER this lesson's repairs. Never the stored value when
   *  the stored value is one of the nineteen being repaired. */
  respell: string;
  /** Which of the six shelves the word sits on. */
  shelf: Shelf;
  /** True when the article is `l'` and therefore hides the gender. */
  elided?: boolean;
  /** True when the word has no singular in ordinary use. */
  pluralOnly?: boolean;
  /** Authored by this lesson rather than served. Three of sixty. */
  authored?: boolean;
};

/** The six shelves. Sixty cards in one deck is a scroll; ten cards in six named
 *  decks is a lesson, and the learner can see how much is left. */
export type Shelf = 'boulangerie' | 'laitier' | 'viande' | 'fruits' | 'legumes' | 'boissons' | 'placard';

export const SHELF_LABEL: Record<Shelf, { en: string; fr: string }> = {
  boulangerie: { en: 'Bread and cake', fr: 'La boulangerie' },
  laitier: { en: 'Milk, eggs and cheese', fr: 'Les produits laitiers' },
  viande: { en: 'Meat and fish', fr: 'La viande et le poisson' },
  fruits: { en: 'Fruit', fr: 'Les fruits' },
  legumes: { en: 'Vegetables', fr: 'Les légumes' },
  boissons: { en: 'Drinks', fr: 'Les boissons' },
  placard: { en: 'The cupboard', fr: 'Le placard' },
};

/** Every id in one place so the lesson, the batch, the merge and the test all
 *  read the same list rather than four drifting copies. */
const C = (n: string) => `fr.a1.cuisine.${n}`;
const M = (n: string) => `fr.a1.marche.${n}`;
const R = (n: string) => `fr.a1.au-restaurant.${n}`;

/* ─── THE SIXTY ────────────────────────────────────────────────────────────
 *
 * 56 SERVED from published rows, 4 AUTHORED. Every `respell` below is the value
 * the card will show AFTER the repairs in RESPELL_REPAIRS land, so this table
 * and the database agree once the batch has run and not before.
 *
 * The headword shape is DEFINITE (`le` / `la` / `l'` / `les`) throughout, which
 * is what 146 of cuisine's 162 gendered word rows already use and what act 3
 * needs on a card. Where cuisine only had an indefinite row, the `marche` twin
 * was served instead: `la pomme` (M.045) rather than `une pomme` (C.003),
 * `la banane` (M.047) rather than `une banane` (C.021), `l'orange` (M.048)
 * rather than `une orange` (C.022). Those three cuisine rows are a1.11's and
 * a1.29's and are left exactly as they are.                                   */

export const FOODS: Food[] = [
  // ── boulangerie (5) ──
  { id: C('002'), bare: 'pain', fr: 'le pain', en: 'bread', gender: 'm', respell: 'luh PAⁿ', shelf: 'boulangerie' },
  { id: C('115'), bare: 'baguette', fr: 'la baguette', en: 'baguette', gender: 'f', respell: 'lah bah-GEHT', shelf: 'boulangerie' },
  { id: C('114'), bare: 'croissant', fr: 'le croissant', en: 'croissant', gender: 'm', respell: 'luh krwah-SAHⁿ', shelf: 'boulangerie' },
  { id: C('062'), bare: 'gâteau', fr: 'le gâteau', en: 'cake', gender: 'm', respell: 'luh gah-TOH', shelf: 'boulangerie' },
  { id: C('274'), bare: 'biscuit', fr: 'le biscuit', en: 'biscuit', gender: 'm', respell: 'luh bees-KWEE', shelf: 'boulangerie', authored: true },

  // ── laitier (6) ──
  { id: C('011'), bare: 'fromage', fr: 'le fromage', en: 'cheese', gender: 'm', respell: 'luh froh-MAHZH', shelf: 'laitier' },
  { id: C('012'), bare: 'beurre', fr: 'le beurre', en: 'butter', gender: 'm', respell: 'luh BUHR', shelf: 'laitier' },
  { id: C('056'), bare: 'lait', fr: 'le lait', en: 'milk', gender: 'm', respell: 'luh LEH', shelf: 'laitier' },
  { id: C('055'), bare: 'crème', fr: 'la crème', en: 'cream', gender: 'f', respell: 'lah KREHM', shelf: 'laitier' },
  { id: C('054'), bare: 'yaourt', fr: 'le yaourt', en: 'yogurt', gender: 'm', respell: 'luh yah-OORT', shelf: 'laitier' },
  { id: R('088'), bare: 'œuf', fr: "l'œuf", en: 'egg', gender: 'm', respell: 'LUF', shelf: 'laitier', elided: true },

  // ── viande et poisson (8) ──
  { id: C('014'), bare: 'viande', fr: 'la viande', en: 'meat', gender: 'f', respell: 'lah VYAHⁿD', shelf: 'viande' },
  { id: C('015'), bare: 'poulet', fr: 'le poulet', en: 'chicken', gender: 'm', respell: 'luh poo-LEH', shelf: 'viande' },
  { id: C('124'), bare: 'porc', fr: 'le porc', en: 'pork', gender: 'm', respell: 'luh POR', shelf: 'viande' },
  { id: C('123'), bare: 'bœuf', fr: 'le bœuf', en: 'beef', gender: 'm', respell: 'luh BUHF', shelf: 'viande' },
  { id: C('037'), bare: 'jambon', fr: 'le jambon', en: 'ham', gender: 'm', respell: 'luh zhahⁿ-BOHⁿ', shelf: 'viande' },
  { id: C('016'), bare: 'poisson', fr: 'le poisson', en: 'fish', gender: 'm', respell: 'luh pwah-SOHⁿ', shelf: 'viande' },
  { id: C('128'), bare: 'saucisse', fr: 'la saucisse', en: 'sausage', gender: 'f', respell: 'lah soh-SEES', shelf: 'viande' },
  { id: R('069'), bare: 'frites', fr: 'les frites', en: 'chips', gender: 'f', respell: 'lay FREET', shelf: 'viande', pluralOnly: true },

  // ── fruits (10) ──
  { id: M('045'), bare: 'pomme', fr: 'la pomme', en: 'apple', gender: 'f', respell: 'lah POM', shelf: 'fruits' },
  { id: M('047'), bare: 'banane', fr: 'la banane', en: 'banana', gender: 'f', respell: 'lah bah-NAN', shelf: 'fruits' },
  { id: M('048'), bare: 'orange', fr: "l'orange", en: 'orange', gender: 'f', respell: 'lo-RAHⁿZH', shelf: 'fruits', elided: true },
  { id: C('035'), bare: 'fraise', fr: 'la fraise', en: 'strawberry', gender: 'f', respell: 'lah FREHZ', shelf: 'fruits' },
  { id: C('036'), bare: 'citron', fr: 'le citron', en: 'lemon', gender: 'm', respell: 'luh see-TROHⁿ', shelf: 'fruits' },
  { id: C('047'), bare: 'poire', fr: 'la poire', en: 'pear', gender: 'f', respell: 'lah PWAHR', shelf: 'fruits' },
  { id: C('050'), bare: 'pêche', fr: 'la pêche', en: 'peach', gender: 'f', respell: 'lah PEHSH', shelf: 'fruits' },
  { id: C('048'), bare: 'raisin', fr: 'le raisin', en: 'grapes', gender: 'm', respell: 'luh reh-ZAⁿ', shelf: 'fruits' },
  { id: M('053'), bare: 'cerise', fr: 'la cerise', en: 'cherry', gender: 'f', respell: 'lah suh-REEZ', shelf: 'fruits' },
  { id: C('072'), bare: 'melon', fr: 'le melon', en: 'melon', gender: 'm', respell: 'luh muh-LOHⁿ', shelf: 'fruits' },
  { id: R('077'), bare: 'fruit', fr: 'le fruit', en: 'fruit', gender: 'm', respell: 'luh FRWEE', shelf: 'fruits' },

  // ── légumes (9) ──
  { id: C('031'), bare: 'tomate', fr: 'la tomate', en: 'tomato', gender: 'f', respell: 'lah toh-MAHT', shelf: 'legumes' },
  { id: C('033'), bare: 'carotte', fr: 'la carotte', en: 'carrot', gender: 'f', respell: 'lah kah-ROT', shelf: 'legumes' },
  { id: C('034'), bare: 'oignon', fr: "l'oignon", en: 'onion', gender: 'm', respell: 'loh-NYOHⁿ', shelf: 'legumes', elided: true },
  { id: C('053'), bare: 'champignon', fr: 'le champignon', en: 'mushroom', gender: 'm', respell: 'luh shahⁿ-pee-NYOHⁿ', shelf: 'legumes' },
  { id: C('030'), bare: 'légume', fr: 'le légume', en: 'vegetable', gender: 'm', respell: 'luh lay-GÜM', shelf: 'legumes' },
  { id: C('101'), bare: 'ail', fr: "l'ail", en: 'garlic', gender: 'm', respell: 'LAHY', shelf: 'legumes', elided: true },
  { id: C('032'), bare: 'pomme de terre', fr: 'la pomme de terre', en: 'potato', gender: 'f', respell: 'lah pom duh TEHR', shelf: 'legumes' },
  { id: C('020'), bare: 'salade', fr: 'la salade', en: 'salad', gender: 'f', respell: 'lah sah-LAHD', shelf: 'legumes' },
  // SERVED, NOT AUTHORED. A first draft authored `le haricot vert` at C.274
  // before `_nourriture_more.ts` enumerated the unserved food rows and found
  // this one. Authoring it would have put two cards for one vegetable in one
  // unit, in two themes, which is the duplicate the shelf structure exists to
  // avoid. The published row is plural, which is also the commoner form.
  { id: M('067'), bare: 'haricots verts', fr: 'les haricots verts', en: 'green beans', gender: 'm', respell: 'lay ah-ree-KOH VEHR', shelf: 'legumes', pluralOnly: true },

  // ── boissons (7) ──
  { id: C('010'), bare: 'eau', fr: "l'eau", en: 'water', gender: 'f', respell: 'LOH', shelf: 'boissons', elided: true },
  { id: R('081'), bare: 'café', fr: 'le café', en: 'coffee', gender: 'm', respell: 'luh kah-FAY', shelf: 'boissons' },
  { id: R('082'), bare: 'thé', fr: 'le thé', en: 'tea', gender: 'm', respell: 'luh TAY', shelf: 'boissons' },
  { id: C('064'), bare: 'jus', fr: 'le jus', en: 'juice', gender: 'm', respell: 'luh ZHÜ', shelf: 'boissons' },
  { id: R('007'), bare: 'vin', fr: 'le vin', en: 'wine', gender: 'm', respell: 'luh VAⁿ', shelf: 'boissons' },
  { id: R('008'), bare: 'bière', fr: 'la bière', en: 'beer', gender: 'f', respell: 'lah BYEHR', shelf: 'boissons' },
  { id: C('273'), bare: 'céréales', fr: 'les céréales', en: 'cereal', gender: 'f', respell: 'lay say-ray-AHL', shelf: 'placard', pluralOnly: true, authored: true },

  // ── placard (14) ──
  { id: C('023'), bare: 'sel', fr: 'le sel', en: 'salt', gender: 'm', respell: 'luh SEHL', shelf: 'placard' },
  { id: C('024'), bare: 'poivre', fr: 'le poivre', en: 'pepper', gender: 'm', respell: 'luh PWAHVR', shelf: 'placard' },
  { id: C('058'), bare: 'sucre', fr: 'le sucre', en: 'sugar', gender: 'm', respell: 'luh SÜKR', shelf: 'placard' },
  { id: C('059'), bare: 'huile', fr: "l'huile", en: 'oil', gender: 'f', respell: 'LWEEL', shelf: 'placard', elided: true },
  { id: C('057'), bare: 'farine', fr: 'la farine', en: 'flour', gender: 'f', respell: 'lah fah-REEN', shelf: 'placard' },
  { id: C('061'), bare: 'miel', fr: 'le miel', en: 'honey', gender: 'm', respell: 'luh MYEHL', shelf: 'placard' },
  { id: C('038'), bare: 'confiture', fr: 'la confiture', en: 'jam', gender: 'f', respell: 'lah kohⁿ-fee-TÜR', shelf: 'placard' },
  { id: C('039'), bare: 'glace', fr: 'la glace', en: 'ice cream', gender: 'f', respell: 'lah GLAHSS', shelf: 'placard' },
  { id: C('017'), bare: 'riz', fr: 'le riz', en: 'rice', gender: 'm', respell: 'luh REE', shelf: 'placard' },
  { id: C('018'), bare: 'pâtes', fr: 'les pâtes', en: 'pasta', gender: 'f', respell: 'lay PAHT', shelf: 'placard', pluralOnly: true },
  { id: C('019'), bare: 'soupe', fr: 'la soupe', en: 'soup', gender: 'f', respell: 'lah SOOP', shelf: 'placard' },
  { id: 'fr.a1.cafe.054', bare: 'sandwich', fr: 'un sandwich', en: 'a sandwich', gender: 'm', respell: 'sahⁿd-WEETCH', shelf: 'placard' },
  { id: 'fr.a1.mots-essentiels.004', bare: 'chocolat', fr: 'le chocolat', en: 'chocolate', gender: 'm', respell: 'luh shoh-koh-LAH', shelf: 'placard' },
  { id: C('272'), bare: 'pizza', fr: 'la pizza', en: 'pizza', gender: 'f', respell: 'lah peed-ZAH', shelf: 'placard', authored: true },
];

export const SHELVES: Shelf[] = ['boulangerie', 'laitier', 'viande', 'fruits', 'legumes', 'boissons', 'placard'];

export const onShelf = (s: Shelf): Food[] => FOODS.filter((f) => f.shelf === s);

export function food(bare: string): Food {
  const f = FOODS.find((x) => x.bare === bare);
  if (!f) throw new Error(`no food "${bare}" in the corpus`);
  return f;
}

/** This lesson's transcription for a word, which is what every repair targets. */
const to = (bare: string) => food(bare).respell;

/** The ids of every food card, in shelf order. */
export const FOOD_IDS: string[] = FOODS.map((f) => f.id);

/** The three rows this lesson authors. Everything else is served. */
export const AUTHORED_FOODS: Food[] = FOODS.filter((f) => f.authored);

/** The `l'` group: the article hides the gender and the ear gets no help. */
export const ELIDED: Food[] = FOODS.filter((f) => f.elided);

/** No singular in ordinary use. Two of them, so this is a card, not a round. */
export const PLURAL_ONLY: Food[] = FOODS.filter((f) => f.pluralOnly);

/* ─── The three authored rows ──────────────────────────────────────────────
 *
 * Ids continue fr.a1.cuisine from .272, which the probe printed as NEXT FREE
 * with no gaps in the sequence. Never renumbered: an id is the SRS key and a
 * reused id inherits another card's history.
 *
 * ── a1.03's ending population, measured through the REAL function ──────────
 *
 * `scripts/_nourriture_genre_impact.ts` runs the real `endingPopulation` and
 * `measureEnding` (never a copy: a1.08 shipped a hand-rolled copy carrying a
 * filter the real one does not have and moved two of a1.03's printed cards).
 * Population today: 1,846 gendered single-word nouns.
 *
 *   la pizza          JOINS. Moves -a from n=16 81% to n=17 76%, and creates
 *                     -za/-zza/-izza/-pizza at n=1.
 *   le biscuit        JOINS. Moves -t (136->137, 98% unchanged), -it (11->12,
 *                     91%->92%) and -uit (2->3, 50%->67%).
 *   les céréales      DOES NOT JOIN. isPluralOnly excludes it.
 *
 * NONE OF THE MOVED ENDINGS IS PRINTED BY a1.03. It states 27 endings
 * (genre-endings.ts) and the set is: age ail al ance ant ard e eau ent esse et
 * ette euse ien ier in ine ise ité ment oir on ot sion tion ure é. Neither -a
 * nor -t nor -it nor -uit is among them, so all three rows are safe and nothing
 * had to be withdrawn.
 *
 * A fourth row, `le haricot vert`, was drafted and then DROPPED: the published
 * `les haricots verts` (fr.a1.marche.067) was found by enumeration afterwards,
 * and authoring it would have put two cards for one vegetable in one unit.     */

const SFV: Item['drills'] = ['flashcard', 'voiceflash'];

export const AUTHORED_ITEMS: Item[] = [
  {
    id: C('272'), kind: 'word', level: 'a1', theme: 'cuisine',
    fr: 'la pizza', en: 'the pizza', ipa: 'la pi.dza', respell: 'lah peed-ZAH',
    gender: 'f', tags: ['food'], drills: SFV, version: 1, cardType: 'vocab',
    notes: 'Feminine noun. The zz is said dz, not ts.',
  } as Item,
  {
    id: C('273'), kind: 'word', level: 'a1', theme: 'cuisine',
    fr: 'les céréales', en: 'the cereal', ipa: 'le se.ʁe.al', respell: 'lay say-ray-AHL',
    gender: 'f', tags: ['food'], drills: SFV, version: 1, cardType: 'vocab',
    notes: 'Plural in French, like les pâtes. There is no singular for the breakfast sense.',
  } as Item,
  {
    id: C('274'), kind: 'word', level: 'a1', theme: 'cuisine',
    fr: 'le biscuit', en: 'the biscuit', ipa: 'lə bis.kɥi', respell: 'luh bees-KWEE',
    gender: 'm', tags: ['food'], drills: SFV, version: 1, cardType: 'vocab',
    notes: 'The final t is silent.',
  } as Item,
];

export const AUTHORED_ITEM_IDS: string[] = AUTHORED_ITEMS.map((i) => i.id);
export const OWNED_ID_RANGE = { from: C('272'), to: C('274') };
export const HANDOVER_NEXT_FREE_ID = C('275');

/* ─── The eighteen cross-theme twins ───────────────────────────────────────
 *
 * CREATED BY THE THEME DECISION, and the price of it. Binding a1.23 to BOTH
 * `cuisine` and `marche` puts two themes in one unit that hold the same words
 * with different transcriptions, and the vocabulary hub shows both. A learner
 * browsing the unit sees `le pain / luh PAⁿ` on one card and `le pain /
 * luh PIHN` on the next.
 *
 * These are this lesson's to fix precisely BECAUSE the unit now declares both
 * themes. Invariant §9 forbids reaching into a row the lesson does not display;
 * it does not forbid aligning two rows inside your own unit.
 *
 * ── The three that are NOT here, and why ───────────────────────────────────
 *
 * `_nourriture_twins.ts` also matched fr.a1.cuisine.003 « une pomme », .021
 * « une banane » and .022 « une orange ». All three carry an INDEFINITE article
 * because they are a1.11's indefinite-article cards, and the generator would
 * have rewritten them to `lah POM`, `lah bah-NAN` and `lo-RAHⁿZH`, changing
 * a1.11's article as a side effect of a transcription fix. The article is
 * deliberate and stays.
 *
 * Two of the three still carry a real nasal defect in the NOUN, so they are
 * repaired with the article preserved, below. `une pomme` needs nothing:
 * `ün POM` is correct, because /pɔm/ has a real m.                            */

export type TwinRepair = RespellRepair & { theme: string };

export const TWIN_REPAIRS: TwinRepair[] = [
  { id: M('077'), fr: 'le pain', from: 'luh PIHN', to: to('pain'), caughtByChecker: false, kind: 'nasal', theme: 'marche', why: 'IHN is not a house form at all and the nasal is unclosed. Aligns with the cuisine headword.' },
  { id: M('078'), fr: 'la baguette', from: 'lah bah-GET', to: to('baguette'), caughtByChecker: false, kind: 'shouted', theme: 'marche', why: 'GET against GEHT: the same vowel spelled two ways in one unit.' },
  { id: M('074'), fr: 'le fromage', from: 'luh fro-MAJ', to: to('fromage'), caughtByChecker: false, kind: 'shouted', theme: 'marche', why: 'a bare J where the house spelling for /ʒ/ is ZH, plus fro against froh.' },
  { id: M('070'), fr: 'la viande', from: 'lah VYAHND', to: to('viande'), caughtByChecker: false, kind: 'nasal', theme: 'marche', why: 'the same word-internal nasal as the cuisine row, invisible to the checker in both places.' },
  { id: M('073'), fr: 'le jambon', from: 'luh jahn-BOHN', to: to('jambon'), caughtByChecker: true, kind: 'nasal', theme: 'marche', why: 'two unclosed nasals AND a bare j for /ʒ/.' },
  { id: M('071'), fr: 'le poisson', from: 'luh pwah-SOHN', to: to('poisson'), caughtByChecker: true, kind: 'nasal', theme: 'marche', why: 'an unclosed /ɔ̃/, identical to the cuisine row.' },
  { id: M('051'), fr: 'le citron', from: 'luh see-TROHN', to: to('citron'), caughtByChecker: true, kind: 'nasal', theme: 'marche', why: 'an unclosed /ɔ̃/, identical to the cuisine row.' },
  { id: M('046'), fr: 'la poire', from: 'lah PWAR', to: to('poire'), caughtByChecker: false, kind: 'shouted', theme: 'marche', why: 'PWAR against PWAHR on one fruit shelf.' },
  { id: M('052'), fr: 'la pêche', from: 'lah PESH', to: to('pêche'), caughtByChecker: false, kind: 'shouted', theme: 'marche', why: 'PESH against PEHSH.' },
  { id: M('049'), fr: 'le raisin', from: 'luh reh-ZIHN', to: to('raisin'), caughtByChecker: true, kind: 'nasal', theme: 'marche', why: 'IHN again, and the nasal unclosed.' },
  { id: M('054'), fr: 'le melon', from: 'luh muh-LOHN', to: to('melon'), caughtByChecker: true, kind: 'nasal', theme: 'marche', why: 'an unclosed /ɔ̃/, and the cuisine twin\'s own notes field already says there is no hard n.' },
  { id: M('057'), fr: 'la tomate', from: 'lah toh-MAT', to: to('tomate'), caughtByChecker: false, kind: 'shouted', theme: 'marche', why: 'MAT against MAHT.' },
  { id: M('061'), fr: "l'oignon", from: 'lo-NYOHN', to: to('oignon'), caughtByChecker: true, kind: 'nasal', theme: 'marche', why: 'an unclosed /ɔ̃/, and lo against loh.' },
  { id: M('062'), fr: "l'ail", from: 'LYE', to: to('ail'), caughtByChecker: false, kind: 'shouted', theme: 'marche', why: 'LYE is an English reading of the word and teaches the wrong vowel entirely. The cuisine row LAHY is right.' },
  { id: M('059'), fr: 'la salade', from: 'lah sah-LAD', to: to('salade'), caughtByChecker: false, kind: 'shouted', theme: 'marche', why: 'LAD against LAHD.' },
  { id: M('079'), fr: 'le miel', from: 'luh MYEL', to: to('miel'), caughtByChecker: false, kind: 'shouted', theme: 'marche', why: 'MYEL against MYEHL.' },

  // The two indefinite rows, NOUN repaired, ARTICLE PRESERVED. a1.11 owns the
  // article and it is not a defect.
  { id: C('021'), fr: 'une banane', from: 'ün bah-NAHN', to: 'ün bah-NAN', caughtByChecker: true, kind: 'nasal', theme: 'cuisine', why: 'the final n of banane is a REAL /n/, so AHN teaches a nasal that is not there. Repaired to AN, matching the marche row. The `ün` is a1.11\'s and stays.' },
  { id: C('022'), fr: 'une orange', from: 'ün oh-RAHNZH', to: 'ün oh-RAHⁿZH', caughtByChecker: false, kind: 'nasal', theme: 'cuisine', why: 'the same word-internal nasal a1.13 repaired on the colour row fr.sons.couleurs.009. The `ün` is a1.11\'s and stays.' },
];

/** Rows a twin repair touches that this lesson does NOT display. Named so the
 *  report can say plainly which other lessons' cards changed appearance. */
export const TWIN_REPAIRS_ON_BORROWED_ROWS = [C('021'), C('022')];

/* ─── The nineteen PRIMARY respelling repairs ──────────────────────────────
 *
 * Display-only, on rows this lesson puts on a card. The batch prints each one
 * and refuses to write if the stored value is no longer the broken one it
 * expects, because two people disagreeing about a transcription is a decision
 * rather than a merge.
 *
 * FOURTEEN ARE NASAL VIOLATIONS AND FIVE ARE SHOUTED ARTICLES. Four of the
 * fourteen are invariant §3's first blind spot: the nasal is WORD-INTERNAL, so
 * hasPlainNasalFor never looks at it and the broken value passes every shared
 * check. Those four are asserted BY NAME in the batch, the merge and the test.
 *
 * No shipped test pins any value below. Checked by grepping every `from` string
 * across ealch-v2/src and ealch-admin/scripts: the only hit anywhere was
 * `oh-RAHNZH`, which belongs to fr.sons.couleurs.009 (the COLOUR orange, a
 * different row) and which a1.13 already repaired to oh-RAHⁿZH. This lesson's
 * `l'orange` repair lands on the same value, so the two agree rather than
 * inventing a third.                                                          */

export type RespellRepair = {
  id: string;
  fr: string;
  /** What the row carries today. The batch refuses if this has changed. */
  from: string;
  /** What it will carry. Always equal to this lesson's own transcription. */
  to: string;
  /** Does the SHARED checker catch the broken value? Recorded because a later
   *  author who trusts the checker alone will reintroduce anything it cannot
   *  see. */
  caughtByChecker: boolean;
  kind: 'nasal' | 'shouted' | 'missing';
  why: string;
};


export const RESPELL_REPAIRS: RespellRepair[] = [
  // ── nasal vowels closed with a plain n, CAUGHT by the shared checker ──
  {
    id: C('002'), fr: 'le pain', from: 'luh PAN', to: to('pain'), caughtByChecker: true, kind: 'nasal',
    why: 'a plain n closes /ɛ̃/. fr.a1.cuisine.265 « du pain » ALREADY CARRIES dü PAⁿ in this very theme, so '
      + 'the corpus contradicts itself on one word two rows apart. This repair makes the headword agree with '
      + 'the partitive row a1.29 ships rather than inventing a third value.',
  },
  {
    id: C('114'), fr: 'le croissant', from: 'LUH krwah-SAHN', to: to('croissant'), caughtByChecker: true, kind: 'nasal',
    why: 'a plain n closes /ɑ̃/. The shouted LUH is repaired in the same edit because both defects are in one '
      + 'string and splitting them would mean two writes to one row.',
  },
  {
    id: C('037'), fr: 'le jambon', from: 'luh zhahn-BOHN', to: to('jambon'), caughtByChecker: true, kind: 'nasal',
    why: 'TWO nasals in one word, /ʒɑ̃bɔ̃/, and both were closed with a plain n. The checker sees only the '
      + 'second, because the first is word-internal.',
  },
  {
    id: C('016'), fr: 'le poisson', from: 'luh pwah-SOHN', to: to('poisson'), caughtByChecker: true, kind: 'nasal',
    why: 'a plain n closes /ɔ̃/. fr.sons.consonnes.149 already carries pwa-SOHⁿ.',
  },
  {
    id: C('036'), fr: 'le citron', from: 'luh see-TROHN', to: to('citron'), caughtByChecker: true, kind: 'nasal',
    why: 'a plain n closes /ɔ̃/. fr.sons.consonnes.073 already carries see-TROHⁿ.',
  },
  {
    id: C('048'), fr: 'le raisin', from: 'luh reh-ZAN', to: to('raisin'), caughtByChecker: true, kind: 'nasal',
    why: 'a plain n closes /ɛ̃/, on a fruit card the lesson shows beside le citron and le melon, both of which '
      + 'had the same defect. Three nasal fruits in one deck all transcribed wrong is what makes this a shelf '
      + 'the ear can learn rather than three unrelated errors.',
  },
  {
    id: C('072'), fr: 'le melon', from: 'LUH muh-LOHN', to: to('melon'), caughtByChecker: true, kind: 'nasal',
    why: 'a plain n closes /ɔ̃/, AND THE ROW\'S OWN `notes` FIELD SAYS SO: "Ends with a nasal on sound, no hard '
      + 'n." The note and the transcription have contradicted each other since the row was written, and the '
      + 'note is the one that is right. The shouted LUH is repaired in the same edit.',
  },
  {
    id: C('034'), fr: "l'oignon", from: 'loh-NYOHN', to: to('oignon'), caughtByChecker: true, kind: 'nasal',
    why: 'a plain n closes /ɔ̃/. fr.sons.consonnes.032 already carries oh-NYOHⁿ.',
  },
  {
    id: C('053'), fr: 'le champignon', from: 'luh shahn-pee-NYOHN', to: to('champignon'), caughtByChecker: true, kind: 'nasal',
    why: 'TWO nasals, /ʃɑ̃piɲɔ̃/, both closed with a plain n. fr.sons.consonnes.028 already carries the correct '
      + 'shahⁿ-pee-NYOHⁿ, so this repair copies the sons track rather than deciding anything.',
  },
  {
    id: R('007'), fr: 'le vin', from: 'luh VAN', to: to('vin'), caughtByChecker: true, kind: 'nasal',
    why: 'a plain n closes /ɛ̃/, on the one drink card whose whole difficulty is the nasal.',
  },

  // ── nasal vowels the shared checker CANNOT SEE (word-internal) ──
  {
    id: C('038'), fr: 'la confiture', from: 'lah kohn-fee-TÜR', to: to('confiture'), caughtByChecker: false, kind: 'nasal',
    why: 'INVISIBLE TO THE CHECKER. /kɔ̃fityʁ/ carries a nasal and the respelling closes it with a plain n, but '
      + 'FEE follows rather than the token ending, so hasPlainNasalFor never looks. Verified by hand.',
  },
  {
    id: C('014'), fr: 'la viande', from: 'lah VYAHND', to: to('viande'), caughtByChecker: false, kind: 'nasal',
    why: 'INVISIBLE TO THE CHECKER. /vjɑ̃d/ has a D behind the nasal, so VYAHND passes every shared check while '
      + 'being wrong. This is the headword of the whole meat shelf.',
  },
  {
    id: M('048'), fr: "l'orange", from: 'lo-RAHNJ', to: to('orange'), caughtByChecker: false, kind: 'nasal',
    why: 'INVISIBLE TO THE CHECKER, and carrying a second defect: ZH is the house spelling for /ʒ/ and this row '
      + 'used a bare J. a1.13 hit the same word on the colour row (fr.sons.couleurs.009) and repaired it to '
      + 'oh-RAHⁿZH; this lands on lo-RAHⁿZH, the same value with the elided article, so the fruit and the '
      + 'colour finally agree.',
  },
  {
    id: 'fr.a1.cafe.054', fr: 'un sandwich', from: 'sahnd-WEETCH', to: to('sandwich'), caughtByChecker: false, kind: 'nasal',
    why: 'INVISIBLE TO THE CHECKER. /sɑ̃dwitʃ/ has a D behind the nasal. The probe flagged it only as a "possible '
      + 'word-internal nasal, verify by hand", which is exactly what was done.',
  },

  // ── articles shouted mid-phrase ──
  {
    id: C('115'), fr: 'la baguette', from: 'LAH bah-GEHT', to: to('baguette'), caughtByChecker: false, kind: 'shouted',
    why: 'the house convention caps the phrase-final stress only, and a capitalised article tells the learner '
      + 'to stress `la`. fr.a1.marche.078 already carries the lowercase lah.',
  },
  {
    id: C('124'), fr: 'le porc', from: 'LUH POR', to: to('porc'), caughtByChecker: false, kind: 'shouted',
    why: 'the article is shouted. POR keeps its caps because it IS the stressed syllable.',
  },
  {
    id: C('123'), fr: 'le bœuf', from: 'LUH BUHF', to: to('bœuf'), caughtByChecker: false, kind: 'shouted',
    why: 'the article is shouted. ONLY the article changes. BUHF keeps its caps because it IS the stressed '
      + 'syllable, and it stays ONE syllable, which is right: /bœf/. A later author reading BUHF as a typo for '
      + 'a two-syllable value would be wrong. This row is deliberately NOT in NOT_REPAIRED, because it IS being '
      + 'repaired and listing it in both would be a contradiction the batch now refuses to run with.',
  },
  {
    id: C('128'), fr: 'la saucisse', from: 'LAH soh-SEES', to: to('saucisse'), caughtByChecker: false, kind: 'shouted',
    why: 'the article is shouted.',
  },

  // ── a transcription that is simply absent ──
  {
    id: C('032'), fr: 'la pomme de terre', from: '', to: to('pomme de terre'), caughtByChecker: false, kind: 'missing',
    why: 'THE ROW HAS NO RESPELL AT ALL: the column is null, so the card renders its transcription line empty. '
      + 'The only one of the sixty in that state. `from` is the empty string and the batch checks for null or '
      + 'empty rather than for a specific broken value.',
  },
];

/** The repairs the shared checker cannot see. NINE of nineteen, which is why
 *  the by-name assertions in the test are not optional. */
export const REPAIRS_INVISIBLE_TO_CHECKER = RESPELL_REPAIRS.filter((r) => !r.caughtByChecker).map((r) => r.fr);

export const NASAL_REPAIRS = RESPELL_REPAIRS.filter((r) => r.kind === 'nasal');
export const SHOUTED_REPAIRS = RESPELL_REPAIRS.filter((r) => r.kind === 'shouted');

/* ─── Rows this lesson deliberately does NOT repair ────────────────────────
 *
 * THE MOST IMPORTANT LIST IN THIS FILE. Every row below was FLAGGED by the
 * probe or looks wrong at a glance, and every one is CORRECT AS IT STANDS. They
 * are asserted by name in the test so that a future author's "fix" goes red
 * instead of shipping.                                                        */

export const NOT_REPAIRED: { id: string; fr: string; respell: string; why: string }[] = [
  {
    id: C('055'), fr: 'la crème', respell: 'lah KREHM',
    why: 'THE CHECKER IS WRONG ABOUT THIS ONE. /kʁɛm/ has a REAL /m/ and no nasal vowel at all. '
      + 'hasPlainNasalFor flags it because it reads a vowel plus M at a token end as a nasal without '
      + 'consulting the French spelling. Repairing it to KREHⁿ would teach a sound that is not in the word. '
      + 'This is invariant §3\'s SECOND blind spot, the jaune case.',
  },
  {
    id: M('047'), fr: 'la banane', respell: 'lah bah-NAN',
    why: 'the final N is a REAL /n/: /banan/. Correct as it stands. Note that the cuisine twin '
      + 'fr.a1.cuisine.021 « une banane » carries bah-NAHN and IS flagged, but that row belongs to a1.11 and '
      + 'is not displayed here, so it is reported rather than repaired.',
  },
  {
    id: C('057'), fr: 'la farine', respell: 'lah fah-REEN',
    why: 'a real /n/ in /faʁin/, followed by a vowel in the spelling. Correct.',
  },
  {
    id: M('045'), fr: 'la pomme', respell: 'lah POM',
    why: 'a real /m/ in /pɔm/. Correct.',
  },
  {
    id: C('010'), fr: "l'eau", respell: 'LOH',
    why: 'ALL CAPS IS CORRECT HERE and is not a shouted article. The elided article has fused into a single '
      + 'stressed syllable, so there is no article to lowercase. Five rows across the corpus agree on LOH. '
      + 'The same reasoning protects LWEEL (l\'huile), LUF (l\'œuf) and LAHY (l\'ail), all of which are '
      + 'one-syllable elided words and all of which are left alone.',
  },
  {
    id: C('059'), fr: "l'huile", respell: 'LWEEL',
    why: 'one syllable, elided article fused in. Not a shouted article. See l\'eau.',
  },
  {
    id: R('088'), fr: "l'œuf", respell: 'LUF',
    why: 'one syllable, elided article fused in. Not a shouted article. See l\'eau.',
  },
  {
    id: C('101'), fr: "l'ail", respell: 'LAHY',
    why: 'one syllable, elided article fused in. Not a shouted article. See l\'eau.',
  },
];

/** Words carrying a GENUINE nasal that MUST close with a superscript. The
 *  word-internal ones are here specifically because hasPlainNasalFor cannot see
 *  them: invariant §3's first blind spot, the same one that let a1.09's
 *  sep-TAHNBR through. */
export const NASAL_FORMS = [
  'le pain', 'le croissant', 'le jambon', 'le poisson', 'le citron', 'le raisin',
  'le melon', "l'oignon", 'le champignon', 'le vin', 'la confiture', 'la viande',
  "l'orange", 'un sandwich',
];

/** Has NO nasal vowel and must NOT carry a superscript. Asserted by name,
 *  because the shared checker flags three of them. */
export const NOT_NASAL_FORMS = ['la crème', 'la banane', 'la farine', 'la pomme'];

/* ─── The contrast this lesson exists for ──────────────────────────────────
 *
 * Both columns were ALREADY PUBLISHED, by different authors, in different
 * themes, on the same nouns. The lesson serves the corpus's own evidence rather
 * than authoring sentences to prove a rule it invented.
 *
 * Measured: 20 like-verb sentences and 66 eat-or-drink sentences in the seed.
 *
 * ── The two rows that are the lesson ───────────────────────────────────────
 *
 *     fr.a1.cafe.149     « J'aime le café. »      the whole category
 *     fr.a1.cuisine.268  « Je bois du café. »     some of it, now
 *
 * One noun, two verbs, two articles, both already in the binary. This pair goes
 * on ONE SCREEN in act 5 and the test asserts that it does.
 *
 * ── The negation pair, which is the deeper half ────────────────────────────
 *
 *     fr.a1.cafe.150     « Je n'aime pas le café. »    le SURVIVES
 *     fr.a1.cuisine.264  « Je ne mange pas de pain. »  du COLLAPSES to de
 *
 * a1.29 taught the collapse and a1.18 taught the negation. Neither taught that
 * the collapse does not reach `aimer`, because neither had both columns.
 *
 * ── The three apparent counterexamples, which are not ──────────────────────
 *
 *     fr.a1.cuisine.242  « Il aime manger du fromage après le repas. »
 *     fr.a1.marche.005   « J'aime acheter du fromage au marché. »
 *     fr.a1.marche.140   « J'aime l'odeur du pain frais. »
 *
 * All three have `aimer` followed by an INFINITIVE or by another noun, and the
 * partitive belongs to that inner verb or noun, not to `aimer`. The rule is
 * `aimer` + FOOD NOUN takes the definite article, and these do not break it.
 * Written down because a future author grepping for "aime.*du" will find them
 * and conclude the corpus disagrees with the lesson.                          */

export const LIKE_COLUMN: { id: string; fr: string }[] = [
  { id: 'fr.a1.cafe.149', fr: "J'aime le café." },
  { id: 'fr.a1.cafe.150', fr: "Je n'aime pas le café." },
  { id: C('192'), fr: 'Les enfants aiment les pâtes au fromage.' },
  { id: C('257'), fr: 'Il aime les plats épicés.' },
  { id: C('258'), fr: 'Je préfère les légumes frais aux légumes surgelés.' },
  { id: M('118'), fr: 'Les enfants aiment les fraises sucrées.' },
  { id: M('159'), fr: 'Je préfère les légumes bio.' },
  { id: 'fr.a1.questions.077', fr: 'Est-ce que tu préfères le thé ou le café ?' },
  { id: 'fr.sons.liaisons.139', fr: 'Nous aimons le café.' },
  { id: 'fr.sons.voyelles.424', fr: 'Elle préfère le thé léger.' },
];

export const EAT_COLUMN: { id: string; fr: string }[] = [
  { id: C('268'), fr: 'Je bois du café.' },
  { id: C('007'), fr: 'Je mange du pain.' },
  { id: C('004'), fr: 'Je bois du café le matin.' },
  { id: C('189'), fr: 'Nous mangeons du pain frais chaque matin.' },
  { id: C('205'), fr: 'Vous mangez du poulet rôti ce soir.' },
  { id: C('209'), fr: 'Ils mangent des légumes verts chaque soir.' },
  { id: 'fr.a1.routines.161', fr: 'Nous mangeons du pain avec du beurre.' },
  { id: 'fr.sons.liaisons.122', fr: 'On mange des œufs et du pain le matin.' },
];

/** The one pair, on one screen. Asserted by the test. */
export const THE_PAIR = {
  like: LIKE_COLUMN[0],
  eat: EAT_COLUMN[0],
  noun: 'café',
} as const;

/** Negation: the definite survives after aimer, the partitive collapses after
 *  manger. Both rows published, neither lesson had both columns. */
export const NEGATION_PAIR = {
  like: { id: 'fr.a1.cafe.150', fr: "Je n'aime pas le café." },
  eat: { id: C('264'), fr: 'Je ne mange pas de pain.' },
} as const;

/** `aimer` + infinitive, where the partitive belongs to the inner verb. NOT
 *  counterexamples, and listed so nobody thinks they are. */
export const NOT_COUNTEREXAMPLES: { id: string; fr: string; why: string }[] = [
  { id: C('242'), fr: 'Il aime manger du fromage après le repas.', why: 'du belongs to manger, not to aime' },
  { id: M('005'), fr: "J'aime acheter du fromage au marché.", why: 'du belongs to acheter, not to aime' },
  { id: M('140'), fr: "J'aime l'odeur du pain frais.", why: "aime takes l'odeur; du pain is a complement of odeur" },
];

/* ─── What a1.29 owns, so this lesson does not re-release it ───────────────
 *
 * a1.29 names 81 ids, 21 of them in `cuisine`. Rows .262 to .271 are its
 * partitive block. Sharing an id across two lessons is legal and a1.11 already
 * shares fr.a1.cuisine.003 with a1.29, but a tranche that re-releases the
 * partitive block is a review deck wearing a food lesson's clothes.
 *
 * This lesson serves exactly TWO of them, both as EVIDENCE on a contrast screen
 * rather than as deck cards, and releases NEITHER to spaced repetition:
 *
 *     fr.a1.cuisine.268  « Je bois du café. »      the eat column of THE_PAIR
 *     fr.a1.cuisine.264  « Je ne mange pas de pain. »  the eat column of the
 *                                                      negation pair          */
export const A1_29_OWNED_IN_CUISINE = [
  C('003'), C('004'), C('007'), C('189'), C('195'), C('199'), C('214'), C('220'),
  C('227'), C('240'), C('242'), C('262'), C('263'), C('264'), C('265'), C('266'),
  C('267'), C('268'), C('269'), C('270'), C('271'),
];

/** Borrowed from a1.29 for evidence, never released to spaced repetition. */
export const BORROWED_FROM_A1_29 = [C('268'), C('264')];

/* ─── Rows outside the seed cut that MUST be carried ───────────────────────
 *
 * `cuisine` and `marche` are inside SEED_CUT.themes so their rows already ship
 * in the binary. These nine are not, and a tranche naming one without carrying
 * it renders a blank card on a fresh offline install.                         */
export const OUTSIDE_THE_CUT = [
  R('088'), R('069'), R('077'), R('081'), R('082'), R('007'), R('008'),
  'fr.a1.mots-essentiels.004',
];

/* ─── Display lookups ──────────────────────────────────────────────────────
 *
 * The lesson reads every string it shows through these, so a card and a quiz
 * option and a review deck cannot disagree about how a word is spelled. Nothing
 * in nourriture-lesson.ts restates an `fr`, an `en` or a `respell`.
 *
 * The registry covers the sixty food cards, the eight imported rows and the
 * nineteen reused sentences. `frOf` THROWS on an unknown id rather than
 * returning undefined: a card silently rendering "undefined" is the exact class
 * of defect invariant §1 is about, and it would pass every schema check.       */

const DISPLAY = new Map<string, { fr: string; en: string; respell?: string }>();
for (const f of FOODS) DISPLAY.set(f.id, { fr: f.fr, en: f.en, respell: f.respell });
for (const r of IMPORTED_ROWS) if (!DISPLAY.has(r.id)) DISPLAY.set(r.id, { fr: r.fr, en: r.en ?? '', respell: r.respell ?? undefined });
for (const r of REUSED_ROWS) if (!DISPLAY.has(r.id)) DISPLAY.set(r.id, { fr: r.fr, en: r.en });

export function frOf(id: string): string {
  const d = DISPLAY.get(id);
  if (!d) throw new Error(`a1.23: no display string for "${id}". Add it to FOODS, IMPORTED or REUSED.`);
  return d.fr;
}

export function enOf(id: string): string {
  const d = DISPLAY.get(id);
  if (!d) throw new Error(`a1.23: no display string for "${id}".`);
  return d.en;
}

/** The bracketed transcription for a food, by its French headword. Bracketed
 *  because that is how every A1 lesson renders a respelling under a card. */
export function sub(fr: string): string {
  const f = FOODS.find((x) => x.fr === fr);
  if (!f) throw new Error(`a1.23: no food with fr "${fr}", so no transcription to show.`);
  return `[${f.respell}]`;
}

/** Every id this lesson displays. The batch and the test both walk it. */
export const DISPLAYED_IDS: string[] = [...DISPLAY.keys()];

/* ─── Counts, derived rather than typed ────────────────────────────────────
 *
 * Every figure the batch, the merge, the report and the test print comes from
 * here, so a number cannot drift from the thing it counts.                    */
export const COUNTS = {
  total: FOODS.length,
  twinRepairs: TWIN_REPAIRS.length,
  served: FOODS.filter((f) => !f.authored).length,
  authored: AUTHORED_FOODS.length,
  repairs: RESPELL_REPAIRS.length,
  repairsInvisible: REPAIRS_INVISIBLE_TO_CHECKER.length,
  notRepaired: NOT_REPAIRED.length,
  outsideCut: OUTSIDE_THE_CUT.length,
  shelves: SHELVES.length,
} as const;
