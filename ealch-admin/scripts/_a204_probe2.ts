import './env';
import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
async function main() {
  const c = await pool.connect();
  const L: string[] = [];
  const say = (s = '') => L.push(s);

  say('## A. Preposition headwords');
  for (const w of ['chez', 'à', 'en', 'au', 'aux', 'de', 'du', 'des', 'vers', 'jusqu\'à', 'le vétérinaire', 'le généraliste', 'la tante', 'le copain', 'la copine', 'les voisins', 'le professeur', 'la ville', 'le pays', 'la capitale']) {
    const r = await c.query(`select id, theme, respell, gender, status, kind, drills from content_items where lower(fr)=lower($1) order by id`, [w]);
    if (!(r.rowCount ?? 0)) { say(`  ${w.padEnd(16)} ABSENT`); continue; }
    say(`  ${w.padEnd(16)} ${r.rowCount ?? 0} rows  ` + (r.rows as any[]).map(x => `${x.id}[${x.respell ?? 'NO RESPELL'}${x.gender?` g=${x.gender}`:''}${x.status!=='published'?` ${x.status}`:''}] drills=${JSON.stringify(x.drills)}`).join('  '));
  }
  say();

  say('## B. Who owns fr.a2.pays-et-nationalites.* and fr.a2.prepositions-essentielles.*');
  for (const p of ['fr.a2.pays-et-nationalites.', 'fr.a2.prepositions-essentielles.']) {
    const r = await c.query(`select id, fr, kind, status, respell from content_items where id like $1||'%' order by id`, [p]);
    say(`  ${p}  ${r.rowCount} rows`);
    for (const x of (r.rows as any[]).slice(0, 12)) say(`    ${x.id.padEnd(40)} ${x.kind.padEnd(9)} ${x.fr}`);
    if ((r.rowCount ?? 0) > 12) say(`    ... and ${(r.rowCount ?? 0) - 12} more`);
    // gaps
    const nums = (r.rows as any[]).map(x => Number(x.id.split('.').pop()));
    const gaps: number[] = [];
    for (let i = 1; i <= Math.max(...nums); i++) if (!nums.includes(i)) gaps.push(i);
    say(`    max=${Math.max(...nums)}  gaps=${gaps.join(',') || 'none'}  NEXT FREE=${Math.max(...nums) + 1}`);
  }
  say();

  say('## C. prepositions-essentielles: a1.21 rows and what level tag they carry');
  const r2 = await c.query(`select level, count(*)::int n from content_items where theme='prepositions-essentielles' group by 1 order by 1`);
  say('  ' + (r2.rows as any[]).map(x => `${x.level}=${x.n}`).join('  '));
  say();

  say('## D. Rows holding a preposition + a CITY, card-ready (respell not null)');
  for (const t of ['à Paris', 'de Paris', 'à Lyon', 'à Montréal', 'à Marseille']) {
    const r = await c.query(`select id, fr, respell from content_items where status='published' and respell is not null and fr ~* ('\y'||$1||'\y') order by id limit 6`, [t]);
    say(`  ${t.padEnd(12)} ${r.rowCount} card-ready`);
    for (const x of r.rows as any[]) say(`      ${x.id.padEnd(40)} ${x.fr}   [${x.respell}]`);
  }
  say();

  say('## E. chez rows that are CARD-READY (respell not null)');
  const r3 = await c.query(`select id, theme, fr, respell, kind, drills, gender from content_items where status='published' and respell is not null and fr ~* '\ychez\y' order by id`);
  say(`  ${r3.rowCount} rows`);
  for (const x of r3.rows as any[]) say(`    ${x.id.padEnd(42)} ${x.kind.padEnd(9)} ${x.fr}   [${x.respell}]  drills=${JSON.stringify(x.drills)}${x.gender?` g=${x.gender}`:''}`);
  say();

  say('## F. Card-ready rows for the à/au/aux + place set');
  for (const t of ['au restaurant', 'au cinéma', 'à la maison', 'au marché', 'au parc', 'à la gare', "à l'école", 'au bureau', 'à la banque']) {
    const r = await c.query(`select id, fr, respell from content_items where status='published' and respell is not null and fr ~* ('\y'||$1||'\y') order by id limit 4`, [t]);
    say(`  ${t.padEnd(14)} ${r.rowCount}`);
    for (const x of r.rows as any[]) say(`      ${x.id.padEnd(40)} ${x.fr}   [${x.respell}]`);
  }
  console.log(L.join('\n'));
  c.release(); await pool.end();
}
main().catch(e => { console.error(e); process.exit(1); });
