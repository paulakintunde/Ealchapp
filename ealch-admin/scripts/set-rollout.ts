// Move the staged-rollout dial on the LIVE manifest — without republishing.
//
//   pnpm content:rollout 50     widen (or narrow) adoption to 50% of devices
//   pnpm content:rollout 0      KILL SWITCH: adoption halts everywhere;
//                               every device freezes on what it already holds
//   pnpm content:rollout 100    full rollout
//
// This edits manifest.json in Storage and nothing else: same snapshot, same
// checksum, same version — only the share of devices allowed to adopt it.
// Devices hold a stable lot 0-99 and adopt when lot < rollout, so raising the
// number only ever ADDS devices; nobody flaps back.
//
// What this cannot do: heal a device that already adopted a bad version.
// That is content:rollback (republishes the last good snapshot as a NEW
// version). Kill first to stop the bleed, then roll back to heal.
// Full procedures: ealch-admin/OTA-RUNBOOK.md.

import './env';
// isManifest comes from the app's pure island — the ONE definition of what a
// valid manifest is, shared with the device that will read this file.
import { isManifest } from '../../ealch-v2/src/services/content.logic.ts';
import { downloadFromStorage, uploadToStorage } from './snapshot-utils.ts';

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main() {
  const arg = process.argv[2];
  const rollout = Number(arg);
  if (!Number.isInteger(rollout) || rollout < 0 || rollout > 100) {
    die(`usage: pnpm content:rollout <0..100>   (got "${arg ?? ''}")`);
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) die('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in ealch-admin/.env');

  const raw = await downloadFromStorage(url, key, 'manifest.json');
  const manifest = JSON.parse(raw) as Record<string, unknown>;
  if (!isManifest(manifest)) die('manifest.json in Storage is not a valid manifest — refusing to touch it');

  const before = manifest.rollout === undefined ? 100 : manifest.rollout;
  manifest.rollout = rollout;
  await uploadToStorage(url, key, 'manifest.json', JSON.stringify(manifest, null, 2));

  console.log(`\n✓ v${manifest.version} rollout: ${before}% → ${rollout}%`);
  if (rollout === 0) {
    console.log('  KILL SWITCH ENGAGED: no device adopts anything; all freeze on what they hold.');
    console.log('  If a bad version is already on devices, heal with: pnpm content:rollback\n');
  } else {
    console.log(`  devices with lot < ${rollout} adopt v${manifest.version} on next launch\n`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
