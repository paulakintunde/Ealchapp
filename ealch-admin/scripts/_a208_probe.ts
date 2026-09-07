// a2.08 pre-flight. Measures what the brief asserts, against Postgres.
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

const PHRASES = [
  'plus grand que', 'moins grand que', 'aussi grand que',
  'le plus grand', 'le meilleur', 'meilleur', 'meilleure', 'meilleurs', 'meilleures',
  'mieux', 'le mieux', 'plus bon', 'aussi', 'aussi que',
  'la plus grande', 'les plus grands', 'les plus grandes',
  'le moins', 'la moins', 'le pire', 'pire',
  'plus petit', 'moins cher', 'plus cher', 'aussi cher',
  'la mienne', 'le tien', 'le mien', 'le sien', 'la sienne', 'les miens', 'le nôtre', 'la vôtre',
  'ne plus',
];

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const all = await c.query<{ id: string; fr: string; en: string; theme: string; kind: string; level: string; respell: string | null }>(
      `select id, fr, en, theme, kind, level, respell from content_items where status='published'`,
    );
    console.log(`published rows: ${all.rows.length}`);

    console.log('\n=== PHRASE COUNTS (whole-word, accent-aware) ===');
    for (const p of PHRASES) {
      const hits = all.rows.filter((r) => hasWord(r.fr, p));
      const themes: Record<string, number> = {};
      for (const h of hits) themes[h.theme] = (themes[h.theme] ?? 0) + 1;
      const top = Object.entries(themes).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([t, n]) => `${t}:${n}`).join(' ');
      console.log(`  ${p.padEnd(20)} ${String(hits.length).padStart(4)}   ${top}`);
    }

    console.log('\n=== "aussi" IN comparaisons, EVERY OCCURRENCE ===');
    for (const r of all.rows.filter((x) => x.theme === 'comparaisons' && hasWord(x.fr, 'aussi'))) {
      console.log(`  ${r.id.padEnd(30)} ${r.fr}`);
    }

    console.log('\n=== "aussi ... que" ANYWHERE (aussi and que both present) ===');
    const aq = all.rows.filter((x) => hasWord(x.fr, 'aussi') && hasWord(x.fr, 'que'));
    console.log(`  ${aq.length} rows`);
    for (const r of aq.slice(0, 40)) console.log(`  ${r.id.padEnd(32)} ${r.fr}`);

    console.log('\n=== POSSESSIVE PRONOUNS INSIDE comparaisons ===');
    const POSS = ['le mien', 'la mienne', 'les miens', 'les miennes', 'le tien', 'la tienne', 'les tiens', 'les tiennes',
      'le sien', 'la sienne', 'les siens', 'les siennes', 'le nôtre', 'la nôtre', 'les nôtres', 'le vôtre', 'la vôtre', 'les vôtres',
      'le leur', 'la leur', 'les leurs'];
    for (const r of all.rows.filter((x) => x.theme === 'comparaisons')) {
      const hit = POSS.filter((p) => hasWord(r.fr, p));
      if (hit.length) console.log(`  ${r.id.padEnd(30)} [${hit.join('/')}] ${r.fr}`);
    }

    console.log('\n=== fr.a2.comparaisons.* FULL DUMP ===');
    const mine = all.rows.filter((x) => x.id.startsWith('fr.a2.comparaisons.')).sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
    console.log(`  ${mine.length} rows`);
    for (const r of mine) console.log(`  ${r.id.padEnd(28)} ${r.kind.padEnd(9)} ${r.fr}  ||  ${r.en}`);

    console.log('\n=== NASAL CHECK ON CANDIDATE REPAIRS ===');
    const cand: Array<[string, string, string]> = [
      ['grand', 'GRAHN', 'faux-amis.024'],
      ['grand', 'GRAHⁿ', 'house'],
      ['le bien', 'BYAN', 'ethique.052'],
      ['le bien', 'BYAⁿ', 'half'],
      ['le bien', 'BYEHⁿ', 'house'],
      ['le bien', 'luh byahn', 'philosophie.084'],
      ['le bien', 'luh byahⁿ', 'half'],
      ['bien', 'BYEHⁿ', 'house'],
      ['bon', 'BOHⁿ', 'house'],
      ['meilleur', 'meh-YEUR', 'proposed'],
      ['meilleure', 'meh-YEUR', 'proposed'],
      ['mieux', 'MYEU', 'proposed'],
      ['moins', 'MWAHⁿ', 'proposed'],
      ['moins', 'MWAHN', 'plain'],
      ['plus', 'PLÜ', 'proposed'],
      ['plus', 'PLÜSS', 'proposed'],
      ['aussi', 'oh-SEE', 'proposed'],
      ['le pire', 'PEER', 'proposed'],
      ['grande', 'GRAHⁿD', 'proposed'],
      ['grands', 'GRAHⁿ', 'proposed'],
      ['la mienne', 'MYEN', 'possessive'],
    ];
    for (const [fr, rs, note] of cand) {
      console.log(`  ${fr.padEnd(12)} ${rs.padEnd(14)} ${note.padEnd(18)} flagged=${hasPlainNasalFor(fr, rs)}`);
    }

    console.log('\n=== EXISTING RESPELLINGS FOR THE COMPARATIVE WORDS ===');
    for (const w of ['plus', 'moins', 'aussi', 'que', 'meilleur', 'mieux', 'pire', 'autant', 'moindre']) {
      const rows = all.rows.filter((r) => r.kind !== 'sentence' && (r.fr.toLowerCase() === w || r.fr.toLowerCase().endsWith(' ' + w)));
      if (!rows.length) { console.log(`  ${w.padEnd(10)} ABSENT as headword`); continue; }
      for (const r of rows) console.log(`  ${w.padEnd(10)} ${r.id.padEnd(34)} "${r.fr}" respell=${r.respell ?? '-'} theme=${r.theme}`);
    }
  } finally {
    c.release();
    await pool.end();
  }
}
main();
