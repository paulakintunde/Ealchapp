// a2.02.l1 "Irréguliers 1 : aller, venir, tenir" — the mission journey.
//
// ── THIS IS A FIRST BUILD ──────────────────────────────────────────────────
//
// Probed rather than assumed: the unit dump says `"lessons": []`, so unlike
// a2.01 there is no pre-v2 stub to rebuild and the version counter starts at 1.
//
// ── The Owns: the timeline, and it is NOT the three paradigms ─────────────
//
//   Je viens de manger.     a past tense, eleven lessons before there is one
//
// Three irregular paradigms is a memorisation task, and the learner has just
// walked three consecutive lessons of derivation (a2.01, a2.09, a2.10, a2.11).
// A fourth lesson that is only a table reads as the level giving up, and the
// brief opens by saying so.
//
// So the weight is on `venir de` + an action, which is the first construction in
// the level that reaches off the present moment. `aller` and `tenir` are the
// paradigm around it.
//
//   act 2   the three paradigms      4 missions
//   act 3   venir de                 6 missions, and the only tapTable
//   act 4   the trap                 3 missions, 2 of them venir de
//
// Eight missions on the Owns against four on the paradigms, and the quiz splits
// the same way: two of the five rounds are venir de and a third is the trap.
//
// ── WHY tenir IS HERE AT ALL, WHICH IS THE PART THAT COULD HAVE GONE WRONG ─
//
// A third irregular verb with no argument for it is an arbitrary third verb, and
// the brief says so in its test list. The argument is `TENIR_FOLLOWS_VENIR` in
// the corpus, and it is DERIVED rather than asserted: for every one of the six
// cells, tenir's form is venir's form with its first letter replaced by a t. If
// that ever stops being true of a cell, the constant empties and the build stops
// before any prose is read.
//
// ── THE a2.10 LOOP, AND THERE ARE TWO OF THEM ─────────────────────────────
//
// The brief says a2.10 "named venir/tenir as an exception and did not conjugate
// them". That is true and it is now half the story: `a2.10.l2` shipped on
// 2026-08-11, after the brief was written, conjugated the other eight verbs of
// the non--iss- class, and named the MECHANISM — its cards say venir and tenir
// "run the shedders' mechanism with a vowel change on top" and its terms file
// declares `A202_BACKREF = 'a2.02'`.
//
// So the loop is closed by showing the mechanism rather than by mentioning it,
// on s06-tot, and it is possible because three lessons share one frame word:
//
//   Il finit tôt.  ·  Ils finissent tôt.    a2.10.l1   a syllable is pushed in
//   Il part tôt.   ·  Ils partent tôt.      a2.10.l2   a consonant comes back
//   Il vient tôt.  ·  Ils viennent tôt.     here       a consonant comes back
//                                                      and the vowel leaves the
//                                                      nose
//
// The first four are IMPORTED whole rather than twinned. Authoring copies would
// put four performances on the screen instead of four cells.
//
// ── What is left to the neighbours ─────────────────────────────────────────
//
// - THE FUTUR PROCHE IS a2.19's (seq 15, prereqUnitIds ['a2.02']). This lesson
//   conjugates `aller` in full, so the temptation is total. Every authored aller
//   row takes a PLACE and never an action, the boundary gets ONE LINE on
//   s16-notmine with no French example on it at all, and the guard is structural:
//   FUTUR_PROCHE_SHAPE matches any form of aller followed directly by a naming
//   form, and no production surface may hold one.
// - WHICH PREPOSITION follows aller is a2.04 (seq 13). One place, one small word,
//   used six times without variation, so the screen never has to explain it.
// - `venir de` + A PLACE IS SHOWN, because it is half the trap. Showing the
//   contrast is not teaching the preposition system, and it stays a contrast.
// - THE FAMILY PRINCIPLE IS a2.15's (seq 9, prereqUnitIds ['a2.02']). Three
//   compounds are named as EVIDENCE that tenir is worth the trouble, two of them
//   on their base verbs' own frames, and the rule that this generalises is handed
//   over on s07-three.
// - THE PASSÉ COMPOSÉ is a2.05 (seq 16). No auxiliary and no participle anywhere;
//   PASSE_COMPOSE_SHAPE is asserted against every learner string.
//
// ── Layout notes that are bugs, not preferences ───────────────────────────
//
// - `tapTable` is NOT in ownsLayout() (LessonPager.tsx:162), so s09-twojobs
//   renders inside a SCROLLING page. TWO rows, which is the fewest of any
//   tapTable in the band and deliberate: the brief says the two uses belong on
//   ONE screen and that splitting them destroys the teaching.
// - THE SHARED PREFIX IS IN THE COLUMN HEADER. `Je viens de` is the same in both
//   rows, so it is hoisted out of the cells and the table holds only what
//   differs. That is what makes two columns enough, and it is the teaching
//   rendered as a layout rather than described in prose.
// - `size` is not decoration. density.logic.ts reads `xl` as a 12-word cap on
//   EVERY string in the section except `say`, `hint`, `note`, `why` and `tip`.
//   s08-justdid is the only xl section here and every display string in it is a
//   bare four-word sentence.
// - `commonErrors` needs `swipe: true` or it renders a blank screen.
// - `reading` needs `questionsInModal` WITH questions or its glossary reaches no
//   renderer, and PassagePage splits on sentence boundaries so an authored
//   newline is swallowed: s20-reading is one line.
// - Three term chips per section, maximum.
// - A `groupDrill` at `lg` may carry items and a check in one group; only an `xl`
//   one may not. s04-nostem, s07-three, s10-build and s11-newverb are all lg.

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
  ALLER_VENIR_TERMS,
  NOUS_ON,
  REFRAME,
  TENIR_CLAIM,
  TIMELINE,
  WHAT_FOLLOWS,
  WHAT_FOLLOWS_UNIT,
} from './aller-venir-terms.ts';
import { REFRAME as A201_REFRAME } from './verbes-er-terms.ts';
import { REFRAME as A210_REFRAME } from './verbes-ir-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }
import {
  A201_BACKREF,
  A210_BACKREF,
  ALLER_STEMS,
  AUTHORED_IDS,
  COMPOUNDS,
  COMPOUND_BASE,
  DICTATION_IDS,
  FAMILY_UNIT,
  FRAME_WORD,
  FUTUR_PROCHE_UNIT,
  NUMBER_PAIRS,
  ORIGIN_IDS,
  PARADIGM,
  PASSE_COMPOSE_DISTANCE,
  PASSE_COMPOSE_UNIT,
  PREPOSITION_UNIT,
  RECENT_PAST_IDS,
  SINGULAR_TRIPLES,
  TENIR_FOLLOWS_VENIR,
  THE_THREE,
  TOT_FRAME,
  TWO_JOBS,
  TWO_JOBS_SHARED_PREFIX,
  en,
  familyIds,
  fr,
  paradigmIds,
  sub,
} from './aller-venir-corpus.ts';
import {
  IMPORTED_IDS,
  IMPORTED_SENTENCE_IDS,
  importedEn,
  importedFr,
  importedRespell,
  verbCard,
  verbEn,
  verbId,
  verbRespellBare,
} from './aller-venir-imported.ts';

export {
  A201_BACKREF, A201_REFRAME, A210_BACKREF, A210_REFRAME,
  NOUS_ON, REFRAME, TENIR_CLAIM, TIMELINE, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT,
};

/* ─── The items this lesson touches ────────────────────────────────────────
 *
 * 29 authored plus 10 imported by id and untouched: six infinitives and four
 * sentences, and NOT ONE OF THE TEN IS REPAIRED. The batch re-checks the imported
 * half against POSTGRES rather than the seed, because the two drift and an id that
 * exists only in the seed renders as an empty card.
 *
 * `appartenir` is NOT here. It is read from Postgres by the manifest, named on no
 * screen, and released to nothing.                                             */

const ITEM_IDS = [...new Set([...AUTHORED_IDS, ...IMPORTED_IDS])];

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. Every authored row has it; the six
 *  infinitives are deliberately NOT here, because a bare naming form is not a
 *  thing anybody says on its own, and because `obtenir`'s row carries no
 *  voiceflash at all and would render as a card the mic cannot score.
 *
 *  THE ALLER PARADIGM IS NOT HERE EITHER, and that is a placement decision. `va`
 *  is two letters and one syllable, and asking a recogniser to score `Il va au
 *  parc.` against `Ils vont au parc.` is asking it to hear a distinction it will
 *  get wrong more often than the learner does. The six aller rows are worked in
 *  s04-nostem instead, where the task is choosing the form rather than saying it. */
const SPEAK_IDS = [
  ...paradigmIds('venir'),
  ...paradigmIds('tenir'),
  ...familyIds('recent'),
  ...familyIds('origin'),
  ...familyIds('family'),
];

/** THE ROW ORDER OF THE TWO-JOB TABLE, by item id.
 *
 *  The PLACE use first, because it is the one the learner already has: 52 of the
 *  80 published `venir de` sentences are that one and 26 of those are a country
 *  or a city out of a1.22. The action use is second because arriving at it is the
 *  mission.
 *
 *  Index-aligned with TWO_JOBS in the corpus, and the batch asserts that too. */
const TWO_JOBS_ROW_IDS = TWO_JOBS.map((j) => j.id);

/** What a two-job row prints in its first column: the sentence with the shared
 *  prefix taken off, because the prefix is the column HEADER. Derived here, once,
 *  so the table and the drill that scores it cannot disagree about where the two
 *  sentences stop being the same. */
const afterPrefix = (id: string): string => `... ${fr(id).slice(TWO_JOBS_SHARED_PREFIX.length)}`;

/** A sentence with its trailing full stop removed, for quoting one INSIDE a
 *  question. Without it `${fr(id)}. What did the plural do?` renders as
 *  "Il finit tôt.. What did the plural do?", which shipped to the seed and was
 *  found by mutation-testing rather than by any guard. */
const noStop = (s: string): string => s.replace(/\.$/, '');

/** The six aller rows, split by which stem the form comes from.
 *
 *  `paradigmIds('aller')` is in the corpus's sequence order and PARADIGM is in
 *  the ledger's canonical pronoun order, and the two are the same order, so the
 *  split is by INDEX rather than by parsing a sentence back apart. That matters:
 *  a version of this that pulled the verb out of the French string would have to
 *  know the frame, and the frame is not what this screen is about. */
const allerIdsFrom = (prefix: 'v' | 'all'): string[] =>
  paradigmIds('aller').filter((_, i) => (prefix === 'all'
    ? PARADIGM[i].aller.startsWith('all')
    : PARADIGM[i].aller.startsWith('v')));

/** One authored row as a groupDrill item, so no screen restates a gloss or a
 *  respelling that the corpus already holds. */
const rowCard = (id: string) => ({ fr: fr(id), itemId: id, respell: sub(id), en: en(id) });

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A2 register of stakes is loss of fluency under load, and the brief asked
 * for somebody trying to explain that they have already done the thing they are
 * being offered, running out of grammar, and accepting something they did not
 * want. Nobody is corrected and nothing is mispronounced.
 *
 * The failure is specific to this lesson and neither neighbour could have staged
 * it: the learner has `manger` and has no way at all to put ALREADY on it. What
 * comes out is the present tense, `je mange`, which in that room reads as yes.
 *
 * Beats are extracted to a named const, each with its own `size` and `audio`. The
 * section sets NO size: ownsLayout() ignores it and density.logic.ts would read
 * xl as a 12-word cap on prose.                                                */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A kitchen in Rennes, ten past one. You have come to collect a bicycle from a colleague and his mother has answered the door. There is a pot on the stove and one place already set at the table.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Madame Le Goff',
    fr: 'Vous arrivez juste à temps. Asseyez-vous.',
    en: 'You have come at just the right moment. Sit down.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-02-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Ah, non, merci...',
    en: 'Ah, no, thank you...',
    stage: 'You ate twenty minutes ago. You have the word for eating and nothing to put in front of it.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'She is already reaching for a second plate. What goes back?',
    options: [
      {
        fr: 'Non merci, je viens de manger.',
        en: 'the one that puts the meal in the past',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Non merci, je mange.',
        en: 'the only tense you have',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'The meal is behind you and the sentence says so. She puts the plate back.',
      breaks: 'You said you eat. In front of a set table that is not a refusal, it is an answer to the question she asked.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Madame Le Goff',
    fr: 'Voilà. Ce n\'est pas beaucoup, mangez.',
    en: 'There we are. It is not much, eat.',
    stage: 'The second plate is down and the pot is already tilted over it.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-02-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    // BUDGETED, not chosen. `scene` is absent from ownsLayout(), so the card
    // cannot size itself, and a2.01 took three device passes on a Pixel 6 to
    // establish what fits: a heading of about 13 characters (it wraps at twelve
    // and every wrapped line costs about 85px), a body of 24 to 30 words, a coach
    // line under 9, and reading-row glosses under about 24 characters each.
    // Ledger §7. Those figures are asserted by a2-02-aller-venir.test.ts rather
    // than trusted to this comment.
    heading: 'The plate',
    // 25 WORDS, AND THE FIRST DRAFT WAS 33. Found on a Pixel 6: with 33 words and
    // an `ipa` on the right row the card's own Continue sat BELOW THE FOLD on
    // first paint, which is the exact failure a2.01 took three device passes to
    // clear. Ledger §7.
    body: 'You had the verb and the refusal. What you did not have was any way of putting the meal behind you, so she heard yes.',
    // THE READING ROWS DROP THE « Non merci, », AND THAT IS A LAYOUT FIX AND A
    // TEACHING FIX AT ONCE. Ledger §7: a right-hand row carrying both `ipa` and
    // `respell` is four lines on its own, and `ipa` is REQUIRED by the schema, so
    // the only line left to save was the sentence. With the refusal in front,
    // both the French and the respell wrapped to two lines each and the card's
    // own Continue sat below the fold on first paint.
    //
    // Taking it off is what the contrast wanted anyway: the refusal is identical
    // in both, so printing it twice compares two things that do not differ. What
    // is left is the verb phrase, which is the only thing that moved, and it is
    // fr.a2.verbes.279 word for word, so the respell is the corpus respell rather
    // than a hand-typed copy of it.
    wrong: {
      fr: 'Je mange.',
      ipa: '/ʒə mɑ̃ʒ/',
      en: 'she hears yes',
    },
    right: {
      fr: 'Je viens de manger.',
      ipa: '/ʒə vjɛ̃ də mɑ̃.ʒe/',
      respell: '[zhuh vyaⁿ duh mahⁿ-ZHAY]',
      en: 'lunch is already over',
    },
    coach: 'Four words, and the meal moves.',
    // Audio-first: the ear answers before the eye can. `autoplay` is NOT set. It
    // is declared in schema.ts and implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-02-justdid' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Nobody corrected you and nothing was misheard. You ate a second lunch out of politeness, and the words that would have stopped it are four words long.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: where you are on the clock ────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Second Lunch',
    frSub: 'Le deuxième déjeuner',
    render: 'screens',
    layer: 'core',
    terms: ['justDid', 'theNamingForm'],
    say: {
      text: 'Nothing goes wrong out loud here. Watch what happens when the only tense you have is the present one.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A kitchen, one place already set',
      city: 'Rennes',
      time: 'Ten past one',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    // The reframe is referenced, never retyped, so this appearance cannot drift
    // out of agreement with the others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} That is the sentence this lesson is for, and the three verbs around it are what make it work.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end you will be able to say what you did twenty minutes ago.`,
    goals: [
      { t: 'Say what you have just done', s: 'venir, then de, then the naming form of whatever it was. Nothing else changes.' },
      { t: 'Tell the two jobs of venir de apart', s: 'A place after de is where you are from. An action after de is when you did it.' },
      { t: 'Build all six forms of three verbs', s: 'aller stands on its own. venir and tenir are one shape wearing two first letters.' },
      { t: 'Hear one person against several', s: 'il vient stops in the nose. ils viennent lands an n on the end.' },
    ],
  },

  {
    // THE OPENING MOVE, and it is a placement rather than an introduction.
    //
    // The learner has walked four lessons in which every verb came apart into a
    // stem and an ending. This card says, before anything is taught, that the
    // method has run out, and then says what they get in exchange for the three
    // verbs they now have to memorise. Both predecessors' reframes are imported
    // from their own terms files so that a rewording there moves this card too.
    type: 'cardDeck',
    id: 's03-three',
    title: 'Where The Method Stops',
    frSub: 'Là où la méthode s\'arrête',
    hint: 'Swipe through the four cards. The last one is what you are being paid.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['noStem', 'justDid'],
    say: 'Four lessons of taking verbs apart, and these three will not come apart. Read the last card twice.',
    cards: [
      {
        label: 'What you have',
        head: 'One move, four times',
        body: `${A201_BACKREF} onwards, every verb has come apart the same way: the last two letters come off the naming form and the person goes on what is left. That covers most of the verbs in the language.`,
      },
      {
        label: 'What is different',
        head: 'These three do not come apart',
        fr: THE_THREE.join(' · '),
        sub: 'nothing to cut, nothing to derive',
        body: 'There is no rule that turns any of these into the forms they take. They have to be held in the head, and knowing that from the start is what makes them easy.',
      },
      {
        label: 'What is cheap',
        head: 'Two of the three are one shape',
        fr: 'viens · tiens',
        sub: 'one letter apart, in all six cells',
        body: `${TENIR_CLAIM} So the second verb costs nothing that the first one did not already cost you, and the third is the only one you learn twice.`,
      },
      {
        label: 'What you are paid',
        head: 'A past tense, early',
        fr: 'Je viens de manger.',
        sub: '[zhuh vyaⁿ duh mahⁿ-ZHAY]',
        body: `${TIMELINE} ${REFRAME}`,
      },
    ],
  },

  /* ── Act 2: three verbs, two shapes ───────────────────────────────────── */

  {
    // ALLER, AND THE POINT IS THAT THERE IS NOTHING TO FIND.
    //
    // A groupDrill rather than a table, because the task is not reading six forms
    // off a grid, it is noticing that four of them start with v and two with all,
    // and that no rule joins the two halves. Both groups carry their rows by
    // itemId, which is what puts all six aller sentences on a screen: a1.08
    // declared 43 itemIds that resolved perfectly and were drawn by nothing.
    type: 'groupDrill',
    id: 's04-nostem',
    title: 'Two Halves, No Rule',
    frSub: 'aller',
    layer: 'core',
    size: 'lg',
    terms: ['noStem', 'notYours'],
    sheetId: 'sheet.a2.02.irreguliers',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-02-aller' },
    say: 'Six forms in two groups. Look at the first letter of each one before you answer.',
    groups: [
      {
        label: `The four from ${ALLER_STEMS[0].stem}`,
        items: allerIdsFrom('v').map(rowCard),
        check: {
          q: 'Which two of these four are said exactly the same?',
          opts: ['je vais and tu vas', 'tu vas and il va', 'il va and ils vont', 'je vais and ils vont'],
          correct: 1,
          why: 'vas and va are one sound and the s is written for tu and for nobody else. The pronoun is the only thing separating them.',
        },
      },
      {
        label: `The two from ${ALLER_STEMS[1].stem}`,
        items: allerIdsFrom('all').map(rowCard),
        check: {
          q: 'You know the naming form is aller. Which form could you have worked out from it?',
          opts: ['il va', 'ils vont', 'nous allons', 'je vais'],
          correct: 2,
          why: 'Only the nous and vous cells keep any of the naming form. The other four have to be learned as they are, and there is no rule waiting to be found.',
        },
      },
    ],
  },

  {
    // THE SINGLE GRID, AS EXAMPLES RATHER THAN AS A TABLE.
    //
    // The brief asked for ONE table with all three verbs side by side rather than
    // three tables, because the point is that two of them are the same shape and
    // one is not, and three grids hide that. A `table` at layer core is a
    // table-in-core density failure, so the grid itself lives in the sheet and
    // the flow gets the same six rows as examples, one line per person, with all
    // three verbs on each line.
    //
    // Every line reads its forms out of PARADIGM, so no cell here can disagree
    // with the sheet or with the drill that scores it.
    type: 'examples',
    id: 's05-six',
    title: 'All Three, One Line Each',
    frSub: 'Les trois, côte à côte',
    layer: 'core',
    terms: ['sameShape', 'noStem'],
    sheetId: 'sheet.a2.02.irreguliers',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-02-grid' },
    say: 'Six lines. Read the last two columns together and the first one on its own.',
    examples: PARADIGM.map((r) => ({
      fr: `${r.aller} · ${r.venir} · ${r.tenir}`,
      en: r.person,
      note: TENIR_FOLLOWS_VENIR.includes(r.person)
        ? `${r.venir} and ${r.tenir} differ by one letter. ${r.aller} is on its own.`
        : `${r.venir} and ${r.tenir} have parted company here, and so has ${r.aller}.`,
    })),
  },

  {
    // THE a2.10 LOOP, CLOSED BY SHOWING THE MECHANISM.
    //
    // Three lessons, one frame word, three different things happening to the
    // plural. Four of the six lines are IMPORTED whole from a2.10.l1 and a2.10.l2
    // and read through importedFr(), so this screen plays their rows rather than
    // a copy of them.
    //
    // a2.10.l1 named venir and tenir as -ir verbs that take no -iss- and
    // conjugated neither. a2.10.l2 named the mechanism and handed it here by unit
    // id. This is where both are paid.
    type: 'listening',
    id: 's06-tot',
    title: 'Three Lessons, One Word',
    frSub: `Trois leçons, un mot : ${FRAME_WORD}`,
    layer: 'core',
    questionsInModal: true,
    terms: ['vowelBack', 'sameShape'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-02-tot' },
    say: 'Six lines and one word in common. Listen to the end of each verb and nowhere else.',
    // Singular then plural, three times, so the learner compares within a pair
    // rather than across a gap. Written out in that order rather than filtered
    // out of TOT_FRAME, because the ORDER is the mission.
    lines: [
      { fr: importedFr(TOT_FRAME[0].singular), en: 'He finishes early.' },
      { fr: importedFr(TOT_FRAME[0].plural), en: 'They finish early.' },
      { fr: importedFr(TOT_FRAME[1].singular), en: 'He leaves early.' },
      { fr: importedFr(TOT_FRAME[1].plural), en: 'They leave early.' },
      { fr: fr(TOT_FRAME[2].singular), en: 'He comes early.' },
      { fr: fr(TOT_FRAME[2].plural), en: 'They come early.' },
    ],
    questions: [
      {
        q: `${noStop(importedFr(TOT_FRAME[0].singular))} against ${noStop(importedFr(TOT_FRAME[0].plural))}. What did the plural do?`,
        opts: ['Added a whole syllable in the middle', 'Added one sound at the very end', 'Changed the vowel', 'Nothing you can hear'],
        correct: 0,
        why: `${TOT_FRAME[0].what}, which is ${A210_BACKREF}'s pattern and the one you met first.`,
      },
      {
        q: `Now ${noStop(importedFr(TOT_FRAME[1].singular))} against ${noStop(importedFr(TOT_FRAME[1].plural))}.`,
        opts: ['A syllable was pushed in', 'The vowel changed', 'One consonant came back at the end', 'Nothing changed'],
        correct: 2,
        why: `${TOT_FRAME[1].what}. The singular drops the last consonant of the stem and the plural puts it back, and no syllable is added.`,
      },
      {
        q: `And ${noStop(fr(TOT_FRAME[2].singular))} against ${noStop(fr(TOT_FRAME[2].plural))}. This one does two things.`,
        opts: ['A syllable and a vowel', 'A consonant and a vowel', 'Two consonants', 'A vowel only'],
        correct: 1,
        why: `${TOT_FRAME[2].what}. vyaⁿ has the vowel in the nose and no n said at all; vyenn lands the n and brings the vowel back out.`,
      },
      {
        q: 'So which of the three verbs behaves most like the one you are learning now?',
        opts: ['finir', 'Neither, all three are different', 'Both equally', 'partir'],
        correct: 3,
        why: `partir. The consonant coming back at the end is the same move; ${THE_THREE[1]} adds the vowel change on top of it. finir is the one that is not like this at all.`,
      },
    ],
  },

  {
    // THE SIX NAMING FORMS, AND THE FAMILY HANDED OVER.
    //
    // A groupDrill, because `vocabThemes` cards carry no itemId and this is where
    // all six imported rows have to reach a screen. Group one is the three the
    // lesson teaches; group two is the three built on top of them, which are
    // EVIDENCE rather than a principle.
    //
    // THE PRINCIPLE IS a2.15's. The second check hands it over by unit id and the
    // card does not state the rule.
    type: 'groupDrill',
    id: 's07-three',
    title: 'Three Verbs, And Three Built On Them',
    frSub: 'Les trois, et leurs composés',
    layer: 'core',
    size: 'lg',
    terms: ['theFamily', 'sameShape'],
    sheetId: 'sheet.a2.02.irreguliers',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-02-verbs' },
    say: 'Six naming forms. The second three are the first three with something stuck on the front.',
    groups: [
      {
        label: 'The three you learn',
        items: THE_THREE.map(verbCard),
        check: {
          q: `You know ${noStop(fr('fr.a2.verbes.269'))}. What is the same sentence about several people?`,
          opts: ['Ils venent tôt.', 'Ils viennent tôt.', 'Ils vientent tôt.', 'Ils venissent tôt.'],
          correct: 1,
          why: 'The n doubles and the vowel comes out of the nose. The last one puts back the -iss- that belongs to a different family altogether.',
        },
      },
      {
        label: 'The three you get for nothing',
        items: COMPOUNDS.map(verbCard),
        check: {
          q: `${COMPOUNDS[0]} is ${COMPOUND_BASE[COMPOUNDS[0]]} with two letters on the front. What is il ___ ?`,
          opts: ['il revenir', 'il revien', 'il reviens', 'il revient'],
          correct: 3,
          why: `Whatever ${COMPOUND_BASE[COMPOUNDS[0]]} does, ${COMPOUNDS[0]} does. That happens with a lot of verbs and where it becomes a rule you can rely on is ${unitRef(FAMILY_UNIT)}.`,
        },
      },
    ],
  },

  /* ── Act 3: the Owns. What you did twenty minutes ago. ────────────────── */

  {
    // The only xl section in the lesson, and the one place xl is correct: every
    // display string is a bare four-word sentence. density.logic.ts caps EVERY
    // string in an xl section at 12 words except say, hint, note, why and tip.
    type: 'cardDeck',
    id: 's08-justdid',
    title: 'The Thing You Just Did',
    frSub: 'Le passé récent',
    hint: 'Swipe. Four cards, and the third one is the whole construction.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    terms: ['justDid', 'theNamingForm'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-02-justdid' },
    say: `${REFRAME} Listen before you read each one, and watch how little of it has to move.`,
    cards: [
      { label: '1 of 4', fr: fr('fr.a2.verbes.279'), sub: sub('fr.a2.verbes.279'), body: 'I have just eaten.' },
      { label: '2 of 4', fr: fr('fr.a2.verbes.281'), sub: sub('fr.a2.verbes.281'), body: 'He has just left.' },
      { label: '3 of 4', fr: 'viens + de + manger', sub: 'the person, then de, then the naming form', body: 'Three parts, and only the first one moves.' },
      { label: '4 of 4', fr: fr('fr.a2.verbes.282'), sub: sub('fr.a2.verbes.282'), body: 'We have just finished.' },
    ],
  },

  {
    // THE HEADLINE SCREEN, AND IT IS THE ONLY tapTable IN THE LESSON.
    //
    // Two rows, two jobs, ONE screen. The brief named this as the layout the test
    // must assert and said that separating the two uses destroys the teaching, so
    // the batch, the merge and the test all check that both rows are here, in
    // TWO_JOBS order, each with its own audio.
    //
    // THE SHARED PREFIX IS THE COLUMN HEADER. `Je viens de` is identical in both
    // sentences, so it is hoisted out of the cells and the table holds only the
    // part that differs. That is why two columns are enough, and it is the
    // teaching rendered as a layout rather than described in a paragraph.
    //
    // Two rows and not six: tapTable is not in ownsLayout(), so this renders
    // inside a scrolling page, and two rows put both jobs above the fold on a
    // Pixel 6 with room for the detail sheet.
    type: 'tapTable',
    id: 's09-twojobs',
    title: 'Same Three Words, Two Jobs',
    frSub: 'Deux emplois',
    layer: 'core',
    terms: ['whatFollows', 'justDid'],
    sheetId: 'sheet.a2.02.irreguliers',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-02-twojobs' },
    say: `Tap both. The first four words are the same and the sentences are not, because ${WHAT_FOLLOWS}.`,
    cols: [TWO_JOBS_SHARED_PREFIX.trim() + ' ...', 'and the sentence means'],
    rows: TWO_JOBS.map((j) => ({
      cells: [`${afterPrefix(j.id)}  (${j.after})`, j.job],
      say: fr(j.id),
      detail: {
        title: fr(j.id),
        body: j.kind === 'place'
          ? 'This is the one you have already met many times over, and it is the commoner of the two by a long way. A place after de is where somebody is from, and it has nothing to do with time at all.'
          : `An action after de puts that action in the past. Nothing before de changed: it is the same venir and the same de as the row above, and ${WHAT_FOLLOWS}. There is no third possibility.`,
        say: fr(j.id),
      },
    })),
  },

  {
    // PRODUCTION, and the kind this construction actually needs. The learner is
    // given an action and has to build the sentence that puts it behind them.
    // `practice` with skill 'write' draws no writing surface, so a groupDrill
    // check and the dictée are the two places this lesson can make a learner
    // decide anything.
    type: 'groupDrill',
    id: 's10-build',
    title: 'Put It Behind You',
    frSub: 'À vous de construire',
    layer: 'core',
    size: 'lg',
    terms: ['justDid', 'theNamingForm', 'nousOn'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-02-justdid' },
    say: 'Three rounds. The front of the sentence changes for the person and the back never does.',
    groups: [
      {
        label: 'One person',
        items: [
          { fr: fr('fr.a2.verbes.279'), itemId: 'fr.a2.verbes.279', respell: sub('fr.a2.verbes.279'), en: 'I have just eaten.' },
          { fr: fr('fr.a2.verbes.280'), itemId: 'fr.a2.verbes.280', respell: sub('fr.a2.verbes.280'), en: 'You have just got home.' },
        ],
        check: {
          q: 'The action is partir. Which is right for one person who has just gone?',
          opts: ['Il vient de part.', 'Il vient de parti.', 'Il vient de partir.', 'Il vient partir.'],
          correct: 2,
          why: 'The naming form, untouched, and the de is not optional. Two of the wrong ones changed the second verb and the third dropped the de, which stops it being about the past at all.',
        },
      },
      {
        label: 'Several people',
        items: [
          { fr: fr('fr.a2.verbes.283'), itemId: 'fr.a2.verbes.283', respell: sub('fr.a2.verbes.283'), en: 'We have just sold the house.' },
          { fr: fr('fr.a2.verbes.284'), itemId: 'fr.a2.verbes.284', respell: sub('fr.a2.verbes.284'), en: 'They have just arrived.' },
        ],
        check: {
          q: 'Several people, and the action is finir. Which one?',
          opts: ['Ils viennent de finir.', 'Ils venent de finir.', 'Ils viennent de finissent.', 'Ils viennent finir.'],
          correct: 0,
          why: 'Only the front of the sentence knows about the people. finir stays exactly as it is, whoever did it.',
        },
      },
      {
        label: 'The we you say out loud',
        items: [
          { fr: fr('fr.a2.verbes.282'), itemId: 'fr.a2.verbes.282', respell: sub('fr.a2.verbes.282'), en: 'We have just finished.' },
          { fr: fr('fr.a2.verbes.270'), itemId: 'fr.a2.verbes.270', respell: sub('fr.a2.verbes.270'), en: 'We come early.' },
        ],
        check: {
          q: 'Out loud, two of you have just arrived. Which one?',
          opts: ['On venons d\'arriver.', 'On viennent d\'arriver.', 'On vient d\'arriver.', 'Nous vient d\'arriver.'],
          correct: 2,
          why: `${NOUS_ON} on takes the same form as il, so it is vient here and never venons.`,
        },
      },
    ],
  },

  {
    // THE DOCTRINE'S GENERATION TEST, as its own mission.
    //
    // §B.1: a mission that lists ten forms has taught nothing a table cannot; a
    // mission that makes the learner produce something for a verb the lesson
    // never showed them has taught the system. Both checks here run on verbs
    // that appear nowhere else in this lesson, and neither is released as an
    // item, because a verb met once in a drill stem is not vocabulary.
    //
    // Both are ACTIONS AFTER de rather than new paradigm cells, which is the
    // point: the construction generalises to every verb in the language at once,
    // and that is what makes it worth six missions.
    type: 'groupDrill',
    id: 's11-newverb',
    title: 'A Verb You Have Never Met',
    frSub: 'Un verbe inconnu',
    layer: 'core',
    size: 'lg',
    terms: ['theNamingForm', 'justDid'],
    say: 'Two verbs that are not in this lesson. You have everything you need for both of them.',
    groups: [
      {
        label: 'Work it out',
        items: [],
        check: {
          q: 'The verb is signer, to sign. She has just signed. Which one?',
          opts: ['Elle vient de signé.', 'Elle vient de signer.', 'Elle vient signer.', 'Elle vient de signe.'],
          correct: 1,
          why: 'The naming form goes after de and nothing was ever done to it. You have not met this verb and you did not need to, which is what makes this worth learning once rather than verb by verb.',
        },
      },
      {
        label: 'And again, in the plural',
        items: [],
        check: {
          q: 'Same verb, and now it is several people. What changes?',
          opts: ['signer becomes signent', 'Both of them change', 'Nothing changes', 'Only vient becomes viennent'],
          correct: 3,
          why: 'The front of the sentence carries the people and the back carries the action. Ils viennent de signer, and signer has not moved.',
        },
      },
    ],
  },

  {
    // WHAT THE OWNS IS ACTUALLY WORTH, said to the learner rather than only meant.
    //
    // The brief asked for this explicitly: a learner who can say what they just
    // did has a past-tense move eleven lessons early, and that changes what they
    // can do in a real conversation this week. So it is a mission rather than a
    // sentence inside another card.
    type: 'cardDeck',
    id: 's12-clock',
    title: 'What This Buys You',
    frSub: 'Ce que ça vous donne',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['justDid', 'whatFollows'],
    say: 'Three cards about where you now stand on the clock, and then the trap.',
    cards: [
      {
        label: 'Where you were',
        head: 'The present, and only that',
        body: 'Everything you have built so far happens now. There has been no way at all of saying that something is over, which is why the sentence in the kitchen could not be finished.',
      },
      {
        label: 'Where you are',
        head: 'Twenty minutes ago',
        fr: fr('fr.a2.verbes.281'),
        sub: sub('fr.a2.verbes.281'),
        body: `${TIMELINE} It covers most of what anybody asks you in a day: where somebody has gone, why you are not hungry, why you are late.`,
      },
      {
        label: 'What is still coming',
        head: 'The rest of the past',
        body: `A full past tense, for things that happened yesterday and last year, is ${unitRef(PASSE_COMPOSE_UNIT)} and it is ${PASSE_COMPOSE_DISTANCE} lessons from here. Until then this is what you have, and it is more than it sounds.`,
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
    say: 'The person is on the front. Say the whole sentence before you flip, and say the de out loud.',
    cards: [
      { front: 'How do you say you have just done something?', back: `${REFRAME} viens de, then the naming form.` },
      { front: 'What goes after de?', back: 'The naming form, and it never changes for anybody.' },
      { front: 'Je viens de ___ , and it is a place', back: 'Where you are from. Je viens de Paris.' },
      { front: 'Je viens de ___ , and it is an action', back: 'What you have just done. Je viens de manger.' },
      { front: 'You, having just eaten', back: fr('fr.a2.verbes.279'), say: fr('fr.a2.verbes.279') },
      { front: 'Him, having just left', back: fr('fr.a2.verbes.281'), say: fr('fr.a2.verbes.281') },
      { front: 'You and somebody else, out loud, having just finished', back: fr('fr.a2.verbes.282'), say: fr('fr.a2.verbes.282') },
      { front: 'One person, coming early', back: fr('fr.a2.verbes.269'), say: fr('fr.a2.verbes.269') },
      { front: 'Several people, coming early', back: fr('fr.a2.verbes.272'), say: fr('fr.a2.verbes.272') },
      { front: 'One person, holding the key', back: fr('fr.a2.verbes.275'), say: fr('fr.a2.verbes.275') },
      { front: 'Several people, holding the key', back: fr('fr.a2.verbes.278'), say: fr('fr.a2.verbes.278') },
      { front: 'The six forms of aller', back: PARADIGM.map((r) => r.aller).join(' · ') },
      { front: 'Which form does on take on venir?', back: 'The il form. on vient, never on venons, and it means we.' },
      { front: `Why is ${THE_THREE[2]} in this lesson?`, back: TENIR_CLAIM },
    ],
  },

  /* ── Act 4: the trap ──────────────────────────────────────────────────── */

  {
    // THE TRAP IS venir de AGAINST venir de, and the brief is right that it is a
    // better one than any conjugation in the lesson. Stepped, so the three jobs
    // are three screens rather than one column below the fold.
    //
    // The drill is on RESPELLINGS rather than on meanings, because the two
    // sentences are identical up to `duh` and the learner has to hear where they
    // stop being the same.
    type: 'trapDrill',
    id: 's14-trap',
    title: 'Wait For The Next Word',
    frSub: 'Attendez le mot suivant',
    layer: 'core',
    swipe: true,
    terms: ['whatFollows', 'theNamingForm'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-02-twojobs' },
    say: 'Six of these. Every one of them is the same three words, so listen past them.',
    rule: {
      title: 'One phrase, two sentences',
      // Counted against the 45-word core cap by the validator rather than here.
      body: `A place after de is where somebody is from. An action after de is what they have just finished. Nothing before de is different, so ${WHAT_FOLLOWS} and there is nothing to guess.`,
    },
    cards: [
      {
        promptLabel: 'where you are from',
        promptSound: 'zhuh vyaⁿ duh mahⁿ-ZHAY',
        fr: fr('fr.a2.verbes.285'),
        ipa: '/ʒə vjɛ̃ də pa.ʁi/',
        tip: 'A city after de. Nothing about this sentence is about time.',
      },
      {
        promptLabel: 'what you have just done',
        promptSound: 'zhuh vyaⁿ duh pa-REE',
        fr: fr('fr.a2.verbes.279'),
        ipa: '/ʒə vjɛ̃ də mɑ̃.ʒe/',
        tip: 'An action after de. Same four words in front of it, and the meal is over.',
      },
      {
        promptLabel: 'he is from there',
        promptSound: 'eel vyaⁿ duh par-TEER',
        fr: fr('fr.a2.verbes.286'),
        ipa: '/il vjɛ̃ də nɑ̃t/',
        tip: 'Nantes is a place, so this is where he is from and not when he went.',
      },
      {
        promptLabel: 'he has gone',
        promptSound: 'eel vyaⁿ duh NAHⁿT',
        fr: fr('fr.a2.verbes.281'),
        ipa: '/il vjɛ̃ də paʁ.tiʁ/',
        tip: 'partir is an action, so he left a moment ago. This is the one you will use most.',
      },
    ],
    drill: [
      { promptSay: 'je viens de Paris', opts: ['zhuh vyaⁿ duh mahⁿ-ZHAY', 'zhuh vyaⁿ duh pa-REE', 'zhuh vuh-nohⁿ duh pa-REE'], correct: 1 },
      { promptSay: 'il vient de partir', opts: ['eel vyaⁿ duh par-TEER', 'eel vyaⁿ duh NAHⁿT', 'eel vyenn duh par-TEER'], correct: 0 },
      { promptSay: 'ils viennent de Paris', opts: ['eel vyaⁿ duh pa-REE', 'eel vyenn duh pa-REE', 'eel vyenn duh par-TEER'], correct: 1 },
      { promptSay: 'on vient de finir', opts: ['ohⁿ vuh-nohⁿ duh fee-NEER', 'ohⁿ vyenn duh fee-NEER', 'ohⁿ vyaⁿ duh fee-NEER'], correct: 2 },
      { promptSay: 'il vient de Nantes', opts: ['eel vyaⁿ duh NAHⁿT', 'eel vyaⁿ duh par-TEER', 'eel vyenn duh NAHⁿT'], correct: 0 },
      { promptSay: 'tu viens de rentrer', opts: ['tü vyenn duh rahⁿ-TRAY', 'tü vuh-nay duh rahⁿ-TRAY', 'tü vyaⁿ duh rahⁿ-TRAY'], correct: 2 },
    ],
    // Four steps, one job each. `audio` is not optional: validateLesson refuses a
    // stepped trapDrill whose steps never reach the section's own audio, and
    // without it the wrong-then-right take would be authored and never played.
    steps: [
      { label: 'The rule', kind: 'rule', title: 'One Phrase, Two Sentences' },
      { label: 'The pairs', kind: 'cards', title: 'Four That Start The Same' },
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
    title: 'Three Ways This Comes Apart',
    frSub: 'Trois pièges',
    layer: 'core',
    terms: ['theNamingForm', 'whatFollows'],
    say: 'The first one is the commonest mistake in the lesson and it is one word long.',
    errors: [
      {
        wrong: 'Saying « Je viens manger ».',
        right: 'Saying « Je viens de manger ».',
        why: 'Without the de it is not about the past at all. It says you are coming to eat, which in the kitchen this lesson opens in is the opposite of what you meant.',
      },
      {
        wrong: 'Changing the second verb: « Il vient de parti ».',
        right: 'Saying « Il vient de partir ».',
        why: 'English puts the past on the second verb and French puts it on nothing. What follows de is the naming form, always, and it does not move for the person or for the time.',
      },
      {
        wrong: 'Saying « Nous viennons » or « Ils venent ».',
        right: 'Saying « Nous venons » and « Ils viennent ».',
        why: 'The two plural stems are the other way round from what the singular suggests. nous and vous use the short one, and only ils doubles the n and brings the vowel out of the nose.',
      },
    ],
  },

  {
    // THE BOUNDARY. Two hand-offs on one card, both named by unit id.
    //
    // aller + an action is the futur proche and it is FUTUR_PROCHE_UNIT's whole
    // lesson. NO FRENCH EXAMPLE OF IT APPEARS ON THIS CARD OR ANYWHERE ELSE: the
    // brief says one line acknowledging it exists is the ceiling, and a card that
    // showed the construction in order to defer it would have taught it.
    type: 'cardDeck',
    id: 's16-notmine',
    title: 'Two Jobs That Are Not In This Lesson',
    frSub: 'Pour plus tard',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['notYours', 'whatFollows'],
    say: 'Two of these are other lessons and one of them is the pattern you have just met, under another name.',
    cards: [
      {
        label: 'aller, again',
        head: 'It has a second job too',
        body: `Everywhere in this lesson ${THE_THREE[0]} has a place after it. Put something else there and it does a different job entirely, the way venir de does. That one is ${unitRef(FUTUR_PROCHE_UNIT)}, and it will make more sense once this one is solid.`,
      },
      {
        label: 'Which small word',
        head: 'au, à, en, chez',
        body: `This lesson used one place and one small word, six times, so that nothing on the screen moved except the verb. Choosing between them is a real question with real rules and it is ${unitRef(PREPOSITION_UNIT)}.`,
      },
      {
        label: 'The shape itself',
        head: 'One Shape, More Than Once',
        body: `This is not the last time one phrase will do two jobs with nothing but the next word to separate them. When it happens again you will be told it is the same shape you met here, at ${unitRef(WHAT_FOLLOWS_UNIT)}.`,
      },
    ],
  },

  /* ── Act 5: out in the world ──────────────────────────────────────────── */

  {
    type: 'practice',
    id: 's17-speak',
    title: 'Say The Whole Sentence',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Say the de. It is one syllable and it is the whole difference between a past and a plan.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    // THE DICTÉE. Fifteen targets, and its weight is on the Owns rather than on
    // the paradigms: five of the fifteen are venir de, against two cells of aller.
    //
    // ITS MODE IS NOT A FREE CHOICE. dicteeMode() switches to WORD tiles above 16
    // letters, and word mode hands every real word over pre-spelled, so a target
    // over the limit tests nothing. `au parc`, `tôt` and `la clé` were picked for
    // that reason and the batch proves every target through the real function.
    //
    // Fourteen of the fifteen are graded on exactly what the lesson teaches. The
    // fifteenth turns on the CAPITAL of Paris, which fold() strips, and that is
    // recorded in DICTEE_NEAR_MISS rather than left to be discovered. Both a1.08
    // and a1.09 recommended a typed surface for a capital before it was measured.
    type: 'dictation',
    id: 's18-dictation',
    title: 'Spell What You Heard',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a2-02-grid' },
    say: 'Fifteen lines. Several of them are the same sound with two different spellings, so read the pronoun.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'scenario',
    id: 's19-scenario',
    title: 'Late, And Already Fed',
    frSub: 'À vous',
    layer: 'core',
    terms: ['justDid', 'nousOn'],
    say: 'You are arriving late at somebody else\'s kitchen. Every answer wants the same four words.',
    setting: 'You have arrived at a friend\'s flat forty minutes after you said you would, and you ate on the way.',
    turns: [
      {
        ai: 'Ah, te voilà. Tu viens de loin ?',
        en: 'Ah, there you are. Have you come a long way?',
        user: 'Non, je viens du quartier. Je viens de rentrer du travail.',
        userEn: 'No, I am from round here. I have just got back from work.',
        alts: [
          { fr: 'Non, je viens de rentrer du travail.', en: 'No, I have just got back from work.' },
          { fr: 'Je viens du quartier, mais je viens de finir tard.', en: 'I am from round here, but I have just finished late.' },
        ],
      },
      {
        ai: 'Tu as faim ? Il reste du poulet.',
        en: 'Are you hungry? There is chicken left.',
        user: 'Merci, mais je viens de manger.',
        userEn: 'Thank you, but I have just eaten.',
        alts: [
          { fr: 'Non merci, je viens de manger dans le train.', en: 'No thank you, I have just eaten on the train.' },
          { fr: "C'est gentil, mais je viens de déjeuner.", en: 'That is kind, but I have just had lunch.' },
        ],
      },
      {
        ai: 'Et Malik ? Il vient aussi ?',
        en: 'And Malik? Is he coming too?',
        user: 'Il vient de partir. Il revient dans une heure.',
        userEn: 'He has just left. He is coming back in an hour.',
        alts: [
          { fr: 'Il vient de partir, mais il revient.', en: 'He has just left, but he is coming back.' },
          { fr: 'Non, il vient de rentrer chez lui.', en: 'No, he has just gone home.' },
        ],
      },
      {
        ai: 'Vous allez au concert tous les deux, alors ?',
        en: 'So you are both going to the concert?',
        user: 'Oui, nous allons au parc après.',
        userEn: 'Yes, and we are going to the park afterwards.',
        alts: [
          { fr: 'Oui, on va au concert ensemble.', en: 'Yes, we are going to the concert together.' },
          { fr: 'Oui, et après on vient de nouveau ici.', en: 'Yes, and afterwards we are coming back here.' },
        ],
      },
      {
        ai: 'Parfait. Tu tiens les billets ?',
        en: 'Perfect. Have you got the tickets?',
        user: 'Oui, je tiens les billets. On vient de les obtenir.',
        userEn: 'Yes, I have the tickets. We have just got them.',
        alts: [
          { fr: 'Oui, je tiens tout.', en: 'Yes, I have everything.' },
          { fr: 'Non, Malik tient les billets.', en: 'No, Malik has the tickets.' },
        ],
      },
    ],
  },

  {
    type: 'reading',
    id: 's20-reading',
    title: 'Ten Past One',
    frSub: 'Treize heures dix',
    layer: 'core',
    terms: ['justDid', 'whatFollows'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage) only when this flag is
    // set WITH questions.
    questionsInModal: true,
    say: 'Read it once for the shape. Both jobs of venir de are in here. Tap any word you do not know.',
    // ONE LINE, deliberately. PassagePage does text.split(/(?<=[.!?»])\s+/) and
    // renders the pieces inline in a single TX, so every authored newline is
    // swallowed.
    //
    // THE A1 RULE, WHICH HOLDS AT A2 (Paul, 2026-08-04): if it is not inside
    // « », it is in English.
    text:
      'The same kitchen, a week later, and this time you have the sentence. '
      + '« Vous venez de loin ? » '
      + '« Non, je viens de Rennes. Et je viens de manger, merci. » '
      + 'She puts the second plate back in the cupboard without a word about it. '
      + '« Et votre collègue ? » '
      + '« Il vient de partir. Il revient à trois heures. » '
      + 'Nothing in the room has changed except that you finished the sentence.',
    // Every entry is a single whitespace-delimited token that really appears
    // between the guillemets: the reader strips punctuation and lowercases before
    // matching, so an entry that is not a bare token is an underline that never
    // appears. MAX_GLOSS_WORDS is four and every key here is one word. Checked
    // through the REAL matcher in the test.
    glossary: [
      { word: 'venez', en: 'come', note: 'vous plus -ez, on the short stem ven-.' },
      { word: 'viens', en: 'come', note: 'Said exactly like tu viens and il vient. Only the pronoun separates them.' },
      { word: 'vient', en: 'has', note: 'The il form, and here it is doing the past job because an action follows the de.' },
      { word: 'partir', en: 'to leave', note: 'The naming form, untouched. Nothing after de ever changes for the person.' },
      { word: 'revient', en: 'is coming back', note: 'vient with re- on the front, and nothing else about it moved.' },
    ],
    questions: [
      { q: 'The passage uses venir de three times. Which of them is about a place?', a: '« Je viens de Rennes. » A city follows the de, so it is where the speaker is from. The other two have an action after de and are about what has just happened.' },
      { q: '« Il vient de partir. » Why is partir in that shape and not another?', a: 'Because the naming form is what goes after de, always. Nothing after de changes for the person, for the time or for anything else.' },
      { q: 'What did the speaker do differently from the week before?', a: 'Nothing except finish the sentence. The refusal was the same and the politeness was the same, and this time the meal was in the past where it belonged.' },
    ],
  },

  /* ── Act 6: prove it ──────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's21-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['justDid', 'whatFollows', 'sameShape'],
    sheetId: 'sheet.a2.02.irreguliers',
    say: 'Rate each card objectively. Again, hard, or easy. The ones you mark again come back.',
    cards: [
      { front: 'How do you say you have just done something?', back: `${REFRAME} viens de, then the naming form.` },
      { front: 'What decides which job venir de is doing?', back: `A place is where you are from, an action is when you did it: ${WHAT_FOLLOWS}.` },
      { front: 'What happens to the verb after de?', back: 'Nothing, ever. It is the naming form for every person and every subject.' },
      { front: 'The six forms of aller', back: PARADIGM.map((r) => r.aller).join(' · ') },
      { front: 'The six forms of venir', back: PARADIGM.map((r) => r.venir).join(' · ') },
      { front: 'The six forms of tenir', back: PARADIGM.map((r) => r.tenir).join(' · ') },
      { front: `Why do you get ${THE_THREE[2]} almost for free?`, back: TENIR_CLAIM },
      { front: 'il vient against ils viennent', back: 'The singular stops in the nose. The plural lands an n and brings the vowel back out.' },
      { front: 'You, having just eaten', back: fr('fr.a2.verbes.279'), say: fr('fr.a2.verbes.279') },
      { front: 'Him, having just left', back: fr('fr.a2.verbes.281'), say: fr('fr.a2.verbes.281') },
      { front: 'You, from Paris', back: fr('fr.a2.verbes.285'), say: fr('fr.a2.verbes.285') },
      { front: 'What you say for we, having just finished', back: fr('fr.a2.verbes.282'), say: fr('fr.a2.verbes.282') },
      { front: 'Several people, holding the key', back: fr('fr.a2.verbes.278'), say: fr('fr.a2.verbes.278') },
      { front: `Name the three built on ${THE_THREE[1]} and ${THE_THREE[2]}`, back: `${COMPOUNDS.join(', ')}. Each one behaves exactly like the verb inside it, and ${unitRef(FAMILY_UNIT)} is where that becomes a rule.` },
      { front: 'How far away is a full past tense?', back: `${PASSE_COMPOSE_DISTANCE} lessons, at ${unitRef(PASSE_COMPOSE_UNIT)}. Until then venir de covers most of what you need.` },
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
    body: `You have met three verbs that do not come apart, and you have found that two of them are the same verb wearing different first letters. More usefully, you can now put something in the past. ${REFRAME} It works on every verb in the language and none of them changes shape to do it. You also know the one thing that can go wrong with it, which is not a matter of form at all: the same three words do a completely different job when a place follows instead of an action. What is left is the part that says whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.`,
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
        id: 'r1-the-three',
        label: 'Three verbs, no stem',
        // Round targets are ordered deliberately. drillForRound returns the FIRST
        // target that has a drill and then stops, so the first name here is what
        // a failing learner actually gets. Every round leads on a DIFFERENT
        // trigger, which is what makes all five drills reachable.
        targets: ['err-aller-stem', 'err-venir-plural'],
        say: 'Nothing here can be worked out. All of it is held.',
        questions: [
          {
            q: 'Nous ___ au parc. (aller)',
            format: 'typeIn',
            accept: ['allons', 'nous allons'],
            answer: 'allons',
            why: 'One of the two cells that keeps any of the naming form. The other four have nothing of aller in them at all.',
            ref: 's04-nostem',
          },
          {
            q: 'Ils ___ au parc. (aller)',
            format: 'typeIn',
            accept: ['vont', 'ils vont'],
            answer: 'vont',
            why: 'vont, and there is no all- in it. The plural of aller is not built from the plural of anything.',
            ref: 's04-nostem',
          },
          {
            q: 'Which of these four is not a form of aller?',
            format: 'mcq',
            opts: ['vais', 'vas', 'allent', 'allez'],
            correct: 2,
            why: 'allent looks like a regular plural built off all-, and aller does not have one. The plural is vont.',
            ref: 's05-six',
          },
          {
            q: 'Nous ___ de finir. (venir)',
            format: 'typeIn',
            accept: ['venons', 'nous venons'],
            answer: 'venons',
            why: `The short stem, ven-, with the -ons you have had since ${unitRef('a2.01')}. The doubled n belongs to ils and to nobody else, and finir after de does not move at all.`,
            ref: 's10-build',
          },
          {
            q: 'Fix this. Several people, just gone: « Ils venent de partir. »',
            format: 'errorSpot',
            accept: ['Ils viennent de partir', 'viennent'],
            answer: 'Ils viennent de partir.',
            why: 'The plural doubles the n and changes the vowel. venent is the short stem given the plural ending, and partir after de was right all along.',
            ref: 's15-errors',
          },
          {
            q: 'Vous ___ la clé. (tenir)',
            format: 'typeIn',
            accept: ['tenez', 'vous tenez'],
            answer: 'tenez',
            why: 'The short stem again, ten-, and the same -ez. This form does not appear once in the whole published corpus, and the pattern still tells you what it is.',
            ref: 's05-six',
          },
        ],
      },
      {
        id: 'r2-just-did',
        label: 'What you just did',
        targets: ['err-no-de', 'err-aller-stem'],
        say: 'Four words, and two of them are the ones people drop.',
        questions: [
          {
            q: 'Fix this. You, turning down lunch: « Je viens manger. »',
            format: 'errorSpot',
            accept: ['Je viens de manger', 'de'],
            answer: 'Je viens de manger.',
            why: 'Without the de it says you are coming to eat, which is the opposite of what you meant. The de is the whole construction.',
            ref: 's01-scene',
          },
          {
            q: 'Il ___ de partir. (venir)',
            format: 'typeIn',
            accept: ['vient', 'il vient'],
            answer: 'vient',
            why: 'The il form, and only the front of the sentence knows about the person. What comes after de never moves.',
            ref: 's08-justdid',
          },
          {
            q: 'What form goes after de?',
            format: 'mcq',
            opts: ['Whatever matches the person', 'The naming form, always', 'The form that ends in -é', 'It depends on the verb'],
            correct: 1,
            why: 'The naming form and nothing else. English puts the past on the second verb and French puts it on nothing at all.',
            ref: 's11-newverb',
          },
          {
            q: 'Fix this. Him, gone a minute ago: « Il vient de parti. »',
            format: 'errorSpot',
            accept: ['Il vient de partir', 'partir'],
            answer: 'Il vient de partir.',
            why: 'partir stays exactly as it is listed. The mistake comes from English, where the second verb does carry the past.',
            ref: 's15-errors',
          },
          {
            q: 'You have never met the verb réserver, to book. She has just booked. Which one?',
            format: 'mcq',
            opts: ['Elle vient de réservé.', 'Elle vient réserver.', 'Elle vient de réserver.', 'Elle vient de réserve.'],
            correct: 2,
            why: 'The naming form after de, untouched, on a verb this lesson never showed you. That is what makes this worth learning once instead of verb by verb.',
            ref: 's11-newverb',
          },
          {
            q: 'On ___ de finir. (venir)',
            format: 'typeIn',
            accept: ['vient', 'on vient'],
            answer: 'vient',
            why: 'on means we and takes the il form, so this is the singular of an irregular verb doing the commonest spoken job in the language.',
            ref: 's10-build',
          },
        ],
      },
      {
        id: 'r3-two-jobs',
        label: 'Which job',
        targets: ['err-wrong-job', 'err-no-de'],
        say: 'Same three words every time. Read the fourth one.',
        questions: [
          {
            q: '« Je viens de Toulouse. » What is this sentence about?',
            format: 'mcq',
            opts: ['Something that just happened', 'Where the speaker is from', 'Where the speaker is going', 'It could be either'],
            correct: 1,
            why: 'A city follows the de, so it is an origin. There is nothing about time in it at all.',
            ref: 's09-twojobs',
          },
          {
            q: '« Elle vient de sortir. » And this one?',
            format: 'mcq',
            opts: ['Where she is from', 'Where she is going', 'It could be either', 'Something she just did'],
            correct: 3,
            why: 'sortir is an action, so it is the recent past. The four words in front of it are identical to the sentence above and settle nothing.',
            ref: 's09-twojobs',
          },
          {
            q: 'What is the only thing that tells the two apart?',
            format: 'mcq',
            opts: ['The person speaking', 'The word that follows de', 'The tone of voice', 'The word before venir'],
            correct: 1,
            why: `Everything up to and including de is the same in both, so nothing earlier in the sentence can help you: ${WHAT_FOLLOWS}.`,
            ref: 's14-trap',
          },
          {
            q: 'Say it: he has just left.',
            format: 'speak',
            target: 'Il vient de partir.',
            why: 'Three words and then the naming form. If the de disappears you have said he is coming to leave, which nobody says.',
            ref: 's17-speak',
          },
          {
            q: 'Fix this. Several people, from Paris: « Ils vient de Paris. »',
            format: 'errorSpot',
            accept: ['Ils viennent de Paris', 'viennent'],
            answer: 'Ils viennent de Paris.',
            why: 'The job is right and the person is not. The plural doubles the n whichever of the two jobs the sentence is doing.',
            ref: 's09-twojobs',
          },
          {
            q: 'Je ___ de Nantes. (venir)',
            format: 'typeIn',
            accept: ['viens', 'je viens'],
            answer: 'viens',
            why: 'Said exactly like tu viens and il vient. The pronoun is carrying the person on its own, as it did on all three regular patterns.',
            ref: 's05-six',
          },
        ],
      },
      {
        id: 'r4-by-ear',
        label: 'One or several',
        targets: ['err-venir-plural', 'err-wrong-job'],
        say: 'The one thing your ear can do here, and the two things it cannot.',
        questions: [
          {
            q: 'Listen. One person, or several?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Ils viennent tôt.', recordingId: 'rec-a2-02-tot' },
            say: 'Ils viennent tôt.',
            opts: ['One', 'It is not a real form', 'Several', 'Either, the sound does not say'],
            correct: 2,
            why: 'An n landed at the end of the verb and the vowel came out of the nose. ils is said exactly like il, so the verb is the whole of the evidence.',
            ref: 's06-tot',
          },
          {
            q: 'Listen. And this one?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Il tient la clé.', recordingId: 'rec-a2-02-grid' },
            say: 'Il tient la clé.',
            opts: ['Several, the n is there', 'One, the word stops in the nose', 'You cannot tell', 'Several, and the verb does not say so'],
            correct: 1,
            why: 'No n arrived, so the vowel stayed nasal and the subject is singular. The plural of this verb would have landed the n.',
            ref: 's06-tot',
          },
          {
            q: 'Tap the letters you do not say.',
            format: 'tapSilent',
            word: 'viennent',
            correct: 'ent',
            why: 'The -ent is silent, exactly as it was on every regular verb. What you hear at the end is the doubled n in front of it.',
            ref: 's06-tot',
          },
          {
            q: 'Which of these could your ear NOT separate?',
            format: 'mcq',
            opts: ['il vient against ils viennent', 'tu vas against il va', 'nous venons against vous venez', 'il tient against ils tiennent'],
            correct: 1,
            why: 'vas and va are one sound. The s is written for tu and said by nobody, so the pronoun is the only evidence there is.',
            ref: 's04-nostem',
          },
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Nous venons tôt.', recordingId: 'rec-a2-02-grid' },
            say: 'Nous venons tôt.',
            opts: ['Ils viennent tôt.', 'Vous venez tôt.', 'Nous venons tôt.', 'Il vient tôt.'],
            correct: 2,
            why: 'Only one of these four ends the verb on a nasal vowel after the n. The others land an n, end on an -ay, or stop dead.',
            ref: 's05-six',
          },
          {
            q: 'Ils ___ la clé. (tenir)',
            format: 'typeIn',
            accept: ['tiennent', 'ils tiennent'],
            answer: 'tiennent',
            why: 'The doubled n, exactly as on viennent. Two verbs and one machine, which is the only reason the second one is in this lesson.',
            ref: 's05-six',
          },
        ],
      },
      {
        id: 'r5-the-family',
        label: 'The family, and the edges',
        targets: ['err-family', 'err-venir-plural'],
        say: 'Two of these are about verbs you were never taught.',
        questions: [
          {
            q: `${COMPOUNDS[0]} is built on which verb?`,
            format: 'mcq',
            opts: [COMPOUND_BASE[COMPOUNDS[0]], 'aller', 'tenir', 'It is not built on anything'],
            correct: 0,
            why: `${COMPOUNDS[0]} is ${COMPOUND_BASE[COMPOUNDS[0]]} with re- on the front, and every one of its six forms is that verb's with the same two letters added.`,
            ref: 's07-three',
          },
          {
            q: 'Il ___ tôt. (revenir)',
            format: 'typeIn',
            accept: ['revient', 'il revient'],
            answer: 'revient',
            why: 'Il vient tôt with re- in front of it. You were never taught this verb and the family told you what it does.',
            ref: 's07-three',
          },
          {
            q: 'Where does the rule about verbs built on other verbs get taught properly?',
            format: 'mcq',
            opts: [Cap(unitRef(FAMILY_UNIT)), 'Here, in this lesson', Cap(unitRef(FUTUR_PROCHE_UNIT)), 'Nowhere, they are learned one at a time'],
            correct: 0,
            why: `${Cap(unitRef(FAMILY_UNIT))} takes it as its own subject. Here it is only evidence that the second verb in this lesson was worth the trouble.`,
            ref: 's07-three',
          },
          {
            q: 'Fix this. Him, getting the key: « Il obtiens la clé. »',
            format: 'errorSpot',
            accept: ['Il obtient la clé', 'obtient'],
            answer: 'Il obtient la clé.',
            why: 'The -s belongs to je and to tu. The compound takes exactly the same endings as the verb inside it, so if you know il tient you know this.',
            ref: 's07-three',
          },
          {
            q: 'Which of these is NOT built on one of this lesson\'s verbs?',
            format: 'mcq',
            opts: [COMPOUNDS[0], COMPOUNDS[1], 'finir', COMPOUNDS[2]],
            correct: 2,
            why: `finir is a regular verb from ${A210_BACKREF} and has nothing to do with these three. The other three are ${THE_THREE[1]} and ${THE_THREE[2]} with something on the front.`,
            ref: 's06-tot',
          },
          {
            q: 'Tu ___ de rentrer. (venir)',
            format: 'typeIn',
            accept: ['viens', 'tu viens'],
            answer: 'viens',
            why: 'The -s that tu takes on every verb in the language, and it is silent here as it always is. Three spellings, one sound, and only the pronoun separates them.',
            ref: 's10-build',
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
    say: 'Four things, and one of them was not supposed to arrive for a while yet.',
    body: `You can build three verbs that do not come apart, and you have found that two of the three are the same verb with a different first letter, which is why ${COMPOUNDS.join(', ')} came free with them. ${TIMELINE} ${REFRAME} It runs on every verb in the language and none of them changes shape to do it, so there is nothing more to memorise. And you know the one way it goes wrong, which is not a form at all: the same three words say where somebody is from when a place follows instead of an action.`,
    points: [
      `${REFRAME}`,
      `A place after de is where you are from, an action after de is when you did it, because ${WHAT_FOLLOWS}.`,
      'The naming form goes after de and never changes for anybody.',
      `${TENIR_CLAIM}`,
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
    throw new Error('a2.02.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Verbs that do not come apart', v: String(THE_THREE.length) },
    { k: 'Cells you learned twice', v: `${PARADIGM.length - TENIR_FOLLOWS_VENIR.length} of ${PARADIGM.length}` },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the shape is the doctrine's: scene, paradigm, Owns, trap, production,
 * proof. THE OWNS ACT IS THE HEAVIEST BY MISSION COUNT, SIX AGAINST THE
 * PARADIGM'S FOUR, and act 4 adds two more on the same construction. It holds
 * the lesson's only tapTable, both production groupDrills and the generation
 * test. The paradigm act carries no `table` of any kind: the single grid the
 * brief asked for lives in the sheet, because a table at layer core is a
 * table-in-core density failure.
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a nice
 * number, because it is divided by the rest points to check no stretch runs past
 * the checkpoint-spacing limit of 22.                                          */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Where the method stops',
    sections: ['s01-scene', 's02-goals', 's03-three'],
    milestone: 'You know why the sentence in the kitchen could not be finished, and what these three verbs buy you.',
    estScreens: 19,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'Three verbs, two shapes',
    sections: ['s04-nostem', 's05-six', 's06-tot', 's07-three'],
    milestone: 'You can build all six forms of all three, and you know which two of them are the same shape.',
    estScreens: 26,
    restPoints: ['s05-six/halfway', 's06-tot/halfway'],
  },
  {
    id: 'act3',
    title: 'What you did twenty minutes ago',
    sections: ['s08-justdid', 's09-twojobs', 's10-build', 's11-newverb', 's12-clock', 's13-flash'],
    milestone: 'You can put any action in the past, and you know which of the two jobs a sentence is doing.',
    estScreens: 40,
    restPoints: ['s09-twojobs/after', 's11-newverb/halfway'],
  },
  {
    id: 'act4',
    title: 'Wait for the next word',
    sections: ['s14-trap', 's15-errors', 's16-notmine'],
    milestone: 'You do not guess which job venir de is doing, and you know which parts of aller are somebody else\'s lesson.',
    estScreens: 21,
    restPoints: ['s14-trap/after-cards'],
  },
  {
    id: 'act5',
    title: 'Out in the world',
    sections: ['s17-speak', 's18-dictation', 's19-scenario', 's20-reading'],
    milestone: 'You have said all of it out loud and spelled the fifteen the recording could not settle.',
    estScreens: 46,
    restPoints: ['s17-speak/halfway', 's18-dictation/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s21-review', 's22-progress', 's23-quiz', 's24-roundup'],
    milestone: 'Lesson complete. Four more irregular units follow this one, and all four rest on it.',
    estScreens: 48,
    restPoints: ['s21-review/halfway', 's23-quiz/after-r2', 's23-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT, not
 * the act it is first mentioned. Act 2 is heavy because it genuinely teaches
 * eighteen paradigm cells, six naming forms, four neighbours' sentences and two
 * compounds; acts 1, 4, 5 and 6 release nothing because they teach no new item.
 *
 * `appartenir` is released by NOTHING and is not in itemIds at all. It is read
 * from Postgres by the manifest and named on no screen.                        */

const DECK_TRANCHE: string[][] = [
  // Act 1 releases NOTHING. The scene runs on display strings: the sentence that
  // bought the second lunch is `Non merci, je mange.`, which is not a corpus row,
  // because a row is released to spaced repetition and this lesson does not drill
  // a sentence whose only job was to fail.
  [],
  // Act 2: the three paradigms, the six naming forms, the four neighbour
  // sentences the cross-lesson screen plays, and the two compounds.
  [
    ...paradigmIds('aller'),
    ...paradigmIds('venir'),
    ...paradigmIds('tenir'),
    ...THE_THREE.map(verbId),
    ...COMPOUNDS.map(verbId),
    ...IMPORTED_SENTENCE_IDS,
    ...familyIds('family'),
  ],
  // Act 3: the Owns and its trap half, both of which act 3 puts on screens.
  [...familyIds('recent'), ...familyIds('origin')],
  [],
  [],
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
    id: 'err-aller-stem',
    description: 'Builds aller off a stem that is not there: je alle, ils allent, nous vons. Four lessons of derivation make the reflex very strong.',
    detectOn: ['s04-nostem', 's05-six', 's23-quiz/r1-the-three'],
    drill: 'drill-aller-six',
    retest: 'retest-aller-six',
  },
  {
    id: 'err-no-de',
    description: 'Drops the de, or conjugates what follows it: je viens manger, il vient de parti. The first stops it being a past and the second is English leaking through.',
    detectOn: ['s01-scene', 's10-build', 's23-quiz/r2-just-did'],
    drill: 'drill-what-follows-de',
    retest: 'retest-what-follows-de',
  },
  {
    id: 'err-wrong-job',
    description: 'Reads or writes the wrong job of venir de, usually the origin one, because the corpus has taught it 52 times and the other one never.',
    detectOn: ['s09-twojobs', 's14-trap', 's23-quiz/r3-two-jobs'],
    drill: 'drill-which-job',
    retest: 'retest-which-job',
  },
  {
    id: 'err-venir-plural',
    description: 'Carries the singular stem into the plural or the reverse: nous viennons, ils venent. The two stems are the other way round from what the singular suggests.',
    detectOn: ['s06-tot', 's15-errors', 's23-quiz/r4-by-ear'],
    drill: 'drill-two-stems',
    retest: 'retest-two-stems',
  },
  {
    id: 'err-family',
    description: 'Treats a compound as a separate verb to be learned, or runs venir\'s pattern onto aller because both are irregular.',
    detectOn: ['s07-three', 's23-quiz/r5-the-family'],
    drill: 'drill-built-on-what',
    retest: 'retest-built-on-what',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-aller-six',
    title: 'The six forms of aller',
    format: 'flashcard',
    coach: 'A person on the left. Say the form out loud before you turn the card, and do not try to build it.',
    pairs: PARADIGM.map((r) => [r.person, r.aller] as [string, string]),
  },
  {
    id: 'retest-aller-six',
    title: 'One more time',
    format: 'mcq',
    q: 'Ils ___ au parc. (aller)',
    opts: ['allent', 'vont', 'allont'],
    correct: 1,
    why: 'vont. Two of the six cells keep the naming form and this is not one of them.',
  },
  {
    id: 'drill-what-follows-de',
    title: 'What goes after de',
    format: 'flashcard',
    coach: 'An action on the left. Say the whole sentence about yourself before you turn the card.',
    pairs: [
      ['manger', 'Je viens de manger.'],
      ['partir', 'Je viens de partir.'],
      ['finir', 'Je viens de finir.'],
      ['rentrer', 'Je viens de rentrer.'],
      ['vendre', 'Je viens de vendre.'],
      ['signer', 'Je viens de signer.'],
    ],
  },
  {
    id: 'retest-what-follows-de',
    title: 'One more time',
    format: 'mcq',
    q: 'She has just finished. Which one?',
    opts: ['Elle vient finir.', 'Elle vient de fini.', 'Elle vient de finir.'],
    correct: 2,
    why: 'The de and then the naming form, untouched. Drop the de and it means she is coming to finish.',
  },
  {
    id: 'drill-which-job',
    title: 'Place, or action?',
    format: 'sort',
    buckets: ['Where you are from', 'What you just did'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [...ORIGIN_IDS, ...RECENT_PAST_IDS.slice(0, 3)],
    coach: 'Play each one and listen past the third word. Everything before it is identical in all six.',
  },
  {
    id: 'retest-which-job',
    title: 'One more time',
    format: 'mcq',
    q: '« Il vient de Lyon. » What is it about?',
    opts: ['Something he just did', 'Where he is from', 'Where he is going'],
    correct: 1,
    why: 'Lyon is a place, so it is an origin. Only the word after de decides, and it decides completely.',
  },
  {
    id: 'drill-two-stems',
    title: 'One person, or several?',
    format: 'sort',
    buckets: ['One person', 'Several'],
    // The six tôt-frame rows: two of a2.10.l1's, two of a2.10.l2's and two of
    // this lesson's. Sorting them is the cross-lesson claim as a task, and it is
    // also what puts the four imported sentences on a screen.
    items: [
      TOT_FRAME[0].singular, TOT_FRAME[0].plural,
      TOT_FRAME[1].singular, TOT_FRAME[1].plural,
      TOT_FRAME[2].singular, TOT_FRAME[2].plural,
    ],
    coach: 'Play each one and listen at the very end of the verb. Three lessons, one word, and three different ways the plural shows itself.',
  },
  {
    id: 'retest-two-stems',
    title: 'One more time',
    format: 'mcq',
    q: 'Nous ___ tôt. (venir)',
    opts: ['viennons', 'venons', 'vienons'],
    correct: 1,
    why: 'The short stem for nous and vous, the doubled one for ils and for nobody else.',
  },
  {
    id: 'drill-built-on-what',
    title: 'Built on what?',
    format: 'flashcard',
    coach: 'A verb on the left. Say which of the three it is built on before you turn the card.',
    pairs: [
      [COMPOUNDS[0], `built on ${COMPOUND_BASE[COMPOUNDS[0]]}, and it behaves exactly like it`],
      [COMPOUNDS[1], `built on ${COMPOUND_BASE[COMPOUNDS[1]]}`],
      [COMPOUNDS[2], `built on ${COMPOUND_BASE[COMPOUNDS[2]]}`],
      ['aller', 'built on nothing, and nothing is built on it here'],
    ],
  },
  {
    id: 'retest-built-on-what',
    title: 'One more time',
    format: 'mcq',
    q: `Il ___ tôt. (${COMPOUNDS[0]})`,
    opts: ['revenit', 'revient', 'reviens'],
    correct: 1,
    why: `Whatever ${COMPOUND_BASE[COMPOUNDS[0]]} does, ${COMPOUNDS[0]} does. il vient, so il revient.`,
  },
];

/* ─── The reference sheet ──────────────────────────────────────────────────
 *
 * ONE, and it is the one place in the level where the method is shown to stop.
 *
 * a2.01 ships "The -ER endings, in full", a2.10 ships "The -IR endings, in full"
 * and a2.11 ships the three regular sets side by side. A fourth ending sheet
 * would be worthless here, because these three verbs have no endings to list:
 * they have forms. So this sheet's centre is a table of FORMS rather than of
 * endings, and its prose says which sheet is now finished and which one this is.
 *
 * A `sheetId` resolves only inside the lesson that declares it (schema.ts:3490,
 * lesson-contract.test.ts:91), so this cannot extend or point at any of the
 * three. Cross-lesson sheets do not exist and a2.11 established that at a price.
 *
 * The density validator refuses a `table` at layer 'core' outright, so the full
 * versions live here at layer 'deep' where density is deliberately fine.
 *
 * ReferenceSheet.tsx draws `teach`, `letterGrid` and `table` and NOTHING ELSE. A
 * `cheatSheet` in here would draw its title and no rows, which a1.13 ships today.
 * The batch refuses any other section type in a sheet.                          */

const SHEET_ID_CONST = 'sheet.a2.02.irreguliers';

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID_CONST,
    title: 'Three verbs that have to be held',
    layer: 'deep',
    contains: ['All three, every person, in one table', 'The two jobs of venir de', 'The three built on top'],
    sections: [
      {
        // THE TABLE THIS SHEET EXISTS FOR, and the one the brief asked for: all
        // three side by side rather than three separate grids, because the point
        // is that two of them are one shape and one is not, and three grids hide
        // that. Read straight off PARADIGM, so no cell here can disagree with the
        // examples mission or with the drill that scores it.
        type: 'table',
        id: 'sheet-three-verbs',
        title: 'All three, every person',
        layer: 'deep',
        cols: ['Person', ...THE_THREE],
        rows: PARADIGM.map((r) => [r.person, r.aller, r.venir, r.tenir]),
      },
      {
        type: 'table',
        id: 'sheet-two-jobs',
        title: 'venir de, and its two jobs',
        layer: 'deep',
        cols: ['What follows de', 'Example', 'What the sentence means'],
        rows: TWO_JOBS.map((j) => [j.after, fr(j.id), j.job]),
      },
      {
        type: 'table',
        id: 'sheet-compounds',
        title: 'The three built on top',
        layer: 'deep',
        cols: ['Verb', 'Built on', 'il form', 'Meaning'],
        rows: COMPOUNDS.map((v) => [
          v,
          COMPOUND_BASE[v],
          PARADIGM[2][COMPOUND_BASE[v] === 'venir' ? 'venir' : 'tenir'].replace(/^./, (c) => (v === 'revenir' ? `re${c}` : v === 'devenir' ? `de${c}` : `ob${c}`)),
          verbEn(v),
        ]),
      },
      {
        type: 'teach',
        id: 'sheet-why-forms',
        title: 'Why this sheet lists forms and not endings',
        layer: 'deep',
        body: `Every reference sheet before this one in the level lists ENDINGS, because every pattern before this one had them: ${A201_BACKREF} holds the -er set in full and ${A210_BACKREF} holds the -ir set, and ${unitRef('a2.11')} puts all three regular sets in one table. That is the whole of the method and it is now finished. These three verbs have no endings to list. There is no stem to put an ending on, so what is written above is the forms themselves, and the only way in is to hold them. Read the third row of the first table and nothing else if you are in a hurry: va, vient, tient. Those are the three you will need in a hurry more than any of the others, because on takes the same form as il, so they cover the spoken we as well. The second and third tables are the part that is actually new. ${TENIR_CLAIM}`,
      },
      {
        type: 'teach',
        id: 'sheet-carries-forward',
        title: 'What carries forward',
        layer: 'deep',
        body: `Two things leave this lesson and neither of them is a table. The first is ${REFRAME} It works on every verb in the language and none of them changes shape to do it, so once you have the four words in front you have the whole construction and there is nothing left to learn about it until ${unitRef(PASSE_COMPOSE_UNIT)}, ${PASSE_COMPOSE_DISTANCE} lessons from here, gives you a past for things that happened yesterday. The second is the shape rather than the phrase: ${WHAT_FOLLOWS}. One set of words, two completely different jobs, and nothing but the next word to separate them. That happens three more times in this level and each time you will be pointed back here, to ${unitRef(WHAT_FOLLOWS_UNIT)}. It is worth noticing now, because a learner who sees a pattern repeat stops believing the language is arbitrary, and this is the first place in the level where that is on offer.`,
      },
    ],
  },
];

export const ALLER_VENIR_LESSON: Lesson = {
  id: 'a2.02.l1',
  unitId: 'a2.02',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'Irréguliers 1 : aller, venir, tenir',
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`), and a2.02 sits at
  // seq 5, which pads to "05". The stored value is a fallback and has to agree
  // with what the renderer computes, or the two disagree the moment something
  // reads this field instead. The batch checks it against the live unit rather
  // than trusting this comment.
  tag: 'A2 · LEÇON 05',
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped the phrase "third person" here in v1
  // because every guard in the band walked `sections`, `sheets` and `terms` and
  // not this. The walk in the batch, the merge and the test now includes `intro`
  // and `overview`, and this field is pinned by its own assertion.
  intro:
    'Three verbs that will not come apart, and the reason they are worth it: by the end of this one you can say what you did twenty minutes ago, which is a past tense nobody was going to give you for a while yet.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v2: FOUND BY MUTATION-TESTING, after v1 had already been applied. Four
  // question stems on s06-tot and s07-three quoted a sentence and then wrote
  // their own full stop, so the seed carried "Il finit tôt.. What did the plural
  // do?" on four learner surfaces. Nothing looked at it: every host-side gate was
  // green, and it surfaced only because a mutation harness printed the raw
  // serialized lesson. `noStop()` fixes it and a test pins it.
  //
  // v3: FOUND ON A PIXEL 6, after v2 had been applied. `WHAT_FOLLOWS` is a term
  // name and term names are lowercase by house convention, and it is interpolated
  // into running prose in seven places. FIVE of them had it at the START of a
  // sentence, so the row detail on the Owns screen read "...the same de as the
  // row above. what comes next decides, and there is no third possibility." That
  // reads as a typo rather than as a quoted term, and every host-side gate was
  // green: the string is legal, the term is declared, the density is fine.
  // Reworded so the term always sits inside its sentence, and a guard now checks
  // the declared term names specifically.
  //
  // v4: FOUND ON A PIXEL 6, and it is the one failure class the host gates cannot
  // see at all. The scene break card's own Continue sat BELOW THE FOLD on first
  // paint: the body ran to 33 words against a ~26 budget, and the right-hand
  // reading row carried BOTH `ipa` and `respell` on a sentence that already wraps
  // to two lines. Ledger §7 records that a2.01 took three device passes to clear
  // exactly this. Body trimmed to 25 words and the right row's `ipa` dropped.
  //
  // The counter moves rather than the content being corrected under the same
  // number, because two different bodies under one version is the drift that has
  // made Postgres and seed.json disagree twice. The batch refuses the alternative
  // outright, which is how this came to be v4 rather than a quiet edit.
  version: 4,

  grammarAssumed: [
    'The six subject pronouns and the nine they cover, introduced in a1.05',
    'on takes third-person-singular agreement, introduced in a1.05',
    'nous as the written first-person plural against on as the spoken one, introduced in a2.01',
    'The present tense of regular -er verbs as a stem plus six endings, introduced in a2.01',
    'The present tense of regular -ir verbs, and that some -ir verbs take no -iss-, introduced in a2.10',
    'The present tense of regular -re verbs, introduced in a2.11',
    "That de elides to d' in front of a vowel, introduced in sons.07",
  ],
  grammarIntroduced: [
    'The present tense of aller, venir and tenir, as forms that cannot be derived from a stem',
    'That the third-person singular of venir and tenir is nasal and the third-person plural is not',
    'venir de plus an infinitive as the recent past',
    'That the infinitive after venir de is invariable for every person',
    'That venir de plus a place and venir de plus an infinitive are one form doing two jobs, separated only by what follows',
    'That the compounds of venir and tenir take their base verb\'s forms',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'Irregular Verbs 1: Aller, Venir, Tenir',
    subFr: 'Irréguliers 1 : aller, venir, tenir',
    introFr: 'Trois verbes à retenir, et un passé récent que personne ne vous a encore donné.',
    minutes: 30,
    difficulty: 3,
    glyph: 'Ir',
    screens: 200,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: ALLER_VENIR_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-02-aller-venir.test.ts, because a constraint
    // on how something is recorded becomes invisible the moment the clip is
    // delivered. The first two pull in OPPOSITE directions, which is the whole
    // difficulty of recording this one.
    recorded: [
      {
        id: 'rec-a2-02-twojobs',
        desc: 'THE TWO JOBS, IN ONE TAKE, AND THE FIRST FOUR WORDS MUST BE INDISTINGUISHABLE: « Je viens de Paris. » then « Je viens de manger. », then « Il vient de Nantes. » then « Il vient de partir. » This is the single most important instruction in this lesson. The whole screen is that nothing before the last word tells you which sentence you are in, so the reader must NOT lean on the de, must not pause after it, and must not colour the opening differently for the two meanings. A reader who knows the sentence is about a city will naturally soften the run-up to it; that instinct has to be suppressed completely. If a listener can tell from the first four words alone which of the two is coming, the recording has taught the opposite of what the screen teaches. Conversational pace, no teaching pause anywhere, and the two halves of each pair back to back.',
        clipIds: ['Je viens de Paris.', 'Je viens de manger.', 'Il vient de Nantes.', 'Il vient de partir.', 'Ils viennent de Paris.', "Ils viennent d'arriver.", 'Tu viens de rentrer.'],
      },
      {
        id: 'rec-a2-02-tot',
        desc: 'THE SIX tôt LINES, IN THREE PAIRS, SINGULAR THEN PLURAL, EACH PAIR IN ONE TAKE: Il finit tôt / Ils finissent tôt, Il part tôt / Ils partent tôt, Il vient tôt / Ils viennent tôt. Here the difference MUST be audible, which is the opposite instruction from the two-jobs clip and is why they are separate recordings. Pair one inserts a syllable (fee-nee against fee-NEES), pair two lands a consonant at the very end (par against part), pair three lands a consonant AND opens the vowel (vyaⁿ against vyenn). The third pair is the one that matters: the singular vowel is fully nasal with no n released at all, and the plural is an oral vowel with a clear n. Do not nasalise the plural even slightly. In every pair the PRONOUN must sound identical on both sides, because it is: il and ils are one sound. Any difference in the pronoun destroys the pair, because the learner will use it instead of the verb. The first two pairs are a2.10.l1\'s and a2.10.l2\'s own sentences and should be read at the same pace those lessons use.',
        clipIds: ['Il finit tôt.', 'Ils finissent tôt.', 'Il part tôt.', 'Ils partent tôt.', 'Il vient tôt.', 'Ils viennent tôt.'],
      },
      {
        id: 'rec-a2-02-justdid',
        desc: 'THE RECENT PAST, SIX SENTENCES, ONE TAKE, FLAT. Je viens de manger / Tu viens de rentrer / Il vient de partir / On vient de finir / Nous venons de vendre la maison / Ils viennent d\'arriver. The instruction is restraint: this construction is completely ordinary in French and a reader who performs it as news will teach the learner to save it for dramatic moments, which is exactly wrong. It is what somebody says when they are asked whether they want lunch. Even pace, no emphasis on de, and no lift at the end of any of them. The scene break card plays from this clip and needs « Non merci, je viens de manger. » in the same flat register, because the whole point of the scene is that the correct sentence is unremarkable.',
        clipIds: ['Je viens de manger.', 'Tu viens de rentrer.', 'Il vient de partir.', 'On vient de finir.', 'Nous venons de vendre la maison.', "Ils viennent d'arriver.", 'Non merci, je viens de manger.'],
      },
      {
        id: 'rec-a2-02-grid',
        desc: 'ALL THREE PARADIGMS, IN THE USUAL PRONOUN ORDER (je, tu, il, nous, vous, ils), one voice, one speed, aller then venir then tenir, then the fifteen dictée sentences in the same take. Within each verb the FIRST THREE MUST BE INDISTINGUISHABLE FROM EACH OTHER where the spelling says they are: vas and va are one sound, viens/viens/vient are one sound, tiens/tiens/tient are one sound. Do not help by touching the final letter of any of them. vais is genuinely different from vas and va and should be left different. The dictée sentences are the ones a learner replays four times while typing, so they need to be even in pace and completely flat in emphasis: any lean on an ending is a hint the screen is not supposed to give.',
        clipIds: ['Je vais au parc.', 'Tu vas au parc.', 'Il va au parc.', 'Nous allons au parc.', 'Vous allez au parc.', 'Ils vont au parc.', 'Je viens tôt.', 'Tu viens tôt.', 'Il vient tôt.', 'Nous venons tôt.', 'Vous venez tôt.', 'Ils viennent tôt.', 'Je tiens la clé.', 'Tu tiens la clé.', 'Il tient la clé.', 'Nous tenons la clé.', 'Vous tenez la clé.', 'Ils tiennent la clé.'],
      },
      {
        id: 'rec-a2-02-aller',
        desc: 'The six forms of aller alone, read as two groups with a short gap between them: vais, vas, va, vont, then allons, allez. The grouping IS the teaching and the gap is what carries it: four of the six begin with a v sound and two with a vowel, and no rule joins the two halves. Keep tu vas and il va identical; they are one sound and the s is written for tu and said by nobody. Do not slow down for the two all- forms, which a reader will want to do because they are longer.',
        clipIds: ['Je vais au parc.', 'Tu vas au parc.', 'Il va au parc.', 'Ils vont au parc.', 'Nous allons au parc.', 'Vous allez au parc.'],
      },
      {
        id: 'rec-a2-02-verbs',
        desc: 'The six naming forms, read as a flat list at conversational pace, one voice: aller, venir, tenir, revenir, devenir, obtenir. The last five all end in the same -NEER and that sameness is the teaching, so do not vary the intonation to keep the list interesting. Keep roughly a second between them so a learner can repeat into the gap. aller is the odd one out and should not be given any extra weight for it.',
        clipIds: ['aller', 'venir', 'tenir', 'revenir', 'devenir', 'obtenir'],
      },
      {
        id: 'rec-a2-02-scene',
        desc: 'The opening scene, French bubbles only. A woman in her sixties in her own kitchen, entirely at ease, already serving before the question is answered. She is not pressing and she is not offended: the whole scene turns on nobody minding and nobody checking, so any hint of insistence or of hurt in « Voilà. Ce n\'est pas beaucoup, mangez. » would destroy it. She heard an answer she understood and acted on it, and she is right to have done so.',
        clipIds: ['Vous arrivez juste à temps. Asseyez-vous.', "Voilà. Ce n'est pas beaucoup, mangez."],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the tests, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const ALLER_VENIR_ITEM_IDS = ITEM_IDS;
export const ALLER_VENIR_SPEAK_IDS = SPEAK_IDS;
export const ALLER_VENIR_DICTATION_IDS = DICTATION_IDS;

/** THE SECTION THAT MUST CARRY THE TWO-JOB CONTRAST, with both rows in TWO_JOBS
 *  order. Named here rather than in the test, so the test asserts against the
 *  lesson's own claim and a rename cannot silently move the assertion to a
 *  section that no longer holds it. */
export const TWO_JOBS_SECTION_ID = 's09-twojobs';
/** The row order of that section, so the check reads the lesson's own ordering
 *  rather than re-deriving one. */
export const TWO_JOBS_ROWS = TWO_JOBS_ROW_IDS;
/** The section that closes the a2.10 loop by showing the mechanism. */
export const TOT_SECTION_ID = 's06-tot';
/** The section that names the compounds and hands the principle to a2.15. */
export const FAMILY_SECTION_ID = 's07-three';
/** The section that hands the futur proche and the prepositions over. */
export const BOUNDARY_SECTION_ID = 's16-notmine';
/** The section that must be the ONLY home of the nous/on statement. */
export const NOUS_ON_SECTION_ID = 's10-build';
/** The one sheet, so a future author who adds a second one fails a test rather
 *  than shipping a fifth competing reference. */
export const SHEET_ID = SHEET_ID_CONST;
