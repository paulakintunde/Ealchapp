// Enumerates every FOOD headword candidate a1.23 can serve, from the four themes
// that hold them, straight out of Postgres. Prints a table so the author picks
// from measured rows rather than from memory.
//
// Run:  pnpm tsx scripts/_nourriture_manifest.ts
import './env';

const THEMES = ['cuisine', 'marche', 'cafe', 'au-restaurant'];

// Bare nouns, accent-correct. The query matches the row's `fr` with any article.
const FOODS = [
  'pain', 'baguette', 'croissant', 'gâteau', 'biscuit',
  'fromage', 'beurre', 'lait', 'crème', 'yaourt', 'œuf',
  'viande', 'poulet', 'porc', 'bœuf', 'jambon', 'poisson', 'saucisse',
  'riz', 'pâtes', 'soupe', 'salade', 'sandwich', 'frites', 'pizza', 'plat',
  'pomme', 'banane', 'orange', 'fraise', 'citron', 'poire', 'pêche', 'raisin', 'melon', 'fruit',
  'tomate', 'carotte', 'oignon', 'champignon', 'légume', 'ail', 'pomme de terre', 'haricot',
  'eau', 'café', 'thé', 'jus', 'vin', 'bière', 'chocolat',
  'sel', 'poivre', 'sucre', 'huile', 'farine', 'miel', 'confiture', 'glace', 'céréales',
  'repas', 'goûter',
];

const ARTICLES = ['le ', 'la ', "l'", 'les ', 'un ', 'une ', 'des ', 'du ', 'de la ', "de l'"];

// A pg enum[] comes back as the literal string `{flashcard,voiceflash}`, not an
// array. Same parser probe-corpus.ts uses; a `.join` on the raw value throws.
function arr(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

function forms(bare: string): string[] {
  return [bare, ...ARTICLES.map((a) => a + bare)];
}

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const { rows } = await c.query(
    `select id, fr, en, ipa, respell, gender, theme, kind, drills, tags, notes, level, version
       from content_items
      where status = 'published'
        and kind <> 'sentence'
        and theme = any($1::text[])
      order by id`,
    [THEMES],
  );

  const byForm = new Map<string, typeof rows>();
  for (const r of rows) {
    const k = (r.fr as string).toLowerCase();
    if (!byForm.has(k)) byForm.set(k, [] as never);
    byForm.get(k)!.push(r);
  }

  let served = 0;
  const chosen: string[] = [];
  console.log('bare'.padEnd(16), 'CHOSEN'.padEnd(34), 'fr'.padEnd(18), 'g', 'respell'.padEnd(24), 'drills');
  console.log('-'.repeat(130));

  for (const bare of FOODS) {
    const hits: typeof rows = [];
    for (const f of forms(bare)) for (const r of byForm.get(f.toLowerCase()) ?? []) hits.push(r);
    if (!hits.length) { console.log(bare.padEnd(16), '-- ABSENT in all four themes --'); continue; }

    // Prefer: definite article > cuisine > marche > cafe > au-restaurant.
    const score = (r: any) => {
      const fr = r.fr as string;
      let s = 0;
      // a1 BEATS EVERYTHING. A first draft scored theme before level and picked
      // fr.a2.marche.058 for `vin` over the a1 row, which would have put an A2
      // card in an A1 deck.
      if (r.level === 'a1') s += 1000;
      if (/^(le |la |l'|les )/.test(fr)) s += 100;
      s += ({ cuisine: 40, marche: 30, cafe: 20, 'au-restaurant': 10 } as any)[r.theme] ?? 0;
      if (arr(r.drills).includes('voiceflash')) s += 5;
      return s;
    };
    hits.sort((a, b) => score(b) - score(a));
    const pick = hits[0];
    served++;
    chosen.push(pick.id);
    const others = hits.slice(1).map((r) => `${r.id}=${r.fr}`).join(' ');
    console.log(
      bare.padEnd(16),
      (pick.id as string).padEnd(34),
      (pick.fr as string).padEnd(18),
      (pick.gender ?? '-').padEnd(1),
      (pick.respell ?? '-').padEnd(24),
      arr(pick.drills).join('/'),
      others ? `\n${' '.repeat(16)}also: ${others}` : '',
    );
  }

  console.log('\nSERVED', served, 'of', FOODS.length, 'probed bare nouns');
  console.log('\nCHOSEN IDS:\n' + JSON.stringify(chosen, null, 0));

  // Which chosen rows are NOT in the seed cut themes -> must be carried.
  const CUT = ['cafe', 'marche', 'cuisine'];
  const outside = chosen.filter((id) => !CUT.some((t) => id.includes(`.${t}.`)));
  console.log('\nOUTSIDE THE SEED CUT (must be carried by the merge):', outside.length, outside.join(' '));

  c.release();
}

main().catch((e) => { console.error(e); process.exit(1); });
