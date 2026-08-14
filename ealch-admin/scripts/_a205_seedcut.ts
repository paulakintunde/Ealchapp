import { readFileSync } from 'node:fs';
import { IMPORTED_IDS, ABSENT_FROM_SEED } from './data/passe-compose-corpus.ts';
const seed = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json', 'utf8')) as { items: { id: string }[] };
const inSeed = new Set(seed.items.map((i) => i.id));
const missing = IMPORTED_IDS.filter((id) => !inSeed.has(id));
console.log(`MISSING ${missing.length}`);
for (const m of missing) console.log(`  ${m}`);
console.log(`CLAIMED BUT PRESENT: ${ABSENT_FROM_SEED.filter((id) => inSeed.has(id)).join(', ') || 'none'}`);
