// a2.28.l1 « Chez le médecin » — the lesson.
//
// 24 missions, 24 sections, six acts, ONE lesson, ONE quiz.
//
// ACT 3 IS THE HEAVIEST at 8 missions against act 2's 3, which doctrine §B.5
// requires and the prompt asks the report to show. There is no paradigm here,
// so act 2 is short and carries the frame, and the freed weight moves into the
// Owns.
//
// ════════════════════════════════════════════════════════════════════════════
//  THE SINGLE-SCENARIO FALLBACK WAS TAKEN PRE-EMPTIVELY. THIS IS A DECISION,
//  NOT AN OMISSION.
// ════════════════════════════════════════════════════════════════════════════
//
// Band blocking step 4 requires a Pixel 6 check of two `scenario` sections
// before this unit authors. `scenario` repeats in ZERO shipped lessons: all 22
// A2 lessons carry exactly one. The check could not be run in this build's
// environment, so the fallback the prompt names was taken up front:
//
//   * `s10-consult` is ONE scenario at ELEVEN turns, ending on the prescription
//     being handed over and the dosage read back, exactly as the prompt
//     specifies for the fallback case.
//   * `s20-pharma` is a `listening` carrying the pharmacist's counter turns
//     rather than a second `scenario`, and `s19-speak`'s practice covers the
//     counter lines. That is the prompt's "a listening plus a practice on the
//     counter lines", and it keeps the lesson at 24 sections rather than 25.
//
// Repeated `listening` needs no device check: it ships in six lessons already,
// three of them at 3x (a1.27.l1, a1.28.l1). This lesson carries three.
//
// **The cost, stated so it can be reversed cheaply:** the learner runs one
// scripted encounter instead of two, and the pharmacy counter is met by ear and
// by voice rather than by turn-taking. If the device check later passes, the
// promotion of `s20-pharma` back to a `scenario` is a section swap and not a
// redesign. That is what the fallback was designed to cost.
//
// ════════════════════════════════════════════════════════════════════════════
//
// THE BOUNDARY THAT DECIDES THIS LESSON. `a1.24` is this unit's own prereq and
// it owns `avoir mal à` AND the article contraction across FIVE sections, with
// two of its own tests pinning them. So `avoir mal à` appears here in exactly
// one role: as construction 1 of three, the one the learner already has, used
// as the ANCHOR that makes constructions 2 and 3 visible. It is cited to a1.24
// by unit id every time it appears and the contraction is never explained
// anywhere, in any surface. The guard is a regex list, not an intention.
//
// `depuis` is a2.18's, with 280 occurrences and a dedicated trapDrill. The
// doctor asks `depuis quand ?` constantly, so it is USED and never taught, and
// `fr.a2.corps.024` exists precisely so the slot can be answered without it.
//
// NO `table`. NO reference `sheet` and therefore no `cheatSheet`. NO `deep`
// layer. NO `imageRef`: a1.24 authors zero and pins it at zero, and this is an
// explicit decision rather than an omission.

import type { Lesson, LessonAct, LessonSection, LessonDrill } from '../../../ealch-v2/src/content/schema.ts';
import { MEDECIN_TERMS } from './medecin-terms.ts';
import {
  UNIT, LESSON_ID, REFRAME, S, B, REPAIR_IDS, REPAIR_UNIT, IMPORTED, DICTEE_IDS, NOT_RELEASABLE,
  BODY_UNIT, DEPUIS_UNIT, MODAL_UNIT,
} from './medecin-corpus.ts';

/* ── Section ids, named once so acts, quiz refs and rest points cannot drift ── */
const SCENE = 's01-scene';
const GOALS = 's02-goals';
const THREE = 's03-three';
const SLOTS = 's04-slots';
const SORT = 's05-sort';
const PICK = 's06-pick';
const ASKS = 's07-asks';
const PAIRS = 's08-pairs';
const REPAIR = 's09-repair';
const CONSULT = 's10-consult';
const COUNTER = 's11-counter';
const DOSE = 's12-dose';
const DOSETRAP = 's13-dosetrap';
const NOTMEDICAL = 's14-notmedical';
const ERRORS = 's15-errors';
const ORDONNANCE = 's16-ordonnance';
const QUEBEC = 's17-quebec';
const DICTATION = 's18-dictation';
const SPEAK = 's19-speak';
const PHARMA = 's20-pharma';
const REVIEW = 's21-review';
const PROGRESS = 's22-progress';
const QUIZ = 's23-quiz';
const ROUNDUP = 's24-roundup';

const FR = { lang: 'fr-FR' as const, mode: 'tts' as const, speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — the situation and the goal
 * ══════════════════════════════════════════════════════════════════════════ */

/** The A2 scene register: somebody who opens correctly with the phrase they
 *  rehearsed, meets one word they do not have, and stops. Nobody corrects them;
 *  the doctor waits.
 *
 *  A SPACED EXCLAMATION MARK CLIPS THE SCENE BUBBLE, and the shape that
 *  triggered it is exactly `…, s'il vous plaît !`. Not one bubble here ends in
 *  a spaced `!`. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration', size: 'md',
    text: 'A walk-in clinic in Nantes, a Tuesday afternoon. You have had the sentence ready since the waiting room.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble', from: 'them', reveal: 'auto', size: 'md',
    speaker: 'The doctor', fr: 'Bonjour. Qu\'est-ce qui vous amène ?',
    en: 'Hello. What brings you in?',
    audio: { lang: 'fr-FR', mode: 'tts' },
  },
  {
    kind: 'bubble', from: 'you', reveal: 'auto', size: 'md',
    fr: 'J\'ai mal au ventre depuis trois jours.',
    en: '(I have had stomach pain for three days.)',
    stage: 'Clean, correct, and exactly what you practised. a1.24 gave you this sentence.',
    audio: { lang: 'fr-FR', mode: 'tts' },
  },
  {
    kind: 'bubble', from: 'them', reveal: 'tap', size: 'md',
    speaker: 'The doctor', fr: 'D\'accord. Ça vous lance ou ça vous brûle ?',
    en: 'Right. Is it a shooting pain or a burning one?',
    stage: 'Two words you have never met, in a question you have to answer now.',
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] },
  },
  {
    kind: 'choice', size: 'lg',
    prompt: 'You do not know either verb. What do you do?',
    options: [
      { fr: 'Say nothing and wait.', en: 'hope he moves on', audio: { mode: 'tts', voice: 'coach' }, outcome: 'breaks' },
      { fr: 'Je ne connais pas le mot. C\'est comme une brûlure.', en: 'say what it is like instead', audio: { lang: 'fr-FR', mode: 'tts' }, outcome: 'works' },
    ],
    followUp: {
      works: 'He nods and writes. You did not have the word and you answered the question anyway, which is the whole of what he needed.',
      breaks: 'He waits, then asks something simpler. You have lost the one piece of information only you had, and he is now guessing.',
    },
  },
  {
    kind: 'break', size: 'lg',
    heading: 'The word was never the problem',
    body: 'Your sentence was right. What stopped you is that a symptom lives inside you and cannot be pointed at, so when the word is missing there is nothing to gesture at. Describing around it is not a failure. It is the move.',
    coach: 'You cannot point at a pain. So say what it is like, using a word you already have.',
    right: { fr: 'C\'est comme une brûlure.', en: 'like something you can already name', ipa: '/sɛ kɔ.myn bʁy.lyʁ/', respell: '[seh ko-mün brü-LÜR]' },
    wrong: { fr: 'Euh... je ne sais pas.', en: 'which ends the turn and tells him nothing', ipa: '/ø ʒə nə sɛ pa/', respell: '[EU zhuh nuh seh PAH]' },
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65], audioFirst: true },
  },
  {
    kind: 'resolve', size: 'md',
    text: 'He asked for how bad. You gave him how bad. Neither of you used the word he started with.',
  },
];

const S_SCENE: LessonSection = {
  type: 'scene', id: SCENE, title: 'The Word You Did Not Have', frSub: 'Le mot qui manque',
  render: 'screens', layer: 'core', terms: ['describeAround', 'slot'],
  say: 'You can already say what hurts. This lesson is about what he asks next.',
  setting: { place: 'A walk-in clinic, third floor, the room smells of hand gel', city: 'Nantes', time: 'Tuesday afternoon' },
  beats: SCENE_BEATS,
  closing: { size: 'md', text: 'You cannot point at a pain. Say what it is like instead.' },
};

const S_GOALS: LessonSection = {
  type: 'goals', id: GOALS, title: 'What You Will Be Able To Do', frSub: 'Ce que vous saurez faire',
  layer: 'core', terms: ['construction', 'slot'],
  say: 'Four goals. Two of them are about listening, because this is the one situation where misunderstanding costs more than not being understood.',
  goals: [
    { t: 'Pick the right shape for a symptom', s: 'French has three and English has one. The choice happens before the word arrives.' },
    { t: 'Answer the questions you did not prepare for', s: 'A doctor asks about where, since when and how bad, in any order, using words the lesson never taught.' },
    { t: 'Get a dosage right by ear', s: 'Three times a day and every three hours are not the same instruction, and nobody writes it down for you.' },
    { t: 'Keep going when the word is missing', s: `Describe around it. ${REPAIR_UNIT} gave you six ways to ask again; this adds what to say when asking again will not help.` },
  ],
};

/** REQUIRED LAYOUT: the three constructions on ONE screen, each with its
 *  English beside it. This is the Owns, and splitting it across two sections
 *  makes it two small lessons. The test asserts it.
 *
 *  CONSTRUCTION 1 IS a1.24's AND IS CITED, NOT TAUGHT. The card says the
 *  learner already has it and names a1.24. Nothing here explains au, à la, aux
 *  or à l', in this card or anywhere else in the lesson. */
const S_THREE: LessonSection = {
  type: 'cardDeck', id: THREE, title: 'Three Shapes, One English', frSub: 'Trois constructions',
  render: 'deck', layer: 'core', size: 'lg', terms: ['construction'],
  say: REFRAME,
  audio: { ...FR, recordingId: 'rec-a2-28-three' },
  cards: [
    { head: 'Shape 1 · a body part', fr: 'J\'ai mal à la tête.', sub: 'My head hurts.', body: `You already have this one. ${BODY_UNIT} built five sections on it and you are not going to walk them again. It is here because the other two only make sense against it.`, label: `${BODY_UNIT} owns this` },
    { head: 'Shape 2 · a symptom noun', fr: 'J\'ai de la fièvre.', sub: 'I have a fever.', body: 'A noun you HAVE. La fièvre, la grippe, un rhume, la nausée, des frissons. English also uses a noun here, which is why this one feels safe and is not always right.', label: 'avoir plus a noun' },
    { head: 'Shape 3 · a bare verb', fr: 'Je tousse.', sub: 'I have a cough.', body: 'A verb, on its own, where English hands you a noun. Je tousse, je saigne, j\'éternue, je vomis. This is the shape anglophones almost never reach for and it is the commonest one in a clinic.', label: 'the verb, alone' },
    { head: 'The choice is not translatable', fr: 'J\'ai mal à la tête · J\'ai de la fièvre · Je tousse', sub: 'my head hurts · I have a fever · I have a cough', body: 'English uses a verb for the first, a noun for the second and a noun for the third. French uses three different shapes and none of them lines up. That is why the choice has to be made before the word arrives.', label: 'nothing predicts it' },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — the frame, and it is short
 * ══════════════════════════════════════════════════════════════════════════ */

/** The four slots. tapTable caps at six visible rows on a Pixel 6 and its
 *  header cells have a measured glyph budget, so four rows and three short
 *  heads. */
const S_SLOTS: LessonSection = {
  type: 'tapTable', id: SLOTS, title: 'What A Report Is Made Of', frSub: 'Les quatre cases',
  layer: 'core', terms: ['slot', 'construction'],
  say: 'A doctor wants four facts and will ask for them in any order. Knowing which one a question wants is most of understanding the question.',
  audio: { ...FR, recordingId: 'rec-a2-28-slots' },
  cols: ['the slot', 'he asks', 'you answer'],
  rows: [
    {
      cells: ['what', 'Qu\'est-ce qui vous amène ?', 'J\'ai de la fièvre.'],
      say: 'Qu\'est-ce qui vous amène ?',
      detail: { title: 'The opener, and it is not about travel', body: 'Amener is bring, so the question is what brings you in. A learner who parses the verb loses the turn. It is stored whole and it is always the first thing said.', say: 'Qu\'est-ce qui vous amène ?' },
    },
    {
      cells: ['where', 'Où avez-vous mal ?', 'J\'ai mal ici.'],
      say: 'Où avez-vous mal exactement ?',
      detail: { title: 'The slot you are ready for', body: `${BODY_UNIT} built this answer for you. What is new is only that somebody asked, and that ici plus a finger is a complete answer when the body part will not come.`, say: 'Où avez-vous mal exactement ?' },
    },
    {
      cells: ['since when', 'Depuis quand ?', 'Ça a commencé il y a trois jours.'],
      say: 'Ça a commencé il y a trois jours.',
      detail: { title: 'Two ways to fill it', body: `${DEPUIS_UNIT} owns depuis and everything about the tense it wants. You can also answer with il y a and sidestep it entirely, which is what the second answer here does.`, say: 'Ça a commencé il y a trois jours.' },
    },
    {
      cells: ['how bad', 'Ça vous lance ou ça vous brûle ?', 'C\'est comme une brûlure.'],
      say: 'Ça vous lance ou ça vous brûle ?',
      detail: { title: 'The slot that stops people', body: 'Two verbs nobody taught you, in a question that expects one of them back. You do not need either: c\'est comme plus a word you already have answers it completely.', say: 'C\'est plutôt une douleur sourde.' },
    },
  ],
};

/** THE SORT. Twelve symptoms into the three constructions, and FOUR of the
 *  twelve are words no deck in this lesson taught. That is the generation test
 *  (doctrine §B.1): if the rule works, it works on words the learner meets for
 *  the first time in the drill.
 *
 *  GROUP ITEMS USE `note`, NEVER `sub`. `sub` on a groupDrill item draws
 *  nothing; a2.07 shipped 33 blank lines that way and only the admin typecheck
 *  saw it. */
const S_SORT: LessonSection = {
  type: 'groupDrill', id: SORT, title: 'Which Shape Does It Take', frSub: 'Trier les symptômes',
  layer: 'core', terms: ['construction', 'slot'],
  say: REFRAME,
  audio: { ...FR, recordingId: 'rec-a2-28-sort' },
  groups: [
    {
      label: 'a body part hurts',
      items: [
        { fr: 'avoir mal à la tête', en: 'to have a headache', note: BODY_UNIT, itemId: 'fr.a2.symptomes.023' },
        { fr: 'avoir mal au ventre', en: 'to have stomach ache', note: BODY_UNIT, itemId: 'fr.a2.symptomes.024' },
        { fr: 'J\'ai mal partout.', en: 'I ache all over.', note: 'no body part at all', itemId: B(22) },
      ],
      check: { q: 'Why does « J\'ai mal partout » still count as shape 1?', opts: ['Because partout is a body part', 'Because avoir mal is the shape, and what follows it can be a place instead', 'Because it has mal in it', 'It does not, it is shape 2'], correct: 1, why: `Avoir mal is what makes it shape 1. ${BODY_UNIT} taught what comes after it; here the point is only that the shape survives when the body part does not.` },
    },
    {
      label: 'you HAVE a noun',
      items: [
        { fr: 'la fièvre', en: 'fever', note: 'j\'ai de la fièvre', itemId: 'fr.a2.symptomes.001' },
        { fr: 'la grippe', en: 'flu', note: 'j\'ai la grippe', itemId: 'fr.a2.symptomes.014' },
        { fr: 'le vertige', en: 'dizziness', note: 'NEW: j\'ai des vertiges', itemId: 'fr.a2.symptomes.017' },
      ],
      check: { q: 'You feel dizzy. Which shape?', opts: ['Je vertige.', 'J\'ai des vertiges.', 'J\'ai mal au vertige.', 'Je suis vertige.'], correct: 1, why: 'A noun you have. English says I am dizzy, which is an adjective, and none of the three French shapes is an adjective. This word was not in any deck: the rule had to do the work.' },
    },
    {
      label: 'the verb, on its own',
      items: [
        { fr: 'tousser', en: 'to cough', note: 'je tousse', itemId: 'fr.a2.symptomes.036' },
        { fr: 'saigner', en: 'to bleed', note: 'je saigne', itemId: 'fr.a2.symptomes.035' },
        { fr: 'éternuer', en: 'to sneeze', note: 'NEW: j\'éternue', itemId: 'fr.a2.symptomes.033' },
      ],
      check: { q: 'English says « I have a cough ». What does French say?', opts: ['J\'ai une toux.', 'Je tousse.', 'J\'ai mal à la toux.', 'Je suis toux.'], correct: 1, why: 'A bare verb where English hands you a noun. La toux exists as a word and is almost never how a person reports it. This is the shape anglophones reach for last and clinicians hear most.' },
    },
    {
      label: 'the four nobody taught you',
      items: [
        { fr: 'transpirer', en: 'to sweat', note: 'NEW: je transpire', itemId: 'fr.a2.symptomes.061' },
        { fr: 'se moucher', en: 'to blow one\'s nose', note: 'NEW: je me mouche', itemId: 'fr.a2.symptomes.102' },
        { fr: 'la migraine', en: 'migraine', note: 'j\'ai une migraine', itemId: 'fr.a2.symptomes.022' },
      ],
      check: { q: 'Three of these four are verbs and one is a noun. Which shape does « la migraine » take?', opts: ['Bare verb', 'Avoir plus a noun', 'Avoir mal à', 'Any of the three'], correct: 1, why: 'A noun you have, like la fièvre. The test of the rule is whether it survives a word the lesson never showed you, and these four are that test.' },
    },
  ],
};

/** Stepped trapDrill on CONSTRUCTION CHOICE ONLY. Nothing here tests the
 *  contraction, which is a1.24's, or the tense of depuis, which is a2.18's.
 *
 *  `size` comes OFF a stepped trapDrill. The stacked shape hides the gate, the
 *  audio and the sub-mission number. */
const S_PICK: LessonSection = {
  type: 'trapDrill', id: PICK, title: 'Pick The Shape, Fast', frSub: 'Choisir la construction',
  layer: 'core', swipe: true, terms: ['construction'],
  say: REFRAME,
  audio: { ...FR, recordingId: 'rec-a2-28-pick' },
  rule: {
    title: 'English is not a clue',
    body: 'My head hurts is a verb in English and shape 1 in French. I have a cough is a noun and becomes shape 3. The English predicts nothing, which is why the choice has to be a reflex.',
  },
  steps: [
    { kind: 'rule', label: 'The rule', title: 'The English Does Not Predict It' },
    { kind: 'cards', label: 'The six', title: 'Where They Come Apart' },
    { kind: 'audio', label: 'Hear them', title: 'Said At Speed' },
    { kind: 'drill', label: 'Now you', title: 'Which Shape', gate: true },
  ],
  cards: [
    { promptLabel: 'a cough', promptSound: 'Je tousse.', fr: 'verb, not noun', ipa: '/ʒə tus/', tip: 'English gives you a noun and French gives you a verb. J\'ai une toux is understood and marks you out immediately.' },
    { promptLabel: 'a fever', promptSound: 'J\'ai de la fièvre.', fr: 'noun, with de la', ipa: '/ʒe də la fjɛvʁ/', tip: 'Here the noun IS right. De la is the partitive and a1.29 owns it; nothing new is claimed about it here.' },
    { promptLabel: 'my head', promptSound: 'J\'ai mal à la tête.', fr: 'shape 1', ipa: '/ʒe mal a la tɛt/', tip: `English uses a verb, French uses avoir mal. ${BODY_UNIT} owns this shape and everything that follows it.` },
    { promptLabel: 'dizzy', promptSound: 'J\'ai des vertiges.', fr: 'noun, plural', ipa: '/ʒe de vɛʁ.tiʒ/', tip: 'English uses an adjective. None of the three French shapes is an adjective, so je suis vertige is not a near miss, it is a different language.' },
    { promptLabel: 'nauseous', promptSound: 'J\'ai la nausée.', fr: 'noun', ipa: '/ʒe la no.ze/', tip: 'Another English adjective that becomes a French noun. Je suis nauséeux exists and is not what a person says at a counter.' },
    { promptLabel: 'I am bleeding', promptSound: 'Je saigne.', fr: 'verb', ipa: '/ʒə sɛɲ/', tip: 'English uses a verb too, so this one is free. It is here to prove the rule is not simply the opposite of English.' },
  ],
  drill: [
    { promptSay: 'I have a cough.', opts: ['J\'ai une toux.', 'Je tousse.', 'J\'ai mal à la toux.'], correct: 1 },
    { promptSay: 'I have a fever.', opts: ['Je fièvre.', 'J\'ai de la fièvre.', 'J\'ai mal à la fièvre.'], correct: 1 },
    { promptSay: 'I feel dizzy.', opts: ['J\'ai des vertiges.', 'Je suis vertige.', 'Je vertige.'], correct: 0 },
    { promptSay: 'I am bleeding.', opts: ['J\'ai du sang.', 'Je saigne.', 'J\'ai mal au sang.'], correct: 1 },
    { promptSay: 'I feel sick.', opts: ['Je nausée.', 'J\'ai mal à la nausée.', 'J\'ai la nausée.'], correct: 2 },
    { promptSay: 'My back hurts.', opts: ['J\'ai mal au dos.', 'Je dos.', 'J\'ai un dos.'], correct: 0 },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — the Owns, and the heaviest act at 8 missions
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE DOCTOR'S QUESTIONS, HEARD COLD. `hideLines: true`, which shipped
 *  2026-08-15 and is the band's one funded engineering item.
 *
 *  QUESTIONS ASK WHAT WAS ASKED, NOT WHAT WAS SAID, and they ask WHICH SLOT
 *  rather than reprinting the French. That survives whether or not the flag is
 *  present, which is the prompt's own instruction.
 *
 *  AUTHORED SO IT IS LIFTABLE. Every line stands alone with no knowledge of
 *  this lesson's framing, so a2.35 can take it whole. */
const S_ASKS: LessonSection = {
  type: 'listening', id: ASKS, title: 'Five Questions, Unseen', frSub: 'Ce qu\'il vous demande',
  layer: 'core', terms: ['slot', 'construction'],
  say: 'The words are hidden until you have answered. Do not try to catch every word: catch which of the four slots he wants.',
  audio: { ...FR, recordingId: 'rec-a2-28-asks', audioFirst: true },
  hideLines: true,
  questionsInModal: true,
  lines: [
    { fr: 'Qu\'est-ce qui vous amène ?', en: 'What brings you in?' },
    { fr: 'Où avez-vous mal exactement ?', en: 'Where exactly does it hurt?' },
    { fr: 'Ça vous lance ou ça vous brûle ?', en: 'Is it a shooting pain or a burning one?' },
    { fr: 'Vous êtes allergique à quelque chose ?', en: 'Are you allergic to anything?' },
    { fr: 'Vous prenez d\'autres médicaments ?', en: 'Are you taking any other medication?' },
  ],
  questions: [
    { q: 'Line 1. Which slot does he want?', opts: ['Where', 'What', 'Since when', 'How bad'], correct: 1, why: 'It is the opener and it always is. Amener is bring, so he is asking what brings you in, and a learner who stops to parse the verb has already lost the turn.' },
    { q: 'Line 2. Which slot does he want?', opts: ['Where', 'What', 'Since when', 'How bad'], correct: 0, why: 'Where. You can answer it with ici and a finger, which is a complete answer and needs no body part at all.' },
    { q: 'Line 3. How many options is he offering you?', opts: ['One', 'Two', 'Three', 'None, it is open'], correct: 1, why: 'Two verbs joined by ou. You do not need either of them: c\'est comme plus a word you already have answers the question completely.' },
    { q: 'Line 4. What is he checking?', opts: ['Whether it hurts at night', 'Whether you have a fever', 'Whether anything causes you a reaction', 'How long it has lasted'], correct: 2, why: 'Allergies, and it is asked at every consultation and every pharmacy counter. It is the one answer in this lesson that matters medically rather than conversationally.' },
    { q: 'Line 5. How many of these five wanted a yes or a no?', opts: ['One', 'Two', 'Three', 'All five'], correct: 2, why: 'Lines 3, 4 and 5. Three of the five can be answered in one word, which is worth knowing when you are unwell and building sentences is expensive.' },
  ],
};

/** ADJACENCY PAIRS. The question predicts the answer, and that is the cheapest
 *  reception win in the unit. REQUIRED LAYOUT: the doctor's question and the
 *  slot it wants, side by side. */
const S_PAIRS: LessonSection = {
  type: 'groupDrill', id: PAIRS, title: 'His Question, Your Slot', frSub: 'La question et la case',
  layer: 'core', terms: ['slot', 'describeAround'],
  say: 'You do not have to understand a question to answer it. You have to know which of the four it is.',
  audio: { ...FR, recordingId: 'rec-a2-28-pairs' },
  groups: [
    {
      label: 'he wants WHERE',
      items: [
        { fr: 'Où avez-vous mal exactement ?', en: 'Where exactly does it hurt?', note: 'answer: J\'ai mal ici.', itemId: S(195) },
        { fr: 'Montrez-moi où ça fait mal.', en: 'Show me where it hurts.', note: 'answer: a finger', itemId: S(202) },
        { fr: 'Ça fait mal quand j\'appuie ?', en: 'Does it hurt when I press?', note: 'answer: oui or non', itemId: S(200) },
      ],
      check: { q: 'Which of these three needs no French from you at all?', opts: ['Où avez-vous mal exactement ?', 'Montrez-moi où ça fait mal.', 'Ça fait mal quand j\'appuie ?', 'All three need a sentence'], correct: 1, why: 'Montrez-moi is an instruction, not a question. You point. It is the only turn in the consultation where the answer is not language.' },
    },
    {
      label: 'he wants HOW BAD',
      items: [
        { fr: 'Ça vous lance ou ça vous brûle ?', en: 'Shooting or burning?', note: 'answer: c\'est comme...', itemId: S(196) },
        { fr: 'Vous avez mal la nuit aussi ?', en: 'Does it hurt at night too?', note: 'answer: oui or non', itemId: S(201) },
        { fr: 'C\'est plutôt une douleur sourde.', en: 'It is more of a dull ache.', note: 'yours, when neither fits', itemId: S(220) },
      ],
      check: { q: 'He offers you lance or brûle and neither is right. What do you say?', opts: ['Repeat the question back', 'Pick the closer one anyway', 'C\'est plutôt une douleur sourde.', 'Say nothing and wait'], correct: 2, why: 'Plutôt is the hedge that makes an approximate answer acceptable. Picking the wrong one on purpose gives him information that is not true, which is worse than hedging.' },
    },
    {
      label: 'he wants a FACT about you',
      items: [
        { fr: 'Vous êtes allergique à quelque chose ?', en: 'Are you allergic to anything?', note: 'the one that matters', itemId: S(198) },
        { fr: 'Vous prenez d\'autres médicaments ?', en: 'Any other medication?', note: 'answer: oui or non', itemId: S(199) },
        { fr: 'Vous avez de la fièvre ?', en: 'Do you have a fever?', note: 'answer: shape 2', itemId: S(197) },
      ],
      check: { q: 'Which of these three would you answer with a shape rather than a yes?', opts: ['Vous êtes allergique à quelque chose ?', 'Vous prenez d\'autres médicaments ?', 'Vous avez de la fièvre ?', 'None of them'], correct: 2, why: 'All three take oui or non, and only the fever one invites you to say more using shape 2. Knowing a yes will do is what keeps a consultation moving when you are unwell.' },
    },
  ],
};

/** a2.07's MOVE, QUOTED. Zero repair rows authored, six itemIds cited, a2.07
 *  named by unit id. The ids are released through the act's `deckTranche`, NOT
 *  through `itemIds` on this cardDeck: no renderer reads `itemIds` on a
 *  cardDeck, and a2.07 and a2.26 both shipped that dead field.
 *
 *  CARD 5 IS THIS UNIT'S ADDITION AND IT IS NOT a2.07's. Asking a doctor to
 *  repeat gets you the same question again. When the missing word is a symptom,
 *  no amount of repetition supplies it, because the word is not in the room. */
const S_REPAIR: LessonSection = {
  type: 'cardDeck', id: REPAIR, title: 'When Asking Again Will Not Help', frSub: 'Redemander, ou décrire',
  render: 'deck', layer: 'core', size: 'lg', terms: ['rung', 'describeAround'],
  say: `${REPAIR_UNIT} authored six ways to ask again, once, for the whole band, and this lesson adds none of them. What it adds is the case where asking again gets you nothing.`,
  audio: { ...FR, recordingId: 'rec-a2-28-repair' },
  cards: [
    { head: 'Rung 1', fr: 'Pardon ?', sub: '[par-DOHⁿ]', body: `One word, and it gives away nothing about why you missed it. ${REPAIR_UNIT} put it first because it costs you nothing at all.`, label: `${REPAIR_UNIT}, rung 1` },
    { head: 'Rung 3', fr: 'Plus lentement, s\'il vous plaît.', sub: '[plü lahⁿt-MAHⁿ seel voo PLEH]', body: 'The first rung that names the fault. A doctor will slow down without a flicker; it is a thing patients ask for several times a day.', label: `${REPAIR_UNIT}, rung 3` },
    { head: 'Rung 5', fr: 'Qu\'est-ce que ça veut dire ?', sub: '[kess kuh sa veu DEER]', body: 'Narrows the failure to one word rather than the whole turn. In a clinic this is often the right rung, because usually only one word was missing.', label: `${REPAIR_UNIT}, rung 5` },
    { head: 'When none of the six helps', fr: 'Je ne connais pas le mot. C\'est comme une brûlure.', sub: '[zhuh nuh ko-neh PAH luh MOH]', body: 'The six rungs all ask the other person for something. Here the missing word is YOURS, not his, and no amount of repeating supplies it. Say what it is like instead, using a word you already have.', label: 'the word is yours, not his' },
    { head: 'Buy yourself a second try', fr: 'C\'est difficile à expliquer.', sub: '[seh dee-fee-SEEL ah eks-plee-KAY]', body: 'Five words that stop the silence from ending the turn. A doctor who hears it waits. A doctor who hears nothing moves on and starts guessing.', label: 'keeps the turn open' },
  ],
};

/** THE CONSULTATION, ELEVEN TURNS, AND IT IS THE ONLY `scenario` IN THIS
 *  LESSON. The two-scenario device check could not be run, so the fallback the
 *  prompt specifies was taken up front: one scenario, ten to twelve turns,
 *  ending on the prescription handed over and the dosage read back.
 *
 *  TWO TURNS REQUIRE A REPAIR MOVE, because the doctor uses a word the lesson
 *  never taught. Turn 4 is `ça vous lance` and turn 8 is `à jeun`.
 *
 *  MODEL ANSWERS ARE SHORT. A person with a fever produces short sentences, and
 *  a lesson that models paragraphs is modelling the wrong performance.
 *
 *  `vous` throughout. Every turn carries `userEn` and two or three `alts`, and
 *  the alts deliberately carry different question forms for the same meaning,
 *  because TCF EO caps a candidate who produces only one.
 *
 *  NO `Scenario.exam`: it is read by no code anywhere in `ealch-v2/src`. */
const S_CONSULT: LessonSection = {
  type: 'scenario', id: CONSULT, title: 'The Consultation', frSub: 'La consultation',
  layer: 'core', terms: ['slot', 'describeAround', 'ordonnance'],
  say: 'Eleven turns, start to finish. Twice he uses a word this lesson never taught you, and both times you can answer anyway.',
  setting: 'A walk-in clinic in Nantes, Tuesday afternoon. You have been waiting forty minutes and you are not at your best.',
  turns: [
    { ai: 'Bonjour. Qu\'est-ce qui vous amène ?', en: 'Hello. What brings you in?', user: 'J\'ai mal au ventre depuis trois jours.', userEn: 'I have had stomach pain for three days.', alts: [{ fr: 'J\'ai mal au ventre.', en: 'I have stomach pain.' }, { fr: 'Ça a commencé il y a trois jours, j\'ai mal au ventre.', en: 'It started three days ago, my stomach hurts.' }] },
    { ai: 'Où avez-vous mal exactement ?', en: 'Where exactly does it hurt?', user: 'J\'ai mal ici, sous les côtes.', userEn: 'It hurts here, under the ribs.', alts: [{ fr: 'J\'ai mal ici.', en: 'It hurts here.' }, { fr: 'Là, à droite.', en: 'There, on the right.' }] },
    { ai: 'Ça fait mal quand j\'appuie ?', en: 'Does it hurt when I press?', user: 'Oui, un peu.', userEn: 'Yes, a bit.', alts: [{ fr: 'Oui, beaucoup.', en: 'Yes, a lot.' }, { fr: 'Non, pas vraiment.', en: 'No, not really.' }] },
    { ai: 'Ça vous lance ou ça vous brûle ?', en: 'Is it a shooting pain or a burning one?', user: 'Je ne connais pas le mot. C\'est comme une brûlure.', userEn: 'I do not know the word. It is like a burning.', alts: [{ fr: 'C\'est plutôt une douleur sourde.', en: 'It is more of a dull ache.' }, { fr: 'Qu\'est-ce que ça veut dire, lance ?', en: 'What does lance mean?' }] },
    { ai: 'D\'accord. Vous avez de la fièvre ?', en: 'All right. Do you have a fever?', user: 'Oui, depuis hier soir.', userEn: 'Yes, since last night.', alts: [{ fr: 'Un peu, oui.', en: 'A little, yes.' }, { fr: 'Non, je ne crois pas.', en: 'No, I do not think so.' }] },
    { ai: 'Vous êtes allergique à quelque chose ?', en: 'Are you allergic to anything?', user: 'Non, à rien.', userEn: 'No, to nothing.', alts: [{ fr: 'Non, pas que je sache.', en: 'No, not that I know of.' }, { fr: 'Oui, aux arachides.', en: 'Yes, to peanuts.' }] },
    { ai: 'Vous prenez d\'autres médicaments ?', en: 'Are you taking any other medication?', user: 'Non, aucun.', userEn: 'No, none.', alts: [{ fr: 'Non, rien du tout.', en: 'No, nothing at all.' }, { fr: 'Oui, un traitement pour la tension.', en: 'Yes, something for blood pressure.' }] },
    { ai: 'Bon. Ce n\'est pas grave. Je vous prescris un traitement, à prendre à jeun.', en: 'Right. It is nothing serious. I am prescribing you a course of treatment, to be taken on an empty stomach.', user: 'Pardon, qu\'est-ce que ça veut dire, à jeun ?', userEn: 'Sorry, what does à jeun mean?', alts: [{ fr: 'À jeun, c\'est avant de manger ?', en: 'À jeun, that means before eating?' }, { fr: 'Plus lentement, s\'il vous plaît.', en: 'More slowly, please.' }] },
    { ai: 'Sans avoir mangé. Une demi-heure avant le petit-déjeuner.', en: 'Without having eaten. Half an hour before breakfast.', user: 'D\'accord, une demi-heure avant.', userEn: 'All right, half an hour before.', alts: [{ fr: 'Donc avant de manger, d\'accord.', en: 'So before eating, right.' }, { fr: 'Et si j\'oublie ?', en: 'And if I forget?' }] },
    { ai: 'Un comprimé matin et soir, pendant sept jours.', en: 'One tablet morning and evening, for seven days.', user: 'Un comprimé matin et soir, pendant sept jours.', userEn: 'One tablet morning and evening, for seven days.', alts: [{ fr: 'Deux fois par jour, pendant une semaine ?', en: 'Twice a day, for a week?' }, { fr: 'C\'est combien de fois par jour ?', en: 'How many times a day is that?' }] },
    { ai: 'C\'est ça. Si ça ne passe pas, revenez me voir.', en: 'That is right. If it does not clear up, come back and see me.', user: 'Merci, docteur. Au revoir.', userEn: 'Thank you, doctor. Goodbye.', alts: [{ fr: 'Très bien, merci beaucoup.', en: 'Very good, thank you.' }, { fr: 'Dans combien de temps si ça ne passe pas ?', en: 'How long before I come back?' }] },
  ],
};

/** THE PHARMACY COUNTER, as a deck rather than a second scenario. `je voudrais`
 *  is UNANALYSED LEXIS: the conditional is never named and never conjugated
 *  (collation 1.8, and a2.29 owns the register ladder).
 *
 *  ONE card here could have carried the Quebec divergence and does NOT: the
 *  policy allows one card per unit and s17-quebec is it, so putting a second
 *  one here would break the count. */
const S_COUNTER: LessonSection = {
  type: 'cardDeck', id: COUNTER, title: 'At The Counter', frSub: 'À la pharmacie',
  render: 'deck', layer: 'core', size: 'lg', terms: ['ordonnance', 'dosage'],
  say: 'The pharmacy is three moves: say what you need, hand over the paper, understand the answer. The third one is the only hard part.',
  audio: { ...FR, recordingId: 'rec-a2-28-counter' },
  cards: [
    { head: 'You open', fr: 'Je voudrais quelque chose contre la toux.', sub: '[zhuh voo-DREH kel-kuh shohz kohⁿtr lah TOO]', body: `Contre plus the symptom. It works for anything you can name, and ${MODAL_UNIT} shipped je voudrais as a fixed form you use whole.`, label: 'contre plus a symptom' },
    { head: 'You hand it over', fr: 'Voici mon ordonnance.', sub: '[vwah-SEE mohⁿ-nor-do-NAHⁿSS]', body: 'Two words and a piece of paper. From here the pharmacist leads and you are listening rather than producing.', label: 'the paper does the talking' },
    { head: 'He asks first', fr: 'Vous avez une ordonnance ?', sub: '[voo-zah-VAY ün or-do-NAHⁿSS]', body: 'The counter usually opens with this rather than with a greeting question. Oui or non answers it completely.', label: 'his opener' },
    { head: 'The refusal, and it is short', fr: 'C\'est sur ordonnance.', sub: '[seh sür or-do-NAHⁿSS]', body: 'Four words meaning he cannot sell it to you without a prescription. A learner waiting for a longer explanation misses the whole answer.', label: 'four words, and it is a no' },
    { head: 'The one you can say yes to', fr: 'Vous préférez le générique ?', sub: '[voo pray-fay-RAY luh zhay-nay-REEK]', body: 'Asked at every French counter. It is the same medicine at a lower price and oui is a complete answer.', label: 'oui is enough' },
  ],
};

/** THE HARM BAR. `hideLines: true`. Four dosage instructions heard cold, and
 *  the questions are HOW MANY and WHEN, never what did you hear.
 *
 *  Getting a hotel room number wrong is an inconvenience. Getting
 *  `trois fois par jour` wrong is not. This is the only unit in the band where
 *  misunderstanding is worse than not being understood.
 *
 *  NO DRUG IS NAMED, AT ANY DOSE, ANYWHERE. Generic instructions only, and the
 *  guard is a word list rather than a sentence in a report. */
const S_DOSE: LessonSection = {
  type: 'listening', id: DOSE, title: 'How Many, And When', frSub: 'La posologie',
  layer: 'core', terms: ['dosage', 'ordonnance'],
  say: 'Four instructions, heard once each, the way they are said across a counter. Catch the number and catch the word after it.',
  audio: { ...FR, recordingId: 'rec-a2-28-dose', audioFirst: true },
  hideLines: true,
  questionsInModal: true,
  lines: [
    { fr: 'Un comprimé matin et soir.', en: 'One tablet morning and evening.' },
    { fr: 'Trois fois par jour, avant les repas.', en: 'Three times a day, before meals.' },
    { fr: 'Toutes les trois heures, pas plus.', en: 'Every three hours, no more than that.' },
    { fr: 'À jeun, une demi-heure avant de manger.', en: 'On an empty stomach, half an hour before eating.' },
  ],
  questions: [
    { q: 'Line 1. How many times a day?', opts: ['Once', 'Twice', 'Three times', 'It does not say'], correct: 1, why: 'Matin et soir is twice, and neither the word two nor the word fois appears in it. A learner listening for a number hears none.' },
    { q: 'Line 2. When, relative to eating?', opts: ['Before', 'After', 'During', 'It does not matter'], correct: 0, why: 'Avant les repas. Avant and après are one syllable apart and they are the whole instruction, which is why they are the trap in the next mission.' },
    { q: 'Line 3. How many times in twenty-four hours?', opts: ['Three', 'Six', 'Eight', 'Twelve'], correct: 2, why: 'Every three hours is eight, not three. Trois fois par jour and toutes les trois heures share a word and are nearly three times apart, and that is the harm bar this section exists for.' },
    { q: 'Line 4. Can you take it with breakfast?', opts: ['Yes', 'No, half an hour before', 'Only with water', 'It does not say'], correct: 1, why: 'À jeun means on an empty stomach. It is two syllables and it changes the whole instruction, and it appears in only two published rows anywhere, both above this level.' },
  ],
};

/** THE GATED TRAP. Stepped, `gate: true` on the drill step.
 *
 *  THE FOLD DECIDED THESE PAIRS. `trois fois par jour` folds to
 *  `troisfoisparjour` and `toutes les trois heures` to `touteslestroisheures`:
 *  far apart, so the contrast is safe to score. A numeral written two ways
 *  would fold together and none is authored. */
const S_DOSETRAP: LessonSection = {
  type: 'trapDrill', id: DOSETRAP, title: 'Three Times, Or Every Three Hours', frSub: 'Le piège de la posologie',
  layer: 'core', swipe: true, terms: ['dosage'],
  say: 'Four pairs that share a word and mean different amounts. This is the one place in the app where getting it wrong matters outside the app.',
  audio: { ...FR, recordingId: 'rec-a2-28-dosetrap' },
  rule: {
    title: 'The shared word is not the instruction',
    body: 'Trois fois par jour and toutes les trois heures both contain trois. One is three times and the other is eight. The number you hear is not the number of doses, and the word around it is what tells you which.',
  },
  steps: [
    { kind: 'rule', label: 'The rule', title: 'Trois Is Not The Answer' },
    { kind: 'cards', label: 'The four', title: 'Pairs That Change The Dose' },
    { kind: 'audio', label: 'Hear both', title: 'Said At Counter Speed' },
    { kind: 'drill', label: 'Now you', title: 'Which Instruction Was It', gate: true },
  ],
  cards: [
    { promptLabel: 'three times against every three hours', promptSound: 'Trois fois par jour, avant les repas.', fr: '3 a day, not 8', ipa: '/tʁwa fwa paʁ ʒuʁ/', tip: 'Both contain trois. Fois par jour counts doses; toutes les trois heures counts the gap between them, and over a day that is nearly three times as much.' },
    { promptLabel: 'the gap, not the count', promptSound: 'Toutes les trois heures, pas plus.', fr: '8 a day, not 3', ipa: '/tut le tʁwa.zœʁ/', tip: 'Toutes les is every. Pas plus on the end is the ceiling and it is the quietest part of the sentence.' },
    { promptLabel: 'before against after', promptSound: 'Trois fois par jour, avant les repas.', fr: 'avant, not après', ipa: '/a.vɑ̃ le ʁə.pa/', tip: 'One syllable apart and it is the whole instruction. Some things do nothing on a full stomach and some are hard on an empty one.' },
    { promptLabel: 'on an empty stomach', promptSound: 'À jeun, une demi-heure avant de manger.', fr: 'nothing beforehand', ipa: '/a ʒœ̃/', tip: 'À jeun is two syllables and it is a condition on everything else in the sentence. Two published rows in the whole corpus carry it and both are above this level.' },
  ],
  drill: [
    { promptSay: 'Trois fois par jour, avant les repas.', opts: ['Eight times a day', 'Three times a day', 'Three times a week'], correct: 1 },
    { promptSay: 'Toutes les trois heures, pas plus.', opts: ['Eight times a day', 'Three times a day', 'Once every three days'], correct: 0 },
    { promptSay: 'À jeun, une demi-heure avant de manger.', opts: ['With food', 'Straight after eating', 'Before eating, on an empty stomach'], correct: 2 },
    { promptSay: 'Un comprimé matin et soir.', opts: ['Twice a day', 'Once a day', 'Three times a day'], correct: 0 },
    { promptSay: 'Pas plus de six par jour.', opts: ['At least six a day', 'Six a day exactly', 'Six a day at most'], correct: 2 },
    { promptSay: 'C\'est un traitement de sept jours.', opts: ['Seven days', 'Seven doses', 'Seven weeks'], correct: 0 },
  ],
};

/** THE DISCLAIMER. REQUIRED, and it is the house position for health-adjacent
 *  content: Paul answered decision item 5 on 2026-08-15, option B.
 *
 *  EXACTLY ONE CARD. `layer: 'more'`, so a learner on the core path walks past
 *  it. It sits immediately after `s13-dosetrap` and immediately before
 *  `s15-errors`, which closes the dosage run rather than opening the trap act.
 *
 *  WHY EXACTLY HERE. `s12-dose` and `s13-dosetrap` are one teaching move in two
 *  parts, so nothing goes between them. The card lands when the learner has
 *  just discovered, in a gated drill, that they can mishear a dose. That is the
 *  one moment when "a pharmacist tells you the dose" is information rather than
 *  boilerplate.
 *
 *  IT IS SCORED NOWHERE: no `itemIds`, no quiz question, no quiz `ref`, not in
 *  the dictée, not in `practice`, not in `reviewDeck`. The test pins all of it.
 *
 *  It ends on French the learner can USE, which is what makes it teaching
 *  rather than a notice. */
const S_NOTMEDICAL: LessonSection = {
  type: 'cardDeck', id: NOTMEDICAL, title: 'Understanding It, And Deciding It', frSub: 'Deux choses différentes',
  render: 'deck', layer: 'more', size: 'lg', terms: ['dosage'],
  say: 'One card, and then back to the French.',
  cards: [
    {
      head: 'Two different jobs',
      fr: 'C\'est combien de fois par jour ?',
      sub: '[seh kohⁿ-byehⁿ duh fwah par ZHOOR]',
      body: 'This lesson teaches you the French for a dose, which is what lets you follow one. Deciding what dose to take is the pharmacist\'s job or the doctor\'s, and asking them is normal and expected. You have just proved you can hear the difference between three times a day and every three hours; that skill is what makes the question above worth asking, and asking it is what a French speaker does too.',
      label: 'ask it at the counter',
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — the trap
 * ══════════════════════════════════════════════════════════════════════════ */

const S_ERRORS: LessonSection = {
  type: 'commonErrors', id: ERRORS, title: 'What Anglophones Say', frSub: 'Les erreurs fréquentes',
  layer: 'core', size: 'lg', swipe: true, terms: ['construction', 'slot'],
  say: 'Six, one per screen. Every one of them is understood and every one of them marks you out as translating.',
  errors: [
    { wrong: 'J\'ai une toux.', right: 'Je tousse.', why: 'English hands you a noun and French wants the verb. La toux exists and is what you call the symptom in the abstract, not what you say when you have it.' },
    { wrong: 'Je suis chaud.', right: 'J\'ai de la fièvre.', why: 'Je suis chaud does not mean you have a temperature, and what it does mean is not something to say to a doctor. Fever is a noun you HAVE.' },
    { wrong: 'Ma tête fait mal.', right: 'J\'ai mal à la tête.', why: `A word-for-word translation of my head hurts. French puts the person first and the part second. ${BODY_UNIT} built five sections on this shape and this is the only place it is worth naming the error.` },
    { wrong: 'Je suis malade au ventre.', right: 'J\'ai mal au ventre.', why: 'Être malade is being ill in general. Avoir mal is a specific pain in a specific place, and the two are not interchangeable even though English blurs them.' },
    { wrong: 'Pour trois jours.', right: 'depuis trois jours', why: `Pour is how long something WILL last. For a thing that started and is still going, French wants depuis, and ${DEPUIS_UNIT} owns that word and everything about it. You can also sidestep it: ça a commencé il y a trois jours.` },
    { wrong: 'Je me sens malade.', right: 'Je ne me sens pas bien.', why: 'Je me sens malade is heard as being about to be sick. Je ne me sens pas bien is the general one, and it is what you say in a waiting room.' },
  ],
};

/** A genuine CE task. `questionsInModal: true` pages the passage away before
 *  the questions, so this is not a scan-back. A pharmacy label plus a short
 *  note, and a `glossary` for the words the learner will not have.
 *
 *  NO DRUG NAMED. The label says `traitement` and the note is generic. */
const S_ORDONNANCE: LessonSection = {
  type: 'reading', id: ORDONNANCE, title: 'The Label On The Box', frSub: 'Lire l\'ordonnance',
  layer: 'core', terms: ['ordonnance', 'dosage'],
  say: 'What the pharmacist sticks on the box, and the note underneath it. Read it once, then answer.',
  questionsInModal: true,
  // EVERY GLOSSARY ENTRY MUST APPEAR LITERALLY IN THE PASSAGE.
  // `gloss.logic.test.ts:95` walks the whole seed and fails any entry that
  // underlines nothing. Four of this section's first six did: « le traitement »
  // was written TRAITEMENT in caps, « persister » appeared only as the
  // conjugated « persistent », « reprendre rendez-vous » only as « reprenez »,
  // and « le pharmacien » only as « du pharmacien ». The passage was rewritten
  // in ordinary sentence case and every entry now quotes the form it matches.
  text: 'Prendre le traitement : un comprimé matin et soir, à jeun, une demi-heure avant le repas, pendant sept jours. Ne pas dépasser deux comprimés par jour. Note du pharmacien : si les symptômes persistent après une semaine, reprenez rendez-vous. Ne pas prendre avec un autre traitement sans en parler à votre pharmacien.',
  glossary: [
    { word: 'le traitement', en: 'the course of treatment', note: 'What the doctor prescribes, as a whole. Not a single dose and never a drug name.' },
    { word: 'à jeun', en: 'on an empty stomach', note: 'Two syllables, and a condition on the whole instruction. Only two published rows in the corpus carry it, both above this level.' },
    { word: 'dépasser', en: 'to exceed, to go over', note: 'Ne pas dépasser is how a ceiling is written on a box. It is never said as a bare number.' },
    { word: 'les symptômes', en: 'the symptoms', note: 'Si les symptômes persistent is a fixed opening on any label, and what follows it is what to do when the treatment has not worked.' },
    { word: 'reprenez rendez-vous', en: 'make another appointment', note: 'Reprendre is to take again. The label carries the instruction for its own failure.' },
    { word: 'du pharmacien', en: "the pharmacist's", note: 'Published at fr.a2.symptomes.108. The person the last line sends you back to.' },
  ],
  questions: [
    { q: 'The label gives a dose and a ceiling. Are they the same number?', a: 'Almost. One tablet morning and evening is two a day, and the ceiling is two a day, so here they meet exactly. They do not always, and the ceiling is the one that stops you doubling up when a dose is missed.' },
    { q: 'Two separate facts decide WHEN you take it. What are they?', a: 'À jeun, meaning nothing in the stomach, and une demi-heure avant le repas, meaning a specific gap before eating. Either one on its own is not the instruction, and the second is the one people drop.' },
    { q: 'The note tells you what to do if it has not worked. What, and after how long?', a: 'Reprendre rendez-vous, after a week. The label carries the instruction for its own failure, which is the part people stop reading before they reach.' },
    { q: 'The last line repeats something the doctor already asked at the consultation. What, and why twice?', a: 'Whether you are taking anything else. It is asked by the doctor, printed on the box, and asked again at the counter, because it is the one answer in this encounter that matters medically rather than conversationally.' },
  ],
};

/** ONE Quebec card, `layer: 'more'`, recognition only, never scored. Collation
 *  C3, confirmed by Paul. A France-based learner walks past it.
 *
 *  The design doc planned a whole `examples` section of France/Quebec service
 *  pairs and it was overruled to this one card. */
const S_QUEBEC: LessonSection = {
  type: 'cardDeck', id: QUEBEC, title: 'The Same Words, A Different System', frSub: 'Au Québec',
  render: 'deck', layer: 'more', size: 'lg', terms: ['ordonnance'],
  say: 'One card. Nothing here is ever the answer to a question in this lesson.',
  cards: [
    { head: 'In Quebec', fr: 'la RAMQ · la carte soleil · le CLSC · Info-Santé', sub: 'the health board, the card, the local clinic, the phone line', body: 'The French in this lesson is the same on both sides of the Atlantic. What changes is the paperwork around it: the carte soleil is the health card, the CLSC is the neighbourhood clinic, and Info-Santé is the number you call before deciding whether to go anywhere. Recognition only; every drill in this lesson stays France-standard.', label: 'recognition only, never scored' },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — production
 * ══════════════════════════════════════════════════════════════════════════ */

/** The dosage line, written. The only place the learner produces a number.
 *
 *  `normalizeFr` strips accents, BOTH apostrophes, hyphens and all punctuation,
 *  so no item here has any of those as its ONLY difficulty. That is why
 *  `Montrez-moi où ça fait mal` is NOT in this section despite being the
 *  obvious sixth: it carries a hyphen the check cannot see. */
const S_DICTATION: LessonSection = {
  type: 'dictation', id: DICTATION, title: 'Write The Instruction', frSub: 'La dictée',
  layer: 'core', terms: ['dosage', 'slot'],
  say: 'Six lines, and four of them are a dose. You have heard every one at least three times by now.',
  audio: { ...FR, recordingId: 'rec-a2-28-dictation' },
  itemIds: DICTEE_IDS,
};

/** PRACTICE IS MANDATORY. `lesson-contract.test.ts:505` mirrors the publish
 *  gate. `skill: 'speak'`, authored knowing the field is DECORATIVE:
 *  `LessonSection.tsx`'s `case 'practice'` renders `PracticeVFView` and never
 *  passes it. Every item named here carries `voiceflash`, checked against
 *  POSTGRES rather than the seed.
 *
 *  IT CARRIES THE COUNTER LINES, which is the second half of the prompt's
 *  single-scenario fallback ("a listening plus a practice on the counter lines"). */
const S_SPEAK: LessonSection = {
  type: 'practice', id: SPEAK, title: 'Say It Out Loud', frSub: 'À vous',
  layer: 'core', skill: 'speak', terms: ['construction', 'describeAround'],
  say: 'Your half is the short half. Three shapes, the four things you say when the word is missing, and the counter lines.',
  //
  //  THREE IMPORTED LEARNER REPORTS WERE DROPPED FROM THIS LIST, AND THE
  //  REASON IS A FINDING WORTH THE BAND'S ATTENTION.
  //
  //  `fr.a2.symptomes.039`, `.006` and `.042` are exactly the sentences this
  //  section wants, and NONE of them can be spoken: they carry `dictation`,
  //  `flashcard` and `sentence/flashcard/review` respectively, and not one
  //  carries `voiceflash`. Measured wider: of the 193 published a2 rows in
  //  `symptomes`, ZERO learner-voice sentences carry `voiceflash` at all.
  //
  //  **The health corpus is complete and unspeakable.** It was authored for
  //  reading and dictation and never for production, which is why a `practice`
  //  section in this unit can only name rows THIS BUILD authored. This build
  //  does not widen another lesson's drill arrays to suit itself, which is the
  //  line a2.26 drew when the same guard dropped three of its imports and a2.27
  //  drew again over two.
  itemIds: [
    S(218), S(219), S(220), S(221), S(222), S(223),
    B(21), B(22), B(24),
    REPAIR_IDS[0], REPAIR_IDS[2], REPAIR_IDS[4],
  ],
};

/** THE PHARMACY COUNTER, BY EAR. This is the section that would have been a
 *  second `scenario`. Repeated `listening` is proven shipped in six lessons,
 *  three of them at 3x, so this needs no device check where a second
 *  `scenario` would have.
 *
 *  `hideLines` is NOT set here, deliberately. `s07-asks` and `s12-dose` are the
 *  blind ones; this one is the debrief, and seeing the pharmacist's turns
 *  written down is what lets the learner map them onto the deck they met at
 *  `s11-counter`. Its questions still ask WHICH MOVE rather than what was said,
 *  so it would survive the flag being absent. */
const S_PHARMA: LessonSection = {
  type: 'listening', id: PHARMA, title: 'The Counter, Start To Finish', frSub: 'Au comptoir',
  layer: 'core', terms: ['ordonnance', 'dosage'],
  say: 'The pharmacist\'s five turns, in order. You have met all of them; this is where they arrive as one exchange.',
  audio: { ...FR, recordingId: 'rec-a2-28-pharma', audioFirst: true },
  questionsInModal: true,
  lines: [
    { fr: 'Vous avez une ordonnance ?', en: 'Do you have a prescription?' },
    { fr: 'Vous êtes allergique à quelque chose ?', en: 'Are you allergic to anything?' },
    { fr: 'Vous préférez le générique ?', en: 'Would you like the generic?' },
    { fr: 'Un comprimé matin et soir, à jeun.', en: 'One tablet morning and evening, on an empty stomach.' },
    { fr: 'Si ça ne passe pas, revenez me voir.', en: 'If it does not clear up, come back and see me.' },
  ],
  questions: [
    { q: 'Which turn can you answer by handing something over?', opts: ['The first', 'The second', 'The third', 'The fourth'], correct: 0, why: 'Voici mon ordonnance, and the paper does the rest. It is the one turn in the exchange where you need almost no French.' },
    { q: 'Which turn asks the same thing the doctor already asked?', opts: ['The first', 'The second', 'The third', 'The fifth'], correct: 1, why: 'The allergy question. It is asked twice on purpose, by two different people, because it is the one answer that matters medically.' },
    { q: 'Which turn is the dosage?', opts: ['The second', 'The third', 'The fourth', 'The fifth'], correct: 2, why: 'Matin et soir is twice a day and à jeun is a condition on both. Two facts in six words, said once, at counter speed.' },
    { q: 'What does the last turn tell you to do?', opts: ['Take more', 'Come back if it does not work', 'Call an ambulance', 'Finish the whole box'], correct: 1, why: 'Si ça ne passe pas. Ça passe for a symptom clearing up is idiomatic and appears in no other published row, so it is worth meeting here.' },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — the close
 * ══════════════════════════════════════════════════════════════════════════ */

const S_REVIEW: LessonSection = {
  type: 'reviewDeck', id: REVIEW, title: 'The Three Shapes, And The Way Out', frSub: 'Révision',
  render: 'deck', layer: 'core', terms: ['construction', 'describeAround'],
  say: 'His half and yours, one last time.',
  cards: [
    { front: 'English says my head hurts', back: 'J\'ai mal à la tête. Shape 1, and a1.24 owns it.', say: 'J\'ai mal à la tête.' },
    { front: 'English says I have a fever', back: 'J\'ai de la fièvre. Shape 2: a noun you have.', say: 'J\'ai de la fièvre.' },
    { front: 'English says I have a cough', back: 'Je tousse. Shape 3: a bare verb where English used a noun.', say: 'Je tousse.' },
    { front: 'English says I feel dizzy', back: 'J\'ai des vertiges. An English adjective becomes a French noun.', say: 'J\'ai des vertiges.' },
    { front: 'The first thing he says, always', back: 'Qu\'est-ce qui vous amène ? It is not about travel.', say: 'Qu\'est-ce qui vous amène ?' },
    { front: 'The question that stops people', back: 'Ça vous lance ou ça vous brûle ? Two verbs nobody taught you.', say: 'Ça vous lance ou ça vous brûle ?' },
    { front: 'You do not have the word', back: 'C\'est comme une brûlure. Say what it is like, using a word you have.', say: 'C\'est comme une brûlure.' },
    { front: 'Neither of his two options fits', back: 'C\'est plutôt une douleur sourde. Plutôt is the hedge.', say: 'C\'est plutôt une douleur sourde.' },
    { front: 'The one answer that matters medically', back: 'Vous êtes allergique à quelque chose ? Asked twice, by two people.', say: 'Vous êtes allergique à quelque chose ?' },
    { front: 'Three times a day, or every three hours?', back: 'Trois fois par jour is three. Toutes les trois heures is eight.', say: 'Toutes les trois heures, pas plus.' },
    { front: 'Two syllables that change the whole instruction', back: 'À jeun. Nothing in the stomach, half an hour before eating.', say: 'À jeun, une demi-heure avant de manger.' },
    { front: 'He cannot sell it to you', back: 'C\'est sur ordonnance. Four words, and it is a no.', say: 'C\'est sur ordonnance.' },
  ],
};

const S_PROGRESS: LessonSection = {
  type: 'progressCheck', id: PROGRESS, title: 'Where You Are', frSub: 'Le point',
  layer: 'core',
  say: 'Twenty-two missions. Here is what changed.',
  body: 'You came in able to say what hurts and unable to answer what came back. A symptom now takes one of three shapes and you pick before the word arrives. When the word will not come, you describe around it rather than stopping, which is the move that actually completes the encounter. And a dose is now two facts rather than a blur: how many, and when.',
  stats: [
    { k: 'Shapes a symptom can take', v: '3' },
    { k: 'Slots a doctor asks for', v: '4' },
    { k: 'Doctor questions in the corpus before this lesson', v: '0 in vous' },
    { k: 'Times a day for toutes les trois heures', v: '8, not 3' },
    { k: 'Ways to ask again', v: '6, and they are a2.07\'s' },
  ],
};

/* ── The quiz. Six rounds of four, twenty-four questions. ──────────────────
 *
 *  ONE quiz. A second `quiz` section is silently never rendered.
 *
 *  NO QUESTION TESTS THE `à` CONTRACTION, THE TENSE `depuis` WANTS, OR THE
 *  REFLEXIVE PAST. Those are a1.24's, a2.18's and a2.22/a2.23's, and the test
 *  asserts the absence rather than trusting the authoring.
 *
 *  THE ANSWER FOLD. `matchesAccept` grades `typeIn` and `errorSpot` through
 *  `fold()` (`answer.logic.ts:32`), which strips accents, case, punctuation,
 *  hyphens, BOTH apostrophes and ALL whitespace:
 *
 *    fièvre = fievre        l'ordonnance = lordonnance      à jeun = ajeun
 *    Docteur = docteur      avant-hier = avant hier         j'ai = jai
 *
 *  QUESTIONS THIS UNIT WANTED AND COULD NOT WRITE:
 *
 *   - A `typeIn` on `à jeun` against `ajeun`. Word division folds away.
 *   - An `errorSpot` on `fièvre` against `fievre`. Accents fold away.
 *   - A `typeIn` whose `accept` array lists a hyphenated and an unhyphenated
 *     form as though they were different answers. They are one answer, so the
 *     second entry is redundant rather than load-bearing.
 *
 *  The dosage material is where an author reaches for a comma, and a comma
 *  folds away too. `trois fois par jour` and `toutes les trois heures` are far
 *  apart under the fold and are safe to contrast, which is why the harm-bar
 *  items are `listenChoose` on an option index rather than free text.
 *
 *  BAND RULE, applied item by item: the expected answer and the most plausible
 *  wrong answer were folded and compared. Both the apply script and the test
 *  assert `fold(answer) !== fold(distractor)`.
 *
 *  At most half `mcq` (a1.24 pins that on itself; house style). 8 of 24.
 *
 *  The quiz shuffles options at runtime; missions render authored order. So the
 *  mission drills above are hand-varied and nothing here is. */
const S_QUIZ: LessonSection = {
  type: 'quiz', id: QUIZ, title: 'The Exam', frSub: 'L\'examen',
  layer: 'core', terms: ['construction', 'dosage', 'rung'],
  say: 'Six rounds of four. Eight of the twenty-four you cannot read.',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-shape',
      label: 'Which shape',
      say: 'Four on the choice French makes and English does not.',
      targets: ['err-noun-for-verb', 'err-adjective'],
      questions: [
        { format: 'mcq', ref: THREE, q: 'English: « I have a cough. » What does French say?', opts: ['J\'ai une toux.', 'Je tousse.', 'J\'ai mal à la toux.', 'Je suis toux.'], correct: 1, why: 'A bare verb where English hands you a noun. La toux exists as a word and is almost never how a person reports having one.' },
        { format: 'mcq', ref: PICK, q: 'English: « I feel dizzy. » Which shape does French take?', opts: ['A bare verb', 'Avoir mal à', 'An adjective, as in English', 'Avoir plus a noun'], correct: 3, why: 'J\'ai des vertiges. English uses an adjective and none of the three French shapes is an adjective, so this is not a near miss.' },
        { format: 'mcq', ref: SORT, q: 'Which of these is NOT one of the three shapes?', opts: ['avoir mal à plus a body part', 'avoir plus a symptom noun', 'être plus an adjective', 'a bare verb'], correct: 2, why: 'Je suis chaud is the classic one and it does not mean you have a temperature. French has three shapes for a symptom and être is not among them.' },
        { format: 'mcq', ref: THREE, q: 'Why can the English not tell you which shape to use?', opts: ['Because English uses a verb for one, a noun for another, and they do not line up', 'Because French is irregular', 'Because the shapes are regional', 'They can, if you translate carefully'], correct: 0, why: 'My head hurts is a verb and becomes shape 1; I have a cough is a noun and becomes shape 3. The mapping runs both ways and neither direction is reliable.' },
      ],
    },
    {
      id: 'r2-asked',
      label: 'What he asked',
      say: 'Four you have to hear. Catch the slot, not every word.',
      targets: ['err-slot-missed', 'err-freeze'],
      questions: [
        { format: 'listenChoose', ref: ASKS, say: 'Qu\'est-ce qui vous amène ?', q: 'Listen. What is he asking?', opts: ['Where it hurts', 'What brings you in', 'How you travelled', 'Since when'], correct: 1, why: 'It is the opener and it always is. Amener is bring, and how you travelled is the trap for a learner who parses the verb instead of storing the phrase.' },
        { format: 'listenChoose', ref: ASKS, say: 'Ça vous lance ou ça vous brûle ?', q: 'Listen. Which slot does he want?', opts: ['How bad', 'Where', 'Since when', 'What'], correct: 0, why: 'Two verbs you were never taught, offering you a choice. You do not need either: c\'est comme plus a word you have answers it completely.' },
        { format: 'listenChoose', ref: ASKS, say: 'Vous êtes allergique à quelque chose ?', q: 'Listen. What is he checking?', opts: ['Whether it hurts at night', 'Whether you take other medication', 'Whether anything gives you a reaction', 'Whether you have a fever'], correct: 2, why: 'Allergies. It is the one question in this lesson that matters medically rather than conversationally, and it is asked again at the counter.' },
        { format: 'listenChoose', ref: PAIRS, say: 'Montrez-moi où ça fait mal.', q: 'Listen. What does he want you to do?', opts: ['Say where it hurts', 'Describe the pain', 'Say when it started', 'Point at it'], correct: 3, why: 'Montrez-moi is an instruction rather than a question. It is the only turn in the consultation where the answer is not language at all.' },
      ],
    },
    {
      id: 'r3-build',
      label: 'Build the report',
      say: 'Four you type. Word choice is what is being tested, never the spelling.',
      targets: ['err-noun-for-verb', 'err-etre'],
      questions: [
        { format: 'typeIn', ref: THREE, q: 'Say you have a fever. Four words: « J\'ai ... »', accept: ['J\'ai de la fièvre.', 'jai de la fievre', 'de la fièvre', 'J\'ai de la fievre'], answer: 'J\'ai de la fièvre.', why: 'Shape 2, a noun you have, with the partitive a1.29 owns. The accent is not being tested because it folds away; the shape is.' },
        { format: 'typeIn', ref: THREE, q: 'Say you have a cough, the way a French speaker does. Two words.', accept: ['Je tousse.', 'je tousse'], answer: 'Je tousse.', why: 'The bare verb. J\'ai une toux folds to a completely different string, so this item genuinely tests which shape you reached for.' },
        { format: 'typeIn', ref: REPAIR, q: 'You do not have the word. Say what it is like: « C\'est comme ... »', accept: ['C\'est comme une brûlure.', 'cest comme une brulure', 'comme une brûlure', 'C\'est comme une brulure.'], answer: 'C\'est comme une brûlure.', why: 'C\'est comme plus a word you already have. It answers the question without the word he used, which is the move this lesson exists for.' },
        { format: 'typeIn', ref: SLOTS, q: 'Answer « Depuis quand ? » WITHOUT using depuis. « Ça a commencé ... »', accept: ['Ça a commencé il y a trois jours.', 'ca a commence il y a trois jours', 'il y a trois jours'], answer: 'Ça a commencé il y a trois jours.', why: `Il y a fills the slot and sidesteps the word entirely. ${DEPUIS_UNIT} owns depuis and nothing here asks you to get its tense right.` },
      ],
    },
    {
      id: 'r4-dose',
      label: 'The dose',
      say: 'Four you have to hear, and this is the round that matters outside the app.',
      targets: ['err-dose-frequency', 'err-dose-timing'],
      questions: [
        { format: 'listenChoose', ref: DOSE, say: 'Trois fois par jour, avant les repas.', q: 'Listen. How many times a day?', opts: ['Three', 'Eight', 'Twice', 'Once'], correct: 0, why: 'Fois par jour counts doses. The trap is the other instruction, which also contains trois and means eight.' },
        { format: 'listenChoose', ref: DOSETRAP, say: 'Toutes les trois heures, pas plus.', q: 'Listen. How many times a day?', opts: ['Three', 'Six', 'Eight', 'Twelve'], correct: 2, why: 'Toutes les trois heures is the gap between doses, not the count. Over a day that is eight, which is nearly three times the other instruction.' },
        { format: 'listenChoose', ref: DOSE, say: 'À jeun, une demi-heure avant de manger.', q: 'Listen. When do you take it?', opts: ['With food', 'Just after eating', 'At bedtime', 'Before eating, on an empty stomach'], correct: 3, why: 'À jeun is two syllables and it is a condition on the whole instruction. Two published rows in the corpus carry it and both are above this level.' },
        { format: 'listenChoose', ref: DOSETRAP, say: 'Un comprimé matin et soir.', q: 'Listen. How many a day?', opts: ['One', 'Two', 'Three', 'Four'], correct: 1, why: 'Matin et soir is twice, and neither the word two nor the word fois is in it. A learner listening for a number hears none at all.' },
      ],
    },
    {
      id: 'r5-stuck',
      label: 'When the word will not come',
      say: 'Four on getting through it. The six rungs are a2.07\'s.',
      targets: ['err-freeze', 'err-wrong-move'],
      questions: [
        { format: 'mcq', ref: REPAIR, q: 'He uses a word you do not know and you need HIM to say it again more slowly. Which rung?', opts: ['Pardon ?', 'Plus lentement, s\'il vous plaît.', 'C\'est comme une brûlure.', 'Je ne connais pas le mot.'], correct: 1, why: 'Rung 3 is the first that names the fault. a2.07 owns the repair ladder and the principle is to reach for the lowest rung that will actually fix the problem.' },
        { format: 'mcq', ref: REPAIR, q: 'YOU do not have the French for your own symptom. Why will asking him to repeat not help?', opts: ['Because he will be annoyed', 'Because he speaks too fast', 'Because it is not polite', 'Because the missing word is yours, not his'], correct: 3, why: 'The six rungs all ask the other person for something. Repeating a question you understood does not supply a word you never had, and no amount of it will.' },
        { format: 'mcq', ref: PAIRS, q: 'He offers « lance ou brûle » and neither fits. Best answer?', opts: ['Pick the closer one', 'Say nothing', 'C\'est plutôt une douleur sourde.', 'Ask him to repeat'], correct: 2, why: 'Plutôt is the hedge that makes an approximate answer acceptable. Picking one on purpose gives him something untrue, which is worse than hedging.' },
        { format: 'mcq', ref: SCENE, q: 'What does silence cost you in a consultation?', opts: ['He asks something simpler and starts guessing', 'Nothing, he will wait', 'He ends the appointment', 'He speaks English'], correct: 0, why: 'He moves on. You have lost the one piece of information only you had, and the rest of the consultation is built on his guess instead of your answer.' },
      ],
    },
    {
      id: 'r6-fix',
      label: 'Fix the English',
      say: 'Four to correct. Every one is understood and every one marks you out.',
      targets: ['err-noun-for-verb', 'err-etre'],
      questions: [
        { format: 'errorSpot', ref: ERRORS, q: 'You are telling a doctor you have a cough. Fix this.', prompt: 'J\'ai une toux.', accept: ['Je tousse.', 'je tousse'], answer: 'Je tousse.', why: 'The bare verb. The two fold to completely different strings, so what is being tested is the shape you chose and not how you typed it.' },
        { format: 'errorSpot', ref: ERRORS, q: 'You mean you have a temperature. Fix this.', prompt: 'Je suis chaud.', accept: ['J\'ai de la fièvre.', 'jai de la fievre', 'J\'ai de la fievre'], answer: 'J\'ai de la fièvre.', why: 'Je suis chaud does not mean you have a fever, and what it does mean is not for a consulting room. Fever is a noun you have.' },
        { format: 'errorSpot', ref: ERRORS, q: 'Word-for-word from English. Fix this.', prompt: 'Ma tête fait mal.', accept: ['J\'ai mal à la tête.', 'jai mal a la tete', 'J\'ai mal a la tete'], answer: 'J\'ai mal à la tête.', why: `French puts the person first and the part second. ${BODY_UNIT} built five sections on this shape; this question only asks you to reach for it, not to explain it.` },
        { format: 'errorSpot', ref: ERRORS, q: 'It started three days ago and it is still going. Fix this.', prompt: 'J\'ai mal au ventre pour trois jours.', accept: ['J\'ai mal au ventre depuis trois jours.', 'jai mal au ventre depuis trois jours', 'depuis trois jours'], answer: 'J\'ai mal au ventre depuis trois jours.', why: `Pour is how long something will last. ${DEPUIS_UNIT} owns depuis and everything about the tense it wants; all this question asks is which of the two words goes in the gap.` },
      ],
    },
  ],
};

const S_ROUNDUP: LessonSection = {
  type: 'roundup', id: ROUNDUP, title: 'What You Take With You', frSub: 'Le bilan',
  layer: 'core',
  say: 'Three things, and the first one is the whole lesson.',
  body: 'English gives you one shape for a symptom and French picks one of three, so the choice happens before the word arrives. A doctor wants four facts and will ask for them in any order, using words nobody taught you, and knowing which of the four he wants is most of understanding the question. When the word will not come, describe around it: you cannot point at a pain, so say what it is like using a word you already have. And a dose is two facts rather than one blur, because three times a day and every three hours share a word and are nearly three times apart.',
  points: [
    REFRAME,
    'Three shapes: avoir mal à a body part, avoir plus a symptom noun, or a bare verb.',
    'Four slots: what, where, since when, how bad. He asks them in any order.',
    'C\'est comme une brûlure. You cannot point at a pain, so say what it is like.',
    'Trois fois par jour is three. Toutes les trois heures is eight.',
    `The six ways to ask again are ${REPAIR_UNIT}'s, and they do not help when the missing word is yours.`,
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACTS, DRILLS, TRIGGERS AND THE LESSON
 * ══════════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  S_SCENE, S_GOALS, S_THREE,
  S_SLOTS, S_SORT, S_PICK,
  S_ASKS, S_PAIRS, S_REPAIR, S_CONSULT, S_COUNTER, S_DOSE, S_DOSETRAP, S_NOTMEDICAL,
  S_ERRORS, S_ORDONNANCE, S_QUEBEC,
  S_DICTATION, S_SPEAK, S_PHARMA,
  S_REVIEW, S_PROGRESS, S_QUIZ, S_ROUNDUP,
];

const ACTS: LessonAct[] = [
  {
    id: 'act1', title: 'The word you did not have',
    sections: [SCENE, GOALS, THREE],
    milestone: 'You have watched a correct sentence stop dead on a word nobody taught you.',
    estScreens: 20,
    restPoints: [`${SCENE}/after-the-break`],
  },
  {
    id: 'act2', title: 'The frame, and it is short',
    sections: [SLOTS, SORT, PICK],
    milestone: 'You can sort a symptom into one of three shapes, including four words this lesson never showed you.',
    estScreens: 22,
    restPoints: [`${SORT}/after-the-sort`],
  },
  {
    id: 'act3', title: 'His half of the conversation',
    sections: [ASKS, PAIRS, REPAIR, CONSULT, COUNTER, DOSE, DOSETRAP, NOTMEDICAL],
    milestone: 'You can follow a consultation you did not script and take a dose away from it correctly.',
    estScreens: 56,
    restPoints: [`${REPAIR}/after-the-rungs`, `${DOSETRAP}/after-the-gate`],
  },
  {
    id: 'act4', title: 'What anglophones say',
    sections: [ERRORS, ORDONNANCE, QUEBEC],
    milestone: 'You can read a label and you know the six sentences that mark you out as translating.',
    estScreens: 24,
    restPoints: [`${ORDONNANCE}/after-the-label`],
  },
  {
    id: 'act5', title: 'Your half of it',
    sections: [DICTATION, SPEAK, PHARMA],
    milestone: 'You have written six instructions from the audio and run the counter by ear.',
    estScreens: 24,
    restPoints: [`${SPEAK}/after-the-drill`],
  },
  {
    id: 'act6', title: 'Measure',
    sections: [REVIEW, PROGRESS, QUIZ, ROUNDUP],
    milestone: 'Twenty-four questions, and eight of them you cannot read.',
    estScreens: 22,
    restPoints: [`${PROGRESS}/before-the-exam`],
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-shapes', title: 'Three shapes', format: 'flashcard' as const,
    coach: 'Read the English. Say the French, and notice which of the three shapes it took before you say it.',
    pairs: [
      ['I have a cough', 'Je tousse.'],
      ['I have a fever', 'J\'ai de la fièvre.'],
      ['My head hurts', 'J\'ai mal à la tête.'],
      ['I feel dizzy', 'J\'ai des vertiges.'],
      ['I am bleeding', 'Je saigne.'],
    ],
  },
  {
    id: 'drill-asked', title: 'What he asked', format: 'flashcard' as const,
    coach: 'Say which of the four slots each question wants. The French answer is the second thing, not the first.',
    pairs: [
      ['What brings you in?', 'Qu\'est-ce qui vous amène ?'],
      ['Where exactly does it hurt?', 'Où avez-vous mal exactement ?'],
      ['Shooting or burning?', 'Ça vous lance ou ça vous brûle ?'],
      ['Are you allergic to anything?', 'Vous êtes allergique à quelque chose ?'],
      ['Any other medication?', 'Vous prenez d\'autres médicaments ?'],
    ],
  },
  {
    id: 'drill-dose', title: 'How many, and when', format: 'flashcard' as const,
    coach: 'Say the French, then say how many times a day it means. The second answer is the one that matters.',
    pairs: [
      ['Three times a day, before meals', 'Trois fois par jour, avant les repas.'],
      ['Every three hours, no more', 'Toutes les trois heures, pas plus.'],
      ['One tablet morning and evening', 'Un comprimé matin et soir.'],
      ['On an empty stomach', 'À jeun, une demi-heure avant de manger.'],
      ['No more than six a day', 'Pas plus de six par jour.'],
    ],
  },
];

const ERROR_TRIGGERS = [
  {
    id: 'err-noun-for-verb', drill: 'drill-shapes',
    description: 'Reaches for a noun because English used one, and produces j\'ai une toux where French wants je tousse.',
    detectOn: [SORT, PICK, `${QUIZ}/r1-shape`, `${QUIZ}/r6-fix`],
  },
  {
    id: 'err-adjective', drill: 'drill-shapes',
    description: 'Uses être plus an adjective, as English does, where none of the three French shapes is an adjective.',
    detectOn: [PICK, `${QUIZ}/r1-shape`],
  },
  {
    id: 'err-etre', drill: 'drill-shapes',
    description: 'Says je suis chaud for a fever, which does not mean that and is not for a consulting room.',
    detectOn: [ERRORS, `${QUIZ}/r6-fix`],
  },
  {
    id: 'err-slot-missed', drill: 'drill-asked',
    description: 'Tries to decode every word of the doctor\'s question instead of catching which of the four slots it wants.',
    detectOn: [ASKS, PAIRS, `${QUIZ}/r2-asked`],
  },
  {
    id: 'err-freeze', drill: 'drill-asked',
    description: 'Stops when the word is missing. The doctor waits, then asks something simpler and starts guessing.',
    detectOn: [SCENE, REPAIR, `${QUIZ}/r5-stuck`],
  },
  {
    id: 'err-wrong-move', drill: 'drill-asked',
    description: 'Asks the doctor to repeat when the missing word is the learner\'s own, so repeating supplies nothing.',
    detectOn: [REPAIR, `${QUIZ}/r5-stuck`],
  },
  {
    id: 'err-dose-frequency', drill: 'drill-dose',
    description: 'Hears trois in toutes les trois heures and takes it three times a day instead of eight.',
    detectOn: [DOSE, DOSETRAP, `${QUIZ}/r4-dose`],
  },
  {
    id: 'err-dose-timing', drill: 'drill-dose',
    description: 'Loses avant against après, or misses à jeun entirely, both of which are two syllables and change the instruction.',
    detectOn: [DOSE, DOSETRAP, ORDONNANCE, `${QUIZ}/r4-dose`],
  },
];

/** ONE ARRAY PER ACT. Every id carries the `flashcard` drill, which is what
 *  makes a tranche release produce a card. Checked against Postgres.
 *
 *  a2.07's six repair ids are released in ACT 3, where s09-repair sits, and NOT
 *  through `itemIds` on that cardDeck, because no renderer reads it. */
const RELEASABLE = (ids: readonly string[]) => ids.filter((i) => !NOT_RELEASABLE.has(i));

const DECK_TRANCHE: string[][] = [
  // act 1
  [...RELEASABLE(IMPORTED.constructions)],
  // act 2
  [...RELEASABLE([...IMPORTED.symptomNouns, ...IMPORTED.symptomVerbs]), B(21), B(22), B(23)],
  // act 3
  [S(194), S(195), S(196), S(197), S(198), S(199), S(200), S(201), S(202),
    S(203), S(204), S(205), S(206), S(207),
    S(208), S(209), S(210), S(211), S(212), S(213),
    S(218), S(219), S(220), S(221), S(222), S(223),
    B(24), ...REPAIR_IDS],
  // act 4
  [S(214), S(215), S(216), S(217), ...RELEASABLE(IMPORTED.service)],
  // act 5
  [...RELEASABLE([...IMPORTED.learnerReports, ...IMPORTED.body])],
  // act 6
  [...RELEASABLE([...IMPORTED.clinic, ...IMPORTED.people])],
];

/** Every id this lesson can put in front of a learner. The merge script pulls
 *  each out of Postgres and writes it into the seed, because the seed is a CUT:
 *  `symptomes` holds 334 published rows and showed ZERO before this build, and
 *  `systeme-de-sante` holds 583 and showed zero. Without that pull the imported
 *  cards render empty on device while every test passes. */
const GROUP_ITEM_IDS: string[] = SECTIONS.flatMap((s) =>
  ((s as { groups?: Array<{ items?: Array<{ itemId?: string }> }> }).groups ?? [])
    .flatMap((g) => (g.items ?? []).map((i) => i.itemId).filter((i): i is string => !!i)));

const ITEM_IDS: string[] = [
  ...new Set([
    ...DECK_TRANCHE.flat(),
    ...(S_SPEAK.itemIds ?? []),
    ...DICTEE_IDS,
    // A GROUP ITEM'S `itemId` IS A REACHABILITY ROUTE OF ITS OWN. Doctrine §E:
    // an item is reachable if a SECTION names it, OR if a tranche releases it
    // and it carries `flashcard`. `fr.a2.symptomes.102` is named by s05-sort
    // and carries no flashcard, so it is correctly in no tranche and must still
    // be carried into the seed, or its card renders blank on device while every
    // test passes against a corpus that has it.
    ...GROUP_ITEM_IDS,
  ]),
];

export const MEDECIN_LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  level: 'a2',
  tag: 'A2 · LEÇON 27',
  version: 1,
  title: UNIT.title,
  intro: 'You can already say what hurts. This lesson is about the question that comes back at you, and about what to say when the word will not come.',

  grammarIntroduced: [
    'That French has three constructions for a symptom where English has one cue, and that the choice is made before the word arrives: avoir mal à a body part, avoir plus a symptom noun, or a bare verb',
    'The four slots of a symptom report, what, where, since when and how bad, as RECEPTION: which slot a doctor\'s question wants, rather than which words it contains',
    'The doctor\'s half of a consultation in the vous register, which no published row in the corpus carried at this level before this lesson',
    'Describing around a missing symptom word, c\'est comme une brûlure, as the move that completes an encounter when asking for a repeat cannot, because the missing word belongs to the learner and not to the other speaker',
    'Dosage reception as two separate facts, frequency and timing, with trois fois par jour against toutes les trois heures as the pair that changes the amount taken',
    'The pharmacy counter as three moves: say what you need, hand over the prescription, understand the answer',
    'The repair move applied to a clinical encounter, cited from a2.07 by itemId and unit id, with zero repair rows authored here',
  ],

  grammarAssumed: [
    'avoir mal à and the full article contraction au, à la, aux and à l\', which a1.24 owns across five sections and two pinned tests, used here as construction 1 and never explained',
    'depuis and the tense it wants, which a2.18 owns with 280 occurrences and a dedicated trapDrill, used here in the doctor\'s questions and never taught',
    'The reflexive past for an injury, which a2.22 and a2.23 own, imported in fr.a2.corps rows and never taught',
    'The partitive de la, which a1.29 owns, appearing inside j\'ai de la fièvre with no new claim made about it',
    'The futur proche, which a2.01 owns, appearing in je vais vous examiner',
    'je voudrais as a fixed form shipped by a2.13, used whole, with the family it belongs to named nowhere',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Trois constructions, quatre cases, et le mot qui manque.',
    minutes: 30,
    difficulty: 3,
    glyph: '🩺',
    screens: 168,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: [],
  deckTranche: DECK_TRANCHE,
  terms: MEDECIN_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
  },
};

export const LESSON = MEDECIN_LESSON;
export { ACTS, SECTIONS, DECK_TRANCHE, ITEM_IDS, ERROR_TRIGGERS, DRILLS };
export const SPEAK_ID = SPEAK;
export const QUIZ_ID = QUIZ;
export const THREE_ID = THREE;
export const ASKS_ID = ASKS;
export const DOSE_ID = DOSE;
export const DOSETRAP_ID = DOSETRAP;
export const NOTMEDICAL_ID = NOTMEDICAL;
export const ERRORS_ID = ERRORS;
export const QUEBEC_ID = QUEBEC;
export const DICTATION_ID = DICTATION;
export const REPAIR_ID = REPAIR;
export const CONSULT_ID = CONSULT;
export const PHARMA_ID = PHARMA;
export const IMPORTED_IDS = IMPORTED;
export const CITED_UNITS = { BODY_UNIT, DEPUIS_UNIT, MODAL_UNIT, REPAIR_UNIT };
