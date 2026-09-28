// THE BAND MERGE UNDER BOTH SEED REGIMES. Pure; b1-merge-into-seed.ts (B1 and
// `--band b2`) is the I/O around it.
//
//   legacy   seed.json is the SEED_CUT (a2 as a track, b1/b2 unit by unit) and
//            seed-packs.json is empty. A merge writes seed.json exactly as it
//            always has, and a unit must be named in SEED_CUT.units, or the
//            next publish cuts it straight back out of the seed.
//
//   packs    seed.json is the free CORE: every paid unit a skeleton, no paid
//            lesson body. The paid rows the tests read live in seed-packs.json
//            (ealch-v2/src/content/seed-plus-packs.ts). A merge puts the full
//            unit, the lesson and the items the core lacks in the LAYER, and
//            the unit's skeleton (outline included) in seed.json, which is
//            exactly where the next --packs publish puts them. No unit list:
//            the layer is cut with TEST_CUT, which holds every band, so a
//            published unit of any band survives the next publish.
//
// Which regime is in force is read off the committed layer (empty = legacy),
// the same test seedRegime() applies for the app suite.
import type { Lesson, Unit } from '../../ealch-v2/src/content/schema.ts';
import { unitBand } from '../../ealch-v2/src/content/schema.ts';
import type { SeedRegime } from '../../ealch-v2/src/content/seed-plus-packs.ts';
import { SEED_CUT, TEST_CUT, type SeedCut } from './seed-cut.config.ts';
import { skeletonUnit } from './content-packs.logic.ts';
import { mergeIntoSeed, sameDoc, sameItem, type MergeStats, type Obj, type SeedLike } from './b1-import.logic.ts';

/** The cut the next publish applies to what this merge writes. */
export function mergeCutFor(regime: SeedRegime): SeedCut {
  return regime === 'packs' ? TEST_CUT : SEED_CUT;
}

/** Unit ids the next publish would cut out of what the merge writes: neither
 *  in one of the cut's tracks nor named in its unit list. */
export function unitsOutsideCut(unitIds: readonly string[], cut: Pick<SeedCut, 'tracks' | 'units'>): string[] {
  return unitIds.filter((id) => !(cut.tracks as readonly string[]).includes(unitBand(id) ?? '') && !cut.units.includes(id));
}

/** Why a unit outside the cut is refused, per regime. */
export function outsideCutMessage(regime: SeedRegime, ids: readonly string[]): string {
  return regime === 'packs'
    ? `${ids.join(', ')} not in any TEST_CUT track (seed-cut.config.ts). The next --packs publish would drop them from seed-packs.json.`
    : `${ids.join(', ')} not in SEED_CUT.units (seed-cut.config.ts). The next publish would drop them from the seed again.`;
}

export type PacksMergeStats = MergeStats & {
  /** Skeletons written into seed.json (the core), added or replaced. */
  skeletonsAdded: string[];
  skeletonsReplaced: string[];
  /** Referenced rows the core seed already carries identically: not copied
   *  into the layer (the composed test corpus reads them from the core). */
  itemsInCore: number;
};

/**
 * The packs-regime merge. `seed` is seed.json (the core), `layer` is
 * seed-packs.json; `add` is what the legacy merge would have carried.
 *
 *   units    full unit into the layer (in place, or appended); its skeleton,
 *            outlined from the layer's lessons, into seed.json
 *   lessons  into the layer, under the same version rule (mergeIntoSeed)
 *   items    a row the core holds identically stays in the core only; a row
 *            the core holds DIFFERENTLY goes to the layer when this merge owns
 *            it (the layer overlays the core in the test corpus) and is left
 *            alone otherwise; every other row goes to the layer
 *
 * Returns NEW documents; the inputs are not mutated.
 */
export function mergeIntoPacksLayer(
  seed: SeedLike,
  layer: SeedLike,
  add: { units: Obj[]; lessons: Obj[]; items: Obj[] },
  ownedItem: (id: string) => boolean,
): { seed: SeedLike; layer: SeedLike; stats: PacksMergeStats } {
  const core = new Map(seed.items.map((i) => [i.id as string, i]));
  const toLayer: Obj[] = [];
  const leftAloneInCore: string[] = [];
  let itemsInCore = 0;
  for (const it of add.items) {
    const c = core.get(it.id as string);
    if (!c) { toLayer.push(it); continue; }
    if (sameItem(c, it)) { itemsInCore++; continue; }
    if (ownedItem(it.id as string)) toLayer.push(it);
    else leftAloneInCore.push(it.id as string);
  }

  const merged = mergeIntoSeed(layer, { units: add.units, lessons: add.lessons, items: toLayer }, ownedItem);

  const lessonsById = new Map<string, Lesson>();
  for (const l of [...seed.lessons, ...merged.seed.lessons]) lessonsById.set(l.id as string, l as unknown as Lesson);
  const units = [...seed.units];
  const skeletonsAdded: string[] = [];
  const skeletonsReplaced: string[] = [];
  for (const u of add.units) {
    const sk = skeletonUnit(u as unknown as Unit, lessonsById) as unknown as Obj;
    const i = units.findIndex((x) => x.id === sk.id);
    if (i < 0) { units.push(sk); skeletonsAdded.push(sk.id as string); continue; }
    if (sameDoc(units[i], sk)) continue;
    units[i] = sk;
    skeletonsReplaced.push(sk.id as string);
  }

  const stats: PacksMergeStats = {
    ...merged.stats,
    itemsUnchanged: merged.stats.itemsUnchanged + itemsInCore,
    itemsLeftAlone: [...leftAloneInCore, ...merged.stats.itemsLeftAlone],
    skeletonsAdded, skeletonsReplaced, itemsInCore,
  };
  return { seed: { ...seed, units }, layer: merged.seed, stats };
}
