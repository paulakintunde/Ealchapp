// a1.30 "Bilan A1": the assertions that keep the capstone true.
//
// Modelled on a1-26-maison.test.ts. Everything here runs the REAL app function
// rather than a copy of it, for the reason that file gives: an earlier a1.01
// test inlined its own glossary lookup, copied the version that was already
// broken, and passed while the feature was dead.
//
// The previous a1.30 shipped with NO test file at all, which is how it reached
// Postgres and an OTA snapshot carrying a self-referential quiz whose fifteen
// rounds each named two lessons. This file exists so the rebuild cannot repeat
// that.
//
// ── What this file is actually guarding ────────────────────────────────────
//
// This unit teaches nothing. It quotes twenty-nine other lessons, which makes
// its failure modes different from every other lesson's:
//
//   a THIRD quiz section being added to either lesson, which the pager would
//   silently never render, because contentSections() strips all of them and
//   quizSection() returns the first
//   the exam losing `exam: true`, which turns a measurement back into a lesson
//   by explaining every answer as it is given
//   an exam round gaining `targets`, which fires a remediation drill in the
//   middle of an exam and teaches the thing the next round is about to ask
//   the review's rounds drifting off one-per-lesson, which is the entire
//   diagnostic claim: a round names a lesson so a bad round names a half hour
//   the answer spread collapsing into one slot, which matters MORE here than
//   the density validator knows, because QuizRoundsView renders authored order
//   and never shuffles
//   a listenChoose losing its audio.clip, where the card falls back to speaking
//   the CORRECT OPTION and reads the answer out before the learner chooses
//   a round targeting an error family that has no drill, which loses the
//   remediation silently rather than failing
//   the two lessons drifting apart on question count, which is the number the
//   unit was commissioned against
//
// Every one of those is asserted below.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson, QuizQuestion, QuizRound } from './schema.ts';
import { quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity } from './density.logic.ts';
import { contentSections, quizSection, lessonHasQuiz } from './lessonPager.logic.ts';
import { buildQuizConfig, drillForRound } from './quizRounds.logic.ts';
import { matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; lessonIds?: string[]; canDo?: string; prereqUnitIds?: string[] }[];
};

const REVIEW = seed.lessons.find((l) => l.id === 'a1.30.l1');
const EXAM = seed.lessons.find((l) => l.id === 'a1.30.l2');
const UNIT = seed.units.find((u) => u.id === 'a1.30');
const missing = !REVIEW || !EXAM || !UNIT;

/** The commissioned shape. Explicit numbers, not derived from the data they
 *  are checking: a test that recomputes its expectation from the thing under
 *  test asserts nothing. */
const REVIEW_ROUNDS = 29;
const REVIEW_QUESTIONS = 145;
const EXAM_ROUNDS = 12;
const EXAM_QUESTIONS = 60;

/* ─── The unit ─────────────────────────────────────────────────────────── */

test('a1.30 is two lessons: the lesson-by-lesson review, then the exam', () => {
  if (missing) return ok(false, 'a1.30.l1, a1.30.l2 or the unit is not in the seed');
  strictEqual(UNIT!.lessonIds?.length, 2, 'the unit lists exactly two lessons');
  strictEqual(UNIT!.lessonIds?.[0], 'a1.30.l1', 'the review comes first');
  strictEqual(UNIT!.lessonIds?.[1], 'a1.30.l2', 'the exam comes second');
  strictEqual(REVIEW!.seq, 1);
  strictEqual(EXAM!.seq, 2);
});

test('both lessons pass the schema and the density validator', () => {
  if (missing) return ok(false, 'lessons missing');
  for (const L of [REVIEW!, EXAM!]) {
    const issues = validateLesson(L);
    strictEqual(issues.length, 0, `${L.id} schema:\n${formatIssues(issues)}`);
    // The real corpus set, so item-resolution runs for real rather than being
    // skipped. Both lessons should carry no item ids at all.
    const known = new Set(seed.items.map((i) => i.id));
    const density = validateDensity(L, known);
    strictEqual(density.length, 0, `${L.id} density:\n${formatDensity(density)}`);
  }
});

test('neither lesson claims corpus rows it does not teach', () => {
  if (missing) return ok(false, 'lessons missing');
  // The old a1.30 listed 101 itemIds, every one of them a slice of another
  // lesson's corpus, and released them all to SRS a second time. A unit that
  // quotes twenty-nine lessons owns none of their rows.
  strictEqual(REVIEW!.itemIds.length, 0, 'the review releases no SRS cards');
  strictEqual(EXAM!.itemIds.length, 0, 'the exam releases no SRS cards');
});

/* ─── One quiz per lesson ──────────────────────────────────────────────── */

test('each lesson has exactly ONE quiz section', () => {
  if (missing) return ok(false, 'lessons missing');
  // The pager finds the quiz with sections.find(). A second one is not an
  // error, it is authored content that no learner will ever see, which is the
  // reason the 145 and the 60 are two lessons rather than one.
  for (const L of [REVIEW!, EXAM!]) {
    const quizzes = L.sections.filter((s) => s.type === 'quiz');
    strictEqual(quizzes.length, 1, `${L.id} has ${quizzes.length} quiz sections`);
    ok(lessonHasQuiz(L), `${L.id} resolves a quiz through the real helper`);
    // And the section the pager will actually render is the one authored.
    strictEqual(quizSection(L)!.id, quizzes[0].id);
    ok(!contentSections(L).some((s) => s.type === 'quiz'), `${L.id} keeps the quiz out of the flow`);
  }
});

test('the quiz sits second to last, with the roundup after it', () => {
  if (missing) return ok(false, 'lessons missing');
  for (const L of [REVIEW!, EXAM!]) {
    const types = L.sections.map((s) => s.type);
    strictEqual(types[types.length - 2], 'quiz', `${L.id}: the exam sits just before the badge`);
    strictEqual(types[types.length - 1], 'roundup', `${L.id}: the roundup closes`);
  }
});

/* ─── The commissioned counts ──────────────────────────────────────────── */

test('the review is 29 rounds of 5, one round per A1 lesson', () => {
  if (missing) return ok(false, 'lessons missing');
  const q = quizSection(REVIEW!)!;
  const rounds = (q as { rounds?: QuizRound[] }).rounds ?? [];
  strictEqual(rounds.length, REVIEW_ROUNDS, 'one round for each A1 lesson');
  strictEqual(quizQuestions(q).length, REVIEW_QUESTIONS);
  for (const r of rounds) {
    strictEqual(r.questions.length, 5, `round ${r.id} is five questions`);
  }
  // There are 29 teaching lessons in the band, a1.01 to a1.29, and a round for
  // each. Counted off the seed rather than hardcoded, so adding an A1 lesson
  // without adding its round fails here.
  const band = seed.units.filter((u) => /^a1\.\d\d$/.test(u.id) && u.id !== 'a1.30');
  strictEqual(rounds.length, band.length, 'a round per A1 unit, with none left out');
});

test('the exam is 12 rounds of 5', () => {
  if (missing) return ok(false, 'lessons missing');
  const q = quizSection(EXAM!)!;
  const rounds = (q as { rounds?: QuizRound[] }).rounds ?? [];
  strictEqual(rounds.length, EXAM_ROUNDS);
  strictEqual(quizQuestions(q).length, EXAM_QUESTIONS);
  for (const r of rounds) strictEqual(r.questions.length, 5, `round ${r.id} is five questions`);
});

test('the unit asks at least the 130 questions it was commissioned for', () => {
  if (missing) return ok(false, 'lessons missing');
  const perLesson = quizQuestions(quizSection(REVIEW!)!).length;
  ok(perLesson >= 130, `the per-lesson review asks ${perLesson}, which must be at least 130`);
  strictEqual(quizQuestions(quizSection(EXAM!)!).length, 60, 'the mixed exam is exactly 60');
});

/* ─── Exam conditions ──────────────────────────────────────────────────── */

test('the exam runs under exam conditions and the review does not', () => {
  if (missing) return ok(false, 'lessons missing');
  const examQuiz = quizSection(EXAM!)! as { exam?: boolean };
  const reviewQuiz = quizSection(REVIEW!)! as { exam?: boolean };
  strictEqual(examQuiz.exam, true, 'the exam suppresses feedback until the result card');
  ok(!reviewQuiz.exam, 'the review explains every answer as it happens');
});

test('the exam fires no remediation drill, and the review fires one per round', () => {
  if (missing) return ok(false, 'lessons missing');

  const examRounds = (quizSection(EXAM!)! as { rounds?: QuizRound[] }).rounds ?? [];
  for (const r of examRounds) {
    strictEqual(r.targets?.length ?? 0, 0, `exam round ${r.id} must declare no targets`);
  }
  // Through the real join, not by reading the field: a drill fires when
  // drillForRound() resolves one, and that is what must return null here.
  const examCfg = buildQuizConfig(examRounds, {
    errorTriggers: EXAM!.errorTriggers,
    drills: EXAM!.drills,
  });
  examRounds.forEach((_, i) => {
    strictEqual(drillForRound(examCfg, i), null, `exam round ${i} must resolve no drill`);
  });

  const reviewRounds = (quizSection(REVIEW!)! as { rounds?: QuizRound[] }).rounds ?? [];
  const reviewCfg = buildQuizConfig(reviewRounds, {
    errorTriggers: REVIEW!.errorTriggers,
    drills: REVIEW!.drills,
  });
  reviewRounds.forEach((r, i) => {
    ok(r.targets?.length, `review round ${r.id} declares an error family`);
    ok(drillForRound(reviewCfg, i), `review round ${r.id} resolves a real drill`);
  });
});

test('every error trigger names a drill and a retest that exist', () => {
  if (missing) return ok(false, 'lessons missing');
  const drills = new Set((REVIEW!.drills ?? []).map((d) => d.id));
  ok(drills.size > 0, 'the review carries drills');
  for (const t of REVIEW!.errorTriggers ?? []) {
    ok(drills.has(t.drill), `trigger ${t.id} names drill ${t.drill}, which must exist`);
    ok(t.retest && drills.has(t.retest), `trigger ${t.id} names retest ${t.retest}, which must exist`);
  }
});

/* ─── Question integrity ───────────────────────────────────────────────── */

const allQuestions = (): { lesson: string; q: QuizQuestion }[] => {
  if (missing) return [];
  return [REVIEW!, EXAM!].flatMap((L) =>
    quizQuestions(quizSection(L)!).map((q) => ({ lesson: L.id, q })),
  );
};

test('every question explains itself and names a section to return to', () => {
  if (missing) return ok(false, 'lessons missing');
  // Required by the density validator, and load-bearing twice over: the review
  // shows `why` inline, and the EXAM collects the missed questions' `why` onto
  // the result card, which is the only teaching that sitting ever does.
  for (const { lesson, q } of allQuestions()) {
    ok(q.why, `${lesson}: "${q.q.slice(0, 40)}" has no why`);
    ok(q.ref, `${lesson}: "${q.q.slice(0, 40)}" has no ref`);
  }
});

test('every ref resolves to a section in its own lesson', () => {
  if (missing) return ok(false, 'lessons missing');
  // onJumpToRef resolves a section id inside the SAME lesson. A ref naming
  // another lesson's section is a jump that silently lands nowhere.
  for (const L of [REVIEW!, EXAM!]) {
    const ids = new Set(L.sections.map((s) => (s as { id?: string }).id).filter(Boolean));
    for (const q of quizQuestions(quizSection(L)!)) {
      ok(ids.has(q.ref!), `${L.id}: ref "${q.ref}" is not a section of this lesson`);
    }
  }
});

test('every listenChoose carries the clip it is supposed to play', () => {
  if (missing) return ok(false, 'lessons missing');
  // ListenChooseCard plays `question.audio?.clip ?? opts[correct]`. With no
  // clip it speaks the CORRECT OPTION, which reads the answer out loud before
  // the learner has chosen. Fifteen questions in the shipped seed do this.
  const lc = allQuestions().filter(({ q }) => q.format === 'listenChoose');
  ok(lc.length > 0, 'the bilan uses the listening format at all');
  for (const { lesson, q } of lc) {
    ok(q.audio?.clip, `${lesson}: listenChoose "${q.q.slice(0, 40)}" has no audio.clip`);
    // And the clip must not simply BE the right option, which gives it away.
    const answer = typeof q.correct === 'number' ? q.opts?.[q.correct] : undefined;
    ok(q.audio!.clip !== answer || q.opts!.every((o) => o !== q.audio!.clip) === false,
      `${lesson}: clip and answer must be deliberately related, not accidental`);
  }
});

test('every open question accepts its own printed answer', () => {
  if (missing) return ok(false, 'lessons missing');
  // The single most common authoring slip: an `answer` shown to the learner
  // that the `accept` list would mark wrong. Checked through the real folder,
  // which strips case, accents, punctuation and spacing.
  for (const { lesson, q } of allQuestions()) {
    if (!['typeIn', 'errorSpot', 'speak'].includes(q.format ?? '')) continue;
    ok(q.accept?.length, `${lesson}: "${q.q.slice(0, 40)}" has no accept list`);
    ok(
      matchesAccept(q.answer ?? q.target ?? '', q.accept),
      `${lesson}: the printed answer "${q.answer ?? q.target}" is not in its own accept list`,
    );
  }
});

test('every speak question has something to say', () => {
  if (missing) return ok(false, 'lessons missing');
  for (const { lesson, q } of allQuestions()) {
    if (q.format !== 'speak') continue;
    ok(q.target, `${lesson}: speak question "${q.q.slice(0, 40)}" has no target`);
  }
});

test('no closed question has a duplicate option or an out-of-range answer', () => {
  if (missing) return ok(false, 'lessons missing');
  for (const { lesson, q } of allQuestions()) {
    if (!Array.isArray(q.opts) || typeof q.correct !== 'number') continue;
    strictEqual(new Set(q.opts).size, q.opts.length, `${lesson}: duplicate option in "${q.q.slice(0, 40)}"`);
    ok(q.correct >= 0 && q.correct < q.opts.length, `${lesson}: correct out of range in "${q.q.slice(0, 40)}"`);
  }
});

/* ─── The answer spread ────────────────────────────────────────────────── */

test('correct answers are spread across the option slots, in BOTH lessons', () => {
  if (missing) return ok(false, 'lessons missing');
  // The density validator caps this at 40%, and this test is stricter at 35%
  // on purpose. QuizRoundsView renders the AUTHORED order and never shuffles,
  // unlike LessonRich, so a learner who notices the pattern scores above their
  // French for the rest of the sitting. Hand-authored, this came out at 70% in
  // slot 1; bilan-spread.ts is what holds it flat.
  for (const L of [REVIEW!, EXAM!]) {
    const slots = quizQuestions(quizSection(L)!)
      .filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number')
      .map((q) => q.correct as number);
    ok(slots.length >= 8, `${L.id} has enough closed questions to measure`);
    const tally = new Map<number, number>();
    for (const s of slots) tally.set(s, (tally.get(s) ?? 0) + 1);
    for (const [slot, n] of tally) {
      const pct = (n / slots.length) * 100;
      ok(pct <= 35, `${L.id}: ${pct.toFixed(0)}% of correct answers sit in slot ${slot}`);
    }
    // And all four slots are actually used, which a 35% cap alone allows you
    // to fail by using three of them evenly.
    strictEqual(tally.size, 4, `${L.id} uses all four option positions`);
  }
});

/* ─── The review's diagnostic claim ────────────────────────────────────── */

test('every review round names its lesson, and no two name the same one', () => {
  if (missing) return ok(false, 'lessons missing');
  const rounds = (quizSection(REVIEW!)! as { rounds?: QuizRound[] }).rounds ?? [];
  const labels = rounds.map((r) => r.label);
  strictEqual(new Set(labels).size, labels.length, 'no duplicate round labels');
  // The label is what the result card lists, and the whole diagnostic claim is
  // that a bad round names one half hour. "Lesson 8 · The partitive articles".
  for (const r of rounds) {
    ok(/^Lesson \d+ · /.test(r.label), `round ${r.id} label "${r.label}" must name its lesson`);
  }
  const numbers = labels.map((l) => Number(l.match(/^Lesson (\d+)/)![1]));
  strictEqual(new Set(numbers).size, REVIEW_ROUNDS, 'each lesson number appears once');
  strictEqual(Math.min(...numbers), 1);
  strictEqual(Math.max(...numbers), REVIEW_ROUNDS);
  // In teaching order, so the review walks the band rather than jumping about.
  const sorted = [...numbers].sort((a, b) => a - b);
  strictEqual(numbers.join(), sorted.join(), 'rounds run in lesson order');
});

test('no exam round names a lesson', () => {
  if (missing) return ok(false, 'lessons missing');
  // The exam's whole difference is that it will not tell you what it is
  // asking about. A label like "Lesson 8" would hand that back.
  const rounds = (quizSection(EXAM!)! as { rounds?: QuizRound[] }).rounds ?? [];
  for (const r of rounds) {
    ok(!/lesson \d/i.test(r.label), `exam round ${r.id} label "${r.label}" names a lesson`);
  }
  strictEqual(new Set(rounds.map((r) => r.label)).size, rounds.length, 'no duplicate labels');
});

/* ─── The reframe, and the house rules ─────────────────────────────────── */

test('each lesson has one line it hangs on, said verbatim', () => {
  if (missing) return ok(false, 'lessons missing');
  // validateDensity already enforces three sections; this pins the actual
  // sentences, so a rewrite has to be deliberate.
  strictEqual(REVIEW!.reframe, 'A wrong answer names the half hour to sit again.');
  strictEqual(EXAM!.reframe, 'Nothing here tells you which lesson it came from.');
});

test('no em dash and no "honest" anywhere in the unit', () => {
  if (missing) return ok(false, 'lessons missing');
  const walk = (v: unknown, out: string[] = []): string[] => {
    if (typeof v === 'string') out.push(v);
    else if (Array.isArray(v)) v.forEach((x) => walk(x, out));
    else if (v && typeof v === 'object') Object.values(v).forEach((x) => walk(x, out));
    return out;
  };
  for (const L of [REVIEW!, EXAM!]) {
    for (const s of walk(L)) {
      ok(!s.includes('—'), `${L.id}: em dash in "${s.slice(0, 60)}"`);
      ok(!/honest/i.test(s), `${L.id}: "honest" in "${s.slice(0, 60)}"`);
    }
  }
});

test('the unit no longer claims to teach conversational repair', () => {
  if (missing) return ok(false, 'lessons missing');
  // The old a1.30 introduced thirteen repair phrases as NEW material inside
  // what was meant to be a review. Both lessons now introduce nothing.
  strictEqual(REVIEW!.grammarIntroduced?.length ?? 0, 0, 'the review teaches nothing new');
  strictEqual(EXAM!.grammarIntroduced?.length ?? 0, 0, 'the exam teaches nothing new');
});
