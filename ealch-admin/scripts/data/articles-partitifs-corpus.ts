// The a1.29 corpus: what this lesson authors, what it reuses, and what it had
// to IMPORT from two themes that are not in the seed cut.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 13 authored entries, for the
// 26 imported rows, and for every respelling a1.29 puts on a screen. The lesson
// body reads `fr`, `ipa`, `respell` and `en` FROM HERE and never restates them,
// for the same reason articles-indefinis-corpus.ts does: before that convention
// one word's transcription was typed by hand in five sections and the five
// copies were free to drift.
//
// ── Three sources, and why there are three ─────────────────────────────────
//
// a1.11 had to author its central narrative because nothing in the corpus did
// the job. a1.29 has the opposite problem: the material largely exists and is
// scattered across three places with different reachability.
//
//   REUSED    43 rows already inside the seed cut. Nothing about them changes.
//   IMPORTED  26 rows that are PUBLISHED in Postgres and absent from the seed,
//             because seed-cut.config.ts bundles by theme and neither
//             `expressions-de-quantite` nor `au-restaurant` is on the list.
//   AUTHORED  13 rows that do not exist anywhere. Every one is half of a
//             MINIMAL PAIR the lesson turns on, and the corpus has no pairs.
//
// ── Why importing rather than authoring ────────────────────────────────────
//
// `expressions-de-quantite` (521 rows, 148 at a1) is built for this lesson and
// nobody noticed. It opens with `beaucoup de` as a phrase item followed by
// worked sentences, then `un peu de`, `assez de`, `trop de`, and at .065 it
// runs a clean partitive block: du riz, de la confiture, de l'eau, des légumes,
// du fromage, de la salade, each with its own worked sentence. Re-authoring
// that would be writing a second copy of content this project already owns and
// already ships over the air.
//
// `au-restaurant` (346 rows, 216 at a1) supplies the ordering frames and,
// more valuably, a clean TRAP SET: le plat du jour, le menu du jour,
// l'addition à la fin du repas. All `de + le`, none of them partitive, all in
// exactly the register this lesson teaches. That is the fourth mission's
// material and it cannot be invented, because the point is that a learner has
// been reading these since a1.01.
//
// publish-content.ts pulls in every item a bundled lesson references, so these
// ids would arrive at the next publish. But lesson-contract.test.ts resolves
// `itemIds` against seed.json, and a publish is not available (see the hazard
// note in merge-articles-partitifs-into-seed.ts). So the merge script COPIES
// the rows below into the seed. IMPORTED is that copy: a file in scripts/data,
// not a live query, so the merge is reproducible on a machine with no database.
//
// The rows are recorded VERBATIM as Postgres holds them, including respellings
// that predate the superscript-n convention (`dü ree`, `uhn puh duh`,
// `boh-koo duh`). They are NOT corrected here. Correcting them would put the
// seed a version ahead of the database on rows this lesson does not own, which
// is the drift that has twice cost this project real work. Everything a1.29
// DISPLAYS is respelled in RESPELL below, to the convention, and the lesson
// reads its screens from that map. Same call a1.11 made about `uhn`.
//
// One consequence is worth naming rather than discovering. Several imported
// `notes` fields use the grammar vocabulary this lesson bans from learner copy
// ("Du is the masculine singular partitive article"). Those notes are corpus
// rows, not lesson sections: they already reach learners today through the
// themed decks over the air, so copying them into the seed changes nothing
// about what anyone can see. The ban is on what a1.29 AUTHORS, and the test
// scopes it to sections and terms for exactly that reason. Rewriting somebody
// else's shipped row to suit this lesson's register is a separate job with its
// own review, and doing it here would create the drift described above.
//
// ── Ids ────────────────────────────────────────────────────────────────────
//
// Every authored sequence number continues its theme's existing run, checked
// against BOTH Postgres and seed.json on 2026-08-05 (the two drift, and the
// higher of the pair is what a new id has to clear):
//
//   cuisine 261   cafe 150
//
// Ids are the SRS key. Nothing here is ever renumbered; new entries append.
//
// ── The headword collision rule ────────────────────────────────────────────
//
// flashhub-coverage.test.ts normalises `le|la|les|l'|un|une|des ` off the front
// before comparing two non-sentence items in one theme. `du ` and `de la ` are
// NOT in that strip list, so « du pain » and « le pain » do not collide and
// « du café » and « un café » do not collide. Verified against the seed on
// 2026-08-05 anyway rather than trusted: all four authored phrases are free.
//
// ── Why nothing here is kind 'word' ────────────────────────────────────────
//
// gender.logic.ts measures a1.03's ten ending rules over `kind === 'word'`
// items carrying a gender, and a1-03-genre.test.ts re-measures every one of
// them from the seed on every run. a1.11 added two feminine nouns in -e and
// moved a1.03's count from 871 to 873, turning the suite red on a lesson
// nobody had touched.
//
// Every authored entry below is a `phrase` or a `sentence` and none carries a
// `gender` field, so none of them can enter that population. That is not
// squeamishness: « du pain » is an article plus a noun, which is a phrase, and
// the gender of `pain` is a1.03's subject rather than this lesson's.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** A corpus entry plus the teaching data the lesson's screens need. */
export type PartitiveWord = Omit<Item, 'drills'> & {
  /** Which article this entry is teaching. `de` is the reduced form, where the
   *  partitive collapses under a quantity word or a negative; `un` is the
   *  countable half of a contrast pair. */
  article: 'du' | 'de la' | "de l'" | 'des' | 'un' | 'une' | 'le' | 'de';
  /** Which teaching family. Drives the tranche slices and the drill pools so
   *  neither restates a word list. */
  family: 'forms' | 'choice' | 'quantity' | 'negation' | 'otherDu';
  /** The other half of a pair that only means anything together: « Je prends
   *  un café » does not teach anything until « Je prends du café » is beside
   *  it. */
  pairWith?: string;
  drills: Item['drills'];
};

const W: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const S: Item['drills'] = ['sentence', 'flashcard', 'review'];
const SD: Item['drills'] = ['sentence', 'flashcard', 'review', 'dictation'];

export const PARTITIFS: PartitiveWord[] = [
  // ── cuisine: the bread pair the opening scene turns on ────────────────────
  //
  // « un pain » is a countable object: a specific large round loaf sitting on a
  // shelf with a price on it. « du pain » is bread. Both sentences are correct
  // French, both are ordinary, and one of them gets you an 800g loaf you did
  // not want. Nothing in the corpus carries this pair, and no single sentence
  // can carry it: the contrast needs both halves said the same way.
  {
    id: 'fr.a1.cuisine.262', kind: 'sentence', level: 'a1', theme: 'cuisine',
    fr: 'Je voudrais un pain.', en: 'I would like a loaf.', ipa: '/ʒə vu.dʁɛ œ̃ pɛ̃/',
    article: 'un', family: 'choice', pairWith: 'fr.a1.cuisine.263',
    tags: ['article-comptable', 'nourriture'], drills: S, audioRef: null, version: 1,
    notes: 'One loaf, the round kind, wrapped and paid for. Not a request for bread.',
  },
  {
    id: 'fr.a1.cuisine.263', kind: 'sentence', level: 'a1', theme: 'cuisine',
    fr: 'Je voudrais du pain.', en: 'I would like some bread.', ipa: '/ʒə vu.dʁɛ dy pɛ̃/',
    article: 'du', family: 'choice', pairWith: 'fr.a1.cuisine.262',
    tags: ['article-partitif', 'nourriture'], drills: S, audioRef: null, version: 1,
    notes: 'Bread, an amount nobody has measured. The same sentence with one syllable changed.',
  },
  {
    id: 'fr.a1.cuisine.264', kind: 'sentence', level: 'a1', theme: 'cuisine',
    fr: 'Je ne mange pas de pain.', en: 'I do not eat bread.', ipa: '/ʒə nə mɑ̃ʒ pa də pɛ̃/',
    article: 'de', family: 'negation', pairWith: 'fr.a1.cuisine.007',
    tags: ['article-partitif', 'negation', 'nourriture'], drills: SD, audioRef: null, version: 1,
    notes: 'Du becomes de. Not pas du pain, and not pas le pain: the negative eats the partitive.',
  },
  {
    id: 'fr.a1.cuisine.265', kind: 'phrase', level: 'a1', theme: 'cuisine',
    fr: 'du pain', en: 'some bread', ipa: '/dy pɛ̃/', respell: 'dü PAⁿ',
    article: 'du', family: 'forms',
    tags: ['article-partitif', 'nourriture'], drills: W, audioRef: null, version: 1,
    notes: 'The masculine form. English has no word here at all, which is why it goes missing.',
  },
  {
    id: 'fr.a1.cuisine.266', kind: 'phrase', level: 'a1', theme: 'cuisine',
    fr: 'de la soupe', en: 'some soup', ipa: '/də la sup/', respell: 'duh la SOOP',
    article: 'de la', family: 'forms',
    tags: ['article-partitif', 'nourriture'], drills: W, audioRef: null, version: 1,
  },
  {
    id: 'fr.a1.cuisine.267', kind: 'phrase', level: 'a1', theme: 'cuisine',
    fr: 'du lait', en: 'some milk', ipa: '/dy lɛ/', respell: 'dü LEH',
    article: 'du', family: 'forms',
    tags: ['article-partitif', 'nourriture'], drills: W, audioRef: null, version: 1,
  },
  // The quantity pair. « Je bois du café le matin » exists (fr.a1.cuisine.004)
  // and is reused elsewhere, but it carries a tail the quantity half does not,
  // and a contrast card whose two halves end differently teaches the tail.
  {
    id: 'fr.a1.cuisine.268', kind: 'sentence', level: 'a1', theme: 'cuisine',
    fr: 'Je bois du café.', en: 'I drink coffee.', ipa: '/ʒə bwa dy ka.fe/',
    article: 'du', family: 'quantity', pairWith: 'fr.a1.cuisine.269',
    tags: ['article-partitif', 'nourriture'], drills: S, audioRef: null, version: 1,
  },
  {
    id: 'fr.a1.cuisine.269', kind: 'sentence', level: 'a1', theme: 'cuisine',
    fr: 'Je bois beaucoup de café.', en: 'I drink a lot of coffee.', ipa: '/ʒə bwa bo.ku də ka.fe/',
    article: 'de', family: 'quantity', pairWith: 'fr.a1.cuisine.268',
    tags: ['quantite', 'nourriture'], drills: SD, audioRef: null, version: 1,
    notes: 'Name the quantity and the article goes. Never beaucoup du café.',
  },
  // The de l' pair, which is the form most likely to be dropped by a later edit
  // because it is the one with no separate word of its own.
  {
    id: 'fr.a1.cuisine.270', kind: 'sentence', level: 'a1', theme: 'cuisine',
    fr: "Je bois de l'eau.", en: 'I drink water.', ipa: '/ʒə bwa də lo/',
    article: "de l'", family: 'forms', pairWith: 'fr.a1.cuisine.271',
    tags: ['article-partitif', 'elision', 'nourriture'], drills: S, audioRef: null, version: 1,
    notes: "Eau starts with a vowel sound, so de la shortens to de l' the way la shortens to l'.",
  },
  {
    id: 'fr.a1.cuisine.271', kind: 'sentence', level: 'a1', theme: 'cuisine',
    fr: "Je ne bois pas d'eau.", en: 'I do not drink water.', ipa: '/ʒə nə bwa pa do/',
    article: 'de', family: 'negation', pairWith: 'fr.a1.cuisine.270',
    tags: ['article-partitif', 'negation', 'elision'], drills: S, audioRef: null, version: 1,
    notes: "De l' goes to d' under a negative, because de meets a vowel and shortens again.",
  },

  // ── cafe: the coffee pair, which is the contrast in its purest form ───────
  //
  // Coffee is the noun an English speaker meets this problem on first, because
  // « un café » and « du café » are both things you can order in the same shop
  // and neither is a mistake. Nothing corrects a learner who says the wrong one.
  {
    id: 'fr.a1.cafe.151', kind: 'phrase', level: 'a1', theme: 'cafe',
    fr: 'du café', en: 'some coffee', ipa: '/dy ka.fe/', respell: 'dü ka-FAY',
    article: 'du', family: 'forms',
    tags: ['article-partitif', 'boisson'], drills: W, audioRef: null, version: 1,
    notes: 'Coffee, the substance. Not a cup of it, and not coffee in general.',
  },
  {
    id: 'fr.a1.cafe.152', kind: 'sentence', level: 'a1', theme: 'cafe',
    fr: 'Je prends un café.', en: "I'll have a coffee.", ipa: '/ʒə pʁɑ̃ œ̃ ka.fe/',
    article: 'un', family: 'choice', pairWith: 'fr.a1.cafe.153',
    tags: ['article-comptable', 'boisson'], drills: S, audioRef: null, version: 1,
    notes: 'One cup, served at a counter, on a saucer. You can count it.',
  },
  {
    id: 'fr.a1.cafe.153', kind: 'sentence', level: 'a1', theme: 'cafe',
    fr: 'Je prends du café.', en: "I'll have some coffee.", ipa: '/ʒə pʁɑ̃ dy ka.fe/',
    article: 'du', family: 'choice', pairWith: 'fr.a1.cafe.152',
    tags: ['article-partitif', 'boisson'], drills: S, audioRef: null, version: 1,
    notes: 'Coffee rather than tea, or some of what is in the pot. Not one cup.',
  },
];

/** Lookup by id. */
export const BY_ID: ReadonlyMap<string, PartitiveWord> = new Map(PARTITIFS.map((w) => [w.id, w]));

/** Every id this file authors, in sequence order. */
export const PARTITIF_IDS: string[] = PARTITIFS.map((w) => w.id);

/** The ids of one teaching family, in sequence order. */
export const familyIds = (f: PartitiveWord['family']): string[] =>
  PARTITIFS.filter((w) => w.family === f).map((w) => w.id);

/** The contrast pairs, as [countable-or-positive, partitive-or-reduced].
 *
 *  Built from `pairWith` rather than listed, so a pair cannot be half-deleted:
 *  the test asserts every pair is reciprocal and that the two halves really do
 *  carry different articles. */
export const CONTRAST_PAIRS: [string, string][] = PARTITIFS
  .filter((w) => w.pairWith && (w.article === 'un' || w.article === 'du' || w.article === "de l'"))
  .map((w) => [w.id, w.pairWith!] as [string, string]);

/* ─── IMPORTED: published in Postgres, absent from the seed ─────────────────
 *
 * Recorded verbatim, as `select ... from content_items where id = ...` returned
 * them on 2026-08-05, so the merge script can write them into seed.json without
 * a database. The batch re-reads Postgres and fails if any row has moved, which
 * is what keeps this copy honest.
 *
 * Nothing here is edited. See the header on why the pre-convention respellings
 * are left exactly as they ship.                                              */

export type ImportedRow = Item & { why: string };

export const IMPORTED: ImportedRow[] = [
  // ── expressions-de-quantite: the quantity anchors ────────────────────────
  {
    id: 'fr.a1.expressions-de-quantite.001', kind: 'phrase', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'beaucoup de', en: 'a lot of, many, much',
    ipa: '/bo.ku də/', respell: 'boh-koo duh',
    notes: "Invariable: works with countable and uncountable nouns. Always followed by de/d', never du/de la/des.",
    tags: ['beaucoup', 'quantity'], drills: ['flashcard', 'voiceflash'], version: 1,
    why: 'the quantity word an English speaker reaches for first, and the one they put du after',
  },
  {
    id: 'fr.a1.expressions-de-quantite.014', kind: 'phrase', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'un peu de', en: 'a little, a bit of',
    ipa: '/œ̃ pø də/', respell: 'uhn puh duh',
    notes: 'Un peu de suggests a small but sufficient amount; peu de (without un) suggests too little.',
    tags: ['peu', 'quantity'], drills: ['flashcard', 'voiceflash'], version: 1,
    why: 'the second quantity word, and the one that keeps un in front of it without keeping du after it',
  },
  {
    id: 'fr.a1.expressions-de-quantite.023', kind: 'phrase', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'assez de', en: 'enough',
    ipa: '/a.se də/', respell: 'ah-say duh',
    notes: 'Marks a sufficient quantity; the opposite idea to pas assez de (not enough).',
    tags: ['assez', 'quantity'], drills: ['flashcard', 'voiceflash'], version: 1,
    why: 'the third of the four, so the rule is met as a family rather than as one word',
  },
  {
    id: 'fr.a1.expressions-de-quantite.031', kind: 'phrase', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'trop de', en: 'too much, too many',
    ipa: '/tʁo də/', respell: 'troh duh',
    notes: 'Marks an excessive quantity; pairs with pas assez de as its opposite.',
    tags: ['trop', 'quantity'], drills: ['flashcard', 'voiceflash'], version: 1,
    why: 'the fourth, and the one a learner uses about themselves within a week',
  },
  // ── expressions-de-quantite: the partitive block ─────────────────────────
  {
    id: 'fr.a1.expressions-de-quantite.065', kind: 'phrase', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'du riz', en: 'some rice',
    ipa: '/dy ʁi/', respell: 'dü ree',
    notes: 'Du is the masculine singular partitive article, used for an unspecified part of something.',
    tags: ['partitif', 'quantity'], drills: ['flashcard', 'voiceflash'], version: 1,
    why: 'a masculine form on a noun nobody would try to count',
  },
  {
    id: 'fr.a1.expressions-de-quantite.066', kind: 'phrase', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'de la confiture', en: 'some jam',
    ipa: '/də la kɔ̃.fi.tyʁ/', respell: 'duh lah kohn-fee-tür',
    notes: 'De la is the feminine singular partitive article.',
    tags: ['partitif', 'quantity'], drills: ['flashcard', 'voiceflash'], version: 1,
    why: 'the feminine form, already authored with the gloss this lesson wants',
  },
  {
    id: 'fr.a1.expressions-de-quantite.067', kind: 'phrase', level: 'a1',
    theme: 'expressions-de-quantite', fr: "de l'eau", en: 'some water',
    ipa: '/də lo/', respell: 'duh loh',
    notes: "De l' replaces du/de la before a word starting with a vowel sound.",
    tags: ['partitif', 'elision', 'quantity'], drills: ['flashcard', 'voiceflash'], version: 1,
    why: "the de l' form, which is the one a later edit would drop first",
  },
  {
    id: 'fr.a1.expressions-de-quantite.068', kind: 'phrase', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'des légumes', en: 'some vegetables',
    ipa: '/de le.gym/', respell: 'day lay-güm',
    notes: 'Des is the plural partitive article, used the same way for masculine and feminine nouns.',
    tags: ['partitif', 'quantity'], drills: ['flashcard', 'voiceflash'], version: 1,
    why: 'THE HANDOVER FROM a1.11. Already authored, already glossed as the plural of this family, and the learner already owns the word',
  },
  {
    id: 'fr.a1.expressions-de-quantite.069', kind: 'phrase', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'du fromage', en: 'some cheese',
    ipa: '/dy fʁɔ.maʒ/', respell: 'dü froh-mahzh',
    tags: ['partitif', 'quantity'], drills: ['flashcard', 'voiceflash'], version: 1,
    why: 'the noun the negation rule is drilled on, so the positive form has a card of its own',
  },
  {
    id: 'fr.a1.expressions-de-quantite.070', kind: 'phrase', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'de la salade', en: 'some salad',
    ipa: '/də la sa.lad/', respell: 'duh lah sah-lahd',
    tags: ['partitif', 'quantity'], drills: ['flashcard', 'voiceflash'], version: 1,
    why: 'a second feminine form, so de la is met twice rather than once',
  },
  {
    id: 'fr.a1.expressions-de-quantite.071', kind: 'sentence', level: 'a1',
    theme: 'expressions-de-quantite', fr: "Je voudrais du pain, s'il vous plaît.",
    en: 'I would like some bread, please.',
    tags: ['partitif'], drills: ['flashcard', 'sentence'], version: 1,
    why: 'the polite full form of the sentence the opening scene fails on',
  },
  {
    id: 'fr.a1.expressions-de-quantite.072', kind: 'sentence', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'Elle met de la confiture sur sa tartine.',
    en: 'She puts jam on her toast.',
    tags: ['partitif'], drills: ['flashcard', 'sentence'], version: 1,
    why: 'de la inside a real sentence rather than on a card by itself',
  },
  {
    id: 'fr.a1.expressions-de-quantite.073', kind: 'sentence', level: 'a1',
    theme: 'expressions-de-quantite', fr: "Tu veux de l'eau ou du jus d'orange ?",
    en: 'Do you want water or orange juice?',
    tags: ['partitif'], drills: ['flashcard', 'sentence'], version: 1,
    why: "two partitives in one question, one de l' and one du, which is how they really arrive",
  },
  {
    id: 'fr.a1.expressions-de-quantite.074', kind: 'sentence', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'Nous achetons des légumes au marché.',
    en: 'We buy vegetables at the market.',
    tags: ['partitif'], drills: ['flashcard', 'sentence'], version: 1,
    why: 'the des handover in a sentence, in the buying frame an English speaker drops the article from',
  },
  {
    id: 'fr.a1.expressions-de-quantite.077', kind: 'sentence', level: 'a1',
    theme: 'expressions-de-quantite', fr: "Est-ce qu'il y a encore du café ?",
    en: 'Is there still some coffee?',
    tags: ['partitif'], drills: ['flashcard', 'sentence'], version: 1,
    why: 'the question form, which is where a learner will actually need du first',
  },
  {
    id: 'fr.a1.expressions-de-quantite.081', kind: 'sentence', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'Ils boivent du vin avec le dîner.',
    en: 'They drink wine with dinner.',
    tags: ['partitif'], drills: ['flashcard', 'sentence'], version: 1,
    why: 'du and le in one sentence, which is the sentence the fourth mission is built to read',
  },
  {
    id: 'fr.a1.expressions-de-quantite.092', kind: 'sentence', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'Je voudrais un peu de sucre dans mon café.',
    en: 'I would like a little sugar in my coffee.',
    ipa: '/ʒə vu.dʁɛ œ̃ pø də sykʁ dɑ̃ mɔ̃ ka.fe/',
    notes: 'Un is a nasal vowel, do not pronounce the n separately.',
    tags: ['nasal'], drills: ['dictation'], version: 1,
    why: 'a quantity sentence long enough to land in word mode, which is what makes the dictée an article exercise',
  },
  {
    id: 'fr.a1.expressions-de-quantite.124', kind: 'sentence', level: 'a1',
    theme: 'expressions-de-quantite', fr: 'Tu mets trop de sucre dans ton thé.',
    en: 'You put too much sugar in your tea.',
    ipa: '/ty mɛ tʁo də sykʁ dɑ̃ tɔ̃ te/',
    notes: 'Thé keeps a silent h that never affects the pronunciation.',
    tags: ['silent-letter'], drills: ['dictation'], version: 1,
    why: 'the same, on trop de, so the dictée covers two of the four quantity words',
  },
  // ── au-restaurant: the ordering frames ───────────────────────────────────
  {
    id: 'fr.a1.au-restaurant.102', kind: 'phrase', level: 'a1', theme: 'au-restaurant',
    fr: 'Je voudrais...', en: 'I would like...', ipa: '/ʒə vu.dʁɛ/', respell: 'zhuh voo-DREH',
    tags: ['phrase', 'ordering'], drills: ['flashcard', 'voiceflash', 'review'],
    cardType: 'vocab', version: 1,
    why: 'the frame the canDo is written around, and the one the scene opens on',
  },
  {
    id: 'fr.a1.au-restaurant.112', kind: 'phrase', level: 'a1', theme: 'au-restaurant',
    fr: 'Je prends...', en: "I'll have...", ipa: '/ʒə pʁɑ̃/', respell: 'zhuh PRAHN',
    tags: ['phrase', 'ordering'], drills: ['flashcard', 'voiceflash', 'review'],
    cardType: 'vocab', version: 1,
    why: 'the second ordering frame, and the one the coffee pair is built on',
  },
  {
    id: 'fr.a1.au-restaurant.182', kind: 'sentence', level: 'a1', theme: 'au-restaurant',
    fr: 'Je prends un café après le repas.', en: "I'll have a coffee after the meal.",
    tags: ['ordering'], drills: ['sentence', 'flashcard', 'review'], version: 1,
    why: 'the countable half in the wild: one cup, ordered, after a meal',
  },
  {
    id: 'fr.a1.au-restaurant.184', kind: 'sentence', level: 'a1', theme: 'au-restaurant',
    fr: "Nous buvons de l'eau minérale.", en: 'We drink mineral water.',
    tags: ['partitif'], drills: ['sentence', 'flashcard', 'review'], version: 1,
    why: "de l' at the table, which is where the learner will produce it",
  },
  {
    id: 'fr.a1.au-restaurant.185', kind: 'sentence', level: 'a1', theme: 'au-restaurant',
    fr: 'Le serveur apporte du pain frais.', en: 'The waiter brings fresh bread.',
    tags: ['partitif'], drills: ['sentence', 'flashcard', 'review'], version: 1,
    why: 'du in a sentence that also carries le, so the sort drill has a real decision in it',
  },
  {
    id: 'fr.a1.au-restaurant.189', kind: 'sentence', level: 'a1', theme: 'au-restaurant',
    fr: 'Je ne mange pas de viande.', en: "I don't eat meat.",
    tags: ['negation'], drills: ['sentence', 'flashcard', 'review'], version: 1,
    why: 'the sentence a vegetarian learner needs on day one, and it is the negation rule',
  },
  // ── au-restaurant: the de + le trap set ──────────────────────────────────
  //
  // These are the fourth mission. Every one is `de + le` wearing the same three
  // letters as the partitive, in exactly the register this lesson teaches, and
  // a learner has been reading them since a1.01 without being told they are a
  // different animal.
  {
    id: 'fr.a1.au-restaurant.098', kind: 'word', level: 'a1', theme: 'au-restaurant',
    fr: 'le plat du jour', en: 'the dish of the day', ipa: '/pla dy ʒuʁ/',
    respell: 'luh plah dü ZHOOR', gender: 'm',
    tags: ['noun', 'ordering', 'food'], drills: ['flashcard', 'voiceflash', 'review'],
    cardType: 'vocab', version: 1,
    why: 'the cleanest de + le in the corpus, and the one on every menu in France',
  },
  {
    id: 'fr.a1.au-restaurant.145', kind: 'sentence', level: 'a1', theme: 'au-restaurant',
    fr: "L'addition arrive à la fin du repas.", en: 'The bill arrives at the end of the meal.',
    ipa: '/la.di.sjɔ̃ a.ʁiv a la fɛ̃ dy ʁə.pa/',
    notes: "'La addition' is never written that way, the article must elide to l'addition before the vowel.",
    tags: ['elision'], drills: ['dictation'], version: 1,
    why: 'de + le after a noun rather than after a preposition, which is the harder half to see',
  },
  {
    id: 'fr.a1.au-restaurant.176', kind: 'sentence', level: 'a1', theme: 'au-restaurant',
    fr: 'Quel est le plat du jour ?', en: "What is today's special?",
    tags: ['ordering'], drills: ['sentence', 'flashcard', 'review'], version: 1,
    why: 'the trap in a question the learner will ask out loud this week',
  },
];

export const IMPORTED_IDS: string[] = IMPORTED.map((r) => r.id);

/** The corpus Item, stripped of the import-only field. */
export function toImportedItem(r: ImportedRow): Item {
  const { why: _w, ...item } = r;
  return item;
}

/* ─── Reused, and verified in BOTH copies ──────────────────────────────────
 *
 * Items already inside the seed cut that this lesson teaches FROM. Nothing
 * about them changes and no shipped screen moves.
 *
 * Every one was checked against Postgres (published) AND seed.json on
 * 2026-08-05, with the `fr` compared between the two. The batch re-checks the
 * database before writing, because an id that is in the seed and not published
 * renders as an empty card rather than erroring.                              */

export const REUSED: { id: string; fr: string; why: string }[] = [
  // The partitive doing its job, in a verb frame. These are the sentences the
  // whole lesson is about and the corpus is rich in them.
  { id: 'fr.a1.cuisine.007', fr: 'Je mange du pain.', why: 'as clean a teaching sentence as this corpus contains' },
  { id: 'fr.a1.cuisine.004', fr: 'Je bois du café le matin.', why: 'du on a drink, in a habit frame' },
  { id: 'fr.a1.cuisine.199', fr: "Tu bois de l'eau avec ton repas.", why: "de l' in a full sentence, and long enough for the dictée" },
  { id: 'fr.a1.cuisine.227', fr: 'Il ajoute du sel dans la soupe.', why: 'du and la in one line, which is the fourth mission in miniature' },
  { id: 'fr.a1.cuisine.242', fr: 'Il aime manger du fromage après le repas.', why: 'du after a second verb, where a learner stops expecting it' },
  { id: 'fr.a1.cuisine.189', fr: 'Nous mangeons du pain frais chaque matin.', why: 'the dictée sentence for du' },
  { id: 'fr.a1.cuisine.240', fr: 'Nous achetons du pain à la boulangerie.', why: 'the shop the opening scene happens in' },
  { id: 'fr.a1.marche.005', fr: "J'aime acheter du fromage au marché.", why: 'aimer plus an infinitive, so aimer does not always mean le' },
  { id: 'fr.a1.marche.162', fr: 'Le poissonnier vend du saumon frais.', why: 'du from the seller side of the counter' },
  { id: 'fr.a1.marche.165', fr: 'Avez-vous de la monnaie pour vingt euros?', why: 'de la on a noun that is not food, which the canDo would otherwise leave the lesson short of' },
  { id: 'fr.a1.cafe.141', fr: 'Tu prends du lait dans ton café?', why: 'prendre plus du, the frame the coffee pair is built on' },
  { id: 'fr.a1.cafe.144', fr: "J'ai soif, je commande de l'eau.", why: "de l' with the reason in front of it" },
  { id: 'fr.a1.cafe.083', fr: 'Vous avez du wifi ?', why: 'du on something nobody could call food, said in a café' },
  { id: 'fr.a1.animaux.008', fr: "La vache mange de l'herbe.", why: "de l' on a noun a learner has already met" },
  { id: 'fr.a1.animaux.004', fr: 'Le chat boit du lait.', why: 'the simplest du sentence in the corpus' },
  { id: 'fr.a1.corps.246', fr: 'Tu bois du sirop contre la toux avant de dormir.', why: 'du outside the kitchen, in a chemist' },
  { id: 'fr.a1.routines.161', fr: 'Nous mangeons du pain avec du beurre.', why: 'two partitives in one sentence, both masculine' },
  // The countable half. Every one is a noun the learner met as vocabulary
  // months ago, which is what makes the contrast land rather than feel new.
  { id: 'fr.a1.cafe.009', fr: 'un café', why: 'the countable half of the lesson\'s central pair' },
  { id: 'fr.a1.cafe.011', fr: 'un croissant', why: 'a thing you can put on a table, next to du pain which is not' },
  { id: 'fr.a1.cafe.012', fr: 'une baguette', why: 'the feminine countable, against de la soupe' },
  { id: 'fr.a1.cafe.017', fr: 'une tasse', why: 'the container that makes coffee countable' },
  { id: 'fr.a1.cuisine.003', fr: 'une pomme', why: 'the countable a learner already sorts correctly' },
  { id: 'fr.a1.objets.015', fr: 'une bouteille', why: 'the container the quantity mission needs' },
  // Quantity, inside the seed cut.
  { id: 'fr.a1.cuisine.195', fr: 'Elle met un peu de sel dans la soupe.', why: 'un peu de, and the dictée sentence for it' },
  { id: 'fr.a1.cuisine.220', fr: "Tu manges trop de bonbons aujourd'hui.", why: 'trop de on a plural, so the rule is not only about mass nouns' },
  { id: 'fr.a1.marche.119', fr: 'Il y a beaucoup de monde au marché.', why: 'beaucoup de where an English speaker would say du monde' },
  { id: 'fr.a1.corps.206', fr: "Elle boit beaucoup d'eau parce qu'elle a soif.", why: "beaucoup d' before a vowel, which is the form nobody teaches" },
  // Containers, which are quantity words wearing a noun.
  { id: 'fr.a1.marche.154', fr: 'Combien coûte un kilo de tomates?', why: 'the container form in the question a learner asks at a stall' },
  { id: 'fr.a1.marche.126', fr: 'Le fromager coupe une tranche de fromage.', why: 'une tranche de, against du fromage one card earlier' },
  { id: 'fr.a1.marche.160', fr: 'Le fromager coupe un morceau de comté.', why: 'a second container on the same noun' },
  { id: 'fr.a1.marche.085', fr: "Un kilo, s'il vous plaît.", why: 'the container said out loud, with voiceflash already on it' },
  { id: 'fr.a1.cafe.127', fr: 'Nous partageons une part de gâteau.', why: 'une part de, which is the one an English speaker guesses wrong' },
  // Negation.
  { id: 'fr.a1.cuisine.214', fr: 'Je ne mange pas de fromage.', why: 'the negation the corpus already had, and the dictée sentence for it' },
  // The other du: de + le, which is four fifths of what a learner has been
  // reading. These are the fourth mission's other side.
  { id: 'fr.a1.marche.140', fr: "J'aime l'odeur du pain frais.", why: 'noun plus de plus noun, on the exact noun the partitive was taught on' },
  { id: 'fr.a1.maison.124', fr: 'La cuisine est à côté du salon.', why: 'a preposition, which is the commonest de + le of all' },
  { id: 'fr.a1.objets.165', fr: 'Le chargeur est près du lit.', why: 'près du, the shape a learner meets in every directions lesson' },
  { id: 'fr.a1.ecole.053', fr: "l'emploi du temps", why: 'a fixed compound the learner already owns as one word' },
  { id: 'fr.a1.marche.129', fr: 'Le vendeur crie les prix du jour.', why: 'du jour outside a menu, so it is not read as a restaurant idiom' },
  // Off its home ground. The canDo frames this lesson around food and it is
  // right to, but a rule about restaurants is not a rule about French.
  { id: 'fr.a1.sports-et-loisirs.115', fr: 'Je fais du sport chaque matin.', why: 'faire du, the same article with no food anywhere near it' },
  { id: 'fr.a1.famille.155', fr: 'Mon frère joue de la guitare.', why: 'jouer de la, the same again on an instrument' },
  { id: 'fr.a1.animaux.092', fr: "Le chien aboie quand il entend du bruit.", why: 'du bruit, a quantity of something you cannot see' },
];

export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

/* ─── Metalanguage the corpus stores as sentences, and this lesson refuses ──
 *
 * Three corpus rows are grammar notes wearing kind 'sentence'. They resolve
 * happily if a section names their id, and they are not French a learner would
 * ever say, so a listening or dictation mission built on one is nonsense to
 * hear and impossible to spell.
 *
 * The first one is far more dangerous here than it was for a1.11, because it
 * states THE EXACT RULE THIS LESSON TEACHES:
 *
 *   fr.a1.cuisine.008
 *   "Devant une quantité non comptée : du au masculin, de la au féminin,
 *    des au pluriel."
 *
 * It sits in `cuisine`, which is the theme this unit is now bound to, so it
 * will turn up in any search this lesson's author runs. It is a rule ABOUT
 * French rather than French, and it names « masculin » and « féminin », which
 * this lesson's own house rule bans from learner copy.
 *
 * Named here so the test can assert all three appear in no section of a1.29. */
export const METALANGUAGE_IDS: string[] = [
  // "Devant une quantité non comptée : du au masculin, de la au féminin, des au pluriel."
  'fr.a1.cuisine.008',
  // "Le pour le masculin, la pour le féminin, l' devant une voyelle."
  'fr.a1.maison.008',
  // "Après être, pas d'article devant la profession."
  'fr.a1.metiers.016',
];

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.29 puts on a card, with the respelling this lesson
 * stands behind.
 *
 * House convention: hyphenated syllables, stressed syllable capitalised, nasal
 * vowels closed with a SUPERSCRIPT n and never a plain n or m, /ø œ/ as EU,
 * /y/ as Ü, /e/ as AY against /ɛ/ as EH. Brackets are added by `respell()`
 * below, never stored, because the density validator checks the rendered form.
 *
 * a1.29 is luckier than a1.11 here: `du` is [dü] and carries no nasal. But
 * `un` is on every contrast card in the lesson, and its shipped respelling
 * across the corpus is `uhn`, which teaches a consonant that is not pronounced
 * and fails hasPlainNasalFor. The shipped rows are NOT edited: they are shared
 * with a1.01, a1.03, a1.11 and the flashcard hub. The `un` spellings below are
 * imported from a1.11's map rather than retyped, so the two lessons cannot
 * disagree about the word they both hang a contrast on.
 *
 * Verified on a Pixel 6 on 2026-08-05: the superscript n renders correctly,
 * unlike the U+203F tie that shipped broken in sons.10.                       */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

/** Keyed by the French form, because these are display strings rather than
 *  corpus rows: `le café` has no id of its own and exists only as the third
 *  column of a contrast that lives on one card. */
export const RESPELL: Record<string, Display> = {
  // The four forms.
  'du pain': D('du pain', 'dy pɛ̃', 'dü PAⁿ', 'some bread'),
  'du café': D('du café', 'dy ka.fe', 'dü ka-FAY', 'some coffee'),
  'du lait': D('du lait', 'dy lɛ', 'dü LEH', 'some milk'),
  'du riz': D('du riz', 'dy ʁi', 'dü REE', 'some rice'),
  'du fromage': D('du fromage', 'dy fʁɔ.maʒ', 'dü fro-MAHZH', 'some cheese'),
  'du vin': D('du vin', 'dy vɛ̃', 'dü VAⁿ', 'some wine'),
  'du sel': D('du sel', 'dy sɛl', 'dü SEL', 'some salt'),
  'du sucre': D('du sucre', 'dy sykʁ', 'dü SÜKR', 'some sugar'),
  'du beurre': D('du beurre', 'dy bœʁ', 'dü BEUR', 'some butter'),
  'de la soupe': D('de la soupe', 'də la sup', 'duh la SOOP', 'some soup'),
  'de la confiture': D('de la confiture', 'də la kɔ̃.fi.tyʁ', 'duh la koⁿ-fee-TÜR', 'some jam'),
  'de la salade': D('de la salade', 'də la sa.lad', 'duh la sa-LAD', 'some salad'),
  'de la monnaie': D('de la monnaie', 'də la mɔ.nɛ', 'duh la mo-NEH', 'some change'),
  "de l'eau": D("de l'eau", 'də lo', 'duh LOH', 'some water'),
  "de l'herbe": D("de l'herbe", 'də lɛʁb', 'duh LEHRB', 'some grass'),
  'des légumes': D('des légumes', 'de le.ɡym', 'day lay-GÜM', 'some vegetables'),

  // The countable half. `un` is a1.11's spelling, imported rather than retyped.
  'un café': D('un café', 'œ̃ ka.fe', 'uhⁿ ka-FAY', 'a coffee, one cup'),
  'un pain': D('un pain', 'œ̃ pɛ̃', 'uhⁿ PAⁿ', 'a loaf'),
  'un croissant': D('un croissant', 'œ̃ kʁwa.sɑ̃', 'uhⁿ krwa-SAHⁿ', 'a croissant'),
  'une baguette': D('une baguette', 'yn ba.ɡɛt', 'ün ba-GEHT', 'a baguette'),
  'une tasse': D('une tasse', 'yn tas', 'ün TAHSS', 'a cup'),
  'une pomme': D('une pomme', 'yn pɔm', 'ün POM', 'an apple'),
  'une bouteille': D('une bouteille', 'yn bu.tɛj', 'ün boo-TEY', 'a bottle'),

  // The definite, which is neither. a1.04's material, shown here only as the
  // third column of the contrast so the learner can see it is not the answer.
  'le café': D('le café', 'lə ka.fe', 'luh ka-FAY', 'coffee in general'),
  'le pain': D('le pain', 'lə pɛ̃', 'luh PAⁿ', 'bread in general'),

  // What a quantity leaves behind.
  'beaucoup de café': D('beaucoup de café', 'bo.ku də ka.fe', 'boh-KOO duh ka-FAY', 'a lot of coffee'),
  'un peu de sel': D('un peu de sel', 'œ̃ pø də sɛl', 'uhⁿ PEU duh SEL', 'a little salt'),
  'assez de pain': D('assez de pain', 'a.se də pɛ̃', 'a-SAY duh PAⁿ', 'enough bread'),
  'trop de sucre': D('trop de sucre', 'tʁo də sykʁ', 'TROH duh SÜKR', 'too much sugar'),
  'un kilo de tomates': D('un kilo de tomates', 'œ̃ ki.lo də tɔ.mat', 'uhⁿ kee-LOH duh to-MAT', 'a kilo of tomatoes'),
  "une bouteille d'eau": D("une bouteille d'eau", 'yn bu.tɛj do', 'ün boo-TEY DOH', 'a bottle of water'),
  'une tranche de fromage': D('une tranche de fromage', 'yn tʁɑ̃ʃ də fʁɔ.maʒ', 'ün TRAHⁿSH duh fro-MAHZH', 'a slice of cheese'),

  // What a negative leaves behind.
  'pas de pain': D('pas de pain', 'pa də pɛ̃', 'pa duh PAⁿ', 'no bread'),
  "pas d'eau": D("pas d'eau", 'pa do', 'pa DOH', 'no water'),
  'pas de fromage': D('pas de fromage', 'pa də fʁɔ.maʒ', 'pa duh fro-MAHZH', 'no cheese'),

  // The other du, which is de + le and not this word at all.
  'le plat du jour': D('le plat du jour', 'lə pla dy ʒuʁ', 'luh pla dü ZHOOR', 'the dish of the day'),
  "l'odeur du pain": D("l'odeur du pain", 'lɔ.dœʁ dy pɛ̃', 'lo-DEUR dü PAⁿ', 'the smell of the bread'),
  'à côté du salon': D('à côté du salon', 'a ko.te dy sa.lɔ̃', 'a ko-TAY dü sa-LOHⁿ', 'next to the living room'),
  'près du lit': D('près du lit', 'pʁɛ dy li', 'preh dü LEE', 'next to the bed'),

  // Off its home ground, which is the card that keeps this a rule about French.
  'du sport': D('du sport', 'dy spɔʁ', 'dü SPOR', 'sport, as an activity'),
  'de la guitare': D('de la guitare', 'də la ɡi.taʁ', 'duh la gee-TAR', 'the guitar, as a thing you play'),
  'du bruit': D('du bruit', 'dy bʁɥi', 'dü BRWEE', 'noise'),
};

/** The display quadruple for one French form. Throws rather than returning a
 *  blank, because a card built from a missing key renders as an empty line and
 *  nothing says so. */
export function display(fr: string): Display {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.29 corpus: no display data for "${fr}"`);
  return d;
}

/** The corpus Item, stripped of the lesson-only fields. `article`, `family` and
 *  `pairWith` are teaching data and live in the lesson, not on the shared row. */
export function toItem(w: PartitiveWord): Item {
  const { article: _a, family: _f, pairWith: _p, ...item } = w;
  return item;
}
