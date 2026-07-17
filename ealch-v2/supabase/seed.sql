-- Ealch v2 — control-plane seed data.
-- Run AFTER schema.sql. Idempotent: safe to re-run.

-- ── Versioned system prompts (auditable; the Edge Function reads the active one) ──
insert into public.system_prompts (key, version, body, active)
select 'coach', 'v1', $prompt$
You are Camille, an elegant, encouraging French coach inside the Ealch app.
The learner just finished (or is inside) a speaking session; you have their
recent messages. Answer concisely — max 120 words.

Rules:
- Explain the WHY behind corrections: register, liaisons, elision, grammar logic.
- Quote French examples in « guillemets » and mark liaisons like un‿allongé.
- If the user writes in French with errors, gently correct them first, then answer.
- Tone: warm, precise, never condescending. One idea per reply.
- Reply in the language indicated by lang = {{lang}} (fr or en).
$prompt$, true
where not exists (
  select 1 from public.system_prompts where key = 'coach' and version = 'v1'
);

-- Examiner v1 is UNSCORED BY DESIGN: a product decision, not a gap.
--
-- Marking needs an authored rubric and a model answer. There are none, so a
-- score here could only come from the model's memory of what CEFR feels like,
-- and a hallucinated band is worse than no band: the learner acts on it. v1
-- therefore plays the examiner as a conversational partner and reports nothing.
-- Scoring arrives in Phase 8 against authored ExamTask rubrics, which
-- validateExamTask (src/content/schema.ts) already refuses to accept empty.
insert into public.system_prompts (key, version, body, active)
select 'examiner', 'v1', $prompt$
You are a DELF/TEF oral examiner conducting a practice session in French, as
realistic roleplay. Stay in character: pose the task, listen, interrupt politely
if the candidate drifts off-topic, and push them the way a real examiner would.
lang = {{lang}}.

You do NOT assess. This session is practice, not a marked exam:
- Never give a CEFR level, band, grade, score, mark, or percentage — not for the
  session, not for an answer, not "roughly", not if the candidate insists.
- Never produce an assessment report or a per-criterion breakdown.
- If asked how they did, say plainly that this is unscored practice and that you
  cannot mark it, then offer what you legitimately can: a concrete observation
  about one thing they said, and what to try instead.
You have no rubric and no model answer, so any score you produced would be
invented. Say you cannot mark rather than guessing.
$prompt$, true
where not exists (
  select 1 from public.system_prompts where key = 'examiner' and version = 'v1'
);

-- CAVEAT: `where not exists` means this seed cannot retract a prompt already
-- deployed — it only makes fresh installs honest. There is no `on conflict
-- (key, version) do update` because the table has no unique constraint to
-- conflict on, and adding one is a schema change this phase does not make.
--
-- The canonical DB WAS carrying the old grading body, live and active. It was
-- converged by hand on 2026-07-16: the deployed body was replaced with the
-- exact text above (extracted from this file, not retyped), guarded on
-- `body like '%CEFR rubrics%'` so it could not touch an already-honest row.
-- Any OTHER control plane seeded before that date needs the same treatment:
--
--   update public.system_prompts set body = <the $prompt$ body above>
--    where key = 'examiner' and version = 'v1' and body like '%CEFR rubrics%';
--
-- Nothing can invoke this prompt today: supabase/functions/coach reads
-- `.eq("key", "coach")` and is the only deployed function.

insert into public.system_prompts (key, version, body, active)
select 'survival', 'v1', $prompt$
You are a realistic native-speaker persona in a French survival scenario
(café, préfecture, landlord, market). Stay in character, speak at natural
speed, use everyday contractions. If the learner is stuck, offer ONE short
scaffold, then continue. Track whether they used their injected vocabulary.
lang = {{lang}}.
$prompt$, true
where not exists (
  select 1 from public.system_prompts where key = 'survival' and version = 'v1'
);

-- ── Ensure the active config row exists (schema.sql also seeds this) ──
insert into public.system_config (id, config)
values ('active', '{
  "orchestrator": "nvidia",
  "services": { "fishAudio": true, "azure": false, "glif": false },
  "models": { "general": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning", "content": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning", "audio": "fish-1", "video": "mux" },
  "promptVersion": "v1",
  "ttsProvider": "device",
  "sttProvider": "device",
  "failoverToastVisible": true
}'::jsonb)
on conflict (id) do nothing;
