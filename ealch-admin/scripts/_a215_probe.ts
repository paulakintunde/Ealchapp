/* a2.15 pre-flight. Measures the claims the brief makes BEFORE any of them is
 * planned around, because five of nine were false on a2.13 and two of those
 * would have cost the build.
 *
 * The brief's headline claim is the one to test first: "YOU ARE THE FIRST A2
 * LESSON THAT HAS TO AUTHOR ITS OWN INFINITIVES. Seven of the ten exist, three
 * do not, and one of the absentees is in your title."
 *
 * a2.13 proved a corpus figure counts EVIDENCE, not CARDS: 628 sentences held
 * its shape and twelve carried a respelling. So every headword here is probed
 * for what a card actually needs — ungendered, published, respelled.
 *
 *   pnpm tsx scripts/_a215_probe.ts
 */
import './env';
import { Pool } from 'pg';

const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
function hasPhrase(hay: string, needle: string): boolean {
  const h = hay.toLowerCase(); const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWord(i === 0 ? '' : h[i - 1]) && !isWord(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}

/** The ten the brief names, in family order. */
const HEADWORDS = [
  'prendre', 'apprendre', 'comprendre', 'surprendre',
  'mettre', 'permettre', 'promettre', 'remettre',
  'battre', 'combattre',
];

/** Every paradigm cell of the three, for the corpus-evidence count. */
const CELLS = [
  'je prends', 'tu prends', 'il prend', 'nous prenons', 'vous prenez', 'ils prennent',
  'je mets', 'tu mets', 'il met', 'nous mettons', 'vous mettez', 'ils mettent',
  'je bats', 'tu bats', 'il bat', 'nous battons', 'vous battez', 'ils battent',
];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  console.log('## 1. Unit a2.15, byte for byte\n');
  const u = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = 'a2.15'");
  console.log('  ', JSON.stringify(u.rows[0]?.body, null, 1).replace(/\n/g, '\n  '));

  console.log('\n## 2. The ten headwords: EVERY row, with what a card needs\n');
  const rows = await c.query<{
    id: string; fr: string; en: string | null; kind: string; level: string; theme: string;
    respell: string | null; gender: string | null; status: string;
  }>(
    `select id, fr, en, kind, level, theme, respell, gender, status
       from content_items where lower(fr) = any($1::text[]) order by fr, id`, [HEADWORDS]);
  for (const w of HEADWORDS) {
    const hits = rows.rows.filter((r) => r.fr.toLowerCase() === w);
    const usable = hits.filter((r) => r.status === 'published' && !r.gender && r.respell);
    console.log(`  ${w.padEnd(11)} ${String(hits.length).padStart(2)} row(s), ${usable.length} USABLE as a card`);
    for (const h of hits) {
      const flags = [h.gender ? `gender=${h.gender}` : '', h.respell ? '' : 'NO RESPELL', h.status !== 'published' ? h.status : ''].filter(Boolean);
      console.log(`      ${h.id.padEnd(34)} [${h.theme.slice(0, 20).padEnd(20)}] ${String(h.respell ?? '-').padEnd(16)} ${flags.join(' ') || 'ok'}`);
    }
    if (!hits.length) console.log('      ABSENT — this build must author it');
  }

  console.log('\n## 3. Paradigm cells: EVIDENCE vs CARDS (the a2.13 lesson)\n');
  const sents = await c.query<{ id: string; fr: string; respell: string | null }>(
    "select id, fr, respell from content_items where kind = 'sentence' and status = 'published'");
  let evid = 0; let cards = 0;
  for (const cell of CELLS) {
    const hits = sents.rows.filter((r) => hasPhrase(r.fr, cell));
    const withR = hits.filter((r) => r.respell);
    evid += hits.length; cards += withR.length;
    console.log(`  ${cell.padEnd(15)} ${String(hits.length).padStart(3)} sentence(s), ${String(withR.length).padStart(2)} respelled`);
  }
  console.log(`  TOTAL           ${evid} evidence, ${cards} usable as cards`);

  console.log('\n## 4. Ownership: who else names these verbs\n');
  const units = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'curriculum_unit'");
  for (const w of ['prendre', 'mettre', 'battre', 'compound', 'famille']) {
    const hits = units.rows.filter((r) => hasPhrase(JSON.stringify(r.body), w))
      .map((r) => `${r.body.id}(seq ${r.body.seq})`);
    console.log(`  ${w.padEnd(10)} ${hits.length ? hits.join(' ') : 'NO UNIT AT ANY LEVEL'}`);
  }

  console.log('\n## 5. The id block, by COUNT (max has been useless since a2.10.l2)\n');
  const blk = await c.query<{ n: string }>("select count(*) n from content_items where id like 'fr.a2.verbes.%'");
  const inBlock = await c.query<{ id: string; fr: string }>(
    "select id, fr from content_items where id >= 'fr.a2.verbes.421' and id <= 'fr.a2.verbes.460' order by id");
  console.log(`  fr.a2.verbes total = ${blk.rows[0].n}  (ledger: 340 after a2.14)`);
  console.log(`  rows already inside a2.15's block .421..460: ${inBlock.rowCount}`);
  for (const r of inBlock.rows) console.log(`    ${r.id}  ${JSON.stringify(r.fr)}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
