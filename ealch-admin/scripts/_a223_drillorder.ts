/* Throwaway: does the merge's drillOrder() match what Postgres actually holds
 * for the two imported rows whose order it normalised? a2.12's trap. */
import './env';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function main() {
  const c = await pool.connect();
  const r = await c.query(
    'select id, drills::text[] as drills from content_items where id = any($1) order by id',
    [['fr.a2.corps.001', 'fr.a2.routines.049']],
  );
  for (const row of r.rows as { id: string; drills: string[] }[]) {
    console.log(row.id, '->', JSON.stringify(row.drills));
  }
  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
