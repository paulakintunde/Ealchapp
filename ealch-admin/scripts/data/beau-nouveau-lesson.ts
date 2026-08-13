// a2.16.l1 "Beau, nouveau, vieux" — the mission journey.
//
// ── THIS IS A FIRST BUILD ──────────────────────────────────────────────────
//
// Probed rather than assumed: the unit dump says `"lessons": []`, so there is no
// pre-v2 stub to rebuild and the version counter starts at 1. Corrections §1
// records that this is true of all sixteen remaining A2 units, and it was
// checked anyway because a2.01's brief said the same thing and was wrong.
//
// ── HOW IT IS SIZED, AND WHY ──────────────────────────────────────────────
//
// TWENTY-FOUR SECTIONS AND SIX ACTS.
//
//   act 1  the sentence that stalled     3 missions
//   act 2  five shapes, not four         3 missions
//   act 3  THE SHORT ONE                 7 missions   the heaviest act, alone
//   act 4  the two traps                 4 missions
//   act 5  out loud                      4 missions
//   act 6  prove it                      3 missions
//
// The paradigm gets three missions and the short form gets seven. Doctrine §B.5:
// if the paradigm outweighs the Owns, the wrong lesson was built. Act 2 is small
// on purpose and it is the most defensible cut in this build — a2.03 shipped the
// four-form grid at seq 10 and a1.13 and a1.14 shipped it before that, so a
// learner arriving here has met four of these five columns three times. Act 2's
// job is to put the fifth column on the same screen as the four they know, and
// then stop.
//
// Act 4 is three rather than five because two thirds of the plural is somebody
// else's: a1.14's grammarIntroduced says "Invariance of the masculine plural on
// adjectives already ending in -s or -x: vieux, mauvais" in those words, and
// a2.03 generalised it from those two lexemes to the whole class. What is left
// is the -eaux plural, which — measured across every grammarIntroduced string in
// the seed — is claimed by no unit at any level.
//
// ── THE LAYOUT CLAIMS, AND WHERE THEY ARE ─────────────────────────────────
//
// 1. "The five forms of one adjective belong on one screen, all five cells, so
//    the third form is visibly an addition to a grid the learner already knows."
//
//    That is `s04-grid`. THREE ROWS, one per adjective, five columns, every cell
//    nine characters or fewer. It is a `tapTable` and not a `table` because a
//    `table` at layer core is a table-in-core density failure (corrections §8);
//    the full grid with the respellings lives in the sheet at layer deep.
//    `tapTable` is NOT in ownsLayout(), so it renders inside a scrolling page,
//    and three rows is well inside the six-row Pixel 6 ceiling. FIVE COLUMNS IS
//    ONE MORE THAN a2.03's HERO CARRIED and that screen was clean on a device;
//    this is the screen most likely to be wrong here and the build report says
//    so.
//
// 2. "un beau livre and un bel appartement belong side by side, audible, one tap
//    each. The contrast is the lesson and it is a sound contrast, so it must be
//    heard, not read."
//
//    That is `s07-pairs`, and it is a `tapTable` for exactly the reason the
//    brief gives: a tap plays the row. Three rows, one per adjective, the
//    consonant-initial phrase and the vowel-initial phrase in that order, and
//    the order is the claim, so the guards check it by index. The nouns differ
//    because the noun is the cause; the CONSONANT-initial noun is held constant
//    at `sac` across all three rows so that the vowel-initial one is the only
//    thing moving.
//
// 3. "listening for the vowel-collision contrast."
//
//    `s06-hear` and `s11-onlypair`. The claim is narrower than the brief's and
//    it is the one that is actually true: five written forms collapse into TWO
//    sounds, so the plain-against-short contrast is the only audible distinction
//    in the entire lesson. Every other pair on the grid is a homophone and
//    HOMOPHONE_GROUPS refuses an ear question about any of them.
//
// 4. "One table covering all three adjectives x five forms. Fifteen cells."
//
//    `sheet.a2.16.forms`, layer deep, three tables and two teach blocks. NO
//    `cheatSheet`: ReferenceSheet.tsx draws `teach`, `letterGrid` and `table`
//    and nothing else, and a1.13 ships a cheatSheet inside a sheet today that
//    draws its title and nothing under it. a2.03's device pass found that a
//    five-column table in a sheet scrolls horizontally per table; this sheet's
//    widest is six columns and the build report names it as unverified until it
//    has been read off the phone.
//
// ── LAYOUT NOTES THAT ARE BUGS, NOT PREFERENCES ───────────────────────────
//
// - `size` is not decoration. density.logic.ts reads `xl` as a 12-word cap on
//   EVERY string in the section except `say`, `hint`, `note`, `why` and `tip`.
// - `commonErrors` needs `swipe: true` or it renders a blank screen.
// - `tapTable` is NOT in ownsLayout().
// - Three term chips per section, maximum, and the ROW is 37 characters wide.
// - ONE quiz per lesson. A second is silently never rendered.
// - `reading` + `glossary` needs `questionsInModal: true` AND questions, and the
//   passage is ONE BLOCK: PassagePage splits on /(?<=[.!?»])\s+/ and an authored
//   newline is silently discarded. A glossary key of five or more words can
//   never match.
// - `practice` with `skill: 'write'` draws no writing surface, and `skill:
//   'speak'` needs `voiceflash` on every item it names. All four imported
//   sentences GAIN `voiceflash` in this build, which is why they can be in it.
// - EVERY `scenario` TURN NEEDS TWO `alts` AND A `userEn`. `scenario.logic.test.ts`
//   is seed-wide, nothing in this band's documentation mentions it, and a2.03
//   went red on it the moment its merge landed.
// - `frSub` is the one field that is deliberately French.
// - Mission titles: 27 is the ceiling and it is a WIDTH rather than a count.

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
  BEAU_NOUVEAU_TERMS,
  BORROW_ARITHMETIC,
  CARRY_FORWARD,
  CHAIN_CLAIM,
  FORM_ARITHMETIC,
  INVENTED_ARITHMETIC,
  NEXT_LESSON_LINE,
  PLURAL_CLAIM,
  REASON_CLAIM,
  SILENT_H_ARITHMETIC,
} from './beau-nouveau-terms.ts';
import {
  ADJ_ORDER,
  AGREEMENT_CLAIM,
  AGREEMENT_UNIT,
  AUDIBLE_CLAIM,
  AUTHORED_IDS,
  BASICS_UNIT,
  BORROW_CLAIM,
  CONSONANT_NOUN,
  CONTRAST_PAIRS,
  DICTATION_IDS,
  DROPPED,
  ELISION_REFRAME,
  ELISION_UNIT,
  FORM_COUNT,
  FORM_LABEL,
  FORM_ORDER,
  FRAME_CLAIM,
  INVENTED_CLAIM,
  PLACEMENT_LINE,
  PLACEMENT_UNIT,
  PLURAL_UNCHANGED,
  PLURAL_UNCHANGED_UNITS,
  PLURAL_X,
  PLURAL_X_FORMS,
  POSSESSIVE_EXAMPLE,
  POSSESSIVE_UNIT,
  PREDICATE_SUBJECT,
  REFRAME,
  SOUND_CLAIM,
  SOUND_COUNT,
  THE_MOVE,
  adjIds,
  bare,
  cellId,
  en,
  form,
  formRespell,
  fr,
  noStop,
  phraseId,
  sub,
  type Adj,
} from './beau-nouveau-corpus.ts';
import {
  EVIDENCE_FR,
  EVIDENCE_IDS,
  IMPORTED_IDS,
  displayRespell,
  evidenceId,
  importedEn,
  importedFr,
  namingId,
  namingRespell,
  silentHId,
  silentHPartnerId,
  vowelFr,
  vowelRespell,
  vowelRowId,
} from './beau-nouveau-imported.ts';

export { CARRY_FORWARD, REFRAME, THE_MOVE };

/* ─── Named section ids, so a guard asserts a PLACE rather than a pattern ──
 *
 * Plain literals rather than reads off SECTIONS, so that a section being
 * RENAMED breaks the guard instead of quietly moving it. */

/** The hero: three adjectives, five forms, one screen. */
export const GRID_SECTION_ID = 's04-grid';
/** The second required layout: the contrast pairs, audible, one tap each. */
export const PAIRS_SECTION_ID = 's07-pairs';
/** The Owns: the short form IS the feminine. */
export const BORROW_SECTION_ID = 's08-borrow';
/** The reason, with sons.07 quoted, and the chain a1.17 is on. */
export const REASON_SECTION_ID = 's09-why';
export const CHAIN_SECTION_ID = 's10-chain';
/** The silent h, which is the strongest evidence in the lesson. */
export const SILENT_H_SECTION_ID = 's12-h';
/** The two listening screens. */
export const HEAR_SECTION_ID = 's06-hear';
export const ONLY_PAIR_SECTION_ID = 's11-onlypair';
/** The masculine-only trap, which only a written surface can catch. */
export const INVENTED_SECTION_ID = 's15-invented';
/** The plural nobody taught. */
export const PLURAL_SECTION_ID = 's16-plural';
/** The rest, named because an act or a guard references them. */
export const SCENE_SECTION_ID = 's01-scene';
export const GOALS_SECTION_ID = 's02-goals';
export const FRONT_SECTION_ID = 's03-front';
export const KNOWN_SECTION_ID = 's05-known';
export const READING_SECTION_ID = 's13-reading';
export const WHICH_SECTION_ID = 's14-which';
export const ERRORS_SECTION_ID = 's17-errors';
export const SCENARIO_SECTION_ID = 's18-scenario';
export const DICTATION_SECTION_ID = 's19-dictation';
export const SPEAK_SECTION_ID = 's20-speak';
export const REVIEW_SECTION_ID = 's21-review';
export const PROGRESS_SECTION_ID = 's22-progress';
export const QUIZ_SECTION_ID = 's23-quiz';
export const ROUNDUP_SECTION_ID = 's24-roundup';
export const SHEET_ID = 'sheet.a2.16.forms';

/* ─── The items this lesson touches ───────────────────────────────────────
 *
 * 18 authored plus 12 imported, out of three themes. Four imported rows gain a
 * respelling they never had and four gain drills, so that a card can draw them
 * and the mic can score them.                                                */

const ITEM_IDS = [...new Set([...AUTHORED_IDS, ...IMPORTED_IDS])];

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. Every authored row has it, every
 *  imported headword has it, and all four imported SENTENCES gain it in this
 *  build — which is the only reason the four hero rows of the lesson can be in
 *  a speak mission at all. */
const SPEAK_IDS = [
  ...ADJ_ORDER.flatMap((a) => adjIds(a)),
  ...ADJ_ORDER.map((a) => phraseId(a)),
  ...EVIDENCE_IDS,
  'fr.a2.adjectifs-essentiels.058',
];

/** One authored row as a deck or drill item. `note` carries the respelling and
 *  the gloss; a card must put SOMETHING under the French. */
const rowCard = (id: string) => ({ fr: fr(id), itemId: id, note: `${sub(id)} · ${en(id)}` });

/** THE DICTÉE LIST, AND IT SPANS BOTH HALVES OF THE CORPUS.
 *
 *  Thirteen authored rows carry `dictation` already. Three of the four imported
 *  third-form sentences join them, because a dictée that could not test the
 *  short form would be testing everything in this lesson except its subject —
 *  and the short form only exists in rows somebody else published.
 *
 *  `C'est un vieil immeuble.` is the fourth and it is NOT here: nineteen
 *  letters puts it in WORD mode, where every real word is handed over
 *  pre-spelled. Corrections §4, and the batch proves the split through the real
 *  `dicteeMode` rather than by counting characters. */
const DICTEE_IDS = [
  ...DICTATION_IDS,
  vowelRowId('beau'), vowelRowId('nouveau'), silentHId,
];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 * could not finish. Nobody is rude, nobody is corrected, nothing is
 * mispronounced. The learner runs out of sentence in public.
 *
 * The brief asks for something exact: somebody describing a flat or a friend
 * who reaches the adjective, hears themselves produce a collision, stops,
 * restarts, and loses the sentence. That is what this is, and the stall is
 * SELF-INFLICTED and AUDIBLE, which is what makes it an A2 opening rather than
 * an A1 one. Nobody else notices anything. The learner hears « un beau
 * immeuble » come out of their own mouth, knows it is wrong because it sounds
 * wrong, and stops to fix it — and the stopping is what costs the turn.
 *
 * THERE IS A WRONG FRENCH SENTENCE IN THIS SCENE and that is a departure from
 * a2.03 and a2.11, which both refused one on the grounds that a learner with
 * nothing to overwrite it with keeps it. It is right here for one reason: the
 * learner is NOT being asked to recognise the error, they are being asked to
 * hear it. « un beau immeuble » is two vowels colliding and it is unsayable at
 * speed; a French speaker cannot produce it and neither can a learner who tries.
 * The scene's whole claim is that the ear already knows, and showing the form
 * the ear rejects is how that claim gets made. It appears once, marked, in the
 * `wrong` half of the break card, and the guards pin it to that one location.
 *
 * The break card is BUDGETED, not chosen. Ledger §7, measured on a Pixel 6: a
 * heading of about 13 characters, a body of 24 to 26 words, a coach line under
 * 9 words, and a right-hand reading row whose French stays under about 24
 * characters so it sets on one line. a2.14 shipped one at 31 and its own
 * Continue went under the pager bar. `bel immeuble` is 12.                    */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A Tuesday evening in Nantes. A colleague you like but do not know well has asked where you have moved to, and you have been waiting all week for somebody to ask.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Le collègue',
    fr: fr('fr.a2.adjectifs-essentiels.057'),
    en: en('fr.a2.adjectifs-essentiels.057'),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-16-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Oui, et c\'est un beau... un beau... euh...',
    en: 'Yes, and it is a lovely... a lovely... er...',
    stage: `You know the word. You have said « ${form('beau', 'plain')} » a thousand times. It went into your mouth, it hit the front of the next word, and it would not come out.`,
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You have stopped twice now and he is still waiting. What comes out?',
    options: [
      {
        fr: noStop(fr('fr.a2.adjectifs-essentiels.058')),
        respell: `[${bare('fr.a2.adjectifs-essentiels.058')}]`,
        en: 'the word you own, two letters shorter',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'It is very nice.',
        en: 'and you have given up on the sentence you wanted',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'en-GB' },
      },
    ],
    followUp: {
      works: 'He asks which street, in French, and you spend the rest of the walk to the tram talking about the neighbourhood.',
      breaks: 'He says "oh, nice" and asks somebody else about their weekend. Nothing went wrong and you told him nothing.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Le collègue',
    fr: 'Ah, cool. Bon, à demain !',
    en: 'Ah, cool. Right, see you tomorrow!',
    stage: 'Nobody corrected anything, because there was nothing to correct. You stopped before the wrong word arrived and the sentence stopped with it.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'break',
    size: 'lg',
    // THE ONE PLACE A WRONG FORM APPEARS. Read the block comment above: the
    // claim is that the ear rejects it, and the ear cannot reject what it has
    // never been shown. Pinned to this location by all three layers.
    heading: 'Two vowels',
    body: 'You did not stall on a word you had not learned. You stalled because the word you had ran straight into the front of the next one and your mouth stopped before your grammar did.',
    wrong: {
      fr: `un ${form('beau', 'plain')} immeuble`,
      ipa: '/œ̃ bo i.mœbl/',
      respell: '[uhⁿ boh ee-MUHBL]',
      en: 'what would not come out',
    },
    right: {
      fr: `un ${form('beau', 'vowel')} immeuble`,
      ipa: '/œ̃ bɛ.li.mœbl/',
      respell: '[uhⁿ beh-lee-MUHBL]',
      en: 'and this is the one',
    },
    coach: 'Listen to the front of the next word.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-16-break' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: `${REFRAME} Three words do this, you already know all six of the shapes it needs, and by the end of this you will not stop in the middle again.`,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the sentence that stalled ──────────────────────────────────── */

  {
    type: 'scene',
    id: SCENE_SECTION_ID,
    title: 'Where You Live Now',
    frSub: 'Le nouveau quartier',
    render: 'screens',
    layer: 'core',
    setting: { place: 'Outside the office', city: 'Nantes', time: 'Tuesday evening' },
    beats: SCENE_BEATS,
    closing: { text: REFRAME, size: 'md' },
    terms: ['theShortOne'],
  },

  {
    type: 'goals',
    id: GOALS_SECTION_ID,
    // 27 characters, and it is the house heading that 36 lessons in the seed
    // ship. Ledger §a2.14-13 measured it as fitting on the hub.
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    goals: [
      { t: 'Use the short form', s: `In front of anything starting with a vowel sound. ${REFRAME}` },
      { t: 'Build it without learning it', s: BORROW_CLAIM },
      { t: 'Keep it away from the feminine', s: `There is no woman version of it, and you will never hear the mistake. ${FRAME_CLAIM}` },
      { t: 'Get the plural right in writing', s: `${PLURAL_X_FORMS.join(' and ')} take an x, and ${form(PLURAL_UNCHANGED, 'plainPl')} takes nothing.` },
    ],
  },

  {
    type: 'examples',
    id: FRONT_SECTION_ID,
    title: 'Listen To The Next Word',
    frSub: 'Le mot d’après',
    layer: 'core',
    say: `${REFRAME} Four sentences. In two of them nothing happens, and in two of them the word in the middle is two letters shorter than you expect.`,
    examples: [
      { fr: fr(phraseId('beau')), en: en(phraseId('beau')), note: `A consonant starts ${CONSONANT_NOUN}, so nothing has to happen and nothing does.` },
      { fr: vowelFr('beau'), en: importedEn(vowelRowId('beau')), note: 'A vowel starts the next word, and the same describing word has arrived two letters shorter.' },
      { fr: fr(phraseId('vieux')), en: en(phraseId('vieux')), note: 'Second word, consonant again, plain form again.' },
      { fr: vowelFr('vieux'), en: importedEn(vowelRowId('vieux')), note: 'And a vowel again. Different word, same two letters gone, same reason.' },
    ],
    terms: ['aVowelIsComing', 'theShortOne'],
  },

  /* ── Act 2: five shapes, not four ──────────────────────────────────────── */

  {
    /* THE HERO, AND THE FIRST LAYOUT CLAIM THE TEST MUST ASSERT.
       Three rows, five columns, every cell nine characters or fewer, and the
       whole thing on one screen. A `table` here would be a table-in-core
       density failure; the full grid with the respellings is in the sheet.

       THE `vowel` COLUMN IS SECOND, NOT FIFTH. It is built out of the feminine
       and used in place of the plain form, so it belongs between them. Putting
       it last, as an appendix, is the version of this screen that teaches three
       exceptions instead of one rule. */
    type: 'tapTable',
    id: GRID_SECTION_ID,
    title: 'Three Words, Five Shapes',
    frSub: 'Les cinq formes',
    layer: 'core',
    say: `${FORM_ARITHMETIC} Tap a row to hear all five. ${AGREEMENT_CLAIM}`,
    cols: FORM_ORDER.map((f) => FORM_LABEL[f]),
    rows: ADJ_ORDER.map((a) => ({
      cells: FORM_ORDER.map((f) => form(a, f)),
      say: vowelFr(a),
      detail: {
        title: `${form(a, 'plain')} · ${form(a, 'vowel')}`,
        // THE FOUR PREDICATE SENTENCES ARE PRINTED HERE, and that is what puts
        // them on a screen in act 2. The first version of this body listed the
        // respellings and the arithmetic only, and the tranche guard caught it:
        // act 2 released twelve rows the learner had seen as grid CELLS and
        // never as cards. A cell is not a row.
        body: `${(['plain', 'fem', 'plainPl', 'femPl'] as const).map((f) => fr(cellId(a, f))).join(' ')} ${FORM_ORDER.map((f) => formRespell(a, f)).join(' · ')}. ${a === PLURAL_UNCHANGED ? `Its plural is the same word as its singular, which ${BASICS_UNIT} told you about this word.` : 'The plural takes an x, and it makes no sound either way.'}`,
        say: fr(cellId(a, 'fem')),
      },
    })),
    terms: ['fiveForms', 'theShortOne'],
  },

  {
    type: 'cardDeck',
    id: KNOWN_SECTION_ID,
    title: 'The Four You Have',
    frSub: 'Ce que vous savez déjà',
    layer: 'core',
    hint: 'Swipe through the four you already own.',
    cards: [
      { label: FORM_LABEL.plain, head: form('beau', 'plain'), sub: `[${formRespell('beau', 'plain')}]`, body: `The plain form and the one you learn the word in. ${AGREEMENT_CLAIM}` },
      { label: FORM_LABEL.fem, fr: fr(cellId('beau', 'fem')), sub: `[${bare(cellId('beau', 'fem'))}]`, body: `${BASICS_UNIT} gave you this one and it has not changed. Say it out loud twice, because the shape this lesson is about is built out of it and out of nothing else.` },
      { label: FORM_LABEL.plainPl, fr: fr(cellId('beau', 'plainPl')), sub: `[${bare(cellId('beau', 'plainPl'))}]`, body: 'An x on the end rather than an s, and it makes exactly as much noise as an s would, which is none. Act 4 is about that x.' },
      { label: FORM_LABEL.femPl, fr: fr(cellId('beau', 'femPl')), sub: `[${bare(cellId('beau', 'femPl'))}]`, body: 'The woman form with an ordinary s after it. Out loud it is the woman form, and there is nothing new here at all.' },
      { label: 'And the fifth', head: `${FORM_COUNT} shapes, ${SOUND_COUNT} sounds`, body: `${SOUND_CLAIM} The one you have not met is the one the scene stopped on.` },
    ],
    terms: ['fiveForms', 'whatYouCanHear'],
  },

  {
    type: 'listening',
    id: HEAR_SECTION_ID,
    title: 'Five Shapes, Two Sounds',
    frSub: 'Cinq formes, deux sons',
    layer: 'core',
    swipe: true,
    say: `${SOUND_CLAIM} Listen to all four before you answer anything.`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-16-ear' },
    lines: [
      { fr: fr(cellId('beau', 'plain')), en: en(cellId('beau', 'plain')) },
      { fr: fr(cellId('beau', 'plainPl')), en: en(cellId('beau', 'plainPl')) },
      { fr: fr(cellId('beau', 'fem')), en: en(cellId('beau', 'fem')) },
      { fr: fr(cellId('beau', 'femPl')), en: en(cellId('beau', 'femPl')) },
    ],
    questions: [
      {
        q: 'The first two sound identical. What is written differently?',
        opts: [`An x on the second one`, 'An s on the second one', 'Nothing is written differently'],
        correct: 0,
        why: `${form('beau', 'plainPl')} takes an x where almost every other describing word in French takes an s, and neither letter has ever been pronounced.`,
      },
      {
        q: 'The third and fourth also sound identical. Which is about several people?',
        opts: ['The third', 'The fourth', 'You cannot tell from the sound'],
        correct: 2,
        why: 'The plural s is silent here as it is everywhere. Four written shapes have just reached you as two.',
      },
      {
        q: `So how many different sounds do the ${FORM_COUNT} shapes make?`,
        opts: ['One', 'Two', 'Three', 'Five'],
        correct: 1,
        why: SOUND_CLAIM,
      },
    ],
    terms: ['whatYouCanHear', 'fiveForms'],
  },

  /* ── Act 3: THE SHORT ONE. The heaviest act, and the Owns. ─────────────── */

  {
    /* THE SECOND LAYOUT CLAIM THE TEST MUST ASSERT.
       "un beau livre and un bel appartement belong side by side, audible, one
       tap each. The contrast is the lesson and it is a sound contrast, so it
       must be heard, not read."

       A tapTable, so a tap plays the row. Three rows, and each row's `detail`
       holds the pair back to back with ONE recordingId, which is the constraint
       the audio brief carries: recorded apart, the learner compares two
       performances instead of two sounds.

       The consonant-initial noun is `sac` in all three rows and the
       vowel-initial one changes, because the vowel-initial noun is the CAUSE
       and the consonant-initial one is the control. Asserted by index. */
    type: 'tapTable',
    id: PAIRS_SECTION_ID,
    title: 'Same Word, Next Word',
    frSub: 'Le même mot, deux fois',
    layer: 'core',
    say: 'Three pairs. In each one the describing word is the same word and the thing after it is different, and that is the only reason anything changed. Tap a row to hear both.',
    cols: ['Word', `Before ${CONSONANT_NOUN}`, 'Before a vowel'],
    rows: CONTRAST_PAIRS.map((p) => ({
      cells: [form(p.adj, 'plain'), form(p.adj, 'plain'), form(p.adj, 'vowel')],
      say: importedFr(p.vowel),
      detail: {
        title: `${form(p.adj, 'plain')} · ${form(p.adj, 'vowel')}`,
        body: `« ${noStop(fr(p.consonant))} » then « ${noStop(importedFr(p.vowel))} ». ${formRespell(p.adj, 'plain')} then ${formRespell(p.adj, 'vowel')}. Nothing about the describing word decided that. The word after it did.`,
        say: fr(p.consonant),
      },
    })),
    terms: ['aVowelIsComing', 'theShortOne'],
  },

  {
    /* THE OWNS, ON ONE SCREEN. The short form is the feminine, and the drop is
       exact in all three. This is the mission the whole build exists for and it
       is the one a later author is most likely to soften into "and there is
       also a special form before a vowel". */
    type: 'cardDeck',
    id: BORROW_SECTION_ID,
    title: 'It Is The Woman Form',
    frSub: 'La forme féminine, raccourcie',
    layer: 'core',
    hint: 'Swipe. Say each pair out loud before you move on.',
    cards: [
      { label: 'The claim', head: 'Same sound', body: BORROW_CLAIM },
      ...ADJ_ORDER.map((a) => ({
        label: `${form(a, 'fem')} · ${form(a, 'vowel')}`,
        fr: `${form(a, 'fem')} · ${form(a, 'vowel')}`,
        sub: `[${formRespell(a, 'fem')}] · [${formRespell(a, 'vowel')}]`,
        body: `Two words on the page and one word in the mouth. Take the last two letters off ${form(a, 'fem')} and you have ${form(a, 'vowel')}, and you have not changed a single sound doing it.`,
      })),
      {
        label: 'All three at once',
        head: `Drop the ${DROPPED}`,
        body: BORROW_ARITHMETIC,
      },
      {
        label: 'And the proof is not mine',
        fr: `${form('beau', 'vowel')} · ${form('beau', 'fem')}`,
        sub: `[${namingRespell('bel')}] · [${namingRespell('belle')}]`,
        body: `These two cards were written into this course years apart, by different people, for different lessons. Look at what is under them. Nobody was trying to make a point and they came out the same.`,
      },
    ],
    terms: ['theShortOne', 'whatYouCanHear'],
  },

  {
    /* THE REASON, WITH sons.07 QUOTED BY UNIT ID AND VERBATIM.
       The brief asks for this by name and the doctrine §B.7 asks for the
       earlier instance to be named. sons.07 is LIVE: v1 in the seed, 19
       sections, unit sons.07 at seq 8. */
    type: 'teach',
    id: REASON_SECTION_ID,
    title: 'Why It Exists At All',
    frSub: 'Pourquoi cette forme',
    layer: 'core',
    // 45 WORDS IS THE CAP ON A CORE SCREEN and a `teach` body is one string.
    // The first version ran to 107 by putting the reason, the recap and the
    // move in one block; the move belongs to s14-which's rule card and to the
    // sheet, both of which already carry it.
    body: `${REASON_CLAIM} You met that rule in a pronunciation lesson.`,
    terms: ['aVowelIsComing', 'theShortOne'],
  },

  {
    /* THE CHAIN, AND IT IS THE FINDING THIS BUILD IS PROUDEST OF.
       a1.20's grammarIntroduced calls its own instance "a fifth instance of
       anti-hiatus", so the project has been counting for twenty lessons and has
       never told the learner. a1.17's is the one that matters, because it swaps
       a FORM rather than dropping a letter, which is exactly what these three
       do. `anti-hiatus` is jargon and stays out of every string here. */
    type: 'examples',
    id: CHAIN_SECTION_ID,
    title: 'You Have Done This Before',
    frSub: 'Déjà vu',
    layer: 'core',
    say: CHAIN_CLAIM,
    examples: [
      { fr: 'ma amie → ' + POSSESSIVE_EXAMPLE, en: 'my friend', note: `${POSSESSIVE_UNIT}. A word swapped for the one from the other side, so that a consonant lands in front of the vowel. Nothing about the friend changed.` },
      { fr: 'je aime → j’aime', en: 'I like', note: `${ELISION_UNIT}. Here the vowel is thrown away instead of the word being swapped, and the apostrophe marks where it stood.` },
      { fr: `${form('beau', 'plain')} → ${form('beau', 'vowel')}`, en: 'lovely', note: 'And this lesson. A word swapped for the one from the other side, exactly as in the first row, and it is the third solution to one problem.' },
      { fr: ELISION_REFRAME, en: `${ELISION_UNIT}`, note: 'That sentence was written for a pronunciation lesson and it is the shortest description of this one.' },
    ],
    terms: ['aVowelIsComing'],
  },

  {
    /* THE ONLY EAR QUESTION THIS LESSON CAN ASK, AND THE SCREEN THAT SAYS SO.
       Five written forms collapse into two sounds, so plain-against-short is
       the only audible contrast in the whole lesson. HOMOPHONE_GROUPS refuses a
       listenChoose about any other pair, and this screen is where the learner
       is told why the exam will only ever ask them one kind of listening
       question. */
    type: 'listening',
    id: ONLY_PAIR_SECTION_ID,
    title: 'The One You Can Hear',
    frSub: 'La seule différence audible',
    layer: 'core',
    swipe: true,
    say: AUDIBLE_CLAIM,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-16-pairs' },
    lines: [
      { fr: fr(phraseId('beau')), en: en(phraseId('beau')) },
      { fr: importedFr(vowelRowId('beau')), en: importedEn(vowelRowId('beau')) },
      { fr: fr(phraseId('nouveau')), en: en(phraseId('nouveau')) },
      { fr: importedFr(vowelRowId('nouveau')), en: importedEn(vowelRowId('nouveau')) },
    ],
    questions: [
      {
        q: 'The first two. Did the describing word change?',
        opts: ['Yes, and you can hear it', 'No', 'It changed on the page only'],
        correct: 0,
        why: `${formRespell('beau', 'plain')} against ${formRespell('beau', 'vowel')}. This is the one difference in the lesson your ear gets for free.`,
      },
      {
        q: `Now the second one against « ${noStop(fr(cellId('beau', 'fem')))} ». Which of the two did you hear?`,
        opts: ['The first', 'The second', 'They are the same sound'],
        correct: 2,
        why: BORROW_CLAIM,
      },
      {
        q: 'So what will the ear never tell you here?',
        opts: [
          'Whether the plain form or the short form was used',
          'Whether the short form or the woman form was used',
          'Neither of those',
        ],
        correct: 1,
        why: `${AUDIBLE_CLAIM} Everything else on the grid is one of two noises, so the page is the only place it shows.`,
      },
    ],
    terms: ['whatYouCanHear', 'theShortOne'],
  },

  {
    /* THE SILENT H, AND IT IS THE STRONGEST EVIDENCE IN THE LESSON.
       The brief asks for the vieux monsieur / vieil homme pair on the grounds
       that "the h is silent and the collision happens anyway". Measured, the
       corpus already holds `C'est un bel homme.` in the same frame as `C'est un
       bel arbre.`, so the pair is same-adjective and same-frame, which is
       stronger than the brief's cross-adjective version: the ONLY thing that
       differs between the two rows is whether the next word starts with a vowel
       letter or with a silent h, and the answer is the same either way.

       sons.07's grammarIntroduced carries `h-aspire-vs-h-muet` in as many
       words, so this is a rule the learner already holds. */
    type: 'examples',
    id: SILENT_H_SECTION_ID,
    title: 'The H That Is Not There',
    frSub: 'Le h muet',
    layer: 'core',
    say: SILENT_H_ARITHMETIC,
    examples: [
      { fr: importedFr(silentHPartnerId), en: importedEn(silentHPartnerId), note: 'A vowel at the front of the next word, on the page and in the mouth. The short form, for the obvious reason.' },
      { fr: importedFr(silentHId), en: importedEn(silentHId), note: 'A consonant at the front of the next word ON THE PAGE. The short form anyway, because there is no consonant in the mouth and the mouth is what decides.' },
      { fr: fr(phraseId('beau')), en: en(phraseId('beau')), note: `And the control. A real consonant, so the plain form, and the difference between this row and the one above it is invisible in writing.` },
      { fr: `${ELISION_UNIT} · ${ELISION_REFRAME}`, en: 'the lesson that already told you', note: 'The same h behaves the same way in front of the little words, and that is where you met it. Nothing new has been introduced here.' },
    ],
    terms: ['aVowelIsComing', 'onlyForAMan'],
  },

  {
    type: 'reading',
    id: READING_SECTION_ID,
    title: 'The Flat, Described',
    frSub: 'L’appartement',
    layer: 'core',
    questionsInModal: true,
    // ONE BLOCK. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline
    // is silently discarded, so writing one would produce a passage that reads
    // correctly in this file and renders as a single run on the device anyway.
    // `et c'est exactement ce que nous voulions` was the first ending and the
    // batch's -ment guard fired on it. `exactement` is an adverb built off a
    // feminine adjective, which is a2.17's whole subject, and it went in
    // without a thought because it is ordinary French. That is the argument for
    // guarding the THING rather than the letters: a suffix guard would have
    // missed it among four legitimate -ment nouns in the same passage.
    text: 'Nous avons déménagé le mois dernier. C\'est un bel immeuble, assez vieux, dans une rue calme. Notre appartement est petit mais il est très beau : les fenêtres sont belles et il y a un vieil arbre devant la porte. Le voisin du troisième est un vieil homme très gentil ; il connaît tout le monde ici. Il y a aussi un nouvel habitant au deuxième, et deux nouveaux commerces au coin de la rue. Les rues sont vieilles et les magasins sont nouveaux, et c\'est ce que nous voulions.',
    glossary: [
      { word: 'déménagé', en: 'moved house', note: 'Past tense, which you have not had yet. Read it as a fact about the story rather than as something to build.' },
      { word: 'immeuble', en: 'building', note: 'Starts with a vowel sound, so look at the describing word in front of it.' },
      { word: 'habitant', en: 'resident', note: 'Starts with a silent h, so it counts as a vowel and the word in front of it is the short one.' },
      { word: 'commerces', en: 'shops', note: 'Several of them, and masculine, so the describing word in front takes an x.' },
      { word: 'coin', en: 'corner', note: 'A consonant at the front, and nothing in front of it had to change.' },
    ],
    questions: [
      { q: 'Three describing words in this passage are two letters shorter than their plain form. What do the words after all three have in common?', a: 'Every one of them starts with a vowel sound. Two start with a vowel letter and one starts with a silent h.' },
      { q: 'The passage says les rues sont vieilles and les magasins sont nouveaux. Why does one take an s and the other an x?', a: 'One is the woman form, which takes an ordinary s. The other is the plain form of a word that takes an x in the plural.' },
      { q: 'Would anything sound different if the writer had put the plain form in front of immeuble?', a: 'Yes. It is the one difference in this whole lesson you can hear, and it is why the sentence would stop.' },
      { q: 'The building is described as vieux and the neighbour as vieil. Same word. What decided it?', a: 'The sound at the front of the next word, and nothing else. Neither the building nor the neighbour had anything to do with it.' },
    ],
    terms: ['aVowelIsComing', 'theXPlural'],
  },

  {
    type: 'trapDrill',
    id: WHICH_SECTION_ID,
    title: 'Plain One Or Short One?',
    frSub: 'Quelle forme ?',
    layer: 'core',
    size: 'lg',
    rule: {
      title: 'One decision, and it is not about the adjective',
      body: THE_MOVE,
    },
    cards: [
      { promptLabel: 'consonant', promptSound: fr(phraseId('beau')), fr: fr(phraseId('beau')), ipa: '/s‿ɛ tœ̃ bo sak/', tip: `${CONSONANT_NOUN} starts with a consonant, so nothing happens.` },
      { promptLabel: 'vowel', promptSound: importedFr(vowelRowId('beau')), fr: importedFr(vowelRowId('beau')), ipa: '/s‿ɛ tœ̃ bɛ.laʁbʁ/', tip: 'A vowel starts the next word, so the short form.' },
      { promptLabel: 'vowel', promptSound: importedFr(vowelRowId('nouveau')), fr: importedFr(vowelRowId('nouveau')), ipa: '/s‿ɛ tœ̃ nu.vɛ.la.mi/', tip: 'Same again, different word, same two letters gone.' },
      { promptLabel: 'consonant', promptSound: fr(phraseId('vieux')), fr: fr(phraseId('vieux')), ipa: '/s‿ɛ tœ̃ vjø sak/', tip: 'Consonant, so the plain form stands.' },
      { promptLabel: 'silent h', promptSound: importedFr(silentHId), fr: importedFr(silentHId), ipa: '/s‿ɛ tœ̃ bɛ.lɔm/', tip: 'A consonant on the page and a vowel in the mouth. The mouth decides.' },
      { promptLabel: 'vowel', promptSound: importedFr(vowelRowId('vieux')), fr: importedFr(vowelRowId('vieux')), ipa: '/s‿ɛ tœ̃ vjɛ.ji.mœbl/', tip: 'The third word, and the last of the three you have to know.' },
    ],
    // Hand-randomised: MissionRich renders authored order exactly, so a correct
    // answer that sits at index 0 six times running gives itself away.
    drill: [
      { promptSay: `un ___ ${CONSONANT_NOUN}`, opts: [form('nouveau', 'vowel'), form('nouveau', 'plain'), form('nouveau', 'fem')], correct: 1 },
      { promptSay: 'un ___ ami', opts: [form('vieux', 'vowel'), form('vieux', 'plain'), form('vieux', 'fem')], correct: 0 },
      { promptSay: 'un ___ hôtel', opts: [form('beau', 'plain'), form('beau', 'fem'), form('beau', 'vowel')], correct: 2 },
      { promptSay: 'un ___ vélo', opts: [form('beau', 'vowel'), form('beau', 'plain'), form('beau', 'femPl')], correct: 1 },
      { promptSay: 'un ___ appartement', opts: [form('nouveau', 'fem'), form('nouveau', 'vowel'), form('nouveau', 'plain')], correct: 1 },
      { promptSay: 'un ___ château', opts: [form('vieux', 'plain'), form('vieux', 'vowel'), form('vieux', 'fem')], correct: 0 },
    ],
    terms: ['aVowelIsComing'],
  },

  /* ── Act 4: the trap, in both halves ───────────────────────────────────── */

  {
    /* THE MASCULINE-ONLY CONSTRAINT, AND WHY ONLY A WRITTEN SURFACE CAN DRILL
       IT. The brief calls this the second trap and says it matters; the reason
       it matters is that the mistake is INAUDIBLE. « une belle appartement » is
       the right noise and the wrong word, so the ear signs it off.

       The forbidden strings appear here and in the exam's errorSpot round and
       NOWHERE ELSE, and the guards pin them to those two locations, in both
       directions: they must be absent everywhere else AND still present here,
       because a reservation list that has quietly emptied has stopped guarding. */
    type: 'commonErrors',
    id: INVENTED_SECTION_ID,
    title: 'The One Nobody Hears',
    frSub: 'L’erreur inaudible',
    layer: 'core',
    // swipe: true or this renders a blank screen. a1.01 mission 5 and sons.08
    // mission 22 both shipped without it.
    swipe: true,
    size: 'lg',
    errors: [
      {
        wrong: 'une belle appartement',
        right: `un ${form('beau', 'vowel')} appartement`,
        why: `The flat is masculine, so the woman form was never wanted. ${INVENTED_CLAIM}`,
      },
      {
        wrong: `un ${form('beau', 'fem')} ami`,
        right: `un ${form('beau', 'vowel')} ami`,
        why: 'The short form is the one that goes here, and it is four letters shorter than what got written. Same sound, and only the page objects.',
      },
      {
        wrong: `un ${form('vieux', 'fem')} homme`,
        right: `un ${form('vieux', 'vowel')} homme`,
        why: 'A silent h in front of a masculine thing, so the short form, and it is the same trade as the row above.',
      },
      {
        wrong: `Il est ${form('beau', 'vowel')}.`,
        right: fr(cellId('beau', 'plain')),
        why: FRAME_CLAIM,
      },
      {
        wrong: `une ${form('nouveau', 'vowel')} amie`,
        right: `une ${form('nouveau', 'fem')} amie`,
        why: 'The other direction, and it is the one people reach for once they have learned the short form. A feminine thing takes the woman form whatever sound comes next, because there was never a collision to prevent.',
      },
    ],
    terms: ['onlyForAMan'],
  },

  {
    /* THE PLURAL, AND ONLY ONE THIRD OF IT IS THIS LESSON'S.
       a1.14 owns `vieux` by name and a2.03 generalised it to the class, so both
       are NAMED here and neither is re-taught. What is genuinely untaught — and
       it was measured across every grammarIntroduced string in the seed — is
       the -eaux plural. */
    type: 'examples',
    id: PLURAL_SECTION_ID,
    title: 'An X, Not An S',
    frSub: 'Le pluriel en -x',
    layer: 'core',
    say: PLURAL_CLAIM,
    examples: [
      { fr: fr(cellId('beau', 'plainPl')), en: en(cellId('beau', 'plainPl')), note: 'An x. There is no reasoning that gets you here and there is no sound that tells you either. You have to have seen it.' },
      { fr: fr(cellId('nouveau', 'plainPl')), en: en(cellId('nouveau', 'plainPl')), note: 'The second of the two, and the same ending for the same reason.' },
      { fr: fr(cellId('vieux', 'plainPl')), en: en(cellId('vieux', 'plainPl')), note: `The same four letters as the singular, because there is no room after an x for another one. ${PLURAL_UNCHANGED_UNITS.join(' and ')} both told you this and it has not changed.` },
      { fr: fr(cellId('vieux', 'femPl')), en: en(cellId('vieux', 'femPl')), note: 'And here the s does turn up, because the woman form gave it somewhere to go. Compare it with the row above.' },
    ],
    terms: ['theXPlural'],
  },

  {
    type: 'groupDrill',
    id: ERRORS_SECTION_ID,
    title: 'Build It Under Pressure',
    frSub: 'Sous pression',
    layer: 'core',
    size: 'lg',
    say: 'Three groups, and each one gives you a thing rather than a word. Decide what noise it starts with before you decide anything else.',
    groups: ADJ_ORDER.map((a) => ({
      label: `${form(a, 'plain')} · ${importedEn(namingId(form(a, 'plain')))}`,
      items: [rowCard(phraseId(a)), { fr: importedFr(vowelRowId(a)), itemId: vowelRowId(a), note: `[${vowelRespell(a)}] · ${importedEn(vowelRowId(a))}` }],
      check: {
        q: `un ___ ${a === 'beau' ? 'hôtel' : a === 'nouveau' ? 'ordinateur' : 'appartement'}`,
        opts: a === 'nouveau'
          ? [form(a, 'plain'), form(a, 'vowel'), form(a, 'fem')]
          : [form(a, 'vowel'), form(a, 'fem'), form(a, 'plain')],
        correct: a === 'nouveau' ? 1 : 0,
        why: `${a === 'beau' ? 'A silent h, so a vowel sound, so the short form.' : 'A vowel at the front of the next word, so the short form.'} ${form(a, 'fem')} is the right noise and the wrong word, because the thing is masculine.`,
      },
    })),
    terms: ['aVowelIsComing', 'onlyForAMan'],
  },

  /* ── Act 5: out loud ───────────────────────────────────────────────────── */

  {
    type: 'scenario',
    id: SCENARIO_SECTION_ID,
    title: 'Describing The Move',
    frSub: 'Raconter le déménagement',
    layer: 'core',
    setting: 'The same colleague, a week later, and this time he has time for the whole answer. Every reply wants a shape rather than a phrase.',
    turns: [
      {
        ai: 'Alors, ce nouvel appartement ? Il est comment ?',
        en: 'So, this new flat? What is it like?',
        user: "C'est un bel appartement.",
        userEn: 'It is a lovely flat.',
        // TWO ALTERNATIVES MINIMUM ON EVERY TURN. `scenario.logic.test.ts` is a
        // SEED-WIDE test requiring `alts.length >= 2` and a `userEn` — "one
        // accepted answer per turn is the cloze-test failure this content
        // exists to fix" — and nothing in the doctrine, the invariants, the
        // corrections or the ledger mentions it. a2.03 shipped three turns with
        // one alt each, every gate was green, and the suite went red the moment
        // its merge landed.
        alts: [
          { fr: "Il est très beau.", en: 'It is very nice.' },
          { fr: "C'est un bel appartement, oui.", en: 'It is a lovely flat, yes.' },
        ],
      },
      {
        ai: "Et l'immeuble ? Il est récent ?",
        en: 'And the building? Is it recent?',
        user: "Non, c'est un vieil immeuble.",
        userEn: 'No, it is an old building.',
        alts: [
          { fr: "Non, il est vieux.", en: 'No, it is old.' },
          { fr: "Non, c'est un immeuble assez vieux.", en: 'No, it is quite an old building.' },
        ],
      },
      {
        ai: 'Tu connais tes voisins ?',
        en: 'Do you know your neighbours?',
        user: "Oui, il y a un vieil homme très gentil.",
        userEn: 'Yes, there is a very kind old man.',
        alts: [
          { fr: 'Oui, un vieil homme au troisième.', en: 'Yes, an old man on the third floor.' },
          { fr: "Oui, et il y a un nouvel habitant aussi.", en: 'Yes, and there is a new resident too.' },
        ],
      },
      {
        ai: 'Et le quartier ? Il y a des commerces ?',
        en: 'And the neighbourhood? Are there shops?',
        user: 'Oui, il y a deux nouveaux commerces.',
        userEn: 'Yes, there are two new shops.',
        alts: [
          { fr: 'Oui, les commerces sont nouveaux.', en: 'Yes, the shops are new.' },
          { fr: 'Oui, deux nouveaux magasins au coin.', en: 'Yes, two new shops on the corner.' },
        ],
      },
      {
        ai: 'Les rues sont jolies ?',
        en: 'Are the streets pretty?',
        user: 'Oui, elles sont belles. Elles sont vieilles aussi.',
        userEn: 'Yes, they are beautiful. They are old too.',
        alts: [
          { fr: 'Oui, les rues sont belles.', en: 'Yes, the streets are beautiful.' },
          { fr: 'Elles sont vieilles et elles sont belles.', en: 'They are old and they are beautiful.' },
        ],
      },
      {
        ai: 'Tu as pris quoi comme meubles ?',
        en: 'What did you get in the way of furniture?',
        user: "J'ai un vieux sac et deux chaises.",
        userEn: 'I have an old bag and two chairs.',
        alts: [
          { fr: "J'ai gardé mon vieux sac.", en: 'I kept my old bag.' },
          { fr: "Pas grand-chose. Un vieux sac.", en: 'Not much. An old bag.' },
        ],
      },
    ],
    terms: ['theShortOne', 'theXPlural'],
  },

  {
    type: 'dictation',
    id: DICTATION_SECTION_ID,
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    // Sixteen rows. `Elles sont nouvelles.` (18), `Elles sont vieilles.` (17)
    // and `C'est un vieil immeuble.` (19) are all above dicteeMode()'s
    // sixteen-letter ceiling, which switches to WORD tiles, and word mode hands
    // every real word over pre-spelled. A lesson about a spelling tested in
    // word mode is testing nothing. Corrections §4.
    itemIds: DICTEE_IDS,
    say: 'Sixteen sentences, and every one of them turns on letters you cannot hear. Three of the nineteen are too long to spell letter by letter and they are named on the grid instead.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], maxPlays: 3, recordingId: 'rec-a2-16-dictee' },
    terms: ['theXPlural', 'whatYouCanHear'],
  },

  {
    type: 'practice',
    id: SPEAK_SECTION_ID,
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    // `speak`, not `write`. `practice` with skill 'write' draws no writing
    // surface at all. Every item named here carries `voiceflash` — and for the
    // four imported sentences that is true only because this build ADDS it.
    skill: 'speak',
    itemIds: SPEAK_IDS,
    terms: ['whatYouCanHear'],
  },

  {
    type: 'reviewDeck',
    id: REVIEW_SECTION_ID,
    title: 'The Whole Thing, One Deck',
    frSub: 'Tout, en un paquet',
    layer: 'core',
    cards: [
      ...ADJ_ORDER.map((a) => ({
        // No em dash anywhere, and the density validator has its own check for
        // one. A middle dot is the house separator.
        front: `${form(a, 'plain')} · in front of a vowel`,
        back: FORM_ORDER.map((f) => form(a, f)).join(' · '),
        say: vowelFr(a),
      })),
      { front: 'What is the short form made of?', back: BORROW_CLAIM, say: fr(cellId('beau', 'fem')) },
      { front: 'What decides which one you use?', back: THE_MOVE, say: importedFr(vowelRowId('beau')) },
      { front: `Why is there no woman version of it?`, back: FRAME_CLAIM, say: fr(cellId('beau', 'fem')) },
      { front: `Which two take an x?`, back: PLURAL_CLAIM, say: fr(cellId('beau', 'plainPl')) },
      { front: 'What can you actually hear?', back: AUDIBLE_CLAIM, say: fr(phraseId('beau')) },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'progressCheck',
    id: PROGRESS_SECTION_ID,
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: `${REFRAME} The exam has five rounds. Two of them are written rather than spoken, and that is not a preference: the mistake this lesson exists to stop is one nobody can hear, including the person making it.`,
    stats: [
      { k: 'Words', v: String(ADJ_ORDER.length) },
      { k: 'Shapes each', v: `${FORM_COUNT} written, ${SOUND_COUNT} heard` },
      { k: 'New to learn', v: '0. You had all six sounds already.' },
      { k: 'Take an x', v: `${PLURAL_X.length} of ${ADJ_ORDER.length}` },
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
    say: 'Five rounds. Miss too many in a round and you get a drill before the next one starts.',
    rounds: [
      {
        id: 'r1-which-form',
        label: 'Which form',
        // Round targets are ordered deliberately. drillForRound returns the
        // FIRST target that has a drill and then stops, so the first name here
        // is what a failing learner actually gets. Every round leads on a
        // DIFFERENT trigger, which is what makes all five drills reachable.
        targets: ['err-plain-before-vowel', 'err-invented-feminine'],
        say: 'Six. Every one of them turns on the word after the gap.',
        questions: [
          {
            q: `un ___ ${CONSONANT_NOUN}   (${form('beau', 'plain')})`,
            format: 'mcq',
            opts: [form('beau', 'plain'), form('beau', 'vowel'), form('beau', 'fem'), form('beau', 'plainPl')],
            correct: 0,
            why: `${CONSONANT_NOUN} starts with a consonant, so there is no collision and nothing to prevent.`,
            ref: FRONT_SECTION_ID,
          },
          {
            q: `un ___ arbre   (${form('beau', 'plain')})`,
            format: 'mcq',
            opts: [form('beau', 'plain'), form('beau', 'fem'), form('beau', 'vowel'), form('beau', 'femPl')],
            correct: 2,
            why: 'A vowel at the front of the next word. The short form, and it is the woman form two letters shorter.',
            ref: PAIRS_SECTION_ID,
          },
          {
            q: `un ___ ami   (${form('vieux', 'plain')})`,
            format: 'typeIn',
            accept: [form('vieux', 'vowel'), `un ${form('vieux', 'vowel')} ami`],
            answer: form('vieux', 'vowel'),
            why: `${form('vieux', 'fem')} without its last two letters. Same sound, shorter word.`,
            ref: BORROW_SECTION_ID,
          },
          {
            q: `un ___ ordinateur   (${form('nouveau', 'plain')})`,
            format: 'typeIn',
            accept: [form('nouveau', 'vowel'), `un ${form('nouveau', 'vowel')} ordinateur`],
            answer: form('nouveau', 'vowel'),
            why: `${form('nouveau', 'fem')} without the ${DROPPED}. This is the one of the three that had no card anywhere in this course before today.`,
            ref: BORROW_SECTION_ID,
          },
          {
            q: `un ___ hôtel   (${form('beau', 'plain')})`,
            format: 'mcq',
            opts: [form('beau', 'fem'), form('beau', 'plain'), form('beau', 'plainPl'), form('beau', 'vowel')],
            correct: 3,
            why: 'An h on the page and a vowel in the mouth. French listens to the mouth.',
            ref: SILENT_H_SECTION_ID,
          },
          {
            q: 'Listen. Which sentence is this?',
            format: 'listenChoose',
            say: importedFr(vowelRowId('beau')),
            // The ONE audible contrast in the lesson. HOMOPHONE_GROUPS refuses
            // any option pair that differs only by a homophone, and these two
            // differ by the plain form against the short form, which is the
            // only pair in the whole paradigm that is two sounds.
            opts: [fr(phraseId('beau')), importedFr(vowelRowId('beau'))],
            correct: 1,
            why: `${formRespell('beau', 'plain')} against ${formRespell('beau', 'vowel')}. ${AUDIBLE_CLAIM}`,
            ref: ONLY_PAIR_SECTION_ID,
          },
        ],
      },
      {
        id: 'r2-the-borrow',
        label: 'Where it comes from',
        targets: ['err-invented-short', 'err-plain-before-vowel'],
        say: 'Six on what the short form is actually made of.',
        questions: [
          {
            q: `Take the last two letters off ${form('beau', 'fem')}. Type what is left.`,
            format: 'typeIn',
            accept: [form('beau', 'vowel')],
            answer: form('beau', 'vowel'),
            why: BORROW_CLAIM,
            ref: BORROW_SECTION_ID,
          },
          {
            q: `Now the same with ${form('vieux', 'fem')}.`,
            format: 'typeIn',
            accept: [form('vieux', 'vowel')],
            answer: form('vieux', 'vowel'),
            why: `${form('vieux', 'fem')} minus ${DROPPED} is ${form('vieux', 'vowel')}. Three words, one operation.`,
            ref: BORROW_SECTION_ID,
          },
          {
            q: `And ${form('nouveau', 'fem')}.`,
            format: 'typeIn',
            accept: [form('nouveau', 'vowel')],
            answer: form('nouveau', 'vowel'),
            why: BORROW_ARITHMETIC,
            ref: BORROW_SECTION_ID,
          },
          {
            q: `How does ${form('beau', 'vowel')} sound next to ${form('beau', 'fem')}?`,
            format: 'mcq',
            opts: [
              'Shorter, because the word is shorter',
              'The same but with the last sound missing',
              'Longer',
              'Exactly the same',
            ],
            correct: 3,
            why: `Both are ${formRespell('beau', 'vowel')}. Two words on the page and one in the mouth, and two different people wrote those two cards years apart.`,
            ref: BORROW_SECTION_ID,
          },
          {
            q: 'Why does this form exist at all?',
            format: 'mcq',
            opts: [
              'Because French will not let two vowel sounds run into each other',
              'Because these three words are irregular and have to be learned',
              'Because they are old words that kept an older spelling',
              'Because they go in front of the noun rather than after it',
            ],
            correct: 0,
            why: `${ELISION_UNIT} said it first: ${ELISION_REFRAME}`,
            ref: REASON_SECTION_ID,
          },
          {
            q: `${POSSESSIVE_UNIT} taught you « ${POSSESSIVE_EXAMPLE} » rather than « ma amie ». What has that got to do with this?`,
            format: 'mcq',
            opts: [
              'Nothing. One is about possession and one is about describing.',
              'It is the same trade: a form borrowed from the other side so a consonant lands in front of the vowel.',
              'They are both irregular.',
              'Both only happen in front of the letter a.',
            ],
            correct: 1,
            why: CHAIN_CLAIM,
            ref: CHAIN_SECTION_ID,
          },
        ],
      },
      {
        id: 'r3-only-for-a-man',
        label: 'The one nobody hears',
        targets: ['err-invented-feminine', 'err-short-in-predicate'],
        say: 'Six written questions, and they are written because you could not hear any of these go wrong.',
        questions: [
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'une belle appartement',
            accept: [`un ${form('beau', 'vowel')} appartement`, form('beau', 'vowel')],
            answer: `un ${form('beau', 'vowel')} appartement`,
            why: `The flat is masculine, so the woman form was never wanted. ${INVENTED_CLAIM}`,
            ref: INVENTED_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: `un ${form('beau', 'fem')} ami`,
            accept: [`un ${form('beau', 'vowel')} ami`, form('beau', 'vowel')],
            answer: `un ${form('beau', 'vowel')} ami`,
            why: 'Same sound, four letters too many, and a masculine noun in front of it.',
            ref: INVENTED_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: `un ${form('vieux', 'fem')} homme`,
            accept: [`un ${form('vieux', 'vowel')} homme`, form('vieux', 'vowel')],
            answer: `un ${form('vieux', 'vowel')} homme`,
            why: 'A silent h in front of a masculine thing. The short form, and the woman form sounds identical.',
            ref: SILENT_H_SECTION_ID,
          },
          {
            q: `une ___ amie   (${form('nouveau', 'plain')})`,
            format: 'typeIn',
            accept: [form('nouveau', 'fem'), `une ${form('nouveau', 'fem')} amie`],
            answer: form('nouveau', 'fem'),
            why: 'The other direction. A feminine thing takes the woman form whatever sound comes next, because there was never a collision to prevent.',
            ref: INVENTED_SECTION_ID,
          },
          {
            q: 'Which of these is not a French sentence?',
            format: 'mcq',
            opts: [
              `Il est ${form('beau', 'vowel')}.`,
              fr(cellId('beau', 'plain')),
              fr(cellId('beau', 'fem')),
              fr(cellId('beau', 'plainPl')),
            ],
            correct: 0,
            why: FRAME_CLAIM,
            ref: INVENTED_SECTION_ID,
          },
          {
            q: 'Why is this the one mistake in the lesson that a listening test could never catch?',
            format: 'mcq',
            opts: [
              'Because the endings are too quiet',
              'Because French speakers say both',
              'Because the noun comes afterwards',
              'Because the short form and the woman form are the same sound',
            ],
            correct: 3,
            why: INVENTED_ARITHMETIC,
            ref: ONLY_PAIR_SECTION_ID,
          },
        ],
      },
      {
        id: 'r4-the-x',
        label: 'An x, not an s',
        targets: ['err-plural-s', 'err-invented-short'],
        say: 'Six on the half of this you can only get from having seen it written.',
        questions: [
          {
            q: `${PREDICATE_SUBJECT.plainPl} ___ .   (${form('beau', 'plain')})`,
            format: 'typeIn',
            accept: [form('beau', 'plainPl'), fr(cellId('beau', 'plainPl'))],
            answer: form('beau', 'plainPl'),
            why: 'An x. Not an s, and not for a reason anybody could work out.',
            ref: PLURAL_SECTION_ID,
          },
          {
            q: `${PREDICATE_SUBJECT.plainPl} ___ .   (${form('nouveau', 'plain')})`,
            format: 'typeIn',
            accept: [form('nouveau', 'plainPl'), fr(cellId('nouveau', 'plainPl'))],
            answer: form('nouveau', 'plainPl'),
            why: 'The second of the two, same ending.',
            ref: PLURAL_SECTION_ID,
          },
          {
            q: `${PREDICATE_SUBJECT.plainPl} ___ .   (${form('vieux', 'plain')})`,
            format: 'typeIn',
            accept: [form('vieux', 'plainPl'), fr(cellId('vieux', 'plainPl'))],
            answer: form('vieux', 'plainPl'),
            why: `The same four letters as the singular. ${PLURAL_UNCHANGED_UNITS.join(' and ')} both told you so and it is a fact about the letter x rather than about this word.`,
            ref: PLURAL_SECTION_ID,
          },
          {
            q: 'Which of these four is spelled correctly?',
            format: 'mcq',
            opts: [
              `${PREDICATE_SUBJECT.plainPl} beaus.`,
              `${PREDICATE_SUBJECT.plainPl} ${form('beau', 'fem')}.`,
              fr(cellId('beau', 'plainPl')),
              `${PREDICATE_SUBJECT.plainPl} ${form('beau', 'plain')}.`,
            ],
            correct: 2,
            why: 'An x on the end. The first is the s a learner reaches for, the second is the woman form and the third has no plural on it at all.',
            ref: PLURAL_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: `${PREDICATE_SUBJECT.plainPl} vieuxs.`,
            accept: [fr(cellId('vieux', 'plainPl')), form('vieux', 'plainPl'), `${PREDICATE_SUBJECT.plainPl} ${form('vieux', 'plainPl')}`],
            answer: fr(cellId('vieux', 'plainPl')),
            why: 'There is no room after an x for another letter, so nothing goes on the end and the word is finished already.',
            ref: PLURAL_SECTION_ID,
          },
          {
            q: `${PREDICATE_SUBJECT.femPl} ___ .   (${form('vieux', 'plain')})`,
            format: 'typeIn',
            accept: [form('vieux', 'femPl'), fr(cellId('vieux', 'femPl'))],
            answer: form('vieux', 'femPl'),
            why: 'And here an ordinary s does turn up, because the woman form gave it somewhere to go.',
            ref: PLURAL_SECTION_ID,
          },
        ],
      },
      {
        id: 'r5-in-a-sentence',
        label: 'All of it at once',
        targets: ['err-short-in-predicate', 'err-plural-s'],
        say: 'Six, and each one wants a different one of the five shapes.',
        questions: [
          {
            q: `C'est un ___ immeuble.   (${form('vieux', 'plain')})`,
            format: 'typeIn',
            accept: [form('vieux', 'vowel'), `un ${form('vieux', 'vowel')} immeuble`],
            answer: form('vieux', 'vowel'),
            why: 'A vowel at the front of the next word, and a masculine thing, so the short form.',
            ref: PAIRS_SECTION_ID,
          },
          {
            q: `${PREDICATE_SUBJECT.fem} ___ .   (${form('vieux', 'plain')})`,
            format: 'typeIn',
            accept: [form('vieux', 'fem'), fr(cellId('vieux', 'fem'))],
            answer: form('vieux', 'fem'),
            why: 'Nothing follows it, so nothing can collide with it, and the woman form is what stands here.',
            ref: GRID_SECTION_ID,
          },
          {
            q: `C'est un ___ habitant.   (${form('nouveau', 'plain')})`,
            format: 'typeIn',
            accept: [form('nouveau', 'vowel'), `un ${form('nouveau', 'vowel')} habitant`],
            answer: form('nouveau', 'vowel'),
            why: 'A silent h, so a vowel sound, so the short form. The reading passage had this exact phrase in it.',
            ref: READING_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: `Il est ${form('vieux', 'vowel')}.`,
            accept: [fr(cellId('vieux', 'plain')), form('vieux', 'plain'), `Il est ${form('vieux', 'plain')}`],
            answer: fr(cellId('vieux', 'plain')),
            why: FRAME_CLAIM,
            ref: INVENTED_SECTION_ID,
          },
          {
            q: 'Listen. Did the describing word change?',
            format: 'listenChoose',
            say: fr(phraseId('vieux')),
            // Again the ONE audible pair, and again the two options differ by
            // the plain form against the short form rather than by anything
            // silent.
            opts: [fr(phraseId('vieux')), importedFr(vowelRowId('vieux'))],
            correct: 0,
            why: `${formRespell('vieux', 'plain')} against ${formRespell('vieux', 'vowel')}, and this was the first one.`,
            ref: ONLY_PAIR_SECTION_ID,
          },
          {
            q: 'You are about to say a describing word and you have half a second. What do you check?',
            format: 'mcq',
            opts: [
              'Whether the thing is one or several',
              'Whether the word goes in front of the thing or after it',
              'What sound the next word starts with',
              'Whether you have said this word before',
            ],
            correct: 2,
            why: `${REFRAME} ${PLACEMENT_LINE}`,
            ref: REASON_SECTION_ID,
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
    layer: 'core',
    body: CARRY_FORWARD,
    points: [
      FORM_ARITHMETIC,
      BORROW_ARITHMETIC,
      `${ELISION_UNIT} said it about the little words in front of a noun: ${ELISION_REFRAME} It was the same rule then and it is the same rule now.`,
      CHAIN_CLAIM,
      PLURAL_CLAIM,
      `${AUDIBLE_CLAIM} That is why two of the five exam rounds are written.`,
      NEXT_LESSON_LINE,
      `${PLACEMENT_UNIT} owns where the word goes and ${AGREEMENT_UNIT} owns the four shapes underneath these five. Neither of them is this.`,
    ],
  },
];

/* ─── Acts ─────────────────────────────────────────────────────────────── */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The word that would not come out',
    sections: [SCENE_SECTION_ID, GOALS_SECTION_ID, FRONT_SECTION_ID],
    milestone: 'You know what stopped the sentence, and it was not a word you had never learned.',
    estScreens: 18,
    restPoints: [`${SCENE_SECTION_ID}/after-break`],
  },
  {
    id: 'act2',
    title: 'Five shapes, not four',
    sections: [GRID_SECTION_ID, KNOWN_SECTION_ID, HEAR_SECTION_ID],
    milestone: `You can see all five shapes of all three words at once, and you already owned four of them.`,
    estScreens: 22,
    restPoints: [`${GRID_SECTION_ID}/after`],
  },
  {
    id: 'act3',
    title: 'The short one, and where it comes from',
    sections: [PAIRS_SECTION_ID, BORROW_SECTION_ID, REASON_SECTION_ID, CHAIN_SECTION_ID, ONLY_PAIR_SECTION_ID, SILENT_H_SECTION_ID, READING_SECTION_ID],
    milestone: 'You can build the short form of any of the three without having learned it, because it was never a new word.',
    estScreens: 46,
    restPoints: [`${BORROW_SECTION_ID}/after`, `${CHAIN_SECTION_ID}/after`, `${SILENT_H_SECTION_ID}/after`],
  },
  {
    id: 'act4',
    title: 'The two traps',
    sections: [WHICH_SECTION_ID, INVENTED_SECTION_ID, PLURAL_SECTION_ID, ERRORS_SECTION_ID],
    milestone: 'You will not put the woman form in front of a masculine thing, and you will not put an s where an x goes.',
    estScreens: 28,
    restPoints: [`${INVENTED_SECTION_ID}/after-cards`],
  },
  {
    id: 'act5',
    title: 'Out loud',
    sections: [SCENARIO_SECTION_ID, DICTATION_SECTION_ID, SPEAK_SECTION_ID, REVIEW_SECTION_ID],
    milestone: 'You held the conversation the scene lost, and every answer in it wanted a shape rather than a phrase.',
    estScreens: 38,
    restPoints: [`${SCENARIO_SECTION_ID}/after`, `${DICTATION_SECTION_ID}/halfway`],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [PROGRESS_SECTION_ID, QUIZ_SECTION_ID, ROUNDUP_SECTION_ID],
    milestone: 'You got the two written rounds right, which is the half of this no listening test could ever have found.',
    estScreens: 38,
    restPoints: [`${QUIZ_SECTION_ID}/r3-only-for-a-man`],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * A tranche releases items into spaced repetition at the END of an act, and
 * nothing may be released before the act that puts it on a screen.
 *
 * THE FOUR IMPORTED SENTENCES ARE ALL IN ACT 3'S TRANCHE, because act 3 is the
 * first act that draws any of them: the grid in act 2 renders the third form as
 * a CELL off the GRID constant rather than as a card off the row.             */

const DECK_TRANCHE: string[][] = [
  // Act 1 releases NOTHING. The scene runs on prose and on the break card.
  [],
  // Act 2: the twelve predicate cells and the three plain headwords.
  [
    ...ADJ_ORDER.flatMap((a) => adjIds(a)),
    ...ADJ_ORDER.map((a) => namingId(form(a, 'plain'))),
  ],
  // Act 3: the three contrast phrases, the four third-form sentences, the two
  // short-form headwords that existed, the one this build authored, and the
  // three feminines.
  [
    ...ADJ_ORDER.map((a) => phraseId(a)),
    ...EVIDENCE_IDS,
    namingId('bel'), namingId('vieil'),
    'fr.a2.adjectifs-essentiels.056',
    namingId('belle'), namingId('vieille'), namingId('nouvelle'),
  ],
  // Act 4 releases nothing new: both traps are drilled on rows act 2 and act 3
  // have already released, which is the point of a trap act.
  [],
  // Act 5: the two scene rows, which the scenario has just used again.
  ['fr.a2.adjectifs-essentiels.057', 'fr.a2.adjectifs-essentiels.058'],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * FIVE triggers, five drills, five retests, five rounds, and each round leads
 * on a DIFFERENT trigger. `drillForRound` returns the first target that has a
 * drill and then stops, so a drill that is never named first can never fire.
 * a1.05 ships two such drills and its own test fails on them today.            */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-plain-before-vowel',
    description: 'Uses the plain form in front of a vowel, which is the error the scene opens on. It is not a slip: the learner owns the plain form completely and has never been given a reason to reach past it.',
    detectOn: [FRONT_SECTION_ID, PAIRS_SECTION_ID, `${QUIZ_SECTION_ID}/r1-which-form`],
    drill: 'drill-next-sound',
    retest: 'retest-next-sound',
  },
  {
    id: 'err-invented-short',
    description: 'Builds the short form off the plain form rather than off the feminine, producing something with the right letters and the wrong sound. The learner who does this has understood that a form is needed and not what it is made of.',
    detectOn: [BORROW_SECTION_ID, ERRORS_SECTION_ID, `${QUIZ_SECTION_ID}/r2-the-borrow`],
    drill: 'drill-drop-two',
    retest: 'retest-drop-two',
  },
  {
    id: 'err-invented-feminine',
    description: 'Writes the woman form in front of a masculine noun starting with a vowel. It is the commonest error in this subject and it is INAUDIBLE: the two forms are one sound, so the learner hears themselves say the right thing.',
    detectOn: [INVENTED_SECTION_ID, SILENT_H_SECTION_ID, `${QUIZ_SECTION_ID}/r3-only-for-a-man`],
    drill: 'drill-which-noun',
    retest: 'retest-which-noun',
  },
  {
    id: 'err-plural-s',
    description: 'Writes beaus or nouveaus. The learner is applying the plural rule they have and it is the right rule for almost every other describing word in the language.',
    detectOn: [PLURAL_SECTION_ID, `${QUIZ_SECTION_ID}/r4-the-x`],
    drill: 'drill-x-plural',
    retest: 'retest-x-plural',
  },
  {
    id: 'err-short-in-predicate',
    description: 'Puts the short form where nothing follows it, as in « Il est bel. » Comes from learning the form as a property of the word rather than of the position, which is exactly what a1.16 warned it would.',
    detectOn: [INVENTED_SECTION_ID, `${QUIZ_SECTION_ID}/r5-in-a-sentence`],
    drill: 'drill-position',
    retest: 'retest-position',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-next-sound',
    title: 'What starts the next word',
    format: 'sort',
    buckets: ['a vowel sound', 'a consonant sound'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [
      vowelRowId('beau'), phraseId('beau'), vowelRowId('nouveau'),
      phraseId('nouveau'), silentHId, phraseId('vieux'),
    ],
    coach: 'Say the thing being described out loud. Do not look at how it is spelled.',
  },
  {
    id: 'retest-next-sound',
    title: 'One more time',
    format: 'mcq',
    q: 'un ___ arbre',
    opts: [form('beau', 'plain'), form('beau', 'vowel'), form('beau', 'fem')],
    correct: 1,
    why: 'A vowel is coming, so the short form.',
  },
  {
    id: 'drill-drop-two',
    title: 'Take two letters off',
    format: 'flashcard',
    coach: 'The woman form is on the front. Say it, then say it again two letters shorter.',
    pairs: ADJ_ORDER.map((a) => [form(a, 'fem'), form(a, 'vowel')] as [string, string]),
  },
  {
    id: 'retest-drop-two',
    title: 'One more time',
    format: 'mcq',
    q: `${form('nouveau', 'fem')} without its last two letters is ___ .`,
    opts: [form('nouveau', 'plain'), form('nouveau', 'vowel'), form('nouveau', 'plainPl')],
    correct: 1,
    why: BORROW_CLAIM,
  },
  {
    id: 'drill-which-noun',
    title: 'Man or woman, not sound',
    format: 'sort',
    buckets: ['the short one', 'the woman one'],
    items: [
      vowelRowId('beau'), cellId('beau', 'fem'), vowelRowId('nouveau'),
      cellId('nouveau', 'fem'), silentHId, cellId('vieux', 'fem'),
    ],
    coach: 'Both piles sound the same. Ask what is being described, not what you can hear.',
  },
  {
    id: 'retest-which-noun',
    title: 'One more time',
    format: 'mcq',
    q: 'une ___ amie',
    opts: [form('beau', 'vowel'), form('beau', 'fem'), form('beau', 'plain')],
    correct: 1,
    why: 'A feminine thing, so the woman form, whatever sound comes next.',
  },
  {
    id: 'drill-x-plural',
    title: 'Where the s can go',
    format: 'sort',
    buckets: ['takes an x', 'takes an s', 'takes nothing'],
    items: [
      cellId('beau', 'plainPl'), cellId('nouveau', 'plainPl'), cellId('vieux', 'plainPl'),
      cellId('beau', 'femPl'), cellId('nouveau', 'femPl'), cellId('vieux', 'femPl'),
    ],
    coach: 'Look at the last letter of the shape before the ending would go on. If it is already an x, there is nowhere to put one.',
  },
  {
    id: 'retest-x-plural',
    title: 'One more time',
    format: 'mcq',
    q: `${PREDICATE_SUBJECT.plainPl} ___ .`,
    opts: ['beaus', form('beau', 'plainPl'), form('beau', 'femPl')],
    correct: 1,
    why: 'An x, and it is as silent as the s would have been.',
  },
  {
    id: 'drill-position',
    title: 'Is anything following it?',
    format: 'sort',
    buckets: ['something follows it', 'nothing follows it'],
    items: [
      vowelRowId('beau'), cellId('beau', 'plain'), vowelRowId('vieux'),
      cellId('vieux', 'plain'), phraseId('nouveau'), cellId('nouveau', 'plain'),
    ],
    coach: 'The short form only exists to run into the next word. If there is no next word, it cannot be the answer.',
  },
  {
    id: 'retest-position',
    title: 'One more time',
    format: 'mcq',
    q: 'Il est ___ .',
    opts: [form('vieux', 'vowel'), form('vieux', 'plain'), form('vieux', 'fem')],
    correct: 1,
    why: FRAME_CLAIM,
  },
];

/* ─── The reference sheet ───────────────────────────────────────────────────
 *
 * Layer deep. It holds the one thing the in-flow screens cannot: all three
 * adjectives, all five forms and all the respellings at once, which is the
 * fifteen-cell table the brief asks for.
 *
 * NO `cheatSheet`. ReferenceSheet.tsx draws `teach`, `letterGrid` and `table`
 * and nothing else, so a cheatSheet here would render its title and nothing
 * under it. a1.13 ships exactly that today.
 *
 * a2.03's device pass found that a five-column table inside a sheet clips at
 * the right edge and scrolls horizontally, per table. These are six columns
 * wide, so they will too; the in-flow `tapTable` is the one that has to fit
 * without a swipe and it is five columns of short cells.                     */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    title: 'Three words, five shapes each, and how to say them',
    layer: 'deep',
    contains: ['All fifteen', 'What each one sounds like', 'Which one to use', 'What is not here'],
    sections: [
      {
        type: 'table',
        id: 'sheet-grid',
        title: 'All three, every shape',
        layer: 'deep',
        cols: ['Word', ...FORM_ORDER.map((f) => FORM_LABEL[f])],
        rows: ADJ_ORDER.map((a) => [form(a, 'plain'), ...FORM_ORDER.map((f) => form(a, f))]),
      },
      {
        type: 'table',
        id: 'sheet-say',
        title: 'How to say each one',
        layer: 'deep',
        cols: ['Word', ...FORM_ORDER.map((f) => FORM_LABEL[f])],
        rows: ADJ_ORDER.map((a) => [form(a, 'plain'), ...FORM_ORDER.map((f) => formRespell(a, f))]),
      },
      {
        type: 'table',
        id: 'sheet-decide',
        title: 'Which one to use',
        layer: 'deep',
        cols: ['The thing being described', 'And the next word starts with', 'Use'],
        rows: [
          ['one masculine thing', 'a consonant sound', FORM_LABEL.plain.toLowerCase()],
          ['one masculine thing', 'a vowel sound, or a silent h', FORM_LABEL.vowel.toLowerCase()],
          ['one feminine thing', 'anything at all', FORM_LABEL.fem.toLowerCase()],
          ['several masculine things', 'anything at all', FORM_LABEL.plainPl.toLowerCase()],
          ['several feminine things', 'anything at all', FORM_LABEL.femPl.toLowerCase()],
          ['nothing follows it', 'nothing follows it', FORM_LABEL.plain.toLowerCase()],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-why',
        title: 'Why the extra shape is there',
        layer: 'deep',
        body: `${REASON_CLAIM} ${BORROW_ARITHMETIC} ${CHAIN_CLAIM} None of that is a rule you have to hold separately from the ones you already had. It is one habit the language has, and you have been obeying it since your third lesson.`,
      },
      {
        type: 'teach',
        id: 'sheet-carries-forward',
        title: 'What carries forward',
        layer: 'deep',
        body: `${CARRY_FORWARD} ${PLURAL_CLAIM} ${NEXT_LESSON_LINE} ${PLACEMENT_LINE}`,
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ═══════════════════════════════════════════════════════════════════════ */

export const BEAU_NOUVEAU_LESSON: Lesson = {
  id: 'a2.16.l1',
  unitId: 'a2.16',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'Beau, nouveau, vieux',
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`), and a2.16 sits at
  // seq 11. The stored value is a fallback and has to agree with what the
  // renderer computes. The batch checks it against the live unit rather than
  // trusting this comment.
  tag: 'A2 · LEÇON 11',
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped grammar jargon here in v1 because every
  // guard in the band walked `sections`, `sheets` and `terms` and not this. The
  // walk in the batch, the merge and the test includes `intro` and `overview`,
  // and this field is pinned by its own assertion.
  intro:
    'Three describing words in French have a fifth shape that nothing else has, and you use it in front of anything that starts with a vowel sound. It is not a new word to learn: it is the form you already use about a woman, with the last two letters taken off, and it sounds exactly the same. This lesson is about when to reach for it, why it is there at all, and the one mistake it causes that nobody can hear.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v2: THE FIVE-COLUMN GRID BROKE THREE OF ITS COLUMN HEADERS MID-WORD ON A
  // PIXEL 6, AND EVERY HOST GATE WAS GREEN.
  //
  //   The plain one · Before a vowel · For a woman · Several · Several women
  //                                    For a/woma/n  Severa/l  Severa/l wom/en
  //
  // The strings are valid, the table renders, all fifteen cells are on one
  // screen with no horizontal scroll, and only the WIDTH is wrong. It is ledger
  // §a2.14-13's finding in a third field, after the mission title and the term
  // chip, and it is the third time this band has shipped a width defect past
  // three green layers.
  //
  // The measurement is in the failure: `plain` and `vowel` are five characters
  // and set on one line, `woman` is five and did not, because w and m are the
  // two widest lowercase glyphs. So the budget is six characters and at most one
  // w or m past four, and the batch asserts it.
  //
  // The counter moves rather than the body being corrected under v1: two
  // different bodies under one number is the drift this project has lost work to
  // twice, and a2.09 set the precedent of moving the counter rather than
  // relaxing the guard that caught it.
  version: 2,

  grammarAssumed: [
    'That a describing word changes shape to match what it describes, introduced in a1.13 through colour',
    'The feminine -e and the plural -s on a describing word, and that the -s is never pronounced, introduced in a1.13',
    'The irregular feminines belle and vieille by suppletion, introduced in a1.14',
    'That a word already ending in -s or -x does not change in the masculine plural, introduced in a1.14 for vieux and mauvais and generalised to the class in a2.03',
    'The pre-nominal position of this closed set, introduced in a1.16, including bel, vieil and nouvel as position-bound',
    'Adjective agreement as a system of inflectional classes, introduced in a2.03',
    'Elision and the distinction between h muet and h aspiré, introduced in sons.07',
    'The pre-vocalic mon, ton and son in front of a feminine noun, introduced in a1.17',
    'être in the present, introduced in a1.06, which is the frame twelve of the fifteen cells use',
  ],
  grammarIntroduced: [
    'The pre-vocalic masculine as a fifth inflectional cell rather than as a positional variant, completing the account a1.16 began',
    'That the pre-vocalic masculine is phonologically identical to the feminine singular and derivable from it by deletion of the final -le, uniformly across beau, nouveau and vieux',
    'Anti-hiatus as a single productive principle across the language, with elision, the pre-vocalic possessive and the pre-vocalic adjective as three of its realisations',
    'That h muet is transparent to the pre-vocalic rule, extending sons.07 h-aspire-vs-h-muet distinction from proclitics to the adjective',
    'The -eaux masculine plural on beau and nouveau, claimed by no unit at any level before this one',
    'That the pre-vocalic form has no feminine counterpart, because the feminine is already consonant-final and licenses no hiatus',
    'That the pre-vocalic form is licensed only pre-nominally and is ungrammatical in predicate position',
    'That five written forms are realised as two phonological forms, so the pre-vocalic against feminine contrast is undetectable by ear and testable only in writing',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'Beau, Nouveau, Vieux',
    subFr: 'Beau, nouveau, vieux',
    introFr: 'Une cinquième forme, devant une voyelle, et vous la connaissez déjà.',
    minutes: 30,
    difficulty: 3,
    glyph: 'Bel',
    screens: 190,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: BEAU_NOUVEAU_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-16-beau-nouveau.test.ts, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered. Invariants §10: anything the learner must hear as a
    // CONTRAST is one take with one voice, because two recordings are two
    // performances and the learner will hear the performance rather than the
    // language.
    //
    // The brief asks for two pairs to be briefed as ONE TAKE by name and both
    // are below, in rec-a2-16-pairs.
    recorded: [
      {
        id: 'rec-a2-16-pairs',
        desc: 'THE THREE CONTRAST PAIRS, AND THIS IS THE MOST IMPORTANT TAKE IN THE LESSON. Each pair is ONE TAKE, ONE VOICE, the two lines recorded back to back with the smallest gap the recording allows and no change of pitch, pace or weight between them: « C\'est un beau sac. » then « C\'est un bel arbre. »; « C\'est un nouveau sac. » then « C\'est un nouvel ami. »; « C\'est un vieux sac. » then « C\'est un vieil homme. » RECORDED APART, THE LEARNER COMPARES TWO PERFORMANCES INSTEAD OF TWO SOUNDS AND THE ENTIRE TEACHING IS LOST. The third pair matters most and is the hardest: the h of homme is silent, so the reader must NOT pause before it or aspirate it, and the l of vieil runs straight into the vowel exactly as it does in vieil ami. If the reader gives homme even a breath of a consonant, the take proves the opposite of the screen. What must be audible in every pair is the describing word and nothing else; the two nouns differ and that is not the point.',
        clipIds: [
          ...CONTRAST_PAIRS.flatMap((p) => [fr(p.consonant), importedFr(p.vowel)]),
          importedFr(silentHId),
        ],
      },
      {
        id: 'rec-a2-16-grid',
        desc: 'THE FIFTEEN CELLS, THREE TAKES, ONE PER WORD, EACH WORD\'S FIVE IN ONE BREATH GROUP. Within each take the FIRST AND FOURTH lines must be acoustically identical, and so must the SECOND, THIRD AND FIFTH: « Il est beau. » and « Ils sont beaux. » differ on the page and not in the mouth, and a reader who knows the fourth is spelled with an x will lengthen something or put a fraction of a z on it, and that instinct destroys the screen. If a listener with their eyes shut can tell the first from the fourth, or the second from the third, the take is unusable. FIVE WRITTEN SHAPES MUST REACH THE EAR AS TWO. That is the whole claim of the lesson and this take is where it is either proved or lost.',
        clipIds: ADJ_ORDER.flatMap((a) => [...adjIds(a).map((id) => fr(id))]),
      },
      {
        id: 'rec-a2-16-ear',
        desc: 'THE FOUR LINES FOR THE LISTENING SCREEN, WITH AUDIO BEFORE TEXT, IN THIS ORDER: Il est beau, Ils sont beaux, Elle est belle, Elles sont belles. The first pair and the second pair are each ONE take and must be indistinguishable within the pair; the learner is being asked to fail to hear a difference and to notice that they failed. Between the pairs the difference is real and should be left exactly as large as the language makes it, with no help. Do not put anything on the end of beaux.',
        clipIds: adjIds('beau').map((id) => fr(id)),
      },
      {
        id: 'rec-a2-16-borrow',
        desc: 'THE THREE FEMININE-AGAINST-SHORT PAIRS, WHICH ARE THE SAME SOUND TWICE. « belle » then « bel »; « nouvelle » then « nouvel »; « vieille » then « vieil ». Each pair is one take and the two members MUST BE INDISTINGUISHABLE. This is the only take in the lesson whose value is that nothing happens in it, and it is the one a reader will be most tempted to help with, because the two words look different on the page and a reader who can see the page will differentiate them without meaning to. If it is possible to record this take without the reader seeing the spelling of the second member, do that.',
        clipIds: ADJ_ORDER.flatMap((a) => [form(a, 'fem'), form(a, 'vowel')]),
      },
      {
        id: 'rec-a2-16-dictee',
        desc: 'THE SIXTEEN DICTÉE LINES, ONE TAKE EACH, CLEAN AND UNHURRIED, WITH NO CONTRAST INTENT AT ALL. This is the opposite instruction to every other take in the lesson: here the learner is spelling rather than comparing, and any pair-reading would hand them the answer. Read each line as though it were the only line. The x on beaux and nouveaux and the s on belles and vieilles must be neither helped nor hidden; say the sentence the way somebody would say it, which is the whole difficulty the exercise exists to create.',
        clipIds: DICTEE_IDS.map((id) => (AUTHORED_IDS.includes(id) ? fr(id) : importedFr(id))),
      },
      {
        id: 'rec-a2-16-break',
        desc: 'THE BREAK CARD, AND IT IS THE ONE PLACE IN THIS LESSON A WRONG FORM IS SPOKEN. « un beau immeuble » then « un bel immeuble », one take, back to back. The first is NOT to be read as a mistake, with a wince or a rising edge or a pause: it must be read as somebody genuinely trying to say it, which means the two vowels grinding into each other and the phrase almost stopping. That difficulty IS the teaching, and a clean, confident reading of it would teach that the wrong form is perfectly sayable. The second should then arrive easily and at ordinary pace, and the contrast between the effort in the first and the ease of the second is the whole card.',
        clipIds: [`un ${form('beau', 'plain')} immeuble`, `un ${form('beau', 'vowel')} immeuble`],
      },
      {
        id: 'rec-a2-16-scene',
        desc: 'OUTSIDE THE OFFICE IN NANTES. He is friendly, in a hurry, and asking to be polite rather than because he needs to know. « C\'est un grand appartement ? » is quick and light. The learner\'s own line, « Oui, et c\'est un beau... un beau... euh... », is the take that has to be right: two false starts and a stall, and the stall must sound like somebody whose mouth has stopped rather than like somebody who has forgotten a word. There is a difference and it is audible. His last line is cheerful and completely unbothered; nothing in the delivery should suggest he noticed anything, because he did not, and that is what makes it expensive.',
        clipIds: [fr('fr.a2.adjectifs-essentiels.057'), fr('fr.a2.adjectifs-essentiels.058')],
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

export const BEAU_NOUVEAU_SPEAK_IDS = SPEAK_IDS;
export const BEAU_NOUVEAU_DICTEE_IDS = DICTEE_IDS;
export const BEAU_NOUVEAU_ITEM_IDS = ITEM_IDS;
export const BEAU_NOUVEAU_DECK_TRANCHE = DECK_TRANCHE;
export const BEAU_NOUVEAU_ACTS = ACTS;
export const BEAU_NOUVEAU_SECTIONS = SECTIONS;
export const BEAU_NOUVEAU_SHEETS = SHEETS;
export const BEAU_NOUVEAU_DRILLS = DRILLS;
export const BEAU_NOUVEAU_ERROR_TRIGGERS = ERROR_TRIGGERS;
export const BEAU_NOUVEAU_SCENE_BEATS = SCENE_BEATS;
