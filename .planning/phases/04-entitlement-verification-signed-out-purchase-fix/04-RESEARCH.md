# Phase 4: Entitlement Verification & Signed-Out Purchase Fix - Research

**Researched:** 2026-09-20
**Domain:** Supabase Edge Functions (Deno) + Adapty (react-native-adapty) entitlement sync, exam-attempt authorization
**Confidence:** MEDIUM-HIGH (codebase read is exhaustive and HIGH confidence; the one external-vendor question — Adapty's `identify()` merge timing — is MEDIUM, doc-sourced, and still needs a live-device confirmation per D-02)

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**PAY-01 / signed-out-purchase-merge — verify, don't rebuild**
- **D-01:** Restore Purchases UI (PAY-01) is already built in both `app/settings.tsx` and `app/paywall.tsx` with correct distinct messaging. This phase's effort here is **verification and hardening**, not new UI: confirm restore actually works end-to-end on a real device against both surfaces.
- **D-02:** `syncIdentity()`'s post-`identify()` reconciliation is the one part of the signed-out-purchase-merge path that needs active verification — confirm it actually pulls the *merged* Adapty profile immediately after `identify()`, not a stale pre-merge one, per ROADMAP's own Pitfall Watch note. This is research/testing work, not a design decision — if it's found to NOT reconcile immediately, planning should treat fixing it as in-scope, not a new gray area to re-discuss.

**grade-exam entitlement gate (new build — the confirmed gap)**
- **D-03:** `grade-exam` (`ealch-v2/supabase/functions/grade-exam/index.ts`) currently has **zero** check on the `examiner` entitlement feature — only `callerUid()` for cost-limiter keying (line ~95, ~376). This phase adds a real gate.
- **D-04:** Trust source = the existing Postgres `entitlements` mirror (webhook-fed by `adapty-webhook/index.ts`, the same table `coach/index.ts`'s `hasUnlimitedCoach()` already reads at lines 202-223). **Not** a live real-time call to Adapty's server API. Accept webhook lag as a documented, known limitation — consistent with `coach`'s existing fail-closed stance, no new external dependency on the exam-start path.
- **D-05:** Authorization model: check entitlement at exam **START**, not at grade time. When an entitled user starts a premium exam, the server creates an authorized exam attempt (new construct — no existing "exam attempt" schema; the existing `attempts` table in `schema.sql:57` is lesson/drill attempts, a different concept, not to be reused/overloaded for this). Grading trusts that stored authorization rather than re-checking entitlement live at grade time.
- **D-06:** Grace window = the exam paper's own duration **+ a 60-minute buffer**, measured from attempt start. An attempt that began while entitled may complete and be graded within that window even if the subscription lapses mid-exam (cancellation, natural expiry, or a delayed downgrade webhook). New attempts are rejected once entitlement is no longer active — no grace period for starting a NEW exam, only for finishing one already in progress.
  - **RESEARCH CORRECTION (see Common Pitfalls #1):** CONTEXT.md cited the duration field as `overview.minutes` (`src/content/schema.ts`, integer 1-180). That field does not exist on `ExamPaper`/`ExamSection` — it is a **Lesson**-only field for the Den overview page. The real per-section duration is `ExamSection.timingS` (seconds); the whole-paper duration is `EXAM_FORMAT_FACTS[paper.format].totalS` (seconds, `src/content/examFormats.ts`). Planning must use one of these real fields, not `overview.minutes`.
- **D-07:** Client-side gate mirrors the server gate: block starting a premium exam client-side when the user isn't entitled (defense-in-depth, same posture as Phase 3's TTS guest-gate pattern, `03-CONTEXT.md`) rather than letting someone complete a whole exam only to have grading refuse it.

**Downgrade monitoring (new build, small)**
- **D-08:** Scope is **app-wide**: one general "entitlement downgraded" event fires wherever `useEntitlement` (or its callers) detects a premium→free transition — covering exams, coach, roleplay, and content gates uniformly, not just the exam-attempt-rejection path. Matches ROADMAP's Pitfall Watch wording ("any entitlement state flip... a loud, logged, monitored event"), which isn't exam-specific.

### Claude's Discretion
- Exact event name(s)/schema for the downgrade-monitoring event(s) — follow the existing `trackEvent`/`analytics.ts` `AnalyticsEvent` union pattern already used for `restore_started`/`restore_completed` in `settings.tsx`.
- Whether the new exam-attempt authorization is stored as a new Postgres table vs. a signed token passed from exam-start to grade-exam — an implementation choice, not a policy one; either must satisfy D-05/D-06's behavioral contract.
  - **RESEARCH RECOMMENDATION (see Standard Stack / Don't Hand-Roll):** a new Postgres table, not a signed token. See rationale below — this is now a well-evidenced recommendation, not an open toss-up.
- Fix `coach/index.ts`'s `hasUnlimitedCoach()` comment (line ~203), which still says "fed by the revenuecat-webhook fn" — should say `adapty-webhook` (the 2026-07-22 vendor swap updated the function itself but missed this comment). Do this now, as a small drive-by fix, per explicit user confirmation.

### Deferred Ideas (OUT OF SCOPE)
- **Free diagnostic/sample exam + "let everyone browse exam info" policy** — this is a paywall-*coverage* decision (which content is gated), which is explicitly Phase 5's job (PAY-02). Deferred there rather than decided here, per explicit user confirmation.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| PAY-01 | A user can restore a previous purchase from Settings/paywall and gets accurate feedback ("restored" vs "no purchases found") | `restorePurchases()` in `purchases.ts` already returns `{ok, premium, message}` distinctly; verified both call sites (`settings.tsx:146-154`, and `paywall.tsx`) wire distinct copy off `res.ok`/`res.premium`. Gap is verification (real-device restore test), not code — see Validation Architecture and Open Questions. |
| PAY-03 | Server-side/edge-function entitlement checks trust a verified, synced Postgres mirror, and a user who purchases while signed out keeps their entitlement after signing in elsewhere | `coach/index.ts hasUnlimitedCoach()` (lines 202-223) is the exact fail-closed Postgres-mirror pattern to mirror in `grade-exam`. `syncIdentity()` in `purchases.ts` (lines 108-122) is the signed-out-merge code path; researched against Adapty's documented `identify()` semantics (see Findings below) — directionally correct but not conclusively proven without a live-device test (D-02). |
</phase_requirements>

## Summary

This phase splits cleanly into three independent pieces of work, and the codebase read confirms CONTEXT.md's framing: most of PAY-01 is already built and just needs device verification, PAY-03's real gap is narrow (one edge function has zero entitlement check), and the "downgrade monitoring" ask is a small, well-precedented addition. Nothing here requires new infrastructure, a new vendor call, or a new dependency.

The one substantive correction this research makes to CONTEXT.md: **the exam-attempt grace-window duration field it names, `overview.minutes`, does not exist on exam papers** — it's a Lesson-only field. The real duration lives on `ExamSection.timingS` (per-section, seconds) or `EXAM_FORMAT_FACTS[format].totalS` (whole-paper, seconds). This matters because the client's actual exam UX is **section-based**, not paper-based: `app/exam-section.tsx` starts its own wall-clock per section (`startClock(section.timingS, Date.now())`) and grades tasks per-section on submit. The natural, lowest-friction unit for the new "authorized exam attempt" is therefore the **section attempt**, not the whole paper — this avoids inventing a second duration concept and reuses a field that is already in seconds.

The second substantive finding: the exam entitlement tier (`'examiner'` feature) ships **fully open** today — `system_config`'s (and the client default's) `examGateOn: false` means every paper is free to everyone, gated only by `examFreePapers` doing nothing because the gate itself is off. The existing client-side check, `examPaperAllowed()` (`src/utils/examGate.logic.ts`), already reads `gateOn`/`entitled`/`freePapers`/`paperNo` correctly and is the house pattern to mirror server-side. **If the new grade-exam/start-attempt server gate checks only the `entitlements` mirror's `'examiner'` feature and ignores `examGateOn`/`examFreePapers`, it will silently break the exam feature for every current user** the moment it ships, because nobody holds an `'examiner'` entitlement yet (the product hasn't launched) and the server would begin rejecting every attempt outright. The server gate must replicate the full `examPaperAllowed()` decision, not just the entitlement half of it. This is the single most load-bearing finding in this research.

For storage of the new "authorized exam attempt," the evidence strongly favors a new Postgres table over a signed token: the codebase has zero JWT/signing dependencies anywhere (`package.json`, all Deno function imports checked), while it has three precedents for exactly this shape of problem — `attempts` (client-generated-UUID, insert+select-only RLS), `coach_usage`/`tts_usage_*` (service-role-only, no client policies, atomic RPC bump), and `entitlements` (service-role-only mirror). A signed token would be a first-of-its-kind pattern requiring a new dependency and inventing verification logic that Postgres RLS already provides for free.

**Primary recommendation:** Do the PAY-01 work as a device-verification checklist (no new code unless D-02's test fails). Build PAY-03's `grade-exam` gate as a new `exam_attempts` Postgres table (schema.sql + a `apply-*.ts` direct-apply script, following `apply-tts-quota-schema.ts`'s exact template), written by a new small edge function (or a `start`-mode addition to an existing one) at section-start, read by `grade-exam` at submit time, with the gate logic mirroring `examPaperAllowed()` exactly (gate flag + free-paper allowance + entitlement + grace window). Add the downgrade event to `analytics.ts`'s `AnalyticsEvent` union and fire it from `useEntitlement.ts`'s `setEntitlement`.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Restore Purchases UI/feedback | Browser/Client (RN) | Adapty SDK (native) | Already built; `purchases.ts` + `settings.tsx`/`paywall.tsx` own this end-to-end, Adapty SDK is the vendor boundary |
| Signed-out-purchase → sign-in merge | Adapty SDK (native, cross-device authority) | Client (RN) reconciliation | Adapty is the runtime entitlement authority per this codebase's own documented invariant; the client's `syncIdentity()` only re-pulls and re-derives, never re-decides |
| Exam-start entitlement gate (server) | API/Backend (Supabase Edge Function) | Database (Postgres `entitlements` mirror, `system_config`) | Must be the trust boundary — client `isPremium`/`hasFeature` reads are advisory only, per D-04/D-07's own framing and the existing `coach` precedent |
| Exam-start entitlement gate (client) | Browser/Client (RN) | — | Additive UX only (defense-in-depth); never the actual authorization boundary |
| Authorized exam attempt storage | Database (Postgres, new table) | API/Backend (writer + reader) | Matches `attempts`/`coach_usage`/`entitlements` precedent; a stateful authorization record belongs in the same store as every other server-trusted fact in this app |
| Grading trust decision (grace window) | API/Backend (`grade-exam`) | Database (attempt row's `started_at`) | Grading reads the stored authorization, never re-checks Adapty/entitlements live — D-05's explicit contract |
| Downgrade-detection event | Browser/Client (RN, `useEntitlement.ts`) | Analytics (PostHog via `analytics.ts`) | The transition is only observable where entitlement is derived/read client-side; PostHog is the existing sink for every other funnel event in this codebase |
| Entitlements Postgres mirror (write) | Database (webhook, service-role) | — | `adapty-webhook/index.ts` is the sole writer today; this phase adds no new writer |

## Standard Stack

### Core (already installed — no new dependencies needed)
| Library | Version (verified in `package.json`) | Purpose | Why Standard (for this codebase) |
|---------|---------|---------|--------------|
| `react-native-adapty` | `^4.0.1` | Client-side purchase/entitlement SDK | Already the sole purchase vendor since the 2026-07-22 RevenueCat→Adapty swap; do not add a second vendor |
| `@supabase/supabase-js` | `^2.110.2` (client); `jsr:@supabase/supabase-js@2` (Deno edge functions) | Postgres client, edge function invocation | Already used identically by every existing edge function (`coach`, `grade-exam`, `tts`, `adapty-webhook`, `delete-account`) |
| `pg` (via `ealch-admin/scripts/*.ts`) | (see `ealch-admin/package.json`) | Direct-to-Postgres schema application | The established "migration" mechanism for this repo — see Architecture Patterns |

### Supporting
None needed. This phase adds zero new npm/Deno dependencies — every piece of new logic (grace-window math, gate mirroring, downgrade detection) is composable from existing pure-logic-file primitives (`entitlement.logic.ts`, `examClock.logic.ts` patterns).

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| New Postgres table for the authorized exam attempt | A signed token (JWT/HMAC) passed client→server→client→grade-exam | No JWT/signing library exists anywhere in this codebase today (verified: `package.json` has no `jose`/`jsonwebtoken`, no Deno function imports one). A token requires: (a) adding a new dependency, (b) inventing key-rotation/secret-storage conventions from scratch, (c) hand-rolling signature verification in Deno — exactly the kind of "don't hand-roll" security surface this codebase otherwise avoids (see `tts`'s and `coach`'s deliberate avoidance of anything but `auth.getUser()`-verified JWTs, which Supabase itself issues and verifies). A Postgres table gets RLS, atomic writes, and an audit trail for free, matching `attempts`'s own established shape. |
| A live Adapty server-side API call at grade time | The existing Postgres `entitlements` mirror | Explicitly decided against by D-04 — accept webhook lag, consistent with `coach`'s existing stance. Not re-litigated here. |
| Reusing the `attempts` table (add an `exam_attempts`-like row there) | A dedicated new table | D-05 explicitly forbids this ("not to be reused/overloaded") — `attempts` is a append-only *scored drill/lesson* log with a fixed `modality`/`verdict`/`correct` shape (schema.sql:57-67) that has nothing to do with authorization state (`started_at`, `expires_at`, `paper_id`, `section_skill`). Forcing the new concept into that shape would require nullable columns that mean nothing for existing rows — the same anti-pattern `resume_state`'s own comment warns against when comparing itself to `attempts`. |

**Installation:** None required — no new packages.

**Version verification:** `react-native-adapty@^4.0.1` and `@supabase/supabase-js@^2.110.2` are the versions already locked in this repo's `package.json`; this phase does not need to bump either. (Not independently re-verified against npm registry latest, since this phase makes no version-bump decision — the installed versions are what ships.)

## Architecture Patterns

### System Architecture Diagram

```
┌─────────────────────────── CLIENT (React Native / Expo) ───────────────────────────┐
│                                                                                       │
│  app/exam-paper.tsx  (go(skill) — the ACTUAL exam-start trigger)                    │
│        │                                                                             │
│        │ [NEW] client gate: hasFeature(e,'examiner',now) OR examPaperAllowed()      │
│        │        mirrors server gate (D-07) — additive, not authoritative            │
│        ▼                                                                             │
│  [NEW] call "start attempt" (edge fn or RPC-via-edge-fn) ──────────────┐            │
│        │  passes: paperId, format, paperNo, section skill              │            │
│        ▼                                                                │            │
│  router.push('/exam-section', {paperId, skill, mode})                  │            │
│        │                                                                 │            │
│        ▼                                                                 │            │
│  app/exam-section.tsx                                                   │            │
│    startClock(section.timingS, Date.now())   ← existing, unchanged     │            │
│    ...candidate answers...                                             │            │
│    submit() → examGrader.grade() per open task ─────────────┐          │            │
│                                                                │          │            │
│  useEntitlement.ts (setEntitlement/loadFor)                   │          │            │
│    [NEW] detect isPremium(prev) && !isPremium(next)           │          │            │
│    → track('entitlement_downgraded', {...})  (D-08)           │          │            │
│                                                                 │          │            │
└─────────────────────────────────────────────────────────────┼──────────┼────────────┘
                                                                  │          │
                          ┌───────────────────────────────────────┘          │
                          ▼                                                  ▼
┌──────────────────────────── SUPABASE EDGE FUNCTIONS (Deno) ─────────────────────────┐
│                                                                                       │
│  [NEW] start-exam-attempt (or grade-exam?action=start)                              │
│    1. callerUid(req)  ← existing pattern, verifies JWT via auth.getUser()           │
│    2. read system_config.config.{examGateOn, examFreePapers} ← existing routing()   │
│       pattern (coach/grade-exam already read this table)                            │
│    3. read entitlements WHERE user_id=uid ← existing hasUnlimitedCoach() pattern    │
│    4. decide: mirror examPaperAllowed() exactly (gateOn/entitled/freePapers/paperNo)│
│    5. INSERT INTO exam_attempts (started_at=now(), expires_at=now()+timing+60min)   │
│                                                                                       │
│  grade-exam/index.ts                                                                │
│    [NEW] before grading: SELECT exam_attempts WHERE ... AND expires_at > now()      │
│    if no valid attempt row → reject (never grade an unauthorized/expired attempt)   │
│    ...existing rubric/modelAnswer/provider-chain grading, unchanged...              │
│                                                                                       │
│  adapty-webhook/index.ts   (unchanged — sole writer of `entitlements`)              │
│                                                                                       │
└──────────────────────────────────────────────┬──────────────────────────────────────┘
                                                  │
                                                  ▼
┌────────────────────────────────── POSTGRES (Supabase) ──────────────────────────────┐
│  entitlements (existing, RLS: no policies, service-role only)                       │
│  system_config (existing, RLS: world-readable)                                      │
│  [NEW] exam_attempts (RLS: service-role only, or select-own for client UI feedback) │
└───────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────── ADAPTY (vendor, native SDK + dashboard) ─────────────────────┐
│  Anonymous profile (signed-out purchase) ──identify(uid)──► switches to/claims      │
│  the profile matching that customerUserId (D-02's subject — see Findings below)     │
└───────────────────────────────────────────────────────────────────────────────────────┘
```

### Recommended Project Structure (additions only)
```
ealch-v2/
├── src/
│   ├── utils/
│   │   └── examAttempt.logic.ts     # NEW — pure grace-window math (start + duration + 60min buffer),
│   │                                 #        node --test-able, no React/Deno imports (house discipline)
│   ├── services/
│   │   └── analytics.ts             # EDIT — add 'entitlement_downgraded' to AnalyticsEvent
│   └── store/
│       └── useEntitlement.ts        # EDIT — detect premium→free transition in setEntitlement
├── supabase/
│   ├── schema.sql                   # EDIT — append exam_attempts table + RLS (new marked section,
│   │                                 #        following the "── TTS usage quota (Phase 3, SEC-01) ──" style)
│   └── functions/
│       ├── grade-exam/index.ts      # EDIT — read+validate exam_attempts before grading
│       └── start-exam-attempt/      # NEW — or fold into grade-exam as an ?action=start branch;
│           └── index.ts             #        see Open Questions for the tradeoff
└── (ealch-admin repo)
    └── scripts/
        └── apply-exam-attempts-schema.ts  # NEW — direct-apply script, template = apply-tts-quota-schema.ts
```

### Pattern 1: Fail-closed Postgres-mirror entitlement check (mirror exactly)
**What:** Read `entitlements` with the service-role client; any error, missing row, or missing feature reads as "not exempt/not entitled" — never fail open.
**When to use:** The new exam-start gate, verbatim.
**Example:**
```typescript
// Source: ealch-v2/supabase/functions/coach/index.ts lines 209-223 (existing, to mirror)
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

### Pattern 2: Mirror the FULL client gate decision, not just entitlement
**What:** `examPaperAllowed()` is the authoritative *decision function* — gate flag, free-paper allowance, entitlement, paper number all together. The server gate must compute the same four-input decision, reading `gateOn`/`freePapers` from `system_config` (same table `routing()` already reads) rather than assuming "no entitlement = reject."
**When to use:** The new exam-start server gate.
**Example:**
```typescript
// Source: ealch-v2/src/utils/examGate.logic.ts (existing, client-side — port this exact
// decision shape server-side rather than inventing a narrower one)
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

### Pattern 3: Direct-to-Postgres schema application (this repo has no `supabase/migrations/`)
**What:** New tables/RPCs are appended to `ealch-v2/supabase/schema.sql` under a clearly marked comment section, then applied to the LIVE database with a one-off idempotent script in `ealch-admin/scripts/`.
**When to use:** Creating the new `exam_attempts` table.
**Example:**
```typescript
// Source: ealch-admin/scripts/apply-tts-quota-schema.ts (existing template, Phase 3)
const NEW_SQL_MARKER = '-- ── TTS usage quota (Phase 3, SEC-01) ──';
async function main() {
  const full = readFileSync(new URL('../../ealch-v2/supabase/schema.sql', import.meta.url), 'utf8');
  const idx = full.indexOf(NEW_SQL_MARKER);
  if (idx === -1) throw new Error(`marker not found — did the schema.sql task land first?`);
  const newSql = full.slice(idx);
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    await c.query(newSql); // every statement must be `create table if not exists` / idempotent
    // ...then verify tables/functions exist, throw if not...
  } finally { c.release(); await pool.end(); }
}
```

### Pattern 4: Cross-file "source-text assertion" contract tests
**What:** This codebase enforces client↔edge-function contracts by reading the sibling file's source as a string inside a `node --test` test and asserting on its content (regex/`.includes`) — not just testing each file's exported functions in isolation. This is how it catches "the client sends a field the edge function's type doesn't declare" class bugs without an integration test harness.
**When to use:** Verifying `grade-exam/index.ts` actually rejects an ungated/expired attempt, and that `exam-paper.tsx`/`exam-section.tsx` actually calls the new client gate before navigating.
**Example:**
```typescript
// Source: ealch-v2/src/store/examSection.logic.test.ts lines 358-368 (existing pattern to replicate)
test('the grader is forbidden from turning pacing into pronunciation', () => {
  const fn = readFileSync(resolve(srcDir, '../supabase/functions/grade-exam/index.ts'), 'utf8');
  ok(fn.includes('NOT heard by anyone'), 'the block must say nothing listened');
  ok(/fluency criterion ONLY/.test(fn), 'it may inform one criterion and no others');
});
```

### Anti-Patterns to Avoid
- **Checking only `entitlements.features.includes('examiner')` server-side, ignoring `examGateOn`/`examFreePapers`:** breaks the feature for 100% of current users on ship day (see Summary and Pitfall 1). This is the single highest-risk implementation mistake available in this phase.
- **Re-deriving the grace window from `overview.minutes`:** that field doesn't exist on `ExamPaper`. Use `ExamSection.timingS` or `EXAM_FORMAT_FACTS[format].totalS`.
- **Granting a client-supplied "I am entitled" flag any authority in `grade-exam`:** matches D-04/D-07's own framing — the client check is UX-only.
- **Reusing `attempts` table for exam-attempt authorization:** explicitly forbidden by D-05 — different shape, different lifecycle (mutable `expires_at` vs. append-only).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Exam-attempt authorization token | A custom-signed JWT/HMAC token minted client-observable or server-only | A Postgres row with RLS + service-role gate | Zero signing libraries exist in this codebase; a hand-rolled signature scheme is new attack surface with no established secret-rotation story, versus a database row that Postgres already secures |
| Entitlement verification against the app store | Custom App Store/Play Store receipt parsing | Adapty (already the vendor) | Explicitly out of scope per `.planning/REQUIREMENTS.md`'s "Out of Scope" table: "Custom receipt-validation / entitlement backend... Adapty already exists to remove exactly this class of work" |
| Downgrade-event delivery | A new analytics pipeline/queue | `analytics.ts`'s existing `track()` fire-and-forget PostHog capture | Already the sole analytics sink in this codebase; adding a second one for one event class is unjustified complexity |
| Race-safe quota/attempt counters | Read-then-write attempt-count logic in application code | A single atomic SQL statement (the `coach_bump`/`tts_bump` `on conflict ... do update` pattern) | `coach_bump`'s own comment explicitly documents why: two concurrent requests reading "9" and both writing "10" is a TOCTOU race a single statement closes |

**Key insight:** every piece of new infrastructure this phase needs already has a near-identical, working precedent somewhere in this same repo (`coach_usage`/`tts_usage_*` for atomic server-trusted state, `hasUnlimitedCoach` for fail-closed entitlement reads, `apply-tts-quota-schema.ts` for schema application, `examGate.logic.ts` for the gate decision shape). The work here is composition and mirroring, not invention.

## Findings: The Exam-Start Client Flow (located, per your request #1)

The actual "start an exam" trigger is `go(skill)` in `ealch-v2/app/exam-paper.tsx` (line 83-84):
```typescript
const go = (skill: ExamSkill) =>
  router.push({ pathname: '/exam-section', params: { paperId, skill, mode } });
```
This is called from a per-épreuve "start/resume" button on the paper screen. `mode` is chosen on this same screen (`'exam' | 'practice'`, a local `useState`, not persisted) immediately before this call. `app/exam-section.tsx` then starts its own wall-clock on mount (`useEffect` at line 105-107: `startClock(section.timingS, Date.now())`) and is where all task-answering and, on submit, all `examGrader.grade()` calls happen (line 202).

**Two attachment points, and they are different questions:**
1. **D-07's client-side gate** (block starting a premium exam when not entitled) attaches at `go()` in `exam-paper.tsx`, before the `router.push`. `examPaperAllowed()` is already available and used one screen up (`app/exam.tsx`) to lock/unlock the *paper row itself* — but `exam-paper.tsx` (once a paper is opened) does not currently re-check it per-section. Confirm during planning whether the paper-level lock in `exam.tsx` is considered sufficient, or whether `exam-paper.tsx`'s `go()` needs its own check too (defense against a user who had a valid deep link into an already-open paper screen).
2. **The new server "authorized exam attempt" creation** (D-05) most naturally also attaches at `go()` — call the new start-attempt endpoint there, await its result, and only navigate on success (mirroring the existing `preflightClips` audio-check pattern already in this same file, which does an async check before navigating — see `exam-paper.tsx` lines 61-65, 86+).

**Open question this raises (see Open Questions):** should the attempt be scoped to the whole **paper** (one authorization covers all four épreuves) or to each **section** individually (one authorization per skill, since each has its own independent clock and can be resumed separately, per the file's own header comment: "the RESUME point... each épreuve keeping its own clock")? The section-scoped model fits the existing UX better (a candidate doing CO today and PE tomorrow has two genuinely separate "starts") and reuses `section.timingS` directly with no unit conversion.

## Findings: `syncIdentity()` Verification (D-02, per your request #3)

The code, read in full (`ealch-v2/src/services/purchases.ts` lines 108-122):
```typescript
async function syncIdentity(userId: string | null): Promise<void> {
  await useEntitlement.getState().loadFor(userId);   // cache-first, offline-honest
  if (!configured) return;
  const A = loadModule()!;
  try {
    if (userId) await A.identify(userId);
    else await A.logout();
    await apply((await A.getProfile()) as ProfileLike);   // <- the reconciliation D-02 asks about
  } catch {
    // Identity sync failing must not strand the UI
  }
}
```
The call ordering — `await identify(userId)` fully resolving *before* `await getProfile()` is issued — is structurally correct per Adapty's own documented React Native SDK semantics: `identify()` is a network operation, and when the given `customerUserId` already has an existing Adapty profile, "the SDK will automatically switch to work with the new user" [CITED: adapty.io/docs/react-native-identifying-users]. Because `identify()` is awaited before `getProfile()` fires, and `getProfile()` is separately documented to "always try to query the API" for "the most up-to-date result" rather than serving a stale cache [CITED: adapty.io search summary of react-native-listen-subscription-changes / user docs], the code should receive the post-switch profile, not a pre-merge one.

**What the docs do NOT explicitly state** [ASSUMED / gap]: an exact latency guarantee that the server-side profile switch is 100% complete and queryable at the moment `identify()`'s promise resolves (vs. resolving on request-acceptance with switch completion happening asynchronously server-side, which would create exactly the stale-read race ROADMAP's Pitfall Watch is worried about). No official doc page or SDK changelog found addressing this specific ordering guarantee. One tangentially related GitHub issue (`adaptyteam/AdaptySDK-React-Native#108`, closed without resolution) reports a stale-purchase-record artifact after `identify()` when switching iOS sandbox accounts — plausibly a StoreKit sandbox-receipt-cache quirk rather than an Adapty server bug, but it is independent evidence that `identify()`'s effective freshness has been question-marked by at least one other integrator [CITED: github.com/adaptyteam/AdaptySDK-React-Native/issues/108, LOW confidence, inconclusive].

**Net assessment:** the code is *not* an obvious bug — it already does what D-02 hopes it does (await-then-refetch, correctly ordered). But this is a case where documentation cannot substitute for the live-device test D-02 asks for. **Recommendation:** treat D-02 as "verify via device test, do not assume a code fix is needed" — the fix, if any is needed, would most likely be adding a short retry/re-fetch (e.g., a second `getProfile()` after a brief delay, or subscribing to `onLatestProfileLoad` — already wired at `initPurchases()` line 79 — as a fallback confirmation) rather than a structural rewrite.

**Test scenario to run** (same-device, since that's the higher-value/most-common case per PAY-03's own wording "signed in elsewhere" implying both same- and cross-device):
1. Fresh anonymous install → purchase Première while signed out.
2. Sign in (triggers `syncIdentity(uid)`).
3. Immediately (no foreground/background cycle) check `useIsPremium()` reflects `true` — if it reads `false` and only becomes `true` after the next `refreshEntitlement()` foreground call, D-02's fix is needed.
4. Repeat cross-device: purchase on device A signed out, sign in with the same account on device B, confirm the SAME real-time check.

## Findings: `useEntitlement.ts` Structure (D-08 attachment point, per your request #4)

Full file read (`ealch-v2/src/store/useEntitlement.ts`). The store is a plain zustand store with exactly one writer path:
```typescript
type EntitlementState = {
  entitlement: Entitlement;
  hydrated: boolean;
  setEntitlement: (e: Entitlement) => void;   // <- called by purchases.ts's apply()
  loadFor: (userId: string | null) => Promise<void>;  // <- called on boot/sign-in/sign-out
};
```
`setEntitlement` is the **only** function that ever writes a *live, Adapty-derived* entitlement (called exclusively from `purchases.ts`'s `apply()`); `loadFor` writes a *cached* entitlement (called on boot and identity change, before `apply()` has a chance to reconcile). **The downgrade transition must be detected in `setEntitlement`, not `loadFor`** — `loadFor` reading a stale cached "free" entitlement for a user who is actually still premium (offline reconciliation not yet run) is exactly success-criterion-3's protected case, and firing a downgrade event there would produce false positives on every offline cold start.

**Concrete attachment:**
```typescript
// setEntitlement needs access to the PREVIOUS entitlement to detect the transition;
// zustand's `set` callback form gives this without changing the store's public shape:
setEntitlement: (entitlement) =>
  set((prev) => {
    if (isPremium(prev.entitlement, guardedNow()) && !isPremium(entitlement, guardedNow())) {
      track('entitlement_downgraded', { fromPlan: prev.entitlement.plan, toPlan: entitlement.plan });
    }
    return { entitlement };
  }),
```
This needs `guardedNow()` (already imported in `purchases.ts`, not currently in `useEntitlement.ts` — a new import) and `track` from `analytics.ts` (a new import into a store file — check this doesn't create a circular import; `analytics.ts` imports `useStore`, not `useEntitlement`, so this should be safe, but confirm during planning). Per-feature downgrades (e.g., losing `coach.unlimited` specifically while still `isPremium` some other way) are out of scope per D-08's wording ("premium→free transition"), unless discuss-phase wants finer granularity — flagged as an Open Question.

## Findings: Supabase Migration Conventions (per your request #5)

**There is no `supabase/migrations/` directory in this repo.** Confirmed by directory listing: `ealch-v2/supabase/` contains only `functions/`, `schema.sql`, `seed.sql`, `SETUP.md`, and `.temp/` (CLI link metadata). `ealch-v2/supabase/schema.sql`'s own header states this is deliberate: "This project has no `supabase/migrations/` directory... `schema.sql` plus a direct apply against `DATABASE_URL` IS this project's migration mechanism" [VERIFIED: `apply-tts-quota-schema.ts` comment, and confirmed by directory listing].

**The convention, exactly as used in Phase 3 (SEC-01):**
1. Append new SQL to `ealch-v2/supabase/schema.sql` under a clearly marked, greppable comment (e.g., `-- ── TTS usage quota (Phase 3, SEC-01) ──`), every statement written as idempotent (`create table if not exists`, `create or replace function`, `on conflict do nothing/update`).
2. Write a one-off script in `ealch-admin/scripts/` (this repo's sibling admin package, not `ealch-v2` itself) that: reads `schema.sql`, slices out everything from the marker onward, executes it against `DATABASE_URL` via `pg.Pool`, then verifies (queries `information_schema.tables`/`pg_proc`) and throws if the expected objects are missing.
3. Run that script once by hand against the live project (`ogbothupjcivwruesgsu`).
4. If `system_config` needs new keys merged onto the already-seeded live row, do that with an explicit `update ... set config = config || $1::jsonb` (NOT relying on the `insert ... on conflict do nothing` in `schema.sql`, which never re-runs against an existing row) — see `apply-tts-quota-schema.ts` lines 29-41 for the exact pattern, needed here only if the new gate wants an `examStartGraceMinutes`-style tunable (optional — D-06 already fixes this at 60 minutes, so likely unnecessary, but flag as an option).

This phase's new `exam_attempts` table should follow this exact recipe: new `apply-exam-attempts-schema.ts` in `ealch-admin/scripts/`, modeled directly on `apply-tts-quota-schema.ts`.

## Findings: Deno Edge Function Conventions (per your request #6)

Read in full: `coach/index.ts`, `grade-exam/index.ts`, `adapty-webhook/index.ts`. Consistent conventions across all three:
- **Imports:** `createClient` from `"jsr:@supabase/supabase-js@2"` (not `npm:`, except `adapty-webhook` which uses `"npm:@supabase/supabase-js@2"` — a pre-existing inconsistency in the codebase, not something this phase needs to fix or match specifically; new functions should use `jsr:` to match the majority, `coach`/`grade-exam`, since `grade-exam` is the file being edited).
- **CORS:** every function defines the same `cors` object inline (`Access-Control-Allow-Origin: *`, `Access-Control-Allow-Headers: authorization, x-client-info, apikey, content-type`) and handles `OPTIONS` first.
- **Service-role client:** a local `serviceClient()` function, re-instantiated per call (not module-cached), using `SUPABASE_URL`/`SUPABASE_SERVICE_ROLE_KEY` (auto-injected by the platform — no manual secret needed).
- **Caller identity:** `callerUid(req)` — verify the caller's own JWT via a throwaway anon-key client with the caller's bearer token forwarded, `auth.getUser()`, return `null` on any failure (never trust a client-asserted id). This exact function is duplicated verbatim in both `coach/index.ts` and `grade-exam/index.ts` — the new start-attempt logic should copy it the same way (no shared-import refactor attempted elsewhere in this codebase, so don't introduce one unprompted).
- **Response shape:** always `new Response(JSON.stringify(...), { status, headers: { ...cors, "Content-Type": "application/json" } })`; errors return a JSON body with an `error` string, never a bare string/HTML error page (except `adapty-webhook`'s early auth/method checks, which do return bare `"unauthorized"`/`"method not allowed"` text — that function is webhook-only, no CORS-sensitive browser caller, so its convention differs deliberately).
- **Logging/observability:** `posthog(event, props)` helper, a no-op when `POSTHOG_API_KEY` is unset; `grade-exam` additionally always logs to `console.error` first (`logEvent`) specifically because a silent 503 with zero server-side visibility was a real incident ("the first real request after deploy failed exactly that way, and the logs said only 'booted'" — `grade-exam/index.ts` lines 314-325). **The new gate's rejection path should follow this same double-logging convention** — a wave of exam-attempt rejections (e.g., from the Pitfall 1 misconfiguration below) needs to be visible in function logs even with no PostHog key configured.
- **Deploy:** `supabase functions deploy <name> --no-verify-jwt` — every function in this app disables the platform JWT gate and does its own `callerUid()` check instead, because every function must also serve unauthenticated/guest callers for some code path. If the new start-attempt function is guest-unreachable by design (only signed-in users can hold `'examiner'`), it should still deploy with `--no-verify-jwt` to match the house convention and do its own explicit "uid required" check inside, rather than relying on the platform gate (which would 401 with Supabase's own generic error, not this app's JSON error shape).

## Common Pitfalls

### Pitfall 1: Shipping a server gate that checks only `entitlements.features`, ignoring `examGateOn`
**What goes wrong:** Every current exam attempt (100% of users, since nobody holds `'examiner'` yet) gets rejected the moment this ships, because the feature-flag reason the exam is currently free (`examGateOn: false` in `system_config`) is invisible to a gate that only asks "does this uid have `'examiner'`?"
**Why it happens:** D-03/D-04's wording focuses on "the entitlement mirror" as the trust source, which is correct for the *entitlement* half of the decision but silent on the *rollout flag* half. It's an easy, natural-sounding gate to write that happens to be wrong for this specific app's current rollout state.
**How to avoid:** The server gate must read `system_config.config.{examGateOn, examFreePapers}` (same table, same read pattern as `routing()` in both `coach` and `grade-exam` already) and compute the exact same four-input decision as `examPaperAllowed()` (gateOn/entitled/freePapers/paperNo), not a subset of it.
**Warning signs:** A test or manual check that only asserts "unentitled uid → rejected" without also asserting "unentitled uid, `examGateOn=false` → still allowed" would miss this entirely — write both.

### Pitfall 2: Using `overview.minutes` for the grace window (CONTEXT.md's stated field, does not exist here)
**What goes wrong:** `overview` is `Lesson['overview']?.minutes` (`src/content/schema.ts`, validated at lines 3759-3768) — a Den-overview-page display field for *lessons*, unrelated to `ExamPaper`/`ExamSection`. A plan that codes against `paper.overview.minutes` will fail to compile (no such property on `ExamPaper`).
**Why it happens:** CONTEXT.md's discuss-phase session named this field from memory/inference without reading `schema.ts`'s actual `ExamPaper` type — a reasonable-sounding guess that didn't hold up under a direct read.
**How to avoid:** Use `ExamSection.timingS` (seconds, per-section — matches the section-scoped attempt model this research recommends) or, if a paper-scoped attempt is chosen instead, `EXAM_FORMAT_FACTS[paper.format].totalS` (seconds, whole-sitting, `src/content/examFormats.ts`).
**Warning signs:** A TypeScript compile error referencing `overview` on an `ExamPaper`-typed value is the earliest possible catch — should never reach a device test.

### Pitfall 3: Detecting "downgrade" in `loadFor` instead of `setEntitlement`
**What goes wrong:** `loadFor` writes whatever is in the *local cache*, which on an offline cold start for an already-premium user briefly reflects whatever was last cached (which is fine) — but if a future refactor calls `loadFor` speculatively before a cache is confirmed fresh, or if `loadFor(null)` is ever called transiently during a sign-out/sign-in swap, a downgrade event could fire for a user who never actually lost access (they're mid-identity-swap, not actually downgraded).
**Why it happens:** Both functions ultimately call `set({ entitlement: ... })`; it's tempting to hook the detection at the zustand-store level generically rather than per-writer.
**How to avoid:** Hook specifically inside `setEntitlement` (the *live, Adapty-derived* write path only), per the Findings section above.
**Warning signs:** A downgrade event firing on every app cold start for a premium user (instead of only on an actual entitlement lapse) is the tell.

### Pitfall 4 (inherited from `.planning/research/PITFALLS.md` Pitfall 2, now mostly stale — reconfirm, don't rebuild)
**What it originally warned:** "existing paying user, first launch after this update, currently offline" being silently downgraded during an AsyncStorage→Supabase entitlement migration.
**Current status:** This pitfall predates the Adapty migration and the current cache-first `useEntitlementSync()` design (`loadFor` runs before any network touch — `purchases.ts` line 130) plus the clock-floor (`advancedFloor`/`effectiveNow`) mechanism that already defends exactly this scenario. **The architecture described in the original pitfall (AsyncStorage-only, no sync) no longer exists.** This does NOT mean the scenario is safe to skip testing — it means the code-level fix it called for is already built; what remains is the same device-test CONTEXT.md's Success Criterion 3 asks for ("existing paying user, first launch after update, offline, not downgraded or shown a paywall"). Treat as a **verification** item, matching D-01/D-02's framing, not a build item.

## Runtime State Inventory

Not applicable — this phase is new-feature-addition (a new table, a new gate, a new analytics event) plus verification, not a rename/refactor/migration of existing identifiers or data. No existing stored data, live service config, OS-registered state, secrets, or build artifacts change name or shape.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Adapty's `identify()` promise does not resolve until the server-side profile switch is fully complete and immediately queryable via `getProfile()` | Findings: `syncIdentity()` Verification | If wrong, D-02 needs a real code fix (retry/re-fetch or listener-based confirmation), not just a device-test sign-off. Directly testable per the scenario given — resolve before or during Phase 4 execution, not deferred. |
| A2 | The exam-attempt authorization should be scoped per-**section**, not per-**paper** | Findings: Exam-Start Client Flow / Architecture Patterns | If the user/planner intends paper-level authorization instead, the grace-window math and the DB row's identifying key (paperId+skill vs. just paperId) both change. Low risk either way since both are internally consistent — flagged as an Open Question rather than a silent choice. |
| A3 | The new gate should mirror `examGateOn`/`examFreePapers` from `system_config`, not just the `entitlements` mirror | Common Pitfalls #1 | This is the highest-confidence, most-evidenced finding in this research (directly follows from reading `config.ts`'s own comment: "the plumbing is live either way... locking the tier later is a remote-config flip") — treated as a strong recommendation, not a loose assumption, but flagged here because it revises D-03/D-04's literal wording. |
| A4 | Gating applies the same way regardless of `mode` (`'exam'` vs `'practice'`) | Findings: Exam-Start Client Flow | If practice-mode attempts on premium papers are intended to stay free/ungated (since they're already unscored, `T.examUnscored`), the gate needs a `mode` branch CONTEXT.md doesn't mention. Worth a 30-second confirmation with the user during planning/discuss rather than guessing. |

## Open Questions

1. **Section-scoped vs. paper-scoped exam attempt authorization?**
   - What we know: the client's actual UX is section-by-section (independent clocks, independent resume), and `ExamSection.timingS` is already in the right unit (seconds) with no paper-level duration field existing.
   - What's unclear: whether D-05's "authorized exam attempt" was intended to cover a whole sitting (so starting CO also pre-authorizes CE/PE/PO) or each épreuve independently.
   - Recommendation: default to section-scoped (simpler, reuses `timingS` directly, matches the file's own "four doors, not gated on each other" framing in `exam-paper.tsx`'s header comment) unless the planner/discuss-phase has a reason to prefer paper-scoped.

2. **New dedicated edge function (`start-exam-attempt`) vs. a new `action` branch inside `grade-exam`?**
   - What we know: every other concern in this codebase gets its own function (`coach`, `grade-exam`, `tts`, `delete-account`, `adapty-webhook`) — one function, one responsibility.
   - What's unclear: whether a phase this narrow (PAY-03 only) justifies a new deploy target, secret set, and `SETUP.md` entry versus folding it into `grade-exam` as a second request shape.
   - Recommendation: a new function, for consistency with the established one-function-one-concern convention and because "start" and "grade" have genuinely different callers/timing/failure modes (start is synchronous/blocking for navigation; grade is already a slow LLM round-trip) — but this is a reasonable place for the planner to weigh deploy-overhead against consistency.

3. **Does D-08's downgrade event need per-feature granularity, or is plan-level (`isPremium`) enough?**
   - What we know: D-08's wording is "premium→free transition," and `isPremium()` is the existing plan-level predicate.
   - What's unclear: whether losing just `'examiner'` (a distinct one-time product, not bundled into Première) while remaining otherwise premium should also fire something.
   - Recommendation: ship plan-level only for this phase (matches the literal wording and keeps the analytics event simple); note as a candidate v2 refinement if Phase 5's paywall-coverage work surfaces a need for finer-grained loss tracking.

4. **Does the client-side pre-navigation gate in `exam-paper.tsx`'s `go()` need to duplicate `examPaperAllowed()`, or is the paper-level lock in `app/exam.tsx` sufficient?**
   - What we know: `exam.tsx` already locks/hides the paper row before a user can navigate into `exam-paper.tsx` at all, when `examGateOn` is true.
   - What's unclear: whether a deep link or back-navigation could land a user on an already-open `exam-paper.tsx` for a paper they're no longer entitled to (e.g., subscription lapsed between opening the paper list and tapping "start"), and whether that's worth a second check per D-07's "defense in depth" framing.
   - Recommendation: add the check at `go()` too — it's cheap (a `useFeature('examiner')` read, already reactive) and directly matches D-07's stated posture ("block starting a premium exam client-side... rather than letting someone complete a whole exam only to have grading refuse it").

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Supabase project `ogbothupjcivwruesgsu` | All server-side work (schema apply, edge function deploy) | ✓ (per STATE.md Phase 02/03 notes: confirmed ACTIVE_HEALTHY as of this milestone) | — | — |
| `DATABASE_URL` env for direct schema apply | New `exam_attempts` table creation | Assumed ✓ (used successfully in Phase 3 per `apply-tts-quota-schema.ts` and STATE.md) | — | — |
| Adapty dashboard access | Confirming `identify()`/merge behavior empirically, if device-test surfaces ambiguity | Not verified this session (no dashboard credentials fetched) | — | Rely on documented SDK behavior (Findings section) plus device-test observation of client-visible entitlement state |
| A real device (or two, for cross-device test) + a sandbox/test purchase account | D-01/D-02 verification (Success Criteria 1, 2) | Not verified this session — this is a human/execution-time dependency, not a research-time one | — | None — this is explicitly a "human verify" checkpoint, matching Phase 3's own device-test pattern (STATE.md: "human-verify device checkpoint") |
| `gsd-sdk` CLI | Workflow tooling only, not this phase's technical work | Per STATE.md Phase 3 note, was NOT installed last session (only older `gsd-tools.cjs`) | — | Direct execution without SDK query handlers, as Phase 3 did |

**Missing dependencies with no fallback:** None that block planning. The device-test dependencies are execution-time human checkpoints, not blockers to writing the plan.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Node's built-in `node:test` + `node:assert` (no Jest/Vitest in this repo) |
| Config file | None — plain `.test.ts` files run directly via `node --test` |
| Quick run command | `node --test src/utils/examAttempt.logic.test.ts` (new file) or `node --test src/store/entitlement.test.ts` (existing, for regression) |
| Full suite command | `npm test` (runs `node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"`, per `ealch-v2/package.json`) |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| PAY-01 | `restorePurchases()` returns distinct `{ok,premium}` for restored vs. not-found vs. unavailable | unit | `node --test src/services/purchases.test.ts` (new — currently no test file for `purchases.ts` at all) | ❌ Wave 0 |
| PAY-01 | Settings/paywall screens render distinct copy for each `restorePurchases()` outcome | manual-only (RN screen render, no component-test infra per TEST-02's still-pending status) | — | N/A — justified: `TEST-02` (Jest+RNTL infra) is a separate, still-pending phase-19 requirement; this phase should not block on building that infra |
| PAY-01/PAY-03 | Signed-out purchase → sign-in → entitlement follows, same device and cross-device | manual-only (requires a real store sandbox purchase + Adapty dashboard) | — | N/A — justified, matches Phase 3's own device-checkpoint precedent |
| PAY-03 | Server gate mirrors `examPaperAllowed()` exactly: `gateOn=false` → always allowed regardless of entitlement; `gateOn=true` + unentitled + `paperNo<=freePapers` → allowed; `gateOn=true` + unentitled + `paperNo>freePapers` → rejected; entitled → always allowed | unit (pure logic, port `examPaperAllowed`'s shape server-side or literally share the decision function's logic in a `.logic.ts` file both sides import-by-copy from) | `node --test src/utils/examStartGate.logic.test.ts` (new) | ❌ Wave 0 |
| PAY-03 | Grace window: attempt started at T, section `timingS` S, request at T+S+59min → graded; at T+S+61min → rejected | unit (pure logic) | `node --test src/utils/examAttempt.logic.test.ts` (new) | ❌ Wave 0 |
| PAY-03 | `grade-exam` rejects grading when no valid `exam_attempts` row exists / row is expired | unit (source-text assertion, matching house `examSection.logic.test.ts` pattern) + integration (requires live DB, likely manual/staging-verified) | `node --test supabase/functions/grade-exam/grade-exam-gate.test.ts` (new, source-text style) | ❌ Wave 0 |
| PAY-03 | `hasUnlimitedCoach()` comment says `adapty-webhook`, not `revenuecat-webhook` | trivial (source-text assertion or just the edit itself) | — | — |
| D-08 | Downgrade event fires exactly once on a premium→free `setEntitlement` transition, never on `loadFor` | unit (pure logic — extract the transition-detection as a testable pure function taking `(prevEntitlement, nextEntitlement, nowMs) => boolean`, matching this codebase's `entitlement.logic.ts` discipline) | `node --test src/store/entitlement.logic.test.ts` (extend existing, or new) | Partial — `entitlement.test.ts`/`entitlementClock.test.ts` exist and are the right home |

### Sampling Rate
- **Per task commit:** the specific new/edited `.logic.test.ts` file for that task.
- **Per wave merge:** `npm test` (full `node --test` suite across `src/**` and `supabase/functions/**`).
- **Phase gate:** full suite green, PLUS the manual device-verification checklist (PAY-01 restore, signed-out-purchase-merge same/cross-device, offline-first-launch-no-downgrade) signed off before `/gsd-verify-work`.

### Wave 0 Gaps
- [ ] `src/utils/examAttempt.logic.ts` + `.test.ts` — grace-window pure math (new file, new tests)
- [ ] `src/utils/examStartGate.logic.ts` (or equivalent) + `.test.ts` — the four-input decision (gateOn/entitled/freePapers/paperNo), shared shape between client `examGate.logic.ts` and the new server gate — consider whether the server (Deno) can literally import the same `.ts` file or must duplicate it (Deno functions currently duplicate rather than share code across the `ealch-v2/src` boundary — see `grade-exam`'s duplicated `SCORE_BANDS` comment explaining why: "Deno functions are a third deployment boundary this file does not attempt to bridge with a cross-package import")
- [ ] `src/services/purchases.test.ts` — currently does not exist at all; `restorePurchases()`/`syncIdentity()` have zero unit test coverage today (pure-logic pieces of them can be tested by extracting the decision shape; the Adapty SDK calls themselves are not mockable without a test harness this repo doesn't have — flag what's realistically testable vs. what stays manual-only)
- [ ] `supabase/functions/grade-exam/grade-exam-gate.test.ts` (or extend `examSection.logic.test.ts`) — source-text assertions that the new gate logic exists and is positioned before the grading call, matching the house pattern

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | Partial | Not new here — `callerUid()`'s `auth.getUser()` JWT verification is already the established, correct pattern this phase reuses unchanged |
| V3 Session Management | No | No session changes in this phase |
| V4 Access Control | **Yes — core of this phase** | Server-side, fail-closed entitlement + rollout-flag check on every exam-start and grade-exam call; client checks are explicitly advisory only (D-04/D-07); this is exactly ASVS V4's "enforce access control on the server/trusted layer" principle |
| V5 Input Validation | Yes (unchanged) | `grade-exam` already validates `rubric`/`modelAnswer`/`targetBand`/`candidateResponse` before use; the new attempt-check adds a `paperId`/`skill` (and possibly `paperNo`) validation surface — validate these are well-formed strings/small integers, since they'd be client-supplied inputs used in a DB lookup |
| V6 Cryptography | No (by this research's own recommendation) | No signed-token scheme recommended — see Standard Stack/Don't Hand-Roll. If the planner nonetheless chooses a token, this category becomes applicable and demands a vetted library, never a hand-rolled HMAC |

### Known Threat Patterns for this stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Client asserts its own entitlement/paperNo to get a free grade | Tampering / Elevation of Privilege | Server re-derives entitlement from the `entitlements` mirror keyed on the JWT-verified `callerUid()`, never trusts a client-sent "entitled" flag — already this codebase's stance for `coach`, extend identically |
| Replaying an old/expired `exam_attempts` row to grade after entitlement lapse well past the grace window | Tampering | `grade-exam` checks `expires_at > now()` server-side on every grading call, not just at attempt-creation time |
| Race between two concurrent "start attempt" calls for the same section double-granting or double-charging quota | Tampering / Denial of Service (self-inflicted data integrity) | Use an atomic single-statement insert/upsert (the `coach_bump` pattern) rather than read-then-write, and consider a unique constraint on `(user_id, paper_id, skill)` or similar to make a duplicate start idempotent rather than a race |
| A dropped/delayed `adapty-webhook` event leaving `entitlements` briefly stale in either direction | Repudiation-adjacent (not a classic STRIDE fit, but a documented known limitation) | Explicitly accepted per D-04 — document this as a known limitation in the shipped code/comments, exactly as `hasUnlimitedCoach()`'s own comment already does |

## Sources

### Primary (HIGH confidence — direct codebase reads)
- `ealch-v2/src/services/purchases.ts` (full file) — `restorePurchases`, `syncIdentity`, `apply`, `useEntitlementSync`
- `ealch-v2/src/store/entitlement.logic.ts` (full file) — feature vocabulary, clock-floor, `entitlementFromProfile`
- `ealch-v2/src/store/useEntitlement.ts` (full file) — the reactive store, `setEntitlement`/`loadFor`
- `ealch-v2/supabase/functions/coach/index.ts` (full file) — `hasUnlimitedCoach`, `callerUid`, conventions
- `ealch-v2/supabase/functions/grade-exam/index.ts` (full file) — the confirmed zero-entitlement-check gap, conventions
- `ealch-v2/supabase/functions/adapty-webhook/index.ts` (full file) — the mirror's sole writer, merge-across-access-levels logic
- `ealch-v2/supabase/schema.sql` (relevant sections, lines 1-290) — `attempts`/`coach_usage`/`entitlements`/`tts_usage_*` table shapes, RLS conventions, `coach_bump` RPC + its `revoke` grants
- `ealch-v2/src/content/schema.ts` (targeted reads) — `ExamPaper`/`ExamSection`/`ExamTask` types (`timingS`, no paper-level duration field), `overview.minutes`'s actual (Lesson-only) home
- `ealch-v2/src/content/examFormats.ts` — `EXAM_FORMAT_FACTS[format].totalS`, the real whole-paper duration source
- `ealch-v2/app/exam.tsx`, `ealch-v2/app/exam-paper.tsx`, `ealch-v2/app/exam-section.tsx` (full/near-full reads) — the actual client exam-start/answer/submit flow
- `ealch-v2/src/utils/examGate.logic.ts` (full file) — `examPaperAllowed()`, the decision shape to mirror server-side
- `ealch-v2/src/services/config.ts` (lines 1-115) — `RemoteConfig.examGateOn`/`examFreePapers`, confirming these live in `system_config` and are server-readable
- `ealch-v2/src/services/examGrader.ts` (full file) — the client's grading service, `GradeRequest` shape
- `ealch-v2/src/services/analytics.ts` (full file) — `AnalyticsEvent` union, `track()`
- `ealch-v2/src/store/examSection.logic.test.ts` (targeted reads) — the "source-text assertion" cross-file test convention
- `ealch-v2/src/store/entitlementClock.test.ts` — `node --test` conventions
- `ealch-admin/scripts/apply-tts-quota-schema.ts` (full file) — the direct-to-Postgres schema-apply template
- `ealch-v2/package.json`, dependency grep for `jose`/`jsonwebtoken`/`jwt` — confirmed absent
- `.planning/phases/04-entitlement-verification-signed-out-purchase-fix/04-CONTEXT.md`, `.planning/REQUIREMENTS.md`, `.planning/STATE.md`, `.planning/research/PITFALLS.md` (Pitfall 2), `.planning/config.json` (`nyquist_validation: true`)

### Secondary (MEDIUM confidence — official vendor docs, web-verified this session)
- [Identify Users | React Native SDK | Adapty Docs](https://adapty.io/docs/react-native-identifying-users) — `identify()` switches to an existing profile matching the given `customerUserId`; does not explicitly confirm zero-lag `getProfile()` freshness immediately after
- [Users & Access | React Native SDK | Adapty Docs](https://adapty.io/docs/react-native-user) / search-summarized `getProfile()` behavior — "always tries to query the API" for the most current result

### Tertiary (LOW confidence — flagged for the record, not relied on for any decision)
- [`adaptyteam/AdaptySDK-React-Native` issue #108](https://github.com/adaptyteam/AdaptySDK-React-Native/issues/108) — closed without resolution, plausibly a StoreKit sandbox artifact rather than an Adapty bug; noted only as a reason to prefer a live-device test over documentation alone for D-02

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new dependencies, every version already pinned and in production use in this repo
- Architecture: HIGH — every pattern recommended has a working, read-in-full precedent in this exact codebase
- Pitfalls: HIGH for Pitfalls 1-3 (derived directly from reading `config.ts`/`schema.ts`/`useEntitlement.ts`), MEDIUM for Pitfall 4 (correctly identifies the old pitfall doc as superseded, but "superseded" is itself an inference from reading current code against old doc, not a changelog)
- The one MEDIUM-confidence, vendor-dependent claim (Adapty `identify()`→`getProfile()` freshness, A1) is explicitly flagged and routed to a human device test rather than asserted as fact

**Research date:** 2026-09-20
**Valid until:** ~30 days for the codebase-read portions (stable, human-controlled repo); the Adapty vendor-behavior portion should be treated as valid only until the D-02 device test is actually run — that test result supersedes this research's A1 assumption immediately
