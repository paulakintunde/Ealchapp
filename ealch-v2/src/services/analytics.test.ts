import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { captureHttp, type CaptureBody } from './analytics.logic.ts';

const body: CaptureBody = {
  api_key: 'test-public-key', event: 'first_open', distinct_id: 'guest-1', uuid: 'event-1',
  properties: { local_day: '2026-09-29', event_id: 'event-1', install_id: 'install-1', journey_id: 'guest-1' },
  timestamp: '2026-09-29T00:00:00.000Z',
};
const post = (response: Response) => async (_url: string, _init: RequestInit) => response;

test('2xx capture records accepted while 400 and 500 record rejection', async () => {
  deepStrictEqual(await captureHttp(post(new Response('{"status":1}', { status: 200 })), 'https://test.posthog', body),
    { event_id: 'event-1', event: 'first_open', status: 200, accepted: true });
  for (const status of [400, 500]) {
    strictEqual((await captureHttp(post(new Response('{}', { status })), 'https://test.posthog', body)).accepted, false);
  }
  strictEqual((await captureHttp(post(new Response('{"status":0}', { status: 200 })), 'https://test.posthog', body)).accepted, false);
});

test('offline, missing key, and server response never throw into the user flow', async () => {
  const offline = await captureHttp(async () => { throw new Error('raw sensitive failure'); }, 'https://test.posthog', body);
  deepStrictEqual(offline, { event_id: 'event-1', event: 'first_open', status: 'offline', accepted: false });
  const noKey = await captureHttp(async () => { throw new Error('must not be called'); }, 'https://test.posthog', { ...body, api_key: '' });
  strictEqual(noKey.status, 'no_key');
});

test('HTTP body has only the caller supplied safe shape', async () => {
  let captured: CaptureBody | null = null;
  await captureHttp(async (_url, init) => {
    captured = JSON.parse(String(init.body)) as CaptureBody;
    return new Response('{}', { status: 200 });
  }, 'https://test.posthog', body);
  deepStrictEqual(captured, body);
});
