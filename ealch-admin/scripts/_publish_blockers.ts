// What exactly would `content:publish` do right now?
//
// check-seed-db-parity.ts says the two copies disagree. This says what each
// disagreement would COST, because "seed only" and "database only" are not the
// same kind of problem: one loses work on publish, the other is merely absent
// from the app.
//
// Reads only.

import './env';
import { describeTarget } from './env';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Lesson } from '../../ealch-v2/src/content/schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as {
  version: number; lessons: Lesson[];
};

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();
  console.log(`\n→ ${describeTarget()}`);
  console.log(`  seed.version ${seed.version}\n`);

  try {
    const rows = await client.query(
      `select slug, status, body->>'version' as version,
              jsonb_array_length(body->'sections') as sections,
              jsonb_array_length(body->'itemIds') as items
         from content_units where kind = 'lesson' order by slug`,
    );
    const db = new Map(rows.rows.map((r) => [r.slug, r]));
    const sd = new Map(seed.lessons.map((l) => [l.id, l]));

    const seedOnly = [...sd.keys()].filter((id) => !db.has(id));
    const dbOnly = [...db.keys()].filter((id) => !sd.has(id));

    console.log('── A publish regenerates seed.json FROM the database ──\n');

    if (seedOnly.length) {
      console.log('  ✖ WOULD BE DESTROYED (in the seed, absent from the database):');
      for (const id of seedOnly) {
        const l = sd.get(id)!;
        console.log(`      ${id}  v${l.version}, ${l.sections.length} sections, ${l.itemIds.length} itemIds`);
      }
    } else {
      console.log('  ✓ nothing would be destroyed');
    }

    if (dbOnly.length) {
      console.log('\n  ! WOULD APPEAR (in the database, absent from the seed):');
      for (const id of dbOnly) {
        const r = db.get(id)!;
        console.log(`      ${id}  status ${r.status}, ${r.sections} sections`);
      }
    }

    // Version drift: which side is ahead on lessons present in both.
    const ahead: string[] = [];
    for (const [id, l] of sd) {
      const r = db.get(id);
      if (!r) continue;
      const dbV = Number(r.version);
      if (Number.isFinite(dbV) && dbV !== l.version) {
        ahead.push(`      ${id}  seed v${l.version} / db v${dbV}  ->  publish makes the seed v${dbV}`);
      }
    }
    if (ahead.length) {
      console.log('\n  ! VERSION DRIFT (publish takes the database side):');
      ahead.forEach((a) => console.log(a));
    }

    console.log(
      `\n  a1.30.l1 in db: ${db.has('a1.30.l1')}   a1.30.l2 in db: ${db.has('a1.30.l2')}` +
      `   status ${db.get('a1.30.l1')?.status} / ${db.get('a1.30.l2')?.status}`,
    );
    console.log(
      seedOnly.length
        ? `\n✖ PUBLISH IS UNSAFE. ${seedOnly.length} lesson(s) would be deleted.\n`
        : '\n✓ publish would destroy nothing.\n',
    );
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
