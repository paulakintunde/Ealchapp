// a2.21.l1, « Le passé composé avec être », seq 18 on the A2 trail.
//
// 25 sections, 6 acts, 36 questions, two stepped trapDrills and one reference
// sheet. Every French string on every screen comes from
// passe-compose-etre-corpus.ts or from passe-compose-etre-imported.ts and none
// is typed twice.
//
// ── WHAT THIS LESSON OWNS ────────────────────────────────────────────────
//
// AGREEMENT, ON A VERB. This is the first time in the product that a verb
// changes for gender and number. Seventeen lessons of conjugation have trained
// the learner that a verb changes for the person; here the second word changes
// for who the sentence is about, exactly as a describing word does, and a2.03 is
// named and quoted rather than re-taught.
//
// It is the second kind of thing doctrine §B.5 says a grammar lesson can own —
// THE SPELLING, a change the learner can predict from a reason — and the reason
// is one sentence long.
//
// ── ACT WEIGHTS ──────────────────────────────────────────────────────────
//
//   which verbs take être   act 2, THREE sections
//   the Owns                act 3, EIGHT sections
//   the traps               act 4, four, two of them stepped trapDrills
//
// Doctrine §B.5: if the act structure gives the paradigm more missions than the
// Owns, the wrong lesson got built. Eight against three, asserted in all three
// layers.
//
// ── THE BOOKEND, WHICH IS THE POINT OF THE ACT ORDER ─────────────────────
//
// Doctrine §B.7 asks for a2.01's silent-agreement reframe to be paid off here,
// seventeen lessons later. It is quoted VERBATIM on `s08-bookend`, which sits
// immediately after the four forms arrive, so the learner meets the parallel
// while the four spellings are still on the screen behind them. A paraphrase
// must go red and the test asserts the literal string.
//
// ── AND WHERE THE BRIEF'S SECTION ADVICE IS RIGHT AND WRONG ──────────────
//
// RIGHT: the four agreement forms belong on one screen, all four, with the sound
// stated as identical; an avoir participle and an être participle belong side by
// side; the dictée is the heaviest production section.
//
// WRONG: « One table for the construction across six persons ». A `table` at
// layer `core` is a `table-in-core` density failure (corrections §8) and cannot
// be authored in the flow at all. The six-person walk is a `groupDrill`, which
// owns its layout and ends in a check, and the table lives in the reference
// sheet where `layer: 'deep'` allows it.

import type {
  Lesson, LessonAct, LessonSection, ErrorTrigger, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  A201_REFRAME, A203_REFRAME, A205_REFRAME, A215_REFRAME, A220_ETRE_FORMS,
  A220_REFRAME, ADJ_UNIT, AGREEMENT_CREDIT, AGREEMENT_RULE,
  AUDIBLE, AUTHORED_IDS, AVOIR_CLAIM, BOOKEND_CLAIM, BOOKEND_PARALLEL,
  CELL_IDS, CONTRAST_PAIRS, DESCENDRE_CREDIT, EAR_CLAIM, ELISION_CLAIM,
  ER_UNIT, ETRE_VERBS, FAMILIES, FAMILY_SIZES, FAMILY_UNIT, IMPORTED_IDS,
  IR_UNIT, IRREGULAR_UNIT, LESSON_ID, MNEMONIC, MNEMONIC_CLAIM,
  MNEMONIC_GAP_CLAIM, NEGATION_RULE, OBJECT_DEFERRAL, PASSE_UNIT,
  PATTERN_CLAIM, PRONOUN_UNIT, REFLEXIVE_DEFERRAL,
  REFLEXIVE_PAST_UNIT, REFLEXIVE_UNIT, REFRAME, REST_CLAIM, SCENE_ERROR,
  SCENE_ERROR_EN, SCENE_STALL, SCENE_STALL_EN, SHEET_ID, TRANSITIVE,
  TRANSITIVE_CLAIM, UNIT, WRONG, rowById, verbsIn,
} from './passe-compose-etre-corpus.ts';
import { ALREADY_YOURS, ETRE_TERMS, EVIDENCE_LINE } from './passe-compose-etre-terms.ts';
import { importedFr, rowCard, sub as impSub } from './passe-compose-etre-imported.ts';

/* ─── Reading the authored rows ────────────────────────────────────────────
 *
 * The lesson NEVER types a French string that is also a corpus row. `fr(id)` and
 * `en(id)` read it, so a screen and the card the learner is scored on cannot
 * drift apart. a2.13 §6.2 shipped a grid that disagreed with its own cards and
 * every host gate was green.                                                 */

const fr = (id: string): string => rowById(id).fr;
const en = (id: string): string => rowById(id).en;
const bare = (id: string): string => rowById(id).respell;
const sub = (id: string): string => `[${bare(id)}]`;
const ipaOf = (id: string): string => rowById(id).ipa;

const A = (n: number): string => `fr.a2.verbes.${n}`;

/** Strips a sentence-final full stop, for the places a French line is quoted
 *  INSIDE a question that has its own punctuation. FOUND ON A PIXEL 6 by a2.20:
 *  a question quoting two corpus rows rendered « ... peur.. » because both
 *  quoted lines already ended in one. */
const noStop = (s: string): string => s.replace(/\.$/, '');

/** A groupDrill item at `lg` for an AUTHORED row. MissionRich.tsx:439 draws
 *  `fr`, `ipa` and `note` and nothing else at this size, so the respelling and
 *  the gloss go in `note`. Ledger §a2.14-12. */
const card = (id: string) => ({ fr: fr(id), ipa: ipaOf(id), note: `${sub(id)} ${en(id)}` });

/* ─── Section ids, as LITERALS ─────────────────────────────────────────────
 *
 * Literals rather than reads off a const declared below, because
 * `export const X = SECTIONS[0].id` before SECTIONS is a temporal dead zone.   */

export const SCENE_SECTION_ID = 's01-scene';
export const GOALS_SECTION_ID = 's02-goals';
export const HALVES_SECTION_ID = 's03-twohalves';
export const RECAP_SECTION_ID = 's04-recap';
export const PATTERN_SECTION_ID = 's05-pattern';
export const CRUTCH_SECTION_ID = 's06-crutch';
export const FOURFORMS_SECTION_ID = 's07-fourforms';
export const BOOKEND_SECTION_ID = 's08-bookend';
export const BORROWED_SECTION_ID = 's09-borrowed';
export const PERSONS_SECTION_ID = 's10-persons';
export const CONTRAST_SECTION_ID = 's11-contrast';
export const AUDIBLE_SECTION_ID = 's12-audible';
export const UNSEEN_SECTION_ID = 's13-unseen';
export const BOUNDARY_SECTION_ID = 's14-boundary';
export const WHICHFIRST_SECTION_ID = 's15-whichfirst';
export const OBJECT_SECTION_ID = 's16-object';
export const NOTPRESENT_SECTION_ID = 's17-notpresent';
export const ERRORS_SECTION_ID = 's18-errors';
export const TALK_SECTION_ID = 's19-talk';
export const DICTATION_SECTION_ID = 's20-dictation';
export const SPEAK_SECTION_ID = 's21-speak';
export const REVIEW_SECTION_ID = 's22-review';
export const PROGRESS_SECTION_ID = 's23-progress';
export const QUIZ_SECTION_ID = 's24-quiz';
export const ROUNDUP_SECTION_ID = 's25-roundup';

/** THE OWNS. Eight sections against the three that say which verbs take être,
 *  and every layer walks these two lists rather than counting by hand. */
export const OWNS_SECTION_IDS = [
  FOURFORMS_SECTION_ID, BOOKEND_SECTION_ID, BORROWED_SECTION_ID,
  PERSONS_SECTION_ID, CONTRAST_SECTION_ID, AUDIBLE_SECTION_ID,
  UNSEEN_SECTION_ID, BOUNDARY_SECTION_ID,
] as const;

export const WHICH_VERBS_SECTION_IDS = [
  RECAP_SECTION_ID, PATTERN_SECTION_ID, CRUTCH_SECTION_ID,
] as const;

/** THE ONLY SECTIONS IN WHICH avoir MAY STAND IN FRONT OF ONE OF THE FIFTEEN.
 *  Everywhere else it is an error, and outside these it is the error the whole
 *  lesson exists to prevent. */
export const TRANSITIVE_SECTIONS = [
  OBJECT_SECTION_ID, SCENE_SECTION_ID, WHICHFIRST_SECTION_ID, ERRORS_SECTION_ID,
  QUIZ_SECTION_ID, REVIEW_SECTION_ID,
] as const;

/** THE PRODUCTION SURFACES. No question, drill, dictée line or spoken item on
 *  any of these may turn on the transitive split: it is shown receptively and
 *  the rule is B1's. */
export const PRODUCTION_SECTIONS = [
  DICTATION_SECTION_ID, SPEAK_SECTION_ID, QUIZ_SECTION_ID, UNSEEN_SECTION_ID,
  PERSONS_SECTION_ID, FOURFORMS_SECTION_ID,
] as const;

/** The sections in which a form that is not French may appear. */
export const WRONG_FORM_SECTIONS = [
  SCENE_SECTION_ID, ERRORS_SECTION_ID, WHICHFIRST_SECTION_ID,
  NOTPRESENT_SECTION_ID, OBJECT_SECTION_ID, QUIZ_SECTION_ID,
  CONTRAST_SECTION_ID, FOURFORMS_SECTION_ID,
] as const;

/* ─── The item lists the guards read ───────────────────────────────────────*/

const ITEM_IDS: string[] = [...AUTHORED_IDS, ...IMPORTED_IDS];

/** Every authored row carrying `dictation`, which is every row whose
 *  `dicteeMode` is LETTERS and which this lesson is willing to make a production
 *  surface. THE FOUR TRANSITIVE ROWS ARE NOT HERE and cannot be. */
const DICTEE_IDS: string[] = AUTHORED_IDS.filter((id) => rowById(id).drills.includes('dictation'));

/** Spoken practice draws only from teaching rows. The scene's four lines and the
 *  conversation's six are a conversation and belong in the scenario. */
const SPEAK_IDS: string[] = AUTHORED_IDS.filter((id) => {
  const r = rowById(id);
  return r.drills.includes('voiceflash') && !['scene', 'talk', 'transitive'].includes(r.role);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SCENE
 *
 *  Doctrine §B.2. The stall is on the FIRST WORD rather than on the ending, and
 *  that is the honest choice: in speech the ending costs nothing, because « je
 *  suis sortie » and « je suis sorti » are one sound. What costs is choosing
 *  between « j'ai » and « je suis » with somebody waiting.
 *
 *  AND THE BREAKDOWN IS SEMANTIC. « J'ai sorti avec des amis » is a transitive
 *  sortir, so the colleague hears « I took out with friends » and asks what. The
 *  sentence did not sound wrong; it meant something else.
 *
 *  NO BUBBLE'S `fr` CONTAINS « ! ». a2.05 §11.2 found on a Pixel 6 that a
 *  spaced exclamation mark makes the bubble lose its last word while the gloss
 *  under it still translates it. « ? » is safe and measured.
 * ═══════════════════════════════════════════════════════════════════════ */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Monday, the same office kitchen, and a colleague who actually wants to know. You had a good weekend and you have been looking forward to saying so.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'La collègue',
    fr: fr(A(680)),
    en: en(A(680)),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-21-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: SCENE_STALL,
    en: SCENE_STALL_EN,
    stage: `You know the verb and you know the past. What you do not know is which of the two first words this one takes, and you have started the sentence. ${PASSE_UNIT} gave you avoir and nothing else, so avoir is what arrives.`,
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'She is still waiting. What comes out?',
    options: [
      {
        fr: fr(A(681)),
        respell: sub(A(681)),
        en: 'être, and the evening gets told',
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
      works: 'She asks who you went with and the conversation carries on.',
      breaks: 'She heard a sentence about carrying something out of the house, and stopped to find out what.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La collègue',
    fr: fr(A(682)),
    en: en(A(682)),
    stage: 'Nobody has been rude and nothing has been mispronounced. With avoir in front of it, sortir means taking something out, so she waited for the thing. The sentence was fine French about something you did not do.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La collègue',
    fr: fr(A(683)),
    en: en(A(683)),
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'break',
    size: 'lg',
    // a2.19 §4 and ledger §7: the budget on this screen is LINES, not words, and
    // there is no `coach`, because the scene's own `closing` renders on the same
    // screen and a second copy of the reframe pushed a2.19's Continue under the
    // pager bar.
    heading: 'One word wrong',
    body: 'The verb was right and the tense was right. The first word was avoir, and with avoir in front of it that verb means something else entirely.',
    wrong: {
      fr: SCENE_ERROR,
      ipa: '/ʒe sɔʁ.ti a.vɛk de za.mi/',
      respell: '[ZHAY sor-TEE ah-vehk day zah-MEE]',
      en: 'what avoir gives',
    },
    right: {
      fr: fr(A(681)),
      ipa: ipaOf(A(681)),
      respell: sub(A(681)),
      en: 'what the language has',
    },
  },
];

/** a2.19's rule, credited. Declared here rather than in the corpus file because
 *  it is prose about a screen rather than a fact about the corpus. THE UNIT ID
 *  IS A LITERAL: a2.18 §6 and a2.20 §5.4 both found that renaming a constant
 *  renames both sides of a guard and the credit vanishes from every screen. */
const FUTUR_CREDIT = `That is a2.19's line, quoted by ${PASSE_UNIT} and again here.`;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the sentence that stopped ────────────────────────────────────*/

  {
    type: 'scene',
    id: SCENE_SECTION_ID,
    title: 'She Waited For The Thing',
    frSub: 'Lundi, à la machine à café',
    render: 'screens',
    layer: 'core',
    setting: { place: 'The office kitchen', city: 'Lyon', time: 'Monday morning' },
    beats: SCENE_BEATS,
    closing: { text: REFRAME, size: 'md' },
    terms: ['firstWord', 'theObject', 'movement'],
  },

  {
    type: 'goals',
    id: GOALS_SECTION_ID,
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    goals: [
      { t: 'Reach for the right first word', s: 'Fifteen verbs take être instead of avoir, and twelve of the fifteen have one thing in common that you can check in half a second.' },
      { t: 'Put the ending on', s: AGREEMENT_RULE },
      { t: 'Write what nobody can hear', s: 'All four spellings are one sound, so the dictée is the only place this can be tested and it is where most of the work is.' },
      { t: 'Decide about a verb nobody showed you', s: `${FAMILY_UNIT}'s move, one step further: cover the front of a verb and you inherit the first word as well as the second.` },
    ],
  },

  {
    /* THE REFRAME ARRIVES, AND SO DOES THE SHAPE OF THE LESSON. */
    type: 'cardDeck',
    id: HALVES_SECTION_ID,
    title: 'Two Halves',
    frSub: 'Deux moitiés',
    layer: 'core',
    swipe: true,
    // HINT_MAX = 60. a2.20 measured the cut at 64 shown of 71 on a Pixel 6.
    hint: 'Swipe. Six cards, and the second one is the lesson.',
    cards: [
      { label: 'the first half', head: 'which first word', body: `Fifteen verbs put a form of être where every other verb puts avoir. ${EVIDENCE_LINE}` },
      { label: 'and the second', head: REFRAME, body: 'After avoir the second word never moves. After être it changes for who the sentence is about, and that has never happened to a verb before now.' },
      { label: 'what does not change', head: `${PASSE_UNIT} still holds`, body: `« ${A205_REFRAME} » Two words, a gap between them, and the small ones in the gap. Nothing on this screen touches any of that.` },
      { label: 'and what you cannot hear', head: 'four spellings, one sound', body: EAR_CLAIM },
      { label: 'the pattern', head: PATTERN_CLAIM, body: REST_CLAIM },
      { label: 'where you have seen this', head: `${ADJ_UNIT} taught the endings`, body: `« ${A203_REFRAME} » The four endings on the second word are that lesson's four, and the only new thing is that a verb is doing it.` },
    ],
    terms: ['firstWord', 'theEnding', 'whoDidIt'],
  },

  /* ── Act 2: which verbs. THREE sections and then stop. ────────────────────*/

  {
    /* ONE RECAP. a2.05 is two seq back and taught the whole construction; this
       screen restates nothing and only shows that the shape is unchanged. THE
       NEGATION RULE IS QUOTED VERBATIM, from a2.19 through a2.05 to here. */
    type: 'examples',
    id: RECAP_SECTION_ID,
    title: 'The Shape Has Not Moved',
    frSub: 'La forme ne bouge pas',
    layer: 'core',
    say: `${PASSE_UNIT} said it two lessons ago: « ${A205_REFRAME} » The first word, the gap, the second word. All this lesson changes is which first word, and what happens to the second one afterwards.`,
    examples: [
      { fr: fr(A(661)), en: en(A(661)), note: `${sub(A(661))} avoir, and the second word does not move. ${PASSE_UNIT}'s rule exactly.` },
      { fr: fr(A(662)), en: en(A(662)), note: `${sub(A(662))} être, same woman, same restaurant, and an e has appeared. One word different in the whole sentence.` },
      { fr: fr(A(677)), en: en(A(677)), note: `${sub(A(677))} And the negative, in the same place it has always been. « ${NEGATION_RULE} » That is ${FUTUR_CREDIT}` },
      { fr: fr(A(676)), en: en(A(676)), note: `${sub(A(676))} ${ELISION_CLAIM}` },
    ],
    terms: ['firstWord', 'theEnding', 'whoDidIt'],
  },

  {
    /* THE FIFTEEN, GROUPED BY WHAT THEY MEAN. Four rows, inside the six-row
       Pixel 6 ceiling for a section that does not own its layout. Every cell is
       inside a2.17's eleven-character tapTable budget. */
    type: 'tapTable',
    id: PATTERN_SECTION_ID,
    title: 'Fifteen Verbs, Four Kinds',
    frSub: 'Quinze verbes',
    layer: 'core',
    say: `${PATTERN_CLAIM} Four rows, and the number beside each is how many verbs are in it. Tap a row to hear its first member.`,
    cols: ['Kind', 'How many', 'Like'],
    rows: FAMILIES.map((f) => {
      const first = verbsIn(f.key)[0]!;
      return {
        cells: [f.key === 'still' ? 'no moving' : f.label.replace(' and ', '/'), String(FAMILY_SIZES[f.key]), first.verb],
        say: importedFr(first.rowId),
        detail: {
          title: f.label,
          body: `${f.en}. ${verbsIn(f.key).map((v) => `${v.verb} gives ${v.past}`).join(', ')}. ${importedFr(first.rowId)} ${impSub(first.rowId)}`,
          say: importedFr(first.rowId),
        },
      };
    }),
    terms: ['movement', 'firstWord', 'theEnding'],
  },

  {
    /* THE MNEMONIC, ONCE, AS THE CRUTCH IT IS. The brief asks for the real
       pattern taught beside it and for the crutch to be named as one. And the
       `sub` does not promise it: corpus file §2. */
    type: 'cardDeck',
    id: CRUTCH_SECTION_ID,
    title: 'The Crutch',
    frSub: 'Le moyen mnémotechnique',
    layer: 'core',
    swipe: true,
    hint: 'Swipe. Five cards, and the last one is the catch.',
    cards: [
      { label: 'the crutch', head: MNEMONIC, body: `${MNEMONIC_CLAIM} Sixteen initials of sixteen verbs, in English, arranged into a name.` },
      { label: 'the pattern', head: PATTERN_CLAIM, body: 'Going, coming, arriving, leaving, going in, going out, going up, going down, falling, being born and dying. That is the thing they have in common and it is checkable on a verb the crutch does not list.' },
      { label: 'the one that breaks it', head: 'rester', body: REST_CLAIM },
      { label: 'what it misses', head: 'passer', body: MNEMONIC_GAP_CLAIM },
      { label: 'so', head: 'have both', body: 'The pattern tells you about a verb nobody has listed for you. The crutch tells you about the sixteen it holds, quickly, when you are in the middle of a sentence. Neither one does the other one\'s job.' },
    ],
    terms: ['theCrutch', 'movement', 'firstWord'],
  },

  /* ── Act 3: THE OWNS. Eight sections, and the heaviest act. ───────────────*/

  {
    /* THE FOUR FORMS, ALL FOUR, ON ONE SCREEN, WITH THE SOUND STATED AS
       IDENTICAL. THE BRIEF ASKS THE TEST TO ASSERT THIS LAYOUT FORM BY FORM.
       Everything is held still except the subject and the last two letters, and
       every respelling ends « tah-LAY », which is the claim the screen makes. */
    type: 'groupDrill',
    id: FOURFORMS_SECTION_ID,
    title: 'Four Spellings, One Sound',
    frSub: 'Quatre orthographes',
    layer: 'core',
    size: 'lg',
    say: `${REFRAME} ${AGREEMENT_RULE} Four cards, one verb, and the only thing that changes is who it is about. Read the respellings: all four end the same way.`,
    groups: [
      {
        label: 'one man, and one woman',
        items: [card(CELL_IDS[0]!), card(CELL_IDS[1]!)],
        check: {
          q: `${noStop(fr(CELL_IDS[0]!))} against ${noStop(fr(CELL_IDS[1]!))}. What is different when you say them?`,
          opts: ['The last syllable', 'Only the first word', 'Nothing at all'],
          correct: 1,
          why: 'The second word is identical: both are the same three sounds. Il and elle are different and the ending is not, which is the whole difficulty of this lesson.',
        },
      },
      {
        label: 'and more than one',
        items: [card(CELL_IDS[2]!), card(CELL_IDS[3]!)],
        check: {
          q: `${noStop(fr(CELL_IDS[2]!))} against ${noStop(fr(CELL_IDS[3]!))}. And here?`,
          opts: ['Nothing at all', 'The last syllable', 'The number of letters'],
          correct: 0,
          why: 'Ils and elles are one sound, sont is one sound, and allés and allées are one sound. These two sentences are completely identical out loud and two letters apart on paper.',
        },
      },
      {
        label: 'so where is the difference',
        items: [card(CELL_IDS[1]!), card(CELL_IDS[3]!)],
        check: {
          q: 'Where can you see which of the four a sentence is?',
          opts: ['In the sound of the second word', 'In the last two letters, in writing', 'In the first word only'],
          correct: 1,
          why: `${EAR_CLAIM} That is why the dictée in this lesson is longer than usual and why most of the exam is typed.`,
        },
      },
    ],
    terms: ['theEnding', 'oneSound', 'whoDidIt'],
  },

  {
    /* THE BOOKEND. Doctrine §B.7, seventeen lessons apart, and a2.01's reframe
       is QUOTED VERBATIM. A paraphrase must go red. */
    type: 'cardDeck',
    id: BOOKEND_SECTION_ID,
    title: 'Seventeen Lessons Ago',
    frSub: 'On vous l’avait dit',
    layer: 'core',
    swipe: true,
    // THE UNIT ID COMES FROM THE CONSTANT, like the two cards below it. It was
    // a literal here and the cards were not, so renaming ER_UNIT left the hint
    // still crediting a2.01 and satisfied the guard that checks the credit is on
    // the screen. Found by mutation 34.
    hint: `Swipe. Four cards, and the first is a line from ${ER_UNIT}.`,
    cards: [
      { label: 'the first lesson of this level', head: A201_REFRAME, body: BOOKEND_CLAIM },
      { label: 'there', head: 'je parle, tu parles, ils parlent', body: `${ER_UNIT} had six forms and three spellings that are one sound, and the pronoun in front settled which one you meant.` },
      { label: 'here', head: `${fr(CELL_IDS[0]!)} ${fr(CELL_IDS[3]!)}`, body: BOOKEND_PARALLEL },
      { label: 'so', head: 'French writes what it does not say', body: 'It has been doing this since the first lesson of this level, and this is the fourth time you have met it. Once you expect it, a silent ending stops being a surprise and starts being something you check.' },
    ],
    terms: ['oneSound', 'theEnding', 'whoDidIt'],
  },

  {
    /* a2.03's RULE, BORROWED AND CREDITED RATHER THAN RE-TAUGHT, and quoted
       verbatim. The literal, not a variable: a2.16 §3. */
    type: 'examples',
    id: BORROWED_SECTION_ID,
    title: 'You Know These Endings',
    frSub: 'Vous connaissez déjà ces terminaisons',
    layer: 'core',
    say: AGREEMENT_CREDIT,
    examples: [
      { fr: `${importedFr('fr.sons.adjectifs-essentiels.161')} · ${AUDIBLE.feminine}`, en: 'dead, and dead about a woman', note: `${impSub('fr.sons.adjectifs-essentiels.161')} This one is published in this app as an ordinary describing word, and it is also the past form of ${AUDIBLE.verb}. The same word doing both jobs.` },
      { fr: fr(A(669)), en: en(A(669)), note: `${sub(A(669))} As a past form, with être in front of it, and nothing on the end.` },
      { fr: fr(A(670)), en: en(A(670)), note: `${sub(A(670))} And with the ending, which is where a describing word would have put it too.` },
      { fr: fr(A(693)), en: en(A(693)), note: `${sub(A(693))} The subject does not have to be a person. Le verre is masculine and singular, so nothing goes on.` },
    ],
    terms: ['describing', 'theEnding', 'oneSound'],
  },

  {
    /* THE SIX PERSONS. The brief asks for a table and a table at layer core is a
       density failure (corrections §8), so it is a groupDrill, which owns its
       layout and ends in a check. The full table is in the reference sheet. */
    type: 'groupDrill',
    id: PERSONS_SECTION_ID,
    title: 'All Six Persons',
    frSub: 'Les six personnes',
    layer: 'core',
    size: 'lg',
    say: `Six persons, one verb, and ${IR_UNIT}'s frame word so the two lessons sit against each other. Watch the last two letters and nothing else.`,
    groups: [
      {
        label: 'me and you',
        items: [card(A(655)), card(A(656))],
        check: {
          q: 'The second one is addressed to a woman. How do you know?',
          opts: ['From the verb', 'From the e on the end', 'From tu'],
          correct: 1,
          why: 'Only the ending says so. Tu is the same for anybody and the sound is the same either way, so this is a fact you can only get in writing.',
        },
      },
      {
        label: 'him, and us',
        items: [card(A(657)), card(A(658))],
        check: {
          q: 'Nous sommes partis. What would change if everyone in the group were a woman?',
          opts: ['Nothing', 'An e before the s', 'The first word'],
          correct: 1,
          why: 'It becomes parties, with the e for the women and the s for the number. Two letters, and still not a sound.',
        },
      },
      {
        label: 'and the two plurals',
        items: [card(A(659)), card(A(660))],
        check: {
          q: 'Vous êtes parties. What does the ending tell you that the words do not?',
          opts: ['When they left', 'That they are all women', 'How many there are'],
          correct: 1,
          why: 'The s is the number and the e is the gender. Vous alone tells you neither, which is why the ending is worth writing.',
        },
      },
    ],
    terms: ['whoDidIt', 'theEnding', 'firstWord'],
  },

  {
    /* AN avoir PARTICIPLE AND AN être PARTICIPLE SIDE BY SIDE, ONE AGREEING AND
       ONE NOT. THE SECOND REQUIRED LAYOUT, and the test asserts them AS PAIRS. */
    type: 'examples',
    id: CONTRAST_SECTION_ID,
    title: 'One Agrees, One Does Not',
    frSub: 'L’un s’accorde, l’autre non',
    layer: 'core',
    say: `${AVOIR_CLAIM} Two pairs, and inside each pair only the verb is different.`,
    examples: CONTRAST_PAIRS.flatMap(([av, et]) => [
      { fr: fr(av), en: en(av), note: `${sub(av)} avoir. Nothing on the end, and nothing would go on it in any person.` },
      { fr: fr(et), en: en(et), note: `${sub(et)} être. Same subject, same place, and the ending appears.` },
    ]),
    terms: ['firstWord', 'theEnding', 'describing'],
  },

  {
    /* THE ONE FEMININE YOU CAN HEAR, and the one thing in this lesson the ear
       is good for. A `listening` section, which takes `lines` and `questions`
       and NOT `items`: validateLesson refuses `items` by name. */
    type: 'listening',
    id: AUDIBLE_SECTION_ID,
    title: 'The One You Can Hear',
    frSub: 'Celui qu’on entend',
    layer: 'core',
    questionsInModal: true,
    say: `${AUDIBLE.claim} Listen to all four and then answer. This is the only place in the lesson where listening tells you anything.`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-21-audible' },
    lines: [A(669), A(670), A(671), A(672)].map((id) => ({ fr: fr(id), en: en(id) })),
    questions: [
      {
        q: `${noStop(fr(A(669)))} against ${noStop(fr(A(670)))}. What did you hear?`,
        opts: ['Nothing different', 'A t at the end of the second word', 'A different first word'],
        correct: 1,
        why: `${AUDIBLE.masculine} ends on the r and ${AUDIBLE.feminine} ends on a t. The e wakes the t up, which is what an e does everywhere else in French and does not do to any of the other fourteen verbs here.`,
      },
      {
        q: `${noStop(fr(A(671)))} against ${noStop(fr(A(672)))}. And here?`,
        opts: ['The same t', 'An s on the end', 'Nothing at all'],
        correct: 0,
        why: `${AUDIBLE.numberClaim} The plural adds a letter and no sound, exactly as it does on the other fourteen.`,
      },
      {
        q: 'Why does this one verb behave differently from the other fourteen?',
        opts: [
          'It is irregular',
          'Its past form ends in a consonant, so an e after it can be heard',
          'It is used more often',
        ],
        correct: 1,
        why: 'The other fourteen end in a vowel sound, and an e after a vowel adds nothing. mort ends on a consonant, so the e gives it something to say.',
      },
      {
        q: 'What can you check by ear in the rest of this lesson?',
        opts: ['The ending', 'The first word', 'Both'],
        correct: 1,
        why: `Être and avoir are completely different words, so the first word is audible everywhere. ${EAR_CLAIM}`,
      },
    ],
    terms: ['oneSound', 'describing', 'theEnding'],
  },

  {
    /* THE GENERALISATION, IN THE FLOW. Doctrine §B.1: a mission that makes the
       learner answer for a verb the lesson never showed them has taught the
       system rather than the list. a2.15's move, one step further than a2.20
       took it: the front decides the FIRST WORD as well as the second. */
    type: 'groupDrill',
    id: UNSEEN_SECTION_ID,
    title: 'Three Nobody Listed',
    frSub: 'Trois cas nouveaux',
    layer: 'core',
    size: 'lg',
    say: `${A215_REFRAME} That is ${FAMILY_UNIT}'s line, and here it settles the first word as well as the second. Three verbs this lesson has not listed, and one of them is not in the crutch either.`,
    groups: [
      {
        label: 'to become',
        items: [rowCard('fr.sons.verbes-essentiels.083'), card(A(695))],
        check: {
          q: 'Devenir. He became a teacher. Il ___ professeur.',
          opts: ['a devenu', 'est devenu', 'est devenue'],
          correct: 1,
          why: 'Cover the de and venir is underneath. venir takes être, so devenir takes être, and the form is venu with de in front. Il is masculine and singular, so nothing goes on the end.',
        },
      },
      {
        label: 'to come back',
        items: [rowCard('fr.sons.verbes-essentiels.084'), card(A(675))],
        check: {
          q: 'Revenir, about a woman. Elle est ___ lundi.',
          opts: ['revenu', 'revenue', 'revenus'],
          correct: 1,
          why: 'The same move again, and then the ending. venir gives venu, re goes on the front, and elle puts an e on the back.',
        },
      },
      {
        label: 'and one the crutch has no letter for',
        items: [rowCard('fr.sons.verbes-essentiels.086'), card(A(696))],
        check: {
          q: 'Repartir, about several women. Elles sont ___ lundi.',
          opts: ['reparties', 'reparti', 'repartis'],
          correct: 0,
          why: `Cover the re and partir is underneath, which takes être. Then both endings, because they are more than one and they are women. ${MNEMONIC} has no letter for this verb and covering the front settles it anyway.`,
        },
      },
    ],
    terms: ['firstWord', 'theEnding', 'theCrutch'],
  },

  {
    /* THE BOUNDARY. What this lesson does not do, named by unit id, so a learner
       who meets « je me suis levé » does not conclude they were taught a
       simplification. */
    type: 'cardDeck',
    id: BOUNDARY_SECTION_ID,
    title: 'What Is Still Coming',
    frSub: 'Ce qui arrive ensuite',
    layer: 'core',
    swipe: true,
    hint: 'Swipe. Three cards, and none of them is work for today.',
    cards: [
      { label: 'more verbs with être', head: `${REFLEXIVE_UNIT} and ${REFLEXIVE_PAST_UNIT}`, body: REFLEXIVE_DEFERRAL },
      { label: 'the one case with avoir', head: PRONOUN_UNIT, body: OBJECT_DEFERRAL },
      { label: 'and the forms themselves', head: `${IRREGULAR_UNIT} did those`, body: `« ${A220_REFRAME} » That lesson gave you ${A220_ETRE_FORMS.join(', ')} and said the first word was this one's. Here it is, and the ending goes on all three.` },
    ],
    terms: ['firstWord', 'theEnding', 'movement'],
  },

  /* ── Act 4: the traps ────────────────────────────────────────────────────*/

  {
    /* TRAP ONE: WHICH FIRST WORD. Stepped, rule > cards > audio > drill with a
       GATED drill step. lesson-contract.test.ts is a SEED-WIDE test requiring
       exactly that walk on every A2 trapDrill (corrections §14.6). */
    type: 'trapDrill',
    id: WHICHFIRST_SECTION_ID,
    title: 'Which First Word',
    frSub: 'Quel premier mot',
    layer: 'core',
    swipe: true,
    say: 'Four cards and then six to prove it. Every one of the six is a verb where the wrong first word produces a sentence that is fine French and means something else.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-21-which', wrongThenRight: true },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'Twelve Move, Three Do Not' },
      { kind: 'cards', label: 'Four cards', title: 'What It Looks Like' },
      { kind: 'audio', label: 'Hear it', title: 'Wrong, Then Right' },
      { kind: 'drill', label: 'Prove it', title: 'Pick The First Word', gate: true },
    ],
    rule: {
      title: 'The verb decides, and the meaning is the clue',
      body: `${PATTERN_CLAIM} If the sentence is about getting somewhere, leaving somewhere, or starting or stopping existing, check for être first.`,
    },
    // EVERY CARD'S `fr` IS FRENCH, because the audio step plays each card's `fr`
    // at the section's speeds through a French voice. a2.18 §4 found that by
    // having a card hold an English gloss and being refused.
    cards: [
      { promptLabel: 'avoir would give', promptSound: WRONG[0]!.wrong, fr: WRONG[0]!.wrong, ipa: '/ɛl a a.le o maʁ.ʃe/', tip: WRONG[0]!.why },
      { promptLabel: 'and it is être', promptSound: WRONG[0]!.right, fr: WRONG[0]!.right, ipa: '/ɛl ɛ ta.le o maʁ.ʃe/', tip: 'Going to the market is going somewhere, which is the commonest of the four kinds.' },
      { promptLabel: 'and this one is avoir', promptSound: fr(A(661)), fr: fr(A(661)), ipa: ipaOf(A(661)), tip: `${en(A(661))} Eating is not going anywhere, so it is an ordinary verb and nothing goes on the end.` },
      { promptLabel: 'and so is this', promptSound: fr(A(668)), fr: fr(A(668)), ipa: ipaOf(A(668)), tip: `${en(A(668))} There is something after the verb that is being done rather than moving, so avoir. This is the one exception you will meet.` },
    ],
    // Hand-randomised: MissionRich renders authored order exactly, so a correct
    // answer at index 0 six times running gives itself away.
    drill: [
      { promptSay: WRONG[0]!.right, opts: ['avoir', 'être'], correct: 1 },
      { promptSay: fr(A(661)), opts: ['avoir', 'être'], correct: 0 },
      { promptSay: fr(A(690)), opts: ['être', 'avoir'], correct: 0 },
      { promptSay: fr(A(666)), opts: ['avoir, because the bin is being carried out', 'être'], correct: 0 },
      { promptSay: fr(A(674)), opts: ['avoir, because nothing moves', 'être'], correct: 1 },
      { promptSay: fr(A(693)), opts: ['être', 'avoir'], correct: 0 },
    ],
    terms: ['firstWord', 'movement', 'theObject'],
  },

  {
    /* THE TRANSITIVE SPLIT, RECEPTIVELY, AND THE DECISION IS DECLARED ON THE
       SCREEN AS WELL AS IN THE REPORT. Corpus file §6: three of the six have
       zero published transitive uses, so this is a group of two.

       AND a2.11's descendre IS CLOSED FORWARD HERE. That lesson teaches the verb
       in the present eleven times and names neither first word, so there is no
       back-reference to answer; what is assertable is this card. */
    type: 'cardDeck',
    id: OBJECT_SECTION_ID,
    title: 'When It Takes Avoir Instead',
    frSub: 'Quand c’est avoir',
    layer: 'core',
    swipe: true,
    hint: 'Swipe. Five cards, and none of them is asked for later.',
    cards: [
      { label: 'the split', head: TRANSITIVE_CLAIM, body: 'A few of the fifteen can have something after them that is being moved. When they do, the first word is avoir and nothing goes on the end.' },
      { label: 'sortir', head: `${fr(A(665))} ${fr(A(666))}`, body: `${noStop(en(A(665)))} against ${noStop(en(A(666)))}. sortir on its own is going out and sortir with something after it is carrying that thing out. ${sub(A(666))}` },
      { label: 'passer', head: `${fr(A(667))} ${fr(A(668))}`, body: `${noStop(en(A(667)))} against ${noStop(en(A(668)))}. passer is the one you will actually meet: forty-five sentences in this app put avoir in front of it and almost all of them are about taking an exam.` },
      { label: 'going down', head: 'descendre', body: DESCENDRE_CREDIT },
      { label: 'and what to do about it', head: 'nothing, today', body: 'Recognise it when you read it. Nothing later in this lesson asks you to produce one, because the thing you are learning is which verbs need être, and these are the places where they do not.' },
    ],
    terms: ['theObject', 'firstWord', 'movement'],
  },

  {
    /* TRAP TWO: « je suis allé » IS A PAST TENSE AND NOT A DESCRIPTION. The
       brief asks for a mission on it by name. Stepped, and NOT wrongThenRight:
       all four cards are correct French and the pair is a contrast rather than
       an error. The ledger's trapDrill sweep records that a truthful audio-step
       title is required where the take is not an error demonstration. */
    type: 'trapDrill',
    id: NOTPRESENT_SECTION_ID,
    title: 'It Is Not A Description',
    frSub: 'Ce n’est pas le présent',
    layer: 'core',
    swipe: true,
    say: 'Four cards and then six to prove it. Every one of these looks like a sentence about how somebody is, and every one of them is about something that happened.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-21-past' },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'Est Plus A Second Word' },
      { kind: 'cards', label: 'Four cards', title: 'Happened, Not Is' },
      { kind: 'audio', label: 'Hear it', title: 'Four Things That Happened' },
      { kind: 'drill', label: 'Prove it', title: 'Happened Or Is', gate: true },
    ],
    rule: {
      title: 'A form of être plus a second word is a past',
      body: 'Elle est fatiguée describes her now. Elle est partie says she left. The shape is the same and the second word decides: a describing word describes, and a past form reports.',
    },
    cards: [
      { promptLabel: 'this happened', promptSound: fr(A(651)), fr: fr(A(651)), ipa: ipaOf(A(651)), tip: `${en(A(651))} Not "he is gone". Something he did, and it is finished.` },
      { promptLabel: 'and this happened', promptSound: fr(A(673)), fr: fr(A(673)), ipa: ipaOf(A(673)), tip: `${en(A(673))} A single event, on a day, however long ago it was.` },
      { promptLabel: 'and this', promptSound: fr(A(674)), fr: fr(A(674)), ipa: ipaOf(A(674)), tip: `${en(A(674))} Staying is not a description either. It is what she did with the afternoon.` },
      { promptLabel: 'and even this', promptSound: fr(A(693)), fr: fr(A(693)), ipa: ipaOf(A(693)), tip: `${en(A(693))} One event, over. Not a glass that is in a fallen state.` },
    ],
    drill: [
      { promptSay: fr(A(651)), opts: ['it happened', 'it is a description'], correct: 0 },
      { promptSay: 'Elle est fatiguée.', opts: ['it is a description', 'it happened'], correct: 0 },
      { promptSay: fr(A(674)), opts: ['it is a description', 'it happened'], correct: 1 },
      { promptSay: 'Il est content.', opts: ['it happened', 'it is a description'], correct: 1 },
      { promptSay: fr(A(692)), opts: ['it happened', 'it is a description'], correct: 0 },
      { promptSay: fr(A(670)), opts: ['it is a description', 'it happened'], correct: 1 },
    ],
    terms: ['describing', 'firstWord', 'theEnding'],
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
    terms: ['firstWord', 'theEnding', 'theObject'],
  },

  /* ── Act 5: out loud, and on paper ───────────────────────────────────────*/

  {
    type: 'scenario',
    id: TALK_SECTION_ID,
    title: 'The Evening, Properly',
    frSub: 'On raconte la soirée',
    layer: 'core',
    setting: 'The same colleague, later in the week, and this time you have both halves. Every answer is something that is over, and every one of them takes être.',
    turns: [
      {
        ai: fr(A(680)),
        en: en(A(680)),
        user: fr(A(681)),
        userEn: en(A(681)),
        // TWO ALTERNATIVES MINIMUM ON EVERY TURN AND A `userEn`.
        // `scenario.logic.test.ts` is a SEED-WIDE test requiring both, and a2.03
        // shipped three turns with one alt each with every gate green.
        alts: [
          { fr: fr(A(662)), en: en(A(662)) },
          { fr: fr(A(694)), en: en(A(694)) },
        ],
      },
      {
        ai: fr(A(684)),
        en: en(A(684)),
        user: fr(A(685)),
        userEn: en(A(685)),
        alts: [
          { fr: fr(A(674)), en: en(A(674)) },
          { fr: fr(A(692)), en: en(A(692)) },
        ],
      },
      {
        ai: fr(A(686)),
        en: en(A(686)),
        user: fr(A(687)),
        userEn: en(A(687)),
        alts: [
          { fr: fr(A(660)), en: en(A(660)) },
          { fr: fr(A(691)), en: en(A(691)) },
        ],
      },
      {
        ai: fr(A(688)),
        en: en(A(688)),
        user: fr(A(689)),
        userEn: en(A(689)),
        alts: [
          { fr: fr(A(675)), en: en(A(675)) },
          { fr: fr(A(679)), en: en(A(679)) },
        ],
      },
      {
        ai: fr(A(682)),
        en: en(A(682)),
        user: fr(A(665)),
        userEn: en(A(665)),
        alts: [
          { fr: fr(A(690)), en: en(A(690)) },
          { fr: fr(A(655)), en: en(A(655)) },
        ],
      },
    ],
    terms: ['firstWord', 'theEnding', 'whoDidIt'],
  },

  {
    type: 'dictation',
    id: DICTATION_SECTION_ID,
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    // Every row here is in LETTERS mode through the REAL `dicteeMode`, checked
    // in the batch, the merge and the test.
    //
    // THIS IS THE HEAVIEST PRODUCTION SECTION IN THE LESSON AND THE BRIEF IS
    // RIGHT THAT IT HAS TO BE. Agreement is inaudible, so a learner who writes
    // « Elles sont allées. » from dictation has demonstrated the whole lesson;
    // no other surface in the app can ask for it. `practice` with skill 'write'
    // draws no writing surface at all.
    itemIds: DICTEE_IDS,
    say: 'Six lines, and the first four are the same verb four times. Nothing you hear will tell you which of the four you are writing. The words in front of it will.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], maxPlays: 3, recordingId: 'rec-a2-21-dictee' },
    terms: ['theEnding', 'oneSound', 'whoDidIt'],
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
    terms: ['firstWord', 'movement'],
  },

  /* ── Act 6: prove it ─────────────────────────────────────────────────────*/

  {
    type: 'reviewDeck',
    id: REVIEW_SECTION_ID,
    title: 'The Whole Thing',
    frSub: 'Tout, d’un coup',
    layer: 'core',
    cards: [
      { front: 'Which first word do these fifteen take?', back: `être. ${PATTERN_CLAIM}`, say: fr(A(651)) },
      { front: 'And what happens to the second word?', back: `${REFRAME} ${AGREEMENT_RULE}`, say: fr(A(652)) },
      { front: 'How many of the four spellings can you hear?', back: EAR_CLAIM, say: fr(A(654)) },
      { front: 'Elle a mangé. Why is there no e on mangé?', back: AVOIR_CLAIM, say: fr(A(661)) },
      { front: 'Which verb here has a feminine you can hear?', back: `${AUDIBLE.claim} ${AUDIBLE.numberClaim}`, say: fr(A(670)) },
      { front: 'Which one takes être and does not move?', back: REST_CLAIM, say: fr(A(674)) },
      { front: `${MNEMONIC}. What is it for and what does it miss?`, back: `${MNEMONIC_CLAIM} ${MNEMONIC_GAP_CLAIM}`, say: fr(A(694)) },
      { front: 'You meet a verb with something on the front. What do you do?', back: `${A215_REFRAME} And the first word comes with it, so devenir takes être because venir does.`, say: fr(A(695)) },
      { front: 'Where does the negative go?', back: `${NEGATION_RULE} ${ELISION_CLAIM}`, say: fr(A(677)) },
      { front: `${noStop(fr(A(665)))} against ${noStop(fr(A(666)))}. Why the different first word?`, back: TRANSITIVE_CLAIM, say: fr(A(666)) },
    ],
  },

  {
    type: 'progressCheck',
    id: PROGRESS_SECTION_ID,
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: `${REFRAME} The exam has six rounds and most of it is typed, because the ending is a written thing and picking it out of four is a different job.`,
    stats: [
      { k: 'Verbs', v: '15, and 12 of them have one thing in common.' },
      { k: 'Endings', v: `4, and they are ${ADJ_UNIT}'s four.` },
      { k: 'New constructions', v: `0. ${PASSE_UNIT} gave you the whole shape and it has not moved.` },
      { k: 'Used again in', v: `${REFLEXIVE_UNIT} and ${REFLEXIVE_PAST_UNIT}, which declares this lesson as a prerequisite.` },
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
    say: 'Six rounds of six. Most of it is typed, because writing the ending is the thing this lesson claims you can do.',
    rounds: [
      {
        id: 'r1-which-first',
        label: 'Which first word',
        // Round targets are ordered deliberately. drillForRound returns the
        // FIRST target that has a drill and then stops, so the first name here
        // is what a failing learner actually gets, and every round leads on a
        // DIFFERENT trigger. That is what makes all six drills reachable.
        targets: ['err-wrong-first', 'err-mnemonic-only'],
        say: 'Six on avoir against être.',
        questions: [
          {
            q: 'Elle ___ allée au marché. Which first word?',
            format: 'mcq',
            opts: ['est', 'a', 'ont', 'sont'],
            correct: 0,
            why: 'aller is one of the fifteen and elle is one person, so est. The first option is what a learner who has only met a2.05 reaches for.',
            ref: PATTERN_SECTION_ID,
          },
          {
            q: 'Elle ___ mangé au marché. And here?',
            format: 'mcq',
            opts: ['est', 'a', 'sont', 'ont'],
            correct: 1,
            why: 'manger is an ordinary verb, so avoir, and nothing goes on the end of mangé either.',
            ref: CONTRAST_SECTION_ID,
          },
          {
            q: 'rester. Does it take être?',
            format: 'mcq',
            opts: ['No, nothing moves', 'Only in the plural', 'Yes'],
            correct: 2,
            why: REST_CLAIM,
            ref: CRUTCH_SECTION_ID,
          },
          {
            q: 'Fix this. You mean that she went to the market.',
            format: 'errorSpot',
            prompt: WRONG[0]!.wrong,
            accept: [WRONG[0]!.right, 'Elle est allee au marche'],
            answer: WRONG[0]!.right,
            why: WRONG[0]!.why,
            ref: WHICHFIRST_SECTION_ID,
          },
          {
            q: 'tomber. Which first word does it take?',
            format: 'mcq',
            opts: ['être', 'avoir', 'either'],
            correct: 0,
            why: 'Falling is going down, which is one of the four kinds. It is also a letter of the crutch, so both ways of checking give the same answer.',
            ref: PATTERN_SECTION_ID,
          },
          {
            q: 'Nous ___ arrivés à huit heures.',
            format: 'typeIn',
            accept: ['sommes'],
            answer: 'sommes',
            why: 'arriver takes être and nous takes sommes. The s on arrivés is already there because there is more than one of you.',
            ref: PERSONS_SECTION_ID,
          },
        ],
      },
      {
        id: 'r2-the-ending',
        label: 'Write the ending',
        targets: ['err-no-ending', 'err-wrong-first'],
        say: 'Six on the last two letters, and the subject is fixed in every one.',
        questions: [
          {
            q: 'A woman speaking. Je suis ___ au marché. (aller)',
            format: 'typeIn',
            accept: ['allée'],
            answer: 'allée',
            why: 'She is one woman, so the e and nothing else. It sounds exactly like allé and it is not spelled like it.',
            ref: FOURFORMS_SECTION_ID,
          },
          {
            q: 'Two men. Ils sont ___ tôt. (partir)',
            format: 'typeIn',
            accept: ['partis'],
            answer: 'partis',
            why: 'More than one, and not all women, so the s alone. Two men, or a man and a woman, take the same ending.',
            ref: PERSONS_SECTION_ID,
          },
          {
            q: 'Three women. Elles sont ___ à midi. (descendre)',
            format: 'typeIn',
            accept: ['descendues'],
            answer: 'descendues',
            why: 'The past form of descendre is descendu, then the e for the women and the s for the number. Both, in that order.',
            ref: PERSONS_SECTION_ID,
          },
          {
            q: 'One woman. Elle est ___ à la maison. (rester)',
            format: 'typeIn',
            accept: ['restée'],
            answer: 'restée',
            why: 'rester takes être even though nothing moves, and the ending goes on exactly as it does on the twelve that do.',
            ref: CRUTCH_SECTION_ID,
          },
          {
            q: 'Which one is written about a group of women?',
            format: 'mcq',
            opts: ['venus', 'venu', 'venues', 'venue'],
            correct: 2,
            why: 'The e is the women and the s is the number, so both. All four of these are one sound, which is why this is a reading question and not a listening one.',
            ref: FOURFORMS_SECTION_ID,
          },
          {
            q: 'Le verre est ___. (tomber)',
            format: 'typeIn',
            accept: ['tombé'],
            answer: 'tombé',
            why: 'The subject is a thing rather than a person and the rule is the same: le verre is masculine and singular, so nothing goes on.',
            ref: BORROWED_SECTION_ID,
          },
        ],
      },
      {
        id: 'r3-not-after-avoir',
        label: 'Not after avoir',
        targets: ['err-ending-after-avoir', 'err-no-ending'],
        say: 'Six on where the ending does not go, which is everywhere avoir is.',
        questions: [
          {
            q: 'Fix this. You mean that she ate at the market.',
            format: 'errorSpot',
            prompt: WRONG[2]!.wrong,
            accept: [WRONG[2]!.right, 'Elle a mange au marche'],
            answer: WRONG[2]!.right,
            why: WRONG[2]!.why,
            ref: CONTRAST_SECTION_ID,
          },
          {
            q: 'Elle a ___ un examen. (passer)',
            format: 'typeIn',
            accept: ['passé'],
            answer: 'passé',
            why: 'avoir, because there is an exam after the verb, and after avoir nothing goes on the end however many women there are.',
            ref: OBJECT_SECTION_ID,
          },
          {
            q: 'Which of these is right?',
            format: 'mcq',
            opts: ['Elles ont mangées.', 'Elles sont mangé.', 'Elles sont mangées.', 'Elles ont mangé.'],
            correct: 3,
            why: `${AVOIR_CLAIM} Three women and an ordinary verb, so avoir and a bare second word.`,
            ref: CONTRAST_SECTION_ID,
          },
          {
            q: 'Fix this. You mean that they went to the market.',
            format: 'errorSpot',
            prompt: WRONG[3]!.wrong,
            accept: [WRONG[3]!.right, 'Ils sont alles au marche'],
            answer: WRONG[3]!.right,
            why: WRONG[3]!.why,
            ref: PERSONS_SECTION_ID,
          },
          {
            q: 'Elle est ___ au restaurant. (aller)',
            format: 'typeIn',
            accept: ['allée'],
            answer: 'allée',
            why: 'être this time, so the e goes on. The same woman and the same restaurant as the avoir sentence, and one word decides it.',
            ref: CONTRAST_SECTION_ID,
          },
          {
            q: 'What tells you whether to put an ending on at all?',
            format: 'mcq',
            opts: ['The verb', 'The first word', 'The subject', 'The tense'],
            correct: 1,
            why: 'être puts it on and avoir never does. The subject then tells you WHICH ending, but only once être has already decided that there is one.',
            ref: HALVES_SECTION_ID,
          },
        ],
      },
      {
        id: 'r4-the-plural',
        label: 'Both endings',
        targets: ['err-only-feminine', 'err-no-ending'],
        say: 'Six where more than one of the letters is needed.',
        questions: [
          {
            q: 'Two women. Elles sont ___ ensemble. (arriver)',
            format: 'typeIn',
            accept: ['arrivées'],
            answer: 'arrivées',
            why: 'The e and the s, in that order. Forgetting the s is the commonest of the two, because the e is the one people are told about.',
            ref: PERSONS_SECTION_ID,
          },
          {
            q: 'A man and a woman. Ils sont ___ tôt. (partir)',
            format: 'typeIn',
            accept: ['partis'],
            answer: 'partis',
            why: 'One woman in a group does not make the group feminine. Anything other than all women takes the s alone.',
            ref: PERSONS_SECTION_ID,
          },
          {
            q: 'Which of these is a group of women?',
            format: 'mcq',
            opts: ['sortis', 'sortie', 'sorties', 'sorti'],
            correct: 2,
            why: 'Both letters. The second option is one woman and the first is a mixed group, and all four are one sound.',
            ref: FOURFORMS_SECTION_ID,
          },
          {
            q: 'Vous êtes ___ tôt, said to several women. (partir)',
            format: 'typeIn',
            accept: ['parties'],
            answer: 'parties',
            why: 'Vous is plural here, so both letters. Said to one person it would be parti or partie, and vous alone never tells you which.',
            ref: PERSONS_SECTION_ID,
          },
          {
            q: 'Elles sont ___ en mars. (mourir)',
            format: 'typeIn',
            accept: ['mortes'],
            answer: 'mortes',
            why: `The past form of mourir is mort, then both letters. ${AUDIBLE.numberClaim}`,
            ref: AUDIBLE_SECTION_ID,
          },
          {
            q: 'How many of these four endings can you hear on aller?',
            format: 'mcq',
            opts: ['None', 'All four', 'Two'],
            correct: 0,
            why: 'None. allé, allée, allés and allées are one sound, and that is true of fourteen of the fifteen verbs in this lesson.',
            ref: FOURFORMS_SECTION_ID,
          },
        ],
      },
      {
        id: 'r5-unlisted',
        label: 'Verbs nobody listed',
        targets: ['err-mnemonic-only', 'err-wrong-first'],
        say: 'Six on verbs this lesson never listed, and two of them are not in the crutch.',
        questions: [
          {
            q: 'Devenir, about a woman. Elle est ___ professeur.',
            format: 'typeIn',
            accept: ['devenue'],
            answer: 'devenue',
            why: 'Cover the de and venir is underneath, which gives venu and takes être. Then the e, because it is about a woman.',
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: 'Repartir. Which first word?',
            format: 'mcq',
            opts: ['avoir', 'être'],
            correct: 1,
            why: `partir is underneath and partir takes être, so this does too. ${MNEMONIC} has no letter for it, which is what the pattern is for.`,
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: 'Repasser, "to go past again", about two women. Elles sont ___ devant la gare.',
            format: 'typeIn',
            accept: ['repassées'],
            answer: 'repassées',
            why: 'passer is underneath, which takes être when nothing is after it, and then both endings. Neither this verb nor passer is in the crutch.',
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: 'Which of these tells you about a verb the crutch does not list?',
            format: 'mcq',
            opts: ['Whether it is about moving or about starting or stopping', 'The letters of the crutch', 'How long the verb is'],
            correct: 0,
            why: MNEMONIC_GAP_CLAIM,
            ref: CRUTCH_SECTION_ID,
          },
          {
            q: 'Rentrer, about a woman. Elle est ___ vers minuit.',
            format: 'typeIn',
            accept: ['rentrée'],
            answer: 'rentrée',
            why: 'Going home is going somewhere, so être, and one woman takes the e.',
            ref: TALK_SECTION_ID,
          },
          {
            q: 'Redescendre, about a man. Il est ___.',
            format: 'typeIn',
            accept: ['redescendu'],
            answer: 'redescendu',
            why: 'Cover the re and descendre is underneath, which gives descendu and takes être. One man, so nothing on the end.',
            ref: UNSEEN_SECTION_ID,
          },
        ],
      },
      {
        id: 'r6-what-it-means',
        label: 'What it means',
        targets: ['err-reads-as-present', 'err-ending-after-avoir'],
        say: 'Six on what these sentences are actually saying.',
        questions: [
          {
            q: 'Je suis allé à Paris. What does it mean?',
            format: 'mcq',
            opts: ['I am gone to Paris', 'I am in Paris', 'I went to Paris'],
            correct: 2,
            why: 'A form of être plus a second word is a past tense, not a description. The first option is what the words look like one at a time and it is not what the sentence says.',
            ref: NOTPRESENT_SECTION_ID,
          },
          {
            q: 'Elle est fatiguée. Is this the same shape?',
            format: 'mcq',
            opts: ['It is the same shape and it describes her now', 'Yes, and it is a past tense too'],
            correct: 0,
            why: 'The shape is identical and the second word decides. fatiguée describes her and partie reports something she did.',
            ref: NOTPRESENT_SECTION_ID,
          },
          {
            q: 'Listen to the second word. Which one is it?',
            format: 'listenChoose',
            say: AUDIBLE.feminine,
            opts: [AUDIBLE.masculine, AUDIBLE.feminine],
            correct: 1,
            why: `${AUDIBLE.claim} This is the only question in the exam your ear can answer, and it works because mort ends on a consonant and an e after it can be heard.`,
            ref: AUDIBLE_SECTION_ID,
          },
          {
            q: 'Je suis sorti. What did I do?',
            format: 'mcq',
            opts: ['I took something out', 'I went out'],
            correct: 1,
            why: `Nothing after the verb, so it is the ordinary one. ${TRANSITIVE_CLAIM}`,
            ref: OBJECT_SECTION_ID,
          },
          {
            q: 'Fix this. You mean that the glass fell.',
            format: 'errorSpot',
            prompt: 'Le verre a tombé.',
            accept: [fr(A(693)), 'Le verre est tombe'],
            answer: fr(A(693)),
            why: 'Falling is going down, which is one of the four kinds, so être. And le verre is masculine and singular, so nothing goes on the end.',
            ref: NOTPRESENT_SECTION_ID,
          },
          {
            q: `${noStop(fr(A(692)))}. What does it say?`,
            format: 'mcq',
            opts: [
              'She is downstairs now',
              'She is on her way down at midday',
              'She came down at midday',
            ],
            correct: 2,
            why: 'A form of être plus a second word is a past tense. The other two options are what the shape looks like from English, and neither is what the sentence means.',
            ref: NOTPRESENT_SECTION_ID,
          },
        ],
      },
    ],
    terms: ['firstWord', 'theEnding', 'whoDidIt'],
  },

  {
    type: 'roundup',
    id: ROUNDUP_SECTION_ID,
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    layer: 'core',
    body: `${REFRAME} ${ALREADY_YOURS}`,
    // `points` IS A LIST OF STRINGS, not of {t,s} objects. `goals` takes the
    // pair shape and `roundup` does not, and validateLesson says so by name.
    points: [
      `${PATTERN_CLAIM} ${REST_CLAIM}`,
      AGREEMENT_RULE,
      AVOIR_CLAIM,
      EAR_CLAIM,
      `${AUDIBLE.claim} ${AUDIBLE.numberClaim}`,
      `${A215_REFRAME} And with it comes the first word, so devenir, revenir and repartir all arrive free.`,
      `${MNEMONIC_CLAIM} ${MNEMONIC_GAP_CLAIM}`,
      `${TRANSITIVE_CLAIM} ${REFLEXIVE_DEFERRAL}`,
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
    title: 'The sentence that meant something else',
    sections: [SCENE_SECTION_ID, GOALS_SECTION_ID, HALVES_SECTION_ID],
    milestone: 'You know that fifteen verbs take a different first word, and that after that first word the second one changes for who the sentence is about.',
    estScreens: 22,
    restPoints: [`${SCENE_SECTION_ID}/after-break`],
  },
  {
    id: 'act2',
    title: 'Which fifteen',
    sections: [...WHICH_VERBS_SECTION_IDS],
    milestone: `You can check a verb against what it means rather than against a list, and you know what ${MNEMONIC} is for and what it leaves out.`,
    estScreens: 20,
    restPoints: [`${PATTERN_SECTION_ID}/after`],
  },
  {
    id: 'act3',
    title: 'The ending nobody hears',
    sections: [...OWNS_SECTION_IDS],
    milestone: 'You can put the right ending on any of the fifteen, in any person, and you can do it for verbs this lesson never listed.',
    estScreens: 72,
    restPoints: [`${FOURFORMS_SECTION_ID}/after`, `${PERSONS_SECTION_ID}/after`, `${AUDIBLE_SECTION_ID}/after`],
  },
  {
    id: 'act4',
    title: 'The three ways it goes wrong',
    sections: [WHICHFIRST_SECTION_ID, OBJECT_SECTION_ID, NOTPRESENT_SECTION_ID, ERRORS_SECTION_ID],
    milestone: 'You have seen the wrong first word, the missing ending and the ending in the wrong place, each beside the version that works.',
    estScreens: 42,
    restPoints: [`${WHICHFIRST_SECTION_ID}/after`, `${NOTPRESENT_SECTION_ID}/after`],
  },
  {
    id: 'act5',
    title: 'On paper',
    sections: [TALK_SECTION_ID, DICTATION_SECTION_ID, SPEAK_SECTION_ID],
    milestone: 'You held the conversation the kitchen lost, and you wrote six endings you could not hear.',
    estScreens: 38,
    restPoints: [`${TALK_SECTION_ID}/after`, `${DICTATION_SECTION_ID}/halfway`],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [REVIEW_SECTION_ID, PROGRESS_SECTION_ID, QUIZ_SECTION_ID, ROUNDUP_SECTION_ID],
    milestone: 'You wrote endings for verbs that appear nowhere in this lesson, which is the half of it a list could never have taught you.',
    estScreens: 46,
    restPoints: [`${REVIEW_SECTION_ID}/after`, `${QUIZ_SECTION_ID}/r3-not-after-avoir`, `${QUIZ_SECTION_ID}/r5-unlisted`],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DECK TRANCHES
 *
 *  A tranche releases an item into the SRS, and nothing may be released before
 *  the acts have shown it. One tranche per act, in act order.
 * ═══════════════════════════════════════════════════════════════════════ */

const DECK_TRANCHE: string[][] = [
  // Act 1: the scene, and the two rows the opening deck's contrast turns on.
  [...[680, 681, 682, 683].map(A), A(661), A(662)],
  // Act 2: the fifteen naming forms, and the two auxiliaries.
  [
    ...ETRE_VERBS.map((v) => v.rowId),
    'fr.sons.verbes-essentiels.001', 'fr.sons.verbes-essentiels.002',
  ],
  // Act 3: the Owns. Every cell, every person, the contrast, the audible pair,
  // the three unlisted verbs and their naming forms.
  [
    ...[651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 663, 664,
      669, 670, 671, 672, 673, 674, 675, 690, 691, 692, 693, 694, 695, 696].map(A),
    'fr.sons.verbes-essentiels.083', 'fr.sons.verbes-essentiels.084',
    'fr.sons.verbes-essentiels.086', 'fr.sons.adjectifs-essentiels.161',
  ],
  // Act 4: the transitive rows and the naming phrase behind them.
  [...[665, 666, 667, 668].map(A), 'fr.a2.maison.022'],
  // Act 5: the conversation and the negatives.
  [...[676, 677, 678, 679, 684, 685, 686, 687, 688, 689].map(A)],
  // Act 6 releases nothing: it is the review deck, the progress card, the exam
  // and the roundup, and everything they name has already been released.
  // `validateLesson` requires ONE SLICE PER ACT, so the slice is present and
  // empty rather than absent.
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
    id: 'err-wrong-first',
    description: 'Uses avoir on a verb that takes être: « elle a allé ». THE ERROR THIS LESSON EXISTS TO PREVENT, and it comes from a2.05 having taught avoir and nothing else, so it is produced by a learner doing exactly what they were told.',
    detectOn: [WHICHFIRST_SECTION_ID, PATTERN_SECTION_ID, `${QUIZ_SECTION_ID}/r1-which-first`],
    drill: 'drill-which-first',
    retest: 'retest-which-first',
  },
  {
    id: 'err-no-ending',
    description: 'Picks être correctly and writes nothing on the end: « elle est allé ». It survives longer than any other error in the lesson, because nobody hears it and the learner never gets a signal that anything is wrong.',
    detectOn: [FOURFORMS_SECTION_ID, PERSONS_SECTION_ID, `${QUIZ_SECTION_ID}/r2-the-ending`],
    drill: 'drill-the-ending',
    retest: 'retest-the-ending',
  },
  {
    id: 'err-ending-after-avoir',
    description: 'Learns the ending and then puts it everywhere: « elle a mangée ». It is the rule being applied where it does not run, and it appears the moment the lesson has worked, which is what makes it worth a round of its own.',
    detectOn: [CONTRAST_SECTION_ID, ERRORS_SECTION_ID, `${QUIZ_SECTION_ID}/r3-not-after-avoir`],
    drill: 'drill-not-after-avoir',
    retest: 'retest-not-after-avoir',
  },
  {
    id: 'err-only-feminine',
    description: 'Remembers the e and forgets the s: « elles sont allée ». The e is the ending people are told about and the s is the one that gets lost, and both are needed in the cell a learner writes most often about a group.',
    detectOn: [PERSONS_SECTION_ID, FOURFORMS_SECTION_ID, `${QUIZ_SECTION_ID}/r4-the-plural`],
    drill: 'drill-both-endings',
    retest: 'retest-both-endings',
  },
  {
    id: 'err-mnemonic-only',
    description: `Has ${MNEMONIC} and nothing else, so a verb outside it produces a guess. It is the predictable cost of teaching a list of initials as though it were a rule, and it is why the pattern is taught beside it.`,
    detectOn: [CRUTCH_SECTION_ID, UNSEEN_SECTION_ID, `${QUIZ_SECTION_ID}/r5-unlisted`],
    drill: 'drill-unlisted',
    retest: 'retest-unlisted',
  },
  {
    id: 'err-reads-as-present',
    description: 'Reads « je suis allé » as a description of how somebody is rather than as a report of what they did, because the shape is identical to « je suis fatigué ». English says "I am gone" and means something else by it, which makes the misreading feel right.',
    detectOn: [NOTPRESENT_SECTION_ID, RECAP_SECTION_ID, `${QUIZ_SECTION_ID}/r6-what-it-means`],
    drill: 'drill-happened',
    retest: 'retest-happened',
  },
];

const DRILLS = [
  {
    id: 'drill-which-first',
    title: 'Avoir or être',
    format: 'sort' as const,
    buckets: ['être', 'avoir'],
    items: [A(662), A(661), A(674), A(690), A(668), A(693)],
    coach: `${PATTERN_CLAIM} Ask what the sentence is about before you ask what the verb is. ${REST_CLAIM}`,
  },
  {
    id: 'retest-which-first',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'tomber. Which first word?',
    opts: ['être, because falling is going down', 'avoir', 'either one'],
    correct: 0,
    why: 'Falling is one of the four kinds, and it is a letter of the crutch as well, so both ways of checking agree.',
  },
  {
    id: 'drill-the-ending',
    title: 'The last two letters',
    format: 'flashcard' as const,
    pairs: [
      ['one man', 'allé'],
      ['one woman', 'allée'],
      ['more than one', 'allés'],
      ['more than one woman', 'allées'],
    ] as [string, string][],
    coach: `${REFRAME} ${AGREEMENT_RULE} Nothing about the sound will tell you.`,
  },
  {
    id: 'retest-the-ending',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Spoken to a woman. Tu es ___ tôt. (partir)',
    opts: ['parti', 'partie', 'partis'],
    correct: 1,
    why: 'One woman, so the e alone. Tu is the same for anybody and the sound is the same either way.',
  },
  {
    id: 'drill-not-after-avoir',
    title: 'Where it does not go',
    format: 'sort' as const,
    buckets: ['an ending goes on', 'nothing goes on'],
    items: [A(662), A(661), A(664), A(663), A(692), A(668)],
    coach: `${AVOIR_CLAIM} The moment the first word is a form of avoir, the second word is finished.`,
  },
  {
    id: 'retest-not-after-avoir',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Elles ont ___ au restaurant. (manger)',
    opts: ['mangées', 'mangé', 'mangés'],
    correct: 1,
    why: 'avoir, so nothing goes on the end however many women there are.',
  },
  {
    id: 'drill-both-endings',
    title: 'The e and the s',
    format: 'flashcard' as const,
    pairs: [
      ['two men', 'partis'],
      ['two women', 'parties'],
      ['a man and a woman', 'partis'],
      ['one woman', 'partie'],
    ] as [string, string][],
    coach: 'The e is the gender and the s is the number. A group that is not all women takes the s alone, however many women are in it.',
  },
  {
    id: 'retest-both-endings',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Two women. Elles sont ___ ensemble. (arriver)',
    opts: ['arrivés', 'arrivée', 'arrivées'],
    correct: 2,
    why: 'Both letters, in that order. The s is the one that gets forgotten, because the e is the one people are told about.',
  },
  {
    id: 'drill-unlisted',
    title: 'Cover the front',
    format: 'flashcard' as const,
    pairs: [
      ['devenir', 'est devenu'],
      ['revenir', 'est revenue'],
      ['repartir', 'sont reparties'],
      ['redescendre', 'est redescendu'],
    ] as [string, string][],
    coach: `${A215_REFRAME} Find the verb underneath and you have both halves at once. ${MNEMONIC_GAP_CLAIM}`,
  },
  {
    id: 'retest-unlisted',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Repasser, "to go past again". Which first word?',
    opts: ['avoir', 'être', 'either one'],
    correct: 1,
    why: 'passer is underneath and it takes être when nothing follows it. Neither verb is in the crutch and covering the front settles both.',
  },
  {
    id: 'drill-happened',
    title: 'It happened',
    format: 'sort' as const,
    buckets: ['it happened', 'it describes'],
    items: [A(651), A(674), A(693), A(692), A(670), A(673)],
    coach: 'A form of être plus a second word can be two things. A describing word says how somebody is now; a past form reports something that is over.',
  },
  {
    id: 'retest-happened',
    title: 'One more time',
    format: 'mcq' as const,
    q: 'Elle est partie. What does it say?',
    opts: ['She is away', 'She left', 'She is leaving'],
    correct: 1,
    why: 'A form of être plus a second word is a past tense. The other two are what the shape looks like from English.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFERENCE SHEET
 *
 *  THREE COLUMNS. a2.04 measured a FOUR-column table inside a sheet clipping on
 *  a Pixel 6, and a2.19 measured the sheet cell at twelve characters. The widest
 *  cell here is `descendues`, which is ten.
 *
 *  THE SIX-PERSON TABLE THE BRIEF ASKS FOR LIVES HERE. A `table` at layer `core`
 *  is a `table-in-core` density failure (corrections §8), so the in-flow version
 *  is a groupDrill and the table is `deep`.
 *
 *  A `sheetId` resolves ONLY inside the lesson that declares it (schema.ts:3490,
 *  lesson-contract.test.ts:91), so this cannot link a2.05's or a2.20's.
 *
 *  AND `cheatSheet` DRAWS ITS TITLE AND NOTHING ELSE inside a reference sheet.
 *  ReferenceSheet.tsx draws `teach`, `letterGrid` and `table` and nothing else,
 *  so every section below is one of those three.
 * ═══════════════════════════════════════════════════════════════════════ */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    // Thirty-two characters. a2.19 §3 measured the sheet's own title cut at 37
    // in the HEADER BAR while rendering in full on the card that opens it.
    title: 'The fifteen, and the endings',
    layer: 'deep',
    contains: ['The fifteen', 'Six persons', 'The endings', 'Avoir', 'The crutch', 'Next'],
    sections: [
      {
        type: 'table',
        id: 'sheet-verbs',
        title: 'The fifteen, by what they mean',
        layer: 'deep',
        cols: ['Verb', 'Second word', 'Means'],
        rows: ETRE_VERBS.map((v) => [v.verb, v.past, v.en]),
      },
      {
        type: 'table',
        id: 'sheet-persons',
        title: 'All six persons, with partir',
        layer: 'deep',
        // THE ENDING RATHER THAN THE WHOLE SECOND WORD. a2.19 measured a sheet
        // table cell at twelve characters and « partis · parties » is sixteen,
        // so the column that would clip is the one this table exists for.
        cols: ['Person', 'First word', 'Add'],
        rows: [
          ['je', 'suis', 'nothing or e'],
          ['tu', 'es', 'nothing or e'],
          ['il · elle', 'est', 'nothing or e'],
          ['nous', 'sommes', 's or es'],
          ['vous', 'êtes', 's or es'],
          ['ils · elles', 'sont', 's or es'],
        ],
      },
      {
        type: 'table',
        id: 'sheet-endings',
        title: 'The four endings',
        layer: 'deep',
        cols: ['Who', 'Add', 'Example'],
        rows: [
          ['one man', 'nothing', 'allé'],
          ['one woman', 'e', 'allée'],
          ['several', 's', 'allés'],
          ['all women', 'es', 'allées'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-rule',
        title: 'The rule',
        layer: 'deep',
        body: `${REFRAME} ${AGREEMENT_RULE} ${AGREEMENT_CREDIT}`,
      },
      {
        type: 'teach',
        id: 'sheet-avoir',
        title: 'And never after avoir',
        layer: 'deep',
        body: `${AVOIR_CLAIM} ${OBJECT_DEFERRAL}`,
      },
      {
        type: 'teach',
        id: 'sheet-ear',
        title: 'What nothing here can test',
        layer: 'deep',
        body: `${EAR_CLAIM} ${AUDIBLE.claim} ${AUDIBLE.numberClaim}`,
      },
      {
        type: 'teach',
        id: 'sheet-crutch',
        title: 'The crutch, and the pattern',
        layer: 'deep',
        body: `${MNEMONIC}. ${MNEMONIC_CLAIM} ${MNEMONIC_GAP_CLAIM} ${PATTERN_CLAIM}`,
      },
      {
        type: 'teach',
        id: 'sheet-object',
        title: 'The ones that also take avoir',
        layer: 'deep',
        // The measurement, on the sheet, so the receptive-only decision is
        // visible to a learner who wants to know why they were not drilled on it.
        body: `${TRANSITIVE.filter((t) => t.avoir > 0).map((t) => `${t.verb} appears with avoir ${t.avoir} times in this app`).join(', ')}. The other three never do. ${TRANSITIVE_CLAIM}`,
      },
      {
        type: 'teach',
        id: 'sheet-next',
        title: 'What is still coming',
        layer: 'deep',
        body: `${REFLEXIVE_DEFERRAL} ${OBJECT_DEFERRAL}`,
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ═══════════════════════════════════════════════════════════════════════ */

export const ETRE_LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  // The lesson's index WITHIN its unit, not its place on the trail.
  seq: 1,
  title: UNIT.sub,
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`) and a2.21 sits at
  // seq 18. The stored value is a fallback and has to agree with what the
  // renderer computes; the batch checks it against the live unit.
  tag: `A2 · LEÇON ${String(UNIT.seq).padStart(2, '0')}`,
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped grammar jargon here in v1 because every
  // guard in the band walked `sections`, `sheets` and `terms` and not this.
  //
  // AND IT NAMES NO UNIT ID. a2.05 measured that it was the only one of 58
  // lessons whose intro did, and that the cover is the first screen a learner
  // sees, before any card has credited anything.
  intro:
    'Almost every verb in French builds its past with a form of avoir. Fifteen of them use être instead, and once you have done that, something happens that has never happened to a verb before: the second word changes for who the sentence is about, exactly the way a describing word does. A man who left and a woman who left are spelled differently and sound identical. Nobody can hear this and everybody who reads it can see it, which makes writing the only place it can be checked and the dictée the longest part of the lesson.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v2: THREE WIDTHS THE BATCH DOES NOT MEASURE AND THE MERGE DOES.
  //
  //   1  `s09-borrowed` was titled « You Already Know These Endings » at 30 and
  //      `s10-persons` « All Six, With The Ending Showing » at 32, against the
  //      27-character mission-row title a2.13 measured and a2.14 §13 corrected
  //      to a WIDTH rather than a word count.
  //   2  The six-person sheet table carried « partis · parties » at 16 against
  //      a2.19's measured sheet cell of 12, in the column the table exists for.
  //      It now shows the ENDING rather than the whole second word, which is
  //      both narrower and closer to what the table is teaching.
  //
  // v3: a2.15's REFRAME WAS INVENTED RATHER THAN READ OFF THE SHIPPED LESSON.
  //     This build quoted « One verb, and everything in front of it comes
  //     along. » and a2.15 shipped « Cover the front of the verb. Build what is
  //     left. » Neither the batch nor the merge could see it, because both
  //     compared the constant to itself; the lesson's own test caught it against
  //     seed.json on its first run. Both layers now hold the literal, as they
  //     already did for a2.01, a2.03, a2.05 and a2.19.
  //
  // THE COUNTER MOVES RATHER THAN THE BODY BEING CORRECTED UNDER AN OLD NUMBER.
  // Postgres already held v1 and then v2, and ledger §10 exists because two
  // different bodies under one number is the drift this project has lost work to
  // twice. a2.09 set the precedent and a2.20 followed it at v2 and again at v3.
  version: 3,

  grammarAssumed: [
    'The passé composé with avoir, in six persons, introduced in a2.05',
    'That the participle is invariable after avoir, introduced in a2.05',
    'That ne … pas encloses the auxiliary and not the participle, introduced in a2.19 and extended in a2.05',
    'The irregular past participles, including venu, né and mort, introduced in a2.20',
    'Adjective agreement as four inflectional classes, introduced in a2.03',
    'That -e, -es and -ent are silent, and that silent agreement is a systematic property of French orthography, introduced in a2.01',
    'The present of aller and venir, introduced in a2.02',
    'The present of partir and sortir, introduced in a2.10',
    'The present of descendre, introduced in a2.11',
    'The compound-verb principle, that a prefixed verb inflects like its base, introduced in a2.15',
  ],
  grammarIntroduced: [
    'être as the auxiliary of the passé composé for a closed class of fifteen intransitive verbs of motion and change of state',
    'Participle agreement with the subject under être, in gender and number, using the same four exponents as adjectival agreement in a2.03',
    'That the agreement is orthographic only for fourteen of the fifteen, and phonologically realised for mourir alone, where the feminine exponent licenses the final /t/',
    'That number is not phonologically realised for any of the fifteen, which is the converse of the adjectival system a2.03 introduced',
    'The semantic generalisation behind the class: movement, and change of state, with rester as the sole member that is neither',
    'The DR MRS VANDERTRAMP mnemonic, taught explicitly as a memory aid rather than as a generalisation, with passer named as a member it does not cover',
    'That the compound-verb principle of a2.15 selects the auxiliary as well as the participle, so devenir, revenir and repartir are derivable without instruction',
    'The transitive uses of sortir, monter, descendre, passer, rentrer and retourner, which take avoir and do not agree, for RECEPTION ONLY and produced nowhere',
    'That a form of être plus a participle is a compound past rather than a copula plus a predicative adjective, an ambiguity English reproduces in "I am gone"',
    'Reflexive verbs also take être and their agreement is named and reserved for a2.22 and a2.23',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Quinze verbes, un autre premier mot, et une terminaison que personne n’entend.',
    minutes: 32,
    difficulty: 3,
    glyph: '🚪',
    screens: 240,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: ETRE_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-21-passe-compose-etre.test.ts, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered. Invariants §10: anything the learner must hear as a
    // CONTRAST is ONE TAKE with one voice.
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
        id: 'rec-a2-21-scene',
        desc:
          'THE KETTLE ON A MONDAY, AND THE SAME COLLEAGUE AS a2.05 AND a2.20. She has asked a friendly question and is expecting a short answer. '
          + 'THE LEARNER\'S OWN LINE IS THE TAKE THAT HAS TO BE RIGHT. « Hier soir, j\'ai... je suis... j\'ai... » is somebody deciding out loud, twice, and settling on the wrong one. '
          + 'THE TWO FALSE STARTS MUST NOT BE RUSHED TOGETHER. There is a real pause after each, and the second « j\'ai » should sound like a decision rather than like a stumble: he has chosen, and he has chosen wrongly. '
          + 'HER LINE « Tu as sorti quoi ? » IS THE EXPENSIVE ONE AND IT IS NOT A CORRECTION. She heard a complete, well-formed sentence about carrying something out of the house and she is asking what the something was. '
          + 'Read it as a genuine question with real interest in the answer. Any note of patience, puzzlement at a foreigner, or gentle correction turns the scene into somebody being helped, and the whole point is that nothing went wrong that she could hear.',
        clipIds: [fr(A(680)), SCENE_STALL, fr(A(681)), SCENE_ERROR, fr(A(682)), fr(A(683))],
      },
      {
        id: 'rec-a2-21-which',
        desc:
          'THE AUDIO STEP OF THE FIRST-WORD TRAP, AND IT IS A WRONG-THEN-RIGHT TAKE. Four lines, one take, in this order: '
          + '« Elle a allé au marché. » then « Elle est allée au marché. », then « Elle a mangé au restaurant. » then « Elle a passé un examen. » '
          + 'READ THE FIRST LINE PLAINLY AND AT ORDINARY PACE rather than comically or hesitantly. It is a perfectly pronounceable French shape and it is exactly what a careful learner produces; a reading that signals the error teaches that the error is audible. '
          + 'LINES TWO AND THREE MUST NOT HAVE THEIR SECOND WORDS COLOURED DIFFERENTLY. « allée » and « mangé » are both ordinary middles of ordinary sentences and the learner is being asked to attend to the FIRST word, not the second. '
          + 'DO NOT SEPARATE THE FIRST TWO LINES WITH A LONG PAUSE. The pair is the teaching and it works when the two lines sit against each other.',
        clipIds: [WRONG[0]!.wrong, WRONG[0]!.right, fr(A(661)), fr(A(668))],
      },
      {
        id: 'rec-a2-21-cells',
        desc:
          'THE FOUR SPELLINGS, ONE TAKE, ONE VOICE, AND THIS IS THE MOST IMPORTANT TAKE IN THE LESSON. Four lines in this order: '
          + '« Il est allé. » « Elle est allée. » « Ils sont allés. » « Elles sont allées. » '
          + 'THE SECOND WORD MUST BE IDENTICAL IN ALL FOUR. Not similar: identical. The whole lesson rests on the learner hearing that there is nothing to hear, and any difference at all in length, weight or vowel colour teaches that the ending is audible when it is not. '
          + 'THE THIRD AND FOURTH LINES ARE COMPLETELY IDENTICAL OUT LOUD except for il against elle, and they must be read that way: « sont » is the same word twice and « allés » and « allées » are the same three sounds. '
          + 'RECORD THEM AS ONE CONTINUOUS TAKE. Four separate recordings are four performances and the learner will hear the performances.',
        clipIds: CELL_IDS.map((id) => fr(id)),
      },
      {
        id: 'rec-a2-21-audible',
        desc:
          'THE ONE PAIR IN THIS LESSON THAT IS NOT IDENTICAL, ONE TAKE, ONE VOICE, FOUR LINES: '
          + '« Il est mort en mars. » « Elle est morte en mars. » « Ils sont morts en mars. » « Elles sont mortes en mars. » '
          + 'THIS TAKE IS THE OPPOSITE INSTRUCTION TO rec-a2-21-cells AND THE TWO MUST NOT BE RECORDED IN THE SAME FRAME OF MIND. '
          + 'THE T AT THE END OF « morte » AND « mortes » MUST BE CLEARLY AUDIBLE. It is the only ending in the lesson a learner can hear and the whole mission is built on hearing it. '
          + 'AND THE PLURAL MUST STILL BE INAUDIBLE. « mort » and « morts » are the same, « morte » and « mortes » are the same. Lines one and three are one sound and so are lines two and four; the learner is being taught that gender arrives here and number never does. '
          + 'THE SUBJECT IS A DEATH IN A FAMILY. Read it plainly and without weight. It is a fact in a sentence, not an occasion.',
        clipIds: [A(669), A(670), A(671), A(672)].map((id) => fr(id)),
      },
      {
        id: 'rec-a2-21-past',
        desc:
          'THE SECOND TRAP, ONE TAKE, FOUR LINES: « Il est allé. » « Elle est née ici. » « Elle est restée à la maison. » « Le verre est tombé. » '
          + 'NOT A WRONG-THEN-RIGHT TAKE. All four are correct French and none is an error being demonstrated. '
          + 'EVERY ONE OF THESE IS A REPORT OF SOMETHING THAT HAPPENED and the reading has to carry that. A learner meeting « il est allé » on paper hears an English shape, "he is gone", and reads it as a description. '
          + 'The take should sound like somebody telling you what happened, at the pace of ordinary speech, with the second word given no more weight than the rest of the sentence. '
          + 'DO NOT STRESS « est ». It is the word carrying the tense and the learner has to get used to catching it unstressed, because that is the only way it will ever arrive.',
        clipIds: [A(651), A(673), A(674), A(693)].map((id) => fr(id)),
      },
      {
        id: 'rec-a2-21-dictee',
        desc:
          'THE DICTÉE LINES, ONE TAKE EACH, CLEAN AND UNHURRIED, WITH NO CONTRAST INTENT AT ALL. This is the opposite instruction to rec-a2-21-cells: there the learner is comparing and here they are spelling, and a paired reading would hand them the answer. Read each line as though it were the only line. '
          + 'FOUR OF THE SIX LINES ARE THE SAME VERB AND THEY WILL SOUND ALMOST THE SAME. That is correct and must not be corrected for. The learner works out which cell is meant from the words in front of the verb, and the take must not help by leaning on the ending. '
          + 'THE FIRST TWO WORDS ARE WHERE THE INFORMATION IS. « Il est », « Elle est », « Ils sont », « Elles sont »: these must be clearly and evenly said, because they are the only thing distinguishing four of the six lines. '
          + 'SAY IT THE WAY SOMEBODY WOULD SAY IT, at the pace of somebody dictating an address to a friend.',
        clipIds: DICTEE_IDS.map((id) => fr(id)),
      },
      {
        id: 'rec-a2-21-talk',
        desc:
          'THE CONVERSATION, HER LINES ONLY, ONE TAKE, AS ONE CONTINUOUS EXCHANGE RATHER THAN AS FIVE SEPARATE PROMPTS. She is the same colleague, later in the week, and this time the exchange works. '
          + 'EVERY QUESTION IS ASKED WITHOUT INVERSION and should sound completely ordinary: « Tu es rentrée à quelle heure ? » is a statement with a question mark on it, which is what people say. '
          + 'NEITHER « es » NOR « est » NOR « êtes » MAY BE STRESSED anywhere in the take. They are the words carrying the tense and the learner has to get used to catching them unstressed. '
          + 'AND HER OWN ENDINGS ARE AGREED THROUGHOUT. « Tu es rentrée » and « elle est venue » both carry one and neither is audible; nothing in the reading should mark them.',
        clipIds: [A(680), A(684), A(686), A(688), A(682)].map((id) => fr(id)),
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

export const ETRE_ITEM_IDS = ITEM_IDS;
export const ETRE_DICTEE_IDS = DICTEE_IDS;
export const ETRE_SPEAK_IDS = SPEAK_IDS;
export const ETRE_SECTIONS = SECTIONS;
export const ETRE_ACTS = ACTS;
export const ETRE_TRANCHES = DECK_TRANCHE;
export const ETRE_SHEETS = SHEETS;
export const ETRE_DRILLS = DRILLS;
export const ETRE_ERROR_TRIGGERS = ERROR_TRIGGERS;
export const ETRE_SCENE_BEATS = SCENE_BEATS;
