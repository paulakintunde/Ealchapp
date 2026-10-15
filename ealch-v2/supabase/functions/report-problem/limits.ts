// report-problem validator and limits (Phase 10, FEEDBACK-03). Pure: zero imports, runs on Node and Deno.
//
// validateReport mirrors the client's validateWire (src/services/problemReport.logic.ts); both are
// pinned to contract.fixture.json. decide() documents and tests the same `>=` comparisons that
// public.problem_report_submit enforces atomically; the SQL function is the authority.

export const BODY_MAX_BYTES = 24576;
export const CATEGORIES = ['audio', 'grading', 'content', 'crash', 'payment', 'other'] as const;
export type Tier = 'guest' | 'user';
export type LimitConfig = { dailyGuest: number; dailyUser: number; dailyGlobal: number; dailyIp: number };

// D-35.
export const DEFAULT_LIMITS: LimitConfig = { dailyGuest: 3, dailyUser: 10, dailyGlobal: 200, dailyIp: 20 };

const DETAILS_MAX = 1000;
const ERRORS_MAX = 10;
const ERROR_SCOPE_MAX = 16;
const ERROR_MESSAGE_MAX = 300;
const ERROR_STACK_MAX = 1500;

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const INSTALL_RE = /^[A-Za-z0-9_-]{8,64}$/;
const SCREEN_RE = /^[a-z0-9-]{1,40}$/;
const LESSON_RE = /^[A-Za-z0-9._#-]{1,80}$/;
const ITEM_RE = /^[A-Za-z0-9._#:-]{1,120}$/;
const ISO_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/;

const TOP_KEYS = ['report_id', 'install_id', 'category', 'details', 'contact', 'screen', 'lesson_id', 'item_id', 'client_created_at', 'context'];
const CONTEXT_KEYS = ['app_version', 'runtime_version', 'update_id', 'platform', 'os_version', 'device_model', 'font_scale', 'theme', 'errors'];
const ERROR_KEYS = ['scope', 'message', 'stack', 'at'];

const isObj = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);
const strOrNull = (v: unknown, max: number) => v === null || (typeof v === 'string' && v.length <= max);
const patOrNull = (v: unknown, re: RegExp) => v === null || (typeof v === 'string' && re.test(v));

function utf8Bytes(text: string): number {
  let n = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    if (c < 0x80) n += 1;
    else if (c < 0x800) n += 2;
    else if (c >= 0xd800 && c <= 0xdbff) { n += 4; i++; } else n += 3;
  }
  return n;
}

/** True when the raw request text is over the byte cap. */
export function bodyTooLarge(text: string): boolean {
  return utf8Bytes(text) > BODY_MAX_BYTES;
}

export type ReportVerdict = { ok: true } | { ok: false; field: string };
const bad = (field: string): ReportVerdict => ({ ok: false, field });

export function validateReport(body: unknown): ReportVerdict {
  if (!isObj(body)) return bad('body');
  for (const key of Object.keys(body)) if (!TOP_KEYS.includes(key)) return bad(key);
  if (typeof body.report_id !== 'string' || !UUID_RE.test(body.report_id)) return bad('report_id');
  if (typeof body.install_id !== 'string' || !INSTALL_RE.test(body.install_id)) return bad('install_id');
  if (typeof body.category !== 'string' || !(CATEGORIES as readonly string[]).includes(body.category)) return bad('category');
  if (!(body.details === null || (typeof body.details === 'string' && body.details.length >= 1 && body.details.length <= DETAILS_MAX))) return bad('details');
  if (typeof body.contact !== 'boolean') return bad('contact');
  if (!patOrNull(body.screen, SCREEN_RE)) return bad('screen');
  if (!patOrNull(body.lesson_id, LESSON_RE)) return bad('lesson_id');
  if (!patOrNull(body.item_id, ITEM_RE)) return bad('item_id');
  if (typeof body.client_created_at !== 'string' || !ISO_RE.test(body.client_created_at)) return bad('client_created_at');
  const c = body.context;
  if (!isObj(c)) return bad('context');
  for (const key of Object.keys(c)) if (!CONTEXT_KEYS.includes(key)) return bad(`context.${key}`);
  if (!strOrNull(c.app_version, 32)) return bad('context.app_version');
  if (!strOrNull(c.runtime_version, 64)) return bad('context.runtime_version');
  if (!strOrNull(c.update_id, 64)) return bad('context.update_id');
  if (c.platform !== 'android' && c.platform !== 'ios' && c.platform !== 'web') return bad('context.platform');
  if (!strOrNull(c.os_version, 32)) return bad('context.os_version');
  if (!strOrNull(c.device_model, 64)) return bad('context.device_model');
  if (!(c.font_scale === null || (typeof c.font_scale === 'number' && Number.isFinite(c.font_scale) && c.font_scale >= 0.5 && c.font_scale <= 4))) return bad('context.font_scale');
  if (!(c.theme === null || c.theme === 'light' || c.theme === 'dark')) return bad('context.theme');
  if (!Array.isArray(c.errors) || c.errors.length > ERRORS_MAX) return bad('context.errors');
  for (const e of c.errors) {
    if (!isObj(e) || Object.keys(e).length !== ERROR_KEYS.length || !ERROR_KEYS.every((k) => k in e)) return bad('context.errors');
    if (typeof e.scope !== 'string' || e.scope.length > ERROR_SCOPE_MAX) return bad('context.errors');
    if (typeof e.message !== 'string' || e.message.length > ERROR_MESSAGE_MAX) return bad('context.errors');
    if (!(e.stack === null || (typeof e.stack === 'string' && e.stack.length <= ERROR_STACK_MAX))) return bad('context.errors');
    if (typeof e.at !== 'number' || !Number.isFinite(e.at)) return bad('context.errors');
  }
  if (utf8Bytes(JSON.stringify(body)) > BODY_MAX_BYTES) return bad('body');
  return { ok: true };
}

/** 'u:<uid>' for a verified user, otherwise 'i:<install>' for a guest. */
export function subjectKey(uid: string | null, installId: string): string {
  return uid ? `u:${uid}` : `i:${installId}`;
}

const IPV4_RE = /^\d{1,3}(\.\d{1,3}){3}$/;
const IPV6_RE = /^[0-9a-fA-F:]{2,45}$/;

/** First hop of x-forwarded-for as 'ip:<addr>', or null when absent or not an address. */
export function ipKeyFrom(header: string | null | undefined): string | null {
  if (!header) return null;
  const first = header.split(',')[0].trim();
  if (IPV4_RE.test(first) || (first.includes(':') && IPV6_RE.test(first))) return `ip:${first}`;
  return null;
}

export type Decision = { allowed: true } | { allowed: false; reason: 'subject' | 'ip' | 'global' };

/** Counts are BEFORE this report: a limit of 3 means the 4th is refused. */
export function decide(
  tier: Tier,
  counts: { subject: number; global: number; ip: number | null },
  limits: LimitConfig = DEFAULT_LIMITS,
): Decision {
  const subjectLimit = tier === 'user' ? limits.dailyUser : limits.dailyGuest;
  if (counts.subject >= subjectLimit) return { allowed: false, reason: 'subject' };
  if (counts.ip !== null && counts.ip >= limits.dailyIp) return { allowed: false, reason: 'ip' };
  if (counts.global >= limits.dailyGlobal) return { allowed: false, reason: 'global' };
  return { allowed: true };
}
