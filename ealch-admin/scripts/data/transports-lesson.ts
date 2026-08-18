// a2.27.l1 « Les transports » — the lesson.
//
// 23 missions, 23 sections, six acts, ONE lesson, ONE quiz.
//
// ACT 3 IS THE HEAVIEST, at 6 missions against act 2's 4, as doctrine §B.5
// requires. There is no paradigm in a direction, so act 2 takes the paradigm's
// slot and does something else with it: it installs the FRAME. The four move
// types and the five joints are on screen, in order, before one second of
// audio plays. That sequencing is the design's whole argument, and it is what
// stops act 3 from being a memory test.
//
// BOTH FUNDED GATES WERE OPEN WHEN THIS WAS AUTHORED.
//   * `04-REPAIR-MOVE-IDS.md` exists and all six rows read back from Postgres,
//     so a2.07 has landed. s16-repair cites its ids and authors nothing.
//   * `listening.hideLines` shipped 2026-08-15 (`schema.ts`,
//     `MissionRich.tsx:1966`, `listening-hidelines.test.ts`, and both a2.07 and
//     a2.26 already use it). s10-three is authored with `hideLines: true` as
//     specified. The transcript-study fallback was NOT taken.
//
// THE MASKED-QUESTION TRAP, INHERITED FROM a2.07 AND OBEYED HERE. a2.07 found
// on device that the question rail renders UNDER the masked cards, so a question
// that opens by quoting its line hands the words straight back. Every question
// in s10-three refers to its line BY NUMBER and never reprints the French.
//
// THE PRODUCT'S FIRST `table` WAS NOT BUILT HERE, BECAUSE a2.07 DID NOT BUILD
// ONE EITHER. The prompt gates mission 6 on whether a2.07 shipped a `table` and
// device-checked it. Measured across all 67 seeded lessons, `table` is at ZERO;
// a2.07 used `tapTable` twice. Mission 6 therefore takes the settled fallback, a
// second `tapTable`, which is pre-approved and needs no device check. Doctrine
// §B.8's "one tapTable then stop" is a rule about the PARADIGM act, and this
// unit has no paradigm.
//
// NO CLOCK ANYWHERE. `setInterval` is 0 across all four render files, so
// nothing here is against the clock and every beat is tap-to-continue.
//
// THE SCENE IS IN FRANCE, NOT MONTREAL, AND THAT IS A DELIBERATE DEPARTURE FROM
// THE PROMPT. The prompt's mission table names Berri-UQAM. Collation C3, which
// outranks the prompt, settles the band as France-primary with Quebec as at most
// ONE non-scored card, and §7.3 warns that eight authors with eight registers is
// how this band embarrasses itself. A Montreal scene in front of 104
// France-standard rows is exactly that inconsistency. The scene is Lyon
// Part-Dieu; Quebec is where the policy puts it, on s12's single card and two
// recognition rows. Reported in §3 of the build report.

import type { Lesson, LessonAct, LessonSection, LessonDrill } from '../../../ealch-v2/src/content/schema.ts';
import { TRANSPORT_TERMS } from './transports-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }
import {
  UNIT, LESSON_ID, REFRAME, T, Q, REPAIR_IDS, REPAIR_UNIT, REPAIR_ASSESSED_IN, IMPORTED,
  MODE_RULE_ID, EXISTING_CHAIN_ID, PRIOR_INSTRUCTIONS, DICTEE_IDS,
  PLACE_PREP_UNIT, A_PLACE_UNIT, ASK_UNIT, MONEY_UNIT, MODAL_UNIT,
} from './transports-corpus.ts';

/* ── Section ids, named once so acts, quiz refs and rest points cannot drift ── */
const SCENE = 's01-scene';
const GOALS = 's02-goals';
const ASKEE = 's03-askee';
const MOVES = 's04-moves';
const JOINTS = 's05-joints';
const VERBS = 's06-verbs';
const MODE = 's07-mode';
const ONE = 's08-one';
const TWO = 's09-two';
const THREE = 's10-three';
const FOUR = 's11-four';
const ORDINALS = 's12-ordinals';
const ERRORS = 's13-errors';
const EAR = 's14-ear';
const ANNONCE = 's15-annonce';
const REPAIR = 's16-repair';
const DICTEE = 's17-dictee';
const GUICHET = 's18-guichet';
const SAY = 's19-say';
const REVIEW = 's20-review';
const PROGRESS = 's21-progress';
const QUIZ = 's22-quiz';
const ROUNDUP = 's23-roundup';

const FR = { lang: 'fr-FR' as const, mode: 'tts' as const, speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — the exchange you cannot script
 * ══════════════════════════════════════════════════════════════════════════ */

/** DOCTRINE DEPARTURE, ARGUED AND REPORTED. §B.2 says an A2 scene opens on
 *  somebody who started a sentence they could not finish. This one opens on
 *  somebody who FINISHED their sentence and could not process the reply. That
 *  is the same failure, loss of fluency under load, relocated from production
 *  to reception, and it is the only scene that is true to a canDo ending "and
 *  follow the answer". If all eight situational units open on a died sentence,
 *  eight scenes read as one scene.
 *
 *  DEVICE HAZARD, OBEYED. A spaced terminal mark has made a scene bubble lose
 *  its last word while the gloss still translated it in full. « Pardon ? » and
 *  « Attention ! » both carry the space. Every bubble here that ends in one is
 *  short enough to sit on one line, and the fix if it recurs is a flex on a
 *  wrapper View and never on the TX. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration', size: 'md',
    text: 'Lyon Part-Dieu, a Thursday at half past six. You have twenty minutes and you have rehearsed the question twice on the escalator.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble', from: 'you', reveal: 'auto', size: 'md',
    fr: 'Pardon, madame. Je cherche la gare routière, s\'il vous plaît.',
    en: '(Excuse me. I am looking for the coach station, please.)',
    audio: { lang: 'fr-FR', mode: 'tts' },
  },
  {
    kind: 'narration', size: 'md',
    text: 'It comes out cleanly. She understands you completely. That is where the part you practised ends.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble', from: 'them', reveal: 'tap', size: 'md',
    speaker: 'A woman with a shopping bag',
    fr: 'Alors, vous prenez la deuxième à droite, puis vous longez le parc jusqu\'au feu, c\'est juste après la pharmacie.',
    en: 'Right, you take the second on the right, then follow the park to the lights, it is just after the chemist.',
    stage: 'She is already pointing. You understood every word and you have no idea where to walk.',
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] },
  },
  {
    kind: 'choice', size: 'lg',
    prompt: 'You caught the park and the chemist. You lost everything between them. What do you do?',
    options: [
      { fr: 'Nod, say merci, and walk.', en: 'you will work it out', audio: { mode: 'tts', voice: 'coach' }, outcome: 'breaks' },
      { fr: 'Pardon ?', en: 'ask her to say it again', audio: { lang: 'fr-FR', mode: 'tts' }, outcome: 'works' },
    ],
    followUp: {
      works: 'She says it again, at the same speed, and you catch the same two words. Asking again was right and it was not enough on its own.',
      breaks: 'You walk to the park. There is no chemist. There are three streets and you took none of them, because you never held which one.',
    },
  },
  {
    kind: 'break', size: 'lg',
    heading: 'It was not the words',
    body: 'Nothing she said was above your level. Deuxième, droite, parc, feu, pharmacie are all A1. What defeated you was that four instructions arrived in one breath and you were still translating the first when the third went past.',
    coach: 'A direction is not a sentence. It is a sequence of moves, and the small words between them are where one move ends and the next begins.',
    right: { fr: 'la deuxième à droite', en: 'one move, held whole', ipa: '/la dø.zjɛm a dʁwat/', respell: '[lah deu-ZYEM ah DRWAHT]' },
    wrong: { fr: 'la... deuxième... à droite ?', en: 'three words translated separately, and the next move already gone', ipa: '/la dø.zjɛm a dʁwat/', respell: '[lah deu-ZYEM ah DRWAHT]' },
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65], audioFirst: true },
  },
  {
    kind: 'bubble', from: 'them', reveal: 'auto', size: 'md',
    speaker: 'The same instruction, split',
    fr: 'la deuxième à droite · le parc · jusqu\'au feu · après la pharmacie',
    en: 'TURN, then PASS, then PASS, then ARRIVE.',
    stage: 'Four chunks instead of fourteen words. Nothing was added and nothing was translated.',
    audio: { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] },
  },
  {
    kind: 'resolve', size: 'md',
    text: 'Four unrelated items is at the limit of what anybody holds. Four chunks is comfortable. The rest of this lesson is about finding the edges.',
  },
];

const S_SCENE: LessonSection = {
  type: 'scene', id: SCENE, title: 'The Reply That Ran Past You', frSub: 'La réponse qui ne s\'arrête pas',
  render: 'screens', layer: 'core', terms: ['move', 'joint'],
  say: 'You have been taught how to ask where things are. Nobody has taught you what comes back.',
  setting: { place: 'The concourse at the foot of the escalators, at rush hour', city: 'Lyon', time: 'Thursday, half past six' },
  beats: SCENE_BEATS,
  closing: { size: 'md', text: REFRAME },
};

const S_GOALS: LessonSection = {
  type: 'goals', id: GOALS, title: 'What You Will Be Able To Do', frSub: 'Ce que vous saurez faire',
  layer: 'core', terms: ['move', 'chain'],
  say: 'Four goals. Only one of them is about something you say.',
  goals: [
    { t: 'Hear where one instruction ends', s: 'Puis, ensuite, après, jusqu\'à and au bout de. Five small words, and a comma that has no sound at all.' },
    { t: 'Hold four moves in the order they arrived', s: 'Three correct moves in the wrong order put you on a different street entirely.' },
    { t: 'Follow an answer you did not write', s: `The question is A1 and shipped at ${unitRef('a1.20')}. The reply is fourteen words nobody rehearsed with you.` },
    { t: 'Ask for the one piece you missed', s: `${Cap(unitRef('a2.07'))} gave you six ways to ask again. This unit adds the case where you only lost one word of four.` },
  ],
};

/** THE TWO ASKEES. This unit has a register axis the other seven do not: WHO
 *  you are asking. It is also the only unit in the band where the other party
 *  is often not a professional. A waiter, a receptionist and a shop assistant
 *  are trained to deal with people whose French is imperfect. A passer-by is
 *  not: full speed, gestures, no simplification.
 *
 *  WHAT THIS SECTION IS NOT. The register and politeness LADDER is a2.29's,
 *  once, for all eight units (collation §C5). This is two openings as two
 *  SHAPES, and there is no escalation and no softening taught as a system.
 *  `je voudrais` appears once, as unanalysed lexis, on card 4. `pourriez-vous`
 *  appears nowhere: Paul settled it to a2.29 on 2026-08-15. */
const S_ASKEE: LessonSection = {
  type: 'cardDeck', id: ASKEE, title: 'Two People, Two Openings', frSub: 'À qui vous parlez',
  render: 'deck', layer: 'core', size: 'lg', terms: ['streetForm', 'counterForm'],
  say: 'English merges both of these into "Excuse me, could I". French does not, and using the wrong one is the failure a French speaker actually notices.',
  audio: { ...FR, recordingId: 'rec-a2-27-askee' },
  cards: [
    { head: 'A stranger in the street', fr: 'Pardon, madame. Je cherche la gare, s\'il vous plaît.', sub: '[par-DOHⁿ mah-DAM zhuh SHERSH lah GAHR seel voo PLEH]', body: 'Apology first, then the goal, and no verb of demand anywhere in it. You are interrupting somebody who was not waiting for you, and that is what the apology buys.', label: 'apology, then the goal' },
    { head: 'Staff behind a counter', fr: 'Bonjour. Un aller-retour pour Lyon, s\'il vous plaît.', sub: '[bohⁿ-ZHOOR uhⁿ-nah-lay-ruh-TOOR poor lee-OHⁿ seel voo PLEH]', body: 'Greeting first, then the transaction, and it is elliptical because a counter is short. He is at work and you are the next in the queue.', label: 'greeting, then the business' },
    { head: 'The two swapped over', fr: 'Un aller-retour pour Lyon ?', sub: '[uhⁿ-nah-lay-ruh-TOOR poor lee-OHⁿ]', body: 'Said to somebody walking past, this is nonsense: they do not sell tickets. Said at a counter, Pardon, je cherche un billet reads as lost rather than transacting. The failure is not rudeness, it is using the wrong shape.', label: 'the failure, both ways' },
    { head: 'One softener, learned whole', fr: 'Je voudrais un billet pour demain matin.', sub: '[zhuh voo-DREH uhⁿ bee-YEH poor duh-MEHⁿ ma-TEHⁿ]', body: `A softer je veux, and nothing more is claimed about it here. ${Cap(unitRef(MODAL_UNIT))} shipped the form as a fixed piece and the family it belongs to arrives later.`, label: `${Cap(unitRef(MODAL_UNIT))} shipped this form` },
    { head: 'Vous, to both of them', fr: 'Vous partez quand ?', sub: '[voo par-TAY KAHⁿ]', body: 'The counter agent uses vous to you and you use vous to a stranger in the street. There is no situation in this lesson where either of you would use tu.', label: 'vous throughout' },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — what the answer is made of. THE FRAME, before any audio.
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE OWNS, STATED. Four move types, one card each.
 *
 *  SIZE IS `lg`, NOT `xl`, AND THE PROMPT ASKED FOR `xl`. Measured: `xlWords`
 *  is 12 and `validateDensity` applies it PER FIELD, so an xl card's `body` can
 *  hold twelve words in total. That is a caption, not a teaching card, and each
 *  of these four has to say what a move type IS and why the verb does not tell
 *  you. All four bodies failed at 22 to 28 words. `lg` carries them under the
 *  45-word core cap with room to spare. Reported as a measured correction to
 *  the prompt's §4 act 2, which recommends xl for exactly this section.
 *
 *  The `xl-single-unit` rule the prompt cites is a separate one and is about
 *  the number of French units on a screen, not the word count. It is moot here.
 *
 *  WHY THE MOVE TYPES AND NOT THE VERBS. Four of the verbs mean "go":
 *  allez, continuez, remontez and prenez. Sorting by verb sorts by nothing.
 *  Sorting by what the move DOES to your position generalises to instructions
 *  this lesson never showed, which is what doctrine §B.5 means by a family.
 *
 *  THE FORM IS USED AND NOT NAMED. Paul settled this on 2026-08-15, option B:
 *  nobody in this band owns the mood these verbs are in. a2.32 does the same
 *  thing in the same terms and neither unit cites the other for it. Nothing
 *  here conjugates, tables, contrasts with a vous form, or names it. */
const S_MOVES: LessonSection = {
  type: 'cardDeck', id: MOVES, title: 'Four Kinds Of Move', frSub: 'Les quatre gestes',
  render: 'deck', layer: 'core', size: 'lg', terms: ['move', 'chain'],
  say: REFRAME,
  audio: { ...FR, recordingId: 'rec-a2-27-moves' },
  cards: [
    { head: 'GO', fr: 'Continuez tout droit.', sub: '[kohⁿ-tee-nü-AY too DRWAH]', body: 'Move along without changing heading. Allez, continuez, remontez and prenez all do this, which is why the verb tells you almost nothing.', label: 'move along' },
    { head: 'TURN', fr: 'Tournez à gauche.', sub: '[toor-NAY ah GOHSH]', body: 'Change heading. This is the move that goes wrong most, because the word carrying it is often the shortest one in the sentence.', label: 'change heading' },
    { head: 'PASS', fr: 'Traversez la place.', sub: '[trah-vehr-SAY lah PLAHSS]', body: 'A landmark you go over, along or past. Traversez, passez, longez and jusqu\'à. A landmark named here is not where you stop.', label: 'landmark reference' },
    { head: 'ARRIVE', fr: 'C\'est juste après la pharmacie.', sub: '[seh zhüst ah-PREH lah far-mah-SEE]', body: 'The endpoint, and the only move type with no verb of motion in it. C\'est, vous verrez and ça sera. It is easy to hear as an afterthought.', label: 'the endpoint' },
  ],
};

/** THE FIVE JOINTS, AUDIBLE. tapTable header cells have a measured glyph
 *  budget (a2.16 found headers clipping past it), so the three column heads are
 *  five words between them. Five rows, under the six-row cap a2.12 measured. */
const S_JOINTS: LessonSection = {
  type: 'tapTable', id: JOINTS, title: 'Where One Move Ends', frSub: 'Les cinq charnières',
  layer: 'core', terms: ['joint', 'move'],
  say: REFRAME,
  audio: { ...FR, recordingId: 'rec-a2-27-joints' },
  cols: ['the joint', 'it means', 'watch for'],
  rows: [
    {
      cells: ['puis', 'then', 'one syllable'],
      say: 'Continuez tout droit, puis tournez à gauche.',
      detail: { title: 'The commonest joint', body: 'One syllable, unstressed, sitting between two instructions. It is the clearest signal French gives you that a move has finished, and it is also the quietest.', say: 'Continuez tout droit, puis tournez à gauche.' },
    },
    {
      cells: ['ensuite', 'then, next', 'same job as puis'],
      say: 'Traversez le pont, ensuite tournez à gauche.',
      detail: { title: 'The interchangeable one', body: 'Ensuite and puis do the same job and a speaker picks whichever comes out. A learner who has only met one of them loses half the joints they hear.', say: 'Traversez le pont, ensuite tournez à gauche.' },
    },
    {
      cells: ['après', 'after', 'joint or endpoint'],
      say: 'Tournez à droite après la banque, puis continuez tout droit.',
      detail: { title: 'The one that does two jobs', body: 'Après joins two moves and it also names an endpoint: c\'est après la pharmacie. Only what follows it tells you which, and by then the next move has started.', say: 'C\'est juste après la pharmacie.' },
    },
    {
      cells: ['jusqu\'à', 'as far as', 'where it stops'],
      say: 'Allez jusqu\'au carrefour, puis prenez à droite.',
      detail: { title: 'The joint that ends a move', body: 'Jusqu\'à does not separate two moves, it says where the first one stops. Miss it and you keep walking past the thing you were told to stop at.', say: 'Continuez jusqu\'au pont.' },
    },
    {
      cells: ['au bout de', 'at the end of', 'four words, one beat'],
      say: 'Allez au bout de la rue, puis tournez à gauche.',
      detail: { title: 'The long one that sounds short', body: 'Four written words that arrive as a single beat. A learner hears bout and nothing around it, which is enough to know the street ends and not enough to know what happens there.', say: 'Allez au bout de la rue, puis tournez à gauche.' },
    },
  ],
};

/** THE MOVE VERBS AGAINST THEIR ENGLISH. This was designed as the product's
 *  first `table`, gated on a2.07 shipping one and device-checking it. a2.07
 *  shipped no table and `table` is still at zero across all 67 seeded lessons,
 *  so this takes the fallback the prompt names: a second `tapTable`, which is
 *  pre-approved and needs no device check.
 *
 *  Six rows exactly, which is the cap a2.12 measured. `longez` and `remontez`
 *  are here because neither has a one-word English equivalent, which is the
 *  reason a learner drops them and loses a whole move. */
const S_VERBS: LessonSection = {
  type: 'tapTable', id: VERBS, title: 'What The Verbs Actually Do', frSub: 'Les verbes du trajet',
  layer: 'core', terms: ['move', 'chain'],
  say: 'Four of these mean go. Sorting a direction by its verb sorts it by nothing, which is why the four kinds of move come first.',
  audio: { ...FR, recordingId: 'rec-a2-27-verbs' },
  cols: ['you hear', 'in English', 'which move'],
  rows: [
    {
      cells: ['Continuez', 'keep going', 'GO'],
      say: 'Continuez tout droit.',
      detail: { title: 'The default', body: 'Keep doing what you are doing. It needs no landmark, which makes it the one move that can be given with no information in it at all.', say: 'Continuez tout droit.' },
    },
    {
      cells: ['Remontez', 'go back up', 'GO'],
      say: 'Remontez la rue.',
      detail: { title: 'Up the street, not upward', body: 'Remonter une rue is about direction along it and has nothing to do with a slope. There is no English word for it, so it is heard as remonter something and discarded.', say: 'Remontez la rue.' },
    },
    {
      cells: ['Tournez', 'turn', 'TURN'],
      say: 'Tournez à gauche.',
      detail: { title: 'The one you expect', body: 'The move learners listen for, and the least useful thing to listen for, because prendre does the same job and is commoner in a hurry.', say: 'Tournez à droite au feu.' },
    },
    {
      cells: ['Prenez', 'take', 'GO or TURN'],
      say: 'Prenez la deuxième à droite.',
      detail: { title: 'One verb, two moves', body: 'Prenez le boulevard is GO and prenez la deuxième à droite is TURN. What decides it is the noun behind the verb, not the verb, which is the clearest evidence that the frame beats the vocabulary.', say: 'Prenez le boulevard en face.' },
    },
    {
      cells: ['Longez', 'follow along', 'PASS'],
      say: 'Longez le parc.',
      detail: { title: 'No English word for it', body: 'Go along the edge of. It is one syllable of information a learner has no slot for, so it disappears and the move goes with it.', say: 'Longez le parc, ensuite traversez la rue.' },
    },
    {
      cells: ['Traversez', 'cross', 'PASS'],
      say: 'Traversez la place.',
      detail: { title: 'And sometimes with no object', body: 'Traversez on its own means cross the thing I just named. The bridge from the move before is what you cross and nothing in the words says so.', say: 'Traversez, c\'est sur votre droite.' },
    },
  ],
};

/** en AGAINST à WITH TRANSPORT MODES, ONE CARD, AND THE RULE IS QUOTED.
 *
 *  This is the ONE piece of preposition content that is genuinely unowned.
 *  a2.04 owns the four-kind sort and chez and `sheet.a2.04.lieu`, which is a
 *  lookup a learner comes back to. a1.21 owns à plus place-by-name and the full
 *  contraction. a1.22 owns en/au/aux with countries. À la gare, au guichet and
 *  à pied as a preposition question are ALREADY TAUGHT and are not retaught.
 *
 *  READ THIS TWICE. The `en` on this card is the PREPOSITION. It is not
 *  a2.25's pronoun `en`, and nothing in this lesson blurs the two: no surface
 *  anywhere uses `y` or `en` as a pronoun, and the test asserts it against the
 *  pronoun's SHAPES rather than against the bare letters, because en face, en
 *  provenance de and en gare are all legal here. */
const S_MODE: LessonSection = {
  type: 'cardDeck', id: MODE, title: 'In It, Or On It', frSub: 'en bus, à vélo',
  render: 'deck', layer: 'core', size: 'lg', terms: ['move'],
  say: `${Cap(unitRef(PLACE_PREP_UNIT))} and ${unitRef(A_PLACE_UNIT)} already taught the preposition system. This is the one corner of it they left, and the corpus states the rule better than a card could.`,
  audio: { ...FR, recordingId: 'rec-a2-27-mode' },
  cards: [
    { head: 'The rule, in the corpus', fr: 'On utilise en pour les transports fermés et à pour les transports ouverts.', sub: 'closed takes en, open takes à', body: `This is a published corpus row, not a rule written for this card. If you are inside it, en. If you are on it, à. That is the whole of it.`, label: MODE_RULE_ID },
    { head: 'Closed', fr: 'en bus · en voiture · en métro', sub: '[ahⁿ BÜSS · ahⁿ vwah-TÜR · ahⁿ may-TROH]', body: 'You get in. The metro takes en too, even though it is a network rather than a thing you own.', label: 'you are inside it' },
    { head: 'Open', fr: 'à pied · à vélo', sub: '[ah PYAY · ah vay-LOH]', body: 'You are on it, or you are it. À pied has been in this corpus since a1 and is the one everybody already knows.', label: 'you are on it' },
    { head: 'Not the little word', fr: 'en bus', sub: '[ahⁿ BÜSS]', body: `The en here is a preposition and it means by. It is not the pronoun of the same spelling, which belongs to another unit and does not appear anywhere in this lesson.`, label: 'preposition, not pronoun' },
    { head: 'Where the system was taught', fr: 'à la gare · au guichet', sub: '[ah lah GAHR · oh ghee-SHEH]', body: `${Cap(unitRef(PLACE_PREP_UNIT))} sorted these four ways and left you a lookup you can come back to. ${Cap(unitRef(A_PLACE_UNIT))} owns à with a place by name. Neither is retaught here.`, label: `${Cap(unitRef(PLACE_PREP_UNIT))} and ${unitRef(A_PLACE_UNIT)}` },
    // THE ONE QUEBEC CARD THIS UNIT IS ALLOWED, and it is here rather than in
    // its own section so the count stays at one. Collation C3, confirmed by
    // Paul 2026-08-15: France-standard in every scored, drilled and quizzed
    // surface, and at most one cardDeck card naming a Quebec divergence.
    // NOTHING ON THIS CARD IS EVER THE ANSWER TO A SCORED QUESTION, which the
    // apply script proves by walking every option of every scored surface
    // against QUEBEC_FORMS rather than by asserting it in prose.
    // NO BRAND NAMES, NO FARE PRODUCTS AND NO PRICES: operator products change
    // and a card built on one would age badly.
    { head: 'In Montreal', fr: 'embarquer · débarquer · la passe', sub: '[ahⁿ-bar-KAY · day-bar-KAY · lah PAHSS]', body: 'Get on, get off, and the travel pass. Monter, descendre and l\'abonnement are the forms every drill in this lesson scores, and these are what you will hear at the door of a bus. L\'autobus is already in this corpus and is ordinary French too.', label: 'recognition only, never scored' },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — THE OWNS: the chain ladder. Six missions, the heaviest act.
 *
 *  The rung count climbs 1, 2, 3, 4. At N=4 nobody translates word by word and
 *  survives, which is the point of the ladder rather than an accident of it.
 *
 *  `chainDrill` WAS DECLINED (collation §3.2, C2) AND THIS IS WHAT REPLACES IT:
 *  two groupDrill, one listening with hideLines, one stepped trapDrill. What is
 *  lost is said plainly in the build report rather than papered over here: the
 *  trapDrill prints `promptSay` on screen, so the learner SEES the chain while
 *  answering, and the pure working-memory element is not recovered. Two things
 *  carry it instead. The audio step precedes the gated drill, so the first
 *  encounter is by ear. And the ten listenChoose quiz items are genuinely
 *  audio-first, because that card hides its options until the clip has played.
 *  What survives intact is the Owns, which is chunking and ORDERING, not
 *  memory: three correct moves in the wrong order put you somewhere else, and
 *  the ordering options test exactly that.
 * ══════════════════════════════════════════════════════════════════════════ */

/** RUNG 1. Trivially easy on purpose. It installs the question. */
const S_ONE: LessonSection = {
  type: 'groupDrill', id: ONE, title: 'One Move', frSub: 'Un seul geste',
  layer: 'core', terms: ['move', 'chain'],
  say: 'Four groups, one move each, and no clock on any of them. This one is meant to feel too easy.',
  audio: { ...FR, recordingId: 'rec-a2-27-one' },
  groups: [
    {
      label: 'GO',
      items: [
        { fr: 'Continuez tout droit.', en: 'Keep going straight.', itemId: T(135) },
        { fr: 'Allez jusqu\'au carrefour.', en: 'Go as far as the crossroads.', itemId: T(136) },
        { fr: 'Remontez la rue.', en: 'Go back up the street.', itemId: T(137) },
      ],
      check: { q: 'How many moves are in « Continuez tout droit » ?', opts: ['One', 'Two', 'Three', 'None, it is a description'], correct: 0, why: 'One. From here on, that is the first thing you ask about anything you hear, and it is the only question in this act that has an easy answer.' },
    },
    {
      label: 'TURN',
      items: [
        { fr: 'Tournez à gauche.', en: 'Turn left.', itemId: T(139) },
        { fr: 'Tournez à droite au feu.', en: 'Turn right at the lights.', itemId: T(140) },
        { fr: 'Prenez la deuxième à droite.', en: 'Take the second on the right.', itemId: T(141) },
      ],
      check: { q: '« Tournez à droite au feu » names the lights. What are they for?', opts: ['They are where you end up', 'They are where you turn', 'They are what you cross', 'They are a warning'], correct: 1, why: 'A landmark inside a TURN says where the turn happens. The same landmark inside an ARRIVE would say where you stop, and only the move type separates them.' },
    },
    {
      label: 'PASS',
      items: [
        { fr: 'Traversez la place.', en: 'Cross the square.', itemId: T(143) },
        { fr: 'Longez le parc.', en: 'Follow the edge of the park.', itemId: T(145) },
        { fr: 'Passez devant la mairie.', en: 'Go past the town hall.', itemId: T(144) },
      ],
      check: { q: 'You are told « Longez le parc ». Do you stop at the park?', opts: ['Yes, the park is the destination', 'No, you go along it and keep going', 'Only if you see it', 'It depends on the next move'], correct: 1, why: 'A landmark in a PASS move is something you go past. It is never where you stop, and mistaking one for the other is how a learner arrives three streets early.' },
    },
    {
      label: 'ARRIVE',
      items: [
        { fr: 'C\'est juste après la pharmacie.', en: 'It is just after the chemist.', itemId: T(147) },
        { fr: 'Vous verrez la gare en face.', en: 'You will see the station opposite.', itemId: T(148) },
        { fr: 'Ça sera sur votre gauche.', en: 'It will be on your left.', itemId: T(149) },
      ],
      check: { q: 'What do all three of these have that the other nine do not?', opts: ['A landmark', 'No verb of motion at all', 'A number', 'A politeness word'], correct: 1, why: 'ARRIVE is the only move type with nothing in it that tells you to move. That is why it is easy to hear as an afterthought and easy to lose.' },
    },
  ],
};

/** RUNG 2. The check names the joint, which is the reframe made into a task. */
const S_TWO: LessonSection = {
  type: 'groupDrill', id: TWO, title: 'Two Moves, One Joint', frSub: 'Deux gestes, une charnière',
  layer: 'core', terms: ['joint', 'chain'],
  say: REFRAME,
  audio: { ...FR, recordingId: 'rec-a2-27-two' },
  groups: [
    {
      label: 'joined by puis',
      items: [
        { fr: 'Continuez tout droit, puis tournez à gauche.', en: 'Keep straight, then turn left.', itemId: T(151) },
        { fr: 'Remontez la rue, puis prenez la deuxième à droite.', en: 'Up the street, then second right.', itemId: T(156) },
        { fr: 'Allez au bout de la rue, puis tournez à gauche.', en: 'To the end of the street, then left.', itemId: T(162) },
      ],
      check: { q: 'Which word tells you the first move has ended?', opts: ['tout', 'puis', 'droit', 'la'], correct: 1, why: REFRAME },
    },
    {
      label: 'joined by ensuite',
      items: [
        { fr: 'Tournez à gauche au feu, ensuite continuez tout droit.', en: 'Left at the lights, then straight on.', itemId: T(153) },
        { fr: 'Traversez le pont, ensuite tournez à gauche.', en: 'Cross the bridge, then turn left.', itemId: T(155) },
        { fr: 'Longez le parc, ensuite traversez la rue.', en: 'Along the park, then cross the street.', itemId: T(157) },
      ],
      check: { q: 'What is the difference between puis and ensuite here?', opts: ['Ensuite means later', 'Puis is for turns only', 'There is none, a speaker uses whichever comes out', 'Ensuite joins three moves'], correct: 2, why: 'They do the same job. A learner who only knows one of them hears half the joints and counts half the moves.' },
    },
    {
      label: 'a joint inside a move',
      items: [
        { fr: 'Allez jusqu\'au carrefour, puis prenez à droite.', en: 'To the crossroads, then turn right.', itemId: T(154) },
        { fr: 'Tournez à droite après la banque, puis continuez tout droit.', en: 'Right after the bank, then straight on.', itemId: T(161) },
        { fr: 'Continuez jusqu\'au rond-point, ensuite prenez la sortie à droite.', en: 'To the roundabout, then the right exit.', itemId: T(159) },
      ],
      check: { q: 'Each of these has two joints. How many MOVES are there?', opts: ['Three', 'Two', 'Four', 'One'], correct: 1, why: 'Jusqu\'à and après sit INSIDE a move and say where it stops. Only puis and ensuite separate one move from the next, so counting every small word overcounts.' },
    },
  ],
};

/** RUNG 3. THE BLIND CO MISSION, and the one the band's funded engineering
 *  item was for. `hideLines: true` masks the transcript until every question is
 *  answered. Without it this section would be a reading exercise with a play
 *  button, and the `en` gloss would hand over the whole route in English.
 *
 *  QUESTIONS REFER TO A LINE BY NUMBER AND NEVER REPRINT IT.
 *
 *  AUTHORED SO IT IS LIFTABLE. Collation §7.2 asks this band to leave a2.35 a
 *  reception bank. Every line here makes sense with no knowledge of this
 *  lesson's framing, so a2.35 or a future exam runner can take it whole. */
const S_THREE: LessonSection = {
  type: 'listening', id: THREE, title: 'Three Moves, Unseen', frSub: 'Trois gestes, sans le texte',
  layer: 'core', terms: ['chain', 'joint'],
  say: REFRAME,
  audio: { ...FR, recordingId: 'rec-a2-27-three', audioFirst: true },
  hideLines: true,
  questionsInModal: true,
  lines: [
    { fr: 'Allez jusqu\'au feu, tournez à droite, c\'est après la pharmacie.', en: 'Go to the lights, turn right, it is after the chemist.' },
    { fr: 'Sortez de la gare, tournez à droite, puis continuez tout droit.', en: 'Leave the station, turn right, then keep going straight.' },
    { fr: 'Remontez la rue, prenez la deuxième à gauche, c\'est au coin.', en: 'Go up the street, take the second left, it is on the corner.' },
    { fr: 'Longez le parc, tournez à gauche au feu, puis vous verrez.', en: 'Follow the park, turn left at the lights, then you will see it.' },
  ],
  questions: [
    { q: 'Line 1. Where do you end up?', opts: ['At the lights', 'On the right', 'After the chemist', 'At the crossroads'], correct: 2, why: 'The lights are where you turn and the chemist is where you stop. Both are named and only the move type separates them.' },
    { q: 'Line 2. Which way do you go as you come out?', opts: ['Left', 'Right', 'Straight ahead', 'Back into the station'], correct: 1, why: 'Right, then straight. Two of the three moves point you forward and only one changes your heading, which is the one worth holding.' },
    { q: 'Line 3. Which turning?', opts: ['The second on the left', 'The first on the left', 'The second on the right', 'The corner'], correct: 0, why: 'Deuxième and gauche. Get the ordinal right and the side wrong and you are on a parallel street going the other way.' },
    { q: 'Line 4. How many joints could you actually hear?', opts: ['None', 'One', 'Two', 'Three'], correct: 1, why: 'Only puis is spoken. The first break is a comma, and a comma has no sound, which is why counting joints by ear undercounts before it overcounts.' },
  ],
};

/** RUNG 4. THE HOLDING DRILL, and the replacement for `chainDrill`.
 *
 *  THE STEPPED SHAPE, NEVER THE STACKED ONE. A2 traps have one shape and
 *  `lesson-contract.test.ts` has enforced rule > cards > audio > drill with a
 *  gate since 2026-08-13. The stacked render hides the gate, the audio and the
 *  sub-mission number, which is exactly the three things this drill is for.
 *
 *  THE AUDIO STEP PRINTS A SENTENCE ABOUT THE LETTER R, AND SO DOES EVERY
 *  OTHER ONE IN THE PRODUCT. `MissionRich.tsx:870` is a bare JSX literal,
 *  "Écoutez la paire. Le R sonne, puis le R se tait.", above the cards on every
 *  stepped trapDrill with an audio step. The design flagged it unverified and
 *  asked for a device check. It is settled by reading instead: 41 shipped
 *  stepped trapDrills carry an audio step, 38 of them A2 lessons including
 *  a2.07's s13-trap and a2.26's s10-which. The defect is already live
 *  everywhere and this build does not create it. It is REPORTED and not fixed
 *  here, because fixing it changes a renderer that shipped content depends on
 *  and belongs in its own commit with its own device check.
 *
 *  THE DRILL OPTIONS ARE ORDERINGS. That is what makes this the Owns rather
 *  than a vocabulary check: the four moves are the same in every option and
 *  only their sequence differs. */
const S_FOUR: LessonSection = {
  type: 'trapDrill', id: FOUR, title: 'Four Moves, In Order', frSub: 'Quatre gestes, dans l\'ordre',
  layer: 'core', swipe: true, terms: ['chain', 'move'],
  say: REFRAME,
  audio: { ...FR, recordingId: 'rec-a2-27-four' },
  rule: {
    title: 'The order is the answer',
    body: 'Four moves is where word-by-word translating stops working. Every option below contains the same four moves, so knowing the words gets you nothing. Three correct moves in the wrong order put you on a different street.',
  },
  steps: [
    { kind: 'rule', label: 'The rule', title: 'Order, Not Vocabulary' },
    { kind: 'cards', label: 'The four', title: 'Chains, Split At The Joints' },
    { kind: 'audio', label: 'Hear them', title: 'Four Moves, One Breath' },
    { kind: 'drill', label: 'Now you', title: 'Which Order Was It', gate: true },
  ],
  cards: [
    { promptLabel: 'one of each move type', promptSound: 'Continuez tout droit, tournez à gauche, traversez la place, c\'est en face.', fr: 'GO · TURN · PASS · ARRIVE', ipa: '/kɔ̃.ti.nɥe tu dʁwa tuʁ.ne a ɡoʃ/', tip: 'Twelve words, four things to hold, and not one joint you can hear. The commas are doing all the separating.' },
    { promptLabel: 'the ordinal in front', promptSound: 'Prenez la deuxième à droite, longez le parc, traversez la rue, c\'est là.', fr: 'TURN · PASS · PASS · ARRIVE', ipa: '/pʁə.ne la dø.zjɛm a dʁwat/', tip: 'C\'est là names nothing at all. A learner still translating move one hears it as filler and loses the fact that the route has ended.' },
    { promptLabel: 'three moves with no verb', promptSound: 'Sortez de la gare, tout droit, deuxième à gauche, c\'est au coin.', fr: 'GO · GO · TURN · ARRIVE', ipa: '/sɔʁ.te də la ɡaʁ tu dʁwa/', tip: 'Only the first move has a verb in it. This is what a hurried passer-by actually says, and no word list prepares you for a move with no verb.' },
    { promptLabel: 'one spoken joint out of three', promptSound: 'Prenez le boulevard, puis la troisième à gauche, traversez, c\'est en face.', fr: 'GO · TURN · PASS · ARRIVE', ipa: '/pʁə.ne lə bul.vaʁ pɥi/', tip: 'Counting puis gives you two moves and there are four. Counting joints is a start; the commas have to be counted too.' },
  ],
  drill: [
    { promptSay: 'Continuez tout droit, tournez à gauche, traversez la place, c\'est en face.', opts: ['straight, left, cross, it is opposite', 'left, straight, cross, it is opposite', 'cross, straight, left, it is opposite'], correct: 0 },
    { promptSay: 'Prenez la deuxième à droite, longez le parc, traversez la rue, c\'est là.', opts: ['cross, second right, along the park', 'second right, cross, along the park', 'second right, along the park, cross'], correct: 2 },
    { promptSay: 'Allez jusqu\'au feu, tournez à droite, passez le pont, c\'est après.', opts: ['to the lights, right, over the bridge', 'right, to the lights, over the bridge', 'over the bridge, to the lights, right'], correct: 0 },
    { promptSay: 'Sortez de la gare, tout droit, deuxième à gauche, c\'est au coin.', opts: ['out, second left, straight on', 'out, straight on, second left', 'straight on, out, second left'], correct: 1 },
    { promptSay: 'Traversez la place, remontez la rue, prenez la première à droite, continuez.', opts: ['up the street, cross the square, first right', 'cross the square, first right, up the street', 'cross the square, up the street, first right'], correct: 2 },
    { promptSay: 'Passez devant l\'église, tournez à gauche, allez tout droit, c\'est là.', opts: ['past the church, left, straight on', 'left, past the church, straight on', 'straight on, left, past the church'], correct: 0 },
  ],
};

/** THE SECOND OWNS. Zero published rows in the corpus put an ordinal inside a
 *  direction before this lesson, measured directly and confirmed. */
const S_ORDINALS: LessonSection = {
  type: 'cardDeck', id: ORDINALS, title: 'The Word You Will Lose', frSub: 'Première, deuxième, troisième',
  render: 'deck', layer: 'core', size: 'lg', terms: ['ordinal', 'move'],
  say: REFRAME,
  audio: { ...FR, recordingId: 'rec-a2-27-ordinals' },
  cards: [
    { head: 'Why this word and not another', fr: 'la deuxième à droite', sub: '[lah deu-ZYEM ah DRWAHT]', body: 'Short, unstressed, and sitting between two content words. Prenez carries a verb and droite carries a direction, and the thing that decides which street you take is the two syllables between them.', label: 'the most-missed word' },
    { head: 'The noun is not there', fr: 'la première à gauche', sub: '[lah pruh-MYEHR ah GOHSH]', body: 'La première rue à gauche is the full form and it is not what is said in a hurry. With rue dropped, the ordinal is carrying the whole meaning on its own.', label: 'rue is dropped' },
    { head: 'Counted from where', fr: 'C\'est la deuxième rue, après le feu.', sub: '[seh lah deu-ZYEM RÜ ah-PREH luh FEU]', body: 'The counting starts at the lights, not where you are standing. Nothing in the sentence says so and a French speaker would not think to.', label: 'not from where you stand' },
    { head: 'Two streets is the third', fr: 'Comptez deux rues, puis tournez à droite.', sub: '[kohⁿ-TAY deu RÜ pwee toor-NAY ah DRWAHT]', body: 'Count two and turn at the next one, which is the third. An ordinal and a cardinal doing the same job land you one street apart, and both are said.', label: 'the off-by-one is real' },
    { head: 'When you only lost this', fr: 'C\'est la deuxième ou la troisième ?', sub: '[seh lah deu-ZYEM oo lah trwah-ZYEM]', body: `You held the route and lost one word of it. Asking about that word gets you four words back. Asking ${unitRef(REPAIR_UNIT, 'a2')}'s rung 2 gets you all fourteen again at the same speed.`, label: 'ask about the word, not the sentence' },
  ],
};

const S_ERRORS: LessonSection = {
  type: 'commonErrors', id: ERRORS, title: 'What Goes Wrong', frSub: 'Les erreurs fréquentes',
  layer: 'core', size: 'lg', swipe: true, terms: ['move', 'joint'],
  say: 'Four, one per screen. Three of them send you to the wrong place and the fourth loses you a move you did hear.',
  errors: [
    { wrong: 'Hearing à droite and tout droit as the same thing.', right: 'à droite is right, tout droit is straight on.', why: 'Both end on the same sound and one of them is a turn. English keeps them a whole word apart. Under speed, inside a chain, the difference is one syllable at the front.' },
    { wrong: 'Taking descendre to mean go down.', right: 'Descendez ici means get off here.', why: 'It is get off a train, a bus or a tram, and it is also go down. The corpus publishes both senses. On a metro nobody is talking about stairs.' },
    { wrong: 'Waiting for a verb before you count a move.', right: 'deuxième à gauche is a whole move with no verb in it.', why: 'A hurried speaker drops the verb from every move after the first. Counting verbs gives you one move out of four, and the other three go past unrecorded.' },
    { wrong: 'Counting only the words you can hear.', right: 'A comma is a joint too.', why: 'Puis and ensuite are audible and the commas between moves are not. Three moves can arrive with no spoken joint at all, which is the case the fourth rung ends on.' },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — the trap, and the way out
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE EAR TRAPS.
 *
 *  THE PROMPT'S THIRD SUGGESTED TRAP IS NOT ONE AND IT WAS DROPPED. It names
 *  "sortie versus sorti". They are HOMOPHONES, both /sɔʁ.ti/, so nothing
 *  distinguishes them by ear and a listening trap built on them tests nothing.
 *  Reported as a measured correction. What replaces it is two genuine minimal
 *  pairs that send a learner to a different place: Tournez against Retournez,
 *  and Continuez against Contournez.
 *
 *  Two stepped trapDrills in one lesson needs no device check: trapDrill
 *  already repeats in ten shipped lessons (collation §1.10). */
const S_EAR: LessonSection = {
  type: 'trapDrill', id: EAR, title: 'One Syllable, A Different Street', frSub: 'Les pièges à l\'oreille',
  layer: 'core', swipe: true, terms: ['ordinal', 'move'],
  say: 'Four pairs that differ by one syllable and by several hundred metres. You can see the French here, so this is the contrast rather than the test.',
  audio: { ...FR, recordingId: 'rec-a2-27-ear' },
  rule: {
    title: 'The difference is at the front, or in the middle',
    body: 'Every pair below shares most of its sounds. Inside a chain, unstressed, with the next move already starting, the part that differs is the part you have least time for.',
  },
  steps: [
    { kind: 'rule', label: 'The rule', title: 'Shared Opening, Different Route' },
    { kind: 'cards', label: 'The four', title: 'Pairs That Cost You A Street' },
    { kind: 'audio', label: 'Hear both', title: 'Same Mouthful, Different Place' },
    { kind: 'drill', label: 'Now you', title: 'Which One Did She Say', gate: true },
  ],
  cards: [
    { promptLabel: 'the second against the twelfth', promptSound: 'Prenez la deuxième à droite.', fr: 'deuxième, not douzième', ipa: '/dø.zjɛm/ · /du.zjɛm/', tip: 'One vowel apart, and both are ordinals that fit the sentence perfectly. This is the pair that actually costs a learner a street, and it is the best trap in this unit.' },
    { promptLabel: 'right against straight on', promptSound: 'Tournez à droite au feu.', fr: 'à droite, not tout droit', ipa: '/a dʁwat/ · /tu dʁwa/', tip: 'One is a turn and one is not a move at all. They end on the same sound and English keeps them a whole word apart, which is why the ear never learned to separate them.' },
    { promptLabel: 'turn against turn back', promptSound: 'Tournez à gauche au feu.', fr: 'Tournez, not Retournez', ipa: '/tuʁ.ne/ · /ʁə.tuʁ.ne/', tip: 'Retournez sends you back the way you came. The whole difference is an unstressed syllable at the front, which is the first thing lost when a chain is moving.' },
    { promptLabel: 'carry on against go around', promptSound: 'Continuez jusqu\'au rond-point.', fr: 'Continuez, not Contournez', ipa: '/kɔ̃.ti.nɥe/ · /kɔ̃.tuʁ.ne/', tip: 'Both open on the same two syllables and one of them means go around the thing rather than through it. At a roundabout that is a different exit.' },
  ],
  drill: [
    { promptSay: 'Prenez la deuxième à droite.', opts: ['the twelfth on the right', 'the second on the right', 'the second on the left'], correct: 1 },
    { promptSay: 'Prenez la douzième à droite.', opts: ['the twelfth on the right', 'the second on the right', 'the second street'], correct: 0 },
    { promptSay: 'Tournez à droite au feu.', opts: ['straight on at the lights', 'right at the lights', 'left at the lights'], correct: 1 },
    { promptSay: 'Allez tout droit au feu.', opts: ['straight on at the lights', 'right at the lights', 'turn at the lights'], correct: 0 },
    { promptSay: 'Retournez à la gare.', opts: ['turn at the station', 'go back to the station', 'go past the station'], correct: 1 },
    { promptSay: 'Contournez le rond-point.', opts: ['carry on to the roundabout', 'go around the roundabout', 'stop at the roundabout'], correct: 1 },
  ],
};

/** THE ANNOUNCEMENT GENRE. Text VISIBLE, and that is correct here: the job is
 *  recognising a shape, not decoding under pressure. Repeated `listening` is
 *  proven shipped in six lessons and needs no device check.
 *
 *  WHY THE DEGRADATION IS NOT SIMULATED. `tts.speak` takes rate and voice only.
 *  There is no filter, no EQ, no noise bed and no reverb, and
 *  `SceneSetting.ambience` is declared in the schema and read by no component.
 *  A station announcement is recognisable by register and speed rather than by
 *  frequency response, so this simulates the GENRE: fronted destination, number
 *  read as a block, a nominalised delay, and a delivery about fifteen percent
 *  faster than conversational. `speeds: [1.15, 1, 0.75]` gets most of the way
 *  there for zero engineering. A genuinely degraded clip is a studio job and it
 *  belongs behind this corpus rather than in front of it.
 *
 *  ZERO ANNOUNCEMENTS EXISTED IN 48,325 PUBLISHED ROWS, and DELF A2's CO
 *  syllabus names "annonces dans un lieu public" as a genre. That single fact
 *  is the strongest argument for this tranche, and it serves a2.29 and a2.31
 *  as much as this unit. Every line stands alone without this lesson's framing
 *  so a2.35 can lift it. */
const S_ANNONCE: LessonSection = {
  type: 'listening', id: ANNONCE, title: 'How A Station Talks', frSub: 'Les annonces',
  layer: 'more', terms: ['announcement', 'chain'],
  say: 'Read these rather than decode them. An announcement is a shape, and once you know the shape you only have to catch the number inside it.',
  audio: { lang: 'fr-FR', mode: 'tts', speeds: [1.15, 1, 0.75], recordingId: 'rec-a2-27-annonce' },
  questionsInModal: true,
  lines: [
    { fr: 'Le train à destination de Lyon partira voie douze.', en: 'The train for Lyon will depart from platform twelve.' },
    { fr: 'Le train en provenance de Marseille entre en gare.', en: 'The train from Marseille is arriving.' },
    { fr: 'Le train aura un retard d\'environ vingt minutes.', en: 'The train will be about twenty minutes late.' },
    { fr: 'Ce train ne dessert pas la gare de Massy.', en: 'This train does not stop at Massy station.' },
    { fr: 'Prochain arrêt, Châtelet. Correspondance ligne quatre.', en: 'Next stop, Châtelet. Change here for line four.' },
  ],
  questions: [
    { q: 'Which two words separate a train that is leaving from one that is arriving?', opts: ['partira and entre', 'à destination de and en provenance de', 'Lyon and Marseille', 'voie and gare'], correct: 1, why: 'Four syllables apart and opposite platforms. Partira and entre are the ordinary verbs; the two long phrases are the announcement register and they arrive first.' },
    { q: 'Where does the destination sit in one of these sentences?', opts: ['At the end', 'In the middle, after the verb', 'Near the front, before the verb', 'It is never named'], correct: 2, why: 'The destination is fronted, which is what makes an announcement recognisable before you have understood any of it. Ordinary French would put it after the verb.' },
    { q: 'Why is « aura un retard » harder than « est en retard » ?', opts: ['It is a different tense', 'The delay is a noun, so it arrives later in the sentence', 'It is regional', 'It means something different'], correct: 1, why: 'The nominalised form is what makes it sound official, and it pushes the figure further from the start of the sentence. The number is the only part you actually need.' },
    { q: 'A negative announcement is the expensive one. Why?', opts: ['It is spoken faster', 'It uses harder vocabulary', 'It tells you a stop is NOT happening, and missing the ne costs you a journey', 'It is always about a strike'], correct: 2, why: 'Ce train ne dessert pas la gare de Massy is the same shape as every other line here. The ne and the pas are the only difference and they are the two quietest words in it.' },
  ],
};

/** a2.07's MOVE, QUOTED. Zero repair rows authored, six itemIds cited, a2.07
 *  named by unit id in the copy, and the six ids released through the act's
 *  `deckTranche` rather than through `itemIds` on this cardDeck, because NO
 *  RENDERER READS `itemIds` ON A cardDeck. `04-REPAIR-MOVE-IDS.md` corrected
 *  this after a2.07 and a2.26 both shipped the dead field.
 *
 *  CARD 5 IS WHAT THIS UNIT ADDS AND IT IS NOT a2.07's. The failure mode here
 *  is PARTIAL, not total: you routinely catch three moves of four, and there is
 *  a correct thing to say in that state. a2.07's ladder answers "I understood
 *  nothing". Nothing in the product answered "I understood all of it except
 *  which street", and that question is built out of this unit's own ordinal
 *  content rather than out of a repair formula. */
const S_REPAIR: LessonSection = {
  type: 'cardDeck', id: REPAIR, title: 'Ask For The Piece You Lost', frSub: 'Redemander, mais quoi',
  render: 'deck', layer: 'core', size: 'lg', terms: ['rung', 'ordinal'],
  say: `${Cap(unitRef(REPAIR_UNIT))} authored six ways to ask again, once, for the whole band, and this lesson adds none of them. What it adds is the case where you only lost one word.`,
  audio: { ...FR, recordingId: 'rec-a2-27-repair' },
  cards: [
    { head: 'Rung 1', fr: 'Pardon ?', sub: '[par-DOHⁿ]', body: `One word, and it gives away nothing about why you missed it. ${Cap(unitRef(REPAIR_UNIT))} put it first because it costs you nothing at all and because it is what a French speaker says without thinking.`, label: `${Cap(unitRef(REPAIR_UNIT))}, rung 1` },
    { head: 'Rung 2', fr: 'Vous pouvez répéter, s\'il vous plaît ?', sub: '[voo poo-VAY ray-pay-TAY seel voo PLEH]', body: 'Asks for the whole thing again. In the street the whole thing is fourteen words, so this is a much bigger ask here than it was at a restaurant table.', label: `${Cap(unitRef(REPAIR_UNIT))}, rung 2` },
    { head: 'Rung 3', fr: 'Plus lentement, s\'il vous plaît.', sub: '[plü lahⁿt-MAHⁿ seel voo PLEH]', body: `The first rung that names the fault. Reach for it when she has already repeated the route at exactly the same speed, which is what happens if you used rung 1.`, label: `${Cap(unitRef(REPAIR_UNIT))}, rung 3` },
    { head: `The state ${unitRef('a2.07')} does not cover`, fr: 'C\'est la deuxième ou la troisième ?', sub: '[seh lah deu-ZYEM oo lah trwah-ZYEM]', body: 'You held the route. You lost one word of it. A targeted question gets you four words back; a generic one gets you the whole route again at the speed that defeated you the first time.', label: 'name what you missed' },
    { head: 'Three more of the same shape', fr: 'À gauche ou à droite, pardon ?', sub: '[ah GOHSH oo ah DRWAHT par-DOHⁿ]', body: 'Après le pont ou avant ? and C\'est quelle rue, pardon ? do the same job for the joint and for the name. Each one names the missing piece and asks for that piece only.', label: 'the joint, or the name' },
    { head: 'Where you are already tested on this', fr: 'Pardon ?', sub: '[par-DOHⁿ]', body: `The A1 capstone has been assessing the repair move in an exam round since it shipped, and no lesson taught it until ${unitRef(REPAIR_UNIT)} did. Reach for the lowest rung that will actually fix the problem.`, label: 'The A1 capstone assesses it' },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — production
 * ══════════════════════════════════════════════════════════════════════════ */

/** WORD MODE, OVER THE MOVE VERBS AND THE JOINTS.
 *
 *  The dictée tile check is the one render-side caller of `normalizeFr`, which
 *  strips accents, BOTH apostrophes, hyphens, all punctuation and collapses
 *  whitespace. So no item here has an accent, an apostrophe or a hyphen as its
 *  ONLY difficulty. That rules out aller-retour, rond-point, jusqu'au, l'arrêt
 *  and arrêt against arret, all of which are everywhere in this unit's material
 *  and none of which is in this section.
 *
 *  What CAN be tested is words that differ in letters, and that is what these
 *  six are: tournez, continuez, traversez, allez, puis, ensuite, droit against
 *  droite, bout, feu, pont, gauche.
 *
 *  All six run in WORD mode, proven through the real `dicteeMode` rather than
 *  by counting characters: each is more than sixteen letters and more than one
 *  word, which are the two conditions. */
const S_DICTEE: LessonSection = {
  type: 'dictation', id: DICTEE, title: 'Write The Instruction', frSub: 'La dictée',
  layer: 'core', terms: ['joint', 'move'],
  say: 'Six instructions, and the joint is inside four of them. You have heard every one of these at least three times by now.',
  audio: { ...FR, recordingId: 'rec-a2-27-dictee' },
  itemIds: DICTEE_IDS,
};

/** THE GUICHET, ELEVEN TURNS, AND THE TURN THAT IS THE DESIGN'S SIGNATURE.
 *
 *  TURN 8's correct user move is a REPAIR. The agent's line is deliberately
 *  long and fast, and the model answer is a targeted request for the missing
 *  chunk rather than a generic "I did not understand". Nothing in the product
 *  does this, and it is why this section was authored rather than adapted from
 *  `sc.a2.rp-voyage.001`, which is this exact situation in three turns with no
 *  `alts` and no `userEn`. This section is INLINE (schema 1205-1208), so it
 *  collides with that scenario in no way.
 *
 *  THE `alts` CARRY DIFFERENT QUESTION FORMS FOR THE SAME MEANING. TCF EO
 *  task 1 caps a candidate who produces only one question form, and rising
 *  intonation, est-ce que and inversion all count. The reveal therefore shows
 *  three ways to ask the same thing, which is a scoring-aware choice and is
 *  meant to be visible in the build.
 *
 *  FRANCE, VOUS, THROUGHOUT, and the ticket PRICE is never counted or paid.
 *  a2.26 owns the money transaction; this unit owns the ticket as an object of
 *  a journey. The price is stated once and nothing is added up.
 *
 *  AUTHORED SO a2.35 CAN LIFT IT WHOLE. No turn depends on this lesson's
 *  framing. NO `Scenario.exam`, per collation §1.12: it is read by no code. */
const S_GUICHET: LessonSection = {
  type: 'scenario', id: GUICHET, title: 'The Ticket Window', frSub: 'Au guichet',
  layer: 'core', terms: ['counterForm', 'rung'],
  say: 'Eleven turns. He starts asking questions before you have finished your sentence, and one of the things he says goes past you.',
  setting: 'The ticket windows at Lyon Part-Dieu, a Thursday evening, four people in the queue behind you.',
  turns: [
    { ai: 'Bonjour, monsieur.', en: 'Good evening.', user: 'Bonjour. Un aller-retour pour Nantes, s\'il vous plaît.', userEn: 'Hello. A return to Nantes, please.', alts: [{ fr: 'Bonjour, madame. Un aller-retour pour Nantes.', en: 'Hello. A return to Nantes.' }, { fr: 'Bonjour. Je voudrais un aller-retour pour Nantes.', en: 'Hello. I would like a return to Nantes.' }] },
    { ai: 'Vous partez quand ?', en: 'When are you travelling?', user: 'Demain matin, s\'il vous plaît.', userEn: 'Tomorrow morning, please.', alts: [{ fr: 'Demain, si possible.', en: 'Tomorrow, if possible.' }, { fr: 'Ce soir, si vous avez.', en: 'This evening, if you have anything.' }] },
    { ai: 'Il y a un train à sept heures dix et un à neuf heures.', en: 'There is a train at ten past seven and one at nine.', user: 'Celui de neuf heures, s\'il vous plaît.', userEn: 'The nine o\'clock one, please.', alts: [{ fr: 'Le train de neuf heures.', en: 'The nine o\'clock train.' }, { fr: 'Est-ce qu\'il y a quelque chose plus tard ?', en: 'Is there anything later?' }] },
    { ai: 'Vous voyagez seul ?', en: 'Are you travelling alone?', user: 'Oui, seul.', userEn: 'Yes, alone.', alts: [{ fr: 'Non, à deux.', en: 'No, two of us.' }, { fr: 'Oui, une seule place.', en: 'Yes, one seat.' }] },
    { ai: 'Vous avez une carte de réduction ?', en: 'Do you have a discount card?', user: 'Non, je n\'en ai pas.', userEn: 'No, I do not have one.', alts: [{ fr: 'Non, désolé.', en: 'No, sorry.' }, { fr: 'Oui, la voici.', en: 'Yes, here it is.' }] },
    { ai: 'Aller simple ou aller-retour ?', en: 'One way or return?', user: 'Aller-retour, s\'il vous plaît.', userEn: 'Return, please.', alts: [{ fr: 'Un aller-retour.', en: 'A return.' }, { fr: 'Aller simple, finalement.', en: 'One way, actually.' }] },
    { ai: 'C\'est complet à neuf heures. Il reste des places à onze heures.', en: 'Nine is full. There are seats at eleven.', user: 'D\'accord, onze heures.', userEn: 'All right, eleven then.', alts: [{ fr: 'Onze heures, très bien.', en: 'Eleven, fine.' }, { fr: 'Il n\'y a vraiment rien avant ?', en: 'Is there really nothing before that?' }] },
    { ai: 'Alors, départ onze heures quatre, voie douze, correspondance à Massy voie trois.', en: 'So, departure eleven oh four, platform twelve, change at Massy, platform three.', user: 'Pardon, c\'est quelle voie à Massy ?', userEn: 'Sorry, which platform at Massy?', alts: [{ fr: 'La correspondance, c\'est quel quai ?', en: 'The connection, which platform is it?' }, { fr: 'Vous pouvez répéter la voie, s\'il vous plaît ?', en: 'Can you repeat the platform, please?' }] },
    { ai: 'Voie trois. C\'est écrit sur le billet.', en: 'Platform three. It is written on the ticket.', user: 'Merci beaucoup.', userEn: 'Thank you very much.', alts: [{ fr: 'Très bien, merci.', en: 'Fine, thank you.' }, { fr: 'Voie trois, d\'accord.', en: 'Platform three, right.' }] },
    { ai: 'Et le guichet est de ce côté, la sortie est en face.', en: 'And the ticket office is on this side, the exit is opposite.', user: 'Pardon, la sortie est de quel côté ?', userEn: 'Sorry, which side is the exit?', alts: [{ fr: 'À gauche ou à droite, pardon ?', en: 'Left or right, sorry?' }, { fr: 'La sortie, c\'est par où ?', en: 'The exit, which way is it?' }] },
    { ai: 'Tout droit, puis à gauche après les escaliers.', en: 'Straight on, then left after the stairs.', user: 'Tout droit, puis à gauche. Merci, bonne soirée.', userEn: 'Straight on, then left. Thanks, have a good evening.', alts: [{ fr: 'Merci, au revoir.', en: 'Thank you, goodbye.' }, { fr: 'Après les escaliers, d\'accord. Merci.', en: 'After the stairs, right. Thanks.' }] },
  ],
};

/** PRACTICE IS MANDATORY. `lesson-contract.test.ts:505` mirrors the publish
 *  gate and fails any non-assessment lesson with no practice section, an empty
 *  `practice.itemIds`, or an empty `Lesson.itemIds`.
 *
 *  `skill: 'speak'`, and it is authored knowing the field is DECORATIVE:
 *  `LessonSection.tsx`'s `case 'practice'` renders `<PracticeVFView>` and never
 *  passes `skill` at all. The design asked for `skill: 'listen'`, which would
 *  have drawn the same speaking drill under a name that lied about it.
 *
 *  Every item named here carries `voiceflash`, checked against POSTGRES rather
 *  than the seed, because `drills` is a Postgres enum array and the seed is
 *  roughly a quarter of the database. */
const S_SAY: LessonSection = {
  type: 'practice', id: SAY, title: 'Say Your Half', frSub: 'À vous',
  layer: 'core', skill: 'speak', terms: ['streetForm', 'counterForm'],
  say: 'Your half of this exchange is the short half. Two openings, four questions, and the four ways to ask for the piece you missed.',
  itemIds: [
    T(224), T(225), T(226), T(227), T(228), T(229), T(230),
    T(231), T(232), T(233), T(234),
    REPAIR_IDS[0], REPAIR_IDS[1], REPAIR_IDS[2],
  ],
};

const S_REVIEW: LessonSection = {
  type: 'reviewDeck', id: REVIEW, title: 'Everything She Said', frSub: 'Révision',
  render: 'deck', layer: 'more', terms: ['move', 'joint'],
  say: 'Her half and yours, one last time.',
  cards: [
    { front: 'A direction is not a sentence. What is it?', back: 'A sequence of moves. GO, TURN, PASS, ARRIVE, and the joints between them.', say: 'Continuez tout droit, puis tournez à gauche.' },
    { front: 'The five joints', back: 'puis, ensuite, après, jusqu\'à, au bout de. And a comma, which has no sound.', say: 'Allez au bout de la rue, puis tournez à gauche.' },
    { front: 'Four verbs mean go. Which of them is a turn?', back: 'Prenez, but only when a street or an ordinal follows it. Prenez le boulevard is not a turn.', say: 'Prenez la deuxième à droite.' },
    { front: 'The move type with no verb of motion in it', back: 'ARRIVE. C\'est, vous verrez, ça sera. Easy to hear as an afterthought.', say: 'C\'est juste après la pharmacie.' },
    { front: 'The most-missed word in a direction', back: 'The ordinal. Short, unstressed, between two content words.', say: 'la deuxième à droite' },
    { front: 'Count two streets and turn. Which street is that?', back: 'The third. An ordinal and a cardinal land you one street apart.', say: 'Comptez deux rues, puis tournez à droite.' },
    { front: 'You stop a stranger in the street', back: 'Apology first, then the goal. Pardon, madame. Je cherche la gare.', say: 'Pardon, madame. Je cherche la gare, s\'il vous plaît.' },
    { front: 'You are at a ticket window', back: 'Greeting first, then the transaction, and no verb of demand.', say: 'Bonjour. Un aller-retour pour Lyon, s\'il vous plaît.' },
    { front: 'A train that is arriving, not leaving', back: 'en provenance de. À destination de is the one that leaves.', say: 'Le train en provenance de Marseille entre en gare.' },
    { front: 'How a station says a train is late', back: 'Aura un retard d\'environ vingt minutes. The delay is a noun.', say: 'Le train aura un retard d\'environ vingt minutes.' },
    { front: 'You held the route and lost one word', back: 'Ask about that word. C\'est la deuxième ou la troisième ?', say: 'C\'est la deuxième ou la troisième ?' },
    { front: 'You caught nothing at all', back: `Pardon ? One word, and it costs you nothing. ${Cap(unitRef('a2.07'))} owns the six.`, say: 'Pardon ?' },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — measure and close
 * ══════════════════════════════════════════════════════════════════════════ */

const S_PROGRESS: LessonSection = {
  type: 'progressCheck', id: PROGRESS, title: 'Where You Are', frSub: 'Le point',
  layer: 'core',
  say: 'Twenty-one missions. Here is what changed.',
  body: 'You came in able to ask where the station is and unable to use the answer. A direction is now four kinds of move joined by five small words, and you have heard the same four moves arrive with no joint at all. The exam that follows is weighted the way the situation is: two thirds of it is listening, because in this one situation your own turn is the easy half.',
  stats: [
    { k: 'Kinds of move', v: '4' },
    { k: 'Joints, plus the silent one', v: '5 and a comma' },
    { k: 'Moves in the longest chain', v: '4' },
    { k: 'Announcements in the corpus before this lesson', v: '0' },
    { k: 'Ways to ask again', v: `6, and they are ${unitRef('a2.07')}\'s` },
  ],
};

/* ── The quiz. Five rounds of six, thirty questions, passMark 70. ───────────
 *
 *  ONE quiz. A second `quiz` section is silently never rendered.
 *
 *  `listenChoose` AT 10 OF 30, AGAINST A BAND MAXIMUM OF 3, AND THERE ARE TWO
 *  INDEPENDENT REASONS IT SURVIVES.
 *
 *  1. The weight of this unit has to sit on reception, because the learner's
 *     turn is trivial and the reply is the exam. That is what makes it
 *     different from the other seven situational units.
 *  2. `listenChoose` is the only genuinely audio-only surface in the product.
 *     `ListenChooseCard` hides its `opts` behind `heard`, and its own source
 *     says why: showing the spellings first lets the eye answer instead of the
 *     ear. So the inversion would survive even if `hideLines` had never landed.
 *
 *  THE FOUR RULES THAT MAKE A listenChoose ITEM WORK HERE, ALL OBEYED:
 *
 *  1. Every one of the ten carries `say` explicitly. `ListenChooseCard` plays
 *     the question clip, then `say`, then the correct option. That third case
 *     is a poor last resort and where the options are English it speaks English
 *     at a listening exercise. a1.25 shipped exactly that defect.
 *  2. Every distractor occurs inside the `say` line, which is what a real TEF
 *     item does and is most of what makes an item feel like the exam rather
 *     than like a quiz. Where a distractor is a near-miss rather than a
 *     mention, it is the RIGHT ordinal with the WRONG side, or the right side
 *     with the wrong ordinal, both of which are audible in the clip.
 *  3. Every option is two to four words. `ListenChooseCard` is the tallest card
 *     in the quiz and once the explanation reveals, long options clip. Ten of
 *     these has never been rendered on a Pixel 6, so round 1 is the device
 *     check named in the build report.
 *  4. The replay divergence is SAID rather than papered over. TCF plays each CO
 *     recording once; this card allows unlimited replays and there is no cap
 *     field on a quiz question. `maxPlays` exists on `SectionAudio`, is
 *     resolved by `lessonAudio.logic.ts` and is consumed by no component, so
 *     none is authored. Round 1's `say` line tells the learner.
 *
 *  THE ANSWER FOLD DECIDED WHICH ITEMS COULD EXIST. `fold()`
 *  (`answer.logic.ts:32`) strips accents, case, punctuation, hyphens, BOTH
 *  apostrophes and ALL whitespace before comparing:
 *
 *    un aller-retour = un aller retour = unallerretour
 *    jusqu'au feu = jusquau feu
 *    à droite = a droite          l'arrêt = larret
 *    Tournez = tournez            au bout de = aubout de
 *
 *  QUESTIONS THIS UNIT WANTED AND COULD NOT WRITE:
 *
 *   - A typeIn testing the hyphen in aller-retour. It folds away. The typeIn
 *     survives because its difficulty is WORD CHOICE, aller-retour against
 *     aller simple, which does survive folding.
 *   - A typeIn testing the elision in jusqu'au. It folds away.
 *   - An errorSpot on arrêt against arret. Accents fold away.
 *
 *  BAND RULE APPLIED TO EVERY typeIn AND errorSpot BELOW: the expected answer
 *  and the most plausible wrong answer were folded and compared. The apply
 *  script and the test both assert `fold(answer) !== fold(distractor)` over
 *  every authored near-miss, so an item that tests nothing fails rather than
 *  ships.
 *
 *  ROUND 5 IS "WHEN IT GOES WRONG", deliberately echoing a1.30.l2's
 *  `x12-repair`: four items on the repair move and two on the state this unit
 *  adds, where you caught three moves of four.
 *
 *  Options are NEVER hand-randomised here: `LessonRich` permutes them at
 *  runtime. The MISSION drills above are hand-varied, because missions render
 *  authored order. */
const S_QUIZ: LessonSection = {
  type: 'quiz', id: QUIZ, title: 'The Exam', frSub: 'L\'examen',
  layer: 'core', terms: ['chain', 'ordinal', 'rung'],
  say: 'Five rounds of six. Ten of the thirty you cannot read, which is the highest proportion in this app and the lowest in the real thing.',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-follow',
      label: 'Follow it',
      say: 'Six you have to hear. Nothing is written down. You can replay each one; the real exam plays it once.',
      targets: ['err-lost-mid-chain', 'err-ordinal-dropped'],
      questions: [
        { format: 'listenChoose', ref: THREE, say: 'Passez devant la banque, traversez le pont, tournez à gauche au feu, c\'est après la pharmacie.', q: 'Listen. Where do you end up?', opts: ['At the bank', 'At the lights', 'On the bridge', 'After the chemist'], correct: 3, why: 'Three landmarks are named and only one of them is where you stop. The bank and the bridge are PASS moves and the lights are a TURN.' },
        { format: 'listenChoose', ref: FOUR, say: 'Prenez la deuxième à droite, longez le parc, traversez la place, c\'est au coin.', q: 'Listen. What do you do first?', opts: ['Take the second right', 'Cross the square', 'Follow the park', 'Go to the corner'], correct: 0, why: 'The first move is the turn. Everything after it is a landmark you pass, and the corner is where the route ends rather than where it starts.' },
        { format: 'listenChoose', ref: ORDINALS, say: 'Allez jusqu\'au carrefour, prenez la première à gauche, c\'est en face de la poste.', q: 'Listen. Which turning?', opts: ['The crossroads', 'The first right', 'The first left', 'Opposite the post office'], correct: 2, why: 'Première is said and gauche is said. The first right is the trap that gets the ordinal right and the side wrong, which is the commonest way to lose a street.' },
        { format: 'listenChoose', ref: THREE, say: 'Traversez le pont, longez le quai, puis tournez à droite avant la gare.', q: 'Listen. When do you turn right?', opts: ['On the bridge', 'On the quay', 'After the station', 'Before the station'], correct: 3, why: 'Avant, not après. Both would fit the sentence and only one was said, and the two are one syllable apart inside a chain that is already moving.' },
        { format: 'listenChoose', ref: FOUR, say: 'Sortez de la gare, tout droit, deuxième à gauche, c\'est au coin.', q: 'Listen. Which turning do you take?', opts: ['The first left', 'The first right', 'The second left', 'The second right'], correct: 2, why: 'Deuxième and gauche, and neither première nor droite was said at all. Three moves out of four here have no verb in them, which is what makes the ordinal do the work.' },
        { format: 'listenChoose', ref: FOUR, say: 'Continuez jusqu\'au rond-point, prenez la troisième sortie, longez le canal, c\'est là.', q: 'Listen. Which exit at the roundabout?', opts: ['The first', 'The second', 'The third', 'The fourth'], correct: 2, why: 'Troisième. At a roundabout the ordinal counts exits rather than streets, and getting it wrong there puts you on a whole different road.' },
      ],
    },
    {
      id: 'r2-hold',
      label: 'Hold the order',
      say: 'Six on sequence. The moves are the same in every option and only their order differs.',
      targets: ['err-order-scrambled', 'err-ordinal-dropped'],
      questions: [
        { format: 'listenChoose', ref: FOUR, say: 'Prenez la deuxième à droite, puis la première à gauche, c\'est en face.', q: 'Listen. The two turnings, in order?', opts: ['Second right, first left', 'First right, second left', 'Second left, first right', 'First left, second right'], correct: 0, why: 'Every option contains the same four words and only the order differs. This is the whole of the Owns in one item: knowing the vocabulary gets you nothing here.' },
        { format: 'listenChoose', ref: FOUR, say: 'Traversez la place, remontez la rue, prenez la première à droite, continuez.', q: 'Listen. What is the SECOND move?', opts: ['Cross the square', 'Go up the street', 'Take the first right', 'Carry on'], correct: 1, why: 'Four moves, no spoken joint at all. Only the commas separate them, and a comma is the joint you cannot hear.' },
        { format: 'listenChoose', ref: THREE, say: 'Tournez à gauche, allez jusqu\'au pont, traversez, c\'est sur votre droite.', q: 'Listen. Which side is it on when you arrive?', opts: ['On the bridge', 'Straight ahead', 'On your left', 'On your right'], correct: 3, why: 'Gauche is said first and droite is said last. Sur votre droite is a side of you rather than a direction to turn, and holding which came last is the whole task.' },
        { format: 'listenChoose', ref: ORDINALS, say: 'La première est un sens unique, prenez la deuxième.', q: 'Listen. Which street do you take?', opts: ['The second', 'The first', 'The one-way street', 'Neither of them'], correct: 0, why: 'The first is named only to be ruled out. A learner listening for an ordinal hears première first and stops listening, which is exactly what the sentence is built to punish.' },
        { format: 'mcq', ref: ORDINALS, q: 'In « Prenez la deuxième à droite », which word do learners lose?', opts: ['Prenez', 'la deuxième', 'à', 'droite'], correct: 1, why: 'It is short, unstressed, and it sits between a verb and a direction. Both of the words around it carry meaning you already know, so the ear skips to them.' },
        { format: 'mcq', ref: FOUR, q: 'You hold three moves but in the wrong order. What happens?', opts: ['You end up somewhere else entirely', 'You arrive anyway, more slowly', 'Nothing, order does not matter in French', 'You have to go back to the station'], correct: 0, why: 'A route\'s order is hard, not soft. Cross then turn and turn then cross put you on opposite sides of the same bridge, which is why the drill scores orderings.' },
      ],
    },
    {
      id: 'r3-station',
      label: 'The station voice',
      say: 'Six on announcements and on getting there. These you can read.',
      targets: ['err-announcement-shape', 'err-mode-preposition'],
      questions: [
        { format: 'mcq', ref: ANNONCE, q: '« Le train en provenance de Marseille » means the train is', opts: ['Leaving for Marseille', 'Cancelled', 'Delayed', 'Arriving from Marseille'], correct: 3, why: 'En provenance de is arriving and à destination de is leaving. Four syllables apart, opposite platforms, and both are fronted before you have understood anything else.' },
        { format: 'mcq', ref: ANNONCE, q: '« Le train à destination de Lyon partira voie douze. » Which platform?', opts: ['Two', 'Ten', 'Twelve', 'Twenty'], correct: 2, why: `Douze. ${Cap(unitRef('a1.27'))} owns the numbers and this is what they sound like read as a block at the end of a long official sentence, which is the only place they get hard.` },
        { format: 'mcq', ref: ANNONCE, q: '« Ce train ne dessert pas la gare de Massy. » What does it tell you?', opts: ['The train does not stop at Massy', 'The train stops at Massy', 'Massy is the end of the line', 'The train is running late'], correct: 0, why: 'The negative announcement is the expensive one and it has the same shape as every other line. Ne and pas are the two quietest words in it.' },
        { format: 'mcq', ref: ANNONCE, q: 'Which of these is NOT how a station announces a delay?', opts: ['Le train aura un retard d\'environ vingt minutes.', 'Le train est annoncé avec dix minutes de retard.', 'En raison d\'un incident, le trafic est interrompu.', 'Le train est un peu en retard, désolé.'], correct: 3, why: 'The first three nominalise the delay or give a reason, which is what makes them sound official. The fourth is what a person says, and a station never apologises in the first person.' },
        { format: 'errorSpot', ref: MODE, q: 'A closed vehicle. Fix this.', prompt: 'Je vais au travail à bus.', accept: ['Je vais au travail en bus.', 'je vais au travail en bus', 'en bus'], answer: 'Je vais au travail en bus.', why: 'You are inside a bus, so en. The corpus states the rule at fr.a1.deplacements.014 and this lesson quotes it rather than restating it. À bus and en bus do not fold together, so the preposition is genuinely being tested.' },
        { format: 'errorSpot', ref: MODE, q: 'You are on it, not in it. Fix this.', prompt: 'Il va à la gare en pied.', accept: ['Il va à la gare à pied.', 'il va a la gare a pied', 'à pied'], answer: 'Il va à la gare à pied.', why: 'À pied, because you are on your feet rather than inside anything. En pied and à pied fold to different strings, so this item discriminates; if they folded together it would have had to be an mcq.' },
      ],
    },
    {
      id: 'r4-ask',
      label: 'Your half',
      say: 'Six on the short half. Which opening, and how to ask.',
      targets: ['err-wrong-opening', 'err-overlong-answer'],
      questions: [
        { format: 'typeIn', ref: ASKEE, q: 'At a ticket window. Ask for a return to Lyon, starting with the greeting.', accept: ['Bonjour. Un aller-retour pour Lyon, s\'il vous plaît.', 'bonjour un aller retour pour lyon sil vous plait', 'Un aller-retour pour Lyon, s\'il vous plaît.', 'un aller retour pour lyon'], answer: 'Bonjour. Un aller-retour pour Lyon, s\'il vous plaît.', why: 'Greeting first, then the transaction, no verb of demand. Aller-retour and aller simple are the real test here; the hyphen is not, because it folds away and un aller retour is the same answer.' },
        { format: 'typeIn', ref: ASKEE, q: 'You stop somebody in the street. Say you are looking for the station.', accept: ['Pardon, madame. Je cherche la gare, s\'il vous plaît.', 'pardon madame je cherche la gare sil vous plait', 'Pardon, je cherche la gare.', 'je cherche la gare'], answer: 'Pardon, madame. Je cherche la gare, s\'il vous plaît.', why: 'Apology first, then the goal. Je cherche and un aller-retour do not fold together, so what is being tested is which shape you reached for and not how you spelled it.' },
        { format: 'typeIn', ref: GUICHET, q: 'He told you the platform and you missed it. Ask which one. « C\'est quel ... ? »', accept: ['C\'est quel quai, s\'il vous plaît ?', 'cest quel quai sil vous plait', 'C\'est quel quai ?', 'quel quai'], answer: 'C\'est quel quai, s\'il vous plaît ?', why: `Quel is ${unitRef('a1.20')}'s question word and the useful part is that this is what you ask AFTER he has already told you. It names one thing, so you get one thing back.` },
        { format: 'typeIn', ref: GUICHET, q: 'Ask what time the next train is. Six words: « Le prochain train ... ? »', accept: ['Le prochain train est à quelle heure ?', 'le prochain train est a quelle heure', 'à quelle heure', 'a quelle heure'], answer: 'Le prochain train est à quelle heure ?', why: 'Rising intonation on a full sentence. TCF caps a candidate who produces only one question form, which is why the scenario shows three ways to ask the same thing.' },
        { format: 'typeIn', ref: ASKEE, q: 'Ask for a single to Nantes.', accept: ['Un aller simple pour Nantes, s\'il vous plaît.', 'un aller simple pour nantes sil vous plait', 'Un aller simple pour Nantes.', 'un aller simple'], answer: 'Un aller simple pour Nantes, s\'il vous plaît.', why: 'Simple, not retour. The two fold to different strings, which is what makes this item worth setting: it tests the word you chose rather than the punctuation you used.' },
        { format: 'mcq', ref: ASKEE, q: 'You stop a stranger in the street. Which opening?', opts: ['Un aller-retour pour Lyon, s\'il vous plaît.', 'Pardon, madame. Je cherche la gare, s\'il vous plaît.', 'Bonjour. Je voudrais un billet.', 'Vous partez quand ?'], correct: 1, why: 'The first and third are counter forms and a passer-by does not sell tickets. The fourth is the agent\'s line, not yours. The failure is not rudeness, it is using the wrong shape.' },
      ],
    },
    {
      id: 'r5-wrong',
      label: 'When it goes wrong',
      say: `Six on asking again. The six rungs are ${unitRef('a2.07')}\'s; the last two are what this unit adds.`,
      targets: ['err-freeze', 'err-repair-too-wide'],
      questions: [
        { format: 'mcq', ref: REPAIR, q: 'You asked again and it came back at the same speed. Which rung now?', opts: ['Pardon ?', 'Vous pouvez répéter, s\'il vous plaît ?', 'Plus lentement, s\'il vous plaît.', 'Merci, au revoir.'], correct: 2, why: `Rungs 1 and 2 both just ask for a repeat, and she cannot fix a fault you have not named. Rung 3 is the first that says it was the speed, and ${unitRef('a2.07')} owns the repair ladder.` },
        { format: 'typeIn', ref: REPAIR, q: 'The cheapest thing you can say when you caught nothing at all. One word.', accept: ['Pardon', 'Pardon ?', 'pardon'], answer: 'Pardon ?', why: `${Cap(unitRef('a2.07'))} put it at rung 1 because it gives away nothing about why you missed it and because it is what a French speaker says without thinking about it.` },
        { format: 'typeIn', ref: REPAIR, q: 'You held the route and lost only the number of the street. Ask about it. « C\'est la ... ou la ... ? »', accept: ['C\'est la deuxième ou la troisième ?', 'cest la deuxieme ou la troisieme', 'la deuxième ou la troisième', 'deuxieme ou troisieme'], answer: 'C\'est la deuxième ou la troisième ?', why: `This is the state ${unitRef('a2.07')} does not cover, because in a restaurant you either caught it or you did not. Here you routinely catch three moves of four, and naming the missing one gets you four words back instead of fourteen.` },
        { format: 'errorSpot', ref: REPAIR, q: 'You caught everything except which side. This asks for all fourteen words again. Ask for the one you lost.', prompt: 'Vous pouvez répéter, s\'il vous plaît ?', accept: ['À gauche ou à droite, pardon ?', 'a gauche ou a droite pardon', 'à gauche ou à droite', 'a gauche ou a droite'], answer: 'À gauche ou à droite, pardon ?', why: `Rung 2 is not wrong, it is over-wide for this state. ${Cap(unitRef('a2.07'))} taught you to reach for the lowest rung that will actually fix the problem, and a targeted question is lower than any of the six.` },
        { format: 'errorSpot', ref: REPAIR, q: 'You held both moves and lost the joint between them. Ask about the joint.', prompt: 'Je n\'ai pas bien compris.', accept: ['Après le pont ou avant ?', 'apres le pont ou avant', 'après le pont ou avant'], answer: 'Après le pont ou avant ?', why: 'Saying you understood nothing is false and expensive: it gets the whole route back at the same speed. You understood almost all of it, and the joint is the one word worth asking for.' },
        { format: 'speak', ref: SAY, target: 'Tournez à gauche, puis tout droit.', ipa: '/tuʁ.ne a ɡoʃ pɥi tu dʁwa/', q: 'Say it back. Two moves and the joint between them.', why: 'Repeating a short chain back is what a French speaker does to confirm they have it, and it is scored generously here because the point is holding the order rather than the accent.' },
      ],
    },
  ],
};

const S_ROUNDUP: LessonSection = {
  type: 'roundup', id: ROUNDUP, title: 'What You Take With You', frSub: 'Le bilan',
  layer: 'core',
  say: 'Three things, and the first one is the whole lesson.',
  body: 'Find the joints, then take one move at a time. A spoken direction is not a sentence, it is a sequence, and every French direction is built from the same four kinds of move joined by the same five small words. Four of the verbs mean go, so the verb is not what tells you which move you just heard. The word that decides which street you take is usually the shortest one in the sentence. And when the route goes past you, you have almost never lost all of it: name the piece you lost, and you get that piece back rather than the whole thing again at the speed that beat you.',
  points: [
    REFRAME,
    'GO, TURN, PASS, ARRIVE. Four kinds of move, and ARRIVE is the one with no verb of motion in it.',
    'puis, ensuite, après, jusqu\'à, au bout de. And a comma, which does the same job and has no sound.',
    'The ordinal is the most-missed word in a direction: short, unstressed, and between two words you already know.',
    `Ask for the piece you lost, not for the sentence. ${Cap(unitRef('a2.07'))} owns the six ways to ask again.`,
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACTS, DRILLS, TRIGGERS AND THE LESSON
 * ══════════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  S_SCENE, S_GOALS, S_ASKEE,
  S_MOVES, S_JOINTS, S_VERBS, S_MODE,
  S_ONE, S_TWO, S_THREE, S_FOUR, S_ORDINALS, S_ERRORS,
  S_EAR, S_ANNONCE, S_REPAIR,
  S_DICTEE, S_GUICHET, S_SAY, S_REVIEW,
  S_PROGRESS, S_QUIZ, S_ROUNDUP,
];

const ACTS: LessonAct[] = [
  {
    id: 'act1', title: 'The answer you could not hold',
    sections: [SCENE, GOALS, ASKEE],
    milestone: 'You have watched a perfect question come back as fourteen words you could not use.',
    estScreens: 20,
    restPoints: [`${SCENE}/after-the-break`],
  },
  {
    id: 'act2', title: 'The frame takes the paradigm\'s slot',
    sections: [MOVES, JOINTS, VERBS, MODE],
    milestone: 'You know the four kinds of move and the five joints before you have heard a single chain.',
    estScreens: 28,
    restPoints: [`${JOINTS}/after-the-joints`],
  },
  {
    id: 'act3', title: 'One move, two, three, four',
    sections: [ONE, TWO, THREE, FOUR, ORDINALS, ERRORS],
    milestone: 'You can follow a four-move chain by ear and put the moves back in the order they arrived.',
    estScreens: 48,
    restPoints: [`${THREE}/after-the-unseen`, `${FOUR}/after-the-gate`],
  },
  {
    id: 'act4', title: 'The traps, and the way out',
    sections: [EAR, ANNONCE, REPAIR],
    milestone: 'You can hear deuxième against douzième, read a station announcement, and ask for one missing word.',
    estScreens: 26,
    restPoints: [`${ANNONCE}/after-the-annonces`],
  },
  {
    id: 'act5', title: 'Your half of it',
    sections: [DICTEE, GUICHET, SAY, REVIEW],
    milestone: 'You have written six instructions from the audio and run a ticket window end to end.',
    estScreens: 30,
    restPoints: [`${GUICHET}/after-the-window`],
  },
  {
    id: 'act6', title: 'Measure',
    sections: [PROGRESS, QUIZ, ROUNDUP],
    milestone: 'Thirty questions, and ten of them you cannot read.',
    estScreens: 24,
    // `checkpointSpacing` is 22 and act 6 is 24 screens, so an act with no rest
    // point leaves a 24-screen stretch and the density validator fails it. The
    // stop sits before the quiz rather than inside it.
    restPoints: [`${PROGRESS}/before-the-exam`],
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-moves', title: 'Four kinds of move', format: 'flashcard' as const,
    coach: 'Read the English. Say the French, and name which of the four kinds of move it is before you say it.',
    pairs: [
      ['Keep going straight', 'Continuez tout droit.'],
      ['Turn right at the lights', 'Tournez à droite au feu.'],
      ['Cross the square', 'Traversez la place.'],
      ['It is just after the chemist', 'C\'est juste après la pharmacie.'],
      ['Follow the edge of the park', 'Longez le parc.'],
    ],
  },
  {
    id: 'drill-joints', title: 'The five joints', format: 'flashcard' as const,
    coach: 'Say the whole chain, then say how many moves are in it. The second answer is the one that matters.',
    pairs: [
      ['Keep straight, then turn left', 'Continuez tout droit, puis tournez à gauche.'],
      ['Cross the bridge, then turn left', 'Traversez le pont, ensuite tournez à gauche.'],
      ['To the end of the street, then left', 'Allez au bout de la rue, puis tournez à gauche.'],
      ['To the crossroads, then turn right', 'Allez jusqu\'au carrefour, puis prenez à droite.'],
      ['Right after the bank, then straight on', 'Tournez à droite après la banque, puis continuez tout droit.'],
    ],
  },
  {
    id: 'drill-ask', title: 'Your half', format: 'flashcard' as const,
    coach: 'Two openings and four questions. Notice which one you would say to a person walking past.',
    pairs: [
      ['Excuse me, I am looking for the station', 'Pardon, madame. Je cherche la gare, s\'il vous plaît.'],
      ['Hello, a return to Lyon please', 'Bonjour. Un aller-retour pour Lyon, s\'il vous plaît.'],
      ['Which platform is it, please?', 'C\'est quel quai, s\'il vous plaît ?'],
      ['Is it the second or the third?', 'C\'est la deuxième ou la troisième ?'],
      ['Left or right, sorry?', 'À gauche ou à droite, pardon ?'],
    ],
  },
];

const ERROR_TRIGGERS = [
  {
    id: 'err-lost-mid-chain', drill: 'drill-joints',
    description: 'Translates the first move word by word and loses everything after it, because the second move started while the first was still being decoded.',
    detectOn: [THREE, FOUR, `${QUIZ}/r1-follow`],
  },
  {
    id: 'err-ordinal-dropped', drill: 'drill-moves',
    description: 'Hears the verb and the side and loses the ordinal between them, so the right kind of turn is made on the wrong street.',
    detectOn: [ORDINALS, EAR, `${QUIZ}/r1-follow`],
  },
  {
    id: 'err-order-scrambled', drill: 'drill-joints',
    description: 'Holds all the moves and loses their sequence, which lands the learner somewhere else entirely rather than merely late.',
    detectOn: [FOUR, `${QUIZ}/r2-hold`],
  },
  {
    id: 'err-announcement-shape', drill: 'drill-moves',
    description: 'Cannot tell an arriving train from a departing one, because both announcements are fronted and the two phrases that separate them come before any verb.',
    detectOn: [ANNONCE, `${QUIZ}/r3-station`],
  },
  {
    id: 'err-mode-preposition', drill: 'drill-moves',
    description: 'Uses à with a closed vehicle or en with an open one, because English has one word for both and neither preposition is stressed.',
    detectOn: [MODE, `${QUIZ}/r3-station`],
  },
  {
    id: 'err-wrong-opening', drill: 'drill-ask',
    description: 'Uses the counter form on a stranger or the street form at a counter, which reads as nonsense one way and as lost the other.',
    detectOn: [ASKEE, GUICHET, `${QUIZ}/r4-ask`],
  },
  {
    id: 'err-freeze', drill: 'drill-ask',
    description: 'Nods and walks rather than asking again. The exchange completes, nobody corrects it, and the habit survives because it never visibly fails.',
    detectOn: [SCENE, REPAIR, `${QUIZ}/r5-wrong`],
  },
  {
    id: 'err-repair-too-wide', drill: 'drill-ask',
    description: 'Asks for the whole route again when only one word was lost, and gets fourteen words back at the speed that defeated them the first time.',
    detectOn: [REPAIR, ORDINALS, `${QUIZ}/r5-wrong`],
  },
];

/** ONE ARRAY PER ACT. Every id here carries the `flashcard` drill, which is
 *  what makes a tranche release actually produce a card. Checked against
 *  Postgres by the apply script, never against the seed.
 *
 *  a2.07's six repair ids are released in ACT 4, where s16-repair sits. They
 *  are released HERE and not through `itemIds` on the cardDeck, because no
 *  renderer reads `itemIds` on a cardDeck. */
const DECK_TRANCHE: string[][] = [
  // act 1
  [T(224), T(225), T(226), ...IMPORTED.station],
  // act 2
  [T(135), T(136), T(137), T(138), T(139), T(140), T(141), T(142),
    T(143), T(144), T(145), T(146), T(147), T(148), T(149), T(150),
    T(235), T(236), T(237), T(238), MODE_RULE_ID, ...IMPORTED.directions,
    // The Quebec block sits in act 2, with the one card that names it. Both
    // authored rows carry {flashcard, review} and NO voiceflash, so neither can
    // reach a speak drill even if a later edit names it in one.
    Q(201), Q(202), ...IMPORTED.quebec],
  // act 3
  [T(151), T(153), T(155), T(157), T(159), T(161), T(162), T(164),
    T(165), T(167), T(169), T(170), T(172), T(173), T(175), T(177),
    T(179), T(180), T(181), T(182), T(183), T(185), T(186), T(188),
    T(191), T(192), T(193), T(194), T(195), T(196), T(197), T(198), T(199), T(200),
    EXISTING_CHAIN_ID],
  // act 4
  [T(201), T(202), T(203), T(204), T(205), T(206), T(207), T(208),
    T(209), T(210), T(211), T(212), T(213), T(214), T(215), T(216),
    ...REPAIR_IDS],
  // act 5
  [T(217), T(218), T(219), T(220), T(221), T(222), T(223),
    T(227), T(228), T(229), T(230), T(231), T(232), T(233), T(234),
    ...IMPORTED.transport],
  // act 6
  //
  // THE TWO PRE-EXISTING RECEIVED INSTRUCTIONS ARE NOT RELEASED HERE, AND THE
  // GUARD IS WHY. `fr.a1.deplacements.245` (Tournez à gauche après le pont.)
  // and `.246` (Allez tout droit, puis tournez à droite.) carry
  // {sentence,review} and NO `flashcard`, so a tranche release would produce
  // nothing at all. This build does not widen another lesson's drill arrays to
  // suit itself, which is the line a2.26 drew when the same guard dropped three
  // of its imports.
  //
  // They stay NAMED in the corpus file's `PRIOR_INSTRUCTIONS` as prior
  // exposure and are left exactly where they are. That is the pattern a2.07
  // set for the six generic repair rows it found already published: name them,
  // leave them, do not cite them.
  [...IMPORTED.landmarks],
];

/** Every id this lesson can put in front of a learner. The merge script pulls
 *  each of these out of Postgres and writes it into the seed, because the seed
 *  is a CUT: `transports-quotidiens` holds 415 published rows and 5 seeded ones,
 *  `la-ville` holds 347 and 0. Without that pull the imported cards render
 *  empty on device while every test passes against a corpus that has them. */
const ITEM_IDS: string[] = [
  ...new Set([
    ...DECK_TRANCHE.flat(),
    ...(S_SAY.itemIds ?? []),
    ...DICTEE_IDS,
    T(152), T(154), T(156), T(158), T(160), T(163),
    T(166), T(168), T(171), T(174), T(176), T(178),
    T(184), T(187), T(189), T(190),
  ]),
];

export const TRANSPORTS_LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  // `Lesson.seq` is the lesson's index WITHIN its unit, not its trail position.
  seq: 1,
  level: 'a2',
  // `missions.ts` draws `${level} · LEÇON ${unit.seq}` at render time and `tag`
  // is the stored fallback. a2.07 and a2.26 both shipped a bare slug here and
  // drew a lowercase word where all other lessons draw a formatted label; a2.26
  // fixed its own. This is the formatted form from the start.
  tag: 'A2 · LEÇON 26',
  version: 2,
  title: UNIT.title,
  intro: 'You already know how to ask where something is. This lesson is about the fourteen words that come back at you, and about holding them long enough to walk.',

  grammarIntroduced: [
    'That a spoken direction is a sequence of moves rather than a sentence, and that every French direction is built from four kinds of move: go along, change heading, pass a landmark, arrive',
    'The five joints that separate one move from the next, puis, ensuite, après, jusqu\'à and au bout de, and the fact that a comma does the same job with no sound at all',
    'Multi-step direction chains received at speed, climbing from one move to four, as reception rather than production',
    'Ordinals used inside a direction, la première, la deuxième and la troisième à droite, which no published row in the corpus carried before this lesson',
    'The public transport announcement as a genre: destination fronted, number read as a block, delay nominalised, and delivered faster than conversational speech',
    'The two openings of an information request, the street form and the counter form, as two shapes rather than as a politeness gradient, which belongs to a2.29',
    'en against à with transport modes, as APPLICATION of the preposition system a2.04, a1.21 and a1.22 already taught, with the rule quoted from a published corpus row rather than restated',
    'The targeted repair, C\'est la deuxième ou la troisième ?, for the state where three moves of four were held, which a2.07\'s six general rungs do not cover',
    'That the direction verbs are used here as whole forms and the mood they are in is named by nobody in this band, which a2.32 also does and neither unit cites the other for',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Trouvez les charnières, puis un geste à la fois.',
    minutes: 30,
    difficulty: 3,
    glyph: '🚉',
    screens: 176,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: [],
  deckTranche: DECK_TRANCHE,
  terms: TRANSPORT_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
  },
};

export const LESSON = TRANSPORTS_LESSON;
export { ACTS, SECTIONS, DECK_TRANCHE, ITEM_IDS, ERROR_TRIGGERS, DRILLS };
export const SAY_ID = SAY;
export const QUIZ_ID = QUIZ;
export const THREE_ID = THREE;
export const FOUR_ID = FOUR;
export const EAR_ID = EAR;
export const DICTEE_ID = DICTEE;
export const REPAIR_ID = REPAIR;
export const ANNONCE_ID = ANNONCE;
export const MODE_ID = MODE;
export const ASKEE_ID = ASKEE;
export const GUICHET_ID = GUICHET;
export const MOVES_ID = MOVES;
export const JOINTS_ID = JOINTS;
export const VERBS_ID = VERBS;
export const ORDINALS_ID = ORDINALS;
export const IMPORTED_IDS = IMPORTED;
export const CITED_UNITS = { PLACE_PREP_UNIT, A_PLACE_UNIT, ASK_UNIT, MONEY_UNIT, MODAL_UNIT, REPAIR_UNIT };
