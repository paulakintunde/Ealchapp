import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  buildReportPayload, classifySend, outcomeFor, validateWire, BODY_MAX_BYTES,
  claimReport, settleReport, dueReports, nextUtcDay, pruneReports, validReportOutbox, REPORT_OUTBOX_LIMIT, REPORT_OUTBOX_MAX_AGE_MS,
  type ReportPayload,
} from './problemReport.logic.ts';

const RID = '12345671-aaaa-4bbb-8ccc-1234567890a1';
const input = (over: Record<string, unknown> = {}) => ({ report_id: RID, install_id: 'install_abcdef12', category: 'other', ...over }) as never;

test('minimal input yields every key with nulls', () => {
  const p = buildReportPayload(input())!;
  strictEqual(p.contact, false);
  strictEqual(p.details, null);
  strictEqual(p.screen, null);
  strictEqual(p.lesson_id, null);
  strictEqual(p.item_id, null);
  deepStrictEqual(p.context.errors, []);
  strictEqual(p.context.platform, 'web');
  deepStrictEqual(validateWire(p), { ok: true });
});

test('bad category, report_id or install_id returns null', () => {
  strictEqual(buildReportPayload(input({ category: 'bogus' })), null);
  strictEqual(buildReportPayload(input({ category: undefined })), null);
  strictEqual(buildReportPayload(input({ report_id: 'x' })), null);
  strictEqual(buildReportPayload(input({ install_id: 'x' })), null);
});

test('email, answer, transcript never appear', () => {
  const p = buildReportPayload(input({ email: 'a@b.com', answer: 'secret', transcript: 'speech', context: { email: 'a@b.com', answer: 'x', transcript: 'y', app_version: '1' } }))!;
  const json = JSON.stringify(p);
  for (const bad of ['a@b.com', 'secret', 'speech', '"email"', '"answer"', '"transcript"']) strictEqual(json.includes(bad), false, bad);
});

test('details, screen, errors, scale, theme, platform are clamped', () => {
  strictEqual(buildReportPayload(input({ details: 'a'.repeat(1500) }))!.details!.length, 1000);
  strictEqual(buildReportPayload(input({ details: '   \n ' }))!.details, null);
  const s = buildReportPayload(input({ screen: 'Exam Report!', category: 'audio' }))!;
  strictEqual(s.screen, null);
  strictEqual(s.category, 'audio');
  const errors = Array.from({ length: 14 }, (_, i) => ({ scope: 'x', message: 'm'.repeat(900), stack: i === 13 ? undefined : 's'.repeat(4000), at: i }));
  const e = buildReportPayload(input({ context: { errors } }))!.context.errors;
  strictEqual(e.length, 10);
  strictEqual(e[0].at, 4);
  strictEqual(e[0].message.length, 300);
  strictEqual(e[0].stack!.length, 1500);
  strictEqual(e[9].stack, null);
  const c = buildReportPayload(input({ context: { font_scale: 9, theme: 'blue', platform: 'windows' } }))!.context;
  strictEqual(c.font_scale, null);
  strictEqual(c.theme, null);
  strictEqual(c.platform, 'web');
});

test('worst-case input stays within the body limit and validates', () => {
  const errors = Array.from({ length: 50 }, (_, i) => ({ scope: 's'.repeat(99), message: '\u00e9'.repeat(900), stack: '\u00e9'.repeat(4000), at: i }));
  const p = buildReportPayload(input({
    details: '\u00e9'.repeat(5000), screen: 'a'.repeat(99), lesson_id: 'a'.repeat(200), item_id: 'a'.repeat(300),
    context: { app_version: 'v'.repeat(99), runtime_version: 'v'.repeat(99), update_id: 'u'.repeat(99), os_version: 'o'.repeat(99), device_model: 'd'.repeat(99), errors },
  }))!;
  strictEqual(Buffer.byteLength(JSON.stringify(p)) <= BODY_MAX_BYTES, true);
  deepStrictEqual(validateWire(p), { ok: true });
});

test('validateWire names offending fields', () => {
  deepStrictEqual(validateWire(null), { ok: false, field: 'body' });
  deepStrictEqual(validateWire([]), { ok: false, field: 'body' });
  const p = buildReportPayload(input())!;
  deepStrictEqual(validateWire({ ...p, foo: 1 }), { ok: false, field: 'foo' });
  deepStrictEqual(validateWire({ ...p, context: { ...p.context, battery: 1 } }), { ok: false, field: 'context.battery' });
});

test('classifySend and outcomeFor', () => {
  for (const s of [200, 201] as const) strictEqual(classifySend(s), 'sent');
  for (const s of ['offline', 408, 429, 500, 503] as const) strictEqual(classifySend(s), 'retry');
  for (const s of [400, 401, 403, 413, 422] as const) strictEqual(classifySend(s), 'drop');
  strictEqual(outcomeFor('offline'), 'queued-offline');
  strictEqual(outcomeFor(429), 'queued-limited');
  strictEqual(outcomeFor(408), 'queued-busy');
  strictEqual(outcomeFor(503), 'queued-busy');
  strictEqual(outcomeFor(201), 'sent');
  strictEqual(outcomeFor(422), 'rejected');
});

// ---------- outbox ----------
const NOW = Date.UTC(2026, 9, 1, 23, 30);
const mk = (n: number, at = NOW): ReportPayload => buildReportPayload(input({
  report_id: `${String(10000000 + n)}-aaaa-4bbb-8ccc-1234567890ab`, client_created_at: new Date(at).toISOString(),
}))!;

test('nextUtcDay is the next UTC midnight', () => {
  strictEqual(nextUtcDay(Date.UTC(2026, 9, 1, 23, 30)), Date.UTC(2026, 9, 2, 0, 0));
  strictEqual(nextUtcDay(Date.UTC(2026, 9, 2, 0, 0)), Date.UTC(2026, 9, 3, 0, 0));
});

test('claimReport appends, dedupes, evicts the oldest, prunes expired', () => {
  let box = claimReport([], mk(1), NOW);
  strictEqual(box.length, 1);
  strictEqual(box[0].notBefore, null);
  box = claimReport(box, mk(1), NOW);
  strictEqual(box.length, 1);
  for (let i = 2; i <= REPORT_OUTBOX_LIMIT + 1; i++) box = claimReport(box, mk(i), NOW);
  strictEqual(box.length, REPORT_OUTBOX_LIMIT);
  strictEqual(box.some((e) => e.payload.report_id === mk(1).report_id), false);
  strictEqual(box[box.length - 1].payload.report_id, mk(REPORT_OUTBOX_LIMIT + 1).report_id);
  const stale = [{ payload: mk(50, NOW - REPORT_OUTBOX_MAX_AGE_MS - 1000), notBefore: null }];
  strictEqual(claimReport(stale, mk(51), NOW).length, 1);
  strictEqual(pruneReports(stale, NOW).length, 0);
});

test('settleReport removes on sent/drop, keeps on retry, 429 waits for the next UTC day', () => {
  const box = claimReport(claimReport([], mk(1), NOW), mk(2), NOW);
  const id = mk(1).report_id;
  strictEqual(settleReport(box, id, 201, NOW).length, 1);
  strictEqual(settleReport(box, id, 422, NOW).length, 1);
  const busy = settleReport(box, id, 503, NOW);
  strictEqual(busy.length, 2);
  strictEqual(busy[0].notBefore, null);
  strictEqual(settleReport(box, id, 'offline', NOW)[0].notBefore, null);
  const limited = settleReport(box, id, 429, NOW);
  strictEqual(limited[0].notBefore, nextUtcDay(NOW));
  strictEqual(limited[1].notBefore, null);
});

test('a 429 entry is absent from dueReports until the next UTC midnight', () => {
  const box = settleReport(claimReport([], mk(1), NOW), mk(1).report_id, 429, NOW);
  strictEqual(dueReports(box, NOW).length, 0);
  strictEqual(dueReports(box, nextUtcDay(NOW) - 1).length, 0);
  strictEqual(dueReports(box, nextUtcDay(NOW)).length, 1);
});

test('validReportOutbox drops garbage and rebuilds payloads', () => {
  deepStrictEqual(validReportOutbox('nope'), []);
  deepStrictEqual(validReportOutbox(null), []);
  const good = { payload: { ...mk(1), email: 'a@b.com' }, notBefore: 5 };
  const out = validReportOutbox([good, null, 3, { payload: { report_id: 'x' }, notBefore: null }, { payload: mk(2), notBefore: 'soon' }]);
  strictEqual(out.length, 2);
  strictEqual('email' in out[0].payload, false);
  strictEqual(out[0].notBefore, 5);
  strictEqual(out[1].notBefore, null);
});
