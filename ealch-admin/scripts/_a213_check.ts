/* a2.13 design checks, run BEFORE authoring so the design is decided by the real
 * corpus rather than by a table in a brief:
 *
 *   1. MINIMAL PAIRS. Corrections §3 calls "the corpus has the forms and no
 *      minimal pairs" the most reliable prediction in the file, and this is the
 *      first lesson in the band whose shape the corpus holds 628 times. So it is
 *      measured rather than assumed: are there sentences that differ ONLY by the
 *      modal?
 *   2. The `devoir` family, probed the way probe-corpus.ts probes: bare AND with
 *      every article. The brief says ten rows, seven of them the noun.
 *   3. a1.01's politeness wording, read rather than assumed, so `voudrais` does
 *      not contradict what the learner was taught in the first lesson.
 *   4. Whether the three modals share one shape, which is the layout claim.
 *
 *     pnpm tsx scripts/_a213_check.ts
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

/** Every conjugated form of the three, plus the polite one and the impersonal. */
const FORMS = [
  'veux', 'veut', 'voulons', 'voulez', 'veulent',
  'peux', 'peut', 'pouvons', 'pouvez', 'peuvent',
  'dois', 'doit', 'devons', 'devez', 'doivent',
  'voudrais', 'voudrait', 'voudrions', 'voudriez',
  'faut',
];
const FORM_RE = new RegExp(`(^|[^a-zà-ÿ])(${FORMS.join('|')})(?![a-zà-ÿ])`, 'i');

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const sents = await c.query<{ id: string; fr: string; theme: string; level: string }>(
    "select id, fr, theme, level from content_items where kind = 'sentence' and status = 'published'",
  );

  /* ── 1. MINIMAL PAIRS: same sentence, different modal ──────────────────── */
  console.log('## 1. Minimal pairs: sentences that differ ONLY by the modal\n');
  const keyed = new Map<string, { form: string; row: { id: string; fr: string } }[]>();
  for (const r of sents.rows) {
    const m = FORM_RE.exec(r.fr);
    if (!m) continue;
    // Blank the modal out and use what is left as the frame.
    const frame = r.fr.replace(new RegExp(`(^|[^a-zà-ÿ])${m[2]}(?![a-zà-ÿ])`, 'i'), '$1◆').toLowerCase();
    const list = keyed.get(frame) ?? [];
    list.push({ form: m[2].toLowerCase(), row: r });
    keyed.set(frame, list);
  }
  const pairs = [...keyed.entries()].filter(([, v]) => new Set(v.map((x) => x.form)).size > 1);
  console.log(`  ${pairs.length} frames are shared by two or more DIFFERENT modal forms`);
  for (const [frame, v] of pairs.slice(0, 10)) {
    console.log(`    ${JSON.stringify(frame)}`);
    for (const x of v) console.log(`        ${x.form.padEnd(10)} ${x.row.id.padEnd(34)} ${JSON.stringify(x.row.fr)}`);
  }
  if (!pairs.length) console.log('    NONE. Corrections §3 holds: the paradigm has to be authored in one frame.');

  /* ── 2. THE devoir FAMILY, probed with every article ───────────────────── */
  console.log('\n## 2. The devoir family, bare AND with every article\n');
  const ARTICLES = ['', 'le ', 'la ', "l'", 'les ', 'un ', 'une ', 'des ', 'du ', 'de la '];
  const words = await c.query<{ id: string; fr: string; kind: string; level: string; theme: string; gender: string | null; respell: string | null }>(
    "select id, fr, kind, level, theme, gender, respell from content_items where kind <> 'sentence' and status = 'published'",
  );
  for (const w of ['devoir', 'devoirs', 'pouvoir', 'vouloir', 'savoir']) {
    const hits = words.rows.filter((r) => ARTICLES.some((a) => (a + w).toLowerCase() === r.fr.toLowerCase()));
    const nouns = hits.filter((h) => h.gender);
    console.log(`  ${w.padEnd(9)} ${String(hits.length).padStart(2)} row(s), ${nouns.length} carrying a gender`);
    for (const h of hits) console.log(`      ${h.gender ? 'NOUN' : 'verb'}  ${h.id.padEnd(34)} ${JSON.stringify(h.fr).padEnd(14)} g=${h.gender ?? '-'} respell=${h.respell ?? '-'}`);
  }

  /* ── 3. a1.01's POLITENESS WORDING, read rather than assumed ───────────── */
  console.log('\n## 3. What a1.01 already taught about politeness\n');
  const l = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'lesson' and slug like 'a1.01%'",
  );
  for (const row of l.rows) {
    const b = row.body;
    console.log(`  ${b.id}  reframe: ${JSON.stringify(b.reframe)}`);
    const s = JSON.stringify(b);
    for (const needle of ['vouvoie', 'voudrais', 'poli', 'polite', 'register', 'tu ', 'vous ', 'price of entry', 'demand']) {
      const i = s.toLowerCase().indexOf(needle.toLowerCase().trim());
      if (i === -1) continue;
      console.log(`    "${needle.trim()}" -> ...${s.slice(Math.max(0, i - 90), i + 110).replace(/\\"/g, "'")}...`);
    }
  }

  /* ── 4. DO THE THREE SHARE ONE SHAPE? The layout claim, as arithmetic ──── */
  console.log('\n## 4. The three modals, cell by cell\n');
  const P = [
    { person: 'je', vouloir: 'veux', pouvoir: 'peux', devoir: 'dois' },
    { person: 'tu', vouloir: 'veux', pouvoir: 'peux', devoir: 'dois' },
    { person: 'il', vouloir: 'veut', pouvoir: 'peut', devoir: 'doit' },
    { person: 'nous', vouloir: 'voulons', pouvoir: 'pouvons', devoir: 'devons' },
    { person: 'vous', vouloir: 'voulez', pouvoir: 'pouvez', devoir: 'devez' },
    { person: 'ils', vouloir: 'veulent', pouvoir: 'peuvent', devoir: 'doivent' },
  ];
  for (const r of P) {
    const ends = [r.vouloir, r.pouvoir, r.devoir].map((f) => f.replace(/^(veu|peu|doi|voul|pouv|dev)/, ''));
    console.log(`  ${r.person.padEnd(5)} ${r.vouloir.padEnd(9)} ${r.pouvoir.padEnd(9)} ${r.devoir.padEnd(9)}  shared ending: ${JSON.stringify(ends)}  ${new Set(ends).size === 1 ? 'ALL THREE MATCH' : 'differ'}`);
  }
  console.log('\n  je/tu/il counts, so the singular claim is measured:');
  for (const f of ['veux', 'peux', 'dois', 'veut', 'peut', 'doit', 'veulent', 'peuvent', 'doivent']) {
    console.log(`    ${f.padEnd(9)} ${sents.rows.filter((r) => hasPhrase(r.fr, f)).length}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
