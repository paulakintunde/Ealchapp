// Ealch v2 - `report-problem` Edge Function (Phase 10, FEEDBACK-03).
// Receives a validated problem report from the app, identifies the caller (user or guest),
// and hands admission, insert and counting to public.problem_report_submit in ONE atomic call.
//
// Deploy:  supabase functions deploy report-problem --no-verify-jwt
// --no-verify-jwt stays so guests are servable; the in-body auth.getUser() is the identity
// boundary. user_id and contact_email come ONLY from that verified token, never from the body.
// D-35 accepted-only counting lives in problem_report_submit: a rejected, duplicate or 429
// attempt never increments a counter. If the RPC cannot run, this function fails closed (503).
// SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY are auto-injected.
//
// Logs carry only report_id, category and status. Never details, email or context.

import { createClient } from "jsr:@supabase/supabase-js@2";
import {
  bodyTooLarge,
  DEFAULT_LIMITS,
  ipKeyFrom,
  type LimitConfig,
  subjectKey,
  validateReport,
} from "./limits.ts";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });

function serviceClient() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}

/** Verified caller from the Authorization header, or null for a guest / anon-key-only caller. */
async function callerUser(req: Request): Promise<{ id: string; email: string | null } | null> {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return null;
  try {
    const caller = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      {
        global: { headers: { Authorization: authHeader } },
        auth: { persistSession: false, autoRefreshToken: false },
      },
    );
    const { data, error } = await caller.auth.getUser();
    if (error || !data?.user) return null;
    return { id: data.user.id, email: data.user.email ?? null };
  } catch {
    return null;
  }
}

const LIMITS_TTL_MS = 60_000;
let limitsCache: { limits: LimitConfig; at: number } | null = null;

async function reportLimits(): Promise<LimitConfig> {
  const now = Date.now();
  if (limitsCache && now - limitsCache.at < LIMITS_TTL_MS) return limitsCache.limits;
  let limits = DEFAULT_LIMITS;
  try {
    const { data } = await serviceClient()
      .from("system_config")
      .select("config")
      .eq("id", "active")
      .maybeSingle();
    const cfg = data?.config as Record<string, unknown> | null;
    const num = (v: unknown, fallback: number) =>
      typeof v === "number" && Number.isFinite(v) && v >= 0 ? v : fallback;
    limits = {
      dailyGuest: num(cfg?.reportDailyGuest, DEFAULT_LIMITS.dailyGuest),
      dailyUser: num(cfg?.reportDailyUser, DEFAULT_LIMITS.dailyUser),
      dailyGlobal: num(cfg?.reportDailyGlobal, DEFAULT_LIMITS.dailyGlobal),
      dailyIp: num(cfg?.reportDailyIp, DEFAULT_LIMITS.dailyIp),
    };
  } catch {
    // Config unreachable: the defaults still apply.
  }
  limitsCache = { limits, at: now };
  return limits;
}

// Retention fallback when pg_cron is absent: at most one purge per 24 h per instance.
let lastPurge = 0;
function maybePurge() {
  const now = Date.now();
  if (now - lastPurge < 24 * 60 * 60 * 1000) return;
  lastPurge = now;
  serviceClient().rpc("problem_reports_purge").then(
    () => {},
    () => {},
  );
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method-not-allowed" }, 405);

  const text = await req.text();
  if (bodyTooLarge(text)) return json({ error: "too-large" }, 413);

  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return json({ error: "invalid", field: "body" }, 400);
  }
  const verdict = validateReport(parsed);
  if (!verdict.ok) return json({ error: "invalid", field: verdict.field }, 400);
  const v = parsed as {
    report_id: string;
    install_id: string;
    category: string;
    contact: boolean;
  };

  const user = await callerUser(req);
  const limits = await reportLimits();

  const { data, error } = await serviceClient().rpc("problem_report_submit", {
    p_report: parsed,
    p_user: user?.id ?? null,
    p_contact_email: v.contact && user?.email ? user.email : null,
    p_subject: subjectKey(user?.id ?? null, v.install_id),
    p_ip: ipKeyFrom(req.headers.get("x-forwarded-for")),
    p_limit_subject: user ? limits.dailyUser : limits.dailyGuest,
    p_limit_global: limits.dailyGlobal,
    p_limit_ip: limits.dailyIp,
  });
  const row = Array.isArray(data) ? data[0] : data;
  if (error || !row) {
    console.error("report-problem unavailable", { report_id: v.report_id, status: 503 });
    return json({ error: "unavailable" }, 503);
  }

  maybePurge();

  if (row.outcome === "duplicate") {
    console.log("report-problem", { report_id: v.report_id, category: v.category, status: 200 });
    return json({ ok: true, duplicate: true }, 200);
  }
  if (row.outcome === "limited") {
    console.log("report-problem", { report_id: v.report_id, category: v.category, status: 429 });
    return json({ error: "rate-limited", reason: row.reason }, 429);
  }
  if (row.outcome === "inserted") {
    console.log("report-problem", { report_id: v.report_id, category: v.category, status: 201 });
    return json({ ok: true }, 201);
  }
  return json({ error: "unavailable" }, 503);
});
