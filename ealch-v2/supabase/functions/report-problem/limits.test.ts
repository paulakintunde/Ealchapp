// Server validator and limits. Plain Node, no Deno. The shared fixture keeps client and server in step.
import { deepStrictEqual, strictEqual } from 'node:assert';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { validateWire } from '../../../src/services/problemReport.logic.ts';
import { bodyTooLarge, decide, DEFAULT_LIMITS, ipKeyFrom, subjectKey, validateReport } from './limits.ts';

type Fixture = { valid: { name: string; body: unknown }[]; invalid: { name: string; body: unknown; field: string }[] };
const fixture = JSON.parse(readFileSync(new URL('./contract.fixture.json', import.meta.url), 'utf8')) as Fixture;

for (const { name, body } of fixture.valid) {
  test(`fixture valid: ${name}`, () => {
    deepStrictEqual(validateReport(body), { ok: true });
    deepStrictEqual(validateReport(body), validateWire(body));
  });
}
for (const { name, body, field } of fixture.invalid) {
  test(`fixture invalid: ${name}`, () => {
    deepStrictEqual(validateReport(body), { ok: false, field });
    deepStrictEqual(validateReport(body), validateWire(body));
  });
}

test('client_created_at must be strict ISO-8601 UTC', () => {
  const base = (fixture.valid[0].body as Record<string, unknown>);
  for (const v of ['2026-10-01', 'Oct 1 2026']) {
    deepStrictEqual(validateReport({ ...base, client_created_at: v }), { ok: false, field: 'client_created_at' });
  }
});

test('a body email is rejected by name', () => {
  const base = (fixture.valid[0].body as Record<string, unknown>);
  deepStrictEqual(validateReport({ ...base, email: 'a@b.c' }), { ok: false, field: 'email' });
});

test('bodyTooLarge counts UTF-8 bytes', () => {
  strictEqual(bodyTooLarge('a'.repeat(24576)), false);
  strictEqual(bodyTooLarge('a'.repeat(24577)), true);
  strictEqual(bodyTooLarge('é'.repeat(12289)), true);
});

test('decide uses >= on counts taken before this report', () => {
  deepStrictEqual(decide('guest', { subject: 2, global: 0, ip: 0 }), { allowed: true });
  deepStrictEqual(decide('guest', { subject: 3, global: 0, ip: 0 }), { allowed: false, reason: 'subject' });
  deepStrictEqual(decide('user', { subject: 9, global: 0, ip: 0 }), { allowed: true });
  deepStrictEqual(decide('user', { subject: 10, global: 0, ip: 0 }), { allowed: false, reason: 'subject' });
  deepStrictEqual(decide('user', { subject: 0, global: 200, ip: 0 }), { allowed: false, reason: 'global' });
  deepStrictEqual(decide('user', { subject: 0, global: 0, ip: 20 }), { allowed: false, reason: 'ip' });
  deepStrictEqual(decide('guest', { subject: 0, global: 0, ip: null }), { allowed: true });
  deepStrictEqual(DEFAULT_LIMITS, { dailyGuest: 3, dailyUser: 10, dailyGlobal: 200, dailyIp: 20 });
});

test('ipKeyFrom and subjectKey', () => {
  strictEqual(ipKeyFrom('203.0.113.9, 10.0.0.1'), 'ip:203.0.113.9');
  strictEqual(ipKeyFrom(null), null);
  strictEqual(ipKeyFrom('garbage'), null);
  strictEqual(ipKeyFrom('2001:db8::1'), 'ip:2001:db8::1');
  strictEqual(subjectKey('abc', 'inst'), 'u:abc');
  strictEqual(subjectKey(null, 'inst'), 'i:inst');
});
