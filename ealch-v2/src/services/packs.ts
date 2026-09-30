// Premium content packs: the I/O shell around packs.logic.ts
// (PREMIUM-PACKS-SPEC.md). Same discipline as content.ts: never block paint,
// never throw, and every decision lives in the pure file.
//
//   manifest-v2.json   public; names each pack's version, checksum and size
//   content-pack-url   edge function; a 10-minute signed URL, entitled only
//   Paths.document/content-pack-<name>.json   the verified cache, one per pack
//   AsyncStorage 'ealch-content-packs'        the registry (the commit marker)
//
// A pack is downloaded to a `.part` staging file, size-checked, verified
// (checksum, name, version, then the merged corpus validates), and only then
// promoted and recorded, exactly the snapshot's order: payload first, marker
// second, so a torn write reads as "not cached" and costs one re-download.
//
// Access is read from the same place every gate reads it (the Adapty-derived
// entitlement, at guardedNow()). The moment it lapses the pack stops being
// merged (lock at once, spec section 5); the bytes stay 30 days, then go.
// Progress is never read or written here.
import { InteractionManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { File, Paths } from 'expo-file-system';
import { create } from 'zustand';
import type { Corpus } from '@/content/schema';
import { validateCorpus } from '@/content/schema';
import { hasFeature } from '@/store/entitlement.logic';
import { useEntitlement } from '@/store/useEntitlement';
import { ENV } from './env';
import { supabase } from './supabase';
import { guardedNow, noteServerDateHeader } from './serverClock';
import { MAX_SNAPSHOT_BYTES, looksLikeCorpus } from './content.logic';
import {
  applyRetention,
  composeCorpus,
  entitledPacks,
  heldBands,
  isPackName,
  isPacksManifest,
  packsComplete,
  packsToFetch,
  packsToMerge,
  parseRegistry,
  partialValidationView,
  trialPacks,
  verifyPack,
  PACK_ORDER,
  type PackAccess,
  type PackEntry,
  type PackName,
  type PackRegistry,
  type PacksManifest,
} from './packs.logic';

const REGISTRY_KEY = 'ealch-content-packs';
const packFile = (n: PackName) => new File(Paths.document, `content-pack-${n}.json`);
const packStaging = (n: PackName) => new File(Paths.document, `content-pack-${n}.part`);
const STORAGE_BASE = ENV.supabaseUrl
  ? `${ENV.supabaseUrl.replace(/\/$/, '')}/storage/v1/object/public/content`
  : '';

/** The download indicator's state (spec section 4). A screen subscribes; the
 *  sync never waits on anyone reading it. */
export type PackSyncState = {
  status: 'idle' | 'downloading';
  current: PackName | null;
  done: number;
  total: number;
};
export const usePackSync = create<PackSyncState>(() => ({ status: 'idle', current: null, done: 0, total: 0 }));

const loaded = new Map<PackName, Corpus>();
let registry: PackRegistry = {};
let lastManifest: PacksManifest | null = null;

/** Bound by content.ts: the base corpus (seed + adopted core or snapshot) the
 *  packs merge over, and the recompose to call when the pack layer changes.
 *  A callback rather than an import so the dependency runs one way. */
let host: { base: () => Corpus; changed: () => void } | null = null;
export function bindPacks(h: { base: () => Corpus; changed: () => void }): void {
  host = h;
}

/** What the current entitlement allows, at the guarded clock. */
export function currentPackAccess(): PackAccess {
  const e = useEntitlement.getState().entitlement;
  const now = guardedNow();
  return { levelsAll: hasFeature(e, 'levels.all', now), examiner: hasFeature(e, 'examiner', now) };
}

/** The layer content.ts merges: entitled AND loaded packs, in PACK_ORDER. */
export function packLayer(): { order: PackName[]; packs: ReadonlyMap<PackName, Corpus> } {
  return { order: packsToMerge(loaded.keys(), entitledPacks(currentPackAccess())), packs: loaded };
}

/** Every pack held on disk, locked or not, with its size: the downloads
 *  screen's number. */
export function cachedPacks(): { name: PackName; bytes: number; locked: boolean }[] {
  return PACK_ORDER.filter((n) => registry[n]).map((n) => ({
    name: n,
    bytes: registry[n]!.bytes,
    locked: registry[n]!.lockedSince !== undefined,
  }));
}

/** Whether an entitled pack is still missing or outdated against `m`. Before
 *  the entitlement is known this answers true: the conservative reading for
 *  shouldAdoptCore, which must not strip a subscriber's full snapshot early. */
export function packsPending(m: PacksManifest): boolean {
  if (!useEntitlement.getState().hydrated) return true;
  return !packsComplete(m, registry, entitledPacks(currentPackAccess()));
}

/** The last manifest-v2 this session saw, if any. */
export function lastPacksManifest(): PacksManifest | null {
  return lastManifest;
}

async function saveRegistry(): Promise<void> {
  await AsyncStorage.setItem(REGISTRY_KEY, JSON.stringify(registry)).catch(() => {});
}

function unlink(f: File): void {
  try {
    if (f.exists) f.delete();
  } catch {
    // An unlinkable file with no registry entry reads as not cached.
  }
}

/**
 * Read every cached pack into memory. Called once at launch, before paint
 * settles, so a subscriber's paid lessons work offline across restarts. The
 * read trusts the write (checksum-verified when stored) and shape-checks in
 * O(1), the same bargain readCache makes for the snapshot. A registry entry
 * whose file is gone or unreadable is dropped, which costs one re-download.
 */
export async function loadCachedPacks(): Promise<void> {
  if (__DEV__) return; // dev shows exactly the seed, same rule as adoptedForLaunch
  try {
    registry = parseRegistry(JSON.parse((await AsyncStorage.getItem(REGISTRY_KEY)) ?? 'null'));
  } catch {
    registry = {};
  }
  let dropped = false;
  for (const name of PACK_ORDER) {
    const held = registry[name];
    if (!held) continue;
    try {
      const f = packFile(name);
      const parsed = f.exists ? JSON.parse(await f.text()) : null;
      if (looksLikeCorpus(parsed) && parsed.version === held.version && (parsed as { pack?: unknown }).pack === name) {
        loaded.set(name, parsed);
        continue;
      }
    } catch {
      // Fall through to dropping it.
    }
    delete registry[name];
    dropped = true;
  }
  if (dropped) await saveRegistry();
}

/** manifest-v2.json, or null when it is not published yet (the app then runs
 *  the legacy single-snapshot path, unchanged). Never throws. */
export async function fetchPacksManifest(): Promise<PacksManifest | null> {
  if (!STORAGE_BASE) return null;
  try {
    const res = await fetch(`${STORAGE_BASE}/manifest-v2.json`, { cache: 'no-store' as RequestCache });
    noteServerDateHeader(res.headers.get('date'));
    if (!res.ok) return null;
    const m = await res.json();
    if (!isPacksManifest(m)) return null;
    lastManifest = m;
    return m;
  } catch {
    return null;
  }
}

/** Ask the edge function for a signed URL. 'refused' is a decision (stop
 *  asking this session); 'unreachable' is an outage (try again next time). */
async function signedUrl(name: PackName): Promise<{ url: string } | 'refused' | 'unreachable'> {
  const sb = supabase();
  if (!sb) return 'unreachable';
  try {
    const { data, error } = await sb.functions.invoke(ENV.contentPackUrlFunction, { body: { pack: name } });
    if (!error && data?.ok === true && typeof data.url === 'string') return { url: data.url };
    if (error) {
      try {
        const body = await (error as { context?: Response }).context?.json();
        if (body && typeof body.reason === 'string' && body.reason !== 'unavailable') return 'refused';
      } catch {
        // Unreadable body: an outage, not a decision.
      }
    }
  } catch {
    // Network failure.
  }
  return 'unreachable';
}

/** Download, verify and cache one pack. Returns whether it is now loaded. */
async function fetchOne(entry: PackEntry, stillQueued: readonly PackName[] = []): Promise<boolean | 'refused'> {
  const got = await signedUrl(entry.name);
  if (got === 'refused') return 'refused';
  if (got === 'unreachable') return false;

  const staged = packStaging(entry.name);
  unlink(staged);
  try {
    await File.downloadFileAsync(got.url, staged, { idempotent: true });
    const size = staged.exists ? staged.size : null;
    if (typeof size !== 'number' || size <= 0 || size > MAX_SNAPSHOT_BYTES) {
      unlink(staged);
      return false;
    }
    const text = await staged.text();
    const v = verifyPack(text, entry);
    if (!v.ok) {
      unlink(staged);
      return false;
    }

    // The merged corpus must validate with this pack in it. A pack is not a
    // corpus on its own, so this is where its references are checked.
    if (host) {
      // Whole-corpus work: wait for the UI to be idle, like the snapshot does.
      await new Promise<void>((r) => InteractionManager.runAfterInteractions(() => r()));
      // The other packs this sync is about to replace are left out: a stale
      // one must not fail the candidate (see trialPacks).
      const trial = trialPacks(loaded, { name: entry.name, corpus: v.corpus }, stillQueued);
      const order = PACK_ORDER.filter((p) => trial.has(p));
      const merged = composeCorpus(host.base(), trial, order);
      const issues = validateCorpus(partialValidationView(merged, { bands: heldBands(order), exam: order.includes('exam') }));
      if (issues.length > 0) {
        unlink(staged);
        return false;
      }
    }

    // Payload first, marker second.
    const live = packFile(entry.name);
    unlink(live);
    await staged.move(live);
    registry[entry.name] = { version: entry.version, checksum: entry.checksum, bytes: size, cachedAt: guardedNow() };
    await saveRegistry();
    loaded.set(entry.name, v.corpus);
    return true;
  } catch {
    unlink(staged);
    return false;
  }
}

let running: Promise<void> | null = null;
let again = false;

/**
 * One pass: retention, then every missing or outdated entitled pack in fetch
 * order (A2 first), each merged the moment it lands so the next lesson is
 * ready soonest. Single-flight: a call during a pass schedules one more pass
 * rather than a second concurrent download. Never throws.
 */
export function syncPacks(manifest?: PacksManifest | null): Promise<void> {
  if (manifest) lastManifest = manifest;
  if (running) {
    again = true;
    return running;
  }
  running = (async () => {
    try {
      do {
        again = false;
        await syncOnce();
      } while (again);
    } finally {
      running = null;
    }
  })();
  return running;
}

async function syncOnce(): Promise<void> {
  if (__DEV__) return;
  // Before the cached entitlement is read, "free" is only the default, and
  // stamping or deleting on it would be acting on a guess.
  if (!useEntitlement.getState().hydrated) return;

  const entitled = entitledPacks(currentPackAccess());
  const r = applyRetention(registry, entitled, guardedNow());
  if (r.changed) {
    registry = r.registry;
    for (const name of r.expired) {
      unlink(packFile(name));
      loaded.delete(name);
    }
    await saveRegistry();
  }
  host?.changed(); // lock (or unlock) at once, before any network

  const manifest = lastManifest ?? (await fetchPacksManifest());
  if (!manifest || entitled.length === 0) return;

  const todo = packsToFetch(manifest, registry, entitled);
  if (todo.length === 0) return;
  usePackSync.setState({ status: 'downloading', current: null, done: 0, total: todo.length });
  // Every pack of this pass not yet landed, including one that failed: all of
  // them are stale in memory and must not judge the next candidate.
  const unlanded = new Set(todo.map((e) => e.name));
  try {
    for (const [i, entry] of todo.entries()) {
      usePackSync.setState({ current: entry.name, done: i });
      const ok = await fetchOne(entry, [...unlanded]);
      if (ok === 'refused') break; // the server says not entitled; stop asking
      if (ok) {
        unlanded.delete(entry.name);
        host?.changed();
      }
    }
  } finally {
    usePackSync.setState({ status: 'idle', current: null, done: 0, total: 0 });
  }
}

let started = false;

/** Follow the entitlement: a purchase or restore fetches, a lapse locks at
 *  once. Idempotent. The subscription is on the store itself, so every path
 *  that changes entitlement (purchase, restore, foreground reconcile,
 *  sign-in/out, the cache load at boot) is covered by one listener. */
export function startPackSync(): void {
  if (started) return;
  started = true;
  useEntitlement.subscribe((s, prev) => {
    if (s.entitlement !== prev.entitlement || s.hydrated !== prev.hydrated) void syncPacks();
  });
}

/** Whether a pack is loaded in memory this session. */
export function isLoaded(name: string): boolean {
  return isPackName(name) && loaded.has(name);
}
