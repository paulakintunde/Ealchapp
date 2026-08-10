// a1.14.l1 "Les adjectifs de base", the mission journey.
//
// The corpus findings that changed this build are in the header of
// adjectifs-corpus.ts and are not repeated here. In one line: the pre-flight
// probe ran, `adjectifs-essentiels` holds 632 published rows against four in the
// seed, all six adjectives already exist as headwords, the four-form paradigm
// for all six is already published and already minimal, and the entire authoring
// job is FOUR WORDS.
//
// ── This lesson is the exception set of the lesson before it ───────────────
//
// The structural fact that shapes the whole plan, and it is not visible from the
// title. a1.13 shipped at seq 16 and taught, correctly and on every screen, that
// a colour follows the noun. `une jupe verte`, `des chaussures marron`. It never
// mentions that any describing word ever goes first, deliberately, because no
// colour ever does and because a1.16 owns the before/after system.
//
// All six of these go in front.
//
//     un grand jardin      une petite maison      un beau chien
//     un vieux vélo        un bon film            un mauvais jour
//
// So the learner arrives from a1.13 holding a pattern that is about to fail on
// the six most frequent describing words in the language, and THE FAILURE IS
// SILENT. « une maison grande » is understood perfectly, nobody corrects it, and
// it marks a beginner in every sentence. That is the reframe, that is the scene,
// and it is why act 1 is about word order before a single word is taught.
//
// PLACEMENT IS STILL a1.16's. This lesson does exactly what a1.13 did with the
// same problem in the opposite direction: it STATES THE FACT ONCE, SHOWS IT IN
// EVERY EXAMPLE, AND TEACHES NONE OF THE SYSTEM. No card names a category of
// adjective, no card says which adjectives generally go where, no card mentions
// a pair that changes meaning by position, and no card handles two describing
// words at once. PLACEMENT_SYSTEM in adjectifs-corpus.ts lists all of it and the
// batch, the merge and the test assert it by name against production surfaces.
//
// ── The canDo has two clauses and only one of them is new ──────────────────
//
//     "describe people and things with common adjectives"   the word list. TWO missions.
//     "agreed for gender"                                   a1.13 already taught this.
//
// Read literally, the second clause asks for what the learner was given last
// lesson. a1.13's own handover note says so in as many words: "AGREEMENT IS NOW
// INTRODUCED. a1.14 must NOT teach it as new. It should open by naming this
// lesson, the way a1.09 opens by naming a1.08."
//
// This lesson does open by naming it, and the rule is never re-derived. What is
// genuinely new is that FOR THESE SIX THE FEMININE IS A FORM YOU LEARN RATHER
// THAN A RULE YOU APPLY, and only for half of them:
//
//     adds -e, exactly as before   grand -> grande   petit -> petite   mauvais -> mauvaise
//     doubles first                bon -> bonne
//     replaces the word            beau -> belle     vieux -> vieille
//
// Three of six are a1.13's rule doing its job and three are not, and nothing
// about the plain form says which. That is act 3.
//
// ── The finding that inverts a1.13, and it is not in the brief ─────────────
//
// EVERY ONE OF THESE SIX FEMININES IS AUDIBLE. grand wakes a d, petit wakes a t,
// mauvais wakes an s as a z, bon collapses its nasal into a plain n, and beau
// and vieux are replaced outright. Measured against the transcriptions in
// adjectifs-corpus.ts: no two entries in FEMININE_AUDIBLE share a respelling.
//
// a1.13 taught the opposite and taught it well: four of its twelve were audible,
// two changed nothing at all, and the whole of its act 4 was "you will not hear
// your mistakes". So the learner arrives believing agreement is mostly invisible
// and it is about to be mostly audible.
//
// That is worth a mission (s11-ear) and it is worth saying out loud, because a
// learner who has been told to stop listening will stop listening. THE PLURAL IS
// UNCHANGED and is still completely silent, so the correct statement is narrow
// and both halves of it are on the same card: on these six you always hear the
// feminine and you never hear the plural.
//
// It was rejected as the reframe. See the note in adjectifs-terms.ts: it is
// about perception rather than about the choice the learner is about to get
// wrong, which is the same objection that killed a1.13's runner-up.
//
// ── What is deliberately left to its neighbours ───────────────────────────
//
//   PLACEMENT SYSTEM is a1.16's, and the temptation is maximal because this
//   whole word list is its exception set. See above.
//
//   FAMILY VOCABULARY is a1.15's, which declares the `famille` theme this unit
//   is giving up. « Mon grand-père est vieux » and « Ma grand-mère est vieille »
//   are imported corpus rows and are the best evidence in the lesson for the
//   vieux/vieille pair, so family WORDS appear. No family SET is taught, no deck
//   collects them, and FAMILY_TEACHING guards the difference.
//
//   POSSESSIVES are a1.17's. `mon`, `ma` and `mes` are in almost every noun
//   phrase the corpus offers and using them is unavoidable. Explaining which one
//   to pick is not done anywhere.
//
//   COLOURS are a1.13's and shipped. One row is reused, fr.a1.couleurs.001, as
//   the other half of the placement contrast. Agreement is never re-taught from
//   zero and no colour headword is added.
//
//   COMPARISON. `plus grand que` is A2 and is the single most natural next
//   sentence after "big". It appears nowhere.
//
//   nouveau / nouvel / nouvelle is the THIRD three-form adjective in A1 and the
//   brief says it does not exist. It is published in this very theme at
//   fr.sons.adjectifs-essentiels.007 and fr.a1.adjectifs-essentiels.209. It is
//   not taught, because six is the unit's word list, and NO CARD CLAIMS that
//   nothing else has a third form, because that claim is false.
//
// ── Layout decisions, each of which is a bug someone else already shipped ──
//
//   `commonErrors` carries `swipe: true, size: 'lg'`. Without `swipe`,
//   MissionSection takes a fallback that returned undefined and drew a BLANK
//   mission (sons.08 m22, a1.01 m5).
//
//   `reading` carries `questionsInModal: true` WITH questions. That is the only
//   path that reaches PassagePage and so the only path that draws the glossary.
//
//   ONE `quiz` section. lessonPager.logic.ts appends exactly one quiz page.
//
//   No `autoplay` anywhere: declared in schema.ts, implemented in no component.
//
//   The reading passage is ONE BLOCK with no line breaks. PassagePage splits on
//   /(?<=[.!?»])\s+/, so an authored newline is silently discarded.
//
//   `tapTable` is NOT in ownsLayout(), so s03-sides, s08-table and s14-frame all
//   render inside a SCROLLING page. THE BRIEF ASKS FOR THE FOUR-FORM GRID AS A
//   tapTable with "the six adjectives across", which would be six columns. That
//   is twice a1.13's four, and a1.13 already had to cut to three rows to afford
//   four columns. So s08-table is SIX ROWS BY TWO COLUMNS, one adjective per row,
//   masculine against feminine, which is the contrast act 3 is actually about.
//   The full four-form grid lives in sheet.a1.14.forms, where a `table` section
//   at layer 'deep' is legal and density is fine.
//
//   `size` is not decoration. ownsLayout() ignores it; density.logic.ts reads
//   `xl` as a 12-word cap on EVERY string in the section. s05-six is the only xl
//   section and every card in it is one French word with a short gloss.
//
//   A `groupDrill` control page carries `items: []` explicitly, and no `size`.
//
//   NO U+203F. The tie renders as a low underscore on a Pixel 6 and is already
//   in shipped sons.10 content. The batch greps for the character. THIS MATTERS
//   HERE: `un grand homme` is /ɡʁɑ̃.t‿ɔm/ with a liaison the tie would normally
//   mark. See the note on `grand` and /t/ below.
//
//   NO IMAGE. `imageRef` resolves through a statically enumerated REG in
//   src/content/lessonImages.ts, `lesson-contract.test.ts` contains no reference
//   to it, and the schema comment promising a publish check is conditional on an
//   asset manifest that does not exist. An unregistered ref draws a blank box in
//   silence. The brief also says not to invent a size or comparison graphic: no
//   component draws one. a1-14-adjectifs.test.ts asserts the count is ZERO and is
//   written to keep working if a later author adds one.
//
// ── The liaison on `grand`, and why it is not taught ───────────────────────
//
// `un grand homme` is /œ̃ ɡʁɑ̃ t‿ɔm/: the silent d liaises as a /t/, not a /d/.
// It is a genuine exception, it is real, and it sits in exactly the same slot as
// bel and vieil, which is what makes it dangerous rather than useful here.
//
// It is NOT taught. The lesson has one thing to say about what happens in front
// of a vowel and that thing is bel and vieil, which change the SPELLING and are
// therefore something a learner has to write. A liaison is something a learner
// hears and never writes, it belongs to sons.10, and putting both on one screen
// would teach that the vowel does two unrelated things at once. Named here so
// sons.10's author knows this lesson deliberately left it, and so nobody adds a
// U+203F tie to a card in this lesson to "complete" it.
//
// ── The dictee follows a measurement rather than a preference ──────────────
//
// MEASURED (scripts/_adjectifs_probe2.ts, scripts/_adjectifs_dictee.ts): word
// mode hands the learner each WHOLE WORD as a tile, so a word-mode dictee cannot
// test an agreement ending. Only LETTERS mode makes them produce it, and the
// letter limit is 16, which almost nothing in this theme survives: only
// « C'est un beau jardin. » and « C'est un bel homme. » A wider search across
// every theme found four more in `description-personnes-objets`, which are the
// short predicate sentences this lesson needs. See DICTEE_IDS.
//
// `vieux`, `bon` and `mauvais` have NO letters-mode dictation row anywhere in
// the corpus, in any form. They are tested by the quiz instead. It is in the
// report.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { ADJECTIFS_TERMS, REFRAME } from './adjectifs-terms.ts';
import {
  AUTHORED_WORD_IDS, BOTH_ORDERS_IDS, COLOUR_CONTRAST_ID, DICTEE_IDS, EAR_PAIRS, FAMILY_LABEL,
  FEMININE_AUDIBLE, FEMININE_ID, FEMININE_OF, FORM_ORDER, FORM_WORD, HEADWORD_ID, HEADWORD_IDS,
  IN_ENGLISH, PARADIGM_IDS, PLACEMENT_IDS, SPEAK_SENTENCE_IDS, THE_SIX, VOWEL_FORM, VOWEL_IDS,
  VOWEL_PAIRS, adjIn, enOf, frOf, gridFor, ipaOf, sub,
} from './adjectifs-corpus.ts';

export { REFRAME };

/* ─── The corpus this lesson sequences ─────────────────────────────────────
 *
 * Grouped by the job the ids do, so a section names a GROUP and the tranche
 * slices read from the same groups rather than restating a word list.
 *
 * Every id below is SHOWN on a screen, or named by a drill or a term. a1.08
 * shipped 43 itemIds named by nothing at all, released to spaced repetition and
 * drawn by no component, and it was invisible until a check asked "did the
 * learner see it" rather than "does this id resolve". The same check runs here,
 * in the batch, the merge and the test.                                      */

/** The six headwords. Not one is authored: all six were already published at
 *  fr.sons.adjectifs-essentiels.001-.008. */
const SIX = HEADWORD_IDS;

/** The six feminine headwords. TWO are authored (vieille, mauvaise) and four
 *  already existed in other themes, so they are reused rather than rewritten. */
const FEMININES = THE_SIX.map((a) => FEMININE_ID[a]);

/** bel and vieil, which are the whole of the authoring job that is not a
 *  feminine, and the only content in this lesson nothing else in A1 covers. */
const VOWEL_WORDS = AUTHORED_WORD_IDS.filter((id) => id.endsWith('.314') || id.endsWith('.315'));

/** The published four-form paradigm: six adjectives, four cells each. */
const PARADIGM = PARADIGM_IDS;

/** bel and vieil in front of a real vowel, each with its consonant partner in
 *  the same frame. */
const VOWEL_EVIDENCE = VOWEL_IDS;

/** The six in front of their noun, including the three rows that carry a
 *  pre-noun word AND a post-noun colour in ONE phrase, plus a1.13's own row as
 *  the other half of the contrast. */
const PLACEMENT = [...PLACEMENT_IDS, COLOUR_CONTRAST_ID];

/** The dictee, chosen by measurement. Two of its six are already in PARADIGM. */
const DICTATION_IDS = DICTEE_IDS;

/** The three sentences in the entire corpus that carry one of these six AND the
 *  voiceflash drill the mic-scored deck runs. Measured, not chosen. */
const SPOKEN_SENTENCES = SPEAK_SENTENCE_IDS;

const ITEM_IDS = [
  ...new Set([...SIX, ...FEMININES, ...VOWEL_WORDS, ...PARADIGM, ...VOWEL_EVIDENCE,
    ...PLACEMENT, ...DICTATION_IDS, ...SPOKEN_SENTENCES]),
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag.
 *
 *  MEASURED against Postgres on 2026-08-06 (scripts/_adjectifs_vf.ts), and the
 *  measurement corrected this file's own first draft, which claimed there were
 *  none at all. NOT ONE published sentence in `adjectifs-essentiels` carries
 *  voiceflash: the .19x/.2xx paradigm band is `sentence,flashcard,review` and
 *  the .0xx band is `dictation`. But the corpus as a whole holds twelve
 *  voiceflash sentences carrying one of these six, and THREE of them are usable
 *  and already in the seed. See SPEAK_SENTENCE_IDS for the other nine and why
 *  each is excluded.
 *
 *  So the spoken mission is fourteen headwords AND three real sentences, one of
 *  which puts a word from this lesson in front of its noun. Without them the
 *  learner would say fourteen isolated words and never produce one of these six
 *  inside anything.
 *
 *  a1.13 hit the same wall in `couleurs` and a1.08 and a1.09 in their own
 *  themes. Four lessons running, which makes it a corpus-wide gap rather than a
 *  theme's bad luck. It is in the report. */
const SPEAK_IDS = [...SIX, ...FEMININES, ...VOWEL_WORDS, ...SPOKEN_SENTENCES];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The brief offers two beats and is right about which is sharper: "The learner
 * says `une maison grande` and is understood perfectly, and the other person
 * switches to English. Nobody corrects anything. That is the real cost of the
 * placement error and it is invisible to the speaker, which is what makes it
 * worth dramatising."
 *
 * An A1 scene opens on somebody being MISREAD AS A PERSON rather than on being
 * corrected, and this is the purest version of it available anywhere on the
 * track: every word is right, the sentence is understood completely, and the
 * only thing that happens is that the other person quietly decides what your
 * French is worth. Nothing is lost except the conversation.
 *
 * Nadia is an estate agent with twenty minutes and three flats. She is not
 * unkind and she is not correcting anybody. She is being efficient, which is
 * worse.
 *
 * The choice beat is « une maison grande » against « une grande maison », which
 * is the same pair the tapTable, the drill and the quiz all turn on.        */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'You have twenty minutes with an estate agent and a list of three places to see. You have the words for all of it.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You want somewhere big with a small garden. Last lesson taught you where a describing word goes, so you are not worried about this bit.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Nadia',
    fr: 'Alors, qu\'est-ce que vous cherchez exactement ?',
    en: 'So, what exactly are you looking for?',
    stage: 'She has a folder open and a pen already moving.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-14-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'A big house. Which one comes out of your mouth?',
    options: [
      {
        fr: 'Je cherche une maison grande.',
        respell: sub('grande'),
        en: 'the one that follows last lesson',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Je cherche une grande maison.',
        respell: sub('grande'),
        en: 'the one that puts the word first',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes, and it is the order English would give you, which is the one thing about this that is easy. Watch what the other line does.',
      breaks: 'That is where a colour goes, and you built the habit last lesson. Watch what it costs.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'You',
    fr: 'Je cherche une maison grande.',
    en: 'I am looking for a big house, with the words in last lesson\'s order.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Nadia',
    fr: 'Ah, a big one. No problem, I have three.',
    en: 'She has answered in English, and she is going to stay there.',
    stage: 'Nothing was misunderstood. She just decided which language this was going to be.',
    audio: { mode: 'tts', lang: 'en-GB', speeds: [1.0, 0.65], recordingId: 'rec-a1-14-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'Nothing went wrong, and that is the problem',
    // 35 words. The shipped scene breaks run 24 to 40 here.
    body: 'Every word was right and she understood you completely. She answered in English anyway, because the order told her more about your French than the words did. Nobody corrected anything, so nothing tells you it happened.',
    wrong: {
      fr: 'une maison grande',
      ipa: ipaOf('grande'),
      respell: sub('grande'),
      en: 'a big house, with the word where a colour would go',
    },
    right: {
      fr: 'une grande maison',
      ipa: ipaOf('grande'),
      respell: sub('grande'),
      en: 'a big house',
    },
    coach: `${REFRAME} Both lines mean the same thing, which is exactly why nobody will ever tell you.`,
    // Audio-first: the ear answers before the eye can, and here the ear has
    // NOTHING to answer with, because the two lines carry the same words in a
    // different order. `autoplay` is NOT set: it is declared in schema.ts and
    // implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-14-order' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'Second try',
    fr: 'Je cherche une grande maison, avec un petit jardin.',
    en: 'I am looking for a big house, with a small garden.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Nadia',
    fr: 'Un petit jardin, d\'accord. J\'ai exactement ça, dans une vieille rue très calme.',
    en: 'A small garden, alright. I have exactly that, on a very quiet old street.',
    stage: 'She stayed in French, and she is now telling you about a street you have not seen.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-14-scene' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'The same words, the same meaning, and one of them moved. That is the whole difference between the two halves of that conversation.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: where these six sit ───────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The House That Was Understood',
    frSub: 'Une maison grande ?',
    render: 'screens',
    layer: 'core',
    terms: ['whereTheySit'],
    say: {
      text: 'One sentence, every word correct, and the conversation switches to English. Watch why.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'An estate agent\'s office, a folder of listings, and twenty minutes',
      city: 'Nantes',
      time: 'Tuesday morning',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} That sentence is the next twenty-five minutes.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the first one is the one nobody will ever correct you on.',
    goals: [
      { t: 'Put these six in front of the thing', s: 'Which is not where the colours went, and is the one difference a listener notices without ever mentioning it.' },
      { t: 'Name six words you will use daily', s: 'Big, small, beautiful, old, good and bad. Between them they describe most of what you will want to describe.' },
      { t: 'Get the feminine right on all six', s: 'Three of them follow the rule you already have. Three of them do something else, and nothing about the word tells you which.' },
      { t: 'Say bel and vieil in front of a vowel', s: 'A third shape that beau and vieux take and almost nothing else does, used constantly and taught late everywhere else.' },
    ],
  },

  {
    // TWO COLUMNS ON ONE SCREEN, which is the layout the brief asks for by name
    // and the layout the test asserts: "This is the single screen that stops the
    // a1.13 pattern from misfiring." Same noun down both sides, the describing
    // word on opposite ends. tapTable is NOT in ownsLayout(), so this renders
    // inside a scrolling page: two columns and four rows, every cell three words
    // or fewer, with the teaching in the detail modal, which is a card and can
    // hold prose.
    type: 'tapTable',
    id: 's03-sides',
    title: 'Which Side Of The Thing',
    frSub: 'Avant ou après',
    layer: 'core',
    terms: ['whereTheySit'],
    sheetId: 'sheet.a1.14.forms',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-14-order' },
    say: `${REFRAME} Tap any cell to hear it. The same thing is being described on both sides.`,
    cols: ['a colour', 'one of these six'],
    rows: [
      {
        cells: ['une maison bleue', 'une grande maison'],
        say: 'une maison bleue, une grande maison',
        detail: {
          title: 'The house, twice',
          body: `${frOf('fr.a1.adjectifs-essentiels.002')} The colour goes behind the house and the size goes in front of it. Nothing about the house changed between the two, and nothing about the two words is different except where they sit.`,
          say: frOf('fr.a1.adjectifs-essentiels.002'),
        },
      },
      {
        cells: ['une jupe verte', 'une petite robe'],
        say: 'une jupe verte, une petite robe',
        detail: {
          title: 'The same sentence opening, both ways',
          body: `${frOf(COLOUR_CONTRAST_ID)} ${frOf('fr.a1.adjectifs-essentiels.008')} Two real sentences that start with the same three words. In the first the describing word is last. In the second there are two of them, one at each end.`,
          say: `${frOf(COLOUR_CONTRAST_ID)} ${frOf('fr.a1.adjectifs-essentiels.008')}`,
        },
      },
      {
        cells: ['un chien blanc', 'un petit chien'],
        say: 'un chien blanc, un petit chien',
        detail: {
          title: 'The dog, twice',
          body: `${frOf('fr.a1.adjectifs-essentiels.007')} That sentence has both in it: the size in front of the dog and the colour behind it. Say it out loud and notice that you never had to think about the order in English.`,
          say: frOf('fr.a1.adjectifs-essentiels.007'),
        },
      },
      {
        cells: ['une robe bleue', 'une belle robe'],
        say: 'une robe bleue, une belle robe',
        detail: {
          title: 'And both at once',
          body: `${frOf('fr.a1.adjectifs-essentiels.027')} One dress, two describing words, and one of them at each end. This is what the pattern looks like when it is finished, and it is a published sentence rather than a made-up one.`,
          say: frOf('fr.a1.adjectifs-essentiels.027'),
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's04-both',
    title: 'One Phrase, Both Orders',
    frSub: 'Les deux à la fois',
    hint: 'Four cards. Each one has both in it.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['whereTheySit'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-14-order' },
    say: 'The clearest proof of this is one sentence with a word at each end. Here are three of them.',
    cards: [
      {
        label: 'What a1.13 gave you',
        head: 'The colour goes last',
        fr: frOf(COLOUR_CONTRAST_ID),
        sub: `${sub('petite')} · ${enOf(COLOUR_CONTRAST_ID)}`,
        body: 'This is the sentence you finished the last lesson able to write. The skirt, then its colour. Hold on to it, because the next card starts exactly the same way and does something different.',
      },
      {
        label: 'The same opening',
        head: 'And now a size, in front',
        fr: frOf('fr.a1.adjectifs-essentiels.008'),
        sub: `${sub('petite')} · ${enOf('fr.a1.adjectifs-essentiels.008')}`,
        body: 'Three identical words, then two describing words in one phrase, one at each end. The size is in front of the dress and the colour is behind it, and both are correct in the same breath.',
      },
      {
        label: 'Again, with a different pair',
        head: 'Beautiful in front, blue behind',
        fr: frOf('fr.a1.adjectifs-essentiels.027'),
        sub: `${sub('belle')} · ${enOf('fr.a1.adjectifs-essentiels.027')}`,
        body: 'One dress, one sentence, and the two words sitting on opposite sides of it. Nobody chose this to make a point: it is a published corpus sentence and this is simply what French does.',
      },
      {
        label: 'The whole idea',
        head: 'Where, not whether',
        fr: `${frOf('fr.a1.adjectifs-essentiels.007')}`,
        sub: `${sub('petit')} · ${enOf('fr.a1.adjectifs-essentiels.007')}`,
        body: `${REFRAME} Both words are describing the same dog and they are not competing for the same slot. There is nothing to decide between them: one goes in front and one goes behind.`,
      },
    ],
  },

  /* ── Act 2: the six words ─────────────────────────────────────────────── */

  {
    // The only xl section in the lesson, and correct here for the reason xl
    // exists: every card is ONE French word with a short gloss.
    // density.logic.ts caps EVERY string in an xl section at 12 words.
    type: 'cardDeck',
    id: 's05-six',
    title: 'Six, One At A Time',
    frSub: 'Un mot par écran',
    hint: 'Swipe. Say each one out loud before you move on.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-14-six' },
    say: 'Six screens, one word each. Say it out loud before you swipe, and put it in front of something.',
    cards: THE_SIX.map((a, i) => ({
      label: `${i + 1} of 6`,
      fr: a,
      sub: `${sub(a)} · ${IN_ENGLISH[a]}`,
      body: 'It goes in front of the thing it describes.',
    })),
  },

  {
    type: 'cardDeck',
    id: 's06-onthings',
    title: 'Each One On Something Real',
    frSub: 'Sur un objet',
    hint: 'Six published sentences, one per word.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['whereTheySit'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-14-six' },
    say: 'The same six, this time attached to something. Every sentence here is one somebody has already written.',
    cards: THE_SIX.map((a) => {
      const id = gridFor(a)[0];
      return {
        label: IN_ENGLISH[a],
        head: a,
        fr: frOf(id),
        sub: `${sub(a)} · ${enOf(id)}`,
        body: `The plain form, which is what you use for one thing of the un kind. ${
          a === 'vieux' || a === 'mauvais'
            ? 'This one already ends in the letter a plural would add, which matters later.'
            : 'The feminine is coming, and for this one it changes the sound.'
        }`,
      };
    }),
  },

  /* ── Act 3: her form ──────────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's07-grid',
    title: 'One Word, Four Shapes',
    frSub: 'Quatre formes',
    hint: 'The same word on four different things.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theFeminine', 'alwaysAudible'],
    sheetId: 'sheet.a1.14.forms',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-14-grid' },
    say: 'One boy, one girl, then more than one of each. Only the ending moves, and last lesson already taught you why.',
    cards: [
      ...gridFor('grand').map((id, i) => ({
        label: ['one of the un kind', 'one of the une kind', 'more than one, un kind', 'more than one, une kind'][i],
        head: FORM_WORD.grand[FORM_ORDER[i]],
        fr: frOf(id),
        sub: `${sub(FORM_WORD.grand[FORM_ORDER[i]])} · ${enOf(id)}`,
        body: [
          'The plain form, and the d at the end is silent.',
          'The thing is the une kind, so an e arrives and the sleeping d wakes up with it. You can hear this one clearly.',
          'The s is written and never said. This is the same sound as the plain form, exactly as it was with the colours.',
          'Both endings are there. It sounds identical to the one before it, because the s adds nothing to any word ever.',
        ][i],
      })),
      {
        label: 'nothing here is new',
        head: 'You already have this rule',
        fr: `${frOf(gridFor('grand')[0])} ${frOf(gridFor('grand')[3])}`,
        sub: 'from one thing of the un kind to several of the une kind',
        body: 'That is the same four-shape grid the colours had, doing the same job for the same reason. The thing being described decides, the describing word follows, and the plural is silent. None of it has changed.',
      },
    ],
  },

  {
    // SIX ROWS BY TWO COLUMNS. The brief asks for "the six adjectives across",
    // which is six columns; a1.13 already had to cut to three rows to afford
    // four. Two columns is what fits, and the masculine/feminine contrast is
    // what act 3 is about. The full four-form grid is in sheet.a1.14.forms,
    // where a `table` at layer 'deep' is legal and density is fine.
    type: 'tapTable',
    id: 's08-table',
    title: 'All Six, Both Shapes',
    frSub: 'Le tableau',
    layer: 'core',
    terms: ['theFeminine', 'alwaysAudible'],
    sheetId: 'sheet.a1.14.forms',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-14-pairs' },
    say: 'Tap any row to hear both halves. Every single one of these six changes sound, which the colours did not.',
    cols: ['the un kind', 'the une kind'],
    rows: THE_SIX.map((a) => ({
      cells: [a, FEMININE_OF[a]],
      say: `${a}, ${FEMININE_OF[a]}`,
      detail: {
        title: `${a} to ${FEMININE_OF[a]}`,
        body: `${sub(a)} becomes ${sub(FEMININE_OF[a])}, so ${FEMININE_AUDIBLE[a]}. ${
          gridFor(a).map((id) => frOf(id)).join(' ')
        }`,
        say: gridFor(a).map((id) => frOf(id)).join(' '),
      },
    })),
  },

  {
    type: 'groupDrill',
    id: 's09-families',
    title: 'Three Groups, Not Six Rules',
    frSub: 'Trois familles',
    layer: 'core',
    terms: ['theFeminine'],
    say: 'The six, split by what the feminine actually does. Two of last lesson\'s four groups are empty here, which is worth noticing.',
    groups: [
      {
        label: FAMILY_LABEL['adds-e'],
        items: adjIn('adds-e').map((a) => ({
          fr: a,
          itemId: HEADWORD_ID[a],
          respell: sub(a),
          en: IN_ENGLISH[a],
        })),
        check: {
          q: 'These three add an e and nothing else. On how many of them can you HEAR it?',
          opts: ['none of them', 'one of them', 'two of them', 'all three'],
          correct: 3,
          why: 'All three. grande says its d, petite says its t, mauvaise says its s as a z. That is the difference from last lesson, where four of the twelve colours changed sound and the rest did not.',
        },
      },
      {
        label: FAMILY_LABEL.doubles,
        items: adjIn('doubles').map((a) => ({
          fr: a,
          itemId: HEADWORD_ID[a],
          respell: sub(a),
          en: IN_ENGLISH[a],
        })),
        check: {
          q: 'bon does not become bone. What is the feminine?',
          opts: ['bonn', 'bonne', 'bone', 'bon, it does not change'],
          correct: 1,
          why: 'bonne, with two n letters. The doubled n has to be there because a single one would leave the vowel nasal, which is the thing that stopped being true. You met this in the nasal lesson: an n followed by a vowel blocks it.',
        },
      },
      {
        label: FAMILY_LABEL['new-word'],
        items: adjIn('new-word').map((a) => ({
          fr: a,
          itemId: HEADWORD_ID[a],
          respell: sub(a),
          en: IN_ENGLISH[a],
        })),
        check: {
          q: 'The feminine of beau is belle. What happened to beau?',
          opts: [
            'It added an e',
            'It doubled its last letter',
            'It was replaced by a different word',
            'It stayed the same',
          ],
          correct: 2,
          why: 'It was replaced. belle shares almost nothing with beau and vieille shares almost nothing with vieux, so these two are not the rule going wrong, they are two shapes to know. There is no way to work them out.',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's10-bonne',
    title: 'The One That Changes Most',
    frSub: 'bon et bonne',
    hint: 'Four cards on the biggest sound change of the six.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theFeminine', 'alwaysAudible'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-14-pairs' },
    say: 'One word, and the vowel itself changes. Slow the audio down on this one.',
    cards: [
      {
        label: 'the plain form',
        head: 'bon',
        fr: frOf(gridFor('bon')[0]),
        sub: `${sub('bon')} · ${enOf(gridFor('bon')[0])}`,
        body: 'One sound, and there is no n in it at all. The n on the page is there to tell you the vowel is nasal, and it is never itself pronounced.',
      },
      {
        label: 'the une kind',
        head: 'bonne',
        fr: frOf(gridFor('bon')[1]),
        sub: `${sub('bonne')} · ${enOf(gridFor('bon')[1])}`,
        body: 'Two n letters and now you say one of them. The vowel stops being nasal and becomes a plain o. This is the largest change any of these six makes and it is impossible to miss.',
      },
      {
        label: 'why it doubles',
        head: 'A single n would not work',
        fr: 'bon · bonne',
        sub: `${sub('bon')} · ${sub('bonne')}`,
        body: 'The nasal lesson taught this exact mechanism: an n with a vowel behind it stops making the vowel nasal and starts being a consonant you say. Doubling the n is how the spelling gets a vowel behind the first one.',
      },
      {
        label: 'what not to write',
        head: 'Never bone',
        fr: frOf(gridFor('bon')[3]),
        sub: `${sub('bonnes')} · ${enOf(gridFor('bon')[3])}`,
        body: 'bone with one n would be a different sound and is not a word. The doubling is not decoration and it is the only one of the six that does this, so it is worth writing out by hand once.',
      },
    ],
  },

  {
    type: 'listening',
    id: 's11-ear',
    title: 'You Can Hear All Six',
    frSub: "À l'oreille",
    layer: 'core',
    terms: ['alwaysAudible'],
    sheetId: 'sheet.a1.14.sound',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-14-pairs' },
    // Every line is a masculine/feminine pair. NOT ONE PLURAL appears here or in
    // any ear question in the lesson: the plural -s is never pronounced, so an
    // ear question on one would ask the learner to hear something that is not in
    // the signal. a1.13 made the same call for the same reason and its third
    // question said so out loud; this lesson's third question does the same.
    say: 'Six pairs, and something changes in every single one. That is not what happened last lesson.',
    lines: EAR_PAIRS.map((p) => ({
      fr: `${p.m} · ${p.f}`,
      en: `you hear a difference: ${p.what}`,
    })),
    questions: [
      {
        q: 'How many of those six pairs sounded identical?',
        opts: ['four of them', 'two of them', 'none of them', 'all six'],
        correct: 2,
        why: 'None. Every one of these six changes sound for the une kind, which is the opposite of the colours: bleu and bleue were the same word twice and four others already ended in an e. Here your ear is telling you the truth.',
      },
      {
        q: 'On grand, petit and mauvais, what is making the sound?',
        opts: [
          'The e itself is being pronounced',
          'A letter that was silent is now being said',
          'The speaker is stressing the ending',
          'The first vowel changes',
        ],
        correct: 1,
        why: 'The consonant. The e is not itself a sound: it stops the letter in front of it being last in the word, so that letter gets said again. grand hides its d and grande says it, which is the silent letters lesson doing its job.',
      },
      {
        q: 'None of those six pairs was a plural. Why not?',
        opts: [
          'Plurals were covered in an earlier lesson',
          'Plural forms of these words are rare',
          'The plural s is never pronounced, so there would be nothing to hear',
          'The recording only had singular forms',
        ],
        correct: 2,
        why: 'There is nothing to hear. The plural s is silent on all six, exactly as it was on every colour, so grand and grands are one sound. Your ear separates the two kinds here and can do nothing about the number.',
      },
    ],
  },

  {
    // A groupDrill CONTROL PAGE carries items: [] explicitly and no size. An xl
    // groupDrill must never stack words and a check in one group, and this
    // section is checks only.
    type: 'groupDrill',
    id: 's12-check',
    title: 'Now Without The Table',
    frSub: 'Sans le tableau',
    layer: 'core',
    terms: ['theFeminine', 'noPluralChange'],
    say: 'Same decisions, nothing to look at. This is the one that tells you whether it landed.',
    groups: [
      {
        label: 'One thing of the une kind',
        items: [],
        check: {
          q: 'Ma grand-mère, and the word is vieux. What do you write?',
          opts: ['vieuxe', 'vieux', 'vieille', 'vieuse'],
          correct: 2,
          why: 'vieille. It is one of the two that get replaced rather than added to, so there is nothing to work out and nothing that would have told you. vieuxe is not a word and never was.',
        },
      },
      {
        label: 'More than one thing',
        items: [],
        check: {
          q: 'Several old friends, all of them the un kind. What do you write?',
          opts: ['de vieuxs amis', 'de vieux amis', 'de vieuxes amis', 'de vieilles amis'],
          correct: 1,
          why: 'de vieux amis, unchanged. vieux already ends in an x and French will not stack a plural on top of it, so the singular and the plural are the same word on the page as well as in the air.',
        },
      },
      {
        label: 'The other one that does not move',
        items: [],
        check: {
          q: 'Les temps, and the word is mauvais. What do you write?',
          opts: ['mauvaiss', 'mauvaise', 'mauvais', 'mauvaix'],
          correct: 2,
          why: 'mauvais, exactly as it was. The s is already there, so there is nothing to add. This is the same situation as vieux and they are the only two of the six it happens to.',
        },
      },
      {
        label: 'Put it together',
        items: [],
        check: {
          q: 'Les filles, and the word is grand. What do you write?',
          opts: ['grand', 'grande', 'grands', 'grandes'],
          correct: 3,
          why: 'grandes. The une kind, so an e, and more than one, so an s, in that order. You can hear the e and not the s, so half of that decision came from your ear and half from the girls.',
        },
      },
    ],
  },

  /* ── Act 4: before a vowel ────────────────────────────────────────────── */

  {
    // cardDeck IS in ownsLayout() and sizes itself, which is why the brief asks
    // for this content to get its own screen rather than a table row: three
    // forms is the thing nothing else in this lesson has, and burying it loses
    // it. It is also the only content here that no other A1 lesson covers.
    type: 'cardDeck',
    id: 's13-vowel',
    title: 'A Third Shape, Before A Vowel',
    frSub: 'bel et vieil',
    hint: 'Five cards. These two are used constantly.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['beforeAVowel'],
    sheetId: 'sheet.a1.14.forms',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-14-vowel' },
    say: 'Two of the six have a shape you have not met, and it only exists in front of a vowel sound.',
    cards: [
      {
        label: 'the problem',
        head: 'Two vowels, touching',
        fr: 'beau · homme',
        sub: `${sub('beau')} · a vowel sound at the start of the next word`,
        body: 'beau ends in a vowel sound and homme starts with one, and French will not run two of them together like that. You met the same pressure in the elision lesson, where le became l\' for exactly this reason.',
      },
      {
        label: 'the answer',
        head: 'bel',
        fr: frOf('fr.a1.adjectifs-essentiels.026'),
        sub: `${sub('bel')} · ${enOf('fr.a1.adjectifs-essentiels.026')}`,
        body: 'beau becomes bel, and the l gives the vowel something to land on. It sounds exactly like the feminine belle, and it is not the feminine: this is a man, and the word in front of him is un.',
      },
      {
        label: 'the same thing again',
        head: 'vieil',
        fr: frOf('fr.a1.adjectifs-essentiels.044'),
        sub: `${sub('vieil')} · ${enOf('fr.a1.adjectifs-essentiels.044')}`,
        body: 'vieux becomes vieil for the same reason, and it sounds exactly like vieille. un vieil ami is one of the most common phrases in the language and almost every course leaves it until much later.',
      },
      {
        label: 'on a thing rather than a person',
        head: 'It is not about people',
        fr: frOf('fr.a1.adjectifs-essentiels.204'),
        sub: `${sub('bel')} · ${enOf('fr.a1.adjectifs-essentiels.204')}`,
        body: 'arbre starts with a vowel, so the same thing happens. Nothing here is about whether the thing is a person: it is only ever about the first sound of the word that comes next.',
      },
      {
        label: 'and the other one',
        head: 'un vieil immeuble',
        fr: frOf('fr.a1.adjectifs-essentiels.214'),
        sub: `${sub('vieil')} · ${enOf('fr.a1.adjectifs-essentiels.214')}`,
        body: `${REFRAME} And when one of them lands in front of a vowel, it changes shape again. These two forms are worth more than anything else in this lesson because you will need them today.`,
      },
    ],
  },

  {
    // The minimal pair, in a frame the corpus already holds twice. Same opening,
    // same article, one word apart, and the only thing that decided it is the
    // first sound of the noun. Both halves of both pairs are published rows.
    type: 'tapTable',
    id: 's14-frame',
    title: 'The Same Sentence, One Sound Apart',
    frSub: 'La même phrase',
    layer: 'core',
    terms: ['beforeAVowel'],
    sheetId: 'sheet.a1.14.sound',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-14-vowel' },
    say: 'Two rows, four real sentences, and the same opening on all four. Only the next word changed.',
    cols: ['next word starts with a consonant', 'next word starts with a vowel'],
    rows: VOWEL_PAIRS.map((p) => ({
      cells: [frOf(p.consonant), frOf(p.vowel)],
      say: `${frOf(p.consonant)} ${frOf(p.vowel)}`,
      detail: {
        title: `${p.word === 'bel' ? 'beau' : 'vieux'} and ${p.word}`,
        body: `${frOf(p.consonant)} ${frOf(p.vowel)} Identical up to the describing word, and then one of them has to change because of a letter in the word after it. ${enOf(p.consonant)} ${enOf(p.vowel)}`,
        say: `${frOf(p.consonant)} ${frOf(p.vowel)}`,
      },
    })),
  },

  {
    type: 'commonErrors',
    id: 's15-traps',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set; without it the section
    // falls through to a path that drew a BLANK screen on sons.08 m22 and
    // a1.01 m5.
    swipe: true,
    size: 'lg',
    title: 'Five Traps',
    frSub: 'Cinq pièges',
    layer: 'core',
    terms: ['whereTheySit', 'noPluralChange', 'beforeAVowel'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-14-traps' },
    say: `${REFRAME} Five things an English speaker writes in their first month, one per screen.`,
    errors: [
      {
        wrong: 'Writing « une maison grande ».',
        right: 'Writing « une grande maison ».',
        why: 'The highest-value one here, and the only one nobody will ever mention. It is understood perfectly, so it survives for years and marks every sentence you say. These six go in front, and the colours you learned last time do not.',
      },
      {
        wrong: 'Writing « des vieuxs vélos ».',
        right: 'Writing « des vieux vélos ».',
        why: 'vieux already ends in an x, so there is nothing to add and vieuxs has never been a word. mauvais does the same thing with its s. These two are the only place in this lesson where the careful move is to leave it alone.',
      },
      {
        wrong: 'Writing « un beau homme ».',
        right: 'Writing « un bel homme ».',
        why: 'homme starts with a vowel sound, and beau ends in one, so the two would collide. bel exists to stop that. It sounds identical to belle and it is not the feminine: the word in front is still un.',
      },
      {
        wrong: 'Writing « la soupe est bone ».',
        right: 'Writing « la soupe est bonne ».',
        why: 'bonne doubles its n, and the doubling is doing real work: a single n would leave the vowel nasal, which is what bon is. Two n letters is what makes the o plain and the n audible.',
      },
      {
        wrong: 'Writing « ma grand-mère est vieuxe ».',
        right: 'Writing « ma grand-mère est vieille ».',
        why: 'vieux is one of the two that get replaced rather than added to. Applying last lesson\'s rule to it produces something that is not a word, and there is nothing about vieux that would have warned you. It has to be learned.',
      },
    ],
  },

  /* ── Act 5: say it, write it, use it ──────────────────────────────────── */

  {
    type: 'reading',
    id: 's16-reading',
    title: 'The Board At The Bakery',
    frSub: 'Les petites annonces',
    layer: 'core',
    terms: ['whereTheySit', 'noPluralChange'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage, which draws the
    // underlines) only when this flag is set WITH questions.
    questionsInModal: true,
    say: 'Four notices, and one of them has the describing word where English would have left it.',
    // Paul's A1 rule: anything not inside « » is in English. ONE BLOCK, NO LINE
    // BREAKS. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline is
    // consumed as whitespace and silently discarded.
    text:
      'The board inside the bakery door is where this part of town advertises itself, and most of it is people trying to let a room. '
      + '« Grande chambre dans une vieille maison. » '
      + 'Whoever wrote that got both words into the right place, and the room has almost certainly gone already. '
      + 'Under it somebody is selling a bicycle and the whole notice is five words long. '
      + '« Un vieux vélo, bon état. » '
      + 'Nothing on the end of either word, and nothing needed: one bicycle, and both words are the un kind. '
      + 'A third card is looking for a flatmate, and the writer has left the describing word exactly where English would put it. '
      + '« Je cherche une personne calme dans un appartement grand. » '
      + 'Everybody who reads that will understand it, nobody will correct it, and every French reader will notice. '
      + 'The last one is the shortest thing on the board and it is selling the flat above the bakery. '
      + '« Belle vue, petit loyer. »',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words (MAX_GLOSS_WORDS).
    // Longest match wins, WHICH MEANS AN ENTRY CAN BE SHADOWED OUT OF EXISTENCE:
    // a1.08 shipped two entries that could never underline anything because
    // every occurrence sat inside a longer key. Checked here by running the real
    // segmentSentence in the test and comparing matched KEYS rather than text.
    //
    // No entry is a substring of another.
    glossary: [
      { word: 'grande chambre', en: 'big room', note: 'In front of the room, which is where these six go. The d is pronounced here because of the e.' },
      { word: 'une vieille maison', en: 'an old house', note: 'The une kind, so vieux is replaced by vieille rather than gaining an ending.' },
      { word: 'un vieux vélo', en: 'an old bicycle', note: 'The un kind and one of it, so the plain form. A second bicycle would change nothing at all.' },
      { word: 'un appartement grand', en: 'a big flat, with the words the wrong way round', note: 'This should be un grand appartement. It is understood, and it is the thing this lesson exists to stop.' },
      { word: 'belle vue', en: 'lovely view', note: 'The une kind, so beau becomes belle. In front of the view, as always.' },
    ],
    questions: [
      { q: 'Three of the four notices put the describing word in the same place. Which one does not, and what should it say?', a: 'The flatmate notice says « un appartement grand ». It should say « un grand appartement ». All six of the words in this lesson go in front of the thing, and this one has been left where English would put it.' },
      { q: 'The bicycle notice says « un vieux vélo ». What would it say for two bicycles?', a: 'Exactly the same thing: « de vieux vélos ». vieux already ends in an x, so the plural adds nothing to it. Only the word for bicycle changes, and even that change is silent.' },
      { q: 'Would a French reader notice the mistake in the flatmate notice if somebody read the board out loud?', a: 'Yes, and this is the one error in the lesson you can hear, because word order is the one thing that is never silent. Every other mistake here is about an ending, and endings are half inaudible. An order is always audible.' },
    ],
  },

  {
    type: 'vocabThemes',
    id: 's17-words',
    title: 'The Six, Banked',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['theFeminine', 'beforeAVowel'],
    sheetId: 'sheet.a1.14.forms',
    say: 'Three decks. The six plain forms, the six feminines, and the two that change again in front of a vowel.',
    themes: [
      {
        title: 'the six',
        cards: THE_SIX.map((a) => ({ fr: a, sub: sub(a), en: IN_ENGLISH[a] })),
      },
      {
        title: 'the feminines',
        cards: EAR_PAIRS.map((p) => ({
          fr: p.f,
          sub: sub(p.f),
          en: `${p.m} becomes ${p.f}, and ${p.what}`,
        })),
      },
      {
        title: 'in front of a vowel',
        cards: (['beau', 'vieux'] as const).map((a) => ({
          fr: VOWEL_FORM[a]!,
          sub: sub(VOWEL_FORM[a]!),
          en: `${a} becomes ${VOWEL_FORM[a]} in front of a vowel sound`,
        })),
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's18-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Say the French out loud, and put it on the correct side of the thing before you flip.',
    cards: [
      ...THE_SIX.map((a) => ({ front: IN_ENGLISH[a], back: a, say: a })),
      ...THE_SIX.map((a) => ({
        front: `${IN_ENGLISH[a]}, describing one thing of the une kind`,
        back: FEMININE_OF[a],
        say: FEMININE_OF[a],
      })),
      { front: 'beautiful, in front of homme', back: 'bel', say: 'un bel homme' },
      { front: 'old, in front of ami', back: 'vieil', say: 'un vieil ami' },
      { front: 'a big house', back: 'une grande maison', say: 'une grande maison' },
      { front: 'a small dog', back: 'un petit chien', say: 'un petit chien' },
      { front: 'a green skirt', back: 'une jupe verte', say: 'une jupe verte' },
      { front: 'She is wearing a small red dress.', back: frOf('fr.a1.adjectifs-essentiels.008'), say: frOf('fr.a1.adjectifs-essentiels.008') },
      { front: 'My grandmother is old.', back: frOf('fr.a1.adjectifs-essentiels.211'), say: frOf('fr.a1.adjectifs-essentiels.211') },
      { front: 'They are old friends.', back: frOf('fr.a1.adjectifs-essentiels.212'), say: frOf('fr.a1.adjectifs-essentiels.212') },
    ],
  },

  {
    type: 'dictation',
    id: 's19-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // Every target is short enough to stay in LETTERS mode, which is the only
    // mode that can test an agreement ending: word mode hands the learner each
    // whole word as a pre-spelled tile. Measured through the real dicteeMode in
    // the batch, the merge and the test. See the header.
    say: 'Six lines. On four of them the ending you write is one you can hear, which is new, and on one of them it is not.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's20-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // The only practice mission in the lesson, deliberately. sons.06 ships two
    // doing the same job and it reads as a repeat. `practice.skill` is authored
    // and read by no component: PracticeVFView takes itemIds and nothing else.
    say: 'Fourteen words and three sentences. Every feminine here sounds different from its plain form, so this one your ear can actually check.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's21-scenario',
    title: 'Back At The Agency',
    frSub: 'Retour à l\'agence',
    layer: 'core',
    terms: ['whereTheySit', 'theFeminine'],
    say: 'One exchange, and you hold up your half. Every turn needs one of the six in the right place.',
    setting: 'The same office, three days later. Nadia wants to know which of the three you want, and she has stayed in French this time.',
    // Every turn carries `userEn` and at least two `alts`, which
    // scenario.logic.ts requires of the whole seed. A reveal with no translation
    // shows the learner the one sentence comprehension matters on and asks them
    // to read it; a single accepted answer makes a conversation a cloze test.
    //
    // Apostrophes are straight throughout. The suite fails a conversation that
    // mixes straight and curly apostrophes in one bubble stack.
    turns: [
      {
        ai: 'Alors, vous avez vu les trois. Laquelle vous a plu ?',
        en: 'So, you have seen all three. Which one did you like?',
        user: 'La grande maison, dans la vieille rue.',
        userEn: 'The big house, on the old street.',
        alts: [
          { fr: 'J\'aime la grande maison.', en: 'I like the big house.' },
          { fr: 'La grande maison, s\'il vous plaît.', en: 'The big house, please.' },
        ],
      },
      {
        ai: 'Ah oui, celle-là. Et le jardin, il vous convient ?',
        en: 'Ah yes, that one. And the garden, does it suit you?',
        user: 'C\'est un petit jardin, mais il est beau.',
        userEn: 'It is a small garden, but it is beautiful.',
        alts: [
          { fr: 'Oui, un petit jardin, c\'est parfait.', en: 'Yes, a small garden is perfect.' },
          { fr: 'Le jardin est petit et très beau.', en: 'The garden is small and very beautiful.' },
        ],
      },
      {
        ai: 'Et le bâtiment à côté ? Vous l\'avez regardé ?',
        en: 'And the building next door? Did you look at it?',
        user: 'Oui. C\'est un vieil immeuble, mais il est beau.',
        userEn: 'Yes. It is an old building, but it is beautiful.',
        alts: [
          { fr: 'C\'est un vieil immeuble.', en: 'It is an old building.' },
          { fr: 'Un vieil immeuble, oui, et il me plaît.', en: 'An old building, yes, and I like it.' },
        ],
      },
      {
        ai: 'Bien. Et l\'appartement au centre, qu\'est-ce que vous en pensez ?',
        en: 'Good. And the flat in the centre, what do you think of it?',
        user: 'Ce n\'est pas un mauvais appartement, mais il est trop petit.',
        userEn: 'It is not a bad flat, but it is too small.',
        alts: [
          { fr: 'Il est trop petit pour moi.', en: 'It is too small for me.' },
          { fr: 'C\'est un petit appartement, un peu trop petit.', en: 'It is a small flat, a little too small.' },
        ],
      },
      {
        ai: 'Donc la maison. Vous êtes sûr ?',
        en: 'So the house. Are you sure?',
        user: 'Oui. Une grande maison, un beau jardin, une bonne rue.',
        userEn: 'Yes. A big house, a beautiful garden, a good street.',
        alts: [
          { fr: 'Oui, la grande maison avec le beau jardin.', en: 'Yes, the big house with the beautiful garden.' },
          { fr: 'Certain. C\'est une bonne maison.', en: 'Certain. It is a good house.' },
        ],
      },
    ],
  },

  /* ── Act 6: prove it ──────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's22-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['whereTheySit', 'theFeminine', 'beforeAVowel'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'A big house. Where does the word for big go?', back: 'une grande maison. In front of the house, which is not where a colour goes.', say: 'une grande maison' },
      { front: 'A green skirt. Where does the colour go?', back: `${frOf(COLOUR_CONTRAST_ID)} Behind the skirt, and that has not changed.`, say: frOf(COLOUR_CONTRAST_ID) },
      // Three of these backs carry the ONLY published sentences in the corpus
      // that hold one of these six AND the voiceflash drill, so the cards the
      // learner reads here are the same rows the spoken mission scores.
      { front: 'The feminine of grand.', back: `${frOf('fr.a1.metiers.273')} grande, and the silent d wakes up so you can hear it.`, say: frOf('fr.a1.metiers.273') },
      { front: 'The feminine of petit.', back: 'petite, and the silent t wakes up.', say: 'petit, petite' },
      { front: 'The feminine of mauvais.', back: 'mauvaise, and the silent s comes back as a z.', say: 'mauvais, mauvaise' },
      { front: 'The feminine of bon.', back: `${frOf('fr.a1.metiers.278')} bonne, with two n letters, and the vowel stops being nasal.`, say: frOf('fr.a1.metiers.278') },
      { front: 'The feminine of beau.', back: `${frOf('fr.sons.liaisons.149')} belle. It is not beau with an ending, it is a different word.`, say: frOf('fr.sons.liaisons.149') },
      { front: 'The feminine of vieux.', back: 'vieille. Also a different word, and vieuxe has never existed.', say: 'vieux, vieille' },
      { front: 'un ___ homme, and the word is beau.', back: `${frOf('fr.a1.adjectifs-essentiels.026')} bel, because homme starts with a vowel sound.`, say: frOf('fr.a1.adjectifs-essentiels.026') },
      { front: 'un ___ ami, and the word is vieux.', back: `${frOf('fr.a1.adjectifs-essentiels.044')} vieil, for the same reason.`, say: frOf('fr.a1.adjectifs-essentiels.044') },
      { front: 'Several old friends, all the un kind.', back: `${frOf('fr.a1.adjectifs-essentiels.212')} vieux does not change, because the x is already there.`, say: frOf('fr.a1.adjectifs-essentiels.212') },
      { front: 'Can you hear the plural on any of these six?', back: 'Never. The s is silent on all six, exactly as it was on every colour.', say: 'grand, grands' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's23-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to be
    // wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched a conversation quietly switch to English over one word order, learned six describing words you will use every day, and found out that three of their feminine forms follow the rule you already had and three of them replace the word instead. You have met a third shape that beau and vieux take in front of a vowel and that almost nothing else in the language has, and you have discovered that unlike the colours, every one of these six can be heard changing. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
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
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    // QuizDeckView in LessonRich.tsx ALREADY SHUFFLES the options of every closed
    // question, per question, per attempt, and re-shuffles on retry. The authored
    // `correct` index never moves; only the display order is permuted. So:
    //
    //   NO OPTION REFERS TO A POSITION. "the first one", "both of the above",
    //   "none of these" and "A and C" all break, because the positions the
    //   learner sees are not the positions authored here.
    //
    //   EVERY OPTION IN A QUESTION IS DISTINCT. quiz-duplicate-option fires on a
    //   repeat, and a repeated option makes a shuffled question genuinely
    //   ambiguous rather than merely redundant.
    //
    //   THE AUTHORED `correct` INDEX IS STILL VARIED. quiz-spread caps any single
    //   authored slot at 40% of closed questions regardless of the runtime
    //   shuffle. This exam sits at 4/13 on its heaviest slot.
    //
    // mcq is the ONLY format that can test PLACEMENT, because placement is word
    // order and fold() strips whitespace: « une grande maison » and « une maison
    // grande » do fold to different strings, so typeIn technically works, but the
    // learner is typing a whole phrase and any other slip fails the question for
    // the wrong reason. Order is mcq; endings are typeIn.
    rounds: [
      {
        id: 'r1-where-they-go',
        label: 'Which side of the thing',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round, and
        // the batch, the merge and the test all assert it.
        targets: ['err-adjective-after', 'err-wrong-word'],
        say: 'Word order, which is the one thing in this lesson that is never silent.',
        questions: [
          {
            // A FULL NOUN PHRASE in the stem, which the brief asks for by name:
            // "grande or grand?" tests gender, not placement. This has exactly
            // one answer and tests both at once.
            q: 'Your sister has a big house. Which line do you write?',
            format: 'mcq',
            opts: [
              'Elle a une maison grande.',
              'Elle a une grande maison.',
              'Elle a grande une maison.',
              'Elle a une maison grand.',
            ],
            correct: 1,
            why: 'Elle a une grande maison. The word goes in front of the house, and it takes an e because a house is the une kind. The first option is the one a listener understands perfectly and never corrects.',
            ref: 's03-sides',
          },
          {
            q: 'A green skirt, and a small dog. Which pair puts both words where French wants them?',
            format: 'mcq',
            opts: [
              'une jupe verte, un petit chien',
              'une verte jupe, un chien petit',
              'une jupe verte, un chien petit',
              'une verte jupe, un petit chien',
            ],
            correct: 0,
            why: 'The colour goes behind the skirt and the size goes in front of the dog. Those are two different rules operating at once and both of them are already yours: one from last lesson and one from this one.',
            ref: 's04-both',
          },
          {
            q: 'Write the French for a big house. The word for house is maison, and it is the une kind.',
            format: 'typeIn',
            accept: ['une grande maison'],
            answer: 'une grande maison',
            why: 'une grande maison. In front of the house and carrying an e. Word order is the half of this that a French listener hears immediately, and the ending is the half they only see.',
            ref: 's03-sides',
          },
          {
            q: 'In « Elle porte une petite robe rouge », why is one word in front of the dress and one behind it?',
            format: 'mcq',
            opts: [
              'Because petite is one of the six that come first and rouge is a colour',
              'Because rouge has more letters than petite',
              'Because petite matches the dress and rouge does not',
              'Because the two could be swapped without changing anything',
            ],
            correct: 0,
            why: `${REFRAME} Both words describe the same dress and neither is competing for the other's place. That sentence is a published one, not an invented example, which is what makes it worth remembering.`,
            ref: 's04-both',
          },
        ],
      },
      {
        id: 'r2-the-six-words',
        label: 'The six words',
        targets: ['err-wrong-word', 'err-adjective-after'],
        say: 'The names, quickly.',
        questions: [
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'mauvais' },
            opts: ['bon', 'beau', 'mauvais', 'vieux'],
            correct: 2,
            why: 'mauvais. Its final s is silent, so it ends on the vowel and sounds like moh-VEH. It is the least frequent of the six and the one most likely to slip away, which is why it is here.',
            ref: 's05-six',
          },
          {
            q: 'Which one means the opposite of bon?',
            format: 'mcq',
            opts: ['beau', 'vieux', 'petit', 'mauvais'],
            correct: 3,
            why: 'mauvais. These six come in opposite pairs and it is worth using that: grand against petit, and bon against mauvais. Two of them are already the other one\'s answer, which halves what there is to remember.',
            ref: 's05-six',
          },
          {
            q: 'Write the French for old. Use the form for one thing of the un kind.',
            format: 'typeIn',
            accept: ['vieux'],
            answer: 'vieux',
            why: 'vieux, ending in an x. That x is why the plural adds nothing to it later, and it is one of only two words in this lesson that behaves that way.',
            ref: 's05-six',
          },
          {
            q: 'Le repas était très bon. What is being said about the meal?',
            format: 'mcq',
            opts: ['It was old', 'It was big', 'It was good', 'It was bad'],
            correct: 2,
            why: 'It was good. bon is the plain form because a meal is the un kind, and here it sits after the verb rather than in front of a noun, which is the one position where all six behave like any other describing word.',
            ref: 's06-onthings',
          },
        ],
      },
      {
        id: 'r3-her-form',
        label: 'The feminine',
        targets: ['err-regular-feminine', 'err-wrong-word'],
        say: 'Three of the six follow the rule you already have. Three do not.',
        questions: [
          {
            // typeIn rather than mcq, deliberately. fold() keeps the final -e,
            // so the learner has to PRODUCE the irregular feminine rather than
            // recognise it among distractors, and vieuxe is exactly the form
            // they produce if they have not met this one.
            q: 'Ma grand-mère, and the word is vieux. Write the word.',
            format: 'typeIn',
            accept: ['vieille'],
            answer: 'vieille',
            why: 'vieille. It replaces vieux rather than adding to it, which is the half of this lesson that cannot be worked out from the plain form. vieuxe is what the rule from last lesson would have produced and it is not a word.',
            ref: 's09-families',
          },
          {
            q: 'Cette idée, and the word is mauvais. Write the word.',
            format: 'typeIn',
            accept: ['mauvaise'],
            answer: 'mauvaise',
            why: 'mauvaise. This one is the plain rule doing its job: add an e. The reward is that the sleeping s wakes up as a z, so unlike most of last lesson you can hear that you got it right.',
            ref: 's08-table',
          },
          {
            q: 'Fix this. « La soupe est bone. »',
            format: 'errorSpot',
            accept: ['La soupe est bonne.', 'la soupe est bonne', 'bonne'],
            answer: 'La soupe est bonne.',
            why: 'bonne, with two n letters. The doubling is what stops the vowel being nasal, so bone would be a different sound as well as a misspelling. This is the same mechanism the nasal lesson taught with brun and brune.',
            ref: 's10-bonne',
          },
          {
            q: 'Which of these feminines is NOT the plain form with an e added?',
            format: 'mcq',
            opts: ['grande', 'petite', 'mauvaise', 'belle'],
            correct: 3,
            why: 'belle. grande, petite and mauvaise are all their plain form plus an e, exactly as the colours were. belle is a different word from beau, and so is vieille from vieux, and there is nothing in either plain form that says so.',
            ref: 's09-families',
          },
        ],
      },
      {
        id: 'r4-before-a-vowel',
        label: 'In front of a vowel',
        targets: ['err-vowel-form', 'err-regular-feminine'],
        say: 'The shape almost nothing else in the language has.',
        questions: [
          {
            // No format can test bel against beau by ear IN ISOLATION, because
            // the difference only exists in front of a vowel. So every bel
            // question in this lesson carries the following noun.
            q: 'Un ___ homme. Which one goes in the gap?',
            format: 'mcq',
            opts: ['beau', 'bel', 'belle', 'beaux'],
            correct: 1,
            why: 'bel. homme starts with a vowel sound and beau ends in one, so the two would collide and French will not have it. bel sounds exactly like belle, and belle would be wrong here because the word in front is un.',
            ref: 's13-vowel',
          },
          {
            q: 'Un ___ ami. Write the word for old that fits.',
            format: 'typeIn',
            accept: ['vieil'],
            answer: 'vieil',
            why: 'vieil. Same pressure as bel, same solution, and un vieil ami is one of the most common phrases you will hear. It sounds identical to vieille and it is not the feminine.',
            ref: 's13-vowel',
          },
          {
            q: 'C\'est un beau jardin, but C\'est un bel arbre. What decided which one to use?',
            format: 'mcq',
            opts: [
              'The first sound of the word that comes next',
              'Whether the thing is the un kind or the une kind',
              'How many things there are',
              'Whether the speaker is being polite',
            ],
            correct: 0,
            why: 'The first sound of the next word. jardin starts with a consonant and arbre starts with a vowel, and that is the whole of it. Nothing about gardens or trees comes into it, and nothing about people does either.',
            ref: 's14-frame',
          },
          {
            q: 'Fix this. « C\'est un vieux immeuble. »',
            format: 'errorSpot',
            accept: ['C\'est un vieil immeuble.', 'c\'est un vieil immeuble', 'vieil'],
            answer: 'C\'est un vieil immeuble.',
            why: 'vieil immeuble. immeuble starts with a vowel sound, so vieux changes shape in front of it. This is the same thing the elision lesson showed you when le turned into l\' before a vowel.',
            ref: 's14-frame',
          },
        ],
      },
      {
        id: 'r5-what-does-not-move',
        label: 'What does not move',
        targets: ['err-plural-s', 'err-adjective-after'],
        say: 'Two of the six already end in the letter a plural would add.',
        questions: [
          {
            q: 'Several old friends, all of them the un kind. Which one do you write?',
            format: 'mcq',
            opts: ['de vieuxs amis', 'de vieux amis', 'de vieuxes amis', 'de vieilles amis'],
            correct: 1,
            why: 'de vieux amis. vieux already ends in an x and French does not stack a plural on top of it, so the word is spelled the same for one friend and for six. vieuxs has never existed.',
            ref: 's12-check',
          },
          {
            q: 'Fix this. « Les temps sont mauvaiss. »',
            format: 'errorSpot',
            accept: ['Les temps sont mauvais.', 'les temps sont mauvais', 'mauvais'],
            answer: 'Les temps sont mauvais.',
            why: 'mauvais, unchanged. The s is already on the end of the word, so the plural adds nothing. mauvais and vieux are the only two of the six this happens to, and it happens for the same reason both times.',
            ref: 's12-check',
          },
          {
            q: 'Les garçons, and the word is grand. Write the word.',
            format: 'typeIn',
            accept: ['grands'],
            answer: 'grands',
            why: 'grands. It sounds exactly like grand, because the plural s on a describing word is never pronounced, so the only reason to write it is that there is more than one boy. That much is unchanged from last lesson.',
            ref: 's07-grid',
          },
          {
            q: 'Now the same thing about les filles. Write the word.',
            format: 'typeIn',
            accept: ['grandes'],
            answer: 'grandes',
            why: 'grandes. An e for the girls being the une kind and an s for there being several, in that order. You can hear the e clearly and you cannot hear the s at all, which is the split this whole lesson turns on.',
            ref: 's07-grid',
          },
        ],
      },
      {
        id: 'r6-heard-or-written',
        label: 'Heard, or only written',
        targets: ['err-hears-the-ending', 'err-plural-s'],
        say: 'The last round, and this is the half that is different from the colours.',
        questions: [
          {
            // A REAL ear question, and NOT on a plural: no listenChoose in this
            // lesson has an answer set differing only by a silent -s.
            q: 'Listen to these two: « bon » then « bonne ». What changed?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'bon-bonne-pair' },
            // Every option names the WORD rather than its place in the sequence.
            // « the second one is longer » would have been true of the audio and
            // ambiguous on screen, because QuizDeckView shuffles the options and
            // a learner reading "the second" has two things it could mean.
            opts: [
              'Nothing, they are the same sound',
              'bonne is longer',
              'The n is now pronounced and the vowel is plain',
              'bonne is said higher',
            ],
            correct: 2,
            why: 'The n arrives and the vowel stops being nasal. This is the biggest change any of these six makes, and it is the opposite of bleu and bleue last lesson, which were the same sound twice.',
            ref: 's10-bonne',
          },
          {
            q: 'Listen. Is the speaker describing one thing of the un kind, or one thing of the une kind?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'grande' },
            opts: ['the un kind', 'the une kind', 'it could be either', 'the recording does not say'],
            correct: 1,
            why: 'The une kind. You can hear the d on the end, and the d only arrives when the e is there. On these six the ear genuinely answers this question, which it could not do for bleu or noir.',
            ref: 's11-ear',
          },
          {
            q: 'Say this out loud: my grandmother is old.',
            format: 'speak',
            // `target` is what the mic scores against and is required for this
            // format. Deliberately a sentence where the ending IS audible, so
            // saying it right and writing it right are the same skill for once.
            target: 'Ma grand-mère est vieille.',
            answer: 'Ma grand-mère est vieille.',
            accept: ['Ma grand-mère est vieille.', 'ma grand-mere est vieille'],
            why: 'vieille sounds nothing like vieux, so this is one of the few places in either lesson where getting it right out loud proves you also know what to write. Most agreement is not like this.',
            ref: 's08-table',
          },
          {
            q: 'You hear « Les garçons sont grands » and « Le garçon est grand ». What tells you the first one is about several boys?',
            format: 'mcq',
            opts: [
              'The s on grands',
              'The way the speaker stresses the ending',
              'The e sound at the end',
              'Nothing in the describing word, only the words in front of it',
            ],
            correct: 3,
            why: 'Nothing in the describing word. grand and grands are one sound, so les and garçons and sont are carrying the whole message. The feminine you can hear on these six; the plural you never can, on any word, ever.',
            ref: 's11-ear',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's25-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then what carries into the next unit.',
    body: 'You can put six of the most useful describing words in the language in front of the thing they describe, get the feminine right on all six including the three that do not follow the rule, and use bel and vieil in front of a vowel, which most courses leave for much later. You also know that on these six your ear is worth trusting for the feminine and worth ignoring for the plural. Adjective placement is next, and it takes the fact this lesson stated and turns it into the system behind it.',
    points: [
      `${REFRAME} That is the sentence to keep.`,
      'Three of the six add an e. bon doubles first, and beau and vieux are replaced outright.',
      'In front of a vowel sound, beau becomes bel and vieux becomes vieil.',
      'vieux and mauvais already end in the plural letter, so for several things they do not move.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed by hand. Every figure is a fact about the array
 * directly above, and a display string is validated against nothing, so the
 * first mission added would have left the card confidently wrong with the whole
 * suite still green. It throws rather than degrades.                          */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's23-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.14.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Words learned', v: String(THE_SIX.length) },
    { k: 'Shapes each one takes', v: '4' },
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson. The brief is explicit:
 * "22 to 26 is your range, and the weight belongs on placement and the irregular
 * feminines, not on the six words. If naming the six takes two missions, that is
 * correct."
 *
 * It takes two. Placement gets four and the feminines get six, which is ten of
 * twenty-five on the two things that are actually hard.
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22.                                            */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Which side of the thing',
    sections: ['s01-scene', 's02-goals', 's03-sides', 's04-both'],
    milestone: 'You have watched a conversation switch to English over one word order.',
    estScreens: 22,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The six words',
    sections: ['s05-six', 's06-onthings'],
    milestone: 'Six words, each one attached to a sentence somebody has already written.',
    estScreens: 14,
    restPoints: ['s05-six/halfway'],
  },
  {
    id: 'act3',
    title: 'Her form',
    sections: ['s07-grid', 's08-table', 's09-families', 's10-bonne', 's11-ear', 's12-check'],
    milestone: 'Three of them follow the rule you had, three replace the word, and you can hear all six.',
    estScreens: 30,
    restPoints: ['s09-families/halfway', 's11-ear/halfway'],
  },
  {
    id: 'act4',
    title: 'Before a vowel',
    sections: ['s13-vowel', 's14-frame', 's15-traps'],
    milestone: 'bel and vieil, which almost nothing else in the language has and everybody uses.',
    estScreens: 18,
    restPoints: ['s15-traps/halfway'],
  },
  {
    id: 'act5',
    title: 'Say it, write it, use it',
    sections: ['s16-reading', 's17-words', 's18-flash', 's19-dictation', 's20-speak', 's21-scenario'],
    milestone: 'You have read them on a real board and said all fourteen out loud.',
    estScreens: 60,
    restPoints: ['s18-flash/halfway', 's20-speak/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s22-review', 's23-progress', 's24-quiz', 's25-roundup'],
    milestone: 'Lesson complete. Adjective placement is next, and it starts where this one stopped.',
    estScreens: 44,
    restPoints: ['s22-review/halfway', 's24-quiz/after-r2', 's24-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Act 6 releases nothing new; it applies and tests what acts 1 to 5
 * handed over.
 *
 * `once()` is not decoration. The groups above are built for TEACHING and they
 * legitimately overlap: the beau paradigm's masculine cell is also the consonant
 * partner in the vowel contrast, and two dictee targets are paradigm rows. The
 * SRS keys on (itemId, modality), so releasing one card from two tranches would
 * take two ratings for one sentence. The first tranche to name an id keeps it
 * and the rest drop it, which is also the pedagogically right answer: an item
 * belongs to the act that taught it.                                          */

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
  // Act 1: the placement evidence, which is what act 1 actually shows. Not the
  // six headwords: they are TAUGHT one per screen in act 2, and a card released
  // before its mission is a card the learner is asked to rate before they have
  // met it.
  once(PLACEMENT),
  // Act 2: the six, released the act that puts one on each screen.
  once(SIX),
  // Act 3: the feminines and the whole published paradigm, which s07-grid and
  // s08-table are built on.
  once([...FEMININES, ...PARADIGM]),
  // Act 4: bel and vieil and the five sentences that show them in front of a
  // real vowel. Released HERE rather than in act 2 beside the six they are not
  // part of.
  once([...VOWEL_WORDS, ...VOWEL_EVIDENCE]),
  // Act 5: the four dictee rows from description-personnes-objets, and the three
  // voiceflash sentences the spoken mission names. The other two dictee targets
  // are paradigm rows and were released in act 3.
  once([...DICTATION_IDS, ...SPOKEN_SENTENCES]),
  // Act 6: nothing new. Act 6 tests what acts 1 to 5 handed over, which is why
  // this slice is empty rather than padded.
  [],
];

/** Everything the lesson teaches is released exactly once, and nothing is
 *  released that the lesson does not teach. Checked HERE rather than only in the
 *  test, because a tranche that silently drops a card is a card that never
 *  reaches spaced repetition and nothing on a device would say so. */
{
  const taught = new Set(ITEM_IDS);
  const never = [...taught].filter((id) => !released.has(id));
  if (never.length) {
    throw new Error(`a1.14.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.14.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  }
}

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * Six triggers, six drills, six retests, six quiz rounds, and that is not a
 * coincidence. `drillForRound` walks a round's `targets` and fires the drill of
 * the FIRST one that has any, then stops. So a drill named only in second place
 * never runs. Each drill below is the first target of exactly one round, which
 * is what makes all six reachable; the batch, the merge and the test all assert
 * it rather than trusting the ordering to survive an edit.
 *
 * a1.05 shipped two unreachable drills for exactly this reason and a first draft
 * of a1.07 shipped a third. This lesson does not reopen it.
 *
 * `err-adjective-after` and `err-plural-s` are the two errors that come from
 * applying a rule correctly in the one place it does not reach, which is the
 * same shape as a1.13's err-agrees-invariable and arrives for the same reason: a
 * learner who has just been taught to add something starts adding it everywhere.
 */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-adjective-after',
    description: 'Puts one of the six behind the noun, the way a colour goes. The default error on this lesson, because a1.13 taught the opposite order on every screen and nobody ever corrects this one out loud.',
    detectOn: ['s01-scene', 's03-sides', 's04-both', 's16-reading', 's24-quiz/r1-where-they-go'],
    drill: 'drill-order',
    retest: 'retest-order',
  },
  {
    id: 'err-wrong-word',
    description: 'Reaches for the wrong one of the six, most often between bon and beau, which start the same way and mean nothing like each other.',
    detectOn: ['s05-six', 's06-onthings', 's24-quiz/r2-the-six-words'],
    drill: 'drill-six',
    retest: 'retest-six',
  },
  {
    id: 'err-regular-feminine',
    description: 'Applies a1.13\'s rule to the half of this set it does not reach: writes vieuxe for vieille, beaue for belle, or bone for bonne.',
    detectOn: ['s08-table', 's09-families', 's10-bonne', 's12-check', 's24-quiz/r3-her-form'],
    drill: 'drill-feminine',
    retest: 'retest-feminine',
  },
  {
    id: 'err-vowel-form',
    description: 'Writes un beau homme or un vieux ami. Not a mistake a learner can hear themselves make, because both are perfectly pronounceable, and the correct forms are almost never taught this early.',
    detectOn: ['s13-vowel', 's14-frame', 's15-traps', 's24-quiz/r4-before-a-vowel'],
    drill: 'drill-vowel',
    retest: 'retest-vowel',
  },
  {
    id: 'err-plural-s',
    description: 'Writes vieuxs or mauvaiss. The learner has just internalised "add an s" and applies it to the two words that already end in the letter.',
    detectOn: ['s12-check', 's15-traps', 's16-reading', 's24-quiz/r5-what-does-not-move'],
    drill: 'drill-plural',
    retest: 'retest-plural',
  },
  {
    id: 'err-hears-the-ending',
    description: 'Carries a1.13\'s conclusion across unchanged and stops listening, or listens for the plural and concludes their ear is at fault. Costs confidence rather than accuracy, which is why it gets its own drill.',
    detectOn: ['s08-table', 's11-ear', 's24-quiz/r6-heard-or-written'],
    drill: 'drill-ear',
    retest: 'retest-ear',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-order',
    title: 'Which side does it go on?',
    format: 'flashcard',
    // Five of the six pairs put the word in front and the last one puts it
    // behind, which is the whole contrast in one deck. English on the left, so
    // the learner is producing the order rather than recognising it.
    coach: 'Say the whole phrase out loud before you turn the card. If the word is one of these six it goes in front, and if it is a colour it goes behind.',
    pairs: [
      ['a big house', 'une grande maison'],
      ['a small dog', 'un petit chien'],
      ['a beautiful house', 'une belle maison'],
      ['an old castle', 'un vieux château'],
      ['a beautiful garden', 'un beau jardin'],
      ['a green skirt', 'une jupe verte'],
    ] as [string, string][],
  },
  {
    id: 'retest-order',
    title: 'One more time',
    format: 'mcq',
    q: 'A big house. Which one?',
    opts: ['une maison grande', 'une grande maison', 'grande une maison'],
    correct: 1,
    why: 'une grande maison. In front of the house, which is not where the colours went, and nobody will ever tell you if you get it wrong.',
  },
  {
    id: 'drill-six',
    title: 'English in, French out',
    format: 'flashcard',
    coach: 'The English is on the left. Say the French out loud before you turn the card, and put it in front of something.',
    pairs: THE_SIX.map((a) => [IN_ENGLISH[a], a] as [string, string]),
  },
  {
    id: 'retest-six',
    title: 'One more time',
    format: 'mcq',
    q: 'Which one means bad?',
    opts: ['beau', 'bon', 'mauvais'],
    correct: 2,
    why: 'mauvais. bon and beau both start with a b and mean nothing like each other, which is what makes this trio worth saying out loud as a group rather than reading.',
  },
  {
    id: 'drill-feminine',
    title: 'What does the feminine do?',
    format: 'sort',
    // The six headwords themselves, sorted into the three families. Item ids
    // rather than display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Built from FAMILY_OF rather than listed, so the drill and
    // the teaching cannot drift.
    buckets: [FAMILY_LABEL['adds-e'], FAMILY_LABEL.doubles, FAMILY_LABEL['new-word']],
    items: (['adds-e', 'doubles', 'new-word'] as const).flatMap((f) => adjIn(f).map((a) => HEADWORD_ID[a])),
    coach: 'Say the feminine out loud before you place each one. If you added an e it is the first group; if you doubled a letter first it is the second; and if you said a completely different word it is the third.',
  },
  {
    id: 'retest-feminine',
    title: 'One more time',
    format: 'mcq',
    q: 'What is the feminine of vieux?',
    opts: ['vieuxe', 'vieille', 'vieuse'],
    correct: 1,
    why: 'vieille. It replaces the word rather than adding to it, and so does belle. Those two are the ones there is no way to work out.',
  },
  {
    id: 'drill-vowel',
    title: 'Which shape, in front of this word?',
    format: 'sort',
    // Five real sentences with the same opening. Two put a consonant after the
    // describing word and three put a vowel there, and the sorting turns on
    // nothing else.
    buckets: ['beau or vieux', 'bel or vieil'],
    items: [
      'fr.a1.adjectifs-essentiels.025', // C'est un beau jardin.       consonant
      'fr.a1.adjectifs-essentiels.043', // C'est un vieux château.     consonant
      'fr.a1.adjectifs-essentiels.204', // C'est un bel arbre.         vowel
      'fr.a1.adjectifs-essentiels.214', // C'est un vieil immeuble.    vowel
      'fr.a1.adjectifs-essentiels.026', // C'est un bel homme.         vowel
    ],
    coach: 'Ignore the describing word entirely and look at the word after it. If it starts with a vowel sound the describing word had to change, and if it starts with a consonant nothing happened.',
  },
  {
    id: 'retest-vowel',
    title: 'One more time',
    format: 'mcq',
    q: 'un ___ ami. Which one?',
    opts: ['vieux', 'vieil', 'vieille'],
    correct: 1,
    why: 'vieil. ami starts with a vowel sound. It sounds exactly like vieille and it is not the feminine: the word in front is still un.',
  },
  {
    id: 'drill-plural',
    title: 'Does the plural add anything?',
    format: 'sort',
    // The six headwords, sorted by whether the masculine plural changes the
    // spelling at all. Four gain a letter and two already have it.
    buckets: ['the plural adds a letter', 'the plural adds nothing'],
    items: [
      HEADWORD_ID.grand, HEADWORD_ID.petit, HEADWORD_ID.beau, HEADWORD_ID.bon,
      HEADWORD_ID.vieux, HEADWORD_ID.mauvais,
    ],
    coach: 'Look at the last letter of the plain form. If it is already an s or an x, French will not put another one behind it, and the word for several things is the word you are looking at.',
  },
  {
    id: 'retest-plural',
    title: 'One more time',
    format: 'mcq',
    q: 'Several old friends, all the un kind. Which one?',
    opts: ['de vieuxs amis', 'de vieux amis', 'de vieilles amis'],
    correct: 1,
    why: 'de vieux amis. The x is already there and nothing goes behind it. mauvais does the same, and they are the only two of the six.',
  },
  {
    id: 'drill-ear',
    title: 'Heard, or only written',
    format: 'sort',
    // Six real sentences, three where the ending changes the sound and three
    // where it changes nothing. Sentences rather than headwords, because the
    // question is about an ENDING in place rather than about a word alone, and
    // because the silent half has to be a plural and a plural headword would
    // give the answer away by being spelled differently.
    buckets: ['the ending changes the sound', 'the ending is silent'],
    items: [
      'fr.a1.adjectifs-essentiels.193', // Cette fille est très grande.   audible
      'fr.a1.adjectifs-essentiels.216', // La soupe est bonne.            audible
      'fr.a1.adjectifs-essentiels.211', // Ma grand-mère est vieille.     audible
      'fr.a1.adjectifs-essentiels.194', // Les garçons sont grands.       silent
      'fr.a1.adjectifs-essentiels.217', // Les résultats sont bons.       silent
      'fr.a1.adjectifs-essentiels.221', // Les temps sont mauvais.        silent
    ],
    coach: 'Say each one, then say it again with the plain form of the describing word. If the two versions sound different it goes on the left. If you said the same thing twice it goes on the right.',
  },
  {
    id: 'retest-ear',
    title: 'One more time',
    format: 'mcq',
    q: 'How much of the plural can you hear on these six?',
    opts: ['all of it', 'some of it, on some words', 'none of it, ever'],
    correct: 2,
    why: 'None of it. The plural s is silent on every one of these six, exactly as it was on every colour. The feminine is the half you can hear, and that part is new.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Two, and each exists for a layout reason as much as a pedagogical one.
 * `tapTable` is not in ownsLayout(), so the in-flow tables render inside a
 * scrolling page and anything past about nine rows runs off the fold and takes
 * its chrome with it. s08-table carries two columns because six rows of four
 * would not fit; the full four-form grid lives here, where a `table` section at
 * layer 'deep' is legal and density is deliberately fine.
 *
 * This is also where a learner will be a week from now, halfway through
 * a1.15, a1.16 and a1.17, wanting all six forms beside them. The brief asks for
 * exactly this: "A reference sheet with the six adjectives in four forms plus
 * the two vowel forms. It is what a learner returns to during a1.15, a1.16 and
 * a1.17. Wire the sheetId early."                                            */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.14.forms',
    title: 'All six, in every shape',
    layer: 'deep',
    contains: ['The six in all four shapes', 'bel and vieil', 'What the feminine does to each'],
    sections: [
      {
        type: 'table',
        id: 'sheet-forms-table',
        title: 'The four shapes',
        layer: 'deep',
        cols: ['one, un kind', 'one, une kind', 'several, un kind', 'several, une kind'],
        rows: THE_SIX.map((a) => FORM_ORDER.map((f) => FORM_WORD[a][f])),
      },
      {
        type: 'cheatSheet',
        id: 'sheet-forms-vowel',
        title: 'In front of a vowel sound',
        layer: 'deep',
        rows: [
          { k: 'un bel homme', v: 'beau becomes bel. Never un beau homme: two vowel sounds would collide.', say: 'un bel homme' },
          { k: 'un bel arbre', v: 'The same thing on a thing rather than a person. It is only ever about the next sound.', say: 'un bel arbre' },
          { k: 'un vieil ami', v: 'vieux becomes vieil. One of the most common phrases in the language.', say: 'un vieil ami' },
          { k: 'un vieil immeuble', v: 'Same again. bel and vieil sound exactly like belle and vieille and are not the feminine.', say: 'un vieil immeuble' },
          { k: 'une belle maison', v: 'The feminine is unaffected by any of this: belle is belle in front of anything.', say: 'une belle maison' },
        ],
      },
      {
        type: 'cheatSheet',
        id: 'sheet-forms-families',
        title: 'What the feminine does',
        layer: 'deep',
        rows: [
          { k: FAMILY_LABEL['adds-e'], v: `${adjIn('adds-e').join(', ')}. Add an e, and on all three of them you can hear the last letter wake up.`, say: adjIn('adds-e').join(', ') },
          { k: FAMILY_LABEL.doubles, v: `${adjIn('doubles').join(', ')}. bonne doubles the n, which is what makes the vowel plain and the n audible.`, say: 'bon, bonne' },
          { k: FAMILY_LABEL['new-word'], v: `${adjIn('new-word').join(', ')}. belle and vieille replace the word. There is nothing to work out and nothing that would have told you.`, say: 'belle, vieille' },
          { k: 'vieux and mauvais for several things', v: 'Both already end in the letter the plural would add, so the un kind never changes: un vieux vélo, des vieux vélos.', say: 'un vieux vélo, des vieux vélos' },
          { k: 'Where all six go', v: 'In front of the thing they describe, which is the opposite of where a colour goes. That is the one thing a listener hears immediately.', say: 'une grande maison, une jupe verte' },
        ],
      },
    ],
  },
  {
    id: 'sheet.a1.14.sound',
    title: 'What you can hear',
    layer: 'deep',
    contains: ['Every pair, and what changes', 'Why the plural is still silent', 'How this differs from the colours'],
    sections: [
      {
        type: 'table',
        id: 'sheet-sound-table',
        title: 'Can you hear the feminine?',
        layer: 'deep',
        cols: ['plain', 'the une kind', 'sounds like', 'what changed'],
        rows: EAR_PAIRS.map((p) => [p.m, p.f, `${sub(p.m)} → ${sub(p.f)}`, p.what]),
      },
      {
        type: 'teach',
        id: 'sheet-sound-why',
        title: 'Why this lesson sounds different from the last one',
        layer: 'deep',
        body: 'The colour lesson spent an act teaching that most of agreement is invisible, and it was right about colours. Four of the twelve already ended in an e and were the same word for either kind of thing. Two more, bleu and noir, added an e that changed nothing you could hear. Only four of the twelve did anything audible at all, and the practical advice was to stop listening for the ending and work it out from the thing instead. That advice was correct and it does not transfer here. Every one of these six changes sound for the une kind, and they do it in three different ways. grand, petit and mauvais all end in a consonant that is silent while it is last in the word, and the feminine e stops it being last, so the d, the t and the s all come back. That is the silent letters lesson doing exactly what it said it would. bon is a different mechanism and a bigger change: the n on the end of bon is not a consonant at all, it is a mark telling you the vowel is nasal, and doubling it in bonne puts a vowel behind the first n, which makes it a real consonant and makes the vowel plain. You met that in the nasal lesson with brun and brune. beau and vieux do not do anything to their ending because they do not keep it: belle and vieille are different words and sound like it. So on these six the ear is a reliable guide to the feminine, which is worth knowing because a learner who took the last lesson at its word will have stopped listening. The plural is the part that has not changed at all. The s on grands, petits, bons and beaux is never pronounced, in any position, on any word, and grand and grands are the same recording. Nothing about listening more carefully will separate them, and a native speaker cannot do it either. So the rule is now in two halves and both of them are short: listen for the feminine and work out the plural.',
      },
    ],
  },
];

export const ADJECTIFS_LESSON: Lesson = {
  id: 'a1.14.l1',
  unitId: 'a1.14',
  // The lesson's index WITHIN its unit, not its place in the track. Every lesson
  // in the seed is seq 1 because every unit ships exactly one so far, and the
  // `l1` in the id is this number.
  seq: 1,
  title: 'Les adjectifs de base',
  level: 'a1',
  // SEVENTEEN, from unit.seq. missions.ts derives the eyebrow at render time as
  // `${level} · LEÇON ${unit.seq}`, and a1.14 sits at seq 17. The stored value is
  // a fallback and has to agree with what the renderer computes, or the two
  // disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7).
  tag: 'A1 · LEÇON 17',
  intro:
    'Six describing words you will use every day, and the first thing to know about them is that they do not go where the colours went. This is how to put them in front of the thing, get the feminine right on all six, and use the two extra shapes that appear in front of a vowel.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The LESSON's own counter, not `seed.version`. seed.version is the OTA
  // snapshot number, derived by publish-content.ts as previous + 1, and a merge
  // must never hand-bump it.
  version: 1,

  grammarAssumed: [
    'Noun gender, and that un and une follow it, introduced in a1.03',
    'le, la, l\' and les, introduced in a1.04',
    'un, une and des, introduced in a1.11',
    'The full present of être, introduced in a1.06',
    'The full present of avoir, introduced in a1.07',
    'mon, ma and mes, introduced in a1.05',
    'Adjective agreement, the four forms, and the silent plural -s, introduced in a1.13',
    'That a final consonant is usually silent, and that a following e wakes it, introduced in sons.06',
    'The nasal vowels and the fact that a following vowel blocks them, introduced in sons.03',
    'That French avoids two vowel sounds meeting, introduced in sons.07',
  ],
  grammarIntroduced: [
    'The prenominal position of a closed set of six common adjectives, stated as a fact about these six and not as a system',
    'Irregular feminine formation by suppletion: beau to belle, vieux to vieille',
    'Feminine formation with consonant doubling: bon to bonne, and the denasalisation it produces',
    'The third masculine form before a vowel: bel and vieil',
    'Invariance of the masculine plural on adjectives already ending in -s or -x: vieux, mauvais',
    'That the feminine of all six is audible, in contrast with a1.13, while the plural remains silent',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Basic Adjectives',
    subFr: 'Les adjectifs de base',
    introFr: 'Six mots que vous utiliserez tous les jours, et ils ne se placent pas là où allaient les couleurs.',
    minutes: 25,
    difficulty: 2,
    glyph: '📏',
    screens: 188,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: ADJECTIFS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-14-adjectifs.test.ts, the way a1.13's
    // rec-a1-13-pairs pins its own, because a constraint on how something is
    // recorded becomes invisible the moment the clip is delivered.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    // CLIP_MANIFEST is empty by design, so every card falls back to device TTS
    // until the studio delivers, and a recordingId resolving to nothing is the
    // correct shipping state.
    //
    // All five of the brief's lesson-specific notes are written in explicitly.
    recorded: [
      {
        id: 'rec-a1-14-pairs',
        desc:
          'THE SINGLE MOST IMPORTANT NOTE IN THIS LESSON. EVERY MASCULINE / FEMININE PAIR IS ONE TAKE, one '
          + 'voice, one pace, the plain form immediately followed by its feminine with no gap and no reset: '
          + 'grand / grande, petit / petite, mauvais / mauvaise, bon / bonne, beau / belle, vieux / vieille. '
          + 'The ONLY difference the learner may hear is the ending. Recorded apart these become two '
          + 'performances and the learner compares the performances instead of the forms. '
          + 'UNLIKE a1.13, ALL SIX OF THESE PAIRS GENUINELY DIFFER, so there is no silent pair to protect '
          + 'here and the risk runs the other way: do not EXAGGERATE the difference to make it audible. It '
          + 'already is. Read every pair at ordinary conversational pace. '
          + 'bon / bonne is the one to get right. bon is a nasal vowel with NO n sound behind it at all, and '
          + 'bonne is a plain oral o followed by a clearly pronounced n. That is a vowel change and a '
          + 'consonant arriving in one step, it is the largest change in the set, and it must not be '
          + 'softened into a half-nasal. This is the brun / brune shape from sons.03 and should be read the '
          + 'same way. '
          + 'beau / belle and vieux / vieille are not endings and must not be read as though they were: they '
          + 'are two different words and should sound like two different words.',
        clipIds: [
          'grand', 'grande', 'grand-grande-pair',
          'petit', 'petite', 'petit-petite-pair',
          'mauvais', 'mauvaise', 'mauvais-mauvaise-pair',
          'bon', 'bonne', 'bon-bonne-pair',
          'beau', 'belle', 'beau-belle-pair',
          'vieux', 'vieille', 'vieux-vieille-pair',
        ],
      },
      {
        id: 'rec-a1-14-vowel',
        desc:
          'THE THREE-FORM SETS, AND EACH IS ONE TAKE. « beau / bel / belle » read straight through as one '
          + 'continuous take by one voice, then « vieux / vieil / vieille » the same way. The three-form set '
          + 'is this lesson\'s unique content and it only reads as a set if it is heard as one. bel and belle '
          + 'are the same sound and vieil and vieille are the same sound, and the learner has to hear that '
          + 'rather than be told it, so do not differentiate them: read the second and third members of each '
          + 'set identically. '
          + 'THEN THE PHRASES, AND THESE ARE NEVER BARE. « un bel homme », « un bel arbre », « un vieil ami » '
          + 'and « un vieil immeuble » are recorded AS FULL PHRASES, never as isolated words. The form exists '
          + 'ONLY because of the vowel that follows it, so a lone bel clip teaches nothing and a lone vieil '
          + 'clip is actively misleading. '
          + 'Record each vowel phrase immediately after its consonant partner, in the same take, so the '
          + 'contrast is inside one performance: « un beau jardin » then « un bel arbre », « un vieux '
          + 'château » then « un vieil immeuble ». '
          + 'There is NO liaison to perform in any of these. Do not add one.',
        clipIds: [
          'beau-bel-belle-set', 'vieux-vieil-vieille-set',
          'C\'est un bel homme.', 'C\'est un bel arbre.',
          'Mon grand-père a un vieil ami à Lyon.', 'C\'est un vieil immeuble.',
          'C\'est un beau jardin.', 'C\'est un vieux château.',
          'beau-bel-frame-pair', 'vieux-vieil-frame-pair',
        ],
      },
      {
        id: 'rec-a1-14-order',
        desc:
          'THE WORD ORDER PAIR, AND IT IS THE HARDEST THING IN THIS BRIEF TO READ CORRECTLY. '
          + '« une maison grande » and « une grande maison » are recorded as ONE TAKE, one after the other, '
          + 'with an even beat between them and NOTHING ELSE DIFFERENT. Both must be read as ordinary '
          + 'confident French. Do NOT read the first one hesitantly, do not put a question in the voice, do '
          + 'not mark it as wrong in any way. The entire teaching of this lesson is that the wrong one sounds '
          + 'completely fine, and a reader who performs the error destroys it. '
          + 'Same instruction for « un appartement grand » against « un grand appartement » and for the same '
          + 'reason. '
          + 'Also record the two-order phrases as whole units at conversational pace, with no pause between '
          + 'the noun and either describing word: « une petite robe rouge », « un petit chien blanc », « une '
          + 'belle robe bleue ». The pattern being absorbed is that both words belong to the same phrase, and '
          + 'a pause in the middle would break it into two.',
        clipIds: [
          'order-maison-pair', 'order-appartement-pair',
          'Elle porte une petite robe rouge.', 'J\'ai un petit chien blanc.',
          'Elle porte une belle robe bleue.', 'Elle porte une jupe verte.',
          'Elle habite dans une grande maison.',
        ],
      },
      {
        id: 'rec-a1-14-six',
        desc:
          'The six as ONE CONTINUOUS TAKE by one voice at one speed, in the deck order: grand, petit, beau, '
          + 'vieux, bon, mauvais. Six words recorded in six sessions are six performances, and any drift in '
          + 'pace or pitch teaches a difference between the recordings rather than a difference in French. '
          + 'Read them straight through with an even beat, then again slowly in the same take. '
          + 'grand and bon are NASAL and must be read with no n sound behind the vowel at all. petit and '
          + 'mauvais both end in a silent consonant and must end on the vowel, with nothing after it. '
          + 'THE MASCULINE PLURALS ARE NOT RECORDED IN ISOLATION AND MUST NOT BE. vieux and mauvais are '
          + 'identical in the singular and the plural, and a lone clip of a plural implies a difference that '
          + 'is not there. Where a plural is needed it is recorded as the second half of a pair with its own '
          + 'singular, in one take, so the learner hears that nothing changed: grand / grands, petit / '
          + 'petits, bon / bons, vieux / vieux, mauvais / mauvais. If a reader cannot resist marking the '
          + 'plural somehow, record the singular twice and use it for both, because that is a more truthful '
          + 'clip than a performed difference.',
        clipIds: [
          ...THE_SIX,
          'grand-grands-pair', 'petit-petits-pair', 'bon-bons-pair',
          'vieux-vieux-pair', 'mauvais-mauvais-pair',
        ],
      },
      {
        id: 'rec-a1-14-grid',
        desc:
          'The four-form grid, read ACROSS THE ROW in one take: « Ce garçon est très grand, cette fille est '
          + 'très grande, les garçons sont grands, les filles sont grandes. » Reading a row in one take is '
          + 'the entire point: the learner has to hear that the row changes ONCE, at grande, and never again, '
          + 'because the two plurals are the same sound as the two singulars. '
          + 'Do not record these four sentences separately. Do not vary the pace between them. There is no s '
          + 'sound anywhere in the third or fourth sentence and there must be no hint of one: no lengthening, '
          + 'no release, no breath.',
        clipIds: ['grand-row', 'Ce garçon est très grand.', 'Cette fille est très grande.', 'Les garçons sont grands.', 'Les filles sont grandes.'],
      },
      {
        id: 'rec-a1-14-traps',
        desc:
          'The five written traps, wrong version then right version, with a clear beat between them. Read '
          + 'EVERY wrong version plainly and at ordinary pace rather than comically. '
          + 'THREE OF THE FIVE ARE ACOUSTICALLY IDENTICAL TO THEIR CORRECTION: « des vieuxs vélos » and « des '
          + 'vieux vélos » are the same sound, and so is the vieuxe pair once the reader stops trying to mark '
          + 'it. Do not try to make the wrong one sound wrong. Read both members identically and let the '
          + 'screen carry the difference, because a reader who performs a distinction that does not exist '
          + 'teaches the learner to listen for something that will never be there. '
          + 'THE FIRST TRAP IS THE OPPOSITE CASE AND IS THE MOST IMPORTANT CLIP IN THE LESSON. « une maison '
          + 'grande » against « une grande maison » differs audibly, because word order is the one thing that '
          + 'is never silent, and it must still be read WITHOUT any hint that the first is wrong. That '
          + 'combination is the whole lesson: audibly different, and nobody ever mentions it. '
          + 'Only the « un beau homme » / « un bel homme » pair and the « bone » / « bonne » pair genuinely '
          + 'differ in a way the reader should let through, and both should be read straight.',
        clipIds: ['trap-maison-grande', 'trap-vieuxs', 'trap-beau-homme', 'trap-bone', 'trap-vieuxe'],
      },
      {
        id: 'rec-a1-14-scene',
        desc:
          'The opening scene. Nadia is an estate agent in her forties with a folder open and twenty minutes, '
          + 'reading at an ordinary working pace rather than a teaching pace. '
          + 'THE BEAT THAT MATTERS IS THE ONE WHERE SHE SWITCHES TO ENGLISH. « Ah, a big one. No problem, I '
          + 'have three. » must be read as HELPFUL AND SLIGHTLY BRISK, never as corrective, never as pointed, '
          + 'and above all never as unkind. She is not marking anybody. She heard a sentence, understood it '
          + 'completely, made a snap judgement about which language would be faster, and moved on. The whole '
          + 'lesson depends on the learner feeling that nothing bad happened, because nothing bad did. Any '
          + 'edge on that line turns it into a telling-off and loses the point entirely. '
          + 'Her final line, where she stays in French and starts describing a street, is where warmth is '
          + 'allowed to show, because that is the reward for having fixed it.',
        clipIds: [
          'Alors, qu\'est-ce que vous cherchez exactement ?',
          'Ah, a big one. No problem, I have three.',
          'Un petit jardin, d\'accord. J\'ai exactement ça, dans une vieille rue très calme.',
        ],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const ADJECTIFS_ITEM_IDS = ITEM_IDS;
export const ADJECTIFS_SPEAK_IDS = SPEAK_IDS;
export const ADJECTIFS_DICTATION_IDS = DICTATION_IDS;
export const ADJECTIFS_TRANCHES = DECK_TRANCHE;
export const ADJECTIFS_SIX_IDS = SIX;
export const ADJECTIFS_PARADIGM_IDS = PARADIGM;
export const ADJECTIFS_VOWEL_IDS = VOWEL_EVIDENCE;
export const ADJECTIFS_PLACEMENT_IDS = PLACEMENT;
export { BOTH_ORDERS_IDS };

/* ─── The handover to a1.15, a1.16 and a1.17 ───────────────────────────────
 *
 * The brief asks for this explicitly: "Report what your choice means for a1.16
 * (declares no theme at all) and a1.15/a1.17 (both declare famille), all three
 * of which come after you and will inherit whatever you decide."
 *
 * THE THEME DECISION, AND WHAT IT COSTS EACH OF THEM
 *
 *   a1.14 was declared on `famille` and is rebound to `adjectifs-essentiels`.
 *   Measured: `famille` holds 331 published rows, all 331 are in the seed
 *   because famille IS in SEED_CUT.themes, and every one of them is family
 *   vocabulary. An adjective deck filed under it would have served the wrong
 *   cards in the flashcard hub, which is the failure the brief predicted.
 *
 *   a1.15 (Family Vocabulary, seq 19) KEEPS `famille` and is now the only A1
 *   unit on it besides a1.17. That is better for a1.15 than the shared binding
 *   would have been: the theme is already populated, already inside the seed
 *   cut, and now holds nothing that is not family vocabulary. a1.15's author
 *   should expect to IMPORT rather than author, the same way this lesson did,
 *   and should run the probe before believing any absence.
 *
 *   a1.17 (Possessive Adjectives, seq 20) also keeps `famille` and that is
 *   correct: possessives are taught on family members in every course ever
 *   written, and the vocabulary is there.
 *
 *   a1.16 (Adjective Placement, seq 18) still declares NO theme. It has two
 *   options and this build has an opinion: `adjectifs-essentiels` now holds this
 *   lesson's four authored rows plus 632 published ones, and 44 of them are in
 *   the seed after this merge. If a1.16 binds to it, those 44 are already there
 *   and its own import is smaller. If a1.16 stays unbound, that is also
 *   defensible, because placement is a rule rather than vocabulary and an unbound
 *   unit serves no deck. NOT DECIDED HERE: rebinding another unit is that unit's
 *   own build's decision, which is the line a1.13 held about this one.
 *
 * WHAT a1.16 SHOULD KNOW HAS ALREADY LANDED, WORD FOR WORD
 *
 *   This is the important half of the handover. a1.16 owns placement and this
 *   lesson had to say something about it. EXACTLY THIS MUCH WAS STATED, and
 *   nothing else:
 *
 *     1. The reframe, in seven sections: "Colours follow the noun. These six
 *        come first."
 *     2. The `whereTheySit` term: that these six go in front, that colours go
 *        behind, that it is the English order, and that nobody will correct it.
 *     3. That « une maison grande » is understood and marks a beginner.
 *     4. That a pre-noun word and a post-noun colour can sit in one phrase,
 *        shown on published rows rather than asserted.
 *
 *   WHAT WAS NOT STATED, AND IS a1.16's UNTOUCHED:
 *
 *     Why these six go first. That there is a CLASS of adjectives that do. The
 *     BAGS or BANGS grouping, or any grouping. That most adjectives go after.
 *     Any pair that changes meaning by position, `ancien` above all. What
 *     happens with two describing words at once. Any adjective outside the six.
 *     The word "class", "group" or "category" applied to adjectives anywhere.
 *
 *   The lesson says "these six" and never "adjectives like these". That phrasing
 *   is deliberate and it is the whole boundary: a1.16 can open by saying there
 *   is a pattern here and the learner already has six examples of it, which is a
 *   better start than it would have had.
 *
 * WHAT a1.15 AND a1.17 SHOULD KNOW
 *
 *   Family words appear here, inside imported corpus rows, because « Mon
 *   grand-père est vieux » and « Ma grand-mère est vieille » are the best
 *   evidence in the corpus for the vieux/vieille pair. NO FAMILY SET IS TAUGHT,
 *   no deck collects them, and nothing explains a family word. FAMILY_TEACHING
 *   in adjectifs-corpus.ts guards the difference and the test runs it.
 *
 *   `mon`, `ma` and `mes` appear in almost every noun phrase and are never
 *   explained. POSSESSIVE_TEACHING guards that one.
 *
 * Named so the batch, the merge and the test can all assert it. */
export { PLACEMENT_SYSTEM, FAMILY_TEACHING, POSSESSIVE_TEACHING, OTHER_ADJECTIVES, NOT_TAUGHT_IDS } from './adjectifs-corpus.ts';
