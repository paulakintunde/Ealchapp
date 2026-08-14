// a2.17.l1 "Les adverbes" , the mission journey.
//
// ── THIS IS A FIRST BUILD ──────────────────────────────────────────────────
//
// Probed rather than assumed: the unit dump says `"lessonIds": []`, so there is
// no pre-v2 stub to rebuild and the version counter starts at 1. Corrections §1
// records that this is true of all sixteen remaining A2 units, and it was
// checked anyway because a2.01's brief said the same thing and was wrong.
//
// ── HOW IT IS SIZED, AND WHY ──────────────────────────────────────────────
//
// TWENTY-FOUR SECTIONS AND SIX ACTS.
//
//   act 1  the order that gave you away   3 missions
//   act 2  where it goes                  3 missions
//   act 3  WHERE IT COMES FROM            7 missions   the heaviest act, alone
//   act 4  the ones it does not reach     4 missions
//   act 5  out loud                       4 missions
//   act 6  prove it                       3 missions
//
// Act 2 is the paradigm act and it is three missions, because placement is one
// fact with no internal structure: the word goes after the verb, there are no
// sub-cases in a simple tense, and the corpus measurement is exceptionless (76
// sentences to 0). Everything worth thirty minutes is in act 3. Doctrine §B.5:
// if the paradigm outweighs the Owns, the wrong lesson was built.
//
// Act 4 is four rather than six because two of its three traps are single
// facts , three words are not derived, and two endings are one sound , and the
// third, bon against bien, is a drill rather than a lecture.
//
// ── THE LAYOUT CLAIMS, AND WHERE THEY ARE ─────────────────────────────────
//
// 1. "The derivation belongs on one screen as a three-step chain: masculine →
//    feminine → adverb, for at least three adjectives, in one section. Split
//    across sections, the chain is invisible and the lesson becomes a
//    vocabulary list of adverbs."
//
//    That is `s07-chain`. THREE ROWS, THREE COLUMNS, and it is a `tapTable`
//    rather than a `table` because a `table` at layer core is a table-in-core
//    density failure (corrections §8) and because the whole finding of this
//    build is that the middle step is AUDIBLE. A tap plays the row.
//
//    THE COLUMN HEADERS ARE a2.16's FIRST TWO, BYTE FOR BYTE. `Plain` and `For
//    her` are that lesson's FORM_LABEL values, and the learner met that grid one
//    mission-list ago. The third column is the new one.
//
//    `sérieusement` is twelve characters and a2.16 measured a FIVE-column cell
//    at about six on a Pixel 6. Three columns is wider and nobody has read the
//    number, so this is the screen the build report names as the one to open
//    first. Every other cell is nine or fewer.
//
// 2. "évidemment and constamment belong side by side, audible, since two
//    spellings and one sound is only teachable as a pair."
//
//    That is `s16-amment`, a `listening` section with both words in it. What an
//    ear question may ASK is constrained by corrections §5: the two suffixes are
//    one sound, so no option pair may differ only there. The stems differ
//    audibly and that is what the questions turn on, and the spelling is tested
//    in the dictée instead, where the learner has to produce a letter the sound
//    cannot give them.
//
// 3. "tapTable fits placement well: a row per sentence, tap to hear where the
//    adverb lands."
//
//    That is `s04-place`, and the columns ARE the word order: `Who · Does ·
//    How`, left to right, which is the rule drawn rather than stated. Five rows,
//    every one of them a published sentence somebody else wrote, and every cell
//    nine characters or fewer.
//
// 4. "trapDrill for the bien/bon confusion." That is `s15-bonbien`.
//
// ── LAYOUT NOTES THAT ARE BUGS, NOT PREFERENCES ───────────────────────────
//
// - `size` is not decoration. density.logic.ts reads `xl` as a 12-word cap on
//   EVERY string in the section except `say`, `hint`, `note`, `why` and `tip`.
// - `commonErrors` needs `swipe: true` or it renders a blank screen.
// - `tapTable` is NOT in ownsLayout(), so it scrolls inside a page.
// - Three term chips per section, maximum, and the ROW is 37 characters wide.
// - ONE quiz per lesson. A second is silently never rendered.
// - `reading` + `glossary` needs `questionsInModal: true` AND questions, and the
//   passage is ONE BLOCK: PassagePage splits on /(?<=[.!?»])\s+/ and an authored
//   newline is silently discarded. A glossary key of five or more words can
//   never match.
// - `practice` with `skill: 'write'` draws no writing surface, and `skill:
//   'speak'` needs `voiceflash` on every item it names. Four imported sentences
//   GAIN `voiceflash` in this build, which is why they can be in it.
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
  ADVERBES_TERMS,
  ALREADY_E_ARITHMETIC,
  AMMENT_ARITHMETIC,
  CARRY_FORWARD,
  CHAIN_ARITHMETIC,
  IRREGULAR_ARITHMETIC,
  NEXT_LESSON_LINE,
  PAYOFF_CLAIM,
  PLACEMENT_ARITHMETIC,
  SOUND_ARITHMETIC,
} from './adverbes-terms.ts';
import {
  ADJ_ORDER,
  AGREEMENT_UNIT,
  ALREADY_E,
  ALREADY_E_CLAIM,
  AMMENT,
  AMMENT_CLAIM,
  AMMENT_RULE_CLAIM,
  A203_REFRAME,
  A203_ROWS,
  AUDIBLE_CLAIM,
  AUTHORED_IDS,
  BON_BIEN_CLAIM,
  CHAIN_CLAIM,
  COMPARATIVE_UNIT,
  CONSONANT_CLAIM,
  DEFERRAL_LINE,
  DICTATION_IDS,
  IRREGULARS,
  IRREGULAR_CLAIM,
  IRREGULAR_FROM,
  MENT,
  NEGATION_EXAMPLE,
  NEGATION_LINE,
  NEGATION_UNIT,
  PASSE_UNIT,
  PLACEMENT_CLAIM,
  PLACEMENT_EVIDENCE,
  PLACEMENT_ROWS,
  PREVIOUS_UNIT,
  REFRAME,
  SOUND_CLAIM,
  STEP_LABEL,
  STEP_ORDER,
  THE_MOVE,
  UNSEEN,
  UNSEEN_CLAIM,
  addedConsonant,
  adverbSentenceId,
  bare,
  chainOf,
  en,
  fr,
  noStop,
  pairId,
  step,
  stepRespell,
  sub,
  type Adj,
} from './adverbes-corpus.ts';
import {
  EVIDENCE_IDS,
  IMPORTED_IDS,
  chainId,
  chainRespell,
  displayRespell,
  importedEn,
  importedFr,
  namingId,
  namingRespell,
} from './adverbes-imported.ts';

export { CARRY_FORWARD, REFRAME, THE_MOVE };

/* ─── Named section ids, so a guard asserts a PLACE rather than a pattern ──
 *
 * Plain literals rather than reads off SECTIONS, so that a section being
 * RENAMED breaks the guard instead of quietly moving it. */

/** The hero: three adjectives, three steps, one screen. */
export const CHAIN_SECTION_ID = 's07-chain';
/** The placement table, whose columns are the word order. */
export const PLACE_SECTION_ID = 's04-place';
/** The Owns made audible: the consonant that comes back. */
export const HEAR_SECTION_ID = 's08-hear';
/** The a2.03 payoff, on its own screen. */
export const PAYOFF_SECTION_ID = 's09-payoff';
/** Two spellings, one sound. */
export const AMMENT_SECTION_ID = 's16-amment';
/** The English order, and the only place outside the scene and the exam it may
 *  appear. */
export const ORDER_SECTION_ID = 's05-order';
/** The generalisation test, in the flow. */
export const UNSEEN_SECTION_ID = 's11-unseen';
/** bon against bien. */
export const BON_BIEN_SECTION_ID = 's15-bonbien';
/** The three that are not built at all. */
export const IRREGULAR_SECTION_ID = 's14-irregular';
/** The rest, named because an act or a guard references them. */
export const SCENE_SECTION_ID = 's01-scene';
export const GOALS_SECTION_ID = 's02-goals';
export const AFTER_SECTION_ID = 's03-after';
export const KNOWN_SECTION_ID = 's06-known';
export const ALREADY_SECTION_ID = 's10-already';
export const READING_SECTION_ID = 's12-reading';
export const DECK_SECTION_ID = 's13-deck';
export const ERRORS_SECTION_ID = 's17-errors';
export const SCENARIO_SECTION_ID = 's18-scenario';
export const DICTATION_SECTION_ID = 's19-dictation';
export const SPEAK_SECTION_ID = 's20-speak';
export const REVIEW_SECTION_ID = 's21-review';
export const PROGRESS_SECTION_ID = 's22-progress';
export const QUIZ_SECTION_ID = 's23-quiz';
export const ROUNDUP_SECTION_ID = 's24-roundup';
export const SHEET_ID = 'sheet.a2.17.adverbes';

/* ─── The items this lesson touches ───────────────────────────────────────
 *
 * 24 authored plus 28 imported, out of five themes. Ten imported rows have a
 * respelling repaired and six gain drills, so that a card can draw them and the
 * mic can score them.                                                        */

const ITEM_IDS = [...new Set([...AUTHORED_IDS, ...IMPORTED_IDS])];

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. Every authored row has it, every imported
 *  headword has it, and the four `nasales` sentences gain it in this build. */
const SPEAK_IDS = [
  ...ADJ_ORDER.flatMap((a) => STEP_ORDER.map((s) => chainId(a, s))),
  ...ADJ_ORDER.filter((a) => a !== 'serieux').flatMap((a) => [pairId(a, 'masc'), pairId(a, 'fem')]),
  ...ADJ_ORDER.map((a) => adverbSentenceId(a)),
  ...PLACEMENT_ROWS.map((r) => r.id),
  'fr.a2.adverbes-essentiels.014',
  'fr.a2.adverbes-essentiels.015',
  'fr.a2.adverbes-essentiels.016',
  'fr.a2.adverbes-essentiels.017',
  'fr.a2.adverbes-essentiels.024',
];

/** One authored row as a deck or drill item. `note` carries the respelling and
 *  the gloss; a card must put SOMETHING under the French. */
const rowCard = (id: string) => ({ fr: fr(id), itemId: id, note: `${sub(id)} · ${en(id)}` });
/** And one imported row, through the accessor that applies the repairs. */
const impCard = (id: string) => ({
  fr: importedFr(id), itemId: id, note: `[${displayRespell(id)}] · ${importedEn(id)}`,
});

/** THE DICTÉE LIST, AND TWO OF ITS TWENTY ROWS ARE BARE WORDS.
 *
 *  Eighteen authored rows carry `dictation`. The two imported ones are
 *  `évidemment` and `constamment`, and they are WORDS rather than sentences for
 *  a measured reason: « C'est évidemment vrai. » is eighteen letters and « Il
 *  travaille constamment. » is twenty-two, so both spell in WORD mode, where
 *  every real word is handed over pre-spelled. The bare words are ten and
 *  eleven. Corrections §4, and the spelling those two rows test is the one thing
 *  in this lesson the ear cannot supply. */
const DICTEE_IDS = [
  ...DICTATION_IDS,
  namingId('évidemment'), namingId('constamment'),
];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 * could not finish. Nobody is rude, nobody is corrected, nothing is
 * mispronounced. The learner runs out of sentence in public.
 *
 * The brief asks for exactly this shape: somebody who has the verb and the
 * adverb, puts them in English order, produces something understood but visibly
 * foreign, and then loses confidence mid-sentence. The stall here is caused by
 * the CORRECTION rather than by the error: the learner hears their own word
 * order, knows it is wrong, stops to fix it, and the stopping costs the turn.
 * Nobody in the room notices anything.
 *
 * THERE IS A WRONG FRENCH SENTENCE IN THIS SCENE, and it is a departure from
 * a2.03 and a2.11, which both refused one. It is right here for the same reason
 * a2.16 gave: the learner is not being asked to recognise the error, they are
 * being asked to recognise their own instinct. « Je souvent mange ici » is what
 * an English speaker's mouth offers first, and a lesson that never shows it is
 * teaching against something it will not name. It appears in the `wrong` half of
 * the break card, in s05-order where it is marked, and in the exam. All three
 * layers pin it to those three locations, in both directions.
 *
 * The break card is BUDGETED, not chosen. Ledger §7, measured on a Pixel 6: a
 * heading of about 13 characters, a body of 24 to 26 words, a coach line under
 * 9 words, and a right-hand reading row whose French stays under about 24
 * characters. « Je mange souvent ici. » is 21.                                */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A Thursday lunchtime in Rennes, in the canteen at work. Somebody from the second floor you have nodded at for a month sits down opposite you with her tray.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'La collègue',
    fr: fr('fr.a2.adverbes-essentiels.023'),
    en: en('fr.a2.adverbes-essentiels.023'),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-17-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Oui, je souvent... euh... je mange... souvent...',
    en: 'Yes, I often... er... I eat... often...',
    stage: 'Five words, and you own every one of them. Your mouth put them in the order your first language uses, you heard it happen, and you stopped to fix it.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'She is still holding her fork. What comes out?',
    options: [
      {
        fr: noStop(fr('fr.a2.adverbes-essentiels.024')),
        respell: `[${bare('fr.a2.adverbes-essentiels.024')}]`,
        en: 'the same five words, in the order French uses',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Yes. Often.',
        en: 'and you have given up on the sentence',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'en-GB' },
      },
    ],
    followUp: {
      works: 'She says the fish is better on Thursdays and you spend the whole lunch hour talking about the canteen, in French.',
      breaks: 'She smiles and starts eating. You have lunch together in silence and she does not sit there again.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La collègue',
    fr: 'Ah, moi aussi. Le poisson du jeudi, hein.',
    en: 'Ah, me too. Thursday fish, eh.',
    stage: 'Nothing went wrong. Nobody corrected anything, because you stopped before the wrong word arrived and the sentence stopped with it.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'break',
    size: 'lg',
    // THE ONE PLACE IN THE FLOW THE ENGLISH ORDER IS SPOKEN. See the block
    // comment above: the claim is that the mouth offers it first, and a lesson
    // that never shows it is teaching against something it will not name.
    heading: 'One order',
    body: 'You did not stall on a word you had not learned. You stalled on where to put one, and your first language answered before you did.',
    wrong: {
      fr: 'Je souvent mange ici.',
      ipa: '/ʒə su.vɑ̃ mɑ̃ʒ i.si/',
      respell: '[zhuh soo-VAHⁿ MAHⁿZH ee-SEE]',
      en: 'the order English would give you',
    },
    right: {
      fr: 'Je mange souvent ici.',
      ipa: '/ʒə mɑ̃ʒ su.vɑ̃ i.si/',
      respell: '[zhuh MAHⁿZH soo-VAHⁿ ee-SEE]',
      en: 'and this is the one',
    },
    coach: 'The verb first, then how.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-17-break' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: `${PLACEMENT_CLAIM} And by the end of this you will be able to build the word for how somebody does something out of any describing word you own.`,
  },
];

/** a2.03's reframe, quoted verbatim on the payoff screen. */
const A203_UNIT_QUOTE = A203_REFRAME;
/** The placement measurement as a stat value, short enough for a `progressCheck`
 *  cell. Derived off PLACEMENT_EVIDENCE so the two figures cannot drift apart. */
const PLACEMENT_EVIDENCE_TEXT =
  `After the verb, ${PLACEMENT_EVIDENCE.verbThenAdverb} times out of ${PLACEMENT_EVIDENCE.verbThenAdverb}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the order that gave you away ───────────────────────────────── */

  {
    type: 'scene',
    id: SCENE_SECTION_ID,
    title: 'Lunch On The Second Floor',
    frSub: 'À la cantine',
    render: 'screens',
    layer: 'core',
    setting: { place: 'The canteen at work', city: 'Rennes', time: 'Thursday lunchtime' },
    beats: SCENE_BEATS,
    closing: { text: REFRAME, size: 'md' },
    terms: ['afterTheVerb'],
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
      { t: 'Put it in the right place', s: PLACEMENT_ARITHMETIC },
      { t: 'Build one from any describing word', s: `${REFRAME} ${CHAIN_CLAIM}` },
      { t: 'Hear whether you built it right', s: CONSONANT_CLAIM },
      { t: 'Know the three that are not built', s: IRREGULAR_CLAIM },
    ],
  },

  {
    type: 'examples',
    id: AFTER_SECTION_ID,
    title: 'The Verb, Then How',
    frSub: 'Le verbe, puis comment',
    layer: 'core',
    say: `${PLACEMENT_CLAIM} Four sentences. In every one of them the word on the end is the one English would have put in the middle.`,
    examples: [
      { fr: fr('fr.a2.adverbes-essentiels.014'), en: en('fr.a2.adverbes-essentiels.014'), note: 'Verb first, then how often. English does the opposite and it is the only thing you have to unlearn here.' },
      { fr: fr(adverbSentenceId('lent')), en: en(adverbSentenceId('lent')), note: 'A long one, in exactly the same place. Length makes no difference at all.' },
      { fr: fr('fr.a2.adverbes-essentiels.015'), en: en('fr.a2.adverbes-essentiels.015'), note: 'And a short one. Same position, and this is the word you will use most.' },
      { fr: importedFr('fr.sons.nasales.013'), en: importedEn('fr.sons.nasales.013'), note: 'Somebody else wrote this sentence for a pronunciation lesson years ago, and the word order is the same one.' },
    ],
    terms: ['afterTheVerb'],
  },

  /* ── Act 2: where it goes ──────────────────────────────────────────────── */

  {
    /* THE THIRD LAYOUT CLAIM, AND THE COLUMNS ARE THE RULE.
       "tapTable fits placement well: a row per sentence, tap to hear where the
       adverb lands."

       `Who · Does · How`, left to right, so the word order is the picture rather
       than a sentence about a picture. Five rows, every one of them a published
       sentence, every cell nine characters or fewer, and a tap plays the whole
       row so the position is audible as well as visible. */
    type: 'tapTable',
    id: PLACE_SECTION_ID,
    title: 'Who, Does, How',
    frSub: 'Qui, fait, comment',
    layer: 'core',
    say: `${PLACEMENT_CLAIM} Read the columns left to right. That is the order, and every one of these five was written by somebody else for another lesson.`,
    cols: ['Who', 'Does', 'How'],
    rows: PLACEMENT_ROWS.map((p) => ({
      cells: [p.subject, p.verb, p.adverb],
      say: importedFr(p.id),
      detail: {
        title: `${p.verb} ${p.adverb}`,
        body: `« ${noStop(importedFr(p.id))} » ${displayRespell(p.id)}. ${importedEn(p.id)} The last word could not go anywhere else in this sentence.`,
        say: importedFr(p.id),
      },
    })),
    terms: ['afterTheVerb'],
  },

  {
    /* THE ENGLISH ORDER, AND THE ONLY SECTION IN THE FLOW THAT MAY PRINT IT.
       swipe: true or this renders a blank screen. a1.01 mission 5 and sons.08
       mission 22 both shipped without it. */
    type: 'commonErrors',
    id: ORDER_SECTION_ID,
    title: 'The Order You Reach For',
    frSub: 'L’ordre anglais',
    layer: 'core',
    swipe: true,
    size: 'lg',
    errors: [
      {
        wrong: 'Je souvent mange ici.',
        right: fr('fr.a2.adverbes-essentiels.024'),
        why: `${PLACEMENT_CLAIM} This is the sentence the scene stopped on and it is the one your mouth will offer first for months.`,
      },
      {
        wrong: 'Il lentement parle.',
        right: fr(adverbSentenceId('lent')),
        why: 'Same swap, longer word. The length of the word has nothing to do with where it goes.',
      },
      {
        wrong: 'Elle bien chante.',
        right: fr('fr.a2.adverbes-essentiels.015'),
        why: 'And with one of the three that are not built from anything. The rule about position does not care where the word came from.',
      },
      {
        wrong: 'Je toujours mange ici.',
        right: 'Je mange toujours ici.',
        why: 'A different word for how often and the same correction. There is one position and everything goes in it.',
      },
      {
        wrong: 'Il vite court.',
        right: importedFr('fr.a2.verbes.477'),
        why: 'The shortest one in the lesson, and it still goes after the verb. Somebody published this sentence for a verb lesson and the order is the same.',
      },
    ],
    terms: ['afterTheVerb'],
  },

  {
    type: 'cardDeck',
    id: KNOWN_SECTION_ID,
    title: 'Five You Already Own',
    frSub: 'Cinq que vous avez déjà',
    layer: 'core',
    hint: 'Swipe. Every one of these has been on a card in this course already.',
    cards: [
      impCard(namingId('bien')),
      impCard(namingId('mal')),
      impCard(namingId('vite')),
      impCard(namingId('souvent')),
      impCard(namingId('toujours')),
      {
        label: 'And the position',
        head: 'After the verb',
        // PLACEMENT_ARITHMETIC and NEGATION_LINE together ran to 56 words and
        // the density validator caps a core screen at 45. The measurement is
        // what this card is for; the negation line lives in the term and in the
        // sheet, both of which are exempt.
        body: PLACEMENT_ARITHMETIC,
      },
    ],
    terms: ['afterTheVerb', 'theThreeOdd'],
  },

  /* ── Act 3: WHERE IT COMES FROM. The heaviest act, and the Owns. ───────── */

  {
    /* THE HERO, AND THE FIRST LAYOUT CLAIM THE TEST MUST ASSERT.
       "The derivation belongs on one screen as a three-step chain: masculine →
       feminine → adverb, for at least three adjectives, in one section."

       Three rows and three columns. A `table` here would be a table-in-core
       density failure; the full chain with the respellings is in the sheet.

       `Plain` and `For her` are a2.16's FORM_LABEL values byte for byte. The
       learner met that grid one lesson ago and the first two columns of this one
       are the same two columns, which is the continuity worth having. */
    type: 'tapTable',
    id: CHAIN_SECTION_ID,
    title: 'Three Steps, Not Two',
    frSub: 'Trois étapes',
    layer: 'core',
    say: `${CHAIN_CLAIM} ${REFRAME} Tap a row to hear all three.`,
    cols: STEP_ORDER.map((s) => STEP_LABEL[s]),
    rows: ADJ_ORDER.map((a) => ({
      cells: chainOf(a),
      say: step(a, 'adverb'),
      detail: {
        title: `${step(a, 'masc')} · ${step(a, 'adverb')}`,
        // The three respellings side by side, which is where the arithmetic
        // becomes visible: the middle one is the first plus a consonant, and the
        // last one is the middle one plus an ending.
        body: `${STEP_ORDER.map((s) => stepRespell(a, s)).join(' · ')}. There is no ${addedConsonant(a).toLowerCase()} in ${step(a, 'masc')} and there is one in ${step(a, 'fem')}, and that is the sound you keep.`,
        say: step(a, 'fem'),
      },
    })),
    terms: ['theChain', 'youCanHearIt'],
  },

  {
    /* THE OWNS MADE AUDIBLE, AND IT IS THE MISSION THE BUILD EXISTS FOR.
       Three pairs, plain form against woman form, and the learner is asked what
       arrived. Every one of the three arrivals is a different consonant, which
       is what makes it a rule rather than a fact about one word. */
    type: 'listening',
    id: HEAR_SECTION_ID,
    title: 'The Sound That Comes Back',
    frSub: 'Le son qui revient',
    layer: 'core',
    swipe: true,
    say: `${SOUND_CLAIM} Listen to each pair before you answer anything.`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-17-chain' },
    lines: [
      { fr: fr(pairId('lent', 'masc')), en: en(pairId('lent', 'masc')) },
      { fr: fr(pairId('lent', 'fem')), en: en(pairId('lent', 'fem')) },
      { fr: fr(pairId('doux', 'masc')), en: en(pairId('doux', 'masc')) },
      { fr: fr(pairId('doux', 'fem')), en: en(pairId('doux', 'fem')) },
    ],
    questions: [
      {
        q: 'The first two. What is on the end of the second one that is not on the end of the first?',
        opts: ['A t sound', 'Nothing, they are the same', 'An s sound'],
        correct: 0,
        why: `${stepRespell('lent', 'masc')} against ${stepRespell('lent', 'fem')}. The t is written in both and said in one.`,
      },
      {
        q: 'And the second pair?',
        opts: ['A t sound', 'An s sound', 'Nothing'],
        correct: 1,
        why: `${stepRespell('doux', 'masc')} against ${stepRespell('doux', 'fem')}. A different consonant, and the same thing happening.`,
      },
      {
        q: 'So where does the sound in the middle of the long word come from?',
        opts: [
          'The plain form',
          'The word for a woman',
          'It is part of the ending',
        ],
        correct: 1,
        why: CONSONANT_CLAIM,
      },
    ],
    terms: ['youCanHearIt', 'theChain'],
  },

  {
    /* THE a2.03 PAYOFF, ON ITS OWN SCREEN AND NOT AS A TABLE ROW.
       Every cell of this row is a published card the learner has already been
       given: fr.sons.adjectifs-essentiels.037, a2.03's own
       fr.a2.adjectifs-essentiels.019, and fr.sons.adverbes-essentiels.021. This
       build changed one character in the third of them. The brief asks for a2.03
       to be named by unit id and this is where it is. */
    type: 'examples',
    id: PAYOFF_SECTION_ID,
    title: 'You Were Given This',
    frSub: 'Vous l’avez déjà',
    layer: 'core',
    say: PAYOFF_CLAIM,
    examples: [
      { fr: importedFr(A203_ROWS.mascSentence), en: importedEn(A203_ROWS.mascSentence), note: `${AGREEMENT_UNIT} taught you this one and the x on the end of it is silent.` },
      { fr: importedFr(A203_ROWS.femSentence), en: importedEn(A203_ROWS.femSentence), note: `${AGREEMENT_UNIT} taught you this one too, on the same screen, and told you the x becomes se. It did not say what for.` },
      { fr: fr(adverbSentenceId('serieux')), en: en(adverbSentenceId('serieux')), note: 'This is what for. The buzz on the end of the middle word is now in the middle of this one, and nobody had to teach you the word.' },
      { fr: `${A203_UNIT_QUOTE}`, en: `${AGREEMENT_UNIT}`, note: 'That sentence was the whole of the last lesson but one, and it is still true. Every one of the other three was a step you have already taken.' },
    ],
    terms: ['theChain', 'unseen'],
  },

  {
    type: 'examples',
    id: ALREADY_SECTION_ID,
    title: 'When Nothing Changes',
    frSub: 'Quand rien ne change',
    layer: 'core',
    say: ALREADY_E_ARITHMETIC,
    examples: [
      { fr: importedFr(namingId('rapide')), en: importedEn(namingId('rapide')), note: 'Already ends in an e, so the word for a woman is the same word and there is nothing to add before the ending.' },
      { fr: fr('fr.a2.adverbes-essentiels.012'), en: en('fr.a2.adverbes-essentiels.012'), note: `${namingRespell('rapide').toLowerCase()} with the ending on it and nothing in between.` },
      { fr: importedFr(namingId('facile')), en: importedEn(namingId('facile')), note: 'The same. One describing word, one form, and the rule has nothing to do.' },
      { fr: fr('fr.a2.adverbes-essentiels.013'), en: en('fr.a2.adverbes-essentiels.013'), note: 'Same subject and same verb as the row above it, so the only thing that moved is the word on the end.' },
    ],
    terms: ['alreadyE', 'theChain'],
  },

  {
    /* THE GENERALISATION TEST, IN THE FLOW.
       Doctrine §B.1: a mission that makes the learner produce a form from a word
       the lesson never showed them has taught the system. Both adjectives are
       absent from this lesson's vocabulary and both answers are real published
       French words the lesson does not import. The guards assert the absence in
       both directions. */
    type: 'trapDrill',
    id: UNSEEN_SECTION_ID,
    title: 'Words You Have Not Met',
    frSub: 'Des mots nouveaux',
    layer: 'core',
    // `size` COMES OFF A STEPPED trapDrill. Ledger 'The trapDrill shape, swept
    // across seq 1..11': the stepped branch of MissionSection sizes off
    // `steps?.length` and no stepped trapDrill in the corpus carries one.
    // THE STEPPED SHAPE, AND IT IS A SEED-WIDE CONTRACT NO DOCUMENT IN THIS BAND
    // MENTIONS. `lesson-contract.test.ts` requires every A2 trapDrill to walk
    // rule > cards > audio > drill, with `swipe`, a `say`, an audio spec and a
    // GATED drill step. Stacked, the reflex check sits under the flip cards in a
    // scrolling page, nothing holds the learner until they answer it, the
    // declared audio plays nowhere, and the pager's header freezes on one
    // mission number because subCount() returns 1 without `steps`. a2.03 and
    // a2.16 both shipped the stacked shape and the contract was written after
    // them; it caught both of this lesson's trapDrills on the first full run.
    swipe: true,
    say: 'Four cards and then six to prove it. Two of the six use words this lesson has never shown you.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-17-unseen' },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'It Works On Anything' },
      { kind: 'cards', label: 'Four words', title: 'Two You Know, Two You Do Not' },
      { kind: 'audio', label: 'Hear it', title: 'The Middle Of The Word' },
      { kind: 'drill', label: 'Prove it', title: 'Build It', gate: true },
    ],
    rule: {
      title: 'It is a rule, so it works on anything',
      body: THE_MOVE,
    },
    cards: [
      { promptLabel: 'you know this', promptSound: step('lent', 'adverb'), fr: step('lent', 'adverb'), ipa: '/lɑ̃t.mɑ̃/', tip: `${step('lent', 'masc')}, then ${step('lent', 'fem')}, then this. You have seen all three.` },
      { promptLabel: 'you know this', promptSound: step('doux', 'adverb'), fr: step('doux', 'adverb'), ipa: '/dus.mɑ̃/', tip: `The same three steps with a different consonant in the middle.` },
      { promptLabel: 'new', promptSound: UNSEEN[0].adverb, fr: UNSEEN[0].adverb, ipa: '/paʁ.fɛt.mɑ̃/', tip: `${UNSEEN[0].adj} becomes ${UNSEEN[0].fem} becomes this. Nobody showed you the middle step and you did not need to be shown.` },
      { promptLabel: 'new', promptSound: UNSEEN[1].adverb, fr: UNSEEN[1].adverb, ipa: '/sɛʁ.tɛn.mɑ̃/', tip: `${UNSEEN[1].adj} becomes ${UNSEEN[1].fem} becomes this. Same operation, third time.` },
    ],
    // Hand-randomised: MissionRich renders authored order exactly, so a correct
    // answer that sits at index 0 four times running gives itself away.
    drill: [
      { promptSay: `${step('lent', 'fem')} + ?`, opts: [step('lent', 'adverb'), 'lentment', 'lentiment'], correct: 0 },
      { promptSay: `${UNSEEN[0].fem} + ?`, opts: [`${UNSEEN[0].adj}ment`, UNSEEN[0].adverb, `${UNSEEN[0].adj}ement`], correct: 1 },
      { promptSay: `${step('doux', 'fem')} + ?`, opts: ['douxment', 'doucment', step('doux', 'adverb')], correct: 2 },
      { promptSay: `${UNSEEN[1].fem} + ?`, opts: [`${UNSEEN[1].adj}ment`, `${UNSEEN[1].adj}ement`, UNSEEN[1].adverb], correct: 2 },
      { promptSay: `${step('serieux', 'fem')} + ?`, opts: [step('serieux', 'adverb'), `${step('serieux', 'masc')}ment`, 'sérieuxment'], correct: 0 },
      { promptSay: `${ALREADY_E[0].adj} + ?`, opts: [`${ALREADY_E[0].adj}ement`, ALREADY_E[0].adverb, 'rapidment'], correct: 1 },
    ],
    terms: ['unseen', 'theChain'],
  },

  {
    type: 'reading',
    id: READING_SECTION_ID,
    title: 'A Day At The Office',
    frSub: 'Une journée au bureau',
    layer: 'core',
    questionsInModal: true,
    // ONE BLOCK. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline
    // is silently discarded. NO COMPOUND TENSE ANYWHERE: the guard is a shape
    // rather than a word list, and it fires on an auxiliary followed within two
    // words by a participle ending. Everything here is the present.
    text: 'Ma collègue Camille arrive toujours avant moi. Elle travaille sérieusement et elle parle doucement, même quand tout le monde crie. Moi je parle vite et je mange souvent à mon bureau, ce qui est une mauvaise idée. Le chef, lui, lit rapidement et répond lentement : il prend son temps et il a raison. Hier il dit à Camille : « Vous comprenez facilement, vous. » Elle chante bien aussi, mais ça, on le sait seulement le vendredi soir.',
    glossary: [
      { word: 'avant', en: 'before', note: 'About time here rather than about place.' },
      { word: 'crie', en: 'shouts', note: 'From crier. The word after it in this sentence tells you how somebody else speaks instead.' },
      { word: 'bureau', en: 'desk, office', note: 'Both meanings, and here it is the desk.' },
      { word: 'prend son temps', en: 'takes his time', note: 'Three words and a fixed phrase. Nothing in it is this lesson.' },
      { word: 'vendredi', en: 'Friday', note: 'One of the seven you had in a1.08.' },
    ],
    questions: [
      { q: 'Six words in this passage say how somebody does something. Where does every single one of them sit?', a: 'After the verb. Not one of them comes in front of it, and that is true of all six.' },
      { q: 'Two of them are built from a describing word that already ends in an e. Which two, and what did the rule have to do?', a: 'Rapidement and facilement. The rule ran and found the word for a woman was the same word, so nothing changed before the ending went on.' },
      { q: 'One of them is not built from anything at all. Which one?', a: 'Bien. Nothing was added to anything to make it, and it is the word you will reach for most often in this whole lesson.' },
      { q: 'Sérieusement and doucement both have a consonant in the middle. Where does each one come from?', a: 'From the word for a woman. Sérieuse has a buzz on the end and douce has an s, and neither sound is in sérieux or doux.' },
    ],
    terms: ['afterTheVerb', 'theChain'],
  },

  {
    type: 'cardDeck',
    id: DECK_SECTION_ID,
    title: 'The Ones You Built',
    // v1 read « Ceux que vous avez faits » and the compound-tense guard fired on
    // it, correctly: it is a passé composé on a learner surface in a lesson that
    // defers the tense to a2.05. The guard found it, not a reader.
    frSub: 'Vos propres mots',
    layer: 'core',
    hint: 'Swipe. Say each one out loud and listen for the consonant in the middle.',
    // THE SENTENCES RATHER THAN THE WORDS. The three long words are already on a
    // screen , they are cells of the chain table two missions earlier , and a
    // deck that repeated them would release nothing new. What has NOT been on a
    // card is any of them inside a sentence, and the tranche guard found that on
    // the first run: act 3 was releasing three rows no act had drawn.
    cards: [
      ...ADJ_ORDER.map((a) => rowCard(adverbSentenceId(a))),
      impCard(namingId('rapidement')),
      impCard(namingId('facilement')),
      {
        label: 'All of them at once',
        head: 'Feminine plus the ending',
        body: `${SOUND_CLAIM} ${REFRAME}`,
      },
    ],
    terms: ['theChain', 'youCanHearIt'],
  },

  /* ── Act 4: the ones it does not reach ─────────────────────────────────── */

  {
    type: 'examples',
    id: IRREGULAR_SECTION_ID,
    title: 'The Three It Misses',
    frSub: 'Les trois exceptions',
    layer: 'core',
    say: IRREGULAR_ARITHMETIC,
    examples: [
      { fr: fr('fr.a2.adverbes-essentiels.015'), en: en('fr.a2.adverbes-essentiels.015'), note: `${IRREGULAR_FROM.bien} gives ${IRREGULARS[0]}, and there is no ${IRREGULAR_FROM.bien}nement. This is the one you will say most often in your life.` },
      { fr: fr('fr.a2.adverbes-essentiels.016'), en: en('fr.a2.adverbes-essentiels.016'), note: `${IRREGULAR_FROM.mal} gives ${IRREGULARS[1]}. Not ${IRREGULAR_FROM.mal}ement either, and the pairing English gives you is broken in both directions.` },
      { fr: fr('fr.a2.adverbes-essentiels.017'), en: en('fr.a2.adverbes-essentiels.017'), note: 'And this one has no describing word behind it at all. It is a word on its own and it always has been.' },
      { fr: importedFr('fr.sons.nasales.078'), en: importedEn('fr.sons.nasales.078'), note: 'Somebody published this for a pronunciation lesson. Verb, then the word for how, exactly as everywhere else.' },
    ],
    terms: ['theThreeOdd'],
  },

  {
    /* bon AGAINST bien, AND IT IS A TRAP RATHER THAN A LECTURE.
       The wrong strings appear here and in the exam and NOWHERE ELSE, and the
       guards pin them to those two locations in both directions: they must be
       absent everywhere else AND still present here, because a reservation list
       that has quietly emptied has stopped guarding. */
    type: 'trapDrill',
    id: BON_BIEN_SECTION_ID,
    title: 'A Thing Or A Doing',
    frSub: 'Bon ou bien ?',
    layer: 'core',
    // `size` comes off a stepped trapDrill; see s11-unseen.
    swipe: true,
    say: 'Four cards and then six to prove it. Every one of the six turns on what the word is describing.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-17-bonbien' },
    steps: [
      { kind: 'rule', label: 'The rule', title: 'Thing Or Doing' },
      { kind: 'cards', label: 'Four cards', title: 'Two Of Each' },
      { kind: 'audio', label: 'Hear it', title: 'Both, Back To Back' },
      { kind: 'drill', label: 'Prove it', title: 'Which One Goes Here?', gate: true },
    ],
    rule: {
      title: 'One goes with a thing and one goes with a doing',
      body: BON_BIEN_CLAIM,
    },
    cards: [
      { promptLabel: 'a thing', promptSound: fr('fr.a2.adverbes-essentiels.018'), fr: fr('fr.a2.adverbes-essentiels.018'), ipa: '/s‿ɛ tœ̃ bɔ̃ ʒuʁ/', tip: 'A day is a thing, so the describing word goes with it.' },
      { promptLabel: 'a doing', promptSound: fr('fr.a2.adverbes-essentiels.015'), fr: fr('fr.a2.adverbes-essentiels.015'), ipa: '/ɛl ʃɑ̃t bjɛ̃/', tip: 'Singing is a doing, so the other word goes with it. « Elle chante bon » is not a sentence.' },
      { promptLabel: 'a doing', promptSound: fr('fr.a2.adverbes-essentiels.016'), fr: fr('fr.a2.adverbes-essentiels.016'), ipa: '/il ʃɑ̃t mal/', tip: 'And the opposite, which is the same shape. Not « il chante mauvais ».' },
      { promptLabel: 'a thing', promptSound: importedFr(namingId('mauvais')), fr: importedFr(namingId('mauvais')), ipa: '/mɔvɛ/', tip: 'The describing word, which goes in front of a thing and never after a doing.' },
    ],
    drill: [
      { promptSay: 'Elle chante ___ .', opts: [IRREGULAR_FROM.bien!, IRREGULARS[0], 'bonne'], correct: 1 },
      { promptSay: `C'est un ___ jour.`, opts: [IRREGULARS[0], IRREGULAR_FROM.bien!, 'bien du'], correct: 1 },
      { promptSay: 'Il chante ___ .', opts: ['mauvaisement', IRREGULAR_FROM.mal!, IRREGULARS[1]], correct: 2 },
      { promptSay: `C'est un ___ film.`, opts: [IRREGULAR_FROM.mal!, IRREGULARS[1], 'malement'], correct: 0 },
      { promptSay: 'Il travaille ___ .', opts: [IRREGULARS[0], IRREGULAR_FROM.bien!, 'bonnement'], correct: 0 },
      { promptSay: 'Elle parle ___ français.', opts: ['bonne', IRREGULAR_FROM.bien!, IRREGULARS[0]], correct: 2 },
    ],
    terms: ['theThreeOdd'],
  },

  {
    /* THE SECOND LAYOUT CLAIM: "évidemment and constamment belong side by side,
       audible, since two spellings and one sound is only teachable as a pair."

       And the constraint corrections §5 puts on it. The two SUFFIXES are one
       sound, so no ear question may offer two options that differ only there;
       what the ear can do is tell the stems apart, and that is what the
       questions ask. The spelling is tested in the dictée, where the learner has
       to produce a letter the sound cannot give them. */
    type: 'listening',
    id: AMMENT_SECTION_ID,
    title: 'Two Spellings, One Sound',
    frSub: 'Deux graphies, un son',
    layer: 'core',
    swipe: true,
    say: `${AMMENT_CLAIM} ${AMMENT_RULE_CLAIM}`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-17-amment' },
    // The describing word, then the long word inside a sentence, twice. The
    // learner hears the two stems as clearly different and the two endings as
    // identical, which is the whole screen. The tranche guard forced the second
    // and fourth lines: act 4 was releasing two sentences no act had drawn.
    lines: [
      { fr: fr('fr.a2.adverbes-essentiels.019'), en: en('fr.a2.adverbes-essentiels.019') },
      { fr: fr('fr.a2.adverbes-essentiels.021'), en: en('fr.a2.adverbes-essentiels.021') },
      { fr: fr('fr.a2.adverbes-essentiels.020'), en: en('fr.a2.adverbes-essentiels.020') },
      { fr: fr('fr.a2.adverbes-essentiels.022'), en: en('fr.a2.adverbes-essentiels.022') },
    ],
    questions: [
      {
        q: `You have just heard both long words. How do their last two syllables compare?`,
        opts: ['They are the same', 'The first is longer', 'The second has an extra sound'],
        correct: 0,
        why: `${AMMENT[0].adverbRespell} and ${AMMENT[1].adverbRespell}. Both end the same way, and on the page one is spelled with an e and one with an a.`,
      },
      {
        q: `And the describing words they come from. Do those two end the same way out loud?`,
        opts: ['No', 'Yes', 'Only the first one has an ending'],
        correct: 1,
        why: `${AMMENT[0].adjRespell} and ${AMMENT[1].adjRespell}. Same nasal, two spellings, and that is where the two spellings on the long words come from.`,
      },
      {
        q: 'So which of these can your ear tell you?',
        opts: [
          'Whether the ending is written with an e or an a',
          'Which describing word the long word came from',
          'Neither of those',
        ],
        correct: 1,
        why: `${AUDIBLE_CLAIM} That is why two lines of the dictée are these two words on their own.`,
      },
    ],
    terms: ['twoSpellings', 'notFromHer'],
  },

  {
    type: 'groupDrill',
    id: ERRORS_SECTION_ID,
    title: 'Build It Under Pressure',
    frSub: 'Sous pression',
    layer: 'core',
    size: 'lg',
    say: 'Three groups. Say the middle step out loud before you answer, even when nobody asked you to.',
    groups: [
      {
        label: `${step('lent', 'masc')} · ${importedEn(chainId('lent', 'masc'))}`,
        items: [rowCard(pairId('lent', 'fem')), rowCard(adverbSentenceId('lent'))],
        check: {
          q: `Il parle ___ .   (${step('lent', 'masc')})`,
          opts: [step('lent', 'adverb'), `${step('lent', 'masc')}ment`, 'lentment'],
          correct: 0,
          why: `${step('lent', 'fem')} first, then the ending. Building it off ${step('lent', 'masc')} loses the t and you would hear that you had.`,
        },
      },
      {
        label: `${step('doux', 'masc')} · ${importedEn(chainId('doux', 'masc'))}`,
        items: [rowCard(pairId('doux', 'fem')), rowCard(adverbSentenceId('doux'))],
        check: {
          q: `Il parle ___ .   (${step('doux', 'masc')})`,
          opts: [`${step('doux', 'masc')}ment`, step('doux', 'adverb'), 'doucment'],
          correct: 1,
          why: `${step('doux', 'fem')} has an s on the end and ${step('doux', 'masc')} has an x that makes no sound at all.`,
        },
      },
      {
        label: `${IRREGULAR_FROM.bien} · good`,
        items: [{ ...impCard(namingId('bien')) }, rowCard('fr.a2.adverbes-essentiels.015')],
        check: {
          q: 'Elle chante ___ .',
          opts: [`${IRREGULAR_FROM.bien}nement`, IRREGULAR_FROM.bien!, IRREGULARS[0]],
          correct: 2,
          why: `${IRREGULAR_FROM.bien} is for a thing and this one is for a doing. There is no word ending in -ment here at all.`,
        },
      },
    ],
    terms: ['theChain', 'theThreeOdd'],
  },

  /* ── Act 5: out loud ───────────────────────────────────────────────────── */

  {
    type: 'scenario',
    id: SCENARIO_SECTION_ID,
    title: 'The Same Lunch, Again',
    frSub: 'Le même déjeuner',
    layer: 'core',
    setting: 'The canteen, a week later, and this time she has the whole hour. Every answer wants the word for how, and it wants it in the right place.',
    turns: [
      {
        ai: 'Vous venez souvent ici, finalement ?',
        en: 'So do you come here often, in the end?',
        user: fr('fr.a2.adverbes-essentiels.024'),
        userEn: en('fr.a2.adverbes-essentiels.024'),
        // TWO ALTERNATIVES MINIMUM ON EVERY TURN. `scenario.logic.test.ts` is a
        // SEED-WIDE test requiring `alts.length >= 2` and a `userEn`, and
        // nothing in the doctrine, the invariants, the corrections or the ledger
        // mentions it. a2.03 shipped three turns with one alt each, every gate
        // was green, and the suite went red the moment its merge landed.
        alts: [
          { fr: fr('fr.a2.adverbes-essentiels.014'), en: en('fr.a2.adverbes-essentiels.014') },
          { fr: 'Oui, je mange toujours ici.', en: 'Yes, I always eat here.' },
        ],
      },
      {
        ai: 'Et votre chef, il parle comment ?',
        en: 'And your boss, how does he speak?',
        user: fr(adverbSentenceId('lent')),
        userEn: en(adverbSentenceId('lent')),
        alts: [
          { fr: fr(adverbSentenceId('doux')), en: en(adverbSentenceId('doux')) },
          { fr: 'Il parle vite, lui.', en: 'He speaks fast, that one.' },
        ],
      },
      {
        ai: 'Et Camille ? Elle travaille bien ?',
        en: 'And Camille? Does she work well?',
        user: fr(adverbSentenceId('serieux')),
        userEn: en(adverbSentenceId('serieux')),
        alts: [
          { fr: 'Oui, elle travaille bien.', en: 'Yes, she works well.' },
          { fr: 'Elle travaille sérieusement, oui.', en: 'She works seriously, yes.' },
        ],
      },
      {
        ai: 'Vous comprenez le chef, vous ?',
        en: 'Do you understand the boss?',
        user: fr('fr.a2.adverbes-essentiels.013'),
        userEn: en('fr.a2.adverbes-essentiels.013'),
        alts: [
          { fr: 'Oui, je comprends facilement.', en: 'Yes, I understand easily.' },
          { fr: 'Pas toujours. Il parle vite.', en: 'Not always. He speaks fast.' },
        ],
      },
      {
        ai: 'Vous chantez ? On cherche des gens pour la chorale.',
        en: 'Do you sing? We are looking for people for the choir.',
        user: fr('fr.a2.adverbes-essentiels.016'),
        userEn: en('fr.a2.adverbes-essentiels.016'),
        alts: [
          { fr: 'Non, je chante mal.', en: 'No, I sing badly.' },
          { fr: fr('fr.a2.adverbes-essentiels.015'), en: en('fr.a2.adverbes-essentiels.015') },
        ],
      },
      {
        ai: 'Bon. Vous êtes là demain ?',
        en: 'Right. Are you here tomorrow?',
        user: 'Oui, évidemment.',
        userEn: 'Yes, obviously.',
        alts: [
          { fr: 'Oui, je suis là tous les jours.', en: 'Yes, I am here every day.' },
          { fr: 'Évidemment. Je mange toujours ici.', en: 'Obviously. I always eat here.' },
        ],
      },
    ],
    terms: ['afterTheVerb', 'theChain'],
  },

  {
    type: 'dictation',
    id: DICTATION_SECTION_ID,
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    // Twenty-one rows, and TWO of them are single words. « C'est évidemment
    // vrai. » is eighteen letters and « Il travaille constamment. » is
    // twenty-two, so both spell in WORD mode, where every real word is handed
    // over pre-spelled. The bare words are ten and eleven and they are the only
    // two rows in the lesson whose spelling the sound cannot give you.
    // Corrections §4.
    itemIds: DICTEE_IDS,
    say: 'Twenty-one rows. Two of them are single words, and those two are the only ones where listening harder will not help you at all.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], maxPlays: 3, recordingId: 'rec-a2-17-dictee' },
    terms: ['twoSpellings', 'youCanHearIt'],
  },

  {
    type: 'practice',
    id: SPEAK_SECTION_ID,
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    // `speak`, not `write`. `practice` with skill 'write' draws no writing
    // surface at all. Every item named here carries `voiceflash` , and for the
    // four `nasales` sentences that is true only because this build ADDS it.
    skill: 'speak',
    itemIds: SPEAK_IDS,
    terms: ['youCanHearIt'],
  },

  {
    type: 'reviewDeck',
    id: REVIEW_SECTION_ID,
    title: 'The Whole Thing, One Deck',
    frSub: 'Tout, en un paquet',
    layer: 'core',
    cards: [
      ...ADJ_ORDER.map((a) => ({
        front: `${step(a, 'masc')} · how?`,
        back: chainOf(a).join(' · '),
        say: step(a, 'adverb'),
      })),
      { front: 'Where does it go?', back: PLACEMENT_CLAIM, say: fr('fr.a2.adverbes-essentiels.014') },
      { front: 'What is the middle step?', back: CONSONANT_CLAIM, say: fr(pairId('lent', 'fem')) },
      { front: 'Which three are not built?', back: IRREGULAR_ARITHMETIC, say: fr('fr.a2.adverbes-essentiels.015') },
      { front: 'Which two endings are one sound?', back: AMMENT_CLAIM, say: importedFr(namingId('évidemment')) },
      { front: 'What if it already ends in an e?', back: ALREADY_E_CLAIM, say: fr('fr.a2.adverbes-essentiels.012') },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'progressCheck',
    id: PROGRESS_SECTION_ID,
    title: 'Where You Stand',
    frSub: 'Où vous en êtes',
    layer: 'core',
    body: `${REFRAME} The exam has five rounds. Two of them ask you to build a word from a describing word this lesson never showed you, and that is the point rather than a cruelty: if the rule only works on the words you were given, it is a list.`,
    stats: [
      { k: 'Steps', v: '3' },
      { k: 'Not built at all', v: String(IRREGULARS.length) },
      { k: 'New words to learn', v: '0. You had the describing words already.' },
      { k: 'Where it goes', v: `${PLACEMENT_EVIDENCE_TEXT}` },
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
        id: 'r1-where-it-goes',
        label: 'Where it goes',
        // Round targets are ordered deliberately. drillForRound returns the
        // FIRST target that has a drill and then stops, so the first name here
        // is what a failing learner actually gets. Every round leads on a
        // DIFFERENT trigger, which is what makes all five drills reachable.
        targets: ['err-english-order', 'err-from-masculine'],
        say: 'Six on position, and the wrong answer is the one your first language offers.',
        questions: [
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'Je souvent mange ici.',
            accept: [fr('fr.a2.adverbes-essentiels.024'), 'Je mange souvent ici.'],
            answer: fr('fr.a2.adverbes-essentiels.024'),
            why: `${PLACEMENT_CLAIM} This is the sentence the scene stopped on.`,
            ref: ORDER_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'Il lentement parle.',
            accept: [fr(adverbSentenceId('lent')), 'Il parle lentement'],
            answer: fr(adverbSentenceId('lent')),
            why: 'Verb first, then how. The length of the word makes no difference.',
            ref: PLACE_SECTION_ID,
          },
          {
            q: `Je mange ___ ici.   (often)`,
            format: 'typeIn',
            accept: ['souvent', 'Je mange souvent ici.'],
            answer: 'souvent',
            why: 'After the verb, where every one of the seventy-six sentences in this course puts it.',
            ref: PLACE_SECTION_ID,
          },
          {
            q: 'Which of these is a French sentence?',
            format: 'mcq',
            opts: [
              fr('fr.a2.adverbes-essentiels.015'),
              'Elle bien chante.',
              'Bien elle chante.',
              'Elle chante bien pas.',
            ],
            correct: 0,
            why: `${PLACEMENT_CLAIM} The other three are the three places English speakers try.`,
            ref: ORDER_SECTION_ID,
          },
          {
            q: 'Listen. Which sentence is this?',
            format: 'listenChoose',
            say: importedFr('fr.a2.verbes.477'),
            // The two options differ by the VERB, not by anything silent, so
            // there is a real difference to hear. Corrections §5.
            opts: [importedFr('fr.a2.verbes.477'), importedFr('fr.a2.verbes.189')],
            correct: 0,
            why: 'Two published sentences, both with the word for how on the end, and the verbs are what your ear had to separate.',
            ref: PLACE_SECTION_ID,
          },
          {
            q: `Where does the word go when the sentence is negative?   (${NEGATION_UNIT})`,
            format: 'mcq',
            opts: [
              'Between the two negative words',
              'Outside the wrap, after both of them',
              'In front of the verb',
              'It cannot be used in a negative sentence',
            ],
            correct: 1,
            why: NEGATION_LINE,
            ref: KNOWN_SECTION_ID,
          },
        ],
      },
      {
        id: 'r2-build-it',
        label: 'Build it',
        targets: ['err-from-masculine', 'err-english-order'],
        say: 'Six, and two of them use describing words this lesson never showed you.',
        questions: [
          {
            q: `${step('lent', 'masc')} describes a man. ${step('lent', 'fem')} describes a woman. Type the word for how somebody does it.`,
            format: 'typeIn',
            accept: [step('lent', 'adverb')],
            answer: step('lent', 'adverb'),
            why: `${step('lent', 'fem')} plus the ending. The t you can hear is the middle of the word.`,
            ref: CHAIN_SECTION_ID,
          },
          {
            q: `Now the same with ${step('doux', 'masc')} and ${step('doux', 'fem')}.`,
            format: 'typeIn',
            accept: [step('doux', 'adverb')],
            answer: step('doux', 'adverb'),
            why: `${step('doux', 'fem')} plus the ending, and the s in the middle is a sound ${step('doux', 'masc')} does not have.`,
            ref: CHAIN_SECTION_ID,
          },
          {
            q: `${UNSEEN[0].adj} describes a man and ${UNSEEN[0].fem} describes a woman. This lesson has not shown you either. Build the word for how.`,
            format: 'typeIn',
            accept: [UNSEEN[0].adverb],
            answer: UNSEEN[0].adverb,
            why: `${UNSEEN[0].fem} plus the ending, and it is a real word somebody published years ago. ${UNSEEN_CLAIM}`,
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: `And ${UNSEEN[1].adj}, whose woman form is ${UNSEEN[1].fem}. This lesson has not shown you that one either.`,
            format: 'typeIn',
            accept: [UNSEEN[1].adverb],
            answer: UNSEEN[1].adverb,
            why: `${UNSEEN[1].fem} plus the ending. Two rules run one after the other, one from ${AGREEMENT_UNIT} and one from here, on a word neither lesson listed.`,
            ref: UNSEEN_SECTION_ID,
          },
          {
            q: `Which form do you build it from?`,
            format: 'mcq',
            opts: [
              'The plain one',
              'The plural',
              'It does not matter, they give the same word',
              'The one for a woman',
            ],
            correct: 3,
            why: CONSONANT_CLAIM,
            ref: HEAR_SECTION_ID,
          },
          {
            q: `${ALREADY_E[0].adj} already ends in an e. Type the word for how.`,
            format: 'typeIn',
            accept: [ALREADY_E[0].adverb],
            answer: ALREADY_E[0].adverb,
            why: ALREADY_E_CLAIM,
            ref: ALREADY_SECTION_ID,
          },
        ],
      },
      {
        id: 'r3-the-three',
        label: 'The three it misses',
        targets: ['err-regularised-irregular', 'err-bon-for-bien'],
        say: 'Six on the words the rule does not reach, which are the three you will use most.',
        questions: [
          {
            q: 'Elle chante ___ .   (well)',
            format: 'typeIn',
            accept: [IRREGULARS[0], fr('fr.a2.adverbes-essentiels.015')],
            answer: IRREGULARS[0],
            why: `Not ${IRREGULAR_FROM.bien}nement. There is no such word and there never has been.`,
            ref: IRREGULAR_SECTION_ID,
          },
          {
            q: 'Il chante ___ .   (badly)',
            format: 'typeIn',
            accept: [IRREGULARS[1], fr('fr.a2.adverbes-essentiels.016')],
            answer: IRREGULARS[1],
            why: `Not ${IRREGULAR_FROM.mal}ement. Three letters, and it is the opposite of the one above.`,
            ref: IRREGULAR_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'Il parle rapidement et il court vitement.',
            accept: ['Il parle rapidement et il court vite.', 'vite'],
            answer: 'Il parle rapidement et il court vite.',
            why: 'The first one is built and the second one is not. There is no describing word behind the second, so there is nothing to build it from.',
            ref: IRREGULAR_SECTION_ID,
          },
          {
            q: 'Which of these four is not a French word?',
            format: 'mcq',
            opts: [
              step('lent', 'adverb'),
              ALREADY_E[1].adverb,
              `${IRREGULAR_FROM.bien}nement`,
              step('doux', 'adverb'),
            ],
            correct: 2,
            why: `${IRREGULAR_ARITHMETIC}`,
            ref: IRREGULAR_SECTION_ID,
          },
          {
            q: 'Listen. Which of these did you hear?',
            format: 'listenChoose',
            say: fr('fr.a2.adverbes-essentiels.015'),
            opts: [fr('fr.a2.adverbes-essentiels.016'), fr('fr.a2.adverbes-essentiels.015')],
            correct: 1,
            why: 'Two of the three that are not built, in the same frame, and the difference is the whole word rather than an ending.',
            ref: IRREGULAR_SECTION_ID,
          },
          {
            q: 'Why are these three worth naming separately?',
            format: 'mcq',
            opts: [
              'Because they are rare',
              'Because they are all short',
              'Because they are the three you will say most often and the rule does not reach any of them',
              'Because they only work with certain verbs',
            ],
            correct: 2,
            why: IRREGULAR_CLAIM,
            ref: IRREGULAR_SECTION_ID,
          },
        ],
      },
      {
        id: 'r4-bon-or-bien',
        label: 'A thing or a doing',
        targets: ['err-bon-for-bien', 'err-regularised-irregular'],
        say: 'Six, and each one turns on whether the word is describing a thing or a doing.',
        questions: [
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'Elle chante bon.',
            accept: [fr('fr.a2.adverbes-essentiels.015'), IRREGULARS[0]],
            answer: fr('fr.a2.adverbes-essentiels.015'),
            why: `${BON_BIEN_CLAIM} Singing is a doing.`,
            ref: BON_BIEN_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'Il travaille bon.',
            accept: ['Il travaille bien.', IRREGULARS[0]],
            answer: 'Il travaille bien.',
            why: 'Working is a doing too, and the same word goes with all of them.',
            ref: BON_BIEN_SECTION_ID,
          },
          {
            q: `C'est un ___ jour.`,
            format: 'typeIn',
            accept: [IRREGULAR_FROM.bien!, fr('fr.a2.adverbes-essentiels.018')],
            answer: IRREGULAR_FROM.bien!,
            why: 'A day is a thing, so this one takes the describing word rather than the other one.',
            ref: BON_BIEN_SECTION_ID,
          },
          {
            q: 'Which one goes with a doing?',
            format: 'mcq',
            opts: [IRREGULAR_FROM.bien!, 'bonne', IRREGULARS[0], 'bons'],
            correct: 2,
            why: BON_BIEN_CLAIM,
            ref: BON_BIEN_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: 'Il chante mauvais.',
            accept: [fr('fr.a2.adverbes-essentiels.016'), IRREGULARS[1]],
            answer: fr('fr.a2.adverbes-essentiels.016'),
            why: `${IRREGULAR_FROM.mal} goes in front of a thing. For a doing it is the other word, and it is three letters long.`,
            ref: BON_BIEN_SECTION_ID,
          },
          {
            q: 'English lets you say « he sings good ». What does French do?',
            format: 'mcq',
            opts: [
              'The same, in conversation',
              'It does not allow it at all',
              'It allows it after some verbs',
              'It allows it in writing only',
            ],
            correct: 1,
            why: BON_BIEN_CLAIM,
            ref: BON_BIEN_SECTION_ID,
          },
        ],
      },
      {
        id: 'r5-all-of-it',
        label: 'All of it at once',
        targets: ['err-amment-spelling', 'err-from-masculine'],
        say: 'Six, and two of them ask for a letter your ear cannot give you.',
        questions: [
          {
            q: `${AMMENT[0].adj} ends in ${AMMENT[0].adjEnding}. Type the word for how.`,
            format: 'typeIn',
            accept: [AMMENT[0].adverb],
            answer: AMMENT[0].adverb,
            why: `${AMMENT[0].adjEnding} gives ${AMMENT[0].adverbEnding}, and it is said as though it were spelled the other way. The woman form plays no part here.`,
            ref: AMMENT_SECTION_ID,
          },
          {
            q: `${AMMENT[1].adj} ends in ${AMMENT[1].adjEnding}. Type the word for how.`,
            format: 'typeIn',
            accept: [AMMENT[1].adverb],
            answer: AMMENT[1].adverb,
            why: `${AMMENT[1].adjEnding} gives ${AMMENT[1].adverbEnding}. Same sound as the one above and a different letter on the page.`,
            ref: AMMENT_SECTION_ID,
          },
          {
            q: 'Which of these two is spelled correctly?',
            format: 'mcq',
            opts: [
              AMMENT[0].adverb,
              `${AMMENT[0].adj.slice(0, -3)}amment`,
              `${AMMENT[0].adj}ement`,
              `${AMMENT[0].adj}ment`,
            ],
            correct: 0,
            why: `The describing word ends ${AMMENT[0].adjEnding}, so the ending is ${AMMENT[0].adverbEnding}. The last two options build it off the whole word, which is what the rule would tell you to do and it is wrong here.`,
            ref: AMMENT_SECTION_ID,
          },
          {
            q: `Il travaille ___ .   (${step('serieux', 'masc')})`,
            format: 'typeIn',
            accept: [step('serieux', 'adverb'), fr(adverbSentenceId('serieux'))],
            answer: step('serieux', 'adverb'),
            why: `${step('serieux', 'fem')} plus the ending, and ${AGREEMENT_UNIT} gave you the middle word.`,
            ref: PAYOFF_SECTION_ID,
          },
          {
            q: 'Fix this.',
            format: 'errorSpot',
            prompt: `Elle parle ${step('doux', 'masc')}ment.`,
            accept: [fr(adverbSentenceId('doux')), step('doux', 'adverb'), `Elle parle ${step('doux', 'adverb')}.`],
            answer: `Elle parle ${step('doux', 'adverb')}.`,
            why: `Built off the plain form, so the s never arrived. You would hear that it had not.`,
            ref: HEAR_SECTION_ID,
          },
          {
            q: 'You are about to say how somebody does something and you have half a second. What do you say first, in your head?',
            format: 'mcq',
            opts: [
              'The plain describing word',
              'The word for a woman',
              'The ending',
              'The verb again',
            ],
            correct: 1,
            why: `${REFRAME} ${THE_MOVE}`,
            ref: CHAIN_SECTION_ID,
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
      PLACEMENT_ARITHMETIC,
      CHAIN_ARITHMETIC,
      SOUND_ARITHMETIC,
      `${AGREEMENT_UNIT} said it first: ${A203_REFRAME} You have been building the middle step since then.`,
      IRREGULAR_ARITHMETIC,
      AMMENT_ARITHMETIC,
      ALREADY_E_CLAIM,
      NEXT_LESSON_LINE,
      `${NEGATION_UNIT} owns the wrap and ${COMPARATIVE_UNIT} owns saying somebody does it better. Neither of them is this.`,
    ],
  },
];

/* ─── Acts ─────────────────────────────────────────────────────────────── */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The order that gave you away',
    sections: [SCENE_SECTION_ID, GOALS_SECTION_ID, AFTER_SECTION_ID],
    milestone: 'You know what stopped the sentence, and it was not a word you had never learned.',
    estScreens: 18,
    restPoints: [`${SCENE_SECTION_ID}/after-break`],
  },
  {
    id: 'act2',
    title: 'Where it goes',
    sections: [PLACE_SECTION_ID, ORDER_SECTION_ID, KNOWN_SECTION_ID],
    milestone: 'You can put the word for how in the one place French puts it, and you know why your first language kept offering the other one.',
    estScreens: 20,
    restPoints: [`${PLACE_SECTION_ID}/after`],
  },
  {
    id: 'act3',
    title: 'Where it comes from',
    sections: [CHAIN_SECTION_ID, HEAR_SECTION_ID, PAYOFF_SECTION_ID, ALREADY_SECTION_ID, UNSEEN_SECTION_ID, READING_SECTION_ID, DECK_SECTION_ID],
    milestone: 'You can build the word for how out of any describing word you own, including ones this lesson never showed you.',
    estScreens: 46,
    restPoints: [`${HEAR_SECTION_ID}/after`, `${PAYOFF_SECTION_ID}/after`, `${UNSEEN_SECTION_ID}/after`],
  },
  {
    id: 'act4',
    title: 'The ones it does not reach',
    sections: [IRREGULAR_SECTION_ID, BON_BIEN_SECTION_ID, AMMENT_SECTION_ID, ERRORS_SECTION_ID],
    milestone: 'You will not write bonnement, you will not put bon after a verb, and you know which two endings your ear cannot separate.',
    estScreens: 30,
    restPoints: [`${BON_BIEN_SECTION_ID}/after-cards`],
  },
  {
    id: 'act5',
    title: 'Out loud',
    sections: [SCENARIO_SECTION_ID, DICTATION_SECTION_ID, SPEAK_SECTION_ID, REVIEW_SECTION_ID],
    milestone: 'You held the conversation the scene lost, and every answer in it wanted a word you built rather than a phrase you had.',
    estScreens: 38,
    restPoints: [`${SCENARIO_SECTION_ID}/after`, `${DICTATION_SECTION_ID}/halfway`],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [PROGRESS_SECTION_ID, QUIZ_SECTION_ID, ROUNDUP_SECTION_ID],
    milestone: 'You built two words from describing words this lesson never listed, which is the half of this a list could never have taught you.',
    estScreens: 38,
    restPoints: [`${QUIZ_SECTION_ID}/r3-the-three`],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * A tranche releases items into spaced repetition at the END of an act, and
 * nothing may be released before the act that puts it on a screen.            */

const DECK_TRANCHE: string[][] = [
  // Act 1 releases NOTHING. The scene runs on prose and on the break card.
  [],
  // Act 2: the five placement rows, the sixth that does not fit the table, and
  // the two frequency headwords the deck shows.
  [
    ...PLACEMENT_ROWS.map((r) => r.id),
    'fr.sons.nasales.013',
    namingId('souvent'), namingId('toujours'),
    'fr.a2.adverbes-essentiels.014',
  ],
  // Act 3: the whole chain, the a2.03 pair, the two authored pairs, the three
  // adverb sentences and the already-ends-in-e four.
  [
    ...ADJ_ORDER.flatMap((a) => STEP_ORDER.map((s) => chainId(a, s))),
    A203_ROWS.mascSentence, A203_ROWS.femSentence,
    ...ADJ_ORDER.filter((a) => a !== 'serieux').flatMap((a) => [pairId(a, 'masc'), pairId(a, 'fem')]),
    ...ADJ_ORDER.map((a) => adverbSentenceId(a)),
    namingId('rapide'), namingId('rapidement'), namingId('facile'), namingId('facilement'),
    'fr.a2.adverbes-essentiels.012', 'fr.a2.adverbes-essentiels.013',
  ],
  // Act 4: the three that are not built, the two describing words behind two of
  // them, and the two spellings that are one sound.
  [
    namingId('bien'), namingId('mal'), namingId('vite'),
    namingId('bon'), namingId('mauvais'),
    'fr.a2.adverbes-essentiels.015', 'fr.a2.adverbes-essentiels.016',
    'fr.a2.adverbes-essentiels.017', 'fr.a2.adverbes-essentiels.018',
    'fr.a2.adverbes-essentiels.003', 'fr.a2.adverbes-essentiels.004',
    'fr.a2.adverbes-essentiels.019', 'fr.a2.adverbes-essentiels.020',
    'fr.a2.adverbes-essentiels.021', 'fr.a2.adverbes-essentiels.022',
    namingId('évidemment'), namingId('constamment'),
  ],
  // Act 5: the two scene rows, which the scenario has just used again.
  ['fr.a2.adverbes-essentiels.023', 'fr.a2.adverbes-essentiels.024'],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * FIVE triggers, five drills, five retests, five rounds, and each round leads on
 * a DIFFERENT trigger. `drillForRound` returns the first target that has a drill
 * and then stops, so a drill that is never named first can never fire.        */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-english-order',
    description: 'Puts the word for how in front of the verb, which is where English puts it. It is not a slip: it is the learner\'s first language answering before they do, and it is the error the scene opens on.',
    detectOn: [PLACE_SECTION_ID, ORDER_SECTION_ID, `${QUIZ_SECTION_ID}/r1-where-it-goes`],
    drill: 'drill-position',
    retest: 'retest-position',
  },
  {
    id: 'err-from-masculine',
    description: 'Builds the word off the plain form rather than off the form for a woman, producing something with the right ending and a missing consonant. The learner who does this has the rule and has skipped its middle step.',
    detectOn: [CHAIN_SECTION_ID, HEAR_SECTION_ID, `${QUIZ_SECTION_ID}/r2-build-it`],
    drill: 'drill-middle-step',
    retest: 'retest-middle-step',
  },
  {
    id: 'err-regularised-irregular',
    description: 'Writes bonnement, mauvaisement or vitement. The learner is applying the rule they were just given, correctly, to three words it does not reach, and those three are the ones they will need most.',
    detectOn: [IRREGULAR_SECTION_ID, `${QUIZ_SECTION_ID}/r3-the-three`],
    drill: 'drill-not-built',
    retest: 'retest-not-built',
  },
  {
    id: 'err-bon-for-bien',
    description: 'Puts the describing word after a verb, as in « elle chante bon ». English allows the equivalent in speech and French does not allow it at all, so the learner has no signal that anything went wrong.',
    detectOn: [BON_BIEN_SECTION_ID, `${QUIZ_SECTION_ID}/r4-bon-or-bien`],
    drill: 'drill-thing-or-doing',
    retest: 'retest-thing-or-doing',
  },
  {
    id: 'err-amment-spelling',
    description: 'Writes -amment where -emment belongs or the other way round. It is unhearable by construction: the two endings are one sound, so nothing in the learner\'s ear can settle it and only the describing word behind it can.',
    detectOn: [AMMENT_SECTION_ID, DICTATION_SECTION_ID, `${QUIZ_SECTION_ID}/r5-all-of-it`],
    drill: 'drill-two-spellings',
    retest: 'retest-two-spellings',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-position',
    title: 'Before or after',
    format: 'sort',
    buckets: ['French order', 'English order'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [
      'fr.a2.adverbes-essentiels.014', 'fr.a2.adverbes-essentiels.009',
      'fr.a2.adverbes-essentiels.015', 'fr.a2.adverbes-essentiels.017',
      'fr.sons.nasales.001', 'fr.a2.verbes.477',
    ],
    coach: 'Say each one out loud. The verb comes first and the word for how comes after it, every single time.',
  },
  {
    id: 'retest-position',
    title: 'One more time',
    format: 'mcq',
    q: 'Je ___ ici.',
    opts: ['souvent mange', 'mange souvent', 'souvent'],
    correct: 1,
    why: 'The verb, then how.',
  },
  {
    id: 'drill-middle-step',
    title: 'Say the middle one',
    format: 'flashcard',
    coach: 'The form for a woman is on the front. Say it out loud, listen to the consonant on the end, then say the long word.',
    pairs: ADJ_ORDER.map((a) => [step(a, 'fem'), step(a, 'adverb')] as [string, string]),
  },
  {
    id: 'retest-middle-step',
    title: 'One more time',
    format: 'mcq',
    q: `${step('doux', 'fem')} gives ___ .`,
    opts: [`${step('doux', 'masc')}ment`, step('doux', 'adverb'), 'doucment'],
    correct: 1,
    why: CONSONANT_CLAIM,
  },
  {
    id: 'drill-not-built',
    title: 'Built or not built',
    format: 'sort',
    buckets: ['built from something', 'not built at all'],
    items: [
      'fr.a2.adverbes-essentiels.009', 'fr.a2.adverbes-essentiels.015',
      'fr.a2.adverbes-essentiels.010', 'fr.a2.adverbes-essentiels.016',
      'fr.a2.adverbes-essentiels.012', 'fr.a2.adverbes-essentiels.017',
    ],
    coach: 'Look for the ending. If the word does not have it, there was nothing to build it from.',
  },
  {
    id: 'retest-not-built',
    title: 'One more time',
    format: 'mcq',
    q: 'Elle chante ___ .',
    opts: [`${IRREGULAR_FROM.bien}nement`, IRREGULARS[0], 'biennement'],
    correct: 1,
    why: 'Three letters, and it is not built from anything.',
  },
  {
    id: 'drill-thing-or-doing',
    title: 'A thing or a doing',
    format: 'sort',
    buckets: ['goes with a thing', 'goes with a doing'],
    items: [
      'fr.a2.adverbes-essentiels.018', 'fr.a2.adverbes-essentiels.015',
      'fr.sons.adjectifs-essentiels.004', 'fr.a2.adverbes-essentiels.016',
      'fr.sons.adjectifs-essentiels.003', 'fr.a2.adverbes-essentiels.017',
    ],
    coach: 'Ask what the word is describing. A day is a thing and singing is a doing, and French uses two different words for them.',
  },
  {
    id: 'retest-thing-or-doing',
    title: 'One more time',
    format: 'mcq',
    q: 'Il travaille ___ .',
    opts: [IRREGULARS[0], IRREGULAR_FROM.bien!, 'bonne'],
    correct: 0,
    why: BON_BIEN_CLAIM,
  },
  {
    id: 'drill-two-spellings',
    title: 'e or a',
    format: 'flashcard',
    coach: 'The describing word is on the front. Its last three letters decide the spelling of the long word, and nothing you can hear does.',
    pairs: AMMENT.map((x) => [x.adj, x.adverb] as [string, string]),
  },
  {
    id: 'retest-two-spellings',
    title: 'One more time',
    format: 'mcq',
    q: `${AMMENT[0].adj} gives ___ .`,
    opts: [`${AMMENT[0].adj.slice(0, -3)}amment`, AMMENT[0].adverb, `${AMMENT[0].adj}ement`],
    correct: 1,
    why: `${AMMENT[0].adjEnding} gives ${AMMENT[0].adverbEnding}.`,
  },
];

/* ─── The reference sheet ───────────────────────────────────────────────────
 *
 * Layer deep. It holds the one thing the in-flow screens cannot: the chain, the
 * respellings and the exceptions in one place.
 *
 * NO `cheatSheet`. ReferenceSheet.tsx draws `teach`, `letterGrid` and `table`
 * and nothing else, so a cheatSheet here would render its title and nothing
 * under it. a1.13 ships exactly that today.
 *
 * a2.03's device pass found that a five-column table inside a sheet clips at the
 * right edge and scrolls horizontally, per table. These are four columns wide at
 * most, which is a2.03's own hero width and was clean.                        */

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID,
    title: 'Three steps, three exceptions, and one position',
    layer: 'deep',
    contains: ['The three steps', 'How to say them', 'The ones it misses', 'Where it goes'],
    sections: [
      {
        type: 'table',
        id: 'sheet-chain',
        title: 'The three steps',
        layer: 'deep',
        cols: ['Word', ...STEP_ORDER.map((s) => STEP_LABEL[s])],
        rows: ADJ_ORDER.map((a) => [step(a, 'masc'), ...chainOf(a)]),
      },
      {
        type: 'table',
        id: 'sheet-say',
        title: 'How to say each one',
        layer: 'deep',
        cols: ['Word', ...STEP_ORDER.map((s) => STEP_LABEL[s])],
        rows: ADJ_ORDER.map((a) => [step(a, 'masc'), ...STEP_ORDER.map((s) => stepRespell(a, s))]),
      },
      {
        type: 'table',
        id: 'sheet-exceptions',
        title: 'The ones the rule does not reach',
        layer: 'deep',
        cols: ['Describing word', 'Word for how', 'Why'],
        rows: [
          [IRREGULAR_FROM.bien!, IRREGULARS[0], 'not built from anything'],
          [IRREGULAR_FROM.mal!, IRREGULARS[1], 'not built from anything'],
          ['nothing', IRREGULARS[2], 'no describing word behind it'],
          ...AMMENT.map((x) => [x.adj, x.adverb, `${x.adjEnding} becomes ${x.adverbEnding}`]),
          ...ALREADY_E.map((x) => [x.adj, x.adverb, 'already ends in an e']),
        ],
      },
      {
        type: 'teach',
        id: 'sheet-where',
        title: 'Where it goes',
        layer: 'deep',
        body: `${PLACEMENT_ARITHMETIC} ${NEGATION_LINE} ${DEFERRAL_LINE}`,
      },
      {
        type: 'teach',
        id: 'sheet-carries-forward',
        title: 'What carries forward',
        layer: 'deep',
        body: `${CARRY_FORWARD} ${SOUND_ARITHMETIC} ${UNSEEN_CLAIM} You can now do this to every describing word you have ever met in this course, and nobody has to give you the list.`,
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ═══════════════════════════════════════════════════════════════════════ */

export const ADVERBES_LESSON: Lesson = {
  id: 'a2.17.l1',
  unitId: 'a2.17',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'Les adverbes',
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`), and a2.17 sits at
  // seq 12. The stored value is a fallback and has to agree with what the
  // renderer computes. The batch checks it against the live unit rather than
  // trusting this comment.
  tag: 'A2 · LEÇON 12',
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped grammar jargon here in v1 because every
  // guard in the band walked `sections`, `sheets` and `terms` and not this. The
  // walk in the batch, the merge and the test includes `intro` and `overview`,
  // and this field is pinned by its own assertion.
  intro:
    'French has one word for how something is done and it is built out of a word you already have. Take the form you would use about a woman, say it out loud, and put an ending on it: that is the whole rule, and it works on every describing word you have met in this course including the ones nobody taught you here. This lesson is about that, about the one place the word goes, and about the three commonest ones in the language that are not built at all.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v2: BOTH trapDrills SHIPPED THE STACKED SHAPE AND `lesson-contract.test.ts`
  // CAUGHT THEM, on the first full-suite run after the merge.
  //
  //   a2.17.l1 mission 11 (s11-unseen): trapDrill steps are "",
  //   and A2 walks rule, cards, audio, drill
  //
  // It is a SEED-WIDE contract and no document this band reads mentions it: not
  // the doctrine, not the invariants, not the corrections, not the ledger. Its
  // own comment names a2.03 mission 8 and a2.16 mission 14 as the two lessons
  // that shipped the defect, so the rule was written AFTER the model this build
  // copied from. That is a2.03 §11.1's shape in a second field: the scenario
  // `alts` rule was the first.
  //
  // What the learner lost while it was stacked: the reflex check sat under the
  // flip cards in a scrolling page instead of owning a screen, nothing gated
  // them until they had answered it, the section's declared audio played
  // nowhere, and the pager's header froze on one mission number for the whole
  // section because subCount() returns 1 without `steps`.
  //
  // The counter moves rather than the body being corrected under v1: two
  // different bodies under one number is the drift this project has lost work to
  // twice, and a2.09 set the precedent of moving it rather than relaxing the
  // guard that caught it.
  //
  // v3: `size: 'lg'` CAME OFF BOTH trapDrills. `lesson-contract.test.ts` does
  // not check it and the ledger's own sweep does: "the stepped branch of
  // MissionSection sizes off `steps?.length`, and no stepped trapDrill in the
  // corpus carries a size". v2 stepped them and left the size on, which is the
  // shape the sweep repaired in a2.03 and a2.16 on the same day. Found by
  // reading the ledger section that the contract came from rather than by a
  // gate, which is why the batch now asserts it.
  version: 3,

  grammarAssumed: [
    'That a describing word changes shape to match what it describes, introduced in a1.13 through colour',
    'The feminine -e on a describing word and the silent consonant it makes audible, introduced in a1.14',
    'Adjective agreement as a system of inflectional classes, and the -eux class whose feminine is -euse, introduced in a2.03',
    'The pre-vocalic masculine and the four-form grid it completes, introduced in a2.16',
    'Standard negation with ne… pas around a finite verb, introduced in a1.18',
    'The present of regular -er verbs and of the common irregulars, introduced in a2.01, a2.02 and a2.12',
    'That a final consonant is silent unless a following -e makes it audible, introduced in sons.06',
  ],
  grammarIntroduced: [
    'The derivation of manner adverbs by suffixation of -ment to the feminine singular of the adjective, as a productive rule rather than as a list',
    'That the derivation is PHONOLOGICALLY motivated as well as orthographic: the feminine consonant the masculine leaves unrealised is realised in the adverb, so the base is audible in the derivative',
    'That an adjective whose masculine already ends in -e has a null feminine alternation, so the rule applies vacuously rather than being suspended',
    'The suppletive adverbs bien and mal for bon and mauvais, and vite as an adverb with no adjectival base at all',
    'The categorial distinction between an adjective modifying a noun and an adverb modifying a verb, which English neutralises in colloquial speech',
    'The -ent/-ant class, whose adverbs are -emment and -amment by ending replacement rather than by suffixation to the feminine, and which are homophonous at /amɑ̃/',
    'Post-verbal placement of the manner adverb in a simple tense, and its position outside the discontinuous negative morpheme',
    'That placement in a compound tense is DEFERRED to a2.05, named on the learner surface rather than left silent',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'Adverbs',
    subFr: 'Les adverbes',
    introFr: 'Le mot pour dire comment, et il est déjà dans votre poche.',
    minutes: 30,
    difficulty: 3,
    glyph: 'ment',
    screens: 190,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: ADVERBES_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-17-adverbes.test.ts, because a constraint on
    // how something is recorded becomes invisible the moment the clip is
    // delivered. Invariants §10: anything the learner must hear as a CONTRAST is
    // ONE TAKE with one voice, because two recordings are two performances and
    // the learner will hear the performance rather than the language.
    recorded: [
      {
        id: 'rec-a2-17-chain',
        desc: 'THE THREE PAIRS FOR THE LISTENING SCREEN, AND THIS IS THE MOST IMPORTANT TAKE IN THE LESSON. Each pair is ONE TAKE, ONE VOICE, the two lines back to back with the smallest gap the recording allows and no change of pitch, pace or weight between them: « Il est lent. » then « Elle est lente. »; « Il est doux. » then « Elle est douce. »; « Il est sérieux. » then « Elle est sérieuse. » The learner is being asked to hear ONE CONSONANT ARRIVE and nothing else, so everything except that consonant must be identical across the pair. RECORDED APART, THE LEARNER COMPARES TWO PERFORMANCES INSTEAD OF TWO SOUNDS AND THE ENTIRE TEACHING IS LOST. The reader must NOT lean on the new consonant or lengthen it: it is an ordinary final consonant and the whole point is that it is simply there where it was simply not there before. If a listener with their eyes shut cannot say which member of the pair had the extra sound, the take has failed; if they can hear the reader pointing at it, it has failed the other way.',
        clipIds: [
          fr(pairId('lent', 'masc')), fr(pairId('lent', 'fem')),
          fr(pairId('doux', 'masc')), fr(pairId('doux', 'fem')),
          importedFr(A203_ROWS.mascSentence), importedFr(A203_ROWS.femSentence),
        ],
      },
      {
        id: 'rec-a2-17-amment',
        desc: 'THE TWO SPELLINGS THAT ARE ONE SOUND, AND THE VALUE OF THIS TAKE IS THAT NOTHING HAPPENS IN IT. « évidemment » then « constamment », ONE TAKE, and the last two syllables of the two words MUST BE INDISTINGUISHABLE. One is spelled with an e and one with an a and the reader can see the page, which is exactly the problem: a reader who can see the spelling will differentiate them without meaning to, and the screen then teaches the opposite of what it says. If it is possible to record this take without the reader seeing the words written, do that. The FRONT of each word is a different matter and should be left exactly as distinct as the language makes it, because the stem is the only thing the learner\'s ear is allowed to use. Also in this take: « Il est évident. » and « Il est constant. », same instruction, and the two nasals on the ends of those two must match each other as closely as the two endings do.',
        clipIds: [
          importedFr(namingId('évidemment')), importedFr(namingId('constamment')),
          fr('fr.a2.adverbes-essentiels.019'), fr('fr.a2.adverbes-essentiels.020'),
        ],
      },
      {
        id: 'rec-a2-17-place',
        desc: 'THE FIVE PLACEMENT ROWS, ONE TAKE EACH, AT ORDINARY CONVERSATIONAL PACE AND WITH NO PAUSE BEFORE THE LAST WORD. The reader must not mark the word for how in any way: no lift, no comma, no breath in front of it. It is an ordinary part of the sentence and the whole claim of the screen is that it simply lives after the verb, so a delivery that sets it apart teaches that it is an addition rather than a position. Every one of these five was published by somebody else for another lesson and they should sound like it.',
        clipIds: PLACEMENT_ROWS.map((r) => importedFr(r.id)),
      },
      {
        id: 'rec-a2-17-dictee',
        desc: 'THE TWENTY-ONE DICTÉE LINES, ONE TAKE EACH, CLEAN AND UNHURRIED, WITH NO CONTRAST INTENT AT ALL. This is the opposite instruction to every other take in the lesson: here the learner is spelling rather than comparing, and any pair-reading would hand them the answer. Read each line as though it were the only line. TWO OF THE TWENTY-ONE ARE SINGLE WORDS , « évidemment » and « constamment » , and those two matter most: the learner is being asked for a letter the sound cannot give them, so the two endings must be read identically and neither may be helped. The final consonants on « lente » and « douce » must be neither helped nor hidden either; say them the way somebody would say them, which is the whole difficulty the exercise exists to create.',
        clipIds: DICTEE_IDS.map((id) => (AUTHORED_IDS.includes(id) ? fr(id) : importedFr(id))),
      },
      {
        id: 'rec-a2-17-break',
        desc: 'THE BREAK CARD, AND IT IS THE ONE PLACE IN THIS LESSON THE ENGLISH WORD ORDER IS SPOKEN. « Je souvent mange ici. » then « Je mange souvent ici. », one take, back to back. The first is NOT to be read as a mistake, with a wince or a rising edge or a pause: it must be read as somebody genuinely trying to say it, at speed, the way a learner produces it before they hear themselves. A clean and confident reading of it would teach that the wrong order is perfectly good French. The second should arrive at the same pace and with the same weight, so the only difference between the two takes is the order of two words. Nothing else in the delivery may change.',
        clipIds: ['Je souvent mange ici.', fr('fr.a2.adverbes-essentiels.024')],
      },
      {
        id: 'rec-a2-17-unseen',
        desc: 'THE AUDIO STEP OF THE GENERALISATION DRILL, FOUR LINES, ONE TAKE EACH: « lentement », « doucement », « parfaitement », « certainement ». The first two the learner has met and the last two they have not, and NOTHING in the delivery may distinguish those groups. The whole claim of the mission is that a word built by rule sounds like a word that was taught, so a reader who gives the last two any extra care, slowness or emphasis is teaching that they are harder. Read all four at the same ordinary pace, as though they were four items on a list. The consonant before the ending in each one is the thing to keep clean: the t in the first, the s in the second, the t in the third and the n in the fourth.',
        clipIds: [step('lent', 'adverb'), step('doux', 'adverb'), UNSEEN[0].adverb, UNSEEN[1].adverb],
      },
      {
        id: 'rec-a2-17-bonbien',
        desc: 'THE AUDIO STEP OF THE bon/bien DRILL, TWO PAIRS, EACH ONE TAKE: « C\'est un bon jour. » then « Elle chante bien. »; « Il chante mal. » then the describing word « mauvais » on its own. The point of the pairing is that the two words in each pair are NOT alternatives for the same slot, so they must not be read as a contrast between two options: read each sentence as an ordinary statement somebody would make, at ordinary pace, with no lift on the word under test. A reader who leans on bon and bien turns the mission into a listening exercise, and there is nothing here to listen for: the learner has to know what the word is describing.',
        clipIds: [fr('fr.a2.adverbes-essentiels.018'), fr('fr.a2.adverbes-essentiels.015'), fr('fr.a2.adverbes-essentiels.016'), importedFr(namingId('mauvais'))],
      },
      {
        id: 'rec-a2-17-scene',
        desc: 'THE CANTEEN IN RENNES. She is friendly, unhurried, and asking to make conversation rather than because she needs to know; « Vous venez souvent ici ? » is light and comes out over a tray. The learner\'s own line , « Oui, je souvent... euh... je mange... souvent... » , is the take that has to be right: two false starts and a stall, and the stall must sound like somebody who has heard their own word order and stopped to fix it, NOT like somebody who has forgotten a word. There is a difference and it is audible: the first sounds like a correction beginning and the second sounds like a gap. Her last line is cheerful and completely unbothered, because she noticed nothing, and that is what makes it expensive.',
        clipIds: [fr('fr.a2.adverbes-essentiels.023'), fr('fr.a2.adverbes-essentiels.024')],
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

export const ADVERBES_SPEAK_IDS = SPEAK_IDS;
export const ADVERBES_DICTEE_IDS = DICTEE_IDS;
export const ADVERBES_ITEM_IDS = ITEM_IDS;
export const ADVERBES_DECK_TRANCHE = DECK_TRANCHE;
export const ADVERBES_ACTS = ACTS;
export const ADVERBES_SECTIONS = SECTIONS;
export const ADVERBES_SHEETS = SHEETS;
export const ADVERBES_DRILLS = DRILLS;
export const ADVERBES_ERROR_TRIGGERS = ERROR_TRIGGERS;
export const ADVERBES_SCENE_BEATS = SCENE_BEATS;
