/* Which of this build's imports the seed cut is missing. a2.05 §6: predict
 * nothing about the cut, measure it.
 *     pnpm tsx scripts/_a220_seedcut.ts
 */
import { readFileSync } from 'node:fs';
import { ITEM_IMPORT_IDS, ABSENT_FROM_SEED } from './data/participes-corpus.ts';

const seed = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json', 'utf8')) as { version: number; items: { id: string }[] };
const inSeed = new Set(seed.items.map((i) => i.id));
const absent = ITEM_IMPORT_IDS.filter((id) => !inSeed.has(id)).sort();
console.log(`seed v${seed.version}, ${seed.items.length} items`);
console.log(`${absent.length} of ${ITEM_IMPORT_IDS.length} imports absent:`);
for (const a of absent) console.log(`  '${a}',`);
const stale = ABSENT_FROM_SEED.filter((id) => !absent.includes(id));
if (stale.length) console.log(`STALE in ABSENT_FROM_SEED (present, or not an import): ${stale.join(', ')}`);
