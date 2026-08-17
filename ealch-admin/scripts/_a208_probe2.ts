// a2.08 pre-flight, round 2: respell candidates through the real checker,
// the a2.17 / a2.03 hand-off statements, and the unseen-adjective candidates.
import './env';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

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

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    console.log('=== NASAL CHECKER, round 2 ===');
    const cand: Array<[string, string]> = [
      ['moins', 'MWAN'], ['moins', 'MWAⁿ'], ['moins', 'MWEHⁿ'], ['au moins', 'OH MWAN'],
      ['mieux', 'MYUH'], ['le mieux', 'luh MYUH'], ['meilleur', 'meh-YUHR'], ['meilleure', 'meh-YUHR'],
      ['meilleurs', 'meh-YUHR'], ['meilleures', 'meh-YUHR'], ['pire', 'PEER'],
      ['grand', 'GRAHⁿ'], ['grande', 'GRAHⁿD'], ['grands', 'GRAHⁿ'], ['grandes', 'GRAHⁿD'],
      ['plus grand', 'plü GRAHⁿ'], ['moins grand', 'mwahⁿ GRAHⁿ'], ['aussi grand', 'oh-see GRAHⁿ'],
      ['le plus grand', 'luh plü GRAHⁿ'], ['la plus grande', 'lah plü GRAHⁿD'],
      ['bien', 'BYEHⁿ'], ['bien', 'BYAⁿ'], ['bon', 'BOHⁿ'], ['bonne', 'BUN'],
      ['aussi bon', 'oh-see BOHⁿ'], ['autant', 'oh-TAHⁿ'], ['autant', 'oh-TAHN'],
      ['lent', 'LAHⁿ'], ['content', 'kohⁿ-TAHⁿ'], ['intéressant', 'ahⁿ-tay-reh-SAHⁿ'],
      ['plus intéressant', 'plü-zahⁿ-tay-reh-SAHⁿ'],
    ];
    for (const [fr, rs] of cand) {
      console.log(`  ${fr.padEnd(18)} ${rs.padEnd(22)} flagged=${hasPlainNasalFor(fr, rs)}`);
    }

    const all = await c.query<{ id: string; fr: string; en: string; theme: string; kind: string; respell: string | null; drills: unknown; level: string }>(
      `select id, fr, en, theme, kind, respell, drills, level from content_items where status='published'`,
    );

    console.log('\n=== CANDIDATE UNSEEN ADJECTIVES IN adjectifs-essentiels ===');
    const adj = all.rows.filter((r) => r.theme === 'adjectifs-essentiels' && r.kind !== 'sentence');
    console.log(`  ${adj.length} rows in adjectifs-essentiels (non-sentence)`);
    for (const w of ['lent', 'lente', 'lourd', 'léger', 'propre', 'sale', 'fort', 'faible', 'jeune', 'vieux', 'long', 'court', 'chaud', 'froid', 'calme', 'utile', 'poli', 'sûr', 'triste', 'gentil']) {
      const hit = adj.filter((r) => r.fr.toLowerCase() === w);
      if (hit.length) console.log(`  ${w.padEnd(12)} ${hit.map((h) => `${h.id} respell=${h.respell ?? '-'}`).join(' | ')}`);
      else console.log(`  ${w.padEnd(12)} not in adjectifs-essentiels`);
    }

    console.log('\n=== IDS I PLAN TO IMPORT: full record ===');
    const WANT = [
      'fr.a2.comparaisons.001', 'fr.a2.comparaisons.003', 'fr.a2.comparaisons.004',
      'fr.a2.comparaisons.009', 'fr.a2.comparaisons.017', 'fr.a2.comparaisons.029',
      'fr.a2.comparaisons.030', 'fr.a2.comparaisons.031', 'fr.a2.comparaisons.055',
      'fr.a2.comparaisons.062', 'fr.a2.comparaisons.063', 'fr.a2.comparaisons.066',
      'fr.a2.comparaisons.076', 'fr.a2.comparaisons.078', 'fr.a2.comparaisons.092',
      'fr.a2.comparaisons.113', 'fr.a2.comparaisons.114', 'fr.a2.comparaisons.115',
      'fr.a2.comparaisons.116', 'fr.a2.comparaisons.117', 'fr.a2.comparaisons.118',
      'fr.a2.comparaisons.119', 'fr.a2.comparaisons.120', 'fr.a2.comparaisons.121',
      'fr.a2.comparaisons.122', 'fr.a2.comparaisons.123', 'fr.a2.comparaisons.124',
      'fr.a2.comparaisons.125', 'fr.a2.comparaisons.129', 'fr.a2.comparaisons.130',
      'fr.a2.comparaisons.131', 'fr.a2.comparaisons.132',
      'fr.sons.adjectifs-essentiels.062', 'fr.sons.adjectifs-essentiels.063',
      'fr.sons.adjectifs-essentiels.001', 'fr.sons.adjectifs-essentiels.002',
      'fr.sons.adjectifs-essentiels.003', 'fr.sons.adjectifs-essentiels.004',
      'fr.sons.adjectifs-essentiels.018', 'fr.sons.adjectifs-essentiels.019',
      'fr.sons.adjectifs-essentiels.020', 'fr.sons.adjectifs-essentiels.176',
      'fr.sons.mots-essentiels.045', 'fr.sons.mots-essentiels.046',
      'fr.sons.mots-essentiels.141', 'fr.sons.mots-essentiels.140',
      'fr.sons.mots-essentiels.051', 'fr.sons.mots-essentiels.114',
      'fr.sons.faux-amis.024', 'fr.sons.muettes.002', 'fr.b2.ethique.052', 'fr.b2.philosophie.084',
    ];
    const byId = new Map(all.rows.map((r) => [r.id, r]));
    for (const id of WANT) {
      const r = byId.get(id);
      if (!r) { console.log(`  ${id.padEnd(36)} ABSENT/UNPUBLISHED`); continue; }
      console.log(`  ${id.padEnd(36)} ${r.kind.padEnd(9)} ${r.level.padEnd(5)} respell=${String(r.respell ?? '-').padEnd(16)} drills=${String(r.drills)}  "${r.fr}"`);
    }

    console.log('\n=== "mieux" AS A BARE HEADWORD, ANY THEME ===');
    const mx = all.rows.filter((r) => r.kind !== 'sentence' && r.fr.trim().toLowerCase() === 'mieux');
    console.log(`  ${mx.length} rows`);
    for (const r of mx) console.log(`  ${r.id} ${r.theme} respell=${r.respell}`);

    console.log('\n=== duplicate-fr check for comparaisons if I add these ===');
    const NEW = ['mieux', 'le mieux', 'aussi cher', 'aussi facile', 'moins grand', 'le plus grand', 'la plus grande', 'les plus grands', 'les plus grandes', 'le moins cher', 'meilleurs', 'meilleures', 'plus mauvais'];
    const strip = (s: string) => s.replace(/^(le |la |les |l'|un |une |des |du |de l')/i, '').trim().toLowerCase();
    const existing = new Set(all.rows.filter((r) => r.theme === 'comparaisons').map((r) => strip(r.fr)));
    for (const n of NEW) console.log(`  ${n.padEnd(22)} collides=${existing.has(strip(n))}`);

    console.log('\n=== "plus" final-consonant evidence ===');
    for (const r of all.rows.filter((x) => x.kind !== 'sentence' && hasWord(x.fr, 'plus') && x.respell)) {
      console.log(`  ${r.id.padEnd(36)} "${r.fr}" -> ${r.respell}`);
    }
  } finally {
    c.release();
    await pool.end();
  }
}
main();
