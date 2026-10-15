// Problem-report wire contract (FEEDBACK-03). Pure: no imports.
// The server (supabase/functions/report-problem/limits.ts) enforces the same rules; both are
// pinned to supabase/functions/report-problem/contract.fixture.json.

export const REPORT_CATEGORIES = ['audio', 'grading', 'content', 'crash', 'payment', 'other'] as const;
export type ReportCategory = (typeof REPORT_CATEGORIES)[number];

export const DETAILS_MAX = 1000;
export const ERRORS_MAX = 10;
export const ERROR_SCOPE_MAX = 16;
export const ERROR_MESSAGE_MAX = 300;
export const ERROR_STACK_MAX = 1500;
export const BODY_MAX_BYTES = 24576;
export const REPORT_OUTBOX_KEY = 'ealch-problem-report-outbox';

export type ReportError = { scope: string; message: string; stack: string | null; at: number };
export type ReportContext = {
  app_version: string | null;
  runtime_version: string | null;
  update_id: string | null;
  platform: 'android' | 'ios' | 'web';
  os_version: string | null;
  device_model: string | null;
  font_scale: number | null;
  theme: 'light' | 'dark' | null;
  errors: ReportError[];
};
export type ReportPayload = {
  report_id: string;
  install_id: string;
  category: ReportCategory;
  details: string | null;
  contact: boolean;
  screen: string | null;
  lesson_id: string | null;
  item_id: string | null;
  client_created_at: string;
  context: ReportContext;
};

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const INSTALL_RE = /^[A-Za-z0-9_-]{8,64}$/;
const SCREEN_RE = /^[a-z0-9-]{1,40}$/;
const LESSON_RE = /^[A-Za-z0-9._#-]{1,80}$/;
const ITEM_RE = /^[A-Za-z0-9._#:-]{1,120}$/;
const ISO_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/;

const TOP_KEYS = ['report_id', 'install_id', 'category', 'details', 'contact', 'screen', 'lesson_id', 'item_id', 'client_created_at', 'context'];
const CONTEXT_KEYS = ['app_version', 'runtime_version', 'update_id', 'platform', 'os_version', 'device_model', 'font_scale', 'theme', 'errors'];
const ERROR_KEYS = ['scope', 'message', 'stack', 'at'];

export function isCategory(value: unknown): value is ReportCategory {
  return typeof value === 'string' && (REPORT_CATEGORIES as readonly string[]).includes(value);
}

const isObj = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);

// ---------- builder (named-key reads only, never a spread of the input) ----------

function pat(value: unknown, re: RegExp): string | null {
  return typeof value === 'string' && re.test(value) ? value : null;
}
function cap(value: unknown, max: number): string | null {
  return typeof value === 'string' && value.length > 0 ? value.slice(0, max) : null;
}

function buildErrors(raw: unknown): ReportError[] {
  if (!Array.isArray(raw)) return [];
  const out: ReportError[] = [];
  for (const entry of raw) {
    if (!isObj(entry)) continue;
    const at = entry.at;
    if (typeof entry.scope !== 'string' || typeof entry.message !== 'string' || typeof at !== 'number' || !Number.isFinite(at)) continue;
    out.push({
      scope: entry.scope.slice(0, ERROR_SCOPE_MAX),
      message: entry.message.slice(0, ERROR_MESSAGE_MAX),
      stack: typeof entry.stack === 'string' ? entry.stack.slice(0, ERROR_STACK_MAX) : null,
      at,
    });
  }
  return out.slice(-ERRORS_MAX);
}

function bytes(value: unknown): number {
  const json = JSON.stringify(value);
  let n = 0;
  for (let i = 0; i < json.length; i++) {
    const c = json.charCodeAt(i);
    if (c < 0x80) n += 1;
    else if (c < 0x800) n += 2;
    else if (c >= 0xd800 && c <= 0xdbff) { n += 4; i++; } else n += 3;
  }
  return n;
}

export function buildReportPayload(input: Record<string, unknown>): ReportPayload | null {
  if (!isObj(input)) return null;
  const report_id = pat(input.report_id, UUID_RE);
  const install_id = pat(input.install_id, INSTALL_RE);
  if (!report_id || !install_id || !isCategory(input.category)) return null;
  const c = isObj(input.context) ? input.context : {};
  const details = typeof input.details === 'string' ? input.details.trim().slice(0, DETAILS_MAX) : '';
  const scale = c.font_scale;
  const payload: ReportPayload = {
    report_id,
    install_id,
    category: input.category,
    details: details.length > 0 ? details : null,
    contact: input.contact === true,
    screen: pat(input.screen, SCREEN_RE),
    lesson_id: pat(input.lesson_id, LESSON_RE),
    item_id: pat(input.item_id, ITEM_RE),
    // A stored entry keeps its original creation time; a fresh report gets now.
    client_created_at: pat(input.client_created_at, ISO_RE) ?? new Date().toISOString(),
    context: {
      app_version: cap(c.app_version, 32),
      runtime_version: cap(c.runtime_version, 64),
      update_id: cap(c.update_id, 64),
      platform: c.platform === 'android' || c.platform === 'ios' ? c.platform : 'web',
      os_version: cap(c.os_version, 32),
      device_model: cap(c.device_model, 64),
      font_scale: typeof scale === 'number' && Number.isFinite(scale) && scale >= 0.5 && scale <= 4 ? scale : null,
      theme: c.theme === 'light' || c.theme === 'dark' ? c.theme : null,
      errors: buildErrors(c.errors),
    },
  };
  // Multi-byte text can push a legal payload past the byte cap: shed the oldest errors first.
  while (bytes(payload) > BODY_MAX_BYTES && payload.context.errors.length > 0) payload.context.errors.shift();
  return payload;
}

// ---------- strict validator (mirrors the server) ----------

export type WireVerdict = { ok: true } | { ok: false; field: string };
const bad = (field: string): WireVerdict => ({ ok: false, field });
const strOrNull = (v: unknown, max: number) => v === null || (typeof v === 'string' && v.length <= max);
const patOrNull = (v: unknown, re: RegExp) => v === null || (typeof v === 'string' && re.test(v));

export function validateWire(body: unknown): WireVerdict {
  if (!isObj(body)) return bad('body');
  for (const key of Object.keys(body)) if (!TOP_KEYS.includes(key)) return bad(key);
  if (typeof body.report_id !== 'string' || !UUID_RE.test(body.report_id)) return bad('report_id');
  if (typeof body.install_id !== 'string' || !INSTALL_RE.test(body.install_id)) return bad('install_id');
  if (!isCategory(body.category)) return bad('category');
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
  if (bytes(body) > BODY_MAX_BYTES) return bad('body');
  return { ok: true };
}

// ---------- classification ----------

export type SendStatus = number | 'offline';
export type SendClass = 'sent' | 'retry' | 'drop';
export type SendOutcome = 'sent' | 'queued-offline' | 'queued-limited' | 'queued-busy' | 'rejected';

export function classifySend(status: SendStatus): SendClass {
  if (status === 'offline' || status === 408 || status === 429) return 'retry';
  if (typeof status === 'number' && status >= 500) return 'retry';
  if (typeof status === 'number' && status >= 200 && status < 300) return 'sent';
  return 'drop';
}

export function outcomeFor(status: SendStatus): SendOutcome {
  if (status === 'offline') return 'queued-offline';
  if (status === 429) return 'queued-limited';
  const cls = classifySend(status);
  if (cls === 'sent') return 'sent';
  return cls === 'retry' ? 'queued-busy' : 'rejected';
}
