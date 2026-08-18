// a2.33.l1 « Les démonstratifs » — the lesson.
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
//   1. THE FOUR ADJECTIVES AND THE FOUR PRONOUNS TOGETHER, IN TWO ROWS, so
//      the shared root and the split job are visible at once.  -> `s03-both`
//      A `tapTable` at two rows, and it is the FIRST teaching screen in the
//      lesson, before any card, because it IS the Owns.
//
//      THREE COLUMNS, NOT FIVE, AND A DEVICE MEASUREMENT IS WHY.
//      `TapTableView` gives every column `flex: 1` inside a card padded 16
//      each side, with a 14dp chevron and a 12dp gap between columns. On a
//      Pixel 6 that leaves roughly 67dp per column at four columns, which is
//      about eight characters of `bodySm` per line. `ceux · celles` is
//      thirteen. At three columns it is roughly 95dp and every cell fits on
//      one or two lines. The brief asks for two ROWS; the columns are this
//      build's, and number is what they split on.
//
//   2. `ce livre` BESIDE `celui-ci`, the same referent with and without the
//      noun.                                                   -> `s04-grid`
//      Four cards, each one sentence twice, and the corpus rows behind them
//      (E337/E338, E339/E340) were authored as pairs for it.
//
//   3. `cet homme` BESIDE `ce livre`, audible, one tap each, so the vowel
//      collision is heard rather than read.                    -> `s06-vowel`
//      ONE TAKE, ONE VOICE, RECORDED ADJACENTLY, and `desc` on
//      `rec-a2-33-vowel` says so, because a rule about how something is
//      recorded becomes invisible the moment the clip is delivered.
//
// ONE `tapTable` IN THE FLOW AND ONE `table` IN A REFERENCE SHEET, then stop.
// A `table` at `layer: 'core'` is refused outright by `validateDensity` and a
// device check cannot find it, because it draws correctly and is refused at
// the batch. `layer: 'more'` is read by no renderer and draws exactly like
// `core`, so `render: 'sheet'` is the only part of the three-layer model that
// works.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHY THE OWNS IS TWO ACTS AND THE TRAP IS ONE
// ══════════════════════════════════════════════════════════════════════════
//
// Doctrine §B.5: the Owns must outweigh the paradigm. Here there is barely a
// paradigm to outweigh — eight cells is two rows of four — so the test that
// matters is that the two jobs (acts 2 and 3, ELEVEN missions) outweigh the
// trap and the scene (acts 4 and 1, SEVEN). A lesson that gave `cet` against
// `cette` more room than the split would be a lesson about a spelling.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE DRILL TRAP, WHICH IS WHY THE ADJECTIVE EVIDENCE IS NEVER RELEASED
// ══════════════════════════════════════════════════════════════════════════
//
// All twelve imported adjective rows carry `dictation` or `sentence` and
// NOTHING ELSE. A `deckTranche` release of any of them validates, publishes
// and serves no card. The twelve b1 pronoun rows are the opposite: every one
// carries `flashcard`, so those CAN be released and are.
//
// So every imported adjective sentence here is reachable by being NAMED by
// itemId — in `s08-unseen`, `s13-sort`, a lesson `term` or a `LessonDrill` —
// and the batch asserts both directions: a release that would draw nothing,
// and an import that nothing names.

import type { Lesson, LessonSection, LessonDrill, SectionAudio, ReferenceSheet } from '../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, REFRAME, E,
  ALL_ROWS, IMPORT_IDS, IMPORTED, NOT_DECK_ABLE, DICTEE_IDS,
  A206_SHAPE, A233_SHAPE, OBJECT_UNIT, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT,
  GENDER_UNIT, ARTICLE_UNIT, ELISION_UNIT, ELISION_REFRAME,
  VOWEL_UNIT, A216_REFRAME, VOWEL_CLAIM,
  INDIRECT_UNIT, Y_EN_UNIT, NOT_AN_OBJECT_CLAIM,
  POSSESSIVE_UNIT, COMPARATIVE_UNIT, IMPERSONAL_CLAIM,
  UNSEEN, AUDIBLE_CLAIM,
} from './demonstratifs-corpus.ts';
import { DEMONSTRATIFS_TERMS } from './demonstratifs-terms.ts';

/** NOT `as const`. A readonly `speeds` tuple is not assignable to
 *  `SectionAudio['speeds']`, which is a mutable `number[]`, and the admin
 *  typecheck is the only check in this project that says so. */
const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT I — DEUX MOTS, UNE RACINE
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.2's A2 register: BREAKDOWN, NOT RUDENESS. Nobody is impolite,
 *  nothing is mispronounced, and the learner runs out of sentence in public.
 *
 *  The prompt asks for exactly this: « Someone in a shop pointing at one of
 *  two things, who reaches for `celui`, produces it bare, and is handed the
 *  wrong item — or nothing, while the assistant waits for the rest of the
 *  sentence. Nobody corrects them. »
 *
 *  NO SPACED EXCLAMATION MARK IN ANY BUBBLE. One has made a scene lose its
 *  last word on a Pixel 6 while the gloss still translated it.
 *
 *  LessonSection is a UNION and only the scene variant has `beats`, so the
 *  const is typed through Extract rather than as a bare array. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration',
    text: 'A leather-goods shop on a Tuesday afternoon. Two bags on the counter, both brown, one twice the price of the other. He has been looking at them for four minutes and he has decided.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'La vendeuse',
    fr: 'Vous avez choisi ?',
    en: 'Have you decided?',
    respell: '[voo-za-VAY shwah-ZEE]',
    stage: 'Her hand is already resting on one of them, and it is not the one he wants.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'narration',
    text: 'He knows the word. He has known it since the first week, on a card, with a picture of one thing beside another thing. He starts the sentence.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'you',
    speaker: 'You',
    fr: 'Je prends celui...',
    en: "I'll take that one...",
    respell: '[zhuh PRAHⁿ suh-LWEE]',
    stage: 'The sentence stops there. She waits, because as far as she can tell he has not finished.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'choice',
    prompt: 'He has one more go at it. Which one does he say?',
    size: 'lg',
    options: [
      { fr: 'Je prends celui.', respell: '[zhuh PRAHⁿ suh-LWEE]', en: "I'll take that one.", outcome: 'breaks', audio: AUDIO },
      { fr: 'Je prends celui-ci.', respell: '[zhuh PRAHⁿ suh-lwee-SEE]', en: "I'll take this one.", outcome: 'works', audio: AUDIO },
    ],
    followUp: {
      works: 'She lifts the near one off the counter and starts wrapping it. Four minutes of deciding, two letters of saying so.',
      breaks: 'She waits a moment longer, then picks up the one under her hand, because it is the only one either of them has pointed at.',
    },
  },
  {
    kind: 'break',
    heading: 'The word was right and it was not finished',
    // 42 words. The core density cap is 45 on any one authored string.
    body: 'Nothing was wrong with the word he chose. English lets that one end a sentence, so he stopped where English stops. Four French words cannot end a sentence at all, and two letters would have finished this one.',
    wrong: {
      fr: 'Je prends celui.',
      ipa: '/ʒə pʁɑ̃ sə.lɥi/',
      respell: '[zhuh PRAHⁿ suh-LWEE]',
      en: "I'll take that one.",
    },
    right: {
      fr: 'Je prends celui-ci.',
      ipa: '/ʒə pʁɑ̃ sə.lɥi.si/',
      respell: '[zhuh PRAHⁿ suh-lwee-SEE]',
      en: "I'll take this one.",
    },
    coach: 'celui, celle, ceux and celles always carry something after them. Add it before you need it and the sentence lands.',
    size: 'lg',
    audio: AUDIO,
  },
  {
    kind: 'resolve',
    text: 'He paid for the wrong bag. It was the cheaper one, which he did not mention either.',
    size: 'md',
  },
];

const S01_SCENE: LessonSection = {
  type: 'scene',
  id: 's01-scene',
  render: 'screens',
  layer: 'core',
  title: 'The word that stopped too early',
  setting: { place: 'Une maroquinerie, rue de la Paix', city: 'Nantes', time: '15 h', ambience: 'a small shop, one other customer' },
  beats: SCENE_BEATS,
  closing: { text: 'One root, two jobs, and the noun beside it settles which one you are doing.', size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['point', 'replace'],
};

const S02_GOALS: LessonSection = {
  type: 'goals',
  id: 's02-goals',
  layer: 'core',
  title: 'By the end of this lesson',
  goals: [
    { t: 'Point at a thing by name, in all four forms', s: 'Act 2: ce, cet, cette, ces, and the noun picks' },
    { t: 'Point at it without naming it', s: 'Act 3: celui, celle, ceux, celles, and what has to follow them' },
    { t: 'Know why cet exists at all', s: `Act 2, and it is ${VOWEL_UNIT}'s reason wearing different clothes` },
    { t: 'Stop producing the bare form', s: 'Act 4: the mistake from the shop, eight times, until it stops arriving' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** REQUIRED LAYOUT 1, AND IT IS THE FIRST TEACHING SCREEN IN THE LESSON.
 *
 *  Two rows: one job each, all eight forms present, the shared root visible
 *  down the page. Read down it is the gender-and-number paradigm; read across
 *  it is the Owns.
 *
 *  `tapTable`, NOT `table`. A `table` at `layer: 'core'` is refused outright
 *  by `validateDensity` (density.logic.ts:423) and 0 of 74 shipped lessons
 *  carry one in `sections`. a2.29 device-checked a probe table on a Pixel 6,
 *  saw every cell draw, and had the batch refuse it: A DEVICE CHECK CANNOT
 *  FIND THIS ONE.
 *
 *  Six rows is the ceiling on a Pixel 6 and this uses two. Headers are 3, 9
 *  and 13 characters, and see the file header for why there are three of them
 *  rather than five. */
const S03_BOTH: LessonSection = {
  type: 'tapTable',
  id: 's03-both',
  layer: 'core',
  title: 'One root, two jobs',
  cols: ['Job', 'One thing', 'More than one'],
  rows: [
    {
      cells: ['it points', 'ce · cet · cette', 'ces'],
      say: 'Je prends ce livre.',
      detail: {
        title: 'The four that point',
        body: 'Every one of these four has a noun straight after it and none of them can be said without one. Three for a single thing, one for several, and the noun you are about to say is what picks between them.',
        say: 'Je prends ce livre.',
      },
    },
    {
      cells: ['it replaces', 'celui · celle', 'ceux · celles'],
      say: 'Je prends celui-ci.',
      detail: {
        title: 'The four that replace',
        body: 'These four go where the noun would have been, so nothing follows them except the small thing that finishes them. Two for a single thing, two for several, and you still need the gender to pick.',
        say: 'Je prends celui-ci.',
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['point', 'replace', 'gender'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT II — QUAND LE NOM SUIT  (the Owns, half one, five missions)
 * ══════════════════════════════════════════════════════════════════════════ */

/** REQUIRED LAYOUT 2. The same referent with and without the noun, four times,
 *  one card per cell.
 *
 *  Each card is ONE SENTENCE TWICE, and the two halves come from corpus rows
 *  authored as a pair for exactly this (E337/E338, E339/E340, E341/E342,
 *  E343/E344). DISPLAY_PARITY pins the first four against their rows, so a
 *  corpus edit the card does not follow now fails.
 *
 *  a2.06's line is quoted VERBATIM here, imported rather than retyped, and
 *  this lesson's own sentence follows it. See corpus §C for why the second
 *  sentence exists: a2.06's ends "leans on a verb", which is true of `le`,
 *  `la`, `les` and false of these. */
const S04_GRID: LessonSection = {
  type: 'cardDeck',
  id: 's04-grid',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'The same thing, named and not named',
  frSub: 'Le nom, puis pas le nom',
  hint: 'Four cards. Each one is the same sentence twice.',
  say: `« ${WHAT_FOLLOWS} » is how ${WHAT_FOLLOWS_UNIT} put it, and ${OBJECT_UNIT} said it again about three other words. Here it is the noun.`,
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-33-grid' },
  terms: ['point', 'replace'],
  cards: [
    {
      head: 'one masculine thing',
      label: 'a noun follows · nothing follows',
      fr: 'Je prends ce livre. / Je prends celui-ci.',
      sub: '[zhuh PRAHⁿ suh LEEVR] then [zhuh PRAHⁿ suh-lwee-SEE]',
      body: `« ${A206_SHAPE} » is ${OBJECT_UNIT}'s line. ${A233_SHAPE}`,
    },
    {
      head: 'one feminine thing',
      label: 'a noun follows · nothing follows',
      fr: 'Je prends cette robe. / Je prends celle-ci.',
      sub: '[zhuh PRAHⁿ seht ROB] then [zhuh PRAHⁿ sehl-SEE]',
      body: `The same move on a feminine noun. You had to know robe was feminine to say the first one, and you still have to know it to say the second, so nothing got easier. ${GENDER_UNIT} is where that came from.`,
    },
    {
      head: 'several masculine things',
      label: 'a noun follows · nothing follows',
      fr: 'Je prends ces gants. / Je prends ceux-ci.',
      sub: '[zhuh PRAHⁿ say GAHⁿ] then [zhuh PRAHⁿ suh-SEE]',
      body: 'One word covers both genders in the plural when a noun follows, and two words split them again when none does. That is the one place the two rows of the table do not line up.',
    },
    {
      head: 'several feminine things',
      label: 'a noun follows · nothing follows',
      fr: 'Je prends ces chaussures. / Je prends celles-ci.',
      sub: '[zhuh PRAHⁿ say shoh-SÜR] then [zhuh PRAHⁿ sehl-SEE]',
      body: 'ces again, doing the same job it did for the gloves. Then celles, which is the only one of the eight the gloves could not have used.',
    },
  ],
};

/** a1.03 APPLIED, NOT RE-TAUGHT. It is the declared prerequisite of this unit
 *  and it is load-bearing: a learner who cannot gender a noun cannot pick.
 *
 *  Every example SHOWS the noun, so the gender is derivable from the card
 *  rather than asserted by it. Four of the six are imported published rows. */
const S05_GENDER: LessonSection = {
  type: 'examples',
  id: 's05-gender',
  layer: 'core',
  title: 'The noun picks, not you',
  examples: [
    { fr: "Cet homme a l'air fatigué.", en: 'This man looks tired.', note: 'homme, masculine, and it starts with a vowel' },
    { fr: "Cette femme a l'air fatiguée.", en: 'This woman looks tired.', note: 'femme, feminine. Same sentence otherwise' },
    { fr: 'Ces hommes sont bruyants le matin.', en: 'These men are noisy in the morning.', note: 'more than one, and ces stops asking about gender' },
    { fr: 'Ces femmes sont bruyantes le soir.', en: 'These women are noisy in the evening.', note: 'the same ces, and only the ending on the describing word moved' },
    { fr: 'Cet endroit est vraiment magnifique.', en: 'This place is truly magnificent.', note: 'endroit, masculine, vowel again' },
    { fr: 'Cet exercice est facile.', en: 'This exercise is easy.', note: 'and once more. Three masculine nouns, three cet' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['gender', 'point'],
};

/** REQUIRED LAYOUT 3. `cet homme` beside `ce livre`, audible, one tap each.
 *
 *  `hideLines: true` OR THIS IS A READING EXERCISE WITH A PLAY BUTTON.
 *  `ListeningView` prints every line's `fr` AND `en` beside its PlayDot, so
 *  every listening section in the product has been answerable by reading.
 *
 *  ONE TAKE, ONE VOICE, RECORDED ADJACENTLY. Apart, the learner compares two
 *  performances instead of two sounds. Written into `desc` on
 *  `rec-a2-33-vowel`, because a rule about how something is recorded becomes
 *  invisible the moment the clip is delivered.
 *
 *  No question reprints its own line, or `hideLines` buys nothing. */
const S06_VOWEL: LessonSection = {
  type: 'listening',
  id: 's06-vowel',
  layer: 'core',
  hideLines: true,
  title: 'Where the extra consonant comes from',
  lines: [
    { fr: 'Regarde ce livre.', en: 'Look at this book.' },
    { fr: 'Regarde cet homme.', en: 'Look at this man.' },
    { fr: 'Regarde cet hôtel.', en: 'Look at this hotel.' },
    { fr: 'Regarde cette robe.', en: 'Look at this dress.' },
  ],
  questions: [
    {
      q: 'The first two. What is different about the word in the middle?',
      opts: ['the second one has a t sound on the end', 'the second one is longer by a syllable', 'nothing, they are the same word'],
      correct: 0,
      why: 'A t arrives, and it does not stay with its own word: it runs onto the front of the next one. That is the whole of what the extra form is for.',
    },
    {
      q: 'Why does the second one need it and the first one not?',
      opts: ['the second thing is a person', 'the second word starts with a vowel', 'the second word is longer'],
      correct: 1,
      why: 'livre starts with a consonant and homme starts with a vowel. Two vowels running together is the thing French will not do, so a consonant is put between them.',
    },
    {
      q: 'The third one. hôtel is spelled with an h. Which one did you hear?',
      opts: ['the plain form, because of the h', 'the one with the t, because the h is silent'],
      correct: 1,
      why: 'The h is not said, so what the next word actually starts with is a vowel. The rule listens rather than reads, and that is the proof.',
    },
    {
      q: 'The fourth one. Compare it with the second.',
      opts: ['they sound different', 'they sound identical'],
      correct: 1,
      why: 'Both are SEHT and your ear will never separate them. One is masculine in front of a vowel and one is feminine, and only the page shows it.',
    },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-33-vowel' },
  say: REFRAME,
  terms: ['vowel', 'sound'],
};

/** THE REASON, AND THE THIRD TIME THE LEARNER HAS MET IT.
 *
 *  Doctrine §B.7 asks for the earlier instance to be named by unit id from
 *  seq 14 onward. This is seq 33 and it names two: sons.07 deleted a vowel,
 *  a2.16 borrowed a consonant from the feminine, and this one swaps a whole
 *  word. Both reframes are IMPORTED from their own corpus files, so the
 *  quotations cannot drift.
 *
 *  NOT ONE of a2.16's three adjectives is taught here and the guard says so. */
const S07_WHY: LessonSection = {
  type: 'cardDeck',
  id: 's07-why',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'You have met this pressure twice already',
  hint: 'Three cards, three lessons, one thing French refuses to do.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['vowel'],
  cards: [
    {
      head: `${ELISION_UNIT} deleted a vowel`,
      label: 'the first time',
      fr: "le homme -> l'homme",
      sub: '[LOM]',
      body: `« ${ELISION_REFRAME} » is how ${ELISION_UNIT} said it. The little word in front lost its own vowel so the two would not meet.`,
    },
    {
      head: `${VOWEL_UNIT} borrowed a consonant`,
      label: 'the second time',
      fr: 'beau homme -> bel homme',
      sub: '[beh-LOM]',
      body: `« ${A216_REFRAME} » is ${VOWEL_UNIT}'s rule. A whole form was fetched from the feminine so a consonant would land in front of the vowel.`,
    },
    {
      head: 'and this one swaps the word',
      label: 'the third time',
      fr: 'ce homme -> cet homme',
      sub: '[seh-TOM]',
      body: `${VOWEL_CLAIM} Three lessons and one pressure, and after this you should expect it rather than learn it.`,
    },
  ],
};

/** THE GENERALISATION MISSION. Doctrine §B.1: a lesson that makes the learner
 *  produce a form from a word it never showed them has taught the system.
 *
 *  GROUP 2 IS A CONTROL PAGE with `items: []` and a check, which is the house
 *  pattern (a1.23's suite pins it). Its check hands over `aéroport`, which
 *  this lesson does not teach, does not import and names nowhere else — and
 *  which is the one combination that forces `cet`: masculine AND vowel-
 *  initial. Corpus §J has the eight rejected candidates and the published row
 *  that disqualified each.
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
      label: 'The frame, with nouns you have already seen',
      items: [
        { fr: 'Regarde ce livre.', itemId: E(345), note: 'a consonant, so the plain one', en: 'Look at this book.' },
        { fr: 'Regarde cet homme.', itemId: E(346), note: 'a vowel, so the one with the t', en: 'Look at this man.' },
        { fr: 'Regarde cette robe.', itemId: E(348), note: 'feminine, and the vowel rule never applies to it', en: 'Look at this dress.' },
        { fr: 'Cet endroit est vraiment magnifique.', itemId: 'fr.a1.noms-essentiels.041', note: 'endroit, masculine, vowel', en: 'This place is truly magnificent.' },
        { fr: 'Vous habitez dans cet immeuble depuis longtemps ?', itemId: 'fr.a1.mots-essentiels.159', note: 'immeuble, masculine, vowel', en: 'Have you lived in this building for a long time?' },
      ],
      check: {
        q: 'What decides between the first two?',
        opts: ['whether the thing is a person', 'the first sound of the next word', 'how close the thing is'],
        correct: 1,
        why: 'The sound, and only the sound. A consonant takes the plain one and a vowel takes the one with the t, and nothing about the meaning is involved.',
      },
    },
    {
      label: 'And now a noun nobody has shown you',
      items: [],
      check: {
        q: `${UNSEEN.article} is masculine. Which one goes in front of it?`,
        opts: [`ce ${UNSEEN.noun}`, `cette ${UNSEEN.noun}`, UNSEEN.answer],
        correct: 2,
        why: 'This word appears nowhere else in this lesson and you have just handled it. Masculine rules out the feminine one, and the vowel it starts with rules out the plain one, so there is exactly one form left.',
      },
    },
    {
      label: 'One more, and this time nothing is named',
      items: [
        { fr: 'Je prends celui-ci.', itemId: E(338), note: 'the book, unnamed', en: "I'll take this one." },
        { fr: 'Je prends celles-ci.', itemId: E(344), note: 'the shoes, unnamed', en: "I'll take these." },
        { fr: 'Prends celui qui est sur la table.', itemId: 'fr.b1.pronoms-essentiels.038', note: 'and here what follows is a whole clause', en: "Take the one that's on the table." },
        { fr: 'Prends celle qui te plaît le plus.', itemId: 'fr.b1.pronoms-essentiels.042', note: 'the same, feminine', en: 'Take the one you like best.' },
        { fr: 'Prends celles qui sont dans la boîte bleue.', itemId: 'fr.b1.pronoms-essentiels.050', note: 'and plural', en: 'Take the ones that are in the blue box.' },
      ],
      check: {
        q: 'What do all five have after the word?',
        opts: ['a noun', 'something, and it is never a noun', 'nothing at all'],
        correct: 1,
        why: 'Two letters, a whole clause, it does not matter which. What matters is that something is there and that it is never the noun, because the word is standing where the noun would have been.',
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['vowel', 'tail', 'replace'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT III — QUAND IL N'Y A PAS DE NOM  (the Owns, half two, six missions)
 * ══════════════════════════════════════════════════════════════════════════ */

/** BOTH JOBS IN ONE SENTENCE, four times. The noun is named once and the
 *  second time it is not, which is the deepest form of the Owns and the shape
 *  a learner actually produces.
 *
 *  The corpus has this shape only at b1 and every one of those four rows
 *  changes the owner or the location as well as the form. These four change
 *  nothing but the colour, and DISPLAY_PARITY pins all four. */
const S09_BOTH: LessonSection = {
  type: 'examples',
  id: 's09-both',
  layer: 'core',
  title: 'Said once, then not said again',
  examples: [
    { fr: 'Ce sac est petit, mais celui-là est grand.', en: 'This bag is small, but that one is big.', note: 'sac once, then never again' },
    { fr: 'Cette robe est bleue, mais celle-là est noire.', en: 'This dress is blue, but that one is black.', note: 'feminine, and the pattern is identical' },
    { fr: 'Ces gants sont noirs, mais ceux-là sont blancs.', en: 'These gloves are black, but those are white.', note: 'ces going in, ceux coming out' },
    { fr: 'Ces chaussures sont neuves, mais celles-là sont vieilles.', en: 'These shoes are new, but those are old.', note: 'the same ces going in, celles coming out' },
    { fr: 'Ce sac est joli, mais celui de Marie est plus grand.', en: "This bag is pretty, but Marie's is bigger.", note: 'and here what follows is whose it is' },
    { fr: "J'aime ce modèle, celui que tu m'as montré hier.", en: 'I like this model, the one you showed me yesterday.', note: 'and here it is which one it was' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['replace', 'point'],
};

/** THE FOUR THAT REPLACE, one card each, with the form the learner would have
 *  used instead printed beside it so the pair is visible rather than implied.
 *
 *  `ceux` is the one that surprises people, because `ces` covered both genders
 *  going in and two separate words come out. Said on its own card. */
const S10_FOUR: LessonSection = {
  type: 'cardDeck',
  id: 's10-four',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Four words, and the gender is still yours to know',
  hint: 'Swipe. Four cards, and the last two are the pair that splits.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['replace', 'gender'],
  cards: [
    {
      head: 'celui',
      label: 'one masculine thing',
      fr: 'celui-ci · celui-là',
      sub: '[suh-lwee-SEE] · [suh-lwee-LAH]',
      body: 'The one you will reach for most, and the one the shop scene stopped halfway through. On its own it is not a word you can say.',
    },
    {
      head: 'celle',
      label: 'one feminine thing',
      fr: 'celle-ci · celle-là',
      sub: '[sehl-SEE] · [sehl-LAH]',
      body: 'The feminine, and it is one syllable rather than two. Nothing else about it behaves differently.',
    },
    {
      head: 'ceux',
      label: 'several masculine things',
      fr: 'ceux-ci · ceux-là',
      sub: '[suh-SEE] · [suh-LAH]',
      body: 'Going in you said ces for both genders. Coming out they separate again, and this is the half people forget exists.',
    },
    {
      head: 'celles',
      label: 'several feminine things',
      fr: 'celles-ci · celles-là',
      sub: '[sehl-SEE] · [sehl-LAH]',
      body: 'The other half, and it sounds exactly like the singular. The s is silent in both words, so this one is a spelling and never a sound.',
    },
  ],
};

/** TRAP 3, TAUGHT BEFORE IT IS DRILLED. Four things may follow, two of them
 *  authored here because the corpus barely had them and two imported because
 *  the corpus had them eleven and three times over (corpus §A.4).
 *
 *  DISPLAY_PARITY pins the two authored halves. */
const S11_TAIL: LessonSection = {
  type: 'cardDeck',
  id: 's11-tail',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Four things that can follow it, and one of them must',
  hint: 'Four cards. Pick any one of them and the sentence is finished.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['tail'],
  cards: [
    {
      head: '-ci, the near one',
      label: 'two letters',
      fr: 'Je prends celui-ci.',
      sub: '[zhuh PRAHⁿ suh-lwee-SEE]',
      body: 'This one, the one nearer you. Two letters and a hyphen, and it is the cheapest way out of the sentence that stopped in the shop.',
    },
    {
      head: '-là, the far one',
      label: 'two letters',
      fr: 'Je veux celui-là.',
      sub: '[zhuh VUH suh-lwee-LAH]',
      body: 'That one, the one further away. In real speech people use it for both and nobody minds, so if you can only keep one, keep this.',
    },
    {
      head: 'de, and whose it is',
      label: 'a separate word',
      fr: 'Je veux celui de Marie.',
      sub: '[zhuh VUH suh-lwee duh ma-REE]',
      body: "Marie's one. English puts the owner first and an apostrophe on the end; French puts the owner last and nothing on it.",
    },
    {
      head: 'qui, and what it is doing',
      label: 'a whole clause',
      fr: 'Prends celui qui est sur la table.',
      sub: '[PRAHⁿ suh-LWEE kee eh sür la TAHBL]',
      body: 'The one that is on the table. Longer than the other three and no different in kind: something follows, so the sentence stands.',
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
 *  so an authored newline is silently discarded. There are none here. */
const S12_READ: LessonSection = {
  type: 'reading',
  id: 's12-read',
  layer: 'core',
  questionsInModal: true,
  title: 'Two bags, one counter',
  // NO OBJECT PRONOUN AND NO PRONOMINAL `en`. The first draft read « Cet homme
  // LES regarde », « elle EN voit trois par jour » and « Elle L'enveloppe »,
  // and all three belong to a2.06 and a2.25. The passage says the noun instead,
  // which is what a lesson about naming a thing should be doing anyway.
  //
  // AND NO `c'est`. Trap 4 is named in exactly one place in this build and a
  // passage is not it.
  // THE AUDIT FOUND `celle de sa femme` WITH NO ANTECEDENT, AND IT WAS THE
  // WORST DEFECT IN THE BUILD. Every noun in the first version was masculine —
  // deux sacs, le comptoir, cet homme — so `celle` stood in for nothing, and
  // the question below RATIONALISED it ("a noun the passage never actually
  // says"). A demonstrative pronoun with no antecedent is the one thing this
  // lesson exists to say is impossible, printed inside the lesson that says it.
  //
  // `une valise` is introduced two sentences earlier, so `celle` now has the
  // only feminine referent in the shop and the switch from celui to celle is
  // readable rather than asserted.
  text: "Elle a posé deux sacs sur le comptoir. Ce sac est en cuir et celui-là est en toile. Le premier coûte cent vingt euros, le second quarante. À côté des deux sacs, il y a une valise qui n'est pas à vendre. Cet homme regarde les deux sacs depuis dix minutes sans rien dire. Il touche celui de gauche, puis celle de sa femme. Il ne dit rien à la vendeuse, qui attend. Elle voit trois clients comme ça par jour. Il finit par montrer celui en toile et il dit deux mots. Elle enveloppe le sac en toile.",
  glossary: [
    { word: 'le comptoir', en: 'the counter', note: 'The flat surface you pay at, and the only place in the shop where both bags are.' },
    { word: 'en cuir', en: 'made of leather', note: 'en plus a material is how French says what a thing is made of.' },
    { word: 'en toile', en: 'made of canvas', note: 'The same en, a cheaper material, and the whole of why the two bags differ.' },
    { word: 'à vendre', en: 'for sale', note: 'From vendre. A thing on a counter is not automatically for sale, which is the joke in this sentence.' },
    // `la vendeuse` LOWERCASE, AND THE TEXT WAS REWRITTEN TO MATCH. The first
    // draft had it only as « La vendeuse attend. » at the head of a sentence,
    // and a glossary key is matched against the passage's own tokens: a2.08
    // lost two keys to exactly this kind of mismatch and found it by test.
    { word: 'la vendeuse', en: 'the shop assistant', note: 'The woman doing the selling. From the same vendre.' },
    { word: 'une valise', en: 'a suitcase', note: 'Feminine, and the only feminine thing in the shop, which is why one word later has to change.' },
    { word: 'enveloppe', en: 'wraps up', note: 'From envelopper. What she does once he has finally said which one.' },
  ],
  questions: [
    { q: 'Which of the two bags is leather?', a: 'The first. Ce sac est en cuir names it, and celui-là is the other one, which is canvas.' },
    { q: 'The passage says il touche celui de gauche. Which one is that?', a: 'The one on the left, and it never says which material. celui plus de plus a position, and no noun anywhere near it.' },
    { q: 'Then he touches celle de sa femme. Which noun does celle stand in for?', a: 'la valise, introduced two sentences earlier and the only feminine thing in the shop. That is why the word had to change from celui to celle: it agrees with what it replaces, not with the person who owns it.' },
    { q: 'Which one does he buy?', a: 'The canvas one, at forty euros. He shows celui en toile, which is a fifth thing that can follow the word and one this lesson does not teach.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['replace', 'tail'],
};

/** POINTS OR REPLACES, sorted. Three gated groups.
 *
 *  GATED, NOT TIMED. `setInterval` is zero across all four render files, so
 *  there is no timer anywhere in the app, and no authored string here or
 *  anywhere in this lesson says otherwise.
 *
 *  SEVEN OF THE TWELVE IMPORTED ADJECTIVE ROWS ARE NAMED HERE, which is what
 *  makes them reachable at all: every one is `dictation`-only or
 *  `sentence`-only, so no deckTranche can release one. */
const S13_SORT: LessonSection = {
  type: 'groupDrill',
  id: 's13-sort',
  layer: 'core',
  size: 'lg',
  title: 'Naming it, or standing in for it',
  groups: [
    {
      label: 'A noun follows, so it points',
      items: [
        { fr: 'Pourquoi choisis-tu ce livre ?', itemId: 'fr.a1.questions.048', note: 'livre follows', en: 'Why are you choosing this book?' },
        { fr: 'Qui est cet homme là-bas ?', itemId: 'fr.a2.questions-du-quotidien.053', note: 'homme follows, and it starts with a vowel', en: 'Who is that man over there?' },
        { fr: 'Cet hôtel a cent cinquante chambres.', itemId: 'fr.a1.nombres.076', note: 'hôtel follows, and its h is silent', en: 'This hotel has one hundred fifty rooms.' },
        { fr: 'Qui sont ces gens ?', itemId: 'fr.a1.questions-du-quotidien.009', note: 'gens follows, and it is plural', en: 'Who are these people?' },
        { fr: 'Cet exercice est facile.', itemId: 'fr.a1.adjectifs-essentiels.102', note: 'exercice follows', en: 'This exercise is easy.' },
      ],
      check: {
        q: 'How did you know, without reading the meaning?',
        opts: ['a noun came straight after it', 'the sentence was a question', 'the word was short'],
        correct: 0,
        why: 'A noun straight after it, every time. That is the only test there is and it does not need the meaning of the sentence at all.',
      },
    },
    {
      label: 'No noun follows, so it replaces',
      items: [
        { fr: 'Ce sac est joli, mais celui de Marie est plus grand.', itemId: 'fr.b1.pronoms-essentiels.037', note: 'the second one has no noun after it', en: "This bag is pretty, but Marie's is bigger." },
        { fr: 'Cette robe est belle, mais celle de ma sœur est unique.', itemId: 'fr.b1.pronoms-essentiels.041', note: 'the same, feminine', en: 'This dress is pretty, but my sister’s is unique.' },
        { fr: 'Ces livres sont anciens, mais ceux de la bibliothèque sont neufs.', itemId: 'fr.b1.pronoms-essentiels.045', note: 'and plural', en: "These books are old, but the library's are new." },
        { fr: 'Ces chaussures sont confortables, mais celles-là sont plus légères.', itemId: 'fr.b1.pronoms-essentiels.049', note: 'and the tail here is two letters', en: 'These shoes are comfortable, but those are lighter.' },
        { fr: 'Ce sac est aussi lourd que celui-là.', itemId: 'fr.a2.comparaisons.069', note: `and ${COMPARATIVE_UNIT} left this one here`, en: 'This bag is as heavy as that one.' },
      ],
      check: {
        q: 'Every one of these five does both jobs. What is the pattern?',
        opts: ['the noun is said twice', 'the noun is said once, then stood in for', 'the noun is never said'],
        correct: 1,
        why: 'Named on the way in, replaced on the way out. That is what the whole family is for and it is why English says the one in the same place.',
      },
    },
    {
      label: 'And the plural pair that does not line up',
      items: [
        { fr: 'Ces hommes sont bruyants le matin.', itemId: 'fr.a2.description-personnes-objets.015', note: 'ces, masculine plural', en: 'These men are noisy in the morning.' },
        { fr: 'Ces femmes sont bruyantes le soir.', itemId: 'fr.a2.description-personnes-objets.016', note: 'ces again, feminine plural, no change', en: 'These women are noisy in the evening.' },
        { fr: 'Je prends ceux-ci.', itemId: E(342), note: 'and now they separate', en: "I'll take these." },
        { fr: 'Je prends celles-ci.', itemId: E(344), note: 'into two different words', en: "I'll take these." },
      ],
      check: {
        q: 'ces covers both genders. What about the four that replace?',
        opts: ['they cover both too', 'they split into two words', 'they have no plural'],
        correct: 1,
        why: 'ceux and celles. Going in the plural stops asking about gender and coming out it starts again, which is the one asymmetry in the whole system.',
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['point', 'replace', 'gender'],
};

/** The eight forms from the English, which is the direction production
 *  actually runs in. Nothing here is new: it is acts 2 and 3 as recall. */
const S14_FLASH: LessonSection = {
  type: 'flashcards',
  id: 's14-flash',
  layer: 'core',
  title: 'Build it from the English',
  cards: [
    { front: 'this book', back: 'ce livre', say: 'Je prends ce livre.' },
    { front: 'this one (the book)', back: 'celui-ci', say: 'Je prends celui-ci.' },
    { front: 'this dress', back: 'cette robe', say: 'Je prends cette robe.' },
    { front: 'this one (the dress)', back: 'celle-ci', say: 'Je prends celle-ci.' },
    { front: 'these gloves', back: 'ces gants', say: 'Je prends ces gants.' },
    { front: 'these (the gloves)', back: 'ceux-ci', say: 'Je prends ceux-ci.' },
    { front: 'these shoes', back: 'ces chaussures', say: 'Je prends ces chaussures.' },
    { front: 'these (the shoes)', back: 'celles-ci', say: 'Je prends celles-ci.' },
    { front: 'this man', back: 'cet homme', say: 'Regarde cet homme.' },
    { front: 'that one, further off', back: 'celui-là', say: 'Je veux celui-là.' },
    { front: "Marie's one", back: 'celui de Marie', say: 'Je veux celui de Marie.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['point', 'replace'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT IV — LE MOT QUI NE FINIT PAS LA PHRASE  (the trap, four missions)
 * ══════════════════════════════════════════════════════════════════════════ */

/** TRAP 3, AND IT IS THE ONE THE SCENE OPENED ON.
 *
 *  `lesson-contract.test.ts` requires every A2 trapDrill to walk
 *  `rule > cards > audio > drill`, with `swipe`, an `audio` spec, a `say` and
 *  a GATED drill step. Added 2026-08-13 after the stacked shape was found on a
 *  device in a2.03 and a2.16.
 *
 *  `size` COMES OFF a stepped trapDrill. The stacked shape hides the gate, the
 *  audio and the sub-mission number.
 *
 *  THE AUDIO STEP PLAYS EACH CARD'S `fr`, so nothing in `fr` may be a form
 *  French refuses. The bare form is in `promptSound`, which is the WRONG
 *  reading the card exists to correct, and this is one of exactly three places
 *  in the build where it appears. */
const S15_TRAP: LessonSection = {
  type: 'trapDrill',
  id: 's15-trap',
  layer: 'core',
  swipe: true,
  title: 'The word that cannot end a sentence',
  rule: {
    title: 'Something always comes after it',
    body: 'If you have said celui, celle, ceux or celles and the sentence is about to stop, it is not going to. Add -ci or -là and you are finished. That is two letters, and it is the difference between a sentence and a pause.',
  },
  cards: [
    { promptLabel: 'Je prends ...', promptSound: 'Je prends celui.', fr: 'Je prends celui-ci.', ipa: '/ʒə pʁɑ̃ sə.lɥi.si/', tip: 'The shop, finished. Two letters and she knows which bag.' },
    { promptLabel: 'Je veux ...', promptSound: 'Je veux celui.', fr: 'Je veux celui-là.', ipa: '/ʒə vø sə.lɥi.la/', tip: 'The far one this time, and it is the form you will use most in speech.' },
    { promptLabel: 'Elle préfère ...', promptSound: 'Elle préfère celle.', fr: 'Elle préfère celle-là.', ipa: '/ɛl pʁe.fɛʁ sɛl.la/', tip: 'Feminine, same two letters, same rule.' },
    { promptLabel: 'Prends ...', promptSound: 'Prends ceux.', fr: 'Prends ceux-ci.', ipa: '/pʁɑ̃ sø.si/', tip: 'Plural masculine, and the word on its own is still not a sentence.' },
    { promptLabel: 'Je veux ... de Marie.', promptSound: 'Je veux celui de Marie.', fr: 'Je veux celui de Marie.', ipa: '/ʒə vø sə.lɥi də ma.ʁi/', tip: 'Nothing wrong with this one. de plus an owner finishes it just as well as two letters.' },
    { promptLabel: 'Je prends ...', promptSound: 'Je prends ce.', fr: 'Je prends ce livre.', ipa: '/ʒə pʁɑ̃ sə livʁ/', tip: 'The other direction: this one needs a noun, and without one it is not a word at all.' },
  ],
  drill: [
    { promptSay: 'Je prends ...', opts: ['celui', 'celui-ci'], correct: 1 },
    { promptSay: 'Je veux ...', opts: ['celui-là', 'celui'], correct: 0 },
    { promptSay: 'Elle préfère ...', opts: ['celle', 'celle-là'], correct: 1 },
    { promptSay: 'Prends ...', opts: ['ceux-ci', 'ceux'], correct: 0 },
    { promptSay: 'Je prends ... livre.', opts: ['ce', 'celui'], correct: 0 },
    { promptSay: 'Je prends ... robe.', opts: ['celle', 'cette'], correct: 1 },
    { promptSay: 'Je veux ... de Marie.', opts: ['celui', 'ce'], correct: 0 },
    { promptSay: 'Regarde ... homme.', opts: ['ce', 'cet'], correct: 1 },
  ],
  steps: [
    { label: 'The rule', kind: 'rule', title: 'Something always comes after it' },
    { label: 'Six sentences', kind: 'cards', title: 'Stopped, and finished' },
    { label: 'Hear them', kind: 'audio', title: 'The pause and the sentence' },
    { label: 'Now you pick', kind: 'drill', title: 'Eight in a row', gate: true },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-33-trap' },
  say: REFRAME,
  terms: ['tail'],
};

/** `swipe: true` IS MANDATORY. Three shipped lessons omit it and lose the
 *  deck; `MissionSection.tsx` branches on `commonErrors` with `swipe: true`
 *  only, and without it a1.01 mission 5 drew a fully blank screen.
 *
 *  Each `why` explains why the wrong version was a reasonable thing to have
 *  said. That is the difference between a correction and a telling-off.
 *
 *  THE SECOND ERROR IS THE ONE THAT DOES NOT LOOK LIKE AN ERROR: `ce homme`
 *  is what the rule the learner just wrote down produces, and it is the reason
 *  the extra form exists. */
const S16_ERRORS: LessonSection = {
  type: 'commonErrors',
  id: 's16-errors',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'The five that catch people',
  errors: [
    {
      wrong: 'Je prends celui.',
      right: 'Je prends celui-ci.',
      why: 'Reasonable, because English stops there. That one is a complete answer in English and the French word it looks like cannot end a sentence at all. Two letters finish it.',
    },
    {
      wrong: 'Regarde ce homme.',
      right: 'Regarde cet homme.',
      why: 'Reasonable, and it is what the rule you just learned produces if you only apply the gender half of it. homme is masculine, so ce is right about the gender and wrong about the sound.',
    },
    {
      wrong: 'Je prends celui livre.',
      right: 'Je prends ce livre.',
      why: 'Reasonable, because both words mean roughly this one and nothing in English separates them. The noun is there, so it is the other four you want.',
    },
    {
      wrong: 'Je prends ce.',
      right: 'Je prends celui-ci.',
      why: 'Reasonable, and it is the first error in a mirror. This one cannot stand without a noun any more than the other one can stand without a tail, so a bare ce is a sentence with a hole in it.',
    },
    {
      wrong: 'Ces gants sont noirs, mais celles-là sont blancs.',
      right: 'Ces gants sont noirs, mais ceux-là sont blancs.',
      why: 'Reasonable, because ces covered both genders on the way in and it feels as though nothing has to be decided on the way out. Coming out they split, and gants is masculine.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tail', 'vowel', 'gender'],
};

/** TRAP 1 ON ITS OWN CARD, because it is the one thing in the lesson that no
 *  ear question and no listening mission can ever ask about.
 *
 *  Both forms ship as `SEHT` on their bare headwords, measured. A learner who
 *  expects to hear the difference will keep waiting for it. */
const S17_PAIR: LessonSection = {
  type: 'cardDeck',
  id: 's17-pair',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Two spellings, and one noise between them',
  hint: 'Three cards. Nothing on any of them is audible.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['sound', 'gender'],
  cards: [
    {
      head: 'cet',
      label: 'masculine, in front of a vowel',
      fr: 'cet homme',
      sub: '[seh-TOM]',
      body: 'Masculine, and only ever in front of a vowel sound. In front of a consonant the same masculine noun takes the plain form instead.',
    },
    {
      head: 'cette',
      label: 'feminine, in front of anything',
      fr: 'cette robe',
      sub: '[seht ROB]',
      body: 'Feminine, and it does not care what comes next. There is no second feminine form, because the e on the end is already a consonant away from the vowel.',
    },
    {
      head: 'and they are one sound',
      label: 'measured, in the corpus',
      fr: 'cet homme · cette robe',
      sub: '[seh-TOM] · [seht ROB]',
      body: `${AUDIBLE_CLAIM} So every scored question about these two is typed, and the thing you are actually being asked is the gender of the noun.`,
    },
  ],
};

/** WRITE THE FORM, WHICH IS THE ONLY SURFACE THAT CAN SEPARATE THEM.
 *
 *  ALL SEVEN RESOLVE TO LETTERS MODE through the real `dicteeMode`, asserted
 *  in the batch. Corrections §4 is why: word mode hands every real word over
 *  pre-spelled, so a lesson whose whole written distinction is one small word
 *  cannot be tested in it.
 *
 *  EVERY PUBLISHED SENTENCE IN THIS THEME CARRYING A DEMONSTRATIVE IS WORD
 *  MODE. The shortest is 27 letters. Not one could have been used.
 *
 *  `Regarde cet homme.` beside `Regarde cette robe.` is trap 1 as a thing the
 *  learner has to type, which is the only place it can live. */
const S18_DICTEE: LessonSection = {
  type: 'dictation',
  id: 's18-dictee',
  layer: 'core',
  title: 'Write the small word',
  itemIds: DICTEE_IDS,
  audio: AUDIO,
  say: REFRAME,
  terms: ['sound', 'tail'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT V — PRODUCTION
 * ══════════════════════════════════════════════════════════════════════════ */

/** CHOOSING BETWEEN TWO THINGS OUT LOUD, WHICH IS THE canDo.
 *
 *  `alts` on every turn so more than one phrasing is accepted; `stt` scores
 *  against all of them, best match wins. `userEn` on every turn, or the reveal
 *  shows a French sentence the learner is told they should have said and
 *  cannot read. `scenario.logic.test.ts` requires two `alts` and a `userEn`
 *  on every role-play turn seed-wide.
 *
 *  NOT ONE TURN USES A POSSESSIVE PRONOUN. `le mien` is the natural way to
 *  compare two people's things and it belongs to a2.34, so ownership is always
 *  said with `de` plus a name.
 *
 *  AND NOT ONE TURN PRODUCES A BARE PRONOUN, including in an alt. a2.08 found
 *  a demonstrative in a scenario alt on its first draft; an alt is a line the
 *  learner may say. */
const S19_TALK: LessonSection = {
  type: 'scenario',
  id: 's19-talk',
  layer: 'core',
  title: 'Two of everything',
  setting: 'A market stall with two of every kind of thing on it. The woman running it is patient and she is not going to guess.',
  turns: [
    {
      ai: 'Bonjour. Vous cherchez quelque chose de précis ?',
      en: 'Hello. Are you looking for something in particular?',
      user: 'Je regarde ce sac.',
      userEn: 'I am looking at this bag. (Name the thing the first time.)',
      alts: [
        { fr: 'Je regarde ces gants.', en: 'I am looking at these gloves.' },
        { fr: 'Je regarde cette robe.', en: 'I am looking at this dress.' },
      ],
    },
    {
      // NOT « J'en ai deux comme ça. », WHICH IS WHAT THIS LINE SAID FIRST.
      // The pronominal `en` is a2.25's, and this lesson's own reading passage
      // had already been rewritten to remove one. No guard in the build had an
      // opinion about it; the self-audit found it and OUT_OF_BAND_TENSES /
      // PRONOMINAL_EN_Y now cover the class.
      ai: 'Bien sûr. Le brun ou le noir ?',
      en: 'Of course. The brown one or the black one?',
      user: 'Celui-ci.',
      userEn: 'This one. (The bag has been named already, so do not name it again.)',
      alts: [
        { fr: 'Celui-là.', en: 'That one.' },
        { fr: 'Je prends celui-ci.', en: "I'll take this one." },
      ],
    },
    {
      // NOT « Et vous vouliez autre chose ? ». `vouliez` is the IMPARFAIT,
      // which A2 does not teach at any seq, and this is seq 33 of 35 so nothing
      // downstream rescues it. « Et avec ça ? » is what a French shop actually
      // says and it is the present tense of nothing at all.
      ai: 'Très bien. Et avec ça ? Des gants, peut-être ?',
      en: 'Very good. And with that? Gloves, perhaps?',
      user: 'Ceux-là, oui.',
      userEn: 'Those, yes. (Plural and masculine, so the word changes.)',
      alts: [
        { fr: 'Oui, je prends ceux-là.', en: "Yes, I'll take those." },
        { fr: 'Ceux-ci, oui.', en: 'These, yes.' },
      ],
    },
    {
      ai: "Et cette écharpe ? Elle va bien avec.",
      en: 'And this scarf? It goes well with them.',
      user: "Cette écharpe est belle, mais je préfère celle-là.",
      userEn: 'This scarf is pretty, but I prefer that one. (Named once, then replaced.)',
      alts: [
        { fr: 'Je préfère celle-là.', en: 'I prefer that one.' },
        { fr: "Cette écharpe est jolie, mais je prends celle-là.", en: "This scarf is pretty, but I'll take that one." },
      ],
    },
    {
      ai: "Celle de gauche ? Elle coûte un peu plus cher.",
      en: 'The one on the left? It costs a bit more.',
      user: "Oui, celle de gauche.",
      userEn: 'Yes, the one on the left. (de plus a position finishes it as well as two letters do.)',
      alts: [
        { fr: 'Oui, celle-là.', en: 'Yes, that one.' },
        { fr: 'Celle de gauche, oui.', en: 'The one on the left, yes.' },
      ],
    },
    {
      // NOT « C'est tout ? », WHICH IS WHAT THIS LINE SAID FIRST. Trap 4 is
      // named in exactly one place in this build and an AI turn is a learner
      // surface like any other.
      ai: "Parfait. Alors le sac, les gants et l'écharpe. Vous voulez autre chose ?",
      en: 'Perfect. So the bag, the gloves and the scarf. Do you want anything else?',
      // NOT « Oui, je prends ces trois. », WHICH THE AUDIT REJECTED TWICE OVER:
      // `ces trois` is awkward French on its own, and the userEn called `trois`
      // "a noun-like word", which is a teaching claim about a numeral that is
      // simply not true. The replacement is the whole canDo in one line —
      // masculine singular, masculine plural and feminine singular, produced,
      // with no noun anywhere in it.
      user: 'Oui, je prends celui-ci, ceux-là et celle-là.',
      userEn: "Yes, I'll take this one, those and that one. (Three things, and not one noun among them.)",
      alts: [
        { fr: 'Oui, je prends ces trois articles.', en: "Yes, I'll take these three items." },
        { fr: 'Oui, je prends ceux-là et celle-là.', en: "Yes, I'll take those and that one." },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['point', 'replace', 'tail'],
};

/** SPEAK EVERY FORM, OUT LOUD.
 *
 *  `practice` IS MANDATORY: `lesson-contract.test.ts` mirrors the publish gate
 *  and fails a non-assessment lesson with no practice section, an empty
 *  `practice.itemIds` or an empty `Lesson.itemIds`.
 *
 *  `skill: 'speak'` NEEDS `voiceflash` ON EVERY ITEM IT NAMES. So this names
 *  only rows that carry it: the twenty-seven authored, the eight imported
 *  headwords and the four imported `-ci`/`-là` cards. Not one imported
 *  adjective sentence is here, because all twelve are `dictation`-only or
 *  `sentence`-only and would be silent. */
const S20_SPEAK: LessonSection = {
  type: 'practice',
  id: 's20-speak',
  layer: 'core',
  title: 'Say all eight, out loud',
  skill: 'speak',
  itemIds: [
    // The eight-cell grid, which is the Owns being produced rather than recognised.
    E(337), E(338), E(339), E(340), E(341), E(342), E(343), E(344),
    // The vowel frame, including the silent h.
    E(345), E(346), E(347), E(348), E(349),
    // The tails.
    E(350), E(351), E(352), E(353), E(354), E(359),
    // The four cards this build authored, and the four it imported.
    E(355), E(356), E(357), E(358),
    'fr.b1.pronoms-essentiels.036', 'fr.b1.pronoms-essentiels.040',
    'fr.b1.pronoms-essentiels.044', 'fr.b1.pronoms-essentiels.048',
    // Both jobs in one sentence.
    E(360), E(361), E(362), E(363),
    // The eight headwords.
    ...IMPORTED.headwords,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['replace'],
};

const S21_CHECK: LessonSection = {
  type: 'progressCheck',
  id: 's21-check',
  layer: 'core',
  title: 'Where you stand',
  body: 'You can point at a thing by name in all four forms and stand in for it in all four more, including for a noun this lesson never listed. The thing to check is the one you cannot hear. cet and cette are one sound, so you will never catch that pair by listening and nobody will ever tell you out loud that you got it wrong. Go back to the four cards in act 2 and write all eight forms out, from the English, without looking. If the small word is right eight times, the lesson has landed.',
  stats: [
    { k: 'Forms that point', v: 'four, and a noun always follows' },
    { k: 'Forms that replace', v: 'four, and something always follows' },
    { k: 'One sound, two spellings', v: 'cet and cette' },
    { k: 'Written, not heard', v: 'the whole of trap one' },
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
 *      typeIn        14    47%    the band's 32%, weighted up as the prompt asks
 *      mcq            8    27%    the band's 38%, and well under the half cap
 *      errorSpot      6    20%    the band's 17%
 *      listenChoose   2     7%    the band's 10%
 *
 *  THE TYPED WEIGHT IS THE HIGHEST IN THE BAND AND IT IS FORCED RATHER THAN
 *  CHOSEN. Almost nothing here is audible: `cet` and `cette` are one sound,
 *  `celle-ci` and `celles-ci` are one sound, and `ce` and `ceux` are one
 *  respelling. What `fold()` CAN see is a final `-e`, a final `-s` and the
 *  presence of a tail, and all three are exactly what this lesson teaches.
 *
 *  WHAT IS TESTED WHERE, AND WHY IT COULD NOT BE ANYWHERE ELSE:
 *
 *    typeIn        the split and the four forms, because fold() keeps the -e
 *                  that separates cet from cette and sees celui against
 *                  celuici. It is the only surface that can do either
 *    errorSpot     the bare pronoun and the wrong half of the pair. Both are
 *                  whole-sentence errors and free text is the only surface
 *                  that catches one
 *    mcq           the accent on celle-là, which fold() strips, and the
 *                  generalisation, where a wrong option has to be shown
 *    listenChoose  ce against ces, SUH against SAY, which is the one genuinely
 *                  audible contrast in the lesson
 *
 *  NO EAR QUESTION OFFERS TWO MEMBERS OF ONE HOMOPHONE GROUP, and here that
 *  rules out most of the paradigm. Enforced by `HOMOPHONE_FORMS` rather than
 *  by a sentence in a report.
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
      id: 'r1-job',
      label: 'Which of the two jobs',
      targets: ['wrong-job'],
      questions: [
        { format: 'typeIn', q: "livre is masculine. I'll take this book. Write it, starting with Je prends.", answer: 'Je prends ce livre', accept: ['Je prends ce livre', 'Je prends ce livre.'], why: 'The noun is there, so the word in front of it points. ce, because livre is masculine and starts with a consonant.', ref: 's04-grid' },
        { format: 'typeIn', q: "I'll take this one, and the one is the book. Same sentence, no book in it.", answer: 'Je prends celui-ci', accept: ['Je prends celui-ci', 'Je prends celui-ci.', 'Je prends celui ci'], why: 'No noun, so the word stands where the noun would have been. You still needed to know livre was masculine to get here.', ref: 's04-grid' },
        { format: 'mcq', q: 'Which of these names the thing it is pointing at?', opts: ['Je prends celles-ci.', 'Je prends ce livre.', 'Je prends celui-ci.'], correct: 1, why: 'livre is in the sentence, so ce points at it. The other two have no noun anywhere and stand in for one instead.', ref: 's03-both' },
        { format: 'mcq', q: 'ce livre and celui-ci. What is actually different?', opts: ['whether the noun is said', 'how near the thing is', 'whether the thing is masculine'], correct: 0, why: 'That is the only difference. Both are masculine, both mean this one, and one of them says the word book while the other does not.', ref: 's03-both' },
        { format: 'typeIn', q: "robe is feminine. I'll take this dress. Start with Je prends.", answer: 'Je prends cette robe', accept: ['Je prends cette robe', 'Je prends cette robe.'], why: 'A noun follows, and it is feminine, so cette. There is only one feminine form and it never changes for what comes next.', ref: 's04-grid' },
        { format: 'typeIn', q: "I'll take this one, and the one is the dress.", answer: 'Je prends celle-ci', accept: ['Je prends celle-ci', 'Je prends celle-ci.', 'Je prends celle ci'], why: 'The feminine of the four that replace, and the two letters on the end are what make it a sentence rather than a pause.', ref: 's04-grid' },
        { format: 'mcq', q: 'Which of these can never have a noun after it?', opts: ['ces', 'cette', 'ceux'], correct: 2, why: 'ceux stands where the noun would have been, so putting one after it leaves the sentence with two things doing one job. The other two require a noun.', ref: 's03-both' },
        { format: 'errorSpot', q: 'One word is doing the wrong job. Write the sentence out.', prompt: 'Je prends celui livre.', answer: 'Je prends ce livre.', accept: ['Je prends ce livre.', 'Je prends ce livre'], why: 'livre is right there, so the word in front of it has to be one of the four that point. celui was standing in for a noun that had not gone anywhere.', ref: 's16-errors' },
      ],
    },
    {
      id: 'r2-form',
      label: 'Which of the four',
      targets: ['wrong-form'],
      questions: [
        { format: 'typeIn', q: 'homme is masculine and starts with a vowel. Look at this man. Start with Regarde.', answer: 'Regarde cet homme', accept: ['Regarde cet homme', 'Regarde cet homme.'], why: 'Masculine rules out cette and the vowel rules out ce, so there is exactly one form left. The t runs onto the front of homme.', ref: 's06-vowel' },
        { format: 'typeIn', q: 'Look at this dress. Same sentence, and robe is feminine.', answer: 'Regarde cette robe', accept: ['Regarde cette robe', 'Regarde cette robe.'], why: 'cette, and it sounds exactly like the one before it. The only thing that told you which to write was the gender of the noun.', ref: 's06-vowel' },
        { format: 'typeIn', q: 'Look at this book. livre is masculine and starts with a consonant.', answer: 'Regarde ce livre', accept: ['Regarde ce livre', 'Regarde ce livre.'], why: 'A consonant follows, so no extra letter is needed and the plain form does the job.', ref: 's06-vowel' },
        { format: 'typeIn', q: 'Look at these gloves. gants is plural.', answer: 'Regarde ces gants', accept: ['Regarde ces gants', 'Regarde ces gants.'], why: 'ces, and it is the one of the four that does not ask about gender at all. Masculine or feminine, plural is plural.', ref: 's05-gender' },
        { format: 'mcq', q: `${UNSEEN.article} is masculine, and this lesson has never shown it to you. This airport is`, opts: [`ce ${UNSEEN.noun}`, `cette ${UNSEEN.noun}`, UNSEEN.answer], correct: 2, why: 'Masculine rules out the feminine one, and the vowel it starts with rules out the plain one. You had never seen this word and the rule handled it anyway.', ref: 's08-unseen' },
        { format: 'typeIn', q: 'hôtel is masculine and its h is silent. Look at this hotel.', answer: 'Regarde cet hôtel', accept: ['Regarde cet hôtel', 'Regarde cet hôtel.', 'Regarde cet hotel'], why: 'The h is not said, so what the word actually starts with is a vowel. The rule listens rather than reads, and this is the proof of it.', ref: 's06-vowel' },
        { format: 'listenChoose', q: 'Listen. Is he looking at one thing or more than one?', say: 'Regarde ce livre.', opts: ['one thing', 'more than one thing'], correct: 0, why: 'SUH, which is the singular. This is the one contrast in the lesson your ear can actually settle.', ref: 's06-vowel' },
        { format: 'listenChoose', q: 'Listen again. One thing or more than one?', say: 'Regarde ces gants.', opts: ['one thing', 'more than one thing'], correct: 1, why: 'SAY this time, and it is a completely different vowel. ce against ces is audible where cet against cette is not.', ref: 's06-vowel' },
      ],
    },
    {
      id: 'r3-tail',
      label: 'Finish the sentence',
      targets: ['bare-pronoun'],
      questions: [
        { format: 'errorSpot', q: 'He meant: I want that one. Write what he should have said.', prompt: 'Je veux celui.', answer: 'Je veux celui-là.', accept: ['Je veux celui-là.', 'Je veux celui-là', 'Je veux celui-la', 'Je veux celui la'], why: 'What he wrote is not a French sentence. Two letters finish it, and this is the line from the shop at the start of the lesson.', ref: 's15-trap' },
        { format: 'errorSpot', q: "She meant: I'll take this one, and the one is the dress. Write it out.", prompt: 'Je prends celle.', answer: 'Je prends celle-ci.', accept: ['Je prends celle-ci.', 'Je prends celle-ci', 'Je prends celle ci'], why: 'The feminine has exactly the same problem and exactly the same fix. Nothing about the gender changes whether the tail is needed.', ref: 's15-trap' },
        { format: 'typeIn', q: 'I want that one, the further one. Start with Je veux.', answer: 'Je veux celui-là', accept: ['Je veux celui-là', 'Je veux celui-là.', 'Je veux celui-la', 'Je veux celui la'], why: 'The far one. In real speech people use this form for both near and far and nobody minds, so it is the one worth keeping.', ref: 's11-tail' },
        { format: 'mcq', q: 'Which one of these is French?', opts: ['Je veux le celui.', 'Je veux celui-là.', 'Je veux celui.'], correct: 1, why: 'The third stops before the sentence is finished and the first puts an article in front of a word that already has one built in. Only the middle one is a sentence.', ref: 's15-trap' },
        { format: 'typeIn', q: "I want Marie's one. Start with Je veux.", answer: 'Je veux celui de Marie', accept: ['Je veux celui de Marie', 'Je veux celui de Marie.'], why: 'de plus the owner, and the owner goes last. That finishes the sentence exactly as well as two letters would.', ref: 's11-tail' },
        { format: 'mcq', q: 'Which of these is spelled correctly?', opts: ['celle-la', 'celle-là', 'cellela'], correct: 1, why: 'The accent goes on the a, and it is the same là that means over there. This has to be a picked question, because a typed one cannot see an accent at all.', ref: 's10-four' },
        { format: 'errorSpot', q: 'He meant: take these ones here. Write what he should have said.', prompt: 'Prends ceux.', answer: 'Prends ceux-ci.', accept: ['Prends ceux-ci.', 'Prends ceux-ci', 'Prends ceux ci'], why: 'Plural masculine, and the rule has not changed. Four words in this lesson cannot end a sentence and this is the third of them.', ref: 's15-trap' },
      ],
    },
    {
      id: 'r4-both',
      label: 'Both jobs, one sentence',
      targets: ['no-gender'],
      questions: [
        { format: 'typeIn', q: 'sac is masculine. This bag is small, but that one is big. Start with Ce sac.', answer: 'Ce sac est petit, mais celui-là est grand', accept: ['Ce sac est petit, mais celui-là est grand', 'Ce sac est petit, mais celui-là est grand.', 'Ce sac est petit mais celui-la est grand'], why: 'Named on the way in, replaced on the way out, and both words took their shape from the same masculine noun.', ref: 's09-both' },
        { format: 'typeIn', q: 'robe is feminine. This dress is blue, but that one is black. Start with Cette robe.', answer: 'Cette robe est bleue, mais celle-là est noire', accept: ['Cette robe est bleue, mais celle-là est noire', 'Cette robe est bleue, mais celle-là est noire.', 'Cette robe est bleue mais celle-la est noire'], why: 'The same shape one gender along. cette going in and celle coming out, and the describing words agreed as well.', ref: 's09-both' },
        { format: 'mcq', q: 'chaussures is feminine and plural. These shoes are new, but those are old.', opts: ['Ces chaussures sont neuves, mais celles-là sont vieilles.', 'Ces chaussures sont neuves, mais ceux-là sont vieilles.', 'Celles chaussures sont neuves, mais celles-là sont vieilles.'], correct: 0, why: 'ces going in, because the plural stops asking about gender, and celles coming out, because it starts again.', ref: 's09-both' },
        { format: 'errorSpot', q: 'gants is masculine. One word has the wrong gender. Write it out.', prompt: 'Ces gants sont noirs, mais celles-là sont blancs.', answer: 'Ces gants sont noirs, mais ceux-là sont blancs.', accept: ['Ces gants sont noirs, mais ceux-là sont blancs.', 'Ces gants sont noirs, mais ceux-là sont blancs', 'Ces gants sont noirs mais ceux-la sont blancs'], why: 'ces was right and told you nothing, because it covers both genders. The word that replaces the noun does not, and gants is masculine.', ref: 's16-errors' },
        // THE CORRECT SLOT IS 2 BECAUSE OF `quiz-spread`, NOT BECAUSE OF THE
        // CONTENT. With ten closed-format questions the best possible spread is
        // 4/3/3 and the validator fails anything above 40% in one slot; the
        // first draft put five of the ten in position 1 and was refused. The
        // quiz shuffles its options at runtime, so nothing is lost by moving one.
        { format: 'mcq', q: 'Ce sac est joli, mais celui de Marie est plus grand. Why celui the second time?', opts: ['because it is further away', 'because it belongs to somebody else', 'because the noun is not said again'], correct: 2, why: 'sac is said once and never again. Whose it is comes from de Marie, and whether it is near or far does not come into this sentence at all.', ref: 's13-sort' },
        { format: 'typeIn', q: 'gants is masculine. These gloves are black, but those are white. Start with Ces gants.', answer: 'Ces gants sont noirs, mais ceux-là sont blancs', accept: ['Ces gants sont noirs, mais ceux-là sont blancs', 'Ces gants sont noirs, mais ceux-là sont blancs.', 'Ces gants sont noirs mais ceux-la sont blancs'], why: 'The masculine plural, written out. ceux is the form people forget exists, because ces did the job for both genders on the way in.', ref: 's09-both' },
        { format: 'errorSpot', q: 'One word is a pointing form doing a replacing job. Write it out.', prompt: 'Cette robe est bleue, mais cette-là est noire.', answer: 'Cette robe est bleue, mais celle-là est noire.', accept: ['Cette robe est bleue, mais celle-là est noire.', 'Cette robe est bleue, mais celle-là est noire', 'Cette robe est bleue mais celle-la est noire'], why: 'There is no noun after the second one, so it cannot be cette. The two letters on the end do not rescue it; the whole word has to change.', ref: 's16-errors' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** Leitner close ON THE SPLIT, which is the Owns. Not a summary of the band. */
const S23_REVIEW: LessonSection = {
  type: 'reviewDeck',
  id: 's23-review',
  layer: 'core',
  title: 'The eight, one last time',
  cards: [
    { front: 'this book', back: 'ce livre', say: 'Je prends ce livre.' },
    { front: 'this man', back: 'cet homme', say: 'Regarde cet homme.' },
    { front: 'this dress', back: 'cette robe', say: 'Je prends cette robe.' },
    { front: 'these gloves', back: 'ces gants', say: 'Je prends ces gants.' },
    { front: 'this one, masculine', back: 'celui-ci', say: 'Je prends celui-ci.' },
    { front: 'this one, feminine', back: 'celle-ci', say: 'Je prends celle-ci.' },
    { front: 'these, masculine', back: 'ceux-là', say: 'Je préfère ceux-là.' },
    { front: 'these, feminine', back: 'celles-là', say: 'Je préfère celles-là.' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** THE REFRAME ONE LAST TIME, AND THE THREE POINTERS THIS LESSON OWES.
 *
 *  `points` is capped at FOUR on a core screen (`core-list-items`).
 *
 *  TRAP 4 GETS ITS ONE LINE HERE AND NOWHERE ELSE. `c'est` and `ce sont` are a
 *  third job for the same word, a learner has been saying `c'est` since a1.01,
 *  and left unmentioned it gets folded into the rule. Named, not taught, and
 *  no scored surface in this lesson contains either of them.
 *
 *  a2.24 and a2.25 get their line here too, because the learner has just spent
 *  three lessons putting a small word in front of the verb and this one does
 *  not go there. */
const S24_ROUNDUP: LessonSection = {
  type: 'roundup',
  id: 's24-roundup',
  layer: 'core',
  title: 'One root, and the noun decides',
  // `le mien` IS NOT PRINTED, AND THE BATCH IS WHY. The first version of this
  // line named the form as well as the unit, and the possessive guard fired.
  // The guard was right: a2.34 is named as coming next, which is what the
  // prompt asks for, and not one of its twenty-one forms reaches a screen here.
  body: `${REFRAME} Four forms name the thing and four stand in for it, and the four that stand in for it always carry something on the end. ${NOT_AN_OBJECT_CLAIM} One thing to leave alone for now: ${IMPERSONAL_CLAIM} And one thing coming next: ${POSSESSIVE_UNIT} does the same trick for whose a thing is, and the shape will already be familiar.`,
  points: [
    'ce, cet, cette, ces. A noun follows every one of them.',
    'celui, celle, ceux, celles. Something follows every one of them too, and it is never a noun.',
    `cet is there for the sound, which is ${VOWEL_UNIT} and ${ELISION_UNIT} for the third time.`,
    `The gender is still ${GENDER_UNIT}'s and you spend it eight times a lesson.`,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['point', 'replace'],
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
 *  THREE COLUMNS, AND a2.08's DEVICE CHECK IS WHY. On a Pixel 6 the sheet's
 *  table does not scroll horizontally: a fourth column is cut off at the
 *  screen edge with no affordance saying so. The English gloss lives in
 *  `rowDetails`, which opens on tap and has the room for it.
 *
 *  A `sheetId` resolves only inside the lesson that declares it. Cross-lesson
 *  sheets do not exist at any price.
 * ══════════════════════════════════════════════════════════════════════════ */

const SHEET_HUIT: ReferenceSheet = {
  id: 'sheet-huit',
  title: 'All eight, on one page',
  layer: 'deep',
  contains: ['the four that point', 'the four that replace', 'what has to follow each one'],
  sections: [
    {
      type: 'teach',
      id: 'sheet-teach',
      layer: 'deep',
      render: 'sheet',
      title: 'How to read this',
      // a1.04 IS NAMED HERE AND NOWHERE ELSE, and the sheet is where it fits:
      // `layer: 'deep'` is exempt from the 45-word core cap, and the claim it
      // makes is a recap rather than a rule the learner has to run. The top
      // four are chosen exactly the way a1.04 chooses le, la and les, which is
      // a saving worth one sentence and not worth a card.
      body: `The top four take a noun and cannot be said without one, and you pick between them the same way ${ARTICLE_UNIT} taught you to pick le, la and les. The bottom four take anything except a noun and cannot be said without something. Read down the middle column and you are reading the gender; read across a row and you are reading the choice this lesson is about.`,
    },
    {
      type: 'table',
      id: 'sheet-table',
      layer: 'deep',
      render: 'sheet',
      title: 'Les démonstratifs',
      cols: ['Form', 'Used for', 'Example'],
      rows: [
        ['ce', 'one, m, consonant', 'ce livre'],
        ['cet', 'one, m, vowel', 'cet homme'],
        ['cette', 'one, f', 'cette robe'],
        ['ces', 'several, m or f', 'ces gants'],
        ['celui', 'one, m, no noun', 'celui-ci'],
        ['celle', 'one, f, no noun', 'celle-ci'],
        ['ceux', 'several, m, no noun', 'ceux-là'],
        ['celles', 'several, f, no noun', 'celles-là'],
      ],
      rowDetails: [
        { title: 'ce, and when it is not enough', body: 'The default masculine. It becomes cet the moment the next word starts with a vowel sound, including a silent h, and it never changes for anything else.' },
        { title: 'cet, and why it exists', body: 'Masculine, vowel only. It is the same masculine word with a consonant added so two vowels do not meet, and it is said exactly like cette.' },
        { title: 'cette, and the one thing it is not', body: 'Feminine, in front of anything at all. There is no second feminine form, because the e already puts a consonant in front of whatever follows.' },
        { title: 'ces, and what it stops asking', body: 'Plural, both genders, no exceptions. This is the one place in the whole system where the gender does not have to be known.' },
        { title: 'celui, and what has to follow it', body: 'Masculine singular, standing in for a noun. Never on its own: -ci, -là, de plus an owner, or qui plus what it is doing.' },
        { title: 'celle, and the silent plural', body: 'Feminine singular. celle and celles are one sound, so the s exists only on the page and only writing can get it wrong.' },
        { title: 'ceux, and where the plural splits again', body: 'Masculine plural. ces covered both genders going in and this is one of the two words that separate them coming out.' },
        { title: 'celles, and the fourth cell', body: 'Feminine plural, and it sounds identical to the singular. Between them ceux and celles do the job ces did on its own.' },
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
 *  `items` here is also HOW FIVE IMPORTED ADJECTIVE SENTENCES BECOME
 *  REACHABLE. All twelve are `dictation`-only or `sentence`-only, so no
 *  deckTranche can release one.
 *
 *  `LessonDrill.format` is a LITERAL UNION, not string. The admin typecheck is
 *  the only check in this project that says so.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILLS: LessonDrill[] = [
  {
    id: 'd-job',
    title: 'Named, or not named',
    format: 'sort' as const,
    coach: 'Two piles. Read the word straight after it. If that word is a noun, it points.',
    buckets: ['a noun follows', 'no noun follows'],
    items: [E(337), E(338), E(339), E(340), 'fr.a1.questions.048', 'fr.b1.pronoms-essentiels.037'],
    audio: AUDIO,
  },
  {
    id: 'd-form',
    title: 'Which of the four',
    format: 'mcq' as const,
    coach: 'Two questions about the noun, in this order. Is it feminine? Does it start with a vowel?',
    q: 'homme is masculine and starts with a vowel. Which one goes in front of it?',
    opts: ['ce', 'cet', 'cette'],
    correct: 1,
    why: 'Masculine rules out cette. The vowel rules out ce. One form left, and it sounds exactly like the one you ruled out.',
    items: [E(345), E(346), E(347), 'fr.a1.noms-essentiels.041', 'fr.a1.adjectifs-essentiels.102'],
    audio: AUDIO,
  },
  {
    id: 'd-tail',
    title: 'It does not end there',
    format: 'flashcard' as const,
    coach: 'Every one of these has something after the word. Read the English, then say the whole French sentence.',
    items: [E(352), E(353), E(350), E(351), 'fr.b1.pronoms-essentiels.038'],
    audio: AUDIO,
  },
  {
    id: 'd-gender',
    title: 'The plural that splits',
    format: 'mcq' as const,
    coach: 'ces told you nothing about the gender. The word that replaces the noun needs it back.',
    q: 'gants is masculine. Ces gants sont noirs, mais ... sont blancs.',
    opts: ['celles-là', 'ceux-là', 'ces-là'],
    correct: 1,
    why: 'ceux, because gants is masculine. Going in the plural stopped asking about gender and coming out it starts again, which is the one asymmetry in the system.',
    items: [E(362), E(363), E(341), E(343), 'fr.a2.description-personnes-objets.015', 'fr.a2.description-personnes-objets.016'],
    audio: AUDIO,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ══════════════════════════════════════════════════════════════════════════ */

export const SECTIONS: LessonSection[] = [
  S01_SCENE, S02_GOALS, S03_BOTH,
  S04_GRID, S05_GENDER, S06_VOWEL, S07_WHY, S08_UNSEEN,
  S09_BOTH, S10_FOUR, S11_TAIL, S12_READ, S13_SORT, S14_FLASH,
  S15_TRAP, S16_ERRORS, S17_PAIR, S18_DICTEE,
  S19_TALK, S20_SPEAK, S21_CHECK,
  S22_QUIZ, S23_REVIEW, S24_ROUNDUP,
];

/** Every id the lesson can put in front of a learner: what it authored, plus
 *  every id any section names, any deckTranche releases and any LessonDrill
 *  lists.
 *
 *  THE MERGE PULLS EVERY ONE OF THESE OUT OF POSTGRES. `pronoms-essentiels`
 *  shows 163 in the seed and holds 634 in Postgres, so roughly three quarters
 *  of the theme is outside the cut, and the twelve adjective rows live in
 *  seven other themes that are cut harder still. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...IMPORT_IDS])];

/** Tranches release every taught item exactly once and nothing untaught, and
 *  no tranche releases an item the acts before it have not shown.
 *
 *  NOT ONE ID FROM `IMPORTED.adjectives` IS HERE. All twelve are
 *  `dictation`-only or `sentence`-only with NO flashcard, so a release would
 *  be a line that validates, publishes and serves no card. They are reachable
 *  through `s08-unseen`, `s13-sort`, the terms and the drills instead, and the
 *  batch asserts both directions.
 *
 *  The twelve b1 pronoun rows ARE here, because every one of them carries
 *  `flashcard`. That asymmetry is measured, not assumed. */
export const DECK_TRANCHE: string[][] = [
  // act 1 — the tapTable shows both rows, so the eight headwords are released
  [...IMPORTED.headwords],
  // act 2 — the grid and the vowel frame
  [
    E(337), E(338), E(339), E(340), E(341), E(342), E(343), E(344),
    E(345), E(346), E(347), E(348), E(349),
  ],
  // act 3 — the four that replace, their tails, and the published pronoun rows
  [
    E(350), E(351), E(352), E(353), E(354), E(359),
    E(355), E(356), E(357), E(358),
    E(360), E(361), E(362), E(363),
    'fr.b1.pronoms-essentiels.036', 'fr.b1.pronoms-essentiels.040',
    'fr.b1.pronoms-essentiels.044', 'fr.b1.pronoms-essentiels.048',
    'fr.b1.pronoms-essentiels.037', 'fr.b1.pronoms-essentiels.038',
    'fr.b1.pronoms-essentiels.039', 'fr.b1.pronoms-essentiels.041',
    'fr.b1.pronoms-essentiels.042', 'fr.b1.pronoms-essentiels.045',
    'fr.b1.pronoms-essentiels.049', 'fr.b1.pronoms-essentiels.050',
  ],
  // act 4 — the trap releases nothing new
  [],
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
  tag: 'A2 · LEÇON 33',
  intro: 'French has one small word for pointing at a thing and a second one for pointing at it without saying what it is. They share a root, they share a gender, and the only question is whether the noun comes next. Then one of them grows a consonant, for a reason you have already met twice.',
  // PE, not CO. Almost nothing this lesson teaches is audible: cet and cette
  // are one sound, celle and celles are one sound, so the distinctions can only
  // be assessed in writing and the quiz runs typeIn-heaviest of any surface here.
  skill: 'PE',
  // NOT `teaches`, NOT `canDo`, NOT `track`. All three draw nothing on a Lesson
  // and a2.07 shipped all three. `canDo` belongs to the unit.
  // a2.08, a2.24 AND a2.25 ADDED BY THE AUDIT. All three were named on a
  // learner surface as boundaries this lesson does not teach, and all three are
  // also LEANED ON: four imported rows carry a2.08's comparative (`plus grand`,
  // `plus légères`, `aussi lourd`), and two carry an object pronoun a2.24 owns
  // (`fr.b1.pronoms-essentiels.042` has `te`, `.039` has `m'`). Naming a unit as
  // a boundary and using its material without declaring it assumed is the gap
  // `grammarAssumed` exists to close.
  grammarAssumed: [
    GENDER_UNIT, ARTICLE_UNIT, ELISION_UNIT, VOWEL_UNIT, OBJECT_UNIT,
    INDIRECT_UNIT, Y_EN_UNIT, COMPARATIVE_UNIT, 'a1.06',
  ],
  grammarIntroduced: [
    'The demonstrative adjectives ce, cet, cette and ces as a four-cell paradigm selected by the gender and number of the following noun',
    'The pre-vocalic masculine cet as a phonologically conditioned allomorph of ce, triggered by a following vowel sound including one written with a silent h',
    'That cet and cette are homophonous, so the contrast is orthographic only and cannot be assessed by ear',
    'The demonstrative pronouns celui, celle, ceux and celles as the same four cells with the noun suppressed',
    'That a demonstrative pronoun is obligatorily complemented, by -ci, -là, a de phrase or a relative clause, and is ungrammatical bare',
    'That the plural neutralises gender in the adjective series and restores it in the pronoun series, which is the single asymmetry in the system',
    'That celle and celles are homophonous, so the number contrast in the feminine pronoun is orthographic only',
    'That the ce of c\'est and ce sont is a distinct impersonal subject and not a member of either series',
  ],
  overview: {
    // Must match the unit's English name, which `content_units` requires.
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Une racine, deux emplois. Le nom qui suit décide, ou son absence.',
    minutes: 33,
    difficulty: 3,
    glyph: '☞',
    screens: 94,
  },
  reframe: REFRAME,
  acts: [
    {
      id: 'act1',
      title: 'Deux mots, une racine',
      sections: ['s01-scene', 's02-goals', 's03-both'],
      milestone: 'You have watched a correct word end a sentence it could not end, and you have all eight forms on one screen',
      estScreens: 15,
      restPoints: ['s02-goals'],
    },
    {
      id: 'act2',
      title: 'Quand le nom suit',
      sections: ['s04-grid', 's05-gender', 's06-vowel', 's07-why', 's08-unseen'],
      milestone: 'You put the right form in front of a noun this lesson never showed you',
      estScreens: 22,
      restPoints: ['s05-gender', 's07-why'],
    },
    {
      id: 'act3',
      title: "Quand il n'y a pas de nom",
      sections: ['s09-both', 's10-four', 's11-tail', 's12-read', 's13-sort', 's14-flash'],
      milestone: 'You named a thing once and stood in for it every time after that',
      estScreens: 24,
      restPoints: ['s10-four', 's12-read'],
    },
    {
      id: 'act4',
      title: 'Le mot qui ne finit pas la phrase',
      sections: ['s15-trap', 's16-errors', 's17-pair', 's18-dictee'],
      milestone: 'The bare form has stopped arriving, and you can write the pair nobody can hear',
      estScreens: 18,
      restPoints: ['s15-trap'],
    },
    {
      id: 'act5',
      title: 'Production',
      sections: ['s19-talk', 's20-speak', 's21-check'],
      milestone: 'You bought three things out loud, six turns, without stopping mid-sentence',
      estScreens: 12,
      restPoints: ['s20-speak'],
    },
    {
      id: 'act6',
      title: "L'examen",
      sections: ['s22-quiz', 's23-review', 's24-roundup'],
      milestone: 'Thirty questions, and the eight forms one last time',
      estScreens: 10,
      restPoints: ['s23-review'],
    },
  ],
  errorTriggers: [
    {
      id: 'wrong-job',
      description: 'Uses a form that points where the noun is absent, or one that replaces where the noun is present.',
      detectOn: ['s03-both', 's04-grid', 's13-sort'],
      drill: 'd-job',
      // `retest` names a DRILL, not a section: validateLesson resolves it
      // against `Lesson.drills`.
      retest: 'd-form',
    },
    {
      id: 'wrong-form',
      description: 'Picks the wrong one of the four that point, usually by applying the gender and not the sound.',
      detectOn: ['s05-gender', 's06-vowel', 's08-unseen'],
      drill: 'd-form',
    },
    {
      id: 'bare-pronoun',
      description: 'Ends a sentence on celui, celle, ceux or celles with nothing after it.',
      detectOn: ['s11-tail', 's15-trap', 's19-talk'],
      drill: 'd-tail',
      retest: 'd-tail',
    },
    {
      id: 'no-gender',
      description: 'Carries ces across into the plural that replaces, and loses the gender the second word needs.',
      detectOn: ['s09-both', 's13-sort', 's16-errors'],
      drill: 'd-gender',
    },
  ],
  drills: DRILLS,
  deckTranche: DECK_TRANCHE,
  sheets: [SHEET_HUIT],
  terms: DEMONSTRATIFS_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v2, AND CORRECTIONS §10 IS WHY. v1 was applied, and the test then found
  // that `a1.04` was declared in `grammarAssumed` and named on no learner
  // surface. The fix is one sentence in the reference sheet. Correcting it
  // under the same number would leave two different bodies as v1 — the shipped
  // one and the source — which is the drift this project has lost work to
  // twice. Not `seed.version`, which is the OTA snapshot number and belongs to
  // the publish step.
  //
  // v3: the self-audit. Four content defects, none of which any gate in the
  // build had an opinion about — a demonstrative pronoun with no antecedent in
  // the reading passage, the imparfait and the pronominal `en` on the scenario,
  // and a userEn calling a numeral "a noun-like word". Same rule: move the
  // counter rather than correct under the number that shipped.
  version: 3,
  // `LessonAudio` is NOT `SectionAudio`. It takes `defaultLang`, not `lang`,
  // and it has no `mode`. The admin typecheck is the only check that sees the
  // difference; `validateLesson` tolerates the unknown key and carries it into
  // Postgres, into seed.json and into the OTA snapshot, where nothing reads it.
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    coachVoice: 'coach-en-warm',
    recorded: [
      { id: 'rec-a2-33-grid', desc: 'The same sentence twice, eight times over. ONE TAKE PER CARD, both halves inside it, and NO extra stress on the small word. Stressing it would teach that the difference is audible, and the whole point is that what settles it is the noun rather than the sound.' },
      { id: 'rec-a2-33-vowel', desc: 'REQUIRED LAYOUT 3, AND THE ONE CONSTRAINT IN THIS LESSON THAT CANNOT BE RECOVERED LATER. « Regarde ce livre. » and « Regarde cet homme. » are ONE TAKE, ONE VOICE, RECORDED ADJACENTLY, in that order, with « Regarde cet hôtel. » and « Regarde cette robe. » in the same take. Recorded apart, the learner compares two performances instead of two sounds and hears the reader rather than the language. The t of cet runs onto the front of homme and hotel: seh-TOM, seh-toh-TEL, never a t released on its own.' },
      { id: 'rec-a2-33-trap', desc: 'The audio step plays each card\'s fr, which is the CORRECT form every time. The bare version lives in promptSound and must be read at the same pace and with the same intonation as the correct one, then stopped dead where the speaker ran out of sentence. A bare form read as though it were obviously wrong teaches nothing, because the learner producing it does not hear it as wrong.' },
    ],
    // NOT modelPlayback, wrongThenRight, perSentenceReplay, scoreOn, autoplay
    // or maxPlays. All six validate, publish and are read by NO renderer.
  },
};

/** Named so the batch, the merge and the test agree on which imports are
 *  reachable by being named rather than by being released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
