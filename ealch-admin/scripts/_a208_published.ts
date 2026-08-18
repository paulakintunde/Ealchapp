// Which lessons are actually IN the live published snapshot. The DB stores only
// a path and counts; the body lives in Storage, which is what a device fetches.
import './env';
import { downloadFromStorage } from './snapshot-utils.ts';
const LESSONS = ['a2.08.l1','a2.32.l1','a2.31.l1','a2.30.l1','a2.29.l1','a2.28.l1'];
async function main() {
  const url = process.env.SUPABASE_URL; const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) { console.log('no Storage credentials'); return; }
  const m = JSON.parse(await downloadFromStorage(url, key, 'manifest.json')) as Record<string, unknown>;
  console.log(`live manifest v${m.version}  rollout ${m.rollout ?? 100}%  path ${m.path}`);
  const snap = JSON.parse(await downloadFromStorage(url, key, String(m.path))) as { version: number; lessons: { id: string; version?: number }[]; items: unknown[] };
  const by = new Map(snap.lessons.map((l) => [l.id, l]));
  console.log(`snapshot body: v${snap.version}, ${snap.lessons.length} lessons, ${snap.items.length} items\n`);
  for (const id of LESSONS) {
    const l = by.get(id);
    console.log(`  ${id.padEnd(11)} ${l ? `LIVE  v${l.version}` : 'NOT PUBLISHED'}`);
  }
}
main().catch((e) => console.log(`could not read: ${(e as Error).message}`));
