// a2.25.l1 « Y et EN » — the lesson body.
//
// Trail seq 23, the third and last lesson of the pronoun block. Every fact this
// file displays comes from y-en-corpus.ts or from the recorded read of Postgres;
// nothing is restated here.
//
// ── THE SHAPE, AND WHERE THE WEIGHT WENT ───────────────────────────────────
//
// Doctrine §B.5: every lesson owns exactly one thing, and if the paradigm gets
// more sections than the Owns the wrong lesson was built. The Owns here is WHAT
// THESE TWO REPLACE, which is not a noun: a preposition and its object together.
// The paradigm is TWO WORDS that never change for anything.
//
//   sections about what they replace   7   s02 s04 s07 s08 s09 s10 s14
//   sections about the two words       3   s05 s06 s15
//
// And the split the brief asks to be reported, because « y has an English
// analogue in "there" and en has none »:
//
//   the en half   5   s07 s08 s09 s11 s12
//   the y half    3   s04 s05 s13
//
// ── THE FOUR REQUIRED LAYOUTS, EACH IN ONE SECTION ─────────────────────────
//
//   1. y and en on ONE card with what each replaces, the preposition VISIBLE
//      inside the pronoun. Two rows, `fr` and `sub`.               s02-two
//   2. « à Marie → lui » beside « à Paris → y », person against thing, one
//      preposition. Built out of a2.24's and a2.04's own rows.     s04-person
//   3. The three ens in one section, with the position marked, and a2.04 and
//      a2.18 both named by unit id.                                s11-threeens
//   4. « Oui, j'en ai. » beside the impossible « Oui, j'ai. »      s08-must
//
// The pair cards are `fr` and `sub` as TWO ROWS rather than one line joined by
// « · ». a2.24 shipped the one-line version, it CLIPPED on a Pixel 6 at 36
// characters with every host gate green, and the repair cost a version number.
// This build starts from the repaired shape and guards it.
//
// ── LAYOUT FACTS OBSERVED ──────────────────────────────────────────────────
//
// `table` at layer core is a density failure, so the three-ens screen is a
//   `tapTable` (three rows, well inside the six-row Pixel 6 ceiling) and the
//   real tables live in the sheet at layer deep.
// `commonErrors` carries `swipe: true` or it draws a blank screen.
// `trapDrill` walks rule > cards > audio > drill with a GATED drill step, and
//   carries no `size` — corrections §14.6.
// Three term chips per section. The renderer shows three.
// A mission title over 13.55 em clips on the mission row. The batch measures
//   every title with a2.23's model rather than counting characters.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  A, A118_REFRAME, A129_REFRAME, A204_CITY_ID, A204_REFRAME, A204_ROW_ID,
  A206_FRAME_ID, A218_EN_CLAIM, A218_EN_PHRASE_ID, A218_EN_ROW_ID,
  A218_ILYA_AGO_ID, A218_ILYA_ROW_ID, A224_NAMED_ID, A224_PRONOUN_ID, A_FRAMING,
  A_FRAMING_MINE, A_FRAMING_NEXT, ACCENT_LIMIT, BREAK_BODY, DE_FRAMING,
  DIRECT_UNIT, EN_JOBS, EN_POSITION_RULE, EN_ROW, EN_JOB_LIMIT, FROZEN_ERROR,
  FROZEN_ERROR_WHY, FROZEN_RULE, FROZEN_UNIT, FUTUR_UNIT, IMPORTED,
  IMPORTED_PHRASES, INDIRECT_UNIT, KEEPS_A_ERROR, KEEPS_DE_ERROR,
  KEEPS_PREP_WHY, LESSON_ID, MUST_ENGLISH, MUST_RIGHT, MUST_RULE, MUST_RULE_Y,
  MUST_WRONG, NEGATION_EXTENSION, NEGATION_RULE, NEGATION_UNIT, ORDER_DEFERRED,
  ORDER_PUBLISHED_IDS, ORDER_RULE, PARTITIVE_ROW_ID, PARTITIVE_UNIT,
  PERSON_ERROR, PERSON_ERROR_WHY, PLACE_UNIT, PLAIN_PHRASE, PLAIN_TARGET,
  POSITION_RULE, REFRAME, ROWS, SCENE_ERROR, SCENE_ERROR_EN, SCENE_QUESTION,
  SCENE_QUESTION_EN, SCENE_RIGHT, SCENE_RIGHT_EN, SCENE_WAIT, SCENE_WAIT_EN,
  SHAPE_EXTENSION, TIME_UNIT, UNIT, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT, Y_ROW,
} from './y-en-corpus.ts';
import { Y_EN_TERMS } from './y-en-terms.ts';
import { importedFr, importedEn, respell as impRespell, hasRespell } from './y-en-imported.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ─── Reading the corpus, never restating it ─────────────────────────────── */

const BY_ID = new Map(ROWS.map((r) => [r.id, r]));
const row = (id: string) => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`${Cap(unitRef('a2.25'))}: no authored row ${id}`);
  return r;
};
const fr = (id: string) => row(id).fr;
const en = (id: string) => row(id).en;
const ipaOf = (id: string) => row(id).ipa!;
/** The bracketed respelling a card prints under the French. */
const sub = (id: string) => `[${row(id).respell}]`;
/** A sentence with its full stop removed, for a heading or an option. */
const noStop = (s: string) => s.replace(/\s*[.]$/u, '');

/** TWO ROWS, NOT ONE LINE. a2.24's v1 joined two sentences on one `fr` with
 *  « · » and the line CLIPPED on a Pixel 6 at 36 characters, losing its last
 *  word while the respelling underneath still printed it. This build never
 *  builds that shape: `pairRows` returns the two card fields together so a later
 *  author cannot rebuild it by accident, and a guard refuses any `fr` joining
 *  two sentences with the separator. */
const pairRows = (a: string, b: string) => ({ fr: fr(a), sub: fr(b) });
/** The same, where the left half is an IMPORTED row. */
const pairImported = (a: string, b: string) => ({ fr: importedFr(a), sub: fr(b) });
/** The two bracketed respellings, for the body of a two-row card. */
const bothRespells = (a: string, b: string) => `${sub(a)} then ${sub(b)}`;
/** And where the left half is imported: some published sentences carry no
 *  respelling at all, so the card prints only the one it has. */
const importedThen = (a: string, b: string) =>
  (hasRespell(a) ? `[${impRespell(a)}] then ${sub(b)}` : `${sub(b)} for the second line; the first is a published sentence and carries no respelling of its own.`);
const card = (id: string) => ({ fr: fr(id), en: en(id), sub: sub(id) });

/* ─── Section ids ────────────────────────────────────────────────────────── */

const SCENE = 's01-scene';
const TWO = 's02-two';
const GOALS = 's03-goals';
const PERSON = 's04-person';
const THERE = 's05-there';
const LISTENING = 's06-listening';
const DE = 's07-de';
const MUST = 's08-must';
const QUANTITY = 's09-quantity';
const UNSEEN = 's10-unseen';
const THREEENS = 's11-threeens';
const TRAP = 's12-trap';
const FROZEN = 's13-frozen';
const ERRORS = 's14-errors';
const NEGATION = 's15-negation';
const ORDER = 's16-order';
const FLASH = 's17-flash';
const DICTATION = 's18-dictation';
const TALK = 's19-talk';
const SPEAK = 's20-speak';
const REVIEW = 's21-review';
const PROGRESS = 's22-progress';
const QUIZ = 's23-quiz';
const ROUNDUP = 's24-roundup';
const SHEET_ID = 'sheet-y-en';

/** The sections whose subject is the Owns, and the sections whose subject is
 *  the paradigm. Exported so the test asserts the ratio rather than counting
 *  something derived from the acts. */
export const OWNS_SECTIONS = [TWO, PERSON, DE, MUST, QUANTITY, UNSEEN, ERRORS] as const;
export const PARADIGM_SECTIONS = [THERE, LISTENING, NEGATION] as const;
/** And the two halves of the canDo, so the weighting is asserted rather than
 *  described. The brief: the obligatory `en` « deserves more weight than the y
 *  half, because y has an English analogue in "there" and en has none ». */
export const EN_SECTIONS = [DE, MUST, QUANTITY, THREEENS, TRAP] as const;
export const Y_SECTIONS = [PERSON, THERE, FROZEN] as const;

/** The sections where a wrong form is deliberately shown. FIVE, and `s10-unseen`
 *  is on it for a reason worth stating: its two checks offer the doubled
 *  preposition as a distractor on verbs the lesson never listed, which is where
 *  a learner running the rule cold actually produces it. */
export const WRONG_FORM_SECTIONS = [SCENE, UNSEEN, TRAP, ERRORS, QUIZ] as const;

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE SCENE
 *
 *  Doctrine §B.2: the sentence dies in the middle, nobody is rude and nobody is
 *  corrected. a2.06's scene trails off and a2.24's finishes and means something
 *  else. THIS ONE STOPS. « Oui, j'ai. » is two words with nowhere to go, and the
 *  other person waits, and then says the missing word herself in a question
 *  without correcting anybody.
 * ══════════════════════════════════════════════════════════════════════════ */

const SCENE_BEATS = [
  {
    kind: 'narration' as const,
    size: 'md' as const,
    text: 'A Saturday morning, a friend\'s kitchen in Lyon, and she is making something that needs three things she has run out of. You are the one nearest the cupboard.',
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'narration' as const,
    size: 'md' as const,
    text: 'You have been doing this for months now and you have stopped rehearsing. She asks over her shoulder, the way people ask when the answer is obviously yes or obviously no.',
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'bubble' as const,
    from: 'them' as const,
    speaker: 'Ton amie',
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
    stage: 'Two words, and then nothing. You know the answer, you know both words, and the sentence will not close. In English it closes on its own: yes, I do. Here it hangs, and you can hear that it is hanging.',
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'bubble' as const,
    from: 'them' as const,
    speaker: 'Ton amie',
    fr: SCENE_WAIT,
    en: SCENE_WAIT_EN,
    size: 'md' as const,
    reveal: 'tap' as const,
    stage: 'She has not corrected you. She thinks she misheard, so she asks again, and she uses the word you were missing. It has been in front of you all morning and you have never had to say it.',
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'choice' as const,
    size: 'lg' as const,
    prompt: 'Which of these closes the sentence?',
    options: [
      { fr: SCENE_RIGHT, en: SCENE_RIGHT_EN, outcome: 'works' as const },
      { fr: SCENE_ERROR, en: SCENE_ERROR_EN, outcome: 'breaks' as const },
    ],
    followUp: {
      works: 'One extra letter, and the sentence has somewhere to end. Nothing else about it changed.',
      breaks: 'That is what came out, and it is not a sentence in French. The verb has nothing after it and the listener is still waiting.',
    },
  },
  {
    kind: 'break' as const,
    size: 'lg' as const,
    heading: 'The word that has to be there',
    body: BREAK_BODY,
    wrong: { fr: SCENE_ERROR, ipa: '/wi ʒe/', respell: '[wee, ZHAY]', en: SCENE_ERROR_EN },
    right: { fr: SCENE_RIGHT, ipa: '/wi ʒɑ̃.n‿e/', respell: '[wee, zhahⁿ NAY]', en: SCENE_RIGHT_EN },
    coach: REFRAME,
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'resolve' as const,
    size: 'md' as const,
    text: `There are two small words that go in the place you already know, and each of them has a little word folded inside it. ${REFRAME}`,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE SECTIONS
 * ══════════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  {
    id: SCENE,
    type: 'scene',
    title: 'The Answer That Stopped',
    frSub: 'La réponse en deux mots',
    layer: 'core',
    render: 'screens',
    setting: { place: "A friend's kitchen", city: 'Lyon', time: 'Saturday morning' },
    beats: SCENE_BEATS,
  },

  /* REQUIRED LAYOUT 1. Both rows on ONE card, with what each replaces, and the
   * preposition VISIBLE inside the pronoun. `fr` draws the y row and `sub` draws
   * the en row directly under it. Corrections §13 is why every walk in this
   * build is a display() walk: prose() drops `sub` as notation and would not see
   * half of the layout it is supposed to be asserting. */
  {
    id: TWO,
    type: 'cardDeck',
    title: 'Two Words, One Job',
    frSub: 'Y et EN',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `Two rows, and each one has a little word hidden inside it. ${REFRAME}`,
    hint: 'Read the right-hand side of each row first.',
    terms: ['inside', 'twoWords', 'sameSlot'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-25-two' },
    cards: [
      {
        head: 'What each one is made of',
        label: 'the pronoun · and what went into it',
        fr: Y_ROW,
        sub: EN_ROW,
        body: `${REFRAME} Every small word before these stood in for the noun and left the rest alone. These two take the little word as well, so nothing is left of it.`,
      },
      {
        head: 'and the place is the one you know',
        label: `${Cap(unitRef(DIRECT_UNIT, 'a2'))}'s sentence · this lesson's`,
        fr: importedFr(A206_FRAME_ID),
        sub: fr(A(288)),
        body: `${sub(A(288))} « ${POSITION_RULE} » is ${unitRef(DIRECT_UNIT, 'a2')}'s line and it is true of these two without a word changed. The first line is that lesson's own sentence, borrowed rather than copied.`,
      },
      {
        head: 'the little word goes in',
        label: 'named · and gone',
        ...pairImported(A204_CITY_ID, A(288)),
        body: `${importedThen(A204_CITY_ID, A(288))} ${A_FRAMING_MINE} Paris is gone and so is the à, and the second sentence is two words long. The first line is ${unitRef(PLACE_UNIT, 'a2')}'s own published row.`,
      },
      {
        head: 'and the same thing on the other side',
        label: 'de went in · with the noun',
        ...pairRows(A(291), A(292)),
        body: `${bothRespells(A(291), A(292))} ${DE_FRAMING} Same verb as last lesson, and a different little word in front of it.`,
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
      { t: 'Swap a whole phrase for one small word', s: `${REFRAME} That is the one new idea in this lesson and everything else is something you already have.` },
      { t: 'Say how many without saying what of', s: `${A_FRAMING_MINE} ${DE_FRAMING} A number can stay behind it and the noun still goes.` },
      { t: 'Stop leaving it out', s: `${MUST_RULE} English answers with two words and French will not.` },
      { t: 'Tell the three ens apart', s: `${EN_POSITION_RULE} ${Cap(unitRef(PLACE_UNIT))} and ${unitRef(TIME_UNIT)} taught the other two and this lesson teaches neither of them again.` },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 2. A PERSON, A PLACE, A THING
   * ═══════════════════════════════════════════════════════════════════════ */

  /* REQUIRED LAYOUT 2, AND IT IS THE a2.24 HANDSHAKE. « à Marie → lui » beside
   * « à Paris → y », one preposition and two answers, built out of a2.24's own
   * two rows and a2.04's. The brief calls this « the cleanest sentence in your
   * lesson » and it is. */
  {
    id: PERSON,
    type: 'cardDeck',
    title: 'A Person Or A Place',
    frSub: 'lui ou y',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `« ${A_FRAMING} » is ${unitRef(INDIRECT_UNIT, 'a2')}'s line, from last lesson, and it is half of what à does. ${A_FRAMING_MINE}`,
    hint: 'Look at what was sitting behind à.',
    terms: ['personOrThing', 'inside', 'twoWords'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-25-person' },
    cards: [
      {
        head: 'the same little word, twice',
        label: 'a person behind it · a place behind it',
        fr: importedFr(A224_NAMED_ID),
        sub: fr(A(287)),
        body: `[${impRespell(A224_NAMED_ID)}] then ${sub(A(287))} Both sentences have à in them and there is nothing else to go on. What decides is whether the thing behind it breathes. The first line is ${unitRef(INDIRECT_UNIT, 'a2')}'s own row.`,
      },
      {
        head: 'and two different answers',
        label: 'a person becomes lui · a place becomes y',
        fr: importedFr(A224_PRONOUN_ID),
        sub: fr(A(288)),
        body: `[${impRespell(A224_PRONOUN_ID)}] then ${sub(A(288))} « ${A_FRAMING} » ${A_FRAMING_MINE} One little word, two lessons, and only what sat behind it differs.`,
      },
      {
        head: 'and the same verb settles it',
        label: `${Cap(unitRef(INDIRECT_UNIT))} answered lui · here it is y`,
        fr: fr(A(331)),
        sub: `${sub(A(331))} ${en(A(331))}`,
        body: `Répondre à is one of the verbs ${unitRef(INDIRECT_UNIT)} gave you, and its answer there was lui because a person was behind à. A letter is not a person, so it is y. Nothing about the verb or the rule changed.`,
      },
      {
        head: 'and it is not always a place',
        label: 'an exam behind à · so still y',
        ...pairRows(A(289), A(290)),
        body: `${bothRespells(A(289), A(290))} An exam is not somewhere you can stand, and y is still the answer. That is worth meeting early, because the English word this looks like is « there » and it is about to stop helping.`,
      },
    ],
  },

  {
    id: THERE,
    type: 'cardDeck',
    title: 'Not Always There',
    frSub: "Pas seulement un lieu",
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `${MUST_RULE_Y} Five pairs, and only two of them are about a place at all.`,
    hint: 'Try translating the second line without the word "there".',
    terms: ['twoWords', 'inside', 'sameSlot'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-25-there' },
    cards: [
      {
        head: 'a place, and English drops the word',
        label: 'au marché · and then nothing',
        ...pairRows(A(304), A(305)),
        body: `${bothRespells(A(304), A(305))} au is à plus le, which ${unitRef(PLACE_UNIT)} owns, and y swallows the whole of it. Read the English answer again: there is no market in it, and no « there » either.`,
      },
      {
        head: 'a game, which is not a place',
        label: 'au tennis · and it is still y',
        ...pairRows(A(306), A(307)),
        body: `${bothRespells(A(306), A(307))} Jouer à, and the thing behind à is a game. Nobody stands in tennis, and y is still what comes out.`,
      },
      {
        head: 'and the corpus said so first',
        label: 'published, by somebody not teaching this',
        fr: importedFr('fr.a2.pronoms-essentiels.030'),
        sub: importedFr('fr.a2.pronoms-essentiels.029'),
        body: `Two published sentences, both in this lesson's own theme, both written years ago for somebody else's screen. The second one holds the whole of this lesson's opening in eight words, and the phrase « ${importedFr('fr.a2.pronoms-essentiels.028')} » is published beside them as a card of its own.`,
      },
      {
        head: 'and the subject makes no difference',
        label: 'nous · elle',
        ...pairRows(A(308), A(321)),
        body: `${bothRespells(A(308), A(321))} The word does not agree with anything, does not change for anything, and sits in the same place every time. ${Cap(unitRef('a2.01'))} owns the nous form and this borrows it.`,
      },
      {
        head: 'a question, and a plural subject',
        label: 'tu · ils',
        ...pairRows(A(320), A(324)),
        body: `${bothRespells(A(320), A(324))} The pronoun does not move for a question, which ${unitRef('a1.19')} owns. And pensent sounds exactly like pense, which is ${unitRef('a2.01')}'s business rather than this lesson's.`,
      },
    ],
  },

  /* THE EAR, AND WHAT IT CAN AND CANNOT SETTLE. « J'y vais » against « Je vais »
   * is a real audible contrast and so is « J'en ai » against « J'ai ». The two
   * ens are ONE SOUND and no question anywhere in this lesson goes near them.
   * Corrections §5 applied on a card rather than in a report. */
  {
    id: LISTENING,
    type: 'listening',
    title: 'One Sound Apart',
    frSub: "Ce que l'oreille décide",
    layer: 'core',
    say: `Four lines. The ear can tell you whether the word is there at all, which is the thing that matters most. ${EN_JOB_LIMIT}`,
    terms: ['twoWords', 'mustSayIt', 'threeEns'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-25-listening' },
    lines: [
      { fr: fr(A(288)), en: en(A(288)) },
      { fr: fr(A(292)), en: en(A(292)) },
      { fr: fr(A(311)), en: en(A(311)) },
      { fr: fr(A(312)), en: en(A(312)) },
    ],
    questions: [
      {
        q: `« ${noStop(fr(A(288)))} » against « Je vais ». What separates them?`,
        opts: ['One sound, and it is the whole meaning', 'Nothing at all', 'The verb'],
        correct: 0,
        why: 'Zhee against zhuh. One vowel, and the second sentence is missing the word this lesson is about. That difference is genuinely audible, which is more than can be said for the one below.',
      },
      {
        q: `« ${noStop(fr(A(311)))} » against « ${noStop(fr(A(312)))} ». What separates the two ens?`,
        opts: ['One vowel', 'One consonant', 'Nothing you can hear'],
        correct: 2,
        why: `${EN_POSITION_RULE} ${EN_JOB_LIMIT}`,
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 3. THE WORD YOU CANNOT LEAVE OUT
   *
   *  The heaviest act, because the obligatory en is the half of the canDo that
   *  is genuinely hard and the half English gives no help with at all.
   * ═══════════════════════════════════════════════════════════════════════ */

  {
    id: DE,
    type: 'examples',
    title: 'The Other Little Word',
    frSub: 'de, du, de la, des',
    layer: 'core',
    say: `${DE_FRAMING} « ${A129_REFRAME} » is ${unitRef(PARTITIVE_UNIT, 'a2')}'s line and you have had du, de la and des since then. En takes all three of them away, and the noun with them.`,
    terms: ['inside', 'theQuantity', 'twoWords'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-25-de' },
    examples: [
      { fr: fr(A(291)), en: en(A(291)), note: `${sub(A(291))} de, on its own, in front of a thing.` },
      { fr: fr(A(292)), en: en(A(292)), note: `${sub(A(292))} And the de is gone with it. Same verb ${unitRef(INDIRECT_UNIT)} used, and a different little word.` },
      { fr: importedFr(PARTITIVE_ROW_ID), en: importedEn(PARTITIVE_ROW_ID), note: 'Published at a1, in the kitchen theme, by somebody teaching food. The word du is de plus le, and the de inside it counts.' },
      { fr: fr(A(293)), en: en(A(293)), note: `${sub(A(293))} The same du, as a question.` },
      { fr: fr(A(294)), en: en(A(294)), note: `${sub(A(294))} And du café is gone. The English needs « some » and the French needs nothing at all.` },
      { fr: importedFr('fr.a1.cafe.151'), en: importedEn('fr.a1.cafe.151'), note: `[${impRespell('fr.a1.cafe.151')}] ${unitRef(PARTITIVE_UNIT, 'a2')}'s own card, and the thing en stands in for. It is not re-taught here.` },
      { fr: importedFr('fr.a2.pronoms-essentiels.032'), en: importedEn('fr.a2.pronoms-essentiels.032'), note: 'Published, in this theme, and it is a question and an answer with the whole rule in it.' },
      { fr: importedFr('fr.a2.pronoms-essentiels.033'), en: importedEn('fr.a2.pronoms-essentiels.033'), note: 'Also published, also here, and the subject is not je. Three brothers are named and then they are not.' },
    ],
  },

  /* REQUIRED LAYOUT 4. « Oui, j'en ai. » beside the impossible « Oui, j'ai. »
   * The obligatory case only teaches if the learner sees what French refuses. */
  {
    id: MUST,
    type: 'cardDeck',
    title: 'You Cannot Drop It',
    frSub: "Jamais facultatif",
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `${MUST_RULE} This is the half of the lesson English gives you no help with at all.`,
    hint: 'Read the second line and then try to finish it.',
    terms: ['mustSayIt', 'inside', 'twoWords'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-25-must' },
    cards: [
      {
        head: 'the answer, and the one that is not one',
        label: 'a sentence · and two words that stop',
        fr: MUST_RIGHT,
        sub: MUST_WRONG,
        body: `${sub(A(296))} for the first line. ${MUST_RULE} English says « ${MUST_ENGLISH} » and none of it stands for the sugar.`,
      },
      {
        head: 'and the question it answers',
        label: 'the sugar is named · and then it is not',
        ...pairRows(A(295), A(296)),
        body: `${bothRespells(A(295), A(296))} du sucre in the question, and nothing at all in the answer except the word that stands for it.`,
      },
      {
        head: 'a second verb, and the same gap',
        label: 'prendre · and English still says nothing',
        ...pairRows(A(297), A(298)),
        body: `${bothRespells(A(297), A(298))} The English answer is the same three words again. It is a fact about English rather than about avoir.`,
      },
      {
        head: 'and the other word does it too',
        label: 'the office is named · and then it is not',
        ...pairRows(A(309), A(310)),
        body: `${bothRespells(A(309), A(310))} ${MUST_RULE_Y} « Oui, je vais. » is not a sentence either.`,
      },
    ],
  },

  {
    id: QUANTITY,
    type: 'examples',
    title: 'How Many, Not What',
    frSub: 'La quantité reste',
    layer: 'core',
    say: `${PLAIN_TARGET.replace(/^t/u, 'T')} goes, and the amount stays behind. That shape has no equivalent in English at all: « I have three » says nothing about what three of.`,
    terms: ['theQuantity', 'mustSayIt', 'inside'],
    examples: [
      { fr: fr(A(299)), en: en(A(299)), note: `${sub(A(299))} des, which ${unitRef(PARTITIVE_UNIT)} owns.` },
      { fr: fr(A(300)), en: en(A(300)), note: `${sub(A(300))} The number stayed and des enfants went. Nothing in the French says children any more and a French speaker still knows.` },
      { fr: fr(A(301)), en: en(A(301)), note: `${sub(A(301))} beaucoup de, and the de went inside en along with the noun.` },
      { fr: fr(A(302)), en: en(A(302)), note: `${sub(A(302))} un peu de, and the same disappearance.` },
      { fr: fr(A(303)), en: en(A(303)), note: `${sub(A(303))} assez de. Four quantity words and one behaviour between them.` },
      { fr: importedFr('fr.a1.expressions-de-quantite.001'), en: importedEn('fr.a1.expressions-de-quantite.001'), note: `[${impRespell('fr.a1.expressions-de-quantite.001')}] ${unitRef(PARTITIVE_UNIT, 'a2')}'s own card. The de on the end of it is the de that goes inside.` },
      { fr: importedFr('fr.a2.pronoms-essentiels.031'), en: importedEn('fr.a2.pronoms-essentiels.031'), note: `[${impRespell('fr.a2.pronoms-essentiels.031')}] Published in this theme as a card of its own, and this build repairs its respelling: the nasal was written with a plain n.` },
      { fr: fr(A(322)), en: en(A(322)), note: `${sub(A(322))} A different subject, and the z you hear is a liaison you never write.` },
      { fr: fr(A(323)), en: en(A(323)), note: `${sub(A(323))} And as a question, with the same two words in the same place.` },
    ],
  },

  /* DOCTRINE §B.1. Four verbs and one fixed expression that are on no list in
   * this lesson. The rule runs on them cold, and one of them is the case a
   * learner holding the wrong gloss gets wrong every time. */
  {
    id: UNSEEN,
    type: 'groupDrill',
    title: 'Verbs Not Listed Here',
    frSub: 'Des verbes jamais montrés',
    layer: 'core',
    size: 'lg',
    say: 'Four things this lesson never showed you. The rule is about the little word in front of the thing, so it does not care which verb put the little word there.',
    terms: ['inside', 'twoWords', 'theQuantity'],
    groups: [
      {
        label: 'one where English points at the wrong word',
        items: [card(A(329)), card(A(332))],
        check: {
          q: '« Il rêve de cette maison. » Replace the house.',
          opts: ["Il y rêve.", fr(A(329)), 'Il en rêve de cette maison.'],
          correct: 1,
          why: `Rêver DE, so it is en. English says « dreams ABOUT it » and points at the wrong little word. ${KEEPS_PREP_WHY}`,
        },
      },
      {
        label: 'and one where the thing behind de is a place',
        items: [card(A(330)), card(A(331))],
        check: {
          q: '« Nous revenons de Paris. » Replace the city.',
          opts: [fr(A(330)), 'Nous y revenons.', 'Nous en revenons de Paris.'],
          correct: 0,
          why: `THE CASE THAT CATCHES EVERYBODY. Paris is a place, and the answer is still en, because revenir takes de and the little word decides rather than the meaning. A learner holding « y is there and en is some » gets this one wrong every time.`,
        },
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 4. ONE WORD, THREE JOBS
   * ═══════════════════════════════════════════════════════════════════════ */

  /* REQUIRED LAYOUT 3. A `table` at layer core is a density failure, so this is
   * a tapTable, three rows against the Pixel 6's six-row ceiling. Both
   * neighbours are named BY UNIT ID and taught by neither, and two of the three
   * example rows are their OWN published sentences. */
  {
    id: THREEENS,
    type: 'tapTable',
    title: 'One Word, Three Jobs',
    frSub: 'Les trois EN',
    layer: 'core',
    say: `${EN_POSITION_RULE} « ${WHAT_FOLLOWS} » is ${unitRef(WHAT_FOLLOWS_UNIT, 'a2')}'s name for this shape and you have met it six times. ${SHAPE_EXTENSION} Tap any row to hear it.`,
    terms: ['threeEns', 'twoWords', 'inside'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-25-ens' },
    cols: ['French', 'what comes next', 'whose lesson'],
    rows: EN_JOBS.map((j) => {
      const line = typeof j.id === 'number' ? fr(A(j.id)) : importedFr(j.id);
      const gloss = typeof j.id === 'number' ? en(A(j.id)) : importedEn(j.id);
      const say = line;
      return {
        cells: [noStop(line), j.after, unitRef(j.owner, 'a2')],
        say,
        detail: {
          title: j.label,
          say,
          body: `${gloss} ${EN_POSITION_RULE} ${j.owner === UNIT.id
            ? 'A verb comes next, so this is the one this lesson is about.'
            : `${Cap(unitRef(j.owner))} owns this one and nothing about it is re-taught here.`}`,
        },
      };
    }),
  },

  /* THE TRAP. Corrections §14.6: rule > cards > audio > drill, with swipe, an
   * audio spec, a say and a GATED drill step, and NO `size` on a stepped one.
   * The audio step plays each card's `fr`, so rec-a2-25-trap is briefed to
   * contain exactly these four lines.
   *
   * The subject is THE ERROR THE REFRAME PREDICTS: the little word survives into
   * the sentence and gets said twice. It is the one the learner actually
   * produces, and the first card is it. */
  {
    id: TRAP,
    type: 'trapDrill',
    title: 'Said Twice',
    frSub: 'Le mot en double',
    layer: 'core',
    swipe: true,
    say: 'Four cards and then six to prove it. The first card is a sentence nobody says, and it is the one the rule you just learned will build for you if you stop halfway.',
    terms: ['inside', 'threeEns', 'twoWords'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-25-trap' },
    rule: {
      title: 'It is already in there',
      body: `${REFRAME} ${KEEPS_PREP_WHY} Look for it: if you can still see it, the pronoun should not be there.`,
    },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'Once, Never Twice' },
      { kind: 'cards', label: 'Four cards', title: 'Two Wrong, Two Right' },
      { kind: 'audio', label: 'Hear it', title: 'The Extra Word' },
      { kind: 'drill', label: 'Prove it', title: 'Pick The Right One', gate: true },
    ],
    cards: [
      {
        fr: KEEPS_A_ERROR,
        ipa: '/ʒi vɛ a pa.ʁi/',
        promptLabel: 'the little word said twice',
        promptSound: KEEPS_A_ERROR,
        tip: `${KEEPS_PREP_WHY} The sentence sounds like it is finishing something and it is repeating something. Nothing in the sound will stop you.`,
      },
      {
        fr: fr(A(288)),
        ipa: ipaOf(A(288)),
        promptLabel: 'and the whole of it, in two words',
        promptSound: fr(A(288)),
        tip: 'Paris and the à both went into one letter. There is nothing missing from this sentence.',
      },
      {
        fr: KEEPS_DE_ERROR,
        ipa: '/ʒɑ̃ vø dy ka.fe/',
        promptLabel: 'and the same mistake on the other word',
        promptSound: KEEPS_DE_ERROR,
        tip: 'The du is de plus le, so the de is in this sentence twice. Once inside en and once out loud.',
      },
      {
        fr: fr(A(294)),
        ipa: ipaOf(A(294)),
        promptLabel: 'and the right one, which is shorter',
        promptSound: fr(A(294)),
        tip: 'Two words, and one of them is doing the work of three.',
      },
    ],
    drill: [
      { opts: [fr(A(288)), KEEPS_A_ERROR], correct: 0, promptSay: fr(A(288)) },
      { opts: [KEEPS_DE_ERROR, fr(A(294))], correct: 1, promptSay: fr(A(294)) },
      { opts: [fr(A(305)), "Oui, j'y vais au marché."], correct: 0, promptSay: fr(A(305)) },
      { opts: ["J'en ai des enfants.", fr(A(300))], correct: 1, promptSay: fr(A(300)) },
      { opts: [fr(A(316)), "Je n'y vais pas à Paris."], correct: 0, promptSay: fr(A(316)) },
      { opts: ["J'en parle de mon travail.", fr(A(292))], correct: 1, promptSay: fr(A(292)) },
    ],
  },

  /* il y a. ONE MISSION, and the brief is right that it is a good moment and
   * that it goes wrong if the learner is invited to take the phrase apart. */
  {
    id: FROZEN,
    type: 'cardDeck',
    title: 'The Y You Knew',
    frSub: 'Il y a',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `${FROZEN_RULE} You have been reading this y since your first month and nobody told you what it was.`,
    hint: 'Look at the middle word.',
    terms: ['frozen', 'theOrder', 'twoWords'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-25-frozen' },
    cards: [
      {
        head: 'it has been there all along',
        label: 'three words · and the middle one is yours',
        fr: fr(A(313)),
        sub: `${sub(A(313))} ${en(A(313))}`,
        body: `${FROZEN_RULE} ${Cap(unitRef(TIME_UNIT))} owns both of its jobs and neither is re-taught here. What is new is that your own word is in the middle of it.`,
      },
      {
        head: 'and the phrase does not come apart',
        label: `${Cap(unitRef(FROZEN_UNIT))} owns both of its jobs`,
        fr: importedFr(A218_ILYA_ROW_ID),
        sub: importedFr(A218_ILYA_AGO_ID),
        body: `[${impRespell(A218_ILYA_ROW_ID)}] then [${impRespell(A218_ILYA_AGO_ID)}] Both are ${unitRef(TIME_UNIT, 'a2')}'s own cards, spelled its way. « ${FROZEN_ERROR} » is what taking the phrase to pieces gives you: real French, and it means he has some.`,
      },
      {
        head: 'and there is one thing it does take',
        label: 'y first · en second',
        fr: fr(A(314)),
        sub: `${sub(A(314))} ${en(A(314))}`,
        body: `${ORDER_RULE} It still does not come apart; a second word goes in behind the first. ${ORDER_DEFERRED}`,
      },
      {
        head: 'and a number goes after both',
        label: 'published, by somebody selling train tickets',
        fr: fr(A(315)),
        sub: importedFr('fr.a2.rp-voyage.007'),
        body: `${sub(A(315))} The second line is published at a2 in the travel theme, and its own note says out loud that it is « il y a » with this lesson's word added. Nobody wrote it to teach you that.`,
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
    terms: ['mustSayIt', 'inside', 'personOrThing'],
    errors: [
      {
        wrong: MUST_WRONG,
        right: MUST_RIGHT,
        why: `${MUST_RULE} This is the error the scene ends on, and it is not carelessness: English closes the sentence with two words and there is nothing in it to translate.`,
      },
      {
        wrong: KEEPS_A_ERROR,
        right: fr(A(288)),
        why: `${KEEPS_PREP_WHY} The rule was applied and then applied again, which is what happens when you build the English sentence first and repair it afterwards.`,
      },
      {
        wrong: KEEPS_DE_ERROR,
        right: fr(A(294)),
        why: `The same thing on the other word. The du is de plus le, so the de is in that sentence twice: once inside en and once out loud.`,
      },
      {
        wrong: PERSON_ERROR,
        right: importedFr(A224_PRONOUN_ID),
        why: `${PERSON_ERROR_WHY} ${Cap(unitRef(INDIRECT_UNIT))} spent itself on which verbs put a person behind à.`,
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 5. SAYING NO, AND THE ORDER
   * ═══════════════════════════════════════════════════════════════════════ */

  {
    id: NEGATION,
    type: 'cardDeck',
    title: 'Saying No',
    frSub: 'ne … pas',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `One negation rule, seven lessons old, and this adds nothing to it. « ${NEGATION_RULE} »`,
    terms: ['theWrap', 'sameSlot', 'twoWords'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-25-negation' },
    cards: [
      {
        head: 'both inside',
        label: 'ne · y vais · pas',
        ...pairRows(A(288), A(316)),
        body: `${bothRespells(A(288), A(316))} « ${A118_REFRAME} » from ${unitRef(NEGATION_UNIT)}, and « ${NEGATION_RULE} » from ${unitRef(FUTUR_UNIT)}. One verb, so neither arises.`,
      },
      {
        head: 'and the other word is no different',
        label: 'ne · en veux · pas',
        ...pairRows(A(292), A(317)),
        body: `${bothRespells(A(292), A(317))} ${NEGATION_EXTENSION} That sentence is ${unitRef(DIRECT_UNIT, 'a2')}'s, word for word, and ${unitRef(INDIRECT_UNIT)} quoted it unchanged one lesson ago. Three lessons, one sentence.`,
      },
      {
        head: 'a different subject, and a different verb',
        label: 'il · nous',
        ...pairRows(A(318), A(319)),
        body: `${bothRespells(A(318), A(319))} Nothing about the wrap responds to either of them.`,
      },
      {
        head: 'and with two words of verb',
        label: 'ne · word · first word · pas · second word',
        ...pairRows(A(326), A(327)),
        body: `${bothRespells(A(326), A(327))} The pronoun goes in front of BOTH halves, which is ${unitRef(DIRECT_UNIT, 'a2')}'s rule on ${unitRef('a2.05', 'a2')}'s tense, and the second word takes nothing at all, which is ${unitRef(INDIRECT_UNIT, 'a2')}'s. Neither is new here.`,
      },
    ],
  },

  /* THE SLOT-ORDER DECISION, ON A SCREEN. Corpus §7: option 1, and the question
   * this lesson does not answer is NAMED rather than quietly taught. */
  {
    id: ORDER,
    type: 'examples',
    title: 'Y Comes First',
    frSub: "L'ordre",
    layer: 'core',
    say: `${ORDER_RULE} These are the only two small words this lesson gives you, so this is the only order it can make. ${ORDER_DEFERRED}`,
    terms: ['theOrder', 'frozen', 'twoWords'],
    examples: [
      { fr: fr(A(314)), en: en(A(314)), note: `${sub(A(314))} Both of them, and the order does not move.` },
      { fr: fr(A(315)), en: en(A(315)), note: `${sub(A(315))} And a number after them, which is where the answer usually goes.` },
      { fr: importedFr(ORDER_PUBLISHED_IDS[0]), en: importedEn(ORDER_PUBLISHED_IDS[0]), note: `[${impRespell(ORDER_PUBLISHED_IDS[0])}] Published, and this build repairs the two nasals in that respelling.` },
      { fr: importedFr(ORDER_PUBLISHED_IDS[1]), en: importedEn(ORDER_PUBLISHED_IDS[1]), note: 'Published at a2 by somebody writing a train timetable. The order was already in the corpus and nobody had taught it.' },
    ],
  },

  {
    id: FLASH,
    type: 'flashcards',
    title: 'The Seven Verbs',
    frSub: 'Les verbes et les phrases',
    layer: 'core',
    say: 'Seven verbs and eight phrases, none of them authored by this lesson and all of them already in your corpus. The lesson borrowed them; the deck is where they stay.',
    cards: [...IMPORTED.map((i) => i.id), ...IMPORTED_PHRASES.map((i) => i.id)].map((id) => ({
      front: importedFr(id),
      back: `[${impRespell(id)}] ${importedEn(id)}`,
      say: importedFr(id),
    })),
  },

  /* THE HEAVIEST PRODUCTION SECTION. `dicteeMode` hands every word over
   * pre-spelled above 16 letters, and a lesson about a SLOT can only be tested
   * in LETTERS mode. Every line here was run through the real function. */
  {
    id: DICTATION,
    type: 'dictation',
    title: 'Write It Down',
    frSub: 'La dictée',
    layer: 'core',
    say: 'Fourteen lines, and every one of them is short, because a long line hands you the words already spelled and the whole of this lesson is one or two letters in the right place.',
    terms: ['inside', 'mustSayIt', 'theWrap'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 3, recordingId: 'rec-a2-25-dictee' },
    itemIds: [
      A(288), A(290), A(292), A(294),
      A(296), A(298), A(300), A(310),
      A(314), A(316), A(317), A(325),
      A(326), A(328),
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 6. PROVE IT
   * ═══════════════════════════════════════════════════════════════════════ */

  {
    id: TALK,
    type: 'scenario',
    title: 'At The Market',
    frSub: 'Au marché',
    layer: 'core',
    terms: ['mustSayIt', 'theQuantity', 'inside'],
    setting: 'The same Saturday, an hour later, at the stall on the corner. Every answer here is about something that has already been named, which is the only situation these two words are for.',
    turns: [
      { ai: 'Tu as du sucre chez toi ?', en: 'Do you have sugar at home?', user: fr(A(296)), userEn: en(A(296)),
        alts: [{ fr: fr(A(298)), en: en(A(298)) }, { fr: fr(A(303)), en: en(A(303)) }] },
      { ai: 'Et des enfants, tu en as ?', en: 'And children, do you have any?', user: fr(A(300)), userEn: en(A(300)),
        alts: [{ fr: fr(A(301)), en: en(A(301)) }, { fr: fr(A(302)), en: en(A(302)) }] },
      { ai: 'Tu vas au marché le samedi ?', en: 'Do you go to the market on Saturdays?', user: fr(A(333)), userEn: en(A(333)),
        alts: [{ fr: fr(A(305)), en: en(A(305)) }, { fr: fr(A(320)), en: en(A(320)) }] },
      { ai: 'Il reste du café à la maison ?', en: 'Is there any coffee left at home?', user: fr(A(334)), userEn: en(A(334)),
        alts: [{ fr: fr(A(317)), en: en(A(317)) }, { fr: fr(A(294)), en: en(A(294)) }] },
      { ai: 'Vous voulez un croissant ?', en: 'Would you like a croissant?', user: fr(A(335)), userEn: en(A(335)),
        alts: [{ fr: fr(A(302)), en: en(A(302)) }, { fr: fr(A(323)), en: en(A(323)) }] },
      { ai: 'Tu as parlé du problème à ton amie ?', en: 'Did you talk to your friend about the problem?', user: fr(A(336)), userEn: en(A(336)),
        alts: [{ fr: fr(A(326)), en: en(A(326)) }, { fr: fr(A(327)), en: en(A(327)) }] },
      { ai: 'Il y a encore des tomates ?', en: 'Are there any tomatoes left?', user: fr(A(325)), userEn: en(A(325)),
        alts: [{ fr: fr(A(314)), en: en(A(314)) }, { fr: fr(A(315)), en: en(A(315)) }] },
      { ai: 'Tu vas à la boulangerie après ?', en: 'Are you going to the bakery afterwards?', user: fr(A(305)), userEn: en(A(305)),
        alts: [{ fr: fr(A(310)), en: en(A(310)) }, { fr: fr(A(316)), en: en(A(316)) }] },
    ],
  },

  {
    id: SPEAK,
    type: 'practice',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    skill: 'speak',
    terms: ['twoWords', 'inside'],
    itemIds: ROWS.map((r) => r.id),
  },

  {
    id: REVIEW,
    type: 'reviewDeck',
    title: 'Everything, Once More',
    frSub: 'Tout, encore une fois',
    layer: 'core',
    cards: [
      { front: 'What is inside these two words?', back: `${REFRAME} ${A_FRAMING_MINE} ${DE_FRAMING}`, say: fr(A(288)) },
      { front: `« ${noStop(importedFr(A204_CITY_ID))} » Say it without the city.`, back: `${fr(A(288))} ${A_FRAMING_MINE}`, say: fr(A(288)) },
      { front: `« ${noStop(fr(A(291)))} » Say it without the work.`, back: `${fr(A(292))} ${DE_FRAMING}`, say: fr(A(292)) },
      { front: 'Do you have any sugar? Answer yes.', back: `${MUST_RIGHT} ${MUST_RULE}`, say: MUST_RIGHT },
      { front: 'Where does the word go?', back: `${POSITION_RULE} ${Cap(unitRef(DIRECT_UNIT, 'a2'))}'s line, unchanged, for the third lesson.`, say: fr(A(288)) },
      { front: `Make « ${noStop(fr(A(292)))} » negative.`, back: `${fr(A(317))} ${NEGATION_EXTENSION}`, say: fr(A(317)) },
      { front: 'A person is behind à. Which word?', back: `Lui, and ${unitRef(INDIRECT_UNIT)} owns it. ${A_FRAMING} ${A_FRAMING_MINE}`, say: importedFr(A224_PRONOUN_ID) },
      { front: 'Which en is « Elle habite en France »?', back: `The little word, because a country comes next. ${EN_POSITION_RULE}`, say: fr(A(312)) },
      { front: 'Does « il y a » come apart?', back: `${FROZEN_RULE} « ${FROZEN_ERROR} » is real French and means he has some.`, say: fr(A(313)) },
      { front: 'Both words in one sentence. Which order?', back: `${ORDER_RULE} ${ORDER_DEFERRED}`, say: fr(A(314)) },
      { front: 'And in the past, does anything go on the end?', back: `Nothing, and ${unitRef(INDIRECT_UNIT)} settled that one lesson ago.`, say: fr(A(328)) },
    ],
  },

  {
    id: PROGRESS,
    type: 'progressCheck',
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: 'The exam has six rounds and half of it is typed or corrected rather than picked, because both of the things this lesson turns on can be written down and neither can be heard.',
    stats: [
      { k: 'New rules', v: `1. ${REFRAME}` },
      { k: 'New words', v: '2, and neither of them changes for anything, ever.' },
      { k: 'Verbs authored', v: '0. All seven were already in your corpus, and five more were never listed.' },
      { k: 'What the ear can settle', v: '1 of 2. Whether the word is there, yes. Which en it is, never.' },
    ],
  },

  {
    id: QUIZ,
    type: 'quiz',
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    say: 'Six rounds of five. Half of it asks you to write, because both halves of this lesson can be typed and neither can be heard.',
    terms: ['inside', 'mustSayIt', 'threeEns'],
    passMark: 70,
    roundFailThreshold: 60,
    rounds: [
      {
        id: 'r1-replace',
        label: 'Swap the whole phrase',
        say: 'Five on the one new idea.',
        targets: ['err-keeps-prep', 'err-drops-en'],
        questions: [
          {
            format: 'typeIn',
            q: `« ${importedFr(A204_CITY_ID)} » Type it again without the city.`,
            accept: [fr(A(288))],
            ref: TWO,
            why: `${A_FRAMING_MINE} Paris went and the à went with it, so two words are left and neither of them is à.`,
          },
          {
            format: 'typeIn',
            q: `« ${fr(A(291))} » Type it again without the work.`,
            accept: [fr(A(292))],
            ref: DE,
            why: `${DE_FRAMING} Same verb as last lesson, and this time the little word in front was de.`,
          },
          {
            format: 'errorSpot',
            q: `Fix it: « ${KEEPS_A_ERROR} »`,
            accept: [fr(A(288))],
            ref: TRAP,
            why: `${KEEPS_PREP_WHY} The à is already inside y, so this sentence says it twice.`,
          },
          {
            format: 'mcq',
            q: 'Which one replaces the whole of « au marché »?',
            opts: ["Oui, j'y vais au marché.", 'Oui, je vais y.', 'Oui, je vais au.', fr(A(305))],
            correct: 3,
            ref: TWO,
            why: `${REFRAME} The first says it twice, the second puts the word where English would put it, and the third leaves half of a little word at the end.`,
          },
          {
            format: 'listenChoose',
            q: 'Which one did you hear?',
            opts: [fr(A(288)), 'Je vais.'],
            correct: 0,
            ref: LISTENING,
            why: 'Zhee against zhuh. One vowel, and it is the difference between a sentence that says where and one that does not. This is the one thing about these two words the ear can settle for you.',
          },
        ],
      },
      {
        id: 'r2-must',
        label: 'The word you cannot drop',
        say: 'Five on the half English gives you no help with.',
        targets: ['err-drops-en', 'err-keeps-prep'],
        questions: [
          {
            format: 'typeIn',
            q: `« ${fr(A(295))} » Answer yes.`,
            accept: [fr(A(296))],
            ref: MUST,
            why: `${MUST_RULE} English closes on two words and French needs the one that stands for the sugar.`,
          },
          {
            format: 'mcq',
            q: `Why is « ${MUST_WRONG} » not a sentence?`,
            opts: [
              'Because oui cannot start a sentence',
              'Because the verb has nothing after it, and en is the something',
              'Because avoir is irregular',
              'Because the question was in the tu form',
            ],
            correct: 1,
            ref: MUST,
            why: `${MUST_RULE} It is not a spelling mistake and it is not rude. It is unfinished, and a French speaker waits for the rest.`,
          },
          {
            format: 'typeIn',
            q: `« ${fr(A(309))} » Answer yes.`,
            accept: [fr(A(310))],
            ref: MUST,
            why: `${MUST_RULE_Y} « Oui, je vais. » is unfinished in exactly the same way, and this one catches people less often only because y sounds a little like there.`,
          },
          {
            format: 'errorSpot',
            q: 'Fix it: « Oui, je prends. » You are answering a question about sugar.',
            accept: [fr(A(298))],
            ref: MUST,
            why: 'A second verb and the same gap. The English answer is three words again and none of them is a translation of anything.',
          },
          {
            format: 'listenChoose',
            q: 'Which one did you hear?',
            opts: [fr(A(296)), MUST_WRONG],
            correct: 0,
            ref: LISTENING,
            why: 'The whole of the difference is one syllable in the middle, and it is audible. Whether the word is THERE is the one thing the ear settles in this lesson.',
          },
        ],
      },
      {
        id: 'r3-ens',
        label: 'Which en is it',
        say: 'Five on one word with three jobs.',
        targets: ['err-wrong-en', 'err-keeps-prep'],
        questions: [
          {
            format: 'mcq',
            q: `In « ${fr(A(312))} », what is en doing?`,
            opts: [
              `It is the little word in front of a place, which ${unitRef(PLACE_UNIT)} taught`,
              'It is the pronoun this lesson is about',
              `It is the little word in front of a length of time, which ${unitRef(TIME_UNIT)} taught`,
              'It is part of the verb',
            ],
            correct: 0,
            ref: THREEENS,
            why: `${EN_POSITION_RULE} A country comes next, so it is the little word, and ${unitRef(PLACE_UNIT)} owns it.`,
          },
          {
            format: 'mcq',
            q: `And in « ${importedFr(A218_EN_ROW_ID)} »?`,
            opts: [
              `The little word in front of a place, which ${unitRef(PLACE_UNIT)} taught`,
              'The pronoun this lesson is about',
              `The little word in front of a length of time, which ${unitRef(TIME_UNIT)} taught`,
              'A mistake',
            ],
            correct: 2,
            ref: THREEENS,
            why: `« ${A218_EN_CLAIM} » is ${unitRef(TIME_UNIT, 'a2')}'s line, and this is that lesson's own sentence.`,
          },
          {
            format: 'mcq',
            q: `And in « ${fr(A(311))} »?`,
            opts: [
              'The little word in front of a place',
              'The pronoun this lesson is about',
              'The little word in front of a length of time',
              'It could be any of them',
            ],
            correct: 1,
            ref: THREEENS,
            why: `${EN_POSITION_RULE} « ${WHAT_FOLLOWS} » is ${unitRef(WHAT_FOLLOWS_UNIT, 'a2')}'s name for this shape, and this is the seventh time it has come round.`,
          },
          {
            format: 'mcq',
            q: 'Which of these tells you which en you are looking at?',
            opts: ['The meaning of the sentence', 'The word straight after it', 'The subject', 'The tense'],
            correct: 1,
            ref: THREEENS,
            why: `${EN_POSITION_RULE} There is nothing in the sound and nothing in the meaning that separates them, which is why the position is the whole answer.`,
          },
          {
            format: 'errorSpot',
            q: `Fix it: « ${KEEPS_DE_ERROR} »`,
            accept: [fr(A(294))],
            ref: TRAP,
            why: `The du is de plus le, so the de is in that sentence twice: once inside en and once out loud. ${KEEPS_PREP_WHY}`,
          },
        ],
      },
      {
        id: 'r4-frozen',
        label: 'The phrase that does not come apart',
        say: 'Five on three words you have had since the beginning.',
        targets: ['err-breaks-frozen', 'err-wrong-en'],
        questions: [
          {
            format: 'mcq',
            q: `Which word in « ${noStop(fr(A(313)))} » is the one this lesson is about?`,
            opts: ['il', 'y', 'a', 'du'],
            correct: 1,
            ref: FROZEN,
            why: `${FROZEN_RULE} The middle word is the y on these screens, which is worth seeing and is not worth acting on.`,
          },
          {
            format: 'mcq',
            q: `Somebody wants to say « there is some » and says « ${FROZEN_ERROR} ». What is wrong?`,
            opts: [
              'Nothing, and it means something else',
              'It is not French',
              'En cannot come after il',
              'The verb is wrong',
            ],
            correct: 0,
            ref: FROZEN,
            why: `${FROZEN_ERROR_WHY} ${FROZEN_RULE}`,
          },
          {
            format: 'typeIn',
            q: 'There is some. Type it.',
            accept: [fr(A(314))],
            ref: FROZEN,
            why: `${ORDER_RULE} The three words stay together and the second small word goes in behind the first.`,
          },
          {
            format: 'mcq',
            q: `${ACCENT_LIMIT} Which sentence is right?`,
            opts: ['Je vais a Paris.', importedFr(A204_CITY_ID), 'Je vais Paris.', 'Je vais de Paris.'],
            correct: 1,
            ref: TWO,
            why: 'This has to be a choice rather than something you type, because the app compares typed answers with the accents stripped and would accept the first one. The fourth is real French and means coming FROM Paris.',
          },
          {
            format: 'tapSilent',
            q: 'Tap the letter you do not say.',
            word: 'pensent',
            correct: 't',
            ref: THERE,
            why: `The ending is silent, which ${unitRef('a2.01')} taught you, so pense and pensent are one sound. Nothing about the small word in front responds to the subject either.`,
          },
        ],
      },
      {
        id: 'r5-order',
        label: 'Saying no, and the order',
        say: 'Five on two rules you already had.',
        targets: ['err-keeps-prep', 'err-breaks-frozen'],
        questions: [
          {
            format: 'typeIn',
            q: `« ${noStop(fr(A(288)))} » Make it negative. Type the whole sentence.`,
            accept: [fr(A(316))],
            ref: NEGATION,
            why: `${NEGATION_EXTENSION} Ne outside both, pas after both, and the word stays exactly where it was.`,
          },
          {
            format: 'typeIn',
            q: 'I do not want any. Type it.',
            accept: [fr(A(317))],
            ref: NEGATION,
            why: `${NEGATION_EXTENSION} And the English still needs a word the French keeps inside the pronoun.`,
          },
          {
            format: 'mcq',
            q: 'Both small words in one sentence. Which order?',
            opts: ['Il en y a.', 'Il y a en.', 'Il en a y.', fr(A(314))],
            correct: 3,
            ref: ORDER,
            why: `${ORDER_RULE} It is a fixed fact rather than a preference. ${ORDER_DEFERRED}`,
          },
          {
            format: 'errorSpot',
            q: `Fix it: « ${PERSON_ERROR} » You are talking about a person.`,
            accept: [importedFr(A224_PRONOUN_ID)],
            ref: PERSON,
            why: `${PERSON_ERROR_WHY} One preposition, two answers, and only the thing behind it decides.`,
          },
          {
            format: 'tapSilent',
            q: 'Tap the letter you do not say.',
            word: 'vais',
            correct: 's',
            ref: LISTENING,
            why: 'The s is silent, so the only thing the ear has to go on in « J\'y vais » is the vowel at the front. That is exactly the sound the word this lesson teaches lives in.',
          },
        ],
      },
      {
        id: 'r6-all',
        label: 'All of it',
        say: 'Five that ask for more than one thing at once.',
        targets: ['err-drops-en', 'err-wrong-en', 'err-keeps-prep'],
        questions: [
          {
            format: 'typeIn',
            q: `« ${fr(A(299))} » Answer yes, and say how many.`,
            accept: [fr(A(300))],
            ref: QUANTITY,
            why: 'The number stays and the noun goes. English cannot do that at all: « I have three » leaves a French speaker still waiting.',
          },
          {
            format: 'errorSpot',
            q: 'Fix it: « Nous en revenons de Paris. »',
            accept: [fr(A(330))],
            ref: UNSEEN,
            why: `Revenir DE, so the answer is en even though Paris is a place, and the de is inside it already. ${KEEPS_PREP_WHY}`,
          },
          {
            format: 'mcq',
            q: 'Which one is right?',
            opts: ["J'en ai des.", "J'y ai trois.", fr(A(300)), "Oui, j'ai trois."],
            correct: 2,
            ref: QUANTITY,
            why: 'The first keeps the little word, the second uses the word for à on a sentence that had de in it, and the fourth leaves out the one word that cannot be left out.',
          },
          {
            format: 'typeIn',
            q: 'I talked about it. Type it.',
            accept: [fr(A(326))],
            ref: NEGATION,
            why: `${POSITION_RULE} The word goes in front of both halves of the verb, which is ${unitRef(DIRECT_UNIT, 'a2')}'s rule on a tense you already have, and nothing goes on the end of parlé.`,
          },
          {
            format: 'mcq',
            q: `In « ${fr(A(322))} », what is en doing?`,
            opts: [
              'The little word in front of a place',
              'The little word in front of a length of time',
              'Agreeing with nous',
              'The pronoun, because a verb comes next',
            ],
            correct: 3,
            ref: THREEENS,
            why: `${EN_POSITION_RULE} And the third is the one thing these two words never do: nothing about either of them changes for a subject.`,
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
    body: `${REFRAME} That is one idea, and the reason this lesson was the hardest of the three is that the little word is invisible once it is inside.`,
    points: [
      REFRAME,
      `${A_FRAMING_MINE} ${DE_FRAMING} Two words, and which one you need was decided before you opened your mouth, by the little word that was already in the sentence.`,
      `${MUST_RULE} ${MUST_RULE_Y} Neither of them is ever optional, and English will not remind you.`,
      `${EN_POSITION_RULE} ${Cap(unitRef(PLACE_UNIT))} and ${unitRef(TIME_UNIT)} own the other two ens and this lesson taught neither of them again.`,
      `${FROZEN_RULE} You have been reading that y since a1 and now you know what it is.`,
      `« ${POSITION_RULE} » is ${unitRef(DIRECT_UNIT, 'a2')}'s line and it has now been true of three sets of small words in three lessons without a word changed.`,
      `${ORDER_RULE} ${ORDER_DEFERRED}`,
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
    title: 'The answer that had nowhere to go',
    sections: [SCENE, TWO, GOALS],
    milestone: 'You have seen both words with the little word visible inside each of them.',
    estScreens: 22,
    restPoints: [`${TWO}/after-the-two`],
  },
  {
    id: 'act2',
    title: 'A person, a place, a thing',
    sections: [PERSON, THERE, LISTENING],
    milestone: 'You can tell which of the three pronouns a sentence wants, and you know y is not the English there.',
    estScreens: 40,
    restPoints: [`${PERSON}/after-the-split`],
  },
  {
    id: 'act3',
    title: 'The word you cannot leave out',
    sections: [DE, MUST, QUANTITY, UNSEEN],
    milestone: 'You can answer a question about a quantity, and you know why the two-word answer does not work.',
    estScreens: 54,
    restPoints: [`${MUST}/after-the-must`, `${QUANTITY}/after-the-quantity`],
  },
  {
    id: 'act4',
    title: 'One word, three jobs',
    sections: [THREEENS, TRAP, FROZEN, ERRORS],
    milestone: 'You can tell the three ens apart by what follows them, and you know that il y a does not come apart.',
    estScreens: 42,
    /* `density.logic.ts` caps an unbroken stretch at 22 screens. The rest point
     * goes where the teaching changes, which here is between the word with three
     * jobs and the phrase that has one. */
    restPoints: [`${TRAP}/after-the-trap`],
  },
  {
    id: 'act5',
    title: 'Saying no, and the order',
    sections: [NEGATION, ORDER, FLASH, DICTATION],
    milestone: 'You can wrap the negation round both words and you know which of the two goes first.',
    estScreens: 40,
    restPoints: [`${DICTATION}/after-the-dictee`],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [TALK, SPEAK, REVIEW, PROGRESS, QUIZ, ROUNDUP],
    milestone: 'Thirty questions, and half of them asked for a whole sentence rather than a choice between four.',
    estScreens: 48,
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
 *    err-keeps-prep     r1, r5      err-drops-en       r2, r6
 *    err-wrong-en       r3          err-breaks-frozen  r4
 * ══════════════════════════════════════════════════════════════════════════ */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-keeps-prep',
    description: 'Replaces the noun and keeps the little word, so it is said twice. « J\'y vais à Paris. » THE error this lesson\'s own reframe predicts: the learner builds the English sentence, swaps the noun for the pronoun and leaves the preposition where it was, because in English the preposition is a separate word and stays.',
    detectOn: [TWO, DE, TRAP, ERRORS, QUIZ],
    drill: 'drill-prep',
    retest: 'retest-prep',
  },
  {
    id: 'err-drops-en',
    description: 'Leaves the word out altogether and answers with two words. « Oui, j\'ai. » The error the scene dies on, and it is the hardest one to notice because nothing in English is missing: the English answer really is two words and neither of them stands for anything.',
    detectOn: [SCENE, MUST, QUANTITY, QUIZ],
    drill: 'drill-must',
    retest: 'retest-must',
  },
  {
    id: 'err-wrong-en',
    description: 'Reads the little word in front of a place or a length of time as this lesson\'s pronoun, or the other way round. Three jobs for one word across three lessons of one level, and the only distinguisher is position.',
    detectOn: [THREEENS, TRAP, QUIZ],
    drill: 'drill-ens',
    retest: 'retest-ens',
  },
  {
    id: 'err-breaks-frozen',
    description: 'Takes « il y a » apart and builds « il en a » for "there is some". The phrase is frozen, the y inside it is this lesson\'s y, and a learner who decomposes it produces a correct sentence that means something else, so nobody corrects it.',
    detectOn: [FROZEN, ORDER, QUIZ],
    drill: 'drill-frozen',
    retest: 'retest-frozen',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-prep',
    title: 'Once, never twice',
    format: 'sort',
    buckets: ['the little word is inside', 'the little word is said twice'],
    items: [A(288), A(292), A(294), A(305), A(316), A(330)],
    coach: `${REFRAME} Every card in the left bucket has nothing after the verb that repeats what is already inside the pronoun.`,
  },
  {
    id: 'retest-prep',
    title: 'One more',
    format: 'mcq',
    q: `« ${importedFr(A204_CITY_ID)} » Say it without the city.`,
    opts: [fr(A(288)), KEEPS_A_ERROR, 'Je vais y.'],
    correct: 0,
    why: `${KEEPS_PREP_WHY} The second says it twice and the third puts the word where English would put it.`,
  },
  {
    id: 'drill-must',
    title: 'The word that has to be there',
    format: 'flashcard',
    pairs: [[fr(A(295)), fr(A(296))], [fr(A(297)), fr(A(298))], [fr(A(309)), fr(A(310))]],
    coach: `${MUST_RULE} Read across: the thing is named on the left and gone on the right, and the word that stands for it is not optional on either side.`,
  },
  {
    id: 'retest-must',
    title: 'One more',
    format: 'mcq',
    q: `« ${fr(A(295))} » Answer yes.`,
    opts: [fr(A(296)), MUST_WRONG, 'Oui, j\'ai du.'],
    correct: 0,
    why: MUST_RULE,
  },
  {
    id: 'drill-ens',
    title: 'Which en is it',
    format: 'sort',
    buckets: ['a verb comes next, so it is the pronoun', 'a thing comes next, so it is the little word'],
    items: [A(311), A(312), A(292), A(322), A(294), A(323)],
    coach: `${EN_POSITION_RULE} Look at the word straight after it and nothing else. The meaning will not help you and neither will the sound.`,
  },
  {
    id: 'retest-ens',
    title: 'One more',
    format: 'mcq',
    q: `In « ${fr(A(311))} », what is en doing?`,
    opts: ['It is the pronoun, because a verb comes next', 'It is the little word in front of a place', 'It is part of the verb'],
    correct: 0,
    why: EN_POSITION_RULE,
  },
  {
    id: 'drill-frozen',
    title: 'Three words that stay together',
    format: 'flashcard',
    pairs: [[fr(A(313)), fr(A(314))], [fr(A(314)), fr(A(315))], [importedFr(A218_ILYA_ROW_ID), fr(A(313))]],
    coach: `${FROZEN_RULE} ${ORDER_RULE} Nothing in the phrase moves; a second small word simply goes in behind the first.`,
  },
  {
    id: 'retest-frozen',
    title: 'One more',
    format: 'mcq',
    q: 'There is some. Which one?',
    opts: [fr(A(314)), FROZEN_ERROR, 'Il y a en.'],
    correct: 0,
    why: `${ORDER_RULE} ${FROZEN_ERROR_WHY}`,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE REFERENCE SHEET
 *
 *  Corrections §8: a `sheetId` resolves ONLY inside the lesson that declares it,
 *  so this cannot extend a2.06's or a2.24's and nobody can extend this one. The
 *  brief asks what it holds that theirs could not, and answers its own question:
 *  THE TWO PREPOSITIONS AND THE SLOT ORDER.
 *
 *    a2.06's sheet is about where a word sits relative to a verb and names four
 *    forms. a2.24's is a list of ten verbs. NEITHER OF THEM HAS A PREPOSITION IN
 *    IT ANYWHERE, because for both of those lessons the pronoun replaced a noun
 *    phrase and the preposition question did not arise. It arises here, twice,
 *    and it is the whole lesson. The order table is the second thing, and it is
 *    the only place in the block where two small words meet.
 *
 *  `ReferenceSheet.tsx` draws `teach`, `letterGrid` and `table` and nothing
 *  else; a `cheatSheet` inside one draws its title and no content, so there is
 *  not one here.
 * ══════════════════════════════════════════════════════════════════════════ */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    layer: 'deep',
    title: 'The two little words, and the order',
    contains: ['The rule', 'What each one swallows', 'The three ens', 'Both at once', 'Next'],
    sections: [
      {
        id: 'sheet-rule',
        type: 'teach',
        layer: 'deep',
        title: 'The rule, in one line',
        body: `${REFRAME} ${A_FRAMING_MINE} ${DE_FRAMING} And the place it goes is not new: « ${POSITION_RULE} » is ${unitRef(DIRECT_UNIT, 'a2')}'s line and it has been true of three sets of small words in three lessons. ${MUST_RULE}`,
      },
      {
        /* THE FIRST OF THE TWO REAL `table`s, and the thing neither neighbour's
         * sheet could hold: THE PREPOSITION. */
        id: 'sheet-two',
        type: 'table',
        layer: 'deep',
        title: 'What each one swallows',
        cols: ['the word', 'what goes inside it', 'named', 'replaced'],
        rows: [
          ['y', 'à plus a thing or a place', noStop(importedFr(A204_CITY_ID)), noStop(fr(A(288)))],
          ['y', 'à plus something that is not a place at all', noStop(fr(A(289))), noStop(fr(A(290)))],
          ['en', 'de plus a thing', noStop(fr(A(291))), noStop(fr(A(292)))],
          ['en', 'du, de la or des plus a thing', noStop(importedFr(PARTITIVE_ROW_ID)), noStop(fr(A(294)))],
          ['en', 'de plus a quantity, and the quantity stays', noStop(fr(A(299))), noStop(fr(A(300)))],
        ],
      },
      {
        id: 'sheet-ens',
        type: 'table',
        layer: 'deep',
        title: 'The three ens',
        cols: ['example', 'what comes next', 'whose lesson'],
        rows: EN_JOBS.map((j) => [
          noStop(typeof j.id === 'number' ? fr(A(j.id)) : importedFr(j.id)),
          j.after,
          unitRef(j.owner, 'a2'),
        ]),
      },
      {
        id: 'sheet-order',
        type: 'teach',
        layer: 'deep',
        title: 'Both at once',
        body: `${ORDER_RULE} ${FROZEN_RULE} That is the only pair these two words can make, and it is worth having because « ${noStop(fr(A(314)))} » is one of the commonest answers in the language. ${ORDER_DEFERRED} You now have three sets of these small words and there are more ways of stacking them than this one; that question belongs to a later lesson and nothing here answers it.`,
      },
      {
        id: 'sheet-next',
        type: 'teach',
        layer: 'deep',
        title: 'What comes next',
        body: `${Cap(unitRef(INDIRECT_UNIT))} taught « ${A_FRAMING} » and this lesson took the other half of it: « ${A_FRAMING_NEXT} » becomes y. Between the three lessons you now have every small word that goes in front of a verb in this language except the ones you use for yourself, which ${unitRef('a2.22')} already gave you. ${MUST_RULE}`,
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
  /* Act 1: the scene's two sentences, the frame pairs, and the two rows this
   * lesson borrows from a2.06 and a2.04. */
  [A(295), A(296), A(325), A(288), A(291), A(292), A206_FRAME_ID, A204_CITY_ID],
  /* Act 2: the a2.24 handshake, the y pairs, and the three published rows this
   * theme already carried.
   *
   * MEASURED, NOT PLANNED. The first draft put A(287) « Tu vas à Paris ? » in
   * act 1, because REQUIRED LAYOUT 1 is about the à half. The batch refused it
   * and was right: the à half on that screen is a2.04's PUBLISHED row, imported,
   * and this lesson's own question form does not reach a screen until the a2.24
   * handshake in act 2. */
  [
    A(287), A224_NAMED_ID, A224_PRONOUN_ID, A(331), A(289), A(290),
    A(304), A(305), A(306), A(307), A(308), A(320), A(321), A(324),
    A(311), A(312),
    'fr.a2.pronoms-essentiels.028', 'fr.a2.pronoms-essentiels.029', 'fr.a2.pronoms-essentiels.030',
  ],
  /* Act 3: the de half, the obligatory half, the quantities and the verbs the
   * lesson never listed. */
  [
    A(293), A(294), PARTITIVE_ROW_ID, 'fr.a1.cafe.151',
    'fr.a2.pronoms-essentiels.032', 'fr.a2.pronoms-essentiels.033',
    A(297), A(298), A(309), A(310), A(299), A(300), A(301), A(302), A(303),
    A(322), A(323), 'fr.a1.expressions-de-quantite.001', 'fr.a2.pronoms-essentiels.031',
    A(329), A(330), A(332),
  ],
  /* Act 4: the three ens, the frozen phrase and the order. */
  [
    A204_ROW_ID, A218_EN_ROW_ID, A218_EN_PHRASE_ID,
    A(313), A(314), A(315), A218_ILYA_AGO_ID, A218_ILYA_ROW_ID,
    'fr.a2.rp-voyage.007',
  ],
  /* Act 5: the negatives, the past, and the seven banked verbs. */
  [A(316), A(317), A(318), A(319), A(326), A(327), 'fr.sons.expressions-utiles.158', ...IMPORTED.map((i) => i.id)],
  /* Act 6: the conversation and the one past row the review deck reaches last. */
  [A(328), A(333), A(334), A(335), A(336)],
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
  /** v1. Corrections §1 measured `lessonIds: []` for this unit, so the counter
   *  starts at 1 rather than at whatever a pre-v2 stub left behind.
   *
   *  Corrections §10: if this body ever needs correcting, THE COUNTER MOVES
   *  rather than the body being corrected under one number. Two different bodies
   *  under one version is the drift this project has lost work to twice, and the
   *  batch's own version guard refuses a re-apply at the same number with
   *  different content. */
  version: 4,

  /** DRAWN ON THE LESSON OVERVIEW CARD AND ON THE LESSON COVER, and corrections
   *  §9 records that a2.11 shipped grammar jargon here while every host gate was
   *  green, because the jargon walk read `sections + sheets + terms` and not
   *  this. The walk in the batch, the merge and the test all include it, and it
   *  carries its own assertion so a later author who trims it fails with the
   *  reason. */
  intro:
    'Two lessons ago you learned where a small word goes, and last lesson you learned that à plus a person turns into one. This lesson finishes the set, and the two words in it work in a way nothing you have met so far does: they do not stand in for a noun, they stand in for a little word AND the noun behind it, both at once. That is why nothing is left over afterwards, and it is why the mistake everybody makes is saying the little word one more time. The second half is harder and English gives you no help with it at all: French will not let you leave these words out, so the two-word answer your own language closes on does not close anything here.',

  grammarAssumed: [
    'The third-person direct object pronouns le, la and les and their obligatory preverbal placement, introduced in a2.06',
    'The third-person indirect object pronouns lui and leur, and the absorption of dative à, introduced in a2.24',
    'The partitive articles du, de la and des, introduced in a1.29',
    'Expressions of quantity governing de: beaucoup de, un peu de, assez de, trop de, introduced in a1.29',
    'The preposition à and its contraction with the definite article, introduced in a1.21 and a2.04',
    'The preposition en in front of a country, introduced in a2.04',
    'The preposition en in front of a duration, and il y a in both its existential and its temporal sense, introduced in a2.18',
    'Standard negation with ne … pas around a finite verb, introduced in a1.18',
    'That ne … pas encloses the verb that changed rather than the one carrying the meaning, introduced in a2.19',
    'The passé composé as auxiliary plus past participle, introduced in a2.05',
    'The rising-intonation question, introduced in a1.19',
  ],
  grammarIntroduced: [
    'The pronoun y, as the replacement of à plus a non-human complement, whether locative or not, in explicit contrast with the lui of a2.24 which replaces à plus a human one',
    'The pronoun en, as the replacement of de plus a complement, covering the partitive articles of a1.29, the de of quantity expressions, and the de governed lexically by a verb',
    'That both pronouns absorb the preposition itself rather than only its complement, which distinguishes them from every pronoun set introduced before this unit and is the source of the preposition-doubling error',
    'The obligatoriness of en and y where English permits ellipsis, so that « Oui, j\'ai » and « Oui, je vais » are ungrammatical rather than merely marked',
    'That a numeral or a quantity expression is retained after en while the noun is not, a construction with no English equivalent',
    'The three homophonous ens of this level, disambiguated exclusively by position, as the seventh instance of the one-form-several-jobs pattern named by a2.02 and the first with three readings rather than two',
    'That il y a is lexicalised and does not decompose, although the y in it is the pronoun taught here',
    'The fixed order y before en, as the only multiple-clitic sequence this unit\'s own inventory can generate. THE ORDER OF ANY OTHER PAIR OF OBJECT PRONOUNS IS RESERVED AND IS OWNED BY NO A2 UNIT AT THE TIME OF WRITING: see the build report, which escalates it as a curriculum gap rather than resolving it here.',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    /** `content_units` requires this to be the unit's English name. UNLIKE a2.06
     *  AND a2.24, IT CONTAINS NO TECHNICAL COMPOUND AT ALL, so this lesson needs
     *  no jargon exemption anywhere and the guard asserts ZERO exempt strings
     *  rather than one. Corpus §8. */
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Le petit mot entre dans le pronom.',
    minutes: 32,
    difficulty: 4,
    glyph: '🎯',
    screens: 246,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: Y_EN_TERMS,
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
      { id: 'rec-a2-25-two', desc: 'The two rows and the frame pairs. Read the two rows as WORDS rather than as sentences, at an even pace. The sentence pairs are ONE TAKE each, both halves in it, so the learner hears one sentence becoming another rather than two being compared. The pronoun must carry NO extra weight: it is unstressed in speech and a reader who leans on it teaches that the learner will hear it coming.' },
      { id: 'rec-a2-25-person', desc: `The ${unitRef('a2.24')} handshake. ONE TAKE PER CARD holding both lines. « Je parle à Marie. » and « Tu vas à Paris ? » must be read with IDENTICAL treatment of the à, because the whole card says the little word is the same and only what sits behind it differs.` },
      { id: 'rec-a2-25-there', desc: 'Five pairs, ONE TAKE each. The English glosses are not recorded. In « J\'y joue le samedi. » the y must not be lengthened: it is one sound inside the first syllable and a reader who separates it teaches a pronunciation nobody uses.' },
      { id: 'rec-a2-25-listening', desc: 'audioFirst. Four lines, ONE TAKE, one voice, no gaps that let the learner rehearse between them. Lines 3 and 4 both carry en and THE TWO MUST BE INDISTINGUISHABLE: they are the same word doing two jobs and the second question exists to make the learner hear that the ear cannot settle it.' },
      { id: 'rec-a2-25-de', desc: 'Eight lines, read separately at a steady pace. The de and the du must sound exactly as unstressed as they do in ordinary speech; this screen is about a word disappearing and a reader who emphasises it before it goes makes the disappearance sound like a loss.' },
      { id: 'rec-a2-25-must', desc: 'THE MOST IMPORTANT TAKE IN THE LESSON. « Oui, j\'ai. » must be read as a COMPLETE utterance with a falling intonation and no trailing hesitation, exactly as an English speaker would say it, and « Oui, j\'en ai. » must be read the same way. The learner has to hear that the wrong one sounds finished, because that is why nobody corrects it. Do NOT read the wrong one as though it were being cut off.' },
      { id: 'rec-a2-25-ens', desc: 'Three lines and three frames, read separately. THE en IN ALL THREE MUST BE INDISTINGUISHABLE. They are the same word and the same sound and the entire teaching point is that only the next word separates them; a reader who marks the pronoun differently makes the exercise measure something that is not in the language.' },
      { id: 'rec-a2-25-trap', desc: 'The four trap cards, in order: « J\'y vais à Paris. », « J\'y vais. », « J\'en veux du café. », « J\'en bois. » The two wrong ones must be read FLUENTLY and without hesitation, because a learner who says them says them fluently and nothing in the sound is wrong. Do not signal the error.' },
      { id: 'rec-a2-25-frozen', desc: 'il y a and il y en a. « Il y a » is three syllables run together at speed, as it is in speech, and « Il y en a » adds one without slowing down. The learner must hear that the phrase is one lump and that the extra word goes inside it rather than beside it.' },
      { id: 'rec-a2-25-negation', desc: 'The wrap. ONE TAKE per card holding both lines. Ne must NOT be given extra length: it is unstressed and often barely there, and a recording that pronounces it carefully teaches a register nobody uses.' },
      { id: 'rec-a2-25-dictee', desc: 'Fourteen lines, ONE VOICE, read at dictation pace with the same interval before each. Several of them are three or four syllables long and the interval matters more than usual for that reason. « J\'y vais. » and « J\'en ai. » must be read at ordinary conversational speed rather than slowly: the whole exercise is whether the learner can hear a word that takes a tenth of a second to say.' },
    ],
  },
};

export const REFRAME_STRING = REFRAME;
export const Y_EN_ITEM_IDS = ITEM_IDS;
export const Y_EN_SECTION_IDS = SECTIONS.map((s) => s.id);
export const Y_EN_SHEET_ID = SHEET_ID;
/** Every role-play turn declares its own two `alts` and its `userEn` inline, so
 *  there is no post-processing step. `scenario.logic.test.ts` requires both and
 *  the batch asserts both before the apply rather than leaving it to the suite,
 *  which is where a2.03 found out. */
export const Y_EN_LESSON: Lesson = LESSON_AUTHORED;
