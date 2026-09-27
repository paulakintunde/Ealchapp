// Premium content packs: the PURE half (PREMIUM-PACKS-SPEC.md, approved by
// Paul 2026-09-27).
//
// The corpus now reaches a device in layers:
//
//   seed.json            bundled, free core (sons + a1, paid units as skeletons)
//   core snapshot        public bucket, the free core over the air
//   packs                PRIVATE bucket, one per paid band plus `exam`,
//                        fetched through a signed URL only when entitled
//
// This file decides everything about packs that can be decided without a
// device: which packs a user may hold, which to fetch and in what order, how
// they merge over the core, when a lapsed pack is deleted, how a pack is
// verified, and how a PARTIAL corpus (core plus some packs) is validated.
// packs.ts is the thin I/O shell around it, the same split as content.ts and
// content.logic.ts, and the publisher (ealch-admin content-packs.logic.ts)
// imports the same names so the two ends cannot drift.
//
// Like content.logic.ts, it imports nothing from react-native, zustand or expo.
import type { Corpus, Level } from '../content/schema';
import { unitBand } from '../content/schema.ts';
import { FREE_BANDS } from '../store/entitlement.logic.ts';
import { mergeCorpus, sha256Hex, stableStringify } from './content.logic.ts';

/* ─── The pack vocabulary ─────────────────────────────────────────────────── */

/** Paid bands, in FETCH order: the band a new subscriber reaches first comes
 *  first, so the next lesson is ready soonest (spec section 4). */
export const PAID_BANDS = ['a2', 'b1', 'b2', 'c1', 'c2'] as const;
export type PaidBand = (typeof PAID_BANDS)[number];

/** Exam papers and tasks, behind the `exam` access level (decision 3). */
export const EXAM_PACK = 'exam' as const;

export const PACK_ORDER = [...PAID_BANDS, EXAM_PACK] as const;
export type PackName = (typeof PACK_ORDER)[number];

export function isPackName(v: unknown): v is PackName {
  return typeof v === 'string' && (PACK_ORDER as readonly string[]).includes(v);
}

/** Decision 1: a pack the user no longer holds stays on the device, locked,
 *  for this long, then is deleted. A user who resubscribes inside the window
 *  is back with no download. Progress is never touched either way. */
export const PACK_RETENTION_MS = 30 * 86_400_000;

/** What the user may hold, as the two access questions the gate already asks
 *  (hasFeature 'levels.all' for Premiere, 'examiner' for the exam level). */
export type PackAccess = { levelsAll: boolean; examiner: boolean };

/** The packs this user is entitled to, in fetch order. */
export function entitledPacks(access: PackAccess): PackName[] {
  return PACK_ORDER.filter((p) => (p === EXAM_PACK ? access.examiner : access.levelsAll));
}

/* ─── The public manifest (manifest-v2.json) ──────────────────────────────── */

/** One pack as the public manifest describes it: never its content. */
export type PackEntry = { name: PackName; version: number; path: string; checksum: string; bytes: number };

/** The free core as the public manifest describes it. */
export type CoreEntry = { version: number; path: string; checksum: string; bytes: number };

/**
 * `manifest-v2.json`, public, beside the legacy `manifest.json`. The legacy
 * file keeps pointing at the full snapshot so installs from before packs keep
 * working (spec section 7, the changeover); this one is what a pack-aware
 * build reads. It lists pack names, versions, checksums and sizes, and no
 * content, which is why it can be public.
 */
export type PacksManifest = {
  schema: 2;
  version: number;
  /** Staged rollout of the CORE, same contract as Manifest.rollout. Packs are
   *  not rolled out: a pack is only ever fetched by an entitled user, and a
   *  broken one is fixed by publishing again. */
  rollout?: number;
  core: CoreEntry;
  packs: PackEntry[];
};

const isNum = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
const isStr = (v: unknown): v is string => typeof v === 'string' && v.length > 0;

function isCoreEntry(v: unknown): v is CoreEntry {
  if (!v || typeof v !== 'object') return false;
  const c = v as Record<string, unknown>;
  return isNum(c.version) && isStr(c.path) && isStr(c.checksum) && isNum(c.bytes);
}

export function isPackEntry(v: unknown): v is PackEntry {
  if (!isCoreEntry(v)) return false;
  return isPackName((v as unknown as Record<string, unknown>).name);
}

/** Strict: a malformed manifest is rejected whole, never half-used. */
export function isPacksManifest(v: unknown): v is PacksManifest {
  if (!v || typeof v !== 'object') return false;
  const m = v as Record<string, unknown>;
  if (m.schema !== 2 || !isNum(m.version) || !isCoreEntry(m.core) || !Array.isArray(m.packs)) return false;
  if (m.rollout !== undefined && typeof m.rollout !== 'number') return false;
  if (!m.packs.every(isPackEntry)) return false;
  const names = (m.packs as PackEntry[]).map((p) => p.name);
  return new Set(names).size === names.length;
}

/* ─── The device's pack registry ──────────────────────────────────────────── */

/** One cached pack, as the device remembers it. `lockedSince` is set the
 *  first time the pack is seen without the entitlement that unlocks it, and
 *  cleared the moment the entitlement is back. */
export type CachedPack = {
  version: number;
  checksum: string;
  bytes: number;
  cachedAt: number;
  lockedSince?: number;
};
export type PackRegistry = Partial<Record<PackName, CachedPack>>;

/** Read a stored registry, dropping anything malformed rather than trusting
 *  it: a bad entry costs one re-download, a trusted bad entry costs a pack
 *  that never updates. */
export function parseRegistry(raw: unknown): PackRegistry {
  const out: PackRegistry = {};
  if (!raw || typeof raw !== 'object') return out;
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    if (!isPackName(k) || !v || typeof v !== 'object') continue;
    const e = v as Record<string, unknown>;
    if (!isNum(e.version) || !isStr(e.checksum) || !isNum(e.bytes) || !isNum(e.cachedAt)) continue;
    out[k] = {
      version: e.version,
      checksum: e.checksum,
      bytes: e.bytes,
      cachedAt: e.cachedAt,
      ...(isNum(e.lockedSince) ? { lockedSince: e.lockedSince } : {}),
    };
  }
  return out;
}

/* ─── What to fetch, what to merge, what to delete ────────────────────────── */

/** Entitled packs the manifest offers that the device lacks or holds at a
 *  different checksum, in PACK_ORDER. A band whose pack did not change is
 *  never fetched again (spec section 4, Updates). */
export function packsToFetch(manifest: PacksManifest, registry: PackRegistry, entitled: readonly PackName[]): PackEntry[] {
  const byName = new Map(manifest.packs.map((p) => [p.name, p]));
  const out: PackEntry[] = [];
  for (const name of PACK_ORDER) {
    if (!entitled.includes(name)) continue;
    const entry = byName.get(name);
    if (!entry) continue;
    const held = registry[name];
    if (!held || held.checksum !== entry.checksum) out.push(entry);
  }
  return out;
}

/** Whether every entitled pack the manifest offers is already cached at its
 *  published checksum. */
export function packsComplete(manifest: PacksManifest, registry: PackRegistry, entitled: readonly PackName[]): boolean {
  return packsToFetch(manifest, registry, entitled).length === 0;
}

/** The packs merged into the live corpus: entitled AND loaded, in PACK_ORDER.
 *  A cached pack the user no longer holds is NOT merged. The gate
 *  (levelLocked) would lock it anyway; leaving it out also means a lapsed
 *  device carries exactly what a free one does in memory. */
export function packsToMerge(loaded: Iterable<PackName>, entitled: readonly PackName[]): PackName[] {
  const have = new Set(loaded);
  return PACK_ORDER.filter((p) => have.has(p) && entitled.includes(p));
}

/**
 * The retention clock (decision 1), one pass over the registry.
 *
 *   entitled and cached          lockedSince cleared (a resubscribe is instant)
 *   not entitled, first seen     lockedSince = now
 *   not entitled for 30 days     deleted: removed here, and named in `expired`
 *                                so the caller unlinks the file
 *
 * A clock that runs BACKWARDS never deletes early: the elapsed time is
 * measured forward from lockedSince, and a now before it reads as zero. The
 * caller passes guardedNow(), so winding the clock forward only deletes a
 * pack the user cannot open anyway, which is self-inflicted and costs one
 * download on resubscribe. Progress is never an input here.
 */
export function applyRetention(
  registry: PackRegistry,
  entitled: readonly PackName[],
  nowMs: number,
): { registry: PackRegistry; expired: PackName[]; changed: boolean } {
  const next: PackRegistry = {};
  const expired: PackName[] = [];
  let changed = false;
  for (const name of PACK_ORDER) {
    const held = registry[name];
    if (!held) continue;
    if (entitled.includes(name)) {
      if (held.lockedSince !== undefined) {
        const { lockedSince: _drop, ...rest } = held;
        next[name] = rest;
        changed = true;
      } else next[name] = held;
      continue;
    }
    if (held.lockedSince === undefined) {
      next[name] = { ...held, lockedSince: nowMs };
      changed = true;
      continue;
    }
    if (Math.max(0, nowMs - held.lockedSince) >= PACK_RETENTION_MS) {
      expired.push(name);
      changed = true;
      continue;
    }
    next[name] = held;
  }
  return { registry: next, expired, changed };
}

/** Core first, then each pack in the order given. Every id lives in exactly
 *  one layer except a paid unit (skeleton in the core, full in its pack), so
 *  the order only decides that one overlap, and the pack wins it. */
export function composeCorpus(base: Corpus, packs: ReadonlyMap<PackName, Corpus>, order: readonly PackName[]): Corpus {
  let out = base;
  for (const name of order) {
    const p = packs.get(name);
    if (p) out = mergeCorpus(out, p);
  }
  return out;
}

/* ─── Verifying one pack ──────────────────────────────────────────────────── */

export type PackVerifyResult =
  | { ok: true; corpus: Corpus }
  | { ok: false; reason: 'parse' | 'checksum' | 'shape' | 'name' | 'version' };

/**
 * A pack's own gates, cheapest first: parse, checksum (sha256 of the stable
 * stringify, the same byte contract as the snapshot), shape, then the pack
 * must say it IS the pack and version the manifest promised. A pack is not a
 * valid corpus on its own (it borrows items from the core), so the structural
 * validation runs on the MERGED corpus instead, via partialValidationView.
 */
export function verifyPack(text: string, entry: Pick<PackEntry, 'name' | 'version' | 'checksum'>): PackVerifyResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return { ok: false, reason: 'parse' };
  }
  if (sha256Hex(stableStringify(parsed)) !== entry.checksum) return { ok: false, reason: 'checksum' };
  const c = parsed as Record<string, unknown>;
  if (!c || typeof c !== 'object' || !Array.isArray(c.units) || !Array.isArray(c.lessons) || !Array.isArray(c.items)) {
    return { ok: false, reason: 'shape' };
  }
  if (c.pack !== entry.name) return { ok: false, reason: 'name' };
  if (c.version !== entry.version) return { ok: false, reason: 'version' };
  return { ok: true, corpus: parsed as Corpus };
}

/* ─── Validating a PARTIAL corpus ─────────────────────────────────────────── */

/** The bands whose content is on the device: the free bands always, plus
 *  every band pack loaded. The exam pack holds no band. */
export function heldBands(loaded: Iterable<PackName>): Set<string> {
  const out = new Set<string>(FREE_BANDS);
  for (const p of loaded) if (p !== EXAM_PACK) out.add(p);
  return out;
}

/** The band an id names: `fr.<band>.…` for an item, `<band>.<nn>…` for a
 *  unit or lesson, `sc.<band>.…` for a scenario. */
function bandOfId(id: string): string | null {
  const parts = id.split('.');
  if (parts[0] === 'fr' || parts[0] === 'sc') return parts[1] ?? null;
  return parts[0] ?? null;
}

/**
 * The corpus as validateCorpus should see it when only some layers are on the
 * device. Every reference that points INTO a layer this device does not hold
 * is dropped from the view, and nothing else is:
 *
 *   a skeleton unit's lessonIds         when its band is not held
 *   an exam task's targetItemIds        when the item is absent AND its band
 *                                        is not held
 *   a scenario's exam link              when the exam pack is not held
 *   a lesson's scenarioId               when the scenario is absent AND its
 *                                        band is not held
 *
 * So a dangling reference INSIDE a held layer still fails, which is the whole
 * value of validating. The view is for validation only; the live corpus keeps
 * every field.
 */
export function partialValidationView(corpus: Corpus, held: { bands: ReadonlySet<string>; exam: boolean }): Corpus {
  const itemIds = new Set(corpus.items.map((i) => i.id));
  const scenarioIds = new Set((corpus.scenarios ?? []).map((s) => s.id));
  const unheld = (id: string) => {
    const b = bandOfId(id);
    return b === null || !held.bands.has(b);
  };
  return {
    ...corpus,
    units: corpus.units.map((u) => {
      const b = unitBand(u.id);
      if (b === null || held.bands.has(b)) return u;
      // The outline names the lessonIds being dropped, so it goes too; a
      // skeleton's own shape is checked by validateUnit on the unit itself.
      const { outline: _o, ...rest } = u;
      return { ...rest, lessonIds: [] };
    }),
    lessons: corpus.lessons.map((l) =>
      l.scenarioId !== undefined && !scenarioIds.has(l.scenarioId) && unheld(l.scenarioId)
        ? (() => {
            const { scenarioId: _s, ...rest } = l;
            return rest;
          })()
        : l,
    ),
    scenarios: (corpus.scenarios ?? []).map((s) => {
      if (!s.exam || held.exam) return s;
      const { exam: _e, ...rest } = s;
      return rest;
    }),
    examTasks: (corpus.examTasks ?? []).map((t) =>
      t.targetItemIds?.length
        ? { ...t, targetItemIds: t.targetItemIds.filter((id) => itemIds.has(id) || !unheld(id)) }
        : t,
    ),
  };
}

/* ─── The core snapshot's adoption ────────────────────────────────────────── */

/** What the device's snapshot slot holds: the legacy FULL snapshot (every
 *  band, from before packs) or the free CORE. Absent kind on a cache meta
 *  written before packs means full. */
export type SnapshotKind = 'full' | 'core';

/**
 * Should this device adopt the core snapshot the v2 manifest offers?
 *
 * The one case that is not "newer and inside the rollout" is the changeover:
 * a device holding the legacy FULL snapshot. Replacing it with the core is
 * what takes paid content off a free device, so it happens even at the same
 * version. But for a subscriber it would also take away their paid lessons
 * until the packs land, so it waits until every entitled pack is cached.
 */
export function shouldAdoptCore(args: {
  core: CoreEntry;
  rollout: number | undefined;
  cached: { version: number; kind: SnapshotKind } | null;
  bucket: number;
  packsPending: boolean;
}): boolean {
  const rollout = args.rollout === undefined ? 100 : args.rollout;
  if (!Number.isFinite(rollout) || args.bucket >= Math.min(100, Math.max(0, rollout))) return false;
  const cached = args.cached;
  if (!cached) return true;
  if (cached.kind === 'core') return args.core.version > cached.version;
  if (args.packsPending) return false;
  return args.core.version >= cached.version;
}

/* ─── A lesson that is not on the device ──────────────────────────────────── */

/**
 * What lesson.tsx does with a lesson id the corpus does not hold.
 *
 * Before packs, an unknown id fell back to the first Sons lesson. With paid
 * bodies off the device that fallback became a hole: a free user tapping a
 * locked outline row would have landed on a free lesson instead of the
 * paywall, and a subscriber whose pack is still downloading would have been
 * dropped somewhere unrelated. So an unknown id in a PAID band is decided
 * here, and only an id no paid band claims keeps the old fallback.
 */
export function missingLessonState(id: string, levelsAll: boolean): 'locked' | 'pending' | 'fallback' {
  const band = bandOfId(id);
  if (band === null || !(PAID_BANDS as readonly string[]).includes(band)) return 'fallback';
  return levelsAll ? 'pending' : 'locked';
}

/** The band of a pack, or null for the exam pack. */
export function packBand(p: PackName): Level | null {
  return p === EXAM_PACK ? null : p;
}
