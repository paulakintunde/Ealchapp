// a1.09.l1 "Les mois de l'année", the mission journey.
//
// The corpus findings that changed this build are in the header of
// mois-corpus.ts and are not repeated here. In one line: the brief was written
// against a hole that had already been filled, and its corpus section was
// measured against seed.json rather than Postgres, so a1.08 ships, all twelve
// months already exist as headwords, `jours-et-mois` already holds them, and
// février, octobre and décembre are not thin.
//
// ── The handover from a1.08, which is the reason this lesson opens fast ────
//
// The brief says a1.08 does not exist and tells this lesson to teach the
// lowercase rule and the no-preposition instinct itself, warning: "you must not
// silently teach as if a1.08 had happened. Do not write 'you already know the
// days are lowercase'. They do not."
//
// They do. a1.08.l1 is published at v7 with 24 sections and unit a1.08 links
// it. So this lesson DOES build on it, and the two rules land in opposite
// directions, which is the most useful thing about the pairing:
//
//   LOWERCASE TRANSFERS EXACTLY. a1.08 taught that days take a small letter and
//   months take one for the same reason. This lesson names it as a rule the
//   learner already has (s13, and the `lowercase` term) and spends one trap
//   card on it rather than a mission.
//
//   THE PREPOSITION RULE DOES NOT TRANSFER, AND THAT IS THE TRAP. a1.08's rule
//   is that a day takes nothing in front of it: « lundi », never « sur lundi ».
//   A learner who carries that across produces « janvier » for "in January".
//   Months are exactly where that rule stops. s07 says so out loud, by name,
//   because a contradiction a learner discovers on their own is a contradiction
//   they conclude the language is arbitrary about.
//
// If a1.08 is ever rolled back, the two places that assume it are s07-en's
// opening card and the `lowercase` term. Both would need a sentence added, and
// neither would break.
//
// ── The teaching problem, which is two frames long ─────────────────────────
//
// The canDo has two clauses and, unlike a1.08's, both are real:
//
//     "Can name the months"     twelve words, no pattern. THREE missions.
//     "and give a date"         the lesson. TWELVE missions.
//
// Twelve names is memorisation and no reframe helps. The reason the unit exists
// is that French attaches a month to a sentence one way and a date another way,
// and English uses the same word for both without noticing:
//
//     en janvier          in January                the month alone
//     le douze mars       on the twelfth of March   a day inside a month
//     le premier janvier  on the first of January   the one ordinal
//
// The weighting follows: three missions on the twelve names, and the rest on
// the two frames, the four written habits English hands over, and the four
// sounds. A lesson that spent six missions drilling janvier to décembre would
// have misread which half of the canDo is difficult.
//
// ── Why the two errors point in opposite directions ───────────────────────
//
// a1.08's rule had one error (the missing article) and one over-correction. So
// does this one, but here the two are symmetrical and equally common, which is
// why the reframe names BOTH halves rather than forbidding one:
//
//     « en douze mars »   reaching for the month frame with a day in it
//     « le janvier »      reaching for the date frame with no day in it
//
// A learner told only "use le for dates" produces the second within a week.
// Every drill in this lesson sorts in both directions for that reason, and the
// quiz tests both.
//
// ── What is deliberately left to its neighbours ───────────────────────────
//
//   SEASONS are a1.10. `en été`, `en hiver`, `en automne` and the irregular
//   `au printemps` are a genuine trap and they are not this lesson's. They are
//   ONE TAP AWAY in this lesson's own bound theme (fr.sons.jours-et-mois.120
//   through .123) and the pull is real, because a month implies a season. Not
//   one is taught, named on a card, or released by a tranche. Two corpus
//   sentences that would have been useful (.130 « En hiver, les jours sont
//   courts, surtout en décembre » and .140 « En été, il fait chaud en juillet »)
//   were rejected for carrying a season FRAME, not merely a season word.
//
//   THE CLOCK is a1.12, whose vocabulary is also in this theme at .047-.084.
//   No hour is taught and no time is given in figures on any surface.
//
//   THE DAYS are a1.08's and it has them. A day inside a full date is allowed
//   and appears once, in the reading passage, because a French date genuinely
//   carries one. No day name is taught, drilled or released.
//
//   YEARS are a1.28's reading problem. « en 2026 » appears once, in the reading
//   passage, as exposure. No mission and no quiz question asks for one.
//
//   THE PASSÉ COMPOSÉ is recognition-only from a1.07. « en avril dernier »
//   pulls toward it. Past references are fixed phrases the learner reads.
//
// ── The verb problem, inherited from a1.08 and handled the same way ───────
//
// There is no regular-verb unit anywhere in A1: the learner has être (a1.06)
// and avoir (a1.07) and will have only those for the rest of the band. Every
// one of the twelve authored rows, every card the learner is asked to say,
// every dictée target and every speak item is built on être or avoir. The
// borrowed corpus sentences carrying `se déroule`, `a lieu` and `commémore` are
// READ ONLY, in a words deck that is tapped for audio and never scored by the
// mic, which is a1.08's chunk allowance and its precedent.
//
// ── Layout decisions, each of which is a bug someone else already shipped ──
//
//   `commonErrors` carries `swipe: true, size: 'lg'`. Without `swipe`,
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
//   `text.split(/(?<=[.!?»])\s+/)`, so an authored newline is consumed as
//   whitespace and silently discarded.
//
//   `tapTable` is NOT in ownsLayout(), so s08-both, s12-premier and s15's
//   neighbours all render inside a SCROLLING page. s08-both is the one the brief
//   calls "the single most important layout decision in the lesson": nine rows,
//   three columns, every cell three words or fewer, with the teaching in the
//   detail modal, which is a card and can hold prose. Walked on a device.
//
//   `size` is not decoration. ownsLayout() ignores it; density.logic.ts reads
//   `xl` as a 12-word cap on EVERY string in the section. s04-twelve is the only
//   xl section here and every card in it is one French word with a short gloss,
//   which is what makes xl correct there and fatal anywhere a date sentence
//   appears.
//
//   A `groupDrill` control page carries `items: []` explicitly, and no `size`.
//
//   NO CALENDAR GRID. The brief is right that there is no section type that
//   draws one and that an authored field no component reads renders nothing.
//   The year is shown as a `cardDeck` and a grouped `groupDrill`, both of which
//   exist and are known to render.
//
//   NO U+203F. « en août » is a liaison candidate and the tie renders as a low
//   underscore on a Pixel 6. The link is described in words on s11's elision
//   card instead, and the batch greps for the character.
//
// ── The dictée follows a1.08's finding rather than repeating its shape ─────
//
// a1.08 discovered that `le` is in WORD_DECOY_POOL, so a word-mode dictée on a
// BARE day sentence hands the learner a `le` tile they must decide not to
// place. The same pool serves this lesson better still, because BOTH of this
// lesson's errors are visible in it: an `en`-frame target offers `le` as a tile
// to refuse, and the pool also carries the small words a learner wrongly
// inserts into a date. Every target below is asserted through the real
// `dicteeMode` and `wordDecoys` in the batch, the merge and the test rather
// than against a restated threshold.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { MOIS_TERMS, REFRAME } from './mois-terms.ts';
import {
  BORROWED_IDS, CHUNK_IDS, CONTRAST_PAIRS, FRAME_IDS, IMPORTED_IDS, IN_ENGLISH, MOIS_IDS,
  MONTH_IDS, PAIR_DATE_FRAMES, PAIR_MONTHS, PAIR_MONTH_FRAMES, REUSED_IDS, THE_TWELVE,
  enOf, frOf, monthsIn, sub,
} from './mois-corpus.ts';

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

/** The twelve month words. The only vocabulary in the lesson, and not one of
 *  them is authored: all twelve were already published. */
const MONTHS = MONTH_IDS;

/** The frame a month sits in: next month, last month, every month, once a
 *  month. Four, and every one is gender-safe (see WITHDRAWN_IDS). */
const FRAME = FRAME_IDS;

/** The nine contrast pairs, flattened in pair order so a tranche releases both
 *  halves together. Releasing one half is worse than releasing neither: a
 *  sentence with a date frame and nothing to compare it against reads as the
 *  only way to say it. */
const PAIRS = CONTRAST_PAIRS.flat();

/** The months in the wild, `en` frame. One each for the four months with no
 *  authored pair, so every one of the twelve is on a screen inside a real
 *  sentence and not only on a vocabulary card. */
const WILD_EN = [
  'fr.a1.jours-et-mois.139',        // Le carnaval de Nice se déroule en février.   chunk
  'fr.a1.adjectifs-essentiels.094', // Les journées sont chaudes en juillet.        être
  'fr.a1.jours-et-mois.089',        // Le concours a lieu tous les ans en novembre. avoir
  'fr.a1.jours-et-mois.079',        // En décembre, les vitrines sont magnifiques.  être
];

/** The months in the wild, date frame. Five, and between them they carry the
 *  ordinal, four different cardinals, and a date inside a longer sentence. */
const WILD_LE = [
  'fr.a1.nombres.097',       // Le magasin est fermé le premier janvier.
  'fr.a1.jours-et-mois.129', // La Saint-Valentin est célébrée le quatorze février.
  'fr.a1.jours-et-mois.051', // Le premier avril, on fait des blagues.          chunk
  'fr.a1.jours-et-mois.142', // Chaque année, le feu d'artifice a lieu le quatorze juillet.
  'fr.a1.jours-et-mois.136', // En France, le onze novembre commémore ...       chunk
];

/** le mois de, and the elision that comes with it. Two, which is the size the
 *  brief asks for: "a two-line callback rather than a new rule". */
const MOIS_DE = [
  'fr.a1.jours-et-mois.207', // Le mois de février est le plus court de l'année.
  'fr.sons.nasales.051',     // Pendant le mois d'août, nous campons à la campagne.  chunk
];

const ITEM_IDS = [
  ...new Set([...MONTHS, ...FRAME, ...PAIRS, ...WILD_EN, ...WILD_LE, ...MOIS_DE]),
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag.
 *
 *  Verified against POSTGRES, not the seed, on 2026-08-06, and it is the same
 *  constraint a1.08 found: of the published a1 rows in this theme, the borrowed
 *  month sentences are almost all `dictation`-only and carry no voiceflash. So
 *  the spoken mission is the twelve months, the four frame phrases and the
 *  twelve authored pair halves, and none of the borrowed sentences. That is a
 *  real constraint discovered in the database rather than a design choice, and
 *  it is in the report. */
const SPEAK_IDS = [
  ...MONTHS,
  ...FRAME,
  ...MOIS_IDS.filter((id) => !CHUNK_IDS.includes(id)),
];

/** The dictée, and every target was chosen by MEASUREMENT rather than taste.
 *
 *  Both of this lesson's errors are visible in the word-mode decoy bank: `le`
 *  is in WORD_DECOY_POOL, so an `en`-frame target hands the learner a `le` tile
 *  they must decide NOT to place, which is this lesson's own decision in the one
 *  place it is visible. The paired date targets ask the opposite question.
 *
 *  Every id below carries the `dictation` drill and every mode is asserted
 *  through the real `dicteeMode` rather than a restated length. */
const DICTATION_IDS = [
  'fr.a1.jours-et-mois.249', // Nous sommes en mars.
  'fr.a1.jours-et-mois.251', // Mon vol est en juin.
  'fr.a1.jours-et-mois.252', // Mon vol est le douze juin.
  'fr.a1.jours-et-mois.258', // J'ai un examen en décembre.
  'fr.a1.jours-et-mois.259', // J'ai un examen le douze décembre.
];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is being misread as a person rather than being
 * misunderstood, and a date has that failure built into it: months exist so
 * people can fix a day, and this lesson's rule is the difference between an
 * arrangement and a vague intention.
 *
 * Karim asks when the learner is arriving. The learner knows the day: the
 * twelfth. They say « Mon vol est en juin », which is a true sentence and not
 * an answer to the question. Karim cannot book a day off against a month, so he
 * books nothing, and that is the cost: nobody is corrected, nobody is annoyed,
 * and there is no one at the airport.
 *
 * The choice beat is those two sentences, which are the lesson's own authored
 * pair, so the beat, the table, the drill and the dictée are all the same two
 * rows. juin is deliberate: it is also the month that collides with juillet,
 * which act 2 works separately.                                              */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A Tuesday night, and you are finally booking the trip you have been talking about since winter.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'Karim has a spare room in Marseille and has offered it twice. You have the flight open in another tab.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Karim',
    fr: 'Tu arrives quand ?',
    en: 'When do you get in?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-09-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'The flight is on the twelfth. You know the day. What goes back?',
    options: [
      {
        fr: frOf('fr.a1.jours-et-mois.251'),
        respell: sub('en juin'),
        en: 'the one that names the month',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: frOf('fr.a1.jours-et-mois.252'),
        respell: sub('le douze juin'),
        en: 'the one that names the day',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes, and that is a date he can write down. Watch what the other one does to his week.',
      breaks: 'Every word in that is correct French. Watch what happens next anyway.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: frOf('fr.a1.jours-et-mois.251'),
    en: '(My flight is in June)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Karim',
    fr: 'Ah, super ! Dis-moi quand tu sais.',
    en: 'Ah, great! Tell me when you know.',
    stage: 'He does not book the day off. There is nothing in that message he could book it against.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-09-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'You told him a month',
    // 37 words. The shipped scene breaks run 24 to 40 here.
    body: 'He asked which day and you answered which month. Both sentences are correct French and only one of them is a date, so he read yours as not booked yet and waited. Nothing was mispronounced and nothing got corrected.',
    wrong: {
      fr: frOf('fr.a1.jours-et-mois.251'),
      ipa: '/mɔ̃ vɔl ɛ ɑ̃ ʒɥɛ̃/',
      respell: sub('en juin'),
      en: 'My flight is in June, somewhere',
    },
    right: {
      fr: frOf('fr.a1.jours-et-mois.252'),
      ipa: '/mɔ̃ vɔl ɛ lə duz ʒɥɛ̃/',
      respell: sub('le douze juin'),
      en: 'My flight is on the twelfth, which he can meet',
    },
    coach: `${REFRAME} Two extra syllables, and one of them is the whole arrangement.`,
    // Audio-first: the ear answers before the eye can. `autoplay` is NOT set. It
    // is declared in schema.ts and implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-09-pairs' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'Second try',
    fr: frOf('fr.a1.jours-et-mois.252'),
    en: 'My flight is on the twelfth of June.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Karim',
    fr: 'Parfait, je pose ma journée. Je serai à l\'aéroport.',
    en: 'Perfect, I am taking the day off. I will be at the airport.',
    stage: 'He has already put it in his calendar.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'One small word separated a month from a day, and it works the same way on all twelve.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the month you meant ───────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Flight In June',
    frSub: 'Le vol de juin',
    render: 'screens',
    layer: 'core',
    terms: ['monthFrame', 'dateFrame'],
    say: {
      text: 'One question, one answer, and nothing you said was wrong. Watch which word was missing.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A kitchen table, a laptop, and a flight open in another tab',
      city: 'Marseille',
      time: 'Tuesday, late',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    // Referenced, never retyped, so this appearance cannot drift out of
    // agreement with the seven others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} That is the whole of the next twenty-five minutes.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the last two are the same rule read in opposite directions.',
    goals: [
      { t: 'Name all twelve months', s: 'In order, lowercase, and with the four that are genuinely hard to say sorted out from the eight that are not.' },
      { t: 'Say which month something is in', s: 'One small word in front, and it is not the one the days lesson taught you.' },
      { t: 'Give a full date', s: 'The day, the month, and the article that cannot be dropped, in the order French puts them.' },
      { t: 'Write a date the way French writes it', s: 'No capital letter, no extra word inside it, and the one day of the month that counts differently.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-frames',
    title: 'Two Ways To Answer When',
    frSub: 'Deux façons de dire quand',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['monthFrame', 'dateFrame'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-09-pairs' },
    say: 'Four cards before any of the twelve words, because these two frames decide how you use all of them.',
    cards: [
      {
        label: 'The question',
        head: 'When is it?',
        fr: 'Tu arrives quand ?',
        sub: 'When do you get in?',
        body: 'There are two true answers to this and they are not interchangeable. One names a month. The other names a day inside one. French marks the difference with the small word in front, and English does not mark it at all.',
      },
      {
        label: 'The month',
        head: 'en, and nothing else',
        fr: frOf('fr.a1.jours-et-mois.251'),
        sub: `${sub('en juin')} · in June`,
        body: 'En plus the bare month. No article, no number, nothing added. This is what you say when the day is not known, not decided, or not the point.',
      },
      {
        label: 'The day inside it',
        head: 'le, then the number, then the month',
        fr: frOf('fr.a1.jours-et-mois.252'),
        sub: `${sub('le douze juin')} · on the twelfth of June`,
        body: `${REFRAME} The le is not optional. It is the only thing marking this as one day rather than the whole month, which is what the opening scene turned on.`,
      },
      {
        label: 'What is actually hard',
        head: 'Not the twelve',
        body: 'Twelve short words is an afternoon and there is no pattern to teach, so they get three missions. Choosing between these two frames is what will still be catching you in a year, and it gets the rest.',
      },
    ],
  },

  /* ── Act 2: twelve words ──────────────────────────────────────────────── */

  {
    // The only xl section in the lesson, and correct here for the reason xl
    // exists: every card is ONE French word with a short gloss.
    // density.logic.ts caps EVERY string in an xl section at 12 words, which is
    // why the teaching lives in the groups below and this is a hero deck.
    type: 'cardDeck',
    id: 's04-twelve',
    title: 'Twelve, One At A Time',
    frSub: 'Un mois par écran',
    hint: 'Swipe. Say each one out loud before you move on.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-09-twelve' },
    say: 'Twelve screens, one month each. Say it out loud before you swipe.',
    cards: THE_TWELVE.map((m, i) => ({
      label: `${i + 1} of 12`,
      fr: m,
      sub: sub(m),
      body: `${IN_ENGLISH[m]}.`,
    })),
  },

  {
    type: 'groupDrill',
    id: 's05-groups',
    title: 'Four Groups, Not Twelve Rows',
    frSub: 'Quatre groupes',
    layer: 'core',
    terms: ['lowercase'],
    say: 'The twelve, split four ways. Every group is a real group, so the split is worth remembering.',
    groups: [
      {
        // The pair that actually collides. First, because it is the one worth
        // the learner's attention while they still have some.
        label: 'The two that collide',
        items: ['juin', 'juillet'].map((m) => ({
          fr: m,
          itemId: MONTHS[THE_TWELVE.indexOf(m as (typeof THE_TWELVE)[number])],
          respell: sub(m),
          en: IN_ENGLISH[m as (typeof THE_TWELVE)[number]],
        })),
        check: {
          q: 'Both of these open the same way. Which one is June?',
          opts: ['juillet', 'juin', 'they are the same month', 'neither, June is jouin'],
          correct: 1,
          why: 'juin is one syllable and juillet is two. They open identically, so the ending is the whole difference, and a holiday booked on the wrong one is a month out.',
        },
      },
      {
        label: 'Three that end the same, and one that does not',
        items: ['septembre', 'octobre', 'novembre', 'décembre'].map((m) => ({
          fr: m,
          itemId: MONTHS[THE_TWELVE.indexOf(m as (typeof THE_TWELVE)[number])],
          respell: sub(m),
          en: IN_ENGLISH[m as (typeof THE_TWELVE)[number]],
        })),
        check: {
          q: 'Three of these four rhyme. Which one does not?',
          opts: ['septembre', 'novembre', 'octobre', 'décembre'],
          correct: 2,
          why: 'octobre. The other three all end -embre and sound identical from the middle onward, and octobre sits between two of them without rhyming, which is exactly the shape that gets it misfiled.',
        },
      },
      {
        label: 'Two that sound their last letter',
        items: ['mars', 'avril'].map((m) => ({
          fr: m,
          itemId: MONTHS[THE_TWELVE.indexOf(m as (typeof THE_TWELVE)[number])],
          respell: sub(m),
          en: IN_ENGLISH[m as (typeof THE_TWELVE)[number]],
        })),
        check: {
          q: 'French usually leaves a final consonant silent. Which of these breaks that?',
          opts: ['only mars', 'only avril', 'both of them', 'neither of them'],
          correct: 2,
          why: 'Both. Mars sounds its s and avril sounds its l, so the silent-final-consonant habit is wrong on both. The silent letters lesson already filed avril as a CaReFuL L you do pronounce.',
        },
      },
      {
        label: 'The four that give no trouble',
        items: ['janvier', 'février', 'mai', 'août'].map((m) => ({
          fr: m,
          itemId: MONTHS[THE_TWELVE.indexOf(m as (typeof THE_TWELVE)[number])],
          respell: sub(m),
          en: IN_ENGLISH[m as (typeof THE_TWELVE)[number]],
        })),
        check: {
          q: 'Which of these four is the shortest to say?',
          opts: ['janvier', 'février', 'août', 'they are all three syllables'],
          correct: 2,
          why: 'août is one short sound, close to the English word oot. It is the shortest month name in French and the one learners most often stretch into two syllables that are not there.',
        },
      },
    ],
  },

  {
    type: 'listening',
    id: 's06-ear',
    title: 'Two Pairs That Collide',
    frSub: "À l'oreille",
    layer: 'core',
    questionsInModal: true,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-09-twelve' },
    say: 'Two clusters here are genuinely hard at speed. Slow the audio down before you answer.',
    lines: [
      { fr: 'juin', en: 'June' },
      { fr: 'juillet', en: 'July' },
      { fr: 'septembre', en: 'September' },
      { fr: 'novembre', en: 'November' },
      { fr: 'décembre', en: 'December' },
      { fr: 'octobre', en: 'October' },
    ],
    questions: [
      {
        q: 'Which two months are hardest to separate at conversational speed?',
        opts: ['mars and mai', 'juin and juillet', 'avril and août', 'none of them collide'],
        correct: 1,
        why: 'Both open on the same sound and the ending is the whole difference. They are also next to each other in the year, so a booking made on the wrong one is a month out rather than obviously absurd.',
      },
      {
        q: 'Three of the last four lines end the same way. What does that ending sound like?',
        opts: ['a clear em, then a separate ruh', 'one nasal, then a quick br with no vowel', 'the same as the English -ember', 'it is silent'],
        correct: 1,
        why: 'The vowel is nasal and the -bre behind it is one quick sound with no vowel of its own. Adding a vowel there is what makes septembre come out with four syllables instead of three.',
      },
      {
        q: 'Line six sits between two of the others in the year. Does it rhyme with them?',
        opts: ['Yes, all four rhyme', 'No, octobre is the odd one out', 'Only with novembre', 'Only with septembre'],
        correct: 1,
        why: 'octobre ends -obre rather than -embre and carries no nasal. Being the only one of the four that does not rhyme, while sitting in the middle of them, is what makes it easy to misfile.',
      },
    ],
  },

  /* ── Act 3: en for a month, le for a date ─────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's07-en',
    title: 'The Word The Days Did Not Want',
    frSub: 'En + le mois',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['monthFrame'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-09-pairs' },
    say: 'Read this one properly. It is the place the last lesson\'s rule stops holding.',
    cards: [
      {
        // The handover from a1.08, by name. See the header: this is the one
        // place the previous lesson's rule actively misleads, and a
        // contradiction a learner finds alone is a language they decide is
        // arbitrary.
        label: 'This is new',
        head: 'A day took nothing. A month takes en.',
        // The day half of this contrast is stated in ENGLISH on purpose. It is
        // the one card in the lesson that would naturally print a French day
        // name, and a day name on a card deck is a1.08's content appearing on a
        // production surface, which the batch refuses. The teaching survives
        // without it: what the learner needs is the shape of the rule, and the
        // French they are being given here is the month frame.
        fr: 'en janvier',
        sub: `${sub('en janvier')} · in January`,
        body: 'The days lesson taught that a day needs no word in front of it, and that was true of days. Months are where it stops. A month always takes en, and leaving it out is the error that rule hands you.',
      },
      {
        label: 'The frame',
        head: 'en, then the bare month',
        fr: frOf('fr.a1.jours-et-mois.046'),
        sub: `${sub('en janvier')} · in January`,
        body: 'Nothing else goes in. No article in front of the month, no number, and no second small word. En janvier, en juin, en octobre, all twelve the same way with no exceptions.',
      },
      {
        label: 'What it means',
        head: 'The month, and nothing smaller',
        fr: frOf('fr.a1.jours-et-mois.255'),
        sub: `${sub('en juin')} · a whole month`,
        body: 'En names the month and stops. Which day is either not known, not decided, or not worth saying. That is exactly right for a birthday month or a holiday, and exactly wrong for a flight.',
      },
      {
        label: 'The over-correction',
        head: 'Never le janvier',
        fr: 'en janvier',
        sub: 'not le janvier',
        body: `${REFRAME} Once the date frame lands, the pull is to put le in front of everything. A month on its own never takes one, and le janvier is not a thing anybody says.`,
      },
    ],
  },

  {
    // THE mission. Both frames on ONE screen, in two columns, so the learner
    // watches the frame change and the meaning narrow rather than meeting the
    // two sides four screens apart. The brief calls this the single most
    // important layout decision in the lesson and it is right.
    //
    // tapTable is not in ownsLayout(), so this scrolls. Nine rows, three
    // columns, every cell three words or fewer. Walked on a device.
    type: 'tapTable',
    id: 's08-both',
    title: 'The Month, Or A Day In It',
    frSub: 'En juin ou le douze juin',
    layer: 'core',
    terms: ['monthFrame', 'dateFrame'],
    sheetId: 'sheet.a1.09.frames',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-09-pairs' },
    say: `${REFRAME} Left column is the month, right column is one day in it. Tap either side to hear the pair.`,
    cols: ['The month', 'One day in it', 'Month'],
    rows: CONTRAST_PAIRS.map(([monthId, dateId], i) => {
      // The frames come from PAIR_MONTH_FRAMES and PAIR_DATE_FRAMES, which are
      // declared in the corpus and asserted to be substrings of these very
      // sentences. Pulling them out with a regex here would be a second
      // definition of "the frame", and it would fail by rendering a shorter
      // match rather than by failing at all.
      const monthFrame = PAIR_MONTH_FRAMES[i];
      const dateFrame = PAIR_DATE_FRAMES[i];
      return {
        cells: [monthFrame, dateFrame, PAIR_MONTHS[i]],
        say: `${monthFrame}, ${dateFrame}`,
        detail: {
          title: `${monthFrame} · ${dateFrame}`,
          body: `${frOf(monthId)} names the month. ${frOf(dateId)} names one day inside it. Nothing else in the two moved, so the frame carries the whole difference.`,
          say: `${frOf(monthId)} ${frOf(dateId)}`,
        },
      };
    }),
  },

  {
    type: 'groupDrill',
    id: 's09-sort',
    title: 'Both Frames, Said Out Loud',
    frSub: 'Les deux cadres',
    layer: 'core',
    terms: ['monthFrame', 'dateFrame'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-09-pairs' },
    // Two groups plus the wild set, words only, no check. The check is s10, a
    // page of its own, which is the pattern sons.05, sons.06, a1.03, a1.07,
    // a1.08 and a1.11 all use. No size is set here, so this is the plain
    // stacked branch.
    say: 'Read a pair across rather than down, and say both halves before you move on.',
    groups: [
      {
        label: 'The month: en',
        items: [
          ...CONTRAST_PAIRS.map(([monthId]) => monthId),
          ...WILD_EN,
        ].map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
      },
      {
        label: 'One day in it: le',
        items: [
          ...CONTRAST_PAIRS.map(([, dateId]) => dateId),
          ...WILD_LE,
        ].map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
      },
      {
        // The third frame, which is neither of the two and is worth naming once
        // rather than leaving to be met as a contradiction. Both rows are here
        // because both are shown nowhere else.
        label: 'A third way: le mois de',
        items: MOIS_DE.map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's10-check',
    title: 'A Month, Or A Day?',
    frSub: 'Contrôle',
    layer: 'core',
    terms: ['dateFrame'],
    // A control page: one group, one question, no words. `items: []` is set
    // EXPLICITLY, and no `size`. GroupDrillView reads this shape as
    // `controlOnly` and holds the pager until the learner answers, which is the
    // whole reason a check is worth a page of its own: a check you can swipe
    // past was never a check.
    say: 'One question, and it is the one the opening scene turned on.',
    groups: [
      {
        label: 'One question, then on',
        items: [],
        check: {
          q: 'A friend asks which day your flight lands. You know: the twelfth of June. What do you answer?',
          opts: [
            'Mon vol est en juin.',
            'Mon vol est le douze juin.',
            'Mon vol est en douze juin.',
            'Mon vol est le juin douze.',
          ],
          correct: 1,
          why: 'He asked which day, so answer with a day. The first names the month and is true without being an answer, and the other two mix the two frames into something French does not use.',
        },
      },
    ],
  },

  /* ── Act 4: what English adds ─────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's11-date',
    title: 'The Shape Of A Date',
    frSub: 'La forme de la date',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['dateFrame', 'dateShape'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-09-dates' },
    say: 'Three parts, in this order, with nothing else in it. Four cards.',
    cards: [
      {
        label: 'The order',
        head: 'Number first, month second',
        fr: frOf('fr.a1.nombres.052'),
        sub: `${sub('le douze mars')} · March twelfth`,
        body: 'English says March twelfth and French says the twelve March, so the two change places. Reaching for the English order gives you mars douze, which is not a date in either language.',
      },
      {
        label: 'The article',
        head: 'le cannot be dropped',
        fr: frOf('fr.a1.jours-et-mois.259'),
        sub: `${sub('le douze')} · the twelfth`,
        body: 'English has no word here at all, so there is nothing to translate and the instinct is to leave it out. Without it there is no date, only a number sitting next to a month.',
      },
      {
        label: 'Nothing in between',
        head: 'Never le douze de mars',
        fr: 'le douze mars',
        sub: 'not le douze de mars',
        body: 'The number and the month sit straight against each other. Spanish and Portuguese both want a small word between them, so this one arrives with anybody who has either, and it survives because the sentence still parses.',
      },
      {
        label: 'The month, named',
        head: 'le mois de, and what happens before a vowel',
        fr: frOf('fr.sons.nasales.051'),
        sub: `${sub('le mois de mai')} · ${sub("le mois d'août")}`,
        body: 'To name the month itself rather than date something in it, use le mois de. Before a vowel the de loses its e, exactly as the elision lesson showed: le mois de mai, but le mois d\'août.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's12-premier',
    title: 'The First, And All The Rest',
    frSub: 'Le premier et les autres',
    layer: 'core',
    terms: ['firstOnly', 'dateShape'],
    sheetId: 'sheet.a1.09.date',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-09-dates' },
    say: 'One day of the month counts differently. Tap any row for why.',
    cols: ['English', 'French', 'Counting word'],
    rows: [
      {
        cells: ['the first', 'le premier', 'ordinal'],
        say: frOf('fr.a1.nombres.097'),
        detail: {
          title: 'le premier, the only one',
          body: `${REFRAME} And the first of the month is the single day that takes a first-second-third word rather than a plain number. Le premier janvier, le premier mai, le premier août.`,
          say: frOf('fr.a1.nombres.097'),
        },
      },
      {
        cells: ['the second', 'le deux', 'plain number'],
        say: `${sub('le deux')}`,
        detail: {
          title: 'From the second onward, just count',
          body: 'Le deux, not le deuxième. From here to the end of the month you use the same word you would use for the number on its own, which means you already have all thirty of them.',
          say: 'le deux, le trois, le quatre',
        },
      },
      {
        cells: ['the twelfth', 'le douze', 'plain number'],
        say: frOf('fr.a1.jours-et-mois.252'),
        detail: {
          title: 'The one the scene turned on',
          body: 'Le douze, not le douzième. English puts an ordinal ending on every day of the month and French puts one on exactly one, so the English habit is wrong thirty times out of thirty-one.',
          say: frOf('fr.a1.jours-et-mois.252'),
        },
      },
      {
        cells: ['the fourteenth', 'le quatorze', 'plain number'],
        say: frOf('fr.a1.jours-et-mois.142'),
        detail: {
          title: 'The date everybody knows',
          body: 'Le quatorze juillet is the national holiday, and it is a plain fourteen. Hearing it said often is the fastest way to stop reaching for an ordinal ending on the other thirty days.',
          say: frOf('fr.a1.jours-et-mois.142'),
        },
      },
      {
        cells: ['the thirty-first', 'le trente et un', 'plain number'],
        say: `${sub('le trente et un')}`,
        detail: {
          title: 'The last day, and still a plain number',
          body: 'Le trente et un décembre. The numbers from twenty-one to a hundred are the lesson you did four units ago, so every day of every month is already in your hands.',
          say: 'le trente et un décembre',
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
    title: 'Five Traps',
    frSub: 'Cinq pièges',
    layer: 'core',
    terms: ['dateShape', 'firstOnly', 'lowercase'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-09-traps' },
    say: `${REFRAME} Five sentences an English speaker produces in their first month, one per screen.`,
    errors: [
      {
        wrong: 'Saying « Mon vol est en douze juin ».',
        right: 'Saying « Mon vol est le douze juin ».',
        why: 'En is the frame for a whole month and it cannot hold a day. Putting a number inside it produces something no French speaker says, and the listener has to guess whether you meant the month or the day.',
      },
      {
        wrong: 'Saying « Le concert est le juillet ».',
        right: 'Saying « Le concert est en juillet ».',
        why: 'The over-correction, and it arrives the week after the date rule lands. A month on its own never takes an article. Le juillet is not a thing, so this one stops the sentence rather than shifting it.',
      },
      {
        wrong: 'Writing « Je pars en Juillet ».',
        right: 'Writing « Je pars en juillet ».',
        why: 'Months are ordinary words in French and take a capital only at the start of a sentence. You met this on the days already and it holds here unchanged. Nobody will hear it and everybody will read it.',
      },
      {
        wrong: 'Saying « le douze de mars ».',
        right: 'Saying « le douze mars ».',
        why: 'The number and the month sit straight against each other with nothing between. Spanish and Portuguese both want that small word, so this arrives with anybody who has either, and the sentence still parses, which is why it survives.',
      },
      {
        wrong: 'Saying « le un janvier » for the first of January.',
        right: 'Saying « le premier janvier ».',
        why: 'The first of the month is the one day that takes premier rather than a counting number. Every other day is the plain number, so this is the single exception and it runs the opposite way to the English habit.',
      },
    ],
  },

  {
    type: 'reading',
    id: 's14-reading',
    title: 'The Notice In The Window',
    frSub: 'Le mot dans la vitrine',
    layer: 'core',
    terms: ['monthFrame', 'dateFrame', 'lowercase'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a
    // reading section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions. a1.01 shipped five entries down the other path.
    questionsInModal: true,
    say: 'Every month here is lowercase, and two of the notices say different things about the same shop.',
    // Paul's A1 rule, set on a1.01's passage: anything not inside « » is in
    // English. ONE BLOCK, NO LINE BREAKS. See the header.
    //
    // The full date « lundi le premier septembre » is NOT used: a French date
    // carrying a day writes it « lundi premier septembre », and teaching a day
    // name is a1.08's job. The one day that appears here is inside a quoted
    // notice and is never drilled.
    text:
      'The bakery on the corner has two notices taped inside the window, and they have been arguing with each other since June. '
      + 'The printed one is old, curled at the edges, and says what the shop does every year. '
      + '« Le magasin est fermé en août. » '
      + 'The handwritten one went up last week, in the same biro the baker uses for everything. '
      + '« Le magasin est fermé le premier août. » '
      + 'Read quickly they are the same sentence, and the difference between them is four weeks of somebody\'s bread. '
      + 'The printed one means the whole month, which is what a great many French shops do and why cities empty out. '
      + 'The handwritten one means one day, the first, because this year he has decided to stay open and take a single day instead. '
      + 'Underneath both, smaller, he has added the part his regulars actually came to read. '
      + '« On se voit lundi deux août. » '
      + 'Nobody needs telling which August.',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words (MAX_GLOSS_WORDS).
    // Longest match wins, WHICH MEANS AN ENTRY CAN BE SHADOWED OUT OF EXISTENCE:
    // a1.08 shipped « le mardi » and « mercredi » as entries that could never
    // underline anything, because every occurrence was already inside a longer
    // key. Checked here by running the real segmentSentence in the test rather
    // than by comparing matched text, which is the mistake that let a1.08's
    // shadowed entries pass its own test.
    //
    // « est fermé en août » and « est fermé le premier » are four words each and
    // do not overlap: the second stops before « août », so both fire.
    glossary: [
      { word: 'est fermé en août', en: 'is closed in August', note: 'The whole month. En plus the bare month, which is what a printed sign means.' },
      { word: 'est fermé le premier', en: 'is closed on the first', note: 'One day. The article and the number together make it a date rather than a month.' },
      { word: 'le magasin', en: 'the shop', note: 'Masculine, so le rather than la. Nothing to do with the date rule.' },
      { word: 'on se voit', en: 'see you', note: 'Read this as a whole phrase. The verb behind it is not one you have been given yet.' },
      { word: 'lundi deux août', en: 'Monday the second of August', note: 'A full date with a day in it. The day comes first and the number stays a plain two.' },
    ],
    questions: [
      { q: 'The two notices are a few words apart. What does that difference change?', a: 'How long the shop is shut. The printed one says en août, which is the whole month. The handwritten one says le premier août, which is one day, and this year he has decided to close for a single day instead of the usual four weeks.' },
      { q: 'Which of the two notices would you expect to come down first, and why?', a: 'The handwritten one. It is about a single day, so once the second of August has passed it says nothing. The printed one describes what the shop does every year and goes back up each summer.' },
      { q: 'The last line gives a full date. What order are its parts in?', a: 'The day name first, then the number, then the month: lundi deux août. The number sits straight against the month with nothing between them, and it is a plain two rather than a second.' },
    ],
  },

  /* ── Act 5: say it, spell it, use it ──────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's15-words',
    title: 'The Year, Banked',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['monthFrame', 'dateFrame', 'firstOnly'],
    sheetId: 'sheet.a1.09.months',
    say: 'Three decks. The twelve names, the words around them, and the two frames.',
    themes: [
      {
        title: 'the twelve',
        cards: THE_TWELVE.map((m) => ({ fr: m, sub: sub(m), en: IN_ENGLISH[m] })),
      },
      {
        title: 'the year around them',
        cards: [
          { fr: 'le mois', sub: sub('le mois'), en: 'the month' },
          { fr: "l'année", sub: sub("l'année"), en: 'the year' },
          { fr: 'la date', sub: sub('la date'), en: 'the date' },
          { fr: 'le mois prochain', sub: sub('le mois prochain'), en: 'next month' },
          { fr: 'le mois dernier', sub: sub('le mois dernier'), en: 'last month' },
          { fr: 'tous les mois', sub: sub('tous les mois'), en: 'every month' },
          { fr: 'une fois par mois', sub: sub('une fois par mois'), en: 'once a month' },
        ],
      },
      {
        title: 'the month, or a day in it',
        cards: [
          { fr: 'en janvier', sub: sub('en janvier'), en: 'in January, the month' },
          { fr: 'le premier janvier', sub: sub('le premier janvier'), en: 'on the first of January' },
          { fr: 'en juin', sub: sub('en juin'), en: 'in June, the month' },
          { fr: 'le douze juin', sub: sub('le douze juin'), en: 'on the twelfth of June' },
          { fr: 'le premier', sub: sub('le premier'), en: 'the first, the only ordinal' },
          { fr: 'le mois de mai', sub: sub('le mois de mai'), en: 'the month of May, named' },
          { fr: "le mois d'août", sub: sub("le mois d'août"), en: 'the month of August, elided' },
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
    say: 'English on the front. Say the French out loud, small word and all, before you flip.',
    cards: [
      ...THE_TWELVE.map((m) => ({ front: IN_ENGLISH[m], back: m, say: m })),
      { front: 'in January (the month)', back: 'en janvier', say: 'en janvier' },
      { front: 'on the first of January', back: 'le premier janvier', say: 'le premier janvier' },
      { front: 'in June (the month)', back: 'en juin', say: 'en juin' },
      { front: 'on the twelfth of June', back: 'le douze juin', say: 'le douze juin' },
      { front: 'My flight is in June.', back: frOf('fr.a1.jours-et-mois.251'), say: frOf('fr.a1.jours-et-mois.251') },
      { front: 'My flight is on the twelfth of June.', back: frOf('fr.a1.jours-et-mois.252'), say: frOf('fr.a1.jours-et-mois.252') },
      { front: 'Today is the twelfth of March.', back: frOf('fr.a1.nombres.052'), say: frOf('fr.a1.nombres.052') },
      { front: 'The shop is closed in August.', back: frOf('fr.a1.jours-et-mois.255'), say: frOf('fr.a1.jours-et-mois.255') },
      { front: 'The shop is closed on the first of August.', back: frOf('fr.a1.jours-et-mois.256'), say: frOf('fr.a1.jours-et-mois.256') },
      { front: 'the month of May', back: 'le mois de mai', say: 'le mois de mai' },
      { front: 'the month of August', back: "le mois d'août", say: "le mois d'août" },
      { front: 'next month', back: 'le mois prochain', say: 'le mois prochain' },
      { front: 'once a month', back: 'une fois par mois', say: 'une fois par mois' },
    ],
  },

  {
    type: 'dictation',
    id: 's17-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // Both of this lesson's errors are visible in the word-mode decoy pool. See
    // the header: `le` is in it, so an en-frame target hands the learner a le
    // tile they must decide NOT to place, and its paired date target asks the
    // opposite question about the same sentence.
    say: 'Five lines, in pairs. Two of them offer you a word you must decide not to use.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's18-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // The only practice mission in the lesson, deliberately. sons.06 ships two
    // doing the same job and it reads as a repeat. `practice.skill` is authored
    // and read by no component: PracticeVFView takes itemIds and nothing else.
    say: 'The twelve, the words around them, and both frames. The mic is listening for the small word in front.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's19-scenario',
    title: 'Fixing A Date',
    frSub: 'On dit quelle date ?',
    layer: 'core',
    terms: ['monthFrame', 'dateFrame'],
    say: 'One exchange, and you hold up your half. Every turn turns on whether you mean a month or a day.',
    setting: 'A message thread with Karim, a week after the flight went wrong, sorting out the rest of the trip.',
    // Every turn carries `userEn` and at least two `alts`, which
    // scenario.logic.ts requires of the whole seed. A reveal with no
    // translation shows the learner the one sentence comprehension matters on
    // and asks them to read it; a single accepted answer makes a conversation a
    // cloze test. `stt` scores against all of them.
    //
    // Apostrophes are straight throughout. The suite fails a conversation that
    // mixes straight and curly apostrophes in one bubble stack.
    turns: [
      {
        ai: 'Alors, c\'est confirmé ? Tu arrives quel jour ?',
        en: 'So, is it confirmed? Which day do you get in?',
        user: 'Mon vol est le douze juin.',
        userEn: 'My flight is on the twelfth of June.',
        alts: [
          { fr: 'Le douze juin.', en: 'The twelfth of June.' },
          { fr: 'J\'arrive le douze juin.', en: 'I get in on the twelfth of June.' },
        ],
      },
      {
        ai: 'Parfait. Et tu repars quand ? Fin juin ?',
        en: 'Perfect. And when do you leave? End of June?',
        user: 'Non, je suis là en juillet aussi.',
        userEn: 'No, I am here in July as well.',
        alts: [
          { fr: 'Non, je reste en juillet.', en: 'No, I am staying in July.' },
          { fr: 'Je suis là en juin et en juillet.', en: 'I am here in June and in July.' },
        ],
      },
      {
        ai: 'Ah super ! Il y a le feu d\'artifice le quatorze juillet, tu seras là ?',
        en: 'Ah great! There are fireworks on the fourteenth of July, will you be here?',
        user: 'Oui ! Le quatorze juillet, je suis à Marseille.',
        userEn: 'Yes! On the fourteenth of July, I am in Marseille.',
        alts: [
          { fr: 'Oui, je suis là le quatorze juillet.', en: 'Yes, I am here on the fourteenth of July.' },
          { fr: 'Bien sûr, le quatorze juillet je suis là.', en: 'Of course, on the fourteenth of July I am here.' },
        ],
      },
      {
        ai: 'Génial. Et ton anniversaire, c\'est quand déjà ?',
        en: 'Great. And your birthday, when is it again?',
        user: 'Mon anniversaire est en janvier.',
        userEn: 'My birthday is in January.',
        alts: [
          { fr: 'En janvier.', en: 'In January.' },
          { fr: 'C\'est en janvier, il faut attendre.', en: 'It is in January, you have to wait.' },
        ],
      },
      {
        ai: 'Janvier ! Bon, on fêtera ça en juin alors. Le douze ?',
        en: 'January! Well, we will celebrate it in June then. The twelfth?',
        user: 'Le douze juin, oui. Le jour de mon arrivée.',
        userEn: 'The twelfth of June, yes. The day I arrive.',
        alts: [
          { fr: 'Oui, le douze juin.', en: 'Yes, the twelfth of June.' },
          { fr: 'Parfait, le douze juin.', en: 'Perfect, the twelfth of June.' },
        ],
      },
    ],
  },

  /* ── Act 6: prove it ──────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's20-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['monthFrame', 'dateFrame', 'firstOnly'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'A friend asks which day your flight lands. It is the twelfth of June.', back: `${frOf('fr.a1.jours-et-mois.252')} ${REFRAME}`, say: frOf('fr.a1.jours-et-mois.252') },
      { front: 'Your birthday is somewhere in January and the day does not matter.', back: `${frOf('fr.a1.jours-et-mois.046')} En, and the bare month.`, say: frOf('fr.a1.jours-et-mois.046') },
      { front: 'How do you say "in July" in French?', back: 'en juillet. No article on the month, ever.', say: 'en juillet' },
      { front: 'How do you say "on the first of May"?', back: 'le premier mai. The only day of the month with its own word.', say: 'le premier mai' },
      { front: 'How do you say "on the third of October"?', back: 'le trois octobre. A plain counting number, not troisième.', say: 'le trois octobre' },
      { front: 'You reach for "le douze de mars". What is wrong with it?', back: 'Nothing goes between the number and the month: le douze mars.', say: 'le douze mars' },
      { front: 'You want to write "I am leaving in July" in a message.', back: 'Je pars en juillet. Small j on juillet, because French months are ordinary words.', say: 'Je pars en juillet.' },
      { front: 'Which two months are hardest to tell apart by ear?', back: 'juin and juillet. Same opening, and the ending is the whole difference.', say: 'juin, juillet' },
      { front: 'Three months end the same way. Which are they, and which one sits between them without rhyming?', back: 'septembre, novembre and décembre all end -embre. octobre does not.', say: 'septembre, octobre, novembre, décembre' },
      { front: 'Two months sound a final consonant that French usually drops.', back: 'mars sounds its s, avril sounds its l.', say: 'mars, avril' },
      { front: 'You want to name the month itself, in front of a vowel.', back: "le mois d'août. The de loses its e before a vowel.", say: "le mois d'août" },
      { front: 'Today is the twelfth of March. Say it.', back: `${frOf('fr.a1.nombres.052')} This is how a French speaker gives the date.`, say: frOf('fr.a1.nombres.052') },
    ],
  },

  {
    type: 'progressCheck',
    id: 's21-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to be
    // wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched a trip quietly fail to get booked over one small word, learned the twelve names in four groups that each mean something, and found out that the days lesson\'s rule about needing no word in front stops exactly here. You have seen both frames side by side on one screen, on nine different months, met the one day of the month that counts differently from the other thirty, and read a shop window where a few words were four weeks of somebody\'s bread. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
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
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    rounds: [
      {
        id: 'r1-the-twelve',
        label: 'The twelve names',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round, and
        // the batch, the merge and the test all assert it.
        targets: ['err-wrong-month', 'err-en-for-date'],
        say: 'The names, quickly.',
        questions: [
          {
            q: 'Listen. Which month is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'juillet' },
            opts: ['juin', 'janvier', 'juillette', 'juillet'],
            correct: 3,
            why: 'juillet. It and juin open on the same sound and the ending is the whole difference, which is what sends a holiday booking a month out from where it was meant.',
            ref: 's06-ear',
          },
          {
            q: 'Listen. Which month is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'novembre' },
            opts: ['septembre', 'décembre', 'novembre', 'octobre'],
            correct: 2,
            why: 'novembre. Three of these four end -embre and sound identical from the middle onward, so the opening syllable is the only thing telling them apart.',
            ref: 's06-ear',
          },
          {
            q: 'Write the month that comes between février and avril.',
            format: 'typeIn',
            accept: ['mars', 'en mars'],
            answer: 'mars',
            why: 'mars, and it is one of the two months that sound their final consonant. It is the same word as the planet, which is worth knowing because the planet is where the name came from.',
            ref: 's05-groups',
          },
          {
            q: 'Which of these four does NOT rhyme with the other three?',
            format: 'mcq',
            opts: ['septembre', 'octobre', 'novembre', 'décembre'],
            correct: 1,
            why: 'octobre ends -obre and carries no nasal. It sits between two months that do rhyme, which is exactly the position that gets it misfiled when somebody is reciting the year at speed.',
            ref: 's05-groups',
          },
        ],
      },
      {
        id: 'r2-the-month',
        label: 'En for a month',
        targets: ['err-le-for-month', 'err-wrong-month'],
        say: 'The month frame, and the word that carries it.',
        questions: [
          {
            q: 'Somebody asks when your birthday is. It is in January and the day does not matter here. What do you say?',
            format: 'mcq',
            opts: [
              'Mon anniversaire est le janvier.',
              'Mon anniversaire est janvier.',
              'Mon anniversaire est au janvier.',
              'Mon anniversaire est en janvier.',
            ],
            correct: 3,
            why: `${REFRAME} A month on its own takes en and nothing else. The third option is the habit the days lesson gives you, and months are exactly where that rule stops holding.`,
            ref: 's07-en',
          },
          {
            q: 'You are telling a friend the shop shuts for the whole of August. Fix this. « Le magasin est fermé le août. »',
            format: 'errorSpot',
            accept: ['Le magasin est fermé en août.', 'le magasin est fermé en aout', 'en août', 'en aout'],
            answer: 'Le magasin est fermé en août.',
            why: 'A whole month never takes an article. This is the over-correction that arrives once the date rule has landed, and it stops the sentence rather than shifting its meaning.',
            ref: 's07-en',
          },
          {
            q: 'The days lesson taught that a day needs no word in front of it. What happens with a month?',
            format: 'mcq',
            opts: [
              'A month always takes en',
              'The same: a month needs nothing either',
              'A month always takes le',
              'It depends on the month',
            ],
            correct: 0,
            why: 'Months are where that rule stops. A day takes nothing and a month takes en, with no exceptions across the twelve. Carrying the days rule across gives you a bare month, which is the most common error here.',
            ref: 's07-en',
          },
          {
            q: 'Your holiday is somewhere in July and you have not booked a day yet. Write the two words for "in July".',
            format: 'typeIn',
            accept: ['en juillet', 'enjuillet'],
            answer: 'en juillet',
            why: 'en juillet. The month, bare, with en in front. That is the right answer precisely because the day is not settled, and it is what you would say about a birthday month too.',
            ref: 's08-both',
          },
        ],
      },
      {
        id: 'r3-the-date',
        label: 'Le for a date',
        targets: ['err-en-for-date', 'err-le-for-month'],
        say: 'One day inside a month.',
        questions: [
          {
            q: 'Your flight lands on the twelfth of June and a friend is meeting you. What do you tell them?',
            format: 'mcq',
            opts: [
              'Mon vol est en juin.',
              'Mon vol est en douze juin.',
              'Mon vol est le douze juin.',
              'Mon vol est douze juin.',
            ],
            correct: 2,
            why: 'They asked which day, so the answer has to be a day. The first is true and is not a date, and the other two mix the two frames into something French does not use.',
            ref: 's10-check',
          },
          {
            q: 'You mean one particular day. Fix this. « Le concert est en quatorze juillet. »',
            format: 'errorSpot',
            accept: ['Le concert est le quatorze juillet.', 'le concert est le quatorze juillet', 'le quatorze juillet'],
            answer: 'Le concert est le quatorze juillet.',
            why: 'En is the frame for a whole month and cannot hold a number. A day inside a month takes le, then the number, then the month, and nothing else changes in the sentence.',
            ref: 's08-both',
          },
          {
            q: 'Somebody asks what the date is today. It is the twelfth of March. Say it out loud.',
            format: 'speak',
            target: 'Nous sommes le douze mars.',
            scoreSegment: 'le douze mars',
            accept: ['Nous sommes le douze mars.'],
            answer: 'Nous sommes le douze mars.',
            why: 'The mic is listening for the le in front of the number. It is unstressed and easy to swallow, and it is the only thing making this a date rather than a month with a number beside it.',
            ref: 's18-speak',
          },
          {
            q: 'Write the French for "on the twelfth of December".',
            format: 'typeIn',
            accept: ['le douze décembre', 'le douze decembre', 'ledouzedécembre', 'ledouzedecembre'],
            answer: 'le douze décembre',
            why: 'le douze décembre. Article, then number, then month. The number goes in front of the month, which is the opposite of the order English uses.',
            ref: 's11-date',
          },
        ],
      },
      {
        id: 'r4-the-first',
        label: 'The first, and the rest',
        targets: ['err-ordinal-date', 'err-en-for-date'],
        say: 'One day of the month counts differently.',
        questions: [
          {
            q: 'New Year\'s Day. Which is right?',
            format: 'mcq',
            opts: ['le un janvier', 'le premièr janvier', 'le unième janvier', 'le premier janvier'],
            correct: 3,
            why: 'le premier janvier. The first of the month is the single day that takes a first-second-third word, and it is the only one, so this is an exception you learn once and apply everywhere.',
            ref: 's12-premier',
          },
          {
            q: 'Your father\'s birthday is the third of October. Fix this. « L\'anniversaire de mon père est le troisième octobre. »',
            format: 'errorSpot',
            accept: ["L'anniversaire de mon père est le trois octobre.", 'l anniversaire de mon pere est le trois octobre', 'le trois octobre'],
            answer: "L'anniversaire de mon père est le trois octobre.",
            why: 'trois, not troisième. English puts an ordinal ending on every day of the month and French puts one on exactly the first, so the English habit is wrong on thirty days out of thirty-one.',
            ref: 's12-premier',
          },
          {
            q: 'Write the French for "on the first of August".',
            format: 'typeIn',
            accept: ['le premier août', 'le premier aout', 'lepremieraoût', 'lepremieraout'],
            answer: 'le premier août',
            why: 'le premier août. The one ordinal in the French month, on the month with the shortest name. Note there is nothing between premier and août.',
            ref: 's12-premier',
          },
          {
            q: 'The last day of the year. Which is right?',
            format: 'mcq',
            opts: [
              'le trente et un décembre',
              'le trente et unième décembre',
              'le trente et un de décembre',
              'le décembre trente et un',
            ],
            correct: 0,
            why: 'A plain counting number, nothing between it and the month, and the number before the month. Every day but the first works this way, and you already had the numbers to a hundred four units ago.',
            ref: 's12-premier',
          },
        ],
      },
      {
        id: 'r5-what-english-adds',
        label: 'What English adds',
        targets: ['err-english-date-shape', 'err-ordinal-date'],
        say: 'The word English puts in, and the order it puts things in.',
        questions: [
          {
            q: 'You have Spanish or Portuguese behind you and it wants a small word here. Fix this. « Mon vol est le douze de juin. »',
            format: 'errorSpot',
            accept: ['Mon vol est le douze juin.', 'mon vol est le douze juin', 'le douze juin'],
            answer: 'Mon vol est le douze juin.',
            why: 'Nothing goes between the number and the month in French. Both those languages want that word, so this arrives with anybody who has either, and the sentence still parses, which is why nobody corrects it.',
            ref: 's11-date',
          },
          {
            q: 'You have reached for the English order. Fix this. « Nous sommes mars douze. »',
            format: 'errorSpot',
            accept: ['Nous sommes le douze mars.', 'nous sommes le douze mars', 'le douze mars'],
            answer: 'Nous sommes le douze mars.',
            why: 'English says March twelfth and French says the twelve March, so the two change places and the article appears in front. Two things move at once, which is why this one needs saying out loud a few times.',
            ref: 's11-date',
          },
          {
            q: 'How many parts does a French date have, and in what order?',
            format: 'mcq',
            opts: [
              'Two: the month, then the number',
              'Three: le, the month, the number',
              'Three: le, the number, the month',
              'Four: le, the number, de, the month',
            ],
            correct: 2,
            why: 'le douze mars. Three parts, in that order, with nothing added. The fourth option is the one Spanish and Portuguese speakers reach for and the third is the English order with a French article on it.',
            ref: 's11-date',
          },
          {
            q: 'You want to name the month itself in front of a vowel. Write the French for "the month of August".',
            format: 'typeIn',
            accept: ["le mois d'août", "le mois d'aout", 'lemoisdaoût', 'lemoisdaout', "le mois d’août"],
            answer: "le mois d'août",
            why: "The de loses its e in front of a vowel, exactly as the elision lesson showed. It is le mois de mai but le mois d'août, and août starts on a vowel sound despite the way it is spelled.",
            ref: 's11-date',
          },
        ],
      },
      {
        id: 'r6-on-the-page',
        label: 'On the page',
        targets: ['err-capital-month', 'err-english-date-shape'],
        say: 'What only shows in writing.',
        questions: [
          {
            // The ONLY format that can test a capital. `fold()` lowercases, so
            // typeIn and errorSpot both compare "Juillet" equal to "juillet" and
            // would mark the error correct. An mcq is picked rather than typed
            // and `quiz-duplicate-option` compares options case-sensitively.
            // The brief recommends errorSpot for this and is wrong: errorSpot
            // runs the same matchesAccept path. See the corpus header.
            q: 'You are writing a message. Which is spelled correctly?',
            format: 'mcq',
            opts: ['Je pars en Juillet.', 'je pars en Juillet.', 'Je pars en juillet.', 'Je Pars En Juillet.'],
            correct: 2,
            why: 'Months are ordinary words in French, so juillet takes a small letter mid-sentence. Je keeps its capital only because it opens the sentence, which is the one reason any word gets one here.',
            ref: 's13-traps',
          },
          {
            q: 'A printed notice reads « Fermé en août ». A handwritten one reads « Fermé le premier août ». How long is the shop shut, according to each?',
            format: 'mcq',
            opts: [
              'The whole month, and one day',
              'One day, and the whole month',
              'Both mean the whole month',
              'Both mean one day',
            ],
            correct: 0,
            why: 'En names the month, so the printed one is four weeks. Le plus a number names one day, so the handwritten one is the first of August only. That difference is a month of somebody\'s shopping.',
            ref: 's14-reading',
          },
          {
            q: 'Which month name is spelled correctly?',
            format: 'mcq',
            opts: ['fevrier', 'Février', 'févriér', 'février'],
            correct: 3,
            why: 'février, with an accent on the first e and none on the second, and a small f in the middle of a sentence. It is the month most often misspelled and the one with the fewest days.',
            ref: 's04-twelve',
          },
          {
            q: 'Write the French for "in December".',
            format: 'typeIn',
            accept: ['en décembre', 'en decembre', 'endécembre', 'endecembre'],
            answer: 'en décembre',
            why: 'en décembre, with the accent on the first e. The month takes en and no article, and the accent is the part a spellchecker will not put back for you.',
            ref: 's08-both',
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
    say: 'Four things, and then what carries into the next unit.',
    body: 'You can name all twelve months, say which month something is in, and give a full date that somebody can write down and meet you on. The second and third of those are the same choice made in two directions, and it is the choice the whole unit exists for. Seasons and the weather are next, and they use a small word in front of them too, which is worth knowing before you meet it.',
    points: [
      `${REFRAME} The month takes nothing else, and the date cannot lose its le.`,
      'The first of the month is le premier. Every other day is a plain number.',
      'Number in front of the month, and nothing at all between them.',
      'Lowercase, always, except where any word would take a capital.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed by hand. Every figure is a fact about the array
 * directly above, and a display string is validated against nothing, so the
 * first mission added would have left the card confidently wrong with the whole
 * suite still green. It throws rather than degrades: a progress card silently
 * reporting "0 of 0" is worse than a build that stops.                        */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's21-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.09.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Months learned', v: String(THE_TWELVE.length) },
    { k: 'Contrast pairs', v: String(CONTRAST_PAIRS.length) },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson: three missions on the
 * twelve names and twelve on the two frames and their consequences. The brief
 * is explicit that "if naming the months is done in three missions, that is
 * correct; do not stretch it to six because there are twelve of them."
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22. A flattering estimate buys a lesson that
 * passes the validator and exhausts the learner.                              */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The month you meant',
    sections: ['s01-scene', 's02-goals', 's03-frames'],
    milestone: 'You have watched a trip fail to get booked over one small word.',
    estScreens: 22,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'Twelve names',
    sections: ['s04-twelve', 's05-groups', 's06-ear'],
    milestone: 'You have all twelve, in four groups that each mean something.',
    estScreens: 30,
    restPoints: ['s04-twelve/halfway'],
  },
  {
    id: 'act3',
    title: 'The month, or a day in it',
    sections: ['s07-en', 's08-both', 's09-sort', 's10-check'],
    milestone: 'Both frames, side by side, on nine different months.',
    estScreens: 34,
    restPoints: ['s09-sort/halfway'],
  },
  {
    id: 'act4',
    title: 'What English adds',
    sections: ['s11-date', 's12-premier', 's13-traps', 's14-reading'],
    milestone: 'You can write a date the way French writes it.',
    estScreens: 26,
    restPoints: ['s13-traps/halfway'],
  },
  {
    id: 'act5',
    title: 'Say it, spell it, use it',
    sections: ['s15-words', 's16-flash', 's17-dictation', 's18-speak', 's19-scenario'],
    milestone: 'You have said both frames out loud and spelled the difference.',
    estScreens: 62,
    restPoints: ['s16-flash/halfway', 's18-speak/halfway', 's18-speak/three-quarters'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s20-review', 's21-progress', 's22-quiz', 's23-roundup'],
    milestone: 'Lesson complete. Seasons are next, and they have a small word of their own.',
    estScreens: 44,
    restPoints: ['s20-review/halfway', 's22-quiz/after-r2', 's22-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Acts 5 and 6 release nothing new; they apply and test what acts 1
 * to 4 handed over.
 *
 * `once()` is not decoration. The groups above are built for TEACHING and they
 * legitimately overlap: the scene's two sentences are also one of the contrast
 * pairs. The SRS keys on (itemId, modality), so releasing one card from two
 * tranches would take two ratings for one sentence. The first tranche to name
 * an id keeps it and the rest drop it, which is also the pedagogically right
 * answer: an item belongs to the act that taught it.                          */

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
  // Act 1: the two sentences the SCENE ACTUALLY SHOWS, which are the choice beat
  // and the break. Not the twelve months: they are TAUGHT one per screen in act
  // 2, and a card released before its mission is a card the learner is asked to
  // rate before they have met it.
  once(['fr.a1.jours-et-mois.251', 'fr.a1.jours-et-mois.252']),
  // Act 2: the twelve, released the act that puts one on each screen.
  once(MONTHS),
  // Act 3: both frames. Every pair, both halves together, plus the wild
  // sentences the sorting drill is built on and the two le mois de rows.
  once([...PAIRS, ...WILD_EN, ...WILD_LE, ...MOIS_DE]),
  // Act 4: nothing new. Act 4 works the written habits on sentences act 3
  // already released, which is why this slice is empty rather than padded.
  [],
  // Act 5: the frame words. s15-words is the first surface that puts any of
  // them in front of a learner, so this is where they are released rather than
  // in act 1 beside the scene. a1.08 shipped exactly that bug and had to move
  // five cards after the fact.
  once(FRAME),
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
    throw new Error(`a1.09.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.09.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
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
 * Note that err-en-for-date and err-le-for-month are the SAME rule failing in
 * opposite directions, and both get their own trigger and drill. A lesson that
 * merged them would only ever remediate one of the two, and the second is the
 * one that arrives after the first has been fixed.                            */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-month',
    description: 'Reaches for the wrong month: juin for juillet, or one of the three -embre months for another.',
    detectOn: ['s04-twelve', 's05-groups', 's06-ear', 's22-quiz/r1-the-twelve'],
    drill: 'drill-twelve',
    retest: 'retest-twelve',
  },
  {
    id: 'err-le-for-month',
    description: 'Says le plus a bare month, or drops the small word entirely. The days lesson\'s rule carried across, plus the over-correction that follows the date rule.',
    detectOn: ['s07-en', 's08-both', 's09-sort', 's13-traps', 's22-quiz/r2-the-month'],
    drill: 'drill-month-frame',
    retest: 'retest-month-frame',
  },
  {
    id: 'err-en-for-date',
    description: 'Says en plus a number plus a month when they mean one day. The error the reframe exists to kill, and the one the opening scene turns on.',
    detectOn: ['s01-scene', 's08-both', 's10-check', 's13-traps', 's22-quiz/r3-the-date'],
    drill: 'drill-date-frame',
    retest: 'retest-date-frame',
  },
  {
    id: 'err-ordinal-date',
    description: 'Writes le un janvier for the first, or puts an ordinal ending on every other day of the month, carrying the English habit across.',
    detectOn: ['s12-premier', 's13-traps', 's22-quiz/r4-the-first'],
    drill: 'drill-first',
    retest: 'retest-first',
  },
  {
    id: 'err-english-date-shape',
    description: 'Puts a de inside the date, or leaves the number and the month in the English order. Both survive because the sentence still parses.',
    detectOn: ['s11-date', 's13-traps', 's22-quiz/r5-what-english-adds'],
    drill: 'drill-date-shape',
    retest: 'retest-date-shape',
  },
  {
    id: 'err-capital-month',
    description: 'Writes Juillet mid-sentence. Inaudible, so nobody corrects it, and it survives for years in the writing of people who speak well.',
    detectOn: ['s13-traps', 's14-reading', 's22-quiz/r6-on-the-page'],
    drill: 'drill-lowercase',
    retest: 'retest-lowercase',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-twelve',
    title: 'English in, French out',
    format: 'flashcard',
    coach: 'The English is on the left. Say the French out loud before you turn the card, and keep the stress on the last syllable.',
    pairs: THE_TWELVE.map((m) => [IN_ENGLISH[m], m] as [string, string]),
  },
  {
    id: 'retest-twelve',
    title: 'One more time',
    format: 'mcq',
    q: 'Which month comes straight after juin?',
    opts: ['juillet', 'janvier', 'mai'],
    correct: 0,
    why: 'juillet. It is also the month juin is hardest to tell apart from, so the two sitting next to each other in the year is worth saying out loud rather than reading.',
  },
  {
    id: 'drill-month-frame',
    title: 'The month takes en',
    format: 'sort',
    buckets: ['The month: en', 'One day: le'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [
      'fr.a1.jours-et-mois.046', 'fr.a1.jours-et-mois.248',
      'fr.a1.jours-et-mois.251', 'fr.a1.jours-et-mois.252',
      'fr.a1.jours-et-mois.255', 'fr.a1.jours-et-mois.256',
    ],
    coach: 'Read the words in front of the month. If it is just en, the whole month is meant. If there is a le and a number, one day is meant.',
  },
  {
    id: 'retest-month-frame',
    title: 'One more time',
    format: 'mcq',
    q: 'Your birthday is in January and the day does not matter. Which is right?',
    opts: ['Mon anniversaire est le janvier.', 'Mon anniversaire est en janvier.', 'Mon anniversaire est janvier.'],
    correct: 1,
    why: 'A month on its own takes en. The first puts an article on a whole month, which French never does, and the third is the days rule carried across to a word that does not want it.',
  },
  {
    id: 'drill-date-frame',
    title: 'Put the day back in',
    format: 'flashcard',
    coach: 'Read the month on the left. Say the version on the right, which names one day inside it, and notice that you added exactly two words.',
    pairs: [
      ['Mon vol est en juin.', 'Mon vol est le douze juin.'],
      ["J'ai un examen en décembre.", "J'ai un examen le douze décembre."],
      ['Le magasin est fermé en août.', 'Le magasin est fermé le premier août.'],
      ['Le concert est en juillet.', 'Le concert est le quatorze juillet.'],
      ['La rentrée scolaire est en septembre.', 'La rentrée scolaire est le premier septembre.'],
    ],
  },
  {
    id: 'retest-date-frame',
    title: 'One more time',
    format: 'mcq',
    q: 'Your flight lands on the twelfth of June and a friend is meeting you. What do you tell them?',
    opts: ['Mon vol est en juin.', 'Mon vol est le douze juin.', 'Mon vol est en douze juin.'],
    correct: 1,
    why: 'They need a day, so the answer has to carry one. The first names the month and is true without being an answer, and the third puts a number inside a frame that cannot hold one.',
  },
  {
    id: 'drill-first',
    title: 'The first, and everything after it',
    format: 'flashcard',
    coach: 'Read the English on the left. Say the French on the right, and notice that only the first one gets a word of its own.',
    pairs: [
      ['the first of January', 'le premier janvier'],
      ['the second of January', 'le deux janvier'],
      ['the third of October', 'le trois octobre'],
      ['the twelfth of June', 'le douze juin'],
      ['the thirty-first of December', 'le trente et un décembre'],
    ],
  },
  {
    id: 'retest-first',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these is the way French writes the third of a month?',
    opts: ['le troisième', 'le trois', 'le trois de'],
    correct: 1,
    why: 'A plain counting number. premier is the only day of the month that takes a first-second-third word, so from the second onward you use the number you already know.',
  },
  {
    id: 'drill-date-shape',
    title: 'Three parts, nothing else',
    format: 'sort',
    buckets: ['A French date', 'Not a French date'],
    items: [
      'fr.a1.nombres.052', 'fr.a1.jours-et-mois.259',
      'fr.a1.jours-et-mois.129', 'fr.a1.jours-et-mois.142',
      'fr.a1.jours-et-mois.046', 'fr.a1.jours-et-mois.251',
    ],
    coach: 'A date has three parts in one order: le, the number, the month. If a sentence names a month with en and no number, it is naming the month rather than dating anything in it.',
  },
  {
    id: 'retest-date-shape',
    title: 'One more time',
    format: 'mcq',
    q: 'Which one means "on the twelfth of March"?',
    opts: ['le douze de mars', 'le douze mars', 'mars douze'],
    correct: 1,
    why: 'Nothing goes between the number and the month, and the number comes first. The first option is the shape Spanish and Portuguese want, and the third is the English order.',
  },
  {
    id: 'drill-lowercase',
    title: 'Small letters',
    format: 'sort',
    buckets: ['Written correctly', 'Written the English way'],
    items: [
      'fr.a1.jours-et-mois.079', 'fr.a1.jours-et-mois.134',
      'fr.a1.jours-et-mois.136', 'fr.a1.jours-et-mois.129',
      'fr.a1.jours-et-mois.046', 'fr.a1.jours-et-mois.057',
    ],
    coach: 'Every line here is correct French, which is the point: look at where each capital falls. A month only ever gets one because it opened the sentence, never because it is a month.',
  },
  {
    id: 'retest-lowercase',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is written the way French writes it?',
    opts: ['Je pars en Juillet.', 'Je pars en juillet.', 'je pars en juillet.'],
    correct: 1,
    why: 'The month takes a small letter and the sentence takes a capital. The third option gets the month right and drops the capital that any first word would have.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Three, and each exists for a layout reason as much as a pedagogical one.
 * `tapTable` is not in ownsLayout(), so the in-flow tables render inside a
 * scrolling page and anything past about nine rows runs off the fold and takes
 * its chrome with it. The full twelve-by-two version lives here.
 *
 * This is also where a learner will be a week from now, halfway through the
 * seasons unit or telling the time, wanting the year beside the date. Layer
 * 'deep' exempts these from the core density caps, which is the point: a sheet
 * is allowed to be dense, and a `table` section is only legal here.
 *
 * The brief asks for exactly this: "A reference sheet with the twelve months,
 * the two frames and the lowercase note is worth building. It is what a learner
 * returns to while doing a1.10 and a1.12."                                    */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.09.months',
    title: 'The twelve, in full',
    layer: 'deep',
    contains: ['All twelve with their sound', 'The four that are hard to say', 'The words around a month'],
    sections: [
      {
        type: 'table',
        id: 'sheet-months-table',
        title: 'The twelve months',
        layer: 'deep',
        cols: ['French', 'Sounds like', 'English', 'Watch for'],
        rows: THE_TWELVE.map((m) => [
          m,
          sub(m),
          IN_ENGLISH[m],
          ({
            janvier: 'nasal first syllable',
            février: 'accent on the first e only',
            mars: 'the final s IS pronounced',
            avril: 'the final l IS pronounced',
            mai: 'one short sound',
            juin: 'not juillet',
            juillet: 'not juin, and a silent t',
            août: 'one sound, close to oot',
            septembre: 'nasal, then a quick br',
            octobre: 'the one that does not rhyme',
            novembre: 'nasal, then a quick br',
            décembre: 'accent on the e, then a nasal',
          } as Record<string, string>)[m],
        ]),
      },
      {
        type: 'cheatSheet',
        id: 'sheet-months-frame',
        title: 'The words around a month',
        layer: 'deep',
        rows: [
          { k: 'le mois', v: 'The month, as a unit. Masculine.', say: 'le mois' },
          { k: "l'année", v: 'The year. Feminine, and it elides after le.', say: "l'année" },
          { k: 'la date', v: 'The date. Feminine.', say: 'la date' },
          { k: 'le mois prochain · le mois dernier', v: 'Next month and last month. Neither takes en.', say: 'le mois prochain, le mois dernier' },
          { k: 'tous les mois', v: 'Every month. The plural is correct here, after tous les.', say: 'tous les mois' },
          { k: 'une fois par mois', v: 'Once a month. Swap mois for an or semaine to change it.', say: 'une fois par mois' },
          { k: 'le mois de mai · le mois d\'août', v: 'Naming the month itself. The de elides before a vowel.', say: "le mois de mai, le mois d'août" },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-months-sounds',
        title: 'The four sounds worth thirty seconds',
        layer: 'deep',
        body: 'Four things in the twelve are genuinely hard and the other eight are not, so it is worth knowing which four. First, juin and juillet open on exactly the same sound and the ending is the whole difference. They are also next to each other in the year, so confusing them books a holiday a month out from where it was meant rather than somewhere obviously absurd. Say them as a pair, out loud, several times, because that is the only way the difference becomes automatic. Second, septembre, novembre and décembre all end the same way: a nasal vowel followed by a quick br with no vowel of its own. Three months, one ending, and octobre sits in the middle of them without rhyming at all, which is exactly the shape that makes it get misfiled. Learn the trio as a trio and let octobre be the odd one out on purpose. Third, mars sounds its final s and avril sounds its final l, which breaks the habit that French leaves a final consonant silent. Both are already filed as exceptions elsewhere in this app: avril is the CaReFuL L exemplar in the silent letters lesson, where gentil is compared against it. Fourth, août is one short sound and it is the shortest month name in French. It is often stretched into two syllables that are not there, and this app teaches one pronunciation of it and does not show you the others, because an A1 learner needs a word to say rather than a debate to follow.',
      },
    ],
  },
  {
    id: 'sheet.a1.09.frames',
    title: 'The month, or a day in it',
    layer: 'deep',
    contains: ['Both frames on all twelve months', 'What English does instead', 'The five errors, and which are audible'],
    sections: [
      {
        type: 'table',
        id: 'sheet-frames-table',
        title: 'All twelve, both ways',
        layer: 'deep',
        cols: ['The month', 'A day in it', 'English says'],
        rows: THE_TWELVE.map((m) => [
          `en ${m}`,
          `le douze ${m}`,
          `in ${IN_ENGLISH[m]} · on ${IN_ENGLISH[m]} 12th`,
        ]),
      },
      {
        type: 'cheatSheet',
        id: 'sheet-frames-errors',
        title: 'The five errors, and which you can hear',
        layer: 'deep',
        rows: [
          { k: 'The month frame with a day in it', v: 'en douze juin. Audible, and it is not French.', say: 'le douze juin' },
          { k: 'An article on a bare month', v: 'le juillet. Audible, and it stops the sentence.', say: 'en juillet' },
          { k: 'The missing article on a date', v: 'douze mars. Audible, and it is a number beside a month rather than a date.', say: 'le douze mars' },
          { k: 'A de inside the date', v: 'le douze de mars. Audible, and the sentence still parses, so nobody corrects it.', say: 'le douze mars' },
          { k: 'The English order', v: 'mars douze. Audible, and it is not a date in either language.', say: 'le douze mars' },
          { k: 'An ordinal on the wrong day', v: 'le douzième juin. Audible. Only premier works that way.', say: 'le douze juin' },
          { k: 'The capital letter', v: 'en Juillet. Inaudible, so nothing ever corrects it.', say: 'en juillet' },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-frames-why',
        title: 'Why there is nothing to carry across',
        layer: 'deep',
        body: 'English marks the difference between a month and a day inside it with the same word twice, and French marks it with two different ones, which is the whole reason this is hard. English says in January and on the twelfth of March, and both of those small words are doing the job of pointing at a time. A learner reaching for a translation finds that in and on both come out as one French word in other contexts, and picks whichever comes first. French does not work that way here. A whole month takes en and nothing else, and a day inside a month takes le, then the number, then the month. There is no overlap between the two frames and no sentence where either would do. That is actually good news, because it means the choice is never a matter of taste: decide first whether you are naming a month or a day, and the frame follows with no judgement involved. The second thing worth knowing is that the two errors point in opposite directions and the second one arrives after the first is fixed. A learner who has only been told to use le for dates starts putting le in front of bare months within a week, which is why every drill in this lesson sorts both ways rather than only asking you to add the article. Finally, the article in a date is not optional and has no English equivalent at all, so there is nothing to translate and the instinct is to leave it out. Without it you have a number sitting next to a month, which is not a date, and the listener has to work out what you meant.',
      },
    ],
  },
  {
    id: 'sheet.a1.09.date',
    title: 'Giving a date',
    layer: 'deep',
    contains: ['The three parts, in order', 'The one ordinal', 'Every day of the month'],
    sections: [
      {
        type: 'table',
        id: 'sheet-date-table',
        title: 'The first, and the rest',
        layer: 'deep',
        cols: ['English', 'French', 'Which kind of number'],
        rows: [
          ['the first', 'le premier', 'the only ordinal'],
          ['the second', 'le deux', 'plain counting number'],
          ['the third', 'le trois', 'plain counting number'],
          ['the eleventh', 'le onze', 'plain counting number'],
          ['the twelfth', 'le douze', 'plain counting number'],
          ['the fourteenth', 'le quatorze', 'plain counting number'],
          ['the twenty-first', 'le vingt et un', 'plain counting number'],
          ['the thirty-first', 'le trente et un', 'plain counting number'],
        ],
      },
      {
        type: 'cheatSheet',
        id: 'sheet-date-shape',
        title: 'The shape, part by part',
        layer: 'deep',
        rows: [
          { k: 'le', v: 'Compulsory. English has nothing here, so there is nothing to translate and it is the part most often left out.', say: 'le douze mars' },
          { k: 'the number', v: 'A plain counting number on every day but the first. You had all of these four units ago.', say: 'le douze' },
          { k: 'the month', v: 'Straight after the number, with nothing between them, and always lowercase.', say: 'mars' },
          { k: 'a day name, if you want one', v: 'It goes at the front: lundi deux août. That is the days lesson rather than this one.', say: 'lundi deux août' },
        ],
      },
    ],
  },
];

export const MOIS_LESSON: Lesson = {
  id: 'a1.09.l1',
  unitId: 'a1.09',
  // The lesson's index WITHIN its unit, not its place in the track. Every lesson
  // in the seed is seq 1 because every unit ships exactly one so far, and the
  // `l1` in the id is this number.
  seq: 1,
  title: "Les mois de l'année",
  level: 'a1',
  // THIRTEEN, not nine. missions.ts derives the eyebrow from unit.seq at render
  // time (`${level} · LEÇON ${unit.seq}`), and a1.09 sits at seq 13. The stored
  // value is a fallback and has to agree with what the renderer computes, or the
  // two disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7) and a1.04 ships it today.
  tag: 'A1 · LEÇON 13',
  intro:
    'Twelve short words, and two small ones that decide whether you named a month or a day inside it. This is how you name the months, say when something is happening, and give a date somebody can write down and meet you on.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The unit shipped with lessonIds: [], so this is the first lesson here and
  // the counter starts at 1. It moves forward on every rebuild: the merge script
  // prints both sides, and "replacing v3 with v1" reads as a rollback.
  version: 1,

  grammarAssumed: [
    'le, la, l\' and les, including le in front of a general noun, introduced in a1.04',
    'The full present of être, introduced in a1.06',
    'The full present of avoir, and its fixed expressions, introduced in a1.07',
    'The numbers from one to twenty, introduced in a1.02',
    'The numbers from twenty-one to a hundred, introduced in a1.27',
    'The seven day names and the article that makes a day habitual, introduced in a1.08',
    'Elision before a vowel, introduced in a1.07',
  ],
  grammarIntroduced: [
    'The twelve month names, as an ordered set beginning in January',
    'The preposition en in front of a bare month, marking a whole month',
    'The definite article plus a cardinal number plus a month, marking one calendar day',
    'premier as the only ordinal used in a French date',
    'The cardinal number for every day of the month from the second onward',
    'The absence of any preposition between the number and the month in a date',
    'le mois de plus a month, and its elision before a vowel',
    'The lowercase spelling of month names outside sentence-initial position',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Months of the Year',
    subFr: "Les mois de l'année",
    introFr: "Douze mots courts, et deux petits mots qui décident si vous parlez d'un mois entier ou d'un seul jour.",
    minutes: 25,
    difficulty: 2,
    glyph: '🗓️',
    screens: 218,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: MOIS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-09-mois.test.ts, the way sons.07's
    // rec-h-pairs and a1.08's rec-a1-08-seven pin their own, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits, and ELEVENLABS_VOICE_AMELIE is not set in ealch-admin/.env in
    // any case. CLIP_MANIFEST is empty by design, so every card falls back to
    // device TTS until the studio delivers, and a recordingId resolving to
    // nothing is the correct shipping state.
    //
    // All four of the brief's month-specific notes are written in explicitly.
    recorded: [
      {
        id: 'rec-a1-09-twelve',
        desc:
          'THE TWELVE MONTHS AS ONE CONTINUOUS TAKE, IN CALENDAR ORDER STARTING AT JANVIER, BY ONE VOICE AT ONE '
          + 'SPEED. Twelve months recorded in twelve sessions are twelve performances, and the learner is memorising a '
          + 'SEQUENCE: any drift in pace, pitch or emphasis between them teaches a difference between the recordings '
          + 'rather than a difference in French. Read the twelve straight through with an even beat, the way somebody '
          + 'counts, then again slowly in the same take. JUIN AND JUILLET MUST BE ADJACENT AND IN THIS SAME TAKE, in '
          + 'calendar order, because they are the pair that genuinely collides and the learner has to hear them '
          + 'against each other rather than four minutes apart. Do not slow that pair down on the natural-pace pass '
          + 'and do not lean on the ending of juillet to separate them: a learner who only recognises the difference '
          + 'when it is exaggerated will not recognise it at conversational speed. SEPTEMBRE, OCTOBRE, NOVEMBRE AND '
          + 'DÉCEMBRE MUST ALSO SIT TOGETHER IN THIS TAKE, in that order, so the three that rhyme and the one that '
          + 'does not are heard against each other: octobre in the middle without the -embre ending is the whole '
          + 'teaching of that group. Keep every nasal closed: janvier opens on one with NO n sound, juin is a single '
          + 'nasal syllable with NO n sound, and septembre, novembre and décembre each carry one in the middle with NO '
          + 'n sound and a quick br behind it that has no vowel of its own. Those five are the ones a reader '
          + 'over-articulates. mars sounds its final s and avril sounds its final l, both deliberately, and août is '
          + 'ONE short sound: do not give it two syllables and do not use any pronunciation other than the one this '
          + 'app teaches, which is the oot form.',
        clipIds: [
          'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
          'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
          'juin-juillet-pair', 'embre-cluster',
        ],
      },
      {
        id: 'rec-a1-09-pairs',
        desc:
          'The contrast this lesson exists for. EACH PAIR IS ONE TAKE: « en juin » immediately followed by « le douze '
          + 'juin » by the same voice at the same pace, so the ONLY difference the learner hears is the frame. '
          + 'Recorded apart, they compare two performances instead of two meanings, and the whole teaching is lost. Do '
          + 'not lean on the le to make it clearer: it is an unstressed syllable in ordinary speech and a learner who '
          + 'hears it emphasised will never recognise it at conversational speed. All nine pairs, in the order the '
          + 'contrast table shows them, then the four full sentence pairs (« Mon vol est en juin » / « Mon vol est le '
          + 'douze juin », and the same for the août, juillet and décembre pairs). The bare-frame pairs and the '
          + 'sentence pairs are both needed: the first shows the difference with nothing around it and the second '
          + 'shows it surviving inside a sentence, which is where the learner has to hear it.',
        clipIds: [
          'en janvier', 'le premier janvier', 'en mars', 'le douze mars',
          'en mai', 'le premier mai', 'en juin', 'le douze juin',
          'en juillet', 'le quatorze juillet', 'en août', 'le premier août',
          'en septembre', 'le premier septembre', 'en octobre', 'le trois octobre',
          'en décembre', 'le douze décembre',
          'Mon vol est en juin.', 'Mon vol est le douze juin.',
          'Le magasin est fermé en août.', 'Le magasin est fermé le premier août.',
        ],
      },
      {
        id: 'rec-a1-09-dates',
        desc:
          'The date shape, one take: le premier, le deux, le trois, le onze, le douze, le quatorze, le vingt et un, le '
          + 'trente et un, read as a list so the learner hears premier as the ONE that is shaped differently and the '
          + 'rest as plain counting. Then the same numbers attached to a month with NO PAUSE between the number and '
          + 'the month: « le douze mars », « le trois octobre », « le trente et un décembre ». That gap is the whole '
          + 'point, because a reader who breathes between them teaches the learner that something belongs there, and '
          + 'the error this lesson fights hardest is a de inserted in exactly that position. Also record « le mois de '
          + 'mai » and « le mois d\'août » adjacently in one take, so the elision is heard as the same phrase changing '
          + 'rather than two phrases.',
        clipIds: [
          'le premier', 'le deux', 'le trois', 'le onze', 'le douze', 'le quatorze',
          'le vingt et un', 'le trente et un',
          'le douze mars', 'le trois octobre', 'le trente et un décembre',
          'le mois de mai', "le mois d'août",
        ],
      },
      {
        id: 'rec-a1-09-traps',
        desc:
          'The five English-speaker traps, wrong version then right version, with a clear beat between them so the '
          + 'learner hears a difference rather than a correction. Read EVERY wrong version plainly and at ordinary '
          + 'pace rather than comically. Two of the five are real French sentences that mean something else, and a '
          + 'performance that marks them as errors removes the reason they are dangerous: « Mon vol est en juin » is '
          + 'not a mistake at all out of context, which is the point of the first one, and « le douze de mars » parses '
          + 'perfectly well to a listener, which is why nobody corrects it. « Le concert est le juillet » is the one '
          + 'that genuinely stops, and it still gets read straight.',
        clipIds: ['trap-en-with-a-day', 'trap-article-on-a-month', 'trap-capital', 'trap-de-inside', 'trap-le-un'],
      },
      {
        id: 'rec-a1-09-scene',
        desc:
          'The opening scene, French bubbles only, in the voice of a man in his thirties reading messages at an '
          + 'ordinary texting pace rather than a teaching pace. The beat where he accepts the vague answer '
          + '(« Ah, super ! Dis-moi quand tu sais. ») must be warm and genuinely pleased rather than disappointed or '
          + 'pointed: the whole point of the scene is that nobody is upset and nobody is corrected, the day simply '
          + 'never gets booked. Any edge on that line turns it into a telling-off and the teaching is lost. The final '
          + 'line, where he says he will take the day off, is the one place warmth is allowed to show, because that is '
          + 'the reward for having given him a date.',
        clipIds: ['Tu arrives quand ?', 'Ah, super ! Dis-moi quand tu sais.', 'Parfait, je pose ma journée. Je serai à l\'aéroport.'],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const MOIS_ITEM_IDS = ITEM_IDS;
export const MOIS_SPEAK_IDS = SPEAK_IDS;
export const MOIS_DICTATION_IDS = DICTATION_IDS;
export const MOIS_TRANCHES = DECK_TRANCHE;
export const MOIS_MONTH_IDS = MONTHS;
export const MOIS_FRAME_IDS = FRAME;
export const MOIS_WILD_EN_IDS = WILD_EN;
export const MOIS_WILD_LE_IDS = WILD_LE;
export const MOIS_DE_IDS = MOIS_DE;
/** Every id this lesson names that it did not author. */
export const MOIS_BORROWED_IDS = BORROWED_IDS;
/** The authored half. */
export const MOIS_AUTHORED_IDS = MOIS_IDS;
export const MOIS_IMPORTED_IDS = IMPORTED_IDS;
export const MOIS_REUSED_IDS = REUSED_IDS;
/** Named so the batch, the merge and the test can all assert that this lesson
 *  teaches no season and no day, which belong to a1.10 and a1.08. */
export const SEASON_WORDS = ['été', 'hiver', 'automne', 'printemps'];
export const DAY_WORDS = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
export { monthsIn };
