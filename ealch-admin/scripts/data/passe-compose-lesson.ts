// a2.05.l1, « Le passé composé avec avoir », seq 16 on the A2 trail.
//
// 26 sections, 7 acts, 36 questions, two stepped trapDrills and one reference
// sheet. Every French string on every screen comes from passe-compose-corpus.ts
// or from passe-compose-imported.ts and none is typed twice.
//
// ── WHAT THIS LESSON OWNS ────────────────────────────────────────────────
//
// THE GAP BETWEEN THE TWO WORDS, AND WHAT IS ALLOWED TO SIT IN IT. The learner
// arrives owning every piece: a1.07 gave them all six forms of avoir, a2.01,
// a2.10 and a2.11 gave them the three groups the endings run off, a1.18 gave
// them ne ... pas, and a2.19 told them which of two verbs the two halves wrap.
// What none of that gives them is that a verb is now TWO words with a space in
// the middle, that the space is a real position, and that some things go in it
// and some things do not. They produce « je n'ai mangé pas » and « j'ai mangé
// bien », and both are the same mistake made twice.
//
// The rule is: **one verb, two words, and the small ones go in between**, and
// it survives everything that comes next. a2.20 changes the second word,
// a2.21 changes the first, a2.23 puts a pronoun in front of the pair, and the
// gap is in the same place in all three.
//
// ── ACT WEIGHTS ──────────────────────────────────────────────────────────
//
//   the paradigm      s03, s09, s10 — THREE sections
//   the Owns          act 2 entire (five) plus s17 — SIX sections
//   the trap          act 4, four sections, one of them a stepped trapDrill
//   the closures      act 5, two sections, one per deferral
//
// Doctrine §B.5: if the act structure gives the paradigm more missions than the
// Owns, the wrong lesson got built.
//
// ── WHY 26 AND NOT 24 ────────────────────────────────────────────────────
//
// Ledger §a2.13-0: the 24-section shape is a convention that came from a2.01,
// was copied six times, and was never checked against a subject; there is no
// ceiling in schema.ts and a2.13 shipped 32. THREE deferrals close in this
// lesson — a2.17's adverb placement, a2.18's "ago", and the -er/-é contrast
// a2.19 sits immediately in front of — and each of them is a screen or it is
// nothing. See SECTION_OVERRUN_REASON.

import type {
  Lesson, LessonAct, LessonSection, ErrorTrigger, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  A217_DEFERRAL, A219_REFRAME, ADVERB_PAIR, ADVERB_UNIT, AGO_PAIR,
  AUTHORED_IDS, AVOIR_UNIT, EAR_CLAIM, ENDINGS, ENDINGS_CLAIM, ER_UNIT,
  ETRE_DEFERRAL, ETRE_UNIT, FRAME_PAST, FRAME_VERB, FUTUR_UNIT, GRID_CLAIM,
  IL_NEGATIVE_ID, IRREGULAR_DEFERRAL, IRREGULAR_UNIT, IR_UNIT,
  ITEM_IMPORT_IDS, LESSON_ID, NEGATION_CREDIT, NEGATION_UNIT, OWNS_CLAIM,
  PAIRS, PASSE_COMPOSE, PERSONS, POSITION_CLAIM, PRONOUN_UNIT,
  PUBLISHED_NEGATIVE_IDS, REFRAME, RE_UNIT, SCENE_ERROR, SCENE_ERROR_EN,
  SCENE_STALL, SCHOOL_UNIT, SHEET_ID, SOUND_CLAIM, TENSE_CONTRAST_CLAIM,
  TENSE_PAIR, THE_MOVE, TIME_CLAIM, TIME_UNIT, UNIT, WRONG,
} from './passe-compose-corpus.ts';
import { ALREADY_YOURS, EVIDENCE_LINE, PASSE_COMPOSE_TERMS } from './passe-compose-terms.ts';
import { impCard, importedEn, importedFr, importedIpa, rowCard, sub as impSub } from './passe-compose-imported.ts';
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

const BY_ID = new Map(PASSE_COMPOSE.map((r) => [r.id, r]));

const fr = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.05: ${id} is not an authored row.`);
  return r.fr;
};
const en = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.05: ${id} is not an authored row.`);
  return r.en;
};
const bare = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.05: ${id} is not an authored row.`);
  return r.respell!;
};
const sub = (id: string): string => `[${bare(id)}]`;
const ipaOf = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.05: ${id} is not an authored row.`);
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
export const ENDINGS_SECTION_ID = 's03-endings';
export const PAIR_SECTION_ID = 's04-pair';
export const ENGLISH_SECTION_ID = 's05-english';
export const SIX_SECTION_ID = 's06-six';
export const GAP_TRAP_SECTION_ID = 's07-where';
export const PRODUCE_SECTION_ID = 's08-produce';
export const AVOIR_SECTION_ID = 's09-avoir';
export const GROUPS_SECTION_ID = 's10-groups';
export const NOAGREE_SECTION_ID = 's11-noagree';
export const ERRORS_SECTION_ID = 's12-errors';
export const LISTEN_SECTION_ID = 's13-listen';
export const WHICH_TRAP_SECTION_ID = 's14-which';
export const NOTHEAR_SECTION_ID = 's15-nothear';
export const UNSEEN_SECTION_ID = 's16-unseen';
export const INSIDE_SECTION_ID = 's17-inside';
export const AGO_SECTION_ID = 's18-ago';
export const READING_SECTION_ID = 's19-reading';
export const SCENARIO_SECTION_ID = 's20-scenario';
export const DICTATION_SECTION_ID = 's21-dictation';
export const SPEAK_SECTION_ID = 's22-speak';
export const REVIEW_SECTION_ID = 's23-review';
export const PROGRESS_SECTION_ID = 's24-progress';
export const QUIZ_SECTION_ID = 's25-quiz';
export const ROUNDUP_SECTION_ID = 's26-roundup';

/* ─── The item lists the guards read ───────────────────────────────────────*/

const ITEM_IDS: string[] = [...AUTHORED_IDS, ...ITEM_IMPORT_IDS];

/** Every authored row whose `dicteeMode` is LETTERS **and** which this lesson
 *  is willing to make a production surface, PLUS the `il` negative, which is an
 *  imported published card carrying a dictation drill of its own.
 *
 *  TEN ROWS, AND FOUR OF THEM ARE NEGATIVES, which is where the finding lands:
 *  a2.19 could put only three of eight negatives in LETTERS mode and could not
 *  reach `je` at all. Ne shortens to n' in front of every form of avoir, so six
 *  of eight fit here and the whole `je` pair is spellable. */
const DICTEE_IDS: string[] = [
  ...PASSE_COMPOSE.filter((r) => r.drills.includes('dictation')).map((r) => r.id),
  IL_NEGATIVE_ID,
];

/** Spoken practice draws ONLY from rows carrying `voiceflash`. Scoped to the
 *  teaching roles rather than to every row, because the scene's three lines and
 *  the role play's four are a conversation and belong in the scenario. */
const SPEAK_ROLES = new Set(['shape', 'owns', 'endings', 'inside', 'when', 'tense', 'noagree']);
const SPEAK_IDS: string[] = PASSE_COMPOSE
  .filter((r) => SPEAK_ROLES.has(r.role) && r.drills.includes('voiceflash'))
  .map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SCENE
 *
 *  Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 *  could not finish. He has the first word out of his mouth and committed —
 *  « Hier soir, j'ai... » — and the second one does not arrive. What he reaches
 *  for instead is the present, which is a complete, correct sentence about
 *  tonight, so nothing sounds wrong and his evening gets moved.
 * ═══════════════════════════════════════════════════════════════════════ */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Monday, twenty to nine, the kettle. Your colleague is waiting for it too and has decided to be friendly about it.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'La collègue',
    fr: fr(A(570)),
    en: en(A(570)),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-05-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: SCENE_STALL,
    en: 'Last night, I... I...',
    stage: 'You have the first word out and it is already committed. Avoir has been said, everybody can hear that something happened, and the word that says what is not arriving.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'The kettle clicks off. What comes out?',
    options: [
      {
        fr: fr(A(571)),
        respell: sub(A(571)),
        en: 'the second word, and the evening stays where it was',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: SCENE_ERROR,
        en: SCENE_ERROR_EN,
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'She asks where, you tell her, and the coffee is ready.',
      breaks: 'Nothing sounds wrong. That is the problem.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La collègue',
    fr: fr(A(572)),
    en: en(A(572)),
    stage: 'She has moved your evening to tonight, cheerfully, because that is what the tense told her. Nobody corrected anything, so nothing was learned, and she now thinks you have plans.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'break',
    size: 'lg',
    // a2.19 §4 and ledger §7: the budget on this screen is LINES, not words, and
    // a card carrying BOTH reading rows has almost none to spare. Heading 13,
    // French 28, gloss 24, body 26 words, and NO `coach`: the scene's own
    // `closing` renders on this same screen and a second copy of the reframe is
    // what pushed a2.19's Continue back under the pager bar.
    heading: 'Two words now',
    body: 'You did not get a form wrong. The verb needed a second half, and the sentence went on without it.',
    wrong: {
      fr: SCENE_ERROR,
      ipa: '/ʒə mɑ̃ʒ a.vɛk de.za.mi/',
      respell: '[zhuh mahⁿzh ah-VEK day-za-MEE]',
      en: 'the half that arrived',
    },
    right: {
      fr: fr(A(571)),
      ipa: ipaOf(A(571)),
      respell: sub(A(571)),
      en: 'what you meant',
    },
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the second word ──────────────────────────────────────────────*/

  {
    type: 'scene',
    id: SCENE_SECTION_ID,
    title: 'Yesterday, Or Tonight',
    frSub: 'Lundi, à la machine à café',
    render: 'screens',
    layer: 'core',
    setting: { place: 'The office kitchen', city: 'Lyon', time: 'Monday morning' },
    beats: SCENE_BEATS,
    closing: { text: REFRAME, size: 'md' },
    terms: ['twoWords', 'pastForm'],
  },

  {
    type: 'goals',
    id: GOALS_SECTION_ID,
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    goals: [
      { t: 'Talk about yesterday', s: 'A form of avoir you already have, then the past form of the verb. Two words, and no new endings on the first one.' },
      { t: 'Build the second word from any regular verb', s: ENDINGS_CLAIM },
      { t: 'Put the negative where French puts it', s: OWNS_CLAIM },
      { t: 'Hear the difference between a plan and a memory', s: TENSE_CONTRAST_CLAIM },
    ],
  },

  {
    /* THE ENDINGS GRID, AND IT IS THE ONE tapTable IN THE LESSON.
       Three columns, three rows, one row per group, and every row names the
       unit that taught the group. a2.17 measured a three-column tapTable cell on
       a Pixel 6 at eleven characters and every cell here is inside it.

       A `table` at layer `core` is a density failure (corrections §8), so the
       in-flow version is a tapTable and the full paradigm lives in the sheet. */
    type: 'tapTable',
    id: ENDINGS_SECTION_ID,
    title: 'Three Groups, Three Ends',
    frSub: 'Trois groupes, trois fins',
    layer: 'core',
    say: `${ENDINGS_CLAIM} Tap a row to hear the pair.`,
    cols: ['Group', 'Verb', 'Past'],
    rows: ENDINGS.map((e, i) => ({
      cells: [e.group, e.verb, e.past],
      say: fr(A(552 + i)),
      detail: {
        title: fr(A(552 + i)),
        body: `${sub(A(552 + i))} ${en(A(552 + i))} ${BY_ID.get(A(552 + i))!.notes}`,
        say: fr(A(552 + i)),
      },
    })),
    terms: ['endings', 'pastForm', 'twoWords'],
  },

  /* ── Act 2: what goes in the gap. THE OWNS, and the heaviest act. ────────*/

  {
    /* THE LAYOUT THE BRIEF ASKS THE TEST TO ASSERT.
       « J'ai mangé. » and « Je n'ai pas mangé. » on ONE screen, adjacent, in
       strict pairs, with the two extra words visibly between avoir and the past
       form. Anything that put the negative in a section of its own would have
       hidden the only thing the learner needs to see.

       THE `il` PAIR IS HALF AN IMPORT: fr.sons.masterclass.021 is the one
       respelled passé-composé negative in the corpus and it is in this frame. */
    type: 'examples',
    id: PAIR_SECTION_ID,
    title: 'Both, Side By Side',
    frSub: 'Les deux, côte à côte',
    layer: 'core',
    say: `${REFRAME} Three pairs. Read each one down rather than across, and watch the two extra words land in the same place every time.`,
    examples: [
      { fr: fr(A(541)), en: en(A(541)), note: `${sub(A(541))} Avoir changed for je. Mangé did not, and it is not going to.` },
      { fr: fr(A(547)), en: en(A(547)), note: `${sub(A(547))} ${POSITION_CLAIM}` },
      { fr: fr(A(543)), en: en(A(543)), note: `${sub(A(543))} The same two words with il in front.` },
      { fr: importedFr(IL_NEGATIVE_ID), en: importedEn(IL_NEGATIVE_ID), note: `${impSub(IL_NEGATIVE_ID)} And the same gap, in the same place. This card was in the app years before this lesson was written.` },
      { fr: fr(A(546)), en: en(A(546)), note: `${sub(A(546))} The plural, and mangé still has not moved.` },
      { fr: fr(A(551)), en: en(A(551)), note: `${sub(A(551))} Ne, ont, pas, mangé. Every negative in this lesson is that shape.` },
    ],
    terms: ['inBetween', 'twoWords'],
  },

  {
    type: 'cardDeck',
    id: ENGLISH_SECTION_ID,
    title: 'Where English Puts It',
    frSub: 'Là où l’anglais le met',
    layer: 'core',
    hint: 'Swipe. Six cards, and the last one is the measurement rather than an opinion.',
    cards: [
      { label: 'the English', head: 'I have not eaten.', body: 'English has the same shape and puts the "not" in the same gap: have, not, eaten. You already do this in your own language, which is why it feels wrong rather than difficult when it comes out backwards.' },
      { label: 'what you produce', head: WRONG[0]!.wrong, body: WRONG[0]!.why },
      { label: 'the French', head: WRONG[0]!.right, sub: sub(A(547)), body: `Ne in front of avoir, pas straight after it, and mangé outside both. ${REFRAME}` },
      { label: 'and the other one', head: WRONG[1]!.wrong, body: WRONG[1]!.why },
      { label: 'the rule you have', head: A219_REFRAME, body: NEGATION_CREDIT },
      { label: 'the evidence', head: 'ninety to nothing', body: EVIDENCE_LINE },
    ],
    terms: ['whichVerb', 'inBetween', 'twoWords'],
  },

  {
    type: 'examples',
    id: SIX_SECTION_ID,
    title: 'Six People, One Gap',
    frSub: 'Six personnes, un seul trou',
    layer: 'core',
    say: 'Every person, negative, one after another. Avoir changes six times, the ne shortens four times, and the position of the two extra words does not change once.',
    examples: [
      { fr: fr(A(547)), en: en(A(547)), note: `${sub(A(547))} je, and the ne has already shortened to n'.` },
      { fr: fr(A(548)), en: en(A(548)), note: `${sub(A(548))} tu. It shortens in front of every form of avoir, because every one of them starts on a vowel.` },
      { fr: fr(A(549)), en: en(A(549)), note: `${sub(A(549))} nous, and the liaison z is gone with the ne: noo na, not noo za.` },
      { fr: fr(A(550)), en: en(A(550)), note: `${sub(A(550))} vous, the same shortening and the same lost liaison.` },
      { fr: fr(A(551)), en: en(A(551)), note: `${sub(A(551))} ils, and the gap has held for six people running.` },
    ],
    terms: ['inBetween', 'whichVerb', 'twoWords'],
  },

  {
    /* TRAP ONE: WHAT GOES IN THE GAP.
       The Owns made into a choice. The learner has two words and something to
       place, and the English instinct puts it on the end.

       THE STEPPED SHAPE. `lesson-contract.test.ts` requires every A2 trapDrill
       to walk rule > cards > audio > drill with `swipe`, a `say`, an audio spec
       and a GATED drill step, and `size` COMES OFF (ledger, the trapDrill sweep
       across seq 1..11). a2.18 §3: the cards step's LABEL counts its own array
       and the pager draws one dot per card directly under it. */
    type: 'trapDrill',
    id: GAP_TRAP_SECTION_ID,
    title: 'What Goes In The Gap',
    frSub: 'Ce qui va au milieu',
    layer: 'core',
    swipe: true,
    say: 'Four cards and then six to prove it. Both words are right in every one of the six and the only thing being asked about is where the little one landed.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-05-where', wrongThenRight: true },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'One Gap, One Word' },
      { kind: 'cards', label: 'Four cards', title: 'In It, Or After It' },
      { kind: 'audio', label: 'Hear it', title: 'Wrong, Then Right' },
      { kind: 'drill', label: 'Prove it', title: 'Where Does It Land', gate: true },
    ],
    rule: {
      title: 'It goes in the middle',
      body: `${REFRAME} ${POSITION_CLAIM}`,
    },
    // EVERY CARD'S `fr` IS FRENCH, because the audio step plays each card's `fr`
    // at the section's speeds through a French voice. a2.18 §4 found that by
    // having a card hold an English gloss and being refused.
    cards: [
      { promptLabel: 'the English order', promptSound: WRONG[0]!.wrong, fr: WRONG[0]!.wrong, ipa: '/ʒə ne mɑ̃.ʒe pa/', tip: WRONG[0]!.why },
      { promptLabel: 'the French', promptSound: WRONG[0]!.right, fr: WRONG[0]!.right, ipa: ipaOf(A(547)), tip: 'Ne in front of avoir and pas straight after it. Mangé is outside both and has not been touched.' },
      { promptLabel: 'on the end again', promptSound: WRONG[3]!.wrong, fr: WRONG[3]!.wrong, ipa: '/ʒe mɑ̃.ʒe bjɛ̃/', tip: WRONG[3]!.why },
      { promptLabel: 'in the gap', promptSound: fr(A(558)), fr: fr(A(558)), ipa: ipaOf(A(558)), tip: `The same gap with something other than pas in it. ${Cap(unitRef(ADVERB_UNIT))} taught this placement for one-word verbs and handed the two-word case here.` },
    ],
    // Hand-randomised: MissionRich renders authored order exactly, so a correct
    // answer sitting at index 0 six times running gives itself away.
    drill: [
      { promptSay: fr(A(547)), opts: [WRONG[0]!.wrong, fr(A(547)), "Je pas n'ai mangé."], correct: 1 },
      { promptSay: fr(A(551)), opts: [fr(A(551)), "Ils n'ont mangé pas.", "Ils ont pas n'mangé."], correct: 0 },
      { promptSay: fr(A(558)), opts: [WRONG[3]!.wrong, "Bien j'ai mangé.", fr(A(558))], correct: 2 },
      { promptSay: fr(A(548)), opts: ["Tu n'as mangé pas.", fr(A(548)), "Tu as n'pas mangé."], correct: 1 },
      { promptSay: fr(A(559)), opts: [fr(A(559)), 'Il a fini déjà.', 'Déjà il a fini.'], correct: 0 },
      { promptSay: fr(A(549)), opts: ["Nous n'avons mangé pas.", 'Nous avons ne pas mangé.', fr(A(549))], correct: 2 },
    ],
    terms: ['inBetween', 'whichVerb', 'twoWords'],
  },

  {
    /* PRODUCTION, IN THE FLOW. A groupDrill check is an mcq (ledger §a2.15-6),
       so this is not a free-production surface; what it does is make the learner
       build the sentence about their own yesterday before choosing. The typeIn
       and errorSpot questions in the exam are where they actually produce it. */
    type: 'groupDrill',
    id: PRODUCE_SECTION_ID,
    title: 'Say It About Yesterday',
    frSub: 'Parlez d’hier',
    layer: 'core',
    size: 'lg',
    say: 'Four things that were or were not true of your own yesterday. Build each one out loud before you pick, and put the little word in the gap.',
    groups: [
      {
        label: 'you did not eat out',
        items: [authoredCard(A(541))],
        check: {
          q: 'You did not eat.',
          opts: ["J'ai mangé pas.", "Je n'ai mangé pas.", "Je n'ai pas mangé."],
          correct: 2,
          why: 'Ne in front of ai, pas straight after it, and mangé outside them both.',
        },
      },
      {
        label: 'you worked, and well',
        items: [authoredCard(A(557))],
        check: {
          q: 'You worked well.',
          opts: ["J'ai bien travaillé.", "J'ai travaillé bien.", 'Bien, j\'ai travaillé.'],
          correct: 0,
          why: `A short adverb goes in the same gap the pas goes in. ${Cap(unitRef(ADVERB_UNIT))} put it straight after the verb when there was one verb, and this is where straight-after has gone.`,
        },
      },
      {
        label: 'they did not answer',
        items: [authoredCard(A(556))],
        check: {
          q: 'They did not answer.',
          opts: ["Ils n'ont répondu pas.", "Ils n'ont pas répondu.", "Ils ont pas n'répondu."],
          correct: 1,
          why: 'The plural of the same shape, on an -RE verb. Ont is the word that changed for ils, so the two halves go round ont.',
        },
      },
      {
        label: 'she has already finished',
        items: [authoredCard(A(559))],
        check: {
          q: 'He has already finished.',
          opts: ['Il a fini déjà.', 'Déjà il a fini.', 'Il a déjà fini.'],
          correct: 2,
          why: 'Déjà is a short adverb and it goes where the pas goes. Nothing about the verb group changes it.',
        },
      },
    ],
    terms: ['inBetween', 'twoWords', 'pastForm'],
  },

  /* ── Act 3: two words, and the one you already had ───────────────────────*/

  {
    type: 'examples',
    id: AVOIR_SECTION_ID,
    title: 'Only The First Word Moves',
    frSub: 'Seul le premier bouge',
    layer: 'core',
    say: `${GRID_CLAIM} ${Cap(unitRef(AVOIR_UNIT))} gave you all six of these forms and you are not learning one new one here.`,
    examples: [
      { fr: fr(A(541)), en: en(A(541)), note: `${sub(A(541))} j'ai` },
      { fr: fr(A(542)), en: en(A(542)), note: `${sub(A(542))} tu as` },
      { fr: fr(A(543)), en: en(A(543)), note: `${sub(A(543))} il a, and elle a and on a are the same word.` },
      { fr: fr(A(544)), en: en(A(544)), note: `${sub(A(544))} nous avons, and the liaison pulls a z across.` },
      { fr: fr(A(545)), en: en(A(545)), note: `${sub(A(545))} vous avez, the same liaison.` },
      { fr: fr(A(546)), en: en(A(546)), note: `${sub(A(546))} ils ont, and the second word is where it was six sentences ago.` },
    ],
    terms: ['twoWords', 'pastForm'],
  },

  {
    type: 'examples',
    id: GROUPS_SECTION_ID,
    title: 'One Ending Per Group',
    frSub: 'Une fin par groupe',
    layer: 'core',
    say: `Six sentences, three groups, and the ending is the group rather than the verb. ${Cap(unitRef(ER_UNIT))}, ${unitRef(IR_UNIT)} and ${unitRef(RE_UNIT)} taught you all three of these classes and they have not changed.`,
    examples: [
      { fr: fr(A(552)), en: en(A(552)), note: `${sub(A(552))} ${Cap(unitRef(ER_UNIT, 'a2'))}'s own verb. -er goes to -é, and the two are the same sound.` },
      { fr: fr(A(557)), en: en(A(557)), note: `${sub(A(557))} A four-syllable -ER verb, and the ending does not care how long it is.` },
      { fr: fr(A(553)), en: en(A(553)), note: `${sub(A(553))} ${Cap(unitRef(IR_UNIT, 'a2'))}'s frame verb. Beside its own « Il finit tôt. » it is one verb in two tenses.` },
      { fr: fr(A(555)), en: en(A(555)), note: `${sub(A(555))} A second -IR verb, in another person, so the -i is clearly the group.` },
      { fr: fr(A(554)), en: en(A(554)), note: `${sub(A(554))} ${Cap(unitRef(RE_UNIT, 'a2'))}'s frame verb. The -re comes off and -u goes on.` },
      { fr: fr(A(556)), en: en(A(556)), note: `${sub(A(556))} And a second -RE verb, which behaves exactly like the first.` },
    ],
    terms: ['endings', 'pastForm', 'twoWords'],
  },

  {
    type: 'cardDeck',
    id: NOAGREE_SECTION_ID,
    title: 'It Never Agrees',
    frSub: 'Il ne s’accorde jamais',
    layer: 'core',
    swipe: true,
    hint: 'Swipe. Six cards, and the last two are lessons you have not reached yet.',
    cards: [
      { label: 'the shape', head: fr(A(568)), sub: sub(A(568)), body: 'The apple is feminine and mangé has not moved a letter. After avoir the past form is one shape and it stays that shape.' },
      { label: 'and again', head: fr(A(569)), sub: sub(A(569)), body: 'A feminine subject as well, and still mangé. Not mangée, not mangés, not mangées. Elle a mangé, ils ont mangé, elles ont mangé.' },
      { label: 'where it goes', head: 'the apple is outside', body: 'And this is what stops the rule being « everything goes in the gap ». The thing you ate is not a small word, so it sits after the past form, where objects sit.' },
      { label: 'the wrong one', head: "J'ai mangée une pomme.", body: 'Nobody can hear this and everybody writes it, because English speakers who have learned French adjectives expect agreement to be everywhere. After avoir it is not.' },
      { label: 'the other first word', head: 'a short list of verbs', body: ETRE_DEFERRAL },
      { label: 'and the one case', head: 'that does agree', body: `There is exactly one case where a past form agrees with avoir, and it needs the little words that replace an object. That is ${unitRef(PRONOUN_UNIT)}, five lessons after this one, and until then the rule above has no exceptions you can meet.` },
    ],
    // `laterOn` lives here rather than on a later screen because this is the
    // deck that names a2.20 and a2.21, and a chip is surfaced at the point of
    // use. 12 + 9 + 8 + 4 separators = 33, inside the measured 37.
    terms: ['noAgree', 'pastForm', 'laterOn'],
  },

  {
    /* `commonErrors` WANTS `swipe: true` OR IT DRAWS A BLANK SCREEN. a1.01
       mission 5 and sons.08 mission 22 both shipped without it. */
    type: 'commonErrors',
    id: ERRORS_SECTION_ID,
    title: 'The Four You Will Make',
    frSub: 'Les quatre erreurs',
    layer: 'core',
    swipe: true,
    size: 'lg',
    errors: WRONG.map((w) => ({ wrong: w.wrong, right: w.right, why: w.why })),
    terms: ['inBetween', 'pastForm', 'twoWords'],
  },

  /* ── Act 4: a plan, or a memory. THE TRAP. ───────────────────────────────*/

  {
    type: 'examples',
    id: LISTEN_SECTION_ID,
    title: 'Going To, Or Already Gone',
    frSub: 'Projet ou souvenir',
    layer: 'core',
    say: `${TENSE_CONTRAST_CLAIM} ${Cap(unitRef(FUTUR_UNIT))} was one lesson ago and these two are going to arrive in the same conversation for the rest of your life.`,
    examples: [
      { fr: fr(A(566)), en: en(A(566)), note: `${sub(A(566))} ${Cap(unitRef(FUTUR_UNIT, 'a2'))}'s construction. Vais, and then the naming form.` },
      { fr: fr(A(541)), en: en(A(541)), note: `${sub(A(541))} This lesson. Ai, and then the past form, and the last word is the same sound in both.` },
      { fr: importedFr(TENSE_PAIR.futureId), en: importedEn(TENSE_PAIR.futureId), note: `${impSub(TENSE_PAIR.futureId)} ${TENSE_PAIR.why}` },
      { fr: fr(A(571)), en: en(A(571)), note: `${sub(A(571))} And the same evening, over. Five words in common with the card above it.` },
      { fr: fr(A(567)), en: en(A(567)), note: `${sub(A(567))} With il in front the two little words are va and a, and neither of them is stressed.` },
      { fr: fr(A(543)), en: en(A(543)), note: `${sub(A(543))} Which is the one you have to catch, and it is the shortest word in the sentence.` },
    ],
    terms: ['oneSound', 'whenWord', 'twoWords'],
  },

  {
    /* TRAP TWO, AND IT IS THE SOUND CONTRAST THE BRIEF ASKS FOR AS A LAYOUT.
       The audio step plays each card's `fr` at the section's speeds, so putting
       the four cards in one section is what makes it ONE TAKE and ONE VOICE.
       Apart, the learner compares two performances instead of two little words.

       NOT `wrongThenRight`: all four lines are correct French. Ten A2 traps
       title their audio step « Wrong, Then Right » and for those it is true;
       the ledger's sweep records that a truthful title is required where it is
       not, so this one is titled for what the take actually holds. */
    type: 'trapDrill',
    id: WHICH_TRAP_SECTION_ID,
    title: 'Vais Or Ai',
    frSub: 'Vais ou ai',
    layer: 'core',
    swipe: true,
    say: `Four cards and then six to prove it. Every one of them ends on the same sound and the tense is decided before the verb arrives. ${EAR_CLAIM}`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-05-tense' },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'Listen To The Front' },
      { kind: 'cards', label: 'Four cards', title: 'One Syllable Apart' },
      { kind: 'audio', label: 'Hear it', title: 'The Same Last Word' },
      { kind: 'drill', label: 'Prove it', title: 'Plan Or Memory', gate: true },
    ],
    rule: {
      title: 'The front decides it',
      body: TENSE_CONTRAST_CLAIM,
    },
    cards: [
      { promptLabel: 'a plan', promptSound: fr(A(566)), fr: fr(A(566)), ipa: ipaOf(A(566)), tip: `${Cap(unitRef(FUTUR_UNIT, 'a2'))}'s construction, and the last word is the naming form.` },
      { promptLabel: 'a memory', promptSound: fr(A(541)), fr: fr(A(541)), ipa: ipaOf(A(541)), tip: 'This lesson, and the last word is the past form. It is the same sound and it is a different word.' },
      { promptLabel: 'a plan', promptSound: importedFr(TENSE_PAIR.futureId), fr: importedFr(TENSE_PAIR.futureId), ipa: importedIpa(TENSE_PAIR.futureId), tip: `${Cap(unitRef(FUTUR_UNIT, 'a2'))}'s own published card, from the lesson you did last.` },
      { promptLabel: 'a memory', promptSound: fr(A(571)), fr: fr(A(571)), ipa: ipaOf(A(571)), tip: 'And the same evening in the other direction. Nothing after the second word tells you anything.' },
    ],
    drill: [
      { promptSay: fr(A(541)), opts: ['a plan', 'a memory'], correct: 1 },
      { promptSay: fr(A(566)), opts: ['a plan', 'a memory'], correct: 0 },
      { promptSay: fr(A(567)), opts: ['a memory', 'a plan'], correct: 1 },
      { promptSay: fr(A(543)), opts: ['a memory', 'a plan'], correct: 0 },
      { promptSay: importedFr(TENSE_PAIR.futureId), opts: ['a plan', 'a memory'], correct: 0 },
      { promptSay: fr(A(571)), opts: ['a plan', 'a memory'], correct: 1 },
    ],
    terms: ['oneSound', 'twoWords', 'whenWord'],
  },

  {
    type: 'cardDeck',
    id: NOTHEAR_SECTION_ID,
    title: 'What No Ear Can Do',
    frSub: 'Ce que l’oreille ne peut pas',
    layer: 'core',
    hint: 'Swipe. Five cards, and one of them is about a thing this app deliberately never asks you.',
    cards: [
      { label: 'the pair', head: `${FRAME_VERB} · ${FRAME_PAST}`, sub: '[mahⁿ-ZHAY]', body: SOUND_CLAIM },
      { label: 'and again', head: 'parler · parlé', sub: '[par-LAY]', body: 'One sound, two spellings, and it is true of every single -ER verb in the language. There are more of those than of everything else put together.' },
      { label: 'so this app', head: 'never asks you to hear it', body: 'You will not find a listening question anywhere in this lesson that offers you manger against mangé, because there would be no right answer to it. What you get asked instead is the little word in front, which is a real difference.' },
      { label: 'what you do get', head: 'the dictée', body: 'Spelling is where the difference lives, so spelling is where it is tested. Listen to the front of the sentence, decide the tense, and then write the second word the way that tense wants it.' },
      { label: 'and the time word', head: 'hier, avant-hier', body: TIME_CLAIM },
    ],
    terms: ['oneSound', 'whenWord', 'pastForm'],
  },

  {
    /* THE GENERALISATION TEST, IN THE FLOW.
       Doctrine §B.1: a mission that makes the learner answer for a situation the
       lesson never showed them has taught the system rather than the list. Five
       verbs whose past form this lesson has never printed, one from each group
       and two the learner has to place by ending alone. */
    type: 'groupDrill',
    id: UNSEEN_SECTION_ID,
    title: 'Five You Have Not Met',
    frSub: 'Cinq cas nouveaux',
    layer: 'core',
    size: 'lg',
    say: `Five verbs whose past form this lesson has never printed. You can build all five without being told, because the group decides the ending and you have had the groups since ${unitRef('a2.01')}.`,
    groups: [
      {
        label: 'the keys',
        items: [authoredCard(A(552))],
        check: {
          q: 'Chercher. I looked for the keys. J\'ai ___ mes clés.',
          opts: ['cherché', 'chercher', 'cherchi'],
          correct: 0,
          why: 'An -ER verb, so -é. The first option and the second are the same sound and only one of them can go behind avoir.',
        },
      },
      {
        label: 'the form',
        items: [authoredCard(A(555))],
        check: {
          q: 'Remplir. We filled in the form. Nous avons ___ le formulaire.',
          opts: ['rempli', 'remplu', 'rempler'],
          correct: 0,
          why: 'An -IR verb, so -i. Remplir behaves exactly like finir and choisir, which is the whole point of having groups.',
        },
      },
      {
        label: 'the bus',
        items: [authoredCard(A(554))],
        check: {
          q: 'Attendre. They waited for the bus. Ils ont ___ le bus.',
          opts: ['attendé', 'attendi', 'attendu'],
          correct: 2,
          why: 'An -RE verb, so -u. The -re comes off and the -u goes on, exactly as it does for vendre and répondre.',
        },
      },
      {
        label: 'the film',
        items: [authoredCard(A(557))],
        check: {
          q: 'Regarder. She watched a film. Elle a ___ un film.',
          opts: ['regardée', 'regardé', 'regardi'],
          correct: 1,
          why: 'An -ER verb, so -é, and a feminine subject changes nothing at all after avoir.',
        },
      },
      {
        label: 'the door',
        items: [authoredCard(A(551))],
        check: {
          q: 'Fermer, negative. We did not close the door. Nous ___ la porte.',
          opts: ["n'avons pas fermé", "n'avons fermé pas", 'avons ne pas fermé'],
          correct: 0,
          why: 'The gap again, on a verb the lesson has not used. Ne shortens in front of avons and the pas sits in the gap with it.',
        },
      },
    ],
    terms: ['endings', 'pastForm', 'twoWords'],
  },

  /* ── Act 5: the two things other lessons left here ───────────────────────*/

  {
    /* a2.17's DEFERRAL, CLOSED. Its own wording is quoted verbatim on this
       screen, its unit is named, and the two published cards that prove the
       shape are imported rather than restated. */
    type: 'examples',
    id: INSIDE_SECTION_ID,
    title: 'Not Only Pas',
    frSub: 'Pas seulement « pas »',
    layer: 'core',
    say: `${Cap(unitRef(ADVERB_UNIT))} taught you where a short adverb goes and then said this: « ${A217_DEFERRAL} » This is the tense, and this is the rule. ${ADVERB_PAIR.why}`,
    examples: [
      { fr: fr(A(558)), en: en(A(558)), note: `${sub(A(558))} Bien in the gap, where the pas goes.` },
      { fr: fr(A(559)), en: en(A(559)), note: `${sub(A(559))} Déjà in the gap, on an -IR verb.` },
      { fr: importedFr('fr.sons.alphabet.402'), en: importedEn('fr.sons.alphabet.402'), note: `${impSub('fr.sons.alphabet.402')} A published card, in the gap, on an -RE verb. One of three in the whole corpus that carries a respelling.` },
      { fr: importedFr('fr.sons.voyelles.355'), en: importedEn('fr.sons.voyelles.355'), note: `${impSub('fr.sons.voyelles.355')} And a three-syllable adverb in the same gap, so the gap is clearly not one-syllable-wide.` },
      { fr: fr(A(560)), en: en(A(560)), note: `${sub(A(560))} The same word this build authors, in the nous form.` },
      { fr: fr(A(568)), en: en(A(568)), note: `${sub(A(568))} And the limit of it. An apple is not a small word, so it goes after the past form and not in the gap.` },
    ],
    terms: ['inBetween', 'pastForm', 'twoWords'],
  },

  {
    /* a2.18's DEFERRAL, CLOSED, and it is worth more than a hand-off: that
       lesson's canDo was REWORDED on 2026-08-14 because it promised something
       that needs this tense. Its own sentence and its phrase card are both on
       this screen, beside this build's version of the same fact. */
    type: 'examples',
    id: AGO_SECTION_ID,
    title: 'How Long Ago',
    frSub: 'Il y a combien de temps',
    layer: 'core',
    say: `${AGO_PAIR.why} ${TIME_CLAIM}`,
    examples: [
      { fr: importedFr(AGO_PAIR.theirsPhraseId), en: importedEn(AGO_PAIR.theirsPhraseId), note: `${impSub(AGO_PAIR.theirsPhraseId)} ${Cap(unitRef(TIME_UNIT, 'a2'))}'s phrase card, and this lesson spells it exactly as that one does.` },
      { fr: importedFr(AGO_PAIR.theirsId), en: importedEn(AGO_PAIR.theirsId), note: `${impSub(AGO_PAIR.theirsId)} That lesson's own sentence, and it already holds this tense: it is the one past-referring row ${unitRef('a2.18')} authored and it flagged it for this build by name.` },
      { fr: fr(A(564)), en: en(A(564)), note: `${sub(A(564))} The same shape with an hour instead of three days. On rather than nous, which is ${unitRef('a2.01')}'s rule for the whole level.` },
      { fr: fr(A(562)), en: en(A(562)), note: `${sub(A(562))} And the ordinary way, with a day word rather than a length.` },
      { fr: fr(A(563)), en: en(A(563)), note: `${sub(A(563))} A longer one, spelled the way fr.sons.jours-et-mois.036 spells it.` },
      { fr: fr(A(565)), en: en(A(565)), note: `${sub(A(565))} And a question, with no inversion, which is how it is actually asked.` },
    ],
    terms: ['whenWord', 'twoWords', 'pastForm'],
  },

  /* ── Act 6: out loud ─────────────────────────────────────────────────────*/

  {
    type: 'reading',
    id: READING_SECTION_ID,
    title: 'Monday, At The Kettle',
    frSub: 'Lundi matin',
    layer: 'core',
    questionsInModal: true,
    // ONE BLOCK. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline
    // is silently discarded. REGULAR PAST FORMS ONLY: no irregular one anywhere,
    // no être as the first word, and no past form agreeing with anything.
    text: "Hier, j'ai travaillé jusqu'à sept heures. Après, j'ai mangé avec des amis dans un petit restaurant près du bureau. Nous avons beaucoup parlé et nous avons choisi le menu ensemble. Je n'ai pas payé, parce que Camille a insisté. Ensuite, j'ai cherché mes clés pendant dix minutes. Je n'ai pas trouvé mon parapluie. Ce matin, je n'ai pas encore fini le rapport. J'ai commencé il y a trois jours, et je vais finir ce soir.",
    glossary: [
      { word: "jusqu'à", en: 'until, up to', ipa: '/ʒys.ka/', note: 'A point in time you stop at. Nothing about it is this lesson.' },
      { word: 'ensuite', en: 'then, next', ipa: '/ɑ̃.sɥit/', note: 'The word that puts one finished thing after another, which is what this tense is for.' },
      { word: 'parce que', en: 'because', ipa: '/paʁs kə/', note: 'Two words, and the verb after it behaves exactly as it would anywhere else.' },
      { word: 'insisté', en: 'insisted', ipa: '/ɛ̃.sis.te/', note: 'From insister, an -ER verb, so its past form ends in -é. You could have built it without being told.' },
      { word: 'parapluie', en: 'umbrella', ipa: '/pa.ʁa.plɥi/', note: 'The thing that was not found. It sits after the past form, where objects sit.' },
    ],
    questions: [
      { q: 'The passage holds four negatives. What do all four have in common?', a: "The ne has shortened to n' every time, because every form of avoir starts on a vowel, and the pas is in the gap every time: n'ai pas payé, n'ai pas trouvé, n'ai pas encore fini, and the encore is in the gap with it. Four verbs, four gaps, one position." },
      { q: '« Je n\'ai pas encore fini le rapport. » There are two words in the gap. Is that allowed?', a: 'Yes. The gap takes small words and pas encore is two of them, sitting together in front of the past form. What it does not take is the report, which is what the sentence is about and which sits after fini where it belongs.' },
      { q: 'Count the groups. How many different endings are in the passage?', a: 'Three, and they are the three you have: travaillé, mangé, parlé, payé, cherché, trouvé, commencé and insisté are all -ER verbs ending in -é; choisi and fini are -IR verbs ending in -i; and there is no -RE verb in it at all. Eight of the ten are the commonest group in the language.' },
      { q: 'The last sentence has two tenses in it. What are they and what is the difference?', a: "« J'ai commencé » is over and « je vais finir » has not happened. The two constructions are the same shape: a little word that changes for the person, then a word that does not. The little word is the entire difference. Ai against vais." },
    ],
    terms: ['twoWords', 'inBetween', 'endings'],
  },

  {
    type: 'scenario',
    id: SCENARIO_SECTION_ID,
    title: 'Telling It Back',
    frSub: 'On raconte',
    layer: 'core',
    setting: 'The same colleague, the same kettle, and this time she has more time and is asking about the weekend rather than about last night. Every answer is something that is over.',
    turns: [
      {
        ai: fr(A(573)),
        en: en(A(573)),
        user: fr(A(574)),
        userEn: en(A(574)),
        // TWO ALTERNATIVES MINIMUM ON EVERY TURN AND A `userEn`.
        // `scenario.logic.test.ts` is a SEED-WIDE test requiring both, and
        // a2.03 shipped three turns with one alt each with every gate green.
        alts: [
          { fr: fr(A(557)), en: en(A(557)) },
          { fr: fr(A(562)), en: en(A(562)) },
        ],
      },
      {
        ai: fr(A(570)),
        en: en(A(570)),
        user: fr(A(571)),
        userEn: en(A(571)),
        alts: [
          { fr: fr(A(547)), en: en(A(547)) },
          { fr: fr(A(558)), en: en(A(558)) },
        ],
      },
      {
        ai: fr(A(575)),
        en: en(A(575)),
        user: fr(A(576)),
        userEn: en(A(576)),
        alts: [
          { fr: fr(A(559)), en: en(A(559)) },
          { fr: importedFr('fr.a2.negation-et-restriction.142'), en: importedEn('fr.a2.negation-et-restriction.142') },
        ],
      },
      {
        ai: 'Et Camille, elle a répondu à ton message ?',
        en: 'And Camille, did she reply to your message?',
        user: importedFr('fr.a2.negation-et-restriction.113'),
        userEn: importedEn('fr.a2.negation-et-restriction.113'),
        alts: [
          { fr: fr(A(561)), en: en(A(561)) },
          { fr: fr(A(556)), en: en(A(556)) },
        ],
      },
      {
        ai: fr(A(565)),
        en: en(A(565)),
        user: fr(A(552)),
        userEn: en(A(552)),
        alts: [
          { fr: fr(A(563)), en: en(A(563)) },
          { fr: fr(A(564)), en: en(A(564)) },
        ],
      },
      {
        ai: 'On mange ensemble ce soir, alors ?',
        en: 'Shall we eat together tonight, then?',
        user: fr(A(566)),
        userEn: en(A(566)),
        alts: [
          { fr: fr(A(567)), en: en(A(567)) },
          { fr: fr(A(568)), en: en(A(568)) },
        ],
      },
    ],
    terms: ['twoWords', 'whenWord', 'inBetween'],
  },

  {
    type: 'dictation',
    id: DICTATION_SECTION_ID,
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    // Every row here is in LETTERS mode through the REAL `dicteeMode`, checked
    // in the batch, the merge and the test. THE DICTÉE IS WHERE THIS LESSON'S
    // TRAP IS ACTUALLY TESTED: manger and mangé are one sound, so the ear cannot
    // choose between them and the hand can. What the dictée CANNOT test is the
    // accent itself — `fold` and `normalizeFr` strip it, so « J'ai mange. » is
    // marked right — and that is stated in the report rather than papered over.
    itemIds: DICTEE_IDS,
    say: 'Ten lines, and four of them are negatives. Listen to the front of the sentence before you write anything: the first little word tells you which tense you are in, and the last word sounds the same either way.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], maxPlays: 3, recordingId: 'rec-a2-05-dictee' },
    terms: ['pastForm', 'oneSound', 'twoWords'],
  },

  {
    type: 'practice',
    id: SPEAK_SECTION_ID,
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    // `speak`, NOT `write`. `practice` with skill 'write' draws no writing
    // surface at all, which is why production in this lesson lives in the
    // dictée and in the typed questions of the exam.
    skill: 'speak',
    itemIds: SPEAK_IDS,
    terms: ['twoWords', 'inBetween'],
  },

  {
    type: 'reviewDeck',
    id: REVIEW_SECTION_ID,
    title: 'The Whole Thing',
    frSub: 'Tout, d’un coup',
    layer: 'core',
    cards: [
      { front: 'How many words is the verb now?', back: REFRAME, say: fr(A(541)) },
      { front: 'Where does the pas go?', back: POSITION_CLAIM, say: fr(A(547)) },
      { front: 'Which word do the two halves go round?', back: `${A219_REFRAME} Here that is avoir, because avoir is the one that changed.`, say: fr(A(551)) },
      { front: '-ER, -IR, -RE. What are the three endings?', back: ENDINGS_CLAIM, say: fr(A(554)) },
      { front: 'Elle a mangé une pomme. Why not mangée?', back: 'After avoir the past form does not agree with anybody. One shape, every person, every gender.', say: fr(A(569)) },
      { front: 'What else goes in the gap?', back: `Short adverbs: bien, mal, déjà, encore, beaucoup. ${Cap(unitRef(ADVERB_UNIT))} taught the placement and this is where it went.`, say: fr(A(558)) },
      { front: 'You hear something ending in /mɑ̃.ʒe/. How do you know the tense?', back: SOUND_CLAIM, say: fr(A(566)) },
      { front: 'What is still coming?', back: IRREGULAR_DEFERRAL, say: fr(A(543)) },
      { front: 'Does every verb use avoir?', back: ETRE_DEFERRAL, say: fr(A(546)) },
    ],
  },

  /* ── Act 7: prove it ─────────────────────────────────────────────────────*/

  {
    type: 'progressCheck',
    id: PROGRESS_SECTION_ID,
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: `${REFRAME} The exam has six rounds. Everything in it you can say out loud today, and one round is about a difference you can only see, which is why it is written rather than heard.`,
    stats: [
      { k: 'New verb forms', v: `0. ${Cap(unitRef(AVOIR_UNIT))} gave you all six.` },
      { k: 'New endings', v: `3, and one per group you already had from ${unitRef(ER_UNIT)}, ${unitRef(IR_UNIT)} and ${unitRef(RE_UNIT)}.` },
      { k: 'The rule', v: REFRAME },
      { k: 'Used again in', v: `${Cap(unitRef(IRREGULAR_UNIT))}, ${unitRef(ETRE_UNIT)} and ${unitRef(SCHOOL_UNIT)}.` },
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
    say: 'Six rounds of six. Miss too many in a round and you get a drill before the next one starts.',
    rounds: [
      {
        id: 'r1-the-gap',
        label: 'Where the small words go',
        // Round targets are ordered deliberately. drillForRound returns the
        // FIRST target that has a drill and then stops, so the first name here
        // is what a failing learner actually gets, and every round leads on a
        // DIFFERENT trigger. That is what makes all six drills reachable.
        targets: ['err-pas-outside', 'err-adverb-outside'],
        say: 'Six on the position. Both words are already right in every one of them.',
        questions: [
          {
            q: 'You did not eat. Which one is French?',
            format: 'mcq',
            opts: ["Je n'ai mangé pas.", "Je n'ai pas mangé.", "Je pas n'ai mangé.", "J'ai ne pas mangé."],
            correct: 1,
            why: `${POSITION_CLAIM} ${REFRAME}`,
            ref: PAIR_SECTION_ID,
          },
          {
            q: 'Make this negative. Il a mangé.',
            format: 'typeIn',
            accept: [importedFr(IL_NEGATIVE_ID), "Il n'a pas mangé"],
            answer: importedFr(IL_NEGATIVE_ID),
            why: 'Ne in front of a, pas straight after it, and mangé untouched. The ne shortens because a is a vowel, and it does that in front of every form of avoir.',
            ref: PAIR_SECTION_ID,
          },
          {
            q: 'Fix this. You mean that they did not eat.',
            format: 'errorSpot',
            prompt: "Ils n'ont mangé pas.",
            accept: [fr(A(551)), "Ils n'ont pas mangé"],
            answer: fr(A(551)),
            why: 'The pas went past the gap and landed behind the past form. It belongs straight after ont, which is the word that changed for ils.',
            ref: GAP_TRAP_SECTION_ID,
          },
          {
            q: 'Which of these can go in the gap?',
            format: 'mcq',
            opts: ['une pomme', 'le rapport', 'bien', 'mes clés'],
            correct: 2,
            why: 'Only small words go in the gap: pas, bien, mal, déjà, encore, beaucoup. Everything the sentence is about goes after the past form.',
            ref: INSIDE_SECTION_ID,
          },
          {
            q: 'Make this negative. Nous avons fini.',
            format: 'typeIn',
            accept: ["Nous n'avons pas fini.", "Nous n'avons pas fini", 'Nous n avons pas fini'],
            answer: "Nous n'avons pas fini.",
            why: 'The ne shortens in front of avons and the liaison z goes with it, which changes the sound and not the spelling of anything else.',
            ref: SIX_SECTION_ID,
          },
          {
            q: 'Fix this. Avoir has gone missing.',
            format: 'errorSpot',
            prompt: WRONG[1]!.wrong,
            accept: [fr(A(547)), "Je n'ai pas mangé"],
            answer: fr(A(547)),
            why: WRONG[1]!.why,
            ref: ERRORS_SECTION_ID,
          },
        ],
      },
      {
        id: 'r2-the-endings',
        label: 'One ending per group',
        targets: ['err-wrong-ending', 'err-pas-outside'],
        say: 'Six on the second word, and four of the verbs are ones this lesson never printed a past form for.',
        questions: [
          {
            q: 'Parler. J\'ai ___.',
            format: 'typeIn',
            accept: ['parlé', 'parle'],
            answer: 'parlé',
            why: 'An -ER verb, so -é. The accent cannot be marked wrong by this app, so if you wrote parle you were right about the group and you should still write the accent.',
            ref: GROUPS_SECTION_ID,
          },
          {
            q: 'Choisir. Nous avons ___.',
            format: 'typeIn',
            accept: ['choisi'],
            answer: 'choisi',
            why: 'An -IR verb, so -i. The -r comes off and nothing else happens.',
            ref: GROUPS_SECTION_ID,
          },
          {
            q: 'Vendre. Il a ___.',
            format: 'typeIn',
            accept: ['vendu'],
            answer: 'vendu',
            why: `An -RE verb, so -u. ${Cap(unitRef(RE_UNIT))} taught this group and the past form is the only place its ending is not already visible on the naming form.`,
            ref: GROUPS_SECTION_ID,
          },
          {
            q: 'Grandir. Elle a ___.   (a verb this lesson never showed you)',
            format: 'typeIn',
            accept: ['grandi'],
            answer: 'grandi',
            why: 'You have never seen this one in this tense and you did not need to. It ends in -ir, so its past form ends in -i, and that is the whole decision.',
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: 'Which group does a past form ending in -u come from?',
            format: 'mcq',
            opts: ['-ER', '-IR', '-RE', 'any of them'],
            correct: 2,
            why: ENDINGS_CLAIM,
            ref: ENDINGS_SECTION_ID,
          },
          {
            q: 'Perdre. Which is the past form?',
            format: 'mcq',
            opts: ['perdé', 'perdi', 'perdu', 'perder'],
            correct: 2,
            why: 'An -RE verb like vendre and répondre, so -u. Nothing about the meaning of the verb affects the ending.',
            ref: UNSEEN_SECTION_ID,
          },
        ],
      },
      {
        id: 'r3-er-or-e',
        label: 'Manger or mangé',
        targets: ['err-infinitive-for-past', 'err-wrong-ending'],
        say: 'Six on the pair the ear cannot separate. Every one of these is a spelling question, because there is nothing else it could be.',
        questions: [
          {
            q: "Write it. You ate.   (tu)",
            format: 'typeIn',
            accept: ['Tu as mangé.', 'Tu as mangé', 'Tu as mange', 'Tu as mange.'],
            answer: fr(A(542)),
            why: 'Behind avoir it is the past form, never the naming form. Manger and mangé are one sound and this is the only place the difference shows up.',
            ref: DICTATION_SECTION_ID,
          },
          {
            q: 'Fix this. It sounds exactly right and it is not.',
            format: 'errorSpot',
            prompt: WRONG[2]!.wrong,
            accept: [fr(A(541)), "J'ai mangé", "J'ai mange"],
            answer: fr(A(541)),
            why: WRONG[2]!.why,
            ref: NOTHEAR_SECTION_ID,
          },
          {
            q: 'Why does this app never ask you to hear manger against mangé?',
            format: 'mcq',
            opts: ['It is too hard', 'They are the same sound', 'The recording is not good enough', 'It comes later'],
            correct: 1,
            why: SOUND_CLAIM,
            ref: NOTHEAR_SECTION_ID,
          },
          {
            q: 'Je vais ___.   (I am going to eat)',
            format: 'typeIn',
            accept: ['manger'],
            answer: 'manger',
            why: `Behind aller it is the naming form, which is ${unitRef(FUTUR_UNIT, 'a2')}'s rule and has not changed. Behind avoir it is the past form. Same sound, two different words, and the little word in front decides.`,
            ref: LISTEN_SECTION_ID,
          },
          {
            q: 'Fix this. The second word is in the wrong tense.',
            format: 'errorSpot',
            prompt: "Nous avons parler ensemble.",
            accept: ['Nous avons parlé ensemble.', 'Nous avons parlé ensemble', 'Nous avons parle ensemble'],
            answer: 'Nous avons parlé ensemble.',
            why: 'Avons is a form of avoir, so what follows it is a past form. Parler is the naming form and it goes behind aller, pouvoir and vouloir instead.',
            ref: READING_SECTION_ID,
          },
          {
            q: 'Travailler and travaillé. What is the difference?',
            format: 'mcq',
            opts: ['One is longer to say', 'The stress moves', 'Nothing you can hear', 'One is a question'],
            correct: 2,
            why: 'Nothing at all. /tʁa.va.je/ both times, in every accent of French, and the difference is entirely on the page.',
            ref: NOTHEAR_SECTION_ID,
          },
        ],
      },
      {
        id: 'r4-no-agreement',
        label: 'It never agrees',
        targets: ['err-agreed-past-form', 'err-wrong-ending'],
        say: `Six on the thing that does not happen, because ${unitRef('a2.21')} is about to say the opposite for a short list of verbs and you want this side of it clean.`,
        questions: [
          {
            q: 'Elle a ___ une pomme.',
            format: 'mcq',
            opts: ['mangée', 'mangés', 'mangé', 'mangées'],
            correct: 2,
            why: 'After avoir the past form does not agree with anybody. Not with the subject, not with the apple.',
            ref: NOAGREE_SECTION_ID,
          },
          {
            q: 'Fix this. Somebody has agreed something that does not agree.',
            format: 'errorSpot',
            prompt: "J'ai mangée une pomme.",
            accept: [fr(A(568)), "J'ai mangé une pomme"],
            answer: fr(A(568)),
            why: 'The apple is feminine and the past form does not care. After avoir it is one shape in every person and every gender.',
            ref: NOAGREE_SECTION_ID,
          },
          {
            q: 'Elles ont ___ le musée.   (visiter)',
            format: 'mcq',
            opts: ['visité', 'visitées', 'visitée', 'visiter'],
            correct: 0,
            why: 'A feminine plural subject, and still the bare past form. This is the case English speakers get wrong most, because they have just spent two lessons agreeing adjectives.',
            ref: NOAGREE_SECTION_ID,
          },
          {
            q: 'Where does the apple go?',
            format: 'mcq',
            opts: ['In the gap', 'After the past form', 'Before avoir', 'It can go anywhere'],
            correct: 1,
            why: `${POSITION_CLAIM} An apple is not a small word.`,
            ref: INSIDE_SECTION_ID,
          },
          {
            q: 'Write it. She answered well.',
            format: 'typeIn',
            accept: ['Elle a bien répondu.', 'Elle a bien répondu', 'Elle a bien repondu'],
            answer: fr(A(561)),
            why: 'Bien in the gap, répondu outside it, and nothing agrees with elle.',
            ref: INSIDE_SECTION_ID,
          },
          {
            q: 'Fix this. Two things are wrong and they are the same mistake.',
            format: 'errorSpot',
            prompt: "Elle a mangée bien.",
            accept: ['Elle a bien mangé.', 'Elle a bien mangé', 'Elle a bien mange'],
            answer: 'Elle a bien mangé.',
            why: 'The adverb has gone on the end instead of in the gap, and the past form has been agreed with a subject it does not agree with. Both come from expecting French to behave like the parts of it you already know.',
            ref: ERRORS_SECTION_ID,
          },
        ],
      },
      {
        id: 'r5-plan-or-memory',
        label: 'A plan or a memory',
        targets: ['err-tense-heard', 'err-infinitive-for-past'],
        say: 'Six on the little word in front, and one of them is the only listening question in the lesson.',
        questions: [
          {
            q: 'Listen. Which one did you hear?',
            format: 'listenChoose',
            // THE ONE EAR QUESTION IN THE LESSON. The two options differ by the
            // whole first half, which is a real difference. NO ear question here
            // may offer manger against mangé: they are one sound and marking one
            // right would certify a bug. NO_EAR_QUESTION enforces it.
            say: fr(A(541)),
            opts: [fr(A(566)), fr(A(541))],
            correct: 1,
            why: 'Ai, so it is over. Vais would have made it a plan, and the last word of the two sentences is the same sound either way.',
            ref: WHICH_TRAP_SECTION_ID,
          },
          {
            q: 'Il va manger. When is this?',
            format: 'mcq',
            opts: ['Ahead of him', 'Yesterday', 'Right now', 'Every day'],
            correct: 0,
            why: `Va, so it has not happened. ${Cap(unitRef(FUTUR_UNIT))} taught this one lesson ago and the two constructions are the same shape.`,
            ref: LISTEN_SECTION_ID,
          },
          {
            q: 'Il a mangé. When is this?',
            format: 'mcq',
            opts: ['Ahead of him', 'Right now', 'Over', 'Every day'],
            correct: 2,
            why: 'A, so it is finished. The a and the va are both one short unstressed syllable and they are the entire difference.',
            ref: LISTEN_SECTION_ID,
          },
          {
            q: 'Which word tells you the tense?',
            format: 'mcq',
            opts: ['The last one', 'The first little one', 'The longest one', 'The time word'],
            correct: 1,
            why: TENSE_CONTRAST_CLAIM,
            ref: WHICH_TRAP_SECTION_ID,
          },
          {
            q: 'Write it as something that is over. Je vais travailler.',
            format: 'typeIn',
            accept: ["J'ai travaillé.", "J'ai travaillé", "J'ai travaille"],
            answer: "J'ai travaillé.",
            why: 'Swap the little word in front and put the second one in the past form. Nothing else about the sentence moves.',
            ref: LISTEN_SECTION_ID,
          },
          {
            q: 'Hier, ___ mangé au restaurant.',
            format: 'mcq',
            opts: ["j'ai", 'je vais', 'je', 'je mange'],
            correct: 0,
            why: 'Hier fixes it as over, so the little word in front has to be a form of avoir. « Hier, je vais manger » says something that cannot be true.',
            ref: AGO_SECTION_ID,
          },
        ],
      },
      {
        id: 'r6-how-long-ago',
        label: 'When, and how long ago',
        targets: ['err-adverb-outside', 'err-tense-heard'],
        say: 'Six on the two things other lessons left here: the short adverb in the gap, and saying how long ago something happened.',
        questions: [
          {
            q: 'Fix this. The adverb is outside the gap.',
            format: 'errorSpot',
            prompt: WRONG[3]!.wrong,
            accept: [fr(A(558)), "J'ai bien mangé"],
            answer: fr(A(558)),
            why: WRONG[3]!.why,
            ref: INSIDE_SECTION_ID,
          },
          {
            q: 'Write it. He has already finished.',
            format: 'typeIn',
            accept: ['Il a déjà fini.', 'Il a déjà fini', 'Il a deja fini'],
            answer: fr(A(559)),
            why: `Déjà in the gap. ${Cap(unitRef(ADVERB_UNIT))} put the short ones straight after the verb, and with two words straight-after means in between.`,
            ref: INSIDE_SECTION_ID,
          },
          {
            q: 'On a mangé ___ une heure.   (an hour ago)',
            format: 'typeIn',
            accept: ['il y a'],
            answer: 'il y a',
            why: `${Cap(unitRef(TIME_UNIT))} taught « il y a » as a length of time behind you and could not finish the job, because saying how long ago something happened needs this tense.`,
            ref: AGO_SECTION_ID,
          },
          {
            q: 'Which of these is NOT allowed in the gap?',
            format: 'mcq',
            opts: ['pas', 'déjà', 'beaucoup', 'le rapport'],
            correct: 3,
            why: 'The gap takes small words. A report is the thing the sentence is about and it goes after the past form.',
            ref: INSIDE_SECTION_ID,
          },
          {
            q: 'Fix this. Both halves have travelled together.',
            format: 'errorSpot',
            prompt: "Il a ne pas fini.",
            accept: ['Il n\'a pas fini.', "Il n'a pas fini", 'Il n a pas fini'],
            answer: "Il n'a pas fini.",
            why: 'They are not a unit that moves. The ne goes in front of avoir and shortens against it, and the pas goes in the gap behind it.',
            ref: SIX_SECTION_ID,
          },
          {
            q: 'What arrives in the next lesson?',
            format: 'mcq',
            opts: ['Past forms you cannot guess', 'A new first word', 'Agreement after avoir', 'A second future'],
            correct: 0,
            why: IRREGULAR_DEFERRAL,
            ref: NOAGREE_SECTION_ID,
          },
        ],
      },
    ],
    terms: ['inBetween', 'pastForm', 'oneSound'],
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
      `${A219_REFRAME} That is ${unitRef(FUTUR_UNIT, 'a2')}'s line and it is exactly as true with avoir in front as it was with aller.`,
      ENDINGS_CLAIM,
      'After avoir the past form does not agree with anybody, in any person and any gender.',
      `${ADVERB_PAIR.why} ${A217_DEFERRAL}`,
      AGO_PAIR.why,
      `${IRREGULAR_DEFERRAL} ${ETRE_DEFERRAL} You will want all of it again at ${unitRef(SCHOOL_UNIT)}, where the whole conversation is about what you studied and how it went.`,
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
    title: 'The second word',
    sections: [SCENE_SECTION_ID, GOALS_SECTION_ID, ENDINGS_SECTION_ID],
    milestone: 'You can build the past of any regular verb out of two words, and you know which of the two you already had.',
    estScreens: 22,
    restPoints: [`${SCENE_SECTION_ID}/after-break`],
  },
  {
    id: 'act2',
    title: 'What goes in the gap',
    sections: [PAIR_SECTION_ID, ENGLISH_SECTION_ID, SIX_SECTION_ID, GAP_TRAP_SECTION_ID, PRODUCE_SECTION_ID],
    milestone: 'You can make any of it negative, in any person, and put both halves where French puts them rather than where the end of the sentence feels like it wants them.',
    estScreens: 48,
    restPoints: [`${ENGLISH_SECTION_ID}/after`, `${GAP_TRAP_SECTION_ID}/after`],
  },
  {
    id: 'act3',
    title: 'Two words, and one you already had',
    sections: [AVOIR_SECTION_ID, GROUPS_SECTION_ID, NOAGREE_SECTION_ID, ERRORS_SECTION_ID],
    milestone: 'You can put any regular verb into the past from its group alone, and you know that the second word never changes for anybody.',
    estScreens: 40,
    restPoints: [`${GROUPS_SECTION_ID}/after`],
  },
  {
    id: 'act4',
    title: 'A plan, or a memory',
    sections: [LISTEN_SECTION_ID, WHICH_TRAP_SECTION_ID, NOTHEAR_SECTION_ID, UNSEEN_SECTION_ID],
    milestone: 'You can tell a plan from something that is over by the shortest word in the sentence, and you answered for five verbs the lesson never showed you.',
    estScreens: 42,
    restPoints: [`${WHICH_TRAP_SECTION_ID}/after`],
  },
  {
    id: 'act5',
    title: 'What the last two lessons left here',
    sections: [INSIDE_SECTION_ID, AGO_SECTION_ID],
    milestone: `You closed ${unitRef(ADVERB_UNIT, 'a2')}'s question about where a short adverb goes in a two-word verb, and ${unitRef(TIME_UNIT, 'a2')}'s about how to say how long ago something happened.`,
    estScreens: 18,
    restPoints: [`${INSIDE_SECTION_ID}/after`],
  },
  {
    id: 'act6',
    title: 'Out loud',
    sections: [READING_SECTION_ID, SCENARIO_SECTION_ID, DICTATION_SECTION_ID, SPEAK_SECTION_ID, REVIEW_SECTION_ID],
    milestone: 'You held the conversation the kettle lost, and you spelled the difference the ear cannot hear.',
    estScreens: 48,
    restPoints: [`${SCENARIO_SECTION_ID}/after`, `${DICTATION_SECTION_ID}/halfway`],
  },
  {
    id: 'act7',
    title: 'Prove it',
    sections: [PROGRESS_SECTION_ID, QUIZ_SECTION_ID, ROUNDUP_SECTION_ID],
    milestone: 'You built past forms for verbs this lesson never listed, which is the half of it a list could never have taught you.',
    estScreens: 44,
    restPoints: [`${QUIZ_SECTION_ID}/r4-no-agreement`],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DECK TRANCHES
 *
 *  A tranche releases an item into the SRS, and nothing may be released before
 *  the acts have shown it. One tranche per act, in act order.
 * ═══════════════════════════════════════════════════════════════════════ */

const DECK_TRANCHE: string[][] = [
  // Act 1: the verb, the frame, the six-person construction and the scene.
  [
    'fr.sons.verbes-essentiels.002', 'fr.sons.muettes.037',
    ...[541, 542, 543, 544, 545, 546].map(A),
    ...[570, 571, 572].map(A),
  ],
  // Act 2: the negative, in full, including the published card.
  [IL_NEGATIVE_ID, ...[547, 548, 549, 550, 551].map(A)],
  // Act 3: the three groups and their verbs, and the no-agreement pair.
  [
    'fr.sons.verbes-essentiels.015', 'fr.sons.verbes-essentiels.037',
    'fr.a2.verbes.027', 'fr.a2.verbes.020', 'fr.sons.verbes-essentiels.038',
    'fr.a2.verbes.031',
    ...[552, 553, 554, 555, 556, 557, 568, 569].map(A),
  ],
  // Act 4: the tense contrast, and a past form in the wild.
  ['fr.a2.verbes.527', 'fr.sons.voyelles.445', ...[566, 567].map(A)],
  // Act 5: the two closures, and the words they turn on.
  [
    'fr.sons.mots-essentiels.045', 'fr.sons.mots-essentiels.053',
    'fr.sons.jours-et-mois.025', 'fr.sons.jours-et-mois.027',
    'fr.sons.alphabet.402', 'fr.sons.voyelles.355',
    'fr.a2.prepositions-essentielles.174', 'fr.a2.prepositions-essentielles.186',
    ...[558, 559, 560, 561, 562, 563, 564, 565].map(A),
  ],
  // Act 6: the conversation, and the four published negatives it is built on.
  [...[573, 574, 575, 576].map(A), ...PUBLISHED_NEGATIVE_IDS],
  // Act 7 releases nothing: it is the progress card, the exam and the roundup,
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
 *  round, which is what makes all six drills reachable. a1.05 shipped two dead
 *  drills and a1.07's first draft a third.
 * ═══════════════════════════════════════════════════════════════════════ */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-pas-outside',
    description: 'Puts the pas behind the past form: « je n\'ai mangé pas ». The error this lesson exists to prevent, and the one an English speaker makes first, because the end of the sentence is where the thought finished.',
    detectOn: [PAIR_SECTION_ID, GAP_TRAP_SECTION_ID, `${QUIZ_SECTION_ID}/r1-the-gap`],
    drill: 'drill-the-gap',
    retest: 'retest-the-gap',
  },
  {
    id: 'err-wrong-ending',
    description: 'Gives the past form the wrong group\'s ending: « j\'ai finu », « il a vendi ». It comes from treating the ending as a property of the verb rather than of the class the verb is in.',
    detectOn: [ENDINGS_SECTION_ID, GROUPS_SECTION_ID, `${QUIZ_SECTION_ID}/r2-the-endings`],
    drill: 'drill-endings',
    retest: 'retest-endings',
  },
  {
    id: 'err-infinitive-for-past',
    description: 'Writes the naming form where the past form belongs: « j\'ai manger ». THE ONE NOBODY HEARS THEMSELVES MAKE, because the two are one sound, so it survives every amount of speaking practice and shows up the first time the learner writes anything down.',
    detectOn: [NOTHEAR_SECTION_ID, DICTATION_SECTION_ID, `${QUIZ_SECTION_ID}/r3-er-or-e`],
    drill: 'drill-one-sound',
    retest: 'retest-one-sound',
  },
  {
    id: 'err-agreed-past-form',
    description: `Agrees the past form with the subject or the object: « elle a mangée ». It comes from ${unitRef('a2.03')} and ${unitRef('a2.16')}, where agreeing everything was the correct instinct, and it is about to come back as the correct instinct again at ${unitRef('a2.21')}.`,
    detectOn: [NOAGREE_SECTION_ID, `${QUIZ_SECTION_ID}/r4-no-agreement`],
    drill: 'drill-no-agreement',
    retest: 'retest-no-agreement',
  },
  {
    id: 'err-tense-heard',
    description: 'Hears « je vais manger » as something that happened, or « j\'ai mangé » as a plan. Costs comprehension rather than accuracy, and the learner has no way of finding out: both sentences are correct and both end on the same sound.',
    detectOn: [LISTEN_SECTION_ID, WHICH_TRAP_SECTION_ID, `${QUIZ_SECTION_ID}/r5-plan-or-memory`],
    drill: 'drill-plan-or-memory',
    retest: 'retest-plan-or-memory',
  },
  {
    id: 'err-adverb-outside',
    description: 'Puts a short adverb on the end rather than in the gap: « j\'ai mangé bien ». It is the same error as the pas one and the learner does not usually notice they are the same, which is why the gap is taught as a place rather than as two separate rules.',
    detectOn: [INSIDE_SECTION_ID, `${QUIZ_SECTION_ID}/r6-how-long-ago`],
    drill: 'drill-adverb-gap',
    retest: 'retest-adverb-gap',
  },
];

/* A `LessonDrill` is `sort` with buckets and ITEM IDS, `flashcard` with pairs,
 * or a one-question `mcq` with `q`/`opts`/`correct`/`why`. `items` is a list of
 * corpus ids and NOT a list of questions.                                     */

const DRILLS = [
  {
    id: 'drill-the-gap',
    title: 'Both halves, one place',
    format: 'flashcard' as const,
    coach: `${POSITION_CLAIM} The English is on the front. Say the French out loud before you turn it over.`,
    pairs: [
      ['I did not eat.', fr(A(547))],
      ['He did not eat.', importedFr(IL_NEGATIVE_ID)],
      ['They did not eat.', fr(A(551))],
      ['We did not finish.', fr(A(576))],
    ] as [string, string][],
  },
  {
    id: 'retest-the-gap',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'She did not answer.',
    opts: ["Elle n'a répondu pas.", "Elle n'a pas répondu.", 'Elle a ne pas répondu.'],
    correct: 1,
    why: 'Round a, and répondu outside both halves.',
  },
  {
    id: 'drill-endings',
    title: 'One ending per group',
    format: 'sort' as const,
    buckets: ['-é', '-i', '-u'],
    items: [A(552), A(553), A(554), A(555), A(556), A(557)],
    coach: `${ENDINGS_CLAIM} Read the last word of each sentence and put it in its group.`,
  },
  {
    id: 'retest-endings',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Répondre. Which is the past form?',
    opts: ['répondé', 'répondi', 'répondu'],
    correct: 2,
    why: 'An -RE verb, so -u, exactly like vendre.',
  },
  {
    id: 'drill-one-sound',
    title: 'The one you cannot hear',
    format: 'sort' as const,
    buckets: ['after avoir', 'after aller'],
    items: [A(541), A(566), A(543), A(567)],
    coach: `${SOUND_CLAIM} Look at the first little word, not at the last one.`,
  },
  {
    id: 'retest-one-sound',
    title: 'One more time',
    format: 'mcq' as const,
    q: "J'ai ___ hier.",
    opts: ['travailler', 'travaillé', 'travaille'],
    correct: 1,
    why: 'Behind avoir it is the past form. All three sound the same and only one of them is French here.',
  },
  {
    id: 'drill-no-agreement',
    title: 'It does not move',
    format: 'flashcard' as const,
    coach: 'After avoir the past form is one shape. The English is on the front and the subject changes on every card.',
    pairs: [
      ['She ate an apple.', fr(A(569))],
      ['They answered.', fr(A(556))],
      ['We chose.', fr(A(555))],
      ['She answered well.', fr(A(561))],
    ] as [string, string][],
  },
  {
    id: 'retest-no-agreement',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Elles ont ___ le musée.',
    opts: ['visitées', 'visité', 'visiter'],
    correct: 1,
    why: 'A feminine plural subject and the past form has not moved a letter.',
  },
  {
    id: 'drill-plan-or-memory',
    title: 'The little word in front',
    format: 'sort' as const,
    buckets: ['a plan', 'over'],
    items: [A(566), A(541), A(567), A(543), A(571)],
    coach: TENSE_CONTRAST_CLAIM,
  },
  {
    id: 'retest-plan-or-memory',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'You hear « On va manger ». When?',
    opts: ['It is over', 'It has not happened', 'You cannot tell'],
    correct: 1,
    why: 'Va, so it is ahead. The last word would have sounded identical either way.',
  },
  {
    id: 'drill-adverb-gap',
    title: 'In the gap, not on the end',
    format: 'flashcard' as const,
    coach: `${ADVERB_PAIR.why} The English is on the front.`,
    pairs: [
      ['I ate well.', fr(A(558))],
      ['He has already finished.', fr(A(559))],
      ['She answered well.', fr(A(561))],
      ['We worked a lot.', fr(A(560))],
    ] as [string, string][],
  },
  {
    id: 'retest-adverb-gap',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'We worked a lot.',
    opts: ['Nous avons travaillé beaucoup.', 'Beaucoup nous avons travaillé.', 'Nous avons beaucoup travaillé.'],
    correct: 2,
    why: 'The adverb goes in the gap, exactly where the pas goes.',
  },
];

/* ─── The reference sheet ──────────────────────────────────────────────────
 *
 * NO `cheatSheet`. ReferenceSheet.tsx draws `teach`, `letterGrid` and `table`
 * and nothing else, so a cheatSheet here would render its title and nothing
 * under it. a1.13 ships exactly that today.
 *
 * A `sheetId` resolves ONLY inside the lesson that declares it (schema.ts:3490,
 * lesson-contract.test.ts:91), so this cannot link a1.07's or a2.19's.
 *
 * THREE COLUMNS. a2.04 measured a FOUR-column table inside a sheet clipping on
 * a Pixel 6. All three tables here are three wide and the widest cell is
 * `n'avons pas`, which is eleven, inside both a2.17's tapTable eleven and
 * a2.19's sheet twelve.
 *
 * THE BRIEF CALLS THIS THE MOST RETURNED-TO SHEET IN A2, because a2.20, a2.21
 * and a2.23 all lean on it. Cross-lesson sheets do not exist, so what those
 * lessons inherit is the rule and not the object; this one holds the full
 * paradigm, the negative, the three endings and the position, which is
 * everything the three of them assume.                                       */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    // THIRTY-TWO CHARACTERS. a2.19 §3 measured the sheet's own title cut at 37
    // in the HEADER BAR while rendering in full on the card that opens it.
    title: 'Two words, and what goes between',
    layer: 'deep',
    contains: ['The six', 'The negative', 'The endings', 'The gap', 'One sound', 'What is coming'],
    sections: [
      {
        type: 'table',
        id: 'sheet-six',
        title: 'The six',
        layer: 'deep',
        cols: ['Person', 'Avoir', 'Then'],
        rows: PERSONS.map((p) => [p.person, p.avoir, FRAME_PAST]),
      },
      {
        type: 'table',
        id: 'sheet-negative',
        title: 'And the negative',
        layer: 'deep',
        cols: ['Person', 'Avoir', 'Then'],
        rows: PERSONS.map((p) => [p.person, p.not, FRAME_PAST]),
      },
      {
        type: 'table',
        id: 'sheet-endings',
        title: 'One ending per group',
        layer: 'deep',
        cols: ['Group', 'Verb', 'Past'],
        rows: ENDINGS.map((e) => [e.group, e.verb, e.past]),
      },
      {
        type: 'teach',
        id: 'sheet-gap',
        title: 'What goes in the gap',
        layer: 'deep',
        body: `${REFRAME} ${OWNS_CLAIM} ${POSITION_CLAIM}`,
      },
      {
        type: 'teach',
        id: 'sheet-sound',
        title: 'Manger and mangé',
        layer: 'deep',
        body: `${SOUND_CLAIM} ${TENSE_CONTRAST_CLAIM}`,
      },
      {
        type: 'teach',
        id: 'sheet-noagree',
        title: 'It never agrees with anybody',
        layer: 'deep',
        body: `After avoir the past form is one shape and it stays that shape, in every person and every gender. ${ETRE_DEFERRAL}`,
      },
      {
        type: 'teach',
        id: 'sheet-coming',
        title: 'What is still coming',
        layer: 'deep',
        body: `${IRREGULAR_DEFERRAL} And the one case where a past form does agree with avoir needs the little words that replace an object, which is ${unitRef(PRONOUN_UNIT)}.`,
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ═══════════════════════════════════════════════════════════════════════ */

export const PASSE_COMPOSE_LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  // The lesson's index WITHIN its unit, not its place on the trail.
  seq: 1,
  title: UNIT.sub,
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`) and a2.05 sits at
  // seq 16. The stored value is a fallback and has to agree with what the
  // renderer computes; the batch checks it against the live unit.
  tag: `A2 · LEÇON ${String(UNIT.seq).padStart(2, '0')}`,
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped grammar jargon here in v1 because every
  // guard in the band walked `sections`, `sheets` and `terms` and not this. The
  // walk in the batch, the merge and the test includes `intro` and `overview`,
  // and this field is pinned by its own assertion.
  intro:
    'Somebody is going to ask you about yesterday, and to answer you need a verb that is suddenly two words long. The first one is avoir, which you have had for fifteen lessons and do not have to learn again. The second is built off the verb you mean, and its ending comes straight off the group you already put that verb in. What is new is the space between the two, because it turns out to be a real place: some words go in it, one of them is the negative, and the thing you actually ate does not.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v2: TWO SEED-WIDE TESTS FOUND WHAT ALL THREE OF THIS BUILD'S LAYERS PASSED.
  //
  //   1  `gloss.logic.test.ts` requires every glossary entry to UNDERLINE
  //      something in its own passage. « insister » and « le parapluie » were
  //      glossed and the passage holds « insisté » and « mon parapluie », so
  //      both entries pointed at nothing. Neither the batch, the merge nor this
  //      lesson's own test looks at that, and it is a seed-wide contract no
  //      document in this band mentions.
  //   2  `sons-alphabet.test.ts` found the banned word « honestly » inside an
  //      AUDIO BRIEF. Every house-copy walk in this band is built out of
  //      `sections + sheets + terms + intro + overview + acts + drills` and
  //      stops there, and `audio.recorded[].desc` is authored prose that ships
  //      in the lesson body. Corrections §9's shape in a new place: the jargon
  //      walk did not read `intro`, and this walk did not read `audio`. Widened
  //      in the batch, the merge and the test.
  //
  // The counter moves rather than the body being corrected under v1: Postgres
  // already held v1, and two different bodies under one number is the drift
  // ledger §10 exists to prevent. a2.09 set the precedent.
  // v3: TWO THINGS A PIXEL 6 FOUND AND NO HOST GATE COULD.
  //
  //   1  THE INTRO NAMED A UNIT ID. « ...avoir, which you have had since a1.07 »
  //      is drawn on the lesson COVER, before any card has credited anything,
  //      and measured across the seed a2.05 was the ONLY one of 58 lessons
  //      whose intro does it. Doctrine §B.7 asks for unit ids in the teaching
  //      BODY, where the reference has context; the cover is not that. Reworded
  //      to « for fifteen lessons » and guarded.
  //   2  THE SCENE BUBBLE CLIPPED ITS OWN TAIL, and this build then explained
  //      it wrongly twice before the app was fixed. See the v5 note below and
  //      SCENE_BUBBLE_CLIP; nothing about it is a content rule any more.
  //
  // The counter moves rather than the body being corrected under v2: Postgres
  // already held v2, and two different bodies under one number is the drift
  // ledger §10 exists to prevent.
  // v4: THE v3 FIX FOR THE BUBBLE CLIP DID NOT WORK, AND THE DEVICE SAID SO.
  //      v3 widened the gloss on fr.a2.verbes.572 on the theory that the bubble
  //      hugs its widest child. On a Pixel 6 the bubble DID get wider and the
  //      French still read « Ah, ce soir ». v4 then read the trigger as the
  //      spaced exclamation mark and flattened 572 to a full stop.
  // v5: THAT WAS WRONG TOO, AND THE APP IS NOW FIXED INSTEAD.
  //      A bench rendering five markups against the same strings on a Pixel 6
  //      (ealch-v2/app/bubblelab.tsx) showed the identical string rendering
  //      whole in one position and clipped in another, and all four
  //      punctuations clipping alike: the exclamation mark was an artifact of a
  //      single sample. The real trigger is any sibling in a row beside the
  //      French, and ScenePlayer now keeps the speaker icon off that row. So
  //      572 gets its « ! » back, the content guard is deleted rather than
  //      rewritten, and the lesson stops carrying a workaround for a bug that
  //      no longer exists.
  version: 7,

  grammarAssumed: [
    'The full present of avoir, in six persons, introduced in a1.07',
    'The regular -ER conjugation and its silent endings, introduced in a2.01',
    'The regular -IR conjugation, introduced in a2.10',
    'The regular -RE conjugation, introduced in a2.11',
    'ne … pas round a single finite verb, introduced in a1.18',
    'That ne … pas encloses the finite verb rather than the infinitive in a two-verb predicate, introduced in a2.19',
    'The placement of short adverbs after a simple-tense verb, introduced in a2.17',
    'il y a plus a duration, introduced in a2.18 for reception and deferred here for production',
    'The nine subject pronouns, and that on takes the il form, introduced in a1.05',
  ],
  grammarIntroduced: [
    'The passé composé with avoir as auxiliary, for a completed past event, covering both the English simple past and present perfect',
    'The regular past participle: -er to -é, -ir to -i, -re to -u, one ending per conjugation class',
    'That the participle is invariable after avoir, with no agreement for the subject in any person or gender',
    'That ne … pas encloses the auxiliary and not the participle, extending a2.19\'s rule from a periphrastic future to a compound tense',
    'The elision of ne to n\' before every form of avoir, and the loss of the liaison in n\'avons and n\'avez',
    'The placement of short adverbs between auxiliary and participle, closing the deferral a2.17 made explicit',
    'il y a plus a duration as "ago", in production, closing the deferral a2.18 made and for which its canDo was reworded',
    'The homophony of the -er infinitive and the -é participle, as an orthographic distinction with no phonetic exponent',
    'The auxiliary as the sole exponent of tense in the futur proche / passé composé opposition',
    'Irregular past participles and être as auxiliary are named and reserved for a2.20 and a2.21 respectively',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Deux mots pour le passé, et un trou au milieu.',
    minutes: 32,
    difficulty: 3,
    glyph: '🕰️',
    screens: 262,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PASSE_COMPOSE_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-05-passe-compose.test.ts, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered. Invariants §10: anything the learner must hear as a
    // CONTRAST is ONE TAKE with one voice, because two recordings are two
    // performances and the learner will hear the performance rather than the
    // language. THE BRIEF NAMES TWO TAKES THAT MUST BE SINGLE AND THEY ARE
    // rec-a2-05-pair AND rec-a2-05-tense.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    recorded: [
      {
        id: 'rec-a2-05-six',
        desc:
          'THE SIX PERSONS, ONE TAKE, ONE VOICE, IN THE ORDER THE SHEET PRINTS THEM AND AT AN EVEN PACE: '
          + '« J\'ai mangé. » « Tu as mangé. » « Il a mangé. » « Nous avons mangé. » « Vous avez mangé. » '
          + '« Ils ont mangé. » '
          + 'THE LAST WORD OF ALL SIX MUST BE IDENTICAL. `mangé` is the constant and the entire claim of the '
          + 'screen is that it does not move, so a reader who lengthens it in the plural is teaching the opposite '
          + 'of what the table says. '
          + 'THE LIAISONS IN nous avons AND vous avez ARE OBLIGATORY: /nu.za.vɔ̃/ and /vu.za.ve/, one word each, '
          + 'and so is the one in ils ont, /il.zɔ̃/. KEEP THE NASALS CLOSED: avons is /a.vɔ̃/ and ont is /ɔ̃/, '
          + 'with no n sound behind either vowel.',
        clipIds: [541, 542, 543, 544, 545, 546].map((n) => fr(A(n))),
      },
      {
        id: 'rec-a2-05-pair',
        desc:
          'THE AFFIRMATIVE AND THE NEGATIVE, ADJACENT, ONE TAKE, THREE PAIRS, AND THE BRIEF NAMES THIS TAKE '
          + 'SPECIFICALLY: « J\'ai mangé. » then « Je n\'ai pas mangé. », « Il a mangé. » then « Il n\'a pas '
          + 'mangé. », « Ils ont mangé. » then « Ils n\'ont pas mangé. » '
          + 'RECORDED APART, THE LEARNER COMPARES TWO PERFORMANCES INSTEAD OF TWO SMALL WORDS AND THE ENTIRE '
          + 'TEACHING IS LOST. '
          + 'THE `ai` IS SWALLOWED IN THE NEGATIVE AND MUST STAY SWALLOWED. « je n\'ai pas » is /ʒə ne pa/ at '
          + 'ordinary speed and the learner is being asked to catch the n\' and the pas around something they can '
          + 'barely hear. Do not lean on « pas » and do not pause before it: it is an ordinary unstressed word '
          + 'sitting in a gap. '
          + 'NOTHING MAY BE STRESSED IN THE NEGATIVE THAT IS NOT STRESSED IN THE AFFIRMATIVE.',
        clipIds: [
          fr(A(541)), fr(A(547)), fr(A(543)), importedFr(IL_NEGATIVE_ID), fr(A(546)), fr(A(551)),
        ],
      },
      {
        id: 'rec-a2-05-tense',
        desc:
          'THE FUTUR PROCHE AGAINST THE PASSÉ COMPOSÉ, ONE TAKE, ONE VOICE, RECORDED ADJACENTLY, AND THE BRIEF '
          + 'NAMES THIS TAKE SPECIFICALLY. Four lines in this order: « Je vais manger. » « J\'ai mangé. » '
          + '« Je vais manger avec des amis. » « J\'ai mangé avec des amis. » '
          + 'APART, THE LEARNER COMPARES TWO PERFORMANCES INSTEAD OF TWO AUXILIARIES. '
          + 'THE LAST WORD OF ALL FOUR IS THE SAME SOUND AND MUST BE THE SAME SOUND. /mɑ̃.ʒe/ every time, with '
          + 'no lengthening, no extra breath and no difference of any kind between the naming form and the past '
          + 'form. A reader who distinguishes them is teaching something that is not true and the whole lesson '
          + 'rests on it not being true. '
          + 'THE DIFFERENCE IS ENTIRELY IN /vɛ/ AGAINST /ʒe/, and both are one short unstressed syllable. Do not '
          + 'lift either of them: the learner has to learn to catch an unstressed syllable, and a take that '
          + 'stresses it teaches them to listen for something that will not be there in the wild.',
        clipIds: [
          fr(A(566)), fr(A(541)), importedFr(TENSE_PAIR.futureId), fr(A(571)),
        ],
      },
      {
        id: 'rec-a2-05-where',
        desc:
          'THE AUDIO STEP OF THE GAP TRAP, AND IT IS A WRONG-THEN-RIGHT TAKE. Four lines, one take, in this '
          + 'order: « Je n\'ai mangé pas. » then « Je n\'ai pas mangé. », then « J\'ai mangé bien. » then '
          + '« J\'ai bien mangé. » '
          + 'READ THE WRONG ONES PLAINLY AND AT ORDINARY PACE rather than comically or hesitantly. They are '
          + 'perfectly pronounceable and they are what a fluent English speaker produces on their first attempt; '
          + 'a reading that signals the error teaches that the error is audible. IT IS NOT AUDIBLE. Both wrong '
          + 'lines hold exactly the same words as the right one beside them, in a different order. '
          + 'DO NOT PAUSE AT THE SEAM. A break before « pas » or before « bien » in the wrong lines would mark '
          + 'them, and the learner would learn to listen for a pause that is not there.',
        clipIds: [
          WRONG[0]!.wrong, WRONG[0]!.right, WRONG[3]!.wrong, WRONG[3]!.right,
        ],
      },
      {
        id: 'rec-a2-05-endings',
        desc:
          'THE THREE GROUPS, ONE TAKE, AS THREE PAIRS: « parler » then « J\'ai parlé. », « finir » then '
          + '« Il a fini. », « vendre » then « Il a vendu. » '
          + 'THE FIRST PAIR IS THE ONE THAT MATTERS AND IT IS THE EASIEST ONE TO FAKE: « parler » and '
          + '« parlé » ARE THE SAME SOUND and the take has to prove it rather than hide it. Read them '
          + 'identically. Any difference at all between the two teaches the learner that there is one, and the '
          + 'entire dictée in this lesson exists because there is not. '
          + 'THE OTHER TWO PAIRS DO DIFFER, and audibly: /fi.niʁ/ against /fi.ni/, /vɑ̃dʁ/ against /vɑ̃.dy/. '
          + 'Let them. The contrast between a pair you can hear and a pair you cannot is the point of putting '
          + 'all three in one take.',
        clipIds: ['parler', fr(A(552)), 'finir', fr(A(553)), 'vendre', fr(A(554))],
      },
      {
        id: 'rec-a2-05-scene',
        desc:
          'THE KETTLE ON A MONDAY. She is waiting for it too and has decided to be friendly about it; the '
          + 'question is small talk rather than an enquiry. '
          + 'THE LEARNER\'S OWN LINE IS THE TAKE THAT HAS TO BE RIGHT: « Hier soir, j\'ai... j\'ai... » is '
          + 'somebody who has committed to a tense out loud and cannot produce the word that finishes it. The '
          + 'repeat is not a stammer and it is not embarrassment: it is somebody holding a sentence open while '
          + 'they look for something. Leave a real gap after the second « j\'ai » and let it be uncomfortable. '
          + 'HER LAST LINE IS THE EXPENSIVE ONE. « Ah, ce soir alors ! » is cheerful and completely '
          + 'unremarkable: she has heard a correct sentence and believed it. Any hint of doubt, checking or '
          + 'kindness-about-a-mistake turns the scene into a correction and loses the whole point, which is that '
          + 'nothing visibly went wrong.',
        clipIds: [fr(A(570)), SCENE_STALL, fr(A(571)), SCENE_ERROR, fr(A(572))],
      },
      {
        id: 'rec-a2-05-dictee',
        desc:
          'THE DICTÉE LINES, ONE TAKE EACH, CLEAN AND UNHURRIED, WITH NO CONTRAST INTENT AT ALL. This is the '
          + 'opposite instruction to rec-a2-05-pair and rec-a2-05-tense: here the learner is spelling rather '
          + 'than comparing, and a paired reading would hand them the answer. Read each line as though it were '
          + 'the only line. '
          + 'THE FOUR NEGATIVES ARE THE ONES THAT MATTER. The learner has to hear the n\' and the pas as two '
          + 'separate small words between the subject and the second word, and « n\'ai » and « n\'ont » are '
          + 'very short. Do not run « je n\'ai » together into one syllable and do not run « pas mangé » '
          + 'together either. '
          + 'SAY IT THE WAY SOMEBODY WOULD SAY IT, at the pace of somebody dictating a phone number to a friend.',
        clipIds: DICTEE_IDS.map((id) => (BY_ID.has(id) ? fr(id) : importedFr(id))),
      },
      {
        id: 'rec-a2-05-talk',
        desc:
          'THE CONVERSATION, HER LINES ONLY, ONE TAKE, AS ONE CONTINUOUS EXCHANGE RATHER THAN AS SIX SEPARATE '
          + 'PROMPTS. She is the same colleague, later in the week, with more time. '
          + 'EVERY QUESTION IS ASKED WITHOUT INVERSION and should sound completely ordinary: « Tu as travaillé '
          + 'samedi ? » is a statement with a question mark on it, which is what people say, and reading it as '
          + 'a careful sentence would make it sound like a lesson. '
          + 'NEITHER « as » NOR « a » MAY BE STRESSED anywhere in the take. They are the words carrying the '
          + 'tense and the learner has to get used to catching them unstressed, because that is the only way '
          + 'they will ever hear them.',
        clipIds: [
          fr(A(573)), fr(A(570)), fr(A(575)),
          'Et Camille, elle a répondu à ton message ?', fr(A(565)),
          'On mange ensemble ce soir, alors ?',
        ],
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

export const PASSE_COMPOSE_ITEM_IDS = ITEM_IDS;
export const PASSE_COMPOSE_DICTEE_IDS = DICTEE_IDS;
export const PASSE_COMPOSE_SPEAK_IDS = SPEAK_IDS;
export const PASSE_COMPOSE_SECTIONS = SECTIONS;
export const PASSE_COMPOSE_ACTS = ACTS;
export const PASSE_COMPOSE_TRANCHES = DECK_TRANCHE;
export const PASSE_COMPOSE_SHEETS = SHEETS;
export const PASSE_COMPOSE_DRILLS = DRILLS;
export const PASSE_COMPOSE_ERROR_TRIGGERS = ERROR_TRIGGERS;
export const PASSE_COMPOSE_SCENE_BEATS = SCENE_BEATS;

/** The sections in which a wrong form may legally appear. Every other string in
 *  the lesson, and the sheet, the terms, the intro and the overview, is checked
 *  against WRONG and against the four shapes and must not contain one.
 *
 *  THE SCENE IS NOT ON THIS LIST. What goes wrong in it is a CORRECT sentence in
 *  the wrong tense, so the scene needs no broken French at all and does not get
 *  any: « Je mange avec des amis. » is perfectly good French about tonight.
 *
 *  THE PRODUCE AND UNSEEN DRILLS ARE ON IT because every group offers the wrong
 *  order or the wrong ending as its distractor, which is the whole question. A
 *  drill option is a place where the error is the content, exactly like a trap
 *  card. */
export const WRONG_FORM_SECTIONS = [
  GAP_TRAP_SECTION_ID, ERRORS_SECTION_ID, ENGLISH_SECTION_ID,
  PRODUCE_SECTION_ID, UNSEEN_SECTION_ID, NOAGREE_SECTION_ID, QUIZ_SECTION_ID,
] as const;
