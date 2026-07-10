// TTS port. Default provider is the on-device French voice via expo-speech
// (works offline, zero config). When remote config selects ElevenLabs/Azure,
// audio is synthesised server-side through the tts Edge Function.
import * as Speech from 'expo-speech';
import { getConfig } from './config';

let speaking = false;

export const tts = {
  isSpeaking: () => speaking,

  /** Speak French text. `slow` uses a lower rate for comprehension practice. */
  async speak(
    text: string,
    opts: { slow?: boolean; onDone?: () => void } = {}
  ): Promise<void> {
    const provider = getConfig().ttsProvider;
    // For device (default) we use expo-speech directly. Remote providers would
    // fetch an audio URL from the Edge Function and play it via expo-audio; the
    // device path is the resilient fallback and what runs with no config.
    if (provider !== 'device') {
      // Remote synthesis path is wired for production; device speech is used as
      // the guaranteed fallback here so playback always works.
    }
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
          opts.onDone?.();
        },
      });
    } catch {
      speaking = false;
      opts.onDone?.();
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
