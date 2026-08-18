// a2.34.l1 « Pronoms possessifs » — the lesson.
//
// 24 sections, six acts, one quiz, one lesson. Every section is a mission: the
// renderer numbers one per section and the design distinction between missions
// and sections does not exist (a2.07 verified it on a device).
//
// 24 and 30 are the measured A2 house shape (A2-TAIL-AUDIT §2). This one does
// not go past it, so there is nothing to justify.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE THREE REQUIRED LAYOUTS, AND WHERE EACH ONE LIVES
// ══════════════════════════════════════════════════════════════════════════
//
//   1. ALL FOUR FORMS OF ONE POSSESSIVE, with the owned noun visible in each
//      so the agreement's source is on the card.            -> `s04-four`
//      Four cards, one per cell, and the corpus rows behind them (E372..E375)
//      were authored as a set for it. One frame, one variable: the thing.
//
//   2. `mon sac` BESIDE `le mien`, adjective against pronoun, same referent.
//                                                            -> `s03-adj`
//      FOUR cards, and it is the FIRST teaching screen in the lesson, before
//      the paradigm, because a1.17 is the declared prerequisite and this is
//      the sentence the learner already owns turning into the one they do not.
//
//   3. `C'est le mien` BESIDE `C'est à moi`, with the register marked on each.
//                                                            -> `s17-amoi`
//      Both halves marked, not one: a card that labels only the spoken one
//      leaves the learner to infer that the other is neutral, and it is not.
//
// ONE `tapTable` IN THE FLOW (`s09-table`, six rows, the ceiling) AND ONE
// `table` IN A REFERENCE SHEET, then stop. A `table` at `layer: 'core'` is
// refused outright by `validateDensity` and `layer: 'more'` is read by no
// renderer, so `render: 'sheet'` is the only part of the three-layer model
// that works.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHY THE OWNS IS TWO ACTS AND THE TRAP IS ONE
// ══════════════════════════════════════════════════════════════════════════
//
// Doctrine §B.5. The paradigm here is eighteen cells and it is genuinely large,
// so the risk of this lesson becoming a reference document is higher than
// usual. The paradigm gets ONE mission — `s09-table`, the tapTable — and the
// other ten of acts 2 and 3 are the Owns: what decides the form, and where the
// system stops giving you a fourth cell.
//
// Acts 2 and 3 are ELEVEN missions; the scene and the trap are SEVEN.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE DRILL TRAP, WHICH IS WHY NINE IMPORTED ROWS ARE NEVER RELEASED
// ══════════════════════════════════════════════════════════════════════════
//
// All nine imported sentences from `comparaisons`, `bureau` and `questions`
// carry `dictation` or `sentence` AND NOTHING ELSE. A `deckTranche` release of
// any of them validates, publishes and serves no card. The eighteen headwords
// and the three `leur` rows are the opposite: every one carries `flashcard`,
// so those CAN be released and are.
//
// So every imported comparative sentence here is reachable by being NAMED by
// itemId — in `s07-agree`, `s11-three`, a lesson `term` or a `LessonDrill` —
// and the batch asserts both directions.

import type { Lesson, LessonSection, LessonDrill, SectionAudio, ReferenceSheet } from '../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, REFRAME, E,
  ALL_ROWS, IMPORT_IDS, IMPORTED, NOT_DECK_ABLE, DICTEE_IDS,
  A117_REFRAME, A117_TEST, POSSESSIVE_ADJ_UNIT, POSSESSIVE_ADJ_REF,
  GENDER_LOST, LEUR_RULE, LEUR_RULE_SCOPE, INDIRECT_UNIT, INDIRECT_REF, INDIRECT_POSS,
  A233_REFRAME, A234_SHAPE, DEMONSTRATIVE_UNIT, DEMONSTRATIVE_REF, DEMONSTRATIVE_POSS,
  WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT, WHAT_FOLLOWS_REF, Y_EN_REF,
  COMPARATIVE_UNIT, COMPARATIVE_REF, GENDER_UNIT, GENDER_REF,
  AGREEMENT_UNIT, AGREEMENT_REF, REGISTER_UNIT, REGISTER_REF,
  UNSEEN, AUDIBLE_CLAIM, SPOKEN_MARK, WRITTEN_MARK, NO_SUCH_FORM,
} from './pronoms-possessifs-corpus.ts';
import { POSSESSIFS_PRONOMS_TERMS } from './pronoms-possessifs-terms.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** NOT `as const`. A readonly `speeds` tuple is not assignable to
 *  `SectionAudio['speeds']`, which is a mutable `number[]`, and the admin
 *  typecheck is the only check in this project that says so. */
const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT I — UN MOT DE PLUS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.2's A2 register: BREAKDOWN, NOT RUDENESS. Nobody is impolite,
 *  nothing is mispronounced, and the learner runs out of sentence in public.
 *
 *  The prompt asks for exactly this: « Two similar bags, two coats, two phones.
 *  Someone claiming theirs, reaching for the form, agreeing it with themselves
 *  instead of the object, and stopping. The item stays where it is. Nobody
 *  corrects them. »
 *
 *  THE CHOICE OFFERS BOTH ERRORS, because they are two different errors and
 *  the learner produces both. The first drops the article, which is what
 *  English does. The second agrees with the speaker, which is what English
 *  does with his and hers.
 *
 *  NO SPACED EXCLAMATION MARK IN ANY BUBBLE. One has made a scene lose its
 *  last word on a Pixel 6 while the gloss still translated it.
 *
 *  LessonSection is a UNION and only the scene variant has `beats`, so the
 *  const is typed through Extract rather than as a bare array. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration',
    text: 'A left-luggage counter at Gare Montparnasse, ten past six. Four black suitcases on the shelf behind the desk and two of them are the same model. He has the ticket in his hand and he knows which one is his.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: "L'employé",
    fr: 'Laquelle, monsieur ?',
    en: 'Which one, sir?',
    respell: '[lah-KEHL muh-SYUH]',
    stage: 'His hand is on the wrong one and he is waiting to be told.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'narration',
    text: 'He knows the word. He has known it since ${POSSESSIVE_ADJ_REF}, on a card, with a picture of a bag beside a house. He opens his mouth and the sentence starts moving.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'you',
    speaker: 'You',
    fr: "C'est le...",
    en: "It's the...",
    respell: '[seh luh]',
    stage: 'He hears the article land and stops, because a suitcase is not the kind of thing that takes that one.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'you',
    speaker: 'You',
    fr: "C'est mien.",
    en: "It's mine.",
    respell: '[seh MYEHⁿ]',
    stage: 'The second try drops the little word altogether, which is what English would have done. The clerk does not move.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'choice',
    prompt: 'One more go. The thing on the shelf is une valise. Which one does he say?',
    size: 'lg',
    options: [
      { fr: "C'est le mien.", respell: '[seh luh MYEHⁿ]', en: "It's mine.", outcome: 'breaks', audio: AUDIO },
      { fr: "C'est la mienne.", respell: '[seh lah MYENN]', en: "It's mine.", outcome: 'works', audio: AUDIO },
    ],
    followUp: {
      works: 'The clerk lifts the near one down and reads the ticket. Nine seconds, and one of them was a suitcase the whole time.',
      breaks: 'The clerk waits, then asks him to point instead. He points. It works, and he has not said the sentence.',
    },
  },
  {
    kind: 'break',
    heading: 'He agreed it with the wrong thing',
    // 43 words. The core density cap is 45 on any one authored string.
    body: 'English says mine for a man, a woman, a bag and a suitcase, so there is nothing in it to agree with anything. French makes two decisions here and neither of them is about him. Both are about the thing on the shelf.',
    wrong: {
      fr: "C'est le mien.",
      // NO U+203F. It draws as a low underscore on a Pixel 6 (invariants §2)
      // and this build guards against it; the guard caught this line. There is no
      // liaison here anyway: `le` starts with a consonant.
      ipa: '/sɛ lə mjɛ̃/',
      respell: '[seh luh MYEHⁿ]',
      en: "It's mine.",
    },
    right: {
      fr: "C'est la mienne.",
      ipa: '/sɛ la mjɛn/',
      respell: '[seh lah MYENN]',
      en: "It's mine.",
    },
    coach: `${A117_REFRAME} That is ${POSSESSIVE_ADJ_REF}'s line and it has not changed. What has changed is that there are two words to point it at.`,
    size: 'lg',
    audio: AUDIO,
  },
  {
    kind: 'resolve',
    text: 'He got the right suitcase. He also learned nothing, because nobody told him what was wrong with the first two tries.',
    size: 'md',
  },
];

const S01_SCENE: LessonSection = {
  type: 'scene',
  id: 's01-scene',
  render: 'screens',
  layer: 'core',
  title: 'The article that arrived first',
  setting: { place: 'La consigne, Gare Montparnasse', city: 'Paris', time: '18 h 10', ambience: 'a counter, a shelf, one person waiting behind him' },
  beats: SCENE_BEATS,
  closing: { text: 'One rule you already have, and one word you do not.', size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['twoWords', 'owned'],
};

const S02_GOALS: LessonSection = {
  type: 'goals',
  id: 's02-goals',
  layer: 'core',
  title: 'By the end of this lesson',
  goals: [
    { t: 'Say mine about a thing you have not named', s: `Act 2: ${POSSESSIVE_ADJ_REF}'s rule, two words instead of one` },
    { t: 'Pick the form from the thing, never from yourself', s: 'Act 2, and it is the mistake from the counter' },
    { t: 'Know where French stops splitting them', s: 'Act 3: three of the six have three forms, not four' },
    { t: 'Keep the three leurs apart', s: 'Act 4, and two of the three are already yours' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** REQUIRED LAYOUT 2, AND IT IS THE FIRST TEACHING SCREEN IN THE LESSON.
 *
 *  a1.17 is the declared prerequisite, so the entry point is the sentence the
 *  learner already owns turning into the one they do not. Four cards, each one
 *  sentence twice, and the corpus rows behind them (E364/E365, E366/E367,
 *  E368/E369, E370/E371) were authored as pairs for exactly this.
 *
 *  DISPLAY_PARITY pins all eight against their rows, so a corpus edit the card
 *  does not follow now fails.
 *
 *  a2.33's line is quoted VERBATIM here, imported rather than retyped, and this
 *  lesson's own sentence follows it. a2.33's is about pointing and this one is
 *  about owning, so quoting it and stopping would hand the learner a rule that
 *  does not hold here — which is exactly what a2.33 itself did with a2.06's. */
const S03_ADJ: LessonSection = {
  type: 'cardDeck',
  id: 's03-adj',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'The word you have, and the word you need',
  frSub: 'Un mot, puis deux',
  hint: 'Four cards. Each one is the same thing said twice.',
  say: `« ${WHAT_FOLLOWS} » is how ${WHAT_FOLLOWS_REF} put it, and ${DEMONSTRATIVE_REF} said it again last lesson. Here it is the noun once more.`,
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-34-adj' },
  terms: ['twoWords', 'owned'],
  cards: [
    {
      head: 'one masculine thing',
      label: 'a noun follows · nothing follows',
      fr: "C'est mon sac. / C'est le mien.",
      sub: '[seh mohⁿ SAK] then [seh luh MYEHⁿ]',
      body: `« ${A233_REFRAME} » is ${DEMONSTRATIVE_POSS}'s line. ${A234_SHAPE}`,
    },
    {
      head: 'one feminine thing',
      label: 'a noun follows · nothing follows',
      fr: "C'est ma valise. / C'est la mienne.",
      sub: '[seh mah vah-LEEZ] then [seh lah MYENN]',
      body: `The same move on a feminine noun, and this time the second word changes as well as the first. You had to know valise was feminine to say either one. ${Cap(GENDER_REF)} is where that came from.`,
    },
    {
      head: 'several masculine things',
      label: 'a noun follows · nothing follows',
      fr: 'Ce sont mes gants. / Ce sont les miens.',
      sub: '[suh sohⁿ may GAHⁿ] then [suh sohⁿ lay MYEHⁿ]',
      body: 'mes covers both kinds of thing in the plural. les miens does not, and that is the one place the two rows stop lining up.',
    },
    {
      head: 'several feminine things',
      label: 'a noun follows · nothing follows',
      fr: 'Ce sont mes clés. / Ce sont les miennes.',
      sub: '[suh sohⁿ may KLAY] then [suh sohⁿ lay MYENN]',
      body: 'The same mes it used for the gloves, and a different second word. Four things to say on the right, one to say on the left.',
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT II — CE QUI DÉCIDE LA FORME  (the Owns, half one, six missions)
 * ══════════════════════════════════════════════════════════════════════════ */

/** REQUIRED LAYOUT 1. All four forms of one possessive with the owned noun
 *  VISIBLE in each, so the agreement's source is on the card rather than in
 *  the gloss.
 *
 *  ONE FRAME, FOUR CELLS, AND THE ONLY VARIABLE IS THE THING. Both ends of
 *  every sentence took their shape from the same noun and neither took it from
 *  the speaker, which is the whole Owns and the mistake from the counter.
 *
 *  DISPLAY_PARITY pins all four. */
const S04_FOUR: LessonSection = {
  type: 'cardDeck',
  id: 's04-four',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Four forms, and the thing picks',
  hint: 'Four cards. The thing is named on every one of them.',
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-34-four' },
  say: REFRAME,
  terms: ['owned', 'twoWords'],
  cards: [
    {
      head: 'le mien',
      label: 'one masculine thing',
      fr: 'Le sac est le mien.',
      sub: '[luh SAK eh luh MYEHⁿ]',
      body: 'sac is masculine, so both words in front of it are the masculine ones. A woman saying this sentence says exactly the same thing, because the bag has not changed.',
    },
    {
      head: 'la mienne',
      label: 'one feminine thing',
      fr: 'La valise est la mienne.',
      sub: '[lah vah-LEEZ eh lah MYENN]',
      body: 'valise is feminine, so both words move. This is the only cell of the four where the sound of the second word changes, and it is the one the counter got wrong.',
    },
    {
      head: 'les miens',
      label: 'several masculine things',
      fr: 'Les gants sont les miens.',
      sub: '[lay GAHⁿ sohⁿ lay MYEHⁿ]',
      body: 'gants is masculine and there are several, so the article is les and the second word takes an s. The s is written and it is not said.',
    },
    {
      head: 'les miennes',
      label: 'several feminine things',
      fr: 'Les clés sont les miennes.',
      sub: '[lay KLAY sohⁿ lay MYENN]',
      body: 'clés is feminine and there are several. Same les as the gloves, different second word, and this is the fourth and last cell.',
    },
  ],
};

/** a1.17 APPLIED AND EXTENDED, NOT RE-TAUGHT. It is the declared prerequisite
 *  and it is load-bearing: a learner who cannot gender a noun cannot pick.
 *
 *  ITS REFRAME IS QUOTED VERBATIM AND IMPORTED, so the quotation cannot drift.
 *  What this lesson adds is the article, and a1.17 taught the exact opposite
 *  about it: a possessive goes WHERE `le` goes, so `le mon sac` is impossible.
 *  Here `le` comes back, and it comes back because the noun has left. */
const S05_A117: LessonSection = {
  type: 'examples',
  id: 's05-a117',
  layer: 'core',
  title: 'The rule you already have',
  examples: [
    { fr: "C'est mon sac.", en: "It's my bag.", note: `${Cap(POSSESSIVE_ADJ_REF)}: one word, and no le in front of it` },
    { fr: "C'est le mien.", en: "It's mine.", note: 'the noun leaves and le comes back to fill the space' },
    { fr: 'La valise est la mienne.', en: 'The suitcase is mine.', note: 'feminine, so both words are feminine' },
    { fr: 'Ma valise pèse plus que la tienne.', en: 'My suitcase weighs more than yours.', note: 'one of each, in one sentence, and both agree with valise' },
    { fr: 'Le bureau voisin est plus grand que le mien.', en: 'The office next door is bigger than mine.', note: 'bureau is masculine, so le mien, whoever works in it' },
    { fr: 'Son appartement est moins grand que le mien.', en: 'His apartment is smaller than mine.', note: 'son is his and le mien is mine, and appartement decides the shape of both' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['owned', 'twoWords'],
};

/** WHAT THE EAR CAN ACTUALLY DO, and it is one contrast rather than four.
 *
 *  `hideLines: true` OR THIS IS A READING EXERCISE WITH A PLAY BUTTON.
 *  `ListeningView` prints every line's `fr` AND `en` beside its PlayDot, so
 *  every listening section in the product has been answerable by reading.
 *
 *  THE CORPUS SAID THESE WERE ONE SOUND AND IT WAS WRONG. All twelve
 *  `mien`/`tien`/`sien` rows shipped with a plain n closing the ending, so
 *  `le mien` and `la mienne` were respelled identically and the prompt read
 *  that as a fact about French. Corpus §A.5 and §E have the measurement, and
 *  this mission exists because the contrast is real. */
const S06_LISTEN: LessonSection = {
  type: 'listening',
  id: 's06-listen',
  layer: 'core',
  hideLines: true,
  title: 'The one you can hear',
  lines: [
    { fr: 'Le sac est le mien.', en: 'The bag is mine.' },
    { fr: 'La valise est la mienne.', en: 'The suitcase is mine.' },
    { fr: 'Les gants sont les miens.', en: 'The gloves are mine.' },
    { fr: 'Les clés sont les miennes.', en: 'The keys are mine.' },
  ],
  questions: [
    {
      q: 'The first two. What is different at the end of each sentence?',
      opts: ['nothing, they are the same word', 'the second one ends on an n sound', 'the second one is a syllable longer'],
      correct: 1,
      why: 'The first ends on a vowel made through the nose and stops. The second puts a real n after it, which you can hear as a separate sound.',
    },
    {
      q: 'So which one is about a suitcase?',
      opts: ['the first', 'the second'],
      correct: 1,
      why: 'valise is feminine, and the feminine is the one with the n you can hear. That is the difference the counter could not produce.',
    },
    {
      q: 'The third and the fourth. How many things is each one about?',
      opts: ['one and one', 'several and several', 'one and several'],
      correct: 1,
      why: 'Both are several, and you knew that from les rather than from anything at the end. The s that makes them plural is silent in both.',
    },
    {
      q: 'Compare the first and the third. What separates them?',
      opts: ['the last word', 'the little word in front', 'nothing at all'],
      correct: 1,
      why: 'luh against lay. The last word is the same noise in both, so the number lives entirely in the article and never at the end.',
    },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-34-listen' },
  say: REFRAME,
  terms: ['owned'],
};

/** AGREED WITH THE THING, OR AGREED WITH THE OWNER. Three gated groups.
 *
 *  GATED, NOT TIMED. `setInterval` is zero across all four render files, so
 *  there is no timer anywhere in the app, and no authored string here says
 *  otherwise.
 *
 *  SIX OF THE NINE IMPORTED SENTENCES ARE NAMED HERE, which is what makes them
 *  reachable at all: every one is `dictation`-only or `sentence`-only, so no
 *  deckTranche can release one.
 *
 *  `production-surface.test.ts` requires every item's `fr` to be CONTAINED in
 *  the row it names, seed-wide. Every one here is the row verbatim.
 *
 *  `note`, NOT `sub`. On a groupDrill ITEM `sub` draws nothing; GroupDrillView
 *  builds its second line from `note`/`respell`/`en`. */
const S07_AGREE: LessonSection = {
  type: 'groupDrill',
  id: 's07-agree',
  layer: 'core',
  size: 'lg',
  title: 'What decided the shape',
  groups: [
    {
      label: 'The thing is masculine, so both words are',
      items: [
        { fr: 'Le sac est le mien.', itemId: E(372), note: 'sac', en: 'The bag is mine.' },
        { fr: 'Son appartement est moins grand que le mien.', itemId: 'fr.a2.comparaisons.064', note: 'appartement', en: 'His apartment is smaller than mine.' },
        { fr: 'Ton café est plus chaud que le mien.', itemId: 'fr.a2.comparaisons.075', note: 'café', en: 'Your coffee is hotter than mine.' },
        { fr: 'Mon vélo est moins neuf que le tien.', itemId: 'fr.a2.comparaisons.077', note: 'vélo', en: 'My bike is less new than yours.' },
        { fr: 'Le bureau voisin est plus grand que le mien.', itemId: 'fr.a2.bureau.130', note: 'bureau', en: 'The office next door is bigger than mine.' },
      ],
      check: {
        q: 'Every one of these is le mien or le tien. What do the five things have in common?',
        opts: ['they all belong to a man', 'they are all masculine words', 'they are all one thing rather than several'],
        correct: 1,
        why: 'The word for the thing is masculine in all five. Who owns each one is a different question and it never reaches the form.',
      },
    },
    {
      label: 'The thing is feminine, so both words are',
      items: [
        { fr: 'La valise est la mienne.', itemId: E(373), note: 'valise', en: 'The suitcase is mine.' },
        { fr: 'Ma valise pèse plus que la tienne.', itemId: 'fr.a2.comparaisons.084', note: 'valise again, and the owner changed', en: 'My suitcase weighs more than yours.' },
        { fr: 'Ton idée est plus originale que la sienne.', itemId: 'fr.a2.comparaisons.018', note: 'idée', en: 'Your idea is more original than his.' },
        { fr: 'La trousse est la tienne.', itemId: E(394), note: 'trousse', en: 'The pencil case is yours.' },
      ],
      check: {
        q: 'The second one says la tienne about a suitcase. Whose suitcase is it?',
        opts: ["a woman's, because the word is feminine", 'somebody the sentence is speaking to', 'it does not say'],
        correct: 1,
        why: 'tienne is yours, so it belongs to whoever is being spoken to, man or woman. The feminine ending came from valise and from nothing else.',
      },
    },
    {
      label: 'And the ones where the owner changed and the form did not',
      items: [
        { fr: 'Paul a le sien et Marie a le sien.', itemId: E(378), note: 'two owners, three words each', en: 'Paul has his and Marie has hers.' },
        { fr: 'Le sac est le sien.', itemId: E(376), note: 'his, or hers', en: 'The bag is his, or hers.' },
        { fr: 'Le sac est le leur.', itemId: E(383), note: 'and now several owners', en: 'The bag is theirs.' },
        { fr: 'Le sac est à moi.', itemId: E(390), note: 'and here the owner IS the word that moved', en: 'The bag is mine.' },
      ],
      check: {
        q: 'Three of these four say the same thing about the same bag. What is the fourth doing?',
        opts: ['naming the owner instead of agreeing with the bag', 'agreeing with the owner', 'saying there are several bags'],
        correct: 0,
        why: 'à moi puts the person in the sentence and leaves the bag alone. It is act four, and it is what people say far more often than any of the other three.',
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['owned', 'third'],
};

/** THE GENERALISATION MISSION. Doctrine §B.1: a lesson that makes the learner
 *  produce a form from a word it never showed them has taught the system. The
 *  prompt asks for exactly one, near the end of the lesson.
 *
 *  GROUP 2 IS A CONTROL PAGE with `items: []` and a check, which is the house
 *  pattern. Its check hands over `casquette`, which this lesson does not teach,
 *  does not import and names nowhere else — and which is FEMININE, so the
 *  answer is `la mienne`, the one cell of the four where the word itself moves
 *  rather than just the article. Corpus §I has the rejected candidates and the
 *  reason for each. */
const S08_UNSEEN: LessonSection = {
  type: 'groupDrill',
  id: 's08-unseen',
  layer: 'core',
  size: 'lg',
  title: 'Now do it with a word we never gave you',
  groups: [
    {
      label: 'The frame, with things you have already had',
      items: [
        { fr: 'Le parapluie est le tien.', itemId: E(393), note: 'parapluie, masculine', en: 'The umbrella is yours.' },
        { fr: 'La trousse est la tienne.', itemId: E(394), note: 'trousse, feminine', en: 'The pencil case is yours.' },
        { fr: 'Le sac est le mien.', itemId: E(372), note: 'sac, masculine', en: 'The bag is mine.' },
        { fr: 'La valise est la mienne.', itemId: E(373), note: 'valise, feminine', en: 'The suitcase is mine.' },
      ],
      check: {
        q: 'Two questions get you from the English to the French. What is the first one?',
        opts: ['who owns the thing', 'what kind of word the thing is', 'how big the thing is'],
        correct: 1,
        why: 'The kind of word, and then how many. Those two answers pick the form every time and the owner only picks which row you are standing in.',
      },
    },
    {
      label: 'And now a thing nobody has shown you',
      items: [],
      check: {
        q: `${UNSEEN.article} is feminine. It belongs to you. Say so without saying the word.`,
        opts: [`C'est le mien.`, `C'est ${UNSEEN.answer}.`, `C'est mienne.`],
        correct: 1,
        why: 'This word appears nowhere else in this lesson and you have just handled it. Feminine rules out the first, and the third has no article, which French will not do.',
      },
    },
    {
      label: 'One more, and this time it is not yours',
      items: [
        { fr: 'Le sac est le sien.', itemId: E(376), note: 'somebody else, one person', en: 'The bag is his, or hers.' },
        { fr: 'La valise est la nôtre.', itemId: E(380), note: 'us', en: 'The suitcase is ours.' },
        { fr: 'Les sacs sont les leurs.', itemId: E(384), note: 'them', en: 'The bags are theirs.' },
        { fr: 'Ses résultats sont pires que les nôtres.', itemId: 'fr.a2.comparaisons.011', note: 'and here the things are results', en: 'His results are worse than ours.' },
      ],
      check: {
        q: 'The owner moved four times. How many times did the ending move with it?',
        opts: ['four', 'twice', 'not once'],
        correct: 2,
        why: 'Not once. The row you stand in changed and the two questions you answer inside it did not, which is the whole system in one line.',
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['owned', 'twoWords'],
};

/** THE PARADIGM, AND IT GETS ONE MISSION.
 *
 *  `tapTable`, NOT `table`. A `table` at `layer: 'core'` is refused outright by
 *  `validateDensity` (density.logic.ts:423) and 0 of 74 shipped lessons carry
 *  one in `sections`. a2.29 device-checked a probe table on a Pixel 6, saw
 *  every cell draw, and had the batch refuse it: A DEVICE CHECK CANNOT FIND
 *  THIS ONE.
 *
 *  SIX ROWS IS THE CEILING on a Pixel 6 and this uses exactly six, which is the
 *  reason the six owners are the rows and the four cells are not.
 *
 *  THREE COLUMNS, AND THE MASCULINE ONLY IN THE CELLS. `TapTableView` gives
 *  every column `flex: 1` inside a card padded 16 each side; at three columns
 *  that is roughly 95dp, or about twelve characters of `bodySm` per line. `le
 *  mien · la mienne` is nineteen. The feminine lives in `detail`, which opens
 *  on tap and has the room, and a2.08's device check is why a fourth column is
 *  not the answer: a sheet does not scroll sideways and neither does this. */
const S09_TABLE: LessonSection = {
  type: 'tapTable',
  id: 's09-table',
  layer: 'core',
  title: 'All six, one screen',
  cols: ['Owner', 'One thing', 'Several'],
  rows: [
    {
      cells: ['mine', 'le mien', 'les miens'],
      say: "C'est le mien.",
      detail: {
        title: 'mine, all four',
        body: 'le mien · la mienne · les miens · les miennes. Four cells, and the feminine changes the word as well as the article.',
        say: "C'est la mienne.",
      },
    },
    {
      cells: ['yours', 'le tien', 'les tiens'],
      say: "C'est le tien.",
      detail: {
        title: 'yours, all four',
        body: 'le tien · la tienne · les tiens · les tiennes. The one you say to a friend, and it behaves exactly like mine.',
        say: "C'est le tien.",
      },
    },
    {
      cells: ['his, hers', 'le sien', 'les siens'],
      say: "C'est le sien.",
      detail: {
        title: 'his or hers, all four',
        body: 'le sien · la sienne · les siens · les siennes. One set for both, and act three is about why that is less trouble than it looks.',
        say: "C'est le sien.",
      },
    },
    {
      cells: ['ours', 'le nôtre', 'les nôtres'],
      say: 'La valise est la nôtre.',
      detail: {
        title: 'ours, and there are three',
        body: 'le nôtre · la nôtre · les nôtres. No fourth cell: the plural covers both kinds of thing at once.',
        say: 'Les valises sont les nôtres.',
      },
    },
    {
      cells: ['yours, formal', 'le vôtre', 'les vôtres'],
      say: 'La valise est la vôtre.',
      detail: {
        title: 'yours to more than one person, and there are three',
        body: 'le vôtre · la vôtre · les vôtres. The vous version, and it has the same three cells as ours.',
        say: 'La valise est la vôtre.',
      },
    },
    {
      cells: ['theirs', 'le leur', 'les leurs'],
      say: 'Le sac est le leur.',
      detail: {
        title: 'theirs, and there are three',
        body: 'le leur · la leur · les leurs. Three again, and the plural puts an s on both words rather than on one.',
        say: 'Les sacs sont les leurs.',
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['twoWords', 'third', 'threeLeurs'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT III — LÀ OÙ LE FRANÇAIS S'ARRÊTE  (the Owns, half two, five missions)
 * ══════════════════════════════════════════════════════════════════════════ */

/** TRAP 1, AND IT IS a2.24's FINDING ONE PARADIGM ALONG.
 *
 *  `le sien` is his AND hers. Gender is lost exactly where the learner expects
 *  it to be marked, and everything since a1.03 has taught them that French
 *  cares about gender more as they go rather than less.
 *
 *  a2.24's framing is QUOTED VERBATIM and IMPORTED, and the unit is named on
 *  the same card, which is what a2.33's mutation harness asked for: the
 *  section-wide check passes while the unit id sits on any one of three cards.
 *
 *  DISPLAY_PARITY pins E378, which is the whole trap in one sentence. */
const S10_THIRD: LessonSection = {
  type: 'cardDeck',
  id: 's10-third',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'The one that will not tell you which',
  hint: 'Four cards, and the third is the whole of it.',
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-34-third' },
  say: REFRAME,
  terms: ['third', 'owned'],
  cards: [
    {
      head: 'le sien',
      label: 'his, and also hers',
      fr: 'Le sac est le sien.',
      sub: '[luh SAK eh luh SYEHⁿ]',
      body: 'The bag is his. The bag is hers. Both, from the same three words, and there is no version of this sentence that says which.',
    },
    {
      head: `${Cap(INDIRECT_REF)} said this first`,
      label: 'the same fact, one family along',
      fr: 'le sien · lui',
      sub: '[luh SYEHⁿ] · [LWEE]',
      body: `« ${GENDER_LOST} » is ${INDIRECT_POSS}'s line about lui, and it holds here word for word.`,
    },
    {
      head: 'and here it is on one line',
      label: 'two owners, one form',
      fr: 'Paul a le sien et Marie a le sien.',
      sub: '[POL ah luh SYEHⁿ ay ma-REE ah luh SYEHⁿ]',
      body: 'Paul has his and Marie has hers. The French says the same three words twice and only the English had to change. Whose it is comes from the rest of the sentence.',
    },
    {
      head: 'la sienne',
      label: 'and it still is not about the owner',
      fr: 'La valise est la sienne.',
      sub: '[lah vah-LEEZ eh lah SYENN]',
      body: 'Feminine, because valise is. Not because she is. A man says this sentence about his own suitcase without changing a letter of it.',
    },
  ],
};

/** WHERE THE SYSTEM STOPS GIVING YOU A FOURTH CELL.
 *
 *  `mien`, `tien` and `sien` have four forms. `nôtre`, `vôtre` and `leur` have
 *  three: their plural does not split by gender. MEASURED IN THE CORPUS rather
 *  than asserted — `les miens` and `les miennes` are two published rows, and
 *  `les nôtres`, `les vôtres` and `les leurs` are one each, glossed with no
 *  gender in any of the three.
 *
 *  THE LAST TWO EXAMPLES ARE THE PROOF and DISPLAY_PARITY pins both: a
 *  masculine plural noun and a feminine plural noun taking the identical form. */
const S11_THREE: LessonSection = {
  type: 'examples',
  id: 's11-three',
  layer: 'core',
  title: 'Three of them have three forms',
  examples: [
    { fr: 'La valise est la nôtre.', en: 'The suitcase is ours.', note: 'feminine, one thing' },
    { fr: 'Les valises sont les nôtres.', en: 'The suitcases are ours.', note: 'and the plural, which covers both kinds' },
    { fr: 'La valise est la vôtre.', en: 'The suitcase is yours.', note: 'the vous one, and it works the same way' },
    { fr: 'La valise est la leur.', en: 'The suitcase is theirs.', note: 'and theirs, which has the same three cells' },
    { fr: 'Ses résultats sont pires que les nôtres.', en: 'His results are worse than ours.', note: 'résultats is masculine and the form did not move' },
    { fr: 'Les sacs sont les leurs.', en: 'The bags are theirs.', note: 'masculine and plural' },
    { fr: 'Les clés sont les leurs.', en: 'The keys are theirs.', note: 'feminine and plural, and not one letter changed' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['third', 'threeLeurs'],
};

/** TRAP 4, AND IT IS THE ONE THING IN THE LESSON NO SCORED SURFACE CAN TEST.
 *
 *  `notre` and `votre` are the adjectives; `le nôtre` and `le vôtre` are the
 *  pronouns, and the accent is the only written difference.
 *
 *  IT CANNOT BE TYPED AND IT CANNOT BE HEARD. `fold()` strips every combining
 *  mark, measured, so a typed question would accept the mistake and tell the
 *  learner they spelled it right. And the corpus respells the adjective
 *  `votre` as `voh-TRUH` against the pronoun's `VOH-truh`, so the possessive
 *  word is the same noise in both. mcq is not the better surface here, it is
 *  the only one, and the batch refuses any typed question keyed on either.
 *
 *  DISPLAY_PARITY pins the authored half of the pair. */
const S12_CIRC: LessonSection = {
  type: 'cardDeck',
  id: 's12-circ',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'The little hat that changes the job',
  hint: 'Three cards. Nothing on any of them is a sound.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['accent', 'twoWords'],
  cards: [
    {
      head: 'notre, no hat',
      label: 'a noun follows',
      fr: 'Notre valise est ici.',
      sub: '[noh-truh vah-LEEZ eh tee-SEE]',
      body: 'Our suitcase. The noun is right there, so this is the one word ${POSSESSIVE_ADJ_REF} gave you and it takes no article of its own.',
    },
    {
      head: 'la nôtre, hat',
      label: 'nothing follows',
      fr: 'La valise est la nôtre.',
      sub: '[lah vah-LEEZ eh lah NOH-truh]',
      body: 'Ours. No noun after it, so the article comes back and the accent goes on. Two marks on the page, and both of them mean the same thing has happened.',
    },
    {
      head: 'and you will never hear it',
      label: 'measured, in the corpus',
      fr: 'notre valise · la nôtre',
      sub: '[noh-truh vah-LEEZ] · [lah NOH-truh]',
      body: `${AUDIBLE_CLAIM} So this pair is only ever shown to you and never scored.`,
    },
  ],
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
 *  so an authored newline is silently discarded. There are none here.
 *
 *  EVERY POSSESSIVE PRONOUN IN THE PASSAGE HAS AN ANTECEDENT, and the check is
 *  the one a2.33's audit failed: `la mienne` needs a FEMININE noun said
 *  earlier, or the lesson prints the one thing it exists to say is impossible. */
const S13_READ: LessonSection = {
  type: 'reading',
  id: 's13-read',
  layer: 'core',
  questionsInModal: true,
  title: 'Two suitcases, one shelf',
  // NO OBJECT PRONOUN AND NO PRONOMINAL `en`: both belong to a2.24 and a2.25.
  // NO COMPARATIVE: a2.08's, and this lesson imports seven of its rows without
  // teaching a word of it.
  // ANTECEDENTS: `la valise noire` is named in the second sentence, so every
  // feminine pronoun after it has something to stand for. `le sac` is named in
  // the fourth, so `le mien` and `le sien` have one too.
  text: "Il y a quatre valises sur l'étagère et deux sont noires. La valise noire de gauche est la mienne et la valise noire de droite est la sienne. Nous avons acheté les deux le même jour, dans le même magasin. À côté des valises il y a un sac gris, et ce sac est le nôtre : nous le partageons depuis des années. L'employé demande un ticket pour chaque bagage. Je donne le mien tout de suite. Ma sœur cherche le sien pendant deux minutes et le trouve dans sa poche. Les deux tickets sont bleus et les numéros sont différents. L'employé regarde les numéros et descend les valises dans le bon ordre.",
  glossary: [
    { word: "l'étagère", en: 'the shelf', note: 'The long flat board things sit on behind a counter. Feminine.' },
    { word: 'noires', en: 'black', note: 'Feminine and plural, because there are two suitcases and a suitcase is feminine.' },
    { word: 'le même jour', en: 'the same day', note: 'même before the noun means the same one; after it, it means the thing itself.' },
    { word: 'gris', en: 'grey', note: 'Masculine, and it is a clue: the bag is not one of the suitcases.' },
    { word: 'partageons', en: 'we share', note: 'From partager. This is why the bag is ours and not either one of theirs.' },
    { word: 'un ticket', en: 'a ticket', note: 'The paper stub you get in exchange for leaving a bag.' },
    { word: 'chaque bagage', en: 'each piece of luggage', note: 'chaque takes a singular noun even when there are several things.' },
    { word: 'sa poche', en: 'her pocket', note: 'sa because poche is feminine, not because the person is a woman. ${Cap(POSSESSIVE_ADJ_REF)}, one more time.' },
  ],
  questions: [
    { q: 'Whose is the black suitcase on the left?', a: "The speaker's. La valise noire de gauche est la mienne, and la mienne is feminine because valise is." },
    { q: 'The passage says la sienne about the one on the right. Whose is it?', a: 'The sister\'s, and you only learn that two sentences later. la sienne is his or hers with no way to tell, so the rest of the passage has to say.' },
    { q: 'Why is it le nôtre for the bag and la mienne for the suitcase?', a: 'sac is masculine and valise is feminine. Nothing about the owners changed between the two sentences and both words moved anyway.' },
    { q: 'Je donne le mien. What is le mien standing in for here?', a: 'le ticket, named in the sentence before. It is masculine, so le mien, and the passage never says the word ticket again after that.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['owned', 'third'],
};

/** BUILD IT FROM THE ENGLISH, which is the direction production actually runs
 *  in. Nothing here is new: it is acts 2 and 3 as recall. */
const S14_FLASH: LessonSection = {
  type: 'flashcards',
  id: 's14-flash',
  layer: 'core',
  title: 'Build it from the English',
  cards: [
    { front: 'mine, about a bag', back: 'le mien', say: 'Le sac est le mien.' },
    { front: 'mine, about a suitcase', back: 'la mienne', say: 'La valise est la mienne.' },
    { front: 'mine, about gloves', back: 'les miens', say: 'Les gants sont les miens.' },
    { front: 'mine, about keys', back: 'les miennes', say: 'Les clés sont les miennes.' },
    { front: 'yours, about an umbrella', back: 'le tien', say: 'Le parapluie est le tien.' },
    { front: 'yours, about a pencil case', back: 'la tienne', say: 'La trousse est la tienne.' },
    { front: 'his or hers, about a bag', back: 'le sien', say: 'Le sac est le sien.' },
    { front: 'his or hers, about a suitcase', back: 'la sienne', say: 'La valise est la sienne.' },
    { front: 'ours, about a suitcase', back: 'la nôtre', say: 'La valise est la nôtre.' },
    { front: 'yours, formal, about a suitcase', back: 'la vôtre', say: 'La valise est la vôtre.' },
    { front: 'theirs, about a bag', back: 'le leur', say: 'Le sac est le leur.' },
    { front: 'theirs, about several bags', back: 'les leurs', say: 'Les sacs sont les leurs.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['twoWords', 'third'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT IV — LES TROIS LEUR  (the trap, four missions)
 * ══════════════════════════════════════════════════════════════════════════ */

/** TRAP 2, AND IT IS NOT THE TRAP THE PROMPT ASKS FOR. Corpus §A.4 has the
 *  measurement: « leur never takes an -s; the article does » is not true of
 *  French. `les leurs` puts an s on both words and there is no `les leur`.
 *
 *  a2.24's sentence IS true and is about a DIFFERENT leur, so it is quoted
 *  verbatim and imported, and the trap becomes the thing that is both true and
 *  hard: THREE WORDS SPELLED THE SAME, and only one of them never grows.
 *
 *  THREE OF THE FIVE CARDS ARE PUBLISHED ROWS AND TWO OF THOSE ARE a2.24's OWN,
 *  so the claim is about the product rather than about this lesson.
 *
 *  `lesson-contract.test.ts` requires every A2 trapDrill to walk
 *  `rule > cards > audio > drill`, with `swipe`, an `audio` spec, a `say` and a
 *  GATED drill step. `size` COMES OFF a stepped trapDrill: the stacked shape
 *  hides the gate, the audio and the sub-mission number.
 *
 *  THE AUDIO STEP PLAYS EACH CARD'S `fr`, so nothing in `fr` may be a form
 *  French refuses. `les leur` is in `promptSound`, which is the wrong reading
 *  the card exists to correct, and this is one of exactly two places in the
 *  build where it appears. */
const S15_TRAP: LessonSection = {
  type: 'trapDrill',
  id: 's15-trap',
  layer: 'core',
  swipe: true,
  title: 'Three words, four letters each',
  rule: {
    title: 'Only one of the three never grows',
    body: `« ${LEUR_RULE} » is ${INDIRECT_POSS}'s line, and ${LEUR_RULE_SCOPE}. The other two take one. ${Cap(POSSESSIVE_ADJ_REF)}'s test sorts them: « ${A117_TEST} ».`,
  },
  cards: [
    { promptLabel: 'a verb behind it', promptSound: 'Je leurs parle.', fr: 'Je leur parle.', ipa: '/ʒə lœʁ paʁl/', tip: `${INDIRECT_POSS}'s word. A verb is not a thing, so this one can never grow an s however many people you mean.` },
    { promptLabel: 'one thing behind it', promptSound: 'Voici leurs maison.', fr: 'Voici leur maison.', ipa: '/vwa.si lœʁ mɛ.zɔ̃/', tip: `${POSSESSIVE_ADJ_REF}'s word. One house, so no s, however many people live in it.` },
    { promptLabel: 'several things behind it', promptSound: 'Voici leur clés.', fr: 'Voici leurs clés.', ipa: '/vwa.si lœʁ kle/', tip: 'The same word as the card before, and now there are several keys, so the s goes on.' },
    { promptLabel: 'nothing behind it', promptSound: 'Le sac est leur.', fr: 'Le sac est le leur.', ipa: '/lə sak ɛ lə lœʁ/', tip: "This lesson's word. Nothing follows it at all, so the article comes back in front." },
    { promptLabel: 'nothing behind it, several things', promptSound: `Les sacs sont ${NO_SUCH_FORM}.`, fr: 'Les sacs sont les leurs.', ipa: '/le sak sɔ̃ le lœʁ/', tip: 'And the plural puts an s on both words. There is no version of this with the s on only one of them.' },
    { promptLabel: 'and once more with a verb', promptSound: 'Je leurs écris.', fr: 'Je leur parle.', ipa: '/ʒə lœʁ paʁl/', tip: 'Back to the first one, which is the only one of the three that is always the same.' },
  ],
  drill: [
    { promptSay: 'Je ... parle.', opts: ['leurs', 'leur'], correct: 1 },
    { promptSay: 'Voici ... clés.', opts: ['leurs', 'leur'], correct: 0 },
    { promptSay: 'Voici ... maison.', opts: ['leur', 'leurs'], correct: 0 },
    { promptSay: 'Le sac est ... .', opts: ['le leur', 'leur'], correct: 0 },
    { promptSay: 'Les sacs sont ... .', opts: [NO_SUCH_FORM, 'les leurs'], correct: 1 },
    { promptSay: 'Je ne ... écris pas.', opts: ['leur', 'leurs'], correct: 0 },
    { promptSay: 'Les clés sont ... .', opts: ['les leurs', 'les leur'], correct: 0 },
    { promptSay: 'Voici ... sac.', opts: ['leurs', 'leur'], correct: 1 },
  ],
  steps: [
    { label: 'The rule', kind: 'rule', title: 'Only one of the three never grows' },
    { label: 'Six sentences', kind: 'cards', title: 'What sits behind it' },
    { label: 'Hear them', kind: 'audio', title: 'And none of it is audible' },
    { label: 'Now you pick', kind: 'drill', title: 'Eight in a row', gate: true },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-34-trap' },
  say: REFRAME,
  terms: ['threeLeurs'],
};

/** `swipe: true` IS MANDATORY. Three shipped lessons omit it and lose the deck;
 *  `MissionSection.tsx` branches on `commonErrors` with `swipe: true` only, and
 *  without it a1.01 mission 5 drew a fully blank screen.
 *
 *  Each `why` explains why the wrong version was a reasonable thing to have
 *  said. That is the difference between a correction and a telling-off. */
const S16_ERRORS: LessonSection = {
  type: 'commonErrors',
  id: 's16-errors',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'The five that catch people',
  errors: [
    {
      wrong: "C'est mien.",
      right: "C'est le mien.",
      why: 'Reasonable, because mine is one word in English and takes nothing in front of it. This one needs an article, and it needs it because the noun has gone.',
    },
    {
      wrong: "C'est le mienne.",
      right: "C'est la mienne.",
      why: 'Reasonable, and it is the half-finished version of the rule: the second word was agreed with the suitcase and the first one was not. Both of them move or neither does.',
    },
    {
      wrong: 'La valise est le mien.',
      right: 'La valise est la mienne.',
      why: 'Reasonable, and it is the mistake from the counter. A man saying this has agreed the sentence with himself, which is the one thing French never asks for here.',
    },
    {
      wrong: 'Les sacs sont les leur.',
      right: 'Les sacs sont les leurs.',
      why: `Reasonable, because ${INDIRECT_REF} spent a whole lesson on a leur that never takes an s. That one has a verb behind it. This one has nothing behind it, and its plural puts an s on both words.`,
    },
    {
      wrong: 'La valise est la notre.',
      right: 'La valise est la nôtre.',
      why: 'Reasonable, and you will never catch it by ear or by typing. With a noun behind it the word has no accent; with nothing behind it, it does.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['twoWords', 'threeLeurs', 'accent'],
};

/** REQUIRED LAYOUT 3. `C'est le mien` beside `C'est à moi`, and THE REGISTER IS
 *  MARKED ON BOTH HALVES rather than on one: a card that labels only the spoken
 *  version leaves the learner to infer the other is neutral, and it is not.
 *
 *  THE AXIS IS a2.01's AND NOTHING IS ADDED TO IT. a2.01 set `nous` written
 *  against `on` said for the whole level; this is the same axis with two more
 *  entries on it.
 *
 *  THE LIAISON IS REAL AND NOTHING IN THIS PROJECT CHECKS ONE. `c'est à` is
 *  `est` plus a vowel, so the t moves onto the next syllable: `seh tah MWAH`.
 *  U+203F draws as a low underscore on a Pixel 6 and there is not one anywhere
 *  in this build.
 *
 *  DISPLAY_PARITY pins both halves of the first pair. */
const S17_AMOI: LessonSection = {
  type: 'cardDeck',
  id: 's17-amoi',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'What people actually say',
  hint: 'Four cards. Two ways to say one thing, and they are not interchangeable.',
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-34-amoi' },
  say: REFRAME,
  terms: ['spoken', 'twoWords'],
  cards: [
    {
      head: 'the one you write',
      label: WRITTEN_MARK,
      fr: "C'est le mien.",
      sub: '[seh luh MYEHⁿ]',
      body: 'Two words, both agreed with the thing. This is what you need once the thing has been named, because it is standing in for a noun that was already said.',
    },
    {
      head: 'the one you hear',
      label: SPOKEN_MARK,
      fr: "C'est à moi.",
      sub: '[seh tah MWAH]',
      body: 'Nothing agrees with anything. The same three words work for a bag, a suitcase, gloves and keys, which is exactly why people reach for it first.',
    },
    {
      head: 'and the same pair for you',
      label: `${WRITTEN_MARK} · ${SPOKEN_MARK}`,
      fr: "C'est le tien. / C'est à toi.",
      sub: '[seh luh TYEHⁿ] · [seh tah TWAH]',
      body: 'One meaning, two registers. The first tells you the thing is masculine and the second tells you nothing about the thing at all.',
    },
    {
      head: 'the t you did not write',
      label: 'and it is there in both',
      fr: "C'est à moi. / Le sac est à moi.",
      sub: '[seh tah MWAH] · [luh SAK eh tah MWAH]',
      body: 'est ends in a silent t until a vowel follows it, and then the t moves across and starts the next syllable. Say tah, not ah, and it will sound like French.',
    },
  ],
};

/** WRITE THE AGREEMENT, WHICH IS THE SURFACE THAT CAN ACTUALLY SEPARATE THEM.
 *
 *  `fold()` KEEPS A FINAL `-e` AND `-s`, measured, so `lemien`, `lamienne`,
 *  `lesmiens` and `lesmiennes` are four different strings and the whole Owns is
 *  typeable. That is rare in this band.
 *
 *  ALL EIGHT RESOLVE TO LETTERS MODE through the real `dicteeMode`, asserted in
 *  the batch. Corrections §4 is why: word mode hands every real word over
 *  pre-spelled. `La valise est la mienne.` is 19 letters and `Les clés sont les
 *  miennes.` is 21, so the four-cell frame CANNOT be the dictée and the
 *  `C'est` frame is. */
const S18_DICTEE: LessonSection = {
  type: 'dictation',
  id: 's18-dictee',
  layer: 'core',
  title: 'Write the two words',
  itemIds: DICTEE_IDS,
  audio: AUDIO,
  say: REFRAME,
  terms: ['twoWords', 'spoken'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT V — PRODUCTION
 * ══════════════════════════════════════════════════════════════════════════ */

/** CLAIMING A THING OUT LOUD, WHICH IS THE canDo.
 *
 *  `alts` on every turn so more than one phrasing is accepted; `stt` scores
 *  against all of them, best match wins. `userEn` on every turn, or the reveal
 *  shows a French sentence the learner is told they should have said and cannot
 *  read. `scenario.logic.test.ts` requires two `alts` and a `userEn` on every
 *  role-play turn seed-wide.
 *
 *  NO CONDITIONAL AND NO SUBJUNCTIVE, enforced seed-wide by
 *  `production-surface.test.ts` for every A2 production section. And no
 *  imparfait either, which nothing enforces and which a2.33's self-audit found
 *  on its own scenario after the build was applied.
 *
 *  NOT ONE TURN USES A COMPARATIVE. This lesson imports seven of a2.08's rows
 *  and teaches none of it, and a line the learner is asked to say is the place
 *  that matters most. */
const S19_TALK: LessonSection = {
  type: 'scenario',
  id: 's19-talk',
  layer: 'core',
  title: 'At the left-luggage counter',
  setting: 'The counter from the opening scene, the next morning. Four bags, two of them yours, and the clerk is patient and will not guess.',
  turns: [
    {
      ai: 'Bonjour. Vous avez un ticket ?',
      en: 'Hello. Do you have a ticket?',
      user: "Oui, c'est le mien.",
      userEn: "Yes, this one is mine. (ticket is masculine, so the masculine pair.)",
      alts: [
        { fr: "Oui, voici le mien.", en: 'Yes, here is mine.' },
        { fr: "Oui, c'est à moi.", en: "Yes, it's mine." },
      ],
    },
    {
      ai: 'Merci. Alors, la valise noire, elle est à vous ?',
      en: 'Thank you. So, the black suitcase, is it yours?',
      user: 'Oui, la valise est la mienne.',
      userEn: 'Yes, the suitcase is mine. (valise is feminine, so both words move.)',
      alts: [
        { fr: "Oui, c'est la mienne.", en: "Yes, it's mine." },
        { fr: 'Oui, elle est à moi.', en: 'Yes, it is mine.' },
      ],
    },
    {
      ai: "Et le sac gris à côté ? Il est à vous aussi ?",
      en: 'And the grey bag next to it? Is that yours too?',
      user: 'Non, ce sac est le leur.',
      userEn: 'No, that bag is theirs. (Several owners, and the article comes back the same way.)',
      alts: [
        { fr: "Non, il est le leur.", en: 'No, it is theirs.' },
        { fr: 'Non, ce sac est le sien.', en: 'No, that bag is his.' },
      ],
    },
    {
      ai: "Très bien. Et ces gants sur l'étagère ?",
      en: 'Very good. And these gloves on the shelf?',
      user: 'Ce sont les miens.',
      userEn: 'Those are mine. (gants is masculine and plural, so les miens.)',
      alts: [
        { fr: 'Les gants sont les miens.', en: 'The gloves are mine.' },
        { fr: 'Oui, ils sont à moi.', en: 'Yes, they are mine.' },
      ],
    },
    {
      ai: "Il y a aussi des clés. Elles sont à vous ou à votre sœur ?",
      en: 'There are keys as well. Are they yours or your sister\'s?',
      user: 'Ce sont les siennes.',
      userEn: "They are hers. (clés is feminine and plural, and les siennes says nothing about whether she is a woman.)",
      alts: [
        { fr: 'Les clés sont les siennes.', en: 'The keys are hers.' },
        { fr: 'Ce sont les clés de ma sœur.', en: "They're my sister's keys." },
      ],
    },
    {
      ai: "Parfait. Donc la valise et les gants pour vous, et le reste pour eux.",
      en: 'Perfect. So the suitcase and the gloves for you, and the rest for them.',
      user: "C'est ça. La valise est la mienne, les gants sont les miens, et le sac est le leur.",
      userEn: "That's right. The suitcase is mine, the gloves are mine, and the bag is theirs. (Three things, three forms, and no owner in any of them.)",
      alts: [
        { fr: "Oui, et le sac est le leur.", en: 'Yes, and the bag is theirs.' },
        { fr: "C'est ça, merci beaucoup.", en: "That's right, thank you very much." },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['twoWords', 'owned', 'spoken'],
};

/** SAY EVERY FORM, OUT LOUD.
 *
 *  `practice` IS MANDATORY: `lesson-contract.test.ts` mirrors the publish gate
 *  and fails a non-assessment lesson with no practice section, an empty
 *  `practice.itemIds` or an empty `Lesson.itemIds`.
 *
 *  `skill: 'speak'` NEEDS `voiceflash` ON EVERY ITEM IT NAMES. So this names
 *  only rows that carry it: the thirty-one authored and the twenty-one imported
 *  headword and `leur` rows. NOT ONE of the nine imported comparative sentences
 *  is here, because all nine are `dictation`-only or `sentence`-only and would
 *  be silent.
 *
 *  `skill: 'write'` DRAWS NO WRITING SURFACE and is not used anywhere. */
const S20_SPEAK: LessonSection = {
  type: 'practice',
  id: 's20-speak',
  layer: 'core',
  title: 'Say all six families, out loud',
  skill: 'speak',
  itemIds: [
    // The adjective/pronoun pairs, which is the Owns being produced.
    E(364), E(365), E(366), E(367), E(368), E(369), E(370), E(371),
    // The four-cell frame.
    E(372), E(373), E(374), E(375),
    // Trap 1.
    E(376), E(377), E(378), E(379),
    // The three that have three forms.
    E(380), E(381), E(382), E(383), E(384), E(385), E(395),
    // Trap 4 and trap 3.
    E(386), E(387), E(388), E(389), E(390), E(391),
    // The authored headword and the generalisation frame.
    E(392), E(393), E(394),
    // The eighteen published headwords and a2.24's three leur rows.
    ...IMPORTED.headwords, ...IMPORTED.leurRows,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['twoWords'],
};

const S21_CHECK: LessonSection = {
  type: 'progressCheck',
  id: 's21-check',
  layer: 'core',
  title: 'Where you stand',
  body: 'You can say mine, yours and theirs about a thing you have not named, in all four cells, including for a word this lesson never showed you. The thing to check is the one nobody will correct out loud. Getting the gender wrong here does not stop you being understood, so it can sit in your French for years. Go back to act two and write all four out, from the English, without looking. If the article and the ending agree four times, the lesson has landed.',
  stats: [
    { k: 'Families', v: 'six, and three of them have four forms' },
    { k: 'The other three', v: 'nôtre, vôtre, leur. Three forms each' },
    { k: 'Decided by', v: 'the thing, never the owner' },
    { k: 'Never audible', v: 'the plural s, and the accent on nôtre' },
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
 *      typeIn        15    50%    the band's 32%, weighted up as the prompt asks
 *      mcq            7    23%    the band's 38%, and well under the half cap
 *      errorSpot      6    20%    the band's 17%
 *      listenChoose   2     7%    the band's 10%
 *
 *  THE TYPED WEIGHT IS FORCED RATHER THAN CHOSEN, and for the opposite reason
 *  to a2.33's. There `fold()` was the only surface that worked; here it is
 *  genuinely good: it keeps a final `-e` and a final `-s`, which is exactly
 *  what separates the four cells, so agreement is the one thing in this lesson
 *  a typed question can test properly.
 *
 *  WHAT IS TESTED WHERE, AND WHY IT COULD NOT BE ANYWHERE ELSE:
 *
 *    typeIn        the four cells, because fold() keeps the -e and the -s that
 *                  separate them. The prompt asks for the owned noun's gender
 *                  and number to be fixed in the stem and every one does it
 *    errorSpot     the bare form, the half-agreed form, and leurs where leur
 *                  belongs. All three are whole-sentence errors
 *    mcq           the circumflex, which fold() strips and the ear cannot
 *                  reach, and the generalisation, where a wrong option has to
 *                  be shown
 *    listenChoose  le mien against la mienne, which is the one genuinely
 *                  audible contrast in the paradigm
 *
 *  NO EAR QUESTION OFFERS TWO MEMBERS OF ONE HOMOPHONE GROUP, and here that
 *  rules out every singular against its own plural. Enforced by
 *  `HOMOPHONE_FORMS` rather than by a sentence in a report.
 *
 *  AT LEAST ONE ITEM USES A NOUN ABSENT FROM THE LESSON'S OWN VOCABULARY, which
 *  the prompt asks for: `casquette`, in round 2.
 *
 *  The quiz SHUFFLES its options at runtime, so nothing here is hand-randomised.
 *  Missions do not shuffle and `s08-unseen` is authored in its intended order. */
const S22_QUIZ: LessonSection = {
  type: 'quiz',
  id: 's22-quiz',
  layer: 'core',
  title: 'The exam',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-cells',
      label: 'Which of the four',
      targets: ['owner-agreement'],
      questions: [
        { format: 'typeIn', q: "sac is masculine. It's mine. Write it, starting with C'est.", answer: "C'est le mien", accept: ["C'est le mien", "C'est le mien.", 'Cest le mien'], why: 'sac is masculine and there is one of it, so both words are the masculine singular ones. Nothing about who owns it comes into either choice.', ref: 's04-four' },
        { format: 'typeIn', q: "valise is feminine. It's mine. Same sentence, same opening.", answer: "C'est la mienne", accept: ["C'est la mienne", "C'est la mienne.", 'Cest la mienne'], why: 'Both words moved, because valise is feminine. This is the cell the counter could not produce and the only one where the second word changes its sound.', ref: 's04-four' },
        { format: 'typeIn', q: "gants is masculine and plural. They're mine. Start with Ce sont.", answer: 'Ce sont les miens', accept: ['Ce sont les miens', 'Ce sont les miens.'], why: 'les for the plural and miens with an s on the end. The s is written and never said, so this is a spelling you can only get right on the page.', ref: 's04-four' },
        { format: 'typeIn', q: "clés is feminine and plural. They're mine.", answer: 'Ce sont les miennes', accept: ['Ce sont les miennes', 'Ce sont les miennes.'], why: 'The same les as the gloves and a different second word. Four cells, and this is the fourth.', ref: 's04-four' },
        { format: 'mcq', q: 'A man is talking about his suitcase. Which one does he say?', opts: ["C'est le mien.", "C'est mienne.", "C'est la mienne."], correct: 2, why: 'valise is feminine, so la mienne, and it makes no difference at all that the speaker is a man. That is the whole rule in one question.', ref: 's04-four' },
        { format: 'typeIn', q: 'The bag is mine. sac is masculine. Start with Le sac.', answer: 'Le sac est le mien', accept: ['Le sac est le mien', 'Le sac est le mien.'], why: 'The thing is named at the front and stood in for at the back, and both ends took their shape from the same word.', ref: 's04-four' },
        { format: 'errorSpot', q: 'One of the two words did not agree. Write the sentence out.', prompt: "C'est le mienne.", answer: "C'est la mienne.", accept: ["C'est la mienne.", "C'est la mienne"], why: 'The second word was agreed with the suitcase and the first one was left masculine. Both move together or neither does.', ref: 's16-errors' },
        { format: 'errorSpot', q: 'A word is missing. Write what she should have said.', prompt: "C'est mienne.", answer: "C'est la mienne.", accept: ["C'est la mienne.", "C'est la mienne"], why: 'Reasonable, because mine is one word in English. In French the noun has gone and the article comes back to fill the space it left.', ref: 's16-errors' },
      ],
    },
    {
      id: 'r2-thing',
      label: 'The thing, not the owner',
      targets: ['no-article'],
      questions: [
        { format: 'typeIn', q: 'trousse is feminine. The pencil case is yours. Start with La trousse.', answer: 'La trousse est la tienne', accept: ['La trousse est la tienne', 'La trousse est la tienne.'], why: 'Feminine, so la tienne, and it is yours whoever you are. The word for the thing did all the work.', ref: 's08-unseen' },
        { format: 'mcq', q: `${UNSEEN.article} is feminine, and this lesson has never shown it to you. It belongs to you.`, opts: [`C'est le mien.`, `C'est mienne.`, `C'est ${UNSEEN.answer}.`], correct: 2, why: 'You had never seen this word and the rule handled it anyway. Feminine rules out the first and French will not take the second without an article.', ref: 's08-unseen' },
        { format: 'typeIn', q: 'parapluie is masculine. The umbrella is yours. Start with Le parapluie.', answer: 'Le parapluie est le tien', accept: ['Le parapluie est le tien', 'Le parapluie est le tien.'], why: 'Masculine and singular, so the pair that never changes its sound. Only the article tells you it is one rather than several.', ref: 's08-unseen' },
        { format: 'listenChoose', q: 'Listen. Is the thing masculine or feminine?', say: 'Le sac est le mien.', opts: ['masculine', 'feminine'], correct: 0, why: 'luh, twice, and the last word ends on a vowel made through the nose. Both of those tell you the thing is masculine before you know what it is.', ref: 's06-listen' },
        { format: 'listenChoose', q: 'Listen again. Masculine or feminine?', say: 'La valise est la mienne.', opts: ['masculine', 'feminine'], correct: 1, why: 'lah this time, and a real n you can hear at the end. This is the one contrast in all eighteen forms your ear can settle.', ref: 's06-listen' },
        { format: 'mcq', q: 'Paul a le sien et Marie a le sien. What has changed between the two halves?', opts: ['nothing in the French, only the English', 'the ending, because Marie is a woman', 'the article, because the owner changed'], correct: 0, why: 'The same three words twice. le sien is his and hers at once, and whose it is has to come from the rest of the sentence.', ref: 's10-third' },
        { format: 'typeIn', q: 'The suitcase is his. valise is feminine. Start with La valise.', answer: 'La valise est la sienne', accept: ['La valise est la sienne', 'La valise est la sienne.'], why: 'la sienne, and the same three words would say it is hers. The feminine came from valise and never from him.', ref: 's10-third' },
        { format: 'errorSpot', q: 'The suitcase belongs to a man. One word is wrong anyway. Write it out.', prompt: 'La valise est le sien.', answer: 'La valise est la sienne.', accept: ['La valise est la sienne.', 'La valise est la sienne'], why: 'Agreed with the owner rather than the suitcase, which is the mistake from the counter and the reason this lesson exists.', ref: 's07-agree' },
      ],
    },
    {
      id: 'r3-leur',
      label: 'The three leurs',
      targets: ['leur-mix'],
      questions: [
        { format: 'errorSpot', q: 'A verb sits behind this one. Write it correctly.', prompt: 'Je leurs parle.', answer: 'Je leur parle.', accept: ['Je leur parle.', 'Je leur parle'], why: `${INDIRECT_POSS}'s word. A verb is not a thing, so this leur can never take an s however many people you mean.`, ref: 's15-trap' },
        { format: 'typeIn', q: 'Several keys, and they belong to several people. Here are their keys. Start with Voici.', answer: 'Voici leurs clés', accept: ['Voici leurs clés', 'Voici leurs clés.', 'Voici leurs cles'], why: `${POSSESSIVE_ADJ_REF}'s word, and the s is there because there are several keys. How many people own them never came into it.`, ref: 's15-trap' },
        { format: 'typeIn', q: 'One house, several people. Here is their house.', answer: 'Voici leur maison', accept: ['Voici leur maison', 'Voici leur maison.'], why: 'One house, so no s. The same word as the question before it and the thing behind it decided.', ref: 's15-trap' },
        { format: 'typeIn', q: 'sac is masculine. The bag is theirs. Start with Le sac.', answer: 'Le sac est le leur', accept: ['Le sac est le leur', 'Le sac est le leur.'], why: "This lesson's word. Nothing follows it, so the article comes back in front, exactly as it does for le mien.", ref: 's09-table' },
        { format: 'errorSpot', q: 'Several bags, several owners. One word is short of a letter.', prompt: 'Les sacs sont les leur.', answer: 'Les sacs sont les leurs.', accept: ['Les sacs sont les leurs.', 'Les sacs sont les leurs'], why: 'The plural puts an s on both words. There is no version of this with the s on only one of them, whatever you remember from the other leur.', ref: 's15-trap' },
        { format: 'typeIn', q: 'clés is feminine and plural. The keys are theirs. Start with Les clés.', answer: 'Les clés sont les leurs', accept: ['Les clés sont les leurs', 'Les clés sont les leurs.', 'Les cles sont les leurs'], why: 'The same two words the bags took. This family has no separate feminine plural, so the gender never comes up.', ref: 's11-three' },
        { format: 'mcq', q: 'Which of these three has a leur that can never take an s?', opts: ['Voici leur maison.', 'Je leur parle.', 'Le sac est le leur.'], correct: 1, why: 'A verb behind it. The other two can both take one as soon as there is more than one thing, and the first does it as leurs and the third as les leurs.', ref: 's15-trap' },
      ],
    },
    {
      id: 'r4-rest',
      label: 'Ours, yours and the little hat',
      targets: ['accent-blind'],
      questions: [
        { format: 'typeIn', q: 'valise is feminine. The suitcase is ours. Start with La valise.', answer: 'La valise est la nôtre', accept: ['La valise est la nôtre', 'La valise est la nôtre.', 'La valise est la notre'], why: 'la nôtre, and the accepted answers here include the version with no accent, because nothing you type can show one.', ref: 's11-three' },
        { format: 'mcq', q: 'Which one of these is spelled correctly?', opts: ['La valise est la notre.', 'La valise est le nôtre.', 'La valise est la nôtre.'], correct: 2, why: 'The accent goes on when nothing follows the word. This has to be a picked question, because a typed one strips the accent before it marks you.', ref: 's12-circ' },
        { format: 'mcq', q: 'Notre valise est ici. Why is there no accent on this one?', opts: ['because a noun follows it', 'because it is the plural', 'because it is informal'], correct: 0, why: 'valise is right behind it, so this is the one word ${POSSESSIVE_ADJ_REF} gave you. The accent belongs to the version with nothing behind it.', ref: 's12-circ' },
        { format: 'typeIn', q: 'valise is feminine, and you are speaking to more than one person. The suitcase is yours.', answer: 'La valise est la vôtre', accept: ['La valise est la vôtre', 'La valise est la vôtre.', 'La valise est la votre'], why: 'The vous version, and it has the same three cells as ours. The accent is there and nothing you type can prove it.', ref: 's11-three' },
        { format: 'typeIn', q: "It's mine, said the way people actually say it. Three words, and none of them agrees with anything.", answer: "C'est à moi", accept: ["C'est à moi", "C'est à moi.", "C'est a moi", 'Cest a moi'], why: 'You will hear this far more often than the two-word version, and it works for a bag, a suitcase, gloves and keys without changing.', ref: 's17-amoi' },
        { format: 'mcq', q: "You have already named the suitcase. Somebody asks whose it is. Which answer is the written one?", opts: ["C'est à moi.", "C'est la mienne.", "Elle est à moi."], correct: 1, why: 'The two-word version stands in for a noun that was already said, which is what it is for. The other two name you instead and are what you will hear.', ref: 's17-amoi' },
        { format: 'errorSpot', q: 'Several suitcases, and they belong to us. One word is missing a letter.', prompt: 'Les valises sont les nôtre.', answer: 'Les valises sont les nôtres.', accept: ['Les valises sont les nôtres.', 'Les valises sont les nôtres', 'Les valises sont les notres'], why: 'The plural puts an s on both words here too. This family has three cells and this is the third of them.', ref: 's11-three' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** Leitner close ON THE FOUR CELLS, which is the Owns. Not a summary of the
 *  band. */
const S23_REVIEW: LessonSection = {
  type: 'reviewDeck',
  id: 's23-review',
  layer: 'core',
  title: 'The four cells, one last time',
  cards: [
    { front: 'mine, about a bag', back: 'le mien', say: 'Le sac est le mien.' },
    { front: 'mine, about a suitcase', back: 'la mienne', say: 'La valise est la mienne.' },
    { front: 'mine, about gloves', back: 'les miens', say: 'Les gants sont les miens.' },
    { front: 'mine, about keys', back: 'les miennes', say: 'Les clés sont les miennes.' },
    { front: 'his or hers, about a bag', back: 'le sien', say: 'Le sac est le sien.' },
    { front: 'ours, about a suitcase', back: 'la nôtre', say: 'La valise est la nôtre.' },
    { front: 'theirs, about several bags', back: 'les leurs', say: 'Les sacs sont les leurs.' },
    { front: 'mine, out loud, in a queue', back: "C'est à moi", say: "C'est à moi." },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** THE REFRAME ONE LAST TIME, AND THE POINTERS THIS LESSON OWES.
 *
 *  `points` is capped at FOUR on a core screen (`core-list-items`).
 *
 *  THE OBJECT PRONOUNS GET ONE LINE, because the learner has three lessons of
 *  small words that go in front of the verb and this one does not go there.
 *
 *  a2.35, the A2 review, is next and is named. */
const S24_ROUNDUP: LessonSection = {
  type: 'roundup',
  id: 's24-roundup',
  layer: 'core',
  title: 'The thing decided, every time',
  body: `${REFRAME} ${Cap(COMPARATIVE_REF)}, ${DEMONSTRATIVE_REF} and this lesson all put a small word where a noun used to be, and this is the last of the three. One thing to leave alone: a possessive pronoun does not sit in front of the verb, which is where ${INDIRECT_REF} and ${Y_EN_REF} put theirs. And ${AGREEMENT_REF}'s idea is under all of it: a French word takes its shape from a noun, and here the noun is not even in the sentence.`,
  points: [
    `${Cap(POSSESSIVE_ADJ_REF)}'s question, still the only one: what kind of word is the thing, and how many.`,
    'Six families. Three of them have four forms and three have three.',
    'le sien is his and hers, and les leurs is masculine and feminine.',
    `${Cap(REGISTER_REF)} set the register axis, and C'est à moi sits on it beside on.`,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['twoWords', 'third'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFERENCE SHEET
 *
 *  The ONE `table` in this lesson, and it is here because a `table` at layer
 *  `core` is refused outright by `validateDensity`. `layer: 'deep'` plus
 *  `render: 'sheet'` is the only part of the three-layer model that works.
 *
 *  `cheatSheet` IS NOT USED. Inside a reference sheet it draws its title and
 *  nothing else; `ReferenceSheet.tsx` draws `teach`, `letterGrid` and `table`
 *  and that is all.
 *
 *  THREE COLUMNS, AND a2.08's DEVICE CHECK IS WHY. On a Pixel 6 the sheet's
 *  table does not scroll horizontally: a fourth column is cut off at the screen
 *  edge with no affordance saying so. The feminine plural lives in
 *  `rowDetails`, which opens on tap and has the room.
 *
 *  A `sheetId` resolves only inside the lesson that declares it. Cross-lesson
 *  sheets do not exist at any price.
 * ══════════════════════════════════════════════════════════════════════════ */

const SHEET_SIX: ReferenceSheet = {
  id: 'sheet-six',
  title: 'All six families, on one page',
  layer: 'deep',
  contains: ['the four cells', 'the three that only have three', 'the adjective beside the pronoun'],
  sections: [
    {
      type: 'teach',
      id: 'sheet-teach',
      layer: 'deep',
      render: 'sheet',
      title: 'How to read this',
      // `layer: 'deep'` is exempt from the 45-word core cap.
      body: `Read across a row and you are reading one owner. Read down a column and you are reading one kind of thing. The owner picks the row and you knew that before this lesson started; the thing picks the column, and that is the part ${POSSESSIVE_ADJ_REF} taught you and this lesson spends on two words instead of one. The bottom three rows stop after three cells, because their plural covers both kinds of thing at once. And every form on this page has an article in front of it, which is the single thing that separates the whole table from ${POSSESSIVE_ADJ_REF}.`,
    },
    {
      type: 'table',
      id: 'sheet-table',
      layer: 'deep',
      render: 'sheet',
      title: 'Les pronoms possessifs',
      // BOTH GENDERS IN THE CELLS, AND CORRECTIONS §15.5 IS WRONG ABOUT WHY
      // THAT IS SAFE.
      //
      // §15.5 says « a sheet does not scroll sideways », and a2.08 shipped a
      // four-column table, lost the fourth column, and recorded the rule as a
      // COLUMN COUNT. Both halves are false, and `ReferenceSheet.tsx` says so
      // in two lines:
      //
      //   SheetTable is wrapped in `<ScrollView horizontal nestedScrollEnabled
      //   directionalLockEnabled>` — it DOES scroll sideways, by design, with
      //   the comment « so a wide row never squashes its cells into unreadable
      //   columns on a phone ».
      //
      // v3 of this lesson trimmed these cells to the masculine after seeing the
      // third column past the screen edge on a Pixel 6, and moved the feminine
      // into `rowDetails`. THAT WAS THE REGRESSION, not the fix:
      //
      //   `case 'table'` renders `<SheetTable cols={section.cols}
      //   rows={section.rows} />` and NEVER PASSES `rowDetails`. It has no
      //   reader inside a reference sheet, exactly like `cheatSheet`.
      //
      // So v3 moved nine forms onto a field nothing draws. Reverted at v4: the
      // cells carry the whole paradigm and the learner drags the table, which
      // is what the horizontal ScrollView is there for.
      cols: ['Owner', 'One thing', 'Several things'],
      rows: [
        ['mine', 'le mien · la mienne', 'les miens · les miennes'],
        ['yours', 'le tien · la tienne', 'les tiens · les tiennes'],
        ['his, hers', 'le sien · la sienne', 'les siens · les siennes'],
        ['ours', 'le nôtre · la nôtre', 'les nôtres'],
        ['yours, formal', 'le vôtre · la vôtre', 'les vôtres'],
        ['theirs', 'le leur · la leur', 'les leurs'],
      ],
      rowDetails: [
        { title: 'mine, and the one to learn first', body: 'le mien for a masculine thing, la mienne for a feminine one, and les miens or les miennes for several. The article and the ending both move, and they move together.' },
        { title: 'yours, to one person you know', body: 'le tien, la tienne, les tiens, les tiennes. Exactly the same four cells as mine. Use it with anyone you would say tu to.' },
        { title: 'his or hers, and it will not say which', body: 'le sien, la sienne, les siens, les siennes. One set for both, so the sentence around it has to say whose. ${Cap(INDIRECT_REF)} met the same collapse with lui.' },
        { title: 'ours, and there is no fourth cell', body: 'le nôtre, la nôtre, les nôtres. The plural covers masculine and feminine at once. The accent is only ever on the pronoun; notre with a noun behind it has none.' },
        { title: 'yours, to more than one person', body: 'le vôtre, la vôtre, les vôtres. Three cells again. Same accent rule: votre takes a noun, le vôtre does not.' },
        { title: 'theirs, and the s goes on both words', body: 'le leur, la leur, les leurs. Three cells, and there is no les leur. The leur that never takes an s is the one in front of a verb, which belongs to ${INDIRECT_REF}.' },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REMEDIATION DRILLS
 *
 *  Deliberately NOT in `sections`: they are not part of the spine and a learner
 *  who never trips one never sees it.
 *
 *  `drillForRound` fires the drill of the FIRST RESOLVING TARGET of a round and
 *  then stops, so each of these is the first resolving target of exactly one
 *  round. a1.05 shipped two dead drills and a1.07's first draft a third.
 *
 *  `items` here is also HOW THREE IMPORTED COMPARATIVE SENTENCES BECOME
 *  REACHABLE. All nine are `dictation`-only or `sentence`-only, so no
 *  deckTranche can release one.
 *
 *  `LessonDrill.format` is a LITERAL UNION, not string. The admin typecheck is
 *  the only check in this project that says so.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILLS: LessonDrill[] = [
  {
    id: 'd-owned',
    title: 'Read the thing, not the owner',
    format: 'sort' as const,
    coach: 'Two piles. Look at the word for the THING and ask which kind it is. Who owns it never comes into it.',
    buckets: ['masculine thing', 'feminine thing'],
    items: [E(372), E(373), E(374), E(375), 'fr.a2.comparaisons.064', 'fr.a2.comparaisons.084'],
    audio: AUDIO,
  },
  {
    id: 'd-article',
    title: 'The word in front',
    format: 'mcq' as const,
    coach: 'The noun has gone, so something has to hold its place. Say the article first and the rest follows.',
    q: "valise is feminine. Which one is French?",
    opts: ["C'est mienne.", "C'est la mienne.", "C'est le mienne."],
    correct: 1,
    why: 'A possessive pronoun always has an article in front of it, and both words agree with the thing. The third moved one of them and left the other.',
    items: [E(364), E(365), E(366), E(367), E(393), E(394)],
    audio: AUDIO,
  },
  {
    id: 'd-leur',
    title: 'Which of the three leurs',
    format: 'mcq' as const,
    coach: 'Ask what sits behind the word. A verb, one thing, several things, or nothing at all.',
    q: 'Les sacs sont ... . Several bags, several owners.',
    opts: ['les leur', 'les leurs', 'leurs'],
    correct: 1,
    why: 'Nothing follows it, so the article comes back, and the plural puts an s on both words. The first has the s on only one and the third has no article.',
    items: [E(383), E(384), E(385), 'fr.a2.pronoms-essentiels.240', 'fr.a2.pronoms-essentiels.258', 'fr.a2.pronoms-essentiels.259'],
    audio: AUDIO,
  },
  {
    id: 'd-accent',
    title: 'With a noun, or without',
    format: 'flashcard' as const,
    coach: 'Read the English, then say the French. If the thing is named, no accent. If it is not, the accent and the article both arrive.',
    items: [E(380), E(381), E(382), E(386), E(387), 'fr.a2.comparaisons.017'],
    audio: AUDIO,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ══════════════════════════════════════════════════════════════════════════ */

export const SECTIONS: LessonSection[] = [
  S01_SCENE, S02_GOALS, S03_ADJ,
  S04_FOUR, S05_A117, S06_LISTEN, S07_AGREE, S08_UNSEEN, S09_TABLE,
  S10_THIRD, S11_THREE, S12_CIRC, S13_READ, S14_FLASH,
  S15_TRAP, S16_ERRORS, S17_AMOI, S18_DICTEE,
  S19_TALK, S20_SPEAK, S21_CHECK,
  S22_QUIZ, S23_REVIEW, S24_ROUNDUP,
];

/** Every id the lesson can put in front of a learner: what it authored, plus
 *  every id any section names, any deckTranche releases and any LessonDrill
 *  lists.
 *
 *  THE MERGE PULLS EVERY ONE OF THESE OUT OF POSTGRES. `pronoms-essentiels`
 *  shows 202 in the seed and holds 661 in Postgres, so roughly two thirds of
 *  the theme is outside the cut, and the b1 and b2 headwords are cut hardest of
 *  all: not one of the eighteen was in the seed before this build. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...IMPORT_IDS])];

/** Tranches release every taught item exactly once and nothing untaught, and no
 *  tranche releases an item the acts before it have not shown.
 *
 *  NOT ONE ID FROM `IMPORTED.sentences` IS HERE. All nine are `dictation`-only
 *  or `sentence`-only with NO flashcard, so a release would be a line that
 *  validates, publishes and serves no card. They are reachable through
 *  `s05-a117`, `s07-agree`, `s08-unseen`, `s11-three`, the terms and the drills
 *  instead, and the batch asserts both directions.
 *
 *  The eighteen headwords and a2.24's three `leur` rows ARE here, because every
 *  one carries `flashcard`. That asymmetry is measured, not assumed. */
export const DECK_TRANCHE: string[][] = [
  // act 1 — the adjective against the pronoun, four pairs
  [E(364), E(365), E(366), E(367), E(368), E(369), E(370), E(371)],
  // act 2 — the four cells, the frame, and every published headword the
  // tapTable puts on a screen
  [
    E(372), E(373), E(374), E(375), E(393), E(394),
    ...IMPORTED.headwords,
  ],
  // act 3 — trap 1, the three-form families and the accent pair
  [
    E(376), E(377), E(378), E(379),
    E(380), E(381), E(382), E(383), E(384), E(385), E(395),
    E(386), E(387), E(392),
  ],
  // act 4 — trap 2's published rows and trap 3
  [
    ...IMPORTED.leurRows,
    E(388), E(389), E(390), E(391),
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
  tag: 'A2 · LEÇON 34',
  intro: 'English says mine for a man, a woman, a bag and a suitcase. French has eighteen ways of saying it and picks between them by looking at the thing rather than at you. You already know how to make that decision. What is new is that it now takes two words, and the first of them is the little word you were taught to leave out.',
  // PE, not CO. The four cells differ by a final -e and a final -s, one of the
  // two contrasts is inaudible, and the accent on nôtre is inaudible AND
  // unfoldable, so the quiz runs typeIn-heaviest of any surface here.
  skill: 'PE',
  // NOT `teaches`, NOT `canDo`, NOT `track`. All three draw nothing on a Lesson.
  grammarAssumed: [
    POSSESSIVE_ADJ_UNIT, GENDER_UNIT, AGREEMENT_UNIT, REGISTER_UNIT,
    INDIRECT_UNIT, DEMONSTRATIVE_UNIT, COMPARATIVE_UNIT, 'a2.25', 'a1.06',
  ],
  grammarIntroduced: [
    'The possessive pronouns le mien, le tien and le sien as four-cell paradigms selected by the gender and number of the possessum rather than of the possessor',
    'That a possessive pronoun is obligatorily preceded by a definite article, which is the reverse of the possessive determiner taught in a1.17',
    'That le nôtre, le vôtre and le leur have three cells rather than four, because their plural neutralises gender',
    'That the third-person singular sien is unmarked for the gender of the possessor, so le sien is both his and hers',
    'That the plural -s is orthographic on every one of the eighteen forms, so number is carried audibly by the article alone',
    'The orthographic distinction between the determiners notre and votre and the pronouns nôtre and vôtre, which is inaudible and cannot be assessed by any typed surface',
    'That leur has three distinct grammatical roles across a1.17, a2.24 and this unit, and takes an -s in two of the three',
    'The prepositional possessive à plus a stressed pronoun as the spoken register alternative to the possessive pronoun',
  ],
  overview: {
    // Must match the unit's English name, which `content_units` requires.
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Deux mots, et c\'est la chose possédée qui les choisit tous les deux.',
    minutes: 34,
    difficulty: 3,
    glyph: '⚯',
    screens: 96,
  },
  reframe: REFRAME,
  acts: [
    {
      id: 'act1',
      title: 'Un mot de plus',
      sections: ['s01-scene', 's02-goals', 's03-adj'],
      milestone: 'You have watched a correct rule produce a wrong sentence, and you have the adjective beside the pronoun on four screens',
      estScreens: 15,
      restPoints: ['s02-goals'],
    },
    {
      id: 'act2',
      title: 'Ce qui décide la forme',
      sections: ['s04-four', 's05-a117', 's06-listen', 's07-agree', 's08-unseen', 's09-table'],
      milestone: 'You put the right pair in front of a thing this lesson never showed you',
      estScreens: 26,
      restPoints: ['s05-a117', 's09-table'],
    },
    {
      id: 'act3',
      title: "Là où le français s'arrête",
      sections: ['s10-third', 's11-three', 's12-circ', 's13-read', 's14-flash'],
      milestone: 'You know which three families stop at three forms and why le sien will not tell you whose it is',
      estScreens: 22,
      restPoints: ['s11-three', 's13-read'],
    },
    {
      id: 'act4',
      title: 'Les trois leur',
      sections: ['s15-trap', 's16-errors', 's17-amoi', 's18-dictee'],
      milestone: 'The three leurs are three words to you, and you can write the two that grow',
      estScreens: 19,
      restPoints: ['s15-trap'],
    },
    {
      id: 'act5',
      title: 'Production',
      sections: ['s19-talk', 's20-speak', 's21-check'],
      milestone: 'You claimed five things at a counter, six turns, without naming any of them twice',
      estScreens: 12,
      restPoints: ['s20-speak'],
    },
    {
      id: 'act6',
      title: "L'examen",
      sections: ['s22-quiz', 's23-review', 's24-roundup'],
      milestone: 'Thirty questions, and the four cells one last time',
      estScreens: 10,
      restPoints: ['s23-review'],
    },
  ],
  errorTriggers: [
    {
      id: 'owner-agreement',
      description: 'Agrees the possessive with the person who owns the thing rather than with the thing itself.',
      detectOn: ['s04-four', 's07-agree', 's10-third'],
      drill: 'd-owned',
      // `retest` names a DRILL, not a section: validateLesson resolves it
      // against `Lesson.drills`.
      retest: 'd-article',
    },
    {
      id: 'no-article',
      description: 'Drops the article and produces the possessive bare, the way English does with mine.',
      detectOn: ['s03-adj', 's05-a117', 's08-unseen'],
      drill: 'd-article',
    },
    {
      id: 'leur-mix',
      // WORDED AROUND THE BANNED PHRASE ON PURPOSE. The first version read
      // "Carries a2.24's rule that leur never takes an s into the possessive",
      // which DESCRIBES the false claim rather than asserting it — and the
      // guard fired on it, correctly, because it cannot tell a use from a
      // mention. This is a2.33's "a lesson cannot teach four words it is
      // forbidden to list" one lesson along, and the answer there was the same:
      // reword, rather than widen the guard.
      description: `Carries the invariable leur of ${INDIRECT_REF} into the possessive, where the plural puts an -s on both words.`,
      detectOn: ['s15-trap', 's16-errors', 's11-three'],
      drill: 'd-leur',
      retest: 'd-leur',
    },
    {
      id: 'accent-blind',
      // "determiner" IS ON THE JARGON LIST AND THE GUARD FIRED ON IT HERE.
      // `ErrorTrigger.description` is read by NO renderer — `quizRounds.logic.ts`
      // consumes only `id`, `drill` and `retest`, grepped 2026-08-18 — so this
      // string reaches no learner and the guard is arguably too wide. It is
      // reworded rather than exempted: keeping the walk maximally strict costs
      // one sentence, and narrowing it would be the first step toward the hole
      // Corrections §9 records for `intro`.
      description: 'Writes notre or votre where the pronoun needs the accent, or puts the accent on the one that has a noun behind it.',
      detectOn: ['s12-circ', 's11-three', 's16-errors'],
      drill: 'd-accent',
    },
  ],
  drills: DRILLS,
  deckTranche: DECK_TRANCHE,
  sheets: [SHEET_SIX],
  terms: POSSESSIFS_PRONOMS_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v5: THE UNIT-ID MIGRATION. Every citation on a learner surface named the
  // unit by id — « a2.24's line » — which is a string a learner has never seen
  // and cannot look up. They now read « lesson 22's line », resolved through
  // the shipped `unit.seq` rather than the id, because 31 of 35 A2 units
  // disagree with their own id number and this lesson's own neighbour shipped
  // « since seq 17 of A1 » about a unit that is seq 20.
  //
  // The batch now refuses a raw id, and the word « seq », on any learner
  // surface, so this cannot come back.
  //
  // v4: THE DEVICE PASS, AND ITS OWN CORRECTION. v3 trimmed the sheet table's
  // cells to the masculine after seeing the third column past the screen edge
  // on a Pixel 6, and moved the feminine into `rowDetails`. Reading
  // `ReferenceSheet.tsx` afterwards showed BOTH halves of that reasoning were
  // wrong: `SheetTable` is wrapped in a horizontal `ScrollView` so the table is
  // MEANT to extend and be dragged, and `case 'table'` never passes
  // `rowDetails`, so v3 moved nine forms onto a field with no reader. The cells
  // are back to the full paradigm.
  //
  // v2, AND CORRECTIONS §10 IS WHY. v1 was applied to Postgres and merged into
  // the seed, and the guard then found that `la leur` was printed on the
  // tapTable detail and carried by no row: the batch's version of the same
  // check asked for the bare stem `leur`, which `le leur` satisfies, so it
  // reported clean. The fix is one authored sentence, `fr.a2.pronoms-essentiels.395`,
  // and one more example in `s11-three`.
  //
  // Correcting it under v1 would leave two different bodies as v1 — the shipped
  // one and the source — which is the drift this project has lost work to
  // twice. NOT `seed.version`, which is the OTA snapshot number and belongs to
  // the publish step.
  version: 5,
  // `LessonAudio` is NOT `SectionAudio`. It takes `defaultLang`, not `lang`, and
  // it has no `mode`. The admin typecheck is the only check that sees the
  // difference; `validateLesson` tolerates the unknown key and carries it into
  // Postgres, into seed.json and into the OTA snapshot, where nothing reads it.
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    coachVoice: 'coach-en-warm',
    recorded: [
      { id: 'rec-a2-34-adj', desc: 'The same thing said twice, four times over. ONE TAKE PER CARD, both halves inside it, and NO extra stress on the article. Stressing it would teach that the article is the point; the point is that the article and the ending move together.' },
      { id: 'rec-a2-34-four', desc: 'The four cells. ONE TAKE PER CARD. le mien and la mienne must be read with the difference that is actually there and no more: mien ends on a vowel made through the nose and stops, mienne puts a real n after it. Do not lengthen either, and do not stress the ending, because the learner has to hear a sound rather than a performance.' },
      { id: 'rec-a2-34-listen', desc: 'REQUIRED FOR THE ONLY EAR MISSION IN THE LESSON, AND THE CONSTRAINT CANNOT BE RECOVERED LATER. All four lines are ONE TAKE, ONE VOICE, RECORDED ADJACENTLY, in the order they are authored. Recorded apart, the learner compares four performances instead of four sounds. The plural s on miens and miennes is NOT said, in either line, and a reader who lets one through makes the third question measure something that is not in the language.' },
      { id: 'rec-a2-34-third', desc: 'The card that says le sien is his and hers must be read IDENTICALLY on both halves of Paul a le sien et Marie a le sien: same pace, same pitch, no lengthening on the second. The whole card says the French does not change, and a reader who separates them teaches the opposite of what it says.' },
      { id: 'rec-a2-34-trap', desc: 'The audio step plays each card\'s fr, which is the CORRECT form every time. The wrong version lives in promptSound and must be read at the same pace and with the same intonation as the correct one. leur and leurs are ONE SOUND and must be read as one: no audible s anywhere, on any card, because the entire trap is that the difference is not there to hear.' },
      { id: 'rec-a2-34-amoi', desc: "The register pair. C'est le mien and C'est à moi are one take each, both read as ordinary speech rather than one careful and one casual: the difference between them is which one people choose, not how they sound. The liaison in c'est à is obligatory and the t starts the next syllable, seh tah, never seh ah and never a t released on its own." },
    ],
    // NOT modelPlayback, wrongThenRight, perSentenceReplay, scoreOn, autoplay
    // or maxPlays. All six validate, publish and are read by NO renderer.
  },
};

/** Named so the batch, the merge and the test agree on which imports are
 *  reachable by being named rather than by being released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
