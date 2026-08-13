/* WHAT IS ACTUALLY ON THE WIRE, fetched rather than inferred.
 *
 * Every claim about "what a learner sees" so far has been reasoned from the
 * publish log. This downloads the live manifest and the live snapshot and reads
 * a2.13 out of them, so the answer comes from the bytes a device would receive.
 *
 *   pnpm tsx scripts/_a213_wire.ts
 */
import './env';
import { downloadFromStorage } from './snapshot-utils.ts';

type Lesson = {
  id: string; version?: number;
  sections?: { id?: string; type?: string; size?: string; title?: string; groups?: { items?: Record<string, unknown>[] }[] }[];
};

async function main() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) { console.error('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY'); process.exit(1); }

  const manifest = JSON.parse(await downloadFromStorage(url, key, 'manifest.json')) as
    { version: number; path: string; rollout?: number; publishedAt?: string };
  console.log(`\n## The live manifest\n`);
  console.log(`  version    v${manifest.version}`);
  console.log(`  rollout    ${manifest.rollout ?? 100}%`);
  console.log(`  path       ${manifest.path}`);
  console.log(`  published  ${manifest.publishedAt ?? '?'}`);

  const snap = JSON.parse(await downloadFromStorage(url, key, manifest.path)) as
    { version: number; lessons: Lesson[] };
  console.log(`\n## a2.13 inside that snapshot\n`);
  const L = snap.lessons.find((l) => l.id === 'a2.13.l1');
  if (!L) { console.log('  a2.13.l1 is NOT in the live snapshot at all.'); return; }
  console.log(`  lesson body   v${L.version}`);
  console.log(`  sections      ${(L.sections ?? []).length}`);

  /* THE DEFECT, COUNTED IN THE BYTES A DEVICE WOULD DOWNLOAD. */
  let cards = 0; let withNote = 0; let withGhost = 0;
  for (const s of L.sections ?? []) {
    if (s.type !== 'groupDrill' || s.size === 'xl') continue;
    for (const g of s.groups ?? []) for (const it of g.items ?? []) {
      cards++;
      if (it.note) withNote++;
      if (it.respell !== undefined || it.en !== undefined) withGhost++;
    }
  }
  console.log(`  lg groupDrill cards  ${cards}`);
  console.log(`    carrying a note    ${withNote}   <- what actually renders`);
  console.log(`    carrying respell/en ${withGhost}   <- dropped by MissionRich.tsx:439`);
  console.log(`  VERDICT: ${withNote === cards
    ? 'the fix IS live; every card shows a respelling and a gloss'
    : `${cards - withNote} card(s) render as a bare French string on this snapshot`}`);

  const over = (L.sections ?? []).filter((s) => (s.title ?? '').length > 27);
  console.log(`  titles over 27 chars ${over.length}${over.length ? `  -> ${over.map((s) => s.title).join(' | ')}` : ''}`);

  /* And whether a2.14 is on the wire, which is the whole reason the publish is
     being held. */
  console.log(`\n## a2.14 on the wire\n`);
  const a214 = snap.lessons.find((l) => l.id === 'a2.14.l1');
  console.log(`  ${a214 ? `PRESENT, v${a214.version}, ${(a214.sections ?? []).length} sections` : 'ABSENT — not published'}`);
  console.log(`\n  snapshot holds ${snap.lessons.length} lessons\n`);
}
main().catch((e) => { console.error(e); process.exit(1); });
