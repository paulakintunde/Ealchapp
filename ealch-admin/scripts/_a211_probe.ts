/* a2.11 discovery. Measures every UNVERIFIED item in A2-11-VERBES-RE-PROMPT.md
 * against POSTGRES, not the seed.
 *
 *     pnpm tsx scripts/_a211_probe.ts
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

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  /* 1. Row count and gaps in fr.a2.verbes, for the ledger block check. */
  const rc = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where theme='verbes' and id like 'fr.a2.verbes.%'",
  );
  console.log(`\n=== fr.a2.verbes: ${rc.rows[0].n} rows, max ${rc.rows[0].mx}`);
  const inBlock = await c.query<{ id: string; fr: string }>(
    "select id, fr from content_items where id >= 'fr.a2.verbes.221' and id <= 'fr.a2.verbes.260' order by id",
  );
  console.log(`    ids inside .221..260: ${inBlock.rowCount === 0 ? 'NONE, block is free' : inBlock.rows.map((r) => `${r.id} "${r.fr}"`).join(', ')}`);

  /* 2. WHICH UNIT OWNS descendre's AUXILIARY SPLIT, and répondre à. All units. */
  const units = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind='curriculum_unit'",
  );
  console.log(`\n=== ${units.rowCount} curriculum units read`);
  const NEEDLES = ['descendre', 'monter', 'auxiliaire', 'transitif', 'répondre', 'vendre', 'attendre', 'entendre', 'perdre', 'rendre', 'prendre', 'mettre', 'battre', '-re', '-RE'];
  for (const n of NEEDLES) {
    const hits = units.rows
      .filter((u) => hasPhrase(JSON.stringify(u.body), n))
      .map((u) => `${u.body.id}"${String(u.body.t ?? u.body.title ?? '')}"`);
    console.log(`  ${n.padEnd(12)} ${hits.length ? hits.join(' ') : 'NO UNIT'}`);
  }
  const a221 = units.rows.find((u) => u.body.id === 'a2.21');
  const a215 = units.rows.find((u) => u.body.id === 'a2.15');
  const a224 = units.rows.find((u) => u.body.id === 'a2.24');
  for (const [k, u] of [['a2.21', a221], ['a2.15', a215], ['a2.24', a224]] as const) {
    console.log(`\n  ${k}: ${u ? JSON.stringify(u.body) : 'NOT IN content_units'}`);
  }

  /* 3. a2.01's sheets: does any cover more than -ER? */
  const les = await c.query<{ slug: string; body: { sheets?: { id: string; title: string; contains?: string[] }[] } }>(
    "select slug, body from content_units where kind='lesson' and slug in ('a2.01.l1','a2.09.l1','a2.10.l1','a2.10.l2')",
  );
  console.log('\n=== reference sheets already shipped in the band');
  for (const r of les.rows) {
    for (const sh of r.body.sheets ?? []) console.log(`  ${r.slug.padEnd(10)} ${sh.id.padEnd(24)} "${sh.title}"`);
  }

  /* 4. THE THIRD PERSONS THIS LESSON HAS TO PUT SIDE BY SIDE. */
  console.log('\n=== the -ER and -IR third persons already authored in this band');
  const thirds = await c.query<{ id: string; fr: string; respell: string | null; en: string }>(
    "select id, fr, respell, en from content_items where id like 'fr.a2.verbes.1%' and kind='sentence' and (fr ilike 'il %' or fr ilike 'elle %') order by id",
  );
  for (const r of thirds.rows) console.log(`  ${r.id.padEnd(22)} ${r.fr.padEnd(34)} [${r.respell ?? '-'}]`);

  /* 5. CONJUGATED -RE EVIDENCE across the whole published sentence corpus. */
  console.log('\n=== conjugated -RE forms in published sentences (pg total)');
  const sents = await c.query<{ id: string; fr: string; theme: string; drills: string[] }>(
    "select id, fr, theme, drills from content_items where kind='sentence' and status='published'",
  );
  const FORMS = [
    'je vends', 'tu vends', 'il vend', 'elle vend', 'on vend', 'nous vendons', 'vous vendez', 'ils vendent', 'elles vendent',
    "j'attends", 'tu attends', 'il attend', 'elle attend', 'nous attendons', 'vous attendez', 'ils attendent',
    'je réponds', 'tu réponds', 'il répond', 'elle répond', 'nous répondons', 'vous répondez', 'ils répondent',
    "j'entends", 'il entend', 'ils entendent', 'nous entendons',
    'je perds', 'il perd', 'ils perdent', 'nous perdons',
    'je rends', 'il rend', 'ils rendent',
    'il descend', 'ils descendent', 'nous descendons',
  ];
  for (const f of FORMS) {
    const hits = sents.rows.filter((r) => hasPhrase(r.fr, f));
    console.log(`  ${f.padEnd(18)} ${String(hits.length).padStart(3)}   ${hits.slice(0, 2).map((h) => `${h.id} "${h.fr}"`).join(' | ')}`);
  }

  /* 6. THE SENTENCES ALREADY IN fr.a2.verbes THAT USE A -RE VERB. */
  console.log('\n=== -RE sentences already inside theme verbes');
  const RE_STEMS = ['vend', 'attend', 'répond', 'entend', 'perd', 'rend', 'descend'];
  const inTheme = await c.query<{ id: string; fr: string; drills: string[]; level: string }>(
    "select id, fr, drills, level from content_items where theme='verbes' and kind='sentence' and status='published' order by id",
  );
  for (const r of inTheme.rows) {
    if (RE_STEMS.some((s) => r.fr.toLowerCase().includes(s))) console.log(`  ${r.id.padEnd(22)} ${r.level} ${r.fr}  drills=${String(r.drills)}`);
  }

  /* 7. respellings stored for every row this lesson might import. */
  console.log('\n=== candidate import rows');
  const CAND = [
    'fr.a2.verbes.027', 'fr.a2.verbes.020', 'fr.sons.verbes-essentiels.028',
    'fr.sons.verbes-essentiels.029', 'fr.sons.verbes-essentiels.032', 'fr.sons.verbes-essentiels.128',
    'fr.a1.transports-quotidiens.045', 'fr.a1.deplacements.045', 'fr.sons.consonnes.107',
    'fr.sons.verbes-essentiels.014', 'fr.sons.consonnes.146',
  ];
  const cand = await c.query<Record<string, unknown>>('select * from content_items where id = any($1) order by id', [CAND]);
  for (const r of cand.rows) {
    console.log(`  ${String(r.id).padEnd(34)} "${r.fr}" theme=${r.theme} lvl=${r.level} respell=${r.respell ?? '-'} gender=${r.gender ?? '-'} drills=${String(r.drills)} status=${r.status}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
