/* THE VERB ARC, measured rather than assumed.
 *
 * The question is whether a2.13 closes the verbs. Batch 1 is ten units and the
 * ledger names them, but the ledger is a batch, not a curriculum: units outside
 * batch 1 can still be verb units. So every curriculum unit at every level is
 * read, classified by whether its canDo/title/grammar talks about a VERB, and
 * printed in seq order with whether a lesson has been built for it.
 *
 * Also measures the SIZE of every lesson already shipped, so "unconstrain the
 * volume" has a baseline to be unconstrained from.
 *
 *   pnpm tsx scripts/_verbarc.ts
 */
import './env';
import { Pool } from 'pg';

const VERBY = [
  'verb', 'verbe', 'conjugat', 'tense', 'present', 'passé', 'passe compose', 'infinitive',
  'infinitif', 'participle', 'participe', 'futur', 'imparfait', 'subjonctif', 'conditionnel',
  'imperative', 'impératif', 'pronominal', 'reflexive', 'aller', 'venir', 'faire', 'dire',
  'être', 'avoir', 'vouloir', 'pouvoir', 'devoir', 'savoir', 'connaître', 'prendre', 'mettre',
];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const u = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'curriculum_unit'",
  );
  const les = await c.query<{ slug: string; status: string; body: Record<string, unknown> }>(
    "select slug, status, body from content_units where kind = 'lesson'",
  );
  const lessonBySlug = new Map(les.rows.map((r) => [r.slug, r]));

  type U = { id: string; seq: number; level: string; t: string; sub: string; canDo: string; lessonIds: string[]; blob: string };
  const units: U[] = u.rows.map((r) => {
    const b = r.body;
    return {
      id: String(b.id), seq: Number(b.seq), level: String(b.level ?? ''),
      t: String(b.title ?? b.t ?? ''), sub: String(b.sub ?? ''),
      canDo: String(b.canDo ?? ''), lessonIds: (b.lessonIds as string[]) ?? [],
      blob: JSON.stringify(b).toLowerCase(),
    };
  });

  const isVerb = (x: U) => VERBY.some((v) => x.blob.includes(v));

  console.log('## 1. Every A2 unit in seq order, verb-flagged, with build state\n');
  const a2 = units.filter((x) => x.level.toLowerCase() === 'a2' || x.id.startsWith('a2.'));
  a2.sort((a, b) => a.seq - b.seq);
  let builtVerb = 0; let openVerb = 0;
  for (const x of a2) {
    const built = x.lessonIds.map((id) => {
      const row = lessonBySlug.get(id);
      if (!row) return `${id}:MISSING`;
      const secs = ((row.body.sections as unknown[]) ?? []).length;
      return `${id} v${row.body.version} ${row.status} ${secs}sec`;
    });
    const v = isVerb(x);
    if (v) { if (built.length) builtVerb++; else openVerb++; }
    console.log(
      `  seq ${String(x.seq).padStart(2)}  ${x.id.padEnd(6)} ${v ? 'VERB' : '    '} ${x.t.slice(0, 34).padEnd(36)}`
      + ` ${built.length ? built.join(' | ') : 'NO LESSON'}`,
    );
  }
  console.log(`\n  A2 verb units: ${builtVerb} built, ${openVerb} with no lesson yet`);

  console.log('\n## 2. Verb units OUTSIDE A2 (does the arc continue at B1?)\n');
  for (const x of units.filter((y) => !y.id.startsWith('a2.') && isVerb(y)).sort((a, b) => a.id.localeCompare(b.id))) {
    console.log(`  ${x.id.padEnd(7)} seq ${String(x.seq).padStart(2)} ${x.level.padEnd(4)} ${x.t.slice(0, 40).padEnd(42)} ${x.lessonIds.length ? 'built' : 'no lesson'}`);
  }

  console.log('\n## 3. SIZE of every lesson shipped, so "bigger" has a baseline\n');
  const sized = les.rows.map((r) => {
    const b = r.body;
    const sections = (b.sections as Record<string, unknown>[]) ?? [];
    const missions = sections.filter((s) => s.type !== 'quiz').length;
    const quiz = sections.find((s) => s.type === 'quiz') as { rounds?: unknown[] } | undefined;
    const rounds = (quiz?.rounds as Record<string, unknown>[] | undefined) ?? [];
    const qs = rounds.reduce((n, rd) => n + (((rd.questions as unknown[]) ?? []).length), 0);
    const acts = ((b.acts as unknown[]) ?? []).length;
    const bytes = JSON.stringify(b).length;
    return { slug: r.slug, v: Number(b.version), secs: sections.length, missions, acts, qs, bytes, itemIds: new Set(JSON.stringify(b).match(/fr\.[a-z0-9.-]+/g) ?? []).size };
  }).sort((a, b) => a.slug.localeCompare(b.slug));
  const a2l = sized.filter((s) => s.slug.startsWith('a2.'));
  for (const s of a2l) {
    console.log(`  ${s.slug.padEnd(10)} v${s.v}  ${String(s.secs).padStart(2)} sections  ${String(s.acts)} acts  ${String(s.qs).padStart(2)} questions  ${String(Math.round(s.bytes / 1024)).padStart(3)} KiB  ${String(s.itemIds).padStart(3)} distinct fr. ids`);
  }
  const max = (f: (s: typeof sized[number]) => number) => sized.reduce((m, s) => (f(s) > f(m) ? s : m), sized[0]);
  console.log(`\n  ACROSS ALL ${sized.length} LESSONS AT EVERY LEVEL:`);
  console.log(`    most sections : ${max((s) => s.secs).slug} with ${max((s) => s.secs).secs}`);
  console.log(`    most questions: ${max((s) => s.qs).slug} with ${max((s) => s.qs).qs}`);
  console.log(`    largest body  : ${max((s) => s.bytes).slug} at ${Math.round(max((s) => s.bytes).bytes / 1024)} KiB`);
  console.log(`    most ids      : ${max((s) => s.itemIds).slug} with ${max((s) => s.itemIds).itemIds}`);
  const a2secs = a2l.map((s) => s.secs);
  console.log(`    A2 sections   : min ${Math.min(...a2secs)} max ${Math.max(...a2secs)} mean ${(a2secs.reduce((a, b) => a + b, 0) / a2secs.length).toFixed(1)}`);

  /* ── 4. Is there a HARD CAP on lesson size anywhere? ─────────────────────── */
  console.log('\n## 4. Two-lesson units, the only precedent for splitting\n');
  for (const x of units.filter((y) => y.lessonIds.length > 1)) {
    console.log(`  ${x.id} -> ${x.lessonIds.join(', ')}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
