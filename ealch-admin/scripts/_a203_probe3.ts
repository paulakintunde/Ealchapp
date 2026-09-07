/* a2.03 pre-flight, round 3. sportif/sportive inside phrases, the existing
 * heureux block, and the id-range / row-count baseline for the apply.
 *
 *     pnpm tsx scripts/_a203_probe3.ts
 */
import './env';
import { Pool } from 'pg';

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 4 });

  console.log('## 1. sportif / sportive / sportifs / sportives ANYWHERE (a2.15 §1: absent is not nowhere)\n');
  for (const w of ['sportif', 'sportive', 'sportifs', 'sportives', 'le sport', 'faire du sport']) {
    const r = await pool.query(
      `select id, fr, kind, respell, en from content_items where fr ~* ('\\m' || $1 || '\\M') order by id limit 12`, [w]);
    console.log(`\n  ${w}  (${r.rows.length})`);
    for (const x of r.rows) console.log(`    ${x.id.padEnd(38)} [${x.kind}] "${x.fr}"  ${x.respell ?? '-'}`);
  }

  console.log('\n\n## 2. The heureux / -eux block already in a1.adjectifs-essentiels\n');
  const blk = await pool.query(
    `select id, fr, en, respell, kind, tags, notes from content_items
      where id ~ '^fr\\.a1\\.adjectifs-essentiels\\.(2[5-9][0-9]|3[0-4][0-9])$' order by id`);
  for (const r of blk.rows)
    console.log(`  ${r.id.padEnd(36)} [${r.kind}] "${r.fr}"  ${r.respell ?? '-'}  ${r.en ?? ''}  tags=${JSON.stringify(r.tags)}`);

  console.log('\n## 3. Row counts, for the block check after the apply\n');
  for (const seq of ['fr.a2.adjectifs-essentiels', 'fr.a1.adjectifs-essentiels', 'fr.sons.adjectifs-essentiels', 'fr.a2.couleurs']) {
    const r = await pool.query(`select count(*)::int as n, max(id) as m from content_items where id like $1 || '.%'`, [seq]);
    console.log(`  ${seq.padEnd(32)} n=${r.rows[0].n}  max=${r.rows[0].m ?? '(none)'}`);
  }

  console.log('\n## 4. Every published row whose fr is exactly one of the forms we may import\n');
  const IMPORTS = ['heureux', 'heureuse', 'sérieux', 'actif', 'marron', 'orange', 'chic', 'sympa',
    'bleu clair', 'vert foncé', 'bleu marine', 'turquoise', 'grand', 'grande', 'petit', 'petite',
    'joyeux', 'curieux', 'nerveux', 'poli', 'polie', 'vert', 'verte', 'bleu', 'bleue'];
  for (const w of IMPORTS) {
    const r = await pool.query(
      `select id, fr, en, respell, gender, kind, drills, level, tags from content_items
        where fr = $1 order by id`, [w]);
    for (const x of r.rows)
      console.log(`  ${x.id.padEnd(38)} "${x.fr}" en="${x.en}" respell=${x.respell ?? '-'} g=${x.gender ?? '-'} kind=${x.kind} lvl=${x.level} drills=${JSON.stringify(x.drills)}`);
    if (!r.rows.length) console.log(`  ${w.padEnd(38)} ABSENT as an exact fr`);
  }

  console.log('\n## 5. Does any lesson anywhere already teach -eux -> -euse or -if -> -ive?\n');
  const all = await pool.query(`select body->>'id' as id, body from content_units where kind='lesson'`);
  for (const probe of ['euse', 'ive', 'heureux', 'sportif', 'actif', 'sérieux', 'chic']) {
    const hits = all.rows
      .map((r: any) => [r.id, JSON.stringify(r.body).toLowerCase().split(probe.toLowerCase()).length - 1] as [string, number])
      .filter(([, n]) => n > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([id, n]) => `${id}x${n}`);
    console.log(`  ${probe.padEnd(12)} ${hits.join('  ') || '(none)'}`);
  }

  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
