import { deepStrictEqual } from 'node:assert';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { buildReportPayload, validateWire } from './problemReport.logic.ts';

type Fixture = { valid: { name: string; body: unknown }[]; invalid: { name: string; body: unknown; field: string }[] };
const fixture = JSON.parse(readFileSync(new URL('../../supabase/functions/report-problem/contract.fixture.json', import.meta.url), 'utf8')) as Fixture;

for (const { name, body } of fixture.valid) {
  test(`contract valid: ${name}`, () => {
    deepStrictEqual(validateWire(body), { ok: true });
    deepStrictEqual(buildReportPayload(body as never), body);
  });
}
for (const { name, body, field } of fixture.invalid) {
  test(`contract invalid: ${name}`, () => {
    deepStrictEqual(validateWire(body), { ok: false, field });
  });
}
