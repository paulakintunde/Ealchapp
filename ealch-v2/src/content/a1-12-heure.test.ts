// Guards a1.12.l1 "L'heure".
//
// This lesson has one failure mode that matters more than all the others, and
// it is not a crash: it is THE TWO CLOCKS DRIFTING APART ONTO SEPARATE SCREENS.
//
// French runs two time systems and they do not mix. A learner who meets both
// without ever seeing them adjacent takes the hours from one and the minutes
// from the other and produces « vingt heures et demie », which is the single
// most recognisable beginner sentence in a French station. A rewrite that keeps
// both systems, keeps a tidy table for each, and loses the surface that shows
// ONE MOMENT WRITTEN BOTH WAYS would read fine in review, ship, and leave the
// learner making exactly that error. So the assertion that earns its place here
// is "some production surface shows a spoken-clock time beside an official one
// on the same screen", and it is the one below worth the most.
//
// The second is quieter and higher-frequency: `heures` never disappears.
// English says "it's eight" and French cannot, and a learner who drops the noun
// has not said something wrong, they have stopped in the middle, so nothing in
// a conversation ever corrects it. Every authored surface is checked for it.
//
// Everything else guards the ways this project has already shipped content that
// was authored, schema-valid, and drawn by nothing.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here, and the parity tests at the bottom fail when they drift, which is the
// failure mode that has twice cost this project real work.
//
// Counts are DERIVED wherever a count is asserted. A hardcoded number fails on
// itself the first time content legitimately changes, and the fix is then to
// edit the test, which is how a test comes to certify a bug. The exceptions are
// the twelve hours, the four quarter phrases and the six triggers, and all
// three are deliberate: those numbers are the SHAPE of the lesson rather than a
// measurement of it, and a later trim that quietly drops one is exactly what
// this file exists to stop.
//
// Nothing here reimplements app logic. `fold`, `matchesAccept`, `dicteeMode`,
// `wordDecoys`, `glossKeys`, `segmentSentence`, `hasPlainNasalFor` and
// `validateDensity` are all imported from the modules the app itself runs. An
// earlier version of a1.01's test inlined its own glossary lookup, copied the
// version that was already broken, and passed while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { canonicalJson, quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity, formatDensity } from './density.logic.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode, wordDecoys } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; lessonIds: string[]; themes?: string[]; canDo?: string; sub?: string; title?: string }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; ipa?: string; drills: string[]; cardType?: string; prompt?: string }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.12.l1');
// Before the batch and the merge have run, the seed has no a1.12.l1 and every
// seed-derived assertion below would fail for a reason that is not a content
// bug. Skip cleanly and let the source-derived half still run.
const noSeed = !L;

const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_TRANCHES: string[][] = [];
let SRC_TWELVE: readonly string[] = [];
let SRC_HOUR_IDS: string[] = [];
let SRC_QUARTERS: readonly string[] = [];
let SRC_QUARTER_ARTICLE = '';
let SRC_OFFICIAL_HOURS: readonly string[] = [];
let SRC_PAIRS: [string, string][] = [];
let SRC_CHUNKS: string[] = [];
let SRC_AUTHORED: { id: string; fr: string; en: string; theme: string; kind: string; clock: string; chunk?: boolean; pairWith?: string; drills: string[] }[] = [];
let SRC_RESPELL: Record<string, { fr: string; respell: string; ipa: string; en: string }> = {};
let SRC_REPAIRS: { id: string; fr: string; from: string; to: string }[] = [];
let SRC_IMPORTED: { id: string; fr: string; en: string; theme: string; kind: string; level: string; drills: string[] }[] = [];
let SRC_FROZEN: readonly string[] = [];
try {
  const lesson = await import('../../../ealch-admin/scripts/data/heure-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/heure-corpus.ts');
  SRC = lesson.HEURE_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_SPEAK = lesson.HEURE_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.HEURE_DICTATION_IDS as string[];
  SRC_TRANCHES = lesson.HEURE_TRANCHES as string[][];
  SRC_TWELVE = corpus.THE_TWELVE as readonly string[];
  SRC_HOUR_IDS = corpus.HOUR_IDS as string[];
  SRC_QUARTERS = corpus.QUARTER_PHRASES as readonly string[];
  SRC_QUARTER_ARTICLE = corpus.QUARTER_WITH_ARTICLE as string;
  SRC_OFFICIAL_HOURS = corpus.OFFICIAL_HOURS as readonly string[];
  SRC_PAIRS = corpus.CLOCK_PAIRS as [string, string][];
  SRC_CHUNKS = corpus.CHUNK_IDS as string[];
  SRC_AUTHORED = corpus.AUTHORED as typeof SRC_AUTHORED;
  SRC_RESPELL = corpus.RESPELL as typeof SRC_RESPELL;
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as typeof SRC_REPAIRS;
  SRC_IMPORTED = corpus.IMPORTED as typeof SRC_IMPORTED;
  SRC_FROZEN = corpus.FROZEN_QUESTIONS as readonly string[];
} catch {
  // Not available; the source-derived tests below no-op.
}
const noSrc = !SRC;
const noBoth = noSeed || noSrc;

/** The twelve hours, as a literal. One of three hardcoded sets in the file and
 *  deliberate: twelve is the SHAPE of a clock rather than a measurement of the
 *  content, and a lesson that quietly taught eleven is what this guards. */
const HOURS = [
  'une heure', 'deux heures', 'trois heures', 'quatre heures', 'cinq heures', 'six heures',
  'sept heures', 'huit heures', 'neuf heures', 'dix heures', 'onze heures', 'douze heures',
] as const;

/** The four ways to bend an hour, likewise literal, and the one that carries an
 *  article. Deriving the asymmetry from the lesson would be circular: the whole
 *  point is that a later edit must not be able to regularise it. */
const QUARTERS = ['et quart', 'et demie', 'moins le quart', 'moins dix'] as const;
const WITH_ARTICLE = 'moins le quart';

/** The hours that exist only on the printed clock. This lesson must never bend
 *  one of them with a spoken-clock phrase. */
const OFFICIAL = [
  'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf',
  'vingt', 'vingt et une', 'vingt-deux', 'vingt-trois',
] as const;

/** What this lesson must NOT teach, literal because deriving it from the lesson
 *  would be circular. `heure-et-date` is a clock AND calendar theme, so a1.08's
 *  and a1.09's vocabulary sits one tap from every card this lesson binds to. */
const DAYS = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'] as const;
const MONTHS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
] as const;
const SEASONS = ['le printemps', "l'été", "l'automne", "l'hiver"] as const;
const WEATHER = ['il fait beau', 'il pleut', 'il neige', 'il fait froid', 'il fait chaud'] as const;
const REFLEXIVE = ['se réveiller', 'se lever', 'se coucher', 'je me réveille', 'je me lève', 'je me couche'] as const;

/** Every authored string in a value. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

const sectionIds = () => L!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
const sec = (id: string) => L!.sections.find((s) => (s as { id?: string }).id === id);
const theQuiz = () =>
  L!.sections.find((s): s is Extract<LessonSection, { type: 'quiz' }> => s.type === 'quiz')!;

/** The strings a LEARNER reads: section bodies, sheet bodies and glossary
 *  entries, with the authoring apparatus (ids, types, item ids, recording ids)
 *  left out.
 *
 *  Used by the checks that ask whether something was TAUGHT. Running those over
 *  every string in the document would fire on legitimate authoring metadata, and
 *  a test that fires on correct content is a test the next author deletes. The
 *  reading passage is excluded from the EXCLUSION checks separately below, for
 *  the reason the brief gives: a day inside a passage is real context. */
function productionStrings(includeReading = true): string[] {
  const skip = new Set(['id', 'type', 'render', 'layer', 'size', 'itemId', 'itemIds', 'items', 'ref', 'recordingId', 'sheetId', 'terms', 'clipIds', 'detectOn', 'drill', 'retest', 'desc', 'ipa', 'audioRef', 'imageRef']);
  const out: string[] = [];
  const walk = (v: unknown) => {
    if (typeof v === 'string') out.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') {
      for (const [k, val] of Object.entries(v)) {
        if (skip.has(k)) continue;
        walk(val);
      }
    }
  };
  walk(includeReading ? L!.sections : L!.sections.filter((s) => s.type !== 'reading'));
  walk(L!.sheets ?? []);
  walk(L!.terms ?? {});
  walk(L!.drills ?? []);
  return out;
}

/** Objects a learner reads, each carrying the flag "this object exists to hold
 *  a wrong answer".
 *
 *  Every error this lesson exists to stop has to APPEAR in it: a commonErrors
 *  card shows the wrong version, a quiz distractor IS the wrong version, and a
 *  contrast card puts the wrong beside the right. So the exclusion checks below
 *  cannot be written against raw strings, which is what a1.08 found when its own
 *  check reported the `wrong` half of a commonErrors card as content taught
 *  unframed.
 *
 *  a1.08's fix was to exclude those slots. This goes one step further and reads
 *  the framing STRUCTURALLY, from key names rather than from prose, because
 *  "exclude any string whose text contains the word wrong" is a keyword search
 *  that a rewrite defeats and that would pass a genuinely mistaught sentence
 *  happening to contain "not". */
type Surface = { obj: Record<string, unknown>; framed: boolean };
const CORRECTS = ['right', 'accept', 'answer', 'back', 'correct'];
function readSurfaces(): Surface[] {
  const out: Surface[] = [];
  const walk = (v: unknown, inherited: boolean) => {
    if (Array.isArray(v)) { v.forEach((x) => walk(x, inherited)); return; }
    if (!v || typeof v !== 'object') return;
    const o = v as Record<string, unknown>;
    const self = inherited || o.outcome === 'breaks' || CORRECTS.some((k) => o[k] !== undefined);
    if (Object.values(o).some((x) => typeof x === 'string')) out.push({ obj: o, framed: self });
    for (const [k, x] of Object.entries(o)) walk(x, self || k === 'wrong');
  };
  walk(L!.sections.filter((s) => s.type !== 'reading'), false);
  walk(L!.drills ?? [], false);
  walk(L!.terms ?? {}, false);
  return out;
}

/** Surfaces carrying a shape the lesson must never TEACH: something in the
 *  object matches `bad`, the object is not structurally an error slot, and
 *  nothing in it corrects the error in words. */
function unframed(bad: RegExp, rightBeside: RegExp): string[] {
  return readSurfaces()
    .filter(({ framed }) => !framed)
    .filter(({ obj }) => Object.values(obj).some((x) => typeof x === 'string' && bad.test(x)))
    .filter(({ obj }) => !rightBeside.test(JSON.stringify(obj)))
    .map(({ obj }) => Object.values(obj).find((x) => typeof x === 'string' && bad.test(x)) as string);
}

const NUMWORD = 'une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze';
const HOURWORD = `${NUMWORD}|midi|minuit`;

/* ─── The lesson exists and is wired ───────────────────────────────────────── */

test('a1.12.l1 exists in the seed and is well formed', () => {
  if (noSeed) return;
  strictEqual(validateLesson(L!, L!.id).length, 0, 'schema issues on a1.12.l1');
  strictEqual(L!.unitId, 'a1.12');
  strictEqual(L!.level, 'a1');
  ok(L!.sections.length > 0, 'the lesson has no sections');
});

test('the a1.12 unit links the lesson, so the Den can reach it', () => {
  if (noSeed) return;
  const unit = seed.units.find((u) => u.id === 'a1.12');
  ok(unit, 'the a1.12 unit is missing from the seed');
  ok(unit!.lessonIds.includes('a1.12.l1'), 'the unit does not name its lesson, so nothing links to it');
});

test('the unit keeps the promise the Den advertises', () => {
  if (noSeed) return;
  const unit = seed.units.find((u) => u.id === 'a1.12')!;
  strictEqual(unit.title, 'Telling Time');
  strictEqual(unit.sub, "L'heure");
  strictEqual(unit.canDo, 'Can ask and tell the time and make a simple appointment');
});

test('the eyebrow the header draws agrees with the one stored on the lesson', () => {
  if (noSeed) return;
  const unit = seed.units.find((u) => u.id === 'a1.12')!;
  // missions.ts computes the eyebrow from unit.seq at render time. a1.03 shipped
  // LEÇON 03 at seq 5 and the header above it drew LEÇON 05.
  strictEqual(L!.tag, `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`);
});

test('the unit is bound to a theme that exists and holds something', () => {
  if (noSeed) return;
  const unit = seed.units.find((u) => u.id === 'a1.12')!;
  const themes = unit.themes ?? [];
  ok(themes.length > 0, 'the unit has no theme binding at all');
  for (const t of themes) {
    const n = seed.items.filter((i) => i.theme === t).length;
    ok(n > 0, `unit a1.12 is bound to theme "${t}", which holds 0 items, so the chip leads nowhere`);
  }
  // The brief offered `routines`, a new `heure`, or nothing. `heure-et-date`
  // already existed and is what this lesson took.
  ok(themes.includes('heure-et-date'), `expected the clock theme, got ${JSON.stringify(themes)}`);
});

/* ─── The spine, and the acts ──────────────────────────────────────────────── */

test('the journey opens on a scene and closes quiz then roundup', () => {
  if (noSeed) return;
  strictEqual(L!.sections[0].type, 'scene', 'mission 1 is not a scene');
  const types = L!.sections.map((s) => s.type);
  strictEqual(types[types.length - 1], 'roundup');
  strictEqual(types[types.length - 2], 'quiz');
  ok(types.indexOf('goals') === 1, 'the goals card is not mission 2');
});

test('exactly one quiz section, because the pager renders only the first', () => {
  if (noSeed) return;
  // lessonPager.logic.ts strips every quiz in contentSections() and appends
  // exactly ONE, resolved with sections.find(). a1.01 shipped two and its
  // 12-question final exam was never reachable by any learner.
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1);
});

test('every act names sections that exist, and every section belongs to exactly one act', () => {
  if (noSeed) return;
  const ids = sectionIds();
  const claimed = new Map<string, string>();
  for (const act of L!.acts ?? []) {
    for (const id of act.sections) {
      ok(ids.includes(id), `act ${act.id} names section "${id}", which does not exist`);
      ok(!claimed.has(id), `section "${id}" is claimed by ${claimed.get(id)} and by ${act.id}`);
      claimed.set(id, act.id);
    }
  }
  const orphans = ids.filter((id) => !claimed.has(id));
  deepStrictEqual(orphans, [], 'section(s) in no act at all');
});

test('the act arc runs frame, hours, quarters, clocks, asking, production, exam', () => {
  if (noSeed) return;
  // Seven acts, and the ORDER is the argument: the frame before the hours, the
  // hours before what bends them, both clocks before asking, and production
  // before the exam. A rebuild that moved the register act after production
  // would test the rule before showing it.
  const acts = L!.acts ?? [];
  ok(acts.length >= 6 && acts.length <= 7, `expected six or seven acts, found ${acts.length}`);
  const firstOf = (id: string) => acts.findIndex((a) => a.sections.includes(id));
  const quizAct = acts.findIndex((a) => a.sections.some((s) => sec(s)?.type === 'quiz'));
  const clockAct = firstOf(L!.sections.find((s) =>
    s.type === 'tapTable' && strings(s).some((x) => /vingt heures trente/.test(x)))
    ? (L!.sections.find((s) => s.type === 'tapTable' && strings(s).some((x) => /vingt heures trente/.test(x))) as { id: string }).id
    : '');
  ok(quizAct === acts.length - 1, 'the exam is not in the final act');
  ok(clockAct > 0 && clockAct < quizAct, 'the two-clock mission does not sit between the teaching and the exam');
});

test('the journey is multimodal: it reads, listens, speaks, writes and role-plays', () => {
  if (noSeed) return;
  const types = new Set(L!.sections.map((s) => s.type));
  for (const t of ['scene', 'goals', 'cardDeck', 'tapTable', 'groupDrill', 'listening',
    'commonErrors', 'reading', 'vocabThemes', 'flashcards', 'dictation', 'practice',
    'scenario', 'reviewDeck', 'progressCheck', 'quiz', 'roundup']) {
    ok(types.has(t as LessonSection['type']), `the journey has no ${t} mission`);
  }
});

test('every mission carries its French subtitle', () => {
  if (noSeed) return;
  const missing = L!.sections
    .filter((s) => !(s as { frSub?: string }).frSub)
    .map((s) => (s as { id?: string }).id ?? s.type);
  deepStrictEqual(missing, [], 'mission(s) with no frSub, which the missions page shows');
});

/* ─── The reframe ──────────────────────────────────────────────────────────── */

test('the reframe appears verbatim exactly as often as it was authored', () => {
  if (noBoth) return;
  const inSeed = strings(L!).filter((s) => s.includes(SRC_REFRAME)).length;
  const inSrc = strings(SRC!).filter((s) => s.includes(SRC_REFRAME)).length;
  strictEqual(inSeed, inSrc, 'the seed and the source carry the reframe a different number of times');
  // The density validator requires three. Fewer than that and it is a sentence
  // rather than a spine.
  ok(inSeed >= 3, `the reframe appears ${inSeed} times, and three is the floor`);
});

test('the reframe splits the canDo, naming both il est and à', () => {
  if (noSrc) return;
  // The canDo has two clauses and the reframe is what keeps them apart. A
  // reframe that named only one half would leave the welding error unaddressed.
  ok(/il est/i.test(SRC_REFRAME), `the reframe does not name il est: "${SRC_REFRAME}"`);
  // NOT /\bà\b/. JavaScript's \b is ASCII-only, so it never matches beside an
  // accented letter and the check silently returns false on correct content.
  // The brief warns about exactly this trap and this test walked into it anyway:
  // /\bà\b/ tested FALSE against "À books it". The boundary is written as
  // whitespace or a string edge instead, which is what \b was standing in for.
  ok(/(^|[\s(«])[àÀ]([\s.,;:)»]|$)/u.test(SRC_REFRAME), `the reframe does not name à: "${SRC_REFRAME}"`);
});

/* ─── The twelve hours ─────────────────────────────────────────────────────── */

test('every hour from one to twelve is taught, each by name', () => {
  if (noSeed) return;
  const said = productionStrings().join('  ');
  const missing = HOURS.filter((h) => !said.includes(h));
  deepStrictEqual(missing, [], 'hour(s) the lesson never puts on a screen');
});

test('midi and minuit are taught, and taught as the exception to the noun rule', () => {
  if (noSeed) return;
  const said = productionStrings().join('  ');
  ok(said.includes('midi'), 'midi is never taught');
  ok(said.includes('minuit'), 'minuit is never taught');
  // Not merely present: the lesson has to SAY that they take no noun, or they
  // are two more vocabulary items rather than the exception act 2 promises.
  ok(
    productionStrings().some((s) => /midi/i.test(s) && /no heures|takes neither|no article|takes no/i.test(s)),
    'nothing says that midi and minuit take no noun and no article',
  );
});

test('the twelve hours resolve to real corpus rows carrying voiceflash', () => {
  if (noBoth) return;
  strictEqual(SRC_HOUR_IDS.length, HOURS.length, 'the authored hour set is not twelve');
  for (const id of SRC_HOUR_IDS) {
    const row = ITEMS.get(id);
    ok(row, `hour headword ${id} is not in the seed`);
    ok(row!.drills.includes('voiceflash'), `${id} carries no voiceflash, so the mic cannot score it`);
    ok(row!.drills.includes('flashcard'), `${id} carries no flashcard, which fails flashhub-coverage`);
  }
});

test('the twelve are drilled by the mic, because the join is the content', () => {
  if (noSrc) return;
  // The whole reason those twelve rows were authored is that a sentence drill
  // scores the sentence. If the speak mission stopped naming them the lesson
  // would still teach the words and would stop teaching the liaison.
  const missing = SRC_HOUR_IDS.filter((id) => !SRC_SPEAK.includes(id));
  deepStrictEqual(missing, [], 'hour(s) never drilled by the mic');
});

test('neuf heures is taught with its exceptional liaison, by name', () => {
  if (noSeed) return;
  // The f becomes a v before heures and before ans and nowhere else in the
  // language. It is the single most valuable pronunciation card in the lesson
  // and the corpus had no headword for it before this lesson.
  const said = productionStrings();
  ok(said.some((s) => s.includes('neuf heures')), 'neuf heures is never taught');
  ok(
    said.some((s) => /neuf/i.test(s) && /\bv\b|becomes a v|said as a v|changes a letter/i.test(s)),
    'nothing says what happens to the f of neuf before heures',
  );
});

test('the hour respellings show the link without the tie character', () => {
  if (noSrc) return;
  // U+203F renders as a low underscore on a Pixel 6 and 255 shipped rows carry
  // it in `respell`. This lesson authors none: the liaison consonant moves onto
  // the front of the next syllable instead, which is what the house's own
  // `EEL EH DUH ZUHR` already does.
  for (const h of HOURS) {
    const d = SRC_RESPELL[h];
    ok(d, `no respelling authored for "${h}"`);
    ok(!d.respell.includes('‿'), `${h} carries the tie character: ${d.respell}`);
  }
});

/* ─── heures never disappears ──────────────────────────────────────────────── */

test('no authored surface drops the noun after an hour', () => {
  if (noSeed) return;
  // The highest-frequency error in the lesson. « il est huit » may appear only
  // where the object it sits in marks it as the error.
  //
  // Numbers only: « Il est midi » is CORRECT and is on four screens, because
  // midi and minuit are the two hours that take no noun. A check that did not
  // separate them would report the lesson's own exception as its own error.
  const bare = unframed(
    new RegExp(`il est (?:${NUMWORD})(?!\\s*(?:heures?|heure|et|moins))\\b`, 'i'),
    /\bnot\b|instead of|rather than|unfinished/i,
  );
  deepStrictEqual(bare, [], 'surface(s) teach an hour with no noun behind it');
});

test('the lesson teaches that the noun is compulsory, rather than only using it', () => {
  if (noSeed) return;
  ok(
    productionStrings().some((s) => /heures/i.test(s) && /compulsory|never leaves|cannot|throws (the noun )?away|unfinished/i.test(s)),
    'nothing tells the learner the noun cannot be left off',
  );
});

test('the singular and the plural of the noun are both taught', () => {
  if (noSeed) return;
  const said = productionStrings().join('  ');
  ok(/une heure/.test(said), 'the singular hour is never shown');
  ok(said.includes('deux heures') || said.includes('huit heures'), 'no plural hour is shown');
  ok(
    productionStrings().some((s) => /singular/i.test(s) && /une heure|one/i.test(s)),
    'nothing says that une heure is the only singular one',
  );
});

test('the dictee asks the question free text cannot: is heures written at all', () => {
  if (noBoth) return;
  // `fold()` strips ALL whitespace, so « huit heures » and « huitheures » are
  // one string and the SPACE is untestable. The dictee's word mode is different:
  // the bank is the sentence's own words plus two decoys, so `heures` is a tile
  // the learner has to place and a line rebuilt without it is incomplete.
  const wordMode = SRC_DICTATION
    .map((id) => ITEMS.get(id))
    .filter((it): it is NonNullable<typeof it> => !!it)
    .filter((it) => dicteeMode(it.fr) === 'words' && /\bheures?\b/i.test(it.fr));
  ok(wordMode.length >= 3, `only ${wordMode.length} dictee line(s) put "heures" in a word bank`);
});

test('the dictee hands the learner the article it must refuse', () => {
  if (noBoth) return;
  // `le` is the article belonging to « moins le quart » and to nothing else in
  // this lesson, so a word-mode target that offers it as a decoy is asking the
  // act-3 question in the one place a learner has to answer by producing.
  const leDecoy = SRC_DICTATION
    .map((id) => ITEMS.get(id))
    .filter((it): it is NonNullable<typeof it> => !!it)
    .filter((it) => dicteeMode(it.fr) === 'words' && wordDecoys(it.fr).includes('le'));
  ok(leDecoy.length > 0, 'no dictee target offers "le" as a decoy');
});

/* ─── The four quarter phrases, and the article asymmetry ──────────────────── */

test('all four quarter phrases are taught', () => {
  if (noSeed) return;
  const said = productionStrings().join('  ');
  const missing = QUARTERS.filter((q) => !said.includes(q));
  deepStrictEqual(missing, [], 'quarter phrase(s) never taught');
});

test('moins le quart keeps its article and et quart does not', () => {
  if (noSrc) return;
  // The asymmetry is arbitrary and it is the single most tempting tidy-up in
  // the lesson. Asserted against the authored constants rather than against
  // prose, so a later edit that regularised either one fails here.
  strictEqual(SRC_QUARTER_ARTICLE, WITH_ARTICLE);
  ok(SRC_QUARTERS.includes(WITH_ARTICLE), 'the article-carrying phrase is not one of the four');
  for (const q of SRC_QUARTERS) {
    if (q === WITH_ARTICLE) ok(/\ble\b/.test(q), `"${q}" should carry its article`);
    else ok(!/\ble\b/.test(q), `"${q}" has gained an article it should not have`);
  }
  deepStrictEqual([...SRC_QUARTERS].sort(), [...QUARTERS].sort(), 'the four phrases have changed');
});

test('the lesson says out loud that only one of the four carries an article', () => {
  if (noSeed) return;
  ok(
    productionStrings().some((s) => /only one of the four|the only one of the four/i.test(s)),
    'nothing names the asymmetry, so a learner meets it four times and never as a rule',
  );
});

test('moins quart never appears unframed', () => {
  if (noSeed) return;
  // What a learner who has generalised from et quart writes. It may appear only
  // beside the correct form or in a slot whose job is to hold a wrong answer.
  const loose = unframed(/moins quart/i, /moins le quart/i);
  deepStrictEqual(loose, [], '"moins quart" is taught somewhere as though it were correct');
});

/* ─── The two clocks ───────────────────────────────────────────────────────── */

test('at least one section shows a spoken-clock time and an official one TOGETHER', () => {
  if (noSeed) return;
  // THE assertion of this file. Split across screens the two systems merge, and
  // the merged form is the error act 4 exists to prevent. This is the surface
  // that makes the register rule visible rather than merely stated.
  const bendsSpoken = /\b(?:une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze) heures? (?:et (?:quart|demie)|moins)/i;
  const officialBare = new RegExp(`\\b(?:${OFFICIAL.join('|')}) heures?(?: (?:dix|quinze|trente|quarante|quarante-cinq|cinquante))?\\b`, 'i');
  const both = L!.sections.filter((s) => {
    const all = strings(s);
    return all.some((x) => bendsSpoken.test(x)) && all.some((x) => officialBare.test(x));
  });
  ok(both.length > 0, 'no single section shows both clock systems, so a learner never sees them adjacent');
});

test('the two-clock surface shows the SAME moment on both, not two unrelated times', () => {
  if (noBoth) return;
  // Four authored sentences, each the conversational half of a shipped
  // twenty-four hour one. If a pair were half-deleted the table would put two
  // unrelated sentences under a heading claiming they are the same moment.
  strictEqual(SRC_PAIRS.length, 4, 'the register pair set has changed size');
  for (const [spoken, official] of SRC_PAIRS) {
    const a = ITEMS.get(spoken);
    const b = ITEMS.get(official);
    ok(a, `register pair names ${spoken}, which is not in the seed`);
    ok(b, `register pair names twin ${official}, which is not in the seed`);
    // Same event: the two sentences share their opening, and only the time moved.
    const head = (fr: string) => fr.split(/\s+à\s+|\s+est\s+à\s+/)[0].trim();
    strictEqual(head(a!.fr), head(b!.fr), `the halves of ${spoken}/${official} are not the same sentence`);
  }
});

test('no authored surface mixes the two clock systems', () => {
  if (noSeed) return;
  // « vingt heures et demie » takes half of each and is the error the whole act
  // exists to prevent. Authoring one anywhere except in an error slot would
  // teach it.
  const MIXED = new RegExp(`\\b(?:${OFFICIAL.join('|')})\\s+heures?\\s+(?:et\\s+(?:quart|demie?)|moins)\\b`, 'i');
  const hybrid = unframed(MIXED, /never|takes half|half of each|does not|do not/i);
  deepStrictEqual(hybrid, [], 'surface(s) mix an official hour with a spoken-clock phrase');
});

test('the lesson states that the systems do not mix', () => {
  if (noSeed) return;
  ok(
    productionStrings().some((s) => /do not mix|never (?:borrow|mix)|takes half of each|half of each clock/i.test(s)),
    'the register rule is demonstrated and never stated',
  );
});

test('the official clock is taught with plain-number minutes', () => {
  if (noSeed) return;
  const said = productionStrings();
  ok(said.some((s) => /vingt heures trente/i.test(s)), 'the printed clock is never shown with minutes');
  ok(
    said.some((s) => /plain number/i.test(s)),
    'nothing says the printed clock says its minutes as a plain number',
  );
});

/* ─── demi, which is inaudible ─────────────────────────────────────────────── */

test('demi agreement is taught both ways, with midi et demi named', () => {
  if (noSeed) return;
  const said = productionStrings().join('  ');
  ok(said.includes('et demie'), 'the feminine agreement is never shown');
  ok(said.includes('midi et demi'), 'midi et demi is never shown, and it is the one that looks feminine');
  ok(
    productionStrings().some((s) => /demi/i.test(s) && /masculine|no e|loses its e|without the e/i.test(s)),
    'nothing explains why the e comes off after midi',
  );
});

test('midi et demie never appears as though it were correct', () => {
  if (noSeed) return;
  const wrong = unframed(/\bmidi et demie\b/i, /\bnot\b|instead of|rather than|masculine/i);
  deepStrictEqual(wrong, [], 'the wrong agreement is taught somewhere as correct');
});

test('the agreement is shown once away from the clock, so it reads as a rule', () => {
  if (noSeed) return;
  // « six ans et demi » is the same masculine agreement outside the clock. It is
  // what makes this ordinary agreement rather than a quirk of telling the time.
  ok(
    productionStrings().some((s) => /ans et demi/i.test(s)),
    'the agreement is only ever shown on the clock, so it looks like a clock rule',
  );
});

/* ─── il est against à ─────────────────────────────────────────────────────── */

test('il est and à are both taught, and contrasted', () => {
  if (noSeed) return;
  const said = productionStrings();
  ok(said.some((s) => /il est/i.test(s)), 'the telling frame is never taught');
  // Same ASCII-\b hazard as on the reframe: this pattern opens on à, so the
  // boundary is whitespace or a string edge rather than \b.
  ok(
    said.some((s) => /(^|[\s(«])[àÀ]\s+(?:une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|quatorze|midi|minuit)\s*heures?/u.test(s)),
    'the booking frame is never taught',
  );
  // Contrasted, not merely both present: some surface has to hold the two of
  // them together, or a learner meets two topics rather than one decision.
  const together = L!.sections.filter((s) => {
    const all = strings(s);
    return all.some((x) => /il est/i.test(x))
      && all.some((x) => /(^|[\s(«])[àÀ](\s|$)/u.test(x) && /heures?|midi|minuit/i.test(x));
  });
  ok(together.length > 0, 'no surface holds the telling frame and the booking frame together');
});

test('no surface welds il est to à', () => {
  if (noSeed) return;
  // « il est à huit heures » is the reframe's own error and the one the opening
  // scene turns on. It may appear only where the object marks it as wrong.
  const welded = unframed(new RegExp(`il est à\\s+(?:${HOURWORD})`, 'i'), /\bnot\b|instead of|rather than/i);
  deepStrictEqual(welded, [], 'surface(s) weld the telling frame to the booking one');
});

test('the opening scene turns on the reframe rather than on vocabulary', () => {
  if (noSeed) return;
  const scene = L!.sections[0];
  ok(scene.type === 'scene', 'mission 1 is not a scene');
  const choice = scene.type === 'scene' ? scene.beats.find((b) => b.kind === 'choice') : undefined;
  ok(choice, 'the scene has no choice beat, so nothing is committed to');
  if (choice && choice.kind === 'choice') {
    strictEqual(choice.options.filter((o) => o.outcome === 'breaks').length, 1, 'exactly one option must carry the failing instinct');
    strictEqual(choice.options.filter((o) => o.outcome === 'works').length, 1, 'exactly one option must work');
    // Both options plausible means they differ by exactly ONE small word, not
    // by a word the learner has never met.
    //
    // Compared as a MULTISET of words. Neither a substring subtraction nor an
    // index-by-index walk works, because the extra word sits in the middle:
    // « Il est midi » is not a substring of « Il est à midi », and comparing by
    // position reports every word after the insertion as different too.
    const words = (fr: string) => fr.replace(/[.?!]/gu, '').trim().split(/\s+/u);
    const [a, b] = choice.options.map((o) => words(o.fr));
    const [shorter, longer] = a.length <= b.length ? [a, b] : [b, a];
    strictEqual(longer.length - shorter.length, 1,
      `the scene's two options differ by ${longer.length - shorter.length} words, and exactly one is the whole teaching`);
    const pool = [...shorter];
    const extra = longer.filter((w) => {
      const at = pool.indexOf(w);
      if (at === -1) return true;
      pool.splice(at, 1);
      return false;
    });
    strictEqual(extra.length, 1, `the two options differ by ${extra.length} words: "${a.join(' ')}" vs "${b.join(' ')}"`);
    ok(extra[0].length <= 3, `the word between the two options is "${extra[0]}", which is not the small word this lesson turns on`);
  }
  const brk = scene.type === 'scene' ? scene.beats.find((b) => b.kind === 'break') : undefined;
  ok(brk, 'the scene has no break beat, so the choice is never explained');
});

/* ─── Asking, which needs grammar seven units away ─────────────────────────── */

test('both question forms are taught, and the frozen one is called frozen', () => {
  if (noSeed) return;
  const said = productionStrings();
  ok(said.some((s) => /quelle heure est-il/i.test(s)), 'the ordinary question is never taught');
  ok(said.some((s) => /vous avez l'heure/i.test(s)), 'the transparent question is never taught');
  ok(
    said.some((s) => /whole|memoris|frozen|no parts|single piece/i.test(s) && /quelle heure|four words|chunk/i.test(s)),
    'nothing says that quelle heure est-il is taken whole rather than built',
  );
});

test('no inversion is taught as a pattern, only the one frozen chunk', () => {
  if (noSeed) return;
  // a1.19 owns est-ce que and a1.20 owns inversion. Both carry lessonIds: [] and
  // sit seven units ahead. Teaching either here would give those lessons away
  // and would rest on machinery the learner has not been handed.
  const found = productionStrings()
    .flatMap((s) => s.match(/\b\w+-(?:t-)?(?:il|elle|vous|tu|on|ils|elles)\b/gi) ?? [])
    .filter((m) => !/^est-il$/i.test(m) && !/^rendez-vous$/i.test(m));
  deepStrictEqual([...new Set(found)], [], 'inversion appears outside the frozen chunk');
});

test('the two frozen chunks are the only ones the lesson claims', () => {
  if (noSrc) return;
  strictEqual(SRC_FROZEN.length, 2, 'the frozen-question set has changed size');
  ok(SRC_FROZEN.includes('quelle heure est-il'));
  ok(SRC_FROZEN.includes("vous avez l'heure"));
});

/* ─── Respelling ───────────────────────────────────────────────────────────── */

test('every respelling this lesson displays follows the nasal convention', () => {
  if (noSrc) return;
  // The REAL function, imported rather than reimplemented. `un`, `vingt`,
  // `trente`, `quarante`, `cinquante` and `moins` are the words this catches.
  const bad = Object.values(SRC_RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  deepStrictEqual(bad.map((d) => `${d.fr} ${d.respell}`), [], 'respelling(s) close a nasal with a plain n or m');
});

test('the words carrying a nasal use the superscript, which the shared checker cannot see', () => {
  if (noSrc) return;
  // hasPlainNasalFor requires the n or m to END a token, so a word-internal
  // nasal (cinq, vingt, moins before another word) passes it and is still wrong.
  // a1.08 found the same hole on dimanche. Checked by name.
  const NASAL = ['cinq heures', 'onze heures', 'moins le quart', 'moins dix', 'en retard', 'vingt heures', 'vingt heures trente'];
  const missing = NASAL.filter((w) => SRC_RESPELL[w] && !SRC_RESPELL[w].respell.includes('ⁿ'));
  deepStrictEqual(missing, [], 'respelling(s) carrying a nasal vowel with no superscript n');
});

test('the respelling of heure is internally consistent across everything authored', () => {
  if (noSrc) return;
  // The brief asked for one of EUR or UHR to be picked and used everywhere. This
  // lesson picked UHR, because that is what the nineteen-phrase time block it
  // reuses already uses and what `l'heure` itself carries. A single stray EUR
  // would undo the decision the corpus header documents.
  const withHeure = Object.values(SRC_RESPELL).filter((d) => /\bheures?\b/i.test(d.fr) || /^l'heure$/i.test(d.fr));
  ok(withHeure.length >= 12, 'fewer respellings carry heure than there are hours');
  const strays = withHeure.filter((d) => !/UHR/i.test(d.respell));
  deepStrictEqual(strays.map((d) => `${d.fr} ${d.respell}`), [], 'respelling(s) of heure not using UHR');
  const eur = withHeure.filter((d) => /EUR/i.test(d.respell.replace(/UHR/gi, '')));
  deepStrictEqual(eur.map((d) => `${d.fr} ${d.respell}`), [], 'a second spelling of the same vowel has crept back in');
});

test('the respelling repairs really are repairs, and match what the lesson displays', () => {
  if (noSrc) return;
  for (const r of SRC_REPAIRS) {
    ok(r.from !== r.to, `${r.id} claims to repair a respelling to the value it already had`);
    const display = Object.values(SRC_RESPELL).find((d) => d.fr === r.fr);
    ok(display, `${r.id} repairs "${r.fr}", which this lesson does not display`);
    strictEqual(r.to, display!.respell.replace(/^\[|\]$/g, ''), `${r.id} repairs to a value the lesson does not itself show`);
  }
});

test('the seed carries the repaired respellings, not the broken ones', () => {
  if (noBoth) return;
  for (const r of SRC_REPAIRS) {
    const row = ITEMS.get(r.id);
    ok(row, `${r.id} is not in the seed`);
    strictEqual(row!.respell, r.to, `${r.id} still carries the broken respelling in the seed`);
  }
});

test('no authored string carries the tie character that renders as an underscore', () => {
  if (noBoth) return;
  // U+203F draws as a low underscore on a Pixel 6. This lesson adds none.
  const inLesson = strings(L!).filter((s) => s.includes('‿'));
  deepStrictEqual(inLesson, [], 'the lesson body carries the tie character');
  const inAuthored = SRC_AUTHORED.filter((r) => JSON.stringify(r).includes('‿'));
  deepStrictEqual(inAuthored.map((r) => r.id), [], 'authored corpus row(s) carry the tie character');
});

/* ─── What this lesson must not teach ──────────────────────────────────────── */

test('no day is taught, so a1.08 keeps its lesson', () => {
  if (noSeed) return;
  // Written against production surfaces rather than every string: a day inside
  // the reading passage is legitimate context and must not fail.
  const said = productionStrings(false);
  const taught = DAYS.filter((d) => said.some((s) => new RegExp(`\\b${d}\\b`, 'i').test(s)));
  deepStrictEqual(taught, [], 'day(s) taught, which belong to a1.08');
});

test('no month is taught, so a1.09 keeps its lesson', () => {
  if (noSeed) return;
  // Case-sensitive: French months are always lowercase and « Mars » the planet
  // is not a month. a1.08 found this the hard way.
  const said = productionStrings(false);
  const taught = MONTHS.filter((m) => said.some((s) => new RegExp(`\\b${m}\\b`).test(s)));
  deepStrictEqual(taught, [], 'month(s) taught, which belong to a1.09');
});

test('no season or weather is taught, so a1.10 keeps its lesson', () => {
  if (noSeed) return;
  const said = productionStrings(false);
  const taught = [...SEASONS, ...WEATHER].filter((x) => said.some((s) => s.toLowerCase().includes(x)));
  deepStrictEqual(taught, [], 'season or weather taught, which belongs to a1.10');
});

test('no reflexive verb is taught, which is a2.22', () => {
  if (noSeed) return;
  const said = productionStrings(false);
  const taught = REFLEXIVE.filter((r) => said.some((s) => s.toLowerCase().includes(r)));
  deepStrictEqual(taught, [], 'reflexive verb(s) taught, which are a2.22');
});

test('no verb outside être and avoir is drilled for production', () => {
  if (noBoth) return;
  // The chunk rows carry a verb no A1 unit conjugates. They are READ and shown,
  // and asking a learner to produce one asks for a form nothing has given them.
  const produced = [...SRC_SPEAK, ...SRC_DICTATION].filter((id) => SRC_CHUNKS.includes(id));
  deepStrictEqual(produced, [], 'production drill(s) name a chunk row');
});

/* ─── The exam ─────────────────────────────────────────────────────────────── */

test('the exam is round based and every round can fire a drill', () => {
  if (noSeed) return;
  const q = theQuiz();
  ok((q.rounds ?? []).length > 0, 'the exam is not round based');
  const drillFor = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const leads: string[] = [];
  for (const r of q.rounds ?? []) {
    // drillForRound walks a round's targets and stops at the FIRST that
    // resolves, so a drill named only in second place never runs. a1.05 shipped
    // two unreachable drills for exactly this reason.
    const lead = (r.targets ?? []).find((t) => drillFor.has(t));
    ok(lead, `round ${r.id} names no target that resolves to a drill`);
    ok(!leads.includes(lead!), `round ${r.id} leads on "${lead}", which another round already leads on`);
    leads.push(lead!);
  }
  const fired = new Set(leads.map((t) => drillFor.get(t)!));
  const orphans = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-') && !fired.has(d.id)).map((d) => d.id);
  deepStrictEqual(orphans, [], 'drill(s) no round can fire');
});

test('every exam question teaches and points somewhere', () => {
  if (noSeed) return;
  const qs = quizQuestions(theQuiz());
  const noWhy = qs.filter((q) => !q.why).map((q) => q.q);
  deepStrictEqual(noWhy, [], 'question(s) with no why');
  const ids = sectionIds();
  const badRef = qs.filter((q) => !q.ref || !ids.includes(q.ref)).map((q) => q.q);
  deepStrictEqual(badRef, [], 'question(s) whose ref names no section of this lesson');
});

test('the exam does not lean on recognition', () => {
  if (noSeed) return;
  const qs = quizQuestions(theQuiz());
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} questions are mcq, over the half ceiling`);
  // errorSpot is the workhorse here for the reason a1.08 found: the errors this
  // lesson stops are all real sentences a learner produces.
  const errorSpot = qs.filter((q) => q.format === 'errorSpot').length;
  ok(errorSpot >= 4, `only ${errorSpot} errorSpot question(s), and the lesson's errors are all producible sentences`);
});

test('every free-text question accepts the answer it displays', () => {
  if (noSeed) return;
  // Compared through the REAL matchesAccept, which folds accents, case,
  // punctuation and whitespace. A question whose own canonical answer is
  // rejected marks a correct learner wrong.
  const bad = quizQuestions(theQuiz())
    .filter((q) => q.answer && !matchesAccept(q.answer!, q.accept))
    .map((q) => `${q.q} shows "${q.answer}"`);
  deepStrictEqual(bad, [], 'question(s) that do not accept their own answer');
});

test('every question about a frame carries a situation, not a bare choice', () => {
  if (noSeed) return;
  // "et quart or moins le quart?" has no answer without context. A clock time
  // or a scene in the stem is what makes these answerable.
  //
  // A quoted French example counts as a situation, and « » is the signal for
  // it: "What does the half agree with in « six ans et demi »?" is answerable
  // because the phrase being asked about is in the question. Without that in
  // the list this check fired on a question that is not the shape it exists to
  // catch, which is how a correct test comes to be deleted by the next author.
  const framey = quizQuestions(theQuiz()).filter((q) => /quart|demie?|moins/i.test(q.q));
  const bare = framey
    .filter((q) => !/\d|«|o'clock|somebody|you are|it is|listing|reads|telling|write|fix this|which/i.test(q.q))
    .map((q) => q.q);
  deepStrictEqual(bare, [], 'question(s) about a frame with no situation in the stem');
});

test('correct answers do not cluster in one option slot', () => {
  if (noSeed) return;
  const closed = quizQuestions(theQuiz()).filter((q) => typeof q.correct === 'number' && q.opts?.length);
  const byIndex = new Map<number, number>();
  for (const q of closed) byIndex.set(q.correct as number, (byIndex.get(q.correct as number) ?? 0) + 1);
  for (const [ix, n] of byIndex) {
    ok(n / closed.length <= 0.4, `${Math.round(n / closed.length * 100)}% of correct answers sit in slot ${ix}`);
  }
});

/* ─── Nothing authored goes unrendered ─────────────────────────────────────── */

test('the density validator passes over the seed copy', () => {
  if (noSeed) return;
  const issues = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(issues.length, 0, formatDensity(issues));
});

test('practice, dictation and drills name only items the seed actually holds', () => {
  if (noSeed) return;
  const missing: string[] = [];
  for (const id of L!.itemIds) if (!ITEMS.has(id)) missing.push(`itemIds: ${id}`);
  for (const s of L!.sections) {
    if (s.type === 'practice' || s.type === 'dictation') {
      for (const id of s.itemIds) if (!ITEMS.has(id)) missing.push(`${(s as { id?: string }).id}: ${id}`);
    }
  }
  for (const d of L!.drills ?? []) for (const id of d.items ?? []) if (!ITEMS.has(id)) missing.push(`${d.id}: ${id}`);
  for (const t of Object.values(L!.terms ?? {})) {
    for (const e of t.examples ?? []) if (!ITEMS.has(e.itemId)) missing.push(`term ${t.term}: ${e.itemId}`);
  }
  deepStrictEqual(missing, [], 'id(s) that resolve to nothing, which render as empty cards');
});

test('the spoken mission draws only from items the mic can score', () => {
  if (noSeed) return;
  const speak = L!.sections.find((s) => s.type === 'practice');
  ok(speak && speak.type === 'practice', 'there is no practice mission');
  const bad = (speak as Extract<LessonSection, { type: 'practice' }>).itemIds
    .filter((id) => !ITEMS.get(id)?.drills.includes('voiceflash'));
  deepStrictEqual(bad, [], 'spoken items with no voiceflash, which render as cards nothing can score');
});

test('the reading glossary is authored where something renders it, and every key can match', () => {
  if (noSeed) return;
  const reading = L!.sections.find((s) => s.type === 'reading');
  if (!reading || reading.type !== 'reading') return;
  if (reading.glossary?.length) {
    // ReadingMission routes to PassagePage (which draws the underlines and the
    // tap sheet) only when questionsInModal is set WITH questions. a1.01 shipped
    // five entries down the other path and none of them ever drew anything.
    ok((reading as { questionsInModal?: boolean }).questionsInModal, 'a glossary is authored where nothing renders it');
    ok((reading.questions ?? []).length > 0, 'questionsInModal with no questions');
    // The REAL matcher, and compared by KEY rather than by matched TEXT. An
    // earlier a1.08 test compared text, which counts an entry shadowed by a
    // longer one as found, and it passed while two entries were dead.
    //
    // `glossKeys` takes ONE STRING and returns its folded forms (elided and
    // de-elided), so the key set is built by flat-mapping over the entries.
    // Comparing against `g.word.toLowerCase()` instead would compare a raw
    // string to a folded one and report every entry as dead.
    const keys = new Set(reading.glossary.flatMap((g) => glossKeys(g.word)).filter(Boolean));
    const hit = new Set(segmentSentence(reading.text, keys).filter((s) => s.key).map((s) => s.key!));
    const dead = reading.glossary.filter((g) => !glossKeys(g.word).some((k) => hit.has(k))).map((g) => g.word);
    deepStrictEqual(dead, [], 'glossary entries that underline nothing');
  }
});

test('every term chip resolves, and no mission carries more than three', () => {
  if (noSeed) return;
  const known = new Set(Object.keys(L!.terms ?? {}));
  const bad: string[] = [];
  const overCap: string[] = [];
  for (const s of L!.sections) {
    const keys = (s as { terms?: string[] }).terms ?? [];
    for (const k of keys) if (!known.has(k)) bad.push(`${(s as { id?: string }).id}: ${k}`);
    // The renderer shows three and collapses the rest behind "+N". sons.06 ships
    // seven sections over the cap and that is debt, not precedent.
    if (keys.length > 3) overCap.push(`${(s as { id?: string }).id}: ${keys.length}`);
  }
  deepStrictEqual(bad, [], 'term chip(s) naming an undefined term');
  deepStrictEqual(overCap, [], 'mission(s) with more than three term chips');
});

test('every sheet a section names exists, and every sheet is reachable', () => {
  if (noSeed) return;
  const sheets = new Set((L!.sheets ?? []).map((s) => s.id));
  const named = new Set<string>();
  for (const s of L!.sections) {
    const ref = (s as { sheetId?: string }).sheetId;
    if (!ref) continue;
    ok(sheets.has(ref), `section names sheetId "${ref}" with no such sheet`);
    named.add(ref);
  }
  const unreachable = [...sheets].filter((id) => !named.has(id));
  deepStrictEqual(unreachable, [], 'sheet(s) no section points at, so nothing opens them');
});

test('commonErrors carries the swipe flag that stops it drawing a blank screen', () => {
  if (noSeed) return;
  // Without `swipe` the section falls through to a path that returned undefined
  // and drew a fully blank screen on sons.08 m22 and a1.01 m5.
  for (const s of L!.sections.filter((x) => x.type === 'commonErrors')) {
    ok((s as { swipe?: boolean }).swipe, `${(s as { id?: string }).id} has no swipe flag`);
    strictEqual((s as { size?: string }).size, 'lg', `${(s as { id?: string }).id} should be lg, one error per screen`);
  }
});

test('no autoplay is authored, because no component implements it', () => {
  if (noSeed) return;
  // Declared in schema.ts, implemented nowhere, and six seed sections carry it
  // to this day. `audioFirst` is the one ScenePlayer genuinely honours.
  ok(!JSON.stringify(L!).includes('"autoplay"'), 'autoplay is authored and no component reads it');
});

test('tranches release every taught item exactly once, and nothing untaught', () => {
  if (noSeed) return;
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length, 'tranches and acts are index-aligned and differ in length');
  const flat = tranches.flat();
  const dupes = flat.filter((id, i) => flat.indexOf(id) !== i);
  deepStrictEqual([...new Set(dupes)], [], 'item(s) released by two tranches, which takes two ratings for one card');
  const taught = new Set(L!.itemIds);
  deepStrictEqual(flat.filter((id) => !taught.has(id)), [], 'tranche(s) release item(s) the lesson does not teach');
  deepStrictEqual([...taught].filter((id) => !flat.includes(id)), [], 'item(s) taught but never released to review');
});

test('a tranche releases only items the acts before it have shown', () => {
  if (noSeed) return;
  // A card released before its mission is a card the learner is asked to rate
  // before they have met it. a1.08 found thirty of these at its v6.
  //
  // Matched on CONTENT as well as on id, and that is not a loosening. This
  // lesson's sections name a corpus row through `frOf()`, which inlines the
  // French and never writes the id, so a check that looked only for ids would
  // report every card in the lesson as released early. The question is whether
  // the learner has SEEN it, and what they see is the sentence.
  // The REFERENCE SHEETS a mission names count as shown, because a sheetId is a
  // surface the learner can open from that mission. Leaving them out reported
  // « Il est sept heures du matin. » as released early when the sheet carrying
  // it is reachable from mission 4.
  const tranches = L!.deckTranche ?? [];
  const acts = L!.acts ?? [];
  const sheetById = new Map((L!.sheets ?? []).map((s) => [s.id, s]));
  const bad: string[] = [];
  for (let i = 0; i < tranches.length; i++) {
    const secsSoFar = acts.slice(0, i + 1).flatMap((a) => a.sections).map((id) => sec(id)).filter(Boolean);
    const sheetsSoFar = secsSoFar
      .map((s) => (s as { sheetId?: string }).sheetId)
      .filter(Boolean)
      .map((id) => sheetById.get(id!))
      .filter(Boolean);
    const shownSoFar = [...secsSoFar, ...sheetsSoFar];
    const said = strings(shownSoFar);
    const seenIds = new Set(said.filter((s) => /^fr\./.test(s)));
    const blob = said.join('    ');
    for (const id of tranches[i]) {
      if (seenIds.has(id)) continue;
      const fr = ITEMS.get(id)?.fr;
      if (fr && blob.includes(fr)) continue;
      bad.push(`act ${i + 1} releases ${id} ("${fr ?? '?'}"), which no mission before it shows`);
    }
  }
  deepStrictEqual(bad, [], 'tranche(s) release a card ahead of the mission that teaches it');
});

test('no corpus row this lesson authored is dead', () => {
  if (noBoth) return;
  const named = new Set(strings(L!).filter((s) => /^fr\./.test(s)));
  const dead = SRC_AUTHORED.filter((r) => !named.has(r.id)).map((r) => `${r.id} "${r.fr}"`);
  deepStrictEqual(dead, [], 'authored row(s) the lesson never names, which is content nobody sees');
});

test('no theme holds the same word twice once this lesson has landed', () => {
  if (noSeed) return;
  // flashhub-coverage.test.ts keys decks on `fr` with the article stripped, so
  // `l'heure` and `heure` are ONE key inside a theme and a duplicate serves the
  // same card twice.
  const mine = new Set([...(SRC_AUTHORED.map((r) => r.id)), ...SRC_IMPORTED.map((r) => r.id)]);
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const byWord = new Map<string, string>();
  const collisions: string[] = [];
  for (const i of seed.items) {
    if (i.kind === 'sentence') continue;
    if ((i.cardType ?? 'vocab') !== 'vocab') continue;
    const key = `${i.theme}::${headword(i.fr)}`;
    const prior = byWord.get(key);
    if (prior && (mine.has(prior) || mine.has(i.id))) collisions.push(`${prior} vs ${i.id} ("${i.fr}")`);
    else if (!prior) byWord.set(key, i.id);
  }
  deepStrictEqual(collisions, [], 'this lesson duplicates a word already in its theme');
});

test('the imported rows this lesson copies into the seed match the manifest', () => {
  if (noBoth) return;
  const drift: string[] = [];
  for (const it of SRC_IMPORTED) {
    const row = ITEMS.get(it.id);
    if (!row) { drift.push(`${it.id} is not in the seed`); continue; }
    if (row.fr !== it.fr) drift.push(`${it.id}: manifest says "${it.fr}", seed says "${row.fr}"`);
    if (row.theme !== it.theme) drift.push(`${it.id}: theme differs`);
  }
  deepStrictEqual(drift, [], 'the imported manifest has drifted from the seed');
});

/* ─── House style ──────────────────────────────────────────────────────────── */

test('the authored copy carries no em dash and no honest/honesty', () => {
  if (noSeed) return;
  const all = strings(L!);
  deepStrictEqual(all.filter((s) => s.includes('—')), [], 'em dash in authored copy');
  deepStrictEqual(all.filter((s) => /honest/i.test(s)), [], '"honest" in authored copy');
});

test('no grammar vocabulary reaches an A1 learner', () => {
  if (noSeed) return;
  // grammarIntroduced is addressed to the curriculum and is better for using the
  // precise words, so this is scoped to what a learner reads.
  const jargon = productionStrings().filter((s) =>
    /\b(conjugaison|article (défini|indéfini|partitif)|adverbe|complément circonstanciel|masculin|féminin|déterminant)\b/i.test(s));
  deepStrictEqual(jargon, [], 'grammar vocabulary on a learner-facing surface');
});

/* ─── Audio, briefs only ───────────────────────────────────────────────────── */

test('the audio briefs pin the constraints that cannot be recovered later', () => {
  if (noSeed) return;
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length > 0, 'no recordings are requested at all');
  const all = recorded.map((r) => r.desc).join('  ');
  // Each of these is a constraint that becomes invisible the moment a clip is
  // delivered, and each is specific to this lesson's subject matter.
  ok(/one take|ONE TAKE|continuous take/i.test(all), 'nothing asks for the hours in one take');
  ok(/neuf heures/i.test(all), 'nothing pins the exceptional liaison');
  ok(/deux heures and douze heures|deux-douze|DEUX HEURES AND DOUZE/i.test(all), 'nothing pins the pair the ear fails on');
  ok(/et quart.{0,80}moins le quart|moins le quart.{0,80}et quart/is.test(all), 'nothing pins the article pair adjacently');
  ok(/midi.{0,80}minuit|minuit.{0,80}midi/is.test(all), 'nothing pins midi against minuit');
  ok(/same moment|register/i.test(all), 'nothing pins the two registers against each other');
});

test('every recording a section names is one the lesson actually requests', () => {
  if (noSeed) return;
  const declared = new Set((L!.audio?.recorded ?? []).map((r) => r.id));
  const named = new Set<string>();
  const walk = (v: unknown) => {
    if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') {
      for (const [k, val] of Object.entries(v)) {
        if (k === 'recordingId' && typeof val === 'string') named.add(val);
        else walk(val);
      }
    }
  };
  walk(L!.sections);
  const unknown = [...named].filter((id) => !declared.has(id));
  deepStrictEqual(unknown, [], 'section(s) name a recording the lesson never requests');
});

/* ─── Seed and source are the same lesson ──────────────────────────────────── */

test('the seed copy and the authored source are the same lesson', () => {
  if (noBoth) return;
  // The failure this catches has cost this project real work twice: seed.json
  // and the admin source drift, and nothing says so until a device shows it.
  // Every figure DERIVED, so this cannot pass by being edited.
  strictEqual(L!.version, SRC!.version, 'version differs between the seed and the source');
  strictEqual(L!.sections.length, SRC!.sections.length, 'section count differs');
  deepStrictEqual(sectionIds(), SRC!.sections.map((s) => (s as { id?: string }).id), 'the spine differs');
  deepStrictEqual(L!.itemIds, SRC!.itemIds, 'itemIds differ');
  deepStrictEqual((L!.acts ?? []).map((a) => a.id), (SRC!.acts ?? []).map((a) => a.id), 'act ids differ');
  strictEqual(quizQuestions(theQuiz()).length,
    quizQuestions(SRC!.sections.find((s): s is Extract<LessonSection, { type: 'quiz' }> => s.type === 'quiz')!).length,
    'quiz size differs');
  deepStrictEqual(L!.deckTranche, SRC_TRANCHES, 'tranches differ');
  // Canonical, not byte-for-byte: a publish rewrites the seed from Postgres and
  // reorders keys with no content change. See canonicalJson in schema.ts.
  strictEqual(canonicalJson(L!), canonicalJson(SRC!), 'the seed copy and the source teach different lessons');
});
