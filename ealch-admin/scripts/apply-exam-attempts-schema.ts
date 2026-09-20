// One-off: apply Phase 4's exam_attempts authorization schema to the LIVE
// Supabase project. This project has no supabase/migrations/ directory (see
// ealch-v2/supabase/SETUP.md) — schema.sql plus a direct apply against
// DATABASE_URL IS this project's migration mechanism.
// Every statement below is idempotent (create table if not exists, alter
// table ... enable row level security) — safe to re-run.
import './env';
import { readFileSync } from 'node:fs';
import { Pool } from 'pg';
import { describeTarget } from './env';

const NEW_SQL_MARKER = 'Exam attempt authorization (Phase 4, PAY-03)';

async function main() {
  console.log('target:', describeTarget());
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL unset — refusing to apply schema to a throwaway PGlite database');
  }

  const schemaPath = '../../ealch-v2/supabase/schema.sql';
  const full = readFileSync(new URL(schemaPath, import.meta.url), 'utf8');
  const idx = full.indexOf(NEW_SQL_MARKER);
  if (idx === -1) throw new Error(`marker not found in schema.sql — did Task 1 land? looked for: ${NEW_SQL_MARKER}`);
  const lineStart = full.lastIndexOf('\n', idx) + 1;
  const newSql = full.slice(lineStart);

  // No system_config merge block here, deliberately: D-06 fixes the grace window at 60 minutes as a code constant (ATTEMPT_GRACE_S in ealch-v2/src/utils/examAttempt.logic.ts), and examGateOn/examFreePapers already exist on the live config row — this phase introduces no new config key.

  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    await c.query(newSql);
    console.log('applied: exam_attempts');

    const tables = await c.query<{ table_name: string }>(
      `select table_name from information_schema.tables
         where table_schema = 'public' and table_name = 'exam_attempts'`,
    );
    console.log('exam_attempts table present:', tables.rows.map((r) => r.table_name).join(', '));
    if (tables.rowCount !== 1) throw new Error(`expected exam_attempts table, found ${tables.rowCount}`);

    const pk = await c.query<{ attname: string; ordinality: number }>(
      `select a.attname, k.ordinality
         from pg_constraint con
         join pg_class rel on rel.oid = con.conrelid
         join unnest(con.conkey) with ordinality as k(attnum, ordinality) on true
         join pg_attribute a on a.attrelid = rel.oid and a.attnum = k.attnum
        where rel.relname = 'exam_attempts' and con.contype = 'p'
        order by k.ordinality`,
    );
    const pkCols = pk.rows.map((r) => r.attname);
    console.log('primary key columns:', pkCols.join(', '));
    const expectedPk = ['user_id', 'paper_id', 'skill'];
    if (pkCols.length !== expectedPk.length || pkCols.some((c2, i) => c2 !== expectedPk[i])) {
      throw new Error(`expected primary key (${expectedPk.join(', ')}), found (${pkCols.join(', ')})`);
    }

    const rls = await c.query<{ relrowsecurity: boolean }>(
      `select relrowsecurity from pg_class where relname = 'exam_attempts'`,
    );
    console.log('row level security enabled:', rls.rows[0]?.relrowsecurity);
    if (rls.rows[0]?.relrowsecurity !== true) throw new Error(`expected relrowsecurity = true, found ${rls.rows[0]?.relrowsecurity}`);

    const policies = await c.query<{ n: number }>(
      `select count(*)::int as n from pg_policies where schemaname = 'public' and tablename = 'exam_attempts'`,
    );
    console.log('policy count:', policies.rows[0]?.n);
    if (policies.rows[0]?.n !== 0) throw new Error(`expected 0 policies on exam_attempts, found ${policies.rows[0]?.n}`);

    const contentTable = await c.query<{ table_name: string }>(
      `select table_name from information_schema.tables
         where table_schema = 'public' and table_name = 'content_exam_papers'`,
    );
    console.log('content_exam_papers present:', contentTable.rows.map((r) => r.table_name).join(', '));
    if (contentTable.rowCount !== 1) throw new Error(`expected content_exam_papers table, found ${contentTable.rowCount}`);
  } finally {
    c.release();
    await pool.end();
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
