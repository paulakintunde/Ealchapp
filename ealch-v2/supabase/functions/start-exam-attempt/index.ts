// Ealch v2 — `start-exam-attempt` Edge Function.
// The server-side trust boundary for exam access (Phase 4, PAY-03, D-05).
//
// THE ONE RULE THAT MATTERS HERE: this function computes the WHOLE gate
// decision, not the entitlement half of it.
//
// The exam tier ships OPEN — system_config.config.examGateOn is false, and
// nobody holds the 'examiner' entitlement yet, because the product has not
// launched. A gate that asked only "does this uid hold 'examiner'?" would
// therefore refuse every exam attempt by every user the moment it deployed.
// So the decision here is the same four-input decision the client's
// src/utils/examGate.logic.ts makes — gateOn, entitled, freePapers, paperNo —
// duplicated below and held to the client's copy by
// src/utils/examGate.parity.test.ts.
//
// What the client sends: paperId, skill, mode. Nothing else is trusted.
//   * paperNo and the section's timingS are read from content_exam_papers,
//     because a client that could name its own paper number would name one
//     inside the free allowance, and one that could name its own duration
//     would name a very long one.
//   * entitlement is read from the entitlements mirror keyed on the JWT-
//     verified uid, never from a client-sent "entitled" flag.
//
// D-04: the entitlements mirror is the trust source, NOT a live Adapty API
// call. A dropped or delayed adapty-webhook event leaves this mirror briefly
// stale, and that is an accepted, documented limitation — the same stance
// coach/index.ts's hasUnlimitedCoach() already takes. No new external
// dependency sits on the exam-start path.
//
// Deploy:  supabase functions deploy start-exam-attempt --no-verify-jwt
// Secrets: none beyond the platform-injected SUPABASE_URL /
//          SUPABASE_SERVICE_ROLE_KEY / SUPABASE_ANON_KEY.
// --no-verify-jwt matches every other function in this app: the uid check is
// done here, explicitly, so a refusal returns this app's JSON error shape
// rather than Supabase's generic 401 page.

import { createClient } from "jsr:@supabase/supabase-js@2";

// ── DUPLICATED from ealch-v2/src/utils/examGate.logic.ts ─────────────────────
// Verbatim. Deno functions are a third deployment boundary this repo does not
// bridge with a cross-package import (see grade-exam's SCORE_BANDS comment).
// Unlike SCORE_BANDS, this copy IS held honest by a test:
// src/utils/examGate.parity.test.ts diffs this function's source text against
// the client's. If you edit one, edit both.

type GateDecision =
  /** Open it. */
  | { allowed: true }
  /** Blocked, with the reason the paywall should lead with. */
  | { allowed: false; reason: 'needs-exam-tier' };

function examPaperAllowed(input: {
  /** RemoteConfig.examGateOn. */
  gateOn: boolean;
  /** hasFeature(e, 'examiner'). */
  entitled: boolean;
  /** RemoteConfig.examFreePapers. */
  freePapers: number;
  /** This paper's number within its format, 1-based. */
  paperNo: number;
}): GateDecision {
  const { gateOn, entitled, freePapers, paperNo } = input;
  // The gate is off: everything is open, whatever else is true.
  if (!gateOn) return { allowed: true };
  // Paid for it.
  if (entitled) return { allowed: true };
  // Inside the free allowance. Papers are numbered from 1, so an allowance of
  // 1 opens paper 1 and nothing else.
  if (paperNo <= Math.max(0, Math.floor(freePapers))) return { allowed: true };
  return { allowed: false, reason: 'needs-exam-tier' };
}

// ── DUPLICATED from ealch-v2/src/utils/examAttempt.logic.ts ──────────────────
// Verbatim, same convention as above.

/** D-06's buffer, in seconds. Sixty minutes, fixed — deliberately NOT a
 *  system_config tunable: a window nobody can widen at runtime is one fewer
 *  thing an attacker or a misconfiguration can stretch. */
const ATTEMPT_GRACE_S = 3600;

/** Ceiling on a single section's clock, in seconds (6 hours). No real épreuve
 *  approaches this — the longest section in any shipped format is under two
 *  hours — so this only ever bounds a corrupt or absurd authored timingS. */
const MAX_TIMING_S = 21600;

/** A section clock coerced into [0, MAX_TIMING_S], integer seconds. A
 *  non-finite or negative value reads as 0, which makes the window the bare
 *  60-minute buffer rather than infinite. */
function clampTimingS(timingS: number): number {
  if (!Number.isFinite(timingS)) return timingS === Infinity ? MAX_TIMING_S : 0;
  return Math.min(Math.max(0, Math.floor(timingS)), MAX_TIMING_S);
}

function serviceClient() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
}

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

function logEvent(event: string, props: Record<string, unknown>) {
  console.error(`[start-exam-attempt] ${event}`, JSON.stringify(props));
}

function posthog(event: string, props: Record<string, unknown>) {
  logEvent(event, props);
  const key = Deno.env.get("POSTHOG_API_KEY");
  if (!key) return;
  const host = Deno.env.get("POSTHOG_HOST") ?? "https://us.i.posthog.com";
  fetch(`${host}/capture/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: key, event, distinct_id: "edge-start-exam-attempt", properties: props }),
  }).catch(() => {});
}

const CONFIG_TTL_MS = 60_000;
let cfgCache: { gateOn: boolean; freePapers: number; at: number } | null = null;

/** The rollout half of the gate decision, from the same system_config row
 *  coach's routing() reads.
 *
 *  Never throws. An unreachable config plane serves the SHIPPED defaults —
 *  gateOn false, freePapers 1, exactly the values in
 *  ealch-v2/src/services/config.ts's DEFAULTS — and does NOT cache that
 *  answer, so the next request re-reads. That default is deliberate and is
 *  NOT a fail-open on access: the gate flag is a rollout switch, and the app
 *  it must agree with falls back to the same open position on the same
 *  outage. A server that locked the exam tier during a config blip would
 *  refuse papers the client is simultaneously showing as free. The
 *  ENTITLEMENT half of the decision (below) fails CLOSED, which is where
 *  access actually lives. */
async function examConfig(): Promise<{ gateOn: boolean; freePapers: number }> {
  const now = Date.now();
  if (cfgCache && now - cfgCache.at < CONFIG_TTL_MS) return cfgCache;
  try {
    const { data, error } = await serviceClient()
      .from("system_config")
      .select("config")
      .eq("id", "active")
      .maybeSingle();
    if (!error && data) {
      const cfg = data.config as { examGateOn?: unknown; examFreePapers?: unknown } | null;
      const gateOn = typeof cfg?.examGateOn === "boolean" ? cfg.examGateOn : false;
      const freePapersRaw = cfg?.examFreePapers;
      const freePapers =
        typeof freePapersRaw === "number" && Number.isFinite(freePapersRaw) && freePapersRaw >= 0
          ? Math.floor(freePapersRaw)
          : 1;
      const resolved = { gateOn, freePapers, at: now };
      cfgCache = resolved;
      return resolved;
    }
  } catch (_) { /* fall through */ }
  return { gateOn: false, freePapers: 1 };
}

/** Phase 4: whether this auth uid holds the exam tier, per the entitlements
 *  mirror (fed by the adapty-webhook fn).
 *  FAIL-CLOSED: any error, missing table, missing row or missing feature
 *  reads as NOT entitled. A mirror that cannot answer is never permission. */
async function isEntitledExaminer(uid: string): Promise<boolean> {
  try {
    const { data, error } = await serviceClient()
      .from("entitlements")
      .select("features, expiry")
      .eq("user_id", uid)
      .maybeSingle();
    if (error || !data) return false;
    const features: string[] = Array.isArray(data.features) ? data.features : [];
    if (!features.includes("examiner")) return false;
    return !data.expiry || new Date(data.expiry).getTime() > Date.now();
  } catch (_) {
    return false;
  }
}

const SKILLS = ["CO", "CE", "PE", "PO"] as const;
const MODES = ["exam", "practice"] as const;
// 'paper.<format>.<variant>.<n>' — content_exam_papers.id's documented shape.
const PAPER_ID_RE = /^paper\.[a-z0-9_]+\.[a-z0-9_-]+\.\d{1,2}$/;
const isPaperId = (v: unknown): v is string =>
  typeof v === "string" && v.length <= 80 && PAPER_ID_RE.test(v);
const isSkill = (v: unknown): v is (typeof SKILLS)[number] =>
  typeof v === "string" && (SKILLS as readonly string[]).includes(v);
const isMode = (v: unknown): v is (typeof MODES)[number] =>
  typeof v === "string" && (MODES as readonly string[]).includes(v);

/** paperNo and this épreuve's clock, from the content tables. The client sends
 *  neither: a client-supplied paperNo would be chosen to sit inside
 *  examFreePapers, and a client-supplied timingS would be chosen to stretch the
 *  grace window. */
async function paperFacts(
  paperId: string,
  skill: string,
): Promise<{ paperNo: number; timingS: number; status: string } | null> {
  try {
    const { data, error } = await serviceClient()
      .from("content_exam_papers")
      .select("paper_no, sections, status")
      .eq("id", paperId)
      .maybeSingle();
    if (error || !data) return null;
    const sections: unknown = data.sections;
    if (!Array.isArray(sections)) return null;
    const section = sections.find(
      (s): s is { skill: string; timingS?: unknown } =>
        typeof s === "object" && s !== null && (s as { skill?: unknown }).skill === skill,
    );
    if (!section) return null;
    const timingS = typeof section.timingS === "number" && Number.isFinite(section.timingS) ? section.timingS : 0;
    return { paperNo: Number(data.paper_no), timingS, status: String(data.status ?? "") };
  } catch (_) {
    return null;
  }
}

Deno.serve(async (req) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  try {
    const body = (await req.json()) as { paperId?: unknown; skill?: unknown; mode?: unknown };

    // BEFORE validation, deliberately: an unauthenticated caller must not be
    // able to use this endpoint to probe paper ids via 400-vs-401 timing/shape.
    const uid = await callerUid(req);
    if (!uid) {
      posthog("exam_start_unauthenticated", {});
      return new Response(
        JSON.stringify({ error: "sign-in required to sit an exam", reason: "auth_required" }),
        { status: 401, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }

    if (!isPaperId(body.paperId)) {
      return new Response(
        JSON.stringify({ error: "invalid paperId", reason: "bad_paper_id" }),
        { status: 400, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }
    if (!isSkill(body.skill)) {
      return new Response(
        JSON.stringify({ error: "invalid skill", reason: "bad_skill" }),
        { status: 400, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }
    const mode = body.mode === undefined ? "exam" : body.mode;
    if (!isMode(mode)) {
      return new Response(
        JSON.stringify({ error: "invalid mode", reason: "bad_mode" }),
        { status: 400, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }
    const paperId = body.paperId;
    const skill = body.skill;

    const facts = await paperFacts(paperId, skill);
    if (!facts) {
      posthog("exam_start_unknown_paper", { paperId, skill });
      return new Response(
        JSON.stringify({ error: "unknown paper or épreuve", reason: "unknown_paper" }),
        { status: 404, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }
    if (facts.status !== "published") {
      // Draft/in-review papers are authored content the app may legitimately
      // be previewing. This is a visibility log, not a new gate.
      posthog("exam_start_unpublished_paper", { paperId, status: facts.status });
    }

    const { gateOn, freePapers } = await examConfig();
    const entitled = await isEntitledExaminer(uid);
    const decision = examPaperAllowed({ gateOn, entitled, freePapers, paperNo: facts.paperNo });

    if (!decision.allowed) {
      posthog("exam_start_refused", {
        uid,
        paperId,
        skill,
        paperNo: facts.paperNo,
        gateOn,
        entitled,
        freePapers,
        reason: decision.reason,
      });
      return new Response(
        JSON.stringify({ error: "exam tier required", reason: decision.reason }),
        { status: 403, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }

    const startedAt = new Date();
    const expiresAt = new Date(startedAt.getTime() + (clampTimingS(facts.timingS) + ATTEMPT_GRACE_S) * 1000);
    const { error: upsertErr } = await serviceClient()
      .from("exam_attempts")
      .upsert(
        {
          user_id: uid,
          paper_id: paperId,
          skill,
          started_at: startedAt.toISOString(),
          expires_at: expiresAt.toISOString(),
          gate_on: gateOn,
          entitled,
          paper_no: facts.paperNo,
          mode,
        },
        // One statement, so two concurrent starts (a double tap, a retry) settle
        // in the database rather than racing in this function — the same reasoning
        // coach_bump's comment gives. A restart legitimately resets the clock.
        { onConflict: "user_id,paper_id,skill" },
      );

    if (upsertErr) {
      posthog("exam_start_write_failed", { error: String(upsertErr.message ?? upsertErr), paperId, skill });
      // Do not fail open here — an attempt that was never recorded cannot be
      // graded later, so telling the client "go ahead" would hand the
      // candidate a sitting that is guaranteed to be refused at submit.
      return new Response(
        JSON.stringify({ error: "could not start attempt", reason: "write_failed" }),
        { status: 503, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }

    posthog("exam_start_authorized", { paperId, skill, paperNo: facts.paperNo, gateOn, entitled, mode });
    return new Response(
      JSON.stringify({ ok: true, expiresAt: expiresAt.toISOString(), gateOn, entitled }),
      { status: 200, headers: { ...cors, "Content-Type": "application/json" } },
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 400,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
