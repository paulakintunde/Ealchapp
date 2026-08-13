/* a2.16 pre-flight. Measures the things the brief left UNVERIFIED and the
 * things the corpus can answer that no probe flag asks for.
 *
 *   pnpm tsx scripts/_a216_probe.ts
 */
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { Pool } from 'pg';

const HERE = dirname(fileURLToPath(import.meta.url));
const SEED = resolve(HERE, '../../ealch-v2/src/content/seed.json');

const FORMS = [
  'beau', 'bel', 'belle', 'beaux', 'belles',
  'nouveau', 'nouvel', 'nouvelle', 'nouveaux', 'nouvelles',
  'vieux', 'vieil', 'vieille', 'vieilles',
];

const NOUNS = [
  'appartement', 'ami', 'amie', 'homme', 'hôtel', 'arbre', 'immeuble',
  'ordinateur', 'enfant', 'école', 'histoire', 'livre', 'manteau', 'film',
  'monsieur', 'voisin', 'quartier', 'sac', 'jardin', 'vélo', 'chien',
];

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const shape = (w: string) =>
  new RegExp(`(?<![\\p{L}\\p{N}'’-])${esc(w)}(?![\\p{L}\\p{N}'’-])`, 'iu');
const bare = (fr: string) =>
  fr.toLowerCase().replace(/^(le |la |les |un |une |des |l'|l’)/, '').trim();

async function main() {
  const pg = new Pool({ connectionString: process.env.SUPABASE_DB_URL ?? process.env.DATABASE_URL });

  const { rows: words } = await pg.query(
    `select id, fr, theme, respell, ipa, gender, kind, status from content_items where kind <> 'sentence'`);
  const { rows: sents } = await pg.query(
    `select id, fr, theme, respell, drills, status from content_items where kind = 'sentence'`);

  console.log('══ 1. THE NINE FORMS AS HEADWORDS, EVERY ROW AT EVERY STATUS ══');
  for (const w of FORMS) {
    const hit = words.filter((r: any) => bare(r.fr ?? '') === w);
    console.log(`  ${w.padEnd(10)} ${hit.length} row(s)`);
    for (const r of hit.sort((a: any, b: any) => a.id.localeCompare(b.id))) {
      console.log(`      ${r.id.padEnd(40)} ${JSON.stringify(r.fr).padEnd(13)} respell=${(r.respell ?? '-').padEnd(10)} ipa=${(r.ipa ?? '-').padEnd(12)} gender=${r.gender ?? '-'}  ${r.status}`);
    }
  }

  console.log('\n══ 2. SENTENCE EVIDENCE PER FORM ══');
  const pub = sents.filter((r: any) => r.status === 'published');
  for (const w of FORMS) {
    const re = shape(w);
    const hit = pub.filter((r: any) => re.test(r.fr ?? ''));
    const wr = hit.filter((r: any) => r.respell);
    console.log(`  ${w.padEnd(10)} ${String(hit.length).padStart(4)} published sentences, ${String(wr.length).padStart(3)} respelled`);
    for (const r of wr.slice(0, 5)) console.log(`      ${r.id.padEnd(42)} ${r.fr}   [${r.respell}]`);
  }

  console.log('\n══ 3. THE PRE-VOCALIC PHRASES ══');
  for (const t of ['bel ', 'nouvel ', 'vieil ']) {
    const hit = pub.filter((r: any) => shape(t.trim()).test(r.fr ?? ''));
    console.log(`  "${t.trim()}"  ${hit.length} published sentence(s)`);
    for (const r of hit) console.log(`      ${r.id.padEnd(42)} ${r.fr}   [${r.respell ?? '-'}]  drills=${[...(r.drills ?? [])].join('/')}  tie=${String(r.respell ?? '').includes('‿') ? 'U+203F' : '-'}`);
  }

  console.log('\n══ 4. THE VOWEL-INITIAL NOUNS ══');
  for (const n of NOUNS) {
    const hit = words.filter((r: any) => bare(r.fr ?? '') === n);
    const best = hit.filter((r: any) => r.respell && r.status === 'published');
    console.log(`  ${n.padEnd(13)} ${hit.length} row(s), ${best.length} published+respelled`);
    for (const r of best.slice(0, 3)) console.log(`      ${r.id.padEnd(40)} ${JSON.stringify(r.fr).padEnd(18)} [${r.respell}]  gender=${r.gender ?? '-'}  theme=${r.theme}`);
  }

  console.log('\n══ 5. WHAT THE NEIGHBOURS ALREADY SAY, ON LEARNER SURFACES ══');
  const seed = JSON.parse(readFileSync(SEED, 'utf8'));
  const lessons: any[] = seed.lessons ?? [];
  const NOTATION = new Set(['id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill', 'retest', 'accept', 'recordingId', 'ipa', 'respell', 'audioRef']);
  const walk = (v: any, out: string[]) => {
    if (typeof v === 'string') out.push(v);
    else if (Array.isArray(v)) v.forEach((x) => walk(x, out));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!NOTATION.has(k)) walk(x, out);
  };
  for (const id of ['a1.14.l1', 'a1.16.l1', 'a2.03.l1', 'sons.07.l1', 'a1.13.l1']) {
    const l = lessons.find((x) => x.id === id);
    if (!l) { console.log(`  ${id} ABSENT from the seed`); continue; }
    const { grammarIntroduced, grammarAssumed, ...rest } = l;
    void grammarIntroduced; void grammarAssumed;
    const out: string[] = []; walk(rest, out);
    const text = out.join('\n');
    const counts = FORMS.map((w) => `${w}=${(text.match(new RegExp(shape(w).source, 'giu')) ?? []).length}`);
    console.log(`  ${id}`);
    console.log(`      ${counts.join('  ')}`);
  }

  console.log('\n══ 6. THE SONS.07 REFRAME AND THE UNITS ══');
  for (const id of ['sons.07.l1', 'a1.16.l1', 'a1.14.l1']) {
    const l = lessons.find((x) => x.id === id);
    if (l) console.log(`  ${id.padEnd(11)} unitId=${l.unitId}  reframe=${JSON.stringify(l.reframe)}`);
  }
  const { rows: u } = await pg.query(
    `select body->>'id' id, body->>'seq' seq, body->>'title' t, body->>'sub' sub, body->>'canDo' cando, body->'lessonIds' lessons
       from content_units where kind='curriculum_unit' and body->>'id' = any($1) order by 1`,
    [['sons.07', 'a1.13', 'a1.14', 'a1.16', 'a2.03', 'a2.16', 'a2.17', 'a2.08']]);
  for (const r of u) console.log(`  ${r.id.padEnd(9)} seq=${String(r.seq).padEnd(3)} ${String(r.t).padEnd(34)} | ${r.sub}   lessons=${JSON.stringify(r.lessons)}`);

  console.log('\n══ 7. WHO DEPENDS ON a2.16 ══');
  const { rows: deps } = await pg.query(
    `select body->>'id' id, body->>'seq' seq, body->>'title' t
       from content_units where kind='curriculum_unit' and body->'prereqUnitIds' @> '"a2.16"' order by 1`);
  console.log(deps.length ? deps.map((r: any) => `  ${r.id} seq=${r.seq} ${r.t}`).join('\n') : '  NONE. a2.16 is a leaf.');

  console.log('\n══ 8. THE ID BLOCK ══');
  const mine = words.concat(sents).filter((r: any) => String(r.id).startsWith('fr.a2.adjectifs-essentiels.'));
  const themeAll = words.concat(sents).filter((r: any) => r.theme === 'adjectifs-essentiels');
  console.log(`  fr.a2.adjectifs-essentiels  count=${mine.length}  max=${mine.map((r: any) => r.id).sort().at(-1)}`);
  console.log(`  theme adjectifs-essentiels  total=${themeAll.length}  published=${themeAll.filter((r: any) => r.status === 'published').length}`);
  const intrude = mine.filter((r: any) => r.id >= 'fr.a2.adjectifs-essentiels.041' && r.id <= 'fr.a2.adjectifs-essentiels.080');
  console.log(`  rows already inside .041..080: ${intrude.length ? intrude.map((r: any) => r.id).join(', ') : 'NONE'}`);

  await pg.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
