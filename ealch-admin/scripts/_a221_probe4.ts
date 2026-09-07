import './env';
import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const main = async () => {
  const { rows } = await pool.query(
    `select fr, id, theme, level, status, respell, ipa, en, gender, kind, drills from content_items
      where fr in ('être','avoir') and kind='word' order by fr, id`);
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(7)} ${r.id.padEnd(40)} ${String(r.level).padEnd(4)} [${r.respell ?? ''}] ${r.ipa ?? ''} g=${r.gender ?? '-'} ${JSON.stringify(r.drills)}`);
  await pool.end();
};
main().catch((e) => { console.error(e); process.exit(1); });
