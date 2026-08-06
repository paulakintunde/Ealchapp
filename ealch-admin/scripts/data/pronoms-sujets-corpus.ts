// The a1.05 corpus: what this lesson had to author, and what it reuses.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 26 entries below and for
// every respelling a1.05 puts on a screen. The lesson body reads `fr`, `ipa`,
// `respell` and `en` FROM HERE and never restates them, for the same reason
// elision-corpus.ts exists: before that file one word's transcription was typed
// by hand in five sections and the five copies were free to drift.
//
// ── Why anything is authored at all ────────────────────────────────────────
//
// The corpus is rich in subject pronouns. Counting sentence-initial uses across
// the 3,620 corpus sentences on 2026-08-05:
//
//   je/j' 515   il 411   elle 363   nous 448   vous 167   tu 150
//   on 148      ils 95   elles 18
//
// So the lesson could name a sentence for any pronoun it wanted. Three things
// it needs are not there, and no amount of searching produces them:
//
//   1. A PRONOUN BESIDE ITS VERB FORM, IN A SET. The lesson's whole claim is
//      that nine pronouns sit behind six verb forms. Showing that needs one
//      sentence per row of the paradigm, in one frame, with one verb. The
//      corpus has `Je suis à la maison` and `Nous sommes en retard` and nothing
//      that pairs with either: every other pronoun's être sentence is a passé
//      composé (`Ils sont allés au marché`) or a profession (`Elle est
//      médecin`), which teaches a different thing in the same breath.
//
//   2. MINIMAL PAIRS ON THE COLLAPSE. `il` and `ils` are the same sound, and so
//      are `elle` and `elles`. Teaching that needs two sentences differing in
//      nothing but the verb, said by the same voice in one take. The corpus has
//      no such pair anywhere, because no two of its sentences were written to
//      be compared.
//
//   3. VOICEFLASH ON ANY OF IT. Of the 1,000-odd sentence-initial pronoun
//      sentences at A1, exactly ONE carries the `voiceflash` drill. A speak
//      mission built from the shipped corpus would be a mission the mic cannot
//      score, which reads as broken rather than as untagged.
//
// Everything else the lesson touches is reused by id and untouched: see REUSED
// below, 19 items covering all nine pronouns plus the impersonal `il`.
//
// ── The frame, and why it is one frame ─────────────────────────────────────
//
// Every authored sentence happens at one café. That is not decoration. The
// lesson's subject is who is in the room, and a café table is the smallest
// place where the answer changes minute by minute: one person, then two, then a
// group, then a group with one man in it. Holding one setting also means the
// only thing that ever varies between two cards is the pronoun and its verb,
// which is the comparison every mission is asking the learner to make.
//
// ── Theme and ids ──────────────────────────────────────────────────────────
//
// No new theme. a1.05 has `themes: undefined`, and a grammar unit that invents
// a theme misrepresents itself in the Den and orphans its items from the
// flashcard hub. These continue the `cafe` theme's existing run, which ends at
// .153 in BOTH Postgres and seed.json (checked 2026-08-05; the two drift, and
// the higher of the pair is what a new id has to clear).
//
// Ids are the SRS key. Nothing here is ever renumbered; new entries append.
//
// ── kind: every entry is a `sentence`, deliberately ───────────────────────
//
// flashhub-coverage.test.ts fails the build when two NON-sentence items in one
// theme share an `fr`, because the flashcard hub keys decks on `fr` and would
// serve the same card twice. This lesson authors two pairs that are meant to be
// confusable (`Vous êtes prêt ?` against `Vous êtes prêts ?`, which are the
// same sound) and one pair that is meant to be identical in meaning (`On est
// trois` against `Nous sommes trois`). Authoring those as words or phrases
// would put the rule under pressure for no gain: they are sentences, they are
// stored as sentences, and the rule leaves them alone.
//
// ── Respelling convention ─────────────────────────────────────────────────
//
// House convention: hyphenated syllables, stressed syllable capitalised, nasal
// vowels closed with a SUPERSCRIPT n and never a plain n or m, /ø œ/ as EU,
// /y/ as Ü, /ɑ̃/ as AHⁿ against /ɛ̃/ as Aⁿ. Brackets are added by `display()`,
// never stored here.
//
// This bites harder in this lesson than in most: `on` IS a nasal vowel and it
// is the lesson's signature word, so [ON] would be wrong on the one card the
// whole unit is named for. a1-05-pronoms.test.ts checks every entry through
// `hasPlainNasalFor` from density.logic.ts rather than a re-implementation,
// because the corpus at large is not a safe source of truth for this: 71 of the
// 180 respellings in the `nombres` theme break the rule today.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** A corpus entry plus the lesson-facing display data the renderer needs. */
export type PronounSentence = Omit<Item, 'drills'> & {
  /** Which pronoun this sentence exists to show. `null` on the impersonal
   *  entries, where the surface form is `il` and the referent is nobody. */
  pronoun: 'je' | 'tu' | 'il' | 'elle' | 'on' | 'nous' | 'vous' | 'ils' | 'elles' | null;
  /** The form of être (or the carrier verb) this sentence puts on screen.
   *  `null` where the sentence carries no être form, which is the impersonal
   *  and elision set. Drives the paradigm table so no screen retypes a form. */
  form: string | null;
  /** Which teaching family. Drives the drill pools and the deckTranche slices
   *  so neither restates a word list. */
  family: 'paradigm' | 'contrast' | 'on' | 'impersonal' | 'elision' | 'register';
  drills: Item['drills'];
};

/** Speakable: the mic-scored deck runs `voiceflash`, and an item without it
 *  renders as a card that cannot be scored. */
const S: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
/** Speakable and spellable. */
const SD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

/** The lesson's 26 authored entries, in sequence order. */
export const PRONOUNS: PronounSentence[] = [
  // ── The paradigm: one sentence per row, one verb, one café ───────────────
  //
  // Nine sentences and six forms of être, which is the lesson's reframe made
  // literal. .156/.157/.158 all carry `est` and .161/.162 both carry `sont`;
  // that repetition is the teaching, not an oversight.
  { id: 'fr.a1.cafe.154', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Je suis à la terrasse.', en: 'I am out on the terrace.', ipa: '/ʒə sɥi a la tɛ.ʁas/', respell: 'zhuh swee a la teh-RAS', pronoun: 'je', form: 'suis', family: 'paradigm', tags: ['pronoun', 'je', 'etre', 'paradigm'], drills: S, audioRef: null, version: 1, notes: 'je stays lowercase in the middle of a sentence, unlike the English I.' },
  { id: 'fr.a1.cafe.155', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Tu es en avance.', en: 'You are early.', ipa: '/ty e ɑ̃ na.vɑ̃s/', respell: 'tü ay ahⁿ na-VAHⁿS', pronoun: 'tu', form: 'es', family: 'paradigm', tags: ['pronoun', 'tu', 'etre', 'paradigm'], drills: S, audioRef: null, version: 1, notes: 'One person, and someone who has already offered you the closeness.' },
  { id: 'fr.a1.cafe.156', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Il est au comptoir du café.', en: 'He is at the café counter.', ipa: '/il ɛ o kɔ̃.twaʁ dy ka.fe/', respell: 'eel eh oh kohⁿ-twar dü ka-FAY', pronoun: 'il', form: 'est', family: 'paradigm', tags: ['pronoun', 'il', 'etre', 'paradigm'], drills: SD, audioRef: null, version: 1, notes: 'Pairs with .161. Only the verb tells you whether it is one man or several.' },
  { id: 'fr.a1.cafe.157', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Elle est en terrasse ce matin.', en: 'She is out on the terrace this morning.', ipa: '/ɛl ɛ ɑ̃ tɛ.ʁas sə ma.tɛ̃/', respell: 'el eh ahⁿ teh-ras suh ma-TAⁿ', pronoun: 'elle', form: 'est', family: 'paradigm', tags: ['pronoun', 'elle', 'etre', 'paradigm'], drills: SD, audioRef: null, version: 1, notes: 'Pairs with .162. Same shape, and elle and elles are the same sound.' },
  { id: 'fr.a1.cafe.158', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'On est trois à la terrasse.', en: 'There are three of us on the terrace.', ipa: '/ɔ̃ nɛ tʁwɑ a la tɛ.ʁas/', respell: 'ohⁿ neh trwa a la teh-RAS', pronoun: 'on', form: 'est', family: 'paradigm', tags: ['pronoun', 'on', 'etre', 'paradigm', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'A we idea on a he form. That mismatch is the whole difficulty.' },
  { id: 'fr.a1.cafe.159', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Nous sommes trois à la terrasse.', en: 'There are three of us on the terrace.', ipa: '/nu sɔm tʁwɑ a la tɛ.ʁas/', respell: 'noo som trwa a la teh-RAS', pronoun: 'nous', form: 'sommes', family: 'paradigm', tags: ['pronoun', 'nous', 'etre', 'paradigm'], drills: SD, audioRef: null, version: 1, notes: 'The same sentence as .158, one register up. Neither is wrong.' },
  { id: 'fr.a1.cafe.160', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Vous êtes combien ?', en: 'How many of you are there?', ipa: '/vu zɛt kɔ̃.bjɛ̃/', respell: 'voo zet kohⁿ-BYAⁿ', pronoun: 'vous', form: 'êtes', family: 'paradigm', tags: ['pronoun', 'vous', 'etre', 'paradigm', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The question at the door of every French restaurant. Here vous is plainly plural.' },
  { id: 'fr.a1.cafe.161', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Ils sont au comptoir du café.', en: 'They are at the café counter.', ipa: '/il sɔ̃ o kɔ̃.twaʁ dy ka.fe/', respell: 'eel sohⁿ oh kohⁿ-twar dü ka-FAY', pronoun: 'ils', form: 'sont', family: 'paradigm', tags: ['pronoun', 'ils', 'etre', 'paradigm', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The plural of .156, and the S on ils is silent. sont is the only audible difference.' },
  { id: 'fr.a1.cafe.162', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Elles sont en terrasse ce matin.', en: 'They are out on the terrace this morning.', ipa: '/ɛl sɔ̃ ɑ̃ tɛ.ʁas sə ma.tɛ̃/', respell: 'el sohⁿ ahⁿ teh-ras suh ma-TAⁿ', pronoun: 'elles', form: 'sont', family: 'paradigm', tags: ['pronoun', 'elles', 'etre', 'paradigm', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'Every one of them a woman. One man and this becomes .161.' },

  // ── The contrast pairs: short enough to be heard back to back ────────────
  //
  // Four sentences that differ in one syllable of verb and nothing else. These
  // are what the listening mission and the listenChoose questions play, and
  // they are the reason rec-a1-05-contrast-pairs asks for one take per pair.
  { id: 'fr.a1.cafe.163', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Il est là.', en: 'He is here.', ipa: '/i lɛ la/', respell: 'eel eh LA', pronoun: 'il', form: 'est', family: 'contrast', tags: ['pronoun', 'il', 'contrast-pair', 'etre'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.164', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Ils sont là.', en: 'They are here.', ipa: '/il sɔ̃ la/', respell: 'eel sohⁿ LA', pronoun: 'ils', form: 'sont', family: 'contrast', tags: ['pronoun', 'ils', 'contrast-pair', 'etre', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Said on its own, ils is the same sound as il. sont is the whole signal.' },
  { id: 'fr.a1.cafe.165', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Elle est là.', en: 'She is here.', ipa: '/ɛ lɛ la/', respell: 'el eh LA', pronoun: 'elle', form: 'est', family: 'contrast', tags: ['pronoun', 'elle', 'contrast-pair', 'etre'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.166', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Elles sont là.', en: 'They are here.', ipa: '/ɛl sɔ̃ la/', respell: 'el sohⁿ LA', pronoun: 'elles', form: 'sont', family: 'contrast', tags: ['pronoun', 'elles', 'contrast-pair', 'etre', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Same again at the feminine end. The ear gets nothing from the pronoun.' },

  // ── on, the everyday we, and the nous it stands in for ───────────────────
  { id: 'fr.a1.cafe.167', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'On est là.', en: 'We are here.', ipa: '/ɔ̃ nɛ la/', respell: 'ohⁿ neh LA', pronoun: 'on', form: 'est', family: 'on', tags: ['pronoun', 'on', 'etre', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'What gets said when a group walks in. Never « On sommes là ».' },
  { id: 'fr.a1.cafe.168', kind: 'sentence', level: 'a1', theme: 'cafe', fr: "On est d'accord.", en: 'We agree.', ipa: '/ɔ̃ nɛ da.kɔʁ/', respell: 'ohⁿ neh da-KOR', pronoun: 'on', form: 'est', family: 'on', tags: ['pronoun', 'on', 'etre', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.169', kind: 'sentence', level: 'a1', theme: 'cafe', fr: "Nous sommes d'accord.", en: 'We agree.', ipa: '/nu sɔm da.kɔʁ/', respell: 'noo som da-KOR', pronoun: 'nous', form: 'sommes', family: 'on', tags: ['pronoun', 'nous', 'etre', 'written'], drills: S, audioRef: null, version: 1, notes: 'What you would write. Same meaning as .168 and a register higher.' },
  { id: 'fr.a1.cafe.170', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'On commande ?', en: 'Shall we order?', ipa: '/ɔ̃ kɔ.mɑ̃d/', respell: 'ohⁿ ko-MAHⁿD', pronoun: 'on', form: null, family: 'on', tags: ['pronoun', 'on', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'on carries a suggestion the way English uses shall we.' },
  // .179 belongs to this family and is authored at the end of the file, so the
  // array stays in sequence order. It is the written twin of .167.

  // ── The il that refers to nobody ─────────────────────────────────────────
  //
  // A quarter of the corpus's `il` sentences are this kind, so a learner meets
  // one within minutes of being told il means he. Naming it early is cheaper
  // than unpicking it later.
  { id: 'fr.a1.cafe.171', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Il pleut.', en: 'It is raining.', ipa: '/il plø/', respell: 'eel PLEU', pronoun: null, form: null, family: 'impersonal', tags: ['pronoun', 'il', 'impersonal', 'weather'], drills: S, audioRef: null, version: 1, notes: 'Weather takes il, the same way English weather takes it.' },
  { id: 'fr.a1.cafe.172', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Il fait beau.', en: 'The weather is nice.', ipa: '/il fɛ bo/', respell: 'eel feh BOH', pronoun: null, form: null, family: 'impersonal', tags: ['pronoun', 'il', 'impersonal', 'weather'], drills: S, audioRef: null, version: 1, notes: 'Literally it makes beautiful. Nobody is making anything.' },
  { id: 'fr.a1.cafe.173', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Il faut réserver.', en: 'You have to book.', ipa: '/il fo ʁe.zɛʁ.ve/', respell: 'eel foh ray-zehr-VAY', pronoun: null, form: null, family: 'impersonal', tags: ['pronoun', 'il', 'impersonal'], drills: S, audioRef: null, version: 1, notes: 'il faut is how French says one has to. It never has a subject you could point at.' },

  // ── j' before a vowel: a transfer, not a new idea ────────────────────────
  { id: 'fr.a1.cafe.174', kind: 'sentence', level: 'a1', theme: 'cafe', fr: "J'ai soif.", en: 'I am thirsty.', ipa: '/ʒe swaf/', respell: 'zhay SWAF', pronoun: 'je', form: null, family: 'elision', tags: ['pronoun', 'je', 'elision', 'vowel-initial'], drills: S, audioRef: null, version: 1, notes: "ai starts on a vowel, so je drops its e. The same drop the learner already makes with le and la." },
  { id: 'fr.a1.cafe.175', kind: 'sentence', level: 'a1', theme: 'cafe', fr: "J'attends une amie.", en: 'I am waiting for a friend.', ipa: '/ʒa.tɑ̃ zyn a.mi/', respell: 'zha-tahⁿ zün a-MEE', pronoun: 'je', form: null, family: 'elision', tags: ['pronoun', 'je', 'elision', 'vowel-initial', 'nasal'], drills: S, audioRef: null, version: 1 },

  // ── The register set: one question, three rooms ─────────────────────────
  //
  // .177 and .178 are the same sound. The silent S is the only difference and
  // it exists only on the page, which is exactly what makes vous ambiguous in
  // a way the English "you" never warns anyone about.
  { id: 'fr.a1.cafe.176', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Tu es prêt ?', en: 'Are you ready? (to one person you are close to)', ipa: '/ty ɛ pʁɛ/', respell: 'tü eh PREH', pronoun: 'tu', form: 'es', family: 'register', tags: ['pronoun', 'tu', 'etre', 'register'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.177', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Vous êtes prêt ?', en: 'Are you ready? (to one person, politely)', ipa: '/vu zɛt pʁɛ/', respell: 'voo zet PREH', pronoun: 'vous', form: 'êtes', family: 'register', tags: ['pronoun', 'vous', 'etre', 'register', 'polite-singular'], drills: S, audioRef: null, version: 1, notes: 'One person, kept at a distance, and the verb still takes the plural form.' },
  { id: 'fr.a1.cafe.178', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Vous êtes prêts ?', en: 'Are you ready? (to a group)', ipa: '/vu zɛt pʁɛ/', respell: 'voo zet PREH', pronoun: 'vous', form: 'êtes', family: 'register', tags: ['pronoun', 'vous', 'etre', 'register', 'plural'], drills: S, audioRef: null, version: 1, notes: 'Identical out loud to .177. Only the silent S on prêts separates them.' },

  // ── Appended last, and belonging to the `on` family above ────────────────
  //
  // Authored after the register set was already numbered. Ids are the SRS key
  // and are never renumbered to make a file read better, so it sits here and
  // `familyIds('on')` is what puts it back beside its pair.
  { id: 'fr.a1.cafe.179', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Nous sommes là.', en: 'We are here.', ipa: '/nu sɔm la/', respell: 'noo som LA', pronoun: 'nous', form: 'sommes', family: 'on', tags: ['pronoun', 'nous', 'etre', 'written'], drills: S, audioRef: null, version: 1, notes: 'The written twin of .167, and the line the opening scene puts in your mouth.' },
];

/** Lookup by id. The lesson body builds every screen through this. */
export const BY_ID: ReadonlyMap<string, PronounSentence> = new Map(PRONOUNS.map((w) => [w.id, w]));

/** Every authored id, in sequence order. */
export const PRONOUN_IDS: string[] = PRONOUNS.map((w) => w.id);

/** The ids of one teaching family, in sequence order. Drives the drill pools
 *  and the SRS tranche slices so neither restates a word list. */
export const familyIds = (f: PronounSentence['family']): string[] =>
  PRONOUNS.filter((w) => w.family === f).map((w) => w.id);

/** The ids showing one pronoun, in sequence order. This is what lets the test
 *  assert "all nine are taught" against the corpus rather than against a hand
 *  list that could quietly lose `elles`. */
export const pronounIds = (p: NonNullable<PronounSentence['pronoun']>): string[] =>
  PRONOUNS.filter((w) => w.pronoun === p).map((w) => w.id);

/** The nine, in paradigm order. Named here so the lesson, the batch and the
 *  test all count the same set. */
export const THE_NINE = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles'] as const;

/** The six forms of être, in paradigm order, DERIVED from the corpus rather
 *  than typed. If a paradigm sentence is ever reworded onto a different form,
 *  this moves with it and the reframe's arithmetic stops being a claim nobody
 *  checks. */
export const THE_SIX: string[] = [
  ...new Set(PRONOUNS.filter((w) => w.family === 'paradigm').map((w) => w.form!)),
];

/** Items already in the shipped corpus that this lesson teaches FROM rather
 *  than teaching. Referenced by id from `practice`, from the drills and from
 *  the glossary, where the job is "you already meet this" rather than "here is
 *  a new sentence".
 *
 *  Every one of these was verified published in POSTGRES on 2026-08-05, not
 *  only present in seed.json: the two drift, and an id that exists only in the
 *  seed renders as an empty card on a device. */
export const REUSED: { id: string; fr: string; why: string }[] = [
  { id: 'fr.a1.cafe.088', fr: 'Je prends un café noir.', why: 'je, in the same café the authored set uses' },
  { id: 'fr.a1.cuisine.191', fr: 'Tu manges une pomme à midi.', why: 'tu, addressed to one person' },
  { id: 'fr.a1.cafe.095', fr: 'Il commande deux croissants.', why: 'il, and a real man rather than the impersonal one' },
  { id: 'fr.a1.cafe.089', fr: 'Elle boit un chocolat chaud.', why: 'elle, the same sentence shape as the il above' },
  { id: 'fr.a1.ecole.262', fr: 'On apprend les couleurs en classe.', why: 'on, already published and already colloquial' },
  { id: 'fr.a1.cafe.090', fr: 'Nous allons au café ce matin.', why: 'nous, the form a course hands the learner first' },
  { id: 'fr.a1.objets.113', fr: "Vous avez un beau parapluie aujourd'hui.", why: 'vous, and ambiguous between one person and several, which is the point' },
  { id: 'fr.a1.cafe.091', fr: 'Ils arrivent à la terrasse.', why: 'ils, at the same terrace' },
  { id: 'fr.a1.cafe.100', fr: 'Elles commandent une salade.', why: 'elles, one of only eighteen in the whole corpus' },
  { id: 'fr.a1.maison.005', fr: 'Il y a une table dans le salon.', why: 'the impersonal il, in the most common sentence frame in the language' },
  { id: 'fr.a1.deplacements.262', fr: 'Il est huit heures et demie.', why: 'the impersonal il, telling the time' },
  { id: 'fr.a1.ecole.124', fr: 'Il y a vingt élèves dans notre classe.', why: 'the impersonal il again, so it reads as a family rather than an oddity' },
  { id: 'fr.a1.marche.110', fr: 'Elles regardent les fruits exotiques.', why: 'elles, spent carefully: there are only eighteen' },
  { id: 'fr.a1.objets.114', fr: 'Elles ont de nouveaux gants.', why: 'elles' },
  { id: 'fr.a1.sports-et-loisirs.124', fr: 'Elles arrivent tôt pour le match.', why: 'elles' },
  { id: 'fr.a1.marche.131', fr: 'Ils vendent des herbes fraîches.', why: 'ils, to sort against the elles above' },
  { id: 'fr.a1.sports-et-loisirs.117', fr: 'Ils gagnent souvent leurs matchs.', why: 'ils' },
  { id: 'fr.a1.dictee.267', fr: 'Vous copiez la phrase au tableau.', why: 'vous, plural to a classroom' },
  { id: 'fr.a1.routines.125', fr: 'Tu prends ta douche le matin.', why: 'tu, singular and close' },
];

export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

/** Corpus items that are `kind: 'sentence'` and are grammar notes written in
 *  French. Every one of them opens on `on`, which makes them look ideal for a
 *  lesson about `on` and is exactly the trap: their generic `on` is a real use
 *  of the pronoun, and they are nonsense to hear in a listening mission and
 *  impossible to spell in a dictée.
 *
 *  The build brief named two of these. There is a THIRD of the same shape,
 *  `fr.a1.deplacements.014`, found by searching for the pattern rather than for
 *  the two sentences (2026-08-05). All three are listed.
 *
 *  Named here rather than merely avoided, so a1-05-pronoms.test.ts can assert
 *  the lesson never reaches for one. A rule that lives only in a comment is a
 *  rule the next author breaks. */
export const METALINGUISTIC_TRAP_IDS: string[] = [
  'fr.a1.ecole.011',        // On dit toujours « à l'école », jamais « en école ».
  'fr.a1.corps.012',        // On utilise l'article défini avec les parties du corps, pas le possessif.
  'fr.a1.deplacements.014', // On utilise en pour les transports fermés et à pour les transports ouverts.
];

/** The display quadruple every card shows, assembled from the corpus so that no
 *  screen ever restates a transcription. Brackets and slashes are added HERE,
 *  once, rather than baked into the stored data: the validator checks the
 *  rendered form, and storing them would double them up. */
export function display(id: string): { fr: string; ipa: string; respell: string; en: string; form: string | null } {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`pronoms corpus: unknown id "${id}"`);
  return {
    fr: w.fr,
    ipa: w.ipa ?? '',
    respell: w.respell ? `[${w.respell}]` : '',
    en: w.en,
    form: w.form,
  };
}

/** The bracketed respelling alone, which is what a deck card's `sub` line
 *  carries. Split out so no section builds the brackets itself. */
export const sub = (id: string): string => display(id).respell;

/** The French line alone. */
export const fr = (id: string): string => display(id).fr;

/** The corpus Item, stripped of the lesson-only fields. `pronoun`, `form` and
 *  `family` are lesson display data and live in the lesson's own section
 *  bodies, not on the shared row. */
export function toItem(w: PronounSentence): Item {
  const { pronoun: _p, form: _f, family: _fam, ...item } = w;
  return item;
}
