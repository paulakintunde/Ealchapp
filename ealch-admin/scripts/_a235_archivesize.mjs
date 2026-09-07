// Measure what an EAS upload would actually contain, by applying the root
// .easignore to a real walk and summing bytes. Prunes ignored DIRECTORIES
// rather than filtering at the end, so it does not descend into node_modules.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { createRequire } from 'node:module';

const ROOT = process.argv[2];
const req = createRequire(join(ROOT, 'ealch-v2', 'package.json'));
const ignore = req('ignore');
const ig = ignore().add(readFileSync(join(ROOT, '.easignore'), 'utf8'));

let bytes = 0; let files = 0; let pruned = 0;
const byTop = new Map();

function walk(dir) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    const full = join(dir, e.name);
    const rel = relative(ROOT, full).split(sep).join('/');
    if (!rel) continue;
    if (ig.ignores(e.isDirectory() ? `${rel}/` : rel)) { pruned++; continue; }
    if (e.isDirectory()) { walk(full); continue; }
    try {
      const n = statSync(full).size;
      bytes += n; files++;
      const top = rel.split('/').slice(0, 2).join('/');
      byTop.set(top, (byTop.get(top) ?? 0) + n);
    } catch { /* unreadable */ }
  }
}
walk(ROOT);

const mb = (n) => (n / 1024 / 1024).toFixed(1);
console.log(`\n  upload would contain ${files} files, ${mb(bytes)} MB uncompressed`);
console.log(`  (${pruned} entries pruned by .easignore)\n`);
console.log('  biggest contributors:');
for (const [k, v] of [...byTop.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10)) {
  console.log(`    ${mb(v).padStart(7)} MB  ${k}`);
}
console.log('');
