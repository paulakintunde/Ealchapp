// Heal a bad publish: republish a known-good snapshot AS A NEW VERSION.
//
//   pnpm content:rollback           roll back to the version before the latest
//   pnpm content:rollback --to 7    roll back to v7 explicitly
//   add --dry-run                   report, write nothing
//
// Why "old bytes, new version" and not a downgrade: the app's version handling
// is strictly monotonic ON PURPOSE (manifestIsNewer, and the on-device cache
// only ever raises its version). Fighting that would mean trusting every
// device to walk backwards safely. Instead, the last good snapshot's CONTENT
// is re-stamped with the next version number, its checksum recomputed, and
// published normally — devices holding the bad version see a strictly newer
// manifest and "upgrade" onto the good content through the very same verified
// path every other update takes.
//
// What this deliberately does NOT touch:
//   - the DB content (management plane): the bad rows are still there and
//     still need fixing before the next real publish; this only changes what
//     devices RECEIVE while that happens.
//   - seed.json: the committed mirror follows real publishes only. A rollback
//     is an emergency delivery action, not an authoring event.
// Full procedures: ealch-admin/OTA-RUNBOOK.md.

import './env';
import { describeTarget } from './env';
import type { Corpus } from '../../ealch-v2/src/content/schema.ts';
import { stableStringify, sha256, downloadFromStorage, uploadToStorage } from './snapshot-utils.ts';

const argv = process.argv.slice(2);
const DRY_RUN = argv.includes('--dry-run');
const toIx = argv.indexOf('--to');
const TO = toIx === -1 ? null : Number(argv[toIx + 1]);

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) die('No DATABASE_URL — the version counter lives in the canonical DB.');
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) die('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in ealch-admin/.env');
  if (TO !== null && (!Number.isInteger(TO) || TO < 1)) die(`--to must be a version number >= 1, got "${argv[toIx + 1]}"`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });

  try {
    const rows = await pool.query<{ version: number; path: string; checksum: string; counts: unknown; seed_counts: unknown }>(
      `select version, path, checksum, counts, seed_counts from content_snapshots order by version desc`
    );
    if (rows.rows.length < 2 && TO === null) {
      die(`only ${rows.rows.length} snapshot(s) exist — nothing earlier to roll back to`);
    }
    const latest = rows.rows[0];
    const target = TO === null ? rows.rows[1] : rows.rows.find((r) => r.version === TO);
    if (!target) die(`no snapshot row for v${TO} — published versions: ${rows.rows.map((r) => r.version).join(', ')}`);
    if (target.version === latest.version) die(`v${target.version} is already the latest — nothing to roll back`);

    console.log(`\n  rolling back: v${latest.version} (bad) → content of v${target.version} (good), shipped as v${latest.version + 1}`);

    // Fetch the good snapshot and verify it is EXACTLY what its row promised —
    // rolling back onto tampered or corrupted bytes would be a second incident.
    const text = await downloadFromStorage(url, key, target.path);
    if (sha256(text) !== target.checksum) {
      die(`snapshot ${target.path} does not match its recorded checksum — Storage object is not what v${target.version} shipped. Do not roll back onto it.`);
    }

    const corpus = JSON.parse(text) as Corpus;
    const version = latest.version + 1;
    corpus.version = version; // verifySnapshot requires snapshot and manifest to agree

    const snapshotJson = stableStringify(corpus);
    const checksum = sha256(snapshotJson);
    const path = `snapshots/v${version}.json`;
    const manifest = {
      version,
      path,
      checksum,
      rollout: 100, // healing wants everyone, immediately
      counts: target.counts,
      publishedAt: new Date().toISOString(),
      rolledBackFrom: latest.version,
      contentOf: target.version,
    };

    if (DRY_RUN) {
      await pool.end();
      console.log(`  checksum: ${checksum.slice(0, 16)}…`);
      console.log('\n✓ dry run — verified good bytes, nothing written.\n');
      return;
    }

    await uploadToStorage(url, key, path, snapshotJson);
    await uploadToStorage(url, key, 'manifest.json', JSON.stringify(manifest, null, 2));
    await pool.query(
      `insert into content_snapshots (version, path, checksum, counts, seed_counts)
       values ($1, $2, $3, $4, $5)`,
      [version, path, checksum, JSON.stringify(target.counts), JSON.stringify(target.seed_counts)]
    );
    await pool.end();

    console.log(`\n✓ v${version} live: every device now upgrades onto v${target.version}'s content.`);
    console.log(`  The DB still holds the content that shipped bad v${latest.version} — fix it before the next content:publish.\n`);
  } catch (e) {
    await pool.end().catch(() => {});
    throw e;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
