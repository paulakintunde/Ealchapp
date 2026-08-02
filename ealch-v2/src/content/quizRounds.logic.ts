// The round-based quiz engine's state model.
//
// The shipped quiz is one flat list ending in a score. This is the v2 form:
// four rounds of eight, each tied to one rule and one error trigger, with a
// remediation drill that fires BETWEEN rounds when a learner's score on that
// round falls below the threshold.
//
// The ordering is the whole point and it is easy to get backwards. The drill
// must run after the round that failed and BEFORE the next round starts, while
// the mistake is still live and the material is still what the learner was
// just working on. Firing every drill at the end (which is what a naive
// implementation does, because that is when the score is known) turns
// remediation into a post-mortem.
//
// Pure and tested for the same reason as scene.logic.ts: the alternative is
// verifying a five-stage state machine by answering thirty-two questions on a
// phone.

import { scorePercent } from './answer.logic.ts';
import type { LessonDrill, QuizRound } from './schema.ts';

/** Where the quiz currently is. */
export type QuizPhase =
  /** Answering questions in a round. */
  | { kind: 'round'; roundIx: number; questionIx: number }
  /** A drill fired by the round just failed. */
  | { kind: 'drill'; roundIx: number; drillId: string }
  /** The retest that closes a drill out. */
  | { kind: 'retest'; roundIx: number; drillId: string }
  /** Every round done. */
  | { kind: 'result' };

export type QuizState = {
  phase: QuizPhase;
  /** Answers by round index, then question index. `null` is unanswered. */
  answers: Record<number, (boolean | null)[]>;
  /** Rounds whose drill has already fired, so it never repeats. */
  drilled: number[];
};

export type QuizConfig = {
  rounds: QuizRound[];
  /** Percent below which a round fires its drill. Default 60. */
  roundFailThreshold?: number;
  /** Percent needed to pass the quiz overall. Default 70. */
  passMark?: number;
  /** Trigger id to drill id. Built from the lesson's errorTriggers. */
  drillForTarget?: Record<string, string>;
  /** Drill id to retest id. */
  retestForDrill?: Record<string, string>;
};

export const initialQuizState = (): QuizState => ({
  phase: { kind: 'round', roundIx: 0, questionIx: 0 },
  answers: {},
  drilled: [],
});

const DEFAULT_FAIL = 60;
const DEFAULT_PASS = 70;

/** Record an answer for the question currently on screen. */
export function answerQuestion(s: QuizState, correct: boolean): QuizState {
  if (s.phase.kind !== 'round') return s;
  const { roundIx, questionIx } = s.phase;
  const row = [...(s.answers[roundIx] ?? [])];
  row[questionIx] = correct;
  return { ...s, answers: { ...s.answers, [roundIx]: row } };
}

/** Percent scored on one round. Unanswered questions count as wrong. */
export function roundScore(cfg: QuizConfig, s: QuizState, roundIx: number): number {
  const total = cfg.rounds[roundIx]?.questions.length ?? 0;
  if (!total) return 0;
  const row = s.answers[roundIx] ?? [];
  const padded = Array.from({ length: total }, (_, i) => row[i] ?? null);
  return scorePercent(padded);
}

/** Did this round fall below the threshold that fires its drill? */
export function roundFailed(cfg: QuizConfig, s: QuizState, roundIx: number): boolean {
  return roundScore(cfg, s, roundIx) < (cfg.roundFailThreshold ?? DEFAULT_FAIL);
}

/** The drill a round fires, resolved through its declared targets.
 *
 *  A round names error TRIGGERS, and each trigger names a drill — the join the
 *  architecture doc describes as "the error-trigger system finally wired into
 *  something". Null when the round declares no target, or the target has no
 *  drill, in which case the quiz simply moves on. */
export function drillForRound(cfg: QuizConfig, roundIx: number): string | null {
  const targets = cfg.rounds[roundIx]?.targets ?? [];
  for (const target of targets) {
    const drill = cfg.drillForTarget?.[target];
    if (drill) return drill;
  }
  return null;
}

/** Advance from wherever the quiz is.
 *
 *  The order this encodes:
 *    question -> next question in the round
 *    last question -> drill, IF the round failed and has one
 *    drill -> its retest, if one exists
 *    retest (or no drill) -> the next round
 *    last round -> result
 */
export function advanceQuiz(cfg: QuizConfig, s: QuizState): QuizState {
  const { phase } = s;

  if (phase.kind === 'result') return s;

  if (phase.kind === 'drill') {
    const retest = cfg.retestForDrill?.[phase.drillId];
    if (retest) {
      return { ...s, phase: { kind: 'retest', roundIx: phase.roundIx, drillId: phase.drillId } };
    }
    return { ...s, phase: nextRoundPhase(cfg, phase.roundIx) };
  }

  if (phase.kind === 'retest') {
    return { ...s, phase: nextRoundPhase(cfg, phase.roundIx) };
  }

  // In a round.
  const round = cfg.rounds[phase.roundIx];
  if (!round) return { ...s, phase: { kind: 'result' } };

  const isLast = phase.questionIx >= round.questions.length - 1;
  if (!isLast) {
    return { ...s, phase: { kind: 'round', roundIx: phase.roundIx, questionIx: phase.questionIx + 1 } };
  }

  // The round just ended. Remediate BEFORE moving on, not at the end of the
  // quiz — see the note at the top of this file.
  if (!s.drilled.includes(phase.roundIx) && roundFailed(cfg, s, phase.roundIx)) {
    const drillId = drillForRound(cfg, phase.roundIx);
    if (drillId) {
      return {
        ...s,
        drilled: [...s.drilled, phase.roundIx],
        phase: { kind: 'drill', roundIx: phase.roundIx, drillId },
      };
    }
  }

  return { ...s, phase: nextRoundPhase(cfg, phase.roundIx) };
}

function nextRoundPhase(cfg: QuizConfig, roundIx: number): QuizPhase {
  const next = roundIx + 1;
  if (next >= cfg.rounds.length) return { kind: 'result' };
  return { kind: 'round', roundIx: next, questionIx: 0 };
}

/** Overall percent across every question in every round. */
export function totalScore(cfg: QuizConfig, s: QuizState): number {
  const all: (boolean | null)[] = [];
  cfg.rounds.forEach((r, ri) => {
    const row = s.answers[ri] ?? [];
    for (let i = 0; i < r.questions.length; i++) all.push(row[i] ?? null);
  });
  return scorePercent(all);
}

export function passed(cfg: QuizConfig, s: QuizState): boolean {
  return totalScore(cfg, s) >= (cfg.passMark ?? DEFAULT_PASS);
}

/** Questions answered, out of the total. For the progress bar. */
export function quizProgress(cfg: QuizConfig, s: QuizState): { done: number; total: number } {
  const total = cfg.rounds.reduce((n, r) => n + r.questions.length, 0);
  const done = Object.values(s.answers).reduce((n, row) => n + row.filter((x) => x !== null && x !== undefined).length, 0);
  return { done, total };
}

/** Build the trigger and drill lookups from a lesson's declarations, so the
 *  caller passes a Lesson rather than assembling maps by hand. */
export function buildQuizConfig(
  rounds: QuizRound[],
  opts: {
    errorTriggers?: { id: string; drill: string; retest?: string }[];
    drills?: LessonDrill[];
    roundFailThreshold?: number;
    passMark?: number;
  }
): QuizConfig {
  const drillForTarget: Record<string, string> = {};
  const retestForDrill: Record<string, string> = {};
  const known = new Set((opts.drills ?? []).map((d) => d.id));
  for (const t of opts.errorTriggers ?? []) {
    // Only wire a drill that actually exists: a trigger pointing at a missing
    // drill must leave the quiz flowing rather than stalling on a blank screen.
    if (known.has(t.drill)) drillForTarget[t.id] = t.drill;
    if (t.retest && known.has(t.retest)) retestForDrill[t.drill] = t.retest;
  }
  return {
    rounds,
    drillForTarget,
    retestForDrill,
    roundFailThreshold: opts.roundFailThreshold,
    passMark: opts.passMark,
  };
}
