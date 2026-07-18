// Wire the chosen Camille DEVICE voice (Blocker 4, CF-04).
//
// Two writes, matching how routing is wired (sync-routing.ts):
//   1. ai_models (Drizzle DB) — the AUDIT record: which device voice is Camille,
//      under the `audio` capability, provider `device`, meta {androidVoice,
//      iosVoice}. Creates the `audio` capability row if the catalogue is empty.
//   2. system_config.config.ttsVoice (app Supabase, PostgREST) — what the APP
//      actually reads (config.ts -> tts.ts). MERGED into config, never replacing
//      it, exactly like sync-routing.ts.
//
// The app's tts.ts only passes the voice to Speech.speak when the device
// actually has that id (resolveVoice), so a wrong id degrades to language-only
// rather than breaking. That also makes this swappable by ear with no risk:
//   pnpm tsx scripts/author-camille-voice.ts --voice fr-ca-x-cac-local
//
// Usage:
//   pnpm tsx scripts/author-camille-voice.ts --dry-run
//   pnpm tsx scripts/author-camille-voice.ts [--voice <id>]   (default below)

import './env';
import { Pool } from 'pg';

// PROVISIONAL default. A fr-CA, Enhanced, -local (offline, low-latency) voice —
// the right CLASS for a narration voice. Which specific one sounds like Camille
// is an ear call; swap with --voice once Paul has auditioned.
const DEFAULT_VOICE = 'fr-ca-x-cab-local';

function argVal(flag: string): string | undefined {
  const i = process.argv.indexOf(flag);
  return i === -1 ? undefined : process.argv[i + 1];
}
function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

const DRY_RUN = process.argv.includes('--dry-run');
const ANDROID_VOICE = argVal('--voice') ?? DEFAULT_VOICE;
const IOS_VOICE: string | null = null; // iOS gets its own audition later; ids do not cross platforms.

if (!/^fr[-.]/i.test(ANDROID_VOICE)) {
  die(`--voice "${ANDROID_VOICE}" does not look like a French device voice id (expected fr-*)`);
}

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
    headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
    body: JSON.stringify({ config }),
  });
  if (!res.ok) die(`writing system_config: ${res.status} ${await res.text()}`);
}

async function main() {
  if (!process.env.DATABASE_URL) die('No DATABASE_URL. This writes the canonical database, never PGlite.');
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) die('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in ealch-admin/.env');

  const meta = JSON.stringify({ androidVoice: ANDROID_VOICE, iosVoice: IOS_VOICE });
  console.log(`\n  Camille device voice → android: ${ANDROID_VOICE} · ios: ${IOS_VOICE ?? '(none)'}`);
  if (DRY_RUN) console.log('  (dry run — nothing written)');

  // ── 1. ai_models audit record ──────────────────────────────────────────
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  try {
    const caps = await pool.query<{ id: string }>(`select id from ai_capabilities where key = 'audio' limit 1`);
    let audioId = caps.rows[0]?.id;
    const existing = await pool.query<{ name: string; provider: string; meta: string }>(
      `select name, provider, meta from ai_models m
         join ai_capabilities c on c.id = m.capability_id
        where c.key = 'audio' and m.provider = 'device'`,
    );
    console.log(`\n  ai_capabilities.audio: ${audioId ?? '(absent — will be created)'}`);
    console.log(`  ai_models device audio rows: ${existing.rows.length ? JSON.stringify(existing.rows) : '(none)'}`);

    if (!DRY_RUN) {
      await pool.query('begin');
      if (!audioId) {
        const ins = await pool.query<{ id: string }>(
          `insert into ai_capabilities (key, label, description, monthly_volume)
           values ('audio', 'Audio (TTS)', 'Text-to-speech voice for narration and drills', 'n/a')
           on conflict (key) do update set label = excluded.label
           returning id`,
        );
        audioId = ins.rows[0].id;
      }
      // Idempotent: one device-voice row named 'Camille (device)'. Update in place.
      const upd = await pool.query(
        `update ai_models set meta = $2, provider = 'device'
           where capability_id = $1 and name = 'Camille (device)'`,
        [audioId, meta],
      );
      if (upd.rowCount === 0) {
        await pool.query(
          `insert into ai_models (capability_id, name, provider, meta, cost_label, latency_label, enabled)
           values ($1, 'Camille (device)', 'device', $2, 'free (on-device)', 'instant', true)`,
          [audioId, meta],
        );
      }
      await pool.query('commit');
      console.log('  ✓ ai_models: Camille (device) recorded');
    }
  } catch (e) {
    await pool.query('rollback').catch(() => {});
    throw e;
  } finally {
    await pool.end();
  }

  // ── 2. system_config.config.ttsVoice (what the app reads) ────────────────
  const config = await readConfig(url, key);
  const before = (config.ttsVoice ?? null) as unknown;
  const after = { android: ANDROID_VOICE, ios: IOS_VOICE };
  console.log(`\n  system_config.config.ttsVoice: ${JSON.stringify(before)} -> ${JSON.stringify(after)}`);

  if (DRY_RUN) {
    console.log('\n✓ dry run — nothing written.\n');
    return;
  }
  await writeConfig(url, key, { ...config, ttsVoice: after });
  console.log('\n✓ ttsVoice written. The app picks it up on its next config refresh (launch/foreground); tts.ts uses it only if the device has the id, else language-only.\n');
}

main().catch((e) => { console.error(e); process.exit(1); });
