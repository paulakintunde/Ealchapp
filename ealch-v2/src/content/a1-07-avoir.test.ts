// Guards a1.07.l1 "Le verbe avoir".
//
// This lesson has one failure mode that matters more than all the others, and it
// is not a crash: it is THE SWAP DECAYING BACK INTO A PARADIGM PLUS A WORD LIST.
//
// The unit names three things (six forms, an age rule, fourteen expressions) and
// the whole argument of the lesson is that twelve of them are ONE thing: French
// puts have where English puts be. A rewrite that keeps the six forms, keeps a
// tidy list of fourteen, and loses the surface that DEMONSTRATES the swap on a
// pair would read fine in review, ship, and leave a learner with three
// unconnected blocks to forget separately. So the assertion that earns its place
// here is "some production surface shows a French avoir sentence beside its
// English be translation AND says what changed", and it is the one below worth
// the most.
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
// edit the test, which is how a test comes to certify a bug. The two exceptions
// are the fourteen and the six, and both are deliberate: those numbers are the
// SHAPE of the lesson rather than a measurement of it, and a later trim that
// quietly drops one is exactly what this file exists to stop.
//
// Nothing here reimplements app logic. `fold`, `matchesAccept`, `dicteeMode`,
// `glossKeys`, `segmentSentence`, `hasPlainNasalFor` and `validateDensity` are
// all imported from the modules the app itself runs. An earlier version of
// a1.01's test inlined its own glossary lookup, copied the version that was
// already broken, and passed while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity, formatDensity } from './density.logic.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { fold, matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; lessonIds: string[]; themes?: unknown; canDo?: string; sub?: string; title?: string }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; drills: string[]; cardType?: string; prompt?: string }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.07.l1');
// Before the batch and the merge have run, the seed has no a1.07.l1 and every
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
let SRC_AGE: string[] = [];
let SRC_PAST: string[] = [];
let SRC_SIX: readonly string[] = [];
let SRC_PARADIGM_FORMS: string[] = [];
let SRC_PAIRS: [string, string][] = [];
let SRC_FOURTEEN: { fr: string; en: string; english: string; complement?: string; itemId: string; sentenceId: string }[] = [];
let SRC_ELEVEN: typeof SRC_FOURTEEN = [];
let SRC_THREE: typeof SRC_FOURTEEN = [];
let SRC_CORPUS: { id: string; fr: string; respell?: string; form: string | null; family: string; drills: string[]; theme: string }[] = [];
let SRC_RESPELL: Record<string, { fr: string; respell: string }> = {};
let SRC_META: string[] = [];
let SRC_IMPORTED: { id: string; fr: string; en: string; theme: string; kind: string; drills: string[]; why: string }[] = [];
try {
  const lesson = await import('../../../ealch-admin/scripts/data/avoir-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/avoir-corpus.ts');
  SRC = lesson.AVOIR_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_SPEAK = lesson.AVOIR_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.AVOIR_DICTATION_IDS as string[];
  SRC_PARADIGM = lesson.AVOIR_PARADIGM_IDS as string[];
  SRC_AGE = lesson.AVOIR_AGE_IDS as string[];
  SRC_PAST = lesson.AVOIR_PAST_IDS as string[];
  SRC_SIX = corpus.THE_SIX as readonly string[];
  SRC_PARADIGM_FORMS = corpus.PARADIGM_FORMS as string[];
  SRC_PAIRS = corpus.CONTRAST_PAIRS as [string, string][];
  SRC_FOURTEEN = corpus.FOURTEEN as typeof SRC_FOURTEEN;
  SRC_ELEVEN = corpus.THE_ELEVEN as typeof SRC_FOURTEEN;
  SRC_THREE = corpus.THE_THREE as typeof SRC_FOURTEEN;
  SRC_CORPUS = corpus.AVOIR as typeof SRC_CORPUS;
  SRC_RESPELL = corpus.RESPELL as typeof SRC_RESPELL;
  SRC_META = corpus.METALANGUAGE_IDS as string[];
  SRC_IMPORTED = corpus.IMPORTED as typeof SRC_IMPORTED;
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

/** The FRENCH a learner is shown, as opposed to the English that explains it.
 *
 *  Collected by field name rather than by guessing at the language, because the
 *  two are deliberately mixed on the same card all through this lesson: an A1
 *  passage is English outside the guillemets, a deck card is a French line with
 *  an English body under it, and a tapTable row is both in one array.
 *
 *  `say` is deliberately NOT here, and that is not an oversight. The key means
 *  two different things depending on depth: `SectionExtras.say` is the coach's
 *  ENGLISH narration, while `TapRow.say` and a flashcard's `say` are French. */
function frenchStrings(): string[] {
  const FRENCH_KEYS = new Set(['fr', 'target', 'clip', 'cells', 'wrong', 'right', 'back']);
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

test('a1.07.l1 exists in the seed and is well-formed', { skip: noSeed && 'a1.07.l1 not merged into the seed yet' }, () => {
  strictEqual(validateLesson(L!, L!.id).length, 0, 'schema issues on a1.07.l1');
  strictEqual(L!.unitId, 'a1.07');
  strictEqual(L!.level, 'a1');
});

test('the a1.07 unit links the lesson, so the Den can reach it', { skip: noSeed && 'not merged yet' }, () => {
  const unit = seed.units.find((u) => u.id === 'a1.07');
  ok(unit, 'a1.07 is not in the seed');
  ok(unit.lessonIds.includes('a1.07.l1'), 'the unit does not link its lesson, so no learner can open it');
});

test('the unit no longer declares a theme that does not exist', { skip: noSeed && 'not merged yet' }, () => {
  // a1.07 shipped with `themes: ["identite"]`. There is no `identite` theme and
  // there never has been, so the binding resolved to nothing. It is CLEARED
  // rather than created, which is not a fresh decision: a1.06 shipped with the
  // identical binding one day earlier, cleared it, and left this unit alone on
  // the grounds that changing another unit's body was this build's call to make.
  // a1.03, a1.04, a1.05, a1.06 and a1.11 are all grammar units carrying no theme.
  const unit = seed.units.find((u) => u.id === 'a1.07')!;
  const themes = (unit as { themes?: string[] }).themes;
  const real = new Set(seed.items.map((i) => i.theme));
  ok(!real.has('identite'), 'an `identite` theme now exists; this test and the unit binding both need revisiting');
  strictEqual(themes, undefined, 'a1.07 still declares a themes binding, and the theme it names does not exist');
});

test('the unit keeps the title, sub and canDo the Den advertises', { skip: noSeed && 'not merged yet' }, () => {
  const unit = seed.units.find((u) => u.id === 'a1.07')!;
  strictEqual(unit.title, 'The Verb Avoir (To Have)');
  strictEqual(unit.sub, 'Le verbe avoir');
  strictEqual(unit.canDo, 'Can say their age and what they have with avoir');
});

test('the tag agrees with the seq the renderer draws from', { skip: noSeed && 'not merged yet' }, () => {
  // missions.ts computes the eyebrow as `${level} · LEÇON ${unit.seq}` at render
  // time. The stored `tag` is a fallback and has to agree, or the two disagree
  // the moment something reads the field instead. a1.03 shipped that bug
  // (commit 56c79a7) and a1.04 ships it today.
  const unit = seed.units.find((u) => u.id === 'a1.07')!;
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
  for (const required of ['scene', 'tapTable', 'cardDeck', 'groupDrill', 'practice', 'dictation', 'reading', 'scenario', 'quiz'] as const) {
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

test('the act structure weights the swap over the paradigm', { skip: noSeed && 'not merged yet' }, () => {
  // THE ARGUMENT OF THE LESSON, as an assertion.
  //
  // The six forms are a closed set a learner can see on one screen and hold in
  // ten minutes, and a1.06 already taught the arithmetic they sit in. What is
  // hard is the swap, and it stays hard for a year. So a shape that spent more
  // missions on the paradigm than on the swap would have misread which half of
  // the canDo is difficult, and would be a1.06 rebuilt worse besides.
  //
  // Asserted on the SHAPE rather than on a count of acts, so a later
  // reorganisation that keeps the weighting passes and one that inverts it does
  // not.
  const acts = L!.acts ?? [];
  strictEqual((L!.deckTranche ?? []).length, acts.length, 'deckTranche is not index-aligned with acts');

  const isFormsAct = (t: string) => /form|six/i.test(t);
  const formsMissions = acts.filter((a) => isFormsAct(a.title)).reduce((n, a) => n + a.sections.length, 0);
  ok(formsMissions > 0, 'no act is about the six forms at all');

  // Everything between the forms and the closing act is the swap and its
  // consequences.
  const lastIx = acts.length - 1;
  const middle = acts.filter((a, i) => i > 0 && i < lastIx && !isFormsAct(a.title));
  const swapMissions = middle.reduce((n, a) => n + a.sections.length, 0);
  ok(
    swapMissions > formsMissions,
    `${formsMissions} mission(s) on the forms against ${swapMissions} on everything else; the paradigm has taken over the lesson`,
  );
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

test('the reframe is not about the paradigm, which a1.06 already owns', { skip: noSeed && 'not merged yet' }, () => {
  // a1.06's reframe is "No pattern. Six forms. Every conversation." A second
  // lesson claiming the same axis would read as a repeat, and it would spend the
  // one memorable line of this lesson on its easiest half.
  const r = L!.reframe ?? '';
  ok(!/\bsix\b/i.test(r), `the reframe is about the six forms: "${r}"`);
  ok(!/pattern|conjug|form\b/i.test(r), `the reframe is about the paradigm: "${r}"`);
});

/* ─── 4. All six forms are taught, and each is tested ─────────────────────── */

test('all six forms of avoir reach a production surface', { skip: noSeed && 'not merged yet' }, () => {
  // The point of half this lesson. A form that is in the corpus but on no screen
  // is a form the learner never meets. `avez` and `ont` are the two most likely
  // to be dropped in a later trim, because the corpus is thinnest in them.
  const text = productionStrings();
  for (const form of ['ai', 'as', 'a', 'avons', 'avez', 'ont']) {
    // Word-boundary match, because `a` and `as` are substrings of most of the
    // French in this lesson and a naive includes() would pass on anything.
    const re = new RegExp(`(^|[^\\p{L}'’])${form}([^\\p{L}]|$)`, 'u');
    ok(text.some((s) => re.test(s)), `the form "${form}" appears on no screen`);
  }
});

test('the paradigm puts all six forms on screen and nothing else', { skip: noSrc && 'source unavailable' }, () => {
  // Derived from the corpus's own `form` field rather than from a hand list, so
  // a paradigm sentence reworded onto a different form fails here rather than
  // shipping a lesson whose table has a hole in it.
  strictEqual(SRC_PARADIGM.length, 6, `the paradigm is ${SRC_PARADIGM.length} sentences, not six`);
  strictEqual(SRC_PARADIGM_FORMS.length, 6, `the paradigm carries ${SRC_PARADIGM_FORMS.length} distinct forms: ${SRC_PARADIGM_FORMS.join(', ')}`);
  for (const f of SRC_SIX) {
    ok(SRC_PARADIGM_FORMS.includes(f), `the paradigm never shows the form "${f}"`);
  }
});

test('the paradigm holds one frame, so only the verb varies', { skip: noSrc && 'source unavailable' }, () => {
  // Six sentences written for six different themes compare their subject matter
  // as well as their verb. This is what makes the paradigm a paradigm rather
  // than a list, and it is a1.06's discipline applied to the second verb.
  const tails = SRC_PARADIGM.map((id) => {
    const w = SRC_CORPUS.find((c) => c.id === id)!;
    // Everything after the verb.
    return w.fr.replace(/^(J'ai|Tu as|Il a|Nous avons|Vous avez|Ils ont)\s*/u, '').replace(/[?.]$/u, '').trim();
  });
  strictEqual(new Set(tails).size, 1, `the paradigm uses ${new Set(tails).size} different frames: ${[...new Set(tails)].join(' | ')}`);
});

test('the in-flow paradigm is six rows, not nine', { skip: noSeed && 'not merged yet' }, () => {
  // a1.05 taught that il/elle/on share a form and ils/elles share another, and
  // shipped a nine-row sheet doing it. a1.06 declined to re-derive it. Nine rows
  // here would be a third telling, and a learner told the same thing three times
  // stops believing all three.
  const t = sec('s04-table');
  ok(t && t.type === 'tapTable', 's04-table is missing or is not a tapTable');
  strictEqual(t.rows.length, 6, 'the in-flow paradigm is not six rows, so it is re-deriving a1.05 rather than assuming it');
  ok(
    (L!.grammarAssumed ?? []).some((g) => /a1\.05/.test(g)),
    'the lesson does not declare that it assumes a1.05',
  );
  // And the nine ARE available, in the sheet, where density is allowed.
  const sheet = (L!.sheets ?? []).find((s) => s.id === 'sheet.a1.07.paradigm');
  ok(sheet, 'no paradigm reference sheet');
  const table = (sheet.sections ?? []).find((s) => s.type === 'table') as Extract<LessonSection, { type: 'table' }> | undefined;
  ok(table, 'the paradigm sheet carries no table');
  strictEqual(table.rows.length, 9, 'the full paradigm sheet is not nine rows, so the sharing cannot be seen');
});

test('each of the six is tested somewhere in the exam', { skip: noSeed && 'not merged yet' }, () => {
  // Being taught is not being tested. Every form has to appear in a question, an
  // accepted answer, or an option, or the exam certifies less than the lesson
  // claims to teach.
  const examText = strings(quizQuestions(theQuiz()));
  for (const form of ['ai', 'as', 'a', 'avons', 'avez', 'ont']) {
    const re = new RegExp(`(^|[^\\p{L}'’])${form}([^\\p{L}]|$)`, 'u');
    ok(examText.some((s) => re.test(s)), `the exam never tests the form "${form}"`);
  }
});

test('the four liaisons are taught, because they are what avoir adds to être', { skip: noSeed && 'not merged yet' }, () => {
  // être has one form that binds to its pronoun and a1.06 gave it a whole
  // mission. avoir has four of six, and they are the only genuinely new
  // pronunciation fact in this lesson. A trim that drops them leaves the learner
  // unable to hear the pair the lesson closes on.
  const text = productionStrings().join('  ');
  ok(/\bz\b/i.test(text), 'the z of the liaison is never named');
  const t = sec('s04-table');
  ok(t && t.type === 'tapTable', 's04-table is missing');
  const joins = t.rows.filter((r) => /noo za|voo za|eel Z/i.test(r.cells.join(' '))).length;
  ok(joins >= 3, `only ${joins} of the paradigm rows show the join in their respelling`);
});

test('ils ont against ils sont is taught by ear, not only on the page', { skip: noSeed && 'not merged yet' }, () => {
  // One consonant across a liaison, and the hardest listening item in either
  // verb lesson. The written forms are further apart than the spoken ones, so
  // reading them will not train the ear: there has to be a listening surface.
  const listening = L!.sections.find((s) => s.type === 'listening');
  ok(listening, 'no listening section, so the pair is only ever read');
  const text = strings(listening).join('  ');
  ok(/ils ont/i.test(text) && /ils sont/i.test(text), 'the listening mission does not carry both halves of the pair');
  // And the exam asks it.
  const asked = quizQuestions(theQuiz()).some((q) => /ils ont/i.test(`${q.q} ${(q.opts ?? []).join(' ')}`));
  ok(asked, 'the exam never asks about ils ont');
});

/* ─── 5. THE ASSERTION THIS FILE EXISTS FOR ───────────────────────────────── */

test('the have/be swap is DEMONSTRATED on a pair, not asserted', { skip: noSeed && 'not merged yet' }, () => {
  // If this lesson ships the six forms, a fact about age and a list of fourteen,
  // it has added three things to remember instead of one. What makes it one
  // thing is a surface that puts a French avoir sentence beside its English be
  // translation AND says what changed.
  //
  // Written against the SECTION TEXT rather than against a count, so a rewrite
  // that keeps the teaching passes and one that keeps only the examples does
  // not. Matched on the MECHANISM (a French avoir sentence, an English be
  // sentence, and a statement of the swap) rather than on one phrasing.
  const AVOIR_FR = /(^|[^\p{L}'’])(j'ai|tu as|il a|elle a|on a|nous avons|vous avez|ils ont|elles ont)([^\p{L}]|$)/iu;
  const ENGLISH_BE = /(^|[^\p{L}])(i am|you are|he is|she is|they are|we are)([^\p{L}]|$)/i;

  const demonstrations: string[] = [];
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    // A tapTable row, a deck card, or an examples row: any node that carries
    // both halves at once.
    const walk = (node: unknown) => {
      if (Array.isArray(node)) { node.forEach(walk); return; }
      if (!node || typeof node !== 'object') return;
      const own = strings(node);
      const hasFr = own.some((x) => AVOIR_FR.test(x));
      const hasEn = own.some((x) => ENGLISH_BE.test(x));
      const saysSwapped = own.some((x) => /(became|swap|instead of|rather than)/i.test(x));
      if (hasFr && hasEn && saysSwapped) demonstrations.push(sid);
      for (const v of Object.values(node as Record<string, unknown>)) walk(v);
    };
    walk(s);
  }
  ok(
    demonstrations.length > 0,
    'NO surface shows a French avoir sentence beside its English be translation and says what changed. ' +
    'The lesson has decayed into a paradigm plus a word list, which is exactly what it exists to avoid.',
  );

  // And the swap is stated in general, not only shown on one noun, or a learner
  // has an example rather than a rule.
  const stated = productionStrings().some(
    (s) => /\bEnglish\b/.test(s) && /\b(have|has)\b/i.test(s) && /\b(am|is|are|be)\b/i.test(s),
  );
  ok(stated, 'no surface states the swap in general terms, so it reads as a fact about one sentence');
});

test('the age rule uses a number the learner already owns, and never teaches counting', { skip: noBoth && 'seed or source unavailable' }, () => {
  // The canDo is half about age and the prereq chain names a1.05 only, so a1.02,
  // a1.27 and a1.28 are assumed rather than declared. That is reported rather
  // than fixed (see the header of avoir-lesson.ts), and it is only defensible if
  // the lesson genuinely reuses their material instead of re-teaching it.
  //
  // So: every age sentence has to come from the existing corpus, and none of
  // them may be authored here.
  const authoredIds = new Set(SRC_CORPUS.map((w) => w.id));
  const authoredAge = SRC_AGE.filter((id) => authoredIds.has(id));
  strictEqual(
    authoredAge.length, 0,
    `the age rule authors ${authoredAge.length} of its own sentences (${authoredAge.join(', ')}); every one should be reused from the numbers track`,
  );
  ok(SRC_AGE.length >= 10, `only ${SRC_AGE.length} age sentences, which is not enough to show the rule holding across persons`);
  for (const id of SRC_AGE) ok(ITEMS.has(id), `the age set names ${id}, which is not in the seed`);

  // And no mission teaches counting.
  const teachesCounting = L!.sections.some((s) => /number|count|chiffre|nombre/i.test((s as { title?: string }).title ?? ''));
  ok(!teachesCounting, 'a mission is about numbers, which three earlier units already taught');

  // The declaration is made, so the next author knows it was a decision.
  ok(
    (L!.grammarAssumed ?? []).some((g) => /a1\.02|a1\.27|a1\.28|number/i.test(g)),
    'the lesson does not declare that it assumes the numbers units',
  );
});

test('« Je suis vingt ans » appears as an error and never as a model', { skip: noSeed && 'not merged yet' }, () => {
  // The sentence the whole lesson opens on. It has to be SHOWN, because a trap
  // nobody names is a trap nobody avoids, and it must never appear anywhere a
  // learner could read it as the right answer.
  const all = strings(L!);
  ok(all.some((s) => /Je suis vingt ans/i.test(s)), 'the error the lesson exists to kill is never shown');

  // Never a correct option, an accepted answer, or a canonical answer.
  for (const q of quizQuestions(theQuiz())) {
    const right = typeof q.correct === 'number' ? q.opts?.[q.correct] : undefined;
    ok(!/Je suis vingt ans/i.test(right ?? ''), `"${q.q.slice(0, 40)}" marks the error as the correct option`);
    ok(!(q.accept ?? []).some((a) => /je suis vingt ans/i.test(a)), `"${q.q.slice(0, 40)}" accepts the error`);
    ok(!/Je suis vingt ans/i.test(q.answer ?? ''), `"${q.q.slice(0, 40)}" shows the error as its answer`);
  }
  // Never the `right` half of a scene break, nor the `right` half of a
  // commonErrors card, nor the back of a review or flash card.
  const walk = (node: unknown) => {
    if (Array.isArray(node)) { node.forEach(walk); return; }
    if (!node || typeof node !== 'object') return;
    const o = node as Record<string, unknown>;
    for (const key of ['right', 'back'] as const) {
      const v = o[key];
      const text = typeof v === 'string' ? v : v && typeof v === 'object' ? strings(v).join(' ') : '';
      ok(!/Je suis vingt ans/i.test(text), `"Je suis vingt ans" appears as a ${key}, which reads as the model answer`);
    }
    for (const v of Object.values(o)) walk(v);
  };
  walk(L!.sections);
  // And no corpus row carries it: a corpus item is released to spaced repetition,
  // so authoring the error would drill it.
  if (!noSrc) {
    const rows = SRC_CORPUS.filter((w) => /Je suis vingt ans/i.test(w.fr));
    strictEqual(rows.length, 0, `the error reaches the corpus: ${rows.map((w) => w.id).join(', ')}`);
  }
});

/* ─── 6. All fourteen, in two groups ──────────────────────────────────────── */

test('all fourteen expressions are present, and every one resolves', { skip: noBoth && 'seed or source unavailable' }, () => {
  // FOURTEEN is a hardcoded shape rather than a measurement, deliberately: the
  // number is the promise the unit brief makes, and a later trim that quietly
  // drops one is exactly what this file exists to stop.
  strictEqual(SRC_FOURTEEN.length, 14, `${SRC_FOURTEEN.length} expressions, not fourteen`);
  strictEqual(new Set(SRC_FOURTEEN.map((e) => e.fr)).size, 14, 'two expressions share a French form');
  for (const e of SRC_FOURTEEN) {
    ok(ITEMS.has(e.itemId), `"${e.fr}" names headword ${e.itemId}, which is not in the seed`);
    ok(ITEMS.has(e.sentenceId), `"${e.fr}" names worked sentence ${e.sentenceId}, which is not in the seed`);
    // And each one actually reaches a screen.
    ok(
      strings(L!.sections).some((s) => s.includes(e.fr)) || strings(L!.sheets ?? []).some((s) => s.includes(e.fr)),
      `"${e.fr}" is in the corpus and on no screen`,
    );
  }
});

test('the three that take a complement are a distinct group, not mixed into the eleven', { skip: noBoth && 'seed or source unavailable' }, () => {
  // THE SHAPE. A learner told there are fourteen expressions memorises fourteen.
  // A learner told there are eleven of one kind and three of another has a shape,
  // and a shape survives a week off.
  strictEqual(SRC_ELEVEN.length, 11, `${SRC_ELEVEN.length} expressions map onto English be, not eleven`);
  strictEqual(SRC_THREE.length, 3, `${SRC_THREE.length} expressions take a complement, not three`);
  for (const e of SRC_THREE) {
    ok(e.complement === 'de' || e.complement === 'à', `"${e.fr}" is in the second group with no complement declared`);
    ok(e.english !== 'be', `"${e.fr}" is in the second group and still maps onto be`);
  }
  for (const e of SRC_ELEVEN) {
    ok(!e.complement, `"${e.fr}" is in the eleven and carries a complement`);
    strictEqual(e.english, 'be', `"${e.fr}" is in the eleven and does not map onto be`);
  }
  // The three are named on ONE surface, together, or they are not a group.
  const together = L!.sections.filter((s) => {
    const text = strings(s).join('  ');
    return SRC_THREE.every((e) => text.includes(e.fr.replace(/^avoir /, '')));
  });
  ok(together.length > 0, 'no single section names all three of the exceptions, so they are not taught as a group');
  // And the exam asks which group an expression is in.
  const asked = quizQuestions(theQuiz()).some(
    (q) => /besoin|envie|mal/i.test(`${q.q} ${(q.opts ?? []).join(' ')}`) && /(de|à|complement|little word)/i.test(`${q.q} ${(q.opts ?? []).join(' ')} ${q.why ?? ''}`),
  );
  ok(asked, 'the exam never tests the complement, so the group is taught and not checked');
});

/* ─── 7. The past-tense ambush ────────────────────────────────────────────── */

/** Common A1 and A2 past participles, as a WHITELIST rather than a pattern.
 *
 *  A first version of this file matched "a form of avoir plus a word ending in a
 *  participle ending", and it was wrong in both directions on real content. It
 *  missed « J'ai perdu mes clés » (perdu ends in a bare u, which no ending list
 *  written by hand thinks to include) and it would have fired on « Tu as du
 *  café » and « J'ai envie de » for the same reason.
 *
 *  A whitelist can miss a participle nobody listed. It CANNOT fire on correct
 *  content, and that asymmetry is the one that matters: a test that fires on
 *  correct content is a test the next author deletes, while a test that misses
 *  one rare verb still catches the twenty that a corpus search actually
 *  surfaces. Add to it rather than loosening it. */
const PARTICIPLES = new Set([
  'été', 'eu', 'fait', 'dit', 'pris', 'mis', 'vu', 'lu', 'bu', 'su', 'pu', 'voulu', 'dû',
  'venu', 'tenu', 'connu', 'couru', 'parcouru', 'perdu', 'vendu', 'entendu', 'attendu',
  'répondu', 'rendu', 'descendu', 'ouvert', 'offert', 'souffert', 'écrit', 'décrit',
  'appris', 'compris', 'surpris', 'permis', 'promis', 'conduit', 'construit', 'produit',
  'écouté', 'mangé', 'acheté', 'visité', 'réservé', 'parlé', 'aimé', 'donné', 'trouvé',
  'gagné', 'oublié', 'terminé', 'commencé', 'préparé', 'regardé', 'travaillé', 'joué',
  'chanté', 'dansé', 'payé', 'apporté', 'porté', 'passé', 'resté', 'arrivé', 'monté',
  'tombé', 'né', 'fini', 'choisi', 'dormi', 'senti', 'parti', 'sorti', 'servi', 'réussi',
  'rempli', 'économisé', 'remarqué', 'manqué', 'appelé', 'fêté', 'célébré', 'soigné',
  'enseigné', 'accueilli', 'guidé', 'pensé', 'cassé', 'progressé', 'changé', 'obtenu',
  'échoué', 'étudié', 'vécu', 'entendu', 'assisté', 'décidé',
]);

const AVOIR_FORM_THEN_WORD = /(^|[^\p{L}'’])(j'ai|tu as|il a|elle a|on a|nous avons|vous avez|ils ont|elles ont)\s+([\p{L}'’-]+)/giu;

/** Does this string carry a form of avoir followed directly by a past
 *  participle? Returns the offending pair, or null. */
function passeCompose(s: string): string | null {
  for (const m of s.matchAll(AVOIR_FORM_THEN_WORD)) {
    const word = m[3].replace(/^[^\p{L}]+|[^\p{L}]+$/gu, '').toLowerCase();
    if (PARTICIPLES.has(word)) return `${m[2]} ${word}`;
  }
  return null;
}

test('the past-tense ambush is taught, and taught as recognition', { skip: noSeed && 'not merged yet' }, () => {
  // Measured against Postgres on 2026-08-05: 119 of the 522 a1 rows opening on a
  // form of avoir are a past tense, which is 23%. A learner who meets j'ai only
  // as "I have" reads roughly a quarter of what they meet as a possession that
  // is not there.
  const text = productionStrings();
  const teaches = text.some(
    (s) => /(another verb|second verb|verb after)/i.test(s) && /(past|no longer|stops meaning)/i.test(s),
  );
  ok(teaches, 'no surface says that a second verb after the form makes it a past tense');

  // A whole mission, not a footnote.
  const mission = L!.sections.find((s) => /past|have stops/i.test((s as { title?: string }).title ?? ''));
  ok(mission, 'no mission is about the ambush, so it is at best a note on somebody else\'s card');

  // Taught as RECOGNITION rather than production: the learner has no past tense.
  ok(
    text.some((s) => /(recognise|not learning this tense|not being asked to use)/i.test(s)),
    'the lesson does not say the learner is only being asked to recognise this',
  );
  // And it is never named with the grammar label, which a learner arriving from
  // a1.05 and a1.06 has never been given.
  ok(!text.some((s) => /passé composé/i.test(s)), 'the grammar label reaches a learner-facing surface');
});

test('no card teaching possession uses a passé composé sentence as its example', { skip: noSeed && 'not merged yet' }, () => {
  // THE ONE THE CORPUS FIGHTS YOU ON. Nearly a quarter of the a1 rows opening on
  // a form of avoir are a past tense, so a grep-driven author fills the
  // possession missions with them and teaches a tense the lesson does not cover.
  //
  // Scoped to the sections whose JOB is something else. The ambush mission, the
  // reading passage, the review deck and the exam all show these on purpose, and
  // a test that fired on those would be deleted by the next author.
  const AMBUSH_OWNED = new Set(['s14-past', 's17-reading', 's23-review', 's25-quiz', 's26-roundup']);
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (AMBUSH_OWNED.has(sid)) continue;
    for (const str of strings(s)) {
      const hit = passeCompose(str);
      ok(!hit, `${sid} teaches with a past tense: "${hit}" in "${str.slice(0, 70)}"`);
    }
  }
  // The sheets too, which is where a reference table quietly acquires one. The
  // sheet that EXPLAINS the ambush is allowed to show them, and is named rather
  // than pattern-matched so it cannot be widened by accident.
  for (const sh of L!.sheets ?? []) {
    if (sh.id === 'sheet.a1.07.expressions') continue;
    for (const str of strings(sh.sections ?? [])) {
      const hit = passeCompose(str);
      ok(!hit, `sheet ${sh.id} teaches with a past tense: "${hit}"`);
    }
  }
});

test('the ambush examples really are past tenses', { skip: noBoth && 'seed or source unavailable' }, () => {
  // The inverse. A mission built to show the ambush and populated with ordinary
  // possessions teaches nothing at all, and nothing else would catch it.
  ok(SRC_PAST.length >= 3, `only ${SRC_PAST.length} ambush example(s)`);
  for (const id of SRC_PAST) {
    const item = ITEMS.get(id);
    ok(item, `the ambush names ${id}, which is not in the seed`);
    ok(passeCompose(item.fr), `the ambush names ${id} ("${item.fr}"), which is not a past tense at all`);
  }
});

/* ─── 8. The negation contrast, which is a1.18's ground ───────────────────── */

test('pas de voiture and pas faim sit on one surface', { skip: noSeed && 'not merged yet' }, () => {
  // The best single question in this lesson and the ground the negation unit
  // stands on. Both halves have to be on the SAME screen: apart, they are two
  // facts, and together they are a test the learner can run backwards.
  // Pinned to the TEACHING surface specifically, not to "anywhere in the
  // lesson". A first version asked only whether some section carried both, and
  // five do: the traps deck, the flashcards, the review deck and the exam all
  // mention them. Deleting the dedicated mission left that test green while the
  // learner lost the one screen where the two are put side by side and compared.
  //
  // So this asks the tapTable whose job it is, and asks it of the CELLS, which
  // is what a learner sees without opening anything.
  const contrast = L!.sections.find((s) => (s as { id?: string }).id === 's15-negation');
  ok(contrast && contrast.type === 'tapTable', 's15-negation is missing or is not a tapTable');
  const cells = contrast.rows.map((r) => r.cells.join(' ')).join('  ');
  ok(/pas de voiture/i.test(cells), 'the negation table never shows the half where the article collapses');
  ok(/pas faim/i.test(cells), 'the negation table never shows the half where nothing collapses');
  ok(contrast.rows.length >= 2, 'the negation table has one row, so there is no contrast on it');

  // And it says WHY they differ, rather than only showing them.
  const explains = strings(contrast).some((t) => /(never had|nothing to collapse|no article)/i.test(t));
  ok(explains, 'the contrast is shown and not explained, so a learner has two facts rather than a rule');

  // The exam tests it as a production, not a recognition.
  const produced = quizQuestions(theQuiz()).filter(
    (q) => (q.format === 'errorSpot' || q.format === 'typeIn') && /pas (de )?(faim|soif|voiture|stylo)/i.test(`${q.q} ${q.answer ?? ''}`),
  );
  ok(produced.length >= 2, `only ${produced.length} produce-format question(s) test the negation contrast`);
});

/* ─── 9. The lesson does not bleed into its neighbours ────────────────────── */

test('no verb other than avoir is conjugated', { skip: noSeed && 'not merged yet' }, () => {
  // Written against two surfaces rather than one, because this lesson
  // LEGITIMATELY shows other verbs: `ils sont` is half the pair it closes on,
  // `il fait chaud` is half the weather trap, and `Je suis faim` is the error it
  // exists to kill. A blanket ban would fire on all three and be deleted.
  //
  // What distinguishes a contrast from a mission is ownership: whether the other
  // verb has corpus rows this lesson authored, and whether any section is ABOUT
  // it.

  // 1. No authored corpus row carries a form of être or faire.
  if (!noSrc) {
    const ETRE_OR_FAIRE = /(^|[^\p{L}'’])(suis|es|est|sommes|êtes|sont|fais|fait|faisons|faites|font)([^\p{L}]|$)/iu;
    const rows = SRC_CORPUS.filter((w) => ETRE_OR_FAIRE.test(w.fr));
    strictEqual(rows.length, 0, `another verb reaches the corpus: ${rows.map((w) => `${w.id} "${w.fr}"`).join(', ')}`);
  }

  // 2. No paradigm of another verb is spelled out. This is the check that
  //    caught a real bleed in a1.06, whose first reference sheet listed all six
  //    avoir forms as a run inside an English sentence.
  const ETRE_RUN = /\bsuis\s*[,·]\s*es\s*[,·]/i;
  for (const s of productionStrings()) {
    ok(!ETRE_RUN.test(s), `the être paradigm is listed out on a screen: "${s.slice(0, 70)}"`);
  }

  // 3. No section or act is titled after another verb.
  //
  // Matched on the SHAPE a title naming a verb actually takes in this codebase
  // ("The Verb Être", "Le verbe être") rather than on the bare word. A first
  // version of this check tested for `\bfaire\b` anywhere in the title or the
  // French subtitle, and fired on « Ce que vous saurez faire », which is the
  // house-standard goals subtitle shared by a1.06, a1.11 and a1.29 and has
  // nothing to do with the verb faire. A test that fires on correct content is
  // a test the next author deletes.
  const TITLED_AFTER = /\b(the verb|le verbe)\s+(être|etre|faire)\b/i;
  for (const s of L!.sections) {
    const label = `${(s as { title?: string }).title ?? ''} ${(s as { frSub?: string }).frSub ?? ''}`;
    ok(!TITLED_AFTER.test(label), `${(s as { id?: string }).id} is titled after another verb: "${label.trim()}"`);
  }
  for (const a of L!.acts ?? []) {
    ok(!TITLED_AFTER.test(a.title), `act ${a.id} is about another verb: "${a.title}"`);
  }

  // 4. `ils sont` and `il fait chaud` DO appear, and that is the point: each is
  //    half of a contrast this lesson owns. Asserted so a later trim that
  //    removes them for tidiness fails here.
  const text = productionStrings();
  ok(text.some((s) => /\bils sont\b/i.test(s)), '`ils ont` against `ils sont` is never named, and it is the pair a1.06 set up');
  ok(text.some((s) => /\bil fait chaud\b/i.test(s)), 'the weather half of the chaud trap is missing, so the trap has one side');
});

test('no metalinguistic corpus row is used as a learner sentence', { skip: noBoth && 'seed or source unavailable' }, () => {
  // Three corpus rows are grammar notes wearing kind 'sentence'. They resolve
  // happily if a section names their id, they are not French anybody would say,
  // and one of them states in French the exact rule this lesson teaches while
  // sitting in `emotions`, which is where half these headwords come from.
  const named = new Set(strings(L!).filter((s) => /^fr\./.test(s)));
  const used = SRC_META.filter((id) => named.has(id));
  strictEqual(used.length, 0, `the lesson names a grammar note as if it were learner French: ${used.join(', ')}`);
});

test('no grammar vocabulary reaches a learner-facing surface', { skip: noSeed && 'not merged yet' }, () => {
  // a1.11 and a1.29 banned « article défini », « partitif », « masculin » and
  // « féminin » and asserted it. This lesson inherits that and adds the verb
  // terms, because a learner arriving from a1.05 and a1.06 has never been given
  // one of them. `grammarIntroduced` is addressed to the curriculum and is
  // deliberately excluded: it is better for using the precise words.
  const banned = /\b(conjugaison|auxiliaire|participe pass|présent de l'indicatif|verbe irrégulier|article (défini|indéfini|partitif)|masculin|féminin)\b/i;
  for (const s of productionStrings()) {
    ok(!banned.test(s), `grammar vocabulary on a learner surface: "${s.slice(0, 80)}"`);
  }
});

/* ─── 10. Nothing authored may go unrendered ──────────────────────────────── */

test('no prompt is authored on an item this lesson displays', { skip: noBoth && 'seed or source unavailable' }, () => {
  // `Item.prompt` is read by NO component. The only `.prompt` in the tree is
  // ScenePlayer reading a scene CHOICE beat's, which is an unrelated field on an
  // unrelated type. app/flashcards.tsx serves the conjugation deck (flashhub →
  // flashtypes → ?ctype=conjugation) and renders `fr` and `en` only, so the
  // three avoir conjugation cards that exist today already show the wrong face.
  //
  // The brief asked for four more. They are not authored, and this pins that
  // decision: if a later author wires the renderer, this test is where they say
  // so, and until then nothing here authors a field with no reader.
  for (const w of SRC_CORPUS) {
    strictEqual((w as { prompt?: string }).prompt, undefined, `${w.id} authors a prompt, which no lesson component reads`);
  }
  // And the items the lesson NAMES, which is where this stops being theoretical.
  //
  // THREE SHIPPED ROWS THIS LESSON REUSES ALREADY CARRY THE BUG, and they were
  // found by this test rather than by reading. They are listed rather than
  // exempted by a pattern, so a FOURTH fails here and the list can only shrink:
  //
  //   fr.a1.famille.010  cardType 'error',   prompt "Mon frère est dix ans."
  //   fr.a1.corps.007    cardType 'gapfill', prompt "J'ai mal ___ la tête."
  //   fr.a1.corps.008    cardType 'gapfill', prompt "Elle a mal ___ dos."
  //
  // The first is the strongest argument in the app for wiring `prompt` into the
  // flashcard front: its prompt IS this lesson's central error, authored by
  // somebody else months ago, and the deck currently shows it as a plain
  // vocabulary card with the error thrown away. The other two are the two
  // canonical `avoir mal à` sentences with the preposition gapped out, which is
  // exactly the exercise the complement group wants and which nothing renders.
  //
  // They are kept rather than dropped because the alternative is a worse lesson:
  // corps.007 and .008 are the highest-frequency of the fourteen in this corpus
  // and there is no equivalent pair. Reported, not papered over.
  const KNOWN_PROMPT_CARDS = new Set(['fr.a1.famille.010', 'fr.a1.corps.007', 'fr.a1.corps.008']);
  const offenders = L!.itemIds.filter((id) => {
    const item = ITEMS.get(id);
    return item && item.prompt !== undefined && (item.cardType ?? 'vocab') !== 'vocab';
  });
  const unexpected = offenders.filter((id) => !KNOWN_PROMPT_CARDS.has(id));
  strictEqual(
    unexpected.length, 0,
    `item(s) this lesson names carry a prompt no renderer shows: ${unexpected.join(', ')}. ` +
    `Either drop them from the lesson, or wire prompt into app/flashcards.tsx and shrink the waiver.`,
  );
  // The waiver can only shrink. If one of these is fixed upstream or dropped
  // from the lesson, this fails and the list gets shorter.
  const stale = [...KNOWN_PROMPT_CARDS].filter((id) => !offenders.includes(id));
  strictEqual(stale.length, 0, `the prompt waiver names ${stale.join(', ')}, which no longer needs waiving. Remove them from the list.`);
});

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
  // fire, however many rounds mention it. a1.05 shipped two such drills and its
  // own test caught them; this is the same check, made before shipping.
  //
  // A first draft of THIS lesson shipped it too: six rounds against seven
  // triggers left drill-past unreachable. The fix was a seventh round.
  const quiz = theQuiz();
  const drillFor = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const retests = new Set((L!.errorTriggers ?? []).map((t) => t.retest).filter(Boolean) as string[]);
  const fired = new Set<string>();
  for (const r of quiz.rounds ?? []) {
    for (const target of r.targets ?? []) {
      const d = drillFor.get(target);
      if (d) { fired.add(d); break; }
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
    for (const d of t.detectOn) {
      const base = d.split('/')[0];
      ok(sectionIds().includes(base), `trigger ${t.id} detects on "${d}", and section "${base}" does not exist`);
    }
  }
});

test('every round names targets, and leads on a different trigger from the others', { skip: noSeed && 'not merged yet' }, () => {
  // The structural consequence of drillForRound reading only as far as the first
  // target that has a drill: if two rounds lead on the same trigger, one drill in
  // the lesson is dead. Asserted directly so the next author does not have to
  // infer it from the reachability test above.
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
  // One round per teaching drill, both ways.
  const teaching = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  strictEqual(leads.size, teaching.length, `${leads.size} rounds lead on a drill and there are ${teaching.length} drills`);
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
  // the lookup key was normalised differently from the passage token, and a test
  // with its own copy of the lookup would have passed on all of them.
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
  // And every worked example a term names resolves.
  for (const [key, term] of Object.entries(L!.terms ?? {})) {
    for (const ex of term.examples ?? []) {
      ok(ITEMS.has(ex.itemId), `term "${key}" names example ${ex.itemId}, which is not in the corpus`);
    }
  }
});

test('a sheetId names a sheet the lesson declares, and every sheet has a door', { skip: noSeed && 'not merged yet' }, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  for (const s of L!.sections) {
    const ref = (s as { sheetId?: string }).sheetId;
    if (!ref) continue;
    ok(sheetIds.has(ref), `${(s as { id?: string }).id}: sheetId "${ref}" matches no sheet`);
  }
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
  for (const sh of L!.sheets ?? []) {
    for (const s of sh.sections ?? []) {
      if (s.type !== 'table') continue;
      strictEqual((s as { layer?: string }).layer, 'deep', `sheet table ${(s as { id?: string }).id} is not layer deep`);
    }
  }
});

test('no section authors autoplay, which no component implements', { skip: noSeed && 'not merged yet' }, () => {
  // Declared in schema.ts, implemented nowhere, and present in six seed sections
  // to this day. `audioFirst` is the one ScenePlayer genuinely implements.
  ok(!JSON.stringify(L!).includes('"autoplay"'), 'a section authors autoplay, which draws nothing');
});

test('a mission title fits the row the missions list gives it', { skip: noSeed && 'not merged yet' }, () => {
  // The missions page gives each row ONE line and truncates with an ellipsis.
  // Three a1.02 titles shipped over the limit and were cut on a device, and
  // three of this lesson's shipped at 28 in v2 and were caught here.
  //
  // 27 IS A PROXY, NOT THE RULE. The real constraint is pixel width, and the
  // row's type chip competes for the same line, so a title can clear this and
  // still truncate: v4 shipped "Which Form Goes With Which" at 26 characters
  // and it was cut on a Pixel 6, while "What You Will Be Able To Do" at 27 plus
  // a longer chip fits, because W, F and G are the widest capitals in the face.
  // A count cannot see that. This catches the obvious cases early; the device is
  // still the arbiter, so read the missions list on a phone before shipping.
  for (const s of L!.sections) {
    const t = (s as { title?: string }).title ?? '';
    ok(t.length <= 27, `${(s as { id?: string }).id}: the title is ${t.length} characters and gets cut on a device: "${t}"`);
  }
  // And every mission carries the French subtitle the missions page draws under
  // it. `frSub` is the one field that is deliberately French.
  for (const s of L!.sections) {
    ok((s as { frSub?: string }).frSub?.trim(), `${(s as { id?: string }).id} has no frSub`);
  }
});

test('the UI chrome is English, and only the content is French', { skip: noSeed && 'not merged yet' }, () => {
  // A French UI label is untranslatable and lands beside English on the same
  // card. The existing guard only reads COMPONENT source, so an authored French
  // label passes CI and reaches the screen. `frSub` is the deliberate exception
  // and is excluded.
  //
  // v2 shipped a mission titled « Ils Ont, Or Ils Sont », which is a French
  // title wearing one English word. It is now "Two Verbs, One Consonant" and the
  // French lives in the frSub, where it belongs.
  const FRENCH = /(^|[^\p{L}])(le|la|les|des|une|est|sont|ont|vous|nous|avec|pour|dans|ce que)([^\p{L}]|$)/iu;
  const labels: [string, string][] = [
    ...L!.sections.map((s) => [`section ${(s as { id?: string }).id}`, (s as { title?: string }).title ?? ''] as [string, string]),
    ...(L!.acts ?? []).map((a) => [`act ${a.id}`, a.title] as [string, string]),
    ...(L!.drills ?? []).map((d) => [`drill ${d.id}`, d.title] as [string, string]),
    ...(L!.sheets ?? []).map((sh) => [`sheet ${sh.id}`, sh.title] as [string, string]),
  ];
  for (const [where, label] of labels) {
    ok(!FRENCH.test(label), `${where} carries a French UI label: "${label}"`);
  }
});

test('a groupDrill control page declares its empty items list', { skip: noSeed && 'not merged yet' }, () => {
  // Omitting `items` is what puts a lesson on the ealch-admin tsc error list,
  // where elision-lesson.ts and masterclass-lesson.ts sit today.
  for (const s of L!.sections) {
    if (s.type !== 'groupDrill') continue;
    for (const [i, g] of s.groups.entries()) {
      ok(Array.isArray(g.items), `${(s as { id?: string }).id}.groups[${i}] has no items array`);
    }
  }
});

/* ─── 11. Drills, practice and the dictée resolve ─────────────────────────── */

test('practice and dictation drill only resolvable corpus items', { skip: noSeed && 'not merged yet' }, () => {
  for (const s of L!.sections) {
    if (s.type !== 'practice' && s.type !== 'dictation') continue;
    const ids = (s as { itemIds?: string[] }).itemIds ?? [];
    ok(ids.length > 0, `${(s as { id?: string }).id}: an empty drill`);
    for (const id of ids) ok(ITEMS.has(id), `${(s as { id?: string }).id}: ${id} is not in the corpus`);
  }
  // Exactly one practice section. Two render identically whatever `skill` says,
  // because PracticeVFView takes itemIds and nothing else, so a second reads as
  // a repeat. sons.06 ships two doing the same job.
  strictEqual(L!.sections.filter((s) => s.type === 'practice').length, 1, 'more than one practice mission, which reads as a repeat');
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

test('the dictée lands in LETTER mode, which is this lesson inverting a1.11 and a1.29', { skip: noBoth && 'seed or source unavailable' }, () => {
  // Asked of the REAL module the renderer uses, not of a restated threshold.
  //
  // Both a1.11 and a1.29 chose WORD mode by measuring letterCount, because their
  // exercise was placing an article the bank offers as a decoy. This lesson
  // chooses LETTER mode and the same measurement points the other way: the
  // word-mode decoy pool is ['et','le','la','les','de','un','une','très','bien',
  // 'merci','pour','avec','mais','oui'] and contains NO verb forms, so a
  // word-mode dictée would hand the learner the right form as a tile.
  //
  // What is worth testing here is the spelling: ai against as against a are
  // three forms that sound like two, and the difference is only ever visible on
  // the page. So every target is short enough to stay in letter mode.
  ok(SRC_DICTATION.length >= 5, `only ${SRC_DICTATION.length} dictée line(s)`);
  for (const id of SRC_DICTATION) {
    const item = ITEMS.get(id);
    ok(item, `the dictée names ${id}, which is not in the seed`);
    strictEqual(dicteeMode(item.fr), 'letters', `dictée "${item.fr}" would assemble from word tiles, where no verb form is offered as a decoy`);
    ok(item.drills.includes('dictation'), `dictée names ${id}, which has no dictation drill`);
  }
  // And the set covers the three singular forms, which is the whole reason for
  // choosing letter mode.
  const spelled = SRC_DICTATION.map((id) => ITEMS.get(id)!.fr).join('  ');
  for (const form of ["j'ai", 'tu as', ' a ']) {
    ok(new RegExp(form.trim().replace("'", "'"), 'i').test(spelled), `the dictée never asks the learner to spell "${form.trim()}"`);
  }
});

test('a drill that works over corpus items names ids, not display strings', { skip: noSeed && 'not merged yet' }, () => {
  // A drill scores against the corpus, so it plays the same audio and reads the
  // same spelling as every other card that teaches these. Passing display
  // strings here validates as broken ids and renders as empty cards.
  for (const d of L!.drills ?? []) {
    for (const id of d.items ?? []) {
      ok(ITEMS.has(id), `drill ${d.id} names "${id}", which is not a corpus id`);
    }
    // A retest with options carries a why, or a learner is told they were wrong
    // without being told anything else.
    if (d.opts?.length) ok(d.why?.trim(), `drill ${d.id} has options and no why`);
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

test('the contrast pairs are reciprocal and really do contrast', { skip: noBoth && 'seed or source unavailable' }, () => {
  // Built from `pairWith` rather than listed, so a pair cannot be half-deleted.
  ok(SRC_PAIRS.length >= 2, `only ${SRC_PAIRS.length} contrast pair(s)`);
  const byId = new Map(SRC_CORPUS.map((w) => [w.id, w]));
  for (const [a, b] of SRC_PAIRS) {
    ok(byId.has(a) || ITEMS.has(a), `contrast pair names ${a}, which is not in the corpus`);
    ok(byId.has(b) || ITEMS.has(b), `contrast pair names ${b}, which is not in the corpus`);
    const fa = (byId.get(a) ?? ITEMS.get(a))!.fr;
    const fb = (byId.get(b) ?? ITEMS.get(b))!.fr;
    // One half is positive and the other is negative, or the pair shows nothing.
    //
    // Matched on `pas` at a word boundary rather than on "ne" or "n'". A first
    // version used /ne\s/ and fired on « J'ai une voiture. », because "une " ends
    // in "ne ". The negative marker that is never a substring of an article is
    // `pas`.
    const NEG = /(^|[^\p{L}])pas([^\p{L}]|$)/iu;
    const negA = NEG.test(fa);
    const negB = NEG.test(fb);
    ok(negA !== negB, `the pair ${a} / ${b} ("${fa}" / "${fb}") is not a positive against a negative`);
  }
});

/* ─── 12. The exam ────────────────────────────────────────────────────────── */

test('the exam is at most half mcq', { skip: noSeed && 'not merged yet' }, () => {
  // Recognition can be passed by elimination. Derived, not hardcoded.
  const qs = quizQuestions(theQuiz());
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} questions are mcq`);
});

test('errorSpot carries real weight, because this lesson was made for it', { skip: noSeed && 'not merged yet' }, () => {
  // Every one of the four errors is a wrong sentence a learner would produce:
  // Je suis vingt ans, Je suis faim, Je suis chaud, Je n'ai pas de faim.
  // Showing the wrong sentence and asking for the fix tests exactly the thing.
  const qs = quizQuestions(theQuiz());
  const spot = qs.filter((q) => q.format === 'errorSpot').length;
  ok(spot >= 6, `only ${spot} errorSpot question(s) in an exam of ${qs.length}`);
  // And each of the four errors is one of them.
  const spots = qs.filter((q) => q.format === 'errorSpot').map((q) => q.q).join('  ');
  for (const [label, re] of [
    ['the age error', /Je suis vingt ans/i],
    ['the state error', /Je suis (faim|froid)/i],
    ['the raison error', /Tu es raison/i],
    ['the negation error', /pas de (faim|soif)/i],
  ] as const) {
    ok(re.test(spots), `${label} is never put in front of the learner to fix`);
  }
});

test('every question has a why and a ref', { skip: noSeed && 'not merged yet' }, () => {
  // Every built A1 lesson is at 100% why coverage, and a1.04 came off the waiver
  // list in lesson-contract.test.ts on 2026-08-05 by earning it. This lesson
  // does not reverse that.
  const qs = quizQuestions(theQuiz());
  const noWhy = qs.filter((q) => !q.why?.trim());
  strictEqual(noWhy.length, 0, `${noWhy.length}/${qs.length} questions have no why (first: "${noWhy[0]?.q}")`);
  const noRef = qs.filter((q) => !q.ref?.trim());
  strictEqual(noRef.length, 0, `${noRef.length}/${qs.length} questions have no ref`);
});

test('a why teaches the rule rather than restating the answer', { skip: noSeed && 'not merged yet' }, () => {
  // The cheapest way to reach 100% why coverage is to write the answer again in
  // a full sentence. This catches the laziest form of that.
  for (const q of quizQuestions(theQuiz())) {
    const answer = typeof q.correct === 'number' ? q.opts?.[q.correct] : (q.answer ?? '');
    if (!answer) continue;
    ok(fold(q.why!) !== fold(answer), `the why on "${q.q.slice(0, 40)}" is just the answer restated`);
    ok(q.why!.length > answer.length, `the why on "${q.q.slice(0, 40)}" is no longer than the answer`);
  }
});

test('every free-text question accepts the answer it displays', { skip: noSeed && 'not merged yet' }, () => {
  // Checked through the REAL matcher. fold() strips accents, case, punctuation
  // and ALL whitespace, so `j'ai faim` and `jaifaim` both pass. That is fine for
  // testing the form; it means the apostrophe cannot be tested with typeIn, and
  // errorSpot is what to reach for when the written shape is the thing tested.
  for (const q of quizQuestions(theQuiz())) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    ok(q.accept?.length, `${q.format} question has no accept list: "${q.q.slice(0, 50)}"`);
    ok(q.answer, `${q.format} question shows no canonical answer: "${q.q.slice(0, 50)}"`);
    ok(
      matchesAccept(q.answer!, q.accept),
      `"${q.answer}" is shown as the answer but is not accepted for "${q.q.slice(0, 50)}"`,
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
  // and the failure is a learner who can pass by always picking the second one.
  const slots = quizQuestions(theQuiz())
    .filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number')
    .map((q) => q.correct as number);
  const tally = new Map<number, number>();
  for (const s of slots) tally.set(s, (tally.get(s) ?? 0) + 1);
  for (const [slot, n] of tally) {
    ok((n / slots.length) * 100 <= 40, `${((n / slots.length) * 100).toFixed(0)}% of correct answers sit in slot ${slot}`);
  }
});

/* ─── 13. Notation, house style and audio briefs ──────────────────────────── */

test('every inlined respelling follows the nasal convention', { skip: noSrc && 'source unavailable' }, () => {
  // This is the most nasal-dense A1 lesson so far: ans, faim, besoin, raison,
  // chance, envie, honte, avons and ont are all nasal, and `ont` is one of the
  // six forms the unit is named for, so [ONT] or [ON] would be wrong on the one
  // card the unit exists to teach.
  //
  // Imported from density.logic.ts rather than re-implemented: the corpus at
  // large is not a safe source of truth for this rule (the shipped headwords say
  // `ah-VWAHR FAN` and `ah-VWAHR reh-ZOHN`, both of which fail), so a local copy
  // would be a second implementation free to drift from the validator that gates
  // the build.
  for (const w of SRC_CORPUS) {
    if (!w.respell) continue;
    ok(!hasPlainNasalFor(w.fr, w.respell), `${w.id} "${w.fr}" respelled "${w.respell}" closes a nasal with a plain n or m`);
  }
  // And the display map the SCREENS read from, which is the one that matters:
  // the lesson deliberately does not read its respellings off the shipped rows.
  for (const d of Object.values(SRC_RESPELL)) {
    ok(!hasPlainNasalFor(d.fr, d.respell), `"${d.fr}" respelled "${d.respell}" closes a nasal with a plain n or m`);
  }
});

test('the seed copy of every authored item keeps its respelling convention', { skip: noSeed && 'not merged yet' }, () => {
  // The same rule, over what the learner actually receives, so a merge that
  // wrote an older copy is caught. Scoped to the items this lesson AUTHORED: the
  // imported rows are somebody else's shipped copy and are deliberately recorded
  // verbatim, breaking convention and all, because correcting them would put the
  // seed ahead of the database on rows nobody reviewed.
  if (noSrc) return;
  const mine = new Set(SRC_CORPUS.map((w) => w.id));
  for (const id of L!.itemIds) {
    if (!mine.has(id)) continue;
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
  // sons.10. This lesson teaches four liaisons, so the temptation is real.
  ok(!all.includes('‿'), 'U+203F tie character, which renders as an underscore on a device');
});

test('the lesson passes the density validator against the real corpus', { skip: noSeed && 'not merged yet' }, () => {
  const known = new Set(seed.items.map((i) => i.id));
  const issues = validateDensity(L!, known);
  strictEqual(issues.length, 0, `density issues:\n${formatDensity(issues)}`);
});

test('the audio briefs pin the constraints that cannot be recovered later', { skip: noSeed && 'not merged yet' }, () => {
  // A constraint on HOW something is recorded becomes invisible the moment the
  // clip is delivered, so it is pinned here as well as written in the brief, the
  // way sons.07's rec-h-pairs and a1.06's rec-a1-06-paradigm pin their own.
  const recs = L!.audio?.recorded ?? [];
  const by = (id: string) => recs.find((r) => r.id === id);

  // 1. The paradigm is ONE take, in order, one voice, one speed. Six forms
  //    recorded in six sessions are six performances.
  const para = by('rec-a1-07-paradigm');
  ok(para, 'no paradigm recording is requested');
  ok(/one continuous take/i.test(para.desc) && /paradigm order/i.test(para.desc), 'the paradigm brief does not pin one continuous take in order');
  ok(/one voice/i.test(para.desc) && /one speed/i.test(para.desc), 'the paradigm brief does not pin one voice at one speed');
  // And the four liaisons, which are what this verb adds to être.
  ok(/liaison/i.test(para.desc) && /not optional/i.test(para.desc), 'the paradigm brief does not pin the four liaisons');

  // 2. The minimal pairs are in the SAME take, or the learner compares two
  //    performances instead of two verbs.
  const pair = by('rec-a1-07-pairs');
  ok(pair, 'no minimal-pair recording is requested');
  ok(/same take/i.test(pair.desc), 'the pair brief does not pin one take');
  ok(/ils sont/i.test(pair.desc) && /ils ont/i.test(pair.desc), 'the pair brief does not name both halves');

  // 3. The wrong sentence is read PLAINLY. The whole teaching of the scene is
  //    that it sounds normal until it stops.
  const swap = by('rec-a1-07-swap');
  ok(swap, 'no swap recording is requested');
  ok(/plainly/i.test(swap.desc), 'the swap brief does not pin a plain reading of the wrong sentence');
});

/* ─── 14. Seed against source ─────────────────────────────────────────────── */

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
  strictEqual((L!.errorTriggers ?? []).length, (SRC!.errorTriggers ?? []).length, 'trigger count drifted');
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
    strictEqual(item.theme, w.theme, `${w.id}: theme drifted`);
  }
});

test('no authored item is dead: everything is named or released', { skip: noBoth && 'seed or source unavailable' }, () => {
  // An item that no section names and no tranche releases is a corpus row nobody
  // can reach, which is dead weight and a silent authoring bug.
  const named = new Set(strings(SRC!.sections).filter((s) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s)));
  const released = new Set((SRC!.deckTranche ?? []).flat());
  const shown = strings(SRC!.sections);
  for (const w of SRC_CORPUS) {
    const reachable = named.has(w.id) || released.has(w.id) || shown.some((s) => s.includes(w.fr));
    ok(reachable, `${w.id} ("${w.fr}") is named by no section and released by no tranche`);
  }
});

test('no two non-sentence items in an authored theme share an fr', { skip: noSeed && 'not merged yet' }, () => {
  // flashhub-coverage.test.ts fails the build on this, because the flashcard hub
  // keys decks on `fr` and would serve the same card twice. Computed the way
  // that test computes it, with the article stripped first.
  //
  // This merge introduces seven entire themes to the seed, so it is checked over
  // every one of them rather than only over the two this lesson authors into.
  if (noSrc) return;
  const themes = new Set([...SRC_CORPUS.map((w) => w.theme), 'emotions', 'expressions-frequentes', 'mots-essentiels', 'presentation-personnelle', 'verbes-essentiels', 'meteo', 'questions', 'famille']);
  // EXACTLY flashhub-coverage's normalisation, accents and all. A first version
  // of this test also stripped accents, which is stricter than the rule the app
  // enforces, and it failed on `le divorce` against `divorcé` in famille: two
  // genuinely different words that this lesson did not author and that the real
  // guard is right to allow. A local copy of a rule that is stricter than the
  // rule is a second implementation, and this is what it costs.
  const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  for (const theme of themes) {
    const byFr = new Map<string, string>();
    for (const i of seed.items) {
      if (i.theme !== theme || i.kind === 'sentence') continue;
      if ((i.cardType ?? 'vocab') !== 'vocab') continue;
      const key = norm(i.fr);
      const prior = byFr.get(key);
      ok(!prior, `${prior} and ${i.id} are both "${i.fr}" in the ${theme} theme`);
      byFr.set(key, i.id);
    }
  }
});

test('the authored ids continue their theme and renumber nothing', { skip: noBoth && 'seed or source unavailable' }, () => {
  // Ids are the SRS key and every attempt ever logged hangs off them.
  const mine = new Set(SRC_CORPUS.map((w) => w.id));
  for (const theme of new Set(SRC_CORPUS.map((w) => w.theme))) {
    const ours = SRC_CORPUS.filter((w) => w.theme === theme);
    const others = seed.items
      .filter((i) => i.theme === theme && i.level === 'a1' && !mine.has(i.id))
      .map((i) => Number(i.id.split('.').pop()));
    if (!others.length) continue;
    const lowestMine = Math.min(...ours.map((w) => Number(w.id.split('.').pop())));
    ok(lowestMine > Math.max(...others), `${theme}: this lesson starts at .${lowestMine} and the theme already runs to .${Math.max(...others)}`);
  }
});

test('the imported rows arrived in the seed exactly as the manifest recorded them', { skip: noBoth && 'seed or source unavailable' }, () => {
  // The imported rows are a RECORDED READ of Postgres, copied into the seed by
  // the merge so this lesson's ids resolve before a publish is possible. The
  // batch checks the manifest against the database; this checks it against the
  // seed, which is the copy a learner receives. If the two differ, the merge
  // wrote something nobody reviewed.
  ok(SRC_IMPORTED.length > 0, 'the imported manifest is empty');
  for (const r of SRC_IMPORTED) {
    const item = ITEMS.get(r.id);
    ok(item, `imported row ${r.id} ("${r.fr}") never reached the seed, so the lesson names a dangling id`);
    strictEqual(item.fr, r.fr, `${r.id}: fr differs between the manifest and the seed`);
    strictEqual(item.en, r.en, `${r.id}: en differs between the manifest and the seed`);
    strictEqual(item.theme, r.theme, `${r.id}: theme differs`);
    strictEqual([...item.drills].sort().join('+'), [...r.drills].sort().join('+'), `${r.id}: drills differ`);
  }
  // And each one carries a reason, so a later author can tell what it is for
  // rather than deleting it as noise.
  for (const r of SRC_IMPORTED) ok(r.why?.trim(), `imported row ${r.id} has no recorded reason`);
});

test('nothing imported breaks the flashcard hub over the whole seed', { skip: noBoth && 'seed or source unavailable' }, () => {
  // flashhub-coverage.test.ts runs over the WHOLE seed, so a row this merge
  // copied in with the wrong drills takes the suite red on content this lesson
  // does not own. The separate-pools exemption is reproduced exactly rather than
  // approximated: `avoir envie de` carries voiceflash and review only, which is
  // that batch's signature and is legitimately exempt.
  const SEPARATE_POOLS = new Set(['review+voiceflash', 'flashcard+review']);
  for (const r of SRC_IMPORTED) {
    const item = ITEMS.get(r.id);
    if (!item || item.kind === 'sentence') continue;
    if ((item.cardType ?? 'vocab') !== 'vocab') continue;
    if (SEPARATE_POOLS.has([...item.drills].sort().join('+'))) continue;
    ok(
      item.drills.includes('flashcard') && item.drills.includes('voiceflash'),
      `${r.id} ("${r.fr}") reached the seed without both flashcard and voiceflash, which fails flashhub-coverage`,
    );
  }
});

/* ─── 15. The scene ───────────────────────────────────────────────────────── */

test('the scene commits the learner to the error before correcting it', { skip: noSeed && 'not merged yet' }, () => {
  // A scene without a choice beat is a story, and a learner who has not
  // committed does not feel the break. Both options must be plausible and
  // exactly one must carry the failing instinct.
  const s = L!.sections.find((x) => x.type === 'scene') as Extract<LessonSection, { type: 'scene' }>;
  ok(s, 'no scene section');
  const choice = s.beats.find((b) => b.kind === 'choice');
  ok(choice, 'the scene has no choice beat, so nothing is committed to');
  strictEqual(choice.options.length, 2, 'a choice with more than two options is a quiz question');
  strictEqual(choice.options.filter((o) => o.outcome === 'works').length, 1, 'exactly one option must work');
  ok(choice.followUp?.works && choice.followUp?.breaks, 'the choice has no followUp for one of its outcomes');

  const brk = s.beats.find((b) => b.kind === 'break');
  ok(brk, 'the scene has no break, so the teaching never arrives');
  // The break card cannot size itself (scene is absent from ownsLayout), so its
  // body is held in the band every shipped break sits in.
  const words = brk.body.trim().split(/\s+/).length;
  ok(words >= 24 && words <= 40, `the scene break body is ${words} words; the shipped range is 24 to 40`);
  // Audio-first, which ScenePlayer genuinely implements, so the ear answers
  // before the eye can.
  ok(brk.audio?.audioFirst, 'the break does not play its audio first');
});
