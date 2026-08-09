// Guards a1.08.l1 "Les jours de la semaine".
//
// This lesson has one failure mode that matters more than all the others, and it
// is not a crash: it is THE RULE DECAYING BACK INTO A WORD LIST.
//
// The canDo has two clauses and they are wildly unequal. "Can name the days" is
// seven words with no pattern behind them; "say what they do on a given day" is
// one article, and it is the whole lesson. A rewrite that keeps the seven names,
// keeps a tidy table, and loses the surface that shows « le lundi » AND « lundi »
// TOGETHER would read fine in review, ship, and leave a learner with a flashcard
// deck. So the assertion that earns its place here is "some production surface
// shows an article-carrying day beside a bare one on the same screen", and it is
// the one below worth the most.
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
// the seven and the six triggers, and both are deliberate: those numbers are the
// SHAPE of the lesson rather than a measurement of it, and a later trim that
// quietly drops one is exactly what this file exists to stop.
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
import { quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity, formatDensity } from './density.logic.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode, wordDecoys } from './dictee.logic.ts';
import { fold, matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; lessonIds: string[]; themes?: unknown; canDo?: string; sub?: string; title?: string }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; ipa?: string; drills: string[]; cardType?: string; prompt?: string }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.08.l1');
// Before the batch and the merge have run, the seed has no a1.08.l1 and every
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
let SRC_DAYS: string[] = [];
let SRC_MONTHS: string[] = [];
let SRC_SEVEN: readonly string[] = [];
let SRC_PAIRS: [string, string][] = [];
let SRC_CHUNKS: string[] = [];
let SRC_CORPUS: { id: string; fr: string; en: string; side: string; day: string; chunk?: boolean; pairWith?: string; drills: string[]; theme: string }[] = [];
let SRC_RESPELL: Record<string, { fr: string; respell: string; ipa: string }> = {};
let SRC_REPAIRS: { id: string; fr: string; from: string; to: string }[] = [];
let SRC_IMPORTED: { id: string; fr: string; en: string; theme: string; kind: string; level: string; drills: string[] }[] = [];
let SRC_ORIGINS: Record<string, { origin: string; note: string }> = {};
try {
  const lesson = await import('../../../ealch-admin/scripts/data/jours-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/jours-corpus.ts');
  SRC = lesson.JOURS_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_SPEAK = lesson.JOURS_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.JOURS_DICTATION_IDS as string[];
  SRC_DAYS = lesson.JOURS_DAY_IDS as string[];
  SRC_MONTHS = lesson.JOURS_MONTH_IDS as string[];
  SRC_SEVEN = corpus.THE_SEVEN as readonly string[];
  SRC_PAIRS = corpus.CONTRAST_PAIRS as [string, string][];
  SRC_CHUNKS = corpus.CHUNK_IDS as string[];
  SRC_CORPUS = corpus.JOURS as typeof SRC_CORPUS;
  SRC_RESPELL = corpus.RESPELL as typeof SRC_RESPELL;
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as typeof SRC_REPAIRS;
  SRC_IMPORTED = corpus.IMPORTED as typeof SRC_IMPORTED;
  SRC_ORIGINS = corpus.ORIGINS as typeof SRC_ORIGINS;
} catch {
  // Not available; the source-derived tests below no-op.
}
const noSrc = !SRC;
const noBoth = noSeed || noSrc;

/** The seven, as a literal. This is the one hardcoded set in the file and it is
 *  deliberate: seven is the SHAPE of the week rather than a measurement of the
 *  content, and a lesson that quietly taught six is exactly what this guards. */
const DAYS = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'] as const;

/** The twelve months, likewise literal, because they are what this lesson must
 *  NOT teach and deriving that list from the lesson would be circular. */
const MONTHS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
] as const;

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
 *  a test that fires on correct content is a test the next author deletes. This
 *  is exactly what the brief asks for on the no-months assertion: "write the
 *  assertion against production surfaces rather than every string, or it will
 *  fire on legitimate context and get deleted". */
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

/* ─── The lesson exists and is wired ───────────────────────────────────────── */

test('a1.08.l1 exists in the seed and is well formed', () => {
  if (noSeed) return;
  strictEqual(validateLesson(L!, L!.id).length, 0, 'schema issues on a1.08.l1');
  strictEqual(L!.unitId, 'a1.08');
  strictEqual(L!.level, 'a1');
  ok(L!.sections.length > 0, 'the lesson has no sections');
});

test('the a1.08 unit links the lesson, so the Den can reach it', () => {
  if (noSeed) return;
  const unit = seed.units.find((u) => u.id === 'a1.08');
  ok(unit, 'the a1.08 unit is missing from the seed');
  ok(unit!.lessonIds.includes('a1.08.l1'), 'the unit does not name its lesson, so nothing links to it');
});

test('the unit keeps the promise the Den advertises', () => {
  if (noSeed) return;
  const unit = seed.units.find((u) => u.id === 'a1.08')!;
  strictEqual(unit.title, 'Days of the Week');
  strictEqual(unit.sub, 'Les jours de la semaine');
  strictEqual(unit.canDo, 'Can name the days and say what they do on a given day');
});

test('the eyebrow the header draws agrees with the one stored on the lesson', () => {
  if (noSeed) return;
  // missions.ts derives the eyebrow from unit.seq at render time. The stored
  // `tag` is a fallback and has to agree, or the two disagree the moment
  // something reads the field instead. a1.03 shipped exactly that bug.
  const unit = seed.units.find((u) => u.id === 'a1.08')!;
  strictEqual(L!.tag, `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`);
});

test('the unit is bound to a theme that exists and holds something', () => {
  if (noSeed) return;
  // The unit shipped declaring ["temps","calendrier"], neither of which is a
  // theme in either copy, so both chips led nowhere. It is now bound to
  // `jours-et-mois`, which is the theme that holds the days AND the months and
  // is therefore the right one for a1.09 as well.
  const unit = seed.units.find((u) => u.id === 'a1.08')!;
  const themes = (unit.themes ?? []) as string[];
  ok(Array.isArray(themes) && themes.length === 1, `a1.08 declares ${JSON.stringify(themes)}`);
  strictEqual(themes[0], 'jours-et-mois');
  const held = seed.items.filter((i) => i.theme === themes[0]).length;
  ok(held > 0, `a1.08's theme chip "${themes[0]}" resolves to ${held} items in the seed, so it leads nowhere`);
  for (const dead of ['temps', 'calendrier']) {
    strictEqual(
      seed.items.filter((i) => i.theme === dead).length, 0,
      `"${dead}" now holds items, so the rebind removed a chip somebody was using`
    );
  }
});

/* ─── The spine ────────────────────────────────────────────────────────────── */

test('the journey opens on a scene and closes quiz then roundup', () => {
  if (noSeed) return;
  strictEqual(L!.sections[0].type, 'scene', 'mission 1 is not a scene');
  const types = L!.sections.map((s) => s.type);
  strictEqual(types[types.length - 1], 'roundup', 'the lesson does not close on a roundup');
  strictEqual(types[types.length - 2], 'quiz', 'the quiz is not immediately before the roundup');
});

test('exactly one quiz section, because the pager renders only the first', () => {
  if (noSeed) return;
  // lessonPager.logic.ts strips every quiz in contentSections() and appends
  // exactly one page, resolved with `sections.find(s => s.type === 'quiz')`.
  // a1.01 shipped twelve questions in a second quiz that no learner ever saw.
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1);
});

test('every act names sections that exist, and every section belongs to exactly one act', () => {
  if (noSeed) return;
  const present = new Set(sectionIds());
  const claimed = new Map<string, string>();
  for (const act of L!.acts ?? []) {
    for (const id of act.sections) {
      ok(present.has(id), `act ${act.id} names "${id}", which is not a section of this lesson`);
      ok(!claimed.has(id), `"${id}" is claimed by both ${claimed.get(id)} and ${act.id}`);
      claimed.set(id, act.id);
    }
  }
  for (const id of present) ok(claimed.has(id), `section "${id}" belongs to no act, so no tranche releases with it`);
});

test('the journey is multimodal: it reads, listens, speaks, writes and role-plays', () => {
  if (noSeed) return;
  const types = new Set(L!.sections.map((s) => s.type));
  for (const t of ['scene', 'reading', 'listening', 'practice', 'dictation', 'scenario', 'quiz', 'roundup']) {
    ok(types.has(t as LessonSection['type']), `the journey has no "${t}" mission`);
  }
});

test('every mission carries its French subtitle', () => {
  if (noSeed) return;
  const missing = L!.sections
    .filter((s) => !(s as { frSub?: string }).frSub)
    .map((s) => (s as { id?: string }).id ?? s.type);
  strictEqual(missing.length, 0, `missions with no frSub: ${missing.join(', ')}`);
});

/* ─── The reframe ──────────────────────────────────────────────────────────── */

test('the reframe appears verbatim exactly as often as it was authored', () => {
  if (noBoth) return;
  // Derived from the SOURCE and asserted against the SEED, which is a real
  // comparison of two copies rather than the content compared to itself.
  const inSrc = strings(SRC).filter((s) => s.includes(SRC_REFRAME)).length;
  const inSeed = strings(L).filter((s) => s.includes(SRC_REFRAME)).length;
  strictEqual(inSeed, inSrc, `the reframe appears ${inSeed} times in the seed and ${inSrc} times in the source`);
  strictEqual(L!.reframe, SRC_REFRAME, 'the lesson\'s `reframe` field is not the line the source declares');
  const sections = L!.sections.filter((s) => strings(s).some((x) => x.includes(SRC_REFRAME))).length;
  ok(sections >= 3, `the reframe carries in only ${sections} sections; the density validator requires three`);
});

test('the reframe names the article, because that is what the lesson is about', () => {
  if (noSrc) return;
  // Not a style check. A reframe about the day NAMES rather than the article
  // would be a reframe for a flashcard deck, and this assertion is what stops a
  // later rewrite quietly moving the lesson's centre of gravity.
  ok(/\ble\b/i.test(SRC_REFRAME), `the reframe "${SRC_REFRAME}" does not mention the article`);
});

/* ─── The seven days ───────────────────────────────────────────────────────── */

test('all seven days are taught, each by name, on a surface a learner reads', () => {
  if (noSeed) return;
  const prod = productionStrings().join(' ').toLowerCase();
  for (const d of DAYS) {
    ok(prod.includes(d), `"${d}" appears on no production surface, so it is not taught`);
  }
});

test('mercredi and jeudi are taught as fully as the weekend is', () => {
  if (noSeed) return;
  // The brief reported these two as the thin ones (two and three corpus
  // sentences). Re-measured against Postgres they have eighteen and nineteen at
  // a1, so thinness was never the risk. The risk that IS real is a lesson
  // weighted toward the weekend because the corpus is: samedi and dimanche have
  // 70 and 80 a1 sentences against mercredi's 18.
  //
  // Counted over production surfaces so that a day mentioned only in an id or a
  // recording brief does not count as taught.
  const prod = productionStrings().map((s) => s.toLowerCase());
  const mentions = (d: string) => prod.filter((s) => s.includes(d)).length;
  const weekend = Math.min(mentions('samedi'), mentions('dimanche'));
  for (const d of ['mercredi', 'jeudi']) {
    ok(mentions(d) >= 3, `"${d}" appears on only ${mentions(d)} production surfaces`);
    ok(
      mentions(d) >= Math.floor(weekend / 3),
      `"${d}" appears ${mentions(d)} times against the weekend's ${weekend}: the lesson has drifted toward the days the corpus happens to be rich in`
    );
  }
});

test('every day is tested, not only taught', () => {
  if (noSeed) return;
  // A day that appears on a card and never in the exam, a drill or a check is a
  // day the learner is never asked to produce.
  const q = theQuiz();
  const tested = [
    ...strings(q),
    ...strings(L!.drills ?? []),
    ...L!.sections.filter((s) => s.type === 'groupDrill').flatMap((s) => strings(s)),
  ].join(' ').toLowerCase();
  const untested = DAYS.filter((d) => !tested.includes(d));
  strictEqual(untested.length, 0, `day(s) taught but never tested: ${untested.join(', ')}`);
});

test('the days are in week order, starting on Monday', () => {
  if (noSrc) return;
  // A French calendar starts on Monday and the lesson makes a point of it, so
  // an ordering that quietly started on Sunday would contradict its own card.
  strictEqual(SRC_SEVEN.join(','), DAYS.join(','), 'THE_SEVEN is not in French week order');
  strictEqual(SRC_SEVEN[0], 'lundi');
  strictEqual(SRC_SEVEN[6], 'dimanche');
});

test('the day headwords resolve to real corpus rows carrying voiceflash', () => {
  if (noBoth) return;
  strictEqual(SRC_DAYS.length, 7, `${SRC_DAYS.length} day headword ids resolve, expected 7`);
  for (const [i, id] of SRC_DAYS.entries()) {
    const row = ITEMS.get(id);
    ok(row, `day headword ${id} is not in the seed, so its card renders empty`);
    strictEqual(row!.fr, DAYS[i], `${id} holds "${row!.fr}", not "${DAYS[i]}"`);
    ok(row!.drills.includes('voiceflash'), `${id} carries no voiceflash, so the spoken deck cannot score it`);
  }
});

/* ─── The rule, which is the whole lesson ──────────────────────────────────── */

test('at least one section shows an article-carrying day and a bare day TOGETHER', () => {
  if (noSeed) return;
  // THE assertion of this file. The corpus demonstrates both sides of the rule
  // and never once demonstrates them against each other, and a lesson that
  // teaches the habitual on one screen and the specific four screens later has
  // decayed into a word list without anything failing.
  //
  // A section qualifies only if the SAME section carries both `le <day>` and a
  // bare `<day>` for the same day.
  const qualifying = L!.sections.filter((s) => {
    const blob = strings(s).join('   ');
    return DAYS.some((d) => {
      const hasArticle = new RegExp(`\\ble ${d}\\b`).test(blob);
      // A bare day: the day NOT immediately preceded by le/les/tous les.
      const hasBare = new RegExp(`(^|[^a-zà-ÿ])(?<!le )(?<!les )${d}\\b`, 'i').test(
        blob.replace(new RegExp(`\\b(le|les|tous les) ${d}s?\\b`, 'gi'), ' ')
      );
      return hasArticle && hasBare;
    });
  });
  ok(
    qualifying.length > 0,
    'no single section shows le + a day beside a bare day. That contrast IS the lesson, and separating it is how the lesson decays into a word list.'
  );
});

test('the contrast is carried by a section that renders both columns at once', () => {
  if (noSeed) return;
  // Stronger than the above: the pair has to be on ONE screen, not two cards of
  // a deck the learner swipes between. A tapTable renders its rows together.
  const s = sec('s09-both');
  ok(s, 's09-both is missing: the two-column contrast mission is gone');
  strictEqual(s!.type, 'tapTable', 's09-both is no longer a table, so the two sides may not share a screen');
  const rows = (s as Extract<LessonSection, { type: 'tapTable' }>).rows;
  strictEqual(rows.length, 7, `the contrast table has ${rows.length} rows, expected one per day`);
  for (const [i, r] of rows.entries()) {
    const d = DAYS[i];
    ok(r.cells.some((c) => c === `le ${d}`), `row ${i} has no "le ${d}" cell`);
    ok(r.cells.some((c) => c === d), `row ${i} has no bare "${d}" cell`);
  }
});

test('every day is taught on BOTH sides of the rule', () => {
  if (noSrc) return;
  // Derived from the corpus's own `side` and `day` fields rather than from a
  // list, so a pair quietly dropped in a later trim fails here.
  for (const d of DAYS) {
    const hab = SRC_CORPUS.filter((w) => w.day === d && w.side === 'habitual' && !w.chunk);
    const spec = SRC_CORPUS.filter((w) => w.day === d && w.side === 'specific' && !w.chunk);
    ok(hab.length > 0, `"${d}" has no habitual sentence, so it is taught on one side only`);
    ok(spec.length > 0, `"${d}" has no specific sentence, so it is taught on one side only`);
  }
});

test('every contrast pair is reciprocal and differs by the article alone', () => {
  if (noSrc) return;
  const byId = new Map(SRC_CORPUS.map((w) => [w.id, w]));
  const words = (fr: string) => fr.replace(/\s*[.?!]\s*$/u, '').trim();
  ok(SRC_PAIRS.length >= 7, `${SRC_PAIRS.length} contrast pairs, expected at least one per day`);
  for (const [h, s] of SRC_PAIRS) {
    const hw = byId.get(h);
    const sw = byId.get(s);
    ok(hw && sw, `pair ${h} / ${s} names a row that does not exist`);
    strictEqual(hw!.pairWith, s, `${h} does not point back at ${s}`);
    strictEqual(sw!.pairWith, h, `${s} does not point back at ${h}`);
    strictEqual(hw!.side, 'habitual');
    strictEqual(sw!.side, 'specific');
    const stripped = words(hw!.fr).replace(new RegExp(`\\ble (?=${DAYS.join('|')})`), '');
    strictEqual(
      stripped, words(sw!.fr),
      `"${hw!.fr}" and "${sw!.fr}" differ by more than the article, which hides the one thing that moved`
    );
  }
});

test('the habitual form taught is SINGULAR, and the plural is taught only after tous les', () => {
  if (noSeed) return;
  // English marks this with a plural S and French with a singular article, so
  // `les lundis` is the error the lesson exists to stop. It may appear as a
  // named error and must never be presented as the way to say every week.
  // Checked PER CARD, not per string, because framing lives in a sibling field.
  // A vocabThemes card is { fr: 'les lundis', en: 'Mondays as a set, which is
  // not the rule' } and a commonErrors entry is { wrong, right, why }: in both,
  // the form and the words marking it as wrong are two fields of one object, and
  // a per-string check reports the correct content as unframed.
  //
  // The unit of meaning on a card is the card. A test that forced "not" into
  // every field would make the content worse to satisfy itself.
  // The nearest enclosing title travels with the card, because that is also
  // framing a learner reads: a row saying "les lundis for le lundi" under a
  // section headed "The four errors, and which you can hear" is not presenting
  // the plural as the rule.
  const cards: string[] = [];
  const walkCards = (v: unknown, heading: string) => {
    if (Array.isArray(v)) { v.forEach((x) => walkCards(x, heading)); return; }
    if (!v || typeof v !== 'object') return;
    const o = v as Record<string, unknown>;
    const here = typeof o.title === 'string' ? `${heading} ${o.title}` : heading;
    const own = Object.entries(o).filter(([, x]) => typeof x === 'string').map(([, x]) => x as string);
    if (own.length) cards.push(`${here}  ${own.join('  ')}`);
    Object.values(o).forEach((x) => walkCards(x, here));
  };
  walkCards(L!.sections, '');
  walkCards(L!.sheets ?? [], '');
  walkCards(L!.terms ?? {}, '');

  for (const d of DAYS) {
    const asRule = cards.filter((c) => new RegExp(`\\bles ${d}s\\b`, 'i').test(c));
    for (const card of asRule) {
      const framed = /tous les/i.test(card)
        || /(not|never|jamais|wrong|error|trap|instead of|rather than|which is not|as a set|English plural)/i.test(card);
      ok(framed, `"les ${d}s" appears on a card that never says it is wrong: "${card.slice(0, 120)}"`);
    }
  }
});

/* ─── Lowercase, which is the written half ─────────────────────────────────── */

test('every authored corpus row writes its day in lowercase mid-sentence', () => {
  if (noSrc) return;
  // An item whose `fr` is "Lundi" mid-sentence teaches the English habit every
  // time it is shown. Sentence-initial capitals are correct French and are not
  // flagged.
  const bad = SRC_CORPUS.filter((w) =>
    DAYS.some((d) => w.fr.indexOf(d[0].toUpperCase() + d.slice(1)) > 0));
  strictEqual(bad.length, 0, `row(s) capitalising a day mid-sentence: ${bad.map((w) => `${w.id} "${w.fr}"`).join(', ')}`);
});

test('no item this lesson writes into the seed capitalises a day mid-sentence', () => {
  if (noSeed) return;
  const mine = L!.itemIds.map((id) => ITEMS.get(id)).filter(Boolean);
  const bad = mine.filter((i) =>
    DAYS.some((d) => i!.fr.indexOf(d[0].toUpperCase() + d.slice(1)) > 0));
  strictEqual(bad.length, 0, `seed row(s) capitalising a day mid-sentence: ${bad.map((i) => `${i!.id} "${i!.fr}"`).join(', ')}`);
});

test('the capital letter is tested by a format that can actually see it', () => {
  if (noSeed) return;
  // fold() lowercases, so typeIn and errorSpot both compare "Lundi" equal to
  // "lundi" and would mark the error CORRECT. The brief recommends errorSpot for
  // this and is wrong: errorSpot runs the same matchesAccept path. Only a picked
  // format can test it.
  //
  // Proved through the real fold() rather than asserted, so this stays true if
  // the folding rules change.
  strictEqual(fold('Lundi'), fold('lundi'), 'fold() no longer lowercases; this lesson\'s capital question can move to typeIn');

  const qs = quizQuestions(theQuiz());
  const capitalQs = qs.filter((q) =>
    Array.isArray(q.opts)
    && q.opts.some((o) => DAYS.some((d) => o.includes(d[0].toUpperCase() + d.slice(1))))
    && q.opts.some((o) => DAYS.some((d) => new RegExp(`[^.!?]\\s${d}\\b`).test(o))));
  ok(capitalQs.length > 0, 'no picked-format question tests the capital letter, and no free-text one can');

  // And no free-text question pretends to.
  const pretending = qs.filter((q) => {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') return false;
    const all = [q.answer ?? '', ...(q.accept ?? [])];
    return all.some((a) => DAYS.some((d) => a.includes(d[0].toUpperCase() + d.slice(1))));
  });
  strictEqual(pretending.length, 0, `free-text question(s) whose answer turns on a capital: ${pretending.map((q) => q.q).join(' | ')}`);
});

/* ─── What belongs to the neighbours ───────────────────────────────────────── */

test('no month is taught, so the lesson does not bleed into a1.09', () => {
  if (noSeed) return;
  // Written against PRODUCTION SURFACES rather than every string, as the brief
  // asks, so that a date inside a reading line stays legal. What is illegal is a
  // month being TAUGHT: named on a card, glossed, or drilled.
  //
  // The risk here is real and specific: this lesson binds to `jours-et-mois`,
  // which holds all twelve months as headwords one tap away.
  // Matched CASE-SENSITIVELY, and that is not fussiness. French months are
  // always lowercase, and this lesson's own planet card names Mars, Mercury,
  // Jupiter and Venus. Lowercasing first made "Mars" the planet
  // indistinguishable from "mars" the month and failed the lesson for teaching
  // an etymology the brief explicitly asks for.
  const prod = productionStrings();
  for (const m of MONTHS) {
    // `mars` and `mai` are also ordinary words, so match the month as a
    // standalone token rather than as a substring.
    const hits = prod.filter((s) => new RegExp(`(^|[^A-Za-zÀ-ÿ])${m}([^A-Za-zÀ-ÿ]|$)`).test(s));
    // A month may appear inside a corpus sentence the lesson quotes for its DAY.
    // It may not appear in a card's own teaching copy.
    const taught = hits.filter((s) => !DAYS.some((d) => s.includes(d)));
    strictEqual(
      taught.length, 0,
      `"${m}" is taught on ${taught.length} surface(s) with no day on them: "${taught[0]?.slice(0, 90)}"`
    );
  }
});

test('no month headword id is named or released', () => {
  if (noBoth) return;
  const named = new Set(strings(L).filter((s) => /^fr\./.test(s)));
  const leaked = SRC_MONTHS.filter((id) => named.has(id));
  strictEqual(leaked.length, 0, `month headword(s) named by the lesson: ${leaked.join(', ')}`);
  const released = new Set((L!.deckTranche ?? []).flat());
  const releasedMonths = SRC_MONTHS.filter((id) => released.has(id));
  strictEqual(releasedMonths.length, 0, `month headword(s) released to review: ${releasedMonths.join(', ')}`);
});

test('no clock time is taught, which is a1.12', () => {
  if (noSeed) return;
  // Times of day (le matin, le soir) are legitimate companions to a day and the
  // corpus is full of them. An HOUR is not: « à seize heures » may appear inside
  // a quoted corpus sentence, and must not appear in the lesson's own teaching
  // copy, which is what the day-bearing filter separates.
  const prod = productionStrings().map((s) => s.toLowerCase());
  const clockish = prod.filter((s) => /\b(quelle heure|il est \d|heures? et (demie|quart)|moins le quart)\b/.test(s));
  strictEqual(clockish.length, 0, `clock teaching found: "${clockish[0]?.slice(0, 90)}"`);
});

test('no verb outside être and avoir is drilled for production', () => {
  if (noBoth) return;
  // There is no regular-verb unit anywhere in A1, so a drilled sentence carrying
  // a conjugated -er form asks the learner to produce something nothing has
  // given them. Rows carrying such a verb are marked `chunk` in the corpus and
  // are read only.
  const speak = new Set(SRC_SPEAK);
  const dictation = new Set(SRC_DICTATION);
  for (const id of SRC_CHUNKS) {
    ok(!speak.has(id), `${id} carries a verb no A1 unit conjugates and the speak mission asks for it`);
    ok(!dictation.has(id), `${id} carries a verb no A1 unit conjugates and the dictée asks for it`);
  }
  // And the lesson never names a conjugation lesson it does not have.
  const prod = productionStrings().join(' ').toLowerCase();
  ok(!/conjugaison|conjugate/.test(prod), 'the lesson uses conjugation vocabulary an A1 learner has never been given');
});

/* ─── Notation ─────────────────────────────────────────────────────────────── */

test('every respelling this lesson displays follows the nasal convention', () => {
  if (noSrc) return;
  // Imported from density.logic.ts, as the brief requires, rather than
  // reimplemented.
  const bad = Object.values(SRC_RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  strictEqual(bad.length, 0, `respelling(s) closing a nasal with a plain n or m: ${bad.map((d) => `${d.fr} ${d.respell}`).join(', ')}`);
});

test('the three nasal-carrying days use the superscript, which the shared checker cannot see', () => {
  if (noSrc) return;
  // hasPlainNasalFor's second test requires the n or m to END a token
  // (`[AEIOUY][NM](?![A-Za-zÀ-ÿ])`), and dimanche's nasal is word-internal with
  // SH behind it. So `dee-MAHNSH` passes the shared checker and is still wrong.
  //
  // The brief says "lundi and dimanche are the words this catches". It catches
  // lundi. This asserts what the checker cannot.
  strictEqual(hasPlainNasalFor('dimanche', '[dee-MAHNSH]'), false, 'hasPlainNasalFor now catches word-internal nasals; this explicit check can be simplified');
  for (const d of ['lundi', 'vendredi', 'dimanche']) {
    const r = SRC_RESPELL[d];
    ok(r, `no respelling authored for "${d}"`);
    ok(r.respell.includes('ⁿ'), `"${d}" respelled "${r.respell}" carries a nasal vowel with no superscript n`);
  }
});

test('the respelling repairs really are repairs, and match what the lesson displays', () => {
  if (noSrc) return;
  ok(SRC_REPAIRS.length > 0, 'the repair list is empty');
  for (const r of SRC_REPAIRS) {
    const displayed = SRC_RESPELL[r.fr];
    ok(displayed, `the repair for "${r.fr}" has no matching entry in RESPELL`);
    strictEqual(
      `[${r.to}]`, displayed.respell,
      `the repair writes "${r.to}" while the lesson displays "${displayed.respell}"; the card and the flashcard would disagree`
    );
    ok(r.from !== r.to, `the repair for ${r.id} changes nothing`);
  }
});

test('the seed carries the repaired respellings, not the broken ones', () => {
  if (noBoth) return;
  for (const r of SRC_REPAIRS) {
    const row = ITEMS.get(r.id);
    ok(row, `${r.id} is not in the seed`);
    strictEqual(row!.fr, r.fr, `${r.id} holds "${row!.fr}", not "${r.fr}"`);
    strictEqual(row!.respell, r.to, `${r.id} still respells "${r.fr}" as "${row!.respell}"`);
  }
});

test('no authored string carries the tie character that renders as an underscore', () => {
  if (noSeed) return;
  // U+203F shipped in sons.10 and draws as a low underscore on a Pixel 6.
  const bad = strings(L).filter((s) => s.includes('‿'));
  strictEqual(bad.length, 0, `U+203F found in: "${bad[0]?.slice(0, 60)}"`);
});

/* ─── The exam ─────────────────────────────────────────────────────────────── */

test('the exam is round based and every round can fire a drill', () => {
  if (noSeed) return;
  const q = theQuiz();
  const rounds = q.rounds ?? [];
  ok(rounds.length > 0, 'the exam has no rounds');
  ok(!q.questions, 'the exam carries both `questions` and `rounds`; a quiz has one or the other');

  // drillForRound walks a round's targets and fires the drill of the FIRST one
  // that resolves, then stops. A drill named only in second place never runs.
  const drillFor = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const leads: string[] = [];
  for (const r of rounds) {
    const lead = (r.targets ?? []).find((t) => drillFor.has(t));
    ok(lead, `round ${r.id} names no target that resolves to a drill, so it can fire nothing`);
    ok(!leads.includes(lead!), `round ${r.id} leads on "${lead}", which another round already leads on, so one drill is dead`);
    leads.push(lead!);
  }
  const fired = new Set(leads.map((t) => drillFor.get(t)!));
  const teaching = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  strictEqual(orphans.length, 0, `drill(s) no round can fire: ${orphans.join(', ')}`);
});

test('every exam question teaches and points somewhere', () => {
  if (noSeed) return;
  const qs = quizQuestions(theQuiz());
  const present = new Set(sectionIds());
  const noWhy = qs.filter((q) => !q.why).map((q) => q.q);
  strictEqual(noWhy.length, 0, `question(s) with no why: ${noWhy.slice(0, 3).join(' | ')}`);
  const noRef = qs.filter((q) => !q.ref).map((q) => q.q);
  strictEqual(noRef.length, 0, `question(s) with no ref: ${noRef.slice(0, 3).join(' | ')}`);
  const badRef = qs.filter((q) => q.ref && !present.has(q.ref)).map((q) => `${q.q} -> ${q.ref}`);
  strictEqual(badRef.length, 0, `question(s) whose ref names no section: ${badRef.join(' | ')}`);
});

test('the exam does not lean on recognition', () => {
  if (noSeed) return;
  const qs = quizQuestions(theQuiz());
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq} of ${qs.length} questions are mcq, over the half ceiling`);
  // errorSpot is the format that tests the written errors, and there are four of
  // them. Derived as a share rather than a count so the ceiling moves with the
  // exam.
  const errorSpot = qs.filter((q) => q.format === 'errorSpot').length;
  ok(errorSpot >= 4, `only ${errorSpot} errorSpot question(s); this lesson has four written errors to catch`);
});

test('every free-text question accepts the answer it displays', () => {
  if (noSeed) return;
  // Through the real matchesAccept. A question whose own canonical answer is
  // rejected marks a correct learner wrong.
  const qs = quizQuestions(theQuiz());
  const bad = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
  strictEqual(bad.length, 0, `question(s) rejecting their own answer: ${bad.map((q) => `"${q.q}" shows "${q.answer}"`).join(' | ')}`);
});

test('the exam tests the rule with a situation, not a bare choice', () => {
  if (noSeed) return;
  // "le lundi or lundi?" has no answer without context. A question about the
  // article has to put the learner somewhere.
  const qs = quizQuestions(theQuiz());
  const aboutTheRule = qs.filter((q) =>
    DAYS.some((d) => new RegExp(`\\ble ${d}\\b`).test(strings(q).join(' '))));
  ok(aboutTheRule.length >= 4, `only ${aboutTheRule.length} question(s) touch the article rule`);
  const contextless = aboutTheRule.filter((q) => q.q.split(/\s+/).length < 6);
  strictEqual(contextless.length, 0, `question(s) about the rule with no situation in the stem: ${contextless.map((q) => q.q).join(' | ')}`);
});

test('correct answers do not cluster in one option slot', () => {
  if (noSeed) return;
  const qs = quizQuestions(theQuiz());
  const slots = qs.filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number').map((q) => q.correct as number);
  if (slots.length < 8) return;
  const tally = new Map<number, number>();
  for (const s of slots) tally.set(s, (tally.get(s) ?? 0) + 1);
  for (const [slot, n] of tally) {
    ok((n / slots.length) * 100 <= 40, `${Math.round(n / slots.length * 100)}% of correct answers sit in slot ${slot}`);
  }
});

/* ─── Everything authored is rendered ──────────────────────────────────────── */

test('the density validator passes over the seed copy', () => {
  if (noSeed) return;
  const issues = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(issues.length, 0, `\n${formatDensity(issues)}`);
});

test('practice, dictation and drills name only items the seed actually holds', () => {
  if (noSeed) return;
  const named: string[] = [];
  for (const s of L!.sections) {
    if (s.type === 'practice' || s.type === 'dictation') named.push(...s.itemIds);
  }
  for (const d of L!.drills ?? []) named.push(...(d.items ?? []));
  for (const t of Object.values(L!.terms ?? {})) named.push(...(t.examples ?? []).map((e) => e.itemId));
  const missing = [...new Set(named)].filter((id) => !ITEMS.has(id));
  strictEqual(missing.length, 0, `id(s) that resolve to nothing and render as empty cards: ${missing.join(', ')}`);
});

test('the spoken mission draws only from items the mic can score', () => {
  if (noSeed) return;
  // PracticeVFView scores against items carrying `voiceflash`. An item without
  // it renders as a card the learner cannot be scored on, which reads as a
  // broken mission rather than a missing tag.
  const speak = L!.sections.find((s) => s.type === 'practice' && s.skill === 'speak');
  ok(speak, 'the lesson has no spoken mission');
  const ids = (speak as Extract<LessonSection, { type: 'practice' }>).itemIds;
  const bad = ids.filter((id) => !ITEMS.get(id)?.drills.includes('voiceflash'));
  strictEqual(bad.length, 0, `spoken items with no voiceflash: ${bad.join(', ')}`);
});

test('the dictee asks its own question: a bare-day target offers `le` as a decoy', () => {
  if (noSeed) return;
  // This lesson chose WORD mode where a1.07 chose letters, and the reason is
  // that `le` is in WORD_DECOY_POOL: a bare-day target hands the learner a `le`
  // tile they must decide NOT to place, which is the lesson's own decision in
  // the one place it is visible.
  //
  // Checked through the real wordDecoys, so a reworded target that slips under
  // the length threshold fails here rather than silently ceasing to ask.
  const d = L!.sections.find((s) => s.type === 'dictation');
  ok(d, 'the lesson has no dictée');
  const ids = (d as Extract<LessonSection, { type: 'dictation' }>).itemIds;
  const noTag = ids.filter((id) => !ITEMS.get(id)?.drills.includes('dictation'));
  strictEqual(noTag.length, 0, `dictée item(s) with no dictation drill: ${noTag.join(', ')}`);
  const withLe = ids.filter((id) => {
    const fr = ITEMS.get(id)!.fr;
    return dicteeMode(fr) === 'words' && wordDecoys(fr).includes('le');
  });
  ok(withLe.length > 0, 'no dictée target offers "le" as a decoy, which is the whole reason this lesson uses word mode');
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

  // Every key must be findable by the REAL lookup, compared THE WAY THE REAL
  // ONE COMPARES: by matched key, not by matched text.
  //
  // The first version of this assertion compared folded TEXT and passed on a
  // lesson with two dead entries. gloss.logic.ts resolves longest-match-first,
  // so « le mardi » loses every time to « est fermé le mardi » and underlines
  // nothing, while the TEXT "le mardi" still appears inside the winning
  // segment. Comparing text therefore reports a shadowed entry as found, which
  // is the same shape of mistake as reimplementing the lookup: a second
  // definition of "matched", free to drift from the renderer's.
  //
  // gloss.logic.test.ts caught it over the whole seed. This is the local copy,
  // now asking the same question.
  // The key set PassagePage builds, in one line, exactly as gloss.logic.test.ts
  // builds it.
  const keys = new Set(r!.glossary!.flatMap((g) => glossKeys(g.word)).filter(Boolean));
  const hit = new Set(segmentSentence(r!.text, keys).filter((s) => s.key).map((s) => s.key!));
  const unmatched = r!.glossary!.filter((g) => !glossKeys(g.word).some((k) => hit.has(k)));
  strictEqual(
    unmatched.length, 0,
    `glossary entries that underline nothing, because a longer entry always wins: ${unmatched.map((g) => `"${g.word}"`).join(', ')}`
  );
});

test('every term chip resolves, and no mission carries more than three', () => {
  if (noSeed) return;
  const defined = new Set(Object.keys(L!.terms ?? {}));
  for (const s of L!.sections) {
    const chips = (s as { terms?: string[] }).terms ?? [];
    for (const c of chips) ok(defined.has(c), `section ${(s as { id?: string }).id} names term "${c}", which is not defined`);
    ok(chips.length <= 3, `section ${(s as { id?: string }).id} declares ${chips.length} term chips; the renderer shows three and collapses the rest`);
  }
});

test('every sheet a section names exists, and every sheet is reachable', () => {
  if (noSeed) return;
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const named = new Set<string>();
  for (const s of L!.sections) {
    const id = (s as { sheetId?: string }).sheetId;
    if (!id) continue;
    ok(sheetIds.has(id), `section ${(s as { id?: string }).id} names sheet "${id}", which the lesson does not declare`);
    named.add(id);
  }
  const unreachable = [...sheetIds].filter((id) => !named.has(id));
  strictEqual(unreachable.length, 0, `sheet(s) no section points at, so no learner can open them: ${unreachable.join(', ')}`);
});

test('commonErrors carries the swipe flag that stops it drawing a blank screen', () => {
  if (noSeed) return;
  // Without `swipe`, MissionSection falls through to a path that returned
  // undefined and drew a BLANK mission on sons.08 m22 and a1.01 m5.
  for (const s of L!.sections.filter((x) => x.type === 'commonErrors')) {
    strictEqual((s as { swipe?: boolean }).swipe, true, `${(s as { id?: string }).id} is a commonErrors with no swipe flag`);
  }
});

test('no autoplay is authored, because no component implements it', () => {
  if (noSeed) return;
  const found: string[] = [];
  const walk = (v: unknown) => {
    if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') {
      for (const [k, val] of Object.entries(v)) {
        if (k === 'autoplay') found.push(String(val));
        walk(val);
      }
    }
  };
  walk(L!.sections);
  strictEqual(found.length, 0, 'autoplay is declared in schema.ts and implemented in no component');
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
  // before they have met it.
  //
  // "Met it" is measured on the FRENCH THE LEARNER SAW, not on whether the id
  // string happens to appear in the act's sections. This lesson reads its
  // sentences through frOf(), which inlines the text at build time precisely so
  // no screen retypes a corpus row, so an id-grep answers "no" for every card
  // the learner has in fact just read. The first version of this check did that
  // and failed the lesson for content that was correct.
  const acts = L!.acts ?? [];
  const tranches = L!.deckTranche ?? [];
  for (const [i, slice] of tranches.entries()) {
    if (!slice.length) continue;
    const blob = acts.slice(0, i + 1)
      .flatMap((a) => a.sections)
      .map((id) => JSON.stringify(sec(id) ?? {}))
      .join(' ');
    const early = slice.filter((id) => {
      if (blob.includes(id)) return false;          // named outright
      const fr = ITEMS.get(id)?.fr;
      return !fr || !blob.includes(fr);              // or its French is on a card
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
  // stripped first, so `lundi` and `le lundi` are one key inside a theme. This
  // is the check that stopped this lesson authoring seven day headwords the
  // brief reported as missing.
  const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const mine = new Set(L!.itemIds);
  const themes = new Set(L!.itemIds.map((id) => ITEMS.get(id)?.theme).filter(Boolean) as string[]);
  const seen = new Map<string, string>();
  const dupes: string[] = [];
  for (const it of seed.items) {
    if (!themes.has(it.theme)) continue;
    if (it.kind === 'sentence') continue;
    if ((it.cardType ?? 'vocab') !== 'vocab') continue;
    const k = `${it.theme}::${norm(it.fr)}`;
    const prior = seen.get(k);
    if (prior && (mine.has(prior) || mine.has(it.id))) dupes.push(`${prior} vs ${it.id} ("${it.fr}")`);
    else if (!prior) seen.set(k, it.id);
  }
  strictEqual(dupes.length, 0, `duplicate words in a theme this lesson touches: ${dupes.join(' | ')}`);
});

test('no corpus row this lesson authored is dead', () => {
  if (noBoth) return;
  // Every authored id must be named by a section, a drill, a term or a tranche.
  // A row nothing reaches is a card that never renders and an SRS entry that
  // never fires.
  const reachable = new Set([
    ...strings(L!.sections).filter((s) => /^fr\./.test(s)),
    ...strings(L!.drills ?? []).filter((s) => /^fr\./.test(s)),
    ...strings(L!.terms ?? {}).filter((s) => /^fr\./.test(s)),
    ...(L!.deckTranche ?? []).flat(),
    ...L!.itemIds,
  ]);
  const dead = SRC_CORPUS.map((w) => w.id).filter((id) => !reachable.has(id));
  strictEqual(dead.length, 0, `authored row(s) nothing reaches: ${dead.join(', ')}`);
});

test('the imported rows this lesson copies into the seed match the manifest', () => {
  if (noBoth) return;
  for (const r of SRC_IMPORTED) {
    const row = ITEMS.get(r.id);
    ok(row, `imported row ${r.id} did not reach the seed, so its card renders empty`);
    strictEqual(row!.fr, r.fr, `${r.id}: the seed says "${row!.fr}", the manifest says "${r.fr}"`);
    strictEqual(row!.theme, r.theme, `${r.id}: theme drifted`);
    strictEqual(row!.kind, r.kind, `${r.id}: kind drifted`);
  }
});

test('the five planets are given as a memory hook, not as a mission', () => {
  if (noBoth) return;
  // Five of the seven are the same planet in French and English, which the brief
  // asks for as one card. It is on the day table's details and in a sheet, and
  // it must not have grown into a mission of its own.
  const planetSections = L!.sections.filter((s) =>
    /\b(Mercury|Jupiter|Venus|Mars)\b/.test(strings(s).join(' ')));
  ok(planetSections.length > 0, 'the planet etymology is nowhere, and it is the cheapest retention this lesson has');
  ok(planetSections.length <= 2, `the etymology has spread across ${planetSections.length} missions; it is one card's worth`);
  // And the origins really are the five the lesson claims.
  const planets = Object.values(SRC_ORIGINS).filter((o) => /^(Moon|Mars|Mercury|Jupiter|Venus)$/.test(o.origin));
  strictEqual(planets.length, 5, `${planets.length} of the seven are named after a planet, expected 5`);
});

/* ─── House style ──────────────────────────────────────────────────────────── */

test('the authored copy carries no em dash and no honest/honesty', () => {
  if (noSeed) return;
  const all = strings(L);
  const em = all.filter((s) => s.includes('—'));
  strictEqual(em.length, 0, `em dash in: "${em[0]?.slice(0, 60)}"`);
  const h = all.filter((s) => /honest/i.test(s));
  strictEqual(h.length, 0, `"honest" in: "${h[0]?.slice(0, 60)}"`);
});

test('no grammar vocabulary reaches an A1 learner', () => {
  if (noSeed) return;
  const bad = productionStrings().filter((s) =>
    /\b(conjugaison|article (défini|indéfini|partitif)|adverbe de fréquence|complément circonstanciel|déterminant)\b/i.test(s));
  strictEqual(bad.length, 0, `grammar vocabulary in: "${bad[0]?.slice(0, 90)}"`);
});

test('mission titles fit the row the missions list gives them', () => {
  if (noSeed) return;
  // 27 characters is a PROXY and the device is the arbiter: a1.07's s06-sort
  // truncated at 26 because the row's type chip competes for the same line and
  // the real constraint is pixel width. Kept as a cheap early warning.
  const long = L!.sections.filter((s) => s.title.length > 27).map((s) => `${s.title} (${s.title.length})`);
  strictEqual(long.length, 0, `title(s) over the 27-character proxy: ${long.join(', ')}`);
});

/* ─── Seed and source agree ────────────────────────────────────────────────── */

test('the seed copy and the authored source are the same lesson', () => {
  if (noBoth) return;
  // Every figure DERIVED from the source rather than hardcoded, so this test
  // does not need editing when the content legitimately changes, and cannot be
  // made to pass by editing a number.
  strictEqual(L!.version, SRC!.version, 'version drift between the seed and the source');
  strictEqual(L!.sections.length, SRC!.sections.length, 'section count drift');
  strictEqual(L!.itemIds.length, SRC!.itemIds.length, 'itemIds drift');
  strictEqual((L!.acts ?? []).length, (SRC!.acts ?? []).length, 'act count drift');
  strictEqual((L!.drills ?? []).length, (SRC!.drills ?? []).length, 'drill count drift');
  strictEqual((L!.sheets ?? []).length, (SRC!.sheets ?? []).length, 'sheet count drift');
  strictEqual((L!.errorTriggers ?? []).length, (SRC!.errorTriggers ?? []).length, 'trigger count drift');
  strictEqual(quizQuestions(theQuiz()).length, quizQuestions(SRC!.sections.find((s) => s.type === 'quiz') as never).length, 'quiz size drift');
  strictEqual(
    L!.sections.map((s) => (s as { id?: string }).id).join(','),
    SRC!.sections.map((s) => (s as { id?: string }).id).join(','),
    'the spine has been reordered in one copy and not the other'
  );
});

test('the audio briefs pin the constraints that cannot be recovered later', () => {
  if (noSeed) return;
  // A constraint on HOW something is recorded becomes invisible the moment the
  // clip is delivered, so it is pinned here the way sons.07 pins rec-h-pairs.
  const recs = L!.audio?.recorded ?? [];
  ok(recs.length > 0, 'the lesson requests no recordings');
  const byId = new Map(recs.map((r) => [r.id, r]));

  const seven = byId.get('rec-a1-08-seven');
  ok(seven, 'the seven-days recording brief is gone');
  ok(/ONE CONTINUOUS TAKE/i.test(seven!.desc), 'the seven days are no longer pinned to one take, so the learner would hear seven performances of a sequence');
  ok(/week order/i.test(seven!.desc), 'the recording order is no longer pinned');

  const pairs = byId.get('rec-a1-08-pairs');
  ok(pairs, 'the contrast recording brief is gone');
  ok(/EACH PAIR IS ONE TAKE/i.test(pairs!.desc), 'the le/bare pairs are no longer pinned to one take per pair, so the learner would compare two performances instead of two meanings');
  ok(/mardi and jeudi/i.test(pairs!.desc), 'the mardi/jeudi adjacency is no longer pinned, and that is the pair that actually collides');
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
        walk(val);
      }
    }
  };
  walk(L!.sections);
  const dangling = [...named].filter((id) => !declared.has(id));
  strictEqual(dangling.length, 0, `recordingId(s) naming no requested recording: ${dangling.join(', ')}`);
});
