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
  updated_by    uuid references auth.users(id)
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

-- ── Row Level Security ──
alter table public.system_config   enable row level security;
alter table public.system_prompts  enable row level security;
alter table public.profiles        enable row level security;
alter table public.review_items    enable row level security;
alter table public.sessions        enable row level security;

-- Config + prompts: world-readable (non-sensitive), admin-writable only.
create policy "config readable" on public.system_config for select using (true);
create policy "prompts readable" on public.system_prompts for select using (true);

-- Users own their rows.
create policy "own profile"  on public.profiles     for all using (auth.uid() = id)      with check (auth.uid() = id);
create policy "own reviews"  on public.review_items for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own sessions" on public.sessions     for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Seed the active config (matches the app's built-in defaults).
insert into public.system_config (id, config)
values ('active', '{
  "orchestrator": "kie",
  "services": { "fishAudio": true, "azure": false, "glif": false },
  "models": { "general": "claude-sonnet-5", "content": "claude-sonnet-5", "audio": "fish-1", "video": "mux" },
  "promptVersion": "v1",
  "ttsProvider": "device",
  "sttProvider": "device",
  "failoverToastVisible": true
}'::jsonb)
on conflict (id) do nothing;
