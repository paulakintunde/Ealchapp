import './env';
import { Pool } from 'pg';
const F = ['mien','mienne','miens','miennes','tien','tienne','tiens','tiennes','sien','sienne','siens','siennes','nôtre','nôtres','vôtre','vôtres','leur','leurs','à moi','à toi','à lui','à elle'];
function hasWord(s: string, w: string) {
  const L = s.toLowerCase(), n = w.toLowerCase(); let i = 0;
  const isL = (ch?: string) => !!ch && /[\p{L}\p{N}'’-]/u.test(ch);
  while ((i = L.indexOf(n, i)) !== -1) {
    if (!isL(L[i-1]) && !isL(L[i+n.length])) return true; i += 1;
  }
  return false;
}
async function main() {
const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
const c = await pool.connect();
// 1. every a2-level pronoms-essentiels row mentioning a possessive form
const r = await c.query(`select id, fr, en, respell, kind, drills from content_items where status='published' and (theme='pronoms-essentiels' or theme='comparaisons') and id like 'fr.a2.%' order by id`);
console.log('=== a2 rows in pronoms-essentiels + comparaisons carrying a possessive form ===');
let n = 0;
for (const x of r.rows) {
  const hits = F.filter(w => hasWord(x.fr, w));
  if (!hits.length) continue;
  n++;
  console.log(`${x.id}  [${x.kind}] {${String(x.drills)}}\n    "${x.fr}"\n    "${x.en}"  respell=${x.respell ?? '-'}   << ${hits.join(', ')}`);
}
console.log(`\n  ${n} rows.`);
// 2. is there any headword `leur` / `le leur` anywhere in pronoms-essentiels?
const q2 = await c.query(`select id, fr, kind, level from content_items where status='published' and theme='pronoms-essentiels' and kind <> 'sentence' and (fr ilike '%leur%' or fr ilike '%nôtre%' or fr ilike '%vôtre%' or fr ilike '%tien%') order by id`);
console.log('\n=== every non-sentence pronoms-essentiels row with leur/nôtre/vôtre/tien ===');
for (const x of q2.rows) console.log(`  ${x.id} [${x.kind}/${x.level}] "${x.fr}"`);
// 3. row count baseline
const q3 = await c.query(`select theme, count(*)::int n from content_items where theme in ('pronoms-essentiels','comparaisons') group by theme`);
console.log('\n=== row counts (ALL statuses) ==='); for (const x of q3.rows) console.log(`  ${x.theme}: ${x.n}`);
await c.release(); await pool.end();
}
main();
