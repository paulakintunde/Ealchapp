import './env';
import { Pool } from 'pg';

async function main() {
  const p = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const r = await p.query("select body from content_units where kind='lesson' and body->>'id' = any($1)",
    [['a1.14.l1', 'a1.16.l1', 'a1.13.l1']]);
  for (const row of r.rows) {
    const j = JSON.stringify(row.body);
    const id = (row.body as { id: string }).id;
    for (const w of ['active', 'actif', 'courageux', 'sérieux', 'sportif', 'attentif', 'naïf', 'turquoise', 'kaki', 'crème']) {
      let i = j.toLowerCase().indexOf(w.toLowerCase());
      if (i === -1) continue;
      while (i !== -1) {
        console.log(`${id}  ${w}: ...${j.slice(Math.max(0, i - 80), i + 50)}...`);
        i = j.toLowerCase().indexOf(w.toLowerCase(), i + 1);
      }
    }
  }
  await p.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
