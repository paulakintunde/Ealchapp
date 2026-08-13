/* WHAT IS ACTUALLY ON THE WIRE, for any lesson, fetched rather than inferred.
 *
 * Ledger §13: a publish log says what was UPLOADED. It does not say what is
 * being served, at what rollout, or what a lesson body inside it contains.
 * `_a203_wire.ts` did this for one lesson; this is the same read, parameterised,
 * so the next publish does not need a new script.
 *
 *   pnpm tsx scripts/_wire.ts                 the manifest and every lesson
 *   pnpm tsx scripts/_wire.ts a2.16.l1        and one lesson in detail
 */
import './env';
import { downloadFromStorage } from './snapshot-utils.ts';

type Item = { id: string; fr: string; respell?: string | null; gender?: string | null };
type Lesson = {
  id: string; version?: number; itemIds?: string[];
  sections?: { id?: string; type?: string; title?: string }[];
};

async function main() {
  const want = process.argv.slice(2).filter((a) => !a.startsWith('-'));
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) { console.error('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY'); process.exit(1); }

  const manifest = JSON.parse(await downloadFromStorage(url, key, 'manifest.json')) as
    { version: number; path: string; rollout?: number; publishedAt?: string };
  console.log('\n## The live manifest\n');
  console.log(`  version    v${manifest.version}`);
  console.log(`  rollout    ${manifest.rollout ?? 100}%`);
  console.log(`  path       ${manifest.path}`);
  console.log(`  published  ${manifest.publishedAt ?? '?'}`);

  const snap = JSON.parse(await downloadFromStorage(url, key, manifest.path)) as
    { version: number; lessons: Lesson[]; items: Item[] };
  const byId = new Map(snap.items.map((i) => [i.id, i] as const));
  console.log(`\n  the snapshot holds ${snap.lessons.length} lessons and ${snap.items.length} items`);

  /* EVERY LESSON'S itemIds RESOLVE IN THE BYTES A DEVICE WOULD GET. A lesson
     whose itemIds resolve to nothing renders empty cards, and the seed cut is
     applied by publish rather than by any merge, so this is the only place the
     two are ever compared on the wire. */
  const broken = snap.lessons
    .map((l) => ({ id: l.id, missing: (l.itemIds ?? []).filter((id) => !byId.has(id)) }))
    .filter((x) => x.missing.length);
  console.log(`  lessons with an unresolved itemId: ${broken.length}`);
  for (const b of broken) console.log(`    !! ${b.id}  ${b.missing.length} missing: ${b.missing.slice(0, 5).join(' ')}`);

  for (const id of want) {
    const L = snap.lessons.find((l) => l.id === id);
    console.log(`\n## ${id} inside that snapshot\n`);
    if (!L) { console.log(`  ${id} is NOT in the live snapshot at all.`); continue; }
    console.log(`  lesson body   v${L.version}`);
    console.log(`  sections      ${(L.sections ?? []).length}`);
    console.log(`  itemIds       ${(L.itemIds ?? []).length}`);
    const missing = (L.itemIds ?? []).filter((x) => !byId.has(x));
    console.log(`  unresolved    ${missing.length}${missing.length ? `  ${missing.join(' ')}` : '  (every card has a row)'}`);
    const noRespell = (L.itemIds ?? []).filter((x) => !(byId.get(x)?.respell ?? ''));
    console.log(`  no respelling ${noRespell.length}${noRespell.length ? `  ${noRespell.slice(0, 6).join(' ')}` : '  (every card can be said)'}`);
    console.log(`  missions      ${(L.sections ?? []).map((s) => s.title).filter(Boolean).slice(0, 6).join(' · ')} …`);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
