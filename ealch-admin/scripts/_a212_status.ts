import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8'));

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  console.log('## POSTGRES — a2.12');
  const l = await c.query("select slug, status, (body->>'version')::int v, jsonb_array_length(body->'sections') secs, jsonb_array_length(body->'itemIds') items, updated_at from content_units where kind='lesson' and slug='a2.12.l1'");
  console.log('  lesson  ', JSON.stringify(l.rows[0] ?? null));
  const u = await c.query("select body->'lessonIds' ids from content_units where kind='curriculum_unit' and body->>'id'='a2.12'");
  console.log('  unit    lessonIds', JSON.stringify(u.rows[0]?.ids));
  const it = await c.query("select count(*) n from content_items where id >= 'fr.a2.verbes.301' and id <= 'fr.a2.verbes.325' and status='published'");
  console.log('  rows    ', it.rows[0].n, 'of 25 published in .301..325');
  const blk = await c.query("select count(*) n from content_items where id like 'fr.a2.verbes.%'");
  console.log('  theme   fr.a2.verbes total', blk.rows[0].n);

  console.log('\n## SEED (on disk, uncommitted)');
  console.log('  version', seed.version, '|', seed.items.length, 'items |', seed.lessons.length, 'lessons');
  const sl = seed.lessons.find((x: any) => x.id === 'a2.12.l1');
  console.log('  a2.12.l1 v' + sl.version, sl.sections.length, 'sections,', sl.itemIds.length, 'items');

  console.log('\n## PUBLISH — content_snapshots');
  const snaps = await c.query("select * from content_snapshots order by version desc limit 3");
  for (const s of snaps.rows) console.log(' ', JSON.stringify(Object.fromEntries(Object.entries(s).filter(([k]) => !['body','payload','data','manifest'].includes(k)))).slice(0, 240));
  console.log('  seed.json on disk is at version', seed.version, '=> a2.12 is NOT in any published snapshot');

  console.log('\n## THE REST OF BATCH 1');
  const units = await c.query("select body->>'id' id, (body->>'seq')::int seq, body->>'title' t, body->'lessonIds' ids from content_units where kind='curriculum_unit' and body->>'level'='a2' order by 2");
  for (const r of units.rows.slice(0, 10)) {
    const n = (r.ids as string[]).length;
    console.log(`  seq ${String(r.seq).padStart(2)}  ${r.id}  ${n ? 'BUILT (' + n + ')' : 'not started'}   ${r.t}`);
  }
  c.release(); await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
