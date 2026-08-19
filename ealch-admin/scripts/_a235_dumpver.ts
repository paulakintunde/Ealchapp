import './env';
import { writeFileSync } from 'node:fs';
async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const r = await c.query(`select slug, (body->>'version')::int as v from content_units where kind='lesson'`);
  const map: Record<string, number> = {};
  for (const x of r.rows) map[x.slug] = x.v;
  writeFileSync('/tmp/dbver.json', JSON.stringify(map), 'utf8');
  console.log(`  dumped ${r.rowCount} lesson versions`);
  c.release(); await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
