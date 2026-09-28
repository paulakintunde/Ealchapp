// THE TEST CORPUS: seed.json plus the paid layer. TEST AND TOOLING ONLY.
//
// Nothing the app bundles may import this file (it reads the disk with
// node:fs). Tests import it; so do the publisher and the band merge in
// ealch-admin, which WRITE the layer.
//
// ── Why it exists ───────────────────────────────────────────────────────────
//
// Premium content packs (ealch-admin/PREMIUM-PACKS-SPEC.md) turn seed.json into
// the free CORE on the first `content:publish --packs`: sons and a1 in full,
// every paid unit as a skeleton, no a2/b1/b2 lesson body. About fifty content
// tests read A2 and B1 lessons and items straight out of seed.json. Pointed at
// the core, some go red and, worse, many go quietly GREEN: a guard that skips
// when its lesson is absent stops guarding anything (measured: 154 tests
// vanished from the run, 368 failed).
//
// So the corpus the tests read is two committed files:
//
//   seed.json         what the binary bundles (legacy cut, or the free core)
//   seed-packs.json   the PAID LAYER: every row of the test cut that the
//                     bundled seed does not carry, or carries differently
//                     (a paid unit's full body over its skeleton)
//
// composed with the app's own mergeCorpus, the same overlay a subscriber's
// device runs when its packs land. `content:publish` writes BOTH files from
// the database in one run (so they cannot disagree), and the band merge
// (b1-merge-into-seed.ts) writes both when it adds a lesson under packs.
//
// Before the first --packs publish the layer is EMPTY and seedPlusPacks() is
// seed.json exactly: today's suite runs unchanged.
//
// ── Which tests read what ───────────────────────────────────────────────────
//
// A test about CONTENT (does a2.04.l1 teach chez correctly, does every item
// resolve) reads seedPlusPacks(). A test about the BINARY (does the bundle
// validate on a free, offline, fresh install; does it ship the free exam
// papers) reads seed.json, and says which regime it is in via seedRegime().
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Corpus } from './schema';
import { canonicalJson } from './schema.ts';
import { mergeCorpus } from '../services/content.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));

export const SEED_PATH = resolve(here, 'seed.json');
export const PACKS_LAYER_PATH = resolve(here, 'seed-packs.json');

/** The Corpus arrays a layer can carry, in schema order. */
const ARRAYS = [
  'units', 'lessons', 'items', 'scenarios', 'domains', 'themes', 'packs',
  'examTasks', 'examPapers', 'playlists', 'templates', 'speakPath',
] as const;
type ArrayKey = (typeof ARRAYS)[number];

/** How a row of each array is keyed, matching mergeCorpus (domains and themes
 *  by slug, everything else by id). */
const keyOf = (k: ArrayKey, r: unknown): string => {
  const o = r as { id?: string; slug?: string };
  return String(k === 'domains' || k === 'themes' ? o.slug : o.id);
};

/** A layer with nothing in it: what seed-packs.json holds before packs. */
export function emptyLayer(version: number): Corpus {
  // A layer is an overlay, not a corpus: the arrays it has nothing for are
  // left out, and mergeCorpus reads an absent array as empty.
  return { version, units: [], lessons: [], items: [] } as unknown as Corpus;
}

/** Whether a layer carries any row at all. */
export function layerIsEmpty(layer: Corpus | null | undefined): boolean {
  if (!layer) return true;
  return ARRAYS.every((k) => !((layer as Record<string, unknown>)[k] as unknown[] | undefined)?.length);
}

/**
 * THE PAID LAYER: every row of `full` (the test cut) that `seed` (the bundled
 * cut) does not hold, or holds in a different form. Rows keep `full`'s order.
 * Only non-empty arrays are written besides the three required ones, so the
 * file stays diffable.
 *
 * mergeCorpus(seed, layer) then holds every row of `full`, each exactly as
 * `full` has it. It can also hold rows `full` does not (a skeleton unit the
 * core carries for a unit the test cut left out); the tests read that as the
 * trail a learner sees, which is what it is.
 */
export function packsLayer(full: Corpus, seed: Corpus): Corpus {
  const out: Record<string, unknown> = { version: full.version, units: [], lessons: [], items: [] };
  for (const k of ARRAYS) {
    const mine = ((full as Record<string, unknown>)[k] as unknown[] | undefined) ?? [];
    if (!mine.length) continue;
    const bundled = new Map<string, string>();
    for (const r of ((seed as Record<string, unknown>)[k] as unknown[] | undefined) ?? []) bundled.set(keyOf(k, r), canonicalJson(r));
    const rows = mine.filter((r) => bundled.get(keyOf(k, r)) !== canonicalJson(r));
    if (rows.length || k === 'units' || k === 'lessons' || k === 'items') out[k] = rows;
  }
  return out as Corpus;
}

/** seed + layer, through the app's own merge. An empty or absent layer
 *  returns the seed itself, untouched (not even re-keyed), so the legacy
 *  regime is byte-for-byte what the tests always read. */
export function composeTestCorpus(seed: Corpus, layer: Corpus | null | undefined): Corpus {
  if (layerIsEmpty(layer)) return seed;
  return mergeCorpus(seed, layer);
}

/** Which regime the committed files are in. `packs` once a --packs publish
 *  (or a packs-regime merge) has written a non-empty layer. */
export type SeedRegime = 'legacy' | 'packs';
export function regimeOf(layer: Corpus | null | undefined): SeedRegime {
  return layerIsEmpty(layer) ? 'legacy' : 'packs';
}

/* ─── The disk, read once per process ─────────────────────────────────────── */

let seedCache: Corpus | null = null;
let layerCache: Corpus | null | undefined;
let composedCache: Corpus | null = null;

/** The bundled seed, as the binary carries it. */
export function readSeed(): Corpus {
  seedCache ??= JSON.parse(readFileSync(SEED_PATH, 'utf8')) as Corpus;
  return seedCache;
}

/** The committed paid layer, or null when the file is absent. */
export function readPacksLayer(): Corpus | null {
  if (layerCache === undefined) {
    layerCache = existsSync(PACKS_LAYER_PATH) ? (JSON.parse(readFileSync(PACKS_LAYER_PATH, 'utf8')) as Corpus) : null;
  }
  return layerCache;
}

export function seedRegime(): SeedRegime {
  return regimeOf(readPacksLayer());
}

/** THE corpus a content test reads: seed.json plus the paid layer. Typed
 *  loosely on purpose: every caller narrows it to its own row types. */
export function seedPlusPacks<T = Corpus>(): T {
  composedCache ??= composeTestCorpus(readSeed(), readPacksLayer());
  return composedCache as unknown as T;
}
