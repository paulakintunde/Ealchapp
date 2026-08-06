// The a1.07 corpus: what this lesson authors, what it reuses, and what it has to
// IMPORT from six themes that are not in the seed cut.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 15 authored entries, for the
// 34 imported rows, and for every respelling a1.07 puts on a screen. The lesson
// body reads `fr`, `ipa`, `respell` and `en` FROM HERE and never restates them,
// for the same reason etre-corpus.ts and articles-partitifs-corpus.ts do: before
// that convention one word's transcription was typed by hand in five sections
// and the five copies were free to drift.
//
// ── THE BRIEF'S CORPUS FIGURES ARE STALE, AND IN THE GENEROUS DIRECTION ────
//
// A1-07-AVOIR-PROMPT.md reports, measured 2026-08-05:
//
//     avoir peur     18 / 0      avoir raison   20 / 0
//     avoir tort      8 / 0      avoir envie de 17 / 0
//     avoir chaud     3 / 0      avoir sommeil   1 / 0
//
// and concludes that eight of the fourteen have zero seed coverage and would
// need authoring. Re-measured against Postgres on 2026-08-05 with a search that
// looks for a CONJUGATED form rather than the infinitive headword, the picture
// is different, and it changed the plan:
//
//     peur 21   raison 24   tort 12   envie 16   besoin 60   mal 64
//
// The brief's search found `emotions`, which holds the fourteen as bare
// headwords, and missed the two themes that hold them as SENTENCES:
//
//   `expressions-frequentes` (122 a1 rows) runs .057 to .065 as a clean block:
//   J'ai besoin d'eau. Tu as besoin d'aide ? Nous avons besoin de repos. J'ai
//   envie de dormir. Elle a envie d'un café. J'ai peur du noir. Tu as raison.
//   J'ai tort, excuse-moi. Eight short sentences, one per expression, in exactly
//   the register this lesson teaches. Nothing about them needed writing.
//
//   `presentation-personnelle` (179 a1 rows) is built for this unit's canDo and
//   nobody noticed: J'ai vingt ans. Il a vingt-huit ans. Elle a quarante ans.
//   Quel âge as-tu ? Quel âge avez-vous ? plus the possessions a first meeting
//   produces. The brief's age list is drawn entirely from `nombres`, which is
//   correct as far as it goes and misses the QUESTION, without which the age
//   rule is half a conversation.
//
// So this lesson authors 15 rows rather than the ten the brief anticipated, and
// what it authors is different: not the expressions, which exist, but the
// PARADIGM (which needs one frame and therefore cannot be assembled from rows
// written for six different themes) and the six minimal pairs the corpus has no
// equivalent of.
//
// ── Three sources, and why there are three ─────────────────────────────────
//
//   REUSED    41 rows already inside the seed cut. Nothing about them changes.
//   IMPORTED  34 rows that are PUBLISHED in Postgres and absent from the seed,
//             because seed-cut.config.ts bundles by theme and none of
//             `emotions`, `expressions-frequentes`, `mots-essentiels`,
//             `presentation-personnelle`, `verbes-essentiels` or `meteo` is on
//             the list.
//   AUTHORED  15 rows that do not exist anywhere.
//
// publish-content.ts pulls in every item a bundled lesson references, so the
// imported ids would arrive at the next publish. A publish is not available (see
// the hazard note in merge-avoir-into-seed.ts), and lesson-contract.test.ts
// resolves `itemIds` against seed.json, so the merge COPIES those rows in. This
// is a1.29's machinery, reused rather than reinvented.
//
// The imported rows are recorded VERBATIM as Postgres holds them, including
// respellings that predate the superscript-n convention (`ah-VWAHR FAN`,
// `ah-VWAHR reh-ZOHN`, `ah-VWAR duh lah SHAHNSS`). They are NOT corrected here.
// Correcting them would put the seed a version ahead of the database on rows
// this lesson does not own, which is the drift that has twice cost this project
// real work. Everything a1.07 DISPLAYS is respelled in RESPELL below, to the
// convention, and the lesson reads its screens from that map. Same call a1.11
// and a1.29 made about `uhn`.
//
// One consequence is worth naming rather than discovering. Several imported
// `notes` fields use the grammar vocabulary this lesson bans from learner copy
// ("Avoir phrase", "conjugaison"). Those notes are corpus rows, not lesson
// sections: they already reach learners today through the themed decks over the
// air, so copying them into the seed changes nothing about what anyone can see.
// The ban is on what a1.07 AUTHORS, and the test scopes it to sections and terms
// for exactly that reason.
//
// ── Why the authored rows are in `famille` ─────────────────────────────────
//
// a1.06 put its authored paradigm in `metiers` because that theme already held
// the material the lesson completed. The same argument lands on `famille` here:
// it already holds `Mon frère a dix ans.` at .010, which is the age rule this
// unit is half about, and it is INSIDE the seed cut, so the paradigm ships in
// the binary and works on a first launch with no network. That matters more for
// this lesson than for a1.29's: the six forms are the one thing a learner will
// come back to the app specifically to look up.
//
// Ids continue the theme's existing run, checked against BOTH Postgres and
// seed.json on 2026-08-05 (the two agree at .220 here). Ids are the SRS key.
// Nothing is ever renumbered; new entries append.
//
// The one authored non-sentence, `avoir l'air`, goes in `emotions` .109 instead,
// beside the thirteen other headwords rather than alone in a theme that has
// none. `avoir l'air` has ZERO rows in the entire corpus at any level, which is
// the only one of the fourteen that is genuinely missing.
//
// ── kind: every authored sentence is a `sentence`, deliberately ────────────
//
// flashhub-coverage.test.ts fails the build when two NON-sentence items in one
// theme share an `fr`, because the flashcard hub keys decks on `fr` and would
// serve the same card twice. This lesson authors six sentences that differ only
// in their first two words, which is the whole point of a paradigm frame.
// Authoring those as words or phrases would put the rule under pressure for no
// gain. They are sentences, stored as sentences, and the rule leaves them alone.
//
// gender.logic.ts measures a1.03's ten ending rules over `kind: 'word'` items
// carrying a gender, and a1-03-genre.test.ts re-measures every one of them from
// the seed on every run. a1.11 added two feminine nouns in -e and moved a1.03's
// count from 871 to 873, turning the suite red on a lesson nobody had touched.
// Nothing authored here is a gendered single-word noun, and the four imported
// rows that DO carry a gender (`avoir sommeil`, `avoir froid`, `avoir chaud`,
// `avoir raison`) are all two-word phrases, so none of them enters that
// population either. The batch and the merge both check it rather than assume.
//
// ── Respelling convention ─────────────────────────────────────────────────
//
// House convention: hyphenated syllables, stressed syllable capitalised, nasal
// vowels closed with a SUPERSCRIPT n and never a plain n or m, /ø œ/ as EU,
// /y/ as Ü, /e/ as AY against /ɛ/ as EH.
//
// This lesson is denser in nasals than any A1 lesson so far: `ans`, `faim`,
// `besoin`, `raison`, `chance`, `envie`, `honte`, `avons` and `ont` are all
// nasal, and `ont` is one of the six forms the unit exists to teach. The pair
// that matters most is `ils ont` [eel ZOHⁿ] against `ils sont` [eel SOHⁿ]: one
// consonant across a liaison, and the single hardest listening item here.
//
// Verified on a Pixel 6 on 2026-08-05: the superscript n renders correctly,
// unlike the U+203F tie that shipped broken in sons.10.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** A corpus entry plus the teaching data the lesson's screens need. */
export type AvoirSentence = Omit<Item, 'drills'> & {
  /** The form of avoir this row puts on screen. `null` on the rows that carry
   *  no form of it at all (the weather half of the chaud pair). Drives the
   *  paradigm so no screen retypes a form. */
  form: 'ai' | 'as' | 'a' | 'avons' | 'avez' | 'ont' | null;
  /** Which teaching family. Drives the tranche slices and the drill pools so
   *  neither restates a word list. */
  family: 'paradigm' | 'age' | 'eleven' | 'complement' | 'possession' | 'negation' | 'past';
  /** The other half of a pair that only means anything together: « J'ai une
   *  voiture » teaches nothing about negation until « Je n'ai pas de voiture »
   *  is beside it. */
  pairWith?: string;
  drills: Item['drills'];
};

const S: Item['drills'] = ['sentence', 'flashcard', 'review'];
const SV: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
const SVD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];
const W: Item['drills'] = ['flashcard', 'voiceflash', 'review'];

export const AVOIR: AvoirSentence[] = [
  /* ── The paradigm: six forms, one frame, nothing else moving ──────────────
   *
   * Six sentences and six forms. Everything after the verb is identical across
   * all six on purpose: the learner is being asked to hear ONE difference, and a
   * frame that also changed would hide it. This is a1.06's discipline applied to
   * the second of the two verbs, and it is why the paradigm could not be
   * assembled from existing rows: the corpus holds roughly five hundred a1
   * sentences opening on a form of avoir and no two of them share a frame.
   *
   * Only six, not nine. a1.05 taught that il/elle/on share a form and ils/elles
   * share another, and shipped a nine-row paradigm sheet doing it. a1.06 then
   * declined to re-derive it and named the sharing in its table cells instead.
   * This lesson inherits that decision unchanged.
   *
   * The frame is a present for somebody's birthday, which is the scene this
   * lesson opens on, and it is possession: the half of the canDo the reframe
   * does NOT cover. That is deliberate. The forms are met on plain having, and
   * the have/be swap then arrives as a separate idea rather than tangled into
   * the paradigm.
   *
   * Four of the six start on a vowel, so the pronoun binds to them out loud.
   * That is the one genuinely new pronunciation fact in the lesson and it is
   * what makes `ils ont` against `ils sont` a real pair rather than a spelling
   * curiosity.                                                                */
  {
    id: 'fr.a1.famille.221', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: "J'ai un cadeau pour Léa.", en: 'I have a present for Léa.',
    ipa: '/ʒe œ̃ ka.do puʁ le.a/', respell: 'zhay uhⁿ ka-DOH poor lay-A',
    form: 'ai', family: 'paradigm',
    tags: ['avoir', 'paradigm', 'je', 'nasal'], drills: SVD, audioRef: null, version: 1,
    notes: 'ai. Said more often than the other five together, because most of what a beginner says is about themselves.',
  },
  {
    id: 'fr.a1.famille.222', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: 'Tu as un cadeau pour Léa ?', en: 'Do you have a present for Léa?',
    ipa: '/ty a œ̃ ka.do puʁ le.a/', respell: 'tü ah uhⁿ ka-DOH poor lay-A',
    form: 'as', family: 'paradigm',
    tags: ['avoir', 'paradigm', 'tu', 'nasal'], drills: SVD, audioRef: null, version: 1,
    notes: 'as. Two letters, and the s is silent, so it sounds exactly like the a of il a.',
  },
  {
    id: 'fr.a1.famille.223', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: 'Il a un cadeau pour Léa.', en: 'He has a present for Léa.',
    ipa: '/i la œ̃ ka.do puʁ le.a/', respell: 'ee LA uhⁿ ka-DOH poor lay-A',
    form: 'a', family: 'paradigm',
    tags: ['avoir', 'paradigm', 'il', 'nasal'], drills: SVD, audioRef: null, version: 1,
    notes: 'a. One letter, no accent on it, and the l of il runs straight into it.',
  },
  {
    id: 'fr.a1.famille.224', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: 'Nous avons un cadeau pour Léa.', en: 'We have a present for Léa.',
    ipa: '/nu za.vɔ̃ œ̃ ka.do puʁ le.a/', respell: 'noo za-VOHⁿ uhⁿ ka-DOH poor lay-A',
    form: 'avons', family: 'paradigm',
    tags: ['avoir', 'paradigm', 'nous', 'liaison', 'nasal'], drills: SVD, audioRef: null, version: 1,
    notes: 'avons, and the silent s of nous wakes up as a z in front of the vowel.',
  },
  {
    id: 'fr.a1.famille.225', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: 'Vous avez un cadeau pour Léa ?', en: 'Do you have a present for Léa?',
    ipa: '/vu za.ve œ̃ ka.do puʁ le.a/', respell: 'voo za-VAY uhⁿ ka-DOH poor lay-A',
    form: 'avez', family: 'paradigm',
    tags: ['avoir', 'paradigm', 'vous', 'liaison', 'nasal'], drills: SVD, audioRef: null, version: 1,
    notes: 'avez, with the same join you already learned on vous êtes. One word out loud.',
  },
  {
    id: 'fr.a1.famille.226', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: 'Ils ont un cadeau pour Léa.', en: 'They have a present for Léa.',
    ipa: '/il zɔ̃ œ̃ ka.do puʁ le.a/', respell: 'eel ZOHⁿ uhⁿ ka-DOH poor lay-A',
    form: 'ont', family: 'paradigm',
    tags: ['avoir', 'paradigm', 'ils', 'liaison', 'nasal'], drills: SVD, audioRef: null, version: 1,
    notes: 'ont, and the join makes a z. Ils sont opens on an s instead, and that is the whole difference.',
  },

  /* ── The eleven, where the corpus had a headword and no short sentence ────
   *
   * Four rows. Every other one of the eleven already exists as a sentence in
   * `expressions-frequentes`, `emotions` or the seed itself, and re-authoring
   * one would be a second copy of a line this project already ships.
   *
   * These four are here because the lesson needs them in a specific SHAPE: two
   * or three words, so they can be a dictée target that spells the verb form
   * rather than a sentence (see DICTATION in avoir-lesson.ts), and bare, so a
   * card can put the French beside its English and the swap is the only thing
   * on screen.                                                               */
  {
    id: 'fr.a1.famille.227', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: "J'ai faim.", en: 'I am hungry.',
    ipa: '/ʒe fɛ̃/', respell: 'zhay FAⁿ',
    form: 'ai', family: 'eleven', pairWith: 'fr.a1.famille.234',
    tags: ['avoir', 'expression', 'have-not-be', 'nasal'], drills: SVD, audioRef: null, version: 1,
    notes: 'Hunger, had. The English is "I am hungry" and there is no word for am anywhere in this sentence.',
  },
  {
    id: 'fr.a1.famille.228', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: "J'ai chaud.", en: 'I am hot.',
    ipa: '/ʒe ʃo/', respell: 'zhay SHOH',
    form: 'ai', family: 'eleven',
    tags: ['avoir', 'expression', 'have-not-be', 'weather-trap'], drills: SVD, audioRef: null, version: 1,
    notes: 'About the person. Il fait chaud is about the room, and the two are not interchangeable.',
  },
  {
    id: 'fr.a1.famille.229', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: "J'ai sommeil.", en: 'I am sleepy.',
    ipa: '/ʒe sɔ.mɛj/', respell: 'zhay so-MEY',
    form: 'ai', family: 'eleven',
    tags: ['avoir', 'expression', 'have-not-be'], drills: SVD, audioRef: null, version: 1,
    notes: 'The rarest of the fourteen in this corpus: one row existed before this lesson, and it was the headword.',
  },
  {
    id: 'fr.a1.famille.230', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: 'Tu as froid ?', en: 'Are you cold?',
    ipa: '/ty a fʁwa/', respell: 'tü ah FRWAH',
    form: 'as', family: 'eleven',
    tags: ['avoir', 'expression', 'have-not-be', 'tu'], drills: SVD, audioRef: null, version: 1,
    notes: 'The question a French speaker asks before they open a window. The s of as is silent.',
  },
  {
    id: 'fr.a1.famille.231', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: "Elle a l'air fatiguée.", en: 'She looks tired.',
    ipa: '/ɛ la lɛʁ fa.ti.ɡe/', respell: 'el a LEHR fa-tee-GAY',
    form: 'a', family: 'eleven',
    tags: ['avoir', 'expression', 'have-not-be'], drills: SV, audioRef: null, version: 1,
    notes: "Avoir l'air is how French says somebody looks or seems. The corpus held no example of it at any level.",
  },

  /* ── Possession, and the negation pair that is a1.18's ground ─────────────
   *
   * Four rows and they are two pairs. The corpus is rich in possession
   * sentences and rich in negations, and it holds NO pair: nothing anywhere
   * shows the same sentence positive and negative, which is the only way the
   * collapse to `de` can be seen rather than asserted.
   *
   * `J'ai une voiture.` against `Je n'ai pas de voiture.` is a1.11's rule
   * arriving on a new verb. `J'ai faim.` against `Je n'ai pas faim.` is the
   * half nobody teaches: there was no article, so nothing collapsed, and never
   * « pas de faim ». On one screen the two of them are the best question in the
   * exam and the ground a1.18 stands on.                                     */
  {
    id: 'fr.a1.famille.232', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: "J'ai une voiture.", en: 'I have a car.',
    ipa: '/ʒe yn vwa.tyʁ/', respell: 'zhay ün vwa-TÜR',
    form: 'ai', family: 'possession', pairWith: 'fr.a1.famille.233',
    tags: ['avoir', 'possession'], drills: SVD, audioRef: null, version: 1,
    notes: 'A real possession: one noun after the form, and no second verb behind it.',
  },
  {
    id: 'fr.a1.famille.233', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: "Je n'ai pas de voiture.", en: 'I do not have a car.',
    ipa: '/ʒə nɛ pa də vwa.tyʁ/', respell: 'zhuh neh pa duh vwa-TÜR',
    form: 'ai', family: 'negation', pairWith: 'fr.a1.famille.232',
    tags: ['avoir', 'negation', 'possession'], drills: SV, audioRef: null, version: 1,
    notes: 'Une became de. The same collapse you met on un, une and des one lesson ago.',
  },
  {
    id: 'fr.a1.famille.234', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: "Je n'ai pas faim.", en: 'I am not hungry.',
    ipa: '/ʒə nɛ pa fɛ̃/', respell: 'zhuh neh pa FAⁿ',
    form: 'ai', family: 'negation', pairWith: 'fr.a1.famille.227',
    tags: ['avoir', 'negation', 'expression', 'nasal'], drills: SVD, audioRef: null, version: 1,
    notes: 'Nothing collapsed, because faim never had a word in front of it. Never pas de faim.',
  },

  /* ── emotions: the one headword that exists nowhere ───────────────────────
   *
   * Thirteen of the fourteen have a headword somewhere in the corpus. Searching
   * every level for a form of avoir followed by l'air returns nothing at all, so
   * this is authored and it goes beside its twelve neighbours in `emotions`
   * rather than alone in `famille`, which holds no headwords of this shape. */
  {
    id: 'fr.a1.emotions.109', kind: 'phrase', level: 'a1', theme: 'emotions',
    fr: "avoir l'air", en: 'to look, to seem',
    ipa: '/a.vwaʁ lɛʁ/', respell: 'a-vwahr LEHR',
    form: null, family: 'eleven',
    tags: ['expression', 'state'], drills: W, audioRef: null, version: 1,
    notes: "Il a l'air content. About how somebody appears rather than how they are.",
  },
];

/** Lookup by id. */
export const BY_ID: ReadonlyMap<string, AvoirSentence> = new Map(AVOIR.map((w) => [w.id, w]));

/** Every id this file authors, in sequence order. */
export const AVOIR_IDS: string[] = AVOIR.map((w) => w.id);

/** The ids of one teaching family, in sequence order. */
export const familyIds = (f: AvoirSentence['family']): string[] =>
  AVOIR.filter((w) => w.family === f).map((w) => w.id);

/** The ids carrying one FORM of avoir, in sequence order. */
export const formIds = (f: NonNullable<AvoirSentence['form']>): string[] =>
  AVOIR.filter((w) => w.form === f).map((w) => w.id);

/** The six forms, in paradigm order. Named here so the lesson, the batch and the
 *  test all count the same set rather than three hand lists. */
export const THE_SIX = ['ai', 'as', 'a', 'avons', 'avez', 'ont'] as const;

/** The six forms DERIVED from the paradigm sentences rather than typed. If a
 *  paradigm sentence is ever reworded onto a different form this moves with it,
 *  and the claim that all six are taught stops being one nobody checks. */
export const PARADIGM_FORMS: string[] = [
  ...new Set(AVOIR.filter((w) => w.family === 'paradigm').map((w) => w.form!)),
];

/** The pairs, as [positive, reduced]. Built from `pairWith` rather than listed,
 *  so a pair cannot be half-deleted: the test asserts every pair is reciprocal
 *  and that the two halves really do differ in the way the card claims. */
export const CONTRAST_PAIRS: [string, string][] = AVOIR
  .filter((w) => w.pairWith && (w.family === 'possession' || w.family === 'eleven'))
  .map((w) => [w.id, w.pairWith!] as [string, string]);

/* ─── THE FOURTEEN ──────────────────────────────────────────────────────────
 *
 * Named once, here, so the lesson, the reference sheet and the test all read the
 * same list rather than three hand lists that could quietly lose one. The split
 * is the whole shape of the lesson:
 *
 *   ELEVEN map English `be` onto French `have`, and the reframe covers all of
 *   them unchanged. Nothing else has to be remembered about any of them.
 *
 *   THREE do not. They land on need, want and hurt, and every one of them
 *   carries a little word that has to come too. Naming the second group is what
 *   turns fourteen facts into a shape.
 *
 * `itemId` is the headword card each one is taught from. Every one resolves
 * after this batch: eleven are imported, two are already in the seed, and
 * `avoir l'air` is authored above.                                            */

export type Expression = {
  fr: string;
  en: string;
  /** The English verb this maps onto. `be` for the eleven. */
  english: 'be' | 'need' | 'want' | 'hurt';
  /** The little word the three carry after them. */
  complement?: 'de' | 'à';
  /** The headword card. */
  itemId: string;
  /** A worked sentence, so the expression is met in use and not only in a list. */
  sentenceId: string;
};

export const FOURTEEN: Expression[] = [
  { fr: 'avoir faim', en: 'to be hungry', english: 'be', itemId: 'fr.a1.emotions.012', sentenceId: 'fr.a1.famille.227' },
  { fr: 'avoir soif', en: 'to be thirsty', english: 'be', itemId: 'fr.a1.emotions.013', sentenceId: 'fr.a1.cafe.174' },
  { fr: 'avoir sommeil', en: 'to be sleepy', english: 'be', itemId: 'fr.a1.emotions.016', sentenceId: 'fr.a1.famille.229' },
  { fr: 'avoir froid', en: 'to be cold', english: 'be', itemId: 'fr.a1.emotions.017', sentenceId: 'fr.a1.famille.230' },
  { fr: 'avoir chaud', en: 'to be hot', english: 'be', itemId: 'fr.a1.emotions.018', sentenceId: 'fr.a1.famille.228' },
  { fr: 'avoir raison', en: 'to be right', english: 'be', itemId: 'fr.a1.emotions.019', sentenceId: 'fr.a1.expressions-frequentes.064' },
  { fr: 'avoir tort', en: 'to be wrong', english: 'be', itemId: 'fr.a1.emotions.020', sentenceId: 'fr.a1.expressions-frequentes.065' },
  { fr: 'avoir honte', en: 'to be ashamed', english: 'be', itemId: 'fr.a1.emotions.037', sentenceId: 'fr.a1.emotions.037' },
  { fr: 'avoir peur', en: 'to be afraid', english: 'be', itemId: 'fr.a1.mots-essentiels.005', sentenceId: 'fr.a1.expressions-frequentes.062' },
  { fr: 'avoir de la chance', en: 'to be lucky', english: 'be', itemId: 'fr.a1.mots-essentiels.007', sentenceId: 'fr.a1.verbes-essentiels.051' },
  { fr: "avoir l'air", en: 'to look, to seem', english: 'be', itemId: 'fr.a1.emotions.109', sentenceId: 'fr.a1.famille.231' },
  { fr: 'avoir besoin de', en: 'to need', english: 'need', complement: 'de', itemId: 'fr.a1.expressions-frequentes.057', sentenceId: 'fr.a1.expressions-frequentes.058' },
  { fr: 'avoir envie de', en: 'to feel like', english: 'want', complement: 'de', itemId: 'fr.a1.emotions.076', sentenceId: 'fr.a1.expressions-frequentes.060' },
  { fr: 'avoir mal à', en: 'to hurt', english: 'hurt', complement: 'à', itemId: 'fr.a1.corps.008', sentenceId: 'fr.a1.corps.202' },
];

/** The eleven that swap English `be` for French `have`. */
export const THE_ELEVEN = FOURTEEN.filter((e) => e.english === 'be');
/** The three that do not, and carry a complement. */
export const THE_THREE = FOURTEEN.filter((e) => e.english !== 'be');

/* ─── IMPORTED: published in Postgres, absent from the seed ─────────────────
 *
 * Recorded verbatim, as `select ... from content_items where id = ...` returned
 * them on 2026-08-05, so the merge script can write them into seed.json without
 * a database. The batch re-reads Postgres and fails if any row has moved, which
 * is what keeps this copy true.
 *
 * Nothing here is edited. See the header on why the pre-convention respellings
 * are left exactly as they ship.                                              */

export type ImportedRow = Item & { why: string };

export const IMPORTED: ImportedRow[] = [
  // ── emotions: the headwords, which is the deck this lesson is built on ────
  {
    id: 'fr.a1.emotions.012', kind: 'word', level: 'a1', theme: 'emotions',
    fr: 'avoir faim', en: 'to be hungry', ipa: '/a.vwaʁ fɛ̃/', respell: 'ah-VWAHR FAN',
    notes: "Literally: to have hunger. J'ai faim = I am hungry.",
    tags: ['expression', 'state'], drills: ['flashcard', 'voiceflash'], cardType: 'vocab', version: 1,
    why: 'the first of the eleven, and the one an English speaker gets wrong first',
  },
  {
    id: 'fr.a1.emotions.013', kind: 'word', level: 'a1', theme: 'emotions',
    fr: 'avoir soif', en: 'to be thirsty', ipa: '/a.vwaʁ swaf/', respell: 'ah-VWAHR SWAHF',
    notes: "Literally: to have thirst. J'ai soif = I am thirsty.",
    tags: ['expression', 'state'], drills: ['flashcard', 'voiceflash'], cardType: 'vocab', version: 1,
    why: 'the pair of faim, and already glossed with the swap this lesson teaches',
  },
  {
    id: 'fr.a1.emotions.016', kind: 'word', level: 'a1', theme: 'emotions',
    fr: 'avoir sommeil', en: 'to be sleepy', ipa: '/avwaʁ sɔmɛj/', respell: 'ah-VWAHR soh-MAY',
    gender: 'm', notes: "Avoir phrase: J'ai sommeil, I am sleepy.",
    tags: ['feeling', 'avoir-phrase'], drills: ['flashcard', 'voiceflash'], cardType: 'vocab', version: 1,
    why: 'the rarest of the fourteen: this is the ONLY row for it in the entire corpus',
  },
  {
    id: 'fr.a1.emotions.017', kind: 'word', level: 'a1', theme: 'emotions',
    fr: 'avoir froid', en: 'to be cold', ipa: '/avwaʁ fʁwa/', respell: 'ah-VWAHR FRWAH',
    gender: 'm', notes: "Avoir phrase: J'ai froid, I am cold.",
    tags: ['feeling', 'avoir-phrase'], drills: ['flashcard', 'voiceflash'], cardType: 'vocab', version: 1,
    why: 'half of the froid/chaud pair the weather trap turns on',
  },
  {
    id: 'fr.a1.emotions.018', kind: 'word', level: 'a1', theme: 'emotions',
    fr: 'avoir chaud', en: 'to be hot', ipa: '/avwaʁ ʃo/', respell: 'ah-VWAHR SHOH',
    gender: 'm', notes: "Avoir phrase: J'ai chaud, I am hot.",
    tags: ['feeling', 'avoir-phrase'], drills: ['flashcard', 'voiceflash'], cardType: 'vocab', version: 1,
    why: 'the other half, and the one that is wrong in two directions at once',
  },
  {
    id: 'fr.a1.emotions.019', kind: 'word', level: 'a1', theme: 'emotions',
    fr: 'avoir raison', en: 'to be right', ipa: '/avwaʁ ʁɛzɔ̃/', respell: 'ah-VWAHR reh-ZOHN',
    gender: 'f', notes: 'Avoir phrase: Tu as raison, you are right.',
    tags: ['feeling', 'avoir-phrase'], drills: ['flashcard', 'voiceflash'], cardType: 'vocab', version: 1,
    why: 'the one a learner will hear said to them within a week of arriving',
  },
  {
    id: 'fr.a1.emotions.020', kind: 'word', level: 'a1', theme: 'emotions',
    fr: 'avoir tort', en: 'to be wrong', ipa: '/avwaʁ tɔʁ/', respell: 'ah-VWAHR TOR',
    gender: 'm', notes: "Avoir phrase: J'ai tort, I am wrong.",
    tags: ['feeling', 'avoir-phrase'], drills: ['flashcard', 'voiceflash'], cardType: 'vocab', version: 1,
    why: 'the opposite of raison, so the pair is met as a pair',
  },
  {
    id: 'fr.a1.emotions.037', kind: 'phrase', level: 'a1', theme: 'emotions',
    fr: 'avoir honte', en: 'to be ashamed', ipa: 'avwaʁ ɔ̃t', respell: 'a-VWAHR OHNT',
    notes: "J'ai honte means I am ashamed. Uses avoir, not être.",
    tags: ['emotions', 'phrases'], drills: ['flashcard', 'voiceflash'], cardType: 'vocab', version: 1,
    why: 'the eleventh of the eleven, and already glossed with the avoir-not-être note',
  },
  {
    id: 'fr.a1.emotions.076', kind: 'phrase', level: 'a1', theme: 'emotions',
    fr: 'avoir envie de', en: 'to feel like, to want to', ipa: 'a.vwaʁ ɑ̃.vi də',
    tags: [], drills: ['voiceflash', 'review'], version: 1,
    why: 'the second of the three that take a complement, and the de is already in the headword',
  },
  {
    id: 'fr.a1.emotions.042', kind: 'sentence', level: 'a1', theme: 'emotions',
    fr: 'Il a peur du noir.', en: "He's afraid of the dark.", ipa: 'il a pœʁ dy nwaʁ',
    notes: '“a” (from avoir) sounds like “à” but takes no accent here because it\'s the verb.',
    tags: ['homophone'], drills: ['dictation'], version: 1,
    why: 'peur in the third person, and one of the only short avoir sentences in the corpus carrying a dictation tag',
  },
  {
    id: 'fr.a1.emotions.091', kind: 'sentence', level: 'a1', theme: 'emotions',
    fr: "Elle a chaud dans la salle d'attente.", en: 'She is hot in the waiting room.',
    ipa: 'ɛl a ʃo dɑ̃ la sal da.tɑ̃t',
    tags: [], drills: ['sentence', 'review'], version: 1,
    why: 'chaud about a PERSON in a room, which is exactly the sentence the weather trap sits next to',
  },
  {
    id: 'fr.a1.emotions.096', kind: 'sentence', level: 'a1', theme: 'emotions',
    fr: 'Il a froid dans le bureau.', en: 'He is cold in the office.',
    ipa: 'il a fʁwa dɑ̃ lə by.ʁo',
    notes: '"froid" se termine par un d muet, on ne l\'entend pas',
    tags: [], drills: ['dictation'], version: 1,
    why: 'the same again for froid, so the pair is shown in the same frame',
  },
  {
    id: 'fr.a1.emotions.100', kind: 'sentence', level: 'a1', theme: 'emotions',
    fr: 'Elle a soif pendant la marche.', en: 'She is thirsty during the walk.',
    ipa: 'ɛl a swaf pɑ̃.dɑ̃ la maʁʃ',
    notes: '"soif" se termine par un f qu\'on prononce bien',
    tags: [], drills: ['dictation'], version: 1,
    why: 'soif in the third person, which the seed has only in a subordinate clause',
  },
  {
    id: 'fr.a1.emotions.105', kind: 'sentence', level: 'a1', theme: 'emotions',
    fr: "Nous avons peur de l'orage.", en: 'We are afraid of the storm.',
    ipa: 'nu.z‿a.vɔ̃ pœʁ də lɔ.ʁaʒ',
    notes: "l'apostrophe devant orage marque l'élision de la",
    tags: [], drills: ['dictation'], version: 1,
    why: 'an expression on the nous form, which is where the liaison and the expression arrive together',
  },
  {
    id: 'fr.a1.emotions.087', kind: 'sentence', level: 'a1', theme: 'emotions',
    fr: 'Nous avons faim après le travail.', en: 'We are hungry after work.',
    ipa: 'nu.z‿a.vɔ̃ fɛ̃ a.pʁɛ lə tʁa.vaj',
    tags: [], drills: ['sentence', 'review'], version: 1,
    why: 'faim on nous, so the eleven are not all met in the first person',
  },

  // ── expressions-frequentes: the block that made authoring unnecessary ─────
  {
    id: 'fr.a1.expressions-frequentes.057', kind: 'sentence', level: 'a1', theme: 'expressions-frequentes',
    fr: "J'ai besoin d'eau.", en: 'I need water.',
    tags: [], drills: ['sentence'], version: 1,
    why: 'besoin de with the de elided, which is the form a learner produces wrong first',
  },
  {
    id: 'fr.a1.expressions-frequentes.058', kind: 'sentence', level: 'a1', theme: 'expressions-frequentes',
    fr: "Tu as besoin d'aide ?", en: 'Do you need help?',
    tags: [], drills: ['sentence'], version: 1,
    why: 'the question form of besoin de, and a tu as the corpus is short of',
  },
  {
    id: 'fr.a1.expressions-frequentes.059', kind: 'sentence', level: 'a1', theme: 'expressions-frequentes',
    fr: 'Nous avons besoin de repos.', en: 'We need rest.',
    tags: [], drills: ['sentence'], version: 1,
    why: 'besoin de before a consonant, so the pair with d apostrophe eau is visible',
  },
  {
    id: 'fr.a1.expressions-frequentes.060', kind: 'sentence', level: 'a1', theme: 'expressions-frequentes',
    fr: "J'ai envie de dormir.", en: 'I feel like sleeping.',
    tags: [], drills: ['sentence'], version: 1,
    why: 'envie de in front of a verb, which is where a learner meets it most',
  },
  {
    id: 'fr.a1.expressions-frequentes.061', kind: 'sentence', level: 'a1', theme: 'expressions-frequentes',
    fr: "Elle a envie d'un café.", en: 'She feels like having a coffee.',
    tags: [], drills: ['sentence'], version: 1,
    why: 'envie de in front of a noun, and the elision again',
  },
  {
    id: 'fr.a1.expressions-frequentes.062', kind: 'sentence', level: 'a1', theme: 'expressions-frequentes',
    fr: "J'ai peur du noir.", en: "I'm afraid of the dark.",
    tags: [], drills: ['sentence'], version: 1,
    why: 'peur in the first person, and the shortest one in the corpus',
  },
  {
    id: 'fr.a1.expressions-frequentes.064', kind: 'sentence', level: 'a1', theme: 'expressions-frequentes',
    fr: 'Tu as raison.', en: 'You are right.',
    tags: [], drills: ['sentence'], version: 1,
    why: 'three words, the tu form, and one of the eleven. Nothing needed writing.',
  },
  {
    id: 'fr.a1.expressions-frequentes.065', kind: 'sentence', level: 'a1', theme: 'expressions-frequentes',
    fr: "J'ai tort, excuse-moi.", en: "I'm wrong, sorry.",
    tags: [], drills: ['sentence'], version: 1,
    why: 'tort said out loud, in the situation it is actually said in',
  },

  // ── mots-essentiels: the two headwords emotions does not carry ────────────
  {
    id: 'fr.a1.mots-essentiels.005', kind: 'phrase', level: 'a1', theme: 'mots-essentiels',
    fr: 'avoir peur', en: 'to be afraid', ipa: '/avwaʁ pœʁ/', respell: 'ah-VWAR PUR',
    tags: ['idiom', 'avoir'], drills: ['flashcard', 'voiceflash'], version: 1,
    why: 'the peur headword, which emotions holds only as sentences',
  },
  {
    id: 'fr.a1.mots-essentiels.007', kind: 'phrase', level: 'a1', theme: 'mots-essentiels',
    fr: 'avoir de la chance', en: 'to be lucky', ipa: '/avwaʁ də la ʃɑ̃s/', respell: 'ah-VWAR duh lah SHAHNSS',
    tags: ['idiom', 'avoir'], drills: ['flashcard', 'voiceflash'], version: 1,
    why: 'the only headword for chance anywhere, and the one expression that carries an article of its own',
  },
  {
    id: 'fr.a1.mots-essentiels.043', kind: 'sentence', level: 'a1', theme: 'mots-essentiels',
    fr: 'Ils ont faim, ils veulent manger tout de suite.', en: "They're hungry, they want to eat right away.",
    ipa: 'il.z‿ɔ̃ fɛ̃ il vœl mɑ̃.ʒe tu də sɥit',
    notes: '"Ont" (they have) is the verb form, not the pronoun "on".',
    tags: ['homophone'], drills: ['dictation'], version: 1,
    why: 'ils ont carrying an expression, and its own note already names the ont/on confusion',
  },

  // ── presentation-personnelle: the theme this unit\'s canDo was written for ─
  {
    id: 'fr.a1.presentation-personnelle.006', kind: 'sentence', level: 'a1', theme: 'presentation-personnelle',
    fr: "J'ai vingt ans.", en: 'I am twenty years old.', ipa: 'ʒe vɛ̃.t‿ɑ̃',
    notes: '“vingt” links to “ans” with a silent t that becomes pronounced.',
    tags: ['liaison'], drills: ['dictation'], version: 1,
    why: 'the age sentence in the FIRST person, which nombres does not hold and which is the one a learner has to say',
  },
  {
    id: 'fr.a1.presentation-personnelle.007', kind: 'sentence', level: 'a1', theme: 'presentation-personnelle',
    fr: 'Il a vingt-huit ans.', en: 'He is twenty-eight years old.', ipa: 'i.l‿a vɛ̃t.ɥi.t‿ɑ̃',
    notes: '“vingt-huit” is written with a hyphen between the two numbers.',
    tags: ['orthographe'], drills: ['dictation'], version: 1,
    why: 'the same on the il form, with the hyphen note the numbers lessons already taught',
  },
  {
    id: 'fr.a1.presentation-personnelle.009', kind: 'sentence', level: 'a1', theme: 'presentation-personnelle',
    fr: 'Quel âge as-tu ?', en: 'How old are you?', ipa: 'kɛl ɑʒ a ty',
    notes: '“âge” needs a circumflex accent on the a.',
    tags: ['accent'], drills: ['dictation'], version: 1,
    why: 'THE QUESTION. The age rule is half a conversation without it, and nombres holds only the a-t-il form',
  },
  {
    id: 'fr.a1.presentation-personnelle.010', kind: 'sentence', level: 'a1', theme: 'presentation-personnelle',
    fr: 'Quel âge avez-vous ?', en: 'How old are you?', ipa: 'kɛl ɑʒ a.ve vu',
    notes: 'Leave a space before the question mark in “vous ?”.',
    tags: ['ponctuation'], drills: ['dictation'], version: 1,
    why: 'the polite half of the same question, which is the one a learner will actually be asked',
  },
  {
    id: 'fr.a1.presentation-personnelle.161', kind: 'phrase', level: 'a1', theme: 'presentation-personnelle',
    fr: "j'ai vingt-deux ans", en: "I'm twenty-two years old",
    tags: [], drills: ['flashcard', 'voiceflash'], version: 1,
    why: 'the age frame as a headword the mic can score, which no other theme has',
  },

  // ── verbes-essentiels: the one expression with no seed sentence ───────────
  {
    id: 'fr.a1.verbes-essentiels.051', kind: 'sentence', level: 'a1', theme: 'verbes-essentiels',
    fr: 'Vous avez de la chance.', en: 'You are lucky.', ipa: 'vu.z‿a.ve də la ʃɑ̃s',
    tags: ['conjugaison'], drills: ['dictation'], version: 1,
    why: 'de la chance in a sentence, on the vous form, with its liaison. The only one at any level.',
  },

  // ── meteo: the other half of the chaud trap ───────────────────────────────
  {
    id: 'fr.a1.meteo.029', kind: 'phrase', level: 'a1', theme: 'meteo',
    fr: 'il fait chaud', en: 'it is hot', ipa: 'il fɛ ʃo', respell: 'EEL FEH SHOH',
    tags: ['weather', 'phrase'], drills: ['flashcard', 'voiceflash'], cardType: 'vocab', version: 1,
    why: 'the weather half of the chaud trap. Authoring one would have meant writing a faire form this lesson does not teach.',
  },

  // ── questions: the shortest expression question in the corpus ─────────────
  {
    id: 'fr.a1.questions.338', kind: 'sentence', level: 'a1', theme: 'questions',
    fr: 'Tu as faim ?', en: 'Are you hungry?',
    notes: '{"tiles":[{"w":"Tu","t":"you"},{"w":"as","t":"are"},{"w":"faim ?","t":"hungry"}]}',
    tags: [], drills: ['sentence', 'flashcard', 'review'], version: 1,
    why: 'three words, and its own sentence-builder tiles already gloss `as` as "are", which is the swap in miniature',
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
 * Items already inside the seed cut that this lesson teaches FROM. Nothing about
 * them changes and no shipped screen moves.
 *
 * Every one was checked against Postgres (published) AND seed.json on
 * 2026-08-05, with the `fr` compared between the two. The batch re-checks the
 * database before writing, because an id that is in the seed and not published
 * renders as an empty card rather than erroring.                              */

export const REUSED: { id: string; fr: string; why: string }[] = [
  // The age rule, already written, and written in the theme three earlier
  // lessons were built on. The learner owns every number in this list.
  { id: 'fr.a1.nombres.024', fr: 'Quel âge a-t-elle ?', why: 'the question in the third person, from the numbers track' },
  { id: 'fr.a1.nombres.025', fr: 'Quel âge a-t-il ?', why: 'the same for a man' },
  { id: 'fr.a1.nombres.026', fr: 'Il a soixante ans.', why: 'the plainest age sentence in the corpus' },
  { id: 'fr.a1.nombres.027', fr: 'Mon père a soixante-cinq ans.', why: 'an age about somebody else, in a family frame' },
  { id: 'fr.a1.nombres.043', fr: 'Mon frère a vingt et un ans.', why: 'the et un that a1.27 taught, reused rather than re-explained' },
  { id: 'fr.a1.nombres.051', fr: "Elle a quatre-vingt-un ans aujourd'hui.", why: 'quatre-vingt-un, which is a1.27 material carried into a real frame' },
  { id: 'fr.a1.nombres.056', fr: 'Ma grand-mère a quatre-vingt-dix ans.', why: 'the hardest number in French, in the easiest frame' },
  { id: 'fr.a1.nombres.121', fr: 'Mon voisin a soixante-dix-sept ans mais il court encore.', why: 'an age inside a longer sentence, so it is not only ever a two-word answer' },
  { id: 'fr.a1.nombres.175', fr: 'Le chien de mon grand-père a treize ans.', why: 'an age that is not a person, which is where a learner stops expecting avoir' },
  { id: 'fr.a1.nombres.237', fr: 'Ma sœur a soixante et onze ans.', why: 'soixante et onze, and a second et to compare with vingt et un' },
  { id: 'fr.a1.famille.010', fr: 'Mon frère a dix ans.', why: 'the age sentence already in this lesson\'s own theme, authored long before it' },
  { id: 'fr.a1.ecole.263', fr: 'Elle a six ans et demi.', why: 'the half-year, which the corpus hands over for free and no course teaches' },

  // The eleven, in the seed already.
  { id: 'fr.a1.cafe.174', fr: "J'ai soif.", why: 'two words, and the shortest of the eleven anywhere' },
  { id: 'fr.a1.cafe.144', fr: "J'ai soif, je commande de l'eau.", why: 'the expression with its consequence attached, which is how it is really said' },
  { id: 'fr.a1.corps.107', fr: "J'ai froid aux pieds.", why: 'froid with a body part, so it sits beside avoir mal without being it' },
  { id: 'fr.a1.corps.206', fr: "Elle boit beaucoup d'eau parce qu'elle a soif.", why: 'an expression in a subordinate clause, where the form is easiest to miss' },
  { id: 'fr.a1.cuisine.185', fr: 'avoir faim', why: 'the faim headword that is already in the seed cut, so the deck works offline' },

  // The three that take a complement.
  { id: 'fr.a1.corps.007', fr: "J'ai mal à la tête.", why: 'the highest-frequency of the fourteen in this corpus, and à la in full' },
  { id: 'fr.a1.corps.008', fr: 'Elle a mal au dos.', why: 'the same with à and le merged into au, which is the half nobody explains' },
  { id: 'fr.a1.corps.202', fr: "J'ai mal au ventre après le déjeuner.", why: 'mal au in a sentence with a reason behind it' },
  { id: 'fr.a1.corps.214', fr: "Le bébé pleure parce qu'il a mal au ventre.", why: 'mal about somebody who cannot say it themselves' },
  { id: 'fr.a1.marche.173', fr: "J'ai besoin d'un kilo d'oignons.", why: 'besoin de in the seed cut, with two elisions in one line' },
  { id: 'fr.a1.objets.167', fr: "Nous avons besoin d'une lampe de poche.", why: 'besoin de on the nous form, in the seed already' },

  // Possession, which is the other half of the canDo and the frame the paradigm
  // is built in. All six forms exist here in the seed already.
  { id: 'fr.a1.dictee.174', fr: 'Tu as un crayon rouge.', why: 'tu as with a countable object, from the dictation theme' },
  { id: 'fr.a1.dictee.178', fr: 'Vous avez une règle jaune.', why: 'vous avez, and its liaison' },
  { id: 'fr.a1.dictee.179', fr: 'Ils ont des feuilles blanches.', why: 'ils ont, and its liaison, which is the pair against ils sont' },
  { id: 'fr.a1.dictee.180', fr: 'Elles ont des stylos noirs.', why: 'elles ont, so the sixth form is met twice' },
  { id: 'fr.a1.objets.110', fr: 'Ils ont un nouveau téléphone.', why: 'ils ont on a singular object, so the form is not read as a plural marker' },
  { id: 'fr.a1.objets.114', fr: 'Elles ont de nouveaux gants.', why: 'elles ont again, in the seed cut' },
  { id: 'fr.a1.objets.166', fr: 'Tu as un stylo pour moi?', why: 'the question a learner asks in their first week' },
  { id: 'fr.a1.ecole.217', fr: 'Tu as un nouveau sac ce matin.', why: 'tu as, which the corpus is thinner in than any other form' },
  { id: 'fr.a1.ecole.222', fr: 'Vous avez combien de cours aujourd\'hui ?', why: 'vous avez in a question with a quantity behind it' },
  { id: 'fr.a1.ecole.287', fr: 'Ils ont un exercice à faire ce soir.', why: 'ils ont with something owed rather than owned' },
  { id: 'fr.a1.cafe.028', fr: 'Vous avez une terrasse ?', why: 'the vous avez question that opens every café exchange in France' },
  { id: 'fr.a1.cafe.083', fr: 'Vous avez du wifi ?', why: 'the same question a learner will really ask, and it carries voiceflash' },
  { id: 'fr.a1.corps.204', fr: 'Tu as de la fièvre ce matin ?', why: 'having a symptom, which is possession wearing a health frame' },
  { id: 'fr.a1.corps.225', fr: 'Vous devez boire beaucoup d\'eau quand vous avez de la fièvre.', why: 'vous avez inside a longer sentence, where a learner stops tracking the verb' },

  // The past-tense ambush. Every one of these opens on a form of avoir and is
  // not about having anything, which is the mission they belong to.
  { id: 'fr.a1.objets.021', fr: "J'ai perdu mes clés ce matin.", why: 'the clearest one in the seed: j ai plus a second verb, and no possession in it' },
  { id: 'fr.a1.deplacements.261', fr: 'Elle a pris le bus ce matin.', why: 'the same on the a form, where the reading reflex is strongest' },
  { id: 'fr.a1.deplacements.283', fr: 'Ils ont pris le premier bus du matin.', why: 'ils ont in front of a verb, against ils ont in front of a noun one card earlier' },
  { id: 'fr.a1.nombres.062', fr: 'Nous avons réservé une table pour six personnes.', why: 'the one that looks most like possession and is not: a table appears in it' },
];

export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

/* ─── Metalanguage the corpus stores as sentences, and this lesson refuses ──
 *
 * Corpus rows that are grammar notes wearing kind 'sentence'. They resolve
 * happily if a section names their id, and they are not French a learner would
 * ever say, so a listening or dictation mission built on one is nonsense to hear
 * and impossible to spell.
 *
 * The first is far more dangerous here than it was for a1.11 or a1.29, because
 * it states THE EXACT RULE THIS LESSON TEACHES, in French, with the grammar
 * vocabulary this lesson bans from learner copy:
 *
 *   fr.a2.emotions.013
 *   "On utilise avoir avec peur, faim et honte, et être avec triste, content
 *    et fier."
 *
 * It sits in `emotions`, which is the theme half this lesson's headwords come
 * from, so it will turn up in any search a later author runs.
 *
 * Named here so the test can assert all three appear in no section of a1.07. */
export const METALANGUAGE_IDS: string[] = [
  // "On utilise avoir avec peur, faim et honte, et être avec triste, content et fier."
  'fr.a2.emotions.013',
  // "Devant une quantité non comptée : du au masculin, de la au féminin, des au pluriel."
  'fr.a1.cuisine.008',
  // "Après être, pas d'article devant la profession."
  'fr.a1.metiers.016',
];

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.07 puts on a card, with the respelling this lesson stands
 * behind. Brackets are added by `respell()` below, never stored, because the
 * density validator checks the rendered form.
 *
 * a1.07 is the most nasal-dense A1 lesson so far. `ans`, `faim`, `besoin`,
 * `raison`, `chance`, `envie`, `honte`, `avons` and `ont` are all nasal, and
 * `ont` is one of the six forms the unit exists to teach. The shipped corpus
 * respells the fourteen with plain n (`ah-VWAHR FAN`, `ah-VWAHR reh-ZOHN`,
 * `ah-VWAR duh lah SHAHNSS`), all three of which fail hasPlainNasalFor, and
 * those rows are shared with the flashcard hub and with a2 lessons. They are NOT
 * edited. The lesson reads its screens from this map instead, which is the same
 * call a1.11 and a1.29 made about `uhn`, and the `un` spellings below are
 * imported from a1.29's map rather than retyped so the three lessons cannot
 * disagree about a word they all hang a contrast on.                          */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

/** Keyed by the French form, because these are display strings rather than
 *  corpus rows: `ils sont` has no id of its own in this lesson and exists only
 *  as the wrong half of a contrast that lives on one card. */
export const RESPELL: Record<string, Display> = {
  // The six forms, bare. This is the paradigm mission's whole content.
  "j'ai": D("j'ai", 'ʒe', 'ZHAY', 'I have'),
  'tu as': D('tu as', 'ty a', 'tü AH', 'you have'),
  'il a': D('il a', 'i la', 'ee LA', 'he has'),
  'nous avons': D('nous avons', 'nu za.vɔ̃', 'noo za-VOHⁿ', 'we have'),
  'vous avez': D('vous avez', 'vu za.ve', 'voo za-VAY', 'you have'),
  'ils ont': D('ils ont', 'il zɔ̃', 'eel ZOHⁿ', 'they have'),
  // The pair that is the hardest listening item in the lesson, and the one that
  // belongs to a1.06 and a1.07 at once.
  'ils sont': D('ils sont', 'il sɔ̃', 'eel SOHⁿ', 'they are'),
  'avoir': D('avoir', 'a.vwaʁ', 'a-VWAHR', 'to have'),

  // The age rule.
  'ans': D('ans', 'ɑ̃', 'AHⁿ', 'years'),
  "j'ai vingt ans": D("j'ai vingt ans", 'ʒe vɛ̃ tɑ̃', 'zhay vaⁿ-TAHⁿ', 'I am twenty'),
  'quel âge': D('quel âge', 'kɛl ɑʒ', 'kel AHZH', 'what age'),

  // The eleven. Every one of these is respelled here rather than read from its
  // corpus row, because eleven of the fourteen shipped rows break the nasal
  // convention and all of them are shared with other lessons.
  'avoir faim': D('avoir faim', 'a.vwaʁ fɛ̃', 'a-vwahr FAⁿ', 'to be hungry'),
  'avoir soif': D('avoir soif', 'a.vwaʁ swaf', 'a-vwahr SWAF', 'to be thirsty'),
  'avoir sommeil': D('avoir sommeil', 'a.vwaʁ sɔ.mɛj', 'a-vwahr so-MEY', 'to be sleepy'),
  'avoir froid': D('avoir froid', 'a.vwaʁ fʁwa', 'a-vwahr FRWAH', 'to be cold'),
  'avoir chaud': D('avoir chaud', 'a.vwaʁ ʃo', 'a-vwahr SHOH', 'to be hot'),
  'avoir raison': D('avoir raison', 'a.vwaʁ ʁɛ.zɔ̃', 'a-vwahr reh-ZOHⁿ', 'to be right'),
  'avoir tort': D('avoir tort', 'a.vwaʁ tɔʁ', 'a-vwahr TOR', 'to be wrong'),
  'avoir peur': D('avoir peur', 'a.vwaʁ pœʁ', 'a-vwahr PEUR', 'to be afraid'),
  'avoir honte': D('avoir honte', 'a.vwaʁ ɔ̃t', 'a-vwahr OHⁿT', 'to be ashamed'),
  'avoir de la chance': D('avoir de la chance', 'a.vwaʁ də la ʃɑ̃s', 'a-vwahr duh la SHAHⁿSS', 'to be lucky'),
  "avoir l'air": D("avoir l'air", 'a.vwaʁ lɛʁ', 'a-vwahr LEHR', 'to look, to seem'),

  // The three that take a complement.
  'avoir besoin de': D('avoir besoin de', 'a.vwaʁ bə.zwɛ̃ də', 'a-vwahr buh-ZWAⁿ duh', 'to need'),
  'avoir envie de': D('avoir envie de', 'a.vwaʁ ɑ̃.vi də', 'a-vwahr ahⁿ-VEE duh', 'to feel like'),
  'avoir mal à': D('avoir mal à', 'a.vwaʁ mal a', 'a-vwahr MAL a', 'to hurt'),

  // The sentences a card puts up whole.
  "j'ai faim": D("j'ai faim", 'ʒe fɛ̃', 'zhay FAⁿ', 'I am hungry'),
  "j'ai chaud": D("j'ai chaud", 'ʒe ʃo', 'zhay SHOH', 'I am hot'),
  'il fait chaud': D('il fait chaud', 'il fɛ ʃo', 'eel feh SHOH', 'it is hot'),
  "j'ai une voiture": D("j'ai une voiture", 'ʒe yn vwa.tyʁ', 'zhay ün vwa-TÜR', 'I have a car'),
  "je n'ai pas de voiture": D("je n'ai pas de voiture", 'ʒə nɛ pa də vwa.tyʁ', 'zhuh neh pa duh vwa-TÜR', 'I do not have a car'),
  "je n'ai pas faim": D("je n'ai pas faim", 'ʒə nɛ pa fɛ̃', 'zhuh neh pa FAⁿ', 'I am not hungry'),
  "j'ai mal à la tête": D("j'ai mal à la tête", 'ʒe mal a la tɛt', 'zhay mal a la TET', 'my head hurts'),
  'un cadeau': D('un cadeau', 'œ̃ ka.do', 'uhⁿ ka-DOH', 'a present'),
};

/** The display quadruple for one French form. Throws rather than returning a
 *  blank, because a card built from a missing key renders as an empty line and
 *  nothing says so. */
export function display(fr: string): Display {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.07 corpus: no display data for "${fr}"`);
  return d;
}

/** The bracketed respelling alone, which is what a deck card's `sub` line
 *  carries. Split out so no section builds the brackets itself. */
export const sub = (fr: string): string => display(fr).respell;

/** The French line of an AUTHORED row, by id. Falls back to the REUSED and
 *  IMPORTED manifests, so a section can reference any id this lesson teaches
 *  from without knowing which of the three sources it came from. */
export const frOf = (id: string): string => {
  const mine = BY_ID.get(id);
  if (mine) return mine.fr;
  const imported = IMPORTED.find((r) => r.id === id);
  if (imported) return imported.fr;
  const reused = REUSED.find((r) => r.id === id);
  if (!reused) throw new Error(`a1.07 corpus: unknown id "${id}"`);
  return reused.fr;
};

/** The corpus Item, stripped of the lesson-only fields. `form`, `family` and
 *  `pairWith` are teaching data and live in the lesson, not on the shared row. */
export function toItem(w: AvoirSentence): Item {
  const { form: _f, family: _fam, pairWith: _p, ...item } = w;
  return item;
}
