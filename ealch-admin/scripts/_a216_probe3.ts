/* a2.16 pre-flight, part 3. The frames as they will actually be authored, the
 * -x plural ownership question, and the nouns.
 *
 *   pnpm tsx scripts/_a216_probe3.ts
 */
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const SEED = resolve(HERE, '../../ealch-v2/src/content/seed.json');

/** Exactly the rows a2.16 intends to author, with the respellings it intends. */
const ROWS: [string, string][] = [
  // the noun-phrase frame: the contrast, three pairs
  ["C'est un beau sac.", 'seh-t uhⁿ boh SAK'],
  ["C'est un bel arbre.", 'seh-t uhⁿ beh-LAHRBR'],
  ["C'est un nouveau sac.", 'seh-t uhⁿ noo-voh SAK'],
  ["C'est un nouvel ami.", 'seh-t uhⁿ noo-veh-la-MEE'],
  ["C'est un vieux sac.", 'seh-t uhⁿ vyuh SAK'],
  ["C'est un vieil homme.", 'seh-t uhⁿ vyeh-YOM'],
  // the predicate frame: gender and number
  ['Il est beau.', 'eel eh BOH'],
  ['Elle est belle.', 'el eh BEL'],
  ['Ils sont beaux.', 'eel sohⁿ BOH'],
  ['Elles sont belles.', 'el sohⁿ BEL'],
  ['Il est nouveau.', 'eel eh noo-VOH'],
  ['Elle est nouvelle.', 'el eh noo-VEL'],
  ['Ils sont nouveaux.', 'eel sohⁿ noo-VOH'],
  ['Elles sont nouvelles.', 'el sohⁿ noo-VEL'],
  ['Il est vieux.', 'eel eh VYUH'],
  ['Elle est vieille.', 'el eh VYEY'],
  ['Ils sont vieux.', 'eel sohⁿ VYUH'],
  ['Elles sont vieilles.', 'el sohⁿ VYEY'],
  // the headword
  ['nouvel', 'noo-VEL'],
  // the scene
  ['Vous cherchez un appartement ?', 'voo shehr-SHAY uh-nah-par-tuh-MAHⁿ'],
  ["Oui, c'est un bel appartement.", 'wee seh-t uhⁿ beh-la-par-tuh-MAHⁿ'],
];

const NOUNS = ['sac', 'arbre', 'ami', 'homme', 'appartement', 'immeuble', 'livre'];
const bareFr = (fr: string) =>
  fr.toLowerCase().replace(/^(le |la |les |un |une |des |l'|l’)/, '').trim();

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const shape = (w: string) =>
  new RegExp(`(?<![\\p{L}\\p{N}'’-])${esc(w)}(?![\\p{L}\\p{N}'’-])`, 'giu');

async function main() {
  const pg = new Pool({ connectionString: process.env.SUPABASE_DB_URL ?? process.env.DATABASE_URL });

  console.log('══ A. EVERY AUTHORED ROW: dictée mode AND the nasal checker ══');
  let letters = 0, words = 0, flagged = 0;
  for (const [fr, rs] of ROWS) {
    const m = dicteeMode(fr);
    const n = hasPlainNasalFor(fr, rs);
    if (m === 'letters') letters++; else words++;
    if (n) flagged++;
    console.log(`  ${String(fr.replace(/[^A-Za-zÀ-ÿ]/g, '').length).padStart(2)}  ${m === 'letters' ? 'LETTERS' : 'words  '}  ${n ? 'NASAL-FLAGGED' : '     ok      '}  ${fr.padEnd(31)} ${rs}`);
  }
  console.log(`  → ${letters} letters, ${words} words, ${flagged} flagged`);

  console.log('\n══ B. WHICH SUPERSCRIPTS THE CHECKER CAN SEE (break each one) ══');
  let seen = 0, blind = 0, total = 0;
  for (const [fr, rs] of ROWS) {
    const idx: number[] = [];
    for (let i = 0; i < rs.length; i++) if (rs[i] === 'ⁿ') idx.push(i);
    for (const i of idx) {
      total++;
      const broken = rs.slice(0, i) + 'n' + rs.slice(i + 1);
      const noticed = hasPlainNasalFor(fr, broken);
      if (noticed) seen++; else { blind++; console.log(`    BLIND  ${fr.padEnd(31)} ${broken}`); }
    }
  }
  console.log(`  → ${total} superscripts, ${seen} seen, ${blind} MISSED`);

  console.log('\n══ C. THE FALSE-POSITIVE PATH: candidates with a real /n/ or /m/ ══');
  const FP: [string, string][] = [
    ['un homme', 'uh-NOM'], ['Elle est belle.', 'el eh BEL'],
    ['un ami', 'uh-nah-MEE'], ['une amie', 'ü-nah-MEE'],
    ['un an', 'uh-NAHⁿ'], ['bonne', 'BON'], ['un immeuble', 'uh-nee-MUHBL'],
    ["C'est un vieil homme.", 'seh-t uhⁿ vyeh-YOM'],
  ];
  for (const [fr, rs] of FP) console.log(`  ${hasPlainNasalFor(fr, rs) ? 'FLAGGED' : '   ok  '}  ${fr.padEnd(24)} ${rs}`);

  console.log('\n══ D. THE NOUNS, BEST IMPORTABLE ROW EACH ══');
  const { rows: words2 } = await pg.query(
    `select id, fr, theme, respell, gender, status from content_items where kind <> 'sentence' and status='published'`);
  for (const n of NOUNS) {
    const hit = words2.filter((r: any) => bareFr(r.fr ?? '') === n && r.respell);
    console.log(`  ${n.padEnd(13)} ${hit.length} published+respelled`);
    for (const r of hit) console.log(`      ${r.id.padEnd(40)} ${JSON.stringify(r.fr).padEnd(18)} [${r.respell}]  gender=${r.gender ?? '-'}  theme=${r.theme}  tie=${String(r.respell).includes('‿') ? 'U+203F' : '-'}`);
  }

  console.log('\n══ E. WHO TEACHES THE -eau → -eaux PLURAL? (all 52 lesson bodies) ══');
  const seed = JSON.parse(readFileSync(SEED, 'utf8'));
  const lessons: any[] = seed.lessons ?? [];
  const NOTATION = new Set(['id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill', 'retest', 'accept', 'recordingId', 'ipa', 'respell', 'audioRef']);
  const walk = (v: any, out: string[]) => {
    if (typeof v === 'string') out.push(v);
    else if (Array.isArray(v)) v.forEach((x) => walk(x, out));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!NOTATION.has(k)) walk(x, out);
  };
  const PLURAL_MARKS = ['beaux', 'nouveaux', 'gâteaux', 'bateaux', 'châteaux', 'cheveux', 'journaux', '-eaux', 'eaux'];
  for (const l of lessons) {
    const out: string[] = []; walk(l, out);
    const text = out.join('\n');
    const hits = PLURAL_MARKS.map((w) => [w, (text.match(shape(w)) ?? []).length] as [string, number]).filter(([, n]) => n > 0);
    if (hits.length) console.log(`  ${String(l.id).padEnd(12)} ${hits.map(([w, n]) => `${w}=${n}`).join(' ')}`);
  }
  console.log('  (grammarIntroduced strings naming a plural in -x:)');
  for (const l of lessons) {
    for (const g of (l.grammarIntroduced ?? [])) {
      if (/plural|-x\b|-aux|-eaux/i.test(g)) console.log(`    ${String(l.id).padEnd(12)} ${g}`);
    }
  }

  console.log('\n══ F. a1.03 ENDING POPULATION BASELINE ══');
  const items: any[] = seed.items ?? [];
  const gendered = items.filter((i) => i.gender && i.kind === 'word' && !/\s/.test(String(i.fr).replace(/^(le |la |les |un |une |des |l'|l’)/, '')));
  console.log(`  gendered single-word rows in the seed: ${gendered.length}`);

  await pg.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
