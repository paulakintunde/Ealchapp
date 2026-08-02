// Answer checking for the v2 question formats — the pure island behind the
// quiz engine and the in-flow checks.
//
// The shipped quiz is mcq only: `correct` is an index and checking is `===`.
// The v2 formats are not, and each has a way of being wrong that is invisible
// until a learner hits it:
//
//   typeIn      the answer is free text. A learner who types "pa-REE" when the
//               key says "/pa.ʁi/" is RIGHT and must not be told otherwise, so
//               `accept` is a list and comparison is fold-insensitive.
//   errorSpot   same, but the prompt is a wrong reading to fix.
//   tapSilent   the answer is a SET of letters, and the learner may tap them
//               in any order. Order-sensitive comparison would fail a correct
//               answer roughly half the time.
//   listenChoose  an index, like mcq, but over audio.
//   speak       scored by the recogniser, not here.
//
// Folding rules are deliberately generous. This is a pronunciation lesson: the
// learner is being tested on knowing that the S in Paris is silent, not on
// producing a particular ASCII rendering of a phonetic transcription. Anything
// that unambiguously identifies the right answer counts.

import type { QuizQuestion } from './schema.ts';

/** Normalise for comparison: lowercase, strip accents, strip the notation
 *  delimiters, collapse whitespace and separators.
 *
 *  Slashes and brackets go because a learner typing an IPA answer cannot be
 *  expected to add them, and the question already showed the convention.
 *  Hyphens and middots go because "pa-REE", "pa REE" and "paREE" are the same
 *  answer syllabified differently. */
export function fold(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[/[\]()«».,!?;:]/g, '')
    .replace(/[-·’']/g, '')
    .replace(/\s+/g, '')
    .trim();
}

/** Did a free-text answer match any accepted form? */
export function matchesAccept(input: string, accept: readonly string[] | undefined): boolean {
  if (!accept?.length) return false;
  const got = fold(input);
  if (!got) return false;
  return accept.some((a) => fold(a) === got);
}

/** The letters a tapSilent answer expects, as a set of lowercase characters.
 *
 *  The authored `correct` is a string like 'ent' or 'p' — the letters that are
 *  written and not said. Order does not matter and repeats collapse: tapping
 *  the two silent letters of "temps" is the same answer whichever comes
 *  first. */
export function silentLetterSet(correct: string): Set<string> {
  return new Set(fold(correct).split(''));
}

/** Did the learner tap the right letters, in any order?
 *
 *  `tapped` is what they selected — either characters or indices resolved to
 *  characters by the caller. Compared as sets, so a correct answer entered in
 *  a different order is still correct. */
export function tapSilentCorrect(tapped: readonly string[], correct: string): boolean {
  const want = silentLetterSet(correct);
  const got = new Set(tapped.map((c) => fold(c)).filter(Boolean));
  if (want.size !== got.size) return false;
  for (const c of want) if (!got.has(c)) return false;
  return true;
}

/** The result of checking one answer. `null` for formats scored elsewhere
 *  (speak, which the recogniser grades). */
export type AnswerResult = { correct: boolean; expected: string } | null;

/** Check any question format against a learner's answer.
 *
 *  `given` is an option index for closed formats, a string for typed ones, and
 *  an array of tapped letters for tapSilent. One entry point so the quiz
 *  engine and the in-flow checks cannot drift apart on what counts as right. */
export function checkAnswer(q: QuizQuestion, given: number | string | readonly string[]): AnswerResult {
  const format = q.format ?? 'mcq';

  switch (format) {
    case 'speak':
      // Graded by stt.listen() against `target`, not by string comparison.
      return null;

    case 'tapSilent': {
      const correct = typeof q.correct === 'string' ? q.correct : '';
      const tapped = Array.isArray(given) ? given : typeof given === 'string' ? [...given] : [];
      return { correct: tapSilentCorrect(tapped, correct), expected: correct };
    }

    case 'typeIn':
    case 'errorSpot': {
      const input = typeof given === 'string' ? given : '';
      return {
        correct: matchesAccept(input, q.accept),
        expected: q.answer ?? q.accept?.[0] ?? '',
      };
    }

    case 'mcq':
    case 'listenChoose':
    default: {
      const ix = typeof given === 'number' ? given : -1;
      const want = typeof q.correct === 'number' ? q.correct : -1;
      return {
        correct: want >= 0 && ix === want,
        expected: want >= 0 ? (q.opts?.[want] ?? '') : '',
      };
    }
  }
}

/** Whether a format is answered by picking an option rather than producing
 *  something. Drives which control the renderer shows. */
export function isClosedFormat(format: QuizQuestion['format']): boolean {
  return format === undefined || format === 'mcq' || format === 'listenChoose';
}

/** Percent score over a set of answered questions, rounded. Questions the
 *  recogniser grades (speak) count only once they carry a verdict, which the
 *  caller supplies as a boolean; unanswered questions count as wrong, because
 *  a round is scored on what the learner actually did. */
export function scorePercent(results: readonly (boolean | null)[]): number {
  if (!results.length) return 0;
  const right = results.filter((r) => r === true).length;
  return Math.round((right / results.length) * 100);
}
