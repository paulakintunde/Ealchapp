import './env';

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const r = await c.query(
    `select slug, body->>'version' as v, jsonb_array_length(body->'sections') as s
       from content_units where kind='lesson'
        and slug in ('a2.05.l1','a2.24.l1','a2.28.l1','a2.32.l1','a2.35.l1','a2.35.l2')
      order by slug`,
  );
  for (const row of r.rows) console.log(`  ${row.slug}  v${row.v}  ${row.s} sections`);
  const n = await c.query('select count(*)::int as n from content_items');
  console.log(`  content_items ${n.rows[0].n}`);
  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
