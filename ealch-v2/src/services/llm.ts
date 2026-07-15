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
 *  online. */
export type CoachReply = { reply: string; live: boolean };

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
      } catch {
        // fall through to canned reply
      }
    }
    const reply = cannedReplies[fallbackIx % cannedReplies.length];
    fallbackIx += 1;
    return { reply, live: false };
  },
};
