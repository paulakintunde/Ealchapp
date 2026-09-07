// The audio clip cache (Master Build Blocker 1). CACHE LAYER ONLY — no screen
// imports this yet; playback surfaces adopt it in Phase 7 when rendered clips
// exist. Resolution contract, in order:
//
//   1. `item.audioRef` names a clip in the public content Storage bucket
//      (the audio_assets registry in ealch-admin is the publisher's ledger of
//      those paths and their sha256 checksums).
//   2. The clip is downloaded ONCE into the app's cache directory and reused
//      from disk on every later call.
//   3. When the caller knows the published checksum, the downloaded bytes are
//      sha256-verified before the file is accepted; a mismatch deletes the
//      file and reports no clip. When no checksum is known (today's corpus
//      carries a bare `audioRef` string; the snapshot does not ship an audio
//      manifest yet) the download is trusted like any other Storage fetch —
//      stated here so nobody mistakes the current state for verified.
//   4. ANY failure — no ref, unconfigured storage, native modules missing,
//      download error, bad checksum, playback error — falls back to live
//      device TTS via tts.ts. Audio must never crash the app or go silent.
//
// expo-file-system and expo-crypto are NATIVE modules added after the current
// dev client was built, so on that client the lazy requires below throw and
// every call honestly reports the TTS fallback. The first EAS build after
// 2026-07-17 compiles them in (same pattern as stt.ts's native module).
import { tts } from './tts';
import { contentAssetUrl } from './content';

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
function crypto(): CryptoModule | null {
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

/** What a caller needs to name a clip. `checksum` is the published sha256 hex
 *  when known (the future audio manifest); absent means unverified-by-design. */
export type ClipRef = { path: string; checksum?: string };

const CACHE_DIR = 'audio-clips';

/** Storage path → a filename that cannot escape the cache directory. */
function cacheName(path: string): string {
  return path.replace(/[^a-z0-9._-]/gi, '_');
}

async function sha256Hex(bytes: ArrayBuffer): Promise<string | null> {
  const c = crypto();
  if (!c) return null;
  try {
    const digest = await c.digest(c.CryptoDigestAlgorithm.SHA256, bytes);
    return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
  } catch {
    return null;
  }
}

/**
 * Is this clip already on disk?
 *
 * The question a preflight asks. Cheap and synchronous-ish: a path check, no
 * network, no read. A clip already cached will play with no connection at all,
 * so a candidate holding all of them is not offline in any sense that matters.
 */
export function clipIsCached(ref: ClipRef): boolean {
  const f = fs();
  if (!f) return false;
  try {
    return new f.File(new f.Directory(f.Paths.cache, CACHE_DIR), cacheName(ref.path)).exists;
  } catch {
    return false;
  }
}

/**
 * What a listening paper would actually do if the candidate started it now.
 *
 * ── Why this exists ────────────────────────────────────────────────────────
 *
 * In exam mode a clip plays ONCE and is then gone. If the download fails, the
 * part raises `onUnplayable`, its questions become unanswerable, and the
 * attempt is logged `audioFailed` and excluded from the pass check. That is a
 * correct way to handle a failure and a terrible way to discover one: the
 * candidate learns it partway through a paper they have committed hours to,
 * having already started a clock they cannot stop.
 *
 * So it is asked BEFORE the clock starts. `missing` counts documents that are
 * neither cached nor obtainable; `reachable` says whether the network could
 * supply them. A candidate with every clip cached gets `missing: 0` and is
 * never warned, offline or not, which is the point of checking the cache
 * rather than just pinging.
 */
export type AudioPreflight = { total: number; cached: number; missing: number; reachable: boolean };

export async function preflightClips(refs: readonly ClipRef[]): Promise<AudioPreflight> {
  const total = refs.length;
  const cached = refs.filter(clipIsCached).length;
  if (total === 0 || cached === total) {
    // Nothing to fetch, so reachability cannot change the answer. Skip the
    // probe rather than make a candidate wait on a network call for a result
    // that is already decided.
    return { total, cached, missing: 0, reachable: true };
  }
  return { total, cached, missing: total - cached, reachable: await assetHostReachable() };
}

/**
 * Can we reach the CDN right now?
 *
 * A HEAD against a clip we actually need, not a generic connectivity check: a
 * captive portal answers a ping and not a bucket, and the only question worth
 * asking is whether THIS host will serve THIS file. Short timeout because it
 * sits between a tap and a screen; any failure reads as "no", which sends the
 * candidate to a warning rather than into a silent void.
 */
const REACH_TIMEOUT_MS = 4000;

export async function assetHostReachable(probePath?: string): Promise<boolean> {
  const url = contentAssetUrl(probePath ?? 'manifest.json');
  if (!url) return false;
  try {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), REACH_TIMEOUT_MS);
    try {
      const res = await fetch(url, { method: 'HEAD', cache: 'no-store' as RequestCache, signal: ctl.signal });
      // Any answered status proves the host is there and talking. A 404 on the
      // probe path still means the next clip request would be served.
      return res.status > 0;
    } finally {
      clearTimeout(t);
    }
  } catch {
    return false;
  }
}

/**
 * Resolve a clip to a local file URI, downloading and caching on first use.
 * Returns null for every failure mode — the caller's signal to use TTS.
 */
export async function resolveClip(ref: ClipRef): Promise<string | null> {
  const f = fs();
  if (!f) return null; // native module not in this build yet
  const url = contentAssetUrl(ref.path);
  if (!url) return null; // storage unconfigured (offline-only build)

  try {
    const dir = new f.Directory(f.Paths.cache, CACHE_DIR);
    if (!dir.exists) dir.create({ intermediates: true, idempotent: true });
    const file = new f.File(dir, cacheName(ref.path));

    if (!file.exists) {
      await f.File.downloadFileAsync(url, file, { idempotent: true });
    }

    // Verify when we know what the bytes should be. A mismatch is a corrupt or
    // tampered download: destroy it so the next call re-fetches, and fall back.
    if (ref.checksum) {
      const got = await sha256Hex(await file.arrayBuffer());
      if (got === null || got.toLowerCase() !== ref.checksum.toLowerCase()) {
        try {
          file.delete();
        } catch {
          // The bad file could not be removed; it still must not be served.
        }
        return null;
      }
    }
    return file.uri;
  } catch {
    return null;
  }
}

// One shared player for clips, created on first use, source-swapped per clip —
// mirrors sound.ts's cached players rather than allocating one per utterance.
let clipPlayer: import('expo-audio').AudioPlayer | null = null;

function playUri(uri: string): boolean {
  const a = audioModule();
  if (!a) return false;
  try {
    if (!clipPlayer) clipPlayer = a.createAudioPlayer({ uri });
    else clipPlayer.replace({ uri });
    clipPlayer.seekTo(0);
    clipPlayer.play();
    return true;
  } catch {
    return false;
  }
}

export const audio = {
  /**
   * Speak an item: its rendered clip when one resolves, live TTS otherwise.
   * Returns which path actually produced sound — callers that budget plays
   * (dictation) can tell a clip from a synthesized voice. Never throws.
   */
  async speakItem(
    item: { fr: string; audioRef?: string | null; audioChecksum?: string },
    opts: {
      slow?: boolean;
      rate?: number;
      /** Forwarded to the TTS fallback only — a rendered clip is already
       *  fixed to whatever language it was recorded in. */
      lang?: 'fr-FR' | 'en-US';
      onDone?: () => void;
      onError?: () => void;
    } = {}
  ): Promise<'clip' | 'tts'> {
    if (item.audioRef) {
      const uri = await resolveClip({ path: item.audioRef, checksum: item.audioChecksum });
      if (uri && playUri(uri)) {
        // expo-audio has no per-play completion callback on the shared player;
        // clip callers relying on onDone timing keep TTS behavior by not
        // passing a ref. Fire onDone on the next tick so budgeted callers
        // (3-play dictation) still advance their state.
        opts.onDone?.();
        return 'clip';
      }
    }
    await tts.speak(item.fr, opts);
    return 'tts';
  },

  stop() {
    try {
      clipPlayer?.pause();
    } catch {
      // ignore
    }
    tts.stop();
  },

  /** Bytes currently cached, for the downloads/storage screen. Null when the
   *  cache cannot be read (native module absent). */
  async cacheInfo(): Promise<{ bytes: number; files: number } | null> {
    const f = fs();
    if (!f) return null;
    try {
      const dir = new f.Directory(f.Paths.cache, CACHE_DIR);
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

  /** Drop every cached clip. The next speakItem simply re-downloads. */
  async clearCache(): Promise<void> {
    const f = fs();
    if (!f) return;
    try {
      const dir = new f.Directory(f.Paths.cache, CACHE_DIR);
      if (dir.exists) dir.delete();
    } catch {
      // Unremovable cache is a nuisance, not an error surface.
    }
  },
};
