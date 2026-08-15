/* Throwaway: read the LIVE manifest out of Storage. Only the live manifest says
 * what learners actually have (a2.21's "rollout 0 is not a fix" lesson). */
import './env';
import { downloadFromStorage } from './snapshot-utils.ts';

async function main() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) { console.error('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY'); process.exit(1); }
  const raw = await downloadFromStorage(url, key, 'manifest.json');
  console.log('\n  LIVE MANIFEST\n');
  console.log(raw);
}

main().catch((e) => { console.error(e); process.exit(1); });
