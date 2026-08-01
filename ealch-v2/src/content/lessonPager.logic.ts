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

// The extension is required: this is a RUNTIME import (unlike the type-only
// one below, which is erased), and `node --test` resolves ESM specifiers
// literally when it type-strips these files.
import { quizQuestions } from './schema.ts';
import type { Lesson, LessonSection } from './schema';

export type PagerPage =
  | { kind: 'cover' }
  | { kind: 'section'; sectionIndex: number }
  /** An act's closing checkpoint: one line, a progress bar, continue or stop.
   *  Only present on lessons that declare `acts`. */
  | { kind: 'checkpoint'; actIndex: number }
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
  // Via quizQuestions() rather than `q.questions` directly: a v2 lesson groups
  // the same questions into `rounds`, and reading only the flat field would
  // report a 32-question exam as no exam at all.
  return !!q && quizQuestions(q).length > 0;
}

/** The full deck: cover, one page per teaching section, then the quiz page
 *  when the lesson has a real exam.
 *
 *  A lesson that declares ACTS also gets a checkpoint page after the last
 *  section of each act. That is what turns a 241-screen lesson into six short
 *  ones: a place to stop, a line saying what was achieved, and the SRS cards
 *  that act earned. Lessons without acts are unchanged, page for page. */
export function buildPages(lesson: Lesson): PagerPage[] {
  const secs = contentSections(lesson);
  const pages: PagerPage[] = [{ kind: 'cover' }];

  for (const [sectionIndex, sec] of secs.entries()) {
    pages.push({ kind: 'section', sectionIndex });
    const id = (sec as { id?: string }).id;
    if (!id) continue;
    // The checkpoint follows the section that closes an act. The quiz lives on
    // its own page, so an act ending on the quiz is checkpointed after it
    // rather than here — see below.
    const actIx = actIndexEnding(lesson, id);
    if (actIx >= 0) pages.push({ kind: 'checkpoint', actIndex: actIx });
  }

  if (lessonHasQuiz(lesson)) {
    pages.push({ kind: 'quiz' });
    // The final act usually ends on the quiz or the roundup, both of which sit
    // outside `contentSections` or after it. If any act's last section is the
    // quiz, its checkpoint belongs here.
    const quizSec = lesson.sections.find((s) => s.type === 'quiz');
    const quizId = (quizSec as { id?: string } | undefined)?.id;
    if (quizId) {
      const actIx = actIndexEnding(lesson, quizId);
      if (actIx >= 0) pages.push({ kind: 'checkpoint', actIndex: actIx });
    }
  }

  return pages;
}

/** The index of the act this section id CLOSES, or -1. Local to the page
 *  model so it stays free of the acts module's runtime concerns. */
function actIndexEnding(lesson: Lesson, sectionId: string): number {
  const acts = (lesson as Lesson & { acts?: { sections: string[] }[] }).acts;
  if (!acts?.length) return -1;
  return acts.findIndex((a) => a.sections[a.sections.length - 1] === sectionId);
}

/** Total pages in the deck (cover + sections + checkpoints + quiz page). */
export function pageCount(lesson: Lesson): number {
  return buildPages(lesson).length;
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
