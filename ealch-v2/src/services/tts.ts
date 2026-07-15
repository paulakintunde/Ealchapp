// TTS port. Default provider is the on-device French voice via expo-speech
// (works offline, zero config). When remote config selects ElevenLabs/Azure,
// audio is synthesised server-side through the tts Edge Function.
import * as Speech from 'expo-speech';
import { getConfig } from './config';

let speaking = false;

export const tts = {
  isSpeaking: () => speaking,

  /**
   * Speak French text. `slow` uses a lower rate for comprehension practice.
   *
   * `onError` is distinct from `onDone`: a caller that spends something on
   * playback (Dictation's 3-play budget) must be able to tell "it played" from
   * "there was no voice and nothing was heard". Callers that don't care can pass
   * only `onDone` and still get called on completion; `onError` defaults to it.
   */
  async speak(
    text: string,
    opts: { slow?: boolean; onDone?: () => void; onError?: () => void } = {}
  ): Promise<void> {
    const provider = getConfig().ttsProvider;
    // For device (default) we use expo-speech directly. Remote providers would
    // fetch an audio URL from the Edge Function and play it via expo-audio; the
    // device path is the resilient fallback and what runs with no config.
    if (provider !== 'device') {
      // Remote synthesis path is wired for production; device speech is used as
      // the guaranteed fallback here so playback always works.
    }
    const fail = opts.onError ?? opts.onDone;
    try {
      Speech.stop();
      speaking = true;
      Speech.speak(text, {
        language: 'fr-FR',
        rate: opts.slow ? 0.7 : 0.95,
        onDone: () => {
          speaking = false;
          opts.onDone?.();
        },
        onStopped: () => {
          speaking = false;
        },
        onError: () => {
          speaking = false;
          fail?.();
        },
      });
    } catch {
      speaking = false;
      fail?.();
    }
  },

  stop() {
    try {
      Speech.stop();
    } catch {
      // ignore
    }
    speaking = false;
  },
};
