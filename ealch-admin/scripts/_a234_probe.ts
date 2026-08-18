import './env';
import { Pool } from 'pg';
async function main() {
const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
const c = await pool.connect();
const r = await c.query(`select id, fr, en, respell, kind, level, gender, drills, status from content_items
  where theme='pronoms-essentiels' and (id like 'fr.b1.%' or id like 'fr.b2.%') order by id`);
for (const x of r.rows) {
  const n = +x.id.split('.').pop();
  if (x.id.includes('.b1.') && (n < 20 || n > 45)) continue;
  if (x.id.includes('.b2.') && n > 30) continue;
  console.log(`${x.id}  ${x.status}  [${x.kind}/${x.level}] "${x.fr}" = "${x.en}"  respell=${x.respell}  g=${x.gender ?? '-'}  drills=${String(x.drills)}`);
}
await c.release(); await pool.end();
}
main();
