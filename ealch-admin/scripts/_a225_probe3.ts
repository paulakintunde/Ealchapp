import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  const c = await pool.connect();
  console.log('\n== fr.a2.pronoms-essentiels.020..045 ==');
  const { rows } = await c.query("select id, fr, en, kind, respell, notes, drills from content_items where id like 'fr.a2.pronoms-essentiels.0%' and id >= 'fr.a2.pronoms-essentiels.020' and id <= 'fr.a2.pronoms-essentiels.045' order by id");
  for (const r of rows) console.log(`${r.id}  ${r.kind.padEnd(8)} « ${r.fr} »  [${r.respell ?? '-'}]  ${r.en}`);
  console.log('\n== respellings of veux / veut / deux / peux / eux / bleu ==');
  const { rows: v } = await c.query("select respell, count(*)::int n from content_items where status='published' and respell is not null and (respell ~ 'VUH' or respell ~ 'VEU' or respell ~ 'DUH' or respell ~ 'DEU') group by respell order by n desc limit 1");
  for (const w of ['veux','veut','deux','je veux','tu veux','il veut']) {
    const { rows: q } = await c.query("select id, fr, respell from content_items where status='published' and respell is not null and lower(fr)=lower($1)", [w]);
    console.log(`  ${w.padEnd(10)} ${q.map((r) => `${r.respell} (${r.id})`).join(' · ') || 'no headword row'}`);
  }
  for (const pat of ['VEU','VUH','DEU','DUH']) {
    const { rows: q } = await c.query("select count(*)::int n from content_items where status='published' and respell like $1", [`% ${pat}%`]);
    const { rows: q2 } = await c.query("select id, fr, respell from content_items where status='published' and respell like $1 limit 4", [`% ${pat}%`]);
    console.log(`  " ${pat}" appears in ${q[0].n} respellings: ${q2.map((r) => `${r.fr}→${r.respell}`).slice(0,3).join(' · ')}`);
  }
  console.log('\n== how the corpus respells /ø/ in veux ==');
  const { rows: vv } = await c.query("select id, fr, respell from content_items where status='published' and respell is not null and fr ~* '(^| )(je |tu |il |elle |on )?veux( |$)' limit 12");
  for (const r of vv) console.log(`  ${r.id.padEnd(40)} « ${r.fr.slice(0,44)} » [${r.respell}]`);
  console.log('\n== quantity words: beaucoup de / un peu de / assez de / trop de, respelled ==');
  for (const w of ['beaucoup de','un peu de','assez de','trop de','beaucoup','deux','trois']) {
    const { rows: q } = await c.query("select id, fr, respell, theme from content_items where status='published' and lower(fr)=lower($1) and respell is not null limit 3", [w]);
    console.log(`  ${w.padEnd(14)} ${q.map((r) => `${r.respell} (${r.id})`).join(' · ') || 'none'}`);
  }
  console.log('\n== du / de la / des headwords (a1.29) ==');
  const { rows: p } = await c.query("select id, fr, respell, theme from content_items where status='published' and fr in ('du','de la','des','du café','de la confiture','des pommes') order by id");
  for (const r of p) console.log(`  ${r.id.padEnd(44)} « ${r.fr} » [${r.respell ?? '-'}] ${r.theme}`);
  console.log('\n== nasal check on the values this build will write ==');
  for (const [fr, re] of [["j'en veux",'zhahⁿ VUH'],["j'en veux",'zhahⁿ VEU'],["J'en veux deux.",'zhahⁿ VEU DEU'],["J'en veux deux.",'zhahⁿ VUH DUH'],['il y en a encore','EEL YAHⁿ NAH ahⁿ-KOR'],["j'en ai marre",'zhahⁿ-NAY MAHR'],["j'en ai besoin",'ZHAHⁿ NAY buh-ZWEHⁿ'],["j'en ai besoin",'ZHAHⁿ NAY buh-ZWUHⁿ'],["je t'en prie",'zhuh tahⁿ PREE'],["il n'y a plus de pain",'EEL NYAH PLÜ DUH PEHⁿ'],['penser','pahⁿ-SAY'],["j'y pense",'zhee PAHNSS'],["j'y pense",'zhee PAHⁿSS'],["J'y pense souvent.",'zhee PAHⁿSS soo-VAHⁿ'],['Il y en a.','eel ee ahⁿ NAH'],["J'en prends un.",'zhahⁿ PRAHⁿ ZUHⁿ'],["J'en ai une.",'zhahⁿ nay ÜN'],["J'en bois.",'zhahⁿ BWAH'],["J'y joue.",'zhee ZHOO'],["Nous y allons.",'noo zee ah-LOHⁿ']] as [string,string][]) {
    console.log(`  ${fr.padEnd(24)} ${re.padEnd(24)} ${hasPlainNasalFor(fr, re) ? 'FLAGGED' : 'clean'}`);
  }
  c.release(); await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
