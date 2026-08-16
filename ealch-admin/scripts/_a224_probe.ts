/* a2.24 measurement probe. Throwaway; the durable read is _a224_manifest.ts.
 *
 *     pnpm tsx scripts/_a224_probe.ts
 */
import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { fold } from '../../ealch-v2/src/content/answer.logic.ts';

const THEME = 'pronoms-essentiels';

const VERBS = [
  'parler', 'donner', 'dire', 'téléphoner', 'répondre',
  'demander', 'écrire', 'offrir', 'montrer', 'envoyer',
];

/** The frames this lesson wants to author. */
const FRAMES = [
  'Je lui parle.', 'Je leur parle.', 'Je lui donne le livre.', 'Il lui téléphone.',
  'Je ne lui parle pas.', 'Je lui réponds.', 'Je leur écris.', 'Je lui demande.',
  'Tu lui parles.', 'Nous leur parlons.', 'Je parle à Marie.', 'Je parle avec lui.',
  'Je lui ai parlé.', 'Je leur montre la photo.', 'Elle lui offre un cadeau.',
  'Je lui envoie un message.', 'Vous leur dites la vérité.', 'Ils lui répondent.',
  'Je leur donne les clés.', 'Je lui écris souvent.', 'Je ne leur parle pas.',
  'Je lui dis bonjour.', 'Tu leur téléphones ?', 'Je leur parle demain.',
];

/** Respellings the probe surfaced as competing. Measured through the REAL
 *  function, all three states, corrections §14.1. */
const CANDIDATES: { fr: string; values: string[] }[] = [
  { fr: 'répondre', values: ['ray-POHⁿDR', 'ray-POHNDR', 'ray-POHNDruh'] },
  { fr: 'demander', values: ['duh-mahⁿ-DAY', 'duh-mahn-DAY'] },
  { fr: 'montrer', values: ['mohⁿ-TRAY', 'mohn-TRAY'] },
  { fr: 'envoyer', values: ['ahn-vwah-YAY', 'ahn-vwa-YAY', 'ahⁿ-vwah-YAY', 'ahⁿ-vwa-YAY'] },
  { fr: 'donner', values: ['doh-NAY', 'do-NAY'] },
  { fr: 'parler', values: ['par-LAY'] },
  { fr: 'dire', values: ['DEER'] },
  { fr: 'téléphoner', values: ['tay-lay-foh-NAY'] },
  { fr: 'écrire', values: ['ay-KREER'] },
  { fr: 'offrir', values: ['oh-FREER'] },
];

const strip = (s: string) =>
  s.toLowerCase().replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/u, '')
    .replace(/[.,!?;:«»"]/gu, '').trim();

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  const c = await pool.connect();

  console.log('\n══ 1. THE THEME AND THE NEXT FREE ID ══════════════════════════════\n');
  const { rows: themeRows } = await c.query(
    `select id, fr, respell from content_items where theme=$1 and status='published' order by id`, [THEME]);
  console.log(`  ${THEME}: ${themeRows.length} published rows`);
  const a2 = themeRows.filter((r) => /^fr\.a2\.pronoms-essentiels\.\d{3}$/u.test(r.id));
  const nums = a2.map((r) => Number(/\.(\d{3})$/u.exec(r.id)![1])).sort((a, b) => a - b);
  console.log(`  fr.a2.* : ${a2.length} rows, min .${String(nums[0]).padStart(3, '0')}, max .${String(nums[nums.length - 1]).padStart(3, '0')}`);
  const gaps: number[] = [];
  for (let n = nums[0]!; n <= nums[nums.length - 1]!; n += 1) if (!nums.includes(n)) gaps.push(n);
  console.log(`  gaps inside the a2 run: ${gaps.length ? gaps.join(', ') : 'none'}`);
  console.log(`  NEXT FREE: .${String(nums[nums.length - 1]! + 1).padStart(3, '0')}`);

  // duplicate fr groups in the theme, flashhub-coverage style
  const groups = new Map<string, string[]>();
  for (const r of themeRows) groups.set(strip(r.fr), [...(groups.get(strip(r.fr)) ?? []), r.id]);
  const dupes = [...groups].filter(([, ids]) => ids.length > 1);
  console.log(`  pre-existing duplicate fr groups: ${dupes.length}`);
  for (const [k, ids] of dupes.slice(0, 8)) console.log(`    « ${k} » ${ids.join(' ')}`);

  console.log('\n══ 2. THE FRAMES, EXACT AND AS SUBSTRING ══════════════════════════\n');
  const { rows: sentences } = await c.query(
    `select id, fr, theme from content_items where kind='sentence' and status='published'`);
  console.log(`  (${sentences.length} published sentences)\n`);
  for (const f of FRAMES) {
    const bare = f.replace(/[.?!]$/u, '').toLowerCase();
    const exact = sentences.filter((s) => s.fr.toLowerCase() === f.toLowerCase());
    const sub = sentences.filter((s) => s.fr.toLowerCase().includes(bare));
    const mode = dicteeMode(f);
    const letters = f.replace(/[^A-Za-zÀ-ÿ]/gu, '').length;
    console.log(`  ${f.padEnd(30)} exact ${String(exact.length).padStart(2)}  sub ${String(sub.length).padStart(3)}  ${String(letters).padStart(2)}L  ${mode}${exact.length ? `   ← ${exact.map((x) => x.id).join(' ')}` : ''}`);
  }

  console.log('\n══ 3. EVERY PUBLISHED ROW FOR THE TEN VERBS ═══════════════════════\n');
  for (const v of VERBS) {
    const { rows } = await c.query(
      `select id, fr, respell, en, gender, kind, theme, level, notes, tags, drills, version
         from content_items where fr=$1 order by id`, [v]);
    console.log(`  ${v}  (${rows.length})`);
    for (const r of rows) {
      const flag = r.respell ? (hasPlainNasalFor(r.fr, r.respell) ? 'FLAGGED' : 'clean  ') : 'NO RESPELL';
      console.log(`    ${r.id.padEnd(42)} ${String(r.respell ?? '—').padEnd(16)} ${flag}  g=${r.gender ?? '-'} k=${r.kind} lvl=${r.level} « ${r.en} »`);
    }
  }

  console.log('\n══ 4. RESPELL CANDIDATES THROUGH THE REAL hasPlainNasalFor ════════\n');
  for (const cand of CANDIDATES) {
    console.log(`  ${cand.fr}`);
    for (const v of cand.values) {
      console.log(`    ${v.padEnd(18)} ${hasPlainNasalFor(cand.fr, v) ? 'FLAGGED' : 'clean'}`);
    }
  }

  console.log('\n══ 5. lui / leur / leurs POPULATION ═══════════════════════════════\n');
  for (const probe of ['je lui', 'je leur', 'il lui', 'elle lui', 'nous leur', 'lui parle',
    'leur parle', 'leur dit', 'lui dit', 'avec lui', 'pour lui', 'leur maison', 'leurs maisons',
    'à lui', 'à elle', 'leurs enfants', 'leur enfant']) {
    const hits = sentences.filter((s) => s.fr.toLowerCase().includes(probe));
    console.log(`  ${probe.padEnd(18)} ${String(hits.length).padStart(3)}   ${hits.slice(0, 3).map((h) => h.id).join(' ')}`);
  }

  console.log('\n══ 6. fold() ON THE leur/leurs PAIR ═══════════════════════════════\n');
  for (const [a, b] of [['Je leur parle.', 'Je leurs parle.'], ['leur', 'leurs'],
    ['Je lui parle.', 'Je leur parle.'], ['à Marie', 'a Marie']] as const) {
    console.log(`  fold(« ${a} ») === fold(« ${b} »)  →  ${fold(a) === fold(b)}   [${fold(a)} | ${fold(b)}]`);
  }

  console.log('\n══ 7. THE NEIGHBOURS AS SHIPPED ═══════════════════════════════════\n');
  const { rows: lessons } = await c.query(
    `select slug, body from content_units where kind='lesson' and slug = any($1)`,
    [['a2.06.l1', 'a2.23.l1', 'a1.17.l1', 'a2.22.l1', 'a2.19.l1', 'a1.18.l1', 'a2.04.l1', 'a2.02.l1']]);
  for (const l of lessons) {
    const b = l.body as { version?: number; reframe?: string };
    console.log(`  ${l.slug.padEnd(12)} v${b.version}  reframe: « ${b.reframe} »`);
  }

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
