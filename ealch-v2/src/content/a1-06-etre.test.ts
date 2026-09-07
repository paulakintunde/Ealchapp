// Guards a1.06.l1 "Le verbe être".
//
// This lesson has one failure mode that matters more than all the others, and it
// is not a crash: it is THE C'EST RULE DECAYING BACK INTO A LIST OF EXAMPLES.
//
// a1.11 already taught half of it, as a fact about professions with c'est as an
// exception. The whole reason a1.06 exists downstream of that is to replace the
// fact with a TEST a learner can run in the moment: is there a little word in
// front of the noun? A rewrite that keeps five nice examples and loses the
// sentence stating the test would read fine in review, ship, and quietly return
// the lesson to where a1.11 left it. So the assertion that earns its place here
// is "some production surface STATES the determiner test", and it is the one
// below worth the most.
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
// edit the test, which is how a test comes to certify a bug.
//
// Nothing here reimplements app logic. `fold`, `dicteeMode`, `glossKeys`,
// `segmentSentence`, `hasPlainNasalFor` and `validateDensity` are all imported
// from the modules the app itself runs. An earlier version of a1.01's test
// inlined its own glossary lookup, copied the version that was already broken,
// and passed while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity, formatDensity } from './density.logic.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode, dicteeWords } from './dictee.logic.ts';
import { fold } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; lessonIds: string[]; themes?: unknown; canDo?: string; sub?: string; title?: string }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; respell?: string; drills: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.06.l1');
// Before the batch and the merge have run, the seed has no a1.06.l1 and every
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
let SRC_PARADIGM: string[] = [];
let SRC_SIX: readonly string[] = [];
let SRC_PARADIGM_FORMS: string[] = [];
let SRC_USES: readonly string[] = [];
let SRC_PAIRS: [string, string][] = [];
let SRC_CORPUS: { id: string; fr: string; respell?: string; form: string | null; use: string | null; family: string; drills: string[] }[] = [];
try {
  const lesson = await import('../../../ealch-admin/scripts/data/etre-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/etre-corpus.ts');
  SRC = lesson.ETRE_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_SPEAK = lesson.ETRE_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.ETRE_DICTATION_IDS as string[];
  SRC_PARADIGM = lesson.ETRE_PARADIGM_IDS as string[];
  SRC_SIX = corpus.THE_SIX as readonly string[];
  SRC_PARADIGM_FORMS = corpus.PARADIGM_FORMS as string[];
  SRC_USES = corpus.THE_USES as readonly string[];
  SRC_PAIRS = corpus.CONTRAST_PAIRS as [string, string][];
  SRC_CORPUS = corpus.ETRE as typeof SRC_CORPUS;
} catch {
  // Not available; the source-derived tests below no-op.
}
const noSrc = !SRC;
const noBoth = noSeed || noSrc;

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

/** The strings a LEARNER reads: section bodies and sheet bodies, with the
 *  authoring apparatus (ids, types, item ids, recording ids) left out.
 *
 *  Used by the "no avoir conjugation" test. Running that check over every string
 *  in the document would fire on legitimate context, because this lesson has to
 *  SAY that avoir is the next unit and has to show `ils ont` once as a contrast.
 *  A test that fires on correct content is a test the next author deletes. */
function productionStrings(): string[] {
  const skip = new Set(['id', 'type', 'render', 'layer', 'size', 'itemId', 'itemIds', 'items', 'ref', 'recordingId', 'sheetId', 'terms', 'accept', 'clipIds', 'detectOn', 'drill', 'retest', 'desc']);
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

/** The FRENCH a learner is shown, as opposed to the English that explains it.
 *
 *  Collected by field name rather than by guessing at the language, because the
 *  two are deliberately mixed on the same card all through this lesson: an
 *  A1 passage is English outside the guillemets, a deck card is a French line
 *  with an English body under it, and a tapTable row is both in one array.
 *
 *  These are the fields the renderer draws in the French face: `fr` on a deck
 *  card, an example, a listening line and a scene bubble; `cells` on a tapTable
 *  row; `target` on a speak question; `clip` on a listenChoose; and
 *  `wrong`/`right`, the two halves of a scene break.
 *
 *  `say` is deliberately NOT here, and that is not an oversight. The key means
 *  two different things depending on depth: `SectionExtras.say` is the coach's
 *  ENGLISH narration, while `TapRow.say` and `DeckCard`-level says are French.
 *  Including it made this check fire on "Same agreement as the last screen".
 *  Nothing is lost by dropping it: every French `say` in this lesson is built
 *  from an item the corpus already exposes through `fr` or `cells`. */
function frenchStrings(): string[] {
  const FRENCH_KEYS = new Set(['fr', 'target', 'clip', 'cells', 'wrong', 'right']);
  const out: string[] = [];
  const walk = (v: unknown, inFrench: boolean) => {
    if (typeof v === 'string') {
      if (inFrench) out.push(v);
      return;
    }
    if (Array.isArray(v)) {
      v.forEach((x) => walk(x, inFrench));
      return;
    }
    if (!v || typeof v !== 'object') return;
    for (const [k, val] of Object.entries(v)) {
      walk(val, inFrench || FRENCH_KEYS.has(k));
    }
  };
  walk(L!.sections, false);
  walk(L!.sheets ?? [], false);
  return out;
}

/* ─── 1. The lesson exists and is reachable ───────────────────────────────── */

test('a1.06.l1 exists in the seed and is well-formed', { skip: noSeed && 'a1.06.l1 not merged into the seed yet' }, () => {
  strictEqual(validateLesson(L!, L!.id).length, 0, 'schema issues on a1.06.l1');
  strictEqual(L!.unitId, 'a1.06');
  strictEqual(L!.level, 'a1');
});

test('the a1.06 unit links the lesson, so the Den can reach it', { skip: noSeed && 'not merged yet' }, () => {
  const unit = seed.units.find((u) => u.id === 'a1.06');
  ok(unit, 'a1.06 is not in the seed');
  ok(unit.lessonIds.includes('a1.06.l1'), 'the unit does not link its lesson, so no learner can open it');
});

test('the unit no longer declares a theme that does not exist', { skip: noSeed && 'not merged yet' }, () => {
  // a1.06 shipped with `themes: ["identite"]`. There is no `identite` theme and
  // there never has been, so the binding resolved to nothing. It is CLEARED
  // rather than created: a1.03, a1.04, a1.05 and a1.11 are all grammar units
  // carrying no theme.
  const unit = seed.units.find((u) => u.id === 'a1.06')!;
  const themes = (unit as { themes?: string[] }).themes;
  const real = new Set(seed.items.map((i) => i.theme));
  ok(!real.has('identite'), 'an `identite` theme now exists; this test and the unit binding both need revisiting');
  strictEqual(themes, undefined, 'a1.06 still declares a themes binding, and the theme it names does not exist');
});

test('the unit keeps the title, sub and canDo the Den advertises', { skip: noSeed && 'not merged yet' }, () => {
  const unit = seed.units.find((u) => u.id === 'a1.06')!;
  strictEqual(unit.title, 'The Verb Être (To Be)');
  strictEqual(unit.sub, 'Le verbe être');
  strictEqual(unit.canDo, 'Can say who they are, what they do and where they are from with être');
});

test('the tag agrees with the seq the renderer draws from', { skip: noSeed && 'not merged yet' }, () => {
  // missions.ts computes the eyebrow as `${level} · LEÇON ${unit.seq}` at render
  // time. The stored `tag` is a fallback and has to agree, or the two disagree
  // the moment something reads the field instead. a1.04.l1 ships that
  // disagreement today.
  const unit = seed.units.find((u) => u.id === 'a1.06')!;
  strictEqual(L!.tag, `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`);
});

/* ─── 2. The spine, in order ──────────────────────────────────────────────── */

test('the journey opens on a scene and closes quiz then roundup', { skip: noSeed && 'not merged yet' }, () => {
  const types = L!.sections.map((s) => s.type);
  strictEqual(types[0], 'scene', 'an A1 lesson opens on the stakes, not on a table');
  strictEqual(types[1], 'goals');
  strictEqual(types[types.length - 2], 'quiz');
  strictEqual(types[types.length - 1], 'roundup');
});

test('the journey is genuinely multimodal', { skip: noSeed && 'not merged yet' }, () => {
  // A lesson that is twenty card decks is a document, not a journey. Derived
  // rather than listed: the assertion is about VARIETY, so it counts distinct
  // types rather than naming the ones that happen to be here today.
  const types = new Set(L!.sections.map((s) => s.type));
  ok(types.size >= 10, `only ${types.size} distinct section types`);
  for (const required of ['scene', 'tapTable', 'cardDeck', 'practice', 'dictation', 'reading', 'scenario', 'quiz'] as const) {
    ok(types.has(required), `no ${required} section, so a whole modality is missing`);
  }
});

test('every act names sections that exist, and each section has exactly one act', { skip: noSeed && 'not merged yet' }, () => {
  const present = new Set(sectionIds());
  const claimed = new Map<string, string>();
  for (const act of L!.acts ?? []) {
    for (const sid of act.sections) {
      ok(present.has(sid), `act ${act.id} names "${sid}", which is not a section`);
      ok(!claimed.has(sid), `"${sid}" is claimed by both ${claimed.get(sid)} and ${act.id}`);
      claimed.set(sid, act.id);
    }
  }
  // And no section is orphaned. An act boundary is what releases that act's SRS
  // tranche, so a section in no act is content whose cards never arrive.
  const orphans = sectionIds().filter((id) => !claimed.has(id));
  strictEqual(orphans.length, 0, `section(s) in no act at all: ${orphans.join(', ')}`);
});

test('the act structure is the one the lesson was designed around', { skip: noSeed && 'not merged yet' }, () => {
  // Seven acts: the six forms, then the uses, then c'est against il est, then
  // prove it. Named rather than counted, because the NAMES are the argument: an
  // act that quietly loses "c'est against il est" is the decay this file exists
  // to catch.
  const acts = L!.acts ?? [];
  strictEqual(acts.length, 7, 'the act count moved');
  ok(
    acts.some((a) => /c'est/i.test(a.title)),
    "no act is about c'est against il est, which is the part of this lesson a learner keeps longest",
  );
  // Every tranche is index-aligned with an act, or cards are released against
  // an act that does not exist.
  strictEqual((L!.deckTranche ?? []).length, acts.length, 'deckTranche is not index-aligned with acts');
});

/* ─── 3. The reframe ──────────────────────────────────────────────────────── */

test('the reframe appears verbatim as often as it was authored', { skip: noBoth && 'seed or source unavailable' }, () => {
  strictEqual(L!.reframe, SRC_REFRAME, 'the seed and the source disagree about the reframe itself');
  const seedHits = strings(L!).filter((s) => s.includes(SRC_REFRAME)).length;
  const srcHits = strings(SRC!).filter((s) => s.includes(SRC_REFRAME)).length;
  strictEqual(seedHits, srcHits, 'the reframe appears a different number of times in the seed than in the source');
  // The density validator counts SECTIONS and wants at least three. This lesson
  // is authored well above that; the assertion is that it has not been
  // paraphrased down, which is the way a reframe actually dies.
  const sections = L!.sections.filter((s) => strings(s).some((x) => x.includes(SRC_REFRAME))).length;
  ok(sections >= 5, `the reframe carries only ${sections} sections`);
});

/* ─── 4. All six forms are taught, and each is tested ─────────────────────── */

test('all six forms of être reach a production surface', { skip: noSeed && 'not merged yet' }, () => {
  // The point of this lesson. A form that is in the corpus but on no screen is
  // a form the learner never meets.
  const text = productionStrings().join('   ');
  for (const form of ['suis', 'es', 'est', 'sommes', 'êtes', 'sont']) {
    // Word-boundary match, because `es` is a substring of half the French in
    // this lesson and a naive includes() would pass on `mes` and `êtes`.
    const re = new RegExp(`(^|[^\\p{L}])${form}([^\\p{L}]|$)`, 'u');
    ok(text.split('   ').some((s) => re.test(s)), `the form "${form}" appears on no screen`);
  }
});

test('tu es and vous êtes are taught by name, not left thin', { skip: noBoth && 'seed or source unavailable' }, () => {
  // These two are the ones most likely to go thin: the shipped corpus holds 4
  // `tu es` and 8 `vous êtes` against 28 `il est`, so they are the forms an
  // author has least material for and is most tempted to skip.
  //
  // Asserted through the CORPUS's own `form` field rather than by grepping
  // French, so a rewording cannot silently drop one.
  for (const form of ['es', 'êtes'] as const) {
    const ids = SRC_CORPUS.filter((w) => w.form === form).map((w) => w.id);
    ok(ids.length >= 2, `only ${ids.length} corpus item(s) carry the form "${form}"`);
    // And at least one of them is actually named by a section.
    const named = strings(L!.sections).filter((s) => ids.includes(s));
    const shown = ids.some((id) => strings(L!.sections).some((s) => s.includes(ITEMS.get(id)?.fr ?? ' ')));
    ok(named.length > 0 || shown, `no section names or shows any "${form}" item`);
  }
});

test('the paradigm puts all six forms on screen and nothing else', { skip: noSrc && 'source unavailable' }, () => {
  // The reframe is arithmetic, so it can be checked rather than believed. If a
  // paradigm sentence is ever reworded onto a different form, this fails rather
  // than the lesson shipping a claim its own content contradicts.
  strictEqual(SRC_PARADIGM_FORMS.length, 6, `the paradigm carries ${SRC_PARADIGM_FORMS.length} forms: ${SRC_PARADIGM_FORMS.join(', ')}`);
  strictEqual(SRC_PARADIGM.length, 6, 'the paradigm is not six sentences');
  for (const f of SRC_SIX) {
    ok(SRC_PARADIGM_FORMS.includes(f), `the paradigm never shows the form "${f}"`);
  }
});

test('each of the six is tested somewhere in the exam', { skip: noSeed && 'not merged yet' }, () => {
  // Being taught is not being tested. Every form has to appear in a question, an
  // accepted answer, or an option, or the exam certifies less than the lesson
  // claims to teach.
  const qs = quizQuestions(theQuiz());
  const examText = strings(qs).join('   ').split('   ');
  for (const form of ['suis', 'es', 'est', 'sommes', 'êtes', 'sont']) {
    const re = new RegExp(`(^|[^\\p{L}])${form}([^\\p{L}]|$)`, 'u');
    ok(examText.some((s) => re.test(s)), `the exam never tests the form "${form}"`);
  }
});

/* ─── 5. Every use the canDo names reaches a section ──────────────────────── */

test('every use reaches a section, including the fourth one this lesson added', { skip: noBoth && 'seed or source unavailable' }, () => {
  // The canDo names three: who you are, what you do, where you are from.
  // Description is the fourth, argued for in the header of etre-lesson.ts, and
  // it is asserted here so it cannot be quietly dropped by a later trim. If a
  // future author decides to remove it, that is a decision that has to be made
  // in this file rather than by deleting a mission.
  strictEqual(SRC_USES.length, 4, `the corpus names ${SRC_USES.length} uses, not four`);
  for (const u of ['identity', 'profession', 'origin', 'description'] as const) {
    ok(SRC_USES.includes(u), `the use "${u}" is no longer declared`);
    const ids = SRC_CORPUS.filter((w) => w.use === u).map((w) => w.id);
    ok(ids.length > 0, `the use "${u}" has no corpus items`);
    // And something on a screen shows one of them.
    const onScreen = ids.some((id) => {
      const item = SRC_CORPUS.find((w) => w.id === id)!;
      return strings(L!.sections).some((s) => s.includes(item.fr));
    });
    ok(onScreen, `no section shows any item for the use "${u}"`);
  }
});

test('the two shapes of origin are both taught, because they behave differently', { skip: noSrc && 'source unavailable' }, () => {
  // "Where you are from" hides two grammars: a nationality adjective that agrees
  // and `de` plus a place that never does. Teaching only one of them satisfies
  // the canDo's wording and leaves the learner unable to answer the question
  // half the time.
  const origin = SRC_CORPUS.filter((w) => w.use === 'origin');
  ok(origin.some((w) => /\bde\s|\bd'/.test(w.fr)), 'no `de` plus a place anywhere in the origin set');
  ok(
    origin.some((w) => /français|française|espagnole|canadiens/.test(w.fr)),
    'no nationality adjective anywhere in the origin set',
  );
  // The agreement pair has to be a PAIR, or the agreement cannot be seen.
  ok(origin.some((w) => w.fr.includes('français.')), 'the masculine of the agreement pair is missing');
  ok(origin.some((w) => w.fr.includes('française.')), 'the feminine of the agreement pair is missing');
});

/* ─── 6. The assertion worth the most: c'est is a TEST, not a list ────────── */

test("the c'est rule is stated as a mechanical test on a production surface", { skip: noSeed && 'not merged yet' }, () => {
  // THE ASSERTION THIS FILE EXISTS FOR.
  //
  // a1.11 already gave the learner a list of examples with c'est as an
  // exception. If a1.06 also ships only examples, it has added nothing and the
  // learner still has no way to decide a sentence they have not seen.
  //
  // So: some surface a learner actually reads must state the test in terms of
  // what is in FRONT OF THE NOUN. Matched on the mechanism rather than on one
  // phrasing, so a rewrite that keeps the teaching passes and a rewrite that
  // keeps only the examples does not.
  const text = productionStrings();
  const statesTest = text.some(
    (s) => /little word/i.test(s) && /(in front|front of)/i.test(s) && /c'est|c’est/i.test(s),
  );
  ok(statesTest, "no surface states the determiner test: the rule has decayed back into a list of examples");

  // And the other half of it, which is what generalises past a1.11: a BARE noun
  // or an ADJECTIVE takes il est.
  const statesBare = text.some((s) => /bare noun/i.test(s) && /adjective/i.test(s) && /il est/i.test(s));
  ok(statesBare, "no surface states the other half of the test (a bare noun or an adjective takes il est)");
});

test("the c'est rule is generalised past professions, which is what a1.11 left undone", { skip: noSeed && 'not merged yet' }, () => {
  // a1.11's version was scoped to jobs. The test only becomes a rule when it
  // also covers a name, a possessive, a definite article and something that is
  // not a person at all.
  const text = productionStrings().join(' ');
  ok(/C'est Marc|C’est Marc/.test(text), 'the rule is never shown on a name');
  ok(/C'est ma sœur|C’est ma sœur|C'est mon collègue|C’est mon collègue/.test(text), 'the rule is never shown on a possessive');
  ok(/C'est le directeur|C’est le directeur/.test(text), 'the rule is never shown on a definite article');
  ok(/bonne idée/.test(text), 'the rule is never shown on something that is not a person');
  ok(/Ce sont/.test(text), "ce sont, the plural of c'est, is never taught");
});

test("a quiz question tests the c'est rule as a decision, not as recall", { skip: noSeed && 'not merged yet' }, () => {
  const qs = quizQuestions(theQuiz());
  // At least one question has to make the learner APPLY the test rather than
  // recognise a sentence they saw. errorSpot and typeIn both do; mcq can, and
  // the round that owns this material is checked as a whole below.
  const applied = qs.filter(
    (q) =>
      (q.format === 'errorSpot' || q.format === 'typeIn') &&
      /c'est|c’est|il est|elle est|ce sont/i.test(`${q.q} ${q.answer ?? ''} ${(q.accept ?? []).join(' ')}`),
  );
  ok(applied.length >= 3, `only ${applied.length} produce-format question(s) test the c'est rule`);

  // And the rule itself is asked directly at least once, so a learner who can
  // pattern-match the examples but not state the rule is caught.
  const stated = qs.some((q) => /what decides between/i.test(q.q) && /little word/i.test((q.opts ?? []).join(' ')));
  ok(stated, 'no question asks what actually decides between the two');
});

test('the contrast pairs resolve on both halves', { skip: noBoth && 'seed or source unavailable' }, () => {
  // The two-column table is the rule made visible, and one of its three rows is
  // a1.11's pair rather than this lesson's. If either half moves, the table
  // draws a comparison with a hole in it and nothing else fails.
  ok(SRC_PAIRS.length >= 3, `only ${SRC_PAIRS.length} contrast pair(s)`);
  for (const [withDet, bare] of SRC_PAIRS) {
    ok(ITEMS.has(withDet), `contrast pair names ${withDet}, which is not in the corpus`);
    ok(ITEMS.has(bare), `contrast pair names ${bare}, which is not in the corpus`);
    const a = ITEMS.get(withDet)!.fr;
    const b = ITEMS.get(bare)!.fr;
    ok(/^(C'est|C’est|Ce sont)/.test(a), `the "with determiner" half of a pair is not a c'est sentence: "${a}"`);
    ok(!/^(C'est|C’est|Ce sont)/.test(b), `the "bare" half of a pair is a c'est sentence: "${b}"`);
  }
});

/* ─── 7. The lesson does not bleed into its neighbours ────────────────────── */

test('no avoir conjugation is taught', { skip: noSeed && 'not merged yet' }, () => {
  // Written against PRODUCTION SURFACES rather than every string, because this
  // lesson legitimately says that avoir is next and legitimately shows `ils ont`
  // once as a minimal pair. A test that fired on those would be deleted by the
  // next author, which is worse than not having it.
  //
  // `ont` is therefore ALLOWED and counted; every other form of avoir is not.
  //
  // TWO checks over two different surfaces, because the rule has two halves and
  // one predicate over everything cannot express both without firing on correct
  // content:
  //
  //   1. No avoir conjugation in the FRENCH the lesson displays. Scoped to the
  //      French-bearing fields rather than to every string, because `ai`, `as`
  //      and `on a` are all ordinary English and a substring rule over prose
  //      fires on "starts on a consonant" and "counts as bare". A test that
  //      fires on correct content is a test the next author deletes.
  //   2. No avoir PARADIGM spelled out in prose. This is the one that caught a
  //      real bleed: v1 of sheet.a1.06.paradigm listed all six forms as a run
  //      inside an English sentence, which is a1.07's lesson given away in a
  //      reference sheet. Check 1 could never have seen it.
  const AVOIR = /(^|[^\p{L}'’])(ai|as|avons|avez)([^\p{L}]|$)/u;
  for (const s of frenchStrings()) {
    const hit = s.match(AVOIR);
    ok(!hit, `an avoir form appears in displayed French: "${hit?.[2]}" in "${s.slice(0, 70)}"`);
  }
  const PARADIGM_RUN = /\bai\s*,\s*as\s*,/i;
  for (const s of productionStrings()) {
    ok(!PARADIGM_RUN.test(s), `the avoir paradigm is listed out on a screen: "${s.slice(0, 70)}"`);
  }
  const text = productionStrings();
  // `ils ont` may appear, and only as a contrast against `ils sont`.
  //
  // NOT asserted by counting mentions. An earlier version of this test capped it
  // at four surfaces and failed at nine, and every one of the nine was a
  // sentence EXPLAINING the contrast rather than teaching avoir. A count cannot
  // tell those apart, so it would have been satisfied by deleting explanation,
  // which is the opposite of what the rule wants.
  //
  // What actually distinguishes "a contrast" from "a mission" is ownership:
  // whether avoir has corpus rows, and whether any section is ABOUT it.
  ok(text.some((s) => /\bils ont\b/i.test(s)), '`ils sont` against `ils ont` is never named, and it is the pair that sets up a1.07');

  // 1. No corpus row. A corpus item is released to the flashcard hub and to
  //    spaced repetition, so an avoir row here would DRILL a1.07's material.
  if (!noSrc) {
    const rows = SRC_CORPUS.filter((w) => /(^|[^\p{L}'’])(ai|as|a|avons|avez|ont)([^\p{L}]|$)/u.test(w.fr));
    strictEqual(rows.length, 0, `avoir reaches the corpus: ${rows.map((w) => `${w.id} "${w.fr}"`).join(', ')}`);
  }

  // 2. No section is about it. A title or a French subtitle naming avoir is a
  //    mission on avoir however carefully the body is worded.
  for (const s of L!.sections) {
    const label = `${(s as { title?: string }).title ?? ''} ${(s as { frSub?: string }).frSub ?? ''}`;
    ok(!/\bavoir\b|\bont\b/i.test(label), `${(s as { id?: string }).id} is titled after avoir: "${label.trim()}"`);
  }

  // 3. No act is about it either, and no tranche releases one.
  for (const a of L!.acts ?? []) {
    ok(!/\bavoir\b/i.test(a.title), `act ${a.id} is about avoir: "${a.title}"`);
  }
});

test('no passé composé, which is A2 material', { skip: noSeed && 'not merged yet' }, () => {
  const text = productionStrings().join(' ');
  ok(!/passé composé/i.test(text), 'the passé composé is mentioned, and the learner has no past tense to hang it on');
  // The auxiliary use, named or demonstrated.
  ok(!/\b(est|sont|suis)\s+(allé|allée|allés|venu|venue|parti|partie|resté|né)/i.test(text), 'a passé composé with être appears on a screen');
});

test('no pronoun act: a1.05 taught those and this lesson assumes them', { skip: noSeed && 'not merged yet' }, () => {
  // The brief was written when a1.05 was empty and planned for introducing the
  // nine pronouns here. a1.05 has since shipped, so re-teaching them would be a
  // second telling, and a learner told the same thing twice stops believing the
  // second telling.
  ok(
    (L!.grammarAssumed ?? []).some((g) => /a1\.05/.test(g)),
    'the lesson does not declare that it assumes a1.05',
  );
  const paradigmTable = sec('s04-table');
  ok(paradigmTable && paradigmTable.type === 'tapTable', 's04-table is missing or is not a tapTable');
  strictEqual(paradigmTable.rows.length, 6, 'the in-flow paradigm is not six rows, so it is re-deriving a1.05 rather than assuming it');
});

/* ─── 8. Nothing authored may go unrendered ───────────────────────────────── */

test('the pager can reach every authored quiz question', { skip: noSeed && 'not merged yet' }, () => {
  // lessonPager.logic.ts appends exactly ONE quiz page and resolves it with
  // sections.find(s => s.type === 'quiz'). a1.01 shipped 12 unreachable
  // questions this way and its own test asserted they were "substantial".
  const quizzes = L!.sections.filter((s) => s.type === 'quiz');
  strictEqual(quizzes.length, 1, `${quizzes.length} quiz sections; the pager renders only the first`);
});

test('every drill can actually be fired by a round', { skip: noSeed && 'not merged yet' }, () => {
  // drillForRound walks a round's targets and returns the first one that HAS a
  // drill, then stops. So a drill whose trigger is never named first can never
  // fire, however many rounds mention it. a1.05 ships two such drills today and
  // its own test catches them; this is the same check, made before shipping.
  const quiz = theQuiz();
  const drillFor = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const retests = new Set((L!.errorTriggers ?? []).map((t) => t.retest).filter(Boolean) as string[]);
  const fired = new Set<string>();
  for (const r of quiz.rounds ?? []) {
    for (const target of r.targets ?? []) {
      const d = drillFor.get(target);
      if (d) {
        fired.add(d);
        break;
      }
    }
  }
  const unreachable = (L!.drills ?? []).map((d) => d.id).filter((id) => !fired.has(id) && !retests.has(id));
  strictEqual(unreachable.length, 0, `drill(s) no round can fire: ${unreachable.join(', ')}`);

  // Every trigger a round names has to exist, and every trigger's drill and
  // retest have to exist too.
  const known = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of L!.errorTriggers ?? []) {
    ok(known.has(t.drill), `trigger ${t.id} names drill "${t.drill}", which is not authored`);
    if (t.retest) ok(known.has(t.retest), `trigger ${t.id} names retest "${t.retest}", which is not authored`);
    // And every section it watches exists.
    for (const d of t.detectOn) {
      const base = d.split('/')[0];
      ok(sectionIds().includes(base), `trigger ${t.id} detects on "${d}", and section "${base}" does not exist`);
    }
  }
});

test('a commonErrors section sets swipe, or it draws a blank screen', { skip: noSeed && 'not merged yet' }, () => {
  // a1.01 mission 5 was a fully blank screen for exactly this reason: without
  // `swipe` the section hit a `break` that fell out of the switch and returned
  // undefined.
  for (const s of L!.sections) {
    if (s.type !== 'commonErrors') continue;
    const x = s as LessonSection & { swipe?: boolean; size?: string };
    ok(x.swipe, `${(s as { id?: string }).id}: commonErrors without swipe renders nothing`);
    strictEqual(x.size, 'lg', `${(s as { id?: string }).id}: commonErrors wants size lg, one error per screen`);
  }
});

test('the reading glossary is authored where something renders it', { skip: noSeed && 'not merged yet' }, () => {
  // MissionSection routes `reading` to ReadingMission — the only path that
  // reaches PassagePage and so the only path that draws the glossary underlines
  // — when questionsInModal is set AND the section has questions. a1.01 shipped
  // five entries down the fallback path and they rendered nowhere.
  const r = L!.sections.find((s) => s.type === 'reading');
  ok(r, 'no reading section');
  const x = r as Extract<LessonSection, { type: 'reading' }> & { questionsInModal?: boolean };
  ok(x.glossary?.length, 'the reading section has no glossary');
  ok(x.questionsInModal && x.questions?.length, 'the glossary is authored where nothing renders it');
});

test('every glossary entry actually matches a token in the passage', { skip: noSeed && 'not merged yet' }, () => {
  // Checked through the REAL matcher the renderer runs, not a re-implementation.
  // Ten glossary entries across sons.05, .07 and .09 shipped invisible because
  // the lookup key was normalised differently from the passage token, and a
  // test with its own copy of the lookup would have passed on all of them.
  const r = L!.sections.find((s) => s.type === 'reading') as Extract<LessonSection, { type: 'reading' }>;
  const keys = new Set((r.glossary ?? []).flatMap((g) => glossKeys(g.word)));
  const matched = new Set(
    segmentSentence(r.text, keys).filter((seg) => seg.key).map((seg) => seg.key as string),
  );
  for (const g of r.glossary ?? []) {
    const mine = glossKeys(g.word);
    ok(mine.some((k) => matched.has(k)), `glossary entry "${g.word}" matches nothing in the passage, so it draws no underline`);
  }
});

test('the passage is one line, because PassagePage swallows newlines', { skip: noSeed && 'not merged yet' }, () => {
  // PassagePage does text.split(/(?<=[.!?»])\s+/) and renders the pieces inline
  // in a single TX, so every authored \n is swallowed. a1.01's passage authors
  // eight of them and none of them draws.
  const r = L!.sections.find((s) => s.type === 'reading') as Extract<LessonSection, { type: 'reading' }>;
  ok(!r.text.includes('\n'), 'the passage carries a newline that will not render');
});

test('the A1 passage rule holds: outside the guillemets, it is English', { skip: noSeed && 'not merged yet' }, () => {
  // Paul's rule, set on a1.01's reading passage 2026-08-04. An A1 learner's
  // reading effort belongs on the exchange, and the stage directions are
  // context, which is instruction.
  const r = L!.sections.find((s) => s.type === 'reading') as Extract<LessonSection, { type: 'reading' }>;
  const outside = r.text.replace(/«[^»]*»/g, ' ');
  // A French function word outside the quotes is the signal. Deliberately a
  // small, high-frequency set: a broad dictionary would fire on proper nouns.
  const french = /(^|[^\p{L}])(le|la|les|un|une|des|est|sont|dans|avec|pour|elle|vous)([^\p{L}]|$)/iu;
  ok(!french.test(outside), `French outside the guillemets: "${outside.match(french)?.[0]}"`);
});

test('a term chip names a term the lesson defines, and no section declares more than three', { skip: noSeed && 'not merged yet' }, () => {
  // The renderer shows three and collapses the rest. Seven sons.06 sections
  // declare more, and those chips are invisible.
  const defined = new Set(Object.keys(L!.terms ?? {}));
  for (const s of L!.sections) {
    const chips = (s as { terms?: string[] }).terms ?? [];
    ok(chips.length <= 3, `${(s as { id?: string }).id} declares ${chips.length} term chips; the renderer shows 3`);
    for (const c of chips) ok(defined.has(c), `${(s as { id?: string }).id}: term chip "${c}" is not in the glossary`);
  }
  // And every defined term is used somewhere, or it is a definition nobody can
  // reach.
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  const orphans = [...defined].filter((t) => !used.has(t));
  strictEqual(orphans.length, 0, `term(s) defined but chipped by no section: ${orphans.join(', ')}`);
});

test('a sheetId names a sheet the lesson declares', { skip: noSeed && 'not merged yet' }, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  for (const s of L!.sections) {
    const ref = (s as { sheetId?: string }).sheetId;
    if (!ref) continue;
    ok(sheetIds.has(ref), `${(s as { id?: string }).id}: sheetId "${ref}" matches no sheet`);
  }
  // And every sheet is reachable from at least one section, or it is a document
  // with no door into it.
  const referenced = new Set(L!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean));
  for (const sh of L!.sheets ?? []) {
    ok(referenced.has(sh.id), `sheet "${sh.id}" is named by no section, so no learner can open it`);
  }
});

test('a quiz ref points at a section that exists', { skip: noSeed && 'not merged yet' }, () => {
  const present = new Set(sectionIds());
  for (const q of quizQuestions(theQuiz())) {
    ok(q.ref, `question has no ref: "${q.q.slice(0, 50)}"`);
    ok(present.has(q.ref!), `a question refs "${q.ref}", which is not a section`);
  }
});

test('no table sits in the flow, where it is not allowed to render', { skip: noSeed && 'not merged yet' }, () => {
  // The density validator bans a `table` at layer core. Tables belong in a
  // reference sheet, which is the one place density is deliberately fine.
  for (const s of L!.sections) {
    ok(s.type !== 'table', `${(s as { id?: string }).id}: a table in the flow`);
  }
  // And the sheets that DO carry tables are layer deep.
  for (const sh of L!.sheets ?? []) {
    for (const s of sh.sections ?? []) {
      if (s.type !== 'table') continue;
      strictEqual((s as { layer?: string }).layer, 'deep', `sheet table ${(s as { id?: string }).id} is not layer deep`);
    }
  }
});

/* ─── 9. Drills, practice and the dictée resolve ──────────────────────────── */

test('practice and dictation drill only resolvable corpus items', { skip: noSeed && 'not merged yet' }, () => {
  for (const s of L!.sections) {
    if (s.type !== 'practice' && s.type !== 'dictation') continue;
    const ids = (s as { itemIds?: string[] }).itemIds ?? [];
    ok(ids.length > 0, `${(s as { id?: string }).id}: an empty drill`);
    for (const id of ids) ok(ITEMS.has(id), `${(s as { id?: string }).id}: ${id} is not in the corpus`);
  }
});

test('the speak mission names only items the mic can score', { skip: noBoth && 'seed or source unavailable' }, () => {
  // An item without `voiceflash` renders as a card the mic cannot score, which
  // reads as a broken mission rather than a missing tag.
  for (const id of SRC_SPEAK) {
    const item = ITEMS.get(id);
    ok(item, `speak names ${id}, which is not in the seed`);
    ok(item.drills.includes('voiceflash'), `speak names ${id} ("${item.fr}"), which has no voiceflash drill`);
  }
});

test('the dictée lands in word mode and is worth assembling', { skip: noBoth && 'seed or source unavailable' }, () => {
  // Asked of the REAL module the renderer uses, not of a restated threshold.
  // Several sentences in this lesson sit within a letter of the boundary:
  // `Vous êtes en retard.` is exactly 16 and falls to letter mode, which is why
  // it is not here.
  for (const id of SRC_DICTATION) {
    const item = ITEMS.get(id);
    ok(item, `the dictée names ${id}, which is not in the seed`);
    strictEqual(dicteeMode(item.fr), 'words', `dictée "${item.fr}" would spell letter by letter`);
    ok(dicteeWords(item.fr).length >= 4, `dictée "${item.fr}" is too short to be worth assembling`);
    ok(item.drills.includes('dictation'), `dictée names ${id}, which has no dictation drill`);
  }
});

test('a dictation tag is never a promise the renderer cannot keep', { skip: noSrc && 'source unavailable' }, () => {
  // The inverse of the test above, and the one that matters for the NEXT author:
  // an item tagged for dictation that cannot reach word mode gives the learner a
  // bank of single letters. Checked over every authored item, not only the ones
  // the dictée currently names.
  const broken = SRC_CORPUS.filter((w) => w.drills.includes('dictation') && dicteeMode(w.fr) !== 'words');
  strictEqual(broken.length, 0, `item(s) tagged for dictation that would spell letter by letter: ${broken.map((w) => `${w.id} "${w.fr}"`).join(', ')}`);
});

test('a drill that works over corpus items names ids, not display strings', { skip: noSeed && 'not merged yet' }, () => {
  // A drill scores against the corpus, so it plays the same audio and reads the
  // same spelling as every other card that teaches these. Passing display
  // strings here validates as broken ids and renders as empty cards.
  for (const d of L!.drills ?? []) {
    for (const id of d.items ?? []) {
      ok(ITEMS.has(id), `drill ${d.id} names "${id}", which is not a corpus id`);
    }
  }
});

test('every tranche releases only items the lesson teaches, and releases each once', { skip: noSeed && 'not merged yet' }, () => {
  const taught = new Set(L!.itemIds);
  const seen = new Set<string>();
  for (const [i, tranche] of (L!.deckTranche ?? []).entries()) {
    for (const id of tranche) {
      ok(taught.has(id), `tranche ${i} releases ${id}, which this lesson does not teach`);
      ok(ITEMS.has(id), `tranche ${i} releases ${id}, which is not in the corpus`);
      ok(!seen.has(id), `${id} is released by more than one tranche`);
      seen.add(id);
    }
  }
  // Everything the lesson teaches is released somewhere, or the card never
  // reaches spaced repetition at all.
  const never = [...taught].filter((id) => !seen.has(id));
  strictEqual(never.length, 0, `item(s) taught but never released to SRS: ${never.join(', ')}`);
});

/* ─── 10. The exam ────────────────────────────────────────────────────────── */

test('the exam is at most half mcq', { skip: noSeed && 'not merged yet' }, () => {
  // Recognition can be passed by elimination. Derived, not hardcoded.
  const qs = quizQuestions(theQuiz());
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} questions are mcq`);
});

test('errorSpot carries real weight, because this lesson was made for it', { skip: noSeed && 'not merged yet' }, () => {
  // `il est un médecin`, `vous es`, `nous êtes`: every one is a sentence a
  // learner actually produces, and showing the wrong one and asking for the fix
  // tests the rule rather than the recall.
  const qs = quizQuestions(theQuiz());
  const spot = qs.filter((q) => q.format === 'errorSpot').length;
  ok(spot >= 5, `only ${spot} errorSpot question(s) in an exam of ${qs.length}`);
});

test('every question has a why and a ref', { skip: noSeed && 'not merged yet' }, () => {
  // Every built A1 lesson is at 100% why coverage, and a1.04 came off the waiver
  // list on 2026-08-05 by earning it. This lesson does not reverse that.
  const qs = quizQuestions(theQuiz());
  const noWhy = qs.filter((q) => !q.why?.trim());
  strictEqual(noWhy.length, 0, `${noWhy.length}/${qs.length} questions have no why (first: "${noWhy[0]?.q}")`);
  const noRef = qs.filter((q) => !q.ref?.trim());
  strictEqual(noRef.length, 0, `${noRef.length}/${qs.length} questions have no ref`);
});

test('a why teaches the rule rather than restating the answer', { skip: noSeed && 'not merged yet' }, () => {
  // The cheapest way to reach 100% why coverage is to write the answer again in
  // a full sentence. This catches the laziest form of that: a why that is
  // nothing but the correct option.
  for (const q of quizQuestions(theQuiz())) {
    const answer = typeof q.correct === 'number' ? q.opts?.[q.correct] : (q.answer ?? '');
    if (!answer) continue;
    ok(fold(q.why!) !== fold(answer), `the why on "${q.q.slice(0, 40)}" is just the answer restated`);
    ok(q.why!.length > answer.length, `the why on "${q.q.slice(0, 40)}" is no longer than the answer`);
  }
});

test('every free-text question accepts the answer it displays', { skip: noSeed && 'not merged yet' }, () => {
  // fold() strips accents, case, punctuation and ALL whitespace, so `c'est` and
  // `cest` both pass. That is fine for testing the form; it means the apostrophe
  // and the circumflex cannot be tested with typeIn, and errorSpot is what to
  // reach for when the written shape is the thing being tested.
  for (const q of quizQuestions(theQuiz())) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    ok(q.accept?.length, `${q.format} question has no accept list: "${q.q.slice(0, 50)}"`);
    ok(q.answer, `${q.format} question shows no canonical answer: "${q.q.slice(0, 50)}"`);
    const accepted = q.accept!.map(fold);
    ok(
      accepted.includes(fold(q.answer!)),
      `"${q.answer}" is shown as the answer but is not in the accept list for "${q.q.slice(0, 50)}"`,
    );
  }
});

test('a closed question has no duplicate options and a correct index in range', { skip: noSeed && 'not merged yet' }, () => {
  for (const q of quizQuestions(theQuiz())) {
    if (!q.opts?.length || typeof q.correct !== 'number') continue;
    strictEqual(new Set(q.opts).size, q.opts.length, `duplicate option in "${q.q.slice(0, 50)}"`);
    ok(q.correct >= 0 && q.correct < q.opts.length, `correct index out of range in "${q.q.slice(0, 50)}"`);
  }
});

test('correct answers do not cluster in one slot', { skip: noSeed && 'not merged yet' }, () => {
  // The density validator fails any slot over 40%. Asserted here too because
  // this is the rule an author breaks by writing every question the same way,
  // and the failure is a learner who can pass by always picking the third one.
  const slots = quizQuestions(theQuiz())
    .filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number')
    .map((q) => q.correct as number);
  const tally = new Map<number, number>();
  for (const s of slots) tally.set(s, (tally.get(s) ?? 0) + 1);
  for (const [slot, n] of tally) {
    ok((n / slots.length) * 100 <= 40, `${((n / slots.length) * 100).toFixed(0)}% of correct answers sit in slot ${slot}`);
  }
});

test('every round names targets, and leads on a different trigger from the others', { skip: noSeed && 'not merged yet' }, () => {
  // The structural consequence of drillForRound reading only as far as the first
  // target that has a drill: if two rounds lead on the same trigger, one drill
  // in the lesson is dead. Asserted directly so the next author does not have to
  // infer it from the drill-reachability test above.
  const quiz = theQuiz();
  const drillFor = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const leads = new Set<string>();
  for (const r of quiz.rounds ?? []) {
    ok(r.targets?.length, `round ${r.id} names no targets, so it can fire no drill`);
    const lead = r.targets!.find((t) => drillFor.has(t));
    ok(lead, `round ${r.id} names no target that has a drill`);
    ok(!leads.has(lead!), `round ${r.id} leads on "${lead}", which another round already leads on`);
    leads.add(lead!);
  }
});

/* ─── 11. Notation, house style and audio briefs ──────────────────────────── */

test('every inlined respelling follows the nasal convention', { skip: noSrc && 'source unavailable' }, () => {
  // `sont` is a nasal vowel and it is one of the six forms this lesson is named
  // for, so [SONT] or [SON] would be wrong on the one card the unit exists for.
  //
  // Imported from density.logic.ts rather than re-implemented: the corpus at
  // large is not a safe source of truth for this rule (71 of the 180 nombres
  // respellings break it today), so a local copy would be a second
  // implementation free to drift from the validator that gates the build.
  //
  // This must also NOT fire on `sommes` -> [noo SOM]. The doubled m is a real
  // pronounced consonant, which is the distinction hasPlainNasalFor draws.
  for (const w of SRC_CORPUS) {
    if (!w.respell) continue;
    ok(!hasPlainNasalFor(w.fr, w.respell), `${w.id} "${w.fr}" respelled "${w.respell}" closes a nasal with a plain n or m`);
  }
});

test('the seed copy of every authored item keeps its respelling convention', { skip: noSeed && 'not merged yet' }, () => {
  // The same rule, over what the learner actually receives, so a merge that
  // wrote an older copy is caught.
  for (const id of L!.itemIds) {
    const item = ITEMS.get(id);
    if (!item?.respell) continue;
    ok(!hasPlainNasalFor(item.fr, item.respell), `${id} "${item.fr}" -> "${item.respell}" breaks the nasal convention in the seed`);
  }
});

test('the authored copy carries no em dash, no honest, and no U+203F tie', { skip: noSeed && 'not merged yet' }, () => {
  const all = JSON.stringify(L!);
  ok(!all.includes('—'), 'em dash in authored copy');
  ok(!/honest/i.test(all), 'the word "honest" is banned from authored content');
  // U+203F renders as a low underscore on a Pixel 6 and shipped that way in
  // sons.10 and a1.04. This lesson teaches a liaison, so the temptation is real.
  ok(!all.includes('‿'), 'U+203F tie character, which renders as an underscore on a device');
});

test('the lesson passes the density validator against the real corpus', { skip: noSeed && 'not merged yet' }, () => {
  const known = new Set(seed.items.map((i) => i.id));
  const issues = validateDensity(L!, known);
  strictEqual(issues.length, 0, `density issues:\n${formatDensity(issues)}`);
});

test('the audio briefs pin the three constraints that cannot be recovered later', { skip: noSeed && 'not merged yet' }, () => {
  // A constraint on HOW something is recorded becomes invisible the moment the
  // clip is delivered, so it is pinned here as well as written in the brief, the
  // way sons.07's rec-h-pairs pins its own.
  const recs = L!.audio?.recorded ?? [];
  const by = (id: string) => recs.find((r) => r.id === id);

  // 1. The paradigm is ONE take, in order, one voice, one speed. Six forms
  //    recorded in six sessions are six performances.
  const para = by('rec-a1-06-paradigm');
  ok(para, 'no paradigm recording is requested');
  ok(/one continuous take/i.test(para.desc) && /paradigm order/i.test(para.desc), 'the paradigm brief does not pin one continuous take in order');
  ok(/one voice/i.test(para.desc) && /one speed/i.test(para.desc), 'the paradigm brief does not pin one voice at one speed');

  // 2. vous êtes keeps its liaison and is never two words with a gap.
  const li = by('rec-a1-06-liaison');
  ok(li, 'no liaison recording is requested');
  ok(/liaison intact/i.test(li.desc) && /never as two words/i.test(li.desc), 'the liaison brief does not pin the join');

  // 3. ils sont and ils ont are in the SAME take, so the contrast is real.
  const pair = by('rec-a1-06-sont-ont');
  ok(pair, 'no sont/ont recording is requested');
  ok(/same take/i.test(pair.desc), 'the ils sont / ils ont brief does not pin one take');
  ok(/ils ont/i.test((pair.clipIds ?? []).join(' ')), 'the contrast take does not actually include ils ont');
});

test('no section authors autoplay, which no component implements', { skip: noSeed && 'not merged yet' }, () => {
  // Declared in schema.ts, implemented nowhere, and present in six seed sections
  // to this day. `audioFirst` is the one ScenePlayer genuinely implements.
  ok(!JSON.stringify(L!).includes('"autoplay"'), 'a section authors autoplay, which draws nothing');
});

/* ─── 12. Seed against source ─────────────────────────────────────────────── */

test('once published, the seed copy matches what was authored', { skip: noBoth && 'seed or source unavailable' }, () => {
  // The failure this catches is the one that has twice cost this project real
  // work: seed.json and the authored source drifting, so the next author edits a
  // file the learner is not receiving.
  //
  // Every figure is DERIVED from the source rather than hardcoded. A hardcoded
  // count fails on itself the first time content legitimately changes, and the
  // fix is then to edit the test.
  strictEqual(L!.sections.length, SRC!.sections.length, 'section count drifted');
  strictEqual(L!.itemIds.length, SRC!.itemIds.length, 'itemId count drifted');
  strictEqual(L!.version, SRC!.version, 'version drifted');
  strictEqual((L!.acts ?? []).length, (SRC!.acts ?? []).length, 'act count drifted');
  strictEqual((L!.drills ?? []).length, (SRC!.drills ?? []).length, 'drill count drifted');
  strictEqual((L!.sheets ?? []).length, (SRC!.sheets ?? []).length, 'sheet count drifted');
  strictEqual(Object.keys(L!.terms ?? {}).length, Object.keys(SRC!.terms ?? {}).length, 'term count drifted');
  strictEqual(
    quizQuestions(theQuiz()).length,
    quizQuestions(SRC!.sections.find((s) => s.type === 'quiz') as Extract<LessonSection, { type: 'quiz' }>).length,
    'quiz question count drifted',
  );
  strictEqual(
    L!.sections.map((s) => (s as { id?: string }).id).join(','),
    SRC!.sections.map((s) => (s as { id?: string }).id).join(','),
    'the section order drifted',
  );
});

test('every authored corpus item reached the seed unchanged', { skip: noBoth && 'seed or source unavailable' }, () => {
  for (const w of SRC_CORPUS) {
    const item = ITEMS.get(w.id);
    ok(item, `authored item ${w.id} is not in the seed`);
    strictEqual(item.fr, w.fr, `${w.id}: fr drifted`);
    strictEqual(item.respell ?? undefined, w.respell ?? undefined, `${w.id}: respell drifted`);
    strictEqual(item.theme, 'metiers', `${w.id}: theme drifted`);
  }
});

test('no authored item is dead: everything is named or released', { skip: noBoth && 'seed or source unavailable' }, () => {
  // An item that no section names and no tranche releases is a corpus row nobody
  // can reach, which is dead weight and a silent authoring bug.
  const named = new Set(strings(SRC!.sections).filter((s) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s)));
  const released = new Set((SRC!.deckTranche ?? []).flat());
  const shown = new Set(strings(SRC!.sections));
  for (const w of SRC_CORPUS) {
    const reachable = named.has(w.id) || released.has(w.id) || [...shown].some((s) => s.includes(w.fr));
    ok(reachable, `${w.id} ("${w.fr}") is named by no section and released by no tranche`);
  }
});

test('no two non-sentence items in the metiers theme share an fr', { skip: noSeed && 'not merged yet' }, () => {
  // flashhub-coverage.test.ts fails the build on this, because the flashcard hub
  // keys decks on `fr` and would serve the same card twice. Every item this
  // lesson authors is a sentence and therefore exempt; this checks that stays
  // true rather than assuming it.
  const byFr = new Map<string, string>();
  for (const i of seed.items) {
    if (i.theme !== 'metiers' || i.kind === 'sentence') continue;
    const key = i.fr.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const prior = byFr.get(key);
    ok(!prior, `${prior} and ${i.id} are both "${i.fr}" in the metiers theme`);
    byFr.set(key, i.id);
  }
});

test('the authored ids continue the theme and renumber nothing', { skip: noBoth && 'seed or source unavailable' }, () => {
  // Ids are the SRS key and every attempt ever logged hangs off them.
  const mine = new Set(SRC_CORPUS.map((w) => w.id));
  const others = seed.items
    .filter((i) => i.theme === 'metiers' && i.level === 'a1' && !mine.has(i.id))
    .map((i) => Number(i.id.split('.').pop()));
  const lowestMine = Math.min(...SRC_CORPUS.map((w) => Number(w.id.split('.').pop())));
  ok(lowestMine > Math.max(...others), `this lesson starts at .${lowestMine} and the theme already runs to .${Math.max(...others)}`);
});
