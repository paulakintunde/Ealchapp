/* a2.02 discovery. Measures every UNVERIFIED item in A2-02-ALLER-VENIR-TENIR-PROMPT.md
 * against POSTGRES, not the seed.
 *
 *     pnpm tsx scripts/_a202_probe.ts
 */
import './env';
import { Pool } from 'pg';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';

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

  /* 1. Row count and block emptiness, for the ledger check. */
  const rc = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where theme='verbes' and id like 'fr.a2.verbes.%'",
  );
  console.log(`\n=== fr.a2.verbes: ${rc.rows[0].n} rows, max ${rc.rows[0].mx}`);
  const inBlock = await c.query<{ id: string; fr: string }>(
    "select id, fr from content_items where id >= 'fr.a2.verbes.261' and id <= 'fr.a2.verbes.300' order by id",
  );
  console.log(`    ids inside .261..300: ${inBlock.rowCount === 0 ? 'NONE, block is free' : inBlock.rows.map((r) => `${r.id} "${r.fr}"`).join(', ')}`);

  /* 2. THE PARADIGM EVIDENCE. Every cell of all three verbs. */
  const sents = await c.query<{ id: string; fr: string; theme: string; drills: string[] }>(
    "select id, fr, theme, drills from content_items where kind='sentence' and status='published'",
  );
  console.log(`\n=== ${sents.rowCount} published sentences searched`);
  const FORMS = [
    'je vais', 'tu vas', 'il va', 'elle va', 'on va', 'nous allons', 'vous allez', 'ils vont', 'elles vont',
    'je viens', 'tu viens', 'il vient', 'elle vient', 'on vient', 'nous venons', 'vous venez', 'ils viennent', 'elles viennent',
    'je tiens', 'tu tiens', 'il tient', 'elle tient', 'on tient', 'nous tenons', 'vous tenez', 'ils tiennent', 'elles tiennent',
    'il revient', 'ils reviennent', 'il devient', 'ils deviennent', 'elle obtient', 'ils obtiennent', 'il appartient',
  ];
  for (const f of FORMS) {
    const hits = sents.rows.filter((r) => hasPhrase(r.fr, f));
    console.log(`  ${f.padEnd(18)} ${String(hits.length).padStart(3)}   ${hits.slice(0, 1).map((h) => `${h.id} "${h.fr}"`).join('')}`);
  }

  /* 3. venir de: WHICH USE? Every published sentence holding a form of venir + de. */
  console.log('\n=== venir de in the published corpus, split by what follows de');
  const VENIR = ['viens de', 'viens du', "viens d'", 'vient de', 'vient du', "vient d'",
    'venons de', "venons d'", 'venez de', "venez d'", 'viennent de', "viennent d'", 'venir de', "venir d'"];
  const seen = new Set<string>();
  const rows: { id: string; fr: string; use: string }[] = [];
  for (const f of VENIR) {
    for (const r of sents.rows) {
      if (seen.has(r.id) || !hasPhrase(r.fr, f)) continue;
      seen.add(r.id);
      // what follows de: an infinitive (ends -er/-ir/-re/-oir) or something else
      const m = new RegExp(`${f.replace("'", "['’]")}\\s*([\\p{L}'’-]+)`, 'iu').exec(r.fr);
      const next = m?.[1] ?? '';
      const infinitive = /(er|ir|re|oir)$/i.test(next) && next.length > 3;
      rows.push({ id: r.id, fr: r.fr, use: infinitive ? 'INFINITIVE' : `after-de:${next}` });
    }
  }
  for (const r of rows) console.log(`  ${r.use.padEnd(22)} ${r.id.padEnd(38)} ${r.fr}`);
  console.log(`  TOTAL ${rows.length}: ${rows.filter((r) => r.use === 'INFINITIVE').length} infinitive, ${rows.filter((r) => r.use !== 'INFINITIVE').length} other`);

  /* 4. a2.10's tôt-frame rows, which this lesson wants to import for the loop-closure. */
  console.log('\n=== a2.10 rows this lesson may import as sentences');
  const a210 = await c.query<Record<string, unknown>>(
    "select * from content_items where id in ('fr.a2.verbes.183','fr.a2.verbes.186') order by id",
  );
  for (const r of a210.rows) {
    console.log(`  ${String(r.id).padEnd(22)} "${r.fr}" respell=${r.respell} drills=${String(r.drills)} status=${r.status} lvl=${r.level} theme=${r.theme}`);
  }

  /* 5. The rows this lesson imports as headwords. */
  console.log('\n=== candidate import rows');
  const CAND = [
    'fr.sons.verbes-essentiels.003', 'fr.sons.consonnes.143',
    'fr.sons.verbes-essentiels.010', 'fr.sons.verbes-essentiels.052',
    'fr.sons.verbes-essentiels.084', 'fr.sons.verbes-essentiels.083',
    'fr.a2.examens-et-diplomes.038', 'fr.sons.verbes-essentiels.218',
    'fr.b2.philosophie.136', 'fr.b1.verbes.058',
  ];
  const cand = await c.query<Record<string, unknown>>('select * from content_items where id = any($1) order by id', [CAND]);
  for (const r of cand.rows) {
    console.log(`  ${String(r.id).padEnd(34)} "${r.fr}" theme=${r.theme} lvl=${r.level} respell=${r.respell ?? '-'} gender=${r.gender ?? '-'} drills=${String(r.drills)} status=${r.status} ipa=${r.ipa ?? '-'} en="${r.en}"`);
  }

  /* 6. THE FRAME WORDS, through the REAL dicteeMode. */
  console.log('\n=== candidate dictée targets, through the real dicteeMode');
  const CANDS = [
    'Je vais au parc.', 'Tu vas au parc.', 'Il va au parc.', 'Nous allons au parc.', 'Vous allez au parc.', 'Ils vont au parc.',
    'Je viens tôt.', 'Tu viens tôt.', 'Il vient tôt.', 'Nous venons tôt.', 'Vous venez tôt.', 'Ils viennent tôt.',
    'Je tiens la clé.', 'Tu tiens la clé.', 'Il tient la clé.', 'Nous tenons la clé.', 'Vous tenez la clé.', 'Ils tiennent la clé.',
    'Je viens de manger.', 'Tu viens de manger.', 'Il vient de partir.', 'On vient de finir.',
    'Nous venons de manger.', 'Ils viennent de partir.', 'Elle vient de sortir.',
    'Je viens de Paris.', 'Il vient de Nantes.', 'Elle vient de Lyon.', 'Ils viennent de Paris.',
    'Il revient tôt.', 'Elle obtient la clé.', 'Il devient rouge.',
    'Je vais à Nantes.', 'Nous allons à Nantes.',
  ];
  for (const s of CANDS) {
    console.log(`  ${dicteeMode(s) === 'letters' ? 'LETTERS' : 'words  '} ${String(letterCount(s)).padStart(2)}  ${s}`);
  }

  /* 7. Which units name the futur proche / venir de, so the hand-offs are real. */
  console.log('\n=== hand-offs');
  const units = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind='curriculum_unit'",
  );
  for (const n of ['futur proche', 'venir de', 'aller', 'chez', 'passé composé', 'compos']) {
    const hits = units.rows.filter((u) => hasPhrase(JSON.stringify(u.body), n)).map((u) => String(u.body.id));
    console.log(`  ${n.padEnd(16)} ${hits.length ? hits.join(' ') : 'NO UNIT'}`);
  }
  for (const id of ['a2.19', 'a2.04', 'a2.05', 'a2.15', 'a2.12', 'a2.13']) {
    const u = units.rows.find((x) => x.body.id === id);
    console.log(`  ${id}: ${u ? JSON.stringify(u.body) : 'MISSING'}`);
  }

  /* 8. Competing respellings for anything this lesson will print. */
  console.log('\n=== stored respellings for the words this lesson prints');
  const words = await c.query<{ id: string; fr: string; theme: string; respell: string | null }>(
    "select id, fr, theme, respell from content_items where kind <> 'sentence' and status='published' and fr = any($1) order by fr, id",
    [['aller', 'venir', 'tenir', 'revenir', 'devenir', 'obtenir', 'appartenir', 'le devenir', 'la clé', 'le parc', 'tôt']],
  );
  for (const r of words.rows) console.log(`  ${r.fr.padEnd(14)} ${r.id.padEnd(34)} ${r.theme.padEnd(24)} ${r.respell ?? '-'}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
