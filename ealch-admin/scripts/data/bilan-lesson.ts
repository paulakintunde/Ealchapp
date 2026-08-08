// a1.30.l1 "A1 Review": the lesson body. The A1 band capstone.
//
// Reads every French string from bilan-imported.ts and bilan-corpus.ts and
// restates none of them.
//
// ── THREE THINGS HERE ARE UNLIKE EVERY OTHER A1 LESSON ─────────────────────
//
// 1. THE TRANCHES RELEASE ALMOST NOTHING. All 87 review rows are already
//    released by the units that taught them. The SRS keys on (itemId, modality),
//    so re-releasing takes two ratings for one card. This lesson releases only
//    the 13 rows it owns: the imported repair kit and the two authored phrases.
//    Copying a1.25's tranche assertion here goes RED on correct content.
//
// 2. NO ACT IS ABOUT ONE UNIT. The organising axis is PRESSURE, not topic:
//    meet the gap, recognise, produce, survive speed, hold a long exchange,
//    prove it. Every card and question pulls from two or more units at once,
//    which is what the reframe claims and what the band has never asked for.
//
// 3. IT USES trapDrill, WHICH NO A1 LESSON EVER HAS. Every sons lesson has one;
//    the whole A1 band has none. It renders at MissionSection.tsx:484 and its
//    `drill` array is the scored rapid-fire round this lesson was asked for.
//
// ── Assessment budget, authored to ~88 scored moments ──────────────────────
//
//    quiz            10 rounds x 5     50
//    trapDrill       2 x 8             16
//    groupDrill      4 sections x 4    16
//    listening       1 x 6              6
//                                      --
//                                      88     sons.09 is 63, a1.25 is 37
//
// A SECOND QUIZ SECTION IS NOT POSSIBLE. lessonPager.logic.ts:87 uses .find()
// and renders the first only; a1.01 lost twelve questions that way. Weight goes
// into rounds and into in-mission surfaces.
//
// ── Answer randomisation, unchanged from a1.25 ─────────────────────────────
//
// The act-6 quiz IS shuffled per question per attempt by QuizDeckView. The
// in-mission surfaces are NOT: MissionRich renders q.opts.map in authored order
// at :347, :732 and :1941. So the correct slot is spread by hand across every
// groupDrill check, listening question and trapDrill round, no two consecutive
// questions in one section share a slot, and the test checks the two surfaces
// separately.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { BILAN_TERMS, REFRAME } from './bilan-terms.ts';
import { KIT_IMPORTED, KIT_REUSED, REVIEW } from './bilan-imported.ts';
import { AUTHORED_ITEMS, BAND_STATS, CANDO_CLAUSES, COVERED_UNITS } from './bilan-corpus.ts';
import { BILAN_ROUNDS } from './bilan-rounds.ts';

export { REFRAME };

/* ─── Reading the corpus rather than restating it ─────────────────────────── */

type Row = { id: string; fr: string; en: string; respell: string | null };
const BY_ID = new Map<string, Row>();
for (const r of REVIEW) BY_ID.set(r.id, r);
for (const r of KIT_REUSED) BY_ID.set(r.id, r);
for (const r of [...KIT_IMPORTED, ...AUTHORED_ITEMS]) {
  BY_ID.set(r.id, { id: r.id, fr: r.fr, en: r.en, respell: r.respell ?? null });
}

function row(id: string): Row {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.30.l1: no corpus row for ${id}. Every string on a card comes from a manifest.`);
  return r;
}
export const frOf = (id: string): string => row(id).fr;
export const enOf = (id: string): string => row(id).en;
export const subOf = (id: string): string => {
  const r = row(id).respell;
  return r ? `[${r}]` : '';
};

/** The three contributions a given unit makes, so a section names a UNIT and the
 *  rows follow. A section that names loose ids drifts from the coverage rule the
 *  moment the corpus moves. */
const ofUnit = (u: string): Row[] => REVIEW.filter((r) => r.unit === u);
const frs = (u: string): string => ofUnit(u).map((r) => r.fr).join(' · ');
/** One representative per unit, the highest-reach of its three. */
const top = (u: string): Row => ofUnit(u)[0];

/* ─── The repair kit, which is what this lesson owns ───────────────────────── */

const K = {
  dontUnderstand: 'fr.sons.expressions-utiles.038',
  excuseAndLost: 'fr.a1.expressions-frequentes.079',
  dontKnow: 'fr.sons.elision.033',
  moment: 'fr.sons.expressions-utiles.044',
  maybe: 'fr.a1.expressions-frequentes.118',
  excuseMe: 'fr.a1.rp-etiquette.016',
  sorry: 'fr.a1.expressions-frequentes.099',
  okay: 'fr.a1.expressions-frequentes.106',
  ofCourse: 'fr.a1.expressions-frequentes.104',
  thereYouGo: 'fr.a1.expressions-frequentes.122',
  welcome: 'fr.a1.expressions-frequentes.100',
  noProblem: 'fr.a1.expressions-frequentes.105',
  repeat: 'fr.a1.expressions-frequentes.123',
  slower: 'fr.a1.expressions-frequentes.124',
} as const;

/** RELEASED by this lesson: the imported kit and the two authored rows. NOT
 *  fr.sons.elision.033, which sons.07 already released, and NOT any of the 87. */
const OWNED_IDS = [...KIT_IMPORTED.map((i) => i.id), ...AUTHORED_ITEMS.map((i) => i.id)];
/** SHOWN but not released. The whole review half, plus the one kit row that was
 *  already taught elsewhere. */
const SHOWN_ONLY_IDS = [...REVIEW.map((r) => r.id), ...KIT_REUSED.map((r) => r.id)];

const ITEM_IDS = [...SHOWN_ONLY_IDS, ...OWNED_IDS];

/** Spoken practice draws only from rows carrying voiceflash. The kit and the
 *  authored rows all do; the batch checks the postcondition rather than trusting
 *  this comment. */
const SPEAK_IDS = [
  K.repeat, K.slower, K.dontUnderstand, K.excuseMe, K.moment, K.okay, K.thereYouGo,
];

/** The dictée. Kit phrases, because they are what the learner most needs to be
 *  able to WRITE from hearing, and short enough to be worth spelling. */
const DICTATION_IDS = [K.dontUnderstand, K.moment, K.sorry];

/* ─── Mission 1 · Scene ─────────────────────────────────────────────────────
 *
 * A capstone scene cannot open on a rule being broken, because the lesson has no
 * rule of its own. It opens on the thing twenty-nine lessons did not prepare the
 * learner for: understanding nothing, having every word, and having no move.
 *
 * The choice beat is between switching to English and saying « je ne comprends
 * pas ». Both are understood. One ends the French and one keeps it. */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A market stall in Toulouse, Saturday morning. You have done twenty-nine lessons and you are about to buy tomatoes, which you can absolutely do.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'You',
    fr: 'Bonjour ! Un kilo de tomates, s\'il vous plaît.',
    en: 'Hello! A kilo of tomatoes, please.',
    stage: 'Perfect. Nothing wrong with it at all.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-30-scene' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The stallholder',
    fr: 'Et avec ceci, ce sera tout ou je vous mets aussi des courgettes ?',
    en: '(a long, fast, completely ordinary question)',
    stage: 'He is friendly and he is talking at the speed people actually talk. You caught the first two words.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-30-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You did not understand. You have about one second. What comes out?',
    options: [
      {
        fr: 'Sorry, I don\'t understand.',
        en: 'the words you actually have, in the wrong language',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'en-GB' },
      },
      {
        fr: frOf(K.excuseAndLost),
        respell: subOf(K.excuseMe),
        en: 'four French words, and the conversation stays in French',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. And you have never been taught that sentence, in twenty-nine lessons.',
      breaks: 'Understandable, and watch what it costs. He is not annoyed. He just switches.',
    },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'You had a thousand words and none of the five that mattered',
    // 36 words.
    body: 'Nothing you were taught was wrong and nothing you said was wrong. The conversation ended because you had no way to say that you were lost, which is the one thing nobody showed you how to do.',
    wrong: {
      fr: 'Sorry, I don\'t understand.',
      ipa: '/ˈsɒri aɪ dəʊnt ʌndəˈstænd/',
      respell: '',
      en: 'Understood, and the conversation is over',
    },
    right: {
      fr: frOf(K.excuseAndLost),
      ipa: '/ɛk.sky.ze mwa ʒə nə kɔ̃.pʁɑ̃ pa/',
      respell: '[zhuh nuh kohⁿ-prahⁿ PAH]',
      en: 'Excuse me, I do not understand',
    },
    coach: `${REFRAME} And the turn that keeps you in the conversation is the one nobody taught you.`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-30-kit' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'The next half hour is everything you already have, used two things at a time, plus the handful of words that stop you losing it.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ══ Act 1: what you have, and the one thing you do not ═════════════════ */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Morning You Ran Out Of Words',
    frSub: 'Je ne comprends pas',
    render: 'screens',
    layer: 'core',
    terms: ['repairKit'],
    say: { text: 'Twenty-nine lessons, and the sentence you needed was in none of them.', voice: 'coach', timing: 'onFirstVisitOnly' },
    setting: { place: 'A market stall with a queue behind you', city: 'Toulouse', time: 'Saturday, just after nine', ambience: 'room-tone-lobby' },
    beats: SCENE_BEATS,
    closing: { size: 'md', text: `${REFRAME} That is the next half hour.` },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What This Half Hour Is',
    frSub: 'Ce que vous allez faire',
    layer: 'core',
    say: 'Four things, and only one of them is new.',
    goals: [
      { t: 'Use two lessons in one turn', s: 'Everything here you already have. What is new is reaching for two of them at the same time, under time pressure.' },
      { t: 'Say when you are lost', s: 'The handful of phrases that keep a conversation alive when you have not understood. This is the new part and it is small.' },
      { t: 'Answer at speed', s: 'Two rapid-fire rounds where the words are easy and the clock is the difficulty.' },
      { t: 'Hold a long exchange', s: 'One conversation that crosses six units and does not stay on one subject, which is what real ones do.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-lost',
    title: 'The Moment It Goes Wrong',
    frSub: 'Quand vous perdez le fil',
    hint: 'Four cards on the gap in your French.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['repairKit', 'youAlreadyHave'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-30-kit' },
    say: 'It is never the vocabulary. It is always the moment after.',
    cards: [
      {
        label: 'what you have',
        head: `${BAND_STATS.itemIds} things, across ${BAND_STATS.lessons} lessons`,
        fr: `${top('a1.01').fr} · ${top('a1.12').fr} · ${top('a1.22').fr} · ${top('a1.26').fr}`,
        sub: 'greetings, time, nationality, the house',
        body: 'Four words from four different mornings, and you know all four. Nothing in the next five acts is a word you have not met.',
      },
      {
        label: 'what happens anyway',
        head: 'Somebody answers at full speed',
        fr: frOf(K.dontUnderstand),
        sub: subOf(K.dontUnderstand),
        body: 'This is the sentence. It is four words, none of them hard, and no lesson in this app has ever put it on a card. That is the gap you are here to close.',
      },
      {
        label: 'the polite front half',
        head: 'And the version with an apology on it',
        fr: frOf(K.excuseAndLost),
        sub: enOf(K.excuseAndLost),
        body: 'Get their attention, then say what is wrong. Two moves in one line, and it works with a stranger, which is when you need it most.',
      },
      {
        label: 'why it matters more than words',
        head: 'A conversation ends where the repair stops',
        fr: `${frOf(K.repeat)}`,
        sub: subOf(K.repeat),
        body: `A learner with a thousand words and none of these loses the first exchange where somebody speaks quickly. ${REFRAME}`,
      },
    ],
  },

  {
    type: 'vocabThemes',
    id: 's04-kit',
    title: 'The Repair Kit',
    frSub: 'Pour continuer la conversation',
    layer: 'core',
    terms: ['repairKit', 'buyTime', 'keepThemGoing'],
    say: 'Thirteen short moves, in four groups, and the groups are what each one is for.',
    themes: [
      {
        title: 'saying you are lost',
        cards: [K.dontUnderstand, K.excuseAndLost, K.dontKnow].map((id) => ({ fr: frOf(id), sub: `${row(id).respell ?? ''} · ${enOf(id)}`.trim(), en: enOf(id) })),
      },
      {
        title: 'asking for it again',
        cards: [K.repeat, K.slower].map((id) => ({ fr: frOf(id), sub: `${row(id).respell ?? ''} · ${enOf(id)}`.trim(), en: enOf(id) })),
      },
      {
        title: 'buying a second, and getting attention',
        cards: [K.moment, K.maybe, K.excuseMe, K.sorry].map((id) => ({ fr: frOf(id), sub: `${row(id).respell ?? ''} · ${enOf(id)}`.trim(), en: enOf(id) })),
      },
      {
        title: 'keeping them talking',
        cards: [K.okay, K.ofCourse, K.thereYouGo, K.welcome, K.noProblem].map((id) => ({ fr: frOf(id), sub: `${row(id).respell ?? ''} · ${enOf(id)}`.trim(), en: enOf(id) })),
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's05-repeat',
    title: 'Ask Again, Then Ask Slower',
    frSub: 'Répéter, puis ralentir',
    layer: 'core',
    terms: ['repairKit'],
    sheetId: 'sheet.a1.30.kit',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-30-repeat' },
    say: 'Two phrases, in the order you need them. Tap a row to hear it.',
    cols: ['what you say', 'what it gets you'],
    rows: [
      {
        cells: [frOf(K.repeat), 'the same sentence again'],
        say: frOf(K.repeat),
        detail: {
          title: 'The first ask',
          body: `${frOf(K.repeat)} ${subOf(K.repeat)}. The formal vous, because you need this most with somebody you have never met. Nobody minds being asked this.`,
          say: frOf(K.repeat),
        },
      },
      {
        cells: [frOf(K.slower), 'the same sentence, but slower'],
        say: frOf(K.slower),
        detail: {
          title: 'The second ask, when repeating was not enough',
          body: `${frOf(K.slower)} ${subOf(K.slower)}. People repeat at the same speed by default. This is the one that actually helps, and it is said on its own.`,
          say: frOf(K.slower),
        },
      },
      {
        cells: [frOf(K.moment), 'time to build your answer'],
        say: frOf(K.moment),
        detail: {
          title: 'When you understood and just need a moment',
          body: `${frOf(K.moment)} ${subOf(K.moment)}. A different problem from not understanding, and a different phrase. Using the wrong one gets you a repetition you did not need.`,
          say: frOf(K.moment),
        },
      },
    ],
  },

  /* ══ Act 2: recognise it, whoever says it ═══════════════════════════════ */

  {
    type: 'listening',
    id: 's06-listen',
    title: 'One Conversation, Six Lessons',
    frSub: 'Écoutez',
    layer: 'core',
    terms: ['oneTurn'],
    questionsInModal: true,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-30-listening' },
    say: 'Five lines. No line stays on one subject and none of the words is new.',
    lines: [
      { fr: 'Bonjour ! Vous habitez à Lyon ?', en: 'Hello! Do you live in Lyon?' },
      { fr: 'Non, je suis canadien. J\'habite ici depuis deux ans.', en: 'No, I am Canadian. I have lived here for two years.' },
      { fr: 'Et vous travaillez le matin ou le soir ?', en: 'And do you work mornings or evenings?' },
      { fr: 'Le matin. Je me lève à six heures, c\'est difficile.', en: 'Mornings. I get up at six, it is hard.' },
      { fr: frOf(K.excuseAndLost), en: enOf(K.excuseAndLost) },
    ],
    // Slots run 2, 0, 3, 1, 0, 2. MissionRich renders these in AUTHORED order.
    questions: [
      {
        q: 'The first line uses two lessons at once. Which two?',
        opts: ['Numbers and colours', 'The house and the body', 'A question shape and a preposition of place', 'Adjectives and the weather'],
        correct: 2,
        why: 'A yes-or-no question wrapped around à plus a city. Two units, one line, and neither is hard on its own. That combination is the whole point of this lesson.',
      },
      {
        q: 'In the second line, what does the speaker give you besides their nationality?',
        opts: ['How long they have been there', 'Their job', 'Their age', 'Where they were born'],
        correct: 0,
        why: 'A number and a time span, sitting behind a nationality. Three units in eleven words, which is what an ordinary sentence looks like once you stop teaching one thing at a time.',
      },
      {
        q: 'The third line offers a choice between two times of day. Which two?',
        opts: ['Midday and midnight', 'The afternoon and the night', 'Yesterday and tomorrow', 'The morning and the evening'],
        correct: 3,
        why: `${top('a1.25').fr} and the evening, both carrying the little word that makes them habits rather than one particular morning. That is a1.25's rule arriving inside somebody else's question.`,
      },
      {
        q: 'What time does the fourth speaker get up?',
        opts: ['Seven', 'Six', 'Midday', 'Eight'],
        correct: 1,
        why: 'Six. The clock lesson gave you the number and the daily routine lesson gave you the verb, and the sentence needs both at once to mean anything.',
      },
      {
        q: 'The last line is the only one that is not about a fact. What is it doing?',
        opts: ['Saying the speaker has not understood', 'Asking a new question', 'Ending the conversation', 'Agreeing'],
        correct: 0,
        why: 'It is the repair move. Notice it arrives in the middle of an ordinary exchange rather than at the end, which is exactly where you will need it.',
      },
      {
        q: 'Across all five lines, roughly how many different lessons were used?',
        opts: ['One', 'Two', 'Six or more', 'None, this is new material'],
        correct: 2,
        why: 'Six or more, and not one word was new. Greetings, places, nationalities, numbers, times of day, the clock, a verb, and the repair kit. That is what an ordinary conversation costs.',
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's07-sort',
    title: 'Which Lesson Answers This?',
    frSub: 'Où avez-vous appris ça ?',
    layer: 'core',
    terms: ['oneTurn', 'youAlreadyHave'],
    say: 'Three groups, and a question about each. Every word here you already know.',
    // Slots 1, 3, 0, 2.
    groups: [
      {
        label: 'things you say about yourself',
        items: [...ofUnit('a1.22'), ...ofUnit('a1.01')].slice(0, 5).map((r) => ({ fr: r.fr, itemId: r.id, en: r.en })),
        check: {
          q: 'Somebody asks where you are from AND how long you have been here. How many lessons does answering need?',
          opts: ['One', 'At least three', 'Two', 'None, it is one phrase'],
          correct: 1,
          why: 'At least three: the country with its preposition, a number, and a way of saying a span of time. Each was one morning\'s work and the answer needs all three in one breath.',
        },
      },
      {
        label: 'things you say about a day',
        items: [...ofUnit('a1.25'), ...ofUnit('a1.12')].slice(0, 5).map((r) => ({ fr: r.fr, itemId: r.id, en: r.en })),
        check: {
          q: `Which of these gives you a habit rather than one particular day?`,
          opts: ['A number on its own', 'A greeting', 'The name of a month', `${top('a1.25').fr}, with its little word`],
          correct: 3,
          why: `${top('a1.25').fr}. The article is doing the work, exactly as the daily routine lesson said, and you need it the moment somebody asks what you usually do.`,
        },
      },
      {
        label: 'things you say about where you live',
        items: [...ofUnit('a1.26'), ...ofUnit('a1.21')].slice(0, 5).map((r) => ({ fr: r.fr, itemId: r.id, en: r.en })),
        check: {
          q: 'To say something is in a room you need a place word and one more thing. What?',
          opts: ['A preposition, and the article that follows it', 'A number', 'A colour', 'A verb in the past'],
          correct: 0,
          why: 'A preposition and whatever article it drags along. The preposition lesson taught the word and the article lessons taught what happens behind it, and neither is any use alone.',
        },
      },
      {
        label: 'and the one that is new',
        items: [],
        check: {
          q: 'Of everything in this lesson, which part were you never taught?',
          opts: ['The numbers', 'The times of day', 'What to say when you have not understood', 'The greetings'],
          correct: 2,
          why: `Twenty-nine lessons and not one of them put ${frOf(K.dontUnderstand)} on a card. Everything else here you have rated on a flashcard already.`,
        },
      },
    ],
  },


  {
    type: 'groupDrill',
    id: 's09-check',
    title: 'Spot The Second Lesson',
    frSub: 'Repérez la deuxième leçon',
    layer: 'core',
    terms: ['oneTurn'],
    say: 'Three groups. In each one the question is what ELSE the sentence needed.',
    // Slots 3, 1, 2, 0.
    groups: [
      {
        label: 'food, and what goes in front of it',
        items: [...ofUnit('a1.23'), ...ofUnit('a1.29')].slice(0, 5).map((r) => ({ fr: r.fr, itemId: r.id, en: r.en })),
        check: {
          q: 'Ordering some of something, rather than one of something, needs which lesson?',
          opts: ['The colours', 'The numbers', 'The greetings', 'The one for some of something'],
          correct: 3,
          why: 'The one for some of something. Food is where that lesson finally pays: you almost never order one bread, you order some, and the little word in front is the whole difference.',
        },
      },
      {
        label: 'family, and whose it is',
        items: [...ofUnit('a1.15'), ...ofUnit('a1.17')].slice(0, 5).map((r) => ({ fr: r.fr, itemId: r.id, en: r.en })),
        check: {
          q: 'Naming a relative usually needs a second lesson attached. Which?',
          opts: ['The weather', 'The possessives', 'The body', 'The months'],
          correct: 1,
          why: 'The possessives. You almost never say the sister, you say my sister, and the possessive lesson taught that the word changes with the thing owned rather than the owner.',
        },
      },
      {
        label: 'the weather, and how you say it',
        items: [...ofUnit('a1.10'), ...ofUnit('a1.07')].slice(0, 5).map((r) => ({ fr: r.fr, itemId: r.id, en: r.en })),
        check: {
          q: 'Most weather sentences in French are built on which verb?',
          opts: ['être', 'faire', 'aller', 'avoir'],
          correct: 2,
          why: 'None of the three offered first. French says it MAKES hot rather than it IS hot, which is why the weather lesson had to teach a frame rather than a list of adjectives.',
        },
      },
      {
        label: 'and when it all falls apart',
        items: [],
        check: {
          q: 'You have combined two lessons, said the sentence, and understood nothing of the reply. Now what?',
          opts: [`${frOf(K.repeat)}`, 'Repeat your own sentence louder', 'Switch to English', 'Say nothing and hope'],
          correct: 0,
          why: 'Ask for it again. Nobody minds, it costs one short sentence, and it is the difference between a conversation that continues and one that stops.',
        },
      },
    ],
  },


  /* ══ Act 3: produce one turn ════════════════════════════════════════════ */


  {
    type: 'groupDrill',
    id: 's12-drill',
    title: 'Build The Answer',
    frSub: 'Construisez la réponse',
    layer: 'core',
    terms: ['oneTurn', 'repairKit'],
    say: 'Three groups. Each question is about what an answer must contain, not about a word.',
    // Slots 0, 2, 1, 3.
    groups: [
      {
        label: 'numbers, when they are not on their own',
        items: [...ofUnit('a1.02'), ...ofUnit('a1.28')].slice(0, 5).map((r) => ({ fr: r.fr, itemId: r.id, en: r.en })),
        check: {
          q: 'Somebody asks the price. Your answer needs a number and what else?',
          opts: ['The currency, and often a little word before the thing', 'A colour', 'A time of day', 'A nationality'],
          correct: 0,
          why: 'A number alone is a figure floating in the air. What makes it an answer is the thing it is counting and the little word in front of that thing.',
        },
      },
      {
        label: 'the body, and the verb it needs',
        items: ofUnit('a1.24').map((r) => ({ fr: r.fr, itemId: r.id, en: r.en })),
        check: {
          q: 'Saying something hurts needs a body word and which other lesson?',
          opts: ['The colours', 'The months', 'The verb avoir, in a fixed frame', 'The greetings'],
          correct: 2,
          why: 'avoir. French says you HAVE a pain somewhere rather than that something IS painful, which is the frame the body lesson had to teach alongside the words.',
        },
      },
      {
        label: 'saying no',
        items: ofUnit('a1.18').map((r) => ({ fr: r.fr, itemId: r.id, en: r.en })),
        check: {
          q: 'Negation wraps around the verb. What happens to an article behind it?',
          opts: ['Nothing changes', 'It usually becomes de', 'It disappears entirely', 'It becomes plural'],
          correct: 1,
          why: 'It usually flattens to de. That is the negation lesson and the article lessons arriving in the same clause, and it is the most common place a learner gets a correct sentence half right.',
        },
      },
      {
        label: 'and the move that buys you time',
        items: [],
        check: {
          q: 'You understood the question and need a second to build the answer. Which phrase?',
          opts: [frOf(K.dontUnderstand), frOf(K.repeat), frOf(K.slower), frOf(K.moment)],
          correct: 3,
          why: `${frOf(K.moment)}. The other three ask them to do something again. This one asks them to wait, which is a different problem and needs a different phrase.`,
        },
      },
    ],
  },

  {
    type: 'practice',
    id: 's13-speak',
    title: 'Say The Repair Kit',
    frSub: 'À voix haute',
    layer: 'core',
    terms: ['repairKit'],
    say: 'Seven phrases, out loud. These are the ones you need fastest, so they are the ones worth having in your mouth.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'dictation',
    id: 's14-dictation',
    title: 'Write What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    terms: ['repairKit'],
    say: 'Three phrases from the kit.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'commonErrors',
    id: 's15-errors',
    title: 'What Goes Wrong At Speed',
    frSub: 'Les erreurs sous pression',
    layer: 'core',
    swipe: true,
    size: 'lg',
    terms: ['repairKit', 'buyTime', 'oneTurn'],
    say: 'Four, one per screen, and none of them is a vocabulary problem.',
    errors: [
      {
        wrong: 'Sorry, I don\'t understand.',
        right: frOf(K.excuseAndLost),
        why: 'The most expensive mistake in the band, and it is not a French mistake. One English sentence ends the French for the rest of the conversation, and usually for the rest of the day.',
      },
      {
        wrong: `${frOf(K.repeat)} ... ${frOf(K.repeat)} ... ${frOf(K.repeat)}`,
        right: frOf(K.slower),
        why: 'Asking three times gets you the same sentence at the same speed three times. The second ask should change what you are asking for, and speed is usually the real problem.',
      },
      {
        wrong: '(a long silence while you build the sentence)',
        right: frOf(K.moment),
        why: 'The silence feels much longer to you than to them, and it reads as the conversation being over. One word keeps your turn while you think.',
      },
      {
        wrong: 'Answering only the first half of a two-part question',
        right: 'Answering both, or asking which half they meant',
        why: 'A real question often carries two lessons and you catch one. Answering half is fine; noticing you only caught half, and saying so, is what keeps it from becoming a misunderstanding.',
      },
    ],
  },

  /* ══ Act 4: under pressure ══════════════════════════════════════════════ */

  {
    type: 'trapDrill',
    id: 's16-trap-articles',
    title: 'Fast: Which Little Word?',
    frSub: 'Vite : quel petit mot ?',
    layer: 'core',
    terms: ['oneTurn'],
    // THE FIRST trapDrill IN THE WHOLE A1 BAND. Every sons lesson has one and no
    // A1 lesson ever has. Stepped, so the cards, the audio and the drill are
    // three screens rather than one column with the drill below the fold.
    rule: {
      title: 'You know all of these. The clock is the difficulty',
      body: 'Eight questions, each one a choice between little words you learned months apart. None is hard on its own. Answering without stopping to think is the whole exercise, because that is the only speed a real conversation runs at.',
    },
    steps: [
      { label: 'the traps', kind: 'cards' },
      { label: 'hear them', kind: 'audio' },
      { label: 'go', kind: 'drill', gate: true },
    ],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-30-fast' },
    cards: [
      { promptLabel: 'one of them, or some of it', promptSound: 'un / du', fr: `${top('a1.11').fr} · ${top('a1.29').fr}`, ipa: '/œ̃ ka.fe/ · /dy ka.fe/', tip: 'One cup, or an unspecified amount. The noun does not change and the little word does everything.' },
      { promptLabel: 'the one you mean, or one of many', promptSound: 'le / un', fr: `${top('a1.03').fr} · ${top('a1.11').fr}`, ipa: '/lə ka.fe/ · /œ̃ ka.fe/', tip: 'Already known between you, or introduced for the first time. That is the whole difference.' },
      { promptLabel: 'in, or on', promptSound: 'dans / sur', fr: frs('a1.21').split(' · ').slice(0, 2).join(' · '), ipa: '/dɑ̃/ · /syʁ/', tip: 'Inside something, or resting on top of it. English blurs these more than French does.' },
      { promptLabel: 'a habit, or right now', promptSound: 'le matin / ce matin', fr: `${top('a1.25').fr}`, ipa: '/lə ma.tɛ̃/', tip: 'The little word in front makes it every morning. Without it you are talking about one.' },
    ],
    // Eight scored questions. Slots run 1,3,0,2,3,1,2,0 so no two consecutive
    // answers share a position: MissionRich does NOT shuffle these.
    drill: [
      { promptSay: 'You want one cup of coffee, ordered at a counter.', opts: [top('a1.29').fr, top('a1.11').fr, top('a1.03').fr], correct: 1 },
      { promptSay: 'You want some coffee, an amount nobody is counting.', opts: [top('a1.11').fr, top('a1.03').fr, top('a1.29').fr], correct: 2 },
      { promptSay: 'The coffee you both already know about.', opts: [top('a1.03').fr, top('a1.29').fr, top('a1.11').fr], correct: 0 },
      { promptSay: 'You do mornings, as a rule, every week.', opts: ['ce matin', 'un matin', top('a1.25').fr], correct: 2 },
      { promptSay: 'Somebody speaks and you catch nothing at all.', opts: [frOf(K.moment), frOf(K.okay), frOf(K.thereYouGo), frOf(K.dontUnderstand)], correct: 3 },
      { promptSay: 'You understood, and you need three seconds.', opts: [frOf(K.dontUnderstand), frOf(K.moment), frOf(K.slower)], correct: 1 },
      { promptSay: 'They repeated it and it was still too fast.', opts: [frOf(K.repeat), frOf(K.okay), frOf(K.slower)], correct: 2 },
      { promptSay: 'They thanked you and you want to wave it off.', opts: [frOf(K.welcome), frOf(K.dontUnderstand), frOf(K.slower)], correct: 0 },
    ],
  },

  {
    type: 'trapDrill',
    id: 's17-trap-shapes',
    title: 'Fast: Which Shape?',
    frSub: 'Vite : quelle forme ?',
    layer: 'core',
    terms: ['oneTurn'],
    rule: {
      title: 'Same words, different shape',
      body: 'Eight more, and this time the choice is not which word but what shape it takes: agreement, placement, and what negation does to whatever is behind it. Speed again, not difficulty.',
    },
    steps: [
      { label: 'the traps', kind: 'cards' },
      { label: 'hear them', kind: 'audio' },
      { label: 'go', kind: 'drill', gate: true },
    ],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-30-fast' },
    cards: [
      { promptLabel: 'before, or after the noun', promptSound: 'grand / vert', fr: frs('a1.16').split(' · ').slice(0, 2).join(' · '), ipa: '/ɡʁɑ̃/ · /vɛʁ/', tip: 'A short common adjective goes in front. Most others, including every colour, go behind.' },
      { promptLabel: 'the ending that agrees', promptSound: 'noir / noire', fr: frs('a1.13').split(' · ').slice(0, 2).join(' · '), ipa: '/nwaʁ/ · /nwaʁ/', tip: 'Sometimes you hear the agreement and sometimes it is only on the page. Both still have to be written.' },
      { promptLabel: 'my, depending on the thing owned', promptSound: 'mon / ma', fr: frs('a1.17').split(' · ').slice(0, 2).join(' · '), ipa: '/mɔ̃/ · /ma/', tip: 'It agrees with what is owned, never with who owns it. That is the opposite of English.' },
      { promptLabel: 'what negation does behind it', promptSound: 'un → de', fr: frs('a1.18').split(' · ').slice(0, 2).join(' · '), ipa: '/nə ... pa/', tip: 'The article behind a negation usually flattens to de, whatever it was before.' },
    ],
    // Slots run 2,0,3,1,0,2,1,3.
    drill: [
      { promptSay: 'A big garden. Where does the adjective go?', opts: ['after the noun', 'either side, freely', 'in front of the noun'], correct: 2 },
      { promptSay: 'A green door. Where does this one go?', opts: ['after the noun', 'in front of the noun', 'either side, freely'], correct: 0 },
      { promptSay: 'My sister. Which form of my?', opts: ['mes', 'mon', 'notre', 'ma'], correct: 3 },
      { promptSay: 'My friend, feminine, beginning with a vowel.', opts: ['ma', 'mon', 'mes'], correct: 1 },
      { promptSay: 'I do not have a car. What happens to the article?', opts: ['it becomes de', 'it stays as it was', 'it disappears'], correct: 0 },
      { promptSay: 'Somebody speaks quickly and you catch one word.', opts: [frOf(K.okay), frOf(K.thereYouGo), frOf(K.slower)], correct: 2 },
      { promptSay: 'You need their attention before you ask anything.', opts: [frOf(K.thereYouGo), frOf(K.excuseMe), frOf(K.welcome)], correct: 1 },
      { promptSay: 'They apologised for bumping into you. You are fine.', opts: [frOf(K.dontUnderstand), frOf(K.repeat), frOf(K.slower), frOf(K.noProblem)], correct: 3 },
    ],
  },

  {
    type: 'groupDrill',
    id: 's18-fast',
    title: 'Still Fast',
    frSub: 'Encore vite',
    layer: 'core',
    terms: ['oneTurn', 'keepThemGoing'],
    say: 'Two groups and four questions. Same speed, mixed subjects.',
    // Slots 2, 0, 3, 1.
    groups: [
      {
        label: 'the short words that keep them talking',
        items: [K.okay, K.ofCourse, K.thereYouGo].map((id) => ({ fr: frOf(id), itemId: id, respell: row(id).respell ? `[${row(id).respell}]` : undefined, en: enOf(id) })),
        check: {
          q: 'Why are these worth more than another ten vocabulary words?',
          opts: ['They are shorter', 'They are formal', 'They tell the other person you are still with them', 'They are easier to spell'],
          correct: 2,
          why: 'They signal that you are following. Without them a learner sounds like they are being interviewed, and the other person slows down or gives up before you have said anything wrong.',
        },
      },
      {
        label: 'the whole band, at random',
        items: ['a1.08', 'a1.09', 'a1.10'].flatMap((u) => ofUnit(u)).slice(0, 6).map((r) => ({ fr: r.fr, itemId: r.id, en: r.en })),
        check: {
          q: 'Days, months and weather were three separate lessons. What do they have in common in use?',
          opts: ['They all take the same article', 'They are almost never the whole answer on their own', 'They are all masculine', 'They all need a number'],
          correct: 0,
          why: 'None of the first three. What they share is that a real answer pins them to something else: a day to a plan, a month to a year, the weather to a place or a time.',
        },
      },
      {
        label: 'and the last one',
        items: [],
        check: {
          q: 'Which of these is the only thing in this lesson you had never met?',
          opts: ['The numbers', 'The colours', 'The house words', 'The repair kit'],
          correct: 3,
          why: 'The repair kit. Everything else was taught, drilled and rated. Those thirteen phrases are the capstone\'s own material and the reason it is not a revision sheet.',
        },
      },
      {
        label: 'one more',
        items: [],
        check: {
          q: `You have said ${frOf(K.repeat)} and they have slowed down. What now?`,
          opts: ['Say it again', `${frOf(K.okay)}, and answer`, 'Switch to English', 'Apologise'],
          correct: 1,
          why: 'Acknowledge and move on. The repair worked; carrying on as though it had not is what makes a small stumble feel like a failure to both of you.',
        },
      },
    ],
  },

  /* ══ Act 5: hold a long exchange ════════════════════════════════════════ */


  {
    type: 'scenario',
    id: 's20-scenario',
    title: 'The Long One',
    frSub: 'La conversation entière',
    layer: 'core',
    say: 'Eight turns, and it does not stay on one subject. That is the point.',
    setting: 'A neighbour you half know stops you by the letterboxes. She has time and she is in no hurry.',
    // THE SIGNATURE SECTION. Every role play in the band runs 3 to 6 turns on ONE
    // subject; 144 turns across 29 lessons and not one crosses units. This runs
    // eight and changes subject four times, so a single turn needs two lessons.
    turns: [
      {
        ai: 'Bonjour ! Vous êtes nouveau dans l\'immeuble, non ?',
        en: 'Hello! You are new in the building, are you not?',
        user: 'Bonjour ! Oui, depuis deux mois.',
        userEn: 'Hello! Yes, for two months.',
        alts: [
          { fr: 'Oui, je suis nouveau.', en: 'Yes, I am new.' },
          { fr: 'Bonjour ! Oui, depuis septembre.', en: 'Hello! Yes, since September.' },
        ],
      },
      {
        ai: 'Et vous venez d\'où ?',
        en: 'And where are you from?',
        user: 'Je viens du Canada.',
        userEn: 'I come from Canada.',
        alts: [
          { fr: 'Je suis canadien.', en: 'I am Canadian.' },
          { fr: 'Du Canada, et vous ?', en: 'From Canada, and you?' },
        ],
      },
      {
        ai: 'Ah ! Et l\'appartement, il est comment ?',
        en: 'Ah! And the flat, what is it like?',
        user: 'Il est petit, mais il y a un grand balcon.',
        userEn: 'It is small, but there is a big balcony.',
        alts: [
          { fr: 'Il est très bien, merci.', en: 'It is very good, thank you.' },
          { fr: 'Petit, mais il y a de la lumière.', en: 'Small, but there is light.' },
        ],
      },
      {
        ai: 'Vous travaillez dans le quartier ?',
        en: 'Do you work in the area?',
        user: 'Oui, je travaille le matin.',
        userEn: 'Yes, I work mornings.',
        alts: [
          { fr: 'Non, je travaille à Bordeaux.', en: 'No, I work in Bordeaux.' },
          { fr: 'Oui, tout près.', en: 'Yes, very close.' },
        ],
      },
      {
        ai: 'Le syndic passe jeudi pour les compteurs, on vous a prévenu ?',
        en: '(a fast sentence with two words you have never met)',
        user: frOf(K.dontUnderstand),
        userEn: enOf(K.dontUnderstand),
        alts: [
          { fr: frOf(K.excuseAndLost), en: enOf(K.excuseAndLost) },
          { fr: frOf(K.repeat), en: enOf(K.repeat) },
        ],
      },
      {
        ai: 'Ah pardon ! Jeudi, quelqu\'un vient. Pour l\'eau et l\'électricité.',
        en: 'Ah sorry! Thursday, somebody is coming. For the water and the electricity.',
        user: frOf(K.okay),
        userEn: enOf(K.okay),
        alts: [
          { fr: `${frOf(K.okay)}, merci.`, en: 'Okay, thank you.' },
          { fr: frOf(K.slower), en: enOf(K.slower) },
        ],
      },
      {
        ai: 'Vous serez là jeudi matin ?',
        en: 'Will you be there Thursday morning?',
        user: 'Oui, je suis là le matin.',
        userEn: 'Yes, I am there in the mornings.',
        alts: [
          { fr: 'Oui, jusqu\'à midi.', en: 'Yes, until midday.' },
          { fr: 'Non, je travaille.', en: 'No, I am working.' },
        ],
      },
      {
        ai: 'Parfait. Bonne journée !',
        en: 'Perfect. Have a good day!',
        user: 'Merci, bonne journée !',
        userEn: 'Thank you, have a good day!',
        alts: [
          { fr: 'Merci, à bientôt !', en: 'Thank you, see you soon!' },
          { fr: 'Vous aussi, au revoir !', en: 'You too, goodbye!' },
        ],
      },
    ],
  },



  /* ══ Act 6: prove it ════════════════════════════════════════════════════ */

  {
    type: 'progressCheck',
    id: 's23-progress',
    title: 'Where You Are',
    frSub: 'Où vous en êtes',
    layer: 'core',
    say: 'One card, then ten rounds.',
    body: 'You have used the whole band two lessons at a time, at speed, and held a conversation that changed subject four times. What is left is proving it on questions that do not tell you which lesson they came from.',
    stats: [],
  },

  {
    type: 'quiz',
    id: 's24-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Ten rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    // QuizDeckView shuffles options per question per attempt, so no option refers
    // to a position. The authored `correct` index is still spread, because
    // quiz-spread caps any slot at 40% of the closed questions.
    //
    // NO ROUND IS ABOUT ONE UNIT. Each names the SKILL it tests, and its five
    // questions pull from different places on purpose.
    // FIFTEEN BY-UNIT ROUNDS, generated in bilan-rounds.ts from the selection.
    // Hand-written rounds drift from the coverage rule the moment the corpus
    // moves. These cannot: a round can only ask about rows the selector chose.
    //
    // They are also what keeps the 87 review rows REACHABLE after v2 cut the
    // vocab, flashcard and review sections. Each round names its two units'
    // six contributions, so the exam is the screen. 87 of 87, checked.
    rounds: BILAN_ROUNDS,
  },

  {
    type: 'roundup',
    id: 's25-roundup',
    title: 'That Is A1',
    frSub: "C'est fini",
    say: 'Four things, and then what comes next.',
    body: 'You have finished the A1 band. Across twenty-nine lessons you were handed one thing at a time, and in this half hour you used them two at a time, at speed, in a conversation that would not stay on one subject. That is the difference between knowing French and having French, and it is not a difference in vocabulary. The part that was genuinely new here is small enough to write on a hand: what to say when you have not understood. Keep those thirteen phrases closer than any noun you learned this band, because they are what stop a conversation ending and they are the reason the next one goes better than the last.',
    points: [
      `${REFRAME} No real answer comes from a single lesson.`,
      'When you are lost, say so. Excusez-moi, je ne comprends pas. Nobody minds and it costs you nothing.',
      'If a repetition comes back at the same speed, ask for slower rather than for again.',
      'The short words that mean carry on are cheaper than vocabulary and do more work than any of it.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ──────── */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's23-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.30.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Units revisited', v: String(COVERED_UNITS.length) },
    { k: 'New phrases', v: String(Object.keys(K).length) },
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts: the axis is PRESSURE, not topic ─────────────────────────────── */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'What you have, and the one thing you do not',
    sections: ['s01-scene', 's02-goals', 's03-lost', 's04-kit', 's05-repeat'],
    milestone: 'You have the thirteen phrases nobody taught you.',
    estScreens: 28,
    restPoints: ['s01-scene/after-break', 's04-kit/halfway'],
  },
  {
    id: 'act2',
    title: 'Recognise it, whoever says it',
    sections: ['s06-listen', 's07-sort', 's09-check'],
    milestone: 'You can hear two lessons arriving in one sentence.',
    estScreens: 20,
    restPoints: ['s07-sort/halfway'],
  },
  {
    id: 'act3',
    title: 'Produce one turn',
    sections: ['s12-drill', 's13-speak', 's14-dictation', 's15-errors'],
    milestone: 'You can build an answer that needs more than one morning of work.',
    estScreens: 24,
    restPoints: ['s12-drill/halfway', 's13-speak/halfway'],
  },
  {
    id: 'act4',
    title: 'Under pressure',
    sections: ['s16-trap-articles', 's17-trap-shapes', 's18-fast'],
    milestone: 'Sixteen questions at speed, and the words were never the difficulty.',
    estScreens: 22,
    restPoints: ['s16-trap-articles/halfway', 's17-trap-shapes/halfway'],
  },
  {
    id: 'act5',
    title: 'Hold a long exchange',
    sections: ['s20-scenario'],
    milestone: 'Eight turns, four changes of subject, and you stayed in it.',
    estScreens: 18,
    restPoints: ['s20-scenario/halfway'],
  },
  {
    id: 'act6',
    title: 'The exam',
    sections: ['s23-progress', 's24-quiz', 's25-roundup'],
    milestone: 'A1 complete.',
    estScreens: 82,
    restPoints: ['s24-quiz/after-r3', 's24-quiz/after-r6', 's24-quiz/after-r9', 's24-quiz/after-r12'],
  },
];

/* ─── Deck tranches: THE CONTRACT THAT INVERTS ──────────────────────────────
 *
 * A capstone SHOWS freely and RELEASES only what no earlier lesson released.
 * All 87 review rows are already released by the units that taught them, and the
 * SRS keys on (itemId, modality), so re-releasing takes two ratings for one card.
 *
 * sons.09, the only other capstone, does exactly this: 78 named, 56 released, 22
 * withheld of which 21 were released earlier, and ZERO double releases. It
 * documents none of that, which is why it had to be measured for this build.
 *
 * So acts 1 and 4 release the kit, and every other act releases NOTHING.        */

const released = new Set<string>();
const once = (ids: string[]): string[] => {
  const out: string[] = [];
  for (const id of ids) {
    if (released.has(id)) continue;
    released.add(id);
    out.push(id);
  }
  return out;
};

const DECK_TRANCHE: string[][] = [
  // Act 1 shows the kit for the first time, so act 1 releases it.
  once(OWNED_IDS.filter((id) => id !== AUTHORED_ITEMS[1].id)),
  // Act 2 is the review half. It shows 87 rows and releases none of them.
  [],
  // Act 3 the same.
  [],
  // Act 4's rapid-fire is where « plus lentement » stops being a card and starts
  // being a reflex, so it is released here rather than with the rest.
  once([AUTHORED_ITEMS[1].id]),
  [],
  [],
];

/** Checked HERE as well as in the test, because a capstone that quietly releases
 *  a review row costs the learner a second rating on a card they already own. */
{
  const owned = new Set(OWNED_IDS);
  const stray = [...released].filter((id) => !owned.has(id));
  if (stray.length) throw new Error(`a1.30.l1: tranche(s) release row(s) an earlier lesson already released: ${stray.join(', ')}`);
  const never = OWNED_IDS.filter((id) => !released.has(id));
  if (never.length) throw new Error(`a1.30.l1: owned row(s) released by no tranche: ${never.join(', ')}`);
  const shown = new Set(SHOWN_ONLY_IDS);
  const leaked = [...released].filter((id) => shown.has(id));
  if (leaked.length) throw new Error(`a1.30.l1: review row(s) released: ${leaked.join(', ')}`);
}

/* ─── Error triggers and their drills ───────────────────────────────────── */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  { id: 'err-no-repair', description: 'Has no way to say they are lost, so a missed reply ends the exchange. The error twenty-nine lessons left in place.', detectOn: ['s03-lost', 's05-repeat', 's24-quiz'], drill: 'drill-repair', retest: 'retest-repair' },
  { id: 'err-one-lesson', description: 'Answers from one lesson when the question needed two, so the answer is correct and incomplete.', detectOn: ['s07-sort', 's12-drill', 's24-quiz'], drill: 'drill-two', retest: 'retest-two' },
  { id: 'err-article', description: 'Reaches for the wrong little word under time pressure, most often the one for a known thing where the one for some of it was needed.', detectOn: ['s16-trap-articles', 's24-quiz'], drill: 'drill-articles', retest: 'retest-articles' },
  { id: 'err-time', description: 'Drops the article on a part of the day, or adds one to midi, so a habit becomes one particular day or the reverse.', detectOn: ['s07-sort', 's24-quiz'], drill: 'drill-time', retest: 'retest-time' },
  { id: 'err-agreement', description: 'Leaves an adjective unagreed or puts it on the wrong side of the noun. Two lessons failing together in one noun phrase.', detectOn: ['s17-trap-shapes', 's24-quiz'], drill: 'drill-agreement', retest: 'retest-agreement' },
  { id: 'err-question', description: 'Answers a question word with oui, or a yes-or-no frame with a fact, because the shape of the question was not heard.', detectOn: ['s07-sort', 's24-quiz'], drill: 'drill-question', retest: 'retest-question' },
  { id: 'err-number', description: 'Produces a number with nothing attached to it, or loses one at speed and does not ask for it again.', detectOn: ['s12-drill', 's24-quiz'], drill: 'drill-number', retest: 'retest-number' },
  { id: 'err-silence', description: 'Goes quiet while assembling a sentence, which reads as the conversation being over rather than as thinking.', detectOn: ['s15-errors', 's24-quiz'], drill: 'drill-silence', retest: 'retest-silence' },
  { id: 'err-english', description: 'Switches to English at the first difficulty, after which the other person stays there for the rest of the conversation.', detectOn: ['s01-scene', 's15-errors', 's24-quiz'], drill: 'drill-english', retest: 'retest-english' },
];

const DRILLS: LessonDrill[] = [
  { id: 'drill-repair', title: 'When you are lost', format: 'flashcard', pairs: [['you understood nothing', frOf(K.dontUnderstand)], ['ask for it again', frOf(K.repeat)], ['still too fast', frOf(K.slower)], ['you need a second', frOf(K.moment)], ['get their attention first', frOf(K.excuseMe)]] as [string, string][], coach: 'Five moves and they are not interchangeable. Not understanding, needing it slower, and needing a moment are three different problems with three different phrases.' },
  { id: 'retest-repair', title: 'One more time', format: 'mcq', q: 'You caught nothing at all. Which?', opts: [frOf(K.moment), frOf(K.dontUnderstand), frOf(K.okay)], correct: 1, why: 'Say you have not understood. The other two answer different problems and will get you something you did not need.' },
  { id: 'drill-two', title: 'What else does the answer need?', format: 'sort', buckets: ['needs one lesson', 'needs two or more'], items: [top('a1.01').id, top('a1.22').id, top('a1.12').id, top('a1.26').id, top('a1.13').id, top('a1.02').id], coach: 'A greeting stands alone. Almost nothing else does: a country needs its preposition, an hour needs its frame, a room needs an adjective that agrees and sits on the right side.' },
  { id: 'retest-two', title: 'One more time', format: 'mcq', q: 'Somebody asks where you are from. Besides the country, what?', opts: ['a number', 'the right little word in front of it', 'an adjective'], correct: 1, why: 'The preposition, chosen by the article you stored when you learned the country. Two lessons, one decision.' },
  { id: 'drill-articles', title: 'Which little word?', format: 'sort', buckets: ['one of them', 'some of it'], items: [top('a1.11').id, top('a1.29').id, ofUnit('a1.11')[1].id, ofUnit('a1.29')[1].id], coach: 'Counting one, or an amount nobody counts. The noun never changes and the word in front does all the work.' },
  { id: 'retest-articles', title: 'One more time', format: 'mcq', q: 'Some coffee, an amount nobody is counting. Which?', opts: [top('a1.11').fr, top('a1.29').fr, top('a1.03').fr], correct: 1, why: 'The one for some of something. It is the little word you will use most often once you are ordering anything.' },
  { id: 'drill-time', title: 'Habit, or one particular day?', format: 'flashcard', pairs: [['in the mornings, as a rule', top('a1.25').fr], ['at midday', 'à midi'], ['every day', 'tous les jours'], ['on Mondays', 'le lundi']] as [string, string][], coach: 'The little word in front is what makes it a habit. Midi and minuit refuse it, because they name a moment rather than a stretch of time.' },
  { id: 'retest-time', title: 'One more time', format: 'mcq', q: 'What does the article on a part of the day tell you?', opts: ['it is formal', 'it happens regularly', 'there is one of them'], correct: 1, why: 'That it repeats, exactly as le lundi meant every Monday.' },
  { id: 'drill-agreement', title: 'Shape and position', format: 'flashcard', pairs: [['a big garden', 'un grand jardin'], ['a green door', 'une porte verte'], ['my sister', 'ma sœur'], ['my friend, feminine, vowel', 'mon amie']] as [string, string][], coach: 'Short common adjectives go in front, colours go behind, and the possessive agrees with the thing owned rather than with you.' },
  { id: 'retest-agreement', title: 'One more time', format: 'mcq', q: 'Where does a colour go?', opts: ['in front of the noun', 'after the noun', 'either side'], correct: 1, why: 'Behind. English puts every adjective in front and French does not, and colours are the clearest case of it.' },
  { id: 'drill-question', title: 'What kind of answer?', format: 'sort', buckets: ['oui or non is enough', 'needs a fact back'], items: [top('a1.19').id, top('a1.20').id, ofUnit('a1.20')[1].id, ofUnit('a1.19')[1].id], coach: 'A yes-or-no frame can be answered in one syllable. A question word wants information, and hearing which one arrived is what tells you what to build.' },
  { id: 'retest-question', title: 'One more time', format: 'mcq', q: 'A question beginning with a question word wants what?', opts: ['oui or non', 'information', 'a repetition'], correct: 1, why: 'A fact back. Answering it with oui is the commonest way a learner accidentally says nothing.' },
  { id: 'drill-number', title: 'A number is not an answer', format: 'flashcard', pairs: [['two coffees', 'deux cafés'], ['twenty-one', 'vingt et un'], ['a hundred', 'cent'], ['how many', 'combien']] as [string, string][], coach: 'A figure alone floats. What makes it an answer is the thing it counts and the little word in front of that thing.' },
  { id: 'retest-number', title: 'One more time', format: 'mcq', q: 'You lost a number at speed. Fastest fix?', opts: [frOf(K.okay), frOf(K.slower), frOf(K.welcome)], correct: 1, why: 'Ask for slower. Numbers are the thing learners lose most often, and a repetition at the same speed rarely helps.' },
  { id: 'drill-silence', title: 'Hold your turn', format: 'flashcard', pairs: [['you need a second', frOf(K.moment)], ['you are not sure of the answer', frOf(K.maybe)], ['you are still following', frOf(K.okay)], ['that has landed', frOf(K.thereYouGo)]] as [string, string][], coach: 'Silence reads as the end of the conversation. Any one of these keeps your turn open while you assemble the rest.' },
  { id: 'retest-silence', title: 'One more time', format: 'mcq', q: 'A long silence reads to the other person as what?', opts: ['careful thinking', 'the conversation being over', 'politeness'], correct: 1, why: 'As the end of it. It feels far shorter to you than to them.' },
  { id: 'drill-english', title: 'Stay in it', format: 'flashcard', pairs: [['you understood nothing', frOf(K.dontUnderstand)], ['politely, with an apology first', frOf(K.excuseAndLost)], ['ask for it again', frOf(K.repeat)], ['ask for it slower', frOf(K.slower)]] as [string, string][], coach: 'Every one of these keeps the conversation in French. One English sentence hands it over for good, and the other person will helpfully stay there.' },
  { id: 'retest-english', title: 'One more time', format: 'mcq', q: 'Which of these ends the French for the rest of the conversation?', opts: [frOf(K.dontUnderstand), 'Sorry, I don\'t understand.', frOf(K.repeat)], correct: 1, why: 'The English one. It is understood perfectly and it is the most expensive thing you can say.' },
];

/* ─── Reference sheet ───────────────────────────────────────────────────── */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.30.kit',
    title: 'When you are lost',
    sections: [
      {
        type: 'table',
        title: 'The thirteen phrases',
        cols: ['when', 'what you say'],
        rows: [
          ['you understood nothing', frOf(K.dontUnderstand)],
          ['the same, politely', frOf(K.excuseAndLost)],
          ['you do not know the answer', frOf(K.dontKnow)],
          ['ask for it again', frOf(K.repeat)],
          ['it was still too fast', frOf(K.slower)],
          ['you need a second', frOf(K.moment)],
          ['you are not sure', frOf(K.maybe)],
          ['get their attention', frOf(K.excuseMe)],
          ['apologise', frOf(K.sorry)],
          ['agree, keep them going', `${frOf(K.okay)} · ${frOf(K.ofCourse)} · ${frOf(K.thereYouGo)}`],
          ['they thanked you', `${frOf(K.welcome)} · ${frOf(K.noProblem)}`],
        ],
      },
      {
        type: 'teach',
        title: 'Why these are worth more than more vocabulary',
        body:
          'A conversation at this level almost never ends because you did not know a word. It ends at the '
          + 'moment somebody answers at full speed, you catch two words out of twelve, and you have no way '
          + 'to say so. The instinct is to smile, say oui, and walk away having agreed to something. The '
          + 'alternative is four words. Ask for a repetition and people give you the same sentence at the '
          + 'same speed, so the second ask should be for slower rather than for again. If you understood and '
          + 'simply need time, say so, because a silence feels much longer to the person waiting than it '
          + 'does to you. And drop the short agreement words into the gaps: they cost nothing, they are '
          + 'almost impossible to get wrong, and leaving them out makes an ordinary chat feel like an '
          + 'interview. None of this is difficult and none of it was in the twenty-nine lessons before it.',
      },
    ],
  },
];

export const BILAN_LESSON: Lesson = {
  id: 'a1.30.l1',
  unitId: 'a1.30',
  seq: 1,
  title: 'Bilan A1',
  level: 'a1',
  // THIRTY, from unit.seq. missions.ts derives the eyebrow at render time and
  // the stored value has to agree or the two disagree the moment something reads
  // this field instead. a1.03 shipped exactly that bug.
  tag: 'A1 · LEÇON 30',
  intro:
    'Twenty-nine lessons handed you one thing at a time. This half hour uses them two at a time, at speed, in a conversation that will not stay on one subject, and adds the handful of phrases that stop you losing it.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v1 shipped as an integration lesson: 25 sections, 88 scored moments, and it
  // was verified on a device. Seeing it there, the product owner's judgement was
  // that a band capstone should feel like an exam across lessons 1 to 29.
  //
  // v2 keeps act 1, because twenty-nine lessons teach production and none teaches
  // repair, and this is the band's only remaining slot. Everything after it is
  // assessment. Six sections are cut and the ten hand-written mixed rounds become
  // fifteen generated by-unit rounds.
  //
  // The two halves of that are NOT independent. Cutting s10-bank, s21-flash and
  // s22-review removes the only screens 87 of the 101 items lived on, and every
  // itemId must be on a screen. A by-unit round names its own two units' six
  // contributions, so the exam becomes the screen: 87 of 87, checked. A
  // mixed-topic exam cannot do that, which is why reverting the rounds while
  // keeping the cut goes red on reachability.
  version: 2,

  grammarAssumed: [
    'The whole A1 band: every unit from a1.01 to a1.29 is a prerequisite in practice, and this lesson teaches none of them again',
  ],
  grammarIntroduced: [
    'Conversational repair as a category: signalling non-comprehension, requesting repetition, requesting reduced speed, and holding the floor',
    'Combining two or more previously separate units inside a single conversational turn',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'A1 Review',
    subFr: 'Bilan A1',
    introFr: 'Tout ce que vous savez, deux choses à la fois, plus ce qu\'il faut dire quand vous êtes perdu.',
    minutes: 34,
    difficulty: 3,
    glyph: '🏁',
    screens: 200,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: BILAN_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    recorded: [
      {
        id: 'rec-a1-30-kit',
        desc:
          'THE THIRTEEN REPAIR PHRASES, ONE TAKE, READ AT ORDINARY CONVERSATIONAL SPEED AND NOT SLOWLY. '
          + 'These are emergency phrases and the learner will say them under pressure, so a slow careful '
          + 'reading teaches a version they will never produce and never hear. '
          + '« je ne comprends pas » MUST NOT BE READ APOLOGETICALLY. The whole teaching is that saying it '
          + 'is ordinary rather than an admission of failure, and a reader who sounds embarrassed is '
          + 'teaching the opposite of the lesson. Flat, friendly, unremarkable. '
          + 'Keep every nasal closed: comprends is /kɔ̃.pʁɑ̃/ with no n sound behind either vowel.',
        clipIds: [frOf(K.dontUnderstand), frOf(K.excuseAndLost), frOf(K.dontKnow), frOf(K.moment), frOf(K.maybe), frOf(K.excuseMe), frOf(K.sorry), frOf(K.okay), frOf(K.ofCourse), frOf(K.thereYouGo), frOf(K.welcome), frOf(K.noProblem), 'la-trousse-de-secours'],
      },
      {
        id: 'rec-a1-30-repeat',
        desc:
          'THE TWO AUTHORED PHRASES, ADJACENT IN ONE TAKE, IN THIS ORDER: « Vous pouvez répéter, s\'il vous '
          + 'plaît ? » then « Plus lentement, s\'il vous plaît. » They are a SEQUENCE, not alternatives, and '
          + 'recording them apart loses the fact that the second is what you say when the first did not '
          + 'work. '
          + 'THE FIRST IS A QUESTION and must rise. The second is NOT and must not. '
          + 'lentement CARRIES TWO NASAL VOWELS, /lɑ̃t.mɑ̃/, and neither takes an n sound. The app respells '
          + 'it lahⁿt-MAHⁿ deliberately; the shared checker can only see the second of the two, so a reader '
          + 'following a transcription rather than the IPA may let an n out of the first.',
        clipIds: [frOf(K.repeat), frOf(K.slower), 'repeter-puis-ralentir', frOf(K.moment)],
      },
      {
        id: 'rec-a1-30-scene',
        desc:
          'The opening scene. The stallholder is warm, busy and completely ordinary. HIS LONG LINE MUST BE '
          + 'READ AT FULL NATURAL SPEED, genuinely too fast for an A1 learner to follow. That is the content '
          + 'of the scene and slowing it down to be kind destroys it: the learner is supposed to fail to '
          + 'understand, notice that they failed, and discover they have no move. He is not testing anybody '
          + 'and there is no unkindness in him at all.',
        clipIds: ['Et avec ceci, ce sera tout ou je vous mets aussi des courgettes ?', 'Bonjour ! Un kilo de tomates, s\'il vous plaît.'],
      },
      {
        id: 'rec-a1-30-listening',
        desc:
          'The five listening lines at ORDINARY pace. Each crosses two or more units and the exercise is '
          + 'hearing that, so a slow reading that separates the units defeats it. The 0.65 speed exists in '
          + 'the player for anybody who needs it.',
        clipIds: ['Bonjour ! Vous habitez à Lyon ?', 'Non, je suis canadien. J\'habite ici depuis deux ans.', 'Et vous travaillez le matin ou le soir ?', 'Le matin. Je me lève à six heures, c\'est difficile.', frOf(K.excuseAndLost)],
      },
      {
        id: 'rec-a1-30-fast',
        desc:
          'The two rapid-fire drills. EVERY PROMPT AT THE SAME BRISK PACE, with no pause for effect between '
          + 'them, because the difficulty being trained is speed and a reader who leaves thinking time has '
          + 'removed it. Nothing here is hard and nothing should sound hard.',
        clipIds: [top('a1.11').fr, top('a1.29').fr, top('a1.03').fr, top('a1.25').fr, 'vitesse-1', 'vitesse-2'],
      },
      {
        id: 'rec-a1-30-mixed',
        desc:
          'The mixed cards and the question-and-answer table. Read each French example WHOLE, never as the '
          + 'separate units it is assembled from, because the entire claim of this lesson is that a turn is '
          + 'one thing rather than two things joined. No pause at the seam.',
        clipIds: ['Je viens du Canada.', `${top('a1.25').fr}, vers six heures.`, 'J\'ai un grand jardin.', 'Vous venez d\'où ?', 'Vous êtes libre quand ?'],
      },
    ],
    ambienceDefault: 'off',
  },
};

export const BILAN_ITEM_IDS = ITEM_IDS;
export const BILAN_OWNED_IDS = OWNED_IDS;
export const BILAN_SHOWN_ONLY_IDS = SHOWN_ONLY_IDS;
export const BILAN_SPEAK_IDS = SPEAK_IDS;
export const BILAN_DICTATION_IDS = DICTATION_IDS;
export const BILAN_TRANCHES = DECK_TRANCHE;
export const BILAN_KIT = K;
export const BILAN_CANDO_CLAUSES = CANDO_CLAUSES;
