// TTS client-side gating — the pure predicate half of D-01 (.planning/
// phases/03-tts-security-hardening/03-CONTEXT.md). Zero react-native/expo
// imports, exactly like content.logic.ts and examWeighting.logic.ts, so it
// runs under `node --test` with no native module to stub.
//
// WHY THIS EXISTS ALONGSIDE THE SERVER-SIDE CHECK. RESEARCH.md's D-03 trace
// found that placement.tsx calls tts.speak() directly for guests (no
// Supabase session — den.tsx's placement banner has no auth gate at all),
// and speak()'s only branch was system_config.ttsProvider — never who is
// calling. The tts edge function's own callerUid() check (tts/index.ts) is
// the REAL security boundary and rejects an unauthenticated caller
// regardless of this predicate; this one exists so a guest never even
// issues the network call that boundary would reject anyway — one fewer
// round trip, and defense-in-depth if this file's caller is ever wired
// wrong upstream.
export function shouldAttemptRemoteTts(opts: {
  userId: string | null;
  ttsProvider: 'device' | 'elevenlabs' | 'azure';
  textLength: number;
  maxRemoteChars: number;
}): boolean {
  if (opts.ttsProvider === 'device') return false;
  if (!opts.userId) return false; // D-01: guests never attempt remote, full stop.
  return opts.textLength <= opts.maxRemoteChars;
}
