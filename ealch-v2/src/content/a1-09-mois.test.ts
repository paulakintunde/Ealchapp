// Guards a1.09.l1 "Les mois de l'année".
//
// This lesson has one failure mode that matters more than all the others, and it
// is not a crash: it is THE CONTRAST DECAYING BACK INTO A WORD LIST.
//
// The canDo has two clauses and they are unequal. "Can name the months" is
// twelve words with no pattern behind them; "and give a date" is the lesson, and
// the whole of it is which small word goes in front. A rewrite that keeps the
// twelve names, keeps a tidy deck, and loses the surface that shows « en juin »
// AND « le douze juin » TOGETHER would read fine in review, ship, and leave a
// learner with a flashcard deck. So the assertion that earns its place here is
// "some production surface shows a bare month beside a full date on the same
// screen", and it is the one below worth the most. The brief asks for exactly
// it: "assert that at least one section shows a bare month and a full date
// together, not on separate screens. That contrast is the lesson, and separating
// it is how the lesson decays into a word list."
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
// the twelve, the nine pairs and the six triggers: those numbers are the SHAPE
// of the lesson rather than a measurement of it, and a later trim that quietly
// drops one is exactly what this file exists to stop.
//
// Nothing here reimplements app logic. `fold`, `matchesAccept`, `dicteeMode`,
// `wordDecoys`, `glossKeys`, `segmentSentence`, `hasPlainNasalFor` and
// `validateDensity` are all imported from the modules the app itself runs. An
// earlier version of a1.01's test inlined its own glossary lookup, copied the
// version that was already broken, and passed while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { canonicalJson, quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity, formatDensity } from './density.logic.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode, wordDecoys } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; lessonIds: string[]; themes?: unknown; canDo?: string; sub?: string; title?: string }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; ipa?: string; drills: string[]; cardType?: string; gender?: string }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.09.l1');
// Before the batch and the merge have run, the seed has no a1.09.l1 and every
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
let SRC_MONTH_IDS: string[] = [];
let SRC_TWELVE: readonly string[] = [];
let SRC_PAIRS: [string, string][] = [];
let SRC_PAIR_MONTHS: string[] = [];
let SRC_MONTH_FRAMES: string[] = [];
let SRC_DATE_FRAMES: string[] = [];
let SRC_CHUNKS: string[] = [];
let SRC_CORPUS: { id: string; fr: string; en: string; side: string; month: string; chunk?: boolean; pairWith?: string; drills: string[]; theme: string }[] = [];
let SRC_RESPELL: Record<string, { fr: string; respell: string; ipa: string }> = {};
let SRC_REPAIRS: { id: string; fr: string; from: string; to: string }[] = [];
let SRC_IMPORTED: { id: string; fr: string; en: string; theme: string; kind: string; level: string; drills: string[]; respell?: string }[] = [];
let SRC_WITHDRAWN: string[] = [];
let SRC_SEASONS: string[] = [];
let SRC_DAYS: string[] = [];
try {
  const lesson = await import('../../../ealch-admin/scripts/data/mois-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/mois-corpus.ts');
  SRC = lesson.MOIS_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_SPEAK = lesson.MOIS_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.MOIS_DICTATION_IDS as string[];
  SRC_MONTH_IDS = lesson.MOIS_MONTH_IDS as string[];
  SRC_SEASONS = lesson.SEASON_WORDS as string[];
  SRC_DAYS = lesson.DAY_WORDS as string[];
  SRC_TWELVE = corpus.THE_TWELVE as readonly string[];
  SRC_PAIRS = corpus.CONTRAST_PAIRS as [string, string][];
  SRC_PAIR_MONTHS = corpus.PAIR_MONTHS as string[];
  SRC_MONTH_FRAMES = corpus.PAIR_MONTH_FRAMES as string[];
  SRC_DATE_FRAMES = corpus.PAIR_DATE_FRAMES as string[];
  SRC_CHUNKS = corpus.CHUNK_IDS as string[];
  SRC_CORPUS = corpus.MOIS as typeof SRC_CORPUS;
  SRC_RESPELL = corpus.RESPELL as typeof SRC_RESPELL;
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as typeof SRC_REPAIRS;
  SRC_IMPORTED = corpus.IMPORTED as typeof SRC_IMPORTED;
  SRC_WITHDRAWN = corpus.WITHDRAWN_IDS as string[];
} catch {
  // Not available; the source-derived tests below no-op.
}
const noSrc = !SRC;

/** The twelve, as a literal. This is one of three hardcoded sets in the file and
 *  it is deliberate: twelve is the SHAPE of the year rather than a measurement
 *  of the content, and a lesson that quietly taught eleven is exactly what this
 *  guards. Deriving it from the lesson would be circular. */
const MONTHS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
] as const;

/** The seven days, likewise literal, because they are what this lesson must NOT
 *  teach: they belong to a1.08 and it has them. */
const DAYS = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'] as const;

/** The five whose respelling carries a nasal. `hasPlainNasalFor` sees only two
 *  of them, which is why the other three are named. */
const NASAL_MONTHS = ['janvier', 'juin', 'septembre', 'novembre', 'décembre'] as const;

/** Every authored string in a value. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** Whole-word containment that never builds a regex out of the needle. The
 *  brief's warning applies to this file too: "A regex assembled from a string
 *  can silently become something else, and a query that returns zero looks
 *  exactly like an absence." */
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
 *  a test that fires on correct content is a test the next author deletes. */
function productionStrings(): string[] {
  const skip = new Set(['id', 'type', 'render', 'layer', 'size', 'itemId', 'itemIds', 'items', 'ref', 'recordingId', 'sheetId', 'terms', 'accept', 'clipIds', 'detectOn', 'drill', 'retest', 'desc', 'ipa']);
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
  walk(L!.sections);
  walk(L!.sheets ?? []);
  walk(L!.terms ?? {});
  return out;
}

/** The surfaces a learner PRODUCES from: decks, vocabulary, review and the exam.
 *  A reading passage is deliberately excluded, because a day name inside a full
 *  French date is legitimate context there and a check that fired on it would be
 *  correct-content-failing and would get deleted. The brief asks for the
 *  assertion to be written this way. */
function producedStrings(): string[] {
  return [
    ...strings(L!.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
    ...strings(L!.drills ?? []),
    ...strings(theQuiz()),
  ];
}

/* ─── The lesson exists and is wired ───────────────────────────────────────── */

test('a1.09.l1 exists in the seed and is well formed', () => {
  if (noSeed) return;
  strictEqual(validateLesson(L!, L!.id).length, 0, 'schema issues on a1.09.l1');
  strictEqual(L!.unitId, 'a1.09');
  strictEqual(L!.level, 'a1');
});

test('the a1.09 unit links the lesson, so the Den can reach it', () => {
  if (noSeed) return;
  const u = seed.units.find((x) => x.id === 'a1.09');
  ok(u, 'unit a1.09 is missing from the seed');
  ok(u!.lessonIds.includes('a1.09.l1'), 'the unit does not link its lesson, so no learner can open it');
});

test('the unit keeps the promise the Den advertises', () => {
  if (noSeed) return;
  const u = seed.units.find((x) => x.id === 'a1.09')!;
  strictEqual(u.title, 'Months of the Year');
  strictEqual(u.sub, 'Les mois de l’année');
  strictEqual(u.canDo, 'Can name the months and give a date');
});

test('the eyebrow the header draws agrees with the one stored on the lesson', () => {
  if (noSeed) return;
  // missions.ts derives the eyebrow from unit.seq at render time. a1.03 shipped
  // LEÇON 03 at seq 5 and the header above it drew LEÇON 05.
  const u = seed.units.find((x) => x.id === 'a1.09')!;
  strictEqual(L!.tag, `A1 · LEÇON ${String(u.seq).padStart(2, '0')}`);
});

test('the unit is bound to a theme that exists and holds something', () => {
  if (noSeed) return;
  // The unit shipped with themes ["temps","calendrier"], both of which resolve
  // to zero items in both copies. The brief offers creating `calendrier`;
  // a1.08 had already found and bound `jours-et-mois`, which holds the days AND
  // the months, and this lesson takes the same binding.
  const u = seed.units.find((x) => x.id === 'a1.09')!;
  const themes = (u.themes ?? []) as string[];
  ok(Array.isArray(themes) && themes.length > 0, 'a1.09 has no theme binding at all');
  for (const t of themes) {
    const n = seed.items.filter((i) => i.theme === t).length;
    ok(n > 0, `unit a1.09 is bound to theme "${t}", which holds no items in the seed`);
  }
  ok(themes.includes('jours-et-mois'), 'a1.09 is no longer bound to jours-et-mois, which is the theme holding the twelve months');
  ok(!themes.includes('temps') && !themes.includes('calendrier'), 'the dead binding is back');
});

/* ─── The spine ────────────────────────────────────────────────────────────── */

test('the journey opens on a scene and closes quiz then roundup', () => {
  if (noSeed) return;
  const types = L!.sections.map((s) => s.type);
  strictEqual(types[0], 'scene', 'the lesson no longer opens on the scene');
  strictEqual(types[types.length - 2], 'quiz');
  strictEqual(types[types.length - 1], 'roundup');
});

test('the spine is in the order it was authored in', () => {
  if (noBothOrSkip()) return;
  strictEqual(
    L!.sections.map((s) => (s as { id?: string }).id).join(' '),
    SRC!.sections.map((s) => (s as { id?: string }).id).join(' '),
    'the seed spine and the authored spine are in different orders'
  );
});

test('exactly one quiz section, because the pager renders only the first', () => {
  if (noSeed) return;
  // lessonPager.logic.ts appends exactly one quiz page, resolved with
  // sections.find(s => s.type === 'quiz'). a1.01 shipped 12 questions in a
  // second quiz section that no learner has ever reached.
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1);
});

test('every act names sections that exist, and every section belongs to exactly one act', () => {
  if (noSeed) return;
  const acts = L!.acts ?? [];
  ok(acts.length > 0, 'no acts, so the lesson is not a v2 lesson and skips density validation entirely');
  const known = new Set(sectionIds());
  const claimed = new Map<string, string>();
  for (const a of acts) {
    for (const id of a.sections) {
      ok(known.has(id), `act ${a.id} names section "${id}", which does not exist`);
      const already = claimed.get(id);
      ok(!already, `section "${id}" is claimed by both ${already} and ${a.id}`);
      claimed.set(id, a.id);
    }
  }
  const orphan = sectionIds().filter((id) => !claimed.has(id));
  strictEqual(orphan.length, 0, `section(s) in no act: ${orphan.join(', ')}`);
});

test('the acts weight the frames over the twelve names', () => {
  if (noSeed) return;
  // The argument of the lesson, asserted. The brief is explicit: "Weight the
  // acts toward the two frames and the sound traps, not toward the twelve
  // names. If naming the months is done in three missions, that is correct; do
  // not stretch it to six because there are twelve of them."
  const acts = L!.acts ?? [];
  const naming = acts.find((a) => a.id === 'act2');
  ok(naming, 'act2, the naming act, is gone');
  ok(
    naming!.sections.length <= 3,
    `act2 spends ${naming!.sections.length} missions naming the months; three is the ceiling the brief sets`
  );
  const frames = acts.filter((a) => ['act3', 'act4'].includes(a.id)).flatMap((a) => a.sections).length;
  ok(
    frames > naming!.sections.length,
    `the frames get ${frames} missions and the names get ${naming!.sections.length}; the lesson has inverted its own weighting`
  );
});

test('the journey is multimodal: it reads, listens, speaks, writes and role-plays', () => {
  if (noSeed) return;
  const types = new Set(L!.sections.map((s) => s.type));
  for (const t of ['reading', 'listening', 'practice', 'dictation', 'scenario']) {
    ok(types.has(t as LessonSection['type']), `the journey has no ${t} mission`);
  }
});

test('every mission carries its French subtitle', () => {
  if (noSeed) return;
  const missing = L!.sections.filter((s) => !(s as { frSub?: string }).frSub);
  strictEqual(missing.length, 0, `mission(s) with no frSub: ${missing.map((s) => (s as { id?: string }).id).join(', ')}`);
});

/* ─── The reframe ──────────────────────────────────────────────────────────── */

test('the reframe appears verbatim exactly as often as it was authored', () => {
  if (noBothOrSkip()) return;
  const inSeed = strings(L!).filter((s) => s.includes(SRC_REFRAME)).length;
  const inSrc = strings(SRC!).filter((s) => s.includes(SRC_REFRAME)).length;
  strictEqual(inSeed, inSrc, 'the seed and the source carry the reframe a different number of times');
  ok(inSeed >= 3, `the reframe appears ${inSeed} times; the density validator requires three`);
  strictEqual(L!.reframe, SRC_REFRAME, 'the lesson-level reframe field has drifted from the authored one');
});

test('the reframe names BOTH frames, because both errors are common', () => {
  if (noSeed) return;
  // A reframe that only forbade one direction would remediate one of the two
  // errors. « en douze mars » and « le janvier » are equally common and the
  // second arrives after the first is fixed.
  const r = (L!.reframe ?? '').toLowerCase();
  ok(hasWord(r, 'en'), `the reframe "${L!.reframe}" does not name the month frame`);
  ok(hasWord(r, 'le'), `the reframe "${L!.reframe}" does not name the date frame`);
});

/* ─── All twelve are taught, and each is asserted BY NAME ──────────────────── */

test('all twelve months are taught, each by name, on a surface a learner reads', () => {
  if (noSeed) return;
  // Asserted INDIVIDUALLY rather than as a count of twelve, which is what the
  // brief asks for. A count passes on eleven months and one repeated.
  const blob = productionStrings().join('\n');
  for (const m of MONTHS) {
    ok(hasWord(blob, m), `"${m}" is never named on any surface a learner reads`);
  }
});

// The three the brief says are impossible to cover. They are asserted
// separately and loudly, because the brief's claim that they have no corpus
// sentence at all is the single thing most likely to make a later author quietly
// drop them. Postgres holds 13, 9 and 16 published a1/sons sentences for them.
for (const m of ['février', 'octobre', 'décembre'] as const) {
  test(`${m} is taught as fully as the rest, despite the brief calling it empty`, () => {
    if (noSeed) return;
    const blob = productionStrings().join('\n');
    ok(hasWord(blob, m), `"${m}" is not taught at all`);
    // Named on a card AND present in a real sentence in the lesson's own corpus.
    const inSentence = L!.itemIds
      .map((id) => ITEMS.get(id))
      .filter((i): i is NonNullable<typeof i> => Boolean(i) && i!.kind === 'sentence')
      .some((i) => hasWord(i.fr, m));
    ok(inSentence, `"${m}" appears on a card but in no sentence this lesson teaches`);
    // And tested, not only taught.
    const asked = strings(theQuiz()).some((s) => hasWord(s, m));
    ok(asked, `"${m}" is taught and never tested`);
  });
}

test('every month is tested, not only taught', () => {
  if (noSeed) return;
  const blob = strings(theQuiz()).join('\n') + '\n' + strings(L!.drills ?? []).join('\n');
  const untested = MONTHS.filter((m) => !hasWord(blob, m));
  strictEqual(untested.length, 0, `month(s) taught but never asked about: ${untested.join(', ')}`);
});

test('the months are in calendar order, starting in January', () => {
  if (noSrc) return;
  strictEqual(SRC_TWELVE.join(' '), MONTHS.join(' '), 'THE_TWELVE is not the year in order');
  strictEqual(SRC_TWELVE.length, 12);
});

test('no month word is authored, because all twelve already existed', () => {
  if (noSrc) return;
  // The brief's largest factual error, pinned so it cannot be "fixed" back.
  // Authoring a thirteenth `janvier` into jours-et-mois would fail
  // flashhub-coverage.test.ts, whose norm() strips the article, so `janvier`
  // and `le janvier` are ONE key inside a theme.
  const authoredMonthWords = SRC_CORPUS.filter((w) => MONTHS.some((m) => w.fr.toLowerCase().trim() === m));
  strictEqual(
    authoredMonthWords.length, 0,
    `a1.09 authors month headword(s) that already exist: ${authoredMonthWords.map((w) => w.fr).join(', ')}`
  );
  strictEqual(SRC_MONTH_IDS.length, 12, 'the twelve month headword ids no longer resolve');
  for (const id of SRC_MONTH_IDS) {
    ok(SRC_IMPORTED.some((r) => r.id === id), `${id} is named but not in the IMPORTED manifest, so the seed will not get it`);
  }
});

test('the month headwords resolve to real corpus rows carrying voiceflash', () => {
  if (noBothOrSkip()) return;
  for (const id of SRC_MONTH_IDS) {
    const row = ITEMS.get(id);
    ok(row, `month headword ${id} is not in the seed, so its card renders empty`);
    ok(row!.drills.includes('voiceflash'), `${id} "${row!.fr}" carries no voiceflash, so the mic cannot score it`);
    ok(row!.drills.includes('flashcard'), `${id} "${row!.fr}" carries no flashcard`);
  }
});

/* ─── THE assertion: both frames on one screen ─────────────────────────────── */

test('at least one section shows a bare month and a full date TOGETHER', () => {
  if (noSeed) return;
  // THE assertion of this file, and the one the brief singles out. The corpus
  // demonstrates both frames abundantly and demonstrates them against each
  // other exactly once by accident, and a lesson that teaches the month frame on
  // one screen and the date frame four screens later has decayed into a word
  // list without anything failing.
  //
  // A section qualifies only if the SAME section carries both « en <month> » and
  // « le <number> <month> » for the same month.
  const qualifying = L!.sections.filter((s) => {
    const blob = strings(s).join('   ');
    return MONTHS.some((m) => hasWord(blob, `en ${m}`) && /\ble \S+(?: et \S+)? /.test(blob) && hasWord(blob, m)
      && new RegExp(`\\ble [a-zà-ÿ]+(?: et [a-zà-ÿ]+)? ${m}\\b`).test(blob));
  });
  ok(
    qualifying.length > 0,
    'no single section shows « en <month> » beside « le <number> <month> ». That contrast IS the lesson, and separating it is how the lesson decays into a word list.'
  );
});

test('the contrast is carried by a section that renders both columns at once', () => {
  if (noSeed) return;
  // Stronger than the above: the pair has to be on ONE screen, not two cards of
  // a deck the learner swipes between. A tapTable renders its rows together.
  // tapTable is NOT in ownsLayout(), so this scrolls, which is why the cells are
  // short and the teaching is in the detail modal.
  const s = sec('s08-both');
  ok(s, 's08-both is missing: the two-column contrast mission is gone');
  strictEqual(s!.type, 'tapTable', 's08-both is no longer a table, so the two frames may not share a screen');
  const rows = (s as Extract<LessonSection, { type: 'tapTable' }>).rows;
  ok(rows.length >= 6, `the contrast table has ${rows.length} rows, which is too few to show the rule generalising`);
  for (const [i, r] of rows.entries()) {
    const m = r.cells[2];
    ok(MONTHS.includes(m as (typeof MONTHS)[number]), `row ${i} does not name a month in its third cell`);
    ok(r.cells.some((c) => c === `en ${m}`), `row ${i} has no "en ${m}" cell`);
    ok(
      r.cells.some((c) => new RegExp(`^le [a-zà-ÿ]+(?: et [a-zà-ÿ]+)? ${m}$`).test(c)),
      `row ${i} has no "le <number> ${m}" cell`
    );
    // Every cell is three words or fewer: this section does not own its layout.
    for (const c of r.cells) {
      ok(c.split(/\s+/).length <= 4, `row ${i} cell "${c}" is too long for a table that renders in a scrolling page`);
    }
  }
});

test('every contrast pair differs by the frame alone', () => {
  if (noBothOrSkip()) return;
  strictEqual(SRC_PAIRS.length, 9, 'the nine contrast pairs are no longer nine');
  strictEqual(SRC_PAIR_MONTHS.length, SRC_PAIRS.length, 'PAIR_MONTHS is out of step with CONTRAST_PAIRS');
  strictEqual(SRC_DATE_FRAMES.length, SRC_PAIRS.length, 'PAIR_DATE_FRAMES is out of step with CONTRAST_PAIRS');
  const strip = (fr: string) => fr.replace(/\s*[.?!]\s*$/u, '').trim();
  for (const [i, [monthId, dateId]] of SRC_PAIRS.entries()) {
    const a = ITEMS.get(monthId), b = ITEMS.get(dateId);
    ok(a, `pair ${i}: ${monthId} is not in the seed`);
    ok(b, `pair ${i}: ${dateId} is not in the seed`);
    const mf = strip(a!.fr), df = strip(b!.fr);
    ok(mf.includes(SRC_MONTH_FRAMES[i]), `pair ${i}: "${mf}" does not contain its declared frame "${SRC_MONTH_FRAMES[i]}"`);
    ok(df.includes(SRC_DATE_FRAMES[i]), `pair ${i}: "${df}" does not contain its declared frame "${SRC_DATE_FRAMES[i]}"`);
    const m = SRC_PAIR_MONTHS[i];
    strictEqual(
      mf.replace(SRC_MONTH_FRAMES[i], m),
      df.replace(SRC_DATE_FRAMES[i], m),
      `pair ${i} differs by more than the frame:\n  "${mf}"\n  "${df}"\n  The whole teaching is that ONE thing moved.`
    );
  }
});

test('every month in a pair is taught on BOTH frames', () => {
  if (noBothOrSkip()) return;
  for (const [i, [monthId, dateId]] of SRC_PAIRS.entries()) {
    const m = SRC_PAIR_MONTHS[i];
    ok(hasWord(ITEMS.get(monthId)!.fr, m), `pair ${i} claims to be about ${m} and its month half does not mention it`);
    ok(hasWord(ITEMS.get(dateId)!.fr, m), `pair ${i} claims to be about ${m} and its date half does not mention it`);
  }
});

/* ─── le premier, the one ordinal ──────────────────────────────────────────── */

test('le premier is taught as the only ordinal, with a cardinal beside it', () => {
  if (noSeed) return;
  // The brief asks for both: "le premier is taught as the only ordinal, and at
  // least one authored date uses a cardinal so the two are visible against each
  // other."
  const blob = productionStrings().join('\n');
  ok(hasWord(blob, 'premier'), 'le premier is never taught');
  // Some surface must say it is the ONLY one, rather than merely using it.
  ok(
    /\bonly\b/i.test(productionStrings().filter((s) => s.includes('premier')).join('\n')),
    'premier is used but never taught as the only ordinal, so a learner has no reason not to say le douzième'
  );
  // And a plain cardinal date must exist in the lesson's own corpus.
  const CARDINALS = ['deux', 'trois', 'onze', 'douze', 'quatorze', 'quinze', 'seize', 'vingt', 'trente'];
  const cardinalDates = L!.itemIds
    .map((id) => ITEMS.get(id))
    .filter((i): i is NonNullable<typeof i> => Boolean(i))
    .filter((i) => MONTHS.some((m) => CARDINALS.some((n) => new RegExp(`\\ble ${n} ${m}\\b`).test(i.fr))));
  ok(
    cardinalDates.length > 0,
    'no authored date uses a plain cardinal, so premier has nothing to be the exception to'
  );
});

test('the exam asks about the ordinal in both directions', () => {
  if (noSeed) return;
  const blob = strings(theQuiz()).join('\n');
  ok(hasWord(blob, 'premier'), 'the exam never asks about le premier');
  ok(
    /troisième|douzième|unième/.test(blob),
    'the exam never presents the wrong ordinal form, so it does not test the habit it exists to break'
  );
});

/* ─── Lowercase, and where it can actually be tested ───────────────────────── */

test('every authored corpus row writes its month in lowercase mid-sentence', () => {
  if (noSrc) return;
  const bad = SRC_CORPUS.filter((w) => MONTHS.some((m) => w.fr.indexOf(m[0].toUpperCase() + m.slice(1)) > 0));
  strictEqual(bad.length, 0, `authored row(s) capitalising a month mid-sentence: ${bad.map((w) => `${w.id} "${w.fr}"`).join(', ')}`);
});

test('no item this lesson writes into the seed capitalises a month mid-sentence', () => {
  if (noBothOrSkip()) return;
  const written = [...SRC_CORPUS.map((w) => w.id), ...SRC_IMPORTED.map((r) => r.id)];
  const bad = written
    .map((id) => ITEMS.get(id))
    .filter((i): i is NonNullable<typeof i> => Boolean(i))
    .filter((i) => MONTHS.some((m) => i.fr.indexOf(m[0].toUpperCase() + m.slice(1)) > 0));
  strictEqual(bad.length, 0, `seed row(s) capitalising a month mid-sentence: ${bad.map((i) => `${i.id} "${i.fr}"`).join(', ')}`);
});

test('the capital letter is tested by a format that can actually see it', () => {
  if (noSeed) return;
  // The brief says to test the capital with errorSpot "on a written form, not by
  // ear". errorSpot runs the SAME matchesAccept -> fold() path as typeIn, and
  // fold() lowercases, so NO free-text format can test a capital. mcq can,
  // because its options are picked rather than typed.
  const qs = quizQuestions(theQuiz());
  const capitalQs = qs.filter((q) => {
    const all = [q.q, ...(q.opts ?? []), ...(q.accept ?? []), q.answer ?? ''];
    return all.some((s) => MONTHS.some((m) => s.includes(m[0].toUpperCase() + m.slice(1))));
  });
  ok(capitalQs.length > 0, 'nothing in the exam tests the capital letter, which is the written error every English speaker makes');
  for (const q of capitalQs) {
    const fmt = q.format ?? 'mcq';
    ok(
      fmt === 'mcq' || fmt === 'listenChoose',
      `question "${q.q}" turns on a capital and is ${fmt}; fold() lowercases, so free text cannot see it`
    );
  }
  // And the free-text questions really do accept both cases, which is proof the
  // fold path is what the test above claims it is rather than an assumption.
  const openWithMonth = qs.filter((q) => (q.format === 'typeIn' || q.format === 'errorSpot') && q.answer);
  for (const q of openWithMonth) {
    ok(matchesAccept(q.answer!, q.accept), `"${q.q}" rejects its own answer`);
  }
});

/* ─── What belongs to the neighbours ───────────────────────────────────────── */

test('no season is taught, so the lesson does not bleed into a1.10', () => {
  if (noSeed) return;
  // The four season frames are ONE TAP AWAY in this lesson's own bound theme
  // (fr.sons.jours-et-mois.120-123) and the pull is real, because a month
  // implies a season. Checked over produced surfaces, not every string.
  const blob = producedStrings().join('\n').toLowerCase();
  const SEASONS = ['été', 'hiver', 'automne', 'printemps'];
  const taught = SEASONS.filter((w) => hasWord(blob, w));
  strictEqual(taught.length, 0, `season word(s) taught here, which belong to a1.10: ${taught.join(', ')}`);
  if (!noSrc) strictEqual(SRC_SEASONS.slice().sort().join(), SEASONS.slice().sort().join(), 'SEASON_WORDS has drifted from what this test guards');
});

test('no clock time is taught, which is a1.12', () => {
  if (noSeed) return;
  // a1.12's whole vocabulary is also in this theme, at .047-.084.
  const blob = producedStrings().join('\n').toLowerCase();
  const taught = ['heure', 'heures', 'minute', 'midi', 'minuit'].filter((w) => hasWord(blob, w));
  strictEqual(taught.length, 0, `clock vocabulary taught here, which belongs to a1.12: ${taught.join(', ')}`);
});

test('the days of the week are not taught, so a1.08 still has a lesson to be', () => {
  if (noSeed) return;
  // The brief asks for this to be written "against production surfaces rather
  // than every string, or it will fire on legitimate context and get deleted".
  // Showing a day inside a full date is explicitly allowed and must not fail.
  const blob = producedStrings().join('\n').toLowerCase();
  const taught = DAYS.filter((d) => hasWord(blob, d));
  strictEqual(taught.length, 0, `day name(s) drilled here, which belong to a1.08: ${taught.join(', ')}`);
  if (!noSrc) strictEqual(SRC_DAYS.slice().sort().join(), DAYS.slice().sort().join(), 'DAY_WORDS has drifted from what this test guards');
});

test('a day inside a full date in the reading passage is allowed and present', () => {
  if (noSeed) return;
  // The other half of the check above, and the reason it is scoped. A French
  // date genuinely carries a day name, so the passage shows one. If this ever
  // fails, the check above has been widened to fire on correct content.
  const r = L!.sections.find((s) => s.type === 'reading') as Extract<LessonSection, { type: 'reading' }> | undefined;
  ok(r, 'the lesson has no reading mission');
  ok(
    DAYS.some((d) => hasWord(r!.text.toLowerCase(), d)),
    'the reading passage shows no full date with a day in it, which is the context the produced-surface check exists to permit'
  );
});

test('no month headword this lesson teaches is a season or clock row', () => {
  if (noSrc) return;
  // The theme holds all four seasons and the whole clock. Bounding by id range
  // rather than by hand keeps a later edit from reaching into them.
  for (const id of SRC_MONTH_IDS) {
    const n = Number(id.split('.').pop());
    ok(n >= 8 && n <= 19, `${id} is outside the month block .008-.019 and may be a season or a clock row`);
  }
});

/* ─── The four sounds ──────────────────────────────────────────────────────── */

test('every respelling this lesson displays follows the nasal convention', () => {
  if (noSrc) return;
  // The REAL function, as the brief requires: "Import hasPlainNasalFor from
  // density.logic.ts rather than writing your own check."
  const bad = Object.values(SRC_RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  strictEqual(bad.length, 0, `respelling(s) closing a nasal with a plain n or m: ${bad.map((d) => `${d.fr} ${d.respell}`).join(', ')}`);
});

test('the five nasal months use the superscript, which the shared checker cannot see three of', () => {
  if (noSrc) return;
  // hasPlainNasalFor requires the n or m to END a token
  // ([AEIOUY][NM](?![A-Za-zÀ-ÿ])). septembre, novembre and décembre all carry BR
  // behind the nasal, so it is word-internal and the shared checker passes them.
  // That is three of this lesson's five worst rows, so they are checked by name.
  // a1.08 found the same gap on dee-MAHNSH, at a third of the size.
  for (const m of NASAL_MONTHS) {
    const d = SRC_RESPELL[m];
    ok(d, `no respelling authored for ${m}`);
    ok(d.respell.includes('ⁿ'), `${m} is respelled "${d.respell}" with no superscript n`);
  }
  // And prove the gap is real rather than asserted, so this test explains itself
  // to whoever reads it next.
  strictEqual(hasPlainNasalFor('septembre', 'sep-TAHNBR'), false, 'hasPlainNasalFor now catches word-internal nasals; this test can be simplified');
  strictEqual(hasPlainNasalFor('janvier', 'zhahn-VYAY'), true, 'hasPlainNasalFor no longer catches a token-final nasal');
});

test('juin and juillet share one convention for the ɥ glide', () => {
  if (noSrc) return;
  // The brief asks for one form to be picked and stated, and warns that the
  // glide is already respelled three ways across shipped content (WEET, NWEE,
  // LÜEE). Both shipped month rows already used W, so this asserts the pair
  // stays consistent rather than choosing a fourth.
  const juin = SRC_RESPELL['juin'].respell;
  const juillet = SRC_RESPELL['juillet'].respell;
  ok(juin.toUpperCase().includes('ZHW'), `juin is respelled "${juin}", which does not use the W convention juillet uses`);
  ok(juillet.toUpperCase().includes('ZHW'), `juillet is respelled "${juillet}", which does not use the W convention juin uses`);
});

test('août is taught with one pronunciation and never presented as variable', () => {
  if (noSrc) return;
  // The brief: "Pick the one the app teaches, author it once, and do not present
  // the variation to an A1 learner." The app already taught /ut/ OOT and this
  // lesson does not re-decide it.
  strictEqual(SRC_RESPELL['août'].ipa, '/ut/');
  strictEqual(SRC_RESPELL['août'].respell, '[OOT]');
  if (noSeed) return;
  const blob = productionStrings().join('\n').toLowerCase();
  ok(!/aout.{0,40}(also|sometimes|or ['"]?ah|two ways|varies)/.test(blob), 'the lesson presents août as having more than one pronunciation');
});

test('the respelling repairs really are repairs, and match what the lesson displays', () => {
  if (noSrc) return;
  for (const r of SRC_REPAIRS) {
    ok(r.from !== r.to, `${r.id} "repairs" ${r.fr} to the value it already had`);
    const shown = SRC_RESPELL[r.fr];
    ok(shown, `${r.id} repairs "${r.fr}", which this lesson never displays`);
    strictEqual(`[${r.to}]`, shown.respell, `${r.id} writes "${r.to}" but the lesson shows ${shown.respell}`);
    strictEqual(hasPlainNasalFor(r.fr, r.to), false, `the repaired value for ${r.fr} still fails the nasal check`);
  }
});

test('the seed carries the repaired respellings, not the broken ones', () => {
  if (noBothOrSkip()) return;
  for (const r of SRC_REPAIRS) {
    const row = ITEMS.get(r.id);
    ok(row, `${r.id} is not in the seed`);
    strictEqual(row!.respell, r.to, `${r.id} "${r.fr}" still carries "${row!.respell}" in the seed`);
  }
});

test('no authored string carries the tie character that renders as an underscore', () => {
  if (noSeed) return;
  // U+203F shows as a low underscore on a Pixel 6 and shipped that way in
  // sons.10. « en août » is a liaison candidate and is exactly the temptation.
  const bad = strings(L!).filter((s) => s.includes('‿'));
  strictEqual(bad.length, 0, `string(s) carrying U+203F: ${bad.slice(0, 2).join(' | ')}`);
});

/* ─── The exam ─────────────────────────────────────────────────────────────── */

test('the exam is round based and every round can fire a drill', () => {
  if (noSeed) return;
  const q = theQuiz();
  const rounds = q.rounds ?? [];
  strictEqual(rounds.length, 6, 'the exam no longer has six rounds, one per drill');
  const drillFor = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const leads: string[] = [];
  for (const r of rounds) {
    // drillForRound walks a round's targets and stops at the FIRST that
    // resolves, so a drill named only in second place never runs.
    const lead = (r.targets ?? []).find((t) => drillFor.has(t));
    ok(lead, `round ${r.id} names no target that resolves to a drill`);
    ok(!leads.includes(lead!), `round ${r.id} leads on "${lead}", which another round already leads on, so one drill is dead`);
    leads.push(lead!);
  }
  const fired = new Set(leads.map((t) => drillFor.get(t)!));
  const teaching = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  strictEqual(orphans.length, 0, `drill(s) no round can fire: ${orphans.join(', ')}`);
  strictEqual((L!.errorTriggers ?? []).length, 6, 'the six error triggers are no longer six');
});

test('every exam question teaches and points somewhere', () => {
  if (noSeed) return;
  const qs = quizQuestions(theQuiz());
  const known = new Set(sectionIds());
  for (const q of qs) {
    ok(q.why, `question "${q.q}" has no why`);
    ok(q.ref, `question "${q.q}" has no ref`);
    ok(known.has(q.ref!), `question "${q.q}" refs "${q.ref}", which is not a section in this lesson`);
    // A why that restates the answer teaches nothing.
    ok(q.why!.length > 40, `the why on "${q.q}" is too short to teach a rule`);
  }
});

test('the exam does not lean on recognition', () => {
  if (noSeed) return;
  const qs = quizQuestions(theQuiz());
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq} of ${qs.length} questions are mcq, over the half ceiling`);
});

test('the exam uses listenChoose on the clusters that actually collide', () => {
  if (noSeed) return;
  // The brief: "use it on those two clusters specifically rather than spreading
  // it thin across twelve months."
  const qs = quizQuestions(theQuiz());
  const lc = qs.filter((q) => q.format === 'listenChoose');
  ok(lc.length >= 2, `${lc.length} listenChoose questions; the two colliding clusters want one each`);
  const blob = strings(lc).join('\n');
  ok(hasWord(blob, 'juin') || hasWord(blob, 'juillet'), 'no listening question covers the juin/juillet collision');
  ok(
    ['septembre', 'novembre', 'décembre'].filter((m) => hasWord(blob, m)).length >= 2,
    'no listening question covers the -embre cluster'
  );
});

test('the exam spots the written errors a learner actually produces', () => {
  if (noSeed) return;
  const qs = quizQuestions(theQuiz());
  const es = qs.filter((q) => q.format === 'errorSpot');
  ok(es.length >= 4, `${es.length} errorSpot questions; the brief names five sentences a learner will produce`);
  const blob = strings(es).join('\n').toLowerCase();
  // The two frames confused in both directions, and the de.
  ok(/\ben \w+ \w+/.test(blob) || hasWord(blob, 'en'), 'no errorSpot covers the en frame');
  ok(hasWord(blob, 'de'), 'no errorSpot covers the de inside a date, which is the Spanish and Portuguese import');
});

test('every free-text question accepts the answer it displays', () => {
  if (noSeed) return;
  // A question whose own canonical answer is rejected marks a correct learner
  // wrong. Compared through the REAL matchesAccept.
  const qs = quizQuestions(theQuiz());
  for (const q of qs) {
    if (!q.answer) continue;
    ok(matchesAccept(q.answer, q.accept), `"${q.q}" displays "${q.answer}" and does not accept it`);
  }
});

test('every question about the frame carries a situation in its stem', () => {
  if (noSeed) return;
  // The brief: "en or le?" has no answer without context. "You are telling a
  // friend your birthday is on the fifteenth" has exactly one.
  const qs = quizQuestions(theQuiz());
  const frameQs = qs.filter((q) => {
    const s = q.q.toLowerCase();
    return /\ben\b/.test(s) && /\ble\b/.test(s) && !/which month|listen/.test(s);
  });
  for (const q of frameQs) {
    ok(
      q.q.split(/\s+/).length >= 8,
      `"${q.q}" asks which frame with no situation in it, so it has no single right answer`
    );
  }
});

test('correct answers do not cluster in one option slot', () => {
  if (noSeed) return;
  const qs = quizQuestions(theQuiz()).filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number');
  const slots: Record<number, number> = {};
  for (const q of qs) slots[q.correct as number] = (slots[q.correct as number] ?? 0) + 1;
  for (const [slot, n] of Object.entries(slots)) {
    ok(n / qs.length <= 0.4, `${Math.round(n / qs.length * 100)}% of correct answers sit in slot ${slot} (limit 40%)`);
  }
});

/* ─── Rendering: authored, valid, and actually drawn ───────────────────────── */

test('the density validator passes over the seed copy', () => {
  if (noSeed) return;
  const issues = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(issues.length, 0, `density issues:\n${formatDensity(issues)}`);
});

test('practice, dictation and drills name only items the seed actually holds', () => {
  if (noSeed) return;
  const named = new Set<string>();
  for (const s of L!.sections) for (const id of (s as { itemIds?: string[] }).itemIds ?? []) named.add(id);
  for (const d of L!.drills ?? []) for (const id of (d as { items?: string[] }).items ?? []) named.add(id);
  for (const t of Object.values(L!.terms ?? {})) for (const e of t.examples ?? []) named.add(e.itemId);
  const missing = [...named].filter((id) => !ITEMS.has(id));
  strictEqual(missing.length, 0, `id(s) that resolve to nothing and render as an empty card: ${missing.join(', ')}`);
});

test('the spoken mission draws only from items the mic can score', () => {
  if (noSeed) return;
  const p = L!.sections.find((s) => s.type === 'practice') as { itemIds?: string[] } | undefined;
  ok(p?.itemIds?.length, 'the speak mission names no items');
  const bad = p!.itemIds!.filter((id) => !ITEMS.get(id)?.drills.includes('voiceflash'));
  strictEqual(bad.length, 0, `speak item(s) with no voiceflash, which render as cards the learner cannot be scored on: ${bad.join(', ')}`);
});

test('the dictee asks its own question: a month-frame target offers `le` as a decoy', () => {
  if (noSeed) return;
  // Measured through the REAL dicteeMode and wordDecoys rather than against a
  // restated length threshold. `le` is in WORD_DECOY_POOL, so a word-mode target
  // on the MONTH frame hands the learner an article they must decide not to
  // place, which is one of this lesson's two errors in the one place it is
  // visible on the page.
  const d = L!.sections.find((s) => s.type === 'dictation') as { itemIds?: string[] } | undefined;
  ok(d?.itemIds?.length, 'the lesson has no dictée targets');
  for (const id of d!.itemIds!) {
    const row = ITEMS.get(id);
    ok(row, `dictée names ${id}, which is not in the seed`);
    ok(row!.drills.includes('dictation'), `${id} "${row!.fr}" carries no dictation drill`);
  }
  const withLe = d!.itemIds!.filter((id) => {
    const fr = ITEMS.get(id)!.fr;
    return dicteeMode(fr) === 'words' && wordDecoys(fr).includes('le');
  });
  ok(
    withLe.length > 0,
    'no dictée target offers "le" as a decoy. That is the exercise\'s whole question: the learner is handed the article and has to decide the sentence does not want one.'
  );
});

test('the reading glossary is authored where something renders it, and every key can match', () => {
  if (noSeed) return;
  const r = L!.sections.find((s) => s.type === 'reading') as Extract<LessonSection, { type: 'reading' }> | undefined;
  ok(r, 'the lesson has no reading mission');
  ok(r!.glossary?.length, 'the reading has no glossary');
  // MissionSection routes to PassagePage (which draws the underlines) only when
  // questionsInModal is set WITH questions. a1.01 shipped five entries down the
  // other path and none of them ever drew.
  strictEqual((r as { questionsInModal?: boolean }).questionsInModal, true, 'the reading glossary is authored where nothing renders it');
  ok(r!.questions?.length, 'questionsInModal with no questions renders nothing');

  // Every key must be findable by the REAL lookup, compared THE WAY THE REAL ONE
  // COMPARES: by matched KEY, not by matched text. gloss.logic.ts resolves
  // longest-match-first, so a shorter entry inside a longer one underlines
  // nothing while its TEXT still appears in the winning segment. a1.08's first
  // test compared text and reported two dead entries as found.
  const keys = new Set(r!.glossary!.flatMap((g) => glossKeys(g.word)).filter(Boolean));
  const hit = new Set(segmentSentence(r!.text, keys).filter((s) => s.key).map((s) => s.key!));
  const unmatched = r!.glossary!.filter((g) => !glossKeys(g.word).some((k) => hit.has(k)));
  strictEqual(
    unmatched.length, 0,
    `glossary entries that underline nothing, because a longer entry always wins: ${unmatched.map((g) => `"${g.word}"`).join(', ')}`
  );
});

test('the reading passage is one block, because an authored newline is discarded', () => {
  if (noSeed) return;
  // PassagePage splits on text.split(/(?<=[.!?»])\s+/), so a newline is consumed
  // as whitespace and silently dropped.
  const r = L!.sections.find((s) => s.type === 'reading') as Extract<LessonSection, { type: 'reading' }>;
  ok(!r.text.includes('\n'), 'the reading passage carries a newline, which the renderer silently discards');
});

test('every term chip resolves, and no mission carries more than three', () => {
  if (noSeed) return;
  const defined = new Set(Object.keys(L!.terms ?? {}));
  for (const s of L!.sections) {
    const chips = (s as { terms?: string[] }).terms ?? [];
    for (const c of chips) ok(defined.has(c), `section ${(s as { id?: string }).id} names term "${c}", which is not defined`);
    ok(chips.length <= 3, `section ${(s as { id?: string }).id} declares ${chips.length} term chips; the renderer shows three and collapses the rest`);
  }
  // And every defined term is actually used, or it is a definition nothing shows.
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  const unused = [...defined].filter((t) => !used.has(t));
  strictEqual(unused.length, 0, `term(s) defined and surfaced by no section: ${unused.join(', ')}`);
});

test('every sheet a section names exists, and every sheet is reachable', () => {
  if (noSeed) return;
  const declared = new Set((L!.sheets ?? []).map((s) => s.id));
  const named = new Set(L!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[]);
  for (const id of named) ok(declared.has(id), `a section names sheet "${id}", which the lesson does not declare`);
  const unreachable = [...declared].filter((id) => !named.has(id));
  strictEqual(unreachable.length, 0, `sheet(s) no section can reach: ${unreachable.join(', ')}`);
});

test('the months sheet the brief asks for exists and holds all twelve', () => {
  if (noSeed) return;
  // "A reference sheet with the twelve months, the two frames and the lowercase
  // note is worth building. It is what a learner returns to while doing a1.10
  // and a1.12."
  const sheets = L!.sheets ?? [];
  const blob = strings(sheets).join('\n');
  for (const m of MONTHS) ok(hasWord(blob, m), `the reference sheets never name "${m}"`);
  ok(hasWord(blob.toLowerCase(), 'en'), 'the sheets do not carry the month frame');
});

test('commonErrors carries the swipe flag that stops it drawing a blank screen', () => {
  if (noSeed) return;
  // Without `swipe`, MissionSection falls through to a path that returned
  // undefined and drew a BLANK mission on sons.08 m22 and a1.01 m5.
  for (const s of L!.sections.filter((x) => x.type === 'commonErrors')) {
    strictEqual((s as { swipe?: boolean }).swipe, true, `${(s as { id?: string }).id} has no swipe flag and will draw a blank screen`);
  }
});

test('no autoplay is authored, because no component implements it', () => {
  if (noSeed) return;
  ok(!JSON.stringify(L!).includes('"autoplay"'), 'autoplay is authored; it is declared in schema.ts and read by nothing');
});

test('the xl deck really is one word per card', () => {
  if (noSeed) return;
  // density.logic.ts reads xl as a 12-word cap on EVERY string in the section.
  // Correct on a month card, fatal on anything with a date sentence in it. This
  // cost a session on a1.01.
  for (const s of L!.sections.filter((x) => (x as { size?: string }).size === 'xl')) {
    for (const str of strings(s)) {
      ok(str.split(/\s+/).length <= 12, `xl section ${(s as { id?: string }).id} carries a ${str.split(/\s+/).length}-word string: "${str.slice(0, 60)}"`);
    }
  }
});

/* ─── Tranches ─────────────────────────────────────────────────────────────── */

test('tranches release every taught item exactly once, and nothing untaught', () => {
  if (noSeed) return;
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length, 'the tranches are not index-aligned with the acts');
  const flat = tranches.flat();
  const dupes = flat.filter((id, i) => flat.indexOf(id) !== i);
  strictEqual(dupes.length, 0, `item(s) released by two tranches, which takes two SRS ratings for one card: ${[...new Set(dupes)].join(', ')}`);
  const taught = new Set(L!.itemIds);
  const stray = flat.filter((id) => !taught.has(id));
  strictEqual(stray.length, 0, `tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  const never = [...taught].filter((id) => !flat.includes(id));
  strictEqual(never.length, 0, `item(s) taught but never released to review: ${never.join(', ')}`);
});

test('a tranche releases only items the acts before it have taught', () => {
  if (noSeed) return;
  // A card released before its mission is a card the learner is asked to rate
  // before they have met it. "Met it" is measured on the FRENCH THE LEARNER SAW
  // as well as on the id, because this lesson reads its sentences through frOf(),
  // which inlines the text at build time so no screen retypes a corpus row. An
  // id-grep alone answers "no" for every card the learner has just read.
  const acts = L!.acts ?? [];
  const tranches = L!.deckTranche ?? [];
  for (const [i, slice] of tranches.entries()) {
    if (!slice.length) continue;
    const blob = acts.slice(0, i + 1)
      .flatMap((a) => a.sections)
      .map((id) => JSON.stringify(sec(id) ?? {}))
      .join(' ');
    const early = slice.filter((id) => {
      if (blob.includes(id)) return false;
      const fr = ITEMS.get(id)?.fr;
      return !fr || !blob.includes(fr);
    });
    strictEqual(
      early.length, 0,
      `tranche ${i} releases item(s) no act up to and including act ${i + 1} shows: ${early.slice(0, 4).map((id) => `${id} "${ITEMS.get(id)?.fr}"`).join(', ')}`
    );
  }
});

/* ─── Corpus hygiene ───────────────────────────────────────────────────────── */

test('no theme holds the same word twice once this lesson has landed', () => {
  if (noSeed) return;
  // Computed the way flashhub-coverage.test.ts computes it: the article is
  // stripped first, so `janvier` and `le janvier` are ONE key inside a theme.
  // This is the check that would have fired had the brief's instruction to
  // author ten month headwords been followed.
  const norm = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seen = new Map<string, string>();
  const dupes: string[] = [];
  for (const i of seed.items) {
    if (i.kind === 'sentence') continue;
    if ((i.cardType ?? 'vocab') !== 'vocab') continue;
    const key = `${i.theme}::${norm(i.fr)}`;
    const prior = seen.get(key);
    if (prior) dupes.push(`${prior} vs ${i.id} ("${i.fr}") in ${i.theme}`);
    else seen.set(key, i.id);
  }
  strictEqual(dupes.length, 0, `the flashcard hub would serve the same card twice:\n  ${dupes.join('\n  ')}`);
});

test('no corpus row this lesson authored is dead', () => {
  if (noBothOrSkip()) return;
  // Authored, schema-valid and drawn by nothing is this project's signature
  // failure. a1.08 shipped 43 such ids. An id counts as shown when the lesson
  // names it OR puts its French on a screen.
  const blob = JSON.stringify(L!);
  const dead = SRC_CORPUS.filter((w) => !blob.includes(w.id) && !blob.includes(w.fr));
  strictEqual(dead.length, 0, `authored row(s) the lesson never shows: ${dead.map((w) => `${w.id} "${w.fr}"`).join(', ')}`);
});

test('every itemId this lesson declares is on a screen, not merely resolvable', () => {
  if (noSeed) return;
  // The different question: not "does this id resolve" but "did the learner see
  // it". a1.08 had 43 ids that resolved perfectly and were drawn by nothing.
  const blob = JSON.stringify({ sections: L!.sections, drills: L!.drills ?? [], terms: L!.terms ?? {} });
  const unseen = L!.itemIds.filter((id) => {
    if (blob.includes(id)) return false;
    const fr = ITEMS.get(id)?.fr;
    return !fr || !blob.includes(fr);
  });
  strictEqual(unseen.length, 0, `itemId(s) released to review but shown on no screen: ${unseen.slice(0, 6).join(', ')}`);
});

test('the gendered single-word nouns are kept out of the seed on purpose', () => {
  if (noBothOrSkip()) return;
  // `le mois`, `l'année` and `la date` are the three words this lesson most
  // obviously wants. All three are gendered single-word nouns, so
  // endingPopulation() admits them and a1-03-genre.test.ts re-measures twenty
  // printed figures from this file on every run. a1.08 imported four such rows,
  // moved two of a1.03's cards, and had to withdraw them in v3.
  ok(SRC_WITHDRAWN.length > 0, 'WITHDRAWN_IDS is empty, so the reasoning that keeps a1.03 stable has been removed');
  for (const id of SRC_WITHDRAWN) {
    ok(!SRC_IMPORTED.some((r) => r.id === id), `${id} is in WITHDRAWN_IDS and also in the IMPORTED manifest`);
    ok(!L!.itemIds.includes(id), `${id} is withdrawn and the lesson still declares it`);
  }
});

test('the imported rows this lesson copies into the seed match the manifest', () => {
  if (noBothOrSkip()) return;
  // The manifest is a recorded read of Postgres. If the seed and the manifest
  // disagree, the seed was written from a copy nobody has looked at.
  for (const r of SRC_IMPORTED) {
    const row = ITEMS.get(r.id);
    ok(row, `${r.id} is in the manifest and not in the seed`);
    strictEqual(row!.fr, r.fr, `${r.id} text differs between the manifest and the seed`);
    strictEqual(row!.theme, r.theme, `${r.id} theme differs`);
    strictEqual(row!.kind, r.kind, `${r.id} kind differs`);
  }
});

/* ─── House style ──────────────────────────────────────────────────────────── */

test('the authored copy carries no em dash and no honest/honesty', () => {
  if (noSeed) return;
  const blob = JSON.stringify(L!);
  ok(!blob.includes('—'), 'em dash in authored copy');
  ok(!/honest/i.test(blob), 'the word "honest" is banned from authored content');
});

test('no grammar vocabulary reaches an A1 learner', () => {
  if (noSeed) return;
  const bad = productionStrings().filter((s) =>
    /\b(conjugaison|article (défini|indéfini|partitif)|adjectif ordinal|préposition|complément circonstanciel|masculin|féminin|déterminant)\b/i.test(s));
  strictEqual(bad.length, 0, `grammar vocabulary on a learner surface: ${bad.slice(0, 2).join(' | ')}`);
});

test('the copy avoids the AI-tell phrasing the brief bans', () => {
  if (noSeed) return;
  const BANNED = ['falls fast', 'trip up', 'half of everything', 'this is the big one', 'listen to the trap', 'get those two right', 'this is the part that pays', 'here is the catch'];
  const blob = productionStrings().join('\n').toLowerCase();
  const hits = BANNED.filter((p) => blob.includes(p));
  strictEqual(hits.length, 0, `banned phrasing: ${hits.join(', ')}`);
});

test('mission titles fit the row the missions list gives them', () => {
  if (noSeed) return;
  for (const s of L!.sections) {
    const t = (s as { title?: string }).title ?? '';
    ok(t.length <= 34, `"${t}" is ${t.length} characters and will wrap or clip in the missions list`);
  }
});

/* ─── Seed and source are the same lesson ──────────────────────────────────── */

test('the seed copy and the authored source are the same lesson', () => {
  if (noBothOrSkip()) return;
  // Every figure DERIVED from the source rather than hardcoded, as the brief
  // requires: "seed parity that derives every figure from the authored source
  // rather than hardcoding counts."
  strictEqual(L!.sections.length, SRC!.sections.length, 'section count differs between the seed and the source');
  strictEqual(L!.itemIds.length, SRC!.itemIds.length, 'itemId count differs');
  strictEqual((L!.acts ?? []).length, (SRC!.acts ?? []).length, 'act count differs');
  strictEqual((L!.drills ?? []).length, (SRC!.drills ?? []).length, 'drill count differs');
  strictEqual((L!.sheets ?? []).length, (SRC!.sheets ?? []).length, 'sheet count differs');
  strictEqual((L!.errorTriggers ?? []).length, (SRC!.errorTriggers ?? []).length, 'trigger count differs');
  strictEqual(Object.keys(L!.terms ?? {}).length, Object.keys(SRC!.terms ?? {}).length, 'term count differs');
  strictEqual(quizQuestions(theQuiz()).length, quizQuestions(SRC!.sections.find((s) => s.type === 'quiz') as never).length, 'quiz size differs');
  strictEqual(L!.version, SRC!.version, 'the seed and the source are at different versions');
  // Canonical, not byte-for-byte: a publish rewrites the seed from Postgres and
  // reorders keys with no content change. See canonicalJson in schema.ts.
  strictEqual(canonicalJson(L!), canonicalJson(SRC!), 'the seed copy and the authored source have diverged');
});

test('the speak and dictation lists in the seed match the ones the source exports', () => {
  if (noBothOrSkip()) return;
  const p = L!.sections.find((s) => s.type === 'practice') as { itemIds?: string[] };
  const d = L!.sections.find((s) => s.type === 'dictation') as { itemIds?: string[] };
  strictEqual((p.itemIds ?? []).join(), SRC_SPEAK.join(), 'the speak list has drifted from the source');
  strictEqual((d.itemIds ?? []).join(), SRC_DICTATION.join(), 'the dictée list has drifted from the source');
});

test('no chunk row is ever asked for in production', () => {
  if (noBothOrSkip()) return;
  const p = L!.sections.find((s) => s.type === 'practice') as { itemIds?: string[] };
  const produced = [...(p.itemIds ?? []), ...SRC_DICTATION];
  const bad = produced.filter((id) => SRC_CHUNKS.includes(id));
  strictEqual(bad.length, 0, `production drill(s) name a row carrying a verb no A1 unit teaches: ${bad.join(', ')}`);
});

/* ─── Audio briefs ─────────────────────────────────────────────────────────── */

test('the audio briefs pin the constraints that cannot be recovered later', () => {
  if (noSeed) return;
  // A constraint on how something is recorded becomes invisible the moment the
  // clip is delivered, so the four the brief names are pinned here.
  const recs = L!.audio?.recorded ?? [];
  ok(recs.length > 0, 'no recordings are requested');
  const all = recs.map((r) => r.desc).join('\n').toLowerCase();
  ok(/one (continuous )?take/.test(all), 'no brief asks for the twelve in one take, so the learner would hear twelve performances');
  ok(/calendar order|in order/.test(all), 'no brief pins the order of the twelve');
  ok(/juin and juillet|juin et juillet/.test(all), 'no brief puts juin and juillet adjacent in the same take');
  ok(/septembre, octobre, novembre|embre/.test(all), 'no brief puts the -embre cluster together');
  ok(/pair is one take|each pair/.test(all), 'no brief pins the en/le contrast as one take per pair');
});

test('every recording a section names is one the lesson actually requests', () => {
  if (noSeed) return;
  const declared = new Set((L!.audio?.recorded ?? []).map((r) => r.id));
  const named = new Set(
    strings(L!.sections)
      .filter((s) => s.startsWith('rec-'))
  );
  // Pull recordingIds out properly rather than by prefix guessing.
  const ids = new Set<string>();
  const walk = (v: unknown) => {
    if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') {
      for (const [k, val] of Object.entries(v)) {
        if (k === 'recordingId' && typeof val === 'string') ids.add(val);
        else walk(val);
      }
    }
  };
  walk(L!.sections);
  for (const id of ids) ok(declared.has(id), `a section names recording "${id}", which the lesson does not request`);
  for (const id of named) ok(declared.has(id) || ids.has(id), `stray recording reference "${id}"`);
});

/** Both halves are needed for a parity assertion. Declared last so the tests
 *  above read in order. */
function noBothOrSkip(): boolean {
  return noSeed || noSrc;
}
