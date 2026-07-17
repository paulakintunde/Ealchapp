// Push the console's AI routing to the app's control plane.
//
//   pnpm routing:sync              write ai_routing -> system_config.config.models
//   pnpm routing:sync --dry-run    print what would change, touch nothing
//
// This is the last inch of the Phase 3 socket. `ai_routing` is where an operator
// chooses a model per capability; `system_config` is what the coach edge function
// actually reads. Without this step the console is a form that writes to a table
// nobody consults, which is precisely the state Phase 3 existed to fix.
//
// Two databases, deliberately not assumed to be one: routing lives in the admin's
// Drizzle database (DATABASE_URL), and system_config lives in the app's Supabase
// (SUPABASE_URL). They may or may not be the same Postgres, so this reads over
// pg and writes over PostgREST rather than betting on it.
//
// The write MERGES. system_config.config carries far more than models
// (promptVersion, ttsProvider, the coach cost ceiling), and clobbering the row
// with a fresh object would silently reset every one of them.

import './env';
// providerForModel comes from the coach's pure island — the ONE definition of
// which provider serves a model id, shared with the edge function that will act
// on this. If the console routes something the edge cannot resolve, that is a
// fact worth knowing here, at sync time, rather than discovering it at runtime
// when the coach quietly serves the default instead.
import { providerForModel } from '../../ealch-v2/supabase/functions/coach/routing.ts';
import { Pool } from 'pg';

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

type RoutedRow = { key: string; name: string; provider: string; enabled: boolean };

const CAPABILITIES = ['general', 'content', 'audio', 'video'] as const;
type Capability = (typeof CAPABILITIES)[number];
const isCapability = (k: string): k is Capability => (CAPABILITIES as readonly string[]).includes(k);

async function readConfig(url: string, key: string): Promise<Record<string, unknown>> {
  const res = await fetch(`${url}/rest/v1/system_config?id=eq.active&select=config`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  if (!res.ok) die(`reading system_config: ${res.status} ${await res.text()}`);
  const rows = (await res.json()) as { config: Record<string, unknown> }[];
  if (!rows.length) die('system_config has no `active` row. Apply ealch-v2/supabase/schema.sql first.');
  return rows[0].config ?? {};
}

async function writeConfig(url: string, key: string, config: Record<string, unknown>): Promise<void> {
  const res = await fetch(`${url}/rest/v1/system_config?id=eq.active`, {
    method: 'PATCH',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ config }),
  });
  if (!res.ok) die(`writing system_config: ${res.status} ${await res.text()}`);
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');

  if (!process.env.DATABASE_URL) {
    // Same rule as content:publish. Without DATABASE_URL the db helper silently
    // falls back to embedded PGlite, and syncing FROM a throwaway WASM database
    // would happily push an empty routing set over the live config.
    die('No DATABASE_URL. Syncing reads the canonical database; it must not run against PGlite.');
  }
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) die('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in ealch-admin/.env');

  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  let routed: RoutedRow[];
  try {
    const { rows } = await pool.query<RoutedRow>(
      `select c.key, m.name, m.provider, m.enabled
         from ai_routing r
         join ai_models m       on m.id = r.active_model_id
         join ai_capabilities c on c.id = r.capability_id`,
    );
    routed = rows;
  } finally {
    await pool.end();
  }

  if (!routed.length) die('ai_routing is empty: nothing is routed, so there is nothing to sync.');

  // Refuse to push a route the edge cannot act on. Serving the default while the
  // console insists otherwise is the exact silent disagreement this phase closed.
  const models: Partial<Record<Capability, string>> = {};
  const warnings: string[] = [];
  for (const r of routed) {
    if (!isCapability(r.key)) {
      warnings.push(`capability "${r.key}" is not one the app reads (${CAPABILITIES.join(', ')}) — skipped`);
      continue;
    }
    if (!r.name?.trim()) die(`capability "${r.key}" routes a model with no name`);
    if (!r.enabled) warnings.push(`capability "${r.key}" routes "${r.name}", which is DISABLED in ai_models`);
    if (r.key === 'general') {
      // Only `general` is resolved by the coach registry today. audio/content/
      // video are synced for the consumers Phase 4 and the generator will bring,
      // so they are not held to this check yet.
      const resolved = providerForModel(r.name);
      if (!resolved) {
        die(
          `capability "general" routes "${r.name}", which the coach cannot resolve to a provider.\n` +
            `  The edge function would ignore it and serve its default instead.\n` +
            `  Add it to MODEL_PROVIDER/PREFIX_RULES in ealch-v2/supabase/functions/coach/routing.ts, or route a known model.`,
        );
      }
      if (resolved !== r.provider) {
        warnings.push(
          `capability "general": ai_models says provider "${r.provider}", the coach registry resolves "${r.name}" to "${resolved}". The registry wins at runtime.`,
        );
      }
    }
    models[r.key] = r.name.trim();
  }

  const config = await readConfig(url, key);
  const before = (config.models ?? {}) as Record<string, string>;
  const after: Record<string, string> = { ...before, ...models };

  const changes = Object.keys(after).filter((k) => before[k] !== after[k]);

  console.log('\n  routing -> system_config.config.models');
  for (const cap of CAPABILITIES) {
    const from = before[cap];
    const to = after[cap];
    if (from === to) console.log(`    ${cap.padEnd(8)} ${to ?? '(unset)'}`);
    else console.log(`    ${cap.padEnd(8)} ${from ?? '(unset)'}  ->  ${to}`);
  }
  for (const w of warnings) console.log(`\n  ! ${w}`);

  if (!changes.length) {
    console.log('\n✓ already in sync; nothing to write\n');
    return;
  }
  if (dryRun) {
    console.log(`\n  --dry-run: ${changes.length} change(s) NOT written\n`);
    return;
  }

  // Merge, never replace: config carries promptVersion, ttsProvider, the coach
  // cost ceiling and more, and none of it belongs to this script.
  await writeConfig(url, key, { ...config, models: after });
  console.log(`\n✓ synced ${changes.length} change(s). The coach picks this up within its config TTL (60s); no app rebuild.\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
