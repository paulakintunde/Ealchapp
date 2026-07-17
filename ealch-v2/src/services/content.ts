// ContentService — the store shell around content.logic.ts.
//
// Loads content in three layers, and its cardinal rule is: NEVER block first
// paint, NEVER throw. The seed ships in the binary, so the app has a full,
// valid corpus before any network or storage call. The cache and the network
// only ever raise the version, in the background.
//
//   1. seed.json         bundled in the app   → always present, works offline
//   2. cached snapshot   AsyncStorage         → last OTA download, if any
//   3. remote manifest   Supabase Storage     → fire-and-forget, next launch
//
// This mirrors the resilience contract the rest of the service layer already
// keeps: config.ts degrades to defaults, useProgress treats a corrupt log as
// "no progress yet". A corrupt content cache must likewise mean "seed only",
// never a crash.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { ENV } from './env';
import seedJson from '@/content/seed.json';
import type { Corpus, DrillKind, Item, Lesson, Level, Scenario, Track, Unit } from '@/content/schema';
import { isValidCorpus, validateCorpus } from '@/content/schema';
import {
  getItem,
  getLesson,
  getScenario,
  getUnit,
  isManifest,
  lessonsOfUnit,
  mergeCorpus,
  scenariosFor,
  selectItems,
  shouldAdopt,
  unitsInTrack,
  verifySnapshot,
  type ItemQuery,
} from './content.logic';

const SEED = seedJson as Corpus;
const CACHE_KEY = 'ealch-content-snapshot';
const BUCKET_KEY = 'ealch-rollout-bucket';
const STORAGE_BASE = ENV.supabaseUrl
  ? `${ENV.supabaseUrl.replace(/\/$/, '')}/storage/v1/object/public/content`
  : '';

type ContentState = {
  hydrated: boolean;
  corpus: Corpus;
  setHydrated: () => void;
  setCorpus: (c: Corpus) => void;
};

export const useContent = create<ContentState>((set) => ({
  // Start on the seed. Even if init never runs, the app has real content —
  // hydration only gates the first paint so we don't flash seed-only content and
  // then the merged corpus a frame later.
  hydrated: false,
  corpus: SEED,
  setHydrated: () => set({ hydrated: true }),
  setCorpus: (corpus) => set({ corpus }),
}));

let initStarted = false;

// The version of the SNAPSHOT we have actually cached — distinct from the merged
// corpus version. The seed is a SUBSET cut from a snapshot but carries that
// snapshot's version number, so a fresh install has corpus.version === the seed
// version yet holds none of the over-the-air content. Comparing the manifest
// against this (0 until a snapshot is cached) is what makes a seed-only install
// fetch the full corpus, instead of thinking it is already up to date.
let cachedSnapshotVersion = 0;

/**
 * Bring content up. Idempotent — safe to call from _layout on every mount, runs
 * its work once. Sets `hydrated` exactly once, even on failure, so a broken
 * cache or a storage read that throws can never wedge the splash forever (the
 * same guarantee useProgress makes in onRehydrateStorage).
 */
export async function initContent(): Promise<void> {
  if (initStarted) return;
  initStarted = true;

  try {
    const cached = await readCache();
    if (cached) cachedSnapshotVersion = cached.version;
    useContent.getState().setCorpus(mergeCorpus(SEED, cached));
  } catch {
    // Seed already stands as the initial corpus; nothing more to do.
  } finally {
    useContent.getState().setHydrated();
  }

  // Fire-and-forget. The result of an OTA fetch is seen on the NEXT launch at
  // the latest; if it resolves this session it upgrades the corpus live, which
  // is a bonus, not a requirement. Nothing here is awaited by the caller.
  void refreshFromRemote();
}

/** The size of the cached OTA snapshot, if any — the one real "downloaded"
 *  number the offline screen can show. Null when only the bundled seed is
 *  present (nothing was ever fetched). */
export async function contentCacheInfo(): Promise<{ bytes: number } | null> {
  try {
    const raw = await AsyncStorage.getItem(CACHE_KEY);
    return raw ? { bytes: raw.length } : null;
  } catch {
    return null;
  }
}

/** This install's staged-rollout lot number, 0-99: drawn once, persisted, and
 *  compared against the manifest's rollout share (see shouldAdopt). Uniform by
 *  construction and stable across launches, so raising a rollout only ever
 *  adds devices. If storage is unreadable, 99 — the most conservative lot,
 *  which adopts only at full rollout. */
async function rolloutBucket(): Promise<number> {
  try {
    const raw = await AsyncStorage.getItem(BUCKET_KEY);
    if (raw !== null) {
      const n = Number(raw);
      if (Number.isInteger(n) && n >= 0 && n < 100) return n;
    }
    const drawn = Math.floor(Math.random() * 100);
    await AsyncStorage.setItem(BUCKET_KEY, String(drawn));
    return drawn;
  } catch {
    return 99;
  }
}

/** Read and validate the cached snapshot. A cache that fails validation is
 *  treated as absent — the seed backstops it. */
async function readCache(): Promise<Corpus | null> {
  try {
    const raw = await AsyncStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return isValidCorpus(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

/** Check the manifest; if it offers something strictly newer, download, verify,
 *  cache, and upgrade the live corpus. Never throws. */
export async function refreshFromRemote(): Promise<void> {
  if (!STORAGE_BASE) return; // offline / unconfigured — seed + cache only

  try {
    const manRes = await fetch(`${STORAGE_BASE}/manifest.json`, { cache: 'no-store' as RequestCache });
    if (!manRes.ok) return;
    const manifest = await manRes.json();
    if (!isManifest(manifest)) return;

    // Compare against the cached SNAPSHOT version, not the merged corpus version:
    // a seed-only install has no snapshot (0) and must fetch even when the
    // manifest's version equals the seed's. And honor the staged rollout: this
    // install adopts only if its persisted lot falls inside the manifest's
    // rollout share (rollout 0 is the kill switch — everyone freezes on what
    // they hold; see shouldAdopt in content.logic.ts for the full contract).
    if (!shouldAdopt(manifest, cachedSnapshotVersion, await rolloutBucket())) return;

    const snapRes = await fetch(`${STORAGE_BASE}/${manifest.path}`, { cache: 'no-store' as RequestCache });
    if (!snapRes.ok) return;
    const text = await snapRes.text();

    // validateCorpus is injected — content.logic stays a type-only pure island.
    const verified = verifySnapshot(text, manifest, validateCorpus);
    if (!verified.ok) return; // parse/checksum/invalid/version — keep what we have

    // Cache the raw snapshot, then upgrade the live corpus so this session sees
    // it too. Cache write and live update are independent: a failed write must
    // not stop the in-memory upgrade.
    try {
      await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(verified.corpus));
      cachedSnapshotVersion = verified.corpus.version;
    } catch {
      // Out of space or unwritable — the live upgrade below still applies for
      // this session; next launch simply refetches.
    }
    useContent.getState().setCorpus(mergeCorpus(SEED, verified.corpus));
  } catch {
    // Any network or parse failure: the seed (and cache) stand. This is the
    // offline path, and it must be silent, not fatal.
  }
}

/**
 * Imperative, non-reactive accessors. Read the current corpus once — the shape a
 * drill wants when it mounts. For reactive reads (re-render when an OTA update
 * lands mid-session) subscribe with `useContent((s) => s.corpus)` and derive
 * with the same logic functions.
 */
export const content = {
  itemsFor: (drill: DrillKind, q?: ItemQuery): Item[] =>
    selectItems(useContent.getState().corpus, drill, q),
  item: (id: string): Item | null => getItem(useContent.getState().corpus, id),
  lesson: (id: string): Lesson | null => getLesson(useContent.getState().corpus, id),
  unit: (id: string): Unit | null => getUnit(useContent.getState().corpus, id),
  units: (track: Track): Unit[] => unitsInTrack(useContent.getState().corpus, track),
  lessonsOf: (unitId: string): Lesson[] => lessonsOfUnit(useContent.getState().corpus, unitId),
  scenario: (id: string): Scenario | null => getScenario(useContent.getState().corpus, id),
  scenarios: (q?: { level?: Level; theme?: string }): Scenario[] =>
    scenariosFor(useContent.getState().corpus, q),
};
