// The a1.06 corpus: what this lesson had to author, and what it reuses.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 32 entries below and for every
// respelling a1.06 puts on a screen. The lesson body reads `fr`, `ipa`, `respell`
// and `en` FROM HERE and never restates them, for the same reason
// elision-corpus.ts and pronoms-sujets-corpus.ts exist: before those files one
// word's transcription was typed by hand in five sections and the five copies
// were free to drift.
//
// ── Why this lesson authors more than any A1 lesson before it ──────────────
//
// The verb barely appears in the shipped corpus. Counted on 2026-08-05, across
// the whole seed:
//
//   je suis 19   tu es 4    il est 28   elle est 25   on est 6
//   nous sommes 25   vous êtes 8   ils sont 10   elles sont 2
//   c'est 84     ce sont 3
//
// Roughly a hundred sentences for the entire verb, and the four `tu es` are one
// bare headword, one subordinate clause about resting, and two authored by a1.05
// last week. For scale, a1.05 had 477 `je` sentences to choose from.
//
// The build brief quoted `tu es 1`. That was true when the brief was written and
// is no longer: a1.05 shipped two more. The direction of the finding is
// unchanged, so the plan did not move.
//
// What the corpus has is not merely thin, it is the WRONG SHAPE in three ways,
// and no amount of searching fixes any of them:
//
//   1. NO PARADIGM IN ONE FRAME. The lesson's claim is that six forms have no
//      pattern and must be met as a set. Showing that needs one sentence per
//      form with everything else held constant. Every être sentence in the
//      corpus was written for its own theme, so comparing two of them compares
//      their subject matter as well as their verb.
//
//   2. NO NATIONALITY ADJECTIVE, ANYWHERE. Searching the whole corpus for a form
//      of être followed by français/française/belge/espagnole/canadien returns
//      NOTHING. Origin is one of the three uses the canDo names and the corpus
//      cannot teach it at all.
//
//   3. THE C'EST PAIRS ARE HALF-BUILT. a1.11 authored fr.a1.metiers.244 through
//      .247 last week, which is exactly `Je suis professeur.` against `C'est un
//      professeur.` That is one pair. A rule needs more than one instance to
//      read as a rule rather than as a fact about professeur.
//
// Everything else is reused by id and untouched: see REUSED below.
//
// ── The frame, and why it is one frame ─────────────────────────────────────
//
// Every authored paradigm sentence happens at one conference badge table. That
// is not decoration. être is the verb of introductions and the canDo is
// literally who you are, what you do and where you are from, so a first meeting
// is where all four uses occur naturally within a minute of each other. Holding
// one frame also means the ONLY thing varying between two paradigm cards is the
// pronoun and its form of the verb, which is the comparison every mission asks
// the learner to make.
//
// ── Theme, and the `identite` question ─────────────────────────────────────
//
// a1.06 shipped declaring `themes: ["identite"]`. THERE IS NO `identite` THEME.
// 33 themes exist and it is not one of them, so the binding resolves to nothing
// and always has. The unit's binding is CLEARED rather than the theme created:
// a1.03, a1.04, a1.05 and a1.11 are all grammar units with no theme, a new theme
// is product-visible in the flashcard hub and the Den, and this lesson draws
// from five themes rather than one. See the batch script, which refuses to write
// a themes binding onto this unit.
//
// The items themselves continue `metiers`, which ends at .248 in both Postgres
// and seed.json (checked 2026-08-05; the two drift, and the higher of the pair
// is what a new id has to clear). metiers is chosen over salutations or famille
// for one concrete reason: it ALREADY HOLDS the material this lesson completes.
// .244 `Je suis professeur.`, .245 `Elle est avocate.`, .246 `Il est boulanger.`
// and .247 `C'est un professeur.` were authored by a1.11 and are referenced by
// id from the c'est act, so the authored half sits directly beside the half the
// learner already met.
//
// Ids are the SRS key. Nothing here is ever renumbered; new entries append.
//
// ── kind: every entry is a `sentence`, deliberately ───────────────────────
//
// flashhub-coverage.test.ts fails the build when two NON-sentence items in one
// theme share an `fr`, because the flashcard hub keys decks on `fr` and would
// serve the same card twice. This lesson authors two pairs that are meant to be
// identical out loud (`Je suis fatigué.` against `Je suis fatiguée.`, and the
// masculine and feminine of français) and several that are meant to be compared
// directly. Authoring those as words would put the rule under pressure for no
// gain: they are sentences, they are stored as sentences, and the rule leaves
// them alone.
//
// ── What is NOT here, and why ─────────────────────────────────────────────
//
// - NO WRONG SENTENCES. `Il est un médecin.` is the error this lesson exists to
//   stop and it is never a corpus row. A corpus item is released to the
//   flashcard hub and to spaced repetition, so authoring the error would drill
//   it. Wrong forms live in `commonErrors`, in scene break cards and in
//   `errorSpot` prompts, which are the surfaces that show a thing in order to
//   reject it.
// - NO `avoir`. `ils ont` appears once, as a listening line and a listenChoose
//   clip, because `ils sont` against `ils ont` is the pair that matters and it
//   points at a1.07. It is a display string on those two surfaces and NOT a
//   corpus row, so this lesson adds nothing to a1.07's material.
// - NO passé composé. être is its auxiliary for a closed set of verbs and that
//   is a2.21/a2.23. The learner has no past tense, so the reference would land
//   as noise.
//
// ── Respelling convention ─────────────────────────────────────────────────
//
// House convention: hyphenated syllables, stressed syllable capitalised, nasal
// vowels closed with a SUPERSCRIPT n and never a plain n or m, /ø œ/ as EU,
// /y/ as Ü, /ɑ̃/ as AHⁿ against /ɛ̃/ as Aⁿ and /ɔ̃/ as OHⁿ.
//
// This bites here harder than anywhere. `sont` IS a nasal vowel and it is one of
// the six forms the lesson is named for, so [SONT] or [SON] would be wrong on
// the single card the unit exists to teach. a1-06-etre.test.ts checks every
// entry through `hasPlainNasalFor` from density.logic.ts rather than a
// re-implementation, because the corpus at large is not a safe source of truth
// for this rule: 71 of the 180 respellings in the `nombres` theme break it
// today.
//
// Note `sommes` legitimately ends [SOM]. The doubled m in the spelling is a real
// pronounced consonant, which is the distinction hasPlainNasalFor draws and
// hasPlainNasal alone cannot.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** A corpus entry plus the lesson-facing display data the renderer needs. */
export type EtreSentence = Omit<Item, 'drills'> & {
  /** The form of être this sentence puts on screen. `null` on the two entries
   *  that carry no form of être at all. Drives the paradigm table so no screen
   *  retypes a form. */
  form: 'suis' | 'es' | 'est' | 'sommes' | 'êtes' | 'sont' | null;
  /** Which of the four uses this sentence demonstrates. `paradigm` is the spine
   *  itself, `contrast` is the c'est/il est comparison, `null` is neither. */
  use: 'identity' | 'profession' | 'origin' | 'description' | null;
  /** Which teaching family. Drives the drill pools and the deckTranche slices
   *  so neither restates a word list. */
  family: 'paradigm' | 'identity' | 'profession' | 'origin' | 'description' | 'contrast' | 'liaison';
  drills: Item['drills'];
};

/** Speakable: the mic-scored deck runs `voiceflash`, and an item without it
 *  renders in a speak mission as a card the mic cannot score. */
const S: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
/** Speakable and spellable. */
const SD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

/** The lesson's 32 authored entries, in sequence order. */
export const ETRE: EtreSentence[] = [
  // ── The paradigm: six forms, one frame, nothing else moving ──────────────
  //
  // Six sentences and six forms, which is the reframe made literal. Everything
  // after "ici" is identical across all six on purpose: the learner is being
  // asked to hear ONE difference, and a frame that also changed would hide it.
  //
  // Only six, not nine. a1.05 already taught that il/elle/on share a form and
  // ils/elles share another, and it shipped a nine-row paradigm sheet doing it.
  // Re-authoring the nine here would spend six items restating last week's
  // lesson; the table names the sharing in its cells instead.
  { id: 'fr.a1.metiers.249', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Je suis ici pour la conférence.', en: 'I am here for the conference.', ipa: '/ʒə sɥi i.si puʁ la kɔ̃.fe.ʁɑ̃s/', respell: 'zhuh swee ee-see poor la kohⁿ-fay-RAHⁿS', form: 'suis', use: 'identity', family: 'paradigm', tags: ['etre', 'paradigm', 'je', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'suis. Said far more often than any other form, because most of what you say is about yourself.' },
  { id: 'fr.a1.metiers.250', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Tu es ici pour la conférence ?', en: 'Are you here for the conference?', ipa: '/ty ɛ i.si puʁ la kɔ̃.fe.ʁɑ̃s/', respell: 'tü eh ee-see poor la kohⁿ-fay-RAHⁿS', form: 'es', use: 'identity', family: 'paradigm', tags: ['etre', 'paradigm', 'tu', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'es. Two letters, and no S sound at the end of it.' },
  { id: 'fr.a1.metiers.251', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Il est ici pour la conférence.', en: 'He is here for the conference.', ipa: '/i lɛ i.si puʁ la kɔ̃.fe.ʁɑ̃s/', respell: 'eel eh ee-see poor la kohⁿ-fay-RAHⁿS', form: 'est', use: 'identity', family: 'paradigm', tags: ['etre', 'paradigm', 'il', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'est. The T is silent, so es and est are the same sound.' },
  { id: 'fr.a1.metiers.252', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Nous sommes ici pour la conférence.', en: 'We are here for the conference.', ipa: '/nu sɔm i.si puʁ la kɔ̃.fe.ʁɑ̃s/', respell: 'noo som ee-see poor la kohⁿ-fay-RAHⁿS', form: 'sommes', use: 'identity', family: 'paradigm', tags: ['etre', 'paradigm', 'nous', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'sommes. The doubled m really does sound, which is why it is not a nasal vowel.' },
  { id: 'fr.a1.metiers.253', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Vous êtes ici pour la conférence ?', en: 'Are you here for the conference?', ipa: '/vu zɛt i.si puʁ la kɔ̃.fe.ʁɑ̃s/', respell: 'voo zet ee-see poor la kohⁿ-fay-RAHⁿS', form: 'êtes', use: 'identity', family: 'paradigm', tags: ['etre', 'paradigm', 'vous', 'liaison', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'êtes, and the only form in the six that binds to its pronoun out loud: voo-ZET, never voo ETT.' },
  { id: 'fr.a1.metiers.254', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Ils sont ici pour la conférence.', en: 'They are here for the conference.', ipa: '/il sɔ̃ i.si puʁ la kɔ̃.fe.ʁɑ̃s/', respell: 'eel sohⁿ ee-see poor la kohⁿ-fay-RAHⁿS', form: 'sont', use: 'identity', family: 'paradigm', tags: ['etre', 'paradigm', 'ils', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'sont. A nasal vowel and no T sound. Compare ils ont, which is the next lesson.' },

  // ── Use 1, identity: who you are ─────────────────────────────────────────
  //
  // Identity splits in two and the split IS the c'est rule arriving early. A
  // name after je suis is bare; a person pointed at takes c'est. Both are here
  // so the contrast act has something already met to build on.
  { id: 'fr.a1.metiers.255', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Je suis Camille.', en: 'I am Camille.', ipa: '/ʒə sɥi ka.mij/', respell: 'zhuh swee ka-MEEY', form: 'suis', use: 'identity', family: 'identity', tags: ['etre', 'identity', 'name'], drills: S, audioRef: null, version: 1, notes: 'A name takes nothing in front of it. It is already as specified as a word can be.' },
  { id: 'fr.a1.metiers.256', kind: 'sentence', level: 'a1', theme: 'metiers', fr: "C'est Marc.", en: 'This is Marc.', ipa: '/sɛ maʁk/', respell: 'seh MARK', form: 'est', use: 'identity', family: 'identity', tags: ['etre', 'identity', 'cest', 'name'], drills: S, audioRef: null, version: 1, notes: 'Introducing somebody else. c est points at a person; il est would describe one.' },
  { id: 'fr.a1.metiers.257', kind: 'sentence', level: 'a1', theme: 'metiers', fr: "C'est ma sœur.", en: 'This is my sister.', ipa: '/sɛ ma sœʁ/', respell: 'seh ma SEUR', form: 'est', use: 'identity', family: 'identity', tags: ['etre', 'identity', 'cest'], drills: S, audioRef: null, version: 1, notes: 'ma is a little word in front of the noun, so the sentence takes c est.' },
  { id: 'fr.a1.metiers.258', kind: 'sentence', level: 'a1', theme: 'metiers', fr: "C'est mon collègue.", en: 'This is my colleague.', ipa: '/sɛ mɔ̃ kɔ.lɛɡ/', respell: 'seh mohⁿ ko-LEG', form: 'est', use: 'identity', family: 'identity', tags: ['etre', 'identity', 'cest', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.259', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Ce sont mes parents.', en: 'These are my parents.', ipa: '/sə sɔ̃ me pa.ʁɑ̃/', respell: 'suh sohⁿ may pa-RAHⁿ', form: 'sont', use: 'identity', family: 'identity', tags: ['etre', 'identity', 'cest', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The plural of c est. Nobody says ce est, and almost nobody remembers ce sont.' },

  // ── Use 2, profession: what you do, and the gap where English wants a word ─
  //
  // a1.11 taught this as a fact about professions. These extend it across the
  // paradigm so it reads as a fact about être.
  { id: 'fr.a1.metiers.260', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Je suis architecte.', en: 'I am an architect.', ipa: '/ʒə sɥi aʁ.ʃi.tɛkt/', respell: 'zhuh swee ar-shee-TEKT', form: 'suis', use: 'profession', family: 'profession', tags: ['etre', 'profession', 'no-article'], drills: S, audioRef: null, version: 1, notes: 'No un. English needs one and French forbids it, so the error is audible every time.' },
  { id: 'fr.a1.metiers.261', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Elle est infirmière.', en: 'She is a nurse.', ipa: '/ɛ lɛ tɛ̃.fiʁ.mjɛʁ/', respell: 'el eh taⁿ-feer-MYEHR', form: 'est', use: 'profession', family: 'profession', tags: ['etre', 'profession', 'no-article'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.262', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Tu es étudiant ?', en: 'Are you a student?', ipa: '/ty ɛ ze.ty.djɑ̃/', respell: 'tü eh zay-tü-DYAHⁿ', form: 'es', use: 'profession', family: 'profession', tags: ['etre', 'profession', 'no-article', 'tu', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Being a student counts as a job here. The gap after es is the grammar.' },
  { id: 'fr.a1.metiers.263', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Vous êtes ingénieur ?', en: 'Are you an engineer?', ipa: '/vu zɛt ɛ̃.ʒe.njœʁ/', respell: 'voo zet aⁿ-zhay-NYEUR', form: 'êtes', use: 'profession', family: 'profession', tags: ['etre', 'profession', 'no-article', 'liaison', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The liaison and the missing article in one short question.' },

  // ── Use 3, origin: two shapes that behave differently ────────────────────
  //
  // The canDo's third clause hides two grammars. A nationality is an ADJECTIVE
  // and agrees; de plus a place is a PREPOSITION and never moves. Nothing in the
  // corpus taught either, so all seven are authored.
  { id: 'fr.a1.metiers.264', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Je suis français.', en: 'I am French. (said by a man)', ipa: '/ʒə sɥi fʁɑ̃.sɛ/', respell: 'zhuh swee frahⁿ-SEH', form: 'suis', use: 'origin', family: 'origin', tags: ['etre', 'origin', 'adjective', 'agreement', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Lowercase f. The adjective is not capitalised in French the way the English is.' },
  { id: 'fr.a1.metiers.265', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Je suis française.', en: 'I am French. (said by a woman)', ipa: '/ʒə sɥi fʁɑ̃.sɛz/', respell: 'zhuh swee frahⁿ-SEZ', form: 'suis', use: 'origin', family: 'origin', tags: ['etre', 'origin', 'adjective', 'agreement', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The e wakes the s, and the two are audibly different. This is the agreement a1.01 taught on enchanté.' },
  { id: 'fr.a1.metiers.266', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Elle est espagnole.', en: 'She is Spanish.', ipa: '/ɛ lɛ tɛs.pa.ɲɔl/', respell: 'el eh tes-pa-NYOL', form: 'est', use: 'origin', family: 'origin', tags: ['etre', 'origin', 'adjective', 'agreement'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.267', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Ils sont canadiens.', en: 'They are Canadian.', ipa: '/il sɔ̃ ka.na.djɛ̃/', respell: 'eel sohⁿ ka-na-DYAⁿ', form: 'sont', use: 'origin', family: 'origin', tags: ['etre', 'origin', 'adjective', 'agreement', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Plural group, plural adjective. The s is silent and the agreement is only on the page.' },
  { id: 'fr.a1.metiers.268', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Je suis de Lyon.', en: 'I am from Lyon.', ipa: '/ʒə sɥi də ljɔ̃/', respell: 'zhuh swee duh LYOHⁿ', form: 'suis', use: 'origin', family: 'origin', tags: ['etre', 'origin', 'preposition', 'no-agreement', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'de plus a town. Nothing agrees with anything, whoever is saying it.' },
  { id: 'fr.a1.metiers.269', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Elle est de Marseille.', en: 'She is from Marseille.', ipa: '/ɛ lɛ də maʁ.sɛj/', respell: 'el eh duh mar-SEY', form: 'est', use: 'origin', family: 'origin', tags: ['etre', 'origin', 'preposition', 'no-agreement'], drills: SD, audioRef: null, version: 1, notes: 'A woman, and de still does not move. Compare elle est espagnole, where the adjective did.' },
  { id: 'fr.a1.metiers.270', kind: 'sentence', level: 'a1', theme: 'metiers', fr: "Vous êtes d'où ?", en: 'Where are you from?', ipa: '/vu zɛt du/', respell: 'voo zet DOO', form: 'êtes', use: 'origin', family: 'origin', tags: ['etre', 'origin', 'question', 'liaison'], drills: S, audioRef: null, version: 1, notes: 'The question that gets you both origin answers. de plus où, elided.' },

  // ── Use 4, description: the smallest of the four ─────────────────────────
  //
  // Three items, and deliberately no more. Description is not in the canDo, so
  // it earns a mission rather than an act: see the header of etre-lesson.ts for
  // why it is here at all.
  { id: 'fr.a1.metiers.271', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Je suis fatigué.', en: 'I am tired. (said by a man)', ipa: '/ʒə sɥi fa.ti.ɡe/', respell: 'zhuh swee fa-tee-GAY', form: 'suis', use: 'description', family: 'description', tags: ['etre', 'description', 'adjective', 'agreement'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.272', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Je suis fatiguée.', en: 'I am tired. (said by a woman)', ipa: '/ʒə sɥi fa.ti.ɡe/', respell: 'zhuh swee fa-tee-GAY', form: 'suis', use: 'description', family: 'description', tags: ['etre', 'description', 'adjective', 'agreement', 'silent-agreement'], drills: S, audioRef: null, version: 1, notes: 'Identical out loud to the masculine. The agreement is real and it is silent, exactly like désolé and désolée in a1.01.' },
  { id: 'fr.a1.metiers.273', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Elle est grande.', en: 'She is tall.', ipa: '/ɛ lɛ ɡʁɑ̃d/', respell: 'el eh GRAHⁿD', form: 'est', use: 'description', family: 'description', tags: ['etre', 'description', 'adjective', 'agreement', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Here the agreement IS audible: the e wakes the d. Compare fatiguée, where it stays silent.' },

  // ── The contrast: c'est against il est, which is the act this lesson is for ─
  //
  // These are authored as PAIRS and are meant to be read across, not down. Each
  // pair holds the same person and the same job, and the only thing that moves
  // is whether a little word appears in front of the noun.
  //
  // a1.11's fr.a1.metiers.244 / .247 (`Je suis professeur.` / `C'est un
  // professeur.`) is the third pair and is REUSED rather than re-authored.
  { id: 'fr.a1.metiers.274', kind: 'sentence', level: 'a1', theme: 'metiers', fr: "C'est un médecin.", en: 'That is a doctor.', ipa: '/sɛ tœ̃ med.sɛ̃/', respell: 'seh tuhⁿ mayd-SAⁿ', form: 'est', use: 'profession', family: 'contrast', tags: ['etre', 'cest', 'determiner', 'contrast-pair', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'un is the little word in front, so the sentence takes c est.' },
  { id: 'fr.a1.metiers.275', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Il est médecin.', en: 'He is a doctor.', ipa: '/i lɛ med.sɛ̃/', respell: 'eel eh mayd-SAⁿ', form: 'est', use: 'profession', family: 'contrast', tags: ['etre', 'il-est', 'bare-noun', 'contrast-pair', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Same doctor, no little word, so il est. Il est un médecin is the sentence to unlearn.' },
  { id: 'fr.a1.metiers.276', kind: 'sentence', level: 'a1', theme: 'metiers', fr: "C'est le directeur.", en: 'That is the director.', ipa: '/sɛ lə di.ʁɛk.tœʁ/', respell: 'seh luh dee-rek-TEUR', form: 'est', use: 'profession', family: 'contrast', tags: ['etre', 'cest', 'determiner', 'contrast-pair'], drills: S, audioRef: null, version: 1, notes: 'le counts too. The test is any little word, not the indefinite one specifically.' },
  { id: 'fr.a1.metiers.277', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Il est directeur.', en: 'He is a director.', ipa: '/i lɛ di.ʁɛk.tœʁ/', respell: 'eel eh dee-rek-TEUR', form: 'est', use: 'profession', family: 'contrast', tags: ['etre', 'il-est', 'bare-noun', 'contrast-pair'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.278', kind: 'sentence', level: 'a1', theme: 'metiers', fr: "C'est une bonne idée.", en: 'That is a good idea.', ipa: '/sɛ tyn bɔn i.de/', respell: 'seh tün bon ee-DAY', form: 'est', use: null, family: 'contrast', tags: ['etre', 'cest', 'determiner', 'idea'], drills: S, audioRef: null, version: 1, notes: 'Not a person at all. c est also points at a thing, a situation or an idea, which il est never does.' },

  // ── The liaison, and the pair that points at a1.07 ───────────────────────
  { id: 'fr.a1.metiers.279', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Vous êtes en retard.', en: 'You are late.', ipa: '/vu zɛt ɑ̃ ʁə.taʁ/', respell: 'voo zet ahⁿ ruh-TAR', form: 'êtes', use: 'description', family: 'liaison', tags: ['etre', 'liaison', 'vous', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Two joins in four words, and the first one is the one nobody hears themselves miss.' },
  { id: 'fr.a1.metiers.280', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Ils sont en retard.', en: 'They are late.', ipa: '/il sɔ̃ tɑ̃ ʁə.taʁ/', respell: 'eel sohⁿ tahⁿ ruh-TAR', form: 'sont', use: 'description', family: 'liaison', tags: ['etre', 'liaison', 'ils', 'contrast-pair', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The half of the ils sont / ils ont pair that belongs to this lesson. The other half is a1.07.' },
];

/** Lookup by id. The lesson body builds every screen through this. */
export const BY_ID: ReadonlyMap<string, EtreSentence> = new Map(ETRE.map((w) => [w.id, w]));

/** Every authored id, in sequence order. */
export const ETRE_IDS: string[] = ETRE.map((w) => w.id);

/** The ids of one teaching family, in sequence order. Drives the drill pools and
 *  the SRS tranche slices so neither restates a word list. */
export const familyIds = (f: EtreSentence['family']): string[] =>
  ETRE.filter((w) => w.family === f).map((w) => w.id);

/** The ids demonstrating one USE, in sequence order. This is what lets the test
 *  assert "every use the canDo names reaches a section" against the corpus
 *  rather than against a hand list that could quietly lose `origin`. */
export const useIds = (u: NonNullable<EtreSentence['use']>): string[] =>
  ETRE.filter((w) => w.use === u).map((w) => w.id);

/** The ids carrying one FORM of être, in sequence order. The test asserts each
 *  of the six is taught by name; `tu es` and `vous êtes` are the ones most
 *  likely to go thin, because the shipped corpus has 4 and 8 examples. */
export const formIds = (f: NonNullable<EtreSentence['form']>): string[] =>
  ETRE.filter((w) => w.form === f).map((w) => w.id);

/** The six forms, in paradigm order. Named here so the lesson, the batch and
 *  the test all count the same set rather than three hand lists. */
export const THE_SIX = ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'] as const;

/** The six forms DERIVED from the paradigm sentences rather than typed. If a
 *  paradigm sentence is ever reworded onto a different form, this moves with it
 *  and the reframe's arithmetic stops being a claim nobody checks. */
export const PARADIGM_FORMS: string[] = [
  ...new Set(ETRE.filter((w) => w.family === 'paradigm').map((w) => w.form!)),
];

/** The four uses this lesson teaches, in the order the acts take them. The
 *  first three are the canDo's own clauses; `description` is the fourth and is
 *  argued for in the header of etre-lesson.ts. */
export const THE_USES = ['identity', 'profession', 'origin', 'description'] as const;

/** The c'est / il est pairs, as [with a determiner, bare]. Built here so the
 *  two-column table, the sort drill and the test all read ONE list: a table that
 *  hand-paired them would be free to drift from the drill that scores them.
 *
 *  The third pair is a1.11's, referenced by id and untouched. */
export const CONTRAST_PAIRS: [string, string][] = [
  ['fr.a1.metiers.274', 'fr.a1.metiers.275'],
  ['fr.a1.metiers.276', 'fr.a1.metiers.277'],
  ['fr.a1.metiers.247', 'fr.a1.metiers.244'],
];

/** Items already in the shipped corpus that this lesson teaches FROM rather than
 *  teaching. Referenced by id from the sections, the drills and the glossary,
 *  where the job is "you already met this" rather than "here is a new sentence".
 *
 *  Every one of these was verified published in POSTGRES, not only present in
 *  seed.json: the two drift, and an id that exists only in the seed renders as
 *  an empty card on a device. The batch re-checks them before it writes.
 *
 *  The metiers .244 to .247 run is a1.11's, authored 2026-08-04. It is the
 *  single most valuable thing this lesson inherits: `Je suis professeur.`
 *  against `C'est un professeur.` is the contrast act's opening pair, already
 *  met, already drilled. */
export const REUSED: { id: string; fr: string; why: string }[] = [
  { id: 'fr.a1.metiers.244', fr: 'Je suis professeur.', why: "a1.11's bare profession, and half of the c'est pair" },
  { id: 'fr.a1.metiers.245', fr: 'Elle est avocate.', why: 'a1.11, bare profession with a feminine job noun' },
  { id: 'fr.a1.metiers.246', fr: 'Il est boulanger.', why: 'a1.11, bare profession' },
  { id: 'fr.a1.metiers.247', fr: "C'est un professeur.", why: "a1.11's exception, and the other half of the pair" },
  { id: 'fr.a1.metiers.014', fr: 'Elle est médecin.', why: 'the bare form of the médecin pair authored above' },
  { id: 'fr.a1.cafe.177', fr: 'Vous êtes prêt ?', why: 'a1.05, the liaison with a description adjective behind it' },
  { id: 'fr.a1.cafe.160', fr: 'Vous êtes combien ?', why: 'a1.05, the liaison in the question every learner hears' },
  { id: 'fr.a1.cafe.154', fr: 'Je suis à la terrasse.', why: 'a1.05, je suis met as a carrier before the verb was the subject' },
  { id: 'fr.a1.cafe.159', fr: 'Nous sommes trois à la terrasse.', why: 'a1.05, nous sommes already met' },
  { id: 'fr.a1.cafe.167', fr: 'On est là.', why: 'a1.05, on takes the il form, which is the collapse this lesson inherits' },
  { id: 'fr.a1.cafe.164', fr: 'Ils sont là.', why: 'a1.05, the shortest ils sont in the corpus' },
  { id: 'fr.a1.cafe.166', fr: 'Elles sont là.', why: 'a1.05, elles sharing the sont row' },
  { id: 'fr.a1.corps.216', fr: 'Tu dois te reposer si tu es fatigué.', why: 'one of only four tu es sentences in the whole corpus' },
];

export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

/** The display quadruple every card shows, assembled from the corpus so that no
 *  screen ever restates a transcription. Brackets and slashes are added HERE,
 *  once, rather than baked into the stored data: the validator checks the
 *  rendered form, and storing them would double them up. */
export function display(id: string): { fr: string; ipa: string; respell: string; en: string; form: string | null } {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`etre corpus: unknown id "${id}"`);
  return {
    fr: w.fr,
    ipa: w.ipa ?? '',
    respell: w.respell ? `[${w.respell}]` : '',
    en: w.en,
    form: w.form,
  };
}

/** The French line alone. Falls back to the REUSED table for a1.11's and a1.05's
 *  items, which this lesson names but does not own, so a section can reference
 *  any id it teaches from without knowing which side of the line it sits on. */
export const fr = (id: string): string => {
  const mine = BY_ID.get(id);
  if (mine) return mine.fr;
  const borrowed = REUSED.find((r) => r.id === id);
  if (!borrowed) throw new Error(`etre corpus: unknown id "${id}"`);
  return borrowed.fr;
};

/** The bracketed respelling alone, which is what a deck card's `sub` line
 *  carries. Split out so no section builds the brackets itself. Empty for a
 *  reused item: this lesson does not own its transcription and restating one
 *  here would be a second copy free to drift from the row it came from. */
export const sub = (id: string): string => (BY_ID.has(id) ? display(id).respell : '');

/** The corpus Item, stripped of the lesson-only fields. `form`, `use` and
 *  `family` are lesson display data and live in the lesson's own section
 *  bodies, not on the shared row. */
export function toItem(w: EtreSentence): Item {
  const { form: _f, use: _u, family: _fam, ...item } = w;
  return item;
}
