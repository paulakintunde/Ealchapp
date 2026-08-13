/* What actually changed in seed.json when content:publish regenerated it.
 *
 * The raw git diff is forty thousand lines and is almost entirely KEY ORDER:
 * publish rebuilds every record from the database, so JSON.stringify emits the
 * columns in a different order from the merge. Reading that diff tells you
 * nothing.
 *
 * THIS IS THE CHECK THAT FOUND a2.12's MERGE DEFECT. Its merge sorted a drill
 * array as STRINGS while Postgres holds it in ENUM DECLARATION order, so the
 * seed and the database disagreed on three rows the build owned, invisible to
 * every test because nothing compares drill order. It only surfaced when publish
 * rewrote the seed and something compared the before and after by id.
 *
 * Every record is canonicalised by sorted key and compared by id, so ordering
 * falls out and only real changes remain.
 *
 *   pnpm tsx scripts/_a213_publish_diff.ts <before.json>
 *
 * where <before.json> is the pre-publish seed, e.g. from
 *   git show HEAD:ealch-v2/src/content/seed.json > before.json
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const AFTER = join(here, '../../ealch-v2/src/content/seed.json');
const BEFORE = process.argv[2];
if (!BEFORE) { console.error('usage: _a213_publish_diff.ts <before.json>'); process.exit(1); }

/** A record with its keys sorted, recursively, so a reordering compares equal. */
function canon(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(canon);
  if (v && typeof v === 'object') {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(v as Record<string, unknown>).sort()) out[k] = canon((v as Record<string, unknown>)[k]);
    return out;
  }
  return v;
}
const key = (v: unknown) => JSON.stringify(canon(v));

type Seed = { version: number; items: { id: string }[]; lessons: { id: string }[]; units: { id: string }[]; scenarios?: { id: string }[] };
const before = JSON.parse(readFileSync(BEFORE, 'utf8')) as Seed;
const after = JSON.parse(readFileSync(AFTER, 'utf8')) as Seed;

console.log(`\n  seed.version ${before.version} -> ${after.version}\n`);

for (const coll of ['units', 'lessons', 'scenarios', 'items'] as const) {
  const b = (before[coll] ?? []) as { id: string }[];
  const a = (after[coll] ?? []) as { id: string }[];
  const bm = new Map(b.map((x) => [x.id, key(x)] as const));
  const am = new Map(a.map((x) => [x.id, key(x)] as const));

  const added = [...am.keys()].filter((id) => !bm.has(id));
  const dropped = [...bm.keys()].filter((id) => !am.has(id));
  const changed = [...am.keys()].filter((id) => bm.has(id) && bm.get(id) !== am.get(id));

  console.log(`  ${coll.padEnd(10)} ${String(b.length).padStart(5)} -> ${String(a.length).padStart(5)}    added ${added.length}  dropped ${dropped.length}  changed ${changed.length}`);
  for (const id of dropped.slice(0, 10)) console.log(`      DROPPED  ${id}`);
  for (const id of added.slice(0, 10)) console.log(`      added    ${id}`);
  for (const id of changed.slice(0, 12)) {
    console.log(`      CHANGED  ${id}`);
    const bo = JSON.parse(bm.get(id)!) as Record<string, unknown>;
    const ao = JSON.parse(am.get(id)!) as Record<string, unknown>;
    for (const k of new Set([...Object.keys(bo), ...Object.keys(ao)])) {
      const x = JSON.stringify(bo[k]);
      const y = JSON.stringify(ao[k]);
      if (x !== y) console.log(`         ${k}: ${String(x).slice(0, 70)}  ->  ${String(y).slice(0, 70)}`);
    }
  }
}
console.log('');
