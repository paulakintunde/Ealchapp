/* a2.13's import pool, chosen by measurement rather than by taste.
 *
 * The lesson's whole claim is that a modal lets a learner use a verb NOBODY
 * taught them. The corpus should demonstrate the same thing: the infinitives
 * this lesson pairs with a modal must be IMPORTED, not authored. So this asks
 * Postgres which infinitives are actually importable, and applies the four
 * filters that have cost earlier builds in this batch:
 *
 *   1. NO `gender`. a1.03's endingPopulation counts gendered single-word nouns,
 *      and `le devoir` would move twenty printed figures in a1-03-genre.test.ts.
 *   2. A respelling, because a card without one is a card the learner cannot say.
 *   3. Not already the property of this lesson (the three modals themselves).
 *   4. Where an infinitive has several rows, ONE is taken, and the tie is broken
 *      by respelling first and drills second, exactly as a2.12 broke it.
 *
 * Also measures the two things the size decision rests on: how many modal +
 * infinitive SENTENCES are importable as whole rows, and whether the register
 * pair and the `pouvoir`-senses evidence exist as rows or must be authored.
 *
 *     pnpm tsx scripts/_a213_imports.ts
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

/** Every conjugated modal form, for finding sentences. */
const MODALS = ['veux', 'veut', 'voulons', 'voulez', 'veulent', 'voudrais', 'voudrait', 'voudrions', 'voudriez',
  'peux', 'peut', 'pouvons', 'pouvez', 'peuvent', 'dois', 'doit', 'devons', 'devez', 'doivent', 'faut'];
const MODAL_INF = new RegExp(
  `(^|[^a-zà-ÿ])(${MODALS.join('|')})\\s+(?:ne\\s+|n['’]\\s*)?([a-zà-ÿ]{3,}(?:er|ir|re|oir))(?![a-zà-ÿ])`, 'i');

type Row = {
  id: string; fr: string; en: string | null; kind: string; level: string; theme: string;
  respell: string | null; gender: string | null; drills: string[]; skill: string | null; register: string | null;
};

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  /* ── 1. THE INFINITIVE POOL ────────────────────────────────────────────── */
  console.log('## 1. Importable infinitives: ungendered, single word, respelled\n');
  const infs = await c.query<Row>(
    `select id, fr, en, kind, level, theme, respell, gender, drills::text[] drills, skill, register
       from content_items
      where status = 'published' and kind <> 'sentence' and gender is null
        and fr ~ '^[a-zà-ÿ]+(er|ir|re|oir)$' and fr not like '% %'
      order by fr, id`,
  );
  const byFr = new Map<string, Row[]>();
  for (const r of infs.rows) byFr.set(r.fr.toLowerCase(), [...(byFr.get(r.fr.toLowerCase()) ?? []), r]);
  const withRespell = [...byFr.entries()].filter(([, rs]) => rs.some((r) => r.respell));
  console.log(`  ${infs.rowCount} ungendered infinitive rows, ${byFr.size} distinct, ${withRespell.length} with a respelling somewhere\n`);

  // Group by theme so the lesson can draw its unseen verb from a theme it never names.
  const themes = new Map<string, number>();
  for (const [, rs] of withRespell) themes.set(rs[0].theme, (themes.get(rs[0].theme) ?? 0) + 1);
  console.log('  by theme:', [...themes.entries()].sort((a, b) => b[1] - a[1]).slice(0, 16).map(([k, v]) => `${k}:${v}`).join('  '));

  console.log('\n  Every distinct infinitive with a respelling, with the row that would be taken:');
  const chosen = new Map<string, Row>();
  for (const [fr, rs] of withRespell) {
    const pick = [...rs].sort((a, b) => {
      if (!!a.respell !== !!b.respell) return a.respell ? -1 : 1;
      const ad = (a.drills ?? []).length; const bd = (b.drills ?? []).length;
      if (ad !== bd) return bd - ad;
      return a.id.localeCompare(b.id);
    })[0];
    chosen.set(fr, pick);
  }
  const list = [...chosen.values()].sort((a, b) => a.fr.localeCompare(b.fr));
  for (const r of list) {
    console.log(`    ${r.fr.padEnd(14)} ${r.id.padEnd(34)} [${r.theme.slice(0, 20).padEnd(20)}] ${r.level.padEnd(4)} ${String(r.respell).padEnd(18)} d=${(r.drills ?? []).join('/') || '-'}${byFr.get(r.fr)!.length > 1 ? `  (${byFr.get(r.fr)!.length} rows)` : ''}`);
  }

  /* ── 2. MODAL + INFINITIVE SENTENCES, IMPORTABLE WHOLE ─────────────────── */
  console.log('\n## 2. Published sentences that already hold modal + infinitive\n');
  const sents = await c.query<Row>(
    `select id, fr, en, kind, level, theme, respell, gender, drills::text[] drills, skill, register
       from content_items where status = 'published' and kind = 'sentence' order by id`,
  );
  const hits = sents.rows.filter((r) => MODAL_INF.test(r.fr));
  const withR = hits.filter((r) => r.respell);
  console.log(`  ${hits.length} sentences, ${withR.length} carrying a respelling (only these are importable to a card)\n`);
  const perModal = new Map<string, Row[]>();
  for (const r of withR) {
    const m = MODAL_INF.exec(r.fr)!;
    const k = m[2].toLowerCase();
    perModal.set(k, [...(perModal.get(k) ?? []), r]);
  }
  for (const k of MODALS) {
    const rs = perModal.get(k) ?? [];
    if (!rs.length) { console.log(`  ${k.padEnd(10)}   0`); continue; }
    console.log(`  ${k.padEnd(10)} ${String(rs.length).padStart(3)}   e.g. ${rs.slice(0, 2).map((r) => `${r.id} ${JSON.stringify(r.fr)}`).join('  |  ')}`);
  }

  /* ── 3. THE REGISTER PAIR AND THE POUVOIR SENSES ───────────────────────── */
  console.log('\n## 3. The two required contrasts, as rows\n');
  const NEEDED = [
    'fr.a1.verbes-du-quotidien.035', 'fr.a1.cafe.051',
    'fr.a1.verbes-essentiels.079', 'fr.a2.verbes-du-quotidien.073',
    'fr.sons.verbes-essentiels.006', 'fr.sons.verbes-essentiels.007', 'fr.sons.verbes-essentiels.008',
  ];
  const need = await c.query<Row>(
    `select id, fr, en, kind, level, theme, respell, gender, drills::text[] drills, skill, register
       from content_items where id = any($1)`, [NEEDED]);
  for (const id of NEEDED) {
    const r = need.rows.find((x) => x.id === id);
    if (!r) { console.log(`  MISSING  ${id}`); continue; }
    console.log(`  ${r.id.padEnd(34)} ${JSON.stringify(r.fr).padEnd(46)} g=${r.gender ?? '-'} respell=${r.respell ?? '-'} reg=${r.register ?? '-'} d=${(r.drills ?? []).join('/') || '-'}`);
  }

  console.log('\n  `pouvoir` senses: sentences asking PERMISSION vs stating ABILITY vs POSSIBILITY');
  for (const [label, needle] of [['permission (question)', 'je peux'], ['permission (vous)', 'pouvez-vous'], ['polite ask', 'pourriez'], ['possibility', 'peut être'], ['ability', 'peut']] as [string, string][]) {
    const rs = sents.rows.filter((r) => hasPhrase(r.fr, needle) && r.respell);
    console.log(`    ${label.padEnd(22)} ${String(rs.length).padStart(3)}  ${rs.slice(0, 2).map((r) => `${r.id} ${JSON.stringify(r.fr)}`).join(' | ')}`);
  }

  /* ── 4. il faut, THE CONTEXT CARD ──────────────────────────────────────── */
  console.log('\n## 4. `il faut` rows that could carry the context card\n');
  const faut = sents.rows.filter((r) => hasPhrase(r.fr, 'il faut'));
  console.log(`  ${faut.length} sentences, ${faut.filter((r) => r.respell).length} with a respelling`);
  for (const r of faut.filter((x) => x.respell).slice(0, 8)) console.log(`    ${r.id.padEnd(34)} ${JSON.stringify(r.fr).padEnd(50)} ${r.respell}`);

  /* ── 5. THE ID BLOCK, RE-CHECKED ───────────────────────────────────────── */
  const blk = await c.query<{ n: string }>("select count(*) n from content_items where id like 'fr.a2.verbes.%'");
  const inBlock = await c.query<{ id: string }>(
    "select id from content_items where id >= 'fr.a2.verbes.341' and id <= 'fr.a2.verbes.380'");
  console.log(`\n## 5. fr.a2.verbes row count = ${blk.rows[0].n} (ledger says 280 after a2.12); rows inside .341..380 = ${inBlock.rowCount}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
