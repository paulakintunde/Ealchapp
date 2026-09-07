/* Throwaway: do a2.23's AUTHORED rows have the same drill order in Postgres as
 * in seed.json? The batch writes `it.drills` as declared; the merge writes
 * drillOrder(it.drills). If DRILL_KINDS order differs from the declared order,
 * every one of the 43 rows differs between the two copies. */
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { AUTHORED_IDS, IMPORTED_IDS } from './data/pronominaux-passe-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as {
  items: { id: string; drills: string[] }[];
};
const bySeed = new Map(seed.items.map((i) => [i.id, i.drills]));

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function main() {
  const c = await pool.connect();
  const ids = [...AUTHORED_IDS, ...IMPORTED_IDS];
  const r = await c.query('select id, drills::text[] as drills from content_items where id = any($1) order by id', [ids]);
  let same = 0;
  const diffs: string[] = [];
  for (const row of r.rows as { id: string; drills: string[] }[]) {
    const s = bySeed.get(row.id);
    if (!s) { diffs.push(`${row.id}  NOT IN SEED`); continue; }
    if (JSON.stringify(s) === JSON.stringify(row.drills)) same += 1;
    else diffs.push(`${row.id}\n    pg   ${JSON.stringify(row.drills)}\n    seed ${JSON.stringify(s)}`);
  }
  console.log(`\n  ${same} of ${r.rows.length} rows have IDENTICAL drill order in Postgres and the seed`);
  console.log(`  ${diffs.length} DIVERGE:\n`);
  for (const d of diffs) console.log(`  ${d}`);
  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
