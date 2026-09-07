/* a2.17 pre-flight, pass 1. Measures what the brief left UNVERIFIED:
 * the identity block, the theme decision, every adverb that already exists,
 * how the corpus already respells a word-final -ment, and what a2.03 and
 * a1.18 actually shipped.
 *
 *   pnpm tsx scripts/_a217_probe.ts
 */
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { Pool } from 'pg';

const HERE = dirname(fileURLToPath(import.meta.url));
const SEED = resolve(HERE, '../../ealch-v2/src/content/seed.json');

/** The eleven the brief names, plus the derivations the lesson wants. */
const ADVERBS = [
  'lentement', 'rapidement', 'heureusement', 'vraiment', 'bien', 'mal', 'vite',
  'souvent', 'toujours', 'évidemment', 'constamment',
  'doucement', 'sérieusement', 'facilement', 'simplement', 'seulement',
  'certainement', 'normalement', 'directement', 'parfaitement', 'exactement',
  'complètement', 'absolument', 'probablement', 'finalement', 'généralement',
  'récemment', 'fréquemment', 'patiemment', 'suffisamment', 'couramment',
  'mieux', 'jamais', 'parfois', 'quelquefois', 'déjà', 'encore', 'peu', 'beaucoup', 'trop', 'assez',
];

/** The adjectives the derivation runs on. */
const ADJECTIVES = [
  'lent', 'lente', 'heureux', 'heureuse', 'doux', 'douce', 'sérieux', 'sérieuse',
  'rapide', 'facile', 'simple', 'seul', 'seule', 'certain', 'certaine',
  'normal', 'normale', 'direct', 'directe', 'parfait', 'parfaite', 'exact', 'exacte',
  'vrai', 'vraie', 'évident', 'évidente', 'constant', 'constante',
  'bon', 'bonne', 'mauvais', 'mauvaise', 'rare', 'rare',
  'poli', 'polie', 'calme', 'triste', 'sportif', 'sportive', 'actif', 'active',
];

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const shape = (w: string) =>
  new RegExp(`(?<![\\p{L}\\p{N}'’-])${esc(w)}(?![\\p{L}\\p{N}'’-])`, 'iu');
const bare = (fr: string) =>
  fr.toLowerCase().replace(/^(le |la |les |un |une |des |l'|l’)/, '').trim();

async function main() {
  const pg = new Pool({ connectionString: process.env.SUPABASE_DB_URL ?? process.env.DATABASE_URL });

  const { rows: words } = await pg.query(
    `select id, fr, en, theme, respell, ipa, gender, kind, status, drills, level from content_items where kind <> 'sentence'`);
  const { rows: sents } = await pg.query(
    `select id, fr, en, theme, respell, ipa, drills, status, level from content_items where kind = 'sentence'`);
  const all = words.concat(sents);

  console.log('══ 1. THE IDENTITY BLOCK, BYTE FOR BYTE ══');
  const { rows: u } = await pg.query(
    `select body from content_units where kind='curriculum_unit' and body->>'id' = any($1) order by body->>'id'`,
    [['a2.03', 'a2.16', 'a2.17', 'a2.05', 'a2.08', 'a1.18', 'a2.01', 'a1.14', 'a1.16']]);
  for (const r of u) {
    const b = r.body as any;
    console.log(`  ${String(b.id).padEnd(7)} seq=${String(b.seq).padEnd(3)} (${typeof b.seq}) title=${JSON.stringify(b.title)}`);
    console.log(`          sub=${JSON.stringify(b.sub)}`);
    console.log(`          canDo=${JSON.stringify(b.canDo)}`);
    console.log(`          prereq=${JSON.stringify(b.prereqUnitIds)}  lessonIds=${JSON.stringify(b.lessonIds)}`);
  }

  console.log('\n══ 2. THEMES: WHERE COULD THIS LESSON WRITE ══');
  const themeNames = [...new Set(all.map((r: any) => r.theme))].filter((t) =>
    typeof t === 'string' && (t.includes('adverb') || t.includes('adjectif') || t.includes('mots-essentiels') || t.includes('temps-et')));
  for (const t of themeNames.sort()) {
    const rows = all.filter((r: any) => r.theme === t);
    const ns = [...new Set(rows.map((r: any) => String(r.id).split('.').slice(0, 3).join('.')))].sort();
    console.log(`  ${String(t).padEnd(28)} total=${String(rows.length).padStart(4)} published=${String(rows.filter((r: any) => r.status === 'published').length).padStart(4)}`);
    for (const n of ns) {
      const sub = rows.filter((r: any) => String(r.id).startsWith(n + '.'));
      const max = sub.map((r: any) => r.id).sort().at(-1);
      console.log(`      ${n.padEnd(34)} count=${String(sub.length).padStart(4)}  max=${max}`);
    }
  }
  console.log(`  theme "adverbes" (no suffix): ${all.filter((r: any) => r.theme === 'adverbes').length} rows`);

  console.log('\n══ 3. MY ID BLOCK: fr.a2.adjectifs-essentiels.081..120 ══');
  const mine = all.filter((r: any) => String(r.id).startsWith('fr.a2.adjectifs-essentiels.'));
  console.log(`  namespace count=${mine.length}  max=${mine.map((r: any) => r.id).sort().at(-1)}`);
  const intrude = mine.filter((r: any) => r.id >= 'fr.a2.adjectifs-essentiels.081' && r.id <= 'fr.a2.adjectifs-essentiels.120');
  console.log(`  rows already inside .081..120: ${intrude.length ? intrude.map((r: any) => r.id).join(', ') : 'NONE'}`);
  const advNs = all.filter((r: any) => String(r.id).startsWith('fr.a2.adverbes-essentiels.'));
  console.log(`  fr.a2.adverbes-essentiels: count=${advNs.length}  max=${advNs.map((r: any) => r.id).sort().at(-1) ?? '-'}`);

  console.log('\n══ 4. EVERY ADVERB AS A HEADWORD, EVERY ROW AT EVERY STATUS ══');
  for (const w of ADVERBS) {
    const hit = words.filter((r: any) => bare(r.fr ?? '') === w);
    if (!hit.length) { console.log(`  ${w.padEnd(15)} ABSENT`); continue; }
    console.log(`  ${w.padEnd(15)} ${hit.length} row(s)`);
    for (const r of hit.sort((a: any, b: any) => a.id.localeCompare(b.id))) {
      console.log(`      ${r.id.padEnd(42)} ${JSON.stringify(r.fr).padEnd(16)} respell=${JSON.stringify(r.respell ?? '-').padEnd(18)} ipa=${(r.ipa ?? '-').padEnd(14)} g=${r.gender ?? '-'} ${r.status} en=${JSON.stringify(r.en ?? '')}`);
      console.log(`          theme=${r.theme}  drills=${[...(r.drills ?? [])].join('/')}`);
    }
  }

  console.log('\n══ 5. THE ADJECTIVES THE DERIVATION RUNS ON ══');
  for (const w of ADJECTIVES) {
    const hit = words.filter((r: any) => bare(r.fr ?? '') === w);
    if (!hit.length) { console.log(`  ${w.padEnd(12)} ABSENT`); continue; }
    const line = hit.map((r: any) => `${r.id}[${r.respell ?? '-'}]${r.gender ? ' g=' + r.gender : ''}${r.status !== 'published' ? ' ' + r.status : ''}`).join('  ');
    console.log(`  ${w.padEnd(12)} ${hit.length}  ${line}`);
  }

  console.log('\n══ 6. HOW THE CORPUS ALREADY RESPELLS A WORD-FINAL -ment ══');
  const mentRows = all.filter((r: any) => /ment\b/i.test(r.fr ?? '') && r.respell);
  const tail = new Map<string, { n: number; ex: string[] }>();
  for (const r of mentRows) {
    const m = String(r.respell).match(/([A-Za-zÀ-ÿⁿ]+)$/);
    if (!m) continue;
    const t = m[1].toUpperCase();
    if (!/MA|MAH|MAN|MAHN/i.test(t)) continue;
    const e = tail.get(t) ?? { n: 0, ex: [] };
    e.n++; if (e.ex.length < 4) e.ex.push(`${r.id} ${JSON.stringify(r.fr).slice(0, 40)} [${r.respell}]`);
    tail.set(t, e);
  }
  for (const [t, e] of [...tail].sort((a, b) => b[1].n - a[1].n)) {
    console.log(`  final token ${t.padEnd(12)} ${String(e.n).padStart(4)} rows`);
    for (const x of e.ex) console.log(`      ${x}`);
  }

  console.log('\n══ 7. -MENT ADVERB HEADWORDS ANYWHERE IN THE CORPUS ══');
  const mentWords = words.filter((r: any) => /^[a-zà-ÿ]+ment$/i.test(bare(r.fr ?? '')));
  console.log(`  ${mentWords.length} single-word -ment rows`);
  for (const r of mentWords.sort((a: any, b: any) => String(a.fr).localeCompare(String(b.fr)))) {
    console.log(`      ${r.id.padEnd(42)} ${String(r.fr).padEnd(16)} [${r.respell ?? '-'}]  g=${r.gender ?? '-'}  ${r.status}  theme=${r.theme}`);
  }

  console.log('\n══ 8. PLACEMENT EVIDENCE: adverb AFTER the conjugated verb ══');
  const pub = sents.filter((r: any) => r.status === 'published');
  for (const w of ['souvent', 'toujours', 'bien', 'mal', 'vite', 'lentement', 'rapidement', 'vraiment']) {
    const hit = pub.filter((r: any) => shape(w).test(r.fr ?? ''));
    const wr = hit.filter((r: any) => r.respell);
    console.log(`  ${w.padEnd(12)} ${String(hit.length).padStart(4)} published sentences, ${String(wr.length).padStart(3)} respelled`);
    for (const r of wr.slice(0, 6)) console.log(`      ${r.id.padEnd(42)} ${String(r.fr).padEnd(38)} [${r.respell}] drills=${[...(r.drills ?? [])].join('/')}`);
  }

  console.log('\n══ 9. COMPOUND-TENSE ADVERB PLACEMENT IN THE CORPUS (what a2.05 inherits) ══');
  const compound = pub.filter((r: any) => /\b(ai|as|a|avons|avez|ont)\s+(bien|mal|vite|beaucoup|trop|déjà|souvent|toujours)\s+\w+é/i.test(r.fr ?? ''));
  console.log(`  ${compound.length} rows`);
  for (const r of compound.slice(0, 10)) console.log(`      ${r.id.padEnd(42)} ${r.fr}`);

  console.log('\n══ 10. THE SEED: version, counts, and the neighbours ══');
  const seed = JSON.parse(readFileSync(SEED, 'utf8'));
  console.log(`  seed.version=${seed.version}  items=${(seed.items ?? []).length}  lessons=${(seed.lessons ?? []).length}`);
  const lessons: any[] = seed.lessons ?? [];
  for (const id of ['a2.03.l1', 'a2.16.l1', 'a1.18.l1', 'a2.01.l1', 'a1.16.l1']) {
    const l = lessons.find((x) => x.id === id);
    if (!l) { console.log(`  ${id} ABSENT from the seed`); continue; }
    console.log(`  ${id.padEnd(10)} v${l.version} unit=${l.unitId} sections=${(l.sections ?? []).length} reframe=${JSON.stringify(l.reframe)}`);
    console.log(`      grammarIntroduced=${JSON.stringify(l.grammarIntroduced)}`);
  }

  console.log('\n══ 11. WHO DEPENDS ON a2.17 ══');
  const { rows: deps } = await pg.query(
    `select body->>'id' id, body->>'seq' seq, body->>'title' t
       from content_units where kind='curriculum_unit' and body->'prereqUnitIds' @> '"a2.17"' order by 1`);
  console.log(deps.length ? deps.map((r: any) => `  ${r.id} seq=${r.seq} ${r.t}`).join('\n') : '  NONE. a2.17 is a leaf.');

  await pg.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
