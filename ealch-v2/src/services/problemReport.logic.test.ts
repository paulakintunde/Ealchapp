import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  buildReportPayload, classifySend, outcomeFor, validateWire, BODY_MAX_BYTES,
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
