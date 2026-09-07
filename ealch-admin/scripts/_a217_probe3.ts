/* a2.17 pre-flight, pass 3. The rows this build would import, the strings it
 * would author, the dictée through the real dicteeMode, and the nasal split.
 *
 *   pnpm tsx scripts/_a217_probe3.ts
 */
import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';

/** Every row this build is thinking of importing, by id. */
const WANT = [
  // the three chain adjectives
  'fr.sons.adjectifs-essentiels.021', // lent
  'fr.sons.adjectifs-essentiels.033', // doux
  'fr.sons.adjectifs-essentiels.037', // sérieux
  'fr.a2.adjectifs-essentiels.019',   // sérieuse  <- a2.03's own row
  'fr.a2.adjectifs-essentiels.005',   // Il est sérieux.
  'fr.a2.adjectifs-essentiels.006',   // Elle est sérieuse.
  // the three chain adverbs
  'fr.sons.adverbes-essentiels.001',  // lentement
  'fr.sons.adverbes-essentiels.003',  // doucement
  'fr.sons.adverbes-essentiels.021',  // sérieusement
  // the already-ends-in-e case
  'fr.sons.adjectifs-essentiels.020', // rapide
  'fr.sons.adjectifs-essentiels.018', // facile
  'fr.sons.adverbes-essentiels.002',  // rapidement
  'fr.sons.adverbes-essentiels.004',  // facilement
  // the irregulars
  'fr.sons.mots-essentiels.045',      // bien   BYAN
  'fr.sons.mots-essentiels.046',      // mal
  'fr.sons.mots-essentiels.064',      // vite
  'fr.sons.adjectifs-essentiels.003', // bon
  'fr.sons.adjectifs-essentiels.004', // mauvais
  'fr.sons.nasales.167',              // bonne
  // the frequency adverbs
  'fr.sons.mots-essentiels.056',      // souvent
  'fr.sons.mots-essentiels.054',      // toujours
  // the two spellings, one sound
  'fr.sons.adverbes-essentiels.018',  // évidemment
  'fr.sons.adverbes-essentiels.045',  // constamment
  // candidate placement sentences
  'fr.sons.nasales.001',              // Maman chante souvent.
  'fr.sons.nasales.013',              // L'enfant mange trop lentement.
  'fr.sons.nasales.014',              // Le vent souffle doucement.
  'fr.sons.nasales.078',              // Son nom sonne bien.
  'fr.sons.alphabet.385',             // Notez bien chaque lettre.
  'fr.a2.verbes.191',                 // Elle grandit vite.
  'fr.a2.verbes.477',                 // Il court vite.
  'fr.sons.voyelles.363',             // La roue tourne vite.
  'fr.a2.verbes.189',                 // Il réussit toujours.
];

/** The unseen adjectives the generalisation test would use, and their adverbs. */
const UNSEEN = ['parfait', 'parfaite', 'certain', 'certaine', 'froid', 'froide',
  'parfaitement', 'certainement', 'froidement', 'poliment', 'gentiment', 'grandement'];

/** Every French string this build would AUTHOR. Nothing here may collide with a
 *  row already in adverbes-essentiels, and every dictée target must be LETTERS. */
const AUTHOR = [
  'lente', 'douce', 'évident', 'constant',
  'Il parle lentement.',
  'Il parle doucement.',
  'Il travaille sérieusement.',
  'Elle chante bien.',
  'Il chante mal.',
  'Il parle vite.',
  'Je mange souvent.',
  'Je mange souvent au restaurant.',
  'Elle répond toujours.',
  "C'est un bon chanteur.",
  'Il est évident.',
  'Elle est évidente.',
  'Il est constant.',
  'Elle est constante.',
  'Il travaille constamment.',
  "C'est évidemment vrai.",
  'Elle parle rapidement.',
  'Elle comprend facilement.',
  'Il est lent.',
  'Elle est lente.',
  'Il est doux.',
  'Elle est douce.',
  'évidemment', 'constamment', 'lentement', 'doucement', 'sérieusement',
];

/** The nasal repairs, and the HALF-REPAIRED value in the middle. */
const NASAL: [string, string, string, string][] = [
  // fr, stored, half-repaired (only what the checker reports), fully repaired
  ['lentement', 'lahnt-MAHN', 'lahnt-MAHⁿ', 'lahⁿt-MAHⁿ'],
  ['constamment', 'kohns-ta-MAHN', 'kohns-ta-MAHⁿ', 'kohⁿs-ta-MAHⁿ'],
  ['rapidement', 'ra-peed-MAHN', 'ra-peed-MAHⁿ', 'ra-peed-MAHⁿ'],
  ['doucement', 'doos-MAHN', 'doos-MAHⁿ', 'doos-MAHⁿ'],
  ['sérieusement', 'say-ryuhz-MAHN', 'say-ryuhz-MAHⁿ', 'say-ryuhz-MAHⁿ'],
  ['facilement', 'fa-seel-MAHN', 'fa-seel-MAHⁿ', 'fa-seel-MAHⁿ'],
  ['évidemment', 'ay-vee-da-MAHN', 'ay-vee-da-MAHⁿ', 'ay-vee-da-MAHⁿ'],
  ['souvent', 'soo-VAHN', 'soo-VAHⁿ', 'soo-VAHⁿ'],
  ['bien', 'BYAN', 'BYAⁿ', 'BYEHⁿ'],
  ['lent', 'LAHN', 'LAHⁿ', 'LAHⁿ'],
  ['évident', 'ay-vee-DAHⁿ', 'ay-vee-DAHⁿ', 'ay-vee-DAHⁿ'],
  ['constant', 'kohⁿs-TAHⁿ', 'kohⁿs-TAHⁿ', 'kohⁿs-TAHⁿ'],
  ['lente', 'LAHⁿT', 'LAHⁿT', 'LAHⁿT'],
  ['évidente', 'ay-vee-DAHⁿT', 'ay-vee-DAHⁿT', 'ay-vee-DAHⁿT'],
  ['constante', 'kohⁿs-TAHⁿT', 'kohⁿs-TAHⁿT', 'kohⁿs-TAHⁿT'],
  ['Il parle lentement.', 'eel PARL lahⁿt-MAHⁿ', '', ''],
  ['Il parle doucement.', 'eel PARL doos-MAHⁿ', '', ''],
  ['Elle chante bien.', 'el SHAHⁿT BYEHⁿ', '', ''],
  ['Je mange souvent.', 'zhuh MAHⁿZH soo-VAHⁿ', '', ''],
  ['Il travaille constamment.', 'eel tra-VAHY kohⁿs-ta-MAHⁿ', '', ''],
  ["C'est évidemment vrai.", 'seh-t ay-vee-da-MAHⁿ VREH', '', ''],
];

async function main() {
  const pg = new Pool({ connectionString: process.env.SUPABASE_DB_URL ?? process.env.DATABASE_URL });
  const { rows } = await pg.query(
    'select id, fr, en, theme, respell, ipa, gender, kind, status, drills::text[] drills, level, tags, notes, card_type from content_items where id = any($1)', [WANT]);
  const by = new Map(rows.map((r: any) => [r.id, r]));

  console.log('══ 1. THE ROWS THIS BUILD WOULD IMPORT ══');
  for (const id of WANT) {
    const r: any = by.get(id);
    if (!r) { console.log(`  ${id.padEnd(36)} NOT IN POSTGRES`); continue; }
    const flagged = r.respell ? hasPlainNasalFor(r.fr, r.respell) : false;
    console.log(`  ${id.padEnd(36)} ${String(r.fr).slice(0, 34).padEnd(36)} [${String(r.respell ?? '-').padEnd(20)}] g=${r.gender ?? '-'} ${r.kind.padEnd(8)} ${r.status.padEnd(9)} nasal=${flagged ? 'FLAGGED' : 'ok'}`);
    console.log(`      en=${JSON.stringify(r.en)}  ipa=${r.ipa}  theme=${r.theme}  level=${r.level}  drills=${(r.drills ?? []).join('/')}  tags=${JSON.stringify(r.tags)}  card_type=${r.card_type ?? '-'}  tie=${String(r.respell ?? '').includes('‿') ? 'U+203F' : '-'}`);
    if (r.notes) console.log(`      notes=${JSON.stringify(String(r.notes).slice(0, 90))}`);
  }

  console.log('\n══ 2. THE UNSEEN ADJECTIVES AND THEIR ADVERBS ══');
  const { rows: un } = await pg.query(
    `select id, fr, respell, kind, status, theme, gender from content_items
      where lower(regexp_replace(fr, '^(le |la |les |un |une |des |l''|l’)', '')) = any($1) order by fr, id`, [UNSEEN]);
  for (const w of UNSEEN) {
    const hit = un.filter((r: any) => String(r.fr).toLowerCase().replace(/^(le |la |les |un |une |des |l'|l’)/, '') === w);
    console.log(`  ${w.padEnd(14)} ${hit.length ? hit.map((r: any) => `${r.id}[${r.respell ?? '-'}]${r.gender ? ' g=' + r.gender : ''}`).join('  ') : 'ABSENT'}`);
  }

  console.log('\n══ 3. WOULD ANY AUTHORED STRING COLLIDE INSIDE adverbes-essentiels ══');
  const { rows: theme } = await pg.query("select id, fr, kind from content_items where theme = 'adverbes-essentiels'");
  const strip = (s: string) => s.replace(/^(le |la |les |l'|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const inTheme = new Map<string, string>();
  for (const r of theme) inTheme.set(strip(String(r.fr)), r.id);
  let clashes = 0;
  for (const s of AUTHOR) {
    const hit = inTheme.get(strip(s));
    if (hit) { console.log(`  COLLIDES  ${JSON.stringify(s).padEnd(36)} ${hit}`); clashes += 1; }
  }
  console.log(`  ${clashes} collision(s) out of ${AUTHOR.length} candidate strings`);

  console.log('\n══ 4. dicteeMode ON EVERY CANDIDATE, THROUGH THE REAL FUNCTION ══');
  for (const s of AUTHOR) {
    const letters = s.replace(/[^\p{L}]/gu, '').length;
    console.log(`  ${dicteeMode(s) === 'letters' ? 'LETTERS' : 'WORD   '}  ${String(letters).padStart(2)}  ${s}`);
  }

  console.log('\n══ 5. THE NASAL SPLIT: stored, half-repaired, fully repaired ══');
  console.log('  fr                        stored              flagged  half-repaired       flagged  full                flagged');
  for (const [fr, stored, half, full] of NASAL) {
    const f1 = stored ? hasPlainNasalFor(fr, stored) : false;
    const f2 = half ? hasPlainNasalFor(fr, half) : null;
    const f3 = full ? hasPlainNasalFor(fr, full) : null;
    console.log(`  ${fr.padEnd(26)}${stored.padEnd(20)}${(f1 ? 'YES' : 'no ').padEnd(9)}${(half || '-').padEnd(20)}${(f2 === null ? '-' : f2 ? 'YES' : 'no ').padEnd(9)}${(full || '-').padEnd(20)}${f3 === null ? '-' : f3 ? 'YES' : 'no '}`);
  }

  console.log('\n══ 6. HOW MANY ROWS IN THE CORPUS WOULD A BLANKET -ment REPAIR TOUCH ══');
  const { rows: mahn } = await pg.query(
    "select count(*) n from content_items where respell like '%MAHN%'");
  const { rows: mahnSup } = await pg.query(
    "select count(*) n from content_items where respell like '%MAHⁿ%'");
  console.log(`  rows whose respell contains MAHN  : ${mahn[0].n}`);
  console.log(`  rows whose respell contains MAHⁿ : ${mahnSup[0].n}`);
  const { rows: byTheme } = await pg.query(
    "select theme, count(*) n from content_items where respell like '%MAHN%' group by theme order by 2 desc limit 8");
  for (const r of byTheme) console.log(`      ${String(r.theme).padEnd(28)} ${r.n}`);

  console.log('\n══ 7. THE PLACEMENT CLAIM, MEASURED: adverb after the conjugated verb ══');
  const { rows: pub } = await pg.query(
    "select id, fr from content_items where kind = 'sentence' and status = 'published'");
  const AFTER = /\b(mange|parle|chante|travaille|arrive|répond|comprend|joue|marche|écoute|regarde)\s+(souvent|toujours|bien|mal|vite|lentement|rapidement|doucement|vraiment|beaucoup)\b/i;
  const BEFORE = /\b(souvent|toujours|bien|mal|vite|lentement|rapidement|doucement|vraiment)\s+(mange|parle|chante|travaille|arrive|répond|comprend|joue|marche|écoute|regarde)\b/i;
  const after = pub.filter((r: any) => AFTER.test(r.fr));
  const before = pub.filter((r: any) => BEFORE.test(r.fr));
  console.log(`  verb + adverb: ${after.length} published sentences`);
  console.log(`  adverb + verb: ${before.length} published sentences`);
  for (const r of before.slice(0, 8)) console.log(`      ${r.id.padEnd(34)} ${r.fr}`);

  await pg.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
