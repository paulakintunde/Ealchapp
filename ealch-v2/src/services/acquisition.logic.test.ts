import { test } from 'node:test';
import { strictEqual } from 'node:assert';
import { firstOpenRecord, isD1Return, parseReferrer } from './acquisition.logic.ts';

test('first open stores install identity, exact time and local calendar day', () => {
  const opened = new Date(2026, 8, 29, 23, 30);
  const record = firstOpenRecord('install-1', opened);
  strictEqual(record.installId, 'install-1');
  strictEqual(record.at, opened.toISOString());
  strictEqual(record.localDay, '2026-09-29');
});

test('a return under 24 hours can count when it is the next local day', () => {
  const opened = new Date(2026, 8, 29, 23, 30);
  const returned = new Date(opened.getTime() + 23 * 60 * 60 * 1000);
  strictEqual(isD1Return('2026-09-29', returned, null), true);
});

test('a return after 25 hours on day two is not D1, and same-day repeats do not count', () => {
  const opened = new Date(2026, 8, 29, 23, 30);
  const dayTwo = new Date(opened.getTime() + 25 * 60 * 60 * 1000);
  strictEqual(isD1Return('2026-09-29', dayTwo, null), false);
  strictEqual(isD1Return('2026-09-29', opened, null), false);
  strictEqual(isD1Return('2026-09-29', new Date(2026, 8, 30, 9), '2026-09-30'), false);
});

test('referrer parser sends decoded allowlisted campaign fields only', () => {
  const result = parseReferrer({ status: 'ok', raw: 'utm_source=store+ad&utm_medium=cpc&utm_campaign=French%20Launch&email=private&referrer=raw' });
  strictEqual(result.status, 'campaign');
  strictEqual(result.source, 'store ad');
  strictEqual(result.medium, 'cpc');
  strictEqual(result.campaign, 'French Launch');
  strictEqual('email' in result, false);
  strictEqual('raw' in result, false);
});

test('referrer statuses distinguish no campaign, unsupported service and failed lookup', () => {
  strictEqual(parseReferrer({ status: 'ok', raw: 'gclid=opaque' }).status, 'no_campaign');
  strictEqual(parseReferrer({ status: 'unsupported' }).status, 'unavailable');
  strictEqual(parseReferrer({ status: 'failed' }).status, 'lookup_failed');
  strictEqual(parseReferrer({ status: 'ok', raw: 'utm_source=%broken' }).status, 'lookup_failed');
  strictEqual(parseReferrer({ status: 'ok', raw: 'utm_source=x'.repeat(500) }).status, 'lookup_failed');
});

test('campaign fields are bounded and control characters are discarded', () => {
  const result = parseReferrer({ status: 'ok', raw: `utm_source=${'x'.repeat(150)}%0Aprivate` });
  strictEqual(result.source?.length, 100);
  strictEqual(result.source?.includes('\n'), false);
});
