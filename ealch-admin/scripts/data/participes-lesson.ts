// a2.20.l1, « Participes passés irréguliers », seq 17 on the A2 trail.
//
// 27 sections, 6 acts, 36 questions, two stepped trapDrills and one reference
// sheet. Every French string on every screen comes from participes-corpus.ts or
// from participes-imported.ts and none is typed twice.
//
// ── WHAT THIS LESSON OWNS ────────────────────────────────────────────────
//
// THE ORGANISATION. The brief opens by saying that this is the most boring
// possible lesson and that its job is to stop being one, and it is right about
// why: thirty-three items that must be memorised is a list, and a list is not a
// lesson. What makes it a lesson is that thirty-three is not the number. FIVE
// is: four groups by ending and one residue of five, and a learner who sorts is
// doing something quite different from a learner who memorises.
//
// It is the fourth kind of thing doctrine §B.5 says a grammar lesson can own —
// THE FAMILY, a pattern that generalises to items the lesson never taught — and
// it is the same move a2.15 made eight lessons earlier with verb families. That
// lesson is named by unit id and its own reframe is quoted verbatim, so the
// learner recognises the strategy rather than meeting it fresh.
//
// ── ACT WEIGHTS ──────────────────────────────────────────────────────────
//
//   the recap of a2.05   act 2, TWO sections
//   the Owns             act 3, NINE sections — five groups, the compound
//                        payoff, the hand-back of batch 1, and the boundary
//   the traps            act 4, five sections, two of them stepped trapDrills
//
// Doctrine §B.5: if the act structure gives the paradigm more missions than the
// Owns, the wrong lesson got built. Nine against two, asserted in all three
// layers.
//
// ── WHY 27 AND NOT 24 ────────────────────────────────────────────────────
//
// Because five groups need five screens. A group whose members are not visible
// together is a list with a heading on it, which is the exact failure the brief
// names. Ledger §a2.13-0: the 24-section shape came from a2.01, was copied six
// times, was never checked against a subject, and there is no ceiling in
// schema.ts; a2.13 shipped 32 and a2.05 shipped 26. See SECTION_OVERRUN_REASON.
//
// ── AND WHERE THE BRIEF'S SECTION ADVICE IS WRONG ────────────────────────
//
// The brief asks for "tapTable with a row per participle, grouped by family" and
// calls it "exactly right for forty items". It is not: `tapTable` is not in
// `ownsLayout()` (corrections §8), so it renders inside a scrolling page, and
// a2.11 measured six rows as the Pixel 6 ceiling. A thirty-three-row tapTable is
// the list wearing a section type, which is the thing the brief itself warns
// against two paragraphs later. The groups are `groupDrill`s instead — which DO
// own their layout, which show every member of one group together, and which end
// in a check — and the one tapTable in the lesson has five rows, one per group.

import type {
  Lesson, LessonAct, LessonSection, ErrorTrigger, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  A205_REFRAME, A215_CREDIT, A215_REFRAME, ALLER_UNIT, ALSO_A_WORD,
  ALSO_A_WORD_CLAIM, AUTHORED_IDS, BATCH1_UNITS, CIRCUMFLEX, DERIVABLE,
  DERIVABLE_CLAIM, DERIVED_ONLY, ETRE_DEFERRAL, ETRE_UNIT, EU, FAIRE_UNIT,
  FAMILY_UNIT, FORMS, GROUP_CLAIM, GROUP_SIZES, ITEM_IMPORT_IDS, LESSON_ID,
  MODAUX_UNIT, ODD_CLAIM, PARTICIPES, PASSE_UNIT, PRONOUN_UNIT, REFLEXIVE_UNIT,
  REFRAME, SAVOIR_UNIT, SCENE_ERROR, SCENE_ERROR_EN, SCENE_STALL, SCHOOL_UNIT,
  SHEET_ID, THE_MOVE, UNIT, WRONG, formsOf, namingId,
} from './participes-corpus.ts';
import { ALREADY_YOURS, EVIDENCE_LINE, PARTICIPES_TERMS } from './participes-terms.ts';
import { importedEn, importedFr, importedIpa, rowCard, sub as impSub } from './participes-imported.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ─── Reading the authored rows ────────────────────────────────────────────
 *
 * The lesson NEVER types a French string that is also a corpus row. `fr(id)`
 * and `en(id)` read it, so a screen and the card the learner is scored on cannot
 * drift apart. a2.13 §6.2 shipped a grid that disagreed with its own cards and
 * every host gate was green.                                                 */

const BY_ID = new Map(PARTICIPES.map((r) => [r.id, r]));

const fr = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.20: ${id} is not an authored row.`);
  return r.fr;
};
const en = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.20: ${id} is not an authored row.`);
  return r.en;
};
const bare = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.20: ${id} is not an authored row.`);
  return r.respell!;
};
const sub = (id: string): string => `[${bare(id)}]`;
const ipaOf = (id: string): string => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.20: ${id} is not an authored row.`);
  return r.ipa!;
};

const A = (n: number) => `fr.a2.verbes.${n}`;

/** Strips a sentence-final full stop, for the places a French line is quoted
 *  INSIDE a question that has its own punctuation. FOUND ON A PIXEL 6: the eu
 *  listening asked « J'ai bu un café. against J'ai eu peur.. » because both
 *  quoted lines already ended in one, and nothing in any layer looked at it. */
const noStop = (s: string): string => s.replace(/\.$/, '');

/** The row that teaches a past form, by the form. Throws for `assis` and
 *  `mort`, which are the two taught from an imported card. */
const rowOf = (past: string): string => {
  const f = FORMS.find((x) => x.past === past);
  if (!f?.rowId) throw new Error(`a2.20: « ${past} » has no authored row.`);
  return f.rowId;
};

/** A groupDrill item at `lg` for an AUTHORED row. MissionRich.tsx:439 draws
 *  `fr`, `ipa` and `note` and nothing else at this size, so the respelling and
 *  the gloss go in `note`. Ledger §a2.14-12. */
const authoredCard = (id: string) => ({ fr: fr(id), ipa: ipaOf(id), note: `${sub(id)} ${en(id)}` });

/** The card for one past form: its sentence where it has one, its naming form
 *  where it does not. */
const formCard = (past: string) => {
  const f = FORMS.find((x) => x.past === past)!;
  return f.rowId ? authoredCard(f.rowId) : rowCard(f.verbId);
};

/* ─── Section ids, as LITERALS ─────────────────────────────────────────────
 *
 * Literals rather than reads off a const declared below, because
 * `export const X = SECTIONS[0].id` before SECTIONS is a temporal dead zone.   */

export const SCENE_SECTION_ID = 's01-scene';
export const GOALS_SECTION_ID = 's02-goals';
export const NOTMANY_SECTION_ID = 's03-notmany';
export const RECAP_SECTION_ID = 's04-recap';
export const MACHINE_SECTION_ID = 's05-machine';
export const MAP_SECTION_ID = 's06-map';
export const IS_SECTION_ID = 's07-is';
export const FRONT_SECTION_ID = 's08-front';
export const IT_SECTION_ID = 's09-it';
export const U_SECTION_ID = 's10-u';
export const BATCH1_SECTION_ID = 's11-batch1';
export const ERT_SECTION_ID = 's12-ert';
export const ODD_SECTION_ID = 's13-odd';
export const FIRSTWORD_SECTION_ID = 's14-firstword';
export const DERIVABLE_SECTION_ID = 's15-derivable';
export const WHICH_TRAP_SECTION_ID = 's16-which';
export const EU_SECTION_ID = 's17-eu';
export const ROOF_TRAP_SECTION_ID = 's18-roof';
export const ERRORS_SECTION_ID = 's19-errors';
export const UNSEEN_SECTION_ID = 's20-unseen';
export const SCENARIO_SECTION_ID = 's21-scenario';
export const DICTATION_SECTION_ID = 's22-dictation';
export const SPEAK_SECTION_ID = 's23-speak';
export const REVIEW_SECTION_ID = 's24-review';
export const PROGRESS_SECTION_ID = 's25-progress';
export const QUIZ_SECTION_ID = 's26-quiz';
export const ROUNDUP_SECTION_ID = 's27-roundup';

/** THE FIVE GROUP SECTIONS, in the order the acts walk them, with the group
 *  each one owns. THE BRIEF ASKS THE TEST TO ASSERT THAT EACH GROUP LIVES IN ITS
 *  OWN SECTION WITH ITS MEMBERS TOGETHER, and this is the mapping every layer
 *  walks to do it. */
export const GROUP_SECTIONS: readonly { group: string; sectionId: string }[] = [
  { group: '-is', sectionId: IS_SECTION_ID },
  { group: '-it', sectionId: IT_SECTION_ID },
  { group: '-u', sectionId: U_SECTION_ID },
  { group: '-ert', sectionId: ERT_SECTION_ID },
  { group: 'odd', sectionId: ODD_SECTION_ID },
];

/** THE ONLY SECTIONS IN WHICH être MAY APPEAR IN FRONT OF A PAST FORM. The
 *  boundary the brief calls genuinely awkward, named in one place so both halves
 *  of the guard can use it: confined here, and absent from every production
 *  surface. */
export const ETRE_SECTIONS = [
  FIRSTWORD_SECTION_ID, ODD_SECTION_ID, U_SECTION_ID, BATCH1_SECTION_ID,
  REVIEW_SECTION_ID,
] as const;

/** THE PRODUCTION SURFACES. No question, drill, dictée line or spoken item on
 *  any of these may turn on which first word a verb takes: that is a2.21's canDo
 *  and this lesson teaches the FORM only. */
export const PRODUCTION_SECTIONS = [
  UNSEEN_SECTION_ID, DICTATION_SECTION_ID, SPEAK_SECTION_ID, QUIZ_SECTION_ID,
  WHICH_TRAP_SECTION_ID, ROOF_TRAP_SECTION_ID,
] as const;

/* ─── The item lists the guards read ───────────────────────────────────────*/

const ITEM_IDS: string[] = [...AUTHORED_IDS, ...ITEM_IMPORT_IDS];

/** Every authored row whose `dicteeMode` is LETTERS and which this lesson is
 *  willing to make a production surface. THE THREE être ROWS ARE NOT HERE and
 *  cannot be: a dictée line is a production surface. */
const DICTEE_IDS: string[] = PARTICIPES.filter((r) => r.drills.includes('dictation')).map((r) => r.id);

/** Spoken practice draws ONLY from rows carrying `voiceflash`, and only from the
 *  teaching roles: the scene's three lines and the role play's six are a
 *  conversation and belong in the scenario. The être rows are excluded for the
 *  same reason they are excluded from the dictée. */
const SPEAK_ROLES = new Set(['group', 'contrast', 'negative']);
const SPEAK_IDS: string[] = PARTICIPES
  .filter((r) => SPEAK_ROLES.has(r.role) && r.drills.includes('voiceflash'))
  .map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SCENE
 *
 *  Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 *  could not finish. THE BRIEF ASKS FOR THIS ONE BY NAME — somebody telling a
 *  story about yesterday who reaches a verb they know perfectly well in the
 *  present, guesses the past form, and produces something that is not a word, so
 *  the sentence stops.
 *
 *  What makes it this lesson's scene rather than a2.05's is that nothing about
 *  his French is careless. He learned a rule last week, he applied it correctly,
 *  and the rule handed him a non-word. The other person is not offended and does
 *  not correct him: she simply did not receive a word, and asks again.
 * ═══════════════════════════════════════════════════════════════════════ */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Monday again, the same kettle, the same colleague. This time you have something to tell her and you have had all weekend to look forward to telling it.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'La collègue',
    fr: fr(A(624)),
    en: en(A(624)),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-20-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: SCENE_STALL,
    en: 'On Saturday, I... I...',
    stage: `You have the first word out and committed. The verb you mean is prendre, known since ${unitRef('a2.02', 'a2')}, and last week's rule says an -RE verb takes -u. So the rule gives you prendu, and prendu is not a word.`,
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'The kettle clicks off. What comes out?',
    options: [
      {
        fr: fr(A(625)),
        respell: sub(A(625)),
        en: 'the form itself, and the story starts',
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
      works: 'She asks where you went and you tell her, and the coffee is ready.',
      breaks: 'She heard a first word, a shape where the verb should be, and a bus.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La collègue',
    fr: fr(A(626)),
    en: en(A(626)),
    stage: 'Nobody has been rude and nothing has been corrected. She did not receive a word, so she asked again, and the story you had all weekend is now going to be told twice or not at all.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'break',
    size: 'lg',
    // a2.19 §4 and ledger §7: the budget on this screen is LINES, not words.
    // Heading 13, French 28, gloss 24, body 26 words, and NO `coach`: the
    // scene's own `closing` renders on this same screen and a second copy of the
    // reframe is what pushed a2.19's Continue back under the pager bar.
    heading: 'Not a word',
    body: 'You did not guess. You applied a rule you were taught last week, correctly, and it handed you something nobody says.',
    wrong: {
      fr: SCENE_ERROR,
      ipa: '/ʒe pʁɑ̃.dy lə bys/',
      respell: '[ZHAY prahⁿ-DÜ luh BÜSS]',
      en: 'what the rule gives',
    },
    right: {
      fr: fr(A(591)),
      ipa: ipaOf(A(591)),
      respell: sub(A(591)),
      en: 'what the language has',
    },
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the word that was not a word ─────────────────────────────────*/

  {
    type: 'scene',
    id: SCENE_SECTION_ID,
    title: 'The Rule Gave Him That',
    frSub: 'Lundi, à la machine à café',
    render: 'screens',
    layer: 'core',
    setting: { place: 'The office kitchen', city: 'Lyon', time: 'Monday morning' },
    beats: SCENE_BEATS,
    closing: { text: REFRAME, size: 'md' },
    terms: ['theMachine', 'pastForm', 'theGroup'],
  },

  {
    type: 'goals',
    id: GOALS_SECTION_ID,
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    goals: [
      { t: 'Produce the form instead of guessing it', s: 'Thirty-three verbs whose second word cannot be worked out from the first, and you will be able to say all of them rather than reaching for a rule that does not cover them.' },
      { t: 'Sort a verb you have never seen', s: GROUP_CLAIM },
      { t: 'Get four of them free every time you learn one', s: `${Cap(unitRef(FAMILY_UNIT, 'a2'))}'s move, on the past form: cover the front of the verb and the rest of the family comes with it.` },
      { t: 'Say the two hardest letters in A2', s: EU.claim },
    ],
  },

  {
    /* THE REFRAME ARRIVES, AND SO DOES THE COUNT. This is the screen the whole
       lesson turns on: thirty-three is the number of items and five is the
       number of things to know. */
    type: 'cardDeck',
    id: NOTMANY_SECTION_ID,
    title: 'Thirty-Three, Or Five',
    frSub: 'Trente-trois, ou cinq',
    layer: 'core',
    swipe: true,
    hint: 'Swipe. Six cards, and the second one is the whole lesson.',
    cards: [
      { label: 'the list', head: 'thirty-three verbs', body: `Thirty-three verbs have a past form you could not have worked out. ${EVIDENCE_LINE}` },
      { label: 'and the shape', head: GROUP_CLAIM, body: 'Four groups by ending, which are -is, -it, -u and -ert, and five that are in none of them. Thirty-three things to say and five things to know.' },
      { label: 'the instruction', head: REFRAME, body: `${Cap(unitRef(PASSE_UNIT))} gave you a machine for building the second word out of the group the verb is in. For these thirty-three it produces a word that does not exist, so the move is not to build but to reach.` },
      { label: 'where you have seen this', head: `${Cap(unitRef(FAMILY_UNIT))} did the same thing`, body: `That lesson had you cover the front of a compound verb to find the verb underneath. The past form works the same way: appris is pris with ap in front, and remis is mis with re in front.` },
      { label: 'the biggest group', head: `-u, and it is ${GROUP_SIZES['-u']} of them`, body: `It holds the past form of every irregular verb you have already learned: ${unitRef(ALLER_UNIT, 'a2')}'s, ${unitRef(FAIRE_UNIT, 'a2')}'s, ${unitRef(MODAUX_UNIT, 'a2')}'s and ${unitRef(SAVOIR_UNIT, 'a2')}'s. You start from nothing on none of them.` },
      { label: 'and the five', head: ODD_CLAIM, body: 'They are fait, été, eu, né and mort. Two of the five come off the two commonest verbs in the language, so you will meet them constantly and stop having to think.' },
    ],
    terms: ['theGroup', 'pastForm', 'theMachine'],
  },

  /* ── Act 2: what you already have, and where it stops ────────────────────*/

  {
    /* ONE RECAP. a2.05 is one seq back and taught the whole construction; this
       screen restates nothing and only shows that the shape is unchanged. */
    type: 'examples',
    id: RECAP_SECTION_ID,
    title: 'The Shape Has Not Moved',
    frSub: 'La forme ne bouge pas',
    layer: 'core',
    say: `${Cap(unitRef(PASSE_UNIT))} said it one lesson ago: « ${A205_REFRAME} » Nothing about that changes here. The first word is the same, the gap is the same, and the negative goes in the same place. The only thing this lesson touches is the second word.`,
    examples: [
      { fr: fr(A(591)), en: en(A(591)), note: `${sub(A(591))} A form of avoir, then the second word, then what the sentence is about. ${Cap(unitRef(PASSE_UNIT, 'a2'))}'s shape exactly.` },
      { fr: fr(A(633)), en: en(A(633)), note: `${sub(A(633))} And the negative, with the ne shortened to n' and the pas in the gap. That is ${unitRef(PASSE_UNIT, 'a2')}'s rule and this lesson does not add a word to it.` },
      { fr: fr(A(616)), en: en(A(616)), note: `${sub(A(616))} A short adverb in the gap, which is the same lesson's again. The second word is the only thing that is new.` },
      { fr: fr(A(617)), en: en(A(617)), note: `${sub(A(617))} And here is what is new. Faire ends in -re, the machine says -u, and the form is fait.` },
    ],
    terms: ['pastForm', 'theMachine', 'theGroup'],
  },

  {
    /* WHERE THE MACHINE STOPS. Six pairs, each showing what the regular rule
       produces beside what the language has. THE BRIEF ASKS FOR THE WRONG FORM
       TO BE VISIBLE BESIDE THE RIGHT ONE and the test asserts them AS PAIRS. */
    type: 'examples',
    id: MACHINE_SECTION_ID,
    title: 'Where The Rule Stops',
    frSub: 'Là où la règle s’arrête',
    layer: 'core',
    say: `${DERIVABLE_CLAIM} Read each line left to right: the verb, what the machine gives, and what the language has.`,
    examples: DERIVABLE.map((d) => ({
      fr: `${d.verb} · ${d.wrong} · ${d.right}`,
      en: `${d.verb} gives ${d.wrong}, and the form is ${d.right}`,
      note: d.why,
    })),
    terms: ['theMachine', 'pastForm', 'theGroup'],
  },

  /* ── Act 3: five groups. THE OWNS, and the heaviest act. ─────────────────*/

  {
    /* THE MAP, AND THE ONE tapTable IN THE LESSON. Five rows, one per group,
       inside the six-row Pixel 6 ceiling for a section that does not own its
       layout. The teaching is in the detail modal, which is a card and can hold
       prose. Every cell is inside the eleven-character budget a2.17 measured. */
    type: 'tapTable',
    id: MAP_SECTION_ID,
    title: 'Five Groups',
    frSub: 'Cinq groupes',
    layer: 'core',
    say: `${GROUP_CLAIM} Five rows, and the number beside each one is how many verbs are in it. Tap a row to hear its first member.`,
    cols: ['Ends in', 'How many', 'Like'],
    rows: [
      {
        cells: ['-is', String(GROUP_SIZES['-is']), 'pris'],
        say: fr(rowOf('pris')),
        detail: {
          title: 'The -is group',
          body: `Seven verbs, and three of them are the other four with something on the front. prendre and mettre are the heads and both of them end in -re, which is what makes the machine reach for -u. ${fr(rowOf('pris'))} ${sub(rowOf('pris'))}`,
          say: fr(rowOf('pris')),
        },
      },
      {
        cells: ['-it', String(GROUP_SIZES['-it']), 'dit'],
        say: fr(rowOf('dit')),
        detail: {
          title: 'The -it group',
          body: `Four verbs, and two of them end in -uire, where the -re comes off and a t goes on. It is the smallest group and the most predictable one once you have seen it. ${fr(rowOf('dit'))} ${sub(rowOf('dit'))}`,
          say: fr(rowOf('dit')),
        },
      },
      {
        cells: ['-u', String(GROUP_SIZES['-u']), 'vu'],
        say: fr(rowOf('vu')),
        detail: {
          title: 'The -u group',
          body: `Thirteen verbs, more than a third of the list, and it takes members from everywhere: verbs in -oir, in -re and in -ir. Every irregular verb from ${unitRef(ALLER_UNIT, 'a2')}, ${unitRef(FAIRE_UNIT, 'a2')}, ${unitRef(MODAUX_UNIT, 'a2')} and ${unitRef(SAVOIR_UNIT, 'a2')} is in here. ${fr(rowOf('vu'))} ${sub(rowOf('vu'))}`,
          say: fr(rowOf('vu')),
        },
      },
      {
        cells: ['-ert', String(GROUP_SIZES['-ert']), 'ouvert'],
        say: fr(rowOf('ouvert')),
        detail: {
          title: 'The -ert group',
          body: `Four verbs and that is all of it. Every one ends in -rir and would take -i if the machine were allowed to run. Learn one and you have the other three. ${fr(rowOf('ouvert'))} ${sub(rowOf('ouvert'))}`,
          say: fr(rowOf('ouvert')),
        },
      },
      {
        cells: ['nothing', String(GROUP_SIZES.odd), 'fait'],
        say: fr(rowOf('fait')),
        detail: {
          title: 'And the five',
          body: `${ODD_CLAIM} ${fr(rowOf('fait'))} ${sub(rowOf('fait'))}`,
          say: fr(rowOf('fait')),
        },
      },
    ],
    terms: ['theGroup', 'pastForm', 'theFront'],
  },

  {
    /* THE -is GROUP. All seven members on one screen, in three groups: the two
       heads, the four compounds, and the one whose full past belongs to a2.22.
       THE BRIEF ASKS THE TEST TO ASSERT THIS SHAPE FAMILY BY FAMILY. */
    type: 'groupDrill',
    id: IS_SECTION_ID,
    title: 'The -is Group, All Seven',
    frSub: 'Le groupe en -is',
    layer: 'core',
    size: 'lg',
    say: `Seven forms and three things to learn. Two heads, four that are the heads with a front on them, and one that has to wait for ${unitRef(REFLEXIVE_UNIT)}.`,
    groups: [
      {
        label: 'the two heads',
        items: [formCard('pris'), formCard('mis')],
        check: {
          q: 'Both of these verbs end in -re. What would the regular rule have given?',
          opts: ['pris and mis', 'prendu and mettu', 'prendi and metti', 'prend and met'],
          correct: 1,
          why: 'The machine turns an -RE verb into -u, so it gives prendu and mettu, and neither is a word. These two are the reason the group exists.',
        },
      },
      {
        label: 'and the four that come free',
        items: [formCard('appris'), formCard('compris'), formCard('remis'), formCard('promis')],
        check: {
          q: 'surprendre. What is its past form?',
          opts: ['surprendu', 'surpris', 'surpri'],
          correct: 1,
          why: `Cover the sur and prendre is underneath, so the past form is pris with sur in front. That is ${unitRef(FAMILY_UNIT, 'a2')}'s move and it is why this group is three verbs rather than seven.`,
        },
      },
      {
        label: 'and the one that has to wait',
        items: [rowCard(namingId('assis'))],
        check: {
          q: 'assis is in this group. What is missing before you can use it in a sentence?',
          opts: ['its ending', 'the little word that goes in front of the verb', 'nothing at all'],
          correct: 1,
          why: `The form is assis and that is settled. What a full past needs on top of it is the little word this verb always carries, and that is ${unitRef(REFLEXIVE_UNIT)}.`,
        },
      },
    ],
    terms: ['theGroup', 'theFront', 'pastForm'],
  },

  {
    /* THE COMPOUND PAYOFF, AND THE a2.15 BACK-REFERENCE THE BRIEF ASKS FOR BY
       UNIT ID. Its reframe is quoted verbatim rather than paraphrased. */
    type: 'cardDeck',
    id: FRONT_SECTION_ID,
    title: 'Cover The Front',
    frSub: 'Cachez le début',
    layer: 'core',
    hint: 'Swipe. Six cards, and the first is a line you have read.',
    cards: [
      { label: `${Cap(unitRef(FAMILY_UNIT))} said this`, head: A215_REFRAME, body: `That was about the present, eight lessons ago, and it was about these same verbs. It is exactly as true of the past form: cover the front and what is left is a form you already have.` },
      { label: 'so', head: 'appris', sub: sub(rowOf('appris')), body: `${en(rowOf('appris'))} Cover the ap and pris is underneath. You did not learn a new form, you learned a front.` },
      { label: 'and', head: 'remis', sub: sub(rowOf('remis')), body: `${en(rowOf('remis'))} Cover the re and mis is underneath, on a verb whose naming form ${unitRef(FAMILY_UNIT)} had to write from scratch because the corpus did not hold it.` },
      { label: 'it works on the odd ones too', head: DERIVED_ONLY[0]!.past, body: `${DERIVED_ONLY[0]!.verb} is faire with re on the front, so its past form is ${DERIVED_ONLY[0]!.from} with re on the front. This lesson never shows it to you again and you will be asked for it in the exam.` },
      { label: 'and the other two', head: 'compris · promis', body: 'Understood and promised. Same move, same two heads: compris is pris with com in front and promis is mis with pro in front.' },
      { label: 'and the limit', head: 'the front changes the meaning', body: 'promettre is not "put forward" and comprendre is not "take with". What comes off the front tells you the shape and tells you nothing about what the verb means, so the meaning is still a vocabulary question. The ending is not.' },
    ],
    terms: ['theFront', 'theGroup', 'pastForm'],
  },

  {
    /* THE -it GROUP. Four members, in two pairs: the two that are ordinary and
       the two -uire verbs that behave as a sub-pattern. */
    type: 'groupDrill',
    id: IT_SECTION_ID,
    title: 'The -it Group, All Four',
    frSub: 'Le groupe en -it',
    layer: 'core',
    size: 'lg',
    say: 'Four forms, and the second pair is a pattern inside the pattern: any verb ending in -uire drops the -re and takes a t.',
    groups: [
      {
        label: 'the two on their own',
        items: [formCard('dit'), formCard('écrit')],
        check: {
          q: `You hear « ${fr(rowOf('dit'))} ». Which word tells you it is over?`,
          opts: ['dit', "j'ai", 'oui'],
          correct: 1,
          why: `« il dit » and « j\'ai dit » end on the same sound, so the second word cannot tell you anything. The first word is carrying the whole tense, which is what ${unitRef('a2.05')} said and what stays true here.`,
        },
      },
      {
        label: 'and the two in -uire',
        items: [formCard('conduit'), formCard('construit')],
        check: {
          q: 'traduire, "to translate". What is its past form?',
          opts: ['traduu', 'traduit', 'tradui'],
          correct: 1,
          why: 'The -re comes off and a t goes on, exactly as it does for conduire and construire. Two members are enough to see a pattern and this is one you can use on a verb nobody has shown you.',
        },
      },
    ],
    terms: ['theGroup', 'pastForm', 'theMachine'],
  },

  {
    /* THE -u GROUP, PART ONE. Thirteen members is too many for one screen, so
       the group is one section with FOUR labelled groups inside it, which is
       what keeps all thirteen visible together in one place. */
    type: 'groupDrill',
    id: U_SECTION_ID,
    title: 'The -u Group, All 13',
    frSub: 'Le groupe en -u',
    layer: 'core',
    size: 'lg',
    say: 'Thirteen forms, which is more than a third of the whole list, and they come from every kind of verb there is. Four screens and then the payoff.',
    groups: [
      {
        label: 'the two-letter ones',
        items: [formCard('vu'), formCard('lu'), formCard('bu'), formCard('su'), formCard('pu')],
        check: {
          q: 'Five verbs of five or six letters each, and five past forms of two. What is the pattern?',
          opts: ['The last letter of the verb plus u', 'The first letter of the verb plus u', 'There is no pattern and they have to be known'],
          correct: 1,
          why: 'voir gives vu, lire gives lu, boire gives bu, savoir gives su, pouvoir gives pu. The first letter and a u. It is not a rule you can rely on anywhere else, and for these five it is a hook.',
        },
      },
      {
        label: 'the longer ones',
        items: [formCard('voulu'), formCard('connu'), formCard('tenu'), formCard('couru')],
        check: {
          q: `${fr(rowOf('couru'))} Courir ends in -ir. What should the machine have given?`,
          opts: ['couru', 'couri', 'courert'],
          correct: 1,
          why: 'The machine turns an -IR verb into -i, so it gives couri. Courir is an -IR verb that lands in the -u group instead, which is what makes this group the one that takes members from everywhere.',
        },
      },
      {
        label: 'the two with a mark on them',
        items: [formCard('dû'), formCard('reçu')],
        check: {
          q: 'One of these two has an accent that changes what the word means. Which?',
          opts: ['reçu, because of the cedilla', 'dû, because of the little roof', 'neither'],
          correct: 1,
          why: `${CIRCUMFLEX.why} The cedilla changes only how the c is said.`,
        },
      },
      {
        label: 'and the one you already met as a word',
        items: [formCard('cru')],
        check: {
          q: 'You have seen « cru » on a menu. What did it mean there?',
          opts: ['believed', 'raw', 'grown'],
          correct: 1,
          why: 'Raw, and it is a different word that happens to be spelled the same way. Five of these thirty-three are already published in this app as ordinary words and none of them was labelled a past form.',
        },
      },
      {
        // THE THIRTEENTH MEMBER, AND IT IS HERE BECAUSE IT IS IN THIS GROUP.
        // A group whose members are not visible together is a list with a
        // heading on it, so venu sits with the other twelve and the thing that
        // is different about it is named on its own card rather than kept for a
        // later screen.
        label: 'and one with a different first word',
        items: [formCard('venu')],
        check: {
          q: 'venu is an ordinary member of this group. What is different about it?',
          opts: ['Its ending', 'The word that goes in front of it', 'Nothing at all'],
          correct: 1,
          why: `The form is venu and it is built exactly like tenu, which is on the screen above. What sits in front of it is not avoir, and that is ${unitRef(ETRE_UNIT, 'a2')}'s subject rather than this lesson's.`,
        },
      },
    ],
    terms: ['theGroup', 'pastForm', 'alsoAWord'],
  },

  {
    /* THE PAYOFF, AND THE CONNECTION THE BRIEF CALLS "THE ONE THAT MAKES THIS
       LESSON WORTH BUILDING": every irregular verb the learner met in batch 1
       comes back, and its past form is one step from a verb they own. */
    type: 'examples',
    id: BATCH1_SECTION_ID,
    title: 'Verbs You Already Have',
    frSub: 'Des verbes que vous avez déjà',
    layer: 'core',
    say: `Every irregular verb you learned between ${unitRef(ALLER_UNIT)} and ${unitRef(FAMILY_UNIT)} is somewhere in this lesson, and eight of them are in the group you have just done. You are not learning thirty-three verbs. You are learning a second form of verbs you already use.`,
    examples: [
      { fr: fr(rowOf('venu')), en: en(rowOf('venu')), note: `${sub(rowOf('venu'))} venir, from ${unitRef(ALLER_UNIT)}. The form is an ordinary -u and the first word is not avoir, which is ${unitRef(ETRE_UNIT, 'a2')}'s.` },
      { fr: fr(rowOf('tenu')), en: en(rowOf('tenu')), note: `${sub(rowOf('tenu'))} tenir, from ${unitRef(ALLER_UNIT)}, and it behaves like venu without the different first word.` },
      { fr: fr(rowOf('lu')), en: en(rowOf('lu')), note: `${sub(rowOf('lu'))} lire, from ${unitRef(FAIRE_UNIT)}. Two letters.` },
      { fr: fr(rowOf('pu')), en: en(rowOf('pu')), note: `${sub(rowOf('pu'))} pouvoir, from ${unitRef(MODAUX_UNIT)}, and vouloir and devoir are on the same screen you just did.` },
      { fr: fr(rowOf('su')), en: en(rowOf('su')), note: `${sub(rowOf('su'))} savoir, from ${unitRef(SAVOIR_UNIT)}, and connaître is in the group too. The two of them stayed apart in the present and they stay apart here.` },
      { fr: fr(rowOf('pris')), en: en(rowOf('pris')), note: `${sub(rowOf('pris'))} prendre, from ${unitRef(FAMILY_UNIT)}, and it is not in this group at all. That lesson reserved it for this one.` },
    ],
    terms: ['theGroup', 'pastForm', 'theFront'],
  },

  {
    /* THE -ert GROUP. Four members, one screen, and the whole group is closed:
       these four are all of it in the French a learner meets. */
    type: 'groupDrill',
    id: ERT_SECTION_ID,
    title: 'The -ert Group, All Four',
    frSub: 'Le groupe en -ert',
    layer: 'core',
    size: 'lg',
    say: 'Four forms and the group is finished. Every one of these verbs ends in -rir, so every one of them would take -i if the machine were allowed to run, and none of them does.',
    groups: [
      {
        label: 'the four, and that is all of them',
        items: [formCard('ouvert'), formCard('offert'), formCard('couvert'), formCard('souffert')],
        check: {
          q: 'découvrir, "to discover". What is its past form?',
          opts: ['découvri', 'découvert', 'découvru'],
          correct: 1,
          why: 'Cover the dé and couvrir is underneath, which is in this group, so the past form is couvert with dé in front. Two rules at once, and neither of them was about this verb.',
        },
      },
      {
        label: 'and two of them are on a sign near you',
        items: [rowCard(ALSO_A_WORD[1]!.id), rowCard(ALSO_A_WORD[2]!.id)],
        check: {
          q: 'A shop door says OUVERT. What have you also just learned?',
          opts: ['Nothing, it is a different word', 'The past form of ouvrir', 'That the shop is closed'],
          correct: 1,
          why: `${ALSO_A_WORD_CLAIM} The word on the door is the second word of that sentence.`,
        },
      },
    ],
    terms: ['theGroup', 'alsoAWord', 'pastForm'],
  },

  {
    /* THE FIVE THAT ARE IN NO GROUP. A deck rather than a drill, because there
       is nothing to sort: the teaching is that there are five of them and not
       thirty-three, and that two of the five are verbs the learner uses hourly. */
    type: 'cardDeck',
    id: ODD_SECTION_ID,
    title: 'The Five With No Group',
    frSub: 'Les cinq sans groupe',
    layer: 'core',
    swipe: true,
    hint: 'Swipe. Six cards, one per form and one spare.',
    cards: [
      { label: 'the commonest of all', head: fr(rowOf('fait')), sub: sub(rowOf('fait')), body: `${en(rowOf('fait'))} faire is the commonest irregular verb in the language and its past form is in no group. It is also the same sound as « il fait », which is the present, so nothing you hear will separate them.` },
      { label: 'from nowhere', head: fr(rowOf('été')), sub: sub(rowOf('été')), body: `${en(rowOf('été'))} There is no route from être to été. The same three letters are also the word for summer, which is a coincidence and a useful one: you have seen the shape before.` },
      { label: 'and from nowhere again', head: fr(rowOf('eu')), sub: sub(rowOf('eu')), body: `${en(rowOf('eu'))} ${EU.why}` },
      { label: 'shorter than its verb', head: fr(rowOf('né')), sub: sub(rowOf('né')), body: `${en(rowOf('né'))} naître has six letters and né has two, and nothing else in the set gets shorter. Its first word is not avoir either, which is ${unitRef(ETRE_UNIT)}.` },
      { label: 'a different word entirely', head: importedFr(ALSO_A_WORD[4]!.id), sub: impSub(ALSO_A_WORD[4]!.id), body: `mourir goes to mort, which is not mourir with anything done to it. It is published in this app as an ordinary adjective meaning "dead", and that is the form.` },
      { label: 'and you have heard it', head: importedFr('fr.a1.emotions.034'), sub: impSub('fr.a1.emotions.034'), body: `${importedEn('fr.a1.emotions.034')} The same word, in the phrase you are most likely to meet it in.` },
    ],
    terms: ['theGroup', 'twoLetters', 'firstWord'],
  },

  {
    /* THE BOUNDARY, NAMED IN ONE LINE. The brief calls this genuinely awkward
       and says that naming it is better than pretending it is not there.
       Three forms, three cards, and no auxiliary choice is taught: a guard
       refuses the shape « choose avoir or être » on any surface in this lesson. */
    type: 'examples',
    id: FIRSTWORD_SECTION_ID,
    title: 'A Different First Word',
    frSub: 'Trois avec un autre premier mot',
    layer: 'core',
    say: `${ETRE_DEFERRAL} These three are shown the way they actually appear so that you recognise them, and there is nothing here to decide.`,
    examples: [
      { fr: fr(rowOf('venu')), en: en(rowOf('venu')), note: `${sub(rowOf('venu'))} An ordinary member of the -u group. The form is venu whatever goes in front of it.` },
      { fr: fr(rowOf('né')), en: en(rowOf('né')), note: `${sub(rowOf('né'))} And the shortest form in the lesson, with the same different first word.` },
      { fr: importedFr(ALSO_A_WORD[4]!.id), en: importedEn(ALSO_A_WORD[4]!.id), note: `${impSub(ALSO_A_WORD[4]!.id)} mort, which is the third and which you will meet far more often as this word than as a past form.` },
      { fr: fr(rowOf('tenu')), en: en(rowOf('tenu')), note: `${sub(rowOf('tenu'))} And the control. tenir is venir's twin in the present and it takes avoir, so the difference is not about the verb looking like anything.` },
    ],
    terms: ['firstWord', 'theGroup', 'pastForm'],
  },

  /* ── Act 4: the ones that look derivable ─────────────────────────────────*/

  {
    /* THE PAIRS, AS PAIRS. The brief asks for the wrong form to sit beside the
       right one and for the test to assert them AS PAIRS rather than as
       presence. Six cards, one per pair, and the wrong form is the head of the
       card so the learner sees what they would have produced. */
    type: 'cardDeck',
    id: DERIVABLE_SECTION_ID,
    title: 'What You Would Have Said',
    frSub: 'Ce que vous auriez dit',
    layer: 'core',
    swipe: true,
    hint: 'Swipe. Six cards, and the big word is not a word.',
    cards: DERIVABLE.map((d) => ({
      label: d.verb,
      head: d.wrong,
      sub: `not a word · ${d.right}`,
      body: d.why,
    })),
    terms: ['theMachine', 'pastForm', 'theGroup'],
  },

  {
    /* TRAP ONE: WHICH GROUP.
       THE STEPPED SHAPE. `lesson-contract.test.ts` requires every A2 trapDrill
       to walk rule > cards > audio > drill with `swipe`, a `say`, an audio spec
       and a GATED drill step, and `size` COMES OFF (ledger, the trapDrill sweep
       across seq 1..11). a2.18 §3: the cards step's LABEL counts its own array
       and the pager draws one dot per card directly under it — FOUR cards, and
       the label says four. */
    type: 'trapDrill',
    id: WHICH_TRAP_SECTION_ID,
    title: 'Which Group',
    frSub: 'Quel groupe',
    layer: 'core',
    swipe: true,
    say: 'Four cards and then six to prove it. Every one of the six is a verb whose ending points one way and whose past form goes another.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-20-which', wrongThenRight: true },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'The Ending Is Not The Group' },
      { kind: 'cards', label: 'Four cards', title: 'What It Looks Like' },
      { kind: 'audio', label: 'Hear it', title: 'Wrong, Then Right' },
      { kind: 'drill', label: 'Prove it', title: 'Sort These Six', gate: true },
    ],
    rule: {
      title: 'The ending of the verb decides nothing',
      body: `${REFRAME} An -RE verb can land in -is, an -IR verb in -u or in -ert. The end of the naming form tells you what the machine would do, not what the language has.`,
    },
    // EVERY CARD'S `fr` IS FRENCH, because the audio step plays each card's `fr`
    // at the section's speeds through a French voice. a2.18 §4 found that by
    // having a card hold an English gloss and being refused.
    cards: [
      { promptLabel: 'the rule would say -u', promptSound: WRONG[0]!.wrong, fr: WRONG[0]!.wrong, ipa: '/ʒe pʁɑ̃.dy lə bys/', tip: WRONG[0]!.why },
      { promptLabel: 'and it is -is', promptSound: fr(rowOf('pris')), fr: fr(rowOf('pris')), ipa: ipaOf(rowOf('pris')), tip: 'The -is group, with mis beside it and four compounds behind the two of them.' },
      { promptLabel: 'the rule would say -i', promptSound: WRONG[1]!.wrong, fr: WRONG[1]!.wrong, ipa: '/ʒe u.vʁi la pɔʁt/', tip: WRONG[1]!.why },
      { promptLabel: 'and it is -ert', promptSound: fr(rowOf('ouvert')), fr: fr(rowOf('ouvert')), ipa: ipaOf(rowOf('ouvert')), tip: 'The -ert group, and the other three members arrive free the moment this one is known.' },
    ],
    // Hand-randomised: MissionRich renders authored order exactly, so a correct
    // answer sitting at index 0 six times running gives itself away.
    drill: [
      { promptSay: fr(rowOf('pris')), opts: ['-u, because prendre ends in -re', '-is', '-it'], correct: 1 },
      { promptSay: fr(rowOf('couru')), opts: ['-u', '-i, because courir ends in -ir', '-ert'], correct: 0 },
      { promptSay: fr(rowOf('ouvert')), opts: ['-i, because ouvrir ends in -ir', '-u', '-ert'], correct: 2 },
      { promptSay: fr(rowOf('construit')), opts: ['-u', '-it', '-is'], correct: 1 },
      { promptSay: fr(rowOf('fait')), opts: ['-u, because faire ends in -re', 'no group at all', '-it'], correct: 1 },
      { promptSay: fr(rowOf('connu')), opts: ['-is', '-it', '-u'], correct: 2 },
    ],
    terms: ['theGroup', 'theMachine', 'pastForm'],
  },

  {
    /* eu, AND THE BRIEF ASKS FOR ITS OWN MISSION BY NAME. Two letters, one
       sound, and the sound is not the one either letter suggests. A `listening`
       section, because this is the one thing in the lesson that has to be heard
       before it can be read. */
    type: 'listening',
    id: EU_SECTION_ID,
    title: 'Two Letters, One Sound',
    frSub: 'Deux lettres, un son',
    layer: 'core',
    // `listening` TAKES `lines` AND `questions`, NOT `items`. The first draft
    // used `items` and validateLesson refused it by name, which is the shape of
    // invariants §1: a field with no reader looks exactly like a finished job.
    questionsInModal: true,
    say: `${EU.claim} Listen before you read, which is the opposite of everything else in this lesson.`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-20-eu' },
    lines: [rowOf('eu'), A(622), A(630), rowOf('bu'), rowOf('vu')].map((id) => ({ fr: fr(id), en: en(id) })),
    questions: [
      {
        q: `${fr(rowOf('eu'))} What comes out for those two letters?`,
        opts: ['Two sounds', 'A single French u', 'The sound in "peu"', 'Nothing at all'],
        correct: 1,
        why: 'The e is not said and the u is the French u. Two letters, one sound, and it is not the sound either letter suggests.',
      },
      {
        q: `${noStop(fr(rowOf('bu')))} against ${noStop(fr(rowOf('eu')))}. What is the difference?`,
        opts: ['The vowel', 'The b, and nothing else', 'The length', 'The first word'],
        correct: 1,
        why: 'The vowel is identical. Bu is that vowel with a b in front of it and eu is the same vowel with nothing in front, which is what makes eu the hardest of the three to catch.',
      },
      {
        q: `${fr(A(630))} Where is it in this one?`,
        opts: ['At the end', 'Between pas and le temps', 'It is not there'],
        correct: 1,
        why: `In the gap, where ${unitRef('a2.05')} put it, and it is very short. This is where it will actually arrive when somebody says it to you.`,
      },
      {
        q: 'Why is this the one form in the lesson you cannot learn from the page?',
        opts: [
          'Because it is rare',
          'Because the spelling gives you no clue at all about the sound',
          'Because it changes for the person',
        ],
        correct: 1,
        why: EU.claim,
      },
    ],
    terms: ['twoLetters', 'oneSound', 'pastForm'],
  },

  {
    /* TRAP TWO: THE CIRCUMFLEX. The brief asks for dû to get a mission and for
       an assertion so nobody strips the accent.

       NOT `wrongThenRight`: all four cards are correct French and the take is a
       pair contrast rather than an error. Ten A2 traps title their audio step
       « Wrong, Then Right » and for those it is true; the ledger's sweep records
       that a truthful title is required where it is not. */
    type: 'trapDrill',
    id: ROOF_TRAP_SECTION_ID,
    title: 'The Little Roof',
    frSub: 'Le petit chapeau',
    layer: 'core',
    swipe: true,
    say: `Four cards and then six to prove it. Nothing you hear will help on any of them: ${CIRCUMFLEX.past} and ${CIRCUMFLEX.bare} are one sound and the difference is entirely on paper.`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-20-roof' },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'One Sound, Two Words' },
      { kind: 'cards', label: 'Four cards', title: 'With It And Without' },
      { kind: 'audio', label: 'Hear it', title: 'The Same Sound Twice' },
      { kind: 'drill', label: 'Prove it', title: 'Which One Is Meant', gate: true },
    ],
    rule: {
      // CIRCUMFLEX.untestable is NOT here. It is 44 words on its own and the
      // rule step is a core screen with a 45-word ceiling; it lives on the
      // reference sheet, which is `deep`, and in the exam's own why.
      title: 'The only accent here that changes a word',
      body: CIRCUMFLEX.why,
    },
    cards: [
      { promptLabel: 'with the roof', promptSound: fr(rowOf('dû')), fr: fr(rowOf('dû')), ipa: ipaOf(rowOf('dû')), tip: `${en(rowOf('dû'))} The past form of devoir, and the roof is the only thing that says so.` },
      { promptLabel: 'without it', promptSound: fr(A(623)), fr: fr(A(623)), ipa: ipaOf(A(623)), tip: `${en(A(623))} Here du is the word for "some" and it has nothing to do with devoir. The two are one sound.` },
      // THE FEMININE, AND IT IS A NOUN PHRASE RATHER THAN A SENTENCE ON PURPOSE.
      // « Elle est due. » was the first draft and the agreement guard refused it,
      // correctly: no authored sentence in this lesson may show a past form
      // agreeing with anything, because a2.21 owns that and the contrast only
      // works if this lesson's background is clean. « la somme due » shows the
      // spelling without putting a first word in front of it.
      { promptLabel: 'and it goes again', promptSound: `la somme ${CIRCUMFLEX.feminine}`, fr: `la somme ${CIRCUMFLEX.feminine}`, ipa: '/la sɔm dy/', tip: `In the feminine the roof disappears and the word becomes ${CIRCUMFLEX.feminine}. It only ever sits on the short masculine form, which is the form this lesson teaches.` },
      { promptLabel: 'the one you can test', promptSound: fr(rowOf('reçu')), fr: fr(rowOf('reçu')), ipa: ipaOf(rowOf('reçu')), tip: 'A cedilla, for comparison. It changes how the c is said and it does not turn the word into another word, so nothing turns on it.' },
    ],
    drill: [
      { promptSay: fr(rowOf('dû')), opts: ['some', 'had to'], correct: 1 },
      { promptSay: fr(A(623)), opts: ['some', 'had to'], correct: 0 },
      { promptSay: `Tu as ${CIRCUMFLEX.past} attendre.`, opts: ['had to', 'some'], correct: 0 },
      { promptSay: `J'ai bu ${CIRCUMFLEX.bare} café.`, opts: ['some', 'had to'], correct: 0 },
      { promptSay: fr(rowOf('dû')), opts: ['the sound tells you', 'only the spelling tells you'], correct: 1 },
      { promptSay: fr(A(623)), opts: ['only the spelling tells you', 'the sound tells you'], correct: 0 },
    ],
    terms: ['littleRoof', 'oneSound', 'pastForm'],
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
    errors: WRONG.map((w) => ({ wrong: w.wrong, right: w.right, why: w.why })),
    terms: ['theMachine', 'littleRoof', 'pastForm'],
  },

  /* ── Act 5: out loud ─────────────────────────────────────────────────────*/

  {
    /* THE GENERALISATION TEST, IN THE FLOW.
       Doctrine §B.1: a mission that makes the learner answer for a situation the
       lesson never showed them has taught the system rather than the list. Five
       verbs whose past form appears nowhere in this lesson, one per group, and
       every one of the five is reachable from a form that does. */
    type: 'groupDrill',
    id: UNSEEN_SECTION_ID,
    title: 'Five You Have Not Met',
    frSub: 'Cinq cas nouveaux',
    layer: 'core',
    size: 'lg',
    say: 'Five verbs whose past form this lesson has never printed. You can get all five, because four of them are a verb you have with a front on it and the fifth is in a group you have just closed.',
    groups: [
      {
        label: 'the letter',
        items: [formCard('pris')],
        check: {
          q: "Reprendre. I took the key back. J'ai ___ la clé.",
          opts: ['reprendu', 'repris', 'reprené'],
          correct: 1,
          why: 'Cover the re and prendre is underneath, so the past form is pris with re in front. The first option is what the machine gives and it is not a word.',
        },
      },
      {
        label: 'the news',
        items: [formCard('appris')],
        check: {
          q: 'Surprendre. The news surprised me. La nouvelle m\'a ___.',
          opts: ['surpris', 'surprendu', 'surpri'],
          correct: 0,
          why: 'The same front-covering move on the same verb. Two compounds of prendre were taught and this is a third the lesson never showed you.',
        },
      },
      {
        label: 'the discovery',
        items: [formCard('couvert')],
        check: {
          q: "Découvrir. We discovered a restaurant. Nous avons ___ un restaurant.",
          opts: ['découvri', 'découvru', 'découvert'],
          correct: 2,
          why: 'Cover the dé and couvrir is underneath, which is in the -ert group, so the past form is couvert with dé in front. Two rules and neither was about this verb.',
        },
      },
      {
        label: 'the letter, again',
        items: [formCard('écrit')],
        check: {
          q: "Décrire, \"to describe\". She described the room. Elle a ___ la pièce.",
          opts: ['décrivu', 'décrit', 'décri'],
          correct: 1,
          why: 'Cover the dé and crire is what is left, which is écrire without its é. It is in the -it group and its past form ends the same way.',
        },
      },
      {
        label: 'the film',
        items: [formCard('fait')],
        check: {
          q: `Refaire. I did the exercise again. J'ai ___ l'exercice.`,
          opts: ['refait', 'refaisu', 'referé'],
          correct: 0,
          why: `${DERIVED_ONLY[0]!.verb} is faire with re in front, so its past form is ${DERIVED_ONLY[0]!.from} with re in front. faire is in no group at all and the front-covering move still works on it.`,
        },
      },
    ],
    terms: ['theFront', 'theGroup', 'pastForm'],
  },

  {
    type: 'scenario',
    id: SCENARIO_SECTION_ID,
    title: 'Telling It Properly',
    frSub: 'On raconte, cette fois',
    layer: 'core',
    setting: 'The same colleague, later in the week, and this time you have the forms. Every answer is something that is over, and every second word is one you could not have built.',
    turns: [
      {
        ai: fr(A(627)),
        en: en(A(627)),
        user: fr(A(625)),
        userEn: en(A(625)),
        // TWO ALTERNATIVES MINIMUM ON EVERY TURN AND A `userEn`.
        // `scenario.logic.test.ts` is a SEED-WIDE test requiring both, and a2.03
        // shipped three turns with one alt each with every gate green.
        alts: [
          { fr: fr(A(628)), en: en(A(628)) },
          { fr: fr(rowOf('fait')), en: en(rowOf('fait')) },
        ],
      },
      {
        ai: fr(A(629)),
        en: en(A(629)),
        user: fr(A(630)),
        userEn: en(A(630)),
        alts: [
          { fr: fr(rowOf('lu')), en: en(rowOf('lu')) },
          { fr: fr(A(633)), en: en(A(633)) },
        ],
      },
      {
        ai: fr(A(631)),
        en: en(A(631)),
        user: fr(rowOf('ouvert')),
        userEn: en(rowOf('ouvert')),
        alts: [
          { fr: fr(rowOf('couvert')), en: en(rowOf('couvert')) },
          { fr: fr(A(632)), en: en(A(632)) },
        ],
      },
      {
        ai: fr(A(624)),
        en: en(A(624)),
        user: fr(rowOf('vu')),
        userEn: en(rowOf('vu')),
        alts: [
          { fr: fr(rowOf('couru')), en: en(rowOf('couru')) },
          { fr: fr(rowOf('bu')), en: en(rowOf('bu')) },
        ],
      },
      {
        ai: fr(A(626)),
        en: en(A(626)),
        user: fr(rowOf('dit')),
        userEn: en(rowOf('dit')),
        alts: [
          { fr: fr(rowOf('promis')), en: en(rowOf('promis')) },
          { fr: fr(rowOf('compris')), en: en(rowOf('compris')) },
        ],
      },
      {
        ai: fr(A(632)),
        en: en(A(632)),
        user: fr(A(622)),
        userEn: en(A(622)),
        alts: [
          { fr: fr(rowOf('eu')), en: en(rowOf('eu')) },
          { fr: fr(rowOf('été')), en: en(rowOf('été')) },
        ],
      },
    ],
    terms: ['pastForm', 'theGroup', 'twoLetters'],
  },

  {
    type: 'dictation',
    id: DICTATION_SECTION_ID,
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    // Every row here is in LETTERS mode through the REAL `dicteeMode`, checked
    // in the batch, the merge and the test. THE DICTÉE IS WHERE THE FORM IS
    // ACTUALLY PRODUCED, because a2.05 measured that `practice` with skill
    // 'write' draws no writing surface at all.
    //
    // WHAT IT CANNOT TEST IS THE CIRCUMFLEX. normalizeFr strips it, so « J'ai du
    // partir. » is marked right. That is stated on the card and in the report
    // rather than papered over, and the accent is asked about by mcq instead.
    itemIds: DICTEE_IDS,
    say: 'Eleven lines, one from each group and one negative. The first two words are the same every time and the second word is the whole question.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], maxPlays: 3, recordingId: 'rec-a2-20-dictee' },
    terms: ['pastForm', 'theGroup', 'littleRoof'],
  },

  {
    type: 'practice',
    id: SPEAK_SECTION_ID,
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    // `speak`, NOT `write`. `practice` with skill 'write' draws no writing
    // surface at all, which is why production in this lesson lives in the dictée
    // and in the typed questions of the exam.
    skill: 'speak',
    itemIds: SPEAK_IDS,
    terms: ['pastForm', 'twoLetters'],
  },

  /* ── Act 6: prove it ─────────────────────────────────────────────────────*/

  {
    type: 'reviewDeck',
    id: REVIEW_SECTION_ID,
    title: 'The Whole Thing',
    frSub: 'Tout, d’un coup',
    layer: 'core',
    cards: [
      { front: 'How many groups are there?', back: GROUP_CLAIM, say: fr(rowOf('pris')) },
      { front: 'prendre. Why not prendu?', back: WRONG[0]!.why, say: fr(rowOf('pris')) },
      { front: 'You meet a compound verb you have never seen. What do you do?', back: A215_REFRAME, say: fr(rowOf('appris')) },
      { front: 'ouvrir, offrir, couvrir, souffrir. What do they have in common?', back: 'All four end in -rir and all four take -ert. Learn one and the group is finished.', say: fr(rowOf('ouvert')) },
      { front: 'Which group takes members from every kind of verb?', back: `-u, and it is ${GROUP_SIZES['-u']} of the thirty-three. It holds -oir verbs, -re verbs and -ir verbs, and every irregular verb you met before this lesson.`, say: fr(rowOf('vu')) },
      { front: 'j\'ai eu. What does the second word sound like?', back: EU.why, say: fr(rowOf('eu')) },
      { front: 'dû and du. What is the difference?', back: CIRCUMFLEX.why, say: fr(rowOf('dû')) },
      { front: 'Which five are in no group?', back: ODD_CLAIM, say: fr(rowOf('fait')) },
      { front: 'venu, né, mort. What is different about them?', back: ETRE_DEFERRAL, say: fr(rowOf('venu')) },
    ],
  },

  {
    type: 'progressCheck',
    id: PROGRESS_SECTION_ID,
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: `${REFRAME} The exam has six rounds, and most of what it asks you to do is write the form rather than pick it, because picking it out of four is not what this lesson claims you can do.`,
    stats: [
      { k: 'Forms', v: `33, and ${GROUP_SIZES['-is'] + GROUP_SIZES['-it'] + GROUP_SIZES['-u'] + GROUP_SIZES['-ert']} of them are in four groups.` },
      { k: 'Things to know', v: '5. Four endings, and a list of five that have none.' },
      { k: 'New constructions', v: `0. ${Cap(unitRef(PASSE_UNIT))} gave you the whole shape and it has not moved.` },
      { k: 'Used again in', v: `${Cap(unitRef(ETRE_UNIT))}, ${unitRef(REFLEXIVE_UNIT)} and ${unitRef(SCHOOL_UNIT)}.` },
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
    say: 'Six rounds of six. Most of it is typed, because the canDo says produce and choosing between four is a different job.',
    rounds: [
      {
        id: 'r1-the-machine',
        label: 'What the rule would have given',
        // Round targets are ordered deliberately. drillForRound returns the
        // FIRST target that has a drill and then stops, so the first name here
        // is what a failing learner actually gets, and every round leads on a
        // DIFFERENT trigger. That is what makes all six drills reachable.
        targets: ['err-built-form', 'err-wrong-group'],
        say: 'Six on the forms the regular rule invents.',
        questions: [
          {
            q: 'prendre. Write the past form.',
            format: 'typeIn',
            accept: ['pris'],
            answer: 'pris',
            why: 'The -is group. The machine would have given prendu, because prendre ends in -re, and prendu is not a word.',
            ref: IS_SECTION_ID,
          },
          {
            q: 'Fix this. You mean that you took the bus.',
            format: 'errorSpot',
            prompt: WRONG[0]!.wrong,
            accept: [fr(rowOf('pris')), "J'ai pris le bus"],
            answer: fr(rowOf('pris')),
            why: WRONG[0]!.why,
            ref: MACHINE_SECTION_ID,
          },
          {
            q: 'ouvrir. Write the past form.',
            format: 'typeIn',
            accept: ['ouvert'],
            answer: 'ouvert',
            why: 'The -ert group. An -IR verb, so the machine says -i, and four verbs in the language refuse it.',
            ref: ERT_SECTION_ID,
          },
          {
            q: 'courir. Write the past form.',
            format: 'typeIn',
            accept: ['couru'],
            answer: 'couru',
            why: 'The -u group, and courir is the -IR verb that lands there rather than in -ert or in -i.',
            ref: U_SECTION_ID,
          },
          {
            q: 'Which of these is a real past form?',
            format: 'mcq',
            opts: ['mettu', 'metti', 'mis', 'mett'],
            correct: 2,
            why: 'mettre is in the -is group with prendre. The other three are what the regular rules would produce and none of them exists.',
            ref: IS_SECTION_ID,
          },
          {
            q: 'Fix this. You mean that you opened the door.',
            format: 'errorSpot',
            prompt: WRONG[1]!.wrong,
            accept: [fr(rowOf('ouvert')), "J'ai ouvert la porte"],
            answer: fr(rowOf('ouvert')),
            why: WRONG[1]!.why,
            ref: ERT_SECTION_ID,
          },
        ],
      },
      {
        id: 'r2-which-group',
        label: 'Sorting',
        targets: ['err-wrong-group', 'err-built-form'],
        say: 'Six on which group a verb is in, and two of the verbs are not in this lesson.',
        questions: [
          {
            q: 'construire. Which group is its past form in?',
            format: 'mcq',
            opts: ['-it', '-u', '-is', '-ert'],
            correct: 0,
            why: 'Every -uire verb drops the -re and takes a t. conduire does it too and so does traduire, which this lesson never showed you.',
            ref: IT_SECTION_ID,
          },
          {
            q: 'connaître. Write the past form.',
            format: 'typeIn',
            accept: ['connu'],
            answer: 'connu',
            why: 'The -u group, and the circumflex of the naming form goes with the -aître.',
            ref: U_SECTION_ID,
          },
          {
            q: 'souffrir. Which group?',
            format: 'mcq',
            opts: ['-i, like finir', '-u', '-is', '-ert'],
            correct: 3,
            why: 'The -ert group, and it is the fourth and last member. ouvrir, offrir, couvrir, souffrir, and that is all of them.',
            ref: ERT_SECTION_ID,
          },
          {
            q: 'offrir. Write the past form.',
            format: 'typeIn',
            accept: ['offert'],
            answer: 'offert',
            why: 'The same three letters as ouvert, on a verb that has nothing to do with opening. That is what a group is for.',
            ref: ERT_SECTION_ID,
          },
          {
            q: 'faire. Which group is its past form in?',
            format: 'mcq',
            opts: ['-it, because it ends in a t', '-u', 'none at all', '-is'],
            correct: 2,
            why: 'None. fait ends in a t and it is not in the -it group: the -it group is verbs whose naming form ends in -ire or -uire. faire is one of the five with no group, and it is the commonest verb of the thirty-three.',
            ref: ODD_SECTION_ID,
          },
          {
            q: 'traduire, "to translate". Write the past form.',
            format: 'typeIn',
            accept: ['traduit'],
            answer: 'traduit',
            why: 'A verb this lesson never taught. It ends in -uire, so the -re comes off and a t goes on, exactly as it does for conduire and construire.',
            ref: IT_SECTION_ID,
          },
        ],
      },
      {
        id: 'r3-the-front',
        label: 'Cover the front',
        targets: ['err-front-not-free', 'err-wrong-group'],
        say: `Six on ${unitRef(FAMILY_UNIT, 'a2')}'s move, and four of the six are verbs this lesson never printed.`,
        questions: [
          {
            q: 'apprendre. Write the past form.',
            format: 'typeIn',
            accept: ['appris'],
            answer: 'appris',
            why: 'Cover the ap and prendre is underneath, so it is pris with ap in front.',
            ref: FRONT_SECTION_ID,
          },
          {
            q: 'reprendre. Write the past form.',
            format: 'typeIn',
            accept: ['repris'],
            answer: 'repris',
            why: 'A verb this lesson never printed. The same move: cover the re, find prendre, and put the front back on pris.',
            ref: FRONT_SECTION_ID,
          },
          {
            q: 'découvrir. Write the past form.',
            format: 'typeIn',
            accept: ['découvert', 'decouvert'],
            answer: 'découvert',
            why: 'Cover the dé and couvrir is underneath, which is in the -ert group. Two rules at once, and neither of them was about this verb. The accent is not what is being tested here: no typed answer in this app can test one.',
            ref: ERT_SECTION_ID,
          },
          {
            q: 'refaire. Write the past form.',
            format: 'typeIn',
            accept: ['refait'],
            answer: 'refait',
            why: `${DERIVED_ONLY[0]!.verb} is faire with re in front, and faire is in no group at all. The front-covering move works even on the five that have no ending to share.`,
            ref: FRONT_SECTION_ID,
          },
          {
            q: 'Which of these is NOT the way a compound verb works?',
            format: 'mcq',
            opts: [
              'Its meaning is the base verb\'s meaning with the front added',
              'Its past form is the base verb\'s with the front put back on',
              'It behaves like the base verb in every tense',
            ],
            correct: 0,
            why: 'promettre is not "put forward" and comprendre is not "take with". The front tells you the shape and it tells you nothing about the meaning.',
            ref: FRONT_SECTION_ID,
          },
          {
            q: 'Fix this. You mean that you promised to come.',
            format: 'errorSpot',
            prompt: "J'ai promettu de venir.",
            accept: [fr(rowOf('promis')), "J'ai promis de venir"],
            answer: fr(rowOf('promis')),
            why: 'promettre is mettre with pro in front, so its past form is mis with pro in front. The machine gave promettu because the verb ends in -re.',
            ref: FRONT_SECTION_ID,
          },
        ],
      },
      {
        id: 'r4-two-letters',
        label: 'The one you cannot read',
        targets: ['err-eu', 'err-naming-form'],
        say: 'Six on eu, and one of them is the only listening question in the lesson.',
        questions: [
          {
            q: 'Listen. Which one did you hear?',
            format: 'listenChoose',
            // THE ONE EAR QUESTION IN THE LESSON. The three options differ by
            // what comes IN FRONT of one pure vowel — nothing, a b, a v — which
            // is a real difference. NO ear question here may offer dû against du
            // or a form against the version of itself that agrees: those are one
            // sound and marking one right would certify a bug. NO_EAR_QUESTION
            // enforces it.
            say: fr(rowOf('eu')),
            opts: [fr(rowOf('bu')), fr(rowOf('eu')), fr(rowOf('vu'))],
            correct: 1,
            why: 'Nothing in front of the vowel at all. Bu has a b, vu has a v, and eu is the vowel on its own, which is why it is the hardest of the three to catch.',
            ref: EU_SECTION_ID,
          },
          {
            q: 'avoir. Write the past form.',
            format: 'typeIn',
            accept: ['eu'],
            answer: 'eu',
            why: 'Two letters, and there is no route to them from avoir. A dropped letter does survive the comparison, so this is one of the few spellings in the lesson a typed answer can genuinely test.',
            ref: ODD_SECTION_ID,
          },
          {
            q: 'être. Write the past form.',
            format: 'typeIn',
            accept: ['été', 'ete'],
            answer: 'été',
            why: 'From nowhere, like eu. The same three letters are also the word for summer, and the accents are not what is being tested: no typed answer in this app can test one.',
            ref: ODD_SECTION_ID,
          },
          {
            q: 'Fix this. You mean that you were frightened.',
            format: 'errorSpot',
            prompt: WRONG[2]!.wrong,
            accept: [fr(rowOf('eu')), "J'ai eu peur"],
            answer: fr(rowOf('eu')),
            why: WRONG[2]!.why,
            ref: EU_SECTION_ID,
          },
          {
            q: 'How is « eu » said?',
            format: 'mcq',
            opts: ['as in "peu"', 'as two syllables', 'as in English "you"', 'as a single French u'],
            correct: 3,
            why: EU.why,
            ref: EU_SECTION_ID,
          },
          {
            q: 'naître. Write the past form.',
            format: 'typeIn',
            accept: ['né', 'ne'],
            answer: 'né',
            why: 'Two letters again, and the only form in the set that is shorter than the verb it comes from.',
            ref: ODD_SECTION_ID,
          },
        ],
      },
      {
        id: 'r5-the-roof',
        label: 'The accent that changes a word',
        targets: ['err-circumflex', 'err-eu'],
        say: 'Six on dû, and every one of them is a question you pick rather than type. That is not a stylistic choice.',
        questions: [
          {
            q: 'devoir. Which is the past form?',
            format: 'mcq',
            opts: ['du', 'dû', 'devu', 'dut'],
            correct: 1,
            why: `${CIRCUMFLEX.why} You pick it because a typed answer would accept du.`,
            ref: ROOF_TRAP_SECTION_ID,
          },
          {
            q: 'Why is this question not asked by typing the answer?',
            format: 'mcq',
            opts: [
              'Because a typed answer strips accents before comparing, so du would be marked right',
              'Because the word is too short',
              'Because the accent is optional',
            ],
            correct: 0,
            why: CIRCUMFLEX.untestable,
            ref: ROOF_TRAP_SECTION_ID,
          },
          {
            q: 'Why is there no listening question about dû?',
            format: 'mcq',
            opts: ['There is one, later', 'Because dû and du are one sound', 'Because the word is rare'],
            correct: 1,
            why: 'One sound, two words. An ear question offering both would have no correct answer, and marking one right would certify a bug rather than teach anything.',
            ref: ROOF_TRAP_SECTION_ID,
          },
          {
            q: `« ${fr(A(623))} » What does « du » mean here?`,
            format: 'mcq',
            opts: ['some', 'had to', 'owed'],
            correct: 0,
            why: 'Some. Without the roof it is the ordinary little word for an unspecified amount, and it has nothing to do with devoir.',
            ref: ROOF_TRAP_SECTION_ID,
          },
          {
            q: 'What happens to the roof in the feminine?',
            format: 'mcq',
            opts: ['It stays', 'It moves to the e', `It goes, and the word is ${CIRCUMFLEX.feminine}`],
            correct: 2,
            why: `It only ever sits on the short masculine form, because that is the only one that could be confused with the word for "some". ${CIRCUMFLEX.feminine} needs no roof and does not get one.`,
            ref: ROOF_TRAP_SECTION_ID,
          },
          {
            q: 'recevoir. Which is the past form?',
            format: 'mcq',
            opts: ['recevu', 'reçu', 'recu', 'reçit'],
            correct: 1,
            why: 'The -u group, and the cedilla comes with it. Unlike the roof on dû, the cedilla does not turn the word into a different word, so nothing is at stake in it.',
            ref: U_SECTION_ID,
          },
        ],
      },
      {
        id: 'r6-cold',
        label: 'Cold',
        targets: ['err-naming-form', 'err-circumflex'],
        say: 'Six with no group named and no hint. This is the round the canDo is about.',
        questions: [
          {
            q: 'dire. Write the past form.',
            format: 'typeIn',
            accept: ['dit'],
            answer: 'dit',
            why: 'The -it group, and the same sound as « il dit », which is the present.',
            ref: IT_SECTION_ID,
          },
          {
            q: 'voir. Write the past form.',
            format: 'typeIn',
            accept: ['vu'],
            answer: 'vu',
            why: 'The -u group. Two letters, and the machine has no rule at all for an -OIR verb, so there was never anything to build with.',
            ref: U_SECTION_ID,
          },
          {
            q: 'Fix this. You mean that you took the bus.',
            format: 'errorSpot',
            prompt: WRONG[4]!.wrong,
            accept: [fr(rowOf('pris')), "J'ai pris le bus"],
            answer: fr(rowOf('pris')),
            why: WRONG[4]!.why,
            ref: RECAP_SECTION_ID,
          },
          {
            q: 'mourir. Write the past form.',
            format: 'typeIn',
            accept: ['mort'],
            answer: 'mort',
            why: 'A different word entirely, and the only one of the thirty-three that is. You have probably met it as an ordinary adjective meaning "dead".',
            ref: ODD_SECTION_ID,
          },
          {
            q: 'Fix this. You mean that you did not understand.',
            format: 'errorSpot',
            prompt: "Je n'ai pas comprendu.",
            accept: [fr(A(633)), "Je n'ai pas compris"],
            answer: fr(A(633)),
            why: `comprendre is prendre with com in front, so its past form is compris. The gap and the negative are ${unitRef(PASSE_UNIT, 'a2')}'s and they are unchanged; the only thing this lesson touched is the word after the pas.`,
            ref: RECAP_SECTION_ID,
          },
          {
            q: 'vouloir. Write the past form.',
            format: 'typeIn',
            accept: ['voulu'],
            answer: 'voulu',
            why: 'The -u group, and the one -oir verb in it that keeps most of itself. voul- is still there.',
            ref: U_SECTION_ID,
          },
        ],
      },
    ],
    terms: ['pastForm', 'theGroup', 'theFront'],
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
      `${REFRAME} ${GROUP_CLAIM}`,
      `-is, -it, -u and -ert, and the -u group is ${GROUP_SIZES['-u']} of the thirty-three on its own.`,
      `${A215_REFRAME} That is ${unitRef(FAMILY_UNIT, 'a2')}'s line and it is exactly as true of the past form as it was of the present.`,
      ODD_CLAIM,
      EU.claim,
      CIRCUMFLEX.untestable,
      ALSO_A_WORD_CLAIM,
      `${ETRE_DEFERRAL} You will need all of this again at ${unitRef(SCHOOL_UNIT)}, where the whole conversation is about what you studied and how it went.`,
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
    title: 'The word that was not a word',
    sections: [SCENE_SECTION_ID, GOALS_SECTION_ID, NOTMANY_SECTION_ID],
    milestone: 'You know why the rule you learned last lesson produces a word that does not exist, and you know that the answer is five things rather than thirty-three.',
    estScreens: 22,
    restPoints: [`${SCENE_SECTION_ID}/after-break`],
  },
  {
    id: 'act2',
    title: 'What you already have',
    sections: [RECAP_SECTION_ID, MACHINE_SECTION_ID],
    milestone: `You can see that ${unitRef(PASSE_UNIT, 'a2')}'s shape has not moved at all, and you can see the six places where the part of it you build breaks.`,
    estScreens: 14,
    restPoints: [`${MACHINE_SECTION_ID}/after`],
  },
  {
    id: 'act3',
    title: 'Five groups',
    sections: [
      MAP_SECTION_ID, IS_SECTION_ID, FRONT_SECTION_ID, IT_SECTION_ID, U_SECTION_ID,
      BATCH1_SECTION_ID, ERT_SECTION_ID, ODD_SECTION_ID, FIRSTWORD_SECTION_ID,
    ],
    milestone: 'You can put any of the thirty-three in its group, you get every compound of them free, and you have met the second form of every irregular verb you already knew.',
    estScreens: 74,
    restPoints: [`${IS_SECTION_ID}/after`, `${U_SECTION_ID}/after`, `${ERT_SECTION_ID}/after`],
  },
  {
    id: 'act4',
    title: 'The ones that look derivable',
    sections: [DERIVABLE_SECTION_ID, WHICH_TRAP_SECTION_ID, EU_SECTION_ID, ROOF_TRAP_SECTION_ID, ERRORS_SECTION_ID],
    milestone: 'You have seen what you would have produced, beside what the language has, for all six of the verbs that invite it. And you can say eu and spell dû.',
    estScreens: 46,
    restPoints: [`${WHICH_TRAP_SECTION_ID}/after`, `${EU_SECTION_ID}/after`],
  },
  {
    id: 'act5',
    title: 'Out loud',
    sections: [UNSEEN_SECTION_ID, SCENARIO_SECTION_ID, DICTATION_SECTION_ID, SPEAK_SECTION_ID],
    milestone: 'You answered for five verbs the lesson never showed you, you held the conversation the kettle lost, and you spelled eleven forms you could not have built.',
    estScreens: 44,
    restPoints: [`${SCENARIO_SECTION_ID}/after`, `${DICTATION_SECTION_ID}/halfway`],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [REVIEW_SECTION_ID, PROGRESS_SECTION_ID, QUIZ_SECTION_ID, ROUNDUP_SECTION_ID],
    milestone: 'You wrote past forms for verbs that appear nowhere in this lesson, which is the half of it a list could never have taught you.',
    estScreens: 48,
    restPoints: [`${REVIEW_SECTION_ID}/after`, `${QUIZ_SECTION_ID}/r3-the-front`, `${QUIZ_SECTION_ID}/r5-the-roof`],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DECK TRANCHES
 *
 *  A tranche releases an item into the SRS, and nothing may be released before
 *  the acts have shown it. One tranche per act, in act order.
 * ═══════════════════════════════════════════════════════════════════════ */

const DECK_TRANCHE: string[][] = [
  // Act 1: the scene, and the frame row the break card lands on.
  [...[624, 625, 626].map(A), A(591)],
  // Act 2: the recap, and the six naming forms the machine screen names.
  [
    A(633), A(616), A(617),
    namingId('pris'), namingId('mis'), namingId('fait'),
    namingId('ouvert'), namingId('couru'), namingId('vu'),
  ],
  // Act 3: every group, every member, and every naming form not already out.
  [
    ...[592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605,
      606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 618, 619, 620, 621].map(A),
    namingId('appris'), namingId('compris'), namingId('remis'), namingId('promis'),
    namingId('assis'), namingId('dit'), namingId('écrit'), namingId('conduit'),
    namingId('construit'), namingId('lu'), namingId('bu'), namingId('su'),
    namingId('pu'), namingId('voulu'), namingId('dû'), namingId('connu'),
    namingId('venu'), namingId('tenu'), namingId('reçu'), namingId('cru'),
    namingId('offert'), namingId('couvert'), namingId('souffert'),
    namingId('été'), namingId('eu'), namingId('né'), namingId('mort'),
    ...ALSO_A_WORD.map((w) => w.id), 'fr.a1.emotions.034',
  ],
  // Act 4: the two contrast rows the traps and the listening turn on.
  [...[622, 623].map(A)],
  // Act 5: the conversation.
  [...[627, 628, 629, 630, 631, 632].map(A)],
  // Act 6 releases nothing: it is the review deck, the progress card, the exam
  // and the roundup, and everything they name has already been released.
  // `validateLesson` requires ONE SLICE PER ACT, so the slice is present and
  // empty rather than absent — an absent one would mean some act's cards never
  // fire.
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
    id: 'err-built-form',
    description: `Runs ${unitRef('a2.05')}\'s regular rule on an irregular verb and produces a word that does not exist: « j\'ai prendu », « j\'ai ouvri ». THE ERROR THIS LESSON EXISTS TO PREVENT, and it is produced by applying a rule correctly rather than by carelessness, which is why it survives correction.`,
    detectOn: [MACHINE_SECTION_ID, WHICH_TRAP_SECTION_ID, `${QUIZ_SECTION_ID}/r1-the-machine`],
    drill: 'drill-the-machine',
    retest: 'retest-the-machine',
  },
  {
    id: 'err-wrong-group',
    description: `Puts a form in the group its naming form points at: courir into -i because it ends in -ir, prendre into -u because it ends in -re. It comes from treating the ending of the naming form as evidence, which is exactly what ${unitRef('a2.05')} taught and exactly what does not hold here.`,
    detectOn: [MAP_SECTION_ID, IT_SECTION_ID, `${QUIZ_SECTION_ID}/r2-which-group`],
    drill: 'drill-which-group',
    retest: 'retest-which-group',
  },
  {
    id: 'err-front-not-free',
    description: 'Learns a compound verb as a separate item instead of covering its front: treats « repris » as a thirty-fourth thing to memorise. It costs nothing today and it is the reason the list feels infinite, because every compound of every member looks like a new fact.',
    detectOn: [FRONT_SECTION_ID, UNSEEN_SECTION_ID, `${QUIZ_SECTION_ID}/r3-the-front`],
    drill: 'drill-the-front',
    retest: 'retest-the-front',
  },
  {
    id: 'err-eu',
    description: 'Reads « eu » and says something with an o or an uh in it. THE ONE ERROR IN THIS LESSON THAT IS ABOUT A SOUND: the two letters spell a single French u and nothing about them suggests it, so a learner who meets the form on paper before hearing it says it wrongly every time.',
    detectOn: [EU_SECTION_ID, ODD_SECTION_ID, `${QUIZ_SECTION_ID}/r4-two-letters`],
    drill: 'drill-two-letters',
    retest: 'retest-two-letters',
  },
  {
    id: 'err-circumflex',
    description: 'Writes « du » for the past form of devoir. The only accent in the set that changes what a word means, and the one error in the lesson that no typed surface, no spot-the-error and no listening question in this app can catch, because all three strip it or cannot hear it.',
    detectOn: [ROOF_TRAP_SECTION_ID, `${QUIZ_SECTION_ID}/r5-the-roof`],
    drill: 'drill-the-roof',
    retest: 'retest-the-roof',
  },
  {
    id: 'err-naming-form',
    description: `Leaves the naming form behind avoir: « j\'ai prendre le bus ». It is ${unitRef('a2.05')}\'s error arriving by a new route, in which the learner looks for the past form, does not find one, and ships the verb as it stands rather than producing a non-word.`,
    detectOn: [RECAP_SECTION_ID, ERRORS_SECTION_ID, `${QUIZ_SECTION_ID}/r6-cold`],
    drill: 'drill-cold',
    retest: 'retest-cold',
  },
];

/* A `LessonDrill` is `sort` with buckets and ITEM IDS, `flashcard` with pairs,
 * or a one-question `mcq` with `q`/`opts`/`correct`/`why`. `items` is a list of
 * corpus ids and NOT a list of questions.                                     */

const DRILLS = [
  {
    id: 'drill-the-machine',
    title: 'What the rule would give',
    format: 'flashcard' as const,
    coach: `${DERIVABLE_CLAIM} The naming form is on the front and the form the language has is on the back.`,
    pairs: DERIVABLE.slice(0, 4).map((d) => [d.verb, d.right] as [string, string]),
  },
  {
    id: 'retest-the-machine',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'mettre. Which is the past form?',
    opts: ['mettu', 'mis', 'metti'],
    correct: 1,
    why: 'The -is group, with prendre. The first option is what the -RE rule gives and it is not a word.',
  },
  {
    id: 'drill-which-group',
    title: 'One group each',
    format: 'sort' as const,
    buckets: ['-is', '-it', '-u', '-ert'],
    items: [rowOf('pris'), rowOf('dit'), rowOf('vu'), rowOf('ouvert'), rowOf('compris'), rowOf('couru')],
    coach: `${GROUP_CLAIM} Read the second word of each sentence and put it in its group.`,
  },
  {
    id: 'retest-which-group',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'courir ends in -ir. Which group is couru in?',
    opts: ['-i, with finir', '-ert, with ouvrir', '-u'],
    correct: 2,
    why: 'The -u group, which takes members from every kind of verb there is. The ending of the naming form decides nothing.',
  },
  {
    id: 'drill-the-front',
    title: 'Cover the front',
    format: 'flashcard' as const,
    coach: `${A215_REFRAME} The compound is on the front and the form is on the back.`,
    pairs: [
      ['apprendre', 'appris'],
      ['comprendre', 'compris'],
      ['remettre', 'remis'],
      ['découvrir', 'découvert'],
    ] as [string, string][],
  },
  {
    id: 'retest-the-front',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'reprendre. Which is the past form?',
    opts: ['reprendu', 'repris', 'reprené'],
    correct: 1,
    why: 'Cover the re and prendre is underneath, so it is pris with re in front.',
  },
  {
    id: 'drill-two-letters',
    title: 'The one you cannot read',
    format: 'sort' as const,
    buckets: ['starts on the vowel', 'has a consonant first'],
    items: [rowOf('eu'), A(622), rowOf('bu'), rowOf('vu')],
    coach: EU.why,
  },
  {
    id: 'retest-two-letters',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'avoir. Which is the past form?',
    opts: ['avu', 'eu', 'avoiru'],
    correct: 1,
    why: 'Two letters, said as one vowel, and there is no route to them from avoir.',
  },
  {
    id: 'drill-the-roof',
    title: 'With it and without',
    format: 'sort' as const,
    buckets: ['had to', 'some'],
    items: [rowOf('dû'), A(623)],
    coach: CIRCUMFLEX.why,
  },
  {
    id: 'retest-the-roof',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'devoir. Which is the past form?',
    opts: ['du', 'dû', 'devu'],
    correct: 1,
    why: 'With the roof. Without it the word means "some" and has nothing to do with devoir.',
  },
  {
    id: 'drill-cold',
    title: 'No group named',
    format: 'flashcard' as const,
    coach: 'The naming form is on the front and nothing else is. This is what the exam asks for.',
    pairs: [
      ['dire', 'dit'],
      ['voir', 'vu'],
      ['mourir', 'mort'],
      ['vouloir', 'voulu'],
    ] as [string, string][],
  },
  {
    id: 'retest-cold',
    title: 'One more time',
    format: 'mcq' as const,
    q: "Which one is French? You mean that you took the bus.",
    opts: [WRONG[4]!.wrong, fr(rowOf('pris')), WRONG[0]!.wrong],
    correct: 1,
    why: 'The naming form cannot stand behind avoir and neither can a form the rule invented.',
  },
];

/* ─── The reference sheet ──────────────────────────────────────────────────
 *
 * THE BRIEF CALLS THIS THE HIGHEST-VALUE SHEET IN A2 and says the learner will
 * return to it for months. It holds all thirty-three, grouped, plus the two this
 * lesson derives rather than teaches, so nothing a2.05 handed forward is
 * orphaned.
 *
 * NO `cheatSheet`. ReferenceSheet.tsx draws `teach`, `letterGrid` and `table`
 * and nothing else, so a cheatSheet here would render its title and nothing
 * under it. a1.13 ships exactly that today.
 *
 * THREE COLUMNS. a2.04 measured a FOUR-column table inside a sheet clipping on a
 * Pixel 6. Every table here is three wide and the widest cell is `construire`,
 * which is ten, inside a2.17's tapTable eleven and a2.19's sheet twelve.
 *
 * A `sheetId` resolves ONLY inside the lesson that declares it (schema.ts:3490,
 * lesson-contract.test.ts:91), so this cannot link a2.05's. What this lesson
 * inherits from that one is the rule; what this sheet holds that no earlier one
 * could is the list.                                                          */

const groupTable = (g: '-is' | '-it' | '-u' | '-ert' | 'odd', id: string, title: string) => ({
  type: 'table' as const,
  id,
  title,
  layer: 'deep' as const,
  cols: ['Verb', 'Past form', 'Means'],
  rows: formsOf(g).map((f) => [f.verb, f.past, f.en]),
});

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    // THIRTY-FIVE CHARACTERS. a2.19 §3 measured the sheet's own title cut at 37
    // in the HEADER BAR while rendering in full on the card that opens it.
    title: 'All thirty-three, by group',
    layer: 'deep',
    contains: ['-is', '-it', '-u', '-ert', 'No group', 'The move', 'Two more'],
    sections: [
      groupTable('-is', 'sheet-is', 'The -is group'),
      groupTable('-it', 'sheet-it', 'The -it group'),
      groupTable('-u', 'sheet-u', 'The -u group'),
      groupTable('-ert', 'sheet-ert', 'The -ert group'),
      groupTable('odd', 'sheet-odd', 'And the five with none'),
      {
        type: 'teach',
        id: 'sheet-move',
        title: 'The move',
        layer: 'deep',
        body: `${REFRAME} ${THE_MOVE}`,
      },
      {
        type: 'teach',
        id: 'sheet-front',
        title: 'Cover the front',
        layer: 'deep',
        body: A215_CREDIT,
      },
      {
        type: 'teach',
        id: 'sheet-more',
        title: 'Two more, and where they belong',
        layer: 'deep',
        // The two forms this lesson derives rather than teaches, so that every
        // name a2.05 handed forward has a home. §2 of the corpus header.
        body: DERIVED_ONLY.map((d) => `${d.verb} gives ${d.past}, which is ${d.from} with a front on it.`).join(' ')
          + ` Neither verb exists in this app as a word of its own, which is why neither has a screen: the front-covering move gives you both without one.`,
      },
      {
        type: 'teach',
        id: 'sheet-cannot',
        title: 'What nothing here can test',
        layer: 'deep',
        body: `${CIRCUMFLEX.untestable} The same is true of the cedilla on reçu and of every accent in these tables.`,
      },
      {
        type: 'teach',
        id: 'sheet-next',
        title: 'What is still coming',
        layer: 'deep',
        body: `${ETRE_DEFERRAL} And the little word that goes in front of a verb like s'asseoir is ${unitRef(REFLEXIVE_UNIT)}. The one case where a past form agrees after avoir needs the words that replace an object, which is ${unitRef(PRONOUN_UNIT)}.`,
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ═══════════════════════════════════════════════════════════════════════ */

export const PARTICIPES_LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  // The lesson's index WITHIN its unit, not its place on the trail.
  seq: 1,
  title: UNIT.sub,
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`) and a2.20 sits at
  // seq 17. The stored value is a fallback and has to agree with what the
  // renderer computes; the batch checks it against the live unit.
  tag: `A2 · LEÇON ${String(UNIT.seq).padStart(2, '0')}`,
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped grammar jargon here in v1 because every
  // guard in the band walked `sections`, `sheets` and `terms` and not this. The
  // walk in the batch, the merge and the test includes `intro` and `overview`,
  // and this field is pinned by its own assertion.
  //
  // AND IT NAMES NO UNIT ID. a2.05 measured that it was the only one of 58
  // lessons whose intro did, and that the cover is the first screen a learner
  // sees, before any card has credited anything.
  intro:
    'Last lesson you were given a way of building the second word of a past sentence out of the group the verb is in, and it works for almost every verb in French. Thirty-three verbs do not play. Their second word cannot be worked out from anything, and they are the ones people say all day: took, did, said, saw, had, been. What makes this a lesson rather than a list is that thirty-three is not the number you have to hold. Twenty-eight of them fall into four groups by their ending, five are in none of them, and once you can sort a verb you can produce forms nobody has shown you.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v3: TWO THINGS A PIXEL 6 FOUND AND NO HOST GATE COULD.
  //
  //   1  A cardDeck's `hint` IS ONE LINE AND ELLIPSISES. `s08-front` shipped
  //      « ...a sentence you have already read. » and the phone drew
  //      « ...you have alread… ». Measured at the cut: 64 characters shown of
  //      71. A seventh width defect in this band and the only one of the seven
  //      that no host gate could ever have found. Budget set at HINT_MAX = 60
  //      and guarded in all three layers.
  //   2  A DOUBLED FULL STOP in the eu listening. Question 2 quoted two French
  //      lines that already end in one, so the screen read « J'ai bu un café.
  //      against J'ai eu peur.. ». `noStop()` now strips the quoted stop, and a
  //      guard refuses `..` on any learner surface.
  //
  // v2: THE COMPOUND SCREEN SHOWED TWO OF THE FOUR COMPOUNDS AND CLAIMED FOUR.
  //     `s08-front` carried cards for appris and remis and named compris and
  //     promis only through their naming forms, so the screen that exists to say
  //     « four of the seven are free » demonstrated two. Found by this lesson's
  //     own test, which asserts the four by name, and not by the batch, whose
  //     group check is satisfied by the -is section alone.
  //
  //     The counter moves rather than the body being corrected under v1:
  //     Postgres already held v1, and two different bodies under one number is
  //     the drift ledger §10 exists to prevent. a2.09 set the precedent.
  version: 5,

  grammarAssumed: [
    'The passé composé with avoir, in six persons, introduced in a2.05',
    'The regular past participle: -er to -é, -ir to -i, -re to -u, introduced in a2.05',
    'That ne … pas encloses the auxiliary and not the participle, introduced in a2.05',
    'That the participle is invariable after avoir, introduced in a2.05',
    'The placement of a short adverb between auxiliary and participle, introduced in a2.05',
    'The present of prendre, mettre and their compounds, and the compound-verb principle, introduced in a2.15',
    'The present of aller, venir and tenir, introduced in a2.02',
    'The present of faire, dire and lire, introduced in a2.12',
    'The present of vouloir, pouvoir and devoir, introduced in a2.13',
    'The present of savoir and connaître, introduced in a2.14',
  ],
  grammarIntroduced: [
    'The irregular past participles, thirty-three forms, presented as four morphological classes by termination (-is, -it, -u, -ert) plus a residue of five suppletive or unclassifiable forms',
    'That the conjugation class of the infinitive does not predict the participle class, so an -RE verb may give -is, an -IR verb -u or -ert, and an -OIR verb -u',
    'That a prefixed verb takes the participle of its base verb, extending a2.15\'s compound principle from the present to the past participle',
    'The participle of avoir as eu, /y/, an orthography with no phonetic correspondence to its letters',
    'The circumflex on dû as the sole orthographic distinction from the partitive du, and its loss in the feminine due',
    'That five participles in the set are lexicalised as independent adjectives or nouns in the published corpus',
    'être as auxiliary is named for venu, né and mort and reserved for a2.21; participle agreement is neither taught nor exemplified here',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Trente-trois formes, cinq groupes, et rien à construire.',
    minutes: 34,
    difficulty: 3,
    glyph: '🗂️',
    screens: 248,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PARTICIPES_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-20-participes.test.ts, because a constraint
    // on how something is recorded becomes invisible the moment the clip is
    // delivered. Invariants §10: anything the learner must hear as a CONTRAST is
    // ONE TAKE with one voice, because two recordings are two performances and
    // the learner will hear the performance rather than the language. THE TWO
    // THAT MUST BE SINGLE TAKES ARE rec-a2-20-eu AND rec-a2-20-roof.
    //
    // AND THE HOUSE-COPY RULES APPLY HERE. a2.05 §3: `audio.recorded[].desc` is
    // authored prose that ships in the lesson body, and every house-copy walk in
    // this band built its string out of sections + sheets + terms + intro +
    // overview + acts + drills and stopped. This build's walk reads `audio`.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    recorded: [
      {
        id: 'rec-a2-20-scene',
        desc:
          `THE KETTLE ON A MONDAY, AND THE SAME COLLEAGUE AS ${unitRef('a2.05')}. She has asked a friendly question and is waiting for an answer she expects to be short. `
          + 'THE LEARNER\'S OWN LINE IS THE TAKE THAT HAS TO BE RIGHT. « Samedi, j\'ai... j\'ai prendu... » is somebody who is not hesitating out of shyness: '
          + 'the first word came out fine, the second one was produced by a rule, and it is wrong in a way he cannot hear. READ « prendu » PLAINLY AND WITH '
          + 'CONFIDENCE. He believes it. A hesitant or apologetic reading turns the scene into somebody guessing, and the whole point is that he was not guessing. '
          + 'HER LAST LINE IS THE EXPENSIVE ONE. « Pardon ? Tu as fait quoi ? » is a person who did not receive a word, not a person being patient with a foreigner. '
          + 'No warmth-about-a-mistake, no encouragement, no slowing down. She simply did not get it.',
        clipIds: [fr(A(624)), SCENE_STALL, fr(A(625)), SCENE_ERROR, fr(A(626))],
      },
      {
        id: 'rec-a2-20-which',
        desc:
          'THE AUDIO STEP OF THE GROUP TRAP, AND IT IS A WRONG-THEN-RIGHT TAKE. Four lines, one take, in this order: '
          + '« J\'ai prendu le bus. » then « J\'ai pris le bus. », then « J\'ai ouvri la porte. » then « J\'ai ouvert la porte. » '
          + 'READ THE WRONG ONES PLAINLY AND AT ORDINARY PACE rather than comically or hesitantly. Both are perfectly pronounceable French shapes and both are '
          + 'exactly what a careful learner produces; a reading that signals the error teaches that the error is audible, and to a learner who has not met the '
          + 'real form it is not. '
          + 'DO NOT SEPARATE THE TWO HALVES OF EACH PAIR WITH A LONG PAUSE. The pair is the teaching and it works when the two lines sit against each other.',
        clipIds: [WRONG[0]!.wrong, WRONG[0]!.right, WRONG[1]!.wrong, WRONG[1]!.right],
      },
      {
        id: 'rec-a2-20-eu',
        desc:
          'THE HARDEST TWO LETTERS IN THE LESSON, ONE TAKE, ONE VOICE, FIVE LINES, AND THE BRIEF NAMES THIS TAKE SPECIFICALLY. In this order: '
          + '« J\'ai eu peur. » « J\'ai eu froid. » « Non, je n\'ai pas eu le temps. » « J\'ai bu un café. » « J\'ai vu Marie. » '
          + 'APART, THE LEARNER COMPARES FIVE PERFORMANCES INSTEAD OF ONE VOWEL WITH AND WITHOUT A CONSONANT IN FRONT OF IT. '
          + 'THE VOWEL IS THE SAME IN ALL FIVE AND MUST BE THE SAME. /y/ every time: eu, bu, vu. The whole teaching is that « eu » is that vowel with nothing at '
          + 'all in front of it, and a reader who colours the bare one differently from the two with consonants is teaching a distinction that does not exist. '
          + 'DO NOT LENGTHEN « eu ». It is short, unstressed and easy to miss, and the learner is being taught to catch it as it really arrives. In the third '
          + 'line it sits between « pas » and « le temps » and it should be barely there.',
        clipIds: [fr(rowOf('eu')), fr(A(622)), fr(A(630)), fr(rowOf('bu')), fr(rowOf('vu'))],
      },
      {
        id: 'rec-a2-20-roof',
        desc:
          'THE CIRCUMFLEX PAIR, ONE TAKE, ONE VOICE, AND THE BRIEF NAMES THIS TAKE SPECIFICALLY. Four lines in this order: '
          + '« J\'ai dû partir. » « J\'ai bu du thé. » « la somme due » « J\'ai reçu ton message. » '
          + 'THE FIRST TWO ARE THE POINT AND THEY MUST BE INDISTINGUISHABLE WHERE THEY OVERLAP. « dû » in the first line and « du » in the second are the same '
          + 'sound, /dy/, and the whole mission rests on the learner hearing that there is nothing to hear. Read them identically. Any difference at all, of '
          + 'length or weight or vowel colour, teaches that the accent is audible, and it is not. '
          + 'NOT A WRONG-THEN-RIGHT TAKE. All four lines are correct French and none of them is an error being demonstrated. '
          + 'THE FOURTH LINE IS THE CONTROL. The cedilla in « reçu » changes how the c is said and the learner should hear that it does, so that the contrast with '
          + 'the circumflex, which changes nothing audible at all, has something to sit against.',
        clipIds: [fr(rowOf('dû')), fr(A(623)), `la somme ${CIRCUMFLEX.feminine}`, fr(rowOf('reçu'))],
      },
      {
        id: 'rec-a2-20-groups',
        desc:
          'THE FIVE GROUPS, ONE TAKE, AS FIVE LINES IN THE ORDER THE MAP PRINTS THEM: « J\'ai pris le bus. » « J\'ai dit oui. » « J\'ai vu Marie. » '
          + '« J\'ai ouvert la porte. » « J\'ai fait le ménage. » '
          + 'THE FIRST TWO WORDS OF ALL FIVE ARE IDENTICAL AND MUST SOUND IDENTICAL. « J\'ai » is the constant across the whole lesson and the second word is the '
          + 'only thing that changes; a reader who varies the opening is hiding the one variable the learner is being asked to attend to. '
          + 'GIVE THE SECOND WORD ITS ORDINARY WEIGHT AND NO MORE. These are not headline words being demonstrated, they are the middles of ordinary sentences, '
          + 'and the learner has to be able to catch them where they actually sit.',
        clipIds: [fr(rowOf('pris')), fr(rowOf('dit')), fr(rowOf('vu')), fr(rowOf('ouvert')), fr(rowOf('fait'))],
      },
      {
        id: 'rec-a2-20-dictee',
        desc:
          'THE DICTÉE LINES, ONE TAKE EACH, CLEAN AND UNHURRIED, WITH NO CONTRAST INTENT AT ALL. This is the opposite instruction to rec-a2-20-eu and '
          + 'rec-a2-20-roof: here the learner is spelling rather than comparing, and a paired reading would hand them the answer. Read each line as though it '
          + 'were the only line. '
          + 'THE SECOND WORD IS WHAT IS BEING SPELLED and it is usually one or two syllables in the middle of a short sentence. Do not lift it and do not pause '
          + 'in front of it. '
          + 'ONE LINE HOLDS « dû » AND ONE HOLDS « du », and they are the same sound. Nothing in the reading may separate them: the learner is being asked to '
          + 'work out which word is meant from what the sentence says, and the take must not help. '
          + 'SAY IT THE WAY SOMEBODY WOULD SAY IT, at the pace of somebody dictating a phone number to a friend.',
        clipIds: DICTEE_IDS.map((id) => fr(id)),
      },
      {
        id: 'rec-a2-20-talk',
        desc:
          'THE CONVERSATION, HER LINES ONLY, ONE TAKE, AS ONE CONTINUOUS EXCHANGE RATHER THAN AS SIX SEPARATE PROMPTS. She is the same colleague, later in the '
          + 'week, and this time the exchange works. '
          + 'EVERY QUESTION IS ASKED WITHOUT INVERSION and should sound completely ordinary: « Tu as lu le journal ? » is a statement with a question mark on it, '
          + 'which is what people say. '
          + 'NEITHER « as » NOR « a » MAY BE STRESSED anywhere in the take. They are the words carrying the tense and the learner has to get used to catching them '
          + 'unstressed, because that is the only way they will ever hear them.',
        clipIds: [fr(A(627)), fr(A(629)), fr(A(631)), fr(A(624)), fr(A(626)), fr(A(632))],
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

export const PARTICIPES_ITEM_IDS = ITEM_IDS;
export const PARTICIPES_DICTEE_IDS = DICTEE_IDS;
export const PARTICIPES_SPEAK_IDS = SPEAK_IDS;
export const PARTICIPES_SECTIONS = SECTIONS;
export const PARTICIPES_ACTS = ACTS;
export const PARTICIPES_TRANCHES = DECK_TRANCHE;
export const PARTICIPES_SHEETS = SHEETS;
export const PARTICIPES_DRILLS = DRILLS;
export const PARTICIPES_ERROR_TRIGGERS = ERROR_TRIGGERS;
export const PARTICIPES_SCENE_BEATS = SCENE_BEATS;

/** The sections in which a form the rule invented may legally appear. Every
 *  other string in the lesson, and the sheet, the terms, the intro and the
 *  overview, is checked against WRONG and against BUILT_FORMS and must not
 *  contain one.
 *
 *  THE SCENE IS ON THIS LIST, unlike a2.05's, because what goes wrong in this
 *  scene IS a non-word: the learner produces « prendu » out loud and the
 *  sentence stops. That is the difference between the two lessons' failures and
 *  it is why the scene needs broken French and a2.05's did not.
 *
 *  THE UNSEEN AND TRAP DRILLS ARE ON IT because every group offers the invented
 *  form as its distractor, which is the whole question. */
export const WRONG_FORM_SECTIONS = [
  SCENE_SECTION_ID, MACHINE_SECTION_ID, DERIVABLE_SECTION_ID,
  WHICH_TRAP_SECTION_ID, ERRORS_SECTION_ID, UNSEEN_SECTION_ID,
  IS_SECTION_ID, IT_SECTION_ID, U_SECTION_ID, ERT_SECTION_ID, QUIZ_SECTION_ID,
  REVIEW_SECTION_ID,
] as const;
