// a1.08.l1 "Les jours de la semaine" , the mission journey.
//
// The corpus findings that changed this build are in the header of
// jours-corpus.ts and are not repeated here. In one line: the brief's corpus
// section was measured against seed.json rather than against Postgres, so the
// seven days already exist, `jours-et-mois` already exists and holds them, and
// mercredi and jeudi are not thin.
//
// ── The teaching problem, which is one article long ────────────────────────
//
// The canDo has two clauses and they are wildly unequal, and the brief is right
// about that. "Can name the days" is seven words with no pattern behind them.
// "Say what they do on a given day" is the lesson, and the whole of it is:
//
//     le lundi     every Monday, as a rule
//     lundi        one Monday, the one being talked about
//
// So the weight goes there. The seven names get THREE missions and the article
// gets EIGHT, across acts 3 and 4. A lesson that spent eight missions drilling
// lundi to dimanche would have misread which half of the canDo is difficult and
// would have shipped a flashcard deck with a lesson wrapped round it.
//
// There is no transfer from English here, which is what makes it stick badly.
// English marks the same difference with a plural S in a different place (on
// Mondays), and the French form is SINGULAR. A learner reaching for the English
// mechanism produces « les lundis », which exists and is not what they meant,
// and never produces « le lundi » by accident.
//
// ── The handover from a1.04, which is the opening move of act 3 ────────────
//
// a1.04 taught `le` in front of a general noun, where English uses no article
// at all: « J'aime le café » is coffee in general rather than one cup. That is
// the same mechanism as « le lundi », and it is the best foundation this lesson
// could ask for: the central rule is a1.04's rule applied to a day. s08-rule
// opens on exactly that, by name, so a learner who did a1.04 recognises the
// move before any of it is explained. This lesson does not re-derive it.
//
// ── The verb problem, which the canDo walks straight into ──────────────────
//
// "Say what they DO" needs action verbs, and there is no regular-verb unit
// anywhere in A1. All thirty units were checked: not one teaches -er
// conjugation, the present tense as a system, or verb endings. The learner has
// être (a1.06) and avoir (a1.07) and will have only those for the rest of the
// band.
//
// The brief offers three answers and recommends the first with the second as
// garnish. That is what this lesson does, and the corpus made it easy in a way
// the brief did not anticipate:
//
//   PRODUCED, and built on être and avoir only. Every one of the sixteen
//   authored rows, every card the learner is asked to say, every dictée target,
//   every speak item and every scenario turn. « Je suis libre le samedi »,
//   « J'ai cours le lundi », « On a piscine le mercredi », « Le magasin est
//   fermé le mardi ». The corpus already held dozens of these and nobody had
//   noticed, because they are filed under adjectives and school rather than
//   under days.
//
//   READ ONLY, as whole chunks, never conjugated and never asked for. The
//   reading passage and the listening lines carry « il joue au foot », « le
//   facteur passe » and « on se voit », which are the sentences days actually
//   turn up in. Each is glossed as a whole phrase and no drill asks for the
//   verb. The two chunk rows carry `chunk: true` in the corpus so the batch,
//   the merge and the test can all assert that no production drill selects
//   them.
//
//   NOT TAUGHT. No -er conjugation anywhere. The word « conjugaison » appears
//   in no learner-facing string.
//
// ── What is deliberately left to its neighbours ───────────────────────────
//
//   MONTHS are a1.09, which declares this unit as its prerequisite. They are in
//   this lesson's own bound theme, twelve of them, one tap away, and the
//   temptation is real. Not one is taught, named on a card, or released by a
//   tranche. MONTH_IDS exists in the corpus file so the test can assert it.
//
//   THE CLOCK is a1.12. `le matin`, `le soir` and `l'après-midi` appear as
//   companions to a day, because « le dimanche soir » is a real thing to say
//   and half the corpus sentences use it. No hour is taught and no time is
//   given in figures on any surface the lesson teaches from.
//
//   DAILY ROUTINE is a1.25. This lesson says what happens on a day; it never
//   builds a sequence of a day.
//
//   THE PASSÉ COMPOSÉ is recognition-only from a1.07. « samedi dernier » pulls
//   hard toward it. Past references are fixed phrases the learner reads.
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
//   `tapTable` is NOT in ownsLayout(), so s04-days, s09-both and s12-noprep all
//   render inside a SCROLLING page. s04-days and s09-both are the two the brief
//   flags: seven rows plus a header is the most any A1 lesson has asked one to
//   hold. Both are capped at three columns with every cell three words or
//   fewer, and the teaching lives in the detail modal, which is a card and can
//   hold prose. Both were walked on a device (see the report).
//
//   `size` is not decoration. ownsLayout() ignores it; density.logic.ts reads
//   `xl` as a 12-word cap on EVERY string in the section. s05-seven is the only
//   xl section here and every card in it is one French word with a two-word
//   gloss, which is what makes xl correct there and fatal anywhere else.
//
//   A `groupDrill` control page carries `items: []` explicitly, and no `size`.
//   An xl groupDrill never stacks words and a check in one group: that is
//   a1.07 v4's device finding and lesson-contract.test.ts now enforces it over
//   the whole seed.
//
//   The scene break body is 38 words, inside the 24 to 40 band every shipped
//   break sits in.
//
// ── The dictée inverts a1.07, and the decoy pool is the reason ─────────────
//
// a1.07 chose LETTER mode because the word-mode decoy bank holds no verb forms
// and so could not ask its question. This lesson chooses BOTH, and the split is
// measured rather than chosen by taste, because the same decoy bank is
// perfectly aimed at THIS lesson's question:
//
//     WORD_DECOY_POOL = ['et','le','la','les','de','un','une','très', ...]
//
// `le` is in it. So a word-mode dictée on a BARE day sentence offers `le` as a
// tile the learner must decide NOT to place, which is exactly the decision the
// lesson exists to teach, in the one place the difference is visible.
// Confirmed through the real `wordDecoys`: « Je suis libre samedi. » (17
// letters, word mode) yields decoys ['et', 'le'].
//
// The two short targets stay in LETTER mode and test the spelling of the day
// names themselves, which nothing else in the lesson does. Every target below
// is asserted through the real `dicteeMode` in the batch, the merge and the
// test rather than against a restated threshold.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { JOURS_TERMS, REFRAME } from './jours-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }
import {
  BORROWED_IDS, CHUNK_IDS, CONTRAST_PAIRS, DAY_IDS, FRAME_IDS, IMPORTED_IDS, JOURS_IDS,
  MONTH_IDS, ORIGINS, REUSED_IDS, THE_SEVEN, enOf, frOf, ipaOf, sideIds, sub,
} from './jours-corpus.ts';

export { REFRAME };

/* ─── The corpus this lesson sequences ─────────────────────────────────────
 *
 * Grouped by the job the ids do, so a section names a GROUP and the tranche
 * slices read from the same groups rather than restating a word list.        */

/** The seven day words, in week order. The only vocabulary in the lesson. */
const DAYS = DAY_IDS;

/** The frame a day sits in: the week, the weekend, yesterday, tomorrow. */
const FRAME = FRAME_IDS;

/** The seven authored minimal pairs plus the scene's own sentence, flattened in
 *  pair order so a tranche releases both halves of a pair together. Releasing
 *  one half is worse than releasing neither: a sentence with an article and
 *  nothing to compare it against reads as the only way to say it. */
const PAIRS = CONTRAST_PAIRS.flat();

/* ─── The corpus half, and why it is exactly this size ─────────────────────
 *
 * v6. Every id below is SHOWN on a screen, or named by a drill or a term. That
 * sounds like it should go without saying and it did not: v5 declared 85
 * itemIds of which 43 were named by nothing at all. They were a pool assembled
 * while reading the corpus, released to spaced repetition by act 3's tranche,
 * and drawn by no component, which is the failure the brief opens on wearing
 * its least obvious costume. A learner would have been handed 43 review cards
 * for sentences the lesson never showed them.
 *
 * The fix is to WIRE rather than to cut, because the corpus turned out to be
 * abundant where the brief said it was thin and a lesson that then used none of
 * it would be the worse for it. Fourteen sentences, one per day per side, now
 * run in s10-habit beside the authored pairs: the authored pairs prove the rule
 * on a frame that holds everything else still, and these show the same rule in
 * sentences somebody actually wrote for a different purpose entirely.
 *
 * Several carry verbs no A1 unit conjugates (joue, fais, se retrouve). That is
 * the brief's lexical-chunk allowance and it is safe here: a groupDrill words
 * deck is read and tapped for audio, never scored by the mic. Production is
 * refused everywhere, and the batch, the merge and the test all assert it.   */

/** Habitual, from the existing corpus. One per day, so every one of the seven
 *  is represented, including the two the brief reported as thin (mercredi has
 *  18 a1 sentences and jeudi 19, measured against Postgres). */
const HABITUAL = [
  'fr.a1.cinema.058',               // Le cinéma est fermé le lundi.                        être
  'fr.a1.jours-et-mois.043',        // Le mardi matin, j'ai un cours de français.           avoir
  'fr.a1.jours-et-mois.005',        // Le mercredi après-midi, les enfants n'ont pas école.  avoir
  'fr.a1.jours-et-mois.008',        // Le jeudi, il joue au foot avec ses amis.             chunk
  'fr.a1.ecole.226',                // Le vendredi, nous avons un cours de musique.         avoir
  'fr.a1.adjectifs-essentiels.146', // Le musée est ouvert le samedi.                       être
  'fr.a1.jours-et-mois.039',        // La pharmacie est fermée le dimanche.                 être
];

/** The reinforced habitual: tous les plus a plural day. The one place the plural
 *  is correct, which is why it is taught rather than left to be discovered as a
 *  contradiction of the singular rule. Both are named by drill-singular. */
const REINFORCED = [
  'fr.a1.jours-et-mois.029', // Le marché a lieu tous les samedis.
  'fr.a1.marche.003',        // J'achète des légumes au marché tous les jeudis.
];

/** Specific: one day, bare. One per day, matching HABITUAL above so the deck
 *  reads across as well as down. */
const SPECIFIC = [
  'fr.a1.jours-et-mois.045', // Lundi ou mardi, ça t'arrange?
  'fr.a1.jours-et-mois.003', // Nous avons rendez-vous mardi matin.                   avoir
  'fr.a1.jours-et-mois.028', // Tu es libre mercredi soir?                            être
  'fr.a1.jours-et-mois.018', // La réunion est reportée à jeudi.                      être
  'fr.a1.jours-et-mois.030', // Vendredi, c'est mon jour préféré.
  'fr.a1.jours-et-mois.011', // Samedi, je fais les courses au marché.                chunk
  'fr.a1.jours-et-mois.013', // Dimanche, toute la famille se retrouve chez grand-mère. chunk
];

/** Marked specific: prochain and dernier, shown on s11-specific's cards. NONE of
 *  these carries an article, which is the half of the rule a learner
 *  over-applies once they have the first half. */
const MARKED = [
  'fr.a1.jours-et-mois.007', // Jeudi prochain, nous partons en voyage.
  'fr.a1.jours-et-mois.019', // Il est arrivé vendredi dernier.
  'fr.a1.jours-et-mois.034', // On déménage samedi prochain.
];

/** What day is it: the sentences that NAME a day rather than use one. All être
 *  and c'est, which is why they are here rather than in SPECIFIC: they are the
 *  one frame in the lesson where the day IS the complement. Named by
 *  drill-lowercase and by the lowercase term. */
const NAMING = [
  'fr.a1.jours-et-mois.001', // Lundi, je commence un nouveau travail.   s12-noprep, act 4
  'fr.a1.jours-et-mois.022', // Ce n'est pas lundi, c'est mardi.        s12-noprep, act 4
  'fr.a1.jours-et-mois.016', // Demain, c'est mardi.                     s17-dictation, act 5
];

/** Shown inside the listening mission, where a day sits in a longer sentence. */
const IN_THE_WILD = [
  'fr.a1.jours-et-mois.032', // J'ai piscine le mardi et le jeudi.
  'fr.a1.jours-et-mois.038', // Nous partons jeudi et nous revenons dimanche.
];


const ITEM_IDS = [
  ...new Set([...DAYS, ...FRAME, ...PAIRS, ...HABITUAL, ...REINFORCED, ...SPECIFIC, ...MARKED, ...NAMING, ...IN_THE_WILD]),
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag.
 *
 *  Verified against POSTGRES, not the seed, on 2026-08-06: of the 231 published
 *  a1 rows in this theme, ZERO carry voiceflash (191 are dictation-only and 40
 *  are flashcard+review+sentence). So the spoken mission is the seven days, the
 *  frame words and the fourteen authored pairs, all of which do carry it, and
 *  none of the borrowed a1 sentences. That is a real constraint discovered in
 *  the database rather than a design choice, and it is in the report.
 *
 *  The two `chunk` rows are excluded on purpose: « on se voit » is a verb no A1
 *  unit conjugates, so the mic must never ask for it. */
const SPEAK_IDS = [
  ...DAYS,
  ...FRAME,
  ...PAIRS.filter((id) => !CHUNK_IDS.includes(id)),
];

/** The dictée, and every target was chosen by MEASUREMENT rather than taste.
 *
 *  Two modes on purpose. See the header: `le` is in WORD_DECOY_POOL, so a
 *  word-mode dictée on a BARE day sentence hands the learner `le` as a tile
 *  they must decide not to place, which is the lesson's own decision in the one
 *  place it is visible. The letter-mode pair tests the spelling of the day
 *  names, which nothing else here does.
 *
 *  Every id below carries the `dictation` drill and every mode is asserted
 *  through the real `dicteeMode` rather than a restated length. */
const DICTATION_IDS = [
  'fr.a1.jours-et-mois.233', // J'ai cours lundi.          13 letters, LETTERS
  'fr.a1.jours-et-mois.232', // J'ai cours le lundi.       15 letters, LETTERS
  'fr.a1.jours-et-mois.243', // Je suis libre samedi.      17 letters, WORDS, decoys et/le
  'fr.a1.jours-et-mois.242', // Je suis libre le samedi.   19 letters, WORDS
  'fr.a1.jours-et-mois.016', // Demain, c'est mardi.       15 letters, LETTERS
];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is being misread as a person rather than being
 * misunderstood, and days have that failure built into them: they exist so
 * people can arrange to meet, and this rule is the difference between accepting
 * an invitation and describing your calendar.
 *
 * Chloé asks whether the learner is free on Saturday. The learner means yes,
 * this Saturday, and says « Je suis libre le samedi », which is a true sentence
 * about their week and not an answer to the question. Nothing was
 * mispronounced. Chloé cannot tell whether she has been accepted, turned down
 * politely, or told something irrelevant, so she stops asking, and that is the
 * cost: the learner is not corrected, the plan just quietly does not happen.
 *
 * The choice beat is those two sentences, which are the lesson's own authored
 * pair, so the beat, the table, the drill and the dictée are all the same two
 * rows.                                                                      */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A Thursday evening in Lyon. Your phone goes while you are still on the tram home.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'It is Chloé, who you met at a language exchange three weeks ago and have been meaning to see again.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Chloé',
    fr: 'Tu es libre samedi ?',
    en: 'Are you free on Saturday?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-08-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You are free this Saturday, and you want to see her. What goes back?',
    options: [
      {
        fr: frOf('fr.a1.jours-et-mois.242'),
        respell: sub('le samedi'),
        en: 'the one with the little word in it',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: frOf('fr.a1.jours-et-mois.243'),
        respell: sub('samedi'),
        en: 'the one without it',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes, and that is a yes. Watch what the other one does to her evening.',
      breaks: 'Every word in that is correct French. Watch what happens next anyway.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: frOf('fr.a1.jours-et-mois.242'),
    en: '(I am free on Saturdays)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Chloé',
    fr: 'Ah, d\'accord. Bon, une autre fois alors.',
    en: 'Ah, all right. Another time then.',
    stage: 'She does not ask again. The three dots appear once and stop.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-08-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'She did not hear a yes',
    // 38 words. The shipped scene breaks run 24 to 40 here.
    body: 'She asked about one Saturday and you answered about all of them. That is a fact about your week, not an acceptance, so she read it as a polite way of not saying yes. Nothing was mispronounced and nothing got corrected.',
    wrong: {
      fr: frOf('fr.a1.jours-et-mois.242'),
      ipa: '/ʒə sɥi libʁ lə sam.di/',
      respell: sub('le samedi'),
      en: 'I am free on Saturdays, as a rule',
    },
    right: {
      fr: frOf('fr.a1.jours-et-mois.243'),
      ipa: '/ʒə sɥi libʁ sam.di/',
      respell: sub('samedi'),
      en: 'I am free this Saturday, which is a yes',
    },
    coach: `${REFRAME} One word, and it decides whether you have made a plan or described a habit.`,
    // Audio-first: the ear answers before the eye can. `autoplay` is NOT set. It
    // is declared in schema.ts and implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-08-pairs' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'Second try',
    fr: frOf('fr.a1.jours-et-mois.243'),
    en: 'I am free on Saturday.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Chloé',
    fr: frOf('fr.a1.jours-et-mois.246'),
    en: 'Shall we meet on Saturday?',
    stage: 'She has already sent a second message with a place in it.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'One word separated a plan from a description, and it is the same word on all seven days.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the day you meant ─────────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Saturday She Meant',
    frSub: 'Le samedi qu\'elle voulait dire',
    render: 'screens',
    layer: 'core',
    terms: ['everyWeek', 'oneDay'],
    say: {
      text: 'One question, one answer, and nothing you said was wrong. Watch which word was doing the damage.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A tram going north, and a phone in your hand',
      city: 'Lyon',
      time: 'Thursday, just after seven',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    // Referenced, never retyped, so this appearance cannot drift out of
    // agreement with the six others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} That is the whole of the next twenty minutes.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end you will have the seven names and the one word that decides how often.`,
    goals: [
      { t: 'Name all seven days', s: 'In order, starting where a French calendar starts, which is not where an English one does.' },
      { t: 'Say what you do every week', s: 'One article turns one day into all of them, on all seven days, with no exceptions.' },
      { t: 'Make a plan for one day', s: 'Accept an invitation for a Saturday without accidentally describing your whole year.' },
      { t: 'Write a day correctly', s: 'Lowercase, with nothing in front of it, which is two habits English gives you and French does not want.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-week',
    title: 'Where The Week Starts',
    frSub: 'La semaine française',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['weekStartsMonday'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-08-week' },
    say: 'Four cards before any of the seven words, because the shape of the week decides how you read all of them.',
    cards: [
      {
        label: 'The row',
        head: 'Monday first, Sunday last',
        // Display strings, not corpus ids: these four frame words are withdrawn
        // from the seed so they cannot move a1.03's printed ending figures.
        // See WITHDRAWN_IDS in jours-corpus.ts.
        fr: 'la semaine',
        sub: `${sub('la semaine')} · the week`,
        body: 'A printed French calendar starts its week on Monday. Lundi sits in the first column and dimanche in the last, so the two days at the right-hand edge are the weekend.',
      },
      {
        label: 'Why it matters',
        head: 'You will read one before you say one',
        fr: 'le calendrier',
        sub: `${sub('le calendrier')} · the calendar`,
        body: 'The first French calendar you meet will be a shop notice or a timetable, and counting the columns from the wrong end puts every appointment one place out.',
      },
      {
        label: 'The weekend',
        head: 'At the end, not around it',
        fr: 'le week-end',
        sub: `${sub('le week-end')} · the weekend`,
        body: 'Borrowed straight from English, hyphenated, and masculine. It sits at the end of the row rather than wrapping from one week into the next.',
      },
      {
        label: 'What is actually hard',
        head: 'Not the seven',
        body: `Seven short words is an afternoon and there is no pattern to teach. ${REFRAME} That is the half that will still be catching you in a year, so it gets eight missions and the names get three.`,
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's04-days',
    title: 'The Seven, In Order',
    frSub: 'Les sept jours',
    layer: 'core',
    terms: ['weekStartsMonday'],
    sheetId: 'sheet.a1.08.week',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-08-seven' },
    say: 'Seven rows in week order. Tap any one to hear it, and tap again for where the name came from.',
    // Three columns, every cell three words or fewer. tapTable is not in
    // ownsLayout(), so this renders in a scrolling page: seven rows plus a
    // header is the most any A1 lesson asks one to hold, and it was walked on a
    // device before shipping. The long copy lives in the detail modal.
    cols: ['French', 'English', 'Named after'],
    rows: THE_SEVEN.map((d, i) => ({
      cells: [d, ORIGINS[d].origin === 'the Sabbath' || ORIGINS[d].origin === "the Lord's day"
        ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i]
        : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i],
        ORIGINS[d].origin],
      say: d,
      detail: {
        title: d,
        body: `${ORIGINS[d].note} Said out loud it is ${sub(d)}, and every one of the seven takes the stress on its last syllable.`,
        say: d,
      },
    })),
  },

  /* ── Act 2: seven words ───────────────────────────────────────────────── */

  {
    // The only xl section in the lesson, and correct here for the reason xl
    // exists: every card is ONE French word with a two-word gloss.
    // density.logic.ts caps EVERY string in an xl section at 12 words, which is
    // why the teaching lives in the table above and this is a hero deck.
    type: 'cardDeck',
    id: 's05-seven',
    title: 'One At A Time',
    frSub: 'Un jour par écran',
    hint: 'Swipe. Say each one out loud before you move on.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-08-seven' },
    say: 'Seven screens, one day each. Say it out loud before you swipe, every time.',
    cards: THE_SEVEN.map((d, i) => ({
      label: `${i + 1} of 7`,
      fr: d,
      sub: sub(d),
      body: ['Monday.', 'Tuesday.', 'Wednesday.', 'Thursday.', 'Friday.', 'Saturday.', 'Sunday.'][i],
    })),
  },

  {
    type: 'groupDrill',
    id: 's06-sort',
    title: 'Five, Then Two',
    frSub: 'La semaine et le week-end',
    layer: 'core',
    terms: ['weekStartsMonday'],
    say: 'Read each one, say it, then check. The split is five working days and two at the end.',
    groups: [
      {
        label: 'The five that carry the week',
        items: THE_SEVEN.slice(0, 5).map((d, i) => ({
          fr: d,
          itemId: DAYS[i],
          respell: sub(d),
          en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'][i],
        })),
        check: {
          q: 'Which day sits between mardi and jeudi?',
          opts: ['lundi', 'vendredi', 'mercredi', 'samedi'],
          correct: 2,
          why: 'mercredi. It is the longest of the seven and the one in the middle, which is the pair of facts that makes it easy to place once you have noticed them.',
        },
      },
      {
        label: 'The two at the end',
        items: THE_SEVEN.slice(5).map((d, i) => ({
          fr: d,
          itemId: DAYS[5 + i],
          respell: sub(d),
          en: ['Saturday', 'Sunday'][i],
        })),
        check: {
          q: 'A French calendar puts which day in its first column?',
          opts: ['dimanche', 'lundi', 'samedi', 'it varies'],
          correct: 1,
          why: 'lundi. The week runs Monday to Sunday, so the weekend is the two columns at the right-hand edge rather than one at each end.',
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
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-08-pairs' },
    say: 'One pair here is genuinely hard at speed. Slow the audio down before you answer.',
    lines: [
      { fr: 'mardi', en: 'Tuesday' },
      { fr: 'jeudi', en: 'Thursday' },
      { fr: frOf('fr.a1.jours-et-mois.032'), en: enOf('fr.a1.jours-et-mois.032') },
      { fr: frOf('fr.a1.jours-et-mois.038'), en: enOf('fr.a1.jours-et-mois.038') },
    ],
    questions: [
      {
        q: 'Which two of the seven are hardest to separate at conversational speed?',
        opts: ['lundi and mardi', 'mardi and jeudi', 'samedi and dimanche', 'none of them, they are all distinct'],
        correct: 1,
        why: 'Both are two syllables ending in the same DEE, and the opening consonant is the only difference. At speed the m and the zh are the whole of it, which is why an arrangement gets made for the wrong day.',
      },
      {
        q: 'Line three names two days. Does it mean two particular days or every week?',
        opts: ['Two particular days', 'Every week', 'It cannot be told', 'Neither, it is about the past'],
        correct: 1,
        why: 'Every week. There is a le in front of each day, and that is the only signal there is. Nothing else in the sentence says how often.',
      },
      {
        q: 'Line four names two days and neither has a le. What does that tell you?',
        opts: ['It happens every week', 'It is one particular trip', 'It happened last week', 'It is a question'],
        correct: 1,
        why: 'One trip, out on Thursday and back on Sunday. A bare day is one day, and which one the conversation has already settled.',
      },
    ],
  },

  /* ── Act 3: the article that means every week ─────────────────────────── */

  {
    type: 'cardDeck',
    id: 's08-rule',
    title: 'The Word That Means Every',
    frSub: 'Le petit mot',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['everyWeek', 'oneDay'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-08-pairs' },
    say: 'Read this one properly. It is the reason the rest of the lesson is eight missions rather than one.',
    cards: [
      {
        label: 'You already have this',
        head: 'The same le as le café',
        fr: "J'aime le café.",
        sub: 'I like coffee',
        body: `${Cap(unitRef('a1.04'))} taught this le: coffee in general rather than one cup, where English uses no article at all. A day works the same way, and this lesson is that rule pointed at a Monday.`,
      },
      {
        label: 'The line',
        head: 'One word, two meanings',
        fr: frOf('fr.a1.jours-et-mois.232'),
        sub: `${sub('le lundi')} · every Monday`,
        body: `${REFRAME} Take the le away and you are talking about one Monday instead, the one the conversation is already about.`,
      },
      {
        label: 'It is about English',
        head: 'Yours marks it somewhere else',
        fr: 'le lundi · lundi',
        sub: 'on Mondays · on Monday',
        body: 'English puts a plural S on the day. French puts a singular article in front of it. There is nothing to carry across, which is why this one never arrives by accident.',
      },
      {
        label: 'Singular, not plural',
        head: 'Never les lundis',
        fr: frOf('fr.a1.jours-et-mois.234'),
        sub: `${sub('le samedi')} · not ${sub('les lundis')}`,
        body: 'Reaching for the English plural gives you les lundis, which is real French meaning Mondays as a set of days. It is not how you say every Monday.',
      },
    ],
  },

  {
    // THE mission. Both halves of the rule on ONE screen, in two columns, so the
    // learner watches the article appear and the meaning change rather than
    // meeting the two sides four screens apart. The brief calls this the single
    // most important layout decision in the lesson and it is right.
    //
    // tapTable is not in ownsLayout(), so this scrolls. Seven rows, three
    // columns, every cell three words or fewer. Walked on a device.
    type: 'tapTable',
    id: 's09-both',
    title: 'Every Week, Or One Day',
    frSub: 'Le lundi ou lundi',
    layer: 'core',
    terms: ['everyWeek', 'oneDay'],
    sheetId: 'sheet.a1.08.rule',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-08-pairs' },
    say: `${REFRAME} Left column has it, right column does not. Tap either side of a row to hear the pair.`,
    cols: ['Every week', 'One day', 'Day'],
    rows: THE_SEVEN.map((d) => ({
      cells: [`le ${d}`, d, d],
      say: `le ${d}, ${d}`,
      detail: {
        title: `le ${d} · ${d}`,
        body: `With the article it is every ${['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][THE_SEVEN.indexOf(d)]}, as a rule about your week. Without it, it is one, and which one the conversation has already decided. Out loud the difference is one unstressed syllable, so it is easy to hear and easy to leave out.`,
        say: `le ${d}, ${d}`,
      },
    })),
  },

  {
    type: 'groupDrill',
    id: 's10-habit',
    title: 'Seven Pairs, Said Out Loud',
    frSub: 'Les sept paires',
    layer: 'core',
    terms: ['everyWeek', 'oneDay'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-08-pairs' },
    // Two groups, words only, no check. The check is s10b, a page of its own,
    // which is the pattern sons.05, sons.06, a1.03, a1.07 and a1.11 all use and
    // the one lesson-contract.test.ts now enforces at xl. No size is set here,
    // so this is the plain stacked branch.
    say: 'Sixteen sentences in eight pairs. Read a pair across, not down, and say both halves before you move on.',
    // The two `chunk` rows are INCLUDED here, and that is a v5 correction. They
    // were filtered out on the reasoning that a verb no A1 unit conjugates
    // should not be drilled, which is right about PRODUCTION and wrong here:
    // this is a words deck the learner reads, not a mic drill, and the exclusion
    // left « On se voit le samedi. » authored, released to spaced repetition and
    // shown on no screen in the lesson. That is the exact "authored, valid,
    // invisible" failure the brief opens on, and it was caught by the tranche
    // check rather than on a device.
    //
    // Production is still refused: SPEAK_IDS filters CHUNK_IDS, the dictée never
    // names one, and the batch, the merge and the test all assert it.
    groups: [
      {
        label: 'With the article: every week',
        items: [
          ...sideIds('habitual').map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
          ...HABITUAL.map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
        ],
      },
      {
        label: 'Without it: one day',
        items: [
          ...sideIds('specific').map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
          ...SPECIFIC.map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
        ],
      },
      {
        // The one place the plural is right. Said only in prose until v6, which
        // left both sentences reachable through drill-singular and shown on no
        // screen: a learner who never failed round 4 never met them, and the
        // tranche released them anyway.
        label: 'Said twice over: tous les',
        items: REINFORCED.map((id) => ({ fr: frOf(id), itemId: id, en: enOf(id) })),
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's10b-check',
    title: 'A Plan, Or A Habit?',
    frSub: 'Contrôle',
    layer: 'core',
    terms: ['everyWeek'],
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
          q: 'A friend asks if you are free on Saturday. You are, this week. What do you answer?',
          opts: [
            'Je suis libre le samedi.',
            'Je suis libre samedi.',
            'Je suis libre les samedis.',
            'Je suis libre sur samedi.',
          ],
          correct: 1,
          why: 'She asked about one Saturday, so answer about one Saturday. With le you have described your usual week, which is true and is not a yes.',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's11-specific',
    title: 'Which One Did You Mean',
    frSub: 'Un jour précis',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['oneDay'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: 'The bare day is one day. These four cards are how you make sure it is the one you meant.',
    cards: [
      {
        label: 'The default',
        head: 'The nearest one',
        fr: frOf('fr.a1.jours-et-mois.011'),
        sub: 'Saturday, this Saturday',
        body: 'A bare day means the closest one that makes sense. Said on a Wednesday, samedi is in three days. Nothing marks it because there is only ever one close enough to mean.',
      },
      {
        label: 'Being certain',
        head: 'prochain and dernier',
        fr: frOf('fr.a1.jours-et-mois.034'),
        sub: 'next Saturday',
        body: 'Put prochain after the day for the one coming and dernier for the one gone. Both go after, never before, and neither takes an article.',
      },
      {
        label: 'Looking back',
        head: 'The one just gone',
        fr: frOf('fr.a1.jours-et-mois.019'),
        sub: 'last Friday',
        body: 'Vendredi dernier is the Friday just gone. You will read far more of these than you say for now, so recognising the shape is enough.',
      },
      {
        label: 'The over-correction',
        head: 'Do not add it back',
        fr: frOf('fr.a1.jours-et-mois.007'),
        sub: 'next Thursday',
        body: 'Once the article rule lands, the temptation is to put le in front of everything. A day carrying prochain or dernier never takes one.',
      },
    ],
  },

  /* ── Act 4: where English points the wrong way ────────────────────────── */

  {
    type: 'tapTable',
    id: 's12-noprep',
    title: 'Two Habits To Drop',
    frSub: 'Ce que le français ne veut pas',
    layer: 'core',
    terms: ['noPreposition', 'lowercase'],
    sheetId: 'sheet.a1.08.rule',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: 'Two things English makes you add and French does not want. Tap either row for why.',
    cols: ['English gives you', 'French wants', 'Where it shows'],
    rows: [
      {
        cells: ['on Monday', 'lundi', 'out loud'],
        say: frOf('fr.a1.jours-et-mois.233'),
        detail: {
          title: 'Nothing in front of the day',
          body: 'English needs on and French needs nothing. Sur is physically on top of something, and à lundi is how you say goodbye until Monday. Neither says when. This is the one error here that leaves a listener with nothing to repair.',
          say: frOf('fr.a1.jours-et-mois.233'),
        },
      },
      {
        cells: ['Monday', 'lundi', 'on the page'],
        say: frOf('fr.a1.jours-et-mois.022'),
        detail: {
          title: 'A small letter, always',
          body: 'French treats a day as an ordinary noun, so it takes a capital only where any word would: at the start of a sentence. This is inaudible, which is why it survives for years in the writing of people who speak well.',
          say: frOf('fr.a1.jours-et-mois.001'),
        },
      },
      {
        cells: ['on Mondays', 'le lundi', 'both'],
        say: frOf('fr.a1.jours-et-mois.232'),
        detail: {
          title: 'The one place a word IS wanted',
          body: `${REFRAME} French does put a word in front of a day, just never the one English reaches for. This one is an article and it changes the meaning. A preposition would only have been grammar.`,
          say: frOf('fr.a1.jours-et-mois.232'),
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
    terms: ['everyWeek', 'noPreposition', 'lowercase'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-08-traps' },
    say: `${REFRAME} Four sentences an English speaker produces in their first month, one per screen.`,
    errors: [
      {
        wrong: 'Saying « Je suis libre samedi » when you mean every Saturday.',
        right: 'Saying « Je suis libre le samedi » when you mean every Saturday.',
        why: 'This one costs the most, because it lands while somebody is making a plan with you. A bare day is one day, so you have answered about this week when you meant your whole year, or the other way round.',
      },
      {
        wrong: 'Saying « On se voit sur samedi ».',
        right: 'Saying « On se voit samedi ».',
        why: 'English needs on and French needs nothing at all. Sur means physically on top of, so this asks to meet standing on a Saturday and there is nothing for a listener to repair. À lundi is real, and it means see you Monday.',
      },
      {
        wrong: 'Writing « Je viens Lundi ».',
        right: 'Writing « Je viens lundi ».',
        why: 'Days are ordinary nouns in French and take a capital only at the start of a sentence. Nobody will hear this and everybody will read it, which is why it survives for years in the writing of people who speak the language well.',
      },
      {
        wrong: 'Saying « J\'ai cours les lundis » for every Monday.',
        right: 'Saying « J\'ai cours le lundi » for every Monday.',
        why: 'The English plural, moved across. Les lundis is real French meaning Mondays as a set, so nothing marks it wrong and it never gets corrected. The habitual form is singular. Tous les lundis is where the plural belongs.',
      },
    ],
  },

  {
    type: 'reading',
    id: 's14-reading',
    title: 'The Note On The Door',
    frSub: 'Le mot sur la porte',
    layer: 'core',
    terms: ['everyWeek', 'oneDay', 'lowercase'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a
    // reading section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions. a1.01 shipped five entries down the other path.
    questionsInModal: true,
    say: 'Every day in this passage is lowercase and half of them carry an article. Tap any underlined phrase.',
    // Paul's A1 rule, set on a1.01's passage: anything not inside « » is in
    // English. ONE BLOCK, NO LINE BREAKS. See the header.
    text:
      'There is a printed card taped inside the window of the bakery on the corner, and under it somebody has stuck a second one, handwritten. '
      + 'The printed one has been there for years. '
      + '« Le magasin est fermé le mardi. » '
      + 'The handwritten one went up this morning, in biro, slightly crooked. '
      + '« Le magasin est fermé mardi. » '
      + 'Read quickly they are the same sentence and one word apart, and the difference between them is a week of your shopping. '
      + 'The printed card is about every Tuesday, for ever, which is when this baker takes his day off. '
      + 'The handwritten one is about one Tuesday, the one coming, because something is happening that week. '
      + 'Underneath both, in the same biro, he has added the part that matters to his regulars. '
      + '« On se voit mercredi. » '
      + 'Nobody needs telling which Wednesday.',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words (MAX_GLOSS_WORDS).
    // Longest match wins, which is why the two shop sentences are entered as
    // four-word phrases rather than as whole sentences: a five-word key can
    // never match and would draw no underline at all, which is the bug a1.07
    // caught in its own reading.
    //
    // LONGEST MATCH WINS ALSO MEANS AN ENTRY CAN BE SHADOWED OUT OF EXISTENCE.
    // v1 of this lesson shipped « le mardi » and « mercredi » as their own
    // entries, and neither could ever underline anything: every occurrence of
    // « le mardi » in this passage is inside « est fermé le mardi », and the
    // only « mercredi » is inside « on se voit mercredi ». Both were valid
    // objects, both passed the schema, and both drew nothing. Caught by
    // gloss.logic.test.ts, which runs the real segmentSentence over the whole
    // seed, and NOT by the first version of this lesson's own test, which
    // compared matched TEXT rather than matched KEY and so counted a shadowed
    // entry as found. That test now compares keys, the way the real one does.
    //
    // The fix is to split rather than to delete: « on se voit » and
    // « mercredi » are two entries that both match, and together they say what
    // the one shadowed entry was trying to say.
    glossary: [
      { word: 'est fermé le mardi', en: 'is closed on Tuesdays', note: 'Every Tuesday, for ever. The article is the whole difference, and this is what a printed sign means.' },
      { word: 'est fermé mardi', en: 'is closed on Tuesday', note: 'One Tuesday, the one coming. This is what the handwritten one means.' },
      { word: 'le magasin', en: 'the shop', note: 'Masculine, so le rather than la. Nothing to do with the day rule.' },
      { word: 'on se voit', en: 'see you', note: 'Read this as a whole phrase. The verb behind it is not one you have been given yet.' },
      { word: 'mercredi', en: 'Wednesday', note: 'Lowercase, and with nothing in front of it. Both are the French default, and a bare day is the nearest one.' },
    ],
    questions: [
      { q: 'The two signs are one word apart. What does that word change?', a: 'How often. The printed one has le in front of mardi and means every Tuesday, which is the baker\'s regular day off. The handwritten one has no article and means one Tuesday, the one coming.' },
      { q: 'Which of the two signs would you expect to come down next week, and why?', a: 'The handwritten one. It is about a single Tuesday, so once that Tuesday has passed it says nothing. The printed one describes a habit and stays up for years.' },
      { q: 'Why does nobody need telling which Wednesday he means?', a: 'Because a bare day is always the nearest one that makes sense. The conversation has already settled which week everyone is in, so the day on its own is enough.' },
    ],
  },

  /* ── Act 5: say it, spell it, use it ──────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's15-words',
    title: 'The Week, Banked',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['everyWeek', 'weekStartsMonday'],
    sheetId: 'sheet.a1.08.week',
    say: 'Three decks. Seven names, the words around them, and the pair that is the whole rule.',
    themes: [
      {
        title: 'the seven',
        cards: THE_SEVEN.map((d, i) => ({
          fr: d,
          sub: sub(d),
          en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i],
        })),
      },
      {
        title: 'the week around them',
        cards: [
          { fr: 'la semaine', sub: sub('la semaine'), en: 'the week' },
          { fr: 'le week-end', sub: sub('le week-end'), en: 'the weekend' },
          { fr: 'le jour', sub: sub('le jour'), en: 'the day' },
          { fr: 'hier', sub: sub('hier'), en: 'yesterday' },
          { fr: 'demain', sub: sub('demain'), en: 'tomorrow' },
          { fr: 'le calendrier', sub: sub('le calendrier'), en: 'the calendar' },
          { fr: 'tous les jours', sub: sub('tous les jours'), en: 'every day' },
        ],
      },
      {
        title: 'every week, or one day',
        cards: [
          { fr: 'le lundi', sub: sub('le lundi'), en: 'on Mondays, every week' },
          { fr: 'lundi', sub: sub('lundi'), en: 'on Monday, one day' },
          { fr: 'le samedi', sub: sub('le samedi'), en: 'on Saturdays, every week' },
          { fr: 'samedi', sub: sub('samedi'), en: 'on Saturday, one day' },
          { fr: 'tous les samedis', sub: sub('tous les samedis'), en: 'every Saturday, said twice over' },
          { fr: 'les lundis', sub: sub('les lundis'), en: 'Mondays as a set, which is not the rule' },
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
    say: 'English on the front. Say the French out loud, article and all, before you flip.',
    cards: [
      { front: 'Monday', back: 'lundi', say: 'lundi' },
      { front: 'Tuesday', back: 'mardi', say: 'mardi' },
      { front: 'Wednesday', back: 'mercredi', say: 'mercredi' },
      { front: 'Thursday', back: 'jeudi', say: 'jeudi' },
      { front: 'Friday', back: 'vendredi', say: 'vendredi' },
      { front: 'Saturday', back: 'samedi', say: 'samedi' },
      { front: 'Sunday', back: 'dimanche', say: 'dimanche' },
      { front: 'the week', back: 'la semaine', say: 'la semaine' },
      { front: 'the weekend', back: 'le week-end', say: 'le week-end' },
      { front: 'tomorrow', back: 'demain', say: 'demain' },
      { front: 'yesterday', back: 'hier', say: 'hier' },
      { front: 'I have class on Mondays (every week)', back: "J'ai cours le lundi.", say: "J'ai cours le lundi." },
      { front: 'I have class on Monday (this one)', back: "J'ai cours lundi.", say: "J'ai cours lundi." },
      { front: 'I am free on Saturdays (every week)', back: 'Je suis libre le samedi.', say: 'Je suis libre le samedi.' },
      { front: 'I am free on Saturday (this one)', back: 'Je suis libre samedi.', say: 'Je suis libre samedi.' },
      { front: 'The shop is closed on Tuesdays', back: 'Le magasin est fermé le mardi.', say: 'Le magasin est fermé le mardi.' },
      { front: 'We have swimming on Wednesdays', back: 'On a piscine le mercredi.', say: 'On a piscine le mercredi.' },
      { front: 'She is in Paris on Thursdays', back: 'Elle est à Paris le jeudi.', say: 'Elle est à Paris le jeudi.' },
      { front: 'We have a meeting on Friday (this one)', back: 'Nous avons une réunion vendredi.', say: 'Nous avons une réunion vendredi.' },
      { front: 'The museum is free on Sundays', back: 'Le musée est gratuit le dimanche.', say: 'Le musée est gratuit le dimanche.' },
      { front: 'next Saturday', back: 'samedi prochain', say: 'samedi prochain' },
      { front: 'last Friday', back: 'vendredi dernier', say: 'vendredi dernier' },
    ],
  },

  {
    type: 'dictation',
    id: 's17-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // Two modes, both measured. See the header: `le` is in the word-mode decoy
    // pool, so the bare-day targets hand the learner a le tile they must decide
    // NOT to place. That is this lesson's own question, asked in the one place
    // the difference is visible.
    say: 'Five lines. Two of them offer you a word you must decide not to use, which is the whole exercise.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's18-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // The only practice mission in the lesson, deliberately. `practice.skill` is
    // authored and read by no component: PracticeVFView takes itemIds and
    // nothing else, so a read mission and a speak mission render identically.
    // sons.06 ships two practice sections doing the same job and it reads as a
    // repeat.
    say: 'The seven, the week around them, and the pairs. The little word in front is what the mic is listening for.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's19-scenario',
    title: 'Making A Plan',
    frSub: 'On se voit quand ?',
    layer: 'core',
    terms: ['everyWeek', 'oneDay'],
    say: 'One exchange, and you hold up your half. Every turn turns on whether you meant one day or all of them.',
    setting: 'A message thread with Chloé, the evening after the language exchange, working out when you are both free.',
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
        ai: 'Salut ! Tu es libre cette semaine ?',
        en: 'Hi! Are you free this week?',
        user: 'Salut ! Je suis libre jeudi et samedi.',
        userEn: 'Hi! I am free on Thursday and Saturday.',
        alts: [
          { fr: 'Salut ! Oui, je suis libre jeudi.', en: 'Hi! Yes, I am free on Thursday.' },
          { fr: 'Oui ! Jeudi ou samedi, ça va.', en: 'Yes! Thursday or Saturday works.' },
        ],
      },
      {
        ai: 'Ah, moi j\'ai cours le jeudi. Samedi alors ?',
        en: 'Ah, I have class on Thursdays. Saturday then?',
        user: 'Samedi, oui. Je suis libre samedi.',
        userEn: 'Saturday, yes. I am free on Saturday.',
        alts: [
          { fr: 'Parfait, samedi.', en: 'Perfect, Saturday.' },
          { fr: 'Oui, samedi ça marche.', en: 'Yes, Saturday works.' },
        ],
      },
      {
        ai: 'Super. Le musée est gratuit le dimanche, mais samedi c\'est bien aussi.',
        en: 'Great. The museum is free on Sundays, but Saturday is good too.',
        user: 'Le musée est fermé le samedi ?',
        userEn: 'Is the museum closed on Saturdays?',
        alts: [
          { fr: 'Il est ouvert le samedi ?', en: 'Is it open on Saturdays?' },
          { fr: 'Et le musée, il est ouvert samedi ?', en: 'And the museum, is it open on Saturday?' },
        ],
      },
      {
        ai: 'Non, il est ouvert. Il est fermé le mardi.',
        en: 'No, it is open. It is closed on Tuesdays.',
        user: 'D\'accord. On se voit samedi, alors.',
        userEn: 'All right. See you Saturday, then.',
        alts: [
          { fr: 'Très bien. À samedi !', en: 'Very good. See you Saturday!' },
          { fr: 'Parfait, on se voit samedi.', en: 'Perfect, see you Saturday.' },
        ],
      },
      {
        ai: 'À samedi ! Et si tu es libre le dimanche, on peut y retourner.',
        en: 'See you Saturday! And if you are free on Sundays, we can go back.',
        user: 'Je suis libre le dimanche, oui. Tous les dimanches.',
        userEn: 'I am free on Sundays, yes. Every Sunday.',
        alts: [
          { fr: 'Oui, je suis libre le dimanche.', en: 'Yes, I am free on Sundays.' },
          { fr: 'Le dimanche, oui, toujours.', en: 'On Sundays, yes, always.' },
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
    terms: ['everyWeek', 'oneDay', 'noPreposition'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'A friend asks if you are free this Saturday. You are.', back: `Je suis libre samedi. ${REFRAME}`, say: 'Je suis libre samedi.' },
      { front: 'Your timetable puts a class on every Monday.', back: "J'ai cours le lundi. The article is doing all the work.", say: "J'ai cours le lundi." },
      { front: 'The shop shuts every Tuesday, for ever.', back: 'Le magasin est fermé le mardi. This is what a printed sign says.', say: 'Le magasin est fermé le mardi.' },
      { front: 'The shop shuts this coming Tuesday only.', back: 'Le magasin est fermé mardi. Same sentence, one word shorter.', say: 'Le magasin est fermé mardi.' },
      { front: 'How do you say "on Monday" in French?', back: 'lundi. There is no word for on, and adding one breaks the sentence.', say: 'lundi' },
      { front: 'Which day is between mardi and jeudi?', back: 'mercredi. The longest of the seven and the one in the middle.', say: 'mercredi' },
      { front: 'You want to write "I am coming Monday" in a message.', back: 'Je viens lundi. Lowercase l, because French days are ordinary nouns.', say: 'Je viens lundi.' },
      { front: 'You reach for "les lundis" for every Monday. What is wrong?', back: 'The form that means every week is singular: le lundi. Les lundis is Mondays as a set.', say: 'le lundi' },
      { front: 'Which day does a French calendar put first?', back: 'lundi. The week runs Monday to Sunday and the weekend is the last two columns.', say: 'lundi' },
      { front: 'You want to be certain it is the Saturday coming.', back: 'samedi prochain. After the day, never before, and never with an article.', say: 'samedi prochain' },
      { front: 'Every Saturday, said as strongly as it can be said.', back: 'tous les samedis. This is the one place the plural belongs.', say: 'tous les samedis' },
      { front: 'The two days easiest to confuse at speed.', back: 'mardi and jeudi. Two syllables, same ending, and only the first consonant apart.', say: 'mardi, jeudi' },
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
    body: 'You have watched a plan quietly fail over one word, learned the seven names in the order a French calendar prints them, and found out that the difference between every Monday and one Monday is an article your last-but-four lesson already taught you. You have seen both halves of that rule side by side on one screen, met the two written habits English hands you and French does not want, and read a shop door where one word was a week of your shopping. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
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
        id: 'r1-the-seven',
        label: 'The seven names',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round, and
        // the batch, the merge and the test all assert it.
        targets: ['err-wrong-day', 'err-no-article'],
        say: 'The names, quickly.',
        questions: [
          {
            q: 'A French calendar has seven columns. Which day is in the first one?',
            format: 'mcq',
            opts: ['dimanche', 'samedi', 'lundi', 'it depends on the calendar'],
            correct: 2,
            why: 'lundi. The French week runs Monday to Sunday, so the weekend is the last two columns rather than one at each end. Counting from the wrong end puts every appointment one place out.',
            ref: 's03-week',
          },
          {
            q: 'Write the day that comes between mardi and jeudi.',
            format: 'typeIn',
            accept: ['mercredi', 'le mercredi'],
            answer: 'mercredi',
            why: 'mercredi, from Mercury. It is the longest of the seven and sits in the middle of the week, which is the pair of facts that makes it easy to place.',
            ref: 's04-days',
          },
          {
            q: 'Listen. Which day is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'jeudi' },
            opts: ['mardi', 'jeudi', 'mercredi', 'vendredi'],
            correct: 1,
            why: 'jeudi. It and mardi are two syllables ending in the same DEE, and the opening consonant is the whole difference. At speed that is what sends somebody to a meeting two days early.',
            ref: 's07-ear',
          },
          {
            q: 'Five of the seven are named after planets. Which one is not?',
            format: 'mcq',
            opts: ['samedi', 'mardi', 'jeudi', 'vendredi'],
            correct: 0,
            why: 'samedi, from the Sabbath, and dimanche from the Lord\'s day. The other five are the Moon, Mars, Mercury, Jupiter and Venus, and they are the same five planets behind the English names.',
            ref: 's04-days',
          },
        ],
      },
      {
        id: 'r2-every-week',
        label: 'Every week',
        targets: ['err-no-article', 'err-plural-days'],
        say: 'The article, and what it does.',
        questions: [
          {
            q: 'Your timetable puts a class on every Monday. How do you say it?',
            format: 'mcq',
            opts: ["J'ai cours lundi.", "J'ai cours le lundi.", "J'ai cours les lundis.", "J'ai cours sur lundi."],
            correct: 1,
            why: `${REFRAME} A bare day is one day, so the first option describes a single Monday. The article is the only thing in the sentence saying how often.`,
            ref: 's08-rule',
          },
          {
            q: 'You mean every Saturday. Fix this. « Je suis libre samedi. »',
            format: 'errorSpot',
            accept: ['Je suis libre le samedi.', 'je suis libre le samedi', 'le samedi'],
            answer: 'Je suis libre le samedi.',
            why: 'Without the article this is about one Saturday, which is an answer to an invitation rather than a fact about your week. Adding le turns one Saturday into all of them.',
            ref: 's09-both',
          },
          {
            q: 'Which lesson taught you this same le already?',
            format: 'mcq',
            opts: ['the numbers lesson', 'the verb être', 'nothing has, this is new', 'the definite articles'],
            correct: 3,
            why: 'The definite articles taught le in front of a general noun, where English uses none at all: j\'aime le café is coffee in general. A day works the same way, so this is one idea rather than two.',
            ref: 's08-rule',
          },
          {
            q: 'You are closed every Tuesday. Write the two words for "on Tuesdays".',
            format: 'typeIn',
            accept: ['le mardi', 'lemardi'],
            answer: 'le mardi',
            why: 'le mardi. Singular, with the article, and that is what goes on a printed sign because it is true for ever rather than for one week.',
            ref: 's09-both',
          },
        ],
      },
      {
        id: 'r3-one-day',
        label: 'One day',
        targets: ['err-stray-article', 'err-no-article'],
        say: 'The bare day, and which one it is.',
        questions: [
          {
            q: 'Somebody asks if you are free on Saturday. You are, this week. What answers them?',
            format: 'mcq',
            opts: ['Je suis libre samedi.', 'Je suis libre le samedi.', 'Je suis libre les samedis.', 'Je suis libre tous les samedis.'],
            correct: 0,
            why: 'She asked about one Saturday, so answer about one Saturday. The other three all describe your usual week, which is true and is not a yes, and that is how a plan quietly fails.',
            ref: 's10b-check',
          },
          {
            q: 'One Thursday, the one coming. Write the French for "on Thursday".',
            format: 'typeIn',
            accept: ['jeudi'],
            answer: 'jeudi',
            why: 'jeudi, on its own. No article, because it is one day, and no preposition, because French does not use one. Two things to leave out and nothing to add.',
            ref: 's11-specific',
          },
          {
            q: 'The museum is free this Sunday only, because of an event. Fix this. « Le musée est gratuit le dimanche. »',
            format: 'errorSpot',
            accept: ['Le musée est gratuit dimanche.', 'le musée est gratuit dimanche', 'dimanche'],
            answer: 'Le musée est gratuit dimanche.',
            why: 'With the article this says every Sunday, which is a standing arrangement rather than a one-off. Take it away and you have one Sunday, the nearest one.',
            ref: 's09-both',
          },
          {
            q: 'Say it out loud: you are free this coming Saturday.',
            format: 'speak',
            target: 'Je suis libre samedi.',
            scoreSegment: 'samedi',
            accept: ['Je suis libre samedi.'],
            answer: 'Je suis libre samedi.',
            why: 'No article and no preposition. The mic is listening for what is NOT in front of the day, which is the hardest thing to hear yourself leave out.',
            ref: 's18-speak',
          },
        ],
      },
      {
        id: 'r4-one-not-all',
        label: 'Singular, not plural',
        targets: ['err-plural-days', 'err-no-article'],
        say: 'The English plural, and where it does belong.',
        questions: [
          {
            q: 'You are writing your timetable out for a friend. Which form means "every Monday"?',
            format: 'mcq',
            opts: ['les lundis', 'lundis', 'un lundi', 'le lundi'],
            correct: 3,
            why: 'le lundi, singular. English marks this with a plural S and French marks it with a singular article, so there is nothing to carry across and the English instinct gives you the wrong one every time.',
            ref: 's08-rule',
          },
          {
            q: 'Fix this. « J\'ai cours les lundis. »',
            format: 'errorSpot',
            accept: ["J'ai cours le lundi.", "j'ai cours le lundi", 'le lundi'],
            answer: "J'ai cours le lundi.",
            why: 'Les lundis is real French and means Mondays as a set of days, so nothing marks it as an error and nobody corrects it. The form that means every week is singular.',
            ref: 's13-traps',
          },
          {
            q: 'Fix this. « Elle est à Paris les jeudis. »',
            format: 'errorSpot',
            accept: ['Elle est à Paris le jeudi.', 'elle est a paris le jeudi', 'le jeudi'],
            answer: 'Elle est à Paris le jeudi.',
            why: 'The same swap on a different day, and the same reason: the habitual form is le plus a singular day. It holds for all seven with no exceptions.',
            ref: 's09-both',
          },
          {
            q: 'Where does a plural day belong?',
            format: 'mcq',
            opts: ['nowhere, it is always wrong', 'after tous les', 'in a question', 'when talking about the past'],
            correct: 1,
            why: 'tous les samedis, every Saturday, said as strongly as it can be said. That is the one frame where the day goes plural, and it is a reinforcement of the rule rather than an exception to it.',
            ref: 's15-words',
          },
        ],
      },
      {
        id: 'r5-no-little-word',
        label: 'No word for on',
        targets: ['err-invented-preposition', 'err-no-article'],
        say: 'The word English makes you add.',
        questions: [
          {
            q: 'How do you say "on Monday" in French?',
            format: 'mcq',
            opts: ['sur lundi', 'à lundi', 'lundi', 'en lundi'],
            correct: 2,
            why: 'lundi, with nothing in front of it. Sur is physically on top of, and à lundi is how you say goodbye until Monday rather than a way of saying when something happens.',
            ref: 's12-noprep',
          },
          {
            q: 'Fix this. « On se voit sur samedi. »',
            format: 'errorSpot',
            accept: ['On se voit samedi.', 'on se voit samedi', 'samedi'],
            answer: 'On se voit samedi.',
            why: 'Sur asks to meet standing on top of a Saturday, so there is nothing for a listener to repair and they ask again instead. This is the one error here that stops the sentence making sense rather than shifting its meaning.',
            ref: 's13-traps',
          },
          {
            q: 'Fix this. « Nous avons une réunion à vendredi. »',
            format: 'errorSpot',
            accept: ['Nous avons une réunion vendredi.', 'nous avons une reunion vendredi', 'vendredi'],
            answer: 'Nous avons une réunion vendredi.',
            why: 'The day needs nothing in front of it. À vendredi is a real phrase and it means see you Friday, so putting it here says goodbye in the middle of a sentence about a meeting.',
            ref: 's12-noprep',
          },
          {
            q: 'French does put one word in front of a day. Which, and what for?',
            format: 'mcq',
            opts: ['le, and it means every week', 'à, and it means on', 'sur, and it means on', 'en, and it marks the future'],
            correct: 0,
            why: `${REFRAME} It is an article rather than a preposition, and it changes the meaning rather than just being grammar. That is why leaving it out is not a small error.`,
            ref: 's12-noprep',
          },
        ],
      },
      {
        id: 'r6-on-the-page',
        label: 'On the page',
        targets: ['err-capital-day', 'err-invented-preposition'],
        say: 'What only shows in writing.',
        questions: [
          {
            // The ONLY format that can test a capital. `fold()` lowercases, so
            // typeIn and errorSpot both compare "Lundi" equal to "lundi" and
            // would mark the error correct. An mcq is picked rather than typed
            // and `quiz-duplicate-option` compares options case-sensitively.
            q: 'You are writing a message. Which is spelled correctly?',
            format: 'mcq',
            opts: ['Je viens Lundi.', 'Je viens lundi.', 'je viens Lundi.', 'Je Viens Lundi.'],
            correct: 1,
            why: 'Days are ordinary nouns in French, so lundi takes a small letter mid-sentence. Je keeps its capital because it opens the sentence, which is the only reason any word gets one here.',
            ref: 's12-noprep',
          },
          {
            q: 'Prochain never takes an article. Fix this. « Je suis libre le dimanche prochain. »',
            format: 'errorSpot',
            accept: ['Je suis libre dimanche prochain.', 'je suis libre dimanche prochain', 'dimanche prochain'],
            answer: 'Je suis libre dimanche prochain.',
            why: 'Prochain already picks out one Sunday, so the article has nothing left to do and would contradict it. This is the over-correction that arrives once the every-week rule has landed.',
            ref: 's11-specific',
          },
          {
            q: 'A printed sign reads « Fermé le mardi ». A handwritten one reads « Fermé mardi ». Which comes down next week?',
            format: 'mcq',
            opts: ['the printed one', 'both of them', 'neither', 'the handwritten one'],
            correct: 3,
            why: 'The handwritten one is about a single Tuesday, so it says nothing once that Tuesday has passed. The printed one describes a habit and stays up for years.',
            ref: 's14-reading',
          },
          {
            q: 'Write the French for "the week".',
            format: 'typeIn',
            accept: ['la semaine', 'lasemaine', 'semaine'],
            answer: 'la semaine',
            why: 'la semaine, feminine. It runs lundi to dimanche here, which is a different seven days from the one an English calendar draws even though both have seven.',
            ref: 's15-words',
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
    body: 'You can name all seven days in the order a French calendar prints them, say what you do every week, and make a plan for one particular day without accidentally describing your year. The second and third of those are the same rule read in two directions, and it is one you already had before this lesson started: it is the le from the definite articles, pointed at a day. Months are next, and they inherit every habit on this list.',
    points: [
      `${REFRAME} Take it away and you are talking about one day instead.`,
      'No word for on. Lundi, never sur lundi, and à lundi is a goodbye.',
      'Lowercase, always, except where any word would take a capital.',
      'The habitual form is singular: le lundi. Les lundis is Mondays as a set.',
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
    throw new Error('a1.08.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Days learned', v: String(THE_SEVEN.length) },
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
 * seven names and eight on the article and its consequences. A shape that put
 * eight missions on lundi to dimanche would be a flashcard deck with a lesson
 * wrapped round it, on the half of the canDo a learner can finish in an
 * afternoon.
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22. A flattering estimate buys a lesson that
 * passes the validator and exhausts the learner.                              */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The day you meant',
    sections: ['s01-scene', 's02-goals', 's03-week', 's04-days'],
    milestone: 'You have watched one word decide whether a plan happened.',
    estScreens: 25,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'Seven words',
    sections: ['s05-seven', 's06-sort', 's07-ear'],
    milestone: 'You have all seven, in the order a French calendar prints them.',
    estScreens: 19,
  },
  {
    id: 'act3',
    title: 'Every week, or one day',
    sections: ['s08-rule', 's09-both', 's10-habit', 's10b-check', 's11-specific'],
    milestone: 'Both halves of the rule, side by side, on all seven days.',
    estScreens: 36,
    restPoints: ['s10-habit/halfway'],
  },
  {
    id: 'act4',
    title: 'Where English points the wrong way',
    sections: ['s12-noprep', 's13-traps', 's14-reading'],
    milestone: 'You can write a day the way French writes it.',
    estScreens: 18,
  },
  {
    id: 'act5',
    title: 'Say it, spell it, use it',
    sections: ['s15-words', 's16-flash', 's17-dictation', 's18-speak', 's19-scenario'],
    milestone: 'You have said the pairs out loud and spelled the difference.',
    estScreens: 62,
    restPoints: ['s16-flash/halfway', 's18-speak/halfway', 's18-speak/three-quarters'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s20-review', 's21-progress', 's22-quiz', 's23-roundup'],
    milestone: 'Lesson complete. Months are next, and they inherit all of this.',
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
 * legitimately overlap: the scene's two sentences are also two of the authored
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
  // and the break. Not the seven days themselves: they are NAMED in act 1's
  // table and TAUGHT one per screen in act 2, and a card released before its
  // mission is a card the learner is asked to rate before they have met it.
  //
  // v5: this used to release .246 and .247, and the scene shows .246 but not
  // .247, so one card went to spaced repetition off a screen that did not exist.
  once(['fr.a1.jours-et-mois.242', 'fr.a1.jours-et-mois.243']),
  // Act 2: the seven, released the act that puts one on each screen.
  once(DAYS),
  // Act 3: the rule. Both halves of every authored pair, and the corpus
  // sentences the two drills are built on.
  once([...PAIRS, ...HABITUAL, ...REINFORCED, ...SPECIFIC, ...MARKED]),
  // Act 4: the two naming sentences s12-noprep shows, and the two the listening
  // mission put inside a longer line back in act 2.
  once(['fr.a1.jours-et-mois.001', 'fr.a1.jours-et-mois.022', ...IN_THE_WILD]),
  // Act 5: the frame words. These moved here from act 1 in v4, and the move is a
  // correction rather than a preference: act 1's cards show « la semaine », « le
  // calendrier » and « le week-end », which are display strings and are NOT
  // corpus rows (see WITHDRAWN_IDS). The rows that ARE corpus rows are hier,
  // demain, tous les jours and the two semaine phrases, and the first surface
  // that puts any of them in front of a learner is s15-words, in act 5. Releasing
  // them in act 1 asked for a rating on five cards the learner had not met.
  // ...plus « Demain, c'est mardi. », which the learner first meets as a dictée
  // line in this same act.
  once([...FRAME, 'fr.a1.jours-et-mois.016']),
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
    throw new Error(`a1.08.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.08.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
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
    id: 'err-wrong-day',
    description: 'Reaches for the wrong day, most often mardi for jeudi: two syllables, the same ending, and one consonant apart.',
    detectOn: ['s04-days', 's06-sort', 's07-ear', 's22-quiz/r1-the-seven'],
    drill: 'drill-seven',
    retest: 'retest-seven',
  },
  {
    id: 'err-no-article',
    description: 'Says a bare day when they mean every week. The error the reframe exists to kill, and the one the opening scene turns on.',
    detectOn: ['s01-scene', 's08-rule', 's09-both', 's10b-check', 's13-traps', 's22-quiz/r2-every-week'],
    drill: 'drill-every-week',
    retest: 'retest-every-week',
  },
  {
    id: 'err-stray-article',
    description: 'Says le plus a day when they mean one particular day. The over-correction that arrives once the first half of the rule has landed.',
    detectOn: ['s10b-check', 's11-specific', 's22-quiz/r3-one-day'],
    drill: 'drill-one-day',
    retest: 'retest-one-day',
  },
  {
    id: 'err-plural-days',
    description: 'Writes les lundis for every Monday, carrying the English plural across. Real French, wrong meaning, and nothing corrects it.',
    detectOn: ['s08-rule', 's13-traps', 's15-words', 's22-quiz/r4-one-not-all'],
    drill: 'drill-singular',
    retest: 'retest-singular',
  },
  {
    id: 'err-invented-preposition',
    description: 'Puts sur, à or en in front of a day, because English needs on. The one error here that stops a sentence making sense.',
    detectOn: ['s12-noprep', 's13-traps', 's22-quiz/r5-no-little-word'],
    drill: 'drill-no-preposition',
    retest: 'retest-no-preposition',
  },
  {
    id: 'err-capital-day',
    description: 'Writes Lundi mid-sentence. Inaudible, so nobody corrects it, and it survives for years in the writing of people who speak well.',
    detectOn: ['s12-noprep', 's13-traps', 's14-reading', 's22-quiz/r6-on-the-page'],
    drill: 'drill-lowercase',
    retest: 'retest-lowercase',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-seven',
    title: 'English in, French out',
    format: 'flashcard',
    coach: 'The English is on the left. Say the French out loud before you turn the card, and keep the stress on the last syllable.',
    pairs: [
      ['Monday', 'lundi'],
      ['Tuesday', 'mardi'],
      ['Wednesday', 'mercredi'],
      ['Thursday', 'jeudi'],
      ['Friday', 'vendredi'],
      ['Saturday', 'samedi'],
      ['Sunday', 'dimanche'],
    ],
  },
  {
    id: 'retest-seven',
    title: 'One more time',
    format: 'mcq',
    q: 'Which day comes straight after mercredi?',
    opts: ['mardi', 'jeudi', 'vendredi'],
    correct: 1,
    why: 'jeudi. mardi is the day before mercredi, and the two that sound alike sit on either side of it, which is what makes this order worth saying out loud rather than reading.',
  },
  {
    id: 'drill-every-week',
    title: 'One day, or all of them?',
    format: 'sort',
    buckets: ['Every week', 'One day'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [
      'fr.a1.jours-et-mois.232', 'fr.a1.jours-et-mois.233',
      'fr.a1.jours-et-mois.242', 'fr.a1.jours-et-mois.243',
      'fr.a1.jours-et-mois.234', 'fr.a1.jours-et-mois.235',
    ],
    coach: 'Read the word straight in front of the day. If there is a le, it is every week. If there is nothing, it is one day, and the conversation has already decided which.',
  },
  {
    id: 'retest-every-week',
    title: 'One more time',
    format: 'mcq',
    q: 'You have a class every Monday. Which is right?',
    opts: ["J'ai cours lundi.", "J'ai cours le lundi.", "J'ai cours les lundis."],
    correct: 1,
    why: 'Le lundi, singular, with the article. A bare day is one Monday and the plural is Mondays as a set, so only the middle one says every week.',
  },
  {
    id: 'drill-one-day',
    title: 'Take it away again',
    format: 'flashcard',
    coach: 'Read the habit on the left. Say the version on the right, which is about one day, and notice that the only thing you did was delete a word.',
    pairs: [
      ['Je suis libre le samedi.', 'Je suis libre samedi.'],
      ["J'ai cours le lundi.", "J'ai cours lundi."],
      ['Le magasin est fermé le mardi.', 'Le magasin est fermé mardi.'],
      ['On a piscine le mercredi.', 'On a piscine mercredi.'],
      ['Le musée est gratuit le dimanche.', 'Le musée est gratuit dimanche.'],
    ],
  },
  {
    id: 'retest-one-day',
    title: 'One more time',
    format: 'mcq',
    q: 'A friend asks if you are free this Saturday. What is a yes?',
    opts: ['Je suis libre le samedi.', 'Je suis libre samedi.', 'Je suis libre tous les samedis.'],
    correct: 1,
    why: 'She asked about one Saturday. The other two describe your usual week, which is true and is not an acceptance, so she has no way of knowing whether you are coming.',
  },
  {
    id: 'drill-singular',
    title: 'Where the plural belongs',
    format: 'sort',
    buckets: ['Says every week', 'Does not'],
    items: [
      'fr.a1.jours-et-mois.232', 'fr.a1.jours-et-mois.029',
      'fr.a1.jours-et-mois.242', 'fr.a1.marche.003',
      'fr.a1.jours-et-mois.233', 'fr.a1.jours-et-mois.243',
    ],
    coach: 'Two shapes mean every week: le plus a singular day, and tous les plus a plural one. Everything else is one day. Sort on that and nothing here is ambiguous.',
  },
  {
    id: 'retest-singular',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these does NOT mean every Saturday?',
    opts: ['le samedi', 'tous les samedis', 'les samedis'],
    correct: 2,
    why: 'Les samedis is Saturdays as a set of days, which is real French and is not how you say every Saturday. The article does that job on its own, in the singular.',
  },
  {
    id: 'drill-no-preposition',
    title: 'Nothing in front of it',
    format: 'flashcard',
    coach: 'Read the English on the left. Say the French on the right, and count how many words are in front of the day. The answer is always zero or one.',
    pairs: [
      ['on Monday', 'lundi'],
      ['on Mondays', 'le lundi'],
      ['on Saturday', 'samedi'],
      ['next Saturday', 'samedi prochain'],
      ['last Friday', 'vendredi dernier'],
    ],
  },
  {
    id: 'retest-no-preposition',
    title: 'One more time',
    format: 'mcq',
    q: 'Which one means "we are meeting on Saturday"?',
    opts: ['On se voit sur samedi.', 'On se voit samedi.', 'On se voit à samedi.'],
    correct: 1,
    why: 'Nothing in front of the day. Sur is physically on top of something, and à samedi means see you Saturday, which is a goodbye rather than a statement about when.',
  },
  {
    id: 'drill-lowercase',
    title: 'Small letters',
    format: 'sort',
    buckets: ['Written correctly', 'Written the English way'],
    items: [
      'fr.a1.jours-et-mois.001', 'fr.a1.jours-et-mois.022',
      'fr.a1.jours-et-mois.030', 'fr.a1.jours-et-mois.028',
      'fr.a1.jours-et-mois.011', 'fr.a1.jours-et-mois.013',
    ],
    coach: 'Every line here is correct French, which is the point: look at where each capital falls. A day only ever gets one because it opened the sentence, never because it is a day.',
  },
  {
    id: 'retest-lowercase',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is written the way French writes it?',
    opts: ['Je viens Lundi.', 'Je viens lundi.', 'je viens lundi.'],
    correct: 1,
    why: 'The day takes a small letter and the sentence takes a capital. The third option gets the day right and drops the capital that any first word would have.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Two, and both exist for a layout reason as much as a pedagogical one.
 * `tapTable` is not in ownsLayout(), so the in-flow tables render inside a
 * scrolling page and anything past about seven rows runs off the fold and takes
 * its chrome with it. The full versions live here.
 *
 * This is also where a learner will be a week from now, halfway through the
 * months unit, wanting the week beside the calendar. Layer 'deep' exempts these
 * from the core density caps, which is the point: a sheet is allowed to be
 * dense, and a `table` section is only legal here.                            */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.08.week',
    title: 'The week, in full',
    layer: 'deep',
    contains: ['All seven with their sound', 'Where each name came from', 'The words around a day'],
    sections: [
      {
        type: 'table',
        id: 'sheet-week-table',
        title: 'The seven days',
        layer: 'deep',
        cols: ['French', 'Sounds like', 'English', 'Named after'],
        rows: THE_SEVEN.map((d, i) => [
          d,
          sub(d),
          ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i],
          ORIGINS[d].origin,
        ]),
      },
      {
        type: 'cheatSheet',
        id: 'sheet-week-frame',
        title: 'The words around a day',
        layer: 'deep',
        rows: [
          { k: 'la semaine', v: 'The week, running lundi to dimanche. Feminine.', say: 'la semaine' },
          { k: 'le week-end', v: 'Borrowed from English, hyphenated, masculine, and at the END of the row.', say: 'le week-end' },
          { k: 'le jour', v: 'The day, as a unit. Masculine.', say: 'le jour' },
          { k: 'hier · demain', v: 'Yesterday and tomorrow. Neither takes an article or a preposition.', say: 'hier, demain' },
          { k: 'le calendrier', v: 'The calendar, which starts its week on Monday here.', say: 'le calendrier' },
          { k: 'tous les jours', v: 'Every day. The plural is correct here, after tous les.', say: 'tous les jours' },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-week-planets',
        title: 'Five planets and two days off',
        layer: 'deep',
        body: 'Five of the seven carry a planet and they are the same five planets behind the English names, which is why this is worth thirty seconds rather than a mission. Lundi is the moon, as Monday is. Mardi is Mars, where English took the Norse god Tiw instead. Mercredi is Mercury, where English took Woden. Jeudi is Jupiter, and English took Thor, so Thursday and jeudi are the same god arriving by two different roads. Vendredi is Venus, and English took Frigg, and both are the goddess of love. That leaves the two at the end of the row, which are not planets at all: samedi comes from the Sabbath and dimanche from dies dominica, the Lord\'s day. English kept the sun in Sunday and French did not. The reason this sticks is that it is checkable. You can hold the French list against the English one and watch five of them line up, and a fact you verified yourself is a different kind of memory from a fact you were handed.',
      },
    ],
  },
  {
    id: 'sheet.a1.08.rule',
    title: 'Every week, or one day',
    layer: 'deep',
    contains: ['Both halves on all seven days', 'What English does instead', 'The four errors, and which are audible'],
    sections: [
      {
        type: 'table',
        id: 'sheet-rule-table',
        title: 'All seven, both ways',
        layer: 'deep',
        cols: ['Every week', 'One day', 'English marks it'],
        rows: THE_SEVEN.map((d, i) => [
          `le ${d}`,
          d,
          `on ${['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i]}s · on ${['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i]}`,
        ]),
      },
      {
        type: 'cheatSheet',
        id: 'sheet-rule-errors',
        title: 'The four errors, and which you can hear',
        layer: 'deep',
        rows: [
          { k: 'The missing article', v: 'Je suis libre samedi for every Saturday. Audible, and it costs you a plan.', say: 'Je suis libre le samedi.' },
          { k: 'The extra article', v: 'Je suis libre le samedi for this Saturday. Audible, and it reads as a polite no.', say: 'Je suis libre samedi.' },
          { k: 'The invented preposition', v: 'sur lundi, en lundi. Audible, and the sentence stops making sense.', say: 'lundi' },
          { k: 'The English plural', v: 'les lundis for le lundi. Audible only in writing, since both sound the same.', say: 'le lundi' },
          { k: 'The capital letter', v: 'Je viens Lundi. Inaudible, so nothing ever corrects it.', say: 'Je viens lundi.' },
          { k: 'The one plural that is right', v: 'tous les samedis. Every Saturday, said as strongly as it can be said.', say: 'tous les samedis' },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-rule-why',
        title: 'Why there is nothing to carry across',
        layer: 'deep',
        body: 'English and French both mark the difference between one Monday and every Monday, and they mark it in different places with different machinery, which is the whole reason this is hard. English uses a plural on the noun: on Monday against on Mondays. French uses a singular article in front of it: lundi against le lundi. So the English signal is at the end of the word and the French signal is a separate word in front of it, and the French form is singular exactly where the English one is plural. A learner translating word by word from English arrives at les lundis, which is a real phrase meaning Mondays as a set of days, so nothing about it looks wrong and no listener repairs it. That is why this error survives years of otherwise good French. The fix is not to translate the mechanism but to replace it: decide first whether you mean every week or one day, then put le in front or leave it off. The article is the same one you learned in front of a general noun, and it is doing the same job it does there. J\'aime le café is coffee in general rather than one cup. Le lundi is Mondays in general rather than one Monday. It is one idea pointed at two different kinds of word, not two rules to keep apart.',
      },
    ],
  },
];

export const JOURS_LESSON: Lesson = {
  id: 'a1.08.l1',
  unitId: 'a1.08',
  // The lesson's index WITHIN its unit, not its place in the track. Every lesson
  // in the seed is seq 1 because every unit ships exactly one so far, and the
  // `l1` in the id is this number.
  seq: 1,
  title: 'Les jours de la semaine',
  level: 'a1',
  // TWELVE, not eight. missions.ts derives the eyebrow from unit.seq at render
  // time (`${level} · LEÇON ${unit.seq}`), and a1.08 sits at seq 12. The stored
  // value is a fallback and has to agree with what the renderer computes, or the
  // two disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7) and a1.04 ships it today.
  tag: 'A1 · LEÇON 12',
  intro:
    'Seven short words, and one that decides whether you meant one day or every one of them. This is how you name the days, say what your week looks like, and make a plan for a particular Saturday without accidentally describing your year.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The unit shipped with lessonIds: [], so this is the first lesson here and
  // the counter started at 1. It moves forward on every rebuild: the merge
  // script prints both sides, and "replacing v3 with v1" reads as a rollback.
  //
  // v2 is one fix, found by the suite after v1 had been applied to Postgres, and
  // it is a content bug rather than plumbing:
  //
  //   s14-reading's glossary declared « le mardi » and « mercredi » as their own
  //   entries and NEITHER could ever underline anything. gloss.logic.ts resolves
  //   longest-match-first, so every « le mardi » in the passage is swallowed by
  //   « est fermé le mardi » and the only « mercredi » is swallowed by « on se
  //   voit mercredi ». Both were valid objects that drew nothing, which is the
  //   same failure as the ten dead entries across sons.05, .07 and .09.
  //
  //   Caught by gloss.logic.test.ts, which runs the real segmentSentence over
  //   the whole seed. This lesson's own test did NOT catch it, because it
  //   compared matched TEXT rather than matched KEY: the text "le mardi" is
  //   still inside the winning segment, so a shadowed entry looked found. That
  //   is a second definition of "matched" free to drift from the renderer's,
  //   which is the exact mistake the brief warns about. The local test now asks
  //   the same question the real one asks.
  //
  // v3 withdraws four corpus rows and fixes the guard that let them through.
  // v2 imported « le jour », « la semaine », « le calendrier » and
  // « le week-end » into the seed. All four are gendered single-word nouns, and
  // a1.03 prints a COUNT and an ACCURACY for ten noun endings that
  // a1-03-genre.test.ts re-measures from the seed on every run. Two of its ten
  // cards moved:
  //
  //     -ier   55 -> 56                    (le calendrier)
  //     -ine   28 at 96%  ->  29 at 97%    (la semaine)
  //
  // The batch and the merge both carried a guard against exactly this, and both
  // guards were a HAND-ROLLED COPY of `endingPopulation` carrying a
  // `level === 'a1'` filter the real function does not have. The copy was taken
  // from author-avoir-batch.ts, where the same bug is present and does no harm
  // because that lesson's gendered imports are all two-word phrases.
  //
  // Both guards now call the real `endingPopulation`. The brief states the rule
  // for tests ("do not reimplement app logic inside a test") and it is just as
  // true of a batch script: a guard that reimplements the thing it guards is
  // free to drift from it, and this one did.
  //
  // The four words are still on the cards as display strings. What they lose is
  // an SRS entry, which is the right trade against silently making another
  // lesson's printed numbers wrong. See WITHDRAWN_IDS in jours-corpus.ts.
  //
  // v4 is four findings from the suite once the seed half of
  // a1-08-jours.test.ts started running (it self-skips until the merge lands, so
  // v1 to v3 were only ever half checked). Two were the test being crude and two
  // were content:
  //
  //   TEST. « les lundis » was reported as taught unframed, and the string it
  //   fired on was the `wrong` half of a commonErrors card, which IS the error
  //   and is framed by its position rather than by its words. The check now
  //   excludes those, rather than the card being reworded to satisfy it.
  //
  //   TEST. « mars » was reported as a month being taught, and it was the PLANET
  //   Mars on the etymology card the brief asks for. The check lowercased both
  //   sides first, which made the two indistinguishable. French months are always
  //   lowercase, so the check is now case-sensitive.
  //
  //   CONTENT. r4q1 read "Which form means every Monday?", five words with no
  //   situation in it. The brief is explicit that every question about the rule
  //   needs one, and the test enforced it. Rewritten with a timetable in it.
  //
  //   CONTENT, and the one that mattered. The act 1 tranche released the five
  //   frame words and no act 1 mission names any of them: v3 replaced the frOf()
  //   calls on s03-week with display strings when those four rows were
  //   withdrawn, so the cards now show « la semaine » while the corpus rows
  //   behind the tranche are hier, demain and tous les jours, which a learner
  //   does not meet until s15-words in act 5. Five cards were going to spaced
  //   repetition before the learner had seen them. Moved to act 5.
  //
  // v5 is one content bug and one test correction, both from the same failing
  // assertion, and the content half is the "authored, valid, invisible" failure
  // the brief opens on:
  //
  //   « On se voit le samedi. » (fr.a1.jours-et-mois.247) was authored,
  //   released to spaced repetition by act 1's tranche, and DRAWN ON NO SCREEN.
  //   s10-habit filtered CHUNK_IDS out of both its groups, which is right about
  //   production and wrong about a words deck, and the scene shows .246 but
  //   never .247. So the learner would have been asked to rate a card they had
  //   never seen. s10-habit now shows both chunk rows (they are read, never
  //   spoken: SPEAK_IDS still filters them and the dictée never names one), and
  //   act 1 releases the two sentences the scene actually puts on screen.
  //
  //   TEST. The tranche check answered "has the learner met this?" by grepping
  //   the act's sections for the ID, and this lesson reads its sentences through
  //   frOf(), which inlines the TEXT so no screen retypes a corpus row. So the
  //   check answered "no" for every card the learner had just read. It now looks
  //   for the item's French as well as its id, which is what "met it" means.
  //
  // v6 is the biggest of the six and the one worth reading. The tranche check
  // that found v5's single invisible sentence, once fixed, found forty-three
  // more: of 85 declared itemIds, 43 were named by NO section, NO drill and NO
  // term. They were a pool assembled while reading the corpus, released to
  // spaced repetition by act 3, and drawn by nothing. A learner would have been
  // handed 43 review cards for sentences this lesson never showed them.
  //
  // Nothing failed. Every one was a valid id resolving to a real published row,
  // `lesson-contract.test.ts` was satisfied because the ids resolve, and the
  // density validator was satisfied for the same reason. This is the failure the
  // brief opens on, at four times the scale of any example in its table, and it
  // was invisible until a check asked the different question: not "does this id
  // resolve" but "did the learner see it".
  //
  // Fixed by WIRING rather than cutting where the content earned it. Fourteen
  // corpus sentences, one per day per side, now run in s10-habit beside the
  // authored pairs, and the two `tous les` sentences are a third group. The
  // remaining 29 are dropped. itemIds falls from 85 to 55 and every one of them
  // is on a screen.
  //
  // The corpus half of this lesson is smaller than it was and the lesson is
  // better for it: it was never true that a learner met those sentences.
  //
  // v7 is the tail of the same finding. Three more rows were released by a
  // tranche before any act showed them: two naming sentences and a strike on a
  // Tuesday that was only ever a drill item. The two are released where they are
  // shown instead, and the third is dropped and replaced in drill-lowercase by a
  // sentence the lesson actually puts on a screen.
  version: 10,

  grammarAssumed: [
    'le, la, l\' and les, including le in front of a general noun, introduced in a1.04',
    'The full present of être, introduced in a1.06',
    'The full present of avoir, introduced in a1.07',
    'The nine subject pronouns, and that on takes the il form, introduced in a1.05',
    'Noun gender, introduced in a1.03',
    'The numbers from one to twenty, introduced in a1.02',
  ],
  grammarIntroduced: [
    'The seven day names, as an ordered set beginning on Monday',
    'The definite article in front of a day, marking a habitual weekly event',
    'The bare day, marking one particular day fixed by context',
    'tous les plus a plural day, as a reinforced habitual',
    'prochain and dernier after a day, and that neither takes an article',
    'The absence of any preposition before a day of the week',
    'The lowercase spelling of day names outside sentence-initial position',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Days of the Week',
    subFr: 'Les jours de la semaine',
    introFr: "Sept mots courts, et un petit mot qui décide si vous parlez d'un seul jour ou de tous.",
    minutes: 24,
    difficulty: 2,
    glyph: '📅',
    screens: 204,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: JOURS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-08-jours.test.ts, the way sons.07's
    // rec-h-pairs and a1.07's rec-a1-07-paradigm pin their own, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits, and ELEVENLABS_VOICE_AMELIE is not set in ealch-admin/.env in
    // any case. CLIP_MANIFEST is empty by design, so every card falls back to
    // device TTS until the studio delivers, and a recordingId resolving to
    // nothing is the correct shipping state.
    recorded: [
      {
        id: 'rec-a1-08-seven',
        desc:
          'THE SEVEN DAYS AS ONE CONTINUOUS TAKE, IN WEEK ORDER STARTING ON MONDAY, BY ONE VOICE AT ONE SPEED. Seven '
          + 'days recorded in seven sessions are seven performances, and the learner is memorising a SEQUENCE: any '
          + 'drift in pace, pitch or emphasis between them teaches a difference between the recordings rather than a '
          + 'difference in French. Read the seven straight through with an even beat, the way somebody counts, then '
          + 'again slowly in the same take. EVERY ONE TAKES THE STRESS ON ITS LAST SYLLABLE and none of them is '
          + 'stressed on the first, which is the single most common thing an English speaker does to these words. '
          + 'Keep the nasals closed: lundi opens on one with NO n sound, vendredi carries one with NO n sound, and '
          + 'dimanche carries one in the middle with NO n sound. Those three are the ones a reader over-articulates.',
        clipIds: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
      },
      {
        id: 'rec-a1-08-pairs',
        desc:
          'The contrast this lesson exists for. EACH PAIR IS ONE TAKE: « le lundi » immediately followed by « lundi » '
          + 'by the same voice at the same pace, so the ONLY difference the learner hears is the article. Recorded '
          + 'apart, they compare two performances instead of two meanings, and the whole teaching is lost. Do not lean '
          + 'on the le to make it clearer: it is an unstressed syllable in ordinary speech and a learner who hears it '
          + 'emphasised will never recognise it at conversational speed. All seven pairs, in week order, then the four '
          + 'sentence pairs (« Je suis libre le samedi » / « Je suis libre samedi », and the same for the other three). '
          + 'SEPARATELY, and this is the other half of this recording: mardi and jeudi ADJACENTLY IN THE SAME TAKE, '
          + 'because they are the pair that genuinely collides at speed, and the m against the zh is the whole of the '
          + 'difference. Do not slow that pair down on the natural-pace take.',
        clipIds: [
          'le lundi', 'lundi', 'le mardi', 'mardi', 'le mercredi', 'mercredi', 'le jeudi', 'jeudi',
          'le vendredi', 'vendredi', 'le samedi', 'samedi', 'le dimanche', 'dimanche',
          'mardi-jeudi-pair',
          'Je suis libre le samedi.', 'Je suis libre samedi.',
          "J'ai cours le lundi.", "J'ai cours lundi.",
        ],
      },
      {
        id: 'rec-a1-08-week',
        desc:
          'The frame words, one take, one voice: la semaine, le week-end, le jour, hier, demain, le calendrier, tous '
          + 'les jours. le week-end is borrowed from English and must be read as FRENCH, with the stress on the second '
          + 'half and no English diphthong on the week: a reader who says it the English way teaches the learner to '
          + 'code-switch mid-sentence. Keep the nasal in calendrier closed.',
        clipIds: ['la semaine', 'le week-end', 'le jour', 'hier', 'demain', 'le calendrier', 'tous les jours'],
      },
      {
        id: 'rec-a1-08-traps',
        desc:
          'The four English-speaker traps, wrong version then right version, with a clear beat between them so the '
          + 'learner hears a difference rather than a correction. Read EVERY wrong version plainly and at ordinary '
          + 'pace rather than comically: three of the four are real French sentences that mean something else, and a '
          + 'performance that marks them as errors removes the reason they are dangerous. « Je suis libre samedi » is '
          + 'not a mistake at all out of context, which is the point of the first one. « On se voit sur samedi » is '
          + 'the only one that is not a sentence, and it still gets read straight.',
        clipIds: ['trap-missing-article', 'trap-preposition', 'trap-capital', 'trap-plural'],
      },
      {
        id: 'rec-a1-08-scene',
        desc:
          'The opening scene, French bubbles only, in the voice of a woman in her twenties reading messages at an '
          + 'ordinary texting pace rather than a teaching pace. The beat where she gives up (« Ah, d\'accord. Bon, une '
          + 'autre fois alors. ») must be light and unbothered rather than hurt or pointed: the whole point of the '
          + 'scene is that nobody is upset and nobody is corrected, the plan simply does not happen. Any edge on that '
          + 'line turns it into a telling-off and the teaching is lost.',
        clipIds: ['Tu es libre samedi ?', "Ah, d'accord. Bon, une autre fois alors.", 'On se voit samedi ?'],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const JOURS_ITEM_IDS = ITEM_IDS;
export const JOURS_SPEAK_IDS = SPEAK_IDS;
export const JOURS_DICTATION_IDS = DICTATION_IDS;
export const JOURS_TRANCHES = DECK_TRANCHE;
export const JOURS_DAY_IDS = DAYS;
export const JOURS_HABITUAL_IDS = HABITUAL;
export const JOURS_SPECIFIC_IDS = SPECIFIC;
export const JOURS_REINFORCED_IDS = REINFORCED;
export const JOURS_MONTH_IDS = MONTH_IDS;
/** Every id this lesson names that it did not author. */
export const JOURS_BORROWED_IDS = BORROWED_IDS;
/** The authored half. */
export const JOURS_AUTHORED_IDS = JOURS_IDS;
export const JOURS_IMPORTED_IDS = IMPORTED_IDS;
export const JOURS_REUSED_IDS = REUSED_IDS;
