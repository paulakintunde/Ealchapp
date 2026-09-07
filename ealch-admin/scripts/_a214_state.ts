import './env';
import { Pool } from 'pg';

async function main() {
  const p = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const r = await p.query<{ slug: string; v: number; n: number }>(
    `select slug, (body->>'version')::int v, jsonb_array_length(body->'sections') n
       from content_units where kind='lesson' and slug in ('a2.13.l1','a2.14.l1') order by slug`);
  for (const x of r.rows) console.log(`  postgres ${x.slug}  v${x.v}  ${x.n} sections`);
  await p.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
