import './env';
import { Pool } from 'pg';

async function main() {
  const p = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const r = await p.query<{ id: string; fr: string; en: string | null }>(
    `select id, fr, en from content_items where status='published'
      and fr ~* '(connaitre|connait|reconnaitre|reconnait|paraitre|parait|naitre|maitre)' order by id`);
  for (const x of r.rows) console.log(x.id, JSON.stringify(x.fr), '|', JSON.stringify(x.en));
  const q = await p.query<{ n: string }>(
    `select count(*) n from content_items where status='published' and fr ~* 'aître'`);
  console.log('rows with an -aître word:', q.rows[0].n);
  const s = await p.query<{ n: string }>(
    `select count(*) n from content_items where status='published'
      and fr ~* '(connaître|reconnaître|paraître|naître|apparaître|disparaître|renaître|comparaître|réapparaître)'`);
  console.log('rows with a -naître/-paraître verb:', s.rows[0].n);
  await p.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
