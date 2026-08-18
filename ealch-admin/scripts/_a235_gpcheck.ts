import './env';

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const cols = await c.query(
    `select column_name, data_type from information_schema.columns
      where table_name = 'content_items' order by ordinal_position`,
  );
  console.log('  columns: ' + cols.rows.map((r) => `${r.column_name}:${r.data_type}`).join(', '));

  const jsonCol = cols.rows.find((r) => r.data_type === 'jsonb')?.column_name;
  if (!jsonCol) { console.log('  no jsonb column'); c.release(); await pool.end(); return; }

  const r = await c.query(
    `select ${jsonCol}->>'id' as id,
            (${jsonCol} ? 'grammarPoints') as has_key,
            ${jsonCol}->'grammarPoints' as val
       from content_items
      where ${jsonCol}->>'id' in ('fr.a2.symptomes.001','fr.a1.metiers.001','fr.a2.internet.001')`,
  );
  for (const row of r.rows) {
    console.log(`  ${row.id}  key in DB: ${row.has_key}  value: ${JSON.stringify(row.val)}`);
  }
  const n = await c.query(
    `select count(*) filter (where not (${jsonCol} ? 'grammarPoints'))::int as missing,
            count(*)::int as total from content_items`,
  );
  console.log(`  items with NO grammarPoints key in Postgres: ${n.rows[0].missing} of ${n.rows[0].total}`);
  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
