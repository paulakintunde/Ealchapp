/* What the LIVE manifest says learners have. The ledger's rule and the OTA
 * runbook's: only the live manifest says what is on devices, and a rollout is
 * edited in place on it.
 *
 *     pnpm tsx scripts/_a204_manifest_check.ts
 */
import './env';

async function main() {
  const url = `${process.env.SUPABASE_URL}/storage/v1/object/public/content/manifest.json?t=${Date.now()}`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    console.error(`manifest fetch failed: ${res.status} ${res.statusText}`);
    process.exit(1);
  }
  console.log(JSON.stringify(await res.json(), null, 2));
}

main().catch((e) => { console.error(e); process.exit(1); });
