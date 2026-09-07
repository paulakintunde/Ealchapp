// The LIVE manifest in Storage: what a device actually adopts today.
import './env';
import { downloadFromStorage } from './snapshot-utils.ts';
async function main() {
  const url = process.env.SUPABASE_URL; const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) { console.log('no SUPABASE_URL / SERVICE_ROLE_KEY in .env — cannot read the live manifest'); return; }
  const raw = await downloadFromStorage(url, key, 'manifest.json');
  const m = JSON.parse(raw) as Record<string, unknown>;
  console.log(`live manifest: version ${m.version}  rollout ${m.rollout ?? 100}%  path ${m.path ?? '-'}`);
  console.log(`counts: ${JSON.stringify(m.counts ?? {})}`);
}
main().catch((e) => console.log(`could not read the live manifest: ${(e as Error).message}`));
