// a2.30.l1 « Le travail & les métiers » — the lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE PARCOURS SPINE, REBUILT WITHOUT `monologue`
// ══════════════════════════════════════════════════════════════════════════
//
// The design's spine was the learner's own sixty-second parcours answer, built
// in public across the acts and delivered twice into a PROPOSED new section
// type: a prompt, a thirty-second prep beat, an uncapped speech capture, a live
// checklist ticking off the four moves against a partial transcript, and
// rubric-anchored feedback through examGrader.
//
// NONE OF THAT IS FUNDED. Collation §3.3 merged `monologue` with a2.28's
// `openPrompt` into one component, cut the two pieces carrying the unknowns,
// and §3.2 ranked the merged component second and DEFERRED it. The band funds
// exactly one engineering item and it is `listening.hideLines` — which HAS
// since landed (MissionRich.tsx:1976-1988), so s12-listen sets it for real
// rather than in a follow-up.
//
// THE ARTEFACT SURVIVES. Only its delivery surface changes, and it changes into
// four shipped surfaces instead of one unbuilt one:
//
//   the move made in public   how it is delivered today
//   ───────────────────────   ─────────────────────────────────────────────────
//   build it move by move     acts 2 and 3 add one move each, and two
//                             cumulative groupDrills (s08, s13) join what
//                             exists so far. UNCHANGED, costs nothing.
//   deliver it whole          the four moves are turns 3 to 6 of the single
//                             scenario, CONSECUTIVE and uninterrupted. The
//                             interviewer's turns between them are a nod and
//                             nothing more. Each turn is one move, each sits
//                             inside seven seconds, each carries alts.
//   rehearse it               s21-deliver, practice over the four move-model
//                             items, carrying voiceflash.
//   check it                  s22-check, progressCheck, naming the four moves
//                             as four things the learner can now do.
//   write it                  s19-dictation (word mode) plus one quiz typeIn
//                             carrying two joined moves. Writing is the only
//                             surface that reliably sees a missing word.
//   keep it                   the reference sheet: `table` at layer 'deep'.
//
// WHAT IS LOST IS NAMED IN THE BUILD REPORT AND NOWHERE PAPERED OVER. See
// MONOLOGUE_LOSSES in the corpus file: continuous capture, the learner's own
// content, feedback, the prep beat, the live checklist, and any evidence of
// fluency under sustained load. NO CARD IN THIS LESSON PROMISES THE LEARNER A
// RECORDING, A COUNTDOWN, A SCORE OR FEEDBACK — FORBIDDEN_CLAIMS is asserted
// over every authored string.
//
// THE SWAP IS A ONE-SECTION DIFF LATER. s21-deliver holds exactly the four
// move-model items. When `openPrompt` is built (collation §3.2, deferred to
// v2), it replaces THAT ONE SECTION and the four-move checklist moves into it
// from s22-check. That is the seam; this comment is here so the next person
// does not have to rediscover it.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE FIVE FIELDS THAT DRAW NOTHING (41-DEAD-FIELDS-WARNING.md)
// ══════════════════════════════════════════════════════════════════════════
//
// a2.07 shipped, published in snapshot v49 at rollout 10, and passed 4,195
// tests with 33 BLANK LINES in it. `validateLesson` tolerates unknown keys and
// so does the publish path, so a field that is not in the type is carried into
// Postgres, into seed.json, into the OTA snapshot, and rendered by nobody.
// `pnpm -C ealch-admin typecheck` is the ONLY check that sees them.
//
//   * `sub` on a groupDrill ITEM draws nothing -> use `note`. (`sub` IS
//     legitimate on a cardDeck CARD. The two look identical in a diff.)
//   * `itemIds` on a cardDeck draws nothing -> release through `deckTranche`.
//   * `canDo`, `track`, `teaches` on the Lesson draw nothing -> `canDo` belongs
//     to the unit; drop `track`; use `grammarIntroduced` / `grammarAssumed`.
//
// Both class-level assertions from that file are in the test.

import type {
  Lesson, LessonAct, LessonSection, LessonDrill, ErrorTrigger, ReferenceSheet,
} from '../../../ealch-v2/src/content/schema.ts';
import { TRAVAIL_TERMS } from './travail-metiers-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
import {
  M, REFRAME, JOINED_ANSWER, ONE_SENTENCE_ANSWER,
  MOVE_1, MOVE_2, MOVE_3, MOVE_4,
  ZERO_ARTICLE_UNIT, A1_06_QUOTE, TIME_UNIT, REPAIR_UNIT, REPAIR_IDS,
  LADDER_UNIT, RUNG_1, RUNG_2, RUNG_3, LADDER_IDS,
  STUDY_UNIT, PRONOUN_UNIT, PLACE_UNIT,
  MOVE_MODEL_IDS, DICTEE_IDS, IMPORTED, ROWS,
} from './travail-metiers-corpus.ts';

/* ── SECTION IDS ─────────────────────────────────────────────────────────── */

const SCENE = 's01-scene';
const FOURMOVES = 's02-fourmoves';
const GOALS = 's03-goals';
const TWOANSWERS = 's04-twoanswers';
const ANCHOR = 's05-anchor';
const JOBWORDS = 's06-jobwords';
const DURATION = 's07-duration';
const BUILD2 = 's08-build2';
const DAILY = 's09-daily';
const WORKPLACE = 's10-workplace';
const FEM = 's11-fem';
const LISTEN = 's12-listen';
const BUILD3 = 's13-build3';
const HOOK = 's14-hook';
const TRAP = 's15-trap';
const ERRORS = 's16-errors';
const REGISTER = 's17-register';
const POSTING = 's18-posting';
const DICTATION = 's19-dictation';
const INTERVIEW = 's20-interview';
const DELIVER = 's21-deliver';
const CHECK = 's22-check';
const QUIZ = 's23-quiz';
const ROUNDUP = 's24-roundup';

const SHEET_ID = 'sheet.a2.30.parcours';

export const DELIVER_ID = DELIVER;
export const QUIZ_ID = QUIZ;
export const TRAP_ID = TRAP;
export const SCENE_ID = SCENE;
export const FOURMOVES_ID = FOURMOVES;
export const INTERVIEW_ID = INTERVIEW;

const FR = { lang: 'fr-FR' as const, mode: 'tts' as const, speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1. THE ANSWER THAT STOPPED AT ONE SENTENCE
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.2's A2 register of stakes, and it is NOT an error scene.
 *  Nobody is rude and nothing is wrong. The learner says four correct words,
 *  stops, and the other person waits. THE BREAK BEAT LANDS ON THE SILENCE, NOT
 *  ON A MISTAKE.
 *
 *  The article is deliberately absent from this scene. `Je suis un ingénieur.`
 *  belongs beside `Je suis ingénieur.` exactly ONCE, in the trap, credited to
 *  a1.06 — this is a re-test, not a lesson, and putting it here would make act
 *  1 a second run at the prerequisite (§13, §2.2).
 *
 *  DEVICE NOTE: every bubble ending in `!` or `?` is a tail-clip risk. A spaced
 *  exclamation mark has made a French line lose its last word while the gloss
 *  still translated it. The three question-final bubbles here are short by
 *  design for that reason. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration',
    text: 'A small meeting room in Lyon. Two people, one table, and a folder nobody has opened yet.',
    size: 'md',
    audio: FR,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'The interviewer',
    fr: 'Alors, parlez-moi de votre parcours.',
    en: 'So, tell me about your background.',
    respell: '[a-LOR par-lay-MWAH duh vo-truh par-KOOR]',
    stage: 'She sits back. This is the easy one.',
    size: 'md',
    audio: FR,
  },
  {
    kind: 'bubble',
    from: 'you',
    fr: ONE_SENTENCE_ANSWER,
    en: 'I am an engineer.',
    respell: '[zhuh swee-zaⁿ-zhay-NYUR]',
    stage: 'Correct. Every word of it.',
    size: 'md',
    audio: FR,
  },
  {
    kind: 'narration',
    text: 'And then nothing. She waits. You have finished and she does not know that yet.',
    size: 'md',
    audio: FR,
  },
  {
    kind: 'choice',
    prompt: 'Four seconds have gone. What do you do?',
    size: 'lg',
    options: [
      {
        fr: 'Wait for the next question',
        en: 'Wait for the next question',
        outcome: 'breaks',
      },
      {
        fr: 'Keep going, without being asked',
        en: 'Keep going, without being asked',
        outcome: 'works',
      },
    ],
    followUp: {
      works: 'Nobody asked you a second question. That is the point: you take it.',
      breaks: 'She will ask another one. It will be smaller, and so will the next.',
    },
  },
  {
    kind: 'break',
    heading: 'The silence was not a mistake',
    // 34 words. The break body sits inside the 24-40 band the brief sets, and
    // well inside the 45-word core cap.
    body: 'You said something true and correct, and then you stopped. She was waiting for a second sentence because in this room an answer is four of them, not one. Nothing you said was wrong.',
    wrong: {
      fr: ONE_SENTENCE_ANSWER,
      ipa: '/ʒə sɥi ɛ̃.ʒe.njœʁ/',
      respell: '[zhuh swee-zaⁿ-zhay-NYUR]',
      en: 'I am an engineer.',
    },
    right: {
      fr: 'Je suis ingénieur. Je travaille là-bas depuis six ans.',
      ipa: '/ʒə sɥi ɛ̃.ʒe.njœʁ ʒə tʁa.vaj la.ba də.pɥi si zɑ̃/',
      respell: '[zhuh swee-zaⁿ-zhay-NYUR zhuh trah-VAHY lah-BAH duh-pwee see ZAHⁿ]',
      en: 'I am an engineer. I have worked there for six years.',
    },
    coach: 'Two sentences and the room changes. There are two more after that.',
    size: 'lg',
    audio: FR,
  },
  {
    kind: 'resolve',
    text: 'She writes nothing down. She asks a bigger question. That is what you were after.',
    size: 'md',
  },
];

const S_SCENE: LessonSection = {
  type: 'scene', id: SCENE, render: 'screens', layer: 'core',
  title: 'The four words that ended the answer',
  setting: { place: 'A meeting room', city: 'Lyon', time: 'Tuesday, 10am', ambience: 'office-quiet' },
  beats: SCENE_BEATS,
  closing: { text: 'One sentence is where the answer starts. This lesson is the other three.', size: 'md' },
  audio: FR,
  terms: ['move', 'anchor'],
};

/** THE REQUIRED LAYOUT (§13, first bullet): THE FOUR MOVES ON ONE SCREEN, IN
 *  ORDER, WITH THE JOINED ANSWER UNDER THEM. It is the Owns, and splitting it
 *  across sections makes it four small vocabulary sections.
 *
 *  One `cardDeck`, five cards: one per move in order, then the fifth showing
 *  them joined. The test asserts the order and the presence of the join.
 *
 *  NO `itemIds` HERE. A cardDeck does not read it; the rows are released
 *  through DECK_TRANCHE. */
const S_FOURMOVES: LessonSection = {
  type: 'cardDeck', id: FOURMOVES, render: 'deck', layer: 'core', size: 'lg',
  title: 'Four moves, and the fourth is the one nobody teaches',
  hint: 'Swipe. The last card is all four joined.',
  cards: [
    {
      label: `Move 1 · ${MOVE_1}`,
      head: 'What you are',
      fr: 'Je suis ingénieur.',
      sub: 'zhuh swee-zaⁿ-zhay-NYUR',
      body: `${Cap(unitRef(ZERO_ARTICLE_UNIT))} already taught you how to say this one. Here it is doing a job: it opens, and it is finished in two seconds.`,
    },
    {
      label: `Move 2 · ${MOVE_2}`,
      head: 'For how long',
      fr: 'Je travaille là-bas depuis six ans.',
      sub: 'zhuh trah-VAHY lah-BAH duh-pwee see ZAHⁿ',
      body: `${Cap(unitRef(TIME_UNIT))} owns depuis. It is here because time is what turns a label into a history.`,
    },
    {
      label: `Move 3 · ${MOVE_3}`,
      head: 'What that means daily',
      fr: "Je m'occupe des dossiers clients.",
      sub: 'zhuh mo-KÜP day do-SYAY klee-YAHⁿ',
      body: 'One concrete thing you handle. Not the title again in longer words. This is the half that lets somebody picture your day.',
    },
    {
      label: `Move 4 · ${MOVE_4}`,
      head: 'A hook back to them',
      fr: 'Et vous, vous faites quoi ?',
      sub: 'ay VOO voo feht KWAH',
      body: 'Four words, and the other person is now talking. Without this you made a statement. With it you started a conversation.',
    },
    {
      label: 'All four',
      head: 'What the whole answer sounds like',
      fr: JOINED_ANSWER,
      sub: 'Four moves, in order, about twelve seconds',
      body: 'Nobody asked four questions. You answered as though they had, and that is the whole trick.',
    },
  ],
  audio: FR,
  say: REFRAME,
  terms: ['move', 'anchor', 'handback'],
};

const S_GOALS: LessonSection = {
  type: 'goals', id: GOALS, layer: 'core',
  title: 'By the end of this lesson',
  goals: [
    { t: 'Open with the job, and keep going', s: 'Move 1 stops being the whole answer' },
    { t: 'Say how long, without being asked', s: 'Move 2, using depuis rather than explaining it' },
    { t: 'Describe one real part of the day', s: 'Move 3, which is what a workplace actually is' },
    { t: 'Hand the question back', s: 'Move 4, and the conversation runs itself' },
  ],
  audio: FR,
};

/** THE REQUIRED LAYOUT (§13, second bullet): THE ONE-SENTENCE ANSWER AND THE
 *  FOUR-MOVE ANSWER SIDE BY SIDE, WITH WHAT MOVED NAMED.
 *
 *  `tapTable` rather than `table`: a `table` at layer 'core' is a density
 *  failure (`table-in-core`, density.logic.ts:424) and the full grid lives in
 *  the reference sheet at layer 'deep'. a2.26 measured the in-flow cap at SIX
 *  rows on a Pixel 6 and a2.16 measured a header glyph budget, so this runs
 *  three rows and three short headers. */
const S_TWOANSWERS: LessonSection = {
  type: 'tapTable', id: TWOANSWERS, layer: 'core',
  title: 'The same job, said twice',
  cols: ['What you say', 'Moves', 'What it does'],
  rows: [
    {
      cells: ['Je suis ingénieur.', '1', 'Names it, then stops'],
      say: ONE_SENTENCE_ANSWER,
      detail: {
        title: 'Correct, and it ends the turn',
        body: `Nothing is wrong with this sentence. ${Cap(unitRef(ZERO_ARTICLE_UNIT))} taught you to build it. It is simply finished, and the other person now has to think of a new question. Most will think of a smaller one.`,
        say: ONE_SENTENCE_ANSWER,
      },
    },
    {
      cells: ['... depuis six ans.', '1 + 2', 'Adds a history'],
      say: 'Je suis ingénieur. Je travaille là-bas depuis six ans.',
      detail: {
        title: 'Two moves, and it already sounds different',
        body: `Time is the cheapest thing you can add. ${Cap(unitRef(TIME_UNIT))} gave you depuis and this lesson only puts it in position two.`,
        say: 'Je travaille là-bas depuis six ans.',
      },
    },
    {
      cells: ['... et vous ?', 'All four', 'Hands the turn back'],
      say: JOINED_ANSWER,
      detail: {
        title: 'And now they are answering you',
        body: 'The fourth move costs four words and changes who is doing the work. It is the difference between being interviewed and having a conversation.',
        say: 'Et vous, vous faites quoi ?',
      },
    },
  ],
  audio: FR,
  say: REFRAME,
  terms: ['move', 'handback'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2. MOVES 1 AND 2 — QUOTED, AND NOT TAUGHT
 *
 *  a1.06.l1 has 26 sections and teaches the zero article in SIX of them. 37 of
 *  its 45 item ids are `metiers` rows. The rule is not available to be this
 *  lesson's Owns and act 2 is NOT allowed to be a second run at it.
 *
 *  So: every note here NAMES a1.06, one of them QUOTES its string verbatim,
 *  and NOT ONE OF THEM EXPLAINS WHY THE ARTICLE IS ABSENT. The test scopes
 *  that assertion to teaching surfaces — naming the rule and testing it are
 *  both allowed, explaining it is not.
 * ══════════════════════════════════════════════════════════════════════════ */

const S_ANCHOR: LessonSection = {
  type: 'examples', id: ANCHOR, layer: 'core',
  title: 'Move 1: the anchor',
  examples: [
    {
      fr: 'Je suis ingénieur.',
      en: 'I am an engineer.',
      // a1.06.l1 s10-jobs, example 1, `note`, lifted VERBATIM. The test asserts
      // the exact string and a paraphrase must go red.
      note: `${A1_06_QUOTE} ${Cap(unitRef(ZERO_ARTICLE_UNIT))} taught it. Here it is move 1.`,
    },
    {
      fr: 'Je suis infirmière.',
      en: 'I am a nurse.',
      note: `Same shape, ${unitRef(ZERO_ARTICLE_UNIT)}, and the word itself changes for a woman. Move 3 comes back to that.`,
    },
    {
      fr: 'Je suis professeur.',
      en: 'I am a teacher.',
      note: `${Cap(unitRef(ZERO_ARTICLE_UNIT))} again. Two seconds, and you are not finished.`,
    },
    {
      fr: 'Je suis cuisinier.',
      en: 'I am a cook.',
      note: `${Cap(unitRef(ZERO_ARTICLE_UNIT))}. Notice how fast it is over. That speed is the problem this lesson solves.`,
    },
    {
      fr: 'Je suis comptable.',
      en: 'I am an accountant.',
      note: `${Cap(unitRef(ZERO_ARTICLE_UNIT))}. Five jobs, five anchors, and not one of them is an answer yet.`,
    },
  ],
  audio: FR,
  terms: ['anchor', 'move'],
};

/** The learner finds their OWN job title. Every word is an imported `metiers`
 *  itemId: this is where the 179 existing single-word rows get their first real
 *  use rather than a second authoring.
 *
 *  ITEMS USE `note`, NEVER `sub`. `sub` on a groupDrill item draws NOTHING —
 *  a2.07 shipped 33 blank lines that way and only the admin typecheck saw it. */
const S_JOBWORDS: LessonSection = {
  type: 'groupDrill', id: JOBWORDS, layer: 'core', size: 'lg',
  title: 'Find yours',
  groups: [
    {
      label: 'Santé',
      items: [
        { fr: 'un médecin', itemId: 'fr.a1.metiers.001', note: 'And a woman is une médecin. Only the article moves.' },
        { fr: 'un infirmier', itemId: 'fr.a1.metiers.002', note: 'Une infirmière for a woman.' },
        { fr: 'un pharmacien', itemId: 'fr.a1.metiers.020', note: 'Une pharmacienne.' },
        { fr: 'un dentiste', itemId: 'fr.a1.metiers.021', note: 'Same word either way.' },
        { fr: 'un chirurgien', itemId: 'fr.a1.metiers.052', note: 'Une chirurgienne.' },
      ],
    },
    {
      label: 'Éducation',
      items: [
        { fr: 'un professeur', itemId: 'fr.a1.metiers.005', note: 'Une professeure, and the corpus already had it.' },
        { fr: 'un bibliothécaire', itemId: 'fr.a1.metiers.054', note: 'Same word either way.' },
        { fr: 'le directeur', itemId: 'fr.a1.metiers.135', note: 'La directrice.' },
      ],
    },
    {
      label: 'Bâtiment',
      items: [
        { fr: 'un électricien', itemId: 'fr.a1.metiers.028', note: 'Une électricienne.' },
        // NOT "une plombière is rare, most say une plombier". That was authored
        // in the first pass and it CONTRADICTS THE RULE THIS UNIT OWNS FOR THE
        // BAND: §5 rule 3 sends -ier to -ière, and s11-fem's closing card tells
        // the learner to build it the ordinary way when the corpus has nothing.
        // A hedge here teaches the opposite of the card two acts later, on the
        // one point seven other units are bound to.
        { fr: 'un plombier', itemId: 'fr.a1.metiers.029', note: 'Une plombière.' },
        { fr: 'un maçon', itemId: 'fr.a1.metiers.030', note: 'Une maçonne.' },
        { fr: 'un jardinier', itemId: 'fr.a1.metiers.026', note: 'Une jardinière, which is also a window box.' },
      ],
    },
    {
      label: 'Bureau',
      items: [
        { fr: 'un ingénieur', itemId: 'fr.a1.metiers.034', note: 'Une ingénieure.' },
        { fr: 'un architecte', itemId: 'fr.a1.metiers.035', note: 'Same word either way.' },
        { fr: 'un informaticien', itemId: 'fr.a1.metiers.044', note: 'Une informaticienne.' },
        { fr: 'un comptable', itemId: 'fr.a1.metiers.045', note: 'Same word either way.' },
      ],
    },
    {
      label: 'Service',
      items: [
        { fr: 'un vendeur', itemId: 'fr.a1.metiers.004', note: 'Une vendeuse.' },
        { fr: 'un cuisinier', itemId: 'fr.a1.metiers.006', note: 'Une cuisinière, which is also a stove.' },
        { fr: 'un serveur', itemId: 'fr.a1.metiers.007', note: 'Une serveuse.' },
        { fr: 'un coiffeur', itemId: 'fr.a1.metiers.022', note: 'Une coiffeuse, which is also a dressing table.' },
        { fr: 'un caissier', itemId: 'fr.a1.metiers.047', note: 'Une caissière.' },
      ],
      check: {
        q: 'You are a woman and you cut hair. What do you say?',
        opts: ['Je suis un coiffeur.', 'Je suis coiffeuse.', 'Je suis la coiffeuse.'],
        correct: 1,
        why: 'The word changes for a woman and the gap stays a gap.',
      },
    },
  ],
  audio: FR,
  terms: ['pair', 'anchor'],
};

const S_DURATION: LessonSection = {
  type: 'examples', id: DURATION, layer: 'core',
  title: 'Move 2: how long',
  examples: [
    {
      fr: 'Je travaille là-bas depuis six ans.',
      en: 'I have worked there for six years.',
      note: `${Cap(unitRef(TIME_UNIT))} gave you depuis. This lesson only puts it in second position.`,
    },
    {
      fr: 'Je fais ce métier depuis trois ans.',
      en: 'I have done this job for three years.',
      note: `The job, then the clock. ${Cap(unitRef(TIME_UNIT))} owns the word.`,
    },
    {
      fr: 'Depuis combien de temps vous travaillez là-bas ?',
      en: 'How long have you been working there?',
      note: 'THIS is new, and it is theirs, not yours. It is what the interviewer asks.',
    },
    {
      fr: 'Ça fait combien de temps ?',
      en: 'How long has it been?',
      note: 'The shorter one, and the one you will actually hear at a party.',
    },
    {
      fr: 'Je suis dans cette entreprise depuis deux ans.',
      en: 'I have been at this company for two years.',
      note: 'Two moves joined, and you have not been asked a second question.',
    },
  ],
  audio: FR,
  terms: ['move'],
};

/** Doctrine §B.1, the eleventh form: PRODUCE moves 1 and 2 joined, for jobs the
 *  lesson has not shown. The check gates the act. */
const S_BUILD2: LessonSection = {
  type: 'groupDrill', id: BUILD2, layer: 'core', size: 'lg',
  title: 'Two moves, joined',
  groups: [
    {
      label: 'Say both, out loud, for a job you have not seen here',
      items: [
        { fr: 'Je suis boulanger. Je fais ça depuis quatre ans.', en: 'I am a baker. I have done that for four years.', note: 'Anchor, then clock. No pause between them.' },
        { fr: 'Je suis vendeuse. Je travaille là-bas depuis un an.', en: 'I am a salesperson. I have worked there for a year.', note: 'A woman, and the word changed. The gap did not.' },
        { fr: 'Je suis mécanicien. Je fais ce métier depuis dix ans.', en: 'I am a mechanic. I have done this job for ten years.', note: 'Ten years is a history. Say it in the present.' },
        { fr: 'Je suis architecte. Je suis dans cette entreprise depuis deux ans.', en: 'I am an architect. I have been at this company for two years.', note: 'Same word for a man or a woman.' },
      ],
      check: {
        q: 'Which one is finished?',
        opts: [
          'Je suis pharmacien.',
          'Je suis pharmacien. Je fais ça depuis six ans.',
          'Pharmacien, six ans.',
        ],
        correct: 1,
        why: 'Two moves, both full sentences. The third is a note to yourself, not an answer.',
      },
    },
  ],
  audio: FR,
  terms: ['move', 'anchor'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3. MOVE 3 — THE OWNS, AND THE HEAVIEST ACT
 * ══════════════════════════════════════════════════════════════════════════ */

const S_DAILY: LessonSection = {
  type: 'cardDeck', id: DAILY, render: 'deck', layer: 'core', size: 'lg',
  title: 'The five verbs that carry a workday',
  hint: 'Swipe. Every one of these is grammar you already have.',
  cards: [
    {
      label: 'Handle',
      head: "s'occuper de",
      fr: "Je m'occupe des dossiers clients.",
      sub: 'zhuh mo-KÜP day do-SYAY klee-YAHⁿ',
      body: 'The workhorse. It covers anything you are the person for, from customers to a machine to the post.',
    },
    {
      label: 'Manage',
      head: 'gérer',
      fr: 'Je gère une petite équipe.',
      sub: 'zhuh ZHEHR ün puh-TEET ay-KEEP',
      body: "Use it for people, budgets and orders. It is heavier than s'occuper de and it says you decide.",
    },
    {
      label: 'Be answerable',
      head: 'être responsable de',
      fr: 'Je suis responsable de la sécurité.',
      sub: 'zhuh swee ray-spohⁿ-SAHBL duh lah say-kü-ree-TAY',
      body: 'The one an interviewer listens for. It names the thing that is your fault if it goes wrong.',
    },
    {
      label: 'Work with',
      head: 'travailler avec',
      fr: 'Je travaille avec des enfants tous les jours.',
      sub: 'zhuh trah-VAHY ah-vek day-zahⁿ-FAHⁿ too lay ZHOOR',
      body: 'Who is in the room. It is the fastest way to make a job sound like a place rather than a title.',
    },
    {
      label: 'Help',
      head: 'aider',
      fr: 'Il aide le chef en cuisine.',
      sub: 'ee-LED luh SHEF ahⁿ kwee-ZEEN',
      body: 'The plain one, for a job where you are not yet the person who decides. Nobody marks you down for it.',
    },
  ],
  audio: FR,
  terms: ['detail', 'move'],
};

/** The "describe a workplace" half of the canDo. The prepositions are a2.04's
 *  and are USED here, never taught. */
const S_WORKPLACE: LessonSection = {
  type: 'groupDrill', id: WORKPLACE, layer: 'core', size: 'lg',
  title: 'Where, and with whom',
  groups: [
    {
      label: 'Where you are',
      items: [
        { fr: 'dans un bureau', itemId: M(82), note: `The preposition is ${unitRef(PLACE_UNIT, 'a2')}'s. Take the whole phrase.` },
        { fr: "à l'hôpital", itemId: M(83), note: 'Not dans. This one you learn whole.' },
        { fr: 'sur un chantier', itemId: M(84), note: 'Sur, because a building site is a surface.' },
        { fr: 'derrière un comptoir', itemId: M(87), note: 'Shops, bars, reception desks.' },
      ],
    },
    {
      label: 'Who is with you',
      items: [
        { fr: 'en équipe', itemId: M(85), note: 'No article. The whole phrase is the answer.' },
        { fr: 'avec des clients', itemId: M(86), note: 'Swap clients for enfants, patients, collègues.' },
        { fr: 'une équipe', itemId: 'fr.a1.metiers.131', note: 'The noun on its own, which you already had.' },
        { fr: 'un collègue', itemId: 'fr.a1.metiers.129', note: 'Une collègue for a woman. Only the article moves.' },
      ],
      check: {
        q: 'You work in a factory, on the floor. Which one?',
        opts: ['dans une usine', 'à une usine', 'sur une usine'],
        correct: 0,
        why: 'Dans for an enclosed place. Sur was for the building site, which has no roof yet.',
      },
    },
  ],
  audio: FR,
  terms: ['detail'],
};

/** FEMINISATION. THIS UNIT OWNS THE RULE FOR THE BAND (collation C4).
 *
 *  THE REQUIRED LAYOUT (§13, third bullet): A MASCULINE AND ITS FEMININE ON ONE
 *  CARD, NEVER ON TWO.
 *
 *  Eight of these ten pairs are satisfied by IMPORTS, because rule 1 is import
 *  before you mint and every import is an a1.03 figure this build did not have
 *  to move. The last card is rule 4's trap, and it is worth a card because
 *  `la médecine` is what a learner PRODUCES from the pattern. */
const S_FEM: LessonSection = {
  type: 'cardDeck', id: FEM, render: 'deck', layer: 'core', size: 'lg',
  title: 'The same job, about a woman',
  hint: 'Swipe. Both forms are on each card.',
  cards: [
    {
      label: 'Add -e',
      head: 'un avocat · une avocate',
      fr: 'Je suis avocate.',
      sub: 'zhuh swee-za-vo-KAT',
      body: `The commonest shape, and the course already had this pair. You hear the t in the second one and not in the first. The gap after suis is ${unitRef(ZERO_ARTICLE_UNIT, 'a2')}'s and it does not move.`,
    },
    {
      label: 'Add -e',
      head: 'un employé · une employée',
      fr: 'Je suis employée dans une banque.',
      sub: 'zhuh swee-zahⁿ-plwah-YAY dahⁿ-zün BAHⁿK',
      body: 'Written differently, said the same. Nobody hears the difference and you still write it.',
    },
    {
      label: '-ien becomes -ienne',
      head: 'un pharmacien · une pharmacienne',
      fr: 'Je suis pharmacienne.',
      sub: 'zhuh swee far-ma-SYENN',
      body: 'Here you do hear it. The nasal opens up and an n arrives at the end.',
    },
    {
      label: '-ier becomes -ière',
      head: 'un infirmier · une infirmière',
      fr: 'Je suis infirmière.',
      sub: 'zhuh swee-zaⁿ-feer-MYEHR',
      body: 'The ending opens from ee-ay to ee-ehr. Same again for caissier and caissière.',
    },
    {
      label: '-eur becomes -euse',
      head: 'un vendeur · une vendeuse',
      fr: 'Je suis vendeuse.',
      sub: 'zhuh swee vahⁿ-DUHZ',
      body: 'Works when the word came from a verb you can still see: vendre, coiffer, servir.',
    },
    {
      label: '-teur becomes -trice',
      head: 'un agriculteur · une agricultrice',
      fr: 'Je suis agricultrice.',
      sub: 'zhuh swee-za-gree-kül-TREES',
      body: 'The other big one. Directeur and directrice, traducteur and traductrice, acteur and actrice.',
    },
    {
      label: 'Just the -e',
      head: 'un ingénieur · une ingénieure',
      fr: 'Je suis ingénieure.',
      sub: 'zhuh swee-zaⁿ-zhay-NYUR',
      body: 'Said exactly the same. The written e is the whole change, and professeure works the same way.',
    },
    {
      label: 'Nothing moves',
      head: 'un médecin · une médecin',
      fr: 'Je suis médecin.',
      sub: 'zhuh swee mayd-SAⁿ',
      body: 'Some words have no second form. Only the article in front of them changes, and about yourself you say neither.',
    },
    {
      label: 'The trap',
      head: 'NOT la médecine',
      fr: 'une médecin',
      sub: 'la médecine is the subject you study',
      body: 'La médecine is a field, not a doctor. La physique is not a physicist and la politique is not a politician either.',
    },
    {
      label: 'The rule',
      head: 'Which form do I use?',
      fr: 'Use the one the language already has.',
      sub: 'And if it has none, build it the ordinary way',
      body: 'If a form already exists, that is the one. If it does not, add the ending you just saw. If the word has none, only the article moves.',
    },
  ],
  audio: FR,
  terms: ['pair', 'anchor'],
};

/** THE BAND'S ONE FUNDED ENGINEERING ITEM, AND IT HAS LANDED.
 *
 *  `hideLines` masks the line text, keeps the play dot and the box, and reveals
 *  after the learner has answered every question — not gated on getting them
 *  right (MissionRich.tsx:1988). Without it ListeningView prints both `fr` AND
 *  `en` beside the play dot, so every listening section in the product is
 *  answerable by READING (collation §1.4).
 *
 *  THE DIFFICULTY IS IN THE AUDIO AND NEVER IN WHETHER THE TEXT IS VISIBLE, so
 *  this section works either way.
 *
 *  THE LINES STAND ALONE, WITHOUT THIS LESSON'S FRAMING. Collation §7.2: this
 *  band's listening sections are the only genuinely audio-only reception
 *  content in the product, and a2.35 (Bilan A2) will lift them into a
 *  mixed-situation CO set. That costs nothing now and is expensive to retrofit,
 *  so no line here carries a pronoun whose referent is only in our framing.
 *
 *  NOT AUTHORED, because they are read by NO renderer (collation §3.5):
 *  modelPlayback, wrongThenRight, perSentenceReplay, scoreOn, autoplay,
 *  audio.maxPlays. The seed already authors 31 of them. There is also no speed
 *  control and no distractor field here — scene beats carry speeds, this does
 *  not. */
const S_LISTEN: LessonSection = {
  type: 'listening', id: LISTEN, layer: 'core', hideLines: true,
  title: 'The follow-up you did not expect',
  lines: [
    { fr: 'Parlez-moi de votre parcours.', en: 'Tell me about your background.' },
    { fr: 'Depuis combien de temps vous travaillez là-bas ?', en: 'How long have you been working there?' },
    { fr: 'Vous vous occupez de quoi, exactement ?', en: 'What do you handle, exactly?' },
    { fr: 'Vous travaillez avec combien de personnes ?', en: 'How many people do you work with?' },
    { fr: 'Vous préférez travailler en équipe ou de votre côté ?', en: 'Do you prefer working in a team or on your own?' },
    { fr: 'Vous avez des questions pour moi ?', en: 'Do you have any questions for me?' },
  ],
  questions: [
    {
      q: 'The second question is asking about',
      opts: ['how long', 'how many people', 'what you handle'],
      correct: 0,
      why: 'Depuis combien de temps is a length of time. Combien de personnes would be the number.',
    },
    {
      q: 'Two of these ask about the same thing. Which two?',
      opts: ['the first and the last', 'the third and the fourth', 'the second and the sixth'],
      correct: 1,
      why: 'Both the third and the fourth are asking you to describe the daily job, one by task and one by people.',
    },
    {
      q: 'You did not catch the fifth one. What do you say?',
      opts: [
        "Vous pouvez répéter, s'il vous plaît ?",
        'Je ne sais pas.',
        'Oui.',
      ],
      correct: 0,
      why: `${Cap(unitRef(REPAIR_UNIT))} authored six ways to say this, ordered by what each one costs you. This is the second cheapest.`,
    },
    {
      q: 'The last line is the interviewer doing which move?',
      opts: ['the anchor', 'the detail', 'the hand-back'],
      correct: 2,
      why: 'She is giving the turn back to you. That is move 4, and she does it to you before you do it to her.',
    },
  ],
  audio: FR,
  terms: ['repairMove', 'handback'],
};

const S_BUILD3: LessonSection = {
  type: 'groupDrill', id: BUILD3, layer: 'core', size: 'lg',
  title: 'Three moves, joined',
  groups: [
    {
      label: 'Anchor, clock, detail. Out loud, no pauses.',
      items: [
        { fr: "Je suis infirmière. Je travaille à l'hôpital depuis cinq ans. Je m'occupe des urgences.", en: 'I am a nurse. I have worked at the hospital for five years. I handle emergencies.', note: `Three sentences, about nine seconds. The gap after suis is still ${unitRef(ZERO_ARTICLE_UNIT, 'a2')}'s.` },
        { fr: 'Je suis électricien. Je fais ça depuis huit ans. Je travaille sur un chantier.', en: 'I am an electrician. I have done that for eight years. I work on a building site.', note: 'The third move can be a place instead of a task.' },
        { fr: "Je suis vendeur. Je suis dans ce magasin depuis un an. Je m'occupe de la caisse.", en: 'I am a salesperson. I have been in this shop for a year. I handle the till.', note: 'One year is still a history. Say it.' },
        { fr: 'Je suis traductrice. Je fais ce métier depuis six ans. Je travaille avec des clients étrangers.', en: 'I am a translator. I have done this job for six years. I work with foreign clients.', note: 'And the fourth move is still missing.' },
      ],
      check: {
        q: 'Three moves are done. What is left?',
        opts: ['a longer detail', 'a question back to them', 'the job title again'],
        correct: 1,
        why: 'Move 4. Without it you have finished talking and they have to start again.',
      },
    },
  ],
  audio: FR,
  terms: ['detail', 'move'],
};

const S_HOOK: LessonSection = {
  type: 'examples', id: HOOK, layer: 'core',
  title: 'Move 4: the hand-back',
  examples: [
    {
      fr: 'Et vous, vous faites quoi ?',
      en: 'And you, what do you do?',
      note: 'Four words. The course had never published this sentence, and it is the one that changes the room.',
    },
    {
      fr: 'Et vous, vous faites quoi dans la vie ?',
      en: 'And you, what do you do for a living?',
      note: 'Dans la vie is what people actually add. It softens it into small talk.',
    },
    {
      fr: "Et vous, c'est quoi votre métier ?",
      en: 'And you, what is your job?',
      note: 'Slightly more direct. Fine at a party, fine with somebody your own age.',
    },
    {
      fr: 'Et vous, vous travaillez dans quoi ?',
      en: 'And you, what field do you work in?',
      note: 'Asks for the sector rather than the title, which is easier for them to answer.',
    },
    {
      fr: 'Vous avez des questions pour moi ?',
      en: 'Do you have any questions for me?',
      note: 'The interviewer doing it to you. Say yes. Always say yes.',
    },
  ],
  audio: FR,
  terms: ['handback', 'move'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4. THE TRAPS
 * ══════════════════════════════════════════════════════════════════════════ */

/** STEPPED, NOT STACKED. The stacked shape hides the gate, the audio and the
 *  sub-mission number. `size` comes OFF a stepped trapDrill.
 *
 *  Three traps: THE ARTICLE (a1.06's, re-tested here and not re-taught, and
 *  this is the ONE place `Je suis un ingénieur.` sits beside `Je suis
 *  ingénieur.`), DEPUIS WITH A PAST TENSE (a2.18 owns the rule; we own the
 *  sentence in which the learner produces the error), and STOPPING AT ONE
 *  SENTENCE, which is not a grammar error at all and is why it is tested by
 *  contrast.
 *
 *  THE AUDIO STEP plays each card's `fr`, so `recordingId` must name a take
 *  containing those lines — see LESSON.audio.recordings. */
const S_TRAP: LessonSection = {
  type: 'trapDrill', id: TRAP, layer: 'core', swipe: true,
  title: 'Three ways this comes apart',
  rule: {
    title: 'Two of these are grammar. The third is not.',
    // 41 words. validateDensity fires at 46.
    body: `The article and the tense are things ${unitRef(ZERO_ARTICLE_UNIT)} and ${unitRef(TIME_UNIT)} already taught you, and they are tested here rather than explained again. The third trap is not a mistake in any sentence. It is a sentence that stopped.`,
  },
  cards: [
    {
      promptLabel: 'I am an engineer',
      promptSound: 'Je suis un ingénieur.',
      fr: 'Je suis ingénieur.',
      ipa: '/ʒə sɥi ɛ̃.ʒe.njœʁ/',
      tip: `${Cap(unitRef(ZERO_ARTICLE_UNIT))} taught this. The gap is the grammar.`,
    },
    {
      promptLabel: 'I am a nurse',
      promptSound: 'Je suis une infirmière.',
      fr: 'Je suis infirmière.',
      ipa: '/ʒə sɥi ɛ̃.fiʁ.mjɛʁ/',
      tip: `Same gap for a woman. ${Cap(unitRef(ZERO_ARTICLE_UNIT))}.`,
    },
    {
      promptLabel: 'I have worked there for six years',
      promptSound: "J'ai travaillé là-bas depuis six ans.",
      fr: 'Je travaille là-bas depuis six ans.',
      ipa: '/ʒə tʁa.vaj la.ba də.pɥi si zɑ̃/',
      tip: `${Cap(unitRef(TIME_UNIT))} owns this one. It is still going, so it is not finished.`,
    },
    {
      promptLabel: 'I have been here for two years',
      promptSound: "J'ai été ici depuis deux ans.",
      fr: 'Je suis ici depuis deux ans.',
      ipa: '/ʒə sɥi i.si də.pɥi dø zɑ̃/',
      tip: `${Cap(unitRef(TIME_UNIT))} again. Same word, same rule.`,
    },
    {
      promptLabel: 'So, tell me about your background',
      promptSound: 'Je suis ingénieur.',
      fr: 'Je suis ingénieur. Je travaille là-bas depuis six ans.',
      ipa: '/ʒə sɥi ɛ̃.ʒe.njœʁ ʒə tʁa.vaj la.ba də.pɥi si zɑ̃/',
      tip: 'Not wrong. Just finished too early, and the room notices.',
    },
  ],
  drill: [
    {
      promptSay: 'Je suis un ingénieur.',
      opts: ['Je suis ingénieur.', 'Je suis un ingénieur.', "Je suis l'ingénieur."],
      correct: 0,
    },
    {
      promptSay: "J'ai travaillé là-bas depuis six ans.",
      opts: ["J'ai travaillé là-bas depuis six ans.", 'Je travaille là-bas depuis six ans.', 'Je travaillais là-bas depuis six ans.'],
      correct: 1,
    },
    {
      promptSay: 'Je suis une infirmière.',
      opts: ['Je suis la infirmière.', 'Je suis une infirmière.', 'Je suis infirmière.'],
      correct: 2,
    },
    {
      promptSay: 'Alors, parlez-moi de votre parcours.',
      opts: ['Je suis ingénieur. Je travaille là-bas depuis six ans.', 'Je suis ingénieur.', 'Ingénieur.'],
      correct: 0,
    },
    {
      promptSay: "J'ai été ici depuis deux ans.",
      opts: ["J'ai été ici depuis deux ans.", "J'étais ici depuis deux ans.", 'Je suis ici depuis deux ans.'],
      correct: 2,
    },
  ],
  steps: [
    { label: 'The rule', kind: 'rule', title: 'Two are grammar, one is not' },
    { label: 'The five traps', kind: 'cards', title: 'What English hands you' },
    { label: 'Hear them', kind: 'audio', title: 'Wrong and right, side by side' },
    { label: 'Now you pick', kind: 'drill', title: 'Five in a row', gate: true },
  ],
  audio: FR,
  say: REFRAME,
  terms: ['anchor', 'move'],
};

/** `commonErrors` MUST set `swipe`, or it falls through the shared fallthrough
 *  and DRAWS NOTHING. Two blank missions have shipped from exactly this
 *  (sons.08 mission 22, a1.01 mission 5). `size: 'lg'`, one error per screen.
 *
 *  NOTE THE SCOPE RULE: no `why` here EXPLAINS why the article is absent. The
 *  first card names a1.06 and states that the gap is the grammar, which is a
 *  quotation and a re-test. It does not teach the rule. */
const S_ERRORS: LessonSection = {
  type: 'commonErrors', id: ERRORS, layer: 'core', swipe: true, size: 'lg',
  title: 'Five ways the answer goes wrong',
  errors: [
    {
      wrong: 'Je suis un ingénieur.',
      right: 'Je suis ingénieur.',
      why: `${Cap(unitRef(ZERO_ARTICLE_UNIT))} taught this and it is being re-tested rather than re-explained. English needs the article and French does not, and that pull does not go away with practice.`,
    },
    {
      wrong: "J'ai travaillé là-bas depuis six ans.",
      right: 'Je travaille là-bas depuis six ans.',
      why: `${Cap(unitRef(TIME_UNIT))} owns this rule. The sentence you produce under pressure is the past one, because in English it is a past one.`,
    },
    {
      wrong: 'Je suis ingénieur.',
      right: "Je suis ingénieur. Je travaille là-bas depuis six ans. Je m'occupe des dossiers clients.",
      why: 'Only wrong as a whole answer. One sentence is the anchor and the other person is still waiting for the rest of it.',
    },
    {
      wrong: 'Je suis la médecine.',
      right: 'Je suis médecin.',
      why: 'La médecine is the subject you study, not the person who practises it. The same trap catches la physique and la politique.',
    },
    {
      wrong: "Je suis ingénieur depuis six ans et je m'occupe des dossiers et voilà.",
      right: 'Je suis ingénieur. Je travaille là-bas depuis six ans. Et vous, vous faites quoi ?',
      why: 'Four moves, four sentences. Running them into one long line loses the shape, and et voilà tells the room you have run out.',
    },
  ],
  audio: FR,
  terms: ['anchor', 'move', 'detail'],
};

/** tu at the party, vous at the interview. SAME FOUR MOVES, TWO REGISTERS.
 *
 *  a1.05 owns tu versus vous AS A FORM; this unit owns the SITUATIONAL TRIGGER.
 *  a2.29 owns the ladder, and its three rung names are quoted VERBATIM here.
 *  A PARAPHRASE WOULD BE A SECOND LADDER. This lesson adds its own COLUMN — the
 *  workplace request — which clause 3 of the citation contract expressly
 *  permits, and it authors ZERO rung lines and ZERO softener rows. */
const S_REGISTER: LessonSection = {
  type: 'cardDeck', id: REGISTER, render: 'deck', layer: 'core', size: 'lg',
  title: 'Same four moves, two rooms',
  hint: 'Swipe. The moves do not change. The clothes do.',
  cards: [
    {
      label: 'The interview',
      head: 'vous, and full sentences',
      fr: 'Je suis ingénieur. Je travaille là-bas depuis six ans.',
      sub: 'Complete, unhurried, four moves',
      body: `${Cap(unitRef(PRONOUN_UNIT))} taught you the form and ${unitRef(ZERO_ARTICLE_UNIT)} the gap after suis. What this room adds is that you finish every sentence, because half of what is judged is whether you can.`,
    },
    {
      label: 'The party',
      head: 'tu, and shorter',
      fr: 'Ingénieur. Ça fait six ans. Et toi ?',
      sub: 'Same four moves, half the words',
      body: 'The moves survive. The full sentences do not, and nobody minds. Move 4 arrives faster here because it has to.',
    },
    {
      label: 'Which room',
      head: 'How you tell',
      fr: 'They opened with vous. So do you.',
      sub: 'Mirror what you were given',
      body: 'You almost never have to choose. Whoever spoke first has chosen, and matching them is right often enough that it is a rule.',
    },
    {
      label: `${Cap(unitRef(LADDER_UNIT, 'a2'))}'s ladder`,
      head: 'When something needs asking',
      fr: RUNG_1,
      sub: `${Cap(unitRef(LADDER_UNIT))} authored three rungs, in order`,
      body: `${Cap(unitRef(LADDER_UNIT))} owns this. The three rungs are ${RUNG_1} ${RUNG_2} ${RUNG_3} Nothing here re-teaches them.`,
    },
    {
      label: 'A fourth column',
      head: 'The workplace request',
      fr: 'Est-ce que je peux commencer le quinze ?',
      sub: `A new column on ${unitRef(LADDER_UNIT, 'a2')}'s three rungs`,
      body: `${Cap(unitRef(LADDER_UNIT, 'a2'))}'s ladder has three rungs and any number of columns. This is ours: asking for something at work, at the lowest rung that will do.`,
    },
  ],
  audio: FR,
  terms: ['move', 'repairMove'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5. PRODUCTION
 * ══════════════════════════════════════════════════════════════════════════ */

/** A REAL offre d'emploi, with `questionsInModal: true` so the passage and its
 *  questions become SEPARATE PAGES (MissionSection.tsx, case 'reading'). This
 *  is a CE-shaped surface inside a lesson: job postings are stock TCF Canada
 *  Compréhension Écrite stimulus.
 *
 *  `reading` is a PASSAGE_SECTION (density.logic.ts:259) so it is exempt from
 *  the 45-word core cap. `glossary` marks six job-ad terms tappable inside the
 *  passage, which is what turns a wall of French into something interrogable
 *  word by word.
 *
 *  NO DIPLOMA, EQUIVALENCE OR SUBJECT-OF-STUDY VOCABULARY. That is a2.31's and
 *  the advert is written around it deliberately. */
const S_POSTING: LessonSection = {
  type: 'reading', id: POSTING, layer: 'core', questionsInModal: true,
  title: 'An advert, read in thirty seconds',
  text: [
    'BOULANGERIE MARTIN, Lyon 3e',
    '',
    'Nous cherchons un vendeur ou une vendeuse pour notre magasin du centre-ville.',
    '',
    'Poste : vente et caisse. Vous vous occupez des clients et vous aidez en cuisine le matin.',
    '',
    'Horaires : 35 heures par semaine, du mardi au samedi. Pas de travail le dimanche.',
    '',
    'Contrat : CDI après trois mois.',
    '',
    'Expérience : deux ans minimum dans la vente.',
    '',
    'Début : à partir du 15 septembre.',
    '',
    'Envoyez votre CV à martin.lyon@exemple.fr',
  ].join('\n'),
  glossary: [
    { word: 'Poste', en: 'position', note: 'Also a television set and a police station. Here it is the job.' },
    { word: 'Horaires', en: 'hours', note: 'The heading everybody reads second, after the money.' },
    { word: 'Contrat', en: 'contract', note: 'CDI is permanent. CDD is fixed-term.' },
    { word: 'Expérience', en: 'experience', note: 'Almost always written as a number of years.' },
    { word: 'Début', en: 'start date', note: 'À partir du means from this date onward.' },
    { word: 'CV', en: 'resume', note: 'Said as two letters, say-VAY.' },
  ],
  questions: [
    { q: 'Which days would you work?', a: 'Tuesday to Saturday. Not Sunday, and not Monday.' },
    { q: 'How much experience do they want?', a: 'Two years minimum, in sales.' },
    { q: 'Is the job permanent from day one?', a: 'No. It becomes a CDI after three months.' },
    { q: 'The advert names the job twice. Why?', a: 'Un vendeur and une vendeuse, so that both forms are in the advert.' },
  ],
  audio: FR,
  terms: ['posting', 'poste'],
};

/** WORD MODE. One of only three surfaces that make a learner PRODUCE text, and
 *  the article gap is this lesson's ONE safe written trap: `fold()` strips
 *  marks and punctuation but NOT WORD TOKENS, so a missing `un` survives every
 *  fold in every path.
 *
 *  Every id here carries the `dictation` drill, CHECKED AGAINST POSTGRES rather
 *  than the seed. */
const S_DICTATION: LessonSection = {
  type: 'dictation', id: DICTATION, layer: 'core',
  title: 'Write what you hear',
  itemIds: [...DICTEE_IDS],
  audio: FR,
  terms: ['anchor', 'handback'],
};

/** THE INTERVIEW. SIX TURNS, WHICH IS THE SEED'S MAXIMUM ANYWHERE.
 *
 *  The budget is spent deliberately: ONE opening turn from the interviewer, ONE
 *  orientation turn, and then FOUR CONSECUTIVE LEARNER MOVES. No turn is spent
 *  on small talk. The interviewer's lines between the moves are a nod and
 *  nothing more, so the four moves read as one delivery rather than four
 *  answers to four questions.
 *
 *  TWO TO FOUR `alts` PER LEARNER TURN, covering different job families,
 *  because ALTS IS THE ONLY PLACE IN THE ENTIRE LESSON WHERE MORE THAN ONE TRUE
 *  ANSWER SCORES. That is the nearest thing this build has to accepting the
 *  learner's own history, and it is why it is worth the authoring time.
 *
 *  `userEn` on EVERY turn.
 *
 *  NO `Scenario.exam`. It is validated and read by NO rendering code anywhere
 *  in ealch-v2 (collation §1.12). The temptation here is real and the design
 *  recommends the opposite; the test asserts the absence.
 *
 *  THE ARTICLE TRAP IS NOT HERE. Everything in a scenario is scored through the
 *  similarity blend in score.ts, and a four-word sentence missing one short
 *  word can still land close. The article lives on written surfaces only. */
const S_INTERVIEW: LessonSection = {
  type: 'scenario', id: INTERVIEW, layer: 'core',
  title: 'The interview, all four moves',
  setting: 'A meeting room in Lyon. She has your CV and has not read it closely.',
  turns: [
    {
      // NOT "Merci d'être venu." — that participle agrees with a MAN, and the
      // interviewer is saying it TO THE LEARNER. Half of them would be told a
      // sentence that does not agree with them, in the one section of this
      // lesson where the learner is cast as themselves. `être là` sidesteps the
      // agreement entirely rather than authoring venu(e).
      ai: "Bonjour, asseyez-vous. Merci d'être là.",
      en: 'Hello, have a seat. Thank you for being here.',
      user: 'Bonjour, merci de me recevoir.',
      userEn: 'Hello, thank you for seeing me.',
      alts: [
        { fr: 'Bonjour, merci beaucoup.', en: 'Hello, thank you very much.' },
        { fr: 'Bonjour madame, merci de me recevoir.', en: 'Hello, thank you for seeing me.' },
      ],
    },
    {
      ai: 'Alors, parlez-moi de votre parcours.',
      en: 'So, tell me about your background.',
      user: 'Bien sûr.',
      userEn: 'Of course.',
      alts: [
        { fr: 'Avec plaisir.', en: 'Gladly.' },
        { fr: 'Oui, bien sûr.', en: 'Yes, of course.' },
      ],
    },
    {
      ai: 'Je vous écoute.',
      en: 'I am listening.',
      user: 'Je suis ingénieur.',
      userEn: 'I am an engineer. (Move 1: the anchor)',
      alts: [
        { fr: 'Je suis infirmière.', en: 'I am a nurse.' },
        { fr: 'Je suis cuisinier.', en: 'I am a cook.' },
        { fr: 'Je suis vendeuse.', en: 'I am a salesperson.' },
      ],
    },
    {
      ai: 'Très bien.',
      en: 'Very good.',
      user: 'Je travaille là-bas depuis six ans.',
      userEn: 'I have worked there for six years. (Move 2: how long)',
      alts: [
        { fr: 'Je fais ce métier depuis trois ans.', en: 'I have done this job for three years.' },
        { fr: 'Je suis dans cette entreprise depuis deux ans.', en: 'I have been at this company for two years.' },
        { fr: 'Je travaille dans un hôpital depuis dix ans.', en: 'I have worked in a hospital for ten years.' },
      ],
    },
    {
      ai: 'Hm-hm.',
      en: 'Mm-hm.',
      user: "Je m'occupe des dossiers clients.",
      userEn: 'I handle the client files. (Move 3: the detail)',
      alts: [
        { fr: 'Je gère une petite équipe.', en: 'I manage a small team.' },
        { fr: 'Je suis responsable de la sécurité.', en: 'I am responsible for safety.' },
        { fr: 'Je travaille avec des enfants tous les jours.', en: 'I work with children every day.' },
      ],
    },
    {
      ai: "D'accord.",
      en: 'All right.',
      user: 'Et vous, vous faites quoi ?',
      userEn: 'And you, what do you do? (Move 4: the hand-back)',
      alts: [
        { fr: 'Et vous, vous faites quoi dans la vie ?', en: 'And you, what do you do for a living?' },
        { fr: 'Et vous, vous travaillez dans quoi ?', en: 'And you, what field do you work in?' },
        { fr: 'Vous avez des questions pour moi ?', en: 'Do you have any questions for me?' },
      ],
    },
  ],
  audio: FR,
  terms: ['move', 'handback'],
};

/** MANDATORY, AND THIS IS NOW BAND DOCTRINE.
 *  `lesson-contract.test.ts:505-519` mirrors the publish gate and fails any
 *  non-assessment lesson with no practice section, an empty `practice.itemIds`,
 *  or an empty `Lesson.itemIds`. A lesson without one does not merely fail a
 *  test — IT DOES NOT SHIP. The only exemption is `features: ['assessment']`,
 *  and that same file asserts an assessment lesson owns ZERO corpus rows,
 *  which this one cannot be.
 *
 *  EXACTLY THE FOUR MOVE-MODEL ITEMS, in move order. THIS IS THE SEAM: when
 *  `openPrompt` is built it replaces this one section and the four-move
 *  checklist moves into it from s22-check.
 *
 *  `skill: 'speak'` renders the voiceflash drill. The value is decorative —
 *  practice renders the speaking drill regardless — but it is authored
 *  truthfully anyway. */
const S_DELIVER: LessonSection = {
  type: 'practice', id: DELIVER, layer: 'core', skill: 'speak',
  title: 'Say all four',
  itemIds: [...MOVE_MODEL_IDS],
  audio: FR,
  terms: ['move'],
};

/** The four-move checklist that `monologue` would have ticked off a partial
 *  transcript, as a thing the learner READS AND JUDGES THEMSELVES AGAINST.
 *  NOTHING SCORES THIS, and no string here claims otherwise.
 *
 *  `progressCheck` is a PASSAGE_SECTION so it is exempt from the core word cap.
 *  It is kept rather than dropped on judgement rather than by rule: it is the
 *  surface carrying the checklist now that nothing reads a transcript, and it
 *  is a declared rest point in a long act. */
const S_CHECK: LessonSection = {
  type: 'progressCheck', id: CHECK, layer: 'core',
  title: 'Four things you can now do',
  body: 'Say the four moves out loud, once, for your own job. Nothing here is listening, so this one is on you: the point is to find out whether you can get from the anchor to the question without stopping, not whether a machine agrees that you did. If you dry up, it will be at move 3, and the fix is to have one concrete task ready before you start.',
  stats: [
    { k: 'Move 1', v: 'You name the job, with no article' },
    { k: 'Move 2', v: 'You add how long, in the present' },
    { k: 'Move 3', v: 'You name one real thing you handle' },
    { k: 'Move 4', v: 'You give the question back' },
  ],
  audio: FR,
  terms: ['move', 'handback'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6. CLOSE
 * ══════════════════════════════════════════════════════════════════════════ */

/** ONE QUIZ PER LESSON. A second is silently never rendered.
 *
 *  FORMAT DISCIPLINE, and it is the whole reason this quiz is shaped as it is.
 *  `typeIn` and `errorSpot` are graded by `matchesAccept`, which calls `fold()`
 *  in answer.logic.ts:32 — NOT `normalizeFr`. `fold` strips accents, case,
 *  punctuation, hyphens, the middle dot, BOTH apostrophes and ALL WHITESPACE.
 *  So no question here turns on an accent, a cedilla, a capital, a hyphen, an
 *  apostrophe, word division or a comma.
 *
 *  BAND RULE, asserted in the test: fold(answer) !== fold(distractor) for every
 *  authored near-miss.
 *
 *  WHAT SURVIVES THE FOLD IS A MISSING WORD. `fold` removes marks, not word
 *  tokens, so `Je suis un ingénieur.` against `Je suis ingénieur.` IS testable
 *  in writing, and the article gap is this lesson's one safe written trap.
 *
 *  `speak` IS AVAILABLE AND WEAK FOR THE ARTICLE. It is used only for move 4,
 *  where what is being scored is that the learner said a question at all.
 *
 *  QUESTIONS I WANTED AND COULD NOT WRITE, recorded per §10:
 *    * "Which of these is a woman speaking?" as a typeIn on
 *      `ingénieur`/`ingénieure`. The two fold to the same string, so it tests
 *      nothing. Moved to a listenChoose in round 3, where the learner picks a
 *      rendered string instead of typing one.
 *    * A dictée on `c'est quoi votre métier` versus `c'est quoi, votre métier`.
 *      The comma is invisible to the fold.
 *    * Anything measuring whether the four moves were delivered WITHOUT PAUSES.
 *      No surface in the product can see it. */
const S_QUIZ: LessonSection = {
  type: 'quiz', id: QUIZ, layer: 'core',
  title: 'The exam',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-shape',
      label: 'What is missing',
      targets: ['stops-at-one'],
      questions: [
        {
          format: 'mcq',
          q: 'Je suis ingénieur. Je travaille là-bas depuis six ans. What is missing?',
          opts: ['the detail and the question', 'the job title', 'how long'],
          correct: 0,
          why: 'Moves 1 and 2 are there. Move 3 and move 4 are not, and move 4 is the one that hands the turn back.',
          ref: FOURMOVES,
        },
        {
          format: 'mcq',
          q: 'Which one is a finished answer?',
          opts: [
            'Je suis vendeuse.',
            "Je suis vendeuse. Je fais ça depuis deux ans. Je m'occupe de la caisse. Et vous ?",
            'Vendeuse, deux ans.',
          ],
          correct: 1,
          why: 'Four moves. The first stops at the anchor and the third is a note to yourself.',
          ref: FOURMOVES,
        },
        {
          format: 'mcq',
          q: 'Why is move 4 worth four words?',
          opts: [
            'It shows off a question form',
            'It is required by grammar',
            'It puts the turn back on the other person',
          ],
          correct: 2,
          why: 'Without it you have made a statement and they have to invent the next question. With it, they are talking.',
          ref: HOOK,
        },
      ],
    },
    {
      id: 'r2-anchor',
      label: 'The anchor and the clock',
      targets: ['article-back', 'depuis-past'],
      questions: [
        {
          format: 'errorSpot',
          q: 'One word should not be there. Write it out corrected.',
          prompt: 'Je suis un ingénieur.',
          answer: 'Je suis ingénieur.',
          accept: ['Je suis ingénieur', 'je suis ingenieur'],
          why: `${Cap(unitRef(ZERO_ARTICLE_UNIT))} taught this. The article is the extra word, and writing it out is the only place the missing word is visible.`,
          ref: TRAP,
        },
        {
          format: 'errorSpot',
          q: 'The tense is wrong. Write it out corrected.',
          prompt: "J'ai travaillé là-bas depuis six ans.",
          answer: 'Je travaille là-bas depuis six ans.',
          accept: ['Je travaille là-bas depuis six ans', 'je travaille la-bas depuis six ans'],
          why: `${Cap(unitRef(TIME_UNIT))} owns this rule. You are still there, so the sentence is not finished either.`,
          ref: TRAP,
        },
        {
          format: 'typeIn',
          q: 'Write moves 1 and 2 joined, for an engineer of six years.',
          answer: 'Je suis ingénieur. Je travaille là-bas depuis six ans.',
          accept: [
            'Je suis ingénieur. Je travaille là-bas depuis six ans',
            'je suis ingenieur je travaille la-bas depuis six ans',
          ],
          why: 'Two moves, not four. Four is a paragraph, and a paragraph typed on a phone is a test of patience.',
          ref: BUILD2,
        },
      ],
    },
    {
      id: 'r3-detail',
      label: 'The detail',
      targets: ['no-detail'],
      questions: [
        {
          format: 'mcq',
          q: 'Which one is move 3?',
          opts: [
            'Je suis comptable.',
            "Je m'occupe des dossiers clients.",
            'Je travaille depuis six ans.',
          ],
          correct: 1,
          why: 'Move 3 names one concrete thing you handle. The first is the anchor and the third is the clock.',
          ref: DAILY,
        },
        {
          format: 'listenChoose',
          q: 'Listen. Is the speaker a man or a woman?',
          say: 'Je suis infirmière.',
          opts: ['a woman', 'a man', 'you cannot tell'],
          correct: 0,
          why: 'Infirmière ends in the -ière shape. You can hear this one, which is not true of ingénieure.',
          ref: FEM,
        },
        {
          format: 'mcq',
          q: 'Which pair is written differently and said the same?',
          opts: [
            'infirmier and infirmière',
            'ingénieur and ingénieure',
            'vendeur and vendeuse',
          ],
          correct: 1,
          why: 'The written e is the whole change. The other two you can hear.',
          ref: FEM,
        },
      ],
    },
    {
      id: 'r4-theirs',
      label: 'What they ask you',
      targets: ['misses-question'],
      questions: [
        {
          format: 'listenChoose',
          q: 'Listen. What are they asking about?',
          say: 'Depuis combien de temps vous travaillez là-bas ?',
          opts: ['how many people', 'how long', 'what you handle'],
          correct: 1,
          why: 'Depuis combien de temps is a length of time. It is the question move 2 answers.',
          ref: DURATION,
        },
        {
          format: 'listenChoose',
          q: 'Listen. What are they asking about?',
          say: 'Vous vous occupez de quoi, exactement ?',
          opts: ['what you handle', 'how long', 'where you work'],
          correct: 0,
          why: 'This is the question move 3 answers, and it is the one people are least ready for.',
          ref: LISTEN,
        },
        {
          format: 'mcq',
          q: 'You did not catch the question. What do you say?',
          opts: [
            'Je ne sais pas.',
            "Oui, d'accord.",
            "Vous pouvez répéter, s'il vous plaît ?",
          ],
          correct: 2,
          why: `${Cap(unitRef(REPAIR_UNIT))} authored six ways to say this, ordered by what each costs you. Reach for the lowest one that fixes it.`,
          ref: LISTEN,
        },
      ],
    },
    {
      id: 'r5-handback',
      label: 'Giving it back',
      targets: ['stops-at-one'],
      questions: [
        {
          format: 'speak',
          q: 'You have just finished move 3. Say move 4.',
          target: 'Et vous, vous faites quoi ?',
          why: 'What is being scored here is that you asked a question at all. Any of the four hand-backs works.',
          ref: HOOK,
        },
        {
          format: 'mcq',
          q: 'At a party, with somebody your own age, which fits?',
          opts: ['Et toi, tu fais quoi ?', 'Et vous, vous faites quoi ?', 'Quelle est votre profession ?'],
          correct: 0,
          why: `${Cap(unitRef(PRONOUN_UNIT))} taught the form. The room chooses it, and here the room is a party.`,
          ref: REGISTER,
        },
        {
          format: 'typeIn',
          q: 'Write move 4, the plain version.',
          answer: 'Et vous, vous faites quoi ?',
          accept: ['Et vous vous faites quoi', 'et vous, vous faites quoi'],
          why: 'Four words after et vous. This is the sentence the course had never published before this lesson.',
          ref: HOOK,
        },
      ],
    },
  ],
  audio: FR,
  terms: ['move', 'handback'],
};

/** `roundup` is a PASSAGE_SECTION, so it is exempt from the 45-word core cap
 *  AND from the four-item list cap. */
const S_ROUNDUP: LessonSection = {
  type: 'roundup', id: ROUNDUP, layer: 'core',
  title: 'What you can do now',
  body: `${REFRAME} You came in able to say what you are, because ${unitRef('a1.06')} taught you that and it is not this lesson's to teach. You leave able to keep going: how long, what that means on a normal day, and a question back that makes the other person do some of the work. Nobody asked you four questions. You answered as though they had.`,
  points: [
    `${MOVE_1}: the job, no article, two seconds`,
    `${MOVE_2}: how long, in the present, because you are still there`,
    `${MOVE_3}: one concrete thing you handle`,
    `${MOVE_4}: four words, and they are talking`,
    `And if you miss what they asked, ${unitRef('a2.07')} gave you six ways to ask again`,
  ],
  audio: FR,
  say: REFRAME,
  terms: ['move', 'handback'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFERENCE SHEET
 *
 *  `table` at layer 'deep'. NO `cheatSheet`: inside a sheet render mode a
 *  cheatSheet draws its TITLE AND NOTHING ELSE, and a1.13 and a1.17 both ship
 *  that defect today. ReferenceSheet.tsx draws `teach`, `letterGrid` and
 *  `table`.
 *
 *  This is the thing a learner screenshots before an exam.
 * ══════════════════════════════════════════════════════════════════════════ */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    title: 'The four moves, with the slots empty',
    layer: 'deep',
    contains: ['The four moves', 'Fill in your own', 'Job words and their feminines', 'What they ask you'],
    sections: [
      {
        type: 'table',
        id: 'sheet-moves',
        title: 'The four moves',
        layer: 'deep',
        cols: ['Move', 'What it does', 'The shape'],
        rows: [
          [MOVE_1, 'What you are', 'Je suis ____.'],
          [MOVE_2, 'For how long', 'Je travaille là-bas depuis ____ ans.'],
          [MOVE_3, 'What that means daily', "Je m'occupe de ____."],
          [MOVE_4, 'A hook back to them', 'Et vous, vous faites quoi ?'],
        ],
      },
      {
        type: 'table',
        id: 'sheet-yours',
        title: 'Yours, filled in',
        layer: 'deep',
        cols: ['Move', 'Write it once, here'],
        rows: [
          [MOVE_1, 'Je suis ________________.'],
          [MOVE_2, 'Je ______________ depuis ______.'],
          [MOVE_3, 'Je ______________________.'],
          [MOVE_4, 'Et vous, vous faites quoi ?'],
        ],
      },
      {
        type: 'table',
        id: 'sheet-feminines',
        title: 'How a job word changes for a woman',
        layer: 'deep',
        cols: ['If it ends in', 'It becomes', 'Example'],
        rows: [
          ['a consonant', 'add -e', 'un avocat, une avocate'],
          ['-ien', '-ienne', 'un pharmacien, une pharmacienne'],
          ['-ier', '-ière', 'un infirmier, une infirmière'],
          ['-eur (from a verb)', '-euse', 'un vendeur, une vendeuse'],
          ['-teur', '-trice', 'un directeur, une directrice'],
          ['-eur (otherwise)', 'add -e', 'un ingénieur, une ingénieure'],
          ['nothing changes', 'only the article', 'un médecin, une médecin'],
        ],
      },
      {
        type: 'table',
        id: 'sheet-theirs',
        title: 'What they ask, and which move answers it',
        layer: 'deep',
        cols: ['They say', 'You answer with'],
        rows: [
          ['Parlez-moi de votre parcours.', 'All four, in order'],
          ['Vous faites quoi dans la vie ?', `${MOVE_1}, then keep going`],
          ['Depuis combien de temps ?', MOVE_2],
          ['Vous vous occupez de quoi ?', MOVE_3],
          ['Vous avez des questions pour moi ?', 'Yes. Always yes.'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-not-here',
        title: 'What is not on this sheet',
        layer: 'deep',
        body: `The gap after suis belongs to ${unitRef(ZERO_ARTICLE_UNIT)} and depuis belongs to ${unitRef(TIME_UNIT)}, so neither rule is written out here. What you studied and the paper that proves it are ${unitRef(STUDY_UNIT)}, which comes next. The six ways to ask somebody to repeat themselves are ${unitRef(REPAIR_UNIT, 'a2')}'s, and the three rungs for getting something fixed are ${unitRef(LADDER_UNIT, 'a2')}'s.`,
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACTS, TRIGGERS, DRILLS, TRANCHES
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The answer that stopped at one sentence',
    sections: [SCENE, FOURMOVES, GOALS, TWOANSWERS],
    milestone: 'You can name the four moves and say why one sentence is not an answer',
    estScreens: 14,
    restPoints: [TWOANSWERS],
  },
  {
    id: 'act2',
    title: 'Moves 1 and 2, which you already have',
    sections: [ANCHOR, JOBWORDS, DURATION, BUILD2],
    milestone: 'You can join the anchor to how long, for your own job',
    estScreens: 16,
    restPoints: [BUILD2],
  },
  {
    id: 'act3',
    title: 'Move 3, and what a workplace actually is',
    sections: [DAILY, WORKPLACE, FEM, LISTEN, BUILD3, HOOK],
    milestone: 'You can describe one real part of your day, and hand the question back',
    estScreens: 22,
    restPoints: [LISTEN, HOOK],
  },
  {
    id: 'act4',
    title: 'Three ways it comes apart',
    sections: [TRAP, ERRORS, REGISTER],
    milestone: 'You keep the gap, keep the present tense, and keep going',
    estScreens: 12,
    restPoints: [REGISTER],
  },
  {
    id: 'act5',
    title: 'Doing it',
    sections: [POSTING, DICTATION, INTERVIEW, DELIVER, CHECK],
    milestone: 'You read an advert, wrote the moves, and delivered all four in a room',
    estScreens: 18,
    restPoints: [CHECK],
  },
  {
    id: 'act6',
    title: 'Close',
    sections: [QUIZ, ROUNDUP],
    milestone: 'Fifteen questions, and the four moves one last time',
    estScreens: 8,
    restPoints: [ROUNDUP],
  },
];

/** `detectOn` names SECTIONS, not quiz rounds, and `retest` — where it is used
 *  at all — must name a DRILL in this lesson. a2.29 omits `retest` on all six
 *  of its triggers and that is the shipped convention; the round-to-trigger
 *  join runs the other way, through each QuizRound's `targets`. */
const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'stops-at-one',
    description: 'Delivers the anchor as the whole answer and waits for another question.',
    detectOn: [SCENE, FOURMOVES, BUILD3, ERRORS],
    drill: 'd-fourmoves',
  },
  {
    id: 'article-back',
    description: `Puts the article back after être. ${Cap(unitRef(ZERO_ARTICLE_UNIT, 'a2'))}'s rule, re-tested here and not re-taught.`,
    detectOn: [TRAP, ERRORS],
    drill: 'd-gap',
  },
  {
    id: 'depuis-past',
    description: `Uses a past tense with depuis. ${Cap(unitRef(TIME_UNIT, 'a2'))}'s rule, re-tested here and not re-taught.`,
    detectOn: [DURATION, TRAP, ERRORS],
    drill: 'd-depuis',
  },
  {
    id: 'no-detail',
    description: 'Repeats the job title in longer words instead of naming a concrete task.',
    detectOn: [DAILY, WORKPLACE, BUILD3],
    drill: 'd-detail',
  },
  {
    id: 'misses-question',
    description: 'Cannot tell which question was asked, so answers with the wrong move.',
    detectOn: [DURATION, LISTEN, INTERVIEW],
    drill: 'd-theirs',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'd-fourmoves',
    title: 'Four moves, in order',
    format: 'sort' as const,
    buckets: [MOVE_1, MOVE_2, MOVE_3, MOVE_4],
    // `items` on a LessonDrill is a list of CORPUS IDS, not display strings.
    // validateLesson checks every one of them resolves, so the four move models
    // go in by id and the renderer reads their `fr`.
    items: [...MOVE_MODEL_IDS],
    coach: 'Anchor, clock, detail, question. The fourth is the one that gets left out.',
  },
  {
    id: 'd-gap',
    title: 'Keep the gap',
    format: 'mcq' as const,
    q: 'Which one is right?',
    opts: ['Je suis un professeur.', 'Je suis professeur.'],
    correct: 1,
    why: `${Cap(unitRef(ZERO_ARTICLE_UNIT))} taught this. English needs the article and French does not.`,
  },
  {
    id: 'd-depuis',
    title: 'Still going',
    format: 'mcq' as const,
    q: 'You started six years ago and you are still there. Which one?',
    opts: ["J'ai travaillé là-bas depuis six ans.", 'Je travaille là-bas depuis six ans.'],
    correct: 1,
    why: `${Cap(unitRef(TIME_UNIT))} owns this.`,
  },
  {
    id: 'd-detail',
    title: 'One concrete thing',
    format: 'flashcard' as const,
    items: [M(28), M(29), M(30), M(31), M(66), M(68)],
    coach: 'Something you could point at. Not the job title again in longer words.',
  },
  {
    id: 'd-theirs',
    title: 'Which move answers it',
    format: 'flashcard' as const,
    items: [M(36), M(38), M(39), M(48), M(51), M(45)],
    coach: 'Their question first. The move you answer with comes second.',
  },
];

/** THE SRS RELEASE. Every authored row reaches the learner through a tranche,
 *  which is what doctrine §E's reachability rule requires now that
 *  `flashcards` and `reviewDeck` have been dropped from the tail.
 *
 *  `flashcards` and `reviewDeck` MAY be dropped — nothing enforces them — but
 *  `practice` MAY NOT, and it is not. See S_DELIVER.
 *
 *  a2.07's six repair rows and a2.29's three ladder rows are released here
 *  rather than through a cardDeck `itemIds`, WHICH DRAWS NOTHING. */
const DECK_TRANCHE: string[][] = [
  // act 1 — the four moves as models, one per move
  [M(20), M(24), M(28), M(32)],
  // act 2 — the rest of the anchors and the rest of the clocks
  [M(21), M(22), M(23), M(25), M(26), M(27)],
  // act 3 — the detail, the workplace, and the ten feminines
  [
    M(29), M(30), M(31),
    M(66), M(67), M(68), M(69), M(70), M(71), M(72), M(73),
    M(74), M(75), M(76), M(77), M(78), M(79), M(80), M(81),
    M(82), M(83), M(84), M(85), M(86), M(87),
  ],
  // act 4 — the hand-back, and the two blocks this unit CITES rather than owns.
  // a2.07's six repair rows and a2.29's three ladder rows are released HERE,
  // through the tranche, because `itemIds` on a cardDeck draws nothing.
  [M(33), M(34), M(35), ...REPAIR_IDS, ...LADDER_IDS],
  // act 5 — the interviewer's voice, which is what a2.35 will lift
  [
    M(36), M(37), M(38), M(39), M(40), M(41), M(42), M(43), M(44),
    M(45), M(46), M(47), M(48), M(49), M(50), M(51), M(52),
  ],
  // act 6 — the party register and the six spoken question forms
  [
    M(53), M(54), M(55), M(56), M(57), M(58), M(59),
    M(60), M(61), M(62), M(63), M(64), M(65),
  ],
];

const SECTIONS: LessonSection[] = [
  S_SCENE, S_FOURMOVES, S_GOALS, S_TWOANSWERS,
  S_ANCHOR, S_JOBWORDS, S_DURATION, S_BUILD2,
  S_DAILY, S_WORKPLACE, S_FEM, S_LISTEN, S_BUILD3, S_HOOK,
  S_TRAP, S_ERRORS, S_REGISTER,
  S_POSTING, S_DICTATION, S_INTERVIEW, S_DELIVER, S_CHECK,
  S_QUIZ, S_ROUNDUP,
];

/** Every corpus row this lesson can put in front of a learner: everything it
 *  authored, plus every id any section names, any tranche releases, any term
 *  chip cites and any LessonDrill lists. The merge script pulls ALL of these
 *  out of Postgres, because most of them live in themes with ZERO seed rows. */
export const ITEM_IDS: string[] = [...new Set([
  ...ROWS.map((r) => r.id),
  ...Object.values(IMPORTED).flat(),
])];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 *
 *  NO `canDo` (it belongs to the unit — a2.07 was 1 of 66 to get this wrong).
 *  NO `track` (drops; 1 of 66).
 *  NO `teaches` (it is `grammarIntroduced`, 62 of 66, plus `grammarAssumed`,
 *  59 of 66).
 *  All three draw NOTHING and only `pnpm -C ealch-admin typecheck` sees them.
 * ══════════════════════════════════════════════════════════════════════════ */

export const TRAVAIL_LESSON: Lesson = {
  id: 'a2.30.l1',
  unitId: 'a2.30',
  seq: 1,
  title: 'Work and Jobs',
  level: 'a2',
  // THE TAG NUMBERS THE LESSON BY WHERE IT SITS ON THE TRAIL, NOT BY WHAT ITS
  // ID SAYS. a2.30 is seq 29, so this reads 29 and not 30. Every A2 neighbour
  // agrees: a2.29.l1 is seq 28 and tagged « LEÇON 28 », a2.24.l1 is seq 22 and
  // tagged « LEÇON 22 ». Authored as 30 in the first pass and caught on the
  // Pixel 6, where the header renders « A2 · LEÇON 29 » from the unit seq and
  // silently disagreed with the stored string.
  tag: 'A2 · LEÇON 29',
  intro:
    'Somebody asks what you do. You answer in four words, correctly, and then the room waits. '
    + 'This lesson is the three sentences that come after the first one, and the question at the end that hands the conversation back.',

  /** THE ONE EXAM-LAYER ARTEFACT THAT IS PERMITTED, AND IT IS FREE.
   *  The field exists (schema.ts:1303, validated at :3311 against EXAM_SKILLS)
   *  and it is the remediation join that lets a missed PO band resolve back to
   *  a lesson. Nothing at a2 currently sets it, nothing can currently miss a PO
   *  band, and setting it breaks nothing.
   *
   *  NO ExamTask rows. NO ExamSeries rows. NO Scenario.exam. NO delf_a2. */
  skill: 'PO',

  grammarAssumed: [
    'a1.06',   // the zero article after être. THE PREREQUISITE.
    'a2.18',   // depuis / pendant / il y a
    'a1.05',   // tu vs vous as a form
    'a2.04',   // prepositions of place
    'a2.01',   // -ER verbs (gérer, aider, travailler)
    'a2.22',   // pronominaux (s'occuper de)
    'a2.13',   // vouloir, pouvoir, devoir
  ],
  grammarIntroduced: [
    'the four-move answer',
    'the hand-back question',
    'feminine job titles',
    'the spoken question forms of work',
  ],

  overview: {
    titleEn: 'Work and Jobs',
    subFr: 'Le travail & les métiers',
    introFr: 'Quatre mouvements, et le dernier rend la parole.',
    minutes: 32,
    difficulty: 3,
    glyph: '💼',
    screens: 90,
  },

  reframe: REFRAME,
  acts: ACTS,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: TRAVAIL_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
  },
};

export const LESSON = TRAVAIL_LESSON;
export { ACTS, SECTIONS, DECK_TRANCHE, ERROR_TRIGGERS, DRILLS, SHEETS, SHEET_ID };
