/* WHAT IS ACTUALLY ON THE WIRE for a2.05, fetched rather than inferred.
 *
 * The publish log says what the script believes it did. This downloads the live
 * manifest and the live snapshot and reads a2.05 out of them, so the answer
 * comes from the bytes a device would receive.
 *
 *   pnpm tsx scripts/_a205_wire.ts
 */
import './env';
import { downloadFromStorage } from './snapshot-utils.ts';

type Section = { id?: string; type?: string };
type Lesson = { id: string; version?: number; sections?: Section[]; intro?: string };
type Item = { id: string; fr?: string };

async function main() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) { console.error('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY'); process.exit(1); }

  const manifest = JSON.parse(await downloadFromStorage(url, key, 'manifest.json')) as
    { version: number; path: string; rollout?: number; publishedAt?: string; checksum?: string };
  console.log(`\n## The live manifest\n`);
  console.log(`  version    v${manifest.version}`);
  console.log(`  rollout    ${manifest.rollout ?? 100}%`);
  console.log(`  path       ${manifest.path}`);
  console.log(`  published  ${manifest.publishedAt ?? '?'}`);
  console.log(`  checksum   ${(manifest.checksum ?? '?').slice(0, 16)}…`);

  const snap = JSON.parse(await downloadFromStorage(url, key, manifest.path)) as
    { version: number; lessons: Lesson[]; items: Item[]; units: { id: string }[] };
  console.log(`\n## a2.05 inside that snapshot\n`);
  console.log(`  snapshot body   v${snap.version}   ${snap.units.length} units · ${snap.lessons.length} lessons · ${snap.items.length} items`);

  const unit = snap.units.find((u) => u.id === 'a2.05');
  const L = snap.lessons.find((l) => l.id === 'a2.05.l1');
  console.log(`  unit a2.05      ${unit ? 'present' : 'ABSENT'}`);
  if (!L) { console.log('  a2.05.l1 is NOT in the live snapshot at all.'); return; }
  console.log(`  lesson body     v${L.version}`);
  console.log(`  sections        ${(L.sections ?? []).length}`);

  /* THE TWO DEVICE FIXES, CHECKED IN THE BYTES A DEVICE WOULD DOWNLOAD. */
  const namesUnit = /\ba[12]\.\d\d\b/.test(L.intro ?? '');
  console.log(`\n  intro names a unit id     ${namesUnit ? 'YES — the v3 fix did not ship' : 'no'}`);

  const rows = snap.items.filter((i) => /^fr\.a2\.verbes\.5(4[1-9]|5\d|6\d|7[0-6])$/.test(i.id));
  const bubble = snap.items.find((i) => i.id === 'fr.a2.verbes.572');
  console.log(`  authored rows .541..576    ${rows.length} of 36`);
  console.log(`  the scene bubble .572      « ${bubble?.fr ?? 'ABSENT'} »`);
  const clips = (bubble?.fr ?? '').includes(' !');
  console.log(`  ends in a spaced "!"      ${clips ? 'YES — it will clip on a Pixel 6' : 'no'}`);

  const reserved = snap.items.filter((i) => {
    const m = /^fr\.a2\.verbes\.(\d+)$/.exec(i.id);
    return m && Number(m[1]) >= 591 && Number(m[1]) <= 650;
  });
  console.log(`  a2.20's block .591..650    ${reserved.length} rows (must be 0)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
