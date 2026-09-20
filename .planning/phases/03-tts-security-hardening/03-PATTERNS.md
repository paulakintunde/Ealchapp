# Phase 3: TTS Security Hardening - Pattern Map

**Mapped:** 2026-09-19
**Files analyzed:** 6 (2 to modify, 1 to append-to, 3 to create)
**Analogs found:** 6 / 6

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `ealch-v2/supabase/functions/tts/index.ts` (modify) | controller (Deno edge function) | request-response | `ealch-v2/supabase/functions/coach/index.ts` | exact — same platform, same `--no-verify-jwt` + in-body auth shape, same `system_config` TTL-cache pattern already present in *this same file* |
| `ealch-v2/supabase/functions/tts/quota.ts` (new) | utility (pure logic, no Deno/supabase imports) | transform | `ealch-v2/supabase/functions/coach/routing.ts` | exact — identical purpose (pure decision layer extracted from index.ts so `node --test` can run it with zero platform imports) |
| `ealch-v2/supabase/functions/tts/quota.test.ts` (new) | test | transform | `ealch-v2/supabase/functions/coach/routing.test.ts` | exact — same framework (`node --test`), same "one test per rule that would cost money or lie silently if it regressed" discipline |
| `ealch-v2/supabase/schema.sql` (append) | migration (hand-applied SQL, no `migrations/` dir in this repo) | CRUD (atomic counters) | `coach_usage` table + `coach_bump()` RPC + `entitlements` table (same file, lines 108–226) | exact — same file, same atomicity technique, needs extending from single daily count to character-weighted multi-window |
| `ealch-v2/src/services/tts.ts` (touch only if needed) | service (client) | request-response | itself — `resolveRemote()` (lines 96-129) already handles every failure uniformly | N/A — research (RESEARCH.md "tts.ts Client Fallback Verification") confirms **no code change is required**; only re-verify by reading, do not edit unless a plan step finds an actual gap |
| `ealch-v2/supabase/SETUP.md` (append, doc only) | config/doc | — | its own existing coach smoke-test block (lines 53-60) | exact — same doc, same section shape, extend for `tts` |

## Pattern Assignments

### `ealch-v2/supabase/functions/tts/index.ts` (controller, request-response)

**Analog:** `ealch-v2/supabase/functions/coach/index.ts` (verified, already in production) — and this exact file's own existing `elevenModelId()` for the config-cache pattern.

**Imports pattern** (`coach/index.ts` lines 36-46, `tts/index.ts` line 41 today):
```typescript
import { createClient } from "jsr:@supabase/supabase-js@2";
import {
  buildChain,
  DEFAULT_CEILING,
  DEFAULT_MODEL,
  MAX_CHARS,
  overCap,
  type ChainEntry,
  type CostTier,
  type ProviderName,
} from "./routing.ts";
```
`tts/index.ts` should add a mirrored import from the new `./quota.ts` (tier classification + limit resolution), keeping `index.ts` itself free of decision logic — exactly how `coach/index.ts` delegates to `routing.ts`.

**Auth pattern — `callerUid()`** (`coach/index.ts` lines 156-179, copy near-verbatim):
```typescript
/** Phase 9: verify the caller's own JWT (never trust a client-asserted id) and
 *  return their auth uid, or null for a guest/unauthenticated call — which is
 *  still allowed; only the subject key it gets downgrades to device/IP. Same
 *  pattern as supabase/functions/delete-account/index.ts: an anon-key client
 *  with the caller's bearer token forwarded, so an expired or forged token
 *  simply fails getUser() rather than being trusted. SUPABASE_ANON_KEY is
 *  auto-injected by the platform, same as SUPABASE_URL. */
async function callerUid(req: Request): Promise<string | null> {
  const authHeader = req.headers.get("authorization");
  const url = Deno.env.get("SUPABASE_URL");
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
  if (!authHeader || !url || !anonKey) return null;
  try {
    const caller = createClient(url, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data, error } = await caller.auth.getUser();
    if (error || !data.user) return null;
    return data.user.id;
  } catch {
    return null;
  }
}
```
Deploy comment to mirror at the top of `tts/index.ts` (adapt from `coach/index.ts` lines 28-34): `--no-verify-jwt` stays — guests must still be servable, so the platform gate is the wrong tool; the in-body `callerUid()` check is the real boundary.

**Guest subject key pattern — `subjectKey()`** (`coach/index.ts` lines 139-154, copy and reuse for the guest/free-preview tier, D-02):
```typescript
/** Who this turn is billed against. ... Both are spoofable, and IP is worse
 *  than spoofable — a school or an office behind one NAT shares a single
 *  quota. That collateral is the price of capping cost before an identity
 *  substrate exists, and it is why this is a cost limiter and not a security
 *  boundary. */
function subjectKey(req: Request, deviceId: unknown): string {
  if (typeof deviceId === "string" && deviceId.trim()) {
    return `dev:${deviceId.trim().slice(0, 64)}`;
  }
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0]?.trim();
  return ip ? `ip:${ip}` : "anon";
}
```

**Tier lookup pattern — fail-closed entitlement read** (`coach/index.ts` lines 202-223, adapt per RESEARCH.md's proposed `ttsTier()`):
```typescript
// PROPOSED, mirroring the verified pattern above and entitlement.logic.ts's isPremium()
async function ttsTier(uid: string): Promise<'premium' | 'free'> {
  try {
    const { data, error } = await serviceClient()
      .from("entitlements")
      .select("plan, expiry")
      .eq("user_id", uid)
      .maybeSingle();
    if (error || !data) return 'free';
    const active = !data.expiry || new Date(data.expiry).getTime() > Date.now();
    return data.plan !== 'free' && active ? 'premium' : 'free';
  } catch {
    return 'free';
  }
}
```
Note: unlike `coach`'s `hasUnlimitedCoach` (which checks a specific `features` array entry, `coach.unlimited`), TTS's D-07 only needs `plan !== 'free'` — simpler, no feature-flag string to match. `entitlements` table shape (`ealch-v2/supabase/schema.sql:138-152`) already has everything needed — no schema change for the tier lookup itself.

**Config-cache pattern — already in this file, extend it, don't duplicate it** (`tts/index.ts` lines 83-108, exact existing code):
```typescript
const MODEL_TTL_MS = 60_000;
let modelCache: { id: string; at: number } | null = null;

async function elevenModelId(): Promise<string> {
  const fallback = Deno.env.get("ELEVENLABS_MODEL_ID") ?? "eleven_multilingual_v2";
  const now = Date.now();
  if (modelCache && now - modelCache.at < MODEL_TTL_MS) return modelCache.id;
  let id = fallback;
  try {
    const { data } = await createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    )
      .from("system_config")
      .select("config")
      .eq("id", "active")
      .maybeSingle();
    const audio = (data?.config as { models?: { audio?: unknown } } | null)?.models?.audio;
    if (typeof audio === "string" && audio.startsWith("eleven_")) id = audio;
  } catch {
    // Config unreachable — the env/default model still speaks.
  }
  modelCache = { id, at: now };
  return id;
}
```
Add a second cached reader (or extend this one) for the new TTS quota keys (`ttsPremiumDailyChars`, `ttsPremiumMonthlyChars`, `ttsPremiumDailyRequests`, `ttsPremiumBurstPerMinute`, `ttsFreePreviewChars`, guest cap), same 60s TTL, same safe-fallback-on-error discipline. `coach/index.ts`'s `routing()` (lines 109-137) is the richer analog for a multi-key config reader returning a typed object rather than a single scalar — copy its shape (try/catch around a single `system_config` read, typed destructure with `typeof`/`Number.isFinite` guards, uncached fallback on error) over `elevenModelId()`'s single-value shape.

**Quota-check call site pattern** (`coach/index.ts` lines 394-420, the shape to replicate in `tts/index.ts`'s `Deno.serve` handler):
```typescript
const routed = await routing();
const uid = await callerUid(req);
const subject = uid ? `auth:${uid}` : subjectKey(req, deviceId);
const exempt = uid ? await hasUnlimitedCoach(uid) : false;
const quota = exempt ? null : await bumpTurn(subject, routed.freeTurnsPerDay);
if (quota && !quota.allowed) {
  posthog("coach_turn_cap_reached", { used: quota.used, limit: routed.freeTurnsPerDay });
  return new Response(
    JSON.stringify({ error: "daily coach limit reached", reason: "turn_cap", used: quota.used, limit: routed.freeTurnsPerDay }),
    { status: 429, headers: { ...cors, "Content-Type": "application/json" } },
  );
}
if (!quota && !exempt) posthog("coach_quota_unavailable", { subject: subject.split(":")[0] });
```
For `tts`, replace the single `bumpTurn`/`freeTurnsPerDay` call with the multi-window `tts_bump` RPC (see schema.sql pattern below) called BEFORE the provider chain (`elevenlabs()`/`customTts()`/`fishAudio()`), and branch on `uid === null` (guest) vs `tier === 'free'`/`'premium'` to select which limit set and which table (`tts_usage_*` vs `tts_free_preview` vs a guest device/IP counter) applies. Guests who fail D-01's "no live synthesis at all" reading get a flat 401/403 with no RPC call needed; guests under D-02's "one short preview" reading get the coarse `subjectKey()`-keyed counter, capped far lower than any signed-in tier.

**Error/response shape pattern** (existing in `tts/index.ts` lines 199-204, 227-231, 243-248 — keep this exact JSON error shape, just add new branches for 401/429):
```typescript
if (!text || String(text).length > MAX_CHARS) {
  return new Response(
    JSON.stringify({ error: `text required (max ${MAX_CHARS} chars)` }),
    { status: 400, headers: { ...cors, "Content-Type": "application/json" } },
  );
}
// ...
if (!result) {
  return new Response(JSON.stringify({ error: "all tts providers failed", details: errors }), {
    status: 502,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}
// ... top-level catch:
catch (e) {
  return new Response(JSON.stringify({ error: String(e) }), {
    status: 400,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}
```
New 401 (`{ error, reason: "unauthenticated" }` or `"guest_not_allowed"`) and 429 (`{ error, reason: "daily_chars"|"daily_requests"|"monthly_chars"|"burst"|"free_preview_exhausted", used, limit }`) responses should follow this same `{ error, reason, ...detail }` + matching status code shape, mirroring `coach/index.ts`'s 429 response (line 415-418) — this is also the exact shape `resolveRemote()` in `tts.ts` already treats uniformly as "fall back to device," so the reason field is for logs/telemetry, not client branching.

**Unchanged, do not touch:** the provider chain (`elevenlabs`/`customTts`/`fishAudio`, lines 110-184), `MAX_CHARS` cap (line 188, Claude's discretion whether to bump 2400→2500), CORS headers (lines 191-194), and the top-level try/catch — all correct as-is per RESEARCH.md.

---

### `ealch-v2/supabase/functions/tts/quota.ts` (utility, transform) — NEW

**Analog:** `ealch-v2/supabase/functions/coach/routing.ts` (full file read, verified)

**Header/purpose-statement pattern** (`routing.ts` lines 1-23, copy the framing, adapt the content):
```typescript
// Coach provider routing — the pure decision layer.
//
// This file answers one question: ... It holds no secrets, opens no sockets,
// and touches no Deno globals, so it runs under `node --test` (see
// routing.test.ts). index.ts does the Deno wiring; every decision worth
// arguing about lives here.
// ...
// This file is import-free on purpose, exactly like src/content/schema.ts: it
// is shared by the Deno function and a plain-Node test runner, so it can
// depend on neither world.
```
For `quota.ts`: "This file answers one question: given a caller's uid (or null for a guest), their resolved tier, and the character count of this request, which limit(s) apply and would this request exceed any of them?" — zero Deno/supabase imports, so `tier classification + limit resolution + which-window-tripped logic` is unit-testable exactly like `buildChain`/`overCap`.

**Pure decision function shape** (`routing.ts`'s `buildChain()`, lines 156-224 — the shape to mirror, not the content):
- Takes plain data in (no `Request`, no `Deno.env`), returns a plain result object out (no I/O).
- Every "why did we choose this" fact is a named boolean/field on the result (`unknownModel`, `routeAboveCeiling`, `routedProviderUnavailable` in `routing.ts` → for `quota.ts`, something like `{ allowed: boolean, reason: 'daily_chars'|'daily_requests'|'monthly_chars'|'burst'|'free_preview_exhausted'|'guest_cap'|null, tier: 'premium'|'free'|'guest' }`).
- A small config type (`Env` in `routing.ts`, lines 103-112) carrying the tunable inputs (the `system_config`-sourced limits) so the caller (`index.ts`) supplies them and this file never reads config itself.

**Size/cap check function shape** (`routing.ts`'s `overCap()`, lines 267-278 — directly reusable shape for a "does this push a counter over its limit" pure check):
```typescript
export function overCap(turns: ReadonlyArray<{ content?: unknown }>): number | null {
  let total = 0;
  for (const t of turns) if (typeof t?.content === 'string') total += t.content.length;
  return total > MAX_CHARS ? total : null;
}
```
For TTS this generalizes to a pure function taking the four/five current counter values + their limits and returning which one (if any) is tripped — this is the piece `index.ts` calls locally to decide the `reason` field before/independent of the RPC round trip, and/or the piece `quota.test.ts` pins with table tests (Pitfall 2's explicit test requirement: "a request that's under the daily cap but over the burst cap must still be rejected").

---

### `ealch-v2/supabase/functions/tts/quota.test.ts` (test) — NEW

**Analog:** `ealch-v2/supabase/functions/coach/routing.test.ts` (lines 1-80+ read, verified structure)

**Framework + import pattern** (lines 1-26):
```typescript
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  buildChain,
  DEFAULT_MODEL,
  MAX_CHARS,
  overCap,
  providerForModel,
  PROVIDER_TIER,
  type Env,
  type ProviderName,
} from './routing.ts';
```
For `quota.test.ts`: `import { test } from 'node:test'; import { strictEqual, deepStrictEqual } from 'node:assert'; import { /* the quota.ts exports */ } from './quota.ts';` — same zero-network, zero-Deno test shape (per RESEARCH.md Validation Architecture: `node --test "supabase/functions/tts/*.test.ts"`).

**Test-per-rule discipline** (lines 6-14 comment, and the fixture-builder pattern lines 28-36):
```typescript
// These tests are not ceremony. Each one pins a rule that, if it broke, would
// cost money or lie silently rather than crash: ...
const withSecrets = (...set: ProviderName[]): Env => ({
  hasSecret: (p) => set.includes(p),
});
```
For `quota.ts` tests, build an equivalent small fixture-builder (e.g. `usageOf({ dailyChars, dailyReqs, monthlyChars, minuteReqs })`) and write one `test(...)` per RESEARCH.md's "Looks Done But Isn't" checklist item that is unit-testable without a live deployment: tier classification (premium vs free from a plan string), each of the four premium windows tripping independently (burst trips while daily is still fine — the isolation test RESEARCH.md calls out by name), and the one-shot free-preview table having no day/month dimension (structurally cannot reset).

---

### `ealch-v2/supabase/schema.sql` (migration, CRUD) — append

**Analog:** the file's own existing `coach_usage` table + `coach_bump()` RPC + `entitlements` table (lines 108-226, full block read and verified) and the `system_config` seed block (lines 238-262).

**Table pattern** (lines 108-126, copy shape for `tts_usage_daily`/`tts_usage_monthly`/`tts_usage_minute`/`tts_free_preview`):
```sql
-- ── Coach usage quota (Phase 3, CF-06) ──
-- The coach is the only real recurring variable cost, so the free tier is capped
-- per day. The counter has to be durable: edge instances are ephemeral and
-- horizontally scaled, so a module-scope counter would reset on every cold start
-- and be per-instance besides — it would cap nothing while looking like it did.
create table if not exists public.coach_usage (
  subject_key   text    not null,
  day           date    not null,
  count         integer not null default 0,
  primary key (subject_key, day)
);
```
Follow this exact `if not exists`, comment-explains-the-why, `primary key (subject_key, <window>)` shape for each new usage table. `tts_free_preview` deliberately has NO time-dimension column at all (`primary key (subject_key)` only) — this is what structurally enforces D-06's "once," per RESEARCH.md Pitfall 3.

**RLS stance pattern** (lines 154-182, copy verbatim reasoning and add the new tables to the same `alter table ... enable row level security;` block, with NO select/insert/update policies — service-role only, exactly like `coach_usage`/`entitlements`):
```sql
alter table public.entitlements    enable row level security;
alter table public.coach_usage     enable row level security;
-- ...
-- Quota: NO policies at all, deliberately. Only the coach function touches this,
-- with the service role, which bypasses RLS. A client that could write its own
-- quota row would not be a quota.
```

**Atomic RPC pattern** (lines 184-225, `coach_bump()` — copy the technique verbatim, extend the shape per RESEARCH.md's `tts_bump` sketch):
```sql
create or replace function public.coach_bump(p_key text, p_day date, p_limit integer)
returns table (used integer, allowed boolean)
language plpgsql
set search_path = ''
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

revoke all on function public.coach_bump(text, date, integer) from public;
revoke all on function public.coach_bump(text, date, integer) from anon;
revoke all on function public.coach_bump(text, date, integer) from authenticated;
```
Non-negotiable details to replicate exactly (both are lint/security-hardening requirements documented inline at lines 194-206): `set search_path = ''` with every object fully schema-qualified (`public.tts_usage_daily`, not bare `tts_usage_daily`), and a `revoke all ... from public/anon/authenticated` immediately after each new function — only the service role may call it. The new `tts_bump` RPC needs multiple `insert ... on conflict ... do update ... returning` statements in one function body (one per window table) per RESEARCH.md's Pattern 2 sketch — same atomicity technique, just four upserts instead of one, all inside the same `plpgsql` function so the whole decision is one round trip.

**Config seed pattern** (lines 238-262, extend the same JSON blob and its trailing "note the `do nothing`" comment — do NOT create a second config mechanism):
```sql
insert into public.system_config (id, config)
values ('active', '{
  ...
  "coachCostCeiling": "standard",
  "coachFreeTurnsPerDay": 20,
  "gradeFreeTurnsPerDay": 5
}'::jsonb)
on conflict (id) do nothing;

-- Note the `do nothing`: an already-seeded database does NOT gain the coach/
-- grading keys above from this file. That is safe by construction ...
-- To change any of these on a live database, update the row (or let the
-- Phase 3 sync job write it), rather than expecting this insert to run again.
```
Add the new TTS quota keys (`ttsPremiumDailyChars`, `ttsPremiumMonthlyChars`, `ttsPremiumDailyRequests`, `ttsPremiumBurstPerMinute`, `ttsFreePreviewChars`, and whatever guest-cap key D-01/D-02 resolves to) into this same JSON object, and extend the trailing comment to name them explicitly and restate that `on conflict do nothing` means an already-seeded live database needs a manual `update`/dashboard edit, not a re-run of this file. Also add the required "apply schema.sql to the live project" task as a distinct plan step (Dashboard SQL Editor paste — no `supabase/migrations/` convention exists in this repo, confirmed via `ealch-v2/supabase/SETUP.md`).

---

### `ealch-v2/supabase/SETUP.md` (doc, append) — extend, don't rewrite

**Analog:** its own coach smoke-test block, lines 48-60:
```markdown
supabase functions deploy coach --no-verify-jwt
supabase functions deploy tts   --no-verify-jwt   # optional premium voices
...
Smoke-test the coach from your terminal:

\`\`\`bash
curl -s "https://<PROJECT_REF>.supabase.co/functions/v1/coach" \
  -H "Authorization: Bearer <ANON_KEY>" -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"..."}],"lang":"en"}'
# → {"reply":"...","provider":"kie"}
\`\`\`
```
Add an equivalent `tts` smoke-test block covering the three cases RESEARCH.md's "Looks Done But Isn't" checklist calls out: (1) zero `Authorization` header at all → expect 401, (2) `Authorization: Bearer <ANON_KEY>` only (no user JWT) → expect guest-tier behavior not premium, (3) a valid user JWT → expect 200 up to the tier's cap and 429 past it. This satisfies RESEARCH.md's Wave 0 gap item ("a documented, ideally scripted, manual smoke-test procedure").

---

## Shared Patterns

### Server-side identity verification (`callerUid`)
**Source:** `ealch-v2/supabase/functions/coach/index.ts:156-179`
**Apply to:** `ealch-v2/supabase/functions/tts/index.ts` — copy near-verbatim, this is the direct fix for SEC-01's "reject unauthenticated requests" half.

### Atomic Postgres-backed counters (never read-then-write in JS)
**Source:** `ealch-v2/supabase/schema.sql:184-225` (`coach_bump` + its own inline warning comment)
**Apply to:** the new `tts_bump` RPC and all new `tts_usage_*`/`tts_free_preview` tables — this is the direct fix for SEC-01's "enforces a per-user rate limit" half, and the concurrency-safety requirement flagged as an Anti-Pattern in RESEARCH.md.

### Fail-closed entitlement/tier lookup
**Source:** `ealch-v2/supabase/functions/coach/index.ts:209-223` (`hasUnlimitedCoach`)
**Apply to:** the new `ttsTier()` helper in `tts/index.ts` — any error, missing table, or missing row must read as `'free'`, never `'premium'`.

### `system_config`-driven tunables with 60s TTL cache and safe fallback
**Source:** `ealch-v2/supabase/functions/tts/index.ts:81-108` (`elevenModelId`, already in this exact file) and `ealch-v2/supabase/functions/coach/index.ts:109-137` (`routing`, richer multi-key variant)
**Apply to:** the new quota-limit config reader in `tts/index.ts` — add new keys to the same `system_config.config` JSON blob (`ealch-v2/supabase/schema.sql:238-251`), never a new config mechanism.

### Pure-logic extraction for `node --test`-ability
**Source:** `ealch-v2/supabase/functions/coach/routing.ts` (whole file) + `ealch-v2/supabase/functions/coach/routing.test.ts` (whole file)
**Apply to:** the new `tts/quota.ts` + `tts/quota.test.ts` pair — zero Deno/supabase imports in the logic file, so tier classification and multi-window limit resolution are testable without a deployment.

### JSON error-response shape (`{ error, reason, ...detail }` + matching HTTP status)
**Source:** `ealch-v2/supabase/functions/coach/index.ts:382-391, 415-418` and `ealch-v2/supabase/functions/tts/index.ts:199-204, 227-231, 243-248`
**Apply to:** the new 401/429 responses in `tts/index.ts` — consistent with both functions' existing convention, and irrelevant-but-harmless to the client since `resolveRemote()` in `ealch-v2/src/services/tts.ts:96-129` already treats any non-2xx uniformly as "fall back to device speech" (verified, no client change needed).

## No Analog Found

None. Every file in this phase's scope has a strong, directly-reusable, already-shipped-in-this-repo analog (`coach/index.ts`, `coach/routing.ts` + `.test.ts`, and this file's own `schema.sql` block). RESEARCH.md's own framing applies: "every piece this phase needs already has a working, shipped reference implementation in the same repository."

## Metadata

**Analog search scope:** `ealch-v2/supabase/functions/` (coach, tts, delete-account, adapty-webhook — grepped), `ealch-v2/supabase/schema.sql` (full read), `ealch-v2/src/services/tts.ts` (targeted read, lines 80-220), `ealch-v2/src/store/entitlement.logic.ts` (full read), `ealch-v2/src/services/config.ts` (targeted read), `ealch-v2/supabase/SETUP.md` (grepped + targeted read)
**Files scanned:** 8 read/grepped directly this session (plus RESEARCH.md's own already-verified excerpts cross-checked, not re-read where RESEARCH.md's quoted line ranges were trusted as accurate — e.g. `tts.ts:96-129` was independently re-read and confirmed to match)
**Pattern extraction date:** 2026-09-19
