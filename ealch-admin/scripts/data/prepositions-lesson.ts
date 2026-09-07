// a1.21.l1 "Prépositions de lieu": the lesson body.
//
// Reads every French string, respelling and gloss from prepositions-corpus.ts
// and prepositions-imported.ts and restates none of them. Before that convention
// one word's transcription was typed by hand in five sections and the five
// copies were free to drift.
//
// ── The layout decisions, each of which is a rule from A1-BUILD-INVARIANTS ──
//
// THERE IS NO DIAGRAM, AND SPATIAL RELATIONS ARE THE MOST VISUAL TOPIC IN A1.
// No component draws one: there is no scene, grid or positioning section type,
// and `imageRef` resolves through a statically enumerated `REG` in
// `lessonImages.ts` that `lesson-contract.test.ts` does NOT check, despite a
// comment in schema.ts promising a publish-time check that is conditional on an
// asset manifest which does not exist. An unregistered ref draws a blank box and
// nothing goes red.
//
// So this lesson authors NO IMAGE AT ALL, and the batch, the merge and the test
// each assert that it authors none. The compensation is the one the brief names:
// ONE CAT, ONE BOX, NINE POSITIONS, one card each. The learner supplies the
// mental image, the deck stays coherent, and `cardDeck` is in `ownsLayout()` so
// it sizes itself to the viewport. That is s03-five, and it is the hero.
//
// THE MINIMAL SET USES A BOX RATHER THAN THE BRIEF'S CHAIR, and the change is
// the whole reason the screen works. The brief proposes
// `Le chat est sur la chaise / sous la chaise / devant la chaise / derrière la
// chaise` and a chair cannot take the fifth preposition: nothing is IN a chair.
// A box takes all five, so the column is genuinely minimal rather than
// minimal-except-one, and a learner reading down it sees exactly one word change
// five times. `la boîte` is a published headword with a gender and is not
// authored here.
//
// THE DIRECT-VERSUS-de CONTRAST IS A PAIR AND IT GETS TWO COLUMNS ON ONE SCREEN.
// That is s06-pair, a `tapTable` with `sur la boîte` on one side and
// `à côté de la boîte` on the other: same cat, same box, one taking `de` and one
// not. Split across two missions it becomes two unremarkable sentences and the
// contrast is never visible. The batch, the merge and the test all assert that a
// SINGLE section carries both shapes.
//
// NO groupDrill CARRIES `size`. A groupDrill owns the viewport at `xl` and not
// otherwise, which is true, and `xl` is unusable here: `density.logic.ts` reads
// it as a TWELVE-WORD CAP ON EVERY STRING IN THE SECTION, and every check in
// this lesson carries a `why` that has to teach the rule rather than name it.
// a1.13 and a1.17 both made this call for the same reason and both shipped. The
// cost is that the sorting drills scroll, which is correct for a two-group
// section and wrong only if a group is one line tall.
//
// EVERY groupDrill CONTROL PAGE CARRIES `items: []` EXPLICITLY. An xl groupDrill
// must never stack words and a check in one group, and a control page that omits
// `items` has shipped as a crash twice.
//
// ── What this lesson does NOT teach, and who owns it ───────────────────────
//
// `en` + country is a1.22, which LANDED WHILE THIS LESSON WAS BEING WRITTEN and
// is now shipped as "Pays & nationalités". The handover block at the foot of
// this file is therefore a note to a lesson that exists rather than one that
// does not. Nothing here teaches `en France`, and the test asserts it.
//
// The house vocabulary is a1.26, which declares a1.21 as its prerequisite.
// Rooms and furniture are the natural nouns for spatial sentences, so they are
// used as OBJECTS and there is no house-vocabulary act. See the handover.
//
// Motion prepositions (`vers`, `jusqu'à`, `à travers`) are direction rather than
// position and `aller` is a2.02. Position only. `y` as a pronoun is A2.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { PREPOSITIONS_TERMS, REFRAME } from './prepositions-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }
import {
  AUTHORED_SENTENCE_IDS, AUTHORED_WORD_IDS, DE_TAKING, DIRECT, ENTRE_REPAIR,
  PREPOSITIONS, THE_FIVE, THE_SIXTH, enOf, frOf, glossOf, roleIds, sub,
} from './prepositions-corpus.ts';
import {
  IMPORTED_BOUNDED, IMPORTED_COMPOUND, IMPORTED_CONTRACTION, IMPORTED_SPATIAL,
  NON_SPATIAL_BY_DESIGN,
} from './prepositions-imported.ts';

export { REFRAME };

/* ─── The corpus this lesson sequences ─────────────────────────────────────
 *
 * Grouped by the job the ids do, so a section names a GROUP and the tranche
 * slices read from the same groups rather than restating a word list.
 *
 * Every id below is SHOWN on a screen. a1.08 shipped 43 itemIds named by
 * nothing at all, released to spaced repetition and drawn by no component, and
 * it was invisible until a check asked "did the learner see it" rather than
 * "does this id resolve". The same check runs here, in the batch and the merge
 * as well as the test.                                                       */

/** The eight preposition headwords that already exist. NOT re-authored:
 *  `flashhub-coverage.test.ts` treats two rows sharing an `fr` in one theme as
 *  one card served twice. */
const IMPORTED_HEADWORDS = PREPOSITIONS
  .filter((p) => p.origin === 'imported')
  .map((p) => p.headwordId);

/** The four compound prepositions this lesson authors, as phrases with the `de`
 *  inside where it cannot be dropped. */
const AUTHORED_HEADWORDS = AUTHORED_WORD_IDS;

/** THE HERO. One cat, one box, five positions, and only the preposition moves. */
const MINIMAL = roleIds('minimal');

/** The same frame taking a phrase. The contrast the lesson is built on. */
const COMPOUND = roleIds('compound');

/** à + the four article shapes. Two contract and two do not. */
const CONTRACTION = roleIds('contraction');

/** de + the four article shapes, which the compound prepositions need. */
const DE_ARTICLE = roleIds('de-article');

/** The six short lines, all under DICTEE_LETTER_LIMIT, which is what keeps the
 *  dictée in letters mode. See the corpus header for the measurement. */
const SHORT = roleIds('short');

/** The scene's own pair: the keys on the newspaper and under it. */
const SCENE_PAIR = roleIds('scene');

const IMPORTED_SPATIAL_IDS = IMPORTED_SPATIAL.map((r) => r.id);
const IMPORTED_COMPOUND_IDS = IMPORTED_COMPOUND.map((r) => r.id);
const IMPORTED_CONTRACTION_IDS = IMPORTED_CONTRACTION.map((r) => r.id);
const IMPORTED_BOUNDED_IDS = IMPORTED_BOUNDED.map((r) => r.id);

const ITEM_IDS = [
  ...new Set([
    ...IMPORTED_HEADWORDS, ...AUTHORED_HEADWORDS,
    ...MINIMAL, ...COMPOUND, ...CONTRACTION, ...DE_ARTICLE, ...SHORT, ...SCENE_PAIR,
    ...IMPORTED_SPATIAL_IDS, ...IMPORTED_COMPOUND_IDS,
    ...IMPORTED_CONTRACTION_IDS, ...IMPORTED_BOUNDED_IDS,
  ]),
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag.
 *
 *  NOT ONE IMPORTED ROW IS IN HERE, and that is forced by measurement rather
 *  than taste: NOT ONE published row in this theme carries `voiceflash`.
 *  Fourteen candidates were checked against Postgres and every one is either
 *  `dictation` only or `sentence,flashcard,review`. A speak mission built on
 *  them would render cards the learner cannot be scored on.
 *
 *  The consequence is also the right teaching answer. Every id below is an
 *  AUTHORED row built on ÊTRE, so no production surface asks the learner to
 *  conjugate a verb they have not met. The corpus's spatial sentences are full
 *  of `dort`, `range`, `cache` and `se trouve`; all of those are reading
 *  exposure in this lesson and none is ever a production target. */
const SPEAK_IDS = [...MINIMAL, ...COMPOUND, ...CONTRACTION, ...SHORT];

/** The dictée, and every target was chosen by MEASUREMENT rather than taste.
 *
 *  `DICTEE_LETTER_LIMIT` is 16 and `dicteeMode` switches to WORD mode above it.
 *  Word mode hands the learner each whole word as a pre-spelled tile, so a `sur`
 *  tile and a `sous` tile would both be on the board and the learner would order
 *  them rather than choose one. That is the entire thing this lesson teaches,
 *  given away.
 *
 *  EVERY IMPORTABLE ROW IS IN WORD MODE: the shortest published spatial sentence
 *  in this theme is 18 letters. So all six targets are authored short, and each
 *  is verified through the real `dicteeMode` in the batch, the merge and the
 *  test rather than against a restated threshold.
 *
 *  Between them: the sur/sous pair the ear fails on, `au` twice, `à la` NOT
 *  contracting, and one line carrying the de rule and the contraction at once. */
const DICTATION_IDS = [
  ...SHORT,                                        // 4 lines, 12 to 15 letters
  'fr.a1.prepositions-essentielles.130',           // Je suis au bureau.      14
  'fr.a1.prepositions-essentielles.132',           // Je suis à la maison.    15
];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is being MISREAD AS A PERSON rather than being
 * corrected, and the brief picks the right beat: the learner asks where their
 * keys are, is told `sous le journal`, hears `sur`, looks on top of the paper,
 * and concludes the keys are gone. NOBODY WAS WRONG. The sentence was correct,
 * the hearing was ordinary, and the search that follows is confident and in
 * exactly the wrong place.
 *
 * That is better material than the weaker beat the brief also offers,
 * « à côté la banque » with the de dropped, which is understood and merely
 * marks a beginner. A dropped de costs nothing in the moment; a misheard
 * preposition sends you looking under nothing for ten minutes. The dropped de
 * is the lesson's ERROR and it gets act 2 and its own commonErrors screen; the
 * misheard pair is the lesson's SCENE, because a scene needs consequence.
 *
 * The choice beat is `sur le journal` against `sous le journal`, which is this
 * lesson's own authored pair, so the beat, the ear drill and the quiz's
 * listenChoose round are all the same two rows.
 *
 * Every beat carries its own `size` (prose at md, the choice and the break at
 * lg) and its own `audio`. The break body is 36 words, inside the 24-to-40 band
 * the shipped scenes hold to.                                                */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A friend\'s kitchen in Rennes, ten minutes before you both need to leave. You have put your keys down somewhere and you no longer know where.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You ask. She answers without looking up, the way anybody answers a question about keys, at ordinary speed and with no particular care.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Camille',
    fr: frOf('fr.a1.prepositions-essentielles.143'),
    en: enOf('fr.a1.prepositions-essentielles.143'),
    stage: 'She is putting her coat on and is already half out of the room. One short word, unstressed, in the middle of a sentence.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-21-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You caught every word except one. Which did she say, and where are you about to look?',
    options: [
      {
        fr: frOf('fr.a1.prepositions-essentielles.142'),
        respell: sub('sur'),
        en: 'on top of the newspaper, where you can see them',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: frOf('fr.a1.prepositions-essentielles.143'),
        respell: sub('sous'),
        en: 'underneath it, where you cannot',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. Now listen to the other one, because at that speed they are one syllable apart and both of them are true sentences.',
      breaks: 'That is the one most people hear. It is also the one that sends you looking at a bare newspaper and finding nothing.',
    },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You look at the table. There is a newspaper on it, and nothing on top of the newspaper. You look again. You check your coat, then the hall, then your bag.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'You',
    fr: 'Elles ne sont pas là.',
    en: 'They are not there.',
    stage: 'Said with total confidence, because you looked. You did look. You looked at the exact right table.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'You heard four words out of five',
    // 36 words. The shipped scene breaks run 24 to 40 here.
    body: 'She said something correct and you heard something correct. Only one syllable separates them, and it is the syllable carrying the entire position. Every other word in that sentence was the same, which is why nothing sounded wrong.',
    wrong: {
      fr: frOf('fr.a1.prepositions-essentielles.142'),
      ipa: '/le kle sɔ̃ syʁ lə ʒuʁ.nal/',
      respell: sub('sur'),
      en: 'On top of it, in plain view',
    },
    right: {
      fr: frOf('fr.a1.prepositions-essentielles.143'),
      ipa: '/le kle sɔ̃ su lə ʒuʁ.nal/',
      respell: sub('sous'),
      en: 'Underneath it, out of sight',
    },
    coach: 'Sur and sous are opposites that sit one syllable apart, and they are the only pair in this lesson your ear has to work at. The rest sound nothing alike.',
    // Audio-first: the ear gets both lines before the eye can read the gloss.
    // `autoplay` is NOT set: it is declared in schema.ts and implemented in no
    // component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-21-sur-sous' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Camille',
    fr: 'Sous ! Sous le journal. Soulève-le.',
    en: 'Under! Under the newspaper. Lift it up.',
    stage: 'She says it twice, louder, which is what anybody does. The second time you hear it perfectly.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Five words, one of them two letters long, and it was the only one that decided where to put your hand. The next half hour is about those short words and the one rule that separates them.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: where is it ─────────────────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'Ten Minutes Looking At The Right Table',
    frSub: 'Sur ou sous ?',
    render: 'screens',
    layer: 'core',
    terms: ['surOrSous'],
    say: {
      text: 'One syllable decides where you put your hand. Watch which one, and notice that nobody says anything wrong.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A friend\'s kitchen, a table with a newspaper on it, and two people about to be late',
      city: 'Rennes',
      time: 'Saturday morning',
      ambience: 'room-tone-kitchen',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: 'Five of these words go straight onto the noun. Four others need one more word first, and that is the half of this lesson nobody gets told about.',
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the second one is the one that separates you from a beginner.',
    goals: [
      { t: 'Say where anything is', s: 'Five short words, on one object, in five positions. Most people have these within two screens.' },
      { t: 'Know which ones need de', s: 'Four more are phrases rather than words, and they end in de. Leaving it out is understood perfectly and marks you as new.' },
      { t: 'Use au and aux without over-using them', s: 'À and le will not sit side by side. À and la will. Two of the four shapes change and two do not.' },
      { t: 'Hear sur against sous', s: 'The one pair here your ear has to work at, and the one that sends you looking in the wrong place.' },
    ],
  },

  {
    // THE HERO SCREEN. One cat, one box, five positions, one card each.
    // `cardDeck` is in ownsLayout() and sizes itself through useCardHeight, so
    // this fills the viewport rather than sitting inside a scrolling page.
    //
    // There is no picture. No component draws a spatial diagram and `imageRef`
    // is validated by nothing, so an unregistered ref would draw a blank box
    // silently. The learner supplies the image; the words do the rest.
    type: 'cardDeck',
    id: 's03-five',
    title: 'One Cat, One Box, Five Places',
    frSub: 'Le chat et la boîte',
    hint: 'Five cards. Only one word changes.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['twoShapes'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-21-five' },
    say: 'The cat moves and the sentence does not. Read the second word of each line and nothing else.',
    cards: [
      ...MINIMAL.map((id, i) => {
        const word = THE_FIVE[i];
        return {
          label: glossOf(word),
          head: word,
          fr: frOf(id),
          sub: `${sub(word)} · ${enOf(id)}`,
          body: [
            'On top of it, touching it, with the box holding it up.',
            'Underneath it. The opposite of the card before, and the one your ear will lose in fast speech.',
            'Inside it, which is why the reference point is a box: a chair cannot do this one.',
            'On the near side of it, between the box and you.',
            'On the far side of it, hidden from where you are standing.',
          ][i],
        };
      }),
      {
        label: 'what just happened',
        head: 'Four words never moved',
        fr: `${frOf(MINIMAL[0])} · ${frOf(MINIMAL[1])}`,
        sub: 'Le chat est ___ la boîte.',
        body: 'Five sentences, the same four words, one short word swapped into the middle. That word carries the whole position and sits straight against the noun with nothing between them.',
      },
    ],
  },

  {
    // The same five, in a column, so the minimal-pair principle is VISIBLE
    // rather than merely true. tapTable is NOT in ownsLayout(), so it renders
    // inside a scrolling page: two columns and five rows fit a Pixel 6 without
    // the bottom row falling below the fold with its chrome.
    type: 'tapTable',
    id: 's04-column',
    title: 'Read Down The Middle',
    frSub: 'Un seul mot change',
    layer: 'core',
    terms: ['twoShapes'],
    sheetId: 'sheet.a1.21.places',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-21-five' },
    say: `${REFRAME} Read the middle column top to bottom. That is the whole of act one.`,
    cols: ['the word', 'where it puts the cat'],
    rows: THE_FIVE.map((word, i) => ({
      cells: [word, enOf(MINIMAL[i])],
      say: frOf(MINIMAL[i]),
      detail: {
        title: `${word} · ${glossOf(word)}`,
        body: `${frOf(MINIMAL[i])} ${enOf(MINIMAL[i])} The word sits straight against la boîte with nothing in between, which is what makes it one of the five rather than one of the four in the next act.`,
        say: frOf(MINIMAL[i]),
      },
    })),
  },

  /* ── Act 2: one word, or a phrase ───────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's05-two-shapes',
    title: 'Some Of These Are Not Words',
    frSub: 'Un mot, ou une expression',
    hint: 'Four cards, and the fourth is the rule.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['twoShapes', 'theDroppedDe'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-21-de-rule' },
    say: 'The five you have just met are one shape. There is a second shape, and English gives you no warning about it.',
    cards: [
      {
        label: 'what you have',
        head: 'One word, straight onto the noun',
        fr: `${frOf(MINIMAL[0])} · ${frOf(MINIMAL[2])}`,
        sub: 'sur la boîte · dans la boîte',
        body: 'Five words that behave identically. You say the word, you say the thing, and you are finished. Nothing goes between them and nothing follows.',
      },
      {
        label: 'what else there is',
        head: 'Two or three words, ending in de',
        fr: `${frOf(COMPOUND[0])} · ${frOf(COMPOUND[1])}`,
        sub: `${sub('à côté de')} · ${sub('près de')}`,
        body: 'Same cat, same box, same sentence. The only difference is that the position is now a phrase rather than a word, and the last word of that phrase is always de.',
      },
      {
        label: 'why it is missed',
        head: 'English has nothing here',
        body: 'Next to the bank. Near the station. In front of the house. English puts nothing between the phrase and the thing, so there is no habit to bring across and nothing that feels missing when you leave the de out.',
      },
      {
        label: 'the rule',
        head: 'Which shape are you holding?',
        fr: `${frOf(MINIMAL[0])} · ${frOf(COMPOUND[0])}`,
        sub: 'one word · a phrase',
        body: `${REFRAME} That is one decision, made once, before the noun comes out of your mouth. It covers every position word in this lesson and the four beyond it.`,
      },
    ],
  },

  {
    // THE SCREEN THIS LESSON CANNOT DO WITHOUT. Both shapes on ONE screen, same
    // cat, same box, one taking `de` and one not. Two columns and four rows, so
    // it fits a Pixel 6 without scrolling even though tapTable is not in
    // ownsLayout().
    //
    // Split across two missions this becomes two unremarkable sentences and the
    // contrast is never visible. The batch, the merge and the test all assert
    // that a SINGLE section carries both shapes.
    type: 'tapTable',
    id: 's06-pair',
    title: 'The Same Box, Both Ways',
    frSub: 'Avec de, ou sans',
    layer: 'core',
    terms: ['twoShapes', 'theDroppedDe'],
    sheetId: 'sheet.a1.21.places',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-21-de-rule' },
    say: `${REFRAME} Read across a row. Left needs nothing, right needs de, and the box never moved.`,
    cols: ['straight onto the noun', 'needs de first'],
    rows: [
      {
        cells: ['sur la boîte', 'à côté de la boîte'],
        say: `${frOf(MINIMAL[0])} ${frOf(COMPOUND[0])}`,
        detail: {
          title: 'One word against three',
          body: `${frOf(MINIMAL[0])} ${frOf(COMPOUND[0])} Identical apart from the position, and the one on the right carries a de that cannot be left out.`,
          say: `${frOf(MINIMAL[0])} ${frOf(COMPOUND[0])}`,
        },
      },
      {
        cells: ['sous la boîte', 'près de la boîte'],
        say: `${frOf(MINIMAL[1])} ${frOf(COMPOUND[1])}`,
        detail: {
          title: 'Under it, against near it',
          body: `${frOf(MINIMAL[1])} ${frOf(COMPOUND[1])} Sous is one of the five. Près de is one of the four, and its de is the last word of the position rather than the first word of the thing.`,
          say: `${frOf(MINIMAL[1])} ${frOf(COMPOUND[1])}`,
        },
      },
      {
        cells: ['devant la boîte', 'en face de la boîte'],
        say: `${frOf(MINIMAL[3])} ${frOf(COMPOUND[3])}`,
        detail: {
          title: 'The pair that means almost the same thing',
          body: `${frOf(MINIMAL[3])} ${frOf(COMPOUND[3])} Close in meaning and opposite in shape, which is the clearest evidence that you cannot work the shape out from the sense.`,
          say: `${frOf(MINIMAL[3])} ${frOf(COMPOUND[3])}`,
        },
      },
      {
        cells: ['derrière la boîte', 'loin de la boîte'],
        say: `${frOf(MINIMAL[4])} ${frOf(COMPOUND[2])}`,
        detail: {
          title: 'And the last of each',
          body: `${frOf(MINIMAL[4])} ${frOf(COMPOUND[2])} Four rows, eight positions, and the only thing you ever decide is which column a word lives in.`,
          say: `${frOf(MINIMAL[4])} ${frOf(COMPOUND[2])}`,
        },
      },
    ],
  },

  {
    // NO `size`. An xl groupDrill owns the viewport and caps every string in the
    // section at twelve words, and every check below carries a `why` that
    // teaches rather than names. See the file header.
    type: 'groupDrill',
    id: 's07-sort',
    title: 'Which Column Does It Live In?',
    frSub: 'Avec de, ou sans ?',
    layer: 'core',
    terms: ['twoShapes'],
    say: 'This is a decision you will make every time you say where something is, so it is worth making it a few times on purpose.',
    groups: [
      {
        label: 'Straight onto the noun',
        items: DIRECT.filter((p) => THE_FIVE.includes(p.fr as typeof THE_FIVE[number])).map((p) => ({
          fr: p.fr,
          respell: sub(p.fr),
          en: p.en,
        })),
        check: {
          q: 'You want to say that the cat is on the box. How many words go between the position word and la boîte?',
          opts: ['None. It goes straight on', 'One, and it is de', 'One, and it is à', 'Two'],
          correct: 0,
          why: 'None. Sur is a single word and it sits directly against the noun. All five of these behave the same way, which is why they are worth learning as one group rather than five separate facts.',
        },
      },
      {
        label: 'Needs de first',
        items: DE_TAKING.map((p) => ({ fr: p.fr, respell: sub(p.fr), en: p.en })),
        check: {
          q: 'You want to say that the café is next to the bank. Which of these is French?',
          opts: [
            'Le café est à côté la banque',
            'Le café est à côté de la banque',
            'Le café est à côté à la banque',
            'Le café est à côté banque',
          ],
          correct: 1,
          why: 'À côté de la banque. The de is the last word of the position and not an extra. Leaving it out is understood perfectly by everybody, which is exactly why nobody ever corrects it and why it can survive for years.',
        },
      },
      {
        // A control page carries `items: []` EXPLICITLY and no `size`. An xl
        // groupDrill must never stack words and a check in one group, and a
        // control page that omits `items` has shipped as a crash twice.
        label: 'Both at once',
        items: [],
        check: {
          q: 'Which of these two is missing something?',
          opts: [
            'Le chat est près la boîte',
            'Le chat est sur la boîte',
            'Neither. Both are fine',
            'Both of them are missing a word',
          ],
          correct: 0,
          why: `Près la boîte is the broken one and needs de. Sur la boîte is complete as it stands. ${REFRAME}`,
        },
      },
    ],
  },

  {
    // `commonErrors` wants swipe: true and size: 'lg', one error per screen.
    // Without `swipe` this section hits a `break` that falls out of the switch
    // and returns undefined, which is how a1.01 shipped a fully blank mission.
    type: 'commonErrors',
    id: 's08-traps',
    title: 'Three Ways This Goes Wrong',
    frSub: 'Les erreurs courantes',
    layer: 'core',
    swipe: true,
    size: 'lg',
    terms: ['theDroppedDe'],
    say: 'Three errors, and the first is the one this whole lesson exists to prevent.',
    errors: [
      {
        wrong: 'Le café est à côté la banque.',
        right: frOf('fr.a1.prepositions-essentielles.010'),
        why: 'The de is missing. This is the single most common thing an English speaker gets wrong here, and it survives because it works: everybody understands you and nobody repeats it back. It marks you as a beginner for as long as you keep saying it.',
      },
      {
        wrong: 'Nous habitons près la gare.',
        right: frOf('fr.a1.prepositions-essentielles.020'),
        why: 'The same error on a different phrase. Près, loin, à côté and en face all end in de, and the fix is to learn each one with the de already inside it so there is never a moment where you decide whether to add it.',
      },
      {
        wrong: 'Le chat est sur de la boîte.',
        right: frOf('fr.a1.prepositions-essentielles.121'),
        why: 'The rule applied where it does not reach. Sur is one of the five that take nothing, and adding de to it is the error a learner makes in the week after this lesson rather than before it. Only the phrases take de.',
      },
    ],
  },

  /* ── Act 3: à, and where it stops ───────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's09-a',
    title: 'The Sixth Word',
    frSub: 'à',
    hint: 'Four cards, and one of them is about a missing mark.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theAccentPair', 'theContraction'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-21-a-and-a' },
    say: 'One more word, and it behaves like none of the five.',
    cards: [
      {
        label: 'the word',
        head: THE_SIXTH,
        fr: frOf('fr.a1.prepositions-essentielles.132'),
        sub: `${sub('à')} · ${enOf('fr.a1.prepositions-essentielles.132')}`,
        body: 'At, in, or to, depending on what follows. It is the word for being somewhere by name rather than being positioned relative to something, and it is the most common preposition in French.',
      },
      {
        label: 'what makes it different',
        head: 'It reacts to the word after it',
        fr: `${frOf('fr.a1.prepositions-essentielles.130')} · ${frOf('fr.a1.prepositions-essentielles.132')}`,
        sub: `${sub('au')} · ${sub('à la')}`,
        body: 'None of the five did anything to the words around them. This one does. À plus le comes out as au, one word instead of two, and à plus la does not change at all. That is the next screen.',
      },
      {
        label: 'the one that is not it',
        head: 'à and a are the same sound',
        fr: 'il a · il est à Paris',
        sub: 'he has · he is in Paris',
        body: 'You met a in the avoir lesson: il a is he has. The only difference on the page is the mark, and there is no difference at all out loud. Nobody speaking French is choosing between them, and this is a writing difference only.',
      },
      {
        label: 'how to tell them apart',
        head: 'Look at what comes next',
        fr: 'il a un chat · il est à la maison',
        sub: 'a thing being owned · a place',
        body: 'A thing after a, a place after à. Once you look past the single letter the two can never be confused, and that is the only test you need. The same mark separates sur from sûr, which is on against sure.',
      },
    ],
  },

  {
    // THE CONTRACTION TABLE. Four rows, and TWO OF THEM DO NOT CHANGE. A
    // contraction taught without its non-contracting cases is one the learner
    // over-applies, and the over-application is a worse error than never having
    // met it: « à l'la maison » is not a thing anybody says before this lesson.
    type: 'tapTable',
    id: 's10-contract',
    title: 'Two Change, Two Do Not',
    frSub: 'à + le, la, les, l\'',
    layer: 'core',
    terms: ['theContraction'],
    sheetId: 'sheet.a1.21.contractions',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-21-contraction' },
    say: 'Four rows. The two that do nothing are as important as the two that do.',
    cols: ['what you would expect', 'what French does'],
    rows: [
      {
        cells: ['à + le', 'au'],
        say: frOf('fr.a1.prepositions-essentielles.130'),
        detail: {
          title: 'Two words become one',
          body: `${frOf('fr.a1.prepositions-essentielles.130')} ${enOf('fr.a1.prepositions-essentielles.130')} À and le do not appear side by side in French. This is not a shortcut you may choose: the uncontracted version is simply not written or said.`,
          say: frOf('fr.a1.prepositions-essentielles.130'),
        },
      },
      {
        cells: ['à + les', 'aux'],
        say: frOf('fr.a1.prepositions-essentielles.131'),
        detail: {
          title: 'The same thing in the plural',
          body: `${frOf('fr.a1.prepositions-essentielles.131')} Out loud aux and au are the same sound. The difference is written and it follows the noun. ${frOf(NON_SPATIAL_BY_DESIGN)} shows the same word away from any place at all.`,
          say: frOf('fr.a1.prepositions-essentielles.131'),
        },
      },
      {
        cells: ['à + la', 'à la'],
        say: frOf('fr.a1.prepositions-essentielles.132'),
        detail: {
          title: 'Nothing happens',
          body: `${frOf('fr.a1.prepositions-essentielles.132')} Both words stay exactly as they are. ${frOf('fr.a1.prepositions-essentielles.113')} is the same shape in published French. Reaching for a contraction here is the rule applied where it does not go.`,
          say: frOf('fr.a1.prepositions-essentielles.132'),
        },
      },
      {
        cells: ["à + l'", "à l'"],
        say: frOf('fr.a1.prepositions-essentielles.133'),
        detail: {
          title: 'And nothing here either',
          body: `${frOf('fr.a1.prepositions-essentielles.133')} ${enOf('fr.a1.prepositions-essentielles.133')} The l' is already the noun's own shortened article, and à leaves it alone. Two of these four rows change and two do not, which is the entire contraction.`,
          say: frOf('fr.a1.prepositions-essentielles.133'),
        },
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's11-check',
    title: 'Does It Contract?',
    frSub: 'Au, aux, ou rien',
    layer: 'core',
    terms: ['theContraction'],
    say: 'Two groups and one control. The control is the one that catches over-application.',
    groups: [
      {
        label: 'These two become one word',
        items: [
          { fr: 'au', respell: sub('au'), en: glossOf('au'), itemId: 'fr.a1.prepositions-essentielles.130' },
          { fr: 'aux', respell: sub('aux'), en: glossOf('aux'), itemId: 'fr.a1.prepositions-essentielles.131' },
        ],
        check: {
          q: 'You want to say: I am at the office. Le bureau is a le word. Which is French?',
          opts: ['Je suis à le bureau', 'Je suis au bureau', 'Je suis à la bureau', 'Je suis aux bureau'],
          correct: 1,
          why: 'Au bureau. À and le will not stand next to each other, so the two collapse into au. À le bureau is not a thing you may say slowly and carefully instead; it does not exist.',
        },
      },
      {
        label: 'These two stay as they are',
        items: [
          { fr: 'à la', respell: sub('à la'), en: glossOf('à la'), itemId: 'fr.a1.prepositions-essentielles.132' },
          { fr: "à l'", respell: sub("à l'"), en: glossOf("à l'"), itemId: 'fr.a1.prepositions-essentielles.133' },
        ],
        check: {
          q: 'You want to say: I am at home. La maison is a la word. Which is French?',
          opts: ['Je suis al maison', 'Je suis à maison', 'Je suis à la maison', 'Je suis au maison'],
          correct: 2,
          why: 'À la maison, with both words exactly as they were. Nothing contracts here, and reaching for a shortened form is this rule being applied where it does not reach.',
        },
      },
      {
        label: 'The one that catches people',
        items: [],
        check: {
          q: 'Somebody has learned that à + le is au and now writes « je suis au école ». What went wrong?',
          opts: [
            "L'école takes à l', and nothing contracts",
            'Nothing. That is correct',
            'It should be aux école',
            'It should be à le école',
          ],
          correct: 0,
          why: "À l'école. The rule was applied to a word it does not cover. Only le and les contract, and l' is neither: it is already a shortened article. This error is commoner after the lesson than before it.",
        },
      },
    ],
  },

  /* ── Act 4: the du you already met ──────────────────────────────────────── */

  {
    // a1.29 ALREADY TAUGHT `de + le = du`. It ships s14-other-du, an `otherDu`
    // term and an `err-other-du` trigger, and its first card is « près du lit »
    // which is a spatial compound preposition. So this act OPENS BY NAMING IT
    // rather than teaching it as new, the way a1.09 opens by naming a1.08.
    type: 'cardDeck',
    id: 's12-du',
    title: 'You Have Met This Du Before',
    frSub: `Le du de ${unitRef('a1.29')}`,
    hint: 'Four cards, and the first one is a reminder rather than a rule.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theOtherDu', 'theDroppedDe'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-21-du' },
    say: 'This is not new. The partitive lesson named it, and here is where it was going.',
    cards: [
      {
        // THE RECONCILIATION CARD. Naming the earlier lesson and extending it is
        // what a1.09 does with a1.08 and what a1.17 does with a1.15.
        label: 'what you already have',
        head: 'The partitive lesson said this first',
        fr: 'à côté du lit',
        sub: `${sub('du')} · next to the bed`,
        body: 'When you learned du for some, you were told most du in French is not an amount at all, and you were shown près du lit. That was this. De and le collapse exactly as à and le do.',
      },
      {
        label: 'why it turns up here',
        head: 'Every phrase in act two ends in de',
        fr: frOf('fr.a1.prepositions-essentielles.134'),
        sub: enOf('fr.a1.prepositions-essentielles.134'),
        body: 'À côté de, près de, loin de, en face de. The moment one meets a le word, the de and the le collapse into du. The same collapse you know, with a place behind it instead of a quantity.',
      },
      {
        label: 'the test still works',
        head: 'Try putting some in front',
        fr: `${frOf('fr.a1.prepositions-essentielles.134')} · ${frOf('fr.a1.prepositions-essentielles.100')}`,
        sub: 'next to the bed · back from work',
        body: 'Some bread makes sense, so je bois du café is the other du. Some the bed does not, so à côté du lit is this one. That test came from the partitive lesson and it still separates them.',
      },
      {
        label: 'and the same for des',
        head: 'Des collides too',
        fr: frOf('fr.a1.prepositions-essentielles.135'),
        sub: `${sub('des')} · ${enOf('fr.a1.prepositions-essentielles.135')}`,
        body: 'De plus les gives des, which is the same two letters as the des you use for several things. The same test separates these as well, and neither of them is a word you have to choose: both are collapses that happen on their own.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's13-de-table',
    title: 'The Same Four Rows Again',
    frSub: "de + le, la, les, l'",
    layer: 'core',
    terms: ['theOtherDu'],
    sheetId: 'sheet.a1.21.contractions',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-21-contraction' },
    say: 'Identical to the à table, one row at a time. If you have one you have both.',
    cols: ['what you would expect', 'what French does'],
    rows: [
      {
        cells: ['de + le', 'du'],
        say: frOf('fr.a1.prepositions-essentielles.134'),
        detail: {
          title: 'The one the partitive lesson named',
          body: `${frOf('fr.a1.prepositions-essentielles.134')} ${enOf('fr.a1.prepositions-essentielles.134')} ${frOf('fr.a1.prepositions-essentielles.057')} is the same collapse in published French.`,
          say: frOf('fr.a1.prepositions-essentielles.134'),
        },
      },
      {
        cells: ['de + les', 'des'],
        say: frOf('fr.a1.prepositions-essentielles.135'),
        detail: {
          title: 'And it collides with the other des',
          body: `${frOf('fr.a1.prepositions-essentielles.135')} ${enOf('fr.a1.prepositions-essentielles.135')} The same two letters as the des for several things, doing a different job, and separated by the same test.`,
          say: frOf('fr.a1.prepositions-essentielles.135'),
        },
      },
      {
        cells: ['de + la', 'de la'],
        say: frOf('fr.a1.prepositions-essentielles.136'),
        detail: {
          title: 'Nothing happens',
          body: `${frOf('fr.a1.prepositions-essentielles.136')} ${enOf('fr.a1.prepositions-essentielles.136')} ${frOf('fr.a1.prepositions-essentielles.010')} is the same shape in published French, and the de is plainly visible in it.`,
          say: frOf('fr.a1.prepositions-essentielles.136'),
        },
      },
      {
        cells: ["de + l'", "de l'"],
        say: frOf('fr.a1.prepositions-essentielles.137'),
        detail: {
          title: 'And nothing here either',
          body: `${frOf('fr.a1.prepositions-essentielles.137')} ${enOf('fr.a1.prepositions-essentielles.137')} ${frOf('fr.a1.prepositions-essentielles.096')} shows it in the wild. Two collapse and two do not, exactly as with à.`,
          say: frOf('fr.a1.prepositions-essentielles.137'),
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's14-accent',
    title: 'One Mark, Two Words',
    frSub: 'à / a et sur / sûr',
    hint: 'Three cards about a difference you can only see.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theAccentPair'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-21-a-and-a' },
    say: 'Two pairs, both of them identical out loud, and both of them worth thirty seconds so you stop worrying about hearing them.',
    cards: [
      {
        label: 'the pair',
        head: 'à and a',
        fr: 'il a · à la maison',
        sub: 'he has · at home',
        body: 'One is the verb you met in the avoir lesson and one is the preposition from this one. They sound exactly the same and always will. There is nothing here for your ear to learn, because there is nothing in the sound to catch.',
      },
      {
        label: 'the other pair',
        head: 'sur and sûr',
        fr: 'sur la table · je suis sûr',
        sub: 'on the table · I am sure',
        body: 'The same again with a different mark. On against sure, and out loud the difference is small enough that context does the work every time. Both of these are writing differences, and you will meet the second one properly much later.',
      },
      {
        label: 'what this means for you',
        head: 'You will never have to hear it',
        fr: 'il a un chat · il est à Paris',
        sub: 'a thing owned · a place',
        body: 'Because these are identical in speech, no listening exercise can ever test them and none in this lesson does. What separates them is what follows: something owned after a, somewhere after à. That is a reading habit, and it is quick.',
      },
    ],
  },

  /* ── Act 5: say where things are ────────────────────────────────────────── */

  {
    type: 'examples',
    id: 's15-etre',
    title: 'Where Things Are, In Real Sentences',
    frSub: 'C\'est où ?',
    layer: 'core',
    terms: ['twoShapes'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
    say: 'Published French, none of it written for this lesson. Read the position and ignore the verb.',
    // EVERY imported row is here, not a slice of them.
    //
    // The first draft took `.slice(0, 6)` and `.slice(0, 5)` and left FOURTEEN
    // imported rows declared in `itemIds`, released by a tranche, and drawn by
    // nothing at all. That is the a1.08 failure exactly: 43 itemIds that
    // resolved perfectly, were named by no section, and were invisible until a
    // check asked "did the learner see it" rather than "does this id resolve".
    //
    // The seven rows carrying `flashcard` would still have reached the learner
    // through the flash hub. The fourteen carrying `dictation` only would not
    // have reached them anywhere. a1-21-prepositions.test.ts now encodes both
    // paths and caught this before it shipped.
    examples: [
      ...IMPORTED_SPATIAL.map((r) => ({
        fr: r.fr,
        en: r.en,
        note: 'One word, straight onto the noun.',
      })),
      ...IMPORTED_COMPOUND.map((r) => ({
        fr: r.fr,
        en: r.en,
        note: 'A phrase, and the de is there every time.',
      })),
      // The contraction in published French. `.099` is EXCLUDED by name: it is
      // the one imported row that is deliberately not about position, and it
      // belongs to the contraction table alone. The test asserts it never
      // reaches a spatial surface, and this is a spatial surface.
      ...IMPORTED_CONTRACTION.filter((r) => r.id !== NON_SPATIAL_BY_DESIGN).map((r) => ({
        fr: r.fr,
        en: r.en,
        note: 'À or de, meeting the word after it.',
      })),
    ],
  },

  {
    // `listenChoose` has exactly one genuinely good job in this lesson and this
    // is it. sur /syʁ/ against sous /su/ are close enough in fast speech to
    // matter and the scene is built on the confusion. There is deliberately NO
    // ear work on devant against derrière, which sound nothing alike, and none
    // at all on à against a, which are homophones and untestable by any format.
    type: 'listening',
    id: 's16-ear',
    title: 'Sur, Or Sous?',
    frSub: 'La seule paire difficile',
    layer: 'core',
    terms: ['surOrSous'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-21-sur-sous' },
    say: 'Four lines. Two of them are the sentence from the scene, and this time you know what is coming.',
    lines: [
      { fr: frOf('fr.a1.prepositions-essentielles.142'), en: enOf('fr.a1.prepositions-essentielles.142') },
      { fr: frOf('fr.a1.prepositions-essentielles.143'), en: enOf('fr.a1.prepositions-essentielles.143') },
      { fr: frOf('fr.a1.prepositions-essentielles.138'), en: enOf('fr.a1.prepositions-essentielles.138') },
      { fr: frOf('fr.a1.prepositions-essentielles.139'), en: enOf('fr.a1.prepositions-essentielles.139') },
    ],
    questions: [
      {
        q: 'You hear « Les clés sont sous le journal. » Where do you put your hand?',
        opts: ['On top of the newspaper', 'Underneath the newspaper', 'Next to the newspaper', 'Behind the newspaper'],
        correct: 1,
        why: 'Underneath. Sous is under, and this is the sentence from the scene. The two words differ by one vowel and they send you to opposite places.',
      },
      {
        q: 'You hear « Il est sur le lit. » Is the thing visible from the doorway?',
        opts: ['Yes, it is on top of the bed', 'No, it is under the bed', 'It does not say', 'No, it is behind the bed'],
        correct: 0,
        why: 'Yes. Sur puts it on top, in plain view. Sur has the tight ü sound with rounded lips; sous is a plain oo. Slowly they are obvious, and at speed they are the one pair worth practising.',
      },
      {
        q: 'Which of these two pairs actually needs your ear?',
        opts: [
          'devant and derrière',
          'sur and sous',
          'à and a',
          'dans and derrière',
        ],
        correct: 1,
        why: 'Sur and sous. Devant and derrière sound nothing alike and never get confused. À and a are the same sound exactly, so no amount of listening will separate them and nothing in this lesson asks you to try.',
      },
    ],
  },

  {
    // `reading` + `glossary` needs questionsInModal: true AND questions, or the
    // glossary never reaches its renderer. A reading passage is ONE BLOCK:
    // PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline is silently
    // discarded, so there is none.
    //
    // Every glossary key is four words or fewer. MAX_GLOSS_WORDS is four and a
    // key of five or more can never match.
    type: 'reading',
    id: 's17-reading',
    title: 'The Flat',
    frSub: 'L\'appartement',
    layer: 'core',
    questionsInModal: true,
    terms: ['twoShapes', 'theDroppedDe'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
    say: 'One short passage. Every position word in it is one you have met, and half of them take de.',
    text: "Voici mon appartement. La cuisine est à côté du salon. Le canapé est devant la fenêtre et la télévision est sur la petite table. Mon sac est sous le lit et les clés sont dans le sac. Le jardin est derrière la maison, et la boulangerie est en face de la gare, tout près de chez moi.",
    questions: [
      { q: 'Where is the kitchen?', a: 'Next to the living room. The passage says à côté du salon, with de and le collapsed into du.' },
      { q: 'Where are the keys?', a: 'In the bag, and the bag is under the bed. Dans le sac and sous le lit, two of the five that take nothing.' },
      { q: 'Which positions in the passage needed a de?', a: 'À côté du salon, en face de la gare and près de chez moi. The other five go straight onto the noun.' },
    ],
    glossary: [
      { word: 'à côté du', en: 'next to the', ipa: '/a ko.te dy/', note: 'De and le collapsed into du, exactly as à and le collapse into au.' },
      { word: 'devant', en: 'in front of', ipa: '/də.vɑ̃/', note: 'One word, straight onto the noun. No de.' },
      { word: 'sous', en: 'under', ipa: '/su/', note: 'The partner of sur, and the one pair here your ear has to work at.' },
      { word: 'en face de', en: 'opposite', ipa: '/ɑ̃ fas də/', note: 'A three-word phrase and the third word is de. It is never optional.' },
      { word: 'près de', en: 'near', ipa: '/pʁɛ də/', note: 'The same shape again. Près de chez moi is near my place.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's18-bounded',
    title: 'Two More You Will Meet',
    frSub: 'entre et chez',
    hint: 'Two cards. Neither is on the test.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['twoShapes'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
    say: 'Two words worth recognising now so they do not surprise you later. Neither is examined here.',
    cards: [
      {
        label: 'the one that needs two things',
        head: 'entre',
        fr: frOf('fr.a1.prepositions-essentielles.090'),
        sub: `${sub('entre')} · ${enOf('fr.a1.prepositions-essentielles.090')}`,
        // The respelling here is the REPAIRED value. See prepositions-corpus.ts
        // REPAIRS: the shipped AHNTR sounds an n that is not in the word, and no
        // shared checker can see the fault because the nasal closes word-internally.
        body: 'Between, and the only position word here that cannot work with one reference point. You need both. It goes straight onto the first noun, so it belongs with the five.',
      },
      {
        label: 'a second pair',
        head: 'two things, every time',
        fr: frOf('fr.a1.prepositions-essentielles.039'),
        sub: enOf('fr.a1.prepositions-essentielles.039'),
        body: 'The same shape again, so the requirement reads as a rule rather than an accident. Entre always has an et behind it somewhere, naming the second thing.',
      },
      {
        label: 'the one English has no word for',
        head: 'chez',
        fr: frOf('fr.a1.prepositions-essentielles.023'),
        sub: `${sub('chez')} · ${enOf('fr.a1.prepositions-essentielles.023')}`,
        body: "At somebody's place, and it takes a person rather than a building. There is no single English word for it and you will use it constantly.",
      },
      {
        label: 'chez without a building',
        head: 'chez nous',
        fr: frOf('fr.a1.prepositions-essentielles.073'),
        sub: enOf('fr.a1.prepositions-essentielles.073'),
        body: 'The same word with nobody named at all. Chez moi is my place, chez nous is ours, and the person is the destination rather than the address.',
      },
    ],
  },

  /* ── Act 6: prove it ────────────────────────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's19-words',
    title: 'Everything In One Place',
    frSub: 'Le vocabulaire',
    layer: 'core',
    say: 'Two groups, and the split is the lesson.',
    themes: [
      {
        title: 'Straight onto the noun',
        cards: [
          ...DIRECT.map((p) => ({ fr: p.fr, sub: sub(p.fr), en: p.en })),
        ],
      },
      {
        title: 'These end in de',
        cards: DE_TAKING.map((p) => ({ fr: p.fr, sub: sub(p.fr), en: p.en })),
      },
      {
        title: 'What à does to the word after it',
        cards: [
          { fr: 'au', sub: sub('au'), en: glossOf('au') },
          { fr: 'aux', sub: sub('aux'), en: glossOf('aux') },
          { fr: 'à la', sub: sub('à la'), en: glossOf('à la') },
          { fr: "à l'", sub: sub("à l'"), en: glossOf("à l'") },
        ],
      },
      {
        title: 'And what de does',
        cards: [
          { fr: 'du', sub: sub('du'), en: glossOf('du') },
          { fr: 'des', sub: sub('des'), en: glossOf('des') },
          { fr: 'de la', sub: sub('de la'), en: glossOf('de la') },
          { fr: "de l'", sub: sub("de l'"), en: glossOf("de l'") },
        ],
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's20-flash',
    title: 'The Twelve Words',
    frSub: 'Révision rapide',
    layer: 'core',
    say: 'Twelve cards. The four at the end carry their de, because that is how you have to know them.',
    cards: PREPOSITIONS.map((p) => ({
      front: p.en,
      back: p.fr,
      say: p.fr,
    })),
  },

  {
    // Every target is at or under DICTEE_LETTER_LIMIT (16) so all six stay in
    // LETTERS mode and the learner writes the preposition rather than tapping a
    // tile that already says it. Not one importable row could do this job: the
    // shortest published spatial sentence in this theme is 18 letters. Verified
    // through the real dicteeMode in the batch, the merge and the test.
    type: 'dictation',
    id: 's21-dictation',
    title: 'Write What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    say: 'Six short lines. Two of them differ by one letter, and you have to choose which.',
    itemIds: DICTATION_IDS,
  },

  {
    // skill: 'speak'. NOT 'write': the practice renderer draws no writing
    // surface for it, so a write mission is a screen with nothing to do on it.
    // Only typeIn, errorSpot and the dictée make a learner produce written
    // French, and this lesson uses all three in the quiz.
    type: 'practice',
    id: 's22-speak',
    title: 'Say Where It Is',
    frSub: 'À vous',
    layer: 'core',
    skill: 'speak',
    say: 'Every line is built on être, which you already have, so the only thing you are choosing is the position.',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's23-scenario',
    title: 'Looking For The Keys',
    frSub: 'Où sont mes clés ?',
    layer: 'core',
    say: 'The scene again, from the other side. This time you are the one who knows where they are.',
    setting: 'Your flatmate is late and cannot find their keys. You can see them from where you are standing.',
    // `alts` are { fr, en } objects, not bare strings. A conversation is not a
    // cloze test and every alternative below is a genuinely different way to
    // answer the same turn, so each one needs its own gloss.
    turns: [
      {
        ai: 'Tu as vu mes clés ? Je suis en retard !',
        en: 'Have you seen my keys? I am late!',
        user: 'Elles sont sur la table.',
        userEn: 'They are on the table.',
        alts: [
          { fr: 'Sur la table.', en: 'On the table.' },
          { fr: 'Elles sont sur la table de la cuisine.', en: 'They are on the kitchen table.' },
        ],
      },
      {
        ai: "Non, il n'y a rien sur la table. J'ai regardé.",
        en: 'No, there is nothing on the table. I looked.',
        user: 'Elles sont sous le journal.',
        userEn: 'They are under the newspaper.',
        alts: [
          { fr: 'Sous le journal.', en: 'Under the newspaper.' },
          { fr: 'Regarde sous le journal.', en: 'Look under the newspaper.' },
        ],
      },
      {
        ai: 'Ah ! Et mon sac, tu sais où il est ?',
        en: 'Ah! And my bag, do you know where it is?',
        user: 'Il est derrière la porte.',
        userEn: 'It is behind the door.',
        alts: [
          { fr: 'Derrière la porte.', en: 'Behind the door.' },
          { fr: 'Ton sac est derrière la porte.', en: 'Your bag is behind the door.' },
        ],
      },
      {
        ai: 'Parfait. Et la boulangerie, c\'est loin ?',
        en: 'Perfect. And the bakery, is it far?',
        user: "Non, c'est à côté de la gare.",
        userEn: 'No, it is next to the station.',
        alts: [
          { fr: "C'est à côté de la gare.", en: 'It is next to the station.' },
          { fr: "Non, c'est près de la gare.", en: 'No, it is near the station.' },
          { fr: "C'est en face de la gare.", en: 'It is opposite the station.' },
        ],
      },
      {
        ai: 'Merci ! Je passe au bureau après. À ce soir !',
        en: 'Thanks! I am going to the office after. See you tonight!',
        user: 'À ce soir !',
        userEn: 'See you tonight!',
        alts: [
          { fr: 'Bonne journée !', en: 'Have a good day!' },
          { fr: 'À ce soir, salut !', en: 'See you tonight, bye!' },
        ],
      },
    ],
  },

  {
    type: 'reviewDeck',
    id: 's24-review',
    title: 'Before The Exam',
    frSub: 'Révision',
    layer: 'core',
    say: 'Eight cards. Rate each one as you actually found it and the hub will bring the weak ones back.',
    cards: [
      { front: 'The cat is on the box', back: frOf(MINIMAL[0]), say: frOf(MINIMAL[0]) },
      { front: 'The cat is under the box', back: frOf(MINIMAL[1]), say: frOf(MINIMAL[1]) },
      { front: 'The cat is in the box', back: frOf(MINIMAL[2]), say: frOf(MINIMAL[2]) },
      { front: 'The cat is next to the box', back: frOf(COMPOUND[0]), say: frOf(COMPOUND[0]) },
      { front: 'The cat is near the box', back: frOf(COMPOUND[1]), say: frOf(COMPOUND[1]) },
      { front: 'I am at the office (le bureau)', back: frOf('fr.a1.prepositions-essentielles.130'), say: frOf('fr.a1.prepositions-essentielles.130') },
      { front: 'I am at home (la maison)', back: frOf('fr.a1.prepositions-essentielles.132'), say: frOf('fr.a1.prepositions-essentielles.132') },
      { front: 'The cat is next to the bed (le lit)', back: frOf('fr.a1.prepositions-essentielles.134'), say: frOf('fr.a1.prepositions-essentielles.134') },
    ],
  },

  {
    type: 'quiz',
    id: 's25-quiz',
    title: 'The Exam',
    frSub: 'L\'examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    // EVERY STEM DESCRIBES THE POSITION IN ENGLISH. "sur or sous?" tests nothing
    // and looks exactly like a question that does; "The keys are underneath the
    // newspaper" has exactly one answer. The batch, the merge and the test all
    // check it.
    //
    // QuizDeckView shuffles the options of every closed question per attempt, so
    // NO OPTION REFERS TO A POSITION IN THE LIST. This lesson is a verbal
    // minefield for that, because it is about spatial position and "the first
    // one" reads as natural English. Every option names its preposition.
    // No two options within a question are equal, which `quiz-duplicate-option`
    // enforces and which a shuffled question makes genuinely ambiguous.
    //
    // `quiz-spread` caps any authored `correct` slot at 40% of closed questions
    // regardless of the runtime shuffle. Thirteen questions are closed here, so
    // the cap is five, and the indices below are spread on purpose.
    //
    // fold() strips accents, so NO free-text question tests à against a or sur
    // against sûr. Both are mcq or they are not asked.
    rounds: [
      {
        id: 'r1-where-is-it',
        label: 'Where is it',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round.
        targets: ['err-wrong-position', 'err-dropped-de'],
        say: 'The five, described in English so there is one answer.',
        questions: [
          {
            q: 'The cat is inside the box, with the lid open. Which word?',
            format: 'mcq',
            opts: ['sur', 'sous', 'dans', 'devant'],
            correct: 2,
            why: 'dans. Inside something is dans, and it is the reason the reference point in this lesson is a box: nothing is ever inside a chair. Sur would put the cat on the lid.',
            ref: 's03-five',
          },
          {
            q: 'The keys are underneath the newspaper, out of sight. Which word?',
            format: 'mcq',
            opts: ['sur', 'sous', 'dans', 'entre'],
            correct: 1,
            why: 'sous. Underneath is sous, and this is the sentence the scene turned on. Sur would have you looking at the top of the paper, which is the ten minutes the scene spends.',
            ref: 's01-scene',
          },
          {
            q: 'The garden is on the far side of the house, hidden from the street. Write the position word.',
            format: 'typeIn',
            accept: ['derrière', 'derriere'],
            answer: 'derrière',
            why: 'derrière. Behind is derrière and devant is the near side. These two are opposites that sound nothing alike, so they are a reading and writing pair rather than an ear one.',
            ref: 's04-column',
          },
          {
            q: 'You want to say, in French: the cat is on the box. Write the whole sentence.',
            format: 'typeIn',
            accept: ['Le chat est sur la boîte.', 'le chat est sur la boite', 'Le chat est sur la boite'],
            answer: 'Le chat est sur la boîte.',
            why: 'Le chat est sur la boîte. Sur goes straight onto la boîte with nothing between them. Written as a whole sentence rather than a bare word, because a three-letter answer typed on its own is a coin toss rather than a test.',
            ref: 's03-five',
          },
        ],
      },
      {
        id: 'r2-one-word-or-phrase',
        label: 'One word or a phrase',
        targets: ['err-dropped-de', 'err-wrong-position'],
        say: 'The de, and the four phrases that cannot do without it.',
        questions: [
          {
            q: 'Fill the gap: « Le café est à côté ___ la banque. »',
            format: 'typeIn',
            accept: ['de'],
            answer: 'de',
            why: 'de. À côté is not a finished position word: the de is its last word. Leaving it out is understood perfectly by every French speaker, which is why nobody corrects it and why it survives for years.',
            ref: 's06-pair',
          },
          {
            q: 'Somebody writes « Nous habitons près la gare. » Fix the sentence.',
            format: 'errorSpot',
            accept: ['Nous habitons près de la gare.', 'nous habitons pres de la gare', 'Nous habitons pres de la gare'],
            answer: 'Nous habitons près de la gare.',
            why: 'près de la gare. Près is one of the four that end in de. This is the same error as the question before it arriving on a different phrase, and the two turn up together.',
            ref: 's08-traps',
          },
          {
            q: 'Which of these position words does NOT need de after it?',
            format: 'mcq',
            opts: ['à côté', 'près', 'devant', 'en face'],
            correct: 2,
            why: 'devant. It is one of the five single words that sit straight against the noun. The other three are phrases and every one of them ends in de, which is the only split this lesson asks you to keep.',
            ref: 's07-sort',
          },
          {
            q: 'Somebody writes « Le chat est sur de la boîte. » Fix the sentence.',
            format: 'errorSpot',
            accept: ['Le chat est sur la boîte.', 'le chat est sur la boite', 'Le chat est sur la boite'],
            answer: 'Le chat est sur la boîte.',
            why: 'Le chat est sur la boîte. This is the rule applied where it does not reach. Sur takes nothing at all, and adding de to it is the error people make in the week after this lesson rather than before it.',
            ref: 's08-traps',
          },
        ],
      },
      {
        id: 'r3-a-and-au',
        label: 'À and what follows it',
        targets: ['err-over-contracts', 'err-dropped-de'],
        say: 'Two of the four shapes change. Two do not.',
        questions: [
          {
            q: 'Fill the gap: « à + le = ___ »',
            format: 'typeIn',
            accept: ['au'],
            answer: 'au',
            why: 'au. À and le do not stand side by side in French, so the two collapse into one word. This is not a shortcut you may decline: à le bureau does not exist.',
            ref: 's10-contract',
          },
          {
            q: 'You want to say: I am at home. La maison is a la word. Which is French?',
            format: 'mcq',
            opts: ['Je suis au maison', 'Je suis à la maison', 'Je suis à maison', 'Je suis aux maison'],
            correct: 1,
            why: 'Je suis à la maison. À plus la does not change at all, and both words stay exactly as they were. Half of this rule is knowing where it stops.',
            ref: 's10-contract',
          },
          {
            q: 'Somebody writes « Je suis à le bureau. » Fix the sentence.',
            format: 'errorSpot',
            accept: ['Je suis au bureau.', 'je suis au bureau'],
            answer: 'Je suis au bureau.',
            why: 'Je suis au bureau. À and le collapse into au every time, with no exceptions and no slower careful version that keeps them apart.',
            ref: 's11-check',
          },
          {
            q: "Somebody has learned that à + le is au and writes « je suis au école ». What went wrong?",
            format: 'mcq',
            opts: [
              "L'école takes à l', and that does not contract",
              'Nothing, it is correct',
              'It should be aux école',
              'École should be masculine',
            ],
            correct: 0,
            why: "À l'école. The rule was applied to a word it does not cover: only le and les collapse, and l' is already a shortened article that à leaves alone. Over-applying this is more common after the lesson than before it.",
            ref: 's11-check',
          },
        ],
      },
      {
        id: 'r4-the-other-du',
        label: 'The du you already met',
        targets: ['err-du-collision', 'err-over-contracts'],
        say: 'The partitive lesson named this one. Here is where it was going.',
        questions: [
          {
            q: 'Fill the gap: « Le chat est à côté ___ lit. » Le lit is a le word.',
            format: 'typeIn',
            accept: ['du'],
            answer: 'du',
            why: 'du. De and le collapse exactly as à and le do. This is the du the partitive lesson already named as the common one, arriving with a place behind it rather than a quantity.',
            ref: 's13-de-table',
          },
          {
            q: 'In « à côté du lit », what does du mean?',
            format: 'mcq',
            opts: [
              'Some of the bed',
              'To the, from à and le collapsing',
              'It is a spelling of due',
              'Of the, from de and le collapsing',
            ],
            correct: 3,
            why: 'Of the. The partitive lesson\'s test still separates them: some bread makes sense, so je bois du café is that one, and some the bed does not, so this is the other.',
            ref: 's12-du',
          },
          {
            q: 'You want to say: the cat is near the trees. Les arbres is plural. Which is French?',
            format: 'mcq',
            opts: [
              'Le chat est près de les arbres',
              'Le chat est près du arbres',
              'Le chat est près des arbres',
              'Le chat est près les arbres',
            ],
            correct: 2,
            why: 'près des arbres. De and les collapse into des, which is the same two letters as the des you use for several things and a completely different job. Both collapses happen on their own rather than being chosen.',
            ref: 's13-de-table',
          },
          {
            q: 'Fill the gap: « La cuisine est à côté ___ la salle de bains. » La salle is a la word.',
            format: 'typeIn',
            accept: ['de'],
            answer: 'de',
            why: 'de, unchanged. De plus la does not collapse, exactly as à plus la does not. The de is still compulsory; it simply stays as its own word.',
            ref: 's13-de-table',
          },
        ],
      },
      {
        id: 'r5-the-ear',
        label: 'The one pair to hear',
        targets: ['err-hears-sur-for-sous', 'err-wrong-position'],
        say: 'Sur against sous, and nothing else, because nothing else in this lesson is hard to hear.',
        questions: [
          {
            q: 'Listen. Where are the keys?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: frOf('fr.a1.prepositions-essentielles.143') },
            opts: ['Underneath the newspaper', 'On top of the newspaper', 'Next to the newspaper', 'Inside the newspaper'],
            correct: 0,
            why: 'Underneath. Sous is a plain oo with the lips pushed forward; sur is the tight ü with the tongue high. This is the pair the scene was built on and the only one here worth practising.',
            ref: 's16-ear',
          },
          {
            q: 'Listen. Where is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: frOf('fr.a1.prepositions-essentielles.138') },
            opts: ['Under the bed', 'On the bed', 'Behind the bed', 'Next to the bed'],
            correct: 1,
            why: 'On the bed. Sur puts it on top and in plain view. Said at speed inside a sentence these two carry no stress of their own, which is what makes them close.',
            ref: 's16-ear',
          },
          {
            q: 'Which pair sounds so similar that a French speaker could mishear it?',
            format: 'mcq',
            opts: ['devant and derrière', 'dans and derrière', 'sur and sous', 'sous and devant'],
            correct: 2,
            why: 'sur and sous. Everything else in this lesson sounds nothing alike and never gets confused. Knowing which pair is genuinely hard means you can stop worrying about the ones that are not.',
            ref: 's16-ear',
          },
          {
            q: 'Say it: the cat is under the box.',
            format: 'speak',
            target: 'Le chat est sous la boîte.',
            accept: ['Le chat est sous la boîte.', 'le chat est sous la boite'],
            answer: 'Le chat est sous la boîte.',
            why: 'Le chat est sous la boîte. Push your lips forward for sous and keep it short. This is the half of the pair that goes wrong when you are being understood rather than when you are listening.',
            ref: 's03-five',
          },
        ],
      },
      {
        id: 'r6-say-where',
        label: 'Say where things are',
        targets: ['err-accent-pair', 'err-dropped-de'],
        say: 'Everything at once, and one question about a mark you will never hear.',
        questions: [
          {
            q: 'Which of these means "he has a cat" rather than a place?',
            format: 'mcq',
            // fold() strips accents, so a typeIn on this pair certifies nothing.
            // mcq is the only format that can test the mark, because its options
            // are picked rather than typed.
            opts: ['Il à un chat', 'Il a un chat', "Il est à l'hôtel", 'Il a à un chat'],
            correct: 1,
            why: 'Il a un chat, with no mark. A without the mark is the verb from the avoir lesson; à with it is the preposition. They sound identical, so this is a reading difference: a thing follows a, a place follows à.',
            ref: 's14-accent',
          },
          {
            q: 'Describe the position: the pen is beside the notebook. Fill the gap: « Le stylo est ___ du cahier. »',
            format: 'typeIn',
            accept: ['à côté', 'a cote', 'à cote', 'a côté'],
            answer: 'à côté',
            why: 'à côté. Beside is à côté de, and here the de has already collapsed with le into du, which is why the gap takes only the first two words. The phrase is never à côté on its own.',
            ref: 's13-de-table',
          },
          {
            q: 'Somebody writes « Le jardin est derrière de la maison. » Fix the sentence.',
            format: 'errorSpot',
            accept: ['Le jardin est derrière la maison.', 'le jardin est derriere la maison', 'Le jardin est derriere la maison'],
            answer: 'Le jardin est derrière la maison.',
            why: 'derrière la maison. Derrière is one of the five and takes nothing after it. This is the over-applied de again, and it is the sign of a learner who has understood the rule and not yet found its edge.',
            ref: 's08-traps',
          },
          {
            q: 'The bakery is across the road, facing the station. Which is French?',
            format: 'mcq',
            opts: [
              'La boulangerie est en face la gare',
              'La boulangerie est en face à la gare',
              'La boulangerie est face de la gare',
              'La boulangerie est en face de la gare',
            ],
            correct: 3,
            why: `En face de la gare. ${REFRAME} En face is a phrase, so it takes the de, and this is the last of the four that behave that way.`,
            ref: 's06-pair',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's26-roundup',
    title: 'What You Have',
    frSub: 'Le bilan',
    layer: 'core',
    say: 'Six points, and the second one is the one to carry out of here.',
    body: 'Nine ways to say where something is, one rule that separates them, and a collapse that happens on its own whenever à or de meets a le word.',
    points: [
      'Five words go straight onto the noun: sur, sous, dans, devant, derrière. Nothing goes between them and the thing.',
      `${REFRAME}`,
      'À côté de, près de, loin de and en face de all end in de, and leaving it out is understood perfectly, which is why nobody will ever correct it for you.',
      'À plus le is au and à plus les is aux. À la and à l\' do not change, and knowing where the rule stops matters as much as knowing it.',
      'De plus le is du, which the partitive lesson already named, and de plus les is des. Both collide with words you know and the same test separates them.',
      'Sur and sous are the only pair here your ear has to work at. Entre needs two things and chez needs a person, and you will meet both again.',
    ],
  },
];

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Where is it',
    sections: ['s01-scene', 's02-goals', 's03-five', 's04-column'],
    milestone: 'One cat, one box, five positions, and you watched ten minutes go by over a single syllable.',
    estScreens: 24,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'One word, or a phrase',
    sections: ['s05-two-shapes', 's06-pair', 's07-sort', 's08-traps'],
    milestone: 'The split that separates you from a beginner, and the error it prevents.',
    estScreens: 24,
    restPoints: ['s07-sort/halfway'],
  },
  {
    id: 'act3',
    title: 'À, and where it stops',
    sections: ['s09-a', 's10-contract', 's11-check'],
    milestone: 'Au and aux, and the two shapes that do nothing at all.',
    estScreens: 20,
    restPoints: ['s10-contract/halfway'],
  },
  {
    id: 'act4',
    title: 'The du you already met',
    sections: ['s12-du', 's13-de-table', 's14-accent'],
    milestone: 'A collapse you were already taught, arriving with a place behind it.',
    estScreens: 20,
    restPoints: ['s12-du/halfway'],
  },
  {
    id: 'act5',
    title: 'Say where things are',
    sections: ['s15-etre', 's16-ear', 's17-reading', 's18-bounded'],
    milestone: 'Published French, the one pair worth hearing, and two words for later.',
    estScreens: 22,
    restPoints: ['s16-ear/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [
      's19-words', 's20-flash', 's21-dictation', 's22-speak',
      's23-scenario', 's24-review', 's25-quiz', 's26-roundup',
    ],
    milestone: 'Lesson complete. Everything here carries straight into describing a house room by room.',
    estScreens: 92,
    restPoints: [
      's20-flash/halfway', 's22-speak/halfway', 's24-review/halfway',
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
 * legitimately overlap: the scene's two sentences are also the ear drill's. The
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
  // Act 1: the five headwords, the five minimal sentences and the scene's own
  // pair. NOT the four compounds: they are taught in act 2, and a card released
  // before its mission is a card the learner is asked to rate before they have
  // met it.
  once([
    ...MINIMAL, ...SCENE_PAIR,
    ...DIRECT.filter((p) => (THE_FIVE as readonly string[]).includes(p.fr)).map((p) => p.headwordId),
  ]),
  // Act 2: all four compound headwords and the four compound sentences on the
  // same cat and box. TWO of the four headwords are imported rather than
  // authored (près de and loin de already existed at fr.sons.mots-essentiels.030
  // and .031), so the slice is taken off DE_TAKING rather than off the authored
  // list: the learner meets four cards here and does not care which two this
  // lesson wrote. The published compounds s15-etre shows are act 5, not here.
  once([...COMPOUND, ...DE_TAKING.map((p) => p.headwordId)]),
  // Act 3: à as a headword and the four contraction sentences.
  //
  // ONLY the two imported contraction rows act 3 actually SHOWS: s10-contract
  // quotes `.113` (à la, not contracting) and `.099` (aux, away from any place).
  // The other three imported contraction rows are displayed by s15-etre, which
  // is act 5, and releasing them here would put cards in the hub two acts before
  // the learner meets them. a1-21-prepositions.test.ts caught that: the check is
  // not "does this item belong to this idea" but "has the learner seen it by the
  // end of this act".
  once([
    ...CONTRACTION,
    ...PREPOSITIONS.filter((p) => p.fr === THE_SIXTH).map((p) => p.headwordId),
    'fr.a1.prepositions-essentielles.113',
    'fr.a1.prepositions-essentielles.099',
  ]),
  // Act 4: the four de + article sentences.
  once([...DE_ARTICLE]),
  // Act 5: everything the published-French act shows, which is every remaining
  // import, plus the two bounded headwords and the two short lines s16-ear puts
  // on screen. `.140` and `.141` are NOT here: they are first shown by the
  // dictée in act 6.
  once([
    'fr.a1.prepositions-essentielles.138', 'fr.a1.prepositions-essentielles.139',
    ...IMPORTED_SPATIAL_IDS, ...IMPORTED_COMPOUND_IDS,
    ...IMPORTED_CONTRACTION_IDS, ...IMPORTED_BOUNDED_IDS,
    ...PREPOSITIONS.filter((p) => p.fr === 'entre' || p.fr === 'chez').map((p) => p.headwordId),
  ]),
  // Act 6: the two dictée-only lines, and nothing else.
  //
  // This slice was `[]` on the principle that act 6 tests rather than teaches,
  // and the principle is right about every other row in the lesson. It was wrong
  // about these two: `Je suis au parc.` and `C'est à côté du parc.` appear on no
  // screen before s21-dictation, so releasing them in act 5 asked the learner to
  // rate a card they had not met, and releasing them nowhere would have left two
  // authored rows out of spaced repetition entirely.
  once([...SHORT.filter((id) => !['fr.a1.prepositions-essentielles.138', 'fr.a1.prepositions-essentielles.139'].includes(id))]),
];

/** Everything the lesson teaches is released exactly once, and nothing is
 *  released that the lesson does not teach. Checked HERE rather than only in the
 *  test, because a tranche that silently drops a card is a card that never
 *  reaches spaced repetition and nothing on a device would say so. */
{
  const taught = new Set(ITEM_IDS);
  const never = [...taught].filter((id) => !released.has(id));
  if (never.length) {
    throw new Error(`a1.21.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.21.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
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
 * `err-dropped-de` and `err-over-contracts` look like opposites and are the same
 * learner three weeks apart. The first is not knowing the rule; the second is
 * knowing it and not knowing where it stops. They are separate triggers because
 * remediating one does nothing for the other.                                 */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-position',
    description: 'Reaches for the wrong one of the five: says sur for sous, or devant for derrière. The ordinary beginner error, and the only one in this lesson that produces a sentence with the wrong meaning rather than a wrong shape.',
    detectOn: ['s03-five', 's04-column', 's07-sort', 's25-quiz/r1-where-is-it'],
    drill: 'drill-which-position',
    retest: 'retest-which-position',
  },
  {
    id: 'err-dropped-de',
    description: 'Drops the de from a compound preposition: à côté la banque, près la gare. The most common error in this area and the one nobody ever corrects, because the meaning survives intact.',
    detectOn: ['s05-two-shapes', 's06-pair', 's07-sort', 's08-traps', 's25-quiz/r2-one-word-or-phrase'],
    drill: 'drill-the-de',
    retest: 'retest-the-de',
  },
  {
    id: 'err-over-contracts',
    description: "Applies the contraction where it does not reach: au école, à l'la maison, or adds de to one of the five. The error of a learner who has understood the rule and not yet found its edge, and it appears AFTER the lesson rather than before it.",
    detectOn: ['s10-contract', 's11-check', 's08-traps', 's25-quiz/r3-a-and-au'],
    drill: 'drill-does-it-contract',
    retest: 'retest-does-it-contract',
  },
  {
    id: 'err-du-collision',
    description: `Merges the de + le du with the partitive du taught in ${unitRef('a1.29')}, or the de + les des with the indefinite plural des from ${unitRef('a1.11')}. Reads à côté du lit as some of the bed, or simply stops trusting either word.`,
    detectOn: ['s12-du', 's13-de-table', 's25-quiz/r4-the-other-du'],
    drill: 'drill-which-du',
    retest: 'retest-which-du',
  },
  {
    id: 'err-hears-sur-for-sous',
    description: 'Mishears sur as sous or the reverse, then searches confidently in the wrong place. Costs nothing in grammar and everything in the moment, which is why it is the scene rather than a trap card.',
    detectOn: ['s01-scene', 's16-ear', 's25-quiz/r5-the-ear'],
    drill: 'drill-sur-sous',
    retest: 'retest-sur-sous',
  },
  {
    id: 'err-accent-pair',
    description: 'Believes à and a must be audibly different and concludes their listening is at fault, or writes one for the other. Costs confidence rather than accuracy, which is why it gets its own drill and no ear question anywhere in the lesson.',
    detectOn: ['s09-a', 's14-accent', 's25-quiz/r6-say-where'],
    drill: 'drill-the-mark',
    retest: 'retest-the-mark',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-which-position',
    title: 'Which position?',
    format: 'flashcard',
    // Built from the minimal set rather than listed, so a change to the hero
    // deck moves the drill with it. Every front is the English position, so the
    // learner produces the French rather than recognising it.
    pairs: MINIMAL.map((id) => [enOf(id), frOf(id)] as [string, string]),
    coach: 'Same cat, same box, five times. The only thing you are choosing is the short word in the middle, and each one puts the cat somewhere different.',
  },
  {
    id: 'retest-which-position',
    title: 'One more time',
    format: 'mcq',
    q: 'The cat is on the far side of the box, hidden from you. Which word?',
    opts: ['devant', 'derrière', 'dans'],
    correct: 1,
    why: 'derrière. The far side is derrière and the near side is devant. These two are opposites that sound nothing alike, so this is a matter of remembering rather than hearing.',
  },
  {
    id: 'drill-the-de',
    title: 'Does it need de?',
    format: 'sort',
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    buckets: ['goes straight on', 'needs de first'],
    items: [...MINIMAL.slice(0, 3), ...COMPOUND.slice(0, 3)],
    coach: 'Look at the word after the position. If the position is one word, nothing goes between. If it is a phrase, its last word is de and it is not optional.',
  },
  {
    id: 'retest-the-de',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to say: the pharmacy is opposite the bakery. Which is French?',
    opts: [
      'La pharmacie est en face la boulangerie',
      'La pharmacie est en face de la boulangerie',
      'La pharmacie est en face à la boulangerie',
    ],
    correct: 1,
    why: 'en face de la boulangerie. En face is a phrase and its last word is de. Without it the sentence is still understood, which is exactly why the error lasts.',
  },
  {
    id: 'drill-does-it-contract',
    title: 'Contract, or leave it?',
    format: 'sort',
    buckets: ['these two collapse', 'these two stay'],
    items: CONTRACTION,
    coach: 'Only le and les collapse. La stays and l\' stays, because l\' is already a shortened article. Half of this rule is knowing where it stops.',
  },
  {
    id: 'retest-does-it-contract',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to say: I am at school. École takes l\'. Which is French?',
    opts: ["Je suis à l'école", 'Je suis au école', "Je suis aux l'école"],
    correct: 0,
    why: "À l'école. L' is not le, so nothing collapses. Reaching for au here is the rule being applied one word too far.",
  },
  {
    id: 'drill-which-du',
    title: 'Which du is it?',
    format: 'sort',
    buckets: ['of the, a place', 'some, an amount'],
    items: ['fr.a1.prepositions-essentielles.134', 'fr.a1.prepositions-essentielles.100', 'fr.a1.prepositions-essentielles.141'],
    coach: 'Try putting "some" in front of the English. Some bread works, so that one is an amount. Some the bed does not, so that one is of the, and it is the one this lesson uses.',
  },
  {
    id: 'retest-which-du',
    title: 'One more time',
    format: 'mcq',
    q: 'In « Le chien dort à côté du feu », what is du doing?',
    opts: ['Saying some of the fire', 'Standing in for de and le', 'Standing in for à and le'],
    correct: 1,
    why: 'De and le. À côté ends in de, the fire is a le word, and the two collapse. The partitive lesson already named this as the commoner of the two du.',
  },
  {
    id: 'drill-sur-sous',
    title: 'Sur, or sous?',
    format: 'sort',
    // Two buckets and four sentences, and they are the scene's pair plus the
    // dictée's. The learner has already met all four, which is the point: the
    // difficulty is in the signal rather than in the vocabulary.
    buckets: ['on top of it', 'underneath it'],
    items: [...SCENE_PAIR, ...SHORT.slice(0, 2)],
    coach: 'Sur has the tight ü with your tongue high and your lips rounded. Sous is a plain oo with your lips pushed forward. Say both out loud once and the difference stops being subtle.',
  },
  {
    id: 'retest-sur-sous',
    title: 'One more time',
    format: 'mcq',
    q: 'You are told the keys are sous le journal. Where do you look?',
    opts: ['On top of the newspaper', 'Underneath the newspaper', 'Next to the newspaper'],
    correct: 1,
    why: 'Underneath. Sous is under. This is the ten minutes the scene spends, and it is the only pair in the lesson where the ear is doing real work.',
  },
  {
    id: 'drill-the-mark',
    title: 'A place, or a thing?',
    format: 'flashcard',
    pairs: [
      ['he has a cat', 'il a un chat'],
      ['he is in Paris', 'il est à Paris'],
      ['she has a bag', 'elle a un sac'],
      ['she is at home', 'elle est à la maison'],
    ],
    coach: 'These sound identical and always will, so stop listening for the mark. What separates them is what follows: something owned after a, somewhere after à.',
  },
  {
    id: 'retest-the-mark',
    title: 'One more time',
    format: 'mcq',
    q: 'Which one means "she is at the office"?',
    opts: ['Elle a au bureau', 'Elle est au bureau', 'Elle a le bureau'],
    correct: 1,
    why: 'Elle est au bureau. A place, so à, and à plus le gives au. The first option puts the verb for having in front of a place, which is where this confusion actually shows up.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * a1.26 "The House" declares a1.21 as its prerequisite and will send learners
 * back here, so the sheetIds are wired from act 1 rather than added at the end.
 *
 * ReferenceSheet.tsx draws ONLY `teach`, `letterGrid` and `table` inside a
 * sheet and falls through to a title-only branch for anything else. a1.17
 * shipped two sheets that opened with a heading and nothing under it because
 * they were built from `cheatSheet`, and it was found on a device and by nothing
 * else. These use `table` and `teach` exclusively.                            */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.21.places',
    title: 'Saying where something is',
    layer: 'deep',
    contains: ['The five that go straight on', 'The four that end in de', 'entre and chez'],
    sections: [
      {
        type: 'table',
        id: 'sheet-places-table',
        title: 'The nine positions',
        // Two short columns. SheetTable sizes a column at max(110, 320/cols), so
        // a third column of prose would sit in a 160-wide cell readable only by
        // dragging the table sideways. That was a1.17 v4's device finding and
        // the reasons live in prose below instead.
        cols: ['word', 'means'],
        rows: PREPOSITIONS.map((p) => [p.fr, p.en]),
      },
      {
        type: 'teach',
        id: 'sheet-places-rule',
        title: 'The only rule',
        body: `${REFRAME} Sur, sous, dans, devant and derrière are single words and they sit straight against the noun. À côté de, près de, loin de and en face de are phrases, and the de is the last word of the phrase rather than the first word of the thing. Leaving it out is understood perfectly and marks you as a beginner, which is why it survives so long: nobody will ever correct it for you.`,
      },
      {
        type: 'teach',
        id: 'sheet-places-two',
        title: 'entre and chez',
        body: 'Entre needs two reference points rather than one: entre la banque et la poste. It goes straight onto the first noun, so it belongs with the five. Chez takes a person rather than a place and has no single English word: chez le médecin is at the doctor\'s, chez moi is at my place.',
      },
    ],
  },
  {
    id: 'sheet.a1.21.contractions',
    title: 'What à and de do to the word after them',
    layer: 'deep',
    contains: ['à + le, la, les, l\'', 'de + le, la, les, l\'', 'The du collision'],
    sections: [
      {
        type: 'table',
        id: 'sheet-contract-table',
        title: 'Both sets, side by side',
        cols: ['you would expect', 'French gives you'],
        rows: [
          ['à + le', 'au'],
          ['à + les', 'aux'],
          ['à + la', 'à la'],
          ["à + l'", "à l'"],
          ['de + le', 'du'],
          ['de + les', 'des'],
          ['de + la', 'de la'],
          ["de + l'", "de l'"],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-contract-stops',
        title: 'Where it stops',
        body: 'Only le and les collapse. La never does and l\' never does, because l\' is already a shortened article. Half of this rule is knowing its edge: « au école » and « à l\'la maison » are errors made by learners who have understood the rule, not by ones who have not met it.',
      },
      {
        type: 'teach',
        id: 'sheet-contract-du',
        title: 'The du you already met',
        body: 'The partitive lesson named this first and its test still works. Try putting "some" in front of the English: some bread makes sense, so je bois du café is an amount, and some the bed does not, so à côté du lit is de and le collapsed. Des collides the same way with the des you use for several things, and the same test separates them.',
      },
    ],
  },
];

export const PREPOSITIONS_LESSON: Lesson = {
  id: 'a1.21.l1',
  unitId: 'a1.21',
  // The lesson's index WITHIN its unit, not its place in the track. Every lesson
  // in the seed is seq 1 because every unit ships exactly one so far, and the
  // `l1` in the id is this number.
  seq: 1,
  title: 'Prépositions de lieu',
  level: 'a1',
  // TWENTY-FOUR, from unit.seq. missions.ts derives the eyebrow at render time
  // as `${level} · LEÇON ${unit.seq}`, and a1.21 sits at seq 24. The stored
  // value is a fallback and has to agree with what the renderer computes, or the
  // two disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7).
  tag: 'A1 · LEÇON 24',
  intro:
    'Nine ways to say where something is, and one rule that splits them in two. Five are single words that sit straight against the noun. Four are phrases ending in de, and leaving that de out is the most common thing an English speaker gets wrong here.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The LESSON's own counter, not `seed.version`. seed.version is the OTA
  // snapshot number, derived by publish-content.ts as previous + 1, and a merge
  // must never hand-bump it.
  version: 1,

  grammarAssumed: [
    'Noun gender, and that un and une follow it, introduced in a1.03',
    "le, la, l' and les, and the elision of le and la in front of a vowel, introduced in a1.04",
    'The plural of a noun, introduced in a1.03',
    'The full present of être, which every production surface in this lesson is built on, introduced in a1.06',
    'The full present of avoir, and the a in il a, introduced in a1.07',
    'des as the plural of un and une, introduced in a1.11',
    'du as an amount of something, and that most du in French is not that one, introduced in a1.29',
    'The possessives mon, ma and mes, which appear in imported sentences, introduced in a1.17',
  ],
  grammarIntroduced: [
    'The prepositions of place sur, sous, dans, devant and derrière, introduced here for the first time',
    'The preposition à as a locative, beyond its use in fixed expressions',
    'The distinction between simple and compound prepositions of place',
    'That a compound preposition of place terminates in de, which is obligatory',
    'The contraction of à with the definite article: à + le = au, à + les = aux',
    'That à + la and à + l\' do not contract, which bounds the rule',
    'The contraction of de with the definite article in a locative rather than a partitive context',
    'The formal identity of the locative du with the partitive du of a1.29, and of the locative des with the indefinite des of a1.11',
    'entre as requiring two reference points, and chez as taking an animate complement',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Prepositions of Place',
    subFr: 'Prépositions de lieu',
    introFr: 'Neuf façons de dire où se trouve quelque chose, et une règle qui les sépare en deux.',
    minutes: 26,
    difficulty: 2,
    glyph: '📦',
    screens: 202,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PREPOSITIONS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-21-prepositions.test.ts, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered. All five of the brief's lesson-specific notes are
    // written in explicitly.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    // CLIP_MANIFEST is empty by design, so every card falls back to device TTS
    // until the studio delivers, and a recordingId resolving to nothing is the
    // correct shipping state.
    recorded: [
      {
        id: 'rec-a1-21-sur-sous',
        desc:
          'THE MOST IMPORTANT NOTE IN THIS LESSON. « sur » AND « sous » ARE ONE TAKE, one voice, one pace, '
          + 'adjacent, with no gap and no reset between them. This is the pair the learner\'s ear genuinely fails '
          + 'on and the pair the whole scene is built on. Recorded apart they become two performances and the '
          + 'learner compares the performances rather than the sounds. '
          + 'Read « Les clés sont sur le journal. » immediately followed by « Les clés sont sous le journal. », '
          + 'then « Il est sur le lit. » followed by « Il est sous le lit. » DO NOT LENGTHEN OR STRESS EITHER '
          + 'PREPOSITION. They are unstressed function words and the entire teaching point is that at ordinary '
          + 'speed they are hard to separate. A reader who helpfully clarifies them teaches the opposite of what '
          + 'the scene demonstrates. '
          + 'sur is /syʁ/, the tight ü with the tongue high and the lips rounded. sous is /su/, a plain oo with '
          + 'the lips pushed forward. Both short.',
        clipIds: [
          'sur', 'sous', 'sur-sous-pair',
          'Les clés sont sur le journal.', 'Les clés sont sous le journal.',
          'Il est sur le lit.', 'Il est sous le lit.',
        ],
      },
      {
        id: 'rec-a1-21-five',
        desc:
          'THE FIVE PREPOSITIONS RUN OVER ONE IDENTICAL PHRASE IN A SINGLE TAKE. « Le chat est sur la boîte, le '
          + 'chat est sous la boîte, le chat est dans la boîte, le chat est devant la boîte, le chat est derrière '
          + 'la boîte. » One breath group per sentence, one voice, one pace, read straight through as if reading '
          + 'a list. ONLY ONE WORD MOVES and that is the entire point of the hero screen: the learner has to hear '
          + 'that the frame is identical and the position word is the only variable. Do not vary the intonation '
          + 'between sentences and do not record these five separately. '
          + 'KEEP THE NASALS CLOSED. dans is /dɑ̃/ and devant is /də.vɑ̃/, and neither has an n sound behind the '
          + 'vowel at all. The app respells them DAHⁿ and duh-VAHⁿ deliberately, and both rows are repaired by '
          + 'this lesson from a shipped form that spelled a plain n.',
        clipIds: [
          'Le chat est sur la boîte.', 'Le chat est sous la boîte.', 'Le chat est dans la boîte.',
          'Le chat est devant la boîte.', 'Le chat est derrière la boîte.', 'five-positions-run',
        ],
      },
      {
        id: 'rec-a1-21-de-rule',
        desc:
          'EVERY COMPOUND PREPOSITION IS RECORDED AS A WHOLE PHRASE AND NEVER AS PARTS. « à côté de la boîte », '
          + '« près de la boîte », « loin de la boîte », « en face de la boîte ». The rule this lesson teaches is '
          + 'that the de IS THERE, so a clip of « à côté » on its own teaches the exact error the lesson exists '
          + 'to prevent. Under no circumstances record the preposition without its de, and do not leave a pause '
          + 'before the de: it is unstressed and it belongs to the phrase in front of it, not to the noun behind. '
          + 'Record the contrast pair in ONE take: « Le chat est sur la boîte. » immediately followed by « Le '
          + 'chat est à côté de la boîte. » The frame is identical and the learner has to hear where the extra '
          + 'word sits. '
          + 'NEVER RECORD A PREPOSITION IN ISOLATION anywhere in this lesson. They are unstressed function words '
          + 'that only exist attached to a noun, and an isolated clip gives them a stress they never carry.',
        clipIds: [
          'à côté de la boîte', 'près de la boîte', 'loin de la boîte', 'en face de la boîte',
          'Le chat est à côté de la boîte.', 'Le chat est près de la boîte.',
          'Le chat est loin de la boîte.', 'Le chat est en face de la boîte.',
          'sur-vs-a-cote-pair',
        ],
      },
      {
        id: 'rec-a1-21-contraction',
        desc:
          'THE FOUR À ROWS IN ONE TAKE, THEN THE FOUR DE ROWS IN ONE TAKE. « Je suis au bureau. Je suis aux '
          + 'toilettes. Je suis à la maison. Je suis à l\'école. » The learner has to hear that the first two are '
          + 'one word and the last two are two words, and that au and aux are the SAME SOUND. Say so by reading '
          + 'them identically: /o/ both times, with nothing on the x. The difference is written only, and a '
          + 'reader who sounds the x of aux invents a distinction French does not have. '
          + 'Then « à côté du lit, près des arbres, à côté de la porte, à côté de l\'arbre », same instruction: du '
          + 'is /dy/ and des is /de/, and the last two keep de as its own unstressed word.',
        clipIds: [
          'Je suis au bureau.', 'Je suis aux toilettes.', 'Je suis à la maison.', "Je suis à l'école.",
          'a-contraction-run', 'du', 'des', 'de-contraction-run',
        ],
      },
      {
        id: 'rec-a1-21-a-and-a',
        desc:
          'À AND A ADJACENT, IN ONE TAKE, AND STATED AS IDENTICAL. « il a » immediately followed by « à la '
          + 'maison », one voice, no gap. They ARE homophones and hearing them from one voice back to back is '
          + 'the only way to prove it to a learner who has been straining to hear a difference. DO NOT '
          + 'DIFFERENTIATE THEM IN ANY WAY. If the reader cannot resist marking the preposition, record the '
          + 'vowel once and use the same audio for both: that is a more truthful clip than a performed '
          + 'difference, and a learner who hears an invented distinction will spend a year listening for it. '
          + 'Then « il a un chat » followed by « il est à Paris », which is the pair that shows what actually '
          + 'separates them: a thing after a, a place after à. '
          + 'Same instruction again for « sur la table » and « je suis sûr », which are close enough that context '
          + 'does the work.',
        clipIds: [
          'il a', 'à', 'a-and-a-identical',
          'il a un chat', 'il est à Paris',
          'sur la table', 'je suis sûr',
        ],
      },
      {
        id: 'rec-a1-21-du',
        desc:
          'THE TWO DU, ADJACENT, IN ONE TAKE, READ IDENTICALLY. « à côté du lit » immediately followed by « je '
          + 'bois du café ». These are the same two letters doing two different jobs and they are pronounced '
          + 'exactly the same way, /dy/. The learner met the second one in the partitive lesson and this lesson '
          + 'names the first. Read them with no difference at all, because there is none: the separation is '
          + 'grammatical and contextual, never acoustic. '
          + 'Then « près des arbres » followed by « des amis », the same instruction for the des collision. Note '
          + 'that des arbres carries a liaison z onto the vowel and des amis does too, so both are /de.z/ and '
          + 'the parallel is exact.',
        clipIds: [
          'à côté du lit', 'je bois du café', 'du-collision-pair',
          'près des arbres', 'des amis', 'des-collision-pair',
        ],
      },
      {
        id: 'rec-a1-21-scene',
        desc:
          'THE SCENE\'S SPOKEN LINES, AT ORDINARY CONVERSATIONAL SPEED. Camille is putting her coat on and half '
          + 'out of the room; she is not delivering a lesson. « Les clés sont sous le journal. » MUST BE READ '
          + 'CASUALLY AND UNSTRESSED, because the whole scene depends on the learner mishearing it. A clear, '
          + 'careful reading destroys the beat. '
          + 'Her later line « Sous ! Sous le journal. Soulève-le. » is the opposite: louder, clearer, slightly '
          + 'impatient, the way anybody repeats themselves. The contrast between the two readings IS the scene.',
        clipIds: [
          'Les clés sont sous le journal.', 'Elles ne sont pas là.',
          'Sous ! Sous le journal. Soulève-le.',
        ],
      },
    ],
  },
};

/* ─── Handover ─────────────────────────────────────────────────────────────
 *
 * a1.13's handover at the foot of couleurs-lesson.ts is the model, and it is why
 * the last eight briefs could be written accurately.
 *
 * ── TO a1.22 "Pays & nationalités", WHICH ALREADY SHIPPED ──────────────────
 *
 * a1.22 LANDED WHILE THIS LESSON WAS BEING WRITTEN, at roughly 02:01 on
 * 2026-08-07, between this build's first probe and its corpus authoring. It is
 * in the seed as `a1.22.l1` v2, 28 sections, 55 itemIds, and it took the theme
 * `pays-et-nationalites`. There is NO id collision with a1.21: it authored
 * nothing in `prepositions-essentielles` and nothing in `mots-essentiels`.
 *
 * So this is a note to a lesson that exists rather than a request to one that
 * does not:
 *
 *   - a1.21 teaches NO `en` + country. Not one card, and a1-21-prepositions.
 *     test.ts asserts the absence, so a1.22 keeps that ground uncontested.
 *   - a1.21 DOES teach `à` + place-by-name (`à Paris`, `à la maison`,
 *     `au bureau`) and the full à-contraction. If a1.22 teaches `en France`
 *     against `au Portugal`, the `au` half is already taught here and can be
 *     named rather than re-introduced. The card to point at is s10-contract.
 *   - The `aux` form is taught here on `aux toilettes` and shown on
 *     `Les enfants jouent aux cartes.` If a1.22 uses `aux États-Unis`, that is
 *     the same rule with a country behind it.
 *
 * ── TO a1.26 "The House", WHICH DECLARES a1.21 AS ITS PREREQUISITE ─────────
 *
 * a1.26 is empty at seq 29 and declares `maison`. Rooms and furniture are the
 * natural nouns for spatial sentences and this lesson used them AS OBJECTS
 * without building a house-vocabulary act, exactly as the brief asks.
 *
 * The nouns a1.21 leaned on, all of them already published and none authored
 * here, so a1.26 can use any of them freely:
 *
 *     la boîte   le chat    le lit     la porte    la table
 *     le canapé  le bureau  le journal la maison   le jardin
 *     la cuisine le salon   la fenêtre l'étagère   l'armoire
 *
 * What a1.26 can rely on a learner having:
 *
 *   - The five simple prepositions and the four compound ones, with the de.
 *   - Both contraction tables, à and de, including the two rows that do nothing.
 *   - Two reference sheets wired from act 1: `sheet.a1.21.places` and
 *     `sheet.a1.21.contractions`. Link to these rather than restating them.
 *
 * What a1.26 should NOT assume:
 *
 *   - `au-dessus de` and `en dessous de` are NOT taught here. Both exist in the
 *     corpus (`fr.a1.prepositions-essentielles.051` and `.106` for `autour du`)
 *     and both were left out to keep the compound set at four.
 *   - `y` as a pronoun is A2 and appears nowhere.
 *   - No verb but être and avoir is a production target anywhere in a1.21.
 *
 * ── TO WHOEVER TOUCHES THE RESPELLINGS NEXT ────────────────────────────────
 *
 * a1.21 repairs four shipped rows and ONE OF THEM CANNOT BE DEFENDED BY THE
 * SHARED CHECKER. `hasPlainNasalFor('entre', 'AHNTR')` returns false, and so
 * does the same call on the repair. The checker returns the identical answer for
 * the broken form and the fix, because `entre`'s nasal closes word-internally
 * and the checker's test needs the n to end a token.
 *
 * a1-21-prepositions.test.ts therefore asserts `${ENTRE_REPAIR.now}` BY NAME as
 * well as calling the shared checker. If you "fix" that row and the suite stays
 * green, read the assertion before believing it.                              */

export const HANDOVER = {
  toA122: `${Cap(unitRef('a1.22'))} shipped mid-build. No id collision. ${Cap(unitRef('a1.21'))} teaches no en + country and asserts the absence; it does teach à + place and the full à-contraction, so au/aux can be named rather than re-introduced.`,
  toA126: 'Rooms and furniture used as objects only, no house-vocabulary act. Two reference sheets are wired and should be linked rather than restated. au-dessus de and en dessous de are deliberately NOT taught.',
  respellings: `entre is repaired to ${ENTRE_REPAIR.now} and the shared checker cannot see the fault; the test asserts it by name.`,
};
