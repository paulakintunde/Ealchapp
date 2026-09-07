/* AUDIT OF A1 + A2 AS SHIPPED, and pre-flight for the A2 tail (seq 32..35).
 *
 * Two jobs in one pass:
 *   1. Measure what a shipped lesson in this project ACTUALLY looks like —
 *      mission counts, section mix, quiz size and format mix — so the last four
 *      briefs describe the house shape instead of guessing at it.
 *   2. Measure identity, headwords and themes for a2.08, a2.33, a2.34, a2.35,
 *      which scripts/_a2_preflight.ts and _a2_preflight_pronouns.ts do not reach.
 *
 *     pnpm tsx scripts/_a2_audit_tail.ts
 */
import './env';
import { Pool } from 'pg';

const TAIL = ['a2.08', 'a2.33', 'a2.34', 'a2.35'];

const WORDS: Record<string, string[]> = {
  'a2.08': ['grand', 'petit', 'bon', 'mauvais', 'bien', 'mal', 'cher', 'rapide', 'facile', 'difficile'],
  'a2.33': ['ce', 'cet', 'cette', 'ces', 'celui', 'celle', 'ceux', 'celles'],
  'a2.34': ['le mien', 'le tien', 'le sien', 'le nôtre', 'le vôtre', 'le leur'],
  'a2.35': [],
};

const TOKENS: Record<string, string[]> = {
  'a2.08': ['plus grand que', 'moins grand que', 'aussi grand que', 'le plus grand', 'meilleur', 'le meilleur', 'mieux'],
  'a2.33': ['ce livre', 'cet homme', 'cette femme', 'ces gens', 'celui-ci', 'celle-là', 'ce sont'],
  'a2.34': ['le mien', 'la mienne', 'le tien', 'le sien', 'à moi', 'le leur'],
  'a2.35': [],
};

const THEMES = [
  'adjectifs-essentiels', 'adverbes-essentiels', 'pronoms-essentiels',
  'comparaisons', 'comparaisons-essentiels', 'demonstratifs', 'possessifs',
  'verbes', 'verbes-essentiels', 'bilan', 'revision',
];

type Section = { type?: string; id?: string; quizQuestions?: unknown[]; questions?: unknown[]; rounds?: unknown[] };
type Lesson = {
  id?: string; unitId?: string; version?: number; title?: string;
  sections?: Section[]; acts?: unknown[]; sheets?: unknown[]; reframe?: string;
};

function quizStats(s: Section): { n: number; formats: string[] } {
  const out: string[] = [];
  let n = 0;
  const walk = (v: unknown): void => {
    if (Array.isArray(v)) return void v.forEach(walk);
    if (v && typeof v === 'object') {
      const o = v as Record<string, unknown>;
      if (typeof o.format === 'string') { out.push(o.format); n += 1; }
      Object.values(o).forEach(walk);
    }
  };
  walk(s);
  return { n, formats: out };
}

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  /* ── PART A. THE AUDIT ──────────────────────────────────────────────────── */
  const lessons = await c.query<{ id: string; body: Lesson; status: string }>(
    "select slug as id, body, status from content_units where kind = 'lesson' order by slug",
  ).catch(async () => c.query<{ id: string; body: Lesson; status: string }>(
    "select slug as id, body, status from content_units where kind = 'lesson' order by slug",
  ));

  console.log('# A1 + A2 audit, and pre-flight for seq 32..35\n');
  console.log('## A. What a shipped lesson in this project actually looks like\n');
  console.log(`${lessons.rowCount} lesson rows read\n`);

  const rows: { id: string; unit: string; v: number; missions: number; acts: number; sheets: number; quizN: number; types: string[]; formats: string[] }[] = [];
  for (const r of lessons.rows) {
    const b = r.body ?? {};
    const secs = b.sections ?? [];
    const quiz = secs.filter((s) => s.type === 'quiz');
    const q = quiz.map(quizStats).reduce((a, x) => ({ n: a.n + x.n, formats: [...a.formats, ...x.formats] }), { n: 0, formats: [] as string[] });
    rows.push({
      id: r.id, unit: String(b.unitId ?? ''), v: Number(b.version ?? 0),
      missions: secs.length, acts: (b.acts ?? []).length, sheets: (b.sheets ?? []).length,
      quizN: q.n, types: secs.map((s) => String(s.type ?? '?')), formats: q.formats,
    });
  }

  const band = (id: string) => (id.startsWith('a1.') ? 'a1' : id.startsWith('a2.') ? 'a2' : 'other');
  for (const bnd of ['a1', 'a2'] as const) {
    const rs = rows.filter((r) => band(r.id) === bnd);
    if (!rs.length) continue;
    const nums = rs.map((r) => r.missions).sort((a, b2) => a - b2);
    const qs = rs.map((r) => r.quizN).sort((a, b2) => a - b2);
    const med = (a: number[]) => a[Math.floor(a.length / 2)] ?? 0;
    console.log(`### ${bnd.toUpperCase()}  ${rs.length} lessons`);
    console.log(`  missions   min ${nums[0]}  median ${med(nums)}  max ${nums[nums.length - 1]}`);
    console.log(`  quiz Qs    min ${qs[0]}  median ${med(qs)}  max ${qs[qs.length - 1]}`);
    console.log(`  sheets     ${rs.filter((r) => r.sheets > 0).length}/${rs.length} lessons carry one`);
    const tc = new Map<string, number>();
    rs.forEach((r) => r.types.forEach((t) => tc.set(t, (tc.get(t) ?? 0) + 1)));
    console.log(`  section types by total use:`);
    [...tc.entries()].sort((a, b2) => b2[1] - a[1]).forEach(([t, n]) => console.log(`     ${t.padEnd(18)} ${n}`));
    const fc = new Map<string, number>();
    rs.forEach((r) => r.formats.forEach((f) => fc.set(f, (fc.get(f) ?? 0) + 1)));
    console.log(`  quiz formats by total use:`);
    [...fc.entries()].sort((a, b2) => b2[1] - a[1]).forEach(([t, n]) => console.log(`     ${t.padEnd(18)} ${n}`));
    console.log('');
  }

  console.log('### Per lesson (unit, version, missions, quiz questions)\n');
  for (const r of rows) {
    console.log(`  ${r.id.padEnd(22)} ${r.unit.padEnd(8)} v${String(r.v).padEnd(3)} ${String(r.missions).padStart(3)} missions  ${String(r.quizN).padStart(3)} Qs  ${r.sheets} sheet(s)`);
  }

  /* the A1 capstone, in full, because seq 35 copies it */
  console.log('\n### The A1 capstone as shipped, section by section\n');
  for (const r of lessons.rows.filter((x) => x.id.includes('a1.30'))) {
    const b = r.body ?? {};
    console.log(`  ${r.id}  v${b.version}  status=${r.status}  acts=${(b.acts ?? []).length}  sections=${(b.sections ?? []).length}`);
    console.log(`  reframe: ${JSON.stringify(b.reframe ?? null)}`);
    (b.sections ?? []).forEach((s, i) => {
      const q = quizStats(s);
      console.log(`    ${String(i + 1).padStart(2)}. ${String(s.type).padEnd(16)} ${s.id ?? ''}${q.n ? `   ${q.n} scored` : ''}`);
    });
  }

  /* ── PART B. PRE-FLIGHT FOR THE TAIL ────────────────────────────────────── */
  const units = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'curriculum_unit'",
  );
  const byId = new Map(units.rows.map((r) => [String(r.body.id), r.body]));

  console.log('\n\n## B. Identity blocks for seq 32..35, byte for byte\n');
  for (const id of TAIL) {
    const u = byId.get(id);
    if (!u) { console.log(`${id}  NOT IN content_units`); continue; }
    console.log(`${id}  seq ${JSON.stringify(u.seq)}  level ${JSON.stringify(u.level)}  track ${JSON.stringify(u.track)}`);
    console.log(`      lessonIds ${JSON.stringify(u.lessonIds ?? [])}  prereq ${JSON.stringify(u.prereqUnitIds ?? [])}`);
    console.log(`      title  ${JSON.stringify(u.title)}`);
    console.log(`      sub    ${JSON.stringify(u.sub)}`);
    console.log(`      gloss  ${JSON.stringify(u.gloss ?? null)}`);
    console.log(`      canDo  ${JSON.stringify(u.canDo)}`);
    console.log(`      themes ${JSON.stringify(u.themes ?? null)}`);
  }

  console.log('\n## C. Headwords: what already exists\n');
  const items = await c.query<{ id: string; fr: string; theme: string; respell: string | null; gender: string | null }>(
    "select id, fr, theme, respell, gender from content_items where kind <> 'sentence' and status = 'published'",
  );
  const ARTICLES = ['', 'le ', 'la ', "l'", 'les ', 'un ', 'une ', 'des ', 'du ', 'de la '];
  for (const [unit, words] of Object.entries(WORDS)) {
    if (!words.length) continue;
    console.log(`### ${unit}`);
    for (const w of words) {
      const hits = items.rows.filter((r) => {
        const bare = r.fr.replace(/^(le |la |l'|les |un |une |des |du |de la )/i, '').toLowerCase();
        return ARTICLES.some((a) => (a + w).toLowerCase() === r.fr.toLowerCase()) || bare === w.toLowerCase();
      });
      console.log(`  ${w.padEnd(12)} ${String(hits.length).padStart(2)}  ${hits.slice(0, 3).map((h) => `${h.id}[${h.theme}]${h.respell ? ' ' + h.respell : ''}${h.gender ? ' g=' + h.gender : ''}`).join('  ')}`);
    }
  }

  console.log('\n## D. Sentence evidence\n');
  const sents = await c.query<{ id: string; fr: string; theme: string }>(
    "select id, fr, theme from content_items where kind = 'sentence' and status = 'published'",
  );
  const isWord = (ch: string) => /[\p{L}\p{N}'’-]/u.test(ch);
  const has = (hay: string, n: string) => {
    const h = hay.toLowerCase(); const nn = n.toLowerCase(); let i = 0;
    while ((i = h.indexOf(nn, i)) !== -1) {
      if (!isWord(i === 0 ? '' : h[i - 1]) && !isWord(h[i + nn.length] ?? '')) return true;
      i += 1;
    }
    return false;
  };
  console.log(`  (${sents.rowCount} published sentences)\n`);
  for (const [unit, toks] of Object.entries(TOKENS)) {
    if (!toks.length) continue;
    console.log(`### ${unit}`);
    for (const t of toks) {
      const hits = sents.rows.filter((r) => has(r.fr, t));
      console.log(`  ${t.padEnd(16)} ${String(hits.length).padStart(3)}  ${hits.slice(0, 2).map((h) => `${h.id}[${h.theme}]`).join('  ')}`);
    }
  }

  console.log('\n## E. Themes\n');
  for (const t of THEMES) {
    const r = await c.query<{ n: string }>('select count(*) n from content_items where theme = $1 and status = $2', [t, 'published']);
    const seq = await c.query<{ pre: string; n: string; mx: string }>(
      `select substring(id from '^(fr\\.[a-z0-9]+\\.)') pre, count(*) n, max(id) mx
         from content_items where theme = $1 group by 1 order by 1`, [t],
    );
    console.log(`  ${t.padEnd(24)} ${String(r.rows[0].n).padStart(4)} published   ${seq.rows.map((x) => `${x.pre}* n=${x.n} max=${x.mx.split('.').pop()}`).join('  ')}`);
  }

  console.log('\n## F. Every A2 unit and whether it has shipped a lesson\n');
  const a2 = [...byId.values()].filter((u) => String(u.id).startsWith('a2.')).sort((a, b2) => Number(a.seq) - Number(b2.seq));
  for (const u of a2) {
    const ids = (u.lessonIds ?? []) as string[];
    console.log(`  seq ${String(u.seq).padStart(2)}  ${String(u.id).padEnd(7)} ${String(u.title).padEnd(46)} ${ids.length ? ids.join(' ') : '— NOT BUILT'}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
