// PREMIUM CONTENT PACKS: how one published corpus is split into a free CORE
// and one pack per paid band plus an `exam` pack (PREMIUM-PACKS-SPEC.md,
// approved by Paul 2026-09-27).
//
// Pure. publish-content.ts calls it with the corpus it just validated; the
// tests call it with hand-built corpora and with the committed seed. The app
// side of the same contract (pack names, order, verification, partial-corpus
// validation) lives in ealch-v2/src/services/packs.logic.ts and is IMPORTED
// here, never restated, so the publisher and the phone cannot disagree about
// what a pack is.
//
// ── Where each row goes ────────────────────────────────────────────────────
//
//   domains, themes          core (the catalogue, whole)
//   units                    core: free-band units in full, every paid unit as
//                            a SKELETON (the unit plus an `outline` of its
//                            lessons' act titles and card counts, so the trail
//                            reads the same); the full unit rides in its pack
//                            and replaces the skeleton on merge
//   lessons                  the band of their unit
//   items                    their HOME band, below
//   scenarios, speak stages  their `level`
//   playlists                their `minLevel`
//   exam papers, exam tasks  the `exam` pack
//
// ── An item's home band ────────────────────────────────────────────────────
//
// Normally its own level. But a lesson may name an item from a HIGHER band
// (measured on the v76 seed: a1 lessons name 5 a2 rows, a2 lessons name 39
// b1/b2 rows, b1 lessons name 33 b2 rows). Shipping those in their own band's
// pack would leave a free a1 lesson with blank cards and would make a2 depend
// on b2 being downloaded. So an item's home is the LOWEST band among its own
// level and every lesson or speak stage that names it. Lower-band borrowing
// (a b1 lesson using an a1 row) needs nothing: the lower layer is always
// present when the higher one is. Exam tasks do not pull items down: a
// target item is metadata for the SRS, and the exam pack's holder may not
// hold any band pack at all (the app's partialValidationView tolerates that).
//
// Every item therefore lands in exactly ONE place, and core plus every pack,
// merged, is the legacy full snapshot again. The tests hold both.

import type { Corpus, ExamPaper, ExamTask, Item, Lesson, Level, Playlist, Scenario, SpeakStage, Unit, UnitOutlineLesson } from '../../ealch-v2/src/content/schema.ts';
import { LEVELS, canonicalJson, unitBand } from '../../ealch-v2/src/content/schema.ts';
import { mergeCorpus } from '../../ealch-v2/src/services/content.logic.ts';
import { FREE_BANDS } from '../../ealch-v2/src/store/entitlement.logic.ts';
import { EXAM_PACK, PACK_ORDER, PAID_BANDS, type PackEntry, type PackName, type PacksManifest } from '../../ealch-v2/src/services/packs.logic.ts';
import { itemsReferencedBy } from './seed-cut.logic.ts';

export { EXAM_PACK, PACK_ORDER, PAID_BANDS };
export type { PackName, PacksManifest, PackEntry };

/** A pack as published: Corpus-shaped (so the app merges it with the same
 *  mergeCorpus it uses for snapshots) plus the pack's own name. */
export type PackBody = Corpus & { pack: PackName };

export type Split = {
  core: Corpus;
  /** Only packs with something in them, in PACK_ORDER. */
  packs: PackBody[];
  /** Items a lower band's lesson or speak stage pulled down out of their own
   *  level's pack, keyed `<from level>-><to band>`. Reported by the publisher. */
  pulledDown: Record<string, number>;
};

const isFree = (band: string | null): boolean => band !== null && (FREE_BANDS as readonly string[]).includes(band);
const rank = (band: string): number => {
  const i = (LEVELS as readonly string[]).indexOf(band);
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
};

/** The band a lesson belongs to: its unit's. */
export function lessonBand(l: Pick<Lesson, 'unitId'>): Level | null {
  return unitBand(l.unitId);
}

/** Every item's home band (see the header). */
export function itemHomes(corpus: Pick<Corpus, 'items' | 'lessons' | 'speakPath'>): Map<string, string> {
  const home = new Map<string, string>(corpus.items.map((i) => [i.id, i.level]));
  const pull = (id: string, band: string) => {
    const cur = home.get(id);
    if (cur !== undefined && rank(band) < rank(cur)) home.set(id, band);
  };
  for (const l of corpus.lessons) {
    const b = lessonBand(l);
    if (b === null) continue;
    for (const id of itemsReferencedBy(l)) pull(id, b);
  }
  for (const s of corpus.speakPath ?? []) {
    for (const b of s.blocks ?? []) for (const id of b.itemIds ?? []) pull(id, s.level);
  }
  return home;
}

/** A paid unit as the free core carries it: the unit itself (a few hundred
 *  bytes, no lesson content) plus the outline the trail draws from. A unit
 *  with no published lesson has nothing to outline and IS its own skeleton. */
export function skeletonUnit(u: Unit, lessonsById: ReadonlyMap<string, Lesson>): Unit {
  const outline: UnitOutlineLesson[] = [];
  for (const id of u.lessonIds) {
    const l = lessonsById.get(id);
    if (!l) continue;
    outline.push({
      lessonId: l.id,
      title: l.title,
      acts: (l.acts ?? []).map((a, i) => ({ title: a.title, cards: l.deckTranche?.[i]?.length ?? 0 })),
      ...(l.narration && l.features?.includes('narrated') ? { narrated: true } : {}),
    });
  }
  return outline.length ? { ...u, outline } : u;
}

/** The pack a band's content ships in, or 'core'. A band no layer names
 *  (none today: LEVELS is sons..c2) THROWS rather than defaulting: guessing
 *  'core' would leak paid content into the public snapshot, and guessing a
 *  pack would hide free content behind a paywall. The publisher dies on it. */
export function packOfBand(band: string | null): PackName | 'core' {
  if (isFree(band)) return 'core';
  if (band !== null && band !== EXAM_PACK && (PACK_ORDER as readonly string[]).includes(band)) return band as PackName;
  throw new Error(`content-packs: no layer for band "${String(band)}"`);
}

/** Split one validated corpus into the core and the packs. */
/**
 * Mock papers every learner may open: paper 1..FREE_EXAM_PAPERS of each format.
 * They stay in the free CORE (Paul, 2026-09-27: "keep the free papers in the
 * core"), with their tasks; every other paper is the `exam` pack. Mirrors the
 * app's free allowance, `RemoteConfig.examFreePapers` (default 1 in
 * ealch-v2/src/services/config.ts, pinned by a test): raising that remotely
 * opens papers the core does not carry, so raise both together.
 */
export const FREE_EXAM_PAPERS = 1;

export function isFreePaper(p: Pick<ExamPaper, 'paperNo'>): boolean {
  return p.paperNo >= 1 && p.paperNo <= FREE_EXAM_PAPERS;
}

/** The core's skeleton of a paid paper: the same paper marked `outline`, its
 *  épreuves and timings intact, its tasks left in the exam pack. */
export function outlinePaper(p: ExamPaper): ExamPaper {
  return { ...p, outline: true };
}

export function splitCorpus(corpus: Corpus): Split {
  const version = corpus.version;
  const homes = itemHomes(corpus);
  const lessonsById = new Map(corpus.lessons.map((l) => [l.id, l]));

  const bucket = () => ({
    units: [] as Unit[], lessons: [] as Lesson[], items: [] as Item[], scenarios: [] as Scenario[],
    playlists: [] as Playlist[], speakPath: [] as SpeakStage[],
  });
  const core = bucket();
  const bands = new Map<PackName, ReturnType<typeof bucket>>();
  const into = (p: PackName | 'core') => {
    if (p === 'core') return core;
    if (!bands.has(p)) bands.set(p, bucket());
    return bands.get(p)!;
  };

  for (const u of corpus.units) {
    const p = packOfBand(unitBand(u.id));
    if (p === 'core') {
      core.units.push(u);
      continue;
    }
    const sk = skeletonUnit(u, lessonsById);
    core.units.push(sk);
    // The full unit rides in the pack only when the skeleton differs from it,
    // so a lesson-less paid unit does not conjure an otherwise empty pack.
    if (sk !== u) into(p).units.push(u);
  }
  for (const l of corpus.lessons) into(packOfBand(lessonBand(l))).lessons.push(l);

  const pulledDown: Record<string, number> = {};
  for (const i of corpus.items) {
    const home = homes.get(i.id) ?? i.level;
    if (home !== i.level) {
      const k = `${i.level}->${home}`;
      pulledDown[k] = (pulledDown[k] ?? 0) + 1;
    }
    into(packOfBand(home)).items.push(i);
  }
  for (const s of corpus.scenarios ?? []) into(packOfBand(s.level)).scenarios.push(s);
  for (const p of corpus.playlists ?? []) into(packOfBand(p.minLevel)).playlists.push(p);
  for (const s of corpus.speakPath ?? []) into(packOfBand(s.level)).speakPath.push(s);

  const allPapers: ExamPaper[] = corpus.examPapers ?? [];
  const freePapers = allPapers.filter(isFreePaper);
  const freeTaskIds = new Set(freePapers.flatMap((pp) => pp.sections.flatMap((sec) => sec.taskIds ?? [])));
  const freeTasks = (corpus.examTasks ?? []).filter((t) => freeTaskIds.has(t.id));

  const coreCorpus: Corpus = {
    version,
    ...(corpus.domains ? { domains: corpus.domains } : {}),
    ...(corpus.themes ? { themes: corpus.themes } : {}),
    ...(corpus.packs ? { packs: corpus.packs } : {}),
    ...(corpus.templates ? { templates: corpus.templates } : {}),
    units: core.units,
    lessons: core.lessons,
    items: core.items,
    scenarios: core.scenarios,
    playlists: core.playlists,
    speakPath: core.speakPath,
    // Every paper rides in the core: the free ones whole, the rest as outline
    // skeletons (sections and timings, tasks left in the exam pack), so the
    // Examiner can list a paper a learner has not bought, locked. The exam
    // pack's full paper replaces the skeleton on merge (same id).
    ...(allPapers.length
      ? { examPapers: allPapers.map((pp) => (isFreePaper(pp) ? pp : outlinePaper(pp))), examTasks: freeTasks }
      : {}),
  };

  const packs: PackBody[] = [];
  for (const name of PACK_ORDER) {
    if (name === EXAM_PACK) {
      const examPapers: ExamPaper[] = allPapers.filter((pp) => !isFreePaper(pp));
      const examTasks: ExamTask[] = (corpus.examTasks ?? []).filter((t) => !freeTaskIds.has(t.id));
      if (examPapers.length || examTasks.length) {
        packs.push({ version, pack: EXAM_PACK, units: [], lessons: [], items: [], scenarios: [], examPapers, examTasks });
      }
      continue;
    }
    const b = bands.get(name);
    if (!b) continue;
    if (!b.units.length && !b.lessons.length && !b.items.length && !b.scenarios.length && !b.playlists.length && !b.speakPath.length) continue;
    packs.push({ version, pack: name, ...b });
  }

  return { core: coreCorpus, packs, pulledDown };
}

/** Core then every pack in PACK_ORDER, through the app's own mergeCorpus. */
export function mergeSplit(core: Corpus, packs: readonly PackBody[]): Corpus {
  let out = core;
  for (const name of PACK_ORDER) {
    const p = packs.find((x) => x.pack === name);
    if (p) out = mergeCorpus(out, p);
  }
  return out;
}

/** A corpus as a comparable string: every array keyed and sorted, every
 *  object's keys sorted, absent optional arrays read as empty. Two corpora
 *  are the same content exactly when these are equal. */
export function corpusFingerprint(c: Corpus): string {
  const key = (r: unknown) => {
    const o = r as { id?: string; slug?: string };
    return o.id ?? o.slug ?? canonicalJson(r);
  };
  const sorted = (rows: unknown[] | undefined) => [...(rows ?? [])].sort((a, b) => (key(a) < key(b) ? -1 : key(a) > key(b) ? 1 : 0));
  return canonicalJson({
    version: c.version,
    units: sorted(c.units), lessons: sorted(c.lessons), items: sorted(c.items), scenarios: sorted(c.scenarios),
    domains: sorted(c.domains), themes: sorted(c.themes), packs: sorted(c.packs), examTasks: sorted(c.examTasks),
    examPapers: sorted(c.examPapers), playlists: sorted(c.playlists), templates: sorted(c.templates),
    speakPath: sorted(c.speakPath),
  });
}

/** Where every item went, for the exactly-once check: id -> places. */
export function itemPlacements(split: Split): Map<string, string[]> {
  const out = new Map<string, string[]>();
  const add = (id: string, where: string) => out.set(id, [...(out.get(id) ?? []), where]);
  for (const i of split.core.items) add(i.id, 'core');
  for (const p of split.packs) for (const i of p.items) add(i.id, p.pack);
  return out;
}

/* ─── The manifest and the private bucket ─────────────────────────────────── */

/** The PRIVATE bucket packs are uploaded to. Nothing in it is public; the app
 *  reaches a pack only through a 10-minute signed URL from content-pack-url. */
export const PACK_BUCKET = 'content-packs';

/** Where a pack version lives inside PACK_BUCKET. */
export const packPath = (name: PackName, version: number) => `${name}/v${version}.json`;
/** Where a core version lives inside the PUBLIC `content` bucket. */
export const corePath = (version: number) => `core/v${version}.json`;
/** The v2 manifest's name in the public bucket. The legacy `manifest.json`
 *  stays exactly as it was, for installs from before packs. */
export const MANIFEST_V2 = 'manifest-v2.json';

export type PlannedFile = {
  bucket: 'content' | typeof PACK_BUCKET;
  path: string;
  json: string;
  checksum: string;
  bytes: number;
};

/**
 * The manifest for this publish, and exactly which files must be uploaded.
 *
 * A pack whose content did not move since the previous manifest keeps its
 * previous version, path and checksum and is NOT uploaded again, so a device
 * never re-downloads a band that did not change (spec section 4, Updates).
 * "Did not move" is tested exactly: the new body, stamped with the previous
 * version, must hash to the previous checksum.
 */
export function planPublish(args: {
  version: number;
  rollout: number;
  split: Split;
  previous: PacksManifest | null;
  stringify: (v: unknown) => string;
  sha256: (s: string) => string;
}): { manifest: PacksManifest; uploads: PlannedFile[]; reused: PackName[]; coreUnchanged: boolean } {
  const { version, split, previous, stringify, sha256 } = args;
  const bytes = (s: string) => Buffer.byteLength(s, 'utf8');
  const uploads: PlannedFile[] = [];
  const reused: PackName[] = [];

  const coreJson = stringify(split.core);
  const core = { version, path: corePath(version), checksum: sha256(coreJson), bytes: bytes(coreJson) };
  uploads.push({ bucket: 'content', path: core.path, json: coreJson, checksum: core.checksum, bytes: core.bytes });
  // The core carries `version` inside its body, so compare it the way packs are
  // compared: restamped with the previous version. This is the no-op test once
  // the legacy full snapshot is no longer published (v83 on).
  const coreUnchanged = !!previous && sha256(stringify({ ...split.core, version: previous.core.version })) === previous.core.checksum;

  const entries: PackEntry[] = [];
  for (const body of split.packs) {
    const prev = previous?.packs.find((p) => p.name === body.pack);
    if (prev) {
      const asBefore = stringify({ ...body, version: prev.version });
      if (sha256(asBefore) === prev.checksum) {
        entries.push(prev);
        reused.push(body.pack);
        continue;
      }
    }
    const json = stringify(body);
    const entry: PackEntry = { name: body.pack, version, path: packPath(body.pack, version), checksum: sha256(json), bytes: bytes(json) };
    entries.push(entry);
    uploads.push({ bucket: PACK_BUCKET, path: entry.path, json, checksum: entry.checksum, bytes: entry.bytes });
  }

  const manifest: PacksManifest = { schema: 2, version, rollout: args.rollout, core, packs: entries };
  return { manifest, uploads, reused, coreUnchanged };
}
