/* a2.03 pre-flight, round 2. What the prerequisites already own, measured
 * string by string, and what the -eux / -if families look like in the corpus.
 *
 *     pnpm tsx scripts/_a203_probe2.ts
 */
import './env';
import { Pool } from 'pg';

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 4 });

  // ------------------------------------- 1. what the three prerequisites say
  const lessons = await pool.query(
    `select body from content_units where kind = 'lesson'
       and body->>'id' in ('a1.13.l1','a1.14.l1','a1.16.l1')`);
  const PROBES = [
    'eux', 'euse', 'heureux', 'heureuse', 'sportif', 'sportive', 'sérieux', 'actif',
    'if →', '-if', 'famille', 'family', 'families', 'pattern', 'never change',
    'invariable', 'marron', 'orange', 'chestnut', 'clair', 'foncé',
    'beau', 'belle', 'bel ', 'nouveau', 'nouvelle', 'nouvel', 'vieux', 'vieille', 'vieil',
    'four shapes', 'four forms', 'grands', 'grandes', 'petits', 'petites',
  ];
  console.log('## 1. Prerequisite lessons, string by string (occurrences in the whole body)\n');
  const bodies = new Map<string, string>();
  for (const r of lessons.rows) {
    const b = r.body as Record<string, unknown>;
    bodies.set(String(b.id), JSON.stringify(b));
  }
  const ids = ['a1.13.l1', 'a1.14.l1', 'a1.16.l1'];
  console.log(`  ${'string'.padEnd(16)} ${ids.map((i) => i.padEnd(10)).join('')}`);
  for (const p of PROBES) {
    const counts = ids.map((i) => {
      const hay = bodies.get(i) ?? '';
      return String(hay.toLowerCase().split(p.toLowerCase()).length - 1).padEnd(10);
    });
    console.log(`  ${p.padEnd(16)} ${counts.join('')}`);
  }

  // ------------------ 2. the four-form grid a1.13 and a1.14 already print
  console.log('\n## 2. The grid sections in a1.13 and a1.14, in full\n');
  for (const r of lessons.rows) {
    const b = r.body as Record<string, any>;
    for (const s of (b.sections ?? []) as Record<string, any>[]) {
      if (/grid|table|families|six|sort/.test(String(s.id))) {
        console.log(`\n  --- ${b.id} ${s.id} (${s.type}) "${s.title}" ---`);
        console.log('  ' + JSON.stringify(s).slice(0, 1500));
      }
    }
  }

  // ---------------------------------------- 3. -eux / -if families in sentences
  console.log('\n\n## 3. Feminine -euse / -ive forms in published SENTENCES (with respell)\n');
  const fem = await pool.query(
    `select id, fr, respell, en from content_items
      where kind = 'sentence' and respell is not null
        and fr ~ '[a-zà-ÿ](euse|euses|ive|ives)\\M'
      order by id limit 60`);
  for (const r of fem.rows) console.log(`  ${r.id.padEnd(38)} "${r.fr}"  ${r.respell}`);
  console.log(`  (${fem.rows.length} rows shown)`);

  // ------------------------------ 4. the exact frames this lesson might author
  console.log('\n## 4. Frames already published (does the paradigm exist as sentences?)\n');
  const FRAMES = [
    'Il est heureux', 'Elle est heureuse', 'Ils sont heureux', 'Elles sont heureuses',
    'Il est sportif', 'Elle est sportive', 'Ils sont sportifs', 'Elles sont sportives',
    'Il est grand', 'Elle est grande', 'Ils sont grands', 'Elles sont grandes',
    'est marron', 'sont marron', 'est orange', 'sont orange',
  ];
  for (const f of FRAMES) {
    const r = await pool.query(
      `select count(*)::int as n from content_items where fr ilike '%' || $1 || '%'`, [f]);
    const ex = await pool.query(
      `select id, fr, respell from content_items where fr ilike '%' || $1 || '%' order by id limit 3`, [f]);
    console.log(`  ${f.padEnd(24)} ${String(r.rows[0].n).padStart(3)}  ${ex.rows.map((x: any) => `${x.id} "${x.fr}"${x.respell ? ' [' + x.respell + ']' : ''}`).join(' | ')}`);
  }

  // ---------------------------------- 5. other invariable adjectives in corpus
  console.log('\n## 5. Other invariable adjectives already in the corpus\n');
  for (const w of ['chic', 'snob', 'sympa', 'super', 'cool', 'bleu marine', 'kaki', 'turquoise', 'crème', 'citron']) {
    const r = await pool.query(
      `select id, fr, en, respell, gender, kind from content_items
        where lower(fr) = lower($1) or lower(fr) = lower('le ' || $1) or lower(fr) = lower('la ' || $1)
           or lower(fr) = lower('un ' || $1) or lower(fr) = lower('une ' || $1) order by id`, [w]);
    console.log(`  ${w.padEnd(14)} ${String(r.rows.length).padStart(2)}  ${r.rows.map((x: any) => `${x.id}[${x.kind}]${x.gender ? ' g=' + x.gender : ''} ${x.respell ?? '(no respell)'}`).join(' | ')}`);
  }

  // -------------------------------------------- 6. duplicate-fr risk in theme
  console.log('\n## 6. Every distinct fr already in adjectifs-essentiels (words only)\n');
  const words = await pool.query(
    `select fr from content_items where split_part(id,'.',3)='adjectifs-essentiels'
       and kind = 'word' order by fr`);
  console.log('  ' + words.rows.map((r: any) => r.fr).join(' · '));
  console.log(`\n  (${words.rows.length} word rows)`);

  // ------------------------------------------------------ 7. sentence count
  const sc = await pool.query(
    `select kind, count(*)::int as n from content_items
      where split_part(id,'.',3)='adjectifs-essentiels' group by 1`);
  console.log('\n  adjectifs-essentiels by kind: ' + sc.rows.map((r: any) => `${r.kind}=${r.n}`).join(' '));

  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
