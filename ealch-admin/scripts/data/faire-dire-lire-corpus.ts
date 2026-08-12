// The a2.12 corpus: what this lesson had to author, what it imports, and what
// its brief got wrong.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 25 authored entries below and
// for every respelling a2.12 puts on a screen. The lesson body reads `fr`,
// `ipa`, `respell` and `en` FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE GENERAL PRINCIPLE, WHICH THE BRIEF ASKS FOR IN THIS HEADER
//
//  THIS LESSON BORROWS OTHER THEMES' NOUNS AS THE OBJECTS OF `faire`.
//  IT TEACHES NONE OF THEM.
//
//  `le ménage`, `la vaisselle`, `les courses`, `le vélo`, `la sieste` and the
//  rest arrive inside an expression and leave inside it. Not one of them is
//  released as a word, named as vocabulary, or asked about on its own, and the
//  guards are scoped to production surfaces so that a card which NAMES a
//  neighbour in order to hand it over does not fire them.
// ══════════════════════════════════════════════════════════════════════════
//
// ── WHAT THE BRIEF GOT WRONG, MEASURED 2026-08-12 ──────────────────────────
//
// 1. "lire   5 rows   fr.sons.verbes-essentiels.*"  and the same line for
//    `écrire`.
//
//    NOT ONE of the five `lire` rows is in `verbes-essentiels`, and nor is any
//    of the five `écrire` rows. Measured against Postgres:
//
//      lire     fr.a1.dictee.091 · fr.a1.ecole.048 (gender=m) ·
//               fr.a1.rp-loisirs.041 · fr.a1.rp-travail-etudes.040 ·
//               fr.a1.verbes-du-quotidien.112
//      écrire   fr.a1.dictee.090 · fr.a1.ecole.049 (gender=m) ·
//               fr.a1.rp-travail-etudes.039 · fr.a1.verbes-du-quotidien.113 ·
//               fr.sons.consonnes.110
//
//    `faire` and `dire` ARE in `verbes-essentiels`, at .004 and .005, which is
//    almost certainly where the pattern came from. The three naming forms this
//    lesson teaches do not share a theme and this build does not pretend they
//    do. The half of the claim that holds is the important half: all four exist
//    and this lesson authors none of them.
//
// 2. "Which `lire` and `écrire` rows are ungendered." (marked UNVERIFIED)
//
//    THREE OF THE FIVE `lire` ROWS ARE UNGENDERED and only one of those three
//    carries a respelling: fr.a1.dictee.091 `LEER`. That is the row imported.
//    fr.a1.verbes-du-quotidien.112 and fr.a1.rp-loisirs.041 have none between
//    them, and fr.a1.ecole.048 has `LEER` and `gender=m`.
//
//    AND THE GENDERED ROW WOULD NOT ACTUALLY HAVE MOVED a1.03. Run through the
//    REAL `endingPopulation`, fr.a1.ecole.048 does not join: the population
//    admits gendered single-word NOUNS and an infinitive is not one. The brief's
//    warning is sound as a habit and its stated consequence is not true here.
//    The ungendered row is imported anyway, because a `gender` on an infinitive
//    is wrong about the language whatever the test does.
//
// 3. "The `faire` expressions the brief wants are a phrase set, not headwords.
//    Probe them as `--tokens`, not `--words`." (marked SETTLED)
//
//    THIS IS THE CLAIM THAT WOULD HAVE COST THE BUILD. Twenty-three of the
//    forty-eight candidates probed exist as full ITEM rows, published, most with
//    a respelling and a flashcard drill. `faire la queue` has TEN.
//
//    And a `--tokens` probe is exactly the probe that hides them, because it
//    reports SENTENCE evidence: `faire la cuisine` returns pg=0 there, while
//    fr.a1.famille.136 has held it as a published phrase all along. Following
//    the brief would have authored twenty-three rows that already exist.
//
// 4. "Whether shopping vocabulary exists yet at all: a2.26 is seq 25 and
//    unbuilt, so `faire les courses` may have no noun to borrow." (UNVERIFIED)
//
//    THE `courses` THEME EXISTS AND HOLDS `faire les courses` OUTRIGHT, at
//    fr.a2.courses.018 with the respelling `FEHR lay KOORS`. A unit having no
//    lesson says nothing at all about whether its theme has rows: a2.26 is
//    unbuilt and `courses` is populated, which is the ordinary state of this
//    corpus and the reason doctrine §D exists.
//
// 5. "Whether the `faire` weather expressions exist in `meteo`. Very likely,
//    from a1.10. Unchecked. This is the single most important thing to probe
//    before you write a line." (UNVERIFIED)
//
//    THEY DO, and the brief was right to make this the first probe. Five of
//    them, all published, all with respellings:
//
//      fr.a1.meteo.027  il fait beau      EEL FEH BOH
//      fr.a1.meteo.028  il fait froid     EEL FEH FRWAH
//      fr.a1.meteo.029  il fait chaud     EEL FEH SHOH
//      fr.a1.meteo.037  il fait mauvais   EEL FEH moh-VEH
//      fr.a1.meteo.039  il fait frais     EEL FEH FREH
//
//    .037 and .039 carry `kind: 'word'` AND `gender: 'm'`, which invariants §5
//    calls radioactive. Run through the REAL `endingPopulation` they do not
//    join, because the population wants a single-word noun and these are three
//    words. Both are imported and the batch and the merge re-prove it.
//
// 6. "Import `hasPlainNasalFor` and assert respellings by name. `font` and
//    `disent` both need checking against §3 of the invariants."
//
//    NEITHER IS A BLIND SPOT AND ONE OF THEM HAS NO NASAL AT ALL.
//    `ils disent` is /diz/: an oral vowel and a real /z/, respelled `DEEZ`,
//    with nothing for the checker to miss. `ils font` is /fɔ̃/, respelled
//    `FOHⁿ`, and the checker SEES the broken form: `FOHn` is flagged.
//
//    Measured the way a2.11 measured it — every superscript in the lesson broken
//    back to a plain n, one at a time, and the checker asked whether it noticed:
//    ALL OF THEM ARE SEEN. This is the first lesson in the band with NO blind
//    nasal at all, and the reason is structural rather than lucky: every nasal
//    here ends a space-or-hyphen delimited token (`FOHⁿ`, `bohⁿ-ZHOOR`,
//    `fuh-ZOHⁿ`, `sahⁿ-BLAHⁿ`), which is exactly the shape the checker can
//    reach. BLIND_NASALS is empty and the emptiness is asserted rather than
//    assumed.
//
// 7. "tapTable is the workhorse here... Thirty expressions is exactly the shape
//    tapTable was built for and letterGrid is not."
//
//    HALF RIGHT, AND THE OTHER HALF WOULD HAVE SHIPPED A SCREEN NOBODY CAN USE.
//    `tapTable` is NOT in `ownsLayout()` (LessonPager.tsx:162), so it renders
//    inside a scrolling page, and A2-BRIEF-CORRECTIONS §8 records the measured
//    ceiling: SIX ROWS on a Pixel 6. Thirty rows is five screens of scroll with
//    no checkpoint in it.
//
//    So the tapTable holds SIX rows and each one is a GROUP: the English verb
//    French refuses to use, with the expressions behind it in the row detail.
//    That is not a compromise, it is the teaching: a learner who reads thirty
//    rows has a vocabulary list, and a learner who reads six has the rule. The
//    thirty reach screens through four groupDrills, which DO own their layout.
//
// 8. "faire un voyage" is in the brief's own list of nine expressions.
//    IT DOES NOT EXIST, in any theme, as an item or inside a published
//    sentence: 0 and 0 across 20,233 non-sentence rows and 27,552 sentences.
//    Nor do `faire des progrès`, `faire une erreur`, `faire de la musique`,
//    `faire les valises`, `faire semblant` or `faire plaisir`. Those seven are
//    the only rows this lesson authors that are not a paradigm cell.
//
// ── THE FORMS THE CORPUS DOES NOT HAVE ────────────────────────────────────
//
// Corrections §3 again, and this is now six builds out of six. Counted across
// 27,552 published sentences on 2026-08-12:
//
//   je fais 37   nous faisons 11   vous faites  3   ils font   6
//   je dis  10   nous disons   3   vous dites   8   ils disent 1
//   je lis   9   nous lisons   0   vous lisez   0   ils lisent 1
//
//   nous lisons 0 · vous lisez 0 · elles lisent 0 · elles disent 0
//
// The two cells this lesson exists to drill, `vous faites` and `ils font`, have
// three and six sentences between them in the whole corpus, and every one of
// those carries its own object. `vous lisez` — the control case, the cell whose
// whole job is to look ordinary beside `vous faites` — does not occur once.
//
// So all eighteen paradigm rows are authored, in three frames.
//
// ── THE FRAME WORDS, AND WHY `le lit` IS THE IMPORTANT ONE ────────────────
//
// `dicteeMode()` switches to WORD tiles above 16 letters and word mode hands
// every real word over pre-spelled, so a dictée target has to be ≤ 16 letters.
// Proved through the real function in the batch rather than counted by hand.
//
//   Vous faites le lit.     15   letters
//   Vous dites bonjour.     16   letters
//   Vous lisez le menu.     15   letters
//   Ils font le lit.        12   letters
//   Nous disons bonjour.    17   words     -> not a dictée target
//
// THE THREE CELLS THE LESSON EXISTS TO DRILL ARE ALL SPELLABLE, which is not a
// given: one more letter in the frame and `Vous dites bonjour.` would have
// handed the learner `dites` pre-spelled on a tile.
//
// `le lit` is not chosen for its length. IT IS ONE OF THE THIRTY EXPRESSIONS —
// `faire le lit`, fr.a1.maison.122 — so the paradigm act is not a detour from
// the Owns, it is the Owns being conjugated. Six cells of `faire` on one of the
// six things `faire` does.
//
// `bonjour` and `le menu` are ordinary objects, chosen because `dire` and `lire`
// have no idiom set to draw on. That absence is the point of the lesson and
// giving those two verbs colourful frames would have hidden it.
//
// ── kind: the eighteen are sentences, the seven are phrases ────────────────
//
// The ledger settled the first half for the level: only infinitives and full
// sentences are corpus rows, never a bare conjugated form. All eighteen
// paradigm rows are `sentence`.
//
// The seven authored expressions are `phrase`, which is what every one of the
// twenty-three imported expressions already is. `faire un voyage` is a naming
// form with an object on it, exactly like `faire la vaisselle`, and storing it
// any other way would put it in a different class from the rows beside it on
// the same screen.
//
// flashhub-coverage.test.ts fails the build when two NON-sentence rows in one
// theme share an `fr`. All seven were checked against every row in the corpus,
// not only against `verbes`: zero matches anywhere. The eighteen sentences are
// sentences and that rule leaves them alone.
//
// No authored row carries `gender` and none is a single word, so nothing here
// can join a1.03's measured ending population. The batch proves that through the
// real `endingPopulation` rather than claiming it.
//
// ── What is NOT here, and why ──────────────────────────────────────────────
//
// - NO WEATHER VOCABULARY. a1.10 (seq 14) owns it and its grammarIntroduced
//   says it taught `il fait` + an adjective "as one frozen form and never
//   conjugated". This lesson unfreezes it and teaches not one weather word:
//   `la pluie`, `le vent`, `la neige`, `le soleil` and the rest are named on no
//   production surface. See WEATHER_VOCAB.
// - NO SHOPPING VOCABULARY. a2.26 (seq 25) owns it. `faire les courses` is an
//   expression here and a topic there. See SHOPPING_VOCAB.
// - NO `dire que` + CLAUSE. Reported speech is beyond A2 and no unit at any
//   level owns it, which is stated as the weak finding it is: the search that
//   produced it is the unit-body search corrections §7 warns about. `dire` takes
//   a direct object on every screen in this lesson and the structure is neither
//   taught nor shown. See REPORTED_SPEECH_SHAPE.
// - NO MODAL. `pouvoir`, `vouloir` and `devoir` are a2.13 (seq 7), the very next
//   lesson, and `il faut faire la queue` is the shape that would leak. No
//   production surface holds a modal in front of an expression.
// - NO PASSÉ COMPOSÉ AND NO FUTUR PROCHE. a2.05 (seq 16) and a2.19 (seq 15).
//   `fait` is the past participle of `faire` as well as its il form, so the
//   guard here matters more than it did for a2.02: `j'ai fait` is one auxiliary
//   away from every screen in this lesson.
// - NO `ça fait mal`. "Say what hurts" is a2.28's canDo (seq 27, At the
//   Doctor's). `faire mal` was in the first draft of the thirty and was
//   withdrawn for that reason; `faire un effort` took its place and already
//   existed, at fr.b2.rp-achats.004.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── The id block ─────────────────────────────────────────────────────────
 *
 * fr.a2.verbes.301 .. .340, allocated in A2-BATCH-1-LEDGER.md §2. `fr.a2.verbes`
 * held 255 rows when this block was claimed, which is exactly the ledger's
 * figure after a2.11 (226) plus a2.02's 29, and .301..340 was EMPTY — checked by
 * selecting the range rather than by reading the maximum.
 *
 * THE MAXIMUM IS NO USE AT ALL HERE and has not been since a2.10.l2 took
 * .461..500, above the whole batch-1 reservation. The batch checks the row
 * COUNT, because a concurrent lesson landing below the top is invisible to a
 * highest-id check, which is how a1.20 lost an hour. */
export const OWNED_ID_RANGE = { from: 'fr.a2.verbes.301', to: 'fr.a2.verbes.340' } as const;

/** The row count `fr.a2.verbes` held when this block was claimed. The batch
 *  fails if the live count is anything other than this or this plus what it is
 *  about to write. */
export const ROW_COUNT_BEFORE = 255;

/** The theme this lesson writes into. One decision, made in the ledger. */
export const THEME = 'verbes';

/* ─── The six English verbs French refuses to use ──────────────────────────
 *
 * THE OWNS, AS DATA.
 *
 * The thirty expressions are grouped by the ENGLISH verb a learner reaches for
 * and does not get, never by topic. That is the whole difference between this
 * lesson and a vocabulary list: `faire la vaisselle` and `faire les courses` are
 * beside each other because both are "do", not because both happen in a house.
 *
 * The order is the order the tapTable renders, and it is deliberate: the three
 * groups where English has a general verb come first, because that is where the
 * learner's instinct is to translate the verb; the weather group is fifth,
 * because it is the one they already have from a1.10 and meeting it here
 * re-explains it; the group where English has a verb of its very own is last,
 * because it is the hardest to see coming. */
export type Reach = 'do' | 'make' | 'go' | 'take' | 'be' | 'own';

export const REACH_ORDER: readonly Reach[] = ['do', 'make', 'go', 'take', 'be', 'own'] as const;

/** What each group says on the tapTable, and what the row detail explains.
 *  `english` is the verb a learner reaches for; `gloss` is what French does
 *  instead. Read by the tapTable, the four groupDrills, the sheet and the test,
 *  so no screen restates a grouping the data does not hold. */
/*  `detail` IS BUDGETED, NOT WRITTEN FREELY. It is rendered inside a tapTable
 *  row's detail sheet at layer core, and density.logic.ts caps a core screen at
 *  45 words. The lesson body appends the group's own expressions to it, which
 *  costs 12 to 22 words depending on the group, so the prose here has to sit at
 *  about eighteen. The longer version of each of these is in the reference
 *  sheet, at layer deep, where density is deliberately fine. */
export const REACH: Record<Reach, { english: string; gloss: string; detail: string }> = {
  do: {
    english: 'do',
    gloss: 'faire, and then the job',
    detail: 'English says do the shopping, do the washing-up, do the laundry. French keeps one verb and lets the noun do the work.',
  },
  make: {
    english: 'make',
    gloss: 'faire, and then the thing',
    detail: 'Make the bed, make a noise, make progress. English splits do and make between these two groups and French has never heard of that split.',
  },
  go: {
    english: 'go, or play',
    gloss: 'faire du, de la, des',
    detail: 'Go swimming, play sport, play music. A small word arrives before the noun; take the whole phrase as it comes.',
  },
  take: {
    english: 'take, or go for',
    gloss: 'faire, and then the outing',
    detail: 'Take a trip, go for a walk, pack the bags. English reaches for take and French still has not changed verb.',
  },
  be: {
    english: 'be',
    gloss: 'il fait, and then how it is',
    detail: 'You met il fait beau long ago and it was one lump then. It is this verb, with nobody doing anything.',
  },
  own: {
    english: 'a verb of its very own',
    gloss: 'faire, and then one word',
    detail: 'Cook, queue, nap, pretend. English has a whole verb for each and French spends a noun. Nobody sees this group coming.',
  },
};

/* ─── The three verbs ──────────────────────────────────────────────────────
 *
 * NONE OF THESE IS AUTHORED. All three already exist in Postgres and are
 * imported by id; see faire-dire-lire-imported.ts for the recorded read, which
 * the batch verifies field by field before it writes anything.
 *
 * Ordered as the learner meets them: the one with the reach, then the one that
 * shares its trap, then the one that shares neither and is here to prove that
 * "irregular" is not a blanket. */
export const THE_THREE: readonly string[] = ['faire', 'dire', 'lire'];

/** The verb whose reach IS the lesson. Named once so no screen has to decide. */
export const THE_VERB = 'faire';
/** And the control case, for the same reason. */
export const THE_CONTROL = 'lire';

/* ─── The paradigms ────────────────────────────────────────────────────────
 *
 * The three side by side, derived nowhere else. The reference sheet, the
 * examples mission, the drills and the test all read THIS, so a table that
 * hand-typed a cell would be free to drift from the drill that scores it.
 *
 * IN THE LEDGER'S CANONICAL PRONOUN ORDER: je · tu · il · nous · vous · ils, six
 * rows and not nine. a1.05 already taught that il/elle/on share a form and
 * ils/elles share another. */
export const PARADIGM: { person: string; faire: string; dire: string; lire: string }[] = [
  { person: 'je', faire: 'fais', dire: 'dis', lire: 'lis' },
  { person: 'tu', faire: 'fais', dire: 'dis', lire: 'lis' },
  { person: 'il · elle · on', faire: 'fait', dire: 'dit', lire: 'lit' },
  { person: 'nous', faire: 'faisons', dire: 'disons', lire: 'lisons' },
  { person: 'vous', faire: 'faites', dire: 'dites', lire: 'lisez' },
  { person: 'ils · elles', faire: 'font', dire: 'disent', lire: 'lisent' },
];

/** The two endings every regular verb the learner has met takes at `vous` and
 *  at `ils`. a2.01 taught them on -ER, a2.10 on -IR and a2.11 on -RE, and all
 *  three sets agree about these two cells and about no others. */
export const LEARNED_ENDINGS: { person: string; ending: string }[] = [
  { person: 'vous', ending: 'ez' },
  { person: 'ils · elles', ending: 'ent' },
];

/** THE TRAP, AS ARITHMETIC.
 *
 *  Every cell at `vous` or `ils` whose form does NOT end in the ending a2.01
 *  taught. DERIVED rather than listed, so a form that is quietly corrected
 *  drops out of here and the guards that count it go red.
 *
 *  Measured, it is exactly three: faites, font, dites. `disent` ends in -ent
 *  like every regular plural, which the brief does not say and which is worth
 *  saying: `dire` breaks at ONE of the two cells and `faire` breaks at both. */
export const BREAKS: { verb: string; person: string; form: string; expected: string }[] =
  LEARNED_ENDINGS.flatMap(({ person, ending }) => {
    const row = PARADIGM.find((r) => r.person.startsWith(person))!;
    return (['faire', 'dire', 'lire'] as const)
      .filter((v) => !row[v].endsWith(ending))
      .map((v) => ({ verb: v, person: row.person, form: row[v], expected: ending }));
  });

/** And the cells of the CONTROL that break. Derived the same way, and the whole
 *  argument for the third verb: if this is ever anything but empty, `lire` has
 *  stopped being the control and the lesson has three traps rather than one
 *  trap and one measuring stick. */
export const CONTROL_BREAKS = BREAKS.filter((b) => b.verb === THE_CONTROL);

/* ─── THE TWO CLOSED CLUBS ─────────────────────────────────────────────────
 *
 * These are the reason this lesson is not "three more irregular verbs". Both are
 * closed sets in the present tense, the learner already holds most of both, and
 * this lesson is where each one is completed.
 *
 * `vous` ending in -tes: être, faire, dire. Three verbs, and after a1.06 the
 * learner had one of them.
 * `ils` ending in -ont: être, avoir, aller, faire. Four verbs, and after a1.06,
 * a1.07 and a2.02 the learner had three of them.
 *
 * The unit id beside each member is where the learner met it. `a2.12` is this
 * lesson, and the members marked so are the ones being added today. */
export const TES_CLUB: { form: string; verb: string; unit: string }[] = [
  { form: 'vous êtes', verb: 'être', unit: 'a1.06' },
  { form: 'vous faites', verb: 'faire', unit: 'a2.12' },
  { form: 'vous dites', verb: 'dire', unit: 'a2.12' },
];

export const ONT_CLUB: { form: string; verb: string; unit: string }[] = [
  { form: 'ils sont', verb: 'être', unit: 'a1.06' },
  { form: 'ils ont', verb: 'avoir', unit: 'a1.07' },
  { form: 'ils vont', verb: 'aller', unit: 'a2.02' },
  { form: 'ils font', verb: 'faire', unit: 'a2.12' },
];

/** This lesson's own unit id, used to derive which club members are new. */
export const UNIT_ID = 'a2.12';

/** What each club is worth is a COUNT, and the count is derived. A club that
 *  quietly gains a member breaks the prose rather than only the data. */
export const TES_NEW = TES_CLUB.filter((m) => m.unit === UNIT_ID);
export const ONT_ALREADY = ONT_CLUB.filter((m) => m.unit !== UNIT_ID);

/** The units this lesson closes a loop with, by id, each measured against
 *  content_units on 2026-08-12 rather than taken from a brief. */
export const ETRE_UNIT = 'a1.06';
export const AVOIR_UNIT = 'a1.07';
export const ALLER_UNIT = 'a2.02';
/** a1.10 (seq 14) taught `il fait beau` and its family as ONE FROZEN FORM. Its
 *  grammarIntroduced says so in as many words, which is what makes the weather
 *  group a payoff rather than a repeat. */
export const WEATHER_UNIT = 'a1.10';
/** The units this lesson hands things to. */
export const SHOPPING_UNIT = 'a2.26';
export const MODAL_UNIT = 'a2.13';
export const PASSE_COMPOSE_UNIT = 'a2.05';
export const FUTUR_PROCHE_UNIT = 'a2.19';

/* ─── The authored rows ────────────────────────────────────────────────────  */

/** A corpus entry plus the lesson-facing display data the renderer needs. */
export type FdlRow = Omit<Item, 'drills'> & {
  /** Which person this row puts on screen, in paradigm order, or null for an
   *  expression. */
  person: 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils' | null;
  /** Which verb's paradigm this row belongs to, or null for an expression. */
  verb: 'faire' | 'dire' | 'lire' | null;
  /** Which English verb group, for an expression, or null for a paradigm cell. */
  reach: Reach | null;
  drills: Item['drills'];
};

/** Speakable: the mic-scored deck runs `voiceflash`, and an item without it
 *  renders in a speak mission as a card the mic cannot score. */
const S: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
/** Speakable and spellable. Only on rows the dictée names, and every one of
 *  those is at or under the 16-letter limit so it spells from LETTERS. */
const SD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];
/** An expression: a naming form with an object on it, so no `sentence` drill. */
const P: Item['drills'] = ['flashcard', 'voiceflash', 'review'];

/** The 25 authored entries, in sequence order. */
export const FAIRE_DIRE_LIRE: FdlRow[] = [
  /* ── faire: the paradigm, on one of its own expressions ──────────────────
   *
   * Six rows and six authored. `le lit` is `faire le lit`, fr.a1.maison.122,
   * one of the thirty, so this act conjugates the Owns rather than stepping
   * away from it.
   *
   * .301, .302 and .303 CARRY THE SAME RESPELLING once the pronoun token is
   * removed, and so do the dire three and the lire three. `fais`, `fais` and
   * `fait` are one sound; the batch asserts the three are EQUAL rather than
   * merely present. */
  { id: 'fr.a2.verbes.301', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je fais le lit.', en: 'I make the bed.', ipa: '/ʒə fɛ lə li/', respell: 'zhuh FEH luh LEE', person: 'je', verb: 'faire', reach: null, tags: ['irregular', 'faire', 'paradigm', 'singular'], drills: S, audioRef: null, version: 1, notes: 'fais, and it sounds exactly like tu fais and il fait. Only the pronoun separates the three.' },
  { id: 'fr.a2.verbes.302', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu fais le lit.', en: 'You make the bed.', ipa: '/ty fɛ lə li/', respell: 'tü FEH luh LEE', person: 'tu', verb: 'faire', reach: null, tags: ['irregular', 'faire', 'paradigm', 'singular'], drills: S, audioRef: null, version: 1, notes: 'The same spelling as the je form and the same sound. The -s is silent, as it has been on every verb since a2.01.' },
  { id: 'fr.a2.verbes.303', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il fait le lit.', en: 'He makes the bed.', ipa: '/il fɛ lə li/', respell: 'eel FEH luh LEE', person: 'il', verb: 'faire', reach: null, tags: ['irregular', 'faire', 'paradigm', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'The third of three spellings that are one sound. This is also the form the weather uses, with nobody doing anything.' },
  { id: 'fr.a2.verbes.304', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous faisons le lit.', en: 'We make the bed.', ipa: '/nu fə.zɔ̃ lə li/', respell: 'noo fuh-ZOHⁿ luh LEE', person: 'nous', verb: 'faire', reach: null, tags: ['irregular', 'faire', 'paradigm', 'plural', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'Written fais- and said fuh-. It is the one place in the language where ai is not the eh sound, and the ending itself is the ordinary one.' },
  { id: 'fr.a2.verbes.305', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous faites le lit.', en: 'You make the bed.', ipa: '/vu fɛt lə li/', respell: 'voo FEHT luh LEE', person: 'vous', verb: 'faire', reach: null, tags: ['irregular', 'faire', 'paradigm', 'plural', 'trap'], drills: SD, audioRef: null, version: 1, notes: 'Not faisez. This is one of three verbs in the language where vous does not end in -ez, and it is the most-corrected form at this level.' },
  { id: 'fr.a2.verbes.306', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils font le lit.', en: 'They make the bed.', ipa: '/il fɔ̃ lə li/', respell: 'eel FOHⁿ luh LEE', person: 'ils', verb: 'faire', reach: null, tags: ['irregular', 'faire', 'paradigm', 'plural', 'nasal', 'trap'], drills: SD, audioRef: null, version: 1, notes: 'Not faisent. It joins sont, ont and vont, and those four are the whole of the -ont list.' },

  /* ── dire: the same trap at one cell and not at the other ────────────────
   *
   * Six rows on `bonjour`, an object with no idiom in it, because `dire` has no
   * reach and giving it a colourful frame would suggest it had.
   *
   * `Nous disons bonjour.` is 17 letters and so cannot be a dictée target: word
   * mode would hand `disons` over pre-spelled. It is spoken instead. */
  { id: 'fr.a2.verbes.307', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je dis bonjour.', en: 'I say hello.', ipa: '/ʒə di bɔ̃.ʒuʁ/', respell: 'zhuh DEE bohⁿ-ZHOOR', person: 'je', verb: 'dire', reach: null, tags: ['irregular', 'dire', 'paradigm', 'singular', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'dis, and the same three-spellings-one-sound as on faire. Nothing at the end of the verb is said at all.' },
  { id: 'fr.a2.verbes.308', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu dis bonjour.', en: 'You say hello.', ipa: '/ty di bɔ̃.ʒuʁ/', respell: 'tü DEE bohⁿ-ZHOOR', person: 'tu', verb: 'dire', reach: null, tags: ['irregular', 'dire', 'paradigm', 'singular', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Spelled like the je form and said like it. Put the pronoun in and the sentence is unambiguous.' },
  { id: 'fr.a2.verbes.309', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il dit bonjour.', en: 'He says hello.', ipa: '/il di bɔ̃.ʒuʁ/', respell: 'eel DEE bohⁿ-ZHOOR', person: 'il', verb: 'dire', reach: null, tags: ['irregular', 'dire', 'paradigm', 'singular', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The -t is silent. Compare Il fait le lit: the two verbs behave identically here.' },
  { id: 'fr.a2.verbes.310', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous disons bonjour.', en: 'We say hello.', ipa: '/nu di.zɔ̃ bɔ̃.ʒuʁ/', respell: 'noo dee-ZOHⁿ bohⁿ-ZHOOR', person: 'nous', verb: 'dire', reach: null, tags: ['irregular', 'dire', 'paradigm', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The ordinary -ons, on a stem that has not moved. Out loud most rooms say on dit instead.' },
  { id: 'fr.a2.verbes.311', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous dites bonjour.', en: 'You say hello.', ipa: '/vu dit bɔ̃.ʒuʁ/', respell: 'voo DEET bohⁿ-ZHOOR', person: 'vous', verb: 'dire', reach: null, tags: ['irregular', 'dire', 'paradigm', 'plural', 'trap', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'Not disez. The second of the three -tes forms, and the -s of the stem is heard here as a t.' },
  { id: 'fr.a2.verbes.312', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils disent bonjour.', en: 'They say hello.', ipa: '/il diz bɔ̃.ʒuʁ/', respell: 'eel DEEZ bohⁿ-ZHOOR', person: 'ils', verb: 'dire', reach: null, tags: ['irregular', 'dire', 'paradigm', 'plural', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The ordinary -ent, and the z you hear is the stem rather than the ending. This cell is regular in shape and the brief says otherwise.' },

  /* ── lire: THE CONTROL, and the reason the third verb is here ────────────
   *
   * Six rows on `le menu`. Every cell is built the way a2.11's -RE verbs are
   * built, and the two cells that matter — `vous lisez` and `ils lisent` — carry
   * the endings a2.01 taught, which neither of the other two verbs manages at
   * both.
   *
   * `vous lisez` does not occur once in 27,552 published sentences and nor does
   * `nous lisons`. The cell whose entire job is to look ordinary has no evidence
   * for it anywhere, which is the sharpest instance of corrections §3 in this
   * band so far. */
  { id: 'fr.a2.verbes.313', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je lis le menu.', en: 'I read the menu.', ipa: '/ʒə li lə mə.ny/', respell: 'zhuh LEE luh muh-NÜ', person: 'je', verb: 'lire', reach: null, tags: ['irregular', 'lire', 'paradigm', 'singular', 'control'], drills: S, audioRef: null, version: 1, notes: 'The same shape as je dis and je fais. All three verbs agree in the singular and part company in the plural.' },
  { id: 'fr.a2.verbes.314', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu lis le menu.', en: 'You read the menu.', ipa: '/ty li lə mə.ny/', respell: 'tü LEE luh muh-NÜ', person: 'tu', verb: 'lire', reach: null, tags: ['irregular', 'lire', 'paradigm', 'singular', 'control'], drills: S, audioRef: null, version: 1, notes: 'Silent -s, as everywhere else. Nothing here is new.' },
  { id: 'fr.a2.verbes.315', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il lit le menu.', en: 'He reads the menu.', ipa: '/il li lə mə.ny/', respell: 'eel LEE luh muh-NÜ', person: 'il', verb: 'lire', reach: null, tags: ['irregular', 'lire', 'paradigm', 'singular', 'control'], drills: SD, audioRef: null, version: 1, notes: 'Silent -t. Three verbs, three singulars, and not one audible difference between the persons.' },
  { id: 'fr.a2.verbes.316', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous lisons le menu.', en: 'We read the menu.', ipa: '/nu li.zɔ̃ lə mə.ny/', respell: 'noo lee-ZOHⁿ luh muh-NÜ', person: 'nous', verb: 'lire', reach: null, tags: ['irregular', 'lire', 'paradigm', 'plural', 'nasal', 'control'], drills: S, audioRef: null, version: 1, notes: 'This form does not appear once in the whole published corpus, and the pattern still tells you what it is.' },
  { id: 'fr.a2.verbes.317', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous lisez le menu.', en: 'You read the menu.', ipa: '/vu li.ze lə mə.ny/', respell: 'voo lee-ZAY luh muh-NÜ', person: 'vous', verb: 'lire', reach: null, tags: ['irregular', 'lire', 'paradigm', 'plural', 'control'], drills: SD, audioRef: null, version: 1, notes: 'The -ez you have had since a2.01, and this is the cell that shows the other two are the exception rather than the rule.' },
  { id: 'fr.a2.verbes.318', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils lisent le menu.', en: 'They read the menu.', ipa: '/il liz lə mə.ny/', respell: 'eel LEEZ luh muh-NÜ', person: 'ils', verb: 'lire', reach: null, tags: ['irregular', 'lire', 'paradigm', 'plural', 'control'], drills: SD, audioRef: null, version: 1, notes: 'The ordinary -ent, silent as always, with the z of the stem in front of it.' },

  /* ── The seven expressions the corpus does not have ──────────────────────
   *
   * Twenty-three of the thirty are imported. These seven returned ZERO as an
   * item and zero inside a published sentence, checked against 20,233
   * non-sentence rows and 27,552 sentences on 2026-08-12.
   *
   * Every one is a high-frequency phrase rather than a filler: the brief warns
   * against padding to reach thirty and none of these is padding. They are the
   * gaps a corpus assembled by topic leaves behind, because none of them belongs
   * to a topic. */
  { id: 'fr.a2.verbes.319', kind: 'phrase', level: 'a2', theme: THEME, fr: 'faire des progrès', en: 'to make progress', ipa: '/fɛʁ de pʁɔ.gʁɛ/', respell: 'FEHR day proh-GREH', person: null, verb: null, reach: 'make', tags: ['expression', 'faire'], drills: P, audioRef: null, version: 1, notes: 'English makes progress and French does it. Nothing in the phrase can be worked out from either language.' },
  { id: 'fr.a2.verbes.320', kind: 'phrase', level: 'a2', theme: THEME, fr: 'faire une erreur', en: 'to make a mistake', ipa: '/fɛʁ yn ɛ.ʁœʁ/', respell: 'FEHR ün eh-RUHR', person: null, verb: null, reach: 'make', tags: ['expression', 'faire'], drills: P, audioRef: null, version: 1, notes: 'The one expression here an English speaker guesses right, and it is worth having for that reason.' },
  { id: 'fr.a2.verbes.321', kind: 'phrase', level: 'a2', theme: THEME, fr: 'faire de la musique', en: 'to play music', ipa: '/fɛʁ də la my.zik/', respell: 'FEHR duh lah mü-ZEEK', person: null, verb: null, reach: 'go', tags: ['expression', 'faire'], drills: P, audioRef: null, version: 1, notes: 'English plays music and plays sport; French does both with faire and a small word in front of the noun.' },
  { id: 'fr.a2.verbes.322', kind: 'phrase', level: 'a2', theme: THEME, fr: 'faire un voyage', en: 'to take a trip', ipa: '/fɛʁ œ̃ vwa.jaʒ/', respell: 'FEHR uhⁿ vwah-YAHZH', person: null, verb: null, reach: 'take', tags: ['expression', 'faire', 'nasal'], drills: P, audioRef: null, version: 1, notes: 'Take a trip, and there is no French verb for take here at all.' },
  { id: 'fr.a2.verbes.323', kind: 'phrase', level: 'a2', theme: THEME, fr: 'faire les valises', en: 'to pack the bags', ipa: '/fɛʁ le va.liz/', respell: 'FEHR lay vah-LEEZ', person: null, verb: null, reach: 'take', tags: ['expression', 'faire'], drills: P, audioRef: null, version: 1, notes: 'English has a whole verb, to pack. French spends the word for suitcases instead.' },
  { id: 'fr.a2.verbes.324', kind: 'phrase', level: 'a2', theme: THEME, fr: 'faire semblant', en: 'to pretend', ipa: '/fɛʁ sɑ̃.blɑ̃/', respell: 'FEHR sahⁿ-BLAHⁿ', person: null, verb: null, reach: 'own', tags: ['expression', 'faire', 'nasal'], drills: P, audioRef: null, version: 1, notes: 'Two nasal vowels in one word and no n said in either. The noun semblant is used for nothing else at all.' },
  { id: 'fr.a2.verbes.325', kind: 'phrase', level: 'a2', theme: THEME, fr: 'faire plaisir', en: 'to please someone', ipa: '/fɛʁ ple.ziʁ/', respell: 'FEHR pleh-ZEER', person: null, verb: null, reach: 'own', tags: ['expression', 'faire'], drills: P, audioRef: null, version: 1, notes: 'Ça me fait plaisir is what somebody says when they are glad you came. There is no verb in it anywhere.' },
];

/* ─── Accessors ────────────────────────────────────────────────────────────  */

/** Lookup by id. The lesson body builds every screen through this. */
export const BY_ID: ReadonlyMap<string, FdlRow> = new Map(FAIRE_DIRE_LIRE.map((w) => [w.id, w]));

/** Every authored id, in sequence order. */
export const AUTHORED_IDS: string[] = FAIRE_DIRE_LIRE.map((w) => w.id);

/** One verb's paradigm, in the ledger's canonical pronoun order. */
export const paradigmIds = (v: 'faire' | 'dire' | 'lire'): string[] =>
  FAIRE_DIRE_LIRE.filter((w) => w.verb === v).map((w) => w.id);

/** The ids showing one PERSON, in sequence order, across all three verbs. Lets
 *  the guards assert every person reaches a screen against the corpus rather
 *  than a hand list that could quietly lose `vous`. */
export const personIds = (p: NonNullable<FdlRow['person']>): string[] =>
  FAIRE_DIRE_LIRE.filter((w) => w.person === p).map((w) => w.id);

/** The seven authored expressions, in sequence order. */
export const AUTHORED_EXPRESSION_IDS: string[] = FAIRE_DIRE_LIRE.filter((w) => w.reach !== null).map((w) => w.id);
/** And the eighteen paradigm rows. */
export const PARADIGM_IDS: string[] = FAIRE_DIRE_LIRE.filter((w) => w.verb !== null).map((w) => w.id);

/** The French line alone. */
export const fr = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`faire-dire-lire corpus: unknown id "${id}"`);
  return w.fr;
};

/** The bracketed respelling alone, which is what a deck card's `sub` line
 *  carries. Built HERE, once, rather than baked into the stored data: the
 *  validator checks the rendered form and storing the brackets would double
 *  them up. */
export const sub = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`faire-dire-lire corpus: unknown id "${id}"`);
  return w.respell ? `[${w.respell}]` : '';
};

/** The respelling with no brackets, for a cell that is not notation. */
export const bare = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`faire-dire-lire corpus: unknown id "${id}"`);
  return w.respell ?? '';
};

/** The English gloss alone. */
export const en = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`faire-dire-lire corpus: unknown id "${id}"`);
  return w.en;
};

/** The respelling with its first token removed, which is how a singular triple
 *  is compared: the pronouns differ audibly and everything after them must not. */
export const afterPronoun = (respell: string): string => respell.split(' ').slice(1).join(' ');

/** The corpus Item, stripped of the lesson-only fields. */
export function toItem(w: FdlRow): Item {
  const { person: _p, verb: _v, reach: _r, ...item } = w;
  return item;
}

/* ─── The pairs and triples ────────────────────────────────────────────────  */

/** THE SINGULAR TRIPLES: three spellings whose respellings are ONE STRING once
 *  the pronoun token comes off.
 *
 *  THREE TRIPLES ON THREE VERBS, which is one more than a2.02 managed, because
 *  all three of these verbs collapse their singular the same way: fais/fais/fait
 *  is /fɛ/, dis/dis/dit is /di/, lis/lis/lit is /li/. Asserted as an EQUALITY by
 *  the batch and by the test rather than trusted to survive an edit.
 *
 *  This is also why the dictée is the only surface that can test the singular,
 *  and why every ear question in the lesson is about NUMBER rather than person. */
export const SINGULAR_TRIPLES: string[][] = [
  ['fr.a2.verbes.301', 'fr.a2.verbes.302', 'fr.a2.verbes.303'],
  ['fr.a2.verbes.307', 'fr.a2.verbes.308', 'fr.a2.verbes.309'],
  ['fr.a2.verbes.313', 'fr.a2.verbes.314', 'fr.a2.verbes.315'],
];

/** THE PAIRS WHOSE ONLY AUDIBLE DIFFERENCE IS THE VERB'S OWN ENDING.
 *
 *  `[singular, plural]`, one per verb, and every one is genuinely audible:
 *  `FEH` against `FOHⁿ`, `DEE` against `DEEZ`, `LEE` against `LEEZ`. `il` and
 *  `ils` are one sound, so the verb is the whole evidence, which is what makes
 *  the ear mission a real task rather than a pronoun quiz.
 *
 *  NOTE THE DIRECTION, WHICH IS THE OPPOSITE OF a2.02's. There the singular was
 *  the nasal one (`vyaⁿ` against `vyenn`); here the PLURAL is (`FEH` against
 *  `FOHⁿ`), and on the other two verbs neither side is nasal at all. A guard
 *  copied from a2.02 that required a nasal singular would reject all three of
 *  these, which is why this one checks the shape it actually has. */
export const NUMBER_PAIRS: [string, string][] = [
  ['fr.a2.verbes.303', 'fr.a2.verbes.306'],
  ['fr.a2.verbes.309', 'fr.a2.verbes.312'],
  ['fr.a2.verbes.315', 'fr.a2.verbes.318'],
];

/* ─── THE SPELLINGS AN EAR QUESTION MAY NEVER ASK BETWEEN ──────────────────
 *
 * Each group is a set of forms that are IDENTICAL out loud. A `listenChoose`
 * offering two members of one group has no correct answer, and marking one of
 * them right would certify a bug.
 *
 * All three groups are the same shape: the je, tu and il cells of a verb whose
 * stem ends in a silent consonant. There is no fourth group, because every other
 * cell in the lesson is audibly distinct from every other. */
export const HOMOPHONE_FORMS: string[][] = [
  ['fais', 'fait'],
  ['dis', 'dit'],
  ['lis', 'lit'],
];

/* ─── Respelling repairs ───────────────────────────────────────────────────
 *
 * TWO, BOTH VISIBLE, AND NO INVISIBLE ONES AT ALL.
 *
 * Corrections §6 tells every remaining author to split the repair table in two,
 * because a2.10's guard rejects a repair the shared checker cannot see. The
 * split is kept, and `RESPELL_REPAIRS_INVISIBLE` is empty because this lesson
 * has no word-internal nasal in it: every superscript it writes ends a
 * space-or-hyphen delimited token, which is exactly the shape `hasPlainNasalFor`
 * can reach. Measured by breaking each one back one at a time; all are seen.
 *
 * THE SECOND REPAIR IS NOT A SUPERSCRIPT, AND THAT IS THE POINT OF IT.
 * `promenade` is /pʁɔm.nad/: the m is a REAL consonant and there is no nasal
 * vowel in the word at all. `prohm-NAHD` trips `hasPlainNasal`, which reads the
 * OH+M as a nasal that has not been closed, and "repairing" it with a
 * superscript would teach a sound that is not there. Invariants §3 records the
 * same case for `jaune` and `automne`. The answer is to stop spelling it with
 * the OH digraph: `prom-NAHD` says the same thing and the checker is satisfied
 * for the right reason. */
export type Repair = { id: string; fr: string; from: string; to: string; why: string };

export const RESPELL_REPAIRS_VISIBLE: Repair[] = [
  {
    id: 'fr.a1.sports-et-loisirs.073',
    fr: 'faire de la natation',
    from: 'FEHR DUH LAH na-ta-SYOHN',
    to: 'FEHR DUH LAH na-ta-SYOHⁿ',
    why: 'natation is /na.ta.sjɔ̃/: a genuine nasal vowel, closed with a plain N. The superscript is the house form and the checker flags the stored value.',
  },
  {
    id: 'fr.a1.animaux-domestiques.123',
    fr: 'faire une promenade',
    from: 'fair ün prohm-NAHD',
    to: 'fair ün prom-NAHD',
    why: 'promenade is /pʁɔm.nad/ with a REAL m and no nasal vowel, so a superscript would be wrong. The OH digraph is what makes the checker read a nasal; dropping it fixes the reading without inventing a sound. Invariants §3, the jaune case.',
  },
];

export const RESPELL_REPAIRS_INVISIBLE: Repair[] = [];
export const RESPELL_REPAIRS: Repair[] = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE];

/** Rows carrying a competing or a broken respelling that this build does NOT
 *  repair, recorded so the next author can see they were seen. */
export const NOT_REPAIRED: { id: string; fr: string; stored: string; why: string }[] = [
  { id: 'fr.a1.routines.050', fr: 'faire son lit', stored: 'FEHR sohn LEE', why: 'GENUINELY BROKEN: son is /sɔ̃/ and the checker flags it. Not repaired because this lesson does not display it — the make group takes faire le lit, fr.a1.maison.122 — and a merge that carried an unrelated row into the seed to fix it would be doing somebody else\'s job in this build\'s transaction. Recorded so it is findable.' },
  { id: 'fr.b1.courses.023', fr: 'faire la queue', stored: 'fair lah kuh', why: 'No stressed syllable capitalised, which is a variant rather than a violation of the nasal rule. Not displayed here: this lesson imports fr.b1.tourisme.039, which has one.' },
  { id: 'fr.a1.ecole.048', fr: 'lire', stored: 'LEER', why: 'The respelling is correct; the row carries gender=m on an infinitive. Not imported for that reason, although endingPopulation shows it would not actually have moved a1.03.' },
  { id: 'fr.a1.sports-et-loisirs.005', fr: 'la natation', stored: 'LAH na-ta-SYOHN', why: 'The SAME violation as the row this build repairs, on the NOUN rather than on the expression. Not repaired because this lesson does not display it. See SEED_NASAL_DEBT: it is one of 36 rows with the -tion shape and one of 904 the checker flags across the whole seed.' },
];

/** THE SIZE OF THE PROBLEM THIS BUILD REPAIRED TWO ROWS OF.
 *
 *  Measured 2026-08-12 against seed.json by `scripts/_a212_nasal_scan.ts`, after
 *  the merge, and worth writing down because it is the first time anybody in
 *  this band has counted it rather than repairing what was in front of them:
 *
 *    904 of 8,787 seed rows carry a respelling the shared checker flags
 *     36 of those are the `-tion` shape, `SYOHN` where it should be `SYOHⁿ`
 *      0 of them are this lesson's, authored or carried
 *
 *  `fr.a1.sports-et-loisirs.005` (`la natation`) is the same word as the row
 *  this build repaired, on the noun instead of the expression, and it is still
 *  wrong. Repairing all 904 is a sweep rather than a lesson build, and doing it
 *  inside this transaction would have carried 904 unrelated rows into the seed.
 *  The figure is recorded so somebody can decide to run that sweep on purpose.
 *
 *  Note that 904 is a SEED figure and the seed is roughly a quarter of Postgres,
 *  so the real number is larger. Nobody has measured that one. */
export const SEED_NASAL_DEBT = { flagged: 904, ofRows: 8787, tionShape: 36, mine: 0, measured: '2026-08-12' } as const;

/* ─── Drill additions ──────────────────────────────────────────────────────
 *
 * THREE, and every one was measured rather than assumed. Every row released by a
 * `deckTranche` is served by the flashcard hub as a card, and a row with no
 * `flashcard` drill is released to nothing. Twenty-three of the twenty-six
 * imported rows already carry one; these three carry {voiceflash, review} only:
 *
 *   fr.a1.dictee.091     lire                the naming form itself
 *   fr.a1.famille.136    faire la cuisine    one of the thirty
 *   fr.a1.dictee.122     faire attention     one of the thirty
 *
 * The addition is a UNION and nothing else about the row moves. `drills` is a
 * Postgres ENUM array (`drill_kind[]`), so concatenating a `text[]` fails with
 * `operator does not exist: drill_kind[] || text[]` and takes the whole
 * transaction with it. The double cast is the only route; ledger §5.
 *
 * NO `voiceflash` IS ADDED ANYWHERE, and that is a placement decision. All three
 * of these already carry it, and this lesson speaks its authored sentences
 * rather than its expressions: a bare `faire la lessive` scored by the mic is a
 * naming form with nobody doing it. */
export const DRILL_ADDITIONS: { id: string; add: 'flashcard' | 'voiceflash'; why: string }[] = [
  { id: 'fr.a1.dictee.091', add: 'flashcard', why: 'lire, the naming form. Released by act 2 and served as a hub card; the row carries voiceflash and review only.' },
  { id: 'fr.a1.famille.136', add: 'flashcard', why: 'faire la cuisine, released by act 3 with the other twenty-nine.' },
  { id: 'fr.a1.dictee.122', add: 'flashcard', why: 'faire attention, released by act 3 with the other twenty-nine.' },
];

/** THE THREE ROWS THIS LESSON DISPLAYS WITH NO RESPELLING AT ALL, named rather
 *  than left to be noticed. Every one is a genuine gap in the imported row and
 *  none of them is this build's to fill: adding a transcription to somebody
 *  else's row is authoring, not importing, and the difference is the whole of
 *  doctrine §2. The card shows the French and the English and no bracket. */
export const NO_RESPELL_IDS: string[] = [
  'fr.a1.famille.136', // faire la cuisine
  'fr.a1.dictee.122', // faire attention
  'fr.b2.rp-achats.004', // faire un effort
];

/* ─── THE RESPELLINGS THE SHARED CHECKER CANNOT SEE ────────────────────────
 *
 * NONE, AND THAT IS THE FIRST TIME IN THIS BAND.
 *
 * Measured 2026-08-12 the way a2.11 and a2.02 measured it: every superscript
 * this lesson writes was broken back to a plain n, one at a time, and
 * `hasPlainNasalFor` was asked whether it noticed. It noticed every one.
 *
 * The reason is structural rather than lucky. Corrections §6 states the blind
 * shape precisely — a nasal followed by any consonant INSIDE the token — and
 * this lesson has no word of that shape in it:
 *
 *   FOHⁿ            token-final          seen
 *   fuh-ZOHⁿ        token-final          seen
 *   dee-ZOHⁿ        token-final          seen
 *   lee-ZOHⁿ        token-final          seen
 *   bohⁿ-ZHOOR      hyphen-final         seen
 *   uhⁿ             token-final          seen
 *   sahⁿ-BLAHⁿ      hyphen- and final    both seen
 *
 * BLIND_NASALS is empty and the batch asserts the emptiness by re-running the
 * measurement, so an author who adds `PRAHNDR` or `lahnt-MAHN` to this lesson
 * fails rather than shipping a nasal nothing can see. */
export const BLIND_NASALS: { id: string; must: string; why: string }[] = [];

/** Every superscript this lesson writes, with the plain-n version the checker
 *  MUST flag. Asserted in both directions, so the day the checker changes in
 *  either direction this build finds out. */
export const VISIBLE_NASALS: { id: string; must: string }[] = FAIRE_DIRE_LIRE
  .filter((w) => (w.respell ?? '').includes('ⁿ'))
  .map((w) => ({ id: w.id, must: w.respell! }));

/* ─── The dictée ───────────────────────────────────────────────────────────  */

/** The dictée targets: every authored row carrying the `dictation` drill.
 *  DERIVED, so a row that loses the tag drops out here rather than rendering as
 *  a dictée the app cannot run. Every one is at or under dicteeMode's 16-letter
 *  limit, and the batch proves that through the real `dicteeMode`.
 *
 *  ALL THREE TRAP CELLS ARE IN IT, which is the whole reason the frames are what
 *  they are: `Vous faites le lit.` is 15 letters and `Vous dites bonjour.` is
 *  16, so both spell from LETTERS. One more letter in either frame and the
 *  learner would have been handed the form on a tile. */
export const DICTATION_IDS: string[] = FAIRE_DIRE_LIRE.filter((w) => w.drills?.includes('dictation')).map((w) => w.id);

/** THE DICTÉE, AND WHAT IT CAN ACTUALLY GRADE.
 *
 *  MissionRich checks a dictée with `normalizeFr(filled) === normalizeFr(target)`,
 *  and normalizeFr normalises to NFD and strips every combining mark, all case
 *  and all whitespace. A dropped letter and an added one survive that; a capital
 *  does not.
 *
 *  Each row is a target, the near miss a learner would actually make, and
 *  whether the app can tell them apart. The batch and the test run BOTH claims
 *  through the real `normalizeFr`: the scorable ones must differ and the
 *  unscorable one must collide. The shape is a2.09's and it is copied
 *  deliberately, so that if `fold` is ever fixed the assertion fails instead of
 *  quietly going stale.
 *
 *  THE THREE THAT MATTER ARE `faisez`, `disez` AND `faisent`. Those are the
 *  regular-looking forms the learner will produce, they are letters all the way
 *  down, and the dictée grades every one of them. */
export const DICTEE_NEAR_MISS: { id: string; wrong: string; scorable: boolean; what: string }[] = [
  { id: 'fr.a2.verbes.303', wrong: 'Il fais le lit.', scorable: true, what: 'the je and tu spelling carried onto il. All three are one sound, so the page is the only place this exists.' },
  { id: 'fr.a2.verbes.304', wrong: 'Nous fesons le lit.', scorable: true, what: 'the ai written the way it is said. faisons is the one place in the language where ai is not the eh sound, and the spelling keeps the ai anyway.' },
  { id: 'fr.a2.verbes.305', wrong: 'Vous faisez le lit.', scorable: true, what: 'THE ERROR THE LESSON EXISTS TO STOP. Every regular verb the learner has met ends vous in -ez and this one does not.' },
  { id: 'fr.a2.verbes.306', wrong: 'Ils faisent le lit.', scorable: true, what: 'the regular-looking plural, built off the nous stem. The real form shares nothing with it.' },
  { id: 'fr.a2.verbes.309', wrong: 'Il dis bonjour.', scorable: true, what: 'the je spelling on il, on the second verb. The same error as on faire and equally invisible to the ear.' },
  { id: 'fr.a2.verbes.311', wrong: 'Vous disez bonjour.', scorable: true, what: 'the second of the three -tes cells, and the second most-corrected form at this level.' },
  { id: 'fr.a2.verbes.312', wrong: 'Ils dient bonjour.', scorable: true, what: 'the stem losing its s. This cell is regular in SHAPE and the stem still has to be right.' },
  { id: 'fr.a2.verbes.315', wrong: 'il lit le menu.', scorable: false, what: 'THE CAPITAL at the start of the sentence. normalizeFr strips case, so this is graded correct. Invariants §4, and a1.08 and a1.09 both got it wrong before it was measured.' },
  { id: 'fr.a2.verbes.317', wrong: 'Vous lises le menu.', scorable: true, what: 'the -ER ending on the control verb, which is the error the control exists to make unlikely.' },
  { id: 'fr.a2.verbes.318', wrong: 'Ils lisen le menu.', scorable: true, what: 'the silent -t dropped. Nothing in the sound puts it back.' },
];

/** Derived from DICTEE_NEAR_MISS rather than typed, so the list and the evidence
 *  for it cannot drift apart. */
export const SCORABLE_DICTATION_IDS: string[] = DICTEE_NEAR_MISS.filter((d) => d.scorable).map((d) => d.id);
/** And the one the check cannot settle, named so nobody comes to believe it can. */
export const UNSCORABLE_DICTATION_IDS: string[] = DICTEE_NEAR_MISS.filter((d) => !d.scorable).map((d) => d.id);

/* ─── THE NEIGHBOURS' MATERIAL, AND THE GUARDS THAT KEEP IT THEIRS ─────────
 *
 * All three lists are checked against PRODUCTION SURFACES ONLY: decks,
 * vocabulary, drills, checks and the quiz. The brief is explicit about this and
 * it is not politeness — a guard over every string fires on the card that HANDS
 * a neighbour their subject, and invariants §1 records four ways a guard that
 * fires on legitimate content came to be deleted.                             */

/** a1.10's weather vocabulary. Every one of these is a published row in `meteo`
 *  and every one is a1.10's to teach. This lesson borrows five `il fait` phrases
 *  and not one weather word: a learner leaves it able to say `il fait beau` and
 *  no better at naming the sky than they were.
 *
 *  Deliberately the NOUNS AND ADJECTIVES rather than the phrases: `beau`,
 *  `chaud`, `froid`, `frais` and `mauvais` are inside the five expressions this
 *  lesson does import, so listing them here would fire on the lesson's own
 *  content. What is banned is the vocabulary AROUND the expressions. */
export const WEATHER_VOCAB: readonly string[] = [
  'la pluie', 'le soleil', 'le vent', 'la neige', 'un nuage', 'le ciel', "l'orage",
  'le brouillard', 'la tempête', 'la saison', 'la météo', 'le printemps', "l'été",
  "l'automne", "l'hiver", 'la chaleur', 'la température', 'le degré', 'la glace',
  'il pleut', 'il neige', 'nuageux', 'ensoleillé', 'pluvieux', 'humide', 'orageux',
];

/** a2.26's shopping vocabulary, seq 25 and unbuilt. `faire les courses` is an
 *  expression here and a topic there. */
/*  `la liste` was in the first draft of this list and came out again: it is an
 *  ordinary noun rather than a2.26's material, the opening scene is built around
 *  one, and a guard that fires on the lesson's own scenario is a guard the next
 *  author deletes. Invariants §1 records four ways that has already happened. */
export const SHOPPING_VOCAB: readonly string[] = [
  'le prix', 'la caisse', 'le panier', 'le chariot', 'la monnaie', 'le rayon',
  'le supermarché', "l'épicerie", 'le marché', 'combien', 'cher',
];

/** a2.13's modals, seq 7, the very next lesson on the trail. `Il faut faire la
 *  queue.` is the shape that would leak, and it is a published sentence in the
 *  corpus, so the temptation is real rather than theoretical. */
export const MODAL_SHAPE = /(^|[^a-zà-ÿ])(peux|peut|pouvons|pouvez|peuvent|veux|veut|voulons|voulez|veulent|dois|doit|devons|devez|doivent|faut)\s+(?:ne\s+|n['’]\s*)?[a-zà-ÿ]{3,}(?:er|ir|re|oir)(?![a-zà-ÿ])/i;

/** Reported speech: `dire` with a clause after it rather than a direct object.
 *
 *  NO UNIT AT ANY LEVEL OWNS THIS, and that finding is weak in exactly the way
 *  corrections §7 describes: it comes from searching all 76 unit bodies, which
 *  hold nine fields and no content manifest. The only hit was a2.24, which is
 *  Indirect Object Pronouns and is about `lui` and `leur` rather than about
 *  reported speech. So the boundary is stated WITHOUT a destination unit, which
 *  is the honest version, and the report says so.
 *
 *  Matches `dit que`, `disent qu'`, `dis que` and so on. `Il dit bonjour.` and
 *  every other authored row take a direct object and none of them matches. */
export const REPORTED_SPEECH_SHAPE = /(^|[^a-zà-ÿ])(dis|dit|disons|dites|disent)\s+(que|qu['’])/i;

/** The futur proche, a2.19 (seq 15). `Je vais faire les courses.` is a published
 *  sentence and the single most likely leak in this lesson, because half the
 *  expressions here are things somebody announces they are about to do. */
export const FUTUR_PROCHE_SHAPE = /(^|[^a-zà-ÿ])(vais|vas|va|allons|allez|vont)\s+(?:ne\s+|n['’]\s*)?[a-zà-ÿ]{3,}(?:er|ir|re|oir)(?![a-zà-ÿ])/i;

/** The passé composé, a2.05 (seq 16) and a2.21 (seq 18).
 *
 *  SHARPER HERE THAN IT WAS FOR a2.02, because `fait` is the past participle of
 *  `faire` as well as its il form: `j'ai fait le lit` is one word away from a
 *  screen this lesson already holds. So the participle list below leads with the
 *  three this lesson's own verbs would produce.
 *
 *  RESTRICTED TO THE ACCENTED PARTICIPLE in the regex, deliberately, and NOT
 *  using `\b` at either end. `\b` in JavaScript is ASCII-only, so `(?:é|és)\b`
 *  never fires on a real participle — a2.02 shipped that bug and found it by
 *  mutation-testing. Invariants §0 records the trap. */
export const PASSE_COMPOSE_SHAPE = /(^|[^a-zà-ÿ])(ai|as|a|avons|avez|ont|suis|est|sommes|sont)\s+[a-zà-ÿ]{2,}(é|és|ée|ées)(?![a-zà-ÿ])/i;

/** The irregular participles a learner might see leak, listed rather than
 *  matched because their endings are indistinguishable from ordinary English
 *  words. Checked as whole phrases, so `a fait` fires and the English word
 *  `fait` inside `parfait` does not. The first six are this lesson's own verbs. */
export const PASSE_COMPOSE_PHRASES: readonly string[] = [
  'ai fait', 'a fait', 'ont fait', 'avons fait', 'avez fait', 'as fait',
  'ai dit', 'a dit', 'ont dit', 'avons dit',
  'ai lu', 'a lu', 'ont lu',
  'est allé', 'sont allés', 'suis allé', 'est venu', 'a fini', 'a vendu',
];

/* ─── The thirty, as a claim ───────────────────────────────────────────────
 *
 * The `sub` promises "Irréguliers 2 : faire, dire, lire" and the canDo asks for
 * "the common expressions built on faire". The brief says the Den advertises
 * thirty and that padding to reach it is not allowed.
 *
 * THIRTY IS WHAT SHIPPED, and it was assembled rather than padded: 23 imported
 * out of 15 themes and 7 authored because they exist nowhere. The count is
 * DERIVED from the two lists in the lesson body, so an author who drops one
 * breaks the constant rather than only the prose.
 *
 * The brief's other claim about the number — that the `sub` says thirty — is
 * measured FALSE. The database `sub` is `Irréguliers 2 : faire, dire, lire` and
 * says nothing about a count, and neither does the `canDo`. Nothing in the
 * product advertises a number, so nothing had to be padded to meet one. The
 * thirty is this build's own target and it is met honestly. */
export const EXPRESSION_TARGET = 30;
