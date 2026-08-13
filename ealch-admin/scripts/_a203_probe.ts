/* a2.03 pre-flight. Everything the brief marked UNVERIFIED, measured against
 * Postgres in one pass.
 *
 *     pnpm tsx scripts/_a203_probe.ts
 */
import './env';
import { Pool } from 'pg';

const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
function hasPhrase(hay: string, needle: string): boolean {
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = h[i + n.length] ?? '';
    if (!isWord(before) && !isWord(after)) return true;
    i += 1;
  }
  return false;
}

const FORMS = [
  'grand', 'grande', 'grands', 'grandes',
  'petit', 'petite', 'petits', 'petites',
  'heureux', 'heureuse', 'heureuses',
  'sérieux', 'sérieuse', 'sérieuses',
  'nerveux', 'nerveuse', 'amoureux', 'amoureuse', 'dangereux', 'dangereuse',
  'sportif', 'sportive', 'sportifs', 'sportives',
  'actif', 'active', 'actifs', 'actives',
  'neuf', 'neuve', 'naïf', 'naïve',
  'marron', 'orange', 'bleu clair', 'vert foncé', 'bleu foncé', 'vert clair',
  'beau', 'belle', 'nouveau', 'nouvelle', 'vieux', 'vieille', 'bel', 'nouvel', 'vieil',
  'bleu', 'bleue', 'bleus', 'bleues', 'vert', 'verte', 'noir', 'noire', 'rouge', 'jaune',
  'poli', 'polie', 'joli', 'jolie', 'fatigué', 'fatiguée',
];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 4 });

  // ---------------------------------------------------------------- 1. themes
  const themes = await pool.query(
    `select split_part(id,'.',2) as lvl, split_part(id,'.',3) as theme,
            count(*) as n, max(id) as maxid
       from content_items
      where split_part(id,'.',3) in ('adjectifs-essentiels','couleurs','adjectifs','adverbes','description-personnes-objets')
      group by 1,2 order by 2,1`);
  console.log('## 1. Themes and level namespaces (ALL statuses)\n');
  for (const r of themes.rows) console.log(`  fr.${r.lvl}.${r.theme}  n=${r.n}  max=${r.maxid}`);

  const pub = await pool.query(
    `select split_part(id,'.',3) as theme, status, count(*) as n
       from content_items where split_part(id,'.',3) in ('adjectifs-essentiels','couleurs')
      group by 1,2 order by 1,2`);
  console.log('\n  by status:');
  for (const r of pub.rows) console.log(`    ${r.theme.padEnd(22)} ${r.status.padEnd(12)} ${r.n}`);

  // ------------------------------------------------ 2. every form, everywhere
  console.log('\n## 2. Forms as HEADWORDS (kind=word or a bare row), any status\n');
  for (const w of FORMS) {
    const r = await pool.query(
      `select id, kind, status, gender, respell, en, tags, drills
         from content_items
        where lower(fr) = lower($1)
           or lower(fr) = lower('le ' || $1) or lower(fr) = lower('la ' || $1)
           or lower(fr) = lower('un ' || $1) or lower(fr) = lower('une ' || $1)
        order by id`, [w]);
    const cells = r.rows.map((x) =>
      `${x.id}[${x.status}]${x.gender ? ' g=' + x.gender : ''}${x.respell ? ' ' + x.respell : ' (no respell)'}`);
    console.log(`  ${w.padEnd(14)} ${String(r.rows.length).padStart(2)}  ${cells.join('  |  ')}`);
  }

  // ------------------------------------------- 3. invariable marking on colours
  console.log('\n## 3. marron / orange: full rows\n');
  const inv = await pool.query(
    `select id, fr, en, gender, respell, kind, status, tags, notes
       from content_items where lower(fr) similar to '%(marron|orange)%' order by id`);
  for (const r of inv.rows)
    console.log(`  ${r.id}[${r.status}] "${r.fr}" en="${r.en}" g=${r.gender ?? '-'} kind=${r.kind} respell=${r.respell ?? '-'} tags=${JSON.stringify(r.tags)} notes=${r.notes ? String(r.notes).slice(0, 90) : '-'}`);

  // --------------------------------------------------- 4. colour compounds
  console.log('\n## 4. Colour compounds in published sentences (clair / foncé)\n');
  const comp = await pool.query(
    `select id, fr, respell, en from content_items
      where (fr ilike '%clair%' or fr ilike '%foncé%')
        and (fr ilike '%bleu%' or fr ilike '%vert%' or fr ilike '%gris%' or fr ilike '%rouge%' or fr ilike '%jaune%')
      order by id limit 40`);
  for (const r of comp.rows) console.log(`  ${r.id}  "${r.fr}"  ${r.respell ?? '-'}  ${r.en ?? ''}`);
  console.log(`  (${comp.rows.length} rows)`);

  // ----------------------------- 5. -eux/-euse and -if/-ive pairs with respell
  console.log('\n## 5. Adjective rows in adjectifs-essentiels ending -eux/-euse/-if/-ive\n');
  const fams = await pool.query(
    `select id, fr, en, respell, gender, kind, status from content_items
      where split_part(id,'.',3) = 'adjectifs-essentiels'
        and (fr ~ '(eux|euse|euses|ifs?|ives?)$')
        and fr !~ ' '
      order by fr, id`);
  for (const r of fams.rows)
    console.log(`  ${r.id.padEnd(36)} ${r.fr.padEnd(16)} ${(r.respell ?? '-').padEnd(16)} ${r.en ?? ''}${r.gender ? '  g=' + r.gender : ''}`);
  console.log(`  (${fams.rows.length} rows)`);

  // ------------------------------------------------- 6. unit bodies: ownership
  console.log('\n## 6. Which units name the agreement / adverb / beau topics\n');
  const units = await pool.query(
    `select body from content_units where kind = 'curriculum_unit'`);
  const terms = ['accord', 'agree', 'adverb', 'beau', 'nouveau', 'vieux', 'invariable', 'adjective', 'adjectif', '-ment', 'colour', 'color'];
  for (const t of terms) {
    const hits = units.rows
      .map((r) => r.body)
      .filter((b: Record<string, unknown>) => hasPhrase(JSON.stringify(b), t))
      .map((b: Record<string, unknown>) => `${b.id}(seq ${b.seq})`);
    console.log(`  ${t.padEnd(12)} ${hits.join(', ') || '(none)'}`);
  }

  // ------------------------------------------- 7. a1.14 / a1.16 / a1.13 lessons
  console.log('\n## 7. The three prerequisite lessons as shipped\n');
  const lessons = await pool.query(
    `select body from content_units where kind = 'lesson'
       and body->>'id' in ('a1.13.l1','a1.14.l1','a1.16.l1')`);
  for (const r of lessons.rows) {
    const b = r.body as Record<string, any>;
    const secs = (b.sections ?? []) as Record<string, any>[];
    console.log(`\n  ${b.id}  v${b.version}  "${b.title}"  ${secs.length} sections`);
    console.log(`     reframe: ${b.reframe ?? '(none)'}`);
    console.log(`     grammarIntroduced: ${JSON.stringify(b.grammarIntroduced ?? [])}`);
    console.log(`     itemIds: ${(b.itemIds ?? []).length}`);
    console.log(`     section types: ${secs.map((s) => s.type).join(' ')}`);
    console.log(`     titles: ${secs.map((s) => `${s.id}:${s.title ?? ''}`).join(' | ')}`);
  }

  // ------------------------------------ 8. does a1.16 already teach four forms?
  console.log('\n## 8. Do the prerequisites already print a four-form grid?\n');
  for (const r of lessons.rows) {
    const b = r.body as Record<string, any>;
    const json = JSON.stringify(b);
    for (const probe of ['grandes', 'heureuse', 'sportive', 'marron', 'invariable', 'four forms', 'plural', 'feminine']) {
      const n = (json.toLowerCase().split(probe.toLowerCase()).length - 1);
      if (n) console.log(`  ${b.id}  "${probe}"  x${n}`);
    }
  }

  // --------------------------------------------- 9. a1.03 ending population risk
  console.log('\n## 9. Gendered single-word rows we might add (a1.03 hazard)\n');
  const gcount = await pool.query(
    `select count(*) from content_items where gender is not null and kind='word' and fr !~ ' '`);
  console.log(`  gendered single-word rows in postgres: ${gcount.rows[0].count}`);

  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
