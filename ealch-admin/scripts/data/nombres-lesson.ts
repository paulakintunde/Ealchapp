// a1.02.l1 "Les nombres 1-20" — the mission journey.
//
// ── What this lesson is, and what it deliberately refuses to be ────────────
//
// A learner can memorise un to vingt in an afternoon from any list on the
// internet. A lesson that ships that list with a quiz around it is a flashcard
// deck wearing a lesson's clothes, and it is the obvious way to get this unit
// wrong.
//
// The unit's own canDo says the learner will "hear the difference between
// them", and that clause is the whole job. A French number does not have one
// ending. It has the ending the next word gives it:
//
//   dix                 /dis/          the S is said
//   dix minutes         /di mi.nyt/    the S vanishes, with nothing marking it
//   dix ans             /di.z ɑ̃/       the S returns as a Z, joined on
//
// None of that is visible on a written list, which is precisely why a learner
// who has studied the list still cannot catch the number in a sentence. So this
// is an EAR lesson before it is a mouth lesson: listening and listenChoose
// carry more weight here than in a typical A1 unit, every headword is taught in
// at least two states, and the reference table's three columns hold the SAME
// spelling three times so that only the audio distinguishes them.
//
// Every transcription above is already in this repo's corpus. The claim is not
// invented for the lesson; it is surfaced from data the seed has carried all
// along and never taught.
//
// ── The 1-to-20 boundary, and how it is held ──────────────────────────────
//
// Numbers are a three-lesson sequence (a1.02 → a1.27 → a1.28, read by seq, not
// by id). This lesson TEACHES un to vingt and un against une. It SHOWS anything
// above twenty without stopping to explain it, because 238 of the theme's 439
// items mention one and a hard ban would force stilted French into every
// listening line and reading passage.
//
// The test is production. A number above twenty may appear in an example
// sentence, a listening line, a reading passage or a scenario turn; it may not
// appear in a deckTranche, a flashcard, a review card, a dictation sentence, or
// as the answer to a typeIn, errorSpot or speak question. a1-02-nombres.test.ts
// asserts that against those surfaces specifically rather than against every
// string, so legitimate context does not fire it and nobody deletes the check.
//
// The seventies arithmetic (soixante-dix is sixty-ten) and cent/mille/million
// belong to L3 and L4 and are not touched. The one forward pointer is a single
// roundup line: the S the learner has just learned at 17 and 18 behaves
// identically inside 77 and 78, so the rule keeps paying off. That is a
// sentence, not a mission.
//
// ── What the corpus said that the brief did not ───────────────────────────
//
// Three claims were checked against the seed before anything was authored, and
// two of them changed the lesson:
//
//   cinq does NOT shift. The brief grouped it with six and huit. Every one of
//   the 22 cinq transcriptions in the theme keeps /sɛ̃k/, before consonants
//   included. It is taught here as stable, alongside sept, because a rule the
//   data does not support is worse than no rule.
//
//   neuf softens to a V before HEURES, and the corpus only ever shows it there.
//   "quarante-neuf ans" is transcribed /ka.ʁɑ̃t nœf ɑ̃/, with the F intact. So
//   the lesson teaches neuf heures and does not generalise to neuf ans.
//
//   quatre + vowel is transcribed with a Z in this corpus ("quatre euros" as
//   /ka.tʁə.z ø.ʁo/). There is no S in quatre and that is a corpus error, so
//   quatre is never shown before a vowel anywhere in this lesson.
//
// ── Section shapes with a history ─────────────────────────────────────────
//
//   The scene's beats are a named const, each with its own size and audio, and
//   the section sets no `size`: ownsLayout() ignores section size so the field
//   looks inert, but density.logic.ts reads xl as one French unit at 56pt and
//   caps every string at 12 words. Prose cannot live there.
//
//   commonErrors carries `swipe: true` and `size: 'lg'`. Without swipe it
//   renders as a scrolling list rather than one trap per screen, and it used to
//   render as nothing at all.
//
//   `reading` carries questionsInModal WITH questions, which is the only path
//   that reaches PassagePage and therefore the only path that draws a glossary.
//   Five entries authored without it render nowhere.
//
//   ONE quiz section. lessonPager.logic.ts appends exactly one quiz page and
//   resolves it with sections.find(s => s.type === 'quiz'). A second is a set of
//   questions no learner reaches.
//
//   `autoplay` is not authored anywhere. It is declared in schema.ts and
//   implemented in no component. `audioFirst` is the one that does the work.
//
//   The setting carries no image. assets/lessons/ holds alphabet, muettes,
//   rythme and salutations and nothing for this lesson, and Metro resolves
//   require() statically, so registering a ref with no file breaks the bundle
//   rather than degrading to no image.

import type { Lesson, LessonAct, LessonDrill, LessonSection, ErrorTrigger, ReferenceSheet, SceneBeat } from '../../../ealch-v2/src/content/schema.ts';
import { REFRAME, NOMBRES_TERMS } from './nombres-terms.ts';

export { REFRAME };

/* ─── The corpus this lesson draws on ──────────────────────────────────────
 *
 * Twenty-six of these ids already exist; two (deux, une) are authored by
 * nombres-corpus.ts because the nombres theme did not hold them. See that
 * file's header for the verification and for why the quantity phrases were NOT
 * authored: they exist in the cafe and marche themes and are referenced there.
 *
 * Cross-theme reference is deliberate and precedented (sons.04 draws on eight
 * themes). A learner ordering deux cafés is exercising a cafe item and a
 * nombres item in one breath, and duplicating the phrase into nombres would put
 * the same card in the hub twice.                                            */

const N = (n: string) => `fr.sons.nombres.${n}`;
const A = (n: string) => `fr.a1.nombres.${n}`;

/** One to ten. The half of the set with no arithmetic and four shape-shifters
 *  in it. */
const UNITS = [N('001'), A('234'), N('002'), N('003'), N('004'), N('005'), N('006'), N('007'), N('008'), N('009')];
/** The feminine of one. The only number in the language that has one. */
const FEMININE = A('235');
/** Eleven to twenty: six words to memorise, then three that say their own sum,
 *  then twenty. */
const TEENS = [N('010'), N('011'), N('012'), N('013'), N('014'), N('015'), N('016'), N('017'), N('018'), N('019')];
/** Giving an amount. Reused from cafe and marche rather than re-authored. */
const QUANTITY = ['fr.a1.cafe.024', 'fr.a1.cafe.012', 'fr.a1.marche.097'];

/** The four dictation sentences, one per claim the lesson makes.
 *
 *  Chosen so the mission tests the teaching rather than testing spelling in
 *  general: .060 is the S vanishing, .124 is the S returning as a Z, .053 is
 *  the F becoming a V, .046 is un against une. All four carry the `dictation`
 *  drill, asserted in the batch against Postgres rather than against the seed,
 *  and all four are word-mode dictées (over 16 letters, more than one word), so
 *  the learner assembles word tiles with decoys mixed in. */
const DICTATION = [A('060'), A('124'), A('053'), A('046')];

/** The count, said out loud and scored by the mic. Every one of these carries
 *  the voiceflash drill; an item without it renders as a card the mic cannot
 *  score, which reads as a broken mission rather than a missing tag. Asserted
 *  in the batch against the database, because the seed and Postgres drift. */
const SPEAK_IDS = [...UNITS, ...TEENS];

/** The neighbours a beginner mixes up, in pairs: two/twelve, three/thirteen,
 *  six/sixteen, four/fourteen, five/fifteen, nine/nineteen. Ordered so each
 *  pair sits together in the deck. */
const LISTEN_IDS = [
  A('234'), N('011'),
  N('002'), N('012'),
  N('005'), N('015'),
  N('003'), N('013'),
  N('004'), N('014'),
  N('008'), N('018'),
];

const ITEM_IDS = [...new Set([...UNITS, FEMININE, ...TEENS, ...QUANTITY, ...DICTATION])];

/* ─── Mission 1 · Scene ───────────────────────────────────────────────────
 *
 * The A1 register of stakes is a moment going wrong for a reason the learner
 * could not have seen coming, not a mouth position. Here it is a ticket clerk
 * saying a number the learner has practised all week and does not recognise,
 * because the version they practised was the one said alone.
 *
 * The choice beat is the learner's own and both options are plausible: asking
 * for a repeat, or nodding and working it out later. The second is what most
 * people actually do, and it is what costs them the train.
 *
 * Second person, present tense, one learner, as the voice rule requires.       */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Tours station, ten past six. Your train is on the board and you cannot find the platform.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'The clerk',
    fr: 'Le train part dans dix minutes.',
    en: 'The train leaves in ten minutes.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-02-scene' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You have said that number out loud a hundred times this week. You did not catch it once.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You have a few seconds. What do you do?',
    options: [
      {
        fr: 'Oui, merci.',
        en: 'nod, and work it out from the board',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Pardon ? Le train part quand ?',
        en: 'ask her to say it again',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Good. Asked again, she will give you the number on its own, and on its own it is a word you know.',
      breaks: 'That is what most people do, and it is what costs them the train. Watch what she said.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The clerk',
    fr: 'Dix. Dix minutes.',
    en: 'Ten. Ten minutes.',
    stage: 'She says it twice, and the two do not sound the same.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-02-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'The S was there, then it was not',
    // 30 words. The eight shipped scene breaks run 24 to 40 here, and even at
    // 25 the Continue button on a Pixel 6 sits below the fold, so shorter is
    // better on merit rather than for layout.
    body: 'You learned dix on its own. Nobody said the number changes shape for the word behind it, so half of what you learned was never on the card.',
    wrong: {
      fr: 'dix minutes',
      ipa: '/dis mi.nyt/',
      respell: '[DEES mee-NÜT]',
      en: 'what you were listening for',
    },
    right: {
      fr: 'dix minutes',
      ipa: '/di mi.nyt/',
      respell: '[DEE mee-NÜT]',
      en: 'what she actually said',
    },
    coach: 'Same number, same spelling, one syllable shorter.',
    // Audio-first: the ear answers before the eye can. `audioFirst` is what
    // does the work; ScenePlayer holds the text back and plays the right-hand
    // line on entry.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-02-three-states' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    fr: 'Dans dix minutes. Quel quai ?',
    en: 'In ten minutes. Which platform?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The clerk',
    fr: 'Quai six. Vous avez dix minutes.',
    en: 'Platform six. You have ten minutes.',
    stage: 'She points, and this time the number lands.',
    audio: { mode: 'tts', lang: 'fr-FR', recordingId: 'rec-a1-02-scene' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'One number, two shapes, and only one of them was ever on your list.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the number you already knew ───────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Train in Ten Minutes',
    frSub: 'Le train part dans dix minutes',
    render: 'screens',
    layer: 'core',
    terms: ['shift'],
    say: {
      text: 'Watch this happen. You know the number, you have practised the number, and you still do not hear it.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'The ticket window at the station',
      city: 'Tours',
      time: 'Friday, ten past six',
      ambience: 'room-tone-station',
    },
    beats: SCENE_BEATS,
    // The reframe is referenced, never retyped, so this appearance cannot drift
    // out of agreement with the other seven the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} Learn the two together and this stops happening.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end of this you will expect that, instead of being caught by it.`,
    goals: [
      { t: 'Count to twenty out loud', s: 'Say every number from un to vingt without stopping to work one out.' },
      { t: 'Hear a number inside a sentence', s: 'Catch dix in dix minutes and in dix ans, where it sounds like neither.' },
      { t: 'Give a small quantity', s: 'Ask for two of something, and know when un has to become une.' },
      { t: 'Take a time off a board', s: 'Read a departure, a price or an opening hour without freezing at the counter.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-shape',
    title: 'One Number, Three Sounds',
    frSub: 'Dix, trois fois',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['shift', 'linkZ'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-02-three-states' },
    say: `${REFRAME} Here is what that does to one word.`,
    cards: [
      {
        label: 'On its own',
        head: 'Ten, and nothing after it',
        fr: 'dix',
        sub: 'DEES',
        body: 'Alone, at the end of a phrase, or before a pause, the X is said and it sounds like an S. This is the version every list gives you, and it is the only one they give you.',
      },
      {
        label: 'Before a consonant',
        head: 'Ten minutes',
        fr: 'dix minutes',
        sub: 'DEE mee-NÜT',
        body: 'A consonant follows and the S disappears completely. Nothing on the page marks it. The number becomes one short syllable and the next word starts straight away.',
      },
      {
        label: 'Before a vowel',
        head: 'Ten years',
        fr: 'dix ans',
        sub: 'dee-ZAHⁿ',
        body: 'A vowel follows and the S comes back as a Z, said with the next word rather than with the number. Ten years is one sound, not two.',
      },
    ],
  },

  /* ── Act 2: one to ten ────────────────────────────────────────────────── */

  {
    type: 'tapTable',
    id: 's04-onetoten',
    title: 'One to Ten',
    frSub: 'De un à dix',
    layer: 'core',
    terms: ['unUne', 'shift'],
    sheetId: 'sheet.a1.02.numbers',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-02-count' },
    say: 'Ten words. Four of them change shape later in the lesson, and the detail card says which.',
    cols: ['French', 'English', 'Sounds like'],
    rows: [
      {
        cells: ['un', 'one', 'UHⁿ'],
        say: 'un',
        detail: {
          title: 'un',
          body: 'One, and the only number here with a second form. Un before a masculine noun, une before a feminine one. No number above it changes for gender.',
          say: 'un café',
        },
      },
      {
        cells: ['deux', 'two', 'DEU'],
        say: 'deux',
        detail: {
          title: 'deux',
          body: 'The X is silent on its own. Before a vowel it comes back as a Z and joins on, so deux heures is said as one piece.',
          say: 'deux heures',
        },
      },
      {
        cells: ['trois', 'three', 'TRWAH'],
        say: 'trois',
        detail: {
          title: 'trois',
          body: 'The S is silent on its own and returns as a Z before a vowel, exactly like deux. Trois heures runs the two words together.',
          say: 'trois heures',
        },
      },
      {
        cells: ['quatre', 'four', 'KATR'],
        say: 'quatre',
        detail: {
          title: 'quatre',
          body: 'Four consonants around one vowel, and the final R is fully said. English speakers reach for a vowel at the end. Let the T and the R run together instead.',
          say: 'quatre',
        },
      },
      {
        cells: ['cinq', 'five', 'SAⁿK'],
        say: 'cinq',
        detail: {
          title: 'cinq',
          body: 'The K is said everywhere, including in front of another consonant. Five is one of the two numbers in this lesson that never changes.',
          say: 'cinq minutes',
        },
      },
      {
        cells: ['six', 'six', 'SEES'],
        say: 'six',
        detail: {
          title: 'six',
          body: 'On its own the X sounds like an S. Before a consonant it vanishes. Before a vowel it becomes a Z. Three sounds, one spelling.',
          say: 'six euros',
        },
      },
      {
        cells: ['sept', 'seven', 'SET'],
        say: 'sept',
        detail: {
          title: 'sept',
          body: 'The P is silent and the T is always said, wherever the number stands. Seven is the fixed point you can measure the others against.',
          say: 'sept heures',
        },
      },
      {
        cells: ['huit', 'eight', 'WEET'],
        say: 'huit',
        detail: {
          title: 'huit',
          body: 'Starts on a W sound, not an H. The T is said on its own and before a vowel, and drops before a consonant: huit jours is WEE zhoor.',
          say: 'huit heures',
        },
      },
      {
        cells: ['neuf', 'nine', 'NEUF'],
        say: 'neuf',
        detail: {
          title: 'neuf',
          body: 'The F is said. In front of heures it softens to a V and joins on, giving NEU-veur. No other number in the language does that.',
          say: 'neuf heures',
        },
      },
      {
        cells: ['dix', 'ten', 'DEES'],
        say: 'dix',
        detail: {
          title: 'dix',
          body: 'The same three shapes as six: an S alone, nothing before a consonant, a Z before a vowel. This is the number the whole lesson turns on.',
          say: 'dix ans',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's05-unune',
    title: 'The One That Has a Gender',
    frSub: 'Un ou une ?',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['unUne', 'quantity'],
    say: 'French makes you decide something English never asks about, and it happens on the very first number.',
    cards: [
      {
        label: 'The fork',
        head: 'One, twice',
        fr: 'un · une',
        sub: 'UHⁿ · ÜN',
        body: 'One is the only number in French with two forms. The noun you are counting decides which, and it decides before you have finished saying it. Everything from two upward is one word for everyone.',
      },
      {
        label: 'Masculine',
        head: 'un',
        fr: 'un café',
        sub: 'UHⁿ ka-FAY',
        body: 'Un for a masculine noun. It is also the word for a, which is why one coffee and a coffee are the same two words. The N is not pronounced: the vowel is made through the nose instead.',
      },
      {
        label: 'Feminine',
        head: 'une',
        fr: 'une baguette',
        sub: 'ÜN ba-GET',
        body: 'Une for a feminine noun, and here the N really is said. That is the difference a French ear catches first, and it is one letter on the page.',
      },
    ],
  },

  {
    type: 'examples',
    id: 's06-quantity',
    title: 'Asking for an Amount',
    frSub: 'Deux cafés, s’il vous plaît',
    layer: 'core',
    terms: ['quantity', 'unUne'],
    say: 'The number, then the thing, and nothing in between. This is the whole shape of ordering in French.',
    examples: [
      { fr: 'Un café, s’il vous plaît.', en: 'One coffee, please.', note: 'The number and the article are one word. Nobody says one twice.' },
      { fr: 'Deux cafés, s’il vous plaît.', en: 'Two coffees, please.', note: 'The S on cafés is silent, so deux is the only part carrying the amount out loud.' },
      { fr: 'Une baguette, s’il vous plaît.', en: 'One baguette, please.', note: 'Baguette is feminine, so un becomes une.' },
      { fr: 'Deux kilos de pommes.', en: 'Two kilos of apples.', note: 'A measured amount takes de, and de stays bare: never de la, never des.' },
      { fr: 'Trois, s’il vous plaît.', en: 'Three, please.', note: 'Point and give the number alone. Nothing follows it, so the ending is fully said.' },
    ],
  },

  {
    type: 'listening',
    id: 's07-earcheck',
    // Titles are held to about 28 characters. The missions list gives a row one
    // line and truncates with an ellipsis; this one shipped as "Four Sentences,
    // One Question Each" and rendered as "Four Sentences, One Questi…".
    title: 'Listen for the Ending',
    frSub: 'Écoutez bien',
    layer: 'core',
    questionsInModal: true,
    terms: ['shift'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-02-pairs' },
    say: 'No table this time. Listen for what happens at the end of each number.',
    lines: [
      { fr: 'Le concert commence dans dix minutes.', en: 'The concert starts in ten minutes.' },
      { fr: 'Nous avons visité quinze pays en dix ans.', en: 'We visited fifteen countries in ten years.' },
      { fr: 'Le magasin ouvre à neuf heures.', en: 'The shop opens at nine.' },
      { fr: 'Il reste huit jours avant les vacances.', en: 'There are eight days left before the holidays.' },
    ],
    questions: [
      {
        q: 'In the first line, what happens to the S at the end of dix?',
        opts: ['It is said, like an S', 'It disappears', 'It becomes a Z', 'It becomes a T'],
        correct: 1,
        why: 'Minutes starts on a consonant, so the S of dix has nowhere to go and is dropped entirely.',
      },
      {
        q: 'In the second line, dix ans. What do you hear between the two words?',
        opts: ['nothing at all', 'a Z', 'an S', 'a T'],
        correct: 1,
        why: 'Ans starts on a vowel, so the S wakes up as a Z and joins the two words into one sound.',
      },
      {
        q: 'Neuf heures. Which letter changes?',
        opts: ['the N', 'the E', 'the F', 'none of them'],
        correct: 2,
        why: 'The F softens to a V in front of heures. It is the only number in French that does this.',
      },
    ],
  },

  /* ── Act 3: eleven to twenty ──────────────────────────────────────────── */

  {
    type: 'tapTable',
    id: 's08-teens',
    title: 'Eleven to Twenty',
    frSub: 'De onze à vingt',
    layer: 'core',
    terms: ['teens', 'linkZ'],
    sheetId: 'sheet.a1.02.numbers',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-02-count' },
    say: 'Six words with no pattern, then three that say their own arithmetic. Knowing where that break falls saves you looking for a rule that is not there.',
    cols: ['French', 'English', 'Sounds like'],
    rows: [
      {
        cells: ['onze', 'eleven', 'OHⁿZ'],
        say: 'onze',
        detail: {
          title: 'onze',
          body: 'Eleven to sixteen are six separate words with nothing in them to work out. Learn them the way you learned the English ones, a few at a time.',
          say: 'onze heures',
        },
      },
      {
        cells: ['douze', 'twelve', 'DOOZ'],
        say: 'douze',
        detail: {
          title: 'douze',
          body: 'The Z is written into the word, so it is always said and never depends on what follows. That is what separates douze from deux at speed.',
          say: 'douze',
        },
      },
      {
        cells: ['treize', 'thirteen', 'TREHZ'],
        say: 'treize',
        detail: {
          title: 'treize',
          body: 'Trois and treize share a beginning and nothing else. The Z ending is what tells you which of the two you just heard.',
          say: 'treize',
        },
      },
      {
        cells: ['quatorze', 'fourteen', 'ka-TORZ'],
        say: 'quatorze',
        detail: {
          title: 'quatorze',
          body: 'Two syllables, stressed on the second, and the same built-in Z as twelve, thirteen and sixteen. Quatre is one syllable and ends on a consonant cluster.',
          say: 'quatorze heures',
        },
      },
      {
        cells: ['quinze', 'fifteen', 'KAⁿZ'],
        say: 'quinze',
        detail: {
          title: 'quinze',
          body: 'The vowel is nasal, so no N is pronounced: one sound made through the nose, then a Z. Cinq has the same vowel and a K instead.',
          say: 'quinze',
        },
      },
      {
        cells: ['seize', 'sixteen', 'SEHZ'],
        say: 'seize',
        detail: {
          title: 'seize',
          body: 'Nothing of six survives in seize. Six ends on an S sound and seize ends on a Z, and that ending is the whole clue.',
          say: 'seize heures',
        },
      },
      {
        cells: ['dix-sept', 'seventeen', 'dee-SET'],
        say: 'dix-sept',
        detail: {
          title: 'dix-sept',
          body: 'Ten seven, written out, and from here the language stops inventing words. The S of dix says nothing at all in this one.',
          say: 'dix-sept',
        },
      },
      {
        cells: ['dix-huit', 'eighteen', 'dee-ZWEET'],
        say: 'dix-huit',
        detail: {
          title: 'dix-huit',
          body: 'Ten eight. The same S as in dix-sept, and here it is said, as a Z. One letter doing two different jobs three words apart.',
          say: 'dix-huit heures',
        },
      },
      {
        cells: ['dix-neuf', 'nineteen', 'deez-NEUF'],
        say: 'dix-neuf',
        detail: {
          title: 'dix-neuf',
          body: 'Ten nine, and the S is a Z again. This time it closes the first syllable instead of opening the second, so the word starts DEEZ.',
          say: 'dix-neuf',
        },
      },
      {
        cells: ['vingt', 'twenty', 'VAⁿ'],
        say: 'vingt',
        detail: {
          title: 'vingt',
          body: 'The G and the T are both written and both silent on their own. Before a vowel the T wakes up and joins on: vingt heures is VAⁿ-teur.',
          say: 'vingt heures',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's09-seventeen',
    title: 'The Same S, Three Times',
    frSub: 'Dix-sept, dix-huit, dix-neuf',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['teens', 'linkZ', 'shift'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-02-count' },
    say: `${REFRAME} These three put all of it on one screen.`,
    cards: [
      {
        label: 'Silent',
        head: 'Seventeen',
        fr: 'dix-sept',
        sub: 'dee-SET',
        body: 'The S of dix says nothing. Read the word and you would never guess that, because the letter is right there on the page.',
      },
      {
        label: 'A Z',
        head: 'Eighteen',
        fr: 'dix-huit',
        sub: 'dee-ZWEET',
        body: 'The same S, one number later, and now it is a Z. Nothing about the spelling of dix has changed. What follows it has.',
      },
      {
        label: 'A Z again',
        head: 'Nineteen',
        fr: 'dix-neuf',
        sub: 'deez-NEUF',
        body: 'The Z again, and here it closes the first syllable rather than opening the second. Three numbers in a row, three different jobs for one letter.',
      },
    ],
  },

  {
    type: 'practice',
    id: 's10-neighbours',
    title: 'Two or Twelve?',
    frSub: 'Écoutez et choisissez',
    layer: 'core',
    terms: ['teens'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: 'Six pairs that sound alike and are ten apart. The ending is the only thing separating them.',
    skill: 'listen',
    itemIds: LISTEN_IDS,
  },

  /* ── Act 4: what the next word does ───────────────────────────────────── */

  {
    type: 'tapTable',
    id: 's11-shift',
    // Was "The Same Number, Three Ways" (27 characters) and the missions list
    // cut it to "The Same Number, Three W…". The real limit is rendered WIDTH,
    // not character count: "What You Will Be Able To Do" is also 27 and fits,
    // because its letters are narrow. Anything near the limit wants a device
    // check rather than a character count.
    title: 'Six Numbers, Three Ways',
    frSub: 'Le mot qui suit',
    layer: 'core',
    terms: ['shift', 'linkZ', 'hours'],
    sheetId: 'sheet.a1.02.shift',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-02-shift-table' },
    // The three columns hold the SAME spelling three times, deliberately. The
    // eye finds nothing here; only the audio distinguishes them, and that is
    // the lesson's whole claim rendered as a layout.
    say: `${REFRAME} Every row here is one number written three times. Tap a row and only your ear can tell them apart.`,
    cols: ['Alone', 'Before a consonant', 'Before a vowel'],
    rows: [
      {
        cells: ['six', 'six jours', 'six euros'],
        say: 'six. six jours. six euros.',
        detail: {
          title: 'six',
          body: 'SEES alone. SEE zhoor before a consonant, with nothing left of the X. SEE-zeu-roh before a vowel, where it is a Z joined to the next word.',
          say: 'six, six jours, six euros',
        },
      },
      {
        cells: ['huit', 'huit jours', 'huit heures'],
        say: 'huit. huit jours. huit heures.',
        detail: {
          title: 'huit',
          body: 'WEET alone. WEE zhoor before a consonant, where the T drops. WEE-teur before a vowel, where it comes back and joins on.',
          say: 'huit, huit jours, huit heures',
        },
      },
      {
        cells: ['dix', 'dix minutes', 'dix ans'],
        say: 'dix. dix minutes. dix ans.',
        detail: {
          title: 'dix',
          body: 'DEES alone. DEE mee-nüt before a consonant. dee-ZAHⁿ before a vowel. This is the row the opening scene was built on.',
          say: 'dix, dix minutes, dix ans',
        },
      },
      {
        cells: ['vingt', 'vingt minutes', 'vingt heures'],
        say: 'vingt. vingt minutes. vingt heures.',
        detail: {
          title: 'vingt',
          body: 'VAⁿ alone and VAⁿ before a consonant, so twenty is the one number here that does nothing until a vowel arrives. Then the silent T wakes: VAⁿ-teur.',
          say: 'vingt, vingt minutes, vingt heures',
        },
      },
      {
        cells: ['neuf', 'neuf jours', 'neuf heures'],
        say: 'neuf. neuf jours. neuf heures.',
        detail: {
          title: 'neuf',
          body: 'NEUF alone and NEUF before a consonant. Before heures the F softens to a V: NEU-veur. Nine is the only number that swaps a letter rather than dropping or adding one.',
          say: 'neuf, neuf jours, neuf heures',
        },
      },
      {
        cells: ['sept', 'sept jours', 'sept heures'],
        say: 'sept. sept jours. sept heures.',
        detail: {
          title: 'sept',
          body: 'SET in all three. Seven does not move, and neither does cinq. Two fixed points are worth knowing, because they tell you the movement is real and not your ear.',
          say: 'sept, sept jours, sept heures',
        },
      },
    ],
  },

  {
    type: 'listening',
    id: 's12-pairs',
    title: 'Six Lines, Same Numbers',
    frSub: 'La même chose, deux fois',
    layer: 'core',
    questionsInModal: true,
    terms: ['shift', 'hours'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-02-pairs' },
    say: 'Each number here turns up twice across the six lines, and each time it sounds different.',
    lines: [
      { fr: 'Il reste huit jours avant les vacances.', en: 'There are eight days left before the holidays.' },
      { fr: 'À huit heures et demie précises, le cours commence.', en: 'The class starts at exactly half past eight.' },
      { fr: 'Le concert commence dans dix minutes.', en: 'The concert starts in ten minutes.' },
      { fr: 'Nous célébrons nos dix ans de mariage.', en: 'We are celebrating our tenth anniversary.' },
      { fr: 'Le film commence à vingt heures trente.', en: 'The film starts at half past eight in the evening.' },
      { fr: 'Le magasin ouvre à neuf heures.', en: 'The shop opens at nine.' },
    ],
    questions: [
      {
        q: 'Two lines say huit. In which one is the T silent?',
        opts: ['huit heures', 'huit jours', 'both of them', 'neither of them'],
        correct: 1,
        why: 'Jours starts on a consonant, so the T drops and huit ends on its vowel. Before heures the T is said and joins on.',
      },
      {
        q: 'Vingt heures. What can you hear that vingt on its own does not have?',
        opts: ['a Z', 'an N', 'a T', 'a G'],
        correct: 2,
        why: 'The T of vingt is silent alone and wakes up before a vowel. The G beside it stays silent either way.',
      },
      {
        q: 'Which of these sounds the same in both halves?',
        opts: ['dix minutes and dix ans', 'huit jours and huit heures', 'sept jours and sept heures', 'neuf jours and neuf heures'],
        correct: 2,
        why: 'Sept keeps its T wherever it stands, which is why it is worth using as the thing you measure the moving numbers against.',
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's13-traps',
    // `swipe` and `size` are not decoration. MissionSection renders
    // commonErrors as its own swipe deck ONLY when `swipe` is set; without it
    // the section is a scrolling list, and before the fallback was moved out of
    // the switch's `default:` it drew a blank screen. Every v2 lesson that
    // ships this section sets both.
    swipe: true,
    size: 'lg',
    title: 'Three Traps',
    frSub: 'Trois pièges',
    layer: 'core',
    terms: ['shift', 'unUne'],
    say: 'Three mistakes an English speaker makes in their first week, in roughly this order.',
    errors: [
      {
        wrong: 'Saying « dix minutes » with the S sounded, as DEES mee-nüt.',
        right: 'Saying it as DEE mee-nüt, with no S at all.',
        why: `${REFRAME} Minutes begins on a consonant, so the S has nowhere to go and French drops it rather than squeezing it in.`,
      },
      {
        wrong: 'Asking for « un baguette » at the counter.',
        right: 'Asking for « une baguette » at the counter.',
        why: 'Baguette is feminine, so one is une. It is one letter, and it is the fastest thing a French ear uses to place you as a beginner.',
      },
      {
        wrong: 'Hearing « seize » and writing six.',
        right: 'Hearing the Z on the end and writing sixteen.',
        why: 'Six ends on an S sound and seize ends on a Z. Nothing else of six survives in seize, so the ending carries the entire difference.',
      },
    ],
  },

  {
    type: 'practice',
    id: 's14-speak',
    title: 'Count to Twenty',
    frSub: 'Comptez à voix haute',
    layer: 'core',
    terms: ['shift'],
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Twenty numbers, said one at a time with a pause after each. Nothing follows them here, so every ending is fully said.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  /* ── Act 5: banked, and used ──────────────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's15-words',
    title: 'The Words Themselves',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['teens', 'unUne', 'shift'],
    sheetId: 'sheet.a1.02.numbers',
    say: 'Four decks, split where the language splits. Open whichever you want first.',
    themes: [
      {
        title: 'One to five',
        cards: [
          { fr: 'un', sub: 'UHⁿ', en: 'one, masculine' },
          { fr: 'une', sub: 'ÜN', en: 'one, feminine' },
          { fr: 'deux', sub: 'DEU', en: 'two' },
          { fr: 'trois', sub: 'TRWAH', en: 'three' },
          { fr: 'quatre', sub: 'KATR', en: 'four' },
          { fr: 'cinq', sub: 'SAⁿK', en: 'five, and it never moves' },
        ],
      },
      {
        title: 'Six to ten',
        cards: [
          { fr: 'six', sub: 'SEES', en: 'six, three shapes' },
          { fr: 'sept', sub: 'SET', en: 'seven, and it never moves' },
          { fr: 'huit', sub: 'WEET', en: 'eight, three shapes' },
          { fr: 'neuf', sub: 'NEUF', en: 'nine, a V before heures' },
          { fr: 'dix', sub: 'DEES', en: 'ten, three shapes' },
        ],
      },
      {
        title: 'Eleven to sixteen, one at a time',
        cards: [
          { fr: 'onze', sub: 'OHⁿZ', en: 'eleven' },
          { fr: 'douze', sub: 'DOOZ', en: 'twelve' },
          { fr: 'treize', sub: 'TREHZ', en: 'thirteen' },
          { fr: 'quatorze', sub: 'ka-TORZ', en: 'fourteen' },
          { fr: 'quinze', sub: 'KAⁿZ', en: 'fifteen' },
          { fr: 'seize', sub: 'SEHZ', en: 'sixteen' },
        ],
      },
      {
        title: 'Seventeen to twenty, where the sum shows',
        cards: [
          { fr: 'dix-sept', sub: 'dee-SET', en: 'seventeen, ten seven' },
          { fr: 'dix-huit', sub: 'dee-ZWEET', en: 'eighteen, ten eight' },
          { fr: 'dix-neuf', sub: 'deez-NEUF', en: 'nineteen, ten nine' },
          { fr: 'vingt', sub: 'VAⁿ', en: 'twenty' },
        ],
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's16-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Say the French out loud before you flip it.',
    cards: [
      { front: 'one (before a masculine noun)', back: 'un', say: 'un' },
      { front: 'one (before a feminine noun)', back: 'une', say: 'une' },
      { front: 'two', back: 'deux', say: 'deux' },
      { front: 'three', back: 'trois', say: 'trois' },
      { front: 'four', back: 'quatre', say: 'quatre' },
      { front: 'five', back: 'cinq', say: 'cinq' },
      { front: 'six', back: 'six', say: 'six' },
      { front: 'seven', back: 'sept', say: 'sept' },
      { front: 'eight', back: 'huit', say: 'huit' },
      { front: 'nine', back: 'neuf', say: 'neuf' },
      { front: 'ten', back: 'dix', say: 'dix' },
      { front: 'eleven', back: 'onze', say: 'onze' },
      { front: 'twelve', back: 'douze', say: 'douze' },
      { front: 'thirteen', back: 'treize', say: 'treize' },
      { front: 'fourteen', back: 'quatorze', say: 'quatorze' },
      { front: 'fifteen', back: 'quinze', say: 'quinze' },
      { front: 'sixteen', back: 'seize', say: 'seize' },
      { front: 'seventeen', back: 'dix-sept', say: 'dix-sept' },
      { front: 'eighteen', back: 'dix-huit', say: 'dix-huit' },
      { front: 'nineteen', back: 'dix-neuf', say: 'dix-neuf' },
      { front: 'twenty', back: 'vingt', say: 'vingt' },
      { front: 'ten minutes', back: 'dix minutes', say: 'dix minutes' },
      { front: 'ten years', back: 'dix ans', say: 'dix ans' },
      { front: 'nine o’clock', back: 'neuf heures', say: 'neuf heures' },
    ],
  },

  {
    type: 'dictation',
    id: 's17-dictation',
    title: 'Write What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    terms: ['linkZ', 'hours'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a1-02-dictee' },
    say: 'Four sentences, one for each thing this lesson claims. Build each from the word tiles, and some of the tiles do not belong.',
    itemIds: DICTATION,
  },

  {
    type: 'scenario',
    id: 's18-scenario',
    title: 'Your Turn at the Stall',
    frSub: 'Au marché',
    layer: 'core',
    terms: ['quantity', 'hours'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-02-scenario' },
    say: 'A market stall, and you hold up the whole exchange. Every line you say has a number in it.',
    setting: 'A market stall in Annecy, Saturday, just after nine.',
    turns: [
      { ai: 'Bonjour ! Vous désirez ?', en: 'Hello! What would you like?', user: 'Bonjour. Deux kilos de pommes, s’il vous plaît.' },
      { ai: 'Deux kilos. Et avec ça ?', en: 'Two kilos. Anything else?', user: 'Une baguette, s’il vous plaît.' },
      { ai: 'Voilà. Ça fait huit euros.', en: 'There you go. That comes to eight euros.', user: 'Huit euros. Voilà.' },
      { ai: 'Merci. On ferme à treize heures aujourd’hui.', en: 'Thank you. We close at one o’clock today.', user: 'À treize heures, d’accord.' },
      { ai: 'Bonne journée !', en: 'Have a good day!', user: 'Merci, au revoir.' },
    ],
  },

  {
    type: 'useCases',
    id: 's19-cases',
    // Was "Six Numbers You Will Say This Week", which the missions list cut to
    // "Six Numbers You Will Say Thi…". See the note on s07.
    title: 'Six Moments This Week',
    frSub: 'Dans la vraie vie',
    layer: 'core',
    terms: ['hours', 'quantity'],
    say: 'Every one of these is a real moment, and in every one the number is doing something to the word after it.',
    cases: [
      { situation: 'Ordering at a counter', fr: 'Deux cafés, s’il vous plaît.', en: 'Two coffees, please.' },
      { situation: 'Asking when a shop opens', fr: 'Vous ouvrez à quelle heure ?', en: 'What time do you open?' },
      { situation: 'Reading the answer off the door', fr: 'Ouvert de neuf heures à dix-neuf heures.', en: 'Open from nine until seven.' },
      { situation: 'Buying a single ticket', fr: 'Un billet, s’il vous plaît.', en: 'One ticket, please.' },
      { situation: 'Being told how long to wait', fr: 'Dans dix minutes.', en: 'In ten minutes.' },
      { situation: 'Saying how many are eating', fr: 'Une table pour quatre, s’il vous plaît.', en: 'A table for four, please.' },
    ],
  },

  {
    type: 'reading',
    id: 's20-reading',
    title: 'Two Tickets to Nantes',
    frSub: 'Au guichet',
    layer: 'core',
    terms: ['hours', 'linkZ'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a
    // reading section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions. Without it the section takes the fallback path, and
    // MissionRich contains no reference to `glossary`. Five entries shipped
    // that way on a1.01 and rendered nowhere.
    questionsInModal: true,
    say: 'Read it once for the shape. Tap any word you do not know.',
    // Paul's A1 rule, set on a1.01's passage: anything not inside « » is in
    // English. Stage directions are context, and context is instruction. An A1
    // learner's reading effort belongs on the exchange, not on decoding who is
    // standing where.
    //
    // ONE BLOCK, NO LINE BREAKS, and that is a decision rather than a
    // shortcut. PassagePage splits the passage with
    // `text.split(/(?<=[.!?»])\s+/)` and renders the pieces inline in a single
    // <TX>, so `\n` is consumed as ordinary whitespace and every authored line
    // break is discarded. Verified on a device: the first draft was written as
    // one line per turn and rendered as a run-on paragraph.
    //
    // So the breaks are not authored. A field no component reads is worse than
    // an absent one, because it looks like the job is done. The English
    // narration between the quotes does the work the line breaks were doing:
    // it says who is speaking and hands the turn over. a1.01's passage authors
    // `\n` and loses it the same way; wiring PassagePage to honour paragraphs
    // is a real fix, it is about five lines, and it would change a shipped
    // lesson's appearance, so it wants a deliberate decision rather than
    // arriving as a side effect of this one.
    //
    // The 36 in the price is deliberate. Numbers above twenty are SHOWN and not
    // taught, and a passage that avoided them entirely would be a passage no
    // French ticket window has ever produced.
    text:
      'It is quarter past eight and Marc is at the ticket window in Tours. ' +
      'He needs to be in Nantes by lunchtime. ' +
      '« Bonjour. Deux billets pour Nantes, s’il vous plaît. » ' +
      'The clerk checks her screen before she answers. ' +
      '« Deux billets. Le train part à neuf heures. » ' +
      'Marc wants to know when it gets in. ' +
      '« À neuf heures ? Il arrive quand ? » ' +
      'She gives him the time, and then the price. ' +
      '« À onze heures dix. Ça fait trente-six euros. » ' +
      'He pays and looks up at the board. The platform is still not there. ' +
      '« Quel quai ? » ' +
      'She points over his shoulder. ' +
      '« Quai six. Vous avez quinze minutes. » ' +
      '« Merci beaucoup. »',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and
    // case on BOTH sides and allows a phrase of up to four words. A phrase
    // entry wins over a bare word inside it, so "neuf heures" is underlined as
    // one span rather than being shadowed by a hypothetical "neuf".
    glossary: [
      { word: 'billets', en: 'tickets', note: 'The plural S is silent. Deux in front of it is the only thing telling you there is more than one.' },
      { word: 'part', en: 'leaves', note: 'From partir. Le train part is how every French departure is announced.' },
      { word: 'neuf heures', en: 'nine o’clock', note: 'The F of neuf is said as a V here and runs straight into heures.' },
      { word: 'quai', en: 'platform', note: 'The word on every station board in France. Quai six is platform six.' },
      { word: 'quinze minutes', en: 'fifteen minutes', note: 'The Z of quinze is part of the word, so it is said whatever follows.' },
    ],
    questions: [
      { q: 'What time does the train leave, and what time does it arrive?', a: 'It leaves at nine and arrives at ten past eleven.' },
      { q: 'How many tickets does Marc buy, and what does he pay?', a: 'Two tickets, for thirty-six euros.' },
      { q: 'In « neuf heures », what does the F sound like?', a: 'A V. The two words run together as NEU-veur.' },
    ],
  },

  /* ── Act 6: prove it ──────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's21-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['shift', 'unUne', 'teens'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'dix on its own', back: 'DEES. The X is said, and it sounds like an S.', say: 'dix' },
      { front: 'dix before a consonant', back: 'DEE. The S is gone completely.', say: 'dix minutes' },
      { front: 'dix before a vowel', back: 'dee-Z, joined to the next word.', say: 'dix ans' },
      { front: 'Which two numbers never change?', back: 'cinq and sept. Both keep their ending everywhere.', say: 'cinq, sept' },
      { front: 'nine o’clock', back: 'neuf heures. The F becomes a V.', say: 'neuf heures' },
      { front: 'The T in vingt wakes up when…', back: '…a vowel follows. vingt heures, not vingt.', say: 'vingt heures' },
      { front: 'One baguette', back: 'Une baguette. Baguette is feminine.', say: 'une baguette' },
      { front: 'Where does the pattern start?', back: 'At dix-sept. Onze to seize have none.', say: 'dix-sept' },
      { front: 'Two coffees', back: 'Deux cafés. The S on cafés is silent.', say: 'deux cafés' },
      { front: 'seize or six?', back: 'seize ends on a Z, six ends on an S.', say: 'six, seize' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's22-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    // The prose deliberately carries no figures. Every number this card states
    // is a fact about the array above it, and a display string is validated
    // against nothing, so a hand-typed count would have been left confidently
    // wrong by the first mission added with the whole suite still green.
    body: 'You have counted to twenty out loud, heard the same number in three shapes, ordered at a stall and read a departure off a board. What is left is the part that tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's23-quiz',
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Four rounds. Miss too many in one and you get its drill before the next round starts.',
    rounds: [
      {
        id: 'r1-one-to-twenty',
        label: 'One to twenty',
        targets: ['err-wrong-number'],
        say: 'The twenty words, and the six that sound like each other.',
        questions: [
          {
            q: 'Listen. Which number is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'quinze' },
            opts: ['cinq', 'quatorze', 'quinze', 'quatre'],
            correct: 2,
            why: 'Quinze ends on a Z and cinq ends on a K. They share a vowel, so the ending is the only thing separating five from fifteen.',
            ref: 's08-teens',
          },
          {
            q: 'Sixteen is:',
            format: 'mcq',
            opts: ['six', 'dix-six', 'six-dix', 'seize'],
            correct: 3,
            why: 'Sixteen has its own word and nothing of six survives in it. The ten-plus pattern only begins at dix-sept.',
            ref: 's08-teens',
          },
          {
            q: 'Write the number that comes between seize and dix-huit.',
            format: 'typeIn',
            accept: ['dix-sept', 'dixsept', 'dix sept'],
            answer: 'dix-sept',
            why: 'Seventeen is where French stops inventing new words and starts saying ten seven out loud.',
            ref: 's08-teens',
          },
          {
            q: 'Listen. Which number is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'douze' },
            opts: ['douze', 'deux', 'dix', 'onze'],
            correct: 0,
            why: 'Deux ends on a vowel and douze ends on a Z. That Z is the whole difference between two and twelve.',
            ref: 's10-neighbours',
          },
          {
            q: 'Onze to seize are six words with:',
            format: 'mcq',
            opts: ['a pattern you can work out', 'no pattern, learned one at a time', 'the same endings as one to six', 'a silent ten at the front'],
            correct: 1,
            why: 'There is nothing to derive in eleven to sixteen. Looking for a rule there wastes the effort those six words actually need.',
            ref: 's08-teens',
          },
          {
            q: 'Listen. Which number is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'quatorze' },
            opts: ['quatre', 'douze', 'quinze', 'quatorze'],
            correct: 3,
            why: 'Quatorze is two syllables stressed on the second. Quatre is one syllable that ends on a consonant cluster.',
            ref: 's08-teens',
          },
        ],
      },
      {
        id: 'r2-one-has-a-gender',
        label: 'One has a gender',
        targets: ['err-un-une'],
        say: 'The only number that asks you a question before you say it.',
        questions: [
          {
            q: 'You want one baguette. Which?',
            format: 'mcq',
            opts: ['Un baguette', 'Une baguette', 'Un baguettes', 'Une baguettes'],
            correct: 1,
            why: 'Baguette is feminine, so one is une. The noun decides, and it decides before you have finished the first word.',
            ref: 's05-unune',
          },
          {
            q: 'Write "one coffee". Café is masculine.',
            format: 'typeIn',
            accept: ['un café'],
            answer: 'un café',
            why: 'Un is both the number one and the word a, so French says it once and means both.',
            ref: 's06-quantity',
          },
          {
            q: 'How many numbers in this lesson change for gender?',
            format: 'mcq',
            opts: ['all of them', 'the first five', 'only one', 'none of them'],
            correct: 2,
            why: 'Only un has a feminine form. Everything from deux upward is the same word whatever it is counting.',
            ref: 's05-unune',
          },
          {
            q: 'Listen. Which did you hear?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'une table pour quatre' },
            opts: ['une table pour quatre', 'une table pour quatorze', 'un billet pour quatre', 'une table pour quinze'],
            correct: 0,
            why: 'Table is feminine, so it takes une, and the N of une is fully said where the N of un is not.',
            ref: 's18-scenario',
          },
          {
            q: 'Write "two coffees". Café is masculine.',
            format: 'typeIn',
            accept: ['deux cafés'],
            answer: 'deux cafés',
            why: 'The S on cafés is silent, so deux is the only part of the phrase a listener hears carrying the amount.',
            ref: 's06-quantity',
          },
          {
            q: 'A trader says « Deux kilos ? ». What is the S on kilos doing?',
            format: 'mcq',
            opts: ['it is said', 'it becomes a Z', 'it depends on the next word', 'it is silent'],
            correct: 3,
            why: 'A plural S is silent in French. The number in front is what makes a quantity audible at all.',
            ref: 's06-quantity',
          },
        ],
      },
      {
        id: 'r3-the-next-word',
        label: 'What the next word did',
        targets: ['err-flat-ending'],
        say: `${REFRAME} Six questions on exactly that.`,
        questions: [
          {
            q: 'Listen. Which is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'dix minutes' },
            opts: ['deux minutes', 'dix ans', 'dix minutes', 'douze minutes'],
            correct: 2,
            why: 'Minutes begins on a consonant, so the S of dix is gone entirely and the number is one short syllable.',
            ref: 's11-shift',
          },
          {
            q: 'Listen. Which is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'dix ans' },
            opts: ['dix jours', 'dix ans', 'douze ans', 'deux ans'],
            correct: 1,
            why: 'Ans begins on a vowel, so the S wakes as a Z and joins the two words into a single sound.',
            ref: 's11-shift',
          },
          {
            q: 'Which number keeps the same ending wherever it stands?',
            format: 'mcq',
            opts: ['dix', 'six', 'sept', 'huit'],
            correct: 2,
            why: 'Sept keeps its T alone, before a consonant and before a vowel. The other three all move.',
            ref: 's11-shift',
          },
          {
            q: 'Someone has written twenty as « vin ». Write it properly.',
            format: 'errorSpot',
            accept: ['vingt'],
            answer: 'vingt',
            why: 'The G and the T are both written and both silent on their own. They are still there, and the T is what wakes up before a vowel.',
            ref: 's08-teens',
          },
          {
            q: 'Vingt heures. What has changed?',
            format: 'mcq',
            opts: ['the T is now said', 'the G is now said', 'the vowel is no longer nasal', 'nothing changes'],
            correct: 0,
            why: 'The T of vingt is silent alone and sounds before a vowel. The G stays silent in both.',
            ref: 's11-shift',
          },
          {
            q: 'Listen. Which is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'huit jours' },
            opts: ['huit heures', 'huit euros', 'onze jours', 'huit jours'],
            correct: 3,
            why: 'Jours begins on a consonant, so the T of huit drops and the word ends on its vowel.',
            ref: 's11-shift',
          },
        ],
      },
      {
        id: 'r4-at-the-counter',
        label: 'Out loud, at the counter',
        targets: ['err-heard-wrong', 'err-flat-ending'],
        say: 'Where all of this actually happens.',
        questions: [
          {
            q: 'Say it out loud: ten minutes.',
            format: 'speak',
            target: 'dix minutes',
            ipa: '/di mi.nyt/',
            why: 'One short syllable, then the next word. If you can hear an S, that is still the English reading of the page.',
            ref: 's14-speak',
          },
          {
            q: 'Count out loud, one to five.',
            format: 'speak',
            target: 'un, deux, trois, quatre, cinq',
            ipa: '/œ̃ dø tʁwa katʁ sɛ̃k/',
            why: 'Every ending is fully said here, because each number is followed by a pause rather than by a word.',
            ref: 's14-speak',
          },
          {
            q: 'The shop opens at nine. Write the two French words.',
            format: 'typeIn',
            accept: ['neuf heures'],
            answer: 'neuf heures',
            why: 'Written it is neuf. Said it is NEU-veur, and that V is the only reason it is hard to catch on a doorway sign read aloud.',
            ref: 's11-shift',
          },
          {
            q: 'Listen. What time is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'à treize heures' },
            opts: ['à treize heures', 'à trois heures', 'à seize heures', 'à dix heures'],
            correct: 0,
            why: 'The Z of treize is part of the word, so it sounds the same before a vowel as it does alone. Trois only gets a Z from the vowel that follows it.',
            ref: 's20-reading',
          },
          {
            q: 'A trader says « Ça fait huit euros ». What have you paid?',
            format: 'mcq',
            opts: ['eighteen euros', 'eight euros', 'two euros', 'eleven euros'],
            correct: 1,
            why: 'Huit euros joins the T on, which makes eight sound longer than you expect. Dix-huit euros would have started on a D.',
            ref: 's18-scenario',
          },
          {
            q: 'The one thing that decides how a French number ends:',
            format: 'mcq',
            opts: ['how loudly you say it', 'whether it is written in figures', 'the word that comes after it', 'how many syllables it has'],
            correct: 2,
            why: `${REFRAME} That is the whole lesson, and it is why no written list can teach it.`,
            ref: 's24-roundup',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's24-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Six things you did not have this morning, and one that arrives free in a later lesson.',
    body: 'You can count to twenty, and more usefully you can catch a number inside a sentence where it does not sound the way you learned it. That second thing is what a written list can never give you, and it is most of what stands between reading French numbers and hearing them.',
    points: [
      `${REFRAME} Learn the number and the word after it as one piece.`,
      'dix and six have three sounds each: an S alone, nothing before a consonant, a Z before a vowel.',
      'huit and vingt hide a T that drops before a consonant and wakes before a vowel.',
      'neuf becomes a V in front of heures, and nowhere else worth learning yet.',
      'cinq and sept never move, which is what lets you trust that the others do.',
      'One is the only number with a gender: un café, une baguette.',
      'The S you have just learned at dix-sept and dix-huit behaves identically inside 77 and 78, so the seventies arrive already half done.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Four figures, every one a fact about the array directly above. Typed by hand
 * they would have been left confidently wrong by the first mission added or
 * quiz round dropped, with the whole suite still green: a display string is
 * validated against nothing.
 *
 * Derived here instead, and it throws rather than degrades. A progress card
 * that silently reports "0 of 0" is worse than a build that stops.            */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's22-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.02.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Numbers met', v: String(ITEM_IDS.length) },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
    { k: 'Pass mark', v: `${quiz.passMark}%` },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a
 * nice number, because it is divided by the rest points to check that no
 * stretch runs past the checkpoint-spacing limit of 22. A flattering estimate
 * buys a lesson that passes the validator and exhausts the learner.           */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The number you already knew',
    sections: ['s01-scene', 's02-goals', 's03-shape'],
    milestone: 'You have heard one number turn into three.',
    estScreens: 15,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'One to ten',
    sections: ['s04-onetoten', 's05-unune', 's06-quantity', 's07-earcheck'],
    milestone: 'Ten numbers, and you know which of them has a gender.',
    estScreens: 14,
  },
  {
    id: 'act3',
    title: 'Eleven to twenty',
    sections: ['s08-teens', 's09-seventeen', 's10-neighbours'],
    milestone: 'All twenty, and you can hear two apart from twelve.',
    estScreens: 21,
    restPoints: ['s10-neighbours/halfway'],
  },
  {
    id: 'act4',
    title: 'What the next word does',
    sections: ['s11-shift', 's12-pairs', 's13-traps', 's14-speak'],
    milestone: 'You can hear the ending move, and you can make it move.',
    estScreens: 34,
    restPoints: ['s14-speak/halfway'],
  },
  {
    id: 'act5',
    title: 'Banked, and used',
    sections: ['s15-words', 's16-flash', 's17-dictation', 's18-scenario', 's19-cases', 's20-reading'],
    milestone: 'You have spelled them, ordered with them and read them off a board.',
    estScreens: 37,
    restPoints: ['s16-flash/halfway', 's18-scenario/opening'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s21-review', 's22-progress', 's23-quiz', 's24-roundup'],
    milestone: 'Lesson complete.',
    estScreens: 36,
    restPoints: ['s21-review/halfway', 's23-quiz/after-r2'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned.
 *
 * Act 4 releases nothing, and that is the point of the act rather than an
 * oversight: it teaches no new WORDS at all. It teaches new behaviour of words
 * acts 2 and 3 already handed over, which is the one thing a flashcard cannot
 * carry. Act 6 releases nothing because it tests.                             */

const DECK_TRANCHE: string[][] = [
  // The scene and the three-card deck both teach ten, and only ten.
  [N('009')],
  [N('001'), FEMININE, A('234'), N('002'), N('003'), N('004'), N('005'), N('006'), N('007'), N('008'), ...QUANTITY],
  [...TEENS],
  [],
  [...DICTATION],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * A trigger names a mistake, the places it is watched for, the drill that fires
 * when it trips, and the check that closes the loop. Each round's `targets`
 * points at these ids, and drillForRound fires the drill of the FIRST target
 * only, so the order inside `targets` matters: round 4 lists err-heard-wrong
 * first because a learner failing the counter round is failing to recognise the
 * number, not failing to produce a flat one.                                  */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-number',
    description: 'Reaches for the wrong number, usually a teen and the unit it echoes: six for seize, cinq for quinze, deux for douze.',
    detectOn: ['s08-teens', 's10-neighbours', 's23-quiz/r1-one-to-twenty'],
    drill: 'drill-neighbours',
    retest: 'retest-neighbours',
  },
  {
    id: 'err-un-une',
    description: 'Uses un where the noun is feminine, or does not notice that one is the only number that asks.',
    detectOn: ['s05-unune', 's06-quantity', 's23-quiz/r2-one-has-a-gender'],
    drill: 'drill-gender',
    retest: 'retest-gender',
  },
  {
    id: 'err-flat-ending',
    description: 'Says every number with the ending it has on its own, so dix minutes keeps an S that French drops.',
    detectOn: ['s01-scene', 's11-shift', 's14-speak', 's23-quiz/r3-the-next-word'],
    drill: 'drill-three-states',
    retest: 'retest-three-states',
  },
  {
    id: 'err-heard-wrong',
    description: 'Does not recognise a number inside a sentence, because in a sentence it does not sound the way it was learned.',
    detectOn: ['s07-earcheck', 's12-pairs', 's23-quiz/r4-at-the-counter'],
    drill: 'drill-listen-back',
    retest: 'retest-listen-back',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-neighbours',
    title: 'Ten apart, one sound apart',
    format: 'sort',
    buckets: ['One to ten', 'Eleven to twenty'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card
    // teaching these. Display strings here validate as broken ids.
    items: LISTEN_IDS,
    coach: 'Listen for the ending. A Z on the end means the bigger one, almost every time.',
  },
  {
    id: 'retest-neighbours',
    title: 'One more time',
    format: 'mcq',
    q: 'You hear a word ending in a Z sound, and it is either six or sixteen. Which?',
    opts: ['six', 'seize', 'you cannot tell'],
    correct: 1,
    why: 'Six ends on an S sound. A Z on the end means seize, and that is the only difference between them.',
  },
  {
    id: 'drill-gender',
    title: 'Which one is one?',
    format: 'sort',
    buckets: ['un', 'une'],
    items: [FEMININE, N('001'), 'fr.a1.cafe.024', 'fr.a1.cafe.012'],
    coach: 'The noun decides, not the number. Masculine takes un, feminine takes une, and nothing above one asks.',
  },
  {
    id: 'retest-gender',
    title: 'One more time',
    format: 'mcq',
    q: 'Table is feminine. You want one table.',
    opts: ['Un table', 'Une table', 'Une tables'],
    correct: 1,
    why: 'Une for a feminine noun, and the N is fully said. Un would be heard immediately.',
  },
  {
    id: 'drill-three-states',
    title: 'Alone, consonant, vowel',
    format: 'flashcard',
    coach: 'Read the left, say the right out loud. Listen to what happens at the end of the number each time.',
    pairs: [
      ['ten', 'dix, said DEES'],
      ['ten minutes', 'dix minutes, said DEE mee-nüt'],
      ['ten years', 'dix ans, said dee-ZAHⁿ'],
      ['eight days', 'huit jours, said WEE zhoor'],
      ['eight hours', 'huit heures, said WEE-teur'],
      ['nine o’clock', 'neuf heures, said NEU-veur'],
    ],
  },
  {
    id: 'retest-three-states',
    title: 'One more time',
    format: 'mcq',
    q: 'Six euros. What is the X doing?',
    opts: ['nothing, it is silent', 'sounding as an S', 'sounding as a Z, joined to euros'],
    correct: 2,
    why: 'Euros begins on a vowel, so the X wakes up as a Z and is said with the next word rather than with the number.',
  },
  {
    id: 'drill-listen-back',
    title: 'Same number, twice',
    format: 'flashcard',
    coach: 'Say the left out loud, then the right. They are the same number and they are not the same sound.',
    pairs: [
      ['dix', 'dix minutes'],
      ['huit', 'huit jours'],
      ['vingt', 'vingt heures'],
      ['neuf', 'neuf heures'],
      ['sept', 'sept heures, and nothing changed'],
    ],
  },
  {
    id: 'retest-listen-back',
    title: 'One more time',
    format: 'mcq',
    q: 'You hear DEE mee-nüt at a station. What was said?',
    opts: ['deux minutes', 'dix minutes', 'douze minutes'],
    correct: 1,
    why: 'Dix loses its S before a consonant, so ten minutes is DEE and not DEES. Deux would end on the vowel of DEU.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * The material a learner wants AFTER the lesson, not during it. Kept out of the
 * flow so a mission stays one idea, and reachable from the sections that
 * preview it via `sheetId`. Layer 'deep' exempts these from the core density
 * caps, which is the point: a sheet is allowed to be dense, and a table in a
 * core section fails the validator by design.                                */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.02.numbers',
    title: 'One to twenty, on one screen',
    layer: 'deep',
    contains: ['Every number', 'How each one sounds alone', 'Which ones move'],
    sections: [
      {
        type: 'cheatSheet',
        id: 'sheet-numbers-all',
        title: 'The whole set',
        layer: 'deep',
        rows: [
          { k: 'un / une', v: 'one. The only number with a gender.', say: 'un, une' },
          { k: 'deux', v: 'two. A Z appears before a vowel.', say: 'deux' },
          { k: 'trois', v: 'three. A Z appears before a vowel.', say: 'trois' },
          { k: 'quatre', v: 'four. The final R is said.', say: 'quatre' },
          { k: 'cinq', v: 'five. Never moves.', say: 'cinq' },
          { k: 'six', v: 'six. S alone, nothing, then Z.', say: 'six' },
          { k: 'sept', v: 'seven. Never moves. The P is silent.', say: 'sept' },
          { k: 'huit', v: 'eight. T alone, drops, comes back.', say: 'huit' },
          { k: 'neuf', v: 'nine. A V before heures.', say: 'neuf' },
          { k: 'dix', v: 'ten. S alone, nothing, then Z.', say: 'dix' },
          { k: 'onze', v: 'eleven.', say: 'onze' },
          { k: 'douze', v: 'twelve. The Z is built in.', say: 'douze' },
          { k: 'treize', v: 'thirteen.', say: 'treize' },
          { k: 'quatorze', v: 'fourteen.', say: 'quatorze' },
          { k: 'quinze', v: 'fifteen.', say: 'quinze' },
          { k: 'seize', v: 'sixteen. Nothing of six in it.', say: 'seize' },
          { k: 'dix-sept', v: 'seventeen. The S is silent.', say: 'dix-sept' },
          { k: 'dix-huit', v: 'eighteen. The S is a Z.', say: 'dix-huit' },
          { k: 'dix-neuf', v: 'nineteen. The S is a Z.', say: 'dix-neuf' },
          { k: 'vingt', v: 'twenty. A T appears before a vowel.', say: 'vingt' },
        ],
      },
    ],
  },
  {
    id: 'sheet.a1.02.shift',
    title: 'What each number does before the next word',
    layer: 'deep',
    contains: ['The four that move', 'The two that never do', 'Where you will hear it'],
    sections: [
      {
        type: 'table',
        id: 'sheet-shift-table',
        title: 'Alone, before a consonant, before a vowel',
        layer: 'deep',
        cols: ['Number', 'Alone', 'Before a consonant', 'Before a vowel'],
        rows: [
          ['deux', 'DEU', 'DEU', 'DEU-z'],
          ['trois', 'TRWAH', 'TRWAH', 'TRWAH-z'],
          ['cinq', 'SAⁿK', 'SAⁿK', 'SAⁿK'],
          ['six', 'SEES', 'SEE', 'SEE-z'],
          ['sept', 'SET', 'SET', 'SET'],
          ['huit', 'WEET', 'WEE', 'WEE-t'],
          ['neuf', 'NEUF', 'NEUF', 'NEU-v before heures'],
          ['dix', 'DEES', 'DEE', 'DEE-z'],
          ['vingt', 'VAⁿ', 'VAⁿ', 'VAⁿ-t'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-shift-note',
        title: 'What to do with this',
        layer: 'deep',
        body: 'Do not memorise the table. Learn the four moving numbers as PHRASES instead, because that is how you will meet them: dix minutes, dix ans, huit heures, vingt heures, neuf heures. The pattern falls out of the phrases on its own, and a phrase is something you can say at a counter, which a table is not. The two fixed numbers, cinq and sept, are worth knowing precisely because they prove the movement is in the language rather than in your ear. If you cannot hear the difference between sept heures and sept jours, that is correct: there is not one.',
      },
    ],
  },
];

export const NOMBRES_LESSON: Lesson = {
  id: 'a1.02.l1',
  unitId: 'a1.02',
  seq: 1,
  title: 'Les nombres 1-20',
  level: 'a1',
  tag: 'A1 · LEÇON 02',
  intro:
    'Twenty words you could learn from a list in an afternoon, and one thing the list cannot tell you: a French number does not have a fixed ending. It has the ending the next word gives it.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // a1.02 shipped with lessonIds: [], so v1 was this lesson's first appearance
  // rather than a replacement. The counter moves forward from there rather than
  // restarting, because the merge script prints both sides and "replacing v2
  // with v1" reads as a rollback in the log.
  //
  // v2: the device pass. Rewrote the reading passage as one block after
  // finding PassagePage discards authored line breaks (see the note there),
  // and shortened two mission titles the missions list was truncating.
  version: 2,

  grammarAssumed: [],
  grammarIntroduced: [
    'Gender agreement on the number one: un / une',
    'A consonant at the end of a number sounding, dropping or changing according to the word that follows it',
    'Quantity with de: deux kilos de pommes',
  ],

  features: ['narrated', 'minimalPairs', 'roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Numbers 1 to 20',
    subFr: 'Les nombres 1-20',
    introFr: 'Vingt mots, et le mot qui suit décide comment chaque nombre se termine.',
    minutes: 30,
    difficulty: 2,
    glyph: '🔢',
    screens: 157,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: NOMBRES_TERMS,

  /* ─── Audio ───────────────────────────────────────────────────────────────
   *
   * Briefs only. CLIP_MANIFEST is empty by design, so every card falls back to
   * device TTS until the studio delivers, and a recordingId that resolves to
   * nothing is the correct shipping state rather than a bug.
   *
   * The note on rec-a1-02-three-states and rec-a1-02-shift-table is the one
   * that matters, and it is written into the brief rather than assumed: this
   * lesson's contrasts are the SAME number in two or three states, and across
   * two takes they are not comparable. A learner told to listen for a
   * difference will hear the difference between the takes.                    */
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    ambienceDefault: 'off',
    recorded: [
      {
        id: 'rec-a1-02-count',
        desc: 'One to twenty, each number said alone with a clear pause after it, ONE take straight through so the pace is even. Do not splice. Also supplies the tapTable rows and the flashcard deck.',
        clipIds: ['un', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt'],
      },
      {
        id: 'rec-a1-02-three-states',
        desc: 'dix, then dix minutes, then dix ans, IN THAT ORDER, one voice, one speed, ONE TAKE. This is the lesson\'s central contrast and across two takes the three are not comparable: the learner hears the difference between the recordings instead of the difference in the number. No pause longer than a beat between the three.',
        clipIds: ['dix', 'dix minutes', 'dix ans'],
      },
      {
        id: 'rec-a1-02-shift-table',
        desc: 'Six numbers in three states each, ONE TAKE PER NUMBER covering all three: six / six jours / six euros, then huit / huit jours / huit heures, dix / dix minutes / dix ans, vingt / vingt minutes / vingt heures, neuf / neuf jours / neuf heures, sept / sept jours / sept heures. Same voice and same speed throughout. The sept row must sound identical in all three, because that is what it is there to prove.',
        clipIds: ['six', 'six jours', 'six euros', 'huit', 'huit jours', 'huit heures', 'dix', 'dix minutes', 'dix ans', 'vingt', 'vingt minutes', 'vingt heures', 'neuf', 'neuf jours', 'neuf heures', 'sept', 'sept jours', 'sept heures'],
      },
      {
        id: 'rec-a1-02-pairs',
        desc: 'The listening lines, each read straight through as a whole sentence at natural pace and again at 0.65 from the same take. Never assembled from separately recorded words: the joins are exactly where the teaching lives.',
        clipIds: ['Le concert commence dans dix minutes.', 'Nous avons visité quinze pays en dix ans.', 'Le magasin ouvre à neuf heures.', 'Il reste huit jours avant les vacances.', 'À huit heures et demie précises, le cours commence.', 'Nous célébrons nos dix ans de mariage.', 'Le film commence à vingt heures trente.'],
      },
      {
        id: 'rec-a1-02-scene',
        desc: 'The station scene. A neutral adult female voice for the clerk, unhurried and slightly flat, the way a clerk who has said this four hundred times sounds. The line « Dix. Dix minutes. » is the pivot and must be one take: the whole scene turns on the two being audibly different.',
        clipIds: ['Le train part dans dix minutes.', 'Dix. Dix minutes.', 'Quai six. Vous avez dix minutes.'],
      },
      {
        id: 'rec-a1-02-dictee',
        desc: 'The four dictation sentences at natural pace, and again at 0.65 from the same take so the slow version is a slowing rather than a re-reading. Full stops audible; no exaggerated word separation, which would give the tile boundaries away.',
        clipIds: ['Le concert commence dans dix minutes.', 'Nous avons visité quinze pays en dix ans.', 'Le magasin ouvre à neuf heures.', 'J\'ai deux frères et une sœur.'],
      },
      {
        id: 'rec-a1-02-scenario',
        desc: 'The market stall exchange, trader lines only, warm and quick. « Ça fait huit euros » carries the joined T and is the line the mission is checking, so it must not be over-articulated into two words.',
        clipIds: ['Bonjour ! Vous désirez ?', 'Deux kilos. Et avec ça ?', 'Voilà. Ça fait huit euros.', 'Merci. On ferme à treize heures aujourd’hui.', 'Bonne journée !'],
      },
    ],
  },

  /* ─── Narration ───────────────────────────────────────────────────────────
   *
   * The Phase 7 spoken script, in the fixed warm → focus → input → practice →
   * produce → check → cheat order. ratioEnFr 0.7 is the a1 target: English
   * scaffolding around French content, fading as the level rises.
   *
   * Every interaction names an item id, which validateCorpus resolves the same
   * way it resolves a practice section's, because a narration stage that drills
   * a dangling item is the same silent blank-drill failure.                    */
  narration: {
    camilleVoiceId: 'camille-fr-ca-01',
    ratioEnFr: 0.7,
    stages: [
      {
        stage: 'warm',
        segments: [
          { voice: 'en', text: 'I am Camille. Today is one to twenty, and the thing about them nobody puts on the list.' },
          { voice: 'en', text: 'You can learn twenty words in an afternoon. Catching one of them inside a sentence is a different skill, and it is the one we are building.' },
          { voice: 'fr', text: 'Dix.' },
          { voice: 'en', text: 'That is ten, said on its own. Hold on to it, because it is about to change.' },
        ],
      },
      {
        stage: 'focus',
        segments: [
          { voice: 'fr', text: 'Dix minutes.' },
          { voice: 'en', text: 'Same word. No S at all. Minutes starts with a consonant and the S simply goes.' },
          { voice: 'fr', text: 'Dix ans.' },
          { voice: 'en', text: 'And now it is back, as a Z, said with the next word. The next word decides how a number ends. That is the whole lesson.' },
        ],
      },
      {
        stage: 'input',
        segments: [
          { voice: 'en', text: 'One to ten first. Say each one after me.' },
          { voice: 'fr', text: 'Un, deux, trois, quatre, cinq.' },
          { kind: 'repeat', itemId: 'fr.sons.nombres.001' },
          { kind: 'repeat', itemId: 'fr.a1.nombres.234' },
          { voice: 'fr', text: 'Six, sept, huit, neuf, dix.' },
          { kind: 'repeat', itemId: 'fr.sons.nombres.005' },
          { kind: 'repeat', itemId: 'fr.sons.nombres.009' },
          { voice: 'en', text: 'Eleven to sixteen have no pattern in them. Do not look for one.' },
          { voice: 'fr', text: 'Onze, douze, treize, quatorze, quinze, seize.' },
          { kind: 'repeat', itemId: 'fr.sons.nombres.015' },
          { voice: 'en', text: 'From seventeen the language says its own arithmetic out loud: ten seven, ten eight, ten nine.' },
          { voice: 'fr', text: 'Dix-sept, dix-huit, dix-neuf, vingt.' },
          { kind: 'repeat', itemId: 'fr.sons.nombres.016' },
          { kind: 'repeat', itemId: 'fr.sons.nombres.017' },
        ],
      },
      {
        stage: 'practice',
        segments: [
          { voice: 'en', text: 'Two numbers that are ten apart and one sound apart. Listen for the ending.' },
          { voice: 'fr', text: 'Deux. Douze.' },
          { voice: 'en', text: 'Deux ends on a vowel. Douze ends on a Z, and that Z is built into the word, so it never leaves.' },
          { voice: 'fr', text: 'Six. Seize.' },
          { kind: 'repeat', itemId: 'fr.sons.nombres.015' },
          { voice: 'en', text: 'Now one is the only number that asks about gender. Un café. Une baguette.' },
          { kind: 'repeat', itemId: 'fr.a1.nombres.235' },
        ],
      },
      {
        stage: 'produce',
        segments: [
          { voice: 'en', text: 'Your turn, with nothing in front of you. Order two coffees.' },
          { kind: 'produce', itemId: 'fr.a1.cafe.024', expected: 'Deux cafés, s’il vous plaît.', gradeAs: 'produce' },
          { voice: 'en', text: 'And ask for two kilos of apples.' },
          { kind: 'produce', itemId: 'fr.a1.marche.097', expected: 'Deux kilos de pommes.', gradeAs: 'produce' },
          { voice: 'en', text: 'Now the hard one. Ten minutes, and remember what happens to the S.' },
          { kind: 'produce', itemId: 'fr.sons.nombres.009', expected: 'dix minutes', gradeAs: 'produce' },
        ],
      },
      {
        stage: 'check',
        segments: [
          { voice: 'en', text: 'One question. I will say a time and you tell me the hour.' },
          { voice: 'fr', text: 'Le magasin ouvre à neuf heures.' },
          { kind: 'check', itemId: 'fr.a1.nombres.053', expected: 'nine', gradeAs: 'recognise' },
          { voice: 'en', text: 'Nine. The F of neuf softened to a V and ran straight into heures, which is why it did not sound like the neuf you learned.' },
        ],
      },
      {
        stage: 'cheat',
        segments: [
          { voice: 'en', text: 'Three things to keep. The next word decides how a number ends.' },
          { voice: 'en', text: 'Six, huit, dix and vingt move. Cinq and sept never do, and that is how you know the movement is real.' },
          { voice: 'en', text: 'One is the only number with a gender. Un café, une baguette.' },
          { voice: 'fr', text: 'À bientôt.' },
        ],
      },
    ],
  },
};

/** Exported for the authoring script, the merge script and the tests, so none
 *  of them restates a list or a count that can drift from the content. */
export const NOMBRES_ITEM_IDS = ITEM_IDS;
export const NOMBRES_SPEAK_IDS = SPEAK_IDS;
export const NOMBRES_LISTEN_IDS = LISTEN_IDS;
export const NOMBRES_DICTATION_IDS = DICTATION;
/** The twenty headwords the lesson must teach, in order, so the test can assert
 *  the set is complete against the corpus rather than against a hand-typed
 *  list. `une` sits outside it: it is the feminine of one, not a twenty-first
 *  number. */
export const NOMBRES_ONE_TO_TWENTY = [...UNITS, ...TEENS];
export const NOMBRES_FEMININE_ID = FEMININE;
export const NOMBRES_QUANTITY_IDS = QUANTITY;
