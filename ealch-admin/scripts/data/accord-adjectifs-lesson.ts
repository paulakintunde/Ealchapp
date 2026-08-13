// a2.03.l1 "L'accord des adjectifs" — the mission journey.
//
// ── THIS IS A FIRST BUILD ──────────────────────────────────────────────────
//
// Probed rather than assumed: the unit dump says `"lessonIds": []`, so there is
// no pre-v2 stub to rebuild and the version counter starts at 1. Corrections §1
// records that this is now true of all sixteen remaining A2 units, and it was
// checked anyway because a2.01's brief said the same thing and was wrong.
//
// ── HOW IT IS SIZED, AND WHY ──────────────────────────────────────────────
//
// TWENTY-FIVE SECTIONS AND SIX ACTS.
//
//   act 1  where the sentence stopped   3 missions
//   act 2  four shapes, four patterns   5 missions
//   act 3  THE TWO NAMED GROUPS         7 missions   the heaviest act, alone
//   act 4  the ones that never change   3 missions
//   act 5  out loud                     4 missions
//   act 6  prove it                     3 missions
//
// The grid gets five missions and the two families get seven. a1.13 and a1.14
// both already print a four-form grid — a1.14 says `grands` twenty times and
// `grandes` thirteen — so a lesson weighted the other way round would be the
// learner's third copy of a screen they have seen twice. Act 4 is three rather
// than five for the same reason: a1.13 owns the invariable colours and says so
// 176 times, and what is left for a2.03 is naming the class and extending it.
//
// ── WHAT MAKES THIS ONE FEEL DIFFERENT, AND IT IS MEASURED ────────────────
//
// Nine consecutive verb lessons precede this on the trail. Across all ten
// shipped A2 lesson bodies, counted on 2026-08-13:
//
//   groupDrill  45  and  cardDeck  42   out of 255 sections, 34% between them
//   tapTable    10  (1.0 per lesson)
//   useCases     0  in all ten
//   vocabThemes  0  in all ten
//
// This lesson ships ONE groupDrill and TWO cardDecks, against averages of 4.5
// and 4.2, and it is the first lesson in the band to use `useCases` (twice) or
// `vocabThemes` (once). Both were grepped in the renderer before being authored:
// `MissionSection.tsx`'s switch has no case for either, and its shared fallback
// — which lives AFTER the switch precisely so a `break` lands on it — hands them
// to `SectionView`, which draws `situation`/`fr`/`en` for a useCases card and
// `VocabThemesView` for a vocabThemes hub. Neither is the a1.08 class.
//
// ── THE LAYOUT CLAIMS, AND WHERE THEY ARE ─────────────────────────────────
//
// 1. "The four-form grid is the hero and it must be one screen."
//
//    That is `s04-grid`. FOUR ROWS, one per pattern, four columns, every cell
//    nine characters or fewer. It is a `tapTable` and not a `table` because a
//    `table` at layer core is a table-in-core density failure (corrections §8);
//    the full grid with the respellings lives in the sheet at layer deep.
//    `tapTable` is NOT in ownsLayout(), so it renders inside a scrolling page
//    and six rows is the Pixel 6 ceiling. This is the screen most likely to be
//    wrong on a device and the build report says so.
//
// 2. "The invariable class needs a regular adjective visible beside it in the
//    same section, or it reads as a bug."
//
//    That is `s16-never`. The first two examples are `Ses vestes sont vertes.`
//    and `Ses vestes sont marron.` — one noun, one number, two adjectives — and
//    they are asserted BY INDEX, in that order, because the order is the claim.
//
// 3. "listening for the -eux/-euse and -if/-ive sound changes."
//
//    `s06-silent` and `s12-ear`. The claim is wider than the brief's and it is
//    the one that is actually true of all three families: the feminine is
//    audible in every one of them and the plural is audible in none.
//
// 4. "A reference sheet with the four patterns."
//
//    `sheet.a2.03.patterns`, layer deep, four tables and two teach blocks. NO
//    `cheatSheet`: ReferenceSheet.tsx draws `teach`, `letterGrid` and `table`
//    and nothing else, and a1.13 ships a cheatSheet inside a sheet today that
//    draws its title and nothing under it.
//
// ── LAYOUT NOTES THAT ARE BUGS, NOT PREFERENCES ───────────────────────────
//
// - `size` is not decoration. density.logic.ts reads `xl` as a 12-word cap on
//   EVERY string in the section except `say`, `hint`, `note`, `why` and `tip`.
// - `commonErrors` needs `swipe: true` or it renders a blank screen.
// - `tapTable`, `vocabThemes` and `useCases` are NOT in ownsLayout().
// - Three term chips per section, maximum.
// - ONE quiz per lesson. A second is silently never rendered.
// - `reading` + `glossary` needs `questionsInModal: true` AND questions, and the
//   passage is ONE BLOCK: PassagePage splits on /(?<=[.!?»])\s+/ and an authored
//   newline is silently discarded. A glossary key of five or more words can
//   never match.
// - `practice` with `skill: 'write'` draws no writing surface, and `skill:
//   'speak'` needs `voiceflash` on every item it names. The two sportif
//   sentences do not have it and are not in the speak list.
// - `frSub` is the one field that is deliberately French. a2.14 put an English
//   constant in one and it was the only English line in a column of French subs.
// - Mission titles: 27 is the ceiling and it is a WIDTH rather than a count
//   (ledger §a2.14-13). Every title here is 25 or fewer except the house goals
//   heading, which is 27 and which 36 lessons ship.

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
  ACCORD_ADJECTIFS_TERMS,
  CARRY_FORWARD,
  DEFAULT_CLAIM,
  EAR_BOOKEND,
  ENDING_CLAIM,
  IDENTICAL_ARITHMETIC,
  INVARIABLE_CLAIM,
  INVARIABLE_NEW_CLAIM,
  NEXT_LESSON_LINE,
  PATTERN_ARITHMETIC,
} from './accord-adjectifs-terms.ts';
import {
  A113_REFRAME,
  ADVERB_UNIT,
  AUTHORED_IDS,
  BEAU_UNIT,
  CELL_ORDER,
  CELL_SUBJECT,
  COMPARATIVE_UNIT,
  DICTATION_IDS,
  EAR_CLAIM,
  EAR_UNIT,
  FORM_COUNT,
  GRID,
  IDENTICAL_CLAIM,
  IDENTICAL_UNIT,
  INVARIABLE_UNIT,
  KNOWN_INVARIABLES,
  NEW_INVARIABLES,
  PATTERN_LABEL,
  PATTERN_ORDER,
  PLACEMENT_LINE,
  PLACEMENT_UNIT,
  REFRAME,
  SOUND_COUNT,
  THE_MOVE,
  UNSEEN,
  bare,
  cellId,
  en,
  form,
  formRespell,
  fr,
  noStop,
  patternIds,
  sub,
  type Cell,
  type Pattern,
} from './accord-adjectifs-corpus.ts';
import {
  EUX_FAMILY,
  EVIDENCE_FR,
  EVIDENCE_IDS,
  IF_FAMILY,
  IMPORTED_IDS,
  INVARIABLE_NEW,
  displayRespell,
  evidenceCard,
  evidenceId,
  importedCard,
  importedEn,
  importedFr,
  namingCard,
  namingId,
  namingRespell,
} from './accord-adjectifs-imported.ts';

export { CARRY_FORWARD, EAR_CLAIM, REFRAME, THE_MOVE };

/* ─── Named section ids, so a guard asserts a PLACE rather than a pattern ──
 *
 * Plain literals rather than reads off SECTIONS, so that a section being RENAMED
 * breaks the guard instead of quietly moving it. */

/** The hero: four patterns, four cells, one screen. */
export const GRID_SECTION_ID = 's04-grid';
/** The -eux group, and the cell that does not move. */
export const EUX_SECTION_ID = 's09-eux';
export const IDENTICAL_SECTION_ID = 's10-nos';
/** The -if group. */
export const IF_SECTION_ID = 's11-if';
/** The two listening screens. */
export const SILENT_SECTION_ID = 's06-silent';
export const EAR_SECTION_ID = 's12-ear';
/** The invariable class, WITH a regular adjective beside it. */
export const INVARIABLE_SECTION_ID = 's16-never';
export const NEW_COLOUR_SECTION_ID = 's17-newcolour';
/** The generalisation test, and the only mission allowed to print a cold one. */
export const COLD_SECTION_ID = 's15-cold';
/** The rest, named because a guard or an act references them. */
export const SCENE_SECTION_ID = 's01-scene';
export const GOALS_SECTION_ID = 's02-goals';
export const FRONT_SECTION_ID = 's03-front';
export const DEFAULT_SECTION_ID = 's05-default';
export const USECASES_SECTION_ID = 's07-where';
export const WHICH_SECTION_ID = 's08-check';
export const BANK_SECTION_ID = 's13-bank';
export const READING_SECTION_ID = 's14-reading';
export const ERRORS_SECTION_ID = 's18-errors';
export const SCENARIO_SECTION_ID = 's19-scenario';
export const DICTATION_SECTION_ID = 's20-dictation';
export const SPEAK_SECTION_ID = 's21-speak';
export const REVIEW_SECTION_ID = 's22-review';
export const PROGRESS_SECTION_ID = 's23-progress';
export const QUIZ_SECTION_ID = 's24-quiz';
export const ROUNDUP_SECTION_ID = 's25-roundup';
export const SHEET_ID = 'sheet.a2.03.patterns';

/** The two rows `s16-never` must put next to each other, IN THIS ORDER. The
 *  order is the layout claim, so the guards check it by index. */
export const CONTRAST_PAIR = ['fr.a2.adjectifs-essentiels.030', 'fr.a2.adjectifs-essentiels.031'] as const;

/* ─── The items this lesson touches ───────────────────────────────────────
 *
 * 33 authored plus 23 imported, out of six themes. Six imported rows are
 * repaired, two gain a respelling they never had, and two gain a `flashcard`
 * drill so a deck release has something to draw.                             */

const ITEM_IDS = [...new Set([...AUTHORED_IDS, ...IMPORTED_IDS])];

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. Every authored row has it and so does
 *  every imported word row; the two `description-personnes-objets` sentences do
 *  NOT, so they are deliberately absent. A speak mission that names them renders
 *  cards the mic cannot score. */
const SPEAK_IDS = [
  ...PATTERN_ORDER.flatMap((p) => patternIds(p)),
  'fr.a2.adjectifs-essentiels.020', 'fr.a2.adjectifs-essentiels.022',
  'fr.a2.adjectifs-essentiels.024',
  'fr.a2.adjectifs-essentiels.026', 'fr.a2.adjectifs-essentiels.027',
  'fr.a2.adjectifs-essentiels.028', 'fr.a2.adjectifs-essentiels.029',
  'fr.a2.adjectifs-essentiels.030', 'fr.a2.adjectifs-essentiels.031',
  'fr.a2.adjectifs-essentiels.033',
];

/** One authored row as a groupDrill or deck item. `note` carries the respelling
 *  and the gloss; a card must put SOMETHING under the French. */
const rowCard = (id: string) => ({ fr: fr(id), itemId: id, note: `${sub(id)} · ${en(id)}` });

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * Doctrine §B.2: an A2 scene opens on somebody who started a sentence they could
 * not finish. Nobody is rude, nobody is corrected, nothing is mispronounced. The
 * learner runs out of sentence in public.
 *
 * The brief asks for something exact to this subject: somebody describing a
 * person, reaching for the feminine of an adjective they only know in the
 * masculine, and stalling in the middle of the description. That is what this
 * is. The learner owns `sérieux` completely. The flatmate is a woman. The four
 * letters that finish the word do not arrive, and the sentence dies while the
 * other person waits.
 *
 * THERE IS NO WRONG FRENCH SENTENCE IN THIS SCENE, deliberately, and a2.11 set
 * the precedent: a learner with nothing to overwrite a wrong form with keeps the
 * wrong form, and at mission 1 of 25 nobody has been given the right one yet.
 * The failure is a silence and a switch into English, which is what actually
 * happens, and it costs the rest of the conversation.
 *
 * Beats carry their own `size`. The section sets NONE: ownsLayout() ignores it
 * and density.logic.ts would read `xl` as a 12-word cap on every string.
 *
 * The break card is BUDGETED, not chosen. Ledger §7, measured on a Pixel 6: a
 * heading of about 13 characters, a body of 24 to 26 words, a coach line under
 * 9 words, and a right-hand reading row whose French stays under about 24
 * characters so it sets on one line. a2.14 shipped one at 31 and its own
 * Continue went under the pager bar. `sérieuse` is 8.                          */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    // "in the sixth arrondissement of Lyon" was the first draft and the -ment
    // guard fired on it. a2.14 §6: reword rather than grow the exception list.
    text: 'A shared flat near the river in Lyon, on a Saturday morning. You are the fourth person to look at the room today and you would like it. The woman showing you round is one of the two people already living there.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'La colocataire',
    fr: 'Et vous, vous travaillez beaucoup ?',
    en: 'And you, do you work a lot?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-03-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Oui. Ma sœur habite avec moi en ce moment, et elle est... elle est...',
    en: 'Yes. My sister is living with me at the moment, and she is... she is...',
    stage: `You have said « ${form('eux', 'm.sg')} » a hundred times. You have never once had to say it about a woman, and the four letters that finish it are not there.`,
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'Three seconds have gone. She is still waiting. What comes out?',
    options: [
      {
        fr: noStop(fr(cellId('eux', 'f.sg'))),
        respell: `[${bare(cellId('eux', 'f.sg'))}]`,
        en: 'the word you own, with its ending changed',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'She is very serious.',
        en: 'and the rest of the viewing is in English',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'en-GB' },
      },
    ],
    followUp: {
      works: 'She nods and asks whether your sister is staying long, in French, and you are still in the conversation.',
      breaks: 'She switches to English without thinking about it and stays there. You get the room or you do not, and either way you spent the morning in your own language.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La colocataire',
    fr: 'Ah, your sister? Is she staying long? Sorry, my English is not great.',
    en: 'Ah, your sister? Is she staying long? Sorry, my English is not great.',
    stage: 'Nobody was unkind and nobody corrected anything. She took the shortest route to being understood and it was not French.',
    audio: { mode: 'tts', lang: 'en-GB' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'Four letters',
    body: 'You did not need a word you had never met. You needed the one you already had, with the last letter swapped for three others and nothing else touched.',
    wrong: {
      fr: form('eux', 'm.sg'),
      ipa: '/se.ʁjø/',
      respell: `[${formRespell('eux', 'm.sg')}]`,
      en: 'the one you own',
    },
    right: {
      fr: form('eux', 'f.sg'),
      ipa: '/se.ʁjøz/',
      respell: `[${formRespell('eux', 'f.sg')}]`,
      en: 'and this is the one',
    },
    coach: 'Look at the end of the plain form.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-03-break' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: `${REFRAME} That is the whole lesson, and by the end of it you will do it to a word nobody here is going to show you.`,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  /* ── Act 1: where the sentence stopped ─────────────────────────────────── */

  {
    type: 'scene',
    id: SCENE_SECTION_ID,
    title: 'The Flat Viewing',
    frSub: 'La visite',
    render: 'screens',
    layer: 'core',
    setting: { place: 'A shared flat', city: 'Lyon', time: 'Saturday morning' },
    beats: SCENE_BEATS,
    closing: { text: REFRAME, size: 'md' },
    terms: ['theMasculine'],
  },

  {
    type: 'goals',
    id: GOALS_SECTION_ID,
    // 27 characters, and it is the house heading that 36 lessons in the seed
    // ship. Ledger §a2.14-13 measured it as fitting on the hub.
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    goals: [
      { t: 'Build all four shapes', s: `Of any describing word, from the plain form alone. ${PATTERN_ARITHMETIC}` },
      { t: 'Read the last two letters', s: ENDING_CLAIM },
      { t: 'Spot the ones that never move', s: `${INVARIABLE_UNIT} showed you two of them. There is a whole group and you have met almost none of it.` },
      { t: 'Do it to a word you have never seen', s: 'The last screen before the exam gives you three. The exam makes you build them.' },
    ],
  },

  {
    type: 'examples',
    id: FRONT_SECTION_ID,
    title: 'Read The Last Two Letters',
    frSub: 'La fin du mot',
    layer: 'core',
    say: `${REFRAME} Look at the plain form of each of these four and say which group it is in before you turn the page.`,
    examples: [
      { fr: form('default', 'm.sg'), en: 'tall', note: `${PATTERN_LABEL.default}. It ends in none of the things below, which is what puts it here.` },
      { fr: form('eux', 'm.sg'), en: 'serious', note: `${PATTERN_LABEL.eux}. Two letters, and they decide the other three shapes.` },
      { fr: form('if', 'm.sg'), en: 'sporty', note: `${PATTERN_LABEL.if}. One letter this time, and it is going to turn into another one.` },
      { fr: form('invariable', 'm.sg'), en: 'brown', note: `${PATTERN_LABEL.invariable}. This one is a chestnut wearing a colour's job, and ${INVARIABLE_UNIT} already told you what it does about it: nothing.` },
    ],
    terms: ['theMasculine', 'fourShapes'],
  },

  /* ── Act 2: four shapes, four patterns ─────────────────────────────────── */

  {
    /* THE HERO. Four rows, four columns, every cell nine characters or fewer,
       and the whole thing on one screen. A `table` here would be a table-in-core
       density failure; the full grid with the respellings is in the sheet.

       The row ORDER is PATTERN_ORDER and `invariable` is last deliberately: it
       only reads as a class once three patterns that do change sit above it. */
    type: 'tapTable',
    id: GRID_SECTION_ID,
    title: 'Four Words, Four Ways',
    frSub: 'Les quatre formes',
    layer: 'core',
    say: `Every word on this screen is on it four times. Tap a row to hear all four and to find out what decides them. ${REFRAME}`,
    cols: ['Plain form', 'A woman', 'Several', 'Several women'],
    rows: PATTERN_ORDER.map((p) => ({
      cells: CELL_ORDER.map((c) => form(p, c)),
      say: fr(cellId(p, 'f.sg')),
      detail: {
        title: PATTERN_LABEL[p],
        body: p === 'invariable'
          ? `One word, four times. ${INVARIABLE_CLAIM}`
          : `${CELL_ORDER.map((c) => `${CELL_SUBJECT[c]} ${form(p, c)}.`).join(' ')} Four ways to write it and ${SOUND_COUNT[p]} ways to say it: ${CELL_ORDER.map((c) => formRespell(p, c)).join(' · ')}.`,
        say: fr(cellId(p, 'm.sg')),
      },
    })),
    terms: ['fourShapes', 'theMasculine'],
  },

  {
    type: 'cardDeck',
    id: DEFAULT_SECTION_ID,
    title: 'The Ordinary One',
    frSub: 'Le cas ordinaire',
    layer: 'core',
    hint: 'Swipe through the four shapes.',
    cards: [
      { label: PATTERN_LABEL.default, head: form('default', 'm.sg'), sub: `[${formRespell('default', 'm.sg')}]`, body: `The plain form and the one you learn a word in. ${DEFAULT_CLAIM}` },
      { label: 'For a woman', fr: fr(cellId('default', 'f.sg')), sub: `[${bare(cellId('default', 'f.sg'))}]`, body: 'An e goes on the end, and the d in front of it stops being silent. Say both out loud and the second one finishes with a sound the first one does not have.' },
      { label: 'Several', fr: fr(cellId('default', 'm.pl')), sub: `[${bare(cellId('default', 'm.pl'))}]`, body: 'An s goes on the end, and absolutely nothing happens to the sound. It is the same word out loud as the first card.' },
      { label: 'Several women', fr: fr(cellId('default', 'f.pl')), sub: `[${bare(cellId('default', 'f.pl'))}]`, body: 'Both endings, in that order: the e first because it belongs to the word, then the s because it belongs to the number. Out loud it is the second card again.' },
      { label: 'What you just did', head: `${FORM_COUNT.default} written, ${SOUND_COUNT.default} heard`, body: `${DEFAULT_CLAIM} Hold on to that count. It is true of the next two groups and false of the fourth.` },
    ],
    terms: ['fourShapes', 'whatYouCanHear'],
  },

  {
    type: 'listening',
    id: SILENT_SECTION_ID,
    title: 'What Reaches Your Ear',
    frSub: 'Ce que l’oreille entend',
    layer: 'core',
    swipe: true,
    say: EAR_BOOKEND,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-03-ear' },
    lines: [
      { fr: fr(cellId('default', 'm.sg')), en: en(cellId('default', 'm.sg')) },
      { fr: fr(cellId('default', 'm.pl')), en: en(cellId('default', 'm.pl')) },
      { fr: fr(cellId('default', 'f.sg')), en: en(cellId('default', 'f.sg')) },
      { fr: fr(cellId('default', 'f.pl')), en: en(cellId('default', 'f.pl')) },
    ],
    questions: [
      {
        q: 'The first two sound identical. What is written differently?',
        opts: ['An s on the second one', 'A d on the second one', 'Nothing is written differently'],
        correct: 0,
        why: 'The plural s has never been pronounced in French. It is there for the eye and for nobody else.',
      },
      {
        q: 'The third and fourth also sound identical. Which one is about several people?',
        opts: ['The third', 'The fourth', 'You cannot tell from the sound'],
        correct: 2,
        why: `${EAR_CLAIM} The number is carried by the words in front, and by an s you will never hear.`,
      },
      {
        q: 'So what does the ear actually get?',
        opts: ['Whether it is one or several', 'Whether it is a man or a woman', 'Both', 'Neither'],
        correct: 1,
        why: EAR_CLAIM,
      },
    ],
    terms: ['whatYouCanHear'],
  },

  {
    /* FIRST useCases IN THE A2 BAND. Zero in all ten shipped lessons. The card
       shape is a situation eyebrow, a French line and a gloss, which is a
       genuinely different object from the deck cards the verb lessons run on. */
    type: 'useCases',
    id: USECASES_SECTION_ID,
    title: 'Where You Would Say It',
    frSub: 'Dans la vraie vie',
    layer: 'core',
    say: 'Four rooms, four shapes of the same word. The room decides which one.',
    cases: [
      { situation: 'Describing a colleague to somebody at lunch', fr: fr(cellId('default', 'm.sg')), en: en(cellId('default', 'm.sg')) },
      { situation: 'Being asked what your sister is like', fr: fr(cellId('default', 'f.sg')), en: en(cellId('default', 'f.sg')) },
      { situation: 'Talking about two brothers at a family party', fr: fr(cellId('default', 'm.pl')), en: en(cellId('default', 'm.pl')) },
      { situation: 'Talking about your two daughters at the school gate', fr: fr(cellId('default', 'f.pl')), en: en(cellId('default', 'f.pl')) },
    ],
    terms: ['fourShapes'],
  },

  {
    type: 'trapDrill',
    id: WHICH_SECTION_ID,
    title: 'Which Group Is It In?',
    frSub: 'Quel groupe ?',
    layer: 'core',
    size: 'lg',
    rule: {
      title: 'One decision, not four',
      body: `${THE_MOVE}`,
    },
    cards: [
      { promptLabel: PATTERN_LABEL.default, promptSound: form('default', 'm.sg'), fr: form('default', 'm.sg'), ipa: '/ɡʁɑ̃/', tip: 'Ends in d, which is on none of the lists, so it takes the ordinary endings.' },
      { promptLabel: PATTERN_LABEL.eux, promptSound: form('eux', 'm.sg'), fr: form('eux', 'm.sg'), ipa: '/se.ʁjø/', tip: 'Ends in x. That is the whole signal.' },
      { promptLabel: PATTERN_LABEL.if, promptSound: form('if', 'm.sg'), fr: form('if', 'm.sg'), ipa: '/spɔʁ.tif/', tip: 'Ends in f, and the f is the thing that is going to move.' },
      { promptLabel: PATTERN_LABEL.invariable, promptSound: form('invariable', 'm.sg'), fr: form('invariable', 'm.sg'), ipa: '/ma.ʁɔ̃/', tip: `A chestnut. ${A113_REFRAME}` },
      { promptLabel: PATTERN_LABEL.eux, promptSound: importedFr(namingId('heureux')), fr: importedFr(namingId('heureux')), ipa: '/ø.ʁø/', tip: 'Same two letters as the second card, so the same three shapes follow.' },
      { promptLabel: PATTERN_LABEL.invariable, promptSound: importedFr(namingId('kaki')), fr: importedFr(namingId('kaki')), ipa: '/ka.ki/', tip: 'A colour named after dust. Same class as the chestnut, and you have not met it before.' },
    ],
    drill: [
      { promptSay: importedFr(namingId('curieux')), opts: [PATTERN_LABEL.eux, PATTERN_LABEL.if, PATTERN_LABEL.default], correct: 0 },
      { promptSay: importedFr(namingId('impulsif')), opts: [PATTERN_LABEL.default, PATTERN_LABEL.if, PATTERN_LABEL.invariable], correct: 1 },
      { promptSay: importedFr(namingId('orange')), opts: [PATTERN_LABEL.invariable, PATTERN_LABEL.eux, PATTERN_LABEL.default], correct: 0 },
      { promptSay: importedFr(namingId('généreux')), opts: [PATTERN_LABEL.default, PATTERN_LABEL.eux, PATTERN_LABEL.invariable], correct: 1 },
      { promptSay: importedFr(namingId('vert')), opts: [PATTERN_LABEL.default, PATTERN_LABEL.invariable, PATTERN_LABEL.if], correct: 0 },
      { promptSay: importedFr(namingId('bleu marine')), opts: [PATTERN_LABEL.eux, PATTERN_LABEL.default, PATTERN_LABEL.invariable], correct: 2 },
    ],
    terms: ['theMasculine'],
  },

  /* ── Act 3: THE OWNS. The two groups nothing in this project has taught ─── */

  {
    type: 'cardDeck',
    id: EUX_SECTION_ID,
    title: 'The X Becomes SE',
    frSub: 'Les mots en -eux',
    layer: 'core',
    hint: 'Swipe through the group.',
    cards: [
      { label: PATTERN_LABEL.eux, head: form('eux', 'm.sg'), sub: `[${formRespell('eux', 'm.sg')}]`, body: 'The plain form, and the one the scene stopped on. Everything about this group is decided by the two letters it ends in.' },
      { label: 'For a woman', fr: fr(cellId('eux', 'f.sg')), sub: `[${bare(cellId('eux', 'f.sg'))}]`, body: 'The x goes and se arrives, and the word ends in a buzz you can hear across a room. This is the one change in the whole lesson your ear cannot miss.' },
      { label: 'Several women', fr: fr(cellId('eux', 'f.pl')), sub: `[${bare(cellId('eux', 'f.pl'))}]`, body: 'The s goes on the end of the shape you just built, not on the plain form. Build the woman first and the rest is ordinary.' },
      { label: 'And it is a group', head: `${EUX_FAMILY.length} more like it`, body: `${EUX_FAMILY.filter((w) => w !== 'sérieux').join(', ')}. Every one of them does the same thing and there is nothing else to learn about any of them.` },
      { label: 'One of them', fr: importedFr(namingId('heureuse')), sub: `[${namingRespell('heureuse')}]`, body: `${importedFr(namingId('heureux'))} is ${importedEn(namingId('heureux'))}, and this is the same word about a woman. Look at the two respellings on this card and the one before it: only the end moved.` },
      { label: 'And another', fr: fr('fr.a2.adjectifs-essentiels.020'), sub: sub('fr.a2.adjectifs-essentiels.020'), body: `${en('fr.a2.adjectifs-essentiels.020')} Third word, third time the same two letters have done the same job.` },
    ],
    terms: ['theEuxGroup', 'whatYouCanHear'],
  },

  {
    /* THE ODDITY, AND THE ASSERTION THAT STOPS A FUTURE AUTHOR ADDING AN s.
       a1.14 owns the fact for `vieux` and `mauvais`; this generalises it from two
       words to a group of twenty-five and names a1.14 on the screen that does
       it. Doctrine §B.7: point at the repeat. */
    type: 'examples',
    id: IDENTICAL_SECTION_ID,
    title: 'The One That Adds Nothing',
    frSub: 'Le pluriel qui ne bouge pas',
    layer: 'core',
    say: `${IDENTICAL_CLAIM} ${IDENTICAL_ARITHMETIC}`,
    examples: [
      { fr: fr(cellId('eux', 'm.sg')), en: en(cellId('eux', 'm.sg')), note: 'One man.' },
      { fr: fr(cellId('eux', 'm.pl')), en: en(cellId('eux', 'm.pl')), note: 'Several men, and the describing word is the same six letters. There is no s and there never was one. DELIBERATE: an x has nowhere to put one.' },
      { fr: fr('fr.a2.adjectifs-essentiels.023'), en: en('fr.a2.adjectifs-essentiels.023'), note: 'Second word from the group, plural, and again nothing on the end of it.' },
      { fr: fr(cellId('eux', 'f.pl')), en: en(cellId('eux', 'f.pl')), note: 'And this is where the s DOES turn up, because the feminine ending gave it somewhere to go.' },
    ],
    terms: ['theEuxGroup'],
  },

  {
    type: 'cardDeck',
    id: IF_SECTION_ID,
    title: 'The F Becomes A V',
    frSub: 'Les mots en -if',
    layer: 'core',
    hint: 'Swipe through the group.',
    cards: [
      { label: PATTERN_LABEL.if, head: form('if', 'm.sg'), sub: `[${formRespell('if', 'm.sg')}]`, body: 'The plain form. The f on the end is said out loud, which is worth noticing before the next card.' },
      { label: 'For a woman', fr: fr(cellId('if', 'f.sg')), sub: `[${bare(cellId('if', 'f.sg'))}]`, body: 'The f turns into a v and nothing else in the word moves at all. Say them one after the other and the only thing that changed is the last sound.' },
      { label: 'Several', fr: fr(cellId('if', 'm.pl')), sub: `[${bare(cellId('if', 'm.pl'))}]`, body: 'An ordinary s, and it is silent like every other plural s in the language. Out loud this is the first card again.' },
      { label: 'Several women', fr: fr(cellId('if', 'f.pl')), sub: `[${bare(cellId('if', 'f.pl'))}]`, body: 'The v first, then the s. That order never changes: build the woman, then add the number.' },
      { label: 'Written by somebody else', fr: evidenceCard(EVIDENCE_FR[1]).fr, sub: `[${displayRespell(evidenceId(EVIDENCE_FR[1]))}]`, body: 'This sentence was published years before this lesson existed, in a set about describing people, and nobody writing it was thinking about groups of words. It is the same v and the same s.' },
    ],
    terms: ['theIfGroup'],
  },

  {
    /* The second tapTable, and the one that pays off the listening act. Three
       rows, well inside the six-row Pixel 6 ceiling for a section that does not
       own its layout. */
    type: 'tapTable',
    id: EAR_SECTION_ID,
    title: 'Hear It, Then Write It',
    frSub: 'Entendre et écrire',
    layer: 'core',
    say: `${EAR_CLAIM} Tap each row to hear the two shapes back to back.`,
    cols: ['Group', 'For a woman', 'Can you hear it?'],
    rows: (['default', 'eux', 'if'] as Pattern[]).map((p) => ({
      cells: [form(p, 'm.sg'), form(p, 'f.sg'), 'Yes'],
      say: fr(cellId(p, 'f.sg')),
      detail: {
        title: `${form(p, 'm.sg')} · ${form(p, 'f.sg')}`,
        body: `${formRespell(p, 'm.sg')} then ${formRespell(p, 'f.sg')}. ${p === 'default' ? 'A sound arrives at the end that was not there before.' : p === 'eux' ? 'The end of the word swaps one sound for another, and the second one buzzes.' : 'One sound turns into its neighbour, and the rest of the word is untouched.'} Now the other direction: ${form(p, 'm.sg')} and ${form(p, 'm.pl')} are the same sound, and so are ${form(p, 'f.sg')} and ${form(p, 'f.pl')}. ${FORM_COUNT[p]} written, ${SOUND_COUNT[p]} heard.`,
        say: fr(cellId(p, 'm.sg')),
      },
    })),
    // TWO CHIPS, NOT THREE. Three came to 40 characters against a measured row
    // budget of 32, and the guard the s13-bank defect produced caught it before
    // this screen was ever opened — which is the whole argument for turning a
    // device finding into a check rather than a note. `whatYouCanHear` is
    // already a chip on s05-default, s06-silent and s21-speak, so the two the
    // table actually compares are the two that stay.
    terms: ['theEuxGroup', 'theIfGroup'],
  },

  {
    /* FIRST vocabThemes IN THE A2 BAND. Zero in all ten shipped lessons, and it
       is the natural shape for this subject: two groups, side by side, each
       opening its own deck. a1.13, a1.14 and a1.16 all use it and every verb
       lesson since has reached for cardDeck instead. */
    type: 'vocabThemes',
    id: BANK_SECTION_ID,
    title: 'The Two Groups, Banked',
    frSub: 'Les deux groupes',
    layer: 'core',
    say: 'Two groups, and the second one is much smaller here than it is in French. The exam gives you a word from it that is on neither of these lists.',
    themes: [
      {
        title: `Ends in -eux · ${EUX_FAMILY.length} of them`,
        cards: EUX_FAMILY.map((w) => ({
          fr: importedFr(namingId(w)),
          sub: `[${namingRespell(w)}]`,
          en: importedEn(namingId(w)),
        })),
      },
      {
        title: `Ends in -if · ${IF_FAMILY.length + 1} of them`,
        cards: [
          { fr: form('if', 'm.sg'), sub: `[${formRespell('if', 'm.sg')}]`, en: 'sporty' },
          ...IF_FAMILY.map((w) => ({
            fr: importedFr(namingId(w)),
            sub: `[${namingRespell(w)}]`,
            en: importedEn(namingId(w)),
          })),
        ],
      },
    ],
    terms: ['theEuxGroup', 'theIfGroup'],
  },

  {
    type: 'reading',
    id: READING_SECTION_ID,
    title: 'The Flat Listing',
    frSub: 'L’annonce',
    layer: 'core',
    questionsInModal: true,
    // ONE BLOCK. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline
    // is silently discarded, so writing one would produce a passage that reads
    // correctly in this file and renders as a single run on the device anyway.
    text: 'Deux colocataires cherchent une troisième personne. Marc est grand et très sérieux ; il travaille beaucoup et il est souvent à la maison le soir. Léa est petite et très sportive ; elle court tous les matins et elle rentre tard. Ils sont tous les deux calmes et ils sont curieux. L\'appartement est clair : les murs sont crème et les rideaux sont kaki. Il y a deux chaises bleu clair dans la cuisine et un canapé marron dans le salon. Les chambres sont grandes et les fenêtres sont vertes.',
    glossary: [
      { word: 'colocataires', en: 'flatmates', note: 'Two of them, and the word covers a man and a woman without changing.' },
      { word: 'rideaux', en: 'curtains', note: 'Several of them, and the colour after this word does not react to that at all.' },
      { word: 'canapé', en: 'sofa', note: 'One of them, and the colour after it is the same six letters as the one after rideaux.' },
      { word: 'chambres', en: 'bedrooms', note: 'Several, and feminine, which is why the describing word after it carries two endings.' },
      { word: 'fenêtres', en: 'windows', note: 'Several, and feminine. Look at what happens to the colour and compare it with the curtains.' },
    ],
    questions: [
      { q: 'Which of the two is sporty, and how is the word written?', a: 'Léa, and it is written with a v because it is about a woman.' },
      { q: 'The curtains and the sofa are two different colours. What do the two colour words have in common?', a: 'Neither of them changes for anything. One is a dust colour and one is a chestnut.' },
      { q: 'Why do the windows get a colour with two endings on it and the curtains get one with none?', a: 'Green is an ordinary describing word and takes an e and an s. Khaki is a borrowed thing and takes nothing.' },
      { q: 'Marc and Léa are described together at one point. What tells you the group has a man in it?', a: 'Nothing you can hear. The written form has no e on it, and that is the only signal.' },
    ],
    terms: ['theOnesThatNeverChange', 'fourShapes'],
  },

  {
    /* THE GENERALISATION TEST, AND THE ONLY MISSION ALLOWED TO PRINT A COLD ONE.
       Doctrine §B.1: a mission that lists the forms has taught nothing a table
       cannot; one that makes the learner produce a form from a word the lesson
       never showed them has taught the system.

       A groupDrill `check` is an mcq (a2.15 §6), so the strongest thing a
       MISSION can do here is make the learner pick the correctly built form out
       of three plausible mis-builds. The free-text production is round 5 of the
       exam. Groups carry `items: []` explicitly, which is the house control-page
       shape: none of these three adjectives is a corpus row in this lesson and
       an item here would make it one. */
    type: 'groupDrill',
    id: COLD_SECTION_ID,
    title: 'Three You Have Not Met',
    frSub: 'Trois mots inconnus',
    layer: 'core',
    size: 'lg',
    say: 'Three words. None of them is on any card in this lesson, in any deck, or in any list you have seen. You have everything you need for all three.',
    groups: UNSEEN.map((u) => ({
      label: `${u.masculine} · ${u.en}`,
      items: [],
      check: {
        q: `${CELL_SUBJECT['f.pl']} ___ .`,
        opts: u.pattern === 'eux'
          ? [`${u.forms['f.pl']}`, `${u.forms['m.sg']}s`, `${u.masculine}es`]
          : u.pattern === 'if'
            ? [`${u.forms['m.pl']}`, `${u.forms['f.pl']}`, `${u.masculine}es`]
            : [`${u.forms['f.pl']}`, `${u.masculine}s`, `${u.masculine}es`],
        correct: u.pattern === 'if' ? 1 : 0,
        why: u.pattern === 'invariable'
          ? `It ends in nothing, because it is a stone rather than a describing word. ${A113_REFRAME}`
          : u.pattern === 'eux'
            ? `${u.masculine} ends in x, so the woman form swaps it for se and the s goes on the end of that.`
            : `${u.masculine} ends in f, so the f becomes a v and then the s goes on.`,
      },
    })),
    terms: ['theMasculine'],
  },

  /* ── Act 4: the ones that never change ─────────────────────────────────── */

  {
    /* THE SECOND LAYOUT CLAIM THE TEST MUST ASSERT. A regular adjective is
       visible in the same section as the invariable one, and the first two
       examples are the pair: one noun, one number, two describing words. They
       are asserted BY INDEX because the order is the claim. */
    type: 'examples',
    id: INVARIABLE_SECTION_ID,
    title: 'Marron Is Still A Nut',
    frSub: 'Les mots qui ne changent pas',
    layer: 'core',
    say: `${INVARIABLE_CLAIM}`,
    examples: [
      { fr: fr(CONTRAST_PAIR[0]), en: en(CONTRAST_PAIR[0]), note: 'The control. An ordinary colour on a feminine plural noun, carrying both endings.' },
      { fr: fr(CONTRAST_PAIR[1]), en: en(CONTRAST_PAIR[1]), note: 'Same jackets, same sentence, same position in it, and this one refuses both. That is the difference and it is the whole class.' },
      { fr: fr(cellId('invariable', 'm.sg')), en: en(cellId('invariable', 'm.sg')), note: 'One thing.' },
      { fr: fr(cellId('invariable', 'f.pl')), en: en(cellId('invariable', 'f.pl')), note: 'Several feminine things, and it is the same six letters. Four rows on the grid, one word.' },
    ],
    terms: ['theOnesThatNeverChange', 'fourShapes'],
  },

  {
    /* The second useCases. The four colours a1.13 never released, read off its
       own 53 itemIds, which is what makes this act new rather than a third
       telling of a1.13's. */
    type: 'useCases',
    id: NEW_COLOUR_SECTION_ID,
    title: 'Four More Of Them',
    frSub: 'Quatre autres',
    layer: 'core',
    say: INVARIABLE_NEW_CLAIM,
    cases: [
      { situation: 'Describing a room you have just painted', fr: fr('fr.a2.adjectifs-essentiels.027'), en: en('fr.a2.adjectifs-essentiels.027') },
      { situation: 'Saying which curtains you mean in a shop', fr: fr('fr.a2.adjectifs-essentiels.026'), en: en('fr.a2.adjectifs-essentiels.026') },
      { situation: 'Describing what somebody was wearing', fr: fr('fr.a2.adjectifs-essentiels.028'), en: en('fr.a2.adjectifs-essentiels.028') },
      { situation: 'Telling a delivery driver which chairs are yours', fr: fr('fr.a2.adjectifs-essentiels.029'), en: en('fr.a2.adjectifs-essentiels.029') },
    ],
    terms: ['theOnesThatNeverChange'],
  },

  {
    type: 'commonErrors',
    id: ERRORS_SECTION_ID,
    title: 'Five Things To Watch',
    frSub: 'Cinq erreurs',
    layer: 'core',
    // swipe: true or this renders a blank screen. a1.01 mission 5 and sons.08
    // mission 22 both shipped without it.
    swipe: true,
    size: 'lg',
    errors: [
      {
        wrong: `Ils sont ${form('eux', 'm.sg')}s.`,
        right: fr(cellId('eux', 'm.pl')),
        why: `An x has nowhere to put an s. ${IDENTICAL_CLAIM}`,
      },
      {
        wrong: 'Mes vestes sont marrons.',
        right: fr('fr.a2.adjectifs-essentiels.031').replace('Ses', 'Mes'),
        why: 'It is the one slip a French reader always notices, because the word is a nut and nuts do not agree with jackets.',
      },
      {
        wrong: `${CELL_SUBJECT['f.sg']} ${form('if', 'm.sg')}e.`,
        right: fr(cellId('if', 'f.sg')),
        why: 'The f does not stay and take an e. It turns into a v, and then the e goes after it.',
      },
      {
        wrong: `${CELL_SUBJECT['f.sg']} ${form('eux', 'm.sg')}.`,
        right: fr(cellId('eux', 'f.sg')),
        why: 'This is the sentence the scene stopped on. The plain form is not a safe default; it is one of four shapes and it is the wrong one here.',
      },
      {
        wrong: `${CELL_SUBJECT['f.pl']} ${form('default', 'f.sg')}.`,
        right: fr(cellId('default', 'f.pl')),
        why: 'The e is there and the s is missing. Build the woman first, then put the number on the end of what you built.',
      },
    ],
    // `fourShapes` + `theOnesThatNeverChange` is 37, which is the pair READ OFF
    // THE PHONE on missions 14 and 16 rendering in full, so it is the one
    // combination at the limit with device evidence behind it. The two tried
    // before it were 38 and 40.
    terms: ['fourShapes', 'theOnesThatNeverChange'],
  },

  /* ── Act 5: out loud ───────────────────────────────────────────────────── */

  {
    type: 'scenario',
    id: SCENARIO_SECTION_ID,
    title: 'Describing The Flat',
    frSub: 'Décrire l’appartement',
    layer: 'core',
    setting: 'You got the room. A friend asks what the place and the people are like, and every answer wants a shape rather than a phrase.',
    turns: [
      {
        ai: 'Alors, tes colocataires, ils sont comment ?',
        en: 'So, your flatmates, what are they like?',
        user: 'Marc est grand et sérieux.',
        userEn: 'Marc is tall and serious.',
        alts: [
          { fr: 'Il est grand et il est sérieux.', en: 'He is tall and he is serious.' },
          { fr: 'Marc est très sérieux.', en: 'Marc is very serious.' },
        ],
      },
      {
        ai: 'Et l’autre, c’est une fille, non ?',
        en: 'And the other one, that is a girl, right?',
        user: 'Oui, et elle est très sportive.',
        userEn: 'Yes, and she is very sporty.',
        alts: [
          { fr: 'Oui. Léa est sportive.', en: 'Yes. Léa is sporty.' },
          { fr: 'Elle est sportive et curieuse.', en: 'She is sporty and curious.' },
        ],
      },
      {
        ai: 'Ils sont sympas tous les deux ?',
        en: 'Are they both nice?',
        user: 'Oui, ils sont calmes et ils sont curieux.',
        userEn: 'Yes, they are calm and they are curious.',
        // TWO ALTERNATIVES MINIMUM ON EVERY TURN. `scenario.logic.test.ts` is a
        // SEED-WIDE test that requires `alts.length >= 2` — "one accepted answer
        // per turn is the cloze-test failure this content exists to fix" — and
        // nothing in the doctrine, the invariants, the corrections or the ledger
        // mentions it. Three of these six turns shipped with one alt, every gate
        // in this build was green, and the suite went red the moment the merge
        // landed. Same class as a2.15 §3's banned word in a cardDeck sub.
        alts: [
          { fr: 'Oui, ils sont très calmes.', en: 'Yes, they are very calm.' },
          { fr: 'Oui, et ils sont curieux.', en: 'Yes, and they are curious.' },
        ],
      },
      {
        ai: 'Et l’appartement ? Il est clair ?',
        en: 'And the flat? Is it bright?',
        user: 'Oui. Les murs sont crème.',
        userEn: 'Yes. The walls are cream.',
        alts: [
          { fr: 'Oui, il est très clair.', en: 'Yes, it is very bright.' },
          { fr: 'Les murs sont crème et les rideaux sont kaki.', en: 'The walls are cream and the curtains are khaki.' },
        ],
      },
      {
        ai: 'Tu as des meubles à toi ?',
        en: 'Do you have any furniture of your own?',
        user: 'Oui, mes chaises sont bleu clair.',
        userEn: 'Yes, my chairs are light blue.',
        alts: [
          { fr: 'J’ai deux chaises bleu clair.', en: 'I have two light blue chairs.' },
          { fr: 'Oui, j’ai une table marron.', en: 'Yes, I have a brown table.' },
        ],
      },
      {
        ai: 'Et les chambres, elles sont petites ?',
        en: 'And the bedrooms, are they small?',
        user: 'Non, elles sont grandes.',
        userEn: 'No, they are big.',
        alts: [
          { fr: 'Non, les chambres sont grandes.', en: 'No, the bedrooms are big.' },
          { fr: 'Non, elles sont très grandes.', en: 'No, they are very big.' },
        ],
      },
    ],
    terms: ['fourShapes', 'theOnesThatNeverChange'],
  },

  {
    type: 'dictation',
    id: DICTATION_SECTION_ID,
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    // Fourteen of the sixteen grid cells. `Elles sont sérieuses.` and `Elles
    // sont sportives.` are both eighteen letters, which dicteeMode() puts into
    // WORD tiles, and word mode hands every real word over pre-spelled. A lesson
    // about a spelling tested in word mode is testing nothing. Corrections §4.
    itemIds: DICTATION_IDS,
    say: 'Fourteen sentences, and the only thing that moves is the last word. Two of the sixteen are too long to spell letter by letter and they are the two whose feminine plural runs to nine letters.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], maxPlays: 3, recordingId: 'rec-a2-03-dictee' },
    terms: ['fourShapes'],
  },

  {
    type: 'practice',
    id: SPEAK_SECTION_ID,
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    // `speak`, not `write`. `practice` with skill 'write' draws no writing
    // surface at all, and every item named here carries `voiceflash`.
    skill: 'speak',
    itemIds: SPEAK_IDS,
    terms: ['whatYouCanHear'],
  },

  {
    type: 'reviewDeck',
    id: REVIEW_SECTION_ID,
    title: 'The Whole Thing, One Deck',
    frSub: 'Tout, en un paquet',
    layer: 'core',
    cards: [
      ...PATTERN_ORDER.map((p) => ({
        // No em dash anywhere, and the density validator has its own check for
        // one. A middle dot is the house separator.
        front: `${PATTERN_LABEL[p]} · ${form(p, 'm.sg')}`,
        back: CELL_ORDER.map((c) => form(p, c)).join(' · '),
        say: fr(cellId(p, 'f.sg')),
      })),
      { front: 'Which shape does the ear get?', back: EAR_CLAIM, say: fr(cellId('default', 'f.sg')) },
      { front: `Why is ${form('eux', 'm.pl')} not ${form('eux', 'm.sg')}s?`, back: IDENTICAL_CLAIM, say: fr(cellId('eux', 'm.pl')) },
      { front: `Why does ${form('invariable', 'm.sg')} never move?`, back: INVARIABLE_CLAIM, say: fr(cellId('invariable', 'f.pl')) },
      { front: 'A word you have never seen. What do you look at?', back: THE_MOVE, say: fr(cellId('if', 'f.sg')) },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'progressCheck',
    id: PROGRESS_SECTION_ID,
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: `${REFRAME} The exam has five rounds and the last one gives you words that are on no card in this lesson. That is not a trick; it is the only way to find out whether you learned ${PATTERN_ORDER.length} patterns or ${PATTERN_ORDER.length * CELL_ORDER.length} words.`,
    stats: [
      { k: 'Patterns', v: String(PATTERN_ORDER.length) },
      { k: 'Shapes each', v: `${FORM_COUNT.default} written, ${SOUND_COUNT.default} heard` },
      { k: 'The -eux group', v: `${EUX_FAMILY.length} words, one rule` },
      { k: 'Cold in the exam', v: `${UNSEEN.length} words` },
    ],
  },

  {
    type: 'quiz',
    id: QUIZ_SECTION_ID,
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Five rounds. Miss too many in a round and you get a drill before the next one starts. The last round is words you have never seen.',
    rounds: [
      {
        id: 'r1-four-shapes',
        label: 'The four shapes',
        // Round targets are ordered deliberately. drillForRound returns the
        // FIRST target that has a drill and then stops, so the first name here
        // is what a failing learner actually gets. Every round leads on a
        // DIFFERENT trigger, which is what makes all five drills reachable.
        targets: ['err-plain-default', 'err-order'],
        say: 'Seven on the ordinary group. Every question fixes who you are talking about.',
        questions: [
          {
            q: `${CELL_SUBJECT['f.sg']} ___ . (${form('default', 'm.sg')})`,
            format: 'typeIn',
            accept: [form('default', 'f.sg'), `${CELL_SUBJECT['f.sg']} ${form('default', 'f.sg')}`],
            answer: form('default', 'f.sg'),
            why: 'An e on the end, and the d in front of it starts being heard.',
            ref: DEFAULT_SECTION_ID,
          },
          {
            q: `${CELL_SUBJECT['m.pl']} ___ . (${form('default', 'm.sg')})`,
            format: 'typeIn',
            accept: [form('default', 'm.pl'), `${CELL_SUBJECT['m.pl']} ${form('default', 'm.pl')}`],
            answer: form('default', 'm.pl'),
            why: 'An s, and nothing at all happens to the sound.',
            ref: DEFAULT_SECTION_ID,
          },
          {
            q: `${CELL_SUBJECT['f.pl']} ___ . (${form('default', 'm.sg')})`,
            format: 'typeIn',
            accept: [form('default', 'f.pl'), `${CELL_SUBJECT['f.pl']} ${form('default', 'f.pl')}`],
            answer: form('default', 'f.pl'),
            why: 'The e first because it belongs to the word, then the s because it belongs to the number.',
            ref: GRID_SECTION_ID,
          },
          {
            q: 'Which of these four is spelled correctly?',
            format: 'mcq',
            opts: [`${CELL_SUBJECT['f.pl']} ${form('default', 'm.pl')}.`, `${CELL_SUBJECT['f.pl']} ${form('default', 'f.sg')}.`, `${CELL_SUBJECT['f.pl']} ${form('default', 'm.sg')}.`, fr(cellId('default', 'f.pl'))],
            correct: 3,
            why: 'Both endings, in that order. The other three each have exactly one of the two.',
            ref: GRID_SECTION_ID,
          },
          {
            q: `How many different sounds do the four shapes of ${form('default', 'm.sg')} make?`,
            format: 'mcq',
            opts: ['One', 'Two', 'Three', 'Four'],
            correct: 1,
            why: DEFAULT_CLAIM,
            ref: SILENT_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: `${CELL_SUBJECT['f.pl']} ${form('default', 'f.sg')}.`,
            accept: [fr(cellId('default', 'f.pl')), `${CELL_SUBJECT['f.pl']} ${form('default', 'f.pl')}`, form('default', 'f.pl')],
            answer: fr(cellId('default', 'f.pl')),
            why: 'The woman ending is there and the number ending is missing.',
            ref: ERRORS_SECTION_ID,
          },
          {
            q: 'Listen. Is this about one person or several?',
            format: 'listenChoose',
            say: fr(cellId('default', 'f.pl')),
            opts: ['One', 'Several', 'You cannot tell from the sound'],
            correct: 2,
            why: `${EAR_CLAIM} This one and the singular are the same sound.`,
            ref: SILENT_SECTION_ID,
          },
        ],
      },
      {
        id: 'r2-the-eux-group',
        label: 'Ends in -eux',
        targets: ['err-eux-plural', 'err-plain-default'],
        say: 'Seven on the group the scene stopped on.',
        questions: [
          {
            q: `${CELL_SUBJECT['f.sg']} ___ . (${form('eux', 'm.sg')})`,
            format: 'typeIn',
            accept: [form('eux', 'f.sg'), `${CELL_SUBJECT['f.sg']} ${form('eux', 'f.sg')}`],
            answer: form('eux', 'f.sg'),
            why: 'The x goes and se arrives. It is the one change in this lesson you can hear from the next room.',
            ref: EUX_SECTION_ID,
          },
          {
            q: `${CELL_SUBJECT['m.pl']} ___ . (${form('eux', 'm.sg')})`,
            format: 'typeIn',
            accept: [form('eux', 'm.pl'), `${CELL_SUBJECT['m.pl']} ${form('eux', 'm.pl')}`],
            answer: form('eux', 'm.pl'),
            why: IDENTICAL_CLAIM,
            ref: IDENTICAL_SECTION_ID,
          },
          {
            q: `${CELL_SUBJECT['f.pl']} ___ . (${form('eux', 'm.sg')})`,
            format: 'typeIn',
            accept: [form('eux', 'f.pl'), `${CELL_SUBJECT['f.pl']} ${form('eux', 'f.pl')}`],
            answer: form('eux', 'f.pl'),
            why: 'Build the woman form first, then put the s on the end of that.',
            ref: EUX_SECTION_ID,
          },
          {
            q: 'Which of these is not a word?',
            format: 'mcq',
            opts: [`${form('eux', 'm.sg')}s`, form('eux', 'm.pl'), form('eux', 'f.pl'), form('eux', 'f.sg')],
            correct: 0,
            why: 'An x has nowhere to put an s, so the plural of the plain form is the plain form.',
            ref: IDENTICAL_SECTION_ID,
          },
          {
            q: `${CELL_SUBJECT['f.sg']} ___ . (${importedFr(namingId('heureux'))})`,
            format: 'typeIn',
            accept: [importedFr(namingId('heureuse')), `${CELL_SUBJECT['f.sg']} ${importedFr(namingId('heureuse'))}`],
            answer: importedFr(namingId('heureuse')),
            why: 'Same two letters on the end, so the same swap. The group is one rule and not a list.',
            ref: BANK_SECTION_ID,
          },
          {
            q: 'Listen. Is this about a man or a woman?',
            format: 'listenChoose',
            say: fr(cellId('eux', 'f.sg')),
            opts: ['A woman', 'A man'],
            correct: 0,
            why: 'The buzz on the end is the woman ending, and this is the group where you hear it most clearly.',
            ref: EAR_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: `${CELL_SUBJECT['m.pl']} ${form('eux', 'm.sg')}s.`,
            accept: [fr(cellId('eux', 'm.pl')), `${CELL_SUBJECT['m.pl']} ${form('eux', 'm.pl')}`, form('eux', 'm.pl')],
            answer: fr(cellId('eux', 'm.pl')),
            why: IDENTICAL_CLAIM,
            ref: ERRORS_SECTION_ID,
          },
        ],
      },
      {
        id: 'r3-the-if-group',
        label: 'Ends in -if',
        targets: ['err-if-feminine', 'err-order'],
        say: 'Six on the smaller group.',
        questions: [
          {
            q: `${CELL_SUBJECT['f.sg']} ___ . (${form('if', 'm.sg')})`,
            format: 'typeIn',
            accept: [form('if', 'f.sg'), `${CELL_SUBJECT['f.sg']} ${form('if', 'f.sg')}`],
            answer: form('if', 'f.sg'),
            why: 'The f becomes a v. It does not stay and take an e after it.',
            ref: IF_SECTION_ID,
          },
          {
            q: `${CELL_SUBJECT['m.pl']} ___ . (${form('if', 'm.sg')})`,
            format: 'typeIn',
            accept: [form('if', 'm.pl'), `${CELL_SUBJECT['m.pl']} ${form('if', 'm.pl')}`],
            answer: form('if', 'm.pl'),
            why: 'An ordinary s on the plain form, and the f stays where it is.',
            ref: IF_SECTION_ID,
          },
          {
            q: `${CELL_SUBJECT['f.pl']} ___ . (${form('if', 'm.sg')})`,
            format: 'typeIn',
            accept: [form('if', 'f.pl'), `${CELL_SUBJECT['f.pl']} ${form('if', 'f.pl')}`],
            answer: form('if', 'f.pl'),
            why: 'The v first, then the s. That order never changes.',
            ref: IF_SECTION_ID,
          },
          {
            q: 'Which of these is spelled correctly?',
            format: 'mcq',
            opts: [`${form('if', 'm.sg')}e`, `${form('if', 'm.sg')}ve`, `${form('if', 'm.pl')}e`, form('if', 'f.sg')],
            correct: 3,
            why: 'One letter is replaced rather than added to. The f is gone in every feminine form of this group.',
            ref: IF_SECTION_ID,
          },
          {
            q: 'Listen. Which one is this?',
            format: 'listenChoose',
            say: fr(cellId('if', 'f.sg')),
            opts: [form('if', 'm.sg'), form('if', 'f.sg')],
            correct: 1,
            why: 'The last sound is a v rather than an f. It is the only difference in the word and it is audible.',
            ref: EAR_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: `${CELL_SUBJECT['f.sg']} ${form('if', 'm.sg')}e.`,
            accept: [fr(cellId('if', 'f.sg')), `${CELL_SUBJECT['f.sg']} ${form('if', 'f.sg')}`, form('if', 'f.sg')],
            answer: fr(cellId('if', 'f.sg')),
            why: 'The f had to go before the e could arrive.',
            ref: ERRORS_SECTION_ID,
          },
        ],
      },
      {
        id: 'r4-never-change',
        label: 'The ones that never change',
        targets: ['err-agree-invariable', 'err-eux-plural'],
        say: `Six on the group ${INVARIABLE_UNIT} started and this lesson finished.`,
        questions: [
          {
            q: `${CELL_SUBJECT['f.pl']} ___ . (${form('invariable', 'm.sg')})`,
            format: 'typeIn',
            accept: [form('invariable', 'f.pl'), `${CELL_SUBJECT['f.pl']} ${form('invariable', 'f.pl')}`],
            answer: form('invariable', 'f.pl'),
            why: 'Nothing on the end of it. Not an e, not an s, not in any sentence you will ever write.',
            ref: INVARIABLE_SECTION_ID,
          },
          {
            q: 'Which of these four is spelled correctly?',
            format: 'mcq',
            opts: ['Mes vestes sont marrons.', 'Mes vestes sont marronnes.', 'Mes vestes sont marron.', 'Mes vestes sont marrones.'],
            correct: 2,
            why: 'It is a nut. It does not agree with jackets, and adding an s to it is the slip a French reader always notices.',
            ref: INVARIABLE_SECTION_ID,
          },
          {
            q: `${CELL_SUBJECT['f.pl']} ___ . (${importedFr(namingId('kaki'))})`,
            format: 'typeIn',
            accept: [importedFr(namingId('kaki')), `${CELL_SUBJECT['f.pl']} ${importedFr(namingId('kaki'))}`],
            answer: importedFr(namingId('kaki')),
            why: 'A dust colour named after the dust. Same class as the chestnut and it behaves the same way.',
            ref: NEW_COLOUR_SECTION_ID,
          },
          {
            q: `Which of these does NOT belong with ${KNOWN_INVARIABLES.join(' and ')}?`,
            format: 'mcq',
            opts: [importedFr(namingId('vert')), importedFr(namingId('bleu marine')), importedFr(namingId('crème')), importedFr(namingId('kaki'))],
            correct: 0,
            why: 'Three of these are borrowed things or two words. The fourth is an ordinary describing word and it takes both endings.',
            ref: INVARIABLE_SECTION_ID,
          },
          {
            q: 'One noun, one number, two colours. Fix the one that is wrong.',
            format: 'errorSpot',
            prompt: `${noStop(fr(CONTRAST_PAIR[0]))} et ${noStop(fr(CONTRAST_PAIR[1])).replace('Ses vestes sont ', '')}s.`,
            accept: [`${noStop(fr(CONTRAST_PAIR[0]))} et ${noStop(fr(CONTRAST_PAIR[1])).replace('Ses vestes sont ', '')}`, form('invariable', 'f.pl')],
            answer: `${noStop(fr(CONTRAST_PAIR[0]))} et ${noStop(fr(CONTRAST_PAIR[1])).replace('Ses vestes sont ', '')}.`,
            why: 'The green one is right and takes both endings. The brown one takes nothing, in the same sentence, about the same jackets.',
            ref: INVARIABLE_SECTION_ID,
          },
          {
            q: 'Why does this group exist at all?',
            format: 'mcq',
            opts: [
              'The words are irregular and have to be learned one at a time',
              'The words were things before they were colours, and a borrowed thing keeps its own shape',
              'The words are foreign and French does not change foreign words',
              'They are too short to take an ending',
            ],
            correct: 1,
            why: INVARIABLE_CLAIM,
            ref: INVARIABLE_SECTION_ID,
          },
        ],
      },
      {
        id: 'r5-never-seen',
        label: 'Words you have never seen',
        targets: ['err-order', 'err-if-feminine'],
        say: 'Six, and not one of these words is on a card in this lesson. This is the round the whole thing was for.',
        questions: [
          {
            q: `${CELL_SUBJECT['f.sg']} ___ . (${UNSEEN[0].masculine})`,
            format: 'typeIn',
            accept: [UNSEEN[0].forms['f.sg'], `${CELL_SUBJECT['f.sg']} ${UNSEEN[0].forms['f.sg']}`],
            answer: UNSEEN[0].forms['f.sg'],
            why: `${UNSEEN[0].masculine} ends in x, so it is in the second group and the x swaps for se.`,
            ref: COLD_SECTION_ID,
          },
          {
            q: `${CELL_SUBJECT['m.pl']} ___ . (${UNSEEN[0].masculine})`,
            format: 'typeIn',
            accept: [UNSEEN[0].forms['m.pl'], `${CELL_SUBJECT['m.pl']} ${UNSEEN[0].forms['m.pl']}`],
            answer: UNSEEN[0].forms['m.pl'],
            why: 'Same word as the plain form. An x has nowhere to put an s and that is true of the whole group.',
            ref: COLD_SECTION_ID,
          },
          {
            q: `${CELL_SUBJECT['f.sg']} ___ . (${UNSEEN[1].masculine})`,
            format: 'typeIn',
            accept: [UNSEEN[1].forms['f.sg'], `${CELL_SUBJECT['f.sg']} ${UNSEEN[1].forms['f.sg']}`],
            answer: UNSEEN[1].forms['f.sg'],
            why: `${UNSEEN[1].masculine} ends in f, so the f becomes a v.`,
            ref: COLD_SECTION_ID,
          },
          {
            q: `${CELL_SUBJECT['f.pl']} ___ . (${UNSEEN[1].masculine})`,
            format: 'typeIn',
            accept: [UNSEEN[1].forms['f.pl'], `${CELL_SUBJECT['f.pl']} ${UNSEEN[1].forms['f.pl']}`],
            answer: UNSEEN[1].forms['f.pl'],
            why: 'The v, then the s, in that order. It is the same build as the group you did have cards for.',
            ref: COLD_SECTION_ID,
          },
          {
            q: `${CELL_SUBJECT['f.pl']} ___ . (${UNSEEN[2].masculine})`,
            format: 'typeIn',
            accept: [UNSEEN[2].forms['f.pl'], `${CELL_SUBJECT['f.pl']} ${UNSEEN[2].forms['f.pl']}`],
            answer: UNSEEN[2].forms['f.pl'],
            why: `${UNSEEN[2].masculine} is a stone. A colour borrowed from a thing keeps the thing's shape and takes no ending at all.`,
            ref: COLD_SECTION_ID,
          },
          {
            q: 'You meet a word you have never seen and you have half a second. What do you look at?',
            format: 'mcq',
            opts: [
              'Whether it goes in front of the noun or after it',
              'Whether the noun is one thing or several',
              'The last two letters of the plain form',
              'Whether you have heard it said out loud before',
            ],
            correct: 2,
            why: `${REFRAME} ${PLACEMENT_LINE}`,
            ref: FRONT_SECTION_ID,
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: ROUNDUP_SECTION_ID,
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    layer: 'core',
    body: `${CARRY_FORWARD}`,
    points: [
      `${PATTERN_ARITHMETIC}`,
      ENDING_CLAIM,
      `${EAR_UNIT} said the spelling changes so the sound does not. Here it is the other way round in one place and the same in the rest: ${EAR_CLAIM}`,
      `${INVARIABLE_UNIT} gave you ${KNOWN_INVARIABLES.join(' and ')} as two words that behave oddly. They are a class, and ${NEW_INVARIABLES.join(', ')} are in it too.`,
      // The roundup does NOT name the three cold adjectives. It is a production
      // surface, the guard treats it as one, and naming them here would put them
      // on a card in a lesson whose whole last act depends on their not being on
      // one. The count is the claim; the words are the exam's.
      `You built four shapes each of ${UNSEEN.length} words, off two letters each, and this lesson showed you none of them.`,
      NEXT_LESSON_LINE,
      `${PLACEMENT_UNIT} owns where the word goes and ${COMPARATIVE_UNIT} owns saying one thing is more than another. Neither of them is this.`,
    ],
  },
];

/* ─── Acts ─────────────────────────────────────────────────────────────── */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Where the sentence stopped',
    sections: [SCENE_SECTION_ID, GOALS_SECTION_ID, FRONT_SECTION_ID],
    milestone: 'You know what three seconds of hunting for an ending costs, and you know what to look at instead.',
    estScreens: 18,
    restPoints: [`${SCENE_SECTION_ID}/after-break`],
  },
  {
    id: 'act2',
    title: 'Four shapes, four groups',
    sections: [GRID_SECTION_ID, DEFAULT_SECTION_ID, SILENT_SECTION_ID, USECASES_SECTION_ID, WHICH_SECTION_ID],
    milestone: 'You can build all four shapes of an ordinary word, and you know which of them your ear will ever get.',
    estScreens: 30,
    restPoints: [`${GRID_SECTION_ID}/after`, `${SILENT_SECTION_ID}/after`],
  },
  {
    id: 'act3',
    title: 'The two that change the sound',
    sections: [EUX_SECTION_ID, IDENTICAL_SECTION_ID, IF_SECTION_ID, EAR_SECTION_ID, BANK_SECTION_ID, READING_SECTION_ID, COLD_SECTION_ID],
    milestone: 'You built four shapes of three words this lesson never showed you, off two letters each.',
    estScreens: 44,
    restPoints: [`${IDENTICAL_SECTION_ID}/after`, `${EAR_SECTION_ID}/after`, `${BANK_SECTION_ID}/after`],
  },
  {
    id: 'act4',
    title: 'The ones that never change',
    sections: [INVARIABLE_SECTION_ID, NEW_COLOUR_SECTION_ID, ERRORS_SECTION_ID],
    milestone: 'You can tell a describing word from a thing that has been lent to a colour, and you will not put an s on the second one.',
    estScreens: 22,
    restPoints: [`${ERRORS_SECTION_ID}/after-cards`],
  },
  {
    id: 'act5',
    title: 'Out loud',
    sections: [SCENARIO_SECTION_ID, DICTATION_SECTION_ID, SPEAK_SECTION_ID, REVIEW_SECTION_ID],
    milestone: 'You held a conversation in which every answer wanted a shape you built rather than a phrase you remembered.',
    estScreens: 38,
    restPoints: [`${SCENARIO_SECTION_ID}/after`, `${DICTATION_SECTION_ID}/halfway`],
  },
  {
    id: 'act6',
    title: 'Prove it on ones you have never seen',
    sections: [PROGRESS_SECTION_ID, QUIZ_SECTION_ID, ROUNDUP_SECTION_ID],
    milestone: `You agreed ${UNSEEN.length} words that appear on no card in this lesson, and that is the difference between four groups and sixteen words.`,
    estScreens: 40,
    restPoints: [`${QUIZ_SECTION_ID}/r3-the-if-group`],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * A tranche releases items into spaced repetition at the END of an act, and
 * nothing may be released before the act that puts it on a screen.
 *
 * NONE OF THE THREE COLD ADJECTIVES IS HERE, because none of them is a row.
 * That is the point of them and the batch asserts it.                        */

const DECK_TRANCHE: string[][] = [
  // Act 1 releases NOTHING. The scene runs on prose and on the break card.
  [],
  // Act 2: the ordinary group, all four cells, and the two words behind it.
  [
    ...patternIds('default'),
    namingId('grand'), namingId('grande'),
  ],
  // Act 3: both named groups, their members, and the two published sentences.
  [
    ...patternIds('eux'), ...patternIds('if'),
    'fr.a2.adjectifs-essentiels.017', 'fr.a2.adjectifs-essentiels.018', 'fr.a2.adjectifs-essentiels.019',
    'fr.a2.adjectifs-essentiels.020', 'fr.a2.adjectifs-essentiels.021',
    'fr.a2.adjectifs-essentiels.022', 'fr.a2.adjectifs-essentiels.023',
    'fr.a2.adjectifs-essentiels.024', 'fr.a2.adjectifs-essentiels.025',
    ...EUX_FAMILY.map((w) => namingId(w)),
    // `heureuse` is the one imported FEMININE, and it is the card that shows the
    // group's swap on a word other than the head. It is not in EUX_FAMILY, which
    // holds plain forms only, so it has to be named here or it is an itemId no
    // section draws and no tranche releases: the a1.08 class exactly.
    namingId('heureuse'),
    ...IF_FAMILY.map((w) => namingId(w)),
    ...EVIDENCE_IDS,
  ],
  // Act 4: the invariable class, and the regular colour it stands beside.
  [
    ...patternIds('invariable'),
    'fr.a2.adjectifs-essentiels.026', 'fr.a2.adjectifs-essentiels.027',
    'fr.a2.adjectifs-essentiels.028', 'fr.a2.adjectifs-essentiels.029',
    'fr.a2.adjectifs-essentiels.030', 'fr.a2.adjectifs-essentiels.031',
    namingId('marron'), namingId('orange'),
    ...INVARIABLE_NEW.map((w) => namingId(w)),
    namingId('vert'), namingId('verte'), namingId('vert foncé'),
  ],
  // Act 5: the two scene rows, which the scenario has just used again.
  ['fr.a2.adjectifs-essentiels.032', 'fr.a2.adjectifs-essentiels.033'],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * FIVE triggers, five drills, five retests, five rounds, and each round leads on
 * a DIFFERENT trigger. `drillForRound` returns the first target that has a drill
 * and then stops, so a drill that is never named first can never fire. a1.05
 * ships two such drills and its own test fails on them today.                  */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-plain-default',
    description: 'Uses the plain form for a woman, which is the error the scene opens on. It is not a slip; it is what a learner does when they have met the word once and only in one shape.',
    detectOn: [GRID_SECTION_ID, ERRORS_SECTION_ID, `${QUIZ_SECTION_ID}/r1-four-shapes`],
    drill: 'drill-which-shape',
    retest: 'retest-which-shape',
  },
  {
    id: 'err-eux-plural',
    description: 'Puts an s on the plain form of a word ending in -eux. a1.14 taught the fact about two specific words and it reads as an oddity about those two rather than as a property of the letter.',
    detectOn: [IDENTICAL_SECTION_ID, ERRORS_SECTION_ID, `${QUIZ_SECTION_ID}/r2-the-eux-group`],
    drill: 'drill-eux-plural',
    retest: 'retest-eux-plural',
  },
  {
    id: 'err-if-feminine',
    description: 'Leaves the f in place and adds an e after it. The letter is replaced rather than added to, and in English the two sounds are close enough that the ear does not object.',
    detectOn: [IF_SECTION_ID, EAR_SECTION_ID, `${QUIZ_SECTION_ID}/r3-the-if-group`],
    drill: 'drill-if-feminine',
    retest: 'retest-if-feminine',
  },
  {
    id: 'err-agree-invariable',
    description: 'Agrees a colour that was a thing first. The learner has just spent twenty screens learning that describing words change shape, and this class reads as the rule failing rather than as a class.',
    detectOn: [INVARIABLE_SECTION_ID, NEW_COLOUR_SECTION_ID, `${QUIZ_SECTION_ID}/r4-never-change`],
    drill: 'drill-invariable',
    retest: 'retest-invariable',
  },
  {
    id: 'err-order',
    description: 'Puts the number ending on before the woman ending, or puts one on and forgets the other. Both come from treating the two as a single decision rather than as one after the other.',
    detectOn: [GRID_SECTION_ID, ERRORS_SECTION_ID, `${QUIZ_SECTION_ID}/r5-never-seen`],
    drill: 'drill-order',
    retest: 'retest-order',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-which-shape',
    title: 'One word, four boxes',
    format: 'flashcard',
    coach: 'Who is being described is on the front. Say the shape before you turn the card.',
    pairs: CELL_ORDER.map((c) => [CELL_SUBJECT[c], form('default', c)] as [string, string]),
  },
  {
    id: 'retest-which-shape',
    title: 'One more time',
    format: 'mcq',
    q: `${CELL_SUBJECT['f.sg']} ___ .`,
    opts: [form('default', 'm.sg'), form('default', 'f.sg'), form('default', 'f.pl')],
    correct: 1,
    why: 'One woman, so the e and no s.',
  },
  {
    id: 'drill-eux-plural',
    title: 'Where the s can go',
    format: 'sort',
    buckets: ['takes an s', 'takes nothing'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [cellId('default', 'm.pl'), cellId('eux', 'm.pl'), cellId('eux', 'f.pl'), cellId('if', 'm.pl'), cellId('invariable', 'm.pl'), cellId('default', 'f.pl')],
    coach: 'Look at the last letter of the shape before the s would go on. If it is already an x, there is nowhere to put one.',
  },
  {
    id: 'retest-eux-plural',
    title: 'One more time',
    format: 'mcq',
    q: `${CELL_SUBJECT['m.pl']} ___ .`,
    opts: [`${form('eux', 'm.sg')}s`, form('eux', 'm.pl'), form('eux', 'f.pl')],
    correct: 1,
    why: 'The same word as the singular, and that is the correct answer rather than a missing one.',
  },
  {
    id: 'drill-if-feminine',
    title: 'The letter that is replaced',
    format: 'flashcard',
    coach: 'The plain form is on the front. Say the woman form, and listen for the last sound.',
    pairs: [
      [form('if', 'm.sg'), form('if', 'f.sg')],
      [importedFr(namingId('impulsif')), 'impulsive'],
      [importedFr(namingId('naïf')), 'naïve'],
    ],
  },
  {
    id: 'retest-if-feminine',
    title: 'One more time',
    format: 'mcq',
    q: `${CELL_SUBJECT['f.sg']} ___ .`,
    opts: [`${form('if', 'm.sg')}e`, form('if', 'f.sg'), form('if', 'm.pl')],
    correct: 1,
    why: 'The f is replaced by the v. It does not stay and take an e.',
  },
  {
    id: 'drill-invariable',
    title: 'Changes, or does not',
    format: 'sort',
    buckets: ['changes shape', 'never changes'],
    items: [namingId('vert'), namingId('marron'), namingId('orange'), namingId('kaki'), namingId('grand'), namingId('bleu marine')],
    coach: 'Ask what the word was before it was a colour. If it was a thing, or if it is two words, it does not move.',
  },
  {
    id: 'retest-invariable',
    title: 'One more time',
    format: 'mcq',
    q: 'Mes vestes sont ___ .',
    opts: ['marrons', form('invariable', 'f.pl'), 'marronnes'],
    correct: 1,
    why: 'A nut does not agree with a jacket.',
  },
  {
    id: 'drill-order',
    title: 'Which ending goes on first',
    format: 'sort',
    buckets: ['the woman ending', 'the number ending'],
    items: [cellId('default', 'f.sg'), cellId('default', 'm.pl'), cellId('eux', 'f.sg'), cellId('eux', 'm.pl'), cellId('if', 'f.sg'), cellId('if', 'm.pl')],
    coach: 'Build the woman form first, whatever it takes. Then put the number on the end of what you built.',
  },
  {
    id: 'retest-order',
    title: 'One more time',
    format: 'mcq',
    q: `${CELL_SUBJECT['f.pl']} ___ .`,
    opts: [form('default', 'm.pl'), form('default', 'f.pl'), `${form('default', 'f.pl')}s`],
    correct: 1,
    why: 'The e, then the s, and only one s.',
  },
];

/* ─── The reference sheet ───────────────────────────────────────────────────
 *
 * Layer deep. It is what a learner returns to during a2.16 and a2.17, and it
 * holds the one thing the in-flow screens cannot: all four patterns, all four
 * cells and all the respellings at once.
 *
 * NO `cheatSheet`. ReferenceSheet.tsx draws `teach`, `letterGrid` and `table`
 * and nothing else, so a cheatSheet here would render its title and nothing
 * under it. a1.13 ships exactly that today.                                  */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    title: 'Four groups, four shapes each, and how to say them',
    layer: 'deep',
    contains: ['The grid, all sixteen', 'What each one sounds like', 'How to tell which group', 'What is not here'],
    sections: [
      {
        type: 'table',
        id: 'sheet-grid',
        title: 'All four groups, every shape',
        layer: 'deep',
        cols: ['Group', ...CELL_ORDER.map((c) => CELL_SUBJECT[c])],
        rows: PATTERN_ORDER.map((p) => [PATTERN_LABEL[p], ...CELL_ORDER.map((c) => form(p, c))]),
      },
      {
        type: 'table',
        id: 'sheet-say',
        title: 'How to say each one',
        layer: 'deep',
        cols: ['Group', ...CELL_ORDER.map((c) => CELL_SUBJECT[c])],
        rows: PATTERN_ORDER.map((p) => [PATTERN_LABEL[p], ...CELL_ORDER.map((c) => formRespell(p, c))]),
      },
      {
        type: 'table',
        id: 'sheet-decide',
        title: 'How to tell which group',
        layer: 'deep',
        cols: ['If the plain form ends in', 'Then the woman form', 'And the plural of the plain form'],
        rows: [
          ['-eux', 'swaps the x for se', 'is the same word'],
          ['-if', 'swaps the f for ve', 'takes an s'],
          ['a borrowed thing, or two words', 'is the same word', 'is the same word'],
          ['anything else', 'takes an e', 'takes an s'],
        ],
      },
      {
        type: 'table',
        id: 'sheet-sounds',
        title: 'How many sounds each group has',
        layer: 'deep',
        cols: ['Group', 'Written shapes', 'Sounds'],
        rows: PATTERN_ORDER.map((p) => [PATTERN_LABEL[p], String(FORM_COUNT[p]), String(SOUND_COUNT[p])]),
      },
      {
        type: 'teach',
        id: 'sheet-why-no-s',
        title: `Why ${form('eux', 'm.pl')} has nothing on the end`,
        layer: 'deep',
        body: `${IDENTICAL_CLAIM} ${IDENTICAL_ARITHMETIC} It is not an exception and there is nothing to remember about it beyond the letter itself. The same is true of any describing word already ending in s: the plural has nowhere to go and so it does not go anywhere. ${IDENTICAL_UNIT} showed you two words that do this and it was right about both; what it could not say, because it was teaching six words rather than a system, is that the two of them are not special.`,
      },
      {
        type: 'teach',
        id: 'sheet-carries-forward',
        title: 'What carries forward',
        layer: 'deep',
        body: `${CARRY_FORWARD} ${NEXT_LESSON_LINE} ${PLACEMENT_LINE} And ${COMPARATIVE_UNIT} is where saying that one thing is more something than another gets taught; every shape on this sheet is still the shape you use when you get there, so nothing here expires.`,
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ═══════════════════════════════════════════════════════════════════════ */

export const ACCORD_ADJECTIFS_LESSON: Lesson = {
  id: 'a2.03.l1',
  unitId: 'a2.03',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: "L'accord des adjectifs",
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`), and a2.03 sits at
  // seq 10. The stored value is a fallback and has to agree with what the
  // renderer computes. The batch checks it against the live unit rather than
  // trusting this comment.
  tag: 'A2 · LEÇON 10',
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped grammar jargon here in v1 because every
  // guard in the band walked `sections`, `sheets` and `terms` and not this. The
  // walk in the batch, the merge and the test includes `intro` and `overview`,
  // and this field is pinned by its own assertion.
  intro:
    'Every describing word in French has four shapes, and you do not learn them one word at a time. There are four groups, the last two letters of the plain form tell you which one you are in, and the last screen before the exam hands you three words this lesson never shows you and asks for all four shapes of each.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v2: THREE ROLE-PLAY TURNS OFFERED ONE WAY TO ANSWER, AND A SEED-WIDE TEST
  // NOTHING IN THIS BAND'S DOCUMENTATION MENTIONS CAUGHT IT.
  //
  // `scenario.logic.test.ts` requires `alts.length >= 2` on EVERY authored turn
  // in the seed: "one accepted answer per turn is the cloze-test failure this
  // content exists to fix". Turns 3, 5 and 6 shipped with one alternative each.
  // The batch was green, the merge was green, and the suite went red the moment
  // the merge landed, which is the same shape as a2.15 §3's banned word in a
  // cardDeck `sub`.
  //
  // The counter moves rather than the body being corrected under v1: two
  // different bodies under one number is the drift this project has lost work to
  // twice, and a2.09 set the precedent of moving the counter rather than
  // relaxing the guard that caught it. All three layers now check the rule so it
  // cannot regress here.
  // v3: A TERM CHIP CUT ON THE PIXEL 6, LOSING THE PART THAT NAMES THE GROUP.
  //
  // `theEuxGroup` and `theIfGroup` were named `words ending in -eux` and `words
  // ending in -if`. On `s13-bank` the two chips share one row and the second was
  // drawn as "words ending in": the `-if` is the whole distinguishing content
  // and it was the part that went. `s12-ear` declares three chips and would have
  // been worse.
  //
  // Every host gate was green — the strings are valid, both chips render, and
  // only the WIDTH is wrong — which is ledger §a2.14-13's finding one field
  // over: the ceiling is a width and not a character count, and nothing but
  // glass can tell you. Renamed to `ends in -eux` and `ends in -if`, which is
  // also what PATTERN_LABEL already calls the two groups on the grid, so the
  // shorter names are the consistent ones as well as the ones that fit.
  version: 3,

  grammarAssumed: [
    'That a describing word changes shape to match what it describes, introduced in a1.13 through colour',
    'The feminine -e and the plural -s on a describing word, and that the -s is never pronounced, introduced in a1.13',
    'That marron and orange do not change, introduced in a1.13 as a fact about those two words',
    'Six common describing words and their irregular feminines, introduced in a1.14',
    'That a word already ending in -s or -x does not change in the masculine plural, introduced in a1.14 for vieux and mauvais',
    'Where the describing word goes relative to the noun, introduced in a1.16',
    'Noun gender and the determiners that carry it, introduced in a1.03 and a1.04',
    'être in the present, introduced in a1.06, which is the frame every example in this lesson uses',
    'That French spelling carries distinctions the ear does not, introduced in a2.01',
  ],
  grammarIntroduced: [
    'Adjective agreement as a system of four inflectional classes rather than as a property of individual lexemes',
    'The -eux class: feminine in -euse, masculine plural identical to the masculine singular, feminine plural in -euses',
    'The -if class: feminine in -ive by consonant substitution rather than by suffixation, with the regular plural -s',
    'That the masculine plural of any adjective already ending in -s or -x is null-marked, generalised from a1.14 two lexemes to the whole class',
    'The invariable class as a productive class rather than a closed list: denominal colour adjectives and compound colour adjectives, extended beyond a1.13 marron and orange to kaki, crème, bleu marine and bleu clair',
    'That the feminine is phonologically realised in every regular class while number is not realised at all, which is the converse of the silent-agreement generalisation a2.01 introduced for verbs',
    'The productivity of the classes, so an unseen adjective is inflectable from its masculine singular without further instruction',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'Adjective Agreement',
    subFr: "L'accord des adjectifs",
    introFr: 'Quatre groupes, quatre formes, et la fin du mot vous dit lequel.',
    minutes: 32,
    difficulty: 3,
    glyph: 'Aa',
    screens: 192,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: ACCORD_ADJECTIFS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-03-accord.test.ts, because a constraint on
    // how something is recorded becomes invisible the moment the clip is
    // delivered. Invariants §10: anything the learner must hear as a CONTRAST is
    // one take with one voice, because two recordings are two performances and
    // the learner will hear the performance rather than the language.
    recorded: [
      {
        id: 'rec-a2-03-grid',
        desc: 'THE SIXTEEN CELLS, FOUR TAKES, ONE PER GROUP, EACH GROUP\'S FOUR IN ONE BREATH GROUP. Within each take the FIRST AND THIRD lines must be acoustically identical and so must the SECOND AND FOURTH: « Il est grand. » and « Ils sont grands. » differ on the page and not in the mouth, and a reader who knows the third is spelled with an s will lengthen something or put a fraction of a z on it, and either instinct destroys the screen. If a listener with their eyes shut can tell the first from the third, the take is unusable. What MUST be audible is the second line against the first: the d of grande, the buzz of sérieuse, the v of sportive. The fourth take, marron, is the control and all four of its lines are one sound; read them evenly and do not vary the emphasis to keep it interesting.',
        clipIds: PATTERN_ORDER.flatMap((p) => patternIds(p).map((id) => fr(id))),
      },
      {
        id: 'rec-a2-03-ear',
        desc: 'THE FOUR LINES FOR THE LISTENING SCREEN, WITH AUDIO BEFORE TEXT, IN THIS ORDER: masculine singular, masculine plural, feminine singular, feminine plural, all of grand. The first pair and the second pair are each ONE take and must be indistinguishable within the pair; the learner is being asked to fail to hear a difference and to notice that they failed. Between the pairs the difference must be as clear as the language allows, because that is the half the ear does get. Land on the d of grande. Do not put one on grand.',
        clipIds: ['m.sg', 'm.pl', 'f.sg', 'f.pl'].map((c) => fr(cellId('default', c as Cell))),
      },
      {
        id: 'rec-a2-03-eux',
        desc: 'THE -EUX GROUP, AND ONE PAIR MATTERS MORE THAN THE REST. « Il est sérieux. » then « Elle est sérieuse. » must be one take, same speed, same pitch, same length, so that the buzz on the end of the second is the only thing in the line that moved. Then « Ils sont sérieux. », which has to sound EXACTLY like the first line and not like a plural; then « Elles sont sérieuses. », which has to sound exactly like the second. Four lines, two sounds, and the learner is meant to hear that arithmetic rather than be told it.',
        clipIds: patternIds('eux').map((id) => fr(id)),
      },
      {
        id: 'rec-a2-03-if',
        desc: 'THE -IF GROUP, SAME INSTRUCTION AS THE -EUX TAKE, and the thing to land is the f against the v. « Il est sportif. » ends in an f you can hear; « Elle est sportive. » ends in a v you can hear. English speakers hear those two as nearly the same and French speakers do not, so the take should not help by exaggerating either one. Read them at conversational weight and let the difference be what it actually is.',
        clipIds: patternIds('if').map((id) => fr(id)),
      },
      {
        id: 'rec-a2-03-invariable',
        desc: 'THE FOUR MARRON LINES, WHICH ARE THE SAME WORD FOUR TIMES. This is the only take in the lesson whose value is that nothing happens in it. All four must be identical on the last word: same length, same vowel, same nasal, no final consonant creeping in on the plural ones. A reader who varies them to keep the take alive has taught the opposite of the screen. Then the pair the class turns on: « Ses vestes sont vertes. » then « Ses vestes sont marron. », one take, back to back, identical up to the last word.',
        clipIds: [...patternIds('invariable').map((id) => fr(id)), fr('fr.a2.adjectifs-essentiels.030'), fr('fr.a2.adjectifs-essentiels.031')],
      },
      {
        id: 'rec-a2-03-newcolours',
        desc: 'THE FOUR COLOURS THE LEARNER HAS NEVER MET, READ AS ORDINARY VOCABULARY. kaki, crème, bleu marine, bleu clair, each inside its sentence, at conversational pace with no teaching emphasis anywhere and in particular none on the colour. The whole value of the screen is that these are unremarkable words that happen to belong to a class, and a reading that announces them undoes that.',
        clipIds: ['fr.a2.adjectifs-essentiels.026', 'fr.a2.adjectifs-essentiels.027', 'fr.a2.adjectifs-essentiels.028', 'fr.a2.adjectifs-essentiels.029'].map((id) => fr(id)),
      },
      {
        id: 'rec-a2-03-dictee',
        desc: 'THE FOURTEEN DICTÉE LINES, ONE TAKE EACH, CLEAN AND UNHURRIED, WITH NO CONTRAST INTENT AT ALL. This is the opposite instruction to every other take in the lesson: here the learner is spelling rather than comparing, and any pair-reading would hand them the answer. Read each line as though it were the only line. The plural s and the feminine e must be neither helped nor hidden; say the sentence the way somebody would say it, which is the whole difficulty the exercise exists to create.',
        clipIds: DICTATION_IDS.map((id) => fr(id)),
      },
      {
        id: 'rec-a2-03-break',
        desc: 'THE BREAK CARD. « sérieux » then « sérieuse », as one take, back to back, with the smallest gap the recording allows. They must sound like the same word twice with a different ending, because that is what they are. Any pause, any change of pitch, any extra weight on the second and the learner hears two words instead of one word finished two ways.',
        clipIds: [form('eux', 'm.sg'), form('eux', 'f.sg')],
      },
      {
        id: 'rec-a2-03-scene',
        desc: 'THE FLAT VIEWING. She is friendly, a little rushed, and completely uninterested in teaching anybody French. « Et vous, vous travaillez beaucoup ? » is casual and quick, the way you ask somebody something while showing them a kitchen. The English line afterwards is the important one and it must not sound like a defeat or a rebuke: she switches language cheerfully and without thinking about it, because it is the shortest route to a conversation, and she apologises for her own English rather than for the learner\'s French. That is exactly what makes it expensive, and nothing in the delivery should point at it.',
        clipIds: ['Et vous, vous travaillez beaucoup ?', fr('fr.a2.adjectifs-essentiels.033')],
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

export const ACCORD_ADJECTIFS_SPEAK_IDS = SPEAK_IDS;
export const ACCORD_ADJECTIFS_ITEM_IDS = ITEM_IDS;
export const ACCORD_ADJECTIFS_DECK_TRANCHE = DECK_TRANCHE;
export const ACCORD_ADJECTIFS_ACTS = ACTS;
export const ACCORD_ADJECTIFS_SECTIONS = SECTIONS;
export const ACCORD_ADJECTIFS_SHEETS = SHEETS;
export const ACCORD_ADJECTIFS_DRILLS = DRILLS;
export const ACCORD_ADJECTIFS_ERROR_TRIGGERS = ERROR_TRIGGERS;
export const ACCORD_ADJECTIFS_SCENE_BEATS = SCENE_BEATS;
