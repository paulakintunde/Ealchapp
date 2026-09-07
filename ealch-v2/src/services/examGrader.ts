// ExamGraderService — AI-assisted grading for open-response (PO/PE) exam
// tasks. Same shape as CoachService (llm.ts): proxied through a Supabase Edge
// Function that injects the provider secret server-side, never throws.
//
// UNLIKE coach's canned-reply fallback, this must NEVER fabricate a band on
// failure — a made-up level is worse than "grading unavailable, try again"
// (see the retired "examiner v1" lesson, and grade-exam/index.ts's own
// comment). So there is no fallback grade here, only `live: false`; the
// caller (the exam task-runner screen) must render "not graded yet" and let
// the candidate retry, never synthesize a band client-side.
import { ENV } from './env';
import { supabase } from './supabase';
import { getConfig } from './config';
import type { Rubric, ScoreBand } from '@/content/schema';

export type GradeRequest = {
  /** What was asked — ExamTask.stimulus?.prompt ?? ExamTask.prompt. */
  stimulus: string;
  candidateResponse: string;
  rubric: Rubric;
  modelAnswer: string;
  /** ExamTask.level — the band this task targets. */
  targetBand: ScoreBand;
  lang: 'fr' | 'en';
  /**
   * Spoken tasks only: labelled pacing proxies for the fluency criterion.
   *
   * Already carries its own disclaimer — see deliveryNote, which puts what
   * these are NOT before what they are, because a language model handed a bare
   * `{wpm: 92}` will reason about pronunciation it cannot hear.
   *
   * Absent when nothing was measured. Never send an empty string: an empty
   * delivery line still invites the grader to speculate about delivery.
   */
  delivery?: string;
  /**
   * Interaction tasks only: which of the document's withheld facts the
   * candidate got out of the recorded examiner — see coverageNote.
   *
   * Unlike `delivery` this is direct evidence rather than a proxy, and it is
   * not optional context: an interaction transcript is the candidate's
   * QUESTIONS only, so without this the grader cannot tell a candidate who
   * obtained everything from one who obtained nothing.
   */
  coverage?: string;
};

export type GradeResult =
  | { live: true; band: ScoreBand; feedback: string }
  | { live: false };

export const examGrader = {
  /** Grade one open-response attempt. Never throws; `live: false` means no
   *  grade was produced (unreachable, capped, or every provider failed) —
   *  always a real outcome the caller must show, never silently retried into
   *  a fabricated result. */
  async grade(req: GradeRequest): Promise<GradeResult> {
    const sb = supabase();
    if (!sb) return { live: false };
    try {
      const { data, error } = await sb.functions.invoke(ENV.gradeExamFunction, {
        body: { ...req, model: getConfig().models.general },
      });
      if (!error && typeof data?.band === 'string' && typeof data?.feedback === 'string') {
        return { live: true, band: data.band as ScoreBand, feedback: data.feedback };
      }
    } catch {
      // fall through
    }
    return { live: false };
  },
};
