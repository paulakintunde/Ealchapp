// CoachService — the "Why?" tutor and Speak-Mode analysis LLM.
// All provider calls are proxied through a Supabase Edge Function that injects
// the API key server-side; the client never holds a model secret. If the
// function is unreachable (or unconfigured), we fall back to canned coaching so
// the conversation never hard-fails — the resilience requirement from the spec.
import { ENV } from './env';
import { supabase } from './supabase';
import { getConfig } from './config';
import { cannedReplies } from '@/content';

export type CoachMessage = { role: 'user' | 'assistant'; content: string };

/** `live` is true only when the reply came from the coach backend. When it is
 *  false the reply is a canned coaching tip served because the function was
 *  unreachable — the UI shows that honestly rather than claiming the coach is
 *  online. `capped` means the backend ANSWERED and said the free daily turn
 *  allowance is spent (429 reason 'turn_cap') — that is a live, truthful
 *  refusal, not an outage, so it must NOT degrade into a canned tip that
 *  pretends the coach replied. Phase 10 turns it into the paywall trigger. */
export type CoachReply = { reply: string; live: boolean; capped?: boolean };

/** Whether a functions.invoke error is the coach fn's own turn-cap refusal.
 *  FunctionsHttpError carries the Response as `context`; anything else (no
 *  response, wrong status, unreadable body) reads as "not a cap" and falls
 *  through to the offline path. */
async function isTurnCap(error: unknown): Promise<boolean> {
  try {
    const ctx = (error as { context?: Response }).context;
    if (!ctx || typeof ctx.status !== 'number' || ctx.status !== 429) return false;
    const body = (await ctx.clone().json().catch(() => null)) as { reason?: string } | null;
    return body?.reason === 'turn_cap';
  } catch {
    return false;
  }
}

let fallbackIx = 0;

export const coach = {
  /** Ask the coach. Never throws. Returns the reply and whether it was live. */
  async ask(history: CoachMessage[], lang: 'fr' | 'en'): Promise<CoachReply> {
    const sb = supabase();
    if (sb) {
      try {
        const { data, error } = await sb.functions.invoke(ENV.coachFunction, {
          body: {
            messages: history,
            lang,
            model: getConfig().models.general,
            promptVersion: getConfig().promptVersion,
          },
        });
        if (!error && data?.reply) return { reply: String(data.reply), live: true };
        if (error && (await isTurnCap(error))) return { reply: '', live: true, capped: true };
      } catch {
        // fall through to canned reply
      }
    }
    const reply = cannedReplies[fallbackIx % cannedReplies.length];
    fallbackIx += 1;
    return { reply, live: false };
  },
};
