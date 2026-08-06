// The a1.11 corpus: what this lesson had to author, and what it reuses.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 27 entries below and for
// every respelling a1.11 puts on a screen. The lesson body reads `fr`, `ipa`,
// `respell` and `en` FROM HERE and never restates them, for the same reason
// elision-corpus.ts exists: before that file one word's transcription was typed
// by hand in five sections and the five copies were free to drift.
//
// ── Why anything is authored at all ────────────────────────────────────────
//
// a1.11 has no theme binding, so it draws its nouns from wherever they live.
// 459 corpus items already carry `un` or `une` on the front and the teaching
// set below reuses 35 of them untouched. Three things the lesson needs do not
// exist anywhere in the corpus, and no amount of searching produces them:
//
//   1. A FIRST MENTION AND A SECOND MENTION OF THE SAME NOUN. The rule this
//      lesson exists to teach is about the relationship between two mentions,
//      so a single sentence cannot demonstrate it. Nothing in the corpus
//      introduces a noun with un/une/des and then refers back to it with
//      le/la/les. The 324 sentences holding both articles are almost all a
//      definite subject with an indefinite object (« Le marchand vend des
//      fruits »), which is a different sentence entirely. So the pairs are
//      authored here, and they are authored AS PAIRS: .304 and .305 are one
//      teaching unit, and so are .306/.307 and .147/.148.
//
//   2. A BARE PROFESSION. « Je suis professeur dans une école primaire »
//      (fr.a1.metiers.122) is the only real example in the whole corpus, and it
//      carries a second article in the same breath, so it cannot be the card
//      that teaches "no article here". Searching `je suis` returns mostly
//      `je suis allé` and `je suis contente`.
//
//   3. NEGATION WITH ITS POSITIVE. Ten `pas de` sentences exist. That is enough
//      to show the rule and not enough to drill it, and none of them is paired
//      with the affirmative sentence it came from, which is the only form in
//      which the collapse to `de` is visible.
//
// ── The partitive boundary, which this file does not cross ─────────────────
//
// a1.29 owns du, de la and de l'. `des` is both the indefinite plural and the
// partitive plural, so the temptation to complete the set here is real and is
// refused: no entry below teaches `des` as a quantity word, and `du` and
// `de la` appear nowhere in this file or in the lesson. Two entries put `des`
// in a buying frame (.260 J'achète des pommes) because that is the sentence an
// English speaker drops the article from, which is a fact about English rather
// than about quantity.
//
// ── Ids ────────────────────────────────────────────────────────────────────
//
// Every sequence number continues its theme's existing run, checked against
// BOTH Postgres and seed.json on 2026-08-05 (the two drift, and the higher of
// the pair is what a new id has to clear):
//
//   deplacements 301   cafe 145   metiers 243   objets 210   cuisine 258   famille 218
//
// Ids are the SRS key. Nothing here is ever renumbered; new entries append.
//
// ── Respelling ─────────────────────────────────────────────────────────────
//
// House convention: hyphenated syllables, stressed syllable capitalised, nasal
// vowels closed with a SUPERSCRIPT n and never a plain n or m, /ø œ/ as EU,
// /y/ as Ü, /e/ as AY against /ɛ/ as EH. Brackets are added by `respell()`
// below, never stored, because the density validator checks the rendered form.
//
// This bites harder here than anywhere. `un` is the most repeated word in the
// lesson and its shipped respelling across the corpus is `uhn`, which teaches a
// consonant that is not pronounced and fails hasPlainNasalFor. 21 of the 35
// reused items respell it that way. Their stored rows are NOT edited: they are
// shared with a1.01, a1.03 and the flashcard hub, and rewriting them is a
// separate job with its own review. Instead every word a1.11 DISPLAYS is
// respelled here, to the convention, in RESPELL below, and the lesson reads its
// screens from that map rather than from the corpus row. a1-11-indefinis.test.ts
// runs hasPlainNasalFor over the whole map.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** A corpus entry plus the lesson-facing data the screens need. */
export type ArticleWord = Omit<Item, 'drills'> & {
  /** Which article this entry is teaching. `de` is the negated form, where all
   *  three indefinites collapse; `zero` is the bare profession after être. */
  article: 'un' | 'une' | 'des' | 'le' | 'la' | 'les' | 'de' | 'zero';
  /** Which teaching family. Drives the tranche slices and the drill pools so
   *  neither restates a word list. */
  family: 'mention' | 'jobs' | 'negation' | 'general' | 'plural';
  /** The other half of a two-mention pair, by id. Present on exactly the
   *  entries that only mean something together: a first mention alone does not
   *  demonstrate first mention. */
  pairWith?: string;
  drills: Item['drills'];
};

const W: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const S: Item['drills'] = ['sentence', 'flashcard', 'review'];
const SD: Item['drills'] = ['sentence', 'flashcard', 'review', 'dictation'];

export const ARTICLES: ArticleWord[] = [
  // ── deplacements: the first-mention narrative ────────────────────────────
  //
  // The hotel is the canonical case and the one the opening scene turns on:
  // "where is the hotel" is a question that cannot be answered, and "I am
  // looking for a hotel" is the same sentence with the article fixed.
  {
    id: 'fr.a1.deplacements.302', kind: 'word', level: 'a1', theme: 'deplacements',
    fr: 'un hôtel', en: 'a hotel', ipa: '/œ̃ no.tɛl/', respell: 'uhⁿ-no-TEL', gender: 'm',
    article: 'un', family: 'mention', tags: ['article-indefini', 'first-mention', 'noun'],
    drills: W, audioRef: null, version: 1,
    notes: 'Any hotel. The listener does not yet know which one, and does not need to.',
  },
  {
    id: 'fr.a1.deplacements.303', kind: 'word', level: 'a1', theme: 'deplacements',
    fr: 'une chambre', en: 'a room', ipa: '/yn ʃɑ̃bʁ/', respell: 'ün SHAHⁿBR', gender: 'f',
    article: 'une', family: 'mention', tags: ['article-indefini', 'first-mention', 'noun'],
    drills: W, audioRef: null, version: 1,
  },
  {
    id: 'fr.a1.deplacements.304', kind: 'sentence', level: 'a1', theme: 'deplacements',
    fr: 'Je cherche un hôtel.', en: 'I am looking for a hotel.', ipa: '/ʒə ʃɛʁʃ œ̃ no.tɛl/',
    article: 'un', family: 'mention', pairWith: 'fr.a1.deplacements.305',
    tags: ['article-indefini', 'first-mention'], drills: SD, audioRef: null, version: 1,
    notes: 'First mention. Un opens the question rather than pointing at an answer.',
  },
  {
    id: 'fr.a1.deplacements.305', kind: 'sentence', level: 'a1', theme: 'deplacements',
    fr: "L'hôtel est complet.", en: 'The hotel is full.', ipa: '/lo.tɛl ɛ kɔ̃.plɛ/',
    article: 'le', family: 'mention', pairWith: 'fr.a1.deplacements.304',
    tags: ['article-defini', 'second-mention'], drills: S, audioRef: null, version: 1,
    notes: 'Second mention. Both people now know which hotel, so le takes over.',
  },
  {
    id: 'fr.a1.deplacements.306', kind: 'sentence', level: 'a1', theme: 'deplacements',
    fr: 'Il reste une chambre.', en: 'There is one room left.', ipa: '/il ʁɛst yn ʃɑ̃bʁ/',
    article: 'une', family: 'mention', pairWith: 'fr.a1.deplacements.307',
    tags: ['article-indefini', 'first-mention'], drills: SD, audioRef: null, version: 1,
  },
  {
    id: 'fr.a1.deplacements.307', kind: 'sentence', level: 'a1', theme: 'deplacements',
    fr: 'Je prends la chambre.', en: 'I will take the room.', ipa: '/ʒə pʁɑ̃ la ʃɑ̃bʁ/',
    article: 'la', family: 'mention', pairWith: 'fr.a1.deplacements.306',
    tags: ['article-defini', 'second-mention'], drills: SD, audioRef: null, version: 1,
    notes: 'The room was introduced one line ago, so it is the room now.',
  },

  // ── cafe: the plural pair, and the generalisation ────────────────────────
  {
    id: 'fr.a1.cafe.146', kind: 'word', level: 'a1', theme: 'cafe',
    fr: 'des croissants', en: 'croissants', ipa: '/de kʁwa.sɑ̃/', respell: 'day krwa-SAHⁿ', gender: 'm',
    article: 'des', family: 'plural', tags: ['article-indefini', 'pluriel', 'noun'],
    drills: W, audioRef: null, version: 1,
    notes: 'English has nothing in front of croissants. French has des, and it is not optional.',
  },
  {
    id: 'fr.a1.cafe.147', kind: 'sentence', level: 'a1', theme: 'cafe',
    fr: 'Il y a des croissants.', en: 'There are croissants.', ipa: '/il ja de kʁwa.sɑ̃/',
    article: 'des', family: 'mention', pairWith: 'fr.a1.cafe.148',
    tags: ['article-indefini', 'first-mention', 'pluriel'], drills: SD, audioRef: null, version: 1,
  },
  {
    id: 'fr.a1.cafe.148', kind: 'sentence', level: 'a1', theme: 'cafe',
    fr: 'Les croissants sont pour moi ?', en: 'Are the croissants for me?', ipa: '/le kʁwa.sɑ̃ sɔ̃ puʁ mwa/',
    article: 'les', family: 'mention', pairWith: 'fr.a1.cafe.147',
    tags: ['article-defini', 'second-mention', 'pluriel'], drills: S, audioRef: null, version: 1,
    notes: 'They are on the table between you, so les. Des would ask about croissants in general.',
  },
  {
    id: 'fr.a1.cafe.149', kind: 'sentence', level: 'a1', theme: 'cafe',
    fr: "J'aime le café.", en: 'I like coffee.', ipa: '/ʒɛm lə ka.fe/',
    article: 'le', family: 'general', tags: ['article-defini', 'generalisation'],
    drills: S, audioRef: null, version: 1,
    notes: 'Coffee as a whole, not a cup of it. English drops the article here and French cannot.',
  },
  {
    id: 'fr.a1.cafe.150', kind: 'sentence', level: 'a1', theme: 'cafe',
    fr: "Je n'aime pas le café.", en: 'I do not like coffee.', ipa: '/ʒə nɛm pa lə ka.fe/',
    article: 'le', family: 'negation', pairWith: 'fr.a1.cafe.149',
    tags: ['article-defini', 'negation', 'generalisation'], drills: SD, audioRef: null, version: 1,
    notes: 'Negated, and le is untouched. Only un, une and des collapse to de.',
  },

  // ── metiers: the profession that takes nothing ───────────────────────────
  {
    id: 'fr.a1.metiers.244', kind: 'sentence', level: 'a1', theme: 'metiers',
    fr: 'Je suis professeur.', en: 'I am a teacher.', ipa: '/ʒə sɥi pʁɔ.fɛ.sœʁ/',
    article: 'zero', family: 'jobs', tags: ['article-zero', 'metier'],
    drills: S, audioRef: null, version: 1,
    notes: 'English needs a. French forbids it after être. The gap is the grammar.',
  },
  {
    id: 'fr.a1.metiers.245', kind: 'sentence', level: 'a1', theme: 'metiers',
    fr: 'Elle est avocate.', en: 'She is a lawyer.', ipa: '/ɛ.l‿ɛ.ta.vɔ.kat/',
    article: 'zero', family: 'jobs', tags: ['article-zero', 'metier'],
    drills: S, audioRef: null, version: 1,
  },
  {
    id: 'fr.a1.metiers.246', kind: 'sentence', level: 'a1', theme: 'metiers',
    fr: 'Il est boulanger.', en: 'He is a baker.', ipa: '/i.l‿ɛ bu.lɑ̃.ʒe/',
    article: 'zero', family: 'jobs', tags: ['article-zero', 'metier'],
    drills: SD, audioRef: null, version: 1,
  },
  {
    id: 'fr.a1.metiers.247', kind: 'sentence', level: 'a1', theme: 'metiers',
    fr: "C'est un professeur.", en: 'That is a teacher.', ipa: '/sɛ.t‿œ̃ pʁɔ.fɛ.sœʁ/',
    article: 'un', family: 'jobs', pairWith: 'fr.a1.metiers.244',
    tags: ['article-indefini', 'metier'], drills: S, audioRef: null, version: 1,
    notes: "The one place the article comes back. C'est points at a person; il est describes one.",
  },
  {
    id: 'fr.a1.metiers.248', kind: 'word', level: 'a1', theme: 'metiers',
    fr: 'une avocate', en: 'a lawyer (f)', ipa: '/y.na.vɔ.kat/', respell: 'ü-na-vo-KAT', gender: 'f',
    article: 'une', family: 'jobs', tags: ['article-indefini', 'metier', 'noun'],
    drills: W, audioRef: null, version: 1,
  },

  // ── objets: negation, shown against the sentence it came from ────────────
  {
    id: 'fr.a1.objets.211', kind: 'sentence', level: 'a1', theme: 'objets',
    fr: "J'ai une voiture.", en: 'I have a car.', ipa: '/ʒe yn vwa.tyʁ/',
    article: 'une', family: 'negation', pairWith: 'fr.a1.objets.212',
    tags: ['article-indefini', 'affirmatif'], drills: S, audioRef: null, version: 1,
  },
  {
    id: 'fr.a1.objets.212', kind: 'sentence', level: 'a1', theme: 'objets',
    fr: "Je n'ai pas de voiture.", en: 'I do not have a car.', ipa: '/ʒə ne pa də vwa.tyʁ/',
    article: 'de', family: 'negation', pairWith: 'fr.a1.objets.211',
    tags: ['article-indefini', 'negation'], drills: SD, audioRef: null, version: 1,
    notes: 'Une becomes de. Not pas une, and not pas la: the negative eats the indefinite.',
  },
  {
    id: 'fr.a1.objets.213', kind: 'sentence', level: 'a1', theme: 'objets',
    fr: "J'ai un stylo.", en: 'I have a pen.', ipa: '/ʒe œ̃ sti.lo/',
    article: 'un', family: 'negation', pairWith: 'fr.a1.objets.214',
    tags: ['article-indefini', 'affirmatif'], drills: S, audioRef: null, version: 1,
  },
  {
    id: 'fr.a1.objets.214', kind: 'sentence', level: 'a1', theme: 'objets',
    fr: "Je n'ai pas de stylo.", en: 'I do not have a pen.', ipa: '/ʒə ne pa də sti.lo/',
    article: 'de', family: 'negation', pairWith: 'fr.a1.objets.213',
    tags: ['article-indefini', 'negation'], drills: SD, audioRef: null, version: 1,
  },
  {
    id: 'fr.a1.objets.215', kind: 'word', level: 'a1', theme: 'objets',
    fr: 'des livres', en: 'books', ipa: '/de livʁ/', respell: 'day LEEVR', gender: 'm',
    article: 'des', family: 'plural', tags: ['article-indefini', 'pluriel', 'noun'],
    drills: W, audioRef: null, version: 1,
  },
  {
    id: 'fr.a1.objets.216', kind: 'sentence', level: 'a1', theme: 'objets',
    fr: 'Il y a des livres sur la table.', en: 'There are books on the table.', ipa: '/il ja de livʁ syʁ la tabl/',
    article: 'des', family: 'plural', tags: ['article-indefini', 'pluriel'],
    drills: SD, audioRef: null, version: 1,
    notes: 'Des in front of the new thing, la in front of the table you can both see.',
  },

  // ── cuisine: the des English throws away ─────────────────────────────────
  {
    id: 'fr.a1.cuisine.259', kind: 'word', level: 'a1', theme: 'cuisine',
    fr: 'des pommes', en: 'apples', ipa: '/de pɔm/', respell: 'day POM', gender: 'f',
    article: 'des', family: 'plural', tags: ['article-indefini', 'pluriel', 'noun'],
    drills: W, audioRef: null, version: 1,
  },
  {
    id: 'fr.a1.cuisine.260', kind: 'sentence', level: 'a1', theme: 'cuisine',
    fr: "J'achète des pommes.", en: 'I am buying apples.', ipa: '/ʒa.ʃɛt de pɔm/',
    article: 'des', family: 'plural', pairWith: 'fr.a1.cuisine.261',
    tags: ['article-indefini', 'pluriel'], drills: S, audioRef: null, version: 1,
    notes: 'The English has nothing where the French has des, so there is nothing to remind you.',
  },
  {
    id: 'fr.a1.cuisine.261', kind: 'sentence', level: 'a1', theme: 'cuisine',
    fr: "Je n'achète pas de pommes.", en: 'I am not buying apples.', ipa: '/ʒə na.ʃɛt pa də pɔm/',
    article: 'de', family: 'negation', pairWith: 'fr.a1.cuisine.260',
    tags: ['article-indefini', 'negation', 'pluriel'], drills: SD, audioRef: null, version: 1,
    notes: 'Des goes the same way un and une do.',
  },

  // ── famille: a plural nobody could read as a quantity ────────────────────
  //
  // Deliberately not food. Every plural above sits near an eating or buying
  // frame, which is where `des` reads as partitive, and a1.29 owns that. Amis
  // cannot be a quantity of anything, so this is the entry that shows `des` as
  // the plural of `un` and nothing else.
  {
    id: 'fr.a1.famille.219', kind: 'word', level: 'a1', theme: 'famille',
    fr: 'des amis', en: 'friends', ipa: '/de.za.mi/', respell: 'day-za-MEE', gender: 'm',
    article: 'des', family: 'plural', tags: ['article-indefini', 'pluriel', 'noun'],
    drills: W, audioRef: null, version: 1,
  },
  {
    id: 'fr.a1.famille.220', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: "J'ai des amis à Lyon.", en: 'I have friends in Lyon.', ipa: '/ʒe de.za.mi a ljɔ̃/',
    article: 'des', family: 'plural', tags: ['article-indefini', 'pluriel'],
    drills: S, audioRef: null, version: 1,
  },
];

/** Lookup by id. Every screen in the lesson is built through this. */
export const BY_ID: ReadonlyMap<string, ArticleWord> = new Map(ARTICLES.map((w) => [w.id, w]));

/** Every id this file authors, in sequence order. */
export const ARTICLE_IDS: string[] = ARTICLES.map((w) => w.id);

/** The ids of one teaching family, in sequence order. Drives the tranche
 *  slices and the drill pools so neither restates a word list. */
export const familyIds = (f: ArticleWord['family']): string[] =>
  ARTICLES.filter((w) => w.family === f).map((w) => w.id);

/** The two-mention pairs, as [first, second]. Built from `pairWith` rather than
 *  listed, so a pair cannot be half-deleted: the test asserts every pair is
 *  reciprocal and that the first half carries an indefinite and the second a
 *  definite. */
export const MENTION_PAIRS: [string, string][] = ARTICLES
  .filter((w) => w.pairWith && (w.article === 'un' || w.article === 'une' || w.article === 'des'))
  .filter((w) => w.family === 'mention')
  .map((w) => [w.id, w.pairWith!] as [string, string]);

/* ─── Reused, and verified in BOTH copies ──────────────────────────────────
 *
 * Items already in the shipped corpus that this lesson teaches FROM. Nothing
 * about them changes and no shipped screen moves.
 *
 * Every one was checked against Postgres (published) AND seed.json on
 * 2026-08-05, with the `fr` compared between the two. The batch re-checks the
 * database before writing, because an id that is in the seed and not published
 * renders as an empty card rather than erroring.                              */

export const REUSED: { id: string; fr: string; why: string }[] = [
  // Masculine, unsurprising gender: the article choice must not become a gender
  // puzzle, because gender is a1.03's lesson and not this one's.
  { id: 'fr.a1.objets.003', fr: 'un livre', why: 'the plainest masculine noun in the corpus' },
  { id: 'fr.a1.objets.009', fr: 'un stylo', why: 'met in a1 objects; the negation pair is built on it' },
  { id: 'fr.a1.objets.008', fr: 'un sac', why: 'met in a1 objects' },
  { id: 'fr.a1.objets.006', fr: 'un téléphone', why: 'met in a1 objects' },
  { id: 'fr.a1.objets.011', fr: 'un parapluie', why: 'met in a1 objects' },
  { id: 'fr.a1.objets.007', fr: 'un ordinateur', why: 'met in a1 objects' },
  { id: 'fr.a1.cafe.009', fr: 'un café', why: 'the noun the generalisation rule is taught on' },
  { id: 'fr.a1.cafe.010', fr: 'un thé', why: 'the second half of the generalisation contrast' },
  { id: 'fr.a1.cafe.011', fr: 'un croissant', why: 'the singular des croissants is the plural of' },
  { id: 'fr.a1.cafe.023', fr: 'un verre', why: 'met in a1 cafe vocabulary' },
  // Feminine, equally plain.
  { id: 'fr.a1.objets.005', fr: 'une voiture', why: 'the noun the negation rule is taught on' },
  { id: 'fr.a1.objets.002', fr: 'une maison', why: 'met in a1 objects' },
  { id: 'fr.a1.objets.026', fr: 'une table', why: 'met in a1 objects' },
  { id: 'fr.a1.objets.027', fr: 'une chaise', why: 'met in a1 objects' },
  { id: 'fr.a1.objets.030', fr: 'une porte', why: 'met in a1 objects' },
  { id: 'fr.a1.objets.033', fr: 'une clé', why: 'met in a1 objects' },
  { id: 'fr.a1.objets.012', fr: 'une montre', why: 'met in a1 objects' },
  { id: 'fr.a1.cafe.012', fr: 'une baguette', why: 'met in a1 cafe vocabulary' },
  { id: 'fr.a1.cafe.017', fr: 'une tasse', why: 'met in a1 cafe vocabulary' },
  { id: 'fr.a1.cuisine.003', fr: 'une pomme', why: 'the singular des pommes is the plural of' },
  { id: 'fr.a1.cuisine.021', fr: 'une banane', why: 'met in a1 food vocabulary' },
  { id: 'fr.a1.cuisine.022', fr: 'une orange', why: 'met in a1 food vocabulary' },
  { id: 'fr.a1.cuisine.025', fr: 'une assiette', why: 'met in a1 food vocabulary' },
  // Plurals that already exist. All three are nouns English also leaves bare.
  { id: 'fr.a1.objets.013', fr: 'des lunettes', why: 'a plural the corpus already carries with des' },
  { id: 'fr.a1.objets.020', fr: 'des ciseaux', why: 'a plural the corpus already carries with des' },
  { id: 'fr.a1.objets.086', fr: 'des gants', why: 'a plural the corpus already carries with des' },
  // Professions, as nouns. The lesson teaches that être drops the article; the
  // noun itself still has one, and these are where the learner met it.
  { id: 'fr.a1.metiers.001', fr: 'un médecin', why: 'met in a1 jobs vocabulary' },
  { id: 'fr.a1.metiers.003', fr: 'un avocat', why: 'the masculine of the authored une avocate' },
  { id: 'fr.a1.metiers.007', fr: 'un serveur', why: 'met in a1 jobs vocabulary' },
  { id: 'fr.a1.metiers.014', fr: 'Elle est médecin.', why: 'the one bare profession the corpus already had' },
  { id: 'fr.a1.metiers.122', fr: 'Je suis professeur dans une école primaire.', why: 'both rules in one line' },
  // Sentences that already show the rule working.
  { id: 'fr.a1.maison.005', fr: 'Il y a une table dans le salon.', why: 'indefinite object, definite location' },
  { id: 'fr.a1.objets.162', fr: 'Il y a un parapluie dans le sac.', why: 'the same shape, one theme over' },
  { id: 'fr.a1.objets.171', fr: 'Il y a des piles dans le tiroir.', why: 'the plural of that shape' },
  { id: 'fr.a1.cuisine.214', fr: 'Je ne mange pas de fromage.', why: 'negation, already in the corpus' },
  { id: 'fr.a1.objets.153', fr: "Elle n'a pas de portable.", why: 'negation, already in the corpus' },
  { id: 'fr.a1.marche.200', fr: "J'aime le marché en plein air.", why: 'a generalisation the corpus already had' },
];

export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

/* ─── Metalanguage the corpus stores as sentences, and this lesson refuses ──
 *
 * Three corpus rows are grammar notes wearing kind 'sentence'. They resolve
 * happily if a section names their id, and they are not French a learner would
 * ever say, so a listening or dictation mission built on one is nonsense to
 * hear and impossible to spell. The third states the exact rule this lesson
 * teaches, which is what makes it tempting.
 *
 * Named here so the test can assert they appear in no section of a1.11.     */
export const METALANGUAGE_IDS: string[] = [
  // "Le pour le masculin, la pour le féminin, l' devant une voyelle."
  'fr.a1.maison.008',
  // "Devant une quantité non comptée : du au masculin, de la au féminin, des au pluriel."
  'fr.a1.cuisine.008',
  // "Après être, pas d'article devant la profession."
  'fr.a1.metiers.016',
];

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.11 puts on a card, with the respelling this lesson
 * stands behind. See the header: the shipped corpus rows respell `un` as `uhn`
 * and are left alone, so the lesson reads from here.
 *
 * `en` is the gloss the card shows, which is sometimes shorter than the corpus
 * row's (a flashcard hub entry can afford "a coffee with steamed milk"; a card
 * at lg cannot).                                                             */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

/** Keyed by the French form, because these are display strings rather than
 *  corpus rows: `le livre` has no id of its own and is the other half of a
 *  contrast that only exists on a card. */
export const RESPELL: Record<string, Display> = {
  // The indefinite, singular.
  'un livre': D('un livre', 'œ̃ livʁ', 'uhⁿ LEEVR', 'a book'),
  'un stylo': D('un stylo', 'œ̃ sti.lo', 'uhⁿ stee-LOH', 'a pen'),
  'un sac': D('un sac', 'œ̃ sak', 'uhⁿ SAK', 'a bag'),
  'un café': D('un café', 'œ̃ ka.fe', 'uhⁿ ka-FAY', 'a coffee'),
  'un thé': D('un thé', 'œ̃ te', 'uhⁿ TAY', 'a tea'),
  'un téléphone': D('un téléphone', 'œ̃ te.le.fɔn', 'uhⁿ tay-lay-FON', 'a phone'),
  'un parapluie': D('un parapluie', 'œ̃ pa.ʁa.plɥi', 'uhⁿ pa-ra-PLWEE', 'an umbrella'),
  'un ordinateur': D('un ordinateur', 'œ̃ nɔʁ.di.na.tœʁ', 'uhⁿ-nor-dee-na-TEUR', 'a computer'),
  'un croissant': D('un croissant', 'œ̃ kʁwa.sɑ̃', 'uhⁿ krwa-SAHⁿ', 'a croissant'),
  'un verre': D('un verre', 'œ̃ vɛʁ', 'uhⁿ VEHR', 'a glass'),
  'un hôtel': D('un hôtel', 'œ̃ no.tɛl', 'uhⁿ-no-TEL', 'a hotel'),
  'un médecin': D('un médecin', 'œ̃ med.sɛ̃', 'uhⁿ mayd-SAⁿ', 'a doctor'),
  'un avocat': D('un avocat', 'œ̃ na.vɔ.ka', 'uhⁿ-na-vo-KA', 'a lawyer'),
  'un serveur': D('un serveur', 'œ̃ sɛʁ.vœʁ', 'uhⁿ sehr-VEUR', 'a waiter'),
  'une voiture': D('une voiture', 'yn vwa.tyʁ', 'ün vwa-TÜR', 'a car'),
  'une maison': D('une maison', 'yn mɛ.zɔ̃', 'ün meh-ZOHⁿ', 'a house'),
  'une table': D('une table', 'yn tabl', 'ün TABL', 'a table'),
  'une chaise': D('une chaise', 'yn ʃɛz', 'ün SHEHZ', 'a chair'),
  'une porte': D('une porte', 'yn pɔʁt', 'ün PORT', 'a door'),
  'une clé': D('une clé', 'yn kle', 'ün KLAY', 'a key'),
  'une montre': D('une montre', 'yn mɔ̃tʁ', 'ün MOHⁿTR', 'a watch'),
  'une pomme': D('une pomme', 'yn pɔm', 'ün POM', 'an apple'),
  'une banane': D('une banane', 'yn ba.nan', 'ün ba-NAN', 'a banana'),
  'une orange': D('une orange', 'y.nɔ.ʁɑ̃ʒ', 'ü-no-RAHⁿZH', 'an orange'),
  'une baguette': D('une baguette', 'yn ba.ɡɛt', 'ün ba-GEHT', 'a baguette'),
  'une tasse': D('une tasse', 'yn tas', 'ün TAHSS', 'a cup'),
  'une assiette': D('une assiette', 'y.na.sjɛt', 'ü-na-SYEHT', 'a plate'),
  'une chambre': D('une chambre', 'yn ʃɑ̃bʁ', 'ün SHAHⁿBR', 'a room'),
  'une avocate': D('une avocate', 'y.na.vɔ.kat', 'ü-na-vo-KAT', 'a lawyer'),
  // The indefinite, plural.
  'des livres': D('des livres', 'de livʁ', 'day LEEVR', 'books'),
  'des pommes': D('des pommes', 'de pɔm', 'day POM', 'apples'),
  'des croissants': D('des croissants', 'de kʁwa.sɑ̃', 'day krwa-SAHⁿ', 'croissants'),
  'des amis': D('des amis', 'de.za.mi', 'day-za-MEE', 'friends'),
  'des lunettes': D('des lunettes', 'de ly.nɛt', 'day lü-NEHT', 'glasses'),
  'des gants': D('des gants', 'de ɡɑ̃', 'day GAHⁿ', 'gloves'),
  'des ciseaux': D('des ciseaux', 'de si.zo', 'day see-ZOH', 'scissors'),
  // The definite halves of the contrasts. No corpus row of their own: they
  // exist only as the other side of a pair on one card.
  'le livre': D('le livre', 'lə livʁ', 'luh LEEVR', 'the book'),
  'le café': D('le café', 'lə ka.fe', 'luh ka-FAY', 'the coffee, or coffee itself'),
  "l'hôtel": D("l'hôtel", 'lo.tɛl', 'lo-TEL', 'the hotel'),
  'la voiture': D('la voiture', 'la vwa.tyʁ', 'la vwa-TÜR', 'the car'),
  'la chambre': D('la chambre', 'la ʃɑ̃bʁ', 'la SHAHⁿBR', 'the room'),
  'les pommes': D('les pommes', 'le pɔm', 'lay POM', 'the apples'),
  'les croissants': D('les croissants', 'le kʁwa.sɑ̃', 'lay krwa-SAHⁿ', 'the croissants'),
  // The negated form, which is neither.
  'de voiture': D('de voiture', 'də vwa.tyʁ', 'duh vwa-TÜR', 'a car, under negation'),
};

/** The display quadruple for one French form. Throws rather than returning a
 *  blank, because a card built from a missing key renders as an empty line and
 *  nothing says so. */
export function display(fr: string): Display {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.11 corpus: no display data for "${fr}"`);
  return d;
}

/** The corpus Item, stripped of the lesson-only fields. `article`, `family` and
 *  `pairWith` are teaching data and live in the lesson, not on the shared row. */
export function toItem(w: ArticleWord): Item {
  const { article: _a, family: _f, pairWith: _p, ...item } = w;
  return item;
}
