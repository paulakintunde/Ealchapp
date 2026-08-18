// a2.24.l1 « Pronoms d'objet indirect » — the lesson body.
//
// Trail seq 22, the second lesson of the pronoun block. Every fact this file
// displays comes from pronoms-indirect-corpus.ts or from the recorded read of
// Postgres; nothing is restated here.
//
// ── THE SHAPE, AND WHERE THE WEIGHT WENT ───────────────────────────────────
//
// Doctrine §B.5: every lesson owns exactly one thing, and if the paradigm gets
// more sections than the Owns the wrong lesson was built. The Owns here is THE
// VERB LIST, because the choice is lexical and there is no rule behind it. The
// paradigm is TWO WORDS and the brief says explicitly not to stretch it.
//
//   sections about the verbs   6   s06 s07 s08 s09 s10 s14
//   sections about the words   3   s02 s04 s05
//
// ── THE THREE REQUIRED LAYOUTS, EACH IN ONE SECTION ────────────────────────
//
//   1. The direct set above the indirect set, six words in TWO ROWS on one
//      card, with a2.06's position rule quoted verbatim beside them.  s02-sets
//   2. « Je leur parle. » beside the possessive, on one line.         s11-leurs
//   3. The à-taking verbs as a tapTable, one row per verb with the English
//      gloss showing the gap, SIX ROWS which is the Pixel 6 ceiling. s07-verbs
//
// The first is a `fr`/`sub` pair rather than one line, because "two rows" means
// two rows: `fr` draws the direct set and `sub` draws the indirect set directly
// under it. Corrections §13 is why the guards walk `display()` — `prose()` drops
// `sub` as notation and would not see half of that layout at all.
//
// ── THE VERB-LIST SIZE DECISION ────────────────────────────────────────────
//
// TEN, split 6 + 4, and the split is the teaching. The six with no English
// preposition are the tapTable and sit exactly at the six-row ceiling; the four
// English marks with "to" get their own section, because a learner who only
// meets the hard six comes away believing French is arbitrary rather than
// believing English is unreliable. All ten are in the reference sheet, where a
// table is legal. Corpus §5.
//
// ── LAYOUT FACTS OBSERVED ──────────────────────────────────────────────────
//
// `table` at layer core is a density failure, so the in-flow verb list is a
//   six-row `tapTable` and the ten-row table lives in the sheet at layer deep.
// `commonErrors` carries `swipe: true` or it draws a blank screen.
// `trapDrill` walks rule > cards > audio > drill with a GATED drill step, and
//   carries no `size` — corrections §14.6.
// Three term chips per section. The renderer shows three.
// A mission title over 13.55 em clips on the mission row. a2.06 shipped one that
//   did and repaired it in v3; every title here is inside that budget and the
//   batch measures it with a2.23's model rather than by counting.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  A, A117_TEST, A118_REFRAME, A204_REFRAME, A206_AGREEMENT_RULE, A206_FRAME_ID,
  A206_KNOW_ID, A223_POINTER_TAIL, A223_ROW_ID, A_FRAMING, A_FRAMING_NEXT,
  A_KEPT_ERROR, A_KEPT_WHY, A_VERBS_MARKED, A_VERBS_SILENT, ACCENT_LIMIT,
  BREAK_BODY, DIRECT_SET, DIRECT_UNIT, ENDING_OWNER, ENDING_RULE, FUTUR_UNIT,
  GENDER_LOST, IMPORTED, IMPORTED_PHRASES, INDIRECT_SET, LESSON_ID, LEURS_ERROR,
  LEUR_RULE, NEGATION_EXTENSION, NEGATION_RULE, NEGATION_UNIT, PLACE_UNIT,
  PLAIN_PHRASE, PLAIN_TARGET, POSITION_RULE, POSSESSIVE_UNIT, REFLEXIVE_PAST_UNIT,
  REFRAME, ROWS, SCENE_ERROR, SCENE_ERROR_EN, SCENE_QUESTION, SCENE_QUESTION_EN,
  SCENE_RIGHT, SCENE_RIGHT_EN, SCENE_WAIT, SCENE_WAIT_EN, SHAPE_EXTENSION,
  STRESSED_RULE, UNIT, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT, Y_EN_UNIT,
} from './pronoms-indirect-corpus.ts';
import { PRONOMS_INDIRECT_TERMS } from './pronoms-indirect-terms.ts';
import { importedFr, importedEn, respell as impRespell } from './pronoms-indirect-imported.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ─── Reading the corpus, never restating it ─────────────────────────────── */

const BY_ID = new Map(ROWS.map((r) => [r.id, r]));
const row = (id: string) => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.24: no authored row ${id}`);
  return r;
};
const fr = (id: string) => row(id).fr;
const en = (id: string) => row(id).en;
const ipaOf = (id: string) => row(id).ipa!;
/** The bracketed respelling a card prints under the French. */
const sub = (id: string) => `[${row(id).respell}]`;
/** A sentence with its full stop removed, for a heading or an option. */
const noStop = (s: string) => s.replace(/\s*[.]$/u, '');
/** DELETED IN v2, AND THE REASON IS ON A PIXEL 6.
 *
 * The band's way of putting two sentences side by side is one `fr` line joined
 * by « · ». At 36 characters that line CLIPS: « Je leur parle.  ·  Voici leurs
 * clés. » drew as « Je leur parle. · Voici leurs » with the last word gone,
 * while the respelling underneath still read `vwah-SEE luhr KLAY`. That is
 * invariants §2's flex-on-a-Text failure — the text is measured at its natural
 * width, capped, then shrunk without re-wrapping, so the tail is cut.
 *
 * Nine of this lesson's twelve pair cards were over that length.
 *
 * THE FIX IS THE SHAPE LAYOUT 1 ALREADY USES AND WHICH WAS PROVED ON GLASS IN
 * THIS SAME LESSON: the left sentence in `fr`, the right sentence in `sub`,
 * which draws directly under it. Two rows is what "side by side" has to mean on
 * a phone, and it does not depend on a character budget nobody measured. The
 * respellings move into `body`.
 *
 * `pairRows` is what replaces `pair`. It is a helper that returns the two card
 * fields together so a later author cannot rebuild the one-line version by
 * accident. */
const pairRows = (a: string, b: string) => ({ fr: fr(a), sub: fr(b) });
/** The two bracketed respellings, for the body of a two-row card. */
const bothRespells = (a: string, b: string) => `${sub(a)} then ${sub(b)}`;
const card = (id: string) => ({ fr: fr(id), en: en(id), sub: sub(id) });

/* ─── Section ids ────────────────────────────────────────────────────────── */

const SCENE = 's01-scene';
const SETS = 's02-sets';
const GOALS = 's03-goals';
const TWO = 's04-two';
const LISTENING = 's05-listening';
const BEHIND = 's06-behind';
const VERBS = 's07-verbs';
const SIGNAL = 's08-signal';
const PICK = 's09-pick';
const UNSEEN = 's10-unseen';
const LEURS = 's11-leurs';
const TRAP = 's12-trap';
const STRESSED = 's13-stressed';
const ERRORS = 's14-errors';
const NEGATION = 's15-negation';
const ENDING = 's16-ending';
const FLASH = 's17-flash';
const DICTATION = 's18-dictation';
const TALK = 's19-talk';
const SPEAK = 's20-speak';
const REVIEW = 's21-review';
const PROGRESS = 's22-progress';
const QUIZ = 's23-quiz';
const ROUNDUP = 's24-roundup';
const SHEET_ID = 'sheet-pronoms-indirect';

/** The sections whose subject is the Owns, and the sections whose subject is
 *  the paradigm. Exported so the test asserts the ratio rather than counting
 *  something derived from the acts. */
export const OWNS_SECTIONS = [BEHIND, VERBS, SIGNAL, PICK, UNSEEN, ERRORS] as const;
export const PARADIGM_SECTIONS = [SETS, TWO, LISTENING] as const;

/* ─── The strings the traps are built out of ─────────────────────────────── */

/** THE ERROR. Not « je téléphone lui », which sounds foreign and gets corrected,
 *  but the one that sounds French: the position rule from a2.06 applied
 *  perfectly to the wrong set of words. */
export const WRONG_SET_TRAP = "Je l'ai téléphoné.";
export const WRONG_SET_TRAP_EN = 'the right place, the wrong word';
export const WRONG_SET_PRESENT = 'Je le téléphone.';
export const WRONG_SET_ANSWER = 'Je la réponds.';
/** a1.17's habit applied where it cannot go. */
export const LEURS_TRAP = LEURS_ERROR;
/** a2.04's à, kept when it should have gone. Grammatical, and it means
 *  something else, which is why it is the hardest of the three. */
export const A_KEPT_TRAP = A_KEPT_ERROR;

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE SCENE
 *
 *  Doctrine §B.2: the sentence dies in the middle, nobody is rude and nobody is
 *  corrected. Here it does not even die — it finishes, and it means something
 *  the speaker did not say, so the other person answers a question that was
 *  never asked and the conversation quietly goes somewhere else.
 * ══════════════════════════════════════════════════════════════════════════ */

const SCENE_BEATS = [
  {
    kind: 'narration' as const,
    size: 'md' as const,
    text: 'A Tuesday, the shared kitchen at work, and the kettle taking its time. You have been in this job three months and you have stopped rehearsing sentences before you say them, which is mostly a good thing.',
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'narration' as const,
    size: 'md' as const,
    text: 'Your colleague is waiting for the same kettle. Somebody from the other team has been off for a fortnight and everybody has been asking after him, and she asks you the question everybody has been asking.',
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'bubble' as const,
    from: 'them' as const,
    speaker: 'Ta collègue',
    fr: SCENE_QUESTION,
    en: SCENE_QUESTION_EN,
    size: 'md' as const,
    reveal: 'tap' as const,
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'bubble' as const,
    from: 'you' as const,
    fr: SCENE_ERROR,
    en: SCENE_ERROR_EN,
    size: 'md' as const,
    reveal: 'tap' as const,
    stage: 'The whole sentence arrives on time. You did what last lesson taught you: the small word went in front of the verb, before the first half of it, exactly where it belongs. And you reached into the wrong set of words for it.',
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'bubble' as const,
    from: 'them' as const,
    speaker: 'Ta collègue',
    fr: SCENE_WAIT,
    en: SCENE_WAIT_EN,
    size: 'md' as const,
    reveal: 'tap' as const,
    stage: 'She is not correcting you. What you said was a complete French sentence in which the thing phoned was an it, so she heard you phone an object and is asking which one. Nothing has broken. You are now in a conversation about a telephone.',
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'choice' as const,
    size: 'lg' as const,
    prompt: 'Which of these is the sentence you meant?',
    options: [
      { fr: SCENE_RIGHT, en: SCENE_RIGHT_EN, outcome: 'works' as const },
      { fr: SCENE_ERROR, en: SCENE_ERROR_EN, outcome: 'breaks' as const },
    ],
    followUp: {
      works: 'That is it, and the only difference is which small word you reached for. Everything about where it goes was already right.',
      breaks: 'That is what came out. The place was right and the word was not, and there is nothing in the English to tell you a choice was even being made.',
    },
  },
  {
    kind: 'break' as const,
    size: 'lg' as const,
    heading: 'The right place, and the wrong word',
    body: BREAK_BODY,
    wrong: { fr: SCENE_ERROR, ipa: '/wi ʒə le te.le.fɔ.ne jɛʁ/', respell: "[wee, zhuh lay tay-lay-foh-NAY YEHR]", en: SCENE_ERROR_EN },
    right: { fr: SCENE_RIGHT, ipa: '/wi ʒə lɥi e te.le.fɔ.ne jɛʁ/', respell: '[wee, zhuh lwee ay tay-lay-foh-NAY YEHR]', en: SCENE_RIGHT_EN },
    coach: REFRAME,
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'resolve' as const,
    size: 'md' as const,
    text: `You applied last lesson's rule perfectly. There is a second set of small words that goes in the same place, and which one you need is decided by the verb. ${REFRAME}`,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE SECTIONS
 * ══════════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  {
    id: SCENE,
    type: 'scene',
    title: 'The Right Place',
    frSub: 'Le bon endroit, le mauvais mot',
    layer: 'core',
    render: 'screens',
    setting: { place: 'The kitchen on the second floor', city: 'Lyon', time: 'A Tuesday, mid-morning' },
    beats: SCENE_BEATS,
  },

  /* REQUIRED LAYOUT 1. Six words in TWO ROWS on one card: `fr` draws the set the
   * learner has and `sub` draws the set they are about to get, directly under
   * it. a2.06's position rule is quoted VERBATIM beside them, because the whole
   * claim of this screen is that the slot is shared. */
  {
    id: SETS,
    type: 'cardDeck',
    title: 'Three Words, Then Two',
    frSub: 'Deux séries, une place',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `Two rows of words and one position between them. « ${POSITION_RULE} » is ${unitRef(DIRECT_UNIT, 'a2')}'s line and it is true of both rows without a word changed.`,
    hint: 'The place is the same. Only the words differ.',
    terms: ['sameSlot', 'twoWords', 'behindA'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-24-sets' },
    cards: [
      {
        head: 'The same place, two sets',
        label: 'you have the top row · this lesson is the bottom row',
        fr: DIRECT_SET,
        sub: INDIRECT_SET,
        body: `« ${POSITION_RULE} » Both rows go there and neither row ever goes anywhere else. Six words, one position, and the only thing you have to learn is which row a verb wants.`,
      },
      {
        head: 'and the same sentence, twice',
        label: `${Cap(unitRef(DIRECT_UNIT, 'a2'))}'s sentence · this lesson's`,
        fr: importedFr(A206_FRAME_ID),
        sub: fr(A(238)),
        body: `${sub(A(238))} The first line is ${unitRef(DIRECT_UNIT, 'a2')}'s own sentence, borrowed rather than copied. Three words each, and the small word is second in both.`,
      },
      {
        head: 'what you lose crossing over',
        label: 'the top row has a gender · the bottom row does not',
        fr: importedFr(A206_KNOW_ID),
        sub: fr(A(238)),
        body: `${GENDER_LOST} The first says the person is a woman. The second says nothing about who they are.`,
      },
    ],
  },

  {
    id: GOALS,
    type: 'goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    goals: [
      { t: 'Know which verbs put a person behind à', s: `${REFRAME} There are ten of them here and there is no rule behind the list, which is why the list is the lesson.` },
      { t: 'Pick between two words', s: `One person or several, and nothing else comes into it. ${GENDER_LOST}` },
      { t: 'Keep the leur that never takes an s apart from the one that does', s: `${LEUR_RULE} ${Cap(unitRef(POSSESSIVE_UNIT))} gave you the test and it still works: ${A117_TEST}.` },
      { t: 'Put it where you already put the other one', s: `« ${POSITION_RULE} » ${unitRef(DIRECT_UNIT, 'a2')}'s line, unchanged, and this lesson teaches none of it.` },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 2. THE PARADIGM, AND IT IS TWO WORDS
   *
   *  The brief: « Two pronouns is a very small paradigm. Do not stretch it: the
   *  weight belongs on the verbs. » Two sections, deliberately.
   * ═══════════════════════════════════════════════════════════════════════ */

  {
    id: TWO,
    type: 'examples',
    title: 'Him, Her, Or Them',
    frSub: 'lui ou leur',
    layer: 'core',
    say: `Six sentences and two words between them. ${GENDER_LOST} Nothing about either word responds to the subject, the verb or the tense.`,
    terms: ['twoWords', 'sameSlot'],
    examples: [
      { fr: fr(A(251)), en: en(A(251)), note: `${sub(A(251))} A different subject, and lui is unchanged. It is not agreeing with anything.` },
      { fr: fr(A(252)), en: en(A(252)), note: `${sub(A(252))} Two words beginning with l in a row, and only the second one is the verb.` },
      { fr: fr(A(253)), en: en(A(253)), note: `${sub(A(253))} A woman speaking about a man, and lui carries neither fact. That is the point rather than an oversight.` },
      { fr: fr(A(257)), en: en(A(257)), note: `${sub(A(257))} The same word, and this time a woman. One form for both, and the conversation tells you which.` },
      { fr: fr(A(254)), en: en(A(254)), note: `${sub(A(254))} More than one person, so leur. The verb ending is ${unitRef('a2.01', 'a2')}'s business and not this lesson's.` },
      { fr: fr(A(255)), en: en(A(255)), note: `${sub(A(255))} And leur again, with no s on it, which is the whole of the next act.` },
    ],
  },

  /* THE EAR, AND WHAT IT CAN AND CANNOT SETTLE. lui against leur is genuinely
   * audible; leur against leurs is one sound and no question anywhere in this
   * lesson goes near it. Corrections §5 applied on a card rather than in a
   * report. */
  {
    id: LISTENING,
    type: 'listening',
    title: 'One Sound Apart',
    frSub: "Ce que l'oreille décide",
    layer: 'core',
    say: 'Four lines. The first two differ by one sound and listening will separate them. There is a third pair in this lesson that does not differ at all, and no question here will ever ask you about it.',
    terms: ['twoWords', 'theirWord'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-24-listening' },
    lines: [
      { fr: fr(A(238)), en: en(A(238)) },
      { fr: fr(A(240)), en: en(A(240)) },
      { fr: fr(A(242)), en: en(A(242)) },
      { fr: fr(A(248)), en: en(A(248)) },
    ],
    questions: [
      {
        q: `${noStop(fr(A(238)))} against ${noStop(fr(A(240)))}. What separates them?`,
        opts: ['One word, and it carries how many people', 'Nothing at all', 'The verb'],
        correct: 0,
        why: 'Lwee against luhr. One word, two different sounds, and it is the only thing in this lesson the ear settles for you.',
      },
      {
        q: 'And the pronoun leur against the possessive leurs. What separates them?',
        opts: ['One vowel', 'One consonant', 'Nothing you can hear'],
        correct: 2,
        why: `${LEUR_RULE} They are one sound. The s is written and never said, so this is a difference you can only meet on the page, and no listening question in this lesson offers you both.`,
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 3. THE OWNS: WHICH VERBS PUT A PERSON BEHIND à
   * ═══════════════════════════════════════════════════════════════════════ */

  /* THE FRAMING a2.25 INHERITS. The person is named behind à, and then the à
   * goes with the person. Said in one sentence, verbatim, because the next
   * lesson quotes it about a thing instead. */
  {
    id: BEHIND,
    type: 'cardDeck',
    title: 'The Little Word à',
    frSub: "Derrière à",
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `${A_FRAMING} Three pairs, and in each one the person is named first and replaced second. Watch the à leave with them.`,
    hint: 'Look for the little word, then watch it go.',
    terms: ['behindA', 'theLittleWord', 'twoWords'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-24-behind' },
    cards: [
      {
        head: 'named, then replaced',
        label: 'the person is behind à · and then they are not there',
        ...pairRows(A(237), A(238)),
        body: `${bothRespells(A(237), A(238))} ${A_FRAMING} Marie is behind à on the first line, and on the second there is no Marie and no à either.`,
      },
      {
        head: 'and more than one person',
        label: 'same little word · the other pronoun',
        ...pairRows(A(239), A(240)),
        body: `${bothRespells(A(239), A(240))} The à does not change for how many people are behind it, and neither does the transformation. Only which of the two words comes out.`,
      },
      {
        head: 'not the à you met before',
        label: `${Cap(unitRef(PLACE_UNIT))} taught the other one`,
        ...pairRows(A(241), A(242)),
        body: `${bothRespells(A(241), A(242))} « ${A204_REFRAME} » is ${unitRef(PLACE_UNIT, 'a2')}'s line, and it is about à in front of a place, which stays put. This à does not stay at all.`,
      },
    ],
  },

  /* REQUIRED LAYOUT 3. A `table` at layer core is a density failure, so this is
   * a tapTable, and six rows is the Pixel 6 ceiling. These are the six verbs
   * where English gives the learner no signal at all; the four it does mark get
   * their own section next. The full ten are in the sheet at layer deep. */
  {
    id: VERBS,
    type: 'tapTable',
    title: 'Six Verbs, No Warning',
    frSub: 'Les verbes qui prennent à',
    layer: 'core',
    say: `${REFRAME} Six of them, and the middle column is what English says. Tap any row to hear it. This is a list rather than a rule, and the only way to hold it is to have met it.`,
    terms: ['theTarget', 'behindA', 'sameSlot'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-24-verbs' },
    cols: ['French', 'English', 'with the pronoun'],
    rows: A_VERBS_SILENT.map((v) => ({
      cells: [v.frame, v.en, noStop(fr(A(v.row)))],
      say: fr(A(v.row)),
      detail: {
        title: `« ${v.frame} »`,
        say: fr(A(v.row)),
        body: `${sub(A(v.row))} ${en(A(v.row))} English says « ${v.en} » with nothing at all between the verb and the person, so nothing in your own language tells you the à is coming. That is why this one is on this list.`,
      },
    })),
  },

  /* THE FOUR ENGLISH DOES MARK. Their job is to make the six above look like an
   * exception in ENGLISH rather than a rule in French, which is the difference
   * between a learner who thinks French is arbitrary and one who does not. */
  {
    id: SIGNAL,
    type: 'examples',
    title: 'And Four That Warn You',
    frSub: 'Les quatre faciles',
    layer: 'core',
    say: 'Four more verbs, and these ones English marks with "to". You already get them right. They are here so the six on the last screen look like a gap in English rather than a rule in French.',
    terms: ['theTarget', 'behindA'],
    examples: [
      { fr: fr(A(238)), en: `${A_VERBS_MARKED[0]!.frame} · ${A_VERBS_MARKED[0]!.en}`, note: `${sub(A(238))} Talk TO someone. English says the little word out loud, so you reach for one in French without being told to.` },
      { fr: fr(A(248)), en: `${A_VERBS_MARKED[1]!.frame} · ${A_VERBS_MARKED[1]!.en}`, note: `${sub(A(248))} Write TO them. Same signal, same result.` },
      { fr: fr(A(249)), en: `${A_VERBS_MARKED[2]!.frame} · ${A_VERBS_MARKED[2]!.en}`, note: `${sub(A(249))} English can say "send her a card" OR "send a card to her", so the signal is there and it is optional. That is the fair description of these four.` },
      { fr: fr(A(250)), en: `${A_VERBS_MARKED[3]!.frame} · ${A_VERBS_MARKED[3]!.en}`, note: `${sub(A(250))} Give the keys TO them. And notice that the keys are still sitting after the verb, where things sit; only the person moved.` },
      { fr: importedFr('fr.a1.pronoms-essentiels.126'), en: importedEn('fr.a1.pronoms-essentiels.126'), note: 'Published at A1, in this lesson\'s own theme, by somebody who was not teaching this. The person is in front of the verb because that is where they go.' },
      { fr: importedFr('fr.a2.pronoms-essentiels.020'), en: importedEn('fr.a2.pronoms-essentiels.020'), note: 'And one of the six, published. Ask someone their opinion, with nothing between the verb and the person in English and a whole word in French.' },
      { fr: importedFr('fr.a2.pronoms-essentiels.026'), en: importedEn('fr.a2.pronoms-essentiels.026'), note: 'The plural, also published, also in this theme. Three sentences on this screen were written by people who were not teaching you anything.' },
    ],
  },

  /* PRODUCTION AGAINST THE CLOCK. Doctrine §B.1: the unit of teaching is a
   * pattern with a slot in it, and the proof is the learner filling the slot. */
  {
    id: PICK,
    type: 'groupDrill',
    title: 'Say It Before You Think',
    frSub: 'On construit la phrase',
    layer: 'core',
    size: 'lg',
    say: `Three rounds. Say the verb, ask whether the person sits behind à, and only then reach for the word. ${REFRAME}`,
    terms: ['behindA', 'theTarget', 'twoWords'],
    groups: [
      {
        label: 'the person is named first',
        items: [card(A(237)), card(A(238))],
        check: {
          q: `« ${fr(A(237))} » Say it again without the name.`,
          opts: [fr(A(238)), WRONG_SET_PRESENT, fr(A(237))],
          correct: 0,
          why: `Marie is behind à, so the word is lui and the à goes with her. The second option took the right place and the wrong row of words, which is the sentence the scene opened on.`,
        },
      },
      {
        label: 'and English gave you no warning',
        items: [card(A(241)), card(A(242))],
        check: {
          q: `« ${fr(A(241))} » Replace the name.`,
          opts: [WRONG_SET_ANSWER, fr(A(242)), 'Je réponds lui.'],
          correct: 1,
          why: `Répondre puts the person behind à, so lui. English answers Paul with nothing in between, which is exactly why this verb is on the list rather than deducible from it.`,
        },
      },
      {
        label: 'and more than one person',
        items: [card(A(239)), card(A(240))],
        check: {
          q: `« ${fr(A(239))} » Replace them.`,
          opts: ['Je parle à eux.', fr(A(240)), LEURS_TRAP],
          correct: 1,
          why: `Several people behind à, so leur. The third option is ${unitRef('a1.17')}'s habit reaching into a place it cannot go: ${LEUR_RULE}`,
        },
      },
    ],
  },

  /* DOCTRINE §B.1. Four verbs this lesson never listed and never imported as
   * headwords. The rule runs on them cold, and one of them is the sharpest case
   * in the lesson. */
  {
    id: UNSEEN,
    type: 'groupDrill',
    title: 'Verbs Not Listed Here',
    frSub: 'Des verbes jamais montrés',
    layer: 'core',
    size: 'lg',
    say: 'Four verbs that are on no list in this lesson. The ten you have met are not the whole set and never were, so the useful question is what you do when you meet the eleventh.',
    terms: ['theTarget', 'behindA'],
    groups: [
      {
        label: 'one English marks',
        items: [card(A(273)), card(A(272))],
        check: {
          q: `« Elle explique la situation à ses collègues. » Replace the people.`,
          opts: ['Elle les explique.', fr(A(273)), 'Elle explique leur.'],
          correct: 1,
          why: `Expliquer À quelqu'un, and English says "explains TO them", so you had a signal. The first option used the row of words that stands in for the thing explained rather than the people.`,
        },
      },
      {
        label: 'and one it does not',
        items: [card(A(275)), card(A(274))],
        check: {
          q: '« Nous obéissons à notre professeur. » Replace the person.',
          opts: [fr(A(275)), 'Nous l\'obéissons.', 'Nous obéissons lui.'],
          correct: 0,
          why: 'THE SHARPEST CASE IN THE LESSON. English says "obey him" with nothing in between and French refuses the direct version outright. It is a property of the verb, and this verb was never on a screen here.',
        },
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 4. THE TRAPS
   * ═══════════════════════════════════════════════════════════════════════ */

  /* REQUIRED LAYOUT 2. « Je leur parle. » and the possessive, side by side. */
  {
    id: LEURS,
    type: 'cardDeck',
    title: 'The Other Leur',
    frSub: 'leur ou leurs',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `You have had leur since ${unitRef(POSSESSIVE_UNIT)} and it meant their. This is a different word spelled the same, and it behaves in the one way the other one does not. ${LEUR_RULE}`,
    hint: 'Look at what comes after it.',
    terms: ['theirWord', 'twoWords', 'sameSlot'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-24-leurs' },
    cards: [
      {
        head: 'side by side',
        label: 'a verb behind it · a thing behind it',
        ...pairRows(A(240), A(259)),
        body: `${bothRespells(A(240), A(259))} ${Cap(unitRef(POSSESSIVE_UNIT))} gave you the test: ${A117_TEST}. The first has a verb behind leur, so it can never take an s. The second has keys.`,
      },
      {
        head: 'and the s counts the things',
        label: 'one house · several keys',
        ...pairRows(A(258), A(259)),
        body: `${bothRespells(A(258), A(259))} Both are ${unitRef(POSSESSIVE_UNIT, 'a2')}'s word and nothing here re-teaches it. One house and several keys, and the s went on because of the keys rather than the people.`,
      },
      {
        head: 'both jobs, one sentence',
        label: 'the first can never take an s · the second can',
        fr: fr(A(260)),
        sub: `${sub(A(260))} ${en(A(260))}`,
        body: `Two leurs, four letters each, and only one could ever grow an s. The first has montre behind it. The second has maison behind it. You do not need to know what either word is called to tell them apart.`,
      },
    ],
  },

  /* THE TRAP. Corrections §14.6: rule > cards > audio > drill, with swipe, an
   * audio spec, a say and a GATED drill step, and NO `size` on a stepped one.
   * The audio step plays each card's `fr`, so rec-a2-24-trap is briefed to
   * contain exactly these four lines. */
  {
    id: TRAP,
    type: 'trapDrill',
    title: 'One Letter, Two Words',
    frSub: 'leur, jamais leurs',
    layer: 'core',
    swipe: true,
    say: 'Four cards and then six to prove it. The first card is a sentence nobody says, and it is the one your own habits will build for you.',
    terms: ['theirWord', 'twoWords', 'behindA'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-24-trap' },
    rule: {
      title: 'The one in front of a verb never grows',
      body: `${LEUR_RULE} It does not matter how many people you mean. « ${A117_TEST} », and a verb is not a thing.`,
    },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'Which One Can Grow' },
      { kind: 'cards', label: 'Four cards', title: 'One Wrong, Three Right' },
      { kind: 'audio', label: 'Hear it', title: 'And You Cannot Hear It' },
      { kind: 'drill', label: 'Prove it', title: 'Pick The Right One', gate: true },
    ],
    cards: [
      {
        fr: LEURS_TRAP,
        ipa: '/ʒə lœʁ paʁl/',
        promptLabel: 'the s your habits will add for you',
        promptSound: LEURS_TRAP,
        tip: 'Several people, so the s looks right and there is nothing in the sound to stop you. A verb follows, so the word can never take one. The listener hears no difference at all and the page does.',
      },
      {
        fr: fr(A(240)),
        ipa: ipaOf(A(240)),
        promptLabel: 'and the same sentence, said the same way',
        promptSound: fr(A(240)),
        tip: 'Identical out loud. That is why this is a writing trap and why the dictée is where it is settled.',
      },
      {
        fr: fr(A(259)),
        ipa: ipaOf(A(259)),
        promptLabel: 'the s that belongs',
        promptSound: fr(A(259)),
        tip: `Keys behind it, and several of them, so the s goes on. ${Cap(unitRef('a1.17'))}\'s word, ${unitRef('a1.17')}\'s rule, and nothing about it is new.`,
      },
      {
        fr: fr(A(258)),
        ipa: ipaOf(A(258)),
        promptLabel: 'and one thing, so no s',
        promptSound: fr(A(258)),
        tip: 'Still several owners and still no s, because the s was never counting the owners.',
      },
    ],
    drill: [
      { opts: [fr(A(240)), LEURS_TRAP], correct: 0, promptSay: fr(A(240)) },
      { opts: ['Je leurs écris.', fr(A(248))], correct: 1, promptSay: fr(A(248)) },
      { opts: [fr(A(259)), 'Voici leur clés.'], correct: 0, promptSay: fr(A(259)) },
      { opts: ['Voici leurs maison.', fr(A(258))], correct: 1, promptSay: fr(A(258)) },
      { opts: [fr(A(265)), 'Je ne leurs parle pas.'], correct: 0, promptSay: fr(A(265)) },
      { opts: ['Nous leurs parlons.', fr(A(254))], correct: 1, promptSay: fr(A(254)) },
    ],
  },

  /* TRAP TWO, AND DOCTRINE §B.7's SIXTH OCCURRENCE. a2.02's term quoted
   * verbatim, a2.06's instance named, and this one marked as the sixth. */
  {
    id: STRESSED,
    type: 'cardDeck',
    title: 'Lui On Its Own',
    frSub: 'Après une préposition',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `« ${WHAT_FOLLOWS} » is ${unitRef(WHAT_FOLLOWS_UNIT, 'a2')}'s line for this pattern and this is the sixth time it has come round. ${Cap(unitRef(DIRECT_UNIT))} had the fifth one lesson ago. ${SHAPE_EXTENSION}`,
    hint: 'One word, and what sits beside it decides.',
    terms: ['onItsOwn', 'theLittleWord', 'sameSlot'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-24-stressed' },
    cards: [
      {
        head: 'lui, twice',
        label: 'a verb after it · a little word before it',
        ...pairRows(A(238), A(261)),
        body: `${bothRespells(A(238), A(261))} ${STRESSED_RULE} On the first, parle follows. On the second, avec sits in front.`,
      },
      {
        head: 'and it is not just avec',
        label: 'sans · pour',
        ...pairRows(A(262), A(263)),
        body: `${bothRespells(A(262), A(263))} Three little words and the same behaviour, which is what makes it a rule rather than an idiom. ${Cap(unitRef(WHAT_FOLLOWS_UNIT))} named the pattern and ${unitRef(DIRECT_UNIT)} met it one lesson ago.`,
      },
      {
        head: 'and the one that is real French',
        label: 'grammatical, and not what you meant',
        fr: A_KEPT_TRAP,
        sub: fr(A(238)),
        body: `The first keeps the à and changes the meaning. ${A_KEPT_WHY} Nothing goes wrong and nobody stops you.`,
      },
    ],
  },

  {
    id: ERRORS,
    type: 'commonErrors',
    title: 'What Goes Wrong',
    frSub: 'Les erreurs fréquentes',
    layer: 'core',
    size: 'lg',
    swipe: true,
    say: 'Four, one per screen, and the first one is the sentence the lesson opened on.',
    terms: ['theTarget', 'theirWord', 'theLittleWord'],
    errors: [
      {
        wrong: WRONG_SET_TRAP,
        right: 'Je lui ai téléphoné.',
        why: 'The right place and the wrong row of words. This is the error the scene ends on and it is not carelessness: téléphoner puts the person behind à and there is nothing in "I phoned him" to tell you so.',
      },
      {
        wrong: 'Je téléphone lui.',
        right: fr(A(243)),
        why: `The word left at the end, where English puts it. « ${POSITION_RULE} » is ${unitRef(DIRECT_UNIT, 'a2')}'s line and it is true of this row of words too. Nothing about the position changed today.`,
      },
      {
        wrong: LEURS_TRAP,
        right: fr(A(240)),
        why: `The s from ${unitRef(POSSESSIVE_UNIT)}, on a word that can never take one. ${LEUR_RULE} No sound will correct you, so this is settled in writing or not at all.`,
      },
      {
        wrong: A_KEPT_TRAP,
        right: fr(A(238)),
        why: `${A_FRAMING} Keeping it gives you real French that means something else, and nobody will stop you. ${Cap(unitRef(PLACE_UNIT))} taught the à that stays; this is not that one.`,
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 5. SAYING NO, AND THE PAST
   * ═══════════════════════════════════════════════════════════════════════ */

  {
    id: NEGATION,
    type: 'cardDeck',
    title: 'Saying No',
    frSub: 'ne … pas',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `One negation rule, six lessons old, and this adds nothing to it. « ${NEGATION_RULE} »`,
    terms: ['theWrap', 'sameSlot'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-24-negation' },
    cards: [
      {
        head: 'both inside',
        label: 'ne · lui parle · pas',
        ...pairRows(A(238), A(264)),
        body: `${bothRespells(A(238), A(264))} « ${A118_REFRAME} » from ${unitRef(NEGATION_UNIT)}, and « ${NEGATION_RULE} » is ${unitRef(FUTUR_UNIT, 'a2')}'s. One verb, so it never arises.`,
      },
      {
        head: 'and the plural is no different',
        label: 'and still no s on it',
        ...pairRows(A(240), A(265)),
        body: `${bothRespells(A(240), A(265))} ${NEGATION_EXTENSION} That sentence is ${unitRef(DIRECT_UNIT, 'a2')}'s, word for word, and it holds for the same reason: the small word belongs to the verb.`,
      },
      {
        head: 'and with two words of verb',
        label: 'ne · word · first word · pas · second word',
        fr: fr(A(271)),
        sub: `${sub(A(271))} ${en(A(271))}`,
        body: `The same order ${unitRef(DIRECT_UNIT)} gave you and ${unitRef(REFLEXIVE_PAST_UNIT)} settled for a three-part verb. Nothing here is a new negation rule and nothing here is worth memorising twice.`,
      },
    ],
  },

  /* WHAT a2.23 PROMISED, DELIVERED. Corpus §10: RULE A is this lesson's, a2.06
   * took RULE B and said so, and a2.23 SHIPPED A LEARNER SURFACE pointing here.
   * ONE SECTION, recognition only, and no typed production because the rule is
   * that nothing is added. */
  {
    id: ENDING,
    type: 'examples',
    title: 'Nothing On The End',
    frSub: "Pas d'accord",
    layer: 'core',
    say: `${ENDING_RULE} Five sentences and not one ending between them. ${Cap(unitRef(REFLEXIVE_PAST_UNIT))} told you the reason was waiting here, and this is it.`,
    terms: ['noEnding', 'twoWords', 'sameSlot'],
    examples: [
      { fr: fr(A(268)), en: en(A(268)), note: `${sub(A(268))} One person, and parlé is bare.` },
      { fr: fr(A(269)), en: en(A(269)), note: `${sub(A(269))} Several people, and parlé is still bare. Nothing was ever going to change it, which is unusually kind for a rule about endings.` },
      { fr: fr(A(283)), en: en(A(283)), note: `${sub(A(283))} A woman speaking, several people spoken to, and still nothing. The second word is not responding to anybody in the sentence.` },
      { fr: fr(A(270)), en: en(A(270)), note: `${sub(A(270))} A different verb, so it is not a fact about parler.` },
      { fr: importedFr(A223_ROW_ID), en: importedEn(A223_ROW_ID), note: `${Cap(unitRef(REFLEXIVE_PAST_UNIT, 'a2'))}'s own sentence, borrowed rather than copied. It promised that « ${A223_POINTER_TAIL} », and this is it: the hands got washed, and they are named after the verb.` },
    ],
  },

  {
    id: FLASH,
    type: 'flashcards',
    title: 'The Ten Verbs',
    frSub: 'Les verbes',
    layer: 'core',
    say: 'Ten verbs and two phrases, none of them authored by this lesson and all of them already in your corpus. The lesson borrowed them; the deck is where they stay.',
    cards: [...IMPORTED.map((i) => i.id), ...IMPORTED_PHRASES.map((i) => i.id)].map((id) => ({
      front: importedFr(id),
      back: `[${impRespell(id)}] ${importedEn(id)}`,
      say: importedFr(id),
    })),
  },

  /* THE HEAVIEST PRODUCTION SECTION, AND THE ONLY PLACE THE CENTRAL TRAP IS
   * REAL. `dicteeMode` hands every word over pre-spelled above 16 letters, and a
   * lesson whose trap is a written s that nobody says can only be tested in
   * LETTERS mode. Every line here was run through the real function. */
  {
    id: DICTATION,
    type: 'dictation',
    title: 'Write It Down',
    frSub: 'La dictée',
    layer: 'core',
    say: 'Thirteen lines. Nothing here is long, because a long line hands you the words already spelled and the one thing this lesson turns on is a letter nobody says.',
    terms: ['theirWord', 'behindA', 'theWrap'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 3, recordingId: 'rec-a2-24-dictee' },
    itemIds: [
      A(238), A(240), A(242), A(243), A(244), A(248), A(257),
      A(258), A(259),
      A(264), A(265),
      A(268), A(269),
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 6. PROVE IT
   * ═══════════════════════════════════════════════════════════════════════ */

  {
    id: TALK,
    type: 'scenario',
    title: 'News Of A Friend',
    frSub: 'On prend des nouvelles',
    layer: 'core',
    terms: ['behindA', 'twoWords', 'theWrap'],
    setting: 'The same kitchen, a week later, and this time the sentences mean what you meant. Every question is about somebody who is not in the room, which is the only situation this whole lesson is for.',
    turns: [
      { ai: 'Tu as parlé à Théo, finalement ?', en: 'Did you end up talking to Théo?', user: fr(A(276)), userEn: en(A(276)),
        alts: [{ fr: fr(A(268)), en: en(A(268)) }, { fr: fr(A(238)), en: en(A(238)) }] },
      { ai: 'Et ses parents, tu as écrit ?', en: 'And his parents, did you write?', user: fr(A(277)), userEn: en(A(277)),
        alts: [{ fr: fr(A(267)), en: en(A(267)) }, { fr: fr(A(248)), en: en(A(248)) }] },
      { ai: 'Tu vas appeler Camille ce soir ?', en: 'Are you going to call Camille tonight?', user: fr(A(278)), userEn: en(A(278)),
        alts: [{ fr: fr(A(243)), en: en(A(243)) }, { fr: fr(A(264)), en: en(A(264)) }] },
      { ai: 'Les collègues ont vu les photos ?', en: 'Have the colleagues seen the photos?', user: fr(A(279)), userEn: en(A(279)),
        alts: [{ fr: fr(A(246)), en: en(A(246)) }, { fr: fr(A(250)), en: en(A(250)) }] },
      { ai: 'Tu es proche de tes voisins ?', en: 'Are you close to your neighbours?', user: fr(A(280)), userEn: en(A(280)),
        alts: [{ fr: fr(A(240)), en: en(A(240)) }, { fr: fr(A(254)), en: en(A(254)) }] },
      { ai: 'Et pour vendredi, tu sais ?', en: 'And about Friday, do you know?', user: fr(A(281)), userEn: en(A(281)),
        alts: [{ fr: fr(A(244)), en: en(A(244)) }, { fr: fr(A(286)), en: en(A(286)) }] },
      { ai: 'Théo t\'a envoyé un message.', en: 'Théo sent you a message.', user: fr(A(282)), userEn: en(A(282)),
        alts: [{ fr: fr(A(242)), en: en(A(242)) }, { fr: fr(A(266)), en: en(A(266)) }] },
    ],
  },

  {
    id: SPEAK,
    type: 'practice',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    skill: 'speak',
    terms: ['twoWords', 'behindA'],
    itemIds: [
      A(237), A(238), A(239), A(240), A(241), A(242),
      A(243), A(244), A(245), A(246), A(247), A(248), A(249), A(250),
      A(251), A(252), A(253), A(254), A(255), A(256), A(257),
      A(258), A(259), A(260),
      A(261), A(262), A(263),
      A(264), A(265), A(266), A(267),
      A(268), A(269), A(270), A(271),
      A(272), A(273), A(274), A(275),
      A(283), A(284), A(285), A(286),
    ],
  },

  {
    id: REVIEW,
    type: 'reviewDeck',
    title: 'Everything, Once More',
    frSub: 'Tout, encore une fois',
    layer: 'core',
    cards: [
      { front: 'Which word tells you a person is behind à?', back: `${REFRAME} And there is no rule behind the list of verbs, which is why the list is the lesson.`, say: fr(A(237)) },
      { front: `« ${fr(A(237))} » Say it without the name.`, back: `${fr(A(238))} ${A_FRAMING}`, say: fr(A(238)) },
      { front: 'Several people. Which word?', back: `Leur. ${LEUR_RULE}`, say: fr(A(240)) },
      { front: 'Is lui a man or a woman?', back: GENDER_LOST, say: fr(A(238)) },
      { front: 'Where does the word go?', back: `${POSITION_RULE} ${Cap(unitRef(DIRECT_UNIT, 'a2'))}'s line, unchanged.`, say: fr(A(238)) },
      { front: `Make « ${fr(A(238))} » negative.`, back: `${fr(A(264))} ${NEGATION_EXTENSION}`, say: fr(A(264)) },
      { front: 'Which leur can take an s?', back: `« ${A117_TEST} ». ${noStop(fr(A(259)))} counts keys. ${noStop(fr(A(240)))} counts nothing and never could.`, say: fr(A(259)) },
      { front: 'Is the lui in « Je parle avec lui » the same word as the one in « Je lui parle »?', back: `Yes, and ${unitRef(WHAT_FOLLOWS_UNIT, 'a2')}'s test settles it: ${STRESSED_RULE}`, say: fr(A(261)) },
      { front: 'Does anything go on the end of the second word in the past?', back: ENDING_RULE, say: fr(A(268)) },
    ],
  },

  {
    id: PROGRESS,
    type: 'progressCheck',
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: 'The exam has six rounds and much of it is typed or corrected rather than picked, because the one thing this lesson turns on is a letter you write and never say.',
    stats: [
      { k: 'New rules', v: `1. ${REFRAME}` },
      { k: 'Verbs to know', v: '10, and six of them give you no warning in English at all.' },
      { k: 'Verbs authored', v: '0. All ten were already in your corpus, and four more were never listed.' },
      { k: 'What the ear can settle', v: '1 of 2. Lui against leur, yes. Leur against leurs, never.' },
    ],
  },

  {
    id: QUIZ,
    type: 'quiz',
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    say: 'Six rounds of five. Much of it asks you to write, because the trap at the centre of this lesson is a letter nobody says.',
    terms: ['behindA', 'theirWord', 'twoWords'],
    passMark: 70,
    roundFailThreshold: 60,
    rounds: [
      {
        id: 'r1-which',
        label: 'Which set of words',
        say: 'Five on the one decision the verb makes for you.',
        targets: ['err-wrong-set', 'err-keeps-a'],
        questions: [
          {
            format: 'errorSpot',
            q: `Fix it: « ${WRONG_SET_PRESENT} »`,
            accept: [fr(A(243))],
            ref: VERBS,
            why: `Téléphoner puts the person behind à, so the word is lui. The place was already right, which is what makes this the hardest kind of mistake to hear yourself make.`,
          },
          {
            format: 'typeIn',
            q: `« ${fr(A(237))} » Type it again without the name.`,
            accept: [fr(A(238))],
            ref: BEHIND,
            why: `${A_FRAMING} Marie was behind à, so lui, and there is no à left in the sentence at all.`,
          },
          {
            format: 'mcq',
            q: 'Which one is French?',
            opts: [WRONG_SET_ANSWER, 'Je réponds lui.', fr(A(242)), 'Je réponds la.'],
            correct: 2,
            ref: PICK,
            why: 'The first and the fourth use the row of words that stands in for a thing; the second leaves it at the end, where English puts it. Répondre puts the person behind à and the word goes in front of the verb.',
          },
          {
            format: 'errorSpot',
            q: `Fix it: « Je le demande. » You are asking a person, not asking for a thing.`,
            accept: [fr(A(244))],
            ref: VERBS,
            why: 'Demander à quelqu\'un. English asks him with nothing in between, so nothing warned you, and that is precisely why demander is on the list rather than deducible from it.',
          },
          {
            format: 'listenChoose',
            q: 'Which one did you hear?',
            opts: [fr(A(238)), fr(A(240))],
            correct: 1,
            ref: LISTENING,
            why: 'Lwee against luhr. One person against several, and that difference is genuinely audible, unlike the one this lesson actually turns on.',
          },
        ],
      },
      {
        id: 'r2-verbs',
        label: 'Which verbs take à',
        say: 'Five on a list rather than a rule.',
        targets: ['err-keeps-a', 'err-wrong-set'],
        questions: [
          {
            format: 'mcq',
            q: 'Which of these puts the person behind à?',
            opts: ['téléphoner', 'voir', 'regarder', 'connaître'],
            correct: 0,
            ref: VERBS,
            why: 'Téléphoner à quelqu\'un. The other three take the person directly and belong to the row of words you learned last lesson. There is no meaning that separates them; it is a property of each verb.',
          },
          {
            format: 'mcq',
            q: 'And which of these does NOT?',
            opts: ['répondre', 'écrire', 'attendre', 'offrir'],
            correct: 2,
            ref: VERBS,
            why: 'Attendre quelqu\'un, with nothing in between, and French agrees with English for once. The other three all want à and only one of them says so in English.',
          },
          {
            format: 'mcq',
            q: `${ACCENT_LIMIT} Which sentence is right?`,
            opts: ['Je parle a Marie.', fr(A(237)), 'Je parle Marie.', 'Je parle de Marie.'],
            correct: 1,
            ref: BEHIND,
            why: 'This has to be a choice rather than something you type, because the app compares typed answers with the accents stripped and would accept the second one. The fourth is real French and means talking ABOUT her.',
          },
          {
            format: 'typeIn',
            q: `« ${fr(A(239))} » Type it again without the names.`,
            accept: [fr(A(240))],
            ref: BEHIND,
            why: 'Several people behind à, so leur, and no s on it in this position.',
          },
          {
            format: 'errorSpot',
            q: 'Fix it: « Nous obéissons lui. »',
            accept: [fr(A(275))],
            ref: UNSEEN,
            why: 'A verb this lesson never listed, and the rule runs on it unchanged. English obeys him with nothing in between and French will not accept the direct version at all.',
          },
        ],
      },
      {
        id: 'r3-leurs',
        label: 'The one that never grows',
        say: 'Five on a letter you write and never say.',
        targets: ['err-leurs', 'err-wrong-set'],
        questions: [
          {
            format: 'errorSpot',
            q: `Fix it: « ${LEURS_TRAP} »`,
            accept: [fr(A(240))],
            ref: TRAP,
            why: `${LEUR_RULE} A verb follows it, so it is this lesson's word: « ${A117_TEST} », and parle is not a thing.`,
          },
          {
            format: 'typeIn',
            q: 'Several friends, several sets of keys. Type: Here are their keys.',
            accept: [fr(A(259))],
            ref: LEURS,
            why: `${Cap(unitRef(POSSESSIVE_UNIT, 'a2'))}'s word and ${unitRef(POSSESSIVE_UNIT, 'a2')}'s rule. The s counts the keys, never the friends, and there are several of both here.`,
          },
          {
            format: 'mcq',
            q: 'Why does the leur in « Je leur parle. » never take an s?',
            opts: [
              'Because there is only one person',
              'Because a verb follows it, so it is not the possessive',
              'Because it comes after je',
              'Because the verb is in the present',
            ],
            correct: 1,
            ref: TRAP,
            why: `The test is « ${A117_TEST} ». There are several people in that sentence, which is exactly why the first option is tempting and why counting people is wrong.`,
          },
          {
            format: 'typeIn',
            q: 'Type: I do not write to them.',
            accept: [fr(A(267))],
            ref: NEGATION,
            why: `${NEGATION_EXTENSION} Ne outside both, pas after both, and still no s on leur.`,
          },
          {
            format: 'tapSilent',
            q: 'Tap the letter you do not say.',
            word: 'leurs',
            correct: 's',
            ref: LISTENING,
            why: 'The s is silent, which is the whole reason this trap exists. Nothing in the sound will ever tell you whether you got it right, so it is settled in writing or not at all.',
          },
        ],
      },
      {
        id: 'r4-alone',
        label: 'The same word, alone',
        say: 'Five on what sits beside it.',
        targets: ['err-keeps-a', 'err-leurs'],
        questions: [
          {
            format: 'mcq',
            q: 'In which sentence does lui stand on its own rather than belong to the verb?',
            opts: [fr(A(238)), fr(A(242)), fr(A(243)), fr(A(261))],
            correct: 3,
            ref: STRESSED,
            why: `${STRESSED_RULE} In the other three a verb follows and the word goes in front of it.`,
          },
          {
            format: 'errorSpot',
            q: 'Fix it: « Je pars lui sans. »',
            accept: [fr(A(262))],
            ref: STRESSED,
            why: 'After sans the word stays where English puts it, at the end. This is the one place in the lesson where the position rule from last lesson does not apply, and what tells you is the little word in front.',
          },
          {
            format: 'mcq',
            q: `« ${A_KEPT_TRAP} » What is wrong with it?`,
            opts: [
              'Nothing is wrong with it, and it means something else',
              'It is not French',
              'À cannot come before lui',
              'The verb is wrong',
            ],
            correct: 0,
            ref: STRESSED,
            why: `${A_KEPT_WHY} That is why it is the hardest of the three traps: nobody stops you, because there is nothing to stop.`,
          },
          {
            format: 'typeIn',
            q: 'Type: I talk with him.',
            accept: [fr(A(261))],
            ref: STRESSED,
            why: `${STRESSED_RULE} Avec is in front, so lui goes at the end and nothing moves.`,
          },
          {
            format: 'listenChoose',
            q: 'Which one did you hear?',
            opts: [fr(A(242)), fr(A(248))],
            correct: 0,
            ref: LISTENING,
            why: 'One person against several, and two different verbs as well, so there are two things separating these and both are audible.',
          },
        ],
      },
      {
        id: 'r5-past',
        label: 'In the past',
        say: 'Five on a tense you already have, and one thing that never happens in it.',
        targets: ['err-added-ending', 'err-wrong-set'],
        questions: [
          {
            format: 'typeIn',
            q: 'Type: I talked to them.',
            accept: [fr(A(269))],
            ref: ENDING,
            why: `${ENDING_RULE} The word goes in front of both halves of the verb, and parlé stays exactly as it is.`,
          },
          {
            format: 'mcq',
            q: `Why is there no ending on parlé in « ${fr(A(269))} »?`,
            opts: [
              'Because avoir never takes one',
              'Because leur is the person it was done to, and the second word never answers to that',
              'Because leur is plural',
              'Because parler is regular',
            ],
            correct: 1,
            ref: ENDING,
            why: `${ENDING_RULE} The first option is nearly a rule and is not this one: ${unitRef(DIRECT_UNIT)} showed an ending appearing with the same first word, when the thing acted on came first.`,
          },
          {
            format: 'errorSpot',
            q: `Fix it: « Je l'ai parlé. » You are talking about a person.`,
            accept: [fr(A(268))],
            ref: ENDING,
            why: 'The right place and the wrong row of words, in the past. Parler puts the person behind à, so the word is lui.',
          },
          {
            format: 'mcq',
            q: `${Cap(unitRef(REFLEXIVE_PAST_UNIT))} showed you « ${importedFr(A223_ROW_ID)} » with no ending on lavé. Why not?`,
            opts: [
              'Because elle is feminine',
              'Because there are two hands',
              'Because the hands are named after the verb',
              'Because the verb is irregular',
            ],
            correct: 2,
            ref: ENDING,
            why: `« ${A206_AGREEMENT_RULE} » is ${unitRef(DIRECT_UNIT, 'a2')}'s line and it needs the thing acted on to be in front. Les mains comes after, so nothing goes on.`,
          },
          {
            format: 'typeIn',
            q: 'Type: I wrote to her.',
            accept: [fr(A(270))],
            ref: ENDING,
            why: 'A different verb, and the second word is bare again. It is not a fact about parler.',
          },
        ],
      },
      {
        id: 'r6-all',
        label: 'All of it',
        say: 'Five that ask for more than one thing at once.',
        targets: ['err-wrong-set', 'err-leurs', 'err-added-ending'],
        questions: [
          {
            format: 'typeIn',
            q: `« ${fr(A(238))} » Make it negative. Type the whole sentence.`,
            accept: [fr(A(264))],
            ref: NEGATION,
            why: `${NEGATION_EXTENSION} Ne outside, pas after, and the word stays where it was.`,
          },
          {
            format: 'errorSpot',
            q: 'Fix it: « Je ne leurs écris pas. »',
            accept: [fr(A(267))],
            ref: TRAP,
            why: `${LEUR_RULE} Écris follows it, so it is this lesson's word, and the wrap has nothing to do with it either way.`,
          },
          {
            format: 'mcq',
            q: 'Which one is right?',
            opts: ["Je leur ai parlés.", "Je les ai parlé.", fr(A(269)), "J'ai leur parlé."],
            correct: 2,
            ref: ENDING,
            why: 'The first adds an ending that never comes; the third uses the row of words for a thing; the fourth splits the verb in half. Every part of the right answer is a rule you already had.',
          },
          {
            format: 'tapSilent',
            q: 'Tap the letter you do not say.',
            word: 'parlent',
            correct: 't',
            ref: TWO,
            why: `The ending is silent, which ${unitRef('a2.01')} taught you and this lesson leans on: nothing about the small word in front responds to the subject, and nothing about the verb ending is audible either.`,
          },
          {
            format: 'errorSpot',
            q: `Fix it: « ${LEURS_TRAP.replace('parle', 'montre la photo')} »`,
            accept: [fr(A(246))],
            ref: TRAP,
            why: `${LEUR_RULE} There is a photo in the sentence and it sits after the verb, where things sit. The word in front is the people, and it can never grow an s.`,
          },
        ],
      },
    ],
  },

  {
    id: ROUNDUP,
    type: 'roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    layer: 'core',
    body: `${REFRAME} There is no rule behind which verbs do that, which is why the list was the lesson and the two words were the easy half.`,
    points: [
      REFRAME,
      `${A_FRAMING} Six of the ten verbs give you no warning at all in English, and four of them say "to" and let you off.`,
      `« ${POSITION_RULE} » is ${unitRef(DIRECT_UNIT, 'a2')}'s line and it was true of these two words without a word changed. One position, two sets of words.`,
      `${GENDER_LOST}`,
      `${LEUR_RULE} ${Cap(unitRef(POSSESSIVE_UNIT))} gave you the test and it still works: ${A117_TEST}.`,
      `${STRESSED_RULE} That is ${unitRef(WHAT_FOLLOWS_UNIT, 'a2')}'s shape for the sixth time, and ${unitRef(DIRECT_UNIT)} had the fifth.`,
      `${ENDING_RULE} ${Cap(unitRef(REFLEXIVE_PAST_UNIT))} said the reason was waiting here and it was.`,
      `Next: ${unitRef(Y_EN_UNIT)} takes ${A_FRAMING_NEXT} into the same place, which is this lesson's little word with something that is not a person behind it. And two of these small words in one sentence is a question nobody has answered yet.`,
    ],
    sheetId: SHEET_ID,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  ACTS
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The right place, the wrong word',
    sections: [SCENE, SETS, GOALS],
    milestone: 'You have seen both sets of words in the same position and know that only the words are new.',
    estScreens: 20,
    restPoints: [`${SETS}/after-the-sets`],
  },
  {
    id: 'act2',
    title: 'Two words, and one question',
    sections: [TWO, LISTENING],
    milestone: 'You can pick between lui and leur, and you know the ear will not settle the trap that is coming.',
    estScreens: 14,
  },
  {
    id: 'act3',
    title: 'The verbs that put a person behind à',
    sections: [BEHIND, VERBS, SIGNAL, PICK, UNSEEN],
    milestone: 'You know which ten verbs want à, why English hid six of them from you, and what to do with the eleventh.',
    estScreens: 58,
    restPoints: [`${VERBS}/after-the-verbs`, `${PICK}/after-the-drill`],
  },
  {
    id: 'act4',
    title: 'Three ways it goes wrong',
    sections: [LEURS, TRAP, STRESSED, ERRORS],
    milestone: 'You can keep the two leurs apart in writing and tell the word that belongs to a verb from the one that stands alone.',
    estScreens: 40,
    /* `density.logic.ts` caps an unbroken stretch at 22 screens. The rest point
     * goes where the teaching changes, which here is between the word that
     * cannot grow and the word that is not this lesson's at all. */
    restPoints: [`${TRAP}/after-the-trap`],
  },
  {
    id: 'act5',
    title: 'Saying no, and the past',
    sections: [NEGATION, ENDING, FLASH, DICTATION],
    milestone: 'You can wrap the negation round both words and you know that nothing is ever added in the past.',
    estScreens: 38,
    restPoints: [`${DICTATION}/after-the-dictee`],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [TALK, SPEAK, REVIEW, PROGRESS, QUIZ, ROUNDUP],
    milestone: 'Thirty questions, and most of them asked for a whole sentence rather than a choice between four.',
    estScreens: 46,
    restPoints: [`${SPEAK}/after-the-speaking`, `${REVIEW}/before-the-exam`],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  ERROR TRIGGERS AND DRILLS
 *
 *  Invariants §4: `drillForRound` fires the drill of the FIRST resolving target
 *  only, then stops, so a drill named in second place is dead content. Every one
 *  of these four leads at least one round:
 *
 *    err-wrong-set     r1, r6      err-keeps-a       r2
 *    err-leurs         r3          err-added-ending  r5
 *
 *  and r4 leads err-keeps-a a second time, which is legal and deliberate: the
 *  stressed pronoun IS the à-kept error wearing another face.
 * ══════════════════════════════════════════════════════════════════════════ */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-set',
    description: `Reaches into ${unitRef('a2.06')}\'s row of words for a person who sits behind à. « Je l\'ai téléphoné. » THE error of this lesson, and it is worse than the one ${unitRef('a2.06')} predicted because the sentence is grammatical: the position rule was applied perfectly and the result means something else, so nobody corrects it.`,
    detectOn: [SETS, BEHIND, VERBS, PICK, QUIZ],
    drill: 'drill-set',
    retest: 'retest-set',
  },
  {
    id: 'err-keeps-a',
    description: `Keeps the à and writes « Je parle à lui. » Grammatical, and it is the stressed pronoun singling the person out rather than the plain sentence the learner was building. ${Cap(unitRef('a2.04'))} taught an à that stays in the sentence and this one does not, so the habit is transferred rather than invented.`,
    detectOn: [BEHIND, STRESSED, ERRORS, QUIZ],
    drill: 'drill-a',
    retest: 'retest-a',
  },
  {
    id: 'err-leurs',
    description: `Puts ${unitRef('a1.17')}\'s s on a word that can never take one. « Je leurs parle. » The learner has had leur/leurs as an agreeing possessive since ${unitRef('a1.17')} and there are several people in the sentence, so the s looks right and nothing in the sound argues.`,
    detectOn: [LEURS, TRAP, DICTATION, QUIZ],
    drill: 'drill-leurs',
    retest: 'retest-leurs',
  },
  {
    id: 'err-added-ending',
    description: `Adds an ending to the second word after lui or leur, carrying ${unitRef('a2.06')}\'s preceding-object rule into a place it does not reach. « Je leur ai parlés. » ${unitRef('a2.06')} taught an ending appearing with the same auxiliary one lesson ago, so this is a rule generalising rather than a rule forgotten.`,
    detectOn: [ENDING, QUIZ],
    drill: 'drill-ending',
    retest: 'retest-ending',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-set',
    title: 'Which set of words',
    format: 'sort',
    buckets: ['the person is behind à', 'the person is not'],
    items: [A(238), A(242), A(243), A(240), A(248), A(244)],
    coach: `${REFRAME} Every card in the left bucket has a verb that wants à behind it. There is no test you can run on the meaning, so run it on the verb.`,
  },
  {
    id: 'retest-set',
    title: 'One more',
    format: 'mcq',
    q: `« ${fr(A(241))} » Say it without the name.`,
    opts: [fr(A(242)), WRONG_SET_ANSWER, 'Je réponds lui.'],
    correct: 0,
    why: 'Répondre puts the person behind à, so lui, and it goes in front of the verb like everything else in that position.',
  },
  {
    id: 'drill-a',
    title: 'Where the little word goes',
    format: 'flashcard',
    pairs: [[fr(A(237)), fr(A(238))], [fr(A(239)), fr(A(240))], [fr(A(241)), fr(A(242))]],
    coach: `${A_FRAMING} Read across: the person is named on the left and gone on the right, and the à went with them rather than staying behind.`,
  },
  {
    id: 'retest-a',
    title: 'One more',
    format: 'mcq',
    q: 'Which one replaces the name?',
    opts: [fr(A(238)), A_KEPT_TRAP, 'Je parle lui.'],
    correct: 0,
    why: `${A_FRAMING} The second is real French and singles the person out; the third leaves the word where English puts it.`,
  },
  {
    id: 'drill-leurs',
    title: 'Which one can grow',
    format: 'sort',
    buckets: ['never takes an s', 'takes one when the things are plural'],
    items: [A(240), A(258), A(265), A(259), A(254), A(267)],
    coach: `« ${A117_TEST} ». Look at the word straight after it: a verb means the left bucket, a thing means the right one, and how many people there are never comes into it.`,
  },
  {
    id: 'retest-leurs',
    title: 'One more',
    format: 'mcq',
    q: 'Several people. Which one is right?',
    opts: [fr(A(240)), LEURS_TRAP, 'Je leur parles.'],
    correct: 0,
    why: LEUR_RULE,
  },
  {
    id: 'drill-ending',
    title: 'The ending that never comes',
    format: 'flashcard',
    pairs: [[fr(A(238)), fr(A(268))], [fr(A(240)), fr(A(269))], [fr(A(257)), fr(A(270))]],
    coach: `${ENDING_RULE} Each pair is the present on the left and the past on the right, and the second word is bare in every one of them.`,
  },
  {
    id: 'retest-ending',
    title: 'One more',
    format: 'mcq',
    q: 'Several people, in the past. Which one?',
    opts: [fr(A(269)), 'Je leur ai parlés.', 'Je leur ai parlée.'],
    correct: 0,
    why: ENDING_RULE,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE REFERENCE SHEET
 *
 *  Corrections §8: a `sheetId` resolves ONLY inside the lesson that declares it,
 *  so this cannot extend a2.06's and nobody can extend this one. The brief asks
 *  what it holds that a2.06's could not, and the answer is the reason it exists:
 *
 *    THE VERB LIST. a2.06's sheet is about where a word sits relative to a verb,
 *    in three tenses, and it names four forms. Not one line of it is about WHICH
 *    VERBS, because for a2.06 the answer was all of them. Here it is ten of them
 *    and there is no rule, so a list is the only form the fact can take, and a
 *    table at layer core is a density failure. That is the whole argument for
 *    this sheet and it is also the argument for its shape.
 *
 *  `ReferenceSheet.tsx` draws `teach`, `letterGrid` and `table` and nothing
 *  else; a `cheatSheet` inside one draws its title and no content, so there is
 *  not one here.
 * ══════════════════════════════════════════════════════════════════════════ */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    layer: 'deep',
    title: 'The verbs, and the two words',
    contains: ['The rule', 'All ten verbs', 'The two words', 'The other leur', 'Next'],
    sections: [
      {
        id: 'sheet-rule',
        type: 'teach',
        layer: 'deep',
        title: 'The rule, in one line',
        body: `${REFRAME} ${A_FRAMING} And the place it goes is not new: « ${POSITION_RULE} » is ${unitRef(DIRECT_UNIT, 'a2')}'s line and it is true of these two words unchanged. The only thing you have to hold is which verbs put the person behind à, and that is a list rather than a rule.`,
      },
      {
        /* THE ONE REAL `table`, and it is here because a table at layer core is a
         * density failure and because ten rows is well past the tapTable's six.
         * The in-flow version is s07-verbs, which carries the six that matter. */
        id: 'sheet-verbs',
        type: 'table',
        layer: 'deep',
        title: 'All ten, and what English says',
        cols: ['French', 'English', 'warns you?'],
        rows: [
          ...A_VERBS_SILENT.map((v) => [v.frame, v.en, 'no']),
          ...A_VERBS_MARKED.map((v) => [v.frame, v.en, `yes, "${v.englishPrep}"`]),
        ],
      },
      {
        id: 'sheet-words',
        type: 'table',
        layer: 'deep',
        title: 'The two words, and the three places',
        cols: ['when', 'the shape', 'example'],
        rows: [
          ['one person', 'subject · lui · verb', noStop(fr(A(238)))],
          ['several people', 'subject · leur · verb', noStop(fr(A(240)))],
          ['negative', 'subject · ne · word · verb · pas', noStop(fr(A(264)))],
          ['past', 'subject · word · first word · second word', noStop(fr(A(268)))],
        ],
      },
      {
        id: 'sheet-leur',
        type: 'teach',
        layer: 'deep',
        title: 'The other leur',
        body: `${LEUR_RULE} ${Cap(unitRef(POSSESSIVE_UNIT))} owns the possessive and this lesson re-teaches none of it. Its test is the one to keep: ${A117_TEST}. ${noStop(fr(A(240)))} has a verb behind it. ${noStop(fr(A(259)))} has keys behind it, and there are several, so the s goes on. How many people there are never enters into either decision.`,
      },
      {
        id: 'sheet-next',
        type: 'teach',
        layer: 'deep',
        title: 'What comes next',
        body: `${Cap(unitRef(Y_EN_UNIT))} puts ${A_FRAMING_NEXT} into this same place, which is the little word you learned today with something that is not a person behind it. Two of these small words in one sentence is a further question and nobody has answered it yet. ${ENDING_RULE}`,
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  DECK TRANCHES
 *
 *  One tranche per act, built from a MEASURED FIRST-SHOW rather than from the
 *  plan: each tranche is the set of items whose first appearance on any screen
 *  falls in that act, measured by walking the acts in order. Invariants §1: the
 *  question is "did the learner see it", not "does this id resolve".
 * ══════════════════════════════════════════════════════════════════════════ */

const DECK_TRANCHE: string[][] = [
  /* Act 1: the frame, and a2.06's two sentences the contrast is built on.
   *
   * MEASURED, NOT PLANNED. The first draft put A(240) here too, because act 1
   * shows « lui · lui · leur » as a row of words. The batch refused it and was
   * right: a row of WORDS is not the sentence, and « Je leur parle. » does not
   * reach a screen until the listening lines in act 2. */
  [A(238), A206_FRAME_ID, A206_KNOW_ID],
  // Act 2: the plural frame, the paradigm across the persons, and the two lines
  // the ear separates.
  [A(240), A(242), A(248), A(251), A(252), A(253), A(254), A(255), A(257)],
  // Act 3: the Owns. The à halves, the ten verbs' sentences, the unseen four,
  // and the two published sentences nobody wrote to prove this rule.
  [
    A(237), A(239), A(241), A(243), A(244), A(245), A(246), A(247), A(249), A(250),
    A(272), A(273), A(274), A(275),
    'fr.a1.pronoms-essentiels.126', 'fr.a2.pronoms-essentiels.020',
    'fr.a2.pronoms-essentiels.026',
  ],
  // Act 4: the possessive contrast and the stressed pronoun.
  [A(258), A(259), A(260), A(261), A(262), A(263), A(265)],
  // Act 5: the negatives that are taught, the past, and the banked verbs.
  [
    A(264), A(268), A(269), A(270), A(271), A(283),
    A223_ROW_ID,
    ...IMPORTED.map((i) => i.id), ...IMPORTED_PHRASES.map((i) => i.id),
  ],
  /* Act 6: the conversation, and the rows the speak list and the exam reach
   * last. A(266) and A(267) are here rather than in act 5 for the same measured
   * reason A(240) moved out of act 1: the negation deck teaches three of the
   * four negatives and the fourth pair is not on a screen until the exam. */
  [A(276), A(277), A(278), A(279), A(280), A(281), A(282), A(256), A(266), A(267), A(284), A(285), A(286)],
];

const ITEM_IDS: string[] = [...new Set(DECK_TRANCHE.flat())];

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ══════════════════════════════════════════════════════════════════════════ */

const LESSON_AUTHORED: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  tag: `A2 · LEÇON ${String(UNIT.seq).padStart(2, '0')}`,
  level: 'a2',
  /** v1 was the first build and it reached Postgres and the seed. Corrections §1
   *  measured `lessonIds: []` for every remaining unit, so the counter started
   *  at 1 rather than at whatever a pre-v2 stub left behind.
   *
   *  v2 REPAIRS A DEFECT FOUND ON A PIXEL 6 AND NOWHERE ELSE, and it is the
   *  fourth time in this band that the device half has earned itself.
   *
   *  Twelve cards put two sentences side by side on one `fr` line joined by
   *  « · », which is how every lesson in this band does it. At 36 characters
   *  that line CLIPS: LAYOUT 2 drew as « Je leur parle. · Voici leurs » with the
   *  last word gone, while the respelling underneath still read `KLAY`. That is
   *  invariants §2's flex-on-a-Text failure, and NINE of the twelve cards were
   *  over the length that survived.
   *
   *  EVERY HOST GATE WAS GREEN. The batch, the merge and the test all asserted
   *  that both sentences were on one card and none of them asserted how wide the
   *  card draws — the same shape of blindness a2.06 shipped a clipped mission
   *  title through at v2, one lesson ago, and the same lesson learned twice.
   *
   *  The repair is the shape LAYOUT 1 already used and which had ALREADY BEEN
   *  PROVED ON GLASS in this lesson twenty minutes earlier: the left sentence in
   *  `fr`, the right in `sub`, drawn as two rows. It does not depend on a
   *  character budget nobody has measured. A guard in the batch now refuses any
   *  `fr` that joins two sentences with the separator.
   *
   *  v3 REPAIRS A COPY DEFECT FOUND ON THE SAME DEVICE PASS, on the trapDrill's
   *  rule card. a1.17's test is a lowercase fragment — « a possessive has a
   *  thing behind it » — and five strings interpolated it straight after a full
   *  stop, so the card drew « … how many people you mean. a possessive has a
   *  thing behind it, and a verb is not a thing. » That reads as a typo.
   *
   *  The repair is to quote the fragment. The guard is new and it found THREE
   *  MORE the same pass, including « Je le vois. is a2.06's own sentence » and
   *  a `GENDER_LOST` that opened on a bare lowercase `lui`. It carries two
   *  measured exemptions: a unit id is lowercase by construction, and so is a
   *  fragment already inside « ».
   *
   *  Corrections §10: THE COUNTER MOVES rather than the body being corrected
   *  under one number. Two different bodies under one number is the drift this
   *  project has lost work to twice, and the batch's own version guard refused
   *  the re-apply at v2, which is the guard working. */
  version: 7,

  /** DRAWN ON THE LESSON OVERVIEW CARD AND ON THE LESSON COVER, and corrections
   *  §9 records that a2.11 shipped grammar jargon here while every host gate was
   *  green, because the jargon walk read `sections + sheets + terms` and not
   *  this. The walk in the batch, the merge and the test all include it, and it
   *  carries its own assertion so a later author who trims it fails with the
   *  reason. */
  intro:
    'Last lesson you learned where a small word goes: in front of the verb, never after it. That has not changed and it is not what today is about. There is a second set of small words that goes in exactly the same place, and which one a sentence wants is decided by the verb rather than by the meaning. Ten verbs put the person behind à, and six of them do it without English giving you the slightest warning: you phone someone, you answer someone, you ask someone, and French quietly insists on a word your own language never says.',

  grammarAssumed: [
    'The third-person direct object pronouns le, la and les and their obligatory preverbal placement, introduced in a2.06',
    'Past participle agreement with a preceding direct object, introduced in a2.06',
    'The possessive determiners leur and leurs and their agreement with the thing possessed, introduced in a1.17',
    'The preposition à in front of a place, and its contraction with the definite article, introduced in a2.04 and a1.21',
    'The present tense of regular -ER verbs and its silent endings, introduced in a2.01',
    'Standard negation with ne … pas around a finite verb, introduced in a1.18',
    'That ne … pas encloses the verb that changed rather than the one carrying the meaning, introduced in a2.19 and quoted by a2.05, a2.21, a2.22, a2.23 and a2.06',
    'The passé composé as auxiliary plus past participle, introduced in a2.05',
    'The futur proche, introduced in a2.19',
    'The rising-intonation question, introduced in a1.19',
  ],
  grammarIntroduced: [
    'The third-person indirect object pronouns lui and leur, as a paradigm distinct from the direct object pronouns of a2.06 and from the homophonous possessive determiner of a1.17',
    'The lexical class of verbs governing a dative complement in à, taught as an enumerated list of ten rather than as a semantic generalisation, with the four that English marks with "to" separated from the six it does not mark at all',
    'That the à of the dative complement is absorbed by the pronoun and does not surface, in explicit contrast with the locative à of a2.04 which does',
    'Neutralisation of the gender contrast in the third-person singular indirect form, so that lui covers both antecedents where le and la did not',
    'That leur as an indirect object pronoun is invariable and never carries the plural -s of the homophonous possessive determiner, a distinction realised orthographically only',
    'The stressed pronoun lui after a preposition, as the sixth instance of the one-form-two-jobs pattern named by a2.02, disambiguated by the element adjacent to it',
    'That the past participle never agrees with an indirect object, which is the reason a2.23 named for the suspended agreement in « Elle s\'est lavé les mains » and deferred to this unit',
    'That ne … pas encloses the indirect clitic together with the finite verb, quoting a2.06 unchanged rather than extending it',
    'Pronominal y and en are reserved entirely for a2.25, and the co-occurrence of two object pronouns in one clause is reserved beyond this unit',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    /** `content_units` requires this to be the unit's English name, which is the
     *  ONLY place in the lesson either technical compound appears. This unit's
     *  name contains BOTH of the phrases a2.06 refused outright, so the
     *  exemption is checked to BE this exact string. Corpus §8. */
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'La personne derrière à devient lui ou leur.',
    minutes: 30,
    difficulty: 3,
    glyph: '🎯',
    screens: 216,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PRONOMS_INDIRECT_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Invariants §10: anything the learner must hear as a CONTRAST is ONE TAKE
    // with ONE voice, because two recordings are two performances and the
    // learner will hear the performance rather than the language. Every `desc`
    // below says so where it applies, because the constraint becomes invisible
    // the moment the clip is delivered.
    recorded: [
      { id: 'rec-a2-24-sets', desc: 'The two rows of words. Read le, la, les and then lui, lui, leur as SIX SEPARATE WORDS at an even pace, with no extra weight on any of them. The two sentences on the later cards are ONE TAKE each, both halves in it, so the learner hears one sentence becoming another rather than two being compared.' },
      { id: 'rec-a2-24-behind', desc: 'The à disappearing. ONE TAKE PER CARD holding both sentences. The à must be read at its natural weight, which is almost none, because a reader who leans on it teaches that the learner will hear it coming and the whole point is that they will not.' },
      { id: 'rec-a2-24-verbs', desc: 'Six verb frames and six short sentences, read separately at a steady pace. Each frame ends « à quelqu\'un » and the à must sound exactly as unstressed there as it does inside the sentence beside it.' },
      { id: 'rec-a2-24-leurs', desc: 'The possessive against the pronoun. ONE TAKE PER CARD. « Je leur parle » and « Voici leurs clés » must be read with IDENTICAL treatment of the word leur: no lengthening, no s, nothing that would let a listener tell them apart, because the entire card says the difference is not there to hear.' },
      { id: 'rec-a2-24-trap', desc: 'The four trap cards, in order: « Je leurs parle. », « Je leur parle. », « Voici leurs clés. », « Voici leur maison. » The FIRST TWO MUST BE INDISTINGUISHABLE from one another. A reader who separates them makes the exercise measure something that is not in the language, and the learner will hear the performance rather than the trap.' },
      { id: 'rec-a2-24-stressed', desc: 'lui in both jobs. ONE TAKE per card holding both sentences. In « Je parle avec lui » the lui carries the phrase stress and in « Je lui parle » it carries none, and that difference IS real and should be audible; it is the one contrast in this lesson a reader may lean into.' },
      { id: 'rec-a2-24-negation', desc: 'The wrap. ONE TAKE per card holding both sentences. Ne must NOT be given extra length: it is unstressed in speech and often barely there, and a recording that pronounces it carefully teaches a register nobody uses.' },
      { id: 'rec-a2-24-listening', desc: 'audioFirst. Four lines, ONE TAKE, one voice, no gaps that let the learner rehearse between them. Lines 1 and 2 differ by one word and that difference is the whole first question.' },
      { id: 'rec-a2-24-dictee', desc: 'Thirteen lines, ONE VOICE, read at dictation pace with the same interval before each. « Voici leurs clés. » must be read with NO audible s, exactly as « Voici leur maison. » is: the whole point of the pair is that the letter is not there to hear, and a reader who distinguishes them makes the exercise measure something that is not there.' },
    ],
  },
};

export const REFRAME_STRING = REFRAME;
export const PRONOMS_INDIRECT_ITEM_IDS = ITEM_IDS;
export const PRONOMS_INDIRECT_SECTION_IDS = SECTIONS.map((s) => s.id);
export const PRONOMS_INDIRECT_SHEET_ID = SHEET_ID;
/** Every role-play turn declares its own two `alts` and its `userEn` inline, so
 *  there is no post-processing step. `scenario.logic.test.ts` requires both and
 *  the batch asserts both before the apply rather than leaving it to the suite,
 *  which is where a2.03 found out. */
export const PRONOMS_INDIRECT_LESSON: Lesson = LESSON_AUTHORED;
