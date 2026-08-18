// a2.19.l1, « Le futur proche », seq 15 on the A2 trail.
//
// 24 sections, 6 acts, 30 questions, two stepped trapDrills and one reference
// sheet. Every French string on every screen comes from futur-proche-corpus.ts
// or from futur-proche-imported.ts and none is typed twice.
//
// ── WHAT THIS LESSON OWNS ────────────────────────────────────────────────
//
// WHERE THE TWO HALVES OF THE NEGATIVE LAND WHEN THERE ARE TWO VERBS. The
// construction itself costs an English speaker nothing: they already conjugate
// aller (a2.02) and they already know a first verb takes a naming form after it
// (a2.13). What they do not have is which of the two verbs `ne ... pas` goes
// round, and their instinct says the wrong one, because in English "not" sits
// beside the word carrying the meaning. They produce « je ne vais manger pas ».
//
// The rule is: **wrap the verb that changed, not the one carrying the meaning**,
// and it is worth more than this lesson. It is a2.13's modals backwards and it
// is the passé composé at seq 16 forwards, where `pas` wraps the auxiliary and
// leaves the participle alone. a2.05 is told to extend it and the wording is
// exported so the two can be compared rather than remembered.
//
// ── ACT WEIGHTS ──────────────────────────────────────────────────────────
//
//   the paradigm      act 1 s03, ONE section, and it is a tapTable
//   the Owns          act 2, FIVE sections, all of them the negative
//   the trap          act 4, four sections, one of them a stepped trapDrill
//
// Doctrine §B.5: if the act structure gives the paradigm more missions than the
// Owns, the wrong lesson got built. The paradigm here is one screen, because
// a2.02 conjugated aller in six persons in one frame and this lesson imports
// two of its cards rather than re-teaching any of it.

import type {
  Lesson, LessonAct, LessonSection, ErrorTrigger, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  A118_CLAIM, A118_NE_DROP, A118_REFRAME, A202_NAMING_FORM, A213_REFRAME,
  A218_DEFERRAL, A218_HANDOVER, ALLER_UNIT, AUTHORED_IDS, DANS_PAIR,
  DANS_PAIR_TWO, DICTEE_CLAIM, FRAME_VERB, GRID_CLAIM, ITEM_IMPORT_IDS,
  LESSON_ID, MODAL_UNIT, NEGATION_UNIT, NE_DROP, OTHER_FUTURE, OWNS_CLAIM,
  PAIRS, PAST_DEFERRAL, PAST_UNIT, PATTERN_CLAIM, PATTERN_PREDICTION,
  PERSONS, PLACE_UNIT, POSITION_CLAIM, PUBLISHED_NEGATIVE_IDS, REFRAME,
  SHEET_ID, THE_MOVE, TIME_UNIT, TRAP_RULE, TWO_JOBS, UNIT, WHAT_FOLLOWS,
  WHAT_FOLLOWS_UNIT, WRONG, FUTUR_PROCHE,
} from './futur-proche-corpus.ts';
import { ALREADY_YOURS, EVIDENCE_LINE, FUTUR_PROCHE_TERMS } from './futur-proche-terms.ts';
import { impCard, importedEn, importedFr, rowCard, sub as impSub } from './futur-proche-imported.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ─── Reading the authored rows ────────────────────────────────────────────
 *
 * The lesson NEVER types a French string that is also a corpus row. `fr(id)`
 * and `en(id)` read it, so a screen and the card the learner is scored on
 * cannot drift apart. a2.13 §6.2 shipped a grid that disagreed with its own
 * cards and every host gate was green.                                       */

const BY_ID = new Map(FUTUR_PROCHE.map((r) => [r.id, r]));

const fr = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.19: ${id} is not an authored row.`);
  return r.fr;
};
const en = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.19: ${id} is not an authored row.`);
  return r.en;
};
const bare = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.19: ${id} is not an authored row.`);
  return r.respell!;
};
const sub = (id: string): string => `[${bare(id)}]`;
const ipaOf = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.19: ${id} is not an authored row.`);
  return r.ipa!;
};

/** A groupDrill item at `lg` for an AUTHORED row. MissionRich.tsx:439 draws
 *  `fr`, `ipa` and `note` and nothing else at this size, so the respelling and
 *  the gloss go in `note`. Ledger §a2.14-12. */
const authoredCard = (id: string) => ({ fr: fr(id), ipa: ipaOf(id), note: `${sub(id)} ${en(id)}` });

const A = (n: number) => `fr.a2.verbes.${n}`;

/* ─── Section ids, as LITERALS ─────────────────────────────────────────────
 *
 * Literals rather than reads off a const declared below, because
 * `export const X = SECTIONS[0].id` before SECTIONS is a temporal dead zone.  */

export const SCENE_SECTION_ID = 's01-scene';
export const GOALS_SECTION_ID = 's02-goals';
export const SHAPE_SECTION_ID = 's03-shape';
export const PAIR_SECTION_ID = 's04-pair';
export const ENGLISH_SECTION_ID = 's05-english';
export const SIX_SECTION_ID = 's06-six';
export const WHERE_TRAP_SECTION_ID = 's07-where';
export const PRODUCE_SECTION_ID = 's08-produce';
export const ANY_SECTION_ID = 's09-any';
export const MODALS_SECTION_ID = 's10-modals';
export const ERRORS_SECTION_ID = 's11-errors';
export const WHEN_SECTION_ID = 's12-when';
export const PLACE_SECTION_ID = 's13-place';
export const TWICE_TRAP_SECTION_ID = 's14-twice';
export const HEAR_SECTION_ID = 's15-hear';
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

/** Every authored row whose `dicteeMode` is LETTERS **and** which this lesson
 *  is willing to make a production surface. Derived from the drill rather than
 *  listed, so a row that stops qualifying cannot stay in the dictée.
 *
 *  NINE ROWS, AND TWO OF THEM ARE NEGATIVES. Corrections §4: `ne` and `pas`
 *  cost five letters, so the negative fits in LETTERS mode for `tu`, `il` and
 *  `on` and is over the limit for the other five persons, including `je`. This
 *  lesson's paradigm uses `il` rather than `on`, so two of the three reachable
 *  negatives are in it and the third is not written. See DICTEE_MATRIX. */
const DICTEE_IDS: string[] = FUTUR_PROCHE
  .filter((r) => r.drills.includes('dictation'))
  .map((r) => r.id);

/** Spoken practice draws ONLY from rows carrying `voiceflash`. THE RECEPTIVE
 *  ROW IS NOT HERE: a1.18 introduced the dropped `ne` for reception only and
 *  produces it nowhere, and a speak mission is a production surface. */
const SPEAK_IDS: string[] = FUTUR_PROCHE
  .filter((r) => r.drills.includes('voiceflash'))
  .map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SCENE
 *
 *  Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 *  could not finish. This one is worse than a stall and it is the shape the
 *  brief asks for: he gets the first half out, goes looking for where the
 *  negative belongs, and the sentence ends before either half arrives. What
 *  comes out is perfect French meaning the opposite of what he meant, and
 *  nobody has any reason to check.
 * ═══════════════════════════════════════════════════════════════════════ */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Friday, ten past six, coat already on. Your colleague catches you at the door with one hand on the light switch.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'La collègue',
    fr: fr(A(523)),
    en: en(A(523)),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-19-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Je vais travailler... euh...',
    en: 'I am going to work... uh...',
    stage: 'You have the first three words and you know both halves of the negative. What you are hunting for is where they go, and the sentence is already moving.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'She is holding the door. What comes out?',
    options: [
      {
        fr: fr(A(524)),
        respell: sub(A(524)),
        en: 'both halves, round the verb that changed',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Je vais travailler.',
        en: 'correct French, and the opposite of what you meant',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'She says « ah, d\'accord » and goes home, and so do you.',
      breaks: 'Nothing goes wrong at all. That is the problem.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La collègue',
    fr: fr(A(525)),
    en: en(A(525)),
    stage: 'She books you in, cheerfully, on the strength of a sentence that was correct. Nobody corrected anything, so nothing was learned, and you are now expected.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'break',
    size: 'lg',
    // v2: THE BREAK CARD'S OWN CONTINUE WAS UNDER THE PAGER BAR ON A PIXEL 6.
    // Ledger §7 and a2.14 §9.1: the budget on this screen is LINES, not words,
    // and a card carrying BOTH reading rows has almost none to spare. Three
    // things went over at once and all three are now inside the measured budget
    // in BREAK_BUDGET: the right-hand French was 31 characters and wrapped, its
    // gloss was 27, and the body was 33 words against a budget of 26.
    heading: 'Two verbs now',
    body: 'You did not stall on a word and you did not get a form wrong. The sentence ran out before the negative arrived.',
    wrong: {
      fr: 'Je vais travailler.',
      ipa: '/ʒə vɛ tʁa.va.je/',
      respell: '[zhuh veh trah-vah-YAY]',
      en: 'the half that arrived',
    },
    right: {
      fr: fr(A(524)),
      ipa: ipaOf(A(524)),
      respell: sub(A(524)),
      en: 'what you meant',
    },
    // v3: NO `coach`. THE SCENE'S OWN `closing` ALREADY CARRIES THE REFRAME AND
    // BOTH RENDER ON THIS SCREEN, so v2 printed the same eleven words twice,
    // one paragraph apart, and the second copy pushed the card's Continue back
    // under the pager bar. Invariants §7 names chrome repeated on one screen as
    // one of the four classes only a device finds, and this is it: two fields
    // owned by two different objects, each correct on its own.
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the answer that came out right ───────────────────────────────*/

  {
    type: 'scene',
    id: SCENE_SECTION_ID,
    title: 'Yes, By Accident',
    frSub: 'Au bureau, vendredi',
    render: 'screens',
    layer: 'core',
    setting: { place: 'The office door', city: 'Lille', time: 'Friday evening' },
    beats: SCENE_BEATS,
    closing: { text: REFRAME, size: 'md' },
    terms: ['whichVerb', 'goingTo'],
  },

  {
    type: 'goals',
    id: GOALS_SECTION_ID,
    // 27 characters, the house heading that 36 lessons in the seed ship.
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    goals: [
      { t: 'Say what you are going to do', s: 'Aller in the present, then the naming form of whatever you are planning. Six forms you already have and no new endings at all.' },
      { t: 'Put the negative in the right place', s: OWNS_CLAIM },
      { t: 'Tell a plan from a journey', s: TRAP_RULE },
      { t: 'Recognise it without the ne', s: A118_NE_DROP },
    ],
  },

  {
    /* THE PARADIGM, AND IT IS ONE SCREEN.
       Three columns, six rows, and the third column is the word `partir` six
       times. a2.17 measured a three-column tapTable cell on a Pixel 6 at eleven
       characters and every cell here is inside it; six rows is the ceiling the
       ledger records for a tapTable on that phone.

       A `table` at layer `core` is a density failure (corrections §8), so the
       in-flow version is a tapTable and the full one lives in the sheet. */
    type: 'tapTable',
    id: SHAPE_SECTION_ID,
    title: 'One Verb Moves',
    frSub: 'Un seul verbe bouge',
    layer: 'core',
    say: `${GRID_CLAIM} Tap a row to hear the whole sentence.`,
    cols: ['Person', 'Aller', 'Then'],
    rows: PERSONS.map((p, i) => ({
      cells: [p.person, p.aller, FRAME_VERB],
      say: fr(A(501 + i)),
      detail: {
        title: fr(A(501 + i)),
        body: `${sub(A(501 + i))} ${en(A(501 + i))} ${BY_ID.get(A(501 + i))!.notes}`,
        say: fr(A(501 + i)),
      },
    })),
    terms: ['goingTo', 'neverChanges'],
  },

  /* ── Act 2: where the two halves go. THE OWNS, and the heaviest act. ─────*/

  {
    /* THE LAYOUT THE BRIEF ASKS THE TEST TO ASSERT.
       The affirmative and the negative on ONE screen, adjacent, in strict
       pairs, with the `pas` visibly between the form of aller and the naming
       form. Anything that put the negative in a section of its own would have
       hidden the only thing the learner needs to see. */
    type: 'examples',
    id: PAIR_SECTION_ID,
    title: 'Both, Side By Side',
    frSub: 'Les deux, côte à côte',
    layer: 'core',
    say: `${REFRAME} Three pairs. Read each one down rather than across, and watch where the two extra words land.`,
    examples: [
      { fr: fr(A(501)), en: en(A(501)), note: `${sub(A(501))} Aller changed for je. Partir did not, and it is not going to.` },
      { fr: fr(A(507)), en: en(A(507)), note: `${sub(A(507))} ${POSITION_CLAIM}` },
      { fr: fr(A(503)), en: en(A(503)), note: `${sub(A(503))} The same two words with il in front.` },
      { fr: fr(A(509)), en: en(A(509)), note: `${sub(A(509))} And the same two extra words, in the same two places.` },
      { fr: fr(A(506)), en: en(A(506)), note: `${sub(A(506))} The plural, and partir has still not moved.` },
      { fr: fr(A(512)), en: en(A(512)), note: `${sub(A(512))} Ne, vont, pas, partir. Every negative in this lesson is that shape.` },
    ],
    terms: ['whichVerb', 'goingTo', 'neverChanges'],
  },

  {
    type: 'cardDeck',
    id: ENGLISH_SECTION_ID,
    title: 'Where English Puts It',
    frSub: 'Là où l’anglais le met',
    layer: 'core',
    hint: 'Swipe. Five cards, and the last one is the measurement rather than an opinion.',
    cards: [
      { label: 'the English', head: 'I am not going to eat.', body: 'The "not" sits beside "going", which is the word that changed. English does the same thing French does, and it does it quietly enough that nobody notices.' },
      { label: 'what you produce', head: WRONG[0]!.wrong, body: WRONG[0]!.why },
      { label: 'the French', head: WRONG[0]!.right, sub: '[zhuh nuh veh pah mahⁿ-ZHAY]', body: `Ne in front of vais, pas straight after it, and manger outside both. ${REFRAME}` },
      { label: 'the other one', head: WRONG[1]!.wrong, body: WRONG[1]!.why },
      { label: 'the evidence', head: 'thirteen to nothing', body: EVIDENCE_LINE },
    ],
    terms: ['whichVerb', 'neverChanges'],
  },

  {
    type: 'examples',
    id: SIX_SECTION_ID,
    title: 'Six People, One Place',
    frSub: 'Six personnes, une place',
    layer: 'core',
    say: 'Every person, negative, one after another. Aller changes six times and the position of the two halves does not change once.',
    examples: [
      { fr: fr(A(507)), en: en(A(507)), note: `${sub(A(507))} je` },
      { fr: fr(A(508)), en: en(A(508)), note: `${sub(A(508))} tu` },
      { fr: fr(A(510)), en: en(A(510)), note: `${sub(A(510))} nous, and the ne shortens in front of the vowel. The liaison z goes with it: noo na, not noo za.` },
      { fr: fr(A(511)), en: en(A(511)), note: `${sub(A(511))} vous, the same shortening and the same lost liaison.` },
      { fr: fr(A(512)), en: en(A(512)), note: `${sub(A(512))} ils` },
    ],
    terms: ['whichVerb', 'goingTo'],
  },

  {
    /* TRAP ONE: WHICH VERB GETS WRAPPED.
       The Owns made into a choice. The learner has the two halves and the two
       verbs and puts them in the English order.

       THE STEPPED SHAPE. `lesson-contract.test.ts` requires every A2 trapDrill
       to walk rule > cards > audio > drill with `swipe`, a `say`, an audio spec
       and a GATED drill step, and `size` COMES OFF (ledger, the trapDrill sweep
       across seq 1..11). a2.03, a2.16 and a2.17 all shipped the stacked shape. */
    type: 'trapDrill',
    id: WHERE_TRAP_SECTION_ID,
    title: 'Which Verb Gets Wrapped',
    frSub: 'Quel verbe on entoure',
    layer: 'core',
    swipe: true,
    say: 'Four cards and then six to prove it. Both verbs are right in every one of the six and the only thing being asked about is where the two little words went.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-19-where' },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'The One That Changed' },
      { kind: 'cards', label: 'Four cards', title: 'Two Routes, One Sentence' },
      { kind: 'audio', label: 'Hear it', title: 'Wrong, Then Right' },
      { kind: 'drill', label: 'Prove it', title: 'Where Does Pas Go', gate: true },
    ],
    rule: {
      title: 'Wrap the one that moved',
      body: `${REFRAME} ${OWNS_CLAIM}`,
    },
    // EVERY CARD'S `fr` IS FRENCH, because the audio step plays each card's `fr`
    // at the section's speeds through a French voice. a2.18 found that by having
    // a card hold an English gloss and being refused.
    cards: [
      { promptLabel: 'the English order', promptSound: WRONG[0]!.wrong, fr: WRONG[0]!.wrong, ipa: '/ʒə nə vɛ mɑ̃.ʒe pa/', tip: WRONG[0]!.why },
      { promptLabel: 'the French', promptSound: WRONG[0]!.right, fr: WRONG[0]!.right, ipa: '/ʒə nə vɛ pa mɑ̃.ʒe/', tip: 'Ne in front of vais and pas straight after it. Manger is outside both and has not been touched.' },
      { promptLabel: 'both halves travelling', promptSound: WRONG[1]!.wrong, fr: WRONG[1]!.wrong, ipa: '/ʒə vɛ nə pa paʁ.tiʁ/', tip: WRONG[1]!.why },
      { promptLabel: 'the French', promptSound: fr(A(507)), fr: fr(A(507)), ipa: ipaOf(A(507)), tip: 'The same sentence with the halves where they belong, and it is the shape all six persons take.' },
    ],
    // Hand-randomised: MissionRich renders authored order exactly, so a correct
    // answer sitting at index 0 six times running gives itself away.
    drill: [
      { promptSay: fr(A(507)), opts: [WRONG[0]!.wrong.replace('manger', 'partir'), fr(A(507)), 'Je vais ne partir pas.'], correct: 1 },
      { promptSay: fr(A(509)), opts: [fr(A(509)), 'Il ne va partir pas.', 'Il va ne pas partir.'], correct: 0 },
      { promptSay: fr(A(512)), opts: ['Ils ne vont partir pas.', 'Ils vont ne pas partir.', fr(A(512))], correct: 2 },
      { promptSay: fr(A(508)), opts: ['Tu ne vas partir pas.', fr(A(508)), 'Tu vas ne pas partir.'], correct: 1 },
      { promptSay: fr(A(510)), opts: [fr(A(510)), "Nous n'allons partir pas.", "Nous allons ne pas partir."], correct: 0 },
      { promptSay: fr(A(524)), opts: ['Je ne vais travailler pas.', 'Je vais ne pas travailler.', fr(A(524))], correct: 2 },
    ],
    terms: ['whichVerb', 'neverChanges', 'goingTo'],
  },

  {
    /* PRODUCTION, IN THE FLOW. A groupDrill check is an mcq (ledger §a2.15-6),
       so this is not a free-production surface; what it does is make the learner
       build the sentence about their own evening before choosing. The typeIn and
       errorSpot questions in the quiz are where they actually produce it. */
    type: 'groupDrill',
    id: PRODUCE_SECTION_ID,
    title: 'Say It About Tonight',
    frSub: 'Parlez de ce soir',
    layer: 'core',
    size: 'lg',
    say: 'Four things that are true of your own evening. Build each one out loud before you pick, and put the two halves round the verb that moved.',
    groups: [
      {
        label: 'you are staying in',
        items: [authoredCard(A(516))],
        check: {
          q: 'You are not going out tonight.',
          opts: ['Je ne vais sortir pas ce soir.', 'Je vais ne pas sortir ce soir.', 'Je ne vais pas sortir ce soir.'],
          correct: 2,
          why: 'Round vais, which is the verb that moved for je. Sortir sits outside both halves and stays as it is.',
        },
      },
      {
        label: 'nobody is coming',
        items: [authoredCard(A(515))],
        check: {
          q: 'He is not coming tonight.',
          opts: ['Il ne va pas venir ce soir.', 'Il ne va venir pas ce soir.', 'Il va ne pas venir ce soir.'],
          correct: 0,
          why: 'Va is the form that changed for il, so both halves go round it and venir is untouched.',
        },
      },
      {
        label: 'you are not paying',
        items: [authoredCard(A(513))],
        check: {
          q: 'You are not going to pay.',
          opts: ['Je vais ne pas payer.', 'Je ne vais pas payer.', 'Je ne vais payer pas.'],
          correct: 1,
          why: `The same shape with a different naming form behind it. ${A213_REFRAME}`,
        },
      },
      {
        label: 'we are not leaving',
        items: [authoredCard(A(510))],
        check: {
          q: 'We are not going to leave.',
          opts: ["Nous n'allons partir pas.", 'Nous allons ne pas partir.', "Nous n'allons pas partir."],
          correct: 2,
          why: 'The ne shortens in front of the vowel and nothing else moves. The pas is still straight after the form of aller.',
        },
      },
    ],
    terms: ['whichVerb', 'goingTo', 'neverChanges'],
  },

  /* ── Act 3: anything slots in ────────────────────────────────────────────*/

  {
    type: 'examples',
    id: ANY_SECTION_ID,
    title: 'Any Verb At All',
    frSub: 'N’importe quel verbe',
    layer: 'core',
    say: 'Six sentences and six different verbs behind aller. Nothing about the front of the sentence changes and nothing about the naming form changes either.',
    examples: [
      { fr: fr(A(513)), en: en(A(513)), note: `${sub(A(513))} payer` },
      { fr: fr(A(514)), en: en(A(514)), note: `${sub(A(514))} travailler, four syllables, and the slot does not care.` },
      { fr: fr(A(515)), en: en(A(515)), note: `${sub(A(515))} venir, which is the other verb ${unitRef(ALLER_UNIT)} taught you.` },
      { fr: fr(A(517)), en: en(A(517)), note: `${sub(A(517))} manger, and a word for early you have spelled twice already.` },
      { fr: fr(A(518)), en: en(A(518)), note: `${sub(A(518))} rester, which is the one plan in the set that is about not moving.` },
      { fr: importedFr('fr.a2.negation-et-restriction.164'), en: importedEn('fr.a2.negation-et-restriction.164'), note: `${impSub('fr.a2.negation-et-restriction.164')} finir, negative, and a sentence somebody published years ago with the pas in exactly this place.` },
    ],
    terms: ['neverChanges', 'goingTo'],
  },

  {
    type: 'cardDeck',
    id: MODALS_SECTION_ID,
    title: 'You Have Done This Before',
    frSub: 'Vous connaissez déjà',
    layer: 'core',
    hint: 'Swipe. Five cards, and the last two are lessons you have not reached yet.',
    cards: [
      impCard('fr.a2.verbes.347', 'you have seen this', `${Cap(unitRef(MODAL_UNIT, 'a2'))}'s own card. A first verb that changed for je, and payer behind it in its naming form. ${A213_REFRAME}`),
      { label: 'this lesson', head: fr(A(513)), sub: sub(A(513)), body: 'The same naming form behind a different first verb. Nothing about payer is different, because nothing ever is.' },
      { label: 'the negative', head: 'Je ne peux pas payer.', body: `${Cap(unitRef(MODAL_UNIT))} again, negative. The two halves went round peux, which is the verb that changed, and payer stayed outside them. That is this lesson's rule on a different first verb.` },
      { label: 'the same rule', head: fr(A(507)), sub: sub(A(507)), body: `${REFRAME} One rule, and you have now seen it work on two different first verbs.` },
      { label: 'and next', head: 'the lesson after this one', body: PAST_DEFERRAL },
    ],
    terms: ['sameShape', 'neverChanges'],
  },

  {
    /* `commonErrors` WANTS `swipe: true` OR IT DRAWS A BLANK SCREEN. a1.01
       mission 5 and sons.08 mission 22 both shipped without it. */
    type: 'commonErrors',
    id: ERRORS_SECTION_ID,
    title: 'The Five You Will Make',
    frSub: 'Les cinq erreurs',
    layer: 'core',
    swipe: true,
    size: 'lg',
    errors: [
      ...WRONG.map((w) => ({ wrong: w.wrong, right: w.right, why: w.why })),
      {
        wrong: 'Je ne vais pas partirai.',
        right: fr(A(507)),
        why: 'The second verb has been given an ending. It never takes one: whatever goes behind aller goes in as the naming form and comes out the same way.',
      },
      {
        wrong: 'Je ne vais pas partir pas.',
        right: fr(A(507)),
        why: 'One pair per verb. The pas is not a word you add for emphasis, it is one half of a pair, and the pair goes round one verb once.',
      },
    ],
    // THIRTY-FIVE CHARACTERS. The first version was `neGoes` in third place and
    // measured 38 against a budget of 37 (a2.03 §3), which the batch caught.
    terms: ['whichVerb', 'neverChanges', 'goingTo'],
  },

  {
    type: 'examples',
    id: WHEN_SECTION_ID,
    title: 'Say When, And It Is Fixed',
    frSub: 'Dites quand',
    layer: 'core',
    say: `A plan with no time on it can be read as somebody walking towards the kitchen. Put a time on it and there is nothing left to work out. ${A218_DEFERRAL}`,
    examples: [
      { fr: importedFr(DANS_PAIR.theirsId), en: importedEn(DANS_PAIR.theirsId), note: `${impSub(DANS_PAIR.theirsId)} ${Cap(unitRef(TIME_UNIT, 'a2'))}'s own sentence, and it is correct as it stands.` },
      { fr: fr(A(519)), en: en(A(519)), note: `${sub(A(519))} ${DANS_PAIR.why}` },
      { fr: importedFr('fr.a2.prepositions-essentielles.184'), en: importedEn('fr.a2.prepositions-essentielles.184'), note: `${impSub('fr.a2.prepositions-essentielles.184')} The phrase on its own, already a card, and this lesson spells it exactly as that one does.` },
      { fr: fr(A(520)), en: en(A(520)), note: `${sub(A(520))} ${Cap(unitRef(TIME_UNIT))} published « ${DANS_PAIR_TWO.theirs} » as a question and this is the same plan with a verb in front of it.` },
      { fr: fr(A(514)), en: en(A(514)), note: `${sub(A(514))} And a day instead of a length, which works exactly the same way.` },
    ],
    terms: ['timeWord', 'goingTo'],
  },

  /* ── Act 4: one verb, two jobs. THE TRAP. ────────────────────────────────*/

  {
    type: 'examples',
    id: PLACE_SECTION_ID,
    title: 'A Place Or A Plan',
    frSub: 'Un lieu ou un projet',
    layer: 'core',
    say: `${PATTERN_PREDICTION}`,
    examples: [
      { fr: importedFr('fr.a2.prepositions-essentielles.130'), en: importedEn('fr.a2.prepositions-essentielles.130'), note: `${impSub('fr.a2.prepositions-essentielles.130')} ${Cap(unitRef(PLACE_UNIT, 'a2'))}'s card. A place, so this is a journey.` },
      { fr: fr(A(501)), en: en(A(501)), note: `${sub(A(501))} ${TWO_JOBS[0]!.why}` },
      { fr: importedFr('fr.a2.verbes.261'), en: importedEn('fr.a2.verbes.261'), note: `${impSub('fr.a2.verbes.261')} ${TWO_JOBS[1]!.why}` },
      { fr: fr(A(513)), en: en(A(513)), note: `${sub(A(513))} A naming form, so this is a plan. Two words in common with the card above it.` },
      { fr: importedFr('fr.a2.verbes.266'), en: importedEn('fr.a2.verbes.266'), note: `${impSub('fr.a2.verbes.266')} ${TWO_JOBS[2]!.why}` },
      { fr: fr(A(506)), en: en(A(506)), note: `${sub(A(506))} And the plan in the plural. ${TRAP_RULE}` },
    ],
    terms: ['whatNext', 'goingTo'],
  },

  {
    /* TRAP TWO, AND IT IS THE THIRD INSTANCE OF DOCTRINE §B.7's SHAPE.
       a2.02 taught the first and named the pattern; a2.18 met it again on
       il y a; this is the third of four and a2.15's prendre is the fourth.
       By the third the learner should be predicting the shape, which is what
       the section's `say` asks them to do before anything is shown. */
    type: 'trapDrill',
    id: TWICE_TRAP_SECTION_ID,
    title: 'Aller, Twice',
    frSub: 'Aller, deux fois',
    layer: 'core',
    swipe: true,
    say: `${PATTERN_CLAIM} Four cards and then six to prove it.`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-19-twice' },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'What Comes Next Decides' },
      { kind: 'cards', label: 'Four cards', title: 'A Place Or A Naming Form' },
      { kind: 'audio', label: 'Hear it', title: 'Same Two Words' },
      { kind: 'drill', label: 'Prove it', title: 'Journey Or Plan', gate: true },
    ],
    rule: {
      title: WHAT_FOLLOWS,
      body: `${PATTERN_CLAIM} ${TRAP_RULE}`,
    },
    cards: [
      { promptLabel: 'a journey', promptSound: importedFr('fr.a2.prepositions-essentielles.130'), fr: importedFr('fr.a2.prepositions-essentielles.130'), ipa: '/ʒə vɛ a pa.ʁi/', tip: 'A place behind it, so you are going somewhere.' },
      { promptLabel: 'a plan', promptSound: fr(A(501)), fr: fr(A(501)), ipa: ipaOf(A(501)), tip: 'A naming form behind it, so you are going to do something. The first two words are identical.' },
      { promptLabel: 'a journey', promptSound: importedFr('fr.a2.verbes.261'), fr: importedFr('fr.a2.verbes.261'), ipa: '/ʒə vɛ o paʁk/', tip: `${Cap(unitRef(ALLER_UNIT, 'a2'))}'s own card, from the lesson that conjugated this verb.` },
      { promptLabel: 'a plan', promptSound: fr(A(513)), fr: fr(A(513)), ipa: ipaOf(A(513)), tip: 'And the plan beside it. Nothing about « je vais » tells you which one you are in.' },
    ],
    drill: [
      { promptSay: fr(A(501)), opts: ['a journey', 'a plan'], correct: 1 },
      { promptSay: importedFr('fr.a2.prepositions-essentielles.130'), opts: ['a journey', 'a plan'], correct: 0 },
      { promptSay: fr(A(516)), opts: ['a plan', 'a journey'], correct: 0 },
      { promptSay: importedFr('fr.a2.verbes.266'), opts: ['a plan', 'a journey'], correct: 1 },
      { promptSay: fr(A(518)), opts: ['a journey', 'a plan'], correct: 1 },
      { promptSay: importedFr('fr.a2.verbes.261'), opts: ['a journey', 'a plan'], correct: 0 },
    ],
    terms: ['whatNext', 'goingTo', 'whichVerb'],
  },

  {
    type: 'cardDeck',
    id: HEAR_SECTION_ID,
    title: 'What You Will Hear',
    frSub: 'Ce que vous entendrez',
    layer: 'core',
    hint: 'Swipe. Five cards, and this lesson is not asking you to say any of it.',
    cards: [
      { label: 'in writing', head: fr(A(521)), sub: sub(A(521)), body: `${en(A(521))} Both halves, every time, which is what ${unitRef(NEGATION_UNIT)} told you and it has not changed.` },
      { label: 'in speech', head: fr(A(522)), sub: sub(A(522)), body: NE_DROP },
      { label: 'what stays', head: 'pas', body: 'The half that disappears is the half that was not doing the work. Pas is still straight after the form of aller and it is now carrying the whole negative on its own.' },
      { label: 'the second future', head: 'one word instead of two', body: OTHER_FUTURE },
      { label: 'and the one after', head: 'the same rule again', body: PAST_DEFERRAL },
    ],
    terms: ['neGoes', 'laterOn', 'sameShape'],
  },

  {
    /* THE GENERALISATION TEST, IN THE FLOW.
       Doctrine §B.1: a mission that makes the learner answer for a situation
       the lesson never showed them has taught the system rather than the list.
       Five verbs this lesson has not put behind aller once. */
    type: 'groupDrill',
    id: UNSEEN_SECTION_ID,
    title: 'Five You Have Not Met',
    frSub: 'Cinq cas nouveaux',
    layer: 'core',
    size: 'lg',
    say: 'Five verbs this lesson has never put behind aller, and you can build all five without being told. Read what is true before you read the options.',
    groups: [
      {
        label: 'the shop',
        items: [authoredCard(A(503))],
        check: {
          q: 'The shop is not going to open today. Le magasin ___ ouvrir aujourd\'hui.',
          opts: ['ne va pas', 'va ne pas', 'ne va ouvrir pas'],
          correct: 0,
          why: 'Round va, which is the verb that changed for le magasin. Ouvrir is a verb this lesson never showed you and it behaves exactly like the six that it did.',
        },
      },
      {
        label: 'the letter',
        items: [authoredCard(A(507))],
        check: {
          q: 'I am going to write to them tomorrow. Je ___ leur écrire demain.',
          opts: ['vais ne', 'ne vais', 'vais'],
          correct: 2,
          why: 'Nothing negative in the sentence at all, so nothing wraps anything. Aller in the present and the naming form behind it.',
        },
      },
      {
        label: 'the film',
        items: [authoredCard(A(509))],
        check: {
          q: 'She is not going to watch that film. Elle ___ regarder ce film.',
          opts: ['va ne pas', 'ne va regarder pas', 'ne va pas'],
          correct: 2,
          why: 'The same two halves in the same two places, on a verb the lesson has not used. That is the whole of it.',
        },
      },
      {
        label: 'the keys',
        items: [authoredCard(A(512))],
        check: {
          q: 'They are not going to find the keys. Ils ___ trouver les clés.',
          opts: ['ne vont pas', 'ne vont trouver pas', 'vont ne pas'],
          correct: 0,
          why: 'Vont is the form that changed for ils. Trouver is outside both halves and takes no ending.',
        },
      },
      {
        label: 'the answer',
        items: [authoredCard(A(510))],
        check: {
          q: 'We are not going to answer tonight. Nous ___ répondre ce soir.',
          opts: ["n'allons répondre pas", 'allons ne pas', "n'allons pas"],
          correct: 2,
          why: 'The ne shortens in front of the vowel, which is the only thing that is different about nous and vous, and the pas has not moved.',
        },
      },
    ],
    terms: ['whichVerb', 'neverChanges', 'goingTo'],
  },

  /* ── Act 5: out loud ─────────────────────────────────────────────────────*/

  {
    type: 'reading',
    id: READING_SECTION_ID,
    title: 'Friday, And Nobody Asks',
    frSub: 'Vendredi soir',
    layer: 'core',
    questionsInModal: true,
    // ONE BLOCK. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline
    // is silently discarded. PRESENT TENSE AND THE FUTUR PROCHE ONLY: no passé
    // composé anywhere, and no one-word future.
    text: 'Ce soir, je ne vais pas travailler. Je vais rentrer, je vais manger quelque chose, et je vais dormir tôt. Demain, ma collègue va venir à huit heures, parce que nous allons finir le rapport ensemble. Elle dit toujours qu’elle va arriver en avance, et elle arrive toujours en retard. Samedi, je ne vais pas ouvrir mon ordinateur. Mon frère va passer dimanche, et nous allons manger dehors s’il fait beau. Il ne va pas croire que je ne vais pas travailler le week-end.',
    glossary: [
      { word: 'quelque chose', en: 'something', ipa: '/kɛl.kə ʃoz/', note: 'A thing without a name on it. Nothing about it is this lesson.' },
      { word: 'ensemble', en: 'together', ipa: '/ɑ̃.sɑ̃bl/', note: 'Two people doing one thing.' },
      { word: 'en avance', en: 'early, ahead of time', ipa: '/ɑ̃.na.vɑ̃s/', note: 'A third job for en, and it belongs to another lesson.' },
      { word: 'dehors', en: 'outside', ipa: '/də.ɔʁ/', note: 'Where the eating happens, and nothing to do with when.' },
      { word: 'croire', en: 'to believe', ipa: '/kʁwaʁ/', note: 'A naming form behind aller, like all the others here.' },
    ],
    questions: [
      { q: 'The passage holds four negatives. What do all four have in common?', a: 'The two halves are round the form of aller every time, and the second verb is untouched every time: ne vais pas travailler, ne vais pas ouvrir, ne va pas croire, ne vais pas travailler again. Four different verbs behind them and not one of them changes.' },
      { q: '« Il ne va pas croire que je ne vais pas travailler le week-end. » There are two negatives in that sentence. Are they doing the same thing?', a: 'Yes, twice, on two different verbs. The first pair goes round va and leaves croire alone; the second goes round vais and leaves travailler alone. One pair per verb, and the rule is the same both times.' },
      { q: 'Two sentences in the passage are about tomorrow and one is about Saturday. What are the time words doing?', a: 'Fixing the reading. « Je vais manger » on its own could be somebody walking to the kitchen; « demain » or « samedi » on the end makes it a plan and nobody has to decide anything.' },
      { q: '« Elle dit toujours qu’elle va arriver en avance. » Is that a plan or a journey?', a: 'A plan. Arriver is a naming form, not a place, and that is the only thing that decides it. « Elle va en avance » with no verb behind it would be something else entirely.' },
    ],
    terms: ['whichVerb', 'goingTo', 'timeWord'],
  },

  {
    type: 'scenario',
    id: SCENARIO_SECTION_ID,
    title: 'Making A Plan',
    frSub: 'On fait des projets',
    layer: 'core',
    setting: 'The same colleague, the following Monday, and this time she is asking about the weekend rather than about tonight. Every answer is a plan, and two of them are refusals.',
    turns: [
      {
        ai: fr(A(526)),
        en: en(A(526)),
        user: fr(A(527)),
        userEn: en(A(527)),
        // TWO ALTERNATIVES MINIMUM ON EVERY TURN AND A `userEn`.
        // `scenario.logic.test.ts` is a SEED-WIDE test requiring both, and
        // a2.03 shipped three turns with one alt each with every gate green.
        alts: [
          { fr: fr(A(518)), en: en(A(518)) },
          { fr: fr(A(516)).replace('Elle va', 'Je vais'), en: 'I am going to go out tonight.' },
        ],
      },
      {
        ai: fr(A(523)),
        en: en(A(523)),
        user: fr(A(524)),
        userEn: en(A(524)),
        alts: [
          { fr: fr(A(521)), en: en(A(521)) },
          { fr: 'Non, je ne vais pas rester.', en: 'No, I am not going to stay.' },
        ],
      },
      {
        ai: fr(A(528)),
        en: en(A(528)),
        user: fr(A(529)),
        userEn: en(A(529)),
        alts: [
          { fr: 'Oui, je vais venir.', en: 'Yes, I am going to come.' },
          { fr: 'Non, je ne vais pas venir samedi.', en: 'No, I am not going to come on Saturday.' },
        ],
      },
      {
        ai: 'On mange à quelle heure ?',
        en: 'What time are we eating?',
        user: fr(A(520)),
        userEn: en(A(520)),
        alts: [
          { fr: fr(A(517)), en: en(A(517)) },
          { fr: 'On va manger à huit heures.', en: 'We are going to eat at eight.' },
        ],
      },
      {
        ai: 'Et le rapport, il est prêt ?',
        en: 'And the report, is it ready?',
        user: importedFr('fr.a2.negation-et-restriction.164'),
        userEn: importedEn('fr.a2.negation-et-restriction.164'),
        alts: [
          { fr: 'Elle va le finir demain.', en: 'She is going to finish it tomorrow.' },
          { fr: 'Non, elle ne va pas le finir.', en: 'No, she is not going to finish it.' },
        ],
      },
      {
        ai: 'Tu pars quand ?',
        en: 'When are you leaving?',
        user: fr(A(519)),
        userEn: en(A(519)),
        alts: [
          { fr: fr(A(501)), en: en(A(501)) },
          { fr: 'Je ne vais pas partir tout de suite.', en: 'I am not going to leave straight away.' },
        ],
      },
    ],
    terms: ['goingTo', 'whichVerb', 'timeWord'],
  },

  {
    type: 'dictation',
    id: DICTATION_SECTION_ID,
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    // Every row here is in LETTERS mode through the REAL `dicteeMode`, checked
    // in the batch, the merge and the test. Corrections §4, and it costs this
    // lesson five of its eight persons: `ne` and `pas` are five letters, so the
    // negative fits for tu, il and on and goes over for je, elle, nous, vous and
    // ils. The one the learner most wants to produce is one letter out.
    itemIds: DICTEE_IDS,
    say: DICTEE_CLAIM,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], maxPlays: 3, recordingId: 'rec-a2-19-dictee' },
    terms: ['whichVerb', 'goingTo'],
  },

  {
    type: 'practice',
    id: SPEAK_SECTION_ID,
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    // `speak`, NOT `write`. `practice` with skill 'write' draws no writing
    // surface at all. THE RECEPTIVE ROW IS DELIBERATELY ABSENT: a1.18 produces
    // the dropped ne nowhere and a speak mission is a production surface.
    skill: 'speak',
    itemIds: SPEAK_IDS,
    terms: ['goingTo', 'whichVerb'],
  },

  {
    type: 'reviewDeck',
    id: REVIEW_SECTION_ID,
    title: 'The Whole Thing',
    frSub: 'Tout, d’un coup',
    layer: 'core',
    cards: [
      { front: 'Which verb do the two halves go round?', back: REFRAME, say: fr(A(507)) },
      { front: 'What happens to the verb behind aller?', back: `${A213_REFRAME} It takes no ending and agrees with nothing.`, say: fr(A(513)) },
      { front: 'Je vais à Paris. Je vais partir. What is the difference?', back: TRAP_RULE, say: fr(A(501)) },
      { front: 'Where exactly does the pas go?', back: POSITION_CLAIM, say: fr(A(509)) },
      { front: 'You hear « Je vais pas sortir ». What has happened?', back: A118_NE_DROP, say: fr(A(522)) },
      { front: 'Is this the only future in French?', back: OTHER_FUTURE, say: fr(A(514)) },
      { front: 'Nous. What is different about it?', back: 'The ne shortens in front of the vowel and takes the liaison with it. Nothing else about the sentence changes.', say: fr(A(510)) },
    ],
  },

  /* ── Act 6: prove it ─────────────────────────────────────────────────────*/

  {
    type: 'progressCheck',
    id: PROGRESS_SECTION_ID,
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: `${REFRAME} The exam has five rounds. Everything in it you can say out loud today, except one listening question, which is about a sentence you are only being asked to recognise.`,
    stats: [
      { k: 'New verb forms', v: `0. ${Cap(unitRef(ALLER_UNIT))} gave you all six.` },
      { k: 'New endings', v: '0. The verb behind aller never takes one.' },
      { k: 'The rule', v: REFRAME },
      { k: 'Used again in', v: `${Cap(unitRef(PAST_UNIT))}, which is the next lesson.` },
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
        id: 'r1-where-it-goes',
        label: 'Where the two halves go',
        // Round targets are ordered deliberately. drillForRound returns the
        // FIRST target that has a drill and then stops, so the first name here
        // is what a failing learner actually gets, and every round leads on a
        // DIFFERENT trigger. That is what makes all five drills reachable.
        targets: ['err-pas-position', 'err-wrong-verb'],
        say: 'Six on the position. Both verbs are already right in every one of them.',
        questions: [
          {
            q: 'You are not going to leave. Which one is French?',
            format: 'mcq',
            opts: ['Je ne vais partir pas.', 'Je vais ne pas partir.', 'Je ne vais pas partir.', 'Je ne pas vais partir.'],
            correct: 2,
            why: `${POSITION_CLAIM} ${REFRAME}`,
            ref: PAIR_SECTION_ID,
          },
          {
            q: 'Make this negative. Il va partir.',
            format: 'typeIn',
            accept: [fr(A(509)), 'Il ne va pas partir'],
            answer: fr(A(509)),
            why: 'Ne in front of va, pas straight after it, and partir untouched.',
            ref: PAIR_SECTION_ID,
          },
          {
            q: 'Fix this. You mean that you are not going to eat.',
            format: 'errorSpot',
            prompt: WRONG[0]!.wrong,
            accept: [WRONG[0]!.right, 'Je ne vais pas manger'],
            answer: WRONG[0]!.right,
            why: WRONG[0]!.why,
            ref: WHERE_TRAP_SECTION_ID,
          },
          {
            q: 'Which verb do ne and pas go round?',
            format: 'mcq',
            opts: ['The one carrying the meaning', 'Whichever comes last', 'The one that changed for the person', 'Both of them'],
            correct: 2,
            why: `${REFRAME} It is a fact about which word moved rather than a rule about grammar, which is why it can be run mid-sentence.`,
            ref: WHERE_TRAP_SECTION_ID,
          },
          {
            q: 'Make this negative. Tu vas partir.',
            format: 'typeIn',
            accept: [fr(A(508)), 'Tu ne vas pas partir'],
            answer: fr(A(508)),
            why: 'The same two words in the same two places, this time with tu.',
            ref: SIX_SECTION_ID,
          },
          {
            q: 'Fix this. Both halves have travelled together.',
            format: 'errorSpot',
            prompt: WRONG[1]!.wrong,
            accept: [fr(A(507)), 'Je ne vais pas partir'],
            answer: fr(A(507)),
            why: WRONG[1]!.why,
            ref: ENGLISH_SECTION_ID,
          },
        ],
      },
      {
        id: 'r2-which-verb',
        label: 'Which verb',
        targets: ['err-wrong-verb', 'err-second-verb-changed'],
        say: 'Six on the verb the halves go round, and one of them has three verbs in it.',
        questions: [
          {
            q: 'Nous ___ partir.   (and we are not)',
            format: 'typeIn',
            accept: ["n'allons pas", 'n allons pas', 'nallons pas'],
            answer: "n'allons pas",
            why: 'The ne shortens in front of the vowel. The pas has not moved and neither has partir.',
            ref: SIX_SECTION_ID,
          },
          {
            q: 'In « Je ne vais pas travailler », which word changed because the subject is je?',
            format: 'mcq',
            opts: ['travailler', 'ne', 'pas', 'vais'],
            correct: 3,
            why: `Vais, and that is why the two halves are round it. ${REFRAME}`,
            ref: WHERE_TRAP_SECTION_ID,
          },
          {
            q: 'Which of these is NOT true of the verb behind aller?',
            format: 'mcq',
            opts: ['It takes no ending', 'It agrees with nobody', 'It changes for the person', 'It is the naming form'],
            correct: 2,
            why: `${A213_REFRAME} ${Cap(unitRef(ALLER_UNIT))} called it ${A202_NAMING_FORM} about what follows de, and it is the same fact here.`,
            ref: MODALS_SECTION_ID,
          },
          {
            q: 'Make this negative. Elle va sortir ce soir.',
            format: 'typeIn',
            accept: ['Elle ne va pas sortir ce soir.', 'Elle ne va pas sortir ce soir'],
            answer: 'Elle ne va pas sortir ce soir.',
            why: 'Round va, and the time on the end is not part of the decision at all.',
            ref: ANY_SECTION_ID,
          },
          {
            q: 'Fix this. The second verb has been given an ending.',
            format: 'errorSpot',
            prompt: 'Je ne vais pas partirai.',
            accept: [fr(A(507)), 'Je ne vais pas partir'],
            answer: fr(A(507)),
            why: 'Nothing behind aller ever takes an ending. It goes in as the naming form and comes out the same way.',
            ref: ERRORS_SECTION_ID,
          },
          {
            q: `${Cap(unitRef('a2.13'))} taught « Je ne peux pas venir ». What is the same about it?`,
            format: 'mcq',
            opts: ['The verb it wraps is the one that changed', 'It has no negative in it', 'Venir takes an ending', 'The pas comes last'],
            correct: 0,
            why: `${REFRAME} One rule on two different first verbs, and it is about to be three.`,
            ref: MODALS_SECTION_ID,
          },
        ],
      },
      {
        id: 'r3-place-or-plan',
        label: 'A place or a plan',
        targets: ['err-two-jobs', 'err-pas-position'],
        say: `Six on the shape ${unitRef(WHAT_FOLLOWS_UNIT)} named. The verb never changes and the word after it always does.`,
        questions: [
          {
            q: 'Je vais à Paris.',
            format: 'mcq',
            opts: ['I am going to Paris.', 'I am going to leave.', 'I am going to arrive.', 'I went to Paris.'],
            correct: 0,
            why: 'A place behind it, so it is a journey. Nothing about « je vais » had to be decided until the next word arrived.',
            ref: TWICE_TRAP_SECTION_ID,
          },
          {
            q: 'Je vais partir.',
            format: 'mcq',
            opts: ['I am going to Paris.', 'I am leaving for a place.', 'I am going to leave.', 'I go often.'],
            correct: 2,
            why: TRAP_RULE,
            ref: TWICE_TRAP_SECTION_ID,
          },
          {
            q: 'What tells you which job aller is doing?',
            format: 'mcq',
            opts: ['The tense', 'The person', 'How it is said', 'The word straight after it'],
            correct: 3,
            why: `${Cap(unitRef(WHAT_FOLLOWS_UNIT))} named this pattern ${WHAT_FOLLOWS}, on venir de, and ${unitRef(TIME_UNIT)} met it again on il y a. This is the third one.`,
            ref: TWICE_TRAP_SECTION_ID,
          },
          {
            q: 'Which of these is a plan rather than a journey?',
            format: 'mcq',
            opts: ['Ils vont au parc.', 'Ils vont partir.', 'Je vais à Paris.', 'Nous allons au marché.'],
            correct: 1,
            why: 'A naming form behind vont. The other three all have a place behind them.',
            ref: PLACE_SECTION_ID,
          },
          {
            q: 'Je ___ rester ici.   (and I am)',
            format: 'typeIn',
            accept: ['vais'],
            answer: 'vais',
            why: 'Aller in the present, and the naming form goes straight behind it with nothing in between.',
            ref: PLACE_SECTION_ID,
          },
          {
            q: 'Fix this. You mean you are not going to work tomorrow.',
            format: 'errorSpot',
            prompt: WRONG[2]!.wrong,
            accept: [WRONG[2]!.right, 'Tu ne vas pas travailler demain'],
            answer: WRONG[2]!.right,
            why: WRONG[2]!.why,
            ref: ERRORS_SECTION_ID,
          },
        ],
      },
      {
        id: 'r4-anything-slots-in',
        label: 'Anything slots in',
        targets: ['err-second-verb-changed', 'err-two-jobs'],
        say: 'Six on verbs this lesson did not put behind aller. You can answer all six without being told.',
        questions: [
          {
            q: 'They are not going to find the keys. Ils ___ trouver les clés.',
            format: 'typeIn',
            accept: ['ne vont pas'],
            answer: 'ne vont pas',
            why: 'Vont is the form that changed for ils, so both halves go round it and trouver is left alone.',
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: 'We are going to answer tonight. Nous ___ répondre ce soir.',
            format: 'typeIn',
            accept: ['allons'],
            answer: 'allons',
            why: 'No negative in the sentence, so nothing wraps anything, and répondre goes in untouched.',
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: 'Which of these could NOT go behind aller?',
            format: 'mcq',
            opts: ['ouvrir', 'écrire', 'boire', 'partirai'],
            correct: 3,
            why: 'The third one already has an ending on it. Only the naming form goes there, and it goes there whatever the verb is.',
            ref: ERRORS_SECTION_ID,
          },
          {
            q: 'Which verbs can go behind aller?',
            format: 'mcq',
            opts: ['The common ones', 'The ones this lesson showed you', 'Any of them, in the naming form', 'Only verbs of movement'],
            correct: 2,
            why: 'Any of them. That is the whole argument: the slot takes the naming form of anything, so the six in this lesson are examples rather than a list to learn.',
            ref: ANY_SECTION_ID,
          },
          {
            q: 'Fix this. One negative per verb.',
            format: 'errorSpot',
            prompt: 'Je ne vais pas ne pas partir.',
            accept: [fr(A(507)), 'Je ne vais pas partir'],
            answer: fr(A(507)),
            why: 'The two halves are a pair and the pair goes round one verb once. Doubling them says nothing extra and stops being French.',
            ref: ERRORS_SECTION_ID,
          },
          {
            q: 'The film starts in an hour, so we are eating in an hour. Which is right?',
            format: 'mcq',
            opts: [fr(A(520)), 'On va manger il y a une heure.', 'On manger va dans une heure.', 'On va dans une heure manger.'],
            correct: 0,
            why: `Aller, then the naming form, then the time. ${Cap(unitRef(TIME_UNIT))} gave you the time phrase and it has not changed.`,
            ref: WHEN_SECTION_ID,
          },
        ],
      },
      {
        id: 'r5-what-you-hear',
        label: 'What you hear, and what comes next',
        targets: ['err-ne-drop', 'err-pas-position'],
        say: 'Six on the half that disappears in speech, and on the two lessons this one hands things to.',
        questions: [
          {
            q: 'Listen. Which one did you hear?',
            format: 'listenChoose',
            // THE ONE EAR QUESTION IN THE LESSON. The two options differ by a
            // whole unstressed syllable at the front, which is the one thing in
            // this lesson worth asking the ear about. Everything else here is
            // word order, which you can see and cannot hear.
            say: fr(A(522)),
            opts: [fr(A(521)), fr(A(522))],
            correct: 1,
            why: `The ne is gone, which is what ordinary speech does with it. ${A118_NE_DROP}`,
            ref: HEAR_SECTION_ID,
          },
          {
            q: 'You hear « Je vais pas sortir ». What does it mean?',
            format: 'mcq',
            opts: ['I am going to go out.', 'I am not going to go out.', 'I was going to go out.', 'I have to go out.'],
            correct: 1,
            why: 'A negative with the ne dropped. The pas behind vais is carrying the whole thing, which is why missing it costs you the meaning rather than a mark.',
            ref: HEAR_SECTION_ID,
          },
          {
            q: 'Should you drop the ne when you write?',
            format: 'mcq',
            opts: ['Yes, everybody does', 'Only in the negative', 'Only after aller', 'No, writing keeps both halves'],
            correct: 3,
            why: A118_NE_DROP,
            ref: HEAR_SECTION_ID,
          },
          {
            q: 'You are reading and you meet « je partirai ». What has happened?',
            format: 'mcq',
            opts: ['A mistake', 'The second future, which comes later', 'The same thing with an ending', 'A past tense'],
            correct: 1,
            why: OTHER_FUTURE,
            ref: HEAR_SECTION_ID,
          },
          {
            q: 'Write what the neighbour said, with both halves in it. « Je vais pas venir. »',
            format: 'typeIn',
            accept: ['Je ne vais pas venir.', 'Je ne vais pas venir'],
            answer: 'Je ne vais pas venir.',
            why: 'The ne goes back in front of the verb that changed. Nothing else about the sentence moves, because the pas was already where it belongs.',
            ref: HEAR_SECTION_ID,
          },
          {
            q: 'Fix this. She is not going to finish it tonight.',
            format: 'errorSpot',
            prompt: 'Elle ne va finir pas le rapport ce soir.',
            accept: [importedFr('fr.a2.negation-et-restriction.164'), 'Elle ne va pas finir le rapport ce soir'],
            answer: importedFr('fr.a2.negation-et-restriction.164'),
            why: 'A published sentence with the pas put back where the corpus already had it. Round va, and finir outside.',
            ref: ANY_SECTION_ID,
          },
        ],
      },
    ],
    terms: ['whichVerb', 'whatNext', 'neGoes'],
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
    points: [
      `${REFRAME} ${OWNS_CLAIM}`,
      POSITION_CLAIM,
      `${A213_REFRAME} That is ${unitRef(MODAL_UNIT, 'a2')}'s line and it is exactly as true behind aller.`,
      `${PATTERN_CLAIM} ${TRAP_RULE}`,
      DANS_PAIR.why,
      `${NE_DROP} ${Cap(unitRef(NEGATION_UNIT))} said it first and this lesson says nothing different.`,
      `${OTHER_FUTURE} ${PAST_DEFERRAL}`,
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
    title: 'The answer that came out right',
    sections: [SCENE_SECTION_ID, GOALS_SECTION_ID, SHAPE_SECTION_ID],
    milestone: 'You can build a plan out of two words, and you know that only the first of them ever moves.',
    estScreens: 20,
    restPoints: [`${SCENE_SECTION_ID}/after-break`],
  },
  {
    id: 'act2',
    title: 'Where the two halves go',
    sections: [PAIR_SECTION_ID, ENGLISH_SECTION_ID, SIX_SECTION_ID, WHERE_TRAP_SECTION_ID, PRODUCE_SECTION_ID],
    milestone: 'You can make any plan negative, in any person, and put both halves where French puts them rather than where English does.',
    estScreens: 46,
    restPoints: [`${ENGLISH_SECTION_ID}/after`, `${WHERE_TRAP_SECTION_ID}/after`],
  },
  {
    id: 'act3',
    title: 'Anything slots in',
    sections: [ANY_SECTION_ID, MODALS_SECTION_ID, ERRORS_SECTION_ID, WHEN_SECTION_ID],
    milestone: 'You can put any verb in the language behind aller, and you know the rule you just learned is one you have already used once.',
    estScreens: 34,
    restPoints: [`${MODALS_SECTION_ID}/after`],
  },
  {
    id: 'act4',
    title: 'One verb, two jobs',
    sections: [PLACE_SECTION_ID, TWICE_TRAP_SECTION_ID, HEAR_SECTION_ID, UNSEEN_SECTION_ID],
    milestone: 'You can tell a journey from a plan by looking at one word, and you answered for five verbs the lesson never showed you.',
    estScreens: 38,
    restPoints: [`${TWICE_TRAP_SECTION_ID}/after`],
  },
  {
    id: 'act5',
    title: 'Out loud',
    sections: [READING_SECTION_ID, SCENARIO_SECTION_ID, DICTATION_SECTION_ID, SPEAK_SECTION_ID, REVIEW_SECTION_ID],
    milestone: 'You held the conversation the office door lost, and every answer in it was a plan you had to decide the shape of before the verb came out.',
    estScreens: 44,
    restPoints: [`${SCENARIO_SECTION_ID}/after`, `${DICTATION_SECTION_ID}/halfway`],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [PROGRESS_SECTION_ID, QUIZ_SECTION_ID, ROUNDUP_SECTION_ID],
    milestone: 'You built negatives for verbs this lesson never listed, which is the half of it a list could never have taught you.',
    estScreens: 38,
    restPoints: [`${QUIZ_SECTION_ID}/r3-place-or-plan`],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DECK TRANCHES
 *
 *  A tranche releases an item into the SRS, and nothing may be released before
 *  the acts have shown it. One tranche per act, in act order.
 * ═══════════════════════════════════════════════════════════════════════ */

const DECK_TRANCHE: string[][] = [
  // Act 1: the verb, the frame naming form, and the six-person construction.
  [
    'fr.sons.verbes-essentiels.003', 'fr.sons.consonnes.098',
    ...[501, 502, 503, 504, 505, 506].map(A),
    ...[523, 524, 525].map(A),
  ],
  // Act 2: the negative, in full.
  [...[507, 508, 509, 510, 511, 512].map(A)],
  // Act 3: the other verbs, a2.13's card, and the time frames.
  [
    'fr.sons.muettes.037', 'fr.a2.verbes.031', 'fr.sons.verbes-essentiels.041',
    'fr.sons.verbes-essentiels.059', 'fr.sons.verbes-essentiels.010',
    'fr.a2.verbes.347',
    'fr.a2.prepositions-essentielles.184', 'fr.a2.prepositions-essentielles.172',
    ...[513, 514, 515, 516, 517, 518, 519, 520].map(A),
    ...PUBLISHED_NEGATIVE_IDS,
  ],
  // Act 4: the trap, and the register pair.
  [
    'fr.a2.prepositions-essentielles.130', 'fr.a2.verbes.261', 'fr.a2.verbes.266',
    // THE RECEPTIVE ROW is released as a card because a card is something you
    // read, and it is in no drill, no dictée, no speak list and no typed answer.
    ...[521, 522].map(A),
  ],
  // Act 5: the conversation.
  [...[526, 527, 528, 529].map(A)],
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
    id: 'err-pas-position',
    description: 'Puts the pas after the naming form, which is where English puts "not": beside the word carrying the meaning. The error this lesson exists to prevent, and the one an English speaker makes first.',
    detectOn: [PAIR_SECTION_ID, WHERE_TRAP_SECTION_ID, `${QUIZ_SECTION_ID}/r1-where-it-goes`],
    drill: 'drill-where-pas-goes',
    retest: 'retest-where-pas-goes',
  },
  {
    id: 'err-wrong-verb',
    description: 'Sends both halves round the wrong verb, usually as a unit: « je vais ne pas partir ». The learner has the pair and has not worked out that the two words are placed separately, one either side of the verb that changed.',
    detectOn: [SIX_SECTION_ID, PRODUCE_SECTION_ID, `${QUIZ_SECTION_ID}/r2-which-verb`],
    drill: 'drill-which-verb',
    retest: 'retest-which-verb',
  },
  {
    id: 'err-two-jobs',
    description: 'Reads aller plus a place as a plan, or aller plus a naming form as a journey. Doctrine §B.7\'s shape and the third of its four instances, and by this point the learner should be predicting it.',
    detectOn: [PLACE_SECTION_ID, TWICE_TRAP_SECTION_ID, `${QUIZ_SECTION_ID}/r3-place-or-plan`],
    drill: 'drill-place-or-plan',
    retest: 'retest-place-or-plan',
  },
  {
    id: 'err-second-verb-changed',
    description: 'Conjugates the second verb, or gives it an ending it never takes. It comes from treating the construction as one tense with two words in it rather than as one verb followed by a naming form.',
    detectOn: [ANY_SECTION_ID, UNSEEN_SECTION_ID, `${QUIZ_SECTION_ID}/r4-anything-slots-in`],
    drill: 'drill-naming-form',
    retest: 'retest-naming-form',
  },
  {
    id: 'err-ne-drop',
    description: `Misses a negative whose ne has been dropped and hears agreement. Costs comprehension rather than accuracy, and the learner has no way of finding out, which is why ${unitRef('a1.18')} gave it its own drill and why this lesson gives it another.`,
    detectOn: [HEAR_SECTION_ID, `${QUIZ_SECTION_ID}/r5-what-you-hear`],
    drill: 'drill-ne-dropped',
    retest: 'retest-ne-dropped',
  },
];

/* A `LessonDrill` is `sort` with buckets and ITEM IDS, `flashcard` with pairs,
 * or a one-question `mcq` with `q`/`opts`/`correct`/`why`. `items` is a list of
 * corpus ids and NOT a list of questions.                                     */

const DRILLS = [
  {
    id: 'drill-where-pas-goes',
    title: 'Both halves, one place',
    format: 'flashcard' as const,
    coach: `${POSITION_CLAIM} The English is on the front. Say the French out loud before you turn it over.`,
    pairs: [
      ['I am not going to leave.', fr(A(507))],
      ['He is not going to leave.', fr(A(509))],
      ['They are not going to leave.', fr(A(512))],
      ['I am not going to work.', fr(A(524))],
    ] as [string, string][],
  },
  {
    id: 'retest-where-pas-goes',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'She is not going out tonight.',
    opts: ['Elle ne va sortir pas ce soir.', 'Elle ne va pas sortir ce soir.', 'Elle va ne pas sortir ce soir.'],
    correct: 1,
    why: 'Round va, and sortir outside both halves.',
  },
  {
    id: 'drill-which-verb',
    title: 'The one that moved',
    format: 'sort' as const,
    buckets: ['a plan', 'a plan, negative'],
    items: [A(501), A(507), A(503), A(509), A(506), A(512)],
    coach: `${REFRAME} Read the front of each sentence and find the word that changed.`,
  },
  {
    id: 'retest-which-verb',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'In « Nous n\'allons pas partir », which word changed because the subject is nous?',
    opts: ['partir', 'allons', 'pas'],
    correct: 1,
    why: 'Allons. The two halves are round it and partir has not moved.',
  },
  {
    id: 'drill-place-or-plan',
    title: 'A journey or a plan',
    format: 'sort' as const,
    buckets: ['a journey', 'a plan'],
    items: ['fr.a2.prepositions-essentielles.130', A(501), 'fr.a2.verbes.261', A(513), 'fr.a2.verbes.266', A(506)],
    coach: `${TRAP_RULE} ${Cap(unitRef(WHAT_FOLLOWS_UNIT))} named this pattern ${WHAT_FOLLOWS}.`,
  },
  {
    id: 'retest-place-or-plan',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Nous allons manger tôt.',
    opts: ['a journey', 'a plan'],
    correct: 1,
    why: 'A naming form behind allons, so it is a plan. There is no place in the sentence at all.',
  },
  {
    id: 'drill-naming-form',
    title: 'It never takes an ending',
    format: 'flashcard' as const,
    coach: A213_REFRAME,
    pairs: [
      ['I am going to pay.', fr(A(513))],
      ['You are going to work tomorrow.', fr(A(514))],
      ['He is going to come tonight.', fr(A(515))],
      ['We are going to eat early.', fr(A(517))],
    ] as [string, string][],
  },
  {
    id: 'retest-naming-form',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Which one can go behind aller?',
    opts: ['travaillerai', 'travaille', 'travailler'],
    correct: 2,
    why: 'The naming form, always. The other two have already been changed for somebody.',
  },
  {
    id: 'drill-ne-dropped',
    title: 'The half that disappears',
    format: 'sort' as const,
    buckets: ['both halves', 'the ne is gone'],
    items: [A(521), A(522), A(507), A(524)],
    coach: `${A118_NE_DROP} Look for the pas rather than for the ne.`,
  },
  {
    id: 'retest-ne-dropped',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'You hear « On va pas manger ici ». Is that a negative?',
    opts: ['No, there is no ne', 'Yes, and the ne has been dropped', 'Only in writing'],
    correct: 1,
    why: 'The pas behind va is carrying the whole negative. This is what most spoken negatives look like.',
  },
];

/* ─── The reference sheet ──────────────────────────────────────────────────
 *
 * NO `cheatSheet`. ReferenceSheet.tsx draws `teach`, `letterGrid` and `table`
 * and nothing else, so a cheatSheet here would render its title and nothing
 * under it. a1.13 ships exactly that today.
 *
 * A `sheetId` resolves ONLY inside the lesson that declares it (schema.ts:3490,
 * lesson-contract.test.ts:91), so this cannot link a1.18's or a2.02's.
 *
 * THREE COLUMNS. a2.04 measured a FOUR-column table inside a sheet clipping on
 * a Pixel 6, with the horizontal scroll pushing the first column off the other
 * side. Both tables here are three wide, and they are the same three columns
 * twice so the second reads as the first with two words added.               */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    // v2: THIRTY-FOUR CHARACTERS. v1's was 48 and the sheet's own HEADER BAR cut
    // it at 38 while the card that opens it rendered it in full over two lines.
    // Sixth width defect in the band and a field nobody had measured; see
    // SHEET_TITLE_MAX.
    title: 'A plan, and where the negative goes',
    layer: 'deep',
    contains: ['The six', 'The negative', 'The rule', 'Two jobs', 'In speech', 'What is coming'],
    sections: [
      {
        type: 'table',
        id: 'sheet-six',
        title: 'The six',
        layer: 'deep',
        cols: ['Person', 'Aller', 'Then'],
        rows: PERSONS.map((p) => [p.person, p.aller, FRAME_VERB]),
      },
      {
        type: 'table',
        id: 'sheet-negative',
        title: 'And the negative',
        layer: 'deep',
        cols: ['Person', 'Aller', 'Then'],
        rows: PERSONS.map((p) => [p.person, p.not, FRAME_VERB]),
      },
      {
        type: 'teach',
        id: 'sheet-rule',
        title: 'Which verb the halves go round',
        layer: 'deep',
        body: `${REFRAME} ${OWNS_CLAIM} ${POSITION_CLAIM}`,
      },
      {
        type: 'teach',
        id: 'sheet-two-jobs',
        title: 'A place or a plan',
        layer: 'deep',
        body: `${TRAP_RULE} ${PATTERN_CLAIM}`,
      },
      {
        type: 'teach',
        id: 'sheet-speech',
        title: 'What happens in speech',
        layer: 'deep',
        body: `${NE_DROP} ${A118_NE_DROP}`,
      },
      {
        type: 'teach',
        id: 'sheet-coming',
        title: 'What is still coming',
        layer: 'deep',
        body: `${OTHER_FUTURE} ${PAST_DEFERRAL}`,
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ═══════════════════════════════════════════════════════════════════════ */

export const FUTUR_PROCHE_LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  // The lesson's index WITHIN its unit, not its place on the trail.
  seq: 1,
  title: UNIT.sub,
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`) and a2.19 sits at
  // seq 15. The stored value is a fallback and has to agree with what the
  // renderer computes; the batch checks it against the live unit.
  tag: `A2 · LEÇON ${String(UNIT.seq).padStart(2, '0')}`,
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped grammar jargon here in v1 because every
  // guard in the band walked `sections`, `sheets` and `terms` and not this. The
  // walk in the batch, the merge and the test includes `intro` and `overview`,
  // and this field is pinned by its own assertion.
  intro:
    'Somebody is going to ask you what you are doing later, and the answer is two words long: a verb you already have, and the name of whatever you are planning. Nothing about it is new. What is new arrives the moment you want to say you are NOT doing it, because there are two verbs in the sentence now and only one of them takes the negative. English puts it round the other one, quietly enough that you will not notice until the answer comes out meaning the opposite of what you meant.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v3: FOUR THINGS A PIXEL 6 FOUND AND NO HOST GATE COULD.
  //
  //   1  the scene's break card ran past the bottom and took its own Continue
  //      with it. Its right-hand French was 31 characters and wrapped, its
  //      gloss was 27, and its body was 33 words. Ledger §7 and a2.14 §9.1, and
  //      all three are now inside BREAK_BUDGET.
  //   2  fr.a2.verbes.524 lost its « Non, », which is what made the French 31.
  //   3  the reference sheet's own title was 48 characters and its HEADER BAR
  //      cut it at 38, which is a width nobody in this band had measured.
  //
  // The counter moves rather than the body being corrected under v1: Postgres
  // already held v1, and two different bodies under one number is the drift
  // ledger §10 exists to prevent. a2.09 set the precedent.
  //
  //   4  v2 fixed the first three and the card STILL clipped: the break's
  //      `coach` and the scene's `closing` both render on that screen and both
  //      held the reframe, so eleven words printed twice one paragraph apart.
  //      The coach came off. Invariants §7: chrome repeated on one screen.
  version: 5,

  grammarAssumed: [
    'The full present of aller, in six persons, introduced in a2.02',
    'ne … pas round a single verb, and the reduction of the article after it, introduced in a1.18',
    'The nine subject pronouns, and that on takes the il form, introduced in a1.05',
    'That a first verb is followed by the naming form of the second, introduced in a2.13',
    'The naming form after venir de, introduced in a2.02',
    'dans plus a length as a point ahead, introduced in a2.18',
    'à, au and chez in front of a place after a verb of movement, introduced in a2.04',
  ],
  grammarIntroduced: [
    'aller in the present plus an infinitive as the periphrastic future, for a plan or a prediction anchored to the moment of speaking',
    'That the infinitive in that construction is invariable and takes no person marking',
    'That ne … pas encloses the finite auxiliary aller and not the infinitive, extending a1.18\'s rule from a single verb to a two-verb predicate',
    'The elision of ne to n\' before allons and allez, and the loss of the liaison that goes with it',
    'That the same placement rule governs the modal constructions of a2.13 and will govern the compound past of a2.05',
    'aller plus an infinitive against aller plus a locative complement, disambiguated solely by the following constituent',
    'The existence of the synthetic future as a second exponent of futurity, named and reserved beyond this level',
    'ne-drop in colloquial spoken French applied to this construction, for RECEPTION ONLY and produced nowhere',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Deux mots pour un projet, et un seul des deux bouge.',
    minutes: 28,
    difficulty: 2,
    glyph: '🗓️',
    screens: 220,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: FUTUR_PROCHE_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-19-futur-proche.test.ts, because a
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
        id: 'rec-a2-19-six',
        desc:
          'THE SIX PERSONS, ONE TAKE, ONE VOICE, IN THE ORDER THE TABLE PRINTS THEM AND AT AN EVEN PACE: '
          + '« Je vais partir. » « Tu vas partir. » « Il va partir. » « Nous allons partir. » « Vous allez partir. » '
          + '« Ils vont partir. » '
          + 'THE LAST WORD OF ALL SIX MUST BE IDENTICAL. `partir` is the constant and the entire claim of the '
          + 'screen is that it does not move, so a reader who gives it a different shape in the plural is teaching '
          + 'the opposite of what the table says. '
          + 'THE LIAISONS IN nous allons AND vous allez ARE OBLIGATORY: /nu.za.lɔ̃/ and /vu.za.le/, one word each. '
          + 'KEEP THE NASALS CLOSED: allons is /a.lɔ̃/ and vont is /vɔ̃/, with no n sound behind either vowel.',
        clipIds: [501, 502, 503, 504, 505, 506].map((n) => fr(A(n))),
      },
      {
        id: 'rec-a2-19-pair',
        desc:
          'THE AFFIRMATIVE AND THE NEGATIVE, ADJACENT, ONE TAKE, THREE PAIRS: '
          + '« Je vais partir. » then « Je ne vais pas partir. », « Il va partir. » then « Il ne va pas partir. », '
          + '« Ils vont partir. » then « Ils ne vont pas partir. » '
          + 'EACH PAIR IS TWO SYLLABLES APART AND NO MORE, and the learner is being asked to hear WHERE those two '
          + 'syllables land rather than that they are there. Do not lean on « pas » and do not pause before it: it '
          + 'is an ordinary unstressed word sitting between two others. '
          + 'NOTHING MAY BE STRESSED IN THE NEGATIVE THAT IS NOT STRESSED IN THE AFFIRMATIVE. A lift on the two '
          + 'extra words would teach that the negative is louder, and it is not; it is the same sentence with two '
          + 'small words in it.',
        clipIds: [501, 507, 503, 509, 506, 512].map((n) => fr(A(n))),
      },
      {
        id: 'rec-a2-19-where',
        desc:
          'THE AUDIO STEP OF THE POSITION TRAP, AND IT IS A WRONG-THEN-RIGHT TAKE. Four lines, one take, in this '
          + 'order: « Je ne vais manger pas. » then « Je ne vais pas manger. », then « Je vais ne pas partir. » '
          + 'then « Je ne vais pas partir. » '
          + 'READ THE WRONG ONES PLAINLY AND AT ORDINARY PACE rather than comically or hesitantly. They are '
          + 'perfectly pronounceable and they are what a fluent English speaker produces on their first attempt; a '
          + 'reading that signals the error teaches that the error is audible. IT IS NOT AUDIBLE. Both wrong lines '
          + 'hold exactly the same words as the right one beside them, in a different order, and the whole point of '
          + 'the take is that nothing about the sound tells you which is which. '
          + 'DO NOT PAUSE AT THE SEAM. A break before « pas » in the wrong lines would mark it, and the learner '
          + 'would learn to listen for a pause that is not there in the wild.',
        clipIds: [WRONG[0]!.wrong, WRONG[0]!.right, WRONG[1]!.wrong, 'Je ne vais pas partir.'],
      },
      {
        id: 'rec-a2-19-twice',
        desc:
          'THE AUDIO STEP OF THE TWO-JOBS TRAP, FOUR LINES, ONE TAKE: « Je vais à Paris. », « Je vais partir. », '
          + '« Je vais au parc. », « Je vais payer. » '
          + 'THE FIRST TWO WORDS OF ALL FOUR ARE IDENTICAL AND MUST SOUND IDENTICAL. That is the entire point of '
          + 'the take: « je vais » carries no signal at all about which job it is doing, and everything is decided '
          + 'by what comes after it. A reader who puts more weight on « vais » in the plan lines, or pauses after '
          + 'it in the place lines, is inventing a distinction French does not make. '
          + 'THE LIAISON IN « vais à » IS OPTIONAL AND SHOULD NOT BE MADE HERE, because the two place lines and the '
          + 'two plan lines have to be separated by their last word and by nothing else.',
        clipIds: [
          'Je vais à Paris.', 'Je vais partir.', 'Je vais au parc.', 'Je vais payer.',
        ],
      },
      {
        id: 'rec-a2-19-scene',
        desc:
          'THE OFFICE DOOR ON A FRIDAY. She has her coat on, she is halfway out, and the question is ordinary '
          + 'friendliness rather than a request: she is checking whether she will see him. '
          + 'THE LEARNER\'S OWN LINE IS THE TAKE THAT HAS TO BE RIGHT: « Je vais travailler... euh... » is somebody '
          + 'who has the first half of a sentence and is still deciding where the second half goes. The « euh » is '
          + 'the sound of a decision being made too late, not of somebody being unsure of a word, and it must not '
          + 'sound apologetic. '
          + 'HER LAST LINE IS THE EXPENSIVE ONE. « Ah, d\'accord. À ce soir, alors. » is cheerful and completely '
          + 'unremarkable: she has heard a correct sentence and believed it. Any hint of doubt, checking or '
          + 'kindness-about-a-mistake turns the scene into a correction and loses the whole point, which is that '
          + 'nothing visibly went wrong.',
        clipIds: [fr(A(523)), 'Je vais travailler... euh...', fr(A(524)), fr(A(525))],
      },
      {
        id: 'rec-a2-19-dictee',
        desc:
          'THE DICTÉE LINES, ONE TAKE EACH, CLEAN AND UNHURRIED, WITH NO CONTRAST INTENT AT ALL. This is the '
          + 'opposite instruction to rec-a2-19-pair: here the learner is spelling rather than comparing, and a '
          + 'paired reading would hand them the answer. Read each line as though it were the only line. '
          + 'THE TWO NEGATIVES ARE THE ONES THAT MATTER. « Tu ne vas pas partir. » and « Il ne va pas partir. » are '
          + 'the only negatives in the whole lesson short enough to spell letter by letter, and the learner has to '
          + 'hear four separate words between the subject and the naming form. Do not run « ne vas » together and '
          + 'do not run « pas partir » together either. '
          + 'SAY IT THE WAY SOMEBODY WOULD SAY IT, at the pace of somebody dictating a phone number to a friend.',
        clipIds: DICTEE_IDS.map((id) => fr(id)),
      },
      {
        id: 'rec-a2-19-talk',
        desc:
          'THE CONVERSATION, HER LINES ONLY, ONE TAKE, AS ONE CONTINUOUS EXCHANGE RATHER THAN AS SIX SEPARATE '
          + 'PROMPTS. She is the same colleague on the Monday, she has more time, and she is making plans rather '
          + 'than checking on anybody. '
          + '« Tu vas faire quoi ce soir ? » IS THE SPOKEN WORD ORDER and it should sound completely ordinary: the '
          + 'question word is at the end because that is where it goes in speech, and reading it as though it were '
          + 'a careful sentence would make it sound like a lesson. '
          + 'NEITHER « vas » NOR « va » MAY BE STRESSED anywhere in the take. She is not testing him, and a lift on '
          + 'the verb would turn a conversation into an exercise.',
        clipIds: [fr(A(526)), fr(A(523)), fr(A(528)), 'On mange à quelle heure ?', 'Et le rapport, il est prêt ?', 'Tu pars quand ?'],
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

export const FUTUR_PROCHE_ITEM_IDS = ITEM_IDS;
export const FUTUR_PROCHE_DICTEE_IDS = DICTEE_IDS;
export const FUTUR_PROCHE_SPEAK_IDS = SPEAK_IDS;
export const FUTUR_PROCHE_SECTIONS = SECTIONS;
export const FUTUR_PROCHE_ACTS = ACTS;
export const FUTUR_PROCHE_TRANCHES = DECK_TRANCHE;
export const FUTUR_PROCHE_SHEETS = SHEETS;
export const FUTUR_PROCHE_DRILLS = DRILLS;
export const FUTUR_PROCHE_ERROR_TRIGGERS = ERROR_TRIGGERS;
export const FUTUR_PROCHE_SCENE_BEATS = SCENE_BEATS;

/** The sections in which a wrong form may legally appear. Every other string in
 *  the lesson, and the sheet, the terms, the intro and the overview, is checked
 *  against WRONG and against PAS_AFTER_INFINITIVE and must not contain one.
 *
 *  THE SCENE IS NOT ON THIS LIST, and that is deliberate: the thing that goes
 *  wrong in it is a CORRECT sentence meaning the opposite, so the scene needs no
 *  broken French at all and does not get any.
 *
 *  THE PRODUCE AND UNSEEN DRILLS ARE ON IT because every group offers the wrong
 *  order as its distractor, which is the whole question. A drill option is a
 *  place where the error is the content, exactly like a trap card. */
export const WRONG_FORM_SECTIONS = [
  WHERE_TRAP_SECTION_ID, ERRORS_SECTION_ID, ENGLISH_SECTION_ID,
  PRODUCE_SECTION_ID, UNSEEN_SECTION_ID, QUIZ_SECTION_ID,
] as const;
