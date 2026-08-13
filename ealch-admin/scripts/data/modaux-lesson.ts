// a2.13.l1 "Irréguliers 3 : vouloir, pouvoir, devoir" — the mission journey.
//
// ── THIS IS A FIRST BUILD ──────────────────────────────────────────────────
//
// Probed rather than assumed: the unit dump says `"lessons": []`, so there is no
// pre-v2 stub to rebuild and the version counter starts at 1.
//
// ── IT IS ALSO THE LARGEST LESSON IN THE CORPUS, AND DELIBERATELY ─────────
//
// Thirty-two sections against the seven A2 lessons before it, every one of which
// shipped exactly twenty-four. THAT SHAPE WAS NEVER MEASURED AGAINST A SUBJECT.
// It was inherited from a2.01 and copied six times. Checked before this build
// was sized: there is NO ceiling on section count in schema.ts — the only
// assertion is `sections must not be empty` — and the corpus has already shipped
// 31 sections (sons.05.l1), 145 quiz questions (a1.30.l1) and a 100 KiB body
// (a1.19.l1) on real devices.
//
// The subject needs the room. a2.12 carried one Owns and one trap in twenty-four
// missions. This carries one Owns and FOUR contexts:
//
//   the grid           three paradigms, eighteen cells, one frame
//   the Owns           a modal plus any verb at all, including unseen ones
//   the register       je veux against je voudrais, and a1.01's debt
//   pouvoir's senses   permission, possibility, ability
//   il faut            an impersonal nobody owns
//   devoir as owe      the same word with no verb behind it
//
// Squeezed into twenty-four, three of those become a single card each, which is
// the shape that teaches nothing.
//
// ── The Owns: the second verb never changes ───────────────────────────────
//
// Six lessons of building forms have been leading to a point where building them
// stops being necessary, and this is it. The act structure says so:
//
//   act 2   the grid                        5 missions
//   act 3   and any verb behind them        7 missions
//
// Seven against five, and act 3 holds the generalisation mission, which is the
// reason the lesson exists: the learner is handed `arroser`, a verb from a theme
// this lesson names nowhere, and asked to build the whole sentence. If that ever
// inverts, this has become another table lesson and doctrine §B.5 has been lost.
//
// ── EVERY INFINITIVE IN THIS LESSON IS IMPORTED ───────────────────────────
//
// payer · commander · attendre · choisir · boire · acheter · aider · chercher ·
// conduire · arriver, out of ten themes, and not one authored. The corpus makes
// the same claim the missions make. `infinitiveId()` throws on a verb that is
// not in the manifest, so a screen cannot quietly invent one.
//
// ── ONE FRAME, WHICH NO EARLIER LESSON IN THE BAND MANAGED ────────────────
//
// All eighteen cells sit on `payer`. a2.02 needed three frames and so did a2.12,
// because their sentences ran past the dictée's 16-letter limit. Measured
// through the real `dicteeMode`: all eighteen spell from LETTERS and the longest
// is exactly 16. One letter more and the grid would have had to shrink.
//
// That is what makes the comparison real. A learner reading `Je veux payer` and
// `Je peux payer` sees a two-letter difference and nothing else moving.
//
// ── Layout notes that are bugs, not preferences ───────────────────────────
//
// - A `table` at layer core is a table-in-core density failure, so the grid
//   lives in the sheet and the flow gets `examples`.
// - `size` is not decoration. density.logic.ts reads `xl` as a 12-word cap on
//   EVERY string in the section except `say`, `hint`, `note`, `why` and `tip`.
//   s09-second is the only xl section here.
// - `commonErrors` needs `swipe: true` or it renders a blank screen.
// - `reading` needs `questionsInModal` WITH questions, and PassagePage splits on
//   sentence boundaries, so s28-reading is ONE line.
// - Three term chips per section, maximum.
// - ONE quiz per lesson. lessonPager.logic.ts takes `sections.find(quiz)` and a
//   second one is silently never rendered.
// - `listenChoose` MUST NOT be used on veux/veut, peux/peut or dois/doit. They
//   are homophones and a question asking a learner to tell them apart by ear
//   would certify a bug. s08-singular TEACHES that they cannot be told apart,
//   which is the only correct use of the ear on these forms, and the batch
//   refuses the format anywhere in the quiz.

import type {
  ErrorTrigger,
  Lesson,
  LessonAct,
  LessonDrill,
  LessonSection,
  ReferenceSheet,
  SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  ENDINGS_CLAIM,
  MODAUX_TERMS,
  NOT_THE_VERBS,
  NOUS_ON,
  REACH_CLAIM,
  REFRAME,
  SINGULAR_CLAIM,
  STEM_CLAIM,
  WHAT_FOLLOWS,
  WHAT_FOLLOWS_UNIT,
} from './modaux-terms.ts';
import { REFRAME as A201_REFRAME } from './verbes-er-terms.ts';
import { REFRAME as A202_REFRAME } from './aller-venir-terms.ts';
import {
  A1_01_REFRAME,
  A1_01_UNIT,
  AUTHORED_IDS,
  BY_ID,
  DICTATION_IDS,
  DEVOIR_OWE_ID,
  ENDINGS,
  FRAME_VERB,
  IL_FAUT,
  MODAL_ORDER,
  PARADIGM,
  PARADIGM_IDS,
  POLITE_FORMS,
  POUVOIR_SENSES,
  RESERVED_FOR_NEIGHBOURS,
  SINGULAR_PERSONS,
  SINGULAR_SPELLINGS,
  STEMS,
  THE_NEW_ENDING,
  THE_NEW_ENDING_FORMS,
  UNSEEN_VERB,
  bare,
  en,
  fr,
  noStop,
  paradigmIds,
  sub,
  type Modal,
} from './modaux-corpus.ts';
import {
  IMPORTED_IDS,
  INFINITIVES,
  importedCard,
  importedEn,
  importedFr,
  infinitiveCard,
  infinitiveId,
  registerId,
  repairedRespell,
  sentenceId,
  unseenRespell,
  verbCard,
  verbId,
} from './modaux-imported.ts';

export {
  A201_REFRAME, A202_REFRAME, ENDINGS_CLAIM, NOT_THE_VERBS, NOUS_ON, REACH_CLAIM,
  REFRAME, SINGULAR_CLAIM, STEM_CLAIM, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT,
};

/* ─── Named section ids, so a guard asserts a PLACE rather than a pattern ──
 *
 * Every one of these is a claim the brief makes about layout, and a guard that
 * searched the whole lesson for the right strings would pass if they turned up
 * in the wrong section. a2.12 established the shape: name the section, then
 * assert its contents by index.
 *
 * These are plain literals rather than reads off SECTIONS, so that a section
 * being RENAMED breaks the guard instead of quietly moving it.               */

/** The single grid. The brief: "The three modals belong in one grid, side by
 *  side. This is the layout the test must assert." */
export const GRID_SECTION_ID = 's05-grid';
/** The stem recipe, which is the only thing in eighteen cells worth deriving. */
export const STEMS_SECTION_ID = 's06-stems';
/** The homophone mission. The one correct use of the ear on these forms. */
export const SINGULAR_SECTION_ID = 's08-singular';
/** THE MISSION THE LESSON EXISTS FOR. */
export const UNSEEN_SECTION_ID = 's13-unseen';
/** The register contrast. The brief: "je veux and je voudrais belong on one
 *  screen, two columns, with the social consequence stated beside each. This is
 *  the second required contrast." */
export const REGISTER_SECTION_ID = 's16-register';
/** The three senses of pouvoir. */
export const SENSES_SECTION_ID = 's19-senses';
/** Where the neighbours are handed their material back. */
export const BOUNDARY_SECTION_ID = 's24-notmine';
/** The ONLY home of a2.01's nous/on statement in this lesson. */
export const NOUS_ON_SECTION_ID = 's27-scenario';
/** The one reference sheet. */
export const SHEET_ID = 'sheet.a2.13.modaux';

/** The four rows the register section puts on one screen, in the order it
 *  renders them: blunt, polite, blunt, polite. The ORDER is the mission, so the
 *  guards check it by index rather than by membership. */
export const REGISTER_ROW_ORDER = [
  'fr.a2.verbes.341',
  'fr.a2.verbes.362',
  'fr.a1.verbes-du-quotidien.035',
  'fr.a1.cafe.051',
] as const;

/* ─── The items this lesson touches ────────────────────────────────────────
 *
 * 30 authored plus 21 imported by id, out of ELEVEN themes. Three imported words
 * and three imported sentences are repaired, two gain a respelling they never
 * had, and one gains a `flashcard` drill; nothing else about any of them moves.
 *
 * `arroser` IS NOT HERE. It is the unseen verb, it is read from Postgres by the
 * manifest so the mission can print a checked respelling, and it reaches no card,
 * no deck and no term. The batch asserts its absence from this array, because the
 * absence IS the lesson's claim.                                              */

const ITEM_IDS = [...new Set([...AUTHORED_IDS, ...IMPORTED_IDS])];

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. The eighteen grid rows plus the two
 *  polite forms plus the four situation rows: every one is a full sentence with
 *  a person in front of it, which is the shape a2.01 settled is worth saying. */
const SPEAK_IDS = [
  ...PARADIGM_IDS,
  'fr.a2.verbes.362', 'fr.a2.verbes.363',
  'fr.a2.verbes.359', 'fr.a2.verbes.365', 'fr.a2.verbes.366', 'fr.a2.verbes.367', 'fr.a2.verbes.368',
];

/** One authored row as a groupDrill item, so no screen restates a gloss or a
 *  respelling the corpus already holds. */
const rowCard = (id: string) => ({ fr: fr(id), itemId: id, respell: sub(id), en: en(id) });

/** The six ids of one verb's column. */
const col = (m: Modal): string[] => paradigmIds(m);

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The brief asks for the one place in batch 1 where an A1-register scene is
 * defensible, because the failure genuinely is social — and asks for the A2
 * register anyway if it can be found: somebody who knows the word for the thing
 * they want and cannot build the sentence around it, so they point instead, and
 * get the wrong one.
 *
 * That is exactly what is staged. The learner HAS `payer` and `choisir`; they
 * have had them since A1. What stops the sentence is that neither of them has a
 * front. A verb with nobody in front of it is not a sentence in French, and the
 * gap between « Payer ? » and « Je peux payer ? » is two words the learner does
 * not yet own.
 *
 * Beats carry their own `size` and `audio`. The section sets NO size:
 * ownsLayout() ignores it and density.logic.ts would read xl as a 12-word cap.  */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A bakery in Nantes on a Saturday, ten minutes before it shuts. Four people behind you. There are two kinds of loaf on the shelf and you want the round one.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'La boulangère',
    fr: 'Bonjour, je vous écoute.',
    en: 'Hello, what can I get you?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-13-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Le pain... choisir ?',
    en: 'Bread... choose?',
    stage: 'You know the word for the loaf and you know the word for choosing. What you cannot do is put yourself in front of either of them.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'Her hand is already moving. What goes out?',
    options: [
      {
        fr: 'Je peux choisir ?',
        en: 'two words in front, and it is a request',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Le pain, là.',
        en: 'pointing, and hoping',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'She turns the tray towards you and waits. Nothing about that was difficult.',
      breaks: 'She takes the nearest one, wraps it, and is already looking past you at the next person.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La boulangère',
    fr: 'Voilà. Et avec ceci ?',
    en: 'There you are. Anything else?',
    stage: 'It is a baguette. You had both verbs the whole time and neither of them had a front.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-13-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    // BUDGETED, not chosen. `scene` is absent from ownsLayout(), so the card
    // cannot size itself, and a2.01 took three device passes on a Pixel 6 to
    // establish what fits: a heading of about 13 characters, a body of 24 to 26
    // words, a coach line under 9, and a reading-row `fr` under about 22.
    // Ledger §7. Asserted by a2-13-modaux.test.ts rather than trusted here.
    heading: 'The front',
    body: 'You had the verb for choosing. What you did not have was the two words that go in front of it and make it a sentence.',
    // THE WRONG ROW CARRIES NO RESPELLING and the right one does, which is the
    // ledger §7 budget: a row with both `ipa` and `respell` is four lines on its
    // own and only one of the two can afford it.
    wrong: {
      fr: 'Payer ?',
      ipa: '/pe.je/',
      en: 'a verb with nobody in it',
    },
    right: {
      fr: fr('fr.a2.verbes.347'),
      ipa: '/ʒə pø pe.je/',
      respell: sub('fr.a2.verbes.347'),
      en: 'two words, and now it is yours',
    },
    coach: 'Two words in front.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-13-frame' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Nobody was rude and nothing was mispronounced. You got the wrong loaf because the front of the sentence was missing, and there are only three words that go there.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the sentence with no front ─────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Round One',
    frSub: 'Le pain rond',
    render: 'screens',
    layer: 'core',
    terms: ['theReach', 'theSecondVerb'],
    say: {
      text: 'Nobody is impatient here. Watch what happens when you have the verb and nothing to put in front of it.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A bakery, ten minutes before closing',
      city: 'Nantes',
      time: 'Saturday, just before one',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} ${REACH_CLAIM}`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    // NOT the house heading `Ce que vous saurez faire`. That is a form of
    // savoir, which a2.14 owns outright, and the roundup's `Ce que vous savez
    // faire` was caught by this build's own guard. This lesson teaches pouvoir,
    // so it names its goals with pouvoir, which is better copy as well as safer.
    frSub: 'Ce que vous allez pouvoir faire',
    layer: 'core',
    say: `${REFRAME} By the end you will be able to use verbs this course has never taught you.`,
    goals: [
      { t: 'Say what you want, can and must do', s: 'Three verbs, eighteen forms, and one of them in front of anything else you want to say.' },
      { t: 'Use a verb nobody taught you', s: 'Put any verb straight after one of these three, in the shape the dictionary gives it, and it is correct.' },
      { t: 'Ask instead of demanding', s: `${POLITE_FORMS[0]} rather than veux. Both are correct French and only one of them gets you served.` },
      { t: 'Hear why the pronoun is not optional', s: 'Three persons of each verb are one sound. In speech the word in front is the only thing separating them.' },
    ],
  },

  {
    // THE OPENING MOVE, and it is a placement rather than an introduction.
    // Both predecessors' reframes are imported from their own terms files so a
    // rewording there moves this card too.
    type: 'cardDeck',
    id: 's03-reach',
    title: 'Three Verbs, And Then Any Verb',
    frSub: 'Trois verbes, et puis tous les autres',
    hint: 'Swipe through the four cards. The third one is the whole lesson.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theReach', 'theSecondVerb'],
    say: 'Four cards. Read the third one twice, and then look at what the fourth one costs you.',
    cards: [
      {
        label: 'What you have',
        head: 'Six lessons of building',
        body: `${A201_REFRAME} ${A202_REFRAME} And a2.12 gave you three more that had to be learned whole.`,
      },
      {
        label: 'What is different',
        head: 'The last three of that kind',
        fr: MODAL_ORDER.join(' · '),
        sub: 'eighteen forms, and one new letter in all of them',
        body: 'These three do not come apart either. But they are the last three you will meet like this, and what they buy is bigger than what they cost.',
      },
      {
        label: 'What they buy',
        head: 'The second verb never moves',
        fr: fr('fr.a2.verbes.341'),
        sub: sub('fr.a2.verbes.341'),
        body: `${REFRAME} Change the front and the back holds still. It does not matter what kind of verb it is or whether you have ever seen it.`,
      },
      {
        label: 'What it costs',
        head: 'About ten minutes',
        fr: `${STEMS.vouloir.singular} + ${STEMS.vouloir.nous.slice(-1)} = ${STEMS.vouloir.ils}`,
        sub: 'and the same recipe on the other two',
        body: `${ENDINGS_CLAIM} There is a pattern under all three and it does not break once.`,
      },
    ],
  },

  /* ── Act 2: the grid ───────────────────────────────────────────────────── */

  {
    // THE THREE NAMING FORMS. A groupDrill, because this is where all three
    // imported rows have to reach a screen: a1.08 declared 43 itemIds that
    // resolved perfectly and were drawn by nothing.
    type: 'groupDrill',
    id: 's04-verbs',
    title: 'The Three, And The One Behind Them',
    frSub: 'Les trois verbes',
    layer: 'core',
    size: 'lg',
    terms: ['theReach', 'theSecondVerb'],
    sheetId: 'sheet.a2.13.modaux',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-13-verbs' },
    say: 'Three naming forms, then the verb that will sit behind every one of them for the rest of the lesson.',
    groups: [
      {
        label: 'The three you learn',
        items: MODAL_ORDER.map((m) => verbCard(m)),
        check: {
          q: 'What do these three let you do that no verb before them did?',
          opts: ['Ask a question', 'Put another verb straight after them', 'Talk about yesterday', 'Describe a thing'],
          correct: 1,
          why: `${REFRAME} That is the whole payoff, and it is why these three are worth ten minutes.`,
        },
      },
      {
        label: 'And the verb behind them',
        items: [infinitiveCard(FRAME_VERB)],
        check: {
          q: `Every sentence in the next mission ends in ${FRAME_VERB}. Why one verb and not eighteen different ones?`,
          opts: ['It is the easiest one', 'So that only the front of the sentence changes', 'It is the most useful one', 'There were no others'],
          correct: 1,
          why: 'If the back of the sentence never moves, everything you notice is happening at the front. That is what the grid is for.',
        },
      },
    ],
  },

  {
    // THE SINGLE GRID, AS EXAMPLES RATHER THAN AS A TABLE.
    //
    // The brief asks for ONE grid with the three side by side rather than three
    // tables, and says the test must assert it. A `table` at layer core is a
    // table-in-core density failure, so the grid itself lives in the sheet and
    // the flow gets the same six rows as examples, one line per person, all
    // three verbs on each line.
    //
    // Every line reads its forms out of PARADIGM, so no cell here can disagree
    // with the sheet or with the drill that scores it.
    type: 'examples',
    id: 's05-grid',
    title: 'All Three, One Line Each',
    frSub: 'Les trois, côte à côte',
    layer: 'core',
    terms: ['theStems', 'theSingular'],
    sheetId: 'sheet.a2.13.modaux',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-13-frame' },
    say: 'Six lines, three verbs on each. Read down a column and you will see the same three shapes every time.',
    examples: PARADIGM.map((r, i) => ({
      fr: MODAL_ORDER.map((m) => r.forms[m]).join(' · '),
      en: r.person,
      note: i < 3
        ? 'One sound across all three of these lines. Only the word in front tells them apart.'
        : (i === 5
          ? 'The short stem, plus one letter borrowed from the line above it.'
          : 'The long stem, and an ending you have had since a2.01.'),
    })),
  },

  {
    // THE STEM RECIPE, WHICH IS THE WHOLE OF THE IRREGULARITY.
    //
    // Three groups, one per verb, each showing the singular stem, the nous stem
    // and the ils stem DERIVED from the two. The claim that the recipe holds for
    // all three identically is the thing worth teaching; the eighteen cells are
    // its consequence.
    type: 'groupDrill',
    id: 's06-stems',
    title: 'Two Stems, And One You Work Out',
    frSub: 'La recette',
    layer: 'core',
    size: 'lg',
    terms: ['theStems'],
    sheetId: 'sheet.a2.13.modaux',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-13-frame' },
    say: `Three groups, one per verb. In each one, the last card is built from the other two. ${STEM_CLAIM}`,
    groups: MODAL_ORDER.map((m) => ({
      label: `${m}: ${STEMS[m].singular}- · ${STEMS[m].nous}- · ${STEMS[m].ils}-`,
      items: [col(m)[0], col(m)[3], col(m)[5]].map(rowCard),
      check: {
        q: `Where does the ${STEMS[m].ils}- of ${PARADIGM[5].forms[m]} come from?`,
        opts: [
          'It has to be memorised on its own',
          `${STEMS[m].singular} plus the last letter of ${STEMS[m].nous}`,
          `${STEMS[m].nous} with a letter taken away`,
          'It is the same as the naming form',
        ],
        correct: 1,
        why: `${STEMS[m].singular} + ${STEMS[m].nous.slice(-1)} = ${STEMS[m].ils}. The same recipe works on all three verbs and it does not break once.`,
      },
    })),
  },

  {
    // THE ONE NEW THING IN EIGHTEEN CELLS.
    //
    // Five of six endings are already the learner's. Saying that plainly is
    // worth more than eighteen cards, and it is the opposite of what a learner
    // expects from a lesson called "irregular verbs 3".
    type: 'groupDrill',
    id: 's07-newletter',
    title: 'One Letter You Have Not Written',
    frSub: `Le -${THE_NEW_ENDING}`,
    layer: 'core',
    size: 'lg',
    terms: ['theNewLetter', 'theStems'],
    sheetId: 'sheet.a2.13.modaux',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-13-singular' },
    say: `${ENDINGS_CLAIM} Find it in the first group, and then notice that the third verb does not take it.`,
    groups: [
      {
        label: `The two that take -${THE_NEW_ENDING}`,
        items: [col('vouloir')[0], col('pouvoir')[0]].map(rowCard),
        check: {
          q: `What does the -${THE_NEW_ENDING} on ${THE_NEW_ENDING_FORMS.join(' and ')} sound like?`,
          opts: ['A soft s', 'A k', 'Nothing at all', 'It lengthens the vowel'],
          correct: 2,
          why: `Nothing. It is silent, exactly as the -s has been silent on every verb since a2.01. One new letter to write and nothing new to say.`,
        },
      },
      {
        label: 'And the one that does not',
        items: [col('devoir')[0]].map(rowCard),
        check: {
          q: 'Why does this one end in -s rather than the new letter?',
          opts: ['It is a mistake', 'It is the ordinary singular you met on the -RE verbs', 'It is older', 'There is no reason'],
          correct: 1,
          why: 'dois takes the plain -s you already write. Two of the three take the new letter and the third does not, which is worth knowing before you write any of them.',
        },
      },
      {
        label: 'The endings you already own',
        items: [col('devoir')[3], col('devoir')[4], col('devoir')[5]].map(rowCard),
        check: {
          q: `How many of the six endings in this lesson are ones you have written before?`,
          opts: [String(ENDINGS.length), String(ENDINGS.filter((e) => e.owned).length), '2', 'None'],
          correct: 1,
          why: ENDINGS_CLAIM,
        },
      },
    ],
  },

  {
    // THE EAR, USED FOR THE ONLY THING IT CAN DO HERE.
    //
    // veux/veut, peux/peut and dois/doit are HOMOPHONES. The brief says
    // listenChoose must not be used to test them because it would certify a bug,
    // and this section does the opposite: it proves by ear that they cannot be
    // separated, and asks what the learner used instead.
    //
    // NOTE THE DIRECTION AGAINST a2.12. There the number pair was audible on all
    // three verbs and the ear was the evidence. Here the singular is inaudible
    // on all three and the ear is the evidence FOR that.
    type: 'listening',
    id: 's08-singular',
    title: 'Three Persons, One Sound',
    frSub: SINGULAR_CLAIM,
    layer: 'core',
    questionsInModal: true,
    terms: ['theSingular', 'nousOn'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-13-singular' },
    say: 'Nine lines. Listen before you read, and try to tell the first three apart on sound alone.',
    lines: [
      ...col('vouloir').slice(0, 3),
      ...col('pouvoir').slice(0, 3),
      ...col('devoir').slice(0, 3),
    ].map((id) => ({ fr: fr(id), en: en(id) })),
    questions: [
      {
        q: `${noStop(fr(col('vouloir')[0]))}, ${noStop(fr(col('vouloir')[1]))}, ${noStop(fr(col('vouloir')[2]))}. What is different in the verb?`,
        opts: ['The vowel changes on the third', 'A consonant arrives', 'Nothing at all', 'The stress moves'],
        correct: 2,
        why: `Nothing. ${SINGULAR_CLAIM} Two of them are spelled identically as well, and the third differs by one silent letter.`,
      },
      {
        q: 'So what told you which one it was?',
        opts: ['The verb', 'The word in front of it', 'The speed', 'Nothing did'],
        correct: 1,
        why: 'The pronoun. This is why it is never optional in French: on these forms it is carrying the whole of the information.',
      },
      {
        q: `Now the other two verbs. Is ${noStop(fr(col('pouvoir')[2]))} distinguishable from ${noStop(fr(col('pouvoir')[0]))} by ear?`,
        opts: ['Yes, clearly', 'Only at slow speed', 'No, they are one sound', 'Only in a question'],
        correct: 2,
        why: 'No, and slowing the recording will not help, because there is nothing there to slow down. The same is true of dois and doit.',
      },
      {
        q: 'Which of the six forms in this lesson can the ear actually separate?',
        opts: ['None of them', 'The nous and vous forms, and the plural', 'Only the plural', 'All of them'],
        correct: 1,
        why: 'nous and vous both add a syllable, and the plural adds a consonant at the end. The three singular cells are where the ear stops being useful.',
      },
    ],
  },

  /* ── Act 3: and any verb behind them. THE OWNS, seven missions. ────────── */

  {
    // The only xl section in the lesson, and the one place xl is correct: every
    // display string is short by construction. density.logic.ts caps EVERY
    // string in an xl section at 12 words except say, hint, note, why and tip.
    type: 'cardDeck',
    id: 's09-second',
    title: 'The Verb That Never Moves',
    frSub: 'Le deuxième verbe',
    hint: 'Swipe. Same second verb every time, three different fronts.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    terms: ['theSecondVerb', 'theReach'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-13-frame' },
    say: `${REFRAME} Listen to each one before you read it, and watch only the front.`,
    cards: [
      { label: '1 of 4', head: 'Wanting to', fr: fr('fr.a2.verbes.341'), sub: sub('fr.a2.verbes.341'), body: 'The front changed. Nothing else did.' },
      { label: '2 of 4', head: 'Being able to', fr: fr('fr.a2.verbes.347'), sub: sub('fr.a2.verbes.347'), body: 'Again. The back is untouched.' },
      { label: '3 of 4', head: 'Having to', fr: fr('fr.a2.verbes.353'), sub: sub('fr.a2.verbes.353'), body: 'Three fronts, one back.' },
      { label: '4 of 4', head: 'And asking nicely', fr: fr('fr.a2.verbes.362'), sub: sub('fr.a2.verbes.362'), body: 'A fourth front. Still nothing behind it.' },
    ],
  },

  {
    // THE FRAME, ALL EIGHTEEN CELLS, THREE GROUPS.
    //
    // This is the mission the grid in s05 was a map of. Three groups, six cards
    // each, and the check on each group is about the SHAPE rather than the
    // vocabulary, because the vocabulary is one word and it never changes.
    type: 'groupDrill',
    id: 's10-frames',
    title: 'Eighteen Sentences, One Ending',
    frSub: 'Le cadre',
    layer: 'core',
    size: 'lg',
    terms: ['theStems', 'theSecondVerb'],
    sheetId: 'sheet.a2.13.modaux',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-13-frame' },
    say: `Eighteen sentences and every one of them ends in ${FRAME_VERB}. Everything you notice is happening at the front.`,
    groups: MODAL_ORDER.map((m) => ({
      label: `${m}, all six`,
      items: col(m).map(rowCard),
      check: {
        q: `In all six of those, what happened to ${FRAME_VERB}?`,
        opts: ['It took an ending in the plural', 'It changed for nous and vous', 'Nothing at all', 'It lost a letter'],
        correct: 2,
        why: `Nothing, in any of the six. ${REFRAME} It is the same six letters in every sentence on this screen.`,
      },
    })),
  },

  {
    // THE TEN IMPORTED VERBS, AS THEMSELVES.
    //
    // Every one of these came from another theme and this lesson teaches none of
    // them. They are here so the learner has something to put behind a modal
    // that is not `payer`, and so the claim that the second verb is somebody
    // else's is visible in the cards rather than only in the prose.
    type: 'groupDrill',
    id: 's11-infinitives',
    title: 'Ten Verbs From Other Lessons',
    frSub: `${INFINITIVES.length} verbes empruntés`,
    layer: 'core',
    size: 'lg',
    terms: ['theSecondVerb'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-13-verbs' },
    say: `${NOT_THE_VERBS} None of these is taught here. They are here to be put behind one of the three.`,
    groups: [
      {
        label: 'Five you will use today',
        items: INFINITIVES.slice(0, 5).map((v) => infinitiveCard(v)),
        check: {
          q: 'What do you have to do to any of these before putting it after je peux?',
          opts: ['Add an ending', 'Take the ending off', 'Nothing', 'Change the first letter'],
          correct: 2,
          why: `Nothing at all. ${REFRAME} They go in exactly as they are written on these cards.`,
        },
      },
      {
        label: 'And five more',
        items: INFINITIVES.slice(5).map((v) => infinitiveCard(v)),
        check: {
          q: 'These five come from five different lessons. Does that change how they behave here?',
          opts: ['Yes, the -IR ones need an ending', 'Yes, the -RE ones drop the e', 'No, all of them behave identically', 'Only the A1 ones work'],
          correct: 2,
          why: 'No. An -ER verb, an -IR verb and an -RE verb all do the same thing after one of these three, which is nothing.',
        },
      },
    ],
  },

  {
    // THE SITUATIONS. Four rows, four imported verbs, four places a learner
    // stands. The point of this mission is that the frame survives leaving the
    // frame: the same shape works when the second verb is not `payer` and the
    // sentence has something after it.
    type: 'groupDrill',
    id: 's12-situations',
    title: 'Out Of The Frame',
    frSub: 'En situation',
    layer: 'core',
    size: 'lg',
    terms: ['theSecondVerb', 'theReach'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-13-frame' },
    say: 'Four real sentences, four different second verbs, and one of them has a whole phrase after it.',
    groups: [
      {
        label: 'Four you could use this week',
        items: ['fr.a2.verbes.365', 'fr.a2.verbes.366', 'fr.a2.verbes.367', 'fr.a2.verbes.368'].map(rowCard),
        check: {
          q: 'One of these four has more than just a verb after the front. Which?',
          opts: [fr('fr.a2.verbes.366'), fr('fr.a2.verbes.368'), fr('fr.a2.verbes.367'), 'None of them'],
          correct: 2,
          why: `${fr('fr.a2.verbes.367')} The bus comes after the verb, and the verb still did not change. Whatever follows it belongs to the second verb, not to the front.`,
        },
      },
      {
        label: 'And three that already existed',
        // ALL THREE imported modal frames are drawn HERE and nowhere else. An
        // itemId that resolves perfectly and is drawn by nothing is the a1.08
        // defect: 43 of them, all valid, none on a screen.
        items: [
          sentenceId('Nous devons partir avant midi.'),
          sentenceId('Tu peux ouvrir la fenêtre, s\'il te plaît ?'),
          sentenceId('Elle veut devenir médecin.'),
        ].map((id) => importedCard(id)),
        check: {
          q: 'These three were written for other lessons entirely. What shape are they?',
          opts: ['A question and a statement', 'The same shape as everything on this screen', 'Three exceptions', 'Older French'],
          correct: 1,
          why: 'The same shape. Once you can see it, you will find it everywhere in what you have already been taught, because it was always there.',
        },
      },
    ],
  },

  {
    // THE GENERALISATION MISSION. THE REASON THIS LESSON EXISTS.
    //
    // The brief: "Hand them an infinitive from A1 vocabulary — a verb this
    // lesson never lists — and make them produce the whole sentence. That
    // mission is the reason this lesson exists, and it should be the last one
    // before the quiz."
    //
    // It is not literally the last before the quiz, because three acts of
    // context and production follow, and burying the proof twenty missions deep
    // would be worse. It is the LAST MISSION OF THE OWNS ACT, which is the same
    // structural position: nothing else in the act follows it.
    //
    // `arroser` IS NOT IN itemIds, NOT IN A DECK AND NOT A TERM. The moment the
    // lesson hands the learner a card for it, the lesson has taught it and the
    // claim being tested is gone. Its respelling comes through unseenRespell(),
    // which checks the printed value against Postgres.
    type: 'trapDrill',
    id: 's13-unseen',
    title: 'A Verb Nobody Taught You',
    frSub: 'Un verbe inconnu',
    layer: 'core',
    swipe: true,
    terms: ['theUnseen', 'theSecondVerb'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-13-unseen' },
    say: `One new word, and then four sentences you can build with it. You have not been taught ${UNSEEN_VERB.fr} and you do not need to be.`,
    rule: {
      title: 'One word, four sentences',
      body: `${UNSEEN_VERB.fr} [${unseenRespell()}] means ${UNSEEN_VERB.en}. That is all you are getting. Put it behind any of the three fronts you have just learned and the sentence is correct.`,
    },
    cards: [
      {
        promptLabel: 'the word, and nothing else',
        promptSound: unseenRespell(),
        fr: fr(UNSEEN_VERB.answerIds[0]),
        ipa: '/ʒə pø a.ʁo.ze lə ʒaʁ.dɛ̃/',
        tip: `You have never seen ${UNSEEN_VERB.fr} in this course. It went in exactly as it was written, because that is what happens after these three.`,
      },
      {
        promptLabel: 'and behind a different front',
        promptSound: bare(UNSEEN_VERB.answerIds[0]),
        fr: fr(UNSEEN_VERB.answerIds[1]),
        ipa: '/ty dwa a.ʁo.ze lə ʒaʁ.dɛ̃/',
        tip: 'The front changed and the new word did not. That is the same thing you watched happen to payer eighteen times.',
      },
      {
        promptLabel: 'a verb you did meet',
        promptSound: bare('fr.a2.verbes.353'),
        fr: fr('fr.a2.verbes.365'),
        ipa: '/ʒə dwa aʃ.te dy pɛ̃/',
        tip: 'acheter came from a1 and was never taught here either. There is no difference in how it behaves.',
      },
      {
        promptLabel: 'and one from the bakery',
        promptSound: bare('fr.a2.verbes.347'),
        fr: fr('fr.a2.verbes.359'),
        ipa: '/ʒə pø kɔ.mɑ̃.de/',
        tip: 'This is the sentence that was missing at the counter. Two words in front of a verb you already had.',
      },
    ],
    drill: [
      { promptSay: `je peux ${UNSEEN_VERB.fr} le jardin`, opts: [bare(UNSEEN_VERB.answerIds[0]), bare(UNSEEN_VERB.answerIds[1]), bare('fr.a2.verbes.365')], correct: 0 },
      { promptSay: `tu dois ${UNSEEN_VERB.fr} le jardin`, opts: [bare('fr.a2.verbes.353'), bare(UNSEEN_VERB.answerIds[1]), bare(UNSEEN_VERB.answerIds[0])], correct: 1 },
      { promptSay: 'je dois acheter du pain', opts: [bare('fr.a2.verbes.365'), bare('fr.a2.verbes.366'), bare('fr.a2.verbes.367')], correct: 0 },
      { promptSay: 'nous devons attendre le bus', opts: [bare('fr.a2.verbes.368'), bare('fr.a2.verbes.365'), bare('fr.a2.verbes.367')], correct: 2 },
      { promptSay: 'vous voulez choisir', opts: [bare('fr.a2.verbes.368'), bare('fr.a2.verbes.366'), bare('fr.a2.verbes.359')], correct: 0 },
      { promptSay: 'tu peux m\'aider', opts: [bare('fr.a2.verbes.359'), bare('fr.a2.verbes.366'), bare('fr.a2.verbes.365')], correct: 1 },
    ],
    steps: [
      { label: 'The word', kind: 'rule', title: 'One New Word' },
      { label: 'The sentences', kind: 'cards', title: 'Four You Can Build' },
      { label: 'Hear it', kind: 'audio', title: 'Wrong, Then Right' },
      { label: 'Prove it', kind: 'drill', title: 'Which One Did You Say?', gate: true },
    ],
  },

  {
    // THE CLOSE OF THE OWNS ACT: what the learner has actually just done.
    type: 'cardDeck',
    id: 's14-generalise',
    title: 'What You Just Did',
    frSub: 'Ce que vous venez de faire',
    hint: 'Three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theUnseen', 'theReach'],
    say: 'Three cards, and the middle one is the number that matters.',
    cards: [
      {
        label: 'What happened',
        head: 'A word, then a sentence',
        body: `You were given ${UNSEEN_VERB.fr} thirty seconds before you used it, with no explanation of what kind of verb it is, and you built two correct sentences with it.`,
      },
      {
        label: 'How far it goes',
        head: 'Every verb in the language',
        body: `${REFRAME} There are roughly eleven thousand verbs in French and this works on all of them. Nothing you learn later takes it away.`,
      },
      {
        label: 'What is left',
        head: 'The part that is not grammar',
        body: `${POLITE_FORMS[0]} rather than veux, and knowing which of three English words pouvoir is doing. Both are about how the sentence lands, not whether it is correct.`,
      },
    ],
  },

  {
    // THE READING PASSAGE, PLACED INSIDE THE OWNS ACT RATHER THAN IN
    // PRODUCTION, because its job here is EVIDENCE: the shape the learner has
    // just been taught is already all over French they can read.
    type: 'reading',
    id: 's15-evidence',
    title: 'Back At The Counter',
    frSub: 'Au comptoir',
    layer: 'core',
    terms: ['theSecondVerb', 'theSingular'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage) only when this flag is
    // set WITH questions.
    questionsInModal: true,
    say: 'Read it once for the shape. The same three verbs are doing all the work. Tap any word you do not know.',
    // ONE LINE, deliberately. PassagePage does text.split(/(?<=[.!?»])\s+/) and
    // renders the pieces inline in a single TX, so every authored newline is
    // swallowed.
    //
    // THE A1 RULE, WHICH HOLDS AT A2 (Paul, 2026-08-04): if it is not inside
    // « », it is in English.
    text:
      'The next Saturday, and the same bakery, and this time there is no queue. '
      + '« Bonjour. Je voudrais le pain rond, s\'il vous plaît. » '
      + 'She reaches for it without looking up. '
      + '« Je peux payer par carte ? » '
      + '« Bien sûr. » '
      + 'A man behind you is explaining to a child that they have to wait. '
      + '« On doit attendre. Tu peux choisir après. » '
      + 'Eight words from him and three of them are the front of a sentence, and the child understands every one.',
    // Every entry is a single whitespace-delimited token that really appears
    // between the guillemets: the reader strips punctuation and lowercases
    // before matching, so an entry that is not a bare token is an underline that
    // never appears. MAX_GLOSS_WORDS is four and every key here is one word.
    glossary: [
      { word: 'voudrais', en: 'would like', note: 'The polite one. Learn it whole; it is not built from anything you have.' },
      { word: 'peux', en: 'can, may', note: 'Asking to be allowed. Same word as being able.' },
      { word: 'doit', en: 'has to', note: 'The il form, and it sounds exactly like dois.' },
      { word: 'attendre', en: 'to wait', note: 'A verb from another lesson, and it did not change one letter.' },
      { word: 'choisir', en: 'to choose', note: 'Another one. After tu peux, nothing happens to it.' },
    ],
    questions: [
      { q: 'Four sentences in the passage have two verbs in them. What happened to the second verb in each?', a: 'Nothing. payer, attendre and choisir are all written exactly as they appear in a dictionary, and they come from three different verb families. The front of the sentence took all the change.' },
      { q: '« Je voudrais le pain rond ». Why not « Je veux le pain rond »?', a: 'Both are correct French. The first is a request and the second is a demand, and in a shop the difference decides how the next thirty seconds go. It is the same choice you make in English between I would like and I want.' },
      { q: '« On doit attendre. » Who has to wait?', a: 'Both of them, and anybody else in the queue. on means we here and it takes the same form as il, which is why it is doit rather than devons.' },
    ],
  },

  /* ── Act 4: asking, not demanding ──────────────────────────────────────── */

  {
    // THE REGISTER CONTRAST, AND THE BRIEF SAYS IT MUST BE ON ONE SCREEN, TWO
    // COLUMNS, WITH THE SOCIAL CONSEQUENCE BESIDE EACH.
    //
    // The pair used is INSIDE THE FRAME: fr.a2.verbes.341 and fr.a2.verbes.362
    // are the same sentence with one word changed, so the learner sees that
    // nothing else moved. The imported café pair follows as corroboration and
    // because it is the sentence a1.01 already put in their mouth.
    type: 'examples',
    id: 's16-register',
    title: 'Two Ways To Ask For The Same Thing',
    frSub: 'Demander ou exiger',
    layer: 'core',
    terms: ['thePolite', 'theRegister'],
    sheetId: 'sheet.a2.13.modaux',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-13-register' },
    say: 'Four lines in two pairs. Both halves of every pair are correct French, and only one half of each gets you served.',
    examples: [
      { fr: fr('fr.a2.verbes.341'), en: 'correct, and it lands as a demand', note: 'Nothing is wrong with this sentence. It is what a small child says, and an adult saying it sounds like one.' },
      { fr: fr('fr.a2.verbes.362'), en: 'the same sentence, asking', note: 'One word changed and the whole exchange changed with it. Everything after it held still.' },
      { fr: importedFr(registerId('Je veux un café, s\'il vous plaît.')), en: 'even with please on the end', note: `[${repairedRespell(registerId('Je veux un café, s\'il vous plaît.'))}] The please does not rescue it. The verb has already done the damage.` },
      { fr: importedFr(registerId('Je voudrais un café, s\'il vous plaît.')), en: 'and this is what people say', note: `[${repairedRespell(registerId('Je voudrais un café, s\'il vous plaît.'))}] ${A1_01_UNIT} put this in your mouth in the first lesson without telling you what it was.` },
    ],
  },

  {
    // THE TWO FIXED FORMS, AND THE CONTAINMENT.
    //
    // POLITE_FORMS is a closed list of two and the batch refuses every other
    // form of the conditional on any surface, including in a note or a why. The
    // brief permits je voudrais and nous voudrions; nothing else ships.
    type: 'groupDrill',
    id: 's17-polite',
    title: 'Two Forms, Learned Whole',
    frSub: 'Deux formes fixes',
    layer: 'core',
    size: 'lg',
    terms: ['thePolite'],
    sheetId: 'sheet.a2.13.modaux',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-13-register' },
    say: 'Two cards, and that is the whole of this family you are getting. Learn them the way you learned bonjour.',
    groups: [
      {
        label: 'The only two worth carrying',
        items: ['fr.a2.verbes.362', 'fr.a2.verbes.363'].map(rowCard),
        check: {
          q: `Can you build ${POLITE_FORMS[0]} out of anything in this lesson?`,
          opts: ['Yes, from the je form', 'Yes, from the nous stem', 'No, it is a fixed form to learn whole', 'Yes, by adding -rais'],
          correct: 2,
          why: `No. It belongs to a family this course has not reached and its name comes much later. Two forms, learned as pieces, and nothing else from that family until then.`,
        },
      },
    ],
  },

  {
    // THE a1.01 PAYOFF. The brief requires that what is said here does not
    // contradict a1.01, and a1.01's reframe was READ from Postgres rather than
    // assumed. It turned out a1.01 does more than establish register: it puts
    // `Je voudrais une baguette.` in the learner's mouth in the very first
    // lesson, unexplained. This is where that debt is paid.
    type: 'cardDeck',
    id: 's18-a101',
    title: 'You Have Been Saying This Since Lesson One',
    frSub: `Depuis ${A1_01_UNIT}`,
    hint: 'Three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theRegister', 'thePolite'],
    say: `${A1_01_REFRAME} That was ${A1_01_UNIT}, and it handed you something it did not explain.`,
    cards: [
      {
        label: 'What you were given',
        head: 'A sentence with no lesson',
        fr: importedFr(registerId('Je voudrais un café, s\'il vous plaît.')),
        sub: `[${repairedRespell(registerId('Je voudrais un café, s\'il vous plaît.'))}]`,
        body: `${A1_01_UNIT} taught this as a whole phrase and moved on, because there was no way to explain it yet. There is now.`,
      },
      {
        label: 'What it actually is',
        head: 'The first verb, changed',
        body: `It is the same verb as veux, in a form that asks rather than states. Its proper name and the rest of its family come later; these two are the useful part.`,
      },
      {
        label: 'Why it mattered then',
        head: A1_01_REFRAME,
        body: `The greeting was the price of entry and this is the price of the second sentence. Both are about being treated as somebody worth serving rather than about being correct.`,
      },
    ],
  },

  {
    // THE THREE SENSES OF pouvoir. The brief names `useCases` as a good fit;
    // this ships a groupDrill instead, because each sense needs a real sentence
    // with an itemId behind it and a check the learner can fail, and the three
    // rows exist for exactly that.
    type: 'groupDrill',
    id: 's19-senses',
    title: 'One Verb, Three English Words',
    frSub: 'Les trois emplois de pouvoir',
    layer: 'core',
    size: 'lg',
    terms: ['theSenses'],
    sheetId: 'sheet.a2.13.modaux',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-13-verbs' },
    say: 'Three sentences and three different English verbs. In French all three are the same word, and no speaker feels a difference.',
    groups: [
      {
        label: POUVOIR_SENSES.map((s) => s.english).join(' · '),
        items: POUVOIR_SENSES.map((s) => rowCard(s.id)),
        check: {
          q: 'You want to ask whether you are allowed to sit down. Which French verb?',
          opts: ['A different verb for permission', 'pouvoir, the same one', 'vouloir', 'devoir'],
          correct: 1,
          why: 'pouvoir. If you believe it means only being able, you will go looking for a verb to ask permission with, and French does not have one. That hesitation is the whole cost of getting this wrong.',
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's20-errors',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set, and without it a1.01
    // mission 5 drew a blank screen on a device.
    swipe: true,
    size: 'lg',
    title: 'Four Ways This Comes Apart',
    frSub: 'Quatre pièges',
    layer: 'core',
    terms: ['theSecondVerb', 'thePolite'],
    say: 'The first one is the commonest mistake in the lesson and it undoes the entire point of it.',
    errors: [
      {
        wrong: 'Saying « Je veux paye » or « Je peux payons ».',
        right: `Saying « ${fr('fr.a2.verbes.341')} » and « ${fr('fr.a2.verbes.350')} ».`,
        why: `Six lessons of building endings makes this reflex very strong, and this is the one place it must be switched off. ${REFRAME}`,
      },
      {
        wrong: 'Saying « Je veux un café » to somebody you have never met.',
        right: `Saying « ${importedFr(registerId('Je voudrais un café, s\'il vous plaît.'))} ».`,
        why: 'Both are correct and only one of them is a request. Adding please to the first does not fix it, because the verb has already set the tone.',
      },
      {
        wrong: `Writing « ils voulent » or « ils peuvent » with the wrong stem.`,
        right: `Writing « ${PARADIGM[5].forms.vouloir} » and « ${PARADIGM[5].forms.pouvoir} ».`,
        why: `The plural stem is the short one plus a letter from the long one. ${STEM_CLAIM} Building it off the nous form instead is the commonest written slip here.`,
      },
      {
        wrong: 'Looking for another verb when you want to ask permission.',
        right: `Saying « ${fr(POUVOIR_SENSES[0].id)} ».`,
        why: 'English splits this across can, may and am able to. French does not split it at all, and the second you spend looking for the right one is the second the sentence dies in.',
      },
    ],
  },

  {
    // THE TRAP, AND IT IS THE ONE THE OWNS CREATES.
    //
    // a2.12's trap was a form. This one is a REFLEX: six lessons have trained
    // the learner to put an ending on every verb they meet, and this lesson is
    // the first time that is wrong. Wrong-then-right audio is the right shape
    // for it because the wrong version is something they will actually produce.
    type: 'trapDrill',
    id: 's21-trap',
    title: 'The Ending You Want To Add',
    frSub: 'Le réflexe',
    layer: 'core',
    swipe: true,
    terms: ['theSecondVerb', 'theStems'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-13-frame' },
    say: 'Four pairs and then six to prove it. In every pair the front is right and only the back is in question.',
    rule: {
      title: 'Nothing goes on the back',
      body: `${REFRAME} Six lessons taught you to give every verb an ending for its person. After one of these three, the person has already been dealt with at the front.`,
    },
    cards: [
      {
        promptLabel: 'the ending you want to add',
        promptSound: bare('fr.a2.verbes.344'),
        fr: fr('fr.a2.verbes.344'),
        ipa: '/nu vu.lɔ̃ pe.je/',
        tip: 'Not payons. The nous is already in voulons and putting it in twice is the mistake this whole screen is about.',
      },
      {
        promptLabel: 'and again in the plural',
        promptSound: bare('fr.a2.verbes.352'),
        fr: fr('fr.a2.verbes.352'),
        ipa: '/il pœv pe.je/',
        tip: 'Not payent. The verb at the front has done the work for both of them.',
      },
      {
        promptLabel: 'the stem that catches people',
        promptSound: bare('fr.a2.verbes.344'),
        fr: fr('fr.a2.verbes.346'),
        ipa: '/il vœl pe.je/',
        tip: `Not voulent. ${STEMS.vouloir.singular} plus the l from ${STEMS.vouloir.nous}, and the nous form is not where the plural comes from.`,
      },
      {
        promptLabel: 'and the letter you have not written',
        promptSound: bare('fr.a2.verbes.353'),
        fr: fr('fr.a2.verbes.341'),
        ipa: '/ʒə vø pe.je/',
        tip: `A -${THE_NEW_ENDING} on this one and a plain -s on dois. Both are silent, so only the writing is affected.`,
      },
    ],
    drill: [
      { promptSay: 'nous voulons payer', opts: [bare('fr.a2.verbes.344'), bare('fr.a2.verbes.345'), bare('fr.a2.verbes.346')], correct: 0 },
      { promptSay: 'ils peuvent payer', opts: [bare('fr.a2.verbes.350'), bare('fr.a2.verbes.351'), bare('fr.a2.verbes.352')], correct: 2 },
      { promptSay: 'ils veulent payer', opts: [bare('fr.a2.verbes.346'), bare('fr.a2.verbes.344'), bare('fr.a2.verbes.345')], correct: 0 },
      { promptSay: 'vous devez payer', opts: [bare('fr.a2.verbes.356'), bare('fr.a2.verbes.357'), bare('fr.a2.verbes.358')], correct: 1 },
      { promptSay: 'je peux payer', opts: [bare('fr.a2.verbes.353'), bare('fr.a2.verbes.347'), bare('fr.a2.verbes.341')], correct: 1 },
      { promptSay: 'ils doivent payer', opts: [bare('fr.a2.verbes.356'), bare('fr.a2.verbes.357'), bare('fr.a2.verbes.358')], correct: 2 },
    ],
    steps: [
      { label: 'The rule', kind: 'rule', title: 'Nothing Goes On The Back' },
      { label: 'The pairs', kind: 'cards', title: 'Four That Catch People' },
      { label: 'Hear it', kind: 'audio', title: 'Wrong, Then Right' },
      { label: 'Prove it', kind: 'drill', title: 'Which One Did You Say?', gate: true },
    ],
  },

  /* ── Act 5: what these three do not cover ──────────────────────────────── */

  {
    // THE SECOND SENSE OF devoir. a2.02 named the shape and this is another
    // instance of it: one form doing two jobs, separated only by what follows.
    type: 'cardDeck',
    id: 's22-owing',
    title: 'The Same Word, Owing Money',
    frSub: 'devoir, deuxième sens',
    hint: 'Two cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theOwing', 'whatFollows'],
    say: `${WHAT_FOLLOWS} You met that shape at ${WHAT_FOLLOWS_UNIT} and here it is again, on a verb you learned twenty minutes ago.`,
    cards: [
      {
        label: 'A verb follows',
        head: 'Having to',
        fr: fr('fr.a2.verbes.353'),
        sub: sub('fr.a2.verbes.353'),
        body: 'Obligation, and the second verb tells you what the obligation is. This is what the whole lesson has been about.',
      },
      {
        label: 'A thing follows',
        head: 'Owing',
        fr: fr(DEVOIR_OWE_ID),
        sub: sub(DEVOIR_OWE_ID),
        body: 'Money, and nothing about obligation in general. Same verb, same person, and only the word after it decides which sentence you are in.',
      },
    ],
  },

  {
    // `il faut`, AND THE DECISION IS RECORDED IN THE CORPUS EITHER WAY.
    //
    // ONE context card. Measured: no unit at ANY level owns it, and it occurs in
    // 319 published sentences — more than any conjugated form of the three verbs
    // this lesson does teach. Leaving it out means a learner finishes A2 having
    // met the commonest expression of obligation in the language 319 times and
    // been told nothing. Teaching it properly gives this lesson a fourth
    // paradigm and makes the impersonal the thing they remember.
    //
    // The gap is raised in the build report. It is not this lesson's to fix.
    type: 'cardDeck',
    id: 's23-ilfaut',
    title: 'The One With Nobody In It',
    frSub: 'il faut',
    hint: 'Two cards, and you only have to recognise this.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theImpersonal'],
    say: 'Two cards. This is for recognising, not for producing, and it is the last thing in this act.',
    cards: [
      {
        label: 'What it looks like',
        head: 'Two words, no person',
        fr: importedFr(IL_FAUT.ids[0]),
        sub: `[${repairedRespell(IL_FAUT.ids[0])}]`,
        body: 'It does not say who has to book. It says booking is what is required, and French reaches for this constantly.',
      },
      {
        label: 'And with a verb behind it',
        head: 'The same shape you know',
        fr: importedFr(IL_FAUT.ids[1]),
        sub: `[${repairedRespell(IL_FAUT.ids[1])}]`,
        body: 'A second verb behind it, unchanged, exactly as behind the other three. One shape, no forms to learn, nothing else to do.',
      },
    ],
  },

  {
    // THE BOUNDARY. Three hand-offs, two of them by unit id.
    //
    // The unit ids are followed by a comma or a full stop rather than by an
    // apostrophe-s. An accent-aware word-boundary search treats `'` as a WORD
    // CHARACTER, so `a2.14's` does not match a search for `a2.14`, and the guard
    // that checks every boundary unit is cited would pass vacuously on the
    // possessive. a2.12 shipped v1 with that bug and went to v2 for two words.
    type: 'cardDeck',
    id: 's24-notmine',
    title: 'What Is Not In This Lesson',
    frSub: 'Pour plus tard',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theUnseen', 'thePolite'],
    say: 'Three things this lesson deliberately stops short of, and where each of them lives.',
    cards: [
      {
        label: 'The other kind of can',
        head: 'Knowing how to do something',
        body: `There is a second French verb that also becomes can in English, for things you have learned to do. That split is ${RESERVED_FOR_NEIGHBOURS[0].unit}, which is the next lesson on this trail, and it brings pouvoir back to stand against it.`,
      },
      {
        label: 'The polite family',
        head: `Where ${POLITE_FORMS[0]} comes from`,
        body: `You have two forms of it and they are the two you need. The family they belong to, and what it is for, is past the end of this level entirely. Nothing here needs it.`,
      },
      {
        label: 'The words in the sentences',
        head: 'Bread, buses, gardens',
        body: `${NOT_THE_VERBS} Every noun in this lesson arrived inside a sentence and leaves inside it. None of them is asked about on its own.`,
      },
    ],
  },

  /* ── Act 6: out in the world ───────────────────────────────────────────── */

  {
    type: 'practice',
    id: 's25-speak',
    title: 'Say All Of Them',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Say the whole sentence. On the first three of every verb the pronoun is carrying all the information, so do not swallow it.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    // THE DICTÉE. Fourteen targets.
    //
    // ITS MODE IS NOT A FREE CHOICE. dicteeMode() switches to WORD tiles above
    // 16 letters, and word mode hands every real word over pre-spelled, so a
    // target over the limit tests nothing. TWO TARGETS WERE DEMOTED IN THIS
    // BUILD after the check measured them at 19 letters: `Il peut arriver
    // demain.` and `Je dois acheter du pain.` Both keep their other drills and
    // neither is spelled.
    //
    // The frame is what makes fourteen possible at all. All eighteen grid rows
    // spell from LETTERS and the longest is exactly 16, which no earlier lesson
    // in the band managed on a single frame.
    type: 'dictation',
    id: 's26-dictation',
    title: 'Spell What You Heard',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a2-13-frame' },
    say: 'Fourteen lines. On several of them the verb sounds identical to two others, so read the pronoun before you start typing.',
    itemIds: DICTATION_IDS,
  },

  {
    // THE SCENARIO, AND THE BRIEF SAYS IT MATTERS MORE HERE THAN IN ANY OTHER
    // LESSON IN BATCH 1, because the whole claim is that the learner can now
    // hold a real exchange. It is the bakery from the scene, a week later, and
    // every turn requires a front on a verb.
    type: 'scenario',
    id: 's27-scenario',
    title: 'The Same Counter, A Week Later',
    frSub: 'À vous',
    layer: 'core',
    terms: ['thePolite', 'nousOn'],
    // THE ONLY HOME OF a2.01's nous/on STATEMENT in this lesson, and the batch
    // asserts that it is the only one.
    say: `Back at the counter, and this time you have the front of the sentence. ${NOUS_ON} Every answer wants a verb in front of a verb.`,
    setting: 'The same bakery in Nantes, the following Saturday. No queue this time, and you are buying for two people.',
    turns: [
      {
        ai: 'Bonjour ! Qu\'est-ce que je vous sers ?',
        en: 'Hello! What can I get you?',
        user: 'Bonjour. Je voudrais le pain rond, s\'il vous plaît.',
        userEn: 'Hello. I would like the round loaf, please.',
        alts: [
          { fr: 'Bonjour. Je peux choisir ?', en: 'Hello. May I choose?' },
          { fr: 'Bonjour. Je voudrais deux baguettes.', en: 'Hello. I would like two baguettes.' },
        ],
      },
      {
        ai: 'Bien sûr. Vous voulez autre chose ?',
        en: 'Of course. Would you like anything else?',
        user: 'Nous voulons acheter un gâteau aussi.',
        userEn: 'We would like to buy a cake as well.',
        alts: [
          { fr: 'Non merci, c\'est tout.', en: 'No thank you, that is everything.' },
          { fr: 'On veut choisir un gâteau.', en: 'We want to choose a cake.' },
        ],
      },
      {
        ai: 'Il y en a deux. Vous devez choisir maintenant, je ferme dans cinq minutes.',
        en: 'There are two. You will have to choose now, I close in five minutes.',
        user: 'On doit attendre une minute. Tu peux m\'aider ?',
        userEn: 'We have to wait a minute. Can you help me?',
        alts: [
          { fr: 'Je peux choisir tout de suite.', en: 'I can choose right away.' },
          { fr: 'Nous devons choisir vite, alors.', en: 'We have to choose quickly, then.' },
        ],
      },
      {
        ai: 'Prenez votre temps. Vous payez comment ?',
        en: 'Take your time. How are you paying?',
        user: 'Je peux payer par carte ?',
        userEn: 'May I pay by card?',
        alts: [
          { fr: 'Je voudrais payer par carte.', en: 'I would like to pay by card.' },
          { fr: 'On doit payer en espèces ?', en: 'Do we have to pay in cash?' },
        ],
      },
      {
        ai: 'Par carte, sans problème. Et le jardin, ça pousse ?',
        en: 'By card, no problem. And the garden, is it growing?',
        user: `Oui, mais je dois ${UNSEEN_VERB.fr} le jardin ce soir.`,
        userEn: 'Yes, but I have to water the garden tonight.',
        alts: [
          { fr: `Je peux ${UNSEEN_VERB.fr} le jardin demain.`, en: 'I can water the garden tomorrow.' },
          { fr: 'Il faut attendre la pluie.', en: 'We will have to wait for the rain.' },
        ],
      },
    ],
  },

  {
    // A SECOND READING IS NOT SHIPPED. s15-evidence is the passage and it sits
    // in the Owns act where its job is evidence rather than production. What
    // this section does instead is the generation test in prose: four English
    // prompts, no French given, and the learner has to build the front.
    type: 'practice',
    id: 's28-build',
    title: 'Build The Front',
    frSub: 'À vous de construire',
    layer: 'core',
    terms: ['theSecondVerb', 'theUnseen'],
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Four sentences, and the second verb is given to you every time. All you have to supply is the front.',
    skill: 'speak',
    itemIds: ['fr.a2.verbes.359', 'fr.a2.verbes.366', UNSEEN_VERB.answerIds[0], 'fr.a2.verbes.368'],
  },

  /* ── Act 7: prove it ───────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's29-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['theReach', 'theStems', 'thePolite'],
    sheetId: 'sheet.a2.13.modaux',
    say: 'Rate each card objectively. Again, hard, or easy. The ones you mark again come back.',
    cards: [
      { front: 'What happens to the second verb?', back: REFRAME },
      ...MODAL_ORDER.map((m) => ({
        front: `The six forms of ${m}`,
        back: PARADIGM.map((r) => r.forms[m]).join(' · '),
      })),
      { front: 'Where does the plural stem come from?', back: STEM_CLAIM },
      { front: 'How many endings here are new?', back: ENDINGS_CLAIM },
      { front: 'Why is the pronoun never optional?', back: SINGULAR_CLAIM },
      { front: 'I want to pay', back: fr('fr.a2.verbes.341'), say: fr('fr.a2.verbes.341') },
      { front: 'I would like to pay', back: fr('fr.a2.verbes.362'), say: fr('fr.a2.verbes.362') },
      { front: 'May I order?', back: fr(POUVOIR_SENSES[0].id), say: fr(POUVOIR_SENSES[0].id) },
      { front: 'He might arrive tomorrow', back: fr(POUVOIR_SENSES[1].id), say: fr(POUVOIR_SENSES[1].id) },
      { front: 'She can drive', back: fr(POUVOIR_SENSES[2].id), say: fr(POUVOIR_SENSES[2].id) },
      { front: 'We have to wait for the bus', back: fr('fr.a2.verbes.367'), say: fr('fr.a2.verbes.367') },
      { front: 'You owe me money', back: fr(DEVOIR_OWE_ID), say: fr(DEVOIR_OWE_ID) },
      { front: `What does ${UNSEEN_VERB.fr} mean, and why is it here?`, back: `${UNSEEN_VERB.en}. Nobody taught it to you and you used it anyway.` },
      { front: 'Which three English words is pouvoir doing?', back: POUVOIR_SENSES.map((s) => s.english).join(' · ') },
    ],
  },

  {
    type: 'progressCheck',
    id: 's30-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    // The prose deliberately carries no counts. Every figure on this card is
    // derived below; typing one here as well would be two chances to be wrong on
    // one screen.
    body: `You have three more verbs that will not come apart, and a recipe that builds the hardest row of all three of them. That was the short half. The long half is what they let you do: ${REFRAME} You proved it on a verb this course has never taught you, thirty seconds after meeting it. What is left is the part that says whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.`,
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's31-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get a drill before the next one starts.',
    rounds: [
      {
        id: 'r1-the-second-verb',
        label: 'The verb that never moves',
        // Round targets are ordered deliberately. drillForRound returns the
        // FIRST target that has a drill and then stops, so the first name here
        // is what a failing learner actually gets. Every round leads on a
        // DIFFERENT trigger, which is what makes all six drills reachable.
        targets: ['err-second-verb', 'err-ils-stem'],
        say: 'Type the whole answer. In every one of these the second verb is already in the shape it needs.',
        questions: [
          {
            q: 'Je ___ payer. (vouloir)',
            format: 'typeIn',
            accept: ['veux', 'je veux'],
            answer: 'veux',
            why: `The -${THE_NEW_ENDING} is silent and it is the only new letter in the lesson.`,
            ref: 's07-newletter',
          },
          {
            q: 'Nous devons ___. (attendre)',
            format: 'typeIn',
            accept: ['attendre'],
            answer: 'attendre',
            why: `Not attendons. ${REFRAME} The nous has already been dealt with by devons.`,
            ref: 's21-trap',
          },
          {
            q: 'Ils peuvent ___. (choisir)',
            format: 'typeIn',
            accept: ['choisir'],
            answer: 'choisir',
            why: 'Not choisissent. An -IR verb behaves here exactly as an -ER verb does, which is not at all.',
            ref: 's11-infinitives',
          },
          {
            q: 'Fix this. « Nous voulons payons. »',
            format: 'errorSpot',
            accept: ['Nous voulons payer', 'payer'],
            answer: 'Nous voulons payer.',
            why: 'The ending went on twice. Six lessons trained that reflex and this is the one place it is wrong.',
            ref: 's21-trap',
          },
          {
            q: `You have never met the verb « ranger ». « Je dois ranger la cuisine. » What can you tell?`,
            format: 'mcq',
            opts: ['It is a form you have not learned', 'It is a question', 'It is somebody having to do something, and ranger says what', 'It cannot be worked out'],
            correct: 2,
            why: `A front, then a verb in its dictionary shape, like every sentence in this lesson. ${REFRAME} You will not know what ranger means and you will know what kind of sentence you are in.`,
            ref: 's13-unseen',
          },
          {
            q: 'Which of these four is wrong?',
            format: 'mcq',
            opts: [fr('fr.a2.verbes.344'), fr('fr.a2.verbes.350'), 'Nous devons payons.', fr('fr.a2.verbes.356')],
            correct: 2,
            why: 'The third. Everything else on this screen leaves the second verb alone.',
            ref: 's21-trap',
          },
          {
            q: `Tu ___ ${UNSEEN_VERB.fr} le jardin. (devoir)`,
            format: 'typeIn',
            accept: ['dois', 'tu dois'],
            answer: 'dois',
            why: `A plain -s on this verb rather than the new letter. And ${UNSEEN_VERB.fr} did not move, because it never does.`,
            ref: 's13-unseen',
          },
          {
            q: 'Vous ___ commander ? (vouloir)',
            format: 'typeIn',
            accept: ['voulez', 'vous voulez'],
            answer: 'voulez',
            why: 'The ordinary -ez from a2.01, on the long stem. Nothing about the vous form here is strange.',
            ref: 's10-frames',
          },
        ],
      },
      {
        id: 'r2-the-grid',
        label: 'The eighteen cells',
        targets: ['err-ils-stem', 'err-x-ending'],
        say: 'The plural of all three is built the same way. If you can do one, you can do the other two.',
        questions: [
          {
            q: 'Ils ___ payer. (vouloir)',
            format: 'typeIn',
            accept: ['veulent', 'ils veulent'],
            answer: 'veulent',
            why: `${STEMS.vouloir.singular} plus the l from ${STEMS.vouloir.nous}. Not voulent, which builds it off the wrong stem.`,
            ref: 's06-stems',
          },
          {
            q: 'Ils ___ payer. (pouvoir)',
            format: 'typeIn',
            accept: ['peuvent', 'ils peuvent'],
            answer: 'peuvent',
            why: `${STEMS.pouvoir.singular} plus the v from ${STEMS.pouvoir.nous}. Same recipe, second verb.`,
            ref: 's06-stems',
          },
          {
            q: 'Ils ___ payer. (devoir)',
            format: 'typeIn',
            accept: ['doivent', 'ils doivent'],
            answer: 'doivent',
            why: `${STEMS.devoir.singular} plus the v from ${STEMS.devoir.nous}. Third verb, and it did not break.`,
            ref: 's06-stems',
          },
          {
            q: 'Fix this. « Ils voulent payer. »',
            format: 'errorSpot',
            accept: ['Ils veulent payer', 'veulent'],
            answer: 'Ils veulent payer.',
            why: 'The plural is built off the short stem, not the long one. voulent takes the nous stem and there is no such form.',
            ref: 's21-trap',
          },
          {
            q: 'Nous ___ payer. (pouvoir)',
            format: 'typeIn',
            accept: ['pouvons', 'nous pouvons'],
            answer: 'pouvons',
            why: 'The long stem and the ordinary -ons. This is the row that supplies the letter the plural needs.',
            ref: 's05-grid',
          },
          {
            q: 'Which pair shares a stem?',
            format: 'mcq',
            opts: [
              `${PARADIGM[0].forms.vouloir} and ${PARADIGM[3].forms.vouloir}`,
              `${PARADIGM[3].forms.vouloir} and ${PARADIGM[4].forms.vouloir}`,
              `${PARADIGM[0].forms.vouloir} and ${PARADIGM[5].forms.vouloir}`,
              'None of them',
            ],
            correct: 1,
            why: 'nous and vous share the long stem. The plural is the odd one: it borrows from both.',
            ref: 's06-stems',
          },
          {
            q: 'Il ___ payer. (devoir)',
            format: 'typeIn',
            accept: ['doit', 'il doit'],
            answer: 'doit',
            why: 'A -t, and it sounds exactly like dois. In writing you have to pick; in speech there is nothing to pick.',
            ref: 's08-singular',
          },
        ],
      },
      {
        id: 'r3-the-new-letter',
        label: 'The one new letter',
        targets: ['err-x-ending', 'err-second-verb'],
        say: 'One letter in eighteen cells is new. This round is about which cells get it.',
        questions: [
          {
            q: `Which two verbs take -${THE_NEW_ENDING} on je and tu?`,
            format: 'mcq',
            opts: [
              `${MODAL_ORDER[0]} and ${MODAL_ORDER[2]}`,
              THE_NEW_ENDING_FORMS.join(' and '),
              `${MODAL_ORDER[0]} and ${MODAL_ORDER[1]}`,
              'All three',
            ],
            correct: 2,
            why: `${MODAL_ORDER[0]} and ${MODAL_ORDER[1]}. ${MODAL_ORDER[2]} takes the ordinary -s you already write.`,
            ref: 's07-newletter',
          },
          {
            q: 'Tu ___ payer. (pouvoir)',
            format: 'typeIn',
            accept: ['peux', 'tu peux'],
            answer: 'peux',
            why: 'Not peus. The letter is silent, so nothing about saying it changes, and everything about writing it does.',
            ref: 's07-newletter',
          },
          {
            q: 'Je ___ payer. (devoir)',
            format: 'typeIn',
            accept: ['dois', 'je dois'],
            answer: 'dois',
            why: 'A plain -s. This is the singular you already met on the -RE verbs in a2.11, arriving on a verb that is not one.',
            ref: 's07-newletter',
          },
          {
            q: `What does the -${THE_NEW_ENDING} sound like?`,
            format: 'mcq',
            opts: ['A soft s', 'Nothing at all', 'A k', 'It lengthens the vowel'],
            correct: 1,
            why: 'Nothing, exactly as the -s has been silent since a2.01.',
            ref: 's07-newletter',
          },
          {
            q: 'Fix this. « Je peus payer. »',
            format: 'errorSpot',
            accept: ['Je peux payer', 'peux'],
            answer: 'Je peux payer.',
            why: 'peus is not a form. Two of these three verbs take the new letter and this is one of them.',
            ref: 's20-errors',
          },
          {
            q: 'How many of the six endings in this lesson were already yours?',
            format: 'mcq',
            opts: ['2', '3', String(ENDINGS.filter((e) => e.owned).length), 'All six'],
            correct: 2,
            why: ENDINGS_CLAIM,
            ref: 's07-newletter',
          },
          {
            q: 'Vous ___ payer. (devoir)',
            format: 'typeIn',
            accept: ['devez', 'vous devez'],
            answer: 'devez',
            why: 'The ordinary -ez. This is also the sentence a waiter says to you at the end of a meal.',
            ref: 's10-frames',
          },
        ],
      },
      {
        id: 'r4-asking',
        label: 'Asking, not demanding',
        targets: ['err-blunt-demand', 'err-pouvoir-narrow'],
        say: 'Every question here has a situation in it, because politeness has no answer without one.',
        questions: [
          {
            q: 'You are ordering from a waiter you have never met. Which one?',
            format: 'mcq',
            // The polite half sits FIRST here deliberately. The answer-position
            // spread is a real density rule (40% ceiling) and this round was the
            // one skewing it; density.logic.ts refused the lesson until three
            // questions moved.
            opts: [
              importedFr(registerId('Je voudrais un café, s\'il vous plaît.')),
              importedFr(registerId('Je veux un café, s\'il vous plaît.')),
              'Café.',
              'Je dois un café.',
            ],
            correct: 0,
            why: 'The second is correct French and lands as a demand, and the please on the end does not rescue it. The verb has already set the tone.',
            ref: 's16-register',
          },
          {
            q: 'Your close friend asks what you want to drink. Which one is fine?',
            format: 'mcq',
            opts: ['Only the polite form is ever acceptable', 'Je veux un café.', 'Neither', 'Je dois un café.'],
            correct: 1,
            why: 'With a friend, veux is completely normal. The polite form is for people who are serving you or who you do not know, not for everybody all the time.',
            ref: 's16-register',
          },
          {
            q: 'Je ___ payer, s\'il vous plaît. (the polite form)',
            format: 'typeIn',
            accept: [POLITE_FORMS[0], `je ${POLITE_FORMS[0]}`],
            answer: POLITE_FORMS[0],
            why: `A fixed form, learned whole. It is not built from veux and you cannot make it from anything in this lesson.`,
            ref: 's17-polite',
          },
          {
            q: `Can you build ${POLITE_FORMS[0]} from the forms in this lesson?`,
            format: 'mcq',
            opts: ['Yes, from the je form', 'Yes, by adding -rais to the stem', 'No, it is learned whole', 'Yes, from the nous form'],
            correct: 2,
            why: 'No. It belongs to a family this course has not reached, and two forms of it is all you are carrying for now.',
            ref: 's17-polite',
          },
          {
            q: 'You want to ask whether you are allowed to sit down. Which verb?',
            format: 'mcq',
            opts: ['devoir', 'vouloir', 'A different verb for permission', 'pouvoir'],
            correct: 3,
            why: 'pouvoir. French does not have a separate verb for permission, and looking for one is the hesitation the sentence dies in.',
            ref: 's19-senses',
          },
          {
            q: 'Fix this, said to a stranger behind a counter. « Je veux payer. »',
            format: 'errorSpot',
            accept: [`Je ${POLITE_FORMS[0]} payer`, POLITE_FORMS[0]],
            answer: fr('fr.a2.verbes.362'),
            why: 'Nothing about the first is incorrect. One word changes it from a demand into a request, and everything after it holds still.',
            ref: 's16-register',
          },
          {
            q: 'Nous ___ payer, s\'il vous plaît. (the polite form, two of you)',
            format: 'typeIn',
            accept: [POLITE_FORMS[1], `nous ${POLITE_FORMS[1]}`],
            answer: POLITE_FORMS[1],
            why: 'The only other one worth carrying. Two fixed forms, and nothing else from that family until much later.',
            ref: 's17-polite',
          },
          {
            q: `${A1_01_UNIT} already put one of these in your mouth. Which?`,
            format: 'mcq',
            opts: [
              importedFr(registerId('Je veux un café, s\'il vous plaît.')),
              importedFr(registerId('Je voudrais un café, s\'il vous plaît.')),
              'Both of them',
              'Neither',
            ],
            correct: 1,
            why: `${A1_01_REFRAME} The polite form arrived in the very first lesson as a whole phrase, with no way to explain it yet.`,
            ref: 's18-a101',
          },
        ],
      },
      {
        id: 'r5-three-words',
        label: 'One verb, three English words',
        targets: ['err-pouvoir-narrow', 'err-blunt-demand'],
        say: 'English splits this three ways. Each question is one of the three.',
        questions: [
          ...POUVOIR_SENSES.map((s) => ({
            q: `« ${fr(s.id)} » Which English word is pouvoir doing here?`,
            format: 'mcq' as const,
            opts: POUVOIR_SENSES.map((x) => x.english),
            correct: POUVOIR_SENSES.indexOf(s),
            why: `${s.english}, ${s.gloss}. All three are the same French verb and no speaker feels a difference.`,
            ref: 's19-senses',
          })),
          {
            q: 'Which of the three senses needs a different French verb?',
            format: 'mcq',
            opts: [POUVOIR_SENSES[0].english, POUVOIR_SENSES[1].english, POUVOIR_SENSES[2].english, 'None of them'],
            correct: 3,
            why: 'None. That is the point of the mission: one verb covers all three, and English is the language doing the splitting.',
            ref: 's19-senses',
          },
          {
            q: 'Je ___ commander ? (pouvoir)',
            format: 'typeIn',
            accept: ['peux', 'je peux'],
            answer: 'peux',
            why: 'Asking to be allowed, and the rising voice makes it a question exactly as it did in a1.19.',
            ref: 's19-senses',
          },
          {
            q: 'Elle ___ conduire. (pouvoir)',
            format: 'typeIn',
            accept: ['peut', 'elle peut'],
            answer: 'peut',
            why: 'Being able, and it sounds identical to peux. Only the word in front separates them.',
            ref: 's08-singular',
          },
          {
            q: 'You are told « Il peut arriver demain ». What does it mean?',
            format: 'mcq',
            opts: ['He is able to arrive tomorrow', 'He might arrive tomorrow', 'He has to arrive tomorrow', 'He wants to arrive tomorrow'],
            correct: 1,
            why: 'Nobody is able to do anything here. It says the thing could happen, and English reaches for might.',
            ref: 's19-senses',
          },
          {
            q: 'Vous ___ m\'aider ? (pouvoir)',
            format: 'typeIn',
            accept: ['pouvez', 'vous pouvez'],
            answer: 'pouvez',
            why: 'This is the form you will use most, because it is how you ask a stranger for anything at all.',
            ref: 's10-frames',
          },
        ],
      },
      {
        id: 'r6-the-edges',
        label: 'The edges',
        targets: ['err-owe-confusion', 'err-second-verb'],
        say: 'Two things this lesson only asks you to recognise, and one it hands to the next one.',
        questions: [
          {
            q: '« Tu me dois de l\'argent. » What is this about?',
            format: 'mcq',
            opts: ['An obligation to do something', 'A promise', 'Wanting something', 'Money'],
            correct: 3,
            why: `${WHAT_FOLLOWS} A verb after dois means having to; a thing after it means owing.`,
            ref: 's22-owing',
          },
          {
            q: 'Which of these is about obligation rather than money?',
            format: 'mcq',
            opts: [fr(DEVOIR_OWE_ID), fr('fr.a2.verbes.353'), 'Both', 'Neither'],
            correct: 1,
            why: 'The second. Same verb, same person, and only the word after it decides which sentence you are in.',
            ref: 's22-owing',
          },
          {
            q: '« Il faut réserver. » Who has to book?',
            format: 'mcq',
            opts: ['He does', 'It does', 'Nobody in particular', 'You specifically'],
            correct: 2,
            why: 'Nobody is named. It says booking is what is required, and it is the commonest way French says this.',
            ref: 's23-ilfaut',
          },
          {
            q: 'What happens to the verb after « il faut »?',
            format: 'mcq',
            opts: ['It takes an ending', 'Nothing, as after the other three', 'It moves to the end', 'It needs a pronoun'],
            correct: 1,
            why: 'Nothing. It is the same shape as everything else in this lesson, on a front with no person in it.',
            ref: 's23-ilfaut',
          },
          {
            q: `Ils ___ ${UNSEEN_VERB.fr} le jardin. (devoir)`,
            format: 'typeIn',
            accept: ['doivent', 'ils doivent'],
            answer: 'doivent',
            why: `The hardest cell of the three, on a verb nobody taught you. Both halves came from somewhere other than a list.`,
            ref: 's13-unseen',
          },
          {
            q: 'Fix this. « Vous devez attendez. »',
            format: 'errorSpot',
            accept: ['Vous devez attendre', 'attendre'],
            answer: 'Vous devez attendre.',
            why: `The ending is on twice. ${REFRAME}`,
            ref: 's21-trap',
          },
          {
            q: 'Which of these does this lesson NOT teach you to do?',
            format: 'mcq',
            opts: ['Say what you want', 'Ask permission', 'Say you have learned how to do something', 'Say what you must do'],
            correct: 2,
            why: `That is a different verb and it is the whole payload of ${RESERVED_FOR_NEIGHBOURS[0].unit}, which is the next lesson on this trail.`,
            ref: 's24-notmine',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's32-roundup',
    title: 'What You Can Do Now',
    // See s02-goals. The house heading uses savoir and a2.14 owns that verb.
    frSub: 'Ce que vous pouvez faire maintenant',
    say: 'Four things, and the second one is bigger than the whole rest of the lesson.',
    body: `You can build three more verbs that will not come apart, and you found a recipe that produces the hardest row of all three of them from the two rows above it. ${ENDINGS_CLAIM} That was the short half. ${REFRAME} You proved that on a verb this course has never taught you and never will, thirty seconds after meeting it, and it works the same way on every other verb in the language. You also know which sentence gets you served and which one gets you a baguette you did not ask for. ${RESERVED_FOR_NEIGHBOURS[0].unit} is next, and it brings one of these three back to stand against a verb you have not met.`,
    points: [
      `${REFRAME}`,
      `${STEM_CLAIM}`,
      `${SINGULAR_CLAIM}`,
      `${POLITE_FORMS[0]} rather than veux, and the difference is whether the exchange goes well.`,
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed. It throws rather than degrades: a progress
 * card that silently reports "0 of 0" is worse than a build that stops.       */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's30-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a2.13.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Forms learned', v: String(PARADIGM.length * MODAL_ORDER.length) },
    { k: 'New endings', v: `1 of ${ENDINGS.length}` },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * SEVEN, against the six every other A2 lesson ships, and the extra one is act 5
 * — the contexts this lesson has to hand off rather than teach. Folding those
 * three cards into act 4 would have made the politeness act the heaviest in the
 * lesson, which would say the register mattered more than the Owns.
 *
 * THE OWNS ACT IS THE HEAVIEST BY MISSION COUNT, SEVEN AGAINST THE GRID'S FIVE.
 * It holds the frame, the ten imported verbs, the situations, the generalisation
 * mission and the passage that proves the shape is already everywhere.
 *
 * The grid act carries no `table` of any kind: the single grid the brief asked
 * for lives in the sheet, because a table at layer core is a table-in-core
 * density failure.
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a nice
 * number, because it is divided by the rest points to check no stretch runs past
 * the checkpoint-spacing limit of 22.                                          */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The sentence with no front',
    sections: ['s01-scene', 's02-goals', 's03-reach'],
    milestone: 'You know why the sentence at the counter stopped, and what the three words that fix it are.',
    estScreens: 19,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'Three verbs, one frame',
    sections: ['s04-verbs', 's05-grid', 's06-stems', 's07-newletter', 's08-singular'],
    milestone: 'You can build all six forms of all three, and you can work the hardest row out rather than remember it.',
    estScreens: 30,
    restPoints: ['s05-grid/halfway', 's07-newletter/halfway'],
  },
  {
    id: 'act3',
    title: 'And any verb behind them',
    sections: ['s09-second', 's10-frames', 's11-infinitives', 's12-situations', 's13-unseen', 's14-generalise', 's15-evidence'],
    milestone: 'You used a verb this course has never taught you, thirty seconds after meeting it.',
    estScreens: 46,
    restPoints: ['s10-frames/halfway', 's12-situations/after', 's13-unseen/after-cards'],
  },
  {
    id: 'act4',
    title: 'Asking, not demanding',
    sections: ['s16-register', 's17-polite', 's18-a101', 's19-senses', 's20-errors', 's21-trap'],
    milestone: 'You know which sentence gets you served, and that one French verb is doing three English jobs.',
    estScreens: 38,
    restPoints: ['s18-a101/after', 's21-trap/after-cards'],
  },
  {
    id: 'act5',
    title: 'What these three do not cover',
    sections: ['s22-owing', 's23-ilfaut', 's24-notmine'],
    milestone: 'You can recognise two shapes you are not being asked to produce, and you know which lesson owns the third.',
    estScreens: 15,
    restPoints: [],
  },
  {
    id: 'act6',
    title: 'Out in the world',
    sections: ['s25-speak', 's26-dictation', 's27-scenario', 's28-build'],
    milestone: 'You have said them all out loud, spelled fourteen, and held the exchange the scene failed.',
    estScreens: 46,
    restPoints: ['s25-speak/halfway', 's26-dictation/halfway'],
  },
  {
    id: 'act7',
    title: 'Prove it',
    sections: ['s29-review', 's30-progress', 's31-quiz', 's32-roundup'],
    milestone: 'Lesson complete. Two more irregular units follow this one before the trail turns.',
    estScreens: 60,
    restPoints: ['s29-review/halfway', 's31-quiz/after-r2', 's31-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned.
 *
 * Act 2 releases the three naming forms and all eighteen grid rows. Act 3
 * releases the ten imported verbs, the four situation rows, the two unseen
 * answer rows and the four imported sentences. Act 4 releases the two polite
 * rows, the register pair and the three pouvoir senses. Act 5 releases the owing
 * row and the two `il faut` rows.
 *
 * `arroser` IS RELEASED BY NOTHING and is not in itemIds at all. The read-only
 * rows are likewise released by nothing and named on no screen.                */

const DECK_TRANCHE: string[][] = [
  // Act 1 releases NOTHING. The scene runs on display strings: `Payer ?` is not
  // a corpus row, because a row is released to spaced repetition and this lesson
  // does not drill a sentence whose only job was to fail.
  [],
  // Act 2: the three naming forms and all eighteen grid rows.
  [...MODAL_ORDER.map((m) => verbId(m)), ...PARADIGM_IDS],
  // Act 3: the frame verb, the nine other imported verbs, the situations, the
  // unseen answers and the four imported modal frames.
  [
    ...INFINITIVES.map((v) => infinitiveId(v)),
    'fr.a2.verbes.365', 'fr.a2.verbes.366', 'fr.a2.verbes.367', 'fr.a2.verbes.368',
    ...UNSEEN_VERB.answerIds,
    sentenceId('Elle veut devenir médecin.'),
    sentenceId('Tu peux ouvrir la fenêtre, s\'il te plaît ?'),
    sentenceId('Nous devons partir avant midi.'),
  ],
  // Act 4: the polite pair, the register pair, and the three senses.
  [
    'fr.a2.verbes.362', 'fr.a2.verbes.363',
    registerId('Je veux un café, s\'il vous plaît.'),
    registerId('Je voudrais un café, s\'il vous plaît.'),
    ...POUVOIR_SENSES.map((s) => s.id),
  ],
  // Act 5: the second sense of devoir, and the impersonal.
  [DEVOIR_OWE_ID, ...IL_FAUT.ids],
  [],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * SIX triggers, six drills, six rounds, and each round leads on a DIFFERENT
 * trigger. That is deliberate: `drillForRound` returns the first target that has
 * a drill and then stops, so a drill that is never named first can never fire.
 * a1.05 ships two such drills and its own test fails on them today.             */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-second-verb',
    description: 'Puts an ending on the second verb: Nous voulons payons, Vous devez attendez. Six lessons of building endings have made this reflex automatic, and this lesson is the first place it is wrong.',
    detectOn: ['s10-frames', 's21-trap', 's31-quiz/r1-the-second-verb'],
    drill: 'drill-second-verb',
    retest: 'retest-second-verb',
  },
  {
    id: 'err-ils-stem',
    description: 'Builds the plural off the long stem rather than the short one: voulent, pouvent, devent. The plural borrows from both stems and neither one alone produces it.',
    detectOn: ['s06-stems', 's21-trap', 's31-quiz/r2-the-grid'],
    drill: 'drill-stems',
    retest: 'retest-stems',
  },
  {
    id: 'err-x-ending',
    description: 'Writes veus and peus, or puts the new letter on devoir: doix. Two of the three take it and the third does not, and all of it is silent so the ear gives no help.',
    detectOn: ['s07-newletter', 's20-errors', 's31-quiz/r3-the-new-letter'],
    drill: 'drill-new-letter',
    retest: 'retest-new-letter',
  },
  {
    id: 'err-blunt-demand',
    description: 'Uses veux with somebody serving them, and adds please to fix it. Both sentences are correct French and only one of them is a request; the please does not change what the verb already said.',
    detectOn: ['s16-register', 's20-errors', 's31-quiz/r4-asking'],
    drill: 'drill-register',
    retest: 'retest-register',
  },
  {
    id: 'err-pouvoir-narrow',
    description: 'Believes pouvoir means only being able, and goes looking for another verb to ask permission with. There is not one, and the hesitation is where the sentence dies.',
    detectOn: ['s19-senses', 's20-errors', 's31-quiz/r5-three-words'],
    drill: 'drill-senses',
    retest: 'retest-senses',
  },
  {
    id: 'err-owe-confusion',
    description: 'Reads dois plus a thing as an obligation, or expects il faut to have a person in it. Both are recognition failures rather than production ones, and both are common in real reading.',
    detectOn: ['s22-owing', 's23-ilfaut', 's31-quiz/r6-the-edges'],
    drill: 'drill-edges',
    retest: 'retest-edges',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-second-verb',
    title: 'What goes on the back',
    format: 'flashcard',
    coach: 'A front on the left. Say the whole sentence before you turn the card, and do not let the second verb take anything.',
    pairs: [
      ['nous voulons + payer', fr('fr.a2.verbes.344')],
      ['ils peuvent + payer', fr('fr.a2.verbes.352')],
      ['vous devez + payer', fr('fr.a2.verbes.357')],
      ['nous devons + attendre', fr('fr.a2.verbes.367')],
      ['vous voulez + choisir', fr('fr.a2.verbes.368')],
    ],
  },
  {
    id: 'retest-second-verb',
    title: 'One more time',
    format: 'mcq',
    q: 'Nous devons ___. (attendre)',
    opts: ['attendons', 'attendre', 'attendez'],
    correct: 1,
    why: `Not attendons. ${REFRAME}`,
  },
  {
    id: 'drill-stems',
    title: 'Where the plural comes from',
    format: 'flashcard',
    coach: 'A verb on the left. Say the plural before you turn the card, and build it from the short stem rather than the long one.',
    pairs: MODAL_ORDER.map((m) => [
      `ils, ${m} (${STEMS[m].singular} + ${STEMS[m].nous.slice(-1)})`,
      PARADIGM[5].forms[m],
    ] as [string, string]),
  },
  {
    id: 'retest-stems',
    title: 'One more time',
    format: 'mcq',
    q: 'Ils ___ payer. (vouloir)',
    opts: ['voulent', 'veulent', 'veulient'],
    correct: 1,
    why: `${STEMS.vouloir.singular} plus the l from ${STEMS.vouloir.nous}. The long stem alone does not produce it.`,
  },
  {
    id: 'drill-new-letter',
    title: 'Which ones take the new letter',
    format: 'sort',
    buckets: [`Takes -${THE_NEW_ENDING}`, 'Takes the ordinary -s'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [
      col('vouloir')[0], col('pouvoir')[0], col('devoir')[0],
      col('vouloir')[1], col('pouvoir')[1], col('devoir')[1],
    ],
    coach: 'Play each one and look at the spelling rather than listening for it. All of these endings are silent, so the ear cannot help you here.',
  },
  {
    id: 'retest-new-letter',
    title: 'One more time',
    format: 'mcq',
    q: 'Je ___ payer. (pouvoir)',
    opts: ['peus', 'peux', 'peut'],
    correct: 1,
    why: `The new letter, and it is silent. ${MODAL_ORDER[2]} is the one that takes a plain -s instead.`,
  },
  {
    id: 'drill-register',
    title: 'Who are you talking to?',
    format: 'sort',
    buckets: ['To a friend', 'To somebody serving you'],
    items: [
      'fr.a2.verbes.341',
      'fr.a2.verbes.362',
      registerId('Je veux un café, s\'il vous plaît.'),
      registerId('Je voudrais un café, s\'il vous plaît.'),
      'fr.a2.verbes.363',
      'fr.a2.verbes.347',
    ],
    coach: 'Every one of these is correct French. Sort them by who you would say them to, not by whether they are right.',
  },
  {
    id: 'retest-register',
    title: 'One more time',
    format: 'mcq',
    q: 'A waiter you have never met is waiting. Which one?',
    opts: [
      importedFr(registerId('Je veux un café, s\'il vous plaît.')),
      importedFr(registerId('Je voudrais un café, s\'il vous plaît.')),
      'Café, maintenant.',
    ],
    correct: 1,
    why: 'The please on the end of the first one does not rescue it. The verb has already decided how it lands.',
  },
  {
    id: 'drill-senses',
    title: 'Which English word',
    format: 'flashcard',
    coach: 'A French sentence on the left. Say which English word it needs before you turn the card. All three are the same French verb.',
    pairs: POUVOIR_SENSES.map((s) => [fr(s.id), `${s.english}, ${s.gloss}`] as [string, string]),
  },
  {
    id: 'retest-senses',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to ask whether you are allowed to take a photo. Which verb?',
    opts: ['vouloir', 'pouvoir', 'devoir'],
    correct: 1,
    why: 'pouvoir, the same verb as being able. French does not split permission off into its own word.',
  },
  {
    id: 'drill-edges',
    title: 'What comes after the verb',
    format: 'sort',
    buckets: ['Having to do something', 'Something else'],
    items: [
      'fr.a2.verbes.353',
      DEVOIR_OWE_ID,
      'fr.a2.verbes.367',
      IL_FAUT.ids[0],
      'fr.a2.verbes.365',
      'fr.a2.verbes.358',
    ],
    coach: 'Look at the word straight after the verb every time. That is the only thing deciding which bucket a sentence goes in.',
  },
  {
    id: 'retest-edges',
    title: 'One more time',
    format: 'mcq',
    q: '« Tu me dois de l\'argent. » What is it about?',
    opts: ['An obligation', 'Money', 'A plan'],
    correct: 1,
    why: `${WHAT_FOLLOWS} A thing after dois rather than a verb, and the sentence is about ten euros.`,
  },
];

/* ─── The reference sheet ──────────────────────────────────────────────────
 *
 * ONE, and its centre is a table NEITHER a2.01 NOR a2.12 COULD HAVE HELD: three
 * paradigms on ONE FRAME, so a learner reads across a row and sees the same
 * sentence three times with two letters different.
 *
 * a2.01 ships "The -ER endings, in full", a2.10 the -IR set, a2.11 all three
 * regular sets in one table, a2.02 a table of FORMS and a2.12 a lexical set. A
 * sixth ending sheet would be worthless. What this lesson has that none of them
 * had is a RECIPE — two stems and a rule that produces the third — and a list of
 * verbs that can be put behind any of the eighteen cells.
 *
 * A `sheetId` resolves only inside the lesson that declares it (schema.ts:3490,
 * lesson-contract.test.ts:91), so this cannot extend or point at any of the five.
 * Cross-lesson sheets do not exist and a2.11 established that at a price.
 *
 * The density validator refuses a `table` at layer 'core' outright, so the full
 * versions live here at layer 'deep' where density is deliberately fine.
 *
 * ReferenceSheet.tsx draws `teach`, `letterGrid` and `table` and NOTHING ELSE. A
 * `cheatSheet` in here would draw its title and no rows, which a1.13 ships
 * today. The batch refuses any other section type in a sheet.                  */

const SHEET_ID_CONST = SHEET_ID;

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID_CONST,
    title: 'Three verbs, one frame, and everything behind them',
    layer: 'deep',
    contains: ['All three, every person, on one sentence', 'The stem recipe', `${INFINITIVES.length} verbs you can put behind any of them`],
    sections: [
      {
        // THE TABLE THIS SHEET EXISTS FOR. Eighteen cells on ONE frame, which is
        // what makes reading across a row worth anything: the same sentence
        // three times with two letters different.
        type: 'table',
        id: 'sheet-grid',
        title: `All three, every person, on ${FRAME_VERB}`,
        layer: 'deep',
        cols: ['Person', ...MODAL_ORDER],
        rows: PARADIGM.map((r) => [r.person, ...MODAL_ORDER.map((m) => `${r.forms[m]} ${FRAME_VERB}`)]),
      },
      {
        type: 'table',
        id: 'sheet-stems',
        title: 'The recipe, and where each row comes from',
        layer: 'deep',
        cols: ['Verb', 'je · tu · il', 'nous · vous', 'ils, and how'],
        rows: MODAL_ORDER.map((m) => [
          m,
          `${STEMS[m].singular}-`,
          `${STEMS[m].nous}-`,
          `${STEMS[m].ils}- = ${STEMS[m].singular} + ${STEMS[m].nous.slice(-1)}`,
        ]),
      },
      {
        type: 'table',
        id: 'sheet-endings',
        title: 'The six endings, and where you met each one',
        layer: 'deep',
        cols: ['Person', 'Ending', 'Where it came from'],
        rows: ENDINGS.map((e) => [e.person, `-${e.ending}`, e.owned ? `Already yours, since ${e.since}` : 'New here, and silent']),
      },
      {
        type: 'table',
        id: 'sheet-behind',
        title: 'Verbs you can put behind any of the eighteen',
        layer: 'deep',
        cols: ['Verb', 'Say it', 'What it means'],
        rows: INFINITIVES.map((v) => {
          const id = infinitiveId(v);
          return [v, repairedRespell(id), importedEn(id)];
        }),
      },
      {
        type: 'teach',
        id: 'sheet-why-recipe',
        title: 'Why this sheet gives you a recipe and not a list',
        layer: 'deep',
        body: `Every reference sheet before this one in the level lists ENDINGS, because every pattern before it had them: a2.01 holds the -er set in full, a2.10 the -ir set, a2.11 all three regular sets at once, and a2.02 lists forms because its verbs have none. This lesson has eighteen forms, and only one of them is worth memorising as a shape, the plural, and even that one is produced by a rule. ${STEM_CLAIM} Read the third table if you want to know why an ending looks familiar; read the second one if you have forgotten a plural. The first table is the one to photograph, because it is the only place in the course where three verbs sit on a single sentence and the difference between them is two letters wide. ${SINGULAR_CLAIM}`,
      },
      {
        type: 'teach',
        id: 'sheet-carries-forward',
        title: 'What carries forward',
        layer: 'deep',
        body: `Three things leave this lesson. The first is the big one: ${REFRAME} Any verb at all goes behind these three in the shape a dictionary gives it, including verbs nobody has taught you, and nothing later in the course takes that back. The fourth table above is a starting set and it is not a limit. The second is that ${POLITE_FORMS[0]} and ${POLITE_FORMS[1]} are fixed forms worth carrying whole, and that the choice between them and veux is about how an exchange lands rather than about being correct, which is the same thing ${A1_01_UNIT} was telling you with ${A1_01_REFRAME} The third is smaller and it will come back: ${WHAT_FOLLOWS}. dois followed by a verb and dois followed by a thing are two unrelated sentences, and you met that shape at ${WHAT_FOLLOWS_UNIT} on a different pair. ${RESERVED_FOR_NEIGHBOURS[0].unit} is next and it brings pouvoir back to stand against a verb that also becomes can in English, so the eighteen cells you have just built are about to be worth more than they were.`,
      },
    ],
  },
];

export const MODAUX_LESSON: Lesson = {
  id: 'a2.13.l1',
  unitId: 'a2.13',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'Irréguliers 3 : vouloir, pouvoir, devoir',
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`), and a2.13 sits at
  // seq 7, which pads to "07". The stored value is a fallback and has to agree
  // with what the renderer computes. The batch checks it against the live unit
  // rather than trusting this comment.
  tag: 'A2 · LEÇON 07',
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped grammar jargon here in v1 because every
  // guard in the band walked `sections`, `sheets` and `terms` and not this. The
  // walk in the batch, the merge and the test includes `intro` and `overview`,
  // and this field is pinned by its own assertion.
  intro:
    'Three verbs that will not come apart, and what they buy is every other verb in the language: put any one of them in front and the next verb never changes. The forms take ten minutes. What you can say afterwards is the rest of the lesson.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,

  grammarAssumed: [
    'The six subject pronouns and the nine they cover, introduced in a1.05',
    'on takes third-person-singular agreement, introduced in a1.05',
    'nous as the written first-person plural against on as the spoken one, introduced in a2.01',
    'The present tense of regular -er verbs as a stem plus six endings, introduced in a2.01',
    'The present tense of regular -ir and -re verbs, introduced in a2.10 and a2.11',
    'The bare singular in -s and -t on -re verbs, introduced in a2.11',
    'The present tense of être and avoir, introduced in a1.06 and a1.07',
    'The present tense of aller, venir and tenir as unanalysable forms, introduced in a2.02',
    'Yes/no questions formed by intonation alone, introduced in a1.19',
    'The definite and partitive articles inside the objects of these sentences, introduced in a1.04 and a1.29',
    'Je voudrais as an unexplained fixed phrase, introduced in a1.01',
  ],
  grammarIntroduced: [
    'The present tense of vouloir, pouvoir and devoir, as three stems per verb rather than one',
    'That the third-person-plural stem is derivable as the singular stem plus the final consonant of the nous stem, identically across all three verbs',
    'The -x ending on the first and second person singular of vouloir and pouvoir, against the ordinary -s on devoir',
    'The modal-plus-infinitive construction: a conjugated verb followed by a second verb in its infinitive, which does not agree',
    'That the construction is productive over the entire verb lexicon, including verbs not taught anywhere in the course',
    'je voudrais and nous voudrions as fixed polite forms, named as fixed and not analysed as conditional',
    'The three senses of pouvoir (permission, epistemic possibility and ability) as one French verb against three English ones',
    'devoir plus a noun phrase as the second sense to owe, distinguished from the modal only by what follows',
    'il faut as an impersonal expression of obligation, for recognition only, owned by no unit in the curriculum',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'Irregular Verbs 3: Vouloir, Pouvoir, Devoir',
    subFr: 'Irréguliers 3 : vouloir, pouvoir, devoir',
    introFr: 'Trois verbes irréguliers, et tous les autres verbes derrière eux.',
    minutes: 40,
    difficulty: 3,
    glyph: 'Vp',
    screens: 254,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: MODAUX_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-13-modaux.test.ts, because a constraint on
    // how something is recorded becomes invisible the moment the clip is
    // delivered. The first two pull in OPPOSITE directions, which is the whole
    // difficulty of recording this one.
    recorded: [
      {
        id: 'rec-a2-13-singular',
        desc: 'THE NINE SINGULAR CELLS, IN THREE GROUPS OF THREE, AND WITHIN EACH GROUP THE THREE MUST BE ACOUSTICALLY IDENTICAL ON THE VERB: « Je veux payer. » « Tu veux payer. » « Il veut payer. » then the same for peux/peux/peut and dois/dois/doit. This is the single most important instruction in this lesson and it is the opposite of what a reader will want to do. The whole screen is that these three cells CANNOT be told apart by ear, and the learner has to discover that by failing to hear a difference. A reader who knows the third one is spelled differently will put a fraction of a t on it, or brighten the vowel, or leave a hair more space before it. Every one of those instincts destroys the mission. If a listener with their eyes shut can say which of the three they just heard, the take is unusable. The PRONOUN must carry all the difference, and it must be clear and unhurried, because it is the only information in the line. Conversational pace, no teaching pause anywhere.',
        clipIds: [
          'Je veux payer.', 'Tu veux payer.', 'Il veut payer.',
          'Je peux payer.', 'Tu peux payer.', 'Il peut payer.',
          'Je dois payer.', 'Tu dois payer.', 'Il doit payer.',
        ],
      },
      {
        id: 'rec-a2-13-frame',
        desc: 'THE EIGHTEEN CELLS AS ONE FRAME, READ IN GRID ORDER, EACH VERB\'S SIX IN ONE TAKE. Here the plural MUST be audible, which is the opposite instruction from the singular clip and is why they are separate recordings. veulent, peuvent and doivent each land a consonant at the very end of the verb, VUHL, PUHV, DWAHV, and that consonant is the only thing separating them from the singular, so it must be clean and unswallowed. The nous and vous rows add a syllable and go into the nose at nous; do not soften the nasal. AND payer MUST SOUND EXACTLY THE SAME IN ALL EIGHTEEN LINES. It is the control: the learner is being shown that the back of the sentence does not move, and any variation in stress, length or vowel on payer is the recording quietly contradicting the lesson. Read it as if it were one word you happened to say eighteen times.',
        clipIds: PARADIGM_IDS.map((id) => fr(id)),
      },
      {
        id: 'rec-a2-13-register',
        desc: 'THE FOUR REGISTER LINES, IN TWO PAIRS, BLUNT THEN POLITE: « Je veux payer. » / « Je voudrais payer. » then « Je veux un café, s\'il vous plaît. » / « Je voudrais un café, s\'il vous plaît. » THE DIFFICULTY IS THAT THE DIFFERENCE MUST NOT BE PERFORMED. The blunt version is not rude, not aggressive and not clipped; it is exactly how a small child asks for something, and an adult saying it sounds like one. If the reader makes it sound hostile, the learner concludes it is a rudeness they would never commit, and the lesson fails. Read both halves of each pair in the same warm, ordinary voice at the same pace, and let the VERB do all the work. The please on the third line must be perfectly sincere and must not save it.',
        clipIds: [
          'Je veux payer.', 'Je voudrais payer.',
          'Je veux un café, s\'il vous plaît.', 'Je voudrais un café, s\'il vous plaît.',
        ],
      },
      {
        id: 'rec-a2-13-unseen',
        desc: 'THE GENERALISATION MISSION. « arroser » alone, then « Je peux arroser le jardin. » then « Tu dois arroser le jardin. » The single word first, slowly and clearly, because this is the only time the learner will hear it before being asked to use it. Three syllables,, ah-roh-ZAY, stress on the last. Then the two sentences at completely ordinary pace, with NO emphasis on arroser at all. That is the point: it must sound like the least remarkable word in the sentence, because the claim is that an unknown verb behaves exactly like a known one. A reader who leans on it is telling the learner it is special, and it is precisely not.',
        clipIds: ['arroser', 'Je peux arroser le jardin.', 'Tu dois arroser le jardin.'],
      },
      {
        id: 'rec-a2-13-verbs',
        desc: 'THE THREE NAMING FORMS AND THE TEN BORROWED VERBS, each as a single word, conversational and unstressed. vouloir, pouvoir and devoir first: all three end in the same -oir and the reader must not differentiate them beyond what the spelling requires. Then payer, commander, attendre, choisir, boire, acheter, aider, chercher, conduire, arriver. These ten come from ten different lessons and the learner should hear no family resemblance and no grouping. They are a bag of ordinary verbs,, which is the whole reason they are in this lesson.',
        clipIds: [...MODAL_ORDER, ...INFINITIVES],
      },
      {
        id: 'rec-a2-13-scene',
        desc: 'THE BAKERY. The boulangère is friendly, busy and completely uninterested in teaching anybody French, because she is closing in ten minutes. « Bonjour, je vous écoute. » is warm and quick. « Voilà. Et avec ceci ? » is already moving on to the next customer; the learner has to feel that the moment passed rather than that they were judged. Nothing in this scene is unkind and nothing is slowed down for them. The failure is entirely one of speed.',
        clipIds: ['Bonjour, je vous écoute.', 'Voilà. Et avec ceci ?'],
      },
    ],
  },
};

/* ─── Arrays the guards read, exported at the FOOT of the file ─────────────
 *
 * These are reads off consts declared above, so they cannot live in the export
 * block near the top: `export const X = SPEAK_IDS` before SPEAK_IDS is declared
 * is a temporal dead zone and throws at import time rather than failing to
 * compile. The section ids up there are literals for exactly that reason.
 *
 * The batch, the merge and the test all read THESE rather than rebuilding the
 * arrays, so a guard can never disagree with what the renderer is handed.    */

export const MODAUX_SPEAK_IDS = SPEAK_IDS;
export const MODAUX_ITEM_IDS = ITEM_IDS;
export const MODAUX_DECK_TRANCHE = DECK_TRANCHE;
export const MODAUX_ACTS = ACTS;
