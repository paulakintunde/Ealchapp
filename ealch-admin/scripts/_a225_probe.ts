/* a2.25 « Y et EN » — the measurement probe.
 *
 *     pnpm tsx scripts/_a225_probe.ts
 *
 * Everything the brief asserts, re-measured against Postgres before a line of
 * content is written. Corrections §10: the row COUNT is the signal, never the
 * maximum.
 */
import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { fold } from '../../ealch-v2/src/content/answer.logic.ts';

const THEME = 'pronoms-essentiels';

const HEADWORDS = ['aller', 'penser', 'jouer', 'vouloir', 'avoir', 'boire', 'prendre',
  'parler', 'manger', 'acheter', 'venir', 'revenir', 'rêver', 's\'occuper'];

const FRAMES = [
  "J'y vais.", "J'en ai.", "J'en parle.", "J'en veux deux.", 'Il y en a.',
  "J'y pense.", "Tu en as ?", "Je n'y vais pas.", "Je n'en veux pas.",
  'Je vais à Paris.', 'Je parle de mon travail.', 'Il y a du pain.',
];

const PHRASES = ['il y a', "j'y", "j'en", "n'y", "n'en", 'y aller', 'en France', 'en deux heures',
  'tu en as', 'il y en a', 'j\'y vais', 'j\'en ai', 'j\'en veux', 'y penser'];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  const c = await pool.connect();

  console.log('\n══ a2.25 PROBE ══════════════════════════════════════════════\n');

  /* ── 1. The theme, the count and the next free id ─────────────────────── */
  const { rows: themeRows } = await c.query(
    `select id, fr, respell, gender, theme from content_items where theme=$1 and status='published' order by id`, [THEME]);
  const a2 = themeRows.filter((r) => /^fr\.a2\.pronoms-essentiels\.\d{3}$/.test(r.id));
  const nums = a2.map((r) => Number(/\.(\d{3})$/.exec(r.id)![1])).sort((x, y) => x - y);
  const gaps: number[] = [];
  for (let i = 1; i <= (nums[nums.length - 1] ?? 0); i += 1) if (!nums.includes(i)) gaps.push(i);
  console.log(`1. THEME ${THEME}`);
  console.log(`   published rows      ${themeRows.length}`);
  console.log(`   fr.a2.* rows        ${a2.length}, max .${String(nums[nums.length - 1]).padStart(3, '0')}`);
  console.log(`   gaps in fr.a2.*     ${gaps.length ? gaps.join(', ') : 'none'}`);
  console.log(`   NEXT FREE           .${String((nums[nums.length - 1] ?? 0) + 1).padStart(3, '0')}`);

  /* duplicate fr, the flashhub way */
  const strip = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/u, '')
    .replace(/[.,!?;:«»"]/gu, '').trim();
  const g = new Map<string, string[]>();
  for (const r of themeRows) g.set(strip(r.fr), [...(g.get(strip(r.fr)) ?? []), r.id]);
  const dupes = [...g].filter(([, ids]) => ids.length > 1);
  console.log(`   duplicate fr groups ${dupes.length}${dupes.length ? `: ${dupes.slice(0, 4).map(([k]) => k).join(' · ')}` : ''}`);

  /* ── 2. Headwords ─────────────────────────────────────────────────────── */
  console.log('\n2. HEADWORDS: every published row, with the flag');
  for (const w of HEADWORDS) {
    const { rows } = await c.query(
      `select id, theme, respell, gender, status from content_items where fr=$1 order by id`, [w]);
    if (!rows.length) { console.log(`   ${w.padEnd(12)} ABSENT`); continue; }
    console.log(`   ${w.padEnd(12)} ${rows.length} row(s)`);
    for (const r of rows) {
      const flag = r.respell ? (hasPlainNasalFor(w, r.respell) ? ' FLAGGED' : '') : ' NO-RESPELL';
      console.log(`     ${r.id.padEnd(42)} ${String(r.respell ?? '-').padEnd(16)}${r.gender ? ` g=${r.gender}` : ''}${flag}${r.status !== 'published' ? ` [${r.status}]` : ''}`);
    }
  }

  /* ── 3. Frames: absent as whole sentences? ────────────────────────────── */
  const { rows: sentences } = await c.query(
    `select id, fr, theme, respell, gender from content_items where kind='sentence' and status='published'`);
  console.log(`\n3. FRAMES against ${sentences.length} published sentences`);
  for (const f of FRAMES) {
    const exact = sentences.filter((s) => s.fr.toLowerCase() === f.toLowerCase());
    const sub = sentences.filter((s) => s.fr.toLowerCase().includes(f.replace(/\s*[.?!]$/u, '').toLowerCase()));
    console.log(`   ${f.padEnd(28)} exact ${String(exact.length).padStart(3)}   substring ${String(sub.length).padStart(3)}   ${sub.slice(0, 2).map((s) => s.id).join(' ')}`);
  }

  /* ── 4. Phrases across the whole corpus ───────────────────────────────── */
  const { rows: all } = await c.query(`select id, fr, en, theme, respell, gender, kind from content_items where status='published'`);
  console.log(`\n4. PHRASES across ${all.length} published rows`);
  for (const p of PHRASES) {
    const hits = all.filter((r) => r.fr.toLowerCase().includes(p.toLowerCase()));
    console.log(`   ${p.padEnd(16)} ${String(hits.length).padStart(4)}   ${hits.slice(0, 3).map((r) => r.id).join(' ')}`);
  }

  /* ── 5. il y a rows that are IMPORTABLE ───────────────────────────────── */
  const ilya = all.filter((r) => /(?<![\p{L}\p{N}-])il y a(?![\p{L}\p{N}'’-])/iu.test(r.fr));
  const importable = ilya.filter((r) => r.respell && !r.gender);
  console.log(`\n5. « il y a »: ${ilya.length} rows, ${importable.length} with a respelling and no gender`);
  for (const r of importable.slice(0, 14)) {
    console.log(`   ${r.id.padEnd(44)} ${r.theme.padEnd(22)} ${String(r.respell).slice(0, 30).padEnd(30)} « ${r.fr.slice(0, 44)} »`);
  }
  const inTheme = importable.filter((r) => r.theme === THEME);
  console.log(`   in ${THEME}: ${inTheme.length}`);
  for (const r of inTheme) console.log(`     ${r.id} « ${r.fr} » [${r.respell}]`);

  /* ── 6. The y/en pronoun rows the brief names ─────────────────────────── */
  console.log('\n6. THE ROWS THE BRIEF NAMES');
  for (const id of ['fr.a2.pronoms-essentiels.029', 'fr.a2.pronoms-essentiels.032',
    'fr.a1.pronoms-essentiels.100', 'fr.a2.conflits-reconciliation.052',
    'fr.a2.rp-recits-temps.051', 'fr.a2.entraide.008',
    'fr.a2.pronoms-essentiels.237', 'fr.a2.pronoms-essentiels.238',
    'fr.a2.pronoms-essentiels.190', 'fr.sons.jours-et-mois.081']) {
    const r = all.find((x) => x.id === id);
    console.log(`   ${id.padEnd(42)} ${r ? `« ${r.fr} » [${r.respell ?? '-'}] ${r.theme}${r.gender ? ` g=${r.gender}` : ''}` : 'NOT PUBLISHED'}`);
  }

  /* ── 7. Every published row carrying y or en as a PRONOUN ─────────────── */
  const EN_EL = /(?<![\p{L}\p{N}-])(j|n|m|t|s|qu)['’]en(?![\p{L}\p{N}'’-])/iu;
  const Y_EL = /(?<![\p{L}\p{N}-])(j|n|m|t|s)['’]y(?![\p{L}\p{N}'’-])/iu;
  const pron = all.filter((r) => EN_EL.test(r.fr) || Y_EL.test(r.fr));
  console.log(`\n7. ROWS CARRYING j'y / j'en / n'y / n'en etc: ${pron.length}`);
  for (const r of pron.slice(0, 25)) {
    console.log(`   ${r.id.padEnd(44)} ${r.theme.padEnd(24)} « ${r.fr.slice(0, 50)} »  [${String(r.respell ?? '-').slice(0, 24)}]${r.gender ? ` g=${r.gender}` : ''}`);
  }

  /* ── 8. dicteeMode on the candidate frames ────────────────────────────── */
  console.log('\n8. dicteeMode, through the real function');
  for (const f of ["J'y vais.", "J'en ai.", "J'en parle.", 'Il y en a.', "J'en veux deux.",
    "J'y pense souvent.", "Je n'y vais pas.", "Je n'en veux pas.", 'Je parle de mon travail.',
    'Je vais à Paris.', "J'en ai deux.", 'Tu en as ?', "J'y suis.", 'Il y a du pain.',
    "J'en bois beaucoup.", "J'y joue souvent.", "Elle en veut.", "Nous y allons."]) {
    const letters = f.replace(/[^A-Za-zÀ-ÿ]/gu, '').length;
    console.log(`   ${f.padEnd(28)} ${String(letters).padStart(2)} letters   ${dicteeMode(f)}`);
  }

  /* ── 9. fold(): what cannot be tested ─────────────────────────────────── */
  console.log('\n9. fold(), measured');
  const pairs: [string, string][] = [
    ['Je vais à Paris.', 'Je vais a Paris.'],
    ['Où vas-tu ?', 'Ou vas-tu ?'],
    ["J'y vais.", 'Je vais.'],
    ["J'en ai.", "J'ai."],
    ["J'en ai.", "J'en ai"],
    ['Il y en a.', 'Il y a.'],
  ];
  for (const [a, b] of pairs) console.log(`   ${a.padEnd(22)} vs ${b.padEnd(22)} ${fold(a) === fold(b) ? 'ONE ANSWER' : 'distinct'}`);

  /* ── 10. Nasal checks on the respellings this build will write ────────── */
  console.log('\n10. hasPlainNasalFor on the candidate respellings');
  const cands: [string, string][] = [
    ["J'en ai.", 'zhahⁿ NAY'], ["J'en ai.", 'zhahn NAY'],
    ["J'en parle.", 'zhahⁿ PARL'], ["J'en parle.", 'zhahn PARL'],
    ['en France', 'ahⁿ FRAHⁿSS'], ['en France', 'ahn FRAHNSS'],
    ['en deux heures', 'ahⁿ DEU ZUHR'],
    ['Il y en a.', 'eel ee ahⁿ NAH'], ['Il y a', 'EEL EE AH'],
    ["J'y vais.", 'zhee VEH'], ['penser', 'pahn-SAY'], ['penser', 'pahⁿ-SAY'],
    ['prendre', 'PRAHⁿDR'], ['prendre', 'PRAHNDR'],
    ["J'en prends deux.", 'zhahⁿ PRAHⁿ DEU'],
    ["J'en veux.", 'zhahⁿ VEU'],
    ['Il y en a beaucoup.', 'eel ee ahⁿ NAH boh-KOO'],
    ['une', 'ÜN'], ['J\'en ai une.', 'zhahⁿ nay ÜN'],
  ];
  for (const [fr2, re] of cands) {
    console.log(`   ${fr2.padEnd(22)} ${re.padEnd(18)} ${hasPlainNasalFor(fr2, re) ? 'FLAGGED' : 'clean'}`);
  }

  /* ── 11. Two-pronoun sentences in the corpus ──────────────────────────── */
  const TWO = /(?<![\p{L}\p{N}'’-])((le|la|les)\s+(lui|leur)|(me|te|se)\s+(le|la|les)|(le|la|les|lui|leur)\s+(y|en))(?![\p{L}\p{N}'’-])\s+\p{L}/iu;
  const two = all.filter((r) => TWO.test(r.fr));
  console.log(`\n11. TWO-PRONOUN sentences published: ${two.length}`);
  for (const r of two.slice(0, 10)) console.log(`   ${r.id.padEnd(42)} « ${r.fr} »`);

  /* ── 12. y en, the one order this build teaches ───────────────────────── */
  const yen = all.filter((r) => /(?<![\p{L}\p{N}'’-])y\s+en(?![\p{L}\p{N}'’-])/iu.test(r.fr));
  console.log(`\n12. « y en » published: ${yen.length}`);
  for (const r of yen.slice(0, 10)) console.log(`   ${r.id.padEnd(42)} « ${r.fr} » [${r.respell ?? '-'}]`);

  /* ── 13. The seed cut ─────────────────────────────────────────────────── */
  console.log('\n13. done.\n');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
