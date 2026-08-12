// a2.11.l1 "Les verbes en -RE" — the mission journey.
//
// ── THIS IS A FIRST BUILD ──────────────────────────────────────────────────
//
// Probed rather than assumed: the unit dump says `"lessons": []`, so unlike
// a2.01 there is no pre-v2 stub to rebuild and the version counter starts at 1.
//
// ── The Owns: the cell where you write nothing ─────────────────────────────
//
//   il parle     -e        a2.01
//   il finit     -it       a2.10
//   il vend      nothing   here
//
// Three groups, three third persons, one frame, and only one of them writes
// nothing at all. That is the whole lesson, it is on one screen (s07-cells), and
// the brief named it as the layout the test must assert.
//
// ── WHY THIS IS NOT a2.10 AGAIN, WHICH WAS THE REAL RISK ───────────────────
//
// This is the third paradigm in four lessons and the phonetics were about to make
// it the second lesson in a row about the ear. `il vend` is /il vɑ̃/ and
// `ils vendent` is /il vɑ̃d/, because the stem-final d is silent at the end of a
// word and said in the middle of one. So a2.10's reframe, "The plural puts a
// sound on the end", is TRUE OF -RE VERBS TOO, and a lesson that reached for the
// audible half would have been a2.10 with different letters.
//
// It is refused, and the refusal is what shapes every act:
//
//   the reframe      names the CELL, not the sound. The four candidates and the
//                    reasons are in verbes-re-terms.ts.
//   act 2            has NO table and NO tapTable. a2.10 spent its paradigm act
//                    on a six-row audible table; this one spends three missions
//                    saying the machine has not changed and moving on. The full
//                    paradigm is in the sheet.
//   THE ONE tapTable is the CROSS-GROUP comparison in act 3, not the paradigm in
//                    act 2. The only screen in this lesson with per-row audio is
//                    the one that compares three lessons.
//   act 3            holds TWO groupDrills and ONE listening. a2.10 held TWO
//                    listenings and one groupDrill. The weight moved from the ear
//                    to the hand, because the distinction is on the page.
//   the dictée       is eleven targets against a2.10's eight, and it is the
//                    heaviest production section in the lesson.
//   the quiz         is sixteen typed questions of thirty, and four listenChoose
//                    which may only ask about the d.
//
// The audible half is not thrown away. It is the glossary term `theD` and one
// mission (s12-dsound), which is where a true fact that belongs to the previous
// lesson should sit.
//
// ── THE THING NO EAR QUESTION MAY ASK ──────────────────────────────────────
//
// je vends, tu vends and il vend are one sound. A `listenChoose` offering two of
// them has no correct answer and marking one right would certify a bug. The brief
// asked for this to be said in the report; it is said there AND enforced by
// HOMOPHONE_FORMS in the batch, the merge and the test, because a sentence in a
// report cannot fail.
//
// ── What is left to the neighbours ─────────────────────────────────────────
//
// - prendre, mettre AND battre ARE NAMED AND CONJUGATED NOWHERE, right or wrong.
//   They and their five compounds appear on exactly ONE card (s16-notmine), and
//   no form of any of them reaches a deck, a drill, a dictée, a scenario or a
//   quiz answer. Not even the wrong form: a commonErrors card can show `il vende`
//   because the learner holds `il vend` to replace it with, and nobody here holds
//   `ils prennent`, because a2.15 is five units away.
// - `répondre à` takes an indirect object, which is a2.24 at seq 22. `répondre`
//   is used freely and no authored row puts an `à` after it.
// - `descendre`'s auxiliary split is the passé composé and belongs to a2.21 at
//   seq 18. Present tense only. NOTE that a2.21's body does not mention it today
//   and neither does any other unit; that is in the build report.
// - The six endings are a2.01's and a2.10's. ONE recap mission (s04-machine).
//
// ── Layout notes that are bugs, not preferences ───────────────────────────
//
// - `tapTable` is NOT in ownsLayout() (LessonPager.tsx:162), so s07-cells renders
//   inside a SCROLLING page. Three rows is comfortably above the fold, which is
//   part of why the cross-group table is the one that gets to be a tapTable.
// - `size` is not decoration. density.logic.ts reads `xl` as a 12-word cap on
//   EVERY string in the section except `say`, `hint`, `note`, `why` and `tip`.
//   s09-triple is the only xl section here and every card in it is a bare
//   two-word form. This is also why the nous/on statement lives in s08-nothing:
//   it is thirteen words and could not be authored inside an xl deck.
// - `commonErrors` needs `swipe: true` or it renders a blank screen. See
//   s15-errors.
// - `reading` needs `questionsInModal` WITH questions or its glossary reaches no
//   renderer, and PassagePage splits on sentence boundaries so an authored
//   newline is swallowed: s20-reading is one line.
// - Three term chips per section, maximum.
// - A `groupDrill` at `lg` may carry items and a check in one group; only an `xl`
//   one may not. s06-seven, s10-write and s11-newverb are all lg.

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
  BACKREFS,
  NOUS_ON,
  REFRAME,
  THREE_GROUPS,
  VERBES_RE_TERMS,
} from './verbes-re-terms.ts';
import { REFRAME as A201_REFRAME } from './verbes-er-terms.ts';
import { REFRAME as A210_REFRAME } from './verbes-ir-terms.ts';
import {
  AUTHORED_IDS,
  BARE_CELL,
  D_PAIRS,
  D_SILENT_ENDINGS,
  D_SOUNDING_ENDINGS,
  DICTATION_IDS,
  ENDINGS,
  NOT_THIS_FAMILY,
  NOT_THIS_FAMILY_COMPOUNDS,
  NOT_THIS_FAMILY_UNIT,
  PARADIGM_IDS,
  SHEET_DECISION,
  SINGULAR_TRIPLES,
  THE_SEVEN,
  THREE_CELLS,
  familyIds,
  fr,
  sub,
} from './verbes-re-corpus.ts';
import { IMPORTED_IDS, verbEn, verbId } from './verbes-re-imported.ts';
import { REPAIRED_RESPELL, bareThirdPerson, verbCard, verbRespellBare, verbStem } from './verbes-re-display.ts';

export { BACKREFS, NOUS_ON, REFRAME, THREE_GROUPS, A201_REFRAME, A210_REFRAME };

/* ─── The items this lesson touches ────────────────────────────────────────
 *
 * 24 authored plus 7 imported by id and untouched except for six respelling
 * repairs. Every id here resolves; the batch re-checks the imported half against
 * POSTGRES rather than the seed, because the two drift and an id that exists only
 * in the seed renders as an empty card.
 *
 * `prendre` and `mettre` are NOT here. They are named on s16-notmine as display
 * strings and released to nothing.                                             */

const ITEM_IDS = [...new Set([...AUTHORED_IDS, ...IMPORTED_IDS])];

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. Every authored row has it; the seven
 *  infinitives are deliberately NOT here, because a bare infinitive is not a
 *  thing anybody says on its own.
 *
 *  The `hidden` family is not here either, and that is a placement decision
 *  rather than an omission: those three sentences are identical out loud, so
 *  speaking them proves nothing. They are written in s10-write and spelled in
 *  s18-dictation, which are the only surfaces that can test them. */
const SPEAK_IDS = [
  ...PARADIGM_IDS,
  ...familyIds('cross'),
  ...familyIds('apply'),
];

/** The verb whose paradigm the lesson runs on, named once so the deck, the sheet
 *  and the test read one string. */
const PARADIGM_VERB = 'vendre';

/** THE ROW ORDER OF THE THREE-CELL TABLE, by item id.
 *
 *  Trail order: the group the learner met first, then the second, then this one.
 *  The empty cell is LAST because arriving at it is the mission, and the three
 *  are on ONE SCREEN because a comparison split across two screens compares two
 *  memories instead of three cells.
 *
 *  Index-aligned with THREE_CELLS in the corpus, and the batch asserts that too. */
const CELL_ROW_IDS = THREE_CELLS.map((c) => c.id);

/** The bare pronoun-and-verb, taken off the corpus sentence rather than retyped.
 *  The frames are `... ici.` and `... vite.` and a table cell wants the verb
 *  alone, so the frame word comes off here in ONE place. A hand-typed cell would
 *  be free to drift from the row the same screen plays. */
const form = (id: string): string => fr(id).replace(/\s+(ici|vite)\.$/, '').toLowerCase();

/** What a cell prints in the "what you write" column. The empty ending is the
 *  whole lesson and it cannot be printed as an empty string, so it is printed as
 *  the word. Derived here, once, so the table, the sheet and the drills agree. */
const written = (ending: string): string => (ending === '' ? 'nothing' : ending);

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A2 register of stakes is loss of fluency under load, and the brief asked
 * for a spoken scene in which somebody waits for an answer that never lands.
 *
 * The failure is specific to this lesson and could not be staged by either of its
 * neighbours: the correct form LOOKS UNFINISHED, so the learner adds the letter
 * that would finish it, and on a -RE verb that letter is a sound as well. `vend`
 * is /vɑ̃/ and `vende` is /vɑ̃d/, which is what `ils vendent` sounds like, so the
 * over-completed singular arrives at the other person's ear as a plural. Nobody
 * is corrected and nothing is mispronounced. She simply goes to look for the
 * second stall she was told about.
 *
 * Beats are extracted to a named const, each with its own `size` and `audio`. The
 * section sets NO size: ownsLayout() ignores it and density.logic.ts would read
 * xl as a 12-word cap on prose.                                                */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'The covered market in Nantes, Saturday, twenty past eleven. Malik has the stall next to yours and has gone for coffee. A woman stops at his empty table with a list in her hand.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'La cliente',
    fr: 'Bonjour. Je cherche les fromages de la ferme.',
    en: 'Hello. I am looking for the farm cheeses.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-11-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Bonjour.',
    en: 'Hello.',
    stage: 'She looks at the empty table, then back at you, and waits.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'La cliente',
    fr: "C'est bien ici ?",
    en: 'Is this the right place?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-11-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'Malik has them and he is back in five minutes. What goes back?',
    options: [
      {
        fr: 'Il vend les fromages ici.',
        en: 'the form that looks unfinished',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Il vende les fromages ici.',
        en: 'the letter that would finish it',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Nothing after vend, and nothing needed. Watch what the other one costs, because it is not only a letter.',
      breaks: 'The letter you added is a sound as well. She heard vahⁿd, which is what several sellers sound like.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La cliente',
    fr: "D'accord, merci. Je vais voir l'autre rangée.",
    en: 'Right, thank you. I will try the other row.',
    stage: 'She crosses the list off with her thumb and goes towards the far aisle.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-11-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    // BUDGETED, not chosen. `scene` is absent from ownsLayout(), so the card
    // cannot size itself, and a2.01 took three device passes on a Pixel 6 to
    // establish what fits: a heading of about 13 characters (it wraps at twelve
    // and every wrapped line costs about 85px), a body of 24 to 30 words, a coach
    // line under 9, and reading-row glosses under about 24 characters each.
    // Ledger §7. Those figures are asserted by a2-11-verbes-re.test.ts rather
    // than trusted to this comment.
    heading: 'The extra D',
    body: 'You had the verb and you had the stall. What would not come was the idea that vend was already finished, so you added a letter.',
    wrong: {
      fr: 'Il vende les fromages ici.',
      ipa: '/il vɑ̃d le fʁɔ.maʒ i.si/',
      en: 'sounds like several',
    },
    right: {
      fr: 'Il vend les fromages ici.',
      ipa: '/il vɑ̃ le fʁɔ.maʒ i.si/',
      respell: '[eel vahⁿ lay froh-MAHZH ee-SEE]',
      en: 'one man, one table',
    },
    coach: 'One letter over, and one customer gone.',
    // Audio-first: the ear answers before the eye can. `autoplay` is NOT set. It
    // is declared in schema.ts and implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-11-dpairs' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Nobody misheard you. She went to look for a row of sellers, because that is what you told her was here.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: where this one sits ──────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Stall She Walked Away From',
    frSub: "L'étal qu'elle n'a pas trouvé",
    render: 'screens',
    layer: 'core',
    terms: ['nothing', 'theD'],
    say: {
      text: 'Nothing goes wrong out loud here. Watch what one extra letter does to the number of people.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A covered market, the cheese row',
      city: 'Nantes',
      time: 'Saturday, twenty past eleven',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    // The reframe is referenced, never retyped, so this appearance cannot drift
    // out of agreement with the others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} This lesson is about believing that, on a page, with nothing to hear.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end you will build the form for a verb this lesson never shows you.`,
    goals: [
      { t: 'Build any regular -re verb', s: 'The same two letters off the naming form, then the person on what is left.' },
      { t: 'Write the il form and stop', s: 'It is the stem and then the full stop, and nothing has been left out.' },
      { t: 'Tell the three groups apart', s: 'il parle, il finit, il vend. One frame, three endings, and one of them is nothing.' },
      { t: 'Know where the family stops', s: 'prendre, mettre and battre end in -re and are built another way.' },
    ],
  },

  {
    // THE OPENING MOVE, and it is a placement rather than an introduction.
    //
    // Both predecessors are quoted VERBATIM, imported from their own terms files
    // so that a rewording there moves this card with it. The learner is being
    // told, before anything is taught, that this is the third of three and the
    // last one, which is the single most useful thing to know at seq 4.
    type: 'cardDeck',
    id: 's03-third',
    title: 'The Third And Last One',
    frSub: 'Le troisième et dernier',
    hint: 'Swipe through the four cards. The third one is the whole lesson.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['threeGroups', 'nothing'],
    say: 'Two of these you already have. This is the one that finishes the set, and then there are no more.',
    cards: [
      {
        label: 'What you have',
        head: 'Two patterns already',
        body: `${BACKREFS[0]} gave you the -er verbs and ${BACKREFS[1]} gave you the -ir verbs. Between them that is most of the verbs in the language, and the method was the same both times.`,
      },
      {
        label: 'What is the same',
        head: 'The machine has not changed',
        fr: 'parler → parl- · finir → fin- · vendre → vend-',
        sub: 'two letters off, every time',
        body: 'Nothing new is being asked of you here. The naming form loses its last two letters and what is left takes the person, exactly as before.',
      },
      {
        label: 'What is new',
        head: 'One cell of the six',
        fr: 'il parle · il finit · il vend',
        sub: '-e · -it · nothing',
        body: `${THREE_GROUPS} The other five cells you could have worked out from the two lessons before this one.`,
      },
      {
        label: 'What to do with it',
        head: 'Write the stem and stop',
        body: `${REFRAME} It will look unfinished, because the last two lessons both put something there. Nothing is missing.`,
      },
    ],
  },

  /* ── Act 2: the paradigm, and it is deliberately thin ────────────────── */

  {
    // NO TABLE AND NO tapTable IN THIS ACT. a2.10 spent its paradigm act on a
    // six-row audible table because its Owns was the sound. This lesson's Owns is
    // one cell on a page, so the paradigm gets three light missions and the full
    // nine-pronoun version lives in the sheet. Giving the derivable parts the
    // weight is how the third paradigm in four lessons turns into a reference
    // document.
    type: 'cardDeck',
    id: 's04-machine',
    title: 'The Same Two Letters, A Third Time',
    frSub: 'La même machine',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['stem', 'nothing'],
    say: 'One card of revision and then the part that is actually new. The stem works the way it always has.',
    cards: [
      {
        label: 'Step 1',
        head: 'The naming form ends in -re',
        fr: PARADIGM_VERB,
        sub: `[${verbRespellBare(PARADIGM_VERB)}]`,
        body: 'This is how the verb is listed and nobody speaks in it. Take the last two letters off, which is what you did to parler and to finir.',
      },
      {
        label: 'Step 2',
        head: 'What is left does not move',
        fr: `${PARADIGM_VERB} → ${verbStem(PARADIGM_VERB)}`,
        sub: 'the part that stays',
        body: `${verbStem('attendre')} ${verbStem('perdre')} ${verbStem('répondre')} Every one of them keeps a d at the end, and that d is going to matter twice.`,
      },
      {
        label: 'Step 3, the five you know',
        head: 'Five endings you have met',
        fr: '-s · -s · -ons · -ez · -ent',
        sub: 'je · tu · nous · vous · ils',
        body: 'The plural three are the ones a2.01 gave you, unchanged. The -s on je and tu is the one you already write on tu es and tu parles.',
      },
      {
        label: 'Step 3, the one you have not',
        head: 'And one that is not there',
        fr: 'il vend',
        sub: 'no ending at all',
        body: `${REFRAME} This is the only cell in the whole system where the page stops at the stem.`,
      },
    ],
  },

  {
    // The six forms as EXAMPLES rather than a table, because the paradigm is not
    // what this lesson is for. Every line reads its French, its gloss and its
    // "what you write" out of the corpus, so no cell here can disagree with the
    // sheet or with the drill that scores it.
    type: 'examples',
    id: 's05-six',
    title: 'The Six, In Order',
    frSub: 'Les six formes',
    layer: 'core',
    terms: ['stem', 'nothing'],
    sheetId: SHEET_DECISION.id,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-11-paradigm' },
    say: 'Six lines, and only the third one is new. Read the last column rather than the middle one.',
    examples: PARADIGM_IDS.map((id, i) => ({
      fr: fr(id),
      en: `${ENDINGS[i].person}: you write ${ENDINGS[i].write}`,
      note: ENDINGS[i].ending === ''
        ? 'The stem, and then the full stop. This is the one the rest of the lesson is about.'
        : `${ENDINGS[i].ending} after ${verbStem(PARADIGM_VERB)} and ${ENDINGS[i].dSounds ? 'the d in front of it is said' : 'you will not hear any of it'}.`,
    })),
  },

  {
    // The seven, named by id so every one of them is genuinely on a screen rather
    // than merely resolvable. `vocabThemes` cards carry no itemId, which is why
    // this is a groupDrill: a1.08 declared 43 itemIds that resolved perfectly and
    // were drawn by nothing.
    //
    // The second check is the doctrine's generation test: a form for a verb the
    // lesson never showed, which is what "regular" is for.
    type: 'groupDrill',
    id: 's06-seven',
    title: 'Seven Verbs, One Pattern',
    frSub: 'Les sept verbes',
    layer: 'core',
    size: 'lg',
    terms: ['stem', 'notThisFamily'],
    sheetId: SHEET_DECISION.id,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-11-seven' },
    say: 'Seven and not ten, because there are only seven you will meet often. Say the stem before you move on.',
    groups: [
      {
        label: 'The four you will use most',
        items: THE_SEVEN.slice(0, 4).map(verbCard),
        check: {
          q: `What is left of ${THE_SEVEN[3]} once the last two letters come off?`,
          opts: ['entend', 'enten', 'entendr', 'entendre'],
          correct: 0,
          why: `Two letters and no more. ${verbStem(THE_SEVEN[3])} keeps its d, and that d is what the il form ends on.`,
        },
      },
      {
        label: 'Three more, same machine',
        items: THE_SEVEN.slice(4, 7).map(verbCard),
        check: {
          q: 'You have never met the verb mordre, meaning to bite. What is il ___ ?',
          opts: ['mordre', 'morde', 'mord', 'mordt'],
          correct: 2,
          why: 'Stem mord-, and the il form is the stem. You were not taught this verb and you did not need to be, which is what regular means.',
        },
      },
    ],
  },

  /* ── Act 3: the Owns. One cell, and what it costs to believe it. ─────── */

  {
    // THE HEADLINE SCREEN, AND IT IS THE ONLY tapTable IN THE LESSON.
    //
    // Three rows, three groups, one frame, and the third cell is empty. Each row
    // has its own `say`, so the learner hears the three third persons one tap
    // apart on one screen and confirms that nothing distinguishes them out loud.
    // Split across two missions the learner compares two memories instead of
    // three cells; the batch and the test both check the ROW ORDER by index
    // against THREE_CELLS rather than checking that the strings exist somewhere.
    //
    // Three rows and not nine: tapTable is not in ownsLayout(), so this renders
    // inside a scrolling page. Three sits comfortably above the fold, which is
    // part of why this is the table that gets to be a tapTable and the six-form
    // paradigm does not.
    type: 'tapTable',
    id: 's07-cells',
    // "Three Groups, Three Third Persons" was the first draft. `third person` is
    // grammar vocabulary, invariants §8 keeps it off a learner surface, and the
    // batch's JARGON list would have caught it only by the accident of the plural
    // s. The unit's own canDo says "the il form" and so does the whole lesson.
    title: 'The il Form, Three Times',
    frSub: 'Les trois groupes',
    layer: 'core',
    terms: ['threeGroups', 'nothing'],
    sheetId: SHEET_DECISION.id,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-11-cells' },
    say: `${REFRAME} Tap all three. They are the same length out loud and they are not on the page.`,
    cols: ['Group', 'He does it', 'What you write'],
    rows: THREE_CELLS.map((c) => ({
      cells: [`${c.group} · ${c.unit}`, form(c.id), written(c.ending)],
      say: fr(c.id),
      detail: {
        title: form(c.id),
        body: c.ending === ''
          ? 'The stem, and then the page stops. Tap the two rows above it: all three are said the same way, so nothing you can hear will ever tell you which of the three endings to write.'
          : `${c.ending} after the stem, and it makes no sound. You have had this one since ${c.unit}, and it is here so the cell below it has something to be different from.`,
        say: fr(c.id),
      },
    })),
  },

  {
    // WHERE THE ABSENCE IS ARGUED, and the only home of the nous/on statement.
    //
    // Four cards: what nothing means, what it is not, the second verb that proves
    // it is a rule, and the spoken we that lands on the same cell. `lg` and not
    // `xl` on purpose: NOUS_ON is thirteen words and an xl section caps every
    // string at twelve.
    type: 'cardDeck',
    id: 's08-nothing',
    title: 'Nothing Is An Ending',
    frSub: 'Rien, et c\'est la terminaison',
    hint: 'Swipe through the four cards. Read the second one twice.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['nothing', 'nousOn', 'theD'],
    say: 'Four cards about one empty cell. The second one is the difference between this and a silent letter.',
    cards: [
      {
        label: 'What it is',
        head: 'The stem is the form',
        fr: 'il vend · elle attend · on répond',
        sub: 'and there is no more of it',
        body: `${REFRAME} Write the stem, put a full stop after it, and the sentence is finished.`,
      },
      {
        label: 'What it is not',
        head: 'Not a silent letter',
        fr: 'il parle · il vend',
        sub: 'one silent letter · no letter',
        body: 'The -e on il parle is silent, and it is still there. On a -re verb there is nothing to be silent. That is a different thing and it is why the two look so unlike each other on a page.',
      },
      {
        label: 'On a second verb',
        head: 'It is a rule, not a word',
        fr: fr('fr.a2.verbes.231'),
        sub: sub('fr.a2.verbes.231'),
        body: 'répondre gives répond-, and the il form is répond. One letter shorter than je réponds and tu réponds, and said exactly the same way as both.',
      },
      {
        label: 'The one you will hear most',
        head: 'The spoken we lands here too',
        fr: fr('fr.a2.verbes.243'),
        sub: sub('fr.a2.verbes.243'),
        body: `${NOUS_ON} on takes the il form, so the commonest way of saying we in French writes nothing after the stem either.`,
      },
    ],
  },

  {
    // The only xl section in the lesson, and the one place xl is correct: every
    // display string is a bare two-word form. density.logic.ts caps EVERY string
    // in an xl section at 12 words except say, hint, note, why and tip.
    type: 'cardDeck',
    id: 's09-triple',
    title: 'Three Spellings, One Sound',
    frSub: 'Trois graphies, un son',
    hint: 'Swipe. Nothing changes out loud until the fourth card.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    terms: ['theSingularThree'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-11-hidden' },
    say: 'Four screens. Listen before you read each one, and notice where nothing at all changes.',
    cards: [
      { label: '1 of 4', fr: 'je vends', sub: '[zhuh vahⁿ]', body: 'I sell. Silent -ds.' },
      { label: '2 of 4', fr: 'tu vends', sub: '[tü vahⁿ]', body: 'You sell. Silent -ds again.' },
      { label: '3 of 4', fr: 'il vend', sub: '[eel vahⁿ]', body: 'He sells. Nothing after the stem.' },
      { label: '4 of 4', fr: 'ils vendent', sub: '[eel vahⁿd]', body: 'They sell. The d arrives.' },
    ],
  },

  {
    // PRODUCTION, and the only kind that can test an absence. The learner is
    // given a sound and has to choose a spelling the sound does not determine.
    // `practice` with skill 'write' draws no writing surface, so a groupDrill
    // check and the dictée are the two places this lesson can make a learner
    // decide.
    type: 'groupDrill',
    id: 's10-write',
    title: 'Write What The Sound Did Not Say',
    frSub: "Écrire ce qu'on n'entend pas",
    layer: 'core',
    size: 'lg',
    terms: ['theSingularThree', 'nothing'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-11-hidden' },
    say: 'Three rounds, and the recording cannot help you in any of them. Read the pronoun.',
    groups: [
      {
        label: 'One sound, two people',
        items: [
          { fr: fr('fr.a2.verbes.229'), itemId: 'fr.a2.verbes.229', respell: sub('fr.a2.verbes.229'), en: 'I answer quickly.' },
          { fr: fr('fr.a2.verbes.230'), itemId: 'fr.a2.verbes.230', respell: sub('fr.a2.verbes.230'), en: 'You answer quickly.' },
        ],
        check: {
          q: 'You hear « ray-pohⁿ ». Which is on the page?',
          opts: ['Only the je one', 'Only the tu one', 'Any of three, and the sound cannot settle it', 'Neither, it is répondre'],
          correct: 2,
          why: 'je réponds, tu réponds and il répond are one sound, so the pronoun on the page is the only evidence there is.',
        },
      },
      {
        label: 'The one that writes nothing',
        items: [
          { fr: fr('fr.a2.verbes.231'), itemId: 'fr.a2.verbes.231', respell: sub('fr.a2.verbes.231'), en: 'He answers quickly.' },
          { fr: fr('fr.a2.verbes.223'), itemId: 'fr.a2.verbes.223', respell: sub('fr.a2.verbes.223'), en: 'He sells here.' },
        ],
        check: {
          q: 'Il ___ vite. (répondre)',
          opts: ['réponde', 'répond', 'réponds', 'répondt'],
          correct: 1,
          why: 'The stem and nothing after it. The other three all put back a letter the form does not take, and two of them would be heard.',
        },
      },
      {
        label: 'And the s that only je and tu take',
        items: [
          { fr: fr('fr.a2.verbes.221'), itemId: 'fr.a2.verbes.221', respell: sub('fr.a2.verbes.221'), en: 'I sell here.' },
          { fr: fr('fr.a2.verbes.222'), itemId: 'fr.a2.verbes.222', respell: sub('fr.a2.verbes.222'), en: 'You sell here.' },
        ],
        check: {
          q: 'Tu ___ ici. (vendre)',
          opts: ['vend', 'vende', 'vendes', 'vends'],
          correct: 3,
          why: 'tu takes -s and you will never hear it. It is the ending most often left off, for exactly that reason.',
        },
      },
    ],
  },

  {
    // THE DOCTRINE'S GENERATION TEST, as its own mission.
    //
    // §B.1: a mission that lists ten conjugated forms has taught nothing a table
    // cannot; a mission that makes the learner produce a form for a verb the
    // lesson never showed them has taught the system. Both checks here run on
    // verbs that appear nowhere else in this lesson, and neither is released as
    // an item, because a verb met once in a drill stem is not vocabulary.
    type: 'groupDrill',
    id: 's11-newverb',
    title: 'A Verb You Have Never Met',
    frSub: 'Un verbe inconnu',
    layer: 'core',
    size: 'lg',
    terms: ['stem', 'nothing'],
    say: 'Two verbs that are not in this lesson. You have everything you need for both of them.',
    groups: [
      {
        label: 'Work it out',
        items: [],
        check: {
          q: 'The verb is fondre, to melt. What is elle ___ ?',
          opts: ['fondes', 'fonde', 'fond', 'fondre'],
          correct: 2,
          why: 'Stem fond-, and elle takes the same cell as il, which writes nothing. fond is the whole form.',
        },
      },
      {
        label: 'And again, in the plural',
        items: [],
        check: {
          q: 'Same verb. What is ils ___ ?',
          opts: ['fondent', 'fondes', 'fond', 'fondissent'],
          correct: 0,
          why: 'Stem fond-, plural ending -ent, and the d in front of it is said. Nobody taught you this verb and the machine did not care.',
        },
      },
    ],
  },

  {
    // THE EAR, AND IT IS ONE MISSION RATHER THAN TWO.
    //
    // a2.10 gave the ear two missions because the sound WAS its Owns. Here the
    // audible fact belongs to the previous lesson: `il vend` /vɑ̃/ against
    // `ils vendent` /vɑ̃d/ is a plural you can hear, and a2.10 already owns that
    // shape. So it is taught once, properly, and the weight stays on the page.
    //
    // Every line is a PRONOUN-BLIND pair: `il` and `ils` are said identically and
    // so are `elle` and `elles`, so the d is the whole evidence. NO QUESTION HERE
    // ASKS BETWEEN TWO FORMS THAT ARE ONE SOUND; HOMOPHONE_FORMS enforces it.
    type: 'listening',
    id: 's12-dsound',
    title: 'The D You Sometimes Hear',
    frSub: "Le d qu'on entend parfois",
    layer: 'core',
    questionsInModal: true,
    terms: ['theD', 'theSingularThree'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-11-dpairs' },
    say: 'Four lines and no pronoun to help you. Listen for a d at the very end of the verb.',
    // The two pronoun-blind pairs, written out rather than filtered out of
    // D_PAIRS. A clever derivation here would have made the line ORDER depend on
    // the order of a list whose job is something else, and these four have to
    // arrive singular, plural, singular, plural or the mission asks the learner
    // to compare across a gap.
    lines: [
      { fr: fr('fr.a2.verbes.223'), en: 'He sells here.' },
      { fr: fr('fr.a2.verbes.226'), en: 'They sell here.' },
      { fr: fr('fr.a2.verbes.236'), en: 'She is giving the book back.' },
      { fr: fr('fr.a2.verbes.237'), en: 'They are giving the book back.' },
    ],
    questions: [
      {
        q: 'You hear « eel vahⁿ », with nothing after it. How many people?',
        opts: ['One', 'Several', 'One or several, the sound does not say', 'It is not a real form'],
        correct: 0,
        why: 'Nothing arrived after the vowel, so the d is at the end of the word and silent. The plural would have put letters after it and the d would be said.',
      },
      {
        q: 'Now « eel vahⁿd ». How many people?',
        opts: ['Still one', 'Several', 'One or several', 'The recording is wrong'],
        correct: 1,
        why: 'The -ent is silent and it still puts letters after the d, so the d is in the middle of the word now and you can hear it.',
      },
      {
        q: 'So what does the d actually tell you?',
        opts: ['Which verb it is', 'Nothing at all', 'Whether the subject is singular or plural', 'Which tense it is'],
        correct: 2,
        why: `${D_SOUNDING_ENDINGS.join(', ')} all put letters after the d. ${D_SILENT_ENDINGS.filter(Boolean).join(', ')} and the bare form do not, so the three singular cells lose it.`,
      },
      {
        q: 'And which three would your ear NOT separate?',
        opts: ['il vend against ils vendent', 'je vends, tu vends and il vend', 'nous vendons against vous vendez', 'elle rend against elles rendent'],
        correct: 1,
        why: 'All three are the singular, all three lose the d, and one of them writes nothing. In the singular the pronoun is still the only evidence, exactly as it was in the two lessons before this.',
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's13-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'The person is on the front. Say the whole sentence, ending or no ending, before you flip.',
    cards: [
      { front: 'What does the il form of a -re verb take?', back: `${REFRAME} il vend, elle attend, on répond.` },
      { front: 'The stem of vendre', back: `${verbStem(PARADIGM_VERB)} Cut the last two letters off and stop.` },
      { front: 'You, selling here', back: fr('fr.a2.verbes.221'), say: fr('fr.a2.verbes.221') },
      { front: 'One man, selling here', back: fr('fr.a2.verbes.223'), say: fr('fr.a2.verbes.223') },
      { front: 'Several people, selling here', back: fr('fr.a2.verbes.226'), say: fr('fr.a2.verbes.226') },
      { front: 'You and somebody else, in writing', back: fr('fr.a2.verbes.224'), say: fr('fr.a2.verbes.224') },
      { front: 'You and somebody else, out loud', back: fr('fr.a2.verbes.243'), say: fr('fr.a2.verbes.243') },
      { front: 'One woman, giving the book back', back: fr('fr.a2.verbes.236'), say: fr('fr.a2.verbes.236') },
      { front: 'Several women, giving the book back', back: fr('fr.a2.verbes.237'), say: fr('fr.a2.verbes.237') },
      { front: 'il parle, il finit, il ___', back: 'il vend. An -e, then an -it, then nothing at all.' },
      { front: 'Which three cells lose the d out loud?', back: 'je, tu and il. The three singular ones, and they are one sound.' },
      { front: 'Which form does on take on a -re verb?', back: 'The il form. on vend, never on vendons, and it means we.' },
    ],
  },

  /* ── Act 4: the letter you want to add, and where the family stops ───── */

  {
    // THE TRAP IS THE ADDED LETTER, and it is drilled where it does damage: out
    // loud, because on a -re verb the letter the learner wants to add is a sound
    // as well. Stepped, so the three jobs are three screens rather than one
    // column below the fold.
    type: 'trapDrill',
    id: 's14-trap',
    title: 'Do Not Finish The Word',
    frSub: 'Ne finissez pas le mot',
    layer: 'core',
    swipe: true,
    terms: ['nothing', 'theD'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-11-dpairs' },
    say: 'Six of these. Say each one out loud before you choose, and stop where the stem stops.',
    rule: {
      title: 'Two ways to get this wrong',
      // Counted against the 45-word core cap by the validator rather than here.
      body: 'One is adding a letter to the il form, which puts a d sound on the end and turns one person into several. The other is leaving the s off je and tu, which nothing you can hear will ever catch.',
    },
    cards: [
      {
        promptLabel: 'he sells here',
        promptSound: 'eel vahⁿd ee-SEE',
        fr: fr('fr.a2.verbes.223'),
        ipa: '/il vɑ̃ i.si/',
        tip: 'Nothing after vahⁿ. One person takes the stem and stops.',
      },
      {
        promptLabel: 'they sell here',
        promptSound: 'eel vahⁿ ee-SEE',
        fr: fr('fr.a2.verbes.226'),
        ipa: '/il vɑ̃d i.si/',
        tip: 'The -ent is silent and the d in front of it is not. Say it twice against the card above.',
      },
      {
        promptLabel: 'I sell here',
        promptSound: 'zhuh vahⁿd ee-SEE',
        fr: fr('fr.a2.verbes.221'),
        ipa: '/ʒə vɑ̃ i.si/',
        tip: 'The s is silent and it does not wake the d up. je sounds exactly like il here.',
      },
      {
        promptLabel: 'she is waiting for the bus',
        promptSound: 'e la-tahⁿd luh BÜS',
        fr: fr('fr.a2.verbes.232'),
        ipa: '/ɛ.la.tɑ̃ lə bys/',
        tip: 'One person, so the word stops at the nasal vowel.',
      },
    ],
    drill: [
      { promptSay: 'il vend ici', opts: ['eel vahⁿd ee-SEE', 'eel vahⁿ ee-SEE', 'eel vahⁿ-duh ee-SEE'], correct: 1 },
      { promptSay: 'ils vendent ici', opts: ['eel vahⁿd ee-SEE', 'eel vahⁿ ee-SEE', 'eel vahⁿ-DENT ee-SEE'], correct: 0 },
      { promptSay: 'je réponds vite', opts: ['zhuh ray-pohⁿd VEET', 'zhuh ray-POHⁿ-duh VEET', 'zhuh ray-pohⁿ VEET'], correct: 2 },
      { promptSay: 'elle rend le livre', opts: ['el rahⁿd luh LEEVR', 'el rahⁿ luh LEEVR', 'el rahⁿ-duh luh LEEVR'], correct: 1 },
      { promptSay: 'elles rendent le livre', opts: ['el rahⁿd luh LEEVR', 'el rahⁿ luh LEEVR', 'el rahⁿ-DENT luh LEEVR'], correct: 0 },
      { promptSay: 'nous vendons ici', opts: ['noo vahⁿ ee-SEE', 'noo vahⁿ-dohⁿ ee-SEE', 'noo vahⁿd-ohn ee-SEE'], correct: 1 },
    ],
    // Four steps, one job each. `audio` is not optional: validateLesson refuses a
    // stepped trapDrill whose steps never reach the section's own audio, and
    // without it the wrong-then-right take would be authored and never played.
    steps: [
      { label: 'The rule', kind: 'rule', title: 'Two Ways To Get This Wrong' },
      { label: 'The traps', kind: 'cards', title: 'Four You Will Want To Finish' },
      { label: 'Hear it', kind: 'audio', title: 'Wrong, Then Right' },
      { label: 'Prove it', kind: 'drill', title: 'Which One Did You Say?', gate: true },
    ],
  },

  {
    type: 'commonErrors',
    id: 's15-errors',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set, and without it a1.01
    // mission 5 drew a blank screen on a device.
    swipe: true,
    size: 'lg',
    title: 'Three Ways The Ending Goes Wrong',
    frSub: 'Trois pièges de terminaison',
    layer: 'core',
    terms: ['nothing', 'theSingularThree'],
    say: 'All three of these are letters. Two of them are also sounds, and one of them is not.',
    errors: [
      {
        wrong: 'Writing « il vende » with an e.',
        right: 'Writing « il vend ».',
        why: 'This is the one the lesson exists to stop. The e is not silent here the way it is on il parle: it puts letters after the d, so the d is said, and the sentence arrives sounding like several people.',
      },
      {
        wrong: 'Writing « il vends » with an s.',
        right: 'Writing « il vend ».',
        why: 'The s belongs to je and to tu and to nowhere else in the singular. All three are said identically, so nothing you can hear will catch this one and the page is the only place it exists.',
      },
      {
        wrong: 'Writing « je vend » with no s.',
        right: 'Writing « je vends ».',
        why: 'The same three forms from the other direction. The bare stem is the il form and only the il form, and giving it to je is the mistake that comes from learning this lesson too well.',
      },
    ],
  },

  {
    // THE BOUNDARY, and it is one mission. The three are NAMED and not one of
    // them is conjugated, right or wrong. See the corpus header for why the wrong
    // form is absent as well: nobody here holds the right form to replace it
    // with, because a2.15 is five units away.
    type: 'cardDeck',
    id: 's16-notmine',
    title: 'Three That End In -RE And Are Not This',
    frSub: "Ce que ce n'est pas",
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['notThisFamily', 'stem'],
    say: 'Read this one properly. One of the three is among the commonest verbs in the language.',
    cards: [
      {
        label: 'The other family',
        head: 'Three built another way',
        fr: NOT_THIS_FAMILY.join(' · '),
        sub: 'a different model',
        body: 'They end in -re and they do not do this. Run the machine from this lesson on any of them and you produce a form no French speaker says.',
      },
      {
        label: 'And their compounds',
        head: 'Which brings five more with them',
        fr: NOT_THIS_FAMILY_COMPOUNDS.join(' · '),
        sub: 'built like the verb inside them',
        body: `Each one is one of the three with something on the front, and it behaves like the verb it is made of. All eight have a unit of their own at ${NOT_THIS_FAMILY_UNIT}.`,
      },
      {
        label: 'How to tell',
        head: 'The ending will not tell you',
        body: `The last four letters do not settle it: ${THE_SEVEN[6]} is in this family and ${NOT_THIS_FAMILY[0]} is not, and both end in -ndre. This is the one thing here you learn verb by verb rather than work out.`,
      },
    ],
  },

  /* ── Act 5: out in the world ─────────────────────────────────────────── */

  {
    type: 'practice',
    id: 's17-speak',
    title: 'Say The Whole Sentence',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Pronoun and verb as one movement. On a singular, stop at the vowel and do not land the d.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    // THE DICTÉE IS THE OWNS, AND IT IS THE HEAVIEST PRODUCTION SECTION IN THE
    // LESSON. Eleven targets against a2.10's eight, and the brief called it
    // before it was measured: this is a written distinction and the dictée is the
    // only surface in the app that can grade a spurious letter.
    //
    // ITS MODE IS NOT A FREE CHOICE. dicteeMode() switches to WORD tiles above 16
    // letters, and word mode hands every real word over pre-spelled: `vend` would
    // arrive as a tile and the learner would decide nothing. `ici` and `vite` are
    // the frame words for exactly this reason. All eleven targets are between 9
    // and 14 letters and the batch proves it through the real function.
    //
    // Ten of the eleven are graded on exactly what the lesson teaches. The
    // eleventh turns on the accent of `réponds`, which normalizeFr folds away, and
    // that is recorded in DICTEE_NEAR_MISS rather than left to be discovered.
    type: 'dictation',
    id: 's18-dictation',
    title: 'Spell What You Heard',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a2-11-paradigm' },
    say: 'Eleven lines. Three of them are the same sound with three different spellings, so read the pronoun.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'scenario',
    id: 's19-scenario',
    title: 'The Same Row, A Week Later',
    frSub: 'À vous',
    layer: 'core',
    terms: ['nothing', 'nousOn'],
    say: 'The same market. Every answer wants a -re verb, and half of them want nothing on the end of it.',
    setting: 'You are back at the market, this time behind your own table, and the woman with the list has come back.',
    turns: [
      {
        ai: 'Bonjour. Vous vendez les fromages de la ferme ?',
        en: 'Hello. Do you sell the farm cheeses?',
        user: 'Non, je vends le pain. Malik vend les fromages.',
        userEn: 'No, I sell the bread. Malik sells the cheeses.',
        alts: [
          { fr: 'Non, moi je vends le pain.', en: 'No, I sell the bread.' },
          { fr: 'Malik vend les fromages, pas moi.', en: 'Malik sells the cheeses, not me.' },
        ],
      },
      {
        ai: "Et il est là aujourd'hui ?",
        en: 'And is he here today?',
        user: 'Il descend dans une minute.',
        userEn: 'He is coming down in a minute.',
        alts: [
          { fr: 'Il arrive, il descend maintenant.', en: 'He is on his way, he is coming down now.' },
          { fr: 'Oui, il descend tout de suite.', en: 'Yes, he is coming down right away.' },
        ],
      },
      {
        ai: 'Je peux attendre. Vos voisins vendent des fruits ?',
        en: 'I can wait. Do your neighbours sell fruit?',
        user: 'Oui, ils vendent des fruits et des légumes.',
        userEn: 'Yes, they sell fruit and vegetables.',
        alts: [
          { fr: 'Oui, ils vendent des fruits.', en: 'Yes, they sell fruit.' },
          { fr: 'Oui, et ils attendent la livraison.', en: 'Yes, and they are waiting for the delivery.' },
        ],
      },
      {
        ai: 'Parfait. Et vous, vous répondez au téléphone pour lui ?',
        en: 'Perfect. And do you answer the phone for him?',
        user: 'Oui, je réponds quand il descend.',
        userEn: 'Yes, I answer when he goes down.',
        alts: [
          { fr: 'Non, il répond lui-même.', en: 'No, he answers himself.' },
          { fr: 'On répond tous les deux.', en: 'We both answer.' },
        ],
      },
      {
        ai: 'Très bien. Je reviens dans dix minutes, alors.',
        en: 'Very good. I will come back in ten minutes, then.',
        user: 'Parfait, il vous attend ici.',
        userEn: 'Perfect, he will be waiting for you here.',
        alts: [
          { fr: 'Très bien, on vous attend.', en: 'Very good, we will be waiting for you.' },
          { fr: 'Parfait, merci beaucoup.', en: 'Perfect, thank you very much.' },
        ],
      },
    ],
  },

  {
    type: 'reading',
    id: 's20-reading',
    title: 'Nine In The Morning, The End Row',
    frSub: 'Neuf heures, la dernière rangée',
    layer: 'core',
    terms: ['nothing', 'theD'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage) only when this flag is
    // set WITH questions.
    questionsInModal: true,
    say: 'Read it once for the shape. Every one of the six forms is in here. Tap any word you do not know.',
    // ONE LINE, deliberately. PassagePage does text.split(/(?<=[.!?»])\s+/) and
    // renders the pieces inline in a single TX, so every authored newline is
    // swallowed.
    //
    // THE A1 RULE, WHICH HOLDS AT A2 (Paul, 2026-08-04): if it is not inside
    // « », it is in English.
    text:
      'Saturday morning at the covered market, and the stalls on the end row are still setting up. '
      + '« Vous vendez les fromages de la ferme ? » '
      + '« Non, moi je vends le pain. Malik vend les fromages, et il descend dans une minute. » '
      + 'The woman writes something on her list and looks down the row. '
      + '« Et vos voisins ? » '
      + '« Ils vendent des fruits, et ils attendent la livraison. » '
      + 'Nobody is in a hurry before nine.',
    // Every entry is a single whitespace-delimited token that really appears
    // between the guillemets: the reader strips punctuation and lowercases before
    // matching, so an entry that is not a bare token is an underline that never
    // appears. MAX_GLOSS_WORDS is four and every key here is one word. Checked
    // through the REAL matcher in the test.
    glossary: [
      { word: 'vendez', en: 'sell', note: 'vous plus -ez, and the d in front of it is said.' },
      { word: 'vends', en: 'sell', note: 'je plus -s. Nothing reaches the ear at all, so only the moi in front tells you.' },
      { word: 'vend', en: 'sells', note: 'The whole form. Nothing after the stem, and nothing missing.' },
      { word: 'descend', en: 'is coming down', note: 'The same empty cell on a longer verb. descendre gives descend and stops.' },
      { word: 'vendent', en: 'sell', note: 'ils plus -ent. The -ent is silent and it still wakes the d up.' },
      { word: 'attendent', en: 'are waiting', note: 'The same again on a second verb, and ils sounds exactly like il.' },
    ],
    questions: [
      { q: 'Three verbs in this passage write nothing after the stem and three write something. Which are the bare ones?', a: 'vend, descend and, in the last line, nothing else: attendent and vendent both take -ent and vendez takes -ez. The two bare ones are the two with a single person behind them.' },
      { q: '« Ils vendent des fruits. » Which part of that sentence could you have heard as plural?', a: 'The verb, and only the verb. ils is said exactly like il, so the d at the end of vendent is what carries it.' },
      { q: 'The speaker writes « je vends » and « il vend » one line apart. Why is one longer?', a: 'Because je and tu take an s and il takes nothing. Out loud the two are identical, so the difference exists on the page and nowhere else.' },
    ],
  },

  /* ── Act 6: prove it ─────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's21-review',
    title: 'The Whole System, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['stem', 'nothing', 'threeGroups'],
    sheetId: SHEET_DECISION.id,
    say: 'Rate each card objectively. Again, hard, or easy. The ones you mark again come back.',
    cards: [
      { front: 'What does the il form of a regular -re verb take?', back: `${REFRAME} il vend, elle attend, on répond.` },
      { front: 'How do you build any regular -re verb?', back: 'Cut the last two letters off the naming form, then put the person on what is left.' },
      { front: 'The six endings, in order', back: ENDINGS.map((e) => e.write).join(' · ') },
      { front: 'il parle, il finit, il ___', back: `il vend. ${THREE_GROUPS}` },
      { front: 'Which three cells are one sound?', back: 'je, tu and il. -s, -s and nothing, and none of them reaches the ear.' },
      { front: 'When is the d at the end of the stem said?', back: `When something follows it: ${D_SOUNDING_ENDINGS.join(', ')}. Never in the three singular cells.` },
      { front: 'One man, selling here', back: fr('fr.a2.verbes.223'), say: fr('fr.a2.verbes.223') },
      { front: 'Several people, selling here', back: fr('fr.a2.verbes.226'), say: fr('fr.a2.verbes.226') },
      { front: 'What you write for we', back: fr('fr.a2.verbes.244'), say: fr('fr.a2.verbes.244') },
      { front: 'What you say for we', back: fr('fr.a2.verbes.243'), say: fr('fr.a2.verbes.243') },
      { front: 'One woman, giving the book back', back: fr('fr.a2.verbes.236'), say: fr('fr.a2.verbes.236') },
      { front: 'Several women, giving the book back', back: fr('fr.a2.verbes.237'), say: fr('fr.a2.verbes.237') },
      { front: 'Why is il vend a page problem and not a sound problem?', back: 'Because je vends, tu vends and il vend are one sound. Only the page separates them.' },
      { front: 'A verb you were never taught: elle fond', back: 'Stem fond-, and the il cell writes nothing. The machine works on anything in the family.' },
      { front: 'Three verbs end in -re and are not this. Name them.', back: `${NOT_THIS_FAMILY.join(', ')}. With their compounds that is eight, and they are ${NOT_THIS_FAMILY_UNIT}.` },
    ],
  },

  {
    type: 'progressCheck',
    id: 's22-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    // The prose deliberately carries no counts. Every figure on this card is
    // derived below; typing one here as well would be two chances to be wrong on
    // one screen.
    body: 'You have taken a third naming form apart and found the same two letters coming off it. You have put six endings on the stem, one of which is not there, and you have written the form for a verb this lesson never showed you. You know which three cells are one sound and which three wake the d up, and you know the three verbs that end the same way and are built another. What is left is the part that says whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's23-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Five rounds. Miss too many in a round and you get a drill before the next one starts.',
    rounds: [
      {
        id: 'r1-the-machine',
        label: 'Building the form',
        // Round targets are ordered deliberately. drillForRound returns the FIRST
        // target that has a drill and then stops, so the first name here is what
        // a failing learner actually gets. Every round leads on a DIFFERENT
        // trigger, which is what makes all five drills reachable.
        targets: ['err-lost-s', 'err-wrong-group'],
        say: 'Two letters off, one person on.',
        questions: [
          {
            q: 'What is the stem of attendre?',
            format: 'mcq',
            opts: ['attendr', 'atten', 'attend', 'attendre'],
            correct: 2,
            why: 'The last two letters come off and nothing else moves. attend- takes all six endings without changing.',
            ref: 's04-machine',
          },
          {
            q: 'Write the form that goes with je, for the verb vendre.',
            format: 'typeIn',
            accept: ['vends', 'je vends'],
            answer: 'vends',
            why: 'Stem vend-, je ending -s. The s is silent and so is the d in front of it, so nothing about the sound would have told you either was there.',
            ref: 's05-six',
          },
          {
            q: 'Nous ___ du temps. (perdre)',
            format: 'typeIn',
            accept: ['perdons', 'nous perdons'],
            answer: 'perdons',
            why: 'Stem perd-, nous ending -ons, and the d is said because something follows it.',
            ref: 's05-six',
          },
          {
            q: 'Fix this. You, about your stall: « Je vendre le pain. »',
            format: 'errorSpot',
            accept: ['Je vends le pain', 'vends'],
            answer: 'Je vends le pain.',
            why: 'The naming form cannot stand in a sentence. English lets a bare verb do this and French has no bare form at all, which is why the reflex is so strong.',
            ref: 's01-scene',
          },
          {
            // No `___` here, deliberately. The gap-question guard requires a
            // subject at the HEAD of the stem and a naming form in brackets, and
            // this question's whole point is that the verb is being introduced in
            // the stem rather than assumed. a2.10's rougir question is the same
            // shape for the same reason.
            q: 'You have never met the verb fondre, meaning to melt. What is the nous form?',
            format: 'mcq',
            opts: ['fondons', 'fondions', 'fonons', 'fondrons'],
            correct: 0,
            why: 'Stem fond-, nous ending -ons. You were not taught this verb, and that is what regular means.',
            ref: 's11-newverb',
          },
          {
            q: 'Vous ___ vite. (répondre)',
            format: 'typeIn',
            accept: ['répondez', 'repondez', 'vous répondez', 'vous repondez'],
            answer: 'répondez',
            why: 'vous takes -ez here exactly as it did on the other two patterns. The stem keeps its d and the d is said.',
            ref: 's05-six',
          },
        ],
      },
      {
        id: 'r2-the-bare-form',
        label: 'The cell that writes nothing',
        targets: ['err-added-letter', 'err-lost-s'],
        say: 'Write the stem, then stop. Four of these want you to stop early.',
        questions: [
          {
            q: 'Il ___ ici. (vendre)',
            format: 'typeIn',
            accept: ['vend', 'il vend'],
            answer: 'vend',
            why: 'The stem and nothing after it. This is the one cell in the three regular patterns where the page stops at the stem.',
            ref: 's07-cells',
          },
          {
            q: 'Fix this. One man, at the market: « Il vende ici. »',
            format: 'errorSpot',
            accept: ['Il vend ici', 'vend'],
            answer: 'Il vend ici.',
            why: 'The e is a letter too many, and on a -re verb it is a sound too many as well: it puts something after the d, so the d is said and the sentence arrives sounding plural.',
            ref: 's15-errors',
          },
          {
            q: 'Which of these four is the il form of répondre?',
            format: 'mcq',
            opts: ['réponds', 'répond', 'réponde', 'répondt'],
            correct: 1,
            why: 'The stem, répond-, used whole. The other three all put back a letter the cell does not take.',
            ref: 's08-nothing',
          },
          {
            q: 'Elle ___ le bus. (attendre)',
            format: 'typeIn',
            accept: ['attend', 'elle attend'],
            answer: 'attend',
            why: 'elle takes the same cell as il, which writes nothing. attend- is the stem and it is also the whole form.',
            ref: 's07-cells',
          },
          {
            q: 'Fix this. You, about yourself: « Je vend ici. »',
            format: 'errorSpot',
            accept: ['Je vends ici', 'vends'],
            answer: 'Je vends ici.',
            why: 'The bare stem belongs to il and to nowhere else. This is the mistake that comes from learning the il form too well, and no recording will ever catch it.',
            ref: 's15-errors',
          },
          {
            q: 'On ___ des billets ici. (vendre)',
            format: 'typeIn',
            accept: ['vend', 'on vend'],
            answer: 'vend',
            why: 'on means we and takes the il form, so the spoken we lands on the cell that writes nothing.',
            ref: 's08-nothing',
          },
        ],
      },
      {
        id: 'r3-three-groups',
        label: 'Three groups, three endings',
        targets: ['err-wrong-group', 'err-added-letter'],
        say: 'One frame, three verbs. Only one of them writes nothing.',
        questions: [
          {
            q: 'il parle, il finit, il vend. How many letters do the three endings have between them?',
            format: 'mcq',
            opts: ['Four', 'Three', 'Two', 'Six'],
            correct: 1,
            why: 'One for -e, two for -it, and none at all for the third. All three are silent, which is why the page is the only place they exist.',
            ref: 's07-cells',
          },
          {
            q: 'Il ___ ici. (parler)',
            format: 'typeIn',
            accept: ['parle', 'il parle'],
            answer: 'parle',
            why: 'An -er verb takes -e on il. It is silent, and it is still a letter you have to write.',
            ref: 's07-cells',
          },
          {
            q: 'Il ___ ici. (finir)',
            format: 'typeIn',
            accept: ['finit', 'il finit'],
            answer: 'finit',
            why: 'An -ir verb takes -it on il. Also silent, also two letters you have to write.',
            ref: 's07-cells',
          },
          {
            q: 'Fix this. One man, at the market: « Il vende le pain. »',
            format: 'errorSpot',
            accept: ['Il vend le pain', 'vend'],
            answer: 'Il vend le pain.',
            why: 'The -e belongs to the -er verbs. Carrying it across to a -re verb is the commonest way this goes wrong, because the -er pattern was learned first.',
            ref: 's03-third',
          },
          {
            q: 'Which group writes nothing on the il form?',
            format: 'mcq',
            opts: ['The -er verbs', 'The -ir verbs', 'The -re verbs', 'All three of them'],
            correct: 2,
            why: 'Only this one. -er takes -e and -ir takes -it, and both of those are letters even though neither is a sound.',
            ref: 's07-cells',
          },
          {
            q: 'Elles ___ le livre. (rendre)',
            format: 'typeIn',
            accept: ['rendent', 'elles rendent'],
            answer: 'rendent',
            why: 'A plural subject takes -ent, and the d in front of it is said. elle and elles are one sound, so the d is the only audible sign of the number.',
            ref: 's12-dsound',
          },
        ],
      },
      {
        id: 'r4-by-ear',
        label: 'What the d tells you',
        targets: ['err-d-sound', 'err-added-letter'],
        say: 'The one thing your ear can do here, and the three things it cannot.',
        questions: [
          {
            q: 'Listen. One person, or several?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Ils vendent ici.', recordingId: 'rec-a2-11-dpairs' },
            say: 'Ils vendent ici.',
            opts: ['One', 'It is not a real form', 'Several', 'Either, the sound does not say'],
            correct: 2,
            why: 'A d arrived at the end of the verb. The pronoun ils is said exactly like il, so that d is the whole of the evidence.',
            ref: 's12-dsound',
          },
          {
            q: 'Listen. elle and elles are said the same. What told you it was one?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Elle rend le livre.', recordingId: 'rec-a2-11-dpairs' },
            say: 'Elle rend le livre.',
            opts: ['The pronoun', 'No d at the end of the verb', 'The word livre', 'Nothing did'],
            correct: 1,
            why: 'The verb stopped at the vowel. Nothing follows the d in the singular, so the d is at the end of the word and a French word does not say it there.',
            ref: 's12-dsound',
          },
          {
            q: 'Tap the letters you do not say.',
            format: 'tapSilent',
            word: 'vend',
            correct: 'd',
            why: 'Just the d, and only because it is at the end. Put anything after it, as -ons and -ez and -ent all do, and it comes back.',
            ref: 's09-triple',
          },
          {
            q: 'Which of these could your ear NOT separate?',
            format: 'mcq',
            opts: ['il vend against ils vendent', 'nous vendons against vous vendez', 'je vends against il vend', 'elle rend against elles rendent'],
            correct: 2,
            why: 'Both are singular, both lose the d, and one of them writes an s the other does not. Three spellings and one sound is still true here.',
            ref: 's09-triple',
          },
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Nous vendons ici.', recordingId: 'rec-a2-11-paradigm' },
            say: 'Nous vendons ici.',
            opts: ['Ils vendent ici.', 'Vous vendez ici.', 'Il vend ici.', 'Nous vendons ici.'],
            correct: 3,
            why: 'Only one of these four ends on a nasal vowel after the d. The others are the bare form, a d on its own, and an -ay.',
            ref: 's05-six',
          },
          {
            q: 'Listen. How many people?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Il descend ici.', recordingId: 'rec-a2-11-dpairs' },
            say: 'Il descend ici.',
            opts: ['Several, and the verb says so', 'One, and the verb says so', 'You cannot tell', 'Several, and the verb does not say so'],
            correct: 1,
            why: 'Nothing after the vowel, so the d is silent and the subject is singular. The plural of this verb would have put the d back.',
            ref: 's12-dsound',
          },
        ],
      },
      {
        id: 'r5-the-boundary',
        label: 'Where the family stops',
        targets: ['err-boundary', 'err-wrong-group'],
        say: 'Ending in -re is not enough. Two of these are about the ones that are not yours.',
        questions: [
          {
            q: 'Which of these four verbs is in this lesson family?',
            format: 'mcq',
            opts: ['prendre', 'mettre', 'battre', 'descendre'],
            correct: 3,
            why: 'Only descendre. The other three end in -re and are built another way, and nothing in the naming form tells you that.',
            ref: 's16-notmine',
          },
          {
            q: 'prendre, mettre and battre all end in -re. Where are they taught?',
            format: 'mcq',
            opts: [NOT_THIS_FAMILY_UNIT, 'Here, in this lesson', 'a2.01', 'Nowhere, they are learned one at a time'],
            correct: 0,
            why: `${NOT_THIS_FAMILY_UNIT} takes all three and their compounds together. Until then, recognising that a verb is not in this family is the whole of what you need.`,
            ref: 's16-notmine',
          },
          {
            q: 'Ils ___ le train. (entendre)',
            format: 'typeIn',
            accept: ['entendent', 'ils entendent'],
            answer: 'entendent',
            why: 'Stem entend-, plural ending -ent. The -ent is silent and it still puts letters after the d, so the d is said.',
            ref: 's06-seven',
          },
          {
            q: 'Say it: he sells here.',
            format: 'speak',
            target: 'Il vend ici.',
            why: 'Stop at the vowel. If a d arrives at the end of the verb you have said several people, and this is the one place that mistake is audible.',
            ref: 's17-speak',
          },
          {
            q: 'Fix this. The neighbours, at the next table: « Ils vend des fruits. »',
            format: 'errorSpot',
            accept: ['Ils vendent des fruits', 'vendent'],
            answer: 'Ils vendent des fruits.',
            why: 'The written s of ils is silent, so the verb has to carry the number on its own. The bare stem is the singular cell and gives it away.',
            ref: 's12-dsound',
          },
          {
            q: 'Il ___ ici. (descendre)',
            format: 'typeIn',
            accept: ['descend', 'il descend'],
            answer: 'descend',
            why: 'The longest naming form in the set and the shortest il form. descendre gives descend-, and the il cell writes nothing after it.',
            ref: 's07-cells',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's24-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then the pattern stops being regular.',
    body: `You can build the present tense of any regular -re verb, including ones nobody has shown you, and you can write the one cell in the three regular patterns where the page stops at the stem. ${THREE_GROUPS} That set is now finished: ${BACKREFS.join(' and ')} gave you the other two and there is no fourth. What is left in this level are the verbs that had to be memorised outright, and the next unit begins them.`,
    points: [
      `${REFRAME}`,
      'Cut the last two letters off the naming form, then put the person on what is left.',
      'je and tu take an s, nous vous and ils take the endings you already had, and il takes nothing.',
      `The d at the end of the stem is said whenever something follows it, and ${NOT_THIS_FAMILY.join(', ')} are not in this family at all.`,
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed. It throws rather than degrades: a progress card
 * that silently reports "0 of 0" is worse than a build that stops.             */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's22-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a2.11.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Verbs you can build', v: String(THE_SEVEN.length) },
    { k: 'Endings that are nothing', v: `${BARE_CELL.length} of ${THREE_CELLS.length}` },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the shape is the doctrine's: scene, paradigm, Owns, trap, production,
 * proof. The Owns act is the heaviest by mission count, SEVEN against the
 * paradigm's three, and it holds the lesson's only tapTable, both production
 * groupDrills and the one listening. The paradigm act is deliberately thin and
 * carries NO table of any kind: a2.01 and a2.10 already taught the method, and
 * re-deriving it here would spend missions on the two lessons before this one.
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a nice
 * number, because it is divided by the rest points to check no stretch runs past
 * the checkpoint-spacing limit of 22.                                          */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The third and last one',
    sections: ['s01-scene', 's02-goals', 's03-third'],
    milestone: 'You know what the extra letter cost, and that this is the pattern that finishes the set.',
    estScreens: 18,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The same machine, one new cell',
    sections: ['s04-machine', 's05-six', 's06-seven'],
    milestone: 'You can build all six forms of any of the seven, and you know which cell is the new one.',
    estScreens: 18,
    restPoints: ['s06-seven/halfway'],
  },
  {
    id: 'act3',
    title: 'The cell where you write nothing',
    sections: ['s07-cells', 's08-nothing', 's09-triple', 's10-write', 's11-newverb', 's12-dsound', 's13-flash'],
    milestone: 'You can write the bare form without flinching, and tell the three groups apart on a page.',
    estScreens: 44,
    restPoints: ['s09-triple/halfway', 's11-newverb/halfway'],
  },
  {
    id: 'act4',
    title: 'The letter you want to add',
    sections: ['s14-trap', 's15-errors', 's16-notmine'],
    milestone: 'You stop at the stem, and you know the three verbs that end the same way and are built another.',
    estScreens: 21,
    restPoints: ['s14-trap/after-cards'],
  },
  {
    id: 'act5',
    title: 'Out in the world',
    sections: ['s17-speak', 's18-dictation', 's19-scenario', 's20-reading'],
    milestone: 'You have said all six out loud and spelled the three the recording could not settle.',
    estScreens: 44,
    restPoints: ['s17-speak/halfway', 's18-dictation/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s21-review', 's22-progress', 's23-quiz', 's24-roundup'],
    milestone: 'Lesson complete. The regular patterns are finished and the irregular ones begin.',
    estScreens: 48,
    restPoints: ['s21-review/halfway', 's23-quiz/after-r2', 's23-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT, not
 * the act it is first mentioned: releasing the whole set at mission one turns the
 * flashcard hub into a wall on the morning the learner is least able to read it.
 * Acts 1, 4 and 6 release nothing because they teach no new item.
 *
 * `prendre` and `mettre` are released by NOTHING and are not in itemIds at all.
 * They are named on s16-notmine as display strings, which is a2.10's rule for a
 * boundary verb and the reason act 4's slice is empty.                          */

const DECK_TRANCHE: string[][] = [
  // Act 1 releases NOTHING. The scene runs on display strings: the sentence that
  // sent the customer away is `Il vende les fromages ici.`, which is not a corpus
  // row, because a row is released to spaced repetition and this lesson does not
  // drill a form that does not exist.
  [],
  // Act 2: the paradigm and the seven infinitives.
  [...PARADIGM_IDS, ...THE_SEVEN.map(verbId)],
  // Act 3: the cross-group rows and the singular triple, both of which act 3 puts
  // on screens.
  [...familyIds('cross'), ...familyIds('hidden')],
  [],
  // Act 5: the applied sentences, released once the system that builds them has
  // been given. Every one of them is named by id in s17-speak.
  [...familyIds('apply')],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * FIVE triggers, five drills, five rounds, and each round leads on a DIFFERENT
 * trigger. That is deliberate: `drillForRound` returns the first target that has
 * a drill and then stops, so a drill that is never named first can never fire.
 * a1.05 ships two such drills and its own test fails on them today.             */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-lost-s',
    description: 'Writes the bare stem where je or tu is the subject, because the il form was the one that had to be learned.',
    detectOn: ['s05-six', 's10-write', 's23-quiz/r1-the-machine'],
    drill: 'drill-which-cell',
    retest: 'retest-which-cell',
  },
  {
    id: 'err-added-letter',
    description: 'Puts something after the stem on the il form: il vende, il vends, il vendt. The form looks unfinished and the reflex is to finish it.',
    detectOn: ['s07-cells', 's14-trap', 's23-quiz/r2-the-bare-form'],
    drill: 'drill-stop-at-the-stem',
    retest: 'retest-stop-at-the-stem',
  },
  {
    id: 'err-wrong-group',
    description: "Carries another group's third-person ending across: il vende with a2.01's -e, or il vendit with a2.10's -it.",
    detectOn: ['s03-third', 's07-cells', 's23-quiz/r3-three-groups'],
    drill: 'drill-three-groups',
    retest: 'retest-three-groups',
  },
  {
    id: 'err-d-sound',
    description: 'Says the d where it is silent or drops it where it is said, so a singular arrives sounding plural or the other way round.',
    detectOn: ['s12-dsound', 's14-trap', 's23-quiz/r4-by-ear'],
    drill: 'drill-hear-the-d',
    retest: 'retest-hear-the-d',
  },
  {
    id: 'err-boundary',
    description: 'Runs the vendre model on prendre, mettre or battre, because the naming form looks identical.',
    detectOn: ['s16-notmine', 's23-quiz/r5-the-boundary'],
    drill: 'drill-family-or-not',
    retest: 'retest-family-or-not',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-which-cell',
    title: 'Which person, and what you write',
    format: 'flashcard',
    coach: 'The person is on the left. Say what goes after the stem before you turn the card.',
    pairs: ENDINGS.map((e) => [e.person, `you write ${e.write}`] as [string, string]),
  },
  {
    id: 'retest-which-cell',
    title: 'One more time',
    format: 'mcq',
    q: 'Tu ___ le bus. (attendre)',
    opts: ['attend', 'attends', 'attendes'],
    correct: 1,
    why: 'tu takes -s. It is silent, so the only way to get it right is to know it is there.',
  },
  {
    id: 'drill-stop-at-the-stem',
    title: 'The naming form in, the il form out',
    format: 'flashcard',
    coach: 'A naming form on the left. Say the il form out loud before you turn the card, and stop where it stops.',
    pairs: THE_SEVEN.map((v) => [v, `il ${bareThirdPerson(v)}`] as [string, string]),
  },
  {
    id: 'retest-stop-at-the-stem',
    title: 'One more time',
    format: 'mcq',
    q: 'Elle ___ le livre. (rendre)',
    opts: ['rende', 'rends', 'rend'],
    correct: 2,
    why: 'The stem, used whole. elle takes the same cell as il, and that cell writes nothing.',
  },
  {
    id: 'drill-three-groups',
    title: 'Three groups, three il forms',
    format: 'sort',
    buckets: ['Writes a letter', 'Writes nothing'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [
      'fr.a2.verbes.227', 'fr.a2.verbes.228',
      'fr.a2.verbes.223', 'fr.a2.verbes.231',
      'fr.a2.verbes.240', 'fr.a2.verbes.232',
    ],
    coach: 'Play each one and read it. Every one of the six sounds finished; only two of them are written finished.',
  },
  {
    id: 'retest-three-groups',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these three writes nothing on the il form?',
    opts: ['parler', 'finir', 'vendre'],
    correct: 2,
    why: 'Only the -re verbs. -er takes -e and -ir takes -it, and both of those are letters even though neither is a sound.',
  },
  {
    id: 'drill-hear-the-d',
    title: 'One person, or several?',
    format: 'sort',
    buckets: ['One person', 'Several'],
    // Every id here is a PRONOUN-BLIND pair, which is the point: the pronoun
    // sounds the same on both sides and only the d settles it.
    items: [
      'fr.a2.verbes.223', 'fr.a2.verbes.226',
      'fr.a2.verbes.236', 'fr.a2.verbes.237',
      'fr.a2.verbes.240', 'fr.a2.verbes.241',
    ],
    coach: 'Play each one and listen at the very end of the verb. A d there means several, and nothing there means one.',
  },
  {
    id: 'retest-hear-the-d',
    title: 'One more time',
    format: 'mcq',
    q: 'When is the d at the end of a -re stem said?',
    opts: ['Always', 'Never', 'Whenever letters follow it'],
    correct: 2,
    why: '-ons, -ez and -ent all put letters after it, so it is in the middle of the word and it is said. The three singular cells put nothing after it.',
  },
  {
    id: 'drill-family-or-not',
    title: 'In the family, or not?',
    format: 'flashcard',
    coach: 'A naming form on the left. Say whether the il form is the bare stem before you turn the card.',
    pairs: [
      ['vendre', 'in the family, and the il form is the bare stem'],
      ['prendre', 'not this family, and it is built another way'],
      ['attendre', 'in the family'],
      ['mettre', 'not this family'],
      ['descendre', 'in the family'],
      ['battre', 'not this family'],
      ['perdre', 'in the family'],
      ['comprendre', 'not this family'],
    ],
  },
  {
    id: 'retest-family-or-not',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these three is in the family this lesson teaches?',
    opts: ['prendre', 'entendre', 'mettre'],
    correct: 1,
    why: 'Only entendre. The other two end in -re and are built another way, and the naming form gives you no way to tell.',
  },
];

/* ─── The reference sheet ──────────────────────────────────────────────────
 *
 * ONE, AND IT IS THE CROSS-GROUP ONE. The decision and the reasoning are in
 * SHEET_DECISION in the corpus, and the test asserts the count so a future author
 * who reaches for a second "-RE endings, in full" breaks a constant rather than
 * shipping a fourth competing reference.
 *
 * The brief asked for a2.01's sheet to be extended rather than duplicated. That
 * is not possible: a `sheetId` resolves only inside the lesson that declares it
 * (schema.ts:3490, lesson-contract.test.ts:91), so no section of a2.11 can point
 * at a sheet of a2.01. What the brief was protecting against is real all the
 * same, and this sheet is the answer to it rather than a third copy of the same
 * idea: its second table is the one place in the level where ALL THREE ending
 * sets are printed together, which is the thing a2.01's sheet could never have
 * been, and it names both earlier units so a learner knows the set is finished.
 *
 * The density validator refuses a `table` at layer 'core' outright, so the full
 * versions live here at layer 'deep' where density is deliberately fine.
 *
 * ReferenceSheet.tsx draws `teach`, `letterGrid` and `table` and NOTHING ELSE. A
 * `cheatSheet` in here would draw its title and no rows, which a1.13 ships today.
 * The batch refuses any other section type in a sheet.                          */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_DECISION.id,
    title: 'The three regular patterns, side by side',
    layer: 'deep',
    contains: ['All nine pronouns with their -re ending', 'The three groups in one table', 'The seven verbs with their stems'],
    sections: [
      {
        type: 'table',
        id: 'sheet-re-endings',
        title: 'The six -RE endings',
        layer: 'deep',
        cols: ['Person', 'You write', 'Is the d said?'],
        rows: ENDINGS.map((e) => [e.person, e.write, e.dSounds ? 'yes' : 'no']),
      },
      {
        type: 'table',
        id: 'sheet-re-paradigm',
        title: `${PARADIGM_VERB}, all nine pronouns, in the usual order`,
        layer: 'deep',
        cols: ['Pronoun', PARADIGM_VERB, 'Sounds like', 'English'],
        rows: [
          ["je / j'", 'vends', '[zhuh vahⁿ]', 'I sell'],
          ['tu', 'vends', '[tü vahⁿ]', 'you sell, one person, close'],
          ['il', 'vend', '[eel vahⁿ]', 'he sells'],
          ['elle', 'vend', '[el vahⁿ]', 'she sells'],
          ['on', 'vend', '[ohⁿ vahⁿ]', 'we sell, said out loud'],
          ['nous', 'vendons', '[noo vahⁿ-dohⁿ]', 'we sell, written'],
          ['vous', 'vendez', '[voo vahⁿ-day]', 'you sell, politely or plural'],
          ['ils', 'vendent', '[eel vahⁿd]', 'they sell, any group with a man in it'],
          ['elles', 'vendent', '[el vahⁿd]', 'they sell, all women'],
        ],
      },
      {
        // THE TABLE THIS SHEET EXISTS FOR, and the only one of its kind in the
        // level. a2.01's sheet holds the -ER set and a2.10's holds the -IR set,
        // and neither could hold this because neither knew the other two existed.
        type: 'table',
        id: 'sheet-three-groups',
        title: 'All three groups, every pronoun',
        layer: 'deep',
        cols: ['Person', `-er · ${BACKREFS[0]}`, `-ir · ${BACKREFS[1]}`, '-re · here'],
        rows: [
          ['je', 'parle', 'finis', 'vends'],
          ['tu', 'parles', 'finis', 'vends'],
          ['il · elle · on', 'parle', 'finit', 'vend'],
          ['nous', 'parlons', 'finissons', 'vendons'],
          ['vous', 'parlez', 'finissez', 'vendez'],
          ['ils · elles', 'parlent', 'finissent', 'vendent'],
        ],
      },
      {
        type: 'table',
        id: 'sheet-seven-verbs',
        title: 'The seven verbs',
        layer: 'deep',
        cols: ['Verb', 'Stem', 'il form', 'Meaning'],
        rows: THE_SEVEN.map((v) => [v, verbStem(v), bareThirdPerson(v), verbEn(v)]),
      },
      {
        type: 'teach',
        id: 'sheet-why-one-sheet',
        title: 'Why this sheet holds three patterns and not one',
        layer: 'deep',
        body: `${THREE_GROUPS} The two earlier units each shipped a sheet of their own: ${BACKREFS[0]} holds the -er endings in full and ${BACKREFS[1]} holds the -ir endings in full, and both are still the place to go for one pattern on its own. Neither of them could hold the table above, because neither of them knew the other two patterns existed yet. This one does, and it is the last one that will be needed, because there is no fourth regular group. Read the third row of it and nothing else if you are in a hurry: parle, finit, vend. One letter, two letters, none, and not one of the three reaches the ear. That is the whole of what the three regular patterns disagree about on the il form, and it is why this lesson spends its weight on writing rather than on listening. The rest of the table is the part you could have worked out: the plural endings are the same three you have had since ${BACKREFS[0]}, and the -s on je and tu is the same silent -s you have been writing since a1.06.`,
      },
      {
        type: 'teach',
        id: 'sheet-what-carries-forward',
        title: 'What carries forward',
        layer: 'deep',
        body: `The method has not changed across three units and it will not change again: find the stem, add the person. What each unit gave you was a different short set of endings to add, and with this one the set is complete. Everything after it in this level is a verb that has to be memorised outright, starting with the three that end in -re and are built another way. ${NOT_THIS_FAMILY.join(', ')} and their compounds ${NOT_THIS_FAMILY_COMPOUNDS.join(', ')} are all at ${NOT_THIS_FAMILY_UNIT}, and one of them is among the most common verbs in the language, so you will meet it long before you are taught it. The habit worth carrying out of this lesson is a writing habit rather than a listening one. You have now met a form that is complete while looking unfinished, and the thing to do about it is to stop. The one thing your ear will give you here is the d: silent at the end of a word, said whenever letters follow it, which means the three plural forms have it and the three singular forms do not.`,
      },
    ],
  },
];

export const VERBES_RE_LESSON: Lesson = {
  id: 'a2.11.l1',
  unitId: 'a2.11',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'Les verbes en -RE',
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`), and a2.11 sits at
  // seq 4, which pads to "04". The stored value is a fallback and has to agree
  // with what the renderer computes, or the two disagree the moment something
  // reads this field instead. The batch checks it against the live unit rather
  // than trusting this comment.
  tag: 'A2 · LEÇON 04',
  // FOUND ON A PIXEL 6, 2026-08-12, and it is the reason the device pass exists.
  // This string read "...where the THIRD PERSON is finished before you expect it
  // to be", and it is drawn on TWO learner surfaces: the lesson overview card and
  // the lesson cover. `third person` is grammar vocabulary that invariants §8
  // keeps off a learner surface, the batch has a JARGON list for exactly that,
  // and the guard walked `sections`, `sheets` and `terms` and NOT `intro`. Every
  // other occurrence in the lesson had already been caught and reworded; this one
  // shipped to v1 because nothing looked at it.
  //
  // The guard now walks `intro` and `overview` as well. `grammarAssumed` and
  // `grammarIntroduced` are still excluded, deliberately: invariants §8 says they
  // are addressed to the curriculum and may use the precise words.
  intro:
    'The last of the three regular patterns, and the one where the il form is finished before you expect it to be. Six endings, five of which you already have, and one of which is not there at all.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v2: the `intro` above said "third person" on two learner surfaces, found on a
  // Pixel 6 after v1 was applied. The counter moves rather than the content being
  // corrected under the same number, because two different bodies under one
  // version is the drift that has made Postgres and seed.json disagree twice.
  version: 2,

  grammarAssumed: [
    'The six subject pronouns and the nine they cover, introduced in a1.05',
    'on takes third-person-singular agreement, introduced in a1.05',
    'The present tense of regular -er verbs as a stem plus six endings, introduced in a2.01',
    'That -e, -es and -ent are silent and -ons and -ez are not, introduced in a2.01',
    'The present tense of regular -ir verbs, introduced in a2.10',
    'nous as the written first-person plural against on as the spoken one, introduced in a2.01',
  ],
  grammarIntroduced: [
    'The present tense of regular -re verbs, as a stem plus six endings',
    'That the third-person singular of a regular -re verb carries no written ending at all',
    'That the three regular groups differ in the third person by one letter, two letters and none',
    'That the singular of a regular -re verb is three spellings and one sound',
    'That a stem-final d is silent at the end of a word and said when letters follow it',
    'That a verb ending in -re is not necessarily in this family',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'Regular -RE Verbs',
    subFr: 'Les verbes en -RE',
    introFr: 'Le dernier des trois modèles réguliers. Six terminaisons, dont une qui ne s\'écrit pas.',
    minutes: 28,
    difficulty: 2,
    glyph: 'Re',
    screens: 193,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: VERBES_RE_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-11-verbes-re.test.ts, because a constraint on
    // how something is recorded becomes invisible the moment the clip is
    // delivered. The first two are the most important instructions in the lesson
    // and they pull in OPPOSITE directions, which is the whole difficulty of
    // recording this one.
    recorded: [
      {
        id: 'rec-a2-11-cells',
        desc: 'IL PARLE, IL FINIT AND IL VEND, ONE CONTINUOUS TAKE, ONE VOICE, IN THAT ORDER, AND THE THREE MUST BE INDISTINGUISHABLE IN LENGTH AND IN WEIGHT. This is the single most important instruction in this lesson. The three endings are one letter, two letters and none, and not one of them is a sound: eel parl ee-SEE, eel fee-nee ee-SEE, eel vahⁿ ee-SEE. The third one must not be clipped, hurried or allowed to trail off because it is shorter on the page, and the first two must not have their endings leaned on because they have one. If a listener can tell from the audio alone which of the three has the shortest spelling, the recording has taught the opposite of what the screen teaches. Read them at conversational pace, one after another, with no teaching pause between them. RECORDED APART, IN THREE SESSIONS, the learner compares three performances instead of three cells and the whole screen is lost.',
        clipIds: ['Il parle ici.', 'Il finit ici.', 'Il vend ici.'],
      },
      {
        id: 'rec-a2-11-dpairs',
        desc: 'THE D PAIRS, EACH PAIR IN ONE TAKE BACK TO BACK, SINGULAR THEN PLURAL: Il vend ici / Ils vendent ici, Elle rend le livre / Elles rendent le livre, Il descend ici / Ils descendent ici. Here the difference MUST be audible, which is the opposite instruction from the cells clip and is why the two are separate recordings. The plural ends on a d and the singular does not: vahⁿ, then vahⁿd. It is a released consonant at the very end of the word, not a syllable, so do not put a vowel after it and do not lengthen it. In every pair the PRONOUN must sound identical on both sides, because it is: il and ils are one sound and so are elle and elles. Any difference in the pronoun, in pace or in emphasis destroys the pair, because the learner will use it instead of the d. The scene break card and the trap drill both play from this clip and both need the wrong-then-right ordering preserved.',
        clipIds: ['Il vend ici.', 'Ils vendent ici.', 'Elle rend le livre.', 'Elles rendent le livre.', 'Il descend ici.', 'Ils descendent ici.', 'Il vend les fromages ici.'],
      },
      {
        id: 'rec-a2-11-hidden',
        desc: 'THE SINGULAR TRIPLE, IN ONE TAKE, AND THE THREE MUST BE INDISTINGUISHABLE. je vends, tu vends, il vend, then je réponds, tu réponds, il répond. Do not help. Do not differentiate them, do not touch the final letter, do not let the s of vends or the d of vend surface in any of the three. Two of the three carry letters the third does not and none of those letters is a sound, which is the entire claim of the mission this plays under. If a listener can tell any of these three apart from the audio alone, the recording has taught the opposite of what the lesson teaches. Read them at conversational pace, one after another, with no pause for teaching.',
        clipIds: ['je vends', 'tu vends', 'il vend', 'Je vends ici.', 'Tu vends ici.', 'Il vend ici.', 'Je réponds vite.', 'Tu réponds vite.', 'Il répond vite.'],
      },
      {
        id: 'rec-a2-11-paradigm',
        desc: 'All six forms as one continuous take, in the usual pronoun order (je, tu, il, nous, vous, ils), by one voice at one speed, then the eleven dictée sentences in the same take. The first three must be INDISTINGUISHABLE from each other, because they are: three spellings and one sound. The fourth and fifth add a whole syllable each and the d in front of it is said. The sixth adds only the d. Do not stress the verb anywhere; the weight belongs at the end of the phrase. The dictée sentences are the ones a learner will replay four times while typing, so they need to be even in pace and completely flat in emphasis: any lean on an ending is a hint the screen is not supposed to give.',
        clipIds: ['Je vends ici.', 'Tu vends ici.', 'Il vend ici.', 'Nous vendons ici.', 'Vous vendez ici.', 'Ils vendent ici.', 'Il parle ici.', 'Il finit ici.', 'Je réponds vite.', 'Tu réponds vite.', 'Il répond vite.'],
      },
      {
        id: 'rec-a2-11-seven',
        desc: 'The seven naming forms, read as a flat list at conversational pace, one voice. Every one of them ends in the same DR sound and that sameness is the teaching: the learner should come away hearing -dre as one ending rather than seven word-endings. The nasal vowel before the d is a vowel and not an N: vahⁿdr, not van-dr. Do not vary the intonation to keep the list interesting. Keep roughly a second between them so a learner can repeat into the gap.',
        clipIds: ['vendre', 'attendre', 'répondre', 'entendre', 'perdre', 'rendre', 'descendre'],
      },
      {
        id: 'rec-a2-11-scene',
        desc: 'The opening scene, French bubbles only. One woman in her fifties at an ordinary market pace, in a hurry in the way somebody with a list is in a hurry, and entirely unbothered. The last line (« D\'accord, merci. Je vais voir l\'autre rangée. ») must be brisk and pleasant rather than pointed: the whole scene turns on nobody minding and nobody checking, so any hint of doubt or of correction in her voice would destroy it. She has already decided and she is being polite about it.',
        clipIds: ['Bonjour. Je cherche les fromages de la ferme.', "C'est bien ici ?", "D'accord, merci. Je vais voir l'autre rangée."],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the tests, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const VERBES_RE_ITEM_IDS = ITEM_IDS;
export const VERBES_RE_SPEAK_IDS = SPEAK_IDS;
export const VERBES_RE_DICTATION_IDS = DICTATION_IDS;
export const VERBES_RE_PARADIGM_IDS = PARADIGM_IDS;
export const VERBES_RE_D_PAIRS = D_PAIRS;
export const VERBES_RE_SINGULAR_TRIPLES = SINGULAR_TRIPLES;
export const VERBES_RE_REPAIRED_RESPELL = REPAIRED_RESPELL;

/** THE SECTION THAT MUST CARRY THE THREE-CELL COMPARISON, with the three rows in
 *  THREE_CELLS order. Named here rather than in the test, so the test asserts
 *  against the lesson's own claim and a rename cannot silently move the assertion
 *  to a section that no longer holds it. */
export const CELLS_SECTION_ID = 's07-cells';
/** The row order of that section, so the check reads the lesson's own ordering
 *  rather than re-deriving one. */
export const CELLS_ROW_IDS = CELL_ROW_IDS;
/** The section that must be the ONLY home of the nous/on statement. */
export const NOUS_ON_SECTION_ID = 's08-nothing';
/** The section that names the boundary class and hands it over. */
export const BOUNDARY_SECTION_ID = 's16-notmine';
/** The one sheet, so a future author who adds a second one fails a test rather
 *  than shipping a fourth competing reference. */
export const SHEET_ID = SHEET_DECISION.id;
