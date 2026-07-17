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
create table if not exists public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  display_name  text,
  level         text default 'B1',
  goal          text,
  accent        text default 'Parisienne',
  interface_lang text default 'fr',
  streak        int default 0,
  created_at    timestamptz not null default now()
);

-- Spaced-repetition review queue (FSRS-style scheduling).
create table if not exists public.review_items (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  card_type     text not null,           -- WORD | SON | GRAMMAR | CARNET
  prompt        text not null,
  answer        text,
  source        text,                    -- roleplay | coach | quiz | carnet
  due_at        timestamptz not null default now(),
  stability     real default 1,
  difficulty    real default 5,
  created_at    timestamptz not null default now()
);

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

-- ── Coach usage quota (Phase 3, CF-06) ──
-- The coach is the only real recurring variable cost, so the free tier is capped
-- per day. The counter has to be durable: edge instances are ephemeral and
-- horizontally scaled, so a module-scope counter would reset on every cold start
-- and be per-instance besides — it would cap nothing while looking like it did.
--
-- HONESTY, and this belongs in the schema rather than a ticket: until Phase 9
-- lands an identity substrate, `subject_key` is a device id or an IP, and a user
-- can change either. This is a COST LIMITER, not a security boundary. It bounds
-- runaway spend and gives Phase 10 its paywall trigger; it does not stop someone
-- determined to get more turns. Phase 9 replaces the key with auth.uid().
create table if not exists public.coach_usage (
  subject_key   text    not null,
  day           date    not null,
  count         integer not null default 0,
  primary key (subject_key, day)
);

-- ── Row Level Security ──
alter table public.coach_usage     enable row level security;
alter table public.system_config   enable row level security;
alter table public.system_prompts  enable row level security;
alter table public.profiles        enable row level security;
alter table public.review_items    enable row level security;
alter table public.sessions        enable row level security;

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
create policy "own profile"  on public.profiles     for all using (auth.uid() = id)      with check (auth.uid() = id);
create policy "own reviews"  on public.review_items for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own sessions" on public.sessions     for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

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
  "coachFreeTurnsPerDay": 20
}'::jsonb)
on conflict (id) do nothing;

-- Note the `do nothing`: an already-seeded database does NOT gain the two coach
-- keys above from this file. That is safe by construction — the coach defaults
-- to 'standard' and 20 when a key is absent, and an absent ceiling never means
-- "unlimited". To change either on a live database, update the row (or let the
-- Phase 3 sync job write it), rather than expecting this insert to run again.
