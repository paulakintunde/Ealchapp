// PRUNE — delete old snapshot BYTES from Storage, keeping the version history.
//
//   pnpm content:prune                        dry run, keep the newest 10
//   pnpm content:prune --keep 5               dry run, keep the newest 5
//   pnpm content:prune --keep 10 --apply      actually delete
//
// Why this exists: every publish uploads a full-corpus snapshots/v{n}.json and
// nothing has ever deleted one. At v56 that was 56 objects and 1039 MiB against
// a 1 GB Storage limit, growing ~24.7 MB per publish. The bucket was the only
// thing near a quota; Postgres was 46 MB.
//
// WHAT IS SAFE TO DELETE, AND WHY
//
// No device ever reads an old snapshot. The app fetches manifest.json and then
// the single path that manifest names (content.ts:294, :307). A learner cached
// on v40 does not re-fetch v40, they upgrade to whatever the manifest points
// at. So every object below the live version serves nobody.
//
// Two things do read older objects:
//   - content:rollback --to <n> downloads that version and checksum-verifies it
//     before republishing its bytes. This is the real consumer, and it is what
//     --keep is FOR: a pruned version can no longer be rolled back onto. It
//     fails loudly on the download, never silently onto wrong bytes.
//   - publish reads the immediately previous version for its diff, inside a
//     try/catch that degrades to "could not compare" (publish-content.ts:950).
//     A missing object cannot block a publish.
//
// WHAT THIS MUST NEVER TOUCH: the content_snapshots ROWS.
//
// The version counter is `order by version desc limit 1` against that table
// (publish-content.ts:424), not against Storage. Delete the rows and publish
// reissues version numbers that devices already hold, which is a mutated
// snapshot under an unchanged version number: undetectable to them, and the
// exact hazard 0003_content_snapshots.sql was written to prevent. So bytes go,
// rows stay. A row whose object is gone is the correct end state, and it is
// what keeps the published history readable in the console.

import './env';
import { describeTarget, isRemoteTarget } from './env';
import { listStorage, deleteFromStorage, downloadFromStorage } from './snapshot-utils.ts';

const argv = process.argv.slice(2);
const APPLY = argv.includes('--apply');
const keepIx = argv.indexOf('--keep');
const KEEP = keepIx === -1 ? 10 : Number(argv[keepIx + 1]);

const PREFIX = 'snapshots/';
const mib = (b: number) => `${(b / 1048576).toFixed(1)} MiB`;

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

/** Parse snapshots/v{n}.json. Anything else under the prefix is left alone:
 *  this script deletes a known shape, it does not empty a directory. */
function versionOf(name: string): number | null {
  const m = /^snapshots\/v(\d+)\.json$/.exec(name);
  return m ? Number(m[1]) : null;
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) die('No DATABASE_URL — the version history lives in the canonical DB.');
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) die('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in ealch-admin/.env');
  if (!Number.isInteger(KEEP) || KEEP < 2) {
    die(`--keep must be an integer >= 2, got "${keepIx === -1 ? 10 : argv[keepIx + 1]}". Keeping fewer than two leaves nothing to roll back onto.`);
  }

  // The live manifest decides what is untouchable. If we cannot read it we
  // cannot prove which version devices are being served, and a prune that
  // cannot prove that has no business deleting anything.
  let live: { version: number; path: string };
  try {
    live = JSON.parse(await downloadFromStorage(url, key, 'manifest.json')) as { version: number; path: string };
  } catch (e) {
    die(`cannot read the live manifest.json, so cannot prove what is being served: ${(e as Error).message}`);
  }
  if (typeof live.version !== 'number' || typeof live.path !== 'string') {
    die('manifest.json is not the expected shape — refusing to prune against an unreadable manifest.');
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });

  try {
    const rows = await pool.query<{ version: number }>(
      `select version from content_snapshots order by version desc`
    );
    const known = rows.rows.map((r) => r.version);
    if (known.length === 0) die('content_snapshots is empty — nothing to prune against.');

    const objects = await listStorage(url, key, PREFIX);
    const versioned = objects
      .map((o) => ({ ...o, version: versionOf(o.name) }))
      .filter((o): o is typeof o & { version: number } => o.version !== null)
      .sort((a, b) => b.version - a.version);
    const unversioned = objects.filter((o) => versionOf(o.name) === null);

    // Keep the newest KEEP *published versions*, not the newest KEEP objects.
    // Deriving the window from the DB means an already-pruned gap cannot pull
    // an older version back into the keep set to fill it.
    const keepVersions = new Set(known.slice(0, KEEP));
    keepVersions.add(live.version); // belt and braces: the served version, always

    const doomed = versioned.filter((o) => !keepVersions.has(o.version));
    const kept = versioned.filter((o) => keepVersions.has(o.version));

    // A bug in the window maths must not become a deleted live snapshot.
    if (doomed.some((o) => o.name === live.path || o.version === live.version)) {
      die(`refusing: the prune set contains the LIVE snapshot v${live.version} (${live.path}).`);
    }

    const totalBytes = versioned.reduce((n, o) => n + o.size, 0);
    const freed = doomed.reduce((n, o) => n + o.size, 0);

    console.log(`\n  live manifest: v${live.version} -> ${live.path}`);
    console.log(`  versions in DB: ${known.length} (v${known[known.length - 1]}..v${known[0]})`);
    console.log(`  objects in ${PREFIX}: ${versioned.length}, ${mib(totalBytes)}`);

    const missing = known.filter((v) => !versioned.some((o) => o.version === v));
    if (missing.length) {
      console.log(`  already pruned (row kept, bytes gone): ${missing.length} — v${missing[missing.length - 1]}..v${missing[0]}`);
    }
    if (unversioned.length) {
      console.log(`  ! ${unversioned.length} object(s) under ${PREFIX} do not match v{n}.json and are LEFT ALONE:`);
      for (const o of unversioned) console.log(`      ${o.name} (${mib(o.size)})`);
    }

    if (doomed.length === 0) {
      await pool.end();
      console.log(`\n✓ nothing to prune — ${versioned.length} object(s) is already within --keep ${KEEP}.\n`);
      return;
    }

    const oldestKept = kept[kept.length - 1];
    console.log(`\n  -- keeping ${kept.length} --`);
    console.log(`  v${oldestKept?.version}..v${kept[0]?.version}  ${mib(kept.reduce((n, o) => n + o.size, 0))}`);
    console.log(`\n  -- deleting ${doomed.length} --`);
    console.log(`  v${doomed[doomed.length - 1].version}..v${doomed[0].version}  ${mib(freed)}`);
    console.log(`\n  after: ${mib(totalBytes - freed)} in ${kept.length} object(s), ${mib(freed)} reclaimed`);
    console.log(`  rollback window after this prune: v${oldestKept?.version} and newer`);

    if (!APPLY) {
      await pool.end();
      console.log(`\n✓ dry run — Storage untouched. Re-run with --apply to delete.\n`);
      return;
    }

    if (isRemoteTarget()) {
      console.log(`\n!  deleting ${doomed.length} published snapshot(s) from ${new URL(url).host}. This is permanent.`);
    }

    const removed = await deleteFromStorage(url, key, doomed.map((o) => o.name));
    await pool.end();

    console.log(`\n✓ pruned ${removed.length} of ${doomed.length} object(s), ${mib(freed)} reclaimed.`);
    if (removed.length !== doomed.length) {
      console.log(`  ! Storage confirmed fewer deletions than requested. Re-run the dry run to see what remains.`);
    }
    console.log(`  content_snapshots still holds all ${known.length} rows — the version counter is untouched.`);
    console.log(`  Rollback is now limited to v${oldestKept?.version} and newer.\n`);
  } catch (e) {
    await pool.end().catch(() => {});
    throw e;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
