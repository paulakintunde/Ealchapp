// a2.32.l1 « La technologie » — the lesson.
//
// 23 sections, six acts, one quiz, one lesson. Every section is a mission: the
// renderer numbers one per section and the design distinction between missions
// and sections does not exist (a2.07 verified it on a device).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT 2 HAS NO PARADIGM, AND THAT IS THE BUILD
// ══════════════════════════════════════════════════════════════════════════
//
// Paul answered decision item 2 on 2026-08-15: OPTION B. Nobody owns the
// imperative. This unit does not take it, a2.27 does not take it, and both use
// it as unanalysed lexis.
//
// So act 2 is a CHUNK INVENTORY, not a paradigm. `s04-screen` is
// what the screen says / what it means / what you do. It is not
// infinitive-to-form. No production rule is stated, taught, drilled or
// quizzed anywhere in this file; no card says a form is made by deleting
// anything; and the mood is never named on any learner surface. Three guards
// enforce all three, and their failure messages say why.
//
// Path B is not in this file in any form, including as a comment describing
// how it would have worked.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE MISSION COUNT, AND THE ONE PLACE THIS BUILD DIFFERS FROM ITS PROMPT
// ══════════════════════════════════════════════════════════════════════════
//
// 23 sections, which is the prompt's own corrected figure and the floor of the
// A2 range measured across all 70 shipped lessons (23 to 32, median 24).
//
// THE DIFFERENCE IS MISSION 13. The prompt offers "a second `groupDrill` or a
// `cardDeck` on the ladder past `mail`" for the mission act 2 gives up. It is
// neither. It is `s13-pairs`, a cardDeck of the SAME FAULT IN TWO VOICES, and
// it is that because two other requirements in the same prompt have no other
// home:
//
//   §7.1 second required layout   "the support call's phrasing and the
//                                  friend's phrasing belong side by side"
//   §10  the paired assertion     "appear as a pair in ONE section"
//
// Two `scenario` sections are consecutive missions, not a side-by-side layout,
// so nothing else in this lesson satisfies either line. The ladder-past-mail
// material the prompt wanted there (podcast/balado, chat/clavardage) is on
// `s08-map`'s regional card, where C3 rule 2 requires it to be anyway.
//
// ══════════════════════════════════════════════════════════════════════════
//  MISSION 18 SHIPS AS THE SECOND `scenario`. THE CHECK RAN AND PASSED.
// ══════════════════════════════════════════════════════════════════════════
//
// `46-DEVICE-CHECK-RESULTS.md`, Pixel 6 (oriole), 2026-08-16: two `scenario`
// sections in one lesson RENDER. The second is indistinguishable from the
// first, `ownsLayout` in `LessonPager.tsx` handles each section independently,
// and the file names this unit in terms: « a2.29 and a2.32 are released. Both
// may author two `scenario` sections as designed. Neither needs a fallback. »
//
// So the `cardDeck` degradation the prompt held in reserve is not taken, and
// `s18-friend` is a real scenario with real turns.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE FIVE FIELDS THAT DRAW NOTHING (41-DEAD-FIELDS-WARNING.md)
// ══════════════════════════════════════════════════════════════════════════
//
//   `sub` on a groupDrill ITEM   -> `note`      (sub IS legal on a cardDeck CARD)
//   `itemIds` on a cardDeck      -> deckTranche (only `practice` reads itemIds)
//   `canDo` on the Lesson        -> belongs to the unit
//   `track` on the Lesson        -> dropped
//   `teaches` on the Lesson      -> `grammarIntroduced` + `grammarAssumed`
//
// And the drill trap this theme carries: `fr.a2.internet.077-.111` are
// `voiceflash + review` with NO `flashcard`, so a deckTranche release of any
// of them serves no card. All fourteen imported here are named by `itemId` in
// `s09-sort` or `s19-speak` and released by no tranche.

import type { Lesson, LessonSection, LessonDrill, SectionAudio } from '../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, REFRAME, E,
  VOICE_SYSTEM, VOICE_AGENT, VOICE_FRIEND,
  REPAIR_IDS, REPAIR_UNIT, LADDER_IDS, LADDER_UNIT, RUNG_1, RUNG_2, RUNG_3,
  VERB_UNIT, TIME_UNIT, BILAN_UNIT,
  ALL_ROWS, IMPORT_IDS, IMPORTED, DICTEE_IDS,
} from './technologie-corpus.ts';
import { TECHNOLOGIE_TERMS } from './technologie-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/** NOT `as const`. A readonly `speeds` tuple is not assignable to
 *  `SectionAudio['speeds']`, which is a mutable `number[]`, and the admin
 *  typecheck is the only check in this project that says so. */
const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT I — L'INCIDENT
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.2's A2 register: BREAKDOWN, NOT RUDENESS. Nobody is impolite,
 *  nothing is mispronounced, and the learner runs out of sentence in public.
 *
 *  §7.2: THE SETTING IS THE INCIDENT, NOT A PLACE. This unit has no counter,
 *  and naming an office or a café would be a lie about where this happens and
 *  would make it read as a workplace lesson, which is a2.30's.
 *
 *  NO SPACED EXCLAMATION MARK IN ANY BUBBLE. One has made a scene lose its
 *  last word on a Pixel 6 while the gloss still translated it, and interface
 *  strings are full of them.
 *
 *  LessonSection is a UNION and only the scene variant has `beats`, so the
 *  const is typed through Extract rather than as a bare array. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration',
    text: 'Nine at night. A bank site, a laptop, and a password that worked yesterday. Third attempt. The page reloads and something small and grey appears under the box.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'The screen',
    fr: 'Réessayez plus tard',
    en: 'Try again later',
    respell: '[ray-ay-say-YAY plü TAR]',
    stage: 'It does not say why. It does not say how much later.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'narration',
    text: 'He calls the number at the bottom of the page. A woman answers on the fourth ring. She has his account open. She cannot see his screen.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'The agent',
    fr: "Qu'est-ce qui s'affiche exactement à l'écran ?",
    en: 'What exactly is showing on the screen?',
    respell: "[kess kee sa-FEESH eg-zak-tuh-MAHⁿ ah lay-KRAHⁿ]",
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'choice',
    prompt: 'He has one sentence. Which one does he give her?',
    size: 'lg',
    options: [
      { fr: 'Ça ne marche pas.', respell: '[sa nuh MARSH PAH]', en: 'It is not working.', outcome: 'breaks', audio: AUDIO },
      { fr: 'Le site refuse mon mot de passe.', respell: '[luh SEET ruh-FÜZ mohⁿ moh duh PASS]', en: 'The site is rejecting my password.', outcome: 'works', audio: AUDIO },
    ],
    followUp: {
      works: 'She types for four seconds and tells him the account locked after three attempts. Twenty minutes.',
      breaks: 'What is not working? She has to ask four more questions to get where one sentence would have taken her.',
    },
  },
  {
    kind: 'break',
    heading: 'She has nothing but what you say',
    // 38 words. §7.2 wants the break body between 24 and 40, and the core
    // density cap is 45 on any one authored string.
    body: 'In a shop you can point at the thing. On a support line there is nothing to point at, so the sentence has to carry the whole screen. Both are true. Only one is any use to her.',
    wrong: {
      fr: 'Ça ne marche pas.',
      ipa: '/sa nə maʁʃ pa/',
      respell: '[sa nuh MARSH PAH]',
      en: 'It is not working.',
    },
    right: {
      fr: 'Le site refuse mon mot de passe.',
      ipa: '/lə sit ʁə.fyz mɔ̃ mo də pas/',
      respell: '[luh SEET ruh-FÜZ mohⁿ moh duh PASS]',
      en: 'The site is rejecting my password.',
    },
    coach: 'Say what the screen said, and say what you did before it said it. That is the call.',
    size: 'lg',
    audio: AUDIO,
  },
  {
    kind: 'resolve',
    text: 'Twenty minutes later it lets him in. He never found out what the grey message meant, and he never needed to.',
    size: 'md',
  },
];

const S01_SCENE: LessonSection = {
  type: 'scene',
  id: 's01-scene',
  frSub: "L'écran ne dit pas pourquoi",
  render: 'screens',
  layer: 'core',
  title: 'The screen would not say why',
  setting: { place: 'Le site ne le reconnaît plus', city: 'Rennes', time: '21 h', ambience: 'quiet, a phone on speaker' },
  beats: SCENE_BEATS,
  closing: { text: 'One screen, three people who might be listening, and three different ways to say the same word.', size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['invisible', 'screen'],
};

const S02_GOALS: LessonSection = {
  type: 'goals',
  id: 's02-goals',
  frSub: "Ce que vous saurez faire",
  layer: 'core',
  title: 'By the end of this lesson',
  goals: [
    { t: 'Do what a French screen tells you', s: 'Act 2: the six things an interface actually says' },
    { t: 'Pick the right name for the person listening', s: `Act 3: ${VOICE_SYSTEM}, ${VOICE_AGENT}, ${VOICE_FRIEND}` },
    { t: 'Hear a recorded menu once and know which number to press', s: 'Act 3, and it is what the exam does' },
    { t: 'Describe a fault to somebody who cannot see it', s: 'Act 5: twice, in two voices' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** THE OWNS, STATED BEFORE IT IS TAUGHT.
 *
 *  §7.1 FIRST REQUIRED LAYOUT: the three voices belong on ONE screen with the
 *  same referent visible, so the reader sees one object and three names.
 *  Splitting it makes the Owns two small lessons. Asserted by the test.
 *
 *  All three are already published, which is what makes this teachable rather
 *  than aspirational, and the third one is the row this build authored. */
const S03_VOICES: LessonSection = {
  type: 'cardDeck',
  id: 's03-voices',
  frSub: "Un objet, trois noms",
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'One thing, three names',
  // THE REFERENT IS NAMED IN THE HINT, and it has to be. §7.1's first required
  // layout is the three voices on one screen WITH THE SAME REFERENT VISIBLE,
  // and the first draft showed three French forms and never once said in
  // English what all three are names of. The test caught it.
  hint: 'Swipe. Every card is the same thing, an email address. Only the listener changes.',
  cards: [
    {
      label: VOICE_SYSTEM,
      head: 'a form, a bank, a government page',
      fr: 'une adresse électronique',
      sub: '[ün na-dress ay-lek-tro-NEEK]',
      body: 'What something written calls it. Nobody says this out loud unless they are reading it off a screen.',
    },
    {
      label: VOICE_AGENT,
      head: 'a support agent, and all of Canada',
      fr: 'un courriel',
      sub: '[uhⁿ koo-RYEL]',
      body: 'The official word, and the ordinary one in Quebec. An agent on a French line will use it too and it is never wrong with them.',
    },
    {
      label: VOICE_FRIEND,
      head: 'a friend, in France, out loud',
      fr: 'un mail',
      sub: '[uhⁿ MEL]',
      body: 'What people actually say. Use courriel with a Parisian friend and you sound like their bank.',
    },
    {
      label: 'the point',
      head: 'Wrong in both directions',
      fr: 'un mail / un courriel',
      sub: 'Montreal / Paris',
      body: 'Everywhere else in this course, being too formal is safe. Here it is not. Say mail in Montreal and you are marked; say courriel to a Paris friend and you are marked the other way.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voice', 'borrowed'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT II — LA VOIX DE LA MACHINE  (four missions; act 3 has six)
 * ══════════════════════════════════════════════════════════════════════════ */

/** `tapTable`, NOT `table`. A `table` at `layer: 'core'` is REFUSED OUTRIGHT
 *  by `validateDensity` (density.logic.ts:423, under a heading reading
 *  « Tables never appear in the flow ») and 0 of 70 shipped lessons carry one
 *  in `sections`. a2.29 device-checked a probe `table` inside a mission on a
 *  Pixel 6, saw all nine cells draw correctly, and then had the batch refuse
 *  it. A DEVICE CHECK CANNOT FIND THIS ONE.
 *
 *  WHAT THE SCREEN SAYS / WHAT IT MEANS / WHAT YOU DO. Three columns, six
 *  rows, audible per row. It is NOT infinitive-to-form and there is no fourth
 *  column where a form would be built.
 *
 *  Headers have a glyph budget and these are 4, 8 and 6 characters. */
const S04_SCREEN: LessonSection = {
  type: 'tapTable',
  id: 's04-screen',
  frSub: "Ce que dit l'écran",
  layer: 'core',
  title: 'Six things a screen says',
  cols: ['It says', 'It means', 'You'],
  rows: [
    {
      cells: ['Saisissez votre code', 'Type your code', 'type it'],
      say: 'Saisissez votre code',
      detail: {
        title: 'Saisissez votre code',
        body: 'Saisir is what a form does with a value: it takes it in. The box is already waiting and nothing else on the page will work until it has something.',
        say: 'Saisissez votre code',
      },
    },
    {
      cells: ['Appuyez sur Entrée', 'Press Enter', 'press it'],
      say: 'Appuyez sur Entrée',
      detail: {
        title: 'Appuyez sur Entrée',
        body: 'Appuyer sur is to press a key or a button. Entrée is the return key, and French keyboards print the word rather than an arrow.',
        say: 'Appuyez sur Entrée',
      },
    },
    {
      cells: ['Veuillez patienter', 'Please wait', 'do nothing'],
      say: 'Veuillez patienter',
      detail: {
        title: 'Veuillez patienter',
        body: 'The politest thing a machine says, and the one that asks for the least. It is working. Pressing anything now starts it again.',
        say: 'Veuillez patienter',
      },
    },
    {
      cells: ['Sélectionnez une option', 'Choose an option', 'pick one'],
      say: 'Sélectionnez une option',
      detail: {
        title: 'Sélectionnez une option',
        body: 'A list is on screen and none of it is chosen yet. Often the page will not scroll past this until something is picked.',
        say: 'Sélectionnez une option',
      },
    },
    {
      cells: ['Cliquez sur le lien', 'Click the link', 'click it'],
      say: 'Cliquez sur le lien',
      detail: {
        title: 'Cliquez sur le lien',
        body: 'Usually the link is in a message rather than on the page you are reading. Look at your mail before you look for it here.',
        say: 'Cliquez sur le lien',
      },
    },
    {
      cells: ['Réessayez plus tard', 'Try again later', 'wait, then retry'],
      say: 'Réessayez plus tard',
      detail: {
        title: 'Réessayez plus tard',
        body: 'The one from the scene. It never says how much later, and it usually means something at their end is busy or your account is locked for a while.',
        say: 'Réessayez plus tard',
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['screen'],
};

/** The same six as fixed chunks, one per card, with the literal gloss beside
 *  what it actually means you should do. Learned whole, the way bonjour was.
 *
 *  NOT ONE ATTACHES A PRONOUN. `Connectez-vous` and `Abonnez-vous` are
 *  deliberately absent from every surface in this lesson: a2.06 taught the
 *  preverbal position only. */
const S05_STRINGS: LessonSection = {
  type: 'cardDeck',
  id: 's05-strings',
  frSub: "Six phrases, apprises entières",
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Learn them whole',
  hint: 'Six strings. Each one is one thing to do.',
  cards: [
    { label: 'the box is waiting', head: 'Saisissez votre code', fr: 'Saisissez votre code', sub: '[say-zee-SAY votr KOD]', body: 'Literally: take in your code. What it wants: the six digits, in the box, now.' },
    { label: 'the key with the word on it', head: 'Appuyez sur Entrée', fr: 'Appuyez sur Entrée', sub: '[a-pwee-YAY sür ahⁿ-TRAY]', body: 'Literally: press on Enter. What it wants: that key, not the button on screen.' },
    { label: 'the politest one', head: 'Veuillez patienter', fr: 'Veuillez patienter', sub: '[veu-YAY pa-syahⁿ-TAY]', body: 'Literally: be so good as to be patient. What it wants: nothing at all from you.' },
    { label: 'a list, none of it chosen', head: 'Sélectionnez une option', fr: 'Sélectionnez une option', sub: '[say-lek-syo-NAY ü-nop-SYOHⁿ]', body: 'Literally: select an option. What it wants: one of them, before it will go on.' },
    { label: 'usually in a message', head: 'Cliquez sur le lien', fr: 'Cliquez sur le lien', sub: '[klee-KAY sür luh LYEHⁿ]', body: 'Literally: click on the link. What it wants: the one it just sent you.' },
    { label: 'no number given', head: 'Réessayez plus tard', fr: 'Réessayez plus tard', sub: '[ray-ay-say-YAY plü TAR]', body: 'Literally: try again later. What it wants: you, gone, for an amount of time it will not name.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['screen'],
};

/** THE SCREEN AS THE SITUATION, ON TODAY'S RENDERER.
 *
 *  `uiScreen` was DECLINED (collation §3.2) at 2 to 4 days. This is the
 *  solution the design's own §3.3(a) proposed and it is kept whole: a French
 *  app's settings screen, one menu row per card, front the French label alone
 *  and back what it does. Half of what the component would have bought, at
 *  zero engineering. */
const S06_SETTINGS: LessonSection = {
  type: 'cardDeck',
  id: 's06-settings',
  frSub: "L'écran des réglages",
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Paramètres',
  hint: 'A settings screen, one row at a time. Read the label, then turn it over.',
  cards: [
    { label: 'Paramètres', head: 'Notifications', fr: 'Notifications', sub: '[no-tee-fee-ka-SYOHⁿ]', body: 'Which apps are allowed to interrupt you, and how loudly. Same word as English, different sound entirely.' },
    { label: 'Paramètres', head: 'Confidentialité', fr: 'Confidentialité', sub: '[kohⁿ-fee-dahⁿ-sya-lee-TAY]', body: 'Privacy. Not confidentiality, which is what the English cognate makes you expect.' },
    { label: 'Paramètres', head: 'Mode avion', fr: 'Mode avion', sub: '[mod a-VYOHⁿ]', body: 'Airplane mode. The one setting whose French name is shorter than its English one.' },
    { label: 'Paramètres', head: 'Stockage', fr: 'Stockage', sub: '[sto-KAHZH]', body: 'Storage. This is the screen that tells you why nothing will install.' },
    { label: 'Paramètres', head: 'Compte', fr: 'Compte', sub: '[KOHⁿT]', body: 'Account. The same word as a bank account, and the same word as counting.' },
    { label: 'Paramètres', head: 'Se déconnecter', fr: 'Se déconnecter', sub: '[suh day-ko-nek-TAY]', body: 'Log out. It sits at the bottom of the list, in red, on every app ever made.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['screen'],
};

/** REPLACES THE DESIGN'S `practice skill: 'listen'`, WHICH RENDERS A SPEAKING
 *  DRILL. `PracticeVFView` is not even passed `skill` (collation §2, 0.2), so
 *  a listening practice section is a mic that scores the wrong thing.
 *
 *  `hideLines: true` LANDED and is verified in `MissionRich.tsx:1988`. Without
 *  it the line card prints `fr` AND `en` beside the play dot and this is a
 *  reading exercise with a play button.
 *
 *  Short, and no question reprints its line. */
const S07_HEARD: LessonSection = {
  type: 'listening',
  id: 's07-heard',
  frSub: "Quatre messages, une écoute",
  layer: 'core',
  hideLines: true,
  title: 'Four prompts, once each',
  lines: [
    { fr: 'Veuillez patienter', en: 'Please wait' },
    { fr: 'Saisissez votre code', en: 'Enter your code' },
    { fr: 'Sélectionnez une option', en: 'Choose an option' },
    { fr: 'Réessayez plus tard', en: 'Try again later' },
  ],
  questions: [
    {
      q: 'Which one is telling you to do nothing?',
      opts: ['the first', 'the second', 'the fourth'],
      correct: 0,
      why: 'Patienter is to wait. It is the only one of the four that asks nothing of you at all.',
    },
    {
      q: 'Which one wants something typed?',
      opts: ['the third', 'the second', 'the fourth'],
      correct: 1,
      why: 'Saisir is what a form does with a value it takes in. There is a box and it is empty.',
    },
    {
      q: 'You heard the third one. What is on the screen?',
      opts: ['an error', 'an empty box', 'a list'],
      correct: 2,
      why: 'An option is one of several. If you are being asked to choose one, several of them are showing.',
    },
    {
      q: 'The fourth one gives you a number of minutes.',
      opts: ['true', 'false'],
      correct: 1,
      why: 'It never does, and that is the complaint people have about it. Plus tard is as precise as it gets.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['screen'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT III — LE MÊME APPAREIL, TROIS VOIX  (THE OWNS. Six missions.)
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE ANGLICISM MAP. Three tranches, and THE MECHANISM RATHER THAN THE LIST
 *  (design risk 12, and it is right): French borrows, official French
 *  translates, Quebec resists hardest. `un texto` and `le clavardage` are
 *  already dating. The mechanism does not age and the list does.
 *
 *  `size: 'xl'` means ONE French unit per screen and TWELVE WORDS per display
 *  string. Every card here is one word and one line, which is what xl is for.
 *
 *  THE LAST CARD IS THE ONE QUEBEC CARD (collation C3, rule 2). There is no
 *  second, and a test counts them. The four Quebec forms this build authored
 *  reach the learner through the act 3 tranche, not through a second card. */
const S08_MAP: LessonSection = {
  type: 'cardDeck',
  id: 's08-map',
  frSub: "Pris, traduit, ou les deux",
  render: 'deck',
  layer: 'core',
  // `lg`, NOT `xl`. Measured on a Pixel 6 2026-08-18: an xl cardDeck renders
  // indistinguishably from an lg one, and the code says why —
  // `DECK_FILL` (LessonRich.tsx:349) maps xl to a 0.78 height fill and
  // nothing else, while the 56pt hero card lives in `OneGroup`, the
  // groupDrill renderer. `validateDensity` still applies the whole xl
  // regime to any xl section, so this deck was authored to a 12-word cap
  // for a treatment the cardDeck never delivers.
  size: 'lg',
  title: 'Taken, translated, or both',
  hint: 'Three groups. The rule matters more than the words.',
  cards: [
    { label: 'TAKEN', head: 'said weefee', fr: 'le wifi', sub: '[luh wee-FEE]', body: 'Taken whole. The spelling and the sound both stayed.' },
    { label: 'TAKEN', head: 'no French word for it', fr: 'un smartphone', sub: '[uhⁿ SMART-fon]', body: 'France uses the English word without blinking.' },
    { label: 'TAKEN', head: 'and it is dating', fr: 'un texto', sub: '[uhⁿ tex-TOH]', body: 'Borrowed, then trimmed. Younger speakers say message.' },
    { label: 'TRANSLATED', head: 'the English word is not used', fr: 'un ordinateur', sub: '[uhⁿ-nor-dee-na-TUR]', body: 'French built its own and it won completely.' },
    { label: 'TRANSLATED', head: 'not a browser', fr: 'un navigateur', sub: '[uhⁿ na-vee-ga-TUR]', body: 'From navigate. Nobody in France says browser.' },
    { label: 'TRANSLATED', head: 'joined to the message', fr: 'une pièce jointe', sub: '[ün pyess ZHWANT]', body: 'An attachment, described rather than borrowed.' },
    { label: 'BOTH', head: 'and then it is regional', fr: 'un courriel', sub: 'mail/courriel, chat/clavardage, podcast/balado', body: 'Quebec keeps the French word. France reaches for the English one.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['borrowed', 'wifi', 'voice'],
};

/** THREE GATED GROUPS. The learner sorts a word into the voice it belongs to,
 *  and the third group does not open until the second is right.
 *
 *  GATED, NOT TIMED. The design called this "production against the clock" and
 *  it is VOID: `setInterval` is ZERO across all four render files and there is
 *  no timer anywhere in the app (collation 1.9). No authored string here or
 *  anywhere in this lesson says otherwise, and a guard checks the phrasing.
 *
 *  `note`, NOT `sub`. On a groupDrill ITEM `sub` draws nothing; `GroupDrillView`
 *  builds its second line from `note`/`respell`/`en`. a2.07 shipped 33 blank
 *  lines this way and passed 4,195 tests.
 *
 *  EVERY itemId HERE IS FROM THE `voiceflash + review` POPULATION that no deck
 *  can serve. Naming them here is what makes them reachable. */
const S09_SORT: LessonSection = {
  type: 'groupDrill',
  id: 's09-sort',
  frSub: "À quelle voix ça appartient",
  layer: 'core',
  size: 'lg',
  title: 'Which voice does it belong to',
  groups: [
    {
      label: `${VOICE_SYSTEM}: what a screen or a form says`,
      items: [
        { fr: 'Veuillez patienter', itemId: E(190), note: 'No person alive opens a sentence this way.', en: 'Please wait' },
        { fr: 'Saisissez votre code', itemId: E(188), note: 'Saisir belongs to forms and to nothing else.', en: 'Enter your code' },
        { fr: 'une adresse électronique', itemId: 'fr.a2.rp-technologie.012', note: 'Four syllables where a friend would use one.', en: 'an email address' },
        { fr: 'un identifiant', itemId: 'fr.a2.internet.026', note: 'The word on the login page, every time.', en: 'a username' },
      ],
      check: {
        q: 'A page says « Sélectionnez une option ». Who is speaking?',
        opts: ['a support agent', 'the system', 'a friend'],
        correct: 1,
        why: 'Sélectionner is a screen verb. An agent would say choisissez and a friend would say choisis.',
      },
    },
    {
      label: `${VOICE_AGENT}: what somebody helping you says`,
      items: [
        { fr: 'un courriel', itemId: 'fr.a2.internet.002', note: 'Correct everywhere, and normal in Canada.', en: 'an email' },
        { fr: 'un technicien', itemId: 'fr.a2.rp-technologie.028', note: 'The person they transfer you to.', en: 'a technician' },
        { fr: 'une panne', itemId: 'fr.a2.rp-technologie.027', note: 'What they call it at their end.', en: 'an outage' },
        { fr: 'redémarrer', itemId: 'fr.a2.rp-technologie.003', note: 'The first thing they will ask you to do.', en: 'to restart' },
      ],
      check: {
        q: 'Somebody on the phone says « Votre code arrive par courriel ». Who?',
        opts: ['the system', 'a friend', 'an agent'],
        correct: 2,
        why: 'A person, using vous and the official word. A friend would have said mail.',
      },
    },
    {
      label: `${VOICE_FRIEND}: what somebody your own age says`,
      items: [
        { fr: 'un mail', itemId: E(182), note: 'What is actually said out loud in France.', en: 'an email' },
        { fr: 'ça bugue', itemId: E(213), note: 'Familiar. Never write it to a bank.', en: "it's playing up" },
        { fr: 'mon ordi rame', itemId: E(214), note: 'Ordi is ordinateur with the end bitten off.', en: 'my computer is crawling' },
        { fr: 'cliquer', itemId: 'fr.a2.internet.086', note: 'This one is the same in all three voices.', en: 'to click' },
      ],
      check: {
        q: 'Which of these could you say to any of the three?',
        opts: ['ça bugue', 'cliquer', 'Veuillez patienter'],
        correct: 1,
        why: 'Most of the lexicon is neutral. Only some words carry a voice, and those are the ones worth knowing.',
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voice'],
};

/** THE LADDER AS RECALL. English referent on the front, all three French forms
 *  on the back, tagged by voice. */
const S10_RECALL: LessonSection = {
  type: 'flashcards',
  id: 's10-recall',
  frSub: "Trois noms, depuis l'anglais",
  layer: 'core',
  title: 'Three names, from the English',
  cards: [
    { front: 'an email', back: `${VOICE_SYSTEM} une adresse électronique · ${VOICE_AGENT} un courriel · ${VOICE_FRIEND} un mail`, say: 'une adresse électronique, un courriel, un mail' },
    { front: 'a computer', back: 'un ordinateur everywhere · mon ordi to a friend', say: 'un ordinateur, mon ordi' },
    { front: 'it is broken', back: `${VOICE_AGENT} il y a une panne · ${VOICE_FRIEND} ça bugue`, say: 'il y a une panne, ça bugue' },
    // NOT the smartphone pair. The first draft had `un téléphone intelligent`
    // here and that is a SECOND card naming a Quebec form, which C3 rule 2
    // caps at one per unit. The one is the map's regional card. This is a
    // vous/tu contrast instead, which is the same Owns in the axis this
    // lesson actually scores.
    { front: 'have you tried restarting it', back: `${VOICE_AGENT} vous avez essayé de redémarrer · ${VOICE_FRIEND} t'as essayé de le redémarrer`, say: "vous avez essayé de redémarrer, t'as essayé de le redémarrer" },
    { front: 'to log in', back: 'se connecter in all three voices', say: 'se connecter' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voice'],
};

/** THE AUTOMATED PHONE MENU, AND THE MOST LIFTABLE THING IN THE BAND.
 *
 *  §3.2 obligation 1: every listening line must STAND ALONE without this
 *  lesson's framing, so a2.35 can lift it into a mixed-situation CO set. A
 *  phone menu needs no setup at all. A test asserts that no line here
 *  references a section, a mission number or an earlier card.
 *
 *  TEF/TCF CO PLAYS EACH RECORDING ONCE, so every question asks WHAT TO PRESS,
 *  never what the third option was. Every question carries a `why`. */
const S11_MENU: LessonSection = {
  type: 'listening',
  id: 's11-menu',
  frSub: "Le menu enregistré",
  layer: 'core',
  hideLines: true,
  title: 'The recorded menu',
  lines: [
    { fr: 'Bienvenue au service technique.', en: 'Welcome to technical support.' },
    { fr: 'Pour un problème de connexion, tapez 1.', en: 'For a connection problem, press 1.' },
    { fr: 'Pour un mot de passe oublié, tapez 2.', en: 'For a forgotten password, press 2.' },
    { fr: 'Pour parler à un technicien, tapez 3.', en: 'To speak to a technician, press 3.' },
    { fr: 'Pour réécouter ce menu, tapez 9.', en: 'To hear this menu again, press 9.' },
  ],
  questions: [
    {
      q: 'Your password is refused. Which number?',
      opts: ['1', '2', '3'],
      correct: 1,
      why: 'Oublié is the word to listen for. A refused password and a forgotten one go to the same place.',
    },
    {
      q: 'You want a person, not a machine. Which number?',
      opts: ['3', '9', '1'],
      correct: 0,
      why: 'Parler à is the giveaway. It is the only option with a human being at the end of it.',
    },
    {
      q: 'You missed it. What do you press?',
      opts: ['1', '2', '9'],
      correct: 2,
      why: 'Réécouter is re plus écouter, to listen again. Nine is where menus usually put it.',
    },
    {
      q: 'The wifi is down at your flat. Which number?',
      opts: ['2', '1', '3'],
      correct: 1,
      why: 'Connexion. Not a technician yet: option 3 is for when the first one has not fixed it.',
    },
    {
      q: 'How many times will it say all this?',
      opts: ['once, unless you ask again', 'twice automatically', 'until you press something'],
      correct: 0,
      why: 'Once. That is why option 9 exists, and it is exactly what a listening exam does to you.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['menu', 'invisible'],
};

/** THE PORTAL NOTICE. A short service-unavailable notice of the kind a
 *  government portal posts, with a tappable `glossary` on the hard words.
 *
 *  `questionsInModal: true`: the passage holds the screen and the questions
 *  follow on a second page, so the learner cannot pattern-match against
 *  visible text. TEF/TCF CE.
 *
 *  IT CARRIES THE IMMIGRATION RELEVANCE WITHOUT COLLIDING with a2.29's
 *  booking or a2.26's payment: nothing is reserved and nothing is paid for.
 *
 *  A glossary KEY is matched against the passage's own tokens by the real
 *  `segmentSentence`, and `glossary-resolves.test.ts` reads the whole seed for
 *  exactly this. Every key below appears in `text` verbatim. */
const S12_NOTICE: LessonSection = {
  type: 'reading',
  id: 's12-notice',
  frSub: "L'avis du portail",
  layer: 'core',
  questionsInModal: true,
  title: 'The notice on the portal',
  text: "AVIS AUX USAGERS. En raison d'une maintenance, le service de demande en ligne est indisponible du vendredi 18 h au lundi 8 h. Pendant cette période, il n'est pas possible de créer un compte ni de déposer un dossier. Les dossiers déjà déposés sont conservés et seront traités normalement. Si vous avez reçu un code de vérification avant le vendredi 18 h, ce code reste valable pendant sept jours. Pour toute question urgente, veuillez appeler le 3939 du lundi au vendredi. Nous vous remercions de votre compréhension.",
  glossary: [
    { word: 'indisponible', en: 'unavailable', note: 'The word a French service uses instead of down. It says nothing about why.' },
    { word: 'maintenance', en: 'maintenance', note: 'Borrowed straight from English, and pronounced the French way: [mehⁿ-tuh-NAHⁿSS].' },
    { word: 'déposer', en: 'to submit, to file', note: 'Literally to put down. It is the verb every French administration uses for handing in a file.' },
    { word: 'un dossier', en: 'a file, an application', note: 'The whole bundle of papers about you. Not a folder on a computer, in this sentence.' },
    { word: 'conservés', en: 'kept', note: 'Nothing you already sent has been lost. This is the sentence people miss.' },
    { word: 'valable', en: 'valid', note: 'Still good, still usable. A ticket, a code and a passport are all valable.' },
    { word: 'usagers', en: 'users', note: 'What a public service calls the people who use it. A shop would say clients.' },
    { word: 'compréhension', en: 'understanding', note: 'The closing formula. It means the notice is over, not that anything will be explained.' },
  ],
  questions: [
    { q: 'You started an application on Thursday. Is it still there?', a: 'Yes. Les dossiers déjà déposés sont conservés, and they will be processed as normal.' },
    { q: 'It is Saturday afternoon. Can you create an account?', a: 'No. The outage runs from Friday 18h to Monday 8h, and creating an account is named as one of the two things you cannot do.' },
    { q: 'Your verification code arrived on Thursday evening. Is it dead?', a: 'No. A code received before Friday 18h stays valid for seven days.' },
    { q: 'It is genuinely urgent and it is Saturday. What does the notice offer?', a: 'The 3939 number, but only Monday to Friday. So on a Saturday the notice offers nothing at all, which it does not say out loud.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['screen', 'invisible'],
};

/** §7.1 SECOND REQUIRED LAYOUT: the support call's phrasing and the friend's
 *  phrasing SIDE BY SIDE, the same fault in two voices, in ONE section.
 *
 *  This is the mission act 2 gave up. The prompt offers a second `groupDrill`
 *  or a ladder-past-mail deck for the slot; neither of those satisfies this
 *  layout or the §10 assertion that goes with it, and nothing else in the
 *  lesson does either. Two `scenario` sections are consecutive missions, not a
 *  side-by-side pair.
 *
 *  BOTH SIDES ARE FRANCE-STANDARD. This is a `vous`/`tu` contrast, not a
 *  regional one, so it is not a second Quebec card. */
const S13_PAIRS: LessonSection = {
  type: 'cardDeck',
  id: 's13-pairs',
  frSub: "La même panne, deux fois",
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'The same fault, twice',
  hint: 'Top line to the agent. Bottom line to your friend. Same screen both times.',
  cards: [
    {
      label: 'it stopped working',
      head: `${VOICE_AGENT} Ça ne marche plus depuis hier.`,
      fr: `${VOICE_FRIEND} Ça bugue depuis hier.`,
      sub: '[sa BÜG duh-pwee YEHR]',
      body: 'Bugue is fine with a friend and wrong with an agent. Marcher is safe with both.',
    },
    {
      label: 'it is slow',
      head: `${VOICE_AGENT} Mon ordinateur est très lent.`,
      fr: `${VOICE_FRIEND} Mon ordi rame.`,
      sub: '[mohⁿ nor-dee RAM]',
      body: 'Two words shorter and two registers down. Ordi is ordinateur with the end bitten off.',
    },
    {
      label: 'I will send it',
      head: `${VOICE_AGENT} Je vous envoie ça par courriel.`,
      fr: `${VOICE_FRIEND} Je te l'envoie par mail.`,
      sub: "[zhuh tuh lahⁿ-VWA par MEL]",
      body: 'Vous and courriel travel together. Tu and mail travel together. Mixing them is the error.',
    },
    {
      label: 'have you tried restarting',
      head: `${VOICE_AGENT} Vous avez essayé de redémarrer ?`,
      fr: `${VOICE_FRIEND} T'as essayé de le redémarrer ?`,
      sub: '[ta ay-say-YAY duh luh ruh-day-ma-RAY]',
      body: "T'as is tu as, said fast. Write it out to an agent and it reads as a text message.",
    },
    {
      label: 'can you send me a screenshot',
      head: `${VOICE_AGENT} Pouvez-vous m'envoyer une capture ?`,
      fr: `${VOICE_FRIEND} Tu peux m'envoyer une capture ?`,
      sub: '[tü peu mahⁿ-vwa-YAY ün kap-TÜR]',
      body: 'The words barely change. The pronoun does all the work, and it does all of it.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voice', 'invisible'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT IV — LE PIÈGE
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE STEPPED SHAPE ONLY: `rule` > cards > audio > gated drill, with `swipe`,
 *  an `audio` spec and a `say`. The stacked shape hides the gate, the audio
 *  and the sub-mission number. `size` comes OFF a stepped trapDrill.
 *
 *  TWO TRAPS IN ONE DRILL:
 *    (i)  is the screen telling you to do something, or describing what you did
 *    (ii) register mismatch: which of these would you say to a support agent
 *
 *  NOTE (i) IS A COMPREHENSION QUESTION, NOT A FORM QUESTION. The learner is
 *  never asked to build a form and no card states how one is made. What
 *  separates the two columns here is what is on screen and what it is for, and
 *  every tip says so in those terms. */
const S14_TRAP: LessonSection = {
  type: 'trapDrill',
  id: 's14-trap',
  frSub: "Un ordre, ou une nouvelle",
  layer: 'core',
  swipe: true,
  title: 'A job, or just the news',
  rule: {
    title: 'A screen only ever wants two things',
    body: 'It wants you to do something, or it is reporting what already happened. Those two look alike on a small grey line and they need completely different reactions. One is a job. The other is news.',
  },
  cards: [
    { promptLabel: 'A button you have not pressed yet', promptSound: 'Votre code a été envoyé', fr: 'Saisissez votre code', ipa: '/se.zi.se vɔtʁ kɔd/', tip: 'This one is a job. There is an empty box and it is waiting for you.' },
    { promptLabel: 'Grey text under the box', promptSound: 'Saisissez votre code', fr: 'Votre code a été envoyé', ipa: '/vɔtʁ kɔd a e.te ɑ̃.vwa.je/', tip: 'This one is news. It has already happened and there is nothing to press.' },
    // NO U+203F TIE, in these two or anywhere else. The convention says carry
    // the liaison tie through from the IPA; the band bans it because it
    // renders as a low underscore on a Pixel 6 and is live in shipped sons.10
    // content. The moving consonant is written onto the following syllable
    // instead, which is what a2.31 did.
    { promptLabel: 'The page will not go on', promptSound: 'Une option a été sélectionnée', fr: 'Sélectionnez une option', ipa: '/se.lɛk.sjɔ.ne y.nɔp.sjɔ̃/', tip: 'A job. Nothing is chosen yet, which is why it is still on this page.' },
    { promptLabel: 'You said mail to your bank', promptSound: 'Je vous envoie ça par mail.', fr: 'Je vous envoie ça par courriel.', ipa: '/ʒə vu.zɑ̃.vwa sa paʁ ku.ʁjɛl/', tip: 'Vous and courriel travel together. Mail with vous is the mismatch.' },
    { promptLabel: 'You said courriel to a friend', promptSound: "Je te l'envoie par courriel.", fr: "Je te l'envoie par mail.", ipa: '/ʒə tə lɑ̃.vwa paʁ mɛl/', tip: 'Tu and mail travel together. Courriel with tu makes you sound like their bank.' },
  ],
  drill: [
    { promptSay: 'Veuillez patienter', opts: ['it wants something', 'it is reporting'], correct: 1 },
    { promptSay: 'Appuyez sur Entrée', opts: ['it wants something', 'it is reporting'], correct: 0 },
    { promptSay: 'Votre demande a été enregistrée', opts: ['it wants something', 'it is reporting'], correct: 1 },
    { promptSay: 'Cliquez sur le lien', opts: ['it wants something', 'it is reporting'], correct: 0 },
    { promptSay: 'Bonjour, je vous envoie une capture par courriel.', opts: ['to an agent', 'to a friend'], correct: 0 },
    { promptSay: "Salut, je te l'envoie par mail.", opts: ['to an agent', 'to a friend'], correct: 1 },
  ],
  steps: [
    { label: 'The rule', kind: 'rule', title: 'A job, or the news' },
    { label: 'Five screens', kind: 'cards', title: 'What the line is doing' },
    { label: 'Hear them', kind: 'audio', title: 'Wrong and right, side by side' },
    { label: 'Now you sort them', kind: 'drill', title: 'Six in a row', gate: true },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['screen', 'voice'],
};

/** MARKED IN BOTH DIRECTIONS, which no other unit in the band can say.
 *
 *  `swipe: true` IS MANDATORY. Three shipped lessons omit it and lose the
 *  deck; `MissionSection.tsx` branches on `commonErrors` with `swipe: true`
 *  only. Pinned by the batch and by the test.
 *
 *  Each `why` explains why the wrong version was a reasonable thing to have
 *  said. That is the difference between a correction and a telling-off.
 *
 *  The sixth card the design wanted (a statement used as an instruction)
 *  belonged to a paradigm this lesson does not have, and it is gone with it. */
const S15_ERRORS: LessonSection = {
  type: 'commonErrors',
  id: 's15-errors',
  frSub: "Marqué des deux côtés",
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Marked in both directions',
  errors: [
    {
      wrong: 'Je vous envoie mon email. (to an agent in Montreal)',
      right: 'Je vous envoie mon courriel.',
      why: 'Reasonable, because email is what half the internet says and nobody in France would blink. In Quebec courriel is the ordinary word and the borrowed one reads as careless.',
    },
    {
      wrong: 'Envoie-moi un courriel. (to a friend in Paris)',
      right: 'Envoie-moi un mail.',
      why: 'Reasonable, because courriel is the official term and being correct is usually safe. Here it is not: it is the word their bank uses and it lands as a joke.',
    },
    {
      wrong: 'Je vais downloader le fichier.',
      right: 'Je vais télécharger le fichier.',
      why: 'Reasonable, because French really did take cliquer, scanner and zoomer the same way. This one it did not: télécharger arrived first and holds the ground completely.',
    },
    {
      wrong: 'Mon computer ne marche pas.',
      right: 'Mon ordinateur ne marche pas.',
      why: 'Reasonable, because so many device words came straight across. Ordinateur is the one French built itself, and it is the borrowing that never happened.',
    },
    {
      wrong: 'Ça marche pas. (to a support agent)',
      right: 'Ça ne marche pas.',
      why: 'Reasonable, because everybody drops the ne out loud and you will hear it dropped all day. On the phone to somebody official it is the one place the missing word is heard.',
    },
    {
      wrong: 'Mon mél ne marche pas. (to anybody, out loud)',
      right: 'Mon mail ne marche pas.',
      why: 'Reasonable, because mél is printed on French forms next to Tél. It is an abbreviation for writing, not a word for saying, and said aloud it is the same sound as mail anyway.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voice', 'borrowed'],
};

/** WRITE WHAT THE MACHINE SAID.
 *
 *  Every id names a row carrying the `dictation` drill, CHECKED AGAINST
 *  POSTGRES AND NOT THE SEED. All five are rows this build authored, because
 *  the machine's voice did not exist to import.
 *
 *  ALL FIVE RESOLVE TO WORD MODE through the real `dicteeMode`, asserted in
 *  the batch. That is the mode this mission wants: the question is which words
 *  the machine used and in what order, which is the chunk being tested as a
 *  chunk rather than spelled out.
 *
 *  §7.4 RULE 1: not one of them contains a hyphen. `Connectez-vous` and
 *  `connectez vous` are one string to the check, so a tile exercise built on a
 *  hyphen cannot be got right or wrong. */
const S16_DICTEE: LessonSection = {
  type: 'dictation',
  id: 's16-dictee',
  frSub: "Écrivez ce que dit la machine",
  layer: 'core',
  title: 'Write what the machine said',
  itemIds: DICTEE_IDS,
  audio: AUDIO,
  say: REFRAME,
  terms: ['screen'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT V — PRODUCTION
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE SUPPORT CALL, `vous`. THE AGENT CANNOT SEE THE SCREEN.
 *
 *  The turns force the learner to produce what happened, when it started, what
 *  they already tried and what the message said, AND TO ASK AS WELL AS REPORT
 *  (`C'est quoi, le délai ?`, `Je dois faire quoi maintenant ?`). TEF EO
 *  Section A scores elicitation, and a scenario where the learner only answers
 *  is not that task.
 *
 *  `alts` on every turn so more than one phrasing is accepted; `stt` scores
 *  against all of them, best match wins. `userEn` on every turn, or the reveal
 *  shows a French sentence the learner is told they should have said and
 *  cannot read.
 *
 *  MUST BE LIFTABLE BY a2.35 (§3.2 obligation 2): no turn here depends on
 *  anything earlier in this lesson, and a test asserts it.
 *
 *  NOTHING ESCALATES. a2.29 owns that. The agent is being asked for help, not
 *  pushed, and `parler au responsable` appears nowhere. */
const S17_CALL: LessonSection = {
  type: 'scenario',
  id: 's17-call',
  frSub: "Au téléphone avec le service",
  layer: 'core',
  title: 'On the phone to support',
  setting: 'A support line, early evening. She has your account open and she cannot see your screen.',
  turns: [
    {
      ai: 'Service technique, bonjour. Quel est le problème ?',
      en: 'Technical support, hello. What is the problem?',
      user: 'Bonjour. Le site refuse mon mot de passe.',
      userEn: 'Hello. The site is rejecting my password. (What happened, in one sentence)',
      alts: [
        { fr: "Bonjour. Je n'arrive pas à me connecter.", en: 'Hello. I cannot log in.' },
        { fr: 'Bonjour. Mon compte est bloqué, je crois.', en: 'Hello. My account is locked, I think.' },
      ],
    },
    {
      ai: "Depuis quand est-ce que ça ne marche plus ?",
      en: 'How long has it not been working?',
      user: "Ça s'est bloqué ce matin.",
      userEn: 'It froze this morning. (When)',
      alts: [
        { fr: 'Ça fait deux jours que ça ne marche plus.', en: 'It has not worked for two days.' },
        { fr: 'Depuis hier soir, vers vingt-deux heures.', en: 'Since last night, around ten.' },
      ],
    },
    {
      ai: "Qu'est-ce qui s'affiche exactement à l'écran ?",
      en: 'What exactly is showing on the screen?',
      user: 'Le message dit que le code a expiré.',
      userEn: 'The message says the code has expired. (What the screen said, in its words)',
      alts: [
        { fr: "L'écran affiche un message d'erreur.", en: 'The screen is showing an error message.' },
        { fr: "Il y a écrit « Réessayez plus tard ».", en: 'It says "Try again later".' },
      ],
    },
    {
      ai: "Vous avez essayé de redémarrer l'appareil ?",
      en: 'Have you tried restarting the device?',
      user: "J'ai déjà essayé de redémarrer.",
      userEn: 'I have already tried restarting it. (What you tried, before she suggests it again)',
      alts: [
        { fr: "Oui, deux fois, et c'est pareil.", en: 'Yes, twice, and it is the same.' },
        { fr: "Non, pas encore. Je le fais maintenant ?", en: 'No, not yet. Shall I do it now?' },
      ],
    },
    {
      ai: 'Je vais vérifier votre compte, ne quittez pas.',
      en: 'I am going to check your account, please hold.',
      user: "D'accord. C'est quoi, le délai ?",
      userEn: 'All right. How long will it take? (Now you ask. This is the turn the exam scores)',
      alts: [
        { fr: "D'accord. Ça prend combien de temps ?", en: 'All right. How long does that take?' },
        { fr: "Très bien. Je peux rester en ligne ?", en: 'Fine. Can I stay on the line?' },
      ],
    },
    {
      ai: 'Votre code arrive dans deux minutes par courriel.',
      en: 'Your code will arrive in two minutes by email.',
      user: 'Merci. Je dois faire quoi maintenant ?',
      userEn: 'Thank you. What do I need to do now? (Ask again. Never leave with only half of it)',
      alts: [
        { fr: "Merci. Et si je ne le reçois pas ?", en: 'Thank you. And if I do not get it?' },
        { fr: "Merci beaucoup. Je le saisis où, exactement ?", en: 'Thank you. Where exactly do I enter it?' },
      ],
    },
    {
      ai: 'Cliquez sur le lien dans le courriel, puis saisissez le code.',
      en: 'Click the link in the email, then enter the code.',
      user: "Très bien. Merci de votre aide, bonne soirée.",
      userEn: 'Very good. Thank you for your help, have a good evening. (Close it properly)',
      alts: [
        { fr: "Parfait, merci beaucoup. Bonne soirée.", en: 'Perfect, thank you very much. Have a good evening.' },
        { fr: "D'accord, c'est noté. Merci, au revoir.", en: 'All right, got it. Thank you, goodbye.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['invisible', 'voice'],
};

/** THE SAME FAULT TOLD TO A FRIEND, `tu`. THE CONTRAST IS THE OWNS BEING
 *  PRODUCED.
 *
 *  Same content, other voice: mail not courriel, ça bugue not cela
 *  dysfonctionne, ordi not ordinateur.
 *
 *  TWO `scenario` SECTIONS IN ONE LESSON: the device check RAN and PASSED
 *  (`46-DEVICE-CHECK-RESULTS.md`, Pixel 6, 2026-08-16), and it names this unit
 *  as released. The `cardDeck` degradation is not taken. */
const S18_FRIEND: LessonSection = {
  type: 'scenario',
  id: 's18-friend',
  frSub: "Le même soir, à un ami",
  layer: 'core',
  title: 'The same evening, to a friend',
  setting: 'A message thread with somebody you went to school with. Same locked account, twenty minutes later.',
  turns: [
    {
      ai: 'Salut, ça va ? Tu as l\'air énervé.',
      en: 'Hi, you all right? You seem annoyed.',
      user: "Salut. Le site de la banque, ça bugue depuis ce matin.",
      userEn: 'Hi. The bank site has been playing up since this morning. (Same fault, other voice)',
      alts: [
        { fr: 'Salut. Mon compte est bloqué, ça me rend fou.', en: 'Hi. My account is locked, it is driving me mad.' },
        { fr: 'Ça va. Enfin, le site de la banque marche pas.', en: 'I am fine. Well, the bank site is not working.' },
      ],
    },
    {
      ai: "T'as essayé de le redémarrer ?",
      en: 'Have you tried restarting it?',
      user: "Ouais, deux fois. Mon ordi rame aussi, en plus.",
      userEn: 'Yeah, twice. My computer is crawling as well, on top of that.',
      alts: [
        { fr: 'Oui, évidemment. Ça change rien.', en: 'Yes, obviously. It makes no difference.' },
        { fr: 'Pas encore. Tu crois que ça peut marcher ?', en: 'Not yet. You think that might work?' },
      ],
    },
    {
      ai: 'Ça me le fait aussi depuis hier. Ils ont une panne, je pense.',
      en: 'Mine has been doing it since yesterday too. They have an outage, I reckon.',
      user: "Ah, tu vois. J'ai appelé, ils m'ont rien dit.",
      userEn: 'Ah, there you go. I called and they told me nothing.',
      alts: [
        { fr: "Sérieux ? Bon, c'est pas moi alors.", en: 'Seriously? Right, it is not me then.' },
        { fr: "Ah ouais ? Ils ont rien dit au téléphone.", en: 'Oh yeah? They said nothing on the phone.' },
      ],
    },
    {
      ai: "Tu peux m'envoyer une capture d'écran ? Je regarde.",
      en: 'Can you send me a screenshot? I will have a look.',
      user: "Ouais, je te l'envoie par mail.",
      userEn: 'Yeah, I will send it to you by email. (mail, not courriel. He is not your bank)',
      alts: [
        { fr: 'Ok, je te fais ça tout de suite.', en: 'OK, I will do that right now.' },
        { fr: "Attends, je te l'envoie là.", en: 'Hang on, I am sending it now.' },
      ],
    },
    {
      ai: "Ok. Et ils t'ont dit quoi, au téléphone ?",
      en: 'OK. And what did they tell you, on the phone?',
      user: "De réessayer plus tard. Ça m'avance pas beaucoup.",
      userEn: 'To try again later. That does not get me very far.',
      alts: [
        { fr: "Rien d'utile. Juste d'attendre.", en: 'Nothing useful. Just to wait.' },
        { fr: "Que le code avait expiré. Super.", en: 'That the code had expired. Great.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voice', 'invisible'],
};

/** VOICEFLASH ON THE FAULT-DESCRIPTION PHRASES.
 *
 *  `practice` renders the SPEAKING drill whatever `skill` says, so `skill` is
 *  `'speak'` and the section is honest about what it is.
 *
 *  EVERY NAMED ITEM CARRIES THE `voiceflash` DRILL, checked against POSTGRES
 *  and not the seed. `technologie-quotidienne` has ZERO voiceflash rows at any
 *  level (measured: 0 of 196), so a section naming one of its rows would
 *  render a mic that scores nothing. Not one id here comes from that theme.
 *
 *  `practice` IS MANDATORY: `lesson-contract.test.ts:505` mirrors the publish
 *  gate and fails a non-assessment lesson with no practice, empty
 *  practice.itemIds, or empty Lesson.itemIds. */
const S19_SPEAK: LessonSection = {
  type: 'practice',
  id: 's19-speak',
  frSub: "Dites la panne à voix haute",
  layer: 'core',
  title: 'Say the fault out loud',
  skill: 'speak',
  itemIds: [
    // The fault itself, in both voices.
    E(199), E(200), E(201), E(202), E(203), E(205),
    E(213), E(214),
    // AND THE THINGS SHE ASKS YOU TO DO. These ten are the `voiceflash + review`
    // population that no deck can serve, so naming them here is what makes them
    // reachable at all. They are also the right content: half a support call is
    // the agent naming an action and you saying back that you did it.
    'fr.a2.rp-technologie.003',
    'fr.a2.internet.020',
    'fr.a2.internet.077', 'fr.a2.internet.078', 'fr.a2.internet.086',
    'fr.a2.internet.088', 'fr.a2.internet.093', 'fr.a2.internet.102',
    'fr.a2.internet.103', 'fr.a2.internet.107', 'fr.a2.internet.108',
    'fr.a2.internet.109',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['invisible'],
};

const S20_CHECK: LessonSection = {
  type: 'progressCheck',
  id: 's20-check',
  frSub: "Où vous en êtes",
  layer: 'core',
  title: 'Where you stand',
  body: 'You can do what a French screen tells you without translating it first, you can hear a recorded menu once and know which number to press, and you can describe a fault to somebody who has nothing to look at. The last thing is the one to check: when you said it to the agent and then said it again to your friend, did the words change? If they did not, the lesson has not landed yet, and the two conversations in act 5 are the place to go back to.',
  stats: [
    { k: 'Voices', v: 'three, one device' },
    { k: 'Screen strings', v: 'six, learned whole' },
    { k: 'Heard once', v: 'a menu and four prompts' },
    { k: 'Told twice', v: 'vous, then tu' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT VI — L'EXAMEN
 * ══════════════════════════════════════════════════════════════════════════ */

/** ONE QUIZ. A second `quiz` section is silently never rendered.
 *
 *  Four rounds of eight. Every question carries `why` AND `ref`.
 *
 *  WHAT NO QUESTION HERE TURNS ON, because fold() strips all of it: an accent,
 *  a cedilla, a comma, a capital, a HYPHEN, an apostrophe or a word division.
 *  `e-mail` against `email` is one answer and `mot de passe` written as one
 *  word is one answer, and both are natural distractors that are dead.
 *
 *  AND NO QUESTION BUILDS A FORM FROM AN INFINITIVE, because act 2 has no
 *  paradigm. The register round tests WHICH VOICE A FORM BELONGS TO, which is
 *  a judgement that works in both countries.
 *
 *  THE FRANCE-STANDARD FORM IS THE KEY OF EVERY SCORED REGISTER QUESTION. No
 *  mcq answer, typeIn accept entry or dictée target is a Quebec-only form.
 *
 *  The quiz SHUFFLES its options at runtime, so nothing here is
 *  hand-randomised. */
const S21_QUIZ: LessonSection = {
  type: 'quiz',
  id: 's21-quiz',
  frSub: "L'examen",
  layer: 'core',
  title: 'The exam',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-voices',
      label: 'Which voice is that',
      targets: ['wrong-voice'],
      questions: [
        { format: 'mcq', q: 'A French friend, out loud, in a café. Which one?', opts: ['un courriel', 'un mail', 'une adresse électronique'], correct: 1, why: 'Mail is what is said in France. The other two are correct French and both sound like paperwork here.', ref: 's03-voices' },
        { format: 'mcq', q: 'A support agent in Montreal, on the phone. Which one?', opts: ['un courriel', 'un email', 'un mél'], correct: 0, why: 'Courriel is the ordinary word in Quebec and it is never wrong with an agent anywhere.', ref: 's03-voices' },
        { format: 'mcq', q: 'A government form, printed, with a box next to it. Which one?', opts: ['un mail', 'une adresse électronique', 'ça bugue'], correct: 1, why: 'What something written calls it. Nobody says the four syllables out loud unless they are reading them.', ref: 's03-voices' },
        { format: 'mcq', q: 'Which of these is wrong in BOTH directions?', opts: ['saying redémarrer to anyone', 'saying cliquer to anyone', 'the mail and courriel choice'], correct: 2, why: 'Mail in Montreal is marked, and courriel to a Paris friend is marked the other way. Most of the lexicon carries no voice at all.', ref: 's03-voices' },
        { format: 'mcq', q: '« Mon ordi rame. » Who are you talking to?', opts: ['a technician you have never met', 'a bank', 'a friend'], correct: 2, why: 'Ordi is a clipped word and ramer is familiar. Both are fine with a friend and neither belongs on a support line.', ref: 's13-pairs' },
        { format: 'listenChoose', q: 'Listen. Who is speaking?', say: 'Votre code arrive dans deux minutes par courriel.', opts: ['a machine', 'a friend', 'an agent'], correct: 2, why: 'A person, using vous and the official word. A machine would not say votre code arrive, and a friend would have said mail.', ref: 's09-sort' },
        { format: 'listenChoose', q: 'Listen. Who is speaking?', say: 'Veuillez patienter', opts: ['a machine', 'an agent', 'a friend'], correct: 0, why: 'Veuillez is the politest opening in French and almost nobody uses it out loud. On a screen it is ordinary.', ref: 's09-sort' },
        { format: 'typeIn', q: 'You are texting a French friend about an email. Write the word, with its article.', answer: 'un mail', accept: ['un mail', 'le mail', 'mail'], why: 'The France-standard spoken form, and the one this lesson scores. Courriel would be correct French and the wrong voice.', ref: 's03-voices' },
      ],
    },
    {
      id: 'r2-screen',
      label: 'What the screen wants',
      targets: ['reads-screen-as-news'],
      questions: [
        { format: 'mcq', q: '« Veuillez patienter ». What do you do?', opts: ['type something', 'nothing', 'press Enter'], correct: 1, why: 'It is working and it is asking you for nothing. Pressing anything now starts it over.', ref: 's04-screen' },
        { format: 'mcq', q: '« Sélectionnez une option ». What is on the screen?', opts: ['a list', 'an error', 'an empty box'], correct: 0, why: 'An option is one of several, so several are showing. That is usually why the page will not go on.', ref: 's04-screen' },
        { format: 'mcq', q: '« Cliquez sur le lien ». Where is the link, usually?', opts: ['at the top of this page', 'in the settings', 'in a message it just sent you'], correct: 2, why: 'Almost always in the mail or the text that arrived a second ago, not on the page you are reading.', ref: 's05-strings' },
        { format: 'mcq', q: 'Which of these is the screen reporting rather than asking?', opts: ['Saisissez votre code', 'Appuyez sur Entrée', 'Votre code a été envoyé'], correct: 2, why: 'It has already happened and there is nothing to press. The other two are jobs with something waiting.', ref: 's14-trap' },
        { format: 'mcq', q: '« Réessayez plus tard ». How much later?', opts: ['it does not say', 'ten minutes', 'twenty-four hours'], correct: 0, why: 'It never says, and that is the complaint everybody has about it. Plus tard is as precise as it gets.', ref: 's04-screen' },
        { format: 'listenChoose', q: 'Listen. What does it want you to do?', say: 'Saisissez votre code', opts: ['wait', 'type something', 'choose from a list'], correct: 1, why: 'Saisir is what a form does with a value it takes in. There is a box and it is empty.', ref: 's07-heard' },
        { format: 'typeIn', q: 'The screen wants you to wait. Write the two words it uses.', answer: 'Veuillez patienter', accept: ['veuillez patienter'], why: 'The politest thing a machine says, and the one that asks for the least.', ref: 's05-strings' },
        { format: 'typeIn', q: 'The screen wants your code. Write the three words it uses.', answer: 'Saisissez votre code', accept: ['saisissez votre code'], why: 'Saisir belongs to forms and to almost nothing else. It is why the string is worth learning whole.', ref: 's05-strings' },
      ],
    },
    {
      id: 'r3-fault',
      label: 'Describing what they cannot see',
      targets: ['fault-too-vague'],
      questions: [
        { format: 'mcq', q: 'The agent cannot see your screen. Which sentence is worth saying?', opts: ['Ça ne marche pas.', 'Le site refuse mon mot de passe.', "Il y a un problème."], correct: 1, why: 'All three are true. Only one of them tells somebody with nothing to look at what actually happened.', ref: 's01-scene' },
        { format: 'mcq', q: 'She asks « Depuis quand ? ». What is she after?', opts: ['when it started', 'what you tried', 'what it says'], correct: 0, why: 'Depuis is a starting point. She wants the time, and it is one of the four things a support call always needs.', ref: 's17-call' },
        { format: 'mcq', q: 'Which of these four does a support call always need?', opts: ['what the message said', 'the name of your device', 'how much it cost'], correct: 0, why: 'What happened, when, what you already tried, and what the screen said. The exact wording of the message is the one people leave out.', ref: 's17-call' },
        { format: 'mcq', q: 'You have already restarted it. When do you say so?', opts: ['before she asks', 'when she asks you to restart it', 'not at all'], correct: 0, why: 'Say it up front and you save the two minutes she was going to spend asking. It is one of the four.', ref: 's17-call' },
        { format: 'listenChoose', q: 'Listen. Which number do you press?', say: 'Pour parler à un technicien, tapez 3.', opts: ['1', '3', '9'], correct: 1, why: 'Parler à is the giveaway. It is the only option on that menu with a person at the end of it.', ref: 's11-menu' },
        { format: 'typeIn', q: 'It stopped working this morning. Write it, starting with Ça.', answer: "Ça s'est bloqué ce matin", accept: ["Ça s'est bloqué ce matin", 'Ca sest bloque ce matin', "ça s'est bloqué ce matin."], why: 'Bloqué is what people actually say about a screen that stopped. It is more use to her than ne marche pas.', ref: 's17-call' },
        { format: 'errorSpot', q: 'Too vague for somebody who cannot see it. Write a sentence she can use.', prompt: 'Ça ne marche pas.', answer: 'Le site refuse mon mot de passe.', accept: ['Le site refuse mon mot de passe.', 'Le site refuse mon mot de passe'], why: 'Name the thing and name what it did. The correction is not grammar, it is how much of the screen the sentence carries.', ref: 's01-scene' },
        { format: 'errorSpot', q: 'She needs the words on the screen, not your reading of them. Write it out.', prompt: "L'ordinateur est cassé.", answer: 'Le message dit que le code a expiré.', accept: ['Le message dit que le code a expiré.', 'Le message dit que le code a expiré'], why: 'Cassé is a guess about the cause. What the message said is a fact, and it is the one she can act on.', ref: 's17-call' },
      ],
    },
    {
      id: 'r4-mismatch',
      label: 'The register mismatch',
      targets: ['wrong-voice'],
      questions: [
        { format: 'errorSpot', q: 'Right words, wrong person. This went to a Paris friend. Write it out.', prompt: "Je t'envoie ça par courriel.", answer: "Je t'envoie ça par mail.", accept: ["Je t'envoie ça par mail.", "Je t'envoie ça par mail"], why: 'Tu and mail travel together. Courriel with tu is the word their bank would have used.', ref: 's13-pairs' },
        { format: 'errorSpot', q: 'This went to a support agent. Write it out.', prompt: 'Ça bugue depuis hier.', answer: 'Ça ne marche plus depuis hier.', accept: ['Ça ne marche plus depuis hier.', 'Ça ne marche plus depuis hier'], why: 'Bugue is fine with a friend and reads as a text message on a support line. Marcher is safe with both.', ref: 's13-pairs' },
        { format: 'errorSpot', q: 'On the phone to somebody official. One word is missing. Write it out.', prompt: 'Ça marche pas.', answer: 'Ça ne marche pas.', accept: ['Ça ne marche pas.', 'Ça ne marche pas'], why: 'Everybody drops the ne out loud. On a call to somebody official it is the one place it is heard missing.', ref: 's15-errors' },
        { format: 'mcq', q: 'Which pair belongs together?', opts: ['vous and mail', 'tu and courriel', 'vous and courriel'], correct: 2, why: 'The pronoun and the word for email move as a set. Getting one right and the other wrong is the whole error.', ref: 's13-pairs' },
        { format: 'mcq', q: 'You wrote « Je vais downloader le fichier ». What is wrong with it?', opts: ['French took cliquer but not this one', 'downloader is not a real word anywhere', 'it is too formal'], correct: 0, why: 'It was a reasonable guess: French really did take cliquer, scanner and zoomer. Télécharger got there first and holds the ground.', ref: 's15-errors' },
        // ASKED THE OTHER WAY ROUND ON PURPOSE. The first draft made `un mél`
        // the key, and C3 rule 1 says the scored answer is always the France
        // spoken standard. The knowledge tested is identical and the key is
        // now the form a learner should produce.
        { format: 'mcq', q: 'A French form has a box marked « Mél ». Out loud, people call that', opts: ['un mél', 'un courriel', 'un mail'], correct: 2, why: 'Mél is an abbreviation for writing, the one printed next to Tél. Nobody says it, and said aloud it is the same sound as mail anyway.', ref: 's15-errors' },
        { format: 'listenChoose', q: 'Listen. Is this for an agent or a friend?', say: "Salut, je te l'envoie par mail.", opts: ['an agent', 'a friend'], correct: 1, why: 'Salut, tu and mail all point the same way. Any one of the three would have settled it.', ref: 's14-trap' },
        { format: 'typeIn', q: 'Your computer is slow. Say it to a FRIEND, in three words.', answer: 'mon ordi rame', accept: ['mon ordi rame', 'Mon ordi rame'], why: 'Two words shorter than mon ordinateur est lent, and two registers down. To an agent you would use the long one.', ref: 's13-pairs' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** Leitner close ON THE LADDER, which is the Owns. Not a summary of the band. */
const S22_REVIEW: LessonSection = {
  type: 'reviewDeck',
  id: 's22-review',
  frSub: "Trois voix, une dernière fois",
  layer: 'core',
  title: 'Three voices, one last time',
  cards: [
    { front: 'an email, on a printed form', back: 'une adresse électronique', say: 'une adresse électronique' },
    { front: 'an email, to a support agent', back: 'un courriel', say: 'un courriel' },
    { front: 'an email, to a friend in France', back: 'un mail', say: 'un mail' },
    { front: 'the screen wants you to wait', back: 'Veuillez patienter', say: 'Veuillez patienter' },
    { front: 'the screen wants your code', back: 'Saisissez votre code', say: 'Saisissez votre code' },
    { front: 'it stopped working this morning', back: "Ça s'est bloqué ce matin.", say: "Ça s'est bloqué ce matin." },
    { front: 'what the message said', back: 'Le message dit que le code a expiré.', say: 'Le message dit que le code a expiré.' },
    { front: 'it is playing up, to a friend', back: 'ça bugue', say: 'ça bugue' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** THE REFRAME ONE LAST TIME, PLUS THE HAND-OFF TO a2.35.
 *
 *  NOT A SUMMARY OF THE BAND. Doctrine §B.5: a lesson owns one thing, and a
 *  consolidation act across the other seven would be a ninth unit hiding
 *  inside the eighth. There is no review-of-the-band act, no cross-situation
 *  roundup and no quiz round drawn from another unit's content. BEING LAST IS
 *  A POSITION, NOT A JOB.
 *
 *  `points` is capped at FOUR on a core screen (`core-list-items`). */
const S23_ROUNDUP: LessonSection = {
  type: 'roundup',
  id: 's23-roundup',
  frSub: "Un appareil, trois voix",
  layer: 'core',
  title: 'One appareil, three voices',
  body: `${REFRAME} Every tech object in French has more than one name, and the name you pick says who you think is listening. That is the whole unit, and it is the one thing here that no other unit teaches. Next comes ${unitRef(BILAN_UNIT)}, where eight different situations arrive in one sitting and the only question that runs through all of them is the one this lesson asked: which voice does this one want?`,
  points: [
    'The screen orders, the agent asks, the friend talks. Same device.',
    'Six screen strings, learned whole. You never build one.',
    'They cannot see it: what happened, when, what you tried, what it said.',
    `Being too formal is safe everywhere else in this course. Here it is not.`,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voice'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REMEDIATION DRILLS
 *
 *  Deliberately NOT in `sections`: they are not part of the spine and a
 *  learner who never trips one never sees it.
 *
 *  `LessonDrill.format` is a LITERAL UNION, not string. The admin typecheck is
 *  the only check in this project that says so.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILLS: LessonDrill[] = [
  {
    id: 'd-voice',
    title: 'Who is listening',
    format: 'mcq' as const,
    coach: 'One object, three names. Pick the person first and the word second.',
    q: 'A friend in Lyon asks for your email address. Which word?',
    opts: ['un courriel', 'un mail', 'une adresse électronique'],
    correct: 1,
    why: 'Mail, out loud, in France. The other two are correct French and both sound like a form.',
    audio: AUDIO,
  },
  {
    id: 'd-screen',
    title: 'A job, or the news',
    format: 'sort' as const,
    coach: 'Two piles. One wants something from you. One is telling you what already happened.',
    buckets: ['it wants something', 'it is reporting'],
    items: [E(188), E(189), E(190), E(191), E(192), E(187)],
    audio: AUDIO,
  },
  {
    id: 'd-fault',
    title: 'The four things she needs',
    format: 'flashcard' as const,
    coach: 'What happened, when it started, what you already tried, what the message said.',
    items: [E(199), E(200), E(201), E(203)],
    audio: AUDIO,
  },
  {
    id: 'd-pair',
    title: 'The pronoun and the word move together',
    format: 'mcq' as const,
    coach: 'If you picked vous, you have already picked courriel. They travel as a set.',
    q: 'You have used vous all call. Now you mention email. Which one?',
    opts: ['mail', 'courriel', 'mél'],
    correct: 1,
    why: 'Vous and courriel. Switching to mail halfway is the mismatch this round exists for.',
    audio: AUDIO,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ══════════════════════════════════════════════════════════════════════════ */

export const SECTIONS: LessonSection[] = [
  S01_SCENE, S02_GOALS, S03_VOICES,
  S04_SCREEN, S05_STRINGS, S06_SETTINGS, S07_HEARD,
  S08_MAP, S09_SORT, S10_RECALL, S11_MENU, S12_NOTICE, S13_PAIRS,
  S14_TRAP, S15_ERRORS, S16_DICTEE,
  S17_CALL, S18_FRIEND, S19_SPEAK, S20_CHECK,
  S21_QUIZ, S22_REVIEW, S23_ROUNDUP,
];

/** Every id the lesson can put in front of a learner: what it authored, plus
 *  every id any section names, any deckTranche releases and any LessonDrill
 *  lists.
 *
 *  THE MERGE PULLS EVERY ONE OF THESE OUT OF POSTGRES, because `internet` held
 *  ZERO rows in `seed.json` and so did `rp-technologie`, `au-restaurant` and
 *  `hebergement`. This unit is the first in the product to pull a theme
 *  across. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...IMPORT_IDS])];

/** Tranches release every taught item exactly once and nothing untaught, and
 *  no tranche releases an item the acts before it have not shown. Act 1
 *  releases nothing: the scene teaches no vocabulary.
 *
 *  NOT ONE ID FROM `IMPORTED.screenVerbs` IS HERE. Those fourteen rows are
 *  `voiceflash + review` with no `flashcard`, so a release would be a line
 *  that validates, publishes and serves no card. They are reachable through
 *  `s09-sort` and `s19-speak` instead, and the batch asserts both directions. */
export const DECK_TRANCHE: string[][] = [
  // act 1 — the scene and the goals hand over nothing
  [],
  // act 2 — the machine's voice: the seven interface chunks and the lexicon
  // the settings screen and the tapTable draw on
  [
    E(187), E(188), E(189), E(190), E(191), E(192), E(193),
    'fr.a2.internet.001', 'fr.a2.internet.017', 'fr.a2.internet.019', 'fr.a2.internet.020',
    'fr.a2.internet.023', 'fr.a2.internet.024', 'fr.a2.internet.026', 'fr.a2.internet.027',
    'fr.a2.internet.028', 'fr.a2.internet.029', 'fr.a2.internet.058', 'fr.a2.internet.069',
    'fr.a2.internet.070', 'fr.a2.internet.071',
  ],
  // act 3 — THE OWNS: the three voices, the map, the menu, the notice, the pairs
  [
    E(182), E(183), E(184), E(185), E(186),
    E(194), E(195), E(196), E(197), E(198),
    E(213), E(214), E(215),
    'fr.a2.rp-technologie.012', 'fr.a2.rp-technologie.011',
    'fr.a2.internet.002', 'fr.a2.internet.003', 'fr.a2.internet.012', 'fr.a2.internet.013',
    'fr.a2.internet.014', 'fr.a2.internet.015', 'fr.a2.internet.016', 'fr.a2.internet.018',
    'fr.a2.internet.021', 'fr.a2.internet.022', 'fr.a2.internet.025', 'fr.a2.internet.030',
    'fr.a2.internet.031', 'fr.a2.internet.032', 'fr.a2.internet.033', 'fr.a2.internet.034',
    'fr.a2.internet.042', 'fr.a2.internet.043', 'fr.a2.internet.044', 'fr.a2.internet.045',
    'fr.a2.internet.046', 'fr.a2.internet.047', 'fr.a2.internet.048', 'fr.a2.internet.049',
    'fr.a2.internet.050', 'fr.a2.internet.052', 'fr.a2.internet.053', 'fr.a2.internet.054',
    'fr.a2.internet.055', 'fr.a2.internet.056', 'fr.a2.internet.059', 'fr.a2.internet.060',
    'fr.a2.internet.062', 'fr.a2.internet.063', 'fr.a2.internet.064', 'fr.a2.internet.065',
    'fr.a2.rp-technologie.032', 'fr.a2.rp-technologie.033',
  ],
  // act 4 — the trap and the errors: the fault lexicon
  [
    E(216), E(217), E(218),
    'fr.a2.rp-technologie.002', 'fr.a2.rp-technologie.003', 'fr.a2.rp-technologie.004',
    'fr.a2.rp-technologie.022', 'fr.a2.rp-technologie.024', 'fr.a2.rp-technologie.026',
    'fr.a2.rp-technologie.027', 'fr.a2.rp-technologie.028', 'fr.a2.rp-technologie.029',
    'fr.a2.rp-technologie.030',
    'fr.a2.internet.039', 'fr.a2.internet.041',
  ],
  // act 5 — production: the fault descriptions, the agent's half, the citations
  [
    E(199), E(200), E(201), E(202), E(203), E(204), E(205), E(206),
    E(207), E(208), E(209), E(210), E(211), E(212),
    ...REPAIR_IDS, ...LADDER_IDS,
  ],
  // act 6 — the quiz and the roundup release nothing new
  [],
];

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.title,
  level: 'a2',
  tag: 'A2 · LEÇON 31',
  intro: 'A screen tells you to do something and there is nobody to ask. Then you have to explain what it said to a person who cannot see it. This lesson is both halves, and the one thing that runs through them: every tech word in French has more than one name, and which one you use says who you think is listening.',
  skill: 'CO',
  // NOT `teaches`, NOT `canDo`, NOT `track`. All three draw nothing on a Lesson
  // and a2.07 shipped all three. `canDo` belongs to the unit.
  grammarAssumed: [VERB_UNIT, TIME_UNIT, 'a2.05', 'a2.22', 'a2.06'],
  // NO MOOD IS NAMED HERE OR ANYWHERE ELSE. Act 2 has no paradigm: the screen
  // strings are unanalysed lexis, exactly as the band handles the conditional,
  // and a lesson that claimed a form it does not teach would corrupt the
  // curriculum checkability the two-list design exists for.
  grammarIntroduced: [
    'choosing between three names for one referent by who is listening',
    'fixed interface strings, learned whole',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Trois voix, un seul appareil. Et personne à qui demander de répéter.",
    minutes: 32,
    difficulty: 3,
    glyph: '📱',
    screens: 92,
  },
  reframe: REFRAME,
  acts: [
    {
      id: 'act1',
      title: "L'incident",
      sections: ['s01-scene', 's02-goals', 's03-voices'],
      milestone: 'You have seen one sentence fail on somebody who could not see the screen',
      estScreens: 14,
      restPoints: ['s02-goals'],
    },
    {
      id: 'act2',
      title: 'La voix de la machine',
      sections: ['s04-screen', 's05-strings', 's06-settings', 's07-heard'],
      milestone: 'You can do what six French screen strings tell you, without translating first',
      estScreens: 22,
      restPoints: ['s05-strings', 's06-settings'],
    },
    {
      id: 'act3',
      title: 'Le même appareil, trois voix',
      sections: ['s08-map', 's09-sort', 's10-recall', 's11-menu', 's12-notice', 's13-pairs'],
      milestone: 'You can hear which voice a word belongs to, and pick the right one back',
      estScreens: 28,
      restPoints: ['s09-sort', 's11-menu', 's12-notice'],
    },
    {
      id: 'act4',
      title: 'Le piège',
      sections: ['s14-trap', 's15-errors', 's16-dictee'],
      milestone: 'You can tell a job from the news, and you know which errors are marked both ways',
      estScreens: 14,
      restPoints: ['s15-errors'],
    },
    {
      id: 'act5',
      title: 'Production',
      sections: ['s17-call', 's18-friend', 's19-speak', 's20-check'],
      milestone: 'You described the same fault twice, in two voices, and asked as well as answered',
      estScreens: 18,
      restPoints: ['s18-friend', 's19-speak'],
    },
    {
      id: 'act6',
      title: "L'examen",
      sections: ['s21-quiz', 's22-review', 's23-roundup'],
      milestone: 'Thirty-two questions, and the three voices one last time',
      estScreens: 10,
      restPoints: ['s22-review'],
    },
  ],
  errorTriggers: [
    {
      id: 'wrong-voice',
      description: 'Uses a form from the wrong voice: courriel to a friend, or mail to an agent in Quebec.',
      detectOn: ['s03-voices', 's09-sort', 's13-pairs', 's15-errors'],
      drill: 'd-voice',
      // `retest` names a DRILL, not a section: validateLesson resolves it
      // against `Lesson.drills`. `d-pair` is the one that closes this loop,
      // because a learner who picked the wrong voice has almost always
      // mismatched the pronoun with it.
      retest: 'd-pair',
    },
    {
      id: 'reads-screen-as-news',
      description: 'Treats an instruction as a report, or a report as an instruction, and waits or presses wrongly.',
      detectOn: ['s04-screen', 's07-heard', 's14-trap'],
      drill: 'd-screen',
    },
    {
      id: 'fault-too-vague',
      description: 'Says ça ne marche pas to somebody who cannot see the screen, and leaves out three of the four things they need.',
      detectOn: ['s01-scene', 's17-call', 's19-speak'],
      drill: 'd-fault',
    },
    {
      id: 'register-drift',
      description: 'Starts with vous and finishes with tu vocabulary, or the reverse, inside one exchange.',
      detectOn: ['s13-pairs', 's17-call', 's18-friend'],
      drill: 'd-pair',
    },
  ],
  drills: DRILLS,
  deckTranche: DECK_TRANCHE,
  terms: TECHNOLOGIE_TERMS,
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
    // or maxPlays. All six validate, publish and are read by NO renderer
    // (collation §3.5). The seed already carries 31 of them.
  },
};
