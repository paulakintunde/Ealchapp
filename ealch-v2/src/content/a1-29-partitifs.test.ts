// Guards a1.29.l1 "Les articles partitifs".
//
// Referential integrity across the whole corpus is already proven by
// seed.backcompat.test.ts, and the cross-lesson rules by lesson-contract.test.ts.
// This file pins the intent specific to THIS lesson, so a later edit that
// flattens it into a three-cell table of du/de la/de l', drops the de l' form,
// or lets a prepositional `du` be used as a teaching example goes red here
// rather than in front of a learner.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here and the parity test at the bottom fails when they drift, which is the
// failure mode that has twice cost this project real work.
//
// ── The assertion this file exists for ────────────────────────────────────
//
// "du is masculine, de la is feminine" is three cells and a learner has it in
// five minutes; a1.03 already taught the gender that decides it. If this lesson
// could be replaced by that table it would not be worth shipping. What makes it
// worth shipping is that the COUNTABLE CHOICE is demonstrated on one noun
// rather than asserted on a card, and that is what `the countable choice is
// shown on one noun, not asserted` below checks: it reads the section text and
// looks for the same noun carried with un/une and with du/de la/de l', in a
// section that then says what changed. It is written against the text rather
// than against a count, because a count would still pass on a table that had
// been gutted into a word list.
//
// The second assertion worth naming is `no teaching card uses the other du as
// its example`. Roughly four in five of the 777 a1 corpus rows holding du,
// de la or de l' are not partitives at all: they are `de + le` after a
// preposition (près du lit) or between two nouns (l'odeur du pain). The corpus
// will hand a later author one of those as an example and nothing else in the
// suite would notice.
//
// Nothing here reimplements app logic. gloss.logic, answer.logic, dictee.logic
// and density.logic are imported and used. An earlier version of a1.01's test
// inlined its own copy of the glossary lookup, copied the version that was
// already broken, and passed while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { narrationOf, quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { matchesAccept } from './answer.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { hasPlainNasalFor, isDelimitedRespell } from './density.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; title: string; sub: string; canDo: string; lessonIds: string[]; themes?: string[]; prereqUnitIds?: string[] }[];
  lessons: Lesson[];
  items: { id: string; theme: string; kind: string; fr: string; en: string; drills: string[]; cardType?: string; level: string }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.29.l1');
const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
type PartitiveWord = {
  id: string; fr: string; en: string; kind: string; theme: string;
  respell?: string; article: string; family: string; pairWith?: string; drills: string[];
};
type ImportedRow = { id: string; fr: string; theme: string; why: string; drills: string[] };
type Display = { fr: string; ipa: string; respell: string; en: string };
let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_AUTHORED: PartitiveWord[] = [];
let SRC_IMPORTED: ImportedRow[] = [];
let SRC_REUSED: { id: string; fr: string; why: string }[] = [];
let SRC_RESPELL: Record<string, Display> = {};
let SRC_META: string[] = [];
let SRC_PAIRS: [string, string][] = [];
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_THEME = '';
try {
  const lesson = await import('../../../ealch-admin/scripts/data/articles-partitifs-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/articles-partitifs-corpus.ts');
  SRC = lesson.PARTITIFS_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_SPEAK = lesson.PARTITIFS_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.PARTITIFS_DICTATION_IDS as string[];
  SRC_THEME = lesson.PARTITIFS_UNIT_THEME as string;
  SRC_AUTHORED = corpus.PARTITIFS as unknown as PartitiveWord[];
  SRC_IMPORTED = corpus.IMPORTED as unknown as ImportedRow[];
  SRC_REUSED = corpus.REUSED as { id: string; fr: string; why: string }[];
  SRC_RESPELL = corpus.RESPELL as Record<string, Display>;
  SRC_META = corpus.METALANGUAGE_IDS as string[];
  SRC_PAIRS = corpus.CONTRAST_PAIRS as [string, string][];
} catch {
  // Not available; the source-derived tests below no-op.
}
const noSrc = !SRC;

/** Every authored string in a value. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

const sectionIds = () => L!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
const section = (id: string) => L!.sections.find((s) => (s as { id?: string }).id === id);
const theQuiz = () =>
  L!.sections.find((s): s is Extract<LessonSection, { type: 'quiz' }> => s.type === 'quiz')!;

/** The bare noun after an article, so "un fromage" and "du fromage" can be
 *  compared. Not a reimplementation of anything: gloss.logic strips articles
 *  for a different job (matching a glossary key to a passage token) and does
 *  not expose the noun on its own; gender.logic's bareNoun strips a different
 *  set and is scoped to headwords rather than to running text. */
const stripPunct = (w: string) => w.replace(/[.,!?;:«»"'’…]/gu, '').toLowerCase();

/** Nouns introduced with a countable article, and nouns introduced with a
 *  partitive one.
 *
 *  Built fresh on every call rather than held as module constants. A global
 *  regex carries `lastIndex` between calls, so a shared one silently answers
 *  differently depending on what was tested before it, and a test that does
 *  that is worse than no test. */
const countableNouns = (text: string): Set<string> =>
  new Set([...text.matchAll(/\b(?:un|une)\s+([\p{L}’'-]+)/giu)].map((m) => stripPunct(m[1])));
const partitiveNouns = (text: string): Set<string> =>
  new Set(
    [...text.matchAll(/\b(?:du|de\s+la)\s+([\p{L}’'-]+)|\bde\s+l[’']([\p{L}-]+)/giu)]
      .map((m) => stripPunct(m[1] ?? m[2])),
  );

/* ─── Identity and shape ──────────────────────────────────────────────────── */

test('a1.29.l1 exists and is well-formed', () => {
  ok(L, 'a1.29.l1 is present in the seed');
  strictEqual(validateLesson(L!).length, 0);
  strictEqual(L!.unitId, 'a1.29');
  strictEqual(L!.level, 'a1');
});

test('the tag numbers the lesson by where it sits, not by what its id says', () => {
  // The Den, the unit page and the mission list all derive the lesson number
  // from the unit's `seq`. `tag` is the ONE place that number is authored by
  // hand, so a tag built from the unit id disagrees with every derived surface.
  // a1.29 sits at seq 8 because a1.27 and a1.28 were inserted earlier, so the
  // naive tag would say 29 and the header above it would say 08. a1.03 shipped
  // exactly that bug (commit 56c79a7) and a1.04 ships it today.
  const unit = seed.units.find((u) => u.id === L!.unitId)!;
  strictEqual(L!.tag, `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`);
});

test('the a1.29 unit links the lesson, and its own copy is untouched', () => {
  const unit = seed.units.find((u) => u.id === 'a1.29');
  ok(unit, 'a1.29 unit exists');
  ok(unit!.lessonIds.includes('a1.29.l1'), 'unit lists the lesson, so the Den can reach it');
  // The Den advertises these three before the learner opens anything. Authoring
  // the lesson is not a licence to rewrite the promise it was built against.
  strictEqual(unit!.title, 'The Partitive Articles');
  strictEqual(unit!.sub, 'Les articles partitifs');
  strictEqual(unit!.canDo, 'Can ask for an unspecified amount of food or drink with du, de la and de l');
});

test('the theme chip points at a deck that exists', { skip: noSrc }, () => {
  // a1.29 shipped `themes: ["nourriture"]` and no item in the corpus has ever
  // carried that theme: 0 rows in Postgres and 0 in the seed, measured
  // 2026-08-05. The Den renders a unit's theme chips as entry points into a
  // themed deck, so the chip led nowhere. a1.01 has the same defect on its
  // second theme (`politesse`, also zero), which is how it shipped unnoticed.
  //
  // Rebound to `cuisine`. Asserted as "the chip resolves" rather than as a
  // hardcoded theme name plus a hardcoded count, so a later rebind to another
  // real theme passes and a rebind to another empty one does not.
  const unit = seed.units.find((u) => u.id === 'a1.29')!;
  const themes = unit.themes ?? [];
  ok(themes.length > 0, 'a1.29 has lost its theme binding; see the note in articles-partitifs-lesson.ts');
  strictEqual(themes.join(), SRC_THEME, 'the seed and the source disagree about which theme this unit binds to');
  for (const t of themes) {
    const n = seed.items.filter((i) => i.theme === t).length;
    ok(n >= 100, `unit theme "${t}" resolves to ${n} items in the seed, which is not a deck worth a chip`);
  }
  // And the theme really is where this lesson's own material lives, rather than
  // a populous theme picked to satisfy the check above.
  const mine = new Set(L!.itemIds);
  const fromTheme = [...mine].filter((id) => ITEMS.get(id)?.theme === themes[0]).length;
  ok(fromTheme >= 10, `only ${fromTheme} of this lesson's items come from the theme it binds to`);
});

test('the prerequisite chain is reported, not silently changed', () => {
  // REPORTED, NOT FIXED. prereqUnitIds names only a1.04, and this lesson leans
  // on a1.11 for `des` and for the collapse to `de` under a negative. A learner
  // can legitimately arrive here having done a1.04 and not a1.11.
  //
  // The mitigation is in the content rather than in the unit: both a1.11 ideas
  // are re-established in one card each (s03-family card 1 for des, s12-negation
  // for the collapse) rather than assumed. This test pins the inconsistency so
  // that adding a1.11 to the prereqs becomes a visible decision rather than a
  // quiet edit.
  const unit = seed.units.find((u) => u.id === 'a1.29')!;
  strictEqual(
    (unit.prereqUnitIds ?? []).join(','),
    'a1.04',
    'a1.29 prereqUnitIds changed. It leans on a1.11 and declares only a1.04; ' +
    'see the handover note in articles-partitifs-lesson.ts before changing this.',
  );
  // Both prerequisites are actually in the seed, so the lesson can build on them.
  for (const id of ['a1.04.l1', 'a1.11.l1']) {
    ok(seed.lessons.some((l) => l.id === id), `${id} is not in the seed, and this lesson builds on it`);
  }
  const assumed = (L!.grammarAssumed ?? []).join(' ');
  ok(/negative/i.test(assumed), 'the lesson does not declare that it assumes the collapse to de, which is a1.11 material');
  ok(/definite article/i.test(assumed), 'the lesson does not declare that it assumes the definite article, which is a1.04 material');
});

test('the mission spine is the authored one, in order', () => {
  const types = L!.sections.map((s) => s.type);
  strictEqual(types[0], 'scene', 'the learner meets the stakes before any rule');
  strictEqual(types[types.length - 1], 'roundup', 'the badge closes the journey');
  strictEqual(types[types.length - 2], 'quiz', 'the exam sits just before the badge');
  strictEqual(
    sectionIds().join(' '),
    's01-scene s02-goals s03-family s04-forms ' +
    's05-pairs s06-reading s07-ear s08-cases s09-check ' +
    's10-quantity s11-containers s12-negation s13-traps ' +
    's14-other-du s15-words s16-flash s17-dictation s18-speak s19-scenario ' +
    's20-review s21-progress s22-quiz s23-roundup',
  );
  // The missions list gives each row one line and truncates with an ellipsis.
  // A coarse guard: the real constraint is rendered width, so this catches the
  // obviously-too-long and nothing subtler.
  const long = L!.sections.filter((s) => s.title.length > 27).map((s) => `${s.title} (${s.title.length})`);
  strictEqual(long.length, 0, `mission titles the list will truncate: ${long.join(', ')}`);
});

test('the acts weight the lesson toward the choice, not toward the three shapes', () => {
  // The argument of the whole lesson, as a machine check. Which shape to use is
  // decided by the noun, which a1.03 taught over 26 missions, so it gets ONE
  // drill mission. An edit that grew it would be rebuilding a1.03 badly.
  const acts = L!.acts ?? [];
  strictEqual(acts.length, 5);
  const ids = sectionIds();
  const claimed = acts.flatMap((a) => a.sections ?? []);
  for (const c of claimed) ok(ids.includes(c), `act names section "${c}", which is not in the lesson`);
  for (const i of ids) ok(claimed.includes(i), `section "${i}" is claimed by no act`);
  const twice = claimed.filter((c, i) => claimed.indexOf(c) !== i);
  strictEqual(twice.length, 0, `claimed by two acts: ${twice.join(', ')}`);
  // One tranche per act, or an act releases nothing and a tranche never fires.
  strictEqual((L!.deckTranche ?? []).length, acts.length);

  // Exactly one mission drills which of the shapes to use.
  const formDrills = L!.sections.filter((s) => s.type === 'groupDrill' && ((s as { size?: string }).size === 'xl'));
  strictEqual(formDrills.length, 1, 'the shape choice gets one drill mission; more than one is a1.03 rebuilt');

  // And the countable-choice act is at least as large as the shapes act.
  const act1 = acts.find((a) => a.id === 'act1')!;
  const act2 = acts.find((a) => a.id === 'act2')!;
  ok(act2.sections.length >= act1.sections.length, 'the countable-choice act must not be the small one');
});

test('the journey is genuinely multimodal', () => {
  const present = new Set(L!.sections.map((s) => s.type));
  for (const t of [
    'scene', 'goals', 'cardDeck', 'groupDrill', 'tapTable', 'reading', 'listening',
    'useCases', 'examples', 'commonErrors', 'vocabThemes', 'flashcards', 'dictation',
    'practice', 'scenario', 'reviewDeck', 'progressCheck', 'quiz', 'roundup',
  ] as const) {
    ok(present.has(t), `section type ${t} present`);
  }
  // One `practice` mission, deliberately. `practice.skill` is authored and read
  // by no component: PracticeVFView takes itemIds and nothing else, so two
  // practice sections render identically and read as a repeat (sons.06 m20/m23).
  strictEqual(L!.sections.filter((s) => s.type === 'practice').length, 1);
});

/* ─── The teaching claims ─────────────────────────────────────────────────── */

test("du, de la and de l' are each taught and each tested", () => {
  // `de l'` is the one most likely to be dropped in a later edit: it is the
  // form with no separate word of its own, so an author trimming for length
  // reaches for it first, and nothing else in the lesson would notice.
  const taught = strings(L!.sections);
  const tested = quizQuestions(theQuiz()).flatMap((q) => [q.q, ...(q.opts ?? []), ...(q.accept ?? []), q.answer ?? '', q.target ?? '']);
  const FORMS: [string, RegExp][] = [
    ['du', /(^|[\s«"'’(])du\s/i],
    ['de la', /(^|[\s«"'’(])de\s+la\s/i],
    ["de l'", /(^|[\s«"'’(])de\s+l[’']/i],
    ['des', /(^|[\s«"'’(])des\s/i],
  ];
  for (const [form, re] of FORMS) {
    ok(taught.some((s) => re.test(s)), `"${form}" is never taught in any section`);
    ok(tested.some((s) => re.test(s)), `"${form}" is never tested in the exam`);
  }
  // And the drill that meets all four gives each of them its own screen.
  const drill = section('s04-forms') as Extract<LessonSection, { type: 'groupDrill' }>;
  const items = (drill.groups ?? []).flatMap((g) => g.items ?? []);
  ok(items.length >= 10, `the form drill shows ${items.length} amounts; under ten it is a table`);
  for (const [form, re] of FORMS) {
    ok(items.some((i) => re.test(`${i.fr} `)), `the form drill never shows "${form}"`);
  }
});

test('the countable choice is shown on one noun, not asserted', () => {
  // THE assertion this file exists for.
  //
  // « un café » and « du café » are both correct French and they order
  // different things, so a card that lists the three shapes has taught nothing
  // about the choice. The lesson has to carry a surface where the SAME NOUN
  // appears with un/une and with du/de la/de l', and where something then says
  // what changed.
  //
  // Written against the TEXT rather than against a count, deliberately: a count
  // of contrast sections would still pass on a table that had been gutted.
  let best = { id: '', nouns: [] as string[] };
  for (const s of L!.sections) {
    const text = strings(s).join(' ');
    const partitive = partitiveNouns(text);
    const both = [...countableNouns(text)].filter((n) => partitive.has(n));
    if (both.length > best.nouns.length) best = { id: (s as { id?: string }).id ?? s.type, nouns: both };
  }
  ok(
    best.nouns.length >= 4,
    `no section carries the same noun with un/une and with du/de la/de l'. ` +
    `Best was ${best.id || 'none'} with ${best.nouns.length} (${best.nouns.join(', ')}). ` +
    `Without this the lesson is a three-cell table.`,
  );

  // And the contrast table is the one carrying it, with an explanation rather
  // than a label: a row whose two cells differ and whose detail says nothing is
  // a word list with a heading over it.
  const pairs = section('s05-pairs') as Extract<LessonSection, { type: 'tapTable' }>;
  const noun = (cell: string) => stripPunct(cell.replace(/^(un|une|du|de\s+la|de\s+l[’'])\s*/i, ''));
  const contrasting = pairs.rows.filter((r) => r.cells.length >= 2 && noun(r.cells[0]) === noun(r.cells[1]));
  ok(contrasting.length >= 4, `the contrast table pairs only ${contrasting.length} rows on one noun; it needs at least four`);
  for (const r of contrasting) {
    const words = (r.detail?.body ?? '').trim().split(/\s+/).filter(Boolean).length;
    ok(words >= 25, `the row "${r.cells.join(' / ')}" shows a contrast and explains it in ${words} words`);
  }

  // And the passage says it out loud, in French, inside one utterance: a
  // character corrects themselves from the countable form of a noun to the
  // partitive form of THE SAME noun. That is the difference between showing the
  // rule and printing it.
  //
  // Scoped to a whole « » span rather than to a sentence, because the sentence
  // splitter PassagePage uses breaks on the full stop and the correction is two
  // short sentences inside one turn of speech.
  const passage = section('s06-reading') as Extract<LessonSection, { type: 'reading' }>;
  const spans = passage.text.match(/«[^»]*»/gu) ?? [];
  const selfCorrection = spans.filter((span) => {
    const partitive = partitiveNouns(span);
    return [...countableNouns(span)].some((n) => partitive.has(n));
  });
  ok(
    selfCorrection.length > 0,
    'no spoken line in the passage carries one noun both ways, so the passage states the rule ' +
    'rather than showing somebody use it. Spans checked: ' + spans.length,
  );

  // Both halves of the pair are glossed, because the pairing is what the
  // passage is for and a glossary that explains only one form leaves the
  // interesting half unexplained.
  const glossed = new Set((passage.glossary ?? []).map((g) => g.word.toLowerCase()));
  ok(glossed.has('un fromage') && glossed.has('du fromage'), 'the passage glosses only one half of un fromage / du fromage');
});

test('all four English-speaker errors are taught and tested', () => {
  // Each is a wrong sentence a learner will produce tomorrow, so each has to be
  // BOTH in a taught section and in the exam. A rule taught and never tested is
  // a card the learner swipes past; a rule tested and never taught is a trick.
  const ERRORS = [
    {
      key: 'the article is deleted',
      teach: 's03-family',
      taught: /du pain|du caf[ée]|de la soupe/i,
      test: /mange pain|mange du pain|voudrais du pain/i,
    },
    {
      key: 'un ordered where du was meant',
      teach: 's05-pairs',
      taught: /un caf[ée].*du caf[ée]|un pain.*du pain|un fromage.*du fromage/i,
      test: /un caf[ée]|un fromage|un pain/i,
    },
    {
      key: 'a quantity word takes bare de',
      teach: 's10-quantity',
      taught: /beaucoup de|un peu de|trop de|assez de/i,
      test: /beaucoup d[eu]|un peu d[eu]|trop d[eu]|kilo d[eu]/i,
    },
    {
      key: 'negation gives de',
      teach: 's12-negation',
      taught: /pas de (pain|soupe|l[ée]gumes)|pas d[’']eau/i,
      test: /pas d[eu] (pain|fromage)|pas d[’']eau/i,
    },
  ];
  const quizStrings = quizQuestions(theQuiz()).flatMap((q) => [q.q, ...(q.opts ?? []), ...(q.accept ?? []), q.answer ?? '']);
  for (const e of ERRORS) {
    const sec = section(e.teach);
    ok(sec, `the mission teaching "${e.key}" (${e.teach}) is gone`);
    ok(strings(sec).some((s) => e.taught.test(s)), `"${e.key}" is no longer taught in ${e.teach}`);
    ok(quizStrings.some((s) => e.test.test(s)), `"${e.key}" is no longer tested in the exam`);
  }
  // And each one has its own trap card, one per screen.
  const traps = section('s13-traps') as Extract<LessonSection, { type: 'commonErrors' }> & { swipe?: boolean; size?: string };
  strictEqual(traps.errors.length, 4, 'the four traps are the four errors; a fifth or a third means one moved');
  ok(traps.swipe === true, 'commonErrors without `swipe` falls through to a path that drew a BLANK mission on a1.01 m5');
  strictEqual(traps.size, 'lg');
  // The four traps really are the four errors, matched on the wrong sentence
  // rather than on the order they happen to sit in.
  const wrongs = traps.errors.map((e) => e.wrong).join(' | ');
  for (const re of [/mange pain/i, /un caf[ée]/i, /beaucoup du/i, /pas du pain/i]) {
    ok(re.test(wrongs), `no trap card carries the wrong sentence ${re}`);
  }
});

/* ─── The other du: four fifths of the corpus ─────────────────────────────── */

/** The `de + le` signatures. Each is a real shape from this corpus and none of
 *  them is about an amount of anything. */
const OTHER_DU_SHAPES: RegExp[] = [
  /pr[èe]s d[eu]/i,
  /[àa] c[ôo]t[ée] d[eu]/i,
  /du jour/i,
  /l[’']odeur du/i,
  /[àa] la fin du/i,
  /l[’']emploi du/i,
  /au bout du/i,
];

test('the other du is taught, and no teaching card uses one as its example', () => {
  // Measured across the 777 a1 corpus rows holding du, de la or de l' on
  // 2026-08-05: roughly four in five are not partitives. They are de and le
  // squeezed together, after a preposition or between two nouns, and the corpus
  // will hand a later author one of them as an example without warning.
  const otherDu = section('s14-other-du');
  ok(otherDu, 'the mission that separates the two du is gone');
  const otherDuText = strings(otherDu).join(' ');
  const covered = OTHER_DU_SHAPES.filter((re) => re.test(otherDuText));
  ok(covered.length >= 3, `the other-du mission shows only ${covered.length} of the shapes it exists to name`);
  // It names the test a learner can apply, not just the fact.
  ok(/some/i.test(otherDuText), 'the other-du mission states the fact without giving the learner a test they can run');

  // And no section that TEACHES the partitive uses one of those shapes as an
  // example. This is the assertion the corpus will fight, and it is written
  // against the examples the teaching sections actually name.
  const TEACHING = ['s03-family', 's04-forms', 's05-pairs', 's10-quantity', 's11-containers', 's12-negation', 's15-words'];
  for (const id of TEACHING) {
    const text = strings(section(id)).join(' ');
    const leak = OTHER_DU_SHAPES.filter((re) => re.test(text)).map(String);
    strictEqual(
      leak.length,
      0,
      `${id} teaches the partitive and uses a de + le example: ${leak.join(', ')}. ` +
      `Those belong in s14-other-du, which exists to say they are a different word.`,
    );
  }

  // The exam asks about it too, or it is a card the learner swipes past.
  const quizStrings = quizQuestions(theQuiz()).flatMap((q) => [q.q, ...(q.opts ?? [])]);
  ok(
    OTHER_DU_SHAPES.some((re) => quizStrings.some((s) => re.test(s))),
    'the de + le disambiguation is taught and never tested',
  );
});

test('the lesson closes on the word off its home ground', () => {
  // The canDo frames this lesson around food and drink and it is right to,
  // because that is where a learner will use it this week. But `faire du
  // sport`, `jouer de la guitare` and `du bruit` are the same article, and a
  // lesson that never leaves the table has taught a rule about restaurants.
  //
  // One card, not a mission: this asserts the card exists rather than that it
  // has grown into a section of its own.
  const offGround = /faire du sport|du sport|de la guitare|du bruit|du courage|du repos/i;
  const carriers = L!.sections.filter((s) => strings(s).some((x) => offGround.test(x)));
  ok(carriers.length >= 2, 'the word is never shown away from food, so this is a rule about restaurants');
  ok(
    carriers.some((s) => (s as { id?: string }).id === 's14-other-du'),
    'the off-home-ground card has left the mission that puts it in context',
  );
});

test('no metalinguistic corpus row is used as a learner sentence', { skip: noSrc }, () => {
  // Three corpus rows are grammar notes wearing kind 'sentence'. They resolve
  // happily if a section names their id, and they are not French a learner
  // would ever say, so a listening or dictation mission built on one is
  // nonsense to hear and impossible to spell.
  //
  // The first one is far more dangerous here than it was for a1.11, because it
  // states THE EXACT RULE THIS LESSON TEACHES and it lives in `cuisine`, which
  // is the theme this unit is now bound to.
  const named = new Set(strings(L).filter((s) => /^fr\./.test(s)));
  for (const id of SRC_META) {
    ok(!named.has(id), `${id} is a grammar note, not learner French, and this lesson names it: "${ITEMS.get(id)?.fr}"`);
  }
  // And the rows are still what the source says they are, so the exclusion is
  // pinned to the content rather than to three ids that may have been reused.
  for (const id of SRC_META) {
    const it = ITEMS.get(id);
    ok(it, `${id} is no longer in the seed; update METALANGUAGE_IDS`);
    ok(
      /article|masculin|féminin|quantité/i.test(it!.fr),
      `${id} no longer looks like a grammar note ("${it!.fr}") — recheck METALANGUAGE_IDS`,
    );
  }
  // The dangerous one specifically, named so the failure says why.
  ok(
    SRC_META.includes('fr.a1.cuisine.008'),
    'fr.a1.cuisine.008 has left METALANGUAGE_IDS. It states this lesson\'s exact rule in French metalanguage and sits in the theme this unit binds to.',
  );
});

test('the lesson teaches the choice without teaching the grammar vocabulary', () => {
  // a1.03 taught le and la as part of gender and never named them as a
  // category; a1.04 and a1.11 both inherited that and asserted it. A learner
  // arriving here has no label to cash and naming one buys nothing. Scoped to
  // sections and terms, which is everything a learner reads: `grammarIntroduced`
  // is addressed to the curriculum and is better for using the precise words.
  const learnerFacing = [...strings(L!.sections), ...strings(L!.terms ?? {})];
  const jargon = learnerFacing.filter((s) => /\b(article (défini|indéfini|partitif)|partitifs?|partitive|masculin|féminin|élision)\b/i.test(s));
  strictEqual(jargon.length, 0, `grammar vocabulary reached an A1 learner: ${jargon.slice(0, 2).join(' | ')}`);
  // And the curriculum-facing block DOES use the precise words, or the
  // curriculum cannot be checked by anything.
  ok(
    (L!.grammarIntroduced ?? []).some((s) => /partitive/i.test(s)),
    'grammarIntroduced avoids the precise word, which is the one place it belongs',
  );
});

test('des is claimed from a1.11, not re-taught', () => {
  // a1.11 taught `des` as the plural of un and une and said on a card that it
  // has a second life this lesson would start. So `des` is claimed here in ONE
  // place, as a word the learner already owns doing a second job, rather than
  // introduced again.
  const desMentions = L!.sections.filter((s) => strings(s).some((x) => /\bdes\s/i.test(x)));
  ok(desMentions.length >= 2, '`des` is never mentioned, so the handover from a1.11 never happens');
  // The handover card exists and says the word is already the learner's.
  const family = section('s03-family');
  const familyText = strings(family).join(' ');
  ok(/\bdes\s/i.test(familyText), 'the handover mission no longer mentions des');
  ok(
    /already|been saying|you (have|own)/i.test(familyText),
    'the des card introduces it rather than claiming it as something the learner already has',
  );
  // And no mission is ABOUT des: that was a1.11's job and doing it again is the
  // failure this test exists to catch.
  const desMissions = L!.sections.filter((s) => /\bdes\b/i.test(s.title));
  strictEqual(desMissions.length, 0, `a mission is titled after des, which a1.11 already taught: ${desMissions.map((s) => s.title).join(', ')}`);
});

/* ─── The corpus join ─────────────────────────────────────────────────────── */

test('every id the lesson names resolves, and every authored item is used', { skip: noSrc }, () => {
  for (const id of L!.itemIds) ok(ITEMS.has(id), `${id} is named by the lesson and is not in the seed`);
  // A dead corpus entry is authoring no learner reaches.
  const named = new Set(L!.itemIds);
  const dead = SRC_AUTHORED.filter((w) => !named.has(w.id)).map((w) => `${w.id} "${w.fr}"`);
  strictEqual(dead.length, 0, `authored but never named by the lesson: ${dead.join(', ')}`);
  const deadImports = SRC_IMPORTED.filter((w) => !named.has(w.id)).map((w) => `${w.id} "${w.fr}"`);
  strictEqual(deadImports.length, 0, `imported but never named by the lesson: ${deadImports.join(', ')}`);
  const deadReuse = SRC_REUSED.filter((w) => !named.has(w.id)).map((w) => `${w.id} "${w.fr}"`);
  strictEqual(deadReuse.length, 0, `documented as reused but never named: ${deadReuse.join(', ')}`);
});

test('the imported rows really did arrive in the seed', { skip: noSrc }, () => {
  // 27 of this lesson's items live in `expressions-de-quantite` and
  // `au-restaurant`, neither of which is in SEED_CUT.themes, so neither had
  // ever reached seed.json. The merge script copies them in from the IMPORTED
  // manifest. Without that, a1.29 lands with 27 dangling ids that render as
  // empty cards, and lesson-contract.test.ts would name every one of them.
  //
  // Checked here as well, because the merge's own guard runs once and this runs
  // on every push.
  for (const row of SRC_IMPORTED) {
    const it = ITEMS.get(row.id);
    ok(it, `${row.id} "${row.fr}" is imported by this lesson and is not in the seed — run the merge`);
    strictEqual(it!.fr, row.fr, `${row.id}: manifest says "${row.fr}", seed says "${it!.fr}"`);
  }
  const themes = new Set(SRC_IMPORTED.map((r) => r.theme));
  ok(themes.size >= 2, 'the import collapsed to one theme; the quantity words and the de + le trap set come from two');
  // Every imported row carries a `why`, so the next author knows what it is for
  // rather than finding an unexplained theme in the seed.
  const unexplained = SRC_IMPORTED.filter((r) => !r.why?.trim());
  strictEqual(unexplained.length, 0, `imported with no reason recorded: ${unexplained.map((r) => r.id).join(', ')}`);
});

test('tranches release only items the lesson teaches, once each', () => {
  const tranches = L!.deckTranche ?? [];
  const flat = tranches.flat();
  const dupes = flat.filter((id, i) => flat.indexOf(id) !== i);
  strictEqual(dupes.length, 0, `released twice: ${[...new Set(dupes)].join(', ')}`);
  for (const id of flat) ok(L!.itemIds.includes(id), `tranche releases ${id}, which the lesson does not teach`);
  const unreleased = L!.itemIds.filter((id) => !flat.includes(id));
  strictEqual(unreleased.length, 0, `taught but never released to the SRS: ${unreleased.join(', ')}`);
  // The last act teaches nothing new, so it releases nothing.
  strictEqual(tranches[tranches.length - 1].length, 0, 'the closing act releases cards, which means it is teaching');
});

test('no two non-sentence items share a headword inside one theme', () => {
  // The flashcard hub keys decks on `fr` with the article stripped, so a
  // duplicate serves the same card twice and takes two SRS ratings for one
  // word. Computed the way flashhub-coverage.test.ts computes it. Note `du `
  // and `de la ` are NOT in the strip list, which is why « du pain » and
  // « le pain » can coexist; checked rather than assumed.
  //
  // Scoped to the collisions THIS lesson could have caused, which now includes
  // two whole themes it copied into the seed.
  const mine = new Set(L!.itemIds);
  const themes = new Set([...mine].map((id) => ITEMS.get(id)!.theme));
  const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seen = new Map<string, string>();
  const dupes: string[] = [];
  for (const it of seed.items) {
    if (it.kind === 'sentence' || (it.cardType ?? 'vocab') !== 'vocab') continue;
    if (!themes.has(it.theme)) continue;
    const k = `${it.theme}::${norm(it.fr)}`;
    const prior = seen.get(k);
    if (prior && (mine.has(prior) || mine.has(it.id))) dupes.push(`${prior} vs ${it.id} ("${it.fr}")`);
    else if (!prior) seen.set(k, it.id);
  }
  strictEqual(dupes.length, 0, `this lesson duplicates a word already in its theme: ${dupes.slice(0, 3).join(' | ')}`);
});

test('practice and dictation drill only resolvable, correctly tagged corpus items', () => {
  // An item without the tag renders as a card the learner cannot be scored on,
  // which looks like a broken mission rather than a missing tag.
  const speak = section('s18-speak') as Extract<LessonSection, { type: 'practice' }>;
  strictEqual(speak.skill, 'speak');
  for (const id of speak.itemIds) {
    const it = ITEMS.get(id);
    ok(it, `${id} is drilled and is not in the corpus`);
    ok(it!.drills.includes('voiceflash'), `${id} "${it!.fr}" is spoken-drilled without the voiceflash tag`);
  }
  const dict = section('s17-dictation') as Extract<LessonSection, { type: 'dictation' }>;
  for (const id of dict.itemIds) {
    const it = ITEMS.get(id);
    ok(it, `${id} is dictated and is not in the corpus`);
    ok(it!.drills.includes('dictation'), `${id} "${it!.fr}" is dictated without the dictation tag`);
    // And every one of them assembles from WORD tiles, which is what makes this
    // an article exercise rather than a spelling one: the word-mode decoy pool
    // holds `de`, `un` and `une` and does NOT hold `du`, so the wrong article
    // sits next to the right one. dicteeMode is the real function the renderer
    // uses; nothing is reimplemented here.
    strictEqual(
      dicteeMode(it!.fr),
      'words',
      `"${it!.fr}" falls under the letter threshold, so the dictée spells it letter by letter ` +
      `instead of asking the learner to place the article`,
    );
  }
  // And at least one dictation sentence carries the partitive itself, or the
  // mission is six sentences that happen to be long.
  const dictated = dict.itemIds.map((id) => ITEMS.get(id)!.fr).join(' | ');
  ok(/(^|\s)(du|de la|de l['’])/i.test(dictated), 'no dictation sentence carries the word this lesson teaches');
});

/* ─── Notation ────────────────────────────────────────────────────────────── */

test('every respelling this lesson displays follows the nasal convention', { skip: noSrc }, () => {
  // `du` is [dü] and carries no nasal, which makes this lesson luckier than
  // a1.11. But `un` is on every contrast card here, and its shipped respelling
  // across the corpus is `uhn`, which teaches a consonant that is not
  // pronounced. Several IMPORTED rows predate the convention entirely
  // (`uhn puh duh`, `boh-koo duh`) and are deliberately left alone, which is
  // why the lesson reads its screens from RESPELL rather than from the rows.
  //
  // hasPlainNasalFor is imported rather than re-derived: it already knows that
  // a written double nasal (pomme, monnaie) is a real pronounced consonant and
  // a single one (un, pain) is not.
  const bad = Object.values(SRC_RESPELL)
    .filter((dd) => hasPlainNasalFor(dd.fr, dd.respell))
    .map((dd) => `${dd.fr} ${dd.respell}`);
  strictEqual(bad.length, 0, `nasal closed with a plain n or m: ${bad.join(' | ')}`);
  // Brackets, because the density validator checks the rendered form.
  const unbracketed = Object.values(SRC_RESPELL).filter((dd) => !isDelimitedRespell(dd.respell));
  strictEqual(unbracketed.length, 0, `respelling outside brackets: ${unbracketed.map((x) => x.respell).join(' | ')}`);
  // The two this all exists for: the nasal on un, and the ü on du.
  ok(SRC_RESPELL['un pain'], 'the un pain respelling is gone');
  ok(/uhⁿ/.test(SRC_RESPELL['un pain'].respell), `un is respelled "${SRC_RESPELL['un pain'].respell}", which does not use the superscript n`);
  ok(SRC_RESPELL['du pain'], 'the du pain respelling is gone');
  ok(/dü/.test(SRC_RESPELL['du pain'].respell), `du is respelled "${SRC_RESPELL['du pain'].respell}"; the vowel is /y/ and the house notation for it is ü`);

  // Any respelling inlined directly in a section, too, in case a later edit
  // stops going through the map.
  const inline: { fr: string; respell: string }[] = [];
  const walk = (node: unknown) => {
    if (Array.isArray(node)) return node.forEach(walk);
    if (!node || typeof node !== 'object') return;
    const o = node as Record<string, unknown>;
    const fr = o.fr ?? o.front ?? o.target ?? o.word;
    if (typeof o.respell === 'string' && typeof fr === 'string') inline.push({ fr, respell: o.respell });
    Object.values(o).forEach(walk);
  };
  walk(L!.sections);
  const badInline = inline.filter((x) => hasPlainNasalFor(x.fr, x.respell)).map((x) => `${x.fr} ${x.respell}`);
  strictEqual(badInline.length, 0, `inlined respelling breaks the nasal rule: ${badInline.join(' | ')}`);
});

/* ─── The passage ─────────────────────────────────────────────────────────── */

test('every reading glossary entry underlines a word that is really there', () => {
  // A gloss that matches nothing is invisible, which is the same
  // authored-and-rendered-by-nothing failure the lesson contract exists to
  // catch. Ten entries across four shipped lessons were dead this way.
  // segmentSentence is the real matcher, imported rather than copied.
  const r = section('s06-reading') as Extract<LessonSection, { type: 'reading' }>;
  ok(r.questionsInModal && r.questions?.length, 'reading without questionsInModal never reaches the glossary renderer');
  const keys = new Set((r.glossary ?? []).flatMap((g) => glossKeys(g.word)));
  const matched = new Set<string>();
  for (const sentence of r.text.split(/(?<=[.!?»])\s+/)) {
    for (const seg of segmentSentence(sentence, keys)) if (seg.key) matched.add(seg.key);
  }
  for (const g of r.glossary ?? []) {
    ok(glossKeys(g.word).some((k) => matched.has(k)), `glossary entry "${g.word}" underlines nothing in the passage`);
  }
  // The other du appears in the passage and is glossed AS the other du, because
  // longest-match wins: without a phrase entry the bare "du pain" key would
  // underline the one occurrence that is not about an amount of bread and
  // explain it as though it were.
  const otherDuEntry = (r.glossary ?? []).find((g) => OTHER_DU_SHAPES.some((re) => re.test(g.word)));
  ok(otherDuEntry, 'the passage carries no gloss for the de + le it contains, so that span is explained as a partitive');
  ok(
    /not about an amount|de and le|of the/i.test(otherDuEntry!.note ?? ''),
    `the gloss for "${otherDuEntry!.word}" does not say it is a different word`,
  );
});

test('the reading passage keeps English outside the guillemets and authors no line break', () => {
  // Paul's A1 rule, set on a1.01's passage: anything not inside « » is English.
  // The learner's effort belongs on the exchange, not on decoding stage
  // directions.
  //
  // And PassagePage splits on `text.split(/(?<=[.!?»])\s+/)` and renders the
  // pieces inline, so an authored `\n` is consumed as whitespace and silently
  // discarded. a1.01 authors them and loses them.
  const r = section('s06-reading') as Extract<LessonSection, { type: 'reading' }>;
  ok(!/\n/.test(r.text), 'the passage authors a line break, which PassagePage discards');
  const outside = r.text.replace(/«[^»]*»/gu, ' ');
  // The French function words that would give away a French sentence outside
  // the quotes. Names and place names are fine.
  const french = outside.match(/\b(le|la|les|un|une|des|du|elle|il|dans|avec|pour|est|sont|qui|que)\b/giu) ?? [];
  strictEqual(french.length, 0, `French outside the guillemets: ${french.slice(0, 5).join(', ')}`);
  // And every French line really is inside them.
  const quoted = r.text.match(/«[^»]*»/gu) ?? [];
  ok(quoted.length >= 8, `the passage carries only ${quoted.length} spoken French lines`);
});

/* ─── The exam ────────────────────────────────────────────────────────────── */

test('the exam is round-based, reachable, and every question teaches', () => {
  const quiz = theQuiz();
  const qs = quizQuestions(quiz);
  ok((quiz.rounds ?? []).length >= 4, 'the exam is not round-based, so a failed round fires no drill');
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1, 'a second quiz section is unreachable questions');
  // a1.04 shipped 3 questions with 0 whys and sat on a waiver list in
  // lesson-contract.test.ts until its v3 rebuild. That list can only shrink.
  const noWhy = qs.filter((q) => !q.why?.trim());
  strictEqual(noWhy.length, 0, `${noWhy.length}/${qs.length} questions have no why (first: "${noWhy[0]?.q ?? ''}")`);
  const noRef = qs.filter((q) => !q.ref);
  strictEqual(noRef.length, 0, `${noRef.length}/${qs.length} questions have no ref`);
  const present = new Set(sectionIds());
  for (const q of qs) ok(present.has(q.ref!), `a question refs "${q.ref}", which is not a section of this lesson`);
  // And a `why` that only restates the answer teaches nothing.
  const lazy = qs.filter((q) => (q.why ?? '').trim().split(/\s+/).length < 8);
  strictEqual(lazy.length, 0, `a why too short to teach: ${lazy.map((q) => q.why).join(' | ')}`);
});

test('at most half the exam is mcq, and errorSpot carries the production load', () => {
  const qs = quizQuestions(theQuiz());
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} questions are mcq; recognition can be passed by elimination`);
  // Every one of the four English-speaker errors is a wrong sentence a learner
  // would produce, so errorSpot is the format that tests the thing itself.
  const errorSpot = qs.filter((q) => q.format === 'errorSpot').length;
  ok(errorSpot >= 7, `only ${errorSpot} errorSpot questions; this lesson's errors are all producible wrong sentences`);
  // The canDo is production, not recognition.
  const produce = qs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot' || q.format === 'speak').length;
  ok(produce >= 10, `only ${produce} questions ask the learner to produce rather than pick`);
  // listenChoose falls back to SPEAKING the option text, so every option has to
  // be French. An English option is read aloud in a French voice and gives the
  // answer away by sounding wrong.
  for (const q of qs.filter((x) => x.format === 'listenChoose')) {
    for (const o of q.opts ?? []) {
      ok(
        /^(un|une|des|du|de|le|la|les|l['’])\s|^(deux|d['’])/i.test(o),
        `listenChoose option "${o}" is not a French form, and this format speaks its options`,
      );
    }
  }
});

test('a question about un against du carries the situation in its stem', () => {
  // Both are correct French, so a bare "which article" has two right answers.
  // The stem has to say whether the learner wants a countable thing or an
  // amount, and that usually means a clause of context. These are the hardest
  // questions in the lesson to write and the easiest to break in an edit.
  const qs = quizQuestions(theQuiz());
  // A question is contested when the SAME NOUN appears in its options under a
  // countable article and under a partitive one. Testing for "un somewhere and
  // du somewhere" is too loose: « un kilo du tomates » holds both and is a
  // quantity question, whose stem does not need a situation because only one of
  // its options is French at all.
  const contested = qs.filter((q) => {
    const opts = q.opts ?? [];
    const countable = new Set(opts.flatMap((o) => [...countableNouns(o)]));
    const partitive = new Set(opts.flatMap((o) => [...partitiveNouns(o)]));
    return [...countable].some((n) => partitive.has(n));
  });
  ok(contested.length >= 2, `only ${contested.length} questions put un and du in the same option list`);
  for (const q of contested) {
    const words = q.q.trim().split(/\s+/).filter(Boolean).length;
    ok(
      words >= 10,
      `"${q.q}" offers both un and du and gives ${words} words of situation. Both are correct French, ` +
      `so without the situation the question has two right answers.`,
    );
  }
});

test('every free-text question accepts the answer it displays', () => {
  // matchesAccept is the real comparator (fold strips accents, case,
  // punctuation and all whitespace), imported rather than reimplemented. A
  // question whose own canonical answer is rejected marks a correct learner
  // wrong, and nothing else in the suite would notice.
  for (const q of quizQuestions(theQuiz())) {
    if (!q.answer) continue;
    ok(matchesAccept(q.answer, q.accept), `"${q.q}" displays "${q.answer}" and does not accept it`);
  }
});

test('every round fires a drill, and every drill is reachable', () => {
  // drillForRound walks a round's `targets` and stops at the FIRST one that
  // resolves to a drill. A drill named only in second place is dead content, so
  // each teaching drill has to be the first resolving target of some round.
  const drillForTarget = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const drillIds = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of L!.errorTriggers ?? []) {
    ok(drillIds.has(t.drill), `trigger ${t.id} names drill "${t.drill}", which does not exist`);
    if (t.retest) ok(drillIds.has(t.retest), `trigger ${t.id} names retest "${t.retest}", which does not exist`);
    for (const on of t.detectOn) {
      const head = on.split('/')[0];
      ok(sectionIds().includes(head), `trigger ${t.id} watches "${on}", which starts from no section of this lesson`);
    }
  }
  const fired = new Set(
    (theQuiz().rounds ?? [])
      .map((r) => (r.targets ?? []).map((t) => drillForTarget.get(t)).find(Boolean))
      .filter(Boolean) as string[],
  );
  const teaching = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  strictEqual(orphans.length, 0, `drill(s) no round can fire: ${orphans.join(', ')} — reorder that round's targets`);
  ok(fired.size === teaching.length, `${fired.size} of ${teaching.length} drills are reachable`);
  // A drill that names corpus items must name real ones this lesson teaches.
  for (const d of L!.drills ?? []) {
    for (const id of d.items ?? []) {
      ok(ITEMS.has(id), `drill ${d.id} names ${id}, which is not in the corpus`);
      ok(L!.itemIds.includes(id), `drill ${d.id} names ${id}, which this lesson never teaches`);
    }
  }
  // The sort drill that separates the two du has items on BOTH sides, or it is
  // a sorting exercise with one bucket.
  const sorter = (L!.drills ?? []).find((d) => d.id === 'drill-other-du');
  ok(sorter, 'the drill that separates the two du is gone');
  const sorted = (sorter!.items ?? []).map((id) => ITEMS.get(id)?.fr ?? '');
  ok(sorted.some((fr) => OTHER_DU_SHAPES.some((re) => re.test(fr))), 'the sort drill has no de + le side');
  ok(
    sorted.some((fr) => /\b(mange|boit|prend|apporte|ajoute)\s+(du|de la|de l['’])/i.test(fr)),
    'the sort drill has no partitive side',
  );
});

/* ─── Presentation ────────────────────────────────────────────────────────── */

test('every mission carries its French subtitle and nearly all narrate', () => {
  const noSub = L!.sections.filter((s) => !(s as { frSub?: string }).frSub).map((s) => (s as { id?: string }).id);
  strictEqual(noSub.length, 0, `missions with no French subtitle: ${noSub.join(', ')}`);
  const narrated = L!.sections.filter((s) => narrationOf(s)).length;
  ok(narrated >= L!.sections.length - 4, `only ${narrated} of ${L!.sections.length} missions narrate`);
});

test('every glossary term is surfaced somewhere, and no card is overloaded', () => {
  // The renderer shows three chips and collapses the rest; seven sons.06
  // sections are in that state. And a term defined and never surfaced is an
  // explanation the learner never reaches.
  const defined = Object.keys(L!.terms ?? {});
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const k of defined) ok(used.has(k), `term "${k}" is defined and surfaced on no mission`);
  for (const k of used) ok(defined.includes(k), `term chip "${k}" is not in the glossary`);
  const overloaded = L!.sections
    .filter((s) => ((s as { terms?: string[] }).terms ?? []).length > 3)
    .map((s) => `${(s as { id?: string }).id} (${((s as { terms?: string[] }).terms ?? []).length})`);
  strictEqual(overloaded.length, 0, `more than three term chips: ${overloaded.join(', ')}`);
  // A term's worked examples must resolve, or the chip opens on a blank line.
  for (const [k, t] of Object.entries(L!.terms ?? {})) {
    for (const ex of t.examples ?? []) ok(ITEMS.has(ex.itemId), `term "${k}" cites ${ex.itemId}, which is not in the corpus`);
  }
});

test('a tapTable cell stays short enough to draw', () => {
  // A tapTable cell is a `<TX style={{flex: 1}}>` inside a row, which is the
  // exact flex-on-Text shape that truncates elsewhere in this codebase: the
  // text is measured at its natural width, capped, then shrunk without
  // re-wrapping, so the tail is cut while the audio speaks it in full. Three
  // columns is the maximum that fits and the long copy belongs in the detail.
  for (const s of L!.sections) {
    if (s.type !== 'tapTable') continue;
    const id = (s as { id?: string }).id;
    ok(s.cols.length <= 3, `${id} has ${s.cols.length} columns; three is what fits`);
    for (const r of s.rows) {
      for (const c of r.cells) {
        const words = c.trim().split(/\s+/).filter(Boolean).length;
        ok(words <= 4, `${id}: cell "${c}" is ${words} words and will be truncated on a phone`);
      }
      ok(r.detail?.body, `${id}: a row with no detail has nowhere to put the explanation`);
    }
  }
});

test('difficulty ramps: the first check comes after the teaching, not before', () => {
  const types = L!.sections.map((s) => s.type);
  const firstCheck = L!.sections.findIndex(
    (s) => s.type === 'quiz' || ((s as { questions?: unknown[] }).questions?.length ?? 0) > 0
      || ((s as { groups?: { check?: unknown }[] }).groups ?? []).some((g) => g.check),
  );
  const firstTeaching = Math.min(
    ...['cardDeck', 'tapTable', 'vocabThemes'].map((t) => types.indexOf(t)).filter((i) => i >= 0),
  );
  ok(firstCheck > firstTeaching, 'the learner is taught before being tested');
  // And the un/du control page comes AFTER the contrast and the passage. A card
  // that asks for the article cold has tested nothing, because both answers are
  // correct until the situation is on the screen.
  const contrast = sectionIds().indexOf('s05-pairs');
  const drill = sectionIds().indexOf('s09-check');
  ok(drill > contrast, 'the countable-choice check runs before the contrast that gives it meaning');
  // And the other-du mission comes after the rule it disambiguates, or it is
  // separating the learner from something they have not met.
  ok(sectionIds().indexOf('s14-other-du') > sectionIds().indexOf('s03-family'), 'the other-du mission runs before the partitive is taught');
});

test('the progress card counts the journey it sits in', () => {
  const ix = L!.sections.findIndex((s) => (s as { id?: string }).id === 's21-progress');
  ok(ix > 0, 'the progress card is in the journey');
  const card = L!.sections[ix] as Extract<LessonSection, { type: 'progressCheck' }>;
  const stat = (k: string) => card.stats?.find((x) => x.k === k)?.v;
  strictEqual(stat('Amounts and lines met'), String(L!.itemIds.length));
  strictEqual(stat('Missions done'), `${ix} of ${L!.sections.length}`);
  strictEqual(stat('Exam rounds ahead'), String(theQuiz().rounds?.length ?? 0));
  strictEqual(stat('Pass mark'), `${theQuiz().passMark}%`);
  // And the prose must not restate them. Saying a number twice on one card is
  // two chances to be wrong.
  ok(!/\b\d+\b/.test(card.body ?? ''), `the progress body restates a figure: ${card.body}`);
});

test('the audio brief names the contrast that must be one take', () => {
  // du against de, and un against du, are the minimal pairs in this lesson and
  // both are one vowel. Recorded across two takes a pair is not comparable and
  // the learner hears the difference between the performances. That instruction
  // is invisible once the clips are delivered, so it has to survive in the
  // brief.
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length > 0, 'the lesson asks the studio for recordings');
  ok(recorded.some((r) => /one take/i.test(r.desc)), 'the one-take instruction is missing from the brief');
  ok(
    recorded.some((r) => /deux/i.test(r.desc) && /over-round|relaxed|lengthen/i.test(r.desc)),
    'the brief does not warn that an over-rounded du becomes deux, which is a real word the learner could have heard',
  );
  // Every recordingId a section names must be one the lesson actually requests.
  const known = new Set(recorded.map((r) => r.id));
  const named = strings(L!.sections).filter((s) => s.startsWith('rec-'));
  for (const id of named) ok(known.has(id), `a section names recording "${id}", which the lesson never asks for`);
  // And no section declares `autoplay`, which is in schema.ts and implemented
  // in no component.
  const autoplay = JSON.stringify(L!.sections).includes('"autoplay"');
  ok(!autoplay, 'a section declares autoplay, which nothing reads');
});

test('the authored copy carries no em dash and no honest/honesty (house style)', () => {
  const all = strings(L);
  const emDash = all.filter((s) => s.includes('—'));
  strictEqual(emDash.length, 0, `em dash found in: ${emDash.slice(0, 3).join(' | ')}`);
  const honest = all.filter((s) => /honest/i.test(s));
  strictEqual(honest.length, 0, `honest/honesty found in: ${honest.slice(0, 3).join(' | ')}`);
});

// ── Source-derived. These read the authored files in ealch-admin. ───────────

test('the reframe appears verbatim as often as it was authored', { skip: noSrc }, () => {
  const inSource = strings(SRC).filter((s) => s.includes(SRC_REFRAME)).length;
  const inSeed = strings(L).filter((s) => s.includes(SRC_REFRAME)).length;
  // Derived, not hardcoded: the seed must carry the same number the source
  // does. A paraphrase in either copy moves one of these and not the other.
  strictEqual(inSeed, inSource, `reframe appears ${inSeed}x in the seed but ${inSource}x in the source`);
  // The density validator's own floor, restated so the intent is visible here.
  const sections = L!.sections.filter((s) => strings(s).some((x) => x.includes(SRC_REFRAME)));
  ok(sections.length >= 3, `the reframe must carry at least 3 sections, found ${sections.length}`);
  // And it has to reach the mission where a weak reframe falls apart. A
  // reframe about newness would have nothing to say on the other-du card,
  // because « près du lit » is exactly as new to the listener as « du pain ».
  ok(
    strings(section('s14-other-du')).some((s) => s.includes(SRC_REFRAME)),
    'the reframe does not reach the other-du mission, which is where it has to hold',
  );
  // The reframe is about countability, not newness. a1.11 owns newness and it
  // does not separate un from du: « du café » is as new to the listener as
  // « un café ». A reframe that named the wrong axis would quietly undo a1.11.
  ok(
    !/\bnew\b|already know|first time/i.test(SRC_REFRAME),
    `the reframe "${SRC_REFRAME}" is about newness, which a1.11 owns and which does not separate un from du`,
  );
});

test('every authored contrast pair is reciprocal and really is a pair', { skip: noSrc }, () => {
  // The pairs are what the whole lesson turns on, and a half-deleted pair would
  // leave one half of a contrast with nothing to sit against. Built from
  // `pairWith` in the corpus rather than listed, so this checks the structure
  // rather than a copy of it.
  ok(SRC_PAIRS.length >= 3, `only ${SRC_PAIRS.length} contrast pairs authored`);
  const byId = new Map(SRC_AUTHORED.map((w) => [w.id, w]));
  for (const [a, b] of SRC_PAIRS) {
    const first = byId.get(a);
    const second = byId.get(b) ?? null;
    ok(first, `pair ${a} / ${b} names an entry that does not exist`);
    // The far half may be a REUSED corpus row rather than an authored one
    // (« Je mange du pain. » is fr.a1.cuisine.007 and predates this lesson), so
    // it is resolved against the seed when the source does not hold it.
    ok(second || ITEMS.has(b), `${a} points at ${b}, which exists nowhere`);
    if (second) strictEqual(second.pairWith, a, `${b} does not point back at ${a}`);
    ok(first!.article !== (second?.article ?? ''), `${a} and ${b} carry the same article, so they are not a contrast`);
    // Both halves are taught, or the pair is decoration.
    ok(L!.itemIds.includes(a) && L!.itemIds.includes(b), `pair ${a} / ${b} is authored and not taught`);
  }
});

test('the speak and dictation sets are the ones the source names', { skip: noSrc }, () => {
  const speak = section('s18-speak') as Extract<LessonSection, { type: 'practice' }>;
  strictEqual(speak.itemIds.join(','), SRC_SPEAK.join(','), 'the spoken set drifted between source and seed');
  const dict = section('s17-dictation') as Extract<LessonSection, { type: 'dictation' }>;
  strictEqual(dict.itemIds.join(','), SRC_DICTATION.join(','), 'the dictée set drifted between source and seed');
});

test('once published, the seed copy matches what was authored', { skip: noSrc }, () => {
  // Before the batch runs the seed is behind, and this is the test that says
  // so. A seed copy that has fallen behind the authored source is the failure
  // mode that shipped a1.01.l1 with twelve unreachable questions.
  //
  // Every figure is DERIVED from the source. A hardcoded count fails on itself
  // the first time content legitimately changes, and the fix is then to edit
  // the test, which is how a test comes to certify a bug.
  strictEqual(L!.version, SRC!.version, `seed is v${L!.version}, source is v${SRC!.version}`);
  strictEqual(L!.sections.length, SRC!.sections.length, 'section count drifted');
  strictEqual(L!.itemIds.length, SRC!.itemIds.length, 'itemId count drifted');
  strictEqual((L!.acts ?? []).length, (SRC!.acts ?? []).length, 'act count drifted');
  strictEqual((L!.drills ?? []).length, (SRC!.drills ?? []).length, 'drill count drifted');
  strictEqual((L!.sheets ?? []).length, (SRC!.sheets ?? []).length, 'sheet count drifted');
  strictEqual((L!.errorTriggers ?? []).length, (SRC!.errorTriggers ?? []).length, 'trigger count drifted');
  strictEqual(Object.keys(L!.terms ?? {}).length, Object.keys(SRC!.terms ?? {}).length, 'glossary size drifted');
  strictEqual(
    sectionIds().join(','),
    SRC!.sections.map((s) => (s as { id?: string }).id).join(','),
    'the mission spine drifted between source and seed',
  );
  const srcQuiz = SRC!.sections.find(
    (s): s is Extract<LessonSection, { type: 'quiz' }> => s.type === 'quiz',
  )!;
  strictEqual(quizQuestions(theQuiz()).length, quizQuestions(srcQuiz).length, 'quiz question count drifted');
  strictEqual(
    (L!.deckTranche ?? []).flat().length,
    (SRC!.deckTranche ?? []).flat().length,
    'the SRS release schedule drifted',
  );
  // The corpus half: every authored entry reached the seed, with the same word.
  for (const w of SRC_AUTHORED) {
    const it = ITEMS.get(w.id);
    ok(it, `${w.id} "${w.fr}" was authored and is not in the seed — run the merge`);
    strictEqual(it!.fr, w.fr, `${w.id}: source says "${w.fr}", seed says "${it!.fr}"`);
  }
});
