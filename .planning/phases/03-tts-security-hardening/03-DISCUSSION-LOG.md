# Phase 3: TTS Security Hardening - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-09-20
**Phase:** 3-tts-security-hardening
**Areas discussed:** Pre-auth/guest usage, Per-user rate-limit ceiling, Admin/authoring usage, Retire vs. harden

---

## Area selection

All four presented gray areas were selected in one pass, with the user answering all of them at once via free text rather than one at a time:

| Option presented | Description | Selected |
|---|---|---|
| Pre-auth / guest TTS usage | Does onboarding/placement trigger remote TTS before sign-in? | ✓ |
| Per-user rate-limit ceiling | What daily character/request cap? | ✓ |
| Admin/authoring TTS usage | Does ealch-admin call the same public function? | ✓ |
| Retire vs. harden the endpoint | Keep hardening vs. remove the remote path entirely | ✓ |

**User's full initial answer (verbatim, lightly reformatted):**
> Pre-auth: Do not expose unrestricted live ElevenLabs synthesis. Guests should get device TTS and/or cached, pre-generated premium samples. If hearing custom premium speech is essential to activation, allow one short live preview of approximately 300–500 characters, protected by IP/device limits, bot controls, and a global spend ceiling. Preferably pre-recorded so that the TTS is not expended.
> Signed-in users: Keep remote TTS, but meter primarily by characters. As an initial conservative limit, use 2,000 characters/day, 25,000 characters/month, 30 requests/day, a three-request-per-minute burst limit, and 2,500 characters per request. These should be configuration values and adjusted using observed p50/p95 legitimate usage — limit for premium users. Free users are limited to a max of 2500 characters.
> Admins: Preserve the authoring/batch workflow through a verified server-side admin role or separate batch job. Give it a distinct quota and queue rather than an unlimited bypass. Use a restricted service credential, not an API key exposed to the browser or embedded in the client. Explore more on this.
> Endpoint: Harden and retain it for now. Keep the ElevenLabs key server-side; add input limits, authorization, character-weighted quotas, caching, concurrency control, spend alerts, audit logging, and automatic device-TTS fallback on quota exhaustion or provider failure.
> Before implementation, verify whether onboarding currently calls remote TTS and identify every admin script or authoring path that invokes the endpoint. The PITFALLS.md assertion should be validated against the actual call graph.
> Instrument the onboarding funnel and A/B test guest device/cached TTS versus one limited live premium preview. Evaluate activation, signup conversion, retention, TTS engagement, and cost per activated user.

---

## Follow-up 1: Free-tier quota ambiguity

The initial answer's "limit for premium users. Free users are limited to a max of 2500 characters" was ambiguous — same per-request cap as premium, a total daily cap, or something else.

| Option | Description | Selected |
|--------|-------------|----------|
| Half of premium | 1,000/day · 12,500/month · 15 req/day · same burst/request caps | |
| One-shot preview only | A single lifetime/daily allowance (~2,500 chars total, once) | ✓ |
| I'll type exact numbers | User specifies precise values directly | (selected first, then re-asked, resolved by "One-shot preview only") |

**User's choice:** One-shot preview only.
**Notes:** Free (signed-in, non-paying) users get a single 2,500-character allowance, not a recurring day/month budget — deliberately closer to "a taste of premium voice" than an ongoing feature. Captured as D-06.

---

## Follow-up 2: A/B test scope

| Option | Description | Selected |
|--------|-------------|----------|
| Defer — own future phase | Phase 3 ships auth/rate-limit/fallback only; funnel A/B test becomes a separate roadmap idea | ✓ |
| Build it into Phase 3 now | Expand this phase to include funnel instrumentation + A/B test | |

**User's choice:** Defer it — own future phase (recommended).
**Notes:** Flagged as scope creep relative to SEC-01's auth/rate-limit boundary; likely depends on Phase 9's analytics audit (QA-02) for funnel-level event tracking infrastructure.

---

## Admin/authoring usage — resolved during discussion, not asked back to user

The user asked to "explore more on this" for the admin path. A quick repo search (before finalizing CONTEXT.md) found `ealch-admin/scripts/render-audio.ts` calls the ElevenLabs API directly with its own `ELEVENLABS_API_KEY`, and no file under `ealch-admin` calls `functions.invoke` on the public `tts` edge function. This resolves the ambiguity without a further question: admin authoring is already a fully separate, already-isolated pipeline — captured as D-08.

---

## Claude's Discretion

- Exact free-tier reset policy (true one-time-ever vs. some slow reset) — user specified "once" without ruling out a future reset.
- Whether to bump the edge function's `MAX_CHARS` constant from 2400 to 2500 to match the user's stated per-request figure exactly.
- Guest global spend ceiling / bot-control mechanism (CAPTCHA, device attestation, fingerprinting) — implementation detail.
- Whether to add server-side response caching on top of the client's existing disk cache.
- Concurrency-control / rate-limit-state storage mechanism (Postgres table vs. Deno KV vs. other).

## Deferred Ideas

- Onboarding funnel A/B test (guest device/cached TTS vs. one limited live premium preview) — growth/analytics experiment, deferred to its own future phase, likely dependent on Phase 9's analytics audit.
