// Manage the Ealch voice ROSTER (Blocker 4 / CF-04, extended to a cast).
//
// The app is building a named cast of device voices — Camille & Julie (female),
// Louis & Henri (male) — that narration and role play will later assign per
// speaker. This records one named voice at a time:
//   1. ai_models (Drizzle) — the audit row, one per name, meta {androidVoice,
//      iosVoice, gender}, under the `audio` capability.
//   2. system_config.config.voices[name] (app Supabase, PostgREST, MERGED) — the
//      roster the app reads. With --default it also sets config.ttsVoice, the
//      single voice tts.ts speaks in today (the primary brand voice).
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-voices.ts --name Louis --voice fr-ca-x-cab-local --gender m
//   pnpm tsx scripts/author-voices.ts --name Camille --voice <id> --gender f --default
//   pnpm tsx scripts/author-voices.ts --list         show the current roster
//   ...--dry-run to preview.
//
// tts.ts only uses a voice the device actually has (resolveVoice), so a wrong id
// degrades to language-only rather than breaking — safe to iterate by ear.

import './env';
import { Pool } from 'pg';

function argVal(flag: string): string | undefined {
  const i = process.argv.indexOf(flag);
  return i === -1 ? undefined : process.argv[i + 1];
}
function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

const DRY_RUN = process.argv.includes('--dry-run');
const LIST = process.argv.includes('--list');
const IS_DEFAULT = process.argv.includes('--default');
const NAME = argVal('--name');
const VOICE = argVal('--voice');
const GENDER = argVal('--gender');

async function readConfig(url: string, key: string): Promise<Record<string, unknown>> {
  const res = await fetch(`${url}/rest/v1/system_config?id=eq.active&select=config`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  if (!res.ok) die(`reading system_config: ${res.status} ${await res.text()}`);
  const rows = (await res.json()) as { config: Record<string, unknown> }[];
  if (!rows.length) die('system_config has no `active` row.');
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
  if (!process.env.DATABASE_URL) die('No DATABASE_URL. This writes the canonical database.');
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) die('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in ealch-admin/.env');

  // ── --list: show the roster and exit ──
  if (LIST) {
    const config = await readConfig(url, key);
    const voices = (config.voices ?? {}) as Record<string, { android: string | null }>;
    const def = config.ttsVoice as { android?: string } | undefined;
    console.log('\n  Voice roster (system_config.config.voices):');
    const entries = Object.entries(voices);
    if (!entries.length) console.log('    (empty)');
    for (const [n, v] of entries) {
      const isDef = def?.android && def.android === v.android ? '  ← default (ttsVoice)' : '';
      console.log(`    ${n.padEnd(10)} ${v.android ?? '(none)'}${isDef}`);
    }
    console.log('');
    return;
  }

  if (!NAME || !VOICE) die('need --name <Name> and --voice <deviceVoiceId> (or --list).');
  if (GENDER && GENDER !== 'm' && GENDER !== 'f') die('--gender must be m or f.');
  if (!/^fr[-.]/i.test(VOICE)) die(`--voice "${VOICE}" does not look like a French device voice id (expected fr-*)`);
  const nameKey = NAME.trim().toLowerCase();
  const meta = JSON.stringify({ androidVoice: VOICE, iosVoice: null, gender: GENDER ?? null });

  console.log(`\n  ${NAME} → ${VOICE}${GENDER ? ` (${GENDER})` : ''}${IS_DEFAULT ? '  [default]' : ''}`);
  if (DRY_RUN) console.log('  (dry run — nothing written)');

  // ── 1. ai_models audit row ──
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  try {
    if (!DRY_RUN) {
      await pool.query('begin');
      const caps = await pool.query<{ id: string }>(`select id from ai_capabilities where key = 'audio' limit 1`);
      let audioId = caps.rows[0]?.id;
      if (!audioId) {
        const ins = await pool.query<{ id: string }>(
          `insert into ai_capabilities (key, label, description, monthly_volume)
           values ('audio', 'Audio (TTS)', 'Text-to-speech voices for narration and drills', 'n/a')
           on conflict (key) do update set label = excluded.label returning id`,
        );
        audioId = ins.rows[0].id;
      }
      // One-time cleanup of the provisional single-voice placeholder row.
      await pool.query(`delete from ai_models where capability_id = $1 and name = 'Camille (device)'`, [audioId]);
      const upd = await pool.query(
        `update ai_models set meta = $2, provider = 'device' where capability_id = $1 and name = $3`,
        [audioId, meta, NAME],
      );
      if (upd.rowCount === 0) {
        await pool.query(
          `insert into ai_models (capability_id, name, provider, meta, cost_label, latency_label, enabled)
           values ($1, $2, 'device', $3, 'free (on-device)', 'instant', true)`,
          [audioId, NAME, meta],
        );
      }
      await pool.query('commit');
      console.log(`  ✓ ai_models: ${NAME} recorded`);
    }
  } catch (e) {
    await pool.query('rollback').catch(() => {});
    throw e;
  } finally {
    await pool.end();
  }

  // ── 2. system_config.config.voices (+ ttsVoice if --default) ──
  const config = await readConfig(url, key);
  const voices = { ...((config.voices ?? {}) as Record<string, unknown>) };
  voices[nameKey] = { android: VOICE, ios: null };
  const next: Record<string, unknown> = { ...config, voices };
  if (IS_DEFAULT) next.ttsVoice = { android: VOICE, ios: null };

  console.log(`\n  config.voices.${nameKey} = ${VOICE}`);
  if (IS_DEFAULT) console.log(`  config.ttsVoice = ${VOICE} (app default)`);
  if (DRY_RUN) { console.log('\n✓ dry run — nothing written.\n'); return; }

  await writeConfig(url, key, next);
  console.log('\n✓ roster updated. App picks it up on next config refresh (launch/foreground).\n');
}

main().catch((e) => { console.error(e); process.exit(1); });
