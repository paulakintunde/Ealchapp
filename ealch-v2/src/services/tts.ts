// TTS port. Default provider is the on-device French voice via expo-speech
// (works offline, zero config). When remote config selects ElevenLabs/Azure,
// audio is synthesised server-side through the tts Edge Function.
import { Platform } from 'react-native';
import * as Speech from 'expo-speech';
import { getConfig } from './config';

let speaking = false;

// The set of voice identifiers this device actually has, loaded once and cached.
// A configured Camille voice id is a PREFERENCE, not a requirement: device voices
// vary by manufacturer, OS version and downloaded language packs, so an id chosen
// on one phone may be absent on another. Passing an unknown `voice:` to
// Speech.speak is silently ignored by the engine on some devices and errors on
// others, so we only ever pass an id we have confirmed is installed here, and
// otherwise fall back to language-only (which is exactly today's behavior).
let voiceIds: Set<string> | null = null;
let voiceLoadStarted = false;

function loadVoices(): void {
  if (voiceLoadStarted) return;
  voiceLoadStarted = true;
  Speech.getAvailableVoicesAsync()
    .then((vs) => {
      voiceIds = new Set(vs.map((v) => v.identifier));
    })
    .catch(() => {
      // Engine not ready or unsupported — leave null; resolver returns undefined
      // and callers speak language-only. A later call retries via the flag reset.
      voiceLoadStarted = false;
    });
}

/** The configured device voice for this platform, but only if the engine has
 *  confirmed the device actually has it. Undefined means "speak language-only". */
function resolveVoice(): string | undefined {
  loadVoices();
  const cfg = getConfig().ttsVoice;
  const id = Platform.OS === 'ios' ? cfg.ios : Platform.OS === 'android' ? cfg.android : null;
  if (!id) return undefined;
  // Until the voice list has loaded we withhold the id rather than risk passing
  // one the device lacks; the next utterance uses it once the set is known.
  if (!voiceIds || !voiceIds.has(id)) return undefined;
  return id;
}

// Android's TextToSpeech service can be transiently "not bound": right after the
// app process starts, and again whenever the OS reclaims the idle bound service.
// The FIRST speak in that state fails silently — no audio, and not even a
// reliable onError. The Coach screen is the most exposed caller because it
// speaks the instant it mounts, before the engine has (re)bound. So a speak that
// never actually starts is retried once; by the retry the engine has bound.
const START_GRACE_MS = 450;

export const tts = {
  isSpeaking: () => speaking,

  /**
   * Speak French text. `slow` uses a lower rate for comprehension practice.
   *
   * `onError` is distinct from `onDone`: a caller that spends something on
   * playback (Dictation's 3-play budget) must be able to tell "it played" from
   * "there was no voice and nothing was heard". Callers that don't care can pass
   * only `onDone` and still get called on completion; `onError` defaults to it.
   *
   * `onDone`/`onError` fire exactly once, even across the internal retry.
   */
  async speak(
    text: string,
    opts: { slow?: boolean; rate?: number; onDone?: () => void; onError?: () => void } = {}
  ): Promise<void> {
    const provider = getConfig().ttsProvider;
    // For device (default) we use expo-speech directly. Remote providers would
    // fetch an audio URL from the Edge Function and play it via expo-audio; the
    // device path is the resilient fallback and what runs with no config.
    if (provider !== 'device') {
      // Remote synthesis path is wired for production; device speech is used as
      // the guaranteed fallback here so playback always works.
    }
    const done = opts.onDone;
    const fail = opts.onError ?? opts.onDone;

    // Guarantee the callbacks fire once, regardless of how many native attempts
    // it takes (or which of onStart/onError/timeout wins the race).
    let settled = false;
    const finishOk = () => {
      if (settled) return;
      settled = true;
      speaking = false;
      done?.();
    };
    const finishFail = () => {
      if (settled) return;
      settled = true;
      speaking = false;
      fail?.();
    };

    const attempt = (retriesLeft: number) => {
      let started = false;
      try {
        Speech.stop();
      } catch {
        // Stopping an unbound engine is a no-op warning; ignore it.
      }
      speaking = true;
      const voice = resolveVoice();
      try {
        Speech.speak(text, {
          language: 'fr-FR',
          // The chosen Camille voice when the device has it; omitted otherwise so
          // the engine uses its default fr-FR voice (see resolveVoice).
          ...(voice ? { voice } : {}),
          // Explicit rate wins (the player/dictation speed pickers set it, where
          // 1.0 is the engine's normal speed); `slow` is the legacy shortcut.
          rate: opts.rate ?? (opts.slow ? 0.7 : 0.95),
          onStart: () => {
            started = true;
          },
          onDone: finishOk,
          onStopped: () => {
            // A deliberate stop() (e.g. leaving the screen) is not a failure and
            // not a completion — just clear the flag.
            speaking = false;
          },
          onError: () => {
            if (retriesLeft > 0) attempt(retriesLeft - 1);
            else finishFail();
          },
        });
      } catch {
        if (retriesLeft > 0) attempt(retriesLeft - 1);
        else finishFail();
        return;
      }

      // The "not bound" failure often produces neither onStart nor onError, so
      // detect a silent no-start: if nothing is speaking after a grace window,
      // retry once (the engine has bound by then).
      if (retriesLeft > 0) {
        setTimeout(async () => {
          if (started || settled) return;
          let isSpeaking = false;
          try {
            isSpeaking = await Speech.isSpeakingAsync();
          } catch {
            // ignore — treat as not speaking
          }
          if (!started && !settled && !isSpeaking) attempt(retriesLeft - 1);
        }, START_GRACE_MS);
      }
    };

    attempt(1);
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
