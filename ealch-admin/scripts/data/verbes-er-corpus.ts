// The a2.01 corpus: what this lesson had to author, what it imports, and what
// its brief got wrong.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 25 authored entries below and
// for every respelling a2.01 puts on a screen. The lesson body reads `fr`, `ipa`,
// `respell` and `en` FROM HERE and never restates them.
//
// ── WHAT THE BRIEF GOT WRONG, MEASURED ─────────────────────────────────────
//
// 1. `lessonIds: []  you are filling this`. FALSE. The unit already carried
//    `a2.01.l1`: a seven-section pre-v2 stub with no section ids, no acts, no
//    reframe, no deckTranche, a `practice` at `skill: 'write'` (which draws no
//    writing surface at all) and a flat quiz whose questions have no `why` —
//    which is exactly why `a2.01.l1` sits on the waiver list in
//    lesson-contract.test.ts. This is a REBUILD, v2 -> v3, in place. Ids are the
//    SRS key and the lesson id is not renumbered.
//
// 2. The identity block has `title` and `sub` SWAPPED, and its `sub` is not in
//    the database at all. The unit dump says t: "Regular -ER Verbs",
//    sub: "Les verbes en -ER". The brief's "the full system, endings & 30 common
//    verbs" exists nowhere. The brief said to copy from the probe rather than
//    from itself, and that instruction was the correct one.
//
// 3. "The author-verbes-batch.ts header claims eight infinitives were already
//    placed." Understated by a factor of five, and the script is now a hazard
//    rather than a reference. `fr.a2.verbes.013` through `.056` are FORTY-FOUR
//    published infinitives. Worse, that script's body still declares
//    `fr.a2.verbes.016 = 'les devoirs'` and `fr.a2.verbes.019 = 'le vélo'`, while
//    Postgres holds `rentrer` and `demander` at those ids. It upserts by id, so
//    running `pnpm content:verbes` would overwrite two of this lesson's thirty
//    verbs with nouns. See the ledger, §0.
//
// 4. "Whether the verbes theme already holds some of your thirty infinitives."
//    It holds ten of them, and every one of the other twenty exists in some other
//    theme. ALL THIRTY ARE IMPORTED. This lesson authors NOT ONE INFINITIVE.
//    Probed with real orthography on 2026-08-11; `préférer` and `écouter` were
//    probed accented, as the brief warned.
//
// 5. "Whether a1.06/a1.07 already state anything about nous versus on." a1.06 and
//    a1.07 do not, but **a1.05 does**, and a1.05 is this unit's declared
//    prerequisite: pronoms-sujets-lesson.ts says "Correct everywhere, and still
//    what you write. Out loud, in most rooms, on has taken its place. nous is
//    never wrong; it simply sits a register above where the conversation is."
//    So a2.01 does not INTRODUCE nous versus on. It states it for a paradigm, in
//    one section, in a form nineteen later lessons can quote, and it was worded
//    to sit on top of a1.05 rather than beside it.
//
// 6. The brief asks for "one `table` for the paradigm" in the flow. The density
//    validator refuses it: `table` at layer 'core' is a `table-in-core` failure
//    and tables belong in a reference sheet. The in-flow paradigm is therefore
//    the `tapTable` (s05-six) and the `table` lives in sheet.a2.01.endings, which
//    is where the brief wanted a reference sheet anyway. One of each, and then a
//    stop, as asked.
//
// ── What the corpus could not supply, and so what is authored ──────────────
//
// The corpus has plenty of -er verbs and no paradigm. Counted 2026-08-11:
// `je parle` 12 sentences, `nous parlons` 7, `ils parlent` 3. Every one of them
// was written for its own theme, so comparing two of them compares their subject
// matter as well as their person, and THE ONE THING this lesson has to show is
// six sentences in which nothing moves except the person.
//
// That is the whole authoring case. 25 rows:
//
//   paradigm  5   the parler frame; `Je parle français.` is fr.a2.verbes.001,
//                 reused, so the frame costs five rows and not six
//   register  2   nous regardons / on regarde, the same fact twice
//   ear       6   the pairs that are IDENTICAL out loud and different on the page
//   audible   2   the two forms the ear does get, so the claim is bounded
//   apply    10   the thirty verbs used by a person, across all six forms
//
// ── kind: every authored entry is a `sentence`, deliberately ───────────────
//
// flashhub-coverage.test.ts fails the build when two NON-sentence rows in one
// theme share an `fr`. This lesson authors pairs that are meant to be identical
// out loud and near-identical on the page (`Elle travaille ici.` against
// `Elles travaillent ici.`), and it authors nothing that is a headword. They are
// sentences, they are stored as sentences, and the rule leaves them alone.
//
// No authored row carries `gender`, and none is a single word, so nothing here
// can join a1.03's measured ending population. The batch proves that through the
// real `endingPopulation` rather than claiming it.
//
// ── What is NOT here, and why ──────────────────────────────────────────────
//
// - NO STEM-CHANGING VERB. `manger`, `commencer`, `appeler`, `préférer`,
//   `acheter`, `payer`, `essayer` and `jeter` are a2.09, which is the very next
//   lesson and has nothing else to teach. They appear as CONTEXT on exactly one
//   card (s16-notmine, naming what comes next) and on no production surface. The
//   cost is real: `manger` is the most frequent verb in the set and this lesson
//   gives it up.
// - NO `aller`. It ends in -er and is not one of these. It is named once as a
//   trap, on the same card, and is conjugated nowhere. That is a2.02.
// - NO PAST TENSE. `parler` and `parlé` are both /paʁle/ and that collision is
//   a2.05. No authored sentence here is ambiguous between an infinitive and a
//   past participle, because a2.05 imports from this theme and needs the evidence
//   clean: every authored row is a simple present with an explicit subject.
// - NO WRONG SENTENCES. `je parles` is the error this lesson exists to stop and
//   it is never a corpus row, because a row is released to spaced repetition.
//   Wrong forms live in `commonErrors`, in the scene's break card and in
//   `errorSpot` prompts, which are the surfaces that show a thing to reject it.
//
// ── Respelling convention, and the silent ending ───────────────────────────
//
// House convention: hyphenated syllables, stressed syllable capitalised, nasal
// vowels closed with a SUPERSCRIPT n and never a plain n or m, /ø œ/ as EU, /y/
// as Ü.
//
// The decision this lesson had to make, and which the ledger now binds the level
// to: A SILENT ENDING IS WRITTEN AS NOTHING. `il parle` is `eel parl`, not
// `eel parl-uh` and not `eel parl(uh)`. So `Il parle français.` and
// `Ils parlent français.` carry the SAME respelling string, character for
// character, and that identity is the lesson. a2-01-verbes-er.test.ts asserts it
// as an equality rather than trusting it to survive an edit.
//
// ── The eight respellings repaired, and why each one is a violation ────────
//
// These are not variants. Each closes a genuine nasal vowel with a plain n, which
// is the one respelling rule this project states outright, and each is flagged by
// `hasPlainNasalFor` from density.logic.ts rather than by a judgement here. Seven
// are on rows this lesson imports and displays; the eighth is the `je` row of its
// own paradigm.
//
// `fr.a2.verbes.001` was found and deliberately LEFT by a1.22, which recorded it
// in its own NOT_REPAIRED list as "a2 verbes, and the language sense; a sentence,
// so the headword probe missed it". It was left for whoever owned the theme. That
// is this build. a1.22's note is now stale by one row; it is a documentation list
// that no test reads, and it is not this build's file to edit.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { REUSED_SENTENCES } from './verbes-er-imported.ts';

/* ─── The id block ─────────────────────────────────────────────────────────
 *
 * fr.a2.verbes.101 .. .140, allocated in A2-BATCH-1-LEDGER.md from the probe's
 * NEXT FREE. `fr.a2.verbes` held exactly 100 rows with NO GAPS when this block
 * was claimed, so the batch checks the row COUNT as well as the maximum: a
 * concurrent lesson landing below the top is invisible to a highest-id check,
 * which is how a1.20 lost an hour.                                            */
export const OWNED_ID_RANGE = { from: 'fr.a2.verbes.101', to: 'fr.a2.verbes.140' } as const;

/** The theme this lesson writes into. One decision, made in the ledger. */
export const THEME = 'verbes';

/** A corpus entry plus the lesson-facing display data the renderer needs. */
export type VerbSentence = Omit<Item, 'drills'> & {
  /** Which person this sentence puts on screen, in paradigm order. */
  person: 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils' | 'on';
  /** Is the ENDING of this sentence's verb audible? The whole lesson is the
   *  answer to this question, so it is stored rather than restated per screen. */
  audible: boolean;
  /** Which teaching family. Drives the drill pools and the deckTranche slices so
   *  neither restates a word list. */
  family: 'paradigm' | 'register' | 'ear' | 'audible' | 'apply';
  drills: Item['drills'];
};

/** Speakable: the mic-scored deck runs `voiceflash`, and an item without it
 *  renders in a speak mission as a card the mic cannot score. */
const S: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
/** Speakable and spellable. Only on rows the dictée names, and every one of
 *  those is under the 16-letter limit so it spells from LETTERS. */
const SD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

/** The 25 authored entries, in sequence order. */
export const VERBES_ER: VerbSentence[] = [
  /* ── The paradigm: one verb, one frame, nothing moving but the person ─────
   *
   * Five rows, not six. `Je parle français.` is fr.a2.verbes.001 and has been
   * published since the theme was created, so it is reused and the frame costs
   * five. Everything after the verb is identical across all six on purpose: the
   * learner is being asked to hear ONE difference, and a frame that also moved
   * would hide it.
   *
   * .102 and .105 carry THE SAME RESPELLING STRING. That is not a copy-paste
   * slip, it is the fact the lesson is built on, and the test asserts the two
   * are equal rather than merely both present.                                */
  { id: 'fr.a2.verbes.101', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu parles français.', en: 'You speak French.', ipa: '/ty paʁl fʁɑ̃.sɛ/', respell: 'tü parl frahⁿ-SEH', person: 'tu', audible: false, family: 'paradigm', tags: ['er-verb', 'paradigm', 'silent-ending', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The -es is silent. Only the pronoun says this is you.' },
  { id: 'fr.a2.verbes.102', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il parle français.', en: 'He speaks French.', ipa: '/il paʁl fʁɑ̃.sɛ/', respell: 'eel parl frahⁿ-SEH', person: 'il', audible: false, family: 'paradigm', tags: ['er-verb', 'paradigm', 'silent-ending', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'Said exactly like Ils parlent français. Nothing in the sound separates them.' },
  { id: 'fr.a2.verbes.103', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous parlons français.', en: 'We speak French.', ipa: '/nu paʁ.lɔ̃ fʁɑ̃.sɛ/', respell: 'noo par-lohⁿ frahⁿ-SEH', person: 'nous', audible: true, family: 'paradigm', tags: ['er-verb', 'paradigm', 'audible-ending', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'One of the two endings you can hear. Out loud most rooms say on parle instead.' },
  { id: 'fr.a2.verbes.104', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous parlez français.', en: 'You speak French.', ipa: '/vu paʁ.le fʁɑ̃.sɛ/', respell: 'voo par-lay frahⁿ-SEH', person: 'vous', audible: true, family: 'paradigm', tags: ['er-verb', 'paradigm', 'audible-ending', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The other audible one, and it sounds exactly like the infinitive parler.' },
  { id: 'fr.a2.verbes.105', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils parlent français.', en: 'They speak French.', ipa: '/il paʁl fʁɑ̃.sɛ/', respell: 'eel parl frahⁿ-SEH', person: 'ils', audible: false, family: 'paradigm', tags: ['er-verb', 'paradigm', 'silent-ending', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Six letters at the end and not one of them sounds. Identical to Il parle français.' },

  /* ── Register: the same fact twice, which is the nous/on mission ──────────
   *
   * Both rows exist so the statement in s06-nous-on is made of corpus rather
   * than of prose. `on` takes the form `il` takes, which a1.05 already taught,
   * so this costs the learner no new ending.                                  */
  { id: 'fr.a2.verbes.106', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous regardons la télé.', en: 'We watch TV.', ipa: '/nu ʁə.ɡaʁ.dɔ̃ la te.le/', respell: 'noo ruh-gar-dohⁿ la tay-LAY', person: 'nous', audible: true, family: 'register', tags: ['er-verb', 'register', 'nous', 'audible-ending', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'What you write.' },
  { id: 'fr.a2.verbes.107', kind: 'sentence', level: 'a2', theme: THEME, fr: 'On regarde la télé.', en: 'We watch TV.', ipa: '/ɔ̃ ʁə.ɡaʁd la te.le/', respell: 'ohⁿ ruh-gard la tay-LAY', person: 'on', audible: false, family: 'register', tags: ['er-verb', 'register', 'on', 'silent-ending', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'What you say. Same meaning, and on takes the form il takes.' },

  /* ── The ear: pairs that are one sound and two spellings ──────────────────
   *
   * Three pairs, three different verbs, so the claim reads as a fact about the
   * system rather than about parler. `travaille`/`travaillent` and
   * `cherches`/`cherche` are identical out loud; `parlent`/`dansent` carry the
   * -ent that learners most want to pronounce.                                */
  { id: 'fr.a2.verbes.108', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elle travaille ici.', en: 'She works here.', ipa: '/ɛl tʁa.vaj i.si/', respell: 'el tra-vahy ee-SEE', person: 'il', audible: false, family: 'ear', tags: ['er-verb', 'ear', 'silent-ending'], drills: SD, audioRef: null, version: 1, notes: 'One person.' },
  { id: 'fr.a2.verbes.109', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elles travaillent ici.', en: 'They work here.', ipa: '/ɛl tʁa.vaj i.si/', respell: 'el tra-vahy ee-SEE', person: 'ils', audible: false, family: 'ear', tags: ['er-verb', 'ear', 'silent-ending'], drills: S, audioRef: null, version: 1, notes: 'A whole team, and not one sound has changed. Only elles told you.' },
  { id: 'fr.a2.verbes.110', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu cherches la gare.', en: 'You are looking for the station.', ipa: '/ty ʃɛʁʃ la ɡaʁ/', respell: 'tü shairsh la GAR', person: 'tu', audible: false, family: 'ear', tags: ['er-verb', 'ear', 'silent-ending'], drills: SD, audioRef: null, version: 1, notes: 'Four letters at the end, no sound.' },
  { id: 'fr.a2.verbes.111', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il cherche la gare.', en: 'He is looking for the station.', ipa: '/il ʃɛʁʃ la ɡaʁ/', respell: 'eel shairsh la GAR', person: 'il', audible: false, family: 'ear', tags: ['er-verb', 'ear', 'silent-ending'], drills: SD, audioRef: null, version: 1, notes: 'The verb is the same sound as tu cherches. The pronoun is the whole difference.' },
  { id: 'fr.a2.verbes.112', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils parlent fort.', en: 'They talk loudly.', ipa: '/il paʁl fɔʁ/', respell: 'eel parl FOR', person: 'ils', audible: false, family: 'ear', tags: ['er-verb', 'ear', 'silent-ending'], drills: SD, audioRef: null, version: 1, notes: 'The -ent that everyone wants to say. It is not there.' },
  { id: 'fr.a2.verbes.113', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elles dansent bien.', en: 'They dance well.', ipa: '/ɛl dɑ̃s bjɛ̃/', respell: 'el dahⁿs BYAⁿ', person: 'ils', audible: false, family: 'ear', tags: ['er-verb', 'ear', 'silent-ending', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'dansent is one syllable. The -ent adds nothing you can hear.' },

  /* ── The two you DO hear, so the claim has a boundary ─────────────────────
   *
   * A lesson that says "the endings are silent" and stops has taught something
   * false. Two of the six sound, they are the two that carry a syllable of their
   * own, and they are on the same verb as the pair above so the contrast is
   * exact.                                                                    */
  { id: 'fr.a2.verbes.114', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous cherchons la gare.', en: 'We are looking for the station.', ipa: '/nu ʃɛʁ.ʃɔ̃ la ɡaʁ/', respell: 'noo shair-shohⁿ la GAR', person: 'nous', audible: true, family: 'audible', tags: ['er-verb', 'audible-ending', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Here the ending is a syllable and you hear it.' },
  { id: 'fr.a2.verbes.115', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous cherchez la gare.', en: 'You are looking for the station.', ipa: '/vu ʃɛʁ.ʃe la ɡaʁ/', respell: 'voo shair-shay la GAR', person: 'vous', audible: true, family: 'audible', tags: ['er-verb', 'audible-ending'], drills: S, audioRef: null, version: 1, notes: 'And here. These two are the only ones the ear can pick out on its own.' },

  /* ── Applied: the thirty verbs used by a person ───────────────────────────
   *
   * Ten sentences spread across all six forms and ten different verbs from the
   * imported thirty, so the paradigm is met as something people do rather than
   * as a table that was memorised. Simple present throughout: no infinitive here
   * could be read as a past participle, because a2.05 imports from this theme.  */
  { id: 'fr.a2.verbes.116', kind: 'sentence', level: 'a2', theme: THEME, fr: "J'aime beaucoup mon quartier.", en: 'I like my neighbourhood a lot.', ipa: '/ʒɛm bo.ku mɔ̃ kaʁ.tje/', respell: 'zhem bo-koo mohⁿ kar-TYAY', person: 'je', audible: false, family: 'apply', tags: ['er-verb', 'apply', 'silent-ending', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'je aime cannot stand, so je loses its e. The ending is still silent.' },
  { id: 'fr.a2.verbes.117', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu trouves toujours une solution.', en: 'You always find a solution.', ipa: '/ty tʁuv tu.ʒuʁ yn sɔ.ly.sjɔ̃/', respell: 'tü troov too-zhoor ün so-lü-SYOHⁿ', person: 'tu', audible: false, family: 'apply', tags: ['er-verb', 'apply', 'silent-ending', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.118', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elle habite près de la gare.', en: 'She lives near the station.', ipa: '/ɛ la.bit pʁɛ də la ɡaʁ/', respell: 'e la-beet preh duh la GAR', person: 'il', audible: false, family: 'apply', tags: ['er-verb', 'apply', 'silent-ending'], drills: S, audioRef: null, version: 1, notes: 'elle habite runs together as one word, and the ending is still silent underneath it.' },
  { id: 'fr.a2.verbes.119', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous restons à la maison.', en: 'We are staying home.', ipa: '/nu ʁɛs.tɔ̃ a la mɛ.zɔ̃/', respell: 'noo res-tohⁿ a la meh-ZOHⁿ', person: 'nous', audible: true, family: 'apply', tags: ['er-verb', 'apply', 'audible-ending', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.120', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous travaillez le samedi ?', en: 'Do you work on Saturdays?', ipa: '/vu tʁa.va.je lə sam.di/', respell: 'voo tra-va-yay luh sam-DEE', person: 'vous', audible: true, family: 'apply', tags: ['er-verb', 'apply', 'audible-ending', 'question'], drills: S, audioRef: null, version: 1, notes: 'travaillez sounds exactly like travailler. Only the vous in front tells you which one it is.' },
  { id: 'fr.a2.verbes.121', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils arrivent demain matin.', en: 'They arrive tomorrow morning.', ipa: '/il.za.ʁiv də.mɛ̃ ma.tɛ̃/', respell: 'eel-za-reev duh-maⁿ ma-TAⁿ', person: 'ils', audible: false, family: 'apply', tags: ['er-verb', 'apply', 'silent-ending', 'liaison', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The silent s of ils wakes up in front of the vowel. The -ent at the end still does nothing.' },
  { id: 'fr.a2.verbes.122', kind: 'sentence', level: 'a2', theme: THEME, fr: "On donne son adresse à l'agent.", en: 'You give your address to the officer.', ipa: '/ɔ̃ dɔn sɔ̃.na.dʁɛs a la.ʒɑ̃/', respell: 'ohⁿ don sohⁿ-na-dress a la-ZHAHⁿ', person: 'on', audible: false, family: 'apply', tags: ['er-verb', 'apply', 'on', 'silent-ending', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'on takes the il form, so it is donne and never donnons.' },
  { id: 'fr.a2.verbes.123', kind: 'sentence', level: 'a2', theme: THEME, fr: "Tu montres tes papiers à l'entrée.", en: 'You show your papers at the entrance.', ipa: '/ty mɔ̃tʁ te pa.pje a lɑ̃.tʁe/', respell: 'tü mohⁿtr tay pa-pyay a lahⁿ-TRAY', person: 'tu', audible: false, family: 'apply', tags: ['er-verb', 'apply', 'silent-ending', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.124', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elle étudie le français.', en: 'She studies French.', ipa: '/ɛ le.ty.di lə fʁɑ̃.sɛ/', respell: 'e lay-tü-dee luh frahⁿ-SEH', person: 'il', audible: false, family: 'apply', tags: ['er-verb', 'apply', 'silent-ending', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The stem ends in a vowel already, so the silent -e just sits behind it.' },
  { id: 'fr.a2.verbes.125', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous téléphonons à nos voisins.', en: 'We phone our neighbours.', ipa: '/nu te.le.fɔ.nɔ̃ a no vwa.zɛ̃/', respell: 'noo tay-lay-fo-nohⁿ a no vwa-ZAⁿ', person: 'nous', audible: true, family: 'apply', tags: ['er-verb', 'apply', 'audible-ending', 'nasal'], drills: S, audioRef: null, version: 1 },
];

/* ─── The thirty ───────────────────────────────────────────────────────────
 *
 * NONE OF THESE IS AUTHORED. Every one already exists in Postgres and is imported
 * by id; see verbes-er-imported.ts for the recorded read, which the batch
 * verifies field by field before it writes anything.
 *
 * All thirty have CLEAN STEMS. Every stem change belongs to a2.09, which is the
 * next lesson on the trail and has nothing else to teach, so this list gives up
 * `manger` (the most frequent -er verb there is), `commencer`, `acheter`,
 * `payer`, `appeler`, `préférer`, `essayer`, `jeter`, `envoyer`, `voyager`,
 * `répéter`, `espérer`, `lever`, `nettoyer`, `ranger` and `lancer`. That is the
 * cost and it was taken deliberately.
 *
 * `aller` is not here either. It ends in -er and is not one of these.
 *
 * Ordered as the learner meets them: the five the scene and the paradigm use
 * first, then by how early a beginner needs them.                             */
export const THE_THIRTY = [
  'parler', 'regarder', 'écouter', 'aimer', 'habiter', 'travailler',
  'chercher', 'trouver', 'demander', 'arriver', 'rester', 'rentrer',
  'gagner', 'donner', 'aider', 'porter', 'entrer', 'montrer',
  'jouer', 'chanter', 'danser', 'visiter', 'inviter', 'étudier',
  'adorer', 'détester', 'fermer', 'marcher', 'téléphoner', 'oublier',
] as const;

/** The stem-changers this lesson hands to a2.09. Named so the guard can prove
 *  none of them reached a production surface, and so a later author can see the
 *  list rather than guess at it. */
export const A209_STEM_CHANGERS = [
  'manger', 'commencer', 'appeler', 'préférer', 'acheter', 'payer', 'essayer',
  'jeter', 'envoyer', 'voyager', 'répéter', 'espérer', 'lever', 'nettoyer',
  'ranger', 'lancer', 'placer', 'déménager', 'protéger', 'renouveler', 'rappeler',
] as const;

/** THE FORMS THAT ACTUALLY MATTER, and the ones a guard on infinitives alone
 *  misses completely.
 *
 *  a2.09's whole subject is the CHANGED stem, so `nous mangeons`, `il appelle`
 *  and `je préfère` are the strings that take its lesson. A guard written only
 *  over `manger`, `appeler` and `préférer` sees none of them: `mangeons` does
 *  not contain `manger`.
 *
 *  This list is here because the mutation test found the hole. Leaking
 *  `nous mangeons` into a drill option went GREEN against the first version of
 *  the guard, which is exactly the shape of assertion this project has shipped
 *  before: one that cannot fail. */
export const A209_CHANGED_STEMS = [
  'mangeons', 'commençons', 'voyageons', 'rangeons', 'lançons', 'plaçons',
  'déménageons', 'protégeons', 'nageons',
  'appelle', 'appelles', 'appellent', 'rappelle', 'rappelles', 'rappellent',
  'jette', 'jettes', 'jettent', 'renouvelle', 'renouvelles', 'renouvellent',
  'préfère', 'préfères', 'préfèrent', 'répète', 'répètes', 'répètent',
  'espère', 'espères', 'espèrent', 'protège', 'protèges', 'protègent',
  'achète', 'achètes', 'achètent', 'lève', 'lèves', 'lèvent',
  'paie', 'paies', 'paient', 'essaie', 'essaies', 'essaient',
  'envoie', 'envoies', 'envoient', 'nettoie', 'nettoies', 'nettoient',
] as const;

/** The forms of `aller` that must be conjugated nowhere in this lesson. `aller`
 *  itself IS allowed, once, named as a trap. */
export const ALLER_FORMS = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'] as const;

/* ─── The endings ──────────────────────────────────────────────────────────
 *
 * The set itself, derived nowhere else. The reference sheet, the tapTable and
 * the test all read THIS, so a table that hand-typed them would be free to drift
 * from the drill that scores them.
 *
 * `heard` is what the learner's ear actually receives. Four of the six get
 * nothing, and that is the lesson.                                            */
export const ENDINGS: { person: string; ending: string; heard: string; audible: boolean }[] = [
  { person: 'je', ending: '-e', heard: 'nothing', audible: false },
  { person: 'tu', ending: '-es', heard: 'nothing', audible: false },
  { person: 'il · elle · on', ending: '-e', heard: 'nothing', audible: false },
  { person: 'nous', ending: '-ons', heard: 'OHⁿ', audible: true },
  { person: 'vous', ending: '-ez', heard: 'AY', audible: true },
  { person: 'ils · elles', ending: '-ent', heard: 'nothing', audible: false },
];

/** The four endings that make no sound, derived from ENDINGS rather than typed.
 *  If a row is ever reclassified this moves with it and the reframe's arithmetic
 *  stops being a claim nobody checks. */
export const SILENT_ENDINGS: string[] = ENDINGS.filter((e) => !e.audible).map((e) => e.ending);
/** The two that do. */
export const AUDIBLE_ENDINGS: string[] = ENDINGS.filter((e) => e.audible).map((e) => e.ending);

/* ─── Respelling repairs ───────────────────────────────────────────────────
 *
 * Eight rows this lesson displays that close a genuine nasal vowel with a plain
 * n. Every `from` is flagged by hasPlainNasalFor and every `to` is not, and the
 * batch checks both directions through the REAL function rather than trusting
 * this table: a "repair" whose stored value was never a violation is somebody
 * else's variant being overwritten, and invariants §9 says not to do that.     */
export const RESPELL_REPAIRS: { id: string; fr: string; from: string; to: string; why: string }[] = [
  { id: 'fr.a2.verbes.001', fr: 'Je parle français.', from: 'ZHUH PARL frahn-SEH', to: 'zhuh parl frahⁿ-SEH', why: "the je row of this lesson's own paradigm; a1.22 found it and left it for whoever owned the theme" },
  { id: 'fr.a2.verbes.019', fr: 'demander', from: 'duh-mahn-DAY', to: 'duh-mahⁿ-DAY', why: '/də.mɑ̃.de/, a nasal vowel' },
  { id: 'fr.a2.verbes.016', fr: 'rentrer', from: 'rahn-TRAY', to: 'rahⁿ-TRAY', why: '/ʁɑ̃.tʁe/; a1.25 saw this row and recorded that it was not that build to repair' },
  { id: 'fr.sons.verbes-essentiels.043', fr: 'entrer', from: 'ahn-TRAY', to: 'ahⁿ-TRAY', why: '/ɑ̃tʁe/, a nasal vowel' },
  { id: 'fr.sons.verbes-essentiels.054', fr: 'montrer', from: 'mohn-TRAY', to: 'mohⁿ-TRAY', why: '/mɔ̃tʁe/, a nasal vowel' },
  { id: 'fr.a1.evenements-familiaux.059', fr: 'chanter', from: 'shahn-TAY', to: 'shahⁿ-TAY', why: '/ʃɑ̃.te/, a nasal vowel' },
  { id: 'fr.a1.evenements-familiaux.060', fr: 'danser', from: 'dahn-SAY', to: 'dahⁿ-SAY', why: '/dɑ̃.se/, a nasal vowel' },
  { id: 'fr.a1.amis.019', fr: 'inviter', from: 'an-vee-TAY', to: 'aⁿ-vee-TAY', why: '/ɛ̃.vi.te/, a nasal vowel' },
];

/* ─── Drill additions ──────────────────────────────────────────────────────
 *
 * Two reused sentences this lesson speaks and one it dictates. A `practice`
 * mission at skill 'speak' runs the mic-scored deck, which only reads items
 * carrying `voiceflash`; without this the two rows render as cards the mic
 * cannot score, which looks like a broken mission rather than a missing tag.   */
export const DRILL_ADDITIONS: { id: string; add: 'voiceflash'; why: string }[] = [
  { id: 'fr.a2.verbes.001', add: 'voiceflash', why: 'the je row of the paradigm; the speak mission says all six and the mic can only score a voiceflash row' },
];

/* ─── Accessors ────────────────────────────────────────────────────────────  */

/** Lookup by id. The lesson body builds every screen through this. */
export const BY_ID: ReadonlyMap<string, VerbSentence> = new Map(VERBES_ER.map((w) => [w.id, w]));

/** Every authored id, in sequence order. */
export const AUTHORED_IDS: string[] = VERBES_ER.map((w) => w.id);

/** The ids of one teaching family, in sequence order. */
export const familyIds = (f: VerbSentence['family']): string[] =>
  VERBES_ER.filter((w) => w.family === f).map((w) => w.id);

/** The ids showing one PERSON, in sequence order. Lets the test assert that all
 *  six persons reach a screen against the corpus rather than a hand list that
 *  could quietly lose `vous`. */
export const personIds = (p: VerbSentence['person']): string[] =>
  VERBES_ER.filter((w) => w.person === p).map((w) => w.id);

/** The paradigm, in paradigm order, with the reused `je` row at its head. The
 *  frame is six sentences and only five of them are authored. */
export const PARADIGM_IDS: string[] = ['fr.a2.verbes.001', ...familyIds('paradigm')];

/** The dictée targets: every authored row carrying the `dictation` drill.
 *  DERIVED, so a row that loses the tag drops out here rather than rendering as
 *  a dictée the app cannot run. Every one is under dicteeMode's 16-letter limit,
 *  which is the only mode that can test a silent ending: word mode hands the
 *  whole word over as a pre-spelled tile. The batch proves that through the real
 *  `dicteeMode` rather than restating the threshold. */
export const DICTATION_IDS: string[] = VERBES_ER.filter((w) => w.drills?.includes('dictation')).map((w) => w.id);

/** The authored rows that are identical out loud and different on the page. The
 *  listening mission, the ear drill and the test all read THIS one list. */
export const HOMOPHONE_PAIRS: [string, string][] = [
  ['fr.a2.verbes.102', 'fr.a2.verbes.105'],
  ['fr.a2.verbes.108', 'fr.a2.verbes.109'],
];

/** The pair whose VERBS are one sound and whose pronouns are the only
 *  difference. Kept apart from HOMOPHONE_PAIRS because these two sentences are
 *  NOT identical out loud: `tü` against `eel` is audible, and that is precisely
 *  the reframe. Asserting them as homophones would teach the wrong thing. */
export const PRONOUN_ONLY_PAIRS: [string, string][] = [
  ['fr.a2.verbes.110', 'fr.a2.verbes.111'],
];

/** The French line alone. Falls back to the imported manifest, so a section can
 *  reference any id it teaches from without knowing which side of the line it
 *  sits on. `fr.a2.verbes.001` is the `je` row of this lesson's own paradigm and
 *  is on the imported side, which is exactly the case this fallback exists for. */
export const fr = (id: string): string => {
  const mine = BY_ID.get(id);
  if (mine) return mine.fr;
  const borrowed = REUSED_SENTENCES.find((r) => r.id === id);
  if (!borrowed) throw new Error(`verbes-er corpus: unknown id "${id}"`);
  return borrowed.fr;
};

/** The bracketed respelling alone, which is what a deck card's `sub` line
 *  carries. Built HERE, once, rather than baked into the stored data: the
 *  validator checks the rendered form and storing the brackets would double
 *  them up.
 *
 *  Empty for an imported row this lesson does not own the transcription of.
 *  `fr.a2.verbes.001` is the one exception and it is handled through the repair
 *  table in verbes-er-display.ts, not restated here: a second copy would be free
 *  to drift from the value the batch actually writes. */
export const sub = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) {
    if (REUSED_SENTENCES.some((r) => r.id === id)) return '';
    throw new Error(`verbes-er corpus: unknown id "${id}"`);
  }
  return w.respell ? `[${w.respell}]` : '';
};

/** The English gloss alone. */
export const en = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-er corpus: unknown authored id "${id}"`);
  return w.en;
};

/** The corpus Item, stripped of the lesson-only fields. `person`, `audible` and
 *  `family` are lesson display data and live in the lesson's own section bodies,
 *  not on the shared row. */
export function toItem(w: VerbSentence): Item {
  const { person: _p, audible: _a, family: _f, ...item } = w;
  return item;
}
