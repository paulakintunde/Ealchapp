// Report every version pin in the ealch-v2 tests against the seed's actual
// value, so the restore's fallout is a list rather than a hunt.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const CONTENT = 'ealch-v2/src/content';
const seed = JSON.parse(readFileSync(join(CONTENT, 'seed.json'), 'utf8'));
const V = new Map(seed.lessons.map((l) => [l.id, l.version]));

for (const f of readdirSync(CONTENT).filter((x) => x.endsWith('.test.ts'))) {
  const txt = readFileSync(join(CONTENT, f), 'utf8');
  // The lesson this file is about: first a?.??.l? literal in a LESSON_ID-ish const.
  const idm = /(?:LESSON_ID|const ID)\s*=\s*'((?:a[12]|b[12]|sons)\.\d+\.l\d)'/.exec(txt)
    ?? /'((?:a[12]|b[12]|sons)\.\d+\.l\d)'/.exec(txt);
  if (!idm) continue;
  const id = idm[1];
  const actual = V.get(id);
  for (const m of txt.matchAll(/\.version,\s*(\d+)/g)) {
    const pinned = Number(m[1]);
    if (actual === undefined) { console.log(`  ${f}: pins v${pinned} for ${id}, which is not in the seed`); continue; }
    if (pinned !== actual) console.log(`  ${f.padEnd(34)} ${id}  pins v${pinned}  seed has v${actual}`);
  }
}
