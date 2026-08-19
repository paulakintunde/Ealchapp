// a2.12.l1 "Irréguliers 2 : faire, dire, lire" — the mission journey.
//
// ── THIS IS A FIRST BUILD ──────────────────────────────────────────────────
//
// Probed rather than assumed: the unit dump says `"lessons": []`, so there is no
// pre-v2 stub to rebuild and the version counter starts at 1.
//
// ── The Owns: the reach of faire, and it is NOT the three paradigms ───────
//
//   faire les courses · faire la cuisine · il fait beau · faire la queue
//
// The canDo asks for "the common expressions built on faire", so the expressions
// ARE the lesson and the paradigm is the scaffolding under them. This is the
// first lesson in batch 1 where that is true, and the act structure says so:
//
//   act 2   the three verbs          4 missions
//   act 3   everything faire does    6 missions, and the only tapTable
//
// Six against four, and act 4's trap is a form question that only exists because
// the expressions have to be usable. If that ever inverts, this has become the
// fifth consecutive table lesson that doctrine §B.5 exists to prevent.
//
// ── WHY lire IS HERE AT ALL, WHICH IS THE PART THAT COULD HAVE GONE WRONG ─
//
// The brief asks it directly: "whether lire earned its place or is carried by
// the unit title". It earned it, and the argument is `CONTROL_BREAKS` in the
// corpus, which is DERIVED rather than asserted: `BREAKS` collects every cell at
// `vous` or `ils` whose form does not end in the ending a2.01 taught, and
// CONTROL_BREAKS is the subset belonging to lire. It is empty. If it ever stops
// being empty, lire has become a third trap and the lesson has no measuring
// stick, and the build stops before any prose is read.
//
// The measurement also corrects the brief. It says the three shapes are
// `vous faites`, `vous dites` and `ils font`; that is right and it is not the
// whole picture, because `ils disent` ends in -ent like every regular plural in
// the language. So `faire` breaks at both cells and `dire` breaks at one, and
// the lesson says so rather than implying that dire is irregular throughout.
//
// ── THE TWO CLOSED CLUBS, WHICH IS THE CROSS-LESSON PAYOFF ────────────────
//
//   vous êtes · vous faites · vous dites          three verbs, a1.06 + here
//   ils sont · ils ont · ils vont · ils font      four verbs, a1.06 a1.07 a2.02
//                                                 + here
//
// Both are closed sets in the present tense and the learner already holds most
// of both. This lesson is where each one is COMPLETED, which is a much stronger
// thing to tell somebody than "here are three more irregular verbs". Every
// member carries the unit id where it was met, measured against content_units on
// 2026-08-12, and the counts in the prose are derived from the arrays.
//
// ── THE WEATHER, AND WHY IMPORTING IT IS THE POINT ────────────────────────
//
// a1.10 (seq 14) shipped the weather and its own grammarIntroduced says it
// taught `il fait` + an adjective "as one frozen form and never conjugated".
// So the five weather expressions are not a borrowing of convenience: this is
// the lesson that unfreezes them. The learner meets `il fait beau` again and
// finds out it was made of something.
//
// Not one weather WORD is taught. `la pluie`, `le vent`, `la neige` and the rest
// are named on no production surface, and the guard is scoped to production
// surfaces rather than to every string, because s16-notmine has to be able to
// say the word weather in order to hand it back.
//
// ── Layout notes that are bugs, not preferences ───────────────────────────
//
// - `tapTable` is NOT in ownsLayout() (LessonPager.tsx:162), so s09-tap renders
//   inside a SCROLLING page and corrections §8 puts the ceiling at SIX ROWS on a
//   Pixel 6. The brief asks for thirty rows here. Thirty is five screens of
//   scroll with no checkpoint in it, so the tapTable holds the six GROUPS and
//   the thirty reach screens through four groupDrills, which do own their
//   layout. That is also the better teaching: six rows is the rule, thirty rows
//   is a word list.
// - A `table` at layer core is a table-in-core density failure, so the paradigm
//   grid lives in the sheet and the flow gets `examples`.
// - `size` is not decoration. density.logic.ts reads `xl` as a 12-word cap on
//   EVERY string in the section except `say`, `hint`, `note`, `why` and `tip`.
//   s08-english is the only xl section here and every display string in it is
//   short by construction.
// - `commonErrors` needs `swipe: true` or it renders a blank screen.
// - `reading` needs `questionsInModal` WITH questions or its glossary reaches no
//   renderer, and PassagePage splits on sentence boundaries so an authored
//   newline is swallowed: s20-reading is one line.
// - Three term chips per section, maximum.
// - A `groupDrill` at `lg` may carry items and a check in one group; only an
//   `xl` one may not. Every groupDrill here is lg.
// - s06-vousrow CARRIES EXACTLY ONE GROUP, and that is the layout claim the
//   brief says the test must assert: `vous faites`, `vous dites` and
//   `vous lisez` are three adjacent cells on one screen. Two groups would put a
//   heading between them and the learner would compare across it.

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
  CONTROL_CLAIM,
  FAIRE_DIRE_LIRE_TERMS,
  NOT_THE_NOUNS,
  NOUS_ON,
  ONT_CLAIM,
  REACH_CLAIM,
  REFRAME,
  TES_CLAIM,
  WHAT_FOLLOWS,
  WHAT_FOLLOWS_UNIT,
} from './faire-dire-lire-terms.ts';
import { REFRAME as A201_REFRAME } from './verbes-er-terms.ts';
import { REFRAME as A202_REFRAME } from './aller-venir-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }
import {
  ALLER_UNIT,
  AUTHORED_EXPRESSION_IDS,
  AUTHORED_IDS,
  BREAKS,
  BY_ID,
  DICTATION_IDS,
  EXPRESSION_TARGET,
  LEARNED_ENDINGS,
  MODAL_UNIT,
  ONT_CLUB,
  PARADIGM,
  PARADIGM_IDS,
  REACH,
  REACH_ORDER,
  RESPELL_REPAIRS,
  SHOPPING_UNIT,
  TES_CLUB,
  THE_CONTROL,
  THE_THREE,
  THE_VERB,
  WEATHER_UNIT,
  bare,
  en,
  fr,
  paradigmIds,
  sub,
  type Reach,
} from './faire-dire-lire-corpus.ts';
import {
  IMPORTED_EXPRESSIONS,
  IMPORTED_IDS,
  expressionId,
  importedEn,
  importedFr,
  repairedRespell,
  verbCard,
  verbId,
} from './faire-dire-lire-imported.ts';

export {
  A201_REFRAME, A202_REFRAME, CONTROL_CLAIM, NOT_THE_NOUNS, NOUS_ON, ONT_CLAIM,
  REACH_CLAIM, REFRAME, TES_CLAIM, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT,
};

/* ─── The items this lesson touches ────────────────────────────────────────
 *
 * 25 authored plus 26 imported by id: three naming forms and twenty-three
 * expressions, out of FIFTEEN themes. Two of the twenty-six are repaired and
 * three gain a `flashcard` drill; nothing else about any of them moves. The
 * batch re-checks the imported half against POSTGRES rather than the seed,
 * because the two drift and an id that exists only in the seed renders as an
 * empty card.
 *
 * The read-only rows — `écrire`, `faire son lit`, the second `faire la queue` —
 * are NOT here. They are read from Postgres by the manifest, named on no screen,
 * and released to nothing.                                                    */

const ITEM_IDS = [...new Set([...AUTHORED_IDS, ...IMPORTED_IDS])];

/** THE THIRTY, in tapTable group order: every imported expression and every
 *  authored one, sorted into the six English verbs French refuses to use.
 *
 *  DERIVED from the two sources rather than listed, so an expression that is
 *  dropped from either one falls out of here and every count that depends on it
 *  goes red. The brief asks for the thirty to be asserted individually by name;
 *  they are, in the test, against this. */
const GROUPED: Record<Reach, string[]> = REACH_ORDER.reduce((acc, k) => {
  acc[k] = [
    ...IMPORTED_EXPRESSIONS.filter((e) => e.reach === k).map((e) => e.id),
    ...AUTHORED_EXPRESSION_IDS.filter((id) => BY_ID.get(id)!.reach === k),
  ];
  return acc;
}, {} as Record<Reach, string[]>);

/** Every expression id, in group order. THIRTY, and the count is derived. */
const EXPRESSION_IDS: string[] = REACH_ORDER.flatMap((k) => GROUPED[k]);

/** Spoken practice draws only from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs.
 *
 *  THE EIGHTEEN PARADIGM SENTENCES AND NOT THE THIRTY EXPRESSIONS, and that is a
 *  placement decision rather than an omission. Every one of the eighteen is a
 *  full sentence with a subject in it, and an expression on its own is a naming
 *  form with nobody doing it — a2.01 settled that a bare naming form is not a
 *  thing anybody says out loud, and every expression here is exactly that shape.
 *  The expressions are spoken instead inside the scenario and played by the
 *  tapTable, where they arrive in a situation. */
const SPEAK_IDS = PARADIGM_IDS;

/** THE ROW ORDER OF THE tapTable, by group key. Index-aligned with REACH_ORDER,
 *  and the batch asserts that too. Six rows, which is corrections §8's measured
 *  ceiling on a Pixel 6. */
const REACH_ROW_KEYS = [...REACH_ORDER];

/** The expression each tapTable row plays when it is tapped. The first of its
 *  group, derived, so a row cannot end up playing a phrase from a group it does
 *  not head. */
const rowExample = (k: Reach): string => GROUPED[k][0];

/** A sentence with its trailing full stop removed, for quoting one INSIDE a
 *  question. Without it `${fr(id)}. And this one?` renders as
 *  "Il fait le lit.. And this one?", which a2.02 shipped to the seed and found
 *  by mutation-testing rather than by any guard. */
const noStop = (s: string): string => s.replace(/\.$/, '');

/** One authored row as a groupDrill item, so no screen restates a gloss or a
 *  respelling the corpus already holds. */
const rowCard = (id: string) => ({ fr: fr(id), itemId: id, respell: sub(id), en: en(id) });

/** One EXPRESSION as a groupDrill item, authored or imported.
 *
 *  The two are read differently and the difference matters: an authored row's
 *  respelling is in the corpus, and an imported row's is in the database and may
 *  have been REPAIRED by this build. A screen that read `row.respell` straight
 *  off the manifest would print `na-ta-SYOHN` while Postgres held the repaired
 *  form. Three imported rows carry no respelling at all and render without a
 *  bracket, which is named in NO_RESPELL_IDS rather than left to be found. */
const exprCard = (id: string) => {
  const own = BY_ID.get(id);
  if (own) return { fr: own.fr, itemId: id, respell: sub(id), en: own.en };
  const r = repairedRespell(id, RESPELL_REPAIRS);
  return { fr: importedFr(id), itemId: id, respell: r ? `[${r}]` : '', en: importedEn(id) };
};

/** An expression's French, authored or imported, for prose that quotes one. */
const exprFr = (id: string): string => (BY_ID.get(id)?.fr ?? importedFr(id));
/** And its English gloss. */
const exprEn = (id: string): string => (BY_ID.get(id)?.en ?? importedEn(id));

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A2 register of stakes is loss of fluency under load. The brief asked for
 * somebody reaching for a verb that does not exist in French, trying to say
 * "I do the shopping" by translating "do", and stalling.
 *
 * The failure is specific to this lesson and no neighbour could have staged it:
 * the learner HAS the verb. They have had `je fais` since before this lesson
 * started, and what stops the sentence is that they are looking for three more
 * verbs which are not there. Nobody is impatient and nothing is mispronounced.
 * The list simply gets done without them.
 *
 * Beats are extracted to a named const, each with its own `size` and `audio`.
 * The section sets NO size: ownsLayout() ignores it and density.logic.ts would
 * read xl as a 12-word cap on prose.                                          */

/** The break card's right-hand row, DERIVED from two corpus rows rather than
 *  typed: the front of `Je fais le lit.` and the back of the imported
 *  `faire le ménage`. A hand-typed copy would be free to drift from both, and
 *  the test asserts the two halves against their sources. */
const SCENE_RIGHT_FR = `Je fais ${importedFr(expressionId('faire le ménage')).replace(/^faire /, '')}.`;
const SCENE_RIGHT_RESPELL = `${bare('fr.a2.verbes.301').split(' ').slice(0, 2).join(' ')} ${(repairedRespell(expressionId('faire le ménage'), RESPELL_REPAIRS)).replace(/^FEHR /, '')}`;

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A shared kitchen in Lyon, ten on a Sunday morning. Your flatmate is at the table with a coffee and a list of what has to happen before seven, when four people are coming to eat.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Karim',
    fr: 'Alors, tu fais quoi ce matin ?',
    en: 'So, what are you doing this morning?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-12-scene' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Je...',
    en: 'I...',
    stage: 'You have four things in your head and they are in English: the shopping, the cooking, the washing-up, the beds. You are looking for four verbs.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'He has the pen on the list. What goes out?',
    options: [
      {
        fr: 'Je fais les courses et le ménage.',
        en: 'one verb, used twice',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Je... je ne sais pas.',
        en: 'the only sentence you can finish',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'He crosses two things off and starts on the third. Nothing about that was difficult.',
      breaks: 'He crosses nothing off. In a minute he will do all four himself, and you will have agreed to it by saying nothing.',
    },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Karim',
    fr: "D'accord. Je m'occupe du reste.",
    en: 'All right. I will take care of the rest.',
    stage: 'He picks the list back up. You had the verb the whole time.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a2-12-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    // BUDGETED, not chosen. `scene` is absent from ownsLayout(), so the card
    // cannot size itself, and a2.01 took three device passes on a Pixel 6 to
    // establish what fits: a heading of about 13 characters, a body of 24 to 26
    // words, a coach line under 9, reading-row glosses under about 24
    // characters, and a reading-row `fr` under about 22. Ledger §7. Those
    // figures are asserted by a2-12-faire-dire-lire.test.ts rather than trusted
    // to this comment.
    heading: 'The list',
    body: 'He asked what you are doing. You knew the verb for doing. The four things behind it were the part nobody had given you.',
    // THE WRONG ROW CARRIES NO RESPELLING and the right one does, which is the
    // ledger §7 budget: a row with both `ipa` and `respell` is four lines on its
    // own and only one of the two rows can afford it.
    wrong: {
      fr: 'Je fais.',
      ipa: '/ʒə fɛ/',
      en: 'the sentence stops',
    },
    right: {
      fr: SCENE_RIGHT_FR,
      ipa: '/ʒə fɛ lə me.naʒ/',
      respell: `[${SCENE_RIGHT_RESPELL}]`,
      en: 'one verb, one thing',
    },
    coach: 'One verb. Then the thing.',
    // Audio-first: the ear answers before the eye can. `autoplay` is NOT set. It
    // is declared in schema.ts and implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a2-12-reach' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Nobody was impatient and nothing was misheard. The list got done and you were not part of it, because the sentence stopped one word in.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the verb you already had ──────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Sunday List',
    frSub: 'La liste du dimanche',
    render: 'screens',
    layer: 'core',
    terms: ['theReach', 'notTheNouns'],
    say: {
      text: 'Nothing goes wrong out loud here. Watch what happens when you go looking for a verb that is not there.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A shared kitchen, a list on the table',
      city: 'Lyon',
      time: 'Ten on a Sunday morning',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    // The reframe is referenced, never retyped, so this appearance cannot drift
    // out of agreement with the others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} ${REACH_CLAIM}`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end you will be able to say most of what anybody does in a day.`,
    goals: [
      { t: `Use ${EXPRESSION_TARGET} everyday expressions`, s: 'Do the shopping, cook, queue, pack, go swimming. One verb covers all of them and the noun does the work.' },
      { t: 'Get the two forms that catch everybody', s: 'vous faites, not faisez. ils font, not faisent. Both are closed lists and both finish here.' },
      { t: 'Build all six forms of three verbs', s: `${THE_THREE.join(', ')}, side by side, so you can see which parts of them are actually strange.` },
      { t: 'Hear one person against several', s: 'il fait stops dead. ils font comes out of the nose. On these verbs the ear really does help.' },
    ],
  },

  {
    // THE OPENING MOVE, and it is a placement rather than an introduction.
    //
    // Four lessons of derivation and one of memorisation have gone by, and this
    // one is neither: the forms are a short job and the reach is a long one.
    // Both predecessors' reframes are imported from their own terms files so
    // that a rewording there moves this card too.
    type: 'cardDeck',
    id: 's03-reach',
    title: 'One Verb, A Dozen English Ones',
    frSub: 'Un seul verbe',
    hint: 'Swipe through the four cards. The third one is the whole lesson.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theReach', 'notTheNouns'],
    say: 'Four cards. Read the third one twice, then look at the list on the fourth.',
    cards: [
      {
        label: 'What you have',
        head: 'Three ways of building',
        body: `${A201_REFRAME} That, and the two sets after it, cover most of the verbs in the language. ${Cap(unitRef(ALLER_UNIT))} then gave you three that will not come apart at all.`,
      },
      {
        label: 'What is different',
        head: 'The forms are the short job',
        fr: THE_THREE.join(' · '),
        sub: 'eighteen forms, and three of them are surprising',
        body: 'These three do not come apart either, and there are only three cells across all of them that will catch you. That part takes ten minutes. The rest of this lesson is about something else entirely.',
      },
      {
        label: 'What is long',
        head: 'Where the first one goes',
        fr: THE_VERB,
        sub: `${EXPRESSION_TARGET} everyday things`,
        body: `${REFRAME} Do the shopping, cook, queue, pack, be sunny. English changes verb for every one of those and French does not change it once.`,
      },
      {
        label: 'What you are paid',
        head: 'A lot of ordinary days',
        fr: exprFr(expressionId('faire les courses')),
        sub: `[${repairedRespell(expressionId('faire les courses'), RESPELL_REPAIRS)}]`,
        body: `${REACH_CLAIM} Most of what anybody asks you about a Saturday is somewhere in that list, and you will be able to answer with one verb and a noun.`,
      },
    ],
  },

  /* ── Act 2: three verbs, and the three cells that catch people ────────── */

  {
    // THE THREE NAMING FORMS, AND THE SINGULAR THAT COSTS NOTHING.
    //
    // A groupDrill, because `vocabThemes` cards carry no itemId and this is
    // where all three imported rows have to reach a screen: a1.08 declared 43
    // itemIds that resolved perfectly and were drawn by nothing.
    //
    // The second group is the je cells of all three, and its point is that
    // nothing is happening: fais, dis, lis are the shape a2.11 already taught.
    type: 'groupDrill',
    id: 's04-verbs',
    title: 'Three Verbs, And The Easy Half',
    frSub: 'Les trois verbes',
    layer: 'core',
    size: 'lg',
    terms: ['theReach', 'theControl'],
    sheetId: 'sheet.a2.12.faire',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-12-verbs' },
    say: 'Three naming forms, then the first form of each. Look at how little is happening in the second group.',
    groups: [
      {
        label: 'The three you learn',
        items: THE_THREE.map(verbCard),
        check: {
          q: `Which of the three is the one this lesson spends most of its time on?`,
          opts: [THE_THREE[1], THE_VERB, THE_CONTROL, 'All three equally'],
          correct: 1,
          why: `${THE_VERB} turns up in ${EXPRESSION_TARGET} everyday expressions and the other two turn up in almost none. The forms take the same effort for all three; the reach does not.`,
        },
      },
      {
        label: 'And the first form of each',
        items: [paradigmIds('faire')[0], paradigmIds('dire')[0], paradigmIds('lire')[0]].map(rowCard),
        check: {
          q: 'What do these three have in common at the end of the verb?',
          opts: ['They all add a syllable', 'Nothing, they are all different', 'They all end in a silent -s', 'They all end in -e'],
          correct: 2,
          why: `fais, dis, lis. The same silent -s you have put on je and tu since ${unitRef('a2.01')}, and it is doing the same job here. The singular of all three verbs is ordinary.`,
        },
      },
    ],
  },

  {
    // THE SINGLE GRID, AS EXAMPLES RATHER THAN AS A TABLE.
    //
    // The brief asked for ONE table with all three verbs side by side rather
    // than three tables, and for lire to be IN it, because that is what makes
    // the control case visible. A `table` at layer core is a table-in-core
    // density failure, so the grid itself lives in the sheet and the flow gets
    // the same six rows as examples, one line per person, all three verbs on
    // each line.
    //
    // Every line reads its forms out of PARADIGM and its note out of BREAKS, so
    // no cell here can disagree with the sheet or with the drill that scores it,
    // and the "which cells are strange" claim is measured rather than typed.
    type: 'examples',
    id: 's05-grid',
    title: 'All Three, One Line Each',
    frSub: 'Les trois, côte à côte',
    layer: 'core',
    terms: ['theControl', 'theTes'],
    sheetId: 'sheet.a2.12.faire',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-12-grid' },
    say: 'Six lines. Four of them hold no surprises at all. Find the two that do.',
    examples: PARADIGM.map((r) => {
      const broken = BREAKS.filter((b) => b.person === r.person);
      return {
        fr: `${r.faire} · ${r.dire} · ${r.lire}`,
        en: r.person,
        note: broken.length
          ? `${broken.map((b) => b.form).join(' and ')} did not take the ending you expected. ${r.lire} did.`
          : 'Nothing here is new. All three behave.',
      };
    }),
  },

  {
    // THE LAYOUT THE BRIEF SAYS THE TEST MUST ASSERT.
    //
    // ONE GROUP, THREE ITEMS, IN ORDER: vous faites, vous dites, vous lisez.
    // Three adjacent cells on one screen, so the learner sees the pattern and
    // its limit at once. Two groups would put a heading between them and the
    // comparison would happen across it; a second section would put it across a
    // swipe.
    //
    // The batch, the merge and the test all check the group COUNT and the item
    // ORDER by index rather than "the three strings appear somewhere".
    type: 'groupDrill',
    id: 's06-vousrow',
    title: 'Three Cells, Side By Side',
    frSub: 'vous faites · vous dites · vous lisez',
    layer: 'core',
    size: 'lg',
    terms: ['theTes', 'theControl'],
    sheetId: 'sheet.a2.12.faire',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-12-vous' },
    say: `Three lines, one screen. The ending -${LEARNED_ENDINGS[0].ending} is what you expect, and only one of these three gives it to you.`,
    groups: [
      {
        label: 'The vous form of all three',
        items: [
          'fr.a2.verbes.305',
          'fr.a2.verbes.311',
          'fr.a2.verbes.317',
        ].map(rowCard),
        check: {
          q: 'Two of these three do not take the ending every other verb takes. Which one does?',
          opts: [PARADIGM[4].faire, PARADIGM[4].dire, PARADIGM[4].lire, 'None of them'],
          correct: 2,
          why: `${TES_CLAIM} ${CONTROL_CLAIM}`,
        },
      },
    ],
  },

  {
    // THE EAR MISSION, AND HERE THE EAR REALLY DOES WORK.
    //
    // Three number pairs, singular then plural, and every one is audible:
    // FEH against FOHⁿ, DEE against DEEZ, LEE against LEEZ. `il` and `ils` are
    // one sound, so the verb is the whole of the evidence.
    //
    // NOTE THE DIRECTION. On a2.02's venir the SINGULAR was the nasal one; here
    // the plural is, and on the other two verbs neither side is nasal at all. A
    // learner who arrives expecting a2.02's shape gets it corrected here.
    type: 'listening',
    id: 's07-ils',
    title: 'One Person, Or Several',
    frSub: 'Un ou plusieurs',
    layer: 'core',
    questionsInModal: true,
    terms: ['theOnt', 'theControl'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-12-number' },
    say: 'Six lines in three pairs. The pronoun sounds the same on both sides of every pair, so listen at the end of the verb.',
    // Singular then plural, three times, so the learner compares within a pair
    // rather than across a gap. Written in that order rather than filtered out
    // of NUMBER_PAIRS, because the ORDER is the mission.
    lines: [
      { fr: fr('fr.a2.verbes.303'), en: en('fr.a2.verbes.303') },
      { fr: fr('fr.a2.verbes.306'), en: en('fr.a2.verbes.306') },
      { fr: fr('fr.a2.verbes.309'), en: en('fr.a2.verbes.309') },
      { fr: fr('fr.a2.verbes.312'), en: en('fr.a2.verbes.312') },
      { fr: fr('fr.a2.verbes.315'), en: en('fr.a2.verbes.315') },
      { fr: fr('fr.a2.verbes.318'), en: en('fr.a2.verbes.318') },
    ],
    questions: [
      {
        q: `${noStop(fr('fr.a2.verbes.303'))} against ${noStop(fr('fr.a2.verbes.306'))}. What happened to the verb?`,
        opts: ['A consonant arrived at the end', 'The whole vowel changed and went into the nose', 'A syllable was pushed in', 'Nothing you can hear'],
        correct: 1,
        why: 'FEH becomes FOHⁿ. Nothing was added and nothing was taken away: it is a different sound altogether, which is why this is the easiest plural in the lesson to hear.',
      },
      {
        q: `Now ${noStop(fr('fr.a2.verbes.309'))} against ${noStop(fr('fr.a2.verbes.312'))}.`,
        opts: ['The vowel went into the nose', 'A syllable was pushed in', 'A z arrived at the end', 'Nothing changed'],
        correct: 2,
        why: 'DEE becomes DEEZ. The z is the end of the stem, waking up because the ending after it is longer. The vowel did not move.',
      },
      {
        q: `And ${noStop(fr('fr.a2.verbes.315'))} against ${noStop(fr('fr.a2.verbes.318'))}.`,
        opts: ['A syllable was pushed in', 'The same z as the verb before it', 'The vowel went into the nose', 'Two consonants arrived'],
        correct: 1,
        why: `LEE becomes LEEZ, exactly as ${THE_THREE[1]} did. ${CONTROL_CLAIM}`,
      },
      {
        q: 'So which of the three plurals is the one that does something different?',
        opts: [THE_THREE[1], THE_CONTROL, 'None, all three do the same thing', THE_VERB],
        correct: 3,
        why: `${THE_THREE[1]} and ${THE_CONTROL} both land a z and keep the vowel. ${THE_VERB} throws the whole form away and starts again, which is why it is the one worth drilling.`,
      },
    ],
  },

  /* ── Act 3: everything faire does. THE OWNS, six missions. ───────────── */

  {
    // The only xl section in the lesson, and the one place xl is correct: every
    // display string is short by construction. density.logic.ts caps EVERY
    // string in an xl section at 12 words except say, hint, note, why and tip.
    type: 'cardDeck',
    id: 's08-english',
    title: 'The Verb English Keeps Changing',
    frSub: 'Un verbe pour tout',
    hint: 'Swipe. Six English verbs, and the same French one under all of them.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    terms: ['theReach', 'notTheNouns'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], audioFirst: true, recordingId: 'rec-a2-12-reach' },
    say: `${REFRAME} Listen to each one before you read it, and watch the English verb move while the French one does not.`,
    cards: REACH_ORDER.map((k, i) => ({
      label: `${i + 1} of ${REACH_ORDER.length}`,
      head: `English says ${REACH[k].english}`,
      fr: exprFr(rowExample(k)),
      sub: exprEn(rowExample(k)),
      body: REACH[k].gloss,
    })),
  },

  {
    // THE HEADLINE SCREEN, AND IT IS THE ONLY tapTable IN THE LESSON.
    //
    // SIX ROWS, ONE PER ENGLISH VERB. The brief asks for a row per expression
    // and corrections §8 measures the ceiling at six rows on a Pixel 6, because
    // tapTable is not in ownsLayout() and renders inside a scrolling page.
    // Thirty rows is five screens of scroll with no checkpoint in it.
    //
    // And six is the better teaching anyway. A learner reading thirty rows has a
    // word list; a learner reading six has the rule, with the list one tap
    // behind each row. The thirty reach screens in the four groupDrills that
    // follow, which DO own their layout.
    type: 'tapTable',
    id: 's09-tap',
    title: 'Six Verbs English Needs, One French One',
    frSub: 'Ce que faire remplace',
    layer: 'core',
    terms: ['theReach', 'whatFollows'],
    sheetId: 'sheet.a2.12.faire',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-12-reach' },
    say: 'Tap each row to hear one of its expressions, and tap again to see the rest of that group.',
    cols: ['English reaches for', 'and French says'],
    rows: REACH_ROW_KEYS.map((k) => ({
      cells: [REACH[k].english, REACH[k].gloss],
      say: exprFr(rowExample(k)),
      detail: {
        title: `${GROUPED[k].length} of them`,
        // BUDGETED. A tapTable row detail is a core screen and density.logic.ts
        // caps one at 45 words. The group list alone costs 12 to 22, which is
        // why REACH[k].detail sits at about eighteen; the longer version of each
        // of these is in the reference sheet at layer deep.
        body: `${REACH[k].detail} Here: ${GROUPED[k].map((id) => exprFr(id)).join(', ')}.`,
        say: exprFr(rowExample(k)),
      },
    })),
  },

  {
    // THE FIRST TEN OF THE THIRTY. `do` and `make`, which is where English
    // splits and French does not.
    //
    // Every item carries its itemId, which is what puts the row on a screen
    // rather than merely in `itemIds`. Ten items across two groups is the
    // heaviest groupDrill in the lesson and it is lg, so items and a check may
    // share a group.
    type: 'groupDrill',
    id: 's10-chores',
    title: 'Do, And Make',
    frSub: 'Ce qui se fait à la maison',
    layer: 'core',
    size: 'lg',
    terms: ['theReach', 'notTheNouns'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-12-chores' },
    say: 'Ten expressions. English uses two different verbs across them and French uses one.',
    groups: [
      {
        label: `English says ${REACH.do.english}`,
        items: GROUPED.do.map(exprCard),
        check: {
          q: 'Somebody asks what is left before the guests arrive. The kitchen is full of plates. Which one?',
          opts: [exprFr(expressionId('faire les courses')), exprFr(expressionId('faire la vaisselle')), exprFr(expressionId('faire la lessive')), exprFr(expressionId('faire ses devoirs'))],
          correct: 1,
          why: `${exprFr(expressionId('faire la vaisselle'))} is ${exprEn(expressionId('faire la vaisselle'))}. All four start the same way and the noun is the whole of the difference, which is the point of the group.`,
        },
      },
      {
        label: `English says ${REACH.make.english}`,
        items: GROUPED.make.map(exprCard),
        check: {
          q: 'The neighbour knocks at eleven at night. What have you been doing?',
          opts: [exprFr('fr.a2.verbes.319'), exprFr(expressionId('faire le lit')), exprFr('fr.a2.verbes.320'), exprFr(expressionId('faire du bruit'))],
          correct: 3,
          why: `${exprFr(expressionId('faire du bruit'))} is ${exprEn(expressionId('faire du bruit'))}. English happens to put these five under make and the previous five under do; French has never heard of that split.`,
        },
      },
    ],
  },

  {
    // EIGHT MORE. `go` or `play`, and `take` or `go for`.
    //
    // The `go` group is the one where a small word arrives between faire and the
    // noun, and the card says to take the whole phrase as it comes rather than
    // choosing. Which small word and why is not this lesson's: a2.29 taught the
    // partitive at A1 and the choice itself is a bigger subject than the reach.
    type: 'groupDrill',
    id: 's11-active',
    title: 'Go, Play, And Take',
    frSub: 'Ce qui se fait dehors',
    layer: 'core',
    size: 'lg',
    terms: ['theReach', 'notTheNouns'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-12-active' },
    say: 'Eight more. In the first group a small word arrives before the noun; take the whole phrase as it comes.',
    groups: [
      {
        label: `English says ${REACH.go.english}`,
        items: GROUPED.go.map(exprCard),
        check: {
          q: 'Your friend has been in the pool three times a week since January. What is she doing?',
          opts: [exprFr(expressionId('faire du ski')), exprFr('fr.a2.verbes.321'), exprFr(expressionId('faire de la natation')), exprFr(expressionId('faire du vélo'))],
          correct: 2,
          why: `${exprFr(expressionId('faire de la natation'))} is ${exprEn(expressionId('faire de la natation'))}. English says go swimming and there is no French verb for going anywhere in it.`,
        },
      },
      {
        label: `English says ${REACH.take.english}`,
        items: GROUPED.take.map(exprCard),
        check: {
          q: 'The train leaves at six tomorrow and nothing is in the bag yet. What is left to do tonight?',
          opts: [exprFr('fr.a2.verbes.323'), exprFr(expressionId('faire une promenade')), exprFr('fr.a2.verbes.322'), exprFr(expressionId('faire du sport'))],
          correct: 0,
          why: `${exprFr('fr.a2.verbes.323')} is ${exprEn('fr.a2.verbes.323')}. English has a whole verb for it and French spends the word for suitcases instead.`,
        },
      },
    ],
  },

  {
    // THE SEVEN NOBODY SEES COMING, and the doctrine's generation test.
    //
    // §B.1: a mission that lists ten forms has taught nothing a table cannot; a
    // mission that makes the learner produce something the lesson never showed
    // them has taught the system. The second check here runs on an expression
    // that appears nowhere else in this lesson and is released as no item,
    // because a phrase met once inside a question stem is not vocabulary.
    type: 'groupDrill',
    id: 's12-ownverb',
    title: 'Where English Has Its Own Verb',
    frSub: "Là où l'anglais a son propre verbe",
    layer: 'core',
    size: 'lg',
    terms: ['theReach', 'saySomething'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-12-own' },
    say: 'Seven of them, and this is the group with nothing to translate. There is no English verb here to reach for.',
    groups: [
      {
        label: 'Four you will use this week',
        items: GROUPED.own.slice(0, 4).map(exprCard),
        check: {
          q: 'There are forty people ahead of you at the ticket window. What are you doing?',
          opts: [exprFr(expressionId('faire la fête')), exprFr(expressionId('faire la sieste')), exprFr(expressionId('faire la cuisine')), exprFr(expressionId('faire la queue'))],
          correct: 3,
          why: `${exprFr(expressionId('faire la queue'))} is ${exprEn(expressionId('faire la queue'))}. English has a verb, to queue. French does not, and there is nothing in the French phrase you could have worked out from it.`,
        },
      },
      {
        label: 'And three more',
        items: GROUPED.own.slice(4).map(exprCard),
        check: {
          // THE GENERATION TEST. `faire la grasse matinée` is in no group, is
          // released as no item, and appears nowhere else in this lesson.
          q: 'A French speaker says « Je fais la grasse matinée. » You have never met that phrase. What kind of thing is it?',
          opts: ['A word for a person', 'A form of the verb you have not learned', 'Something they do, and the noun says what', 'A question'],
          correct: 2,
          why: `faire plus a noun, exactly like the other ${EXPRESSION_TARGET}. You do not know what une grasse matinée is and you do know somebody is doing it. ${REFRAME}`,
        },
      },
    ],
  },

  {
    // THE WEATHER, AND THIS IS THE PAYOFF RATHER THAN A REPEAT.
    //
    // a1.10 (seq 14) taught these five and its own grammarIntroduced says it
    // taught them "as one frozen form and never conjugated". This is where they
    // stop being frozen. NOT ONE WEATHER WORD is taught: the five expressions
    // are imported whole and `la pluie`, `le vent` and the rest reach no
    // production surface.
    //
    // The second group carries no items and holds the `what comes next decides`
    // check, which is a2.02's pattern name quoted for a different pair of words.
    type: 'groupDrill',
    id: 's13-weather',
    title: 'The One You Already Had',
    frSub: 'il fait',
    layer: 'core',
    size: 'lg',
    terms: ['nobodyDoingIt', 'whatFollows', 'notTheNouns'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a2-12-weather' },
    say: `You met these at ${unitRef(WEATHER_UNIT)} and they were one lump then. Look at the first two words of each one.`,
    groups: [
      {
        label: 'Five you have had for a while',
        items: GROUPED.be.map(exprCard),
        check: {
          q: 'Every one of these five starts with the same two words. Who is doing the thing?',
          opts: ['The person speaking', 'Nobody. The il stands for no one at all', 'The weather', 'You cannot tell without more of the sentence'],
          correct: 1,
          why: 'French wants a subject in every sentence, so when there is nobody it puts an il there that means nothing. The verb after it is the same form as in Il fait le lit, and there it does mean somebody.',
        },
      },
      {
        label: 'Two words, two sentences',
        items: [],
        check: {
          q: `« Il fait chaud. » and « Il fait le lit. » What tells you which one you are in?`,
          opts: ['The tone of voice', 'Nothing, it is always ambiguous', 'Whether the speaker points at the window', 'The word straight after fait'],
          correct: 3,
          why: `A word for how it is outside means the weather; a word for a thing means somebody is doing it. Nothing before that word helps at all, because ${WHAT_FOLLOWS}. You met the same shape at ${unitRef(WHAT_FOLLOWS_UNIT)} on different words.`,
        },
      },
    ],
  },

  /* ── Act 4: the three cells that catch people ────────────────────────── */

  {
    // THE TRAP IS THE ENDING YOU EXPECT AGAINST THE ENDING YOU GET, and the
    // control verb is what makes it a contrast rather than a warning. Stepped,
    // so the rule, the pairs, the audio and the drill are four screens.
    //
    // Both sides of every pair are REAL AUTHORED FORMS. A trap between a real
    // form and an invented one (`faisez`) cannot be drilled on respellings,
    // because the invented form has no row and so no legal `promptSound`; every
    // promptSound here is a real row's respelling and none is the card's own,
    // which the batch asserts.
    type: 'trapDrill',
    id: 's14-trap',
    title: 'The Ending You Expect',
    frSub: 'Ce que vous attendez',
    layer: 'core',
    swipe: true,
    terms: ['theTes', 'theOnt', 'theControl'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], wrongThenRight: true, recordingId: 'rec-a2-12-vous' },
    say: 'Four pairs and then six to prove it. Every pair is the same person on two different verbs.',
    rule: {
      title: 'Two verbs out of three',
      // Counted against the 45-word core cap by the validator rather than here.
      body: `${TES_CLAIM} At ils, ${THE_VERB} leaves as well and lands on -ont. ${THE_CONTROL} does neither, so put it beside them and the other two become visible.`,
    },
    cards: [
      {
        promptLabel: 'the ending you expect',
        promptSound: bare('fr.a2.verbes.317'),
        fr: fr('fr.a2.verbes.305'),
        ipa: '/vu fɛt lə li/',
        tip: 'Not faisez. This is the form that gets corrected more than any other at this level.',
      },
      {
        promptLabel: 'and the verb that gives it to you',
        promptSound: bare('fr.a2.verbes.305'),
        fr: fr('fr.a2.verbes.317'),
        ipa: '/vu li.ze lə mə.ny/',
        tip: 'The ordinary -ez, in the same cell where the other two walk away from it.',
      },
      {
        promptLabel: 'several people, and the form starts again',
        promptSound: bare('fr.a2.verbes.318'),
        fr: fr('fr.a2.verbes.306'),
        ipa: '/il fɔ̃ lə li/',
        tip: 'Not faisent. It shares nothing at all with its own singular, and it joins three verbs you already have.',
      },
      {
        promptLabel: 'while this one behaves',
        promptSound: bare('fr.a2.verbes.306'),
        fr: fr('fr.a2.verbes.318'),
        ipa: '/il liz lə mə.ny/',
        tip: `The -ent you have written on every plural since ${unitRef('a2.01')}, and it is silent here as it always was.`,
      },
    ],
    drill: [
      { promptSay: 'vous faites le lit', opts: [bare('fr.a2.verbes.305'), bare('fr.a2.verbes.317'), bare('fr.a2.verbes.304')], correct: 0 },
      { promptSay: 'vous lisez le menu', opts: [bare('fr.a2.verbes.305'), bare('fr.a2.verbes.317'), bare('fr.a2.verbes.311')], correct: 1 },
      { promptSay: 'ils disent bonjour', opts: [bare('fr.a2.verbes.310'), bare('fr.a2.verbes.311'), bare('fr.a2.verbes.312')], correct: 2 },
      { promptSay: 'ils font le lit', opts: [bare('fr.a2.verbes.306'), bare('fr.a2.verbes.303'), bare('fr.a2.verbes.304')], correct: 0 },
      { promptSay: 'vous dites bonjour', opts: [bare('fr.a2.verbes.312'), bare('fr.a2.verbes.311'), bare('fr.a2.verbes.310')], correct: 1 },
      { promptSay: 'ils lisent le menu', opts: [bare('fr.a2.verbes.315'), bare('fr.a2.verbes.317'), bare('fr.a2.verbes.318')], correct: 2 },
    ],
    // Four steps, one job each. `audio` is not optional: validateLesson refuses
    // a stepped trapDrill whose steps never reach the section's own audio, and
    // without it the wrong-then-right take would be authored and never played.
    steps: [
      { label: 'The rule', kind: 'rule', title: 'Two Verbs Out Of Three' },
      { label: 'The pairs', kind: 'cards', title: 'Four That Should Match' },
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
    terms: ['theTes', 'theReach'],
    say: 'The first one is the commonest mistake in the lesson and it is two letters long.',
    errors: [
      {
        wrong: 'Saying « Vous faisez le lit ».',
        right: `Saying « ${fr('fr.a2.verbes.305')} ».`,
        why: `Every pattern you own says the vous form ends in -ez, so the reflex is very strong and this is the form it breaks on. ${TES_CLAIM}`,
      },
      {
        wrong: 'Saying « Ils faisent » or « Ils fontent ».',
        right: `Saying « ${fr('fr.a2.verbes.306')} ».`,
        why: `The plural is not built off the singular and it is not built off the nous form either. ${ONT_CLAIM} That is the whole list and nothing else in the language joins it.`,
      },
      {
        wrong: 'Looking for a French verb meaning to cook, or to queue.',
        right: `Saying « ${exprFr(expressionId('faire la cuisine'))} » and « ${exprFr(expressionId('faire la queue'))} ».`,
        why: `${REFRAME} There is no verb waiting for either of those, and the half-second you spend looking for one is the half-second the sentence dies in.`,
      },
    ],
  },

  {
    // THE BOUNDARY. Four hand-offs on three cards, three of them by unit id.
    //
    // The weather card is the one that matters, because this lesson has just
    // spent a mission inside a1.10's material and the learner should know which
    // half of it they now have.
    type: 'cardDeck',
    id: 's16-notmine',
    title: 'What Is Not In This Lesson',
    frSub: 'Pour plus tard',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['notTheNouns', 'saySomething'],
    say: 'Three things this lesson deliberately stops short of, and where each of them lives.',
    cards: [
      {
        label: 'The words themselves',
        head: 'Weather, and shopping',
        // The unit ids are followed by a comma and a full stop rather than by an
        // apostrophe-s. An accent-aware word-boundary search treats `'` as a
        // word character, so `a2.26's` does not match a search for `a2.26`, and
        // the guard that checks every boundary is cited would have passed
        // vacuously on the possessive.
        body: `${NOT_THE_NOUNS} The weather words belong to ${unitRef(WEATHER_UNIT)}, and the shopping words to ${unitRef(SHOPPING_UNIT)}. You can use every expression here without them.`,
      },
      {
        label: 'What dire also does',
        head: 'Reporting what somebody said',
        body: `In this lesson ${THE_THREE[1]} takes a thing: bonjour, the truth, no. There is a second way of using it, for passing on what somebody else said, and it needs more than you have. Nothing here shows it and nothing here needs it.`,
      },
      {
        label: 'Three more that will not bend',
        head: 'Want, can, must',
        body: `${Cap(unitRef(MODAL_UNIT))} is next on this trail: three more verbs of the same kind. It also lets you put a naming form straight after them, which is a shape this lesson never uses. The forms here will make that one quicker.`,
      },
    ],
  },

  /* ── Act 5: out in the world ─────────────────────────────────────────── */

  {
    type: 'practice',
    id: 's17-speak',
    title: 'Say All Eighteen',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Say the whole sentence. The pronoun is doing most of the work in the singular, so do not swallow it.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    // THE DICTÉE. Ten targets, and all three of the cells the lesson exists to
    // drill are in it.
    //
    // ITS MODE IS NOT A FREE CHOICE. dicteeMode() switches to WORD tiles above
    // 16 letters, and word mode hands every real word over pre-spelled, so a
    // target over the limit tests nothing. `le lit`, `bonjour` and `le menu`
    // were picked for that reason and the batch proves every target through the
    // real function. `Nous disons bonjour.` is 17 letters and so is spoken
    // rather than spelled.
    //
    // Nine of the ten are graded on exactly what the lesson teaches. The tenth
    // turns on the CAPITAL at the start of the sentence, which normalizeFr
    // strips, and that is recorded in DICTEE_NEAR_MISS rather than left to be
    // discovered. Both a1.08 and a1.09 recommended a typed surface for a capital
    // before it was measured.
    type: 'dictation',
    id: 's18-dictation',
    title: 'Spell What You Heard',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4, recordingId: 'rec-a2-12-grid' },
    say: 'Ten lines. Three of them are the forms nobody expects, so read the pronoun before you start typing.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'scenario',
    id: 's19-scenario',
    title: 'Before Seven',
    frSub: 'À vous',
    layer: 'core',
    terms: ['theReach', 'nousOn'],
    // THE ONLY HOME OF a2.01's nous/on STATEMENT in this lesson, and the batch
    // asserts that it is the only one. It belongs here rather than on a card:
    // three of the five turns hand the learner a choice between `on fait` and
    // `nous faisons`, and the statement is what settles it.
    say: `Back in the kitchen, and this time the list gets shared. ${NOUS_ON} Every answer wants one verb and one noun.`,
    setting: 'It is the same Sunday morning and there is still a list on the table. Four people are coming at seven.',
    turns: [
      {
        ai: 'Alors, tu fais quoi ce matin ?',
        en: 'So, what are you doing this morning?',
        user: 'Je fais les courses, et après je fais le ménage.',
        userEn: 'I am doing the shopping, and then the housework.',
        alts: [
          { fr: 'Je fais les courses ce matin.', en: 'I am doing the shopping this morning.' },
          { fr: 'Je fais le ménage, et toi ?', en: 'I am doing the housework, and you?' },
        ],
      },
      {
        ai: 'Et la cuisine ? Qui fait la cuisine ce soir ?',
        en: 'And the cooking? Who is cooking tonight?',
        user: 'On fait la cuisine ensemble.',
        userEn: 'We are cooking together.',
        alts: [
          { fr: 'Je fais la cuisine, tu fais la vaisselle.', en: 'I cook, you do the dishes.' },
          { fr: 'Nous faisons la cuisine tous les deux.', en: 'The two of us are cooking.' },
        ],
      },
      {
        ai: 'Les autres arrivent à sept heures. Ils font quelque chose ?',
        en: 'The others arrive at seven. Are they doing anything?',
        user: 'Ils font les courses aussi. Ils disent oui à tout.',
        userEn: 'They are doing some of the shopping too. They say yes to everything.',
        alts: [
          { fr: 'Ils font le dessert.', en: 'They are making the dessert.' },
          { fr: 'Non, ils ne font rien.', en: 'No, they are not doing anything.' },
        ],
      },
      {
        ai: 'Vous faites la liste, tous les deux ?',
        en: 'Are you two making the list?',
        user: 'Oui, nous faisons la liste maintenant.',
        userEn: 'Yes, we are making the list now.',
        alts: [
          { fr: 'Oui, on fait la liste ensemble.', en: 'Yes, we are making the list together.' },
          { fr: 'Non, tu fais la liste et je fais les courses.', en: 'No, you make the list and I do the shopping.' },
        ],
      },
      {
        ai: "Il fait beau dehors. On fait une promenade avant ?",
        en: 'It is nice out. Shall we go for a walk first?',
        user: 'Oui, mais je fais attention à l\'heure.',
        userEn: 'Yes, but I am keeping an eye on the time.',
        alts: [
          { fr: 'Oui, on fait une promenade courte.', en: 'Yes, a short walk.' },
          { fr: 'Non, je fais la lessive d\'abord.', en: 'No, I am doing the laundry first.' },
        ],
      },
    ],
  },

  {
    type: 'reading',
    id: 's20-reading',
    title: 'The Same Kitchen',
    frSub: 'La même cuisine',
    layer: 'core',
    terms: ['theReach', 'nobodyDoingIt'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage) only when this flag is
    // set WITH questions.
    questionsInModal: true,
    say: 'Read it once for the shape. The same verb is doing four different jobs in it. Tap any word you do not know.',
    // ONE LINE, deliberately. PassagePage does text.split(/(?<=[.!?»])\s+/) and
    // renders the pieces inline in a single TX, so every authored newline is
    // swallowed.
    //
    // THE A1 RULE, WHICH HOLDS AT A2 (Paul, 2026-08-04): if it is not inside
    // « », it is in English.
    text:
      'The next Sunday, and the list is on the table again. '
      + '« Tu fais quoi ce matin ? » '
      + '« Je fais les courses, et après je fais le ménage. » '
      + 'He crosses two things off without looking up. '
      + '« Et ce soir ? » '
      + '« On fait la cuisine ensemble, et les autres font le dessert. » '
      + 'Outside the window it is bright and completely still. '
      + '« Il fait beau. On fait une promenade avant ? » '
      + 'Four sentences and one verb, and nobody had to look for a second one.',
    // Every entry is a single whitespace-delimited token that really appears
    // between the guillemets: the reader strips punctuation and lowercases
    // before matching, so an entry that is not a bare token is an underline that
    // never appears. MAX_GLOSS_WORDS is four and every key here is one word.
    // Checked through the REAL matcher in the test.
    glossary: [
      { word: 'fais', en: 'am doing', note: 'The je and tu form, and the il form sounds exactly the same.' },
      { word: 'fait', en: 'is', note: 'Here nobody is doing anything: it is the weather, and the il stands for no person.' },
      { word: 'font', en: 'are making', note: 'The form for several people, and it shares no letters with the singular.' },
      { word: 'courses', en: 'shopping', note: 'A word from another lesson. Take faire les courses as one piece.' },
      { word: 'ménage', en: 'housework', note: 'Another one. The verb in front of it is what this lesson is about.' },
    ],
    questions: [
      { q: 'The passage uses this verb five times. Which of them is not about a person doing something?', a: '« Il fait beau. » Nobody is doing the weather. French wants a subject in every sentence, so it puts an il there that stands for nobody at all, and the form of the verb is the same one as in Il fait le lit.' },
      { q: '« On fait la cuisine ensemble. » Why fait and not faisons?', a: 'on takes the same form as il, and it means we. It is what people actually say. nous faisons is what gets written down.' },
      { q: 'How many different English verbs would you need to translate the four expressions in the passage?', a: 'Four: do the shopping, do the housework, cook, and be, as in it is nice out. French used one verb for all of them and changed only the noun behind it.' },
    ],
  },

  /* ── Act 6: prove it ─────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's21-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['theReach', 'theTes', 'theControl'],
    sheetId: 'sheet.a2.12.faire',
    say: 'Rate each card objectively. Again, hard, or easy. The ones you mark again come back.',
    cards: [
      { front: 'What does French do where English changes verb?', back: REFRAME },
      { front: `The six forms of ${THE_VERB}`, back: PARADIGM.map((r) => r.faire).join(' · ') },
      { front: `The six forms of ${THE_THREE[1]}`, back: PARADIGM.map((r) => r.dire).join(' · ') },
      { front: `The six forms of ${THE_CONTROL}`, back: PARADIGM.map((r) => r.lire).join(' · ') },
      { front: 'Which verbs end vous on -tes?', back: `${TES_CLUB.map((m) => m.form).join(' · ')}. ${TES_CLAIM}` },
      { front: 'Which verbs end ils on -ont?', back: `${ONT_CLUB.map((m) => m.form).join(' · ')}. ${ONT_CLAIM}` },
      { front: `Why is ${THE_CONTROL} in this lesson?`, back: CONTROL_CLAIM },
      { front: 'Do the shopping', back: exprFr(expressionId('faire les courses')), say: exprFr(expressionId('faire les courses')) },
      { front: 'Cook', back: exprFr(expressionId('faire la cuisine')), say: exprFr(expressionId('faire la cuisine')) },
      { front: 'Queue', back: exprFr(expressionId('faire la queue')), say: exprFr(expressionId('faire la queue')) },
      { front: 'Pack the bags', back: exprFr('fr.a2.verbes.323'), say: exprFr('fr.a2.verbes.323') },
      { front: 'Pretend', back: exprFr('fr.a2.verbes.324'), say: exprFr('fr.a2.verbes.324') },
      { front: 'Take a trip', back: exprFr('fr.a2.verbes.322'), say: exprFr('fr.a2.verbes.322') },
      { front: 'You, more than one, making the bed', back: fr('fr.a2.verbes.305'), say: fr('fr.a2.verbes.305') },
      { front: 'Several people, making the bed', back: fr('fr.a2.verbes.306'), say: fr('fr.a2.verbes.306') },
      { front: 'Who is doing the thing in Il fait beau?', back: 'Nobody. French wants a subject, so it puts one there that means nothing at all.' },
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
    body: `You have three more verbs that will not come apart, and only three cells across all of them are actually strange. That was the short half. The long half is that one of those three verbs turns up everywhere: ${REFRAME} You have also finished two lists that were open before you started, because the verbs that end vous on -tes and the ones that end ils on -ont are both closed sets and this lesson supplied the last of each. What is left is the part that says whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.`,
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
        id: 'r1-the-two-clubs',
        label: 'The forms that catch people',
        // Round targets are ordered deliberately. drillForRound returns the
        // FIRST target that has a drill and then stops, so the first name here
        // is what a failing learner actually gets. Every round leads on a
        // DIFFERENT trigger, which is what makes all five drills reachable.
        targets: ['err-tes-ending', 'err-ont-plural'],
        say: 'Three cells across three verbs. Get these and the rest of the forms are ordinary.',
        questions: [
          {
            q: 'Vous ___ le lit. (faire)',
            format: 'typeIn',
            accept: ['faites', 'vous faites'],
            answer: 'faites',
            why: `Not faisez. ${TES_CLAIM}`,
            ref: 's06-vousrow',
          },
          {
            q: 'Vous ___ bonjour. (dire)',
            format: 'typeIn',
            accept: ['dites', 'vous dites'],
            answer: 'dites',
            why: 'The second of the two, and the -s of the stem is heard here as a t. Every other verb in the language except être ends this cell in -ez.',
            ref: 's06-vousrow',
          },
          {
            q: 'Vous ___ le menu. (lire)',
            format: 'typeIn',
            accept: ['lisez', 'vous lisez'],
            answer: 'lisez',
            why: CONTROL_CLAIM,
            ref: 's06-vousrow',
          },
          {
            q: 'Fix this. You and somebody else, making the bed: « Vous faisez le lit. »',
            format: 'errorSpot',
            accept: ['Vous faites le lit', 'faites'],
            answer: 'Vous faites le lit.',
            why: 'faisez is built off the nous stem and it is not a form. The real one is shorter than the one you expect.',
            ref: 's15-errors',
          },
          {
            q: 'Which of these four is not a real form?',
            format: 'mcq',
            opts: [PARADIGM[4].faire, PARADIGM[5].faire, 'faisez', PARADIGM[3].faire],
            correct: 2,
            why: 'faisez looks exactly right and is the reason this round exists. faites, font and faisons are the three you actually need.',
            ref: 's05-grid',
          },
          {
            q: 'Tap the letters you do not say.',
            format: 'tapSilent',
            word: 'lisent',
            correct: 'ent',
            why: 'The -ent is silent, exactly as it was on every regular verb. What you hear at the end is the s of the stem in front of it.',
            ref: 's07-ils',
          },
        ],
      },
      {
        id: 'r2-what-faire-does',
        label: 'What faire covers',
        targets: ['err-english-verb', 'err-wrong-expression'],
        say: 'Each of these is a situation. Pick what somebody would actually say.',
        questions: [
          {
            q: 'The fridge is empty and the shops shut at six. What are you about to do?',
            format: 'mcq',
            opts: [exprFr(expressionId('faire la vaisselle')), exprFr(expressionId('faire les courses')), exprFr(expressionId('faire la lessive')), exprFr(expressionId('faire le ménage'))],
            correct: 1,
            why: `${exprFr(expressionId('faire les courses'))} is ${exprEn(expressionId('faire les courses'))}. All four are the same verb and the noun is the whole of the difference.`,
            ref: 's10-chores',
          },
          {
            q: 'There is nothing clean left to wear. Which one?',
            format: 'mcq',
            opts: [exprFr(expressionId('faire la lessive')), exprFr(expressionId('faire la sieste')), exprFr(expressionId('faire du bruit')), exprFr(expressionId('faire ses devoirs'))],
            correct: 0,
            why: `${exprFr(expressionId('faire la lessive'))} is ${exprEn(expressionId('faire la lessive'))}. English says do the laundry, and French does not change the verb for it either.`,
            ref: 's10-chores',
          },
          {
            q: 'You are tired at three in the afternoon and there is an hour free. Which one?',
            format: 'mcq',
            opts: [exprFr(expressionId('faire la fête')), exprFr(expressionId('faire du sport')), exprFr(expressionId('faire la sieste')), exprFr('fr.a2.verbes.324')],
            correct: 2,
            why: `${exprFr(expressionId('faire la sieste'))} is ${exprEn(expressionId('faire la sieste'))}. English has a verb, to nap. French spends a noun instead.`,
            ref: 's12-ownverb',
          },
          {
            q: 'Somebody is trying to cross a busy road with a small child. What do you say to them?',
            format: 'mcq',
            opts: [exprFr(expressionId('faire attention')), exprFr(expressionId('faire la queue')), exprFr('fr.a2.verbes.325'), exprFr(expressionId('faire du vélo'))],
            correct: 0,
            why: `${exprFr(expressionId('faire attention'))} is ${exprEn(expressionId('faire attention'))}. It is the one everybody hears first and the one nobody guesses, because English uses a completely different verb.`,
            ref: 's12-ownverb',
          },
          {
            q: 'Fix this. Somebody is cooking dinner: « Il fait le ménage ce soir, il prépare le poulet. »',
            format: 'errorSpot',
            accept: ['Il fait la cuisine ce soir, il prépare le poulet', 'la cuisine', 'Il fait la cuisine'],
            answer: 'Il fait la cuisine ce soir, il prépare le poulet.',
            why: `${exprFr(expressionId('faire le ménage'))} is ${exprEn(expressionId('faire le ménage'))} and ${exprFr(expressionId('faire la cuisine'))} is ${exprEn(expressionId('faire la cuisine'))}. Same verb, and the noun decides completely.`,
            ref: 's10-chores',
          },
          {
            q: 'Il ___ la vaisselle. (faire)',
            format: 'typeIn',
            accept: ['fait', 'il fait'],
            answer: 'fait',
            why: 'The -t is silent and this form sounds exactly like je fais and tu fais. Only the pronoun in front of it separates the three.',
            ref: 's05-grid',
          },
        ],
      },
      {
        id: 'r3-the-thirty',
        label: 'The rest of them',
        targets: ['err-wrong-expression', 'err-english-verb'],
        say: 'More situations. Two of these are about a verb English has and French does not.',
        questions: [
          {
            q: 'Your friend has been going to the pool since January. What is she doing?',
            format: 'mcq',
            opts: [exprFr(expressionId('faire du vélo')), exprFr(expressionId('faire du ski')), exprFr('fr.a2.verbes.321'), exprFr(expressionId('faire de la natation'))],
            correct: 3,
            why: `${exprFr(expressionId('faire de la natation'))} is ${exprEn(expressionId('faire de la natation'))}. English says go swimming; there is no going anywhere in the French.`,
            ref: 's11-active',
          },
          {
            q: 'The flight is at six tomorrow and the case is still empty. What is left tonight?',
            format: 'mcq',
            opts: [exprFr('fr.a2.verbes.323'), exprFr('fr.a2.verbes.322'), exprFr(expressionId('faire une promenade')), exprFr(expressionId('faire la queue'))],
            correct: 0,
            why: `${exprFr('fr.a2.verbes.323')} is ${exprEn('fr.a2.verbes.323')}. To pack is a whole English verb and French uses the word for the suitcases.`,
            ref: 's11-active',
          },
          {
            q: 'A child is holding a book upside down and moving their lips. What are they doing?',
            format: 'mcq',
            opts: [exprFr('fr.a2.verbes.319'), exprFr('fr.a2.verbes.320'), exprFr('fr.a2.verbes.324'), exprFr(expressionId('faire un effort'))],
            correct: 2,
            why: `${exprFr('fr.a2.verbes.324')} is ${exprEn('fr.a2.verbes.324')}. There is no verb in the French phrase at all beyond faire, and semblant is a noun used for nothing else.`,
            ref: 's12-ownverb',
          },
          {
            q: 'Your French has got noticeably better since September. Type the expression for that, starting with faire.',
            format: 'typeIn',
            accept: ['faire des progrès', 'des progrès', 'je fais des progrès'],
            answer: 'faire des progrès',
            why: `${exprFr('fr.a2.verbes.319')} is ${exprEn('fr.a2.verbes.319')}. English makes progress and French does it, and neither language can be guessed from the other here.`,
            ref: 's10-chores',
          },
          {
            q: 'Fix this. Forty people are ahead of you at the window: « Je fais la fête. »',
            format: 'errorSpot',
            accept: ['Je fais la queue', 'la queue'],
            answer: 'Je fais la queue.',
            why: `${exprFr(expressionId('faire la queue'))} is ${exprEn(expressionId('faire la queue'))} and ${exprFr(expressionId('faire la fête'))} is ${exprEn(expressionId('faire la fête'))}. One word apart and nothing else in the sentence moves.`,
            ref: 's12-ownverb',
          },
          {
            q: 'Which of these four is NOT one of the expressions in this lesson?',
            format: 'mcq',
            opts: [exprFr(expressionId('faire du ski')), 'faire le train', exprFr(expressionId('faire du bruit')), exprFr('fr.a2.verbes.325')],
            correct: 1,
            why: 'faire le train is not French. The reach is wide and it is not unlimited, which is why the thirty are learned as phrases rather than assembled.',
            ref: 's09-tap',
          },
        ],
      },
      {
        id: 'r4-dire-and-lire',
        label: 'The other two verbs',
        targets: ['err-control', 'err-tes-ending'],
        say: 'One of these two behaves and one half behaves. Read the person before you answer.',
        questions: [
          {
            q: 'Ils ___ bonjour. (dire)',
            format: 'typeIn',
            accept: ['disent', 'ils disent'],
            answer: 'disent',
            why: 'The ordinary -ent, silent as always, and it is the cell where this verb behaves. It breaks at vous and nowhere else.',
            ref: 's07-ils',
          },
          {
            q: 'Nous ___ le menu. (lire)',
            format: 'typeIn',
            accept: ['lisons', 'nous lisons'],
            answer: 'lisons',
            why: `The -ons you have had since ${unitRef('a2.01')}. This form does not appear once in the whole published corpus and the pattern still tells you what it is.`,
            ref: 's05-grid',
          },
          {
            q: 'Listen. One person, or several?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Ils lisent le menu.', recordingId: 'rec-a2-12-number' },
            say: 'Ils lisent le menu.',
            opts: ['One', 'Several', 'You cannot tell', 'It is not a real form'],
            correct: 1,
            why: 'A z arrived at the end of the verb. ils is said exactly like il, so the verb is the whole of the evidence.',
            ref: 's07-ils',
          },
          {
            q: 'Which cell does dire get right and faire get wrong?',
            format: 'mcq',
            opts: ['nous', 'je', 'ils', 'vous'],
            correct: 2,
            why: 'ils disent takes the ordinary -ent and ils font does not. Both verbs walk away at vous; only one of them walks away twice.',
            ref: 's05-grid',
          },
          {
            q: 'Fix this. Several people, reading: « Ils lisont le menu. »',
            format: 'errorSpot',
            accept: ['Ils lisent le menu', 'lisent'],
            answer: 'Ils lisent le menu.',
            why: `-ont belongs to four verbs and this is not one of them. ${ONT_CLAIM}`,
            ref: 's14-trap',
          },
          {
            q: 'Which of these is one of the four that end ils on -ont?',
            format: 'mcq',
            opts: ['ils lisent', 'ils disent', 'ils finissent', 'ils vont'],
            correct: 3,
            why: `${ONT_CLUB.map((m) => m.form).join(' · ')}, and no others. You met ils vont at ${unitRef(ALLER_UNIT)} and the last of the four is in this lesson.`,
            ref: 's07-ils',
          },
        ],
      },
      {
        id: 'r5-put-it-together',
        label: 'A form and an expression',
        targets: ['err-ont-plural', 'err-control'],
        say: 'Both halves at once now: get the person right and pick the right thing behind it.',
        questions: [
          {
            q: 'Ils ___ les courses le samedi. (faire)',
            format: 'typeIn',
            accept: ['font', 'ils font'],
            answer: 'font',
            why: `Not faisent. ${ONT_CLAIM} And the expression behind it does not change for anybody.`,
            ref: 's14-trap',
          },
          {
            q: 'Say it: we are doing the shopping. Use the spoken we.',
            format: 'speak',
            target: 'On fait les courses.',
            why: 'on means we and takes the same form as il, so it is fait here and never faisons. It is what gets said out loud.',
            ref: 's19-scenario',
          },
          {
            q: 'Fix this. Several people, cooking: « Ils faisent la cuisine. »',
            format: 'errorSpot',
            accept: ['Ils font la cuisine', 'font'],
            answer: 'Ils font la cuisine.',
            why: 'The plural is not built off any other form of this verb. It is one of four in the language and it has to be held.',
            ref: 's15-errors',
          },
          {
            q: 'It is bright and still outside. Which sentence is about the weather?',
            format: 'mcq',
            opts: ['Il fait le lit.', exprFr(expressionId('il fait beau')), 'Il fait la queue.', 'Il fait du bruit.'],
            correct: 1,
            why: `All four start with the same two words and only the next one decides, because ${WHAT_FOLLOWS}. In the other three somebody is doing something; in this one nobody is.`,
            ref: 's13-weather',
          },
          {
            q: 'Listen. One person, or several?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: fr('fr.a2.verbes.306'), recordingId: 'rec-a2-12-number' },
            say: fr('fr.a2.verbes.306'),
            opts: ['One', 'Several', 'You cannot tell from the sound', 'It is not a real form'],
            correct: 1,
            why: 'FOHⁿ is a completely different sound from FEH and it goes into the nose. ils is said exactly like il, so the verb is the whole of the evidence, and on this verb it gives you everything.',
            ref: 's07-ils',
          },
          {
            q: 'You have never met the phrase « faire la grasse matinée ». What can you tell about it?',
            format: 'mcq',
            opts: ['It is a form of faire you have not learned', 'It is a question', 'It is somebody doing something, and the noun says what', 'It cannot be worked out at all'],
            correct: 2,
            why: `faire plus a noun, like all ${EXPRESSION_TARGET} of them. ${REFRAME} You will not know what the noun means and you will know what kind of sentence you are in.`,
            ref: 's12-ownverb',
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
    say: 'Four things, and the biggest of them is not a form at all.',
    body: `You can build three more verbs that will not come apart, and you found that only three cells across the eighteen are actually strange. Two lists closed while you did it: the verbs that end vous on -tes and the ones that end ils on -ont are both finished, and you will never have to wonder about either again. ${REACH_CLAIM} ${REFRAME} And you know what the ${unitRef(WEATHER_UNIT)} weather phrases were made of all along, which is this verb with nobody behind it.`,
    points: [
      `${REFRAME}`,
      `${TES_CLAIM}`,
      `${ONT_CLAIM}`,
      `${CONTROL_CLAIM}`,
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed. It throws rather than degrades: a progress
 * card that silently reports "0 of 0" is worse than a build that stops.       */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's22-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a2.12.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Expressions', v: String(EXPRESSION_IDS.length) },
    { k: 'Forms that surprise you', v: `${BREAKS.length} of ${PARADIGM.length * THE_THREE.length}` },
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
 * PARADIGM'S FOUR. It holds the lesson's only tapTable, all four expression
 * groupDrills and the generation test.
 *
 * The paradigm act carries no `table` of any kind: the single grid the brief
 * asked for lives in the sheet, because a table at layer core is a
 * table-in-core density failure.
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a nice
 * number, because it is divided by the rest points to check no stretch runs past
 * the checkpoint-spacing limit of 22.                                          */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The verb you already had',
    sections: ['s01-scene', 's02-goals', 's03-reach'],
    milestone: 'You know why the sentence in the kitchen stopped, and how far one verb reaches.',
    estScreens: 19,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'Three verbs, three surprises',
    sections: ['s04-verbs', 's05-grid', 's06-vousrow', 's07-ils'],
    milestone: 'You can build all six forms of all three, and you know which three cells are the strange ones.',
    estScreens: 24,
    restPoints: ['s05-grid/halfway', 's07-ils/halfway'],
  },
  {
    id: 'act3',
    title: 'Everything faire does',
    sections: ['s08-english', 's09-tap', 's10-chores', 's11-active', 's12-ownverb', 's13-weather'],
    milestone: `You have ${EXPRESSION_TARGET} expressions, sorted by the English verb French refuses to use.`,
    estScreens: 44,
    restPoints: ['s09-tap/after', 's11-active/halfway'],
  },
  {
    id: 'act4',
    title: 'The ending you expect',
    sections: ['s14-trap', 's15-errors', 's16-notmine'],
    milestone: 'You do not put -ez on the two verbs that refuse it, and you know which parts of this are somebody else\'s lesson.',
    estScreens: 21,
    restPoints: ['s14-trap/after-cards'],
  },
  {
    id: 'act5',
    title: 'Out in the world',
    sections: ['s17-speak', 's18-dictation', 's19-scenario', 's20-reading'],
    milestone: 'You have said all eighteen out loud and spelled the ten the recording could not settle.',
    estScreens: 44,
    restPoints: ['s17-speak/halfway', 's18-dictation/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s21-review', 's22-progress', 's23-quiz', 's24-roundup'],
    milestone: 'Lesson complete. Three more irregular units follow this one on the trail.',
    estScreens: 48,
    restPoints: ['s21-review/halfway', 's23-quiz/after-r2', 's23-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned. Act 2 releases the eighteen paradigm rows
 * and the three naming forms; act 3 releases all thirty expressions. Acts 1, 4,
 * 5 and 6 release nothing, because they teach no new item.
 *
 * The read-only rows are released by NOTHING and are not in itemIds at all. They
 * are read from Postgres by the manifest and named on no screen.               */

const DECK_TRANCHE: string[][] = [
  // Act 1 releases NOTHING. The scene runs on display strings: `Je fais.` is not
  // a corpus row, because a row is released to spaced repetition and this lesson
  // does not drill a sentence whose only job was to fail.
  [],
  // Act 2: the three naming forms and all eighteen paradigm rows.
  [...THE_THREE.map(verbId), ...PARADIGM_IDS],
  // Act 3: the thirty, in the order the groups render them.
  [...EXPRESSION_IDS],
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
    id: 'err-tes-ending',
    description: 'Puts -ez on the two verbs that refuse it: faisez, disez. Every regular pattern the learner owns says vous ends in -ez, so the reflex is strong and this is where it breaks.',
    detectOn: ['s06-vousrow', 's14-trap', 's23-quiz/r1-the-two-clubs'],
    drill: 'drill-vous-forms',
    retest: 'retest-vous-forms',
  },
  {
    id: 'err-english-verb',
    description: 'Goes looking for a French verb that does not exist, because English has one: a verb for cook, for queue, for pack. The sentence stops before the noun arrives.',
    detectOn: ['s01-scene', 's10-chores', 's23-quiz/r2-what-faire-does'],
    drill: 'drill-english-verbs',
    retest: 'retest-english-verbs',
  },
  {
    id: 'err-wrong-expression',
    description: 'Picks the wrong expression for the situation by translating the English noun rather than knowing the phrase: faire le ménage where the shopping was meant.',
    detectOn: ['s09-tap', 's11-active', 's23-quiz/r3-the-thirty'],
    drill: 'drill-which-group',
    retest: 'retest-which-group',
  },
  {
    id: 'err-control',
    description: 'Runs the strangeness of faire and dire onto lire, or onto every verb in sight: lisez becomes lites, and irregular turns into a warning about the whole language.',
    detectOn: ['s05-grid', 's07-ils', 's23-quiz/r4-dire-and-lire'],
    drill: 'drill-control',
    retest: 'retest-control',
  },
  {
    id: 'err-ont-plural',
    description: 'Builds the ils form off some other form of the verb: faisent, fontent. The plural of faire shares no letters at all with its own singular.',
    detectOn: ['s07-ils', 's15-errors', 's23-quiz/r5-put-it-together'],
    drill: 'drill-ont-club',
    retest: 'retest-ont-club',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-vous-forms',
    title: 'The vous form of five verbs',
    format: 'flashcard',
    coach: 'A verb on the left. Say the vous form out loud before you turn the card, and notice how few of them are strange.',
    pairs: [
      ['vous, parler', 'vous parlez'],
      ['vous, lire', `vous ${PARADIGM[4].lire}`],
      ['vous, être', TES_CLUB[0].form],
      ['vous, faire', TES_CLUB[1].form],
      ['vous, dire', TES_CLUB[2].form],
    ],
  },
  {
    id: 'retest-vous-forms',
    title: 'One more time',
    format: 'mcq',
    q: 'Vous ___ le lit. (faire)',
    opts: ['faisez', 'faites', 'faitez'],
    correct: 1,
    why: 'faites. Three verbs in the language end this cell on -tes and every other one ends it on -ez.',
  },
  {
    id: 'drill-english-verbs',
    title: 'The verb English uses',
    format: 'flashcard',
    coach: 'An English phrase on the left. Say the whole French expression before you turn the card, and start it with faire every time.',
    pairs: [
      ['do the shopping', exprFr(expressionId('faire les courses'))],
      ['cook', exprFr(expressionId('faire la cuisine'))],
      ['go swimming', exprFr(expressionId('faire de la natation'))],
      ['pack the bags', exprFr('fr.a2.verbes.323')],
      ['queue', exprFr(expressionId('faire la queue'))],
      ['pretend', exprFr('fr.a2.verbes.324')],
    ],
  },
  {
    id: 'retest-english-verbs',
    title: 'One more time',
    format: 'mcq',
    q: 'There are twenty people ahead of you. Which one?',
    opts: [exprFr(expressionId('faire la fête')), exprFr(expressionId('faire la cuisine')), exprFr(expressionId('faire la queue'))],
    correct: 2,
    why: 'To queue is an English verb and French has no equivalent for it. The phrase has to be known rather than built.',
  },
  {
    id: 'drill-which-group',
    title: 'Which one fits?',
    format: 'sort',
    buckets: ['English says do or make', 'English has a verb of its own'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: [
      expressionId('faire les courses'),
      expressionId('faire la vaisselle'),
      expressionId('faire le lit'),
      expressionId('faire la cuisine'),
      expressionId('faire la queue'),
      expressionId('faire la sieste'),
    ],
    coach: 'Play each one and think about the English rather than the French. Three of these six have an English verb waiting for them and three do not.',
  },
  {
    id: 'retest-which-group',
    title: 'One more time',
    format: 'mcq',
    q: 'The kitchen is full of dirty plates. Which one?',
    opts: [exprFr(expressionId('faire la lessive')), exprFr(expressionId('faire la vaisselle')), exprFr(expressionId('faire le ménage'))],
    correct: 1,
    why: 'All three are the same verb and the noun decides. The plates are la vaisselle.',
  },
  {
    id: 'drill-control',
    title: 'Which verb does what',
    format: 'flashcard',
    coach: 'A person and a verb on the left. Say the form before you turn the card, and say whether it is one of the strange ones.',
    pairs: [
      ['vous, lire', `${PARADIGM[4].lire}, the ordinary one`],
      ['vous, faire', `${PARADIGM[4].faire}, one of three in the language`],
      ['ils, lire', `${PARADIGM[5].lire}, the ordinary one`],
      ['ils, dire', `${PARADIGM[5].dire}, also ordinary`],
      ['ils, faire', `${PARADIGM[5].faire}, one of four in the language`],
    ],
  },
  {
    id: 'retest-control',
    title: 'One more time',
    format: 'mcq',
    q: 'Vous ___ le menu. (lire)',
    opts: ['lites', 'lisez', 'lisiez'],
    correct: 1,
    why: 'lisez. This verb takes the ending you already know, which is exactly why it is in the lesson.',
  },
  {
    id: 'drill-ont-club',
    title: 'The four that end in -ont',
    format: 'flashcard',
    coach: 'A verb on the left. Say the ils form out loud before you turn the card. There are four and you have already met three of them.',
    pairs: ONT_CLUB.map((m) => [`ils, ${m.verb}`, m.form] as [string, string]),
  },
  {
    id: 'retest-ont-club',
    title: 'One more time',
    format: 'mcq',
    q: 'Ils ___ le lit. (faire)',
    opts: ['faisent', 'font', 'fontent'],
    correct: 1,
    why: 'font, and it joins sont, ont and vont. Those four are the whole of the list.',
  },
];

/* ─── The reference sheet ──────────────────────────────────────────────────
 *
 * ONE, and its centre is a table NEITHER PREDECESSOR COULD HAVE HELD: the thirty
 * expressions sorted by the English verb French refuses to use.
 *
 * a2.01 ships "The -ER endings, in full", a2.10 ships the -IR set, a2.11 puts
 * all three regular sets in one table and a2.02 ships a table of FORMS because
 * its three verbs have no endings to list. A fifth ending sheet would be
 * worthless here. What this lesson has that none of them had is a lexical set
 * worth carrying around, and that is what the sheet is for: a learner will come
 * back to it to look up an expression, not to look up faites.
 *
 * A `sheetId` resolves only inside the lesson that declares it (schema.ts:3490,
 * lesson-contract.test.ts:91), so this cannot extend or point at any of the
 * four. Cross-lesson sheets do not exist and a2.11 established that at a price.
 *
 * The density validator refuses a `table` at layer 'core' outright, so the full
 * versions live here at layer 'deep' where density is deliberately fine.
 *
 * ReferenceSheet.tsx draws `teach`, `letterGrid` and `table` and NOTHING ELSE. A
 * `cheatSheet` in here would draw its title and no rows, which a1.13 ships
 * today. The batch refuses any other section type in a sheet.                  */

const SHEET_ID_CONST = 'sheet.a2.12.faire';

const SHEETS: ReferenceSheet[] = [
  {
    id: SHEET_ID_CONST,
    title: 'One verb, and everywhere it goes',
    layer: 'deep',
    contains: [`All ${EXPRESSION_TARGET} expressions, by the English verb`, 'All three verbs, every person', 'The two closed lists'],
    sections: [
      {
        // THE TABLE THIS SHEET EXISTS FOR. Thirty rows at layer deep, which is
        // exactly the shape the brief wanted from the tapTable and which the
        // tapTable could not carry: corrections §8 puts a tapTable's ceiling at
        // six rows on a Pixel 6 because it renders inside a scrolling page, and
        // a reference sheet is a scrolling page a learner OPENED on purpose.
        type: 'table',
        id: 'sheet-thirty',
        title: `All ${EXPRESSION_TARGET}, by the English verb`,
        layer: 'deep',
        cols: ['English reaches for', 'French says', 'What it means'],
        rows: REACH_ORDER.flatMap((k) => GROUPED[k].map((id, i) => [
          i === 0 ? REACH[k].english : '',
          exprFr(id),
          exprEn(id),
        ])),
      },
      {
        type: 'table',
        id: 'sheet-three-verbs',
        title: 'All three, every person',
        layer: 'deep',
        cols: ['Person', ...THE_THREE],
        rows: PARADIGM.map((r) => [r.person, r.faire, r.dire, r.lire]),
      },
      {
        type: 'table',
        id: 'sheet-clubs',
        title: 'The two lists that are now closed',
        layer: 'deep',
        cols: ['The ending', 'Every verb that takes it', 'Where you met each one'],
        rows: [
          ['vous, -tes', TES_CLUB.map((m) => m.form).join(' · '), TES_CLUB.map((m) => unitRef(m.unit, 'a2')).join(' · ')],
          ['ils, -ont', ONT_CLUB.map((m) => m.form).join(' · '), ONT_CLUB.map((m) => unitRef(m.unit, 'a2')).join(' · ')],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-why-expressions',
        title: 'Why this sheet lists expressions and not endings',
        layer: 'deep',
        body: `Every reference sheet before this one in the level lists ENDINGS, because every pattern before this one had them: ${unitRef('a2.01')} holds the -er set in full, ${unitRef('a2.10')} the -ir set, ${unitRef('a2.11')} all three regular sets in one table, and ${unitRef(ALLER_UNIT)} lists forms because its three verbs have none. This lesson's forms take ten minutes and they are in the second table above. The first table is the part you will actually come back for. ${REFRAME} That is a fact about vocabulary rather than about grammar, and there is no rule anywhere that will produce those thirty phrases for you: they are learned as pieces, the way single words are. Read the left-hand column if you are in a hurry. Once you have noticed that English is the language changing verb, the French stops looking like a list of exceptions and starts looking like one habit.`,
      },
      {
        type: 'teach',
        id: 'sheet-carries-forward',
        title: 'What carries forward',
        layer: 'deep',
        body: `Three things leave this lesson. The first is ${REFRAME} Every time you catch yourself hunting for a French verb, try faire and a noun first; you will be right more often than not. The second is that two lists closed here, and the third table above holds both: no other verb in the language ends vous on -tes, and no other verb ends ils on -ont, so those are two questions you never have to ask again. The third is smaller and it will come back: ${WHAT_FOLLOWS}. Il fait beau and Il fait le lit are the same two words doing completely different jobs, and only the word after them settles it. You met that shape at ${unitRef(WHAT_FOLLOWS_UNIT)} on a different pair, and you will meet it again. ${Cap(unitRef(MODAL_UNIT))} is next and it is three more verbs that will not come apart, so the ten minutes you spent on the forms here are about to pay for themselves.`,
      },
    ],
  },
];

export const FAIRE_DIRE_LIRE_LESSON: Lesson = {
  id: 'a2.12.l1',
  unitId: 'a2.12',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'Irréguliers 2 : faire, dire, lire',
  level: 'a2',
  // missions.ts derives the eyebrow from unit.seq at render time
  // (`${level} · LEÇON ${String(unit.seq).padStart(2, '0')}`), and a2.12 sits at
  // seq 6, which pads to "06". The stored value is a fallback and has to agree
  // with what the renderer computes, or the two disagree the moment something
  // reads this field instead. The batch checks it against the live unit rather
  // than trusting this comment.
  tag: 'A2 · LEÇON 06',
  // `intro` IS A LEARNER SURFACE. It is drawn on the lesson overview card AND on
  // the lesson cover, and a2.11 shipped the phrase "third person" here in v1
  // because every guard in the band walked `sections`, `sheets` and `terms` and
  // not this. The walk in the batch, the merge and the test includes `intro` and
  // `overview`, and this field is pinned by its own assertion.
  intro:
    `Three verbs that will not come apart, and one of them turns up in ${EXPRESSION_TARGET} everyday expressions: the shopping, the cooking, the queue, the weather. The forms take ten minutes. The reach is the rest of the lesson.`,

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // v2: FOUND BY A GUARD IN THIS BUILD, after v1 had already been applied to
  // Postgres. s16-notmine and the `notTheNouns` term both wrote the two boundary
  // units as possessives — "the weather words are a1.10's and the shopping words
  // are a2.26's" — and an accent-aware word-boundary search treats `'` as a WORD
  // CHARACTER, so `a2.26's` does not match a search for `a2.26`. The guard that
  // checks every boundary unit is cited by id found it; the earlier version of
  // that guard only looked for a1.10, which happened to appear unpossessed in a
  // term body, so it passed while a2.26 was cited nowhere a search could see.
  //
  // The learner-visible change is two words. The counter moves anyway, because
  // two different bodies under one version number is the drift that has made
  // Postgres and seed.json disagree twice, and the batch refuses the
  // alternative outright — which is how this came to be v2 rather than a quiet
  // edit.
  version: 2,

  grammarAssumed: [
    'The six subject pronouns and the nine they cover, introduced in a1.05',
    'on takes third-person-singular agreement, introduced in a1.05',
    'nous as the written first-person plural against on as the spoken one, introduced in a2.01',
    'The present tense of regular -er verbs as a stem plus six endings, introduced in a2.01',
    'The present tense of regular -ir and -re verbs, introduced in a2.10 and a2.11',
    'The present tense of être and avoir, including vous êtes, ils sont and ils ont, introduced in a1.06 and a1.07',
    'The present tense of aller, including ils vont, introduced in a2.02',
    'il fait plus an adjective as a frozen weather expression, introduced in a1.10',
    'The definite and partitive articles that appear inside these expressions, introduced in a1.04 and a1.29',
  ],
  grammarIntroduced: [
    'The present tense of faire, dire and lire, as forms that cannot be derived from a stem',
    'That vous takes -tes on faire and dire, completing the three-verb set begun with être at a1.06',
    'That ils takes -ont on faire, completing the four-verb set begun with être, avoir and aller',
    'That lire takes the regular endings at vous and ils, and is taught as the control case for the other two',
    'faire plus a noun as a productive idiom class, with thirty members grouped by the English verb it replaces',
    'That the impersonal il fait of a1.10 is the third-person singular of faire with a subject that has no referent',
    'That il fait plus an adjective and il fait plus a noun phrase are one form doing two jobs, separated only by what follows',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'Irregular Verbs 2: Faire, Dire, Lire',
    subFr: 'Irréguliers 2 : faire, dire, lire',
    introFr: 'Trois verbes irréguliers, et trente expressions construites sur un seul.',
    minutes: 30,
    difficulty: 3,
    glyph: 'Fa',
    screens: 200,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: FAIRE_DIRE_LIRE_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a2-12-faire-dire-lire.test.ts, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered. The first two pull in OPPOSITE directions, which is the
    // whole difficulty of recording this one.
    recorded: [
      {
        id: 'rec-a2-12-vous',
        desc: 'THE THREE vous FORMS, IN ONE TAKE, AND THE THREE MUST SOUND EQUALLY ORDINARY: « Vous faites le lit. » then « Vous dites bonjour. » then « Vous lisez le menu. » This is the single most important instruction in this lesson. The whole screen is that two of these three walk away from an ending and the third does not, and the learner has to notice that from the SPELLING rather than from the reading. A reader who knows faites is the difficult one will lean on it, put a fraction of extra space in front of it, or brighten it; every one of those instincts has to be suppressed completely. If a listener can tell which of the three is the odd one out with their eyes shut, the recording has done the work the screen is asking the learner to do. Conversational pace, no teaching pause anywhere, and the three back to back.',
        clipIds: ['Vous faites le lit.', 'Vous dites bonjour.', 'Vous lisez le menu.'],
      },
      {
        id: 'rec-a2-12-number',
        desc: 'THE SIX NUMBER LINES, IN THREE PAIRS, SINGULAR THEN PLURAL, EACH PAIR IN ONE TAKE: Il fait le lit / Ils font le lit, Il dit bonjour / Ils disent bonjour, Il lit le menu / Ils lisent le menu. Here the difference MUST be audible, which is the opposite instruction from the vous clip and is why they are separate recordings. Pair one is the big one: FEH against FOHⁿ is a completely different vowel and it goes into the nose, so do not soften it. Pairs two and three land a z at the very end of the verb and change nothing else at all, so the z must be clean and the vowel in front of it must not move. In every pair the PRONOUN must sound identical on both sides, because it is: il and ils are one sound. Any difference in the pronoun destroys the pair, because the learner will use it instead of the verb.',
        clipIds: ['Il fait le lit.', 'Ils font le lit.', 'Il dit bonjour.', 'Ils disent bonjour.', 'Il lit le menu.', 'Ils lisent le menu.'],
      },
      {
        id: 'rec-a2-12-grid',
        desc: 'ALL THREE PARADIGMS, IN THE USUAL PRONOUN ORDER (je, tu, il, nous, vous, ils), one voice, one speed, faire then dire then lire, and the ten dictée sentences come out of this same take. Within each verb THE FIRST THREE MUST BE INDISTINGUISHABLE FROM EACH OTHER: fais, fais and fait are one sound, dis, dis and dit are one sound, lis, lis and lit are one sound. Do not help by touching the final letter of any of them; the learner is being taught that the page is the only place those differences exist. nous faisons is the one to watch in the other direction: it is fuh-ZOHⁿ and not feh-ZOHⁿ, and a reader looking at the spelling will want to say the ai. The dictée sentences are the ones a learner replays four times while typing, so they need to be even in pace and completely flat in emphasis: any lean on an ending is a hint the screen is not supposed to give.',
        clipIds: ['Je fais le lit.', 'Tu fais le lit.', 'Il fait le lit.', 'Nous faisons le lit.', 'Vous faites le lit.', 'Ils font le lit.', 'Je dis bonjour.', 'Tu dis bonjour.', 'Il dit bonjour.', 'Nous disons bonjour.', 'Vous dites bonjour.', 'Ils disent bonjour.', 'Je lis le menu.', 'Tu lis le menu.', 'Il lit le menu.', 'Nous lisons le menu.', 'Vous lisez le menu.', 'Ils lisent le menu.'],
      },
      {
        id: 'rec-a2-12-reach',
        desc: 'ONE EXPRESSION FROM EACH OF THE SIX GROUPS, read as a flat list at conversational pace, one voice: faire les courses, faire le lit, faire du sport, faire un voyage, il fait beau, faire la cuisine. The instruction is sameness. Every one of these begins with the same syllable and that repetition IS the teaching, so do not vary the intonation to keep the list interesting and do not put a break after faire in any of them: these are single lexical units to a French speaker and reading them as verb-plus-object teaches the learner to assemble what they should be storing whole. Keep roughly a second between them so a learner can repeat into the gap.',
        clipIds: ['faire les courses', 'faire le lit', 'faire du sport', 'faire un voyage', 'il fait beau', 'faire la cuisine', 'Je fais le ménage.'],
      },
      {
        id: 'rec-a2-12-verbs',
        desc: 'The three naming forms alone, read as a flat list at conversational pace, one voice: faire, dire, lire. The last two rhyme and the first does not, and that is a fact about them rather than something to perform. Keep roughly a second between them so a learner can repeat into the gap.',
        clipIds: ['faire', 'dire', 'lire'],
      },
      {
        id: 'rec-a2-12-chores',
        desc: 'The ten do-and-make expressions, one take, flat: faire les courses, faire le ménage, faire la vaisselle, faire la lessive, faire ses devoirs, faire le lit, faire du bruit, faire un effort, faire des progrès, faire une erreur. Ten phrases beginning with the same word is monotonous to read and the monotony is the point, so resist varying it. No break after faire in any of them.',
        clipIds: ['faire les courses', 'faire le ménage', 'faire la vaisselle', 'faire la lessive', 'faire ses devoirs', 'faire le lit', 'faire du bruit', 'faire un effort', 'faire des progrès', 'faire une erreur'],
      },
      {
        id: 'rec-a2-12-active',
        desc: 'The eight go-and-take expressions, one take, flat: faire du sport, faire du vélo, faire du ski, faire de la natation, faire de la musique, faire une promenade, faire un voyage, faire les valises. The small word between faire and the noun (du, de la) must be unstressed and quick: a learner who hears it emphasised will think it is a choice they have to make, and this lesson deliberately does not teach that choice.',
        clipIds: ['faire du sport', 'faire du vélo', 'faire du ski', 'faire de la natation', 'faire de la musique', 'faire une promenade', 'faire un voyage', 'faire les valises'],
      },
      {
        id: 'rec-a2-12-own',
        desc: 'The seven expressions where English has a verb of its own, one take, flat: faire la cuisine, faire la queue, faire la fête, faire la sieste, faire attention, faire semblant, faire plaisir. faire semblant is two nasal vowels in a row and no n is released in either; do not let the second one become a consonant. faire attention runs the two words together across the vowel and should not be separated.',
        clipIds: ['faire la cuisine', 'faire la queue', 'faire la fête', 'faire la sieste', 'faire attention', 'faire semblant', 'faire plaisir'],
      },
      {
        id: 'rec-a2-12-weather',
        desc: `The five weather expressions, one take, flat, and read exactly as ${unitRef('a1.10')} reads them: il fait beau, il fait chaud, il fait froid, il fait frais, il fait mauvais. The learner has heard these before as single lumps and this lesson is taking them apart, so the reading must NOT change to help: no extra space after fait, no lift on the adjective. If they sound different here from the way they sound in ${unitRef('a1.10')}, the learner will conclude that the two lessons are about two different things, which is the opposite of what this mission says.`,
        clipIds: ['il fait beau', 'il fait chaud', 'il fait froid', 'il fait frais', 'il fait mauvais'],
      },
      {
        id: 'rec-a2-12-scene',
        desc: 'The opening scene, French bubbles only. A flatmate at a kitchen table on a Sunday morning, entirely relaxed, holding a pen over a list. He is not testing anybody and he is not impatient: the whole scene turns on nobody minding, so any edge in « Alors, tu fais quoi ce matin ? » or any resignation in « D\'accord. Je m\'occupe du reste. » would destroy it. He asked an ordinary question, got nothing back, and moved on, and he is right to have done so.',
        clipIds: ['Alors, tu fais quoi ce matin ?', "D'accord. Je m'occupe du reste."],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the tests, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const FAIRE_DIRE_LIRE_ITEM_IDS = ITEM_IDS;
export const FAIRE_DIRE_LIRE_SPEAK_IDS = SPEAK_IDS;
export const FAIRE_DIRE_LIRE_DICTATION_IDS = DICTATION_IDS;
/** THE THIRTY, in group order, and the grouping itself. The test asserts each
 *  one individually by name against this. */
export const FAIRE_DIRE_LIRE_EXPRESSION_IDS = EXPRESSION_IDS;
export const FAIRE_DIRE_LIRE_GROUPED = GROUPED;

/** THE SECTION THAT MUST CARRY THE THREE vous CELLS, in one group, in order.
 *  Named here rather than in the test, so the test asserts against the lesson's
 *  own claim and a rename cannot silently move the assertion to a section that
 *  no longer holds it. */
export const VOUS_ROW_SECTION_ID = 's06-vousrow';
/** The three rows that section must hold, in that order. */
export const VOUS_ROW_IDS = ['fr.a2.verbes.305', 'fr.a2.verbes.311', 'fr.a2.verbes.317'];
/** The section that carries the six-group tapTable, which is the Owns. */
export const REACH_SECTION_ID = 's09-tap';
/** The four sections that put the thirty on a screen, in order. */
export const EXPRESSION_SECTION_IDS = ['s10-chores', 's11-active', 's12-ownverb', 's13-weather'];
/** The section that unfreezes a1.10's weather phrases. */
export const WEATHER_SECTION_ID = 's13-weather';
/** The section that hands the neighbours their subjects back. */
export const BOUNDARY_SECTION_ID = 's16-notmine';
/** The section that must be the ONLY home of the nous/on statement. */
export const NOUS_ON_SECTION_ID = 's19-scenario';
/** The one sheet, so a future author who adds a second one fails a test rather
 *  than shipping a competing reference. */
export const SHEET_ID = SHEET_ID_CONST;
/** The scene's derived contrast row, exported so the test can check both halves
 *  against their sources rather than against a hand-typed copy. */
export const SCENE_RIGHT = { fr: SCENE_RIGHT_FR, respell: SCENE_RIGHT_RESPELL } as const;
