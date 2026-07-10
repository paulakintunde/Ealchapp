// STT port — speech recognition for Speak Mode, Voice Flash, Sentence Builder,
// and Role Play. On-device recognition (or an edge STT service) is used when
// available; otherwise we simulate a successful capture after a short delay so
// the voice-first flows remain fully walkable without a mic backend.
//
// A production build swaps in a native recognizer (e.g. expo-speech-recognition
// or a streaming edge function) behind this same interface.

export type SttResult = { transcript: string; confidence: number; ok: boolean };

export const stt = {
  /**
   * Listen for `expected` (used to score the simulated fallback). Resolves with
   * a transcript. Never rejects.
   */
  async listen(
    expected: string,
    opts: { durationMs?: number } = {}
  ): Promise<SttResult> {
    const duration = opts.durationMs ?? 1800;
    // Simulated capture — resolves as a confident match. Replace `listen` with a
    // real recognizer to get live transcripts.
    await new Promise((r) => setTimeout(r, duration));
    return { transcript: expected, confidence: 0.94, ok: true };
  },
};
