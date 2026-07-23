// TTS port. Default provider is the on-device voice (works offline, zero
// config, zero marginal cost) — the AUDIO POLICY (approved 2026-07-21) is that
// live synthesis never ships as the default, because it is the one audio path
// whose cost scales with installs. Course narration and la dictée get studio
// voices as PRE-RENDERED clips instead (item.audioRef → audio.ts, rendered
// once by ealch-admin — see AUDIO-RENDER-SPEC.md there).
//
// When the control plane flips ttsProvider to 'elevenlabs', speak() goes
// remote-first: multilingual v2/v3 synthesised through the `tts` Edge Function
// and STORED on-device (paid once per utterance per device, replays offline).
// That path is an authoring/preview tool and an emergency voice. Every failure
// inside it falls back here, to device speech — never to silence.
//
// VOICES (Phase 10 follow-through): the client sends a ROLE, the Edge Function
// owns the provider voice ids —
//   narrator → Liam (male, energetic, social-media creator): course narration
//              and the default for every speak surface.
//   amelie   → Amélie (young, confident, friendly — fr-CA): la dictée.
//   leo      → Léo (gentle, enthusiastic — fr-CA): la dictée.
import { Platform } from 'react-native';
import * as Speech from 'expo-speech';
import { getConfig } from './config';
import { ENV } from './env';
import { supabase } from './supabase';

/** The voice cast a caller can name. Roles, not provider ids — recasting is a
 *  server-side (Edge Function secret) change, never an app release. */
export type TtsVoice = 'narrator' | 'amelie' | 'leo';

let speaking = false;

// ---------------------------------------------------------------------------
// Remote path: ElevenLabs via the `tts` Edge Function, cached on disk.
//
// expo-file-system / expo-crypto / expo-audio are NATIVE modules; on a dev
// client built before they were added the lazy requires throw and every call
// honestly falls back to device speech (same pattern as audio.ts).
type FsModule = typeof import('expo-file-system');
type CryptoModule = typeof import('expo-crypto');
type AudioModule = typeof import('expo-audio');

let fsMod: FsModule | null | undefined;
let cryptoMod: CryptoModule | null | undefined;
let audioMod: AudioModule | null | undefined;

function fs(): FsModule | null {
  if (fsMod === undefined) {
    try {
      fsMod = require('expo-file-system') as FsModule;
    } catch {
      fsMod = null;
    }
  }
  return fsMod;
}
function cryptoModule(): CryptoModule | null {
  if (cryptoMod === undefined) {
    try {
      cryptoMod = require('expo-crypto') as CryptoModule;
    } catch {
      cryptoMod = null;
    }
  }
  return cryptoMod;
}
function audioModule(): AudioModule | null {
  if (audioMod === undefined) {
    try {
      audioMod = require('expo-audio') as AudioModule;
    } catch {
      audioMod = null;
    }
  }
  return audioMod;
}

// Synthesised utterances live in the DOCUMENT directory, not the cache: they
// are the app's narration audio ("stored in the app"), not a re-downloadable
// asset, and the OS must not silently evict them.
const TTS_DIR = 'tts-audio';
// The Edge Function's own cap; longer text isn't truncated (that would speak a
// different sentence than the screen shows) — it falls back to device TTS.
const MAX_REMOTE_CHARS = 2400;
// After a failed synthesis, don't stack per-utterance network waits on a dead
// backend — go straight to device speech for a while, then re-probe.
const REMOTE_COOLDOWN_MS = 60_000;
let remoteDownUntil = 0;

// Monotonic utterance id: a speak() or stop() invalidates any synthesis still
// in flight, so late audio never barges into the next screen.
let generation = 0;

/** Resolve an utterance to a local audio file, synthesising and storing it on
 *  first use. Returns null for every failure mode — the caller's signal to use
 *  device speech. */
async function resolveRemote(text: string, voice: TtsVoice, lang: string): Promise<string | null> {
  const f = fs();
  const c = cryptoModule();
  const sb = supabase();
  if (!f || !c || !sb) return null;
  try {
    const key = await c.digestStringAsync(
      c.CryptoDigestAlgorithm.SHA256,
      `elevenlabs|${voice}|${lang}|${text}`
    );
    const dir = new f.Directory(f.Paths.document, TTS_DIR);
    if (!dir.exists) dir.create({ intermediates: true, idempotent: true });
    // mp3 from ElevenLabs; a fallback provider on the Edge side may answer wav.
    for (const ext of ['mp3', 'wav'] as const) {
      const hit = new f.File(dir, `${key}.${ext}`);
      if (hit.exists && (hit.size ?? 0) > 0) return hit.uri;
    }

    const { data, error } = await sb.functions.invoke(ENV.ttsFunction, {
      body: { text, voice, lang: lang.startsWith('en') ? 'en' : 'fr' },
    });
    if (error || !data?.audio) return null;

    const bin = atob(String(data.audio));
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const format = data.format === 'wav' ? 'wav' : 'mp3';
    const file = new f.File(dir, `${key}.${format}`);
    file.write(bytes);
    return file.uri;
  } catch {
    return null;
  }
}

// One shared player for synthesised utterances, source-swapped per utterance
// (audio.ts's clipPlayer pattern), plus a per-utterance status subscription so
// onDone fires when playback actually finishes — narration step-advance and
// dictation's play budget both depend on that timing being real.
let remotePlayer: import('expo-audio').AudioPlayer | null = null;
let remoteSub: { remove: () => void } | null = null;

function playRemote(uri: string, rate: number, onFinish: () => void): boolean {
  const a = audioModule();
  if (!a) return false;
  try {
    remoteSub?.remove();
    remoteSub = null;
    if (!remotePlayer) remotePlayer = a.createAudioPlayer({ uri });
    else remotePlayer.replace({ uri });
    try {
      remotePlayer.setPlaybackRate(rate, 'high');
    } catch {
      // Rate control missing on this runtime — normal speed is still speech.
    }
    const myGen = generation;
    remoteSub = remotePlayer.addListener('playbackStatusUpdate', (status) => {
      if (status.didJustFinish && myGen === generation) onFinish();
    });
    remotePlayer.seekTo(0);
    remotePlayer.play();
    return true;
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Device path: expo-speech, exactly as before.

// The set of voice identifiers this device actually has, loaded once and cached.
// A configured Camille voice id is a PREFERENCE, not a requirement: device voices
// vary by manufacturer, OS version and downloaded language packs, so an id chosen
// on one phone may be absent on another. Passing an unknown `voice:` to
// Speech.speak is silently ignored by the engine on some devices and errors on
// others, so we only ever pass an id we have confirmed is installed here, and
// otherwise fall back to language-only (which is exactly today's behavior).
let voiceIds: Set<string> | null = null;
let voicesReady: Promise<void> | null = null;

/** Load the device voice list once, memoized as a PROMISE so a caller can await
 *  readiness (the home greeting does, so Camille speaks from the first word
 *  rather than the fr-FR default while the list is still loading). Resolves even
 *  on failure — voiceIds stays null and the resolver falls back to
 *  language-only. A failure clears the memo so a later call can retry. */
function loadVoices(): Promise<void> {
  if (voicesReady) return voicesReady;
  voicesReady = Speech.getAvailableVoicesAsync()
    .then((vs) => {
      voiceIds = new Set(vs.map((v) => v.identifier));
    })
    .catch(() => {
      // Engine not ready or unsupported — allow a later retry.
      voicesReady = null;
    });
  return voicesReady;
}

/** The configured device voice for this platform and language, but only if the
 *  engine has confirmed the device actually has it. Undefined means "speak
 *  language-only". Camille has ONE identity but TWO locale-bound voice ids — a
 *  device voice never crosses locales, so `ttsVoice` (French) and `ttsVoiceEn`
 *  (English) are resolved from separate config, never from one id passed to
 *  both languages. */
function resolveVoice(lang: 'fr-FR' | 'en-US'): string | undefined {
  loadVoices();
  const cfg = lang === 'fr-FR' ? getConfig().ttsVoice : getConfig().ttsVoiceEn;
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
   * Speak text. `lang` picks the voice language, defaulting to French so every
   * existing call site (which never passed one) keeps speaking fr-FR exactly as
   * before; narration's EN scaffolding segments (Phase 7) pass 'en-US'. `slow`
   * uses a lower rate for comprehension practice. `voice` names a cast role —
   * defaulting to the narrator; only la dictée names Amélie/Léo.
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
    opts: {
      lang?: 'fr-FR' | 'en-US';
      slow?: boolean;
      rate?: number;
      voice?: TtsVoice;
      onDone?: () => void;
      onError?: () => void;
    } = {}
  ): Promise<void> {
    const lang = opts.lang ?? 'fr-FR';
    const done = opts.onDone;
    const fail = opts.onError ?? opts.onDone;

    // Guarantee the callbacks fire once, regardless of which path speaks (or
    // how many native attempts it takes on the device path).
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

    generation += 1;
    const myGen = generation;

    // Remote-first: synthesise (or replay the stored file) through ElevenLabs
    // unless the control plane forces device speech. Every failure inside
    // falls through to the device engine below — never to silence.
    const provider = getConfig().ttsProvider;
    if (provider !== 'device' && Date.now() >= remoteDownUntil && text.length <= MAX_REMOTE_CHARS) {
      speaking = true;
      const uri = await resolveRemote(text, opts.voice ?? 'narrator', lang);
      if (myGen !== generation) {
        // stop() or a newer utterance won the race while synthesising; this
        // audio no longer has a screen waiting for it.
        speaking = false;
        return;
      }
      if (uri) {
        // ElevenLabs speaks at natural pace; 1 is normal for the player rate
        // exactly as it is for the speed pickers. Floor mirrors the device
        // path's 0.75 comprehension rate.
        const rate = opts.rate ?? (opts.slow ? 0.75 : 1);
        if (playRemote(uri, rate, finishOk)) return;
      } else {
        // A miss with the backend reachable is most often a backend problem —
        // cool off so drills aren't paying a network timeout per utterance.
        remoteDownUntil = Date.now() + REMOTE_COOLDOWN_MS;
      }
      speaking = false;
    }

    const attempt = (retriesLeft: number) => {
      let started = false;
      try {
        Speech.stop();
      } catch {
        // Stopping an unbound engine is a no-op warning; ignore it.
      }
      speaking = true;
      const voice = resolveVoice(lang);
      try {
        Speech.speak(text, {
          language: lang,
          // The chosen Camille voice for THIS language, when the device has it;
          // omitted otherwise so the engine uses its language default (see
          // resolveVoice).
          ...(voice ? { voice } : {}),
          // Explicit rate wins (the player/dictation speed pickers set it, where
          // 1.0 is the engine's normal speed); `slow` is the legacy shortcut.
          // Floor is 0.75 — below that the engine's phoneme stretching reads as
          // distorted rather than merely slow (HIGH note 36).
          rate: opts.rate ?? (opts.slow ? 0.75 : 0.95),
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
    generation += 1; // cancel any synthesis still in flight
    try {
      remoteSub?.remove();
      remoteSub = null;
      remotePlayer?.pause();
    } catch {
      // ignore
    }
    try {
      Speech.stop();
    } catch {
      // ignore
    }
    speaking = false;
  },

  /** Warm the device voice list so the next `speak` can use the configured voice
   *  immediately instead of the language-only fallback. Fire-and-forget at app
   *  start (a head start), or `await` it right before an utterance that must be
   *  in the right voice from the first word (the home greeting). Resolves even if
   *  the engine is not ready — the caller just gets language-only. */
  prime(): Promise<void> {
    return loadVoices();
  },

  /** Bytes of stored narration audio, for the storage screen. Null when the
   *  store cannot be read (native module absent). */
  async storeInfo(): Promise<{ bytes: number; files: number } | null> {
    const f = fs();
    if (!f) return null;
    try {
      const dir = new f.Directory(f.Paths.document, TTS_DIR);
      if (!dir.exists) return { bytes: 0, files: 0 };
      let bytes = 0;
      let files = 0;
      for (const entry of dir.list()) {
        if (entry instanceof f.File) {
          bytes += entry.size ?? 0;
          files += 1;
        }
      }
      return { bytes, files };
    } catch {
      return null;
    }
  },

  /** Drop every stored utterance. The next speak simply re-synthesises. */
  async clearStore(): Promise<void> {
    const f = fs();
    if (!f) return;
    try {
      const dir = new f.Directory(f.Paths.document, TTS_DIR);
      if (dir.exists) dir.delete();
    } catch {
      // Unremovable store is a nuisance, not an error surface.
    }
  },
};
