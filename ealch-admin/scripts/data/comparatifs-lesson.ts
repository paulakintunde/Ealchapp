// a2.08.l1 « Comparatifs & superlatifs » — the lesson.
//
// 24 sections, six acts, one quiz, one lesson. Every section is a mission: the
// renderer numbers one per section and the design distinction between missions
// and sections does not exist (a2.07 verified it on a device).
//
// 24 and 30 are the measured A2 house shape (A2-TAIL-AUDIT §2: nineteen of the
// thirty-two shipped A2 lessons sit exactly there). This one does not go past
// it, so there is nothing to justify.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE THREE REQUIRED LAYOUTS, AND WHERE EACH ONE LIVES
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE THREE DEGREES TOGETHER, one describing word, frame visibly
//      constant.                                            -> `s03-three`
//      A `tapTable` at three rows. It is the FIRST teaching screen in the
//      lesson, before any card, because it IS the Owns and everything after
//      it is the same three words moving.
//
//   2. `meilleur` AND `mieux` SIDE BY SIDE, with `plus bon` shown as what
//      French refuses.                                      -> `s15-pair`
//
//   3. THE COMPARATIVE AND THE SUPERLATIVE ADJACENT, so the article's arrival
//      is visible.                                          -> `s10-super`
//      Same noun, same describing word, one word of difference, and the two
//      corpus rows behind them (E145, E141) were authored as a pair for it.
//
// ONE `tapTable` IN THE FLOW AND ONE `table` IN A REFERENCE SHEET, then stop.
// The tapTable is `s03-three` at three rows; the table is `sheet-cadre`, which
// `s11-four` points at. A `table` at `layer: 'core'` is refused outright by
// `validateDensity` and a device check cannot find it, because it draws
// correctly and is refused at the batch.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHY THE OWNS IS TWO ACTS AND THE TRAP IS ONE
// ══════════════════════════════════════════════════════════════════════════
//
// Doctrine §B.5: the Owns must outweigh the paradigm. Here there is no
// paradigm to outweigh — the Owns IS the frame — so the test that matters is
// that the frame and the article (acts 2 and 3, eleven missions) outweigh the
// trap and the scene (acts 4 and 1, seven). A lesson that gave bon/meilleur
// more room than the frame would be a lesson about two irregular words.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE DRILL TRAP, WHICH IS WHY SO LITTLE IS RELEASED BY TRANCHE
// ══════════════════════════════════════════════════════════════════════════
//
// 112 of the 129 `fr.a2.comparaisons` rows carry `dictation` or `sentence` and
// NOTHING ELSE. A `deckTranche` release of any of them validates, publishes
// and serves no card. Only `.113`-`.132` are `flashcard + voiceflash`.
//
// So every imported sentence here is reachable by being NAMED by itemId — in
// `s08-unseen`, `s14-sort`, a lesson `term` or a `LessonDrill` — and the batch
// asserts both directions: a release that would draw nothing, and an import
// that nothing names.

import type { Lesson, LessonSection, LessonDrill, SectionAudio, ReferenceSheet } from '../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, REFRAME, E,
  ALL_ROWS, IMPORT_IDS, IMPORTED, DICTEE_IDS, UNSEEN,
  AGREEMENT_UNIT, ADVERB_UNIT, SPLIT_UNIT, NEGATION_UNIT,
  PLUS_SILENT, PLUS_SOUNDED,
} from './comparatifs-corpus.ts';
import { COMPARATIFS_TERMS } from './comparatifs-terms.ts';

/** NOT `as const`. A readonly `speeds` tuple is not assignable to
 *  `SectionAudio['speeds']`, which is a mutable `number[]`, and the admin
 *  typecheck is the only check in this project that says so. */
const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT I — LE MOT DU MILIEU
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.2's A2 register: BREAKDOWN, NOT RUDENESS. Nobody is impolite,
 *  nothing is mispronounced, and the learner runs out of sentence in public.
 *
 *  The prompt asks for exactly this: « Someone comparing two things, reaching
 *  `plus bon`, hearing it land wrong, and abandoning the sentence. Nobody
 *  corrects them. »
 *
 *  NO SPACED EXCLAMATION MARK IN ANY BUBBLE. One has made a scene lose its
 *  last word on a Pixel 6 while the gloss still translated it.
 *
 *  LessonSection is a UNION and only the scene variant has `beats`, so the
 *  const is typed through Extract rather than as a bare array. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration',
    text: 'Saturday morning at the cheese counter. Two wedges on the paper, one from each end of the case. The woman behind it has already cut a sliver off each and is waiting to hear which one goes in the bag.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'La fromagère',
    fr: 'Alors, lequel vous préférez ?',
    en: 'So, which one do you prefer?',
    respell: '[a-LOR luh-KEL voo pray-fay-RAY]',
    stage: 'She is not in a hurry. There is nobody behind you.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'narration',
    text: 'He has the words. He has had grand and bon and fort since his first month. He starts, and four words in he hears himself.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'you',
    speaker: 'You',
    fr: 'Le premier est plus bon...',
    en: 'The first one is more good...',
    respell: '[luh pruh-MYAY eh plü BOHⁿ]',
    stage: 'The sentence stops there. He does not finish it and he does not start again.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'choice',
    prompt: 'He has one more go at it. Which one does he say?',
    size: 'lg',
    options: [
      { fr: 'Le premier est plus bon.', respell: '[luh pruh-MYAY eh plü BOHⁿ]', en: 'The first one is more good.', outcome: 'breaks', audio: AUDIO },
      { fr: 'Le premier est meilleur.', respell: '[luh pruh-MYAY eh meh-YUHR]', en: 'The first one is better.', outcome: 'works', audio: AUDIO },
    ],
    followUp: {
      works: 'She wraps the first one. Eleven euros the kilo, and a sliver of a third thing he did not ask about.',
      breaks: 'She waits. Then she wraps both, because she has no idea which he meant, and he pays for two.',
    },
  },
  {
    kind: 'break',
    heading: 'The sentence was right until the last word',
    // 39 words. The core density cap is 45 on any one authored string.
    body: 'Nothing went wrong with the frame. Le premier est plus... was correct and would have carried any describing word in the language. One word out of five has no plus form at all, and it is the one he reached for.',
    wrong: {
      fr: 'Le premier est plus bon.',
      ipa: '/lə pʁə.mje ɛ ply bɔ̃/',
      respell: '[luh pruh-MYAY eh plü BOHⁿ]',
      en: 'The first one is more good.',
    },
    right: {
      fr: 'Le premier est meilleur.',
      ipa: '/lə pʁə.mje ɛ mɛ.jœʁ/',
      respell: '[luh pruh-MYAY eh meh-YUHR]',
      en: 'The first one is better.',
    },
    coach: 'Two words in French have their own comparison and refuse to take plus. The frame is fine. Learn the two.',
    size: 'lg',
    audio: AUDIO,
  },
  {
    kind: 'resolve',
    text: 'He ate both. The one he could not name was the better one, and he still cannot say so.',
    size: 'md',
  },
];

const S01_SCENE: LessonSection = {
  type: 'scene',
  id: 's01-scene',
  render: 'screens',
  layer: 'core',
  title: 'The word that had no plus',
  setting: { place: 'Un étal de fromages, au marché', city: 'Lyon', time: '10 h', ambience: 'a covered market, quiet' },
  beats: SCENE_BEATS,
  closing: { text: 'One frame, three middle words, and two words in the whole language that will not take any of them.', size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['frame', 'better'],
};

const S02_GOALS: LessonSection = {
  type: 'goals',
  id: 's02-goals',
  layer: 'core',
  title: 'By the end of this lesson',
  goals: [
    { t: 'Compare any two things, with any describing word you own', s: 'Act 2: one frame, three middle words' },
    { t: 'Say which one is the most or the least', s: 'Act 3: the same frame with the article in front' },
    { t: 'Get the ending right when nobody can hear it', s: 'Act 3, and it is a writing job, not a listening one' },
    { t: 'Pick between meilleur and mieux without stopping', s: 'Act 4: the two words that refuse plus' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** REQUIRED LAYOUT 1, AND IT IS THE FIRST TEACHING SCREEN IN THE LESSON.
 *
 *  Three rows, one describing word, one frame. The columns are chosen so the
 *  frame is LITERALLY constant down the page and only column one moves.
 *
 *  `tapTable`, NOT `table`. A `table` at `layer: 'core'` is refused outright by
 *  `validateDensity` (density.logic.ts:498) and 0 of 74 shipped lessons carry
 *  one in `sections`. A2-BUILD-DOCTRINE §B.8 records that a2.29 device-checked
 *  a probe table on a Pixel 6, saw every cell draw, and had the batch refuse
 *  it: A DEVICE CHECK CANNOT FIND THIS ONE.
 *
 *  Six rows is the ceiling on a Pixel 6 and this uses three. Headers have a
 *  glyph budget and these are 6, 8 and 8 characters. */
const S03_THREE: LessonSection = {
  type: 'tapTable',
  id: 's03-three',
  layer: 'core',
  title: 'One frame, three middle words',
  cols: ['Middle', 'The whole sentence', 'It means'],
  rows: [
    {
      cells: ['plus', 'Il est plus grand que moi.', 'more'],
      say: 'Il est plus grand que moi.',
      detail: {
        title: 'plus',
        body: 'More than. The one you will reach for first and the one you will use most. Before a describing word the final s is not said, which is why it never sounds like the plus on a calculator.',
        say: 'Il est plus grand que moi.',
      },
    },
    {
      cells: ['moins', 'Il est moins grand que moi.', 'less'],
      say: 'Il est moins grand que moi.',
      detail: {
        title: 'moins',
        body: 'Less than. English usually goes the other way round and says shorter rather than less tall, so this one feels like a translation until you have used it a dozen times. French is happy with it.',
        say: 'Il est moins grand que moi.',
      },
    },
    {
      cells: ['aussi', 'Il est aussi grand que moi.', 'the same'],
      say: 'Il est aussi grand que moi.',
      detail: {
        title: 'aussi',
        body: 'As tall as. The same aussi that means also, doing a completely different job because of where it sits. Between est and the describing word it can only mean one thing.',
        say: 'Il est aussi grand que moi.',
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['frame', 'middle', 'than'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT II — LE CADRE NE BOUGE PAS  (the Owns, six missions)
 * ══════════════════════════════════════════════════════════════════════════ */

/** The four words the frame is made of, one card each. `que` gets a card of
 *  its own because it is the one an English speaker drops. */
const S04_MIDDLE: LessonSection = {
  type: 'cardDeck',
  id: 's04-middle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Four words, and only one of them is a choice',
  hint: 'Swipe. Three of these are the choice. The fourth is not optional.',
  cards: [
    {
      label: 'MORE',
      head: 'the one you will use most',
      fr: 'plus',
      sub: '[plü]',
      body: 'Before a describing word the s stays silent. On its own, with nothing after it, the s comes back and it is said PLÜSS.',
    },
    {
      label: 'LESS',
      head: 'English goes the other way',
      fr: 'moins',
      sub: '[MWEHⁿ]',
      body: 'You would say shorter; French says less tall. Both are ordinary. This one takes a fortnight to stop feeling translated.',
    },
    {
      label: 'THE SAME',
      head: 'also, doing another job',
      fr: 'aussi',
      sub: '[oh-SEE]',
      body: 'The same word that means also. Sitting between est and a describing word, it can only mean as much as.',
    },
    {
      label: 'THAN',
      head: 'and it is not optional',
      fr: 'que',
      sub: '[kuh]',
      body: 'English lets you stop at taller. French does not. If you mean a comparison, que and the other thing have to be there or you have said something else.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['middle', 'than'],
};

/** THE SLOT IS THE TEACHING. One frame, six different describing words in it,
 *  and every one of the six is already a headword the learner may have met in
 *  another lesson. Nothing here is new vocabulary; the point is that the frame
 *  does not care which word goes in it.
 *
 *  `poli` IS NOT HERE and must not be. It is `s08-unseen`'s answer. */
const S05_SWAP: LessonSection = {
  type: 'examples',
  id: 's05-swap',
  layer: 'core',
  title: 'Same frame, different word',
  examples: [
    { fr: 'Il est plus grand que moi.', en: 'He is taller than me.', note: 'grand' },
    { fr: 'Le train est plus rapide que le bus.', en: 'The train is faster than the bus.', note: 'rapide' },
    { fr: 'Ce café est aussi fort que le thé.', en: 'This coffee is as strong as the tea.', note: 'fort' },
    { fr: "Cette rue est moins longue que l'avenue.", en: 'This street is shorter than the avenue.', note: 'longue, and it agrees' },
    { fr: 'Ce livre est aussi intéressant que le film.', en: 'This book is as interesting as the film.', note: 'intéressant' },
    { fr: "Il fait aussi froid qu'hier.", en: 'It is as cold as yesterday.', note: 'froid, and que becomes qu before a vowel' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['frame'],
};

/** `hideLines: true` OR THIS IS A READING EXERCISE WITH A PLAY BUTTON.
 *  `ListeningView` prints every line's `fr` AND `en` beside its PlayDot, so
 *  every listening section in the product has been answerable by reading.
 *
 *  THE ONLY THING IN THIS LESSON THE EAR CAN ACTUALLY DO. plus, moins and
 *  aussi are three completely different sounds; the four superlative forms are
 *  two. So the ear work is all here, on the middle word, and the agreement is
 *  tested in writing further down.
 *
 *  No question reprints its own line, or hideLines buys nothing. */
const S06_HEAR: LessonSection = {
  type: 'listening',
  id: 's06-hear',
  layer: 'core',
  hideLines: true,
  title: 'Which middle word was it',
  lines: [
    { fr: 'Il est plus grand que moi.', en: 'He is taller than me.' },
    { fr: 'Il est moins grand que moi.', en: 'He is less tall than me.' },
    { fr: 'Il est aussi grand que moi.', en: 'He is as tall as me.' },
    { fr: "Cette rue est moins longue que l'avenue.", en: 'This street is shorter than the avenue.' },
  ],
  questions: [
    {
      q: 'The first one. Who is taller?',
      opts: ['he is', 'you are', 'they are the same'],
      correct: 0,
      why: 'plus puts him above you. The two words on either side of it are identical in all three of the first lines, so the middle one is the whole message.',
    },
    {
      q: 'The second one. Who is taller?',
      opts: ['he is', 'you are', 'they are the same'],
      correct: 1,
      why: 'moins puts him below you, so you are the taller one. English would have said he is shorter and French does not have to.',
    },
    {
      q: 'The third one. Who is taller?',
      opts: ['he is', 'you are', 'they are the same'],
      correct: 2,
      why: 'aussi is level pegging. Nobody is more or less anything.',
    },
    {
      q: 'The fourth one. Which is longer?',
      opts: ['the street', 'the avenue', 'the same length'],
      correct: 1,
      why: 'moins again, and this time the describing word has an ending on it because rue is feminine. The ending changes nothing about which one is longer.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['middle'],
};

/** THE ONE AUDIBLE THING ABOUT `plus`, AND THE CORPUS HAS BEEN ENCODING IT ALL
 *  ALONG. Twelve respelled rows, no counterexample: `plü` in front of a
 *  describing word, `PLÜS` with nothing after it.
 *
 *  This is what the two quiz `listenChoose` items test. It is also the reason
 *  neither `fr.a2.comparaisons.113` nor any of the other sixteen deck cards
 *  gets a respelling from this build: for bare `plus` a respelling would have
 *  to pick one of the two, and the whole point is that it is both. */
const S07_PLUS: LessonSection = {
  type: 'cardDeck',
  id: 's07-plus',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'The s on plus comes and goes',
  hint: 'Four cards. The spelling never changes and the sound does.',
  cards: [
    {
      label: 'SILENT',
      head: 'in front of a describing word',
      fr: 'plus grand',
      sub: `[${PLUS_SILENT} GRAHⁿ]`,
      body: 'This is the comparison. The s is not said and the two words run together. It is the one you will meet ninety times out of a hundred.',
    },
    {
      label: 'SILENT',
      head: 'and again, with a longer word',
      fr: 'plus intéressant',
      sub: `[${PLUS_SILENT} ahⁿ-tay-reh-SAHⁿ]`,
      body: 'Nothing about the length of the describing word changes it. If something follows plus, the s stays down.',
    },
    {
      label: 'SOUNDED',
      head: 'with nothing after it',
      fr: 'Il en veut plus.',
      sub: `[EEL ahⁿ VEU ${PLUS_SOUNDED}]`,
      body: 'He wants more. Nothing follows plus, so the s comes back and you can hear it. This is not a comparison at all.',
    },
    {
      label: 'SOUNDED',
      head: 'and in the fixed pair',
      fr: 'en plus',
      sub: `[AHⁿ ${PLUS_SOUNDED}]`,
      body: 'On top of that, as well. Learned whole, and it keeps its s the same way. So does de plus.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['middle'],
};

/** THE GENERALISATION MISSION. Doctrine §B.1: a lesson that makes the learner
 *  produce a form from a word it never showed them has taught the system.
 *
 *  GROUP 2 IS A CONTROL PAGE with `items: []` and a check, which is the house
 *  pattern (a1.23's suite pins it). Its check hands over `poli`, which this
 *  lesson does not teach, does not import and names nowhere else. Both other
 *  groups exist to make that one answerable.
 *
 *  EVERY itemId HERE IS FROM THE `dictation`-ONLY OR `sentence`-ONLY
 *  POPULATION that no deck can serve. Naming them here is what makes them
 *  reachable at all.
 *
 *  `note`, NOT `sub`. On a groupDrill ITEM `sub` draws nothing; GroupDrillView
 *  builds its second line from `note`/`respell`/`en`. a2.07 shipped 33 blank
 *  lines this way and passed 4,195 tests. */
const S08_UNSEEN: LessonSection = {
  type: 'groupDrill',
  id: 's08-unseen',
  layer: 'core',
  size: 'lg',
  title: 'Now do it with a word we never gave you',
  groups: [
    {
      label: 'The frame, with words you have already seen',
      items: [
        { fr: 'Il est plus grand que moi.', itemId: E(133), note: 'more', en: 'He is taller than me.' },
        { fr: 'Il est moins grand que moi.', itemId: E(134), note: 'less', en: 'He is less tall than me.' },
        { fr: 'Il est aussi grand que moi.', itemId: E(135), note: 'the same', en: 'He is as tall as me.' },
        { fr: 'Ce livre est plus intéressant que le film.', itemId: E(5), note: 'a longer word, same five slots', en: 'This book is more interesting than the film.' },
        { fr: "Il fait moins froid qu'hier.", itemId: E(6), note: 'que becomes qu before a vowel', en: 'It is less cold than yesterday.' },
      ],
      check: {
        q: 'What is the same in all five?',
        opts: ['the describing word', 'everything except the middle word and the two things', 'the thing being compared'],
        correct: 1,
        why: 'Five slots, and only two of them ever hold anything new. That is the whole of it, and it is why the next group is possible.',
      },
    },
    {
      label: 'And now one nobody has shown you',
      items: [],
      check: {
        q: 'poli means polite. He is more polite than me is',
        opts: ['Il est plus poli que moi.', 'Il est poli plus que moi.', 'Il est plus poli.'],
        correct: 0,
        why: 'This word appears nowhere else in this lesson and you have just used it correctly. The middle word goes in front of the describing word, and que and the other person finish it. The third option stops early and is not a comparison.',
      },
    },
    {
      label: 'One more, and the ending moves this time',
      items: [
        { fr: 'Cette rue est plus longue que l\'avenue.', itemId: E(14), note: 'rue is feminine, so longue', en: 'This street is longer than the avenue.' },
        { fr: "Cette rue est aussi longue que l'avenue.", itemId: E(152), note: 'the ending does not care which middle word', en: 'This street is as long as the avenue.' },
        { fr: 'Le train est plus rapide que le bus.', itemId: E(63), note: 'rapide already ends in e', en: 'The train is faster than the bus.' },
        { fr: 'Ce café est aussi fort que le thé.', itemId: E(155), note: 'café is masculine, so fort', en: 'This coffee is as strong as the tea.' },
        { fr: 'Ce livre est aussi intéressant que le film.', itemId: E(153), note: 'the aussi the corpus was missing', en: 'This book is as interesting as the film.' },
      ],
      check: {
        q: 'The describing word takes its ending from',
        opts: ['the middle word', 'what is being described', 'the word after que'],
        correct: 1,
        why: `${AGREEMENT_UNIT} taught this and nothing about the frame suspends it. rue is feminine so longue, café is masculine so fort. The middle word has no say in it at all.`,
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['frame', 'agree'],
};

/** The frame from English, which is the direction production actually runs in.
 *  Nothing here is new: it is act 2 as recall. */
const S09_FLASH: LessonSection = {
  type: 'flashcards',
  id: 's09-flash',
  layer: 'core',
  title: 'Build it from the English',
  cards: [
    { front: 'He is taller than me', back: 'Il est plus grand que moi.', say: 'Il est plus grand que moi.' },
    { front: 'He is less tall than me', back: 'Il est moins grand que moi.', say: 'Il est moins grand que moi.' },
    { front: 'He is as tall as me', back: 'Il est aussi grand que moi.', say: 'Il est aussi grand que moi.' },
    { front: 'faster', back: 'plus rapide', say: 'plus rapide' },
    { front: 'slower', back: 'moins rapide', say: 'moins rapide' },
    { front: 'just as fast', back: 'aussi rapide', say: 'aussi rapide' },
    { front: 'cheaper', back: 'moins cher', say: 'moins cher' },
    { front: 'just as expensive', back: 'aussi cher', say: 'aussi cher' },
    // THE SAME FRAME ON A VERB. a2.17 reserved these two for this unit by name
    // and asserted they appear on no learner surface of its own. This is where
    // they land, and the third completes the triple.
    { front: 'faster, said of how somebody moves', back: 'plus vite', say: 'plus vite' },
    { front: 'more slowly', back: 'moins vite', say: 'moins vite' },
    { front: 'just as quickly', back: 'aussi vite', say: 'aussi vite' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['middle'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT III — L'ARTICLE ARRIVE  (the Owns extended, five missions)
 * ══════════════════════════════════════════════════════════════════════════ */

/** REQUIRED LAYOUT 3: the comparative and the superlative ADJACENT, so the
 *  article's arrival is visible.
 *
 *  Same noun, same describing word, one word of difference. E(145) and E(141)
 *  were authored as a pair for exactly this and nothing else in the corpus
 *  gives it: the published superlatives sit on `bâtiment`, `fenêtre` and
 *  `arbres`, three different nouns, so setting any two of them side by side
 *  compares the nouns as well. */
const S10_SUPER: LessonSection = {
  type: 'cardDeck',
  id: 's10-super',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'One word arrives and the meaning moves',
  hint: 'Two pairs. Read the top line, then the bottom, and watch what changed.',
  cards: [
    {
      label: 'MORE THAN ONE OTHER',
      head: "Ce jardin est plus grand que l'autre.",
      fr: "C'est le plus grand jardin du quartier.",
      sub: '[SEH luh plü GRAHⁿ zhar-DEHⁿ dü kar-TYAY]',
      body: 'Bigger than that one, against the biggest of all of them. The frame did not move. le arrived in front of it.',
    },
    {
      label: 'AND THE OTHER WAY',
      head: 'Cette veste coûte moins cher que le manteau.',
      fr: "C'est le moins cher des deux hôtels.",
      sub: '[SEH luh mwehⁿ SHEHR day deu-zoh-TEL]',
      body: 'moins works the same way. le moins is the least of them, and nothing else about the sentence changed either.',
    },
    {
      label: 'WHERE THE ARTICLE GOES',
      head: 'in front of plus or moins',
      fr: 'le plus grand',
      sub: '[luh plü GRAHⁿ]',
      body: 'Not in front of the describing word. le plus grand, never plus le grand. The article and the middle word travel as a pair.',
    },
    {
      label: 'AND WHAT COMES AFTER',
      head: 'de, not dans',
      fr: 'du quartier',
      sub: '[dü kar-TYAY]',
      body: 'The biggest IN the neighbourhood is de le quartier, which contracts to du. English says in and French says of, every time.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['most', 'frame'],
};

/** TRAP 2. The superlative agrees, and the article carries it.
 *
 *  FOUR CELLS, ONE FRAME, and the test asserts them cell by cell rather than
 *  by count. `les plus grandes` was ZERO ROWS ANYWHERE in 48,888 published
 *  items before this build.
 *
 *  TWO OF THE FOUR ARE ONE SOUND. le plus grand and les plus grands are
 *  identical to the ear, and so are la plus grande and les plus grandes. That
 *  is why every scored item on this rule is `typeIn`: `fold()` keeps a final
 *  -e and a final -s, so the distinction survives typing and dies in speech.
 *
 *  `sheetId` points at the full grid, which is the one `table` in this lesson
 *  and lives at layer `deep` where density is deliberately relaxed. */
const S11_FOUR: LessonSection = {
  type: 'cardDeck',
  id: 's11-four',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-cadre',
  title: 'Four spellings, two sounds',
  hint: 'One garden, one house, then several of each. Watch the last letter.',
  cards: [
    {
      label: 'ONE, MASCULINE',
      head: 'le plus grand',
      fr: "C'est le plus grand jardin du quartier.",
      sub: '[SEH luh plü GRAHⁿ zhar-DEHⁿ dü kar-TYAY]',
      body: 'The plain form. jardin is masculine and singular, so nothing is added to grand at all.',
    },
    {
      label: 'ONE, FEMININE',
      head: 'la plus grande',
      fr: "C'est la plus grande maison du quartier.",
      sub: '[SEH la plü GRAHⁿD meh-ZOHⁿ dü kar-TYAY]',
      body: 'maison is feminine, so grande, and this one you CAN hear: the d wakes up. It is the only one of the four that is audible.',
    },
    {
      label: 'SEVERAL, MASCULINE',
      head: 'les plus grands',
      fr: 'Ce sont les plus grands jardins du quartier.',
      sub: '[suh SOHⁿ lay plü GRAHⁿ zhar-DEHⁿ dü kar-TYAY]',
      body: 'An s on the article and an s on grand, and neither of them is said. This sounds exactly like the first card.',
    },
    {
      label: 'SEVERAL, FEMININE',
      head: 'les plus grandes',
      fr: 'Ce sont les plus grandes maisons du quartier.',
      sub: '[suh SOHⁿ lay plü GRAHⁿD meh-ZOHⁿ dü kar-TYAY]',
      body: 'The e and the s together. It sounds exactly like the second card, so the only place this one exists is on paper.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['agree', 'most'],
};

/** WHAT COMES AFTER THE SUPERLATIVE, which is where English speakers put in.
 *  Six published rows, every one of them `de` or a contraction of it. */
const S12_OF: LessonSection = {
  type: 'examples',
  id: 's12-of',
  layer: 'core',
  title: 'The biggest OF, never the biggest IN',
  examples: [
    { fr: "C'est le plus grand bâtiment de la ville.", en: "It's the tallest building in the city.", note: 'de la' },
    { fr: "C'est la plus grande fenêtre de la pièce.", en: "It's the biggest window in the room.", note: 'de la' },
    { fr: 'Ce sont les plus grands arbres du parc.', en: 'They are the tallest trees in the park.', note: 'de + le = du' },
    { fr: 'Elle est la plus jeune de la famille.', en: 'She is the youngest in the family.', note: 'de la, and a person this time' },
    { fr: "Il est le plus rapide de l'équipe.", en: 'He is the fastest on the team.', note: "de l' before a vowel" },
    { fr: "C'est la question la plus difficile de l'examen.", en: "It's the hardest question on the exam.", note: 'and here the whole thing sits after the noun' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['most'],
};

/** `questionsInModal: true`: the passage holds the screen and the questions
 *  follow on a second page, so the learner cannot pattern-match against
 *  visible text.
 *
 *  A glossary KEY is matched against the passage's own tokens by the real
 *  `segmentSentence`, and `glossary-resolves.test.ts` reads the whole seed for
 *  exactly this. Every key below appears in `text` VERBATIM, and none is five
 *  words or more (MAX_GLOSS_WORDS is four and a longer key can never match).
 *
 *  A READING PASSAGE IS ONE BLOCK. `PassagePage` splits on /(?<=[.!?»])\s+/,
 *  so an authored newline is silently discarded. There are none here. */
const S13_READ: LessonSection = {
  type: 'reading',
  id: 's13-read',
  layer: 'core',
  questionsInModal: true,
  title: 'Two flats, one afternoon',
  text: "Nous avons visité deux appartements samedi. Le premier est plus grand que le second, mais il est aussi plus cher. Le second est moins lumineux, et la cuisine y est plus petite. En revanche, il est beaucoup plus proche de la gare, ce qui compte plus que tout le reste pour nous. Le premier a la plus belle vue du quartier, il faut le dire. Le second a le loyer le moins élevé des deux. Nous avons pris le second. C'est le meilleur choix pour cette année, même si ce n'est pas le plus agréable des deux appartements.",
  glossary: [
    { word: 'lumineux', en: 'bright, full of light', note: 'Said of a room, and it is the first thing a French listing mentions.' },
    { word: 'En revanche', en: 'on the other hand', note: 'The word that tells you a comparison is about to turn round.' },
    { word: 'proche', en: 'close, nearby', note: 'plus proche de is nearer to. The de is the same de the superlative uses.' },
    { word: 'le loyer', en: 'the rent', note: 'What you pay every month. Not the price of the flat.' },
    { word: 'élevé', en: 'high', note: 'Used of a number rather than of a building. le moins élevé is the lowest.' },
    // KEYS THAT APPEAR IN THE PASSAGE VERBATIM. `la vue` and `le choix` were
    // both authored with their article and NEITHER is in the text: it reads
    // « la plus belle vue » and « le meilleur choix », so the article is
    // separated from the noun by three words. A glossary key is matched against
    // the passage's own tokens by the real `segmentSentence`, and a key that
    // does not appear underlines nothing. The test found both.
    { word: 'vue', en: 'view', note: 'What you can see out of the window, and a thing French listings price.' },
    { word: 'choix', en: 'choice', note: 'From choisir. le meilleur choix is the best choice, with meilleur because choix is a noun.' },
  ],
  questions: [
    { q: 'Which flat is bigger?', a: 'The first. Le premier est plus grand que le second, and the frame does the whole job in five words.' },
    { q: 'Which one costs more?', a: 'The first again. il est aussi plus cher, where aussi means as well rather than as much as, because there is no que after it.' },
    { q: 'Which has the lower rent?', a: 'The second. Le second a le loyer le moins élevé des deux, which is the superlative with moins and the de that always follows it.' },
    { q: 'They took the second one. Was it the nicer one?', a: 'No, and the passage says so: ce n\'est pas le plus agréable des deux. It was the best choice, which is a different claim and uses a different word.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['most', 'frame'],
};

/** COMPARATIVE OR SUPERLATIVE, sorted. Three gated groups.
 *
 *  GATED, NOT TIMED. `setInterval` is zero across all four render files, so
 *  there is no timer anywhere in the app. No authored string here or anywhere
 *  in this lesson says otherwise, and a guard checks the phrasing.
 *
 *  Fifteen itemIds, every one from the two populations no deck can serve. */
const S14_SORT: LessonSection = {
  type: 'groupDrill',
  id: 's14-sort',
  layer: 'core',
  size: 'lg',
  title: 'More than one thing, or more than all of them',
  groups: [
    {
      label: 'More than ONE other thing',
      items: [
        { fr: "Ce jardin est plus grand que l'autre.", itemId: E(145), note: 'than that one', en: 'This garden is bigger than the other one.' },
        { fr: 'Il est plus grand que moi.', itemId: E(133), note: 'than me', en: 'He is taller than me.' },
        { fr: "Cette rue est moins longue que l'avenue.", itemId: E(151), note: 'than the avenue', en: 'This street is shorter than the avenue.' },
        { fr: 'Le train est plus rapide que le bus.', itemId: E(63), note: 'than the bus', en: 'The train is faster than the bus.' },
        { fr: "Ce fromage sent plus fort que l'autre.", itemId: E(83), note: 'than the other one', en: 'This cheese smells stronger than the other one.' },
      ],
      check: {
        q: 'What tells you every one of these is a comparison and not a superlative?',
        opts: ['the word plus', 'que and a second thing after it', 'the describing word'],
        correct: 1,
        why: 'plus is in both. What separates them is that a comparison names the other thing and a superlative does not have one to name.',
      },
    },
    {
      label: 'More than ALL the others, masculine',
      items: [
        { fr: "C'est le plus grand jardin du quartier.", itemId: E(141), note: 'one garden', en: "It's the biggest garden in the neighbourhood." },
        { fr: 'Ce sont les plus grands jardins du quartier.', itemId: E(143), note: 'several gardens', en: 'They are the biggest gardens in the neighbourhood.' },
        { fr: "C'est le plus grand bâtiment de la ville.", itemId: E(29), note: 'de la ville', en: "It's the tallest building in the city." },
        { fr: 'Ce sont les plus grands arbres du parc.', itemId: E(31), note: 'du parc', en: 'They are the tallest trees in the park.' },
        { fr: "Il est le plus rapide de l'équipe.", itemId: E(88), note: "de l'équipe", en: 'He is the fastest on the team.' },
      ],
      check: {
        q: 'Two of these five sound exactly the same as each other. Which pair?',
        opts: ['the first two', 'the third and the fourth', 'the last two'],
        correct: 0,
        why: 'le plus grand and les plus grands are one sound and two spellings. Neither the s on les nor the s on grands is said, so only writing separates them.',
      },
    },
    {
      label: 'More than ALL the others, feminine',
      items: [
        { fr: "C'est la plus grande maison du quartier.", itemId: E(142), note: 'one house', en: "It's the biggest house in the neighbourhood." },
        { fr: 'Ce sont les plus grandes maisons du quartier.', itemId: E(144), note: 'several houses', en: 'They are the biggest houses in the neighbourhood.' },
        { fr: "C'est la plus grande fenêtre de la pièce.", itemId: E(55), note: 'de la pièce', en: "It's the biggest window in the room." },
        { fr: "C'est le moins cher des deux hôtels.", itemId: E(41), note: 'moins, and des deux', en: "It's the cheaper of the two hotels." },
        { fr: "C'est la question la plus difficile de l'examen.", itemId: E(103), note: 'after the noun this time', en: "It's the hardest question on the exam." },
      ],
      check: {
        q: 'grande has a d you can hear. Where does grandes have one?',
        opts: ['nowhere, the s kills it', 'in exactly the same place', 'only in the plural'],
        correct: 1,
        why: 'The e is what wakes the d up and the s changes nothing. So grande and grandes are one sound, and the pair is invisible to the ear in both genders.',
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['most', 'agree'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT IV — DEUX MOTS POUR « BETTER »  (the trap, four missions)
 * ══════════════════════════════════════════════════════════════════════════ */

/** REQUIRED LAYOUT 2: `meilleur` and `mieux` SIDE BY SIDE, with `plus bon`
 *  shown as what French refuses.
 *
 *  THE MINIMAL PAIR IS CARDS ONE AND TWO and it is genuinely minimal: same
 *  subject, same second term, and the only difference is the verb and the
 *  word. So the part of speech is visible on the card rather than asserted in
 *  prose. `fr.a2.comparaisons.066` is published; E(146) was authored to give it
 *  a twin, because the corpus had the two words and no pair.
 *
 *  WEIGHTED TOWARDS `mieux`, MEASURED. The corpus runs mieux 301 to meilleur
 *  46, so mieux gets the first card, the drill's first item and three of the
 *  five authored rows.
 *
 *  `plus bon` APPEARS HERE AND IN THREE OTHER PLACES ONLY. The guard is scoped
 *  to this section, the trapDrill, the errors deck and the quiz, and fires
 *  anywhere else. */
const S15_PAIR: LessonSection = {
  type: 'cardDeck',
  id: 's15-pair',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'English has one better. French has two.',
  hint: 'The first two cards are the same sentence twice. Look at the verb.',
  cards: [
    {
      label: 'AFTER A VERB',
      head: 'Il travaille mieux que son collègue.',
      fr: 'mieux',
      sub: '[MYUH]',
      body: 'travaille is a verb, so mieux. It never changes shape, for anybody, ever. This is the one the corpus uses six and a half times as often.',
    },
    {
      label: 'AFTER EST',
      head: 'Il est meilleur que son collègue.',
      fr: 'meilleur',
      sub: '[meh-YUHR]',
      body: 'est, so meilleur, and it behaves like any describing word: meilleure, meilleurs, meilleures. Same sentence as the card before, one word apart.',
    },
    {
      label: 'REFUSED',
      head: 'French has no plus bon',
      fr: 'plus bon',
      sub: 'not a thing',
      body: 'bon has its own comparison and will not take plus. There is no version of this that is merely informal or regional. It is the word from the market stall.',
    },
    {
      label: 'REFUSED',
      head: 'and no plus bien either',
      fr: 'plus bien',
      sub: 'not a thing',
      body: 'bien is the other one. Its comparison is mieux and plus bien is the same mistake in the other half of the pair.',
    },
    {
      label: 'AND THE ONE THAT DOES',
      head: 'mauvais takes both',
      fr: 'plus mauvais',
      sub: '[plü moh-VEH]',
      body: 'pire and plus mauvais are both ordinary French and both correct. So the rule is not never say plus. It is that two words have their own form.',
    },
    {
      label: 'THE SUPERLATIVE',
      head: 'and the article still arrives',
      fr: 'le mieux de tous',
      sub: '[luh MYUH duh TOOS]',
      body: 'le meilleur for a noun, le mieux after a verb. Elle chante le mieux de toute la classe: chante is a verb, so it is mieux with le in front, and de follows it the same way.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['better', 'most'],
};

/** THE STEPPED SHAPE ONLY: `rule` > cards > audio > gated drill, with `swipe`,
 *  an `audio` spec and a `say`. `lesson-contract.test.ts` enforces it for every
 *  A2 trapDrill, and `size` comes OFF a stepped one. The stacked shape hides
 *  the gate, the audio and the sub-mission number.
 *
 *  `mieux` RUNS FIRST in the cards and in the drill, which is the 301-to-46
 *  weighting made structural rather than stated.
 *
 *  This is a2.14's savoir/connaître shape a second time and the roundup names
 *  that unit. It is also a2.17's: mieux is the comparative of bien, and a2.17
 *  was told to leave it here and did, by name.
 *
 *  THE AUDIO STEP PLAYS EACH CARD'S `fr`, so nothing in `fr` may be a form
 *  French refuses. `plus bon` is in `promptSound`, which is the WRONG reading
 *  the card exists to correct. */
const S16_TRAP: LessonSection = {
  type: 'trapDrill',
  id: 's16-trap',
  layer: 'core',
  swipe: true,
  title: 'Which of the two better words',
  rule: {
    title: 'Look at the word in front of it',
    body: 'If the sentence has est, or any form of être, you are describing a thing and it is meilleur. If it has a verb doing something, you are describing the doing and it is mieux. One question, asked once, and it decides.',
  },
  cards: [
    { promptLabel: 'Elle chante ...', promptSound: 'Elle chante plus bien.', fr: 'Elle chante mieux.', ipa: '/ɛl ʃɑ̃t mjø/', tip: 'chante is a verb. mieux, and it never changes.' },
    { promptLabel: 'Ce gâteau est ...', promptSound: 'Ce gâteau est plus bon.', fr: 'Ce gâteau est meilleur.', ipa: '/sə ɡa.to ɛ mɛ.jœʁ/', tip: 'est, and gâteau is masculine. meilleur.' },
    { promptLabel: 'Cette tarte est ...', promptSound: 'Cette tarte est plus bonne.', fr: 'Cette tarte est meilleure.', ipa: '/sɛt taʁt ɛ mɛ.jœʁ/', tip: 'est again, and tarte is feminine. meilleure, and it sounds identical.' },
    { promptLabel: 'Il travaille ...', promptSound: 'Il travaille meilleur.', fr: 'Il travaille mieux.', ipa: '/il tʁa.vaj mjø/', tip: 'The other way round: a verb has been given the describing word. mieux.' },
    { promptLabel: 'Elle parle ...', promptSound: 'Elle parle plus bien que moi.', fr: 'Elle parle mieux que moi.', ipa: '/ɛl paʁl mjø kə mwa/', tip: 'parle is a verb, and que moi finishes it properly.' },
    { promptLabel: 'Ce fromage est ...', promptSound: 'Ce fromage est plus fort.', fr: 'Ce fromage est plus fort.', ipa: '/sə fʁɔ.maʒ ɛ ply fɔʁ/', tip: 'Nothing wrong with this one. fort takes plus like almost every word does.' },
  ],
  drill: [
    { promptSay: 'Elle chante ...', opts: ['mieux', 'meilleur'], correct: 0 },
    { promptSay: 'Ce gâteau est ...', opts: ['mieux', 'meilleur'], correct: 1 },
    { promptSay: 'Il travaille ...', opts: ['mieux', 'meilleur'], correct: 0 },
    { promptSay: 'Cette tarte est ...', opts: ['mieux', 'meilleure'], correct: 1 },
    { promptSay: 'Elle parle ... que moi.', opts: ['mieux', 'meilleur'], correct: 0 },
    { promptSay: 'Elle chante ... de la classe.', opts: ['le mieux', 'le meilleur'], correct: 0 },
    { promptSay: 'Ce fromage est ... que l\'autre.', opts: ['plus fort', 'plus bon'], correct: 0 },
    { promptSay: 'Ce vin est ... que l\'autre.', opts: ['meilleur', 'plus bon'], correct: 0 },
  ],
  steps: [
    { label: 'The rule', kind: 'rule', title: 'Look at the word in front of it' },
    { label: 'Six sentences', kind: 'cards', title: 'What the verb decides' },
    { label: 'Hear them', kind: 'audio', title: 'Wrong and right, side by side' },
    { label: 'Now you pick', kind: 'drill', title: 'Eight in a row', gate: true },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['better'],
};

/** `swipe: true` IS MANDATORY. Three shipped lessons omit it and lose the
 *  deck; `MissionSection.tsx` branches on `commonErrors` with `swipe: true`
 *  only, and without it a1.01 mission 5 drew a fully blank screen.
 *
 *  Each `why` explains why the wrong version was a reasonable thing to have
 *  said. That is the difference between a correction and a telling-off.
 *
 *  THE THIRD ERROR IS TRAP 3 and it is the one that does not look like an
 *  error at all: `Il est plus grand.` is grammatical, complete and ordinary,
 *  and it does not mean what the learner meant. */
const S17_ERRORS: LessonSection = {
  type: 'commonErrors',
  id: 's17-errors',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'The five that catch people',
  errors: [
    {
      wrong: 'Ce gâteau est plus bon que l\'autre.',
      right: "Ce gâteau est meilleur que l'autre.",
      why: 'Reasonable, because plus works with every other describing word you own and there is no warning on this one. bon is one of exactly two words in the language that refuse it.',
    },
    {
      wrong: 'Elle chante plus bien que moi.',
      right: 'Elle chante mieux que moi.',
      why: 'Reasonable, and it is the same mistake as the one above wearing different clothes. bien is the other of the two, and its own form is mieux.',
    },
    {
      wrong: 'Il est plus grand. (meaning: taller than his brother)',
      right: 'Il est plus grand que son frère.',
      why: 'Reasonable, because English finishes there and nothing sounds broken. The French sentence is correct and it simply says he is tall. Without que and a second thing, no comparison has been made.',
    },
    {
      wrong: 'Elle est le plus jeune de la famille.',
      right: 'Elle est la plus jeune de la famille.',
      why: `Reasonable, because the ending on jeune does not change and it feels as though nothing has to. The article is carrying the agreement here, which is ${AGREEMENT_UNIT} working in a position it never showed you.`,
    },
    {
      wrong: "C'est le plus grand bâtiment dans la ville.",
      right: "C'est le plus grand bâtiment de la ville.",
      why: 'Reasonable, because English says in the city and dans is in. After a superlative French says of, every time, and de la contracts to du in front of a masculine one.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['better', 'than', 'agree'],
};

/** WRITE THE MIDDLE WORD, AND THE ARTICLE.
 *
 *  ALL FIVE RESOLVE TO LETTERS MODE through the real `dicteeMode`, asserted in
 *  the batch. That is the mode this lesson needs and Corrections §4 is why:
 *  word mode hands every real word over pre-spelled, so a lesson whose whole
 *  written distinction is one small word cannot be tested in it.
 *
 *  EVERY PUBLISHED SENTENCE IN THIS THEME IS WORD MODE. The shortest of the
 *  129, « Il fait moins froid qu'hier. », is 22 letters. Not one could have
 *  been used, which is why all five targets are authored.
 *
 *  Item three beside item one is the article's arrival as a thing the learner
 *  has to type: two letters, and the meaning of the sentence moves. */
const S18_DICTEE: LessonSection = {
  type: 'dictation',
  id: 's18-dictee',
  layer: 'core',
  title: 'Write the middle word',
  itemIds: DICTEE_IDS,
  audio: AUDIO,
  say: REFRAME,
  terms: ['middle', 'most'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT V — PRODUCTION
 * ══════════════════════════════════════════════════════════════════════════ */

/** COMPARING TWO THINGS OUT LOUD, WHICH IS THE canDo.
 *
 *  `alts` on every turn so more than one phrasing is accepted; `stt` scores
 *  against all of them, best match wins. `userEn` on every turn, or the reveal
 *  shows a French sentence the learner is told they should have said and
 *  cannot read. `scenario.logic.test.ts` requires two `alts` and a `userEn`
 *  on every role-play turn seed-wide.
 *
 *  NOT ONE TURN USES A POSSESSIVE PRONOUN. `le tien` and `la mienne` are the
 *  natural way to compare two people's things and they belong to a2.34, so the
 *  second thing is always named outright. */
const S19_TALK: LessonSection = {
  type: 'scenario',
  id: 's19-talk',
  layer: 'core',
  title: 'Which of the two',
  setting: 'A friend is deciding between two flats and has sent you both listings. She wants an opinion, not a summary.',
  turns: [
    {
      ai: "Alors, tu en penses quoi ? Le premier ou le second ?",
      en: 'So, what do you reckon? The first or the second?',
      user: 'Le premier est plus grand que le second.',
      userEn: 'The first is bigger than the second. (Start with the frame. Name both things.)',
      alts: [
        { fr: 'Le second est moins grand que le premier.', en: 'The second is smaller than the first.' },
        { fr: 'Le premier est plus lumineux que le second.', en: 'The first is brighter than the second.' },
      ],
    },
    {
      ai: "Oui, mais le premier est à huit cents euros. C'est beaucoup.",
      en: 'Yes, but the first one is eight hundred euros. That is a lot.',
      user: "C'est vrai. Il est plus cher que le second.",
      userEn: 'True. It is more expensive than the second. (Same frame, different word in the slot.)',
      alts: [
        { fr: 'Le second est moins cher, oui.', en: 'The second is cheaper, yes.' },
        { fr: "Il est beaucoup plus cher que l'autre.", en: 'It is a lot more expensive than the other one.' },
      ],
    },
    {
      ai: 'Et pour aller au travail ? Le second est près de la gare.',
      en: 'And for getting to work? The second is near the station.',
      user: 'Alors le second est plus proche que le premier.',
      userEn: 'So the second is closer than the first. (You have the frame. proche is just another word in the slot.)',
      alts: [
        { fr: 'Le premier est moins proche de la gare.', en: 'The first is less close to the station.' },
        { fr: 'Le second est plus pratique, alors.', en: 'The second is more practical, then.' },
      ],
    },
    {
      ai: 'Et les cuisines ? Elles se valent, non ?',
      en: 'And the kitchens? They are about the same, are they not?',
      user: "La cuisine du premier est aussi grande que l'autre.",
      userEn: 'The first flat\'s kitchen is as big as the other. (aussi, and grande because cuisine is feminine.)',
      alts: [
        { fr: 'Oui, la cuisine du second est aussi bonne.', en: 'Yes, the second one\'s kitchen is just as good.' },
        { fr: "Non, celle du premier est plus petite.", en: "No, the first one's is smaller." },
      ],
    },
    {
      ai: "Bon. Et si tu devais choisir, tu prendrais lequel ?",
      en: 'Right. And if you had to choose, which would you take?',
      user: "Le second. C'est le meilleur choix pour cette année.",
      userEn: 'The second. It is the best choice for this year. (meilleur, because choix is a noun.)',
      alts: [
        { fr: "Le second, c'est le moins cher des deux.", en: 'The second, it is the cheaper of the two.' },
        { fr: 'Le premier. Il est plus agréable, tout simplement.', en: 'The first. It is nicer, quite simply.' },
      ],
    },
    {
      ai: "D'accord. Et tu dormirais mieux dans lequel ?",
      en: 'All right. And which would you sleep better in?',
      user: 'Je dormirais mieux dans le second.',
      userEn: 'I would sleep better in the second. (dormirais is a verb, so mieux and not meilleur.)',
      alts: [
        { fr: 'Dans le second, je pense. Il est plus calme.', en: 'In the second, I think. It is quieter.' },
        { fr: 'Dans le premier, il est moins bruyant.', en: 'In the first, it is less noisy.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['frame', 'better', 'most'],
};

/** `practice` RENDERS THE SPEAKING DRILL WHATEVER `skill` SAYS, so `skill` is
 *  'speak' and the section is honest about what it is. `skill: 'write'` draws
 *  no writing surface at all.
 *
 *  EVERY NAMED ITEM CARRIES `voiceflash`, checked against POSTGRES and not the
 *  seed. In this theme that is a hard constraint rather than a formality: 112
 *  of the 129 published rows carry NO voiceflash, so a section naming one of
 *  them would render a mic that scores nothing. Every id here is either one of
 *  the seventeen or a row this build authored.
 *
 *  `practice` IS MANDATORY: `lesson-contract.test.ts` mirrors the publish gate
 *  and fails a non-assessment lesson with no practice section, an empty
 *  `practice.itemIds` or an empty `Lesson.itemIds`. */
const S20_SPEAK: LessonSection = {
  type: 'practice',
  id: 's20-speak',
  layer: 'core',
  title: 'Say the whole frame, out loud',
  skill: 'speak',
  itemIds: [
    // The triple, which is the Owns being produced rather than recognised.
    E(133), E(134), E(135),
    // The superlative, all four forms.
    E(141), E(142), E(143), E(144),
    // The comparative twin, so the pair is spoken as a pair.
    E(145),
    // meilleur and mieux, weighted the way the corpus weights them.
    E(146), E(149), E(150),
    // The feminine frame, and the two aussi rows the corpus was missing.
    E(151), E(152), E(153), E(155),
    // The degree cards, all seventeen of which are voiceflash.
    E(120), E(121), E(122), E(123), E(129), E(156), E(157), E(158), E(159),
    E(161), E(162), E(163),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['frame'],
};

const S21_CHECK: LessonSection = {
  type: 'progressCheck',
  id: 's21-check',
  layer: 'core',
  title: 'Where you stand',
  body: 'You can compare two things with any describing word you own, including ones this lesson never listed, and you can say which one is the most or the least of a group. The thing to check is the ending. Two of the four superlative forms are one sound, so you will never catch them by listening and you will never be told you got them wrong out loud. Go back to the four cards in act 3 and write all four out, from the English, without looking. If the last letter comes out right four times, the lesson has landed.',
  stats: [
    { k: 'Middle words', v: 'three, one frame' },
    { k: 'Superlative forms', v: 'four spellings, two sounds' },
    { k: 'Words that refuse plus', v: 'two, and only two' },
    { k: 'Written, not heard', v: 'the ending, every time' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT VI — L'EXAMEN
 * ══════════════════════════════════════════════════════════════════════════ */

/** ONE QUIZ. A second `quiz` section is silently never rendered.
 *
 *  30 QUESTIONS, the measured A2 median, in four rounds of 8/8/7/7.
 *
 *  THE FORMAT MIX, against the measured A2 band (mcq 379 / typeIn 317 /
 *  errorSpot 166 / listenChoose 96):
 *
 *      typeIn        11    37%    the band's 32%, weighted up as the prompt asks
 *      mcq           10    33%    the band's 38%, and well under the half cap
 *      errorSpot      6    20%    the band's 17%
 *      listenChoose   3    10%    the band's 10%
 *
 *  WHAT IS TESTED WHERE, AND WHY IT COULD NOT BE ANYWHERE ELSE:
 *
 *    typeIn        the frame, including one describing word this lesson never
 *                  lists; and the agreement, because fold() keeps a final -e
 *                  and -s and this is the only surface where those survive
 *    errorSpot     `plus bon` and the missing `que`. Both are whole-sentence
 *                  errors and free text is the only surface that catches one
 *    mcq           meilleur against mieux, with the sentence in the stem so
 *                  the part of speech is determinable
 *    listenChoose  `plus` with its final consonant sounded or silent, which is
 *                  a real audible distinction and the only one this lesson has
 *
 *  NO EAR QUESTION OFFERS TWO MEMBERS OF ONE HOMOPHONE GROUP. The group here
 *  is the superlative plurals, which is exactly the thing the prompt says
 *  cannot be tested by ear, and it is enforced by a list rather than by a
 *  sentence in a report.
 *
 *  The quiz SHUFFLES its options at runtime, so nothing here is
 *  hand-randomised. Missions do not shuffle and `s08-unseen` is authored in
 *  its intended order. */
const S22_QUIZ: LessonSection = {
  type: 'quiz',
  id: 's22-quiz',
  layer: 'core',
  title: 'The exam',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-middle',
      label: 'Pick the middle word',
      targets: ['wrong-middle'],
      questions: [
        { format: 'typeIn', q: 'He is taller than me. Write the whole sentence, starting with Il.', answer: 'Il est plus grand que moi', accept: ['Il est plus grand que moi', 'Il est plus grand que moi.'], why: 'Five slots and you filled all five. plus goes in front of the describing word and que brings the other person in.', ref: 's03-three' },
        { format: 'typeIn', q: 'He is less tall than me. Same sentence, one word different.', answer: 'Il est moins grand que moi', accept: ['Il est moins grand que moi', 'Il est moins grand que moi.'], why: 'Only the middle word moved. English would have reached for shorter and French does not have to.', ref: 's03-three' },
        { format: 'typeIn', q: 'He is as tall as me. One word different again.', answer: 'Il est aussi grand que moi', accept: ['Il est aussi grand que moi', 'Il est aussi grand que moi.'], why: 'aussi is the level one. The same aussi that means also, in a position where it can only mean this.', ref: 's03-three' },
        { format: 'mcq', q: 'poli means polite. He is more polite than me is', opts: ['Il est poli plus que moi.', 'Il est plus que poli moi.', 'Il est plus poli que moi.'], correct: 2, why: 'You have never seen this word in this lesson and the frame handled it anyway. That is what the frame is for.', ref: 's08-unseen' },
        { format: 'typeIn', q: 'poli means polite. Write: she is less polite than me. Start with Elle.', answer: 'Elle est moins polie que moi', accept: ['Elle est moins polie que moi', 'Elle est moins polie que moi.'], why: `The frame took a word the lesson never listed, and the feminine -e came from ${AGREEMENT_UNIT} rather than from here.`, ref: 's08-unseen' },
        { format: 'listenChoose', q: 'Listen. Is there a describing word after plus?', say: 'Il est plus grand.', opts: ['yes, something follows plus', 'no, plus ends the sentence'], correct: 0, why: 'grand follows, so the s on plus stays silent and the two words run together as plü grand.', ref: 's07-plus' },
        { format: 'listenChoose', q: 'Listen again. Is there a describing word after plus?', say: 'Il en veut plus.', opts: ['yes, something follows plus', 'no, plus ends the sentence'], correct: 1, why: 'Nothing follows it, so the s comes back and you hear PLÜSS. He wants more, and no comparison has been made.', ref: 's07-plus' },
        { format: 'mcq', q: 'Which of these three is NOT a comparison?', opts: ['Il en veut plus.', 'Il est plus grand que moi.', "Ce jardin est plus grand que l'autre."], correct: 0, why: 'No describing word and no que. It means he wants more of something, which is a different job for the same word.', ref: 's07-plus' },
      ],
    },
    {
      id: 'r2-que',
      label: 'And finish it',
      targets: ['no-que'],
      questions: [
        { format: 'errorSpot', q: 'He meant: taller than his brother. Write what he should have said.', prompt: 'Il est plus grand.', answer: 'Il est plus grand que son frère.', accept: ['Il est plus grand que son frère.', 'Il est plus grand que son frère', 'Il est plus grand que son frere'], why: 'The sentence he wrote is correct French and it says he is tall. Without que and a second thing, no comparison has been made at all.', ref: 's17-errors' },
        { format: 'errorSpot', q: 'She meant: as long as the avenue. Write it out.', prompt: 'Cette rue est aussi longue.', answer: "Cette rue est aussi longue que l'avenue.", accept: ["Cette rue est aussi longue que l'avenue.", "Cette rue est aussi longue que l'avenue", 'Cette rue est aussi longue que lavenue'], why: 'aussi on its own means the street is also long, which is not what she meant. que carries the other half.', ref: 's05-swap' },
        { format: 'mcq', q: 'What does Il est plus grand. actually mean?', opts: ['he is taller than somebody', 'he is tall', 'he has grown'], correct: 1, why: 'It is complete and it is not a comparison. English lets you stop early; French reads the sentence as finished and takes it at face value.', ref: 's17-errors' },
        { format: 'typeIn', q: 'The train is faster than the bus. Write it, starting with Le train.', answer: 'Le train est plus rapide que le bus', accept: ['Le train est plus rapide que le bus', 'Le train est plus rapide que le bus.'], why: 'Both things named, and que between them. rapide already ends in e so nothing is added to it.', ref: 's05-swap' },
        { format: 'typeIn', q: 'It is as cold as yesterday. Write it, starting with Il fait.', answer: "Il fait aussi froid qu'hier", accept: ["Il fait aussi froid qu'hier", "Il fait aussi froid qu'hier.", 'Il fait aussi froid quhier'], why: 'que loses its e in front of a vowel and hier starts with a silent h, so qu\'hier. The frame is otherwise untouched.', ref: 's05-swap' },
        { format: 'mcq', q: 'This coffee is as strong as the tea. Which is right?', opts: ['Ce café est aussi fort le thé.', 'Ce café est aussi fort que le thé.', 'Ce café est aussi que fort le thé.'], correct: 1, why: 'que sits between the describing word and the second thing, never anywhere else and never missing.', ref: 's05-swap' },
        { format: 'mcq', q: 'Which sentence has everything the frame needs?', opts: ['Cette rue est moins longue.', "Cette rue est moins longue que l'avenue.", "Cette rue moins longue que l'avenue."], correct: 1, why: 'Five slots filled: the thing, est, the middle word, the describing word, then que and the other thing. The third option has lost its verb.', ref: 's03-three' },
        { format: 'typeIn', q: 'This street is as long as the avenue. Write it, starting with Cette rue.', answer: "Cette rue est aussi longue que l'avenue", accept: ["Cette rue est aussi longue que l'avenue", "Cette rue est aussi longue que l'avenue.", 'Cette rue est aussi longue que lavenue'], why: 'aussi this time, and longue keeps its ending because rue is feminine whichever middle word you pick.', ref: 's08-unseen' },
      ],
    },
    {
      id: 'r3-article',
      label: 'The article, and the ending',
      targets: ['no-agree'],
      questions: [
        { format: 'typeIn', q: "It's the biggest garden in the neighbourhood. Write it, starting with C'est.", answer: "C'est le plus grand jardin du quartier", accept: ["C'est le plus grand jardin du quartier", "C'est le plus grand jardin du quartier.", 'Cest le plus grand jardin du quartier'], why: 'le in front of the same frame, and du because de la contracts in front of a masculine word.', ref: 's11-four' },
        { format: 'typeIn', q: "It's the biggest house in the neighbourhood. maison is feminine.", answer: "C'est la plus grande maison du quartier", accept: ["C'est la plus grande maison du quartier", "C'est la plus grande maison du quartier.", 'Cest la plus grande maison du quartier'], why: 'la and grande. This is the one of the four you can actually hear, because the e wakes up the d.', ref: 's11-four' },
        { format: 'typeIn', q: 'They are the biggest gardens in the neighbourhood. Several of them.', answer: 'Ce sont les plus grands jardins du quartier', accept: ['Ce sont les plus grands jardins du quartier', 'Ce sont les plus grands jardins du quartier.'], why: 'An s on les, an s on grands, an s on jardins, and not one of the three is said. This sounds exactly like the singular.', ref: 's11-four' },
        { format: 'typeIn', q: 'They are the biggest houses in the neighbourhood. Several, and feminine.', answer: 'Ce sont les plus grandes maisons du quartier', accept: ['Ce sont les plus grandes maisons du quartier', 'Ce sont les plus grandes maisons du quartier.'], why: 'The e and the s together, and it sounds identical to the singular feminine. This form exists only in writing, which is why you are typing it.', ref: 's11-four' },
        { format: 'errorSpot', q: 'famille is feminine, and so is she. One word is wrong. Write it out.', prompt: 'Elle est le plus jeune de la famille.', answer: 'Elle est la plus jeune de la famille.', accept: ['Elle est la plus jeune de la famille.', 'Elle est la plus jeune de la famille'], why: 'jeune does not change shape at all, so the article is doing the whole job. That is where the agreement lives in this frame.', ref: 's17-errors' },
        { format: 'errorSpot', q: 'One word is English wearing a French coat. Write it out.', prompt: "C'est le plus grand bâtiment dans la ville.", answer: "C'est le plus grand bâtiment de la ville.", accept: ["C'est le plus grand bâtiment de la ville.", "C'est le plus grand bâtiment de la ville", 'Cest le plus grand batiment de la ville'], why: 'English says in the city and French says of it. After a superlative it is de, and de plus le contracts to du.', ref: 's12-of' },
        { format: 'mcq', q: 'Where does the article go?', opts: ['plus le grand', 'plus grand le', 'le plus grand'], correct: 2, why: 'In front of the middle word, always. The article and plus travel as a pair and nothing gets between them.', ref: 's10-super' },
      ],
    },
    {
      id: 'r4-better',
      label: 'The two better words',
      targets: ['plus-bon'],
      questions: [
        { format: 'mcq', q: 'Il travaille ... que son collègue. Which word?', opts: ['meilleur', 'plus bien', 'mieux'], correct: 2, why: 'travaille is a verb, so mieux. It never changes shape and it is the one you will need most.', ref: 's15-pair' },
        { format: 'mcq', q: 'Il est ... que son collègue. Same sentence, different verb. Which word?', opts: ['mieux', 'plus bon', 'meilleur'], correct: 2, why: 'est, so meilleur. One word of difference from the question before it, and the verb is what decided.', ref: 's15-pair' },
        { format: 'mcq', q: 'Elle chante ... de toute la classe. Which one?', opts: ['le mieux', 'la meilleure', 'le meilleur'], correct: 0, why: 'chante is a verb, so mieux, and the article still arrives to make it the superlative. le mieux, and le does not change for her.', ref: 's15-pair' },
        { format: 'errorSpot', q: 'gâteau is masculine. One word is not French. Write it out.', prompt: "Ce gâteau est plus bon que l'autre.", answer: "Ce gâteau est meilleur que l'autre.", accept: ["Ce gâteau est meilleur que l'autre.", "Ce gâteau est meilleur que l'autre", 'Ce gateau est meilleur que lautre'], why: 'bon has its own comparison and refuses plus. This is the sentence from the market stall, finished.', ref: 's15-pair' },
        { format: 'errorSpot', q: 'chante is a verb. One word is not French. Write it out.', prompt: 'Elle chante plus bien que moi.', answer: 'Elle chante mieux que moi.', accept: ['Elle chante mieux que moi.', 'Elle chante mieux que moi'], why: 'bien is the other of the two, and its own form is mieux. Same mistake as the one before, in the other half of the pair.', ref: 's16-trap' },
        { format: 'listenChoose', q: 'Listen. Which of the two better words is it?', say: 'Elle parle mieux que moi.', opts: ['mieux', 'meilleure'], correct: 0, why: 'parle is a verb, and the two words sound nothing alike, so this one the ear can settle. mieux.', ref: 's15-pair' },
        { format: 'typeIn', q: 'She cooks better than me. Write it, starting with Elle.', answer: 'Elle cuisine mieux que moi', accept: ['Elle cuisine mieux que moi', 'Elle cuisine mieux que moi.'], why: 'cuisine is what she does, so mieux. If you wrote meilleure you gave a verb a describing word.', ref: 's15-pair' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** Leitner close ON THE FRAME, which is the Owns. Not a summary of the band. */
const S23_REVIEW: LessonSection = {
  type: 'reviewDeck',
  id: 's23-review',
  layer: 'core',
  title: 'The frame, one last time',
  cards: [
    { front: 'taller than me', back: 'plus grand que moi', say: 'Il est plus grand que moi.' },
    { front: 'less tall than me', back: 'moins grand que moi', say: 'Il est moins grand que moi.' },
    { front: 'as tall as me', back: 'aussi grand que moi', say: 'Il est aussi grand que moi.' },
    { front: 'the biggest garden of the lot', back: 'le plus grand jardin du quartier', say: "C'est le plus grand jardin du quartier." },
    { front: 'the biggest house of the lot', back: 'la plus grande maison du quartier', say: "C'est la plus grande maison du quartier." },
    { front: 'better, after est', back: 'meilleur', say: 'Il est meilleur.' },
    { front: 'better, after a verb', back: 'mieux', say: 'Il travaille mieux.' },
    { front: 'the best, after a verb', back: 'le mieux', say: 'le mieux' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** THE REFRAME ONE LAST TIME, AND THE TWO POINTERS THIS LESSON OWES.
 *
 *  `points` is capped at FOUR on a core screen (`core-list-items`).
 *
 *  `ne … plus` GETS ITS ONE LINE HERE AND NOWHERE ELSE. It is a different word
 *  doing a different job and a learner who meets it cold will read it as this
 *  lesson's plus. Named, not taught, and no scored surface in this lesson
 *  contains it. */
const S24_ROUNDUP: LessonSection = {
  type: 'roundup',
  id: 's24-roundup',
  layer: 'core',
  title: 'One frame, one middle word',
  body: `${REFRAME} Three words go in the middle and everything else stays where it is, which is why a describing word you learn next month will already work in it. Put an article in front and you have the most or the least of a group. Two words refuse all of this and have their own forms, and that is the same shape ${SPLIT_UNIT} taught you with savoir and connaître: English merges what French splits, and the split is the whole lesson. One warning for later: ne ... plus is a completely different plus and it means no longer, not more. ${NEGATION_UNIT} owns it and it is not this.`,
  points: [
    'plus, moins, aussi. The frame never moves.',
    'que and the other thing, or you have not compared anything.',
    'The article arrives and it carries the ending.',
    `meilleur after est, mieux after a verb. ${ADVERB_UNIT} left mieux here.`,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['frame', 'better'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFERENCE SHEET
 *
 *  The ONE `table` in this lesson, and it is here because a `table` at layer
 *  `core` is refused outright by `validateDensity`. `layer: 'deep'` plus
 *  `render: 'sheet'` is the only part of the three-layer model that works:
 *  `more` is read by no renderer and draws exactly like `core`.
 *
 *  `cheatSheet` IS NOT USED. Inside a reference sheet it draws its title and
 *  nothing else; `ReferenceSheet.tsx` draws `teach`, `letterGrid` and `table`,
 *  and that is all. So the sheet is a `teach` and a `table`.
 *
 *  A `sheetId` resolves only inside the lesson that declares it. Cross-lesson
 *  sheets do not exist at any price.
 * ══════════════════════════════════════════════════════════════════════════ */

const SHEET_CADRE: ReferenceSheet = {
  id: 'sheet-cadre',
  title: 'The whole frame, on one page',
  layer: 'deep',
  contains: ['the three middle words', 'the four superlative forms', 'the two that refuse plus'],
  sections: [
    {
      type: 'teach',
      id: 'sheet-teach',
      layer: 'deep',
      render: 'sheet',
      title: 'How to read this',
      body: 'The left column is the only thing that changes. Everything to the right of it is the frame, and the frame is the same for every describing word in the language. The bottom three rows are the two words that refuse the frame and the one that does not, which is the part worth screenshotting.',
    },
    {
      type: 'table',
      id: 'sheet-table',
      layer: 'deep',
      render: 'sheet',
      title: 'Comparatifs et superlatifs',
      // THREE COLUMNS, AND A DEVICE CHECK IS WHY. The first version had a
      // fourth, `English`, and on a Pixel 6 the sheet's table does not scroll
      // horizontally: the fourth column was CUT OFF AT THE SCREEN EDGE, with no
      // affordance saying so. Nothing on the host could see it — `validateDensity`
      // exempts a sheet, the schema takes any number of cols, and the seed was
      // correct. The English gloss now lives in `rowDetails`, which opens on tap
      // and has the room for it.
      cols: ['Middle', 'Comparative', 'Superlative'],
      rows: [
        ['plus', 'plus grand que', 'le plus grand'],
        ['moins', 'moins grand que', 'le moins grand'],
        ['aussi', 'aussi grand que', '(none)'],
        ['m sing', 'plus grand', 'le plus grand'],
        ['f sing', 'plus grande', 'la plus grande'],
        ['m plur', 'plus grands', 'les plus grands'],
        ['f plur', 'plus grandes', 'les plus grandes'],
        ['bon', 'meilleur', 'le meilleur'],
        ['bien', 'mieux', 'le mieux'],
        ['mauvais', 'pire / plus mauvais', 'le pire'],
      ],
      rowDetails: [
        { title: 'plus, and what it means', body: 'The s is silent in front of a describing word and comes back when nothing follows it. plü grand, and PLÜSS on its own.' },
        { title: 'moins, and what it means', body: 'English usually flips it and says shorter. French says less tall and is happy with it.' },
        { title: 'aussi, and what it means', body: 'There is no superlative of aussi. Nothing can be the most equal, so the third column is empty on purpose.' },
        { title: 'One masculine thing', body: 'The plain form. Nothing is added, and this is the one every other cell is built from.' },
        { title: 'One feminine thing, and you can hear it', body: 'grande and grandes are the only forms of the four where the d is pronounced. The e wakes it up; the s changes nothing.' },
        { title: 'Several masculine things', body: 'An s on the article and an s on the describing word, and neither of them is said. It sounds exactly like the singular.' },
        { title: 'Several feminine things, and it exists only on paper', body: 'les plus grandes sounds exactly like la plus grande. Nothing in speech separates them, which is why every scored question on this rule is typed.' },
        { title: 'bon: good, better, best', body: 'Refuses plus. meilleur has all four endings: meilleur, meilleure, meilleurs, meilleures.' },
        { title: 'bien: well, better, best', body: 'Refuses plus. mieux never changes, for anybody. It is the one the corpus uses six and a half times as often as meilleur.' },
        { title: 'mauvais: bad, worse, worst', body: 'Takes BOTH, and both are ordinary. So the rule is not that plus is forbidden; it is that exactly two words have their own form.' },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REMEDIATION DRILLS
 *
 *  Deliberately NOT in `sections`: they are not part of the spine and a
 *  learner who never trips one never sees it.
 *
 *  `drillForRound` fires the drill of the FIRST RESOLVING TARGET of a round
 *  and then stops, so each of these is the first resolving target of exactly
 *  one round. a1.05 shipped two dead drills and a1.07's first draft a third.
 *
 *  `items` here is also HOW ELEVEN IMPORTED SENTENCES BECOME REACHABLE. Every
 *  published sentence in this theme is `dictation`-only or `sentence`-only, so
 *  no deckTranche can release one.
 *
 *  `LessonDrill.format` is a LITERAL UNION, not string. The admin typecheck is
 *  the only check in this project that says so.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILLS: LessonDrill[] = [
  {
    id: 'd-middle',
    title: 'Three words, one slot',
    format: 'flashcard' as const,
    coach: 'The frame is already right. Read the English and pick which of the three goes in the middle.',
    items: [E(133), E(134), E(135), E(156)],
    audio: AUDIO,
  },
  {
    id: 'd-que',
    title: 'And the second thing',
    format: 'mcq' as const,
    coach: 'A comparison names both things. If you can only find one of them, it is not a comparison yet.',
    q: 'He meant he is taller than his brother. Which one says that?',
    opts: ['Il est plus grand.', 'Il est plus grand que son frère.', 'Il est le plus grand.'],
    correct: 1,
    why: 'The first is correct French and means he is tall. The third makes him the tallest of a group. Only the second compares two people.',
    items: [E(136), E(145), E(152), E(133)],
    audio: AUDIO,
  },
  {
    id: 'd-agree',
    title: 'The last letter',
    format: 'sort' as const,
    coach: 'Two piles. One thing, or several. The ending is the only thing that tells you, and only in writing.',
    buckets: ['one of them', 'several of them'],
    items: [E(142), E(144), E(86), E(103)],
    audio: AUDIO,
  },
  {
    id: 'd-better',
    title: 'Which better word',
    format: 'mcq' as const,
    coach: 'Look at the word in front of the gap. est, or something being done.',
    q: 'Ce gâteau est ... que l\'autre. Which word?',
    opts: ['plus bon', 'meilleur', 'mieux'],
    correct: 1,
    why: 'est, so it is describing the cake and it is meilleur. mieux would be describing an action, and there is no action here.',
    items: [E(9), E(34), E(36), E(78)],
    audio: AUDIO,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ══════════════════════════════════════════════════════════════════════════ */

export const SECTIONS: LessonSection[] = [
  S01_SCENE, S02_GOALS, S03_THREE,
  S04_MIDDLE, S05_SWAP, S06_HEAR, S07_PLUS, S08_UNSEEN, S09_FLASH,
  S10_SUPER, S11_FOUR, S12_OF, S13_READ, S14_SORT,
  S15_PAIR, S16_TRAP, S17_ERRORS, S18_DICTEE,
  S19_TALK, S20_SPEAK, S21_CHECK,
  S22_QUIZ, S23_REVIEW, S24_ROUNDUP,
];

/** Every id the lesson can put in front of a learner: what it authored, plus
 *  every id any section names, any deckTranche releases and any LessonDrill
 *  lists.
 *
 *  THE MERGE PULLS EVERY ONE OF THESE OUT OF POSTGRES, because `comparaisons`
 *  holds ZERO rows in `seed.json`. The theme is entirely outside the cut. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...IMPORT_IDS])];

/** Tranches release every taught item exactly once and nothing untaught, and
 *  no tranche releases an item the acts before it have not shown.
 *
 *  NOT ONE ID FROM `IMPORTED.degrees`, `.superlatives` OR `.better` IS HERE.
 *  Those 22 rows are `dictation`-only or `sentence`-only with NO flashcard, so
 *  a release would be a line that validates, publishes and serves no card.
 *  They are reachable through `s08-unseen`, `s14-sort`, the terms and the
 *  drills instead, and the batch asserts both directions. */
export const DECK_TRANCHE: string[][] = [
  // act 1 — the tapTable shows the triple, so the triple is released
  [E(133), E(134), E(135)],
  // act 2 — the frame: the four frame words, every degree card, the ten
  // describing words, and the sentences act 2 shows
  [
    E(113), E(114), E(115), E(116),
    E(120), E(121), E(122), E(123), E(124), E(125),
    E(129), E(130), E(131), E(132),
    E(136), E(137), E(145),
    E(151), E(152), E(153), E(154), E(155),
    E(156), E(157), E(158), E(159),
    E(161), E(162), E(163),
    'fr.sons.adjectifs-essentiels.001', 'fr.sons.adjectifs-essentiels.002',
    'fr.sons.adjectifs-essentiels.003', 'fr.sons.adjectifs-essentiels.004',
    'fr.sons.adjectifs-essentiels.018', 'fr.sons.adjectifs-essentiels.019',
    'fr.sons.adjectifs-essentiels.020', 'fr.sons.adjectifs-essentiels.176',
  ],
  // act 3 — the article arrives, and the four-form grid
  [E(138), E(141), E(142), E(143), E(144)],
  // act 4 — the two that refuse plus, and the one that does not
  [
    E(117), E(118), E(119),
    E(139), E(140), E(146), E(147), E(148), E(149), E(150), E(160),
    'fr.sons.adjectifs-essentiels.062', 'fr.sons.adjectifs-essentiels.063',
    'fr.sons.mots-essentiels.045', 'fr.sons.mots-essentiels.046',
  ],
  // act 5 — production releases nothing new
  [],
  // act 6 — the quiz and the roundup release nothing new
  [],
];

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.title,
  level: 'a2',
  tag: 'A2 · LEÇON 32',
  intro: 'Comparing two things in French is one sentence shape with one word in the middle of it, and that word is the whole choice. Get the shape once and it takes any describing word you will ever learn. Then the article arrives, and it brings an ending nobody can hear.',
  // PE, not CO. Most of what this lesson teaches is inaudible: two of the four
  // superlative forms are one sound, so the agreement can only be assessed in
  // writing and the quiz runs typeIn-heaviest of any surface here.
  skill: 'PE',
  // NOT `teaches`, NOT `canDo`, NOT `track`. All three draw nothing on a Lesson
  // and a2.07 shipped all three. `canDo` belongs to the unit.
  grammarAssumed: [
    AGREEMENT_UNIT, ADVERB_UNIT, 'a1.06', 'a1.04', 'a1.16',
  ],
  grammarIntroduced: [
    'The comparative as a single frame with one variable slot, so that a describing word never met before is comparable without further instruction',
    'The three degrees plus, moins and aussi as one closed choice rather than as three constructions',
    'That que and its object are obligatory, and that dropping them yields a well-formed sentence with a different meaning rather than an error',
    'The superlative as the same frame with a definite article prefixed, and the article rather than the describing word as the carrier of agreement',
    'That the four superlative forms are realised as two phonological forms, so the number contrast is undetectable by ear and testable only in writing',
    'The suppletive comparatives meilleur and mieux, split by the category of what they modify, against a corpus in which mieux outnumbers meilleur six and a half to one',
    'That mauvais admits both pire and plus mauvais, so the constraint is lexical to bon and bien rather than a general prohibition on plus',
    'de, not dans, as the complement of a superlative',
  ],
  overview: {
    // Must match the unit's English name, which `content_units` requires.
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Un seul cadre, trois mots au milieu. Choisissez le mot, gardez le cadre.',
    minutes: 34,
    difficulty: 3,
    glyph: '⇄',
    screens: 96,
  },
  reframe: REFRAME,
  acts: [
    {
      id: 'act1',
      title: 'Le mot du milieu',
      sections: ['s01-scene', 's02-goals', 's03-three'],
      milestone: 'You have seen a correct sentence die on its last word, and you have the three that replace it',
      estScreens: 15,
      restPoints: ['s02-goals'],
    },
    {
      id: 'act2',
      title: 'Le cadre ne bouge pas',
      sections: ['s04-middle', 's05-swap', 's06-hear', 's07-plus', 's08-unseen', 's09-flash'],
      milestone: 'You compared two things with a describing word this lesson never showed you',
      estScreens: 24,
      restPoints: ['s05-swap', 's07-plus'],
    },
    {
      id: 'act3',
      title: "L'article arrive",
      sections: ['s10-super', 's11-four', 's12-of', 's13-read', 's14-sort'],
      milestone: 'You can say which one is the most of a group, and spell the ending you cannot hear',
      estScreens: 22,
      restPoints: ['s11-four', 's13-read'],
    },
    {
      id: 'act4',
      title: 'Deux mots pour « better »',
      sections: ['s15-pair', 's16-trap', 's17-errors', 's18-dictee'],
      milestone: 'You can pick between meilleur and mieux from the verb in front of them',
      estScreens: 18,
      restPoints: ['s16-trap'],
    },
    {
      id: 'act5',
      title: 'Production',
      sections: ['s19-talk', 's20-speak', 's21-check'],
      milestone: 'You compared two flats out loud, six turns, without stopping mid-sentence',
      estScreens: 12,
      restPoints: ['s20-speak'],
    },
    {
      id: 'act6',
      title: "L'examen",
      sections: ['s22-quiz', 's23-review', 's24-roundup'],
      milestone: 'Thirty questions, and the frame one last time',
      estScreens: 10,
      restPoints: ['s23-review'],
    },
  ],
  errorTriggers: [
    {
      id: 'wrong-middle',
      description: 'Picks the wrong middle word, or puts it somewhere other than in front of the describing word.',
      detectOn: ['s03-three', 's06-hear', 's08-unseen'],
      drill: 'd-middle',
      // `retest` names a DRILL, not a section: validateLesson resolves it
      // against `Lesson.drills`.
      retest: 'd-que',
    },
    {
      id: 'no-que',
      description: 'Stops the sentence after the describing word, producing a correct sentence that is not a comparison.',
      detectOn: ['s05-swap', 's17-errors', 's19-talk'],
      drill: 'd-que',
    },
    {
      id: 'no-agree',
      description: 'Leaves the superlative in its plain form, or agrees the describing word and not the article.',
      detectOn: ['s11-four', 's14-sort', 's18-dictee'],
      drill: 'd-agree',
      retest: 'd-agree',
    },
    {
      id: 'plus-bon',
      description: 'Builds plus bon or plus bien, or gives a verb meilleur and a noun mieux.',
      detectOn: ['s15-pair', 's16-trap', 's17-errors'],
      drill: 'd-better',
    },
  ],
  drills: DRILLS,
  deckTranche: DECK_TRANCHE,
  sheets: [SHEET_CADRE],
  terms: COMPARATIFS_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  // `LessonAudio` is NOT `SectionAudio`. It takes `defaultLang`, not `lang`,
  // and it has no `mode`. The admin typecheck is the only check that sees the
  // difference; `validateLesson` tolerates the unknown key and carries it into
  // Postgres, into seed.json and into the OTA snapshot, where nothing reads it.
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    coachVoice: 'coach-en-warm',
    // NOT modelPlayback, wrongThenRight, perSentenceReplay, scoreOn, autoplay
    // or maxPlays. All six validate, publish and are read by NO renderer.
  },
};

/** Named so the batch, the merge and the test agree on which imports are
 *  reachable by being named rather than by being released. */
export const NAMED_NOT_RELEASED = [
  ...IMPORTED.degrees, ...IMPORTED.superlatives, ...IMPORTED.better,
];
