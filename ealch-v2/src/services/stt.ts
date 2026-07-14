// STT port — real speech recognition for Speak Mode, Voice Flash, Sentence
// Builder, Role Play and the onboarding mic check.
//
// Primary path (`sttProvider: 'device'`, the default): the native recognizer
// via expo-speech-recognition — SFSpeechRecognizer on iOS, SpeechRecognizer on
// Android, Web Speech API on web. Free, works offline, and streams interim
// transcripts, which is the only way a drill loop feels live.
//
// Backstop path (`sttProvider: 'edge'`): the same utterance is persisted to a
// WAV file by the recognizer, then POSTed to the `stt` Edge Function for a
// server-side transcript (Whisper). Used when the device recognizer is
// unavailable or returned nothing, and always when remote config selects it.
//
// This module NEVER invents a transcript. If no recognizer is reachable it
// reports `available: false` and an empty transcript, and the calling screen
// falls back to self-assessment. Faking a transcript would fake the score.
// NOTE: this module is imported lazily, never at the top level. Expo native
// modules resolve their native binding *during import*, so a static import of
// expo-speech-recognition throws while the bundle is being evaluated on any
// runtime that wasn't built with it (Expo Go, or a dev client compiled before
// the package was added) — taking the whole app down instead of just the mic.
import type {
  ExpoSpeechRecognitionResultEvent,
  ExpoSpeechRecognitionErrorEvent,
} from 'expo-speech-recognition';
import { scoreUtterance, type Verdict } from '@/utils/score';
import { getConfig } from './config';
import { ENV } from './env';
import { supabase } from './supabase';
import { tts } from './tts';

export type SttResult = {
  /** A real transcript was produced (by the device or the edge). */
  ok: boolean;
  /** A recognizer was reachable at all. False → the UI must self-assess. */
  available: boolean;
  transcript: string;
  /** Recognizer confidence 0..1, or -1 when it doesn't report one. */
  confidence: number;
  /** Match against the expected phrase, 0..1. */
  score: number;
  verdict: Verdict;
  /** Which path produced the transcript. */
  source: 'device' | 'edge' | 'none';
  /** Persisted utterance (WAV). Feeds the edge backstop and future scoring. */
  audioUri?: string | null;
  error?: string;
};

export type ListenOptions = {
  /** Hard stop, even if the recognizer never detects end-of-speech. */
  maxMs?: number;
  /** Live interim transcript, for on-screen feedback while speaking. */
  onPartial?: (transcript: string) => void;
  /** Input level, -2..10 (below 0 is inaudible). Drives the waveform. */
  onVolume?: (value: number) => void;
  lang?: string;
};

const NONE: SttResult = {
  ok: false,
  available: false,
  transcript: '',
  confidence: -1,
  score: 0,
  verdict: 'none',
  source: 'none',
};

let active = false;

type NativeSTT = typeof import('expo-speech-recognition').ExpoSpeechRecognitionModule;

// undefined = not probed yet, null = confirmed absent.
let native: NativeSTT | null | undefined;

/**
 * Resolve the native recognizer, or null if this runtime doesn't have it.
 * The require() MUST stay inside the try: it is what throws when the native
 * binding is missing, and catching it here is what keeps the app alive.
 */
function nativeSTT(): NativeSTT | null {
  if (native !== undefined) return native;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    native = require('expo-speech-recognition').ExpoSpeechRecognitionModule as NativeSTT;
  } catch {
    native = null;
  }
  return native;
}

function recognizerAvailable(): boolean {
  const m = nativeSTT();
  if (!m) return false;
  try {
    return m.isRecognitionAvailable();
  } catch {
    return false;
  }
}

export const stt = {
  isAvailable: recognizerAvailable,

  isListening: () => active,

  /** Ask for mic + speech-recognition permission. Safe to call repeatedly. */
  async ensurePermission(): Promise<boolean> {
    const m = nativeSTT();
    if (!m) return false;
    try {
      const current = await m.getPermissionsAsync();
      if (current.granted) return true;
      if (!current.canAskAgain) return false;
      const asked = await m.requestPermissionsAsync();
      return asked.granted;
    } catch {
      return false;
    }
  },

  /**
   * Capture one utterance and score it against `expected`. Resolves when the
   * recognizer finalises, or at `maxMs`, whichever comes first. Never rejects.
   */
  async listen(expected: string, opts: ListenOptions = {}): Promise<SttResult> {
    const maxMs = opts.maxMs ?? 6000;
    const lang = opts.lang ?? 'fr-FR';
    const provider = getConfig().sttProvider;

    if (active) return { ...NONE, error: 'busy' };

    if (!recognizerAvailable()) {
      // No device recognizer (Expo Go, stale dev client, unsupported locale).
      // Nothing was recorded, so there is nothing for the edge to transcribe.
      return { ...NONE, error: 'unavailable' };
    }

    if (!(await stt.ensurePermission())) {
      return { ...NONE, error: 'not-allowed' };
    }

    // Camille may still be speaking. Recording while the speech synthesiser
    // holds the audio session leaves the recognizer deaf (jamsch#130).
    tts.stop();

    const result = await captureOnce(expected, lang, maxMs, opts);

    // Edge backstop: remote config asked for it, or the device heard nothing
    // but did capture audio we can still send somewhere.
    const wantEdge = provider === 'edge' || (!result.ok && !!result.audioUri);
    if (wantEdge && result.audioUri) {
      const edge = await transcribeViaEdge(result.audioUri, expected);
      if (edge?.ok) return { ...edge, audioUri: result.audioUri };
    }

    return result;
  },

  /** Finalise the current capture early (flushes a final result). */
  stop() {
    try {
      nativeSTT()?.stop();
    } catch {
      // not running
    }
  },

  /** Discard the current capture. */
  abort() {
    try {
      nativeSTT()?.abort();
    } catch {
      // not running
    }
  },
};

/** One start→final-result→end cycle, wrapped in a promise that always settles. */
function captureOnce(
  expected: string,
  lang: string,
  maxMs: number,
  opts: ListenOptions
): Promise<SttResult> {
  return new Promise<SttResult>((resolve) => {
    let settled = false;
    let best = '';
    let confidence = -1;
    let audioUri: string | null = null;
    let errorCode: string | undefined;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const subs: { remove: () => void }[] = [];
    const cleanup = () => {
      if (timeout) clearTimeout(timeout);
      subs.forEach((s) => {
        try {
          s.remove();
        } catch {
          // already gone
        }
      });
      active = false;
    };

    const settle = () => {
      if (settled) return;
      settled = true;
      cleanup();

      if (!best.trim()) {
        resolve({ ...NONE, available: true, audioUri, error: errorCode ?? 'no-speech' });
        return;
      }
      const { score, verdict } = scoreUtterance(expected, best);
      resolve({
        ok: true,
        available: true,
        transcript: best,
        confidence,
        score,
        verdict,
        source: 'device',
        audioUri,
      });
    };

    const m = nativeSTT();
    if (!m) {
      resolve({ ...NONE, error: 'unavailable' });
      return;
    }

    const on = <K extends 'result' | 'error' | 'end' | 'audioend' | 'volumechange'>(
      event: K,
      handler: (e: never) => void
    ) => {
      try {
        subs.push(m.addListener(event, handler as never));
      } catch {
        // listener API unavailable — the timeout still settles us
      }
    };

    on('result', (e: ExpoSpeechRecognitionResultEvent) => {
      const top = e.results?.[0];
      if (!top) return;
      // Keep the last non-empty transcript: on iOS the final arrives only
      // after stop(), so interim text is all we have until then.
      if (top.transcript?.trim()) {
        best = top.transcript;
        confidence = typeof top.confidence === 'number' ? top.confidence : -1;
        if (!e.isFinal) opts.onPartial?.(best);
      }
      if (e.isFinal) settle();
    });

    on('error', (e: ExpoSpeechRecognitionErrorEvent) => {
      errorCode = e.error;
      // "no-speech" still ends the session; let 'end' settle so a late final
      // result isn't dropped. A hard failure settles immediately.
      if (e.error !== 'no-speech') settle();
    });

    on('audioend', (e: { uri: string | null }) => {
      audioUri = e.uri ?? null;
    });

    on('end', () => settle());

    if (opts.onVolume) {
      on('volumechange', (e: { value: number }) => opts.onVolume?.(e.value));
    }

    try {
      active = true;
      m.start({
        lang,
        interimResults: true,
        continuous: false, // auto-finalise on end-of-speech
        maxAlternatives: 1,
        // Bias the recognizer toward the phrase we asked for. This is the
        // single biggest accuracy win when the target is known.
        contextualStrings: contextFor(expected),
        iosTaskHint: 'confirmation',
        iosCategory: {
          category: 'playAndRecord',
          categoryOptions: ['defaultToSpeaker', 'allowBluetooth'],
          mode: 'measurement',
        },
        volumeChangeEventOptions: opts.onVolume
          ? { enabled: true, intervalMillis: 100 }
          : undefined,
        // Keep the audio: it feeds the edge backstop and, later, phoneme-level
        // pronunciation scoring — without a second recording pass.
        recordingOptions: { persist: true },
      });
    } catch (err) {
      errorCode = err instanceof Error ? err.message : 'start-failed';
      settled = true;
      cleanup();
      resolve({ ...NONE, error: errorCode });
      return;
    }

    timeout = setTimeout(() => {
      // stop() flushes a final result; 'end' then settles us. If the module is
      // wedged, settle anyway a beat later so the UI is never stuck listening.
      stt.stop();
      setTimeout(settle, 900);
    }, maxMs);
  });
}

/** Distinct words of the target phrase, as recognizer biasing hints. */
function contextFor(expected: string): string[] {
  return [...new Set(expected.split(/\s+/).filter((w) => w.length > 2))].slice(0, 20);
}

/**
 * Backstop transcription. POSTs the persisted WAV to the `stt` Edge Function.
 *
 * NOTE: that function is not deployed yet — until it is, this fails and the
 * device result stands. It is wired so deploying the function is the only
 * remaining step. Expected response: `{ transcript: string, confidence?: number }`.
 */
async function transcribeViaEdge(
  audioUri: string,
  expected: string
): Promise<SttResult | null> {
  const sb = supabase();
  if (!sb) return null;

  try {
    const file = await fetch(audioUri);
    const blob = await file.blob();

    const { data, error } = await sb.functions.invoke(ENV.sttFunction, {
      body: blob,
      headers: { 'Content-Type': 'audio/wav' },
    });
    if (error || !data?.transcript) return null;

    const transcript = String(data.transcript);
    const { score, verdict } = scoreUtterance(expected, transcript);
    return {
      ok: true,
      available: true,
      transcript,
      confidence: typeof data.confidence === 'number' ? data.confidence : -1,
      score,
      verdict,
      source: 'edge',
    };
  } catch {
    // Function absent or unreachable — the device result is what we have.
    return null;
  }
}
