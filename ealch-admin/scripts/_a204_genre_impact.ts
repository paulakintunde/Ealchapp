/* Which of a2.04's imported rows join a1.03's measured ending population, and
 * what each one does to the printed figures.
 *
 * The batch measured the population inside `prepositions-essentielles` against
 * POSTGRES and found it unchanged at zero, which is true and is the wrong
 * question. a1.03's figures are measured off THE SEED, and this build carries
 * rows across the seed cut that were not in it before. A carry is an addition
 * to the seed's population even when it is not an addition to the database's.
 *
 * Compares against the COMMITTED seed rather than the working copy, because the
 * working copy may already hold this build's merge.
 *
 *     git show HEAD:ealch-v2/src/content/seed.json > <path>
 *     pnpm tsx scripts/_a204_genre_impact.ts <path>
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import type { Item } from '../../ealch-v2/src/content/schema.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { DISPLAY_ONLY_IDS, IMPORTED_IDS, ITEM_IMPORT_IDS, PREPOSITIONS_LIEU } from './data/prepositions-lieu-corpus.ts';
import { PREPOSITIONS_LIEU_ROWS } from './data/prepositions-lieu-rows.gen.ts';

const here = dirname(fileURLToPath(import.meta.url));
const BASE = process.argv[2] ?? join(here, '../../ealch-v2/src/content/seed.json');
const base = JSON.parse(readFileSync(BASE, 'utf8')) as { items: Item[]; version: number };

console.log(`baseline seed: ${BASE}`);
console.log(`  version ${base.version}, ${base.items.length} items`);
console.log();

const present = new Set(base.items.map((i) => i.id));

console.log('imports, and whether the baseline seed already holds them:');
let absent = 0;
for (const id of IMPORTED_IDS) {
  const row = PREPOSITIONS_LIEU_ROWS[id]!;
  const g = (row as { gender?: string }).gender;
  const single = !/\s/.test(row.fr);
  const inSeed = present.has(id);
  if (!inSeed) absent += 1;
  const risk = g && single && !inSeed ? '  JOINS a1.03' : '';
  console.log(`  ${inSeed ? 'in seed ' : 'ABSENT  '} ${id.padEnd(36)} ${row.fr.padEnd(20)} ${g ? `g=${g}` : '    '} ${single ? 'single' : 'phrase'}${risk}`);
}
console.log(`\n  ${absent} of ${IMPORTED_IDS.length} imports are absent from the baseline seed.`);
console.log();

const authoredItems = PREPOSITIONS_LIEU.map((r) => {
  const { role, placeKind, ...rest } = r as Record<string, unknown> & { role: string; placeKind?: string };
  void role; void placeKind;
  return rest as unknown as Item;
});

const carryAll = IMPORTED_IDS.map((id) => PREPOSITIONS_LIEU_ROWS[id]!);
const carryItems = ITEM_IMPORT_IDS.map((id) => PREPOSITIONS_LIEU_ROWS[id]!);

const merge = (extra: Item[]): Item[] => {
  const m = new Map(base.items.map((i) => [i.id, i] as const));
  for (const r of extra) m.set(r.id, r);
  return [...m.values()];
};

const popBase = endingPopulation(base.items as never).length;
const popAll = endingPopulation(merge([...carryAll, ...authoredItems]) as never).length;
const popItems = endingPopulation(merge([...carryItems, ...authoredItems]) as never).length;

console.log(`a1.03 ending population, measured off the seed through the real function:`);
console.log(`  baseline                                   ${popBase}`);
console.log(`  carrying every import                      ${popAll}   (${popAll - popBase >= 0 ? '+' : ''}${popAll - popBase})`);
console.log(`  carrying only the rows this lesson owns     ${popItems}   (${popItems - popBase >= 0 ? '+' : ''}${popItems - popBase})`);
console.log();
console.log(`DISPLAY_ONLY_IDS holds ${DISPLAY_ONLY_IDS.length} rows and ITEM_IMPORT_IDS holds ${ITEM_IMPORT_IDS.length}.`);
