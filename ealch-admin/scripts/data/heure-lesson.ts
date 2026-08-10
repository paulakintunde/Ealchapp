// a1.12.l1 "L'heure" , the mission journey.
//
// The corpus findings that changed this build are in the header of
// heure-corpus.ts and are not repeated here. In one line: the brief's corpus
// section was measured against seed.json rather than against Postgres, so the
// telling half is richly attested, « moins le quart » has fifteen rows rather
// than none, and the theme this lesson wanted already exists and is called
// `heure-et-date`.
//
// ── The teaching problem, which is two problems wearing one name ───────────
//
// The canDo has two clauses and unlike a1.08's they are BOTH substantial:
//
//     "Can ask and tell the time"        il est huit heures
//     "and make a simple appointment"    à huit heures
//
// Those are different sentences with different opening words, and a lesson that
// treats them as one topic produces « il est à huit heures », which is the
// error that welds them. So the reframe splits the canDo down its own seam and
// the acts follow it: acts 1 to 4 are telling, act 5 is booking, and act 4 is
// the hinge, because the register split is where the two halves actually meet
// (a learner tells the time on the spoken clock and reads an appointment on the
// printed one).
//
// ── The half the brief said was missing, and what was missing instead ──────
//
// The brief budgets the whole telling half for authoring from nothing. It is
// all there. What is genuinely absent is smaller and more useful: the twelve
// hours AS HEADWORDS. Every hour exists inside a sentence and not one exists as
// a card, so nothing in the app could drill « neuf heures » on its own.
//
// That is the pronunciation content of this lesson. `heure` opens on a mute h
// and a vowel, so every number fuses into it and the hour name stops ending
// where its spelling does. Twelve cards, each carrying `voiceflash`, are what
// let the speak mission score the JOIN rather than the sentence around it, and
// « neuf heures » /nœ.vœʁ/ is the one exception in the set: the f becomes a v
// before heures and before ans and nowhere else in the language.
//
// So act 2 is the twelve hours and it is a liaison act with a clock on it. That
// is the brief's own best observation and it survives the corpus correction
// intact.
//
// ── What the learner already has, and what this lesson refuses to reteach ──
//
// a1.27 (Numbers 21 to 100) is BUILT and is the declared prerequisite, so every
// number this lesson needs is owned before it starts, including the twenties
// the official clock runs into. a1.06 gives être in full, so « il est » is
// entirely inside the learner's grammar and only the SUBJECT is strange. This
// lesson explains the impersonal `il` in one term and one deck card and spends
// no act on it, which is a smaller lift than a1.10 will have with « il fait ».
//
// Coordinated rather than assumed, per the brief: a1.10 "Seasons and Weather"
// sits one ahead at seq 14 and is briefed to teach the same impersonal `il`. It
// is not built. Every line here reads correctly whether it ships first or not,
// and nothing says "you already know this one is nobody".
//
// ── Asking the time, which needs grammar seven units away ──────────────────
//
// a1.19 (est-ce que) and a1.20 (inversion) both carry `lessonIds: []`. So the
// two question forms are taught as FROZEN CHUNKS and the lesson says out loud
// that one of them is frozen:
//
//     Quelle heure est-il ?      memorised whole, no parts, and said so
//     Vous avez l'heure ?        transparent, built on avoir, which is a1.07
//
// One memorised and one visible is both the accurate position and the useful
// one. No inversion is taught as a pattern and the test asserts these two are
// the only ones that appear.
//
// ── The dictée, which does the one thing fold() cannot ─────────────────────
//
// The brief says the dropped `heures` "cannot be tested with typeIn: see the
// fold() note", and that free text cannot distinguish a missing noun from a
// missing space. Half right, and the half that is wrong matters.
//
// `fold()` strips ALL whitespace, so « huit heures » and « huitheures » really
// are the same string and the SPACE is untestable. But « il est huit » folds to
// "ilesthuit" and « il est huit heures » folds to "ilesthuitheures", which are
// different strings. So free text tests the missing WORD perfectly well, and
// this lesson uses errorSpot for it.
//
// The dictée does better still. Four of its five lines run in WORD mode, where
// the bank is the sentence's own words plus two decoys, so `heures` is a tile
// the learner has to place. A line rebuilt without it is visibly incomplete.
// And « Il est huit heures et quart. » draws `le` as one of its two decoys,
// which is exactly the article that belongs to « moins le quart » and to
// nothing else in the lesson. The single best exercise here was already in the
// corpus and cost nothing to wire.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { HEURE_TERMS, REFRAME } from './heure-terms.ts';
import {
  CLOCK_PAIRS, HOUR_IDS, QUARTER_PHRASES, QUARTER_WITH_ARTICLE, THE_TWELVE,
  enOf, frOf, glossOf, ipaOf, sub,
} from './heure-corpus.ts';

/* ─── The id groups the sections are built from ────────────────────────────
 *
 * Named rather than inlined, so a tranche, a drill and a mission all read the
 * same list and no id is released by an act that does not show it. That is the
 * failure a1.08 found at v6: thirty items released to spaced repetition off
 * screens that did not exist.                                                 */

/** « Il est ... » as a whole sentence, and ONLY the ones a mission puts on a
 *  screen.
 *
 *  This list was written with all thirteen hours in it and the tranche guard
 *  below rejected seven of them: `heure-et-date` carries « Il est trois
 *  heures. » through « Il est onze heures. » as a complete run, and naming a
 *  run because it exists is how a lesson ends up releasing cards to spaced
 *  repetition off screens that do not exist. That is the failure a1.08 found at
 *  its v6 and v7, and it is the one the brief opens on.
 *
 *  The twelve hours ARE all taught, one per screen, as the authored headwords
 *  in `HOUR_IDS`. What the sentence form adds beyond those is the frame around
 *  them, and the frame is taught on four cards rather than on twelve, so four
 *  sentences carry it: the two exceptions, the singular, and one plural. The
 *  other two here are shown by the listening mission.                        */
const TELL = [
  'fr.a1.heure-et-date.060', // Il est une heure.           s03 card 4, s04 row 2
  'fr.a1.temps-et-frequence.051', // Il est huit heures.    s03 card 1, s04 row 1
  'fr.a1.temps-et-frequence.052', // Il est midi.           s03 card 2, s04 row 3, s08 card 1
  'fr.a1.temps-et-frequence.053', // Il est minuit.         s08 card 2
  'fr.a1.heure-et-date.061', // Il est deux heures juste.   s07 line 3
  'fr.a1.heure-et-date.013', // Il est neuf heures.         s07 line 4
];

/** The four quarter-hour phrases as cards. */
const QUARTER_IDS = [
  'fr.sons.jours-et-mois.064', // et quart
  'fr.sons.jours-et-mois.063', // et demie
  'fr.sons.jours-et-mois.065', // moins le quart
  'fr.sons.jours-et-mois.066', // moins dix
];

/** The same four, worked on real hours. */
const QUARTER_SENT = [
  'fr.a1.temps-et-frequence.056', // Il est trois heures et quart.
  'fr.a1.temps-et-frequence.001', // Il est huit heures et quart.
  'fr.a1.temps-et-frequence.057', // Il est cinq heures et demie.
  'fr.a1.heure-et-date.032', // Il est huit heures et demie.
  'fr.a1.temps-et-frequence.058', // Il est sept heures moins le quart.
  'fr.a2.heure-et-date.009', // Il est huit heures moins le quart.
  'fr.a1.heure-et-date.064', // Il est cinq heures moins dix.
];

/** midi and minuit: the two that take no `heures` and no article, and the
 *  agreement they carry. `fr.a1.ecole.263` is the same masculine agreement
 *  outside the clock, which is what makes it a rule rather than a clock quirk. */
const EXCEPTIONS = [
  'fr.a1.routines.035', // midi
  'fr.a1.routines.036', // minuit
  'fr.a1.heure-et-date.024', // Il est midi et quart.
  'fr.sons.jours-et-mois.067', // midi et demi
  'fr.sons.jours-et-mois.068', // minuit et demi
  'fr.a1.heure-et-date.036', // Il est midi et demi.
  'fr.a1.heure-et-date.037', // Il est minuit et demi.
  'fr.a1.ecole.263', // Elle a six ans et demi.
];

/** The printed clock. Every one of these is somebody else's shipped sentence
 *  and four of them are the official half of this lesson's authored pairs. */
const OFFICIAL = [
  'fr.a1.nombres.057', // Le film commence à vingt heures trente.
  'fr.a1.nombres.047', // Le train part à seize heures dix.
  'fr.a1.temps-et-frequence.064', // Le magasin ferme à dix-huit heures.
  'fr.a1.heure-et-date.091', // Le rendez-vous est à quatorze heures.
  'fr.a1.nombres.064', // Le musée est ouvert de neuf heures à dix-huit heures.
];

/** The one official sentence act 5 shows rather than act 4: s17-booking's
 *  precision row speaks it. Kept out of OFFICIAL so the act-4 tranche cannot
 *  release it a whole act before the mission that says it. */
const OFFICIAL_LATE = ['fr.a1.nombres.074']; // La réunion commence à quatorze heures précises.

/** The spoken half of the four register pairs, authored by this lesson. */
const SPOKEN_PAIR_IDS = CLOCK_PAIRS.map(([spoken]) => spoken);

const ASKING = [
  'fr.a1.heure-et-date.002', // Excusez-moi, quelle heure est-il ?
  'fr.a1.heure-et-date.003', // Vous avez l'heure, s'il vous plaît ?
  'fr.a1.heure-et-date.004', // Tu as l'heure ?
  'fr.sons.questions.019', // quelle heure est-il ?
  'fr.sons.questions.020', // à quelle heure ?
];

const BOOKING = [
  'fr.a1.heure-et-date.077', // Nous avons rendez-vous à dix heures.
  'fr.sons.expressions-utiles.180', // j'ai un rendez-vous
  'fr.a1.salutations.308', // Bonjour, j'ai un rendez-vous à quatorze heures.
  'fr.a1.expressions-utiles.019', // Ça marche, on se voit à dix-huit heures.
  'fr.sons.expressions-utiles.153', // ça ouvre à quelle heure ?
  'fr.sons.expressions-utiles.154', // ça ferme à quelle heure ?
];

/** Booking rows act 6 shows rather than act 5: « à trois heures » is a card in
 *  s20-words and the bus line is a dictée target. Both were released in act 5 by
 *  an earlier draft, which asked the learner to rate two cards a whole act
 *  before meeting either. */
const BOOKING_LATE = [
  'fr.sons.jours-et-mois.074', // à trois heures                                  s20-words
  'fr.a1.temps-et-frequence.019', // Le bus arrive à sept heures moins le quart.  s22-dictation
];

/** Exactness, approximation, and the two words that judge you for arriving.
 *  The brief is right that these cost almost no authoring: all six ship. */
const PRECISION = [
  'fr.a1.heure-et-date.068', // Il est neuf heures pile.
  'fr.sons.jours-et-mois.073', // vers trois heures
  'fr.sons.jours-et-mois.072', // pile
  'fr.a1.deplacements.059', // à l'heure
  'fr.a1.deplacements.058', // en retard
];

/** A length of time is not a time of day. One card, not a mission, exactly as
 *  the brief asks.
 *
 *  « l'heure », « la demi-heure » and « un rendez-vous » were here and are gone.
 *  All three are gendered single-word nouns, and `endingPopulation` counts those
 *  into the population a1.03 prints a COUNT and an ACCURACY for on two of its
 *  cards, which a1-03-genre.test.ts re-measures from the seed on every run.
 *  Importing them would have moved another lesson's printed figures.
 *
 *  The batch's guard is what found them, and it found something else at the same
 *  time: all three were in `itemIds` and named by NO section. So they were
 *  already the "authored, valid, invisible" failure, and dropping them costs the
 *  learner nothing. The words are still on the cards as display strings. What
 *  they lose is an SRS entry, which is the right trade against silently making
 *  a1.03's numbers wrong. Re-measuring a1.03 is a1.03's build to make. */
const DURATION = [
  'fr.a1.heure-et-date.081', // La classe dure une heure.
  'fr.a1.heure-et-date.094', // Le cours de français dure deux heures.
  'fr.sons.jours-et-mois.050', // le quart d'heure   (two words, so outside the population)
];

/** Which half of the day, which the spoken clock needs and the printed one
 *  does not. */
const DAYPART = [
  'fr.a1.heure-et-date.066', // Il est sept heures du matin.
  'fr.a1.heure-et-date.067', // Il est huit heures du soir.
];

/** Shown by s21-flash, which is act 6. Released there and not in act 5. */
const OBJECTS = ['fr.a1.objets.012']; // une montre

/** Everything this lesson teaches, in the order it is first shown. Deduped,
 *  because the groups above are built for TEACHING and legitimately overlap:
 *  « Il est deux heures juste. » is both an hour and an exactness card. */
const ITEM_IDS = [...new Set([
  ...HOUR_IDS,
  ...TELL,
  ...QUARTER_IDS,
  ...QUARTER_SENT,
  ...EXCEPTIONS,
  ...OFFICIAL,
  ...OFFICIAL_LATE,
  ...SPOKEN_PAIR_IDS,
  ...ASKING,
  ...BOOKING,
  ...BOOKING_LATE,
  ...PRECISION,
  ...DURATION,
  ...DAYPART,
  ...OBJECTS,
])];

/** The mic-scored deck. THE TWELVE HOURS AND THE PHRASE CARDS, and nothing
 *  longer: the whole reason those twelve rows were authored is that a sentence
 *  drill scores the sentence and this lesson's pronunciation content is the
 *  join between a number and a noun. Every id here carries `voiceflash`, which
 *  the batch checks against Postgres rather than against the seed. */
const SPEAK_IDS = [
  ...HOUR_IDS,
  ...QUARTER_IDS,
  'fr.sons.jours-et-mois.067', // midi et demi
  'fr.sons.jours-et-mois.068', // minuit et demi
  'fr.sons.questions.019', // quelle heure est-il ?
  'fr.sons.jours-et-mois.074', // à trois heures
  'fr.sons.jours-et-mois.073', // vers trois heures
  'fr.a1.deplacements.059', // à l'heure
  'fr.a1.deplacements.058', // en retard
];

/** Five lines. Four run in WORD mode, so `heures` is a tile the learner has to
 *  place and a line rebuilt without it is visibly incomplete. That is the one
 *  thing free text cannot do, and it is why this lesson's highest-frequency
 *  error is tested here as well as in the exam.
 *
 *  « Il est huit heures et quart. » draws `le` as a decoy, which is the article
 *  belonging to « moins le quart » and to nothing else in the lesson: the
 *  learner is handed the exact tile the act-3 asymmetry is about and has to
 *  refuse it. The batch prints every mode and every decoy set, and fails if no
 *  target offers `le`. */
const DICTATION_IDS = [
  'fr.a1.heure-et-date.060', // Il est une heure.                          letters
  'fr.a1.temps-et-frequence.001', // Il est huit heures et quart.          words, decoys le/la
  'fr.a1.heure-et-date.064', // Il est cinq heures moins dix.              words, decoys et/le
  'fr.a1.heure-et-date.068', // Il est neuf heures pile.                   words, decoys et/le
  'fr.a1.temps-et-frequence.019', // Le bus arrive à sept heures moins le quart.  words
];

/* ─── The opening scene ────────────────────────────────────────────────────
 *
 * Extracted to a const so every beat can carry its own `size` and `audio`, per
 * the brief. Prose sits at md and the choice and the break at lg; the break
 * body is 32 words.
 *
 * WHY THIS SCENE. The A1 doctrine asks for a moment where the learner is
 * misread as a person rather than misheard, and the brief offers two beats,
 * both about arriving at the wrong time. Neither is the reframe.
 *
 * This one is. Somebody asks the learner the time; the learner has every word
 * and answers « Il est à midi. » The asker does not get their answer, because
 * « à midi » says WHEN SOMETHING HAPPENS and they asked what time it is. The
 * conversation stalls on a preposition.
 *
 * It is the right failure for three reasons. It is the exact error the reframe
 * exists to stop. It is the one the corpus itself produces, because `à` plus an
 * hour outnumbers `il est` plus an hour by better than two to one and a learner
 * reads far more of it than they say. And nobody is upset and nobody is
 * corrected: the other person simply asks again, which is the register a1.01
 * set with the silent baker.                                                  */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'You are outside the station with a coffee. A man about your age stops, taps his bare wrist, and looks at you hopefully.',
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'A stranger',
    fr: frOf('fr.a1.heure-et-date.002'),
    en: enOf('fr.a1.heure-et-date.002'),
    stage: 'He has no watch and no phone in his hand.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-12-scene' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You know this. Your phone says twelve exactly. You have met midi, you have read it in a dozen sentences this week, and you have the verb in full.',
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'Your phone says twelve. What do you say back?',
    options: [
      {
        fr: 'Il est midi.',
        respell: sub('il est midi'),
        en: glossOf('il est midi'),
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
      },
      {
        fr: 'Il est à midi.',
        respell: sub('il est à midi'),
        en: glossOf('il est à midi'),
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
      },
    ],
    followUp: {
      works: 'That is it, and the small word you did not say is the reason it worked.',
      breaks: 'Every word was one you know. One of them turned your answer into a different sentence.',
    },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'One word, and you answered a different question',
    body: 'À midi means at noon, which is when something happens. He did not ask when anything happens. He asked what time it is, and that sentence has no à in it at all.',
    wrong: {
      fr: 'Il est à midi.',
      ipa: ipaOf('il est à midi'),
      respell: sub('il est à midi'),
      en: 'It is at noon, which is an answer about a schedule',
    },
    right: {
      fr: 'Il est midi.',
      ipa: ipaOf('il est midi'),
      respell: sub('il est midi'),
      en: 'It is noon, which is an answer about the clock',
    },
    coach: `${REFRAME} You have read à in front of an hour far more often than you have read il est, so it is the one that arrives first.`,
    // Audio-first: the ear answers before the eye can. `autoplay` is NOT set. It
    // is declared in schema.ts and implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-12-frames' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'Second try',
    fr: 'Il est midi.',
    en: 'It is noon.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'A stranger',
    fr: 'Midi ! Merci, je suis en retard.',
    en: 'Noon! Thanks, I am late.',
    stage: 'He is already walking.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'He got his answer on the second try, and the thing standing between the two tries was one letter.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the time it is ────────────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Answer That Booked Something',
    frSub: 'Il est midi, ou à midi',
    render: 'screens',
    layer: 'core',
    terms: ['nobodyIl', 'heuresStays'],
    say: {
      text: 'Somebody asks you the time and you have every word they need. Watch which one gets in the way.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'Outside the station, with a coffee going cold',
      city: 'Nantes',
      time: 'Tuesday, twelve exactly',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} That is the whole of the next half hour.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end you will have both frames and know which one a question is asking for.`,
    goals: [
      { t: 'Say what time it is', s: 'All twelve hours, plus the two that take no number, in the frame that never changes.' },
      { t: 'Say half past and quarter to', s: 'Four phrases that hang off the back of an hour, one of which carries an article for no reason at all.' },
      { t: 'Read a timetable', s: 'The printed clock runs to twenty-four and says its minutes as a plain number, and it never borrows from the spoken one.' },
      { t: 'Ask, and make an appointment', s: 'Two ways to ask, one of them memorised whole, and the small word that turns a time into a plan.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-frame',
    title: 'The Frame That Never Changes',
    frSub: 'Il est ... heures',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['nobodyIl', 'heuresStays'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-12-frames' },
    say: 'Four cards, and then every hour you will ever say fits into them.',
    cards: [
      {
        label: 'The shape',
        head: 'Two fixed words, then a number',
        fr: frOf('fr.a1.temps-et-frequence.051'),
        sub: `${sub('huit heures')} · it is eight o'clock`,
        body: 'Il est, then the hour, then the word for hours. The first two words never change and the last one never leaves. Only the number in the middle moves.',
      },
      {
        label: 'The subject',
        head: 'The il is nobody',
        fr: frOf('fr.a1.temps-et-frequence.052'),
        sub: `${sub('il est midi')} · it is noon`,
        body: 'You learned il as he, and here it points at nothing. French wants a subject in front of a verb even when there is nothing to put there. The verb itself you already have in full.',
      },
      {
        label: 'The word English drops',
        head: 'Never il est huit',
        fr: 'il est huit heures · il est huit',
        sub: `${sub('huit heures')} · not ${sub('il est huit')}`,
        body: 'English says it is eight and throws the noun away. French cannot. Leave it off and you have not said something wrong, you have stopped in the middle.',
      },
      {
        label: 'One, then the rest',
        head: 'Singular once, plural after',
        fr: frOf('fr.a1.heure-et-date.060'),
        sub: `${sub('une heure')} · one, and the only singular one`,
        body: 'Une heure is one hour so the noun is singular. From two upward it is heures. Midi and minuit take neither, which is act two.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's04-noun',
    title: 'The Word You Will Leave Off',
    frSub: 'Heures ne part jamais',
    layer: 'core',
    terms: ['heuresStays', 'hourFirst'],
    sheetId: 'sheet.a1.12.frame',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-12-frames' },
    say: 'Four rows. The left column is what English hands you and the right is what French wants. Tap either for why.',
    // Three columns, every cell four words or fewer. tapTable is not in
    // ownsLayout(), so this renders in a scrolling page: four rows plus a header
    // is well inside what was walked on a device for a1.08's seven.
    cols: ['English says', 'French says', 'What changed'],
    rows: [
      {
        cells: ["it's eight", 'il est huit heures', 'a noun arrived'],
        say: frOf('fr.a1.temps-et-frequence.051'),
        detail: {
          title: 'The noun is compulsory',
          body: 'English lets the number stand alone and French does not. Il est huit is not a shorter way of saying it, it is an unfinished sentence. A listener waits for the rest rather than correcting you, which is why it survives.',
          say: frOf('fr.a1.temps-et-frequence.051'),
        },
      },
      {
        cells: ["it's one", 'il est une heure', 'singular, just once'],
        say: frOf('fr.a1.heure-et-date.060'),
        detail: {
          title: 'The only singular hour',
          body: 'One hour, so heure has no s. Every other hour on the clock is plural. Said out loud the s changes nothing, so this is a writing habit rather than a sound, and it is the one place the noun looks different.',
          say: frOf('fr.a1.heure-et-date.060'),
        },
      },
      {
        cells: ["it's noon", 'il est midi', 'the noun left'],
        say: frOf('fr.a1.temps-et-frequence.052'),
        detail: {
          title: 'Midi takes nothing at all',
          body: 'No heures and no article. Il est midi heures is not said and neither is il est le midi. Midi and minuit are the two exceptions to the rule on the row above, and they are taught next rather than saved up.',
          say: frOf('fr.a1.temps-et-frequence.052'),
        },
      },
      {
        cells: ['quarter past eight', 'huit heures et quart', 'the hour came first'],
        say: frOf('fr.a1.temps-et-frequence.001'),
        detail: {
          title: 'French builds a time hour-first',
          body: 'English puts the minutes in front and French hangs them off the back. Read a French time left to right and the hour always arrives before you find out what is being done to it. Translating in order is what produces quart huit heures.',
          say: frOf('fr.a1.temps-et-frequence.001'),
        },
      },
    ],
  },

  /* ── Act 2: the twelve ────────────────────────────────────────────────── */

  {
    // The only xl section in the lesson, and correct here for the reason xl
    // exists: every card is ONE French phrase with a short gloss.
    // density.logic.ts caps EVERY string in an xl section at 12 words, which is
    // why the teaching lives in the drill below and this is a hero deck.
    type: 'cardDeck',
    id: 's05-twelve',
    title: 'One Hour Per Screen',
    frSub: 'Les douze heures',
    hint: 'Swipe. Say each one out loud before you move on.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-12-twelve' },
    say: 'Twelve screens, one hour each. Say it out loud before you swipe, every time.',
    cards: THE_TWELVE.map((fr, i) => ({
      label: `${i + 1} of 12`,
      fr,
      sub: sub(fr),
      body: glossOf(fr),
    })),
  },

  {
    type: 'groupDrill',
    id: 's06-liaison',
    title: 'Where The Hour Ends',
    frSub: 'La liaison',
    layer: 'core',
    terms: ['hourFirst'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-12-twelve' },
    // Three groups, no check. The check is s06b, a page of its own, which is the
    // pattern sons.05, sons.06, a1.03, a1.07, a1.08 and a1.11 all use. No size
    // is set here, so this is the plain stacked branch and does NOT own layout.
    say: 'Read down each group. The hour never ends where its spelling says it does, and these are the three ways it moves.',
    groups: [
      {
        // Six of the twelve, and the commonest join in the set.
        label: 'The ones that grow a Z',
        items: ['deux heures', 'trois heures', 'six heures', 'dix heures', 'onze heures', 'douze heures'].map((fr) => ({
          fr,
          itemId: HOUR_IDS[THE_TWELVE.indexOf(fr as typeof THE_TWELVE[number])],
          respell: sub(fr),
          en: glossOf(fr),
        })),
      },
      {
        label: 'The ones that grow a T',
        items: ['sept heures', 'huit heures'].map((fr) => ({
          fr,
          itemId: HOUR_IDS[THE_TWELVE.indexOf(fr as typeof THE_TWELVE[number])],
          respell: sub(fr),
          en: glossOf(fr),
        })),
      },
      {
        // The exception, and the two that simply carry on.
        label: 'One F becomes a V, and three just carry on',
        items: ['neuf heures', 'une heure', 'quatre heures', 'cinq heures'].map((fr) => ({
          fr,
          itemId: HOUR_IDS[THE_TWELVE.indexOf(fr as typeof THE_TWELVE[number])],
          respell: sub(fr),
          en: glossOf(fr),
        })),
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's06b-check',
    title: 'Which One Changes Its Letter?',
    frSub: 'Contrôle',
    layer: 'core',
    terms: ['hourFirst'],
    // A control page: one group, one question, no words. `items: []` is set
    // EXPLICITLY, and no `size`. GroupDrillView reads this shape as
    // `controlOnly` and holds the pager until the learner answers, which is the
    // whole reason a check is worth a page of its own: a check you can swipe
    // past was never a check.
    say: 'One question, and it is the only genuine exception in the twelve.',
    groups: [
      {
        label: 'One question, then on',
        items: [],
        check: {
          q: 'One hour does not just add a sound before heures, it changes a letter it already had. Which?',
          opts: ['six heures', 'neuf heures', 'huit heures', 'trois heures'],
          correct: 1,
          why: 'neuf heures. The f is said as a v, so it is neu-VUHR and not neuf-UHR. Neuf does this before heures and before ans and nowhere else in the language, which is why it is worth knowing by name rather than by rule.',
        },
      },
    ],
  },

  {
    type: 'listening',
    id: 's07-ear',
    title: 'Two That Collide',
    frSub: "À l'oreille",
    layer: 'core',
    questionsInModal: true,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-12-twelve' },
    say: 'One pair here is genuinely hard at speed. Slow the audio down before you answer.',
    lines: [
      { fr: 'deux heures', en: glossOf('deux heures') },
      { fr: 'douze heures', en: glossOf('douze heures') },
      { fr: frOf('fr.a1.heure-et-date.061'), en: enOf('fr.a1.heure-et-date.061') },
      { fr: frOf('fr.a1.heure-et-date.013'), en: enOf('fr.a1.heure-et-date.013') },
    ],
    questions: [
      {
        q: 'Which two of the twelve are hardest to separate at speed?',
        opts: ['une and onze', 'deux and douze', 'six and dix', 'sept and huit'],
        correct: 1,
        why: 'Both end in the same ZUHR and the opening consonant is the whole difference. At speed a d against a d-oo is very little, which is how somebody arrives ten hours early, and it is the one pair worth slowing an audio clip down for.',
      },
      {
        q: 'Line four is neuf heures. What has happened to the f?',
        opts: ['It has gone silent', 'It is said as a v', 'It is said as an f, as usual', 'It has become a z'],
        correct: 1,
        why: 'It is said as a v. This is the one hour that changes a letter it already had rather than growing a new sound, and neuf only does it in front of heures and ans.',
      },
      {
        q: 'Why does every hour in this lesson run into the next word?',
        opts: ['Because French always links words', 'Because heure begins with a vowel sound', 'Because the numbers are short', 'Because it is spoken quickly'],
        correct: 1,
        why: 'Heure opens on a written h that is never said, so the word begins on a vowel and the consonant in front of it has somewhere to go. That is why every one of the twelve links and none of them stands alone.',
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's08-exceptions',
    title: 'The Two With No Number',
    frSub: 'Midi et minuit',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['heuresStays'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-12-twelve' },
    say: 'Two words that break the rule you just learned. They come now rather than later, because they break it in the same place.',
    cards: [
      {
        label: 'Noon',
        head: 'No heures, no article',
        fr: frOf('fr.a1.temps-et-frequence.052'),
        sub: `${sub('midi')} · it is noon`,
        body: 'Not il est midi heures and not il est le midi. Midi is the hour and the noun at once, so nothing else is wanted in front of it or behind it.',
      },
      {
        label: 'Midnight',
        head: 'The same, twelve hours later',
        fr: frOf('fr.a1.temps-et-frequence.053'),
        sub: `${sub('minuit')} · it is midnight`,
        body: 'Minuit works exactly as midi does. Between them they cover both ends of the day, which is why douze heures is almost never a time of day.',
      },
      {
        label: 'The one that reads wrong',
        head: 'Midi is not the afternoon',
        fr: "midi · l'après-midi",
        sub: 'noon · the afternoon',
        body: 'The word for afternoon has midi inside it, so a learner who has just met one misreads the other. Cet après-midi is this afternoon and has nothing to do with twelve.',
      },
      {
        label: 'They still bend',
        head: 'The quarters work on both',
        fr: frOf('fr.a1.heure-et-date.024'),
        sub: 'a quarter past noon',
        body: 'Midi et quart, minuit et demi. Everything act three is about hangs off these two as readily as off a number. Only the noun is missing, not the rest of the clock.',
      },
    ],
  },

  /* ── Act 3: past and to ───────────────────────────────────────────────── */

  {
    type: 'groupDrill',
    id: 's09-quarters',
    title: 'Four Ways To Bend An Hour',
    frSub: 'Et quart, et demie, moins le quart',
    layer: 'core',
    terms: ['noArticleExcept', 'hourFirst'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-12-quarters' },
    say: 'Four phrases. Each one goes on the back of an hour, and one of them carries a word the other three do not.',
    groups: [
      {
        label: 'Past the hour',
        items: [
          { fr: 'et quart', itemId: 'fr.sons.jours-et-mois.064', respell: sub('et quart'), en: glossOf('et quart') },
          { fr: 'et demie', itemId: 'fr.sons.jours-et-mois.063', respell: sub('et demie'), en: glossOf('et demie') },
          { fr: frOf('fr.a1.temps-et-frequence.056'), itemId: 'fr.a1.temps-et-frequence.056', en: enOf('fr.a1.temps-et-frequence.056') },
          { fr: frOf('fr.a1.heure-et-date.032'), itemId: 'fr.a1.heure-et-date.032', en: enOf('fr.a1.heure-et-date.032') },
        ],
      },
      {
        label: 'Before the next one',
        items: [
          { fr: 'moins le quart', itemId: 'fr.sons.jours-et-mois.065', respell: sub('moins le quart'), en: glossOf('moins le quart') },
          { fr: 'moins dix', itemId: 'fr.sons.jours-et-mois.066', respell: sub('moins dix'), en: glossOf('moins dix') },
          { fr: frOf('fr.a1.temps-et-frequence.058'), itemId: 'fr.a1.temps-et-frequence.058', en: enOf('fr.a1.temps-et-frequence.058') },
          { fr: frOf('fr.a1.heure-et-date.064'), itemId: 'fr.a1.heure-et-date.064', en: enOf('fr.a1.heure-et-date.064') },
        ],
      },
      {
        label: 'The same hour, worked both ways',
        items: [
          { fr: frOf('fr.a1.temps-et-frequence.001'), itemId: 'fr.a1.temps-et-frequence.001', en: enOf('fr.a1.temps-et-frequence.001') },
          { fr: frOf('fr.a2.heure-et-date.009'), itemId: 'fr.a2.heure-et-date.009', en: enOf('fr.a2.heure-et-date.009') },
          { fr: frOf('fr.a1.temps-et-frequence.057'), itemId: 'fr.a1.temps-et-frequence.057', en: enOf('fr.a1.temps-et-frequence.057') },
        ],
      },
    ],
  },

  {
    // The closest thing to a clock face that renders. There is NO section type
    // that draws a dial, and an authored field no component reads draws nothing
    // at all, so this is two columns instead: past the hour on the left, before
    // the next one on the right. That is the mental model a face would give,
    // expressed in a component that exists.
    //
    // tapTable is not in ownsLayout(), so this scrolls. Five rows, three
    // columns, every cell four words or fewer.
    type: 'tapTable',
    id: 's10-dial',
    title: 'Past On One Side, To On The Other',
    frSub: 'Les deux moitiés',
    layer: 'core',
    terms: ['noArticleExcept', 'hourFirst'],
    sheetId: 'sheet.a1.12.clock',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-12-quarters' },
    say: 'A clock face has two halves and so does this. Left is past the hour, right is counting down to the next.',
    cols: ['Past the hour', 'Before the next', 'The hour named'],
    rows: [
      {
        cells: ['huit heures et quart', 'huit heures moins le quart', 'eight'],
        say: `${frOf('fr.a1.temps-et-frequence.001')} ${frOf('fr.a2.heure-et-date.009')}`,
        detail: {
          title: 'Quarter past eight, quarter to eight',
          body: 'Both name eight and they are half an hour apart. On the left you have gone past it. On the right you are counting down to it, so the hour named is the one still coming. That is the half a learner reads backwards.',
          say: `${frOf('fr.a1.temps-et-frequence.001')} ${frOf('fr.a2.heure-et-date.009')}`,
        },
      },
      {
        cells: ['cinq heures et demie', 'cinq heures moins dix', 'five'],
        say: `${frOf('fr.a1.temps-et-frequence.057')} ${frOf('fr.a1.heure-et-date.064')}`,
        detail: {
          title: 'Any number works on the right',
          body: 'Moins takes a plain minute count as readily as it takes the quarter. Moins dix, moins vingt, moins cinq. The left half is the other way about: past the hour you have et quart and et demie and then you say the minutes plainly.',
          say: frOf('fr.a1.heure-et-date.064'),
        },
      },
      {
        cells: ['et quart', 'moins le quart', 'the article'],
        say: 'et quart, moins le quart',
        detail: {
          title: 'One of the four carries le',
          body: 'Et quart has nothing in front of the quarter. Moins le quart has an article, and it is the only one of the four that does. There is no rule behind it, so learn it as one piece of sound.',
          say: 'et quart, moins le quart',
        },
      },
      {
        cells: ['midi et quart', 'midi moins le quart', 'noon bends too'],
        say: frOf('fr.a1.heure-et-date.024'),
        detail: {
          title: 'The exceptions take both halves',
          body: 'Midi and minuit have no number and no noun and they still bend exactly like an hour. Only the word for hours is missing; everything on this table works on them unchanged.',
          say: frOf('fr.a1.heure-et-date.024'),
        },
      },
      {
        cells: ['half past', 'never moins la demie', 'one direction only'],
        say: 'et demie',
        detail: {
          title: 'The half only goes one way',
          body: 'Half past exists and half to does not. Thirty minutes before the hour is the same moment as thirty minutes after the one before it, so French says the earlier hour and et demie. There is no moins la demie to learn.',
          say: 'et demie',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's11-article',
    title: 'The One That Carries Le',
    frSub: 'Moins LE quart',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['noArticleExcept'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-12-quarters' },
    say: 'Four cards on one small word. It is arbitrary, and that is exactly why it needs a screen.',
    cards: [
      {
        label: 'Three without',
        head: 'Nothing in front of the number',
        fr: 'et quart · et demie · moins dix',
        sub: `${sub('et quart')} · ${sub('et demie')} · ${sub('moins dix')}`,
        body: 'Three of the four phrases put nothing between the joining word and what follows it. Read them together and the shape looks completely regular.',
      },
      {
        label: 'One with',
        head: 'And then this',
        fr: 'moins le quart',
        sub: `${sub('moins le quart')} · ${glossOf('moins le quart')}`,
        body: 'An article, in exactly one of the four, and no reason behind it. It is a fixed phrase. Say the three words as one piece and the question never arises.',
      },
      {
        label: 'What you will write',
        head: 'The regularised version',
        fr: 'moins le quart · moins quart',
        sub: `${sub('moins le quart')} · not ${sub('moins quart')}`,
        body: 'A learner who has met et quart first generalises from it and drops the article. That is the most common written error in this lesson and nothing in speech corrects it, because it is a short unstressed word in the middle of a phrase.',
      },
      {
        label: 'The tell',
        head: 'Quart is a noun here',
        fr: frOf('fr.sons.jours-et-mois.050'),
        sub: `${enOf('fr.sons.jours-et-mois.050')}`,
        body: 'Le quart is a thing, a quarter of something, and you have met it in the numbers unit. Moins le quart is minus the quarter. That is not a rule you can apply anywhere else, but it does make the le stop looking random.',
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's11b-check',
    title: 'With, Or Without?',
    frSub: 'Contrôle',
    layer: 'core',
    terms: ['noArticleExcept'],
    say: 'One question, and it is the one this act exists for.',
    groups: [
      {
        label: 'One question, then on',
        items: [],
        check: {
          q: 'It is 7:45 and you are telling somebody the time. Which is right?',
          opts: [
            'Il est huit heures moins quart.',
            'Il est huit heures moins le quart.',
            'Il est sept heures moins le quart.',
            'Il est huit heures et quart.',
          ],
          correct: 1,
          why: 'Quarter to eight, so the hour named is the one coming, and moins le quart is the one phrase of the four that carries an article. The third option is a quarter to seven, which is an hour earlier.',
        },
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's12-demi',
    title: 'Demie, Or Demi',
    frSub: "L'accord de demi",
    layer: 'core',
    terms: ['demiAgrees'],
    sheetId: 'sheet.a1.12.clock',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-12-quarters' },
    say: 'Four rows, and nothing here is audible. This one lives entirely on the page.',
    cols: ['After', 'Written', 'Why'],
    rows: [
      {
        cells: ['une heure', 'et demie', 'heure is feminine'],
        say: frOf('fr.a1.heure-et-date.032'),
        detail: {
          title: 'The e is there after an hour',
          body: 'Half agrees with the thing it is half of, and that thing is heure. So after any numbered hour it is written demie, with an e. Eleven of the twelve take this form, so it is the one you will write most.',
          say: frOf('fr.a1.heure-et-date.032'),
        },
      },
      {
        cells: ['midi', 'et demi', 'midi is masculine'],
        say: frOf('fr.a1.heure-et-date.036'),
        detail: {
          title: 'The e goes after noon',
          body: 'Midi is masculine, so the e comes off. This is the trap: midi looks like it should take the feminine because every other time expression in the lesson does, and it does not. Nothing is audible, which is why it survives for years.',
          say: frOf('fr.a1.heure-et-date.036'),
        },
      },
      {
        cells: ['minuit', 'et demi', 'minuit is masculine'],
        say: frOf('fr.a1.heure-et-date.037'),
        detail: {
          title: 'Midnight behaves like noon',
          body: 'Minuit takes the same masculine form, for the same reason and with the same silence. Learn the pair together rather than one at a time, because they are the only two words on the clock that do this.',
          say: frOf('fr.a1.heure-et-date.037'),
        },
      },
      {
        cells: ['six ans', 'et demi', 'not a clock at all'],
        say: frOf('fr.a1.ecole.263'),
        detail: {
          title: 'The same rule off the clock',
          body: 'An is masculine, so six ans et demi has no e either. That is worth seeing, because it shows this is agreement doing an ordinary job rather than a quirk of telling the time, and it is the same decision every time.',
          say: frOf('fr.a1.ecole.263'),
        },
      },
    ],
  },

  /* ── Act 4: two clocks ────────────────────────────────────────────────── */

  {
    // THE mission of act 4, and the layout a1-12-heure.test.ts asserts. The two
    // registers on ONE screen, in two columns, so the learner sees the same
    // moment written twice rather than meeting the systems four screens apart.
    // Split across screens they merge, and the merged form is the error.
    //
    // Every row's left cell is one of this lesson's four AUTHORED sentences and
    // every right cell is the shipped sentence it was written against, so the
    // only thing that moves across a row is the clock.
    type: 'tapTable',
    id: 's13-clocks',
    title: 'The Same Moment, Twice',
    frSub: 'Deux horloges',
    layer: 'core',
    terms: ['twoClocks'],
    sheetId: 'sheet.a1.12.clock',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-12-registers' },
    say: 'Read across, not down. Each row is one moment said two ways, and the only thing that changes is which clock you are on.',
    cols: ['What you say', 'What is printed', 'The moment'],
    rows: CLOCK_PAIRS.map(([spoken, official], i) => ({
      cells: [
        ['huit heures et demie', 'quatre heures dix', 'six heures du soir', "deux heures de l'après-midi"][i],
        ['vingt heures trente', 'seize heures dix', 'dix-huit heures', 'quatorze heures'][i],
        ['20:30', '16:10', '18:00', '14:00'][i],
      ],
      say: `${frOf(spoken)} ${frOf(official)}`,
      detail: {
        title: ['At the cinema', 'On the departure board', 'On the shop door', 'In the diary'][i],
        body: `${frOf(spoken)} is what you say. ${frOf(official)} is what is printed. Same moment, two registers. The printed one never takes et demie and the spoken one never runs past twelve.`,
        say: `${frOf(spoken)} ${frOf(official)}`,
      },
    })),
  },

  {
    type: 'cardDeck',
    id: 's14-official',
    title: 'Reading The Printed One',
    frSub: "L'heure officielle",
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['twoClocks'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-12-registers' },
    say: 'Four cards, and then a timetable stops being a wall of numbers.',
    cards: [
      {
        label: 'The minutes',
        head: 'Said as a plain number',
        fr: frOf('fr.a1.nombres.057'),
        sub: `${sub('vingt heures trente')} · eight thirty in the evening`,
        body: 'Twenty hours, thirty. No et, no quart, no demie. The printed clock says the minutes the way you would read them off a display, and you already own every number it needs.',
      },
      {
        label: 'The hours',
        head: 'Thirteen to twenty-four',
        fr: frOf('fr.a1.heure-et-date.091'),
        sub: `${sub('quatorze heures')} · two in the afternoon`,
        body: 'Past midday the printed clock keeps counting. Quatorze is fourteen, which is two. Your numbers unit already gave you every one of these, so this is arithmetic rather than vocabulary.',
      },
      {
        label: 'Where you meet it',
        head: 'Anything with a schedule',
        fr: frOf('fr.a1.nombres.064'),
        sub: 'from nine to six in the evening',
        body: 'Timetables, cinema listings, opening hours, tickets, appointment cards, official invitations. If it is printed rather than spoken, expect this one. Nobody says it in a café.',
      },
      {
        label: 'Which half of the day',
        head: 'Only the spoken clock needs it',
        fr: frOf('fr.a1.heure-et-date.067'),
        sub: 'eight in the evening',
        body: 'The spoken clock has twelve hours, so it adds du matin, de l\'après-midi or du soir when it matters. The printed one has twenty-four and never needs to say which.',
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's15-nomix',
    // `swipe` and `size` are not decoration. MissionSection renders
    // commonErrors as its own swipe deck ONLY when `swipe` is set; without it
    // the section falls through to a path that drew a BLANK screen on sons.08
    // m22 and a1.01 m5.
    swipe: true,
    size: 'lg',
    title: 'Six Sentences You Will Produce',
    frSub: 'Six pièges',
    layer: 'core',
    terms: ['twoClocks', 'demiAgrees', 'heuresStays'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-12-traps' },
    say: `${REFRAME} Six sentences an English speaker produces in their first month, one per screen.`,
    errors: [
      {
        wrong: 'Saying « Il est huit » for it is eight.',
        right: 'Saying « Il est huit heures » for it is eight.',
        why: 'English throws the noun away and French cannot. This is the commonest error in the lesson and it is invisible to the ear: somebody who leaves the noun off has not said something wrong, they have stopped in the middle.',
      },
      {
        wrong: 'Saying « Il est huit heures moins quart ».',
        right: 'Saying « Il est huit heures moins le quart ».',
        why: 'Three of the four phrases take no article and this one does. There is no rule behind it, so it cannot be reasoned back: it is a fixed phrase and the fix is to say all three words as one piece rather than assembling them.',
      },
      {
        wrong: 'Saying « Le film commence à vingt heures et demie ».',
        right: 'Saying « Le film commence à vingt heures trente ».',
        why: 'Half of each clock. Past twelve you are on the printed one, and it says its minutes as a plain number. This is the sentence that marks a beginner in a station.',
      },
      {
        wrong: 'Writing « Il est midi et demie ».',
        right: 'Writing « Il est midi et demi ».',
        why: 'Midi is masculine, so the half loses its e. Midi looks like it should take the feminine because every other time expression around it does. Nothing is audible here, which is why it lives for years in the writing of people who speak well.',
      },
      {
        wrong: 'Answering « Il est à huit heures » when asked the time.',
        right: 'Answering « Il est huit heures » when asked the time.',
        why: `${REFRAME} À plus an hour says when something happens, so this answers a question nobody asked. You read à in front of an hour far more often than il est, so it arrives first.`,
      },
      {
        wrong: 'Saying « Il est midi heures ».',
        right: 'Saying « Il est midi ».',
        why: 'Midi is already the hour and the noun together, so nothing goes after it and nothing goes in front. This one comes from applying the rule you just learned correctly, which is why it is worth naming rather than assuming it away.',
      },
    ],
  },

  /* ── Act 5: asking, and booking ───────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's16-asking',
    title: 'Two Ways To Ask',
    frSub: 'Poser la question',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['frozenQuestion'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-12-asking' },
    say: 'One of these you memorise whole and one you can see inside. Both are worth having on your first day.',
    cards: [
      {
        label: 'The ordinary one',
        head: 'Take it whole',
        fr: frOf('fr.sons.questions.019'),
        sub: `${sub('quelle heure est-il')} · what time is it`,
        body: 'Four words, one shape, no parts to assemble. The machinery that makes this work is two units further on, so learn it the way you learned bonjour and come back for the grammar later.',
      },
      {
        label: 'The transparent one',
        head: 'This one you can see inside',
        fr: frOf('fr.a1.heure-et-date.003'),
        sub: `${sub("vous avez l'heure")} · do you have the time`,
        body: 'The verb you met a few lessons ago, with the hour as its object, and a rising voice at the end. Nothing here is hidden, and it is just as ordinary in the street as the first one.',
      },
      {
        label: 'Who you are asking',
        head: 'Tu, or vous',
        fr: frOf('fr.a1.heure-et-date.004'),
        sub: 'the same question, to somebody you know',
        body: 'Vous avez l\'heure to a stranger, tu as l\'heure to a friend. Quelle heure est-il carries no register at all, which makes it the safe one when you are not sure.',
      },
      {
        label: 'Asking about a plan',
        head: 'À quelle heure, for when',
        fr: frOf('fr.sons.questions.020'),
        sub: `${enOf('fr.sons.questions.020')}`,
        body: 'Put à in front and you have stopped asking the time and started asking about a schedule. À quelle heure ouvre le musée. That is the next mission, and the à is doing the same job it does there.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's17-booking',
    title: 'À Books It',
    frSub: 'Prendre rendez-vous',
    layer: 'core',
    terms: ['frozenQuestion'],
    sheetId: 'sheet.a1.12.frame',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-12-asking' },
    say: `${REFRAME} Five rows, and every one of them is about when rather than about now.`,
    cols: ['When you want', 'What you say', 'How exact'],
    rows: [
      {
        cells: ['a fixed time', 'à dix heures', 'exact'],
        say: frOf('fr.a1.heure-et-date.077'),
        detail: {
          title: 'À plus the hour, and nothing else',
          body: 'One small word turns a time into a plan. Nous avons rendez-vous à dix heures. The hour behind it is built exactly as it was in act one, so there is no second system to learn here, only a word in front.',
          say: frOf('fr.a1.heure-et-date.077'),
        },
      },
      {
        cells: ['roughly then', 'vers trois heures', 'approximate'],
        say: frOf('fr.sons.jours-et-mois.073'),
        detail: {
          title: 'Vers, for around',
          body: 'Vers trois heures is around three, and it is what you say when you do not want to promise a minute. It replaces à rather than joining it, so there is never a vers à.',
          say: frOf('fr.sons.jours-et-mois.073'),
        },
      },
      {
        cells: ['exactly then', 'à neuf heures pile', 'to the minute'],
        say: frOf('fr.a1.heure-et-date.068'),
        detail: {
          title: 'Pile, and précises',
          body: 'Pile goes after the hour and means on the dot. Précises does the same job in writing and on an invitation: à quatorze heures précises. Both say the time is not a suggestion.',
          say: frOf('fr.a1.nombres.074'),
        },
      },
      {
        cells: ['you got there', "à l'heure", 'on time'],
        say: frOf('fr.a1.deplacements.059'),
        detail: {
          title: "À l'heure, and en retard",
          body: 'Être à l\'heure is to be on time and être en retard is to be late. These are the two words attached to every appointment you make, and the second one is the reason the first matters.',
          say: `${frOf('fr.a1.deplacements.059')} ${frOf('fr.a1.deplacements.058')}`,
        },
      },
      {
        cells: ['a length of time', 'dure deux heures', 'not a clock'],
        say: frOf('fr.a1.heure-et-date.094'),
        detail: {
          title: 'The same word, a different question',
          body: 'Le cours dure deux heures is how long it lasts, not when it starts. Same noun, and the sentence is answering a different question entirely. Une heure, un quart d\'heure and une demi-heure are all lengths rather than times.',
          say: frOf('fr.a1.heure-et-date.081'),
        },
      },
    ],
  },

  {
    type: 'useCases',
    id: 's18-precision',
    title: 'Where You Will Say This',
    frSub: 'Dans la vraie vie',
    layer: 'core',
    terms: ['frozenQuestion', 'twoClocks'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-12-asking' },
    say: 'Five situations you will be in this month, and the line each one wants.',
    cases: [
      { situation: 'Outside a shop with the shutters half down', fr: frOf('fr.sons.expressions-utiles.154'), en: enOf('fr.sons.expressions-utiles.154') },
      { situation: 'Outside a museum, working out whether to wait', fr: frOf('fr.sons.expressions-utiles.153'), en: enOf('fr.sons.expressions-utiles.153') },
      { situation: 'Arriving at a reception desk with a card in your hand', fr: frOf('fr.a1.salutations.308'), en: enOf('fr.a1.salutations.308') },
      { situation: 'Agreeing a time in a message, off a listing you just read', fr: frOf('fr.a1.expressions-utiles.019'), en: enOf('fr.a1.expressions-utiles.019') },
      { situation: 'Somebody stops you in the street with no watch on', fr: frOf('fr.a1.heure-et-date.002'), en: enOf('fr.a1.heure-et-date.002') },
    ],
  },

  {
    type: 'reading',
    id: 's19-reading',
    title: 'The Card In The Cinema Window',
    frSub: 'Le programme',
    layer: 'core',
    terms: ['twoClocks', 'frozenQuestion'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a
    // reading section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions. a1.01 shipped five entries down the other path.
    questionsInModal: true,
    say: 'Every time in this passage is on one clock or the other. Tap any underlined phrase.',
    // Paul's A1 rule, set on a1.01's passage: anything not inside « » is in
    // English. ONE BLOCK, NO LINE BREAKS. See the header.
    text:
      'The card taped inside the cinema window is printed, so every time on it runs past twelve. '
      + '« Le film commence à vingt heures trente. » '
      + 'Under it somebody has written the week\'s other showing in biro, and the shop next door has its own notice up. '
      + '« Le magasin ferme à dix-huit heures. » '
      + 'You are standing there working out whether you have time to eat first, and the man behind the counter reads the same card out loud to somebody on the phone. '
      + 'He does not say what is printed on it. '
      + '« Le film commence à huit heures et demie. » '
      + 'Nothing on the card changed and nothing he said was different, which is the part worth noticing: one clock is what gets printed and the other is what gets spoken, and a French speaker moves between them without thinking about it. '
      + 'A woman comes out of the shop, sees you reading, and asks the one question everybody asks. '
      + '« Excusez-moi, quelle heure est-il ? » '
      + 'You look at your phone and you have the answer, and it is not the one on the card.',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words (MAX_GLOSS_WORDS).
    // LONGEST MATCH WINS, so an entry can be shadowed out of existence by a
    // longer one that contains it: a1.08 shipped « le mardi » and « mercredi »
    // as entries that could never underline anything, because every occurrence
    // sat inside a longer key. Checked here by keeping every key to a span that
    // is not contained in another key.
    glossary: [
      { word: 'à vingt heures trente', en: 'at twenty thirty', note: 'The printed clock. Past twelve the hours keep counting, and the minutes are said as a plain number with no et.' },
      // FOUR WORDS, not five. This was « à huit heures et demie » and it could
      // never have underlined anything: gloss.logic.ts caps a key at
      // MAX_GLOSS_WORDS, which is four, so a five-word entry is a valid object
      // that draws nothing. Caught by gloss.logic.test.ts, which runs the real
      // segmentSentence over the whole seed, and not by anything in this file.
      // The à is dropped rather than the demie, because the à is already glossed
      // by the row above it and the half is what this entry is for.
      { word: 'huit heures et demie', en: 'half past eight', note: 'The spoken clock, and the same moment. Twelve hours, and the half hangs off the back of the hour.' },
      { word: 'à dix-huit heures', en: 'at six in the evening', note: 'Eighteen hundred. On a shop door, because a printed notice never uses the spoken clock.' },
      { word: 'quelle heure est-il', en: 'what time is it', note: 'The frozen question. Four words, taken whole, and the grammar behind it is two units away.' },
      { word: 'le film commence', en: 'the film starts', note: 'Read this as a whole phrase. The verb behind it is not one you have been given yet.' },
    ],
    questions: [
      { q: 'The card and the man behind the counter give the same time. Why do they not sound the same?', a: 'They are on different clocks. The card is printed so it uses the twenty-four hour system and says vingt heures trente. He is speaking, so he uses the twelve hour one and says huit heures et demie. Neither is more correct and a French speaker moves between them without noticing.' },
      { q: 'The shop notice says dix-huit heures. What would somebody say out loud instead?', a: 'Six heures du soir. The spoken clock only has twelve hours, so it has to say which half of the day it means. The printed one has twenty-four and never needs to.' },
      { q: 'Why is « vingt heures et demie » not in this passage anywhere?', a: 'Because it takes half of each clock and neither system allows it. Past twelve you are on the printed clock, and the printed clock says its minutes as a plain number: vingt heures trente.' },
    ],
  },

  /* ── Act 6: say it, spell it, use it ──────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's20-words',
    title: 'The Clock, Banked',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['heuresStays', 'noArticleExcept'],
    sheetId: 'sheet.a1.12.clock',
    say: 'Three decks. The twelve hours, the four phrases that bend them, and the words around an appointment.',
    themes: [
      {
        title: 'the twelve hours',
        cards: THE_TWELVE.map((fr) => ({ fr, sub: sub(fr), en: glossOf(fr) })),
      },
      {
        title: 'bending an hour',
        cards: [
          { fr: 'et quart', sub: sub('et quart'), en: glossOf('et quart') },
          { fr: 'et demie', sub: sub('et demie'), en: glossOf('et demie') },
          { fr: 'moins le quart', sub: sub('moins le quart'), en: glossOf('moins le quart') },
          { fr: 'moins dix', sub: sub('moins dix'), en: glossOf('moins dix') },
          { fr: 'midi et demi', sub: sub('midi et demi'), en: glossOf('midi et demi') },
          { fr: 'minuit et demi', sub: sub('minuit et demi'), en: glossOf('minuit et demi') },
        ],
      },
      {
        title: 'making a plan',
        cards: [
          { fr: 'à trois heures', sub: sub('à trois heures'), en: glossOf('à trois heures') },
          { fr: 'vers trois heures', sub: sub('vers trois heures'), en: glossOf('vers trois heures') },
          { fr: 'le rendez-vous', sub: sub('le rendez-vous'), en: glossOf('le rendez-vous') },
          { fr: "à l'heure", sub: sub("à l'heure"), en: glossOf("à l'heure") },
          { fr: 'en retard', sub: sub('en retard'), en: glossOf('en retard') },
          { fr: 'pile', sub: sub('pile'), en: glossOf('pile') },
        ],
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's21-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Say the French out loud, noun and all, before you flip.',
    cards: [
      ...THE_TWELVE.map((fr) => ({ front: glossOf(fr), back: fr, say: fr })),
      { front: 'it is eight o\'clock', back: frOf('fr.a1.temps-et-frequence.051'), say: frOf('fr.a1.temps-et-frequence.051') },
      { front: 'it is noon', back: frOf('fr.a1.temps-et-frequence.052'), say: frOf('fr.a1.temps-et-frequence.052') },
      { front: 'it is midnight', back: frOf('fr.a1.temps-et-frequence.053'), say: frOf('fr.a1.temps-et-frequence.053') },
      { front: 'quarter past', back: 'et quart', say: 'et quart' },
      { front: 'half past', back: 'et demie', say: 'et demie' },
      { front: 'quarter to', back: 'moins le quart', say: 'moins le quart' },
      { front: 'ten to', back: 'moins dix', say: 'moins dix' },
      { front: 'it is half past eight', back: frOf('fr.a1.heure-et-date.032'), say: frOf('fr.a1.heure-et-date.032') },
      { front: 'it is a quarter to eight', back: frOf('fr.a2.heure-et-date.009'), say: frOf('fr.a2.heure-et-date.009') },
      { front: 'it is half past noon (watch the ending)', back: frOf('fr.a1.heure-et-date.036'), say: frOf('fr.a1.heure-et-date.036') },
      { front: 'what time is it?', back: frOf('fr.sons.questions.019'), say: frOf('fr.sons.questions.019') },
      { front: 'do you have the time?', back: frOf('fr.a1.heure-et-date.003'), say: frOf('fr.a1.heure-et-date.003') },
      { front: 'at what time?', back: frOf('fr.sons.questions.020'), say: frOf('fr.sons.questions.020') },
      { front: 'we have an appointment at ten', back: frOf('fr.a1.heure-et-date.077'), say: frOf('fr.a1.heure-et-date.077') },
      { front: 'the film starts at 20:30 (printed)', back: frOf('fr.a1.nombres.057'), say: frOf('fr.a1.nombres.057') },
      { front: 'the film starts at half past eight (spoken)', back: frOf('fr.a1.heure-et-date.113'), say: frOf('fr.a1.heure-et-date.113') },
      { front: 'on time', back: "à l'heure", say: "à l'heure" },
      { front: 'late', back: 'en retard', say: 'en retard' },
      { front: 'around three o\'clock', back: 'vers trois heures', say: 'vers trois heures' },
      { front: 'a watch', back: frOf('fr.a1.objets.012'), say: frOf('fr.a1.objets.012') },
    ],
  },

  {
    type: 'dictation',
    id: 's22-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // Both modes, both measured. See the header: four of the five run in word
    // mode, so `heures` is a tile the learner must place, and one of them hands
    // them a `le` tile they have to refuse. That is this lesson's own question
    // asked in the one place free text cannot ask it.
    say: 'Five lines. Four of them hand you a word you must decide not to use, which is half the exercise.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's23-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // The only practice mission in the lesson, deliberately. `practice.skill` is
    // authored and read by no component: PracticeVFView takes itemIds and
    // nothing else, so a read mission and a speak mission render identically.
    // sons.06 ships two practice sections doing the same job and it reads as a
    // repeat.
    //
    // The twelve hours first, because the JOIN between the number and the noun
    // is what the mic is listening for and it is the only thing in this lesson
    // a learner can get wrong in a way that stops them being understood.
    say: 'The twelve hours, then the phrases that bend them. The join between the number and the noun is what the mic is listening for.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's24-scenario',
    title: 'Booking It',
    frSub: 'On se voit à quelle heure ?',
    layer: 'core',
    terms: ['twoClocks', 'frozenQuestion'],
    say: 'One exchange, and you hold up your half. Every turn turns on which clock the other person is using.',
    setting: 'A message thread with Yannick, working out when to meet for a film he has read the listing for and you have not.',
    // Every turn carries `userEn` and at least two `alts`, which
    // scenario.logic.ts now requires of the whole seed. A reveal with no
    // translation shows the learner the one sentence comprehension matters on
    // and asks them to read it; a single accepted answer makes a conversation a
    // cloze test. `stt` scores against all of them.
    //
    // Apostrophes are straight throughout. The suite fails a conversation that
    // mixes ' and , in one bubble stack.
    turns: [
      {
        ai: 'Salut ! Le film commence à vingt heures trente. Ça te va ?',
        en: 'Hi! The film starts at 20:30. Does that work for you?',
        user: 'Vingt heures trente, donc huit heures et demie ?',
        userEn: 'Twenty thirty, so half past eight?',
        alts: [
          { fr: 'Huit heures et demie, oui, ça me va.', en: 'Half past eight, yes, that works for me.' },
          { fr: 'Donc à huit heures et demie ?', en: 'So at half past eight?' },
        ],
      },
      {
        ai: 'Oui, c\'est ça. On se retrouve devant à huit heures et quart ?',
        en: 'Yes, that is it. Shall we meet outside at a quarter past eight?',
        user: 'Huit heures et quart, parfait. Je serai à l\'heure.',
        userEn: 'A quarter past eight, perfect. I will be on time.',
        alts: [
          { fr: 'Oui, à huit heures et quart devant le cinéma.', en: 'Yes, at a quarter past eight outside the cinema.' },
          { fr: 'Parfait, à huit heures et quart.', en: 'Perfect, at a quarter past eight.' },
        ],
      },
      {
        ai: 'Super. Et le magasin à côté, il ferme à dix-huit heures je crois.',
        en: 'Great. And the shop next door closes at 18:00 I think.',
        user: 'Six heures du soir, donc c\'est fermé. Tant pis.',
        userEn: 'Six in the evening, so it is closed. Never mind.',
        alts: [
          { fr: 'À six heures du soir ? Alors c\'est fermé.', en: 'At six in the evening? Then it is closed.' },
          { fr: 'Six heures, oui. On ira une autre fois.', en: 'Six, yes. We will go another time.' },
        ],
      },
      {
        ai: 'Exactement. Tu as l\'heure là, au fait ? Ma montre est arrêtée.',
        en: 'Exactly. Do you have the time right now, by the way? My watch has stopped.',
        user: 'Il est sept heures moins le quart.',
        userEn: 'It is a quarter to seven.',
        alts: [
          { fr: 'Oui, il est sept heures moins le quart.', en: 'Yes, it is a quarter to seven.' },
          { fr: 'Il est presque sept heures.', en: 'It is almost seven.' },
        ],
      },
      {
        ai: 'Ah, on a le temps alors. À tout à l\'heure !',
        en: 'Ah, we have time then. See you shortly!',
        user: 'À tout à l\'heure. Je ne serai pas en retard.',
        userEn: 'See you shortly. I will not be late.',
        alts: [
          { fr: 'À huit heures et quart, alors.', en: 'At a quarter past eight, then.' },
          { fr: 'Parfait, à tout à l\'heure.', en: 'Perfect, see you shortly.' },
        ],
      },
    ],
  },

  /* ── Act 7: prove it ──────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's25-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['heuresStays', 'twoClocks', 'noArticleExcept'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'Somebody stops you in the street. It is eight.', back: `Il est huit heures. ${REFRAME}`, say: frOf('fr.a1.temps-et-frequence.051') },
      { front: 'Why is « Il est huit » not an answer?', back: 'The noun is compulsory in French. Without it the sentence has stopped rather than finished.', say: frOf('fr.a1.temps-et-frequence.051') },
      { front: 'It is 12:00 exactly.', back: 'Il est midi. No heures and no article, because midi is both at once.', say: frOf('fr.a1.temps-et-frequence.052') },
      { front: 'Which hour changes a letter before heures?', back: 'neuf heures. The f is said as a v, and only before heures and ans.', say: 'neuf heures' },
      { front: 'The two hours easiest to confuse at speed.', back: 'deux heures and douze heures. Same ending, one consonant apart.', say: 'deux heures, douze heures' },
      { front: 'It is 8:15 and you are telling somebody.', back: 'Il est huit heures et quart. No article on this one.', say: frOf('fr.a1.temps-et-frequence.001') },
      { front: 'It is 7:45 and you are telling somebody.', back: 'Il est huit heures moins le quart. The hour named is the one coming, and this one takes le.', say: frOf('fr.a2.heure-et-date.009') },
      { front: 'You wrote « moins quart ». What is missing?', back: 'The article. Moins le quart is the only one of the four phrases that carries one, and there is no rule behind it.', say: 'moins le quart' },
      { front: 'A listing reads 20:30. What is printed on it?', back: 'Le film commence à vingt heures trente. Minutes as a plain number, and never et demie.', say: frOf('fr.a1.nombres.057') },
      { front: 'You say the same showing out loud.', back: 'Le film commence à huit heures et demie. Twelve hours, and the half on the back.', say: frOf('fr.a1.heure-et-date.113') },
      { front: 'Why is « vingt heures et demie » wrong?', back: 'It takes half of each clock. Past twelve you are on the printed one and it says its minutes plainly.', say: frOf('fr.a1.nombres.057') },
      { front: 'Half past noon, written down.', back: 'Il est midi et demi. Midi is masculine, so the half loses its e.', say: frOf('fr.a1.heure-et-date.036') },
      { front: 'Half past eight, written down.', back: 'Il est huit heures et demie. Heure is feminine, so the e is there.', say: frOf('fr.a1.heure-et-date.032') },
      { front: 'You want to ask a stranger the time.', back: 'Quelle heure est-il ? Four words, taken whole, no parts to assemble.', say: frOf('fr.sons.questions.019') },
      { front: 'The other way to ask, the one you can see inside.', back: "Vous avez l'heure ? The verb from a1.07, with the hour as its object.", say: frOf('fr.a1.heure-et-date.003') },
      { front: 'You are arranging to meet at ten.', back: `Nous avons rendez-vous à dix heures. ${REFRAME}`, say: frOf('fr.a1.heure-et-date.077') },
      { front: 'You do not want to promise a minute.', back: 'Vers trois heures. Around three, and it replaces à rather than joining it.', say: frOf('fr.sons.jours-et-mois.073') },
      { front: 'The class lasts an hour. Is that a time?', back: 'La classe dure une heure. Same noun, and it answers how long rather than when.', say: frOf('fr.a1.heure-et-date.081') },
    ],
  },

  {
    type: 'progressCheck',
    id: 's26-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to be
    // wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched one small word turn an answer into a schedule, learned the frame that every hour drops into and the noun English throws away, and met all twelve hours as sounds rather than as numbers, including the one that changes a letter. You have the four phrases that bend an hour and you know which of them carries an article for no reason at all. You have seen the same moment written on both clocks, side by side on one screen, which is the only place the rule against mixing them can actually be seen. And you can ask, two ways, and turn a time into a plan. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's27-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    rounds: [
      {
        id: 'r1-the-frame',
        label: 'The frame',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round, and
        // the batch, the merge and the test all assert it.
        targets: ['err-dropped-heures', 'err-welded-frames'],
        say: 'The shape every hour drops into.',
        questions: [
          {
            q: 'Somebody asks you the time and it is eight exactly. What do you say?',
            format: 'mcq',
            opts: ['Il est huit.', 'Il est à huit heures.', 'Il est huit heure.', 'Il est huit heures.'],
            correct: 3,
            why: 'The noun is compulsory and it is plural above one. The first option stops in the middle, the third answers a question about a schedule, and the fourth is the singular that only une heure takes.',
            ref: 's03-frame',
          },
          {
            q: 'Fix this. « Il est sept. »',
            format: 'errorSpot',
            accept: ['Il est sept heures.', 'il est sept heures', 'sept heures'],
            answer: 'Il est sept heures.',
            why: 'English throws the noun away and French cannot. Nothing about this sounds wrong, which is the problem: a listener waits for the rest of the sentence rather than correcting you.',
            ref: 's04-noun',
          },
          {
            q: 'What is the il in « Il est midi » pointing at?',
            format: 'mcq',
            opts: ['The clock', 'The day', 'Nothing at all', 'The person speaking'],
            correct: 2,
            why: 'Nothing. French wants a subject in front of a verb even where there is nothing to put there, so il holds the seat. The verb is the one you already conjugate in full, so only the subject is unusual.',
            ref: 's03-frame',
          },
          {
            q: 'Which of these is the only hour written in the singular?',
            format: 'mcq',
            opts: ['une heure', 'deux heures', 'onze heures', 'midi'],
            correct: 0,
            why: 'Une heure is one hour, so the noun has no s. Everything from two upward is plural. Midi is not an answer to this because it takes no noun at all.',
            ref: 's04-noun',
          },
        ],
      },
      {
        id: 'r2-the-hours',
        label: 'The twelve',
        targets: ['err-wrong-liaison', 'err-dropped-heures'],
        say: 'The hours, by ear.',
        questions: [
          {
            q: 'Listen. Which hour is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'neuf heures' },
            opts: ['neuf heures', 'nouvelle heure', 'neuve heure', 'nef heures'],
            correct: 0,
            why: 'Neuf heures, and the f is said as a v, so it comes out as neu-VUHR. That is why it can be mistaken for a word ending in -ve, and it is the only hour in the twelve that changes a letter it already had.',
            ref: 's06-liaison',
          },
          {
            q: 'Listen. Which hour is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'douze heures' },
            opts: ['deux heures', 'douze heures', 'dix heures', 'onze heures'],
            correct: 1,
            why: 'Douze heures. It and deux heures end in the same ZUHR and the opening is the whole difference, which is the pair that genuinely collides at speed and the reason to slow a clip down before answering.',
            ref: 's07-ear',
          },
          {
            q: 'Why does every hour in this lesson run straight into the next word?',
            format: 'mcq',
            opts: ['French links every word', 'The numbers are too short', 'It is a rule about plurals', 'Heure begins on a vowel sound'],
            correct: 3,
            why: 'The h of heure is written and never said, so the word starts on a vowel and the consonant in front of it has somewhere to go. That is what makes the join happen on all twelve rather than on some of them.',
            ref: 's07-ear',
          },
          {
            q: 'Say what time it is when the clock reads nine exactly.',
            format: 'speak',
            target: 'Il est neuf heures.',
            ipa: '/i.lɛ nœ.vœʁ/',
            scoreSegment: 'neuf heures',
            why: 'The scored part is the join. Neuf heures is neu-VUHR with the f said as a v, and saying the two words apart is what makes an ordinary hour hard to understand.',
            ref: 's06-liaison',
          },
        ],
      },
      {
        id: 'r3-past-and-to',
        label: 'Past and to',
        targets: ['err-moins-quart', 'err-dropped-heures'],
        say: 'The four phrases, and the one with an article.',
        questions: [
          {
            q: 'It is 7:45 and you are telling somebody the time. Which is right?',
            format: 'mcq',
            opts: [
              'Il est sept heures et quart.',
              'Il est huit heures moins le quart.',
              'Il est sept heures moins le quart.',
              'Il est huit heures moins quart.',
            ],
            correct: 1,
            why: 'Counting down, so the hour named is the one still coming, which is eight. The last option drops the article, and moins le quart is the only one of the four phrases that carries one.',
            ref: 's10-dial',
          },
          {
            q: 'Fix this. « Il est neuf heures moins quart. »',
            format: 'errorSpot',
            accept: ['Il est neuf heures moins le quart.', 'il est neuf heures moins le quart', 'moins le quart'],
            answer: 'Il est neuf heures moins le quart.',
            why: 'The article is missing. Three of the four phrases take nothing, so generalising from et quart is exactly what produces this, and no rule will get it back for you: it is a fixed phrase.',
            ref: 's11-article',
          },
          {
            q: 'It is 3:15. Write the two words that go after « Il est trois heures ».',
            format: 'typeIn',
            accept: ['et quart', 'etquart'],
            answer: 'et quart',
            why: 'Et quart, with nothing between et and quart. This is the half of the pair that takes no article, and it is the one a learner writes correctly and then copies onto the other.',
            ref: 's09-quarters',
          },
          {
            q: 'Which of these does French not say?',
            format: 'mcq',
            opts: ['huit heures moins la demie', 'huit heures et demie', 'huit heures moins dix', 'huit heures et quart'],
            correct: 0,
            why: 'Half past exists and half to does not, because thirty minutes before an hour is the same moment as thirty minutes after the one before it. French says the earlier hour and et demie, so there is nothing to learn on that side.',
            ref: 's10-dial',
          },
          {
            q: 'Fix this. « Il est quart huit heures. »',
            format: 'errorSpot',
            accept: ['Il est huit heures et quart.', 'il est huit heures et quart', 'huit heures et quart'],
            answer: 'Il est huit heures et quart.',
            why: 'French builds a time hour-first and hangs the rest off the back of it. English puts the minutes in front, so translating in order is what produces this, and waiting for the hour before you say anything is the habit that fixes it.',
            ref: 's04-noun',
          },
        ],
      },
      {
        id: 'r4-two-clocks',
        label: 'Two clocks',
        targets: ['err-mixed-clocks', 'err-moins-quart'],
        say: 'Which one you are on, and staying on it.',
        questions: [
          {
            q: 'Fix this. « Le film commence à vingt heures et demie. »',
            format: 'errorSpot',
            accept: ['Le film commence à vingt heures trente.', 'le film commence à vingt heures trente', 'vingt heures trente'],
            answer: 'Le film commence à vingt heures trente.',
            why: 'Half of each clock. Past twelve you are on the printed one, and the printed one says its minutes as a plain number. This is the hybrid that marks a beginner in a station.',
            ref: 's13-clocks',
          },
          {
            q: 'A cinema listing reads 16:10. Write what somebody says out loud, starting with the hour.',
            format: 'typeIn',
            accept: ['quatre heures dix', 'quatreheuresdix'],
            answer: 'quatre heures dix',
            why: 'Speaking, so twelve hours. Seize heures dix is what is printed rather than said, and quatre heures moins dix would be ten to four, which is twenty minutes earlier.',
            ref: 's13-clocks',
          },
          {
            q: 'Where would you expect to read « à dix-huit heures » rather than hear it?',
            format: 'mcq',
            opts: ['In a café', 'On a shop door', 'On the phone to a friend', 'Asking somebody the time'],
            correct: 1,
            why: 'Anything printed with a schedule on it: notices, timetables, listings, tickets, appointment cards. The twenty-four hour clock is what gets written down, and nobody uses it across a table.',
            ref: 's14-official',
          },
          {
            q: 'Why does the spoken clock sometimes add « du soir » and the printed one never does?',
            format: 'mcq',
            opts: [
              'It is more polite',
              'It is a regional habit',
              'The printed one uses it in writing instead',
              'It only has twelve hours, so it has to say which half of the day',
            ],
            correct: 3,
            why: 'Twelve hours cover half a day twice over, so six could be either. The printed clock counts to twenty-four and dix-huit heures can only be one moment, which is why it never needs to say more.',
            ref: 's14-official',
          },
        ],
      },
      {
        id: 'r5-demi',
        label: 'Demie, or demi',
        targets: ['err-demi-agreement', 'err-mixed-clocks'],
        say: 'The ending nobody can hear.',
        questions: [
          {
            q: 'Fix this. « Il est midi et demie. »',
            format: 'errorSpot',
            accept: ['Il est midi et demi.', 'il est midi et demi', 'midi et demi'],
            answer: 'Il est midi et demi.',
            why: 'Midi is masculine, so the half loses its e. It looks like it should take the feminine because every other time expression around it does, and nothing in speech will ever tell you otherwise.',
            ref: 's12-demi',
          },
          {
            q: 'Which of these is written correctly?',
            format: 'mcq',
            opts: ['minuit et demie', 'onze heures et demi', 'huit heures et demie', 'midi et demie'],
            correct: 2,
            why: 'Heure is feminine so the half takes an e after an hour. Minuit and midi are masculine and take demi with none, so the first and last are the wrong way round and the second is too.',
            ref: 's12-demi',
          },
          {
            q: 'What does the half agree with in « six ans et demi »?',
            format: 'mcq',
            opts: ['ans', 'six', 'the person', 'nothing, it is fixed'],
            correct: 0,
            why: 'An, which is masculine, so there is no e. Seeing it away from the clock is what shows this is ordinary agreement doing an ordinary job rather than a quirk of telling the time.',
            ref: 's12-demi',
          },
          {
            q: 'Write the French for half past eleven, starting with « Il est ».',
            format: 'typeIn',
            accept: ['Il est onze heures et demie.', 'il est onze heures et demie', 'onze heures et demie'],
            answer: 'Il est onze heures et demie.',
            why: 'Eleven hours, feminine, so the half keeps its e. The noun is plural because it is above one, and neither of those is audible, which is why this is a writing question rather than a speaking one.',
            ref: 's12-demi',
          },
        ],
      },
      {
        id: 'r6-tell-or-book',
        label: 'Telling, or booking',
        targets: ['err-welded-frames', 'err-demi-agreement'],
        say: 'Which of the two jobs the sentence is doing.',
        questions: [
          {
            q: 'Somebody asks « Quelle heure est-il ? » and it is eight. Fix this answer. « Il est à huit heures. »',
            format: 'errorSpot',
            accept: ['Il est huit heures.', 'il est huit heures', 'huit heures'],
            answer: 'Il est huit heures.',
            why: `${REFRAME} The à turns the answer into a statement about when something happens, which is not what was asked, so the question goes unanswered rather than answered wrongly.`,
            ref: 's01-scene',
          },
          {
            q: 'You are arranging to meet somebody at ten. Which is right?',
            format: 'mcq',
            opts: [
              'On se voit il est dix heures.',
              'On se voit à dix heures.',
              'On se voit dix heures.',
              'On se voit est dix heures.',
            ],
            correct: 1,
            why: 'À is the word that turns a time into a plan, and the hour behind it is built exactly as it was when you were telling the time. Nothing else changes, which is why this is one small word rather than a second system.',
            ref: 's17-booking',
          },
          {
            q: 'Which question asks about a schedule rather than about now?',
            format: 'mcq',
            opts: ['Quelle heure est-il ?', 'Vous avez l\'heure ?', 'À quelle heure ouvre le musée ?', 'Tu as l\'heure ?'],
            correct: 2,
            why: 'The à in front is doing the same job it does in an answer: it moves the question from what time it is to when something happens. The other three all ask for the time right now.',
            ref: 's16-asking',
          },
          {
            q: 'Which of these is a length of time rather than a time of day?',
            format: 'mcq',
            opts: ['Il est deux heures.', 'À deux heures.', 'Il est deux heures et demie.', 'Le cours dure deux heures.'],
            correct: 3,
            why: 'Dure asks how long rather than when. The noun is the same word in all four and the sentence around it is answering a different question, which is worth noticing once so it never confuses you again.',
            ref: 's17-booking',
          },
          {
            q: 'Write the French for « at half past nine », as you would say it to a friend.',
            format: 'typeIn',
            accept: ['à neuf heures et demie', 'aneufheuresetdemie', 'a neuf heures et demie'],
            answer: 'à neuf heures et demie',
            why: 'À books it, the hour comes first, and the half keeps its e because heure is feminine. Three of this lesson\'s rules in five words, and the join in neuf heures is the part to say out loud.',
            ref: 's17-booking',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's28-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Five things, and then what carries into the next unit.',
    body: 'You can say what time it is on all twelve hours plus the two that take no number, bend an hour four ways, read a printed timetable without converting it in your head, ask two different ways, and turn any of it into a plan. The last of those is one small word, and it is the same word that made the man outside the station ask you twice. Everything here is said out loud far more often than it is written, and the two things nobody can hear are the two you will be correcting longest.',
    points: [
      `${REFRAME} One word, and it decides which question you answered.`,
      'Heures never leaves. Il est huit is not a shorter sentence, it is an unfinished one.',
      'Three of the four phrases take no article, and moins le quart takes one for no reason.',
      'Two clocks, and they never borrow from each other. Vingt heures trente, never vingt heures et demie.',
      'Demie after an hour, demi after midi and minuit, and neither is audible.',
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
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's26-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.12.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Hours learned', v: String(THE_TWELVE.length) },
    { k: 'Ways to bend one', v: String(QUARTER_PHRASES.length) },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Seven, which is one more than a1.08 used, and the brief is right that this is
 * the lesson in the cluster where the upper end is warranted: there are two
 * whole systems here plus a liaison layer under both of them.
 *
 * The weighting is the argument. Four missions on the frame, five on the twelve
 * hours (because that act is the pronunciation content and not the vocabulary),
 * five on the quarters, three on the register split, four on asking and
 * booking. A shape that spent five missions on the numbers themselves would
 * have reteaching a1.27 as its second act.
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22. A flattering estimate buys a lesson that
 * passes the validator and exhausts the learner.                              */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The time it is',
    sections: ['s01-scene', 's02-goals', 's03-frame', 's04-noun'],
    milestone: 'You have the frame, and the word English throws away.',
    estScreens: 26,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The twelve',
    sections: ['s05-twelve', 's06-liaison', 's06b-check', 's07-ear', 's08-exceptions'],
    milestone: 'All twelve hours as sounds, and the one that changes a letter.',
    estScreens: 34,
    restPoints: ['s05-twelve/halfway'],
  },
  {
    id: 'act3',
    title: 'Past and to',
    sections: ['s09-quarters', 's10-dial', 's11-article', 's11b-check', 's12-demi'],
    milestone: 'Four ways to bend an hour, and the one that carries an article.',
    estScreens: 32,
    restPoints: ['s09-quarters/halfway'],
  },
  {
    id: 'act4',
    title: 'Two clocks',
    sections: ['s13-clocks', 's14-official', 's15-nomix'],
    milestone: 'The same moment on both clocks, and why they never mix.',
    estScreens: 20,
    restPoints: ['s15-nomix/halfway'],
  },
  {
    id: 'act5',
    title: 'Asking, and booking',
    sections: ['s16-asking', 's17-booking', 's18-precision', 's19-reading'],
    milestone: 'You can ask two ways and turn an answer into a plan.',
    estScreens: 22,
  },
  {
    id: 'act6',
    title: 'Say it, spell it, use it',
    sections: ['s20-words', 's21-flash', 's22-dictation', 's23-speak', 's24-scenario'],
    milestone: 'You have said the twelve out loud and spelled the ones nobody can hear.',
    estScreens: 64,
    restPoints: ['s21-flash/halfway', 's23-speak/halfway', 's23-speak/three-quarters'],
  },
  {
    id: 'act7',
    title: 'Prove it',
    sections: ['s25-review', 's26-progress', 's27-quiz', 's28-roundup'],
    milestone: 'Lesson complete. The daily routine unit inherits all of this.',
    estScreens: 48,
    restPoints: ['s25-review/halfway', 's27-quiz/after-r2', 's27-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Act 7 releases nothing new; it tests what the first six handed
 * over.
 *
 * `once()` is not decoration. The groups above are built for TEACHING and they
 * legitimately overlap: « Il est deux heures juste. » is both an hour sentence
 * and an exactness card. The SRS keys on (itemId, modality), so releasing one
 * card from two tranches would take two ratings for one sentence. The first
 * tranche to name an id keeps it and the rest drop it, which is also the
 * pedagogically right answer: an item belongs to the act that taught it.       */

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
  // Act 1: only the sentences act 1 actually SHOWS. The scene names midi, the
  // frame deck names four hours and the table names four more. Not the twelve
  // headwords: those are TAUGHT one per screen in act 2, and a card released
  // before its mission is a card the learner is asked to rate before they have
  // met it. That is the failure a1.08 found at v6 and v7.
  once([
    'fr.a1.temps-et-frequence.052', // Il est midi.               scene + frame + table
    'fr.a1.temps-et-frequence.051', // Il est huit heures.        frame + table
    'fr.a1.heure-et-date.060', // Il est une heure.               frame + table
    'fr.a1.temps-et-frequence.001', // Il est huit heures et quart.  table row 4
  ]),
  // Act 2: the twelve, released the act that puts one on each screen, plus the
  // sentences act 2's listening and exception decks show.
  once([
    ...HOUR_IDS,
    'fr.a1.heure-et-date.061', // Il est deux heures juste.       listening line 3
    'fr.a1.heure-et-date.013', // Il est neuf heures.             listening line 4
    'fr.a1.temps-et-frequence.053', // Il est minuit.             exceptions card 2
    'fr.a1.heure-et-date.024', // Il est midi et quart.           exceptions card 4
    'fr.a1.routines.035', // midi                                 exceptions deck
    'fr.a1.routines.036', // minuit                               exceptions deck
  ]),
  // Act 3: the four phrases and every sentence the quarter drill and the two
  // tables put on a screen.
  once([
    ...QUARTER_IDS,
    ...QUARTER_SENT,
    'fr.sons.jours-et-mois.050', // le quart d'heure              s11-article card 4
    'fr.sons.jours-et-mois.067', // midi et demi                  s12 + s20
    'fr.sons.jours-et-mois.068', // minuit et demi                s12 + s20
    'fr.a1.heure-et-date.036', // Il est midi et demi.            s12 row 2
    'fr.a1.heure-et-date.037', // Il est minuit et demi.          s12 row 3
    'fr.a1.ecole.263', // Elle a six ans et demi.                 s12 row 4
  ]),
  // Act 4: the register pairs, both halves, plus the official sentences the
  // printed-clock deck shows.
  once([
    ...SPOKEN_PAIR_IDS,
    ...OFFICIAL,
    'fr.a1.heure-et-date.067', // Il est huit heures du soir.     s14 card 4
    'fr.a1.heure-et-date.066', // Il est sept heures du matin.    s20 + sheet
  ]),
  // Act 5: asking, booking, precision and the two shop questions the use-case
  // mission puts on a screen.
  once([
    ...ASKING,
    ...BOOKING,
    ...PRECISION,
    ...DURATION,
    ...OFFICIAL_LATE,
  ]),
  // Act 6 releases the three cards act 6 is the FIRST to show. Every other
  // lesson in this cluster releases nothing in its production act, and the
  // honest version of that here is not zero: « à trois heures » and « une
  // montre » first appear in the vocabulary and flashcard missions, and the bus
  // line first appears in the dictée. An earlier draft released all three in
  // act 5 and asked the learner to rate them a whole act before meeting any.
  once([...BOOKING_LATE, ...OBJECTS]),
  // Act 7 releases nothing. It tests what the first six handed over.
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
    throw new Error(`a1.12.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.12.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  }
  if (DECK_TRANCHE.length !== ACTS.length) {
    throw new Error(`a1.12.l1: ${DECK_TRANCHE.length} tranches against ${ACTS.length} acts, and they are index-aligned`);
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
 * of a1.07 shipped a third. This lesson does not reopen it.                    */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-dropped-heures',
    description: 'Leaves the noun off: « il est huit » for it is eight. The highest-frequency error in the lesson and inaudible, because the learner stops early rather than saying something wrong.',
    detectOn: ['s03-frame', 's04-noun', 's22-dictation', 's27-quiz/r1-the-frame'],
    drill: 'drill-heures',
    retest: 'retest-heures',
  },
  {
    id: 'err-wrong-liaison',
    description: 'Says the hour and the noun apart, or reaches for the wrong one of deux and douze. Neuf heures is the one that changes a letter and the one most often said as written.',
    detectOn: ['s05-twelve', 's06-liaison', 's07-ear', 's23-speak', 's27-quiz/r2-the-hours'],
    drill: 'drill-liaison',
    retest: 'retest-liaison',
  },
  {
    id: 'err-moins-quart',
    description: 'Writes « moins quart » without the article, generalising from et quart. The most common written error in act 3, and nothing in speech corrects it.',
    detectOn: ['s09-quarters', 's10-dial', 's11-article', 's11b-check', 's27-quiz/r3-past-and-to'],
    drill: 'drill-article',
    retest: 'retest-article',
  },
  {
    id: 'err-mixed-clocks',
    description: 'Takes half of each clock: « vingt heures et demie ». What meeting both systems without being told they are separate registers produces.',
    detectOn: ['s13-clocks', 's14-official', 's15-nomix', 's19-reading', 's27-quiz/r4-two-clocks'],
    drill: 'drill-clocks',
    retest: 'retest-clocks',
  },
  {
    id: 'err-demi-agreement',
    description: 'Writes « midi et demie » with the feminine, because every other time expression in the lesson is feminine and midi is not. Entirely inaudible.',
    detectOn: ['s12-demi', 's22-dictation', 's27-quiz/r5-demi'],
    drill: 'drill-demi',
    retest: 'retest-demi',
  },
  {
    id: 'err-welded-frames',
    description: 'Answers the time with a booking: « il est à huit heures ». The error the reframe exists to kill, and the one the opening scene turns on.',
    detectOn: ['s01-scene', 's15-nomix', 's17-booking', 's27-quiz/r6-tell-or-book'],
    drill: 'drill-frames',
    retest: 'retest-frames',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-heures',
    title: 'Finish the sentence',
    format: 'flashcard',
    coach: 'The English is on the left and it stops where English stops. Say the French out loud and notice that it does not.',
    pairs: [
      ["it's three", 'Il est trois heures.'],
      ["it's seven", 'Il est sept heures.'],
      ["it's one", 'Il est une heure.'],
      ["it's eleven", 'Il est onze heures.'],
      ["it's noon", 'Il est midi.'],
    ],
  },
  {
    id: 'retest-heures',
    title: 'One more time',
    format: 'mcq',
    q: 'It is six o\'clock. Which is a whole sentence?',
    opts: ['Il est six.', 'Il est six heures.', 'Il est six heure.'],
    correct: 1,
    why: 'The noun is compulsory and it is plural above one. The first stops in the middle and the third is the singular that only une heure takes.',
  },
  {
    id: 'drill-liaison',
    title: 'Where the hour ends',
    format: 'sort',
    buckets: ['Grows a Z', 'Grows a T', 'Neither'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [
      HOUR_IDS[1], // deux heures    z
      HOUR_IDS[5], // six heures     z
      HOUR_IDS[6], // sept heures    t
      HOUR_IDS[7], // huit heures    t
      HOUR_IDS[8], // neuf heures    neither, it changes one
      HOUR_IDS[3], // quatre heures  neither
    ],
    coach: 'Say each one out loud before you sort it. The question is what you hear between the number and the noun, not what is written there, because nothing is written there at all.',
  },
  {
    id: 'retest-liaison',
    title: 'One more time',
    format: 'mcq',
    q: 'How does « neuf heures » come out?',
    opts: ['neuf-UHR', 'neu-VUHR', 'neu-ZUHR'],
    correct: 1,
    why: 'The f is said as a v. Neuf does this before heures and before ans and nowhere else, so it is worth knowing by name rather than looking for a rule behind it.',
  },
  {
    id: 'drill-article',
    title: 'With, or without',
    format: 'sort',
    buckets: ['Takes le', 'Takes nothing'],
    items: [
      'fr.sons.jours-et-mois.065', // moins le quart
      'fr.sons.jours-et-mois.064', // et quart
      'fr.sons.jours-et-mois.063', // et demie
      'fr.sons.jours-et-mois.066', // moins dix
      'fr.a1.temps-et-frequence.058', // Il est sept heures moins le quart.
      'fr.a1.temps-et-frequence.056', // Il est trois heures et quart.
    ],
    coach: 'One of these four phrases carries an article and three do not. There is no rule to work it out from, so read each one and remember which pile it went in.',
  },
  {
    id: 'retest-article',
    title: 'One more time',
    format: 'mcq',
    q: 'Which one is written the way French writes it?',
    opts: ['huit heures moins quart', 'huit heures moins le quart', 'huit heures et le quart'],
    correct: 1,
    why: 'Moins le quart carries the article and et quart does not. The third puts one where it does not belong, which is what over-correcting after this drill produces.',
  },
  {
    id: 'drill-clocks',
    title: 'Which clock is this?',
    format: 'sort',
    buckets: ['What you say', 'What is printed'],
    items: [
      ...SPOKEN_PAIR_IDS.slice(0, 3),
      'fr.a1.nombres.057', // Le film commence à vingt heures trente.
      'fr.a1.nombres.047', // Le train part à seize heures dix.
      'fr.a1.temps-et-frequence.064', // Le magasin ferme à dix-huit heures.
    ],
    coach: 'Look at the hour first. Anything past twelve is the printed clock and says its minutes as a plain number. Anything with et quart or et demie in it is the spoken one.',
  },
  {
    id: 'retest-clocks',
    title: 'One more time',
    format: 'mcq',
    q: 'A listing reads 20:30. Which of these is never said?',
    opts: ['vingt heures trente', 'huit heures et demie', 'vingt heures et demie'],
    correct: 2,
    why: 'It takes half of each clock. The first is what is printed and the second is what is spoken, and both are correct for the same moment.',
  },
  {
    id: 'drill-demi',
    title: 'Where the e goes',
    format: 'sort',
    buckets: ['et demie', 'et demi'],
    items: [
      'fr.a1.heure-et-date.032', // Il est huit heures et demie.
      'fr.a1.heure-et-date.036', // Il est midi et demi.
      'fr.a1.heure-et-date.037', // Il est minuit et demi.
      'fr.a1.temps-et-frequence.057', // Il est cinq heures et demie.
      'fr.a1.ecole.263', // Elle a six ans et demi.
      'fr.sons.jours-et-mois.067', // midi et demi
    ],
    coach: 'Read what comes before the half, not the half itself. If it is an hour the e is there, and if it is midi, minuit or a year it is not.',
  },
  {
    id: 'retest-demi',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is written correctly?',
    opts: ['midi et demie', 'midi et demi', 'midi heures et demi'],
    correct: 1,
    why: 'Midi is masculine so the half has no e, and midi takes no noun after it either. The first is the trap and the third adds a word that never goes there.',
  },
  {
    id: 'drill-frames',
    title: 'Telling, or booking',
    format: 'flashcard',
    coach: 'Read the situation on the left and say the French on the right. Every pair here turns on one small word, and it is the same word every time.',
    pairs: [
      ['Somebody asks you the time. It is eight.', 'Il est huit heures.'],
      ['You are arranging to meet at eight.', 'À huit heures.'],
      ['Somebody asks you the time. It is noon.', 'Il est midi.'],
      ['The class starts at noon.', 'À midi.'],
      ['Asking what time it is now.', 'Quelle heure est-il ?'],
      ['Asking when the museum opens.', 'À quelle heure ouvre le musée ?'],
    ],
  },
  {
    id: 'retest-frames',
    title: 'One more time',
    format: 'mcq',
    q: 'Somebody asks « Quelle heure est-il ? » What answers them?',
    opts: ['Il est à neuf heures.', 'Il est neuf heures.', 'À neuf heures.'],
    correct: 1,
    why: 'They asked what time it is, so the answer has no à in it. The other two both say when something happens, which is a different question and leaves theirs unanswered.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Two, and both exist for a layout reason as much as a pedagogical one.
 * `tapTable` is not in ownsLayout(), so the in-flow tables render inside a
 * scrolling page and anything past about seven rows runs off the fold and takes
 * its chrome with it. The full versions live here.
 *
 * This is also where a learner will be during a1.25, wanting the hours beside
 * the two clocks. Layer 'deep' exempts these from the core density caps, which
 * is the point: a sheet is allowed to be dense, and a `table` section is only
 * legal here.                                                                  */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.12.frame',
    title: 'The twelve hours, in full',
    layer: 'deep',
    contains: ['All twelve with their sound', 'What the liaison does to each', 'The frame they sit in'],
    sections: [
      {
        type: 'table',
        id: 'sheet-frame-hours',
        title: 'The twelve hours',
        layer: 'deep',
        cols: ['French', 'Sounds like', 'English', 'What the join does'],
        rows: THE_TWELVE.map((fr) => [
          fr,
          sub(fr),
          glossOf(fr),
          ['une heure', 'quatre heures'].includes(fr) ? 'carries straight on'
            : fr === 'cinq heures' ? 'the q is sounded'
              : fr === 'neuf heures' ? 'the f becomes a v'
                : ['sept heures', 'huit heures'].includes(fr) ? 'a t appears' : 'a z appears',
        ]),
      },
      {
        type: 'cheatSheet',
        id: 'sheet-frame-rules',
        title: 'The frame, and what never leaves it',
        layer: 'deep',
        rows: [
          { k: 'il est + hour + heures', v: 'The whole frame. Only the number in the middle ever moves.', say: frOf('fr.a1.temps-et-frequence.051') },
          { k: 'une heure', v: 'The only singular. Everything from two upward is heures.', say: frOf('fr.a1.heure-et-date.060') },
          { k: 'midi · minuit', v: 'No heures and no article. Both are the hour and the noun at once.', say: `${frOf('fr.a1.temps-et-frequence.052')} ${frOf('fr.a1.temps-et-frequence.053')}` },
          { k: 'du matin · du soir', v: "Which half of the day, when twelve hours are not enough. De l'après-midi for the afternoon.", say: frOf('fr.a1.heure-et-date.066') },
          { k: 'pile · précises', v: 'On the dot. Pile after any hour in speech, précises in writing.', say: frOf('fr.a1.heure-et-date.068') },
          { k: 'vers', v: 'Around, when you do not want to promise a minute. Replaces à rather than joining it.', say: frOf('fr.sons.jours-et-mois.073') },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-frame-liaison',
        title: 'Why every hour runs into the next word',
        layer: 'deep',
        body: 'Heure is spelled with an h and the h is never said, so the word begins on a vowel. French does not like a consonant sitting in front of a vowel with a gap between them, so the consonant moves across and joins it. That is all a liaison is, and it is why not one of the twelve hours ends where its spelling says it does. Six of them grow a z that is written but silent on its own: the x of deux and dix, the s of trois, the z already in onze and douze. Two grow a t the same way, the t of sept and of huit, both silent when the word stands alone. Three simply carry on, because une, quatre and cinq end in a sound that was already going to be pronounced. And one is genuinely exceptional. Neuf ends in an f everywhere else in the language and says a v here, so neuf heures is neu-VUHR. It does the same thing in front of ans and nowhere else at all, which means there is no rule to derive it from and no other word it applies to. Learn that one by name. The practical consequence is worth stating plainly, because it is the difference between being understood and not: an English speaker reading these words says the number, stops, and then says heures, and a French listener hears two words that do not belong together rather than a time. Say the join and the whole thing lands.',
      },
    ],
  },
  {
    id: 'sheet.a1.12.clock',
    title: 'Both clocks, and the four phrases',
    layer: 'deep',
    contains: ['The four ways to bend an hour', 'The same moment on both clocks', 'Where the e on demie goes'],
    sections: [
      {
        type: 'table',
        id: 'sheet-clock-quarters',
        title: 'The four phrases',
        layer: 'deep',
        cols: ['French', 'Sounds like', 'English', 'Article'],
        rows: QUARTER_PHRASES.map((p) => [
          p,
          sub(p),
          glossOf(p),
          p === QUARTER_WITH_ARTICLE ? 'yes, le' : 'none',
        ]),
      },
      {
        type: 'table',
        id: 'sheet-clock-registers',
        title: 'The same moment, both clocks',
        layer: 'deep',
        cols: ['What you say', 'What is printed', 'The moment'],
        rows: CLOCK_PAIRS.map(([spoken, official], i) => [
          frOf(spoken),
          frOf(official),
          ['20:30', '16:10', '18:00', '14:00'][i],
        ]),
      },
      {
        type: 'cheatSheet',
        id: 'sheet-clock-errors',
        title: 'The six errors, and which you can hear',
        layer: 'deep',
        rows: [
          { k: 'The dropped noun', v: 'il est huit for il est huit heures. Audible, and the sentence stops rather than finishes.', say: frOf('fr.a1.temps-et-frequence.051') },
          { k: 'The missing article', v: 'moins quart for moins le quart. Audible, barely: it is one short unstressed word in the middle.', say: 'moins le quart' },
          { k: 'The mixed clock', v: 'vingt heures et demie. Audible, and it is the one that marks a beginner in a station.', say: frOf('fr.a1.nombres.057') },
          { k: 'The wrong agreement', v: 'midi et demie for midi et demi. Inaudible, so nothing ever corrects it.', say: frOf('fr.a1.heure-et-date.036') },
          { k: 'The welded frames', v: 'il est à huit heures. Audible, and it answers a question nobody asked.', say: frOf('fr.a1.temps-et-frequence.051') },
          { k: 'The over-applied rule', v: 'il est midi heures. Audible, and it comes from getting the main rule right.', say: frOf('fr.a1.temps-et-frequence.052') },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-clock-why',
        title: 'Why the two clocks never mix',
        layer: 'deep',
        body: 'French runs two ways of saying a time and they are not formal and informal versions of one another. They are two systems with different hours and different minutes, and each is complete on its own. The spoken one has twelve hours and bends them with et quart, et demie and moins le quart, and because twelve hours cover half a day twice over it adds du matin, de l\'après-midi or du soir when it matters which. The printed one runs to twenty-four, needs no such marking because dix-huit heures can only be one moment, and says its minutes as a plain number: vingt heures trente, seize heures dix, quatorze heures. It has no et quart and no moins le quart at all. A learner who meets both without being told they are separate takes the hours from one and the minutes from the other and produces vingt heures et demie, which is the single most recognisable beginner sentence in a French station. The fix is not a rule about which to use, because both are ordinary and a French speaker moves between them a dozen times a day without noticing. The fix is to decide which clock you are on before the sentence starts and finish on the same one. If the hour is above twelve you are on the printed clock and the minutes are a number. If it is twelve or below you are on the spoken one and the minutes can be a phrase. That is the whole of it, and it is checkable mid-sentence, which is what makes it usable rather than merely true.',
      },
    ],
  },
];

export const HEURE_LESSON: Lesson = {
  id: 'a1.12.l1',
  unitId: 'a1.12',
  // The lesson's index WITHIN its unit, not its place in the track. Every lesson
  // in the seed is seq 1 because every unit ships exactly one so far, and the
  // `l1` in the id is this number.
  seq: 1,
  title: "L'heure",
  level: 'a1',
  // FIFTEEN, not twelve. missions.ts derives the eyebrow from unit.seq at render
  // time (`${level} · LEÇON ${unit.seq}`), and a1.12 sits at seq 15. The stored
  // value is a fallback and has to agree with what the renderer computes, or the
  // two disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7) and a1.04 ships it today.
  tag: 'A1 · LEÇON 15',
  intro:
    'Twelve short hours, a noun English throws away, and one small word that decides whether you are telling somebody the time or arranging to meet them. This is how you say what time it is, read a timetable that counts to twenty-four, and make a plan without answering a question nobody asked.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The unit shipped with lessonIds: [], so this is the first lesson here and
  // the counter started at 1. It moves forward on every rebuild: the merge
  // script prints both sides, and "replacing v3 with v1" reads as a rollback.
  //
  // v2 is one fix, found by the suite after v1 had been applied to Postgres, and
  // it is a content bug rather than plumbing:
  //
  //   s19-reading's glossary declared « à huit heures et demie » and it could
  //   never underline anything. gloss.logic.ts caps a key at MAX_GLOSS_WORDS,
  //   which is four, and that entry is five, so it was a valid object that drew
  //   nothing at all. Exactly the class of failure the brief opens on, and
  //   exactly the one a1.08 hit from the other direction (its two dead entries
  //   were shadowed by longer keys rather than being too long themselves).
  //
  //   Caught by gloss.logic.test.ts, which runs the real segmentSentence over
  //   the whole seed. Nothing in this file could have caught it, which is the
  //   argument for that test existing rather than each lesson checking its own.
  //
  // v3 is the finding a1-12-heure.test.ts made on its first run, and it is the
  // failure the brief opens on: content that is authored, schema-valid and drawn
  // by nothing.
  //
  //   TEN items were in `itemIds`, released to spaced repetition, and named by
  //   NO mission. « Il est minuit et quart. », « La réunion commence à seize
  //   heures trente. », four opening-hours sentences and three exactness ones.
  //   All ten came from groups written by reaching for what the corpus had
  //   rather than for what a screen shows, which is the same mistake in the same
  //   place as a1.08's v6. They are dropped. itemIds falls from 81 to 71 and
  //   every one of them is now on a screen.
  //
  //   FOUR more were released a whole act before the mission that shows them.
  //   Those are moved rather than dropped: « à trois heures » and « une montre »
  //   are act 6 cards and the tranche said act 5.
  //
  //   The lesson's own build-time guard could not see either, because it asks
  //   whether an id is RELEASED and not whether it is SHOWN. The test asks the
  //   second question, on content rather than on ids, because this lesson names
  //   its corpus through frOf() and writes no ids into its sections at all.
  version: 3,

  grammarAssumed: [
    'The numbers from one to a hundred, introduced in a1.02 and a1.27',
    'The full present of être, introduced in a1.06',
    'The full present of avoir, introduced in a1.07',
    'le, la and les in front of a noun, introduced in a1.04',
    'The nine subject pronouns, introduced in a1.05',
    'The tu and vous split, introduced in a1.01',
  ],
  grammarIntroduced: [
    'The impersonal il, as a subject that refers to nothing',
    'il est plus a number plus heures, as the frame for telling the time',
    'The obligatory noun heures, singular after une and plural above it',
    'midi and minuit, which take neither the noun nor an article',
    'et quart, et demie and moins plus a minute count, hung off the back of the hour',
    'moins le quart, and that it is the only one of the four carrying an article',
    'The agreement of demi with heure, midi and minuit',
    'The twenty-four hour clock as a separate register, with minutes as a plain number',
    'à plus a time, marking when something happens rather than what time it is',
    'Quelle heure est-il and Vous avez l\'heure, as fixed question chunks',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Telling Time',
    subFr: "L'heure",
    introFr: "Douze heures courtes, un mot que l'anglais oublie, et un petit mot qui décide si vous donnez l'heure ou si vous prenez rendez-vous.",
    minutes: 28,
    difficulty: 2,
    glyph: '🕐',
    screens: 246,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: HEURE_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-12-heure.test.ts, the way sons.07's
    // rec-h-pairs and a1.08's rec-a1-08-seven pin their own, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered. This lesson needs more of this discipline than any
    // other in the cluster, because the liaison IS the content.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits, and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any
    // case. CLIP_MANIFEST is empty by design, so every card falls back to
    // device TTS until the studio delivers, and a recordingId resolving to
    // nothing is the correct shipping state.
    recorded: [
      {
        id: 'rec-a1-12-twelve',
        desc:
          'THE TWELVE HOURS AS ONE CONTINUOUS TAKE, IN CLOCK ORDER FROM UNE HEURE TO DOUZE HEURES, BY ONE VOICE AT ONE '
          + 'SPEED. Twelve hours recorded in twelve sessions are twelve performances, and the learner is memorising a '
          + 'SEQUENCE of JOINS: any drift in pace between them teaches a difference between the recordings rather than '
          + 'a difference in French. Read them straight through with an even beat, then again slowly in the same take. '
          + 'EVERY ONE IS ONE PHONETIC WORD. There must be no gap, no glottal stop and no breath between the number and '
          + 'heures on any of the twelve: a reader who separates them is teaching the error this lesson exists to stop. '
          + 'NEUF HEURES IS RECORDED IN ISOLATION AS WELL, AND SLOWLY, because the f becoming a v is the one exception '
          + 'in the set and it is the card a learner will replay. DEUX HEURES AND DOUZE HEURES GO ADJACENTLY IN THE '
          + 'SAME TAKE, at natural pace and not slowed, because that is the pair the ear actually fails on and slowing '
          + 'it removes the difficulty being taught.',
        clipIds: [...THE_TWELVE, 'neuf heures-slow', 'deux-douze-pair'],
      },
      {
        id: 'rec-a1-12-frames',
        desc:
          'The frame, and the pair the lesson turns on. « Il est midi » immediately followed by « Il est à midi » BY '
          + 'THE SAME VOICE AT THE SAME PACE IN ONE TAKE, so the only thing the learner hears is the à. Recorded apart '
          + 'they compare two performances instead of two meanings and the whole teaching is lost. Do not lean on the '
          + 'à to make it clearer: it is unstressed in ordinary speech and a learner who hears it emphasised will never '
          + 'catch it at conversational speed. Then the same pair on eight: « Il est huit heures » against « Il est à '
          + 'huit heures ». SEPARATELY, and this is the other half of this recording: « il est huit » read as a '
          + 'complete utterance and then « il est huit heures », so the learner hears what stopping early sounds like. '
          + 'Read the truncated one PLAINLY and without a trailing rise, because a reader who performs it as obviously '
          + 'unfinished removes the reason it is dangerous.',
        clipIds: [
          'Il est midi.', 'Il est à midi.', 'Il est huit heures.', 'Il est à huit heures.',
          'il est huit', 'midi-a-midi-pair',
        ],
      },
      {
        id: 'rec-a1-12-quarters',
        desc:
          'The four phrases that bend an hour. « et quart » and « moins le quart » ADJACENTLY IN THE SAME TAKE, '
          + 'because the article is the whole difference between them and two separate recordings are two '
          + 'performances. The le is short, unstressed and easy to swallow, and it MUST NOT be leaned on: the learner '
          + 'has to hear it as it really sounds, which is almost nothing, or they will not recognise it in the wild '
          + 'and will not miss it when it is gone. Then all four in order, then each worked on a real hour. « il est '
          + 'midi » and « il est minuit » ALSO GO ADJACENTLY IN THE SAME TAKE: they are close in sound, opposite in '
          + 'meaning, and the difference is one syllable in the middle.',
        clipIds: [
          'et quart', 'moins le quart', 'quart-pair', 'et demie', 'moins dix',
          'Il est midi.', 'Il est minuit.', 'midi-minuit-pair',
        ],
      },
      {
        id: 'rec-a1-12-registers',
        desc:
          'The two clocks, and this is the recording the whole of act 4 rests on. THE SAME MOMENT IN BOTH SYSTEMS, ONE '
          + 'TAKE PER PAIR, spoken half first and printed half second with a clear beat between them: « huit heures et '
          + 'demie » then « vingt heures trente », and the same for the other three pairs. The only thing changing is '
          + 'the register, so the voice, the pace and the emphasis must not change with it. In particular do NOT read '
          + 'the printed clock in an announcement voice: it is what an ordinary person says reading a listing out '
          + 'loud, not a station tannoy, and performing it as official teaches a difference in formality that is not '
          + 'the difference being taught. All four pairs are complete sentences rather than bare times, because the '
          + 'sentence is what makes them the same event.',
        clipIds: CLOCK_PAIRS.flatMap(([spoken, official]) => [frOf(spoken), frOf(official)]),
      },
      {
        id: 'rec-a1-12-asking',
        desc:
          'The two questions and the booking frame. « Quelle heure est-il ? » read as ONE PHONETIC WORD with no break '
          + 'between quelle and heure, because it is taught as a frozen chunk and a reader who separates the words '
          + 'invites the learner to parse it. « Vous avez l\'heure ? » on a rising intonation, and « Tu as l\'heure ? » '
          + 'after it in the same take so the register shift is audible against a fixed voice. Then the booking rows: '
          + 'à, vers and pile on real hours, with vers read genuinely casually, since its whole job is to sound like '
          + 'somebody not committing to a minute.',
        clipIds: [
          'quelle heure est-il ?', "Vous avez l'heure, s'il vous plaît ?", "Tu as l'heure ?",
          'à trois heures', 'vers trois heures', 'Il est neuf heures pile.',
        ],
      },
      {
        id: 'rec-a1-12-traps',
        desc:
          'The six traps, wrong version then right version, with a clear beat between them so the learner hears a '
          + 'difference rather than a correction. Read EVERY wrong version plainly and at ordinary pace rather than '
          + 'comically: three of the six are real French that means something else, and a performance that marks them '
          + 'as errors removes the reason they are dangerous. « Il est à huit heures » is a perfectly good sentence '
          + 'out of context, which is the point of the fifth one. « Il est midi et demie » and « il est midi et demi » '
          + 'ARE THE SAME SOUND and must be read identically: that pair exists to demonstrate that the ear cannot '
          + 'settle it, so any audible difference between the two takes would be actively false.',
        clipIds: [
          'trap-dropped-heures', 'trap-moins-quart', 'trap-mixed-clocks',
          'trap-demi-agreement', 'trap-welded-frames', 'trap-midi-heures',
        ],
      },
      {
        id: 'rec-a1-12-scene',
        desc:
          'The opening scene, French only, two voices. The stranger is a man in a hurry who is not annoyed and never '
          + 'becomes annoyed: he asks, does not get an answer he can use, and simply asks again. Any edge on the '
          + 'second ask turns the scene into a telling-off and the teaching is lost, because the whole point is that '
          + 'nobody is upset and nobody corrects anybody. His last line (« Midi ! Merci, je suis en retard. ») is '
          + 'already half walking away and should sound like it. The learner\'s two attempts are the same voice, the '
          + 'same pace and the same confidence: the second is not a sheepish correction, it is the same person saying '
          + 'a slightly different sentence.',
        clipIds: [
          'Excusez-moi, quelle heure est-il ?', 'Il est à midi.', 'Il est midi.',
          'Midi ! Merci, je suis en retard.',
        ],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const HEURE_ITEM_IDS = ITEM_IDS;
export const HEURE_SPEAK_IDS = SPEAK_IDS;
export const HEURE_DICTATION_IDS = DICTATION_IDS;
export const HEURE_TRANCHES = DECK_TRANCHE;
export const HEURE_TELL_IDS = TELL;
export const HEURE_OFFICIAL_IDS = OFFICIAL;
export const HEURE_QUARTER_IDS = QUARTER_IDS;
export const HEURE_ASKING_IDS = ASKING;
export const HEURE_BOOKING_IDS = BOOKING;
export { REFRAME };
