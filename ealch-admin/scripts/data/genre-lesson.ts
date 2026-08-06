// a1.03.l1 "Le genre des noms" — the mission journey.
//
// ── What this lesson is, and what it refuses to be ─────────────────────────
//
// Every beginner course teaches gender the same way: nouns ending in -e are
// feminine, here is a table of thirty endings, good luck. Measured against this
// repo's own corpus the famous rule is right 70% of the time over 873 nouns,
// and most of the thirty endings cover four words each.
//
// So this lesson makes a smaller claim and a truer one. Ten endings work, they
// cover about a fifth of the gendered nouns here, and across those they are
// right 96 times in 100. Everything else has to be STORED, with its article,
// one noun at a time. That is uncomfortable to teach and it is what actually
// happens, and a lesson that pretends otherwise is the one the learner stops
// believing in week three.
//
// The three consequences that shaped the whole build:
//
//   1. This is a lesson about storage before it is a lesson about derivation.
//      Act 3 teaches the part you can work out. Acts 2, 4 and 5 are about the
//      part you cannot, which is most of it.
//
//   2. The unit of teaching is the noun PLUS its article, never the noun.
//      Every card, every flashcard back, every quiz answer carries one. See
//      REFRAME in genre-terms.ts for why that is the reframe rather than
//      anything about gender itself.
//
//   3. The exceptions are the lesson, not an appendix. -eau is 92% masculine
//      and the 8% is l'eau and la peau, which a beginner meets in week one. A
//      rule taught without its counterexample is a rule the learner will trust
//      in exactly the wrong place, so mission 11 exists and every rule in
//      genre-endings.ts ships what breaks it.
//
// ── The mission this lesson turns on ──────────────────────────────────────
//
// Mission 12, l apostrophe. In front of a vowel `le` and `la` both shrink to
// `l'`, and 222 nouns in this corpus are stored that way. The card shows
// l'armoire, l'escalier, l'eau, l'enfant, and says nothing whatever about
// gender. It is the strongest thing in the lesson and it is invisible until
// somebody names it, which is why mission 13 is a `listening` mission with
// `questionsInModal`: play the noun, ask which article it really takes, and
// give the learner nothing on screen to reverse-engineer from. The whole point
// is that the information is absent, and no reading-shaped section can make
// that point.
//
// ── What the corpus said that the brief did not ───────────────────────────
//
// Four claims were checked against the seed before anything was authored, and
// three of them changed the build:
//
//   THE ENDING STATISTICS ARE POLLUTED BY PHRASES. `une part de gâteau` is
//   feminine because of `part`, and counted as an -eau row it reads as a
//   counterexample to a rule it never touched. Over every gendered item -eau
//   scores 88%; over single-word nouns it scores 92%, and the four exceptions
//   the wider count invented were all compounds. The population is narrowed in
//   gender.logic.ts, with the reasoning written down there.
//
//   TWELVE ROWS CARRY A `gender` FIELD ON SOMETHING THAT IS NOT A NOUN. The
//   brief named one (`lire`). There are twelve: five verbs in `ecole`, four in
//   `deplacements`, and three adjectives in `famille`. Reported in the handover
//   rather than quietly routed around, and excluded from the measurement.
//
//   THE 96% ARTICLE CLAIM IS ACTUALLY 99%. 1,583 of the 1,598 a1 gendered word
//   items carry their article in `fr`. The reframe is on even firmer ground
//   than the brief thought.
//
//   THE l' COUNT HELD EXACTLY. 222 word items, 165 of them at a1.
//
// ── Section shapes with a history ─────────────────────────────────────────
//
//   The scene's beats are a named const, each with its own size and audio, and
//   the section sets no `size`: ownsLayout() ignores section size so the field
//   looks inert, but density.logic.ts reads xl as a 12-word cap on every string
//   in the section. Prose cannot live there.
//
//   The two group drills run at size xl, which is a sons mechanic an A1 lesson
//   normally has no business with. It is right here for one reason: this is the
//   only A1 topic whose unit of teaching is a single word. `une baguette` is
//   two words and fits on a 56pt card. Each drill is split into a word deck and
//   its own control page, the way sons.06 splits its families, because at xl a
//   deck and a question on one screen puts the question below the fold.
//
//   commonErrors carries `swipe: true` and `size: 'lg'`. Without swipe it
//   renders as a scrolling list rather than one trap per screen, and before the
//   fallback moved out of the switch's `default:` it drew nothing at all.
//
//   `reading` carries questionsInModal WITH questions, which is the only path
//   that reaches PassagePage and therefore the only path that draws a glossary.
//   The passage is ONE BLOCK: PassagePage splits on sentence punctuation and
//   renders the pieces inline, so an authored `\n` is consumed as whitespace.
//
//   ONE quiz section. lessonPager.logic.ts appends exactly one quiz page and
//   resolves it with sections.find(s => s.type === 'quiz'). A second is a set
//   of questions no learner reaches.
//
//   The full ending table is a `table` at layer 'deep', inside a reference
//   sheet. density.logic.ts fires `table-in-core` on any table in the flow, by
//   design. What the flow shows is a `tapTable` preview of ten rows.
//
//   `autoplay` is not authored anywhere. It is declared in schema.ts and
//   implemented in no component. `audioFirst` is the one that does the work.
//
//   The setting carries no image. assets/lessons/ holds alphabet, muettes,
//   rythme and salutations and nothing for this lesson, and Metro resolves
//   require() statically, so registering a ref with no file breaks the bundle
//   rather than degrading to no image.
//
// ── themes: left absent, deliberately ─────────────────────────────────────
//
// a1.03 carries no `themes` key and this build does not add one. Gender is a
// property of every noun rather than a topic, there is no `genre` theme, and
// inventing one would be a deck with nothing coherent in it.
//
// Binding the themes the lesson teaches FROM was the other option and it was
// rejected on the evidence: the 41 nouns here come from 13 different themes
// (ecole, maison, cuisine, corps, deplacements, cafe, marche, metiers, objets,
// famille, animaux, routines, sports-et-loisirs, plus one at sons level). That
// is not concentration, it is deliberate spread, because an ending rule shown
// only inside `cuisine` reads as a fact about food. Binding three of the
// thirteen would point the Den's chips at decks that are not what this unit is
// about. a1.05 Subject Pronouns and a1.18 Negation are themeless for the same
// reason, so the unit is in company rather than alone.

import type {
  ErrorTrigger,
  Lesson,
  LessonAct,
  LessonDrill,
  LessonSection,
  ReferenceSheet,
  SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { GENRE_TERMS, REFRAME } from './genre-terms.ts';
import {
  ENDING_ITEM_IDS,
  ENDING_RULES,
  ENDINGS_ACCURACY,
  ENDINGS_COVERED,
  FEMININE_RULES,
  MASCULINE_RULES,
  MORE_ENDINGS,
  WORTHLESS_ENDINGS,
  type EndingRule,
  type Noun,
} from './genre-endings.ts';

export { REFRAME };

/* ─── The nouns this lesson teaches beyond the endings ─────────────────────
 *
 * Nothing here is authored into the corpus. Every id already exists, published,
 * with the drills it needs, which is the strongest possible answer to "how many
 * items did you author": none. A lesson that invents its own words is a lesson
 * whose words are absent from the flashcard hub, the SRS and every other
 * lesson, so reference by id is the default and authoring is the exception that
 * needs a reason.                                                            */

/** A noun whose article has been elided away, and the form that gives it back.
 *
 *  `elided` is what the corpus stores and what the learner will meet on a card.
 *  `shown` is the un/une form, which is the whole trick of the mission: un and
 *  une do NOT elide, so switching to them is how you check what l' was
 *  covering. Both are asserted against the corpus row. */
type HiddenNoun = { id: string; elided: string; shown: string; en: string; g: 'm' | 'f' };

/** Twelve, six of each gender.
 *
 *  Balanced on purpose. The corpus runs 60/40 masculine, so a set chosen for
 *  familiarity alone drifts masculine and the learner comes away with a bias
 *  dressed as a lesson.
 *
 *  Two of the twelve are also ending-rule heroes, and that split is the teaching
 *  rather than an accident. For l'escalier and l'appartement the ending gives
 *  back exactly what the elision took, which is the good case. For the other ten
 *  it does not, and l'armoire is the sharpest of those: it is the word the
 *  opening scene catches the learner on, no rule in the lesson reaches it, and
 *  its article can only ever be stored. */
const HIDDEN: HiddenNoun[] = [
  { id: 'fr.a1.maison.019', elided: "l'escalier", shown: 'un escalier', en: 'the staircase', g: 'm' },
  { id: 'fr.a1.ecole.042', elided: "l'ordinateur", shown: 'un ordinateur', en: 'the computer', g: 'm' },
  { id: 'fr.a1.maison.077', elided: "l'appartement", shown: 'un appartement', en: 'the apartment', g: 'm' },
  { id: 'fr.a1.famille.020', elided: "l'enfant", shown: 'un enfant', en: 'the child', g: 'm' },
  { id: 'fr.a1.deplacements.021', elided: "l'avion", shown: 'un avion', en: 'the plane', g: 'm' },
  { id: 'fr.a1.cuisine.034', elided: "l'oignon", shown: 'un oignon', en: 'the onion', g: 'm' },
  { id: 'fr.a1.maison.026', elided: "l'armoire", shown: 'une armoire', en: 'the wardrobe', g: 'f' },
  { id: 'fr.a1.cuisine.010', elided: "l'eau", shown: 'une eau', en: 'the water', g: 'f' },
  { id: 'fr.a1.ecole.013', elided: "l'école", shown: 'une école', en: 'the school', g: 'f' },
  { id: 'fr.a1.corps.023', elided: "l'oreille", shown: 'une oreille', en: 'the ear', g: 'f' },
  { id: 'fr.a1.corps.028', elided: "l'épaule", shown: 'une épaule', en: 'the shoulder', g: 'f' },
  { id: 'fr.a1.cuisine.059', elided: "l'huile", shown: 'une huile', en: 'the oil', g: 'f' },
];

/** The one pair in the whole corpus where a spelling takes both genders and
 *  means two different things. Verified: there is exactly one, so it is a card
 *  and a quiz question rather than a mission. A set of one is not a pattern. */
const LIVRE: Noun[] = [
  { id: 'fr.a1.ecole.029', fr: 'le livre', en: 'the book' },
  { id: 'fr.sons.nombres.135', fr: 'la livre', en: 'the pound' },
];

/** Plural-only nouns, shown once and then deliberately kept out of every
 *  teaching surface. `les` and `des` are the same word for both genders, so a
 *  learner asked to sort `les ciseaux` is being asked to recall rather than to
 *  work anything out. 43 of the a1 gendered items are like this. */
const PLURAL_ONLY: (Noun & { g: 'm' | 'f' })[] = [
  { id: 'fr.a1.objets.013', fr: 'des lunettes', en: 'glasses', g: 'f' },
  { id: 'fr.a1.ecole.039', fr: 'les ciseaux', en: 'the scissors', g: 'm' },
  { id: 'fr.a1.maison.011', fr: 'les toilettes', en: 'the toilet', g: 'f' },
];

/** The four dictation sentences, one per claim the lesson makes.
 *
 *  Drawn from SENTENCES rather than from words, and that is forced rather than
 *  chosen: not one of the 1,598 a1 gendered word items carries the `dictation`
 *  drill, so a dictée naming any of them renders an empty mission. 899 a1
 *  sentences do carry it. Writing `la page` inside a sentence is the real skill
 *  anyway, and all four land in word mode (over 16 letters, more than one
 *  word), so the learner assembles word tiles with decoys mixed in.
 *
 *  .321 is la page, the -age exception. .326 is la main, which -in does not
 *  predict. objets.149 is l'ordinateur, where the article is hidden, beside le
 *  bureau, where -eau gives one back. dictee.262 is une question against le
 *  professeur: two of the ten endings and both genders in one line. */
const DICTATION = ['fr.a1.dictee.321', 'fr.a1.dictee.326', 'fr.a1.objets.149', 'fr.a1.dictee.262'];

/** Said out loud and scored by the mic. Every one carries the `voiceflash`
 *  drill; an item without it renders as a card the mic cannot score, which
 *  reads as a broken mission rather than a missing tag. Asserted in the batch
 *  against the DATABASE, because the seed and Postgres drift. */
const SPEAK_IDS = [
  'fr.a1.ecole.003', 'fr.a1.maison.077', 'fr.a1.deplacements.031', 'fr.a1.ecole.032', 'fr.a1.cuisine.011',
  'fr.a1.maison.020', 'fr.a1.maison.019', 'fr.a1.ecole.029',
  'fr.a1.ecole.046', 'fr.a1.deplacements.018', 'fr.a1.cafe.012', 'fr.a1.cuisine.001', 'fr.a1.maison.016',
  'fr.a1.cuisine.010', 'fr.a1.corps.043', 'fr.a1.ecole.087', 'fr.a1.ecole.013', 'fr.a1.maison.026',
];

const HIDDEN_IDS = HIDDEN.map((h) => h.id);
const LIVRE_IDS = LIVRE.map((n) => n.id);
const PLURAL_IDS = PLURAL_ONLY.map((n) => n.id);

const ITEM_IDS = [
  ...new Set([...ENDING_ITEM_IDS, ...HIDDEN_IDS, ...LIVRE_IDS, ...PLURAL_IDS, ...DICTATION]),
];

/* ─── Mission 1 · Scene ───────────────────────────────────────────────────
 *
 * The A1 register of stakes for THIS unit is not being misunderstood. It is
 * stalling, mid-sentence, over a word you already own. That is a different
 * failure from a1.01's (you got the social move wrong) and from a1.02's (you
 * could not catch the number), and it is the one every learner of French has
 * had: the noun arrives, and the half-second before it does not.
 *
 * So the scene is not built on a hard word. It is built on `armoire`, which the
 * learner is assumed to know, because "I know this word and I have to guess" is
 * the whole point and a word they did not know would let them off.
 *
 * The choice beat is a real fork with both options plausible: un armoire is
 * exactly what an English speaker produces, and nothing in the word warns them.
 * The dealer does not correct it out loud, which is what actually happens.     */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A second-hand shop in Lyon, twenty minutes before it closes. You have found the thing you came for.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'The dealer',
    fr: 'Bonjour, vous cherchez quelque chose ?',
    en: 'Hello, are you looking for something?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-03-scene' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'Armoire. You learned it on a card last Tuesday and you have not forgotten it.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You have to say it now. Which one comes out?',
    options: [
      {
        fr: 'Je cherche un armoire.',
        en: 'the one your English ear reaches for',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Je cherche une armoire.',
        en: 'the one the word actually takes',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Right, and you may not be able to say why. Nothing on the card you learned it from said so.',
      breaks: 'One letter, and it is the first thing a French ear uses to place you. The word was never the problem.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The dealer',
    fr: 'Une armoire ? Elle est au fond, à droite.',
    en: 'A wardrobe? It is at the back, on the right.',
    stage: 'She says it back with the article corrected, and does not mention it.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-03-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'The card taught you half a word',
    // 20 words, and the count is load-bearing. The shipped scene breaks run 24
    // to 40; at 34 words this one pushed Continue below the fold on a Pixel 6,
    // behind a scroll chevron, which is usable and is not the shape a break is
    // meant to have. Found on a device on 2026-08-05. The clause that was cut
    // ("so you had a word you could look up and not one you could use") is
    // carried by the coach line under it and by the mission-3 deck, so this is
    // shorter on merit as well as for layout.
    body: 'You learned the noun. The choice that has to be made before you finish saying it was never on the card.',
    wrong: {
      fr: 'armoire',
      ipa: '/aʁ.mwaʁ/',
      en: 'what you learned',
    },
    right: {
      fr: 'une armoire',
      ipa: '/yn aʁ.mwaʁ/',
      en: 'what you needed',
    },
    coach: 'Same noun. The word in front of it is the part that was missing.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-03-pairs' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    fr: 'Merci. Je prends l’armoire.',
    en: 'Thank you. I will take the wardrobe.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The dealer',
    fr: 'L’armoire, très bien. Quatre-vingts euros.',
    en: 'The wardrobe, very good. Eighty euros.',
    stage: 'And now even she is not telling you which one it is.',
    audio: { mode: 'tts', lang: 'fr-FR', recordingId: 'rec-a1-03-scene' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'You knew the noun all week. The half you needed was on the other side of it.',
  },
];

/* ─── Helpers that build repeated card shapes from the ending data ──────────
 *
 * The ten rules are authored once, in genre-endings.ts, and rendered into four
 * surfaces: the preview table, two word decks, and the reference sheet. Built
 * rather than retyped, so a corrected accuracy figure moves everywhere at once
 * and no card can disagree with the file the test measures.                   */

/** One word-deck card for a rule's hero noun. `note` is the rule, in the
 *  learner's terms; it is exempt from the xl word cap, which is what lets it be
 *  a sentence rather than a label. */
const wordCard = (r: EndingRule) => ({
  fr: r.example.fr,
  en: r.example.en,
  itemId: r.example.id,
  note: `Ends in -${r.ending}, so ${r.article}. Right ${r.accuracy}% of the time here.`,
});

const ruleRow = (r: EndingRule) => ({
  cells: [`-${r.ending}`, r.article, `${r.accuracy}%`],
  say: r.example.fr,
  detail: {
    title: `-${r.ending}`,
    body: `${r.line} Worked example: ${r.example.fr}, ${r.example.en}. ${r.items} nouns here end this way.`,
    say: r.example.fr,
  },
});

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the half you never stored ─────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Word You Already Knew',
    frSub: 'Je cherche une armoire',
    render: 'screens',
    layer: 'core',
    terms: ['pair'],
    say: {
      text: 'Watch this happen. You know the word, you have known it for a week, and you still have to guess.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A second-hand furniture shop',
      city: 'Lyon',
      time: 'Thursday, twenty to six',
      ambience: 'room-tone-shop',
    },
    beats: SCENE_BEATS,
    // The reframe is referenced, never retyped, so this appearance cannot drift
    // out of agreement with the other seven the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} Store the pair and this stops happening.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end of this you will know which nouns tell you and which ones never will.`,
    goals: [
      { t: 'Pick un or une without stopping', s: 'Reach for the article at the same moment as the noun, rather than a beat after it.' },
      { t: 'Read the article off the ending', s: 'Use the ten endings that genuinely predict it, and know how often each one is right.' },
      { t: 'Spot the nouns that tell you nothing', s: 'Notice l apostrophe and ask which article is hiding under it, every time.' },
      { t: 'Store a new noun properly', s: 'Write down une armoire rather than armoire, the way this app already does.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-pair',
    title: 'One Word, Two Halves',
    frSub: 'Le nom et son article',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['pair', 'storage'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-03-pairs' },
    say: `${REFRAME} Here is what that means on one word.`,
    cards: [
      {
        label: 'Half of it',
        head: 'A word you can look up',
        fr: 'armoire',
        sub: 'ahr-MWAHR',
        body: 'This is what a dictionary gives you and what most cards give you. It is enough to recognise the word when somebody else says it, and it is not enough to say it yourself.',
      },
      {
        label: 'All of it',
        head: 'A word you can use',
        fr: 'une armoire',
        sub: 'ün ahr-MWAHR',
        body: 'The article is not decoration on the front. It is a decision you have to make before you finish the first syllable, and there is no time to work it out once you have started.',
      },
      {
        label: 'Already the rule here',
        head: 'Look at any card in this app',
        fr: 'une baguette · le fromage',
        sub: 'both stored with the article',
        body: 'Nearly every noun in this app already carries its article. That is not a convention this lesson is proposing. It is one the words were built on, and a card that shows you the bare noun has quietly taught you to store it bare.',
      },
    ],
  },

  /* ── Act 2: the rule you were given ───────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's04-finale',
    title: 'The Rule You Were Given',
    frSub: 'Le e final',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['finalE', 'storage'],
    say: 'Every course starts here, and this is the first time anybody has measured it for you.',
    cards: [
      {
        label: 'The rule',
        head: 'Nouns ending in e are feminine',
        fr: 'la table · la porte · la voiture',
        sub: 'three that obey it',
        body: `You have almost certainly been given this one. Over the ${WORTHLESS_ENDINGS[0].items} nouns in this app that end in e, it is right ${WORTHLESS_ENDINGS[0].accuracy}% of the time.`,
      },
      {
        label: 'What that costs',
        head: 'Wrong about one noun in three',
        fr: 'le livre · le fromage · le frère',
        sub: 'three that do not',
        body: 'Seven in ten is often enough to sound wrong in every second sentence and rarely enough that you ever stop trusting it. That combination is worse than having no rule at all.',
      },
      {
        label: 'What to do with it',
        head: 'Keep it as a lean',
        fr: 'la table',
        sub: 'a guess, not a decision',
        body: 'If you have to guess and the noun ends in e, guess feminine. Never let it settle an article you are about to say out loud, and never let it stop you looking the word up.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's05-ignore',
    title: 'Three Endings To Ignore',
    frSub: 'Trois fausses pistes',
    layer: 'core',
    terms: ['finalE'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-03-endings' },
    say: 'Three endings that look like rules. Tap a row and you get the same ending going both ways.',
    cols: ['Ending', 'Right', 'Nouns'],
    rows: WORTHLESS_ENDINGS.map((w) => ({
      cells: [`-${w.ending}`, `${w.accuracy}%`, String(w.items)],
      say: `${w.bothWays[0].fr}, ${w.bothWays[1].fr}`,
      detail: {
        title: `-${w.ending}`,
        body: `${w.line} ${w.bothWays[0].fr} is masculine and ${w.bothWays[1].fr} is feminine, and nothing on the page separates them.`,
        say: `${w.bothWays[0].fr}, ${w.bothWays[1].fr}`,
      },
    })),
  },

  /* ── Act 3: the ten that work ─────────────────────────────────────────── */

  {
    type: 'tapTable',
    id: 's06-ten',
    title: 'Ten Endings That Work',
    frSub: 'Les dix terminaisons',
    layer: 'core',
    terms: ['endings', 'storage'],
    sheetId: 'sheet.a1.03.endings',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-03-endings' },
    say: `Ten endings, ${ENDINGS_COVERED} nouns between them, right ${ENDINGS_ACCURACY} times in a hundred. Tap a row for what breaks it.`,
    cols: ['Ending', 'Takes', 'Right'],
    rows: ENDING_RULES.map(ruleRow),
  },

  {
    type: 'groupDrill',
    id: 's07-masc',
    title: 'The Five That Say Un',
    frSub: 'Cinq terminaisons masculines',
    layer: 'core',
    size: 'xl',
    terms: ['endings'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-03-endings' },
    say: 'One noun per screen. Read the ending before you read the word, and the article is already there.',
    groups: [
      {
        label: 'Read the ending first',
        items: MASCULINE_RULES.map(wordCard),
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's08-masc-check',
    title: 'Which One Is It?',
    frSub: 'Un ou une ?',
    layer: 'core',
    size: 'xl',
    terms: ['endings'],
    say: 'A word the deck did not show you. The ending is the only thing you have.',
    groups: [
      {
        label: 'One question, then on',
        items: [],
        check: {
          q: 'New word: chauffage. Which article?',
          opts: ['un', 'une', 'either', 'no way to tell'],
          correct: 0,
          why: 'It ends in -age, which takes un nine times in ten. La page and la cage are the two to store.',
        },
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's09-fem',
    title: 'The Five That Say Une',
    frSub: 'Cinq terminaisons féminines',
    layer: 'core',
    size: 'xl',
    terms: ['endings'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-03-endings' },
    say: 'Five more, the other way. Two of these have never once been wrong in this corpus.',
    groups: [
      {
        label: 'Read the ending first',
        items: FEMININE_RULES.map(wordCard),
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's10-fem-check',
    title: 'Which One Now?',
    frSub: 'Et celui-ci ?',
    layer: 'core',
    size: 'xl',
    terms: ['endings'],
    say: 'Same again, and this one is a word you may never have met.',
    groups: [
      {
        label: 'One question, then on',
        items: [],
        check: {
          q: 'New word: lecture. Which article?',
          opts: ['un', 'une', 'either', 'no way to tell'],
          correct: 1,
          why: 'It ends in -ure, which has no exception in this corpus. The final e is what makes it -ure and not -ur.',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's11-breaks',
    title: 'What Breaks The Rules',
    frSub: 'Les exceptions',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['endings', 'storage'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-03-endings' },
    say: 'A rule without its exception is a rule you will trust in exactly the wrong place.',
    cards: [
      {
        label: '-eau',
        head: 'The two you will meet first',
        fr: 'l’eau · la peau',
        sub: 'both feminine',
        body: 'Thirty-four of the thirty-seven -eau nouns here take un. The ones that do not are water and skin, which is to say the two you will need in your first week.',
      },
      {
        label: '-age',
        head: 'A page and a cage',
        fr: 'la page · la cage',
        sub: 'both feminine',
        body: 'Nine -age nouns in ten take un: le fromage, le voyage, le garage. These two go the other way and there is nothing in either word that says so.',
      },
      {
        label: 'The rest',
        head: 'Three more worth storing',
        fr: 'le squelette · un capitaine · le pare-brise',
        sub: 'against -ette, -ine and -ise',
        body: 'One each. Store an exception the same way you store anything else, which is with the article attached to it, because there is nothing to work out and never will be.',
      },
      {
        label: 'Not exceptions',
        head: 'Words that only look like they qualify',
        fr: 'la caissière · la dent · le mur',
        sub: 'against -ier, -ment and -ure',
        body: 'None of these breaks a rule. They fall just outside one and get filed under it anyway. La caissière is -ière, la dent is -ent rather than -ment, and le mur has no final e, so it is not -ure at all.',
      },
    ],
  },

  /* ── Act 4: when the article is gone ──────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's12-hidden',
    title: 'The Article That Hides',
    frSub: 'Devant une voyelle',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['hidden', 'pair'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-03-hidden' },
    say: `${REFRAME} And here are two hundred nouns where the card refuses to tell you it.`,
    cards: [
      {
        label: 'These survive',
        head: 'Un and une never change',
        fr: 'un escalier · une armoire',
        sub: 'both still readable',
        body: 'In front of a vowel un stays un and une stays une. The whole distinction is intact, and you can hear it as well as see it.',
      },
      {
        label: 'These do not',
        head: 'Le and la both become l’',
        fr: 'l’escalier · l’armoire',
        sub: 'no longer readable',
        body: 'One is masculine and one is feminine and they now look identical. More than two hundred nouns in this app are stored this way, so this is not a rare corner.',
      },
      {
        label: 'The habit',
        head: 'Ask, the moment you see it',
        fr: 'l’huile',
        sub: 'so which is it?',
        body: 'There is no rule here to learn, only something to do. When a new noun arrives wearing l apostrophe, switch it to un or une in your head before you store it. Nothing later will ask on your behalf.',
      },
    ],
  },

  {
    type: 'listening',
    id: 's13-listen',
    title: 'Listen: Which One?',
    frSub: 'Écoutez bien',
    layer: 'core',
    questionsInModal: true,
    terms: ['hidden'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-03-hidden' },
    // The point of the mission is that the audio withholds the answer, which is
    // why it is a listening section and not a reading one. There is nothing on
    // screen to reverse-engineer from, which no other section type can do.
    say: 'Four sentences. The answer is not in any of them, and that is what you are here to notice.',
    lines: [
      { fr: 'L’armoire est dans la chambre.', en: 'The wardrobe is in the bedroom.' },
      { fr: 'L’escalier est à droite.', en: 'The staircase is on the right.' },
      { fr: 'L’eau est froide ce matin.', en: 'The water is cold this morning.' },
      { fr: 'L’ordinateur est sur le bureau.', en: 'The computer is on the desk.' },
    ],
    questions: [
      {
        q: 'L’armoire. Which article is under the apostrophe?',
        opts: ['la', 'le', 'you cannot tell from this', 'both are used'],
        correct: 0,
        why: 'Armoire is feminine, so it is la, shortened. Nothing you heard or saw said so, which is the whole trap.',
      },
      {
        q: 'L’escalier. Which one, and how could you have worked it out?',
        opts: ['la, from the sentence', 'le, from the ending -ier', 'le, from the sound', 'there is no way'],
        correct: 1,
        why: 'Escalier ends in -ier, which takes un across all fifty-five here. The ending gives back what l’ hid.',
      },
      {
        q: 'You meet a new noun written l’usine. What do you know about it?',
        opts: ['it is masculine', 'it is feminine', 'nothing at all', 'it is plural'],
        correct: 2,
        why: 'Le and la both shrink to l apostrophe before a vowel, so the written form carries no gender information at all.',
      },
    ],
  },

  {
    type: 'vocabThemes',
    id: 's14-hidden-deck',
    title: 'Twelve Hidden Nouns',
    frSub: 'Douze noms élidés',
    layer: 'core',
    terms: ['hidden', 'storage'],
    sheetId: 'sheet.a1.03.hidden',
    say: 'Twelve nouns whose cards tell you nothing. The line under each one is what you actually store.',
    themes: [
      {
        title: 'Hidden, and masculine',
        cards: HIDDEN.filter((h) => h.g === 'm').map((h) => ({ fr: h.elided, sub: h.shown, en: h.en })),
      },
      {
        title: 'Hidden, and feminine',
        cards: HIDDEN.filter((h) => h.g === 'f').map((h) => ({ fr: h.elided, sub: h.shown, en: h.en })),
      },
    ],
  },

  {
    type: 'examples',
    id: 's15-livre',
    title: 'One Word, Two Genders',
    frSub: 'Le livre et la livre',
    layer: 'core',
    terms: ['pair', 'agreement'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
    say: 'One pair in the whole app, and three nouns that will never show you the choice at all.',
    examples: [
      { fr: 'le livre', en: 'the book', note: 'Masculine. This is the one you have already met, in the school deck.' },
      { fr: 'la livre', en: 'the pound, in weight', note: 'Feminine, same spelling, a different word. Get the article wrong and you have said something else.' },
      { fr: 'des lunettes', en: 'glasses', note: 'Feminine, and you would never know. Des is the same word for both genders.' },
      { fr: 'les ciseaux', en: 'the scissors', note: 'Masculine, and equally invisible. A plural-only noun carries no clue whatever.' },
      { fr: 'les toilettes', en: 'the toilet', note: 'Feminine. Worth storing anyway, because every adjective you attach to it has to agree.' },
    ],
  },

  /* ── Act 5: banked, and used ──────────────────────────────────────────── */

  {
    type: 'useCases',
    id: 's16-cases',
    title: 'Six Moments This Week',
    frSub: 'Dans la vraie vie',
    layer: 'core',
    terms: ['pair', 'agreement'],
    say: 'Six real moments, and in every one of them the article is decided before the noun arrives.',
    cases: [
      { situation: 'Asking for something at a counter', fr: 'Une baguette, s’il vous plaît.', en: 'One baguette, please.' },
      { situation: 'Pointing at a thing you cannot name', fr: 'C’est quoi, ça ?', en: 'What is that?' },
      { situation: 'Saying where you left something', fr: 'La clé est sur la table.', en: 'The key is on the table.' },
      { situation: 'Asking outright, which is allowed', fr: 'Un ou une ?', en: 'Un or une?' },
      { situation: 'Ordering from an ending you spotted', fr: 'Une confiture, s’il vous plaît.', en: 'One jar of jam, please.' },
      { situation: 'Checking what you just heard', fr: 'Le tableau ou la table ?', en: 'The board or the table?' },
    ],
  },

  {
    type: 'flashcards',
    id: 's17-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    // Direction is a teaching decision here rather than a default. English on
    // the front, the article AND the noun on the back. A card fronted with the
    // bare French noun would have taught the learner to store it bare, which is
    // the exact habit the lesson exists to break.
    //
    // The elided nouns show their un/une form on the back for the same reason:
    // l'armoire is what the corpus stores and une armoire is what has to be
    // remembered.
    say: 'English on the front. Say the French out loud, with its article, before you flip it.',
    cards: [
      ...ENDING_RULES.map((r) => ({ front: r.example.en, back: r.example.fr, say: r.example.fr })),
      { front: 'the water', back: 'l’eau, and it is feminine', say: 'l’eau' },
      { front: 'the skin', back: 'la peau', say: 'la peau' },
      { front: 'the page', back: 'la page', say: 'la page' },
      { front: 'the wall', back: 'le mur', say: 'le mur' },
      { front: 'the book', back: 'le livre', say: 'le livre' },
      { front: 'the table', back: 'la table', say: 'la table' },
      { front: 'the fish', back: 'le poisson', say: 'le poisson' },
      { front: 'the key', back: 'la clé', say: 'la clé' },
      { front: 'the staircase', back: 'un escalier', say: 'un escalier' },
      { front: 'the computer', back: 'un ordinateur', say: 'un ordinateur' },
      { front: 'the school', back: 'une école', say: 'une école' },
      { front: 'the ear', back: 'une oreille', say: 'une oreille' },
      { front: 'the child', back: 'un enfant', say: 'un enfant' },
      { front: 'the oil', back: 'une huile', say: 'une huile' },
    ],
  },

  {
    type: 'dictation',
    id: 's18-dictation',
    title: 'Write What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    terms: ['pair', 'endings'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a1-03-dictee' },
    say: 'Four sentences, one for each claim this lesson makes. Build each from the tiles, and some do not belong.',
    itemIds: DICTATION,
  },

  {
    type: 'commonErrors',
    id: 's19-traps',
    // `swipe` and `size` are not decoration. MissionSection renders
    // commonErrors as its own swipe deck ONLY when `swipe` is set; without it
    // the section is a scrolling list, and before the fallback moved out of the
    // switch's `default:` it drew a blank screen. Every v2 lesson sets both.
    swipe: true,
    size: 'lg',
    title: 'Three Traps',
    frSub: 'Trois pièges',
    layer: 'core',
    terms: ['pair', 'finalE', 'hidden'],
    say: 'Three habits that cost a beginner more than any rule on the sheet gives back.',
    errors: [
      {
        wrong: 'Learning « armoire » from a card and stopping there.',
        right: 'Learning « une armoire », with the article attached.',
        why: `${REFRAME} A noun stored without one has to be looked up again the first time it matters.`,
      },
      {
        wrong: 'Trusting « ends in e, so feminine » on le livre.',
        right: 'Treating the final e as a lean and checking anything you are about to say.',
        why: 'It is right seven times in ten over eight hundred nouns, which makes you wrong about one in three.',
      },
      {
        wrong: 'Reading « l’escalier » and moving straight on.',
        right: 'Reading « l’escalier » and asking which article is under the apostrophe.',
        why: 'Le and la both shrink before a vowel, so the card that taught you the noun said nothing about its gender.',
      },
    ],
  },

  {
    type: 'scenario',
    id: 's20-scenario',
    title: 'Your Turn at the Shop',
    frSub: 'À la quincaillerie',
    layer: 'core',
    terms: ['pair', 'endings'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-03-scenario' },
    say: 'A hardware shop, and every line you say has an article decision inside it.',
    setting: 'A hardware shop in Nantes, late on a Saturday morning.',
    turns: [
      { ai: 'Bonjour ! Je peux vous aider ?', en: 'Hello! Can I help you?', user: 'Bonjour. Je cherche une ampoule.' },
      { ai: 'Une ampoule, oui. Pour quelle pièce ?', en: 'A bulb, yes. For which room?', user: 'Pour la cuisine.' },
      { ai: 'Très bien. Et avec ça ?', en: 'Very good. Anything else?', user: 'Il me faut aussi un couteau.' },
      { ai: 'Un couteau de cuisine ?', en: 'A kitchen knife?', user: 'Oui, c’est ça. Et le prix ?' },
      { ai: 'Douze euros les deux.', en: 'Twelve euros for the two.', user: 'D’accord. Merci beaucoup.' },
    ],
  },

  {
    type: 'reading',
    id: 's21-reading',
    title: 'The New Flat',
    frSub: 'Le nouvel appartement',
    layer: 'core',
    terms: ['hidden', 'pair'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a
    // reading section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions. Without it the section takes the fallback path and
    // MissionRich contains no reference to `glossary`. Five entries shipped
    // that way on a1.01 and rendered nowhere.
    questionsInModal: true,
    say: 'Read it once for the shape. Tap any word you do not know.',
    // Paul's A1 rule, set on a1.01's passage: anything not inside « » is in
    // English. Stage directions are context, and context is instruction.
    //
    // ONE BLOCK, NO LINE BREAKS, and that is a decision rather than a shortcut.
    // PassagePage splits the passage with `text.split(/(?<=[.!?»])\s+/)` and
    // renders the pieces inline in a single <TX>, so `\n` is consumed as
    // ordinary whitespace and every authored line break is discarded. a1.01
    // authors them and loses them silently; a1.02 does not, and pins the
    // decision with a test. The English narration between the quotes does the
    // work the line breaks were doing: it says who is speaking and hands the
    // turn over.
    text:
      'Léa has been in her new flat for three days and she is still learning where things are. ' +
      'Her friend Malik has come to see it. ' +
      '« Voici la cuisine. Le frigo est à gauche. » ' +
      'He points at the tall cupboard by the window. ' +
      '« Et ça, c’est quoi ? » ' +
      'She has to think for a second, because she learned the noun and not what goes in front of it. ' +
      '« C’est une armoire. » ' +
      'Malik opens it, and the bulb above them chooses that moment to go out. ' +
      '« L’ampoule ne marche pas. » ' +
      'Léa writes it on a shopping list she keeps by the door. ' +
      '« L’ampoule, l’huile, le savon. » ' +
      'He reads over her shoulder and notices what she has written. ' +
      '« Tu écris l’article aussi ? » ' +
      'She caps the pen and puts it back. ' +
      '« Oui. Sinon je l’oublie. »',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and
    // case on BOTH sides and allows a phrase of up to four words. A phrase
    // entry wins over a bare word inside it, so "une armoire" is underlined as
    // one span rather than being shadowed by a hypothetical "armoire".
    glossary: [
      { word: 'la cuisine', en: 'the kitchen', note: 'Ends in -ine, which takes une twenty-seven times in twenty-eight here.' },
      { word: 'une armoire', en: 'a wardrobe', note: 'No ending rule reaches this one, so the article is stored rather than worked out.' },
      { word: 'l’ampoule', en: 'the light bulb', note: 'Feminine, and nothing about the written form says so. Une ampoule is what to store.' },
      { word: 'l’huile', en: 'the oil', note: 'Also feminine, also hidden. The H is silent, so l apostrophe attaches as if the word began with a vowel.' },
      { word: 'sinon', en: 'otherwise, or else', note: 'The word that turns a habit into a reason. Sinon je l’oublie: otherwise I forget it.' },
    ],
    questions: [
      { q: 'Why does Léa hesitate before she names the cupboard?', a: 'She learned the noun and not the article that has to go in front of it.' },
      { q: 'What does she write on the list, and why?', a: 'The article as well as the word, because otherwise she forgets which one it takes.' },
      { q: 'Two of the three words on her list begin with l apostrophe. What does that tell you about their gender?', a: 'Nothing at all. Le and la both become l apostrophe in front of a vowel.' },
    ],
  },

  {
    type: 'practice',
    id: 's22-speak',
    title: 'Say the Whole Word',
    frSub: 'À voix haute',
    layer: 'core',
    terms: ['pair', 'storage'],
    audio: { mode: 'mic', lang: 'fr-FR' },
    // The only practice mission in the lesson, deliberately. `practice.skill` is
    // authored and read by no component: PracticeVFView takes itemIds and
    // nothing else, so a read mission and a speak mission render identically.
    // sons.06 shipped two practice sections doing the same job and it reads as a
    // repeat. One mission, and the skill declared truthfully. See the handover.
    say: 'Eighteen nouns, said with their articles. The article is the part the mic is listening for.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  /* ── Act 6: prove it ──────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's23-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['endings', 'hidden', 'storage'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'What do you store with a noun?', back: 'Its article. Une armoire, never armoire.', say: 'une armoire' },
      { front: '-tion takes:', back: 'une. Thirty-six nouns here, no exception.', say: 'la question' },
      { front: '-eau takes:', back: 'un, except l’eau and la peau.', say: 'le tableau' },
      { front: '-age takes:', back: 'un, except la page and la cage.', say: 'le fromage' },
      { front: '-et and -ette take:', back: 'un and une. Two letters apart, opposite ways.', say: 'le ticket, une baguette' },
      { front: 'Nouns ending in e are feminine, how often?', back: 'About seven times in ten. Keep it as a lean.', say: 'la table' },
      { front: 'You see l’armoire. What do you know?', back: 'Nothing. Le and la both shrink to l’.', say: 'l’armoire' },
      { front: 'How do you check what l’ is hiding?', back: 'Switch to un or une. Neither of them elides.', say: 'une armoire' },
      { front: 'le livre and la livre', back: 'A book and a pound. Only the article separates them.', say: 'le livre, la livre' },
      { front: 'Why is « les ciseaux » no help?', back: 'Les is the same word for both genders.', say: 'les ciseaux' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's24-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    // The prose deliberately carries no figures. Every number this card states
    // is a fact about the array above it, and a display string is validated
    // against nothing, so a hand-typed count would have been left confidently
    // wrong by the first mission added with the whole suite still green.
    body: 'You have measured the rule you were given, learned the ten endings that beat it, and met the nouns that hide their article entirely. What is left is the part that tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's25-quiz',
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Four rounds. Miss too many in one and you get its drill before the next round starts.',
    rounds: [
      {
        id: 'r1-the-pair',
        label: 'The word and the word in front of it',
        targets: ['err-bare-noun'],
        say: `${REFRAME} Six questions on what that actually means.`,
        questions: [
          {
            q: 'You have learned the word « armoire ». What is still missing?',
            format: 'mcq',
            opts: ['how to spell it', 'the article that goes with it', 'its plural', 'nothing, that is the word'],
            correct: 1,
            why: 'The choice between un and une is made before you finish the noun, so it has to be stored with it.',
            ref: 's03-pair',
          },
          {
            q: 'Write "a wardrobe".',
            format: 'typeIn',
            accept: ['une armoire'],
            answer: 'une armoire',
            why: 'Armoire is feminine, and no ending rule tells you that. It is a noun you store rather than derive.',
            ref: 's03-pair',
          },
          {
            q: 'Which of these can you actually use in a sentence?',
            format: 'mcq',
            opts: ['table', 'tabl', 'la tabler', 'une table'],
            correct: 3,
            why: 'Table is a dictionary entry. Une table is something you can say without stopping to decide.',
            ref: 's03-pair',
          },
          {
            q: 'Someone wrote « un armoire ». Write it properly.',
            format: 'errorSpot',
            accept: ['une armoire'],
            answer: 'une armoire',
            why: 'One letter, and it is the fastest thing a French ear uses to place a beginner.',
            ref: 's01-scene',
          },
          {
            q: 'You know a noun well and cannot recall its article. What went wrong?',
            format: 'mcq',
            opts: ['you forgot the word', 'you stored the noun without the article', 'your pronunciation', 'nothing, this is normal'],
            correct: 1,
            why: 'The noun was never the problem. The half that decides un or une was never on the card.',
            ref: 's03-pair',
          },
          {
            q: 'Write "the book". Livre ends in e and is masculine.',
            format: 'typeIn',
            accept: ['le livre'],
            answer: 'le livre',
            why: 'It ends in e and takes le, which is the rule most beginners are given failing in one word.',
            ref: 's04-finale',
          },
        ],
      },
      {
        id: 'r2-the-endings',
        label: 'The part you can work out',
        targets: ['err-final-e'],
        say: 'Ten endings, and the three that are not worth the trouble.',
        questions: [
          {
            q: '« Nouns ending in e are feminine » is right how often here?',
            format: 'mcq',
            opts: ['almost always', 'about half', 'about seven times in ten', 'it is never right'],
            correct: 2,
            why: 'Seven in ten across eight hundred nouns, which makes you wrong about one noun in three.',
            ref: 's04-finale',
          },
          {
            q: 'Write "a question", using what the ending tells you.',
            format: 'typeIn',
            accept: ['une question'],
            answer: 'une question',
            why: '-tion has no exception in this corpus across thirty-six nouns. It takes une every time.',
            ref: 's09-fem',
          },
          {
            q: 'You meet « le chauffage ». Which ending decided that?',
            format: 'mcq',
            opts: ['-age', '-ch', '-ffa', 'none of them'],
            correct: 0,
            why: '-age takes un nine times in ten. La page and la cage are the two worth storing separately.',
            ref: 's07-masc',
          },
          {
            q: 'Write "a board", using the ending.',
            format: 'typeIn',
            accept: ['un tableau'],
            answer: 'un tableau',
            why: '-eau takes un thirty-four times in thirty-seven. The ones it misses are l’eau and la peau.',
            ref: 's07-masc',
          },
          {
            q: 'Which of these endings tells you nothing worth having?',
            format: 'mcq',
            opts: ['-tion', '-ure', '-on', '-ette'],
            correct: 2,
            why: '-on is right six times in ten. Le poisson against la maison, with nothing on the page to separate them.',
            ref: 's05-ignore',
          },
          {
            q: 'Someone wrote « la ticket ». Write it properly.',
            format: 'errorSpot',
            accept: ['le ticket'],
            answer: 'le ticket',
            why: '-et takes un across all twenty-nine of them here. Two letters more and -ette flips it to une.',
            ref: 's07-masc',
          },
        ],
      },
      {
        id: 'r3-what-hides',
        label: 'When the article is gone',
        targets: ['err-hidden'],
        say: 'Nothing on screen will help you here. That is the mission, restated as questions.',
        questions: [
          {
            q: 'Listen. Which article is under the apostrophe?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'l’armoire' },
            opts: ['la', 'le', 'les', 'des'],
            correct: 0,
            why: 'Armoire is feminine, so the l’ you heard is la. Nothing in the sound says which one it was.',
            ref: 's12-hidden',
          },
          {
            q: 'Listen. Which article, and the ending will tell you?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'l’escalier' },
            opts: ['la', 'le', 'les', 'du'],
            correct: 1,
            why: 'Escalier ends in -ier, which takes un across all fifty-five of them here, so the article is le.',
            ref: 's07-masc',
          },
          {
            q: 'A new noun is written « l’usine ». What do you know about its gender?',
            format: 'mcq',
            opts: ['it is masculine', 'it is feminine', 'nothing at all', 'it is plural'],
            correct: 2,
            why: 'Le and la both shrink to l apostrophe before a vowel, so the written form carries nothing.',
            ref: 's12-hidden',
          },
          {
            q: 'Which of these hides its gender from you?',
            format: 'mcq',
            opts: ['l’huile', 'une huile', 'la cuisine', 'un tableau'],
            correct: 0,
            why: 'Only l’ hides it. Un and une do not elide, so they keep telling you which one it is.',
            ref: 's12-hidden',
          },
          {
            q: 'You want one wardrobe rather than the wardrobe. Write it.',
            format: 'typeIn',
            accept: ['une armoire'],
            answer: 'une armoire',
            why: 'Un and une never elide, so switching to them is how you check what l’ was covering.',
            ref: 's12-hidden',
          },
          {
            q: 'Listen. Which article does this one take?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'l’eau' },
            opts: ['le', 'un', 'des', 'la'],
            correct: 3,
            why: 'Eau is feminine, which -eau does not predict. It is one of the three that break that rule.',
            ref: 's11-breaks',
          },
        ],
      },
      {
        id: 'r4-out-loud',
        label: 'Out loud, in a shop',
        // Ordered so the drill that fires is the one a learner failing THIS
        // round most needs. Somebody who cannot produce the article at a counter
        // is guessing, not misfiling a noun, so err-guess comes first;
        // drillForRound fires the first target only and stops.
        targets: ['err-guess', 'err-bare-noun'],
        say: 'Where all of this actually happens, which is with somebody waiting for you to finish.',
        questions: [
          {
            q: 'Say it out loud: one baguette.',
            format: 'speak',
            target: 'une baguette',
            ipa: '/yn ba.ɡɛt/',
            why: 'The article carries the amount and the gender at once. Say the pair, never the noun alone.',
            ref: 's22-speak',
          },
          {
            q: 'You are buying cheese. Write "the cheese".',
            format: 'typeIn',
            accept: ['le fromage'],
            answer: 'le fromage',
            why: '-age takes un, so fromage takes le. La page is the exception rather than the rule.',
            ref: 's07-masc',
          },
          {
            q: 'A shopkeeper says « la livre ». What did they mean?',
            format: 'mcq',
            opts: ['the book', 'the pound', 'the delivery', 'the shelf'],
            correct: 1,
            why: 'Le livre is a book and la livre is a pound. Only the article separates the two words.',
            ref: 's15-livre',
          },
          {
            q: 'Write "the page", which is the exception to -age.',
            format: 'typeIn',
            accept: ['la page'],
            answer: 'la page',
            why: 'Nine -age nouns in ten take un. La page and la cage are the two to store separately.',
            ref: 's11-breaks',
          },
          {
            q: 'Why is « des lunettes » no use for practising this?',
            format: 'mcq',
            opts: ['it is not a real word', 'des is the same for both genders', 'it is masculine', 'it has no ending'],
            correct: 1,
            why: 'Les and des say nothing about gender, so a plural-only noun never shows you the choice.',
            ref: 's15-livre',
          },
          {
            q: 'The one thing worth storing with every new noun:',
            format: 'mcq',
            opts: ['its plural', 'how it is spelled', 'the article in front of it', 'its pronunciation'],
            correct: 2,
            why: `${REFRAME} It is what the next three units all assume you have already done.`,
            ref: 's26-roundup',
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
    say: 'Six things you did not have this morning, and one that pays off in the next lesson.',
    body: 'You can work out the article for about one noun in five, and more usefully you know which four in five you cannot, so you stop trying and start storing. That is the difference between a learner who has memorised a table and one who can order a coffee without a pause in the middle of it.',
    points: [
      `${REFRAME} A noun without one is a word you can look up and not one you can say.`,
      `Ten endings do real work: ${ENDING_RULES.map((r) => `-${r.ending}`).join(', ')}.`,
      'The famous rule about a final e is right about seven times in ten. Keep it as a lean, never as a decision.',
      'The exceptions are short and worth storing: l’eau, la peau, la page, la cage, le squelette, le pare-brise.',
      'L apostrophe hides le and la completely. Switch to un or une in your head, because nothing else will ask.',
      'Le livre is a book and la livre is a pound. The article is not decoration.',
      'The article you store here is the same choice a1.04 calls le or la, so the next lesson arrives half done.',
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
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's24-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.03.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Nouns met', v: String(ITEM_IDS.length) },
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
    title: 'The half you never stored',
    sections: ['s01-scene', 's02-goals', 's03-pair'],
    milestone: 'You have watched a word you know fail on the half you did not learn.',
    estScreens: 14,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The rule you were given',
    sections: ['s04-finale', 's05-ignore'],
    milestone: 'You know what the final-e rule is worth, because somebody counted.',
    estScreens: 5,
  },
  {
    id: 'act3',
    title: 'The ten that work',
    sections: ['s06-ten', 's07-masc', 's08-masc-check', 's09-fem', 's10-fem-check', 's11-breaks'],
    milestone: 'Ten endings, and the six nouns that break them.',
    estScreens: 22,
    restPoints: ['s08-masc-check/after'],
  },
  {
    id: 'act4',
    title: 'When the article is gone',
    sections: ['s12-hidden', 's13-listen', 's14-hidden-deck', 's15-livre'],
    milestone: 'You can spot the two hundred nouns that will never tell you.',
    estScreens: 9,
  },
  {
    id: 'act5',
    title: 'Banked, and used',
    sections: ['s16-cases', 's17-flash', 's18-dictation', 's19-traps', 's20-scenario', 's21-reading', 's22-speak'],
    milestone: 'You have written them, said them out loud and read them in a flat.',
    estScreens: 52,
    restPoints: ['s17-flash/halfway', 's20-scenario/opening', 's22-speak/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s23-review', 's24-progress', 's25-quiz', 's26-roundup'],
    milestone: 'Lesson complete.',
    estScreens: 38,
    restPoints: ['s23-review/halfway', 's25-quiz/after-r2', 's25-quiz/after-r3'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned, so `l'armoire` goes out with the scene
 * that caught the learner on it rather than with the -oire rule six missions
 * later.
 *
 * Act 5 releases only the four dictation sentences, and act 6 releases nothing
 * at all, which is the shape of the lesson rather than an oversight: those acts
 * exercise nouns the earlier acts already handed over.                        */

const ACT1_TRANCHE = ['fr.a1.maison.026'];
const ACT2_TRANCHE = [...new Set(WORTHLESS_ENDINGS.flatMap((w) => w.bothWays.map((n) => n.id)))];
const ACT3_TRANCHE = ENDING_ITEM_IDS.filter((id) => !ACT1_TRANCHE.includes(id) && !ACT2_TRANCHE.includes(id));
const ACT4_TRANCHE = [...HIDDEN_IDS, ...LIVRE_IDS, ...PLURAL_IDS].filter(
  (id) => !ACT1_TRANCHE.includes(id) && !ACT2_TRANCHE.includes(id) && !ACT3_TRANCHE.includes(id),
);

const DECK_TRANCHE: string[][] = [
  ACT1_TRANCHE,
  ACT2_TRANCHE,
  ACT3_TRANCHE,
  ACT4_TRANCHE,
  [...DICTATION],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * A trigger names a mistake, the places it is watched for, the drill that fires
 * when it trips, and the check that closes the loop. Each round's `targets`
 * points at these ids, and drillForRound fires the drill of the FIRST target
 * only, so the order inside `targets` matters.                                */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-bare-noun',
    description: 'Stores the noun and not the article, so the word is there when it is needed and the choice is not.',
    detectOn: ['s01-scene', 's03-pair', 's25-quiz/r1-the-pair'],
    drill: 'drill-pair',
    retest: 'retest-pair',
  },
  {
    id: 'err-final-e',
    description: 'Settles an article with the final-e rule, or with an ending that predicts nothing at all.',
    detectOn: ['s04-finale', 's05-ignore', 's08-masc-check', 's25-quiz/r2-the-endings'],
    drill: 'drill-endings',
    retest: 'retest-endings',
  },
  {
    id: 'err-hidden',
    description: 'Meets l apostrophe and moves on without asking which article it is covering.',
    detectOn: ['s12-hidden', 's13-listen', 's25-quiz/r3-what-hides'],
    drill: 'drill-hidden',
    retest: 'retest-hidden',
  },
  {
    id: 'err-guess',
    description: 'Guesses the article under time pressure rather than knowing it, and stalls in the middle of the sentence.',
    detectOn: ['s20-scenario', 's22-speak', 's25-quiz/r4-out-loud'],
    drill: 'drill-guess',
    retest: 'retest-guess',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-pair',
    title: 'Which word goes in front?',
    format: 'sort',
    buckets: ['un', 'une'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card
    // teaching these. Display strings here validate as broken ids.
    items: [
      'fr.a1.maison.026', 'fr.a1.ecole.029', 'fr.a1.maison.015', 'fr.a1.cafe.012',
      'fr.a1.ecole.032', 'fr.a1.cuisine.010', 'fr.a1.cuisine.011', 'fr.a1.ecole.046',
    ],
    coach: 'Say the whole thing to yourself before you drop it. If the article does not come, that is the card to keep.',
  },
  {
    id: 'retest-pair',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to say one wardrobe. Which?',
    opts: ['Un armoire', 'Une armoire', 'Le armoire'],
    correct: 1,
    why: 'Armoire is feminine, so one is une. Le would elide to l’ and would not be one anyway.',
  },
  {
    id: 'drill-endings',
    title: 'Ten endings, ten nouns',
    format: 'sort',
    buckets: ['un', 'une'],
    items: ENDING_RULES.map((r) => r.example.id),
    coach: 'Read the last three or four letters before you read the word. That is the whole technique.',
  },
  {
    id: 'retest-endings',
    title: 'One more time',
    format: 'mcq',
    q: 'A word you have never seen ends in -tion. Which article?',
    opts: ['un', 'une', 'you cannot tell'],
    correct: 1,
    why: '-tion takes une across all thirty-six of them in this corpus. It is the most reliable ending here.',
  },
  {
    id: 'drill-hidden',
    title: 'What is under the apostrophe?',
    format: 'sort',
    buckets: ['le', 'la'],
    items: [
      'fr.a1.maison.026', 'fr.a1.maison.019', 'fr.a1.cuisine.010', 'fr.a1.ecole.042',
      'fr.a1.ecole.013', 'fr.a1.famille.020', 'fr.a1.corps.023', 'fr.a1.cuisine.034',
    ],
    coach: 'Try it with un and with une first. Neither of those elides, so whichever sounds right is your answer.',
  },
  {
    id: 'retest-hidden',
    title: 'One more time',
    format: 'mcq',
    q: 'You see « l’épaule » on a card. What does the card tell you about its gender?',
    opts: ['it is masculine', 'it is feminine', 'nothing at all'],
    correct: 2,
    why: 'Le and la both become l apostrophe before a vowel, so the written form carries no gender at all.',
  },
  {
    id: 'drill-guess',
    title: 'Say the pair, not the noun',
    format: 'flashcard',
    coach: 'Read the left, say the right out loud. The article comes first, and it comes without a pause.',
    pairs: [
      ['a wardrobe', 'une armoire'],
      ['the cheese', 'le fromage'],
      ['a question', 'une question'],
      ['the board', 'un tableau'],
      ['the water', 'l’eau, and it is feminine'],
      ['the page', 'la page, against the rule'],
    ],
  },
  {
    id: 'retest-guess',
    title: 'One more time',
    format: 'mcq',
    q: 'You are at a counter and you cannot recall whether it is un or une. What is the useful move?',
    opts: ['say the noun on its own', 'ask « un ou une ? »', 'guess masculine, it is more common'],
    correct: 1,
    why: 'Asking outright costs a second and fixes the word for good. Guessing leaves you guessing again next week.',
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
    id: 'sheet.a1.03.endings',
    title: 'Every ending worth writing down',
    layer: 'deep',
    contains: ['The ten in the lesson', 'Fourteen more', 'What breaks each one'],
    sections: [
      {
        type: 'table',
        id: 'sheet-endings-ten',
        title: 'The ten the lesson teaches',
        layer: 'deep',
        cols: ['Ending', 'Takes', 'Right', 'Nouns', 'What breaks it'],
        rows: ENDING_RULES.map((r) => [
          `-${r.ending}`,
          r.article,
          `${r.accuracy}%`,
          String(r.items),
          r.breaks.map((b) => b.fr).join(', '),
        ]),
      },
      {
        type: 'table',
        id: 'sheet-endings-more',
        title: 'Fourteen more, none of them in the flow',
        layer: 'deep',
        cols: ['Ending', 'Takes', 'Right', 'Nouns'],
        rows: MORE_ENDINGS.map((e) => [
          `-${e.ending}`,
          e.predicts === 'm' ? 'un' : 'une',
          `${e.accuracy}%`,
          String(e.items),
        ]),
      },
      {
        type: 'cheatSheet',
        id: 'sheet-endings-words',
        title: 'More of each, if you want them',
        layer: 'deep',
        rows: ENDING_RULES.map((r) => ({
          k: `-${r.ending}`,
          v: r.sheetExamples.join(', '),
          say: r.sheetExamples[0],
        })),
      },
      {
        type: 'teach',
        id: 'sheet-endings-note',
        title: 'What to do with this',
        layer: 'deep',
        body: 'Do not memorise the second table. It is here because a sheet should answer a question you actually have, which is usually about one specific word you are holding, and the fourteen endings on it cover between six and forty-one nouns each. The ten in the first table are the ones worth carrying in your head, and they cover about one gendered noun in five. For the other four in five there is nothing to work out, so the effort belongs on storing the article with the word rather than on a longer table. The floor for anything written down here is ninety percent: two endings that just miss it, -elle and -ie, are deliberately absent rather than shown with a warning, because a rule you half trust is what stops you looking a word up.',
      },
    ],
  },
  {
    id: 'sheet.a1.03.hidden',
    title: 'The nouns that hide their article',
    layer: 'deep',
    contains: ['Twelve worked examples', 'How to check any other'],
    sections: [
      {
        type: 'cheatSheet',
        id: 'sheet-hidden-list',
        title: 'What is under the apostrophe',
        layer: 'deep',
        rows: HIDDEN.map((h) => ({
          k: h.elided,
          v: `${h.shown}, ${h.en}`,
          say: h.shown,
        })),
      },
      {
        type: 'teach',
        id: 'sheet-hidden-note',
        title: 'How to check a new one',
        layer: 'deep',
        body: 'There are more than two hundred of these in this app and no list will cover the ones you meet outside it, so the sheet is a worked set rather than a reference. The method is the useful part. Un and une do not elide in front of a vowel, so say the noun to yourself with each of them and one will sound wrong. If neither does, the word is genuinely new and the article has to be looked up, which takes five seconds now and saves the guess you would otherwise make at a counter. The endings help here more than anywhere else, because a noun beginning with a vowel is exactly the case where the front of the word tells you nothing and the back of it may still tell you everything.',
      },
    ],
  },
];

export const GENRE_LESSON: Lesson = {
  id: 'a1.03.l1',
  unitId: 'a1.03',
  seq: 1,
  title: 'Le genre des noms',
  level: 'a1',
  // LEÇON 05, not 03. The Den, the unit page and the mission list all derive
  // the lesson number from the unit's `seq` (commit 56c79a7), and a1.03 sits at
  // seq 5: the ids in this track stopped matching the running order when a1.27
  // and a1.28 were inserted between a1.02 and a1.03. `tag` is the one place
  // that number is authored by hand, so a tag built from the unit id disagrees
  // with every derived surface. a1.27 hit exactly this and pinned it with a
  // test; the first draft here shipped "03" and the Pixel 6 header showed "05"
  // beside it.
  tag: 'A1 · LEÇON 05',
  intro:
    'Every course tells you that nouns ending in e are feminine. Measured here it is right seven times in ten, which is often enough to sound wrong and rarely enough to stop trusting. Ten endings do better, and for everything else there is one habit worth building.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // a1.03 shipped with lessonIds: [], so v1 was this lesson's first appearance
  // rather than a replacement.
  //
  // v2: the -e figure moved from 871 to 873 when a1.11 authored two feminine
  // nouns into the shared corpus (2026-08-05). Nothing else changed. The number
  // is printed on two cards and is re-measured from the seed by
  // a1-03-genre.test.ts on every run, so it cannot be left stale.
  version: 2,

  // a1.02 introduced un against une on exactly two words, framed as a fact
  // about the number one. This lesson does not introduce the idea, it
  // generalises it, so what is declared here is the general rule rather than
  // the special case, and the opening deck treats un café as a callback.
  grammarAssumed: ['Gender agreement on the number one: un / une'],
  grammarIntroduced: [
    'Every noun carries a gender, and the article in front of it is the choice that gender makes',
    'Ten noun endings that predict the article, with their measured reliability',
    'Elision of le and la to l apostrophe in front of a vowel, and what it conceals',
  ],

  features: ['narrated', 'roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Noun Gender',
    subFr: 'Le genre des noms',
    introFr: 'Dix terminaisons qui marchent, une règle célèbre qui marche mal, et l’article qu’il faut apprendre avec le nom.',
    minutes: 32,
    difficulty: 2,
    glyph: '⚖️',
    screens: 140,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: GENRE_TERMS,

  /* ─── Audio ───────────────────────────────────────────────────────────────
   *
   * Briefs only. CLIP_MANIFEST is empty by design, so every card falls back to
   * device TTS until the studio delivers, and a recordingId that resolves to
   * nothing is the correct shipping state rather than a bug.
   *
   * The note on rec-a1-03-pairs is the one that matters and it is written into
   * the brief rather than assumed. Every contrast in this lesson is `un X`
   * against `une X`, where the article is one unstressed syllable. Recorded
   * across two takes the pair is not comparable and the learner hears the
   * difference between the recordings. The second instruction is just as
   * important: `un` must NOT be over-articulated. Its vowel is nasal and that
   * nasality is the entire distinction from `une`, so a careful reading that
   * sounds the N destroys the thing the card exists to teach.                */
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    ambienceDefault: 'off',
    recorded: [
      {
        id: 'rec-a1-03-pairs',
        desc: 'The un/une contrasts. Each pair in ONE TAKE, same voice, same speed, no pause longer than a beat: un armoire then une armoire, un table then une table, un escalier then une escalier. Across two takes the learner hears the difference between the recordings rather than between the articles. Do NOT over-articulate un: its vowel is nasal and no N is sounded, and a careful reading that lets the N through removes the only thing separating it from une.',
        clipIds: ['armoire', 'une armoire', 'un armoire', 'une table', 'un tableau', 'une baguette', 'le fromage'],
      },
      {
        id: 'rec-a1-03-endings',
        desc: 'The ten hero nouns, each said alone with a clear pause after it, ONE take straight through so the pace is even. Do not splice. Also supplies the preview table rows and the two word decks: le cahier, l’appartement, le ticket, le tableau, le fromage, la question, la voiture, une baguette, la cuisine, la chaise. « le ticket » and « une baguette » must come from the same take: they are the -et and -ette pair and the mission turns on hearing them side by side.',
        clipIds: ['le cahier', 'l’appartement', 'le ticket', 'le tableau', 'le fromage', 'la question', 'la voiture', 'une baguette', 'la cuisine', 'la chaise', 'le livre', 'la table', 'le poisson', 'la maison', 'le café', 'la clé'],
      },
      {
        id: 'rec-a1-03-hidden',
        desc: 'The elided nouns and the four listening lines. Read each noun naturally, WITHOUT separating the article from the word: the elision is meant to sound like one word, because that is why it hides what it hides. The listening lines are read straight through as whole sentences and again at 0.65 from the same take.',
        clipIds: ['l’armoire', 'l’escalier', 'l’eau', 'l’ordinateur', 'l’école', 'l’huile', 'L’armoire est dans la chambre.', 'L’escalier est à droite.', 'L’eau est froide ce matin.', 'L’ordinateur est sur le bureau.'],
      },
      {
        id: 'rec-a1-03-scene',
        desc: 'The second-hand shop scene. A neutral adult female voice for the dealer, unhurried and a little brisk, somebody closing up. The line « Une armoire ? Elle est au fond, à droite. » is the pivot: she is repeating the learner back with the article corrected, and it must sound like ordinary speech rather than a correction, because the whole point is that nobody tells you.',
        clipIds: ['Bonjour, vous cherchez quelque chose ?', 'Une armoire ? Elle est au fond, à droite.', 'L’armoire, très bien. Quatre-vingts euros.'],
      },
      {
        id: 'rec-a1-03-dictee',
        desc: 'The four dictation sentences at natural pace, and again at 0.65 from the same take so the slow version is a slowing rather than a re-reading. Full stops audible; no exaggerated word separation, which would give the tile boundaries away. « L’ordinateur est sur le bureau. » must keep its elision joined.',
        clipIds: ['Vous ouvrez vos livres à la page dix.', 'Elle va lever la main pendant le cours.', 'L’ordinateur est sur le bureau.', 'Le professeur pose une question facile.'],
      },
      {
        id: 'rec-a1-03-scenario',
        desc: 'The hardware shop exchange, shopkeeper lines only, warm and quick. « Une ampoule, oui. Pour quelle pièce ? » repeats the learner\'s own article back, so it has to sound like agreement rather than emphasis.',
        clipIds: ['Bonjour ! Je peux vous aider ?', 'Une ampoule, oui. Pour quelle pièce ?', 'Très bien. Et avec ça ?', 'Un couteau de cuisine ?', 'Douze euros les deux.'],
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
          { voice: 'en', text: 'I am Camille. Today is gender, and specifically the part of it nobody measures for you.' },
          { voice: 'en', text: 'You already know more French nouns than you can use, and the reason is the small word in front of each one.' },
          { voice: 'fr', text: 'Une armoire.' },
          { voice: 'en', text: 'A wardrobe. You may know armoire. The une is the half that goes missing.' },
        ],
      },
      {
        stage: 'focus',
        segments: [
          { voice: 'en', text: 'Learn the article, not the noun. That is the whole lesson, and here is why it is not obvious.' },
          { voice: 'fr', text: 'Le livre.' },
          { voice: 'en', text: 'Book. It ends in e, and every course you have met says nouns ending in e are feminine. This one is not, and neither is about a third of them.' },
          { voice: 'fr', text: 'La table.' },
          { voice: 'en', text: 'Table, feminine, same ending. Nothing on the page separates those two, so the rule is a lean and not a decision.' },
        ],
      },
      {
        stage: 'input',
        segments: [
          { voice: 'en', text: 'Now the endings that do work. Five of them point at un.' },
          { voice: 'fr', text: 'Le cahier. L’appartement. Le ticket. Le tableau. Le fromage.' },
          { kind: 'repeat', itemId: 'fr.a1.ecole.003' },
          { kind: 'repeat', itemId: 'fr.a1.ecole.032' },
          { voice: 'en', text: 'Notebook, apartment, ticket, board, cheese. The endings are -ier, -ment, -et, -eau and -age.' },
          { voice: 'en', text: 'And five point at une.' },
          { voice: 'fr', text: 'La question. La voiture. Une baguette. La cuisine. La chaise.' },
          { kind: 'repeat', itemId: 'fr.a1.ecole.046' },
          { kind: 'repeat', itemId: 'fr.a1.cafe.012' },
          { voice: 'en', text: 'Question, car, baguette, kitchen, chair. The endings are -tion, -ure, -ette, -ine and -ise.' },
        ],
      },
      {
        stage: 'practice',
        segments: [
          { voice: 'en', text: 'Every rule has something that breaks it, and the ones that break these are words you meet immediately.' },
          { voice: 'fr', text: 'L’eau. La peau.' },
          { kind: 'repeat', itemId: 'fr.a1.cuisine.010' },
          { voice: 'en', text: 'Water and skin. Both feminine, and -eau points at masculine thirty-four times in thirty-seven. These are two of the three.' },
          { voice: 'fr', text: 'La page.' },
          { kind: 'repeat', itemId: 'fr.a1.ecole.087' },
          { voice: 'en', text: 'Page, feminine, against -age. Store an exception the same way you store anything else, which is with the article on it.' },
        ],
      },
      {
        stage: 'produce',
        segments: [
          { voice: 'en', text: 'Your turn, with nothing in front of you. Ask for one baguette.' },
          { kind: 'produce', itemId: 'fr.a1.cafe.012', expected: 'une baguette', gradeAs: 'produce' },
          { voice: 'en', text: 'Now the cheese, and let the ending decide it for you.' },
          { kind: 'produce', itemId: 'fr.a1.cuisine.011', expected: 'le fromage', gradeAs: 'produce' },
          { voice: 'en', text: 'And the hard one. Water, where the ending points the wrong way.' },
          { kind: 'produce', itemId: 'fr.a1.cuisine.010', expected: 'l’eau', gradeAs: 'produce' },
        ],
      },
      {
        stage: 'check',
        segments: [
          { voice: 'en', text: 'One question. I will say a noun and you tell me which article is hiding in it.' },
          { voice: 'fr', text: 'L’armoire.' },
          { kind: 'check', itemId: 'fr.a1.maison.026', expected: 'la', gradeAs: 'recognise' },
          { voice: 'en', text: 'La. Armoire is feminine, and nothing you heard said so, because le and la both shrink to l before a vowel.' },
        ],
      },
      {
        stage: 'cheat',
        segments: [
          { voice: 'en', text: 'Three things to keep. Learn the article, not the noun.' },
          { voice: 'en', text: 'Ten endings do real work and cover about one noun in five. The famous one about a final e is right seven times in ten.' },
          { voice: 'en', text: 'And when a noun turns up wearing l apostrophe, switch it to un or une in your head, because nothing else will ask.' },
          { voice: 'fr', text: 'À bientôt.' },
        ],
      },
    ],
  },
};

/** Exported for the authoring script, the merge script and the tests, so none
 *  of them restates a list or a count that can drift from the content. */
export const GENRE_ITEM_IDS = ITEM_IDS;
export const GENRE_SPEAK_IDS = SPEAK_IDS;
export const GENRE_DICTATION_IDS = DICTATION;
export const GENRE_HIDDEN = HIDDEN;
export const GENRE_LIVRE = LIVRE;
export const GENRE_PLURAL_ONLY = PLURAL_ONLY;
