// Pager page-model guard. Runs on plain Node (types stripped natively):
//   npm test
// lessonPager.logic.ts imports only types from schema.ts, so it loads here with
// no RN, no store, no services — the same pure-island contract as the rest of
// src/content. These cases pin the off-by-one arithmetic (the cover offset, the
// last-page hand-off to the exam, anchor -> page mapping) that is painful to
// verify by swiping on a device and trivial to verify here.
import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import type { Lesson, LessonSection } from './schema.ts';
import {
  buildPages,
  contentSections,
  ctaFor,
  clampPage,
  isLastPage,
  lessonHasQuiz,
  pageCount,
  quizSection,
  sectionIndexToPage,
} from './lessonPager.logic.ts';

function lesson(sections: LessonSection[]): Lesson {
  return {
    id: 'sons.01.l1',
    unitId: 'sons.01',
    seq: 1,
    title: 'T',
    level: 'sons',
    tag: 'SONS · LEÇON 01',
    intro: 'intro',
    sections,
    itemIds: [],
    version: 1,
  };
}

const teach = (title: string): LessonSection => ({ type: 'teach', title, body: 'b' });
const quiz: LessonSection = {
  type: 'quiz',
  title: 'Quiz',
  questions: [{ q: 'q', opts: ['a', 'b'], correct: 0 }],
};

test('contentSections drops the quiz', () => {
  const l = lesson([teach('a'), teach('b'), quiz]);
  strictEqual(contentSections(l).length, 2);
  strictEqual(quizSection(l)?.type, 'quiz');
});

test('the deck is a cover, one page per teaching section, then the quiz page', () => {
  const l = lesson([teach('a'), teach('b'), teach('c'), quiz]);
  const pages = buildPages(l);
  strictEqual(pages.length, 5); // cover + 3 sections + quiz page
  strictEqual(pageCount(l), 5);
  deepStrictEqual(pages[0], { kind: 'cover' });
  deepStrictEqual(pages[1], { kind: 'section', sectionIndex: 0 });
  deepStrictEqual(pages[3], { kind: 'section', sectionIndex: 2 });
  deepStrictEqual(pages[4], { kind: 'quiz' });
});

test('a quiz-less lesson still has a full deck, just no quiz page', () => {
  const l = lesson([teach('a'), teach('b')]);
  strictEqual(lessonHasQuiz(l), false);
  strictEqual(pageCount(l), 3);
  deepStrictEqual(buildPages(l).map((p) => p.kind), ['cover', 'section', 'section']);
});

test('a quiz with no questions does not count as an exam and gets no page', () => {
  const empty: LessonSection = { type: 'quiz', title: 'Quiz', questions: [] };
  const l = lesson([teach('a'), empty]);
  strictEqual(lessonHasQuiz(l), false);
  strictEqual(pageCount(l), 2); // cover + 1 section; the empty quiz vanishes
});

test('every non-final page advances; the final page finishes', () => {
  const l = lesson([teach('a'), teach('b'), quiz]);
  const count = pageCount(l); // 4: cover, a, b, quiz
  strictEqual(ctaFor(0, count), 'next');
  strictEqual(ctaFor(2, count), 'next'); // last SECTION page still advances into the quiz
  strictEqual(ctaFor(3, count), 'finish'); // the quiz page finishes
});

test('the last page of a quiz-less lesson also finishes', () => {
  const l = lesson([teach('a'), teach('b')]);
  const count = pageCount(l); // 3
  strictEqual(ctaFor(2, count), 'finish');
});

test('clampPage keeps an index inside the deck and survives garbage', () => {
  strictEqual(clampPage(-3, 4), 0);
  strictEqual(clampPage(9, 4), 3);
  strictEqual(clampPage(2, 4), 2);
  strictEqual(clampPage(Number.NaN, 4), 0);
  strictEqual(clampPage(1.9, 4), 1); // truncates, never rounds past the end
  strictEqual(clampPage(5, 0), 0); // an empty count never yields a negative page
});

test('isLastPage is true only at the final index', () => {
  strictEqual(isLastPage(2, 3), true);
  strictEqual(isLastPage(1, 3), false);
  strictEqual(isLastPage(3, 3), true); // a stale over-range index still reads as last
});

test('a content section maps to its page past the cover', () => {
  strictEqual(sectionIndexToPage(0), 1); // section 0 sits behind the cover
  strictEqual(sectionIndexToPage(4), 5);
});
