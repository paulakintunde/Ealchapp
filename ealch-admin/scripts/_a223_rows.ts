/* Throwaway: read the candidate import rows for a2.23 out of Postgres. */
import './env';
import { Pool } from 'pg';

const ids = [
  'fr.a2.corps.001', 'fr.a2.corps.002', 'fr.a2.corps.006', 'fr.a1.corps.209',
  'fr.a2.routines.032', 'fr.a2.routines.039', 'fr.a2.routines.049',
  'fr.a1.rp-recits-temps.180', 'fr.a1.rp-recits-temps.066', 'fr.a1.rp-recits-temps.199',
  'fr.a2.recits-au-passe.075', 'fr.a1.heure-et-date.050',
  'fr.a1.routines.019', 'fr.a1.routines.028', 'fr.a1.routines.001', 'fr.a1.routines.020',
  'fr.a1.routines.010', 'fr.a1.routines.011', 'fr.a1.routines.012', 'fr.a1.routines.034',
  'fr.a1.routines.087', 'fr.a1.cuisine.183',
  'fr.sons.verbes-essentiels.001', 'fr.sons.verbes-essentiels.002',
  'fr.a1.corps.001', 'fr.a2.corps.003',
];

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function main() {
  const c = await pool.connect();
  const r = await c.query(
    'select id, kind, level, theme, fr, en, respell, gender, status, drills from content_items where id = any($1) order by id',
    [ids],
  );
  for (const x of r.rows as Record<string, unknown>[]) {
    console.log([
      String(x.id).padEnd(30),
      String(x.kind ?? '').padEnd(8),
      String(x.level ?? '').padEnd(4),
      String(x.gender ?? '-').padEnd(2),
      `[${String(x.respell ?? '')}]`.padEnd(28),
      String(x.status).padEnd(9),
      String(x.drills ?? '').padEnd(38),
      String(x.fr),
      ' || ',
      String(x.en),
    ].join(' '));
  }
  const found = new Set(r.rows.map((x: Record<string, unknown>) => String(x.id)));
  console.log('\nfound', r.rows.length, 'of', ids.length);
  for (const id of ids) if (!found.has(id)) console.log('  MISSING:', id);
  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
