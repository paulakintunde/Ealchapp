// a2.29.l1 « À l'hôtel » — the lesson.
//
// 25 missions, 25 sections, six acts, ONE lesson, ONE quiz.
//
// ════════════════════════════════════════════════════════════════════════════
//  BAND BLOCKING STEP 4 WAS RUN ON A PIXEL 6 AND BOTH EXPOSURES PASSED.
//  NEITHER FALLBACK WAS TAKEN.
// ════════════════════════════════════════════════════════════════════════════
//
// The prompt requires a device check before authoring, because this lesson
// carries two shapes no shipped lesson has:
//
//   * TWO `scenario` sections in one `sections` array. Measured: 0 of 69
//     shipped lessons repeat the type.
//   * ONE `table` section inside a mission. Measured: 0 of 69 shipped lessons
//     put a `table` in `sections`. It draws 152 times, but every one of those
//     is inside a reference SHEET, which is a different render path.
//
// A throwaway probe lesson carrying both was rendered on a Pixel 6 (device
// 21041FDF600BMN) over Metro on 8082, 2026-08-16, then removed. Result:
//
//   * the second `scenario` draws as its own mission with its own setting,
//     title, opening turn and Speak / Show me controls, and no state or audio
//     bleeds from the first. `MissionSection.tsx:560` returns a fresh
//     `<ScenarioView>` per section and nothing in that path is keyed by type.
//   * the `table` draws through the shared fallback into `SectionView`'s
//     `case 'table'` (`LessonSection.tsx:234`). All nine cells rendered in
//     full, with three columns of real ladder sentences and no tail clipping.
//
// THE CLIP RISK WAS REAL AND IT DID NOT FIRE. `TableView` (`LessonRich.tsx:705`)
// puts `flex: 1` DIRECTLY ON THE `TX` for every header and every cell, which is
// the exact shape invariants §2 documents as clipping a line's tail while the
// audio speaks it in full. It does not clip here because these cells wrap to
// multiple lines inside a row with `alignItems: 'center'`, and the documented
// failure is a single-line hug-content box. **A one-word-per-cell table would
// be the dangerous case, not this one.** Recorded so the next author knows
// which half of the rule they are relying on.
//
// ════════════════════════════════════════════════════════════════════════════
//  25 SECTIONS IS INSIDE THE SHIPPED A2 RANGE, AND DOCTRINE §F IS STALE
// ════════════════════════════════════════════════════════════════════════════
//
// Doctrine §F said "19 to 24 is your range". Measured across the 29 shipped A2
// lessons: the range is **23 to 32**, median **24**, with a2.13 at 32. No A2
// lesson has ever shipped under 23, and 24 was the MEDIAN being quoted as a
// ceiling. 25 is one above the median and well inside the range.
//
// §F was corrected on 2026-08-16 and now reads "23 to 32 is your range, and 24
// is the shape to beat", with the per-track table behind it.
//
// ACT 3 IS THE HEAVIEST at 6 missions against act 2's 5, which doctrine §B.5
// requires. Note that the prompt's own section plan does NOT satisfy this: it
// gives act 2 and act 3 five sections each. a2.07's repair citation moved into
// act 3, where it belongs on the merits — a2.07's six lines are fixed lexis and
// act 3 is the act about fixed lexis — and that is what breaks the tie.
//
// ════════════════════════════════════════════════════════════════════════════
//
// THE OWNS. This unit owns the politeness / register ladder for the whole band
// (collation §1.2, C5). a2.30, a2.31 and a2.32 quote the three rung names
// VERBATIM and reuse the rung rows by itemId. That is why `RUNG_1`, `RUNG_2`
// and `RUNG_3` are constants in the corpus file rather than strings typed here,
// and why the test asserts them as exact strings in one section, in order.
//
// NO forward citation of a2.32: it ships at seq 31, three units after this one,
// and collation §1.3 forbids quoting a unit that ships later. The citation runs
// the other way.
//
// NO `Scenario.exam` and NO `ExamTask` row. Band policy, settled by Paul on
// 2026-08-15 as decision item 4, asserted as an absence because it is policy
// and not an oversight. `Lesson.skill = 'PO'` is set so `dueExamSkills()` can
// deep-link in.
//
// NO reference `sheet`, and therefore no `cheatSheet`, which draws its title
// and nothing else inside one. NO `deep` layer. NO `imageRef`. All explicit.

import type { Lesson, LessonAct, LessonSection, LessonDrill, ErrorTrigger } from '../../../ealch-v2/src/content/schema.ts';
import { HOTEL_TERMS } from './hotel-terms.ts';
import {
  UNIT, LESSON_ID, REFRAME, H, RUNG_1, RUNG_2, RUNG_3,
  REPAIR_IDS, REPAIR_UNIT, MODAL_UNIT, MONEY_UNIT, ALPHABET_UNIT,
  IMPORTED, DICTEE_IDS, QUEBEC_CITE, RUDE_LINE, IMPERSONAL_LINE, NINE_IDS,
} from './hotel-corpus.ts';

/* ── Section ids, named once so acts, quiz refs and rest points cannot drift ── */
const SCENE = 's01-scene';
const GOALS = 's02-goals';
const ARRIVAL = 's03-arrival';
const LADDER = 's04-ladder';
const HEARD = 's05-grid';
const RUNG1 = 's06-rung1';
const RUNG2 = 's07-rung2';
const RUNG3 = 's08-rung3';
const REGISTER = 's09-register';
const SOFTENERS = 's10-softeners';
const IMPERSONAL = 's11-impersonal';
const OPENER = 's12-opener';
const REPAIR = 's13-repair';
const QUEBEC = 's14-quebec';
const TRAP = 's15-trap';
const ERRORS = 's16-errors';
const NUMBERS = 's17-numbers';
const CHECKIN = 's18-checkin';
const COMPLAINT = 's19-complaint';
const DICTATION = 's20-dictation';
const SPEAK = 's21-speak';
const REVIEW = 's22-review';
const PROGRESS = 's23-progress';
const QUIZ = 's24-quiz';
const ROUNDUP = 's25-roundup';

export const SPEAK_ID = SPEAK;

const FR = { lang: 'fr-FR' as const, mode: 'tts' as const, speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — THE ENCOUNTER THAT WENT WRONG
 * ══════════════════════════════════════════════════════════════════════════ */

/** The scene beats, in a named const so the union narrows. `LessonSection` is a
 *  UNION and only the scene variant has `beats`; without the Extract the whole
 *  array widens and the admin typecheck fails, which is how a2.26 collected 19
 *  errors. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration',
    text: 'Eleven at night. You have been travelling since six in the morning, the room is yours, and there is no hot water.',
    size: 'md',
    audio: FR,
  },
  {
    kind: 'narration',
    text: 'You went down to the desk an hour ago and asked. Somebody said they would look into it. Nobody came.',
    size: 'md',
    audio: FR,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'La réception',
    fr: 'Oui ? Je peux vous aider ?',
    en: 'Yes? Can I help you?',
    respell: '[wee zhuh puh voo zay-DAY]',
    size: 'md',
    audio: FR,
  },
  {
    // BOTH OPTIONS ARE GRAMMATICAL. That is the whole point, and it is why the
    // learner reaches for the wrong one: it is built out of a2.13's own modal
    // frame, which they were taught four units ago and taught well.
    kind: 'choice',
    prompt: 'You have one sentence. Which one do you say?',
    size: 'lg',
    options: [
      { fr: RUDE_LINE, respell: '[voo day-VAY ray-pah-RAY lah DOOSH]', en: 'You have to fix the shower.', outcome: 'breaks', audio: FR },
      { fr: IMPERSONAL_LINE, respell: '[ex-kü-ZAY mwah eel ee ah uhⁿ proh-BLEM ah-vek lah DOOSH]', en: 'Excuse me, there is a problem with the shower.', outcome: 'works', audio: FR },
    ],
  },
  {
    // THE REQUIRED LAYOUT, AND THE RENDERER ENFORCES IT STRUCTURALLY.
    //
    // The `break` beat carries `wrong` and `right` as two separate objects and
    // draws them on ONE screen, one above the other. That is exactly the layout
    // the prompt requires and it cannot be split across two screens without
    // changing the beat's kind. The test asserts both strings are in this one
    // section; the type asserts they are on one card.
    kind: 'break',
    heading: 'Both of those are correct French',
    wrong: {
      fr: RUDE_LINE,
      ipa: '/vu də.ve ʁe.pa.ʁe la duʃ/',
      respell: '[voo day-VAY ray-pah-RAY lah DOOSH]',
      en: 'You have to fix the shower.',
    },
    right: {
      fr: IMPERSONAL_LINE,
      ipa: '/ɛks.ky.ze.mwa il i.a œ̃ pʁɔ.blɛm a.vɛk la duʃ/',
      respell: '[ex-kü-ZAY mwah eel ee ah uhⁿ proh-BLEM ah-vek lah DOOSH]',
      en: 'Excuse me, there is a problem with the shower.',
    },
    body: 'The first is built out of devoir, which a2.13 taught you, and it is a perfectly formed sentence. It also hands a stranger an instruction at eleven at night. The second says the same thing about the same shower and mentions nobody at all.',
    coach: 'Neither of these is a grammar mistake. That is what makes this hard to notice and worth a whole lesson.',
    size: 'lg',
    audio: FR,
  },
  {
    kind: 'resolve',
    text: 'One of those gets the shower looked at tonight. The other gets you a form to fill in.',
    size: 'md',
  },
];

const S_SCENE: LessonSection = {
  type: 'scene', id: SCENE, render: 'screens', layer: 'core',
  title: 'No hot water, and one sentence to fix it',
  setting: { place: 'The front desk of a small hotel', city: 'Lyon', time: 'Eleven at night' },
  beats: SCENE_BEATS,
  closing: { text: 'You are about to learn the sentence in the middle, and the two either side of it.', size: 'md' },
  terms: ['impersonal'],
  say: 'You have said this in English a hundred times. In French there is a step between apologising and shouting, and nobody teaches it.',
};

const S_GOALS: LessonSection = {
  type: 'goals', id: GOALS, layer: 'core',
  title: 'By the end of this one',
  goals: [
    { t: 'Check in without rehearsing it first', s: 'Understand the four things the desk always says, and answer them.' },
    { t: 'Ask for something and get it', s: 'Five ways in, learned whole, and you pick the one that fits.' },
    { t: 'Say it a second time without a row', s: RUNG_2 },
    { t: 'Ask for the manager, and know when not to', s: 'The top rung works once. Spend it late.' },
  ],
};

/** The receptionist at speed. `hideLines` is the flag the band funded and it is
 *  what makes this a listening mission rather than a reading one: without it
 *  `MissionRich.tsx:1949` prints `l.fr` and `l.en` beside the play button.
 *
 *  Every question is on the NUMBERS or the ACTION, never "what did you hear",
 *  so the mission still works if the flag is ever lost. Each sets `say` with
 *  the French line rather than relying on the `opts[correct]` fallback, which
 *  is the a1.25 bug the schema documents on `QuizQuestion.say`.
 *
 *  Authored to stand alone without this lesson's framing, so a2.35 can lift it
 *  (collation §1.4, §7.2). */
const S_ARRIVAL: LessonSection = {
  type: 'listening', id: ARRIVAL, layer: 'core', hideLines: true,
  title: 'The desk, at the speed the desk talks',
  audio: { ...FR, audioFirst: true },
  lines: [
    { fr: 'Bonsoir, vous avez une réservation ?', en: 'Good evening, do you have a booking?' },
    { fr: "C'est à quel nom, s'il vous plaît ?", en: 'Under what name, please?' },
    { fr: 'Votre chambre est au troisième étage.', en: 'Your room is on the third floor.' },
    { fr: 'Le petit déjeuner est servi de sept heures à dix heures.', en: 'Breakfast is served from seven to ten.' },
  ],
  questions: [
    {
      q: 'Which floor is the room on?', opts: ['The ground floor', 'The second', 'The third', 'The fourth'], correct: 2,
      why: 'Troisième. And in a French building the ground floor is le rez-de-chaussée and is not counted, so the third floor is four flights up.',
    },
    {
      q: 'What is the last hour you can still get breakfast?', opts: ['Seven', 'Nine', 'Ten', 'Eleven'], correct: 2,
      why: 'De sept heures à dix heures. The de … à pair carries both ends, and the second number is the one that costs you a meal.',
    },
    {
      q: 'What is the desk asking for in the second line?', opts: ['Your room number', 'The name the booking is under', 'Your passport', 'How many nights'], correct: 1,
      why: "À quel nom means under what name. It is asked at every desk in France and it is four words long, so it goes past easily.",
    },
    {
      q: 'What does the first line want from you?', opts: ['Yes or no', 'A room number', 'A price', 'A date'], correct: 0,
      why: 'Vous avez une réservation ? is a yes-or-no question said as a plain statement with the voice going up at the end. Nothing is added to the front and nothing is swapped round.',
    },
  ],
  terms: ['desk'],
  say: 'Nothing here is difficult French. It is fast, and it arrives whole.',
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — THE LADDER. This replaces "the paradigm".
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE REQUIRED LAYOUT: the three rung names visible together, in order, on ONE
 *  screen. A ladder shown one rung per screen is not a ladder.
 *
 * ════════════════════════════════════════════════════════════════════════════
 *  THIS WAS A `table` AND IT COULD NOT SHIP AS ONE. THE BLOCKER IS NOT THE
 *  RENDERER, AND THE DEVICE CHECK COULD NEVER HAVE FOUND IT.
 * ════════════════════════════════════════════════════════════════════════════
 *
 * The device pass proved a `table` draws correctly inside a mission: all nine
 * cells, three columns of real ladder sentences, no clipping. It renders.
 *
 * `validateDensity` refuses it anyway. `density.logic.ts:423` reads:
 *
 *     if (s.type === 'table' && layer === 'core')
 *       push('table-in-core', sid, 'a table in a core section — tables belong
 *            in a reference sheet (layer deep)');
 *
 * under a heading that says « Tables never appear in the flow ». So the reason
 * ZERO of 69 shipped lessons carry a `table` in `sections` is not convention
 * and not a renderer gap: it is an enforced rule, and every one of the 152
 * shipped tables is inside a reference sheet because that is the only place the
 * validator allows one.
 *
 * That settles the doctrine question this band has been carrying.
 * `A2-BUILD-DOCTRINE.md` §B.8 names `table` as the A2 paradigm surface and 64
 * lessons used `tapTable` instead; §B.8 is wrong, and the validator has been
 * saying so the whole time.
 *
 * So the ladder ships as a `tapTable`, which carries the identical layout
 * — three rung names as `cols`, nine cells, one screen — AND is audible, AND
 * ships in 132 sections already. Nothing is lost. The `table` survives as
 * `s05-grid` at `layer: 'more'`, which is the only layer that passes, so the
 * band still has a working precedent for the type.
 *
 * Three columns is inside the six-column cap (a2.12) and the header glyph
 * budget (a2.16). */
const S_LADDER: LessonSection = {
  type: 'tapTable', id: LADDER, layer: 'core',
  title: 'Three rungs, three moves',
  cols: [RUNG_1, RUNG_2, RUNG_3],
  rows: [
    {
      cells: ["Est-ce que je peux avoir une serviette, s'il vous plaît ?", 'Je vous ai demandé une serviette il y a une heure.', "Je voudrais parler au responsable, s'il vous plaît."],
      say: "Est-ce que je peux avoir une serviette, s'il vous plaît ?",
      detail: {
        title: 'Asking for a thing',
        body: 'The same towel, three rungs apart. Rung 1 asks. Rung 2 says when you asked before, and says nothing about whose fault that is. Rung 3 stops asking the person in front of you.',
        say: "Est-ce que je peux avoir une serviette, s'il vous plaît ?",
      },
    },
    {
      // THE CELL DROPS THE OPENER AND THE `say` KEEPS IT, and that is a device
      // finding rather than a preference. At three equal columns each cell is
      // about 240dp wide, and `Excusez-moi,` is one token too wide for it: on a
      // Pixel 6 it broke MID-WORD as « Excusez-m / oi » on the lesson's most
      // important screen. Every other token in the nine cells fits.
      //
      // Nothing is lost. `say` and `detail.say` both speak the authored line in
      // full, the opener has its own mission at s12-opener, and the cell still
      // resolves to a corpus row: this exact string is `fr.a2.bricolage.041`,
      // which this build imports as the BARE report precisely so the softened
      // one has something to sit beside.
      cells: ['Il y a un problème avec la douche.', "L'eau chaude ne fonctionne toujours pas.", "Est-ce que quelqu'un peut venir voir ?"],
      say: 'Excusez-moi, il y a un problème avec la douche.',
      detail: {
        title: 'Reporting a fault',
        body: 'The shower is the subject of all three. Nobody is accused at any rung, and that is what lets you climb without the conversation turning.',
        say: "L'eau chaude ne fonctionne toujours pas.",
      },
    },
    {
      cells: ["Est-ce que ce serait possible d'avoir une autre chambre ?", 'Ça ne marche toujours pas.', "Est-ce que je peux parler à quelqu'un d'autre ?"],
      say: "Est-ce que ce serait possible d'avoir une autre chambre ?",
      detail: {
        title: 'When it is still not fixed',
        body: 'Toujours pas is the whole of rung 2 in two words. It says this has happened before without saying who let it happen.',
        say: 'Ça ne marche toujours pas.',
      },
    },
  ],
  terms: ['rung', 'move'],
  say: 'Three rungs across the top, and three things you might be trying to do down the side. Nine sentences and then we stop.',
};

/** THE `table`, AND THE ONLY LAYER IT CAN SHIP AT.
 *
 *  `layer: 'more'` is what makes this legal: `density.logic.ts:423` refuses a
 *  `table` at `core` and allows it anywhere else. So this is the first `table`
 *  in a lesson's `sections` across all 69 shipped lessons, and it is off the
 *  core path by necessity rather than by choice.
 *
 *  Its job is the consultable grid — the thing the prompt's fallback would have
 *  put in a reference sheet. It costs no sheet, and a sheet would have been
 *  worse: a `cheatSheet` inside one draws its title and nothing else.
 *
 *  The same nine, one row per rung this time so the climb is what the columns
 *  show. */
const S_HEARD: LessonSection = {
  type: 'table', id: HEARD, layer: 'more',
  title: 'The whole ladder, on one page',
  cols: ['Rung', 'What you say', 'What it costs'],
  // THE SAME NINE as s04-ladder, in the same order, grouped by rung so the
  // climb is audible. `NINE_CELLS` is the single source and the batch asserts
  // both sections resolve to it.
  rows: [
    ['1', 'Est-ce que je peux avoir une serviette ?', 'Nothing'],
    ['1', 'Excusez-moi, il y a un problème avec la douche.', 'Nothing'],
    ['1', "Est-ce que ce serait possible d'avoir une autre chambre ?", 'Nothing'],
    ['2', 'Je vous ai demandé une serviette il y a une heure.', 'A little'],
    ['2', "L'eau chaude ne fonctionne toujours pas.", 'A little'],
    ['2', 'Ça ne marche toujours pas.', 'A little'],
    ['3', 'Je voudrais parler au responsable.', 'A lot'],
    ['3', "Est-ce que quelqu'un peut venir voir ?", 'Less'],
    ['3', "Est-ce que je peux parler à quelqu'un d'autre ?", 'A lot'],
  ],
  rowDetails: [
    { title: 'Rung 1, the request', body: 'Est-ce que je peux is the asking-permission pouvoir, which a2.13 taught. It is the cheapest opening you have and it gives away nothing.', say: "Est-ce que je peux avoir une serviette, s'il vous plaît ?" },
    { title: 'Rung 1, the fault', body: 'Il y a un problème avec puts the fault on the thing. The shower has the problem. You are simply the person mentioning it.', say: 'Excusez-moi, il y a un problème avec la douche.' },
    { title: 'Rung 1, the softest', body: 'Nobody is in this sentence at all. No I wanting and no you doing, just a room and whether it is possible. Keep it for the ask you think might be refused.', say: "Est-ce que ce serait possible d'avoir une autre chambre ?" },
    { title: 'Rung 2, the request again', body: 'This is the one people cannot do. It states a fact about the past hour and stops. No blame, no adjective, no raised voice, and the other person now knows exactly where they stand.', say: 'Je vous ai demandé une serviette il y a une heure.' },
    { title: 'Rung 2, the fault again', body: 'Toujours pas is doing all the work: still not. It carries the whole history of the complaint in two words and names nobody.', say: "L'eau chaude ne fonctionne toujours pas." },
    { title: 'Rung 2, the short version', body: 'When you have already named the thing once, ça is enough. Shorter is stronger here, and it is easier to say without your voice climbing.', say: 'Ça ne marche toujours pas.' },
    { title: 'Rung 3, and it works once', body: 'Je voudrais is already yours from a2.13. What is new is where you spend it. This sentence ends the conversation you were having and starts a different one.', say: "Je voudrais parler au responsable, s'il vous plaît." },
    { title: 'Rung 3, the cheaper door', body: "This asks for a person without asking for the boss. Quelqu'un leaves the desk somewhere to go, which the manager sentence does not.", say: "Est-ce que quelqu'un peut venir voir ?" },
    { title: 'Rung 3, said plainly', body: 'Somebody else. It is direct and it is not rude, and it is the sentence to reach for when the person in front of you has said no twice.', say: "Est-ce que je peux parler à quelqu'un d'autre ?" },
  ],
  terms: ['rung', 'brake'],
};

/** RUNG 1. Groups named by FUNCTION, not by form. Hand-randomised: missions
 *  render authored order exactly, so a check whose answer is always in the same
 *  slot is answerable by position. */
const S_RUNG1: LessonSection = {
  type: 'groupDrill', id: RUNG1, layer: 'core', size: 'lg',
  title: 'Rung 1: ask once, softly',
  groups: [
    {
      label: 'Asking for a thing',
      items: [
        { fr: "Est-ce que je peux avoir une serviette, s'il vous plaît ?", itemId: H(74), en: 'Could I have a towel, please?', note: "a2.13's asking-permission pouvoir, and it is the plain everyday form you already use." },
        { fr: "Pourriez-vous m'apporter une serviette, s'il vous plaît ?", itemId: H(75), en: 'Could you bring me a towel, please?', note: 'One piece, learned whole. Do not take it apart.' },
        { fr: 'Est-ce que je peux avoir un oreiller de plus ?', itemId: H(80), en: 'Could I have one more pillow?', note: 'De plus, at the end, is how you ask for one more of something.' },
      ],
    },
    {
      label: 'Reporting a fault',
      items: [
        { fr: 'Excusez-moi, il y a un problème avec la douche.', itemId: H(76), en: 'Excuse me, there is a problem with the shower.', note: 'The shower has the problem. Nobody caused it.' },
        { fr: 'Excusez-moi, il y a beaucoup de bruit dans le couloir.', itemId: H(81), en: 'Excuse me, there is a lot of noise in the corridor.', note: 'The corridor is noisy. Not the people in it, and not the person you are telling.' },
      ],
    },
    {
      label: 'Check',
      items: [],
      check: {
        q: 'Your room is freezing. You have not mentioned it before. Which one is rung 1?',
        opts: [
          'Il fait très froid dans la chambre.',
          'Vous devez monter le chauffage.',
          'Ça fait deux fois que je le dis.',
        ],
        correct: 0,
        why: 'The room is cold. That is a fact about a room, and it is the first time you have said it. The second puts a stranger under an instruction; the third is rung 2 and you have not earned it yet.',
      },
    },
  ],
  terms: ['rung', 'softener'],
  say: REFRAME,
};

/** RUNG 2. THE WHOLE LESSON EXISTS FOR THIS MISSION.
 *
 *  Rung 1 and rung 2 are ADJACENT and the SAME request appears in both, so the
 *  learner sees what changed and what held still. That is a required layout and
 *  the test asserts it. */
const S_RUNG2: LessonSection = {
  type: 'groupDrill', id: RUNG2, layer: 'core', size: 'lg',
  title: 'Rung 2: say it again, without the person',
  groups: [
    {
      label: 'The same towel, an hour later',
      items: [
        { fr: 'Je vous ai demandé une serviette il y a une heure.', itemId: H(84), en: 'I asked you for a towel an hour ago.', note: 'A fact about the last hour, and then a full stop.' },
        { fr: 'Ça fait deux fois que je demande.', itemId: H(83), en: 'That is twice I have asked.', note: 'Counting is not complaining. Say the number and stop talking.' },
        { fr: "J'ai appelé la réception hier soir, et personne n'est venu.", itemId: H(88), en: 'I called the front desk last night, and nobody came.', note: "Personne n'est venu. Nobody came, and no one is named." },
      ],
    },
    {
      label: 'The same fault, still there',
      items: [
        { fr: "L'eau chaude ne fonctionne toujours pas.", itemId: H(85), en: 'The hot water still is not working.', note: 'Toujours pas is the whole rung, in two words.' },
        { fr: 'Ça ne marche toujours pas.', itemId: H(87), en: 'It still does not work.', note: 'Once the thing has been named, ça is enough.' },
        { fr: "C'est toujours le même problème.", itemId: H(82), en: 'It is still the same problem.', note: 'Le même problème. The problem is the same one; nobody has become the problem.' },
      ],
    },
    {
      label: 'Check',
      items: [],
      check: {
        q: 'You reported the broken lift this morning. It is evening and it is still broken. What is rung 2?',
        opts: [
          'Vous ne faites rien pour cet ascenseur.',
          "L'ascenseur ne fonctionne toujours pas.",
          'Je voudrais parler au responsable.',
        ],
        correct: 1,
        why: 'Toujours pas carries the whole day without accusing anybody of anything. The first makes the desk the subject of a failure. The third is rung 3, and you have only said this once.',
      },
    },
  ],
  terms: ['rung', 'impersonal'],
  say: REFRAME,
};

/** RUNG 3 and its brake. The brake is the teaching move: rung 3 works once. */
const S_RUNG3: LessonSection = {
  type: 'groupDrill', id: RUNG3, layer: 'core', size: 'lg',
  title: 'Rung 3: ask for the person who can fix it',
  groups: [
    {
      label: 'Getting somebody else involved',
      items: [
        { fr: "Je voudrais parler au responsable, s'il vous plaît.", itemId: H(91), en: 'I would like to speak to the manager, please.', note: 'Je voudrais is already yours. What is new is when you spend it.' },
        { fr: "Est-ce que quelqu'un peut venir voir ?", itemId: H(92), en: 'Could somebody come and look?', note: "Quelqu'un asks for a person without asking for the boss." },
        { fr: 'Qui est-ce que je peux voir pour ce problème ?', itemId: H(94), en: 'Who can I see about this problem?', note: 'Still about the problem. The question is who, and the answer is somebody, not you.' },
      ],
    },
    {
      label: 'The brake: what you say instead',
      items: [
        { fr: 'Je repasse dans une heure, alors.', itemId: H(132), en: 'I will come back in an hour, then.', note: 'This is what rung 2 sounds like when it ends well, and it costs you nothing.' },
        { fr: 'Le responsable est là ce soir ?', itemId: H(95), en: 'Is the manager here this evening?', note: 'A question, not a demand. It finds out whether rung 3 is even available before you spend it.' },
      ],
    },
    {
      label: 'Check',
      items: [],
      check: {
        q: 'It is your first sentence of the evening. The shower is cold. What happens if you open with Je voudrais parler au responsable ?',
        opts: [
          'It is the strongest opening, so the problem gets fixed fastest.',
          'You have spent your last move on somebody who would have fixed it anyway.',
          'It is grammatically wrong at the start of a conversation.',
        ],
        correct: 1,
        why: 'It is perfectly correct French and it is the wrong first move. The person at the desk can almost always fix a cold shower, and once you have gone over their head there is nowhere left to go.',
      },
    },
  ],
  terms: ['rung', 'brake'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — THE CHUNKS, AS LEXIS. THE HEAVIEST ACT, 6 MISSIONS.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Four pairs, on a2.13's `s16-register` model, extended. a2.13 is cited by
 *  UNIT ID so the learner sees the through-line rather than meeting the same
 *  contrast twice as if it were new. */
const S_REGISTER: LessonSection = {
  type: 'examples', id: REGISTER, layer: 'core',
  title: 'The same want, four distances',
  examples: [
    { fr: 'Donnez-moi une serviette.', en: 'Give me a towel.', note: 'Correct, and it is what you say to a machine. Nobody at a desk hears it as neutral.' },
    { fr: "Je voudrais une serviette, s'il vous plaît.", en: 'I would like a towel, please.', note: `Yours already, from ${MODAL_UNIT}. This is the floor, and it is fine everywhere.` },
    { fr: 'Est-ce que je peux avoir une serviette ?', en: 'Could I have a towel?', note: `Also ${MODAL_UNIT}'s, and it is the same everyday pouvoir you have been using since then.` },
    { fr: "Pourriez-vous m'apporter une serviette ?", en: 'Could you bring me a towel?', note: 'A piece you learn whole. It is the softest of the four and it costs one extra word.' },
    { fr: "Est-ce que ce serait possible d'avoir une autre chambre ?", en: 'Would it be possible to have a different room?', note: 'Notice there is no you and no I doing anything. The room is what is being discussed.' },
  ],
  terms: ['softener'],
  say: `You met the middle two in ${MODAL_UNIT}. The outside two are new, and neither of them is a rule you have to build.`,
};

/** THE FIVE SOFTENERS. Learned whole. Never named as a family, never as a
 *  tense, never as a form.
 *
 *  `hint` text ellipsises at 60 characters (a2.20), so the hint here is short.
 *  NO `itemIds` on a cardDeck: only `practice` reads it and it draws nothing
 *  (a2.07 shipped it, and it was 1 of 285). The ids reach the SRS through
 *  `DECK_TRANCHE` instead.
 *
 *  Two of the five carry no card of their own because they are ALREADY the
 *  learner's from a2.13, and reteaching them is what the prompt forbids. They
 *  appear on card 1 as the two you have. */
const S_SOFTENERS: LessonSection = {
  type: 'cardDeck', id: SOFTENERS, render: 'deck', layer: 'core', size: 'lg',
  title: 'Five ways in, learned whole',
  hint: 'Swipe. None of these come apart.',
  cards: [
    {
      label: `${MODAL_UNIT}, and already yours`, head: 'The two you have',
      fr: 'je voudrais · est-ce que je peux',
      sub: 'I would like · could I',
      body: `${MODAL_UNIT} gave you these two and told you to learn them the way you learned bonjour. That was right, and they are still the two you will use most. Nothing below replaces them.`,
    },
    {
      label: 'New, and one piece', head: "j'aimerais",
      fr: "J'aimerais changer de chambre, si c'est possible.",
      sub: 'I would like to change rooms, if possible.',
      body: 'Interchangeable with je voudrais almost everywhere, and it sounds a shade warmer. Si c\'est possible on the end is what turns a want into a question.',
    },
    {
      label: 'New, and one piece', head: 'pourriez-vous',
      fr: "Pourriez-vous m'apporter une serviette ?",
      sub: 'Could you bring me a towel?',
      body: 'You have met this already without being told: it is in the alphabet lessons, asking you to spell a street name. It puts the asking on the other person instead of on your own wanting, and that is why it lands softly.',
    },
    {
      label: 'New, and the rarest', head: 'ce serait possible de',
      fr: "Est-ce que ce serait possible d'avoir une autre chambre ?",
      sub: 'Would it be possible to have a different room?',
      body: 'The longest of the five and the one with nobody in it. No I wanting, no you doing. Keep it for the ask you think might be refused.',
    },
    {
      label: 'The rule for all five', head: 'Do not take them apart',
      fr: 'Un bloc, pas une règle.',
      sub: 'A block, not a rule.',
      body: 'These are five fixed pieces. You will meet where they come from much later and it has a name you do not need tonight. Until then they go on the front of a sentence exactly as written.',
    },
  ],
  terms: ['softener'],
};

/** THE REFRAME EARNS ITS KEEP HERE: a personal accusation in, an impersonal
 *  report out. This is the transform, and it is the mission that makes the
 *  reframe a production rule rather than a slogan. */
const S_IMPERSONAL: LessonSection = {
  type: 'groupDrill', id: IMPERSONAL, layer: 'core', size: 'lg',
  title: 'Take the person out',
  groups: [
    {
      label: 'Accusation in, report out',
      items: [
        { fr: "La chambre n'a pas été faite.", itemId: H(96), en: 'The room has not been made up.', note: 'The room was not made up. Whoever did not make it stays out of the sentence.' },
        { fr: "Il n'y a pas de serviettes dans la salle de bain.", itemId: H(97), en: 'There are no towels in the bathroom.', note: 'The towels are absent. Who forgot them is not the news and saying so gets them no faster.' },
        { fr: 'Il manque une couverture dans la chambre.', itemId: H(103), en: 'There is a blanket missing in the room.', note: 'Il manque. Something is missing. Nobody lost it.' },
      ],
    },
    {
      label: 'The thing is the subject',
      items: [
        { fr: 'La fenêtre ne ferme pas.', itemId: H(98), en: 'The window does not close.', note: 'The window is doing the failing.' },
        { fr: 'La clé ne marche pas.', itemId: H(104), en: 'The key does not work.', note: 'The key is doing the failing, not whoever handed it across the desk.' },
        { fr: "L'ascenseur ne fonctionne pas.", itemId: H(101), en: 'The lift is not working.', note: 'Ne fonctionne pas and ne marche pas are the same news. Use either.' },
      ],
    },
    {
      label: 'Loud, cold, and still nobody\'s fault',
      items: [
        { fr: 'Les voisins font du bruit toute la nuit.', itemId: H(102), en: 'The people next door make noise all night.', note: 'The one place a person is allowed in: they are not the person you are talking to.' },
        { fr: 'Il fait très froid dans la chambre.', itemId: H(100), en: 'It is very cold in the room.', note: 'Il fait, with no real subject at all. The most impersonal sentence in the lesson.' },
        { fr: 'Le chauffage est trop fort.', itemId: H(99), en: 'The heating is too high.', note: 'Trop fort, not too hot. The heating is the thing that is too much.' },
      ],
    },
    {
      label: 'Check',
      items: [],
      check: {
        q: 'You want to say: you gave me a dirty room. Which version gets it fixed?',
        opts: [
          "Vous m'avez donné une chambre sale.",
          "La chambre n'a pas été faite.",
          "C'est votre faute, la chambre est sale.",
        ],
        correct: 1,
        why: 'Both of the others are true and both put the person in front of you at the end of an accusation. The middle one describes the same room and asks for the same repair, and it leaves them somewhere to stand.',
      },
    },
  ],
  terms: ['impersonal', 'move'],
  say: REFRAME,
};

/** The opener, and why French front-loads the apology where English tucks it
 *  into the middle. */
const S_OPENER: LessonSection = {
  type: 'cardDeck', id: OPENER, render: 'deck', layer: 'core', size: 'lg',
  title: 'Sorry to bother you, and where it goes',
  hint: 'Swipe. Three cards.',
  cards: [
    {
      label: 'The opener', head: 'Excusez-moi de vous déranger.',
      fr: 'Excusez-moi de vous déranger.',
      sub: 'Sorry to bother you.',
      body: 'It goes first, before you have said what you want. English usually buries the apology halfway in: sorry, but the shower is broken. French puts it on the front, finishes it, and then starts the real sentence.',
    },
    {
      label: 'Warmer, and just as fixed', head: 'désolé de vous déranger',
      fr: 'Désolé de vous déranger, il y a un problème avec la douche.',
      sub: 'Sorry to bother you, there is a problem with the shower.',
      body: 'Same job, slightly less formal, and it joins straight onto the complaint with a comma. Say it as one breath and the whole sentence lands as one polite thing rather than two.',
    },
    {
      label: 'Where it does not go', head: "s'il vous plaît",
      fr: "Une serviette, s'il vous plaît.",
      sub: 'A towel, please.',
      body: "Not everything polite goes at the front. S'il vous plaît goes at the END, and putting it first is one of the few word-order mistakes that sounds odd rather than merely foreign.",
    },
  ],
  terms: ['softener'],
};

/** a2.07 OWNS THE REPAIR MOVE for all eight units (collation §1.6, §7.1). This
 *  unit authors ZERO repair rows. The cards carry the strings so the learner can
 *  read them; the ids reach the SRS through `DECK_TRANCHE`, because `itemIds` on
 *  a cardDeck draws nothing.
 *
 *  Three of the six, not all six: a2.07 teaches the block and this is a
 *  callback, not a re-teach. The tranche releases all six. */
const S_REPAIR: LessonSection = {
  type: 'cardDeck', id: REPAIR, render: 'deck', layer: 'core', size: 'lg',
  title: 'When you did not catch the answer',
  hint: `Swipe. ${REPAIR_UNIT} taught these.`,
  cards: [
    {
      label: `${REPAIR_UNIT}, rung 1`, head: 'Pardon ?',
      fr: 'Pardon ?', sub: '[par-DOHⁿ]',
      body: `${REPAIR_UNIT} authored six of these, ordered by what each one costs you. This is the cheapest thing you can say and it gives away nothing at all.`,
    },
    {
      label: `${REPAIR_UNIT}, rung 3`, head: "Plus lentement, s'il vous plaît.",
      fr: "Plus lentement, s'il vous plaît.", sub: '[plü lahⁿt-MAHⁿ seel voo PLEH]',
      body: 'The first of the six that names what actually went wrong. Asking for a repeat gets you the same sentence at the same speed; asking for slower gets you a different one.',
    },
    {
      label: `${REPAIR_UNIT}, rung 6`, head: "Vous pouvez me l'écrire ?",
      fr: "Vous pouvez me l'écrire, s'il vous plaît ?", sub: "[voo poo-VAY muh lay-KREER seel voo PLEH]",
      body: 'The last one. It concedes that speaking has failed and changes medium, which at a hotel desk is often exactly right: a room number and a breakfast time are easier read than heard.',
    },
    {
      label: 'Why it belongs here', head: 'The desk answers fast',
      fr: 'Vous avez bien noté ? Chambre quatre-vingt-cinq.',
      sub: 'Got that? Room eighty-five.',
      body: `You will climb the whole ladder correctly and then lose the answer, because the reply comes back at the speed the desk always talks. Reach for the lowest of ${REPAIR_UNIT}'s six that will actually fix it.`,
    },
  ],
  terms: ['repairMove', 'desk'],
};

/** QUEBEC. ONE CARD, `layer: 'more'`, and nothing on it is ever the answer to a
 *  scored question. Collation C3.
 *
 *  This build authors ZERO Quebec corpus rows: the divergence is already
 *  published (see the corpus header), so the card carries prose and the term
 *  chip carries the citation. */
const S_QUEBEC: LessonSection = {
  type: 'cardDeck', id: QUEBEC, render: 'deck', layer: 'more', size: 'lg',
  title: 'One word that moves a meal',
  hint: 'One card. Nothing here is tested.',
  cards: [
    {
      label: 'Quebec', head: 'le déjeuner',
      fr: 'Le petit déjeuner est servi de sept heures à dix heures.',
      sub: 'In Quebec that sign would say le déjeuner.',
      body: 'In France le déjeuner is lunch and breakfast is le petit déjeuner. In Quebec le déjeuner is breakfast, le dîner is lunch and le souper is the evening meal. Everything scored in this lesson uses the French of France; this is the one place the two split in a way that changes which door you walk through in the morning.',
    },
  ],
  terms: ['quebec'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — THE TRAP
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE STEPPED SHAPE: rule > cards > audio > drill, with the drill step GATED.
 *  `lesson-contract.test.ts` enforces it for every A2 trapDrill and it caught
 *  both of a2.17's. `size` comes OFF a stepped trapDrill (a2.17 §6).
 *
 *  This is the best trap available in the band, because the learner produces
 *  the wrong answer BECAUSE OF the lesson they were taught four units ago. */
const S_TRAP: LessonSection = {
  type: 'trapDrill', id: TRAP, layer: 'core', swipe: true,
  title: 'The politeness trap',
  rule: {
    title: 'A correct sentence can still be the wrong move',
    // 45 words is the core-screen limit and this body sits at 44. Count before
    // you reword it: validateDensity fires at 46.
    body: 'English says you need to fix this and means please fix this. French hears vous devez as an instruction from a stranger, because that is what it is. Every trap below is a perfect sentence from a2.13, and every one costs you the room.',
  },
  cards: [
    { promptLabel: 'You need to fix the shower', promptSound: 'Vous devez réparer la douche.', fr: 'Excusez-moi, il y a un problème avec la douche.', ipa: '/ɛks.ky.ze.mwa il i.a œ̃ pʁɔ.blɛm a.vɛk la duʃ/', tip: 'Take the person out. The shower has the problem.' },
    { promptLabel: 'You have to change my room', promptSound: 'Vous devez changer ma chambre.', fr: "Est-ce que ce serait possible d'avoir une autre chambre ?", ipa: '/ɛs.kə sə sə.ʁɛ pɔ.sibl da.vwaʁ yn otʁ ʃɑ̃bʁ/', tip: 'Ask whether it is possible. Do not tell them it is required.' },
    { promptLabel: 'You forgot the towels', promptSound: 'Vous avez oublié les serviettes.', fr: "Il n'y a pas de serviettes dans la salle de bain.", ipa: '/il nja pa də sɛʁ.vjɛt dɑ̃ la sal də bɛ̃/', tip: 'The towels are absent. Who forgot them is not the news.' },
    { promptLabel: 'You gave me a dirty room', promptSound: "Vous m'avez donné une chambre sale.", fr: "La chambre n'a pas été faite.", ipa: '/la ʃɑ̃bʁ na pa e.te fɛt/', tip: 'The room was not made up. Say that, and it gets made up.' },
    { promptLabel: 'Send someone up now', promptSound: 'Envoyez quelqu\'un maintenant.', fr: "Est-ce que quelqu'un peut venir voir ?", ipa: '/ɛs.kə kɛl.kœ̃ pø və.niʁ vwaʁ/', tip: 'Rung 3 asks. It does not dispatch.' },
  ],
  drill: [
    { promptSay: 'Vous devez réparer la douche.', opts: ['Excusez-moi, il y a un problème avec la douche.', 'Vous devez réparer la douche tout de suite.', 'Réparez la douche.'], correct: 0 },
    { promptSay: 'Vous avez oublié les serviettes.', opts: ["Vous n'avez pas apporté les serviettes.", "Il n'y a pas de serviettes dans la salle de bain.", 'Apportez les serviettes.'], correct: 1 },
    { promptSay: "Vous m'avez donné une chambre sale.", opts: ["C'est votre faute, la chambre est sale.", 'Nettoyez la chambre.', "La chambre n'a pas été faite."], correct: 2 },
    { promptSay: 'Vous devez changer ma chambre.', opts: ["Est-ce que ce serait possible d'avoir une autre chambre ?", 'Changez ma chambre.', 'Vous devez me donner une autre chambre.'], correct: 0 },
    { promptSay: "Envoyez quelqu'un maintenant.", opts: ['Quelqu\'un doit venir tout de suite.', "Est-ce que quelqu'un peut venir voir ?", 'Vous devez envoyer quelqu\'un.'], correct: 1 },
  ],
  steps: [
    { label: 'The rule', kind: 'rule', title: 'Correct, and still the wrong move' },
    { label: 'The five traps', kind: 'cards', title: 'What English hands you' },
    { label: 'Hear them', kind: 'audio', title: 'The two, side by side' },
    { label: 'Now you pick', kind: 'drill', title: 'Five in a row', gate: true },
  ],
  audio: FR,
  terms: ['impersonal'],
  say: REFRAME,
};

/** `commonErrors` MUST set `swipe`, or it falls to the shared fallback. Two
 *  blank missions have shipped from exactly this
 *  (`MissionSection.tsx:618-635`). `size: 'lg'`, one error per screen. */
const S_ERRORS: LessonSection = {
  type: 'commonErrors', id: ERRORS, layer: 'core', swipe: true, size: 'lg',
  title: 'Four ways this comes apart',
  errors: [
    {
      wrong: 'Vous devez réparer la douche.',
      right: 'Excusez-moi, il y a un problème avec la douche.',
      why: 'Devoir is not wrong and this is not a grammar mistake. It is an instruction handed to a stranger, and the reply you get back will be shaped by that rather than by the shower.',
    },
    {
      wrong: "S'il vous plaît, une serviette.",
      right: "Une serviette, s'il vous plaît.",
      why: "S'il vous plaît goes at the end. Excusez-moi goes at the front. There is no single rule that covers both, which is why the polite word going first is a habit worth unlearning one word at a time.",
    },
    {
      wrong: 'Je voudrais parler au responsable.',
      right: 'Excusez-moi, il y a un problème avec la douche.',
      why: 'Only wrong as an opening. Rung 3 works once, and spending it on your first sentence leaves you nothing when the first two rungs have genuinely failed.',
    },
    {
      wrong: "L'eau chaude ne fonctionne pas encore.",
      right: "L'eau chaude ne fonctionne toujours pas.",
      why: 'Pas encore is not yet, which says you are still waiting patiently. Toujours pas is still not, which says this has already happened once. Rung 2 needs the second one.',
    },
  ],
  terms: ['rung', 'brake'],
};

/** NUMBER PERCEPTION UNDER LOAD. The second trap, and the reason act 4 needs a
 *  listening mission rather than another drill.
 *
 *  `nombres` (448 rows) and `heure-et-date` (471) are fully published and fully
 *  in the seed, so this mission costs zero new corpus beyond the desk lines
 *  that carry it. `hideLines` again: the numbers are the point and a visible
 *  transcript answers every question.
 *
 *  `audio.maxPlays` is validated and read by NO renderer, so a TEF "plays once"
 *  condition cannot be enforced today. This is CO-shaped, not a CO condition,
 *  and the report says so rather than claiming exam fidelity. */
const S_NUMBERS: LessonSection = {
  type: 'listening', id: NUMBERS, layer: 'core', hideLines: true,
  title: 'Four numbers, at desk speed',
  audio: { ...FR, audioFirst: true },
  lines: [
    { fr: 'Vous êtes au deuxième étage, chambre quatre-vingt-cinq.', en: 'You are on the second floor, room eighty-five.' },
    { fr: 'Non, quatre-vingt-cinq, pas soixante-quinze.', en: 'No, eighty-five, not seventy-five.' },
    { fr: 'Votre chambre sera prête à quatorze heures.', en: 'Your room will be ready at two in the afternoon.' },
    { fr: 'Le départ est avant onze heures.', en: 'Check-out is before eleven.' },
  ],
  questions: [
    {
      q: 'Which room number is it, in the end?', opts: ['65', '75', '85', '95'], correct: 2,
      why: 'Quatre-vingt-cinq. Both numbers in that correction end in a number word you know, and the difference is at the front, which is the half you stop listening to.',
    },
    {
      q: 'What time can you get into the room?', opts: ['4pm', '2pm', '11am', '10am'], correct: 1,
      why: "Quatorze heures is 2pm. An English speaker hears fourteen and reaches for four, and the room is then empty for two hours you spent in the lobby.",
    },
    {
      q: 'How many flights of stairs up is the room?', opts: ['One', 'Two', 'Three', 'Four'], correct: 2,
      why: `Le deuxième étage is three flights, because le rez-de-chaussée is not counted as a floor. This is the same counting ${MONEY_UNIT} does not cover and it catches people at every hotel in France.`,
    },
    {
      q: 'By what time must you be out?', opts: ['Onze heures', 'Quatorze heures', 'Dix heures', 'Sept heures'], correct: 0,
      why: 'Avant onze heures. Avant is doing the work: not at eleven, before it.',
    },
  ],
  terms: ['desk'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — PRODUCTION
 * ══════════════════════════════════════════════════════════════════════════ */

/** CHECK-IN. Five turns. Every turn carries `userEn` and two to three `alts`:
 *  `stt.listen()` re-scores the transcript against every accepted answer and
 *  the best match wins, so a learner who says a listed alternative is marked
 *  right rather than "not quite". `scenario.logic.test.ts` requires both.
 *
 *  Turn 3 spells a name back, which is the phone sub-situation folded in and a
 *  call forward to sons.alphabet rather than a rebuild of it. */
const S_CHECKIN: LessonSection = {
  type: 'scenario', id: CHECKIN, layer: 'core',
  title: 'Checking in',
  setting: 'A small hotel in Lyon. Eleven at night, and you have been travelling since six.',
  turns: [
    {
      ai: 'Bonsoir, vous avez une réservation ?', en: 'Good evening, do you have a booking?',
      user: "Oui, j'ai réservé une chambre pour deux nuits.", userEn: 'Yes, I booked a room for two nights.',
      alts: [
        { fr: 'Oui, pour deux nuits.', en: 'Yes, for two nights.' },
        { fr: "Oui, j'ai une réservation.", en: 'Yes, I have a booking.' },
      ],
    },
    {
      ai: "C'est à quel nom, s'il vous plaît ?", en: 'Under what name, please?',
      user: 'Au nom de Bertrand.', userEn: 'Under Bertrand.',
      alts: [
        { fr: 'Bertrand.', en: 'Bertrand.' },
        { fr: "C'est au nom de Bertrand.", en: 'It is under Bertrand.' },
      ],
    },
    {
      ai: 'Vous pouvez épeler votre nom, madame ?', en: 'Could you spell your name, madam?',
      user: 'B, E, R, T, R, A, N, D.', userEn: 'B, E, R, T, R, A, N, D.',
      alts: [
        { fr: 'Oui : B, E, R, T, R, A, N, D.', en: 'Yes: B, E, R, T, R, A, N, D.' },
        { fr: 'Bien sûr. B, E, R, T, R, A, N, D.', en: 'Of course. B, E, R, T, R, A, N, D.' },
      ],
    },
    {
      ai: 'Voici votre clé, chambre soixante-quinze. Votre chambre est au troisième étage.', en: 'Here is your key, room seventy-five. Your room is on the third floor.',
      user: "Merci. L'ascenseur est où, s'il vous plaît ?", userEn: 'Thank you. Where is the lift, please?',
      alts: [
        { fr: "Merci beaucoup. Où est l'ascenseur ?", en: 'Thank you very much. Where is the lift?' },
        { fr: "Merci. Il y a un ascenseur ?", en: 'Thank you. Is there a lift?' },
      ],
    },
    {
      ai: "L'ascenseur est au fond du couloir, à droite. Le petit déjeuner est servi de sept heures à dix heures.", en: 'The lift is at the end of the corridor, on the right. Breakfast is served from seven to ten.',
      user: "Très bien, merci. Bonne soirée.", userEn: 'Very good, thank you. Have a good evening.',
      alts: [
        { fr: "D'accord, merci beaucoup. Bonne soirée.", en: 'All right, thank you very much. Have a good evening.' },
        { fr: 'Parfait, merci. Bonne nuit.', en: 'Perfect, thank you. Good night.' },
      ],
    },
  ],
  terms: ['desk'],
  say: `Five turns. The desk will spell-check your name, so ${ALPHABET_UNIT} is about to earn its keep.`,
};

/** THE COMPLAINT, ESCALATED. Six turns, and THIS IS THE MISSION THE UNIT IS FOR.
 *
 *  KEPT LINEAR. `ScenarioView` walks turns in order and `alts` is an
 *  accepted-answer set, not a branch. The escalation comes out of the learner
 *  because THE RECEPTIONIST REFUSES: turn 2 is a refusal and turn 4 deflects.
 *  That forces rungs 2 and 3 with no branching renderer.
 *
 *  Authored so it can be run as a STANDALONE role play (collation §7.2), so
 *  a2.35 can lift it: the setting states the prior history rather than relying
 *  on this lesson's act 1. */
const S_COMPLAINT: LessonSection = {
  type: 'scenario', id: COMPLAINT, layer: 'core',
  title: 'The complaint, one rung at a time',
  setting: 'The same desk, the next morning. You reported the cold shower last night and nothing has been done.',
  turns: [
    {
      ai: 'Bonjour, je peux vous aider ?', en: 'Good morning, can I help you?',
      user: 'Excusez-moi, il y a un problème avec la douche.', userEn: 'Excuse me, there is a problem with the shower.',
      alts: [
        { fr: "Excusez-moi de vous déranger, il y a un problème avec la douche.", en: 'Sorry to bother you, there is a problem with the shower.' },
        { fr: "Bonjour. Il n'y a pas d'eau chaude dans ma chambre.", en: 'Good morning. There is no hot water in my room.' },
      ],
    },
    {
      // THE REFUSAL. This is what forces rung 2 out of the learner.
      ai: "Je suis désolée, c'est complet ce soir. Je ne peux rien faire ce matin.", en: 'I am sorry, we are full this evening. There is nothing I can do this morning.',
      user: "L'eau chaude ne fonctionne toujours pas.", userEn: 'The hot water still is not working.',
      alts: [
        { fr: 'Ça ne marche toujours pas.', en: 'It still does not work.' },
        { fr: "C'est toujours le même problème.", en: 'It is still the same problem.' },
      ],
    },
    {
      ai: 'Vous avez appelé la réception hier ?', en: 'Did you call the front desk yesterday?',
      user: "J'ai appelé la réception hier soir, et personne n'est venu.", userEn: 'I called the front desk last night, and nobody came.',
      alts: [
        { fr: 'Ça fait deux fois que je demande.', en: 'That is twice I have asked.' },
        { fr: "Oui, hier soir. Personne n'est venu.", en: 'Yes, last night. Nobody came.' },
      ],
    },
    {
      // THE DEFLECTION. Rung 2 has now been said twice and answered with a
      // promise. This is where rung 3 becomes the right move rather than an
      // overreaction.
      ai: 'Je vais voir ce que je peux faire.', en: 'I will see what I can do.',
      user: "Est-ce que quelqu'un peut venir voir ce matin ?", userEn: 'Could somebody come and look this morning?',
      alts: [
        { fr: "Est-ce que quelqu'un peut venir voir ?", en: 'Could somebody come and look?' },
        { fr: 'Qui est-ce que je peux voir pour ce problème ?', en: 'Who can I see about this problem?' },
      ],
    },
    {
      ai: "Le responsable arrive à huit heures demain.", en: 'The manager gets in at eight tomorrow.',
      user: "Je voudrais parler au responsable, s'il vous plaît.", userEn: 'I would like to speak to the manager, please.',
      alts: [
        { fr: 'Le responsable est là ce soir ?', en: 'Is the manager here this evening?' },
        { fr: "Est-ce que je peux parler à quelqu'un d'autre ?", en: 'Could I speak to somebody else?' },
      ],
    },
    {
      ai: 'Je note le problème et je préviens quelqu\'un. Je suis vraiment désolée pour le dérangement.', en: 'I am making a note of the problem and telling somebody. I am very sorry for the trouble.',
      user: 'Merci. Je repasse dans une heure, alors.', userEn: 'Thank you. I will come back in an hour, then.',
      alts: [
        { fr: "D'accord, merci. Je repasse dans une heure.", en: 'All right, thank you. I will come back in an hour.' },
        { fr: 'Merci beaucoup. À tout à l\'heure.', en: 'Thank you very much. See you shortly.' },
      ],
    },
  ],
  terms: ['rung', 'brake'],
  say: 'She is going to say no. That is not a failure of your French, and the next rung is what it is for.',
};

/** WORD MODE. Letter-tile mode is unusable past roughly sixteen letters and
 *  these are long, so `dicteeMode` is checked in the batch rather than assumed.
 *
 *  NOT ONE item carries an apostrophe or a hyphen: `normalizeFr` strips both
 *  (`MissionRich.tsx:1385`), so an item whose only difficulty is one tests
 *  nothing. All four are the desk's formulas, which is the half the learner
 *  cannot yet write down. */
const S_DICTATION: LessonSection = {
  type: 'dictation', id: DICTATION, layer: 'core',
  title: 'Write down what the desk said',
  itemIds: [...DICTEE_IDS],
  terms: ['desk'],
};

/** `practice` renders the SPEAKING drill regardless of `skill`, so `skill:
 *  'write'` is silently a lie and draws no writing surface. This is `speak`,
 *  and every named item carries `voiceflash`, checked against POSTGRES rather
 *  than the seed.
 *
 *  PRACTICE IS MANDATORY: `lesson-contract.test.ts:505` mirrors the publish gate
 *  and fails a non-assessment lesson with no practice section, an empty
 *  `practice.itemIds`, or an empty `Lesson.itemIds`.
 *
 *  Over the ladder's nine cells, which is the block a2.30, a2.31 and a2.32
 *  reuse. */
const S_SPEAK: LessonSection = {
  type: 'practice', id: SPEAK, layer: 'core', skill: 'speak',
  title: 'Say all nine',
  itemIds: [...NINE_IDS],
  terms: ['rung', 'move'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — MEASURE AND CLOSE
 * ══════════════════════════════════════════════════════════════════════════ */

const S_REVIEW: LessonSection = {
  type: 'reviewDeck', id: REVIEW, layer: 'core',
  title: 'Before the test',
  cards: [
    { front: RUNG_1, back: "Est-ce que je peux avoir une serviette, s'il vous plaît ?", say: "Est-ce que je peux avoir une serviette, s'il vous plaît ?" },
    { front: RUNG_2, back: "L'eau chaude ne fonctionne toujours pas.", say: "L'eau chaude ne fonctionne toujours pas." },
    { front: RUNG_3, back: "Je voudrais parler au responsable, s'il vous plaît.", say: "Je voudrais parler au responsable, s'il vous plaît." },
    { front: 'Sorry to bother you', back: 'Excusez-moi de vous déranger.', say: 'Excusez-moi de vous déranger.' },
    { front: 'Would it be possible to…', back: "Est-ce que ce serait possible d'avoir une autre chambre ?", say: "Est-ce que ce serait possible d'avoir une autre chambre ?" },
    { front: 'Still not working', back: 'Ça ne marche toujours pas.', say: 'Ça ne marche toujours pas.' },
    { front: 'Breakfast, seven to ten', back: 'Le petit déjeuner est servi de sept heures à dix heures.', say: 'Le petit déjeuner est servi de sept heures à dix heures.' },
    { front: 'The room will be ready at 2pm', back: 'Votre chambre sera prête à quatorze heures.', say: 'Votre chambre sera prête à quatorze heures.' },
  ],
};

const S_PROGRESS: LessonSection = {
  type: 'progressCheck', id: PROGRESS, layer: 'core',
  title: 'Where you stand',
  body: 'You came in with two settings and you are leaving with three. The one in the middle is the one you will use most, and it is the one almost nobody who learns French from a book ever gets taught.',
  stats: [
    { k: 'Rungs', v: '3' },
    { k: 'Ways in', v: '5' },
    { k: 'Desk formulas', v: '24' },
    { k: 'People blamed', v: '0' },
  ],
};

/* ── The quiz. ONE quiz. Six rounds of five. ───────────────────────────────
 *
 * THE ANSWER FOLD decides the format mix, and this lesson is the band's most
 * hyphen- and elision-dense material: Excusez-moi, pourriez-vous, qu'est-ce
 * que, s'il vous plaît, il y a. `fold()` (`answer.logic.ts:32`) strips accents,
 * case, punctuation, hyphens, the middle dot, BOTH apostrophes and ALL
 * whitespace, so NONE of the following can be tested by `typeIn` or
 * `errorSpot`:
 *
 *   Excusez-moi  ==  Excusez moi  ==  excusezmoi
 *   pourriez-vous == pourriez vous
 *   s'il vous plaît == silvousplait
 *   l'eau == leau
 *
 * BAND RULE, applied to every free-text item here: the expected answer and the
 * most plausible wrong answer were folded before authoring, and the batch
 * asserts `fold(answer) !== fold(distractor)` over every authored near-miss.
 * Every distinction below is a WORD-CHOICE or WORD-ORDER distinction, which
 * survives folding.
 *
 * `errorSpot` is the strongest format here, because rudeness is a
 * whole-sentence property and free text is the only surface that catches
 * `Vous devez réparer ça`. Every `errorSpot` and `typeIn` sets `prompt`, or
 * the learner is asked to fix a phrase that never appears on screen (a1.16).
 * Every `listenChoose` sets `say`, or the card speaks its own English answer
 * (the a1.25 bug).
 *
 * THE QUIZ SHUFFLES OPTIONS AT RUNTIME. Do not hand-randomise it. */

const S_QUIZ: LessonSection = {
  type: 'quiz', id: QUIZ, layer: 'core',
  title: 'À l\'hôtel',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-rungs', label: 'Which rung is this?', targets: ['et-rung-order'],
      say: 'Three rungs. Say which one you are on.',
      questions: [
        { q: 'You have just arrived and there is no soap. Which rung?', format: 'mcq', opts: [RUNG_1, RUNG_2, RUNG_3], correct: 0, why: 'First time you have mentioned it, so it is rung 1. Nothing has failed yet.', ref: RUNG1 },
        { q: 'You asked for soap an hour ago and there is still none. Which rung?', format: 'mcq', opts: [RUNG_1, RUNG_2, RUNG_3], correct: 1, why: 'Something has already been asked and not delivered. That is exactly what rung 2 is for.', ref: RUNG2 },
        { q: 'Two requests, two promises, and still no soap. Which rung?', format: 'mcq', opts: [RUNG_1, RUNG_2, RUNG_3], correct: 2, why: 'The first two rungs have genuinely been tried, so rung 3 is now the right move rather than an overreaction.', ref: RUNG3 },
        { q: "Fill the gap so this is rung 2: L'eau chaude ne fonctionne ___ pas.", format: 'typeIn', prompt: "L'eau chaude ne fonctionne ___ pas.", answer: 'toujours', accept: ['toujours'], why: 'Toujours pas is still not. Pas encore would be not yet, which says you are content to keep waiting.', ref: RUNG2 },
        { q: 'What does rung 3 cost you that rungs 1 and 2 do not?', format: 'mcq', opts: ['Nothing, it is just longer', 'It is less polite French', 'It only works in writing', 'It ends the conversation you were having'], correct: 3, why: 'It moves the problem to somebody who is not there yet, and you cannot un-ask for the manager.', ref: RUNG3 },
      ],
    },
    {
      id: 'r2-person', label: 'Take the person out', targets: ['et-accusation'],
      say: 'The room is the subject. Not the human.',
      questions: [
        { q: 'Fix this so nobody is accused.', format: 'errorSpot', prompt: "Vous n'avez pas fait la chambre.", answer: "La chambre n'a pas été faite.", accept: ["La chambre n'a pas été faite."], why: 'Same room, same repair, and the person behind the desk is no longer the subject of a failure.', ref: IMPERSONAL },
        { q: 'Fix this so nobody is accused.', format: 'errorSpot', prompt: 'Vous avez oublié les serviettes.', answer: "Il n'y a pas de serviettes dans la salle de bain.", accept: ["Il n'y a pas de serviettes dans la salle de bain."], why: 'The towels are absent. Who forgot them is not the news and saying so does not get them delivered faster.', ref: IMPERSONAL },
        { q: 'Fix this so nobody is accused.', format: 'errorSpot', prompt: 'Vous devez réparer la douche.', answer: 'Excusez-moi, il y a un problème avec la douche.', accept: ['Excusez-moi, il y a un problème avec la douche.'], why: 'This is the sentence the whole lesson is built around. Devoir is correct French and it hands a stranger an instruction.', ref: SCENE },
        { q: 'Which of these puts nobody in the sentence at all?', format: 'mcq', opts: ['Il fait très froid dans la chambre.', "Vous m'avez donné une chambre froide.", 'Vous devez monter le chauffage.', "C'est votre faute s'il fait froid."], correct: 0, why: 'Il fait has no real subject. It is the most impersonal sentence in the lesson and it says exactly as much.', ref: IMPERSONAL },
        { q: 'Type the impersonal version: the key does not work.', format: 'typeIn', prompt: 'The key does not work.', answer: 'La clé ne marche pas.', accept: ['La clé ne marche pas.'], why: 'The key is the subject. Not the person who handed it to you.', ref: IMPERSONAL },
      ],
    },
    {
      id: 'r3-softeners', label: 'Five ways in', targets: ['et-softener'],
      say: 'Whole pieces. They do not come apart.',
      questions: [
        { q: 'Which one asks whether a thing is possible, rather than saying what you want?', format: 'mcq', opts: ['Je voudrais une autre chambre.', "J'aimerais une autre chambre.", "Est-ce que ce serait possible d'avoir une autre chambre ?", 'Donnez-moi une autre chambre.'], correct: 2, why: 'It has no I wanting and no you doing. It is the one to keep for an ask you think might be refused.', ref: SOFTENERS },
        { q: 'Complete the softener: ___-vous m\'apporter une serviette ?', format: 'typeIn', prompt: '___-vous m\'apporter une serviette ?', answer: 'Pourriez', accept: ['Pourriez'], why: 'One fixed piece. You have already met it in the alphabet lessons without being told it was anything special.', ref: SOFTENERS },
        { q: 'Listen. Which softener is this?', format: 'listenChoose', say: "J'aimerais changer de chambre, si c'est possible.", opts: ['je voudrais', "j'aimerais", 'pourriez-vous', 'est-ce que je peux'], correct: 1, why: "J'aimerais. Interchangeable with je voudrais almost everywhere, and a shade warmer.", ref: SOFTENERS },
        { q: 'Listen. Which softener is this?', format: 'listenChoose', say: "Est-ce que je peux avoir un oreiller de plus ?", opts: ['ce serait possible de', 'est-ce que je peux', "j'aimerais", 'pourriez-vous'], correct: 1, why: `Est-ce que je peux, the asking-permission pouvoir that ${MODAL_UNIT} taught, in its plain everyday form.`, ref: SOFTENERS },
        { q: 'What are you meant to do with these five?', format: 'mcq', opts: ['Learn them whole and use them as written', 'Learn the rule that builds them', 'Use them only in writing', 'Use them only with strangers'], correct: 0, why: 'They are fixed pieces. Where they come from is a much later lesson and you do not need it tonight.', ref: SOFTENERS },
      ],
    },
    {
      id: 'r4-desk', label: 'What the desk said', targets: ['et-desk-numbers'],
      say: 'Numbers, at the speed they actually arrive.',
      questions: [
        { q: 'Listen. Which floor?', format: 'listenChoose', say: 'Votre chambre est au troisième étage.', opts: ['Ground floor', 'Second', 'Third', 'Fifth'], correct: 2, why: 'Troisième. And le rez-de-chaussée is not counted, so it is four flights of stairs.', ref: ARRIVAL },
        { q: 'Listen. What time will the room be ready?', format: 'listenChoose', say: 'Votre chambre sera prête à quatorze heures.', opts: ['4pm', '2pm', '10am', '11am'], correct: 1, why: 'Quatorze heures is 2pm. Hearing fourteen and reaching for four costs two hours in the lobby.', ref: NUMBERS },
        { q: 'Listen. Which room number is correct?', format: 'listenChoose', say: 'Non, quatre-vingt-cinq, pas soixante-quinze.', opts: ['65', '75', '85', '95'], correct: 2, why: 'Quatre-vingt-cinq. The two numbers differ at the front, which is the half that arrives first and gets least attention.', ref: NUMBERS },
        { q: 'Breakfast is served de sept heures à dix heures. What is the last moment you can go down?', format: 'mcq', opts: ['Seven', 'Nine', 'Ten', 'Half past ten'], correct: 2, why: 'The de … à pair carries both ends and the second number is the one that costs you a meal.', ref: ARRIVAL },
        { q: 'What is the desk asking: C\'est à quel nom ?', format: 'mcq', opts: ['Your room number', 'The name the booking is under', 'Your nationality', 'How many nights'], correct: 1, why: 'Under what name. Four words long, asked at every desk in France, and easy to walk straight past.', ref: ARRIVAL },
      ],
    },
    {
      id: 'r5-order', label: 'Where the polite word goes', targets: ['et-word-order'],
      say: 'Some go at the front. One goes at the end.',
      questions: [
        { q: 'Fix the word order.', format: 'errorSpot', prompt: "S'il vous plaît, une serviette.", answer: "Une serviette, s'il vous plaît.", accept: ["Une serviette, s'il vous plaît."], why: "S'il vous plaît goes at the end. It is one of the few word-order slips in French that sounds odd rather than merely foreign.", ref: OPENER },
        { q: 'Which word goes at the FRONT, before you say what you want?', format: 'mcq', opts: ["s'il vous plaît", 'merci', 'de plus', 'Excusez-moi'], correct: 3, why: 'Excusez-moi opens. It finishes, and then the real sentence starts.', ref: OPENER },
        { q: 'Type the opener that apologises before you have asked for anything.', format: 'typeIn', prompt: '___ de vous déranger.', answer: 'Excusez-moi', accept: ['Excusez-moi', 'Désolé', 'Désolée'], why: 'Excusez-moi de vous déranger, or désolé de vous déranger. Both are fixed and both go first.', ref: OPENER },
        { q: 'You did not catch the room number. Which is the cheapest thing to say?', format: 'mcq', opts: ['Pardon ?', "Vous pouvez me l'écrire, s'il vous plaît ?", 'Je voudrais parler au responsable.', "Plus lentement, s'il vous plaît."], correct: 0, why: `Rung 1 of ${REPAIR_UNIT}'s six. It gives away nothing. Reach for the lowest one that will actually fix the problem.`, ref: REPAIR },
        { q: 'Listen. Which repair move is this?', format: 'listenChoose', say: "Plus lentement, s'il vous plaît.", opts: ['Ask for a repeat', 'Ask for it slower', 'Ask for it in writing', 'Ask what a word means'], correct: 1, why: `The first of ${REPAIR_UNIT}'s six that names what actually went wrong. A repeat gets you the same speed again.`, ref: REPAIR },
      ],
    },
    {
      id: 'r6-brake', label: 'When not to climb', targets: ['et-brake'],
      say: 'The top rung works once.',
      questions: [
        { q: 'Fix this: the corridor is loud and it is the first you have said of it.', format: 'errorSpot', prompt: "Je voudrais parler au responsable, s'il vous plaît.", answer: 'Excusez-moi, il y a beaucoup de bruit dans le couloir.', accept: ['Excusez-moi, il y a beaucoup de bruit dans le couloir.'], why: 'Nothing is wrong with the French. It is rung 3 on a first sentence, and the person at the desk could almost certainly have moved you.', ref: ERRORS },
        { q: 'Type what you say when rung 2 has been answered with a promise and you are willing to wait.', format: 'typeIn', prompt: 'I will come back in an hour, then.', answer: 'Je repasse dans une heure, alors.', accept: ['Je repasse dans une heure, alors.', 'Je repasse dans une heure'], why: 'The brake. It accepts the promise, sets a time, and keeps rung 3 in your pocket.', ref: RUNG3 },
        { q: 'What is wrong with pas encore in L\'eau chaude ne fonctionne pas encore ?', format: 'mcq', opts: ['It is not correct French', 'It is too formal for a hotel', 'It means not yet, so it sounds like you are still content to wait', 'It can only be used about people'], correct: 2, why: 'Perfectly correct, and it undoes the rung. Toujours pas is what carries the fact that this has already happened once.', ref: ERRORS },
        { q: 'Which of these is rung 3 without asking for the boss?', format: 'mcq', opts: ["Je voudrais parler au responsable, s'il vous plaît.", "Est-ce que quelqu'un peut venir voir ?", 'Vous devez envoyer quelqu\'un.', "C'est toujours le même problème."], correct: 1, why: "Quelqu'un asks for a person and leaves the desk somewhere to go. The manager sentence does not.", ref: RUNG3 },
        { q: 'Fix this so it asks rather than instructs.', format: 'errorSpot', prompt: "Envoyez quelqu'un maintenant.", answer: "Est-ce que quelqu'un peut venir voir ?", accept: ["Est-ce que quelqu'un peut venir voir ?"], why: 'Rung 3 asks. It does not dispatch, and a dispatched receptionist is a receptionist who stops helping.', ref: RUNG3 },
      ],
    },
  ],
  terms: ['rung', 'impersonal'],
};

const S_ROUNDUP: LessonSection = {
  type: 'roundup', id: ROUNDUP, layer: 'core',
  title: 'Three settings, not two',
  body: `You arrived with apologetic and furious and nothing in between, which is why the argument at the desk always went one of two ways. ${REFRAME} That is the middle setting, and it is the one that gets the shower fixed.`,
  points: [
    RUNG_1,
    RUNG_2,
    RUNG_3,
    'Five ways in, learned whole, and none of them come apart.',
    'The desk speaks in formulas with no je in them. That is why they are fast, not why they are hard.',
    'Rung 3 works once. Spend it late.',
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

export const SECTIONS: LessonSection[] = [
  S_SCENE, S_GOALS, S_ARRIVAL,
  S_LADDER, S_HEARD, S_RUNG1, S_RUNG2, S_RUNG3,
  S_REGISTER, S_SOFTENERS, S_IMPERSONAL, S_OPENER, S_REPAIR, S_QUEBEC,
  S_TRAP, S_ERRORS, S_NUMBERS,
  S_CHECKIN, S_COMPLAINT, S_DICTATION, S_SPEAK,
  S_REVIEW, S_PROGRESS, S_QUIZ, S_ROUNDUP,
];

const ACTS: LessonAct[] = [
  { id: 'act1', title: 'The sentence that cost you the room', sections: [SCENE, GOALS, ARRIVAL], milestone: 'You have heard the desk at full speed and picked the sentence that works.', estScreens: 9, restPoints: [GOALS] },
  { id: 'act2', title: 'The ladder', sections: [LADDER, HEARD, RUNG1, RUNG2, RUNG3], milestone: 'Three rungs, nine sentences, and the middle one is yours.', estScreens: 16, restPoints: [HEARD] },
  { id: 'act3', title: 'The pieces you do not take apart', sections: [REGISTER, SOFTENERS, IMPERSONAL, OPENER, REPAIR, QUEBEC], milestone: 'Five ways in, and a rule for turning any accusation into a report.', estScreens: 20, restPoints: [OPENER, QUEBEC] },
  { id: 'act4', title: 'Correct, and still wrong', sections: [TRAP, ERRORS, NUMBERS], milestone: 'The English reflex is named, drilled and beaten.', estScreens: 12, restPoints: [ERRORS] },
  { id: 'act5', title: 'At the desk', sections: [CHECKIN, COMPLAINT, DICTATION, SPEAK], milestone: 'You have checked in and climbed the whole ladder out loud.', estScreens: 15, restPoints: [DICTATION] },
  { id: 'act6', title: 'Measure and close', sections: [REVIEW, PROGRESS, QUIZ, ROUNDUP], milestone: 'Thirty questions, and the middle setting is a habit.', estScreens: 12, restPoints: [PROGRESS] },
];

/** Six slices, index-aligned with the six acts. `deckTranche` is the ONLY path
 *  from a lesson into spaced repetition, and it is the mechanism that releases
 *  a cardDeck's ids: `itemIds` on a cardDeck draws nothing.
 *
 *  a2.07's six frozen repair ids are released in act 3, where the repair deck
 *  sits. No tranche releases an item the acts before it have not shown. */
export const DECK_TRANCHE: string[][] = [
  // act 1 — the desk's four opening formulas
  [H(106), H(107), H(110), H(112)],
  // act 2 — the ladder, all nine cells plus the rest of rungs 1 to 3
  [H(74), H(75), H(76), H(78), H(80), H(81), H(82), H(83), H(84), H(85), H(87), H(88), H(89), H(90), H(91), H(92), H(93), H(94), H(95), H(132)],
  // act 3 — the softeners, the impersonal frames, the openers, and a2.07's six.
  //
  // THE THREE `pourriez-vous` IDS HERE WERE UNRELEASABLE UNTIL 2026-08-16, and
  // the repair is why they are back. A `deckTranche` releases through the
  // flashcard deck, so an id with no `flashcard` drill releases NOTHING:
  //
  //   fr.a2.expressions-frequentes.072   Pourriez-vous m'aider…        was {sentence}
  //   fr.a2.expressions-frequentes.077   Excusez-moi, pourriez-vous…   was {sentence}
  //   fr.sons.alphabet.282               Pourriez-vous répéter…        was {sentence, review}
  //
  // These are the exact rows that make Paul's decision item 1 true — the form
  // is already published upstream of a2.13 — and not one of them could be
  // served as a card. `scripts/repair-flashcard-reachability.ts` added the
  // drill, with the duplicate check the flashcard hub needs, and they are
  // released here so the learner meets the upstream exposure the lesson's
  // softener deck talks about.
  [H(79), H(77), H(130), H(131), H(96), H(97), H(98), H(99), H(100), H(101), H(102), H(103), H(104), H(105),
    'fr.a2.expressions-frequentes.072', 'fr.a2.expressions-frequentes.077', 'fr.sons.alphabet.282',
    ...REPAIR_IDS],
  // act 4 — the numbers, and the two rows the number trap is built on
  [H(125), H(126), H(114), H(115)],
  // act 5 — the rest of the desk's voice, met in the two scenarios
  [H(108), H(109), H(111), H(113), H(116), H(117), H(118), H(119), H(120), H(121), H(122), H(123), H(124), H(127), H(128), H(129)],
  // act 6 — the hotel nouns the whole lesson leaned on, released last.
  // `H(53)` (la douche) is back: it carried {voiceflash, review} and no
  // flashcard until 2026-08-16, so a tranche release would have drawn nothing.
  // See the act 3 note and `scripts/repair-flashcard-reachability.ts`.
  [H(1), H(2), H(3), H(15), H(16), H(17), H(18), H(19), H(21), H(26), H(27), H(28), H(53), H(22), H(23), H(6), H(9)],
];

/** Every corpus item this lesson can put in front of a learner: what a section
 *  names, what a tranche releases, and what a term chip cites. */
export const ITEM_IDS: string[] = [...new Set([
  ...DECK_TRANCHE.flat(),
  ...(S_SPEAK as { itemIds: string[] }).itemIds,
  ...DICTEE_IDS,
  // term-chip citations, which lesson-contract.test.ts resolves
  ...Object.values(HOTEL_TERMS).flatMap((t) => (t.examples ?? []).map((e) => e.itemId)),
  // named in prose and carried so the seed can resolve them
  'fr.a2.bricolage.041', 'fr.a1.au-restaurant.209', 'fr.a2.hebergement.062', 'fr.a2.hebergement.068',
  'fr.a1.salutations.353', 'fr.a1.salutations.355', 'fr.a1.expressions-frequentes.002',
  'fr.a1.questions.328', 'fr.sons.alphabet.219', 'fr.sons.alphabet.422', 'fr.sons.alphabet.431',
  QUEBEC_CITE,
  ...IMPORTED.repair,
])];

const ERROR_TRIGGERS: ErrorTrigger[] = [
  { id: 'et-rung-order', description: 'Reaches for the wrong rung for where the conversation actually is.', detectOn: [RUNG1, RUNG2, RUNG3], drill: 'd-rung-sort' },
  { id: 'et-accusation', description: 'Puts the person in front of them at the end of the sentence.', detectOn: [IMPERSONAL, TRAP, ERRORS], drill: 'd-depersonalise' },
  { id: 'et-softener', description: 'Tries to build a softener out of a rule instead of using it whole.', detectOn: [SOFTENERS, REGISTER], drill: 'd-softener-flash' },
  { id: 'et-desk-numbers', description: 'Loses the floor, the room number or the hour in the desk formula carrying it.', detectOn: [ARRIVAL, NUMBERS], drill: 'd-numbers' },
  { id: 'et-word-order', description: "Fronts s'il vous plaît, or buries Excusez-moi mid-sentence.", detectOn: [OPENER, ERRORS], drill: 'd-order' },
  { id: 'et-brake', description: 'Opens at rung 3, or softens rung 2 back down to rung 1 with pas encore.', detectOn: [RUNG3, ERRORS], drill: 'd-brake' },
];

/** `LessonDrill.format` is a LITERAL UNION, not `string`. Typing the array as
 *  `LessonDrill[]` and using `as const` on each format is the two-line fix that
 *  keeps the admin typecheck at zero. */
const DRILLS: LessonDrill[] = [
  {
    id: 'd-rung-sort', title: 'Which rung is this?', format: 'sort' as const,
    buckets: [RUNG_1, RUNG_2, RUNG_3],
    pairs: [
      ["Est-ce que je peux avoir une serviette, s'il vous plaît ?", RUNG_1],
      ['Excusez-moi, il y a un problème avec la douche.', RUNG_1],
      ['Ça fait deux fois que je demande.', RUNG_2],
      ["L'eau chaude ne fonctionne toujours pas.", RUNG_2],
      ["Je voudrais parler au responsable, s'il vous plaît.", RUNG_3],
      ["Est-ce que quelqu'un peut venir voir ?", RUNG_3],
    ],
    coach: 'Ask how many times this has come up. Once is rung 1. Twice is rung 2. Twice and a broken promise is rung 3.',
  },
  {
    id: 'd-depersonalise', title: 'Take the person out', format: 'mcq' as const,
    q: 'You want to say: you did not clean the room.',
    opts: ["Vous n'avez pas nettoyé la chambre.", "La chambre n'a pas été faite.", 'Nettoyez la chambre.'],
    correct: 1,
    why: 'The room is the subject. Nobody is accused, and the same repair gets requested.',
    audio: FR,
  },
  {
    id: 'd-softener-flash', title: 'Five ways in', format: 'flashcard' as const,
    items: [H(130), H(131), H(75), H(79), H(78)],
    coach: 'Read each one whole. If you find yourself working out why it is built that way, stop and just say it.',
  },
  {
    id: 'd-numbers', title: 'Which number was it?', format: 'listenChoose' as const,
    q: 'Listen and pick the room number.',
    opts: ['65', '75', '85', '95'], correct: 2,
    why: 'Quatre-vingt-cinq. The difference is at the front of the word, which is the half that arrives first.',
    audio: { ...FR, clip: 'Non, quatre-vingt-cinq, pas soixante-quinze.' },
  },
  {
    id: 'd-order', title: 'Front or end?', format: 'sort' as const,
    buckets: ['Goes at the front', 'Goes at the end'],
    pairs: [
      ['Excusez-moi', 'Goes at the front'],
      ['Excusez-moi de vous déranger', 'Goes at the front'],
      ['Désolé de vous déranger', 'Goes at the front'],
      ["s'il vous plaît", 'Goes at the end'],
      ['si possible', 'Goes at the end'],
    ],
    coach: 'The apology opens. The please closes. There is no single rule that covers both, so learn them as two habits.',
  },
  {
    id: 'd-brake', title: 'Climb or wait?', format: 'mcq' as const,
    q: 'You reported it once. They said they would look into it, ten minutes ago.',
    opts: ["Je voudrais parler au responsable, s'il vous plaît.", 'Je repasse dans une heure, alors.', "L'eau chaude ne fonctionne toujours pas."],
    correct: 1,
    why: 'Ten minutes is not a broken promise yet. The brake accepts it, sets a time, and keeps rung 3 for when you need it.',
    audio: FR,
  },
  {
    id: 'd-desk-flash', title: 'What the desk always says', format: 'flashcard' as const,
    items: [H(106), H(107), H(110), H(112), H(114), H(115)],
    coach: 'Six formulas. They never change, which is what makes them learnable and what makes them fast.',
  },
  {
    id: 'd-repair-flash', title: 'When you did not catch it', format: 'flashcard' as const,
    items: [...REPAIR_IDS],
    coach: `${REPAIR_UNIT} authored these six, ordered by what each one costs you.`,
  },
];

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: "À l'hôtel",
  level: 'a2',
  tag: 'A2 · LEÇON 28',
  intro: 'Most people have two settings at a hotel desk: apologise, or lose your temper. French has a step in the middle, and this is it.',
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  // The grammar spine. `grammarIntroduced` is the house field (62 of 66
  // lessons); `teaches` was invented by a2.07 and draws nothing.
  grammarAssumed: [
    'vouloir, pouvoir and devoir in the present (a2.13)',
    'est-ce que questions (a1.19)',
    'il y a (a1.21)',
    'the passé composé with avoir (a2.05)',
    'numbers to a hundred (a1.27)',
    'the clock (a1.12)',
  ],
  grammarIntroduced: [
    'toujours pas as the marker that something has already been asked once',
    'il manque and impersonal il fait as ways to report without a subject',
  ],
  // The Den advertises these before the learner taps in. `LessonFeature` is a
  // closed union of 'voiceflash' | 'roleplay' | 'narrated' | 'minimalPairs' |
  // 'assessment'; 'learn' and 'practice' are not members, which the admin
  // typecheck caught and nothing else would have.
  features: ['voiceflash', 'roleplay'],
  // `dueExamSkills()` deep-links a missed PO into this lesson. This is the
  // whole of the exam wiring: ZERO ExamTask rows and ZERO Scenario.exam.
  skill: 'PO',
  acts: ACTS,
  deckTranche: DECK_TRANCHE,
  terms: HOTEL_TERMS,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  reframe: REFRAME,
  overview: {
    titleEn: 'At the Hotel',
    subFr: "À l'hôtel",
    introFr: "La plupart des gens ont deux modes à la réception : s'excuser, ou se fâcher. Le français a une marche au milieu, et c'est celle-ci.",
    minutes: 26,
    difficulty: 3,
  },
};
