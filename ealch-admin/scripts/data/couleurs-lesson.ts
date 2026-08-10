// a1.13.l1 "Les couleurs", the mission journey.
//
// The corpus findings that changed this build are in the header of
// couleurs-corpus.ts and are not repeated here. In one line: the brief's own
// correction section is right, and the three sections it wrote AFTER that
// correction repeat the same seed-versus-Postgres mistake, so the feminine and
// plural `marron` rows exist, the compound colours exist, and the single
// `marrons` row is candied chestnuts rather than a shipped agreement error.
//
// ── This is the first adjective lesson in the course ───────────────────────
//
// The structural fact that shapes the whole plan, and it is not obvious from
// the title. Colours arrive at seq 16 and "Basic Adjectives" is a1.14 at seq 17,
// so the learner meets agreement HERE, for the first time, through colour.
// Nothing before this has taught that a describing word changes shape. a1.03
// taught that NOUNS have gender and that un/une follows it; this is the lesson
// that says the describing word follows it too.
//
// Three consequences, all of them load-bearing:
//
//   AGREEMENT IS TAUGHT AS A NEW IDEA. There is no "as you know, adjectives
//   agree" anywhere in this file. They do not know. s03-idea introduces it from
//   a1.03's gender rather than assuming it, and the `agreement` term opens with
//   the words "This is new."
//
//   WHATEVER THIS ESTABLISHES, a1.14 AND a1.16 INHERIT, the way a1.08 became the
//   template for the calendar family. The four-form grid, the family split and
//   the audible/silent distinction are all built to be reused rather than to fit
//   colour specifically. See the handover note at the foot of this file.
//
//   PLACEMENT IS NOT THIS LESSON'S AND CANNOT BE AVOIDED. a1.16 owns "which side
//   of the noun". But every colour example in the language puts the colour after
//   the noun, so the learner absorbs the pattern from the examples whether it is
//   named or not. The brief's instruction is the minimum that is truthful:
//   "state once that colours follow the noun, show it consistently, and teach
//   neither the exceptions nor the before/after system." That single statement is
//   the `afterTheNoun` term and one line of s03-idea. Colours are never among the
//   adjectives that go first, so the colour rule can be stated as a fact without
//   stealing anything. NO section, drill, quiz question or sheet mentions that
//   any adjective ever precedes its noun, and the batch, the merge and the test
//   all assert that by name.
//
// ── The teaching problem, weighted the way the canDo weights it ────────────
//
//     "name the colours"                   a word list. THREE missions. Do not pad it.
//     "agree them with the noun"           the lesson. ELEVEN missions.
//     "and leave marron and orange alone"  what learners remember wrongly forever. FOUR.
//
// Most courses teach the invariable colours as two exceptions to memorise. That
// is a worse lesson than the one available, because there is a REASON and the
// corpus is holding it: marron is a chestnut, orange is a fruit, and a noun
// borrowed as a colour keeps its own shape. The corpus proves the fruit half on
// its own and this lesson puts both halves on ONE screen (s14-orange), which the
// brief correctly calls the best teaching object here.
//
// ── The half of agreement nobody can hear, which is act 4 ─────────────────
//
// The plural -s is NEVER pronounced. vert and verts are one sound; verte and
// vertes are one sound. Half the agreement system is a writing rule with no
// audible signal at all. The feminine -e is heard only when it wakes a sleeping
// consonant, and on bleu and noir it does nothing whatsoever.
//
// sons.06 and sons.03 already taught that mechanism (`blanche` is authored in
// muettes as ["e-switch","gender-audible","nasal"], `brune` in nasales as
// ["oral","anti-rule"]). This lesson NAMES IT AS THE SAME MECHANISM rather than
// teaching it cold, which is what the brief asks for.
//
// The practical consequence is a constraint on the exam and it is honoured:
// AN EAR QUESTION CANNOT TEST THE PLURAL AT ALL. There is no listenChoose
// anywhere in this lesson whose options differ only by a silent -s, and s13's
// last card tells the learner in as many words that the information is not in
// the sound, so a learner who cannot hear it concludes the right thing about the
// language rather than the wrong thing about their ears.
//
// ── What is deliberately left to its neighbours ───────────────────────────
//
//   OTHER ADJECTIVES are a1.14's. `grand`, `petit`, `beau` and the rest appear
//   nowhere. The one non-colour adjective on any screen is `mûre`, inside the
//   imported corpus sentence "Cette orange est bien mûre.", where it is the
//   evidence rather than the teaching: it shows an ordinary adjective agreeing
//   with the fruit while `orange` beside it does not.
//
//   PLACEMENT is a1.16's. See above.
//
//   C'EST AGAINST IL EST is a1.06's determiner test. `C'est rouge` is not used
//   and the question is not reopened.
//
//   BODY DESCRIPTION is a1.24, which declares a1.13 as its prerequisite and is
//   therefore downstream. `les yeux bleus` and `les yeux verts` appear as
//   example sentences, which the brief explicitly permits, and no mission is
//   built on describing a person.
//
//   TURQUOISE AND POURPRE exist at fr.sons.couleurs.013 and .035, are correct,
//   and are not taught. Neither is A1 vocabulary and an itemId this lesson
//   declares must be on a screen rather than merely resolvable. Named in prose
//   on the reference sheet and imported by nothing.
//
// ── There is no colour field. This shaped every visual decision. ──────────
//
// A colour lesson wants swatches and NOTHING IN THIS APP CAN DRAW ONE. There is
// no `color`, `swatch` or `hex` field anywhere in schema.ts; the only visual
// mechanism is `imageRef`, resolved through a statically enumerated REG in
// src/content/lessonImages.ts.
//
// THIS LESSON AUTHORS NO IMAGE AT ALL, and that is a decision rather than an
// omission. `lessonImage(ref)` returns undefined for anything unlisted and
// RichImage then draws a blank box, nothing validates `imageRef`
// (lesson-contract.test.ts contains no reference to it), and the schema comment
// promising a check is conditional on a snapshot asset manifest that does not
// exist: "Once the snapshot carries an asset manifest, publish fails a dangling
// imageRef the same way it fails a dangling itemId." That is a future promise
// about publish, not a guard that runs today, so an unregistered ref would ship
// silently blank. Registering one would mean committing twelve colour swatch
// assets this build has no way to produce. a1-13-couleurs.test.ts asserts the
// count of authored imageRefs is ZERO, which is the assertion that stays true.
//
// The compensation is the brief's own and it is better than a rectangle:
// every colour is attached to a CONCRETE THING the learner already owns from
// the corpus (ON_A_THING in couleurs-corpus.ts). `les tomates rouges`,
// `les olives noires`, `les haricots verts`. A colour on a thing is memorable;
// a colour on a blank square is not.
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
//   `tapTable` is NOT in ownsLayout(), so s08-table, s12-hear and s14-orange all
//   render inside a SCROLLING page. s08-table is the widest thing here: FOUR
//   columns, which the brief warns is wider than a1.09's three, so it carries
//   only THREE rows (vert, bleu, marron) and every cell is two words or fewer,
//   with the teaching in the detail modal, which is a card and can hold prose.
//
//   `size` is not decoration. ownsLayout() ignores it; density.logic.ts reads
//   `xl` as a 12-word cap on EVERY string in the section. s04-twelve is the only
//   xl section and every card in it is one French word with a short gloss.
//
//   A `groupDrill` control page carries `items: []` explicitly, and no `size`.
//
//   NO U+203F. The tie renders as a low underscore on a Pixel 6 and is already
//   in shipped sons.10 content. The batch greps for the character.
//
// ── The dictée follows a finding rather than a preference ─────────────────
//
// MEASURED, not assumed (scripts/_couleurs_probe.ts): word mode hands the
// learner each WHOLE WORD as a tile, so a word-mode dictée CANNOT test an
// agreement ending. The learner taps `vertes` or `verte` as a pre-spelled tile
// and never decides a letter. Only LETTERS mode makes them produce the ending.
//
// `dicteeMode` switches to words above DICTEE_LETTER_LIMIT letters, so every
// dictée target below is deliberately SHORT enough to stay in letters mode, and
// each one is asserted through the real `dicteeMode` in the batch, the merge and
// the test rather than against a restated threshold. This is the single most
// important design consequence in the lesson and it is not in the brief.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { COULEURS_TERMS, REFRAME } from './couleurs-terms.ts';
import {
  AUTHORED_WORDS, BOTH_GENDERS_ID, COLOUR_IDS, COMPOUND_IDS, COULEURS, COULEURS_IDS,
  EAR_PAIRS, FAMILY_LABEL, FAMILY_OF, IN_ENGLISH, INVARIABLE, MARRON_INVARIABLE_IDS,
  ON_A_THING, ORANGE_COLOUR_IDS, ORANGE_NOUN_IDS, PARADIGM_COLOURS, THE_TWELVE,
  VIOLET_GRID_IDS, coloursIn, frOf, gridFor, sub,
} from './couleurs-corpus.ts';

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

/** The twelve colour headwords. The lesson's vocabulary, and not one of them is
 *  authored: all twelve were already published at fr.sons.couleurs.001-.012. */
const COLOURS = COLOUR_IDS;

/** The four authored feminine headwords, which are the entire headword gap. */
const FEMININES = AUTHORED_WORDS.map((w) => w.id);

/** The feminines that already existed and are reused rather than written. */
const FEMININES_REUSED = [
  'fr.sons.muettes.049', // verte
  'fr.sons.muettes.054', // blanche
];

/** brun and brune, shown in the ear section and never drilled for production.
 *  Not one of the twelve: it is the most dramatic audible change in the language
 *  and sons.03 already teaches the mechanism behind it. */
const BRUN_PAIR = ['fr.sons.nasales.170', 'fr.sons.nasales.171'];

/** The authored paradigm: three colours, four forms, one noun pair. */
const PARADIGM = COULEURS_IDS;

/** Agreement surviving outside the paradigm, on nouns the learner owns. */
const IN_THE_WILD = [
  'fr.a1.couleurs.001', // Elle porte une jupe verte.
  'fr.a1.couleurs.003', // La maison est blanche.
  'fr.a1.couleurs.007', // Sa chemise est grise.
  'fr.a1.couleurs.049', // Les chaussures sont rouges.   <- partner of the authored marron
  'fr.a1.couleurs.053', // Les voitures sont noires.
  'fr.a1.couleurs.077', // Les portes sont blanches.
];

/** The whole invariable case: the fruit agreeing, the colour refusing, marron
 *  doing the same job, and the compounds that follow for free. */
const INVARIABLE_EVIDENCE = [
  ...ORANGE_NOUN_IDS, ...ORANGE_COLOUR_IDS, ...MARRON_INVARIABLE_IDS, ...COMPOUND_IDS,
];

const ITEM_IDS = [
  ...new Set([
    ...COLOURS, ...FEMININES, ...FEMININES_REUSED, ...BRUN_PAIR, ...PARADIGM,
    ...IN_THE_WILD, ...VIOLET_GRID_IDS, ...INVARIABLE_EVIDENCE, BOTH_GENDERS_ID,
  ]),
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag.
 *
 *  MEASURED against Postgres on 2026-08-06, and it is a hard constraint rather
 *  than a design choice: NOT ONE published sentence in the whole `couleurs`
 *  theme carries voiceflash. Every one of the 322 rows is `dictation` or
 *  `sentence,flashcard,review`. So the spoken mission is the twelve headwords,
 *  the four authored feminines and the twelve authored paradigm rows, which are
 *  the only voiceflash-carrying colour content that exists after this build.
 *  a1.08 and a1.09 both hit the same wall in their own themes. It is in the
 *  report. */
const SPEAK_IDS = [...COLOURS, ...FEMININES, ...PARADIGM];

/** The dictée, and every target was chosen by MEASUREMENT rather than taste.
 *
 *  Word mode hands the learner each whole word as a tile, so it cannot test an
 *  agreement ending: tapping a pre-spelled `vertes` is not producing one. Only
 *  LETTERS mode makes the learner write the -e and the -s themselves, which is
 *  the entire point of a dictée in an agreement lesson.
 *
 *  Every id below is short enough to stay in letters mode, verified through the
 *  real `dicteeMode` in the batch, the merge and the test. The five between them
 *  cover: an audible feminine, a silent feminine, a silent plural, and an
 *  invariable that must NOT gain one. */
const DICTATION_IDS = [
  'fr.a1.couleurs.260', // Ma veste est verte.    15 letters   the -e you CAN hear
  'fr.a1.couleurs.264', // Ma veste est bleue.    15 letters   the -e you cannot
  'fr.a1.couleurs.261', // Mes sacs sont verts.   16 letters   the -s nobody can hear
  'fr.a1.couleurs.267', // Mon sac est marron.    15 letters   no ending at all
  'fr.a1.couleurs.268', // Ma veste est marron.   16 letters   the -e that must not appear
];

/* A MEASURED CONSTRAINT, not a preference, and worth recording because the next
 * agreement lesson will hit it too.
 *
 * DICTEE_LETTER_LIMIT is 16, so a target of seventeen letters or more switches
 * to word mode and stops testing anything this lesson teaches. That rules out
 * every PLURAL marron sentence in the corpus and in this build:
 *
 *     Mes sacs sont marron.        17   words mode
 *     Ses yeux sont marron.        17   words mode
 *     Mes vestes sont marron.      19   words mode
 *     Les chaussures sont marron.  23   words mode
 *
 * So the highest-value case in the lesson, the plural marron that must NOT gain
 * an s, CANNOT be a dictée target at any length French will allow: the sentence
 * needs a plural subject, and a plural subject plus `sont` plus `marron` is over
 * the limit before anything else is added. It is tested by the quiz instead, at
 * r5 with an mcq and an errorSpot, and by the scene's own choice beat. Named
 * here so nobody "fixes" the dictée by adding a target that silently degrades to
 * tapping pre-spelled tiles. */

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is being read rather than being misunderstood, and
 * this lesson's error is a WRITTEN one: agreement almost never breaks
 * comprehension, which is exactly why it survives for years. So the scene is set
 * somewhere the learner's French is READ by strangers, and the cost is a round
 * trip and a small dent rather than a catastrophe. That is the honest size of
 * this error and inflating it would teach the wrong thing.
 *
 * Salomé is selling a jacket and a pair of shoes in a neighbourhood group. The
 * jacket needs an ending, the shoes must not have one, and she gives the shoes
 * the ending because it is the one that looks regular. `marrons` on its own is
 * a real French word for the chestnuts, so a reader stumbles for a beat before
 * working out what was meant, and asks. Nobody is annoyed and nothing is lost
 * except the impression she was going for.
 *
 * The choice beat is the lesson's own authored pair, so the beat, the grid, the
 * drill and the dictée are all the same rows.                                */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'You are clearing out a wardrobe, and two things are going in the neighbourhood group where everybody sells everything.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'A green jacket and a pair of brown shoes. You have the photos. All that is left is to say what colour they are.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'Your post',
    fr: frOf('fr.a1.couleurs.260'),
    en: 'My jacket is green.',
    stage: 'That one is right, and it took an ending because the jacket is feminine.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-13-pairs' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'Now the shoes. They are brown. Which line goes in the post?',
    options: [
      {
        fr: 'Les chaussures sont marrons.',
        respell: sub('marron'),
        en: 'the one that follows the pattern',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: frOf('fr.a1.couleurs.271'),
        respell: sub('marron'),
        en: 'the one that leaves the colour alone',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes, and it looks wrong precisely because everything else in the post took an ending. Watch what the other one does.',
      breaks: 'That is the pattern you just used on the jacket, applied again. Watch what a reader does with it.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'Your post',
    fr: 'Les chaussures sont marrons.',
    en: '(The shoes are brown, with an ending that should not be there)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Salomé',
    fr: 'Les marrons ? Pardon, tu vends des chaussures ou des marrons ?',
    en: 'The chestnuts? Sorry, are you selling shoes or chestnuts?',
    stage: 'She is teasing, and she is also not entirely joking. Des marrons is a bag of chestnuts.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-13-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'The one letter a French reader notices',
    // 38 words. The shipped scene breaks run 24 to 40 here.
    body: 'Every other colour in your post took an ending, so adding one here looked like being careful. It is the one colour that must not have it, because marron is a chestnut being used as a colour, and the chestnut keeps its own shape.',
    wrong: {
      fr: 'Les chaussures sont marrons.',
      ipa: '/le ʃo.syʁ sɔ̃ ma.ʁɔ̃/',
      respell: sub('marron'),
      en: 'The shoes are brown, with an s that turns the colour back into a nut',
    },
    right: {
      fr: frOf('fr.a1.couleurs.271'),
      ipa: '/le ʃo.syʁ sɔ̃ ma.ʁɔ̃/',
      respell: sub('marron'),
      en: 'The shoes are brown',
    },
    coach: `${REFRAME} Both lines sound identical, which is why only a reader ever catches it.`,
    // Audio-first: the ear answers before the eye can, and here the ear has
    // NOTHING to answer with, which is the point being made. `autoplay` is NOT
    // set. It is declared in schema.ts and implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-13-invariable' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'Second try',
    fr: frOf('fr.a1.couleurs.271'),
    en: 'The shoes are brown.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Salomé',
    fr: 'Ah, les chaussures ! Je les prends. Et la veste verte aussi.',
    en: 'Ah, the shoes! I will take them. And the green jacket too.',
    stage: 'Both items sold, in one message, and nothing else about the post changed.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'One colour took an ending and one refused it, and knowing which is which is the whole of this lesson.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: your first describing word ────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Post That Sold Chestnuts',
    frSub: 'Des chaussures ou des marrons ?',
    render: 'screens',
    layer: 'core',
    terms: ['agreement', 'borrowedNoun'],
    say: {
      text: 'One post, two colours, and only one of them wanted an ending. Watch which.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A phone, a pile of clothes on the bed, and a neighbourhood selling group',
      city: 'Lyon',
      time: 'Sunday afternoon',
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
    say: 'Four things, and the fourth is the one people get wrong for years.',
    goals: [
      { t: 'Name twelve colours', s: 'The set you will actually use, each one attached to something you already know the word for.' },
      { t: 'Make the colour match the thing', s: 'Four shapes for most colours, and a way of working out which one without guessing.' },
      { t: 'Know which endings you can hear', s: 'Some of them change the sound and most of them do not, and knowing which is which stops you listening for something that is not there.' },
      { t: 'Leave two colours completely alone', s: 'Not as two exceptions to memorise, but as one idea that also covers every colour made of two words.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-idea',
    title: 'The Word That Changes Shape',
    frSub: 'Le mot qui change',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['agreement', 'afterTheNoun'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-13-pairs' },
    say: 'Four cards before any colour, because this idea decides how you use all twelve of them.',
    cards: [
      {
        label: 'What you already have',
        head: 'Things have a gender',
        fr: 'un sac · une veste',
        sub: 'a bag · a jacket',
        body: 'You met this already: every thing in French is either the un kind or the une kind, and the small word in front follows it. A bag is one, a jacket is the other, and there is nothing about either object that explains why.',
      },
      {
        label: 'What is new',
        head: 'The describing word follows too',
        fr: `${frOf('fr.a1.couleurs.259')} · ${frOf('fr.a1.couleurs.260')}`,
        sub: `${sub('vert')} · ${sub('verte')}`,
        body: 'This is new, and nothing before now has asked it of you. The colour changes shape to match the thing it describes. Same colour, same sentence, and the only reason the second grew an e is that a jacket is the une kind.',
      },
      {
        label: 'Where it sits',
        head: 'After the thing, not before',
        fr: frOf('fr.a1.couleurs.001'),
        sub: 'She is wearing a green skirt.',
        body: 'English puts the colour first and French puts it after. Une jupe verte, the skirt then its colour. That holds for every colour you will meet, so it is worth getting used to now rather than translating word by word and rearranging afterwards.',
      },
      {
        label: 'What is actually hard',
        head: 'Not the twelve names',
        body: `Twelve short words is an afternoon. Deciding which shape the colour takes is what will still be catching you in a year, and two of the twelve refuse to change at all. ${REFRAME}`,
      },
    ],
  },

  /* ── Act 2: the colours ───────────────────────────────────────────────── */

  {
    // The only xl section in the lesson, and correct here for the reason xl
    // exists: every card is ONE French word with a short gloss.
    // density.logic.ts caps EVERY string in an xl section at 12 words.
    type: 'cardDeck',
    id: 's04-twelve',
    title: 'Twelve, One At A Time',
    frSub: 'Une couleur par écran',
    hint: 'Swipe. Say each one out loud before you move on.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-13-twelve' },
    say: 'Twelve screens, one colour each. Say it out loud before you swipe.',
    cards: THE_TWELVE.map((c, i) => ({
      label: `${i + 1} of 12`,
      fr: c,
      sub: sub(c),
      body: `${IN_ENGLISH[c]}.`,
    })),
  },

  {
    // The brief's compensation for having no swatch, and it is a better card
    // than a rectangle: a colour attached to a thing the learner already owns
    // from the corpus. See the imagery note in the header.
    type: 'cardDeck',
    id: 's05-things',
    title: 'A Colour On A Thing',
    frSub: 'Une couleur sur un objet',
    hint: 'Twelve things you can already name.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['afterTheNoun'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-13-things' },
    say: 'The same twelve, this time stuck to something. The colour comes after the thing, every time.',
    cards: THE_TWELVE.map((c) => ({
      label: IN_ENGLISH[c],
      head: c,
      fr: ON_A_THING[c].fr,
      sub: `${sub(c)} · ${ON_A_THING[c].en}`,
      body: `The thing first, then the colour. ${
        FAMILY_OF[c] === 'invariable'
          ? 'This is one of the two that never changes shape, whatever it is stuck to.'
          : FAMILY_OF[c] === 'already-e'
            ? 'This one already ends in an e, so the feminine asks nothing new of it.'
            : 'Notice the ending: it is there because of the thing, not because of the colour.'
      }`,
    })),
  },

  {
    type: 'groupDrill',
    id: 's06-families',
    title: 'Four Groups, Not Twelve Rules',
    frSub: 'Quatre familles',
    layer: 'core',
    terms: ['agreement', 'borrowedNoun'],
    say: 'The twelve, split by what the feminine does. Every group is a real group, so the split is worth remembering.',
    groups: [
      {
        label: FAMILY_LABEL['already-e'],
        items: coloursIn('already-e').map((c) => ({
          fr: c,
          itemId: COLOURS[THE_TWELVE.indexOf(c)],
          respell: sub(c),
          en: IN_ENGLISH[c],
        })),
        check: {
          q: 'These four already end in an e. What does the feminine add?',
          opts: ['another e', 'nothing at all', 'an s', 'it depends on the noun'],
          correct: 1,
          why: 'Nothing. A colour already ending in e is the same word for either kind of thing: un sac rouge, une veste rouge. Four of the twelve are free this way, which is worth knowing before you start worrying about the other eight.',
        },
      },
      {
        label: FAMILY_LABEL['adds-e'],
        items: coloursIn('adds-e').map((c) => ({
          fr: c,
          itemId: COLOURS[THE_TWELVE.indexOf(c)],
          respell: sub(c),
          en: IN_ENGLISH[c],
        })),
        check: {
          q: 'All four add an e for the feminine. On how many of them can you HEAR it?',
          opts: ['all four', 'two of them', 'none of them', 'only vert'],
          correct: 1,
          why: 'Two. Vert and gris end in a sleeping consonant that the e wakes up, so verte and grise sound different from their plain forms. Bleu and noir end in a vowel sound already, so bleue and noire are identical to bleu and noir.',
        },
      },
      {
        label: FAMILY_LABEL['changes-more'],
        items: coloursIn('changes-more').map((c) => ({
          fr: c,
          itemId: COLOURS[THE_TWELVE.indexOf(c)],
          respell: sub(c),
          en: IN_ENGLISH[c],
        })),
        check: {
          q: 'Blanc does not become blance. What is the feminine?',
          opts: ['blanque', 'blanke', 'blanche', 'blanc, it does not change'],
          correct: 2,
          why: 'blanche. The c at the end turns into a ch, which no other colour does, and you hear it clearly. Violet is the other one in this group and it doubles its t: violette, not violete.',
        },
      },
      {
        label: FAMILY_LABEL.invariable,
        items: INVARIABLE.map((c) => ({
          fr: c,
          itemId: COLOURS[THE_TWELVE.indexOf(c)],
          respell: sub(c),
          en: IN_ENGLISH[c],
        })),
        check: {
          q: 'Why do these two never change?',
          opts: [
            'They are both borrowed from English',
            'They were both something else before they were colours',
            'They are too short to take an ending',
            'They are irregular and have to be memorised',
          ],
          correct: 1,
          why: 'A marron is a chestnut and une orange is a fruit. Both are things that got used as colours, and a thing borrowed this way keeps the shape it had. That is one idea rather than two exceptions, and it covers the two-word colours too.',
        },
      },
    ],
  },

  /* ── Act 3: four forms ────────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's07-grid',
    title: 'One Colour, Four Shapes',
    frSub: 'Quatre formes',
    hint: 'The same colour on four different things.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['agreement', 'writtenNotHeard'],
    sheetId: 'sheet.a1.13.forms',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-13-grid' },
    say: 'One bag, one jacket, then more than one of each. Only the ending moves.',
    cards: [
      ...gridFor('vert').map((row, i) => ({
        label: ['one masculine thing', 'one feminine thing', 'more than one, masculine', 'more than one, feminine'][i],
        head: ['vert', 'verte', 'verts', 'vertes'][i],
        fr: row.fr,
        sub: `${sub(['vert', 'verte', 'verts', 'vertes'][i])} · ${row.en}`,
        body: row.notes ?? '',
      })),
      {
        label: 'the whole idea',
        head: 'The thing decides',
        fr: `${frOf('fr.a1.couleurs.259')} → ${frOf('fr.a1.couleurs.262')}`,
        sub: 'from one masculine thing to several feminine ones',
        body: 'Nothing about the colour changed between those four sentences. The bag became a jacket and one became several, and the colour followed each time. That is the whole mechanism, and it works the same way on every colour that changes at all.',
      },
      {
        // The best sentence in the lesson, and it has to be in ACT 3 rather than
        // in the act 6 flashcards, because act 3 is where its tranche releases
        // it. A card released before the mission that shows it is a card the
        // learner is asked to rate before they have met it.
        label: 'one sentence, both shapes',
        head: 'The only thing that changed is the noun',
        fr: frOf(BOTH_GENDERS_ID),
        sub: `${sub('noir')} · ${sub('noire')} · My bag is black and my jacket is black.`,
        body: 'One sentence, one colour, two shapes of it, and the only difference between them is which thing is being described. Noir and noire also sound exactly the same, so this is a difference you can only see.',
      },
    ],
  },

  {
    // FOUR columns, which is wider than a1.09's three, so this carries only
    // THREE rows and every cell is two words or fewer. tapTable is NOT in
    // ownsLayout(), so this renders inside a scrolling page. The teaching lives
    // in the detail modal, which is a card and can hold prose.
    type: 'tapTable',
    id: 's08-table',
    title: 'The Same Three Colours, Four Ways',
    frSub: 'Le tableau',
    layer: 'core',
    terms: ['agreement', 'borrowedNoun', 'writtenNotHeard'],
    sheetId: 'sheet.a1.13.forms',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-13-grid' },
    say: `${REFRAME} Tap any cell to hear it. The bottom row never moves.`,
    cols: ['one, m.', 'one, f.', 'several, m.', 'several, f.'],
    rows: PARADIGM_COLOURS.map((c) => {
      const forms: Record<string, string[]> = {
        vert: ['vert', 'verte', 'verts', 'vertes'],
        bleu: ['bleu', 'bleue', 'bleus', 'bleues'],
        marron: ['marron', 'marron', 'marron', 'marron'],
      };
      const grid = gridFor(c);
      return {
        cells: forms[c],
        say: forms[c].join(', '),
        detail: {
          title: `${c}: ${c === 'marron' ? 'one shape' : 'four shapes'}`,
          body: c === 'marron'
            ? `${grid.map((g) => g.fr).join(' ')} Four different things and one spelling, because marron was a chestnut before it was a colour. Nothing you can do to the noun will make this word change.`
            : `${grid.map((g) => g.fr).join(' ')} Four things and four spellings. ${
              c === 'vert'
                ? 'You can hear the feminine here: the t at the end wakes up. You cannot hear either plural.'
                : 'You can hear none of it. All four of these sound exactly the same out loud.'
            }`,
          say: grid.map((g) => g.fr).join(' '),
        },
      };
    }),
  },

  {
    type: 'groupDrill',
    id: 's09-sort',
    title: 'Which Shape Does It Take?',
    frSub: 'Quelle forme ?',
    layer: 'core',
    terms: ['agreement'],
    say: 'Four things, four decisions. Say the whole phrase out loud before you check.',
    groups: [
      {
        label: 'One feminine thing',
        items: [
          { fr: frOf('fr.a1.couleurs.001'), itemId: 'fr.a1.couleurs.001', respell: sub('verte'), en: 'She is wearing a green skirt.' },
          { fr: frOf('fr.a1.couleurs.007'), itemId: 'fr.a1.couleurs.007', respell: sub('grise'), en: 'His shirt is grey.' },
          { fr: frOf('fr.a1.couleurs.003'), itemId: 'fr.a1.couleurs.003', respell: sub('blanche'), en: 'The house is white.' },
        ],
        check: {
          q: 'All three describe one feminine thing. What do all three colours have in common?',
          opts: ['they all end in e', 'they are all plural', 'they all end in s', 'none of them changed'],
          correct: 0,
          why: 'All three ended in an e, because the thing being described was the une kind. Two of them also changed sound when the e arrived, which is what the next mission is about.',
        },
      },
      {
        label: 'More than one thing',
        items: [
          { fr: frOf('fr.a1.couleurs.049'), itemId: 'fr.a1.couleurs.049', respell: sub('rouges'), en: 'The shoes are red.' },
          { fr: frOf('fr.a1.couleurs.053'), itemId: 'fr.a1.couleurs.053', respell: sub('noires'), en: 'The cars are black.' },
          { fr: frOf('fr.a1.couleurs.077'), itemId: 'fr.a1.couleurs.077', respell: sub('blanches'), en: 'The doors are white.' },
        ],
        check: {
          q: 'Two of these carry both an e and an s. Why does the first carry only an s?',
          opts: [
            'rouge already ends in e, so there is nothing to add',
            'shoes are masculine',
            'rouge never agrees',
            'it is a mistake in the sentence',
          ],
          correct: 0,
          why: 'rouge already ends in an e, so the feminine asks nothing of it and only the plural s gets added. Noires and blanches needed both, because noir and blanc do not end in e on their own.',
        },
      },
      {
        label: 'The row that never moves',
        items: MARRON_INVARIABLE_IDS.map((id) => ({
          fr: frOf(id),
          itemId: id,
          respell: sub('marron'),
          en: id === 'fr.a1.couleurs.235' ? 'The brown table comes from Italy.'
            : id === 'fr.a1.couleurs.234' ? 'The brown shoes are expensive.'
              : 'His eyes are brown.',
        })),
        check: {
          q: 'One feminine thing and two plurals. How many times did marron change?',
          opts: ['twice', 'once', 'not at all', 'three times'],
          correct: 2,
          why: 'Not once. A feminine table, plural shoes and plural eyes, and the colour is spelled identically in all three. This is what the rule looks like in real sentences rather than in a table.',
        },
      },
      {
        // The SECOND complete four-form paradigm in the lesson, and not one row
        // of it is authored: violet, violette, violets and violettes are all
        // published corpus sentences. It is the "changes more" family, so the
        // learner sees a colour whose feminine doubles a letter rather than just
        // adding one, on real sentences rather than on a table.
        label: 'The one that doubles a letter',
        items: VIOLET_GRID_IDS.map((id) => ({
          fr: frOf(id),
          itemId: id,
          respell: sub(id === 'fr.a1.couleurs.010' ? 'violet'
            : id === 'fr.a1.couleurs.065' ? 'violets'
              : id === 'fr.a1.couleurs.009' ? 'violette' : 'violettes'),
          en: id === 'fr.a1.couleurs.010' ? "The children's balloon is purple."
            : id === 'fr.a1.couleurs.009' ? 'This flower is purple.'
              : id === 'fr.a1.couleurs.065' ? 'The gloves are purple.'
                : 'The wildflowers are purple.',
        })),
        check: {
          q: 'Violet becomes violette in the feminine. What happened to the t?',
          opts: [
            'It was dropped',
            'It doubled, and now you say it',
            'It stayed silent',
            'It became a d',
          ],
          correct: 1,
          why: 'It doubled and woke up. Violet ends in a silent t, and the feminine e both doubles it in writing and makes it pronounced. Violete would be wrong twice over: wrong spelling and wrong sound.',
        },
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's10-check',
    title: 'Now Without The Table',
    frSub: 'Sans le tableau',
    layer: 'core',
    terms: ['agreement', 'borrowedNoun'],
    say: 'Same decisions, nothing to look at. This is the one that tells you whether it landed.',
    groups: [
      {
        label: 'Agrees, or does not',
        items: [],
        check: {
          q: 'Une veste, and the colour is orange. What do you write?',
          opts: ['orange', 'orangée', 'orange, with an e', 'oranges'],
          correct: 0,
          why: 'orange, unchanged. It is a fruit being used as a colour, so it keeps the shape it has as a fruit, and a feminine noun in front of it changes nothing at all.',
        },
      },
      {
        label: 'The sound tells you nothing',
        items: [],
        check: {
          q: 'You hear somebody say « mes vestes sont bleues » out loud. What tells you it is plural?',
          opts: [
            'the s on bleues',
            'the e on bleues',
            'nothing in the colour, only the words before it',
            'the way the speaker stresses the ending',
          ],
          correct: 2,
          why: 'Nothing in the colour. Bleu, bleue, bleus and bleues are one identical sound, so mes and vestes are carrying the whole message. This is why listening cannot tell you which ending to write.',
        },
      },
      {
        label: 'The irregular one',
        items: [],
        check: {
          q: 'La porte, and the colour is blanc. What do you write?',
          opts: ['blance', 'blanc', 'blanche', 'blancque'],
          correct: 2,
          why: 'blanche. It is the one colour whose feminine changes more than the ending, and unlike most of the others you can hear it: the silent c becomes a ch you say out loud.',
        },
      },
      {
        // Moved here from s09-sort when that section's control page gave way to
        // the violet paradigm. A groupDrill control page carries items: []
        // explicitly and no size.
        label: 'Put it together',
        items: [],
        check: {
          q: 'You are describing two feminine things and the colour is bleu. What do you write?',
          opts: ['bleu', 'bleue', 'bleus', 'bleues'],
          correct: 3,
          why: 'bleues. Feminine, so an e, and more than one, so an s, in that order. It sounds exactly like bleu, so there is nothing in the audio to help you and the decision has to come from the thing being described.',
        },
      },
    ],
  },

  /* ── Act 4: what you hear, what you write ─────────────────────────────── */

  {
    type: 'listening',
    id: 's11-ear',
    title: 'Can You Hear The Difference?',
    frSub: "À l'oreille",
    layer: 'core',
    terms: ['wakesUp', 'writtenNotHeard'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-13-pairs' },
    // Every line is a masculine/feminine pair. NOT ONE PLURAL appears here or in
    // any ear question in the lesson: the plural -s is never pronounced, so an
    // ear question on one would be asking the learner to hear something that is
    // not in the signal. The third question below says that out loud rather than
    // leaving the learner to conclude their listening is at fault.
    say: 'Seven pairs. On five of them something changes and on two nothing does. Slow the audio down.',
    lines: EAR_PAIRS.map((p) => ({
      fr: `${p.m} · ${p.f}`,
      en: p.audible ? `you hear a difference: ${p.what}` : 'these two are the same sound',
    })),
    questions: [
      {
        q: 'Two of those seven pairs are the same sound twice. Which two?',
        opts: ['vert and gris', 'bleu and noir', 'blanc and violet', 'none of them, all seven differ'],
        correct: 1,
        why: 'bleu / bleue and noir / noire. Both end in a vowel sound already, so there is no sleeping consonant for the feminine e to wake up and nothing at all changes. The other five all bring a letter back to life.',
      },
      {
        q: 'On the five pairs where you DO hear something, what is making the sound?',
        opts: [
          'The e itself is being pronounced',
          'A consonant that was silent is now being said',
          'The speaker is stressing the ending',
          'The vowel changes shape',
        ],
        correct: 1,
        why: 'The consonant. The e is not itself a sound: it stops the letter in front of it being last in the word, so that letter gets pronounced again. Vert hides its t and verte says it, which is what the silent letters lesson showed you.',
      },
      {
        q: 'None of those seven pairs was a plural. Why not?',
        opts: [
          'Plurals were covered in an earlier lesson',
          'The plural s is never pronounced, so there would be nothing to hear',
          'Plural colours are rare',
          'The recording only had singular forms available',
        ],
        correct: 1,
        why: 'There is nothing to hear. The plural s on a colour is silent without exception, so vert and verts are one sound and an ear question on them would be asking you to hear something that is not in the recording at all.',
      },
    ],
  },

  {
    // Two columns on one screen, which is the layout the brief asks for: the
    // audible pairs beside the silent ones, audio on every cell, so the learner
    // discovers the silence by tapping rather than being told.
    type: 'tapTable',
    id: 's12-hear',
    title: 'Heard, Or Only Written',
    frSub: 'Entendu ou seulement écrit',
    layer: 'core',
    terms: ['wakesUp', 'writtenNotHeard'],
    sheetId: 'sheet.a1.13.sound',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-13-pairs' },
    say: 'Tap both cells in a row and listen. Five rows change and two do not.',
    cols: ['plain form', 'feminine'],
    rows: EAR_PAIRS.map((p) => ({
      cells: [p.m, p.f],
      say: `${p.m}, ${p.f}`,
      detail: {
        title: `${p.m} → ${p.f}`,
        body: p.audible
          ? `${sub(p.m)} becomes ${sub(p.f)}, so ${p.what}. The letter sat there silently in the plain form and the e behind it brought it back. Same mechanism as the silent letters lesson.`
          : `${sub(p.m)} becomes ${sub(p.f)}. Not a typo: the two are one sound, and the e is written and never said. No way to hear which one somebody used, and no amount of practice will change that.`,
        say: `${p.m} ${p.f}`,
      },
    })),
  },

  {
    type: 'cardDeck',
    id: 's13-silent',
    title: 'The Ending Nobody Can Hear',
    frSub: 'Le s muet',
    hint: 'Four cards about the half of this that is invisible.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['writtenNotHeard'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-13-silent' },
    say: 'The plural is never pronounced. Not quietly: never. This card is here so you stop listening for it.',
    cards: [
      {
        label: 'The plural s',
        head: 'Written, never said',
        fr: `${frOf('fr.a1.couleurs.259')} · ${frOf('fr.a1.couleurs.261')}`,
        sub: `${sub('vert')} · ${sub('verts')}`,
        body: 'One bag and several bags, and the colour is the same sound in both. The s exists only on the page. This is true of every colour without exception, so there is nothing to learn here beyond knowing not to listen for it.',
      },
      {
        label: 'And with the feminine too',
        head: 'Still nothing',
        fr: `${frOf('fr.a1.couleurs.260')} · ${frOf('fr.a1.couleurs.262')}`,
        sub: `${sub('verte')} · ${sub('vertes')}`,
        body: 'One jacket and several jackets. Verte and vertes are one sound, exactly as vert and verts were. So of the four shapes a colour takes, your ear can separate at most two of them, and on some colours it cannot separate any.',
      },
      {
        label: 'All four the same',
        head: 'bleu, bleue, bleus, bleues',
        fr: frOf('fr.a1.couleurs.266'),
        sub: `${sub('bleues')} · all four sound like this`,
        body: 'Bleu is the extreme case. Four different spellings, one sound, and nothing in any recording that could tell them apart. A native speaker writing this sentence is working it out from the jacket, not from what they heard.',
      },
      {
        label: 'What this means for you',
        head: 'You will not hear your mistakes',
        body: 'If you have been slowing recordings down to catch these endings, stop. The information is not in the sound, and concluding your listening is bad would be the wrong lesson. Work the ending out from the thing, then write it. Everybody does.',
      },
    ],
  },

  /* ── Act 5: the two that never change ─────────────────────────────────── */

  {
    // The best teaching object in the lesson, and the brief is right that
    // separating the halves is how the rule decays back into "just memorise
    // these two". BOTH HALVES ARE REAL CORPUS ROWS, on ONE screen, side by side.
    // This is the layout the test asserts.
    type: 'tapTable',
    id: 's14-orange',
    title: 'The Fruit And The Colour',
    frSub: "L'orange et orange",
    layer: 'core',
    terms: ['borrowedNoun'],
    sheetId: 'sheet.a1.13.invariable',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-13-invariable' },
    say: `${REFRAME} Left is the fruit doing its ordinary job. Right is the same word used as a colour.`,
    cols: ['as a thing', 'as a colour'],
    rows: [
      {
        cells: ['une orange', 'une jupe orange'],
        say: 'une orange, une jupe orange',
        detail: {
          title: 'The same word, two jobs',
          body: 'On the left it is a fruit you could eat. On the right it is only telling you the colour of a skirt. Same word, two jobs, and the endings reach it in one job and not the other.',
          say: 'une orange, une jupe orange',
        },
      },
      {
        cells: ['des oranges', 'des fleurs orange'],
        say: 'des oranges, des fleurs orange',
        detail: {
          title: 'More than one, both ways',
          body: `${frOf('fr.a1.marche.116')} Several fruits, so oranges takes an s. ${frOf('fr.a1.couleurs.239')} Several flowers, and the colour takes nothing: the flowers are what is plural, not the oranges.`,
          say: `${frOf('fr.a1.marche.116')} ${frOf('fr.a1.couleurs.239')}`,
        },
      },
      {
        cells: ['une orange mûre', 'les rideaux orange'],
        say: `${frOf('fr.a1.adjectifs-essentiels.331')} ${frOf('fr.a1.couleurs.094')}`,
        detail: {
          title: 'The proof, in one sentence',
          body: `${frOf('fr.a1.adjectifs-essentiels.331')} Look at what happens beside the fruit: mûre took an e, because that is what describing words do here. So orange is not a word French refuses to touch. It is the thing being described.`,
          say: frOf('fr.a1.adjectifs-essentiels.331'),
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's15-marron',
    title: 'Marron Is A Chestnut',
    frSub: 'Le marron',
    hint: 'The same idea, on the colour from the opening scene.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['borrowedNoun', 'writtenNotHeard'],
    sheetId: 'sheet.a1.13.invariable',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-13-invariable' },
    say: 'Four cards, and the last one is the sentence that cost you a sale at the start of this lesson.',
    cards: [
      {
        label: 'What it was first',
        head: 'A nut, then a colour',
        fr: 'marron',
        sub: `${sub('marron')} · brown, and also a chestnut`,
        body: 'Un marron is a chestnut you can hold. Somebody used the word for the colour of one, it stuck, and the word never stopped being a nut. That is the entire explanation, and it is why the ending rules do not reach it.',
      },
      {
        label: 'On a feminine thing',
        head: 'Still marron',
        fr: frOf('fr.a1.couleurs.235'),
        sub: 'The brown table comes from Italy.',
        body: 'La table is the une kind, so a colour like vert would be verte here. Marron is not, and it does not become marronne, which is not a word. The thing being described has no effect on it at all.',
      },
      {
        label: 'On several things',
        head: 'Still marron',
        fr: frOf('fr.a1.couleurs.234'),
        sub: 'The brown shoes are expensive.',
        body: 'Several shoes, and the colour still takes nothing. Compare that with les chaussures rouges, where the same shoes made rouge take an s. Same noun, same sentence shape, and only one of the two colours moved.',
      },
      {
        label: 'The one that got you',
        head: 'Never marrons',
        fr: frOf('fr.a1.couleurs.271'),
        sub: `${sub('marron')} · The shoes are brown.`,
        body: `${REFRAME} Adding the s here is the most noticeable written error in the lesson, because des marrons is a real thing and it is a bag of chestnuts. Nobody hears it and every reader sees it.`,
      },
      {
        // The compound rule is ONE CARD, not a mission. The brief: "Keep it to
        // one card: a bonus, not an act." An earlier draft gave it its own
        // cardDeck section, which made a whole mission out of a single card and
        // pushed the lesson to 27 sections. It belongs here, because it is the
        // same rule as the four cards above rather than a new one.
        //
        // Both examples are corpus rows and both put the compound behind a
        // PLURAL noun, so the refusal to agree is visible rather than asserted.
        label: 'And two-word colours, free',
        head: 'vert pomme, vert foncé',
        fr: `${frOf('fr.a1.couleurs.123')} ${frOf('fr.a1.couleurs.125')}`,
        sub: `${sub('vert pomme')} · ${sub('vert foncé')}`,
        body: 'Both describe plural things and neither colour moved. A colour built from two words has stopped being a plain colour, the same way marron is really a nut, so the same rule reaches it.',
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's16-traps',
    // `swipe` and `size` are not decoration. MissionSection renders
    // commonErrors as its own swipe deck ONLY when `swipe` is set; without it
    // the section falls through to a path that drew a BLANK screen on sons.08
    // m22 and a1.01 m5.
    swipe: true,
    size: 'lg',
    title: 'Five Traps',
    frSub: 'Cinq pièges',
    layer: 'core',
    terms: ['borrowedNoun', 'agreement', 'writtenNotHeard'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-13-traps' },
    say: `${REFRAME} Five things an English speaker writes in their first month, one per screen.`,
    errors: [
      {
        wrong: 'Writing « des chaussures marrons ».',
        right: 'Writing « des chaussures marron ».',
        why: 'The highest-value one in the lesson. Marron is a chestnut used as a colour, so it keeps the shape it had as a nut. Nobody will hear the s and every French reader will see it, which is why this one survives for years.',
      },
      {
        wrong: 'Writing « une jupe vert ».',
        right: 'Writing « une jupe verte ».',
        why: 'The colour has to match the thing, and a skirt is the une kind. This one you can also hear: verte says its final t and vert does not, so leaving the e off changes the sound as well as the spelling.',
      },
      {
        wrong: 'Writing « une robe orangée » for an orange dress.',
        right: 'Writing « une robe orange ».',
        why: 'Orangée exists and means something closer to orange-ish, so this is not simply wrong, it is a different word. The colour orange itself never changes, because it is the fruit being borrowed.',
      },
      {
        wrong: 'Writing « une porte blance ».',
        right: 'Writing « une porte blanche ».',
        why: 'Blanc is the one colour whose feminine changes more than the ending: the silent c becomes a ch you pronounce. Blance is not a word and does not sound like anything, so this one gets noticed immediately.',
      },
      {
        wrong: 'Writing « des yeux verts foncés ».',
        right: 'Writing « des yeux vert foncé ».',
        why: 'Once a colour is built from two words it stops changing, so neither half takes an ending. This looks like being careful twice over, and it is the same instinct that puts the s on marron.',
      },
    ],
  },

  {
    type: 'reading',
    id: 's17-reading',
    title: 'The Lost Property Board',
    frSub: 'Les objets trouvés',
    layer: 'core',
    terms: ['agreement', 'borrowedNoun', 'writtenNotHeard'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage, which draws the
    // underlines) only when this flag is set WITH questions.
    questionsInModal: true,
    say: 'Four notices, and the colour is the only word doing any work in any of them.',
    // Paul's A1 rule: anything not inside « » is in English. ONE BLOCK, NO LINE
    // BREAKS. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline is
    // consumed as whitespace and silently discarded.
    text:
      'The lost property board by the pool entrance is the only place in the building where everybody writes in full sentences, because a colour is the only thing separating one lost jacket from another. '
      + '« La veste verte est à moi. » '
      + 'That one has been there three weeks and nobody has claimed it, which is either very sad or means the owner has moved away. '
      + 'Underneath it somebody has pinned a note about a bag, and they have been careful with it. '
      + '« Mon sac est marron. » '
      + 'No ending on the colour, which is right, and it is the detail that tells you the writer has been here a while. '
      + 'A third note is about shoes, and whoever wrote it added an s to the colour the way you would to anything else. '
      + '« Les chaussures sont marrons. » '
      + 'Nobody has corrected it, nobody will, and the shoes will find their owner regardless, because the s changes nothing you can hear. '
      + 'The last one is the shortest and the only one with a phone number on it. '
      + '« Les gants sont violets. »',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words (MAX_GLOSS_WORDS).
    // Longest match wins, WHICH MEANS AN ENTRY CAN BE SHADOWED OUT OF EXISTENCE:
    // a1.08 shipped two entries that could never underline anything because
    // every occurrence sat inside a longer key. Checked here by running the real
    // segmentSentence in the test and comparing matched KEYS rather than text.
    //
    // No entry is a prefix of another: « la veste verte », « mon sac est
    // marron », « sont marrons » and « sont violets » do not overlap.
    glossary: [
      { word: 'la veste verte', en: 'the green jacket', note: 'A jacket is the une kind, so the colour took an e. You can hear this one: verte says its t.' },
      { word: 'mon sac est marron', en: 'my bag is brown', note: 'No ending, and that is correct. Marron never changes, whatever it is describing.' },
      { word: 'sont marrons', en: 'are brown (with an ending that should not be there)', note: 'The s should not be here. It is inaudible, so only a reader ever catches it.' },
      { word: 'sont violets', en: 'are purple', note: 'Gloves are masculine and plural, so violet takes an s. The s is silent, as every plural s is.' },
    ],
    questions: [
      { q: 'Two of the four notices are about brown things. What is different about how they are written?', a: 'The bag note leaves marron with no ending, which is correct. The shoes note adds an s. Marron is a chestnut being used as a colour and keeps the shape it had as a nut, so it never takes an ending no matter how many shoes there are.' },
      { q: 'Could you tell the two brown notices apart if somebody read them out loud to you?', a: 'No. The s on marrons is silent, exactly like every other plural s on a colour, so the two sentences are identical in sound. This is why the error survives: nobody hears it, so nobody corrects it.' },
      { q: 'The first and last notices both have endings on the colour. Why are they different endings?', a: 'The jacket is one feminine thing, so verte takes an e. The gloves are several masculine things, so violets takes an s. The ending comes from the thing being described, not from the colour.' },
    ],
  },

  /* ── Act 6: prove it ──────────────────────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's18-words',
    title: 'The Colours, Banked',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['agreement', 'borrowedNoun', 'wakesUp'],
    sheetId: 'sheet.a1.13.forms',
    say: 'Three decks. The twelve names, the feminines worth knowing, and the two that never move.',
    themes: [
      {
        title: 'the twelve',
        cards: THE_TWELVE.map((c) => ({ fr: c, sub: sub(c), en: IN_ENGLISH[c] })),
      },
      {
        title: 'the feminines',
        cards: EAR_PAIRS.map((p) => ({
          fr: p.f,
          sub: sub(p.f),
          en: p.audible ? `${p.m} → ${p.f}, and you hear it` : `${p.m} → ${p.f}, same sound`,
        })),
      },
      {
        title: 'the ones that never change',
        cards: [
          { fr: 'marron', sub: sub('marron'), en: 'brown, and a chestnut' },
          { fr: 'orange', sub: sub('orange'), en: 'orange, and a fruit' },
          { fr: 'vert pomme', sub: sub('vert pomme'), en: 'apple green, two words' },
          { fr: 'vert foncé', sub: sub('vert foncé'), en: 'dark green, two words' },
        ],
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's19-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Say the French out loud, ending and all, before you flip.',
    cards: [
      ...THE_TWELVE.map((c) => ({ front: IN_ENGLISH[c], back: c, say: c })),
      { front: 'green, describing a jacket', back: 'verte', say: 'verte' },
      { front: 'grey, describing a shirt', back: 'grise', say: 'grise' },
      { front: 'white, describing a house', back: 'blanche', say: 'blanche' },
      { front: 'purple, describing a flower', back: 'violette', say: 'violette' },
      { front: 'blue, describing a jacket', back: 'bleue', say: 'bleue' },
      { front: 'black, describing a jacket', back: 'noire', say: 'noire' },
      { front: 'My jacket is green.', back: frOf('fr.a1.couleurs.260'), say: frOf('fr.a1.couleurs.260') },
      { front: 'My jackets are green.', back: frOf('fr.a1.couleurs.262'), say: frOf('fr.a1.couleurs.262') },
      { front: 'The shoes are brown.', back: frOf('fr.a1.couleurs.271'), say: frOf('fr.a1.couleurs.271') },
      { front: 'The shoes are red.', back: frOf('fr.a1.couleurs.049'), say: frOf('fr.a1.couleurs.049') },
      { front: 'The curtains are orange.', back: frOf('fr.a1.couleurs.094'), say: frOf('fr.a1.couleurs.094') },
      { front: 'My bag is black and my jacket is black.', back: frOf(BOTH_GENDERS_ID), say: frOf(BOTH_GENDERS_ID) },
    ],
  },

  {
    type: 'dictation',
    id: 's20-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // Every target is short enough to stay in LETTERS mode, which is the only
    // mode that can test an agreement ending: word mode hands the learner each
    // whole word as a pre-spelled tile. Measured through the real dicteeMode in
    // the batch, the merge and the test. See the header.
    say: 'Five lines. On four of them the ending you write is one you cannot hear, and on two of them there is no ending at all.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's21-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // The only practice mission in the lesson, deliberately. sons.06 ships two
    // doing the same job and it reads as a repeat. `practice.skill` is authored
    // and read by no component: PracticeVFView takes itemIds and nothing else.
    say: 'The twelve, the four feminines and the whole grid. Half of these sound identical to each other, which is the point.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's22-scenario',
    title: 'Selling The Rest Of It',
    frSub: 'On vend le reste',
    layer: 'core',
    terms: ['agreement', 'borrowedNoun'],
    say: 'One exchange, and you hold up your half. Every turn turns on which shape the colour takes.',
    setting: 'The same neighbourhood group, a week later. Salomé is back, and this time she wants the rest of the wardrobe.',
    // Every turn carries `userEn` and at least two `alts`, which
    // scenario.logic.ts requires of the whole seed. A reveal with no translation
    // shows the learner the one sentence comprehension matters on and asks them
    // to read it; a single accepted answer makes a conversation a cloze test.
    //
    // Apostrophes are straight throughout. The suite fails a conversation that
    // mixes straight and curly apostrophes in one bubble stack.
    turns: [
      {
        ai: 'Salut ! Tu vends encore des choses ? Je cherche une veste.',
        en: 'Hi! Are you still selling things? I am looking for a jacket.',
        user: 'Oui. Ma veste est verte.',
        userEn: 'Yes. My jacket is green.',
        alts: [
          { fr: 'Oui, j\'ai une veste verte.', en: 'Yes, I have a green jacket.' },
          { fr: 'Oui. La veste est verte.', en: 'Yes. The jacket is green.' },
        ],
      },
      {
        ai: 'Parfait. Et le sac sur la photo, il est de quelle couleur ?',
        en: 'Perfect. And the bag in the photo, what colour is it?',
        user: 'Mon sac est marron.',
        userEn: 'My bag is brown.',
        alts: [
          { fr: 'Il est marron.', en: 'It is brown.' },
          { fr: 'Le sac est marron.', en: 'The bag is brown.' },
        ],
      },
      {
        ai: 'Marron, d\'accord. Et tu as des chaussures aussi ? De quelle couleur ?',
        en: 'Brown, alright. And do you have shoes as well? What colour?',
        user: 'Les chaussures sont marron.',
        userEn: 'The shoes are brown.',
        alts: [
          { fr: 'Elles sont marron aussi.', en: 'They are brown as well.' },
          { fr: 'J\'ai des chaussures marron.', en: 'I have brown shoes.' },
        ],
      },
      {
        ai: 'Et les vestes, il y en a d\'autres ? Bleues, peut-etre ?',
        en: 'And the jackets, are there others? Blue ones, maybe?',
        user: 'Oui, mes vestes sont bleues.',
        userEn: 'Yes, my jackets are blue.',
        alts: [
          { fr: 'J\'ai deux vestes bleues.', en: 'I have two blue jackets.' },
          { fr: 'Oui, elles sont bleues.', en: 'Yes, they are blue.' },
        ],
      },
      {
        ai: 'Je prends tout. Tu es sur que les chaussures ne sont pas marrons ?',
        en: 'I will take everything. Are you sure the shoes are not marrons?',
        user: 'Marron, sans s. Les marrons, ça se mange.',
        userEn: 'Marron, without an s. Marrons are something you eat.',
        alts: [
          { fr: 'Non, marron sans s.', en: 'No, marron without an s.' },
          { fr: 'Sans s ! Les marrons sont des fruits.', en: 'Without an s! Marrons are a fruit.' },
        ],
      },
    ],
  },

  {
    type: 'reviewDeck',
    id: 's23-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['agreement', 'borrowedNoun', 'writtenNotHeard'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'A jacket is feminine. What happens to the colour vert?', back: `${frOf('fr.a1.couleurs.260')} It takes an e, and you hear the t wake up.`, say: frOf('fr.a1.couleurs.260') },
      { front: 'Several jackets, and the colour is bleu. What do you write?', back: `${frOf('fr.a1.couleurs.266')} An e and an s, and neither one is audible.`, say: frOf('fr.a1.couleurs.266') },
      { front: 'Several shoes, and the colour is marron.', back: `${frOf('fr.a1.couleurs.271')} ${REFRAME}`, say: frOf('fr.a1.couleurs.271') },
      { front: 'Why does marron never change?', back: 'It is a chestnut being used as a colour, and the nut keeps its own shape.', say: 'marron' },
      { front: 'Why does orange never change?', back: 'Same reason. It is a fruit, and une orange is still a thing you can eat.', say: 'orange' },
      { front: 'Can you hear the plural s on a colour?', back: 'Never. Not on any colour, not ever. It exists only on the page.', say: 'verts' },
      { front: 'Which two of the twelve have a feminine you cannot hear at all?', back: 'bleu and noir. Bleue and noire are identical to bleu and noir.', say: 'bleue, noire' },
      { front: 'The feminine of blanc.', back: 'blanche, not blance. The silent c turns into a ch you say out loud.', say: 'blanche' },
      { front: 'The feminine of violet.', back: 'violette. The t wakes up and the spelling doubles it.', say: 'violette' },
      { front: 'The feminine of gris.', back: 'grise. The silent s comes back as a z sound.', say: 'grise' },
      { front: 'What happens to a colour made of two words, like vert pomme?', back: `${frOf('fr.a1.couleurs.123')} Nothing. Two-word colours never change.`, say: frOf('fr.a1.couleurs.123') },
      { front: 'Where does the colour go, before or after the thing?', back: `${frOf('fr.a1.couleurs.001')} After it, every time.`, say: frOf('fr.a1.couleurs.001') },
    ],
  },

  {
    type: 'progressCheck',
    id: 's24-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to be
    // wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched a sale nearly fall through over one silent letter, learned twelve colours attached to things you can already name, and met the idea that a describing word changes shape to match what it describes, which nothing before this lesson has asked of you. You have seen one colour take four shapes and another take none, found out that most of those shapes sound identical and that no amount of listening will separate them, and worked out why two of the twelve refuse to move at all. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's25-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    rounds: [
      {
        id: 'r1-the-names',
        label: 'The twelve names',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round, and
        // the batch, the merge and the test all assert it.
        targets: ['err-wrong-colour', 'err-no-agreement'],
        say: 'The names, quickly.',
        questions: [
          {
            q: 'Listen. Which colour is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'jaune' },
            opts: ['jaune', 'rouge', 'beige', 'rose'],
            correct: 0,
            why: 'jaune. It is the one colour in this lesson whose n is a real consonant you pronounce rather than a nasal ending, so it sounds closer to the English word zone than to anything nasal.',
            ref: 's04-twelve',
          },
          {
            q: 'Which of these is the word for white?',
            format: 'mcq',
            opts: ['blond', 'blanc', 'bleu', 'beige'],
            correct: 1,
            why: 'blanc. Its final c is silent and the vowel is nasal, so it sounds like blahn with no n you actually say. Bleu is blue and beige is beige, and both start the same way, which is what makes this cluster worth a second look.',
            ref: 's04-twelve',
          },
          {
            // Accepts ONE form. An earlier draft accepted rouge and rouges
            // together, which in an agreement lesson marks the thing being
            // tested as not mattering. This is the names round, so the bare
            // name is the answer and the plural is a different question.
            q: 'Write the French word for red.',
            format: 'typeIn',
            accept: ['rouge'],
            answer: 'rouge',
            why: 'rouge. It is one of the four colours that already end in an e, so the feminine asks nothing of it and only a plural s is ever added to it.',
            ref: 's04-twelve',
          },
          {
            q: 'Which colour is named after something you can eat?',
            format: 'mcq',
            opts: ['violet', 'gris', 'noir', 'orange'],
            correct: 3,
            why: 'orange, and marron is the other one. Both were things before they were colours, which is exactly why neither of them ever takes an ending.',
            ref: 's06-families',
          },
        ],
      },
      {
        id: 'r2-make-it-match',
        label: 'Making it match',
        targets: ['err-no-agreement', 'err-wrong-colour'],
        say: 'The thing decides the shape.',
        questions: [
          {
            q: 'Une jupe is feminine. You want to say the skirt is green. What do you write?',
            format: 'mcq',
            opts: [
              'Une jupe vert.',
              'Une jupe verts.',
              'Une jupe verte.',
              'Une verte jupe.',
            ],
            correct: 2,
            why: 'Une jupe verte. The colour takes an e because the skirt is the une kind, and it sits after the thing rather than in front of it the way English would put it.',
            ref: 's03-idea',
          },
          {
            q: 'Fix this. « Les voitures sont noir. »',
            format: 'errorSpot',
            accept: ['Les voitures sont noires.', 'les voitures sont noires', 'noires'],
            answer: 'Les voitures sont noires.',
            why: 'Several feminine things, so the colour takes an e and an s. Neither of them is audible, which is why this sentence sounds completely correct as it stands and is still wrong on the page.',
            ref: 's09-sort',
          },
          {
            q: 'Mes vestes are feminine and plural, and the colour is bleu. Write the colour.',
            format: 'typeIn',
            accept: ['bleues', 'mes vestes sont bleues'],
            answer: 'bleues',
            why: 'bleues. The e is for the jackets being the une kind and the s is for there being more than one, in that order. All four shapes of bleu sound identical, so this had to be worked out rather than heard.',
            ref: 's07-grid',
          },
          {
            q: 'What decides which ending a colour takes?',
            format: 'mcq',
            opts: [
              'The thing being described',
              'The colour itself',
              'Where the colour sits in the sentence',
              'Whether you can hear the ending',
            ],
            correct: 0,
            why: 'The thing being described. Nothing about the colour has any say in it, which is why the same colour appears in four different shapes across four sentences that are otherwise identical.',
            ref: 's08-table',
          },
        ],
      },
      {
        id: 'r3-the-awkward-feminines',
        label: 'The feminines that change more',
        targets: ['err-wrong-feminine', 'err-no-agreement'],
        say: 'Four of the twelve do something extra.',
        questions: [
          {
            // typeIn rather than mcq, deliberately. fold() keeps the final -e,
            // so the learner has to PRODUCE the irregular feminine rather than
            // recognise it among distractors, and blance is exactly the form
            // they would produce if they had not met this one.
            q: 'La porte is feminine and the colour is blanc. Write the colour.',
            format: 'typeIn',
            accept: ['blanche', 'la porte blanche'],
            answer: 'blanche',
            why: 'blanche. It is the only colour here whose feminine changes the consonant rather than adding to it, and unlike most feminines you can hear this one clearly. blance is not a word.',
            ref: 's06-families',
          },
          {
            q: 'Write the feminine of violet.',
            format: 'typeIn',
            accept: ['violette', 'une violette'],
            answer: 'violette',
            why: 'violette, with two t letters. The silent t of violet wakes up and the spelling doubles it, so violete would be both misspelled and mispronounced.',
            ref: 's11-ear',
          },
          {
            q: 'Fix this. « Sa chemise est gris. »',
            format: 'errorSpot',
            accept: ['Sa chemise est grise.', 'sa chemise est grise', 'grise'],
            answer: 'Sa chemise est grise.',
            why: 'grise. A shirt is the une kind, so the colour takes an e, and here the e wakes the sleeping s into a z sound. This is one of the few agreement errors you can actually hear.',
            ref: 's09-sort',
          },
          {
            q: 'Which of these feminines does NOT change the sound of the word?',
            format: 'mcq',
            opts: ['verte', 'grise', 'noire', 'blanche'],
            correct: 2,
            why: 'noire. It sounds exactly like noir. The other three all wake a letter that was silent: verte says its t, grise says its s as a z, and blanche turns its c into a ch.',
            ref: 's12-hear',
          },
        ],
      },
      {
        id: 'r4-what-you-cannot-hear',
        label: 'What you cannot hear',
        targets: ['err-hears-the-plural', 'err-no-agreement'],
        say: 'Half of this lesson is invisible to your ear.',
        questions: [
          {
            // A REAL ear question whose correct answer is that the two are
            // identical. NOT a plural: no listenChoose in this lesson has an
            // answer set differing only by a silent -s.
            q: 'Listen to these two: « bleu » then « bleue ». What is the difference?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'bleu-bleue-pair' },
            opts: [
              'The second one is longer',
              'The second one ends in a soft sound',
              'There is no difference, they sound identical',
              'The second one is higher',
            ],
            correct: 2,
            why: 'They are identical. Bleu ends in a vowel sound already, so the feminine e adds nothing your ear can pick up. If you thought you heard a difference, that is the spelling you were expecting rather than the sound.',
            ref: 's12-hear',
          },
          {
            q: 'How many of the four shapes of vert can you tell apart by ear?',
            format: 'mcq',
            opts: ['all four', 'three', 'two', 'none'],
            correct: 2,
            why: 'Two. Vert and verts are one sound, verte and vertes are another, and the plural s is never pronounced on any of them. So your ear separates the masculine from the feminine and can do nothing at all about the number.',
            ref: 's13-silent',
          },
          {
            q: 'Mes sacs are masculine and plural, and the colour is vert. Write the colour.',
            format: 'typeIn',
            accept: ['verts', 'mes sacs sont verts'],
            answer: 'verts',
            why: 'verts. It sounds exactly like vert, because the plural s on a colour is never pronounced, so the only reason to write it is that there is more than one bag.',
            ref: 's13-silent',
          },
          {
            q: 'You are listening carefully and still cannot hear whether somebody said bleue or bleues. What does that mean?',
            format: 'mcq',
            opts: [
              'Your listening needs more practice',
              'The information is not in the sound at all',
              'The speaker was not articulating clearly',
              'You need to slow the recording down further',
            ],
            correct: 1,
            why: 'The information is genuinely not there. A native speaker cannot hear it either, and works the ending out from the thing being described exactly as you have to. Slowing the audio down will never help with this one.',
            ref: 's13-silent',
          },
        ],
      },
      {
        id: 'r5-the-two-that-refuse',
        label: 'The two that never change',
        targets: ['err-agrees-invariable', 'err-no-agreement'],
        say: 'The half of the lesson people remember wrongly.',
        questions: [
          {
            q: 'You are writing an ad for brown shoes. What goes in it?',
            format: 'mcq',
            opts: [
              'des chaussures marrons',
              'des chaussures marronnes',
              'des chaussures marronne',
              'des chaussures marron',
            ],
            correct: 3,
            why: `marron, with nothing added. ${REFRAME} It is a chestnut being used as a colour, and the s on the first option is the single most noticeable written error in this lesson.`,
            ref: 's15-marron',
          },
          {
            q: 'Fix this. « Les rideaux sont oranges. »',
            format: 'errorSpot',
            accept: ['Les rideaux sont orange.', 'les rideaux sont orange', 'orange'],
            answer: 'Les rideaux sont orange.',
            why: 'orange, unchanged. The fruit takes an s when you are counting fruit, but the colour is the fruit being borrowed and there is nothing to count, so it stays exactly as it is.',
            ref: 's14-orange',
          },
          {
            q: 'Why does « des oranges » take an s while « des fleurs orange » does not?',
            format: 'mcq',
            opts: [
              'The first is a thing being counted, the second is a colour',
              'The first is feminine and the second is masculine',
              'The second is an exception with no reason behind it',
              'The second is plural and the first is singular',
            ],
            correct: 0,
            why: 'The first counts fruit, so it behaves like any other thing you can count. The second uses the fruit as a colour, and the flowers are what is plural rather than the oranges, so there is nothing for the s to attach to.',
            ref: 's14-orange',
          },
          {
            q: 'La table is feminine and the colour is marron. Write the colour.',
            format: 'typeIn',
            accept: ['marron', 'la table marron'],
            answer: 'marron',
            why: 'marron, unchanged. A feminine thing in front of it makes no difference at all, and marronne is not a word. This is the same answer you would give for a masculine thing, a plural, or anything else.',
            ref: 's15-marron',
          },
        ],
      },
      {
        id: 'r6-two-word-colours',
        label: 'Colours made of two words',
        targets: ['err-compound-agrees', 'err-agrees-invariable'],
        say: 'The last round, and you already know the answer to all of it.',
        questions: [
          {
            q: 'Fix this. « Les murs sont verts pommes. »',
            format: 'errorSpot',
            accept: ['Les murs sont vert pomme.', 'les murs sont vert pomme', 'vert pomme'],
            answer: 'Les murs sont vert pomme.',
            why: 'Neither half takes an ending. Once a colour is built from two words it has become a description of a thing rather than a plain colour, so the same rule that stops marron moving stops this one too.',
            ref: 's15-marron',
          },
          {
            q: 'Say this out loud: the shoes are brown.',
            format: 'speak',
            // `target` is what the mic scores against and is required for this
            // format. Deliberately the same string the learner would WRITE, so
            // the card makes its own point: saying it correctly proves nothing
            // about whether the s is there.
            target: 'Les chaussures sont marron.',
            answer: 'Les chaussures sont marron.',
            accept: ['Les chaussures sont marron.', 'les chaussures sont marron'],
            why: 'Nothing in the sound tells anybody whether you wrote the s or not, which is exactly why this is the error that survives. Saying it correctly and writing it correctly are two separate skills here.',
            ref: 's15-marron',
          },
          {
            q: 'Write the French for dark green eyes. The word for eyes is yeux.',
            format: 'typeIn',
            accept: ['des yeux vert foncé', 'yeux vert foncé'],
            answer: 'des yeux vert foncé',
            why: 'Neither half changes. Adding the endings looks like being careful, and it is the same instinct that puts an s on marron: a rule applied in the one place it does not reach.',
            ref: 's16-traps',
          },
          {
            q: 'What do marron, orange and vert pomme have in common?',
            format: 'mcq',
            opts: [
              'They are all shades of brown',
              'They are all borrowed from other languages',
              'They are all irregular and must be memorised separately',
              'None of them is a plain colour word, so none of them changes',
            ],
            correct: 3,
            why: `${REFRAME} A nut, a fruit and a description of an apple. None of the three is a plain colour word, so the endings never reach them. One idea, not three things to memorise.`,
            ref: 's15-marron',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's26-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then what carries into the next unit.',
    body: 'You can name twelve colours, make them match the thing they describe, tell which endings you will ever hear, and leave the two that were something else alone. The second of those is the first time in this course that a describing word has changed shape, and it is not the last: the same mechanism is waiting for you on every adjective you meet from here. Basic adjectives are next, and everything in this lesson transfers to them unchanged.',
    points: [
      `${REFRAME} A nut and a fruit keep the shape they had.`,
      'The thing being described decides the ending, never the colour itself.',
      'The plural s is never pronounced, and on bleu and noir the feminine e is not either.',
      'The colour comes after the thing, and colours made of two words never move at all.',
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
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's24-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.13.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Colours learned', v: String(THE_TWELVE.length) },
    { k: 'Shapes each one takes', v: '4' },
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson: three missions on the
 * twelve names and the rest on agreement and the invariables. The brief is
 * explicit: "Weight the acts toward agreement and the invariables, not toward
 * the twelve names. If naming the colours is done in three missions, that is
 * correct."
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22.                                            */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Your first describing word',
    sections: ['s01-scene', 's02-goals', 's03-idea'],
    milestone: 'You have watched one silent letter nearly cost a sale.',
    estScreens: 22,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The colours',
    sections: ['s04-twelve', 's05-things', 's06-families'],
    milestone: 'Twelve colours, each stuck to something, in four groups that each mean something.',
    estScreens: 32,
    restPoints: ['s04-twelve/halfway', 's05-things/halfway'],
  },
  {
    id: 'act3',
    title: 'Four shapes',
    sections: ['s07-grid', 's08-table', 's09-sort', 's10-check'],
    milestone: 'One colour in four shapes, and one that has only ever had the one.',
    estScreens: 30,
    restPoints: ['s09-sort/halfway'],
  },
  {
    id: 'act4',
    title: 'What you hear, what you write',
    sections: ['s11-ear', 's12-hear', 's13-silent'],
    milestone: 'You know which endings reach your ear and which are only ever on the page.',
    estScreens: 24,
    restPoints: ['s12-hear/halfway'],
  },
  {
    id: 'act5',
    title: 'The two that never change',
    sections: ['s14-orange', 's15-marron', 's16-traps', 's17-reading'],
    milestone: 'Not two exceptions. One idea, and it covers the two-word colours as well.',
    estScreens: 34,
    restPoints: ['s15-marron/halfway', 's16-traps/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [
      's18-words', 's19-flash', 's20-dictation', 's21-speak', 's22-scenario',
      's23-review', 's24-progress', 's25-quiz', 's26-roundup',
    ],
    milestone: 'Lesson complete. Basic adjectives are next, and all of this transfers to them.',
    estScreens: 96,
    restPoints: [
      's19-flash/halfway', 's21-speak/halfway', 's23-review/halfway',
      's25-quiz/after-r2', 's25-quiz/after-r4',
    ],
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
 * legitimately overlap: the scene's sentence is also part of the marron grid.
 * The SRS keys on (itemId, modality), so releasing one card from two tranches
 * would take two ratings for one sentence. The first tranche to name an id keeps
 * it and the rest drop it, which is also the pedagogically right answer: an item
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
  // Act 1: the two sentences the SCENE ACTUALLY SHOWS, which are the jacket
  // line and the choice beat. Not the twelve colours: they are TAUGHT one per
  // screen in act 2, and a card released before its mission is a card the
  // learner is asked to rate before they have met it.
  once(['fr.a1.couleurs.260', 'fr.a1.couleurs.271']),
  // Act 2: the twelve, released the act that puts one on each screen.
  once(COLOURS),
  // Act 3: the grid. The authored paradigm, the four feminines it needs, the
  // wild sentences the sorting drill is built on, the one sentence carrying a
  // colour in both genders, and violet's four forms, which s09-sort now shows.
  once([...PARADIGM, ...FEMININES, ...FEMININES_REUSED, ...IN_THE_WILD, BOTH_GENDERS_ID, ...VIOLET_GRID_IDS]),
  // Act 4: the ear evidence. brun and brune are released HERE, the act that
  // shows them, rather than in act 2 beside the twelve they are not part of.
  once(BRUN_PAIR),
  // Act 5: the invariable case, both halves together. Releasing one half is
  // worse than releasing neither: a sentence where a colour refuses to agree,
  // with nothing to compare it against, reads as an arbitrary exception.
  once(INVARIABLE_EVIDENCE),
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
    throw new Error(`a1.13.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.13.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
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
 * Note that err-no-agreement and err-agrees-invariable are the same rule failing
 * in opposite directions, and both get their own trigger and drill. A lesson
 * that merged them would only ever remediate one of the two, and the second is
 * the one that arrives after the first has been fixed: a learner who has just
 * learned to add endings starts adding them to marron within a week.          */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-colour',
    description: 'Reaches for the wrong colour name, most often inside the blanc / bleu / beige cluster or between violet and rose.',
    detectOn: ['s04-twelve', 's05-things', 's25-quiz/r1-the-names'],
    drill: 'drill-twelve',
    retest: 'retest-twelve',
  },
  {
    id: 'err-no-agreement',
    description: 'Leaves the colour in its plain form on a feminine or plural thing. The default error, and the one every learner starts with because English never asks for this.',
    detectOn: ['s03-idea', 's07-grid', 's08-table', 's09-sort', 's25-quiz/r2-make-it-match'],
    drill: 'drill-agree',
    retest: 'retest-agree',
  },
  {
    id: 'err-wrong-feminine',
    description: 'Regularises a feminine that changes more than its ending: writes blance for blanche, or violete for violette.',
    detectOn: ['s06-families', 's10-check', 's16-traps', 's25-quiz/r3-the-awkward-feminines'],
    drill: 'drill-families',
    retest: 'retest-families',
  },
  {
    id: 'err-hears-the-plural',
    description: 'Believes the silent endings should be audible and concludes their listening is at fault. Costs confidence rather than accuracy, which is why it gets its own drill.',
    detectOn: ['s11-ear', 's12-hear', 's13-silent', 's25-quiz/r4-what-you-cannot-hear'],
    drill: 'drill-ear',
    retest: 'retest-ear',
  },
  {
    id: 'err-agrees-invariable',
    description: 'Puts an ending on marron or orange. The highest-value error in the lesson: inaudible, so nobody corrects it, and it is the first thing a French reader sees.',
    detectOn: ['s01-scene', 's14-orange', 's15-marron', 's16-traps', 's25-quiz/r5-the-two-that-refuse'],
    drill: 'drill-invariable',
    retest: 'retest-invariable',
  },
  {
    id: 'err-compound-agrees',
    description: 'Agrees one or both halves of a two-word colour: writes des yeux verts foncés. The same instinct as the s on marron, arriving one step later.',
    detectOn: ['s16-traps', 's25-quiz/r6-two-word-colours'],
    drill: 'drill-compound',
    retest: 'retest-compound',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-twelve',
    title: 'English in, French out',
    format: 'flashcard',
    coach: 'The English is on the left. Say the French out loud before you turn the card, and keep the stress on the last syllable.',
    pairs: THE_TWELVE.map((c) => [IN_ENGLISH[c], c] as [string, string]),
  },
  {
    id: 'retest-twelve',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these means white?',
    opts: ['blanc', 'bleu', 'beige'],
    correct: 0,
    why: 'blanc. All three start with a b and the first two start with bl, which is what makes them worth saying out loud as a group rather than reading.',
  },
  {
    id: 'drill-agree',
    title: 'Match the colour to the thing',
    format: 'sort',
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    buckets: ['no ending', 'ends in -e', 'ends in -s', 'ends in -es'],
    items: [
      'fr.a1.couleurs.259', // Mon sac est vert.          no ending
      'fr.a1.couleurs.260', // Ma veste est verte.        -e
      'fr.a1.couleurs.261', // Mes sacs sont verts.       -s
      'fr.a1.couleurs.262', // Mes vestes sont vertes.    -es
      'fr.a1.couleurs.007', // Sa chemise est grise.      -e
      'fr.a1.couleurs.053', // Les voitures sont noires.  -es
    ],
    coach: 'Look at the thing being described, not at the colour. One of it or several? The un kind or the une kind? The ending follows from those two answers and from nothing else.',
  },
  {
    id: 'retest-agree',
    title: 'One more time',
    format: 'mcq',
    q: 'Mes vestes are feminine and plural. Which shape of bleu do they take?',
    opts: ['bleu', 'bleue', 'bleues'],
    correct: 2,
    why: 'bleues. An e for the jackets being the une kind and an s for there being more than one. None of it is audible, so it has to come from the thing.',
  },
  {
    id: 'drill-families',
    title: 'What does the feminine do?',
    format: 'sort',
    // The twelve headwords themselves, sorted into the four families. Built from
    // FAMILY_OF rather than listed, so the drill and the teaching cannot drift:
    // moving a colour between families in the corpus moves it here too.
    buckets: [
      FAMILY_LABEL['already-e'], FAMILY_LABEL['adds-e'],
      FAMILY_LABEL['changes-more'], FAMILY_LABEL.invariable,
    ],
    items: (['already-e', 'adds-e', 'changes-more', 'invariable'] as const)
      .flatMap((f) => coloursIn(f).map((c) => COLOURS[THE_TWELVE.indexOf(c)])),
    coach: 'Say the feminine out loud before you place each one. If nothing changes it is already an e word; if you add an e it is the second group; if the word itself changes shape it is the third; and two of them never move at all.',
  },
  {
    id: 'retest-families',
    title: 'One more time',
    format: 'mcq',
    q: 'What is the feminine of blanc?',
    opts: ['blance', 'blanche', 'blanc'],
    correct: 1,
    why: 'blanche. The c becomes a ch, which is the only feminine in this lesson that changes a consonant rather than adding to it, and you can hear it clearly.',
  },
  {
    id: 'drill-ear',
    title: 'Heard, or only written',
    format: 'sort',
    // The six feminine HEADWORDS, sorted by whether the feminine is audible.
    // Headwords rather than sentences, so the learner is judging the word alone
    // with nothing around it to give the answer away. No plural is sortable
    // here, because every plural would go in the same bucket and a bucket
    // nothing can be wrong about is not a drill.
    buckets: ['you hear the feminine', 'it sounds identical'],
    items: [
      'fr.sons.muettes.049',  // verte     audible
      'fr.sons.couleurs.068', // grise     audible
      'fr.sons.muettes.054',  // blanche   audible
      'fr.sons.couleurs.069', // violette  audible
      'fr.sons.couleurs.066', // bleue     silent
      'fr.sons.couleurs.067', // noire     silent
    ],
    coach: 'Say the plain form, then the feminine, then the plain form again. If a letter arrived that was not there before, it goes on the left. If you said the same word twice, it goes on the right.',
  },
  {
    id: 'retest-ear',
    title: 'One more time',
    format: 'mcq',
    q: 'How much of a colour\'s plural can you hear?',
    opts: ['all of it', 'some of it, on some colours', 'none of it, ever'],
    correct: 2,
    why: 'None of it, on any colour, without exception. The plural s on a colour is never pronounced, so nothing in a recording could ever tell you a colour was plural.',
  },
  {
    id: 'drill-invariable',
    title: 'The thing, or the colour?',
    format: 'sort',
    // The whole invariable case as real sentences: two where the word is doing
    // its original job as a thing and agrees normally, and three where it is
    // being used as a colour and refuses. This is the drill the reframe is for.
    buckets: ['doing its job as a thing', 'being used as a colour'],
    items: [
      'fr.a1.adjectifs-essentiels.331', // Cette orange est bien mûre.        the fruit
      'fr.a1.marche.116',               // ...le prix des oranges.            the fruit, plural
      'fr.a1.couleurs.239',             // Elle aime les fleurs orange.       the colour
      'fr.a1.couleurs.235',             // La table marron vient d'Italie.    the colour, f
      'fr.a1.couleurs.234',             // Les chaussures marron...           the colour, pl
    ],
    coach: 'Ask what the word is naming. If it is naming a fruit you could eat or a nut you could hold, it behaves like any other thing and takes its endings. If it is only telling you what colour something else is, it keeps the shape it had and takes nothing.',
  },
  {
    id: 'retest-invariable',
    title: 'One more time',
    format: 'mcq',
    q: 'How do you write "brown shoes"?',
    opts: ['des chaussures marron', 'des chaussures marrons', 'des chaussures marronnes'],
    correct: 0,
    why: 'marron, with nothing added. It is a chestnut being used as a colour and the nut keeps its own shape, so no thing in front of it will ever make it move.',
  },
  {
    id: 'drill-compound',
    title: 'One word, or two?',
    format: 'sort',
    // Four sentences, all describing PLURAL things, so the sorting turns on the
    // colour alone. Two took an ending and two did not, and the only difference
    // between them is that the second pair is built from two words.
    buckets: ['the colour took an ending', 'the colour did not move'],
    items: [
      'fr.a1.couleurs.049', // Les chaussures sont rouges.   one word, agreed
      'fr.a1.couleurs.077', // Les portes sont blanches.     one word, agreed
      'fr.a1.couleurs.123', // Les murs sont vert pomme.     two words, refused
      'fr.a1.couleurs.125', // Ses yeux sont vert foncé.     two words, refused
    ],
    coach: 'Every one of these describes more than one thing, so the number is not what decides it. Count the words in the colour. One word and it agrees; two words and it has stopped being a plain colour, so it does not.',
  },
  {
    id: 'retest-compound',
    title: 'One more time',
    format: 'mcq',
    q: 'How do you write "dark green eyes"?',
    opts: ['des yeux verts foncés', 'des yeux vert foncé', 'des yeux verts foncé'],
    correct: 1,
    why: 'Neither half moves. Once the colour is two words it works the same way marron does, so adding endings to either part is the same error in a new place.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Three, and each exists for a layout reason as much as a pedagogical one.
 * `tapTable` is not in ownsLayout(), so the in-flow tables render inside a
 * scrolling page and anything past about nine rows runs off the fold and takes
 * its chrome with it. s08-table carries three rows because it is four columns
 * wide; the full twelve-colour version lives here.
 *
 * This is also where a learner will be a week from now, halfway through basic
 * adjectives, wanting the four forms beside them. Layer 'deep' exempts these
 * from the core density caps, which is the point: a sheet is allowed to be
 * dense, and a `table` section is only legal here.
 *
 * The brief asks for exactly this: "A reference sheet with the colours in four
 * forms and the invariable rule. It is what a learner returns to during a1.14
 * and a1.16. Wire the sheetId early."                                        */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.13.forms',
    title: 'All twelve, in four forms',
    layer: 'deep',
    contains: ['Every colour in all four shapes', 'What the feminine does to each', 'The four families'],
    sections: [
      {
        type: 'table',
        id: 'sheet-forms-table',
        title: 'The four shapes',
        layer: 'deep',
        cols: ['one, m.', 'one, f.', 'several, m.', 'several, f.'],
        rows: THE_TWELVE.map((c) => {
          const forms: Record<string, [string, string, string, string]> = {
            rouge: ['rouge', 'rouge', 'rouges', 'rouges'],
            bleu: ['bleu', 'bleue', 'bleus', 'bleues'],
            vert: ['vert', 'verte', 'verts', 'vertes'],
            jaune: ['jaune', 'jaune', 'jaunes', 'jaunes'],
            noir: ['noir', 'noire', 'noirs', 'noires'],
            blanc: ['blanc', 'blanche', 'blancs', 'blanches'],
            gris: ['gris', 'grise', 'gris', 'grises'],
            rose: ['rose', 'rose', 'roses', 'roses'],
            orange: ['orange', 'orange', 'orange', 'orange'],
            violet: ['violet', 'violette', 'violets', 'violettes'],
            marron: ['marron', 'marron', 'marron', 'marron'],
            beige: ['beige', 'beige', 'beiges', 'beiges'],
          };
          return forms[c];
        }),
      },
      {
        type: 'cheatSheet',
        id: 'sheet-forms-families',
        title: 'The four families',
        layer: 'deep',
        rows: [
          { k: FAMILY_LABEL['already-e'], v: `${coloursIn('already-e').join(', ')}. The feminine asks nothing of these; only the plural s is ever added.`, say: coloursIn('already-e').join(', ') },
          { k: FAMILY_LABEL['adds-e'], v: `${coloursIn('adds-e').join(', ')}. Add an e for the feminine. You hear it on vert and gris and not on bleu or noir.`, say: coloursIn('adds-e').join(', ') },
          { k: FAMILY_LABEL['changes-more'], v: `${coloursIn('changes-more').join(', ')}. blanc becomes blanche and violet doubles its t to become violette. Both are audible.`, say: 'blanche, violette' },
          { k: FAMILY_LABEL.invariable, v: `${INVARIABLE.join(', ')}. Never change, in any position, because both were things before they were colours.`, say: INVARIABLE.join(', ') },
          { k: 'gris in the masculine plural', v: 'gris already ends in s, so the masculine plural adds nothing: un sac gris, des sacs gris. The feminine still adds its own e.', say: 'gris, grise, gris, grises' },
        ],
      },
    ],
  },
  {
    id: 'sheet.a1.13.sound',
    title: 'What you can hear',
    layer: 'deep',
    contains: ['Every pair, audible or not', 'Why the plural is always silent', 'What to do instead of listening'],
    sections: [
      {
        type: 'table',
        id: 'sheet-sound-table',
        title: 'Can you hear the feminine?',
        layer: 'deep',
        cols: ['plain', 'feminine', 'sounds like', 'can you hear it'],
        rows: EAR_PAIRS.map((p) => [
          p.m,
          p.f,
          `${sub(p.m)} → ${sub(p.f)}`,
          p.audible ? `yes, ${p.what}` : 'no, identical',
        ]),
      },
      {
        type: 'teach',
        id: 'sheet-sound-why',
        title: 'Why half of this is invisible',
        layer: 'deep',
        body: 'French stopped pronouncing most of its final consonants a long time ago and kept writing them, which is the single fact behind almost everything strange about French spelling. The plural s on a colour is one of those. It is never pronounced, on any colour, in any position, so a recording of a plural colour and a recording of its singular are the same recording. Nothing about listening more carefully will change this, and a learner who believes the difference is there and that they simply cannot hear it will spend months concluding something untrue about their own ears. The feminine e is a different case and it is worth understanding rather than memorising. An e written after a consonant makes that consonant get pronounced again, because it is no longer at the end of the word. That is why vert is said without its t and verte says the t clearly, why gris hides its s and grise brings it back as a z, and why violet doubles and sounds its t in violette. It also explains the two that do nothing: bleu and noir already end in a vowel sound, so there is no sleeping consonant for the e to wake up, and bleue and noire are identical to bleu and noir in every way except on the page. You met this exact mechanism in the silent letters lesson, where a final consonant sits quiet until something turns up behind it. The practical rule is short. Work the ending out from the thing being described, then write it. That is what a native speaker does, and it is why they make this mistake too when they are typing quickly.',
      },
    ],
  },
  {
    id: 'sheet.a1.13.invariable',
    title: 'The colours that never change',
    layer: 'deep',
    contains: ['marron and orange, and why', 'Two-word colours', 'What to write instead'],
    sections: [
      {
        type: 'cheatSheet',
        id: 'sheet-invariable-rows',
        title: 'What to write',
        layer: 'deep',
        rows: [
          { k: 'des chaussures marron', v: 'Never marrons. Des marrons is a bag of chestnuts, which is where the colour came from.', say: 'des chaussures marron' },
          { k: 'une table marron', v: 'Never marronne, which is not a word at all. A feminine thing changes nothing here.', say: 'une table marron' },
          { k: 'des fleurs orange', v: 'Never oranges. Des oranges is the fruit, and it takes an s only when you are counting fruit.', say: 'des fleurs orange' },
          { k: 'une robe orange', v: 'Never orangée. Orangée is a real word meaning orange-ish, so this one is a different word rather than a misspelling.', say: 'une robe orange' },
          { k: 'des yeux vert foncé', v: 'Neither half moves. Two-word colours have stopped being plain colours.', say: 'des yeux vert foncé' },
          { k: 'des murs vert pomme', v: 'Same again. Apple green is a description of an apple, and you are not counting apples.', say: 'des murs vert pomme' },
          { k: 'une veste bleu clair', v: 'A feminine thing and neither word moves, which looks wrong and is right.', say: 'une veste bleu clair' },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-invariable-why',
        title: 'One idea, not a list',
        layer: 'deep',
        body: 'Most courses hand you marron and orange as two exceptions and tell you to memorise them, which works for about a fortnight. There is a reason behind both of them and it is worth thirty seconds. Un marron is a chestnut and une orange is a fruit. Neither word started life as a colour: somebody described something as being the colour of a chestnut, the phrase got shortened, and the word carried on being a nut the whole time. So when you write des chaussures marron, what you are really writing is shoes the colour of a chestnut, and there is only one chestnut in that phrase no matter how many shoes there are. That is why the ending never arrives. The same reasoning covers every colour built out of two words, which is the part that makes this worth learning as an idea rather than a pair. Vert pomme is apple green, and the apple in it is one apple. Bleu clair is light blue, and clair is describing the blue rather than the thing. In both cases the colour has become a small description rather than a plain colour word, and descriptions of that kind do not take endings. Once you have this, you never have to ask whether a new compound colour agrees, because none of them do and you know why. The one thing worth watching is that both words also still exist in their original jobs, and there they behave completely normally. Des oranges takes an s because you are counting fruit. Des marrons glacés takes an s because you are counting nuts. If the word is naming a thing, it agrees like anything else; if it is standing in for a colour, it does not move.',
      },
    ],
  },
];

export const COULEURS_LESSON: Lesson = {
  id: 'a1.13.l1',
  unitId: 'a1.13',
  // The lesson's index WITHIN its unit, not its place in the track. Every lesson
  // in the seed is seq 1 because every unit ships exactly one so far, and the
  // `l1` in the id is this number.
  seq: 1,
  title: 'Les couleurs',
  level: 'a1',
  // SIXTEEN, from unit.seq. missions.ts derives the eyebrow at render time as
  // `${level} · LEÇON ${unit.seq}`, and a1.13 sits at seq 16. The stored value
  // is a fallback and has to agree with what the renderer computes, or the two
  // disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7).
  tag: 'A1 · LEÇON 16',
  intro:
    'Twelve colours, and the first describing word in this course that changes shape depending on what it is describing. This is how you name a colour, make it match the thing, know which endings you will ever hear, and leave the two that were something else alone.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The LESSON's own counter, not `seed.version`. seed.version is the OTA
  // snapshot number, derived by publish-content.ts as previous + 1, and a merge
  // must never hand-bump it.
  //
  // v1 was applied to Postgres and then this build found two items that were
  // declared, released to spaced repetition and drawn by NOTHING: the four
  // violet rows, and fr.a1.objets.124 released in act 3 while only appearing in
  // act 6's flashcards. a1-13-couleurs.test.ts caught both. v2 shows the violet
  // paradigm in s09-sort and moves the both-genders sentence into act 3 where
  // its tranche releases it.
  version: 2,

  grammarAssumed: [
    'Noun gender, and that un and une follow it, introduced in a1.03',
    'le, la, l\' and les, introduced in a1.04',
    'The plural of a noun, introduced in a1.03',
    'The full present of être, introduced in a1.06',
    'The full present of avoir, introduced in a1.07',
    'mon, ma and mes, introduced in a1.05',
    'That a final consonant is usually silent, and that a following e wakes it, introduced in sons.06',
    'The nasal vowels and the fact that a following vowel blocks them, introduced in sons.03',
  ],
  grammarIntroduced: [
    'Adjective agreement, introduced here for the first time in the course, through colour',
    'The feminine -e on an adjective, and the four colours where it is audible',
    'The plural -s on an adjective, which is never pronounced',
    'The combined feminine plural -es',
    'Irregular feminine formation: blanc to blanche, violet to violette',
    'Invariable colour adjectives derived from nouns: marron and orange',
    'Invariable compound colour adjectives: vert pomme, vert foncé, bleu clair',
    'The postposition of colour adjectives, stated as a fact and not as a system',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Colors',
    subFr: 'Les couleurs',
    introFr: 'Douze couleurs, et le premier mot de ce cours qui change de forme selon ce qu\'il décrit.',
    minutes: 26,
    difficulty: 2,
    glyph: '🎨',
    screens: 238,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: COULEURS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-13-couleurs.test.ts, the way a1.09's
    // rec-a1-09-pairs pins its own, because a constraint on how something is
    // recorded becomes invisible the moment the clip is delivered.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    // CLIP_MANIFEST is empty by design, so every card falls back to device TTS
    // until the studio delivers, and a recordingId resolving to nothing is the
    // correct shipping state.
    //
    // All five of the brief's colour-specific notes are written in explicitly.
    recorded: [
      {
        id: 'rec-a1-13-pairs',
        desc:
          'THE SINGLE MOST IMPORTANT NOTE IN THIS LESSON. EVERY MASCULINE / FEMININE PAIR IS ONE TAKE, one voice, '
          + 'one pace, the masculine immediately followed by its feminine with no gap and no reset: vert / verte, '
          + 'gris / grise, blanc / blanche, violet / violette, brun / brune. The ONLY difference the learner may '
          + 'hear is the ending. Recorded separately these become two performances and the learner hears the '
          + 'performance rather than the language. '
          + 'THE SILENT PAIRS MUST ALSO BE RECORDED AS PAIRS, IN THIS SAME TAKE: bleu / bleue and noir / noire. '
          + 'This matters MORE than the audible ones, not less, because the whole teaching is that NOTHING '
          + 'CHANGES. A reader who records bleue in a separate session will drift in pitch or length and invent a '
          + 'difference that is not in the language, and the learner will spend a year listening for it. Read '
          + 'bleu / bleue as if reading the same word twice, because that is what it is. Do not lengthen the '
          + 'second, do not add a breathy release, do not lift the pitch. The same applies to noir / noire. '
          + 'Keep every nasal closed: blanc is a nasal vowel with NO n sound behind it, and brun is a nasal that '
          + 'COLLAPSES in brune into a plain n plus a vowel, which is the most dramatic change in the set and '
          + 'should be read plainly rather than demonstrated.',
        clipIds: [
          'vert', 'verte', 'vert-verte-pair',
          'gris', 'grise', 'gris-grise-pair',
          'blanc', 'blanche', 'blanc-blanche-pair',
          'violet', 'violette', 'violet-violette-pair',
          'brun', 'brune', 'brun-brune-pair',
          'bleu', 'bleue', 'bleu-bleue-pair',
          'noir', 'noire', 'noir-noire-pair',
          'Ma veste est verte.', 'Mon sac est vert.',
        ],
      },
      {
        id: 'rec-a1-13-twelve',
        desc:
          'The twelve colours as ONE CONTINUOUS TAKE by one voice at one speed, in the deck order: rouge, bleu, '
          + 'vert, jaune, noir, blanc, gris, rose, orange, violet, marron, beige. Twelve colours recorded in '
          + 'twelve sessions are twelve performances, and any drift in pace or pitch teaches a difference between '
          + 'the recordings rather than a difference in French. Read them straight through with an even beat, then '
          + 'again slowly in the same take. JAUNE IS THE ONE TO WATCH: its n is a REAL CONSONANT and the word has '
          + 'no nasal vowel at all. It rhymes with the English zone. Do not nasalise it. The app respells it ZHON '
          + 'deliberately and a nasalised reading would contradict the card. blanc, marron and orange DO carry '
          + 'genuine nasal vowels and must be read with NO n or m sound behind them at all.',
        clipIds: [...THE_TWELVE],
      },
      {
        id: 'rec-a1-13-silent',
        desc:
          'THE PLURALS, AND THEY MUST NEVER BE RECORDED IN ISOLATION. A lone plural clip teaches nothing and '
          + 'implies a difference exists. Every plural here is recorded ONLY as the second half of a pair with its '
          + 'own singular, in one take, so the learner hears that nothing changed: vert / verts, verte / vertes, '
          + 'bleu / bleus, bleue / bleues. Read the two members of each pair as the same word twice, because they '
          + 'are the same word twice. There is no s sound in any of these and there must be no hint of one: no '
          + 'lengthening, no release, no breath. If a reader cannot resist marking the plural somehow, record the '
          + 'singular twice and use it for both, because that is a more truthful clip than a performed difference. '
          + 'Also record the four-way set bleu / bleue / bleus / bleues as one continuous take, which is the clip '
          + 'the card about all four sounding alike depends on.',
        clipIds: [
          'vert-verts-pair', 'verte-vertes-pair', 'bleu-bleus-pair', 'bleue-bleues-pair',
          'bleu-all-four', 'Mes sacs sont verts.', 'Mes vestes sont bleues.',
        ],
      },
      {
        id: 'rec-a1-13-invariable',
        desc:
          'marron and orange recorded AS COLOUR PHRASES, NOT BARE, so the invariability is heard in context: '
          + '« mon sac est marron », « ma veste est marron », « mes sacs sont marron », « les chaussures sont '
          + 'marron », « les rideaux sont orange », « elle aime les fleurs orange ». All four marron sentences are '
          + 'ONE TAKE, read one after another, because the entire teaching is that the colour is identical in all '
          + 'four and only the words around it move. Do not vary the colour at all between them. '
          + 'Then the contrast the lesson turns on, also one take: « le prix des oranges » immediately followed by '
          + '« elle aime les fleurs orange », so the fruit taking its s and the colour refusing one sit next to '
          + 'each other in the same voice. Finally « cette orange est bien mûre », where mûre agrees and orange '
          + 'does not, in the same sentence. Read every one of these plainly. Nothing here should sound like a '
          + 'demonstration.',
        clipIds: [
          'Mon sac est marron.', 'Ma veste est marron.', 'Mes sacs sont marron.', 'Mes vestes sont marron.',
          'Les chaussures sont marron.', 'Les rideaux sont orange.', 'Elle aime les fleurs orange.',
          'Le client demande le prix des oranges.', 'Cette orange est bien mûre.',
          'orange-fruit-colour-pair',
        ],
      },
      {
        id: 'rec-a1-13-things',
        desc:
          'The twelve colours attached to a thing, one take, one voice: les tomates rouges, les yeux bleus, les '
          + 'haricots verts, le citron jaune, les olives noires, la farine blanche, la souris grise, les fleurs '
          + 'roses, les rideaux orange, le raisin violet, les chaussures marron, le manteau beige. The thing comes '
          + 'first and the colour after it in every one, which is the pattern being absorbed rather than taught, '
          + 'so keep the phrasing even and do not pause between the noun and the colour. Several of these carry an '
          + 'agreement ending that is completely silent (rouges, bleus, verts, noires, roses): do not mark them.',
        clipIds: THE_TWELVE.map((c) => ON_A_THING[c].fr),
      },
      {
        id: 'rec-a1-13-traps',
        desc:
          'The five written traps, wrong version then right version, with a clear beat between them. Read EVERY '
          + 'wrong version plainly and at ordinary pace rather than comically. FOUR OF THE FIVE ARE ACOUSTICALLY '
          + 'IDENTICAL TO THEIR CORRECTION, which is the whole reason they are traps: « des chaussures marrons » '
          + 'and « des chaussures marron » are the same sound, and so are the compound pair and the orange pair. '
          + 'Do not try to make the wrong one sound wrong. Read both members of those pairs identically and let '
          + 'the screen carry the difference, because a reader who performs a distinction that does not exist '
          + 'teaches the learner to listen for something that will never be there. Only the « une jupe vert » / '
          + '« une jupe verte » pair genuinely differs in sound, and it should be read straight.',
        clipIds: ['trap-marrons', 'trap-jupe-vert', 'trap-orangee', 'trap-blance', 'trap-verts-fonces'],
      },
      {
        id: 'rec-a1-13-grid',
        desc:
          'The four-form grid, three colours, ONE TAKE EACH, read across the row: « mon sac est vert, ma veste est '
          + 'verte, mes sacs sont verts, mes vestes sont vertes », then the same four for bleu, then the same four '
          + 'for marron. Reading a row in one take is the entire point: the learner has to hear that the vert row '
          + 'changes once (at verte) and never again, that the bleu row never changes at all across four different '
          + 'spellings, and that the marron row is four identical words. Do not record these twelve sentences '
          + 'separately and do not vary the pace between rows, because the comparison is between rows as much as '
          + 'within them.',
        clipIds: ['vert-row', 'bleu-row', 'marron-row'],
      },
      {
        id: 'rec-a1-13-scene',
        desc:
          'The opening scene, French bubbles only, in the voice of a woman in her thirties reading messages at an '
          + 'ordinary texting pace rather than a teaching pace. The beat where Salomé asks about the chestnuts '
          + '(« Les marrons ? Pardon, tu vends des chaussures ou des marrons ? ») must be WARM AND AMUSED rather '
          + 'than corrective or pointed. She is teasing a neighbour, not marking homework, and any edge on that '
          + 'line turns the scene into a telling-off and loses the teaching. The final line, where she buys both '
          + 'items, is where warmth is allowed to show, because that is the reward for having fixed it.',
        clipIds: [
          'Les marrons ? Pardon, tu vends des chaussures ou des marrons ?',
          'Ah, les chaussures ! Je les prends. Et la veste verte aussi.',
        ],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const COULEURS_ITEM_IDS = ITEM_IDS;
export const COULEURS_SPEAK_IDS = SPEAK_IDS;
export const COULEURS_DICTATION_IDS = DICTATION_IDS;
export const COULEURS_TRANCHES = DECK_TRANCHE;
export const COULEURS_COLOUR_IDS = COLOURS;
export const COULEURS_PARADIGM_IDS = PARADIGM;
export const COULEURS_INVARIABLE_EVIDENCE_IDS = INVARIABLE_EVIDENCE;
export const COULEURS_WILD_IDS = IN_THE_WILD;

/* ─── The handover to a1.14 and a1.16 ──────────────────────────────────────
 *
 * The brief asks for this explicitly: "Whatever you establish, a1.14 and a1.16
 * inherit, the way a1.08 became the template for the calendar family. Build it
 * as a template. Say in your report what has landed."
 *
 * WHAT a1.14 (Basic Adjectives, seq 17) INHERITS AND SHOULD NOT REBUILD:
 *
 *   The four-form grid (s07-grid, s08-table, sheet.a1.13.forms) is built on one
 *   noun pair and three colours and is deliberately colour-agnostic in shape.
 *   grand / grande / grands / grandes drops straight into it.
 *
 *   The family split (s06-families) is by WHAT THE FEMININE DOES, not by
 *   meaning: already ends in -e, adds -e, changes more, never changes. Those
 *   four buckets hold every French adjective, not only colours.
 *
 *   The audible/silent distinction (act 4) is the transferable half and it is
 *   the half most courses skip. petit / petite wakes a t exactly as vert / verte
 *   does; joli / jolie is silent exactly as bleu / bleue is.
 *
 *   The three terms `agreement`, `writtenNotHeard` and `wakesUp` are written
 *   about adjectives in general and mention colour only in their examples.
 *
 *   AGREEMENT IS NOW INTRODUCED. a1.14 must NOT teach it as new. It should open
 *   by naming this lesson, the way a1.09 opens by naming a1.08.
 *
 * WHAT a1.16 (Adjective Placement, seq 18) STILL OWNS, UNTOUCHED:
 *
 *   Which side of the noun an adjective sits on, and the whole before/after
 *   system with it. This lesson states ONCE that colours follow the noun
 *   (the `afterTheNoun` term and one card in s03-idea) and shows it everywhere,
 *   and it never mentions that any adjective ever precedes its noun. Nothing
 *   about grand, petit, beau, jeune, vieux, bon or the BAGS/BANGS grouping
 *   appears anywhere in this lesson.
 *
 *   The batch, the merge and the test all assert that by name, against
 *   production surfaces rather than every string, so a legitimate mention in a
 *   comment cannot fire them.
 *
 * THE THEME BINDING, which the brief asks to be reported on:
 *
 *   a1.13 keeps its own declared `couleurs` and this build changes nothing about
 *   it. 322 published rows, and the merge carries 30 of them into the seed.
 *
 *   a1.14 declares `famille`, which is a theme about family members and has
 *   nothing to do with adjectives. That is almost certainly wrong and it is
 *   NOT fixed here, because rebinding another unit is that unit's build's
 *   decision. `adjectifs-essentiels` holds 632 published rows and is the obvious
 *   candidate. This lesson deliberately authored NOTHING into it, exactly as the
 *   brief instructs, so a1.14 arrives at a clean theme.
 *
 *   a1.16 declares no theme at all. `adjectifs-essentiels` would serve both, or
 *   a1.16 can stay unbound since placement is a rule rather than vocabulary.
 *
 * Named so the batch, the merge and the test can all assert that this lesson
 * teaches no other adjective and no placement rule. */
export const OTHER_ADJECTIVES = [
  'grand', 'grande', 'petit', 'petite', 'beau', 'belle', 'joli', 'jolie',
  'jeune', 'vieux', 'vieille', 'bon', 'bonne', 'mauvais', 'gros', 'nouveau',
];

/** Placement teaching this lesson must never put on a learner surface. a1.16
 *  owns all of it.
 *
 *  MULTI-WORD PHRASES ONLY, and that is deliberate. An earlier draft listed the
 *  BAGS and BANGS mnemonics as single words and the guard fired immediately on
 *  « My bags are green. », which is one of this lesson's own authored glosses.
 *  A single common word is not a safe probe for a teaching concept: the phrase
 *  is what carries the intent, and a guard that fires on legitimate content gets
 *  deleted rather than fixed. Invariant §6 warns about exactly this.
 *
 *  `mûre` is NOT here: it sits inside an imported corpus sentence where it is
 *  the evidence rather than the teaching. */
export const PLACEMENT_WORDS = [
  'before the noun', 'in front of the noun', 'precedes the noun',
  'goes before', 'comes before the', 'adjectives that go first',
  'bags mnemonic', 'bangs mnemonic',
];
