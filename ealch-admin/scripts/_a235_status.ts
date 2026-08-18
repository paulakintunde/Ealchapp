import './env';
import { describeTarget } from './env';

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  console.log(`  target: ${describeTarget()}`);

  const units = await c.query(
    `select count(*)::int as n from content_units where kind='curriculum_unit'`);
  const lessons = await c.query(
    `select count(*)::int as n, count(*) filter (where status='published')::int as pub
       from content_units where kind='lesson'`);
  const items = await c.query(`select count(*)::int as n from content_items`);
  console.log(`  units ${units.rows[0].n} · lessons ${lessons.rows[0].n} (${lessons.rows[0].pub} published) · items ${items.rows[0].n}`);

  console.log('\n  === a2.35 ===');
  const u = await c.query(
    `select body from content_units where kind='curriculum_unit' and body->>'id'='a2.35'`);
  const b = u.rows[0]?.body;
  console.log(`  unit a2.35  seq ${b?.seq}  lessonIds ${JSON.stringify(b?.lessonIds)}  title "${b?.title}" sub "${b?.sub}"`);
  const ls = await c.query(
    `select slug, status, body->>'version' as v,
            jsonb_array_length(body->'sections') as secs,
            jsonb_array_length(body->'itemIds') as items,
            body->'features' as feats
       from content_units where kind='lesson' and slug like 'a2.35.%' order by slug`);
  for (const r of ls.rows) {
    console.log(`  ${r.slug}  v${r.v}  ${r.status}  ${r.secs} sections  itemIds ${r.items}  features ${JSON.stringify(r.feats)}`);
  }

  console.log('\n  === the four lessons repaired this session ===');
  const four = await c.query(
    `select slug, status, body->>'version' as v, jsonb_array_length(body->'sections') as secs
       from content_units where kind='lesson'
        and slug in ('a2.05.l1','a2.24.l1','a2.28.l1','a2.32.l1') order by slug`);
  for (const r of four.rows) console.log(`  ${r.slug}  v${r.v}  ${r.status}  ${r.secs} sections`);

  console.log('\n  === the five repaired strings, read back from Postgres ===');
  const needles: [string, string][] = [
    ['a2.28.l1', 'partitive'], ['a2.05.l1', 'you conjugate'],
    ['a2.32.l1', 'one referent'], ['a2.24.l1', 'the same auxiliary'],
  ];
  for (const [slug, needle] of needles) {
    const r = await c.query(
      `select (body::text ilike '%' || $2 || '%') as present from content_units where slug=$1`, [slug, needle]);
    console.log(`  ${slug}  still contains "${needle}": ${r.rows[0]?.present}`);
  }

  console.log('\n  === any A2 unit missing a lesson ===');
  const gaps = await c.query(
    `select body->>'id' as id, (body->>'seq')::int as seq
       from content_units where kind='curriculum_unit' and body->>'track'='a2'
        and jsonb_array_length(coalesce(body->'lessonIds','[]'::jsonb)) = 0
      order by 2`);
  console.log(gaps.rowCount ? gaps.rows.map((r) => `${r.id}(seq ${r.seq})`).join(', ') : '  none: every A2 unit carries a lesson');

  console.log('\n  === snapshots ===');
  const snaps = await c.query(
    `select version, created_at from content_snapshots order by version desc limit 3`);
  for (const r of snaps.rows) console.log(`  v${r.version}  ${new Date(r.created_at).toISOString()}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
