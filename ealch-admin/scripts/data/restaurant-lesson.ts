// a2.07.l1 « Au restaurant » — the lesson.
//
// 25 missions, 25 sections, six acts, ONE lesson, ONE quiz.
//
// WHY 25 SECTIONS AND NOT 26. The design and the prompt both specify 24 missions and 26
// sections, with `s16-offscript` as a `listening` section whose whole point is
// that the words are not visible. That depends on `listening.hideLines`, which
// is the band's ONE funded engineering item (collation §3.5, blocking step 3).
// **It has not shipped**: zero matches for `hideLines` across `ealch-v2/src`.
//
// The prompt's own instruction for this case is followed exactly: `s08-fast`
// ships as designed, because its questions ask which STAGE a line belongs to
// and a visible transcript never states a stage; `s16-offscript` is HELD,
// because authoring a section whose point is the hidden words and then shipping
// it with the words visible is worse than not shipping it. When `hideLines`
// lands, s16 is a drop-in between s15-break and s17-repair and act 4 returns to
// four missions.
//
// NOTE, measured on device: the renderer numbers EVERY section as a mission.
// The header reads MISSION 15 / 25 and the list runs 01 to 25, including
// reviewDeck, progressCheck, quiz and roundup, which the design counted as two
// missions between them. The design's missions-vs-sections distinction does
// not exist in LessonPager.
//
// ACT 2 IS THE HEAVIEST ACT, at 6 of 25 missions. That is the shape's whole
// argument: in every shipped A2 lesson the heaviest act is a form the learner
// PRODUCES, and here it is a voice the learner RECEIVES.
//
// REPEATED `scene` IS DEVICE-PROVEN. s01-scene and s15-break are both `scene`
// sections, which no shipped lesson has ever done. Verified on a Pixel 6 before
// authoring: the second scene played narration, choice, both bubble directions
// and the `break` beat with its full body, then resolved. The single-section
// fallback in the prompt is NOT taken. See the corpus header, §8.

import type { Lesson, LessonAct, LessonDrill, LessonSection } from '../../../ealch-v2/src/content/schema.ts';
import { RESTAURANT_TERMS } from './restaurant-terms.ts';
import { UNIT, LESSON_ID, REFRAME, A, Q, REPAIR_IDS, IMPORTED, A129_TRANCHE, PARTITIVE_UNIT, A129_REFRAME, MONEY_UNIT, REGISTER_UNIT, ELISION_UNIT } from './restaurant-corpus.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ── Section ids, named once so acts, quiz refs and rest points cannot drift ── */
const SCENE = 's01-scene';
const GOALS = 's02-goals';
const STAGES = 's03-stages';
const OPEN = 's04-his-open';
const ORDER = 's05-his-order';
const CHECK = 's06-his-check';
const CLOSE = 's07-his-close';
const FAST = 's08-fast';
const PLACE = 's09-place-it';
const FIT = 's10-fit';
const GRAD = 's11-gradient';
const SOME = 's12-some';
const TRAP = 's13-trap';
const ERRORS = 's14-errors';
const BREAK = 's15-break';
const OFFSCRIPT = 's16-offscript';
const REPAIR = 's17-repair';
const DEPLOY = 's18-deploy';
const MENU = 's19-menu';
const WRITE = 's20-write';
const SAY = 's21-say';
const SERVICE = 's22-service';
const DECK = 's23-deck';
const PROGRESS = 's24-check';
const QUIZ = 's25-quiz';
const ROUNDUP = 's26-roundup';

const FR = { lang: 'fr-FR' as const, mode: 'tts' as const, speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — the encounter you cannot start
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 *  could not finish. Nobody is rude and nothing is mispronounced. The learner
 *  has rehearsed their order all the way to the table, delivers it, and is then
 *  asked a question they did not prepare for.
 *
 *  LAYOUT: no scene bubble ends in a spaced « ! ». A spaced exclamation mark
 *  makes the French line drop its last word while the gloss still translates
 *  it (the shipped defect this lesson was warned about), and restaurant copy is
 *  unusually dense with Bonsoir !, Voilà !. Every bubble here ends in a full
 *  stop or a question mark. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration', size: 'md',
    text: 'A bistro in Lyon, a Thursday evening. You have been practising one sentence since the tram, and it is a good sentence.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration', size: 'md',
    text: 'He arrives with the pad already open. You get your sentence out cleanly, all of it, no hesitation.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice', size: 'lg',
    prompt: 'You have rehearsed it. Which one did you rehearse?',
    options: [
      { fr: 'Je veux le poulet.', en: 'the one that says what you want', audio: { lang: 'fr-FR', mode: 'tts' }, outcome: 'breaks' },
      { fr: 'Je voudrais le poulet.', en: 'the one that says what you would like', audio: { lang: 'fr-FR', mode: 'tts' }, outcome: 'works' },
    ],
    followUp: {
      works: 'Yes. One syllable longer, and it is the one a French speaker actually says at a table.',
      breaks: 'Every word is correct and he understood you perfectly. Watch what happens next anyway.',
    },
  },
  {
    kind: 'bubble', from: 'you', reveal: 'auto', size: 'md',
    fr: 'Je veux le poulet.', en: '(I want the chicken.)',
    audio: { lang: 'fr-FR', mode: 'tts' },
  },
  {
    kind: 'bubble', from: 'them', reveal: 'tap', size: 'md',
    speaker: 'The waiter', fr: 'Quelle cuisson ?', en: 'How would you like it cooked?',
    stage: 'Two words. He is already writing. The pad does not stop moving.',
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] },
  },
  {
    kind: 'break', size: 'lg',
    heading: 'You rehearsed the easy half',
    body: 'You got your order out and he answered with a question you had not planned for. It is not the chicken and it is not your accent. You prepared what you would say, and everything he says back is a thing nobody taught you.',
    coach: 'You rehearsed your half. He has a half too, and it is the half that decides how the evening goes.',
    right: { fr: 'Je voudrais le poulet.', en: 'what a French speaker says at a table', ipa: '/ʒə vu.dʁɛ lə pu.lɛ/', respell: '[zhuh voo-DREH luh poo-LEH]' },
    wrong: { fr: 'Je veux le poulet.', en: 'understood perfectly, and one rung too blunt', ipa: '/ʒə vø lə pu.lɛ/', respell: '[zhuh VEU luh poo-LEH]' },
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65], audioFirst: true },
  },
  {
    kind: 'bubble', from: 'them', reveal: 'auto', size: 'md',
    speaker: 'The waiter', fr: 'Et comme boisson ?', en: 'And to drink?',
    stage: 'He has not finished. There are six more of these coming.',
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] },
  },
  {
    kind: 'resolve', size: 'md',
    text: 'He asked four questions before the food arrived. You answered one of them.',
  },
];

const S_SCENE: LessonSection = {
  type: 'scene', id: SCENE, title: 'The Half You Did Not Rehearse', frSub: 'Ce qu\'il dit, lui',
  render: 'screens', layer: 'core', terms: ['hisHalf', 'stage'],
  say: { text: 'You have practised ordering for twenty-three lessons. Nobody has practised him.', voice: 'coach', timing: 'onFirstVisitOnly' },
  setting: { place: 'A bistro with eleven tables and no menu in English', city: 'Lyon', time: 'Thursday, just after eight', ambience: 'room-tone-lobby' },
  beats: SCENE_BEATS,
  closing: { size: 'md', text: 'You never start. He asks, you answer.' },
};

const S_GOALS: LessonSection = {
  type: 'goals', id: GOALS, title: 'What You Will Be Able To Do', frSub: 'Ce que vous saurez faire',
  layer: 'core', terms: ['hisHalf'],
  say: 'Four goals, and every one of them is about catching something rather than saying it.',
  goals: [
    { t: 'Place any line he says', s: 'Catch which stage of the meal you are in, from one short question and nothing else.' },
    { t: 'Catch the verbless ones', s: 'Plate ou gazeuse ? Et ensuite ? Four of his questions have no verb you can anchor on.' },
    { t: 'Survive the deviation', s: 'When the dish is off and your sentence no longer fits, say something rather than freeze.' },
    { t: 'Ask him to say it again', s: 'Six ways of saying you missed it, and what each one costs you to say.' },
  ],
};

/** REQUIRED LAYOUT 1: the eight stages, in order, on one screen.
 *
 *  Eight stages in six rows. `tapTable` is capped at six rows on a Pixel 6 and
 *  the header cells have a glyph budget, so stages 1-2 and 7-8 share a row each.
 *  The eight are still authored in order and the test asserts the SEQUENCE,
 *  not just the presence. `table` is deliberately not used: it is at zero
 *  across all 64 shipped lessons and a table at layer core is a density
 *  failure. The design proposed making a2.07 the product's first `table`;
 *  overruled. */
const S_STAGES: LessonSection = {
  type: 'tapTable', id: STAGES, title: 'The Eight Stages, In Order', frSub: 'Les huit étapes',
  layer: 'core', terms: ['stage', 'hisHalf'],
  say: 'You never start. He asks, you answer. Eight stages, arriving in this order almost every time.',
  audio: { ...FR, recordingId: 'rec-a2-07-stages' },
  cols: ['stage', 'he says', 'you say'],
  rows: [
    {
      cells: ['1 · 2  arrive', 'Vous avez réservé ?', 'Une table pour deux'],
      say: 'Bonsoir, vous avez réservé ?',
      detail: { title: 'Stages 1 and 2', body: 'The greeting and the seating. He asks whether you booked, how many you are, and where you want to sit. Three questions before you have taken your coat off.', say: 'Vous êtes combien ?' },
    },
    {
      cells: ['3  drinks', 'Et comme boisson ?', 'Une carafe d\'eau'],
      say: 'Et comme boisson ?',
      detail: { title: 'Stage 3', body: 'Drinks come before food and they come fast. Plate ou gazeuse ? is two words with no verb in it, and it is the question learners miss most.', say: 'Plate ou gazeuse ?' },
    },
    {
      cells: ['4  order', 'Vous avez choisi ?', 'Je voudrais...'],
      say: 'Vous avez choisi ?',
      detail: { title: 'Stage 4', body: 'The pivot of the whole meal, and it arrives in the passé composé. Et ensuite ? means what is your main course, and nothing in those two words says so.', say: 'Et ensuite ?' },
    },
    {
      cells: ['5  check', 'Tout se passe bien ?', 'Oui, très bien'],
      say: 'Tout se passe bien ?',
      detail: { title: 'Stage 5', body: 'Asked mid-meal with your mouth full. It wants oui or a problem, nothing else. Ça a été ? is the same move said while clearing your plate.', say: 'Ça a été ?' },
    },
    {
      cells: ['6  more', 'Ce sera tout ?', 'Ce sera tout, merci'],
      say: 'Ce sera tout ?',
      detail: { title: 'Stage 6', body: 'The upsell. Dessert, coffee, a digestif. Un café pour finir ? has no verb either, and saying nothing gets you the dessert menu anyway.', say: 'Un café pour finir ?' },
    },
    {
      cells: ['7 · 8  bill', 'Vous réglez comment ?', 'Par carte'],
      say: 'Vous réglez comment ?',
      detail: { title: 'Stages 7 and 8', body: 'Service and the bill. Ensemble ou séparément ? decides how the table pays, and it is asked once, quickly, while he is holding the card machine.', say: 'Ensemble ou séparément ?' },
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — his half, the eight stages in his voice. The heaviest act.
 * ══════════════════════════════════════════════════════════════════════════ */

const S_OPEN: LessonSection = {
  type: 'cardDeck', id: OPEN, title: 'Arriving, Sitting, Drinking', frSub: 'Stages 1 à 3',
  render: 'deck', layer: 'core', size: 'lg', terms: ['stage', 'binary'],
  say: 'Five things he says before the food is even discussed.',
  audio: { ...FR, recordingId: 'rec-a2-07-open' },
  cards: [
    { head: 'Stage 1', fr: 'Bonsoir, vous avez réservé ?', sub: '[bohⁿ-SWAR voo-z a-vay ray-zehr-VAY]', body: 'The first thing said to you, and it is a yes or no question in the passé composé. Non, on n\'a pas réservé is the whole answer.', label: 'he asks · you answer' },
    { head: 'Stage 1', fr: 'Vous êtes combien ?', sub: '[voo-z eht kohⁿ-BYEHⁿ]', body: 'How many of you. He may also say C\'est pour combien de personnes ?, which is the same question with more words in it. Answer with a number and nothing else.', label: 'a number is a whole answer' },
    { head: 'Stage 2', fr: 'En terrasse ou à l\'intérieur ?', sub: '[ahⁿ teh-RASS oo a lehⁿ-tay-RYEUR]', body: 'A two-way question with no verb you need. Pick one of the two words he gave you and hand it straight back.', label: 'two-way' },
    { head: 'Stage 3', fr: 'Et comme boisson ?', sub: '[ay kom bwa-SOHⁿ]', body: 'Comme here means by way of, a use you have not met. Et comme entrée ? at stage 4 is the same frame with a different noun.', label: 'the comme frame' },
    { head: 'Stage 3', fr: 'Une carafe d\'eau, ça ira ?', sub: '[ün ka-RAF DOH sa ee-RA]', body: 'This is a check, not an offer. Ça ira means will that do, and answering it wrongly is how you end up paying for a bottle.', label: 'a check, not an offer' },
  ],
};

const S_ORDER: LessonSection = {
  type: 'cardDeck', id: ORDER, title: 'Taking The Order', frSub: 'Stage 4',
  render: 'deck', layer: 'core', size: 'lg', terms: ['stage', 'secondPart'],
  say: 'The pivot of the meal, and he has four ways of getting to it.',
  audio: { ...FR, recordingId: 'rec-a2-07-order' },
  cards: [
    { head: 'Stage 4', fr: 'Vous avez choisi ?', sub: '[voo-z a-vay shwa-ZEE]', body: 'The question you have been waiting for, and it arrives in the passé composé rather than the present. Have you chosen, not are you choosing.', label: 'the pivot' },
    { head: 'Stage 4', fr: 'Vous avez fait votre choix ?', sub: '[voo-z a-vay FEH votr SHWA]', body: 'The same move in different words. A script is not a fixed string, and this is the proof: two forms, one question.', label: 'same move, other words' },
    { head: 'Stage 4', fr: 'Et ensuite ?', sub: '[ay ahⁿ-SÜEET]', body: 'Two words that mean what is your main course. Nothing in them says so. He says it the moment you finish naming your starter.', label: 'two words, one meaning' },
    { head: 'Stage 4', fr: 'Quelle cuisson ?', sub: '[kehl kü-ee-SOHⁿ]', body: 'Only ever asked about meat, and there are three answers: saignant, à point, bien cuit. He will not offer them to you.', label: 'three answers, none offered' },
  ],
};

const S_CHECK: LessonSection = {
  type: 'cardDeck', id: CHECK, title: 'Checking, And Selling', frSub: 'Stages 5 et 6',
  render: 'deck', layer: 'core', size: 'lg', terms: ['stage'],
  say: 'Mid-meal, and then the part where he wants you to order more.',
  audio: { ...FR, recordingId: 'rec-a2-07-check' },
  cards: [
    { head: 'Stage 5', fr: 'Tout se passe bien ?', sub: '[too suh pass BYEHⁿ]', body: 'Asked mid-meal, mouth full. It wants oui merci or a problem, and it does not want a sentence.', label: 'oui, or a problem' },
    { head: 'Stage 5', fr: 'Ça a été ?', sub: '[sa a ay-TAY]', body: 'Three syllables, said while clearing your plate. A passé composé with no subject you recognise, and it is the hardest short question of the evening.', label: 'the hardest three syllables' },
    { head: 'Stage 5', fr: 'Je vous débarrasse ?', sub: '[zhuh voo day-ba-RASS]', body: 'Shall I clear these away. A question shaped exactly like a statement, marked only by his voice going up at the end.', label: 'a question by intonation alone' },
    { head: 'Stage 6', fr: 'Ce sera tout ?', sub: '[suh suh-ra TOO]', body: 'Will that be all. The answer that fits is his own words handed back: Ce sera tout, merci.', label: 'hand his words back' },
    { head: 'Stage 6', fr: 'Un café pour finir ?', sub: '[uhⁿ ka-FAY poor fee-NEER]', body: 'No verb at all. Most of the upsell is said this way, and Vous prendrez un dessert ? is the same move with a verb put back in.', label: 'no verb' },
  ],
};

/** Carries the band's single Quebec card. Collation §C3, confirmed by Paul
 *  2026-08-15: at most ONE cardDeck card naming Quebec divergence, and nothing
 *  on it is ever the answer to a scored question. Held to three contrasts.
 *  The design asked for a whole Quebec mission and eight rows; overruled. */
const S_CLOSE: LessonSection = {
  type: 'cardDeck', id: CLOSE, title: 'Serving, And The Bill', frSub: 'Stages 7 et 8',
  render: 'deck', layer: 'core', size: 'lg', terms: ['stage'],
  say: 'The last two stages, and one card that is not about France.',
  audio: { ...FR, recordingId: 'rec-a2-07-close' },
  cards: [
    { head: 'Stage 7', fr: 'Je vous apporte ça tout de suite.', sub: '[zhuh voo-z a-port sa too duh SÜEET]', body: 'Nothing is being asked. He is closing the ordering stage, and the only thing required of you is merci.', label: 'nothing is asked' },
    { head: 'Stage 8', fr: 'Vous réglez comment ?', sub: '[voo ray-glay ko-MAHⁿ]', body: 'How are you paying. Par carte or en espèces, and he is already holding the machine. What the total actually is belongs to another lesson.', label: 'how, not how much' },
    { head: 'Stage 8', fr: 'Ensemble ou séparément ?', sub: '[ahⁿ-SAHⁿBL oo say-pa-ray-MAHⁿ]', body: 'Together or separately, asked once and quickly. If you miss it he will ask again as Je vous fais une seule addition ?', label: 'asked once' },
    { head: 'Stage 8', fr: 'Le service est compris.', sub: '[luh sehr-VEESS eh kohⁿ-PREE]', body: 'Service is included, and it is a statement of fact rather than a hint. Le pourboire on top is yours to decide and nobody is waiting for it.', label: 'a fact, not a hint' },
    { head: 'Au Québec', fr: 'l\'addition · la facture', sub: 'France · Québec', body: 'In Quebec the bill is often la facture, the evening meal is le souper rather than le dîner, and the tip is not included the way it is in France. Colour only: everything this lesson drills and quizzes is France-standard French.', label: 'colour, never scored' },
  ],
};

/** THE ELISION DRILL. `hideLines` has not shipped, so the transcript is
 *  visible. This section survives that intact and is the reason it was NOT
 *  held: every question asks WHICH STAGE a line belongs to, and the transcript
 *  never states a stage. Reading the words does not answer it.
 *
 *  s16-offscript, whose questions are about lines the learner must not read,
 *  IS held. See the header.
 *
 *  Every line is authored to stand alone without this lesson's framing, so
 *  a2.35 (Bilan A2) can lift the set as a mixed-situation CO bank. Collation
 *  §7.2 and §1.4. */
const S_FAST: LessonSection = {
  type: 'listening', id: FAST, title: 'Which Stage Was That', frSub: 'À quelle étape ?',
  layer: 'core', terms: ['stage', 'binary'],
  say: 'Six lines at the speed he actually says them. The question is never what the words were.',
  audio: { ...FR, recordingId: 'rec-a2-07-fast', audioFirst: true },
  questionsInModal: true,
  // `hideLines` shipped 2026-08-15 (blocking step 3), after this lesson was
  // first merged. The section was authored to survive WITHOUT it — its
  // questions ask which STAGE a line belongs to and a visible transcript never
  // states a stage — so this is an upgrade rather than a rescue. With the flag
  // the learner cannot read the French while answering, which is what the
  // section was designed for. The lines reveal once every question is answered.
  // THE QUESTIONS REFER TO A LINE BY NUMBER, NEVER BY QUOTING IT. Found on
  // device: the first draft opened each question with the French ("Bonsoir,
  // vous avez réservé ? Where in the evening are you?"), and the question rail
  // renders UNDER the masked cards, so the words were handed straight back and
  // hideLines bought nothing. A question still has to say WHICH line it is
  // about; the line number does that without reprinting the passage.
  hideLines: true,
  lines: [
    { fr: 'Bonsoir, vous avez réservé ?', en: 'Good evening, do you have a reservation?' },
    { fr: 'Plate ou gazeuse ?', en: 'Still or sparkling?' },
    { fr: 'Et ensuite ?', en: 'And then?' },
    { fr: 'Ça a été ?', en: 'Was everything OK?' },
    { fr: 'Un café pour finir ?', en: 'A coffee to finish?' },
    { fr: 'Ensemble ou séparément ?', en: 'Together or separately?' },
  ],
  questions: [
    { q: 'Line 1. Where in the evening are you?', opts: ['You have just walked in', 'You are halfway through the main course', 'He is clearing your plate', 'You are paying'], correct: 0, why: 'Stage 1. It is the first thing said to you, before you have sat down or seen a menu.' },
    { q: 'Line 2. What is he asking about?', opts: ['The steak', 'The bill', 'Water', 'The table'], correct: 2, why: 'Stage 3, drinks. Plate is still and gazeuse is sparkling, and there is no noun in the question to tell you it is about water.' },
    { q: 'Line 3. What does he want to know?', opts: ['Whether you enjoyed it', 'Your main course', 'How you are paying', 'Whether you booked'], correct: 1, why: 'Stage 4. Two words meaning what is next, said the moment you finish naming a starter.' },
    { q: 'Line 4. When is this said?', opts: ['Before you order', 'As you arrive', 'While you read the menu', 'While he clears your plate'], correct: 3, why: 'Stage 5, and it is a passé composé of être. It is asked after eating, never before.' },
    { q: 'Line 5. Which stage?', opts: ['The greeting', 'The drinks order at the start', 'The end of the meal', 'Paying'], correct: 2, why: 'Stage 6, the upsell. Pour finir is what places it: it only makes sense once the food is done.' },
    { q: 'Line 6. What is being decided?', opts: ['How the table pays', 'Where you sit', 'What you drink', 'How the meat is cooked'], correct: 0, why: 'Stage 8. It decides whether one bill comes or several, and it is asked once, quickly.' },
  ],
};

/** The mission that proves the learner holds a SCRIPT and not a word list.
 *  Options are hand-randomised: `MissionRich` renders authored order exactly
 *  and only the quiz shuffles, so a correct answer sitting first every time
 *  gives itself away. */
/** NOT `size: 'xl'`. `lesson-contract.test.ts:454` forbids an xl group that
 *  carries BOTH items and a check: GroupDrillView renders an xl group as a
 *  filling SwipeDeck and the check stacks underneath it, below the fold, so the
 *  learner never answers it. This build authored xl first and the contract test
 *  caught it. Every group here carries items AND its check, which is legal at
 *  the default size and is what s12-some and s18-deploy also do. */
const S_PLACE: LessonSection = {
  type: 'groupDrill', id: PLACE, title: 'Put It Where It Belongs', frSub: 'Chaque phrase à sa place',
  layer: 'core', terms: ['stage', 'hisHalf'],
  say: 'You never start. He asks, you answer. Six groups, one per part of the evening, and no clock on any of them.',
  groups: [
    {
      label: 'as you arrive',
      items: [
        { fr: 'Bonsoir, vous avez réservé ?', en: 'Good evening, do you have a reservation?', note: 'stage 1' },
        { fr: 'Vous êtes combien ?', en: 'How many of you are there?', note: 'stage 1' },
        { fr: 'En terrasse ou à l\'intérieur ?', en: 'On the terrace or inside?', note: 'stage 2' },
      ],
      check: { q: 'He says « Suivez-moi, je vous prie. » What is happening?', opts: ['He is taking your order', 'He is bringing the bill', 'He is asking what you want to drink', 'He is walking you to a table'], correct: 3, why: 'Stage 2. It is an instruction rather than a question, and no answer is wanted.' },
    },
    {
      label: 'drinks first',
      items: [
        { fr: 'Et comme boisson ?', en: 'And to drink?', note: 'stage 3' },
        { fr: 'Plate ou gazeuse ?', en: 'Still or sparkling?', note: 'stage 3' },
        { fr: 'Une carafe d\'eau, ça ira ?', en: 'A jug of water, will that do?', note: 'stage 3' },
      ],
      check: { q: 'Which of these is a check rather than an offer?', opts: ['Et comme boisson ?', 'Une carafe d\'eau, ça ira ?', 'Plate ou gazeuse ?', 'Vous prendrez un apéritif ?'], correct: 1, why: 'Ça ira means will that do. He has already decided; he is confirming, and saying nothing means yes.' },
    },
    {
      label: 'ordering',
      items: [
        { fr: 'Vous avez choisi ?', en: 'Have you decided?', note: 'stage 4' },
        { fr: 'Et ensuite ?', en: 'And then?', note: 'stage 4' },
        { fr: 'Quelle cuisson ?', en: 'How would you like it cooked?', note: 'stage 4' },
      ],
      check: { q: 'You have just said your starter. He says « Et ensuite ? »', opts: ['He wants your main course', 'He wants to know if you are finished', 'He is offering dessert', 'He is asking how you will pay'], correct: 0, why: 'Stage 4. Ensuite is next, and at this point in the evening next means the main course.' },
    },
    {
      label: 'during the meal',
      items: [
        { fr: 'Tout se passe bien ?', en: 'Is everything all right?', note: 'stage 5' },
        { fr: 'Ça a été ?', en: 'Was everything OK?', note: 'stage 5' },
        { fr: 'Je vous débarrasse ?', en: 'Shall I clear these away?', note: 'stage 5' },
      ],
      check: { q: 'Which one is asked AFTER you have finished eating?', opts: ['Tout se passe bien ?', 'Et comme boisson ?', 'Ça a été ?', 'Vous avez réservé ?'], correct: 2, why: 'Ça a été is a past tense. Tout se passe bien is a present, and it is asked while you are still eating.' },
    },
    {
      label: 'the upsell',
      items: [
        { fr: 'Ce sera tout ?', en: 'Will that be all?', note: 'stage 6' },
        { fr: 'Vous prendrez un dessert ?', en: 'Will you have a dessert?', note: 'stage 6' },
        { fr: 'Un café pour finir ?', en: 'A coffee to finish?', note: 'stage 6' },
      ],
      check: { q: 'What answers « Ce sera tout ? » with the least effort?', opts: ['Je voudrais un dessert et un café.', 'Ce sera tout, merci.', 'Combien ça coûte ?', 'Plate, s\'il vous plaît.'], correct: 1, why: 'His own words handed back. Repeating the frame you were given is faster and more natural than building a new sentence.' },
    },
    {
      label: 'paying',
      items: [
        { fr: 'Vous réglez comment ?', en: 'How are you paying?', note: 'stage 8' },
        { fr: 'Ensemble ou séparément ?', en: 'Together or separately?', note: 'stage 8' },
        { fr: 'Le service est compris.', en: 'Service is included.', note: 'stage 8' },
      ],
      check: { q: '« Vous réglez comment ? » is asking about', opts: ['The amount', 'The tip', 'Which dish was yours', 'The method'], correct: 3, why: 'Comment is how, not how much. Par carte answers it in two words.' },
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — your slot, and the register in it
 * ══════════════════════════════════════════════════════════════════════════ */

/** REQUIRED LAYOUT 2: his question and the answer that fits, adjacent. */
const S_FIT: LessonSection = {
  type: 'cardDeck', id: FIT, title: 'The Answer That Fits', frSub: 'La réponse qui va avec',
  render: 'deck', layer: 'core', size: 'lg', terms: ['secondPart', 'binary'],
  say: 'You never start. He asks, you answer. His question on top, what a French speaker says underneath.',
  audio: { ...FR, recordingId: 'rec-a2-07-fit' },
  cards: [
    { head: 'Et comme boisson ?', fr: 'Une carafe d\'eau, s\'il vous plaît.', sub: 'or just: De l\'eau, merci.', body: 'A drink, not a sentence about drinks. The shortest answer that names the thing is the right one.', label: 'name the thing' },
    { head: 'Plate ou gazeuse ?', fr: 'Plate.', sub: 'one word, and it is enough', body: 'He gave you both words. Give one of them back. Adding s\'il vous plaît is plenty of politeness for a two-word question.', label: 'hand one word back' },
    { head: 'Vous avez choisi ?', fr: 'Je voudrais le plat du jour.', sub: 'or: Je vais prendre le plat du jour.', body: `This is the one slot where you produce a full sentence, and it is the sentence you have been rehearsing since ${unitRef('a1.29')}.`, label: 'your one full sentence' },
    { head: 'Quelle cuisson ?', fr: 'À point, s\'il vous plaît.', sub: 'saignant · à point · bien cuit', body: 'Three words exist and he will offer none of them. À point is the middle one and the safe one.', label: 'three words, unoffered' },
    { head: 'Ce sera tout ?', fr: 'Ce sera tout, merci.', sub: 'his frame, handed back', body: 'Or Non, je voudrais aussi un café. Either way you are reusing his words rather than building your own.', label: 'reuse the frame' },
    { head: 'Vous réglez comment ?', fr: 'Par carte, s\'il vous plaît.', sub: 'or: En espèces.', body: 'Two words. The amount is not being discussed and you do not need to discuss it.', label: 'two words' },
  ],
};

/** THE POLITENESS GRADIENT. Five rungs, capped at six rows for the Pixel 6.
 *  This is a five-rung ORDERING gradient inside the restaurant frame and
 *  nothing more. The general register ladder is a2.29's, once, for all eight
 *  units. `pourriez-vous` appears nowhere in this lesson: it is unsettled
 *  pending the a2.13 amendment, which is specified and NOT applied. */
const S_GRAD: LessonSection = {
  type: 'tapTable', id: GRAD, title: 'Five Ways To Order', frSub: 'Du plus doux au plus direct',
  layer: 'core', terms: ['gradient'],
  say: 'Five rungs. Four of them are fine. One of them is the reason the waiter paused.',
  audio: { ...FR, recordingId: 'rec-a2-07-grad' },
  cols: ['you say', 'what it means', 'where it is safe'],
  rows: [
    { cells: ['je voudrais', 'I would like', 'anywhere, always'], say: 'Je voudrais le poulet.', detail: { title: '« je voudrais »', body: 'The default, and the one to reach for if you only keep one. It is soft, it is short, and no French speaker has ever been surprised by it.', say: 'Je voudrais le poulet.' } },
    { cells: ['je prendrais', 'I would rather have', 'anywhere, slightly softer'], say: 'Je prendrais plutôt le poisson.', detail: { title: '« je prendrais »', body: 'Softer still, and useful when you are changing your mind out loud. Learn it as one fixed phrase; the family it comes from is another lesson.', say: 'Je prendrais plutôt le poisson.' } },
    { cells: ['je prends', 'I\'ll have', 'anywhere, brisk'], say: 'Je prends le plat du jour.', detail: { title: '« je prends »', body: 'Present tense, brisk, completely normal. This is what people at the next table are saying.', say: 'Je prends le plat du jour.' } },
    { cells: ['je vais prendre', 'I\'m going to have', 'anywhere, decided'], say: 'Je vais prendre le plat du jour.', detail: { title: '« je vais prendre »', body: `The futur proche, which ${unitRef('a2.19')} already gave you. It sounds like a decision just made, which at a table is exactly what it is.`, say: 'Je vais prendre le plat du jour.' } },
    { cells: ['ce sera', 'it\'ll be', 'anywhere, confident'], say: 'Ce sera le menu du jour.', detail: { title: '« ce sera »', body: 'The flattest of the five and still perfectly polite. Pour moi, ce sera l\'entrecôte is how it is said at a table of four.', say: 'Pour moi, ce sera l\'entrecôte.' } },
    { cells: ['je veux', 'I want', 'not at a table'], say: 'Je voudrais le poulet.', detail: { title: '« je veux » is the one to drop', body: 'Grammatical, understood, and wrong here. It is what a child says about a toy. Nobody will correct you, and that is exactly why nobody has told you.', say: 'Je voudrais le poulet.' } },
  ],
};

/** THE PARTITIVE, AS RECALL. a1.29 (seq 8, shipped, this unit's declared
 *  prereq) already delivered all six partitive claims. This is ONE groupDrill
 *  at the point of ordering and it names a1.29 in its `say`. A second teaching
 *  pass would break doctrine §B.5 and collide with a1-29-partitifs.test.ts,
 *  which asserts partitive claims across the whole seed. No new partitive
 *  claim is made anywhere in this lesson. */
const S_SOME: LessonSection = {
  type: 'groupDrill', id: SOME, title: 'Un Or Du, At The Table', frSub: 'Au moment de commander',
  layer: 'core', terms: ['someOfIt'],
  say: `${Cap(unitRef(PARTITIVE_UNIT))} settled this one: ${A129_REFRAME} Nothing new here, just the moment you have to run it.`,
  groups: [
    {
      label: 'one of them',
      items: [
        { fr: 'un café', en: 'a coffee', note: 'one cup, countable' },
        { fr: 'une carafe d\'eau', en: 'a jug of water', note: 'one jug' },
        { fr: 'un verre de vin', en: 'a glass of wine', note: 'one glass' },
      ],
      check: { q: 'You want one cup of coffee. Which one?', opts: ['du café', 'de le café', 'un café', 'des café'], correct: 2, why: `A cup is one of them, and un is the word for one of them. This is ${unitRef('a1.29')} unchanged.` },
    },
    {
      label: 'some of it',
      items: [
        { fr: 'du pain', en: 'some bread', note: 'an amount, uncounted' },
        { fr: 'de l\'eau', en: 'some water', note: 'before a vowel sound' },
        { fr: 'de la salade', en: 'some salad', note: 'feminine' },
      ],
      check: { q: 'He asks if you want bread with the meal. You do, and not a specific loaf.', opts: ['du pain', 'un pain', 'le pain', 'des pain'], correct: 0, why: 'An amount nobody has counted. Du is some of it, and un pain would be one whole loaf on the table.' },
    },
    {
      label: 'and after a negative',
      items: [
        { fr: 'Je ne mange pas de viande.', en: 'I don\'t eat meat.', note: 'de, not du' },
        { fr: 'Il n\'y a plus de saumon.', en: 'There\'s no more salmon.', note: 'de, not du' },
        { fr: 'Sans sucre, merci.', en: 'Without sugar, thanks.', note: 'no article at all' },
      ],
      check: { q: 'You are telling him you do not eat meat.', opts: ['Je ne mange pas du viande.', 'Je ne mange pas de la viande.', 'Je ne mange pas la viande.', 'Je ne mange pas de viande.'], correct: 3, why: `After a negative it is de, never du. ${Cap(unitRef('a1.29'))} taught this one; this is the table it happens at.` },
    },
  ],
};

/** THE FOUR ENGLISH REFLEXES, in the stepped shape the A2 band settled:
 *  rule > cards > audio > drill, `swipe: true`, a `say`, and `gate: true` on
 *  the drill step. `lesson-contract.test.ts` has enforced this since
 *  2026-08-13 and it caught both of a2.17's. Drill options hand-randomised. */
const S_TRAP: LessonSection = {
  type: 'trapDrill', id: TRAP, title: 'What English Hands You', frSub: 'Les réflexes anglais',
  layer: 'core', swipe: true, terms: ['gradient', 'secondPart'],
  say: 'Four reflexes, and every one of them is grammatical French that lands wrong at a table.',
  audio: { ...FR, recordingId: 'rec-a2-07-trap' },
  rule: {
    title: 'He asked a short question. Answer it short.',
    body: 'English answers a question at a table with a sentence. French answers it with the thing. When he says two words, two words back is not rude, it is the register.',
  },
  steps: [
    { kind: 'rule', label: 'The rule', title: 'Short Question, Short Answer' },
    { kind: 'cards', label: 'The four', title: 'What Goes Wrong' },
    { kind: 'audio', label: 'Hear it', title: 'Both Versions' },
    { kind: 'drill', label: 'Now you', title: 'Pick The One That Fits', gate: true },
  ],
  cards: [
    { promptLabel: 'the sentence English wants', promptSound: 'Je veux le poulet.', fr: 'Je veux le poulet.', ipa: '/ʒə vø lə pu.lɛ/', tip: 'Every word correct. It is what a child says about a toy, and at a table it is the one rung too far down.' },
    { promptLabel: 'answering two words with twelve', promptSound: 'Je voudrais de l\'eau plate, s\'il vous plaît, merci beaucoup.', fr: 'Plate.', ipa: '/plat/', tip: 'He said Plate ou gazeuse ?. One of his own two words is the whole answer.' },
    { promptLabel: 'answering the wrong question', promptSound: 'Ça fait combien ?', fr: 'Par carte.', ipa: '/paʁ kaʁt/', tip: 'Vous réglez comment ? is how, not how much. The amount is on the bill in front of you.' },
    { promptLabel: 'silence when the script breaks', promptSound: '...', fr: 'Alors qu\'est-ce que vous me conseillez ?', ipa: '/a.lɔʁ kɛs kə vu mə kɔ̃.sɛ.je/', tip: 'The dish is off. Freezing costs you the turn; handing the choice back keeps it.' },
  ],
  drill: [
    { promptSay: 'Plate ou gazeuse ?', opts: ['Je voudrais de l\'eau qui n\'est pas gazeuse.', 'Plate.', 'Oui, s\'il vous plaît.'], correct: 1 },
    { promptSay: 'Vous avez choisi ?', opts: ['Je voudrais le poulet.', 'Je veux le poulet.', 'Le poulet, oui.'], correct: 0 },
    { promptSay: 'Vous réglez comment ?', opts: ['Ça fait combien ?', 'Oui, merci.', 'Par carte, s\'il vous plaît.'], correct: 2 },
    { promptSay: 'Quelle cuisson ?', opts: ['Oui, s\'il vous plaît.', 'À point, s\'il vous plaît.', 'Je ne sais pas.'], correct: 1 },
    { promptSay: 'Je suis désolé, il n\'y en a plus.', opts: ['Alors qu\'est-ce que vous me conseillez ?', 'Oui.', 'Je veux le poulet.'], correct: 0 },
    { promptSay: 'Ce sera tout ?', opts: ['Combien ?', 'Je ne comprends pas le menu.', 'Ce sera tout, merci.'], correct: 2 },
  ],
};

/** `swipe: true` is MANDATORY on commonErrors or it draws a blank screen. */
const S_ERRORS: LessonSection = {
  type: 'commonErrors', id: ERRORS, title: 'What Goes Wrong', frSub: 'Les erreurs fréquentes',
  layer: 'core', size: 'lg', swipe: true, terms: ['gradient', 'secondPart'],
  say: 'Four, one per screen. None of them stops you being understood, and that is the problem.',
  errors: [
    { wrong: 'Je veux le poulet.', right: 'Je voudrais le poulet.', why: 'Understood perfectly and one rung too blunt for a table. Nobody corrects it, so nobody learns it.' },
    { wrong: 'Oui, s\'il vous plaît.', right: 'Plate.', why: 'He asked Plate ou gazeuse ?, which is not a yes or no question. Yes answers nothing and he has to ask again.' },
    { wrong: 'Ça fait combien ?', right: 'Par carte.', why: 'Vous réglez comment ? asks the method. Comment is how; combien is how much, and it is a different question at a different moment.' },
    { wrong: 'Je ne mange pas du viande.', right: 'Je ne mange pas de viande.', why: `After a negative it is de, never du. ${Cap(unitRef('a1.29'))} taught this one; the table is just where you have to run it fast.` },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — when the script breaks
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE SECOND `scene` IN ONE LESSON, and no shipped lesson has ever done it.
 *  Device-proven on a Pixel 6 before authoring (corpus header §8), so the
 *  prompt's single-section trapDrill fallback is NOT taken.
 *
 *  « Il n'y en a plus » is UNANALYSED LEXIS. y and en belong to a2.25, which
 *  HAS shipped. The chunk is never glossed, never decomposed, and never in a
 *  scored surface that turns on the pronouns. The `.169` row gives the same
 *  news without them, so a learner who wants to parse something can. */
const BREAK_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration', size: 'md',
    text: 'Later the same evening. You have caught his questions, you have answered them, and it has gone well.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble', from: 'you', reveal: 'auto', size: 'md',
    fr: 'Je voudrais le saumon, s\'il vous plaît.', en: '(I would like the salmon, please.)',
    audio: { lang: 'fr-FR', mode: 'tts' },
  },
  {
    kind: 'bubble', from: 'them', reveal: 'tap', size: 'md',
    speaker: 'The waiter', fr: 'Je suis désolé, il n\'y en a plus.', en: 'I\'m sorry, there\'s none left.',
    stage: 'He is not going anywhere. He is waiting, and so is the table behind you.',
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] },
  },
  {
    kind: 'choice', size: 'lg',
    prompt: 'Your script has no slot for this. What comes out of your mouth?',
    options: [
      { fr: '...', en: 'nothing, while you rebuild the sentence', audio: { lang: 'fr-FR', mode: 'tts' }, outcome: 'breaks' },
      { fr: 'Alors qu\'est-ce que vous me conseillez ?', en: 'hand the choice back to him', audio: { lang: 'fr-FR', mode: 'tts' }, outcome: 'works' },
    ],
    followUp: {
      works: 'Yes. You cannot choose, so make him choose. It keeps the turn and it is what the table next to you would do.',
      breaks: 'Six seconds of silence, and then he starts suggesting things at full speed. You have lost the turn.',
    },
  },
  {
    kind: 'break', size: 'lg',
    heading: 'Learn the shape, not the pieces',
    body: 'Il n\'y en a plus is one sound that means there is none left. Take it whole. What is inside it belongs to another lesson, and pulling it apart at a table costs you the six seconds you needed.',
    coach: 'Recognise the chunk, reach for the hand-back. That is the whole of act four.',
    right: { fr: 'Alors qu\'est-ce que vous me conseillez ?', en: 'hand the choice back, and keep the turn', ipa: '/a.lɔʁ kɛs kə vu mə kɔ̃.sɛ.je/', respell: '[a-LOR kess kuh voo muh kohⁿ-seh-YAY]' },
    wrong: { fr: 'Euh... je voudrais... euh...', en: 'rebuilding the sentence while he waits', ipa: '/ø ʒə vu.dʁɛ ø/', respell: '[EU zhuh voo-DREH EU]' },
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65], audioFirst: true },
  },
  {
    kind: 'bubble', from: 'them', reveal: 'auto', size: 'md',
    speaker: 'The waiter', fr: 'Le bar est très bien ce soir.', en: 'The sea bass is very good tonight.',
    stage: 'He had an answer ready the whole time.',
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] },
  },
  {
    kind: 'resolve', size: 'md',
    text: 'You did not need the salmon sentence. You needed one question, and it is the same question every time.',
  },
];

const S_BREAK: LessonSection = {
  type: 'scene', id: BREAK, title: 'When It Goes Off Script', frSub: 'Quand ça déraille',
  render: 'screens', layer: 'core', terms: ['deviation', 'handBack', 'chunk'],
  say: { text: 'Everything so far assumed the evening goes to plan. This one does not.', voice: 'coach', timing: 'onFirstVisitOnly' },
  setting: { place: 'The same bistro, forty minutes later', city: 'Lyon', time: 'Thursday, nearly nine', ambience: 'room-tone-lobby' },
  beats: BREAK_BEATS,
  closing: { size: 'md', text: 'You cannot choose, so make him choose.' },
};

/** SHIPPED 2026-08-15, once `listening.hideLines` landed. This section was HELD
 *  on the first merge, because its questions are about lines the learner must
 *  NOT read, and shipping it with a visible transcript would have been worse
 *  than not shipping it at all.
 *
 *  `hideLines: true` is load-bearing here in a way it is not on s08-fast: every
 *  question below is answerable off the French if the French is on screen.
 *
 *  The six lines belong to NONE of the eight stages, which is the point. The
 *  learner has just memorised a map; act 4 is where the encounter walks off it.
 *  Each line stands alone without this lesson's framing so a2.35 can lift the
 *  set (collation §7.2). */
const S_OFFSCRIPT: LessonSection = {
  type: 'listening', id: OFFSCRIPT, title: 'None Of The Eight', frSub: 'Hors script',
  layer: 'core', terms: ['deviation', 'rung', 'stage'],
  say: 'Six more lines, and not one of them is on the map you just learned. The question is what he wants from you.',
  audio: { ...FR, recordingId: 'rec-a2-07-offscript', audioFirst: true },
  questionsInModal: true,
  hideLines: true,
  lines: [
    { fr: 'C\'est à quel nom ?', en: 'What name is it under?' },
    { fr: 'Vous permettez ?', en: 'May I?' },
    { fr: 'Attention, c\'est très chaud.', en: 'Careful, it\'s very hot.' },
    { fr: 'Il vous faut autre chose ?', en: 'Do you need anything else?' },
    { fr: 'On ferme la cuisine dans dix minutes.', en: 'The kitchen closes in ten minutes.' },
    { fr: 'Je reviens tout de suite.', en: 'I\'ll be right back.' },
  ],
  questions: [
    { q: 'Line 1. What does he want from you?', opts: ['A name', 'A number', 'Your order', 'A drink choice'], correct: 0, why: 'He is looking for a booking. Your surname is the whole answer, and it is the word learners are least ready to say aloud.' },
    { q: 'Line 2. What should you do?', opts: ['Move your arm and say je vous en prie', 'Answer the question', 'Order something', 'Ask for the bill'], correct: 0, why: 'It is a courtesy said while already reaching past you. Nothing is really being asked, and the only wrong answer is a long one.' },
    { q: 'Line 3. Is he asking you anything?', opts: ['No, he is warning you', 'Yes, about your order', 'Yes, about the bill', 'Yes, about the temperature you want'], correct: 0, why: 'A warning, not a question. A learner running the script hears a question in it and answers oui, which is how you burn your hand.' },
    { q: 'Line 4. Which stage does this belong to?', opts: ['None, it is asked mid-meal', 'Stage 6, the upsell', 'Stage 1, arriving', 'Stage 8, paying'], correct: 0, why: 'It looks like the upsell and is not: this is about bread or water while you eat, not about buying another course.' },
    { q: 'Line 5. What does it mean for you?', opts: ['Order now or not at all', 'The restaurant is closing now', 'Your food is ready', 'You must pay now'], correct: 0, why: 'A statement that is really an instruction. Nothing in it is a question and everything in it is urgent.' },
    { q: 'Line 6. You did not catch it at all. Which rung?', opts: ['Pardon ?', 'Vous pouvez me l\'écrire, s\'il vous plaît ?', 'Qu\'est-ce que ça veut dire ?', 'Say nothing and wait'], correct: 0, why: 'Rung 1, and it costs nothing. He is walking away mid-turn, so a cheap rung now beats an expensive one later.' },
  ],
};

/** THE BAND'S OWNS. Six cards, each quoting one of the six FROZEN itemIds, in
 *  face-cost order. Collation §1.6 and §7.1.
 *
 *  The other seven units in this band author ZERO repair rows and cite these
 *  by itemId. The citation target is
 *  `ealch-admin/A2-SITUATIONS/04-REPAIR-MOVE-IDS.md`.
 *
 *  Not one restaurant noun appears in any of the six strings, because a
 *  doctor's unit, a hotel unit and a technology unit all have to put the same
 *  string in front of a learner. */
const S_REPAIR: LessonSection = {
  type: 'cardDeck', id: REPAIR, title: 'Six Ways To Say You Missed It', frSub: 'Les six barreaux',
  render: 'deck', layer: 'core', size: 'lg', terms: ['rung', 'faceCost'],
  say: 'Six rungs, cheapest first. Every one of them is ordinary French and none of them is an apology.',
  audio: { ...FR, recordingId: 'rec-a2-07-repair' },
  // NO itemIds HERE. No renderer reads itemIds on a cardDeck — this was the only
  // one of 285 shipped cardDecks that carried the field, and it drew nothing.
  // The six frozen rows reach the learner two ways that DO work: the cards below
  // print the strings, and act 4's deckTranche releases the ids to the SRS.
  cards: [
    { head: 'Rung 1', fr: 'Pardon ?', sub: '[par-DOHⁿ]', body: 'One word, and it gives away nothing about why you missed it. It is also the one a French speaker uses without thinking, which is why it is first.', label: 'costs you nothing' },
    { head: 'Rung 2', fr: 'Vous pouvez répéter, s\'il vous plaît ?', sub: '[voo poo-VAY ray-pay-TAY seel voo PLEH]', body: 'Asks for the whole thing again and still says nothing about what went wrong. If rung 1 got you a repeat at the same speed, this is the next one.', label: 'the whole thing again' },
    { head: 'Rung 3', fr: 'Plus lentement, s\'il vous plaît.', sub: '[plü lahⁿt-MAHⁿ seel voo PLEH]', body: 'The first rung that names the problem: it was the speed. Use it when you caught the shape of the sentence but none of the words.', label: 'names the problem' },
    { head: 'Rung 4', fr: 'Je n\'ai pas bien compris.', sub: '[zhuh nay pah byehⁿ kohⁿ-PREE]', body: 'Says outright that you did not follow. Bien is what softens it: without bien you are saying you understood nothing at all.', label: 'says it outright' },
    { head: 'Rung 5', fr: 'Qu\'est-ce que ça veut dire ?', sub: '[kess kuh sa veu DEER]', body: 'Narrows it to one word rather than the whole turn. Point at the thing on the menu and this question does the rest.', label: 'one word, not the turn' },
    { head: 'Rung 6', fr: 'Vous pouvez me l\'écrire, s\'il vous plaît ?', sub: '[voo poo-VAY muh lay-KREER seel voo PLEH]', body: 'The most expensive rung, and the one that always works. It concedes that listening has failed and asks to change medium.', label: 'always works' },
  ],
};

const S_DEPLOY: LessonSection = {
  type: 'groupDrill', id: DEPLOY, title: 'Which Rung', frSub: 'Quel barreau ?',
  layer: 'core', terms: ['rung', 'faceCost'],
  say: 'He says something. Which rung do you reach for, and why not the one above it.',
  groups: [
    {
      label: 'you heard it, it was just fast',
      items: [
        { fr: 'Pardon ?', en: 'Sorry?', note: 'rung 1' },
        { fr: 'Vous pouvez répéter, s\'il vous plaît ?', en: 'Can you say that again, please?', note: 'rung 2' },
      ],
      check: { q: 'He said something at full speed and you caught nothing. First move?', opts: ['Pardon ?', 'Vous pouvez me l\'écrire, s\'il vous plaît ?', 'Qu\'est-ce que ça veut dire ?', 'Je n\'ai pas bien compris.'], correct: 0, why: 'Rung 1 costs nothing and usually works. Starting at rung 6 gives away far more than the situation needs.' },
    },
    {
      label: 'it was the speed',
      items: [
        { fr: 'Plus lentement, s\'il vous plaît.', en: 'More slowly, please.', note: 'rung 3' },
        { fr: 'Je n\'ai pas bien compris.', en: 'I didn\'t quite catch that.', note: 'rung 4' },
      ],
      check: { q: 'He repeated it once, at exactly the same speed. Now what?', opts: ['Pardon ?', 'Vous pouvez répéter, s\'il vous plaît ?', 'Oui.', 'Plus lentement, s\'il vous plaît.'], correct: 3, why: 'Rung 1 and rung 2 both ask for a repeat. Only rung 3 tells him what to change, and he cannot fix a problem you have not named.' },
    },
    {
      label: 'one word is the problem',
      items: [
        { fr: 'Qu\'est-ce que ça veut dire ?', en: 'What does that mean?', note: 'rung 5' },
        { fr: 'Vous pouvez me l\'écrire, s\'il vous plaît ?', en: 'Could you write it down for me, please?', note: 'rung 6' },
      ],
      check: { q: 'You caught the whole sentence except one word on the menu.', opts: ['Plus lentement, s\'il vous plaît.', 'Qu\'est-ce que ça veut dire ?', 'Pardon ?', 'Vous pouvez répéter, s\'il vous plaît ?'], correct: 1, why: 'Repeating the sentence will not help: you heard it. Rung 5 narrows the problem to the one word that is actually stopping you.' },
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — the whole encounter
 * ══════════════════════════════════════════════════════════════════════════ */

/** A genuine CE task, and the only place a menu's SHAPE gets taught. The
 *  questions require inference across the layout rather than word lookup.
 *  No comparative appears anywhere in the passage: `plus copieux que` is
 *  a2.08's at seq 32 and the menu wants it badly. Settled, and kept out. */
const S_MENU: LessonSection = {
  type: 'reading', id: MENU, title: 'Reading The Board', frSub: 'La carte',
  layer: 'core', terms: ['someOfIt'],
  say: 'A real board, written the way they are written. The questions are about how it is laid out, not what the words mean.',
  questionsInModal: true,
  text: [
    'CHEZ MARTHE · ARDOISE DU JOUR',
    '',
    'FORMULE MIDI · 22 €',
    'entrée + plat  ou  plat + dessert',
    'Servie du mardi au vendredi, jusqu\'à 14h.',
    '',
    'ENTRÉES',
    'Soupe à l\'oignon gratinée · 9 €',
    'Salade de chèvre chaud · 11 €',
    'Terrine maison, cornichons · 10 €',
    '',
    'PLATS',
    'Entrecôte, sauce au poivre, frites · 24 €',
    'Saumon à l\'oseille, riz · 21 €',
    'Risotto aux champignons · 18 €   sans viande',
    '',
    'DESSERTS',
    'Tarte Tatin · 8 €',
    'Mousse au chocolat · 7 €',
    '',
    'Boissons non comprises. Service compris.',
    'Les plats sont susceptibles de contenir des fruits à coque.',
  ].join('\n'),
  glossary: [
    { word: 'l\'ardoise', en: 'the board', note: 'The slate the day\'s dishes are chalked on. If it is on the ardoise it is today only.' },
    { word: 'formule', en: 'the set deal', note: 'Two courses for one price, usually at lunch and usually on weekdays only.' },
    { word: 'gratinée', en: 'browned on top', note: 'Finished under the grill with cheese. It describes how, not what.' },
    { word: 'terrine', en: 'a coarse pâté', note: 'Served cold in a slice, with cornichons. It is meat.' },
    { word: 'l\'oseille', en: 'sorrel', note: 'A sharp green leaf cooked down into a sauce, almost always with fish.' },
    { word: 'viande', en: 'without meat', note: 'The board\'s own marking. Only one dish carries it.' },
    { word: 'non comprises', en: 'not included', note: 'What the price does NOT cover. Read it next to service compris, which is the opposite.' },
    { word: 'coque', en: 'nuts', note: 'The formal term used on allergy notices. Not the same as les noix, which is walnuts.' },
  ],
  questions: [
    { q: 'It is Thursday at one o\'clock and you take the formule at 22 €. How many courses do you get, and why?', a: 'Two, not three. The line under the price reads entrée + plat OU plat + dessert, so you take two of the three and choose which two.' },
    { q: 'You want the risotto and then a tarte Tatin, on the formule. Does the board allow it?', a: 'Yes. The risotto is a plat and the tarte is a dessert, which is one of the two pairings offered. Nothing on the board excludes either dish.' },
    { q: 'You come back on Saturday and want the same deal. What does the board say?', a: 'It is not available. Servie du mardi au vendredi puts Saturday outside it, and the jusqu\'à 14h limit is a second condition on top of that rather than instead of it.' },
    { q: 'You are allergic to nuts. What does the board tell you, and what does it not?', a: 'It warns that any dish might contain them: les plats sont susceptibles de contenir des fruits à coque. It does not tell you which ones, which is exactly why you still have to ask.' },
    { q: 'You order the entrecôte and a glass of wine. What is in the price and what is not?', a: 'The service is in it and the drinks are not. Boissons non comprises. Service compris. The two lines sit together and say opposite things.' },
    { q: 'You do not eat meat. Which dish is safe on this board, and which one looks safe and is not?', a: 'The risotto is marked sans viande. The terrine is meat despite reading like a vegetable dish, and the soupe à l\'oignon is not marked either way, so it is not a safe read.' },
  ],
};

/** HIS lines, not yours. Eight itemIds, every one carrying the `dictation`
 *  drill, checked against POSTGRES rather than the seed.
 *
 *  `dicteeMode` switches to WORD tiles above 16 letters and the waiter's lines
 *  are long, so this mission runs in word mode. Word mode still tests
 *  something here: the ORDER of a question the learner has only ever received,
 *  never produced. It is not testing spelling, which `normalizeFr` would strip
 *  anyway. */
const S_WRITE: LessonSection = {
  type: 'dictation', id: WRITE, title: 'Write What He Said', frSub: 'La dictée',
  layer: 'core', terms: ['hisHalf', 'stage'],
  say: 'Eight lines, all of them his. You have heard every one of them four times by now.',
  audio: { ...FR, recordingId: 'rec-a2-07-write' },
  itemIds: [A(138), A(142), A(147), A(151), A(160), A(168), A(169), A(174)],
};

/** `practice` is MANDATORY, not optional: `lesson-contract.test.ts:505` mirrors
 *  the publish gate and fails any non-assessment lesson with no practice
 *  section, an empty `practice.itemIds`, or an empty `Lesson.itemIds`.
 *
 *  `skill: 'speak'`, and every item named here carries `voiceflash`, verified
 *  against Postgres. Never `skill: 'write'`, which draws no writing surface. */
const S_SAY: LessonSection = {
  type: 'practice', id: SAY, title: 'Say Your Half', frSub: 'À vous',
  layer: 'core', skill: 'speak', terms: ['gradient', 'rung'],
  say: 'Your slot in the script, and the six rungs. Say them to the phone before you say them to a waiter.',
  itemIds: [
    ...REPAIR_IDS,
    A(170), A(178), A(179), A(181), A(183),
    'fr.a1.au-restaurant.102', 'fr.a1.au-restaurant.112', 'fr.a1.au-restaurant.103',
  ],
};

/** THE WHOLE ENCOUNTER, ten turns, greeting to payment, with the deviation
 *  from mission 15 landing at turn 6 and a repair rung available at turn 7.
 *  Every turn carries `userEn` and two `alts`.
 *
 *  Authored so it is LIFTABLE WHOLE by a2.35 (Bilan A2), per collation §7.2.
 *
 *  THE ONE SPOKEN TOTAL IN THE LESSON is at turn 10 and it is NOT SCORED.
 *  Collation §C5 gives price and change reception to a2.26. The learner hears
 *  a number once, as the closing turn of the encounter, and is never asked
 *  what it was. This is the single permitted location and the test pins it. */
const S_SERVICE: LessonSection = {
  type: 'scenario', id: SERVICE, title: 'The Whole Evening', frSub: 'Du bonsoir à l\'addition',
  layer: 'core', terms: ['stage', 'rung', 'handBack'],
  say: 'Ten turns, start to finish. You never start. He asks, you answer, and he deviates once.',
  setting: 'Chez Marthe, Lyon, a Thursday evening. Two of you, no reservation.',
  turns: [
    { ai: 'Bonsoir. Vous avez réservé ?', en: 'Good evening. Do you have a reservation?', user: 'Non, on n\'a pas réservé.', userEn: 'No, we haven\'t booked.', alts: [{ fr: 'Non, désolé.', en: 'No, sorry.' }, { fr: 'Non. Vous avez une table ?', en: 'No. Do you have a table?' }] },
    { ai: 'Vous êtes combien ?', en: 'How many of you are there?', user: 'Deux, s\'il vous plaît.', userEn: 'Two, please.', alts: [{ fr: 'On est deux.', en: 'There are two of us.' }, { fr: 'Une table pour deux.', en: 'A table for two.' }] },
    { ai: 'En terrasse ou à l\'intérieur ?', en: 'On the terrace or inside?', user: 'À l\'intérieur, merci.', userEn: 'Inside, thanks.', alts: [{ fr: 'En terrasse, s\'il vous plaît.', en: 'On the terrace, please.' }, { fr: 'À l\'intérieur.', en: 'Inside.' }] },
    { ai: 'Et comme boisson ?', en: 'And to drink?', user: 'Une carafe d\'eau, s\'il vous plaît.', userEn: 'A jug of water, please.', alts: [{ fr: 'De l\'eau, merci.', en: 'Some water, thanks.' }, { fr: 'Un verre de vin rouge.', en: 'A glass of red wine.' }] },
    { ai: 'Plate ou gazeuse ?', en: 'Still or sparkling?', user: 'Plate.', userEn: 'Still.', alts: [{ fr: 'Gazeuse, s\'il vous plaît.', en: 'Sparkling, please.' }, { fr: 'Plate, merci.', en: 'Still, thanks.' }] },
    { ai: 'Vous avez choisi ?', en: 'Have you decided?', user: 'Je voudrais le saumon, s\'il vous plaît.', userEn: 'I would like the salmon, please.', alts: [{ fr: 'Je vais prendre le saumon.', en: 'I\'ll have the salmon.' }, { fr: 'Pour moi, ce sera le saumon.', en: 'For me, it\'ll be the salmon.' }] },
    { ai: 'Je suis désolé, il n\'y en a plus.', en: 'I\'m sorry, there\'s none left.', user: 'Alors qu\'est-ce que vous me conseillez ?', userEn: 'So what do you recommend?', alts: [{ fr: 'Pardon ?', en: 'Sorry?' }, { fr: 'Je n\'ai pas bien compris.', en: 'I didn\'t quite catch that.' }] },
    { ai: 'Le bar est très bien ce soir. Quelle cuisson pour l\'entrecôte ?', en: 'The sea bass is very good tonight. How would you like the steak cooked?', user: 'À point, s\'il vous plaît.', userEn: 'Medium, please.', alts: [{ fr: 'Bien cuit.', en: 'Well done.' }, { fr: 'Saignant, merci.', en: 'Rare, thanks.' }] },
    { ai: 'Ça a été ? Vous prendrez un dessert ?', en: 'Was everything OK? Will you have a dessert?', user: 'C\'était très bien, merci. Ce sera tout.', userEn: 'It was very good, thanks. That\'ll be all.', alts: [{ fr: 'Une tarte Tatin, s\'il vous plaît.', en: 'A tarte Tatin, please.' }, { fr: 'Juste un café, merci.', en: 'Just a coffee, thanks.' }] },
    { ai: 'Alors ça nous fait quarante-six euros. Vous réglez comment ? Ensemble ou séparément ?', en: 'So that comes to forty-six euros. How are you paying? Together or separately?', user: 'Ensemble, par carte.', userEn: 'Together, by card.', alts: [{ fr: 'Séparément, s\'il vous plaît.', en: 'Separately, please.' }, { fr: 'Par carte, ensemble.', en: 'By card, together.' }] },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — measure
 * ══════════════════════════════════════════════════════════════════════════ */

const S_DECK: LessonSection = {
  type: 'reviewDeck', id: DECK, title: 'Everything He Said', frSub: 'Révision',
  render: 'deck', layer: 'core', terms: ['stage', 'rung'],
  say: 'His half and your half, together, one last time.',
  cards: [
    { front: 'You have just walked in and he speaks first', back: 'Bonsoir, vous avez réservé ? Stage 1, and it is a yes or no.', say: 'Bonsoir, vous avez réservé ?' },
    { front: 'Two words, no verb, and it is about water', back: 'Plate ou gazeuse ? Hand one of his two words back.', say: 'Plate ou gazeuse ?' },
    { front: 'The question you have been waiting for', back: 'Vous avez choisi ? Stage 4, and it arrives in the passé composé.', say: 'Vous avez choisi ?' },
    { front: 'You have named your starter. He says two words.', back: 'Et ensuite ? He wants your main course.', say: 'Et ensuite ?' },
    { front: 'He is clearing your plate and asks three syllables', back: 'Ça a été ? A past tense, so the eating is over.', say: 'Ça a été ?' },
    { front: 'The upsell, with no verb in it at all', back: 'Un café pour finir ? Ce sera tout, merci is the whole answer.', say: 'Un café pour finir ?' },
    { front: 'He is holding the card machine', back: 'Vous réglez comment ? Comment is how, not how much. Par carte.', say: 'Vous réglez comment ?' },
    { front: 'Asked once, quickly, about the bill', back: 'Ensemble ou séparément ? It decides whether one bill comes or several.', say: 'Ensemble ou séparément ?' },
    { front: 'The cheapest way to say you missed it', back: 'Pardon ? Rung 1, and it gives away nothing.', say: 'Pardon ?' },
    { front: 'He repeated it at exactly the same speed', back: 'Plus lentement, s\'il vous plaît. Rung 3 names the problem.', say: 'Plus lentement, s\'il vous plaît.' },
    { front: 'You did not quite follow, and you want to say so', back: 'Je n\'ai pas bien compris. Rung 4, and bien is what softens it.', say: 'Je n\'ai pas bien compris.' },
    { front: 'The dish you wanted is off', back: 'Alors qu\'est-ce que vous me conseillez ? You cannot choose, so make him choose.', say: 'Alors qu\'est-ce que vous me conseillez ?' },
  ],
};

const S_PROGRESS: LessonSection = {
  type: 'progressCheck', id: PROGRESS, title: 'Where You Are', frSub: 'Le point',
  layer: 'core',
  say: 'Twenty-three missions. Here is what changed.',
  body: 'You came in able to order and left able to be spoken to. The eight stages are the same eight almost everywhere in France, so the next bistro is not a new problem. And when a sentence goes past you, you no longer have to smile and hope: there are six things to say and you know what each one costs.',
  stats: [
    { k: 'Stages of the encounter', v: '8' },
    { k: 'Lines in his voice', v: '34' },
    { k: 'Rungs on the repair ladder', v: '6' },
    { k: 'Questions you now start', v: '0' },
  ],
};

/* ── The quiz. Six rounds of five, thirty questions, passMark 70. ──────────
 *
 *  ONE quiz. A second `quiz` section is silently never rendered.
 *
 *  THE ANSWER FOLD decides what can be asked. `fold()` (answer.logic.ts:32)
 *  strips accents, case, punctuation, hyphens, BOTH apostrophes and ALL
 *  whitespace before comparing, so none of these can ever be the difference
 *  between right and wrong:
 *
 *    à point = a point        l'addition = laddition
 *    ça = ca                  s'il vous plaît = silvousplait
 *    Monsieur = monsieur      Bonjour, monsieur = Bonjour monsieur
 *
 *  This bites this lesson harder than most, because half the restaurant
 *  lexicon is accented and the repair rungs are full of elisions.
 *
 *  QUESTIONS I WANTED AND COULD NOT WRITE (a2.09's section is the model):
 *
 *   - "Which is right, « à point » or « a point » ?" as a typeIn. The two fold
 *     to the same string. Moved to nothing: the contrast is untestable and the
 *     accent is not taught as a scored point anywhere in this lesson.
 *   - "Write « l'addition »" as a typeIn testing the apostrophe. `laddition`
 *     passes. Dropped.
 *   - "Is it « s'il vous plaît » or « sil vous plait » ?" Both fold identical.
 *     Dropped.
 *   - A dictée item whose difficulty was the apostrophe in « Je n'ai pas bien
 *     compris ». `normalizeFr` strips it too, so the dictée tests the WORDS and
 *     their order, which is the right thing for it to test anyway.
 *
 *  WHAT STILL DISCRIMINATES, and every typeIn and errorSpot below turns on one
 *  of these: word choice, word order, a present-or-absent word, and inflection
 *  that survives folding. `fold()` keeps a final -e and -s, so `je voudrais`
 *  against `je veux`, or a missing `bien`, is testable and a wrong form will
 *  not silently pass.
 *
 *  EVERY `listenChoose` CARRIES `say`. Without it `ListenChooseCard` falls back
 *  to speaking `opts[correct]`, which reads the answer aloud and, where the
 *  options are English, speaks English at a French listening exercise.
 *
 *  EVERY `errorSpot` CARRIES `prompt`, the text being worked on, or the learner
 *  is asked to fix a phrase that never appears on screen.
 *
 *  NO QUESTION IS ABOUT A PRICE, A TOTAL, CHANGE, COINS OR NOTES. Reserved for
 *  a2.26. Nothing is about `y` or `en`. Nothing uses a comparative.
 *  Options are NEVER hand-randomised: `LessonRich` permutes them at runtime. */
const S_QUIZ: LessonSection = {
  type: 'quiz', id: QUIZ, title: 'The Exam', frSub: 'L\'examen',
  layer: 'core', terms: ['stage', 'rung', 'gradient'],
  say: 'Six rounds of five. Most of it is catching what he said.',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-stage',
      label: 'Which stage',
      say: 'Five on where in the evening you are.',
      targets: ['err-lost-in-script', 'err-missed-stage'],
      questions: [
        { format: 'mcq', ref: STAGES, q: 'He says « Ça a été ? ». Where are you?', opts: ['He is clearing your plate', 'You have just walked in', 'You are ordering', 'You are paying'], correct: 0, why: 'A past tense, so the eating is over. Tout se passe bien ? is the present-tense version asked mid-meal.' },
        { format: 'mcq', ref: STAGES, q: 'He says « Et ensuite ? ». What does he want?', opts: ['Your payment method', 'To clear the table', 'Your main course', 'Your name'], correct: 2, why: 'Stage 4. Ensuite means next, and next at this point is the main course.' },
        { format: 'mcq', ref: OPEN, q: '« Une carafe d\'eau, ça ira ? » is', opts: ['An offer of two options', 'A check on a decision he has made', 'A question about the bill', 'An apology'], correct: 1, why: 'Ça ira means will that do. He is confirming rather than offering, and silence counts as yes.' },
        { format: 'mcq', ref: CLOSE, q: '« Vous réglez comment ? » asks about', opts: ['The amount owed', 'The tip', 'Whose dish was whose', 'The method of payment'], correct: 3, why: 'Comment is how. Combien would be how much, and that is a different question at a different moment.' },
        { format: 'mcq', ref: STAGES, q: 'Which of these comes FIRST in the evening?', opts: ['Vous avez choisi ?', 'Ce sera tout ?', 'Vous avez réservé ?', 'Vous réglez comment ?'], correct: 2, why: 'Stage 1. The other three are stages 4, 6 and 8, in that order.' },
      ],
    },
    {
      id: 'r2-ear',
      label: 'What he said',
      say: 'Five you have to hear rather than read.',
      targets: ['err-missed-stage', 'err-no-verb'],
      questions: [
        { format: 'listenChoose', ref: FAST, say: 'Plate ou gazeuse ?', q: 'Listen. What is he asking about?', opts: ['Water', 'The steak', 'The bill', 'Dessert'], correct: 0, why: 'There is no noun in the question at all. It is a drinks question and the two words are the two kinds of bottled water.' },
        { format: 'listenChoose', ref: FAST, say: 'Ensemble ou séparément ?', q: 'Listen. What is being decided?', opts: ['Where you sit', 'How the meat is cooked', 'What you drink', 'Whether one bill comes or several'], correct: 3, why: 'Stage 8. It is asked once, quickly, while he is holding the card machine.' },
        { format: 'listenChoose', ref: FAST, say: 'Je vous débarrasse ?', q: 'Listen. Is this a question?', opts: ['No, it is a statement about the bill', 'Yes, and it asks to clear your plate', 'Yes, and it asks what you want', 'No, it is a greeting'], correct: 1, why: 'It is shaped exactly like a statement and marked only by his voice going up at the end.' },
        { format: 'listenChoose', ref: OPEN, say: 'Et comme boisson ?', q: 'Listen. What does comme mean here?', opts: ['By way of', 'Like, similar to', 'How', 'As soon as'], correct: 0, why: 'Comme frames a category: by way of a drink. Et comme entrée ? at stage 4 is the same frame with a different noun.' },
        { format: 'listenChoose', ref: BREAK, say: 'Je suis désolé, il n\'y en a plus.', q: 'Listen. What has happened?', opts: ['The kitchen is closed', 'He did not hear you', 'What you ordered is unavailable', 'The bill is wrong'], correct: 2, why: 'Take it whole: it is one sound meaning there is none left. Taking it apart at the table costs you the seconds you needed.' },
      ],
    },
    {
      id: 'r3-fit',
      label: 'The answer that fits',
      say: 'Five on saying the right amount, which is usually less than you think.',
      targets: ['err-overlong-answer', 'err-yes-to-a-choice'],
      questions: [
        { format: 'mcq', ref: FIT, q: 'He says « Plate ou gazeuse ? ». Best answer?', opts: ['Oui, s\'il vous plaît.', 'Plate.', 'Je voudrais de l\'eau qui n\'est pas gazeuse.', 'Non, merci.'], correct: 1, why: 'He gave you two words. Hand one back. It is not curt; it is the register.' },
        { format: 'mcq', ref: FIT, q: 'He says « Ce sera tout ? » and you want nothing else.', opts: ['Oui.', 'Combien ?', 'Je ne comprends pas.', 'Ce sera tout, merci.'], correct: 3, why: 'Reusing his frame is faster and more natural than building a new sentence.' },
        { format: 'errorSpot', ref: ERRORS, q: 'He asked « Vous réglez comment ? ». Fix the answer.', prompt: 'Ça fait combien ?', accept: ['Par carte.', 'par carte', 'Par carte, s\'il vous plaît.', 'En espèces.', 'en espèces'], answer: 'Par carte, s\'il vous plaît.', why: 'Comment asks the method, not the amount. Answering with a price question means he has to ask again.' },
        { format: 'mcq', ref: FIT, q: 'He says « Quelle cuisson ? ». Which is an actual answer?', opts: ['Oui, merci.', 'Je voudrais le poulet.', 'À point, s\'il vous plaît.', 'Par carte.'], correct: 2, why: 'Three words exist and he will offer none of them: saignant, à point, bien cuit.' },
        { format: 'mcq', ref: OPEN, q: 'He says « Vous êtes combien ? ». Best answer?', opts: ['Deux, s\'il vous plaît.', 'Oui, deux.', 'Nous sommes ici pour manger.', 'Une table.'], correct: 0, why: 'A number is a whole answer to a number question. Nothing else needs to be built around it.' },
      ],
    },
    {
      id: 'r4-register',
      label: 'How you ask',
      say: 'Five on the one rung that is wrong at a table.',
      targets: ['err-je-veux', 'err-register'],
      questions: [
        { format: 'errorSpot', ref: GRAD, q: 'You are at a table ordering. Fix this.', prompt: 'Je veux le poulet.', accept: ['Je voudrais le poulet.', 'je voudrais le poulet', 'Je prends le poulet.', 'Je vais prendre le poulet.'], answer: 'Je voudrais le poulet.', why: 'Je veux is grammatical and understood, and it is one rung too blunt at a table. Nobody corrects it, which is why nobody learns it.' },
        { format: 'typeIn', ref: GRAD, q: 'Write the softest of the five ways to order, using vouloir. Three words, then the dish: « ... le poulet. »', accept: ['Je voudrais le poulet.', 'je voudrais le poulet', 'Je voudrais le poulet'], answer: 'Je voudrais le poulet.', why: 'Voudrais against veux is one syllable and the whole difference in register. Both survive folding, so this is a real contrast rather than a spelling test.' },
        { format: 'mcq', ref: GRAD, q: 'Which of these would you NOT say at a restaurant table?', opts: ['Je vais prendre le poulet.', 'Ce sera le poulet.', 'Je prendrais plutôt le poulet.', 'Je veux le poulet.'], correct: 3, why: 'The other three sit at different points on the gradient and all four are grammatical. Only the first one lands wrong.' },
        { format: 'mcq', ref: GRAD, q: '« Pour moi, ce sera l\'entrecôte. » Where does this sit?', opts: ['Rude', 'Flat and confident, and perfectly polite', 'A question', 'Only used in Quebec'], correct: 1, why: 'Ce sera is the flattest of the five rungs and it carries no rudeness at all. It is how it is said at a table of four.' },
        { format: 'errorSpot', ref: SOME, q: 'You are telling him what you do not eat. Fix this.', prompt: 'Je ne mange pas du viande.', accept: ['Je ne mange pas de viande.', 'je ne mange pas de viande', 'de viande'], answer: 'Je ne mange pas de viande.', why: `After a negative it is de, never du. ${Cap(unitRef('a1.29'))} taught this one; the table is where you have to run it fast.` },
      ],
    },
    {
      id: 'r5-repair',
      label: 'When you miss it',
      say: 'Five on the six rungs, and this is the part the rest of the course quotes.',
      targets: ['err-freeze', 'err-wrong-rung'],
      questions: [
        { format: 'typeIn', ref: REPAIR, q: 'The cheapest thing you can say when you catch nothing. One word.', accept: ['Pardon', 'Pardon ?', 'pardon'], answer: 'Pardon ?', why: 'Rung 1. It gives away nothing about why you missed it, and it is what a French speaker says without thinking.' },
        { format: 'typeIn', ref: REPAIR, q: 'Say that you did not QUITE catch it. Five words: « Je n\'ai pas ... compris. »', accept: ['Je n\'ai pas bien compris.', 'je n\'ai pas bien compris', 'bien'], answer: 'Je n\'ai pas bien compris.', why: 'Bien is what softens it. Without bien you are saying you understood nothing at all, and the two do not fold together, so the word is genuinely being tested.' },
        { format: 'mcq', ref: DEPLOY, q: 'He repeated it once at exactly the same speed. Which rung now?', opts: ['Plus lentement, s\'il vous plaît.', 'Pardon ?', 'Vous pouvez répéter, s\'il vous plaît ?', 'Merci.'], correct: 0, why: 'Rungs 1 and 2 both just ask for a repeat. Only rung 3 tells him what to change, and he cannot fix a problem you have not named.' },
        { format: 'mcq', ref: DEPLOY, q: 'You caught the whole sentence except one word on the board.', opts: ['Plus lentement, s\'il vous plaît.', 'Pardon ?', 'Qu\'est-ce que ça veut dire ?', 'Vous pouvez répéter, s\'il vous plaît ?'], correct: 2, why: 'Repeating it will not help, because you heard it. Rung 5 narrows the problem to the one word actually stopping you.' },
        { format: 'mcq', ref: BREAK, q: 'He says the dish is off. What keeps the turn?', opts: ['Saying nothing while you rebuild the sentence', 'Alors qu\'est-ce que vous me conseillez ?', 'Je veux le saumon.', 'Pardon ?'], correct: 1, why: 'You cannot choose, so make him choose. Freezing costs you the turn and he starts suggesting things at full speed.' },
      ],
    },
    {
      id: 'r6-whole',
      label: 'The whole evening',
      say: 'Five that need more than one part of the lesson.',
      targets: ['err-lost-in-script', 'err-freeze'],
      questions: [
        { format: 'mcq', ref: MENU, q: 'The formule is 22 € for entrée + plat or plat + dessert. You want all three courses.', opts: ['It is included', 'It costs 22 € either way', 'Only at lunch', 'The formule does not cover it'], correct: 3, why: 'The board says OU: two of the three, and you pick which two. A third course is off the deal.' },
        { format: 'mcq', ref: CLOSE, q: '« Le service est compris. » What does this mean for you?', opts: ['You must leave a tip', 'The drinks are free', 'The service charge is already in the price', 'You pay at the bar'], correct: 2, why: 'It is a statement of fact, not a hint. Anything on top is yours to decide and nobody is waiting for it.' },
        { format: 'speak', ref: SAY, target: 'Alors qu\'est-ce que vous me conseillez ?', ipa: '/a.lɔʁ kɛs kə vu mə kɔ̃.sɛ.je/', q: 'Say it out loud. The dish you wanted is off and the queue behind you is waiting.', why: 'Alors buys you the half-second and the rest is one fixed question. Said whole, it sounds like a decision rather than a stall.' },
        { format: 'speak', ref: SAY, target: 'Je n\'ai pas bien compris.', ipa: '/ʒə ne pa bjɛ̃ kɔ̃.pʁi/', q: 'Say rung 4 out loud, to a waiter who has just said something fast.', why: 'Four rhythmic beats and no pause in the middle. Said as one block it sounds ordinary; said word by word it sounds like an apology.' },
        { format: 'mcq', ref: SERVICE, q: 'Across the whole evening, how many questions does he ask before the food arrives?', opts: ['Six or more', 'One', 'Two', 'None, you order first'], correct: 0, why: 'Reservation, how many, where, drink, still or sparkling, chosen, and the cooking. You start none of them, which is the whole reframe.' },
      ],
    },
  ],
};

const S_ROUNDUP: LessonSection = {
  type: 'roundup', id: ROUNDUP, title: 'What You Take With You', frSub: 'Le bilan',
  layer: 'core',
  say: 'Three things, and the third one works everywhere, not just at a table.',
  body: 'You never start. He asks, you answer, and there are eight stages that arrive in the same order almost every time. Answer short: when he gives you two words, one of them back is the whole answer. And when a sentence goes past you, there are six rungs from Pardon ? to Vous pouvez me l\'écrire ?, and you now know what each one costs. That last one is not about restaurants. It is the thing you will use in a pharmacy, at a station, and on the phone.',
  points: [
    'You never start. He asks, you answer.',
    'Eight stages, in the same order almost every time.',
    'A short question wants a short answer. Two words back is not curt, it is the register.',
    'Je veux is the one rung too far down. Je voudrais costs you one syllable.',
    'Six rungs from Pardon ? to Vous pouvez me l\'écrire ?, and the ladder works anywhere.',
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACTS
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: LessonAct[] = [
  {
    id: 'act1', title: 'The encounter you cannot start',
    sections: [SCENE, GOALS, STAGES],
    milestone: 'You have seen all eight stages in order and know you start none of them.',
    estScreens: 20,
    restPoints: [`${SCENE}/after-the-break`],
  },
  {
    id: 'act2', title: 'His half',
    sections: [OPEN, ORDER, CHECK, CLOSE, FAST, PLACE],
    milestone: 'You can place any line he says in the evening it belongs to.',
    estScreens: 34,
    restPoints: [`${CLOSE}/after-the-cards`],
  },
  {
    id: 'act3', title: 'Your slot, and the register in it',
    sections: [FIT, GRAD, SOME, TRAP, ERRORS],
    milestone: 'You can answer each of his questions with the amount of French it actually wants.',
    estScreens: 30,
    restPoints: [`${GRAD}/after-the-gradient`],
  },
  {
    id: 'act4', title: 'When the script breaks',
    sections: [BREAK, OFFSCRIPT, REPAIR, DEPLOY],
    milestone: 'You have six ways to say you missed it, and you know which one to reach for.',
    estScreens: 28,
    restPoints: [OFFSCRIPT + '/after-the-offscript'],
  },
  {
    id: 'act5', title: 'The whole encounter',
    sections: [MENU, WRITE, SAY, SERVICE],
    milestone: 'You have read a real board and run the whole evening end to end.',
    estScreens: 28,
    restPoints: [`${MENU}/after-the-board`],
  },
  {
    id: 'act6', title: 'Measure',
    sections: [DECK, PROGRESS, QUIZ, ROUNDUP],
    milestone: 'Thirty questions, and the repair move is the part you keep.',
    estScreens: 24,
    restPoints: [`${PROGRESS}/before-the-exam`],
  },
];

/** ONE ARRAY PER ACT. `deckTranche.length` must equal `acts.length`: several
 *  shipped tests assert exactly that.
 *
 *  EVERY ID RELEASED HERE CARRIES THE `flashcard` DRILL. That is what makes a
 *  tranche release actually produce a card, and the test asserts it. Three
 *  imported rows were dropped from these arrays for failing it, measured
 *  against Postgres rather than assumed:
 *
 *    fr.a1.au-restaurant.118   drills ['dictation'] only
 *    fr.a1.au-restaurant.159   drills ['dictation'] only
 *    fr.a2.au-restaurant.078   drills ['dictation'] only
 *
 *  They are shipped A1/A2 rows and this build does not widen another lesson's
 *  drill arrays to suit itself. They stay named in the corpus file's IMPORTED
 *  list as evidence, and they are simply not released as cards. */
const DECK_TRANCHE: string[][] = [
  [A(138), A(139), A(140), A(141), A(142), 'fr.a1.au-restaurant.111', 'fr.a1.au-restaurant.039', 'fr.a1.au-restaurant.043'],
  [A(143), A(144), A(145), A(146), A(147), A(148), A(149), A(150), A(151), A(152), A(153), A(154), A(155), A(156), A(157), A(158), A(159), A(160), A(161), A(162), A(163), A(164), A(165), A(166), A(167), 'fr.a1.au-restaurant.116', 'fr.a2.au-restaurant.054', 'fr.a1.cafe.005', Q(197), Q(198)],
  [A(178), A(179), A(180), A(181), A(182), A(183), 'fr.a1.au-restaurant.102', 'fr.a1.au-restaurant.112', 'fr.a1.au-restaurant.020', 'fr.a1.au-restaurant.021', 'fr.a1.au-restaurant.022', 'fr.a2.au-restaurant.063'],
  [...REPAIR_IDS, A(168), A(169), A(170), A(171), A(172), A(173), A(174), A(175), A(176), A(177), A(184), A(185), A(186), A(187), A(188), A(189), 'fr.a1.au-restaurant.193', 'fr.a1.au-restaurant.194'],
  ['fr.a1.au-restaurant.103', 'fr.a1.au-restaurant.096', 'fr.a1.au-restaurant.098', 'fr.a1.au-restaurant.190', 'fr.a1.au-restaurant.186', 'fr.a2.au-restaurant.058', 'fr.a2.au-restaurant.061', 'fr.a2.au-restaurant.051', 'fr.a2.au-restaurant.052', 'fr.a2.au-restaurant.053', 'fr.a2.au-restaurant.057', 'fr.a2.au-restaurant.062'],
  ['fr.a1.au-restaurant.010', 'fr.a1.au-restaurant.198', 'fr.a1.au-restaurant.040'],
];

const SECTIONS: LessonSection[] = [
  S_SCENE, S_GOALS, S_STAGES,
  S_OPEN, S_ORDER, S_CHECK, S_CLOSE, S_FAST, S_PLACE,
  S_FIT, S_GRAD, S_SOME, S_TRAP, S_ERRORS,
  S_BREAK, S_OFFSCRIPT, S_REPAIR, S_DEPLOY,
  S_MENU, S_WRITE, S_SAY, S_SERVICE,
  S_DECK, S_PROGRESS, S_QUIZ, S_ROUNDUP,
];

/** Every id this lesson releases to the SRS. The union of every section's
 *  `itemIds` and every deckTranche entry, deduplicated and frozen here so the
 *  test can assert reachability in one place. `Lesson.itemIds` must be
 *  non-empty or `lesson-contract.test.ts:505` fails the publish gate. */
const ITEM_IDS: string[] = [
  ...new Set([
    ...DECK_TRANCHE.flat(),
    ...SECTIONS.flatMap((s) => (s as { itemIds?: string[] }).itemIds ?? []),
  ]),
];

/** The drills an error trigger can send a learner back to. `format: 'flashcard'`
 *  and a `pairs` array of [English, French]. */
const DRILLS: LessonDrill[] = [
  {
    id: 'drill-gradient', title: 'The one rung to drop', format: 'flashcard' as const,
    coach: 'Read the English. Say the French, out loud, and never reach for je veux at a table.',
    pairs: [
      ['I would like the chicken', 'Je voudrais le poulet.'],
      ['I\'ll have the dish of the day', 'Je prends le plat du jour.'],
      ['I\'m going to have the fish', 'Je vais prendre le poisson.'],
      ['For me, it\'ll be the steak', 'Pour moi, ce sera l\'entrecôte.'],
      ['I\'d rather have the fish', 'Je prendrais plutôt le poisson.'],
    ],
  },
  {
    id: 'drill-stage', title: 'Which stage is he on', format: 'flashcard' as const,
    coach: 'Read what he says. Say which part of the evening you are in.',
    pairs: [
      ['Do you have a reservation?', 'Bonsoir, vous avez réservé ?'],
      ['And to drink?', 'Et comme boisson ?'],
      ['Have you decided?', 'Vous avez choisi ?'],
      ['Was everything OK?', 'Ça a été ?'],
      ['How are you paying?', 'Vous réglez comment ?'],
    ],
  },
  {
    id: 'drill-short', title: 'Answer it short', format: 'flashcard' as const,
    coach: 'He asked two words. Give one of them back and stop talking.',
    pairs: [
      ['Still or sparkling? (still)', 'Plate.'],
      ['How would you like it cooked? (medium)', 'À point, s\'il vous plaît.'],
      ['How are you paying? (card)', 'Par carte, s\'il vous plaît.'],
      ['How many of you? (two)', 'Deux, s\'il vous plaît.'],
      ['Will that be all? (yes)', 'Ce sera tout, merci.'],
    ],
  },
  {
    id: 'drill-repair', title: 'The six rungs', format: 'flashcard' as const,
    coach: 'Cheapest first. Say each one out loud and notice how little the first two give away.',
    pairs: [
      ['Sorry?', 'Pardon ?'],
      ['Can you say that again, please?', 'Vous pouvez répéter, s\'il vous plaît ?'],
      ['More slowly, please.', 'Plus lentement, s\'il vous plaît.'],
      ['I didn\'t quite catch that.', 'Je n\'ai pas bien compris.'],
      ['What does that mean?', 'Qu\'est-ce que ça veut dire ?'],
      ['Could you write it down for me, please?', 'Vous pouvez me l\'écrire, s\'il vous plaît ?'],
    ],
  },
];

const ERROR_TRIGGERS = [
  {
    id: 'err-je-veux', drill: 'drill-gradient',
    description: 'Orders with je veux, which is grammatical, understood, and one rung too blunt for a table. Nobody corrects it, so nobody learns it.',
    detectOn: [GRAD, ERRORS, `${QUIZ}/r4-register`],
  },
  {
    id: 'err-register', drill: 'drill-gradient',
    description: 'Reaches for the wrong point on the ordering gradient for the situation, usually by building a long sentence where a short one is expected.',
    detectOn: [GRAD, TRAP, `${QUIZ}/r4-register`],
  },
  {
    id: 'err-lost-in-script', drill: 'drill-stage',
    description: 'Cannot say which part of the meal a line belongs to, so answers the wrong question or answers nothing.',
    detectOn: [STAGES, PLACE, `${QUIZ}/r1-stage`],
  },
  {
    id: 'err-missed-stage', drill: 'drill-stage',
    description: 'Hears the words but not the stage, most often on Ça a été ? and Et ensuite ?, which carry no noun to anchor on.',
    detectOn: [FAST, PLACE, `${QUIZ}/r2-ear`],
  },
  {
    id: 'err-overlong-answer', drill: 'drill-short',
    description: 'Answers a two-word question with a full sentence, which is understood and marks the speaker as translating rather than talking.',
    detectOn: [FIT, TRAP, `${QUIZ}/r3-fit`],
  },
  {
    id: 'err-yes-to-a-choice', drill: 'drill-short',
    description: 'Answers oui to a two-way question such as Plate ou gazeuse ?, which selects nothing and forces him to ask again.',
    detectOn: [FIT, ERRORS, `${QUIZ}/r3-fit`],
  },
  {
    id: 'err-no-verb', drill: 'drill-stage',
    description: 'Fails on the four questions with no verb to anchor on: Plate ou gazeuse ?, Et ensuite ?, Un café pour finir ?, Ensemble ou séparément ?',
    detectOn: [FAST, OPEN, `${QUIZ}/r2-ear`],
  },
  {
    id: 'err-freeze', drill: 'drill-repair',
    description: 'Says nothing when the script deviates, rebuilding the sentence internally while the turn is lost.',
    detectOn: [BREAK, DEPLOY, `${QUIZ}/r5-repair`],
  },
  {
    id: 'err-wrong-rung', drill: 'drill-repair',
    description: 'Reaches too high or too low on the repair ladder: asking for a repeat when the speed was the problem, or asking for it in writing when Pardon would have done.',
    detectOn: [REPAIR, DEPLOY, `${QUIZ}/r5-repair`],
  },
];

export const RESTAURANT_LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: UNIT.seq,
  level: 'a2',
  tag: 'restaurant',
  version: 1,
  title: UNIT.title,
  intro: 'Twenty-three lessons have taught you how to order. This one is about everything he says back.',

  grammarIntroduced: [
    'The eight-stage structure of a French restaurant encounter, received in the server\'s voice rather than produced in the learner\'s',
    'Recognition of the server\'s eight canonical questions, including the four that contain no verb the learner can anchor on',
    'The adjacency-pair principle: that a short question takes a short answer, and that reusing the server\'s own frame is the native response',
    'A five-rung ordering gradient inside the restaurant frame, from je prendrais to ce sera, with je veux identified as the one register error',
    'The repair move as a six-rung ladder ordered by face cost, owned here for the whole A2 situations band and cited by unit id elsewhere',
    'Recovery from a script deviation by handing the choice back rather than rebuilding the sentence',
    'Reading a French menu board for its layout: what a formule includes, what its conditions are, and what is excluded',
    'The partitive at the point of ordering as RECALL of a1.29, with no new claim made about it',
    'That l\'addition, le service and le pourboire are stages of the script; the amount, the change and the coins are reserved for a2.26',
    'That il n\'y en a plus is recognised as unanalysed lexis, with y and en reserved entirely for a2.25',
  ],

  /** What this lesson takes as already held. 59 of 66 shipped lessons carry it;
   *  without it a2.07 would be the outlier. Everything here is shipped and is
   *  RECALLED rather than retaught (see the corpus header, §C). */
  grammarAssumed: [
    "The partitive du, de la, de l' and its reduction to de under negation, delivered whole by a1.29 at seq 8",
    'The futur proche as a way of stating a decision just made, from a2.19 at seq 15',
    'The passé composé with avoir, from a2.05, which the server uses in Vous avez choisi ? and Ça a été ?',
    'The third-person direct object pronoun before the verb, from a2.06 at seq 21, met here only as exposure in Je vous le remplace',
    'Yes/no question formation and est-ce que, from a1.19',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Vous ne commencez jamais.',
    minutes: 32,
    difficulty: 3,
    glyph: '🍽️',
    screens: 158,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: [],
  deckTranche: DECK_TRANCHE,
  terms: RESTAURANT_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
  },
};

export const LESSON = RESTAURANT_LESSON;
export { ACTS, SECTIONS, DECK_TRANCHE, ITEM_IDS, ERROR_TRIGGERS, DRILLS };
export const HELD_SECTIONS = ['s16-offscript'] as const;
export const MONEY_BOUNDARY_UNIT = MONEY_UNIT;
export const REGISTER_BOUNDARY_UNIT = REGISTER_UNIT;
export const ELISION_REF = ELISION_UNIT;
export const IMPORTED_IDS = IMPORTED;
export const A129_TRANCHE_IDS = A129_TRANCHE;
