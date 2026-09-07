/* a2.16 pre-flight, part 4. The generalisation candidates, the fr-collision
 * check inside the home theme, and the seed membership of every carried row.
 *
 *   pnpm tsx scripts/_a216_probe4.ts
 */
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { Pool } from 'pg';

const HERE = dirname(fileURLToPath(import.meta.url));
const SEED = resolve(HERE, '../../ealch-v2/src/content/seed.json');

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const shape = (w: string) =>
  new RegExp(`(?<![\\p{L}\\p{N}'’-])${esc(w)}(?![\\p{L}\\p{N}'’-])`, 'giu');

/** Every row a2.16 intends to carry. */
const CARRY = [
  'fr.sons.adjectifs-essentiels.005', 'fr.sons.adjectifs-essentiels.314',
  'fr.sons.consonnes.138', 'fr.sons.adjectifs-essentiels.007',
  'fr.a1.rencontres.095', 'fr.sons.adjectifs-essentiels.008',
  'fr.sons.adjectifs-essentiels.315', 'fr.sons.adjectifs-essentiels.312',
  'fr.a1.adjectifs-essentiels.204', 'fr.a1.adjectifs-essentiels.038',
  'fr.a1.adjectifs-essentiels.214', 'fr.a1.adjectifs-essentiels.026',
];

/** Every fr string a2.16 intends to AUTHOR into adjectifs-essentiels. */
const AUTHORED_FR = [
  'Il est beau.', 'Elle est belle.', 'Ils sont beaux.', 'Elles sont belles.',
  'Il est nouveau.', 'Elle est nouvelle.', 'Ils sont nouveaux.', 'Elles sont nouvelles.',
  'Il est vieux.', 'Elle est vieille.', 'Ils sont vieux.', 'Elles sont vieilles.',
  "C'est un beau sac.", "C'est un nouveau sac.", "C'est un vieux sac.",
  'nouvel',
];

async function main() {
  const pg = new Pool({ connectionString: process.env.SUPABASE_DB_URL ?? process.env.DATABASE_URL });
  const seed = JSON.parse(readFileSync(SEED, 'utf8'));
  const seedIds = new Set((seed.items ?? []).map((i: any) => i.id));
  const lessons: any[] = seed.lessons ?? [];

  console.log('══ A. THE CARRIED ROWS: seed membership, gender, respell, drills ══');
  const { rows } = await pg.query(
    `select id, fr, en, theme, respell, ipa, gender, kind, drills, status from content_items where id = any($1) order by id`, [CARRY]);
  for (const r of rows) {
    console.log(`  ${r.id.padEnd(40)} ${JSON.stringify(r.fr).padEnd(28)} gender=${String(r.gender ?? '-').padEnd(4)} respell=${(r.respell ?? 'NONE').padEnd(9)} inSeed=${seedIds.has(r.id) ? 'Y' : 'n'}  ${[...(r.drills ?? [])].join('/')}`);
  }
  const missing = CARRY.filter((id) => !rows.some((r: any) => r.id === id));
  if (missing.length) console.log(`  MISSING: ${missing.join(', ')}`);
  console.log(`  gendered rows among the carried: ${rows.filter((r: any) => r.gender).length}`);

  console.log('\n══ B. fr COLLISION INSIDE adjectifs-essentiels ══');
  const { rows: theme } = await pg.query(
    `select id, fr from content_items where theme = 'adjectifs-essentiels'`);
  const strip = (s: string) => s.toLowerCase().replace(/^(le |la |les |un |une |des |l'|l’)/, '').trim();
  const byFr = new Map<string, string[]>();
  for (const r of theme) {
    const k = strip(r.fr ?? '');
    byFr.set(k, [...(byFr.get(k) ?? []), r.id]);
  }
  for (const f of AUTHORED_FR) {
    const k = strip(f);
    const hit = byFr.get(k);
    console.log(`  ${hit ? 'COLLIDES' : '   free '}  ${f.padEnd(24)} ${hit ? hit.join(', ') : ''}`);
  }

  console.log('\n══ C. THE SAME RULE ELSEWHERE: who owns "mon amie" and "cet arbre"? ══');
  for (const l of lessons) {
    for (const g of (l.grammarIntroduced ?? [])) {
      if (/before a vowel|pre-?vocalic|vowel-initial|elision|cet\b|\bmon\b/i.test(g)) {
        console.log(`  ${String(l.id).padEnd(12)} ${g}`);
      }
    }
  }
  console.log('  --- counts on learner surfaces ---');
  const NOTATION = new Set(['id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill', 'retest', 'accept', 'recordingId', 'ipa', 'respell', 'audioRef']);
  const walk = (v: any, out: string[]) => {
    if (typeof v === 'string') out.push(v);
    else if (Array.isArray(v)) v.forEach((x) => walk(x, out));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!NOTATION.has(k)) walk(x, out);
  };
  for (const id of ['a1.17.l1', 'sons.07.l1', 'a1.16.l1', 'a1.04.l1']) {
    const l = lessons.find((x) => x.id === id);
    if (!l) { console.log(`  ${id} ABSENT`); continue; }
    const { grammarIntroduced, grammarAssumed, ...rest } = l;
    void grammarIntroduced; void grammarAssumed;
    const out: string[] = []; walk(rest, out);
    const t = out.join('\n');
    const c = ['cet', 'mon amie', 'ma amie', 'mon', 'ma', "l'ami", 'apostrophe'].map((w) => `${w}=${(t.match(shape(w)) ?? []).length}`);
    console.log(`  ${id.padEnd(11)} ${c.join('  ')}`);
  }

  console.log('\n══ D. sons.07 ON THE PAGE: its reframe, its sections, what it names ══');
  const s07 = lessons.find((x) => x.id === 'sons.07.l1');
  if (s07) {
    console.log(`  reframe: ${JSON.stringify(s07.reframe)}`);
    console.log(`  sections: ${s07.sections.map((s: any) => `${s.id}:${s.type}`).join(' · ')}`);
    console.log(`  intro: ${s07.intro}`);
  }

  console.log('\n══ E. THE HOME-THEME ROWS THIS LESSON MUST NOT DUPLICATE ══');
  const { rows: near } = await pg.query(
    `select id, fr, respell, drills from content_items
      where theme='adjectifs-essentiels'
        and (fr ilike '%beau%' or fr ilike '%bel %' or fr ilike '%belle%'
          or fr ilike '%nouve%' or fr ilike '%vieu%' or fr ilike '%vieil%')
      order by id`);
  for (const r of near) console.log(`  ${r.id.padEnd(40)} ${String(r.fr).padEnd(42)} [${r.respell ?? '-'}] ${[...(r.drills ?? [])].join('/')}`);

  await pg.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
