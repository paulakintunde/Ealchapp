// Guards a1.10.l1 "Les saisons & la météo".
//
// This lesson has one failure mode that matters more than all the others, and
// it is not a crash: it is THE THREE-WAY CONTRAST COLLAPSING BACK INTO A
// WEATHER PHRASEBOOK.
//
// The canDo has two clauses and they are unequal. "Can name the seasons" is
// four words with a memory hook behind them. "And describe today's weather" is
// the lesson, and the whole of it is that French uses three different verbs
// where English uses one:
//
//     il fait chaud        the weather
//     j'ai chaud           a person
//     le café est chaud    a thing
//
// A rewrite that keeps the four seasons, keeps a tidy weather deck, and loses
// the surface showing all three of those TOGETHER ON ONE SCREEN WITH THE SAME
// ADJECTIVE would read fine in review, ship, and leave a learner saying
// « je suis chaud » for a decade. So the assertion that earns its place here is
// the one the brief demands: "at least one section shows il fait, an avoir form
// and an être form with the SAME adjective on one screen. That contrast is the
// lesson."
//
// The second-most valuable is the personal-il pair. « Il fait du vent » and
// « Il fait du yoga » are four words of identical shape, and a learner who
// cannot sort them reads every weather report as being about a man. Both halves
// must sit on ONE screen; separating them removes the whole point.
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
// the four seasons, the four shapes, the three frames and the seven triggers:
// those numbers are the SHAPE of the lesson rather than a measurement of it,
// and a later trim that quietly drops one is exactly what this file stops.
//
// Nothing here reimplements app logic. `fold`, `matchesAccept`, `dicteeMode`,
// `wordDecoys`, `glossKeys`, `segmentSentence`, `hasPlainNasalFor`,
// `endingPopulation` and `validateDensity` are all imported from the modules
// the app itself runs. An earlier version of a1.01's test inlined its own
// glossary lookup, copied the version that was already broken, and passed while
// the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity, formatDensity } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode, wordDecoys } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; lessonIds: string[]; themes?: unknown; canDo?: string; sub?: string; title?: string; prereqUnitIds?: string[] }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; ipa?: string; drills: string[]; cardType?: string; gender?: string }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.10.l1');
// Before the batch and the merge have run, the seed has no a1.10.l1 and every
// seed-derived assertion below would fail for a reason that is not a content
// bug. Skip cleanly and let the source-derived half still run.
const noSeed = !L;

const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
type Display = { fr: string; ipa: string; respell: string; en: string };
type Repair = { id: string; fr: string; from: string; to: string; why: string };
let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_SEASON_IDS: string[] = [];
let SRC_FOUR: readonly string[] = [];
let SRC_FRAME: Record<string, string> = {};
let SRC_SHAPES: readonly { key: string; label: string; frames: readonly string[] }[] = [];
let SRC_RESPELL: Record<string, Display> = {};
let SRC_REPAIRS: Repair[] = [];
let SRC_DB_REPAIRS: Repair[] = [];
let SRC_IMPORTED: { id: string; fr: string; en: string; theme: string; kind: string; level: string; drills: string[]; respell?: string; gender?: string; tags: string[]; cardType?: string }[] = [];
let SRC_REUSED: { id: string; fr: string; en: string; why: string }[] = [];
let SRC_WITHDRAWN: string[] = [];
let SRC_FAIRE: string[] = [];
let SRC_MONTHS: string[] = [];
let SRC_DAYS: string[] = [];
let SRC_CLOCK: string[] = [];
let SRC_TRANCHES: string[][] = [];
let SRC_ITEM_IDS: string[] = [];
try {
  const lesson = await import('../../../ealch-admin/scripts/data/meteo-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/meteo-corpus.ts');
  SRC = lesson.METEO_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_SPEAK = lesson.METEO_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.METEO_DICTATION_IDS as string[];
  SRC_TRANCHES = lesson.METEO_TRANCHES as string[][];
  SRC_ITEM_IDS = lesson.METEO_ITEM_IDS as string[];
  SRC_FAIRE = lesson.FAIRE_FORMS as string[];
  SRC_MONTHS = lesson.MONTH_WORDS as string[];
  SRC_DAYS = lesson.DAY_WORDS as string[];
  SRC_CLOCK = lesson.CLOCK_WORDS as string[];
  SRC_SEASON_IDS = corpus.SEASON_IDS as string[];
  SRC_FOUR = corpus.THE_FOUR as readonly string[];
  SRC_FRAME = corpus.SEASON_FRAME as Record<string, string>;
  SRC_SHAPES = corpus.SHAPES as typeof SRC_SHAPES;
  SRC_RESPELL = corpus.RESPELL as Record<string, Display>;
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as Repair[];
  SRC_DB_REPAIRS = corpus.DB_ONLY_REPAIRS as Repair[];
  SRC_IMPORTED = corpus.IMPORTED as typeof SRC_IMPORTED;
  SRC_REUSED = corpus.REUSED as typeof SRC_REUSED;
  SRC_WITHDRAWN = corpus.WITHDRAWN_IDS as string[];
} catch {
  // Not available; the source-derived tests below no-op.
}
const noSrc = !SRC;

/** The four, as a literal. This is one of four hardcoded sets in the file and
 *  it is deliberate: four seasons is the SHAPE of the lesson, not a measurement
 *  of it, and a rewrite that quietly ships three is exactly what this guards. */
const THE_FOUR = ['printemps', 'été', 'automne', 'hiver'] as const;

/** Which small word each takes. Written out rather than imported, so this file
 *  and the corpus have to AGREE rather than the test reading the answer off the
 *  thing it is checking. Three en and one au. */
const FRAME: Record<string, string> = {
  printemps: 'au printemps',
  été: 'en été',
  automne: 'en automne',
  hiver: 'en hiver',
};

/** The three frames, on the one adjective the contrast is built on. */
const THREE_FRAMES = ['il fait chaud', "j'ai chaud", 'le café est chaud'] as const;

/** The pair the lesson turns on. Both halves, verbatim. */
const COLLISION_PAIR = ['Il fait du vent', 'Il fait du yoga'] as const;

/** Every form of `faire` this lesson must never show. faire is a2.12 and the
 *  learner here has être and avoir and nothing else, so impersonal `il fait` is
 *  taught as one frozen block. Written out rather than imported for the same
 *  reason as FRAME. */
const FAIRE_FORMS = ['je fais', 'tu fais', 'nous faisons', 'vous faites', 'ils font', 'elles font'];

const EXPECTED_TRIGGERS = 7;
const EXPECTED_ROUNDS = 6;
const EXPECTED_TEACHING_DRILLS = 6;

/* ─── Helpers. None of these reimplements app logic. ──────────────────────── */

/** Every authored string reachable from a value. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** Whole-word containment that never builds a regex out of the needle.
 *  JavaScript's `\b` is ASCII-only, so /\ben été\b/ matches NOTHING and looks
 *  exactly like an absence. This is the same walk probe-corpus.ts uses. */
function hasWord(haystack: string, needle: string): boolean {
  let from = 0;
  for (;;) {
    const i = haystack.indexOf(needle, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : haystack[i - 1];
    const after = haystack[i + needle.length] ?? ' ';
    if (!/[a-zà-ÿ]/i.test(before) && !/[a-zà-ÿ]/i.test(after)) return true;
    from = i + 1;
  }
}

const sectionId = (s: LessonSection) => (s as { id?: string }).id ?? '';
const text = (v: unknown) => strings(v).join('\n');

/** The surfaces a learner PRODUCES from, as opposed to reads. The
 *  neighbour-content checks run over these rather than every string, because
 *  context in a reading passage is legitimate and a check over every string
 *  would fire on it and then get deleted, which is how a real guard becomes a
 *  deleted one. */
function productionSurfaces(l: Lesson): string[] {
  return [
    ...strings(l.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
    ...strings(l.drills ?? []),
    ...strings((l.sections.find((s) => s.type === 'quiz') ?? {}) as unknown),
  ];
}

/** The last syllable of a respelling. `automne` is the last token in every form
 *  this lesson displays, and « en automne » legitimately carries a superscript
 *  on `en`, so the automne check has to look at the token rather than the
 *  string. */
const lastToken = (respell: string) =>
  respell.replace(/^\[|\]$/g, '').split(/[\s-]+/).filter(Boolean).pop() ?? '';

/* ══ 1. The lesson exists, and is shaped the way the spine says ═══════════ */

test('a1.10.l1 is in the seed and validates', () => {
  if (noSeed) return;
  strictEqual(validateLesson(L!, L!.id).length, 0, JSON.stringify(validateLesson(L!, L!.id)));
});

test('unit a1.10 links the lesson and keeps what the Den advertises', () => {
  if (noSeed) return;
  const u = seed.units.find((x) => x.id === 'a1.10');
  ok(u, 'unit a1.10 is missing from the seed');
  ok(u!.lessonIds.includes('a1.10.l1'), 'unit a1.10 does not link its lesson');
  strictEqual(u!.title, 'Seasons and Weather');
  strictEqual(u!.sub, 'Les saisons & la météo');
  strictEqual(u!.canDo, "Can name the seasons and describe today's weather");
});

test('the unit is bound to meteo and the dead temps binding is gone', () => {
  if (noSeed) return;
  const u = seed.units.find((x) => x.id === 'a1.10')!;
  const themes = (u.themes ?? []) as string[];
  ok(themes.includes('meteo'), `a1.10 must keep meteo; it declares ${JSON.stringify(themes)}`);
  ok(!themes.includes('temps'), 'a1.10 still declares the dead "temps" theme');
  // And "temps" really is dead, so this was a repair rather than the deletion
  // of something somebody was using.
  strictEqual(seed.items.filter((i) => i.theme === 'temps').length, 0, '"temps" now holds items, so the rebind should be revisited');
});

test('the tag agrees with the seq the renderer computes from', () => {
  if (noSeed) return;
  const u = seed.units.find((x) => x.id === 'a1.10')!;
  // missions.ts draws `${level} · LEÇON ${unit.seq}` at render time and `tag` is
  // a stored fallback. a1.03 shipped LEÇON 03 at seq 5 and the header above it
  // drew LEÇON 05.
  strictEqual(L!.tag, `A1 · LEÇON ${String(u.seq).padStart(2, '0')}`);
});

test('the spine is in order and every act names sections that exist', () => {
  if (noSeed) return;
  const ids = L!.sections.map(sectionId);
  ok(ids.every(Boolean), 'every section must carry a stable id');
  strictEqual(new Set(ids).size, ids.length, 'duplicate section ids');
  // The ids are ordered s01..s26 and the array order must match, or an act's
  // list and the pager disagree about what comes next.
  const numbered = ids.map((id) => Number(id.slice(1, 3)));
  ok(numbered.every((n, i) => i === 0 || n >= numbered[i - 1]), `section ids are out of order: ${ids.join(' ')}`);

  const acts = L!.acts ?? [];
  strictEqual(acts.length, 6, 'six acts');
  const claimed = acts.flatMap((a) => a.sections);
  strictEqual(new Set(claimed).size, claimed.length, 'two acts claim the same section');
  for (const id of claimed) ok(ids.includes(id), `act names section "${id}", which does not exist`);
  for (const id of ids) ok(claimed.includes(id), `section "${id}" belongs to no act`);
});

test('exactly one quiz section, because the pager renders exactly one', () => {
  if (noSeed) return;
  // lessonPager.logic.ts appends one quiz page via
  // `sections.find(s => s.type === 'quiz')`. a1.01 shipped 12 questions in a
  // second quiz section that no learner ever saw.
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1);
});

test('every sheetId resolves and every sheet is reachable', () => {
  if (noSeed) return;
  const declared = new Set((L!.sheets ?? []).map((s) => s.id));
  const used = new Set(L!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[]);
  for (const id of used) ok(declared.has(id), `sheetId "${id}" names a sheet the lesson does not declare`);
  for (const id of declared) ok(used.has(id), `sheet "${id}" is declared and no section points at it`);
});

test('the lesson passes the density validator against the real seed corpus', () => {
  if (noSeed) return;
  const issues = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(issues.length, 0, formatDensity(issues));
});

/* ══ 2. The four seasons, each asserted BY NAME ═══════════════════════════ */

// The brief: "all four seasons are taught and each is tested by name, asserted
// individually rather than as a count of four". So these are four tests, not a
// loop with one assertion, and a dropped season names itself in the failure.

for (const season of THE_FOUR) {
  test(`the season "${season}" is taught by name on a learner surface`, () => {
    if (noSeed) return;
    const learner = strings(L!.sections).concat(strings(L!.sheets ?? []), strings(L!.terms ?? {})).join('\n').toLowerCase();
    ok(hasWord(learner, season), `"${season}" is never named on any screen`);
  });

  test(`the season "${season}" appears with its own small word, ${FRAME[season]}`, () => {
    if (noSeed) return;
    const learner = strings(L!.sections).concat(strings(L!.sheets ?? [])).join('\n');
    ok(learner.includes(FRAME[season]), `"${FRAME[season]}" appears nowhere, so the season is taught without its frame`);
  });
}

test('au printemps is taught against en, and never as en printemps', () => {
  if (noSeed) return;
  const all = strings(L!).join('\n').toLowerCase();
  ok(all.includes('au printemps'), 'au printemps is never shown');
  // « en printemps » returns 0 in Postgres and 0 in the seed, so the corpus
  // never models the error. The lesson may QUOTE it as a trap (s15-traps and r2
  // both do) but must never present it as an answer.
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  const qs = quiz && quiz.type === 'quiz' ? quizQuestions(quiz) : [];
  for (const q of qs) {
    if (q.format === 'mcq' || q.format === 'listenChoose') {
      const chosen = q.opts?.[q.correct as number] ?? '';
      ok(!chosen.toLowerCase().includes('en printemps'), `a correct option is "${chosen}"`);
    }
    for (const a of [q.answer ?? '', ...(q.accept ?? [])]) {
      ok(!a.toLowerCase().includes('en printemps'), `an accepted answer is "${a}"`);
    }
  }
});

test('one section shows all four prepositions TOGETHER', () => {
  if (noSeed) return;
  // The brief: "at least one section shows all four prepositions together.
  // Splitting them across screens is how the exception gets lost." The whole
  // teaching of act 2 is that ONE of the four is different, and that is only
  // visible while the other three are on the same screen.
  const together = L!.sections.filter((s) => THE_FOUR.every((season) => text(s).includes(FRAME[season])));
  ok(together.length > 0, 'no single section carries all four season frames');
});

test('three seasons take en and exactly one takes au', () => {
  if (noSeed) return;
  const en = THE_FOUR.filter((s) => FRAME[s].startsWith('en '));
  const au = THE_FOUR.filter((s) => FRAME[s].startsWith('au '));
  strictEqual(en.length, 3);
  strictEqual(au.length, 1);
  strictEqual(au[0], 'printemps');
});

test('the four season frames resolve to corpus rows that say the same thing', () => {
  if (noSeed || noSrc) return;
  strictEqual(SRC_SEASON_IDS.length, 4, 'four season frames');
  for (let i = 0; i < THE_FOUR.length; i++) {
    const row = ITEMS.get(SRC_SEASON_IDS[i]);
    ok(row, `${SRC_SEASON_IDS[i]} is not in the seed`);
    strictEqual(row!.fr, FRAME[THE_FOUR[i]], `${SRC_SEASON_IDS[i]} says "${row!.fr}"`);
  }
});

/* ══ 3. The three frames, one adjective, ONE SCREEN ═══════════════════════ */

test('all three frames are taught', () => {
  if (noSeed) return;
  const learner = strings(L!.sections).concat(strings(L!.sheets ?? []), strings(L!.terms ?? {})).join('\n');
  for (const frame of THREE_FRAMES) {
    ok(learner.includes(frame), `the frame "${frame}" is never shown`);
  }
});

test('ONE SECTION carries il fait, an avoir form and an être form on the SAME adjective', () => {
  if (noSeed) return;
  // THE assertion of this file. The brief: "at least one section shows il fait,
  // an avoir form and an être form with the same adjective on one screen. That
  // contrast is the lesson."
  //
  // Checked on `chaud` specifically rather than on any adjective, because the
  // whole teaching is that ONLY the verb moves. Three sentences with three
  // different adjectives would satisfy a looser check and teach nothing.
  const together = L!.sections.filter((s) => {
    const t = text(s);
    return THREE_FRAMES.every((frame) => t.includes(frame));
  });
  ok(
    together.length > 0,
    'no single section shows il fait chaud, j\'ai chaud and le café est chaud together. That contrast IS the lesson.'
  );
  // And at least one of them is an in-flow teaching surface rather than only
  // the exam, so the learner MEETS the contrast before being tested on it.
  const teaching = together.filter((s) => s.type !== 'quiz');
  ok(teaching.length > 0, 'the three-way contrast appears only in the quiz, so it is tested and never taught');

  // AND IT IS PINNED TO THE LAYOUT, which is what the brief actually asks for:
  // "The three frames want three columns, and three columns want one adjective.
  // A tapTable with il fait chaud / j'ai chaud / le café est chaud across ONE
  // ROW is the single most valuable screen in the lesson. This is the layout
  // the test must assert."
  //
  // Without this the check above passes on the review deck and the exam while
  // the taught screen is broken, which is exactly what a mutation run found.
  const rowed = L!.sections.some((s) => {
    if (s.type !== 'tapTable') return false;
    return (s as { rows: { cells: string[] }[] }).rows.some((r) =>
      THREE_FRAMES.every((frame) => r.cells.some((c) => c.includes(frame))));
  });
  ok(rowed, 'no tapTable row holds the three frames across its cells, so they are never three columns on one screen');
});

test('the same contrast is repeated on a second adjective', () => {
  if (noSeed) return;
  // One example is a coincidence. The froid row is what makes it a rule.
  const t = strings(L!.sections).join('\n');
  ok(t.includes('il fait froid'), 'il fait froid is never shown');
  ok(t.includes("j'ai froid"), "j'ai froid is never shown");
  ok(t.includes('le vent est froid') || t.includes('Le vent est froid.'), 'no être frame on froid');
});

test('je suis chaud is quoted as a trap and never as an answer', () => {
  if (noSeed) return;
  const all = strings(L!).join('\n');
  ok(all.includes('Je suis chaud'), 'the error the lesson exists to stop is never named');
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  const qs = quiz && quiz.type === 'quiz' ? quizQuestions(quiz) : [];
  for (const q of qs) {
    if (q.format === 'mcq' || q.format === 'listenChoose') {
      const chosen = (q.opts?.[q.correct as number] ?? '').toLowerCase();
      ok(!chosen.includes('je suis chaud') && !chosen.includes('je suis froid'), `a correct option is "${chosen}"`);
    }
    for (const a of [q.answer ?? '', ...(q.accept ?? [])]) {
      ok(!a.toLowerCase().includes('je suis chaud'), `an accepted answer is "${a}"`);
    }
  }
});

/* ══ 4. il fait is NEVER conjugated ═══════════════════════════════════════ */

test('no authored surface conjugates faire', () => {
  if (noSeed) return;
  // faire is taught in a2.12, a whole band away, and the learner arriving here
  // has être and avoir and nothing else. Impersonal weather faire has exactly
  // one form, so teaching it as a frozen block is accurate rather than a
  // compromise. Checked over EVERY string, because a conjugated form is wrong
  // in a reading passage too.
  const all = strings(L!).map((s) => s.toLowerCase());
  for (const form of FAIRE_FORMS) {
    const hit = all.find((s) => hasWord(s, form));
    ok(!hit, `the lesson contains "${form}": ${hit}`);
  }
});

test('the lesson tells the learner faire is coming later', () => {
  if (noSeed) return;
  // The brief: "Say on a card that the learner will meet faire properly later.
  // A learner who notices the gap and is not told assumes the lesson is
  // incomplete."
  const learner = strings(L!.sections).join('\n').toLowerCase();
  ok(
    learner.includes('taught in their own lesson') || learner.includes('meet this verb properly'),
    'no card tells the learner the verb behind il fait is taught later'
  );
});

/* ══ 5. The personal-il collision, both senses on ONE screen ══════════════ */

test('ONE SECTION carries a weather il fait du and a personal il fait du', () => {
  if (noSeed) return;
  // The brief: "Il fait du vent and Il fait du yoga are the same four words of
  // structure and share nothing else. Put both on one screen."
  const together = L!.sections.filter((s) => {
    const t = text(s);
    return COLLISION_PAIR.every((half) => t.includes(half));
  });
  ok(together.length > 0, 'no single section carries both readings of « il fait du »');
  const teaching = together.filter((s) => s.type !== 'quiz');
  ok(teaching.length > 0, 'the collision appears only in the quiz, so it is tested and never taught');

  // AND PINNED TO THE LAYOUT. The brief: "Il fait du vent against Il fait du
  // yoga is a PAIR, so give it two columns on one screen." A mutation run found
  // that the check above survives on the review deck alone, which is a list
  // rather than a pair and loses the whole teaching.
  const rowed = L!.sections.some((s) => {
    if (s.type !== 'tapTable') return false;
    return (s as { rows: { cells: string[] }[] }).rows.some((r) =>
      COLLISION_PAIR.every((half) => r.cells.some((c) => c.includes(half))));
  });
  ok(rowed, 'no tapTable row puts the two readings of « il fait du » in two columns on one screen');
});

test('the empty il is named as a thing, not left to be inferred', () => {
  if (noSeed) return;
  const terms = L!.terms ?? {};
  const bodies = Object.values(terms).map((t) => `${t.term} ${t.title} ${t.body}`).join('\n').toLowerCase();
  ok(bodies.includes('nobody') || bodies.includes('nothing at all'), 'no term explains that this il refers to nobody');
});

/* ══ 6. Respellings ══════════════════════════════════════════════════════ */

test('no displayed respelling closes a nasal vowel with a plain n or m', () => {
  if (noSrc) return;
  // THE REAL CHECKER, not a copy of it. hasPlainNasalFor reads the FRENCH
  // spelling as well as the respelling, which is how it knows that jaune ->
  // ZHON is correct and grand -> GRAHN is not.
  const bad = Object.values(SRC_RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  strictEqual(bad.length, 0, bad.map((d) => `${d.fr} ${d.respell}`).join(' | '));
});

for (const word of ['le vent', 'le printemps', 'la saison']) {
  test(`"${word}" carries the superscript n, asserted by name`, () => {
    if (noSrc) return;
    // hasPlainNasalFor cannot see a WORD-INTERNAL nasal (its test needs the n
    // or m to end a token), and it also cannot see a respelling that loses its
    // superscript in a rewrite. Both of these carry a genuine nasal vowel, so
    // the superscript is required and is checked here by name.
    const d = SRC_RESPELL[word];
    ok(d, `"${word}" has no authored respelling`);
    ok(d.respell.includes('ⁿ'), `"${word}" is respelled ${d.respell}, with no superscript`);
  });
}

test('automne does NOT carry a superscript, because it has no nasal vowel', () => {
  if (noSrc) return;
  // READ THIS BEFORE "FIXING" IT.
  //
  // automne is /ɔ.tɔn/. The m is SILENT and the n is a REAL PRONOUNCED
  // CONSONANT, so there is no nasal vowel anywhere in the word and a
  // superscript would teach a sound that is not there. It is the same class as
  // jaune /ʒon/, which §3 of A1-BUILD-INVARIANTS.md documents.
  //
  // hasPlainNasalFor flags EVERY single-N respelling of it, because its rule is
  // that a vowel after the n or m in the French spelling means the consonant is
  // real, and automne is spelled `mne` so the vowel it looks for sits after the
  // m. The passing form is a DOUBLE N.
  //
  // Checked on the LAST TOKEN, because « en automne » legitimately carries a
  // superscript on `en`, which IS a real nasal. A whole-string check would
  // refuse the correct answer.
  for (const key of ['automne', "l'automne", 'en automne']) {
    const d = SRC_RESPELL[key];
    ok(d, `"${key}" has no authored respelling`);
    const tail = lastToken(d.respell);
    ok(!tail.includes('ⁿ'), `"${key}" is respelled ${d.respell}: automne has NO nasal vowel, so this must not be a superscript`);
    strictEqual(tail, 'TONN', `"${key}" is respelled ${d.respell}; the automne syllable must be TONN`);
  }
});

test('été is respelled exactly one way across everything displayed', () => {
  if (noSrc) return;
  // The brief: "été is respelled one way across everything you display." Three
  // forms ship in the corpus (lay-TAY in meteo, ay-TAY in paysages, eh-TAY in
  // voyelles) and all three follow the convention, so none is a violation. What
  // would be a violation is this lesson showing two of them.
  const forms = new Set(
    Object.values(SRC_RESPELL)
      .filter((d) => hasWord(d.fr.toLowerCase(), 'été') || d.fr.toLowerCase().includes("l'été"))
      .map((d) => lastToken(d.respell))
  );
  strictEqual(forms.size, 1, `été is respelled ${[...forms].join(' and ')} on this lesson's own screens`);
  strictEqual([...forms][0], 'TAY');
});

test('every repair really does fix what it claims and passes the shared checker', () => {
  if (noSrc) return;
  const all = [...SRC_REPAIRS, ...SRC_DB_REPAIRS];
  ok(all.length > 0, 'no repairs declared');
  for (const r of all) {
    ok(r.from !== r.to, `${r.id}: the repair changes nothing`);
    ok(!hasPlainNasalFor(r.fr, r.to), `${r.id}: the repaired value ${r.to} still fails the nasal convention`);
    ok(r.why.length > 30, `${r.id}: a repair with no reason is a repair nobody can review`);
  }
});

test('the four seed-side repairs really landed in the seed', () => {
  if (noSeed || noSrc) return;
  for (const r of SRC_REPAIRS) {
    const row = ITEMS.get(r.id);
    ok(row, `${r.id} is not in the seed`);
    strictEqual(row!.respell, r.to, `${r.id} still carries "${row!.respell}"`);
  }
});

/* ══ 7. Nothing that belongs to a neighbour ═══════════════════════════════ */

test('no month is taught here, because a1.09 has them', () => {
  if (noSeed) return;
  const surfaces = productionSurfaces(L!).map((s) => s.toLowerCase());
  const months = SRC_MONTHS.length ? SRC_MONTHS : ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  for (const m of months) {
    ok(!surfaces.some((s) => hasWord(s, m)), `the month "${m}" is on a production surface`);
  }
});

test('no day name is taught here, because a1.08 has them', () => {
  if (noSeed) return;
  const surfaces = productionSurfaces(L!).map((s) => s.toLowerCase());
  const days = SRC_DAYS.length ? SRC_DAYS : ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  for (const d of days) {
    ok(!surfaces.some((s) => hasWord(s, d)), `the day "${d}" is on a production surface`);
  }
});

test('no clock time is taught here, because a1.12 has it', () => {
  if (noSeed) return;
  // « il fait nuit » is a legitimate weather-frame phrase and is NOT the clock,
  // which is why `nuit` is not on this list.
  const surfaces = productionSurfaces(L!).map((s) => s.toLowerCase());
  const clock = SRC_CLOCK.length ? SRC_CLOCK : ['heure', 'heures', 'midi', 'minuit', 'minute', 'minutes'];
  for (const w of clock) {
    ok(!surfaces.some((s) => hasWord(s, w)), `clock vocabulary "${w}" is on a production surface`);
  }
});

test('no past-tense or near-future weather is produced', () => {
  if (noSeed) return;
  // The brief leaves both to their own units: the passé composé is recognition
  // only from a1.07, and aller is a2.02. « il a fait beau » and « il va
  // pleuvoir » are both how forecasts really work and both are out.
  const surfaces = productionSurfaces(L!).map((s) => s.toLowerCase());
  for (const form of ['il a fait', 'il va pleuvoir', 'il va faire', 'il faisait']) {
    ok(!surfaces.some((s) => s.includes(form)), `"${form}" is on a production surface`);
  }
});

/* ══ 8. Lowercase ════════════════════════════════════════════════════════ */

test('every season and weather item this lesson names is lowercase', () => {
  if (noSeed) return;
  // A headword reading "Printemps" teaches the English capital every time it is
  // shown. Sentence-initial capitals are legitimate, so only a capital PAST
  // index 0 is an error.
  const named = L!.itemIds.map((id) => ITEMS.get(id)).filter(Boolean) as { id: string; fr: string; kind: string }[];
  for (const row of named) {
    if (row.kind === 'sentence') continue;
    for (const s of THE_FOUR) {
      ok(
        row.fr.indexOf(s[0].toUpperCase() + s.slice(1)) <= 0,
        `${row.id} "${row.fr}" capitalises a season`
      );
    }
    ok(row.fr[0] !== row.fr[0].toUpperCase() || /^[QF]/.test(row.fr), `${row.id} "${row.fr}" opens on a capital`);
  }
});

/* ══ 9. Nothing authored, valid and invisible ═════════════════════════════ */

test('every itemId resolves in the seed', () => {
  if (noSeed) return;
  const missing = L!.itemIds.filter((id) => !ITEMS.has(id));
  strictEqual(missing.length, 0, `unresolved itemIds: ${missing.join(', ')}`);
});

test('every itemId is ON A SCREEN, not merely resolvable', () => {
  if (noSeed) return;
  // a1.08 shipped 43 itemIds that resolved perfectly, were released to spaced
  // repetition, and were named by no section and drawn by nothing. The question
  // is "did the learner see it", not "does this id resolve".
  const shown = new Set<string>();
  const walk = (v: unknown) => {
    if (typeof v === 'string') { if (ITEMS.has(v)) shown.add(v); return; }
    if (Array.isArray(v)) { v.forEach(walk); return; }
    if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  walk(L!.sections);
  walk(L!.drills ?? []);
  walk(L!.terms ?? {});
  // A section that names a sentence by its TEXT rather than its id shows it too.
  const surfaceText = strings(L!.sections).concat(strings(L!.terms ?? {}), strings(L!.sheets ?? [])).join('\n');
  const unseen = L!.itemIds.filter((id) => {
    if (shown.has(id)) return false;
    const row = ITEMS.get(id);
    return !row || !surfaceText.includes(row.fr);
  });
  strictEqual(unseen.length, 0, `itemIds named by nothing on a screen: ${unseen.join(', ')}`);
});

test('every authored respelling is rendered by something', () => {
  if (noSeed || noSrc) return;
  // §1 of A1-BUILD-INVARIANTS.md: "after authoring any field, grep for a
  // component that reads it. A field with no reader is worse than an absent
  // one, because it looks like the job is done."
  //
  // The corpus file's RESPELL table is the single source of truth for every
  // transcription this lesson stands behind, and it is easy to author an entry
  // for a word the sections then show without one. The first build of this
  // lesson had TEN such entries, including every avoir form and the bare name
  // of three of the four seasons, and nothing said so: the schema was happy,
  // the density validator was happy, and a learner would simply have seen
  // « avoir chaud » with no sound beside it. Found by grepping the served
  // Metro bundle for the strings, which is the host half of device
  // verification, and pinned here so it cannot come back.
  const body = strings(L!).join('\n');
  const dead = Object.entries(SRC_RESPELL).filter(([, d]) => !body.includes(d.respell));
  strictEqual(
    dead.length, 0,
    `respellings authored and displayed by nothing: ${dead.map(([k, d]) => `${k} ${d.respell}`).join(', ')}`
  );
});

test('no autoplay is authored anywhere', () => {
  if (noSeed) return;
  // Declared in schema.ts, implemented in no component, to this day. Six seed
  // sections carry it and none of them does anything.
  ok(!JSON.stringify(L!).includes('"autoplay"'), 'autoplay is authored. Use audioFirst, which ScenePlayer implements.');
});

test('commonErrors carries swipe, or it draws a blank screen', () => {
  if (noSeed) return;
  // Without `swipe`, MissionSection takes a fallback that hit a `break` falling
  // out of the switch and returned undefined. a1.01 mission 5 and sons.08
  // mission 22 both shipped as fully blank screens.
  for (const s of L!.sections.filter((x) => x.type === 'commonErrors')) {
    strictEqual((s as { swipe?: boolean }).swipe, true, `${sectionId(s)} has no swipe flag`);
  }
});

test('the reading section carries questionsInModal WITH questions', () => {
  if (noSeed) return;
  // That is the only path that reaches PassagePage, and so the only path that
  // draws the glossary underlines. a1.01 shipped five entries down the other
  // path and they were never rendered.
  for (const s of L!.sections.filter((x) => x.type === 'reading')) {
    const r = s as { questionsInModal?: boolean; questions?: unknown[]; glossary?: unknown[] };
    strictEqual(r.questionsInModal, true, `${sectionId(s)} has no questionsInModal`);
    ok((r.questions ?? []).length > 0, `${sectionId(s)} has questionsInModal and no questions`);
  }
});

test('the reading passage is one block with no authored newline', () => {
  if (noSeed) return;
  // PassagePage splits on /(?<=[.!?»])\s+/, so an authored newline is consumed
  // as whitespace and silently discarded. A passage written with line breaks
  // renders as one paragraph and the author never finds out.
  for (const s of L!.sections.filter((x) => x.type === 'reading')) {
    ok(!(s as { text: string }).text.includes('\n'), `${sectionId(s)}'s passage carries a newline`);
  }
});

test('every glossary entry can actually underline something', () => {
  if (noSeed) return;
  // Through the REAL segmentSentence, comparing matched KEYS rather than
  // matched text. Longest-match-first means a short entry sitting inside a
  // longer one underlines nothing, and a1.08 shipped two such entries that
  // passed its own test because that test compared text.
  for (const s of L!.sections.filter((x) => x.type === 'reading')) {
    const r = s as { text: string; glossary?: { word: string; en: string }[] };
    const gloss = r.glossary ?? [];
    if (!gloss.length) continue;
    // COMPARES BY MATCHED KEY, not by matched text. gloss.logic.ts resolves
    // longest-match-first, so a shorter entry sitting inside a longer one
    // underlines nothing while its TEXT still appears in the winning segment.
    // a1.08's first test compared text and reported two dead entries as found.
    const keys = new Set(gloss.flatMap((g) => glossKeys(g.word)).filter(Boolean));
    const hit = new Set(segmentSentence(r.text, keys).filter((x) => x.key).map((x) => x.key!));
    const unmatched = gloss.filter((g) => !glossKeys(g.word).some((k) => hit.has(k)));
    strictEqual(
      unmatched.length, 0,
      `glossary entries that underline nothing, because a longer entry always wins: ${unmatched.map((g) => `"${g.word}"`).join(', ')}`
    );
  }
});

test('no more than three term chips on any section', () => {
  if (noSeed) return;
  // The renderer shows three and collapses the rest. Seven sons.06 sections
  // declare more and the fourth chip onward has never been visible.
  for (const s of L!.sections) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${sectionId(s)} declares ${t.length} term chips`);
  }
});

test('every declared term is used by at least one section', () => {
  if (noSeed) return;
  const declared = Object.keys(L!.terms ?? {});
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const k of declared) ok(used.has(k), `term "${k}" is defined and surfaced nowhere`);
  for (const k of used) ok(declared.includes(k), `section chip "${k}" names an undefined term`);
});

test('every term example resolves to a real item', () => {
  if (noSeed) return;
  for (const [key, t] of Object.entries(L!.terms ?? {})) {
    for (const ex of t.examples ?? []) {
      ok(ITEMS.has(ex.itemId), `term "${key}" cites ${ex.itemId}, which is not in the seed`);
    }
  }
});

/* ══ 10. Tranches ════════════════════════════════════════════════════════ */

test('the tranches release every taught item exactly once and nothing untaught', () => {
  if (noSeed) return;
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length, 'one tranche per act');
  const flat = tranches.flat();
  strictEqual(new Set(flat).size, flat.length, 'an item is released by two tranches, so the SRS would rate it twice');
  const taught = new Set(L!.itemIds);
  for (const id of flat) ok(taught.has(id), `tranche releases ${id}, which the lesson does not teach`);
  for (const id of taught) ok(flat.includes(id), `${id} is taught and released by no tranche, so it never reaches spaced repetition`);
});

test('no tranche releases an item the acts before it have not shown', () => {
  if (noSeed) return;
  // A card released before its mission is a card the learner is asked to rate
  // before they have met it. a1.08 shipped exactly that and had to move five.
  const acts = L!.acts ?? [];
  const tranches = L!.deckTranche ?? [];
  for (let a = 0; a < tranches.length; a++) {
    const seenSoFar = acts.slice(0, a + 1).flatMap((act) => act.sections);
    const surface = L!.sections.filter((s) => seenSoFar.includes(sectionId(s)));
    const body = strings(surface).join('\n');
    for (const id of tranches[a]) {
      const row = ITEMS.get(id);
      ok(
        body.includes(id) || (row && body.includes(row.fr)),
        `act ${a + 1} releases ${id} ("${row?.fr}"), which no section up to that act shows`
      );
    }
  }
});

/* ══ 11. The corpus this lesson names ════════════════════════════════════ */

test('no theme holds the same word twice after this lesson', () => {
  if (noSeed) return;
  // Computed the way flashhub-coverage.test.ts computes it: article stripped,
  // sentences exempt, non-vocab cardTypes exempt. This is the check that would
  // have fired had the brief's instruction to author « Quel temps fait-il ? »
  // been followed, because fr.a1.meteo.183 already carries it.
  const norm = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const mine = new Set(L!.itemIds);
  const seen = new Map<string, string>();
  const dupes: string[] = [];
  for (const it of seed.items) {
    if (it.kind === 'sentence') continue;
    if ((it.cardType ?? 'vocab') !== 'vocab') continue;
    const k = `${it.theme}::${norm(it.fr)}`;
    const prior = seen.get(k);
    if (prior && (mine.has(it.id) || mine.has(prior))) dupes.push(`${prior} vs ${it.id} ("${it.fr}")`);
    else if (!prior) seen.set(k, it.id);
  }
  strictEqual(dupes.length, 0, `duplicate words involving this lesson: ${dupes.join(' | ')}`);
});

test('nothing this lesson brought into the seed joins a1.03 ending population', () => {
  if (noSeed || noSrc) return;
  // THE REAL FUNCTION. a1.08 shipped a hand-rolled copy carrying a
  // `level === 'a1'` filter the real one does not have, let four rows through,
  // and moved two of a1.03's printed cards.
  //
  // This is why fifteen rows are display strings rather than corpus rows.
  // Measured: importing them moves -age, -té, -ie, -e, -on, -ps and -er.
  const mine = SRC_IMPORTED.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags ?? [] }));
  const pop = endingPopulation(mine);
  strictEqual(pop.length, 0, `rows joining a1.03's population: ${pop.map((i) => `${i.id} "${i.fr}"`).join(', ')}`);
});

test('the fifteen withdrawn rows really are absent from the seed', () => {
  if (noSeed || noSrc) return;
  // The reasoning above cannot be allowed to rot into a comment describing
  // something that stopped being true.
  strictEqual(SRC_WITHDRAWN.length, 15, 'the measured withdrawal set is fifteen rows');
  for (const id of SRC_WITHDRAWN) {
    ok(!L!.itemIds.includes(id), `${id} is withdrawn and this lesson names it anyway`);
  }
});

test('every withdrawn word is still SHOWN as a display string', () => {
  if (noSeed || noSrc) return;
  // Withdrawing a row from spaced repetition is not the same as dropping the
  // word. All fifteen are on cards; what they lose is an SRS entry.
  const learner = strings(L!.sections).concat(strings(L!.sheets ?? [])).join('\n');
  const words = ['le vent', 'la pluie', 'la neige', 'le soleil', "l'orage", 'le brouillard', 'la météo', 'le degré', 'la saison', 'le ciel', 'un nuage', 'le printemps', "l'été", "l'automne", "l'hiver"];
  for (const w of words) {
    ok(learner.includes(w), `"${w}" was withdrawn from the seed AND is shown nowhere, so the lesson simply lost it`);
  }
});

test('the imported manifest matches what the seed actually holds', () => {
  if (noSeed || noSrc) return;
  for (const it of SRC_IMPORTED) {
    const row = ITEMS.get(it.id);
    ok(row, `${it.id} is in the manifest and not in the seed`);
    strictEqual(row!.fr, it.fr, `${it.id}: manifest "${it.fr}", seed "${row!.fr}"`);
    strictEqual(row!.theme, it.theme, `${it.id}: theme drift`);
  }
});

test('every reused row is in the seed with the text this lesson claims', () => {
  if (noSeed || noSrc) return;
  for (const r of SRC_REUSED) {
    const row = ITEMS.get(r.id);
    ok(row, `${r.id} is named as reused and is not in the seed`);
    strictEqual(row!.fr, r.fr, `${r.id}: this lesson says "${r.fr}", the seed says "${row!.fr}"`);
    ok(r.why.length > 20, `${r.id} is reused with no stated reason`);
  }
});

test('this lesson authors nothing, which is the finding', () => {
  if (noSrc) return;
  // Every id it names belongs to another theme's batch or was already in the
  // seed. If a future rebuild starts authoring rows, this test should be
  // deleted DELIBERATELY rather than quietly, because "0 authored" is the
  // headline result of this build and the reason the brief's absence claim was
  // caught.
  const authoredHere = SRC_IMPORTED.filter((i) => i.id.startsWith('fr.a1.meteo.') && Number(i.id.split('.').pop()) > 320);
  strictEqual(authoredHere.length, 0, `new meteo ids: ${authoredHere.map((i) => i.id).join(', ')}`);
});

/* ══ 12. The exam ════════════════════════════════════════════════════════ */

const QUIZ = () => {
  const s = L!.sections.find((x) => x.type === 'quiz');
  return s && s.type === 'quiz' ? s : null;
};

test('at most half the exam is mcq', () => {
  if (noSeed) return;
  const qs = quizQuestions(QUIZ()!);
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} are mcq`);
});

test('every question carries a why and a ref that resolves', () => {
  if (noSeed) return;
  const qs = quizQuestions(QUIZ()!);
  const ids = new Set(L!.sections.map(sectionId));
  for (const q of qs) {
    ok(q.why, `no why: ${q.q}`);
    ok(q.ref, `no ref: ${q.q}`);
    ok(ids.has(q.ref!), `ref "${q.ref}" names no section`);
  }
});

test('every free-text question accepts the answer it displays', () => {
  if (noSeed) return;
  // Through the REAL matchesAccept. A question whose own canonical answer is
  // rejected marks a correct learner wrong.
  const qs = quizQuestions(QUIZ()!);
  for (const q of qs) {
    if (!q.answer) continue;
    ok(matchesAccept(q.answer, q.accept), `"${q.q}" displays "${q.answer}" and does not accept it`);
  }
});

test('correct answers do not cluster in one option slot', () => {
  if (noSeed) return;
  const qs = quizQuestions(QUIZ()!).filter((q) => typeof q.correct === 'number');
  const counts = new Map<number, number>();
  for (const q of qs) counts.set(q.correct as number, (counts.get(q.correct as number) ?? 0) + 1);
  for (const [slot, n] of counts) {
    ok(n / qs.length <= 0.4, `slot ${slot} holds ${n}/${qs.length} correct answers, over the 40% limit`);
  }
});

test('no listenChoose question is built on il pleut against il pleure', () => {
  if (noSeed) return;
  // The brief: it is a real minimal pair and the corpus holds ONE « il pleure »
  // sentence in Postgres and NONE in the seed, so a round on it would be
  // teaching from a single unsupported line. Checked over the whole quiz.
  for (const q of quizQuestions(QUIZ()!)) {
    ok(!strings(q).some((s) => hasWord(s.toLowerCase(), 'pleure')), `a quiz question uses « pleure »: ${q.q}`);
  }
  // And the corpus really does not support it, so the reason cannot go stale.
  //
  // Measured on « il pleure » rather than on the bare word: the seed holds
  // three `pleure` rows and every one is « Le bébé pleure ... », which is not
  // the minimal pair at all. Counting the bare word would report the decision
  // as revisitable on evidence that has nothing to do with it.
  const pleure = seed.items.filter((i) => i.fr.toLowerCase().includes('il pleure'));
  strictEqual(pleure.length, 0, `the seed now holds ${pleure.length} « il pleure » rows; the decision could be revisited`);
});

test('listenChoose is used where the ear actually fails', () => {
  if (noSeed) return;
  // The brief: "listenChoose has one job and it is not the seasons. The four
  // season names sound nothing like each other. Use it on il fait against il a
  // and against il est."
  const lc = quizQuestions(QUIZ()!).filter((q) => q.format === 'listenChoose');
  ok(lc.length > 0, 'no listenChoose question at all');
  for (const q of lc) {
    const opts = (q.opts ?? []).join(' ').toLowerCase();
    const onFrames = opts.includes('il fait') || opts.includes('il a') || opts.includes('il est') || opts.includes('person');
    ok(onFrames, `a listenChoose question is not on the frames: ${q.q}`);
    const onSeasons = THE_FOUR.filter((s) => opts.includes(s)).length;
    ok(onSeasons < 2, `a listenChoose question asks the learner to separate season names by ear: ${q.q}`);
  }
});

test('every frame question puts a situation in the stem', () => {
  if (noSeed) return;
  // The brief: "Every question about a frame needs a situation in the stem.
  // 'il fait or j'ai?' has no answer without context."
  const qs = quizQuestions(QUIZ()!);
  const framey = qs.filter((q) => {
    const opts = (q.opts ?? []).join(' ').toLowerCase();
    return opts.includes("j'ai") || opts.includes('je suis');
  });
  ok(framey.length > 0, 'no question asks the learner to choose a frame');
  for (const q of framey) {
    ok(q.q.length > 60, `a frame question has no situation in its stem: "${q.q}"`);
  }
});

/* ══ 13. Drills and triggers ═════════════════════════════════════════════ */

test('every teaching drill is the FIRST resolving target of exactly one round', () => {
  if (noSeed) return;
  // drillForRound walks a round's targets and fires the drill of the FIRST one
  // that resolves, then stops. A drill named only in second place is dead
  // content. a1.05 shipped two and a first draft of a1.07 a third.
  const drillFor = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const rounds = QUIZ()!.rounds ?? [];
  strictEqual(rounds.length, EXPECTED_ROUNDS);
  strictEqual((L!.errorTriggers ?? []).length, EXPECTED_TRIGGERS);
  const leads: string[] = [];
  for (const r of rounds) {
    const lead = (r.targets ?? []).find((t) => drillFor.has(t));
    ok(lead, `round ${r.id} names no target that resolves to a drill`);
    ok(!leads.includes(lead!), `round ${r.id} leads on "${lead}", which another round already leads on`);
    leads.push(lead!);
  }
  const fired = new Set(leads.map((t) => drillFor.get(t)!));
  const teaching = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  strictEqual(teaching.length, EXPECTED_TEACHING_DRILLS);
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  strictEqual(orphans.length, 0, `drills no round can fire: ${orphans.join(', ')}`);
});

test('every trigger names a drill, a retest and sections that exist', () => {
  if (noSeed) return;
  const known = new Set((L!.drills ?? []).map((d) => d.id));
  const ids = new Set(L!.sections.map(sectionId));
  for (const t of L!.errorTriggers ?? []) {
    ok(known.has(t.drill), `trigger ${t.id} names drill "${t.drill}", which is not authored`);
    if (t.retest) ok(known.has(t.retest), `trigger ${t.id} names retest "${t.retest}", which is not authored`);
    for (const d of t.detectOn) ok(ids.has(d.split('/')[0]), `trigger ${t.id} detects on "${d}"`);
  }
});

test('every sort drill names item ids rather than display strings', () => {
  if (noSeed) return;
  // A drill scores against the corpus, so it plays the same audio and reads the
  // same spelling as every other card that teaches these. Passing display
  // strings validates as broken ids.
  for (const d of L!.drills ?? []) {
    for (const item of (d as { items?: string[] }).items ?? []) {
      ok(ITEMS.has(item), `drill ${d.id} names "${item}", which is not an item id`);
    }
  }
});

/* ══ 14. Production: the dictée and the mic ══════════════════════════════ */

test('every dictation target carries the dictation drill', () => {
  if (noSeed || noSrc) return;
  for (const id of SRC_DICTATION) {
    const row = ITEMS.get(id);
    ok(row, `dictée names ${id}, which is not in the seed`);
    ok(row!.drills.includes('dictation'), `${id} carries no dictation drill`);
  }
});

test('the dictée spells all three frames', () => {
  if (noSeed || noSrc) return;
  // Otherwise it tests spelling rather than this lesson's own decision.
  const t = SRC_DICTATION.map((id) => ITEMS.get(id)!.fr.toLowerCase()).join('\n');
  ok(t.includes('il fait'), 'the dictée never spells the weather frame');
  ok(t.includes(' a froid') || t.includes("j'ai"), 'the dictée never spells the avoir frame');
  ok(t.includes(' est froid') || t.includes(' est chaud'), 'the dictée never spells the être frame');
});

test('the dictée modes are what the real dicteeMode says', () => {
  if (noSeed || noSrc) return;
  // Through the REAL dicteeMode and wordDecoys rather than against a restated
  // length threshold. A shortened `fr` upstream would quietly move a target
  // between modes and nothing would say so.
  const words = SRC_DICTATION.filter((id) => dicteeMode(ITEMS.get(id)!.fr) === 'words');
  ok(words.length > 0, 'no word-mode dictée target, so no decoy is ever offered');
  for (const id of words) {
    ok(wordDecoys(ITEMS.get(id)!.fr).length > 0, `${id} is word mode and offers no decoy`);
  }
});

test('every speak item carries voiceflash', () => {
  if (noSeed || noSrc) return;
  // An item without it renders as a card the learner cannot be scored on, which
  // looks like a broken mission rather than a missing tag.
  for (const id of SRC_SPEAK) {
    const row = ITEMS.get(id);
    ok(row, `speak mission names ${id}, which is not in the seed`);
    ok(row!.drills.includes('voiceflash'), `${id} carries no voiceflash drill`);
  }
});

test('il pleut is produced somewhere, even though it cannot be in the speak mission', () => {
  if (noSeed) return;
  // fr.a1.meteo.006 carries `flashcard` only and cardType 'conjugation', and
  // the only voiceflash « il pleut » in the corpus is B1. That is a real
  // constraint found in the database rather than a design choice, so the
  // production of it moved to the quiz, whose `speak` format takes a display
  // string rather than an id. If that question is ever dropped, the learner
  // never says one of the four shapes out loud.
  const qs = quizQuestions(QUIZ()!);
  const spoken = qs.filter((q) => q.format === 'speak').map((q) => (q.target ?? '').toLowerCase());
  ok(spoken.some((t) => t.includes('il pleut')), 'nothing in the lesson asks the learner to say « il pleut »');
});

/* ══ 15. The four shapes ═════════════════════════════════════════════════ */

test('all four weather shapes are taught, and none is merged into another', () => {
  if (noSeed || noSrc) return;
  strictEqual(SRC_SHAPES.length, 4, 'four shapes');
  const learner = strings(L!.sections).concat(strings(L!.sheets ?? [])).join('\n');
  for (const shape of SRC_SHAPES) {
    for (const frame of shape.frames) {
      ok(learner.includes(frame), `the frame "${frame}" from shape "${shape.key}" is shown nowhere`);
    }
  }
});

test('the overlap between il fait du and il y a du is stated out loud', () => {
  if (noSeed) return;
  // The brief: "Shapes 2 and 4 overlap legitimately: il fait du vent and il y a
  // du vent are both correct and both natural. Say so, because a learner who
  // meets both and is not told will assume one is wrong."
  const learner = strings(L!.sections).join('\n').toLowerCase();
  ok(learner.includes('il fait du vent') && learner.includes('il y a du vent'), 'both forms are not shown');
  ok(
    learner.includes('both are') || learner.includes('both mean the same') || learner.includes('neither is preferred'),
    'the lesson shows both forms and never says they are both correct'
  );
});

test('il fait pleut is named as the trap it is', () => {
  if (noSeed) return;
  // The predictable error is welding shape 1 onto shape 3, and the brief says
  // it deserves a commonErrors card. It also must never be an accepted answer.
  const all = strings(L!).join('\n').toLowerCase();
  ok(all.includes('il fait pleut'), 'the error a learner produces after this lesson is never named');
  for (const q of quizQuestions(QUIZ()!)) {
    for (const a of [q.answer ?? '', ...(q.accept ?? [])]) {
      ok(!a.toLowerCase().includes('il fait pleut'), `an accepted answer is "${a}"`);
    }
    if (q.format === 'mcq' || q.format === 'listenChoose') {
      ok(!(q.opts?.[q.correct as number] ?? '').toLowerCase().includes('il fait pleut'), 'a correct option is il fait pleut');
    }
  }
});

/* ══ 16. House style ═════════════════════════════════════════════════════ */

test('no em dash anywhere in the lesson', () => {
  if (noSeed) return;
  ok(!JSON.stringify(L!).includes('—'), 'em dash found');
});

test('no "honest" anywhere in the lesson', () => {
  if (noSeed) return;
  ok(!/honest/i.test(JSON.stringify(L!)), '"honest" found');
});

test('no U+203F tie character, which renders as an underscore on a Pixel 6', () => {
  if (noSeed) return;
  // Four rows this lesson imports carry the tie in their own `ipa`. It is
  // shipped content and is left alone; what matters is that the LESSON never
  // displays it, which it does not because every transcription on a screen
  // comes from the corpus file's RESPELL table.
  ok(!JSON.stringify(L!).includes('‿'), 'U+203F found in the lesson body');
});

test('no grammar jargon reaches a learner surface', () => {
  if (noSeed) return;
  const learner = strings(L!.sections).concat(strings(L!.sheets ?? []), strings(L!.terms ?? {}));
  const bad = learner.filter((s) => /\b(conjugaison|article (défini|indéfini|partitif)|adjectif ordinal|préposition|complément circonstanciel|masculin|féminin|déterminant|verbe impersonnel)\b/i.test(s));
  strictEqual(bad.length, 0, bad.slice(0, 2).join(' | '));
});

test('the reframe is authored verbatim the exact number of times', () => {
  if (noSeed || noSrc) return;
  // Against an EXPLICIT constant, not a figure derived from the lesson: a
  // derived count compares the content to itself and passes on any rewording.
  const REFRAME_APPEARANCES = 14;
  strictEqual(L!.reframe, 'Weather makes, people have, things are.');
  strictEqual(strings(L!).filter((s) => s.includes(L!.reframe!)).length, REFRAME_APPEARANCES);
  // And it really is on at least three SECTIONS, which is what the density
  // validator requires of a v2 lesson.
  const carrying = L!.sections.filter((s) => strings(s).some((x) => x.includes(L!.reframe!)));
  ok(carrying.length >= 3, `only ${carrying.length} sections carry the reframe`);
});

/* ══ 17. Audio briefs, which cannot be recovered once a clip is delivered ═ */

test('the contrast recordings say they are ONE take', () => {
  if (noSeed) return;
  // A constraint on how something is recorded becomes invisible the moment the
  // clip arrives. Anything the learner must hear AS A CONTRAST is one take with
  // one voice, because two recordings are two performances and the learner will
  // hear the performance rather than the language.
  const recs = L!.audio?.recorded ?? [];
  const frames = recs.find((r) => r.id === 'rec-a1-10-frames');
  ok(frames, 'no recording brief for the three frames');
  ok(/ONE TAKE/i.test(frames!.desc), 'the three-frame brief does not require one take');
  ok(/CONSECUTIVELY/i.test(frames!.desc), 'the three-frame brief does not require the three to be consecutive');

  const collision = recs.find((r) => r.id === 'rec-a1-10-collision');
  ok(collision, 'no recording brief for the personal-il pair');
  ok(/ADJACENT/i.test(collision!.desc), 'the collision brief does not require the pair to be adjacent');

  const seasons = recs.find((r) => r.id === 'rec-a1-10-seasons');
  ok(seasons, 'no recording brief for the seasons');
  ok(/CALENDAR ORDER/i.test(seasons!.desc), 'the season brief does not fix the order');
  ok(/PREPOSITION ATTACHED/i.test(seasons!.desc), 'the season brief does not require the small word to be in the take');
  ok(/SLOWLY ONCE IN ISOLATION/i.test(seasons!.desc), 'the season brief does not ask for automne alone');
  ok(/SILENT/i.test(seasons!.desc), 'the season brief does not warn that the m in automne is silent');
});

/* ══ 18. Seed parity: the two copies say the same thing ══════════════════ */

test('the seed lesson is the authored lesson', () => {
  if (noSeed || noSrc) return;
  // Every figure DERIVED from the authored source rather than restated, so this
  // cannot pass by agreeing with a number somebody typed twice.
  strictEqual(L!.sections.length, SRC!.sections.length);
  strictEqual(L!.itemIds.length, SRC!.itemIds.length);
  strictEqual((L!.acts ?? []).length, (SRC!.acts ?? []).length);
  strictEqual((L!.drills ?? []).length, (SRC!.drills ?? []).length);
  strictEqual((L!.sheets ?? []).length, (SRC!.sheets ?? []).length);
  strictEqual((L!.errorTriggers ?? []).length, (SRC!.errorTriggers ?? []).length);
  strictEqual(L!.reframe, SRC_REFRAME);
  strictEqual(L!.version, SRC!.version);
  strictEqual(JSON.stringify(L!.sections.map(sectionId)), JSON.stringify(SRC!.sections.map(sectionId)));
  strictEqual(JSON.stringify(L!.itemIds), JSON.stringify(SRC_ITEM_IDS));
  strictEqual(JSON.stringify(L!.deckTranche), JSON.stringify(SRC_TRANCHES));
  strictEqual(quizQuestions(QUIZ()!).length, quizQuestions(SRC!.sections.find((s) => s.type === 'quiz') as never).length);
});

test('the four season frames the source declares are the four the seed holds', () => {
  if (noSeed || noSrc) return;
  strictEqual(SRC_FOUR.length, 4);
  strictEqual(JSON.stringify([...SRC_FOUR]), JSON.stringify([...THE_FOUR]));
  for (const s of THE_FOUR) strictEqual(SRC_FRAME[s], FRAME[s], `the source says ${s} takes "${SRC_FRAME[s]}"`);
});

test('the source list of faire forms is the one this file checks', () => {
  if (noSrc) return;
  // If the source list is trimmed, this test fails rather than the guard
  // quietly checking a shorter list than it says it does.
  for (const f of FAIRE_FORMS) ok(SRC_FAIRE.includes(f), `the source no longer refuses "${f}"`);
});
