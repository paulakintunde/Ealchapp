// Answer-position spreading for the bilan rounds.
//
// The density validator caps any one option slot at 40% of a lesson's correct
// answers (LIMITS.quizSpreadPct). Authored by hand, the bilan came out at 70%
// in slot 1 and 1% in slot 0, which is not a near miss: a learner who notices
// will score well above their French, and one who does not is being tested on
// a different thing from the one the question asks.
//
// The fix is applied here rather than by reordering the authored arrays, for
// two reasons. Hand-balancing 92 option lists is a transcription job with no
// way to verify it stayed balanced after the next edit. And the authored order
// carries meaning while it is being WRITTEN: the natural answer sits where the
// author put it, distractors read in the order they were thought of, and a
// reviewer comparing a question against the lesson it came from is not also
// decoding a permutation.
//
// So the authored constant keeps its readable order and the EXPORTED constant
// is spread. Deterministic, because a seed has to be reproducible: no
// randomness, just the position of the question in the list.
//
// Note this is spreading, not shuffling. The distractors keep their relative
// order and only the correct option moves, which is the smallest change that
// fixes the distribution. Runtime shuffling would also fix it, but the rounds
// quiz renders authored order (MissionRich does; only LessonRich permutes), so
// the position in the data IS the position on the screen.

import type { QuizRound } from '../../../ealch-v2/src/content/schema.ts';

/** Move the correct option to `slot`, keeping the other options in order. */
function moveCorrect(opts: string[], from: number, slot: number): string[] {
  const rest = opts.filter((_, i) => i !== from);
  const target = Math.min(slot, rest.length);
  return [...rest.slice(0, target), opts[from], ...rest.slice(target)];
}

/**
 * Spread the correct answers of every closed question across the option slots.
 *
 * Walks the rounds in order and gives the nth closed question the slot
 * `n % opts.length`. With four options throughout that is a flat 25% per slot;
 * where a question offers three, it still cycles evenly within its own width.
 *
 * Only questions with `opts` and a numeric `correct` are touched. typeIn,
 * errorSpot and speak have no slots and pass through untouched.
 */
export function spreadAnswers(rounds: QuizRound[]): QuizRound[] {
  let n = 0;
  return rounds.map((round) => ({
    ...round,
    questions: round.questions.map((q) => {
      if (!Array.isArray(q.opts) || typeof q.correct !== 'number') return q;
      const slot = n++ % q.opts.length;
      if (slot === q.correct) return q;
      return { ...q, opts: moveCorrect(q.opts, q.correct, slot), correct: slot };
    }),
  }));
}
