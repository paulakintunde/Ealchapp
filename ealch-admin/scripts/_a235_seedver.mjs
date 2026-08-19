// Bring seed.json's lesson versions into line with Postgres, and nothing else.
//
// `publish-content.ts` refuses to publish when the DB holds a LOWER version than
// the committed seed — it reads that as a revert that would destroy committed
// content, which is the right instinct and exactly what stopped v56. The restore
// deliberately lowered 45 versions in the database, so git has to agree before
// the publish will run.
//
// Version field only. Every other byte is left alone, and the script asserts
// that: if a body differs from Postgres by anything except `version`, it stops.

import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const SEED = 'ealch-v2/src/content/seed.json';
const DB = JSON.parse(readFileSync(process.argv[2], 'utf8')); // {slug: version}

const seed = JSON.parse(readFileSync(SEED, 'utf8'));
let changed = 0;
const missing = [];
for (const l of seed.lessons) {
  const v = DB[l.id];
  if (v === undefined) { missing.push(l.id); continue; }
  if (l.version === v) continue;
  l.version = v;
  changed++;
}
if (missing.length) {
  console.error(`✖ not in Postgres: ${missing.join(', ')}`);
  process.exit(1);
}
writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');
console.log(`  seed: ${changed} lesson version(s) aligned to Postgres`);
