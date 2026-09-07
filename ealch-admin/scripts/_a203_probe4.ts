/* a2.03 pre-flight, round 4. The frame, the duplicate-fr risk, and whether the
 * three "unseen" adjectives are genuinely unseen.
 */
import './env';
import { Pool } from 'pg';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const GRID = [
  ['Il est grand.', 'eel eh GRAHⁿ'],
  ['Elle est grande.', 'el eh GRAHⁿD'],
  ['Ils sont grands.', 'eel sohⁿ GRAHⁿ'],
  ['Elles sont grandes.', 'el sohⁿ GRAHⁿD'],
  ['Il est sérieux.', 'eel eh say-RYUH'],
  ['Elle est sérieuse.', 'el eh say-RYUHZ'],
  ['Ils sont sérieux.', 'eel sohⁿ say-RYUH'],
  ['Elles sont sérieuses.', 'el sohⁿ say-RYUHZ'],
  ['Il est sportif.', 'eel eh spor-TEEF'],
  ['Elle est sportive.', 'el eh spor-TEEV'],
  ['Ils sont sportifs.', 'eel sohⁿ spor-TEEF'],
  ['Elles sont sportives.', 'el sohⁿ spor-TEEV'],
  ['Il est marron.', 'eel eh mah-ROHⁿ'],
  ['Elle est marron.', 'el eh mah-ROHⁿ'],
  ['Ils sont marron.', 'eel sohⁿ mah-ROHⁿ'],
  ['Elles sont marron.', 'el sohⁿ mah-ROHⁿ'],
];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 3 });

  console.log('## 1. The sixteen grid cells: dictée mode and nasal visibility\n');
  console.log(`  ${'fr'.padEnd(24)} ${'letters'.padEnd(8)} ${'mode'.padEnd(8)} respell            nasal seen?`);
  for (const [fr, respell] of GRID) {
    const n = letterCount(fr);
    const mode = dicteeMode(fr);
    const seen = respell.includes('ⁿ')
      ? (hasPlainNasalFor(fr, respell.replace(/ⁿ/g, 'n')) ? 'SEEN' : 'BLIND')
      : '(no nasal)';
    console.log(`  ${fr.padEnd(24)} ${String(n).padEnd(8)} ${String(mode).padEnd(8)} ${respell.padEnd(18)} ${seen}`);
  }

  console.log('\n## 2. Do any of the sixteen already exist ANYWHERE?\n');
  for (const [fr] of GRID) {
    const r = await pool.query(`select id, split_part(id,'.',3) th from content_items where fr = $1`, [fr]);
    console.log(`  ${fr.padEnd(24)} ${r.rows.length ? r.rows.map((x: { id: string; th: string }) => `${x.id}[${x.th}]`).join(' ') : 'free'}`);
  }

  console.log('\n## 3. Duplicate-fr risk inside adjectifs-essentiels (flashhub strips the article)\n');
  const strip = (s: string) => s.replace(/^(le |la |les |l'|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const theme = await pool.query(
    `select id, fr from content_items where split_part(id,'.',3) = 'adjectifs-essentiels'`);
  const have = new Map<string, string[]>();
  for (const r of theme.rows) {
    const k = strip(r.fr);
    have.set(k, [...(have.get(k) ?? []), r.id]);
  }
  const dupsToday = [...have.entries()].filter(([, ids]) => ids.length > 1);
  console.log(`  theme holds ${theme.rows.length} rows, ${have.size} distinct stripped fr`);
  console.log(`  PRE-EXISTING duplicates in the theme: ${dupsToday.length}`);
  for (const [k, ids] of dupsToday.slice(0, 12)) console.log(`    "${k}"  ${ids.join(' ')}`);
  const MINE = [...GRID.map(([f]) => f), 'sportif', 'sportive', 'sérieuse'];
  console.log('\n  my planned rows against the theme:');
  for (const m of MINE) {
    const hit = have.get(strip(m));
    console.log(`    ${m.padEnd(24)} ${hit ? 'COLLIDES with ' + hit.join(' ') : 'free'}`);
  }

  console.log('\n## 4. Are courageux / actif / turquoise genuinely unseen by the prerequisites?\n');
  const pre = await pool.query(
    `select body->>'id' id, body from content_units where kind='lesson'
       and body->>'id' in ('a1.13.l1','a1.14.l1','a1.16.l1')`);
  for (const w of ['courageux', 'courageuse', 'actif', 'active', 'turquoise', 'kaki', 'crème', 'bleu marine', 'sérieux', 'sérieuse', 'sportif', 'sportive']) {
    const hits = pre.rows
      .map((r: { id: string; body: unknown }) => [r.id, JSON.stringify(r.body).toLowerCase().split(w.toLowerCase()).length - 1] as [string, number])
      .filter(([, n]) => n > 0).map(([id, n]) => `${id}x${n}`);
    const inCorpus = await pool.query(`select count(*)::int n from content_items where fr = $1`, [w]);
    console.log(`  ${w.padEnd(14)} prereq lessons: ${(hits.join(' ') || 'NONE').padEnd(28)} corpus headword rows: ${inCorpus.rows[0].n}`);
  }

  console.log('\n## 5. a1.13 itemIds: does it already release the invariable colours we want cold?\n');
  const a113 = pre.rows.find((r: { id: string }) => r.id === 'a1.13.l1');
  const ids: string[] = ((a113?.body as { itemIds?: string[] })?.itemIds) ?? [];
  const rows = await pool.query(`select id, fr from content_items where id = any($1)`, [ids]);
  console.log(`  a1.13 itemIds (${ids.length}): ` + rows.rows.map((r: { fr: string }) => r.fr).join(' · '));

  console.log('\n## 6. The rows we plan to import, with their live respell\n');
  const IMPORTS = [
    'fr.sons.adjectifs-essentiels.037', 'fr.a1.emotions.001', 'fr.sons.muettes.053',
    'fr.sons.adjectifs-essentiels.001', 'fr.sons.muettes.047', 'fr.sons.couleurs.011',
    'fr.sons.couleurs.009', 'fr.sons.couleurs.013', 'fr.sons.couleurs.030',
    'fr.sons.couleurs.026', 'fr.sons.couleurs.019', 'fr.sons.couleurs.022',
    'fr.sons.adjectifs-essentiels.266', 'fr.sons.adjectifs-essentiels.096',
    'fr.sons.adjectifs-essentiels.052', 'fr.sons.adjectifs-essentiels.118',
    'fr.sons.adjectifs-essentiels.234', 'fr.sons.adjectifs-essentiels.261',
    'fr.a1.couleurs.269', 'fr.a1.couleurs.271', 'fr.a2.description-personnes-objets.003',
    'fr.a2.description-personnes-objets.004', 'fr.a1.adjectifs-essentiels.268',
    'fr.a1.adjectifs-essentiels.271', 'fr.sons.couleurs.032',
  ];
  const imp = await pool.query(
    `select id, fr, en, respell, gender, kind, level, drills::text[] drills, tags, status
       from content_items where id = any($1) order by id`, [IMPORTS]);
  for (const r of imp.rows) {
    const blind = r.respell && r.respell.includes('ⁿ')
      ? (hasPlainNasalFor(r.fr, String(r.respell).replace(/ⁿ/g, 'n')) ? 'seen' : 'BLIND')
      : (r.respell && /[aeiouAEIOU][nm]\b/.test(r.respell) ? 'PLAIN-N?' : '-');
    console.log(`  ${r.id.padEnd(40)} "${r.fr}" | ${r.respell ?? '(none)'} | g=${r.gender ?? '-'} ${r.kind} ${JSON.stringify(r.drills)} ${blind}`);
  }
  const missing = IMPORTS.filter((i) => !imp.rows.some((r: { id: string }) => r.id === i));
  if (missing.length) console.log(`  MISSING: ${missing.join(' ')}`);

  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
