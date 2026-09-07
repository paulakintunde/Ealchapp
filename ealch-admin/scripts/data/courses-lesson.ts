// a2.26.l1 « Les courses & l'argent » — the lesson.
//
// 24 missions, 24 sections, six acts, ONE lesson, ONE quiz.
//
// ACT 3 IS THE HEAVIEST, at 7 missions against act 2's 4. Doctrine §B.5: the
// Owns must outweigh the paradigm. There is no paradigm at a till, so the
// SCRIPT takes the paradigm's slot in act 2 and price-and-change reception gets
// act 3 to itself.
//
// BOTH FUNDED GATES WERE OPEN WHEN THIS WAS AUTHORED.
//   * `04-REPAIR-MOVE-IDS.md` exists, so a2.07 has landed. s11-repair is built
//     against a2.07 AS SHIPPED, cites its six ids and authors nothing.
//   * `listening.hideLines` shipped 2026-08-15 (schema.ts:676,
//     MissionRich.tsx:1966, its own test file, and a2.07 already uses it).
//     s07-heard is authored with `hideLines: true` as specified. The dictation
//     fallback was NOT taken and the unit is NOT exposed by blocking step 4.
//
// THE MASKED-QUESTION TRAP, INHERITED FROM a2.07 AND OBEYED HERE. a2.07 found
// on device that the question rail renders UNDER the masked cards, so a
// question that opens by quoting its line hands the words straight back and
// `hideLines` buys nothing. Every question in s07-heard refers to its line BY
// NUMBER and never reprints the French. This matters more here than it did
// there: a2.07's questions ask which STAGE a line belongs to, and these ask
// what the FIGURE was, which is exactly what a visible transcript would give
// away.
//
// NO CLOCK ANYWHERE. `setInterval` is 0 across all four render files
// (collation §1.9), so every beat that could imply time pressure is
// tap-to-continue and says so.

import type { Lesson, LessonAct, LessonSection, LessonDrill } from '../../../ealch-v2/src/content/schema.ts';
import { COURSES_TERMS } from './courses-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }
import {
  UNIT, LESSON_ID, REFRAME, C, M, Q, REPAIR_IDS, REPAIR_UNIT, IMPORTED,
  PRICE_UNIT, NUMBERS_UNIT, CONTAINER_UNIT, MODAL_UNIT,
} from './courses-corpus.ts';

/* ── Section ids, named once so acts, quiz refs and rest points cannot drift ── */
const SCENE = 's01-scene';
const GOALS = 's02-goals';
const SHAPE = 's03-shape';
const THEIRS = 's04-theirside';
const YOURS = 's05-yourside';
const QUANTITY = 's06-quantity';
const HEARD = 's07-heard';
const TAIL = 's08-tail';
const TOTAL = 's09-total';
const WHICH = 's10-which';
const REPAIR = 's11-repair';
const CHANGE = 's12-change';
const PAYING = 's13-paying';
const REFUSE = 's14-refuse';
const QUEBEC = 's15-quebec';
const ERRORS = 's16-errors';
const FOLLOWUP = 's17-followup';
const DICTEE = 's18-dictee';
const RECEIPT = 's19-receipt';
const SAY = 's20-say';
const SCENARIO = 's21-scenario';
const REVIEW = 's22-review';
const PROGRESS = 's23-progress';
const QUIZ = 's24-quiz';
const ROUNDUP = 's25-roundup';

const FR = { lang: 'fr-FR' as const, mode: 'tts' as const, speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — the transaction that died at the till
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 *  could not finish. Nobody is rude. The learner has done everything right
 *  until the number arrives, and the number is the one thing they cannot slow
 *  down.
 *
 *  LAYOUT: no bubble ends in a spaced « ! ». A spaced exclamation mark makes
 *  the French line drop its last word while the gloss still translates it, and
 *  shop copy is dense with Bonjour ! and Voilà !. Every bubble here ends in a
 *  full stop or a question mark.
 *
 *  LAYOUT: `cent vingt-quatre euros quatre-vingts` is 38 characters and the
 *  scene bubble clips long lines. The longest bubble here is
 *  « Ça fait quatre-vingt-dix-sept euros trente. » at 43, which is why it is
 *  the one checked first on device. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration', size: 'md',
    text: 'A bakery in Tours, twenty to nine on a Tuesday. You are collecting an order for the office and you have practised the sentence twice on the way.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration', size: 'md',
    text: 'You say it cleanly. She nods, packs eleven things into two boxes, and starts talking again while she is still folding the lid.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble', from: 'you', reveal: 'auto', size: 'md',
    fr: 'Bonjour, je voudrais la commande pour Delacroix.', en: '(Hello, I would like the order for Delacroix.)',
    audio: { lang: 'fr-FR', mode: 'tts' },
  },
  {
    kind: 'bubble', from: 'them', reveal: 'tap', size: 'md',
    speaker: 'The baker', fr: 'Ça fait quatre-vingt-dix-sept euros trente.',
    en: 'That comes to ninety-seven euros thirty.',
    stage: 'You caught every word except the ones that were the number.',
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] },
  },
  {
    kind: 'choice', size: 'lg',
    prompt: 'You have a fifty and a hundred in your hand. What do you do?',
    options: [
      { fr: 'Hand over the hundred and hope.', en: 'it is probably enough', audio: { mode: 'tts', voice: 'coach' }, outcome: 'breaks' },
      { fr: 'Pardon ?', en: 'ask her to say it again', audio: { lang: 'fr-FR', mode: 'tts' }, outcome: 'works' },
    ],
    followUp: {
      works: 'One word, and it costs you nothing. She says the number again, slightly slower, and the transaction continues.',
      breaks: 'It was enough. You also have no idea what you paid, and you will not know until you look at the receipt on the tram.',
    },
  },
  {
    kind: 'break', size: 'lg',
    heading: 'You heard all of it except the part that mattered',
    body: 'Your sentence was correct and she understood it. Then she said a number once, at her speed, inside a sentence that started before it. Nothing about the French was hard. You had no warning a figure was coming and no way to slow it.',
    coach: `The number comes once. Asking again is part of the script, and ${unitRef('a2.07')} already gave you six ways to do it.`,
    right: { fr: 'Pardon ?', en: 'the cheapest thing you can say', ipa: '/paʁ.dɔ̃/', respell: '[par-DOHⁿ]' },
    wrong: { fr: 'Euh... oui, voilà.', en: 'handing over a note you have not checked', ipa: '/ø wi vwa.la/', respell: '[EU wee vwa-LA]' },
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65], audioFirst: true },
  },
  {
    kind: 'bubble', from: 'them', reveal: 'auto', size: 'md',
    speaker: 'The baker', fr: 'Je vous rends deux euros soixante-dix.',
    en: 'Here is two euros seventy change.',
    stage: 'A second number, said faster than the first, while she is already looking past you.',
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] },
  },
  {
    kind: 'resolve', size: 'md',
    text: 'Two numbers arrived. You caught neither, and only one of them was the price.',
  },
];

const S_SCENE: LessonSection = {
  type: 'scene', id: SCENE, title: 'The Number That Came Once', frSub: 'Le chiffre dit une seule fois',
  render: 'screens', layer: 'core', terms: ['total', 'theirHalf'],
  say: { text: 'You have been taught how to ask for things. Nobody has taught you what comes back at you.', voice: 'coach', timing: 'onFirstVisitOnly' },
  setting: { place: 'A bakery with two people already queueing behind you', city: 'Tours', time: 'Tuesday, twenty to nine', ambience: 'room-tone-lobby' },
  beats: SCENE_BEATS,
  closing: { size: 'md', text: 'The number comes once. Asking again is part of the script.' },
};

const S_GOALS: LessonSection = {
  type: 'goals', id: GOALS, title: 'What You Will Be Able To Do', frSub: 'Ce que vous saurez faire',
  layer: 'core', terms: ['total', 'change'],
  say: 'Five goals. Four of them are about catching a number rather than saying one.',
  goals: [
    { t: 'Hear the frame coming', s: 'Ça fait, ça vous fait, ça fera and le total est de are one move in four costumes, and each buys you half a second.' },
    { t: 'Catch a price at full speed', s: 'One run, currency then a bare number, said inside a sentence that started before it.' },
    { t: 'Catch the change too', s: 'The second figure is said faster than the first and nobody repeats it.' },
    { t: 'Ask a French speaker to say a number again, without apologising for it', s: `${Cap(unitRef('a2.07'))} gave you six ways. This is where the thing you missed was a figure.` },
    { t: 'Get out without buying', s: 'Je regarde seulement, and three more. Without them you either buy something or leave.' },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — the script takes the paradigm's slot
 * ══════════════════════════════════════════════════════════════════════════ */

const S_SHAPE: LessonSection = {
  type: 'cardDeck', id: SHAPE, title: 'Seven Moves, In This Order', frSub: 'Les sept temps de l\'échange',
  render: 'deck', layer: 'core', size: 'lg', terms: ['theirHalf', 'frame'],
  say: 'The number comes once. Asking again is part of the script. Seven moves, and by the end of this deck you can predict which one is next.',
  audio: { ...FR, recordingId: 'rec-a2-26-shape' },
  cards: [
    { head: 'Move 1', fr: 'Bonjour.', sub: '[bohⁿ-ZHOOR]', body: 'In a French shop this is not a pleasantry, it is the price of entry, and it comes before the noun rather than after it. Skipping it is the one thing that reliably changes the room.', label: 'you, and only here' },
    { head: 'Move 2', fr: 'Vous désirez ?', sub: '[voo day-zee-RAY]', body: 'She starts. From here to the end of the transaction you are answering, and the initiative never comes back to you.', label: 'she asks' },
    { head: 'Move 3', fr: 'Je voudrais...', sub: '[zhuh voo-DREH]', body: 'Your request, and the only long sentence you get to build. At a market stall a quantity goes in here; at a clothes shop a size does.', label: 'you answer' },
    { head: 'Move 4', fr: 'Et avec ceci ?', sub: '[ay a-vek suh-SEE]', body: 'The upsell, and it has no verb and no noun in it. Ce sera tout ? is the same move at a supermarket till. Saying nothing gets you asked twice.', label: 'she asks' },
    { head: 'Move 5', fr: 'Ça fait...', sub: '[sa FEH]', body: 'The frame, and the number is directly behind it. This is the one move in the seven that you cannot recover from by guessing, and act 3 is about nothing else.', label: 'the figure lands' },
    { head: 'Move 6', fr: 'Par carte, s\'il vous plaît.', sub: '[par KART seel voo PLEH]', body: `You pay. Three words is the whole answer to Vous réglez comment ?, and ${unitRef('a2.07')} taught the same exchange at a restaurant table.`, label: 'you answer' },
    { head: 'Move 7', fr: 'Je vous rends...', sub: '[zhuh voo RAHⁿ]', body: 'The change, and a second figure. It is said faster than the first because she has already moved on to the person behind you.', label: 'the second figure' },
  ],
};

/** REQUIRED LAYOUT: the six lines the learner will HEAR, on one screen.
 *
 *  Six rows exactly. `tapTable` caps at six visible rows on a Pixel 6 (a2.12)
 *  and its header cells have a glyph budget (a2.16), so the column heads are
 *  three words between them. The seventh vendor line, Je peux vous aider ?,
 *  goes to s14-refuse where its answer lives, NOT into a reference sheet:
 *  `cheatSheet` inside a sheet draws its title and nothing else. */
const S_THEIRS: LessonSection = {
  type: 'tapTable', id: THEIRS, title: 'What She Says, And Nobody Taught You', frSub: 'Sa moitié à elle',
  layer: 'core', terms: ['theirHalf', 'frame'],
  say: 'Two hundred and thirty rows in this corpus are about shopping. Not one of them was in her voice until this lesson.',
  audio: { ...FR, recordingId: 'rec-a2-26-theirs' },
  cols: ['she says', 'it means', 'you say'],
  rows: [
    {
      cells: ['Vous désirez ?', 'what would you like', 'Bonjour, je voudrais...'],
      say: 'Vous désirez ?',
      detail: { title: 'She opens', body: 'The bakery and the market stall both start here. Désirer is a verb you will almost never say and will hear every time you shop.', say: 'Qu\'est-ce que je vous sers ?' },
    },
    {
      cells: ['Combien je vous mets ?', 'how much shall I give you', 'Un kilo, s\'il vous plaît.'],
      say: 'Combien je vous mets ?',
      detail: { title: 'She asks a quantity', body: `The market stall version. It wants a container: un kilo de, une tranche de, un paquet de. ${Cap(unitRef('a1.29'))} taught those and this is where you have to produce one at speed.`, say: 'Combien je vous mets ?' },
    },
    {
      cells: ['Et avec ceci ?', 'anything else', 'Ce sera tout, merci.'],
      say: 'Et avec ceci ?',
      detail: { title: 'She upsells', body: 'No verb and no noun in the whole question. Ce sera tout ? is the same move at a supermarket till, and silence gets you asked again rather than nothing.', say: 'Ce sera tout ?' },
    },
    {
      cells: ['Ça fait...', 'that comes to', '(catch the number)'],
      say: 'Ça fait quinze euros soixante, s\'il vous plaît.',
      detail: { title: 'The figure lands', body: 'The frame is two syllables and the number is directly behind it. Nothing pauses between them, and the s\'il vous plaît on the end means she has finished.', say: 'Ça vous fait vingt-trois euros quarante.' },
    },
    {
      cells: ['C\'est pour offrir ?', 'is it a gift', 'Non, merci.'],
      say: 'C\'est pour offrir ?',
      detail: { title: 'She checks', body: 'Asked at any counter selling something wrappable. Oui gets it gift-wrapped, which takes four minutes, so answer this one deliberately.', say: 'Il vous faut un sac ?' },
    },
    {
      cells: ['Je vous rends...', 'here is your change', '(catch it again)'],
      say: 'Je vous rends deux euros soixante.',
      detail: { title: 'The second figure', body: 'Said faster than the first and usually while she is looking at the next customer. Voilà votre monnaie is the version with no figure in it at all.', say: 'Voilà votre monnaie.' },
    },
  ],
};

/** REQUIRED LAYOUT: « Ça fait combien ? » and « Ça fait quatre-vingt-dix-sept
 *  euros trente. » side by side, so the question and the shape of its answer
 *  are one picture. Cards 3 and 4, adjacent, and the test asserts the order.
 *
 *  DELIBERATELY FEWER CARDS THAN HERS, and card 1 says why. The asymmetry is
 *  the teaching.
 *
 *  CARD 5 IS NOT A REGISTER LADDER. It contrasts two forms and quotes a2.13 by
 *  unit id. The ladder is a2.29's, once, for all eight units (collation §C5),
 *  so there is no third rung, no `pourriez-vous` and no `je prendrais`. */
const S_YOURS: LessonSection = {
  type: 'cardDeck', id: YOURS, title: 'Your Four Moves', frSub: 'Vos quatre répliques',
  render: 'deck', layer: 'core', size: 'lg', terms: ['theirHalf', 'frame'],
  say: 'Four, against her nine. You are not short of French. You are short of turns.',
  audio: { ...FR, recordingId: 'rec-a2-26-yours' },
  cards: [
    { head: 'Why four', fr: 'Bonjour.', sub: '[bohⁿ-ZHOOR]', body: 'She has nine lines in this lesson and you have four. That is not a gap in your French, it is the shape of a till: she holds the prices, the stock and the initiative. You hold four short formulas, and that is enough.', label: 'the shape of a till' },
    { head: 'Move 3', fr: 'Bonjour, je voudrais une baguette, s\'il vous plaît.', sub: '[bohⁿ-ZHOOR zhuh voo-DREH ün ba-GET seel voo PLEH]', body: 'Greeting and request in one breath, and the only long sentence you build in the whole transaction. Everything after this is three words or fewer.', label: 'the one long one' },
    { head: 'Asking', fr: 'Ça fait combien ?', sub: '[sa feh kohⁿ-BYEHⁿ]', body: 'The most frequent question in a French shop, and it did not exist anywhere in this corpus before this lesson. Quel est le prix ? is published and is what a classroom teaches; this is what is said at a counter. Store it whole.', label: 'what is actually said' },
    { head: 'The answer', fr: 'Ça fait quatre-vingt-dix-sept euros trente.', sub: '[sa feh ka-truh-vaⁿ-dee-SET eu-ro TRAHⁿT]', body: 'Your question and the shape of her answer, together. The same two syllables open both, which is why the frame is worth hearing: it means the same thing whoever says it.', label: 'the same frame, coming back' },
    { head: 'Move 6', fr: 'Par carte, s\'il vous plaît.', sub: '[par KART seel voo PLEH]', body: 'Three words answer the payment question completely. En espèces, s\'il vous plaît is the other half. Building a sentence around either marks you out as translating rather than talking.', label: 'three words is enough' },
    { head: 'One word apart', fr: 'je veux  /  je voudrais', sub: '[zhuh VEU  /  zhuh voo-DREH]', body: `Both are correct and both are understood. Je veux is what a child says about a toy, and across a counter it lands too blunt. Nobody will tell you: nobody corrects a customer. ${Cap(unitRef('a2.13'))} taught vouloir; here the choice costs something.`, label: 'grammatically perfect, socially wrong' },
  ],
};

/** a1.29's containers, APPLIED under counter pressure and never re-taught.
 *  Quotes a1.29 by unit id per doctrine §B.7.
 *
 *  NOT `size: 'xl'`. `lesson-contract.test.ts:454` forbids an xl group carrying
 *  BOTH items and a check: GroupDrillView renders an xl group as a filling
 *  SwipeDeck and the check stacks underneath it, below the fold. The design
 *  asked for xl and it is overruled by the contract test.
 *
 *  NO CLOCK. The design wanted "deliberate practice under time pressure". No
 *  timer exists anywhere in the app (collation §1.9), so the `say` string says
 *  plainly that there is no clock rather than implying one that cannot fire. */
const S_QUANTITY: LessonSection = {
  type: 'groupDrill', id: QUANTITY, title: 'She Asked How Much', frSub: 'Combien je vous mets ?',
  layer: 'core', terms: ['container', 'theirHalf'],
  say: `${Cap(unitRef('a1.29'))} taught you un kilo de and une tranche de. Nothing new here. Four groups, no clock on any of them, and the only difference is that she asked first.`,
  groups: [
    {
      label: 'at the greengrocer',
      items: [
        { fr: 'un kilo de tomates', en: 'a kilo of tomatoes', note: `${Cap(unitRef('a1.29'))}`, itemId: 'fr.a2.courses.003' },
        { fr: 'une barquette de fraises', en: 'a punnet of strawberries', note: `${Cap(unitRef('a1.29'))}` },
        { fr: 'un demi-kilo de pommes', en: 'half a kilo of apples', note: `${Cap(unitRef('a1.29'))}` },
      ],
      check: { q: 'She says « Combien je vous mets ? ». Which answer is complete?', opts: ['Des tomates.', 'Un kilo de tomates, s\'il vous plaît.', 'Oui, merci.', 'Les tomates sont bonnes ?'], correct: 1, why: `She asked how much, not what. The container is the answer, and naming it is what removes the du and the des. ${Cap(unitRef('a1.29'))} owns that rule and this is where you run it fast.` },
    },
    {
      label: 'at the cheese counter',
      items: [
        { fr: 'une tranche de comté', en: 'a slice of comté', note: `${Cap(unitRef('a1.29'))}` },
        { fr: 'un morceau de brie', en: 'a piece of brie', note: `${Cap(unitRef('a1.29'))}` },
        { fr: 'deux cents grammes de gruyère', en: 'two hundred grams of gruyère', note: `${Cap(unitRef('a1.29'))}` },
      ],
      check: { q: 'Which of these is NOT a container?', opts: ['une tranche', 'un morceau', 'du fromage', 'deux cents grammes'], correct: 2, why: 'Du fromage is cheese with no amount named around it. The other three all say how much, which is what makes the du disappear.' },
    },
    {
      label: 'at the bakery',
      items: [
        { fr: 'une douzaine d\'œufs', en: 'a dozen eggs', note: `${Cap(unitRef('a1.29'))}` },
        { fr: 'un paquet de biscuits', en: 'a packet of biscuits', note: `${Cap(unitRef('a1.29'))}` },
        { fr: 'deux baguettes', en: 'two baguettes', note: 'a number, not a container' },
      ],
      check: { q: 'Deux baguettes has no de in it. Why not?', opts: ['Because baguettes is plural', 'Because a bare number counts the things directly', 'Because it is a bakery', 'Because de is optional here'], correct: 1, why: 'Une douzaine names a quantity and needs de to attach it. Deux counts the baguettes themselves, so there is nothing to attach.' },
    },
    {
      label: 'she asks it the other way',
      items: [
        { fr: 'Ce sera quoi pour vous ?', en: 'What will it be for you?', note: 'your turn has come', itemId: C(176) },
        { fr: 'Combien je vous mets ?', en: 'How much shall I give you?', note: 'she wants an amount', itemId: C(175) },
        { fr: 'Et avec ceci ?', en: 'Anything else with that?', note: 'she wants another item' },
      ],
      check: { q: 'Which one of these is asking for a QUANTITY rather than an item?', opts: ['Ce sera quoi pour vous ?', 'Et avec ceci ?', 'Combien je vous mets ?', 'Vous désirez ?'], correct: 2, why: 'Combien is how much. The other three all want a thing, and answering any of them with un kilo leaves her waiting for the noun.' },
  },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — the Owns, and the heaviest act at 7 missions
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE BLIND CO MISSION, and the one the funded engineering item was for.
 *
 *  `hideLines: true` masks the transcript until every question is answered.
 *  Without it this section would be a reading exercise with a play button, and
 *  the `en` gloss on a priced line would hand the learner the figure in
 *  English.
 *
 *  QUESTIONS REFER TO A LINE BY NUMBER AND NEVER REPRINT IT. a2.07 found on
 *  device that the question rail renders UNDER the masked cards.
 *
 *  AUTHORED SO IT IS LIFTABLE. Collation §7.2 asks this band to leave a2.35 a
 *  reception bank. Every line here makes sense with no knowledge of this
 *  lesson's framing, so a2.35 or an exam runner can take it whole.
 *
 *  DIGIT-STRING OPTIONS, and this is the one place the answer fold does not
 *  reach: `listening` questions are mcq on an option index, never folded. */
const S_HEARD: LessonSection = {
  type: 'listening', id: HEARD, title: 'Four Totals, Said Once', frSub: 'Quatre montants',
  layer: 'core', terms: ['total', 'frame', 'bareCents'],
  say: 'The number comes once. Asking again is part of the script. The words are hidden until you have answered, and you can replay each line as often as you like.',
  audio: { ...FR, recordingId: 'rec-a2-26-heard', audioFirst: true },
  hideLines: true,
  questionsInModal: true,
  lines: [
    { fr: 'Ça fait quatre-vingt-dix-sept euros trente.', en: 'That comes to ninety-seven euros thirty.' },
    { fr: 'Ça vous fait vingt-trois euros quarante.', en: 'That comes to twenty-three euros forty.' },
    { fr: 'Ça fera huit euros dix, s\'il vous plaît.', en: 'That will be eight euros ten, please.' },
    { fr: 'Le total est de quarante-deux euros.', en: 'The total is forty-two euros.' },
  ],
  questions: [
    { q: 'Line 1. What is the total?', opts: ['97,30', '87,30', '97,13', '77,30'], correct: 0, why: 'Quatre-vingt-dix-sept, then trente. The cents are a bare number with no word in front of them, so nothing marks where the euros stop except the word euros itself.' },
    { q: 'Line 2. What is the total?', opts: ['23,40', '23,04', '13,40', '23,14'], correct: 0, why: 'Vingt-trois euros quarante. The frame had vous inside it this time, which adds a syllable and changes nothing you have to do.' },
    { q: 'Line 3. What is the total?', opts: ['8,10', '18,00', '8,00', '80,10'], correct: 0, why: 'Huit euros dix. Ça fera is a future tense doing the job of a present, and the figure sits in exactly the same place behind it.' },
    { q: 'Line 4. How many of these four had cents in them?', opts: ['All four', 'Three', 'Two', 'One'], correct: 1, why: 'Only line 4 stopped at the currency word. When nothing follows euros, there are no cents, and that silence is the whole signal.' },
  ],
};

/** Where the cents hide. Quotes a1.28 by unit id: the price SHAPE is its §15
 *  and the decimal comma is its §17, and neither is re-taught here. What is new
 *  is that the run arrives inside somebody else's turn. */
const S_TAIL: LessonSection = {
  type: 'tapTable', id: TAIL, title: 'Where The Cents Hide', frSub: 'La fin du chiffre',
  layer: 'core', terms: ['bareCents', 'total'],
  say: `${Cap(unitRef('a1.28'))} taught you the shape of a price. Nothing here is new about the number. What is new is that it lands inside her sentence and stops without warning.`,
  audio: { ...FR, recordingId: 'rec-a2-26-tail' },
  cols: ['she says', 'on paper', 'the trap'],
  rows: [
    {
      cells: ['…dix-sept euros trente', '17,30', 'trente is cents'],
      say: 'Ça fait dix-sept euros trente.',
      detail: { title: 'The bare cents', body: `${Cap(unitRef('a1.28'))} §15 taught this: no word for centimes, no et joining the halves, and the only clue the price has finished is that she stops. Here the run starts mid-sentence, so there is no pause in front of it either.`, say: 'Ça fait dix-sept euros trente.' },
    },
    {
      // FOUND ON DEVICE. This cell read '...quarante-deux euros' and the first
      // column is narrow enough that the renderer character-broke the token
      // « quarante-deux » into « quaran / te-deux », mid-word and with no
      // hyphen shown. It was the only bad break in three six-row tapTables.
      // Shortening the cell gives the layout room to break at the real hyphen,
      // and the currency word moves into the trap column, where it carries the
      // teaching better anyway: the point is the silence AFTER euros.
      cells: ['…quarante-deux', '42,00', 'euros, then nothing'],
      say: 'Le total est de quarante-deux euros.',
      detail: { title: 'No cents at all', body: 'When the sentence ends on the currency word there are no cents. The silence after euros is information, and it is the only kind of pause the price gives you.', say: 'Le total est de quarante-deux euros.' },
    },
    {
      cells: ['…six euros quatre-vingt-quinze', '6,95', 'cents run longer'],
      say: 'Ça fait six euros quatre-vingt-quinze.',
      detail: { title: 'The cents outrun the euros', body: `Two syllables of euros and five of cents. ${Cap(unitRef('a1.27'))} already ran quatre-vingt-quinze against quatre-vingt-dix-neuf at speed; the difference here is that you are past the currency word before it starts.`, say: 'Ça fait six euros quatre-vingt-quinze.' },
    },
    {
      cells: ['…cinquante euros pile', '50,00', 'pile ends it'],
      say: 'Ça fait cinquante euros pile.',
      detail: { title: 'The word that closes it', body: 'Pile means on the nose. It is the one word that tells you no cents are coming, so you can stop listening a syllable early.', say: 'Ça fait cinquante euros pile.' },
    },
    {
      cells: ['…dix-neuf euros quatre-vingt-dix', '19,90', 'two nineties'],
      say: 'Ça vous fait dix-neuf euros quatre-vingt-dix.',
      detail: { title: 'Nineteen and ninety in one breath', body: 'Dix-neuf and quatre-vingt-dix both end on a form of ten, and the currency word between them is the only thing separating the euros from the cents.', say: 'Ça vous fait dix-neuf euros quatre-vingt-dix.' },
    },
    {
      cells: ['…deux euros quarante', '2,40', 'the short one'],
      say: 'Alors, deux baguettes, ça fait deux euros quarante.',
      detail: { title: 'The order counted back first', body: 'She lists what you bought before she gives the figure. Alors and the list are your warning that a number is next, and it is the only warning a French counter offers.', say: 'Alors, deux baguettes, ça fait deux euros quarante.' },
    },
  ],
};

/** REQUIRED LAYOUT: the frame and the number it introduces, on one screen.
 *  Every card here shows a frame and the figure directly behind it, because
 *  what is being taught is that the frame means a number is next.
 *
 *  NO QUEBEC CARD. It moved to act 4, so no dollar figure is ever adjacent to
 *  the euro figures the learner is being tested on. */
const S_TOTAL: LessonSection = {
  type: 'cardDeck', id: TOTAL, title: 'One Move, Four Costumes', frSub: 'Ça fait, ça vous fait, ça fera',
  render: 'deck', layer: 'core', size: 'lg', terms: ['frame', 'total'],
  say: 'The number comes once. Asking again is part of the script. Four ways of saying it, and you need all four to know a figure is one syllable away.',
  audio: { ...FR, recordingId: 'rec-a2-26-total' },
  cards: [
    { head: 'Costume 1', fr: 'Ça fait quinze euros soixante.', sub: '[sa feh kaⁿ-z eu-ro swa-SAHⁿT]', body: 'The plain one, and the one you will hear most. Two syllables of frame and then the number, with nothing in between.', label: 'ça fait' },
    { head: 'Costume 2', fr: 'Ça vous fait vingt-trois euros quarante.', sub: '[sa voo feh vaⁿt-TRWA eu-ro ka-RAHⁿT]', body: 'The same move with vous dropped inside it. One extra syllable, no extra meaning, and it is the version that catches people who learned only the first.', label: 'ça vous fait' },
    { head: 'Costume 3', fr: 'Ça fera huit euros dix, s\'il vous plaît.', sub: '[sa fuh-RA weet eu-ro DEESS seel voo PLEH]', body: 'A future tense for something that is true right now. Fera and fait are the same verb and the same move; only the ending moved.', label: 'ça fera' },
    { head: 'Costume 4', fr: 'Le total est de quarante-deux euros.', sub: '[luh to-TAL eh duh ka-rahⁿt-DEU-zeu-ro]', body: 'The supermarket screen version, and the most formal of the four. Note the de before the figure, which none of the others has.', label: 'le total est de' },
    { head: 'The catch', fr: 'Ça fait deux euros soixante-dix de rendu.', sub: '[sa feh deu-z eu-ro swa-sahⁿt-DEESS duh rahⁿ-DÜ]', body: 'The same frame, carrying the opposite number. This is your change, not your bill. The frame tells you a figure is coming and never tells you which figure, so the word after it is the one to hold on to.', label: 'the frame lies about which number' },
  ],
};

/** THE STEPPED SHAPE. `lesson-contract.test.ts` has enforced rule > cards >
 *  audio > drill with a gate since 2026-08-13 and it caught both of a2.17's.
 *  The A2 band has one trap shape and this is it; the stacked one hides the
 *  gate, the audio and the sub-mission number.
 *
 *  HONEST CAVEAT, and it is in the copy rather than only here: TrapDrillView
 *  prints `promptSay` as text in all four of its render paths, so this trains
 *  discrimination WITH THE TEXT VISIBLE. The contrast is real and worth
 *  drilling. It is not the blind test, and s07 and quiz round 1 are. */
const S_WHICH: LessonSection = {
  type: 'trapDrill', id: WHICH, title: 'Which Number Was It', frSub: 'Deux chiffres qui se ressemblent',
  layer: 'core', swipe: true, terms: ['total', 'bareCents'],
  say: 'Pairs that differ by one syllable and by a lot of money. You can see the French here, so this is the contrast rather than the test.',
  audio: { ...FR, recordingId: 'rec-a2-26-which' },
  rule: {
    title: 'The syllable at the end is the whole number',
    body: `French numbers build to the right, so two prices can share every sound until the last one. ${Cap(unitRef('a1.27'))} taught the pairs. At a till they arrive after a currency word and with no second chance.`,
  },
  steps: [
    { kind: 'rule', label: 'The rule', title: 'It Ends On The Difference' },
    { kind: 'cards', label: 'The four', title: 'Pairs That Cost You' },
    { kind: 'audio', label: 'Hear both', title: 'Same Opening, Different Price' },
    { kind: 'drill', label: 'Now you', title: 'Which One Did She Say', gate: true },
  ],
  cards: [
    { promptLabel: 'ninety-seven against eighty-seven', promptSound: 'Ça fait quatre-vingt-dix-sept euros.', fr: '97, not 87', ipa: '/ka.tʁə.vɛ̃.dis.sɛt/', tip: 'Quatre-vingt-dix-sept and quatre-vingt-sept share four syllables. The dix in the middle is ten euros, and it is the shortest syllable in the run.' },
    { promptLabel: 'seventy-five against sixty-five', promptSound: 'Ça fait soixante-quinze euros.', fr: '75, not 65', ipa: '/swa.sɑ̃t.kɛ̃z/', tip: `Soixante-quinze and soixante-cinq both open on soixante. ${Cap(unitRef('a1.27'))} owns this pair; here it arrives with euros behind it and no time to reconstruct.` },
    { promptLabel: 'two euros ten against twelve euros', promptSound: 'Ça fait deux euros dix.', fr: '2,10, not 12,00', ipa: '/dø ø.ʁo dis/', tip: 'Deux euros dix and douze euros are almost the same mouthful. The currency word sits in the middle of one and at the end of the other, and that is the only clue.' },
    { promptLabel: 'the frame that is not the price', promptSound: 'Ça fait deux euros soixante-dix de rendu.', fr: 'that is your change', ipa: '/də ʁɑ̃.dy/', tip: 'Same frame, same shape, opposite direction. De rendu on the end is the word that tells you this figure is coming back to you rather than out of your pocket.' },
  ],
  drill: [
    { promptSay: 'Ça fait quatre-vingt-dix-sept euros trente.', opts: ['87,30', '97,30', '97,13'], correct: 1 },
    { promptSay: 'Ça fait soixante-cinq euros.', opts: ['75,00', '65,00', '60,05'], correct: 1 },
    { promptSay: 'Ça fait douze euros.', opts: ['2,10', '12,00', '2,12'], correct: 1 },
    { promptSay: 'Ça fait deux euros dix.', opts: ['12,00', '2,10', '20,10'], correct: 1 },
    { promptSay: 'Je vous rends deux euros soixante.', opts: ['You owe 2,60', 'You get 2,60 back', 'The total is 2,60'], correct: 1 },
    { promptSay: 'Ça fait six euros quatre-vingt-quinze.', opts: ['6,95', '6,75', '16,95'], correct: 0 },
  ],
};

/** a2.07's MOVE, QUOTED. Zero rows authored, six itemIds cited, a2.07 named by
 *  unit id in the copy. Collation §1.6 and §C5.
 *
 *  The design's `s12-sayit` production drill is CUT: a card plus a dedicated
 *  drill is re-teaching a neighbour's Owns (doctrine §B.7). Production survives
 *  at scenario turn 8 and quiz round 4.
 *
 *  Only three rungs are carded, and card 4 does the work this unit actually
 *  adds: the thing you missed was a NUMBER, which is the one case where the
 *  cheapest rung is not always the right one. */
const S_REPAIR: LessonSection = {
  type: 'cardDeck', id: REPAIR, title: 'You Missed The Number', frSub: 'Redemander le chiffre',
  render: 'deck', layer: 'core', size: 'lg', terms: ['rung', 'total'],
  say: `The number comes once. Asking again is part of the script. ${Cap(unitRef('a2.07'))} taught the six ways. Nothing new here, except that the thing you missed was a figure.`,
  audio: { ...FR, recordingId: 'rec-a2-26-repair' },
  cards: [
    { head: 'Rung 1', fr: 'Pardon ?', sub: '[par-DOHⁿ]', body: `One word, and it gives away nothing about why you missed it. ${Cap(unitRef('a2.07'))} put it first because it is what a French speaker says without thinking, and because it costs you nothing at all.`, label: `${Cap(unitRef('a2.07'))}, rung 1` },
    { head: 'Rung 2', fr: 'Vous pouvez répéter, s\'il vous plaît ?', sub: '[voo poo-VAY ray-pay-TAY seel voo PLEH]', body: 'Asks for the whole thing again. At a till the whole thing is one short sentence, so this costs almost nothing more than rung 1 and is worth reaching for straight away.', label: `${Cap(unitRef('a2.07'))}, rung 2` },
    { head: 'Rung 3', fr: 'Plus lentement, s\'il vous plaît.', sub: '[plü lahⁿt-MAHⁿ seel voo PLEH]', body: 'The first rung that names the fault. Use it when she has already repeated the figure once at exactly the same speed, which is what happens if you asked with rung 1.', label: `${Cap(unitRef('a2.07'))}, rung 3` },
    { head: 'A number is different', fr: 'Ça fait combien, pardon ?', sub: '[sa feh kohⁿ-byehⁿ par-DOHⁿ]', body: `${Cap(unitRef('a2.07'))} teaches you to reach for the lowest rung that will fix the problem. A number is the one case where naming what you missed beats asking for the whole sentence again, because there is only one thing you could have missed.`, label: 'name the figure, not the sentence' },
    { head: 'The part that goes wrong', fr: 'Pardon ?', sub: '[par-DOHⁿ]', body: 'Nobody is annoyed. A French speaker repeats a price without a flicker, several times a day, for French people too. The instinct to apologise first is what turns a one-word repair into an incident.', label: 'not an apology' },
  ],
};

/** The second number, and the reason the published canDo says "count change".
 *  Nothing in the corpus said any of this in the vendor's voice: the topic
 *  exists three times, always in the third person (corpus header §5). */
const S_CHANGE: LessonSection = {
  type: 'tapTable', id: CHANGE, title: 'What Comes Back', frSub: 'Le rendu',
  layer: 'core', terms: ['change', 'exactMoney'],
  say: 'The number comes once. Asking again is part of the script. That goes for the second number too, and it is said faster than the first.',
  audio: { ...FR, recordingId: 'rec-a2-26-change' },
  cols: ['she says', 'it means', 'you do'],
  rows: [
    {
      cells: ['Je vous rends...', 'here is your change', 'count it'],
      say: 'Je vous rends deux euros soixante.',
      detail: { title: 'The figure comes back', body: `A second number, in the same shape as the first. Rendre is ${unitRef('a2.11')}\'s verb and it is used whole here: the useful part is that a figure follows it immediately.`, say: 'Je vous rends deux euros soixante.' },
    },
    {
      cells: ['Voilà votre monnaie.', 'here is your change', 'no figure at all'],
      say: 'Voilà votre monnaie.',
      detail: { title: 'No number this time', body: 'The coins go into your hand and she says nothing about how many. You are expected to have caught the first figure, which is the whole argument for catching it.', say: 'Voilà votre monnaie.' },
    },
    {
      cells: ['Vous avez la monnaie ?', 'have you got change', 'check your coins'],
      say: 'Vous avez la monnaie ?',
      detail: { title: 'Asked BEFORE you pay', body: 'It means she is short of coins, and it is a request rather than curiosity. Je n\'ai que des billets is the straight answer and it keeps things moving.', say: 'Je n\'ai que des billets.' },
    },
    {
      cells: ['Vous n\'avez pas plus petit ?', 'anything smaller', 'a smaller note'],
      say: 'Vous n\'avez pas plus petit ?',
      detail: { title: 'Plus petit is a note', body: 'Never a smaller object. Handing over a fifty for a baguette is what triggers it, and it is asked in every bakery in France before nine in the morning.', say: 'Vous n\'avez pas plus petit ?' },
    },
    {
      cells: ['...sur vingt euros', 'out of twenty', 'that is what you gave'],
      say: 'Je vous rends la monnaie sur vingt euros.',
      detail: { title: 'Sur names the note you handed over', body: 'Not what you get back. The figure inside sur vingt euros is the note, which is the opposite of what an English ear reaches for, and it is the one place in this lesson where the number in the sentence is not yours to keep.', say: 'Je vous rends la monnaie sur vingt euros.' },
    },
    {
      cells: ['Vous pouvez faire l\'appoint ?', 'exact money please', 'if you can'],
      say: 'Vous pouvez faire l\'appoint ?',
      detail: { title: 'The politest way to say she has no change', body: 'L\'appoint is the exact coins. Being asked for it is being asked to do arithmetic in a queue, which is why recognising the phrase fast matters more than being able to say it.', say: 'Désolé, je n\'ai pas de monnaie.' },
    },
  ],
};

/** Nine of the thirteen `courses` payment phrases are already published, so
 *  this mission mostly ARRANGES existing rows.
 *
 *  CARDS 6 AND 7 ARE THE QUEBEC RECOGNITION PAIR, §D rule 3. Neither carries
 *  `voiceflash` in any drill in this lesson and neither appears in the quiz.
 *  `un dépanneur` is IMPORTED: it is published at
 *  fr.a2.quebec-et-francophonie.031 and the probe said otherwise (header §7). */
const S_PAYING: LessonSection = {
  type: 'cardDeck', id: PAYING, title: 'Paying, And The Machine', frSub: 'Le paiement',
  render: 'deck', layer: 'core', size: 'lg', terms: ['change', 'theirHalf'],
  say: 'Two words from you and four instructions from the machine. The last two cards are Quebec, and they are here to be recognised rather than said.',
  audio: { ...FR, recordingId: 'rec-a2-26-paying' },
  cards: [
    { head: 'She asks', fr: 'Vous réglez comment ?', sub: '[voo ray-glay ko-MAHⁿ]', body: `Comment is how, not how much. ${Cap(unitRef('a2.07'))} taught this exact question at a restaurant table and the answer at a till is the same three words.`, label: 'the method, not the amount' },
    { head: 'You answer', fr: 'Par carte, s\'il vous plaît.', sub: '[par KART seel voo PLEH]', body: 'Three words and the transaction moves on. En espèces, s\'il vous plaît is the other half. payer par carte and payer en espèces are already published as infinitives; these are the answer forms.', label: 'three words' },
    { head: 'The machine', fr: 'Insérez votre carte et tapez votre code.', sub: '[aⁿ-say-RAY votr KART ay ta-PAY votr KOD]', body: 'Two imperatives and no please, which is the register of an instruction rather than rudeness. Le code is what a till calls the PIN; le code secret is the formal term.', label: 'two instructions' },
    { head: 'Under fifty', fr: 'le paiement sans contact', sub: '[luh peh-MAHⁿ sahⁿ kohⁿ-TAKT]', body: 'Below fifty euros in France the card usually needs no code at all. You tap and she says nothing, which means the only spoken number in the whole transaction was the total.', label: 'no code needed' },
    { head: 'And then', fr: 'Vous voulez le ticket ?', sub: '[voo voo-lay luh tee-KEH]', body: 'Le ticket at the counter, le ticket de caisse on the printed thing itself. If you missed the total, this is the last chance to find out what it was.', label: 'your last chance at the figure' },
    { head: 'In Quebec', fr: 'magasiner', sub: '[ma-ga-zee-NAY]', body: 'What faire les courses and faire du shopping are called in Quebec. This lesson drills the France forms and this word is here so you recognise it, not so you produce it.', label: 'recognition only' },
    { head: 'In Quebec', fr: 'un dépanneur', sub: '[uhⁿ day-pa-NUHR]', body: 'The corner shop, open late. Same job as une supérette in France. Again: recognition only, and it is not wrong anywhere, it is simply somewhere else.', label: 'recognition only' },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — the ways the counter breaks you
 * ══════════════════════════════════════════════════════════════════════════ */

/** NOT A REGISTER LADDER. This is fixed lexis, and the word ladder appears
 *  nowhere in it: the ladder is a2.29's, once, for all eight (collation §C5).
 *  A learner without a refusal script goes silent and leaves. */
const S_REFUSE: LessonSection = {
  type: 'cardDeck', id: REFUSE, title: 'Not Buying Is Also A Move', frSub: 'Repartir sans acheter',
  render: 'deck', layer: 'core', size: 'lg', terms: ['theirHalf'],
  say: 'Four fixed things to say. Without them a learner either buys something they did not want or walks out mid-sentence, and both happen constantly.',
  audio: { ...FR, recordingId: 'rec-a2-26-refuse' },
  cards: [
    { head: 'She approaches', fr: 'Je peux vous aider ?', sub: '[zhuh peu voo-z eh-DAY]', body: 'In a French shop this is an approach rather than an offer, and it happens within about ten seconds of the door. Vous cherchez quelque chose ? is the same move.', label: 'she starts, again' },
    { head: 'You answer', fr: 'Je regarde seulement, merci.', sub: '[zhuh ruh-GARD seul-MAHⁿ mehr-SEE]', body: 'The whole answer, and it ends the exchange politely. It is the single most useful thing in this mission and it is four words.', label: 'the complete answer' },
    { head: 'Too expensive', fr: 'C\'est un peu cher pour moi.', sub: '[say-t uhⁿ peu SHEHR poor MWA]', body: 'Un peu is what makes it sayable. C\'est cher on its own sounds like a complaint about her shop; pour moi puts it on your wallet, which nobody can argue with.', label: 'un peu does the work' },
    { head: 'Getting out', fr: 'Je vais réfléchir, merci.', sub: '[zhuh veh ray-flay-SHEER mehr-SEE]', body: `Closes the conversation without refusing anything, which is why it is the one French shoppers actually use. A futur proche, and ${unitRef('a2.19')} owns that; here it is one fixed phrase.`, label: 'refuses nothing, ends everything' },
    { head: 'Asking for a size', fr: 'Vous avez ça en trente-huit ?', sub: '[voo-z a-vay sa ahⁿ trahⁿt-WEET]', body: 'The size question with no word for size in it. French sizes are numbers, so the number does the work and ça points at the thing in your hand. She may ask it first: Vous faites quelle taille ?', label: 'the number is the size' },
  ],
};

/** THE QUEBEC EXCEPTION, and this is the only unit in the band that gets a
 *  whole mission for it (collation §C3 excepts a2.26 by name).
 *
 *  IN ACT 4, NOT ACT 3, and deliberately: no dollar figure is ever adjacent to
 *  the euro figures the learner is being tested on. The nearest scored price is
 *  three missions away.
 *
 *  REQUIRED LAYOUT: the label and the till side by side on card 1, both numbers
 *  visible. Separating them turns the exception back into a vocabulary note,
 *  which is the thing C3 excepted this unit FROM. The test asserts both figures
 *  are in the same card body.
 *
 *  NO ARITHMETIC. No rate, no TPS, no TVQ, and no "what do you pay". */
const S_QUEBEC: LessonSection = {
  type: 'cardDeck', id: QUEBEC, title: 'The Label Is Not The Price', frSub: 'Au Québec, les taxes',
  render: 'deck', layer: 'core', size: 'lg', terms: ['theLabel', 'total'],
  say: 'Three cards, none of them tested. Everything scored in this lesson is France, in euros, and the number she says is the number you pay.',
  audio: { ...FR, recordingId: 'rec-a2-26-quebec' },
  cards: [
    {
      head: 'Same basket, two countries',
      fr: 'Au Québec, les taxes s\'ajoutent à la caisse.',
      sub: '[oh kay-BEK lay taks sa-ZHOOT a lah KESS]',
      body: 'In France the shelf says vingt euros and the till says vingt euros. In Quebec the shelf says vingt dollars and the till says more, because the taxes go on at the end. The label is not a promise.',
      label: 'the label and the till, together',
    },
    {
      head: 'What that does to your ear',
      fr: 'Vingt-deux dollars quatre-vingt-dix.',
      sub: '[vaⁿt-deu do-LAR ka-truh-vaⁿ-DEESS]',
      body: `You are not mis-hearing the accent. You expected the number you read, and the expectation is what broke. The move is the same as everywhere else here: wait for the till, and if you missed it, ask. ${Cap(unitRef('a2.07'))} gave you six ways.`,
      label: 'expectation, not accent',
    },
    {
      head: 'Two words, recognition only',
      fr: 'magasiner  /  un dépanneur',
      sub: '[ma-ga-zee-NAY  /  uhⁿ day-pa-NUHR]',
      body: 'Magasiner is faire les courses and un dépanneur is the corner shop. This lesson drills the France forms and neither of these appears in anything scored. They are here to be recognised, not produced. Neither is wrong: they are somewhere else.',
      label: 'recognise, do not produce',
    },
  ],
};

/** `swipe: true` is MANDATORY on commonErrors or it draws a blank screen.
 *  commonErrors renders its own deck only when swipe is present, and the shared
 *  fallback sits after the switch at MissionSection.tsx:614-648 precisely
 *  because a break from a conditional case once fell off the end and drew
 *  nothing. That shipped twice. */
const S_ERRORS: LessonSection = {
  type: 'commonErrors', id: ERRORS, title: 'What Goes Wrong', frSub: 'Les erreurs fréquentes',
  layer: 'core', size: 'lg', swipe: true, terms: ['total', 'change'],
  say: 'Four, one per screen. Three of them cost you money and the fourth costs you the conversation.',
  errors: [
    { wrong: 'Handing over a note and hoping.', right: 'Pardon ?', why: `The most expensive habit in this lesson, and it is not a French mistake at all. One word gets the figure repeated, and ${unitRef('a2.07')} spent a whole mission on why it costs you nothing.` },
    { wrong: 'Je veux une baguette.', right: 'Je voudrais une baguette.', why: `Understood perfectly and one rung too blunt across a counter. Nobody corrects a customer, so nobody learns it. ${Cap(unitRef('a2.13'))} taught vouloir; this is where the form choice does something.` },
    { wrong: 'Hearing sur vingt euros as your change.', right: 'Sur vingt euros is what you handed over.', why: 'The figure inside sur names the note you gave her, not the coins coming back. It is the one place where the number in the sentence is not yours to keep.' },
    { wrong: 'Oui, merci.', right: 'Je regarde seulement, merci.', why: 'Answering an approach with yes commits you to being helped. Four words end it politely, and without them people buy things or walk out mid-sentence.' },
  ],
};

/** The unscripted question, and this one is LEXICAL rather than numeric, which
 *  is why it survives without `hideLines` better than s07 would have. The
 *  difficulty is not a figure the `en` gloss gives away.
 *
 *  REPEATED `listening` needs no device check: it ships in six lessons already,
 *  including a1.27.l1 and a1.28.l1 at three each (collation §1.10). */
const S_FOLLOWUP: LessonSection = {
  type: 'listening', id: FOLLOWUP, title: 'The One You Did Not Plan For', frSub: 'La question en plus',
  layer: 'core', terms: ['theirHalf'],
  say: 'Four questions that arrive after the total and before you have finished paying. None of them is a number, and none of them was in your script.',
  audio: { ...FR, recordingId: 'rec-a2-26-followup', audioFirst: true },
  questionsInModal: true,
  lines: [
    { fr: 'Vous avez la carte du magasin ?', en: 'Do you have the store card?' },
    { fr: 'C\'est pour offrir ?', en: 'Is it a gift?' },
    { fr: 'Il vous faut un sac ?', en: 'Do you need a bag?' },
    { fr: 'Vous avez la monnaie ?', en: 'Do you have change?' },
  ],
  questions: [
    { q: 'Line 1. When is this asked, and what does saying non cost you?', opts: ['Before you order, and it costs you your place in the queue', 'While the total is on the screen, and non costs you nothing', 'After you have paid, and non means no receipt', 'At the door, and non means you cannot come in'], correct: 1, why: 'It arrives as an interruption, with the figure already showing. It is a loyalty card and not having one changes nothing about the price you pay.' },
    { q: 'Line 2. You say oui. What happens next?', opts: ['She gift-wraps it, which takes several minutes', 'She gives you a discount', 'She puts it in a bag', 'She asks for the exact money'], correct: 0, why: 'Offrir is to give as a present. Oui commits you to standing there while it is wrapped, so this is one to answer deliberately rather than reflexively.' },
    { q: 'Line 3. What is she actually telling you?', opts: ['That you have bought too much', 'That the bag is free', 'That there is probably a charge for it', 'That she has run out of bags'], correct: 2, why: 'In France the bag usually costs, so il vous faut un sac ? is a sale rather than an offer. Falloir here means need, and she is asking whether you need one enough to pay for it.' },
    { q: 'Line 4. She asks this BEFORE you have paid. Why?', opts: ['She wants to know if you can afford it', 'She is short of coins and is asking you to help', 'She is checking you have a card', 'She is telling you the price has changed'], correct: 1, why: 'It is a request, not curiosity about your wallet. Je n\'ai que des billets is the straight answer, and it is better than searching your pockets while the queue waits.' },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — production
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE ONE GENUINELY AUDIO-ONLY PRODUCTION SURFACE.
 *
 *  EVERY ITEM IS A FULL VENDOR UTTERANCE WITH THE TOTAL SPELLED IN WORDS, and
 *  never in digits. `OneDictationWord` builds the letter-tile bank from the
 *  item's `fr`, so « 97,30 € » would produce a bank of digits, a comma and a
 *  currency glyph.
 *
 *  ALL SIX RUN IN WORD MODE, checked through the real `dicteeMode` rather than
 *  by counting characters: it switches above `DICTEE_LETTER_LIMIT` = 16 and
 *  every one of these is far above it. The batch script asserts the mode.
 *
 *  WORD MODE IS THE RIGHT TEST HERE, and the choice is deliberate. A bare
 *  total ("quatre-vingt-dix-sept euros trente") is three tiles and six
 *  permutations, which is thin. A whole utterance is five or six tiles and
 *  tests what the lesson actually teaches: that the frame comes first, the
 *  currency word sits between the euros and the cents, and the run has an
 *  order. `normalizeFr` strips accents and punctuation, so this was never
 *  going to be a spelling test.
 *
 *  BAND RULE APPLIED: every one of these folds differently from its most
 *  plausible wrong version, because the wrong version reorders words rather
 *  than respelling them, and `fold` strips whitespace but not sequence. */
const S_DICTEE: LessonSection = {
  type: 'dictation', id: DICTEE, title: 'Write What She Said', frSub: 'La dictée',
  layer: 'core', terms: ['total', 'frame'],
  say: 'Six of her lines, and the figure is inside each one. You have heard every one of them at least three times by now.',
  audio: { ...FR, recordingId: 'rec-a2-26-dictee' },
  itemIds: [C(181), C(183), C(184), C(186), M(71), M(75)],
};

/** A genuine CE task. `ReadingMission` pages the passage away before the
 *  questions, so this is not a scan-back.
 *
 *  It is also the DELF A2 CE payload. `courses` already publishes
 *  l'horaire d'ouverture, l'heure de fermeture, le prix unitaire and
 *  la promotion for exactly this, and they are imported rather than re-typed.
 *
 *  NO ARITHMETIC, including here. Every question is answered by reading a line,
 *  never by adding two. The figures on the receipt are consistent, and a
 *  learner who checks them will find they add up, but nothing asks them to. */
const S_RECEIPT: LessonSection = {
  type: 'reading', id: RECEIPT, title: 'The Receipt In Your Pocket', frSub: 'Le ticket de caisse',
  layer: 'core', terms: ['total', 'change'],
  say: 'The thing you did not read on the tram. Every answer is on one line of it, and none of them needs adding up.',
  questionsInModal: true,
  text: [
    'BOULANGERIE MARTIN',
    '14 rue des Halles, TOURS',
    'Mardi 12/03  08h41  Caisse 2',
    '',
    'Baguette tradition          x6      1,30      7,80',
    'Croissant beurre           x12      1,15     13,80',
    'Quiche lorraine 4 parts     x3      9,50     28,50',
    'Plateau salé 24 pieces      x1     47,00     47,00',
    'Jus d\'orange 1L             x2      2,60      5,20',
    '',
    'SOUS-TOTAL                                  102,30',
    'Remise fidélité 5%                          - 5,00',
    'TOTAL A PAYER                                97,30',
    '',
    'Espèces                                     100,00',
    'RENDU                                         2,70',
    '',
    'Horaires : 7h00 - 19h30, fermé le lundi',
    'Conservez ce ticket pour tout échange.',
  ].join('\n'),
  glossary: [
    { word: 'sous-total', en: 'the subtotal', note: 'The figure before anything is taken off. It is not what you pay and it is the larger of the two.' },
    { word: 'remise', en: 'the discount', note: 'What comes off. Une réduction and une promotion are the words on the shelf; remise is the word on the receipt.' },
    { word: 'rendu', en: 'the change given', note: 'The last line. What she handed back, printed, which is how you find out whether you caught it.' },
    { word: 'espèces', en: 'cash', note: 'The line above shows what you handed over, not what you owed. The two are different numbers and the receipt prints both.' },
    { word: 'conservez', en: 'keep', note: 'An imperative aimed at you. Without the ticket there is no exchange, which is the whole reason it says so.' },
  ],
  questions: [
    { q: 'What did the customer actually pay, and which line says so?', a: 'Ninety-seven euros thirty. TOTAL A PAYER is the line, at 97,30. SOUS-TOTAL at 102,30 is what it would have been before the discount, and it is the bigger number of the two, which is why reading the wrong line always errs upward.' },
    { q: 'The customer handed over a hundred euros. How do you know from the receipt?', a: 'The Espèces line reads 100,00. It records what was handed over rather than what was owed, and RENDU on the next line is what came back.' },
    { q: 'Why are there two numbers next to each item?', a: 'The first is le prix unitaire, what one costs, and the second is what the whole quantity costs. Six baguettes at 1,30 makes the 7,80 in the right-hand column.' },
    { q: 'You come back on a Monday to exchange something. What does the receipt tell you?', a: 'That you cannot. The Horaires line reads fermé le lundi. It also tells you to keep the ticket for any exchange, so the ticket is necessary and Monday is still impossible.' },
    { q: 'What is la remise fidélité, and how is it marked as coming off rather than going on?', a: 'A five percent loyalty discount. It is written with a minus sign, and it sits between the subtotal and the total, which is the position on a French receipt where deductions go.' },
    { q: 'Which single line would tell you whether you caught the change correctly at the counter?', a: 'RENDU, at 2,70. It is the last figure printed and it is the one that was said fastest at the till, which is the argument for reading the receipt at all.' },
  ],
};

/** `practice` is MANDATORY: `lesson-contract.test.ts:505` mirrors the publish
 *  gate and fails any non-assessment lesson with no practice section, an empty
 *  `practice.itemIds`, or an empty `Lesson.itemIds`.
 *
 *  `skill: 'speak'`, and every item named here carries `voiceflash`, verified
 *  against Postgres rather than the seed. `skill: 'write'` draws no writing
 *  surface, and `skill` is not passed to PracticeVFView at all, so the value is
 *  set to match what actually renders.
 *
 *  NO QUEBEC FORM IS SPOKEN HERE. §D rule 3: magasiner and un dépanneur are
 *  recognition only and carry no voiceflash drill in this lesson. */
const S_SAY: LessonSection = {
  type: 'practice', id: SAY, title: 'Say Your Four', frSub: 'À vous',
  layer: 'core', skill: 'speak', terms: ['rung', 'theirHalf'],
  say: `Your four moves, the two refusals, and ${unitRef('a2.07')}\'s first three rungs. Say them to the phone before you say them to a cashier.`,
  itemIds: [
    C(177), C(178), C(179), C(180), C(196), C(198),
    M(81), M(84),
    REPAIR_IDS[0], REPAIR_IDS[1], REPAIR_IDS[2],
  ],
};

/** THE WHOLE ENCOUNTER, eleven turns, greeting to change. Every turn carries
 *  `userEn` and two or three `alts`.
 *
 *  None of the five existing shopping scenarios carries `alts` and two of them
 *  are three turns long. This one sets the pattern for the band.
 *
 *  AUTHORED SO IT IS LIFTABLE WHOLE by a2.35 (collation §7.2 and §1.4).
 *
 *  FRANCE, EUROS, VOUS, throughout. §D rule 6: the design's alternate Quebec
 *  setting is CUT, because eight authors with eight registers is how this band
 *  embarrasses itself (§7.3), and a2.07's server uses vous.
 *
 *  TURN 7 is the one where the vendor gives a total the learner repeats back.
 *  TURN 8 is the one where the only correct move is a repair.
 *  NO `Scenario.exam`, per collation §1.12. Zero ExamTask rows exist. */
const S_SCENARIO: LessonSection = {
  type: 'scenario', id: SCENARIO, title: 'The Whole Counter', frSub: 'Du bonjour au rendu',
  layer: 'core', terms: ['total', 'change', 'rung'],
  say: 'Eleven turns, start to finish. She starts, you answer, and two numbers arrive that nobody repeats unless you ask.',
  setting: 'Boulangerie Martin, Tours, a Tuesday morning. Two people in the queue behind you.',
  turns: [
    { ai: 'Bonjour !', en: 'Good morning!', user: 'Bonjour, madame.', userEn: 'Good morning.', alts: [{ fr: 'Bonjour.', en: 'Hello.' }, { fr: 'Bonjour, madame. Ça va ?', en: 'Good morning. How are you?' }] },
    { ai: 'Vous désirez ?', en: 'What would you like?', user: 'Je voudrais deux baguettes, s\'il vous plaît.', userEn: 'I would like two baguettes, please.', alts: [{ fr: 'Deux baguettes, s\'il vous plaît.', en: 'Two baguettes, please.' }, { fr: 'Je vais prendre deux baguettes.', en: 'I\'ll take two baguettes.' }] },
    { ai: 'Et avec ceci ?', en: 'Anything else with that?', user: 'Une quiche, s\'il vous plaît.', userEn: 'A quiche, please.', alts: [{ fr: 'Ce sera tout, merci.', en: 'That\'ll be all, thanks.' }, { fr: 'Et quatre croissants.', en: 'And four croissants.' }] },
    { ai: 'Combien je vous mets de croissants ?', en: 'How many croissants shall I give you?', user: 'Quatre, s\'il vous plaît.', userEn: 'Four, please.', alts: [{ fr: 'Une demi-douzaine.', en: 'Half a dozen.' }, { fr: 'Quatre, merci.', en: 'Four, thanks.' }] },
    { ai: 'Ce sera tout ?', en: 'Will that be all?', user: 'Ce sera tout, merci.', userEn: 'That will be all, thanks.', alts: [{ fr: 'Oui, ce sera tout.', en: 'Yes, that\'ll be all.' }, { fr: 'Non, un jus d\'orange aussi.', en: 'No, an orange juice as well.' }] },
    { ai: 'C\'est pour offrir ?', en: 'Is it a gift?', user: 'Non, merci.', userEn: 'No, thanks.', alts: [{ fr: 'Non, c\'est pour moi.', en: 'No, it\'s for me.' }, { fr: 'Oui, s\'il vous plaît.', en: 'Yes, please.' }] },
    { ai: 'Alors, ça vous fait vingt-trois euros quarante.', en: 'So, that comes to twenty-three euros forty.', user: 'Vingt-trois euros quarante, d\'accord.', userEn: 'Twenty-three forty, right.', alts: [{ fr: 'Vingt-trois quarante ?', en: 'Twenty-three forty?' }, { fr: 'D\'accord, vingt-trois euros quarante.', en: 'OK, twenty-three euros forty.' }] },
    { ai: 'Vous réglez comment ?', en: 'How are you paying?', user: 'Pardon ?', userEn: 'Sorry?', alts: [{ fr: 'Vous pouvez répéter, s\'il vous plaît ?', en: 'Can you say that again, please?' }, { fr: 'Plus lentement, s\'il vous plaît.', en: 'More slowly, please.' }] },
    { ai: 'Vous réglez comment ? Carte ou espèces ?', en: 'How are you paying? Card or cash?', user: 'En espèces, s\'il vous plaît.', userEn: 'In cash, please.', alts: [{ fr: 'Par carte, s\'il vous plaît.', en: 'By card, please.' }, { fr: 'En espèces.', en: 'Cash.' }] },
    { ai: 'Vous n\'avez pas plus petit ?', en: 'Have you got anything smaller?', user: 'Je n\'ai que des billets, désolé.', userEn: 'I only have notes, sorry.', alts: [{ fr: 'Non, désolé.', en: 'No, sorry.' }, { fr: 'Si, attendez.', en: 'Yes, hold on.' }] },
    { ai: 'Ce n\'est pas grave. Je vous rends six euros soixante.', en: 'Never mind. Here is six euros sixty change.', user: 'Merci, bonne journée.', userEn: 'Thanks, have a good day.', alts: [{ fr: 'Merci beaucoup, au revoir.', en: 'Thank you, goodbye.' }, { fr: 'Pardon, combien ?', en: 'Sorry, how much?' }] },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — measure
 * ══════════════════════════════════════════════════════════════════════════ */

const S_REVIEW: LessonSection = {
  type: 'reviewDeck', id: REVIEW, title: 'Everything She Said', frSub: 'Révision',
  render: 'deck', layer: 'core', terms: ['frame', 'change'],
  say: 'Her half and yours, together, one last time.',
  cards: [
    { front: 'You have just walked in and she speaks first', back: 'Vous désirez ? She starts, and the initiative never comes back.', say: 'Vous désirez ?' },
    { front: 'Two syllables, and a number is directly behind them', back: 'Ça fait... The frame. Ça vous fait, ça fera and le total est de are the same move.', say: 'Ça fait quinze euros soixante.' },
    { front: 'The most frequent question in a French shop', back: 'Ça fait combien ? Not Quel est le prix, which is what a classroom teaches.', say: 'Ça fait combien ?' },
    { front: 'She wants a quantity, not a thing', back: 'Combien je vous mets ? Answer with a container: un kilo de, une tranche de.', say: 'Combien je vous mets ?' },
    { front: 'No verb and no noun in the whole question', back: 'Et avec ceci ? She is upselling, and silence gets you asked again.', say: 'Et avec ceci ?' },
    { front: 'You caught everything except the figure', back: `Pardon ? One word, and it costs you nothing. ${Cap(unitRef('a2.07'))}, rung 1.`, say: 'Pardon ?' },
    { front: 'The second number of the transaction', back: 'Je vous rends deux euros soixante. Said faster than the first, and to your back.', say: 'Je vous rends deux euros soixante.' },
    { front: 'She asks it BEFORE you pay, and it is a request', back: 'Vous avez la monnaie ? She is short of coins. Je n\'ai que des billets.', say: 'Vous avez la monnaie ?' },
    { front: 'A smaller what?', back: 'Vous n\'avez pas plus petit ? A smaller note, never a smaller object.', say: 'Vous n\'avez pas plus petit ?' },
    { front: 'The figure in this phrase is not yours to keep', back: 'sur vingt euros. It names the note you handed over.', say: 'Je vous rends la monnaie sur vingt euros.' },
    { front: 'How, not how much', back: 'Vous réglez comment ? Par carte, s\'il vous plaît. Three words.', say: 'Vous réglez comment ?' },
    { front: 'She approached you within ten seconds of the door', back: 'Je peux vous aider ? Je regarde seulement, merci.', say: 'Je regarde seulement, merci.' },
  ],
};

const S_PROGRESS: LessonSection = {
  type: 'progressCheck', id: PROGRESS, title: 'Where You Are', frSub: 'Le point',
  layer: 'core',
  say: 'Twenty-two missions. Here is what changed.',
  body: 'You came in able to ask for things and left able to be charged for them. The seven moves are the same seven in a bakery, at a market stall and at a supermarket till, so the next counter is not a new problem. Two numbers arrive in every transaction and neither is repeated, and you now know the two-syllable warning that one of them is coming. And when the figure goes past you anyway, there is one word that gets it back.',
  stats: [
    { k: 'Moves in the encounter', v: '7' },
    { k: 'Lines in her voice', v: '35' },
    { k: 'Costumes the frame wears', v: '4' },
    { k: 'Numbers per transaction', v: '2' },
    { k: 'Ways to ask again', v: `6, and they are ${unitRef('a2.07')}\'s` },
  ],
};

/* ── The quiz. Four rounds of eight, thirty-two questions, passMark 70. ────
 *
 *  ONE quiz. A second `quiz` section is silently never rendered.
 *
 *  THE ANSWER FOLD DECIDES THE FORMAT MIX, and it bites this lesson harder
 *  than any other in the band because the subject is numbers. `fold()`
 *  (`answer.logic.ts:32`) strips accents, case, punctuation, hyphens, both
 *  apostrophes and ALL WHITESPACE before comparing:
 *
 *    97,30 = 97 30 = 9730           the decimal comma cannot be tested
 *    quatre-vingt-dix = quatrevingtdix = quatre vingt dix
 *    Euros = euros                  capitals cannot be tested
 *    c'est = cest                   the apostrophe cannot be tested
 *    à point = a point              accents cannot be tested
 *
 *  QUESTIONS I WANTED AND COULD NOT WRITE:
 *
 *   - "Write ninety-seven euros thirty in digits" as a typeIn. `97,30`, `97 30`
 *     and `9730` all fold identically, so the item cannot distinguish a learner
 *     who knows where the comma goes from one who does not. a1.28 §17 teaches
 *     the comma and it is untestable by any scored surface in this app.
 *     MOVED to listenChoose with rendered digit-string options, which is graded
 *     on an option index and never folded. That is round 1, and it is the right
 *     answer to this problem rather than a workaround.
 *   - "Is it quatre-vingt-dix or quatre vingt dix ?" Both fold the same.
 *     Dropped; word division is not testable.
 *   - A typeIn on « Ça fait combien ? » testing the cedilla. `ca fait combien`
 *     passes. The question survives as a typeIn but its difficulty is now WORD
 *     CHOICE (fait against coûte, combien against quel prix), which does
 *     survive folding.
 *
 *  BAND RULE APPLIED TO EVERY typeIn AND errorSpot BELOW: the expected answer
 *  and the most plausible wrong answer were folded and compared. The test
 *  asserts it over every authored near-miss, so an item that tests nothing
 *  fails the suite rather than shipping.
 *
 *  EVERY PRICE IS SPELLED IN WORDS on every scored surface. That makes
 *  `quatre-vingt-dix-sept euros trente` and `quatre vingt dix sept euros
 *  trente` fold identical, which is CORRECT behaviour rather than a defect:
 *  both are the right answer.
 *
 *  EVERY `listenChoose` CARRIES `say`. Without it `ListenChooseCard` falls back
 *  to speaking `opts[correct]`, which reads the answer aloud and, where the
 *  options are digit strings, speaks the number in English.
 *
 *  EVERY `errorSpot` CARRIES `prompt`, or the learner is asked to fix a phrase
 *  that never appears.
 *
 *  NO QUEBEC FORM IS A CORRECT ANSWER AND NONE IS A DISTRACTOR. §D rule 5,
 *  enforced by `QUEBEC_FORMS` in the test rather than by a sentence here.
 *  Nothing is priced in dollars. Nothing asks for a sum.
 *
 *  Options are NEVER hand-randomised: `LessonRich` permutes them at runtime. */
const S_QUIZ: LessonSection = {
  type: 'quiz', id: QUIZ, title: 'The Exam', frSub: 'L\'examen',
  layer: 'core', terms: ['total', 'frame', 'change'],
  say: 'Four rounds of eight. The first round is the only place in this app where you cannot read the answer.',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-catch',
      label: 'Catch the figure',
      say: 'Eight you have to hear. Nothing is written down.',
      targets: ['err-missed-total', 'err-cents-tail'],
      questions: [
        { format: 'listenChoose', ref: HEARD, say: 'Ça fait quatre-vingt-dix-sept euros trente.', q: 'Listen. What is the total?', opts: ['97,30', '87,30', '97,13', '77,30'], correct: 0, why: 'Quatre-vingt-dix-sept, then trente. The dix in the middle is the ten euros that separates it from quatre-vingt-sept.' },
        { format: 'listenChoose', ref: HEARD, say: 'Ça vous fait vingt-trois euros quarante.', q: 'Listen. What is the total?', opts: ['13,40', '23,40', '23,04', '20,34'], correct: 1, why: 'Vingt-trois euros quarante. The vous inside the frame adds a syllable and changes nothing about where the figure sits.' },
        { format: 'listenChoose', ref: TAIL, say: 'Ça fait six euros quatre-vingt-quinze.', q: 'Listen. What is the total?', opts: ['6,75', '16,95', '6,95', '6,90'], correct: 2, why: 'The cents run longer than the euros here. Quatre-vingt-quinze is five syllables after a two-syllable currency word.' },
        { format: 'listenChoose', ref: TAIL, say: 'Ça fait cinquante euros pile.', q: 'Listen. What is the total?', opts: ['55,00', '50,10', '15,00', '50,00'], correct: 3, why: 'Pile means on the nose, so there are no cents at all. It is the one word that tells you the number has finished early.' },
        { format: 'listenChoose', ref: WHICH, say: 'Ça fait deux euros dix.', q: 'Listen. What is the total?', opts: ['2,10', '12,00', '2,12', '20,10'], correct: 0, why: 'Deux euros dix and douze euros are almost the same mouthful. The currency word sits in the middle of one and at the end of the other.' },
        { format: 'listenChoose', ref: CHANGE, say: 'Je vous rends deux euros soixante.', q: 'Listen. How much is coming back to you?', opts: ['2,16', '2,60', '12,60', 'Nothing, that is what you owe'], correct: 1, why: 'Je vous rends is change, not a bill. The figure is the same shape as a total and it goes in the opposite direction.' },
        { format: 'listenChoose', ref: CHANGE, say: 'Je vous rends la monnaie sur vingt euros.', q: 'Listen. What does the figure in this sentence refer to?', opts: ['The change coming back', 'The price of the goods', 'The note you handed over', 'The discount'], correct: 2, why: 'Sur names what you gave her. It is the one place in the lesson where the number in the sentence is not yours to keep.' },
        { format: 'listenChoose', ref: TAIL, say: 'Le total est de quarante-deux euros.', q: 'Listen. How many cents?', opts: ['Forty', 'Two', 'Twenty', 'None'], correct: 3, why: 'The sentence stops on the currency word. When nothing follows euros there are no cents, and that silence is the whole signal.' },
      ],
    },
    {
      id: 'r2-script',
      label: 'Which move is this',
      say: 'Eight on the shape of the encounter rather than the words.',
      targets: ['err-lost-in-script', 'err-no-verb'],
      questions: [
        { format: 'mcq', ref: SHAPE, q: 'She says « Combien je vous mets ? ». What does she want?', opts: ['An amount', 'A payment method', 'Your loyalty card', 'The name on your order'], correct: 0, why: 'Combien is how much. She wants a container: un kilo de, une tranche de. Answering with a noun leaves her holding the scoop.' },
        { format: 'mcq', ref: THEIRS, q: 'She says « Et avec ceci ? ». Where in the encounter are you?', opts: ['She is greeting you', 'She is upselling, after your first request', 'She is giving you change', 'She is asking how you pay'], correct: 1, why: 'Move 4. There is no verb and no noun in the question, so nothing in the words tells you it is about your order.' },
        { format: 'mcq', ref: TOTAL, q: 'Which of these does NOT introduce the amount you owe?', opts: ['Ça vous fait quinze euros.', 'Ça fera huit euros dix.', 'Ça fait deux euros soixante-dix de rendu.', 'Le total est de quarante-deux euros.'], correct: 2, why: 'Same frame, opposite direction. De rendu on the end is what makes it your change, and the frame alone never tells you which figure is coming.' },
        { format: 'mcq', ref: SHAPE, q: 'Which of these comes FIRST in a French shop?', opts: ['Ça fait combien ?', 'Par carte, s\'il vous plaît.', 'Je regarde seulement.', 'Bonjour.'], correct: 3, why: 'It is the price of entry and it comes before the noun rather than after it. Skipping it is the one thing that reliably changes the room.' },
        { format: 'mcq', ref: CHANGE, q: 'She asks « Vous avez la monnaie ? » before you have paid. Why?', opts: ['She is short of coins and is asking for help', 'She is checking you can afford it', 'She wants to see your card', 'She is telling you the price'], correct: 0, why: 'It is a request rather than curiosity. Je n\'ai que des billets is the straight answer and it keeps the transaction moving.' },
        { format: 'mcq', ref: PAYING, q: '« Vous réglez comment ? » is asking about', opts: ['The amount', 'The method', 'The receipt', 'Whether you have a loyalty card'], correct: 1, why: `Comment is how, not how much. ${Cap(unitRef('a2.07'))} taught the same question at a restaurant table and the answer is still three words.` },
        { format: 'mcq', ref: FOLLOWUP, q: 'She says « Il vous faut un sac ? ». What is she actually doing?', opts: ['Offering you something free', 'Telling you she has no bags', 'Selling you something', 'Asking if you have finished'], correct: 2, why: 'In France the bag usually costs. Falloir means need, and she is asking whether you need one enough to pay for it.' },
        { format: 'mcq', ref: THEIRS, q: 'How many of the seven moves does the customer start?', opts: ['None', 'Three', 'All of them', 'One, the greeting'], correct: 3, why: 'Bonjour is yours and everything after it is an answer. That asymmetry is the shape of a till rather than a gap in your French.' },
      ],
    },
    {
      id: 'r3-yours',
      label: 'Your four moves',
      say: 'Eight on the half you produce, which is the short half.',
      targets: ['err-je-veux', 'err-overlong-answer'],
      questions: [
        { format: 'typeIn', ref: YOURS, q: 'Ask what it costs, the way it is said at a counter. Three words: « Ça ... ? »', accept: ['Ça fait combien ?', 'ça fait combien', 'Ca fait combien ?', 'ca fait combien'], answer: 'Ça fait combien ?', why: 'Fait, not coûte, and combien on the end. Quel est le prix ? is published in this corpus and is what a classroom teaches; this is what is said in a shop. The cedilla is not being tested, the word choice is.' },
        { format: 'errorSpot', ref: ERRORS, q: 'You are ordering across a counter. Fix this.', prompt: 'Je veux une baguette.', accept: ['Je voudrais une baguette.', 'je voudrais une baguette', 'Je voudrais une baguette, s\'il vous plaît.'], answer: 'Je voudrais une baguette.', why: 'Je veux is grammatical, understood, and one rung too blunt across a counter. Nobody corrects a customer, which is why nobody learns it. Veux and voudrais do not fold together, so the form is genuinely being tested.' },
        { format: 'mcq', ref: YOURS, q: 'She says « Vous réglez comment ? ». Best answer?', opts: ['Par carte, s\'il vous plaît.', 'Ça fait combien ?', 'Oui, merci.', 'Je voudrais payer maintenant, avec ma carte bancaire.'], correct: 0, why: 'Three words answer it completely. The long one is understood and marks you out as translating rather than talking.' },
        { format: 'errorSpot', ref: QUANTITY, q: 'She asked « Combien je vous mets ? ». Fix the answer.', prompt: 'Des tomates.', accept: ['Un kilo de tomates.', 'un kilo de tomates', 'Un kilo, s\'il vous plaît.', 'un kilo'], answer: 'Un kilo de tomates.', why: `She asked how much, not what. Naming the container is what answers it, and ${unitRef('a1.29')} owns the rule that the container removes the des.` },
        { format: 'mcq', ref: REFUSE, q: 'She says « Je peux vous aider ? » and you want to be left alone.', opts: ['Oui, merci.', 'Je regarde seulement, merci.', 'Non.', 'Ça fait combien ?'], correct: 1, why: 'Four words end it politely. Oui commits you to being helped and non on its own is the one answer that sounds rude.' },
        { format: 'typeIn', ref: REFUSE, q: 'Say it is a bit expensive for you. Six words: « C\'est ... cher pour moi. »', accept: ['C\'est un peu cher pour moi.', 'cest un peu cher pour moi', 'un peu'], answer: 'C\'est un peu cher pour moi.', why: 'Un peu is what makes it sayable, and it does not fold into the version without it. C\'est cher pour moi sounds like a complaint about her shop.' },
        { format: 'mcq', ref: YOURS, q: 'Which of these is the classroom version rather than the counter version?', opts: ['Ça fait combien ?', 'Je vous dois combien ?', 'Quel est le prix, s\'il vous plaît ?', 'C\'est combien ?'], correct: 2, why: 'It is published in this corpus and it is correct. It is also what nobody says at a till, which is exactly why it was worth naming.' },
        { format: 'mcq', ref: PAYING, q: 'You are paying cash. Which is the answer form?', opts: ['payer en espèces', 'J\'ai payé en espèces.', 'L\'argent liquide.', 'En espèces, s\'il vous plaît.'], correct: 3, why: 'The other three are all published and none of them answers a question. An infinitive is how a phrase is stored; it is not how it is said back.' },
      ],
    },
    {
      id: 'r4-missed',
      label: 'When you miss it',
      say: `Eight on asking again, and the repair ladder belongs to ${unitRef('a2.07')}.`,
      targets: ['err-freeze', 'err-wrong-rung'],
      questions: [
        { format: 'speak', ref: SAY, target: 'Pardon ?', ipa: '/paʁ.dɔ̃/', q: 'Say it out loud. She gave you the total and you caught none of it.', why: 'One word, said flat and quickly. Said as a question with a rising end it is ordinary; drawn out it turns into an apology, which is the thing that makes a repair into an incident.' },
        { format: 'speak', ref: SAY, target: 'Vous pouvez répéter, s\'il vous plaît ?', ipa: '/vu pu.ve ʁe.pe.te sil vu plɛ/', q: `Say ${unitRef('a2.07')}\'s rung 2 out loud, to a cashier who has already moved on.`, why: 'Six syllables in one run with no pause in the middle. At a till the whole thing is one short sentence, so asking for all of it costs almost nothing more than rung 1.' },
        { format: 'mcq', ref: REPAIR, q: 'She repeated the total once, at exactly the same speed. Which rung now?', opts: ['Plus lentement, s\'il vous plaît.', 'Pardon ?', 'Vous pouvez répéter, s\'il vous plaît ?', 'Merci.'], correct: 0, why: `Rungs 1 and 2 both just ask for a repeat, and she cannot fix a problem you have not named. Rung 3 is the first that says it was the speed. ${Cap(unitRef('a2.07'))} owns the repair ladder.` },
        { format: 'mcq', ref: REPAIR, q: 'Why is asking again cheaper at a till than almost anywhere else?', opts: ['Cashiers are trained to repeat', 'There is only one thing in the sentence you could have missed', 'The price is always written down', 'French people speak slowly at tills'], correct: 1, why: `You know she said a figure. Naming what you missed narrows it completely, which is the reasoning ${unitRef('a2.07')} set out for reaching for the lowest rung that will actually fix the problem.` },
        { format: 'typeIn', ref: REPAIR, q: 'The cheapest thing you can say when you caught nothing. One word.', accept: ['Pardon', 'Pardon ?', 'pardon'], answer: 'Pardon ?', why: `${Cap(unitRef('a2.07'))} put it at rung 1 because it gives away nothing about why you missed it and because it is what a French speaker says without thinking.` },
        { format: 'mcq', ref: SCENE, q: 'You did not catch the total and you hand over a note that is obviously too big. What has it cost you?', opts: ['Nothing at all', 'She will refuse the note', 'You will not know what you paid until you read the receipt', 'You will be charged more'], correct: 2, why: 'It works, which is the problem. The transaction completes, nobody corrects you, and the habit survives because it never visibly fails.' },
        { format: 'mcq', ref: CHANGE, q: 'She says « Vous n\'avez pas plus petit ? ». What is plus petit?', opts: ['A smaller item', 'A smaller bag', 'A lower price', 'A smaller banknote'], correct: 3, why: 'Never a smaller object. Handing over a fifty for a baguette is what triggers it, and it is asked in every bakery in France before nine in the morning.' },
        { format: 'errorSpot', ref: RECEIPT, q: 'A friend reads your receipt and says this. Fix it.', prompt: 'Tu as payé cent deux euros trente.', accept: ['Tu as payé quatre-vingt-dix-sept euros trente.', 'tu as payé quatre vingt dix sept euros trente', 'quatre-vingt-dix-sept euros trente'], answer: 'Tu as payé quatre-vingt-dix-sept euros trente.', why: 'Cent deux euros trente is the SOUS-TOTAL, before the discount. TOTAL A PAYER is the line that says what left your pocket, and reading the wrong one always errs upward.' },
      ],
    },
  ],
};

const S_ROUNDUP: LessonSection = {
  type: 'roundup', id: ROUNDUP, title: 'What You Take With You', frSub: 'Le bilan',
  layer: 'core',
  say: 'Three things, and the first one is the whole lesson.',
  body: `The number comes once. Asking again is part of the script, and ${unitRef('a2.07')} gave you six ways to do it. Before the figure there is a two-syllable warning, and ça fait, ça vous fait, ça fera and le total est de are all the same warning wearing different clothes. After the figure there is a second one, said faster, which is your change. Everything else at a counter is seven moves in a fixed order, and you start exactly one of them.`,
  points: [
    'The number comes once. Asking again is part of the script.',
    'Ça fait, ça vous fait, ça fera, le total est de. One move, four costumes, and a figure is one syllable behind it.',
    'Two numbers arrive in every transaction. The second one is your change and it is said faster than the first.',
    'Seven moves in a fixed order, and Bonjour is the only one you start.',
    'In Quebec the label is not the price, because the taxes go on at the till. Wait for the till.',
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACTS
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: LessonAct[] = [
  {
    id: 'act1', title: 'The transaction that died at the till',
    sections: [SCENE, GOALS],
    milestone: 'You have watched two numbers arrive and neither of them was repeated.',
    estScreens: 18,
    restPoints: [`${SCENE}/after-the-break`],
  },
  {
    id: 'act2', title: 'The script takes the paradigm\'s slot',
    sections: [SHAPE, THEIRS, YOURS, QUANTITY],
    milestone: 'You can predict what she says next, and you know why you have four lines and she has nine.',
    estScreens: 30,
    restPoints: [`${THEIRS}/after-her-half`],
  },
  {
    id: 'act3', title: 'The number, and the number after it',
    sections: [HEARD, TAIL, TOTAL, WHICH, REPAIR, CHANGE, PAYING],
    milestone: 'You can catch a total and a change figure at full speed, and ask again when you cannot.',
    estScreens: 46,
    restPoints: [`${TOTAL}/after-the-costumes`, `${REPAIR}/after-the-rungs`],
  },
  {
    id: 'act4', title: 'The ways the counter breaks you',
    sections: [REFUSE, QUEBEC, ERRORS, FOLLOWUP],
    milestone: 'You can leave without buying, and you know why a Quebec label is not a Quebec price.',
    estScreens: 26,
    restPoints: [`${QUEBEC}/after-the-label`],
  },
  {
    id: 'act5', title: 'The whole counter',
    sections: [DICTEE, RECEIPT, SAY, SCENARIO],
    milestone: 'You have written six of her lines from the audio and run the whole transaction end to end.',
    estScreens: 30,
    restPoints: [`${RECEIPT}/after-the-receipt`],
  },
  {
    id: 'act6', title: 'Measure',
    sections: [REVIEW, PROGRESS, QUIZ, ROUNDUP],
    milestone: 'Thirty-two questions, and eight of them you cannot read.',
    estScreens: 24,
    restPoints: [`${PROGRESS}/before-the-exam`],
  },
];

/** ONE ARRAY PER ACT. `deckTranche.length` must equal `acts.length`: several
 *  shipped tests assert exactly that.
 *
 *  EVERY ID RELEASED HERE CARRIES THE `flashcard` DRILL, which is what makes a
 *  tranche release actually produce a card. Checked against Postgres by the
 *  batch script, not assumed.
 *
 *  `fr.a2.quebec-et-francophonie.031` IS RELEASED (it carries flashcard) and
 *  the two authored Quebec rows are too. None of the three carries
 *  `voiceflash`, so none of them can reach a speak drill, which is §D rule 3
 *  enforced by the drill array rather than by intention. */
const DECK_TRANCHE: string[][] = [
  [C(177), C(178), 'fr.a2.courses.013', 'fr.a2.courses.002'],
  [C(168), C(169), C(170), C(171), C(172), C(173), C(174), C(175), C(176),
    'fr.a2.courses.003', 'fr.a1.marche.006', 'fr.a1.marche.030',
    'fr.a1.marche.021', 'fr.a1.marche.016', 'fr.a1.marche.038'],
  [C(181), C(182), C(183), C(184), C(185), C(186), C(187), C(188), C(189),
    C(179), C(180), C(190), C(191), C(192), C(193), C(194), C(195), C(204),
    M(71), M(72), M(73), M(74), M(75), M(76), M(77), M(78), M(79), M(80),
    M(81), M(82), M(83), M(84), M(85), M(86),
    ...REPAIR_IDS,
    'fr.a2.courses.017', 'fr.a2.courses.048', 'fr.a2.courses.049',
    'fr.a1.argent-quotidien.053', 'fr.a1.argent-quotidien.055',
    'fr.a1.argent-quotidien.067', 'fr.a1.argent-quotidien.076',
    'fr.a2.argent-quotidien.060', 'fr.a2.argent-quotidien.061', 'fr.a2.argent-quotidien.063',
    'fr.a2.argent-quotidien.054', 'fr.a2.argent-quotidien.053',
    'fr.a1.marche.029', 'fr.a1.marche.028'],
  [C(196), C(197), C(198), C(199), C(200), C(201), C(202), C(203),
    Q(199), Q(200), 'fr.a2.quebec-et-francophonie.031'],
  ['fr.a2.courses.015', 'fr.a2.courses.052', 'fr.a2.courses.053',
    'fr.a2.courses.072', 'fr.a2.courses.073', 'fr.a2.courses.089',
    'fr.a2.courses.007', 'fr.a1.argent-quotidien.077', 'fr.a2.courses.137'],
  ['fr.a2.courses.014', 'fr.a2.courses.024', 'fr.a2.courses.018', 'fr.a2.courses.064',
    'fr.a2.courses.076', 'fr.a2.courses.077', 'fr.a1.argent-quotidien.068'],
];

const SECTIONS: LessonSection[] = [
  S_SCENE, S_GOALS,
  S_SHAPE, S_THEIRS, S_YOURS, S_QUANTITY,
  S_HEARD, S_TAIL, S_TOTAL, S_WHICH, S_REPAIR, S_CHANGE, S_PAYING,
  S_REFUSE, S_QUEBEC, S_ERRORS, S_FOLLOWUP,
  S_DICTEE, S_RECEIPT, S_SAY, S_SCENARIO,
  S_REVIEW, S_PROGRESS, S_QUIZ, S_ROUNDUP,
];

/** Every id this lesson releases to the SRS: the union of every section's
 *  `itemIds` and every deckTranche entry, deduplicated. `Lesson.itemIds` must
 *  be non-empty or `lesson-contract.test.ts:505` fails the publish gate. */
const ITEM_IDS: string[] = [
  ...new Set([
    ...DECK_TRANCHE.flat(),
    ...SECTIONS.flatMap((s) => (s as { itemIds?: string[] }).itemIds ?? []),
  ]),
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-frame', title: 'The frame, and what is behind it', format: 'flashcard' as const,
    coach: 'Read the English. Say the French, and notice that a number is always one syllable behind the frame.',
    pairs: [
      ['That comes to fifteen euros sixty', 'Ça fait quinze euros soixante.'],
      ['That comes to twenty-three euros forty', 'Ça vous fait vingt-trois euros quarante.'],
      ['That will be eight euros ten, please', 'Ça fera huit euros dix, s\'il vous plaît.'],
      ['The total is forty-two euros', 'Le total est de quarante-deux euros.'],
      ['That is two euros seventy in change', 'Ça fait deux euros soixante-dix de rendu.'],
    ],
  },
  {
    id: 'drill-hers', title: 'Her nine lines', format: 'flashcard' as const,
    coach: 'Read the English. Say what she would say, and say it at her speed rather than yours.',
    pairs: [
      ['What would you like?', 'Vous désirez ?'],
      ['How much shall I give you?', 'Combien je vous mets ?'],
      ['Anything else with that?', 'Et avec ceci ?'],
      ['Will that be all?', 'Ce sera tout ?'],
      ['Is it a gift?', 'C\'est pour offrir ?'],
      ['How are you paying?', 'Vous réglez comment ?'],
    ],
  },
  {
    id: 'drill-change', title: 'The second number', format: 'flashcard' as const,
    coach: 'Every one of these is about coins and notes rather than about the price.',
    pairs: [
      ['Here is two euros sixty change', 'Je vous rends deux euros soixante.'],
      ['Here is your change', 'Voilà votre monnaie.'],
      ['Do you have change?', 'Vous avez la monnaie ?'],
      ['Have you got anything smaller?', 'Vous n\'avez pas plus petit ?'],
      ['I only have notes', 'Je n\'ai que des billets.'],
      ['Can you give me the exact money?', 'Vous pouvez faire l\'appoint ?'],
    ],
  },
  {
    id: 'drill-yours', title: 'Your four moves', format: 'flashcard' as const,
    coach: 'Short. Every one of these is four words or fewer except the first.',
    pairs: [
      ['Hello, I would like a baguette, please', 'Bonjour, je voudrais une baguette, s\'il vous plaît.'],
      ['How much is that?', 'Ça fait combien ?'],
      ['By card, please', 'Par carte, s\'il vous plaît.'],
      ['In cash, please', 'En espèces, s\'il vous plaît.'],
      ['I am just looking, thanks', 'Je regarde seulement, merci.'],
    ],
  },
];

const ERROR_TRIGGERS = [
  {
    id: 'err-missed-total', drill: 'drill-frame',
    description: 'Does not catch the figure, and hands over a note rather than asking. The transaction completes, so the habit never visibly fails.',
    detectOn: [HEARD, WHICH, `${QUIZ}/r1-catch`],
  },
  {
    id: 'err-cents-tail', drill: 'drill-frame',
    description: 'Catches the euros and loses the cents, because they arrive as a bare number after the currency word with nothing marking the join.',
    detectOn: [TAIL, HEARD, `${QUIZ}/r1-catch`],
  },
  {
    id: 'err-lost-in-script', drill: 'drill-hers',
    description: 'Cannot say which of the seven moves a line belongs to, so answers the wrong question or says nothing.',
    detectOn: [SHAPE, THEIRS, `${QUIZ}/r2-script`],
  },
  {
    id: 'err-no-verb', drill: 'drill-hers',
    description: 'Fails on the questions with nothing to anchor on: Et avec ceci ?, Ce sera tout ?, Ça fait...',
    detectOn: [THEIRS, FOLLOWUP, `${QUIZ}/r2-script`],
  },
  {
    id: 'err-je-veux', drill: 'drill-yours',
    description: 'Orders with je veux, which is grammatical, understood, and one rung too blunt across a counter. Nobody corrects a customer.',
    detectOn: [YOURS, ERRORS, `${QUIZ}/r3-yours`],
  },
  {
    id: 'err-overlong-answer', drill: 'drill-yours',
    description: 'Answers a three-word question with a full sentence, which is understood and marks the speaker as translating rather than talking.',
    detectOn: [YOURS, PAYING, `${QUIZ}/r3-yours`],
  },
  {
    id: 'err-change-direction', drill: 'drill-change',
    description: 'Reads a change figure as a price, most often on sur vingt euros, where the number names the note handed over rather than the coins coming back.',
    detectOn: [CHANGE, WHICH, `${QUIZ}/r1-catch`],
  },
  {
    id: 'err-freeze', drill: 'drill-change',
    description: 'Says nothing when the figure goes past, and pays with a note chosen by guesswork rather than asking for the number again.',
    detectOn: [SCENE, REPAIR, `${QUIZ}/r4-missed`],
  },
  {
    id: 'err-wrong-rung', drill: 'drill-change',
    description: `Reaches too high or too low on ${unitRef('a2.07')}\'s repair ladder: asking for a repeat when the speed was the problem, or apologising before asking at all.`,
    detectOn: [REPAIR, SCENARIO, `${QUIZ}/r4-missed`],
  },
];

export const COURSES_LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  // `Lesson.seq` is the lesson's index WITHIN its unit, not its trail position.
  // Every shipped lesson is 1 except a1.30.l2 and a2.10.l2, which are 2, and
  // `lessonsOf` sorts siblings by it (app/lessonoverview.tsx:51).
  seq: 1,
  level: 'a2',
  // FOUND ON DEVICE: the mission header read « courses ».
  //
  // `missions.ts` draws `${level} · LEÇON ${unit.seq}` at render time and `tag`
  // is the stored fallback, so a slug here shows the learner a lowercase word
  // where all 65 other lessons show a formatted label. a1-10-meteo.test.ts
  // documents the same class of bug: a1.03 shipped LEÇON 03 at seq 5 and the
  // header above it drew LEÇON 05.
  //
  // a2.07 carries the identical defect (`restaurant`, and seq 24) and is
  // already live at rollout 10. Reported rather than fixed here: it is another
  // unit's shipped content and it needs the publish decision that 42-FIX-PLAN
  // step 2 owns.
  tag: 'A2 · LEÇON 25',
  version: 1,
  title: UNIT.title,
  intro: 'You have been taught how to ask for things. This one is about the number that comes back at you, once, at her speed.',

  grammarIntroduced: [
    'The seven-move structure of a French counter transaction, received in the cashier\'s voice rather than produced in the learner\'s',
    'Recognition of the four frames that introduce a total, ça fait, ça vous fait, ça fera and le total est de, as one move in four costumes',
    'Price reception at native speed inside another speaker\'s turn, as APPLICATION of a1.28\'s price shape rather than a second teaching of it',
    'Change reception as a second figure, said faster than the first, which is what the published canDo means by count change',
    'That sur vingt euros names the note handed over rather than the change returned',
    'The quantity containers of a1.29 produced under counter pressure, with no new claim made about the partitive',
    'A four-item refusal script, so that a learner who does not want to buy can leave without going silent',
    'That in Quebec the shelf price is not the price paid, because the taxes are added at the till, taught as an expectation and never as an arithmetic operation',
    'The repair move applied to a number, cited from a2.07 by itemId and unit id, with zero repair rows authored here',
    'That the amount, the change and the coins are this unit\'s, and l\'addition and the restaurant script are a2.07\'s',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Le chiffre ne passe qu\'une fois.',
    minutes: 30,
    difficulty: 3,
    glyph: '🧾',
    screens: 174,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: [],
  deckTranche: DECK_TRANCHE,
  terms: COURSES_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
  },
};

export const LESSON = COURSES_LESSON;
export { ACTS, SECTIONS, DECK_TRANCHE, ITEM_IDS, ERROR_TRIGGERS, DRILLS };
export const SAY_ID = SAY;
export const QUIZ_ID = QUIZ;
export const QUEBEC_ID = QUEBEC;
export const HEARD_ID = HEARD;
export const DICTEE_ID = DICTEE;
export const REPAIR_ID = REPAIR;
export const IMPORTED_IDS = IMPORTED;
export const CITED_UNITS = { PRICE_UNIT, NUMBERS_UNIT, CONTAINER_UNIT, MODAL_UNIT, REPAIR_UNIT };
