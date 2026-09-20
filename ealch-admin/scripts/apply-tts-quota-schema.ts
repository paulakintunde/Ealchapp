// One-off: apply Phase 3's TTS quota schema (tables + RPCs + config keys)
// to the LIVE Supabase project. This project has no supabase/migrations/
// directory (see ealch-v2/supabase/SETUP.md) — schema.sql plus a direct
// apply against DATABASE_URL IS this project's migration mechanism.
// Every statement below is idempotent (create table if not exists, create
// or replace function, on conflict do nothing/update) — safe to re-run.
import './env';
import { readFileSync } from 'node:fs';
import { Pool } from 'pg';

const NEW_SQL_MARKER = '-- ── TTS usage quota (Phase 3, SEC-01) ──';

async function main() {
  const schemaPath = '../../ealch-v2/supabase/schema.sql';
  const full = readFileSync(new URL(schemaPath, import.meta.url), 'utf8');
  const idx = full.indexOf(NEW_SQL_MARKER);
  if (idx === -1) throw new Error(`marker not found in schema.sql — did Task 1 land? looked for: ${NEW_SQL_MARKER}`);
  const newSql = full.slice(idx);

  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    await c.query(newSql);
    console.log('applied: tts_usage_daily/monthly/minute, tts_free_preview, tts_bump, tts_bump_free_preview');

    // The live system_config row is already seeded, so the ON CONFLICT DO
    // NOTHING insert in schema.sql does not merge the new keys onto it —
    // do that explicitly, additively (|| preserves every existing key).
    await c.query(
      `update public.system_config
         set config = config || $1::jsonb
       where id = 'active'`,
      [JSON.stringify({
        ttsPremiumDailyChars: 2000,
        ttsPremiumMonthlyChars: 25000,
        ttsPremiumDailyRequests: 30,
        ttsPremiumBurstPerMinute: 3,
        ttsFreePreviewChars: 2500,
      })],
    );
    console.log('merged 5 ttsPremium*/ttsFreePreviewChars keys into system_config.config (active row)');

    const tables = await c.query<{ table_name: string }>(
      `select table_name from information_schema.tables
         where table_schema = 'public'
           and table_name in ('tts_usage_daily','tts_usage_monthly','tts_usage_minute','tts_free_preview')
         order by table_name`,
    );
    console.log('tables present:', tables.rows.map((r) => r.table_name).join(', '));
    if (tables.rowCount !== 4) throw new Error(`expected 4 tts_* tables, found ${tables.rowCount}`);

    const fns = await c.query<{ proname: string }>(
      `select proname from pg_proc where proname in ('tts_bump', 'tts_bump_free_preview')`,
    );
    console.log('functions present:', fns.rows.map((r) => r.proname).join(', '));
    if (fns.rowCount !== 2) throw new Error(`expected 2 tts_bump* functions, found ${fns.rowCount}`);

    const cfg = await c.query<{ config: Record<string, unknown> }>(
      `select config from public.system_config where id = 'active'`,
    );
    const ttsKeys = ['ttsPremiumDailyChars', 'ttsPremiumMonthlyChars', 'ttsPremiumDailyRequests', 'ttsPremiumBurstPerMinute', 'ttsFreePreviewChars'];
    const missing = ttsKeys.filter((k) => cfg.rows[0]?.config?.[k] === undefined);
    if (missing.length) throw new Error(`system_config.active missing keys: ${missing.join(', ')}`);
    console.log('system_config.active has all 5 tts quota keys:', JSON.stringify(Object.fromEntries(ttsKeys.map((k) => [k, cfg.rows[0].config[k]]))));
  } finally {
    c.release();
    await pool.end();
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
