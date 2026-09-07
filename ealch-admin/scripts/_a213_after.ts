/* Where the corpus stands after a2.13 published, and whether anything has landed
 * since. Read-only.
 *
 * Run because a CONCURRENT a2.14 BUILD IS IN FLIGHT: thirteen untracked files
 * exist in this working tree that a2.13 did not write. The invariant that
 * matters is the one a1.20 lost an hour to — a concurrent lesson landing INSIDE
 * a claimed id block, which a highest-id check cannot see. So the row count is
 * read, not the maximum.
 *
 *   pnpm tsx scripts/_a213_after.ts
 */
import './env';
import { Pool } from 'pg';

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  console.log('\n## fr.a2.verbes, by ledger block\n');
  const BLOCKS: [string, string, string][] = [
    ['a2.01', 'fr.a2.verbes.101', 'fr.a2.verbes.140'],
    ['a2.09', 'fr.a2.verbes.141', 'fr.a2.verbes.180'],
    ['a2.10', 'fr.a2.verbes.181', 'fr.a2.verbes.220'],
    ['a2.11', 'fr.a2.verbes.221', 'fr.a2.verbes.260'],
    ['a2.02', 'fr.a2.verbes.261', 'fr.a2.verbes.300'],
    ['a2.12', 'fr.a2.verbes.301', 'fr.a2.verbes.340'],
    ['a2.13', 'fr.a2.verbes.341', 'fr.a2.verbes.380'],
    ['a2.14', 'fr.a2.verbes.381', 'fr.a2.verbes.420'],
    ['a2.15', 'fr.a2.verbes.421', 'fr.a2.verbes.460'],
    ['a2.10.l2', 'fr.a2.verbes.461', 'fr.a2.verbes.500'],
  ];
  for (const [unit, from, to] of BLOCKS) {
    const r = await c.query<{ n: string }>('select count(*) n from content_items where id >= $1 and id <= $2', [from, to]);
    console.log(`  ${unit.padEnd(9)} ${from.slice(-3)}..${to.slice(-3)}  ${String(r.rows[0].n).padStart(3)} rows`);
  }
  const total = await c.query<{ n: string }>("select count(*) n from content_items where id like 'fr.a2.verbes.%'");
  console.log(`  TOTAL                    ${String(total.rows[0].n).padStart(3)} rows  (ledger: 310 after a2.13)`);

  console.log('\n## A2 lessons in Postgres, in trail order\n');
  const les = await c.query<{ slug: string; status: string; v: number; secs: number }>(
    `select slug, status, (body->>'version')::int v, jsonb_array_length(body->'sections') secs
       from content_units where kind = 'lesson' and slug like 'a2.%' order by slug`,
  );
  for (const r of les.rows) console.log(`  ${r.slug.padEnd(10)} v${r.v} ${r.status.padEnd(10)} ${r.secs} sections`);

  console.log('\n## Which A2 units still have no lesson\n');
  const u = await c.query<{ id: string; seq: number; title: string; n: number }>(
    `select body->>'id' id, (body->>'seq')::int seq, body->>'title' title,
            coalesce(jsonb_array_length(body->'lessonIds'), 0) n
       from content_units where kind = 'curriculum_unit' and body->>'level' = 'a2'
      order by 2`,
  );
  const open = u.rows.filter((r) => !r.n);
  console.log(`  ${u.rows.length - open.length} built, ${open.length} open`);
  for (const r of open.slice(0, 8)) console.log(`    seq ${String(r.seq).padStart(2)}  ${r.id.padEnd(6)} ${r.title}`);

  console.log('\n## Where `il faut` could go, since no unit owns it\n');
  for (const id of ['a2.19', 'a2.35', 'a2.05']) {
    const row = u.rows.find((x) => x.id === id);
    const body = await c.query<{ b: Record<string, unknown> }>(
      "select body b from content_units where kind='curriculum_unit' and body->>'id' = $1", [id]);
    console.log(`  ${id}  seq ${row?.seq}  ${row?.title}`);
    console.log(`        canDo: ${JSON.stringify(body.rows[0]?.b.canDo)}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
