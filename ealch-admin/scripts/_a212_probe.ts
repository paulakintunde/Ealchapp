/* a2.12 pre-flight. Measures the four things the brief left UNVERIFIED:
 *   1. which `lire` / `écrire` rows are ungendered and carry a respelling
 *   2. whether the `faire` weather expressions exist in `meteo` AS ITEMS
 *   3. whether thirty distinct faire expressions can be assembled from real usage
 *   4. the row count of fr.a2.verbes, which is the only id signal left (ledger §10)
 *
 *     pnpm tsx scripts/_a212_probe.ts
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

/** Every faire expression a candidate for the thirty, plus dire/lire collocations. */
const EXPRESSIONS = [
  'il fait beau', 'il fait chaud', 'il fait froid', 'il fait mauvais', 'il fait nuit', 'il fait jour',
  'faire les courses', 'faire la cuisine', 'faire le ménage', 'faire la vaisselle', 'faire la lessive',
  'faire le lit', 'faire son lit', 'faire les devoirs', 'faire ses devoirs',
  'faire du sport', 'faire du vélo', 'faire de la natation', 'faire du ski', 'faire de la musique',
  'faire une promenade', 'faire un tour', 'faire un voyage', 'faire les valises', 'faire sa valise',
  'faire attention', 'faire la queue', 'faire la fête', 'faire des progrès', 'faire une erreur',
  'faire du bruit', 'faire peur', 'faire plaisir', 'faire la connaissance', 'faire semblant',
  'faire mal', 'faire la sieste', 'faire partie', 'faire un gâteau', 'faire des photos',
  'dire la vérité', 'dire bonjour', 'dire au revoir', 'dire non', 'dire oui',
  'lire un livre', 'lire le journal', 'lire un roman',
];

/** Every present-tense cell of the three paradigms. §3 of the corrections says
 *  the corpus has forms and no minimal pairs; this measures it rather than
 *  assuming it. */
const CELLS = [
  'je fais', 'tu fais', 'il fait', 'elle fait', 'on fait', 'nous faisons', 'vous faites', 'ils font', 'elles font',
  'je dis', 'tu dis', 'il dit', 'elle dit', 'on dit', 'nous disons', 'vous dites', 'ils disent', 'elles disent',
  'je lis', 'tu lis', 'il lit', 'elle lit', 'on lit', 'nous lisons', 'vous lisez', 'ils lisent', 'elles lisent',
];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  /* ── 1. lire / écrire / faire / dire, every row, with gender and drills ── */
  console.log('## 1. The four headwords, every row\n');
  const hw = await c.query<{
    id: string; fr: string; en: string | null; theme: string; kind: string;
    respell: string | null; ipa: string | null; gender: string | null; drills: string[]; status: string;
  }>(
    `select id, fr, en, theme, kind, respell, ipa, gender, drills::text[] drills, status
       from content_items
      where lower(fr) = any($1::text[])
      order by fr, id`,
    [['faire', 'dire', 'lire', 'écrire', 'le faire', 'la lecture']],
  );
  for (const r of hw.rows) {
    console.log(
      `  ${r.id.padEnd(36)} ${JSON.stringify(r.fr).padEnd(10)} kind=${r.kind.padEnd(8)} theme=${r.theme.padEnd(22)}` +
      ` respell=${String(r.respell ?? '-').padEnd(10)} ipa=${String(r.ipa ?? '-').padEnd(10)} gender=${r.gender ?? '-'}` +
      ` status=${r.status} drills=${(r.drills ?? []).join('/')}`,
    );
    console.log(`      en: ${JSON.stringify(r.en)}`);
  }

  /* ── 2. the meteo theme: what is an ITEM there, not a sentence ─────────── */
  console.log('\n## 2. theme=meteo, kind <> sentence, published\n');
  const meteo = await c.query<{ id: string; fr: string; en: string | null; kind: string; respell: string | null; gender: string | null; drills: string[] }>(
    `select id, fr, en, kind, respell, gender, drills::text[] drills from content_items
      where theme = 'meteo' and kind <> 'sentence' and status = 'published' order by id`,
  );
  console.log(`  ${meteo.rowCount} non-sentence rows in meteo`);
  for (const r of meteo.rows) {
    console.log(`  ${r.id.padEnd(20)} ${JSON.stringify(r.fr).padEnd(30)} kind=${r.kind.padEnd(8)} respell=${String(r.respell ?? '-').padEnd(16)} g=${r.gender ?? '-'} drills=${(r.drills ?? []).join('/')}`);
    console.log(`      en: ${JSON.stringify(r.en)}`);
  }

  /* ── 3. every candidate expression: does it exist as an ITEM anywhere? ─── */
  console.log('\n## 3. Candidate expressions: as an ITEM (kind <> sentence), anywhere\n');
  const items = await c.query<{ id: string; fr: string; en: string | null; theme: string; kind: string; respell: string | null; gender: string | null; drills: string[] }>(
    `select id, fr, en, theme, kind, respell, gender, drills::text[] drills from content_items
      where kind <> 'sentence' and status = 'published'`,
  );
  const sents = await c.query<{ id: string; fr: string; theme: string; drills: string[] }>(
    `select id, fr, theme, drills::text[] drills from content_items where kind = 'sentence' and status = 'published'`,
  );
  console.log(`  (${items.rowCount} published non-sentence rows, ${sents.rowCount} published sentences)\n`);
  for (const e of EXPRESSIONS) {
    const asItem = items.rows.filter((r) => hasPhrase(r.fr, e));
    const inSent = sents.rows.filter((r) => hasPhrase(r.fr, e));
    const tag = asItem.length ? 'ITEM' : inSent.length ? 'sent' : 'ABSENT';
    console.log(`  ${e.padEnd(26)} ${tag.padEnd(7)} items=${String(asItem.length).padStart(2)} sentences=${String(inSent.length).padStart(3)}`);
    for (const r of asItem.slice(0, 4)) {
      console.log(`        ITEM ${r.id.padEnd(34)} ${JSON.stringify(r.fr)} [${r.theme}] respell=${r.respell ?? '-'} g=${r.gender ?? '-'} drills=${(r.drills ?? []).join('/')}`);
      console.log(`             en: ${JSON.stringify(r.en)}`);
    }
    for (const r of inSent.slice(0, 2)) console.log(`        sent ${r.id.padEnd(34)} ${JSON.stringify(r.fr)}`);
  }

  /* ── 4. the paradigm cells ─────────────────────────────────────────────── */
  console.log('\n## 4. Paradigm cells in published sentences\n');
  for (const cell of CELLS) {
    const hits = sents.rows.filter((r) => hasPhrase(r.fr, cell));
    console.log(`  ${cell.padEnd(16)} ${String(hits.length).padStart(3)}   ${hits.slice(0, 2).map((h) => h.id).join('  ')}`);
  }

  /* ── 5. the id block ───────────────────────────────────────────────────── */
  console.log('\n## 5. fr.a2.verbes, the row COUNT (ledger §10: max is useless)\n');
  const blk = await c.query<{ n: string; mx: string }>(
    `select count(*) n, max(id) mx from content_items where id like 'fr.a2.verbes.%'`,
  );
  console.log(`  fr.a2.verbes  count=${blk.rows[0].n}  max=${blk.rows[0].mx}`);
  const inBlock = await c.query<{ id: string; fr: string }>(
    `select id, fr from content_items where id >= 'fr.a2.verbes.301' and id <= 'fr.a2.verbes.340' and id like 'fr.a2.verbes.%' order by id`,
  );
  console.log(`  rows already inside MY block .301..340: ${inBlock.rowCount}`);
  for (const r of inBlock.rows) console.log(`    ${r.id}  ${JSON.stringify(r.fr)}`);
  const a202 = await c.query<{ n: string; mn: string; mx: string }>(
    `select count(*) n, min(id) mn, max(id) mx from content_items where id like 'fr.a2.verbes.2%' and id >= 'fr.a2.verbes.261' and id <= 'fr.a2.verbes.300'`,
  );
  console.log(`  a2.02's block .261..300: count=${a202.rows[0].n} min=${a202.rows[0].mn} max=${a202.rows[0].mx}`);

  /* ── 6. which units name faire / dire / lire, doctrine §7 order ────────── */
  console.log('\n## 6. Unit bodies naming faire / dire / lire / courses / sport\n');
  const units = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'curriculum_unit'",
  );
  for (const needle of ['faire', 'dire', 'lire', 'courses', 'sport', 'météo', 'temps qu', 'expression']) {
    const hits = units.rows.filter((r) => hasPhrase(JSON.stringify(r.body), needle)).map((r) => `${r.body.id}(seq ${r.body.seq})`);
    console.log(`  ${needle.padEnd(12)} ${hits.length ? hits.join(' ') : 'NO UNIT AT ANY LEVEL'}`);
  }
  const shop = units.rows.find((r) => String(r.body.id) === 'a2.26');
  console.log(`  a2.26 body: ${JSON.stringify(shop?.body ?? null)}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
