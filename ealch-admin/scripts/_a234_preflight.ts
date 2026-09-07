import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { fold } from '../../ealch-v2/src/content/answer.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';

const FORMS: [string, string][] = [
  ['le mien','luh myehn'], ['la mienne','lah myehn'], ['les miens','lay myehn'], ['les miennes','lay myehn'],
  ['le tien','luh tyehn'], ['la tienne','lah tyehn'], ['les tiennes','lay tyehn'], ['les tiens','lay tyehn'],
  ['le sien','luh syehn'], ['la sienne','lah syehn'], ['les siens','lay syehn'], ['les siennes','lay syehn'],
  ['le nôtre','luh NOH-truh'], ['les nôtres','lay NOH-truh'],
  ['le vôtre','luh VOH-truh'], ['les vôtres','lay VOH-truh'],
  ["c'est le leur",'seh luh LUHR'], ["c'est la leur",'seh lah LUHR'], ['les leurs','lay LUHR'],
];
const CANDIDATE_REPAIRS: [string,string,string][] = [
  ['le mien','luh myehn','luh MYEHⁿ'],
  ['la mienne','lah myehn','lah MYEHN'],
  ['les miens','lay myehn','lay MYEHⁿ'],
  ['les miennes','lay myehn','lay MYEHN'],
  ['le tien','luh tyehn','luh TYEHⁿ'],
  ['la tienne','lah tyehn','lah TYEHN'],
  ['les tiennes','lay tyehn','lay TYEHN'],
  ['le sien','luh syehn','luh SYEHⁿ'],
  ['la sienne','lah syehn','lah SYEHN'],
  ['les siens','lay syehn','lay SYEHⁿ'],
  ['les siennes','lay syehn','lay SYEHN'],
];
const hubNorm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();

async function main() {
console.log('=== 1. hasPlainNasalFor over the STORED respellings ===');
for (const [fr, rs] of FORMS) console.log(`  ${hasPlainNasalFor(fr, rs) ? 'FLAGGED  ' : 'clean    '} ${fr.padEnd(14)} ${rs}`);

console.log('\n=== 2. the candidate repairs, all three states ===');
for (const [fr, from, to] of CANDIDATE_REPAIRS) {
  console.log(`  ${fr.padEnd(13)} from=${from.padEnd(13)}${hasPlainNasalFor(fr,from)?'FLAG':'ok  '}  to=${to.padEnd(13)}${hasPlainNasalFor(fr,to)?'FLAG':'ok  '}`);
}

console.log('\n=== 3. hubNorm collisions across all 19 forms ===');
const seen = new Map<string,string>();
for (const [fr] of FORMS) { const k = hubNorm(fr); if (seen.has(k)) console.log(`  COLLIDE: "${seen.get(k)}" and "${fr}" both -> "${k}"`); else seen.set(k, fr); }
for (const extra of ['le leur','la leur','la nôtre','la vôtre']) {
  const k = hubNorm(extra); console.log(`  would-author "${extra}" -> "${k}" ${seen.has(k)?`COLLIDES with "${seen.get(k)}"`:'free'}`);
}

console.log('\n=== 4. fold(): what a typed surface can separate ===');
const PAIRS: [string,string][] = [
  ['le mien','la mienne'], ['le mien','les miens'], ['les miens','les miennes'],
  ['la mienne','les miennes'], ['le nôtre','le notre'], ['le vôtre','votre'],
  ['le leur','les leurs'], ['le leur','la leur'], ["c'est le mien","c'est a moi"],
  ['le nôtre','la nôtre'], ['notre','nôtre'],
];
for (const [a,b] of PAIRS) console.log(`  ${fold(a)===fold(b)?'COLLIDE ':'distinct'}  "${a}" vs "${b}"   -> ${fold(a)} | ${fold(b)}`);

console.log('\n=== 5. dicteeMode on candidate targets ===');
for (const s of ["C'est le mien.","C'est la mienne.","C'est le tien.","C'est à moi.","Le sac est le mien.","La valise est la mienne.","Les gants sont les miens.","Les clés sont les miennes.","C'est le sien.","C'est le nôtre.","Ce sont les leurs.","Les miens sont ici.","Les miennes sont ici.","C'est la tienne.","C'est le leur."]) {
  console.log(`  ${dicteeMode(s).padEnd(8)} ${s.replace(/[^A-Za-zÀ-ÿ]/g,'').length.toString().padStart(2)}  ${s}`);
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
const c = await pool.connect();
console.log('\n=== 6. à moi / à toi / à lui / à elle / à eux across the corpus ===');
for (const p of ['à moi','à toi','à lui','à elle','à nous','à vous','à eux']) {
  const r = await c.query(`select id, fr, en, drills from content_items where status='published' and fr ilike $1 order by id limit 6`, [`%${p}%`]);
  const n = await c.query(`select count(*)::int n from content_items where status='published' and fr ilike $1`, [`%${p}%`]);
  console.log(`  "${p}" ${n.rows[0].n} rows`);
  for (const x of r.rows) console.log(`      ${x.id}  "${x.fr}"  {${String(x.drills)}}`);
}
console.log('\n=== 7. unseen-noun candidates: rows carrying them WITH a possessive ===');
for (const noun of ['parapluie','écharpe','casquette','ceinture','cravate','montre','portefeuille','trousse']) {
  const all = await c.query(`select count(*)::int n from content_items where status='published' and fr ilike $1`, [`%${noun}%`]);
  const withPoss = await c.query(`select id, fr from content_items where status='published' and fr ilike $1 and (fr ~* '(mien|tien|sien|n[oô]tre|v[oô]tre|leurs?)\M') limit 3`, [`%${noun}%`]);
  const head = await c.query(`select id, fr, gender, kind from content_items where status='published' and kind<>'sentence' and (fr = $1 or fr = $2 or fr = $3)`, [noun, `le ${noun}`, `la ${noun}`]);
  console.log(`  ${noun.padEnd(13)} rows=${String(all.rows[0].n).padStart(3)}  withPossessive=${withPoss.rowCount}  headword=${head.rows.map(h=>`${h.id}"${h.fr}"/${h.gender}`).join(' ')||'NONE'}`);
  for (const x of withPoss.rows) console.log(`        !! ${x.id} "${x.fr}"`);
}
await c.release(); await pool.end();
}
main();
