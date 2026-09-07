// a2.08 pre-flight, round 4: drill populations, gender, duplicate fr, and the
// unseen-adjective candidates.
import './env';

function hasWord(haystack: string, needle: string): boolean {
  const h = haystack.toLowerCase().normalize('NFC');
  const n = needle.toLowerCase().normalize('NFC');
  let from = 0;
  for (;;) {
    const i = h.indexOf(n, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : h[i - 1];
    const after = h[i + n.length] ?? ' ';
    if (!/[a-zà-ÿœæ]/.test(before) && !/[a-zà-ÿœæ]/.test(after)) return true;
    from = i + 1;
  }
}
const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const r = await c.query<{ id: string; fr: string; en: string; kind: string; level: string; gender: string | null; respell: string | null; drills: unknown; card_type: string | null; tags: unknown }>(
      `select id, fr, en, kind, level, gender, respell, drills, card_type, tags
         from content_items where theme='comparaisons' and status='published' order by id`);
    console.log(`comparaisons published: ${r.rows.length}`);

    console.log('\n=== DRILL POPULATIONS in fr.a2.comparaisons.* ===');
    const pop: Record<string, string[]> = {};
    for (const x of r.rows.filter((y) => y.id.startsWith('fr.a2.'))) {
      const sig = toArray(x.drills).sort().join('+') || '(none)';
      (pop[sig] ??= []).push(x.id);
    }
    for (const k of Object.keys(pop).sort()) {
      const ids = pop[k].sort();
      console.log(`  ${k.padEnd(34)} n=${String(ids.length).padStart(3)}  ${ids[0]} .. ${ids[ids.length - 1]}`);
      if (ids.length <= 25) console.log(`      ${ids.map((i) => i.split('.').pop()).join(',')}`);
    }

    console.log('\n=== GENDER / cardType ON THE NON-SENTENCE comparaisons ROWS ===');
    for (const x of r.rows.filter((y) => y.kind !== 'sentence')) {
      console.log(`  ${x.id.padEnd(30)} ${x.kind.padEnd(7)} ${x.level.padEnd(3)} gender=${String(x.gender ?? '-').padEnd(3)} cardType=${String(x.card_type ?? '-').padEnd(6)} drills=${toArray(x.drills).join('+')}  "${x.fr}"`);
    }

    console.log('\n=== DUPLICATE fr WITHIN comparaisons (all levels, non-sentence, article-stripped) ===');
    const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
    const seen = new Map<string, string>();
    for (const x of r.rows) {
      if (x.kind === 'sentence') continue;
      const k = norm(x.fr);
      if (seen.has(k)) console.log(`  DUP  ${seen.get(k)} vs ${x.id}  "${x.fr}"`);
      else seen.set(k, x.id);
    }
    console.log('  (nothing above means the theme is clean today)');

    console.log('\n=== DUPLICATE fr AMONG SENTENCES (informational; sentences are exempt) ===');
    const s2 = new Map<string, string>();
    for (const x of r.rows.filter((y) => y.kind === 'sentence')) {
      if (s2.has(x.fr)) console.log(`  ${s2.get(x.fr)} vs ${x.id}  "${x.fr}"`);
      else s2.set(x.fr, x.id);
    }

    const all = await c.query<{ id: string; fr: string; en: string; theme: string; kind: string; respell: string | null; gender: string | null; drills: unknown }>(
      `select id, fr, en, theme, kind, respell, gender, drills from content_items where status='published'`);

    console.log('\n=== UNSEEN-ADJECTIVE CANDIDATES: absent from comparaisons entirely? ===');
    for (const w of ['poli', 'utile', 'lent', 'sale', 'faible', 'sûr', 'court', 'froid']) {
      const inTheme = all.rows.filter((x) => x.theme === 'comparaisons' && hasWord(x.fr, w));
      const inThemeF = all.rows.filter((x) => x.theme === 'comparaisons' && (hasWord(x.fr, `${w}e`) || hasWord(x.fr, `${w}s`)));
      const head = all.rows.filter((x) => x.kind !== 'sentence' && x.fr.toLowerCase() === w);
      console.log(`  ${w.padEnd(8)} in comparaisons: ${inTheme.length} (+${inThemeF.length} inflected)   headwords: ${head.map((h) => `${h.id}=${h.respell ?? '-'}`).join(' | ') || 'none'}`);
      for (const x of [...inTheme, ...inThemeF].slice(0, 3)) console.log(`      ${x.id} "${x.fr}"`);
    }

    console.log('\n=== a2.17 / a2.03 IMPORT LISTS: do they hold my unseen candidate? ===');
    console.log('  (checked in source separately)');

    console.log('\n=== EXISTING fr.a2.comparaisons SENTENCES I INTEND TO IMPORT: drills ===');
    for (const id of ['fr.a2.comparaisons.001', 'fr.a2.comparaisons.004', 'fr.a2.comparaisons.009',
      'fr.a2.comparaisons.029', 'fr.a2.comparaisons.031', 'fr.a2.comparaisons.055',
      'fr.a2.comparaisons.063', 'fr.a2.comparaisons.066', 'fr.a2.comparaisons.092',
      'fr.a2.comparaisons.037', 'fr.a2.comparaisons.041', 'fr.a2.comparaisons.048',
      'fr.a2.comparaisons.086', 'fr.a2.comparaisons.088', 'fr.a2.comparaisons.102',
      'fr.a2.comparaisons.103', 'fr.a2.comparaisons.112', 'fr.a2.comparaisons.006',
      'fr.a2.comparaisons.015', 'fr.a2.comparaisons.021', 'fr.a2.comparaisons.026',
      'fr.a2.comparaisons.061', 'fr.a2.comparaisons.068', 'fr.a2.comparaisons.071',
      'fr.a2.comparaisons.081', 'fr.a2.comparaisons.082', 'fr.a2.comparaisons.083']) {
      const x = all.rows.find((y) => y.id === id);
      console.log(`  ${id.padEnd(30)} ${x ? `${x.kind.padEnd(8)} drills=${toArray(x.drills).sort().join('+').padEnd(22)} "${x.fr}"` : 'ABSENT'}`);
    }

    console.log('\n=== A1/A2 word|phrase rows in comparaisons WITHOUT flashcard or voiceflash ===');
    for (const x of all.rows.filter((y) => y.theme === 'comparaisons' && y.kind !== 'sentence')) {
      const d = toArray(x.drills);
      if (!d.includes('flashcard') || !d.includes('voiceflash')) console.log(`  ${x.id} drills=${d.join('+')} "${x.fr}"`);
    }
  } finally {
    c.release();
    await pool.end();
  }
}
main();
