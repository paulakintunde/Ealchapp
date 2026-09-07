import './env';

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  console.log('  === units by track: how many carry a lesson ===');
  const r = await c.query(
    `select body->>'track' as track,
            count(*)::int as units,
            count(*) filter (where jsonb_array_length(coalesce(body->'lessonIds','[]'::jsonb)) > 0)::int as built
       from content_units where kind='curriculum_unit'
      group by 1 order by 1`);
  for (const x of r.rows) {
    const gap = x.units - x.built;
    console.log(`  ${String(x.track ?? '(none)').padEnd(6)} ${String(x.built).padStart(3)}/${String(x.units).padStart(3)} built${gap ? `   ${gap} WITHOUT A LESSON` : ''}`);
  }

  console.log('\n  === units with no lesson, by track and seq ===');
  const g = await c.query(
    `select body->>'track' as track, (body->>'seq')::int as seq, body->>'id' as id, body->>'title' as title
       from content_units where kind='curriculum_unit'
        and jsonb_array_length(coalesce(body->'lessonIds','[]'::jsonb)) = 0
      order by 1, 2`);
  if (!g.rowCount) console.log('  none');
  for (const x of g.rows) console.log(`  ${x.track}  seq ${String(x.seq).padStart(2)}  ${x.id}  ${x.title}`);

  console.log('\n  === lesson rows by status ===');
  const s = await c.query(
    `select status, count(*)::int as n from content_units where kind='lesson' group by 1 order by 2 desc`);
  for (const x of s.rows) console.log(`  ${String(x.status).padEnd(12)} ${x.n}`);

  console.log('\n  === latest published snapshot vs what a publish would make ===');
  const snap = await c.query(`select max(version)::int as v from content_snapshots`);
  console.log(`  content_snapshots max version: ${snap.rows[0].v}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
