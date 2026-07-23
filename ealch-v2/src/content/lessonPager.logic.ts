// The page model behind the swipe-through lesson reader (LessonPager.tsx).
//
// Kept as a pure, RN-free island for the same reason progress.logic.ts and
// narration.logic.ts are: the paging arithmetic — how many pages, which page an
// anchor lands on, what the button at the bottom should say on the last page —
// is exactly the kind of off-by-one logic that is miserable to verify by
// swiping on a device and trivial to verify with `node --test`. The component
// does rendering and gesture wiring only; every decision lives here.
//
// The reader turns a Lesson into a deck of pages: a COVER (title + intro)
// first, then one page per teaching section, in order, then — when the lesson
// has an exam — a QUIZ page. The quiz is a page IN the deck now (it used to be
// a separate screen the last card handed off to): the learner swipes into it
// like any other card, answers the question deck inside it, and the bottom
// button finishes the lesson once the quiz is complete.

import type { Lesson, LessonSection } from './schema';

export type PagerPage =
  | { kind: 'cover' }
  | { kind: 'section'; sectionIndex: number }
  | { kind: 'quiz' };

/** What the bottom button does on a given page. 'next' advances the deck;
 *  'finish' completes the lesson from the final page (the quiz page when the
 *  lesson has one — the component keeps it disabled until the quiz is done). */
export type PagerCta = 'next' | 'finish';

/** The teaching sections, in order, with the quiz removed — the quiz renders
 *  as its own dedicated page, never as a plain section body. */
export function contentSections(lesson: Lesson): LessonSection[] {
  return lesson.sections.filter((s) => s.type !== 'quiz');
}

/** The quiz section, if this lesson has one. A lesson may legitimately have no
 *  quiz — sitting the content is then the completion (mirrors lesson.tsx). */
export function quizSection(
  lesson: Lesson,
): Extract<LessonSection, { type: 'quiz' }> | undefined {
  return lesson.sections.find(
    (s): s is Extract<LessonSection, { type: 'quiz' }> => s.type === 'quiz',
  );
}

export function lessonHasQuiz(lesson: Lesson): boolean {
  const q = quizSection(lesson);
  return !!q && q.questions.length > 0;
}

/** The full deck: cover, one page per teaching section, then the quiz page
 *  when the lesson has a real exam. */
export function buildPages(lesson: Lesson): PagerPage[] {
  return [
    { kind: 'cover' },
    ...contentSections(lesson).map((_, sectionIndex): PagerPage => ({ kind: 'section', sectionIndex })),
    ...(lessonHasQuiz(lesson) ? [{ kind: 'quiz' } as PagerPage] : []),
  ];
}

/** Total pages in the deck (cover + sections + quiz page when present). */
export function pageCount(lesson: Lesson): number {
  return 1 + contentSections(lesson).length + (lessonHasQuiz(lesson) ? 1 : 0);
}

/** Clamp a (possibly stale or out-of-range) page index into the deck. A deck
 *  always has at least the cover, so the floor is 0 and never negative. */
export function clampPage(index: number, count: number): number {
  if (!Number.isFinite(index)) return 0;
  const hi = Math.max(0, count - 1);
  return Math.min(Math.max(0, Math.trunc(index)), hi);
}

export function isLastPage(index: number, count: number): boolean {
  return index >= count - 1;
}

/**
 * What the bottom button should do at `index`. Every non-final page advances
 * the deck ('next'); the final page finishes the lesson ('finish'). When the
 * final page is the quiz page, the component gates the button on quiz
 * completion — that is presentation state, so it lives there, not here.
 */
export function ctaFor(index: number, count: number): PagerCta {
  return isLastPage(index, count) ? 'finish' : 'next';
}

/** The deck page a content-section index maps to. The cover occupies page 0,
 *  so section 0 is page 1 — this is the offset a resolved deep-link anchor
 *  (which names a content section) needs to open the pager on the right page. */
export function sectionIndexToPage(sectionIndex: number): number {
  return sectionIndex + 1;
}
