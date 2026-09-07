import './env';
import { Pool } from 'pg';

async function main() {
  const p = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await p.connect();
  const r = await c.query<{ id: string; kind: string; theme: string; fr: string; en: string; respell: string | null }>(
    `select id, kind, theme, fr, en, respell from content_items where status='published'
       and fr ~* '(^|[^a-zà-ÿ])(bats|battons|battez|battent|combattons|combattent|battre|combattre)([^a-zà-ÿ]|$)'
     order by id`);
  console.log(`${r.rowCount} row(s)`);
  for (const x of r.rows) console.log(`  ${x.id} [${x.theme}] ${x.kind}\n      ${JSON.stringify(x.fr)}\n      respell=${JSON.stringify(x.respell)}  en=${JSON.stringify(x.en)}`);
  c.release();
  await p.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
