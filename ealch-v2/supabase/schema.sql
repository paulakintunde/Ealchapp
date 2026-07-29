-- Ealch v2 — Supabase control-plane schema.
-- The app is a thin, configurable client: on launch it reads `system_config`
-- for the active orchestrator, service toggles, model selections, and prompt
-- version. NO raw provider secrets are ever stored here — only references,
-- flags, and prompt text. Secrets live in Edge Function environment vars.

-- ── Remote configuration (read by every client, written only by admins) ──
create table if not exists public.system_config (
  id            text primary key default 'active',
  config        jsonb not null,          -- RemoteConfig shape (orchestrator, services, models, promptVersion, ttsProvider, sttProvider, failoverToastVisible)
  updated_at    timestamptz not null default now(),
  -- set null (not the default no-action) so deleting an admin who once wrote
  -- config can never be RESTRICTed by this FK — account deletion must not fail
  -- on a dangling audit reference. The delete-account function relies on this.
  updated_by    uuid references auth.users(id) on delete set null
);

-- Versioned, auditable system prompts.
create table if not exists public.system_prompts (
  id            uuid primary key default gen_random_uuid(),
  key           text not null,           -- e.g. 'coach', 'examiner', 'survival'
  version       text not null,
  body          text not null,
  active        boolean not null default false,
  created_at    timestamptz not null default now()
);

-- Per-user profile + learning state.
--
-- `level` has no default (Phase 9): a value nobody chose is not a real
-- placement, and 'B1' shipped as a fabricated default that nothing ever
-- overwrote until a real placement flow existed. Null means "unplaced",
-- honestly. Constrained to the app's real lowercase Level union
-- (ealch-v2/src/content/schema.ts LEVELS) rather than the uppercase 'B1' this
-- table used to default to. No `streak` column: it was never written by any
-- code path — the client derives streak from the session log
-- (progress.logic.ts) — so a server column for it could only ever be another
-- fabricated number.
create table if not exists public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  display_name  text,
  level         text check (level is null or level in ('sons','a1','a2','b1','b2','c1')),
  goal          text,
  accent        text default 'Parisienne',
  interface_lang text default 'fr',
  created_at    timestamptz not null default now()
);

-- Append-only attempt log (Phase 9). Replaces review_items (FSRS-shaped,
-- zero live consumers — nothing ever queried it). Mirrors AttemptEntry
-- (ealch-v2/src/store/progress.logic.ts), narrowed to what the SRS fold
-- (srsCards/gradeAttempt) and Le Rapport's per-drill breakdown
-- (app/feedback.tsx, keyed on `activity`) actually read. `id` is
-- CLIENT-generated (mintAttemptId) and IS the idempotency key: a client can
-- safely re-upload after a partial failure via `on conflict (id) do nothing`
-- (see src/services/sync.ts).
create table if not exists public.attempts (
  id            uuid primary key,
  user_id       uuid not null references auth.users(id) on delete cascade,
  item_id       text not null,
  modality      text not null check (modality in ('recognise','produce','discriminate')),
  verdict       text not null check (verdict in ('good','close','off','none')),
  correct       boolean not null,
  activity      text not null,
  day           text not null,           -- local calendar day, matches AttemptEntry.date
  at            timestamptz not null default now()
);
create index if not exists attempts_user_at_idx on public.attempts (user_id, at);

-- Session transcripts + daily reports.
create table if not exists public.sessions (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  mode          text,                    -- survival | examiner
  transcript    jsonb,
  report        jsonb,
  minutes       real,
  created_at    timestamptz not null default now()
);

-- Per-mode resume position (mirrors ResumeByMode, ealch-v2/src/store/
-- progress.logic.ts). One row per (user, activity): mutable, latest-wins —
-- NOT an append-only log like attempts, so it follows the sessions/profiles
-- "own row, full CRUD" RLS shape rather than attempts' insert-only one. The
-- client upserts on every setResume and deletes on every clearResume
-- (src/services/sync.ts); `route` already carries whatever position that
-- activity's screen needs (an item id, a lesson anchor, a turn index) to
-- reopen at the exact card, so this table stores it opaquely rather than
-- trying to model every screen's own position shape.
create table if not exists public.resume_state (
  user_id       uuid not null references auth.users(id) on delete cascade,
  activity      text not null,
  route         text not null,
  title         text not null,
  day           text not null,           -- local calendar day, matches ResumeState.at
  updated_at    timestamptz not null default now(),
  primary key (user_id, activity)
);

-- ── Coach usage quota (Phase 3, CF-06) ──
-- The coach is the only real recurring variable cost, so the free tier is capped
-- per day. The counter has to be durable: edge instances are ephemeral and
-- horizontally scaled, so a module-scope counter would reset on every cold start
-- and be per-instance besides — it would cap nothing while looking like it did.
--
-- HONESTY, and this belongs in the schema rather than a ticket: as of Phase 9,
-- `subject_key` is `auth:<uid>` for a signed-in caller (coach/index.ts's
-- callerUid verifies the caller's own JWT — never trusts a client-asserted
-- id) and falls back to a device id or IP only for guests. Either way it is a
-- COST LIMITER, not a security boundary: it bounds runaway spend and gives
-- Phase 10 its paywall trigger, it does not stop someone signed in and
-- determined to get more turns from simply accepting the cap.
create table if not exists public.coach_usage (
  subject_key   text    not null,
  day           date    not null,
  count         integer not null default 0,
  primary key (subject_key, day)
);

-- Entitlements mirror (Phase 10; vendor amended to Adapty 2026-07-22).
-- Written ONLY by the adapty-webhook edge function (service role). The
-- retired revenuecat-webhook fn remains deployed but dormant: its secret is
-- unset, so it 401s everything. The client NEVER reads this to grant access —
-- the Adapty profile is the runtime entitlement authority and the app
-- reconciles against it on every foreground, so a dropped webhook can never
-- silently gate a paying user. Two consumers, both server-side: the coach
-- function's premium cap exemption, and analytics/BI. `user_id` is the auth
-- uid (same id Adapty is given as customer_user_id); deliberately not an FK so
-- an out-of-order webhook (before the profiles row exists) still lands.
create table if not exists public.entitlements (
  user_id       uuid primary key,
  plan          text        not null default 'free',
  features      text[]      not null default '{}',
  source        text        not null default 'iap',
  store         text,
  product_id    text,
  -- Last webhook event type (initial_purchase, renewal, cancellation,
  -- billing_issue, expiration, ...) — an audit hint, never an access input.
  status        text,
  expiry        timestamptz,
  billing_issue boolean     not null default false,
  environment   text,
  updated_at    timestamptz not null default now()
);

-- ── Row Level Security ──
alter table public.entitlements    enable row level security;
alter table public.coach_usage     enable row level security;
alter table public.system_config   enable row level security;
alter table public.system_prompts  enable row level security;
alter table public.profiles        enable row level security;
alter table public.attempts        enable row level security;
alter table public.sessions        enable row level security;
alter table public.resume_state    enable row level security;

-- Config: world-readable (non-sensitive), admin-writable only.
create policy "config readable" on public.system_config for select using (true);

-- Prompts: NO anon read policy, deliberately (master plan Phase 2.D security).
-- The client never needs a prompt body: the coach edge function injects the
-- prompt server-side with the service role, which bypasses RLS. A world-
-- readable policy here handed the full coach/examiner prompt text to anyone
-- with the anon key — prompt bodies are product IP and a prompt-injection
-- surface, not config. RLS stays ENABLED with no select policy, so anon reads
-- return zero rows. (The previous "prompts readable" using(true) policy was
-- dropped from the live DB on 2026-07-17; this file no longer creates it.)

-- Quota: NO policies at all, deliberately. Only the coach function touches this,
-- with the service role, which bypasses RLS. A client that could write its own
-- quota row would not be a quota.

-- Entitlements: NO policies at all, same stance. A client that could read its
-- mirror row might be tempted to gate on it (stale) — and one that could write
-- it would be minting entitlements, the exact Phase 0 defect. Service role only.

-- Atomic bump: read-then-write in the function would let two concurrent turns
-- both see 9, both conclude they are under a limit of 10, and both spend. One
-- statement, so the database settles it.
--
-- Refused turns still increment. That is deliberate: it keeps the statement
-- single and race-free, and a counter that runs past the limit is harmless
-- because only `allowed` is ever read.
create or replace function public.coach_bump(p_key text, p_day date, p_limit integer)
returns table (used integer, allowed boolean)
language plpgsql
as $$
begin
  insert into public.coach_usage (subject_key, day, count)
  values (p_key, p_day, 1)
  on conflict (subject_key, day)
    do update set count = coach_usage.count + 1
  returning coach_usage.count into used;

  allowed := used <= p_limit;
  return next;
end;
$$;

-- Only the service role may call it. A client that can bump an arbitrary key can
-- exhaust someone else's quota.
revoke all on function public.coach_bump(text, date, integer) from public;
revoke all on function public.coach_bump(text, date, integer) from anon;
revoke all on function public.coach_bump(text, date, integer) from authenticated;

-- Users own their rows.
create policy "own profile"  on public.profiles for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "own sessions" on public.sessions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own resume_state" on public.resume_state for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Attempts: select + insert only, deliberately no update/delete policy —
-- RLS enforces "append-only, never mutate" at the database level too, not
-- just by the convention documented on AttemptLog in progress-schema.ts.
create policy "read own attempts"   on public.attempts for select using (auth.uid() = user_id);
create policy "insert own attempts" on public.attempts for insert with check (auth.uid() = user_id);

-- Seed the active config (matches the app's built-in defaults).
insert into public.system_config (id, config)
values ('active', '{
  "orchestrator": "nvidia",
  "services": { "fishAudio": true, "azure": false, "glif": false },
  "models": { "general": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning", "content": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning", "audio": "fish-1", "video": "mux" },
  "promptVersion": "v1",
  "ttsProvider": "device",
  "sttProvider": "device",
  "failoverToastVisible": true,
  "coachCostCeiling": "standard",
  "coachFreeTurnsPerDay": 20,
  "gradeFreeTurnsPerDay": 5
}'::jsonb)
on conflict (id) do nothing;

-- Note the `do nothing`: an already-seeded database does NOT gain the coach/
-- grading keys above from this file. That is safe by construction — coach
-- defaults to 'standard' and 20, grading to 5, when a key is absent, and an
-- absent ceiling never means "unlimited". To change any of these on a live
-- database, update the row (or let the Phase 3 sync job write it), rather
-- than expecting this insert to run again. gradeFreeTurnsPerDay is its own
-- key, not a share of coachFreeTurnsPerDay: grade-exam's subject key is
-- "grade:"-prefixed (see grade-exam/index.ts), so the two quotas are counted
-- separately even though both currently live in coach_usage.
