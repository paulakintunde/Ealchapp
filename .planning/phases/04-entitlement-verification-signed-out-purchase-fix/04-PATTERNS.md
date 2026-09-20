# Phase 4: Entitlement Verification & Signed-Out Purchase Fix - Pattern Map

**Mapped:** 2026-09-20
**Files analyzed:** 15 (new + modified)
**Analogs found:** 14 / 15

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|---|---|---|---|---|
| `ealch-v2/src/utils/examAttempt.logic.ts` (NEW) | utility (pure logic) | transform | `ealch-v2/src/utils/examGate.logic.ts` | exact (sibling exam-gating pure-logic file, same house discipline) |
| `ealch-v2/src/utils/examAttempt.logic.test.ts` (NEW) | test | transform | `ealch-v2/src/store/entitlementClock.test.ts` | exact (pure `node:test` unit-test conventions for a clock/window predicate) |
| `ealch-v2/src/utils/examStartGate.logic.ts` (NEW, or fold into examAttempt.logic.ts) | utility (pure logic) | transform | `ealch-v2/src/utils/examGate.logic.ts` | exact — this is a server-portable copy of `examPaperAllowed()`'s exact decision shape |
| `ealch-v2/src/utils/examStartGate.logic.test.ts` (NEW) | test | transform | `ealch-v2/src/store/entitlementClock.test.ts` | role-match (pure decision-table test) |
| `ealch-v2/supabase/schema.sql` (EDIT — append `exam_attempts`) | model / migration | CRUD | `ealch-v2/supabase/schema.sql` lines 275-345 (TTS usage quota, Phase 3 SEC-01 section) | exact — same repo, same "new marked section" convention |
| `ealch-admin/scripts/apply-exam-attempts-schema.ts` (NEW) | utility (migration script) | batch / file-I/O | `ealch-admin/scripts/apply-tts-quota-schema.ts` | exact — explicitly named as the template by the phase brief |
| `ealch-v2/supabase/functions/start-exam-attempt/index.ts` (NEW edge function) | controller (edge function) | request-response | `ealch-v2/supabase/functions/grade-exam/index.ts` (structure) + `ealch-v2/supabase/functions/coach/index.ts` (entitlement-read pattern) | role-match, high — same Deno/CORS/callerUid conventions, new responsibility |
| `ealch-v2/supabase/functions/grade-exam/index.ts` (EDIT — add gate check) | controller (edge function) | request-response | `ealch-v2/supabase/functions/coach/index.ts` lines 202-223 (`hasUnlimitedCoach`) | exact — the fail-closed entitlement-mirror-read shape to mirror inline |
| `ealch-v2/supabase/functions/grade-exam/grade-exam-gate.test.ts` (NEW, or extend `examSection.logic.test.ts`) | test | request-response | `ealch-v2/src/store/examSection.logic.test.ts` lines 358-368 (source-text assertion pattern) | exact |
| `ealch-v2/supabase/functions/coach/index.ts` (EDIT — comment-only drive-by fix) | controller (edge function) | request-response | itself, line 203 | n/a (trivial one-line edit, no analog needed) |
| `ealch-v2/app/exam-paper.tsx` (EDIT — client gate + start-attempt call in `go()`) | component (screen) | request-response | `ealch-v2/app/exam.tsx` lines 30, 56, 127-143 (`useFeature('examiner')` + `examPaperAllowed()`) and `ealch-v2/app/exam-paper.tsx` lines 100-114 (`preflightClips` async-check-before-navigate) | exact — both analogs are in this same file's sibling/self |
| `ealch-v2/src/services/analytics.ts` (EDIT — add `entitlement_downgraded` event) | service | event-driven | itself, lines 20-30 (`AnalyticsEvent` union incl. `restore_started`/`restore_completed`) | exact |
| `ealch-v2/src/store/useEntitlement.ts` (EDIT — detect premium→free in `setEntitlement`) | store | event-driven | `ealch-v2/app/settings.tsx` lines 149, 152 (`trackEvent(...)` call sites) + `ealch-v2/src/store/entitlement.logic.ts` (`isPremium`) | role-match, high |
| `ealch-v2/src/store/entitlement.logic.test.ts` or `entitlementClock.test.ts` (EDIT — extend with downgrade-detection test) | test | event-driven | `ealch-v2/src/store/entitlementClock.test.ts` (full file, read above) | exact |
| `ealch-v2/src/services/purchases.test.ts` (NEW — currently does not exist) | test | request-response | `ealch-v2/src/store/entitlementClock.test.ts` (test-file conventions only; no purchases-domain test exists yet) | partial — see "No Analog Found" |

## Pattern Assignments

### `ealch-v2/src/utils/examAttempt.logic.ts` (utility, transform) and `examStartGate.logic.ts`

**Analog:** `ealch-v2/src/utils/examGate.logic.ts` (full file, 44 lines)

**File header/comment discipline to copy** (lines 1-18):
```typescript
// Whether a candidate may open a given mock paper. Pure, no React, no config.
//
// ── Wired now, open now ─────────────────────────────────────────────────────
// ...
```
Every new pure-logic file in this codebase opens with a comment explaining WHY it exists and what trap it closes — copy this discipline for `examAttempt.logic.ts` (why the grace window is duration+60min) and `examStartGate.logic.ts` (why it must mirror `examPaperAllowed()` exactly, not just the entitlement half — this is Pitfall 1 from RESEARCH.md).

**The exact decision shape to port server-side** (lines 19-44, `examPaperAllowed`):
```typescript
export type GateDecision =
  | { allowed: true }
  | { allowed: false; reason: 'needs-exam-tier' };

export function examPaperAllowed(input: {
  gateOn: boolean;
  entitled: boolean;
  freePapers: number;
  paperNo: number;
}): GateDecision {
  const { gateOn, entitled, freePapers, paperNo } = input;
  if (!gateOn) return { allowed: true };
  if (entitled) return { allowed: true };
  if (paperNo <= Math.max(0, Math.floor(freePapers))) return { allowed: true };
  return { allowed: false, reason: 'needs-exam-tier' };
}
```
`examStartGate.logic.ts` should export this identical function (or re-export it) so both the client screen and the Deno edge function's inlined copy compute the same four inputs the same way. Per `grade-exam/index.ts`'s own precedent (see `SCORE_BANDS`, lines 41-46), Deno functions in this repo duplicate rather than cross-import from `ealch-v2/src` — so the edge function's copy will be a hand-duplicated literal of this function, not an import; keep both in sync by convention, same as `SCORE_BANDS` vs `schema.ts`.

**Grace-window math (new, no direct existing function, but follow the clock-floor style)** — model on `entitlement.logic.ts`'s `effectiveNow`/`advancedFloor` pair (lines 96-110): a small, named, single-purpose pure function, e.g. `attemptExpiresAt(startedAtMs, timingS) => startedAtMs + timingS*1000 + 60*60*1000`, and `attemptStillGradable(startedAtMs, timingS, nowMs) => boolean`. Use `ExamSection.timingS` (seconds) per RESEARCH.md's correction — never `overview.minutes` (Pitfall 2).

---

### `ealch-v2/src/utils/examAttempt.logic.test.ts` / `examStartGate.logic.test.ts` (test)

**Analog:** `ealch-v2/src/store/entitlementClock.test.ts` (full file, 98 lines)

**Imports + structure pattern** (lines 1-23):
```typescript
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  MIN_PLAUSIBLE_MS,
  advancedFloor,
  effectiveNow,
  entitlementActive,
  hasFeature,
  isPremium,
} from './entitlement.logic.ts';
import type { Entitlement } from '../content/progress-schema.ts';

const DAY = 86_400_000;
const MAR = Date.UTC(2026, 2, 1);

const paid = (expiry: number | undefined): Entitlement =>
  ({ userId: 'u1', plan: 'premiere', features: ['levels.all'], source: 'iap', expiry }) as Entitlement;
```
Each `test(...)` block names the *scenario in plain English* (e.g. `'winding the device clock back does not revive an expired subscription'`) and asserts both the honest-path and the edge/attack case in the same test. Mirror this for the grace-window boundary: one test for "started T, checked at T+duration+59min → still gradable", one for "T+duration+61min → rejected", using `strictEqual`.

---

### `ealch-v2/supabase/schema.sql` (model/migration, CRUD) — new `exam_attempts` table

**Analog:** same file, lines 275-345 (`-- ── TTS usage quota (Phase 3, SEC-01) ──` section)

**Section-header + idempotency convention** (lines 275-293):
```sql
-- ── TTS usage quota (Phase 3, SEC-01) ──
-- Character-weighted, multi-window: coach_usage/coach_bump only ever needed
-- one daily count. ...
create table if not exists public.tts_usage_daily (
  subject_key text    not null,
  day         date    not null,
  chars       integer not null default 0,
  requests    integer not null default 0,
  primary key (subject_key, day)
);
```
Use `-- ── Exam attempt authorization (Phase 4, PAY-03) ──` as the new marker (this is the exact string the apply-script's `NEW_SQL_MARKER` constant must match verbatim).

**RLS stance to copy** (lines 314-321, and the `entitlements` comment at lines 180-182):
```sql
alter table public.tts_usage_daily   enable row level security;
...
-- Quota: NO policies at all, deliberately — same stance as coach_usage.
-- Only the tts function touches these, with the service role, which
-- bypasses RLS. A client that could write its own quota row would not be
-- a quota.
```
`exam_attempts` should follow this identical "RLS enabled, zero policies, service-role only" stance — RESEARCH.md's Security Domain table explicitly calls for this (a client that could read/write its own attempt row could self-authorize or self-extend the grace window).

**Reference table shapes already in this file for the new table's columns** (lines 57-67, `attempts`; lines 138-152, `entitlements`): `user_id uuid not null references auth.users(id) on delete cascade`, and a `not to be reused` comment discipline — RESEARCH.md's D-05 explicitly forbids reusing `attempts`, so document why in a comment the same way `resume_state`'s header (lines 89-97) explains why it isn't shaped like `attempts`.

**Atomic-insert precedent** (lines 191-219, `coach_bump`) — if a unique-constraint-based idempotent start is wanted (Threat Pattern 3 in RESEARCH.md, race on double-start), copy this `insert ... on conflict ... do update ... returning` single-statement shape rather than read-then-write.

---

### `ealch-admin/scripts/apply-exam-attempts-schema.ts` (utility/migration script, batch)

**Analog:** `ealch-admin/scripts/apply-tts-quota-schema.ts` (full file, 70 lines) — copy near-verbatim, per the phase brief's explicit instruction.

**Full template to adapt:**
```typescript
import './env';
import { readFileSync } from 'node:fs';
import { Pool } from 'pg';

const NEW_SQL_MARKER = '-- ── TTS usage quota (Phase 3, SEC-01) ──'; // -> exam_attempts marker

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
    console.log('applied: exam_attempts');
    // (only add a system_config merge block if the plan introduces a tunable,
    // e.g. examStartGraceMinutes — D-06 fixes this at 60 minutes, so likely skip)
    const tables = await c.query<{ table_name: string }>(
      `select table_name from information_schema.tables
         where table_schema = 'public' and table_name in ('exam_attempts')`,
    );
    if (tables.rowCount !== 1) throw new Error(`expected 1 exam_attempts table, found ${tables.rowCount}`);
  } finally {
    c.release();
    await pool.end();
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
```

---

### `ealch-v2/supabase/functions/start-exam-attempt/index.ts` (NEW controller, request-response)

**Analogs:** `ealch-v2/supabase/functions/coach/index.ts` (entitlement check + conventions) and `ealch-v2/supabase/functions/grade-exam/index.ts` (sibling structure, same domain)

**Imports/CORS/serve-boilerplate pattern** (`coach/index.ts` lines 358-364, `grade-exam/index.ts` lines 342-347 — identical in both):
```typescript
import { createClient } from "jsr:@supabase/supabase-js@2";
// ...
Deno.serve(async (req) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    // ...
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 400, headers: { ...cors, "Content-Type": "application/json" } });
  }
});
```

**`callerUid` — copy verbatim (duplicated per-function by house convention, not shared-imported)** (`coach/index.ts` lines 163-179, identical in `grade-exam/index.ts` lines 95-111):
```typescript
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

**Fail-closed entitlement-mirror read to mirror exactly** (`coach/index.ts` lines 209-223, `hasUnlimitedCoach`):
```typescript
async function hasUnlimitedCoach(uid: string): Promise<boolean> {
  try {
    const { data, error } = await serviceClient()
      .from("entitlements")
      .select("features, expiry")
      .eq("user_id", uid)
      .maybeSingle();
    if (error || !data) return false;
    const features: string[] = Array.isArray(data.features) ? data.features : [];
    if (!features.includes("coach.unlimited")) return false;
    return !data.expiry || new Date(data.expiry).getTime() > Date.now();
  } catch (_) {
    return false;
  }
}
```
Write an `isEntitledExaminer(uid)` following this identical shape, checking `features.includes('examiner')` instead of `'coach.unlimited'`.

**`system_config` read pattern to reuse for `examGateOn`/`examFreePapers`** (`coach/index.ts` lines 109-137, `routing()` — same table, same `.from("system_config").select("config").eq("id","active").maybeSingle()` shape, with the same TTL-cached, never-throw discipline). **This is the single most load-bearing pattern in this phase** (RESEARCH.md Pitfall 1): the new function must read `system_config.config.{examGateOn, examFreePapers}` the same way `routing()` reads `config.models.general`, then feed all four inputs into `examStartGate.logic.ts`'s ported `examPaperAllowed()` — never just check `entitlements.features`.

**Double-logging convention for rejections** (`grade-exam/index.ts` lines 314-328, `logEvent`/`posthog`):
```typescript
function logEvent(event: string, props: Record<string, unknown>) {
  console.error(`[grade-exam] ${event}`, JSON.stringify(props));
}
function posthog(event: string, props: Record<string, unknown>) {
  logEvent(event, props);
  const key = Deno.env.get("POSTHOG_API_KEY");
  if (!key) return;
  // ... fetch to PostHog capture endpoint, .catch(() => {})
}
```
Copy this exactly (renamed `[start-exam-attempt]`) so a wave of rejected starts is visible in function logs even with no PostHog key configured — RESEARCH.md's own incident note explains why this exists.

**Deploy convention:** `supabase functions deploy start-exam-attempt --no-verify-jwt`, doing its own explicit "uid required" check inside (this function IS signed-in-only by design, unlike `coach`/`grade-exam` which also serve guests) — see `coach/index.ts` header comment lines 28-34 for the house rationale on why every function disables the platform gate regardless.

**Insert shape** — new, but follow `coach_bump`'s atomic-single-statement discipline (schema.sql lines 191-219) if double-start races matter; otherwise a plain service-role `insert into public.exam_attempts (...)` after the gate decision is `{allowed: true}`.

---

### `ealch-v2/supabase/functions/grade-exam/index.ts` (EDIT — add attempt-validation gate)

**Analog:** `coach/index.ts`'s `hasUnlimitedCoach` (see above) — same fail-closed shape, applied to a `SELECT ... FROM exam_attempts WHERE ... AND expires_at > now()` read instead of `entitlements`.

**Exact insertion point** — right after `callerUid(req)` resolves and before the existing rubric/modelAnswer guard, mirroring where `coach`'s exemption check sits relative to its quota check (`coach/index.ts` lines 407-410):
```typescript
const uid = await callerUid(req);
const subject = uid ? `auth:${uid}` : subjectKey(req, deviceId);
const exempt = uid ? await hasUnlimitedCoach(uid) : false;
const quota = exempt ? null : await bumpTurn(subject, routed.freeTurnsPerDay);
```
`grade-exam/index.ts` currently does the equivalent quota-only flow at lines 376-386 with zero entitlement/attempt check — this is the exact gap D-03 names. Insert the new `SELECT exam_attempts ... expires_at > now()` check there, rejecting (per the double-logging convention above) with a 4xx JSON error, never a bare string, matching the existing `{ error: "..." }` response shape used throughout this file (lines 356-372, 419-422).

**Drive-by comment fix** (same file family, `coach/index.ts` line 203):
```typescript
/** Phase 10: whether this auth uid holds unlimited coach turns, per the
 *  entitlements mirror (fed by the revenuecat-webhook fn). FAIL-CLOSED to
```
Change `revenuecat-webhook fn` → `adapty-webhook fn` per Claude's Discretion in CONTEXT.md.

---

### `ealch-v2/supabase/functions/grade-exam/grade-exam-gate.test.ts` (NEW test, or extend `examSection.logic.test.ts`)

**Analog:** `ealch-v2/src/store/examSection.logic.test.ts` lines 358-368 — the house "source-text assertion" pattern:
```typescript
test('the grader is forbidden from turning pacing into pronunciation', () => {
  const fn = readFileSync(resolve(srcDir, '../supabase/functions/grade-exam/index.ts'), 'utf8');
  ok(fn.includes('NOT heard by anyone'), 'the block must say nothing listened');
  ok(/fluency criterion ONLY/.test(fn), 'it may inform one criterion and no others');
  // ...
});
```
Write an equivalent test asserting `grade-exam/index.ts`'s source contains the new attempt-check call (e.g. `ok(fn.includes('exam_attempts'))`) positioned before the grading/provider-chain code, and that it checks `expires_at > now()` — same technique, no live-DB integration harness needed for this part.

---

### `ealch-v2/app/exam-paper.tsx` (EDIT — client-side gate + start-attempt call in `go()`)

**Analog 1 — the entitlement-gate read pattern**, `ealch-v2/app/exam.tsx` lines 30, 56, 127-143:
```typescript
import { useFeature } from '@/store/useEntitlement';
import { getConfig } from '@/services/config';
import { examPaperAllowed } from '@/utils/examGate.logic';
// ...
const entitled = useFeature('examiner');
const cfg = getConfig();
// ...
locked={
  !examPaperAllowed({
    gateOn: cfg.examGateOn,
    entitled,
    freePapers: cfg.examFreePapers,
    paperNo: p.paperNo,
  }).allowed
}
```
`exam-paper.tsx` currently has no such import at all (confirmed — its imports stop at `EXAM_MODES`/`ExamSection`/`ExamSkill`, see file lines 15-30) — this is the per-file gap D-07/Open-Question-4 identifies. Add the identical `useFeature('examiner')` + `getConfig()` + `examPaperAllowed()` call at the top of the component, gating `go()`.

**Analog 2 — the existing async-check-before-navigate shape in this same file**, lines 100-114 (`openSection`/`preflightClips`):
```typescript
const openSection = async (skill: ExamSkill) => {
  if (skill !== 'CO' || checking) return void go(skill);
  const co = paper.sections.find((sec) => sec.skill === 'CO');
  const refs = (co ? examTasksOfSection(corpus, co) : [])
    .flatMap((task) => task.parts ?? [])
    .flatMap((part) => (part.audioRef ? [{ path: part.audioRef }] : []));
  if (refs.length === 0) return void go(skill);

  setChecking(true);
  const pre = await preflightClips(refs);
  setChecking(false);
  if (pre.missing === 0 || pre.reachable) return void go(skill);
  setWarn({ skill, ...pre });
};
```
The new "call start-exam-attempt, await its result, only navigate on success" logic (D-05's second attachment point per RESEARCH.md's Findings) should follow this exact shape: a `checking`-style loading flag, an awaited async call, and only `go(skill)` (i.e. `router.push`) on success — reusing the pattern already proven in this file rather than inventing a new one. On rejection, `router.push('/paywall')`, matching `exam.tsx`'s own `onPress` fallback (line 142).

---

### `ealch-v2/src/services/analytics.ts` (EDIT — add `entitlement_downgraded`)

**Analog:** itself, lines 20-30 (`AnalyticsEvent` union):
```typescript
export type AnalyticsEvent =
  | 'paywall_viewed' // props: from (trigger entry point)
  | 'plan_selected' // props: plan ('mo' | 'yr')
  | 'purchase_started' // props: plan, currency
  | 'purchase_completed' // props: plan, currency
  | 'purchase_cancelled' // props: plan
  | 'purchase_failed' // props: plan, message
  | 'restore_started'
  | 'restore_completed' // props: found (boolean)
  | 'gate_blocked' // props: feature, from
  | 'placement_paywall_offered'; // props: level
```
Add `| 'entitlement_downgraded' // props: fromPlan, toPlan` to this union, following the exact `// props: ...` inline-comment documentation convention already used for every other entry. `track()` itself (lines 74-77) needs no change — it already accepts `(event: AnalyticsEvent, props: Props = {})`.

---

### `ealch-v2/src/store/useEntitlement.ts` (EDIT — downgrade detection in `setEntitlement`)

**Analog for the call-site shape:** `ealch-v2/app/settings.tsx` lines 149, 152:
```typescript
trackEvent('restore_started');
// ...
trackEvent('restore_completed', { found: res.ok && res.premium });
```

**Analog for the predicate to reuse:** `entitlement.logic.ts`'s `isPremium` (lines 130-132):
```typescript
export function isPremium(e: Entitlement, nowMs: number): boolean {
  return e.plan !== 'free' && entitlementActive(e, nowMs);
}
```

**Concrete attachment, in the file being edited** (current `setEntitlement`, `useEntitlement.ts` line 44):
```typescript
setEntitlement: (entitlement) => set({ entitlement }),
```
becomes (per RESEARCH.md's own worked example, which this pattern map endorses as the correct shape):
```typescript
setEntitlement: (entitlement) =>
  set((prev) => {
    if (isPremium(prev.entitlement, guardedNow()) && !isPremium(entitlement, guardedNow())) {
      track('entitlement_downgraded', { fromPlan: prev.entitlement.plan, toPlan: entitlement.plan });
    }
    return { entitlement };
  }),
```
Needs two new imports into this store file: `guardedNow` from `@/services/serverClock` (already imported by `purchases.ts`, not yet by `useEntitlement.ts`) and `track` from `@/services/analytics`. Confirm no circular import (`analytics.ts` imports `useStore`, not `useEntitlement.ts` — RESEARCH.md already checked this). **Do not** hook this in `loadFor` — Pitfall 3 explains why (offline cold-start false positives).

---

### `ealch-v2/src/store/entitlement.logic.test.ts` / `entitlementClock.test.ts` (EDIT — extend)

**Analog:** `entitlementClock.test.ts` (full file, excerpted above) — same `node:test` + `node:assert` style, same "plain-English scenario name" test titles, same fixture-builder pattern (`const paid = (expiry) => ({...})`). Add a pure `wasDowngraded(prev: Entitlement, next: Entitlement, nowMs: number): boolean` extraction (or inline test the `isPremium` diff directly) so the transition logic is unit-testable without mounting zustand.

---

### `ealch-v2/src/services/purchases.test.ts` (NEW — no existing analog)

See "No Analog Found" below — flagged explicitly by RESEARCH.md's Wave 0 Gaps as a file that "currently does not exist at all."

## Shared Patterns

### Fail-closed, service-role-only entitlement mirror reads (edge functions)
**Source:** `ealch-v2/supabase/functions/coach/index.ts` lines 209-223 (`hasUnlimitedCoach`)
**Apply to:** `start-exam-attempt/index.ts` (new `isEntitledExaminer`), `grade-exam/index.ts` (new attempt-validity read)
```typescript
try {
  const { data, error } = await serviceClient().from("entitlements").select("features, expiry").eq("user_id", uid).maybeSingle();
  if (error || !data) return false;
  // ... any error/missing row/missing feature => false, never true
} catch (_) { return false; }
```

### `system_config` cached read (TTL, never-throw, service-role)
**Source:** `ealch-v2/supabase/functions/coach/index.ts` lines 84-137 (`routing()`)
**Apply to:** `start-exam-attempt/index.ts` — reading `examGateOn`/`examFreePapers` the same way `routing()` reads `models.general`. This is the fix for RESEARCH.md's Pitfall 1 (a gate that checks only the entitlement mirror breaks the feature for 100% of current users).

### Deno edge-function boilerplate (CORS, callerUid, serviceClient, error shape)
**Source:** `ealch-v2/supabase/functions/coach/index.ts` (lines 36-68, 163-179, 358-364) and `ealch-v2/supabase/functions/grade-exam/index.ts` (lines 74-111, 342-347) — identical across both existing functions
**Apply to:** `start-exam-attempt/index.ts` (new function) and the edit to `grade-exam/index.ts`
- `createClient` from `"jsr:@supabase/supabase-js@2"` (not `npm:`)
- Inline `cors` object + `OPTIONS` short-circuit
- `serviceClient()` re-instantiated per call
- `callerUid(req)` duplicated verbatim (no shared-import refactor — house convention)
- Every response is `JSON.stringify(...)` with `{ ...cors, "Content-Type": "application/json" }`; errors always `{ error: "..." }`, never bare text

### Double-logging: `console.error` first, PostHog second (never PostHog-only)
**Source:** `ealch-v2/supabase/functions/grade-exam/index.ts` lines 314-340 (`logEvent`/`posthog`)
**Apply to:** `start-exam-attempt/index.ts`'s rejection path, and any new rejection branch added to `grade-exam/index.ts`
```typescript
function logEvent(event: string, props: Record<string, unknown>) {
  console.error(`[start-exam-attempt] ${event}`, JSON.stringify(props));
}
function posthog(event: string, props: Record<string, unknown>) {
  logEvent(event, props);
  const key = Deno.env.get("POSTHOG_API_KEY");
  if (!key) return;
  // ... fetch to PostHog capture endpoint, .catch(() => {})
}
```

### Pure "logic file" discipline (no React/Deno imports, `node --test`-able)
**Source:** `ealch-v2/src/utils/examGate.logic.ts`, `ealch-v2/src/store/entitlement.logic.ts`
**Apply to:** `examAttempt.logic.ts`, `examStartGate.logic.ts` — zero `react-native`/`expo`/`zustand`/Deno imports, a prose header comment explaining the WHY, and a paired `.test.ts` using `node:assert`/`node:test`.

### Direct-to-Postgres schema application (no `supabase/migrations/`)
**Source:** `ealch-admin/scripts/apply-tts-quota-schema.ts` (full file) + `ealch-v2/supabase/schema.sql` lines 275-345
**Apply to:** the new `exam_attempts` table + `ealch-admin/scripts/apply-exam-attempts-schema.ts`
- Append idempotent SQL under a new greppable marker comment in `schema.sql`
- A `pg.Pool` script that slices from the marker, executes, and verifies via `information_schema.tables`/`pg_proc`, throwing if the expected objects are missing

### Analytics: `AnalyticsEvent` union + fire-and-forget `track()`
**Source:** `ealch-v2/src/services/analytics.ts` lines 20-30, 74-77; call sites `ealch-v2/app/settings.tsx` lines 149, 152
**Apply to:** the new `entitlement_downgraded` event and its call site in `useEntitlement.ts`

### Client gate mirrors server gate (defense-in-depth, additive only)
**Source:** `ealch-v2/app/exam.tsx` lines 30, 56, 127-143 (`useFeature` + `examPaperAllowed`)
**Apply to:** `ealch-v2/app/exam-paper.tsx`'s `go()` — the client check must read the exact same four inputs as the server gate and must never be treated as authoritative (grading/attempt-creation always re-derives server-side).

## No Analog Found

| File | Role | Data Flow | Reason |
|---|---|---|---|
| `ealch-v2/src/services/purchases.test.ts` | test | request-response | No test file exists for `purchases.ts` today (confirmed by RESEARCH.md's Wave 0 Gaps). The Adapty SDK calls (`identify`, `restorePurchases`, `getProfile`) are not mockable without a test harness this repo doesn't have. Closest available pattern is `entitlementClock.test.ts`'s `node:test` conventions (imports, `strictEqual`/`ok`, scenario-named tests) applied to whatever pure/extractable pieces of `restorePurchases()`'s `{ok, premium, message}` result-shape logic can be isolated; the SDK-calling parts stay manual-only per D-01/D-02's own framing. Planner should scope this file narrowly (result-shape/branch logic only) rather than expect a full-coverage unit suite. |

## Metadata

**Analog search scope:** `ealch-v2/src/{utils,store,services}`, `ealch-v2/supabase/{functions,schema.sql}`, `ealch-v2/app/{exam.tsx,exam-paper.tsx,exam-section.tsx,settings.tsx}`, `ealch-admin/scripts/`
**Files read in full or by targeted range:** `coach/index.ts`, `grade-exam/index.ts`, `examGate.logic.ts`, `entitlement.logic.ts`, `useEntitlement.ts`, `analytics.ts`, `purchases.ts`, `apply-tts-quota-schema.ts`, `exam-paper.tsx`, `exam.tsx`, `examSection.logic.test.ts` (targeted), `entitlementClock.test.ts`, `schema.sql` (targeted ranges: 57-157, 155-245, 275-345)
**Pattern extraction date:** 2026-09-20
