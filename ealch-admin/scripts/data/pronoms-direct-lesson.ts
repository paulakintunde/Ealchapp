// a2.06.l1 « Pronoms d'objet direct » — the lesson body.
//
// Trail seq 21, the head of the pronoun block. Every fact this file displays
// comes from pronoms-direct-corpus.ts or from the recorded read of Postgres;
// nothing is restated here.
//
// ── THE SHAPE, AND WHERE THE WEIGHT WENT ───────────────────────────────────
//
// Doctrine §B.5: every lesson owns exactly one thing, and if the paradigm gets
// more missions than the Owns the wrong lesson was built. The Owns here is the
// POSITION, and the paradigm is three words the learner already has from a1.04.
//
//   sections about the position   7   s02 s07 s08 s09 s10 s11 s15
//   sections about the paradigm   3   s04 s05 s06
//
// The three-word paradigm is deliberately thin. a1.04 shipped le, la, les and
// l' with four forms and three questions, and a1.03 shipped the gender. Neither
// is re-taught: both are named, leaned on, and spent.
//
// ── THE THREE REQUIRED LAYOUTS, EACH IN ONE SECTION ────────────────────────
//
//   1. The English order and the French order, adjacent   s02-order
//   2. The article above the pronoun                      s04-article
//   3. Je le vois beside Je ne le vois pas, ne outside    s14-negation
//
// Each is a single `cardDeck` card carrying both halves, because "adjacent"
// means on one screen and a guard reading `strings(section)` cannot tell one
// screen from two. The guards read the CARD's own fields.
//
// ── LAYOUT FACTS OBSERVED ──────────────────────────────────────────────────
//
// `table` at layer core is a density failure, so the in-flow paradigm is a
//   four-row `tapTable` (ceiling is six on a Pixel 6) and the full table lives
//   in the reference sheet at layer deep.
// `commonErrors` carries `swipe: true` or it draws a blank screen.
// `trapDrill` walks rule > cards > audio > drill with a GATED drill step, and
//   carries no `size` — corrections §14.6, which caught both of a2.17's.
// Three term chips per section. The renderer shows three.
// A mission title over ~13 em clips on the mission row. a2.23 shipped two that
//   did and repaired them in v2; every title here is inside that budget.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  A, AGREEMENT_OWNER, AGREEMENT_RULE, AGREEMENT_SILENT, ARTICLE_UNIT, A104_REFRAME,
  A118_REFRAME, A222_NEGATION_EXTENSION, A222_REFRAME, BREAK_BODY, ELISION_LIMIT,
  ELISION_UNIT, ER_UNIT, ETRE_UNIT, FUTUR_UNIT, GENDER_UNIT, INDIRECT_UNIT,
  LESSON_ID, NEGATION_EXTENSION, NEGATION_RULE, NEGATION_UNIT, PARTICIPLE_UNIT,
  PASSE_UNIT, PLAIN_PHRASE, PLAIN_POSITION, REFLEXIVE_PAST_UNIT, REFLEXIVE_UNIT,
  REFRAME, ROWS, SCENE_ERROR, SCENE_ERROR_EN, SCENE_QUESTION, SCENE_QUESTION_EN,
  SCENE_RIGHT, SCENE_RIGHT_EN, SCENE_WAIT, SCENE_WAIT_EN, SHAPE_EXTENSION, UNIT,
  WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT, Y_EN_UNIT,
} from './pronoms-direct-corpus.ts';
import { PRONOMS_DIRECT_TERMS } from './pronoms-direct-terms.ts';
import { importedFr, importedEn, respell as impRespell } from './pronoms-direct-imported.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ─── Reading the corpus, never restating it ─────────────────────────────── */

const BY_ID = new Map(ROWS.map((r) => [r.id, r]));
const row = (id: string) => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`${unitRef('a2.06')}: no authored row ${id}`);
  return r;
};
const fr = (id: string) => row(id).fr;
const en = (id: string) => row(id).en;
const ipaOf = (id: string) => row(id).ipa!;
/** The bracketed respelling a card prints under the French. */
const sub = (id: string) => `[${row(id).respell}]`;
/** A sentence with its full stop removed, for a heading or an option. */
const noStop = (s: string) => s.replace(/\s*[.]$/u, '');
/** Two rows on one line, which is what "side by side" means on a card. */
const pair = (a: string, b: string) => `${fr(a)}  ·  ${fr(b)}`;
const card = (id: string) => ({ fr: fr(id), en: en(id), sub: sub(id) });

/* ─── Section ids ────────────────────────────────────────────────────────── */

const SCENE = 's01-scene';
const ORDER = 's02-order';
const GOALS = 's03-goals';
const ARTICLE = 's04-article';
const TABLE = 's05-table';
const PERSONS = 's06-persons';
const MOVE = 's07-move';
const BUILD = 's08-build';
const TRAP = 's09-trap';
const UNSEEN = 's10-unseen';
const ERRORS = 's11-errors';
const ELISION = 's12-elision';
const LISTENING = 's13-listening';
const NEGATION = 's14-negation';
const PAST = 's15-past';
const AGREEMENT = 's16-agreement';
const FLASH = 's17-flash';
const DICTATION = 's18-dictation';
const TALK = 's19-talk';
const SPEAK = 's20-speak';
const REVIEW = 's21-review';
const PROGRESS = 's22-progress';
const QUIZ = 's23-quiz';
const ROUNDUP = 's24-roundup';
const SHEET_ID = 'sheet-pronoms-direct';

/** The sections whose subject is the Owns, and the sections whose subject is
 *  the paradigm. Exported so the test asserts the ratio rather than counting
 *  something derived from the acts. */
export const OWNS_SECTIONS = [ORDER, MOVE, BUILD, TRAP, UNSEEN, ERRORS, PAST] as const;
export const PARADIGM_SECTIONS = [ARTICLE, TABLE, PERSONS] as const;

/* ─── The strings the traps are built out of ─────────────────────────────── */

/** THE ERROR. The brief predicts « je vois le » and predicts it will be
 *  produced consistently. Every trap in the lesson is a version of it. */
export const AFTER_VERB_TRAP = 'Je vois le.';
export const AFTER_VERB_TRAP_EN = 'the English order, said in French';
export const KNOW_TRAP = 'Je connais la.';
export const PAST_TRAP = "J'ai le vu.";
export const WRAP_TRAP = 'Je ne vois pas le.';
export const GENDER_TRAP = 'Je le regarde.';

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE SCENE
 *
 *  Doctrine §B.2: the sentence dies in the middle, nobody is rude and nobody is
 *  corrected. The other person is not confused about the French; she is waiting
 *  to be told the rest of the sentence, which never comes.
 * ══════════════════════════════════════════════════════════════════════════ */

const SCENE_BEATS = [
  {
    kind: 'narration' as const,
    size: 'md' as const,
    text: 'A friend of a friend\'s kitchen, somewhere off the Cours Julien, and six people around a table that seats four. You have been doing well. Two hours of French and nobody has switched to English for you once.',
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'narration' as const,
    size: 'md' as const,
    text: 'The woman beside you is refilling glasses. She has just been talking about somebody who is running late, and she turns and asks you something with an easy answer.',
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'bubble' as const,
    from: 'them' as const,
    speaker: 'Ta voisine de table',
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
    stage: 'Three words arrive on time and the fourth does not. You know the word. You know it is la, because Camille is a woman and you have been storing genders since your third lesson. Where to put it is the part with nowhere to go.',
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'bubble' as const,
    from: 'them' as const,
    speaker: 'Ta voisine de table',
    fr: SCENE_WAIT,
    en: SCENE_WAIT_EN,
    size: 'md' as const,
    reveal: 'tap' as const,
    stage: 'She is not correcting you. She heard « oui, je connais » and a name she did not catch, and she is asking the obvious follow-up. The conversation has moved and your sentence has not.',
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
      works: 'That is it, and the only difference is which side of the verb one word sits on. Everything else you already had.',
      breaks: 'That is what came out, and every word in it is a word you know. The order is the whole problem, and the order is what this lesson is.',
    },
  },
  {
    kind: 'break' as const,
    size: 'lg' as const,
    heading: 'You had the word. You did not have the place',
    body: BREAK_BODY,
    wrong: { fr: SCENE_ERROR, ipa: '/wi ʒə kɔ.nɛ la/', respell: '[wee, zhuh koh-NEH lah]', en: SCENE_ERROR_EN },
    right: { fr: SCENE_RIGHT, ipa: '/wi ʒə la kɔ.nɛ/', respell: '[wee, zhuh lah koh-NEH]', en: SCENE_RIGHT_EN },
    coach: REFRAME,
    audio: { mode: 'tts' as const, lang: 'fr-FR' as const },
  },
  {
    kind: 'resolve' as const,
    size: 'md' as const,
    text: `Nothing in that sentence was vocabulary and nothing in it was gender. ${REFRAME} That is the lesson, and the rest of it is practice at doing it before you have time to think.`,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE SECTIONS
 * ══════════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  {
    id: SCENE,
    type: 'scene',
    /* RETITLED IN v3. « The Word With Nowhere To Go » is 14.17 em against the
     * mission row's 13.55 budget and it shipped CLIPPED as « The Word With
     * Nowhere To … » on a Pixel 6. Found on glass, not by any host gate. */
    title: 'The Word That Came Late',
    frSub: 'Le mot qui arrive trop tard',
    layer: 'core',
    render: 'screens',
    setting: { place: 'A kitchen with too many people in it', city: 'Marseille', time: 'A Friday, late' },
    beats: SCENE_BEATS,
  },

  /* REQUIRED LAYOUT 1, AND IT IS THE OWNS. The English order and the French
   * order on ONE screen, adjacent, with the position visible in both. The brief
   * is explicit that separating them turns the lesson into a list of three
   * words, so each card carries BOTH orders in its own fields and the guard
   * reads the card rather than the section. */
  {
    id: ORDER,
    type: 'cardDeck',
    title: 'Two Orders, One Sentence',
    frSub: 'Avant ou après',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `Three pairs, and in each one the English is above and the French is below. Watch one word change sides. ${REFRAME}`,
    hint: 'The word moves. Nothing else does.',
    terms: ['inFront', 'whatOrWho', 'sameWords'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-06-order' },
    cards: [
      {
        head: 'I see it',
        label: 'English: after · French: before',
        fr: `${en(A(190))}  →  ${fr(A(190))}`,
        sub: `${sub(A(190))} subject, then the word, then the verb`,
        body: `English says the verb and then the word. French says the word and then the verb. Both sentences are three words long, and one of them is in a different place.`,
      },
      {
        head: 'I know her',
        label: 'English: after · French: before',
        fr: `${en(A(196))}  →  ${fr(A(196))}`,
        sub: `${sub(A(196))} and a person behaves exactly like a thing`,
        body: `English changes the word itself here, from Marie to "her". French changes it too, from Marie to la, and then puts it somewhere English never would.`,
      },
      {
        head: 'I buy them',
        label: 'English: after · French: before',
        fr: `${en(A(194))}  →  ${fr(A(194))}`,
        sub: `${sub(A(194))} plural, and the same place`,
        body: `Three sentences, three different words, one place. ${PLAIN_POSITION} in English is the one thing you have to give up, and you give it up every time rather than sometimes.`,
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
      { t: 'Put the word in front of the verb', s: `${REFRAME} This is the whole lesson and everything else on the list is something you already own.` },
      { t: 'Pick between three words you have', s: `le, la and les are ${unitRef(ARTICLE_UNIT, 'a2')}'s and the choice between them is ${unitRef(GENDER_UNIT, 'a2')}'s. Nothing here re-teaches either; you spend them.` },
      { t: 'Say no without moving it', s: `${NEGATION_EXTENSION} One negation rule, five lessons old, and this adds a sentence to it rather than a rule.` },
      { t: 'Write the ending in the past', s: `${AGREEMENT_RULE} ${AGREEMENT_SILENT}` },
    ],
  },

  /* REQUIRED LAYOUT 2, AND THE FIFTH OCCURRENCE OF THE §B.7 SHAPE. The article
   * above the pronoun, on one card, with a2.02's term quoted VERBATIM. */
  {
    id: ARTICLE,
    type: 'cardDeck',
    title: 'The Same Three Words',
    frSub: 'Article ou pronom',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `You have met these three words before and they were doing something else. « ${WHAT_FOLLOWS} » is how ${unitRef(WHAT_FOLLOWS_UNIT)} put it, and this is the fifth time it has come up.`,
    hint: 'Look at the word straight after it.',
    terms: ['sameWords', 'whatOrWho', 'whichOne'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-06-article' },
    cards: [
      {
        head: 'le, twice',
        label: 'a noun follows · a verb follows',
        fr: pair(A(189), A(190)),
        sub: `${sub(A(189))} then ${sub(A(190))}`,
        body: `« ${WHAT_FOLLOWS} » is ${unitRef(WHAT_FOLLOWS_UNIT, 'a2')}'s line. In the first sentence film follows, so it is ${unitRef(ARTICLE_UNIT, 'a2')}'s word. In the second vois follows, so it is this lesson's.`,
      },
      {
        head: 'la, twice',
        label: 'a noun follows · a verb follows',
        fr: pair(A(191), A(192)),
        sub: `${sub(A(191))} then ${sub(A(192))}`,
        body: `The same test on the feminine. « ${A104_REFRAME} » is what ${unitRef(ARTICLE_UNIT)} 's, and it is about the first sentence only. The second one is not English saying nothing; it is English saying "it", in the other place.`,
      },
      {
        head: 'les, twice',
        label: 'a noun follows · a verb follows',
        fr: pair(A(193), A(194)),
        sub: `${sub(A(193))} then ${sub(A(194))}`,
        body: `And the plural. By the fifth time you should be looking for it: one form, two jobs, and the thing beside it settles which. ${Cap(unitRef(WHAT_FOLLOWS_UNIT))}, ${unitRef(FUTUR_UNIT)} and two others have all been a version of this.`,
      },
    ],
  },

  /* THE PARADIGM, AND IT IS FOUR ROWS. A `table` at layer core is a density
   * failure, so this is a tapTable; six rows is the Pixel 6 ceiling and there
   * are four. The full version is in the sheet at layer deep. */
  {
    id: TABLE,
    type: 'tapTable',
    title: 'Four Forms, One Place',
    frSub: 'le · la · les · l\'',
    layer: 'core',
    say: `Four words and one position. Tap any row to hear it. The choice between them is ${unitRef(GENDER_UNIT, 'a2')}'s and ${unitRef(ARTICLE_UNIT, 'a2')}'s, and it is the only part of this lesson that is not new.`,
    terms: ['whichOne', 'inFront', 'shortened'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-06-table' },
    cols: ['word', 'stands for', 'example'],
    rows: [
      {
        cells: ['le', 'one, masculine', noStop(fr(A(190)))],
        say: fr(A(190)),
        detail: { title: '« le »', say: fr(A(190)), body: `${sub(A(190))} ${en(A(190))} One masculine noun, or one man. ${Cap(unitRef(GENDER_UNIT))} taught you to store the gender and this is where you spend it.` },
      },
      {
        cells: ['la', 'one, feminine', noStop(fr(A(201)))],
        say: fr(A(201)),
        detail: { title: '« la »', say: fr(A(201)), body: `${sub(A(201))} ${en(A(201))} One feminine noun, or one woman. Same place in the sentence, and the only thing that changed is the vowel.` },
      },
      {
        cells: ['les', 'more than one', noStop(fr(A(200)))],
        say: fr(A(200)),
        detail: { title: '« les »', say: fr(A(200)), body: `${sub(A(200))} ${en(A(200))} More than one, of either gender or both. The gender is not consulted, exactly as ${unitRef(ARTICLE_UNIT)} said of the article.` },
      },
      {
        cells: ["l'", 'before a vowel', noStop(fr(A(207)))],
        say: fr(A(207)),
        detail: { title: "« l' »", say: fr(A(207)), body: `${sub(A(207))} ${en(A(207))} ${ELISION_LIMIT} ${Cap(unitRef(ELISION_UNIT))} owns it.` },
      },
    ],
  },

  /* THE PRONOUN IS THE ONE WORD THAT DOES NOT ANSWER TO THE SUBJECT, and the
   * learner has just spent a2.22 on a word that does. Said explicitly. */
  {
    id: PERSONS,
    type: 'examples',
    title: 'The Subject Has No Say',
    frSub: 'Le sujet ne change rien',
    layer: 'core',
    say: `Six sentences, six different subjects, and the word in front of the verb does not respond to any of them. ${Cap(unitRef(REFLEXIVE_UNIT))} was the opposite and it was one lesson ago, so this is worth a screen.`,
    terms: ['whichOne', 'inFront'],
    examples: [
      { fr: fr(A(202)), en: en(A(202)), note: `${sub(A(202))} Two le-shaped words in a row, and only the second one belongs to the verb.` },
      { fr: fr(A(203)), en: en(A(203)), note: `${sub(A(203))} A feminine subject and a feminine pronoun with nothing to do with each other. La is the gender of the person known, not of the person knowing.` },
      { fr: fr(A(204)), en: en(A(204)), note: `${sub(A(204))} And the s of les is audible here, because a vowel follows it.` },
      { fr: fr(A(205)), en: en(A(205)), note: `${sub(A(205))} Vous, and le is unchanged.` },
      { fr: fr(A(206)), en: en(A(206)), note: `${sub(A(206))} Ils, and les is unchanged. The verb ending is silent, which is ${unitRef(ER_UNIT, 'a2')}'s business and not this lesson's.` },
      { fr: fr(A(197)), en: en(A(197)), note: `${sub(A(197))} « ${A222_REFRAME} » is ${unitRef(REFLEXIVE_UNIT, 'a2')}'s line about ITS small word. This one is the other kind: it takes the gender of the thing it stands for and ignores the subject entirely.` },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 3. THE OWNS
   * ═══════════════════════════════════════════════════════════════════════ */

  /* THE SAME SENTENCE, BOTH WAYS, FOUR TIMES — and then two sentences somebody
   * else published, doing the same thing, written by nobody teaching this. */
  {
    id: MOVE,
    type: 'examples',
    title: 'Name It, Then Replace It',
    frSub: 'Du nom au pronom',
    layer: 'core',
    say: `Four sentences that name the thing, and the same four with it replaced. Read across rather than down: the word gets shorter and it moves.`,
    terms: ['whatOrWho', 'inFront', 'whichOne'],
    examples: [
      { fr: pair(A(189), A(190)), en: `${en(A(189))} / ${en(A(190))}`, note: `${sub(A(190))} See what? Le film. That is ${PLAIN_PHRASE}, and it goes from four words after the verb to one word before it.` },
      { fr: pair(A(191), A(192)), en: `${en(A(191))} / ${en(A(192))}`, note: `${sub(A(192))} Look at what? La photo. Feminine, so la, and ${unitRef(GENDER_UNIT)} is the only reason you know that.` },
      { fr: pair(A(193), A(194)), en: `${en(A(193))} / ${en(A(194))}`, note: `${sub(A(194))} Buy what? Les livres. Plural, so les, and the gender never comes up.` },
      { fr: pair(A(195), A(196)), en: `${en(A(195))} / ${en(A(196))}`, note: `${sub(A(196))} Know who? Marie. A person, and nothing about the rule changes for one.` },
      { fr: importedFr('fr.a1.pronoms-essentiels.096'), en: importedEn('fr.a1.pronoms-essentiels.096'), note: 'Published, in this lesson\'s own theme, and written by somebody who was not teaching this. The word is in front of the verb because that is where it goes, not because a lesson said so.' },
      { fr: importedFr('fr.a1.pronoms-essentiels.087'), en: importedEn('fr.a1.pronoms-essentiels.087'), note: 'The feminine, same shape, same theme. Two sentences the rule did not produce and which obey it anyway.' },
    ],
  },

  /* PRODUCTION AGAINST THE CLOCK. Doctrine §B.1: the unit of teaching is a
   * pattern with a slot in it, and the proof is the learner filling the slot. */
  {
    id: BUILD,
    type: 'groupDrill',
    title: 'Say It Before You Think',
    frSub: 'On construit la phrase',
    layer: 'core',
    size: 'lg',
    say: `Three rounds. Say the subject, then reach for the word, and it goes in before the verb every time. ${REFRAME}`,
    terms: ['inFront', 'whatOrWho', 'whichOne'],
    groups: [
      {
        label: 'find the word first',
        items: [card(A(189)), card(A(190))],
        check: {
          q: '« Je vois le film. » See what? Now say it without the noun.',
          opts: [fr(A(190)), AFTER_VERB_TRAP, 'Je vois le film.'],
          correct: 0,
          why: `Le film is ${PLAIN_PHRASE}, so it becomes le, and le goes in front of vois. The second option is the English order with French words in it.`,
        },
      },
      {
        label: 'and the gender decides which',
        items: [card(A(191)), card(A(192))],
        check: {
          q: '« Je regarde la photo. » Replace the noun.',
          opts: [GENDER_TRAP, fr(A(192)), 'Je regarde la.'],
          correct: 1,
          why: `La photo is feminine, so la, not le. ${Cap(unitRef(GENDER_UNIT))} is doing the work here and this lesson only decides where the word lands.`,
        },
      },
      {
        label: 'and it never goes on the end',
        items: [card(A(195)), card(A(196))],
        check: {
          q: '« Je connais Marie. » Replace the name.',
          opts: [KNOW_TRAP, 'Je connais elle.', fr(A(196))],
          correct: 2,
          why: `A person replaces exactly like a thing. Both wrong answers put the word where English puts it, and the first of them is the sentence the scene opened on.`,
        },
      },
    ],
  },

  /* THE TRAP. Corrections §14.6: rule > cards > audio > drill, with swipe, an
   * audio spec, a say and a GATED drill step, and NO `size` on a stepped one. */
  {
    id: TRAP,
    type: 'trapDrill',
    title: 'Which Side Of The Verb',
    frSub: 'Avant le verbe',
    layer: 'core',
    swipe: true,
    say: 'Four cards and then six to prove it. The first card is the sentence your own language will hand you every time you stop concentrating.',
    terms: ['inFront', 'whatOrWho', 'theWrap'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-06-trap' },
    rule: {
      title: 'In front of the verb, every time',
      body: `${REFRAME} Not sometimes, and not the way English does it. The word goes between the subject and the verb, and there is nothing else to decide once you know which word it is.`,
    },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'Where The Word Goes' },
      { kind: 'cards', label: 'Four cards', title: 'One Wrong, Three Right' },
      { kind: 'audio', label: 'Hear it', title: 'Before The Verb' },
      { kind: 'drill', label: 'Prove it', title: 'Pick The Right Order', gate: true },
    ],
    cards: [
      {
        fr: AFTER_VERB_TRAP,
        ipa: '/ʒə vwa lə/',
        promptLabel: 'the order English hands you gives',
        promptSound: AFTER_VERB_TRAP,
        tip: 'Every word correct and the sentence stops dead. Le at the end is a word waiting for a noun that never comes, which is why a French ear hears it as unfinished rather than as wrong.',
      },
      {
        fr: fr(A(190)),
        ipa: ipaOf(A(190)),
        promptLabel: 'and the same three words in the French order',
        promptSound: fr(A(190)),
        tip: 'Subject, word, verb. Nothing was added and nothing was removed.',
      },
      {
        fr: fr(A(196)),
        ipa: ipaOf(A(196)),
        promptLabel: 'a person, and it behaves the same',
        promptSound: fr(A(196)),
        tip: 'The scene ended on the other version of this one. Knowing the gender was never the problem.',
      },
      {
        fr: fr(A(200)),
        ipa: ipaOf(A(200)),
        promptLabel: 'and the plural, in the same place',
        promptSound: fr(A(200)),
        tip: 'Three forms and one position. The position is what this lesson is for.',
      },
    ],
    drill: [
      { opts: [fr(A(190)), AFTER_VERB_TRAP], correct: 0, promptSay: fr(A(190)) },
      { opts: [KNOW_TRAP, fr(A(196))], correct: 1, promptSay: fr(A(196)) },
      { opts: [fr(A(200)), 'Je vois les.'], correct: 0, promptSay: fr(A(200)) },
      { opts: ['Tu connais le.', fr(A(197))], correct: 1, promptSay: fr(A(197)) },
      { opts: [fr(A(192)), 'Je regarde la.'], correct: 0, promptSay: fr(A(192)) },
      { opts: ['Nous invitons les.', fr(A(204))], correct: 1, promptSay: fr(A(204)) },
    ],
  },

  /* DOCTRINE §B.1. Four verbs this lesson never conjugated and never imported as
   * headwords. The learner has them from a1.25, a2.10 and a2.15, and the rule
   * runs on them cold. This is the mission that proves a system was taught. */
  {
    id: UNSEEN,
    type: 'groupDrill',
    title: 'Verbs Not Taught Here',
    frSub: 'Des verbes jamais montrés',
    layer: 'core',
    size: 'lg',
    say: 'Four verbs this lesson has not conjugated once. Nothing about them is new and nothing about the rule changes, which is the point of asking.',
    terms: ['inFront', 'whatOrWho'],
    groups: [
      {
        label: 'a verb from your routine',
        items: [card(A(218)), card(A(219))],
        check: {
          q: '« Tu cherches les clés. » Replace the noun.',
          opts: ['Tu cherches les.', fr(A(219)), 'Tu les cherche.'],
          correct: 1,
          why: `Chercher was never on a screen here and did not need to be. The third option moved the word correctly and dropped the verb ending, which is ${unitRef(ER_UNIT, 'a2')}'s rule.`,
        },
      },
      {
        label: 'and an irregular one',
        items: [card(A(220)), card(A(221))],
        check: {
          q: '« Elle prend le train. » Replace the noun.',
          opts: [fr(A(220)), 'Elle prend le.', 'Elle le prends.'],
          correct: 0,
          why: `Prendre is irregular and belongs to another lesson, and carrying a pronoun is no different for it than for any other verb. The word goes in front, and the verb keeps whatever ending it always had.`,
        },
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
    terms: ['inFront', 'whichOne', 'theWrap'],
    errors: [
      {
        wrong: KNOW_TRAP,
        right: fr(A(196)),
        why: 'The word in the English place. This is the error the scene ends on, and it is not carelessness: it is what happens when the sentence is already moving and the place has gone past.',
      },
      {
        wrong: 'Je connais elle.',
        right: fr(A(196)),
        why: 'Reaching for the word that means "her" on its own. French has one of those and it is not used here. The word that goes in front of the verb is la, and it looks exactly like the article.',
      },
      {
        wrong: 'Je le regarde la photo.',
        right: fr(A(192)),
        why: `Both the pronoun and the noun in one sentence. You replace the noun or you keep it; you never say both. If the noun is still there, you did not need the word at all.`,
      },
      {
        wrong: WRAP_TRAP,
        right: fr(A(212)),
        why: `The wrap closed round the verb alone and left the word outside it. ${NEGATION_EXTENSION}`,
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 4. The two things that go wrong
   * ═══════════════════════════════════════════════════════════════════════ */

  {
    id: ELISION,
    type: 'cardDeck',
    title: 'When The Gender Goes',
    frSub: "l'",
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `Three cards, and the first one takes something away from you. ${Cap(unitRef(ELISION_UNIT))} owns this rule and teaches it properly; this is only what it costs here.`,
    hint: 'Two of the three words become the same word.',
    terms: ['shortened', 'whichOne', 'inFront'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-06-elision' },
    cards: [
      {
        head: 'him, or her',
        label: 'and the sentence does not say',
        fr: fr(A(207)),
        sub: `${sub(A(207))} ${en(A(207))}`,
        body: `${ELISION_LIMIT} Half a lesson on le being masculine and la feminine, and now it is gone. Not hidden: absent. The conversation tells you.`,
      },
      {
        head: 'and it is not just aimer',
        label: 'any verb starting on a vowel',
        fr: pair(A(208), A(209)),
        sub: `${sub(A(208))} then ${sub(A(209))}`,
        body: `Two more verbs and the same thing happens. It is a property of the vowel that follows, not of any particular word, which is exactly what ${unitRef(ELISION_UNIT)} says about every other place this happens.`,
      },
      {
        head: 'the plural survives',
        label: 'les does not shorten',
        fr: fr(A(211)),
        sub: `${sub(A(211))} ${en(A(211))}`,
        body: `Les keeps its shape in front of a vowel and gains a z sound instead. So the plural is still audible when both singulars have stopped being, and that asymmetry is worth noticing: the form that never carried gender is the one that survives intact.`,
      },
    ],
  },

  /* THE EAR, AND WHAT IT CAN AND CANNOT SETTLE. The two questions are both
   * between forms that genuinely differ in sound. The one the learner might
   * expect — which gender l' carries — is stated as unanswerable rather than
   * asked, which is corrections §5 applied on a card instead of in a report. */
  {
    id: LISTENING,
    type: 'listening',
    title: 'What Listening Settles',
    frSub: 'Ce que l\'oreille décide',
    layer: 'core',
    say: 'Four lines. Two of them differ by one sound and listening will separate them. The third pair does not differ at all, and no question in this lesson will ever ask you about it.',
    terms: ['shortened', 'whichOne'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-06-listening' },
    lines: [
      { fr: fr(A(190)), en: en(A(190)) },
      { fr: fr(A(201)), en: en(A(201)) },
      { fr: fr(A(200)), en: en(A(200)) },
      { fr: fr(A(207)), en: en(A(207)) },
    ],
    questions: [
      {
        q: `${noStop(fr(A(190)))} against ${noStop(fr(A(201)))}. What separates them?`,
        opts: ['One vowel, and it carries the gender', 'Nothing at all', 'The verb'],
        correct: 0,
        why: 'Luh against lah. One sound, and it is the whole gender. This is the one place in the lesson where the ear does the work for you.',
      },
      {
        q: `And ${noStop(fr(A(207)))}. Which gender is it?`,
        opts: ['Masculine', 'Feminine', 'The sentence does not say'],
        correct: 2,
        why: `${ELISION_LIMIT} A question offering only masculine and feminine would have no correct option, so this lesson asks none.`,
      },
    ],
  },

  /* REQUIRED LAYOUT 3. « Je le vois » and « Je ne le vois pas » ADJACENT, with
   * ne visibly outside the cluster. Both inherited strings quoted verbatim. */
  {
    id: NEGATION,
    type: 'cardDeck',
    title: 'Saying No',
    frSub: 'ne … pas',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `One negation rule, five lessons old, and this adds a sentence to it rather than a rule. « ${NEGATION_RULE} »`,
    hint: 'The word and the verb travel together.',
    terms: ['theWrap', 'inFront'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-06-negation' },
    cards: [
      {
        head: 'both inside',
        label: 'ne · le vois · pas',
        fr: pair(A(190), A(212)),
        sub: `${sub(A(190))} then ${sub(A(212))}`,
        body: `« ${A118_REFRAME} » from ${unitRef(NEGATION_UNIT)}, and « ${NEGATION_RULE} » is ${unitRef(FUTUR_UNIT, 'a2')}'s. One verb, so neither arises. ${NEGATION_EXTENSION}`,
      },
      {
        head: 'not this',
        label: 'the word pushed out of the wrap',
        fr: `${WRAP_TRAP}  ·  ${fr(A(212))}`,
        sub: 'the first one leaves the word stranded behind pas',
        body: `If the word were an ordinary object it would sit after the verb and outside the wrap, which is what the first sentence does. It is not an ordinary object; it belongs to the verb. So it goes where the verb goes, inside.`,
      },
      {
        head: 'you have done this before',
        label: `${Cap(unitRef(REFLEXIVE_UNIT))}, one lesson ago`,
        fr: pair(A(213), A(216)),
        sub: `${sub(A(213))} then ${sub(A(216))}`,
        body: `« ${A222_NEGATION_EXTENSION} » is how ${unitRef(REFLEXIVE_UNIT)} put it, and that reason does not apply here: this word does not change with the subject. Same behaviour, different cause.`,
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 5. And in the past
   *
   *  THE PRECEDING-DIRECT-OBJECT DECISION, TAKEN. Corpus §6. ONE ACT, not the
   *  spine: two teaching sections and the dictée, against the seven the position
   *  gets. Recognition throughout and exactly one typed production, in the exam.
   * ═══════════════════════════════════════════════════════════════════════ */

  {
    id: PAST,
    type: 'cardDeck',
    title: 'In Front Of Both',
    frSub: 'Au passé composé',
    layer: 'core',
    size: 'lg',
    render: 'deck',
    say: `The verb arrives as two words in the past, and there is an obvious place to put a small word between them. It is the wrong place. ${REFRAME}`,
    hint: 'The whole verb, not half of it.',
    terms: ['frontOfBoth', 'inFront', 'theWrap'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-06-past' },
    cards: [
      {
        head: 'name it, or replace it',
        label: 'the noun after · the word in front',
        fr: pair(A(222), A(223)),
        sub: `${sub(A(222))} then ${sub(A(223))}`,
        body: `${Cap(unitRef(PASSE_UNIT))} gave you the two-word past and ${unitRef(PARTICIPLE_UNIT)} gave you the second words. Neither is new. What is new: the small word goes in front of the FIRST, so everything verb-shaped ends up behind it.`,
      },
      {
        head: 'not between them',
        label: 'the place that looks right',
        fr: `${PAST_TRAP}  ·  ${fr(A(223))}`,
        sub: 'the first one splits the verb in half',
        body: `Ai and vu are one verb wearing two words, and nothing goes between them. Say the subject, say the small word, and only then start the verb. That is the same instruction as the present tense; the verb has just started earlier than you expected.`,
      },
      {
        head: 'and saying no',
        label: 'ne · word · first word · pas · second word',
        fr: fr(A(234)),
        sub: `${sub(A(234))} ${en(A(234))}`,
        body: `${NEGATION_EXTENSION} The second word stays outside, which is exactly what ${unitRef(REFLEXIVE_PAST_UNIT)} settled one lesson ago about a three-part verb. Nothing here is a new negation rule.`,
      },
    ],
  },

  /* THE AGREEMENT. Recognition, with the limit stated in the same breath. */
  {
    id: AGREEMENT,
    type: 'examples',
    title: 'The Ending Nobody Hears',
    frSub: 'L\'accord du participe',
    layer: 'core',
    say: `${AGREEMENT_RULE} ${AGREEMENT_SILENT} Four pairs. In each one the left sentence names the thing afterwards and the right one says it first.`,
    terms: ['theEnding', 'frontOfBoth', 'whichOne'],
    examples: [
      { fr: pair(A(222), A(223)), en: `${en(A(222))} / ${en(A(223))}`, note: `${sub(A(223))} Masculine and singular, so nothing goes on. This is the form the other three are built from and the one that hides the rule.` },
      { fr: pair(A(224), A(225)), en: `${en(A(224))} / ${en(A(225))}`, note: `${sub(A(225))} Feminine, so an e. Look at the respelling: it is the same as the line above, character for character, and that is not an oversight.` },
      { fr: pair(A(226), A(227)), en: `${en(A(226))} / ${en(A(227))}`, note: `${sub(A(227))} Plural and masculine, so an s. Still nothing to hear.` },
      { fr: pair(A(228), A(229)), en: `${en(A(228))} / ${en(A(229))}`, note: `${sub(A(229))} Feminine and plural, so both letters. Four spellings, one sound, which is the rule ${unitRef(ER_UNIT)} stated and ${unitRef(ETRE_UNIT)} paid off.` },
    ],
  },

  {
    id: FLASH,
    type: 'flashcards',
    title: 'The Verbs, Banked',
    frSub: 'Les verbes',
    layer: 'core',
    say: 'Seven verbs, none of them authored by this lesson and all of them already in your corpus. The lesson borrowed them; the deck is where they stay.',
    cards: [
      'fr.sons.verbes-essentiels.011', 'fr.sons.verbes-essentiels.024',
      'fr.sons.verbes-essentiels.016', 'fr.sons.verbes-essentiels.048',
      'fr.a2.courses.020', 'fr.a1.routines.185', 'fr.a1.amis.019',
    ].map((id) => ({
      front: importedFr(id),
      back: `[${impRespell(id)}] ${importedEn(id)}`,
      say: importedFr(id),
    })),
  },

  /* THE HEAVIEST PRODUCTION SECTION. A lesson about a POSITION can only be
   * tested in LETTERS mode — word mode hands every word over pre-spelled and
   * gives the order away, which is the one thing being tested. Every line here
   * was run through the real `dicteeMode` and every one is in letters mode. */
  {
    id: DICTATION,
    type: 'dictation',
    title: 'Write Where It Goes',
    frSub: 'La dictée',
    layer: 'core',
    say: 'Twelve lines. Nothing here is long, because a long line hands you the words already spelled and this is the one part of the lesson that has to be built from nothing.',
    terms: ['inFront', 'theWrap', 'theEnding'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 3, recordingId: 'rec-a2-06-dictee' },
    itemIds: [
      A(190), A(192), A(200), A(201),
      A(197), A(198), A(199),
      A(207), A(211),
      A(212), A(213),
      A(225),
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
   *  ACT 6. Prove it
   * ═══════════════════════════════════════════════════════════════════════ */

  {
    id: TALK,
    type: 'scenario',
    title: 'Who Do You Know',
    frSub: 'On parle des gens',
    layer: 'core',
    terms: ['inFront', 'whichOne', 'theWrap'],
    setting: 'The same kitchen, later, and this time the sentences finish. Every question is about a person or a thing, which is the only situation this whole lesson is for.',
    turns: [
      { ai: 'Tu connais Camille, alors ?', en: 'So you know Camille?', user: fr(A(230)), userEn: en(A(230)),
        alts: [{ fr: fr(A(196)), en: en(A(196)) }, { fr: fr(A(203)), en: en(A(203)) }] },
      { ai: 'Et son frère, tu le connais ?', en: 'And her brother, do you know him?', user: fr(A(231)), userEn: en(A(231)),
        alts: [{ fr: fr(A(197)), en: en(A(197)) }, { fr: fr(A(213)), en: en(A(213)) }] },
      { ai: 'Tu vois les voisins ce week-end ?', en: 'Are you seeing the neighbours this weekend?', user: fr(A(232)), userEn: en(A(232)),
        alts: [{ fr: fr(A(200)), en: en(A(200)) }, { fr: fr(A(211)), en: en(A(211)) }] },
      { ai: 'Tu as vu Paul récemment ?', en: 'Have you seen Paul recently?', user: fr(A(233)), userEn: en(A(233)),
        alts: [{ fr: fr(A(223)), en: en(A(223)) }, { fr: fr(A(222)), en: en(A(222)) }] },
      { ai: 'Et les photos de la fête ?', en: 'And the photos from the party?', user: fr(A(234)), userEn: en(A(234)),
        alts: [{ fr: fr(A(229)), en: en(A(229)) }, { fr: fr(A(228)), en: en(A(228)) }] },
      { ai: 'Voilà Camille qui arrive.', en: 'Here comes Camille.', user: fr(A(235)), userEn: en(A(235)),
        alts: [{ fr: fr(A(230)), en: en(A(230)) }, { fr: fr(A(198)), en: en(A(198)) }] },
      { ai: 'Il reste un verre. Tu le veux ?', en: 'There is one glass left. Do you want it?', user: fr(A(236)), userEn: en(A(236)),
        alts: [{ fr: fr(A(220)), en: en(A(220)) }, { fr: fr(A(190)), en: en(A(190)) }] },
    ],
  },

  {
    id: SPEAK,
    type: 'practice',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    skill: 'speak',
    terms: ['inFront', 'whichOne'],
    itemIds: [
      A(190), A(192), A(194), A(196),
      A(197), A(198), A(199), A(200), A(201), A(202), A(203), A(204), A(205), A(206),
      A(207), A(208), A(209), A(210), A(211),
      A(212), A(213), A(214), A(215), A(216), A(217),
      A(218), A(219), A(220), A(221),
      A(223), A(225), A(227),
    ],
  },

  {
    id: REVIEW,
    type: 'reviewDeck',
    title: 'Everything, Once More',
    frSub: 'Tout, encore une fois',
    layer: 'core',
    cards: [
      { front: 'Where does the word go?', back: REFRAME, say: fr(A(190)) },
      { front: 'Je vois le film. Say it without the noun.', back: `${fr(A(190))} Le film is ${PLAIN_PHRASE}, so it becomes le, and le goes in front.`, say: fr(A(190)) },
      { front: 'La photo is feminine. Which word replaces it?', back: `La. ${Cap(unitRef(GENDER_UNIT))} decides which, and this lesson decides where.`, say: fr(A(192)) },
      { front: "Je l'aime. Him or her?", back: ELISION_LIMIT, say: fr(A(207)) },
      { front: 'Make « Je le vois. » negative.', back: `${fr(A(212))} ${NEGATION_EXTENSION}`, say: fr(A(212)) },
      { front: 'Where does the word go when the verb is two words long?', back: `In front of both of them. ${noStop(fr(A(223)))}, never ${noStop(PAST_TRAP)}.`, say: fr(A(223)) },
      { front: "J'ai vu la photo. Now replace the noun.", back: `${fr(A(225))} ${AGREEMENT_RULE}`, say: fr(A(225)) },
      { front: 'Does the word change when the subject changes?', back: `No. It takes the gender of the thing it stands for and ignores the subject. ${Cap(unitRef(REFLEXIVE_UNIT, 'a2'))}'s small word was the opposite.`, say: fr(A(203)) },
    ],
  },

  {
    id: PROGRESS,
    type: 'progressCheck',
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: 'The exam has six rounds and most of it is typed or corrected rather than picked, because a word-order mistake is a whole-sentence mistake and four options cannot show one.',
    stats: [
      { k: 'New rules', v: '1. The word goes in front of the verb.' },
      { k: 'Words to learn', v: `0. le, la and les are ${unitRef(ARTICLE_UNIT, 'a2')}'s and you have had them since A1.` },
      { k: 'Verbs authored', v: '0. All seven were already in your corpus, and four more were never shown at all.' },
      { k: 'What the ear can settle', v: '1 of 2. Le against la, yes. The shortened form, never.' },
    ],
  },

  {
    id: QUIZ,
    type: 'quiz',
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    say: 'Six rounds of five. Most of it asks you to produce or repair a whole sentence, because that is the only shape a word-order error has.',
    terms: ['inFront', 'whichOne', 'theWrap'],
    passMark: 70,
    roundFailThreshold: 60,
    rounds: [
      {
        id: 'r1-position',
        label: 'Where it goes',
        say: 'Five on the one decision in the sentence.',
        targets: ['err-after-verb', 'err-wrong-gender'],
        questions: [
          {
            format: 'errorSpot',
            q: `Fix the order: « ${AFTER_VERB_TRAP} »`,
            accept: [fr(A(190))],
            ref: TRAP,
            why: `${REFRAME} Every word was already right and only the order was not, which is what makes this the hardest kind of mistake to hear yourself make.`,
          },
          {
            format: 'typeIn',
            q: '« Je vois le film. » Type it again with the noun replaced.',
            accept: [fr(A(190))],
            ref: MOVE,
            why: `See what? Le film. So le, and it goes in front of vois rather than after it.`,
          },
          {
            format: 'mcq',
            q: 'Which one is French?',
            opts: [KNOW_TRAP, 'Je connais elle.', fr(A(196)), 'Je la connais Marie.'],
            correct: 2,
            ref: BUILD,
            why: 'The first is the English order, the second reaches for a word French does not use here, and the fourth keeps the noun as well as the word. You replace the noun or you keep it.',
          },
          {
            format: 'errorSpot',
            q: `Fix the order: « Tu connais le. »`,
            accept: [fr(A(197))],
            ref: TRAP,
            why: 'The same mistake in another person. The place does not depend on who is speaking.',
          },
          {
            format: 'listenChoose',
            q: 'Which one did you hear?',
            opts: [fr(A(190)), fr(A(200))],
            correct: 1,
            ref: LISTENING,
            why: 'Luh against lay. Singular against plural, and that difference is genuinely audible, unlike almost everything else this lesson turns on.',
          },
        ],
      },
      {
        id: 'r2-which',
        label: 'Which of the three',
        say: `Five on a choice ${unitRef(GENDER_UNIT)} already taught you to make.`,
        targets: ['err-wrong-gender', 'err-after-verb'],
        questions: [
          {
            format: 'mcq',
            q: '« Je regarde la photo. » Which word replaces la photo?',
            opts: ['le', 'la', 'les', "l'"],
            correct: 1,
            ref: TABLE,
            why: 'Photo is feminine and singular, so la. The noun is on the screen so the gender is there to be read rather than remembered.',
          },
          {
            format: 'typeIn',
            q: '« J\'achète les livres. » Type it again with the noun replaced.',
            accept: [fr(A(194))],
            ref: MOVE,
            why: 'Plural, so les, and the gender is not consulted at all.',
          },
          {
            format: 'mcq',
            q: 'Which of these does NOT tell you which word to use?',
            opts: ['Whether the noun is plural', 'Whether the noun is masculine', 'Who the subject is', 'Whether the verb starts on a vowel'],
            correct: 2,
            ref: PERSONS,
            why: `The subject has no say. It takes the gender of the thing it stands for, which is the opposite of ${unitRef(REFLEXIVE_UNIT, 'a2')}'s small word and worth keeping separate.`,
          },
          {
            format: 'listenChoose',
            q: 'Which one did you hear?',
            opts: [fr(A(197)), fr(A(198))],
            correct: 0,
            ref: LISTENING,
            why: 'Luh against lah. One vowel, and it carries the whole gender. This is the one thing in the lesson listening will settle.',
          },
          {
            format: 'errorSpot',
            q: 'The thing looked at is la photo. Fix the word: « Je le regarde. »',
            accept: [fr(A(192))],
            ref: BUILD,
            why: 'The position was right and the gender was not. Both have to be, and only one of them is this lesson\'s.',
          },
        ],
      },
      {
        id: 'r3-negative',
        label: 'Saying no',
        say: 'Five on a rule you have had for five lessons.',
        targets: ['err-wrap-narrow', 'err-after-verb'],
        questions: [
          {
            format: 'typeIn',
            q: 'Make « Je le vois. » negative. Type the whole sentence.',
            accept: [fr(A(212))],
            ref: NEGATION,
            why: `${NEGATION_EXTENSION} Ne outside, pas after, and the word stays where it was.`,
          },
          {
            format: 'errorSpot',
            q: `Fix it: « ${WRAP_TRAP} »`,
            accept: [fr(A(212))],
            ref: NEGATION,
            why: 'The word was left outside the wrap, behind pas. It belongs to the verb, so it goes where the verb goes.',
          },
          {
            format: 'mcq',
            q: 'Which one is right?',
            opts: [fr(A(213)), 'Je ne connais pas la.', 'Ne je la connais pas.', 'Je la ne connais pas.'],
            correct: 0,
            ref: NEGATION,
            why: `« ${NEGATION_RULE} » There is one verb here, so the only question is what counts as the verb, and the word in front has joined it.`,
          },
          {
            format: 'typeIn',
            q: 'Make « Je les achète. » negative. Type the whole sentence.',
            accept: [fr(A(214))],
            ref: NEGATION,
            why: 'The plural behaves no differently. Ne, then both words, then pas.',
          },
          {
            format: 'mcq',
            q: `${Cap(unitRef(REFLEXIVE_UNIT))} said « ${A222_NEGATION_EXTENSION} » Why does that sentence not explain this lesson?`,
            opts: [
              'Because the wrap is different here',
              'Because this word does not change with the subject at all',
              'Because there are two verbs',
              'Because ne elides',
            ],
            correct: 1,
            ref: NEGATION,
            why: `The behaviour is identical and the reason is not. ${Cap(unitRef(REFLEXIVE_UNIT, 'a2'))}'s word is the subject said twice; this one is the thing acted on. Both belong to the verb, so both go inside.`,
          },
        ],
      },
      {
        id: 'r4-shortened',
        label: 'The shortened form',
        say: 'Five on the form that takes something away.',
        targets: ['err-after-verb', 'err-wrong-gender'],
        questions: [
          {
            format: 'mcq',
            q: "« Je l'aime. » Is the person a man or a woman?",
            opts: ['A man', 'A woman', 'The sentence does not say'],
            correct: 2,
            ref: ELISION,
            why: `${ELISION_LIMIT} No question anywhere in this lesson asks it the other way, because there would be no correct answer to mark.`,
          },
          {
            format: 'typeIn',
            q: '« J\'invite Marie. » Type it again with the name replaced.',
            accept: [fr(A(208)), "Je l'invite."],
            ref: ELISION,
            why: 'Inviter starts on a vowel, so la shortens, and the gender disappears with it. Nothing you can do about that and nothing you need to.',
          },
          {
            format: 'listenChoose',
            q: 'Which one did you hear?',
            opts: [fr(A(208)), fr(A(211))],
            correct: 0,
            ref: LISTENING,
            why: 'The singular shortens and the plural does not. Lan-VEET against lay zan-VEET, and the plural is the longer of the two because les kept its shape.',
          },
          {
            format: 'mcq',
            q: 'Which of these never shortens in front of a vowel?',
            opts: ['le', 'la', 'les'],
            correct: 2,
            ref: TABLE,
            why: 'Les keeps its shape and adds a z sound instead. The form that never carried a gender is the one that survives intact.',
          },
          {
            format: 'errorSpot',
            q: "The person is Camille. Fix the order: « J'aime la. »",
            accept: ["Je l'aime."],
            ref: TRAP,
            why: 'Two things wrong and only one of them is a choice. The word goes in front, and once it is in front of a vowel it shortens whether you meant it to or not.',
          },
        ],
      },
      {
        id: 'r5-past',
        label: 'In the past',
        say: 'Five on a tense you already have, with one word added.',
        targets: ['err-no-ending', 'err-after-verb'],
        questions: [
          {
            format: 'errorSpot',
            q: `Fix the order: « ${PAST_TRAP} »`,
            accept: [fr(A(223))],
            ref: PAST,
            why: 'The word went between the two halves of the verb. It goes in front of both, which is the same instruction as the present tense on a verb that starts earlier.',
          },
          {
            format: 'typeIn',
            q: "« J'ai vu la photo. » Type it again with the noun replaced. Watch the ending.",
            accept: [fr(A(225))],
            ref: AGREEMENT,
            why: `${AGREEMENT_RULE} La photo is feminine and it is now in front of the verb, so vu takes an e. ${AGREEMENT_SILENT}`,
          },
          {
            format: 'mcq',
            q: 'Why does « J\'ai vu la photo. » have no ending on vu?',
            opts: [
              'Because avoir never takes one',
              'Because the thing seen is named after the verb, not before it',
              'Because photo is feminine',
              'Because vu is irregular',
            ],
            correct: 1,
            ref: AGREEMENT,
            why: `${AGREEMENT_RULE} The first option is nearly a rule and it is not this one; the ending appears precisely when the word has moved in front.`,
          },
          {
            format: 'typeIn',
            q: '« J\'ai acheté les livres. » Type it again with the noun replaced.',
            accept: [fr(A(227))],
            ref: AGREEMENT,
            why: 'Plural and masculine in front of the verb, so an s goes on acheté. Still nothing to hear.',
          },
          {
            format: 'mcq',
            q: 'How many of vu, vue, vus and vues sound different from each other?',
            opts: ['All four', 'Two', 'None of them'],
            correct: 2,
            ref: AGREEMENT,
            why: `One sound, four spellings. ${AGREEMENT_SILENT} That is why the dictée exists and why no listening question in this lesson goes near an ending.`,
          },
        ],
      },
      {
        id: 'r6-all',
        label: 'All of it',
        say: 'Five that ask for more than one rule at once.',
        targets: ['err-after-verb', 'err-no-ending', 'err-wrap-narrow'],
        questions: [
          {
            format: 'typeIn',
            q: '« Je connais Marie. » Make it negative and replace the name.',
            accept: [fr(A(213))],
            ref: NEGATION,
            why: 'Two rules at once: the word in front, and both of them inside the wrap. Neither was new by this point.',
          },
          {
            format: 'errorSpot',
            q: `Fix it: « Nous invitons les pas. »`,
            accept: [fr(A(217))],
            ref: NEGATION,
            why: 'The word after the verb and the negation half-built. Ne, then the word and the verb together, then pas.',
          },
          {
            format: 'mcq',
            q: 'Which one is right?',
            opts: ["Je ne l'ai pas vues.", fr(A(234)), "Je ne les ai vues pas.", "Je n'ai pas les vues."],
            correct: 1,
            ref: PAST,
            why: 'The word in front of the first half, the wrap round the word and the first half, and the ending on the second. Every part of that is a rule you already had.',
          },
          {
            format: 'tapSilent',
            q: 'Tap the letter you do not say.',
            word: 'regardées',
            correct: 's',
            ref: AGREEMENT,
            why: `${AGREEMENT_SILENT} The s is the plural and nobody says it, which is why the whole rule has to be written rather than heard.`,
          },
          {
            format: 'errorSpot',
            q: `Fix the order: « Elle prend le. »`,
            accept: [fr(A(220))],
            ref: UNSEEN,
            why: 'A verb this lesson never conjugated, and the rule runs on it unchanged. That is what it means for this to be a system rather than three words.',
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
    body: `${REFRAME} Everything else in this lesson was something you already owned, spent in a new place.`,
    points: [
      REFRAME,
      `le, la and les are ${unitRef(ARTICLE_UNIT, 'a2')}'s three words and the choice between them is ${unitRef(GENDER_UNIT, 'a2')}'s. Neither was re-taught here, and both were needed on every screen.`,
      `« ${WHAT_FOLLOWS} » is ${unitRef(WHAT_FOLLOWS_UNIT, 'a2')}'s line, and this was the fifth time. ${SHAPE_EXTENSION}`,
      `${ELISION_LIMIT} ${Cap(unitRef(ELISION_UNIT))} owns the rule itself.`,
      `${NEGATION_EXTENSION} One negation rule, five lessons old, and this added a sentence rather than a rule.`,
      `${AGREEMENT_RULE} ${AGREEMENT_SILENT}`,
      `${Cap(unitRef(REFLEXIVE_UNIT))} gave you me, te and se in this same slot, so the small words you already carry and these are one system rather than two.`,
      `Next: ${unitRef(INDIRECT_UNIT)} takes the other kind of word into the same slot, and ${unitRef(Y_EN_UNIT)} takes two more. The position you learned today is the position all of them use.`,
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
    title: 'The word with nowhere to go',
    sections: [SCENE, ORDER, GOALS],
    milestone: 'You have seen the two orders side by side and know which one French uses.',
    estScreens: 20,
    restPoints: [`${ORDER}/after-the-orders`],
  },
  {
    id: 'act2',
    title: 'Three words you already have',
    sections: [ARTICLE, TABLE, PERSONS],
    milestone: `You can tell ${unitRef(ARTICLE_UNIT, 'a2')}'s job from this one by looking at the word beside it, and pick between the three.`,
    estScreens: 18,
  },
  {
    id: 'act3',
    title: 'In front of the verb',
    sections: [MOVE, BUILD, TRAP, UNSEEN, ERRORS],
    milestone: 'You can replace a noun and place the word, at speed, on verbs this lesson never showed you.',
    estScreens: 62,
    restPoints: [`${BUILD}/after-the-build`, `${TRAP}/after-the-trap`],
  },
  {
    id: 'act4',
    title: 'Two things that go wrong',
    sections: [ELISION, LISTENING, NEGATION],
    milestone: 'You know which gender the shortened form carries, which is none, and where ne and pas close.',
    estScreens: 26,
    /* `density.logic.ts` caps an unbroken stretch at 22 screens. The rest point
     * goes where the teaching changes, which here is between the form that
     * loses the gender and the rule that has nothing to do with gender. */
    restPoints: [`${LISTENING}/after-the-listening`],
  },
  {
    id: 'act5',
    title: 'And in the past',
    sections: [PAST, AGREEMENT, FLASH, DICTATION],
    milestone: 'You can put the word in front of a two-word verb and write the ending nobody can hear.',
    estScreens: 40,
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
 *    err-after-verb    r1, r4, r6      err-wrong-gender  r2
 *    err-wrap-narrow   r3              err-no-ending     r5
 * ══════════════════════════════════════════════════════════════════════════ */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-after-verb',
    description: 'Puts the word where English puts it, behind the verb. « Je vois le. » THE error of this lesson: the brief predicts it will be produced consistently rather than occasionally, because word order is the last thing a second language gives up, and it is the sentence the opening scene dies on.',
    detectOn: [ORDER, BUILD, TRAP, UNSEEN, QUIZ],
    drill: 'drill-position',
    retest: 'retest-position',
  },
  {
    id: 'err-wrong-gender',
    description: `Places the word correctly and picks the wrong one of the three, usually le for a feminine noun. « Je le regarde » for la photo. The position is this lesson\'s and the gender is ${unitRef('a1.03')}\'s, so this is a prerequisite failing rather than a new one, and the drill sends the learner back to the noun.`,
    detectOn: [TABLE, BUILD, QUIZ],
    drill: 'drill-gender',
    retest: 'retest-gender',
  },
  {
    id: 'err-wrap-narrow',
    description: `Closes the wrap round the verb alone and strands the word outside it. « Je ne vois pas le. » ${unitRef('a2.22')}\'s extension is about a word that changes with the subject and does not by itself cover a word that does not.`,
    detectOn: [NEGATION, QUIZ],
    drill: 'drill-wrap',
    retest: 'retest-wrap',
  },
  {
    id: 'err-no-ending',
    description: 'Leaves the second word bare when the pronoun has come before it. « Je l\'ai vu. » for a feminine thing. Nothing in the sound ever asked for the ending, so there is no reason inside the learner\'s ear to add one.',
    detectOn: [AGREEMENT, DICTATION, QUIZ],
    drill: 'drill-ending',
    retest: 'retest-ending',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-position',
    title: 'Which side of the verb',
    format: 'sort',
    buckets: ['French: in front of the verb', 'English order, not French'],
    items: [A(190), A(196), A(200), A(197), A(192), A(204)],
    coach: `${REFRAME} Every card in the left bucket is subject, word, verb. If you can say the three in that order without stopping, the rule has landed.`,
  },
  {
    id: 'retest-position',
    title: 'One more',
    format: 'mcq',
    q: '« Je vois le film. » Say it without the noun.',
    opts: [fr(A(190)), AFTER_VERB_TRAP, 'Le je vois.'],
    correct: 0,
    why: `The word goes in front of the verb. The third option is what happens if you take "first" too literally: it comes after the subject, not before it.`,
  },
  {
    id: 'drill-gender',
    title: 'Which of the three',
    format: 'sort',
    buckets: ['le', 'la', 'les'],
    items: [A(190), A(201), A(200), A(192), A(197), A(199)],
    coach: `Read the noun, not the sentence. ${Cap(unitRef(GENDER_UNIT))} taught you to store it and ${unitRef(ARTICLE_UNIT)} taught you to say it; this lesson only decides where it goes.`,
  },
  {
    id: 'retest-gender',
    title: 'One more',
    format: 'mcq',
    q: 'La photo. Which word replaces it?',
    opts: ['la', 'le', 'les'],
    correct: 0,
    why: 'Feminine and singular, so la. The gender is the noun\'s and it never becomes a guess.',
  },
  {
    id: 'drill-wrap',
    title: 'Where pas stops',
    format: 'flashcard',
    pairs: [[fr(A(190)), fr(A(212))], [fr(A(196)), fr(A(213))], [fr(A(194)), fr(A(214))]],
    coach: `${NEGATION_RULE} ${NEGATION_EXTENSION} Ne outside both, pas behind both, and the word never leaves the verb.`,
  },
  {
    id: 'retest-wrap',
    title: 'One more',
    format: 'mcq',
    q: 'Make « Je le vois. » negative.',
    opts: [fr(A(212)), WRAP_TRAP, 'Ne je le vois pas.'],
    correct: 0,
    why: NEGATION_EXTENSION,
  },
  {
    id: 'drill-ending',
    title: 'The ending nobody hears',
    format: 'flashcard',
    pairs: [[fr(A(222)), fr(A(223))], [fr(A(224)), fr(A(225))], [fr(A(226)), fr(A(227))]],
    coach: `${AGREEMENT_RULE} ${AGREEMENT_SILENT} Each pair names the thing on the left and says it first on the right, and only the right-hand one can take an ending.`,
  },
  {
    id: 'retest-ending',
    title: 'One more',
    format: 'mcq',
    q: "« J'ai vu la photo. » Replace the noun. Which one?",
    opts: [fr(A(225)), fr(A(223)), "J'ai vue la photo."],
    correct: 0,
    why: `${AGREEMENT_RULE} Feminine, in front of the verb, so an e. And you will never hear it.`,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE REFERENCE SHEET
 *
 *  Corrections §8: a `sheetId` resolves ONLY inside the lesson that declares it,
 *  so this cannot extend a1.04's and nobody can extend this one. The brief asks
 *  what it holds that a1.04's could not, and the answer is the reason it exists
 *  rather than a formality:
 *
 *    a1.04's sheet has NO VERB IN IT. Its subject is a word in front of a noun,
 *    and every fact on it is about which of four forms a noun takes. This sheet
 *    is entirely about where a word sits relative to a VERB — in the present, in
 *    the past, and inside a negation. Not one line of it could have been written
 *    for a1.04, and the three forms it shares with a1.04 are the only overlap.
 *
 *  `ReferenceSheet.tsx` draws `teach`, `letterGrid` and `table` and nothing
 *  else; a `cheatSheet` inside one draws its title and no content, so there is
 *  not one here.
 * ══════════════════════════════════════════════════════════════════════════ */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    layer: 'deep',
    title: 'Where the word goes',
    contains: ['The rule', 'The four forms', 'The three places', 'Saying no', 'Next'],
    sections: [
      {
        id: 'sheet-rule',
        type: 'teach',
        layer: 'deep',
        title: 'The rule, in one line',
        body: `${REFRAME} Say the verb and ask what, or who; whatever answers is the word you replace, and in English it sits behind the verb. In French it sits in front, between the subject and the verb, and nothing else in the sentence moves.`,
      },
      {
        /* THE ONE REAL `table`, and it is here because a table at layer core is
         * a density failure. The in-flow version is s05-table, four rows. */
        id: 'sheet-forms',
        type: 'table',
        layer: 'deep',
        title: 'The four forms',
        cols: ['word', 'stands for', 'example'],
        rows: [
          ['le', 'one, masculine', noStop(fr(A(190)))],
          ['la', 'one, feminine', noStop(fr(A(201)))],
          ['les', 'more than one', noStop(fr(A(200)))],
          ["l'", 'before a vowel, either gender', noStop(fr(A(207)))],
        ],
      },
      {
        id: 'sheet-places',
        type: 'table',
        layer: 'deep',
        title: 'The three places, and they are one place',
        cols: ['when', 'the shape', 'example'],
        rows: [
          ['present', 'subject · word · verb', noStop(fr(A(190)))],
          ['negative', 'subject · ne · word · verb · pas', noStop(fr(A(212)))],
          ['past', 'subject · word · first word · second word', noStop(fr(A(223)))],
          ['past, negative', 'subject · ne · word · first word · pas · second word', noStop(fr(A(234)))],
        ],
      },
      {
        id: 'sheet-no',
        type: 'teach',
        layer: 'deep',
        title: 'Saying no',
        body: `« ${A118_REFRAME} » from ${unitRef(NEGATION_UNIT)}, and « ${NEGATION_RULE} » from ${unitRef(FUTUR_UNIT)}. There is one verb in a present-tense sentence, so the second question never arises here. ${NEGATION_EXTENSION}`,
      },
      {
        id: 'sheet-ending',
        type: 'teach',
        layer: 'deep',
        title: 'The ending in the past',
        body: `${AGREEMENT_RULE} ${AGREEMENT_SILENT} « J'ai vu la photo » names the thing afterwards and nothing goes on. « Je l'ai vue » says it first and an e goes on. Four spellings, one sound, so this is a writing rule and the dictée is the only place it is real. This is ${unitRef(AGREEMENT_OWNER, 'a2')}'s rule and nowhere else's.`,
      },
      {
        id: 'sheet-next',
        type: 'teach',
        layer: 'deep',
        title: 'What comes next',
        body: `${Cap(unitRef(INDIRECT_UNIT))} puts a different kind of word into this same slot, and ${unitRef(Y_EN_UNIT)} puts two more. None of them changes the position; the position is what you learned here and all three lessons share it. ${Cap(unitRef(REFLEXIVE_UNIT, 'a2'))}'s me, te and se were already in it before you started.`,
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  DECK TRANCHES
 *
 *  One tranche per act. A tranche releases an item for review AFTER the act
 *  that showed it, so no tranche may release something the acts before it have
 *  not put on a screen. `itemIds` is the union, derived rather than retyped.
 * ══════════════════════════════════════════════════════════════════════════ */

/* BUILT FROM A MEASURED FIRST-SHOW, NOT FROM THE PLAN.
 *
 * The first draft grouped these by SUBJECT — the pairs together, the negatives
 * together, the past together — which is how the lesson reads and is not how the
 * learner meets them. The batch refused it twice, and both refusals were right:
 * a card showing « I see it → Je le vois. » puts .190 on a screen and does NOT
 * put .189 there, because that card carries the English against the French
 * rather than the noun against the pronoun.
 *
 * So each tranche below is the set of items whose FIRST appearance on any screen
 * falls in that act, measured by walking the acts in order. Invariants §1: the
 * question is "did the learner see it", not "does this id resolve".            */
const DECK_TRANCHE: string[][] = [
  // Act 1: the three sentences the two orders were shown with.
  [A(190), A(194), A(196)],
  // Act 2: the article halves, the paradigm across the persons, the table.
  [
    A(189), A(191), A(192), A(193),
    A(197), A(200), A(201), A(202), A(203), A(204), A(205), A(206),
    A(207),
  ],
  // Act 3: the Owns. The person pair, the first negative, the unseen verbs, and
  // the two published sentences nobody wrote to prove this rule.
  [
    A(195), A(212), A(218), A(219), A(220), A(221),
    'fr.a1.pronoms-essentiels.096', 'fr.a1.pronoms-essentiels.087',
  ],
  // Act 4: the rest of the shortened forms and the negatives that are taught.
  [A(208), A(209), A(211), A(213), A(216), 'fr.sons.verbes-essentiels.016'],
  // Act 5: the past, the two dictée-only paradigm cells, and the banked verbs.
  [
    A(198), A(199),
    A(222), A(223), A(224), A(225), A(226), A(227), A(228), A(229), A(234),
    'fr.sons.verbes-essentiels.011', 'fr.sons.verbes-essentiels.024',
    'fr.sons.verbes-essentiels.048', 'fr.a2.courses.020',
    'fr.a1.routines.185', 'fr.a1.amis.019',
  ],
  // Act 6: the conversation, and the negatives the speak list reaches last.
  [A(210), A(214), A(215), A(217), A(230), A(231), A(232), A(233), A(235), A(236)],
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
  /** v1 was the first build and it reached Postgres. v2 REPAIRS ONE STRING, in
   *  the dictée audio brief, which read « makes the exercise dishonest about
   *  what it is testing ».
   *
   *  `honest` is banned from authored content and the ban catches `dishonest`.
   *  EVERY HOST GATE IN THIS BUILD WAS GREEN: the batch, the merge and this
   *  lesson's own test all carry `/\bhonest/i`, copied from the band, and a word
   *  boundary does not match inside `dishonest`. Only the seed-wide
   *  `sons-alphabet.test.ts`, which matches the substring, caught it. All three
   *  local guards are now substring guards, and the band's copies are not.
   *
   *  THE COUNTER MOVES RATHER THAN THE BODY BEING CORRECTED UNDER v1.
   *  Corrections §10: two different bodies under one number is the drift this
   *  project has lost work to twice. The batch's own version guard refused the
   *  re-apply, which is the guard working, and a2.09 set the precedent.
   *
   *  v3 REPAIRS A DEFECT FOUND ON A PIXEL 6 AND NOWHERE ELSE. The scene's title
   *  « The Word With Nowhere To Go » is 14.17 em against the mission row's 13.55
   *  budget, and it shipped as « The Word With Nowhere To … ». EVERY HOST GATE
   *  WAS GREEN: this build asserted a great deal about that section and nothing
   *  about how wide its title draws, and the report shipped at v2 saying so —
   *  *« written inside that budget by counting rather than by measuring on
   *  glass »*. The device pass then found exactly the thing that sentence
   *  named.
   *
   *  a2.23 built the em model this now imports rather than reimplementing, and
   *  it separated this lesson's one clip from its twenty-three passes on the
   *  first run, which is an independent validation of that model on content it
   *  was not calibrated against. */
  version: 5,

  /** DRAWN ON THE LESSON OVERVIEW CARD AND ON THE LESSON COVER, and corrections
   *  §9 records that a2.11 shipped grammar jargon here while every host gate was
   *  green, because the jargon walk read `sections + sheets + terms` and not
   *  this. The walk in the batch, the merge and the test all include it, and it
   *  carries its own assertion so a later author who trims it fails with the
   *  reason. */
  intro:
    'You have known le, la and les since your fourth lesson, and you have been using them in front of nouns ever since. This is the other job they do. The words are the same, the choice between them is the same, and the only new thing is where they sit: French puts this one in front of the verb, where English puts it behind. That is the whole lesson, and it is worth a whole lesson because word order is the last thing anybody gives up.',

  grammarAssumed: [
    'The definite article in all four forms, introduced in a1.04',
    'Noun gender as a stored property of the noun, introduced in a1.03',
    'The present tense of regular -ER verbs and its silent endings, introduced in a2.01',
    'Standard negation with ne … pas around a finite verb, introduced in a1.18',
    'That ne … pas encloses the verb that changed rather than the one carrying the meaning, introduced in a2.19 and quoted by a2.05, a2.21, a2.22 and a2.23',
    'Elision of le and la to l\' before a vowel sound, introduced in sons.07',
    'The preverbal reflexive clitic and its position, introduced in a2.22',
    'The passé composé as auxiliary plus past participle, introduced in a2.05',
    'The irregular past participle groups, introduced in a2.20',
    'That -é, -ée, -és and -ées are homophonous, introduced in a2.01 and paid off in a2.21',
  ],
  grammarIntroduced: [
    'The third-person direct object pronouns le, la, les and their elided form l\', as a paradigm distinct from the homophonous definite articles',
    'Obligatory preverbal placement of the direct object pronoun in a finite clause, against the postverbal object position of English',
    'That the direct object pronoun agrees in gender and number with its antecedent and is invariant with respect to the subject, in explicit contrast with the reflexive clitic of a2.22',
    'Neutralisation of the gender contrast under elision before a vowel-initial verb, and the consequent unrecoverability of the antecedent\'s gender from the clause alone',
    'That ne … pas encloses the clitic together with the finite verb, extending a1.18, a2.19 and a2.22 to a clitic that is not subject-agreeing',
    'Placement of the clitic before the auxiliary rather than between auxiliary and participle in compound tenses',
    'Past participle agreement with a PRECEDING direct object, taught here in one act after a2.23 met the suspended case receptively and a2.24\'s brief deferred it to this unit',
    'That the four written agreement forms are homophonous, so the rule is realised orthographically only',
    'Indirect object pronouns lui and leur are reserved entirely for a2.24, and pronominal y and en for a2.25',
    'Co-occurrence of two object pronouns in one clause is reserved beyond this unit',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    /** `content_units` requires this to be the unit's English name, which is
     *  the ONLY place in the lesson the technical compound appears. Corpus §5. */
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Le mot passe devant le verbe.',
    minutes: 30,
    difficulty: 3,
    glyph: '🔁',
    screens: 212,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PRONOMS_DIRECT_TERMS,
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
      { id: 'rec-a2-06-order', desc: 'The two orders. Each card is ONE TAKE: the English gloss read at conversational pace, then the French, with no pause long enough to sound like two examples. The learner must hear one sentence becoming another rather than two sentences being compared.' },
      { id: 'rec-a2-06-article', desc: 'The article against the pronoun. ONE TAKE PER CARD, both sentences in it, and NO extra stress on le, la or les. Stressing the shared word would teach that the difference is audible, and the entire point is that it is not: what follows it is the only signal.' },
      { id: 'rec-a2-06-table', desc: 'Four rows, four short sentences, read separately. Luh, lah and lay must be clearly distinct from one another; the fourth row is the elided form and must NOT be read in a way that hints at a gender.' },
      { id: 'rec-a2-06-trap', desc: 'wrongThenRight. The wrong sentence « Je vois le. » must be read at NORMAL pace and NOT trailed off, because a French ear hears it as an unfinished sentence rather than a mistake and the learner needs to hear it sounding almost right.' },
      { id: 'rec-a2-06-elision', desc: 'The shortened form. « Je l\'aime. » is read ONCE and neutrally. Any reading that leans towards a man or a woman would contradict the card, which says the sentence carries neither.' },
      { id: 'rec-a2-06-listening', desc: 'audioFirst. Four lines, ONE TAKE, one voice, no gaps that let the learner rehearse between them. Lines 1 and 2 differ by one vowel and that difference is the whole question; line 4 must sound exactly as neutral as it does on the elision card.' },
      { id: 'rec-a2-06-negation', desc: 'The wrap. ONE TAKE per card holding both sentences. Ne must NOT be given extra length: it is unstressed in speech and often barely there, and a recording that pronounces it carefully teaches a register nobody uses.' },
      { id: 'rec-a2-06-past', desc: 'The two-word verb. Read so that « je l\'ai » is one breath group and the participle follows, because the pronoun leaning on the auxiliary is exactly what the card claims and the rhythm is the only evidence for it.' },
      { id: 'rec-a2-06-dictee', desc: 'Twelve lines, ONE VOICE, read at dictation pace with the same interval before each. « Je l\'ai vue. » must be read IDENTICALLY to « Je l\'ai vu. » would be: the whole point of the line is that the ending is not there to hear, and a reader who distinguishes them makes the exercise measure something that is not there.' },
    ],
  },
};

export const REFRAME_STRING = REFRAME;
export const PRONOMS_DIRECT_ITEM_IDS = ITEM_IDS;
export const PRONOMS_DIRECT_SECTION_IDS = SECTIONS.map((s) => s.id);
export const PRONOMS_DIRECT_SHEET_ID = SHEET_ID;
/** Every role-play turn declares its own two `alts` and its `userEn` inline, so
 *  there is no post-processing step. `scenario.logic.test.ts` requires both and
 *  the batch asserts both before the apply rather than leaving it to the suite,
 *  which is where a2.03 found out. */
export const PRONOMS_DIRECT_LESSON: Lesson = LESSON_AUTHORED;
