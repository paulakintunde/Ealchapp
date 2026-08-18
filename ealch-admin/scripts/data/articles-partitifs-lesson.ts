// a1.29.l1 "Les articles partitifs" — the mission journey.
//
// ── What this lesson is about, which is narrower than its title and wider
//    than its canDo ─────────────────────────────────────────────────────────
//
// The unit canDo is "Can ask for an unspecified amount of food or drink with
// du, de la and de l". That is a good use case and it is not the difficulty.
// The difficulty is a line English does not make you draw:
//
//     un café     one cup of coffee, a countable thing on a saucer
//     du café     coffee, the substance, an amount nobody has measured
//     le café     coffee in general, or the coffee we both know about
//
// English gives you "a coffee", "some coffee" and "the coffee", and deletes the
// middle one most of the time. So there is no instinct to transfer, and worse:
// a1.11 has just taught this learner that `un` means new to the listener.
// « Du café » is every bit as new to the listener. Newness is not what
// separates them. Countability is, and that is the reframe.
//
// Three forms is five minutes of work, so they get ONE drill mission (s04) and
// the weight goes where the learner will actually be wrong: the un/du choice
// (act 2, five missions), the quantity rule (act 3, four), and the `de + le`
// that is four fifths of the `du` in this corpus (act 4's opener).
//
// ── The handover from a1.11, which is the opening move ─────────────────────
//
// a1.11 taught `des` as one thing only, the plural of un and une, and its test
// asserts that du and de la appear on no production surface of that lesson. Its
// reference sheet closes on a note saying, in learner English, that des has a
// second life as a quantity word and that it is not started there.
//
// So mission 3 does not open on a table. It opens on « des légumes », which
// this learner already owns, and points out that the word has been doing a
// second job the whole time. `des` is not re-taught here: it is claimed, once,
// as the plural of the three forms this lesson is about, and the corpus row
// used to claim it (fr.a1.expressions-de-quantite.068) was already authored
// with exactly that gloss by somebody else.
//
// ── The prerequisite inconsistency, reported rather than fixed ─────────────
//
// prereqUnitIds is ["a1.04"], and this lesson leans on a1.11 for `des` and for
// the collapse to `de` under a negation. A learner can legitimately arrive here
// having done a1.04 and not a1.11.
//
// a1.04 is in much better shape than the brief for this lesson said: it was
// rebuilt to v3 on 2026-08-05 (24 missions, 6 acts, 22 round-based questions,
// a `why` on every one) and came OFF the waiver list in lesson-contract.test.ts
// the same day. Its reframe, "When English says nothing, French says le.", is
// the neighbour of this one rather than its rival. So the prereq chain is sound
// for `le`, and the two a1.11-specific ideas are re-established here in one
// card each rather than assumed:
//
//   `des`        s03-family, card 1, framed as a word the learner already has
//   `de` under a negative   s12-negation, which SAYS it is the same rule one
//                           noun-class further on rather than teaching it twice
//
// The unit is NOT silently changed. See the handover note.
//
// ── The theme binding, which was broken and is now not ─────────────────────
//
// a1.29 shipped `themes: ["nourriture"]`. Measured 2026-08-05: zero items carry
// that theme in Postgres and zero in seed.json. The Den renders a unit's theme
// chips as entry points into a themed deck, so the chip led nowhere.
//
// Rebound to `cuisine`, and the batch and the merge both print the change as
// its own line. The reasoning, since two other options were available:
//
//   REBIND, taken. `cuisine` holds 415 items, is inside the seed cut (so the
//   deck works offline on a first launch), and is where this corpus keeps its
//   real partitive sentences: je mange du pain, je bois du café, il ajoute du
//   sel dans la soupe.
//
//   DROP, as a1.03, a1.04 and a1.11 all do. Right for those three, wrong here.
//   Their canDos are about a grammatical choice; this unit's canDo says "food
//   or drink" out loud, so a topic chip is a promise the unit is already making
//   and dropping it would contradict the copy the Den displays.
//
//   CREATE `nourriture`, which means authoring a theme from nothing and adding
//   it to SEED_CUT.themes. Most work, and it duplicates `cuisine`.
//
// ── Layout decisions, each of which is a bug someone else already shipped ──
//
//   `commonErrors` carries `swipe: true, size: 'lg'`. Without `swipe`
//   MissionSection takes a fallback that returned undefined and drew a BLANK
//   mission (sons.08 m22, a1.01 m5).
//
//   `reading` carries `questionsInModal: true` WITH questions. That is the only
//   path that reaches PassagePage, and so the only path that draws the glossary
//   underlines. a1.01 shipped five entries down the other path.
//
//   ONE `quiz` section. lessonPager.logic.ts appends exactly one quiz page,
//   resolved with `sections.find(s => s.type === 'quiz')`.
//
//   No `autoplay` anywhere: declared in schema.ts, implemented in no component.
//   `audioFirst`, which ScenePlayer genuinely implements, is used on the break.
//
//   The reading passage is ONE BLOCK with no line breaks. PassagePage splits on
//   `text.split(/(?<=[.!?»])\s+/)` and renders the pieces inline, so an authored
//   `\n` is consumed as whitespace and silently discarded.
//
//   `tapTable` cells are three words or fewer. Its cells are `<TX style={{flex:
//   1}}>` inside a row, which is the flex-on-Text shape that truncates
//   elsewhere in this codebase. The long copy lives in the detail modal.
//
//   The scene break body is 34 words. A break card runs past the fold on a
//   Pixel 6 and no amount of trimming closes the gap (the real fix is adding
//   `scene` to ownsLayout(), which touches nine lessons and wants its own
//   decision), so the range 24 to 40 is the band every shipped break sits in.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { display as d } from './articles-partitifs-corpus.ts';
import { PARTITIFS_TERMS, REFRAME } from './articles-partitifs-terms.ts';
import { withScenarioAlts } from '../scenario-alts.logic.ts';
import { unitRef } from './_unit-ref.ts';

export { REFRAME };

/* ─── The corpus this lesson sequences ─────────────────────────────────────
 *
 * 41 items are reused from inside the seed cut, 27 are IMPORTED from two themes
 * that are not in it, and 13 are authored (see the corpus file for why each gap
 * could not be filled from what exists). Grouped by the job the ids do, so a
 * section names a GROUP and the tranche slices read from the same groups rather
 * than restating a word list.                                                */

/** The four forms themselves, as bare phrases. Met in act 1 and drilled once. */
const FORMS = [
  'fr.a1.cuisine.265', 'fr.a1.cuisine.266', 'fr.a1.cuisine.267', 'fr.a1.cafe.151',
  'fr.a1.expressions-de-quantite.065', 'fr.a1.expressions-de-quantite.066',
  'fr.a1.expressions-de-quantite.067', 'fr.a1.expressions-de-quantite.068',
  'fr.a1.expressions-de-quantite.069', 'fr.a1.expressions-de-quantite.070',
  'fr.a1.cuisine.270',
];

/** The un/du decision: the pairs the lesson turns on plus the corpus sentences
 *  that show the partitive doing its job in a verb frame. */
const CHOICE = [
  'fr.a1.cuisine.262', 'fr.a1.cuisine.263', 'fr.a1.cafe.152', 'fr.a1.cafe.153',
  'fr.a1.cafe.009', 'fr.a1.cuisine.007', 'fr.a1.cuisine.004', 'fr.a1.cuisine.199',
  'fr.a1.cuisine.227', 'fr.a1.cuisine.242', 'fr.a1.cuisine.189', 'fr.a1.cuisine.240',
  'fr.a1.marche.005', 'fr.a1.marche.162', 'fr.a1.marche.165',
  'fr.a1.cafe.141', 'fr.a1.cafe.144', 'fr.a1.cafe.083',
  'fr.a1.animaux.008', 'fr.a1.animaux.004', 'fr.a1.corps.246',
];

/** Name a quantity and the article goes. The four quantity words, the
 *  containers that behave the same way, and the sentences that show it. */
const QUANTITY = [
  'fr.a1.expressions-de-quantite.001', 'fr.a1.expressions-de-quantite.014',
  'fr.a1.expressions-de-quantite.023', 'fr.a1.expressions-de-quantite.031',
  'fr.a1.cuisine.268', 'fr.a1.cuisine.269',
  'fr.a1.expressions-de-quantite.092', 'fr.a1.expressions-de-quantite.124',
  'fr.a1.cuisine.195', 'fr.a1.cuisine.220', 'fr.a1.marche.119', 'fr.a1.corps.206',
  'fr.a1.marche.154', 'fr.a1.marche.126', 'fr.a1.marche.160', 'fr.a1.marche.085',
  'fr.a1.cafe.127', 'fr.a1.objets.015',
];

/** Say no and it shrinks. Small on purpose: a1.11 taught this rule and this
 *  lesson extends it rather than repeating it. */
const NEGATION = [
  'fr.a1.cuisine.264', 'fr.a1.cuisine.271', 'fr.a1.cuisine.214',
  'fr.a1.au-restaurant.189',
];

/** The other du: `de + le`, which is roughly four in five of the `du` a learner
 *  has been reading since a1.01, plus the two that show the real one away from
 *  a table. */
const OTHER_DU = [
  'fr.a1.au-restaurant.098', 'fr.a1.au-restaurant.145', 'fr.a1.au-restaurant.176',
  'fr.a1.marche.140', 'fr.a1.maison.124', 'fr.a1.objets.165', 'fr.a1.ecole.053',
  'fr.a1.marche.129', 'fr.a1.sports-et-loisirs.115', 'fr.a1.famille.155',
  'fr.a1.animaux.092',
];

/** The vocabulary hub's extra lines: met in act 4, not taught by a rule. */
const BANK = [
  'fr.a1.au-restaurant.102', 'fr.a1.au-restaurant.112', 'fr.a1.au-restaurant.182',
  'fr.a1.au-restaurant.184', 'fr.a1.au-restaurant.185',
  'fr.a1.expressions-de-quantite.071', 'fr.a1.expressions-de-quantite.072',
  'fr.a1.expressions-de-quantite.073', 'fr.a1.expressions-de-quantite.074',
  'fr.a1.expressions-de-quantite.077', 'fr.a1.expressions-de-quantite.081',
  'fr.a1.cafe.011', 'fr.a1.cafe.012', 'fr.a1.cafe.017', 'fr.a1.cuisine.003',
  'fr.a1.routines.161',
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag. Verified against POSTGRES, not the seed, on 2026-08-05: the two
 *  drift, and an id that exists only in the seed renders as an empty card.
 *  a1-29-partitifs.test.ts re-asserts it against the seed on every run. */
const SPEAK_IDS = [
  'fr.a1.cuisine.265', 'fr.a1.cafe.151', 'fr.a1.cuisine.267',
  'fr.a1.expressions-de-quantite.065', 'fr.a1.expressions-de-quantite.069',
  'fr.a1.cuisine.266', 'fr.a1.expressions-de-quantite.066',
  'fr.a1.expressions-de-quantite.070', 'fr.a1.expressions-de-quantite.067',
  'fr.a1.expressions-de-quantite.068', 'fr.a1.expressions-de-quantite.001',
  'fr.a1.expressions-de-quantite.031', 'fr.a1.au-restaurant.102', 'fr.a1.cafe.009',
];

/** The dictée set, and the six were chosen by MEASUREMENT rather than taste.
 *
 *  dicteeMode() switches from letter tiles to WORD tiles above 16 letters, and
 *  word mode is what this lesson wants: the bank's decoy pool is drawn from
 *  ['le','la','les','un','une','de','et','très', …], which contains `de`, `un`
 *  and `une` and does NOT contain `du`. So a word-mode dictée on these
 *  sentences puts the wrong article next to the right one and asks the learner
 *  to place it, which is exactly the choice this lesson teaches.
 *
 *  Every id below clears the threshold. The ones that did not are the short
 *  authored pairs (« Je voudrais du pain. » at 16 letters, « Je bois de l'eau. »
 *  at 12), and in letter mode they would be spelling exercises, which is a
 *  different lesson. They are taught on cards instead. */
const DICTATION_IDS = [
  'fr.a1.cuisine.199', 'fr.a1.cuisine.189', 'fr.a1.cuisine.214',
  'fr.a1.cuisine.195', 'fr.a1.expressions-de-quantite.124', 'fr.a1.marche.140',
];

const ITEM_IDS = [
  ...new Set([...FORMS, ...CHOICE, ...QUANTITY, ...NEGATION, ...OTHER_DU, ...BANK]),
];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes for THIS unit is not being misunderstood and it is
 * not a social misstep. It is asking for the wrong KIND of thing: every word
 * correct, the shopkeeper helpful, and an object on the counter that you did
 * not want and now have to pay for.
 *
 * « un pain » is a real countable noun in French: a large round loaf, sold by
 * the piece. So the failing line is not a mistake anybody will correct. It is
 * an order, and it gets filled.
 *
 * Beats are extracted to a named const rather than inlined, because the scene
 * is the section whose copy gets rewritten most and a const keeps the diff
 * readable. Every beat carries its own `size` (prose at md, the choice and the
 * break at lg) and its own `audio`. The SECTION does not declare `size`:
 * ownsLayout() ignores it, but density.logic.ts reads xl as a 12-word cap on
 * every string, and prose cannot live there.                                 */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Saturday morning in Lyon. You are cooking for two people tonight and you need bread for the table.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'There is a queue behind you and the baker is already looking up. You know every word you need.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'One sentence, and the queue is waiting. Which one?',
    options: [
      {
        fr: "Je voudrais un pain, s'il vous plaît.",
        en: 'asking for a loaf',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: "Je voudrais du pain, s'il vous plaît.",
        en: 'asking for bread',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. You want bread rather than a particular object, and du is how you say so.',
      breaks: 'Every word is correct. Watch what she reaches for.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: "Je voudrais un pain, s'il vous plaît.",
    en: '(I would like a loaf, please)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'The baker',
    fr: 'Un grand ou un petit ?',
    en: 'A big one or a small one?',
    stage: 'Her hand is already on a round loaf the size of a dinner plate.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'You ordered an object',
    // 34 words. The shipped scene breaks run 24 to 40 here.
    body: 'A pain is a thing, sold by the piece, with a price of its own. Du pain is bread: an amount, cut to whatever you need. She was not confused for a second, and that is the problem.',
    wrong: {
      fr: 'Je voudrais un pain.',
      ipa: '/ʒə vu.dʁɛ œ̃ pɛ̃/',
      respell: d('un pain').respell,
      en: 'one loaf, the round kind, wrapped and paid for',
    },
    right: {
      fr: 'Je voudrais du pain.',
      ipa: '/ʒə vu.dʁɛ dy pɛ̃/',
      respell: d('du pain').respell,
      en: 'bread, as much or as little as you need',
    },
    coach: 'Same shop, same noun, one syllable different. One of them is a thing and one of them is an amount.',
    // Audio-first: the ear answers before the eye can. ScenePlayer holds the
    // text back and plays the right-hand line on entry.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'Second try',
    fr: "Je voudrais du pain, s'il vous plaît.",
    en: 'I would like some bread, please.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The baker',
    fr: 'Une demi-baguette, ça ira ?',
    en: 'Half a baguette, will that do?',
    stage: 'She has already left the round loaves alone.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'She heard the difference before you finished the sentence, and served a different thing.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: a word you already own ─────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Loaf He Did Not Want',
    frSub: 'Le pain de trop',
    render: 'screens',
    layer: 'core',
    terms: ['oneOfThem', 'someOfIt'],
    say: {
      text: 'Watch this go wrong on a word you already know. Nothing here is mispronounced and nothing here is rude.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A bakery on a corner, two streets from the market',
      city: 'Lyon',
      time: 'Saturday, twenty past nine',
      // No image. The bundle's food assets are all plated dishes and this scene
      // turns on a shelf of unwrapped loaves. Restore when one exists.
    },
    beats: SCENE_BEATS,
    // Referenced, never retyped, so this appearance cannot drift out of
    // agreement with the seven others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} She served the second one without being asked twice.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end of this lesson you will know which of the two a sentence wants, and the four places your English will hand you the wrong one.`,
    goals: [
      { t: 'Ask for an amount', s: 'Order bread, coffee, water or cheese without accidentally ordering one whole object of it.' },
      { t: 'Choose between two right answers', s: 'Hear the difference between a cup of coffee and coffee, and say which one you meant.' },
      { t: 'Drop the article on purpose', s: 'Name a quantity or a container and know that the word in front of the noun now goes.' },
      { t: 'Tell two identical words apart', s: 'Spot the du that is about an amount and the du that is nothing of the kind.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-family',
    title: 'The Fourth One Is Yours',
    frSub: "Du, de la, de l', des",
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['someOfIt'],
    say: 'You already own one of these four and nobody told you. Start there rather than with a table.',
    cards: [
      {
        label: 'Already yours',
        head: 'You have been saying this',
        fr: 'des légumes',
        sub: `${d('des légumes').respell} · vegetables`,
        body: 'Last lesson des was the plural of un and une, and it is. It is also the plural of the three words on the next card, and it has been doing that job the whole time.',
      },
      {
        label: 'The other three',
        head: 'One word, three shapes',
        fr: "du · de la · de l'",
        sub: `${d('du pain').respell} · ${d('de la soupe').respell} · ${d("de l'eau").respell}`,
        body: 'Du in front of most nouns, de la in front of the ones that take la, and de l apostrophe when the next word starts with a vowel sound.',
      },
      {
        label: 'Revision, not teaching',
        head: 'The noun decides, not you',
        fr: 'du pain · de la soupe',
        sub: 'pain takes le, soupe takes la',
        body: 'Which of the three you use is settled by the noun, and you settled that two lessons ago. Nothing new is being asked of you here, so it gets one screen and one drill.',
      },
      {
        label: 'The whole lesson',
        head: 'What all four are for',
        fr: 'du café',
        sub: `${d('du café').respell} · coffee, some of it`,
        body: `${REFRAME} Every card after this one is that sentence in a different situation.`,
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's04-forms',
    title: 'Say the Amount',
    frSub: 'Les quatre formes',
    layer: 'core',
    // xl, and legitimate here where it would be fatal in a prose lesson: the
    // display unit is an article and a one-word noun, and xl caps every string
    // in the section at 12 words. One form per screen.
    size: 'xl',
    terms: ['someOfIt'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-29-forms' },
    // ONE mission on which form. Six missions re-deriving it would be a1.03
    // rebuilt worse, and a1.11 already made the same transfer in a single card.
    say: 'Ten amounts, one per screen. The noun tells you which shape to use, so the only work is saying it.',
    groups: [
      {
        label: 'Read it, then say it',
        items: [
          { fr: 'du pain', en: 'some bread', respell: d('du pain').respell, itemId: 'fr.a1.cuisine.265' },
          { fr: 'du café', en: 'some coffee', respell: d('du café').respell, itemId: 'fr.a1.cafe.151' },
          { fr: 'du lait', en: 'some milk', respell: d('du lait').respell, itemId: 'fr.a1.cuisine.267' },
          { fr: 'du riz', en: 'some rice', respell: d('du riz').respell, itemId: 'fr.a1.expressions-de-quantite.065' },
          { fr: 'du fromage', en: 'some cheese', respell: d('du fromage').respell, itemId: 'fr.a1.expressions-de-quantite.069' },
          { fr: 'de la soupe', en: 'some soup', respell: d('de la soupe').respell, itemId: 'fr.a1.cuisine.266' },
          { fr: 'de la confiture', en: 'some jam', respell: d('de la confiture').respell, itemId: 'fr.a1.expressions-de-quantite.066' },
          { fr: 'de la salade', en: 'some salad', respell: d('de la salade').respell, itemId: 'fr.a1.expressions-de-quantite.070' },
          { fr: "de l'eau", en: 'some water', respell: d("de l'eau").respell, itemId: 'fr.a1.expressions-de-quantite.067' },
          { fr: 'des légumes', en: 'some vegetables', respell: d('des légumes').respell, itemId: 'fr.a1.expressions-de-quantite.068' },
        ],
      },
    ],
  },

  /* ── Act 2: one of them, or some of it ─────────────────────────────────── */

  {
    type: 'tapTable',
    id: 's05-pairs',
    title: 'One Cup, or Coffee',
    frSub: 'Un café ou du café',
    layer: 'core',
    terms: ['oneOfThem', 'someOfIt', 'inGeneral'],
    sheetId: 'sheet.a1.29.choice',
    say: `${REFRAME} Both columns are correct French. Tap any row to hear the two of them back to back.`,
    // Three columns is the maximum that fits, and every cell is three words or
    // fewer: a tapTable cell is a flexed Text inside a row and a long one is
    // truncated while the audio speaks it in full. The argument lives in the
    // detail modal, which is a card and can hold prose.
    cols: ['One of them', 'Some of it', 'English'],
    rows: [
      {
        cells: ['un café', 'du café', 'coffee'],
        say: 'Un café. Du café.',
        detail: {
          title: 'un café · du café',
          body: 'Un café is one cup, on a saucer, at a counter. Du café is coffee: what is in the pot, what you want rather than tea, an amount nobody has measured. Order the first and one arrives.',
          say: 'Je prends un café. Je prends du café.',
        },
      },
      {
        cells: ['un pain', 'du pain', 'bread'],
        say: 'Un pain. Du pain.',
        detail: {
          title: 'un pain · du pain',
          body: 'Un pain is a loaf, the big round kind, sold by the piece. Du pain is bread, cut to whatever you need. This is the pair the bakery scene turns on and it is the one you will meet first.',
          say: 'Je voudrais un pain. Je voudrais du pain.',
        },
      },
      {
        cells: ['un fromage', 'du fromage', 'cheese'],
        say: 'Un fromage. Du fromage.',
        detail: {
          title: 'un fromage · du fromage',
          body: 'Un fromage is a whole cheese, the wheel on the board behind the counter. Du fromage is cheese, the thing you eat some of after a meal. Ask for the first at a market stall and you will be taken seriously.',
          say: 'Un fromage entier ? Non, du fromage.',
        },
      },
      {
        cells: ['une salade', 'de la salade', 'salad'],
        say: 'Une salade. De la salade.',
        detail: {
          title: 'une salade · de la salade',
          body: 'Une salade is a dish somebody brings you. De la salade is salad, the leaves, some of what is in the bowl. Salade takes la, so its amount form is de la rather than du. That is the only difference.',
          say: 'Je prends une salade. Je fais de la salade.',
        },
      },
      {
        cells: ['un bruit', 'du bruit', 'noise'],
        say: 'Un bruit. Du bruit.',
        detail: {
          title: 'un bruit · du bruit',
          body: 'Not food, and it is the same choice exactly. Un bruit is one noise, a single sound you heard once. Du bruit is noise, the kind the neighbours make. Nothing about this rule is about eating.',
          say: "J'entends un bruit. Il y a du bruit.",
        },
      },
    ],
  },

  {
    type: 'reading',
    id: 's06-reading',
    title: 'Saturday at the Market',
    frSub: 'Samedi au marché',
    layer: 'core',
    terms: ['someOfIt', 'oneOfThem', 'otherDu'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a
    // reading section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions. Without it the section takes the fallback path and
    // MissionRich contains no reference to `glossary`.
    questionsInModal: true,
    say: `${REFRAME} One noun in this passage arrives both ways in the same breath, and somebody says out loud what changed.`,
    // Paul's A1 rule, set on a1.01's passage: anything not inside « » is in
    // English. The learner's effort belongs on the exchange, not on decoding
    // stage directions.
    //
    // ONE BLOCK, NO LINE BREAKS. See the header.
    text:
      'It is Saturday morning and Claire is buying lunch for three people. ' +
      'The bakery smells of the ovens at the back, and there is a queue. ' +
      "« Bonjour madame. Je voudrais du pain, s'il vous plaît. » " +
      'The baker reaches past the round loaves and picks up a half baguette instead. ' +
      '« Voilà. Et avec ça ? » ' +
      'Claire crosses the road to the cheese stall, where a man is already holding a knife. ' +
      '« Je voudrais du fromage. » ' +
      'He puts a whole wheel of comté on the board, the size of a car wheel, and waits. ' +
      '« Un fromage entier ? » ' +
      'Claire looks at it, and then says the sentence that fixes everything. ' +
      "« Non, pas un fromage. Du fromage. Une tranche, s'il vous plaît. » " +
      'He cuts a slice and wraps it, and she remembers who she is cooking for tonight. ' +
      '« Il ne mange pas de fromage, lui. De la salade, alors. » ' +
      'The man laughs and reaches for the salad without putting the knife down. ' +
      "« Et de l'eau ? Il y a de l'eau à côté du pain. » " +
      'Claire takes a bottle from the shelf beside the bread and pays for all of it. ' +
      "« Une bouteille d'eau. Merci beaucoup. »",
    // Every entry is matched by gloss.logic.ts, which folds punctuation and
    // case on BOTH sides and allows a phrase of up to four words. Longest match
    // wins, which is why "à côté du pain" is entered as a phrase: without it
    // the bare "du pain" key would underline the one occurrence in the passage
    // that is NOT about an amount of bread, and gloss it as though it were.
    glossary: [
      { word: 'du pain', en: 'some bread', note: 'Bread, cut to whatever she needs. Not a loaf, which would be un pain.' },
      { word: 'du fromage', en: 'some cheese', note: 'Cheese, an amount of it. The man hears something else, and that is the next line.' },
      { word: 'un fromage', en: 'a whole cheese', note: 'One cheese, the entire wheel. A real thing to order, and not what she meant.' },
      { word: 'une tranche', en: 'a slice', note: 'Name the quantity and the article in front of the noun goes: une tranche de fromage.' },
      { word: 'pas de fromage', en: 'no cheese', note: 'Say no and du collapses to de. The same rule you met last lesson on un and des.' },
      { word: 'de la salade', en: 'some salad', note: 'Salade takes la, so its amount form is de la. The noun decides, as always.' },
      { word: "de l'eau", en: 'some water', note: "Eau opens on a vowel sound, so de la shortens to de l apostrophe." },
      { word: 'à côté du pain', en: 'next to the bread', note: 'This du is not about an amount of anything. It is de and le stuck together, meaning of the.' },
      { word: "une bouteille d'eau", en: 'a bottle of water', note: 'A container is a quantity with a shape, so it takes bare de, and d apostrophe before the vowel.' },
    ],
    questions: [
      { q: 'Claire asks for « du fromage » and the man puts a whole wheel on the board. What did he hear?', a: 'He heard the question as being about one cheese rather than an amount of one, which is why she corrects it to du fromage in the next line.' },
      { q: 'What is different about « un fromage » and « du fromage »?', a: 'Nothing about the cheese. Un fromage is one whole object you could carry out; du fromage is some of it, cut to size.' },
      { q: 'The word « du » appears in the last exchange and it is not about an amount. Where, and what is it doing?', a: '« à côté du pain » means next to the bread. That du is de and le squeezed together, and it says where the water is rather than how much bread there is.' },
    ],
  },

  {
    type: 'listening',
    id: 's07-ear',
    title: 'Du, De, or Deux?',
    frSub: "À l'oreille",
    layer: 'core',
    questionsInModal: true,
    terms: ['someOfIt', 'namedQuantity'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-29-pairs' },
    say: 'Du against de, and du against deux. All three are one vowel and all three change what the sentence asks for.',
    lines: [
      { fr: 'Je voudrais du pain.', en: 'I would like some bread.' },
      { fr: 'Je voudrais un pain.', en: 'I would like a loaf.' },
      { fr: 'Je bois du café.', en: 'I drink coffee.' },
      { fr: 'Je bois beaucoup de café.', en: 'I drink a lot of coffee.' },
    ],
    questions: [
      {
        q: 'In the first line, how much bread is being asked for?',
        opts: ['One loaf', 'Two loaves', 'An amount nobody has said', 'All the bread in the shop'],
        correct: 2,
        why: 'Du is the whole answer. It says the speaker wants bread without saying how much, and the baker decides the rest.',
      },
      {
        q: 'What separates the third line from the fourth, at speed?',
        opts: ['One is a question', 'The fourth names a quantity, so du goes', 'The third is plural', 'Nothing, they are the same'],
        correct: 1,
        why: 'Beaucoup already says how much, so French drops the word in front of the noun. Beaucoup du café is never said.',
      },
      {
        q: 'Which pair is hardest to tell apart when somebody speaks quickly?',
        opts: ['du and de', 'du and deux', 'both, and for the same reason', 'neither, they sound nothing alike'],
        correct: 2,
        why: 'Each pair differs by one rounded vowel and nothing else, so the ear has no consonant to hold on to. Slow the audio and all three separate cleanly.',
      },
    ],
  },

  {
    type: 'useCases',
    id: 's08-cases',
    title: 'Six Moments This Week',
    frSub: 'Dans la vraie vie',
    layer: 'core',
    terms: ['someOfIt', 'oneOfThem'],
    say: 'Six real moments. In every one of them the choice is between a thing and an amount, and the noun is the same either way.',
    cases: [
      { situation: 'At a counter, ordering one cup to drink standing up', fr: 'Un café, s’il vous plaît.', en: 'A coffee, please.' },
      { situation: 'At a table, when somebody is holding the pot', fr: 'Du café, oui, merci.', en: 'Some coffee, yes, thank you.' },
      { situation: 'At the bakery, buying bread for tonight', fr: 'Je voudrais du pain.', en: 'I would like some bread.' },
      { situation: 'Asked what you want to drink with your meal', fr: "Je bois de l'eau.", en: 'I drink water.' },
      { situation: 'Telling a waiter what you cannot eat', fr: 'Je ne mange pas de fromage.', en: 'I do not eat cheese.' },
      { situation: 'At a stall, once you have decided how much', fr: 'Un kilo de tomates.', en: 'A kilo of tomatoes.' },
    ],
  },

  {
    type: 'groupDrill',
    id: 's09-check',
    title: 'Which One Do You Want?',
    frSub: 'Contrôle',
    layer: 'core',
    terms: ['oneOfThem'],
    // A control page: one group, a question, no words. The stem carries the
    // SITUATION on purpose. A bare "un or du?" has two right answers, because
    // both are correct French and they mean different things, so the question
    // is unanswerable without saying what the learner wants.
    say: 'One question. The situation is what decides it, so read the first half before you look at the options.',
    groups: [
      {
        label: 'One question, then on',
        items: [],
        check: {
          q: 'Somebody is standing over you with a coffee pot, asking if you want any. What do you say?',
          opts: ['Un café, oui.', 'Le café, oui.', 'Du café, oui.', 'Des cafés, oui.'],
          correct: 2,
          why: 'They are offering an amount out of a pot rather than a cup off a shelf. Un café would be ordering a fresh one, which is a different request.',
        },
      },
    ],
  },

  /* ── Act 3: when the article disappears ────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's10-quantity',
    title: 'Name It and It Vanishes',
    frSub: 'Beaucoup de, un peu de',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['namedQuantity', 'someOfIt'],
    say: 'The most counterintuitive rule in this lesson, and the most regular. Say how much and the article goes.',
    cards: [
      {
        label: 'The rule',
        head: 'Say how much, lose the word',
        fr: 'beaucoup de café',
        sub: `${d('beaucoup de café').respell} · a lot of coffee`,
        body: 'Je bois du café becomes je bois beaucoup de café. The du is gone, not shortened. Beaucoup du café is never said by anybody.',
      },
      {
        label: 'All four',
        head: 'It is not just beaucoup',
        fr: 'un peu de · assez de · trop de',
        sub: 'a little · enough · too much',
        body: 'Every quantity word behaves the same way. Un peu de sel, assez de pain, trop de sucre, moins de bruit. There are no exceptions to find.',
      },
      {
        label: 'Before a vowel',
        head: 'de becomes d',
        fr: "beaucoup d'eau",
        sub: 'a lot of water',
        body: 'De shortens in front of a vowel sound, exactly the way le and la do. Beaucoup d apostrophe eau, un peu d apostrophe huile.',
      },
      {
        label: 'Why it feels wrong',
        head: 'English keeps its word',
        fr: 'trop de sucre',
        sub: `${d('trop de sucre').respell} · too much sugar`,
        body: `English says "a lot of the coffee" and keeps everything. French takes the article out the moment the quantity is named. ${REFRAME} Say how much, and neither one is needed.`,
      },
    ],
  },

  {
    type: 'examples',
    id: 's11-containers',
    title: 'A Kilo, a Slice, a Bottle',
    frSub: 'Les contenants',
    layer: 'core',
    terms: ['namedQuantity'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: 'A container is a quantity with a shape, so it does exactly what beaucoup does. Tap any line.',
    examples: [
      { fr: 'un kilo de tomates', en: 'a kilo of tomatoes', note: 'Not un kilo des tomates. The kilo says how much, so nothing else needs to.' },
      { fr: 'une tranche de fromage', en: 'a slice of cheese', note: 'One card ago this was du fromage. Name the slice and the du goes.' },
      { fr: "une bouteille d'eau", en: 'a bottle of water', note: 'De shortens to d apostrophe in front of eau, the same as everywhere else.' },
      { fr: 'un morceau de comté', en: 'a piece of comté', note: 'Comté is a particular cheese and it changes nothing. The container is what matters.' },
      { fr: 'un verre de vin', en: 'a glass of wine', note: 'Compare du vin, which is wine without a glass named around it.' },
      { fr: 'une part de gâteau', en: 'a slice of cake', note: 'The one English speakers guess wrong, because part sounds like it needs the.' },
    ],
  },

  {
    type: 'tapTable',
    id: 's12-negation',
    title: 'Say No and It Shrinks',
    frSub: 'À la forme négative',
    layer: 'core',
    terms: ['deUnderNo', 'someOfIt'],
    sheetId: 'sheet.a1.29.choice',
    // The whole point of this mission is that it is NOT new. a1.11 taught the
    // collapse on un, une and des; this is the same rule one noun-class further
    // on, and saying so is worth more than teaching it twice.
    say: 'You met this rule last lesson on un and des. It is the same rule, and there is nothing extra to learn.',
    cols: ['Yes', 'No', 'What moved'],
    rows: [
      {
        cells: ['du pain', 'pas de pain', 'du became de'],
        say: 'Je mange du pain. Je ne mange pas de pain.',
        detail: {
          title: 'du becomes de',
          body: 'Je mange du pain becomes je ne mange pas de pain. Not pas du pain, and not pas le pain. The negative eats the article and leaves the noun bare behind it.',
          say: 'Je ne mange pas de pain.',
        },
      },
      {
        cells: ['de la soupe', 'pas de soupe', 'de la became de'],
        say: 'Je fais de la soupe. Je ne fais pas de soupe.',
        detail: {
          title: 'de la becomes de',
          body: 'The la disappears with it. De does not agree with anything, which is one fewer thing to get right rather than one more.',
          say: 'Je ne fais pas de soupe.',
        },
      },
      {
        cells: ["de l'eau", "pas d'eau", "de l' became d'"],
        say: "Je bois de l'eau. Je ne bois pas d'eau.",
        detail: {
          title: "de l apostrophe becomes d apostrophe",
          body: 'De still meets a vowel sound, so it still shortens. That is why this one looks different: it is the same de, wearing the same shortening you already know.',
          say: "Je ne bois pas d'eau.",
        },
      },
      {
        cells: ['des légumes', 'pas de légumes', 'des became de'],
        say: 'Je mange des légumes. Je ne mange pas de légumes.',
        detail: {
          title: 'des becomes de',
          body: 'This is the half you already met. Last lesson des was the plural of un and une and it collapsed to de under a negative. It does the same here for the same reason.',
          say: 'Je ne mange pas de légumes.',
        },
      },
      {
        cells: ['le pain', 'pas le pain', 'nothing moved'],
        say: "J'aime le pain. Je n'aime pas le pain.",
        detail: {
          title: 'le does not move',
          body: 'This is the half that makes the rule usable. If the word survives the negative it was le, la or les. If it collapsed to de, it was one of this lesson.',
          say: "Je n'aime pas le pain.",
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's13-traps',
    // `swipe` and `size` are not decoration. MissionSection renders
    // commonErrors as its own swipe deck ONLY when `swipe` is set; without it
    // the section falls through to a path that drew a BLANK screen on sons.08
    // m22 and a1.01 m5.
    swipe: true,
    size: 'lg',
    title: 'Four Traps',
    frSub: 'Quatre pièges',
    layer: 'core',
    terms: ['someOfIt', 'namedQuantity', 'deUnderNo'],
    say: 'Four sentences an English speaker produces in their first month. One per screen.',
    errors: [
      {
        wrong: 'Saying « Je mange pain » for "I eat bread".',
        right: 'Saying « Je mange du pain » for "I eat bread".',
        why: 'Your English has nothing in front of bread, so nothing reminds you that French wants a word there. A bare noun after a verb is not a thing French has, and this is the error that sounds most obviously wrong to a French ear.',
      },
      {
        wrong: 'Saying « Je voudrais un café » when you meant coffee rather than one cup.',
        right: 'Saying « Je voudrais du café » when you meant coffee rather than one cup.',
        why: 'Both are correct French, which is why nothing corrects you. Un asks for one countable thing and du asks for an amount, so this is the only trap here that gets you served the wrong item rather than a puzzled look.',
      },
      {
        wrong: 'Saying « beaucoup du café » for "a lot of coffee".',
        right: 'Saying « beaucoup de café » for "a lot of coffee".',
        why: 'English keeps the whole phrase in "a lot of the coffee" and French does not. Once the quantity is named the article in front of the noun disappears, and this holds for every quantity word and every container.',
      },
      {
        wrong: 'Saying « Je ne mange pas du pain » for "I do not eat bread".',
        right: 'Saying « Je ne mange pas de pain » for "I do not eat bread".',
        why: 'Du, de la and de l apostrophe all collapse to de under a negative, exactly as un, une and des did last lesson. Le, la and les do not move, which is how you can work out afterwards which word you had used.',
      },
    ],
  },

  /* ── Act 4: the other du, and the words banked ─────────────────────────── */

  {
    type: 'cardDeck',
    id: 's14-other-du',
    title: 'The Other Du',
    frSub: 'Du qui ne compte pas',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['otherDu', 'someOfIt'],
    // The mission that protects everything above it. Across the 777 a1 rows
    // holding du, de la or de l', roughly four in five are not partitives at
    // all, so a learner who leaves with only the rule will apply it to the
    // wrong four fifths of what they read.
    say: 'Most of the du you have read since your first lesson is not this word at all. Here is how to tell.',
    cards: [
      {
        label: 'Four in five',
        head: 'This one is not an amount',
        fr: 'près du lit',
        sub: `${d('près du lit').respell} · next to the bed`,
        body: 'There is no quantity of bed involved. This du is de and le squeezed into one word, which French does automatically, and you have been reading it since your first lesson.',
      },
      {
        label: 'On every menu',
        head: 'The dish of the day',
        fr: 'le plat du jour',
        sub: `${d('le plat du jour').respell} · the dish of the day`,
        body: "Le plat du jour, l'odeur du pain, à côté du salon, à la fin du repas. Every one of them is of the, and not one of them is about how much of something there is.",
      },
      {
        label: 'The test',
        head: 'Try putting "some" in',
        fr: "l'odeur du pain",
        sub: `${d("l'odeur du pain").respell} · the smell of the bread`,
        body: 'Some bread works, so je mange du pain is this lesson. Some the bread does not work, so l apostrophe odeur du pain is the other one. That test takes a second and it never fails.',
      },
      {
        label: 'Away from the table',
        head: 'The real one, off duty',
        fr: 'du sport · du bruit',
        sub: `${d('du sport').respell} · ${d('du bruit').respell}`,
        body: `Faire du sport, jouer de la guitare, entendre du bruit. Same word, same job, no food anywhere near it. ${REFRAME} This is a rule about French, not a rule about restaurants.`,
      },
    ],
  },

  {
    type: 'vocabThemes',
    id: 's15-words',
    title: 'The Words Themselves',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['someOfIt', 'oneOfThem'],
    sheetId: 'sheet.a1.29.choice',
    say: 'Three decks. Every card carries its article, because the article is the half you are here for.',
    themes: [
      {
        title: 'du',
        cards: [
          { fr: 'du pain', sub: d('du pain').respell, en: 'some bread' },
          { fr: 'du café', sub: d('du café').respell, en: 'some coffee' },
          { fr: 'du lait', sub: d('du lait').respell, en: 'some milk' },
          { fr: 'du riz', sub: d('du riz').respell, en: 'some rice' },
          { fr: 'du fromage', sub: d('du fromage').respell, en: 'some cheese' },
          { fr: 'du vin', sub: d('du vin').respell, en: 'some wine' },
          { fr: 'du sel', sub: d('du sel').respell, en: 'some salt' },
          { fr: 'du sucre', sub: d('du sucre').respell, en: 'some sugar' },
          { fr: 'du beurre', sub: d('du beurre').respell, en: 'some butter' },
        ],
      },
      {
        title: "de la · de l'",
        cards: [
          { fr: 'de la soupe', sub: d('de la soupe').respell, en: 'some soup' },
          { fr: 'de la confiture', sub: d('de la confiture').respell, en: 'some jam' },
          { fr: 'de la salade', sub: d('de la salade').respell, en: 'some salad' },
          { fr: 'de la monnaie', sub: d('de la monnaie').respell, en: 'some change' },
          { fr: "de l'eau", sub: d("de l'eau").respell, en: 'some water' },
          { fr: "de l'herbe", sub: d("de l'herbe").respell, en: 'some grass' },
          { fr: 'des légumes', sub: d('des légumes').respell, en: 'some vegetables' },
        ],
      },
      {
        title: 'one of them',
        cards: [
          { fr: 'un café', sub: d('un café').respell, en: 'a coffee, one cup' },
          { fr: 'un pain', sub: d('un pain').respell, en: 'a loaf' },
          { fr: 'un croissant', sub: d('un croissant').respell, en: 'a croissant' },
          { fr: 'une baguette', sub: d('une baguette').respell, en: 'a baguette' },
          { fr: 'une tasse', sub: d('une tasse').respell, en: 'a cup' },
          { fr: 'une pomme', sub: d('une pomme').respell, en: 'an apple' },
          { fr: 'une bouteille', sub: d('une bouteille').respell, en: 'a bottle' },
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
    say: 'English on the front. Say the French, article and all, before you flip.',
    cards: [
      { front: 'some bread', back: 'du pain', say: 'du pain' },
      { front: 'a loaf (one whole thing)', back: 'un pain', say: 'un pain' },
      { front: 'some coffee (from the pot)', back: 'du café', say: 'du café' },
      { front: 'a coffee (one cup)', back: 'un café', say: 'un café' },
      { front: 'some soup', back: 'de la soupe', say: 'de la soupe' },
      { front: 'some water', back: "de l'eau", say: "de l'eau" },
      { front: 'some vegetables', back: 'des légumes', say: 'des légumes' },
      { front: 'a lot of coffee', back: 'beaucoup de café', say: 'beaucoup de café' },
      { front: 'a little salt', back: 'un peu de sel', say: 'un peu de sel' },
      { front: 'too much sugar', back: 'trop de sucre', say: 'trop de sucre' },
      { front: 'a kilo of tomatoes', back: 'un kilo de tomates', say: 'un kilo de tomates' },
      { front: 'I do not eat bread', back: 'Je ne mange pas de pain.', say: 'Je ne mange pas de pain.' },
      { front: 'I do not drink water', back: "Je ne bois pas d'eau.", say: "Je ne bois pas d'eau." },
      { front: 'I would like some bread, please', back: "Je voudrais du pain, s'il vous plaît.", say: "Je voudrais du pain, s'il vous plaît." },
    ],
  },

  {
    type: 'dictation',
    id: 's17-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // Word tiles, not letters: see the note on DICTATION_IDS. The bank offers
    // decoys from ['le','la','les','un','une','de', …], which holds `de`, `un`
    // and `une` and does not hold `du`, so the wrong article sits next to the
    // right one and the learner has to place it.
    say: 'Six sentences. The tiles include articles you did not hear, so put the right one where it belongs.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's18-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // The only practice mission in the lesson, deliberately. `practice.skill`
    // is authored and read by no component: PracticeVFView takes itemIds and
    // nothing else, so a read mission and a speak mission render identically.
    // sons.06 ships two practice sections doing the same job and it reads as a
    // repeat.
    say: 'Fourteen amounts, said out loud. The word in front is the part the mic is listening for.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's19-scenario',
    title: 'Your Turn at the Counter',
    frSub: 'À vous de commander',
    layer: 'core',
    terms: ['someOfIt', 'namedQuantity'],
    say: 'The same market, and this time you hold up the whole exchange. Watch your own articles move.',
    setting: 'A covered market in Lyon on a Saturday morning, at the cheese and bread end.',
    turns: [
      { ai: 'Bonjour ! Qu’est-ce que je vous sers ?', en: 'Hello! What can I get you?', user: 'Bonjour. Je voudrais du pain, s’il vous plaît.' },
      { ai: 'Voilà. Et avec ça ?', en: 'Here you are. And with that?', user: 'Du fromage. Une tranche, pas plus.' },
      { ai: 'Du comté, ça vous va ?', en: 'Comté, does that suit you?', user: 'Oui, très bien. Et de l’eau ?' },
      { ai: 'Les bouteilles sont derrière vous.', en: 'The bottles are behind you.', user: 'Une bouteille d’eau, alors. Merci.' },
      { ai: 'Ça fait neuf euros cinquante.', en: 'That comes to nine euros fifty.', user: 'Voilà. Bonne journée !' },
    ],
  },

  /* ── Act 5: prove it ───────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's20-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['someOfIt', 'namedQuantity', 'otherDu'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'You want bread for the table, not a loaf', back: `Je voudrais du pain. ${REFRAME}`, say: 'Je voudrais du pain.' },
      { front: 'Somebody is holding the coffee pot', back: 'Du café, oui, merci. Un café would be ordering a fresh one.', say: 'Du café, oui, merci.' },
      { front: 'Soupe takes la. So an amount of it is…', back: 'de la soupe. The noun decides which shape, and it always has.', say: 'de la soupe' },
      { front: 'Eau starts with a vowel sound. So…', back: "de l'eau. De la shortens the same way la does.", say: "de l'eau" },
      { front: '« Je bois du café. » Now say you drink a lot of it.', back: 'Je bois beaucoup de café. Name the quantity and the du goes.', say: 'Je bois beaucoup de café.' },
      { front: 'How do you ask for a kilo of tomatoes?', back: 'Un kilo de tomates. A container is a quantity with a shape.', say: 'un kilo de tomates' },
      { front: '« Je mange du pain. » Now say you do not.', back: "Je ne mange pas de pain. The same collapse you met on un and des.", say: 'Je ne mange pas de pain.' },
      { front: "« J'aime le pain. » Now say you do not.", back: "Je n'aime pas le pain. Le does not move under a negative.", say: "Je n'aime pas le pain." },
      { front: 'Is « près du lit » about an amount of bed?', back: 'No. That du is de and le stuck together. Try putting "some" in front of the English.' },
      { front: 'You do sport three mornings a week', back: 'Je fais du sport. Same word, and no food anywhere near it.', say: 'Je fais du sport.' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's21-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to
    // be wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched a baker hand over the wrong thing, read a passage where one noun arrives both ways in the same breath, met the four shapes, learned what a quantity does to them, and separated the du that is about an amount from the du that is not. What is left is the part that tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's22-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Five rounds. Miss too many in a round and you get that round’s drill before the next one starts.',
    rounds: [
      {
        id: 'r1-the-four-shapes',
        label: 'The four shapes',
        // The FIRST target is the one whose drill fires (drillForRound stops
        // there). The deleted article is first because it is the most frequent
        // error in this topic and the one that sounds most obviously wrong.
        targets: ['err-article-dropped', 'err-un-for-du'],
        say: 'The shapes, quickly.',
        questions: [
          {
            q: 'You are at a table and you want bread. There is none on the table yet.',
            format: 'mcq',
            opts: ['Je voudrais du pain.', 'Je voudrais pain.', 'Je voudrais le pain.', 'Je voudrais un pain.'],
            correct: 0,
            why: 'You want an amount of bread rather than one loaf or all the bread there is. Du is the word for an amount nobody has counted yet.',
            ref: 's03-family',
          },
          {
            q: 'Fix this. « Je mange pain. »',
            format: 'errorSpot',
            accept: ['Je mange du pain.', 'du pain', 'du'],
            answer: 'Je mange du pain.',
            why: 'English has nothing in front of bread so nothing reminds you. French does not leave that slot empty after a verb, and du is what goes in it.',
            ref: 's03-family',
          },
          {
            q: 'Soupe takes la. So an amount of it is:',
            format: 'mcq',
            opts: ['du soupe', 'des soupe', 'de la soupe', "de l'soupe"],
            correct: 2,
            why: 'The noun decides the shape, and you settled that in the gender lesson. Soupe takes la, so its amount form keeps the la and adds de in front.',
            ref: 's04-forms',
          },
          {
            q: 'Water starts with a vowel sound. Write "some water" in French.',
            format: 'typeIn',
            accept: ["de l'eau", 'de leau'],
            answer: "de l'eau",
            why: 'De la shortens in front of a vowel sound exactly the way la does on its own. That is one rule you already have rather than a new one.',
            ref: 's04-forms',
          },
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'du fromage' },
            opts: ['deux fromages', 'de la fromage', 'le fromage', 'du fromage'],
            correct: 3,
            why: 'Du and deux are one rounded vowel apart and there is no consonant to hold on to. Slow it down and the tighter ü of du separates cleanly.',
            ref: 's07-ear',
          },
        ],
      },
      {
        id: 'r2-one-or-some',
        label: 'One of them, or some of it',
        targets: ['err-un-for-du', 'err-article-dropped'],
        say: 'The choice the whole lesson is about.',
        questions: [
          {
            q: 'You are standing at a counter and you want one cup of coffee to drink now.',
            format: 'mcq',
            opts: ['Un café, s’il vous plaît.', 'Du café, s’il vous plaît.', 'Le café, s’il vous plaît.', 'Café, s’il vous plaît.'],
            correct: 0,
            why: 'One cup is a thing you can count, and a thing you can count takes un. Du café would ask for coffee rather than a serving of it.',
            ref: 's05-pairs',
          },
          {
            q: 'Somebody is holding the pot and asking whether you want any. You do.',
            format: 'mcq',
            opts: ['Un café, oui.', 'Le café, oui.', 'Du café, oui.', 'Des cafés, oui.'],
            correct: 2,
            why: 'They are offering an amount out of a pot rather than a fresh cup, so the answer is about how much and not how many. Un café orders a new one.',
            ref: 's09-check',
          },
          {
            q: 'You wanted cheese for the table, not one whole cheese. Fix this. « Je voudrais un fromage. »',
            format: 'errorSpot',
            accept: ['Je voudrais du fromage.', 'du fromage', 'du'],
            answer: 'Je voudrais du fromage.',
            why: 'Un fromage is a whole wheel, a real thing a stall will hand you. Du fromage is an amount of it, which is what somebody buying lunch means.',
            ref: 's06-reading',
          },
          {
            q: 'The waiter asks what you would like, and you want bread on the table. Complete: « Je voudrais ___ pain. »',
            format: 'typeIn',
            accept: ['du'],
            answer: 'du',
            why: 'Bread on the table is an amount rather than a countable object, and pain takes le, so the amount form is du.',
            ref: 's06-reading',
          },
          {
            q: 'What actually decides between un café and du café?',
            format: 'mcq',
            opts: [
              'Whether the listener has heard about it before',
              'Whether you mean one thing you can count or an amount of something',
              'Whether the sentence is a question',
              'Whether you are being polite',
            ],
            correct: 1,
            why: 'Both are new to the listener, so newness cannot be it. What separates them is whether the thing is countable, which is the line English never makes you draw.',
            ref: 's05-pairs',
          },
        ],
      },
      {
        id: 'r3-once-a-quantity',
        label: 'Once a quantity is named',
        targets: ['err-quantity-du', 'err-negation-de'],
        say: 'Where the article disappears.',
        questions: [
          {
            q: 'Fix this. « Je bois beaucoup du café. »',
            format: 'errorSpot',
            accept: ['Je bois beaucoup de café.', 'beaucoup de café', 'beaucoup de', 'de'],
            answer: 'Je bois beaucoup de café.',
            why: 'Beaucoup already says how much, so the word in front of the noun is not needed and French takes it out. Beaucoup du café is never said.',
            ref: 's10-quantity',
          },
          {
            q: 'A kilo is a quantity. So which is right?',
            format: 'mcq',
            opts: ['un kilo du tomates', 'un kilo des tomates', 'un kilo tomates', 'un kilo de tomates'],
            correct: 3,
            why: 'A container behaves exactly like beaucoup: it names the quantity, so bare de is all that is left between it and the noun.',
            ref: 's11-containers',
          },
          {
            q: 'Fix this. « Une tranche du fromage, s’il vous plaît. »',
            format: 'errorSpot',
            accept: ['Une tranche de fromage, s’il vous plaît.', "Une tranche de fromage, s'il vous plaît.", 'une tranche de fromage', 'de fromage'],
            answer: 'Une tranche de fromage, s’il vous plaît.',
            why: 'The slice is the quantity, so the du goes. One card earlier the same cheese was du fromage, and naming the slice is exactly what changed.',
            ref: 's11-containers',
          },
          {
            q: '« Je bois de l’eau. » Now say you drink a lot of it. Complete: « Je bois beaucoup ___ eau. »',
            format: 'typeIn',
            accept: ["d'", 'd'],
            answer: "d'",
            why: 'The quantity takes the article out and leaves de, and de shortens in front of a vowel sound the same way le and la do.',
            ref: 's10-quantity',
          },
          {
            q: 'Fix this. « Elle met un peu du sel dans la soupe. »',
            format: 'errorSpot',
            accept: ['Elle met un peu de sel dans la soupe.', 'un peu de sel', 'un peu de', 'de sel'],
            answer: 'Elle met un peu de sel dans la soupe.',
            why: 'Un peu de is a quantity word like beaucoup de, so it behaves the same way. The un in front belongs to peu and changes nothing about the noun.',
            ref: 's10-quantity',
          },
        ],
      },
      {
        id: 'r4-saying-no',
        label: 'Saying no',
        // err-negation-de is first here so its drill is reachable: r3 fires the
        // quantity drill and stops. Every drill this lesson authors is the
        // first resolving target of exactly one round.
        targets: ['err-negation-de', 'err-quantity-du'],
        say: 'The rule you already met, one noun-class further on.',
        questions: [
          {
            q: 'Fix this. « Je ne mange pas du pain. »',
            format: 'errorSpot',
            accept: ['Je ne mange pas de pain.', 'pas de pain', 'de pain', 'de'],
            answer: 'Je ne mange pas de pain.',
            why: 'Under a negative du, de la and de l apostrophe all collapse to de, which is the same thing un, une and des did last lesson.',
            ref: 's12-negation',
          },
          {
            q: '« Je bois de l’eau. » Now say you do not.',
            format: 'mcq',
            opts: ['Je ne bois pas de l’eau.', 'Je ne bois pas d’eau.', 'Je ne bois pas l’eau.', 'Je ne bois pas de eau.'],
            correct: 1,
            why: 'The collapse to de happens first and the shortening in front of a vowel happens second, so what is left is d apostrophe rather than de l apostrophe.',
            ref: 's12-negation',
          },
          {
            q: 'Which sentence has a word in front of the noun that did NOT change under the negative?',
            format: 'mcq',
            opts: ['Je ne mange pas de fromage.', 'Je ne bois pas de café.', 'Je ne veux pas de soupe.', 'Je n’aime pas le fromage.'],
            correct: 3,
            why: 'Le, la and les survive a negative untouched. That asymmetry is what lets you work out afterwards which kind of word you had used.',
            ref: 's12-negation',
          },
          {
            q: '« Je mange du fromage. » Write it again, saying you do not.',
            format: 'typeIn',
            accept: ['Je ne mange pas de fromage.', 'Je ne mange pas de fromage'],
            answer: 'Je ne mange pas de fromage.',
            why: 'Du goes to de, not to pas du and not to pas le. The cheese was never a particular one, so there is nothing for le to point at.',
            ref: 's12-negation',
          },
          {
            q: 'Say it out loud, to a waiter, before the cheese board arrives.',
            format: 'speak',
            target: 'Je ne mange pas de fromage.',
            ipa: '/ʒə nə mɑ̃ʒ pa də fʁɔ.maʒ/',
            why: 'Pas de runs together into one short block. A gap between them is what makes it sound like two separate words rather than one negative.',
            ref: 's18-speak',
          },
        ],
      },
      {
        id: 'r5-which-du',
        label: 'Which du is it?',
        targets: ['err-other-du', 'err-un-for-du'],
        say: 'Four in five of them are not this word.',
        questions: [
          {
            q: 'Which of these du is about an amount of something?',
            format: 'mcq',
            opts: [
              'Le chargeur est près du lit.',
              'Quel est le plat du jour ?',
              'Le serveur apporte du pain frais.',
              "J'aime l'odeur du pain frais.",
            ],
            correct: 2,
            why: 'Only the third one would work with "some" in front of the English. The other three are of the: of the bed, of the day, of the bread.',
            ref: 's14-other-du',
          },
          {
            q: '« à côté du salon » means "next to the living room". What is du doing there?',
            format: 'mcq',
            opts: [
              'Naming an amount of living room',
              'Standing in for de and le together',
              'Making the noun plural',
              'Nothing, it is a mistake',
            ],
            correct: 1,
            why: 'French squeezes de and le into du automatically, and the result looks identical to the word this lesson teaches. Only the meaning tells them apart.',
            ref: 's14-other-du',
          },
          {
            q: 'Somebody is offering you the pot and you want some. Fix this. « Je prends un café. »',
            format: 'errorSpot',
            accept: ['Je prends du café.', 'du café', 'du'],
            answer: 'Je prends du café.',
            why: 'Un café orders a fresh cup, which is not what is being offered. When the coffee is already made and in front of you, what you want is an amount of it.',
            ref: 's05-pairs',
          },
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: "de l'eau" },
            opts: ['du lait', 'de la salade', "de l'eau", 'des légumes'],
            correct: 2,
            why: 'All four are the same word agreeing with a different noun, so the ear has to catch the shape rather than the meaning. The vowel after de is what separates them.',
            ref: 's04-forms',
          },
          {
            q: 'Fix this. « Il y a beaucoup du monde au marché. »',
            format: 'errorSpot',
            accept: ['Il y a beaucoup de monde au marché.', 'beaucoup de monde', 'beaucoup de'],
            answer: 'Il y a beaucoup de monde au marché.',
            why: 'The quantity is already named, so nothing goes between it and the noun. This one catches people because monde takes le and the du looks plausible.',
            ref: 's13-traps',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's23-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Five things you did not have this morning.',
    body: 'You can ask for an amount of something without accidentally buying one whole object of it, which is most of what this word is for. The last two points below are worth more to you than the shapes are: the shapes take five minutes and those two take a year, and you have just had them both named.',
    points: [
      REFRAME,
      "Du, de la and de l apostrophe are one word agreeing with the noun. Des is the plural, and you already had it.",
      'Name a quantity or a container and the article goes: beaucoup de café, un kilo de tomates.',
      'Say no and it collapses to de, exactly as un, une and des did. Le, la and les do not move.',
      'Four in five of the du you read is de and le stuck together. Try putting "some" in front of the English.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed by hand. Every figure is a fact about the
 * array directly above, and a display string is validated against nothing, so
 * the first mission added would have left the card confidently wrong with the
 * whole suite still green. It throws rather than degrades: a progress card
 * silently reporting "0 of 0" is worse than a build that stops.              */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's21-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.29.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Amounts and lines met', v: String(ITEM_IDS.length) },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
    { k: 'Pass mark', v: `${quiz.passMark}%` },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Five, and the weighting is the argument of the lesson: act 1 spends ONE
 * mission on which shape to use and act 2 spends five on the countable choice.
 * A shape that put three missions on du against de la and one on un against du
 * would be a1.03's gender skill wearing a third article, which a1.11 already
 * declined to rebuild.
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit. A flattering estimate buys a lesson that passes the
 * validator and exhausts the learner.                                        */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'A word you already own',
    sections: ['s01-scene', 's02-goals', 's03-family', 's04-forms'],
    milestone: 'You have watched one syllable decide what somebody handed you.',
    estScreens: 28,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'One of them, or some of it',
    sections: ['s05-pairs', 's06-reading', 's07-ear', 's08-cases', 's09-check'],
    milestone: 'You can hear the difference between a thing and an amount of it.',
    estScreens: 12,
  },
  {
    id: 'act3',
    title: 'When the article disappears',
    sections: ['s10-quantity', 's11-containers', 's12-negation', 's13-traps'],
    milestone: 'Two rules that both end in a bare de, and one that does not move at all.',
    estScreens: 14,
  },
  {
    id: 'act4',
    title: 'The other du, and the words banked',
    sections: ['s14-other-du', 's15-words', 's16-flash', 's17-dictation', 's18-speak', 's19-scenario'],
    milestone: 'You have separated two identical words, spelled them and said them out loud.',
    estScreens: 42,
    restPoints: ['s16-flash/halfway', 's18-speak/halfway'],
  },
  {
    id: 'act5',
    title: 'Prove it',
    sections: ['s20-review', 's21-progress', 's22-quiz', 's23-roundup'],
    milestone: 'Lesson complete.',
    estScreens: 40,
    restPoints: ['s20-review/halfway', 's22-quiz/after-r2', 's22-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Act 5 releases nothing because it teaches nothing new.         */

const DECK_TRANCHE: string[][] = [
  [...FORMS],
  [...CHOICE],
  [...QUANTITY, ...NEGATION],
  [...OTHER_DU, ...BANK],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * Five triggers, five drills, five retests, five quiz rounds, and that is not
 * a coincidence. `drillForRound` walks a round's `targets` and fires the drill
 * of the FIRST one that has any, then stops. So a drill named only in second
 * place never runs. Each drill below is the first target of exactly one round,
 * which is what makes all five reachable; the test asserts it rather than
 * trusting the ordering to survive an edit.                                  */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-article-dropped',
    description: 'Leaves the noun bare after a verb, because English puts nothing in front of it to translate.',
    detectOn: ['s03-family', 's04-forms', 's13-traps', 's22-quiz/r1-the-four-shapes'],
    drill: 'drill-article',
    retest: 'retest-article',
  },
  {
    id: 'err-un-for-du',
    description: 'Asks for one countable thing when they meant an amount, or the other way round. Both are correct French, so nothing corrects them.',
    detectOn: ['s01-scene', 's05-pairs', 's06-reading', 's09-check', 's22-quiz/r2-one-or-some'],
    drill: 'drill-count',
    retest: 'retest-count',
  },
  {
    id: 'err-quantity-du',
    description: 'Keeps du after a quantity word or a container: beaucoup du café, un kilo des tomates.',
    detectOn: ['s10-quantity', 's11-containers', 's13-traps', 's22-quiz/r3-once-a-quantity'],
    drill: 'drill-quantity',
    retest: 'retest-quantity',
  },
  {
    id: 'err-negation-de',
    description: 'Keeps du, de la or de l apostrophe under a negative instead of collapsing all three to de.',
    detectOn: ['s12-negation', 's13-traps', 's22-quiz/r4-saying-no'],
    drill: 'drill-negation',
    retest: 'retest-negation',
  },
  {
    id: 'err-other-du',
    description: 'Reads every du as an amount, including the four in five that are de and le squeezed together.',
    detectOn: ['s06-reading', 's14-other-du', 's22-quiz/r5-which-du'],
    drill: 'drill-other-du',
    retest: 'retest-other-du',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-article',
    title: 'The word English leaves out',
    format: 'flashcard',
    coach: 'Read the English on the left. Say the French on the right, out loud, and do not let the word in front go missing.',
    pairs: [
      ['some bread', 'du pain'],
      ['some coffee', 'du café'],
      ['some soup', 'de la soupe'],
      ['some water', "de l'eau"],
      ['I eat bread', 'Je mange du pain.'],
    ],
  },
  {
    id: 'retest-article',
    title: 'One more time',
    format: 'mcq',
    q: 'You are telling somebody what you eat in the morning. Bread.',
    opts: ['Je mange pain le matin.', 'Je mange du pain le matin.', 'Je mange le pain le matin.'],
    correct: 1,
    why: 'French does not leave the slot empty after a verb. An amount of bread takes du.',
  },
  {
    id: 'drill-count',
    title: 'A thing, or some of a thing?',
    format: 'sort',
    buckets: ['One of them', 'Some of it'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card
    // that teaches these. Passing strings here validates as broken ids.
    items: [
      'fr.a1.cafe.009', 'fr.a1.cafe.152', 'fr.a1.cuisine.262',
      'fr.a1.cuisine.007', 'fr.a1.cafe.153', 'fr.a1.cuisine.263',
    ],
    coach: 'Read each line and ask one question: could you count what is being asked for? If not, it is du, de la or de l apostrophe.',
  },
  {
    id: 'retest-count',
    title: 'One more time',
    format: 'mcq',
    q: 'You want cheese for the table. Not a whole cheese.',
    opts: ['Je voudrais un fromage.', 'Je voudrais du fromage.', 'Je voudrais le fromage.'],
    correct: 1,
    why: 'Un fromage is one whole wheel and a stall will hand you one. Du fromage is an amount of it.',
  },
  {
    id: 'drill-quantity',
    title: 'Say how much, lose the word',
    format: 'flashcard',
    coach: 'The left is the sentence without a quantity. Say the right out loud, and notice what is no longer in it.',
    pairs: [
      ['Je bois du café.', 'Je bois beaucoup de café.'],
      ['Je mets du sel.', 'Je mets un peu de sel.'],
      ['Tu manges du sucre.', 'Tu manges trop de sucre.'],
      ['du fromage', 'une tranche de fromage'],
      ["de l'eau", "une bouteille d'eau"],
    ],
  },
  {
    id: 'retest-quantity',
    title: 'One more time',
    format: 'mcq',
    q: '"A lot of coffee" in French is:',
    opts: ['beaucoup du café', 'beaucoup de café', 'beaucoup le café'],
    correct: 1,
    why: 'Beaucoup already says how much, so nothing goes between it and the noun.',
  },
  {
    id: 'drill-negation',
    title: 'Say no and watch it shrink',
    format: 'flashcard',
    coach: 'Say the negative out loud before you flip. Four of these collapse to de and one does not move at all.',
    pairs: [
      ['Je mange du pain.', 'Je ne mange pas de pain.'],
      ['Je fais de la soupe.', 'Je ne fais pas de soupe.'],
      ["Je bois de l'eau.", "Je ne bois pas d'eau."],
      ['Je mange des légumes.', 'Je ne mange pas de légumes.'],
      ["J'aime le pain.", "Je n'aime pas le pain."],
    ],
  },
  {
    id: 'retest-negation',
    title: 'One more time',
    format: 'mcq',
    q: 'Which sentence has a word in front of the noun that did NOT change?',
    opts: ['Je ne mange pas de pain.', "Je n'aime pas le pain.", "Je ne bois pas d'eau."],
    correct: 1,
    why: 'Le, la and les survive a negative untouched. Only du, de la, de l apostrophe and des collapse to de.',
  },
  {
    id: 'drill-other-du',
    title: 'An amount, or of the?',
    format: 'sort',
    buckets: ['An amount of something', 'Just de and le together'],
    items: [
      'fr.a1.cuisine.007', 'fr.a1.cafe.141', 'fr.a1.au-restaurant.185',
      'fr.a1.marche.140', 'fr.a1.maison.124', 'fr.a1.objets.165', 'fr.a1.au-restaurant.176',
    ],
    coach: 'Put "some" in front of the English. Some bread works, so that one is an amount. Some the bed does not.',
  },
  {
    id: 'retest-other-du',
    title: 'One more time',
    format: 'mcq',
    q: 'Which one is NOT about an amount of something?',
    opts: ['Il ajoute du sel dans la soupe.', 'La cuisine est à côté du salon.', 'Le chat boit du lait.'],
    correct: 1,
    why: 'À côté du salon is of the living room. There is no quantity of living room in it.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * The material a learner wants AFTER the lesson rather than during it. Kept out
 * of the flow so a mission stays one idea, and reachable from the sections that
 * preview it via `sheetId`. Layer 'deep' exempts these from the core density
 * caps, which is the point: a sheet is allowed to be dense, and it is the one
 * place in the product a table belongs.                                      */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.29.choice',
    title: 'Every choice in this lesson, on one screen',
    layer: 'deep',
    contains: ['One of them against some of it', 'What a quantity does', 'Which du is which'],
    sections: [
      {
        type: 'table',
        id: 'sheet-choice-table',
        title: 'One of them, some of it, all of it',
        layer: 'deep',
        cols: ['One of them', 'Some of it', 'The whole of it'],
        rows: [
          ['un café', 'du café', 'le café'],
          ['un pain', 'du pain', 'le pain'],
          ['un fromage', 'du fromage', 'le fromage'],
          ['une salade', 'de la salade', 'la salade'],
          ['une soupe', 'de la soupe', 'la soupe'],
          ['un verre d’eau', "de l'eau", "l'eau"],
          ['un légume', 'des légumes', 'les légumes'],
        ],
      },
      {
        type: 'cheatSheet',
        id: 'sheet-choice-rules',
        title: 'The four places English points the wrong way',
        layer: 'deep',
        rows: [
          { k: 'A bare noun', v: 'Je mange du pain, not Je mange pain. French does not leave that slot empty.', say: 'Je mange du pain.' },
          { k: 'One cup or coffee', v: 'Un café is a cup. Du café is coffee. Both correct, and they order different things.', say: 'Un café. Du café.' },
          { k: 'After a quantity', v: 'beaucoup de café, un peu de sel, trop de sucre. Never beaucoup du café.', say: 'beaucoup de café' },
          { k: 'After a container', v: 'un kilo de tomates, une tranche de fromage, une bouteille d’eau.', say: 'un kilo de tomates' },
          { k: 'Under a negative', v: "Je ne mange pas de pain. Du, de la, de l' and des all become de.", say: 'Je ne mange pas de pain.' },
          { k: 'Le under a negative', v: "Je n'aime pas le pain. Le, la and les do not move at all.", say: "Je n'aime pas le pain." },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-choice-otherdu',
        title: 'Telling the two du apart',
        layer: 'deep',
        body: 'Across the a1 corpus, roughly four rows in five holding du, de la or de l apostrophe are not about an amount at all. They are de and le squeezed together, and they turn up after a preposition (près du lit, à côté du salon), between two nouns (l odeur du pain, le plat du jour, la fin du repas), and in fixed compounds you already own (l emploi du temps). The test is one second long: put "some" in front of the English. Some bread works, so je mange du pain is this lesson. Some the bed does not, so près du lit is the other one. Nothing else in French depends on getting this right, but everything you READ does, because you will otherwise be looking for a quantity in four sentences out of five that do not have one.',
      },
    ],
  },
];

const PARTITIFS_LESSON_AUTHORED: Lesson = {
  id: 'a1.29.l1',
  unitId: 'a1.29',
  seq: 1,
  title: 'Les articles partitifs',
  level: 'a1',
  // The Den, the unit page and the mission list all derive the lesson number
  // from the unit's `seq`, and a1.29 sits at seq 8 because a1.27 and a1.28 were
  // inserted earlier in the track. `tag` is the ONE place that number is
  // authored by hand, so a tag built from the unit id would say 29 while the
  // header above it says 08. a1.03 shipped exactly that bug (commit 56c79a7),
  // and a1.04 ships it today: its tag reads LEÇON 04 at seq 6.
  tag: 'A1 · LEÇON 08',
  intro:
    'Anyone can learn that du is masculine and de la is feminine; that takes five minutes and the noun decides it anyway. What stays hard is a line English never makes you draw. Un café and du café are both correct, they order different things, and nothing will correct you.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The unit shipped with lessonIds: [], so this is the first lesson here and
  // the counter starts at 1. It moves forward on every rebuild: the merge
  // script prints both sides, and "replacing v3 with v1" reads as a rollback.
  version: 1,

  grammarAssumed: [
    'Every noun carries a gender, and the article in front of it is the choice that gender makes',
    'The definite article le, la, les, and its use in front of a general noun',
    'Elision of le and la to l apostrophe in front of a vowel sound',
    'The indefinite article un, une and des, and its collapse to de under a negative',
  ],
  grammarIntroduced: [
    "The partitive article du, de la and de l', for an unspecified quantity of an uncountable noun",
    'The countable/uncountable distinction as the choice between un and du on the same noun',
    'Des as the partitive plural, extending the indefinite plural already taught in a1.11',
    'Bare de after an expression of quantity or a container, and its elision to d apostrophe',
    'The partitive reducing to de under negation, extending the same rule from the indefinite',
    "The formal identity of the partitive du with the contracted preposition de + le, and how to tell them apart",
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'The Partitive Articles',
    subFr: 'Les articles partitifs',
    introFr: "Un café ou du café ? Les deux sont corrects, et ils ne commandent pas la même chose.",
    minutes: 24,
    difficulty: 2,
    glyph: 'du',
    screens: 136,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PARTITIFS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // Briefs only. CLIP_MANIFEST is empty by design, so every card falls back
    // to device TTS until the studio delivers; a recordingId resolving to
    // nothing is the correct shipping state and not a bug.
    recorded: [
      {
        id: 'rec-a1-29-forms',
        desc:
          'The ten amounts of the group drill, read in ONE TAKE by ONE voice at ONE speed. The learner is comparing ' +
          'four shapes of the same word, so a set split across takes has them comparing four performances instead. ' +
          'Keep du tight and rounded: it is /y/, not /u/ and not /ø/, and a relaxed reading of it lands on deux.',
        clipIds: [
          'du-pain', 'du-cafe', 'du-lait', 'du-riz', 'du-fromage',
          'de-la-soupe', 'de-la-confiture', 'de-la-salade', 'de-leau', 'des-legumes',
        ],
      },
      {
        id: 'rec-a1-29-pairs',
        desc:
          'The two minimal pairs this lesson turns on, un against du and du against de, each pair recorded BACK TO ' +
          `BACK IN ONE TAKE by the same voice at the same speed, in the same way ${unitRef('sons.07')} pins rec-h-pairs and ${unitRef('a1.11')} ` +
          'pins rec-a1-11-pairs. Both pairs are one vowel and both carry the whole meaning. Then the four listening ' +
          'lines at natural pace and again at 0.65. The warning that matters: DO NOT OVER-ROUND du. Lengthened or ' +
          'relaxed it becomes deux, which is a real word a learner could plausibly have heard, and the exercise ' +
          'stops being about articles.',
        clipIds: [
          'un-du-pair', 'du-de-pair',
          'je-voudrais-du-pain', 'je-voudrais-un-pain',
          'je-bois-du-cafe', 'je-bois-beaucoup-de-cafe',
        ],
      },
      {
        id: 'rec-a1-29-traps',
        desc:
          'The four English-speaker traps, wrong form then right form, with a clear beat between them so the learner ' +
          'hears the difference rather than a correction. Je mange pain / Je mange du pain. Je voudrais un café / ' +
          'Je voudrais du café. Beaucoup du café / Beaucoup de café. Je ne mange pas du pain / Je ne mange pas de ' +
          'pain. Read the wrong version plainly, not comically: two of these four are things a French speaker says.',
        clipIds: ['trap-bare-noun', 'trap-un-for-du', 'trap-quantity', 'trap-negation'],
      },
    ],
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const PARTITIFS_ITEM_IDS = ITEM_IDS;
export const PARTITIFS_SPEAK_IDS = SPEAK_IDS;
export const PARTITIFS_DICTATION_IDS = DICTATION_IDS;
export const PARTITIFS_TRANCHES = DECK_TRANCHE;
/** The theme the unit is rebound to. Named here so the batch, the merge and the
 *  test all read the decision from one place instead of three string literals. */
export const PARTITIFS_UNIT_THEME = 'cuisine';

// The role-play alternatives are NOT authored in this file. `userEn` and the
// accepted `alts[]` for this lesson's scenario live in data/scenario-alts.ts,
// and withScenarioAlts attaches them here so that every consumer — the batch
// that writes Postgres, the merge script that writes seed.json, and the tests
// that compare the two — sees the same enriched lesson.
//
// Before 2026-08-09 they lived in seed.json ONLY. apply-scenario-alts.ts wrote
// the seed and said so; nobody updated the fourteen authored sources, so each
// of their batches held a poorer copy of its own lesson and would have written
// it straight back. That is not hypothetical: re-rendering a1.03 destroyed five
// turns exactly this way on 2026-08-07.
export const PARTITIFS_LESSON: Lesson = withScenarioAlts(PARTITIFS_LESSON_AUTHORED);
