// Pins the privacy and counting invariants of the problem-report schema (FEEDBACK-03).
import { ok, strictEqual } from 'node:assert';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const sql = readFileSync(new URL('../../supabase/schema.sql', import.meta.url), 'utf8');
const submitStart = sql.indexOf('create or replace function public.problem_report_submit');
const submit = sql.slice(submitStart, sql.indexOf('$$;', sql.indexOf('as $$', submitStart)));

test('both tables have RLS on, no policies, and revoked grants', () => {
  for (const t of ['problem_reports', 'problem_report_usage']) {
    ok(sql.includes(`alter table public.${t} enable row level security;`), t);
    ok(sql.includes(`revoke all on table public.${t} from anon, authenticated;`), t);
  }
  strictEqual(/create policy[^;]*on public\.problem_report/i.test(sql), false);
});

test('user_id cascades and the check constraints are present', () => {
  ok(sql.includes('user_id           uuid        references auth.users(id) on delete cascade'));
  ok(sql.includes("category in ('audio','grading','content','crash','payment','other')"));
  ok(sql.includes("status in ('new','seen','fixed','wont_fix')"));
  ok(sql.includes('char_length(details) <= 1000'));
});

test('functions pin search_path and revoke from public, anon, authenticated', () => {
  const sigs = [
    'public.problem_report_submit(jsonb, uuid, text, text, text, integer, integer, integer)',
    'public.problem_reports_purge()',
  ];
  for (const sig of sigs) {
    for (const role of ['public', 'anon', 'authenticated']) {
      ok(sql.includes(`revoke all on function ${sig} from ${role};`), `${sig} ${role}`);
    }
  }
  ok(/function public\.problem_report_submit[\s\S]*?set search_path = ''/.test(sql));
  ok(/function public\.problem_reports_purge[\s\S]*?set search_path = ''/.test(sql));
  strictEqual(sql.includes('problem_report_bump'), false);
});

test('submit inserts before any counter increment and duplicates return first', () => {
  const insertAt = submit.indexOf('insert into public.problem_reports');
  const incAt = submit.indexOf('set count = count + 1');
  ok(insertAt > 0 && incAt > insertAt);
  const dupAt = submit.indexOf("'duplicate'");
  ok(dupAt > 0 && dupAt < submit.indexOf('insert into public.problem_report_usage'));
  const lastDup = submit.lastIndexOf("'duplicate'");
  ok(lastDup < incAt, 'duplicate after insert also returns before increments');
});

test('seed carries the review and report keys; pg_cron is conditional', () => {
  ok(sql.includes('"reviewPromptOn": true'));
  ok(sql.includes('"reportDailyGuest": 3'));
  ok(sql.includes("extname = 'pg_cron'"));
  strictEqual(sql.includes('app/feedback.tsx'), false);
});
