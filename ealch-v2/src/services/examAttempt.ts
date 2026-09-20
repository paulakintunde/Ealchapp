// Asking the server for permission to sit an épreuve (Phase 4, PAY-03, D-05).
//
// The client already has an opinion about entitlement (useEntitlement, fed by
// the Adapty profile) and that opinion gates the UI. This call is the one that
// COUNTS: the edge function re-derives the whole decision from the entitlements
// mirror, system_config's rollout flags, and content_exam_papers' own paper
// number and section clock — then records an authorized attempt that grade-exam
// will trust at submit time.
//
// Three distinct answers, because the caller must treat them differently:
//   'authorized'  -> open the runner.
//   'refused'     -> do NOT open the runner; the reason says where to send them
//                    (the paywall for needs-exam-tier, sign-in for
//                    auth_required). Refusing here is the whole point of D-07:
//                    a candidate must not sit a whole épreuve only to have
//                    grading turn it down.
//   'unreachable' -> the authorization service could not answer. The caller
//                    proceeds, deliberately. An offline candidate with cached
//                    clips can sit a paper today, and a service outage must not
//                    take that away. See the accepted limitation in
//                    .planning/phases/04-.../04-07-PLAN.md — this must be
//                    revisited before examGateOn is ever flipped to true.
//
// Never throws, on the same principle as examGrader.grade(): every outcome is a
// real answer the caller has to handle, not an exception to swallow.
import { ENV } from './env';
import { supabase } from './supabase';

export type StartAttemptResult =
  | { status: 'authorized'; expiresAt: string; gateOn: boolean; entitled: boolean }
  | { status: 'refused'; reason: string }
  | { status: 'unreachable' };

export async function startExamAttempt(req: {
  paperId: string;
  skill: string;
  mode: string;
}): Promise<StartAttemptResult> {
  const sb = supabase();
  if (!sb) return { status: 'unreachable' };
  try {
    const { data, error } = await sb.functions.invoke(ENV.startExamAttemptFunction, {
      body: { paperId: req.paperId, skill: req.skill, mode: req.mode },
    });
    if (!error && data?.ok === true && typeof data.expiresAt === 'string') {
      return {
        status: 'authorized',
        expiresAt: data.expiresAt,
        gateOn: !!data.gateOn,
        entitled: !!data.entitled,
      };
    }
    if (error) {
      // A 4xx is a DECISION; a network failure is an absence of one. Collapsing
      // the two would either strand offline candidates or let a refused one sit
      // anyway.
      try {
        const body = await (error as { context?: Response }).context?.json();
        if (body && typeof body.reason === 'string') {
          return { status: 'refused', reason: body.reason };
        }
      } catch {
        // Body could not be read — treat as an outage, not a decision.
      }
      return { status: 'unreachable' };
    }
  } catch {
    return { status: 'unreachable' };
  }
  return { status: 'unreachable' };
}
