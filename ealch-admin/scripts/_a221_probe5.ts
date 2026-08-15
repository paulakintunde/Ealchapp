import './env';
import { Pool } from 'pg';
import { ETRE_VERBS } from './data/passe-compose-etre-corpus.ts';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const alt = ETRE_VERBS.flatMap((v) => v.cells).join('|');
const pat = `(^|[^[:alpha:]])(suis|es|est|sommes|êtes|sont) +(${alt})([^[:alpha:]]|$)`;
const main = async () => {
  const { rows } = await pool.query(
    `select id, fr, respell, level, theme from content_items where status='published'
       and respell is not null and respell <> '' and level in ('a1','a2') and fr ~* $1 order by id`, [pat]);
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${String(r.fr).padEnd(50)} [${r.respell}]`);
  const { rows: t } = await pool.query(
    `select count(*)::int n from content_items where theme='rp-recits-temps' and status='published' and fr ~* $1`, [pat]);
  console.log(`\n  rp-recits-temps with être + a cell: ${t[0].n}`);
  await pool.end();
};
main().catch((e) => { console.error(e); process.exit(1); });
