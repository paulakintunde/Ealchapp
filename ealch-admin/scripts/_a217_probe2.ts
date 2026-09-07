/* a2.17 pre-flight, pass 2. The theme decision, a2.03's feminines as shipped,
 * a1.18's negation wording, and the nasal checker measured rather than guessed.
 *
 *   pnpm tsx scripts/_a217_probe2.ts
 */
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const SEED = resolve(HERE, '../../ealch-v2/src/content/seed.json');

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const shape = (w: string) =>
  new RegExp(`(?<![\\p{L}\\p{N}'’-])${esc(w)}(?![\\p{L}\\p{N}'’-])`, 'iu');

async function main() {
  const pg = new Pool({ connectionString: process.env.SUPABASE_DB_URL ?? process.env.DATABASE_URL });
  const { rows: all } = await pg.query(
    `select id, fr, en, theme, respell, ipa, gender, kind, status, drills, level, tags from content_items`);

  console.log('══ 1. THE adverbes-essentiels THEME: WHAT SHAPE ARE ITS ROWS ══');
  const adv = all.filter((r: any) => r.theme === 'adverbes-essentiels');
  const byKind = new Map<string, number>();
  for (const r of adv) byKind.set(r.kind, (byKind.get(r.kind) ?? 0) + 1);
  console.log(`  ${adv.length} rows: ${[...byKind].map(([k, n]) => `${k}=${n}`).join('  ')}`);
  console.log(`  gendered rows: ${adv.filter((r: any) => r.gender).length}`);
  console.log(`  rows with no respell: ${adv.filter((r: any) => !r.respell).length}`);
  console.log(`  rows whose respell ends -MAHN: ${adv.filter((r: any) => /MAHN$/.test(r.respell ?? '')).length}`);
  console.log(`  rows whose respell ends -MAHⁿ: ${adv.filter((r: any) => /MAHⁿ$/.test(r.respell ?? '')).length}`);
  console.log(`  rows carrying U+203F: ${adv.filter((r: any) => (r.respell ?? '').includes('‿')).length}`);
  console.log('  fr.a1.adverbes-essentiels sample (first 12 sentences):');
  for (const r of adv.filter((r: any) => r.kind === 'sentence').slice(0, 12))
    console.log(`      ${r.id.padEnd(34)} ${String(r.fr).slice(0, 56).padEnd(58)} [${r.respell ?? '-'}]`);
  const dupFr = new Map<string, string[]>();
  for (const r of adv) {
    const k = String(r.fr).toLowerCase();
    dupFr.set(k, [...(dupFr.get(k) ?? []), r.id]);
  }
  const dups = [...dupFr].filter(([, ids]) => ids.length > 1);
  console.log(`  PRE-EXISTING duplicate fr inside this theme: ${dups.length}`);
  for (const [k, ids] of dups.slice(0, 10)) console.log(`      ${k}  ${ids.join(' ')}`);

  console.log('\n══ 2. a2.03 AS SHIPPED: THE ROWS IT AUTHORED ══');
  const a203 = all.filter((r: any) => String(r.id).startsWith('fr.a2.adjectifs-essentiels.') && r.id <= 'fr.a2.adjectifs-essentiels.040');
  console.log(`  ${a203.length} rows`);
  for (const r of a203.sort((a: any, b: any) => a.id.localeCompare(b.id)))
    console.log(`      ${r.id.padEnd(34)} ${r.kind.padEnd(8)} ${String(r.fr).slice(0, 42).padEnd(44)} [${r.respell ?? '-'}]  g=${r.gender ?? '-'}`);

  console.log('\n══ 3. THE FEMININES THE DERIVATION NEEDS, EVERY ROW ══');
  const NEED = ['lent', 'lente', 'doux', 'douce', 'heureux', 'heureuse', 'sérieux', 'sérieuse',
    'sportif', 'sportive', 'actif', 'active', 'vrai', 'vraie', 'poli', 'polie',
    'rapide', 'facile', 'calme', 'simple', 'seul', 'seule', 'franc', 'franche',
    'bon', 'bonne', 'mauvais', 'mauvaise', 'long', 'longue', 'léger', 'légère',
    'complet', 'complète', 'premier', 'première', 'dernier', 'dernière'];
  for (const w of NEED) {
    const hit = all.filter((r: any) => r.kind !== 'sentence' && String(r.fr).toLowerCase().replace(/^(le |la |les |un |une |l'|l’)/, '') === w);
    console.log(`  ${w.padEnd(11)} ${hit.length ? hit.map((r: any) => `${r.id}[${r.respell ?? '-'}]${r.gender ? ' g=' + r.gender : ''}`).join('  ') : 'ABSENT'}`);
  }

  console.log('\n══ 4. THE NASAL CHECKER, MEASURED ON THE VALUES THIS LESSON WOULD USE ══');
  const CAND: [string, string][] = [
    ['lentement', 'lahnt-MAHN'], ['lentement', 'lahⁿt-MAHN'], ['lentement', 'lahnt-MAHⁿ'], ['lentement', 'lahⁿt-MAHⁿ'],
    ['rapidement', 'ra-peed-MAHN'], ['rapidement', 'ra-peed-MAHⁿ'],
    ['heureusement', 'uh-ruhz-MAHN'], ['heureusement', 'uh-ruhz-MAHⁿ'],
    ['vraiment', 'vreh-MAHN'], ['vraiment', 'vreh-MAHⁿ'],
    ['évidemment', 'ay-vee-da-MAHN'], ['évidemment', 'ay-vee-da-MAHⁿ'],
    ['constamment', 'kohns-ta-MAHN'], ['constamment', 'kohns-ta-MAHⁿ'], ['constamment', 'kohⁿs-ta-MAHⁿ'],
    ['bien', 'BYAN'], ['bien', 'BYEHⁿ'], ['bien', 'BYAHⁿ'],
    ['souvent', 'soo-VAHN'], ['souvent', 'soo-VAHⁿ'],
    ['mal', 'MAL'], ['vite', 'VEET'], ['toujours', 'too-ZHOOR'],
    ['doucement', 'doos-MAHN'], ['doucement', 'doos-MAHⁿ'],
    ['sérieusement', 'say-ryuhz-MAHN'], ['sérieusement', 'say-ryuhz-MAHⁿ'],
    ['simplement', 'san-pluh-MAHN'], ['simplement', 'sahⁿ-pluh-MAHⁿ'], ['simplement', 'saⁿ-pluh-MAHⁿ'],
    ['facilement', 'fa-seel-MAHⁿ'], ['certainement', 'sehr-tehn-MAHⁿ'], ['certainement', 'sehr-tehⁿ-MAHⁿ'],
    ['lent', 'LAHN'], ['lent', 'LAHⁿ'], ['lente', 'LAHNT'], ['lente', 'LAHⁿT'],
    ['bon', 'BOHⁿ'], ['bonne', 'BON'], ['constant', 'kohn-STAHⁿ'], ['évident', 'ay-vee-DAHⁿ'],
    ['évidente', 'ay-vee-DAHⁿT'], ['constante', 'kohⁿs-TAHⁿT'],
    ['Elle parle lentement.', 'el PARL lahⁿt-MAHⁿ'],
    ['Il mange souvent ici.', 'eel MAHⁿZH soo-VAHⁿ ee-SEE'],
    ['Elle chante bien.', 'el SHAHⁿT BYEHⁿ'],
  ];
  let seen = 0, missed = 0;
  for (const [fr, rs] of CAND) {
    const flagged = hasPlainNasalFor(fr, rs);
    const clean = !/[nm](?![\p{L}])/iu.test(rs);
    console.log(`  ${fr.padEnd(24)} ${rs.padEnd(22)} flagged=${flagged ? 'YES' : 'no '}   ${clean ? '' : '(has a plain n/m)'}`);
    if (flagged) seen++; else missed++;
  }
  console.log(`  flagged=${seen}  not flagged=${missed}`);

  console.log('\n══ 5. IMPORTABLE PLACEMENT SENTENCES: short, respelled, no tie ══');
  const pub = all.filter((r: any) => r.kind === 'sentence' && r.status === 'published');
  for (const w of ['souvent', 'toujours', 'bien', 'mal', 'vite', 'lentement', 'rapidement', 'vraiment', 'doucement', 'facilement']) {
    const hit = pub.filter((r: any) => shape(w).test(r.fr ?? '') && r.respell && !String(r.respell).includes('‿') && String(r.fr).length <= 34);
    console.log(`  ${w.padEnd(12)} ${hit.length} candidate(s)`);
    for (const r of hit.slice(0, 8))
      console.log(`      ${r.id.padEnd(34)} ${String(r.fr).padEnd(34)} [${r.respell}] theme=${r.theme} drills=${[...(r.drills ?? [])].join('/')}`);
  }

  console.log('\n══ 6. a1.18 ON THE LEARNER SURFACE: WHAT IT SAYS ABOUT WHAT WRAPS WHAT ══');
  const seed = JSON.parse(readFileSync(SEED, 'utf8'));
  const lessons: any[] = seed.lessons ?? [];
  const NOTATION = new Set(['id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill', 'retest', 'accept', 'recordingId', 'ipa', 'respell', 'audioRef', 'imageRef', 'type', 'layer', 'act', 'skill', 'format']);
  const walk = (v: any, out: string[]) => {
    if (typeof v === 'string') out.push(v);
    else if (Array.isArray(v)) v.forEach((x) => walk(x, out));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!NOTATION.has(k)) walk(x, out);
  };
  const a118 = lessons.find((x) => x.id === 'a1.18.l1');
  if (a118) {
    const out: string[] = []; walk({ ...a118, grammarIntroduced: undefined, grammarAssumed: undefined }, out);
    const hits = out.filter((s) => /wrap|around|sandwich|either side|before the verb|after the verb/i.test(s));
    console.log(`  ${hits.length} strings about wrapping/position:`);
    for (const s of [...new Set(hits)].slice(0, 24)) console.log(`      ${JSON.stringify(s.slice(0, 150))}`);
    const advIn118 = out.filter((s) => /\b(souvent|toujours|bien|mal|vite|lentement|jamais|plus)\b/i.test(s));
    console.log(`  strings naming an adverb: ${advIn118.length}`);
    for (const s of [...new Set(advIn118)].slice(0, 12)) console.log(`      ${JSON.stringify(s.slice(0, 140))}`);
  }

  console.log('\n══ 7. WHAT THE SEED ALREADY SAYS ABOUT -ment, bien/bon, placement, mieux ══');
  for (const l of lessons) {
    const out: string[] = []; walk({ ...l, grammarIntroduced: undefined, grammarAssumed: undefined }, out);
    const text = out.join('\n');
    const n = {
      ment: (text.match(/(?<![\p{L}])(?:lente|heureuse|douce|rapide|facile|vraie?|sérieuse|simple|seule|certaine|normale|directe|exacte|parfaite|complète|absolue|probable|finale|générale|évidem|constam|récem|fréquem)ment(?![\p{L}])/giu) ?? []).length,
      bien: (text.match(/(?<![\p{L}])bien(?![\p{L}])/giu) ?? []).length,
      mieux: (text.match(/(?<![\p{L}])mieux(?![\p{L}])/giu) ?? []).length,
      souvent: (text.match(/(?<![\p{L}])souvent(?![\p{L}])/giu) ?? []).length,
    };
    if (n.ment || n.mieux || n.souvent > 2) console.log(`  ${String(l.id).padEnd(12)} -ment=${n.ment} bien=${n.bien} mieux=${n.mieux} souvent=${n.souvent}`);
  }

  console.log('\n══ 8. grammarIntroduced ACROSS THE SEED: does any unit claim the adverb ══');
  for (const l of lessons) {
    const gi = (l.grammarIntroduced ?? []).join(' | ');
    if (/adverb|-ment|placement of|bien\b|mieux/i.test(gi)) console.log(`  ${String(l.id).padEnd(12)} ${gi.slice(0, 260)}`);
  }

  await pg.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
