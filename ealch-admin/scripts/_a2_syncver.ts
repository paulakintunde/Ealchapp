import seed from '../../ealch-v2/src/content/seed.json' with { type: 'json' };
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
const dir = '../ealch-v2/src/content';
for (const f of readdirSync(dir)) {
  if (!/^a2-.*\.test\.ts$/.test(f)) continue;
  const src = readFileSync(dir + '/' + f, 'utf8');
  const m = src.match(/const LESSON_ID = '([^']+)'/) ?? src.match(/lessons\.find\(\(l[^)]*\) => l\.id === '([^']+)'/);
  if (!m) continue;
  const L: any = (seed as any).lessons.find((l: any) => l.id === m[1]);
  if (!L) continue;
  const out = src.replace(/strictEqual\(L!\.version, (\d+)/g, (mm, n) => (Number(n) === L.version ? mm : 'strictEqual(L!.version, ' + L.version));
  if (out !== src) { writeFileSync(dir + '/' + f, out, 'utf8'); console.log(f, '-> v' + L.version); }
}
