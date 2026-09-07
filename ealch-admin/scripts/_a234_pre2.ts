import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
function hasWord(s: string, w: string) {
  const L = s.toLowerCase().normalize('NFC'), n = w.toLowerCase().normalize('NFC'); let i = 0;
  const isL = (ch?: string) => !!ch && /[\p{L}\p{N}'’-]/u.test(ch);
  while ((i = L.indexOf(n, i)) !== -1) { if (!isL(L[i-1]) && !isL(L[i+n.length])) return true; i += 1; }
  return false;
}
async function main() {
const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
const c = await pool.connect();
console.log('=== notre / votre / mon / ma / mes headwords + respellings ===');
const r = await c.query(`select id, fr, en, respell, theme, gender, kind from content_items
 where status='published' and kind<>'sentence' and fr = any($1::text[]) order by fr, id`,
 [['notre','votre','nos','vos','mon','ma','mes','ton','ta','tes','son','sa','ses','leur','leurs','le mien','mien','mienne']]);
for (const x of r.rows) console.log(`  ${x.id.padEnd(38)} "${x.fr}" = "${x.en}" ${x.respell ?? '-'}  [${x.kind}] g=${x.gender??'-'} theme=${x.theme}`);

console.log('\n=== whole-word "à moi" etc, possession sense ===');
const all = await c.query(`select id, fr, en, drills, theme from content_items where status='published' and fr ilike '%à %'`);
for (const p of ['à moi','à toi','à lui','à elle','à nous','à vous','à eux','à elles']) {
  const hits = all.rows.filter(x => hasWord(x.fr, p));
  console.log(`  "${p}" ${hits.length} whole-word rows`);
  for (const x of hits.slice(0,4)) console.log(`      ${x.id} "${x.fr}"  {${String(x.drills)}}`);
}

console.log('\n=== scene nouns: headword + gender + any possessive-pronoun collision ===');
for (const n of ['le sac','la valise','le manteau','le téléphone','les gants','les clés','la casquette','le parapluie','la trousse','le portable','la veste']) {
  const h = await c.query(`select id, fr, gender, kind, theme, respell from content_items where status='published' and kind<>'sentence' and fr=$1`, [n]);
  console.log(`  ${n.padEnd(15)} ${h.rows.map(x=>`${x.id}/${x.gender}/${x.respell}`).join(' ') || 'NO HEADWORD'}`);
}

console.log('\n=== rows in ANY theme carrying a possessive PRONOUN (whole word), by level ===');
const poss = ['le mien','la mienne','les miens','les miennes','le tien','la tienne','les tiens','les tiennes','le sien','la sienne','les siens','les siennes','le nôtre','la nôtre','les nôtres','le vôtre','la vôtre','les vôtres','le leur','la leur','les leurs'];
const cnt: Record<string, number> = {};
const rows = await c.query(`select id, fr, level, theme, drills from content_items where status='published'`);
const hitRows: any[] = [];
for (const x of rows.rows) for (const p of poss) if (hasWord(x.fr, p)) { cnt[x.level]=(cnt[x.level]??0)+1; hitRows.push([x.id,x.fr,String(x.drills)]); break; }
console.log('  by level:', JSON.stringify(cnt));
console.log(`  a2-level rows carrying one:`);
for (const [id,fr,d] of hitRows) if (id.includes('.a2.')) console.log(`      ${id} {${d}}  "${fr}"`);

console.log('\n=== theme row counts right now ===');
const t = await c.query(`select count(*)::int n from content_items where theme='pronoms-essentiels' and status='published'`);
const t2 = await c.query(`select count(*)::int n from content_items where theme='pronoms-essentiels' and id like 'fr.a2.%' and status='published'`);
console.log(`  pronoms-essentiels: ${t.rows[0].n} published, a2 slice ${t2.rows[0].n}`);
await c.release(); await pool.end();
}
main();
