/* a2.13 pre-flight. Measures the five things the brief left UNVERIFIED, plus the
 * things every A2 brief has been wrong about so far:
 *
 *   1. which `devoir` row is the VERB (seven of ten are the gendered noun)
 *   2. whether ANY unit owns `il faut` — the brief calls this a likely gap
 *   3. what the corpus holds for each paradigm cell of the three modals
 *   4. how modal + infinitive is actually used in published sentences
 *   5. whether the A1 themes hold enough infinitives for the unseen-verb mission
 *   6. the row COUNT of fr.a2.verbes and whether .341..380 is free
 *
 *     pnpm tsx scripts/_a213_probe.ts
 */
import './env';
import { Pool } from 'pg';

const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
function hasPhrase(hay: string, needle: string): boolean {
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = h[i + n.length] ?? '';
    if (!isWord(before) && !isWord(after)) return true;
    i += 1;
  }
  return false;
}

/** Every cell of the three paradigms, plus savoir for the a2.14 boundary. */
const CELLS = [
  'je veux', 'tu veux', 'il veut', 'on veut', 'nous voulons', 'vous voulez', 'ils veulent',
  'je peux', 'tu peux', 'il peut', 'on peut', 'nous pouvons', 'vous pouvez', 'ils peuvent',
  'je dois', 'tu dois', 'il doit', 'on doit', 'nous devons', 'vous devez', 'ils doivent',
  'je voudrais', 'tu voudrais', 'il voudrait', 'nous voudrions', 'vous voudriez',
  'je sais', 'il sait', 'nous savons', 'ils savent',
  'il faut',
];

/** The shape the lesson OWNS: a modal followed by an infinitive. */
const MODAL_SHAPE = /(^|[^a-zà-ÿ])(veux|veut|voulons|voulez|veulent|voudrais|voudrait|voudrions|voudriez|peux|peut|pouvons|pouvez|peuvent|dois|doit|devons|devez|doivent|faut)\s+(?:ne\s+|n['’]\s*)?([a-zà-ÿ]{3,}(?:er|ir|re|oir))(?![a-zà-ÿ])/i;

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  /* ── 1. THE UNIT ───────────────────────────────────────────────────────── */
  const u = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'curriculum_unit'",
  );
  const unit = u.rows.find((r) => String(r.body.id) === 'a2.13')?.body;
  console.log('## 1. Unit a2.13, byte for byte\n');
  console.log('  ', JSON.stringify(unit, null, 1).replace(/\n/g, '\n  '));

  /* ── 2. THE FOUR HEADWORDS, EVERY ROW, WITH GENDER ─────────────────────── */
  console.log('\n## 2. The four headwords: which row is the VERB\n');
  const hw = await c.query<{
    id: string; fr: string; en: string | null; theme: string; kind: string; level: string;
    respell: string | null; gender: string | null; drills: string[]; status: string;
  }>(
    `select id, fr, en, theme, kind, level, respell, gender, drills::text[] drills, status
       from content_items
      where lower(fr) = any($1::text[]) and status = 'published'
      order by fr, id`,
    [['vouloir', 'pouvoir', 'devoir', 'savoir', 'le devoir', 'les devoirs', 'le pouvoir', 'le savoir', 'le vouloir']],
  );
  for (const r of hw.rows) {
    console.log(
      `  ${r.gender ? 'NOUN?' : 'verb '} ${r.id.padEnd(34)} ${JSON.stringify(r.fr).padEnd(16)} kind=${r.kind.padEnd(7)} lvl=${r.level.padEnd(4)}`
      + ` theme=${r.theme.padEnd(22)} respell=${String(r.respell ?? '-').padEnd(12)} g=${r.gender ?? '-'} drills=${(r.drills ?? []).join('/')}`,
    );
    console.log(`        en: ${JSON.stringify(r.en)}`);
  }

  /* ── 3. THE PARADIGM CELLS ─────────────────────────────────────────────── */
  const sents = await c.query<{ id: string; fr: string; theme: string }>(
    "select id, fr, theme from content_items where kind = 'sentence' and status = 'published'",
  );
  console.log(`\n## 3. Paradigm cells across ${sents.rowCount} published sentences\n`);
  for (const cell of CELLS) {
    const hits = sents.rows.filter((r) => hasPhrase(r.fr, cell));
    console.log(`  ${cell.padEnd(16)} ${String(hits.length).padStart(3)}   ${hits.slice(0, 2).map((h) => h.id).join('  ')}`);
  }

  /* ── 4. MODAL + INFINITIVE: how is it actually used? ───────────────────── */
  console.log('\n## 4. modal + infinitive in published sentences\n');
  const withInf = sents.rows.filter((r) => MODAL_SHAPE.test(r.fr));
  console.log(`  ${withInf.length} sentences hold a modal followed by an infinitive`);
  const byModal = new Map<string, number>();
  const infinitives = new Map<string, number>();
  for (const r of withInf) {
    const m = MODAL_SHAPE.exec(r.fr);
    if (!m) continue;
    byModal.set(m[2].toLowerCase(), (byModal.get(m[2].toLowerCase()) ?? 0) + 1);
    infinitives.set(m[3].toLowerCase(), (infinitives.get(m[3].toLowerCase()) ?? 0) + 1);
  }
  console.log('  by modal form: ', [...byModal.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join(' '));
  console.log('  commonest infinitives after one:', [...infinitives.entries()].sort((a, b) => b[1] - a[1]).slice(0, 14).map(([k, v]) => `${k}:${v}`).join(' '));
  for (const r of withInf.slice(0, 6)) console.log(`    ${r.id.padEnd(34)} ${JSON.stringify(r.fr)}`);

  /* ── 5. DOES ANY UNIT OWN `il faut`? ───────────────────────────────────── */
  console.log('\n## 5. Ownership, in corrections §7 order\n');
  for (const needle of ['il faut', 'faut', 'obligation', 'modal', 'vouloir', 'pouvoir', 'devoir', 'savoir', 'connaître', 'conditionnel']) {
    const hits = u.rows.filter((r) => hasPhrase(JSON.stringify(r.body), needle)).map((r) => `${r.body.id}(seq ${r.body.seq})`);
    console.log(`  ${needle.padEnd(14)} ${hits.length ? hits.join(' ') : 'NO UNIT AT ANY LEVEL'}`);
  }
  const a214 = u.rows.find((r) => String(r.body.id) === 'a2.14')?.body;
  console.log(`\n  a2.14: seq ${a214?.seq}  canDo ${JSON.stringify(a214?.canDo)}  prereq ${JSON.stringify(a214?.prereqUnitIds)}`);
  const faut = sents.rows.filter((r) => hasPhrase(r.fr, 'il faut'));
  console.log(`  "il faut" occurs in ${faut.length} published sentences, e.g. ${faut.slice(0, 3).map((r) => JSON.stringify(r.fr)).join(' | ')}`);

  /* ── 6. INFINITIVES AVAILABLE TO IMPORT ────────────────────────────────── */
  console.log('\n## 6. Infinitives already in the corpus, for the unseen-verb mission\n');
  const infs = await c.query<{ theme: string; n: string }>(
    `select theme, count(*) n from content_items
      where kind <> 'sentence' and status = 'published' and gender is null
        and fr ~ '^[a-zà-ÿ]+(er|ir|re|oir)$' and fr not like '% %'
      group by theme order by 2 desc limit 12`,
  );
  console.log('  by theme:', infs.rows.map((r) => `${r.theme}:${r.n}`).join('  '));
  const candidates = await c.query<{ id: string; fr: string; theme: string; level: string; respell: string | null; drills: string[] }>(
    `select id, fr, theme, level, respell, drills::text[] drills from content_items
      where kind <> 'sentence' and status = 'published' and gender is null
        and fr = any($1::text[]) order by fr, id`,
    [['nager', 'danser', 'chanter', 'dormir', 'partir', 'sortir', 'payer', 'attendre', 'réserver', 'commander', 'essayer', 'goûter', 'aider', 'fermer', 'ouvrir']],
  );
  for (const r of candidates.rows) console.log(`    ${r.fr.padEnd(12)} ${r.id.padEnd(34)} [${r.theme}] ${r.level} respell=${r.respell ?? '-'} drills=${(r.drills ?? []).join('/')}`);

  /* ── 7. THE ID BLOCK ───────────────────────────────────────────────────── */
  console.log('\n## 7. fr.a2.verbes, the row COUNT (ledger §10: max is useless)\n');
  const blk = await c.query<{ n: string; mx: string }>("select count(*) n, max(id) mx from content_items where id like 'fr.a2.verbes.%'");
  console.log(`  count=${blk.rows[0].n}  max=${blk.rows[0].mx}`);
  const inBlock = await c.query<{ id: string; fr: string }>(
    "select id, fr from content_items where id >= 'fr.a2.verbes.341' and id <= 'fr.a2.verbes.380' order by id",
  );
  console.log(`  rows already inside MY block .341..380: ${inBlock.rowCount}`);
  for (const r of inBlock.rows) console.log(`    ${r.id}  ${JSON.stringify(r.fr)}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
