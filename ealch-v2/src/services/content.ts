// ContentService — the store shell around content.logic.ts.
//
// Loads content in three layers, and its cardinal rule is: NEVER block first
// paint, NEVER throw. The seed ships in the binary, so the app has a full,
// valid corpus before any network or storage call. The cache and the network
// only ever raise the version, in the background.
//
//   1. seed.json         bundled in the app   → always present, works offline
//   2. cached snapshot   the filesystem       → last OTA download, if any
//   3. remote manifest   Supabase Storage     → fire-and-forget, next launch
//
// ── Why the cache is a FILE and not AsyncStorage ───────────────────────────
//
// It was AsyncStorage, and at v66 the snapshot reached 27 MB against the 6 MB
// SQLite budget AsyncStorage ships with on Android. The write threw, the catch
// that anticipates exactly this swallowed it, and the corpus upgraded for the
// session and then vanished. Measured on a Pixel 6: `databases/RKStorage` sat
// at 1.4 MB with no snapshot row in it, while the downloads screen correctly
// reported v66.
//
// Nothing looked broken. The cost was paid on every cold start instead — 27 MB
// re-downloaded, the "everything works offline" promise on the downloads screen
// quietly false, and exam content, which before phase 22.1 reached the app
// through the snapshot alone, absent until the fetch landed. A candidate
// opening the Examiner offline saw "no exams available yet".
//
// A multi-megabyte blob is what a file is for. `text()` is a native
// AsyncFunction so the per-launch read stays off the JS thread; `write()` has
// no async variant and is sync, which is affordable because it runs once per
// VERSION (shouldAdopt refuses a re-download of what is already cached) and
// behind runAfterInteractions.
//
// This mirrors the resilience contract the rest of the service layer already
// keeps: config.ts degrades to defaults, useProgress treats a corrupt log as
// "no progress yet". A corrupt content cache must likewise mean "seed only",
// never a crash.
import { InteractionManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { File, Paths } from 'expo-file-system';
import { noteServerDateHeader } from './serverClock';
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
  unitsInBand,
  unitsInTrack,
  verifySnapshot,
  type ItemQuery,
  type Manifest,
} from './content.logic';
import {
  composeCorpus,
  heldBands,
  partialValidationView,
  shouldAdoptCore,
  type PacksManifest,
  type SnapshotKind,
} from './packs.logic';
import {
  bindPacks,
  fetchPacksManifest,
  loadCachedPacks,
  packLayer,
  packsPending,
  startPackSync,
  syncPacks,
} from './packs';

// Through `unknown`: a JSON import widens literals, so the catalogue's
// levelRange [from, to] tuples arrive typed as string[] and the direct cast
// stopped compiling the day seed.json first carried themes. The seed is
// publish-validated (validateCorpus) before it is ever committed, which is the
// guarantee the cast actually rests on.
// DEV-PREVIEW-B1 (temporary): the whole B1 draft band overlaid on the seed in
// dev builds only, so the lessons can be reviewed on a device before they exist
// anywhere else. Remove this, the import below and the JSON together.
//
// The seed carries NO b1 units, so merging this is all it takes for the B1 band
// to appear in den.tsx's trail on its own. There is no bespoke preview surface
// and no per-lesson wiring: adding a lesson is one line in the generator,
// `ealch-admin/scripts/data/b1/_preview-b1.ts`.
//
// Rebuild after ANY b1 source change: pnpm tsx scripts/data/b1/_preview-b1.ts
// The b1.01-only fixture drifted through three source commits before anyone
// noticed, shipping 0 sheet links and 4 ids that collided with published rows.
// `ealch-admin/scripts/b1-preview-fixture.test.ts` now fails if it drifts again.
import devPreviewB1 from '@/content/dev-preview-b1.json';
const SEED = __DEV__
  ? mergeCorpus(seedJson as unknown as Corpus, { version: 0, ...devPreviewB1 } as unknown as Corpus)
  : (seedJson as unknown as Corpus);

/** The draft lessons this dev build overlays, empty in a release build. The one
 *  list every dev-only branch reads, so the level gate and any preview surface
 *  cannot disagree about what counts as a draft. */
export const DRAFT_LESSON_IDS: ReadonlySet<string> = new Set(
  __DEV__ ? (devPreviewB1.lessons as { id: string }[]).map((l) => l.id) : []
);
// The RAW verified snapshot text, byte-for-byte as downloaded. Caching the text
// rather than a re-stringified object drops one full-corpus serialization and
// one in-memory copy from the OTA apply path. (Caches written by older builds
// hold a re-stringified corpus under this key with no meta row — the read path
// treats those as absent and the next fetch simply re-downloads. One redundant
// download per upgraded install, once.)
// The AsyncStorage key the snapshot USED to live under. Read once more so an
// upgrading install that did manage to cache a smaller snapshot keeps it, and
// removed on sight so its bytes stop counting against the 6 MB budget that
// everything else in AsyncStorage — progress, settings, the rollout lot —
// still shares.
const LEGACY_CACHE_KEY = 'ealch-content-snapshot';
// Written AFTER the text, read BEFORE it: its presence is the commit marker
// that says "the snapshot file passed the full verify when written". It stays
// in AsyncStorage — it is two numbers, and keeping the marker and the payload
// in separate stores is what makes a torn write readable as "no cache".
const CACHE_META_KEY = 'ealch-content-snapshot-meta';

/** The cached snapshot on disk. `Paths.document` rather than `Paths.cache`
 *  deliberately: the OS may evict the cache directory under storage pressure,
 *  and an app that promises to work offline cannot have its corpus quietly
 *  reclaimed between launches. */
const snapshotFile = () => new File(Paths.document, 'content-snapshot.json');

/** Where a download lands before it has been verified.
 *
 *  Separate from the live cache file on purpose: a download that is interrupted
 *  or serves the wrong bytes must never be mistaken for the verified snapshot,
 *  and the commit marker alone cannot protect against that if both write to the
 *  same path. Promoted by `moveVerifiedSnapshot` only after the checksum
 *  passes. */
const snapshotStagingFile = () => new File(Paths.document, 'content-snapshot.part');
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
/** What the snapshot slot holds: the legacy FULL snapshot or the free CORE
 *  (premium content packs). Meaningful only while cachedSnapshotVersion > 0. */
let cachedSnapshotKind: SnapshotKind = 'full';

/* ─── The layers, composed ────────────────────────────────────────────────
 *
 * The live corpus is  seed ⊕ adopted snapshot (full or core) ⊕ packs.  The
 * first two are the BASE and change rarely; the pack layer changes whenever a
 * pack lands or the entitlement moves. Everything that used to setCorpus the
 * base directly now goes through setBase, so a pack is never dropped by a
 * snapshot upgrade and a snapshot is never dropped by a pack. */
let baseCorpus: Corpus = SEED;

function recompose(): void {
  const { order, packs } = packLayer();
  useContent.getState().setCorpus(order.length ? composeCorpus(baseCorpus, packs, order) : baseCorpus);
}

function setBase(c: Corpus): void {
  baseCorpus = c;
  recompose();
}

/** The validator a snapshot of this kind must pass. A core is a partial
 *  corpus by design (paid units are skeletons), so it is validated through
 *  partialValidationView with only the free bands held; a full snapshot is
 *  validated whole, as it always was. */
const validatorFor = (kind: SnapshotKind) =>
  kind === 'core'
    ? (c: unknown) => validateCorpus(partialValidationView(c as Corpus, { bands: heldBands([]), exam: false }))
    : validateCorpus;

bindPacks({ base: () => baseCorpus, changed: recompose });

// The dev exam fixture used to be appended here, so the runner could be sat on
// a phone before any real paper existed. TEF Canada blanc-01 published as
// snapshot v57 on 2026-09-01, so the fixture and its 126 KiB of unreviewed
// content are gone: exam papers now arrive over the air like everything else.
//
// Since phase 22.1, `content:publish` bundles every published exam paper and
// the tasks those papers reference into the seed cut, so a fresh offline
// install lists and opens them. Exam audio still resolves from Storage by
// `audioRef` and grading still needs the network; the snapshot supersedes
// bundled papers by id through mergeCorpus. Showing a candidate an unreviewed
// mock paper is still never done — that was only ever a development
// convenience, and it stays removed.

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
    const cached = await readCache();
    adopted = adoptedForLaunch(cached?.corpus, __DEV__);
    if (adopted && cached) {
      cachedSnapshotVersion = adopted.version;
      cachedSnapshotKind = cached.kind;
    }
    // Premium packs held on this device, so a subscriber's paid lessons are
    // there offline from the first frame. Merged only while entitled
    // (packLayer); a no-op in dev.
    await loadCachedPacks();
    setBase(mergeCorpus(SEED, adopted));
  } catch {
    // Seed already stands as the initial corpus; nothing more to do.
  } finally {
    useContent.getState().setHydrated();
  }
  // From here on a purchase, restore or lapse re-merges (or locks) at once.
  startPackSync();

  // The full structural validation of the cache, AFTER paint (the perf budget:
  // readCache only shape-checked in O(1); validateCorpus walks every entity and
  // does not belong between the user and first paint). The cache passed this
  // exact validation when written, so failure here means storage corrupted it
  // since — roll back to the seed and purge, exactly as if it had never been.
  if (adopted) {
    const suspect = adopted;
    const validate = validatorFor(cachedSnapshotKind);
    void new Promise<void>((r) => InteractionManager.runAfterInteractions(() => r())).then(async () => {
      if (validate(suspect).length === 0) return;
      await purgeCache();
      // Roll back only if the base we painted is still the one we are
      // invalidating — a refreshFromRemote that landed meanwhile has already
      // replaced it with a freshly verified one, which must stand.
      if (baseCorpus.version === suspect.version) {
        cachedSnapshotVersion = 0;
        setBase(SEED);
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
    const f = snapshotFile();
    // `size` is null for a path that does not exist, which is the same answer
    // as "nothing was ever fetched" and must not read as a zero-byte cache.
    const bytes = f.exists ? f.size : null;
    return typeof bytes === 'number' && bytes > 0 ? { bytes } : null;
  } catch {
    return null;
  }
}

/** Promote the staged download to the live cache file.
 *
 *  Called only after the checksum has passed, and before the commit marker is
 *  written, so the ordering the reader depends on is unchanged: payload in
 *  place first, marker second. */
async function moveVerifiedSnapshot(): Promise<void> {
  const live = snapshotFile();
  try {
    if (live.exists) live.delete();
  } catch {
    // Overwriting below is still attempted; a stale live file with no marker
    // reads as no cache either way.
  }
  await snapshotStagingFile().move(live);
}

/** Remove both halves of the cache — the file, the commit marker, the staged
 *  part-file, and any bytes still parked under the pre-filesystem key. Never
 *  throws: every caller is on a path whose safe outcome is "fall back to the
 *  seed". */
async function purgeCache(): Promise<void> {
  for (const f of [snapshotFile(), snapshotStagingFile()]) {
    try {
      if (f.exists) f.delete();
    } catch {
      // Unlinkable file: the meta removal below still demotes it to "no cache".
    }
  }
  await AsyncStorage.multiRemove([CACHE_META_KEY, LEGACY_CACHE_KEY]).catch(() => {});
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
  await purgeCache();
  cachedSnapshotVersion = 0;
  setBase(SEED);
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
async function readCache(): Promise<{ corpus: Corpus; kind: SnapshotKind } | null> {
  try {
    const metaRaw = await AsyncStorage.getItem(CACHE_META_KEY);
    if (!metaRaw) return null;
    const raw = await readSnapshotText();
    if (!raw) return null;
    const meta = JSON.parse(metaRaw);
    if (!isCacheMeta(meta)) return null;
    const parsed = JSON.parse(raw);
    if (!looksLikeCorpus(parsed) || parsed.version !== meta.version) return null;
    // A marker written before packs has no kind: that cache is the full
    // snapshot, which is all there was.
    return { corpus: parsed, kind: (meta as { kind?: unknown }).kind === 'core' ? 'core' : 'full' };
  } catch {
    return null;
  }
}

/**
 * The snapshot text: the file first, then — once — the AsyncStorage key it used
 * to live under.
 *
 * The migration is not theoretical. Installs that cached a snapshot while it
 * still fit under 6 MB hold one right now, and dropping it on upgrade would
 * cost every one of them a re-download for nothing. Reading it and moving it
 * across keeps them whole; deleting the old key afterwards is the point of the
 * exercise, since those bytes are what squeezes everything else in AsyncStorage.
 *
 * A failed move is not a failed read: the text is already in hand and is
 * returned regardless, and the next successful write settles the file.
 */
async function readSnapshotText(): Promise<string | null> {
  try {
    const f = snapshotFile();
    if (f.exists) return await f.text();
  } catch {
    // Unreadable file — fall through to the legacy key, then to no cache.
  }

  const legacy = await AsyncStorage.getItem(LEGACY_CACHE_KEY).catch(() => null);
  if (!legacy) return null;
  try {
    snapshotFile().write(legacy);
    await AsyncStorage.removeItem(LEGACY_CACHE_KEY).catch(() => {});
  } catch {
    // Could not move it. The bytes are still good for this launch.
  }
  return legacy;
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
    // ── Premium content packs: manifest-v2 first ──────────────────────────
    //
    // When it is published, this build takes the FREE CORE as its snapshot
    // and the packs the user is entitled to on top (packs.ts). Packs are
    // synced BEFORE the core is considered, because swapping a legacy full
    // snapshot for the core is what takes paid content off a free device and
    // must not take it off a subscriber before their packs are here
    // (shouldAdoptCore). No manifest-v2 yet means the legacy path below,
    // unchanged.
    let manifest: Manifest;
    let kind: SnapshotKind;
    const v2: PacksManifest | null = await fetchPacksManifest();
    if (v2) {
      await syncPacks(v2);
      const adopt = shouldAdoptCore({
        core: v2.core,
        rollout: v2.rollout,
        cached: cachedSnapshotVersion > 0 ? { version: cachedSnapshotVersion, kind: cachedSnapshotKind } : null,
        bucket: await rolloutBucket(),
        packsPending: packsPending(v2),
      });
      if (!adopt) return;
      manifest = { version: v2.core.version, path: v2.core.path, checksum: v2.core.checksum };
      kind = 'core';
    } else {
      const manRes = await fetch(`${STORAGE_BASE}/manifest.json`, { cache: 'no-store' as RequestCache });
      // Server time, from a response the app already makes on every launch. This
      // is what keeps the entitlement clock floor moving without a clock
      // endpoint or an extra round trip — see services/serverClock.ts. Read
      // before the ok-check: a 404 still carries an honest Date.
      noteServerDateHeader(manRes.headers.get('date'));
      if (!manRes.ok) return;
      const legacy = await manRes.json();
      if (!isManifest(legacy)) return;
      manifest = legacy;
      kind = 'full';

      // Compare against the cached SNAPSHOT version, not the merged corpus version:
      // a seed-only install has no snapshot (0) and must fetch even when the
      // manifest's version equals the seed's. And honor the staged rollout: this
      // install adopts only if its persisted lot falls inside the manifest's
      // rollout share (rollout 0 is the kill switch — everyone freezes on what
      // they hold; see shouldAdopt in content.logic.ts for the full contract).
      if (!shouldAdopt(manifest, cachedSnapshotVersion, await rolloutBucket())) return;
    }

    // ── Streamed to disk, not pulled into a string ────────────────────────
    //
    // This was `fetch()` then `.text()`: one 27 MB all-or-nothing request with
    // no resume, held entirely in JS memory. On the connections this most
    // needs to work on it is the difference between "slow" and "never" — every
    // drop restarts from zero, so a user on intermittent 3G can fail forever
    // and simply never receive exam content, with nothing telling them why.
    // It was also a 27 MB spike on exactly the low-RAM devices least able to
    // absorb one.
    //
    // downloadFileAsync streams the body straight into the target file on
    // Android, so memory stays flat and the bytes that arrive are kept. The
    // file is the same one the cache reads from, so a completed download is
    // already the cache — no copy, no second write.
    const staged = snapshotStagingFile();
    try {
      if (staged.exists) staged.delete();
    } catch {
      // A leftover part-file we cannot remove: the download below overwrites
      // it with idempotent, so this is recoverable rather than fatal.
    }
    await File.downloadFileAsync(`${STORAGE_BASE}/${manifest.path}`, staged, { idempotent: true });

    // The size ceiling, consumer side, now asked of the FILE before it is read
    // into memory. Publish refuses to produce a snapshot past this, so hitting
    // it here means the channel is serving something no publish produced —
    // refuse before spending a multi-MB read and parse on it.
    const stagedBytes = staged.exists ? staged.size : null;
    if (typeof stagedBytes !== 'number' || stagedBytes <= 0 || stagedBytes > MAX_SNAPSHOT_BYTES) {
      try {
        staged.delete();
      } catch {
        // Nothing further to do; the seed and any existing cache still stand.
      }
      return;
    }
    const text = await staged.text();

    // Verify + merge run over the whole corpus on the JS thread — a real stall
    // at target corpus size if it lands mid-animation. This fetch is already
    // fire-and-forget, so defer the expensive part until the UI is idle.
    await new Promise<void>((r) => InteractionManager.runAfterInteractions(() => r()));

    // validateCorpus is injected — content.logic stays a type-only pure island.
    const verified = verifySnapshot(text, manifest, validatorFor(kind));
    if (!verified.ok) return; // parse/checksum/invalid/version — keep what we have

    // Cache the RAW verified text — the exact bytes that just passed the
    // checksum — never a re-stringify of the parsed object (that was a second
    // full-corpus serialization and a second full-corpus string held live, on
    // a path the memory-spike finding already indicts). Meta is written after
    // the text: its presence commits the pair, so a torn write reads as no
    // cache rather than as unverified bytes.
    try {
      // The file first, the marker second. A crash between them leaves a file
      // no reader will trust, which is the same outcome as no cache and is why
      // the two live in different stores.
      //
      // A move, not a write: the verified bytes are already on disk as the
      // staging file, so re-serialising 27 MB through a synchronous write would
      // spend the cost twice for the same result.
      await moveVerifiedSnapshot();
      await AsyncStorage.setItem(
        CACHE_META_KEY,
        JSON.stringify({ version: verified.corpus.version, checksum: manifest.checksum, kind })
      );
      // Anything still under the old key is now dead weight against the 6 MB
      // AsyncStorage budget the rest of the app shares.
      await AsyncStorage.removeItem(LEGACY_CACHE_KEY).catch(() => {});
      cachedSnapshotKind = kind;
      cachedSnapshotVersion = verified.corpus.version;
    } catch {
      // Genuinely out of disk, or unwritable — the live upgrade below still
      // applies for this session; next launch simply refetches. This is now a
      // real out-of-space, not a 27 MB blob against a 6 MB row budget.
    }
    setBase(mergeCorpus(SEED, verified.corpus));
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
  /** The band-keyed sibling of `units`. The only accessor a trail past a2 can
   *  use — `Unit.track` is absent past a2 by design (schema.ts). */
  unitsOfBand: (band: Level): Unit[] => unitsInBand(useContent.getState().corpus, band),
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
