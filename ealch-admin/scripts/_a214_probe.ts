/* a2.14 pre-flight. Measures everything A2-14-SAVOIR-CONNAITRE-PROMPT.md leaves
 * UNVERIFIED, plus the shapes every A2 brief has been wrong about so far.
 *
 *   1. the unit, byte for byte
 *   2. the four headwords, every row, gender + respell + drills
 *   3. every paradigm cell of savoir and connaître in published sentences
 *   4. savoir + CLAUSE and connaître + OBJECT: is the syntactic reframe true of
 *      the corpus, and does connaître EVER appear before que/où/quand/si?
 *   5. the circumflex: does the project have a convention? connaître vs connaitre
 *   6. ownership, in corrections §7 order
 *   7. the id block: the row COUNT of fr.a2.verbes (ledger §10: max is useless)
 *   8. importable CARDS, not evidence: rows with a respelling (a2.13 §1)
 *   9. U+203F rows anywhere in the candidate pool
 *
 *     pnpm tsx scripts/_a214_probe.ts
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

const CELLS = [
  'je sais', 'tu sais', 'il sait', 'elle sait', 'on sait', 'nous savons', 'vous savez',
  'ils savent', 'elles savent', 'je ne sais pas', 'sais-tu', 'savez-vous',
  'je connais', 'tu connais', 'il connaît', 'elle connaît', 'on connaît',
  'nous connaissons', 'vous connaissez', 'ils connaissent', 'elles connaissent',
  'je ne connais pas', 'tu connais', 'connais-tu', 'connaissez-vous',
  'je peux', 'tu peux', 'il peut',
];

/** savoir followed by a bare infinitive: the skill sense. */
const SAVOIR_INF = /(^|[^a-zà-ÿ])(sais|sait|savons|savez|savent)\s+(?:pas\s+)?([a-zà-ÿ]{3,}(?:er|ir|re|oir))(?![a-zà-ÿ])/i;
/** savoir followed by a clause opener: the syntactic half of reframe B. */
const SAVOIR_CLAUSE = /(^|[^a-zà-ÿ])(sais|sait|savons|savez|savent)\s+(que|qu['’]|où|quand|si|comment|pourquoi|ce que|combien)(?![a-zà-ÿ])/i;
/** connaître followed by a clause opener: the SHAPE THE LESSON REJECTS. */
const CONN_CLAUSE = /(^|[^a-zà-ÿ])(connais|connaît|connait|connaissons|connaissez|connaissent|connaître|connaitre)\s+(que|qu['’]|où|quand|si|comment|pourquoi|ce que|combien)(?![a-zà-ÿ])/i;

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  /* ── 1. THE UNIT ───────────────────────────────────────────────────────── */
  const u = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'curriculum_unit'",
  );
  const unit = u.rows.find((r) => String(r.body.id) === 'a2.14')?.body;
  console.log('## 1. Unit a2.14, byte for byte\n');
  console.log('  ', JSON.stringify(unit, null, 1).replace(/\n/g, '\n  '));

  /* ── 2. THE HEADWORDS ──────────────────────────────────────────────────── */
  console.log('\n## 2. Headwords: every row\n');
  const hw = await c.query<{
    id: string; fr: string; en: string | null; theme: string; kind: string; level: string;
    respell: string | null; gender: string | null; drills: string[]; status: string;
  }>(
    `select id, fr, en, theme, kind, level, respell, gender, drills::text[] drills, status
       from content_items
      where lower(fr) = any($1::text[]) and status = 'published'
      order by fr, id`,
    [['savoir', 'connaître', 'connaitre', 'reconnaître', 'reconnaitre', 'paraître', 'paraitre',
      'apparaître', 'naître', 'le savoir', 'la connaissance', 'les connaissances',
      'pouvoir', 'nager', 'conduire', 'cuisiner', 'la recette', 'le quartier', 'le chemin',
      'la réponse', 'le film', 'le voisin', 'la voisine', 'le restaurant', "l'adresse"]],
  );
  for (const r of hw.rows) {
    console.log(
      `  ${(r.gender ? 'g=' + r.gender : 'ungdr').padEnd(6)} ${r.id.padEnd(36)} ${JSON.stringify(r.fr).padEnd(18)}`
      + ` kind=${r.kind.padEnd(7)} lvl=${r.level.padEnd(4)} theme=${r.theme.padEnd(22)}`
      + ` respell=${JSON.stringify(r.respell ?? null).padEnd(16)} drills=${(r.drills ?? []).join('/')}`,
    );
    console.log(`         en: ${JSON.stringify(r.en)}`);
  }

  /* ── 3. PARADIGM CELLS ─────────────────────────────────────────────────── */
  const sents = await c.query<{ id: string; fr: string; en: string | null; theme: string; level: string; respell: string | null; drills: string[] }>(
    "select id, fr, en, theme, level, respell, drills::text[] drills from content_items where kind = 'sentence' and status = 'published'",
  );
  console.log(`\n## 3. Paradigm cells across ${sents.rowCount} published sentences   (n / n-with-respell)\n`);
  for (const cell of CELLS) {
    const hits = sents.rows.filter((r) => hasPhrase(r.fr, cell));
    const withR = hits.filter((h) => h.respell);
    console.log(`  ${cell.padEnd(18)} ${String(hits.length).padStart(3)} / ${String(withR.length).padStart(3)}   ${withR.slice(0, 2).map((h) => h.id).join('  ')}`);
  }

  /* ── 4. THE REFRAME, MEASURED AGAINST THE CORPUS ───────────────────────── */
  console.log('\n## 4. Reframe B against 27k published sentences\n');
  const sInf = sents.rows.filter((r) => SAVOIR_INF.test(r.fr));
  const sCl = sents.rows.filter((r) => SAVOIR_CLAUSE.test(r.fr));
  const cCl = sents.rows.filter((r) => CONN_CLAUSE.test(r.fr));
  console.log(`  savoir + infinitive   ${sInf.length}  (${sInf.filter((r) => r.respell).length} respelled)`);
  for (const r of sInf.slice(0, 8)) console.log(`      ${r.id.padEnd(36)} ${JSON.stringify(r.fr)}  respell=${r.respell ? 'yes' : 'NO'}`);
  console.log(`  savoir + clause       ${sCl.length}  (${sCl.filter((r) => r.respell).length} respelled)`);
  for (const r of sCl.slice(0, 8)) console.log(`      ${r.id.padEnd(36)} ${JSON.stringify(r.fr)}  respell=${r.respell ? 'yes' : 'NO'}`);
  console.log(`  connaître + clause    ${cCl.length}   <- MUST BE 0 or the corpus itself teaches the error`);
  for (const r of cCl) console.log(`      ${r.id.padEnd(36)} ${JSON.stringify(r.fr)}`);

  /* every connaître sentence, so the "always a direct object" claim is tested */
  const connAll = sents.rows.filter((r) => /connai|connaî/i.test(r.fr));
  console.log(`\n  every published sentence holding a connaître form: ${connAll.length}`);
  for (const r of connAll) console.log(`      ${r.id.padEnd(36)} ${(r.respell ? 'R' : '-')} ${JSON.stringify(r.fr)}`);

  const savAll = sents.rows.filter((r) => /\b(sais|sait|savons|savez|savent)\b/i.test(r.fr));
  console.log(`\n  every published sentence holding a savoir present form: ${savAll.length} (${savAll.filter((r) => r.respell).length} respelled)`);
  for (const r of savAll.filter((r) => r.respell)) console.log(`      ${r.id.padEnd(36)} R ${JSON.stringify(r.fr)}  [${r.respell}]`);

  /* ── 5. THE CIRCUMFLEX ─────────────────────────────────────────────────── */
  console.log('\n## 5. The circumflex: does the project have a convention?\n');
  const cir = await c.query<{ w: string; n: string }>(
    `select w, count(*) n from (
        select unnest(regexp_matches(lower(fr), '([a-zà-ÿ]*(?:aî|ai)tre[a-zà-ÿ]*)', 'g')) w
          from content_items where status = 'published'
      ) t group by w order by 2 desc`,
  );
  console.log('  -aître / -aitre forms across every published row:');
  for (const r of cir.rows) console.log(`    ${r.w.padEnd(20)} ${r.n}`);
  const anyFlat = await c.query<{ n: string }>(
    `select count(*) n from content_items where status='published' and (fr ~* 'connait|paraitr|naitre' )`,
  );
  console.log(`  rows spelling any of these WITHOUT the circumflex: ${anyFlat.rows[0].n}`);

  /* ── 6. OWNERSHIP, corrections §7 order ────────────────────────────────── */
  console.log('\n## 6. Ownership\n');
  for (const needle of ['savoir', 'connaître', 'connaitre', 'reconnaître', 'paraître', 'savez', 'know']) {
    const hits = u.rows.filter((r) => hasPhrase(JSON.stringify(r.body), needle)).map((r) => `${r.body.id}(seq ${r.body.seq})`);
    console.log(`  ${needle.padEnd(14)} ${hits.length ? hits.join(' ') : 'NO UNIT AT ANY LEVEL'}`);
  }
  const deps = u.rows.filter((r) => JSON.stringify(r.body.prereqUnitIds ?? []).includes('a2.14'));
  console.log(`  units declaring a2.14 as a prerequisite: ${deps.length ? deps.map((r) => `${r.body.id}(seq ${r.body.seq})`).join(' ') : 'NONE'}`);

  /* ── 7. THE ID BLOCK ───────────────────────────────────────────────────── */
  console.log('\n## 7. fr.a2.verbes, the row COUNT\n');
  const blk = await c.query<{ n: string; mx: string }>("select count(*) n, max(id) mx from content_items where id like 'fr.a2.verbes.%'");
  console.log(`  count=${blk.rows[0].n}  max=${blk.rows[0].mx}   ledger says 310 after a2.13`);
  const inBlock = await c.query<{ id: string; fr: string }>(
    "select id, fr from content_items where id >= 'fr.a2.verbes.381' and id <= 'fr.a2.verbes.420' order by id",
  );
  console.log(`  rows already inside MY block .381..420: ${inBlock.rowCount}`);
  for (const r of inBlock.rows) console.log(`    ${r.id}  ${JSON.stringify(r.fr)}`);

  /* ── 8. CARDS, NOT EVIDENCE ────────────────────────────────────────────── */
  console.log('\n## 8. Importable CARDS (respell is not null) in the candidate pool\n');
  const pool2 = await c.query<{ id: string; fr: string; en: string | null; theme: string; level: string; respell: string; drills: string[] }>(
    `select id, fr, en, theme, level, respell, drills::text[] drills from content_items
      where status='published' and respell is not null
        and (fr ~* '(^| )(sais|sait|savons|savez|savent|connais|connaît|connaissons|connaissez|connaissent)( |$|[.,?!])')
      order by id`,
  );
  console.log(`  ${pool2.rowCount} rows`);
  for (const r of pool2.rows) console.log(`    ${r.id.padEnd(36)} ${JSON.stringify(r.fr).padEnd(46)} [${r.respell}]  ${r.theme}/${r.level}  ${(r.drills ?? []).join('/')}`);

  /* ── 9. U+203F ─────────────────────────────────────────────────────────── */
  const tie = await c.query<{ id: string; fr: string; respell: string }>(
    "select id, fr, respell from content_items where status='published' and respell like '%‿%' order by id",
  );
  console.log(`\n## 9. Rows carrying U+203F UNDERTIE anywhere in the corpus: ${tie.rowCount}`);
  for (const r of tie.rows) console.log(`    ${r.id.padEnd(36)} ${JSON.stringify(r.fr)} [${r.respell}]`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
