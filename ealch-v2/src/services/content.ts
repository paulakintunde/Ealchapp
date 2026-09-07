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
import { InteractionManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { ENV } from './env';
import seedJson from '@/content/seed.json';
import type { Corpus, DrillKind, ExamFormat, ExamSection, Item, Lesson, Level, Scenario, Track, Unit } from '@/content/schema';
import { validateCorpus } from '@/content/schema';
import {
  adoptedForLaunch,
  anchorForItem,
  examPapersFor,
  examTasksOfPaper,
  examTasksOfSection,
  formatAnchor,
  getExamPaper,
  getExamTask,
  getItem,
  getLesson,
  getScenario,
  getUnit,
  isCacheMeta,
  isManifest,
  lessonsOfUnit,
  looksLikeCorpus,
  MAX_SNAPSHOT_BYTES,
  mergeCorpus,
  parseAnchor,
  resolveAnchor,
  scenariosFor,
  selectItems,
  shouldAdopt,
  speakStages,
  unitsInTrack,
  verifySnapshot,
  type ItemQuery,
} from './content.logic';

// Through `unknown`: a JSON import widens literals, so the catalogue's
// levelRange [from, to] tuples arrive typed as string[] and the direct cast
// stopped compiling the day seed.json first carried themes. The seed is
// publish-validated (validateCorpus) before it is ever committed, which is the
// guarantee the cast actually rests on.
const SEED = seedJson as unknown as Corpus;
// The RAW verified snapshot text, byte-for-byte as downloaded. Caching the text
// rather than a re-stringified object drops one full-corpus serialization and
// one in-memory copy from the OTA apply path. (Caches written by older builds
// hold a re-stringified corpus under this key with no meta row — the read path
// treats those as absent and the next fetch simply re-downloads. One redundant
// download per upgraded install, once.)
const CACHE_KEY = 'ealch-content-snapshot';
// Written AFTER the text, read BEFORE it: its presence is the commit marker
// that says "the bytes under CACHE_KEY passed the full verify when written".
const CACHE_META_KEY = 'ealch-content-snapshot-meta';
const BUCKET_KEY = 'ealch-rollout-bucket';
const STORAGE_BASE = ENV.supabaseUrl
  ? `${ENV.supabaseUrl.replace(/\/$/, '')}/storage/v1/object/public/content`
  : '';

/** Resolve a storage-relative asset ref (Item.imageRef, Item/section
 *  audioRef) to a fetchable URL, or null when the app runs unconfigured —
 *  callers must treat null as "no asset" and fall back, never render a
 *  broken source. R2 (ENV.assetBaseUrl) wins once configured — the
 *  AUDIO-RENDER-SPEC end-state — falling back to the Supabase content bucket
 *  ("wave 1") so existing image refs keep resolving during the migration. */
export function contentAssetUrl(ref: string | null | undefined): string | null {
  if (!ref) return null;
  const base = ENV.assetBaseUrl ? ENV.assetBaseUrl.replace(/\/$/, '') : STORAGE_BASE;
  if (!base) return null;
  return `${base}/${ref}`;
}

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

// The dev exam fixture used to be appended here, so the runner could be sat on
// a phone before any real paper existed. TEF Canada blanc-01 published as
// snapshot v57 on 2026-09-01, so the fixture and its 126 KiB of unreviewed
// content are gone: exam papers now arrive over the air like everything else.
//
// A fresh offline install therefore has NO exam content, because the seed cut
// carries no exam tasks or papers by design. That is correct — the Examiner
// needs the snapshot, and showing a candidate a mock paper nobody reviewed was
// only ever a development convenience.

/**
 * Bring content up. Idempotent — safe to call from _layout on every mount, runs
 * its work once. Sets `hydrated` exactly once, even on failure, so a broken
 * cache or a storage read that throws can never wedge the splash forever (the
 * same guarantee useProgress makes in onRehydrateStorage).
 */
export async function initContent(): Promise<void> {
  if (initStarted) return;
  initStarted = true;

  let adopted: Corpus | null = null;
  try {
    // In dev this is always null, so the corpus is exactly the bundled seed.
    // The cache is NOT read past this point and NOT purged: a device keeps
    // whatever it holds and behaves normally again in a release build.
    //
    // Without this, a cached snapshot overlaid the seed and won every id it
    // shared with it, so an edited lesson stayed invisible through any number of
    // Metro rebuilds. See adoptedForLaunch in content.logic.ts for the full
    // account; it is the other half of the dev guard on refreshFromRemote.
    adopted = adoptedForLaunch(await readCache(), __DEV__);
    if (adopted) cachedSnapshotVersion = adopted.version;
    useContent.getState().setCorpus(mergeCorpus(SEED, adopted));
  } catch {
    // Seed already stands as the initial corpus; nothing more to do.
  } finally {
    useContent.getState().setHydrated();
  }

  // The full structural validation of the cache, AFTER paint (the perf budget:
  // readCache only shape-checked in O(1); validateCorpus walks every entity and
  // does not belong between the user and first paint). The cache passed this
  // exact validation when written, so failure here means storage corrupted it
  // since — roll back to the seed and purge, exactly as if it had never been.
  if (adopted) {
    const suspect = adopted;
    void new Promise<void>((r) => InteractionManager.runAfterInteractions(() => r())).then(async () => {
      if (validateCorpus(suspect).length === 0) return;
      await AsyncStorage.multiRemove([CACHE_KEY, CACHE_META_KEY]).catch(() => {});
      // Roll back only if the corpus we painted is still the one we are
      // invalidating — a refreshFromRemote that landed meanwhile has already
      // replaced it with a freshly verified one, which must stand.
      if (useContent.getState().corpus.version === suspect.version) {
        cachedSnapshotVersion = 0;
        useContent.getState().setCorpus(SEED);
      }
    });
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

/**
 * Drop the cached OTA snapshot and fall back to the bundled seed, now.
 *
 * The dev guard in `initContent` makes the cache invisible in a dev build, which
 * is enough for authoring. This is for the case it cannot help: a RELEASE build
 * on a real device holding a snapshot you need it to stop using, which until now
 * had no remedy short of clearing app data.
 *
 * Safe to call at any time and never throws. `cachedSnapshotVersion` drops to 0
 * so the next `refreshFromRemote` re-fetches from scratch rather than believing
 * the device is already current.
 */
export async function clearContentCache(): Promise<void> {
  try {
    await AsyncStorage.multiRemove([CACHE_KEY, CACHE_META_KEY]);
  } catch {
    // Storage unavailable: the seed still stands, which is the safe state.
  }
  cachedSnapshotVersion = 0;
  useContent.getState().setCorpus(SEED);
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

/** Read the cached snapshot, trusting the write-time verification: meta must
 *  be present and coherent (the commit marker) and the parsed value must pass
 *  the O(1) shape check — nothing deeper runs here, because this sits on the
 *  paint-gating path. The full validateCorpus re-runs after paint (initContent)
 *  and rolls back if storage corrupted the bytes since they were written.
 *  Anything short of coherent — no meta, no text, version disagreement, parse
 *  failure, wrong shape — is simply no cache; the seed backstops it. */
async function readCache(): Promise<Corpus | null> {
  try {
    const [metaRaw, raw] = await AsyncStorage.multiGet([CACHE_META_KEY, CACHE_KEY]).then((kv) => [
      kv[0][1],
      kv[1][1],
    ]);
    if (!metaRaw || !raw) return null;
    const meta = JSON.parse(metaRaw);
    if (!isCacheMeta(meta)) return null;
    const parsed = JSON.parse(raw);
    if (!looksLikeCorpus(parsed) || parsed.version !== meta.version) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Check the manifest; if it offers something strictly newer, download, verify,
 *  cache, and upgrade the live corpus. Never throws. */
export async function refreshFromRemote(): Promise<void> {
  if (!STORAGE_BASE) return; // offline / unconfigured — seed + cache only
  // In dev, the published snapshot is routinely BEHIND the seed being hand-edited
  // right now (content authoring lands in seed.json long before it is published),
  // so adopting it would silently overlay in-progress local edits with old
  // content on every cold start — see the Phase 10 sons.02/03 incident. Real
  // installs (__DEV__ false) must still OTA-refresh normally.
  if (__DEV__) return;

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

    // The size ceiling, consumer side. Publish refuses to produce a snapshot
    // past this, so hitting it here means the channel is serving something no
    // publish produced — refuse before spending a multi-MB parse on it.
    if (text.length > MAX_SNAPSHOT_BYTES) return;

    // Verify + merge run over the whole corpus on the JS thread — a real stall
    // at target corpus size if it lands mid-animation. This fetch is already
    // fire-and-forget, so defer the expensive part until the UI is idle.
    await new Promise<void>((r) => InteractionManager.runAfterInteractions(() => r()));

    // validateCorpus is injected — content.logic stays a type-only pure island.
    const verified = verifySnapshot(text, manifest, validateCorpus);
    if (!verified.ok) return; // parse/checksum/invalid/version — keep what we have

    // Cache the RAW verified text — the exact bytes that just passed the
    // checksum — never a re-stringify of the parsed object (that was a second
    // full-corpus serialization and a second full-corpus string held live, on
    // a path the memory-spike finding already indicts). Meta is written after
    // the text: its presence commits the pair, so a torn write reads as no
    // cache rather than as unverified bytes.
    try {
      await AsyncStorage.setItem(CACHE_KEY, text);
      await AsyncStorage.setItem(
        CACHE_META_KEY,
        JSON.stringify({ version: verified.corpus.version, checksum: manifest.checksum })
      );
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
  /** The Speak trail in walk order — (world, seq), sorted by speakStages. */
  speakPath: () => speakStages(useContent.getState().corpus),
  examTask: (id: string) => getExamTask(useContent.getState().corpus, id),
  examPaper: (id: string) => getExamPaper(useContent.getState().corpus, id),
  /** Mock papers for a format, in paperNo order. */
  examPapersFor: (format: ExamFormat) => examPapersFor(useContent.getState().corpus, format),
  /** Every task of a paper, in sitting order across all four épreuves. */
  examTasksOf: (paperId: string) => examTasksOfPaper(useContent.getState().corpus, paperId),
  /** One épreuve's tasks — the section runner's unit of work. */
  examTasksOfSection: (section: ExamSection) => examTasksOfSection(useContent.getState().corpus, section),
  /** The positional deep-link anchor for an item inside a lesson's practice
   *  section, formatted as `<lessonId>#s<n>.<k>` — or null when the lesson
   *  doesn't teach that item there. Stashed on the attempt log so a review
   *  list can later jump back to the exact block (Phase 2.E). */
  anchorFor: (lesson: Lesson, itemId: string): string | null => {
    const a = anchorForItem(lesson, itemId);
    return a ? formatAnchor(a) : null;
  },
  /** Resolve an anchor string against the LIVE corpus. Returns null on any
   *  malformed string or on any mismatch (missing lesson/section/item, or a
   *  corpus that has moved on since the anchor was minted) — a stale deep
   *  link fails closed, it never lands on the wrong block. */
  resolveAnchorStr: (anchor: string): ReturnType<typeof resolveAnchor> => {
    const parsed = parseAnchor(anchor);
    if (!parsed) return null;
    return resolveAnchor(useContent.getState().corpus, parsed);
  },
};
