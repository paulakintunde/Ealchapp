

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
import { unitRef } from './_unit-ref.ts';// a2.18.l1, « Prépositions de temps », seq 14 on the A2 trail.
//
// 24 sections, 6 acts, 30 questions, two stepped trapDrills and one reference
// sheet. Every French string on every screen comes from
// prepositions-temps-corpus.ts or from prepositions-temps-imported.ts and none
// is typed twice.
//
// ── WHAT THIS LESSON OWNS ────────────────────────────────────────────────
//
// THE TENSE EACH PREPOSITION FORCES. This is not five vocabulary items with a
// grid round them: every one of the five selects a shape of time, and getting
// the word right while getting the tense wrong is the error that actually
// happens. `depuis` plus the PRESENT is the heaviest single interference point
// an English speaker meets at this level, because English uses a perfect there
// and a learner who translates produces something that is not merely wrong but
// says the opposite about when.
//
// ── ACT WEIGHTS ──────────────────────────────────────────────────────────
//
//   the paradigm      act 1 s03, ONE section, and it is a tapTable
//   the Owns          act 2, FIVE sections, all of them depuis
//   the rest of it    acts 3 and 4, NINE sections
//
// Doctrine §B.5: if the act structure gives the paradigm more missions than the
// Owns, the wrong lesson got built. The paradigm here is one screen, because
// four fifths of it was already published as four consecutive cards.
//
// ── THE SEQUENCING DECISION, WHICH CHANGED THE SHAPE ─────────────────────
//
// The canDo says "how long ago", which needs the passé composé, which is a2.05
// at seq 16. Option 1 of the brief is taken: everything here is anchored to the
// present, `il y a` is receptive only, and ONE authored row holds a compound
// tense and is shown once and asked for nowhere. See SEQUENCING in the corpus
// header for the recommendation, which is to keep seq 14 and change the canDo.

import type {
  Lesson, LessonAct, LessonSection, ErrorTrigger, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  AGO_RULE, AUTHORED_IDS, A112_CLAIM, A204_DEFERRAL, A204_REFRAME, CLOCK_UNIT,
  DEPUIS_CLAIM, DEPUIS_WRONG, EN_DANS, EN_DANS_CLAIM, FUTURE_DEFERRAL,
  FUTURE_UNIT, GRID, GRID_CLAIM, IL_Y_A_PAIRS, ITEM_IMPORT_IDS, LESSON_ID,
  MONTH_UNIT, NO_EAR_CLAIM, PAIR_CLAIM, PAST_DEFERRAL, PAST_UNIT,
  PATTERN_CLAIM, PENDANT_DEPUIS, PLACE_UNIT, POUR_LINE, PREPOSITIONS_TEMPS,
  QUADRUPLE_IDS, REFRAME, SHEET_ID, THE_MOVE, UNIT, WHAT_FOLLOWS,
  WHAT_FOLLOWS_UNIT, gridRow, row,
} from './prepositions-temps-corpus.ts';
import {
  ALREADY_YOURS, ENGLISH_CLAIM, EVIDENCE_LINE, FIVE_LINE,
  PREPOSITIONS_TEMPS_TERMS,
} from './prepositions-temps-terms.ts';
import {
  impCard, importedEn, importedFr, rowCard, sub as impSub,
} from './prepositions-temps-imported.ts';

/* ─── Reading the authored rows ────────────────────────────────────────────
 *
 * The lesson NEVER types a French string that is also a corpus row. `fr(id)`
 * and `en(id)` read it, so a screen and the card the learner is scored on
 * cannot drift apart. a2.13 §6.2 shipped a grid that disagreed with its own
 * cards and every host gate was green.                                       */

const BY_ID = new Map(PREPOSITIONS_TEMPS.map((r) => [r.id, r]));

const fr = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`${unitRef('a2.18')}: ${id} is not an authored row.`);
  return r.fr;
};
const en = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`${unitRef('a2.18')}: ${id} is not an authored row.`);
  return r.en;
};
const bare = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`${unitRef('a2.18')}: ${id} is not an authored row.`);
  return r.respell!;
};
const sub = (id: string): string => `[${bare(id)}]`;
const noStop = (s: string): string => s.replace(/[.?!]\s*$/u, '');

/** A groupDrill item at `lg` for an AUTHORED row. MissionRich.tsx:439 draws
 *  `fr`, `ipa` and `note` and nothing else at this size, so the respelling and
 *  the gloss go in `note`. Ledger §a2.14-12. */
const authoredCard = (id: string) => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`${unitRef('a2.18')}: ${id} is not an authored row.`);
  return { fr: r.fr, ipa: r.ipa!, note: `[${r.respell}] ${r.en}` };
};

const A = (n: number) => `fr.a2.prepositions-essentielles.${n}`;

/* ─── Section ids, as LITERALS ─────────────────────────────────────────────
 *
 * Literals rather than reads off a const declared below, because
 * `export const X = SECTIONS[0].id` before SECTIONS is a temporal dead zone.  */

export const SCENE_SECTION_ID = 's01-scene';
export const GOALS_SECTION_ID = 's02-goals';
export const GRID_SECTION_ID = 's03-grid';
export const DEPUIS_SECTION_ID = 's04-depuis';
export const ENGLISH_SECTION_ID = 's05-english';
export const QUAND_SECTION_ID = 's06-quand';
export const TENSE_TRAP_SECTION_ID = 's07-tense';
export const PRODUCE_SECTION_ID = 's08-produce';
export const PENDANT_SECTION_ID = 's09-pendant';
export const PAIR_SECTION_ID = 's10-pair';
export const ERRORS_SECTION_ID = 's11-errors';
export const DANS_SECTION_ID = 's12-dans';
export const ILYA_SECTION_ID = 's13-ilya';
export const ILYA_TRAP_SECTION_ID = 's14-twice';
export const EN_SECTION_ID = 's15-en';
export const UNSEEN_SECTION_ID = 's16-unseen';
export const READING_SECTION_ID = 's17-reading';
export const SCENARIO_SECTION_ID = 's18-scenario';
export const DICTATION_SECTION_ID = 's19-dictation';
export const SPEAK_SECTION_ID = 's20-speak';
export const REVIEW_SECTION_ID = 's21-review';
export const PROGRESS_SECTION_ID = 's22-progress';
export const QUIZ_SECTION_ID = 's23-quiz';
export const ROUNDUP_SECTION_ID = 's24-roundup';

/* ─── The item lists the guards read ───────────────────────────────────────*/

const ITEM_IDS: string[] = [...AUTHORED_IDS, ...ITEM_IMPORT_IDS];

/** Every authored row whose `dicteeMode` is LETTERS, which is the only mode
 *  that tests a spelling. Derived rather than listed, so a row that stops
 *  qualifying cannot stay in the dictée.
 *
 *  SEVEN ROWS, AND FIVE OF THEM ARE BARE PHRASES. A duration alone costs twelve
 *  to fifteen letters, so the shortest complete sentence this lesson can build
 *  round one is seventeen and word mode would hand every real word over
 *  pre-spelled. The two sentences that DO fit are the trap pair, whose
 *  durations are two words rather than three. Corrections §4. */
const DICTEE_IDS: string[] = PREPOSITIONS_TEMPS
  .filter((r) => r.drills.includes('dictation'))
  .map((r) => r.id);

/** Spoken practice draws ONLY from rows carrying `voiceflash`. Every authored
 *  row carries it. THE RECEPTIVE ROW IS NOT HERE: A(174) holds a passé composé
 *  and a speak mission is a production surface. */
const SPEAK_IDS: string[] = [
  A(169), A(170), A(171), A(172), A(173),
  A(175), A(176), A(177), A(178), A(179), A(180),
  A(181), A(183), A(184), A(185),
  A(188), A(189),
  A(193), A(195), A(196), A(197),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SCENE
 *
 *  Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 *  could not finish. She asks the commonest question anybody asks a foreigner,
 *  he has the number and the noun, and what he does not have is the tense.
 *  Nobody corrects anything and nothing visibly goes wrong.
 * ═══════════════════════════════════════════════════════════════════════ */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A Thursday evening in Lyon, at a neighbour\'s table, four people and one bottle of wine. She turns to you halfway through the meal.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'La voisine',
    fr: fr(A(191)),
    en: en(A(191)),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-18-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Euh... j\'ai été ici... non... je suis... six mois.',
    en: 'Uh... I have been here... no... I am... six months.',
    stage: 'You have the number and you have the word for here. What stops you is the verb: English hands you a past tense, you reach for one, and it does not fit the sentence you are standing in.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'Four people are waiting and the answer is three words long. What comes out?',
    options: [
      {
        // ROW 179, NOT A SCENE ROW OF ITS OWN. The answer he did not give IS the
        // sentence the Owns act opens with, and reading the same id says so
        // rather than duplicating it. An earlier draft authored a second copy
        // and the merge's duplicate-fr check refused it.
        fr: noStop(fr(A(179))),
        respell: sub(A(179)),
        en: 'the present tense, which is the one this sentence wants',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: fr(A(192)),
        en: 'a number, and no sentence round it',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'She asks where you were before, and you are three sentences into a conversation instead of one number out of one.',
      breaks: 'She smiles, says « ah, d\'accord », and turns to the person on her left. Nothing went wrong and nothing happened either.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La voisine',
    fr: fr(A(193)),
    en: en(A(193)),
    stage: 'She says your sentence back to you, correctly, without noticing she has done it, and moves on. That is what makes it expensive: nobody corrected anything, so nothing was learned.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'The verb does not move',
    body: 'You did not stall on a word. You stalled on a tense, and the tense French wanted was the one you already had. English pushes you towards a past here and French will not go there.',
    wrong: {
      fr: DEPUIS_WRONG[0]!.wrong,
      ipa: '/ʒe a.bi.te i.si də.pɥi tʁwa ɑ̃/',
      respell: '[zhay a-bee-TAY ee-SEE duh-PWEE trwah-Zahⁿ]',
      en: 'the English route, and it says you moved out',
    },
    right: {
      fr: fr(A(170)),
      ipa: '/ʒa.bit i.si də.pɥi tʁwa.zɑ̃/',
      respell: sub(A(170)),
      en: en(A(170)),
    },
    coach: REFRAME,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the question she asked ───────────────────────────────────────*/

  {
    type: 'scene',
    id: SCENE_SECTION_ID,
    title: 'Six Months, No Sentence',
    frSub: 'Chez la voisine',
    render: 'screens',
    layer: 'core',
    setting: { place: 'A neighbour\'s table', city: 'Lyon', time: 'Thursday evening' },
    beats: SCENE_BEATS,
    closing: { text: REFRAME, size: 'md' },
    terms: ['stillRunning', 'presentNotPerfect'],
  },

  {
    type: 'goals',
    id: GOALS_SECTION_ID,
    // 27 characters, the house heading that 36 lessons in the seed ship.
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    goals: [
      { t: 'Say how long, in the present', s: DEPUIS_CLAIM },
      { t: 'Tell a stretch from a point', s: GRID_CLAIM },
      { t: 'Hear which job il y a is doing', s: AGO_RULE },
      { t: 'Say when something starts', s: ALREADY_YOURS },
    ],
  },

  {
    /* THE PARADIGM, AND IT IS ONE SCREEN.
       Five rows, three columns, and every cell is inside the ELEVEN characters
       a2.17 measured on a Pixel 6 for a three-column tapTable. The EXAMPLE is
       the tap detail's title rather than a fourth column: a2.04 measured a
       fourth column clipping inside a reference sheet, and the fix there and
       here is that the fourth thing goes underneath rather than beside.

       FOUR OF THE FIVE EXAMPLES ARE PUBLISHED CARDS, consecutive ids in one
       theme, one duration. The fifth is the row this lesson authored because
       nobody ever had. */
    type: 'tapTable',
    id: GRID_SECTION_ID,
    title: 'Five Words, Five Jobs',
    frSub: 'Cinq mots, cinq emplois',
    layer: 'core',
    say: `${GRID_CLAIM} Tap a row to hear the phrase. Four of the five say « une heure » and mean five different things about it.`,
    cols: ['The word', 'The tense', 'It measures'],
    rows: GRID.map((g) => ({
      cells: [g.prep, g.tense, g.measures],
      say: g.example,
      detail: {
        // THE DETAIL STANDS ON ITS OWN. An earlier draft appended PAST_DEFERRAL
        // to the il y a row and the density validator counted 59 words on a core
        // screen against a limit of 45. The row already names a2.05 and the
        // deferral is stated in full two acts later, where there is room.
        title: g.example,
        body: g.detail,
        say: g.example,
      },
    })),
    terms: ['stillRunning', 'presentNotPerfect', 'theTwoFors'],
  },

  /* ── Act 2: depuis keeps the present. THE OWNS, and the heaviest act. ────*/

  {
    type: 'examples',
    id: DEPUIS_SECTION_ID,
    title: 'Still Going, Still Present',
    frSub: 'Ça continue, donc au présent',
    layer: 'core',
    say: `${REFRAME} Six sentences and every verb in them is a present tense. Read the English underneath each one and notice that not one of the six matches.`,
    examples: [
      { fr: fr(A(170)), en: en(A(170)), note: `${sub(A(170))} You still live there, so the verb still lives there. English says "have lived" and moves the verb; French leaves it exactly where it was.` },
      { fr: fr(A(175)), en: en(A(175)), note: `${sub(A(175))} The same shape with somebody else in it. Six months is a length.` },
      { fr: fr(A(176)), en: en(A(176)), note: `${sub(A(176))} And a starting point instead of a length. Depuis takes both and the verb does not care which.` },
      { fr: fr(A(177)), en: en(A(177)), note: `${sub(A(177))} No person in it at all, so the rule cannot be about who is speaking. The rain has not stopped and neither has the verb.` },
      { fr: fr(A(179)), en: en(A(179)), note: `${sub(A(179))} Être in the present, which is the first verb you ever had. This is the sentence the table lost.` },
      { fr: importedFr('fr.a1.prepositions-essentielles.093'), en: importedEn('fr.a1.prepositions-essentielles.093'), note: `${impSub('fr.a1.prepositions-essentielles.093')} And the other word, for contrast, in the same present tense. The rain here starts and stops every night.` },
    ],
    terms: ['presentNotPerfect', 'stillRunning'],
  },

  {
    type: 'cardDeck',
    id: ENGLISH_SECTION_ID,
    title: 'Where English Misleads',
    frSub: 'Là où l’anglais trompe',
    layer: 'core',
    hint: 'Swipe. Five cards, and the last one is the measurement rather than an opinion.',
    cards: [
      { label: 'the English', head: 'I have lived here for three years.', body: 'A perfect tense, and it is the natural English. Every word of it is going to push you the wrong way in a second.' },
      { label: 'the wrong route', head: DEPUIS_WRONG[0]!.wrong, body: DEPUIS_WRONG[0]!.why },
      { label: 'the French', head: fr(A(170)), sub: sub(A(170)), body: `${en(A(170))} ${ENGLISH_CLAIM}` },
      { label: 'the word', head: importedFr('fr.sons.mots-essentiels.027'), sub: impSub('fr.sons.mots-essentiels.027'), body: 'One word, two jobs, and neither of them is a tense. It means since when and it means for how long, and the verb in front of it is present either way.' },
      { label: 'the evidence', head: 'four to one', body: EVIDENCE_LINE },
    ],
    terms: ['presentNotPerfect', 'theTwoFors'],
  },

  {
    type: 'examples',
    id: QUAND_SECTION_ID,
    title: 'Depuis Quand',
    frSub: 'Depuis quand',
    layer: 'core',
    say: 'This is the question you will be asked, in one of its two word orders, by somebody who has just found out you are not from here. Both orders are ordinary and the answer is the same present tense either way.',
    examples: [
      { fr: importedFr('fr.sons.questions.040'), en: importedEn('fr.sons.questions.040'), note: `${impSub('fr.sons.questions.040')} Two words, already a card, published years ago for a lesson about questions.` },
      { fr: fr(A(178)), en: en(A(178)), note: `${sub(A(178))} At the front, which is the written order and the one you will read.` },
      { fr: fr(A(194)), en: en(A(194)), note: `${sub(A(194))} And at the back, which is where a French speaker actually puts it in conversation.` },
      { fr: fr(A(179)), en: en(A(179)), note: `${sub(A(179))} The answer, in full, and it is a present tense because you are still here.` },
      { fr: fr(A(195)), en: en(A(195)), note: `${sub(A(195))} And the answer with no verb in it at all, which is what people say most of the time.` },
    ],
    terms: ['presentNotPerfect', 'stillRunning'],
  },

  {
    /* TRAP ONE: THE TENSE, NOT THE WORD.
       The learner picks depuis correctly and then puts the verb in a past
       tense, because that is what the English sentence they translated from
       had. This is the Owns made into a choice.

       THE STEPPED SHAPE. `lesson-contract.test.ts` requires every A2 trapDrill
       to walk rule > cards > audio > drill with `swipe`, a `say`, an audio spec
       and a GATED drill step, and `size` COMES OFF (ledger, the trapDrill sweep
       across seq 1..11: the stepped branch of MissionSection sizes off
       `steps?.length`). a2.03, a2.16 and a2.17 all shipped the stacked shape. */
    type: 'trapDrill',
    id: TENSE_TRAP_SECTION_ID,
    title: 'The Tense Depuis Wants',
    frSub: 'Le temps que depuis exige',
    layer: 'core',
    swipe: true,
    say: 'Four cards and then six to prove it. The word is right in every one of the six and the verb is the only thing being asked about.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-18-tense' },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'Still True, Still Present' },
      // 'FOUR CARDS', NOT 'THREE'. Found on a Pixel 6 and by nothing else: the
      // card set went from three to four when the English gloss came out of a
      // card's `fr`, and the step label stayed behind. The pager draws one dot
      // per card underneath the label, so the screen said THREE CARDS over four
      // dots. Nothing in the schema, the density validator or any guard in this
      // band compares a step label with the array it labels; the batch, the
      // merge and the test now do.
      { kind: 'cards', label: 'Four cards', title: 'One Sentence, Two Routes' },
      { kind: 'audio', label: 'Hear it', title: 'Wrong, Then Right' },
      { kind: 'drill', label: 'Prove it', title: 'Which Verb', gate: true },
    ],
    rule: {
      title: 'If it is still true, the verb is present',
      body: `${REFRAME} ${DEPUIS_CLAIM}`,
    },
    // EVERY CARD'S `fr` IS FRENCH, AND THE ENGLISH GOES IN THE `tip`.
    // The first draft put "I have lived here for three years." in a card's `fr`
    // to show the English source, and the batch caught it: the audio step plays
    // each card's `fr` at the section's speeds, through a French voice, so a
    // card cannot use that field to hold an English gloss. The ledger's
    // trapDrill sweep says the take must contain the cards' lines; the corollary
    // is that the cards' lines must all be sayable by the take's voice.
    cards: [
      { promptLabel: 'the wrong route', promptSound: DEPUIS_WRONG[0]!.wrong, fr: DEPUIS_WRONG[0]!.wrong, ipa: '/ʒe a.bi.te i.si də.pɥi tʁwa ɑ̃/', tip: 'Word for word from "I have lived here for three years", and it says the opposite about when. A listener hears that you moved out three years ago.' },
      { promptLabel: 'the French', promptSound: fr(A(170)), fr: fr(A(170)), ipa: '/ʒa.bit i.si də.pɥi tʁwa.zɑ̃/', tip: 'Present tense, and the three years are carried entirely by depuis. Nothing else in the sentence has to move.' },
      { promptLabel: 'the wrong route', promptSound: DEPUIS_WRONG[2]!.wrong, fr: DEPUIS_WRONG[2]!.wrong, ipa: '/il a ply də.pɥi sə ma.tɛ̃/', tip: DEPUIS_WRONG[2]!.why },
      { promptLabel: 'the French', promptSound: fr(A(177)), fr: fr(A(177)), ipa: '/il plø də.pɥi sə ma.tɛ̃/', tip: 'The same pair with the weather in it, and no person anywhere. The rule is about the sentence rather than about who is speaking.' },
    ],
    // Hand-randomised: MissionRich renders authored order exactly, so a correct
    // answer sitting at index 0 six times running gives itself away.
    drill: [
      { promptSay: fr(A(170)), opts: [DEPUIS_WRONG[0]!.wrong, fr(A(170)), "J'avais habité ici depuis trois ans."], correct: 1 },
      { promptSay: fr(A(175)), opts: [fr(A(175)), 'Elle a habité ici depuis six mois.', 'Elle habitait ici depuis six mois.'], correct: 0 },
      { promptSay: fr(A(177)), opts: ['Il a plu depuis ce matin.', 'Il pleuvait depuis ce matin.', fr(A(177))], correct: 2 },
      { promptSay: fr(A(176)), opts: ['On a travaillé ici depuis mars.', fr(A(176)), 'On travaillait ici depuis mars.'], correct: 1 },
      { promptSay: fr(A(179)), opts: [fr(A(179)), "J'ai été ici depuis six mois.", "J'étais ici depuis six mois."], correct: 0 },
      { promptSay: fr(A(194)), opts: ['Tu as travaillé ici depuis quand ?', 'Tu travaillais ici depuis quand ?', fr(A(194))], correct: 2 },
    ],
    terms: ['presentNotPerfect', 'stillRunning', 'theTwoFors'],
  },

  {
    /* PRODUCTION, IN THE FLOW. A groupDrill check is an mcq, so this is not a
       free-production surface (ledger §a2.15-6); what it does is make the
       learner assemble the sentence about themselves before choosing, which is
       the closest a mission gets. The typeIn questions in the quiz are where
       they actually produce it. */
    type: 'groupDrill',
    id: PRODUCE_SECTION_ID,
    title: 'Say It About Yourself',
    frSub: 'Parlez de vous',
    layer: 'core',
    size: 'lg',
    say: 'Four things that are true of you right now. Build each one out loud before you pick, and keep the verb where French keeps it.',
    groups: [
      {
        label: 'where you live',
        items: [authoredCard(A(170))],
        check: {
          q: 'You moved here two years ago and you are still here.',
          opts: ["J'ai habité ici depuis deux ans.", "J'habite ici depuis deux ans.", "J'habitais ici depuis deux ans."],
          correct: 1,
          why: 'Still here, so the present. The two years are entirely depuis\'s job.',
        },
      },
      {
        label: 'what you study',
        items: [authoredCard(A(175))],
        check: {
          q: 'You started French in March and you have not stopped.',
          opts: ["J'apprends le français depuis mars.", "J'ai appris le français depuis mars.", "J'apprenais le français depuis mars."],
          correct: 0,
          why: 'A starting point rather than a length, and the verb behaves exactly the same way.',
        },
      },
      {
        label: 'the weather',
        items: [authoredCard(A(177))],
        check: {
          q: 'It started raining this morning and it is still raining.',
          opts: ['Il a plu depuis ce matin.', 'Il pleuvait depuis ce matin.', fr(A(177))],
          correct: 2,
          why: 'The rain has not stopped, which is the whole reason you reached for depuis. A past tense throws that away.',
        },
      },
      {
        label: 'how long you waited',
        items: [authoredCard(A(182))],
        check: {
          q: 'You waited twenty minutes and then the bus came.',
          opts: ["J'attends pendant vingt minutes.", "J'ai attendu depuis vingt minutes.", "J'ai attendu pendant vingt minutes."],
          correct: 2,
          why: 'This one is finished, so it is pendant and not depuis, and a past tense is fine here. The word changed because the fact changed.',
        },
      },
    ],
    terms: ['stillRunning', 'theTwoFors', 'presentNotPerfect'],
  },

  /* ── Act 3: still going, or finished ─────────────────────────────────────*/

  {
    type: 'examples',
    id: PENDANT_SECTION_ID,
    title: 'Pendant Closes The Stretch',
    frSub: 'Pendant ferme la durée',
    layer: 'core',
    say: 'Pendant puts both ends on it. It ran, it stopped, and you are saying how wide it was. That works in any tense, which is why it is the easy one of the five.',
    examples: [
      { fr: importedFr('fr.sons.jours-et-mois.083'), en: importedEn('fr.sons.jours-et-mois.083'), note: `${impSub('fr.sons.jours-et-mois.083')} The phrase on its own, already a card, sitting one id along from the depuis version.` },
      { fr: fr(A(181)), en: en(A(181)), note: `${sub(A(181))} The same weather as two screens ago and the other word. Here the rain stops.` },
      { fr: fr(A(171)), en: en(A(171)), note: `${sub(A(171))} An hour with both ends on it, and it happens again tomorrow evening.` },
      { fr: importedFr('fr.sons.nasales.030'), en: importedEn('fr.sons.nasales.030'), note: `${impSub('fr.sons.nasales.030')} A song has a beginning and an end, so pendant is the only word that fits it.` },
      { fr: importedFr('fr.sons.nasales.039'), en: importedEn('fr.sons.nasales.039'), note: `${impSub('fr.sons.nasales.039')} And at the front of the sentence, which is the other position it takes.` },
    ],
    terms: ['theTwoFors', 'stillRunning'],
  },

  {
    type: 'cardDeck',
    id: PAIR_SECTION_ID,
    title: 'The Same For, Twice',
    frSub: 'Deux fois « for »',
    layer: 'core',
    hint: 'Swipe. Two published cards one id apart, then the same two hours said three ways.',
    cards: [
      impCard('fr.sons.jours-et-mois.082', 'still going', 'One hour, and you are still inside it. Somebody published this card and the next one on the same afternoon.'),
      impCard('fr.sons.jours-et-mois.083', 'finished', 'The same hour, out the other side. The English for both of these is the same three words.'),
      { label: 'still going', head: fr(A(183)), sub: sub(A(183)), body: `${en(A(183))} ${PENDANT_DEPUIS[0]!.why}` },
      { label: 'finished', head: fr(A(182)), sub: sub(A(182)), body: `${en(A(182))} Two hours with a start and an end on them.` },
      { label: 'how long it took', head: fr(A(185)), sub: sub(A(185)), body: `${en(A(185))} And a third answer about the same two hours, which is the word act four is about.` },
      { label: 'the rule', head: 'still going or finished', body: PAIR_CLAIM },
    ],
    terms: ['theTwoFors', 'howLongItTook'],
  },

  {
    /* `commonErrors` WANTS `swipe: true` OR IT DRAWS A BLANK SCREEN. a1.01
       mission 5 and sons.08 mission 22 both shipped without it. */
    type: 'commonErrors',
    id: ERRORS_SECTION_ID,
    title: 'The Six You Will Make',
    frSub: 'Les six erreurs',
    layer: 'core',
    swipe: true,
    size: 'lg',
    errors: [
      ...DEPUIS_WRONG.map((w) => ({ wrong: w.wrong, right: w.right, why: w.why })),
      {
        wrong: "J'habite ici pendant six mois.",
        right: fr(A(179)).replace('Je suis', "J'habite"),
        why: 'Pendant says the six months are over. If you still live there, the word is depuis and nothing else will do.',
      },
      {
        wrong: 'Je finis dans dix minutes le travail.',
        right: fr(A(197)).replace('Oui, je', 'Je'),
        why: 'Dans is when something starts and en is how long it takes. The job takes ten minutes; it does not begin in ten minutes.',
      },
      {
        wrong: 'Il y a une heure de retard il y a.',
        right: IL_Y_A_PAIRS[1]!.existence,
        why: 'One il y a per sentence. The three words are doing one of two jobs and never both at once.',
      },
    ],
    terms: ['theTwoFors', 'howLongItTook', 'measurementThenStop'],
  },

  /* ── Act 4: two points, measured from now, and one length ────────────────*/

  {
    type: 'examples',
    id: DANS_SECTION_ID,
    title: 'Dans Points Forward',
    frSub: 'Dans regarde devant',
    layer: 'core',
    say: `${gridRow('dans').detail} ${FUTURE_DEFERRAL}`,
    examples: [
      { fr: importedFr('fr.sons.jours-et-mois.080'), en: importedEn('fr.sons.jours-et-mois.080'), note: `${impSub('fr.sons.jours-et-mois.080')} The first of the four published cards, and the respelling was repaired to match the headword.` },
      { fr: fr(A(184)), en: en(A(184)), note: `${sub(A(184))} A point ahead. Nothing about it is a length.` },
      { fr: fr(A(172)), en: en(A(172)), note: `${sub(A(172))} And the sentence round it, in the present, about something that has not happened.` },
      { fr: fr(A(187)), en: en(A(187)), note: `${sub(A(187))} Anything on a timetable takes this word, and the verb stays present.` },
      { fr: fr(A(196)), en: en(A(196)), note: `${sub(A(196))} A question with it, which is what you will actually say over a meal.` },
    ],
    terms: ['pointAhead', 'stillRunning'],
  },

  {
    type: 'examples',
    id: ILYA_SECTION_ID,
    title: 'Il Y A Points Back',
    frSub: 'Il y a regarde derrière',
    layer: 'core',
    say: `${gridRow('il y a').detail} ${PAST_DEFERRAL}`,
    examples: [
      { fr: importedFr('fr.sons.jours-et-mois.081'), en: importedEn('fr.sons.jours-et-mois.081'), note: `${impSub('fr.sons.jours-et-mois.081')} Sitting between the dans card and the depuis card, published, and the only one of the three that needs a tense you do not have.` },
      { fr: fr(A(186)), en: en(A(186)), note: `${sub(A(186))} The phrase on its own, which needs no verb at all and is yours today.` },
      { fr: fr(A(174)), en: en(A(174)), note: `${sub(A(174))} READ THIS ONE AND MOVE ON. The verb in it is a tense from ${unitRef(PAST_UNIT)} and nothing in this lesson asks you to build one.` },
      { fr: importedFr('fr.sons.jours-et-mois.080'), en: importedEn('fr.sons.jours-et-mois.080'), note: `${impSub('fr.sons.jours-et-mois.080')} The other direction, for comparison. One hour forwards and one hour back, and the two phrases share the last two words.` },
    ],
    terms: ['aTenseComing', 'measurementThenStop'],
  },

  {
    /* TRAP TWO, AND IT IS THE ONE THE BRIEF IS BUILT ROUND.
       Doctrine §B.7's shape, second instance of four. a2.02 taught the first
       and named the pattern; this lesson QUOTES the name verbatim and credits
       the unit by id, and the recognition is worth more than the drill.

       The rule the lesson teaches is sharper than the brief's, because of a
       published counterexample: « il y a plusieurs jours fériés » is a TIME
       NOUN behind the phrase and it still means "there are". What separates
       them is whether the measurement is FINISHED. See AGO_RULE. */
    type: 'trapDrill',
    id: ILYA_TRAP_SECTION_ID,
    title: 'Il Y A, Twice',
    frSub: 'Il y a, deux fois',
    layer: 'core',
    swipe: true,
    say: `${PATTERN_CLAIM} Four cards and then six to prove it.`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-18-twice' },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'What Comes Next Decides' },
      { kind: 'cards', label: 'Four cards', title: 'A Thing Or A Measurement' },
      { kind: 'audio', label: 'Hear it', title: 'Same Three Words' },
      { kind: 'drill', label: 'Prove it', title: 'Which Job', gate: true },
    ],
    rule: {
      title: WHAT_FOLLOWS,
      body: `${PATTERN_CLAIM} ${AGO_RULE}`,
    },
    cards: [
      { promptLabel: 'there is', promptSound: fr(A(188)), fr: fr(A(188)), ipa: '/il i a œ̃ pʁɔ.blɛm/', tip: 'A thing behind it, so the three words say that the thing exists.' },
      { promptLabel: 'ago', promptSound: fr(A(189)), fr: fr(A(189)), ipa: '/il i a dø ʒuʁ/', tip: 'A measurement behind it and nothing after that, so the same three words say how far back.' },
      { promptLabel: 'ago', promptSound: importedFr('fr.sons.jours-et-mois.081'), fr: importedFr('fr.sons.jours-et-mois.081'), ipa: '/il i a yn œʁ/', tip: 'An hour, and then a full stop. An hour ago.' },
      { promptLabel: 'there is', promptSound: fr(A(190)), fr: fr(A(190)), ipa: '/il i a yn œʁ də ʁə.taʁ/', tip: 'The same four words as the card above and a fifth one. The hour is being described, so it is a thing again.' },
    ],
    drill: [
      { promptSay: fr(A(188)), opts: ['there is a problem', 'a problem ago'], correct: 0 },
      { promptSay: fr(A(189)), opts: ['there are two days', 'two days ago'], correct: 1 },
      { promptSay: fr(A(190)), opts: ['there is an hour of delay', 'an hour of delay ago'], correct: 0 },
      { promptSay: importedFr('fr.sons.jours-et-mois.081'), opts: ['there is an hour', 'an hour ago'], correct: 1 },
      { promptSay: 'Il y a trois chaises.', opts: ['there are three chairs', 'three chairs ago'], correct: 0 },
      { promptSay: fr(A(186)), opts: ['there are three days', 'three days ago'], correct: 1 },
    ],
    terms: ['whatComesNext', 'measurementThenStop', 'aTenseComing'],
  },

  {
    type: 'examples',
    id: EN_SECTION_ID,
    title: 'En Is How Long It Took',
    frSub: 'En, c’est la durée',
    layer: 'core',
    say: `${EN_DANS_CLAIM} ${A204_DEFERRAL}`,
    examples: [
      { fr: fr(A(169)), en: en(A(169)), note: `${sub(A(169))} THE ROW THAT DID NOT EXIST. The other four « une heure » cards were published years ago, side by side, and nobody ever wrote this one.` },
      { fr: fr(A(185)), en: en(A(185)), note: `${sub(A(185))} The same two hours that depuis and pendant both had, answering a third question.` },
      { fr: fr(A(173)), en: en(A(173)), note: `${sub(A(173))} A stopwatch rather than a clock. Nothing here is about when.` },
      { fr: fr(A(197)), en: en(A(197)), note: `${sub(A(197))} And the pair in one line: she asks about a point ahead and he answers with a length.` },
      { fr: importedFr('fr.sons.mots-essentiels.088'), en: 'in (how long something takes)', note: `${impSub('fr.sons.mots-essentiels.088')} The word itself. Its stored meaning in this app is a different en altogether, which is one more job for a two-letter word. ${Cap(unitRef(PLACE_UNIT))} owns the third.` },
    ],
    terms: ['howLongItTook', 'pointAhead'],
  },

  {
    /* THE GENERALISATION TEST, IN THE FLOW.
       Doctrine §B.1: a mission that makes the learner produce the answer for a
       situation the lesson never showed them has taught the system rather than
       the list. Every one of these five is a fact about the world with no card
       behind it, and the learner has to read the fact before reading the
       options. */
    type: 'groupDrill',
    id: UNSEEN_SECTION_ID,
    title: 'Five You Have Not Met',
    frSub: 'Cinq cas nouveaux',
    layer: 'core',
    size: 'lg',
    say: 'Five situations this lesson has not shown you, and you can answer all five without being told. Read what is true before you read the options.',
    groups: [
      {
        label: 'the shop is open',
        items: [authoredCard(A(176))],
        check: {
          q: 'It opened at eight and it is still open. Le magasin est ouvert ___ huit heures.',
          opts: ['pendant', 'depuis', 'il y a'],
          correct: 1,
          why: 'Still open, so the stretch is still running. Depuis, and the verb stays present.',
        },
      },
      {
        label: 'the meeting ran',
        items: [authoredCard(A(182))],
        check: {
          q: 'It started, it ran two hours, it ended. La réunion a duré ___ deux heures.',
          opts: ['depuis', 'dans', 'pendant'],
          correct: 2,
          why: 'Both ends on it, so pendant. This one is finished, so a past tense is fine here.',
        },
      },
      {
        label: 'the train leaves',
        items: [authoredCard(A(184))],
        check: {
          q: 'It is on the board and it goes at twenty past. Le train part ___ vingt minutes.',
          opts: ['dans', 'en', 'pendant'],
          correct: 0,
          why: 'A point ahead on a timetable. Dans, and the verb is present because French says it that way.',
        },
      },
      {
        label: 'the walk',
        items: [authoredCard(A(185))],
        check: {
          q: 'Door to door it is a twenty-minute walk. On y va ___ vingt minutes à pied.',
          opts: ['dans', 'depuis', 'en'],
          correct: 2,
          why: 'How long it takes, start to finish, so en. Dans would mean you set off in twenty minutes.',
        },
      },
      {
        label: 'the parcel',
        items: [authoredCard(A(189))],
        check: {
          q: 'It arrived on Monday and today is Thursday. Le colis est arrivé ___ trois jours.',
          opts: ['il y a', 'depuis', 'dans'],
          correct: 0,
          why: `A single point behind you, so il y a. This is the one that needs the tense from ${unitRef(PAST_UNIT)}, and the sentence has been built for you.`,
        },
      },
    ],
    terms: ['stillRunning', 'pointAhead', 'howLongItTook'],
  },

  /* ── Act 5: out loud ─────────────────────────────────────────────────────*/

  {
    type: 'reading',
    id: READING_SECTION_ID,
    title: 'Six Months In Lyon',
    frSub: 'Six mois à Lyon',
    layer: 'core',
    questionsInModal: true,
    // ONE BLOCK. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline
    // is silently discarded. PRESENT TENSE THROUGHOUT: no passé composé, no
    // futur proche, and the one `il y a` in it is the existence job.
    text: 'Je suis à Lyon depuis six mois. J’habite dans le quartier de la Guillotière, et je travaille dans une école depuis le mois de mars. Le matin, je prends le tram : il passe toutes les six minutes, alors je ne pars jamais plus de dix minutes avant le cours. Le soir, je lis pendant une heure, toujours à la même table du même café. Il y a un homme qui vient tous les jours à la même heure, et il ne parle à personne. Ma voisine me demande souvent depuis quand je suis ici. Je réponds « depuis six mois », et elle dit toujours la même chose : « Déjà ? »',
    glossary: [
      { word: 'le quartier', en: 'the neighbourhood', ipa: '/lə kaʁ.tje/', note: 'A part of a city. Nothing about it is this lesson.' },
      { word: 'toutes les', en: 'every', ipa: '/tut le/', note: 'How often, rather than how long. That is the frequency system and it belongs to another lesson.' },
      { word: 'alors', en: 'so', ipa: '/a.lɔʁ/', note: 'Joins a fact to what follows from it.' },
      { word: 'personne', en: 'nobody', ipa: '/pɛʁ.sɔn/', note: `From ${unitRef('a1.18')}, the negation lesson, and it is here so the passage has one sentence that is not about time.` },
      { word: 'déjà', en: 'already', ipa: '/de.ʒa/', note: 'What people say when six months sounds short to them and long to you.' },
    ],
    questions: [
      { q: 'Every verb in this passage is in the present tense, and two of the sentences are about things that started in the past. Which two, and what makes the present tense correct in both?', a: 'Being in Lyon since six months ago, and working at a school since March. Both are still true, so French keeps the verb in the present. English would use "have been" for both and move the verb; French does not.' },
      { q: 'The passage uses depuis three times and pendant once. What is different about the sentence with pendant in it?', a: 'The hour of reading has both ends on it. It starts, it finishes, and it happens again the next evening. Everything the passage uses depuis for is still going.' },
      { q: '« Il y a un homme qui vient tous les jours. » Which of the two jobs is il y a doing here, and how can you tell without reading the rest?', a: 'It exists. The word after it is un, which is an article and not a measurement, and that settles it before you get to the noun.' },
      { q: 'The neighbour asks « depuis quand ». What does that question tell you about the answer she is expecting?', a: 'That she expects the thing to still be true. Depuis quand can only be asked about something that is still running, so the answer will be in the present tense whatever it turns out to be.' },
    ],
    terms: ['presentNotPerfect', 'theTwoFors', 'measurementThenStop'],
  },

  {
    type: 'scenario',
    id: SCENARIO_SECTION_ID,
    title: 'The Same Question',
    frSub: 'La même question',
    layer: 'core',
    setting: 'The same table a month later, and this time she asks first. Every answer wants a decision about time that you have to make before the verb comes out.',
    turns: [
      {
        ai: fr(A(191)),
        en: en(A(191)),
        user: fr(A(193)),
        userEn: en(A(193)),
        // TWO ALTERNATIVES MINIMUM ON EVERY TURN AND A `userEn`.
        // `scenario.logic.test.ts` is a SEED-WIDE test requiring both, and
        // a2.03 shipped three turns with one alt each with every gate green.
        alts: [
          { fr: fr(A(170)), en: en(A(170)) },
          { fr: 'Depuis six mois, oui.', en: 'For six months, yes.' },
        ],
      },
      {
        ai: fr(A(194)),
        en: en(A(194)),
        user: fr(A(195)),
        userEn: en(A(195)),
        alts: [
          { fr: fr(A(176)), en: en(A(176)) },
          { fr: 'Depuis le mois de mars.', en: 'Since March.' },
        ],
      },
      {
        ai: 'Et le soir, tu fais quoi ?',
        en: 'And in the evening, what do you do?',
        user: fr(A(171)),
        userEn: en(A(171)),
        alts: [
          { fr: 'Je lis pendant deux heures.', en: 'I read for two hours.' },
          { fr: 'Je travaille pendant une heure.', en: 'I work for an hour.' },
        ],
      },
      {
        ai: fr(A(196)),
        en: en(A(196)),
        user: fr(A(197)),
        userEn: en(A(197)),
        alts: [
          { fr: fr(A(172)), en: en(A(172)) },
          { fr: 'Oui, je finis en deux heures.', en: 'Yes, I finish in two hours.' },
        ],
      },
      {
        ai: 'Il pleut encore ?',
        en: 'Is it still raining?',
        user: fr(A(177)),
        userEn: en(A(177)),
        alts: [
          { fr: fr(A(181)), en: en(A(181)) },
          { fr: 'Oui, depuis ce matin.', en: 'Yes, since this morning.' },
        ],
      },
      {
        ai: 'Le film commence quand ?',
        en: 'When does the film start?',
        user: fr(A(187)),
        userEn: en(A(187)),
        alts: [
          { fr: fr(A(184)), en: en(A(184)) },
          { fr: 'Dans une heure.', en: 'In an hour.' },
        ],
      },
    ],
    terms: ['presentNotPerfect', 'theTwoFors', 'pointAhead'],
  },

  {
    type: 'dictation',
    id: DICTATION_SECTION_ID,
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    // Every row here is in LETTERS mode through the REAL `dicteeMode`, checked
    // in the batch, the merge and the test. Word mode hands each real word over
    // pre-spelled, which for a lesson whose subject is a small word in front of
    // a duration would hand over the answer. Corrections §4.
    //
    // FIVE OF THE SEVEN ARE BARE PHRASES, because a duration alone costs twelve
    // to fifteen letters and the shortest complete sentence this lesson can
    // build round one is seventeen. The two that ARE sentences are the trap
    // pair, whose durations are two words rather than three.
    itemIds: DICTEE_IDS,
    say: 'Seven lines, and five of them are the small word with a length behind it and nothing else. The last two are the trap: same three words at the front, and one word at the end decides what they mean.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], maxPlays: 3, recordingId: 'rec-a2-18-dictee' },
    terms: ['stillRunning', 'measurementThenStop'],
  },

  {
    type: 'practice',
    id: SPEAK_SECTION_ID,
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    // `speak`, NOT `write`. `practice` with skill 'write' draws no writing
    // surface at all. Every id here is an AUTHORED row and every authored row
    // carries `voiceflash`. THE RECEPTIVE ROW IS DELIBERATELY ABSENT: it holds
    // a passé composé and a speak mission is a production surface.
    skill: 'speak',
    itemIds: SPEAK_IDS,
    terms: ['presentNotPerfect', 'stillRunning'],
  },

  {
    type: 'reviewDeck',
    id: REVIEW_SECTION_ID,
    title: 'The Whole Thing',
    // NOT « Tout, en un paquet », which is a2.04's own reviewDeck subtitle and
    // which PLACE_SHAPE caught on the first dry run: `en` plus an article plus a
    // noun is the place sense whatever the noun is, and this one is a packet.
    // The guard is right and the subtitle was rewritten.
    frSub: 'Tout, d’un coup',
    layer: 'core',
    cards: [
      ...GRID.map((g) => ({
        front: `${g.measures} · which word?`,
        back: `${g.prep} · ${g.example} · ${g.tense}`,
        say: g.example,
      })),
      { front: 'Why is « J\'habite ici depuis trois ans » a present tense?', back: DEPUIS_CLAIM, say: fr(A(170)) },
      { front: 'depuis or pendant, and how do you decide?', back: PAIR_CLAIM, say: fr(A(183)) },
      { front: 'dans or en?', back: EN_DANS_CLAIM, say: fr(A(185)) },
      { front: 'When does « il y a » mean ago?', back: AGO_RULE, say: fr(A(189)) },
      { front: 'Which of the five can you not produce yet, and why?', back: `Il y a for ago, because it needs a past tense and that is ${unitRef(PAST_UNIT)}. The other four you can say today.`, say: fr(A(186)) },
    ],
  },

  /* ── Act 6: prove it ─────────────────────────────────────────────────────*/

  {
    type: 'progressCheck',
    id: PROGRESS_SECTION_ID,
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: `${REFRAME} The exam has five rounds. Four of the five words you can use in a sentence today; the fifth you will recognise when somebody says it, and you will be able to say it two lessons from now.`,
    stats: [
      { k: 'Time words', v: String(GRID.length) },
      { k: 'You can produce', v: `${GRID.filter((g) => g.producible).length} of ${GRID.length}. Il y a waits for ${unitRef(PAST_UNIT)}.` },
      { k: 'New words to learn', v: '0. You had all five already.' },
      { k: 'Asked by ear', v: NO_EAR_CLAIM },
    ],
  },

  {
    type: 'quiz',
    id: QUIZ_SECTION_ID,
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Five rounds of six. Miss too many in a round and you get a drill before the next one starts.',
    rounds: [
      {
        id: 'r1-which-word',
        label: 'Which word',
        // Round targets are ordered deliberately. drillForRound returns the
        // FIRST target that has a drill and then stops, so the first name here
        // is what a failing learner actually gets, and every round leads on a
        // DIFFERENT trigger. That is what makes all five drills reachable.
        targets: ['err-wrong-word', 'err-pendant-for-depuis'],
        say: 'Six on the sort. The situation is in every question, because the situation is what decides it.',
        questions: [
          {
            q: 'You moved here in March and you are still here. Je suis ici ___ mars.',
            format: 'mcq',
            opts: ['pendant', 'il y a', 'depuis', 'dans'],
            correct: 2,
            why: `Still here, so the stretch is still running. ${REFRAME}`,
            ref: GRID_SECTION_ID,
          },
          {
            q: 'The bus goes at ten past and it is ten to. Le bus part ___ vingt minutes.',
            format: 'mcq',
            opts: ['dans', 'en', 'depuis', 'pendant'],
            correct: 0,
            why: 'A point ahead of you on a timetable, so dans. The verb stays in the present and that is correct French.',
            ref: DANS_SECTION_ID,
          },
          {
            q: 'The walk takes twenty minutes door to door. On y va ___ vingt minutes.',
            format: 'mcq',
            opts: ['depuis', 'dans', 'pendant', 'en'],
            correct: 3,
            why: EN_DANS_CLAIM,
            ref: EN_SECTION_ID,
          },
          {
            q: 'Il pleut ___ ce matin.   (and it has not stopped)',
            format: 'typeIn',
            accept: ['depuis'],
            answer: 'depuis',
            why: 'Still raining, so the stretch is still open. Pendant would say it stopped.',
            ref: DEPUIS_SECTION_ID,
          },
          {
            q: 'Je lis ___ une heure chaque soir.   (an hour, start to finish)',
            format: 'typeIn',
            accept: ['pendant'],
            answer: 'pendant',
            why: 'Both ends on it, and it happens again tomorrow. That is pendant.',
            ref: PENDANT_SECTION_ID,
          },
          {
            q: 'Fix this. She is still at that job.',
            format: 'errorSpot',
            prompt: 'Elle travaille ici pendant six mois.',
            accept: ['Elle travaille ici depuis six mois.', 'Elle travaille ici depuis six mois', 'depuis six mois'],
            answer: 'Elle travaille ici depuis six mois.',
            why: 'Pendant closes the stretch and she is still inside it. The verb was already right.',
            ref: PAIR_SECTION_ID,
          },
        ],
      },
      {
        id: 'r2-the-tense',
        label: 'The tense depuis wants',
        targets: ['err-depuis-past', 'err-wrong-word'],
        say: 'Six on the Owns, and the word is already right in every one of them. What is being asked about is the verb.',
        questions: [
          {
            q: 'I have lived here for three years.',
            format: 'typeIn',
            accept: [fr(A(170)), "J'habite ici depuis trois ans", 'Jhabite ici depuis trois ans'],
            answer: fr(A(170)),
            why: `${DEPUIS_CLAIM} The English perfect has no French counterpart in this sentence.`,
            ref: DEPUIS_SECTION_ID,
          },
          {
            q: 'It has been raining since this morning.',
            format: 'typeIn',
            accept: [fr(A(177)), 'Il pleut depuis ce matin'],
            answer: fr(A(177)),
            why: 'The rain has not stopped, so the verb has not moved either.',
            ref: DEPUIS_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: DEPUIS_WRONG[1]!.wrong,
            accept: [DEPUIS_WRONG[1]!.right, 'Elle travaille ici depuis mars'],
            answer: DEPUIS_WRONG[1]!.right,
            why: DEPUIS_WRONG[1]!.why,
            ref: TENSE_TRAP_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: DEPUIS_WRONG[2]!.wrong,
            accept: [DEPUIS_WRONG[2]!.right, 'Il pleut depuis ce matin'],
            answer: DEPUIS_WRONG[2]!.right,
            why: DEPUIS_WRONG[2]!.why,
            ref: TENSE_TRAP_SECTION_ID,
          },
          {
            q: 'Why does French use a present tense after depuis?',
            format: 'mcq',
            opts: [
              'Because depuis is always about the future',
              'Because French has no perfect tense',
              'Because the past tense comes later in the course',
              'Because the thing is still true when you say it',
            ],
            correct: 3,
            why: `${REFRAME} It is a fact about the world rather than a rule about grammar, which is why it is easy to run mid-sentence.`,
            ref: TENSE_TRAP_SECTION_ID,
          },
          {
            q: 'How long have you been here?',
            format: 'typeIn',
            accept: [fr(A(178)), 'Depuis quand es-tu ici', 'Tu es ici depuis quand ?', 'Tu es ici depuis quand'],
            answer: fr(A(178)),
            why: 'Two words at the front or two at the back, and either is ordinary. The verb is present in both.',
            ref: QUAND_SECTION_ID,
          },
        ],
      },
      {
        id: 'r3-still-or-finished',
        label: 'Still going, or finished',
        targets: ['err-pendant-for-depuis', 'err-depuis-past'],
        say: 'Six on the pair. Both of these come out as "for" in English and the English is no help at all.',
        questions: [
          {
            q: 'Which of these means the stretch is finished?',
            format: 'mcq',
            opts: [fr(A(183)), fr(A(182)), 'depuis une heure', 'depuis mars'],
            correct: 1,
            why: PAIR_CLAIM,
            ref: PAIR_SECTION_ID,
          },
          {
            q: 'We waited an hour at the station and then it came.',
            format: 'mcq',
            opts: [
              'Nous attendons depuis une heure.',
              'Nous attendons pendant une heure.',
              'Nous avons attendu pendant une heure.',
              'Nous avons attendu depuis une heure.',
            ],
            correct: 2,
            why: 'Finished, so pendant, and a past tense is fine with it. Depuis would say you are still standing there.',
            ref: PENDANT_SECTION_ID,
          },
          {
            q: 'J’étudie le français ___ deux ans.   (and I still am)',
            format: 'typeIn',
            accept: ['depuis'],
            answer: 'depuis',
            why: 'Still going, so the open one. The verb is already in the present where it belongs.',
            ref: DEPUIS_SECTION_ID,
          },
          {
            q: 'Elle a dormi ___ huit heures.   (she woke up)',
            format: 'typeIn',
            accept: ['pendant'],
            answer: 'pendant',
            why: 'Both ends on it, so pendant. She is awake now, so the stretch is closed.',
            ref: PENDANT_SECTION_ID,
          },
          {
            q: 'Fix this. He is still asleep.',
            format: 'errorSpot',
            prompt: 'Il dort pendant huit heures.',
            accept: ['Il dort depuis huit heures.', 'Il dort depuis huit heures', 'depuis huit heures'],
            answer: 'Il dort depuis huit heures.',
            why: 'Still asleep, so the stretch is still open, so depuis. The verb was already right and only the word in front of the number is wrong.',
            ref: PAIR_SECTION_ID,
          },
          {
            q: 'Which one of these can go with a past tense without any trouble?',
            format: 'mcq',
            opts: ['depuis', 'pendant', 'neither of them', 'both of them equally'],
            correct: 1,
            why: `Pendant takes any tense because the stretch is closed. ${EVIDENCE_LINE}`,
            ref: PAIR_SECTION_ID,
          },
        ],
      },
      {
        id: 'r4-il-y-a',
        label: 'Il y a, twice',
        targets: ['err-ilya-job', 'err-wrong-word'],
        say: `Six on the shape ${unitRef(WHAT_FOLLOWS_UNIT)} named. The three words never change and the word after them always does.`,
        questions: [
          {
            q: fr(A(188)),
            format: 'mcq',
            opts: ['A problem ago.', 'There is a problem.', 'There was a problem.', 'A problem is coming.'],
            correct: 1,
            why: 'A thing behind it, so it exists. Nothing is being measured.',
            ref: ILYA_TRAP_SECTION_ID,
          },
          {
            q: fr(A(189)),
            format: 'mcq',
            opts: ['There are two days.', 'In two days.', 'Two days ago.', 'For two days.'],
            correct: 2,
            why: AGO_RULE,
            ref: ILYA_TRAP_SECTION_ID,
          },
          {
            q: fr(A(190)),
            format: 'mcq',
            opts: ['There is an hour of delay.', 'An hour of delay ago.', 'The delay was an hour ago.', 'In an hour there is a delay.'],
            correct: 0,
            why: 'The hour is being described, so it has turned back into a thing. This is why the rule is about the measurement being finished rather than about the noun.',
            ref: ILYA_TRAP_SECTION_ID,
          },
          {
            q: 'Which of these tells you which job il y a is doing?',
            format: 'mcq',
            opts: [
              'The tense of the verb before it',
              'Whether the sentence is a question',
              'How the phrase is pronounced',
              'The word straight after it',
            ],
            correct: 3,
            why: `${Cap(unitRef(WHAT_FOLLOWS_UNIT))} named this pattern ${WHAT_FOLLOWS}, on venir de, and it is the same job here.`,
            ref: ILYA_TRAP_SECTION_ID,
          },
          {
            q: 'Listen. Which one did you hear?',
            format: 'listenChoose',
            // THE ONE EAR QUESTION IN THE LESSON, and the two options differ in
            // every syllable after the first three words. NO_EAR_QUESTION holds
            // the pairs that may NOT be offered, and `dans une heure` against
            // `en une heure` is on it: both pull an n across into the vowel.
            say: fr(A(189)),
            opts: [fr(A(188)), fr(A(189))],
            correct: 1,
            why: 'Two days rather than a problem, and the two are nothing alike to listen to. What is hard about this phrase is never the sound.',
            ref: ILYA_TRAP_SECTION_ID,
          },
          {
            q: 'Fix this. You mean that there is a problem.',
            format: 'errorSpot',
            prompt: 'Il y a un problème il y a.',
            accept: [fr(A(188)), 'Il y a un problème'],
            answer: fr(A(188)),
            why: 'One il y a per sentence. The three words do one of two jobs and never both at once.',
            ref: ERRORS_SECTION_ID,
          },
        ],
      },
      {
        id: 'r5-ahead-and-back',
        label: 'Ahead, back, how long',
        targets: ['err-dans-for-en', 'err-ilya-job'],
        say: 'Six on the three that are not about a stretch. Two of them are points and one of them is a length.',
        questions: [
          {
            q: 'Je pars ___ dix minutes.   (that is when I set off)',
            format: 'typeIn',
            accept: ['dans'],
            answer: 'dans',
            why: 'A point ahead of you, so dans. The present tense in front of it is doing future work and that is ordinary French.',
            ref: DANS_SECTION_ID,
          },
          {
            q: 'Je finis ___ dix minutes.   (that is how long the job takes)',
            format: 'typeIn',
            accept: ['en'],
            answer: 'en',
            why: EN_DANS_CLAIM,
            ref: EN_SECTION_ID,
          },
          {
            q: 'Which of these is a length rather than a moment?',
            format: 'mcq',
            opts: [fr(A(184)), fr(A(185)), fr(A(186)), 'dans une heure'],
            correct: 1,
            why: 'En is the only one of the five that answers how long rather than when. The other three all point at a moment.',
            ref: EN_SECTION_ID,
          },
          {
            q: 'The film starts in an hour. Le film commence ___ une heure.',
            format: 'mcq',
            opts: ['en', 'depuis', 'dans', 'il y a'],
            correct: 2,
            why: 'A point on a timetable ahead of you. En would mean the film takes an hour to start, which is not a thing.',
            ref: DANS_SECTION_ID,
          },
          {
            q: 'Fix this. The tram journey takes ten minutes.',
            format: 'errorSpot',
            prompt: 'Le tramway traverse la ville dans dix minutes.',
            accept: ['Le tramway traverse la ville en dix minutes.', 'Le tramway traverse la ville en dix minutes', 'en dix minutes'],
            answer: 'Le tramway traverse la ville en dix minutes.',
            why: 'How long the journey takes, so en. Dans would say the tram sets off in ten minutes.',
            ref: EN_SECTION_ID,
          },
          {
            q: 'You want to say something happened three days back. Which word, and what else do you need?',
            format: 'mcq',
            opts: [
              'Il y a, and a past tense you meet in two lessons',
              'Dans, and nothing else',
              'Depuis, and a present tense',
              'En, and a past tense',
            ],
            correct: 0,
            why: PAST_DEFERRAL,
            ref: ILYA_SECTION_ID,
          },
        ],
      },
    ],
    terms: ['stillRunning', 'presentNotPerfect', 'whatComesNext'],
  },

  {
    type: 'roundup',
    id: ROUNDUP_SECTION_ID,
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    layer: 'core',
    body: `${THE_MOVE} ${ALREADY_YOURS}`,
    // `points` IS A LIST OF STRINGS, not of {t,s} objects. `goals` takes the
    // pair shape and `roundup` does not, and validateLesson says so by name.
    //
    // THE SIXTH WORD IS NOT A ROUNDUP POINT. A roundup lists what the learner
    // can now do and `pour` is not one of those things, so naming it here would
    // imply it was taught. The one line about it lives in the sheet, which is
    // where something you will meet and have not been taught belongs. Found by
    // the guard counting two occurrences of the shape.
    points: [
      `${FIVE_LINE}. ${GRID_CLAIM}`,
      `${REFRAME} ${DEPUIS_CLAIM}`,
      PAIR_CLAIM,
      `${PATTERN_CLAIM} ${AGO_RULE}`,
      EN_DANS_CLAIM,
      `${PAST_DEFERRAL} ${FUTURE_DEFERRAL}`,
      `${Cap(unitRef(CLOCK_UNIT))} gave you the clock and ${unitRef(MONTH_UNIT)} gave you the calendar. ${Cap(unitRef(PLACE_UNIT))} gave you en and dans in front of a place yesterday, and its own line was: ${A204_REFRAME}`,
    ],
    sheetId: SHEET_ID,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACTS
 * ═══════════════════════════════════════════════════════════════════════ */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The question she asked',
    sections: [SCENE_SECTION_ID, GOALS_SECTION_ID, GRID_SECTION_ID],
    milestone: 'You know which of five words a situation wants, and you know it is the situation that decides rather than the English.',
    estScreens: 20,
    restPoints: [`${SCENE_SECTION_ID}/after-break`],
  },
  {
    id: 'act2',
    title: 'Depuis keeps the present',
    sections: [DEPUIS_SECTION_ID, ENGLISH_SECTION_ID, QUAND_SECTION_ID, TENSE_TRAP_SECTION_ID, PRODUCE_SECTION_ID],
    milestone: 'You can answer how long you have been somewhere, in the present tense, without the English pulling the verb out from under you.',
    estScreens: 46,
    restPoints: [`${ENGLISH_SECTION_ID}/after`, `${TENSE_TRAP_SECTION_ID}/after`],
  },
  {
    id: 'act3',
    title: 'Still going, or finished',
    sections: [PENDANT_SECTION_ID, PAIR_SECTION_ID, ERRORS_SECTION_ID],
    milestone: 'You can tell a stretch that is still running from one that has both ends on it, and you pick the word off that rather than off the English.',
    estScreens: 28,
    restPoints: [`${PAIR_SECTION_ID}/after`],
  },
  {
    id: 'act4',
    title: 'Two points and a length',
    sections: [DANS_SECTION_ID, ILYA_SECTION_ID, ILYA_TRAP_SECTION_ID, EN_SECTION_ID, UNSEEN_SECTION_ID],
    milestone: 'You can point forwards and recognise a point backwards, you can say how long something took, and you can answer for five situations the lesson never showed you.',
    estScreens: 44,
    restPoints: [`${ILYA_TRAP_SECTION_ID}/after`, `${EN_SECTION_ID}/after`],
  },
  {
    id: 'act5',
    title: 'Out loud',
    sections: [READING_SECTION_ID, SCENARIO_SECTION_ID, DICTATION_SECTION_ID, SPEAK_SECTION_ID, REVIEW_SECTION_ID],
    milestone: 'You held the conversation the table lost, and every answer in it wanted a decision about time that you made before the verb came out.',
    estScreens: 44,
    restPoints: [`${SCENARIO_SECTION_ID}/after`, `${DICTATION_SECTION_ID}/halfway`],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [PROGRESS_SECTION_ID, QUIZ_SECTION_ID, ROUNDUP_SECTION_ID],
    milestone: 'You answered for five situations this lesson never listed, which is the half of it a list could never have taught you.',
    estScreens: 38,
    restPoints: [`${QUIZ_SECTION_ID}/r3-still-or-finished`],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DECK TRANCHES
 *
 *  A tranche releases an item into the SRS, and nothing may be released before
 *  the acts have shown it. One tranche per act, in act order.
 * ═══════════════════════════════════════════════════════════════════════ */

const DECK_TRANCHE: string[][] = [
  // Act 1: the four published cards the grid rests on, plus the fifth this
  // lesson authored to complete them.
  [...QUADRUPLE_IDS, A(169)],
  // Act 2: depuis, in full.
  [
    'fr.sons.mots-essentiels.027', 'fr.sons.questions.040',
    A(170), A(175), A(176), A(177), A(178), A(179), A(180),
  ],
  // Act 3: pendant, and the pair.
  [
    'fr.sons.mots-essentiels.028', 'fr.sons.nasales.030', 'fr.sons.nasales.039',
    'fr.a1.prepositions-essentielles.093',
    A(171), A(181), A(182), A(183),
  ],
  // Act 4: the two points and the length, and the trap pair.
  [
    'fr.sons.mots-essentiels.013', 'fr.sons.mots-essentiels.088',
    A(172), A(173), A(184), A(185), A(186), A(187),
    A(188), A(189), A(190),
    // THE RECEPTIVE ROW. It is released as a card because a card is something
    // you read, and it is in no drill, no dictée and no quiz question.
    A(174),
  ],
  // Act 5: the scene and the conversation.
  [A(191), A(192), A(193), A(194), A(195), A(196), A(197)],
  // Act 6 releases nothing: it is the progress card, the exam and the roundup,
  // and everything they name has already been released. `validateLesson`
  // requires ONE SLICE PER ACT, so the slice is present and empty rather than
  // absent — an absent one would mean some act's cards never fire.
  [],
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ERROR TRIGGERS AND DRILLS
 *
 *  Each round names `targets` and `drillForRound` fires the drill of the FIRST
 *  resolving target only, then stops. So each trigger below leads exactly one
 *  round, which is what makes all five drills reachable. a1.05 shipped two dead
 *  drills and a1.07's first draft a third.
 * ═══════════════════════════════════════════════════════════════════════ */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-word',
    description: 'Picks the wrong one of the five, usually by translating the English preposition rather than by looking at what the time is doing. "For" gives depuis or pendant, "in" gives dans or en, and English does not distinguish either pair.',
    detectOn: [GRID_SECTION_ID, UNSEEN_SECTION_ID, `${QUIZ_SECTION_ID}/r1-which-word`],
    drill: 'drill-which-word',
    retest: 'retest-which-word',
  },
  {
    id: 'err-depuis-past',
    description: 'Puts the verb in a past tense after depuis, which is the English perfect being translated word for word. The single biggest interference point at this level and the reason this lesson exists.',
    detectOn: [DEPUIS_SECTION_ID, TENSE_TRAP_SECTION_ID, `${QUIZ_SECTION_ID}/r2-the-tense`],
    drill: 'drill-verb-stays',
    retest: 'retest-verb-stays',
  },
  {
    id: 'err-pendant-for-depuis',
    description: 'Swaps the two words that both come out as "for". Pendant closes the stretch and depuis leaves it open, and a learner working from the English has nothing to decide on.',
    detectOn: [PENDANT_SECTION_ID, PAIR_SECTION_ID, `${QUIZ_SECTION_ID}/r3-still-or-finished`],
    drill: 'drill-open-or-closed',
    retest: 'retest-open-or-closed',
  },
  {
    id: 'err-ilya-job',
    description: 'Reads il y a as "there is" where it means ago, or the other way round. The two jobs share all three words and only the next one settles it, which is doctrine §B.7\'s shape and the second of its four instances.',
    detectOn: [ILYA_SECTION_ID, ILYA_TRAP_SECTION_ID, `${QUIZ_SECTION_ID}/r4-il-y-a`],
    drill: 'drill-which-job',
    retest: 'retest-which-job',
  },
  {
    id: 'err-dans-for-en',
    description: 'Merges the two that both come out as "in". Dans is when it starts and en is how long it takes, and learners produce the wrong one about half the time.',
    detectOn: [DANS_SECTION_ID, EN_SECTION_ID, `${QUIZ_SECTION_ID}/r5-ahead-and-back`],
    drill: 'drill-point-or-length',
    retest: 'retest-point-or-length',
  },
  // FIVE TRIGGERS AND FIVE ROUNDS, ONE LEADING EACH. A sixth trigger
  // (`err-ilya-tense`, for a learner who stalls building a sentence round il y a
  // because the tense has not arrived) was written and REMOVED: with five rounds
  // it could never be the first resolving target of one, so its drill would have
  // been unreachable content of exactly the kind a1.05 shipped twice. What it
  // described is a gap rather than an error, and the deferral line says so on a
  // learner surface instead.
];

/* A `LessonDrill` is `sort` with buckets and ITEM IDS, `flashcard` with pairs,
 * or a one-question `mcq` with `q`/`opts`/`correct`/`why`. `items` is a list of
 * corpus ids and NOT a list of questions: a drill scores against the corpus, so
 * it plays the same audio and reads the same spelling as every card that taught
 * the row. Passing display strings there validates as broken ids.             */

const DRILLS = [
  {
    id: 'drill-which-word',
    title: 'Still going, finished, ahead or back',
    format: 'sort' as const,
    buckets: ['still going', 'finished', 'a point'],
    items: [A(180), A(183), A(182), A(171), A(184), A(186)],
    coach: `${THE_MOVE} Read what the time is doing before you look at the word.`,
  },
  {
    id: 'retest-which-word',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Il travaille ici ___ deux ans.   (and he still does)',
    opts: ['pendant', 'depuis', 'dans'],
    correct: 1,
    why: 'Still there, so the stretch is still open.',
  },
  {
    id: 'drill-verb-stays',
    title: 'The verb does not move',
    format: 'flashcard' as const,
    coach: `${DEPUIS_CLAIM} The English is on the front. Say the French out loud before you turn it over, and keep the verb where it is.`,
    pairs: [
      ['I have lived here for three years.', fr(A(170))],
      ['She has lived here for six months.', fr(A(175))],
      ['It has been raining since this morning.', fr(A(177))],
      ['I have been here for six months.', fr(A(179))],
    ] as [string, string][],
  },
  {
    id: 'retest-verb-stays',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'I have been waiting for twenty minutes and the bus is still not here.',
    opts: ["J'ai attendu depuis vingt minutes.", "J'attends depuis vingt minutes.", "J'attendais depuis vingt minutes."],
    correct: 1,
    why: 'Still waiting, so the present. The twenty minutes are entirely depuis\'s job.',
  },
  {
    id: 'drill-open-or-closed',
    title: 'Open or closed',
    format: 'flashcard' as const,
    coach: PAIR_CLAIM,
    pairs: [
      ['for an hour, and still going', importedFr('fr.sons.jours-et-mois.082')],
      ['for an hour, and it stopped', importedFr('fr.sons.jours-et-mois.083')],
      ['for two hours, and still going', fr(A(183))],
      ['for two hours, and it stopped', fr(A(182))],
    ] as [string, string][],
  },
  {
    id: 'retest-open-or-closed',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Elle a dormi ___ huit heures et elle est réveillée maintenant.',
    opts: ['depuis', 'pendant', 'dans'],
    correct: 1,
    why: 'She is awake, so the stretch is closed, so pendant.',
  },
  {
    id: 'drill-which-job',
    title: 'A thing or a measurement',
    format: 'sort' as const,
    buckets: ['there is', 'ago'],
    items: [A(188), A(189), A(190), A(186)],
    coach: `${AGO_RULE} ${Cap(unitRef(WHAT_FOLLOWS_UNIT))} named this pattern ${WHAT_FOLLOWS}.`,
  },
  {
    id: 'retest-which-job',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Il y a beaucoup de monde.',
    opts: ['a lot of people ago', 'there are a lot of people'],
    correct: 1,
    why: 'Beaucoup is an amount of a thing rather than a measurement of time, so the phrase is doing its other job.',
  },
  {
    id: 'drill-point-or-length',
    title: 'A point or a length',
    format: 'flashcard' as const,
    coach: EN_DANS_CLAIM,
    pairs: [
      ['when it starts, an hour from now', importedFr('fr.sons.jours-et-mois.080')],
      ['how long it takes, one hour', fr(A(169))],
      ['when I leave, ten minutes from now', fr(A(184))],
      ['how long the job takes, two hours', fr(A(185))],
    ] as [string, string][],
  },
  {
    id: 'retest-point-or-length',
    title: 'One more time',
    format: 'mcq' as const,
    q: "J'ai fini le travail ___ deux heures.   (that is how long it took)",
    opts: ['dans', 'en', 'depuis'],
    correct: 1,
    why: 'A length rather than a moment, so en.',
  },
];

/* ─── The reference sheet ──────────────────────────────────────────────────
 *
 * NO `cheatSheet`. ReferenceSheet.tsx draws `teach`, `letterGrid` and `table`
 * and nothing else, so a cheatSheet here would render its title and nothing
 * under it. a1.13 ships exactly that today.
 *
 * A `sheetId` resolves ONLY inside the lesson that declares it (schema.ts:3490,
 * lesson-contract.test.ts:91), so this cannot link a2.04's.
 *
 * THREE COLUMNS. a2.03's device pass found a FIVE-column table inside a sheet
 * clipping at the right edge; a2.04 read four as safe on that authority and a
 * Pixel 6 found that four clips too, with the horizontal scroll pushing the
 * first column off the other side. The budget is three and this lesson does not
 * test it again: anything that would be a fourth column is a `teach` block
 * underneath, which is the only shape a sheet has that cannot clip.           */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    title: 'Five time words, and the tense each one wants',
    layer: 'deep',
    contains: ['The five', 'The examples', 'Depuis', 'The two fors', 'Il y a'],
    sections: [
      {
        type: 'table',
        id: 'sheet-five',
        title: 'The five',
        layer: 'deep',
        cols: ['The word', 'The tense', 'It measures'],
        rows: GRID.map((g) => [g.prep, g.tense, g.measures]),
      },
      {
        type: 'table',
        id: 'sheet-examples',
        title: 'The same hour, five ways',
        layer: 'deep',
        cols: ['The word', 'The phrase', 'Means'],
        rows: GRID.map((g) => [g.prep, g.example, g.measures]),
      },
      {
        type: 'teach',
        id: 'sheet-depuis',
        title: 'Depuis and the present',
        layer: 'deep',
        body: `${DEPUIS_CLAIM} ${REFRAME} ${EVIDENCE_LINE}`,
      },
      {
        type: 'teach',
        id: 'sheet-two-fors',
        title: 'The two fors',
        layer: 'deep',
        body: `${PAIR_CLAIM} ${PENDANT_DEPUIS[0]!.why}`,
      },
      {
        type: 'teach',
        id: 'sheet-il-y-a',
        title: 'Il y a, and which job it is doing',
        layer: 'deep',
        body: `${AGO_RULE} ${PATTERN_CLAIM}`,
      },
      {
        type: 'teach',
        id: 'sheet-en-dans',
        title: 'A point ahead, and a length',
        layer: 'deep',
        body: `${EN_DANS_CLAIM} ${EN_DANS[1]!.why}`,
      },
      {
        type: 'teach',
        id: 'sheet-pour',
        title: 'And a sixth word',
        layer: 'deep',
        // THE ONLY PLACE `pour` WITH A DURATION APPEARS IN THIS LESSON, and the
        // guard counts exactly one occurrence of the shape across every learner
        // surface. See POUR_DECISION for the measurement behind leaving it out.
        body: POUR_LINE,
      },
      {
        type: 'teach',
        id: 'sheet-what-is-coming',
        title: 'What is still coming',
        layer: 'deep',
        body: `${PAST_DEFERRAL} ${FUTURE_DEFERRAL} ${A112_CLAIM.charAt(0).toUpperCase()}${A112_CLAIM.slice(1)} is ${unitRef(CLOCK_UNIT, 'a2')}'s, and it has been yours since then.`,
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ═══════════════════════════════════════════════════════════════════════ */

export const PREPOSITIONS_TEMPS_LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  // The lesson's index WITHIN its unit, not its place on the trail.
  seq: 1,
  title: UNIT.sub,
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`) and a2.18 sits at
  // seq 14. The stored value is a fallback and has to agree with what the
  // renderer computes; the batch checks it against the live unit.
  tag: `A2 · LEÇON ${String(UNIT.seq).padStart(2, '0')}`,
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped grammar jargon here in v1 because every
  // guard in the band walked `sections`, `sheets` and `terms` and not this. The
  // walk in the batch, the merge and the test includes `intro` and `overview`,
  // and this field is pinned by its own assertion.
  intro:
    'Somebody is going to ask you how long you have been here, and the answer is three words long. What makes it hard is not the words: it is that English hands you a past tense for a thing that is still true, and French will not take it. Five small words share this job between them, each one wanting a different shape of time behind it, and once you know what the time is doing the word chooses itself.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v2: `fr.a2.prepositions-essentielles.193` STOPPED BEING A SECOND COPY OF
  // ROW 179 AND BECAME HER RECOVERY LINE, and the scene reads 179 directly.
  //
  // v1 authored « Je suis ici depuis six mois. » twice on purpose, so that the
  // scene would end on the sentence the Owns act opens with. Every gate in the
  // batch was green and the MERGE refused it: `flashhub-coverage.test.ts`
  // treats two rows sharing an `fr` inside one theme as one card served twice,
  // and it does not care that the repetition was the point.
  //
  // The counter moves rather than the body being corrected under v1, because
  // Postgres already held v1 with the duplicate and two different bodies under
  // one number is the drift ledger §10 exists to prevent. a2.09 set the
  // precedent of moving it rather than relaxing the guard that caught it.
  // v3: THE CARDS STEP OF s07-tense WAS LABELLED 'Three cards' AND HELD FOUR.
  //
  // FOUND ON A PIXEL 6 AND BY NOTHING ELSE. The card set went from three to four
  // in v2, when an English gloss came out of a card's `fr` because the audio
  // step plays that field through a French voice, and the step label stayed
  // behind. The pager draws ONE DOT PER CARD directly under the label, so the
  // screen read THREE CARDS over four dots. Nothing in the schema, the density
  // validator or `lesson-contract.test.ts` compares a step label with the array
  // it labels; the batch, the merge and the test now do, and the `say` line is
  // checked with it because it counts them too.
  version: 4,

  grammarAssumed: [
    'The full present of être, introduced in a1.06',
    'The full present of avoir, introduced in a1.07',
    'The nine subject pronouns, and that on takes the il form, introduced in a1.05',
    'The numbers from one to a hundred, introduced in a1.02 and a1.27',
    'The twelve month names and en in front of a bare month, introduced in a1.09',
    'Telling the time, and à in front of a clock time, introduced in a1.12',
    'The present of the regular -ER, -IR and -RE verbs, introduced in a2.01, a2.10 and a2.11',
    'en and dans in front of a place, introduced in a2.04',
  ],
  grammarIntroduced: [
    'depuis with a present-tense verb to express a situation begun in the past and still obtaining, against the English present perfect which the learner will otherwise calque',
    'depuis taking either a point of origin or a span, with no change to the verb in either case',
    'The opposition between depuis and pendant as open and closed duration, and that English neutralises it under a single preposition',
    'pendant as a bounded span compatible with any tense',
    'il y a plus a completed measurement of time as a deictic point in the past, against il y a plus a nominal as an existential, and that the following constituent is the sole disambiguator',
    'That the existential reading survives a temporal noun where that noun is itself modified, which bounds the rule',
    'dans plus a span as a future point, expressed with a present-tense verb at this trail position',
    'en plus a span as the time taken to complete an action, against dans as the time until it begins',
    'The temporal senses of en and dans as distinct from the locative senses introduced in a2.04',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Cinq petits mots pour le temps, et c’est le temps qui choisit.',
    minutes: 30,
    difficulty: 3,
    glyph: '⏳',
    screens: 220,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PREPOSITIONS_TEMPS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-18-prepositions-temps.test.ts, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered. Invariants §10: anything the learner must hear as a
    // CONTRAST is ONE TAKE with one voice, because two recordings are two
    // performances and the learner will hear the performance rather than the
    // language.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    recorded: [
      {
        id: 'rec-a2-18-five',
        desc:
          'THE FIVE PHRASES, ONE TAKE, ONE VOICE, IN THE ORDER THE GRID PRINTS THEM AND WITH NO GAP BETWEEN THEM: '
          + '« depuis une heure », « pendant une heure », « il y a une heure », « dans une heure », « en une heure ». '
          + 'FOUR OF THESE FIVE ARE ALREADY PUBLISHED CARDS and the fifth was written for this lesson, and the whole '
          + 'claim of the grid is that they are five answers about ONE hour. Five separate recordings are five '
          + 'performances: a reader who records them apart will give each its own shape and the learner will hear '
          + 'five different phrases rather than one phrase with five fronts. '
          + 'THE LAST TWO WORDS OF ALL FIVE MUST BE IDENTICAL. « une heure » is the constant. '
          + 'THE LIAISONS ARE NOT OPTIONAL AND THEY ARE NOT THE SAME: depuis and dans pull a z across, pendant pulls '
          + 'a t, en pulls an n, and il y a pulls nothing at all. That difference is the only thing separating four '
          + 'of them by ear and a reader who softens it is removing the lesson. '
          + 'KEEP EVERY NASAL CLOSED: pendant is /pɑ̃dɑ̃/ with no n sound behind either vowel and dans is /dɑ̃/ with '
          + 'none behind its one.',
        clipIds: GRID.map((g) => g.example),
      },
      {
        id: 'rec-a2-18-tense',
        desc:
          'THE AUDIO STEP OF THE TENSE TRAP, AND IT IS A WRONG-THEN-RIGHT TAKE. '
          + '« J\'ai habité ici depuis trois ans. » then « J\'habite ici depuis trois ans. », one take, in that order. '
          + 'READ THE WRONG ONE PLAINLY AND AT ORDINARY PACE rather than comically or hesitantly. It is perfectly '
          + 'pronounceable, it is what a fluent English speaker produces on their first attempt, and a reading that '
          + 'signals the error teaches that the error is audible. It is not audible; it is simply wrong about when. '
          + 'The two are FOUR SYLLABLES APART AND NO MORE, and the learner has to hear which four. Do not lean on '
          + 'them and do not swallow them. '
          + 'THEN THE SAME PAIR AGAIN WITH THE WEATHER: « Il a plu depuis ce matin. » then « Il pleut depuis ce '
          + 'matin. » Four lines, one take, wrong and right alternating, and the whole point is that neither wrong '
          + 'one sounds wrong.',
        clipIds: [DEPUIS_WRONG[0]!.wrong, fr(A(170)), DEPUIS_WRONG[2]!.wrong, fr(A(177))],
      },
      {
        id: 'rec-a2-18-twice',
        desc:
          'THE AUDIO STEP OF THE IL Y A TRAP, FOUR LINES, ONE TAKE: « Il y a un problème. », « Il y a deux jours. », '
          + '« il y a une heure », « Il y a une heure de retard. » '
          + 'THE FIRST THREE WORDS OF ALL FOUR ARE IDENTICAL AND MUST SOUND IDENTICAL. That is the entire point of '
          + 'the take: the phrase carries no signal at all about which job it is doing, and everything is decided by '
          + 'what comes after. A reader who puts more weight on « il y a » in the ago lines, or pauses after it in '
          + 'the existence lines, is inventing a distinction French does not make and teaching the learner to listen '
          + 'for something that is not there. '
          + 'THE THIRD AND FOURTH LINES SHARE FOUR WORDS and differ only in what follows. Read them at the same pace '
          + 'and let the difference be the words themselves.',
        clipIds: [fr(A(188)), fr(A(189)), importedFr('fr.sons.jours-et-mois.081'), fr(A(190))],
      },
      {
        id: 'rec-a2-18-scene',
        desc:
          'THE TABLE IN LYON. Four people, most of the way through a meal, and her question is ordinary curiosity '
          + 'rather than an interview. It is the commonest thing anybody says to a foreigner and she has asked it a '
          + 'hundred times. '
          + 'THE LEARNER\'S OWN LINE IS THE TAKE THAT HAS TO BE RIGHT: « Euh... j\'ai été ici... non... je suis... '
          + 'six mois. » is somebody reaching for the tense their own language handed them, hearing it not fit, '
          + 'starting again, and running out of sentence. The « non » is a self-correction and must sound like one: '
          + 'quick, quiet, and to themselves rather than to the table. '
          + 'HER RECOVERY LINE IS THE EXPENSIVE ONE. « Ah, tu es ici depuis six mois. Et avant ? » is her saying the '
          + 'sentence back correctly without noticing she has done it, and moving straight on. Any hint of '
          + 'correction, emphasis on « es », or kindness-about-a-mistake turns the scene into a telling-off and '
          + 'loses the whole point, which is that nothing visibly went wrong.',
        clipIds: [fr(A(191)), 'Euh... j\'ai été ici... non... je suis... six mois.', fr(A(179)), fr(A(193))],
      },
      {
        id: 'rec-a2-18-depuis',
        desc:
          'THE SIX DEPUIS SENTENCES, ONE TAKE, EVEN PACE, READ AS ORDINARY SPEECH AND NOT AS A LIST OF EXAMPLES. '
          + 'Every one of them is in the present tense and the learner is being asked to notice that nothing in the '
          + 'verb marks the three years, the six months or the morning. NOTHING MAY BE STRESSED. A lift on « depuis » '
          + 'would teach that the word is doing something dramatic; it is doing all the work quietly, which is the '
          + 'observation the whole act rests on. '
          + 'THE LIAISON IN « trois ans » IS OBLIGATORY: /tʁwa.zɑ̃/, one word, with the nasal closed. '
          + 'DEPUIS IS /dəpɥi/ WITH THE GLIDE, not /dəpwi/ and not /dəpy.i/. The app writes it duh-PWEE, which is the '
          + 'headword\'s own spelling and the one five published rows use.',
        clipIds: [fr(A(170)), fr(A(175)), fr(A(176)), fr(A(177)), fr(A(179)), fr(A(178))],
      },
      {
        id: 'rec-a2-18-pair',
        desc:
          'DEPUIS AGAINST PENDANT, ADJACENT, ONE TAKE, AND THEY MUST SOUND EQUALLY ORDINARY. '
          + '« depuis une heure », « pendant une heure », « depuis deux heures », « pendant deux heures ». '
          + 'Both words are everyday and neither is more careful or more formal than the other, so any difference in '
          + 'weight between them teaches a distinction the language does not make: the difference is entirely in what '
          + 'is true about the world, and none of it is in the sound. '
          + 'PENDANT IS TWO CLOSED NASALS, /pɑ̃dɑ̃/, and the app respells it pahⁿ-DAHⁿ after repairing a headword row '
          + 'that had it as pahn-DAHN. A reader who lets an n out of either syllable is saying something else. '
          + 'THE LIAISON DIFFERS BETWEEN THEM: depuis pulls a z into « une », pendant pulls a t. Both are obligatory.',
        clipIds: [
          importedFr('fr.sons.jours-et-mois.082'), importedFr('fr.sons.jours-et-mois.083'),
          fr(A(183)), fr(A(182)),
        ],
      },
      {
        id: 'rec-a2-18-dictee',
        desc:
          'THE DICTÉE LINES, ONE TAKE EACH, CLEAN AND UNHURRIED, WITH NO CONTRAST INTENT AT ALL. This is the '
          + 'opposite instruction to every other take in this lesson: here the learner is spelling rather than '
          + 'comparing, and any pair-reading would hand them the answer. Read each line as though it were the only '
          + 'line. '
          + 'FIVE OF THE SEVEN ARE A SMALL WORD PLUS A LENGTH AND NOTHING ELSE, and those five matter most: the '
          + 'learner has to hear where one word ends and the next begins across a liaison, so do not run « depuis '
          + 'trois » into a single syllable and do not put a gap in it either. Say it the way somebody would say it. '
          + 'THE LAST TWO ARE THE TRAP PAIR and they are the only two sentences in the lesson short enough to spell '
          + 'letter by letter. Their first three words are identical and must sound identical.',
        clipIds: DICTEE_IDS.map((id) => fr(id)),
      },
      {
        id: 'rec-a2-18-talk',
        desc:
          'THE CONVERSATION, HER LINES ONLY, ONE TAKE, AS ONE CONTINUOUS EXCHANGE RATHER THAN AS SIX SEPARATE '
          + 'PROMPTS. She is the same neighbour a month later, she has more time, and she is enjoying it. '
          + '« Tu es ici depuis longtemps ? » and « Tu travailles ici depuis quand ? » both use the word the learner '
          + 'has just spent half an hour on, and NEITHER MAY BE STRESSED: she is not testing anybody, and a lift on '
          + '« depuis » would turn a conversation into an exercise. '
          + '« Depuis quand » AT THE END OF THE SENTENCE is the spoken order and it should sound completely natural '
          + 'there, because it is: the written order at the front is the one that sounds careful. '
          + 'Read « On mange dans une heure ? » with the rising intonation of a suggestion rather than a question '
          + 'about a timetable, because it is one.',
        clipIds: [fr(A(191)), fr(A(194)), fr(A(196)), 'Et le soir, tu fais quoi ?', 'Il pleut encore ?', 'Le film commence quand ?'],
      },
    ],
    ambienceDefault: 'off',
  },
};

/* ─── Arrays the guards read, exported at the FOOT of the file ─────────────
 *
 * These are reads off consts declared above, so they cannot live in the export
 * block near the top: `export const X = SPEAK_IDS` before SPEAK_IDS is declared
 * is a temporal dead zone and throws at import time rather than failing to
 * compile. The section ids up there are literals for exactly that reason.     */

export const PREPOSITIONS_TEMPS_ITEM_IDS = ITEM_IDS;
export const PREPOSITIONS_TEMPS_DICTEE_IDS = DICTEE_IDS;
export const PREPOSITIONS_TEMPS_SPEAK_IDS = SPEAK_IDS;
export const PREPOSITIONS_TEMPS_SECTIONS = SECTIONS;
export const PREPOSITIONS_TEMPS_ACTS = ACTS;
export const PREPOSITIONS_TEMPS_TRANCHES = DECK_TRANCHE;
export const PREPOSITIONS_TEMPS_SHEETS = SHEETS;
export const PREPOSITIONS_TEMPS_DRILLS = DRILLS;
export const PREPOSITIONS_TEMPS_ERROR_TRIGGERS = ERROR_TRIGGERS;
export const PREPOSITIONS_TEMPS_SCENE_BEATS = SCENE_BEATS;

/** The sections in which a wrong form may legally appear. Every other string in
 *  the lesson, and the sheet, the terms, the intro and the overview, is checked
 *  against DEPUIS_WRONG and against DEPUIS_PAST_SHAPE and must not contain one.
 *
 *  THE SCENE IS ON THIS LIST AND IT HAS TO BE. Its break card is a wrong/right
 *  contrast and the learner's own stalling line reaches for the tense the whole
 *  lesson exists to talk them out of. A guard that refused it there would
 *  forbid the lesson from showing what went wrong.
 *
 *  THE PRODUCE AND UNSEEN DRILLS ARE ON IT because every group offers the past
 *  tense as its distractor, which is the whole question. A drill option is a
 *  place where the error is the content, exactly like a trap card. */
export const WRONG_FORM_SECTIONS = [
  SCENE_SECTION_ID, TENSE_TRAP_SECTION_ID, ERRORS_SECTION_ID,
  ENGLISH_SECTION_ID, PRODUCE_SECTION_ID, UNSEEN_SECTION_ID,
  ILYA_SECTION_ID, ILYA_TRAP_SECTION_ID,
  QUIZ_SECTION_ID,
] as const;

/** AND ONE TERM, WHICH THE FIRST DRY RUN FOUND.
 *
 *  `presentNotPerfect` is the glossary entry for the Owns, and its body quotes
 *  « J'ai habité ici depuis trois ans » to say what a French listener hears
 *  when you produce it. A guard that refused the wrong form in every term would
 *  forbid the lesson from explaining its own subject anywhere a chip opens.
 *
 *  Named rather than the whole `terms` object being exempted, so the OTHER
 *  seven terms are still checked and a later author who puts the error in one
 *  of them fails with the reason. */
export const WRONG_FORM_TERMS = ['presentNotPerfect'] as const;
