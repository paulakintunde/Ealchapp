

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }
import { unitRef } from './_unit-ref.ts';// a2.15.l1 "Irréguliers 5 : prendre, mettre, battre" — the mission journey.
//
// ── THIS IS A FIRST BUILD ──────────────────────────────────────────────────
//
// Probed rather than assumed: the unit dump says `"lessonIds": []`, so there is
// no pre-v2 stub to rebuild and the version counter starts at 1.
//
// ── HOW IT IS SIZED, AND WHY ──────────────────────────────────────────────
//
// TWENTY-EIGHT SECTIONS AND SIX ACTS.
//
//   act 1  the scene and the goal   3 missions
//   act 2  the three paradigms      5 missions
//   act 3  THE FAMILY               8 missions   the heaviest act, alone
//   act 4  the trap                 3 missions
//   act 5  production               5 missions
//   act 6  prove it                 4 missions
//
// Eighteen cells get five missions and the family gets eight. If that were the
// other way round this would be a table with a story attached, and a table does
// not need a lesson. a2.13 measured that there is NO ceiling on section count in
// schema.ts (the only assertion is `sections must not be empty`) and that the
// corpus has shipped 31 sections and 145 questions on real devices; this lesson
// is smaller than a2.13 on every axis and the same size as a2.14.
//
// ── THE LAYOUT CLAIMS THE BRIEF MAKES, AND WHERE THEY ARE ─────────────────
//
// 1. "nous prenons and ils prennent belong on one screen, adjacent, with the
//    a2.09 back-reference visible in the same section. This is the layout the
//    test must assert."
//
//    That is `s05-doubled`. The two rows are the first two examples, in that
//    order, asserted BY INDEX, and `a2.09` is named in the section's own prose
//    rather than in a term chip, so a guard reading the section finds it.
//
// 2. "One grid showing a head verb and two of its compounds in the same
//    conjugation, so the identity is visible rather than asserted."
//
//    That is `s10-identity`: six lines, each carrying prendre, apprendre and
//    comprendre at the same person. It is `examples` and not `table`, because a
//    table at layer core is a table-in-core density failure. The full grid lives
//    in the sheet at layer deep.
//
// 3. "One table for the three paradigms, one tapTable, then stop."
//
//    The table is `sheet-three`. The tapTable is `s13-which`, five rows, which
//    is inside the six-row Pixel 6 ceiling for a section that does not own its
//    layout.
//
// 4. "groupDrill for the unseen-compound production, against the clock."
//
//    That is `s26-unseen`, the last mission before the exam. It is the strongest
//    thing a MISSION can do here and it is not free-text production: a
//    groupDrill `check` is an mcq. The production is round 4, which types four
//    forms of two verbs that appear on no card in this lesson. Corpus header,
//    item 5.
//
// ── LAYOUT NOTES THAT ARE BUGS, NOT PREFERENCES ───────────────────────────
//
// - `size` is not decoration. density.logic.ts reads `xl` as a 12-word cap on
//   EVERY string in the section except `say`, `hint`, `note`, `why` and `tip`.
// - `commonErrors` needs `swipe: true` or it renders a blank screen.
// - `tapTable` is NOT in ownsLayout(), so it renders inside a scrolling page.
// - Three term chips per section, maximum.
// - ONE quiz per lesson. lessonPager.logic.ts takes `sections.find(quiz)` and a
//   second one is silently never rendered.
// - `listenChoose` MUST NOT be offered on prends/prend, mets/met or bats/bat.
//   All three are homophone groups. The two this lesson ships are
//   `il prend` against `ils prennent` and `il met` against `ils mettent`, which
//   are genuinely different sounds.
// - `practice` with `skill: 'write'` draws no writing surface.
// - `frSub` is the one field that is deliberately French. a2.14 put an English
//   constant in one and it was the only English line in a column of French subs.

import type {
  ErrorTrigger,
  Lesson,
  LessonAct,
  LessonDrill,
  LessonSection,
  ReferenceSheet,
  SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  A209_REFRAME,
  CONTROL_CLAIM,
  DOUBLING_CLAIM,
  FAMILY_ARITHMETIC,
  NOUS_ON,
  ODD_ONE_OUT,
  PRENDRE_METTRE_TERMS,
  STEM_CLAIM,
} from './prendre-mettre-terms.ts';
import {
  A211_LINE,
  A211_UNIT,
  AUTHORED_IDS,
  DICTATION_IDS,
  EAR_UNIT,
  FAMILIES,
  FAMILY_CLAIM,
  FRAMES,
  HEAD_IDS,
  NEIGHBOUR_UNITS,
  OVER_GENERALISED,
  PARADIGM,
  REFRAME,
  RESERVED_FOR,
  RE_MODEL,
  STEMS,
  STEM_PRINCIPLE,
  STEM_UNIT,
  THE_MOVE,
  UNSEEN,
  VERBS_BOUGHT,
  VERB_ORDER,
  bare,
  compoundIds,
  en,
  fr,
  headIds,
  noStop,
  sub,
  type Verb,
} from './prendre-mettre-corpus.ts';
import {
  EVIDENCE_IDS,
  IMPORTED_IDS,
  evidenceCard,
  evidenceId,
  importedFr,
  namingCard,
  namingId,
  repairedRespell,
} from './prendre-mettre-imported.ts';

export { FAMILY_ARITHMETIC, FAMILY_CLAIM, NOUS_ON, REFRAME, STEM_CLAIM, THE_MOVE };

/* ─── Named section ids, so a guard asserts a PLACE rather than a pattern ──
 *
 * Plain literals rather than reads off SECTIONS, so that a section being RENAMED
 * breaks the guard instead of quietly moving it. */

/** The three paradigms on one screen, one line per person. */
export const GRID_SECTION_ID = 's04-grid';
/** THE FIRST LAYOUT CLAIM. nous prenons and ils prennent, adjacent, with a2.09
 *  named in the same section. */
export const DOUBLED_SECTION_ID = 's05-doubled';
/** THE SECOND LAYOUT CLAIM. A head verb and two of its compounds in the same
 *  conjugation, so the identity is read rather than asserted. */
export const IDENTITY_SECTION_ID = 's10-identity';
/** The one tapTable: which family does this verb belong to. */
export const WHICH_SECTION_ID = 's13-which';
/** The published evidence, in rows this lesson did not write. */
export const EVIDENCE_SECTION_ID = 's15-evidence';
/** The ear, on the one contrast it can carry. */
export const LISTENING_SECTION_ID = 's16-listening';
/** Where a2.11's loop is closed by unit id. */
export const NOTVENDRE_SECTION_ID = 's17-notvendre';
/** The trapDrill: three stems, one verb. */
export const TRAP_SECTION_ID = 's18-trap';
/** The ONLY place the over-generalised form may be printed. */
export const ERRORS_SECTION_ID = 's19-errors';
/** The ONLY home of a2.01's nous/on statement in this lesson. */
export const NOUS_ON_SECTION_ID = 's20-scenario';
/** THE MISSION THIS LESSON EXISTS FOR, and the last one before the exam. */
export const UNSEEN_SECTION_ID = 's26-unseen';
/** The one reference sheet. */
export const SHEET_ID = 'sheet.a2.15.familles';
export const GOALS_SECTION_ID = 's02-goals';
export const BATTRE_SECTION_ID = 's08-battre';
export const BATTRE_FAMILY_SECTION_ID = 's14-combattre';
export const QUIZ_SECTION_ID = 's27-quiz';
export const ROUNDUP_SECTION_ID = 's28-roundup';

/** The two rows the doubling screen must put next to each other, IN THIS ORDER.
 *  The order is the layout claim, so the guards check it by index. */
export const ADJACENT_PAIR = ['fr.a2.verbes.427', 'fr.a2.verbes.429'] as const;

/* ─── The items this lesson touches ───────────────────────────────────────
 *
 * 34 authored plus 12 imported, out of FIVE themes. Five imported rows are
 * repaired and five gain a `flashcard` drill; a sixth row is repaired and
 * carried and appears in no itemId at all.                                   */

const ITEM_IDS = [...new Set([...AUTHORED_IDS, ...IMPORTED_IDS])];

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. Every authored row has it; the four
 *  evidence rows do not, so they are not here. */
const SPEAK_IDS = [
  ...HEAD_IDS,
  ...compoundIds('prendre').filter((id) => id <= 'fr.a2.verbes.446'),
  ...compoundIds('mettre'),
  ...compoundIds('battre'),
];

/** One authored row as a groupDrill item.
 *
 *  `note` carries the respelling and the gloss. a2.13 shipped 59 cards and a2.14
 *  built 53 that passed `respell` and `en` instead, at a size where the renderer
 *  drew neither; e584bd8 fixed that in MissionRich rather than in the content,
 *  so both fields now reach the second line with `note` winning when present.
 *  What still has to hold is that a card puts SOMETHING under the French. */
const rowCard = (id: string) => ({ fr: fr(id), itemId: id, note: `${sub(id)} · ${en(id)}` });

/** One verb's column of authored cells. */
const col = (v: Verb): string[] => headIds(v);

/** THE NAMING FORM OF A HEAD VERB, WHEREVER IT LIVES.
 *
 *  Two of the three are imported and the third did not exist until this build
 *  authored it, so a screen cannot reach for all three through one accessor.
 *  This is the only place that split is written down; everything else calls
 *  these two. */
const NAMING_ROW: Record<Verb, string> = {
  prendre: namingId('prendre'),
  mettre: namingId('mettre'),
  battre: 'fr.a2.verbes.421',
};
const verbRespell = (v: Verb): string =>
  (v === 'battre' ? bare(NAMING_ROW[v]) : repairedRespell(NAMING_ROW[v]));
const verbCard = (v: Verb) => (v === 'battre' ? rowCard(NAMING_ROW[v]) : namingCard(v));

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * THE BRIEF'S SCENE, AND IT IS THE DOCTRINE'S SHAPE RATHER THAN AN EXCEPTION.
 *
 * Doctrine §B.2: an A2 scene opens on somebody who started a sentence they could
 * not finish. The brief asks for something exact to this subject: a learner who
 * owns `je prends` completely and stalls on `apprendre`, treating a verb they can
 * already build as a new one, and losing the sentence while they hunt for it.
 *
 * THERE IS NO WRONG FRENCH SENTENCE IN THIS SCENE, deliberately. a2.11 refused
 * to print `ils prendent` on the argument that a learner with nothing to
 * overwrite a wrong form with keeps the wrong form, and at mission 1 of 28 that
 * argument still holds: nobody here has been given the right form yet. The
 * failure is a silence and a switch into English, which is what actually
 * happens, and it costs the rest of the conversation.
 *
 * Beats carry their own `size` and `audio`. The section sets NO size:
 * ownsLayout() ignores it and density.logic.ts would read xl as a 12-word cap.
 *
 * The break card is BUDGETED, not chosen. Ledger §7, measured on a Pixel 6: a
 * heading of about 13 characters, a body of 24 to 26 words, a coach line under
 * 9, and a right-hand reading row whose French stays under about 24 characters
 * so it sets on one line. a2.14 shipped one at 31 and its own Continue went
 * under the pager bar.                                                        */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A climbing gym in Grenoble on a Wednesday evening. You are sitting on a mat pulling your shoes off, and the person next to you starts talking.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'La grimpeuse',
    fr: fr('fr.a2.verbes.453'),
    en: en('fr.a2.verbes.453'),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-15-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Oui... euh...',
    en: 'Yes... uh...',
    stage: 'You have said « je prends » a hundred times this week. The word she used is that verb with two letters on the front of it, and you are searching for it as though you had never met it.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'Four seconds have gone. She is still waiting. What comes out?',
    options: [
      {
        fr: fr('fr.a2.verbes.454'),
        en: 'the same verb she used, given back',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Yes, I learn French here.',
        en: 'and the conversation changes language',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'en-GB' },
      },
    ],
    followUp: {
      works: 'She nods and asks how long you have been at it, in French, and you are still in the conversation.',
      breaks: 'She switches to English without thinking about it and stays there. Everything after this is a chat about climbing shoes in your own language.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La grimpeuse',
    fr: 'Ah, you live here? How long have you been in Grenoble?',
    en: 'Ah, you live here? How long have you been in Grenoble?',
    stage: 'Nobody was unkind and nobody corrected anything. She simply took the shortest route to being understood, and the shortest route was not French.',
    audio: { mode: 'tts', lang: 'en-GB' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'Same verb',
    body: 'You did not need a new verb. You needed the one you already had, with two letters in front of it and nothing else changed at all.',
    wrong: {
      fr: 'je prends',
      ipa: '/ʒə pʁɑ̃/',
      en: 'the one you own',
    },
    right: {
      fr: 'j\'apprends',
      ipa: '/ʒa.pʁɑ̃/',
      respell: '[zha-PRAHⁿ]',
      en: 'and this one is it',
    },
    coach: 'Cover the front and look again.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-15-front' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'This is the last of the five irregular lessons and it is the one that pays for the other four. Three verbs go in and a dozen come out, and the proof is a verb nobody in this lesson is going to show you.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the verb you already had ───────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Climbing Gym',
    frSub: 'À la salle d\'escalade',
    render: 'screens',
    layer: 'core',
    terms: ['coverTheFront', 'theFamily'],
    say: {
      text: 'Nobody in this scene is impatient and nobody is corrected. Watch what four seconds of hunting for a verb actually costs.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A climbing gym, on the mats under the bouldering wall',
      city: 'Grenoble',
      time: 'Wednesday, just after eight',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} ${THE_MOVE}`,
    },
  },

  {
    type: 'goals',
    id: GOALS_SECTION_ID,
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${FAMILY_CLAIM} ${REFRAME}`,
    goals: [
      { t: 'Build all three, in all six persons', s: `${STEM_CLAIM} Eighteen cells, and the endings on every one of them are ones you already write.` },
      { t: 'Get the second n in the right cell', s: `${DOUBLING_CLAIM}` },
      { t: 'Read a verb you have never met', s: `${REFRAME} That is what the last screen before the exam asks for, on a verb this lesson never shows you.` },
      { t: 'Recognise the families', s: `${FAMILY_ARITHMETIC} ${FAMILIES.prendre.join(', ')} and ${FAMILIES.mettre.join(', ')} are the ones worth knowing by name.` },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-families',
    title: 'Learn Three, Get Twelve',
    frSub: 'Trois verbes, douze verbes',
    hint: 'Swipe through the four cards. The third one is the whole lesson.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theFamily', 'coverTheFront'],
    say: 'Four cards. The first two are what you are buying and the third is what you do with it.',
    cards: [
      {
        label: 'What you are buying',
        head: 'Three verbs',
        fr: VERB_ORDER.join(' · '),
        sub: VERB_ORDER.map((v) => verbRespell(v)).join(' · '),
        body: 'Every one of them is irregular, every one of them is common, and the three of them between them cost about ten minutes.',
      },
      {
        label: 'What you get',
        head: `${VERBS_BOUGHT} of them`,
        fr: `${FAMILIES.prendre.slice(0, 2).join(' · ')} · ${FAMILIES.mettre.slice(0, 2).join(' · ')}`,
        sub: 'and every one of these is free',
        body: `${FAMILY_CLAIM} A verb with something on the front of it takes exactly the endings of the verb underneath it, and there is no exception to that anywhere in the language.`,
      },
      {
        label: 'What you do',
        head: 'Cover the front',
        fr: REFRAME,
        sub: 'and you can do that in half a second',
        body: `${THE_MOVE} It is a thing you do with your eye, which is why it survives being needed in the middle of a sentence.`,
      },
      {
        label: 'What it costs',
        head: 'One doubled letter',
        fr: `${PARADIGM[3].forms.prendre} · ${PARADIGM[5].forms.prendre}`,
        sub: 'one n, then two',
        body: `${ODD_ONE_OUT} That is the only genuinely hard thing here, and it sits in one cell out of eighteen.`,
      },
    ],
  },

  /* ── Act 2: three paradigms ────────────────────────────────────────────── */

  {
    // ALL THREE VERBS ON EVERY LINE, so the shapes are compared rather than
    // listed. `examples` and not `table`: a table at layer core is a
    // table-in-core density failure. The full grid is in the sheet.
    type: 'examples',
    id: GRID_SECTION_ID,
    title: 'Three Verbs, Side By Side',
    frSub: 'Les trois, côte à côte',
    layer: 'core',
    terms: ['threeStems', 'theControl', 'theFrame'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-15-grid' },
    say: `Six lines, three verbs on each. ${CONTROL_CLAIM} Read down the first column and watch where it changes.`,
    examples: PARADIGM.map((r, i) => ({
      fr: VERB_ORDER.map((v) => `${r.person === 'il · elle · on' ? 'il' : r.person === 'ils · elles' ? 'ils' : r.person} ${r.forms[v]}`).join('  ·  '),
      en: r.person,
      note: i < 3
        ? 'One sound each across these three lines. Only the word in front tells them apart.'
        : (i === 3
          ? 'The plural arrives. prendre loses its d, the other two gain a second t.'
          : (i === 5
            ? 'All three endings are silent, and prendre has grown a second n to fill the gap.'
            : 'The ordinary -ez, on three stems that have already settled.')),
    })),
  },

  {
    // THE FIRST LAYOUT CLAIM, AND THE TEST ASSERTS THIS SECTION BY ID AND BY
    // INDEX.
    //
    // "nous prenons and ils prennent belong on one screen, adjacent, with the
    // a2.09 back-reference visible in the same section."
    //
    // The two rows are examples 0 and 1. a2.09 is named in `say` and again in
    // the note on the second row, so a mutation that cuts one leaves the other
    // and the guard has to read both. a2.14 §8 measured that a claim made in one
    // string is not a claim: budget four anchors.
    type: 'examples',
    id: DOUBLED_SECTION_ID,
    title: 'One N, Then Two',
    frSub: 'Un n, puis deux',
    layer: 'core',
    terms: ['theDoubling', 'threeStems'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-15-doubling' },
    say: `${DOUBLING_CLAIM} ${Cap(unitRef(STEM_UNIT))} met this first, on appeler and jeter, and it is the same reason both times.`,
    examples: [
      { fr: fr(ADJACENT_PAIR[0]), en: en(ADJACENT_PAIR[0]), note: `One n. The -ons is doing the sounding, so the stem does not have to.` },
      { fr: fr(ADJACENT_PAIR[1]), en: en(ADJACENT_PAIR[1]), note: `Two n, and the -ent makes no sound at all. ${STEM_PRINCIPLE}` },
      { fr: fr('fr.a2.verbes.433'), en: en('fr.a2.verbes.433'), note: 'mettre has both its t here already, and it will still have both in the next line.' },
      { fr: fr('fr.a2.verbes.435'), en: en('fr.a2.verbes.435'), note: `Nothing arrived and nothing left. ${CONTROL_CLAIM}` },
    ],
  },

  {
    // prendre, ALL SIX, AS CARDS THE LEARNER IS SCORED ON.
    type: 'groupDrill',
    id: 's06-prendre',
    title: 'Prendre, All Six',
    frSub: 'Prendre',
    layer: 'core',
    size: 'lg',
    terms: ['threeStems', 'theDoubling', 'theFrame'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-15-grid' },
    say: `Six sentences and every one of them ends in ${FRAMES.prendre.complement}. Everything you notice is happening in the middle.`,
    groups: [
      {
        label: 'the naming form, before anything moves',
        items: [namingCard('prendre')],
        check: {
          q: 'This verb ends in -re. What does that tell you about how it behaves?',
          opts: ['It follows the regular -re pattern', 'Nothing at all', 'It is always in the plural', 'It never takes an object'],
          correct: 1,
          why: `Nothing. ${Cap(unitRef(A211_UNIT))} taught a regular pattern for verbs that end this way and said outright that this one is not in it.`,
        },
      },
      {
        label: 'the three that sound the same',
        items: col('prendre').slice(0, 3).map(rowCard),
        check: {
          q: `${noStop(fr(col('prendre')[0]))}, ${noStop(fr(col('prendre')[1]))}, ${noStop(fr(col('prendre')[2]))}. What do you hear at the end of the verb?`,
          opts: ['A d', 'A nasal vowel and nothing after it', 'An s', 'Two different endings'],
          correct: 1,
          why: 'The d is written and never said, in all three. Two spellings, three persons, one sound, and the word in front is carrying the whole of it.',
        },
      },
      {
        label: 'and the three that do not',
        items: col('prendre').slice(3).map(rowCard),
        check: {
          q: `What happened to the d of ${PARADIGM[3].forms.prendre} and ${PARADIGM[4].forms.prendre}?`,
          opts: ['It moved to the end', 'It is silent, as before', 'It is gone from the spelling', 'It doubled'],
          correct: 2,
          why: `Gone. The stem is ${STEMS.prendre[1]} for nous and vous, and then ${STEMS.prendre[2]} for the last one. Three shapes in six cells.`,
        },
      },
    ],
  },

  {
    // mettre, ALL SIX. The control, and the brief describes it wrongly: `je
    // mets` has ONE t. What never moves is the plural stem.
    type: 'groupDrill',
    id: 's07-mettre',
    title: 'Mettre, All Six',
    frSub: 'Mettre',
    layer: 'core',
    size: 'lg',
    terms: ['theControl', 'theFrame'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-15-grid' },
    say: `Six more, same key, different verb. ${CONTROL_CLAIM} There is one thing to notice and it happens once.`,
    groups: [
      {
        label: 'the naming form',
        items: [namingCard('mettre')],
        check: {
          q: 'How many t does the naming form have?',
          opts: ['One', 'Two', 'Three', 'None'],
          correct: 1,
          why: `Two, and the singular gives one of them back: ${PARADIGM[0].forms.mettre}, ${PARADIGM[1].forms.mettre}, ${PARADIGM[2].forms.mettre}. Then the plural takes it again and keeps it.`,
        },
      },
      {
        label: 'the singular, one t',
        items: col('mettre').slice(0, 3).map(rowCard),
        check: {
          q: `${noStop(fr(col('mettre')[0]))} and ${noStop(fr(col('mettre')[2]))}. What separates them out loud?`,
          opts: ['The t', 'Nothing', 'The vowel', 'The s'],
          correct: 1,
          why: 'Nothing at all. Three persons, two spellings, one sound, exactly as prendre does it one screen back.',
        },
      },
      {
        label: 'the plural, two t, and they stay',
        items: col('mettre').slice(3).map(rowCard),
        check: {
          q: 'Compare these three with the prendre plural. What is different?',
          opts: [
            'These three are all the same stem and prendre had two',
            'These three are longer',
            'prendre has no plural',
            'Nothing is different',
          ],
          correct: 0,
          why: `${CONTROL_CLAIM} mettre goes ${STEMS.mettre.join(' then ')} and stops. prendre goes ${STEMS.prendre.join(' then ')}.`,
        },
      },
    ],
  },

  {
    // battre, FOUR CELLS AND NOT SIX. THE FIRST OF ITS TWO MISSIONS.
    //
    // Four rows because tu and vous are given away by the mettre shape and
    // because there is no published sentence in this corpus in which battre is
    // conjugated. See BATTRE_EVIDENCE.
    type: 'groupDrill',
    id: BATTRE_SECTION_ID,
    title: 'Battre, The Third',
    frSub: 'Battre',
    layer: 'core',
    size: 'lg',
    terms: ['battreSmall', 'theControl'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-15-battre' },
    say: `The third one, and it is the smallest. It copies the verb you have just built, so read these four and check nothing surprises you.`,
    groups: [
      {
        label: 'the naming form, and it is new to this course',
        items: [rowCard('fr.a2.verbes.421'), rowCard('fr.a2.verbes.422')],
        check: {
          q: 'You have just built a verb with exactly this shape. Which one?',
          opts: ['prendre', 'mettre', 'vendre', 'None of them'],
          correct: 1,
          why: `mettre. One t in the singular, two for the whole plural, and no third stem anywhere. ${CONTROL_CLAIM}`,
        },
      },
      {
        label: 'four cells, and you can guess the other two',
        items: col('battre').map(rowCard),
        check: {
          q: `You have seen four. What is the vous form?`,
          opts: ['battez', 'batez', 'battes', 'bats'],
          correct: 0,
          why: 'battez. Two t and the ordinary -ez, which is what mettez does, which is what every verb in this lesson does in that cell.',
        },
      },
    ],
  },

  /* ── Act 3: the family. EIGHT MISSIONS, the heaviest act. ──────────────── */

  {
    type: 'cardDeck',
    id: 's09-free',
    title: 'The Family Rule',
    frSub: 'La règle des familles',
    hint: 'Three cards, one per family.',
    render: 'deck',
    layer: 'core',
    // `lg` and not `xl`. Each card prints a family as a list of three, and
    // density.logic.ts refuses more than one French unit on an xl screen: three
    // verbs separated by a middot are three units, and the validator is right.
    // An xl card here would have to print one verb, which is not a family.
    size: 'lg',
    terms: ['theFamily', 'coverTheFront', 'theCompoundMeaning'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-15-family' },
    // NAMES a2.02 BY UNIT ID, and it is not a decoration. a2.02 built venir at
    // seq 5 and named revenir and devenir on one card without saying what they
    // were; the brief records that it was told to name two or three compounds
    // and leave the principle here. This is the sentence that collects it.
    say: `${REFRAME} Three families, and every verb in them takes the endings of the one at the top. You have already met one without being told what it was: ${unitRef('a2.02')} gave you venir, and revenir and devenir are that same shape.`,
    cards: [
      {
        label: 'family 1',
        head: 'prendre',
        fr: FAMILIES.prendre.join(' · '),
        sub: 'and one more the exam will ask for',
        body: 'Four verbs, one set of endings.',
      },
      {
        label: 'family 2',
        head: 'mettre',
        fr: FAMILIES.mettre.join(' · '),
        sub: 'and one more the exam will ask for',
        body: 'Four more, on a shape you already have.',
      },
      {
        label: 'family 3',
        head: 'battre',
        fr: FAMILIES.battre.join(' · '),
        sub: 'the small one, and the lesson says so',
        body: 'Three, and one of them is worth knowing.',
      },
    ],
  },

  {
    // THE SECOND LAYOUT CLAIM, AND THE ONE THE OWNS ACT EXISTS FOR.
    //
    // "One grid showing a head verb and two of its compounds in the same
    // conjugation, so the identity is visible rather than asserted. Told that
    // compounds follow, the learner believes it; shown three identical rows,
    // they know it."
    //
    // Six lines. Every line carries prendre, apprendre and comprendre at one
    // person, and the guards check line by line that all three are there.
    type: 'examples',
    id: IDENTITY_SECTION_ID,
    title: 'One Verb, Three Names',
    frSub: 'Le même verbe, trois fois',
    layer: 'core',
    terms: ['theFamily', 'coverTheFront', 'theCompoundMeaning'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-15-identity' },
    say: 'Six lines and three verbs on each. Read across and find the thing that changes, and then read across again and notice how little of it there is.',
    examples: PARADIGM.map((r, i) => {
      const person = r.person === 'il · elle · on' ? 'il' : r.person === 'ils · elles' ? 'ils' : r.person;
      const el = (stem: string) => (person === 'je' && /^[aeiou]/.test(stem) ? 'j\'' : `${person} `);
      return {
        fr: [r.forms.prendre, `ap${r.forms.prendre}`, `com${r.forms.prendre}`].map((f) => `${el(f)}${f}`).join('  ·  '),
        en: r.person,
        note: i === 0
          ? 'Two letters, then four, and the verb underneath has not moved a single character.'
          : (i === 3
            ? 'The d disappears from all three at once, because it is the same verb three times.'
            : (i === 5
              ? 'And the second n arrives in all three at once, for the same reason it arrived in the first.'
              : 'The same ending on all three, again.')),
      };
    }),
  },

  {
    // THE PRENDRE FAMILY IN SENTENCES. The grid above is forms; this is the same
    // claim in rows the learner is scored on.
    type: 'groupDrill',
    id: 's11-apprendre',
    title: 'Apprendre, Comprendre',
    frSub: 'La famille de prendre',
    layer: 'core',
    size: 'lg',
    terms: ['theFamily', 'theDoubling', 'theCompoundMeaning'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-15-identity' },
    say: 'Two compounds, three persons each, and the verb inside them is the one you built four screens ago.',
    groups: [
      {
        label: 'the two naming forms',
        items: [namingCard('apprendre'), namingCard('comprendre'), namingCard('surprendre')],
        check: {
          q: 'What do these three have in common with prendre, besides the last six letters?',
          opts: ['They mean the same thing', 'Every ending, in all six persons', 'They are all about learning', 'Nothing much'],
          correct: 1,
          why: `Every ending. The meanings have nothing to do with each other and the endings are identical, which is the whole shape of a family.`,
        },
      },
      {
        label: 'apprendre, three persons',
        items: compoundIds('prendre').slice(0, 3).map(rowCard),
        check: {
          q: `${noStop(fr('fr.a2.verbes.441'))} has one n and ${noStop(fr('fr.a2.verbes.442'))} has two. Why?`,
          opts: [
            'The plural always doubles',
            'For the same reason prenons and prennent do',
            'apprendre is irregular in a different way',
            'It is a spelling mistake'
          ],
          correct: 1,
          why: `The same reason exactly, and ${unitRef(STEM_UNIT)} gave it to you: a silent ending leaves the stem holding the end of the word. Nothing on the front changes that.`,
        },
      },
      {
        label: 'comprendre, three persons',
        items: compoundIds('prendre').slice(3, 6).map(rowCard),
        check: {
          q: 'Which of these would you have to memorise separately?',
          opts: ['The nous form', 'The ils form', 'None of them', 'All three'],
          correct: 2,
          why: 'None. Take the com off the front and you are looking at prendre, and you already have all six of those.',
        },
      },
    ],
  },

  {
    // THE METTRE FAMILY, AND THE PAYOFF ROW: remettre la clé is mettre la clé
    // with two letters on the front and nothing else changed.
    type: 'groupDrill',
    id: 's12-remettre',
    title: 'The Mettre Family',
    frSub: 'La famille de mettre',
    layer: 'core',
    size: 'lg',
    terms: ['theFamily', 'theCompoundMeaning', 'theFrame'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-15-mettre-family' },
    say: `Three compounds, and one of them is on the same key as the verb it came from. Read the last group twice.`,
    groups: [
      {
        label: 'the three naming forms',
        items: [namingCard('permettre'), namingCard('promettre'), rowCard('fr.a2.verbes.423')],
        check: {
          q: `One of these three did not exist anywhere in this course until now. Does that change how it behaves?`,
          opts: ['Yes, it has to be learned separately', 'No, it takes mettre endings like the other two', 'Only in the plural', 'Only in writing'],
          correct: 1,
          why: 'No. Whether anybody has written a card for a verb has nothing to do with how it behaves; what decides that is the verb underneath it.',
        },
      },
      {
        label: 'promettre and permettre in use',
        items: compoundIds('mettre').slice(0, 3).map(rowCard),
        check: {
          q: `${noStop(fr('fr.a2.verbes.447'))} has one t and ${noStop(fr('fr.a2.verbes.448'))} has two. Where have you seen that?`,
          opts: ['Nowhere', 'On mettre, two screens ago', 'On prendre', 'It is a different rule'],
          correct: 1,
          why: 'On mettre, in exactly the same cells. One t for the singular, two for the whole plural, and the front of the word makes no difference to it.',
        },
      },
      {
        label: 'and the same sentence, twice',
        items: ['fr.a2.verbes.430', 'fr.a2.verbes.450', 'fr.a2.verbes.435', 'fr.a2.verbes.451'].map(rowCard),
        check: {
          q: 'Between the first card and the second, how much of the sentence changed?',
          opts: ['The verb and the object', 'Two letters at the front of the verb', 'The whole thing', 'The ending'],
          correct: 1,
          why: `Two letters. Same key, same person, same ending, and the meaning moved from putting it down to handing it back. ${REFRAME}`,
        },
      },
    ],
  },

  {
    // THE ONE tapTable. Five rows, inside the six-row Pixel 6 ceiling for a
    // section that does not own its layout. Every cell is short and the teaching
    // is in the detail modal, which is a card and can hold prose.
    type: 'tapTable',
    id: WHICH_SECTION_ID,
    title: 'Which Family',
    frSub: 'Quelle famille',
    layer: 'core',
    terms: ['theFamily', 'coverTheFront'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-15-identity' },
    say: 'Five verbs. Cover the front of each one, decide which family it is in, then tap to hear it.',
    cols: ['the verb', 'the one underneath'],
    rows: [
      {
        cells: ['apprendre', 'prendre'],
        say: importedFr(namingId('apprendre')),
        detail: {
          title: 'Take off the ap',
          body: `apprendre [${repairedRespell(namingId('apprendre'))}] is to learn, and prendre is what is left when you cover the first two letters. Every one of its six forms is one you have already written. ${fr('fr.a2.verbes.442')}`,
          say: importedFr(namingId('apprendre')),
        },
      },
      {
        cells: ['comprendre', 'prendre'],
        say: importedFr(namingId('comprendre')),
        detail: {
          title: 'Take off the com',
          body: `comprendre [${repairedRespell(namingId('comprendre'))}] is to understand. Four letters in front and the same six endings behind. ${fr('fr.a2.verbes.445')}`,
          say: importedFr(namingId('comprendre')),
        },
      },
      {
        cells: ['promettre', 'mettre'],
        say: importedFr(namingId('promettre')),
        detail: {
          title: 'Take off the pro',
          body: `promettre [${repairedRespell(namingId('promettre'))}] is to promise, and it has nothing to do with putting anything anywhere. The meaning of the front is a vocabulary question. The endings are not. ${fr('fr.a2.verbes.448')}`,
          say: importedFr(namingId('promettre')),
        },
      },
      {
        cells: ['combattre', 'battre'],
        say: fr('fr.a2.verbes.422'),
        detail: {
          title: 'Take off the com',
          body: `combattre [${bare('fr.a2.verbes.422')}] is to fight. The same front as comprendre, on a different verb, and it does something different to the meaning. ${fr('fr.a2.verbes.452')}`,
          say: fr('fr.a2.verbes.422'),
        },
      },
      {
        cells: [RE_MODEL.fr, 'nothing'],
        say: importedFr(namingId(RE_MODEL.fr)),
        detail: {
          title: 'And this one is not in any of them',
          body: `${RE_MODEL.fr} [${repairedRespell(namingId(RE_MODEL.fr))}] ends the same way and belongs to the regular group ${unitRef(A211_UNIT)} built. Cover its front and there is no verb underneath, because there is no front on it. That is how you tell.`,
          say: importedFr(namingId(RE_MODEL.fr)),
        },
      },
    ],
  },

  {
    // battre's SECOND AND LAST MISSION. Recognition, which is what the canDo
    // asks for, and nothing more.
    type: 'cardDeck',
    id: BATTRE_FAMILY_SECTION_ID,
    title: 'The Battre Family',
    frSub: 'La famille de battre',
    hint: 'Two cards, and then it is finished.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['battreSmall', 'theFamily'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-15-battre' },
    say: `The smallest of the three, and this is the whole of it. One compound to recognise and two more so you are not surprised by them.`,
    cards: [
      {
        label: 'the one worth having',
        head: 'combattre',
        fr: fr('fr.a2.verbes.452'),
        sub: sub('fr.a2.verbes.452'),
        body: 'To fight, usually against something rather than somebody. Two t in the plural, exactly like the verb underneath it.',
      },
      {
        label: 'and two you will only ever read',
        head: 'Recognition only',
        fr: `${FAMILIES.battre[1]} · ${FAMILIES.battre[2]}`,
        sub: `[day-BATR] · [a-BATR]`,
        body: 'To debate and to knock down. You will meet them in writing before you ever need to say one, and when you do they take the same six endings as the rest.',
      },
    ],
  },

  {
    // THE PUBLISHED EVIDENCE, IN ROWS THIS LESSON DID NOT WRITE.
    //
    // Four out of a candidate pool of 330, and the reasons the other 326 are
    // absent are in READ_NOT_IMPORTED: four of the best belong to a2.27, one to
    // a2.07, three carry U+203F and several close a nasal with a plain n.
    // battre contributes NONE, which is the weight argument in one line.
    type: 'groupDrill',
    id: EVIDENCE_SECTION_ID,
    title: 'Already Everywhere',
    frSub: 'Dans le corpus',
    layer: 'core',
    size: 'lg',
    terms: ['theFamily', 'theCompoundMeaning'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-15-evidence' },
    say: 'Four sentences nobody wrote for this lesson. Two of them use a compound and two use the verb underneath, and none of them was thinking about you.',
    groups: [
      {
        label: 'two from the prendre family',
        items: [
          evidenceCard('J\'apprends le français depuis le printemps.'),
          evidenceCard('Maman prend toujours son temps.'),
        ],
        check: {
          q: 'The first uses a compound and the second uses the verb underneath it. What is the same in both?',
          opts: ['The meaning', 'The person', 'The form of the verb', 'The object'],
          correct: 2,
          why: 'The form. One is apprends and the other is prend, and if you cover the two letters at the front of the first you are looking at the same word.',
        },
      },
      {
        label: 'and two from the mettre family',
        items: [
          evidenceCard('Elle met sa veste et ferme la porte.'),
          evidenceCard('Tu mets du beurre sur tout, toujours.'),
        ],
        check: {
          q: 'How many t are there in each of those two verbs?',
          opts: ['One each', 'Two each', 'One and then two', 'Two and then one'],
          correct: 0,
          why: 'One each, because both are singular. The second t arrives with nous and stays for the whole plural, which is exactly what you built two acts ago.',
        },
      },
    ],
  },

  {
    // THE EAR, ON THE ONE THING IT CAN DO HERE.
    //
    // prends/prend, mets/met and bats/bat are HOMOPHONE GROUPS and no question
    // may ask between two members of one. What the ear CAN do is separate the
    // singular from the plural, which is a genuine and audible contrast on all
    // three verbs and is unusual enough in French to be worth a screen.
    type: 'listening',
    id: LISTENING_SECTION_ID,
    title: 'Prend Or Prennent',
    frSub: 'À l\'oreille',
    layer: 'core',
    questionsInModal: true,
    terms: ['theEar', 'theDoubling'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-15-ear' },
    say: `Six lines. Listen before you read. Three of them are singular and three are plural, and for once you can hear which is which.`,
    lines: [
      'fr.a2.verbes.426', 'fr.a2.verbes.429',
      'fr.a2.verbes.432', 'fr.a2.verbes.435',
      'fr.a2.verbes.437', 'fr.a2.verbes.439',
    ].map((id) => ({ fr: fr(id), en: en(id) })),
    questions: [
      {
        q: `${noStop(fr('fr.a2.verbes.426'))} against ${noStop(fr('fr.a2.verbes.429'))}. What is the difference you can hear?`,
        opts: ['Nothing', 'The first ends on a nasal vowel and the second on an n', 'The second is louder', 'The pronoun'],
        correct: 1,
        why: 'The end of the verb. One finishes inside the nose and the other finishes on a consonant, and those are two completely different sounds.',
      },
      {
        q: `And ${noStop(fr('fr.a2.verbes.432'))} against ${noStop(fr('fr.a2.verbes.435'))}?`,
        opts: ['A t arrives', 'Nothing', 'The vowel changes', 'The s is pronounced'],
        correct: 0,
        why: 'A t arrives. The one you have been writing since nous is the one you now hear, because the -ent behind it makes no sound to cover it.',
      },
      {
        q: `${Cap(unitRef(EAR_UNIT))} gave you a plural you could hear as well. What is going on in all of these?`,
        opts: [
          'The plural adds a sound the singular did not have',
          'The plural is always longer',
          'The pronoun is doing the work',
          'They are all the same',
        ],
        correct: 0,
        why: `A sound arrives at the end of the verb. ${Cap(unitRef(EAR_UNIT))} did it with a whole syllable in the middle and these three do it with one consonant, and both are rarer in French than you would like.`,
      },
      {
        q: `Which pairs in this lesson can the ear NOT separate?`,
        opts: ['The plurals', 'je and tu and il, on any of the three', 'None of them', 'The compounds'],
        correct: 1,
        why: 'The three singular persons of every verb here are one sound. That is why the word in front is never optional, and it is the fourth lesson in a row to say so.',
      },
    ],
  },

  /* ── Act 4: the trap ───────────────────────────────────────────────────── */

  {
    // WHERE a2.11's LOOP IS CLOSED, BY UNIT ID.
    //
    // a2.11 named prendre, mettre and battre on one card, refused to build them
    // and said where they were taught. This is that place, and the section says
    // so in as many words rather than assuming the learner remembers.
    type: 'examples',
    id: NOTVENDRE_SECTION_ID,
    title: 'It Is Not Vendre',
    frSub: 'Ce n\'est pas un verbe régulier',
    layer: 'core',
    terms: ['notVendre', 'threeStems'],
    sheetId: SHEET_ID,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-15-notvendre' },
    say: `${A211_LINE}`,
    examples: [
      { fr: `${RE_MODEL.third} · ${PARADIGM[2].forms.prendre}`, en: 'the regular one, and this one', note: `Both end in -re in the naming form and both sound the same in this cell. So far nothing has gone wrong.` },
      { fr: `${RE_MODEL.fr} · ${STEMS.prendre[1]}`, en: 'where they part', note: `The regular verb keeps its d for every person. prendre drops it the moment the plural arrives, and that is the whole of the difference.` },
      { fr: fr('fr.a2.verbes.427'), en: en('fr.a2.verbes.427'), note: 'One n, no d, and the regular pattern would have given you neither of those.' },
      { fr: fr('fr.a2.verbes.429'), en: en('fr.a2.verbes.429'), note: `And then a second n. ${Cap(unitRef(A211_UNIT))} could not have shown you this without teaching the whole lesson, which is why it waited.` },
    ],
  },

  {
    // THE TRAPDRILL. Four pairs and six drill rows, and every one of them turns
    // on which of prendre's three stems the person needs.
    type: 'trapDrill',
    id: TRAP_SECTION_ID,
    title: 'Three Stems, One Verb',
    frSub: 'Trois formes',
    layer: 'core',
    swipe: true,
    terms: ['threeStems', 'theDoubling', 'notVendre'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-15-doubling' },
    say: 'Four cards and then six to prove it. Every one of them asks the same question: which of the three shapes does this person need?',
    rule: {
      title: 'Three shapes, six cells',
      body: `${STEM_CLAIM} The singular writes a d it never says, the middle two drop it, and the last one puts a second n in its place.`,
    },
    cards: [
      {
        promptLabel: 'the d you never say',
        promptSound: bare('fr.a2.verbes.426'),
        fr: fr('fr.a2.verbes.426'),
        ipa: '/il pʁɑ̃ la kle/',
        tip: 'Written and silent, in all three singular persons. It is there so that the plural has something to lose.',
      },
      {
        promptLabel: 'and where it goes',
        promptSound: bare('fr.a2.verbes.427'),
        fr: fr('fr.a2.verbes.427'),
        ipa: '/nu pʁə.nɔ̃ la kle/',
        tip: 'One n and no d at all. This is the cell the regular pattern gets wrong.',
      },
      {
        promptLabel: 'the second n',
        promptSound: bare('fr.a2.verbes.429'),
        fr: fr('fr.a2.verbes.429'),
        ipa: '/il pʁɛn la kle/',
        tip: `The -ent is silent, so the stem has to finish the word. ${Cap(unitRef(STEM_UNIT))} met the same thing on appeler.`,
      },
      {
        promptLabel: 'and the one that does none of it',
        promptSound: bare('fr.a2.verbes.433'),
        fr: fr('fr.a2.verbes.433'),
        ipa: '/nu mɛ.tɔ̃ la kle/',
        tip: 'mettre settles into its plural stem and never moves again. Read it beside the card before it and count the differences.',
      },
    ],
    drill: [
      { promptSay: 'nous prenons la clé', opts: [bare('fr.a2.verbes.427'), bare('fr.a2.verbes.429'), bare('fr.a2.verbes.424')], correct: 0 },
      { promptSay: 'ils prennent la clé', opts: [bare('fr.a2.verbes.424'), bare('fr.a2.verbes.427'), bare('fr.a2.verbes.429')], correct: 2 },
      { promptSay: 'il prend la clé', opts: [bare('fr.a2.verbes.429'), bare('fr.a2.verbes.426'), bare('fr.a2.verbes.428')], correct: 1 },
      { promptSay: 'nous mettons la clé', opts: [bare('fr.a2.verbes.433'), bare('fr.a2.verbes.427'), bare('fr.a2.verbes.435')], correct: 0 },
      { promptSay: 'ils mettent la clé', opts: [bare('fr.a2.verbes.430'), bare('fr.a2.verbes.435'), bare('fr.a2.verbes.433')], correct: 1 },
      { promptSay: 'vous prenez la clé', opts: [bare('fr.a2.verbes.428'), bare('fr.a2.verbes.434'), bare('fr.a2.verbes.427')], correct: 0 },
    ],
    steps: [
      { label: 'The rule', kind: 'rule', title: 'Three Shapes, Six Cells' },
      { label: 'The pairs', kind: 'cards', title: 'Where The D Goes' },
      { label: 'Hear it', kind: 'audio', title: 'Wrong, Then Right' },
      { label: 'Prove it', kind: 'drill', title: 'Which One Did You Say?', gate: true },
    ],
  },

  {
    type: 'commonErrors',
    id: ERRORS_SECTION_ID,
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set, and without it a1.01
    // mission 5 drew a blank screen on a device.
    swipe: true,
    size: 'lg',
    title: 'Four Ways It Breaks',
    frSub: 'Quatre pièges',
    layer: 'core',
    terms: ['notVendre', 'theDoubling', 'theControl'],
    say: `The first card is the form the regular pattern gives you, and it is the reason ${unitRef('a2.11')} refused to show you any of this.`,
    errors: [
      {
        // THE ONLY PLACE THE OVER-GENERALISED FORM IS PRINTED IN THIS LESSON.
        // a2.11 refused to print it at all, on the argument that a learner with
        // nothing to overwrite it with keeps it. Six missions of paradigm later,
        // that argument no longer applies, and this is the a2.01 `je parles`
        // shape: show the wrong form once, beside the right one.
        wrong: `Building ${OVER_GENERALISED} from the pattern ${unitRef(A211_UNIT)} taught.`,
        right: `Building « ${noStop(fr('fr.a2.verbes.429'))} ».`,
        why: `The regular group keeps its d in every person and this verb does not have one past the singular. ${Cap(unitRef(A211_UNIT))} named these three and would not build them for exactly this reason.`,
      },
      {
        wrong: `Writing ${PARADIGM[5].forms.prendre} with one n.`,
        right: `Writing « ${PARADIGM[5].forms.prendre} », with two.`,
        why: `The -ent makes no sound, so the stem has to end in something. You can hear which one you meant: with one n the word would finish on a vowel, and it does not.`,
      },
      {
        wrong: `Writing ${PARADIGM[3].forms.prendre} with two.`,
        right: `Writing « ${PARADIGM[3].forms.prendre} », with one.`,
        why: 'The other way round, and just as common. The -ons is doing the sounding here, so the stem has nothing to prove and stays short.',
      },
      {
        wrong: `Giving ${PARADIGM[3].forms.mettre} and ${PARADIGM[5].forms.mettre} different stems, the way prendre does.`,
        right: `Keeping ${STEMS.mettre[1]} for all three plural persons.`,
        why: `${CONTROL_CLAIM} Only one verb in this lesson has a third shape, and spreading its habit onto the other two costs you the thing that made them easy.`,
      },
    ],
  },

  /* ── Act 5: out loud ───────────────────────────────────────────────────── */

  {
    type: 'scenario',
    id: NOUS_ON_SECTION_ID,
    title: 'The Gym, A Week On',
    frSub: 'À vous',
    layer: 'core',
    terms: ['coverTheFront', 'nousOn'],
    // THE ONLY HOME of a2.01's nous/on statement in this lesson, and the batch
    // asserts that it is the only one.
    say: `Back at the wall, and this time you have all three. ${NOUS_ON} Every answer needs a form you have built rather than a phrase you have memorised.`,
    setting: 'The same climbing gym in Grenoble, the following Wednesday. The person from last week is here again and her name is Léa.',
    turns: [
      {
        ai: 'Salut ! Alors, tu apprends le français depuis longtemps ?',
        en: 'Hi! So, have you been learning French for long?',
        user: 'J\'apprends le français depuis un an.',
        userEn: 'I have been learning French for a year.',
        alts: [
          { fr: 'Oui, j\'apprends le français ici.', en: 'Yes, I am learning French here.' },
          { fr: 'On apprend le français tous les deux.', en: 'We are both learning French.' },
        ],
      },
      {
        ai: 'Tu comprends tout quand les gens parlent vite ?',
        en: 'Do you understand everything when people talk fast?',
        user: 'Je comprends la question, mais pas toujours la réponse.',
        userEn: 'I understand the question, but not always the answer.',
        alts: [
          { fr: 'Non, je ne comprends pas tout.', en: 'No, I do not understand everything.' },
          { fr: 'Nous comprenons mieux qu\'avant.', en: 'We understand better than before.' },
        ],
      },
      {
        ai: 'Tu prends la clé du casier, ou tu laisses tes affaires ici ?',
        en: 'Are you taking the locker key, or leaving your things here?',
        user: 'Je prends la clé.',
        userEn: 'I am taking the key.',
        alts: [
          { fr: 'Je mets la clé dans ma poche.', en: 'I am putting the key in my pocket.' },
          { fr: 'On prend la clé tous les deux.', en: 'We are both taking a key.' },
        ],
      },
      {
        ai: 'Les autres arrivent. Ils prennent une clé aussi ?',
        en: 'The others are arriving. Are they taking a key too?',
        user: 'Oui, ils prennent une clé.',
        userEn: 'Yes, they are taking a key.',
        alts: [
          { fr: 'Non, ils mettent leurs affaires ici.', en: 'No, they are putting their things here.' },
          { fr: 'Je ne sais pas.', en: 'I do not know.' },
        ],
      },
      {
        ai: 'Et à la fin, on remet les clés à l\'accueil, d\'accord ?',
        en: 'And at the end, we hand the keys back at reception, all right?',
        user: 'D\'accord. Je remets la clé à la fin.',
        userEn: 'All right. I will hand the key back at the end.',
        alts: [
          { fr: 'Oui, nous remettons les clés.', en: 'Yes, we will hand the keys back.' },
          { fr: 'Tu remets la tienne aussi ?', en: 'Are you handing yours back too?' },
        ],
      },
    ],
  },

  {
    // PRODUCTION AGAINST THE CLOCK, on the verbs the lesson HAS taught. The cold
    // one is s26-unseen, at the top of act 6.
    type: 'groupDrill',
    id: 's21-build',
    title: 'Build Them Cold',
    frSub: 'À vous de construire',
    layer: 'core',
    size: 'lg',
    terms: ['coverTheFront', 'threeStems', 'theControl'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-15-grid' },
    say: 'Three groups, one per verb. Decide the form before you look at the card, and then say the whole sentence.',
    groups: [
      {
        label: 'prendre, and the cell that moves',
        items: ['fr.a2.verbes.424', 'fr.a2.verbes.427', 'fr.a2.verbes.429'].map(rowCard),
        check: {
          q: 'Three cells and three different stems. Which one has the second n?',
          opts: ['je', 'nous', 'ils', 'All of them'],
          correct: 2,
          why: `Only ils. ${DOUBLING_CLAIM}`,
        },
      },
      {
        label: 'mettre, and the cell that does not',
        items: ['fr.a2.verbes.430', 'fr.a2.verbes.433', 'fr.a2.verbes.435'].map(rowCard),
        check: {
          q: 'And here?',
          opts: ['ils has a third t', 'nous and ils are the same stem', 'The stem changes twice', 'There is no plural stem'],
          correct: 1,
          why: `The same stem for both, and for vous as well. ${CONTROL_CLAIM}`,
        },
      },
      {
        label: 'and the compounds, on the same shapes',
        items: ['fr.a2.verbes.442', 'fr.a2.verbes.445', 'fr.a2.verbes.451'].map(rowCard),
        check: {
          q: 'All three of these are compounds. How many new endings did they need?',
          opts: ['Six', 'Three', 'One', 'None'],
          correct: 3,
          why: `None. ${REFRAME} That is the entire claim of this lesson and you have just used it three times.`,
        },
      },
    ],
  },

  {
    // THE DICTÉE. Eleven targets, every one measured LETTERS through the real
    // dicteeMode, and the doubled consonant is what most of them are about: a
    // typed surface CAN test a doubled letter, where it cannot test an accent.
    //
    // NOT ONE TARGET HOLDS U+0153. `letterCount()` strips the ligature and so
    // does the letter bank, so a dictée on `les œufs` builds a bank with no œ in
    // it and compares the answer against a target with no œ in it. Corpus
    // header, item 7. It is the reason `battre les œufs` is not this lesson's
    // frame.
    type: 'dictation',
    id: 's22-dictation',
    title: 'Spell What You Heard',
    frSub: 'La dictée',
    layer: 'core',
    terms: ['theDoubling', 'theControl'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a2-15-grid' },
    say: `${DICTATION_IDS.length} lines, across all three verbs. Count the consonants before you start typing, because that is what most of these turn on.`,
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's23-speak',
    title: 'Say All Of Them',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Say the whole sentence. On the singular the pronoun is carrying all of the information, so do not swallow it.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'reviewDeck',
    id: 's24-review',
    title: 'The Whole Thing',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['theFamily', 'threeStems', 'coverTheFront'],
    sheetId: SHEET_ID,
    say: 'Rate each card objectively. Again, hard, or easy. The ones you mark again come back.',
    cards: [
      { front: 'A verb you have never seen. What do you do?', back: REFRAME },
      ...VERB_ORDER.map((v) => ({
        front: `The six forms of ${v}`,
        back: PARADIGM.map((r) => r.forms[v]).join(' · '),
      })),
      { front: 'Which cell has the doubled n, and why?', back: DOUBLING_CLAIM },
      { front: 'How many stems does each of the three have?', back: STEM_CLAIM },
      { front: 'I take the key', back: fr('fr.a2.verbes.424'), say: fr('fr.a2.verbes.424') },
      { front: 'We take the key', back: fr('fr.a2.verbes.427'), say: fr('fr.a2.verbes.427') },
      { front: 'They take the key', back: fr('fr.a2.verbes.429'), say: fr('fr.a2.verbes.429') },
      { front: 'We put the key down', back: fr('fr.a2.verbes.433'), say: fr('fr.a2.verbes.433') },
      { front: 'They beat Paul', back: fr('fr.a2.verbes.439'), say: fr('fr.a2.verbes.439') },
      { front: 'They are learning French', back: fr('fr.a2.verbes.442'), say: fr('fr.a2.verbes.442') },
      { front: 'They understand the question', back: fr('fr.a2.verbes.445'), say: fr('fr.a2.verbes.445') },
      { front: 'I hand the key back', back: fr('fr.a2.verbes.450'), say: fr('fr.a2.verbes.450') },
      { front: `The three families`, back: VERB_ORDER.map((v) => `${v}: ${FAMILIES[v].join(', ')}`).join(' · ') },
      { front: `What ${unitRef(RESERVED_FOR, 'a2')} takes up`, back: `The past of all three, which nothing about the present tells you.` },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'progressCheck',
    id: 's25-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen, and then one last thing to build before the exam.',
    // The prose deliberately carries no counts. Every figure on this card is
    // derived below; typing one here as well would be two chances to be wrong on
    // one screen.
    body: `You have three verbs, all six persons of each, and one doubled letter in one cell. That was the short half. The long half is what you do with a verb nobody has taught you, and the next screen is going to hand you two of those and ask for the forms. It is the only screen in this lesson that matters, and if you can do it then everything in the three families is yours, including the parts of them nobody has written a card for yet. Each round of the exam is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts.`,
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    // THE MISSION THIS LESSON EXISTS FOR, AND THE LAST ONE BEFORE THE EXAM.
    //
    // Doctrine §B.1: "a pattern that generalises to items the lesson never
    // taught is the only thing that distinguishes A2 from a table."
    //
    // `reprendre` and `admettre` appear in this section and in round 4 and
    // NOWHERE ELSE. Not a corpus row, not an itemId, not a deck release, not a
    // term, not a card. The batch, the merge and the test all assert that by
    // name, in both directions: they must be here and they must be nowhere else.
    //
    // This is a groupDrill and its check is an mcq, so what it can ask for is a
    // choice between one correctly built form and three plausible mis-builds.
    // The free-text production is round 4. Corpus header, item 5.
    type: 'groupDrill',
    id: UNSEEN_SECTION_ID,
    title: 'One You Have Not Met',
    frSub: 'Un verbe inconnu',
    layer: 'core',
    size: 'lg',
    terms: ['coverTheFront', 'theFamily'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-15-unseen' },
    say: `Two verbs. Neither of them appears anywhere else in this lesson and you are not going to be shown their forms. ${REFRAME}`,
    groups: [
      {
        label: `${UNSEEN[0].infinitive}, and nothing else on this card`,
        items: [],
        check: {
          q: `${UNSEEN[0].infinitive} means ${UNSEEN[0].en}. Which is the nous form?`,
          opts: [UNSEEN[0].forms.nous, 'reprennons', 'reprendons', 'repreno'],
          correct: 0,
          why: `Cover the re and you are looking at prendre, whose nous form loses the d and keeps one n. Two of the wrong answers give it a second n and the third leaves the d in.`,
        },
      },
      {
        label: 'and the one after it',
        items: [],
        check: {
          q: `And the ils form of ${UNSEEN[0].infinitive}?`,
          opts: ['reprenent', 'reprendent', UNSEEN[0].forms.ils, 'reprenment'],
          correct: 2,
          why: `Two n, because the -ent is silent and the stem has to end in something. It is the same cell that moved on prendre and on both of its compounds.`,
        },
      },
      {
        label: `${UNSEEN[1].infinitive}, from the other family`,
        items: [],
        check: {
          q: `${UNSEEN[1].infinitive} means ${UNSEEN[1].en}. Which is the ils form?`,
          opts: ['admetent', UNSEEN[1].forms.ils, 'admettont', 'admettes'],
          correct: 1,
          why: `Two t and a silent -ent, which is what mettre does and what permettre and promettre do. Nothing about ad- changes any of it.`,
        },
      },
      {
        label: 'and what you just did',
        items: [],
        check: {
          q: 'You have now built four forms of two verbs. How many of those forms were on a card in this lesson?',
          opts: ['All four', 'Two', 'One', 'None of them'],
          correct: 3,
          why: `None. ${THE_MOVE} That is what three verbs are actually worth, and it is why the last five lessons were not a list.`,
        },
      },
    ],
  },

  {
    type: 'quiz',
    id: QUIZ_SECTION_ID,
    title: 'The Exam',
    frSub: 'L\'examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get a drill before the next one starts.',
    rounds: [
      {
        id: 'r1-the-three',
        label: 'The three of them',
        // Round targets are ordered deliberately. drillForRound returns the
        // FIRST target that has a drill and then stops, so the first name here
        // is what a failing learner actually gets. Every round leads on a
        // DIFFERENT trigger, which is what makes all six drills reachable.
        targets: ['err-regular-model', 'err-single-n'],
        say: 'Six on the shapes themselves. Every question fixes the person for you.',
        questions: [
          {
            q: 'Nous ___ la clé. (prendre)',
            format: 'typeIn',
            accept: ['prenons', 'nous prenons'],
            answer: 'prenons',
            why: 'The d goes and one n is enough, because the -ons is doing the sounding.',
            ref: 's06-prendre',
          },
          {
            q: 'Il ___ la clé. (mettre)',
            format: 'typeIn',
            accept: ['met', 'il met'],
            answer: 'met',
            why: 'One t in the singular. The second one arrives with nous and not before.',
            ref: 's07-mettre',
          },
          {
            q: 'Nous ___ Paul. (battre)',
            format: 'typeIn',
            accept: ['battons', 'nous battons'],
            answer: 'battons',
            why: 'Two t and the ordinary -ons, which is exactly what mettre does in this cell.',
            ref: BATTRE_SECTION_ID,
          },
          {
            q: 'Which of these four is spelled correctly?',
            format: 'mcq',
            opts: ['ils prendent', 'ils prenent', 'ils prennent', 'ils prendrent'],
            correct: 2,
            why: `Two n and no d. The first is what the regular pattern gives you and it is the form ${unitRef(A211_UNIT)} refused to put in front of anybody.`,
            ref: ERRORS_SECTION_ID,
          },
          {
            q: `How many different stems does prendre use across its six forms?`,
            format: 'mcq',
            opts: ['One', 'Two', 'Three', 'Six'],
            correct: 2,
            why: STEM_CLAIM,
            ref: 's06-prendre',
          },
          {
            q: 'Fix this. « Nous mettons la clé. » in the ils form.',
            format: 'errorSpot',
            accept: ['Ils mettent la clé', 'mettent'],
            answer: fr('fr.a2.verbes.435'),
            why: 'Same stem, different ending. mettre settles into two t and stays there for the whole plural.',
            ref: 's07-mettre',
          },
        ],
      },
      {
        id: 'r2-the-doubling',
        label: 'One n or two',
        targets: ['err-single-n', 'err-regular-model'],
        say: `This is the round the lesson is really about. ${Cap(unitRef(STEM_UNIT))} taught the reason seven lessons ago.`,
        questions: [
          {
            q: 'Ils ___ la clé. (prendre)',
            format: 'typeIn',
            accept: ['prennent', 'ils prennent'],
            answer: 'prennent',
            why: `${STEM_PRINCIPLE}`,
            ref: DOUBLED_SECTION_ID,
          },
          {
            q: 'Which one has the doubled letter?',
            format: 'mcq',
            opts: ['nous prenons', 'vous prenez', 'ils prennent', 'je prends'],
            correct: 2,
            why: 'Only the last one, and only because its ending makes no sound. Every other cell has something audible after the stem.',
            ref: DOUBLED_SECTION_ID,
          },
          {
            q: 'Fix this. « Nous prennons la clé. »',
            format: 'errorSpot',
            accept: ['Nous prenons la clé', 'prenons'],
            answer: fr('fr.a2.verbes.427'),
            why: 'One n. The -ons is sounded, so nothing has to be doubled to hold the end of the word up.',
            ref: DOUBLED_SECTION_ID,
          },
          {
            q: 'Ils ___ le français. (apprendre)',
            format: 'typeIn',
            accept: ['apprennent', 'ils apprennent'],
            answer: 'apprennent',
            why: 'Two n, because the verb underneath has two n in this cell. The front of the word changes nothing at all.',
            ref: 's11-apprendre',
          },
          {
            q: `Why does ${PARADIGM[5].forms.prendre} double its n and ${PARADIGM[3].forms.prendre} not?`,
            format: 'mcq',
            opts: [
              'Plurals double their consonants',
              'It is an exception with no reason',
              'The pronoun is longer',
              'One ending is silent and the other is not',
            ],
            correct: 3,
            why: `${STEM_PRINCIPLE}`,
            ref: DOUBLED_SECTION_ID,
          },
          {
            q: 'Nous ___ la question. (comprendre)',
            format: 'typeIn',
            accept: ['comprenons', 'nous comprenons'],
            answer: 'comprenons',
            why: 'One n, no d, and four letters at the front that have no say in any of it.',
            ref: 's11-apprendre',
          },
        ],
      },
      {
        id: 'r3-the-family',
        label: 'Which family',
        targets: ['err-new-verb', 'err-regular-model'],
        say: 'Cover the front of each one before you answer.',
        questions: [
          {
            q: 'Which of these follows mettre?',
            format: 'mcq',
            opts: ['promettre', 'comprendre', 'vendre', 'apprendre'],
            correct: 0,
            why: 'promettre. Cover the pro and mettre is what is left. The second and fourth run on prendre and the third is a regular verb with no front on it at all.',
            ref: WHICH_SECTION_ID,
          },
          {
            q: 'And which of these follows prendre?',
            format: 'mcq',
            opts: ['permettre', 'combattre', 'surprendre', 'attendre'],
            correct: 2,
            why: 'surprendre. The last one ends the same way and is a regular verb, which is the distinction this whole round turns on.',
            ref: WHICH_SECTION_ID,
          },
          {
            q: 'Ils ___ le feu. (combattre)',
            format: 'typeIn',
            accept: ['combattent', 'ils combattent'],
            answer: 'combattent',
            why: 'Two t and a silent -ent, because battre does that and combattre is battre with three letters on the front.',
            ref: BATTRE_FAMILY_SECTION_ID,
          },
          {
            q: 'Je ___ la clé. (remettre)',
            format: 'typeIn',
            accept: ['remets', 'je remets'],
            answer: 'remets',
            why: 'One t, because mettre has one t here. The re- means back and it does nothing to the ending.',
            ref: 's12-remettre',
          },
          {
            q: `A verb ends in -re. What tells you whether it is regular?`,
            format: 'mcq',
            opts: [
              'The ending is enough on its own',
              'How long it is',
              'Nothing does',
              'Whether there is a familiar verb left when you cover the front',
            ],
            correct: 3,
            why: `${REFRAME} vendre has no front on it, so there is nothing to cover and nothing underneath; that is how you tell it apart from the four verbs above it.`,
            ref: NOTVENDRE_SECTION_ID,
          },
          {
            q: 'Fix this. « Ils comprendent la question. »',
            format: 'errorSpot',
            accept: ['Ils comprennent la question', 'comprennent'],
            answer: fr('fr.a2.verbes.445'),
            why: 'No d, two n. This is the regular pattern applied to a verb that is not in the regular group, one front along.',
            ref: 's11-apprendre',
          },
        ],
      },
      {
        id: 'r4-unseen',
        label: 'One you have not met',
        targets: ['err-lost-front', 'err-new-verb'],
        // THE ROUND THE LESSON EXISTS FOR. Four typeIn questions on two verbs
        // that appear on no card, in no deck and in no vocabulary anywhere in
        // this lesson. Free text, because picking a form from a list is not
        // producing one.
        say: 'Two verbs you have not been taught. You have everything you need for both of them.',
        questions: [
          {
            q: `${UNSEEN[0].infinitive} means ${UNSEEN[0].en}. Nous ___ la clé.`,
            format: 'typeIn',
            accept: [UNSEEN[0].forms.nous, `nous ${UNSEEN[0].forms.nous}`],
            answer: UNSEEN[0].forms.nous,
            why: `Cover the re and prendre is what is left, and its nous form drops the d and keeps one n. You have never seen this word written down.`,
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: `And the plural. Ils ___ la clé. (${UNSEEN[0].infinitive})`,
            format: 'typeIn',
            accept: [UNSEEN[0].forms.ils, `ils ${UNSEEN[0].forms.ils}`],
            answer: UNSEEN[0].forms.ils,
            why: `Two n, for the same reason ils prennent has two: the -ent makes no sound and something has to hold the end of the word up.`,
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: `${UNSEEN[1].infinitive} means ${UNSEEN[1].en}. Nous ___ notre erreur.`,
            format: 'typeIn',
            accept: [UNSEEN[1].forms.nous, `nous ${UNSEEN[1].forms.nous}`],
            answer: UNSEEN[1].forms.nous,
            why: `Two t and the ordinary -ons. mettre is underneath it and mettre has settled into its plural stem by this cell.`,
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: `And Ils ___ leur erreur. (${UNSEEN[1].infinitive})`,
            format: 'typeIn',
            accept: [UNSEEN[1].forms.ils, `ils ${UNSEEN[1].forms.ils}`],
            answer: UNSEEN[1].forms.ils,
            why: `Two t and a silent -ent. Four forms of two verbs, and not one of them was on a card anywhere in this lesson.`,
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: 'How did you build those four?',
            format: 'mcq',
            opts: [
              'By remembering them',
              'By covering the front and using the verb underneath',
              'By guessing',
              'They follow the regular pattern',
            ],
            correct: 1,
            why: `${REFRAME} It works on every verb in all three families, including the ones nobody has taught you and the ones nobody has written a card for.`,
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: 'Fix this. « Nous reprendons la clé. »',
            format: 'errorSpot',
            accept: ['Nous reprenons la clé', UNSEEN[0].forms.nous],
            answer: `Nous ${UNSEEN[0].forms.nous} la clé.`,
            why: 'The d does not survive into the plural on any verb in this family, and a front on the word does not bring it back.',
            ref: UNSEEN_SECTION_ID,
          },
        ],
      },
      {
        id: 'r5-out-loud',
        label: 'Saying it',
        targets: ['err-heard-singular', 'err-single-n'],
        say: 'The plural is audible on all three of these, which is rarer in French than you would like.',
        questions: [
          {
            q: 'Listen. Which one did you hear?',
            format: 'listenChoose',
            // LEGAL: prend and prennent are two different sounds. il and ils are
            // one sound, so the verb is the ONLY audible difference, which is
            // exactly the contrast being tested. An option pair differing only
            // by prends/prend would have no correct answer.
            opts: [fr('fr.a2.verbes.426'), fr('fr.a2.verbes.429')],
            correct: 1,
            // `say` is the line the learner HEARS. Without it ListenChooseCard
            // falls back to speaking opts[correct], which speaks the answer.
            say: fr('fr.a2.verbes.429'),
            why: 'The verb ends on an n, so it is the plural. The pronoun would not have told you: il and ils are one sound.',
            ref: LISTENING_SECTION_ID,
          },
          {
            q: 'And this one?',
            format: 'listenChoose',
            opts: [fr('fr.a2.verbes.432'), fr('fr.a2.verbes.435')],
            correct: 0,
            say: fr('fr.a2.verbes.432'),
            why: 'No t at the end, so it is the singular. The plural would have finished on a hard consonant you could not miss.',
            ref: LISTENING_SECTION_ID,
          },
          {
            q: 'Tap the letters you do NOT say.',
            format: 'tapSilent',
            word: PARADIGM[2].forms.prendre,
            correct: 'd',
            why: 'The d. It is written in all three singular persons and said in none of them, and it disappears from the spelling the moment the plural arrives.',
            ref: 's06-prendre',
          },
          {
            q: 'And here?',
            format: 'tapSilent',
            word: PARADIGM[5].forms.mettre,
            correct: 'ent',
            why: `The -ent, silent as it has been on every verb since ${unitRef('a2.01')}. What you do hear is the t in front of it.`,
            ref: 's07-mettre',
          },
          {
            q: 'Say it: they take the key.',
            format: 'speak',
            target: fr('fr.a2.verbes.429'),
            scoreSegment: PARADIGM[5].forms.prendre,
            answer: fr('fr.a2.verbes.429'),
            why: 'Finish the verb on the n. If it comes out through the nose you have said the singular, and nothing else in the sentence will correct it.',
            ref: 's23-speak',
          },
          {
            q: `Which three words in this lesson are said identically?`,
            format: 'mcq',
            opts: ['prenons, prenez, prennent', 'mets, mettons, mettez', 'bats, battons, battez', 'prends, prends, prend'],
            correct: 3,
            why: 'Two spellings across three persons and one sound for all of them. mets, mets, met does the same thing, and so does bats, bats, bat.',
            ref: LISTENING_SECTION_ID,
          },
        ],
      },
      {
        id: 'r6-in-the-world',
        label: 'Out in the world',
        targets: ['err-mettre-drift', 'err-heard-singular'],
        say: 'The last round is the gym. Nothing here is a trick.',
        questions: [
          {
            q: `Somebody asks « ${noStop(fr('fr.a2.verbes.453'))} » What do you say?`,
            format: 'mcq',
            opts: [
              noStop(fr('fr.a2.verbes.454')),
              'Oui, je prends le français ici.',
              'Oui, j\'apprend le français ici.',
              'Yes, I learn French here.',
            ],
            correct: 0,
            why: 'The verb she used, given back with the person changed. The second uses the wrong verb, the third drops the s, and the fourth is how the scene at the start went wrong.',
            ref: 's01-scene',
          },
          {
            q: 'Vous ___ la clé à la fin ? (remettre)',
            format: 'typeIn',
            accept: ['remettez', 'vous remettez'],
            answer: 'remettez',
            why: 'Two t and the ordinary -ez. It is mettez with two letters in front and nothing else moved.',
            ref: 's12-remettre',
          },
          {
            q: 'Ils ___ la question. (comprendre)',
            format: 'typeIn',
            accept: ['comprennent', 'ils comprennent'],
            answer: 'comprennent',
            why: 'Two n. It is the cell that moves on prendre, and every compound of prendre moves in the same place.',
            ref: 's11-apprendre',
          },
          {
            q: 'Which sentence would a French speaker actually say for we are taking the key?',
            format: 'mcq',
            opts: [
              'Nous prenons la clé.',
              'On prend la clé.',
              'Nous prennons la clé.',
              'On prenons la clé.',
            ],
            correct: 1,
            why: `Both of the first two are correct and the second is what people say. ${NOUS_ON} on takes the il form, so it costs no new spelling at all.`,
            ref: NOUS_ON_SECTION_ID,
          },
          {
            q: 'Fix this. « Vous mettes la clé ici. »',
            format: 'errorSpot',
            accept: ['Vous mettez la clé ici', 'mettez'],
            answer: 'Vous mettez la clé ici.',
            why: `The vous ending is -ez on every verb in this lesson and on every verb since ${unitRef('a2.01')}. Nothing about these three is irregular in that cell.`,
            ref: 's07-mettre',
          },
          {
            q: `Which of these is NOT taught in this lesson?`,
            format: 'mcq',
            opts: [
              'The present of prendre in all six persons',
              'The compounds of mettre',
              'The doubled n of prennent',
              'The past of prendre',
            ],
            correct: 3,
            why: `The past. ${Cap(unitRef(RESERVED_FOR, 'a2'))} is built around the past forms of these three and it arrives after the two lessons that give you the tense they live in.`,
            ref: ROUNDUP_SECTION_ID,
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: ROUNDUP_SECTION_ID,
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and the last of them is where the rest of prendre lives.',
    body: `Three verbs, eighteen cells, and one doubled letter in one of them. ${REFRAME} You used that on two verbs nobody showed you and it worked, which means it will work on every other verb in these three families, including the ones no lesson in this course has got to yet. ${Cap(unitRef(A211_UNIT))} named these three and would not build them; that is finished now, and the irregular block is finished with it. Two things are deliberately not here. The past of all three belongs to ${unitRef(RESERVED_FOR, 'a2')}, and prendre in its fixed expressions belongs to ${unitRef(NEIGHBOUR_UNITS.restaurant, 'a2')} and ${unitRef(NEIGHBOUR_UNITS.transport, 'a2')}, which open on them. What you have is the present, in six persons, for the ${VERBS_BOUGHT} verbs this lesson names and for every other one in the three families.`,
    points: [
      REFRAME,
      FAMILY_CLAIM,
      DOUBLING_CLAIM,
      CONTROL_CLAIM,
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed. It throws rather than degrades: a progress
 * card that silently reports "0 of 0" is worse than a build that stops.       */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's25-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a2.15.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Forms learned', v: String(PARADIGM.length * VERB_ORDER.length) },
    { k: 'Verbs they cover', v: String(VERBS_BOUGHT) },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * SIX, and the shape of them is the argument of the lesson.
 *
 * THE FAMILY ACT IS THE LARGEST AND THE PARADIGM ACT IS SMALLER THAN IT. Five
 * missions on eighteen cells, eight on what the eighteen cells buy. If it were
 * the other way round this would be a reference table with a scene attached.
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a nice
 * number, because it is divided by the rest points to check no stretch runs past
 * the checkpoint-spacing limit of 22.                                          */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The verb you already had',
    sections: ['s01-scene', GOALS_SECTION_ID, 's03-families'],
    milestone: 'You know what four seconds of hunting for a verb costs, and you have the thing to do instead.',
    estScreens: 19,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'Three verbs, eighteen cells',
    sections: [GRID_SECTION_ID, DOUBLED_SECTION_ID, 's06-prendre', 's07-mettre', BATTRE_SECTION_ID],
    milestone: 'You can build all three in all six persons, and you know which cell is the one that moves.',
    estScreens: 30,
    restPoints: [`${GRID_SECTION_ID}/halfway`, 's06-prendre/after'],
  },
  {
    id: 'act3',
    title: 'And the ones they come with',
    sections: ['s09-free', IDENTITY_SECTION_ID, 's11-apprendre', 's12-remettre', WHICH_SECTION_ID, BATTRE_FAMILY_SECTION_ID, EVIDENCE_SECTION_ID, LISTENING_SECTION_ID],
    milestone: 'You read a head verb and two of its compounds down one screen and saw that the endings are the same word three times.',
    estScreens: 46,
    restPoints: [`${IDENTITY_SECTION_ID}/after`, 's12-remettre/after', `${WHICH_SECTION_ID}/after`],
  },
  {
    id: 'act4',
    title: 'The one that looks regular',
    sections: [NOTVENDRE_SECTION_ID, TRAP_SECTION_ID, ERRORS_SECTION_ID],
    milestone: 'You can tell a verb with a family from a verb that only ends the same way, and you will not put a d in the plural.',
    estScreens: 26,
    restPoints: [`${TRAP_SECTION_ID}/after-cards`],
  },
  {
    id: 'act5',
    title: 'Out loud',
    sections: [NOUS_ON_SECTION_ID, 's21-build', 's22-dictation', 's23-speak', 's24-review'],
    milestone: 'You held a conversation in which every turn wanted a form you built rather than a phrase you remembered.',
    estScreens: 40,
    restPoints: [`${NOUS_ON_SECTION_ID}/after`, 's22-dictation/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it on one you have never seen',
    sections: ['s25-progress', UNSEEN_SECTION_ID, QUIZ_SECTION_ID, ROUNDUP_SECTION_ID],
    milestone: 'You built four forms of two verbs this lesson never showed you, and that is what three verbs are worth.',
    estScreens: 44,
    restPoints: [`${QUIZ_SECTION_ID}/r3-the-family`],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * A tranche releases items into spaced repetition at the END of an act, and
 * nothing may be released before the act that puts it on a screen.
 *
 * NEITHER OF THE TWO UNSEEN COMPOUNDS IS HERE, because neither is a row. That
 * is the point of them and the batch asserts it.                              */

const DECK_TRANCHE: string[][] = [
  // Act 1 releases NOTHING. The scene runs on its two rows, which act 5 releases
  // when the scenario returns to them.
  [],
  // Act 2: the three naming forms and every cell the learner has built.
  [
    namingId('prendre'), namingId('mettre'), 'fr.a2.verbes.421', 'fr.a2.verbes.422',
    ...HEAD_IDS,
  ],
  // Act 3: the compounds, their naming forms, and the four published evidence
  // rows.
  [
    namingId('apprendre'), namingId('comprendre'), namingId('surprendre'),
    namingId('permettre'), namingId('promettre'), 'fr.a2.verbes.423',
    ...compoundIds('prendre').filter((id) => id <= 'fr.a2.verbes.446'),
    ...compoundIds('mettre'),
    ...compoundIds('battre'),
    ...EVIDENCE_IDS,
  ],
  // Act 4: a2.11's regular verb, which the trap contrasts against.
  [namingId(RE_MODEL.fr)],
  // Act 5: the two scene rows, which the scenario has just used again.
  ['fr.a2.verbes.453', 'fr.a2.verbes.454'],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * SIX triggers, six drills, six rounds, and each round leads on a DIFFERENT
 * trigger. `drillForRound` returns the first target that has a drill and then
 * stops, so a drill that is never named first can never fire. a1.05 ships two
 * such drills and its own test fails on them today.                            */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-regular-model',
    description: `Runs the regular -re pattern on prendre and produces a plural with a d in it. It is the error ${unitRef('a2.11')} predicted and refused to print, and it is what a learner reaches for when the naming form is the only thing they have looked at.`,
    detectOn: [NOTVENDRE_SECTION_ID, ERRORS_SECTION_ID, `${QUIZ_SECTION_ID}/r1-the-three`],
    drill: 'drill-not-regular',
    retest: 'retest-not-regular',
  },
  {
    id: 'err-single-n',
    description: `Writes ils prenent with one n, or nous prennons with two. The doubling belongs to exactly one cell and it is the cell whose ending makes no sound, which is ${unitRef('a2.09')} principle arriving on a verb nobody expected it on.`,
    detectOn: [DOUBLED_SECTION_ID, TRAP_SECTION_ID, `${QUIZ_SECTION_ID}/r2-the-doubling`],
    drill: 'drill-doubling',
    retest: 'retest-doubling',
  },
  {
    id: 'err-new-verb',
    description: 'Meets a compound and treats it as a verb they have never seen, stopping the sentence to look for a form they already own. It is the scene at the top of this lesson and it costs a conversation rather than a mark.',
    detectOn: [WHICH_SECTION_ID, IDENTITY_SECTION_ID, `${QUIZ_SECTION_ID}/r3-the-family`],
    drill: 'drill-which-family',
    retest: 'retest-which-family',
  },
  {
    id: 'err-lost-front',
    description: 'Covers the front of a compound, builds the verb underneath correctly, and then forgets to put the front back on: nous prenons where the sentence wanted nous reprenons. The half of the move that gets dropped is the half nobody drills.',
    detectOn: [UNSEEN_SECTION_ID, 's12-remettre', `${QUIZ_SECTION_ID}/r4-unseen`],
    drill: 'drill-put-it-back',
    retest: 'retest-put-it-back',
  },
  {
    id: 'err-heard-singular',
    description: 'Hears the plural and writes the singular, because il and ils are one sound and the only thing separating the two sentences is the end of the verb. It is the one place in this lesson where the ear can settle it, and a learner who is not listening for it will not hear it.',
    detectOn: [LISTENING_SECTION_ID, 's23-speak', `${QUIZ_SECTION_ID}/r5-out-loud`],
    drill: 'drill-ear',
    retest: 'retest-ear',
  },
  {
    id: 'err-mettre-drift',
    description: 'Spreads prendre habit of changing stem twice onto mettre and battre, which change once. It is the cost of teaching the hard one first, and it turns two easy verbs into two more hard ones.',
    detectOn: ['s07-mettre', BATTRE_SECTION_ID, `${QUIZ_SECTION_ID}/r6-in-the-world`],
    drill: 'drill-control',
    retest: 'retest-control',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-not-regular',
    title: 'The one with a family, and the one without',
    format: 'sort',
    buckets: ['has a verb underneath', 'regular, nothing underneath'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: ['fr.a2.verbes.427', 'fr.a2.verbes.429', 'fr.a2.verbes.441', 'fr.a2.verbes.445', namingId(RE_MODEL.fr), namingId('surprendre')],
    coach: 'Cover the front of each one. If a verb you know is left, it is in a family. If nothing is left, it is regular.',
  },
  {
    id: 'retest-not-regular',
    title: 'One more time',
    format: 'mcq',
    q: 'Ils ___ la clé.',
    opts: ['prendent', 'prennent', 'prenent'],
    correct: 1,
    why: 'No d, two n. The first is the regular pattern and this verb is not in it.',
  },
  {
    id: 'drill-doubling',
    title: 'Where the second n goes',
    format: 'flashcard',
    coach: 'A person on the left. Say the prendre form before you turn the card, and count the n.',
    pairs: PARADIGM.map((r) => [r.person, r.forms.prendre] as [string, string]),
  },
  {
    id: 'retest-doubling',
    title: 'One more time',
    format: 'mcq',
    q: 'Nous ___ la clé.',
    opts: ['prennons', 'prenons', 'prendons'],
    correct: 1,
    why: 'One n. The -ons is sounded, so the stem has nothing to hold up.',
  },
  {
    id: 'drill-which-family',
    title: 'Which one is underneath',
    format: 'sort',
    buckets: ['prendre', 'mettre'],
    items: [namingId('apprendre'), namingId('permettre'), namingId('comprendre'), namingId('promettre'), namingId('surprendre'), 'fr.a2.verbes.423'],
    coach: 'Take the front off each one and read what is left.',
  },
  {
    id: 'retest-which-family',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these follows mettre?',
    opts: ['comprendre', 'remettre', 'vendre'],
    correct: 1,
    why: 'Cover the re and mettre is what is left. The first runs on prendre and the last has no front on it at all.',
  },
  {
    id: 'drill-put-it-back',
    title: 'And put the front back on',
    format: 'flashcard',
    coach: 'An English sentence on the left. Build the verb underneath first, then put the front back before you say it.',
    pairs: [
      ['I hand the key back', fr('fr.a2.verbes.450')],
      ['They hand the key back', fr('fr.a2.verbes.451')],
      ['We are learning French', fr('fr.a2.verbes.441')],
      ['They understand the question', fr('fr.a2.verbes.445')],
      ['They are fighting the fire', fr('fr.a2.verbes.452')],
    ],
  },
  {
    id: 'retest-put-it-back',
    title: 'One more time',
    format: 'mcq',
    q: 'They hand the key back.',
    opts: ['Ils mettent la clé.', 'Ils remettent la clé.', 'Ils remetent la clé.'],
    correct: 1,
    why: 'The re goes back on, and the verb underneath keeps both its t.',
  },
  {
    id: 'drill-ear',
    title: 'Singular or plural',
    format: 'flashcard',
    coach: 'Say each one out loud and listen to the very end of the verb. One of each pair finishes on a consonant.',
    pairs: [
      [noStop(fr('fr.a2.verbes.426')), 'singular, ends in the nose'],
      [noStop(fr('fr.a2.verbes.429')), 'plural, ends on an n'],
      [noStop(fr('fr.a2.verbes.432')), 'singular, nothing at the end'],
      [noStop(fr('fr.a2.verbes.435')), 'plural, ends on a t'],
      [noStop(fr('fr.a2.verbes.439')), 'plural, ends on a t'],
    ],
  },
  {
    id: 'retest-ear',
    title: 'One more time',
    format: 'mcq',
    q: 'You hear a verb ending on a clear n. Which was it?',
    opts: ['il prend', 'ils prennent', 'je prends'],
    correct: 1,
    why: 'Only the plural finishes on a consonant. The other two finish inside the nose and are one sound.',
  },
  {
    id: 'drill-control',
    title: 'Changes twice, or changes once',
    format: 'sort',
    buckets: ['changes stem twice', 'changes stem once'],
    items: ['fr.a2.verbes.427', 'fr.a2.verbes.429', 'fr.a2.verbes.433', 'fr.a2.verbes.435', 'fr.a2.verbes.438', 'fr.a2.verbes.439'],
    coach: 'Read the nous form and the ils form of each verb together. If they share a stem, the verb changes once.',
  },
  {
    id: 'retest-control',
    title: 'One more time',
    format: 'mcq',
    q: 'Nous mettons, ils ___ .',
    opts: ['mettent', 'mennent', 'metent'],
    correct: 0,
    why: 'The same stem as nous. Only prendre grows a third one.',
  },
];

/* ─── The reference sheet ──────────────────────────────────────────────────
 *
 * ONE SHEET. A sheetId resolves ONLY inside the lesson that declares it
 * (schema.ts:3490, lesson-contract.test.ts:91), so cross-lesson sheets do not
 * exist and a2.11 established that at a price.
 *
 * The density validator refuses a `table` at layer 'core' outright, so the full
 * grid lives here at layer 'deep' where density is deliberately fine.
 *
 * ReferenceSheet.tsx draws `teach`, `letterGrid` and `table` and NOTHING ELSE. A
 * `cheatSheet` in here would draw its title and no rows, which a1.13 ships
 * today. The batch refuses any other section type in a sheet.
 *
 * WHAT THIS SHEET HOLDS THAT NO EARLIER ONE COULD: a2.11's precedent is that a
 * sheet has to justify itself against the sheets before it. Every reference
 * sheet in this band lists ENDINGS. This one leads with STEMS, which no sheet in
 * the level has needed, because no verb before these three changed its stem more
 * than once. The second table maps a head verb to the verbs it buys, which is a
 * thing no paradigm sheet can hold at all.                                     */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    title: 'Three verbs, three families, and where the letters go',
    layer: 'deep',
    contains: ['The stems, which is what makes these hard', 'All three, every person', 'What each one buys you'],
    sections: [
      {
        // THE TABLE THIS SHEET EXISTS FOR, and it is not a paradigm.
        type: 'table',
        id: 'sheet-stems',
        title: 'The stems, and how many each verb has',
        layer: 'deep',
        cols: ['Verb', 'Singular', 'nous and vous', 'ils', 'How many'],
        rows: VERB_ORDER.map((v) => [
          v,
          STEMS[v][0],
          STEMS[v][1],
          STEMS[v][STEMS[v].length - 1],
          String(STEMS[v].length),
        ]),
      },
      {
        type: 'table',
        id: 'sheet-grid',
        title: 'All three, every person',
        layer: 'deep',
        cols: ['Person', ...VERB_ORDER],
        rows: PARADIGM.map((r) => [r.person, ...VERB_ORDER.map((v) => r.forms[v])]),
      },
      {
        type: 'table',
        id: 'sheet-say',
        title: 'How to say each one',
        layer: 'deep',
        cols: ['Person', ...VERB_ORDER],
        rows: PARADIGM.map((r) => [r.person, ...VERB_ORDER.map((v) => r.respells[v])]),
      },
      {
        type: 'table',
        id: 'sheet-families',
        title: 'What each one buys',
        layer: 'deep',
        cols: ['Head verb', 'And these come with it', 'How many'],
        rows: VERB_ORDER.map((v) => [v, FAMILIES[v].join(', '), String(FAMILIES[v].length + 1)]),
      },
      {
        type: 'teach',
        id: 'sheet-why-stems',
        title: 'Why the second n is there',
        layer: 'deep',
        body: `${STEM_PRINCIPLE} That is not a rule about this verb, it is a rule about French, and ${unitRef(STEM_UNIT)} stated it seven lessons ago in a lesson that had nothing to do with these three: ${A209_REFRAME} A silent ending leaves the stem holding the end of the word on its own, and a stem in that position has to end in something you can hear. ${PARADIGM[3].forms.prendre} does not need it because the -ons is sounded. ${PARADIGM[5].forms.prendre} does, because the -ent is not. Once you have seen it here you will recognise it everywhere, which is worth more than the cell itself.`,
      },
      {
        type: 'teach',
        id: 'sheet-carries-forward',
        title: 'What carries forward',
        layer: 'deep',
        body: `${REFRAME} It is a syntax move rather than a memory one, and it holds for every compound of these three that exists, including the ones this course has not written a card for. ${FAMILY_CLAIM} Two things are deliberately not in this lesson and both of them are worth waiting for. The past forms of these three do not follow from anything in the present and they are the centre of ${unitRef(RESERVED_FOR, 'a2')}. And prendre turns up in a great many fixed expressions where it stops meaning take entirely; those open ${unitRef(NEIGHBOUR_UNITS.restaurant, 'a2')} and ${unitRef(NEIGHBOUR_UNITS.transport, 'a2')}, and what you have built here is exactly what both of them assume you arrive with.`,
      },
    ],
  },
];

export const PRENDRE_METTRE_LESSON: Lesson = {
  id: 'a2.15.l1',
  unitId: 'a2.15',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'Irréguliers 5 : prendre, mettre, battre',
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`), and a2.15 sits at
  // seq 9, which pads to "09". The stored value is a fallback and has to agree
  // with what the renderer computes. The batch checks it against the live unit
  // rather than trusting this comment.
  tag: 'A2 · LEÇON 09',
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped grammar jargon here in v1 because every
  // guard in the band walked `sections`, `sheets` and `terms` and not this. The
  // walk in the batch, the merge and the test includes `intro` and `overview`,
  // and this field is pinned by its own assertion.
  intro:
    'Three verbs go in and a dozen come out. Each of these is the head of a family, and every verb in the family takes its endings exactly, without a single new form to learn. The last screen before the exam hands you a verb this lesson never shows you and asks for it anyway.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v2: A BANNED WORD ON A CARD `sub`, AND A FRENCH GRAMMAR TERM ON ANOTHER.
  //
  // s14-combattre's second card had "honest" in its `sub`, which is on the house
  // ban list and is enforced across the WHOLE SEED by sons-alphabet.test.ts. The
  // batch and the merge both walk `prose()`, which drops NOTATION_KEYS, and
  // `sub` is on that list because on most cards it holds a respelling. On a
  // cardDeck card it holds prose. Every host gate in this build was green and
  // the seed-wide test went red the moment the merge landed.
  //
  // s18-trap's frSub was « Trois radicaux », which is grammar jargon in French
  // on a learner surface. `frSub` is deliberately French and that does not make
  // it exempt from invariants §8.
  //
  // Both guards now walk `display()` as well, which keeps `sub` and drops only
  // machine keys. The counter moves rather than the body being corrected under
  // v1: two different bodies under one number is the drift this project has lost
  // work to twice, and a2.09 set the precedent of moving the counter rather than
  // relaxing the guard that caught it.
  // v3: JARGON IN AN ACT TITLE, FOUND ON GLASS, AND A GUARD THAT COULD NOT SEE IT.
  //
  // Act 2 was titled "Three paradigms, eighteen cells" and the act title is drawn
  // on the RESUME INTERSTITIAL, which is the first screen a returning learner
  // meets. `paradigm` is on the jargon list in the batch, the merge and the test.
  // None of them fired, because `hasPhrase` is boundary-exact and `paradigm` does
  // not match `paradigms`: the character after the needle is a letter. a2.14's
  // list works round this one word at a time, carrying `infinitive` AND
  // `infinitives`; all three layers now check the -s plural of every entry.
  //
  // Three more plurals came out with it, and mission 3's frSub still said « vingt
  // verbes » where the title had been corrected to twelve. Both were read off the
  // hub on the same pass.
  //
  // v2: A BANNED WORD ON A CARD `sub`, AND A FRENCH GRAMMAR TERM ON ANOTHER.
  version: 3,

  grammarAssumed: [
    'The six subject pronouns and the nine they cover, introduced in a1.05',
    'on takes third-person-singular agreement, introduced in a1.05',
    'nous as the written first-person plural against on as the spoken one, introduced in a2.01',
    'The present tense of regular -er verbs and the silent -e, -es and -ent endings, introduced in a2.01',
    'Stem changes that preserve a sound, and the doubled consonant that writes an open vowel before a silent ending, introduced in a2.09',
    'The present tense of regular -ir and -re verbs, introduced in a2.10 and a2.11',
    'That a2.11 explicitly excluded prendre, mettre and battre from the regular -re class and deferred them here',
    'That three singular persons of an irregular verb are commonly one sound, introduced in a2.13',
    'Audible plural marking on a verb stem, introduced in a2.10',
    'The definite and demonstrative determiners inside the objects of these sentences, introduced in a1.04',
  ],
  grammarIntroduced: [
    'The present tense of prendre, with three stems: prend- in the singular, pren- for the first and second person plural, and prenn- in the third person plural',
    'The present tense of mettre and battre, with two stems each: a single-consonant singular and a geminate plural',
    'That the geminate in prennent is orthographic support for the stem-final consonant where the inflectional ending is silent, which is the mechanism a2.09 introduced for appeler and jeter',
    'Prefixed derivatives as inheriting the base verb inflection without exception: apprendre, comprendre, surprendre on prendre; permettre, promettre, remettre on mettre; combattre, débattre, abattre on battre',
    'That the derivation is productive, so an unseen prefixed verb is inflectable from its base without further instruction',
    'The formal contrast between prendre and the regular -re class taught in a2.11, which shares an infinitive ending and no stem behaviour',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'Irregular Verbs 5: Prendre, Mettre, Battre',
    subFr: 'Irréguliers 5 : prendre, mettre, battre',
    introFr: 'Trois verbes à apprendre, et une douzaine qui viennent avec.',
    minutes: 35,
    difficulty: 3,
    glyph: 'Pm',
    screens: 205,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PRENDRE_METTRE_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-15-prendre-mettre.test.ts, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered.
    recorded: [
      {
        id: 'rec-a2-15-grid',
        desc: 'THE EIGHTEEN CELLS, THREE TAKES, ONE PER VERB, EACH VERB\'S SIX IN ONE BREATH GROUP. Within the first three of EACH verb the verb must be acoustically identical: « Je prends la clé. » « Tu prends la clé. » « Il prend la clé. » A reader who knows the third is spelled differently will shorten the vowel or put a fraction of a d on it, and either instinct destroys the screen that asks the learner to fail to hear a difference. If a listener with their eyes shut can say which of the three they just heard, the take is unusable. In the plural the opposite is required and it is the whole lesson: the n at the end of « Ils prennent » must be clean, audible and unhurried, and it must be plainly a different sound from the nasal vowel that ends « Il prend ». Same for the t of « Ils mettent » and « Ils battent ». AND la clé MUST SOUND IDENTICAL IN ALL TWELVE prendre AND mettre LINES. It is the control: the learner is being shown that only the middle of the sentence moves.',
        clipIds: HEAD_IDS.map((id) => fr(id)),
      },
      {
        id: 'rec-a2-15-doubling',
        desc: 'THE PAIR THE LESSON TURNS ON, AS ONE TAKE, IN THIS ORDER: « Nous prenons la clé. » then « Ils prennent la clé. » then « Nous mettons la clé. » then « Ils mettent la clé. » The first two are a minimal pair in the strict sense and must be read as one: same speed, same pitch, same length, and the ONLY difference audible anywhere in the line is where the verb finishes. Read them as two separate sentences and the learner hears two performances instead of one contrast. The second pair is the control and must sound duller than the first: nothing surprising is happening in it and the reading should not pretend otherwise.',
        clipIds: [fr('fr.a2.verbes.427'), fr('fr.a2.verbes.429'), fr('fr.a2.verbes.433'), fr('fr.a2.verbes.435')],
      },
      {
        id: 'rec-a2-15-identity',
        desc: 'THE FAMILY, AS THREE ROWS OF THREE. « je prends · j\'apprends · je comprends », then the nous row, then the ils row, and each row is ONE breath group with the smallest possible gap between the three verbs. This is the take that does the teaching on the identity screen: the learner has to hear that the end of all three words is the same sound, arriving three times. Any pause between them lets the ear treat them as three separate words rather than one word wearing three fronts. Do not stress the fronts. They are the part that does not matter.',
        clipIds: [fr('fr.a2.verbes.440'), fr('fr.a2.verbes.441'), fr('fr.a2.verbes.442'), fr('fr.a2.verbes.443'), fr('fr.a2.verbes.444'), fr('fr.a2.verbes.445')],
      },
      {
        id: 'rec-a2-15-mettre-family',
        desc: 'THE mettre COMPOUNDS, AND ONE PAIR MATTERS MORE THAN THE REST. « Je mets la clé. » then « Je remets la clé. » must be one take, same speed, same everything, so that the two syllables of difference are the only thing in the line that moved. The learner is being shown that a compound is its base verb with something on the front, and this is the only place in the lesson where the two sentences are otherwise identical word for word.',
        clipIds: [fr('fr.a2.verbes.447'), fr('fr.a2.verbes.448'), fr('fr.a2.verbes.449'), fr('fr.a2.verbes.450'), fr('fr.a2.verbes.451')],
      },
      {
        id: 'rec-a2-15-battre',
        desc: 'THE SMALL ONE. « battre », « combattre », then « Je bats Paul. » « Il bat Paul. » « Nous battons Paul. » « Ils battent Paul. » Brisk and unremarkable, and that is a direction rather than an accident: battre gets two missions in this lesson because it earns two, and a reading that gives it the weight of the other two would be arguing with the design. The t at the end of « Ils battent » is the one thing that has to be clean, because it is the audible plural.',
        clipIds: [fr('fr.a2.verbes.421'), fr('fr.a2.verbes.422'), ...headIds('battre').map((id) => fr(id))],
      },
      {
        id: 'rec-a2-15-ear',
        desc: 'THE SIX LINES FOR THE LISTENING SCREEN, WITH AUDIO BEFORE TEXT, IN SINGULAR-PLURAL PAIRS: prendre, then mettre, then battre. Each pair is one take. The instruction is the opposite of the grid take and it is worth stating plainly: here the difference must be as clear as the language allows, because the learner is being asked to hear it. Land on the final consonant of each plural. Do not add one to the singular.',
        clipIds: ['fr.a2.verbes.426', 'fr.a2.verbes.429', 'fr.a2.verbes.432', 'fr.a2.verbes.435', 'fr.a2.verbes.437', 'fr.a2.verbes.439'].map((id) => fr(id)),
      },
      {
        id: 'rec-a2-15-notvendre',
        desc: 'THE BOUNDARY. « il vend » then « il prend », then « vendre » then « prendre », then « Nous prenons la clé. » The first pair is the point: the two singular forms rhyme exactly, which is why the mistake is so easy to make, and the reading must let them rhyme rather than helping the learner tell them apart. The difference does not arrive until the plural, and the last clip is where it arrives.',
        clipIds: ['il vend', 'il prend', 'vendre', 'prendre', fr('fr.a2.verbes.427')],
      },
      {
        id: 'rec-a2-15-family',
        desc: 'THE THREE FAMILY LISTS, READ AS LISTS: « apprendre, comprendre, surprendre », « permettre, promettre, remettre », « combattre, débattre, abattre ». Even pace, even weight, no rising list intonation that would make the last item sound like a conclusion. Nine words in three groups, and the value of the take is that all nine sound like ordinary vocabulary rather than like a rule being announced.',
        clipIds: [...FAMILIES.prendre, ...FAMILIES.mettre, ...FAMILIES.battre],
      },
      {
        id: 'rec-a2-15-evidence',
        desc: 'THE FOUR PUBLISHED ROWS, READ AS WHAT THEY ARE: sentences written for other lessons that happen to prove this one. Ordinary pace, no teaching emphasis anywhere, and in particular no weight on the verb. The whole value of the screen is that nobody was thinking about prendre or mettre when these were written.',
        clipIds: EVIDENCE_IDS.map((id) => importedFr(id)),
      },
      {
        id: 'rec-a2-15-unseen',
        desc: 'THE LAST MISSION BEFORE THE EXAM, AND IT IS TWO WORDS. « reprendre » and « admettre », each said once, plainly, with no example sentence and no conjugated form after them. That restraint is the mission: the learner is about to be asked to build four forms of these two and nothing in the audio may give one away. Do not read them slowly, do not separate the front from the rest, and do not follow either with a pause that invites the learner to expect more.',
        clipIds: [UNSEEN[0].infinitive, UNSEEN[1].infinitive],
      },
      {
        id: 'rec-a2-15-front',
        desc: 'THE BREAK CARD. « je prends » then « j\'apprends », as one take, back to back, with the smallest gap the recording allows. They must sound like the same word twice with something added at the front the second time, because that is what they are. Any pause, any change of pitch, any extra weight on the ap and the learner hears two words instead of one.',
        clipIds: ['je prends', 'j\'apprends'],
      },
      {
        id: 'rec-a2-15-scene',
        desc: 'THE CLIMBING GYM. She is friendly, slightly out of breath, unhurried and completely uninterested in teaching anybody French. « Tu apprends le français ici ? » is casual and quick, the way you ask somebody something while pulling a shoe off. The English line afterwards is the important one and it must not sound like a defeat or a rebuke: she switches language without thinking about it, cheerfully, because it is the shortest route to a conversation. That is exactly what makes it expensive, and nothing in the delivery should point at it.',
        clipIds: [fr('fr.a2.verbes.453'), fr('fr.a2.verbes.454')],
      },
    ],
  },
};

/* ─── Arrays the guards read, exported at the FOOT of the file ─────────────
 *
 * These are reads off consts declared above, so they cannot live in the export
 * block near the top: `export const X = SPEAK_IDS` before SPEAK_IDS is declared
 * is a temporal dead zone and throws at import time rather than failing to
 * compile. The section ids up there are literals for exactly that reason.
 *
 * The batch, the merge and the test all read THESE rather than rebuilding the
 * arrays, so a guard can never disagree with what the renderer is handed.    */

export const PRENDRE_METTRE_SPEAK_IDS = SPEAK_IDS;
export const PRENDRE_METTRE_ITEM_IDS = ITEM_IDS;
export const PRENDRE_METTRE_DECK_TRANCHE = DECK_TRANCHE;
export const PRENDRE_METTRE_ACTS = ACTS;
export const PRENDRE_METTRE_SECTIONS = SECTIONS;
export const PRENDRE_METTRE_SHEETS = SHEETS;
export const PRENDRE_METTRE_DRILLS = DRILLS;
export const PRENDRE_METTRE_ERROR_TRIGGERS = ERROR_TRIGGERS;
