// a1.25.l1 "La routine quotidienne": the lesson body.
//
// Reads every French string, transcription and gloss from routine-imported.ts
// and routine-corpus.ts, and restates none of them.
//
// ── The layout decisions, each of which is a rule from A1-BUILD-INVARIANTS ──
//
// THE HERO IS s05-contrast AND IT IS A tapTable WITH FOUR ROWS AND TWO COLUMNS.
// The parts of the day that take a little word on the left, the two that take
// nothing on the right, ON ONE SCREEN. That is the reframe made visible, and
// split across two missions the two halves stop being a contrast and become two
// lists of times. Four by two fits a Pixel 6 without scrolling, which matters
// because `tapTable` is NOT in `ownsLayout()` (LessonPager.tsx:162) and renders
// inside a scrolling page. The batch, the merge and the test all assert that ONE
// section carries both columns and all four rows.
//
// s03-day IS A `steps` SECTION AND IT IS THE ONLY TIMELINE THIS LESSON DRAWS.
// No component draws a clock face, a 24-hour bar or a floor plan of a day, and
// `imageRef` resolves through a statically enumerated registry in
// lessonImages.ts that `lesson-contract.test.ts` does NOT check. An unregistered
// ref draws a blank box and nothing goes red. `steps` is drawn
// (LessonSection.tsx:90) and a1.04.l1 already ships one, so the day in order is
// a `steps` and there is no image anywhere in this lesson.
//
// NO groupDrill CARRIES `size`. A groupDrill owns the viewport at `xl` and not
// otherwise, which is true, and `xl` is unusable here: `density.logic.ts` reads
// it as a TWELVE-WORD CAP ON EVERY STRING IN THE SECTION, and every check below
// carries a `why` that has to teach the rule rather than name it. a1.13, a1.17
// and a1.22 all made the same call and shipped. Every control page carries
// `items: []` explicitly, so no xl groupDrill can stack words and a check in one
// group.
//
// ── ANSWER RANDOMISATION, WHICH IS NOT ONE PROBLEM BUT TWO ─────────────────
//
// The two closed-question surfaces in this app do NOT behave the same way and
// the difference decides how much of this has to be done by hand.
//
//   THE ACT-6 QUIZ IS SHUFFLED FOR YOU. LessonPager.tsx:839 renders it through
//   QuizDeckView, which permutes each question's options per question per
//   attempt (LessonRich.tsx:1232, :1244, :1273). The authored `correct` index
//   never moves; selection uses original indices and only the display order is
//   permuted, and retry reshuffles. The authored slot is invisible to a learner.
//
//   THE IN-MISSION CLOSED QUESTIONS ARE NOT SHUFFLED. Three sites render
//   `q.opts.map` in authored order and nothing permutes them: MissionRich.tsx:347
//   (the `check` on a groupDrill group), :732 (TrapOptions) and :1941 (the
//   `listening` questions). A learner who meets four control checks in a row
//   with the answer in slot 0 has learned the position rather than the rule.
//
// So the correct index is spread BY HAND across every groupDrill check and every
// listening question below, no two consecutive questions inside one section
// share a slot, and a1-25-routine.test.ts asserts the two surfaces SEPARATELY.
// The in-mission assertion does not exist in any shipped A1 test; this lesson
// adds it.
//
// A shuffle was NOT added to MissionRich. That is a renderer change touching
// every shipped lesson and it belongs in its own commit with its own review.
//
// ── The dictée, and what word mode can and cannot test here ────────────────
//
// `dicteeMode` switches to WORD mode above DICTEE_LETTER_LIMIT letters, and ALL
// SEVEN of this theme's dictation-carrying sentences are over it. Measured:
//
//     Tu prends ta douche le matin.            23 letters   WORD
//     Nous dînons ensemble le soir.            24 letters   WORD
//     Je me douche avant de m'habiller.        26 letters   WORD
//     Il se couche tôt pendant la semaine.     29 letters   WORD
//     Je déjeune à midi avec mes collègues.    30 letters   WORD
//     Je me lève à sept heures tous les jours. 31 letters   WORD
//     Elle éteint la lumière avant de s'endormir. 35 letters WORD
//
// There is no letters-mode option. A shorter target would have to be authored,
// and this lesson authors no sentences.
//
// WORD MODE STILL TESTS THE CONTRAST, and that is measured rather than hoped.
// `wordDecoys` adds decoys to the tile bank, and on the three targets chosen it
// adds exactly the wrong answer this lesson teaches against:
//
//     « Je déjeune à midi avec mes collègues. »  decoys: et, LE
//     « Tu prends ta douche le matin. »          decoys: et, LA
//     « Nous dînons ensemble le soir. »          decoys: et, LA
//
// So the learner assembling the midday sentence is handed a `le` tile and must
// not use it, which is the whole lesson in one tap. The targets were chosen for
// that and not for length.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { REFRAME, ROUTINE_TERMS } from './routine-terms.ts';
import { REUSED } from './routine-imported.ts';
import {
  AUTHORED_ITEMS, LE_MIDI_ROWS_IN_CORPUS, CORPUS_SENTENCES_MEASURED,
  RESPELL_ADDITIONS, RESPELL_REPAIRS, TAKES_ARTICLE, TAKES_NOTHING,
} from './routine-corpus.ts';

export { REFRAME };

/* ─── Reading the corpus rather than restating it ──────────────────────────
 *
 * Every French string, gloss and transcription on a card below comes through one
 * of these three. A card that types its own French is a card that can disagree
 * with the row it claims to teach, which is how a lesson comes to show one
 * spelling and drill another.
 *
 * `respellOf` layers this build's own repairs on top of the recorded manifest,
 * because the manifest deliberately holds the values as they are TODAY, before
 * the batch runs. A card must show the repaired form, not the broken one.      */

const R = (n: string) => `fr.a1.routines.${n}`;

const BY_ID = new Map(REUSED.map((r) => [r.id, r] as const));
for (const it of AUTHORED_ITEMS) {
  BY_ID.set(it.id, { id: it.id, fr: it.fr, en: it.en, respell: it.respell ?? null, drills: it.drills ?? [] });
}

const REPAIRED = new Map<string, string>([
  ...RESPELL_REPAIRS.map((r) => [r.id, r.to] as const),
  ...RESPELL_ADDITIONS.map((r) => [r.id, r.to] as const),
]);

function row(id: string) {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.25.l1: no corpus row for ${id}. Every string on a card comes from the manifest.`);
  return r;
}
export const frOf = (id: string): string => row(id).fr;
export const enOf = (id: string): string => row(id).en;
export const respellOf = (id: string): string => {
  const fixed = REPAIRED.get(id);
  if (fixed) return fixed;
  const r = row(id).respell;
  if (!r) throw new Error(`a1.25.l1: ${id} has no respelling and none is authored for it. A card asking for one would render an empty bracket.`);
  return r;
};
/** Bracketed, which is how every A1 lesson shows a transcription on a card. */
export const sub = (id: string): string => `[${respellOf(id)}]`;

/* ─── The corpus this lesson sequences ─────────────────────────────────────
 *
 * Grouped by the job the ids do, so a section names a GROUP and a tranche
 * releases the same group. A section that names loose ids drifts from the
 * tranche that releases them, and the drift is invisible until a learner is
 * asked to rate a card they never met.                                        */

/** The four that take a little word in front. THE LESSON. */
const PART_IDS = TAKES_ARTICLE.map((p) => p.id);
/** The two that take nothing at all. THE EXCEPTION, and the reason the lesson
 *  is an article lesson rather than a word list. */
const BARE_IDS = TAKES_NOTHING.map((p) => p.id);
/** Saying the habit out loud when the little word feels too quiet. */
const HABIT_IDS = [R('025'), R('026'), R('037'), R('038')];

/** The morning, in the order it happens. Five of the eight carry a se. */
const MORNING_IDS = [R('010'), R('001'), R('011'), R('012'), R('019'), R('013'), R('027'), R('014')];
/** The middle of the day, and the one row this lesson authors. */
const MIDDAY_IDS = [R('015'), R('016'), R('056'), 'fr.a1.routines.185'];
/** The evening and the night, where dormir finally arrives. */
const EVENING_IDS = [R('018'), R('074'), R('017'), R('034'), R('020'), R('041'), R('021')];
/** Three objects, and not one more. */
const OBJECT_IDS = [R('091'), R('101'), R('103')];

/** The three published conjugated frames. All three had no respelling and no
 *  voiceflash before this build; the batch repairs both. They are the ONLY
 *  reflexive persons this lesson puts on a screen. */
const FRAME_IDS = [R('005'), R('006'), R('007')];

/** What the learner produces. */
const FIRST_PERSON_IDS = [R('003'), R('089'), R('153'), R('144'), R('131'), R('178')];
/** Reading exposure. */
const THIRD_PERSON_IDS = [R('090'), R('160'), R('154'), R('164'), R('167'), R('134'), R('136'), R('172'), R('137')];
/** tu and nous, the only other persons with sentence evidence behind them. */
const OTHER_PERSON_IDS = [R('125'), R('157'), R('181')];

const VERB_IDS = [...MORNING_IDS, ...MIDDAY_IDS, ...EVENING_IDS];
const TIME_IDS = [...PART_IDS, ...BARE_IDS, ...HABIT_IDS];
const SENTENCE_IDS = [...FIRST_PERSON_IDS, ...THIRD_PERSON_IDS, ...OTHER_PERSON_IDS];

const ITEM_IDS = [...TIME_IDS, ...VERB_IDS, ...OBJECT_IDS, ...FRAME_IDS, ...SENTENCE_IDS];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  what the speak drill plays. The three frames are included because the batch
 *  ADDS voiceflash to them; the batch and the test both check the postcondition
 *  rather than trusting this comment. */
const SPEAK_IDS = [
  ...PART_IDS, ...BARE_IDS,
  R('001'), R('011'), R('012'), R('020'), R('021'), R('016'),
  ...FRAME_IDS,
];

/** The dictée. Chosen by what `wordDecoys` puts in the tile bank rather than by
 *  taste: all three are handed a decoy that is exactly the wrong answer this
 *  lesson teaches against. Every one carries a `dictation` drill in Postgres. */
const DICTATION_IDS = [R('131'), R('125'), R('134')];

/** Reading exposure only, and this list is NARROWER than THIRD_PERSON_IDS on
 *  purpose. That group is named for where the sentences sit in the lesson, and
 *  two of its members are not third person at all: fr.a1.routines.090 is « je
 *  bois » and fr.a1.routines.134 is « nous dînons ». Both are perfectly
 *  producible and .134 is a dictée target and a speak target.
 *
 *  A first draft used THIRD_PERSON_IDS here and the batch caught it: the
 *  reading-only guard fired on a row the lesson deliberately asks the learner to
 *  produce. What actually belongs here is the rows in a person this lesson never
 *  asks anybody to speak. */
const READING_ONLY_IDS = [R('160'), R('154'), R('164'), R('167'), R('136'), R('172'), R('137')];

const MATIN = TAKES_ARTICLE[0];
const SOIR = TAKES_ARTICLE[2];
const MIDI = TAKES_NOTHING[0];
const MINUIT = TAKES_NOTHING[1];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is being MISREAD AS A PERSON rather than being
 * corrected, and the misreading here is about what you were agreeing to.
 *
 * THE BRIEF OFFERS TWO BEATS AND NAMES THE FIRST AS SHARPER. It is right, and
 * the reason is the second one's shape rather than its content. Beat 2 has the
 * learner say « Je déjeune le midi », a phrase with zero rows behind it, and
 * ends with the plan going wrong because of it. That puts the learner IN THE
 * WRONG on the page, which is the sons register wearing A1 clothes: the
 * invariants are explicit that an A1 scene opens on somebody being misread, not
 * on somebody making a mistake.
 *
 * Beat 1 has nobody in the wrong at all. Amina is asked when she is free and
 * answers « Le soir. » She means tonight. Claire hears evenings-in-general,
 * which is exactly what the words say, agrees warmly, and books nothing. Every
 * word is correct, nobody is corrected, and the evening simply does not happen.
 *
 * The choice beat is « Le soir » against « Ce soir », which is the ONE place in
 * the lesson the demonstrative appears. It is context and it is never drilled:
 * ce / cet / cette is an A2 unit and NEIGHBOUR_DEMONSTRATIVES guards every
 * production surface against it. The learner is not asked to produce « ce soir »
 * anywhere, and the resolve beat says so out loud so nobody leaves thinking the
 * lesson taught it.
 */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Three weeks into a language exchange in Nantes. You have been getting on well with Claire, and neither of you has suggested doing anything outside the class yet.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'Today she does. You have understood every word of the conversation so far, which is new, and you are enjoying it.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Claire',
    fr: 'Tu es libre quand ?',
    en: 'When are you free?',
    stage: 'She is packing her bag. It is a real invitation and she is waiting for a real answer.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-25-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You are free tonight, and you would like to say so. Which line comes out?',
    options: [
      {
        fr: 'Le soir.',
        respell: `[${respellOf(SOIR.id)}]`,
        en: 'the words for evening you already know',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Ce soir.',
        respell: '[suh SWAHR]',
        en: 'a different little word, and one this lesson does not teach',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes, and hold onto that for a moment, because the word that makes it work is not one this lesson is going to teach you. Watch the other one first.',
      breaks: 'Every word correct. She understands you completely. Watch what gets arranged.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'You',
    fr: 'Le soir.',
    en: '(Understood. Every word real. Not the evening you meant)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Claire',
    fr: 'Ah, super. On trouvera un soir, alors !',
    en: 'Ah, great. We will find an evening sometime, then!',
    stage: 'She is pleased. She has just learned that you are generally free in the evenings, which is useful and is not a plan.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-25-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'Nothing went wrong, and nothing got arranged',
    // 34 words. The shipped scene breaks run 24 to 40 here.
    body: 'She understood you and she was pleased. You told her something true about your life and she heard it as exactly that: a fact about your evenings in general, rather than an answer about tonight.',
    wrong: {
      fr: 'Le soir.',
      ipa: '/lə swaʁ/',
      respell: `[${respellOf(SOIR.id)}]`,
      en: 'In the evenings, as a rule. Understood, and not an answer to when',
    },
    right: {
      fr: `${frOf(SOIR.id)} · ${frOf(MIDI.id)}`,
      ipa: '/lə swaʁ/ · /midi/',
      respell: `${sub(SOIR.id)} · ${sub(MIDI.id)}`,
      en: 'The evening takes a little word. Midday takes none',
    },
    coach: `${REFRAME} That little word is not decoration: it is the difference between your evenings and this evening.`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-25-contrast' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'The word that would have fixed it belongs to a later lesson. What this half hour gives you is the half you can act on now: what the little word means when it is there, and the two times of day that refuse it.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: your day ──────────────────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Evening That Never Got Arranged',
    frSub: 'Le soir ou ce soir ?',
    render: 'screens',
    layer: 'core',
    terms: ['partsTakeLe'],
    say: {
      text: 'Every word correct, understood completely, and nothing gets booked. Watch the little word.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A language exchange in a room above a café, chairs being stacked',
      city: 'Nantes',
      time: 'Thursday, just after eight',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} That is the next half hour.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the first one is smaller than it looks.',
    goals: [
      { t: 'Name the parts of a day', s: 'With the little word that comes with them, because that word is carrying the meaning rather than decorating it.' },
      { t: 'Know the two that refuse it', s: 'Midi and minuit take nothing at all, and one of them is where most people put a le that does not exist.' },
      { t: 'Walk through a day in order', s: 'From getting up to going to bed, using verbs the app has already published and you have never been shown.' },
      { t: 'Say what you do, about yourself', s: 'Whole phrases in the first person, learned whole, with the small word at the front that half of them carry.' },
    ],
  },

  {
    type: 'steps',
    id: 's03-day',
    title: 'A Day, In Order',
    frSub: 'Une journée, dans l\'ordre',
    layer: 'core',
    terms: ['partsTakeLe', 'seIsPartOfTheVerb'],
    say: 'Six moves, start to finish. Nothing to learn yet. This is the shape the rest of the lesson fills in.',
    steps: [
      `${frOf(R('010'))} and then ${frOf(R('001'))}. Waking up and getting out of bed are two different verbs in French and they happen in that order, which is worth knowing before either of them is a card.`,
      `${frOf(R('011'))}, ${frOf(R('012'))}, ${frOf(R('019'))}. The washing part of a morning, and all three of them start with the same small word. That word is coming back in act three.`,
      `${frOf(R('013'))}, then ${frOf(R('014'))}. Breakfast and then out of the door. This is the only step of the six with no small word in it at all.`,
      `${frOf(R('015'))} until ${frOf(MIDI.id)}, then ${frOf(R('016'))}. Here is the first place the little word goes missing, and it is not an accident: midday is one of the two times of day that refuses it.`,
      `${frOf(R('018'))}, ${frOf(R('074'))}, ${frOf(R('017'))}. Home, cooking, eating. ${frOf(SOIR.id)} takes its little word back, and it will keep it for the rest of the day.`,
      `${frOf(R('034'))}, ${frOf(R('020'))}, ${frOf(R('021'))}. Resting, going to bed, sleeping. Three verbs and only two of them carry the small word, which is the thing to notice rather than to learn right now.`,
    ],
  },

  {
    type: 'cardDeck',
    id: 's04-parts',
    title: 'Four Parts, Four Little Words',
    frSub: 'Les moments de la journée',
    hint: 'Four cards, and none of them is a word list.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['partsTakeLe', 'fronting'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-25-parts' },
    say: 'The four stretches of a day, each with the word that comes attached to it.',
    cards: [
      {
        label: 'what you already do',
        head: 'You have been given this rule once already',
        fr: `${frOf(MATIN.id)} · ${frOf(SOIR.id)}`,
        sub: `${sub(MATIN.id)} · ${sub(SOIR.id)}`,
        body: 'The days lesson taught that le lundi means every Monday and not this one. That is the same little word doing the same job here, on a different set of nouns. Nothing new is being asked of you except to notice how far it reaches.',
      },
      {
        label: 'the four',
        head: 'Morning, afternoon, evening, night',
        fr: TAKES_ARTICLE.map((p) => p.fr).join(' · '),
        sub: TAKES_ARTICLE.map((p) => respellOf(p.id)).join(' · '),
        body: 'Four stretches of time and four little words. The one in front of the afternoon has been shortened because the word behind it starts on a vowel, which is a repair you have watched the language make since the definite articles lesson.',
      },
      {
        label: 'what it is doing',
        head: 'It means the ones that keep happening',
        fr: frOf(R('090')),
        sub: enOf(R('090')),
        body: 'This sentence is not about one particular morning. The little word in front is what makes it about mornings as a habit, and that sentence was written by nobody trying to teach you anything. It is just how the thing is said.',
      },
      {
        label: 'and at the end of the sentence too',
        head: 'The same word, wherever it sits',
        fr: frOf(R('134')),
        sub: enOf(R('134')),
        body: `The time can go at the front with a comma or at the end with nothing, and the little word travels with it either way. ${REFRAME}`,
      },
    ],
  },

  /* ── Act 2: the little word, and the two that refuse it ───────────────── */

  {
    type: 'tapTable',
    id: 's05-contrast',
    title: 'The Ones That Take It, And The Ones That Do Not',
    frSub: 'Avec ou sans le petit mot',
    layer: 'core',
    terms: ['partsTakeLe', 'midiTakesNothing'],
    sheetId: 'sheet.a1.25.day',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-25-contrast' },
    // THE HERO. Both columns, four rows, ONE SCREEN. The whole lesson is that
    // the right-hand column exists, and a learner who meets the two halves in
    // two separate missions reads two lists of times rather than one contrast.
    // Asserted by section id and by both columns being present in it.
    say: 'Two columns. The left-hand side takes a little word and the right-hand side takes nothing at all. Tap any cell to hear it.',
    cols: ['takes a little word', 'takes nothing'],
    rows: [
      {
        cells: [frOf(PART_IDS[0]), frOf(BARE_IDS[0])],
        say: `${frOf(PART_IDS[0])}, ${frOf(BARE_IDS[0])}`,
        detail: {
          title: 'The morning, and midday',
          body: `${frOf(PART_IDS[0])} ${sub(PART_IDS[0])} is a stretch of hours. ${frOf(BARE_IDS[0])} ${sub(BARE_IDS[0])} is a point on the clock. `
            + 'That is the whole reason one of them is marked as a habit and the other is not: a point does not repeat, it just arrives.',
          say: `${frOf(PART_IDS[0])}, ${frOf(BARE_IDS[0])}`,
        },
      },
      {
        cells: [frOf(PART_IDS[1]), frOf(BARE_IDS[1])],
        say: `${frOf(PART_IDS[1])}, ${frOf(BARE_IDS[1])}`,
        detail: {
          title: 'The afternoon, and midnight',
          body: `${frOf(PART_IDS[1])} ${sub(PART_IDS[1])} has had its little word shortened in front of the vowel, which is the same repair as l'école and l'ami. `
            + `${frOf(BARE_IDS[1])} ${sub(BARE_IDS[1])} refuses one entirely, exactly like midday.`,
          say: `${frOf(PART_IDS[1])}, ${frOf(BARE_IDS[1])}`,
        },
      },
      {
        cells: [frOf(PART_IDS[2]), `à ${frOf(BARE_IDS[0])}`],
        say: `${frOf(PART_IDS[2])}, à ${frOf(BARE_IDS[0])}`,
        detail: {
          title: 'In the evenings, and at midday',
          body: `${frOf(PART_IDS[2])} on its own already means in the evenings. For lunch you say à ${frOf(BARE_IDS[0])}, with no little word in it at all. `
            + 'These are not two ways of saying one thing. They are what each of these words does.',
          say: `${frOf(PART_IDS[2])}, à ${frOf(BARE_IDS[0])}`,
        },
      },
      {
        cells: [frOf(PART_IDS[3]), `à ${frOf(BARE_IDS[1])}`],
        say: `${frOf(PART_IDS[3])}, à ${frOf(BARE_IDS[1])}`,
        detail: {
          title: 'At night, and at midnight',
          body: `${frOf(PART_IDS[3])} ${sub(PART_IDS[3])} takes the feminine little word, because the night is one of the two here that does. `
            + `à ${frOf(BARE_IDS[1])} takes none, and that is the pattern of this whole table: the stretches take one and the points do not.`,
          say: `${frOf(PART_IDS[3])}, à ${frOf(BARE_IDS[1])}`,
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's06-habit',
    title: 'What The Little Word Is Actually Saying',
    frSub: 'Le matin, tous les matins',
    hint: 'Three cards on a word you have already been taught once.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['partsTakeLe', 'everyDayOutLoud'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-25-parts' },
    say: 'It is not the. It is every.',
    cards: [
      {
        label: 'the rule you have',
        head: 'Le lundi was every Monday',
        fr: `${frOf(MATIN.id)} · ${frOf(SOIR.id)} · ${frOf(PART_IDS[3])}`,
        sub: 'the same little word, on a bigger set of nouns',
        body: 'The days lesson made this exact point and then stopped at days. It does not stop at days. Every stretch of a day behaves the same way, which means you already had this rule and were only ever shown a seventh of it.',
      },
      {
        label: 'the habit, in the wild',
        head: 'A morning that keeps happening',
        fr: frOf(R('160')),
        sub: enOf(R('160')),
        body: 'Here the habit is said with a different word entirely and means the same thing. French has more than one way to mark something as regular, and they can sit in the same sentence without arguing.',
      },
      {
        label: 'both at once',
        head: 'When the little word feels too quiet',
        fr: frOf(R('089')),
        sub: enOf(R('089')),
        body: `The little word says it and ${frOf(R('026'))} says it again out loud. Both in one sentence, and it is ordinary French rather than a mistake. Reach for the second one when you want to be certain rather than subtle.`,
      },
      {
        label: 'it reaches further than the day',
        head: 'The weekend takes one too',
        fr: frOf(R('178')),
        sub: enOf(R('178')),
        body: `${frOf(R('025'))} is a stretch of time like the parts of a day, so it behaves like one. Nothing here taught you that, and you can work it out from the rule rather than recall it, which is what having a rule is for.`,
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's07-exception',
    title: 'The Two That Take Nothing',
    frSub: 'Midi et minuit',
    hint: 'Three cards, and the middle one is a number.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['midiTakesNothing', 'partsTakeLe'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-25-contrast' },
    say: 'Two words in the middle of the set refuse the little word completely.',
    cards: [
      {
        label: 'the two',
        head: 'Midi and minuit go bare',
        fr: `${frOf(MIDI.id)} · ${frOf(MINUIT.id)}`,
        sub: `${sub(MIDI.id)} · ${sub(MINUIT.id)}`,
        body: 'No little word in front, and no little word waiting to be added. These are the names of two exact moments rather than stretches of time, and a moment does not need marking as one that repeats.',
      },
      {
        label: 'how sure we are',
        head: `Le midi appears ${LE_MIDI_ROWS_IN_CORPUS} times`,
        fr: `à ${frOf(MIDI.id)}`,
        sub: `[ah ${respellOf(MIDI.id)}]`,
        body: `Across the ${CORPUS_SENTENCES_MEASURED.toLocaleString('en-GB')} French sentences published in this app, à ${frOf(MIDI.id)} turns up fifty-one times and le ${frOf(MIDI.id)} turns up not once. That is not a preference somebody has about style. It is a shape the language does not make.`,
      },
      {
        label: 'in a sentence',
        head: 'Lunch, at the hour with no little word',
        fr: frOf(R('131')),
        sub: enOf(R('131')),
        body: `Nothing in front of ${frOf(MIDI.id)}, and nothing missing either. ${REFRAME}`,
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's08-sort',
    title: 'Which Ones Take It?',
    frSub: 'Avec ou sans ?',
    layer: 'core',
    terms: ['partsTakeLe', 'midiTakesNothing'],
    say: 'Two groups of times and a question about each. Nothing here is about what you do.',
    // The correct index is spread by hand: MissionRich renders these options in
    // AUTHORED ORDER and never shuffles them. Slots below run 2, 0, 3, 1.
    groups: [
      {
        label: 'the ones that take a little word',
        items: PART_IDS.map((id) => ({ fr: frOf(id), itemId: id, respell: sub(id), en: enOf(id) })),
        check: {
          q: 'All four of those carry a little word. What is that word telling you?',
          opts: [
            'That the speaker is being formal',
            'That there is only one of them',
            'That this happens regularly rather than once',
            'That the word is masculine',
          ],
          correct: 2,
          why: 'That it happens regularly. The days lesson taught you this with le lundi and it works the same way here: le matin is mornings as a rule, not one particular morning. The little word is carrying the meaning rather than pointing at anything.',
        },
      },
      {
        label: 'the ones that take nothing',
        items: BARE_IDS.map((id) => ({ fr: frOf(id), itemId: id, respell: sub(id), en: enOf(id) })),
        check: {
          q: `Why do ${frOf(MIDI.id)} and ${frOf(MINUIT.id)} refuse the little word when the other four take it?`,
          opts: [
            'They name a single moment rather than a stretch of time',
            'They are shorter words',
            'They are both about the middle of something',
            'They came into French later',
          ],
          correct: 0,
          why: 'They name a moment. Le matin covers four or five hours and can sensibly be marked as something that repeats. Midday is a point on the clock: it arrives, and there is nothing to mark.',
        },
      },
      {
        label: 'the habit, said out loud',
        items: HABIT_IDS.map((id) => ({ fr: frOf(id), itemId: id, respell: sub(id), en: enOf(id) })),
        check: {
          q: `You have already said ${frOf(MATIN.id)}. What does adding ${frOf(R('026'))} change?`,
          opts: [
            'It makes the sentence past tense',
            'It is required whenever the little word appears',
            'It replaces the little word',
            'It says the same thing again, louder',
          ],
          correct: 3,
          why: `Nothing changes about the meaning. ${frOf(R('026'))} states the habit out loud instead of leaving it to the little word, and French is happy to do both in one sentence. Use it when the little word alone feels too quiet.`,
        },
      },
      {
        label: 'the whole rule',
        items: [],
        check: {
          q: 'Somebody asks what time you eat lunch. Which of these is not a thing anybody says?',
          opts: [
            `à ${frOf(MIDI.id)}`,
            `le ${frOf(MIDI.id)}`,
            frOf(SOIR.id),
            frOf(MATIN.id),
          ],
          correct: 1,
          why: `le ${frOf(MIDI.id)}. It appears zero times in ${CORPUS_SENTENCES_MEASURED.toLocaleString('en-GB')} published sentences, which is as close to a flat no as a corpus gets. ${REFRAME}`,
        },
      },
    ],
  },

  {
    type: 'vocabThemes',
    id: 's09-times',
    title: 'The Day, Banked',
    frSub: 'Les moments, en réserve',
    layer: 'core',
    terms: ['partsTakeLe', 'midiTakesNothing'],
    say: 'Ten words, in two groups, and the groups are the rule.',
    themes: [
      {
        title: 'stretches of time, which take one',
        cards: PART_IDS.map((id) => ({ fr: frOf(id), sub: `${respellOf(id)} · ${enOf(id)}`, en: enOf(id) })),
      },
      {
        title: 'points on the clock, which take none',
        cards: BARE_IDS.map((id) => ({ fr: frOf(id), sub: `${respellOf(id)} · ${enOf(id)}`, en: enOf(id) })),
      },
      {
        title: 'saying the habit out loud',
        cards: HABIT_IDS.map((id) => ({ fr: frOf(id), sub: `${respellOf(id)} · ${enOf(id)}`, en: enOf(id) })),
      },
    ],
  },

  /* ── Act 3: the verbs of a day ────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's10-morning',
    title: 'The Morning, In Order',
    frSub: 'Le matin, dans l\'ordre',
    hint: 'Four cards, and the order is part of the content.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['seIsPartOfTheVerb', 'partsTakeLe'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-25-morning' },
    say: 'Waking, getting up, washing, out of the door.',
    cards: [
      {
        label: 'two verbs, not one',
        head: 'Waking up and getting up are separate',
        fr: `${frOf(R('010'))} · ${frOf(R('001'))}`,
        sub: `${sub(R('010'))} · ${sub(R('001'))}`,
        body: 'English blurs these and French does not. One is your eyes opening and the other is your feet hitting the floor, and there can be a long time between them. Both carry the same small word at the front.',
      },
      {
        label: 'the washing three',
        head: 'All three take the same small word',
        fr: `${frOf(R('011'))} · ${frOf(R('012'))} · ${frOf(R('019'))}`,
        sub: `${sub(R('011'))} · ${sub(R('012'))} · ${sub(R('019'))}`,
        body: 'The small word has been shortened in front of the vowel on the middle one, which by now should be the least surprising thing here. The last of the three ends on a nasal vowel with no consonant behind it, despite four letters trying.',
      },
      {
        label: 'breakfast and out',
        head: 'The one step with no small word in it',
        fr: `${frOf(R('013'))} · ${frOf(R('014'))}`,
        sub: `${sub(R('013'))} · ${sub(R('014'))}`,
        body: 'Neither of these carries the small word, and that is worth seeing early so the small word does not start to look like something every verb has. Roughly half of a French day carries it and the other half does not.',
      },
      {
        label: 'the object it starts with',
        head: 'What wakes you up',
        fr: `${frOf(R('091'))} · ${frOf(R('101'))}`,
        sub: `${sub(R('091'))} · ${sub(R('101'))}`,
        body: `An alarm and a shower, both carrying the little word that tells you which kind of noun they are. ${frOf(R('154'))} puts the first of them in an ordinary sentence.`,
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's11-se',
    title: 'The Small Word At The Front',
    frSub: 'Se lever, je me lève',
    hint: 'Three cards on a word that is not optional.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['seIsPartOfTheVerb'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-25-se' },
    say: 'About half the verbs in a day carry it. Learn it as part of the verb.',
    cards: [
      {
        label: 'store it with the verb',
        head: 'It is part of the word, not in front of it',
        fr: `${frOf(R('001'))} · ${frOf(R('020'))}`,
        sub: `${sub(R('001'))} · ${sub(R('020'))}`,
        body: 'The noun gender lesson asked you to store the little word with the noun rather than beside it. This is that habit again, on verbs. If you store the verb without it you have stored half of one.',
      },
      {
        label: 'about yourself',
        head: 'When it is you, it changes shape',
        fr: frOf(R('003')),
        sub: enOf(R('003')),
        body: 'Talking about yourself turns that small word into a different one. This is a whole phrase to learn whole rather than a rule to apply: three of them will carry you through a morning.',
      },
      {
        label: 'twice in one line',
        head: 'And it happens as often as the verbs do',
        fr: frOf(R('144')),
        sub: enOf(R('144')),
        body: 'Two verbs in this sentence and both of them carry it. What the small word does across every other person is a lesson of its own and it is a whole band from here. Nothing you need today depends on it.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's12-persons',
    title: 'Three People, Three Small Words',
    frSub: 'Je me, tu te, il se',
    layer: 'core',
    terms: ['seIsPartOfTheVerb'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-25-se' },
    // ONLY THREE PERSONS, AND THAT IS A MEASUREMENT RATHER THAN A SIMPLIFICATION.
    // `vous vous levez`, `ils se lèvent` and `elles se lèvent` return ZERO rows
    // each across all 27,353 published sentences. A six-row table here would be
    // three rows of evidence and three rows of invention, and the paradigm is
    // a2.22's in any case.
    say: 'Three people, and these three are the ones the app has real sentences for. Tap a row to hear it.',
    cols: ['the person', 'in a sentence'],
    rows: [
      {
        cells: [frOf(R('005')), frOf(R('153'))],
        say: `${frOf(R('005'))}. ${frOf(R('153'))}`,
        detail: {
          title: 'About yourself',
          body: `${frOf(R('005'))} ${sub(R('005'))}. The small word has become me because the sentence is about you, and that is the one you will use most.`,
          say: frOf(R('153')),
        },
      },
      {
        cells: ['tu te douches', frOf(R('157'))],
        say: `tu te douches. ${frOf(R('157'))}`,
        detail: {
          title: 'About the person you are talking to',
          body: `It becomes te. ${frOf(R('157'))} is the corpus's own sentence and it is the shape you will hear turned back on you when somebody asks about your morning.`,
          say: frOf(R('157')),
        },
      },
      {
        cells: ['il se lève', frOf(R('154'))],
        say: `il se lève. ${frOf(R('154'))}`,
        detail: {
          title: 'About somebody else',
          body: `It stays as se. Compare ${frOf(R('006'))} ${sub(R('006'))}, which is the same person with a verb that carries no small word at all, so the two sit side by side.`,
          say: `il se lève. ${frOf(R('006'))}`,
        },
      },
      {
        cells: [frOf(R('007')), frOf(R('181'))],
        say: `${frOf(R('007'))}. ${frOf(R('181'))}`,
        detail: {
          title: 'About a group you are in',
          body: `${frOf(R('007'))} ${sub(R('007'))} has no small word, because prendre is one of the verbs that never carries one. ${frOf(R('181'))} shows a verb that does, in the same person, so the two can be compared without leaving the row.`,
          say: frOf(R('181')),
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's13-rest',
    title: 'The Middle And The End Of A Day',
    frSub: 'Midi, le soir, la nuit',
    hint: 'Four cards, and one of them is the word this lesson added.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['midiTakesNothing', 'seIsPartOfTheVerb'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-25-evening' },
    say: 'Working, eating, going home, going to bed.',
    cards: [
      {
        label: 'the middle',
        head: 'Work, a break, and lunch',
        fr: `${frOf(R('015'))} · ${frOf(R('056'))} · ${frOf(R('016'))}`,
        sub: `${sub(R('015'))} · ${sub(R('056'))} · ${sub(R('016'))}`,
        body: `${frOf(R('164'))} is where most of it starts. The middle of a day is the shortest part of this lesson on purpose: the interesting thing about it is ${frOf(MIDI.id)} refusing the little word, and act two handled that.`,
      },
      {
        label: 'the general word for it',
        head: 'And the verb for eating anything at all',
        fr: `${frOf('fr.a1.routines.185')} · ${frOf(R('016'))} · ${frOf(R('017'))}`,
        sub: `${sub('fr.a1.routines.185')} · ${sub(R('016'))} · ${sub(R('017'))}`,
        body: 'The first is eating in general and the other two are the two meals with their own verbs. French gives lunch and dinner a verb each and then keeps a general one as well, which English does not do.',
      },
      {
        label: 'home',
        head: 'Back, cooking, eating',
        fr: `${frOf(R('018'))} · ${frOf(R('074'))} · ${frOf(R('017'))}`,
        sub: `${sub(R('018'))} · ${sub(R('074'))} · ${sub(R('017'))}`,
        body: `${frOf(R('167'))} puts the first of these in a sentence with a time on the end of it, which is the shape most of a day is described in.`,
      },
      {
        label: 'the end',
        head: 'Resting, bed, sleep',
        fr: `${frOf(R('034'))} · ${frOf(R('020'))} · ${frOf(R('041'))} · ${frOf(R('021'))}`,
        sub: `${sub(R('034'))} · ${sub(R('020'))} · ${sub(R('041'))} · ${sub(R('021'))}`,
        body: `Three of those four carry the small word from act three and the last one does not. ${frOf(R('021'))} is the word everybody expects to meet first and it arrives last, because it is the one thing in a day you do not decide to do.`,
      },
      {
        label: 'the last one, in a sentence',
        head: 'Dropping off, and what happens just before it',
        fr: frOf(R('137')),
        sub: enOf(R('137')),
        body: `${frOf(R('041'))} is not a thing you do, it is a thing that happens to you, and this sentence puts it where it belongs: after the last decision of the day rather than instead of one.`,
      },
    ],
  },

  {
    type: 'vocabThemes',
    id: 's14-verbs',
    title: 'The Verbs, Banked',
    frSub: 'Les verbes, en réserve',
    layer: 'core',
    terms: ['seIsPartOfTheVerb'],
    say: 'Nineteen verbs in three groups, and the groups are the times of day.',
    themes: [
      {
        title: 'the morning, waking to out of the door',
        cards: MORNING_IDS.map((id) => ({ fr: frOf(id), sub: `${respellOf(id)} · ${enOf(id)}`, en: enOf(id) })),
      },
      {
        title: 'the middle: work, a break, lunch',
        cards: MIDDAY_IDS.map((id) => ({ fr: frOf(id), sub: `${respellOf(id)} · ${enOf(id)}`, en: enOf(id) })),
      },
      {
        title: 'the evening and the night, home to asleep',
        cards: EVENING_IDS.map((id) => ({ fr: frOf(id), sub: `${respellOf(id)} · ${enOf(id)}`, en: enOf(id) })),
      },
      {
        title: 'three things a day is built around',
        cards: OBJECT_IDS.map((id) => ({ fr: frOf(id), sub: `${respellOf(id)} · ${enOf(id)}`, en: enOf(id) })),
      },
    ],
  },

  /* ── Act 4: putting it in order ───────────────────────────────────────── */

  {
    type: 'groupDrill',
    id: 's15-order',
    title: 'When Does It Happen?',
    frSub: 'À quel moment ?',
    layer: 'core',
    terms: ['partsTakeLe', 'seIsPartOfTheVerb'],
    say: 'Three groups of verbs and one question about each. The groups are the day.',
    // Slots below run 1, 3, 0, 2. Authored order is what a learner sees here.
    groups: [
      {
        label: 'the morning',
        items: MORNING_IDS.slice(0, 5).map((id) => ({ fr: frOf(id), itemId: id, respell: sub(id), en: enOf(id) })),
        check: {
          q: `Two of those verbs are about being awake. Which comes first?`,
          opts: [
            frOf(R('001')),
            frOf(R('010')),
            frOf(R('011')),
            frOf(R('012')),
          ],
          correct: 1,
          why: `${frOf(R('010'))} first. Your eyes open, and at some later point your feet reach the floor. French keeps those as two separate verbs where English blurs them into one, and the gap between them is often the longest part of a morning.`,
        },
      },
      {
        label: 'the middle of the day',
        items: MIDDAY_IDS.map((id) => ({ fr: frOf(id), itemId: id, respell: sub(id), en: enOf(id) })),
        check: {
          q: `You want to say you have lunch at midday. Which is right?`,
          opts: [
            `Je ${frOf(R('016'))} le ${frOf(MIDI.id)}`,
            `Je ${frOf(R('016'))} au ${frOf(MIDI.id)}`,
            `Je ${frOf(R('016'))} dans ${frOf(MIDI.id)}`,
            `Je ${frOf(R('016'))} à ${frOf(MIDI.id)}`,
          ],
          correct: 3,
          why: `à ${frOf(MIDI.id)}, with nothing in front of ${frOf(MIDI.id)} at all. The first option is the one people reach for after learning ${frOf(MATIN.id)} and ${frOf(SOIR.id)}, and it appears zero times in the whole corpus.`,
        },
      },
      {
        label: 'the evening and the night',
        items: EVENING_IDS.slice(0, 5).map((id) => ({ fr: frOf(id), itemId: id, respell: sub(id), en: enOf(id) })),
        check: {
          q: `Which of those four carries no small word at the front?`,
          opts: [
            frOf(R('017')),
            frOf(R('034')),
            frOf(R('020')),
            frOf(R('041')),
          ],
          correct: 0,
          why: `${frOf(R('017'))}. Eating dinner is something you do rather than something you do to yourself, and French marks that difference with the small word. Resting, going to bed and dropping off all carry one.`,
        },
      },
      {
        label: 'the whole day',
        items: [],
        check: {
          q: 'You are describing your day and you want to say the evening part is a habit. What carries that?',
          opts: [
            'Saying the verb twice',
            'Putting the time at the end of the sentence',
            `The little word in front of ${frOf(SOIR.id)}`,
            'Nothing. French cannot mark it',
          ],
          correct: 2,
          why: `The little word. ${REFRAME} Putting the time at the front or the end changes nothing about the meaning, which is worth knowing separately, and saying the verb twice is not a thing.`,
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's16-errors',
    title: 'What Goes Wrong',
    frSub: 'Les erreurs fréquentes',
    layer: 'core',
    swipe: true,
    size: 'lg',
    terms: ['midiTakesNothing', 'partsTakeLe', 'seIsPartOfTheVerb'],
    say: 'Four, one per screen, and the first one is the one this whole lesson exists for.',
    errors: [
      {
        wrong: `Je ${frOf(R('016'))} le ${frOf(MIDI.id)}.`,
        right: frOf(R('131')),
        why: `This is the error the rule creates rather than one it fixes: you learn ${frOf(MATIN.id)}, you generalise, and you reach the two words that refuse it. le ${frOf(MIDI.id)} appears zero times in ${CORPUS_SENTENCES_MEASURED.toLocaleString('en-GB')} published sentences.`,
      },
      {
        wrong: `Je ${frOf(R('001')).replace('se ', '')} à sept heures.`,
        right: frOf(R('003')),
        why: 'The small word at the front is not optional and it is not decoration. Dropping it leaves a verb that means doing the thing to something else, and a listener will wait for you to say what.',
      },
      {
        wrong: 'Le soir, je suis libre.',
        right: 'Ce soir, je suis libre.',
        why: 'Both are correct French and they mean different things. The first says you are generally free in the evenings and the second says tonight. This lesson teaches the first; the word behind the second belongs to a later unit.',
      },
      {
        wrong: `${frOf(MATIN.id)} je bois un café.`,
        right: frOf(R('090')),
        why: 'Nothing is wrong with the words. When the time goes at the front, French puts a comma after it. Leaving that comma out is the one thing in this lesson nobody could ever hear.',
      },
    ],
  },

  {
    type: 'listening',
    id: 's17-listen',
    title: 'Listen For The Little Word',
    frSub: 'Écoutez le petit mot',
    layer: 'core',
    terms: ['partsTakeLe', 'midiTakesNothing'],
    questionsInModal: true,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-25-listening' },
    say: 'Five lines. The word you are listening for is unstressed and very short, which is exactly why it goes missing.',
    lines: [
      { fr: frOf(R('090')), en: enOf(R('090')) },
      { fr: frOf(R('131')), en: enOf(R('131')) },
      { fr: frOf(R('134')), en: enOf(R('134')) },
      { fr: frOf(R('136')), en: enOf(R('136')) },
      { fr: frOf(R('167')), en: enOf(R('167')) },
    ],
    // Slots run 2, 0, 3, 1, 0. MissionRich renders listening options in AUTHORED
    // order and never shuffles them, so no two consecutive questions share a slot.
    questions: [
      {
        q: 'In the first line, where does the time sit in the sentence?',
        opts: ['At the end', 'In the middle', 'At the front, with a comma after it', 'It is not stated'],
        correct: 2,
        why: 'At the front, with a comma. French does this comfortably and the rest of the sentence does not change to accommodate it. You never have to do it yourself, and you do have to be able to hear it.',
      },
      {
        q: `In the second line, what comes immediately before ${frOf(MIDI.id)}?`,
        opts: ['à, and nothing else', 'le', 'la', 'nothing at all'],
        correct: 0,
        why: `à and nothing else. There is no little word in there and there is no gap where one should be. That is what this word does.`,
      },
      {
        q: 'In the third line, is the speaker describing one evening or a habit?',
        opts: ['One particular evening', 'It cannot be told from the sentence', 'A past evening', 'A habit'],
        correct: 3,
        why: 'A habit. The little word in front of the evening is the only thing in that sentence saying so, and it is one syllable long and completely unstressed.',
      },
      {
        q: 'The fourth line has a word meaning early. Which is it?',
        opts: [frOf(R('038')), frOf(R('037')), frOf(R('026')), frOf(R('025'))],
        correct: 1,
        why: `${frOf(R('037'))} is early and ${frOf(R('038'))} is late. They are short, they sound nothing alike, and they are the two most useful words in this lesson that are not times of day.`,
      },
      {
        q: 'In the last line, roughly when does she get home?',
        opts: ['Around six in the evening', 'At midday', 'Before eight in the morning', 'At midnight'],
        correct: 0,
        why: 'Around six. The sentence uses the twenty-four hour clock, which is ordinary in French for anything scheduled, and the clock lesson already gave you the numbers for it.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's18-fronting',
    title: 'The Time Can Go Either End',
    frSub: 'Devant ou derrière',
    layer: 'core',
    terms: ['fronting', 'partsTakeLe'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-25-listening' },
    say: 'The same sentence twice. Only the position of the time changes, and nothing else moves.',
    cols: ['time at the front', 'time at the end'],
    rows: [
      {
        cells: [frOf(R('090')), `Je bois un jus d'orange ${frOf(MATIN.id)}.`],
        say: frOf(R('090')),
        detail: {
          title: 'Both are ordinary French',
          body: 'The little word travels with the time wherever the time goes, and no other word in the sentence changes. If you never front anything, every sentence you say is still correct.',
          say: frOf(R('090')),
        },
      },
      {
        cells: [`${frOf(SOIR.id)}, nous dînons ensemble.`, frOf(R('134'))],
        say: frOf(R('134')),
        detail: {
          title: 'The comma is the only extra',
          body: 'Fronting costs one comma in writing and nothing at all in speech. This is the single thing in the lesson that exists only on paper.',
          say: frOf(R('134')),
        },
      },
      {
        cells: [`À ${frOf(MIDI.id)}, je déjeune avec mes collègues.`, frOf(R('131'))],
        say: frOf(R('131')),
        detail: {
          title: 'And the bare one behaves the same',
          body: `Moving ${frOf(MIDI.id)} to the front does not give it a little word. Nothing about the position changes which of these two groups a time belongs to.`,
          say: frOf(R('131')),
        },
      },
    ],
  },

  /* ── Act 5: tell somebody about your day ──────────────────────────────── */

  {
    type: 'reading',
    id: 's19-reading',
    title: 'A Day, Written Down',
    frSub: 'Une journée racontée',
    layer: 'core',
    terms: ['partsTakeLe', 'midiTakesNothing', 'seIsPartOfTheVerb'],
    questionsInModal: true,
    say: 'One passage. Tap any underlined word for what it is doing.',
    // ONE BLOCK. PassagePage splits on /(?<=[.!?»])\s+/, so an authored newline
    // is silently discarded. Instruction and context are English; everything
    // French sits inside « ». « ce soir » appears ONCE, as context, and is
    // drilled nowhere: NEIGHBOUR_DEMONSTRATIVES guards every production surface.
    text:
      'Sophie works in a bookshop in Rennes and her days are more regular than she would like. '
      + `« ${frOf(R('153'))} » she says, and then admits that getting out of bed takes another twenty minutes. `
      + `« ${frOf(R('144'))} » Breakfast is coffee standing up. `
      + `« ${frOf(R('160'))} » is how her flatmate describes it, which Sophie says is unfair but accurate. `
      + `She opens the shop at ten and « ${frOf(R('131'))} » in the small park behind it when the weather allows. `
      + 'The afternoon is the long part. '
      + `« ${frOf(R('167'))} » and the evening starts properly from there. `
      + `« ${frOf(R('134'))} » with her flatmate most days, and afterwards there is usually a film that neither of them finishes. `
      + `« ${frOf(R('172'))} » on a working night, which she is aware is early, and « ${frOf(R('181'))} » at the weekend to make up for it. `
      + 'Asked whether she would change any of it, she says only the mornings. '
      + 'Asked whether she is free this evening, she says « Ce soir, oui », and the two words do a job that none of the rest of this passage can do.',
    questions: [
      { q: 'What time does Sophie wake up, and how long does it take her to actually get up?', a: 'Seven, and about another twenty minutes.' },
      { q: 'Where does she have lunch, and what is notable about how the time is said?', a: 'In the park behind the shop, at midday, and midday takes no little word in front of it.' },
      { q: 'What is different about the last two words of the passage compared with every other time in it?', a: 'They mean this particular evening rather than evenings in general, and they use a different little word which this lesson does not teach.' },
    ],
    // EVERY KEY BELOW IS A FORM THAT ACTUALLY OCCURS IN THE PASSAGE ABOVE.
    // A first draft glossed « le matin », « tôt », « se coucher » and « le
    // week-end », none of which the passage contains: it has « chaque matin »,
    // « tard », « se couche » and an English weekend. All four resolved to
    // nothing and underlined nothing, and the repo-wide glossary test caught it.
    //
    // No key is a substring of another. `MAX_GLOSS_WORDS` is four and matching
    // is longest-first, so a short entry sitting inside a longer one underlines
    // nothing at all and fails silently.
    glossary: [
      { word: 'chaque matin', en: 'every morning', note: 'A second way of saying the habit, doing the job the little word does elsewhere.' },
      { word: frOf(MIDI.id), en: enOf(MIDI.id), note: 'No little word, ever. A point on the clock rather than a stretch of the day.' },
      { word: frOf(SOIR.id), en: enOf(SOIR.id), note: 'With its little word, meaning evenings as a rule rather than one evening.' },
      { word: 'se couche', en: 'goes to bed', note: 'The small word at the front, in the shape it takes for somebody else.' },
      { word: frOf(R('038')), en: enOf(R('038')), note: 'Late. Its opposite is three letters long and sounds nothing like it.' },
    ],
  },

  {
    type: 'flashcards',
    id: 's20-flash',
    title: 'The Day, Both Ways',
    frSub: 'Révision rapide',
    layer: 'core',
    render: 'deck',
    say: 'Ten cards. The times first, then the verbs that matter most.',
    cards: [
      ...TIME_IDS.map((id) => ({ front: enOf(id), back: frOf(id), say: frOf(id) })),
      ...[R('001'), R('011'), R('012'), R('020'), R('021'), R('016')].map((id) => ({
        front: enOf(id), back: frOf(id), say: frOf(id),
      })),
    ],
  },

  {
    type: 'dictation',
    id: 's21-dictation',
    title: 'Write What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    terms: ['midiTakesNothing', 'partsTakeLe'],
    say: 'Three sentences. Every one of them hands you a tile you must not use.',
    // All three are in WORD mode, which was checked through the real dicteeMode
    // rather than assumed, and all three were chosen because `wordDecoys` puts
    // exactly the wrong answer into the tile bank: `le` against `à midi`, and
    // `la` against `le matin` and `le soir`.
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's22-speak',
    title: 'Say Your Day',
    frSub: 'À voix haute',
    layer: 'core',
    terms: ['partsTakeLe', 'midiTakesNothing'],
    say: 'The times of day and six verbs, out loud. The little word is short and unstressed, and it still has to be there.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's23-scenario',
    title: 'When Are You Free?',
    frSub: 'Tu es libre quand ?',
    layer: 'core',
    say: 'The conversation from mission one, and this time you have the words.',
    setting: 'The same room above the café, three weeks later. Claire is packing her bag again.',
    // Every alternative keeps midday BARE, because a version with le in it is
    // not an alternative, it is the error this lesson exists to prevent, and an
    // alternative is an answer the learner is told is right. a1.22 shipped that
    // mistake in its first draft and its own header records it.
    turns: [
      {
        ai: 'Tu es libre quand, en général ?',
        en: 'When are you generally free?',
        user: frOf(SOIR.id),
        userEn: 'In the evenings.',
        alts: [
          { fr: `${frOf(SOIR.id)}, en général.`, en: 'In the evenings, generally.' },
          { fr: `Je suis libre ${frOf(SOIR.id)}.`, en: 'I am free in the evenings.' },
        ],
      },
      {
        ai: `Et ${frOf(MIDI.id)} ? Tu déjeunes où ?`,
        en: 'And at midday? Where do you have lunch?',
        user: frOf(R('131')),
        userEn: enOf(R('131')),
        alts: [
          { fr: `Je déjeune à ${frOf(MIDI.id)}.`, en: 'I have lunch at midday.' },
          { fr: `À ${frOf(MIDI.id)}, avec mes collègues.`, en: 'At midday, with colleagues.' },
        ],
      },
      {
        ai: 'Tu te couches tard, toi ?',
        en: 'Do you go to bed late?',
        user: `Je me couche ${frOf(R('037'))} pendant la semaine.`,
        userEn: 'I go to bed early during the week.',
        alts: [
          { fr: `Je me couche ${frOf(R('037'))}.`, en: 'I go to bed early.' },
          { fr: `Non, ${frOf(R('037'))}.`, en: 'No, early.' },
        ],
      },
    ],
  },

  /* ── Act 6: prove it ──────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's24-review',
    title: 'Everything, Once More',
    frSub: 'Tout, encore une fois',
    layer: 'core',
    render: 'deck',
    say: 'Again, hard or easy on each. What you mark as again comes back first.',
    cards: [
      { front: 'Which four parts of the day take a little word?', back: TAKES_ARTICLE.map((p) => p.fr).join(' · '), say: TAKES_ARTICLE.map((p) => p.fr).join(', ') },
      { front: 'Which two take nothing at all?', back: `${frOf(MIDI.id)} · ${frOf(MINUIT.id)}`, say: `${frOf(MIDI.id)}, ${frOf(MINUIT.id)}` },
      { front: 'What does the little word mean when it is there?', back: 'Every one of them, as a habit, rather than one particular one', say: frOf(MATIN.id) },
      { front: 'How do you say you have lunch at midday?', back: frOf(R('131')), say: frOf(R('131')) },
      { front: 'Waking up, and then getting up', back: `${frOf(R('010'))} · ${frOf(R('001'))}`, say: `${frOf(R('010'))}, ${frOf(R('001'))}` },
      { front: 'Say the first one about yourself', back: frOf(R('005')), say: frOf(R('005')) },
      { front: 'Going to bed, and falling asleep', back: `${frOf(R('020'))} · ${frOf(R('041'))}`, say: `${frOf(R('020'))}, ${frOf(R('041'))}` },
      { front: 'Early, and late', back: `${frOf(R('037'))} · ${frOf(R('038'))}`, say: `${frOf(R('037'))}, ${frOf(R('038'))}` },
      { front: 'Saying the habit out loud instead of leaving it to the little word', back: frOf(R('026')), say: frOf(R('026')) },
      { front: 'The verb for eating anything at all', back: frOf('fr.a1.routines.185'), say: frOf('fr.a1.routines.185') },
    ],
  },

  {
    type: 'progressCheck',
    id: 's25-progress',
    title: 'Where You Are',
    frSub: 'Où vous en êtes',
    layer: 'core',
    say: 'One card, and then the exam.',
    body: 'You have the shape of a day, the little word that marks a habit, and the two times that refuse it. What is left is proving that the second of those is a rule you hold rather than a card you remember.',
    // Filled below from the array itself. A display string is validated against
    // nothing, so a hand-typed count would have stayed confidently wrong.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's26-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    // QuizDeckView shuffles the options of every closed question per question per
    // attempt (LessonPager.tsx:839 → LessonRich.tsx:1232), so no option below
    // refers to a position and no two options within a question are equal. The
    // authored `correct` index is still spread on purpose, because `quiz-spread`
    // caps any one slot at 40% of the closed questions and the answer space here
    // is a handful of very short words.
    //
    // TWO ROUNDS TEST TIMES THE LESSON NEVER DRILLED as times (the weekend, and
    // the twenty-four hour clock), which is the only way to test the rule rather
    // than the phrase: a learner can pass every question about `à midi` by
    // having stored `à midi` as one word.
    rounds: [
      {
        id: 'r1-the-little-word',
        label: 'The little word',
        // drillForRound walks a round's targets and fires the drill of the FIRST
        // that resolves, then stops. Every drill this lesson authors is the
        // first resolving target of exactly one round.
        targets: ['err-no-article', 'err-bare-midi'],
        say: 'What it is, and what it is doing there.',
        questions: [
          {
            q: `You want to say that you read in the evenings, as a habit. Which words do you use for the evening part?`,
            format: 'mcq',
            opts: [frOf(SOIR.id), `à ${frOf(SOIR.id)}`, 'soir', `de ${frOf(SOIR.id)}`],
            correct: 0,
            why: `${frOf(SOIR.id)}, with its little word and nothing else. The little word is what makes it evenings in general rather than one particular evening, and it is the same word the days lesson used on le lundi.`,
            ref: 's04-parts',
          },
          {
            q: 'Write the two words for the morning, with the little word in front.',
            format: 'typeIn',
            accept: [frOf(MATIN.id), 'le matin'],
            answer: frOf(MATIN.id),
            why: `${frOf(MATIN.id)}. Written whole rather than as a bare article, because a two-letter answer typed on its own is a coin toss rather than a test.`,
            ref: 's09-times',
          },
          {
            q: `${frOf(R('025'))} was never taught as a part of the day in this lesson. Does it take a little word?`,
            format: 'mcq',
            opts: [
              'No, like midday',
              'Only when it is at the front of a sentence',
              'Yes, and it means weekends in general',
              'Only in writing',
            ],
            correct: 2,
            why: `Yes. It is a stretch of time rather than a point on the clock, so it behaves like ${frOf(MATIN.id)} and ${frOf(SOIR.id)} rather than like ${frOf(MIDI.id)}. You could answer that without having been told, which is the point.`,
            ref: 's09-times',
          },
          {
            q: 'Somebody writes « Matin, je bois un café. » What is missing?',
            format: 'errorSpot',
            accept: [frOf(R('090')), 'Le matin, je bois un café.', 'le matin je bois un cafe'],
            answer: frOf(R('090')),
            why: 'The little word in front of the morning. Without it the sentence has no way of saying this is a habit, and a bare part of the day at the front of a sentence is not a shape French makes.',
            ref: 's16-errors',
          },
        ],
      },
      {
        id: 'r2-the-two-that-refuse',
        label: 'Midday and midnight',
        targets: ['err-bare-midi', 'err-no-article'],
        say: 'The two words the rule does not reach.',
        questions: [
          {
            q: `You have lunch at midday. Write the two words for at midday.`,
            format: 'typeIn',
            accept: [`à ${frOf(MIDI.id)}`, 'a midi', 'à midi'],
            answer: `à ${frOf(MIDI.id)}`,
            why: `à ${frOf(MIDI.id)}. Two words and no little word between them. If a le crept in, that is the rule from round one over-applying itself, which is exactly what it does.`,
            ref: 's07-exception',
          },
          {
            q: `How many times does le ${frOf(MIDI.id)} appear in the ${CORPUS_SENTENCES_MEASURED.toLocaleString('en-GB')} French sentences published in this app?`,
            format: 'mcq',
            opts: ['About fifty', 'Zero', 'Only in older writing', 'About the same as à midi'],
            correct: 1,
            why: `Zero. à ${frOf(MIDI.id)} appears fifty-one times. That gap is not a matter of taste, and it is the strongest single piece of evidence in this lesson.`,
            ref: 's07-exception',
          },
          {
            q: `Which of these is a shape French does not make?`,
            format: 'mcq',
            opts: [
              `à ${frOf(MINUIT.id)}`,
              frOf(PART_IDS[3]),
              frOf(PART_IDS[1]),
              `le ${frOf(MINUIT.id)}`,
            ],
            correct: 3,
            why: `le ${frOf(MINUIT.id)}. Midnight behaves exactly like midday: it is a point on the clock, so there is nothing to mark as habitual and no little word goes in front of it.`,
            ref: 's05-contrast',
          },
          {
            q: `Why do ${frOf(MIDI.id)} and ${frOf(MINUIT.id)} behave differently from the other four?`,
            format: 'mcq',
            opts: [
              'They are borrowed words',
              'They are the only two that are masculine',
              'They name a moment rather than a stretch of time',
              'They are always used with numbers',
            ],
            correct: 2,
            why: `They name a moment. ${frOf(MATIN.id)} covers several hours and can sensibly be marked as something that repeats. Midday arrives, and there is nothing there to mark.`,
            ref: 's08-sort',
          },
        ],
      },
      {
        id: 'r3-habit',
        label: 'Saying it is a habit',
        targets: ['err-habit', 'err-no-article'],
        say: 'The little word, and the loud version of it.',
        questions: [
          {
            q: `What is the difference between ${frOf(SOIR.id)} and Ce soir?`,
            format: 'mcq',
            opts: [
              'There is no difference',
              'The first is evenings in general and the second is this evening',
              'The first is formal and the second is not',
              'The second is plural',
            ],
            correct: 1,
            why: `The first is your evenings as a rule and the second is tonight. This lesson teaches the first. The word that makes the second work is a later unit's, and it is what the opening scene was about.`,
            ref: 's16-errors',
          },
          {
            q: `Listen. Is this sentence about a habit or about one particular day?`,
            format: 'listenChoose',
            say: frOf(R('134')),
            opts: ['A habit', 'One particular day'],
            correct: 0,
            why: 'A habit. The only thing in that sentence saying so is the little word in front of the evening, which is one syllable long, completely unstressed, and the easiest thing in the sentence to miss.',
            ref: 's17-listen',
          },
          {
            q: `Write the three words that say a habit out loud, the ones meaning every day.`,
            format: 'typeIn',
            accept: [frOf(R('026')), 'tous les jours'],
            answer: frOf(R('026')),
            why: `${frOf(R('026'))}. It does not replace the little word and it does not compete with it. French will use both in one sentence, which is what ${frOf(R('089'))} does.`,
            ref: 's06-habit',
          },
          {
            q: 'Say that you get up at seven.',
            format: 'speak',
            target: frOf(R('003')),
            accept: [frOf(R('003')), 'je me lève à sept heures'],
            answer: frOf(R('003')),
            why: 'The small word has become me because the sentence is about you, and the hour comes from the clock lesson unchanged. This is a whole phrase rather than a rule you are applying.',
            ref: 's11-se',
          },
        ],
      },
      {
        id: 'r4-the-small-word',
        label: 'The small word at the front',
        targets: ['err-dropped-se', 'err-habit'],
        say: 'About half the verbs in a day carry it.',
        questions: [
          {
            q: 'Which of these verbs does not carry the small word at the front?',
            format: 'mcq',
            opts: [frOf(R('020')), frOf(R('017')), frOf(R('011')), frOf(R('001'))],
            correct: 1,
            why: `${frOf(R('017'))}. Eating dinner is something you do rather than something you do to yourself, and French marks that difference. Going to bed, showering and getting up all carry the small word.`,
            ref: 's13-rest',
          },
          {
            q: 'Somebody writes « Je lève à sept heures. » Fix it.',
            format: 'errorSpot',
            accept: [frOf(R('003')), 'je me lève à sept heures', 'Je me lève à sept heures'],
            answer: frOf(R('003')),
            why: 'The small word is missing. Without it the verb means lifting something else, and a listener will wait for you to say what you lifted.',
            ref: 's11-se',
          },
          {
            q: `In ${frOf(R('157'))}, what has the small word become?`,
            format: 'mcq',
            opts: ['me', 'se', 'te', 'it has been dropped'],
            correct: 2,
            why: 'te, because the sentence is about the person being spoken to. Three persons, three shapes, and those three are the only ones this lesson shows you. What it does across every other person is a lesson of its own.',
            ref: 's12-persons',
          },
          {
            q: 'Write the two words meaning you get up, about yourself, with no time on the end.',
            format: 'typeIn',
            accept: ['je me lève', 'Je me lève', 'je me leve'],
            answer: 'je me lève',
            why: 'The small word becomes me and sits between you and the verb. Learned whole rather than assembled, which is all an A1 learner needs from it.',
            ref: 's12-persons',
          },
        ],
      },
      {
        id: 'r5-the-day',
        label: 'The day in order',
        targets: ['err-order', 'err-dropped-se'],
        say: 'From getting up to going to bed.',
        questions: [
          {
            q: 'Which comes first in a French morning?',
            format: 'mcq',
            opts: [frOf(R('012')), frOf(R('001')), frOf(R('010')), frOf(R('013'))],
            correct: 2,
            why: `${frOf(R('010'))}. Waking up and getting up are two different verbs in French and there is often a considerable gap between them. English tends to use one word for both.`,
            ref: 's03-day',
          },
          {
            q: 'Which of these happens last?',
            format: 'mcq',
            opts: [frOf(R('041')), frOf(R('034')), frOf(R('018')), frOf(R('017'))],
            correct: 0,
            why: `${frOf(R('041'))}, dropping off, which comes after resting, after getting home and after dinner. It is also the one thing in a day you do not decide to do.`,
            ref: 's13-rest',
          },
          {
            q: 'Say what you do in the evening, using the verb for having dinner.',
            format: 'speak',
            target: frOf(R('134')),
            accept: [frOf(R('134')), 'nous dînons ensemble le soir', 'je dîne le soir'],
            answer: frOf(R('134')),
            why: `The little word on the evening is doing the habit, and the verb carries no small word at the front. Both halves of this lesson in one short sentence.`,
            ref: 's13-rest',
          },
          {
            q: 'Write the word meaning early.',
            format: 'typeIn',
            accept: [frOf(R('037')), 'tot'],
            answer: frOf(R('037')),
            why: `${frOf(R('037'))} is early and ${frOf(R('038'))} is late. Neither takes a little word, because neither is a time of day: they describe when something happened relative to what you expected.`,
            ref: 's17-listen',
          },
        ],
      },
      {
        id: 'r6-put-it-together',
        label: 'All of it at once',
        targets: ['err-mixed', 'err-bare-midi'],
        say: 'Both halves in the same sentence, which is where it actually goes wrong.',
        questions: [
          {
            q: `Which sentence is right?`,
            format: 'mcq',
            opts: [
              `Je déjeune le ${frOf(MIDI.id)} et je dîne ${frOf(SOIR.id)}.`,
              `Je déjeune à ${frOf(MIDI.id)} et je dîne ${frOf(SOIR.id)}.`,
              `Je déjeune à ${frOf(MIDI.id)} et je dîne à ${frOf(SOIR.id)}.`,
              `Je déjeune ${frOf(MIDI.id)} et je dîne le ${frOf(SOIR.id)}.`,
            ],
            correct: 1,
            why: `Midday takes à and nothing else; the evening takes its little word. The other three each get one half right and the other half wrong, which is exactly what happens when the rule is remembered as one thing instead of two.`,
            ref: 's05-contrast',
          },
          {
            q: 'Listen. Which part of the day is this?',
            format: 'listenChoose',
            say: frOf(R('167')),
            opts: [frOf(MIDI.id), frOf(MATIN.id), frOf(SOIR.id), frOf(PART_IDS[3])],
            correct: 2,
            why: 'The evening. The sentence gives the hour on the twenty-four hour clock rather than naming the part of the day, so the answer comes from the number and not from a word you were listening for.',
            ref: 's17-listen',
          },
          {
            q: 'Somebody writes « Je me couche à minuit tous les jours le nuit. » One part of that is wrong. Fix the whole sentence.',
            format: 'errorSpot',
            accept: [
              'Je me couche à minuit tous les jours.',
              'je me couche à minuit tous les jours',
              'Je me couche à minuit tous les jours',
            ],
            answer: 'Je me couche à minuit tous les jours.',
            why: `The last two words have to go. The hour is already given by à ${frOf(MINUIT.id)} and the habit by ${frOf(R('026'))}, so la nuit on the end is a second time of day in a sentence that already had one.`,
            ref: 's16-errors',
          },
          {
            q: 'Write the verb meaning to eat, in general, rather than the one for lunch or the one for dinner.',
            format: 'typeIn',
            accept: [frOf('fr.a1.routines.185'), 'manger'],
            answer: frOf('fr.a1.routines.185'),
            why: `${frOf('fr.a1.routines.185')}. French gives lunch and dinner a verb each and keeps a general one as well, which English does not do. It opens on a nasal vowel with no n sound behind it: ${sub('fr.a1.routines.185')}.`,
            ref: 's13-rest',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's27-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then what carries into the next unit.',
    body: 'You can name the parts of a day with the little word that marks them as habits, handle the two times of day that refuse that word entirely, walk a day through in order from waking up to dropping off, and say a good deal of it about yourself with the small word at the front that about half the verbs carry. The habit underneath all of that is one you have now been asked for three times: French stores a small word with the thing it belongs to, because the small word is doing work the word itself cannot do. The article did it for nouns, and now it does it for times of day. What that small word at the front of a verb does across every other person is a whole lesson, and it is a band from here. Nothing in this one needed it.',
    points: [
      `${REFRAME} Four take it and two refuse it, and that is the lesson.`,
      'The little word means every one of them, not this one. It is the same word the days lesson used on le lundi.',
      `Tous les jours says the same thing out loud when the little word feels too quiet, and both can sit in one sentence.`,
      'About half the verbs in a day carry a small word at the front. Store it with the verb, and use three whole phrases about yourself.',
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
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's25-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.25.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Times of day', v: String(TAKES_ARTICLE.length + TAKES_NOTHING.length) },
    { k: 'Verbs of a day', v: String(VERB_IDS.length) },
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson. The brief is explicit
 * that "the weight belongs on the article contrast and the sequence, not on the
 * word list", and the count bears it out: TWO sections list vocabulary (s09 and
 * s14) while NINE make the learner decide (s05, s08, s15, s16, s17, s21, s22,
 * s23, plus the four drills behind the quiz).
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22.                                            */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Your day',
    sections: ['s01-scene', 's02-goals', 's03-day', 's04-parts'],
    milestone: 'You have watched an evening not get arranged over one little word.',
    estScreens: 24,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The little word, and the two that refuse it',
    sections: ['s05-contrast', 's06-habit', 's07-exception', 's08-sort', 's09-times'],
    milestone: 'Four parts of the day that take it, two that take nothing, on one screen.',
    estScreens: 26,
    restPoints: ['s06-habit/halfway', 's08-sort/halfway'],
  },
  {
    id: 'act3',
    title: 'The verbs of a day',
    sections: ['s10-morning', 's11-se', 's12-persons', 's13-rest', 's14-verbs'],
    milestone: 'A day in verbs, and the small word about half of them carry.',
    estScreens: 26,
    restPoints: ['s10-morning/halfway', 's13-rest/halfway'],
  },
  {
    id: 'act4',
    title: 'Putting it in order',
    sections: ['s15-order', 's16-errors', 's17-listen', 's18-fronting'],
    milestone: 'The day sorted, the four ways it goes wrong, and the little word heard rather than read.',
    estScreens: 22,
    restPoints: ['s15-order/halfway', 's17-listen/halfway'],
  },
  {
    id: 'act5',
    title: 'Tell somebody about your day',
    sections: ['s19-reading', 's20-flash', 's21-dictation', 's22-speak', 's23-scenario'],
    milestone: 'A whole day read, written, said out loud and held up in a conversation.',
    estScreens: 44,
    restPoints: ['s20-flash/halfway', 's22-speak/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s24-review', 's25-progress', 's26-quiz', 's27-roundup'],
    milestone: 'Lesson complete. Everything here carries straight into describing anybody\'s day.',
    estScreens: 60,
    restPoints: ['s24-review/halfway', 's26-quiz/after-r2', 's26-quiz/after-r4'],
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
 * legitimately overlap. The SRS keys on (itemId, modality), so releasing one
 * card from two tranches would take two ratings for one sentence. The first
 * tranche to name an id keeps it, which is also the pedagogically right answer:
 * an item belongs to the act that taught it.                                  */

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
  // Act 1: the four parts of the day, which s04-parts puts on a card one by
  // one, and the two published sentences that act shows carrying one in the
  // wild. NOT the bare pair: they are act 2's whole argument and a card
  // released before its mission is a card the learner is asked to rate before
  // they have met it.
  once([...PART_IDS, R('090'), R('134')]),
  // Act 2: the two that take nothing, the habit words, and the three sentences
  // s06-habit and s07-exception put on screens.
  once([...BARE_IDS, ...HABIT_IDS, R('160'), R('089'), R('131'), R('178')]),
  // Act 3: the verbs, the three objects, the three published conjugated frames
  // and the six sentences acts 3's cards and its person table display.
  once([
    ...MORNING_IDS, ...MIDDAY_IDS, ...EVENING_IDS, ...OBJECT_IDS, ...FRAME_IDS,
    R('003'), R('144'), R('153'), R('157'), R('154'), R('181'), R('167'), R('137'), R('164'),
  ]),
  // Act 4: the sentence s17-listen plays that no earlier act displayed.
  once([R('136')]),
  // Act 5: the sentence the reading passage introduces, plus the dictée target
  // that no earlier act displayed. s21-dictation is where a learner first meets
  // fr.a1.routines.125, so act 5 is where it is released rather than earlier.
  once([R('172'), R('125')]),
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
    throw new Error(`a1.25.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.25.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  }
}

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * Six triggers, six drills, six retests, six quiz rounds, and that is not a
 * coincidence. `drillForRound` walks a round's `targets` and fires the drill of
 * the FIRST one that has any, then stops. So a drill named only in second place
 * never runs. Each drill below is the first target of exactly one round.
 *
 * a1.05 shipped two unreachable drills for exactly this reason and a first draft
 * of a1.07 shipped a third.
 *
 * `err-no-article` and `err-bare-midi` look like one error and are two. The
 * first is not having the rule at all. The second is having it and applying it
 * to the two words it does not reach, which is an error the rule CREATES. A
 * learner who has fixed the first is more likely to make the second, not less,
 * and merging them would remediate only one.                                  */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-no-article',
    description: 'Says a part of the day bare, as English does: « Matin, je bois un café. » Understood, and it loses the only thing in the sentence that said this was a habit rather than one morning.',
    detectOn: ['s04-parts', 's08-sort', 's16-errors', 's26-quiz/r1-the-little-word'],
    drill: 'drill-little-word',
    retest: 'retest-little-word',
  },
  {
    id: 'err-bare-midi',
    description: 'Has the rule and over-applies it: « Je déjeune le midi. » The error the lesson\'s own rule creates, and the phrase appears zero times in 27,353 published sentences.',
    detectOn: ['s05-contrast', 's07-exception', 's15-order', 's26-quiz/r2-the-two-that-refuse'],
    drill: 'drill-bare',
    retest: 'retest-bare',
  },
  {
    id: 'err-habit',
    description: 'Reads or says a part of the day with its little word and hears it as one particular one, or reaches for the little word to mean this evening. The scene is built on it.',
    detectOn: ['s06-habit', 's17-listen', 's26-quiz/r3-habit'],
    drill: 'drill-habit',
    retest: 'retest-habit',
  },
  {
    id: 'err-dropped-se',
    description: 'Drops the small word at the front of the verb: « Je lève à sept heures. » Leaves a verb that means doing the thing to something else, and a listener waits to be told what.',
    detectOn: ['s11-se', 's12-persons', 's26-quiz/r4-the-small-word'],
    drill: 'drill-small-word',
    retest: 'retest-small-word',
  },
  {
    id: 'err-order',
    description: 'Treats waking up and getting up as one verb, or reaches for dormir when the sentence needs se coucher. Costs nothing in comprehension and makes a described day sound assembled rather than lived.',
    detectOn: ['s03-day', 's15-order', 's26-quiz/r5-the-day'],
    drill: 'drill-order',
    retest: 'retest-order',
  },
  {
    id: 'err-mixed',
    description: 'Gets one half of the rule right and the other half wrong inside one sentence: « Je déjeune à midi et je dîne à le soir. » The error that survives everything except practising both halves together.',
    detectOn: ['s18-fronting', 's23-scenario', 's26-quiz/r6-put-it-together'],
    drill: 'drill-both',
    retest: 'retest-both',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-little-word',
    title: 'Which ones take it?',
    format: 'sort',
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    buckets: ['takes a little word', 'takes nothing'],
    items: [...PART_IDS, ...BARE_IDS],
    coach: 'Sort by whether the word names a stretch of time or a point on the clock. Four of these are stretches and two are points, and the two points are the ones that refuse the little word.',
  },
  {
    id: 'retest-little-word',
    title: 'One more time',
    format: 'mcq',
    q: 'What does the little word in front of a part of the day tell you?',
    opts: ['That it happens regularly', 'That there is one of them', 'That the speaker is being formal'],
    correct: 0,
    why: 'That it happens regularly. The same word the days lesson taught on le lundi, doing the same job on a bigger set of nouns.',
  },
  {
    id: 'drill-bare',
    title: 'Midday and midnight',
    format: 'flashcard',
    pairs: [
      ['at midday', `à ${frOf(MIDI.id)}`],
      ['at midnight', `à ${frOf(MINUIT.id)}`],
      ['in the mornings', frOf(MATIN.id)],
      ['in the evenings', frOf(SOIR.id)],
      ['in the afternoons', frOf(PART_IDS[1])],
      ['at night', frOf(PART_IDS[3])],
    ] as [string, string][],
    coach: 'Two of these six take à and nothing else. The other four take a little word and no à at all. If you find yourself putting both in front of one word, that is the two halves of the rule colliding.',
  },
  {
    id: 'retest-bare',
    title: 'One more time',
    format: 'mcq',
    q: 'You have lunch at midday. Which is right?',
    opts: [`le ${frOf(MIDI.id)}`, `à ${frOf(MIDI.id)}`, `au ${frOf(MIDI.id)}`],
    correct: 1,
    why: `à ${frOf(MIDI.id)}. No little word in front of midday, ever, and the first option appears zero times in the whole published corpus.`,
  },
  {
    id: 'drill-habit',
    title: 'A habit, or one particular one?',
    format: 'flashcard',
    pairs: [
      ['in the evenings, as a rule', frOf(SOIR.id)],
      ['I get up at seven, every day', frOf(R('089'))],
      ['every day', frOf(R('026'))],
      ['he drinks a black coffee every morning', frOf(R('160'))],
      ['we have dinner together in the evenings', frOf(R('134'))],
    ] as [string, string][],
    coach: 'Every one of these is about something that repeats, and in every one the thing carrying that meaning is either the little word or a phrase saying it out loud. Nothing here is about one particular day.',
  },
  {
    id: 'retest-habit',
    title: 'One more time',
    format: 'mcq',
    q: `${frOf(SOIR.id)}. Is that this evening, or evenings in general?`,
    opts: ['This evening', 'Evenings in general'],
    correct: 1,
    why: 'Evenings in general. The word for this evening uses a different little word, and it belongs to a later lesson.',
  },
  {
    id: 'drill-small-word',
    title: 'The small word at the front',
    format: 'flashcard',
    pairs: [
      ['to get up', frOf(R('001'))],
      ['to wake up', frOf(R('010'))],
      ['to shower', frOf(R('011'))],
      ['to get dressed', frOf(R('012'))],
      ['to go to bed', frOf(R('020'))],
      ['I get up', 'je me lève'],
      ['I wake up', frOf(R('005'))],
    ] as [string, string][],
    coach: 'Every one of these carries the small word and it is part of the verb rather than something in front of it. When the sentence is about you, that word becomes me.',
  },
  {
    id: 'retest-small-word',
    title: 'One more time',
    format: 'mcq',
    q: 'Somebody says « Je lève à sept heures. » What is missing?',
    opts: ['The hour', 'The small word before the verb', 'The little word before the hour'],
    correct: 1,
    why: 'The small word. Without it the verb means lifting something else, and the sentence is left waiting for an object.',
  },
  {
    id: 'drill-order',
    title: 'What happens when?',
    format: 'sort',
    buckets: ['the morning', 'the evening and the night'],
    items: [R('010'), R('001'), R('011'), R('034'), R('020'), R('021')],
    coach: 'Three of these six belong to a morning and three to the end of a day. The one that catches people is dormir, which is not going to bed: it is what happens afterwards.',
  },
  {
    id: 'retest-order',
    title: 'One more time',
    format: 'mcq',
    q: 'Which comes first?',
    opts: [frOf(R('001')), frOf(R('010')), frOf(R('013'))],
    correct: 1,
    why: `${frOf(R('010'))}. Your eyes open first and your feet reach the floor later, and French keeps those as two separate verbs.`,
  },
  {
    id: 'drill-both',
    title: 'Both halves, one sentence',
    format: 'flashcard',
    pairs: [
      ['I have lunch at midday', `Je ${frOf(R('016'))} à ${frOf(MIDI.id)}`],
      ['I have dinner in the evenings', `Je dîne ${frOf(SOIR.id)}`],
      ['I get up early in the mornings', `Je me lève ${frOf(R('037'))} ${frOf(MATIN.id)}`],
      ['I go to bed at midnight', `Je me couche à ${frOf(MINUIT.id)}`],
    ] as [string, string][],
    coach: 'Each of these has one time that takes a little word or one that takes none, and half of them have a verb carrying the small word as well. Getting one half right and the other wrong in the same sentence is the most common thing that happens next.',
  },
  {
    id: 'retest-both',
    title: 'One more time',
    format: 'mcq',
    q: 'Which sentence is right?',
    opts: [
      `Je déjeune le ${frOf(MIDI.id)} et je dîne ${frOf(SOIR.id)}.`,
      `Je déjeune à ${frOf(MIDI.id)} et je dîne ${frOf(SOIR.id)}.`,
      `Je déjeune à ${frOf(MIDI.id)} et je dîne à ${frOf(SOIR.id)}.`,
    ],
    correct: 1,
    why: 'Midday takes à and nothing else. The evening takes its little word and no à. The other two each get one half right.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * ONE sheet, named by s05-contrast, and it is a `table` rather than a
 * `cheatSheet`. That is deliberate and it is a known defect being routed around:
 * a `cheatSheet` reached through a reference sheet draws its title and nothing
 * else, which a1.13 ships today. A `table` inside a sheet renders. The rule is
 * ALSO in the flow at s05-contrast, so a learner who never opens the sheet has
 * still seen everything in it.                                                */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.25.day',
    title: 'A day, and its little words',
    sections: [
      {
        type: 'table',
        title: 'Which times take one',
        cols: ['the time', 'what you say', 'why'],
        rows: [
          [enOf(PART_IDS[0]), frOf(PART_IDS[0]), 'a stretch of hours, so it can be marked as a habit'],
          [enOf(PART_IDS[1]), frOf(PART_IDS[1]), 'the same, with the little word shortened before the vowel'],
          [enOf(PART_IDS[2]), frOf(PART_IDS[2]), 'a stretch of hours'],
          [enOf(PART_IDS[3]), frOf(PART_IDS[3]), 'a stretch of hours, and this one is the feminine kind'],
          [enOf(BARE_IDS[0]), `à ${frOf(BARE_IDS[0])}`, 'a point on the clock, so there is nothing to mark'],
          [enOf(BARE_IDS[1]), `à ${frOf(BARE_IDS[1])}`, 'a point on the clock'],
        ],
      },
      {
        type: 'teach',
        title: 'What the little word is doing',
        body:
          'It is not the. It is every. Le matin means mornings as a rule rather than one particular morning, '
          + 'which is exactly what le lundi meant in the days lesson and exactly as far as that lesson took '
          + 'it. It reaches every stretch of a day, and the weekend as well. When you want to be certain '
          + 'rather than subtle, tous les jours says the same thing out loud and the two can sit in one '
          + 'sentence without arguing. Midi and minuit are the two words in this set that refuse it: they '
          + 'name single moments rather than stretches of time, and a moment does not repeat, it just '
          + 'arrives. Across the published French in this app, à midi appears fifty-one times and le midi '
          + 'appears none. If you find yourself putting a little word in front of midday, that is this rule '
          + 'over-applying itself, which is a good sign that you have it.',
      },
      {
        type: 'table',
        title: 'A day, in order',
        cols: ['when', 'what you do'],
        rows: [
          [frOf(PART_IDS[0]), `${frOf(R('010'))} · ${frOf(R('001'))} · ${frOf(R('011'))} · ${frOf(R('012'))} · ${frOf(R('013'))}`],
          [`à ${frOf(BARE_IDS[0])}`, `${frOf(R('015'))} · ${frOf(R('016'))} · ${frOf('fr.a1.routines.185')}`],
          [frOf(PART_IDS[2]), `${frOf(R('018'))} · ${frOf(R('074'))} · ${frOf(R('017'))} · ${frOf(R('034'))}`],
          [frOf(PART_IDS[3]), `${frOf(R('020'))} · ${frOf(R('041'))} · ${frOf(R('021'))}`],
        ],
      },
      {
        type: 'teach',
        title: 'The small word at the front of the verb',
        body:
          'About half the verbs in a French day carry a small word stuck to the front: se lever, se doucher, '
          + "s'habiller, se coucher. It is not optional and it is not decoration. Store it as part of the "
          + 'verb, the way the noun gender lesson asked you to store the article as part of the noun. When '
          + 'you talk about yourself it becomes me: je me lève, je me douche, je me couche. Three whole '
          + 'phrases, learned whole, which is all you need to describe your own morning. What that word does '
          + 'across every other person is a lesson of its own and it is a band from here. The verbs that do '
          + 'not carry it are just as common: dormir, travailler, déjeuner, dîner, rentrer and manger all go '
          + 'bare, so the small word is a fact about particular verbs rather than a thing French does to '
          + 'verbs in general.',
      },
    ],
  },
];

export const ROUTINE_LESSON: Lesson = {
  id: 'a1.25.l1',
  unitId: 'a1.25',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'La routine quotidienne',
  level: 'a1',
  // TWENTY-EIGHT, from unit.seq. missions.ts derives the eyebrow at render time
  // as `${level} · LEÇON ${unit.seq}`, and a1.25 sits at seq 28 in Postgres. The
  // stored value is a fallback and has to agree with what the renderer computes,
  // or the two disagree the moment something reads this field instead. a1.03
  // shipped exactly that bug (commit 56c79a7).
  tag: 'A1 · LEÇON 28',
  intro:
    'One little word decides whether you are describing your evenings or tonight, and two times of day refuse it completely. This is how to name the parts of a day, walk through one in order from waking up to dropping off, and say most of it about yourself.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The LESSON's own counter, not `seed.version`. seed.version is the OTA
  // snapshot number, derived by publish-content.ts as previous + 1, and a merge
  // must never hand-bump it.
  //
  // v1 was applied to Postgres and then a1-25-routine.test.ts found three
  // defects that validateLesson, validateDensity and the whole batch had all
  // passed. Every one is the same failure: AUTHORED, VALID, AND DRAWN BY
  // NOTHING.
  //
  //   fr.a1.routines.178 « Je me repose le week-end. » and fr.a1.routines.164
  //   « Il arrive au bureau à huit heures. » were declared in itemIds, resolved
  //   perfectly, and appeared on no screen at all. .178 is now the fourth card
  //   of s06-habit, where it does real work: le week-end is a stretch of time
  //   the lesson never taught, so a learner meeting it there is applying the
  //   rule rather than recalling a card, and the quiz asks exactly that. .164
  //   is now on s13-rest's first card.
  //
  //   fr.a1.routines.006 « il dort » was RELEASED BY ACT 3 and shown by no act 3
  //   section, so a learner would have been asked to rate a card they had never
  //   met. It is now in s12-persons' third row, beside « il se lève », which is
  //   the better card anyway: same person, one verb with the small word and one
  //   without.
  //
  // This is a1.08's failure exactly, and it is the third A1 lesson to ship a
  // draft carrying it.
  version: 2,

  grammarAssumed: [
    'Noun gender, and that the article in front of a noun is the choice that gender makes, introduced in a1.03',
    "le, la, l' and les, and the elision of le and la in front of a vowel, introduced in a1.04",
    'The habitual definite article on a day name, as in le lundi meaning every Monday, introduced in a1.08',
    'Subject pronouns je, tu, il, elle and nous, introduced in a1.05',
    'Clock times, including the twenty-four hour forms used for anything scheduled, introduced in a1.12',
    'The present of être and avoir, introduced in a1.06 and a1.07',
    'Elision as a repair for two vowels meeting, introduced in sons.07',
  ],
  grammarIntroduced: [
    'The habitual definite article extended from day names to the parts of the day',
    'That midi and minuit take no article at all, and combine with à rather than with le',
    'Reflexive verbs as whole lexical items in three attested persons only, with the paradigm reserved for a2.22',
    'Fronting a time adjunct with a comma, as a reading skill rather than a production requirement',
    'tous les jours as an explicit habitual marker alongside the article',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Daily Routine',
    subFr: 'La routine quotidienne',
    introFr: "Un petit mot qui dit « tous les jours », et deux moments qui le refusent.",
    minutes: 26,
    difficulty: 2,
    glyph: '🌅',
    screens: 202,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: ROUTINE_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-25-routine.test.ts, because a constraint on
    // how something is recorded becomes invisible the moment the clip is
    // delivered.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    // CLIP_MANIFEST is empty by design, so every card falls back to device TTS
    // until the studio delivers, and a recordingId resolving to nothing is the
    // correct shipping state.
    recorded: [
      {
        id: 'rec-a1-25-contrast',
        desc:
          'THE SINGLE MOST IMPORTANT NOTE IN THIS LESSON. « le matin » AND « à midi » ARE ONE TAKE, one '
          + 'voice, one pace, read straight through with no gap and no reset. Then, in the SAME take, « le '
          + 'soir » and « à minuit ». The claim the whole lesson rests on is that these are two behaviours of '
          + 'one set of words, and two separate recordings are two performances: a reader who records the '
          + 'bare pair in its own session will lean on the à, and the learner will hear that lean as a '
          + 'difference in emphasis rather than as the absence of a word. '
          + 'THE LITTLE WORD MUST NOT BE STRESSED. le in « le matin » is unstressed, short and almost '
          + 'swallowed, and that is exactly why learners lose it. A reader who gives it weight to be helpful '
          + 'is teaching a sound the learner will never hear again and hiding the actual difficulty. '
          + 'KEEP THE NASAL CLOSED ON matin. It is /matɛ̃/ with a nasal vowel and NO n sound behind it: the '
          + 'app respells it mah-TAⁿ deliberately, and this build repaired that row from mah-TAN precisely '
          + 'because a reader following the old transcription would let an n out of it.',
        clipIds: [
          frOf(MATIN.id), `à ${frOf(MIDI.id)}`, 'matin-midi-pair',
          frOf(SOIR.id), `à ${frOf(MINUIT.id)}`, 'soir-minuit-pair',
          frOf(R('131')), frOf(R('134')),
        ],
      },
      {
        id: 'rec-a1-25-parts',
        desc:
          'THE FOUR PARTS OF THE DAY, EACH READ WITH ITS LITTLE WORD ATTACHED AND NEVER WITHOUT IT. le '
          + "matin, l'après-midi, le soir, la nuit. Read as ONE LIST in one take at an even pace, because "
          + 'the learner is being asked to store the little word as part of the phrase and a pause between '
          + 'the two teaches the opposite. '
          + 'NO PART OF THE DAY IS EVER RECORDED BARE in this lesson, and there is no clip anywhere of le, '
          + "la or l' on its own. They are unstressed function words that only exist attached to something, "
          + 'and a clip of one alone is a sound the learner will never meet again. If a request for one '
          + 'arrives, the request is the mistake. '
          + 'Then the two published sentences in the same take: « Le matin, je bois un jus d\'orange. » and '
          + '« Il boit un café noir chaque matin. » The first FRONTS the time and must carry a real comma '
          + 'pause; the second does not and must not.',
        clipIds: [
          ...TAKES_ARTICLE.map((p) => p.fr),
          'les-quatre-moments',
          frOf(R('090')), frOf(R('160')), frOf(R('089')),
        ],
      },
      {
        id: 'rec-a1-25-se',
        desc:
          'THE SMALL WORD AT THE FRONT OF THE VERB, AND THE THREE PERSONS, ADJACENT IN ONE TAKE. « se lever '
          + '» then « je me lève » then « tu te douches » then « il se lève », straight through. The whole '
          + 'point is that only the small word changes, so any difference in pace, pitch or weight between '
          + 'them teaches something that is not there. '
          + 'DO NOT RECORD A FOURTH AND FIFTH PERSON. « vous vous levez » and « ils se lèvent » are '
          + 'deliberately absent from this lesson: they have zero sentences behind them in the corpus and '
          + 'the full set belongs to a later unit. If a clip list arrives containing either, it has been '
          + 'padded and the padding should be removed rather than recorded. '
          + 'Then the three published sentences, same take: « Je me lève à sept heures. », « Je me douche '
          + "avant de m'habiller. », « Il se lève tout de suite après le réveil. »",
        clipIds: [
          frOf(R('001')), 'je me lève', 'tu te douches', 'il se lève', 'se-me-te-run',
          frOf(R('003')), frOf(R('144')), frOf(R('154')),
        ],
      },
      {
        id: 'rec-a1-25-morning',
        desc:
          'THE MORNING VERBS IN THE ORDER THEY HAPPEN, one take: se réveiller, se lever, se doucher, '
          + "s'habiller, se brosser les dents, prendre le petit déjeuner, aller au travail. The order is "
          + 'content here rather than convenience, so read them as a sequence rather than as a list of '
          + 'unrelated words. '
          + 'TWO PRONUNCIATION DECISIONS THAT MUST NOT BE QUIETLY CHANGED. « les dents » is /dɑ̃/: one nasal '
          + 'vowel, and NONE of the n, the t or the s is sounded. « prendre » opens on a nasal that the app\'s '
          + 'shared transcription checker cannot see, and this build wrote it PRAHⁿDR on purpose; the corpus '
          + 'elsewhere carries PRAHNDR, which is wrong and passes the checker anyway. '
          + 'Also in this take: le réveil, la douche, le café, each whole and each with its little word.',
        clipIds: [
          ...MORNING_IDS.map((id) => frOf(id)),
          ...OBJECT_IDS.map((id) => frOf(id)),
          'le-matin-en-ordre',
        ],
      },
      {
        id: 'rec-a1-25-evening',
        desc:
          'THE MIDDAY AND EVENING VERBS, one take: travailler, déjeuner, manger, rentrer, préparer le dîner, '
          + 'dîner, se reposer, se coucher, s\'endormir, dormir. '
          + '« manger » IS /mɑ̃ʒe/ WITH A NASAL VOWEL AND NO n SOUND. This is the one row this lesson '
          + 'authored and it was written mahⁿ-ZHAY specifically because the same word is published elsewhere '
          + 'in the corpus as mahn-ZHAY, which lets an n out of it. Read the nasal, not the n. '
          + '« s\'endormir » was repaired by this build for the same reason and carries the same constraint. '
          + 'Then the published sentences: « Nous dînons ensemble le soir. », « Il se couche tôt pendant la '
          + 'semaine. », « Il se couche vers vingt-deux heures. », « Elle rentre à la maison vers dix-huit '
          + 'heures. »',
        clipIds: [
          ...MIDDAY_IDS.map((id) => frOf(id)),
          ...EVENING_IDS.map((id) => frOf(id)),
          frOf(R('134')), frOf(R('136')), frOf(R('172')), frOf(R('167')),
        ],
      },
      {
        id: 'rec-a1-25-listening',
        desc:
          'THE FIVE LISTENING LINES, READ AT ORDINARY CONVERSATIONAL PACE AND NOT SLOWED DOWN. The thing '
          + 'the learner is listening for is a single unstressed syllable, and slowing the line down gives '
          + 'that syllable a prominence it does not have in speech, which turns a hard exercise into a '
          + 'trivial one and teaches nothing. The 0.65 speed is available in the player if they need it. '
          + '« Le matin, je bois un jus d\'orange. » CARRIES A REAL COMMA PAUSE and the others do not. That '
          + 'contrast is the content of the fronting mission, so it has to survive into the recording. '
          + 'NEVER RECORD A TIME PHRASE IN ISOLATION for this section. The whole difficulty is that the '
          + 'little word disappears inside a sentence at speed, and a clip of the phrase alone removes the '
          + 'difficulty being tested.',
        clipIds: [
          frOf(R('090')), frOf(R('131')), frOf(R('134')), frOf(R('136')), frOf(R('167')),
        ],
      },
      {
        id: 'rec-a1-25-scene',
        desc:
          'The opening scene, French bubbles only. Claire is a language-exchange partner in her twenties '
          + 'packing up at the end of a session, warm and unhurried. HER REPLY MUST SOUND GENUINELY PLEASED '
          + 'AND COMPLETELY UNSUSPICIOUS. She has not noticed an error, because there is no error: she has '
          + 'been told something true and useful and has responded to it. Any hint that she is humouring the '
          + 'learner turns the scene into a correction and loses the entire point, which is that nothing '
          + 'visibly went wrong and nothing got arranged either. '
          + '« On trouvera un soir, alors ! » IS THE LINE THAT CARRIES THE COST and it must be read as warmly '
          + 'as it reads on the page. It is a friendly non-answer, and the learner should not hear it as one '
          + 'until the break card tells them.',
        clipIds: [
          'Tu es libre quand ?',
          'Ah, super. On trouvera un soir, alors !',
          'Le soir.', 'Ce soir.',
        ],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const ROUTINE_ITEM_IDS = ITEM_IDS;
export const ROUTINE_SPEAK_IDS = SPEAK_IDS;
export const ROUTINE_DICTATION_IDS = DICTATION_IDS;
export const ROUTINE_TRANCHES = DECK_TRANCHE;
export const ROUTINE_PART_IDS = PART_IDS;
export const ROUTINE_BARE_IDS = BARE_IDS;
export const ROUTINE_VERB_IDS = VERB_IDS;
export const ROUTINE_FRAME_IDS = FRAME_IDS;
export const ROUTINE_SENTENCE_IDS = SENTENCE_IDS;
export const ROUTINE_READING_ONLY_IDS = READING_ONLY_IDS;

/* ─── The handover ─────────────────────────────────────────────────────────
 *
 * FOR a2.22, LES VERBES PRONOMINAUX, WHICH IS UNBUILT:
 *
 *   a2.22 DECLARES `themes: ['routine']`, SINGULAR, WHICH IS THE SAME DEAD THEME
 *   a1.25 DECLARED BEFORE THIS BUILD REBOUND IT. 0 rows in Postgres, 0 in the
 *   seed. This build rebinds a1.25 only. a2.22 is somebody else's unit and
 *   rebinding it from here would be changing a lesson nobody has looked at.
 *   WHOEVER BUILDS a2.22 SHOULD EXPECT TO REBIND IT TO `routines` TOO, and the
 *   65 rows at fr.a2.routines are waiting there.
 *
 *   WHAT a1.25 HAS TAKEN, AND ONLY THIS: five reflexive verbs as WHOLE LEXICAL
 *   ITEMS, and three persons of them (je me, tu te, il se) plus one of nous.
 *   No table, no paradigm, no fourth person. The measured reason is in
 *   PARADIGM_FORMS: `vous vous levez`, `ils se lèvent` and `elles se lèvent`
 *   return ZERO rows each across all 27,353 published sentences, so half a
 *   six-person table would have been invention.
 *
 *   WHAT a2.22 STILL OWNS AND SHOULD TAKE FREELY: the full present paradigm, the
 *   agreement, the imperative, the infinitive after another verb, and the word
 *   for what these verbs are. JARGON in routine-corpus.ts keeps all of it off
 *   every surface here.
 *
 * FOR a1.23 (La nourriture) AND a1.26 (La maison), BOTH UNBUILT:
 *
 *   `routines` HOLDS ROWS BOTH OF THEM WILL WANT. le café, le thé, le repas and
 *   le petit déjeuner are food; la douche, la baignoire, le lavabo and the
 *   cleaning verbs are house. This lesson cards three of them as OBJECTS IN A
 *   ROUTINE and teaches neither food nor rooms. They are in a different theme
 *   from `nourriture` and `maison`, so there is no `fr` collision to manage:
 *   each build cards its own theme's copy.
 *
 *   a1.26 SHOULD READ THE HEADER OF THIS FILE BEFORE ITS OWN BRIEF. `maison`
 *   holds 363 published rows, 363 in the seed, and 116 non-sentence rows at a1,
 *   which is the same shape as this lesson and means the same thing: it imports
 *   rather than authors.
 *
 * FOR WHOEVER TOUCHES `routines` NEXT:
 *
 *     fr.a1.routines.001-.184   published before this build, gaps at 121, 141,
 *                               149, 152, 162, 168 which are NOT backfilled
 *     fr.a1.routines.185        a1.25. One row: manger.
 *     fr.a1.routines.186+       FREE.
 *
 *   Re-run `pnpm corpus:probe --theme routines` rather than trusting that block.
 *
 * THREE THINGS THIS BUILD FOUND AND DID NOT FIX, because none is its to fix:
 *
 *   fr.a1.routines.009 IS A FRENCH GRAMMAR NOTE STORED AS A LEARNER SENTENCE
 *   and would be served as a flashcard or a dictée. The identical defect exists
 *   at fr.a1.maison.008. Two themes with the same shape of bad row suggests a
 *   pass rather than an accident, and somebody should measure it across the
 *   corpus. Both are in WITHDRAWN_IDS or out of scope here.
 *
 *   `le petit déjeuner` IS PUBLISHED WITH AND WITHOUT ITS HYPHEN in different
 *   themes. This lesson shows the unhyphenated form because that is what
 *   `routines` itself carries, and a learner who reaches both decks sees both.
 *
 *   THE fr.a1.* RESPELLINGS ARE SYSTEMATICALLY BROKEN ON NASALS AND THE
 *   fr.sons.* ONES ARE NOT, which a1.22 found in its own theme and this build
 *   found again in a different one. Three rows are repaired here, five are given
 *   a transcription they never had, and the rest of the theme is untouched.   */
export const ROUTINE_HANDOVER_NEXT_FREE_ID = 'fr.a1.routines.186';
