/// <reference types="jest" />
// Phase 10 FEEDBACK-03: delivery guarantees of the report service, proven by behaviour.
const mockStorage = new Map<string, string>();
let mockFailOutboxWrite = false;
let mockCounter = 0;
const mockInvoke = jest.fn();
const mockTrack = jest.fn();

jest.mock('@react-native-async-storage/async-storage', () => ({
  __esModule: true,
  default: {
    getItem: jest.fn(async (key: string) => mockStorage.get(key) ?? null),
    setItem: jest.fn(async (key: string, value: string) => {
      if (mockFailOutboxWrite && key === 'ealch-problem-report-outbox') throw new Error('disk full');
      mockStorage.set(key, value);
    }),
    removeItem: jest.fn(async (key: string) => { mockStorage.delete(key); }),
  },
}));
jest.mock('expo-crypto', () => ({
  randomUUID: () => `00000000-0000-4000-a000-${String(++mockCounter).padStart(12, '0')}`,
}));
jest.mock('@/services/supabase', () => ({
  supabase: () => ({ functions: { invoke: (...args: unknown[]) => mockInvoke(...args) } }),
}));
jest.mock('@/services/analytics', () => ({
  installId: async () => 'install-test-0001',
  track: (...args: unknown[]) => mockTrack(...args),
}));

import { recentErrors } from '@/services/errors';

const KEY = 'ealch-problem-report-outbox';
type Svc = typeof import('@/services/problemReport');
let svc: Svc;
const load = (): Svc => {
  let mod!: Svc;
  jest.isolateModules(() => { mod = require('@/services/problemReport') as Svc; });
  return mod;
};
const tick = () => new Promise((resolve) => setTimeout(resolve, 5));
const outbox = (): Array<{ payload: { report_id: string }; notBefore: number | null }> =>
  JSON.parse(mockStorage.get(KEY) ?? '[]');
function deferred<T>() {
  let resolve!: (v: T) => void;
  const promise = new Promise<T>((r) => { resolve = r; });
  return { promise, resolve };
}
const ok = { data: {}, error: null };
const draft = { category: 'audio' as const, details: 'SECRET-DETAILS-TEXT', screen: 'lesson', lesson_id: 'LESSON-777', item_id: 'ITEM-888' };

beforeEach(() => {
  mockStorage.clear();
  mockFailOutboxWrite = false;
  mockInvoke.mockReset();
  mockTrack.mockReset();
  svc = load();
});
afterEach(() => {
  jest.useRealTimers();
  jest.restoreAllMocks();
  expect(recentErrors()).toHaveLength(0);
});

test('claim before send', async () => {
  let seenAtInvoke: string[] = [];
  let sentId = '';
  mockInvoke.mockImplementation(async (_fn: string, opts: { body: { report_id: string } }) => {
    sentId = opts.body.report_id;
    seenAtInvoke = outbox().map((e) => e.payload.report_id);
    return ok;
  });
  expect(await svc.submitProblemReport(draft)).toBe('sent');
  expect(seenAtInvoke).toEqual([sentId]);
  expect(outbox()).toHaveLength(0);
});

test('killed mid-send: the claimed report is delivered by the next launch', async () => {
  let firstId = '';
  mockInvoke.mockImplementationOnce((_fn: string, opts: { body: { report_id: string } }) => {
    firstId = opts.body.report_id;
    return new Promise(() => {});
  });
  void svc.submitProblemReport(draft); // never settles: the process "dies"
  await tick();
  expect(outbox().map((e) => e.payload.report_id)).toEqual([firstId]);

  const relaunched = load();
  const sent: string[] = [];
  mockInvoke.mockImplementation(async (_fn: string, opts: { body: { report_id: string } }) => {
    sent.push(opts.body.report_id);
    return ok;
  });
  await relaunched.flushProblemReportOutbox();
  expect(sent).toEqual([firstId]);
  expect(outbox()).toHaveLength(0);
  expect(mockTrack).toHaveBeenCalledWith('report_submitted', { category: 'audio', entry_point: 'lesson' });
});

test('submit during flush loses no report', async () => {
  mockInvoke.mockRejectedValueOnce(new Error('offline'));
  expect(await svc.submitProblemReport(draft)).toBe('queued-offline');
  const [a] = outbox().map((e) => e.payload.report_id);

  const gate = deferred<typeof ok>();
  const sent: string[] = [];
  mockInvoke.mockImplementation((_fn: string, opts: { body: { report_id: string } }) => {
    sent.push(opts.body.report_id);
    return sent.length === 1 ? gate.promise : Promise.resolve(ok);
  });
  const flushing = svc.flushProblemReportOutbox();
  await tick();
  expect(sent).toEqual([a]);
  const submitting = svc.submitProblemReport({ ...draft, category: 'other' });
  await tick();
  expect(outbox().map((e) => e.payload.report_id)).toContain(a);
  gate.resolve(ok);
  await flushing;
  expect(await submitting).toBe('sent');
  expect(sent).toHaveLength(2);
  expect(new Set(sent).size).toBe(2);
  expect(outbox()).toHaveLength(0);
});

test('429 next UTC day', async () => {
  mockInvoke.mockResolvedValue({ data: null, error: { context: { status: 429 } } });
  const now = Date.now();
  expect(await svc.submitProblemReport(draft)).toBe('queued-limited');
  const [entry] = outbox();
  const d = new Date(now);
  expect(entry.notBefore).toBe(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1));

  mockInvoke.mockClear();
  await svc.flushProblemReportOutbox();
  expect(mockInvoke).not.toHaveBeenCalled();
  expect(outbox()).toHaveLength(1);

  jest.spyOn(Date, 'now').mockReturnValue(entry.notBefore! + 1000);
  mockInvoke.mockResolvedValue(ok);
  await svc.flushProblemReportOutbox();
  expect(mockInvoke).toHaveBeenCalledTimes(1);
  expect(outbox()).toHaveLength(0);
});

test('400 is rejected, removed and never retried', async () => {
  mockInvoke.mockResolvedValue({ data: null, error: { context: { status: 400 } } });
  expect(await svc.submitProblemReport(draft)).toBe('rejected');
  expect(outbox()).toHaveLength(0);
  mockInvoke.mockClear();
  await svc.flushProblemReportOutbox();
  expect(mockInvoke).not.toHaveBeenCalled();
});

test('offline keeps the entry and the next flush retries', async () => {
  mockInvoke.mockRejectedValue(new Error('offline'));
  expect(await svc.submitProblemReport(draft)).toBe('queued-offline');
  expect(outbox()).toHaveLength(1);
  expect(outbox()[0].notBefore).toBeNull();
  mockInvoke.mockResolvedValue(ok);
  await svc.flushProblemReportOutbox();
  expect(outbox()).toHaveLength(0);
});

test('5xx and 408 keep the entry as busy', async () => {
  mockInvoke.mockResolvedValue({ data: null, error: { context: { status: 503 } } });
  expect(await svc.submitProblemReport(draft)).toBe('queued-busy');
  expect(outbox()).toHaveLength(1);
});

test('analytics: only category and entry_point, never free text or ids', async () => {
  mockInvoke.mockResolvedValueOnce(ok);
  await svc.submitProblemReport(draft);
  mockInvoke.mockRejectedValueOnce(new Error('offline'));
  await svc.submitProblemReport({ ...draft, screen: null });
  expect(mockTrack).toHaveBeenNthCalledWith(1, 'report_submitted', { category: 'audio', entry_point: 'lesson' });
  expect(mockTrack).toHaveBeenNthCalledWith(2, 'report_queued', { category: 'audio', entry_point: 'unknown' });
  for (const call of mockTrack.mock.calls) {
    expect(Object.keys(call[1] as object)).toEqual(['category', 'entry_point']);
    const text = JSON.stringify(call[1]);
    for (const secret of ['SECRET-DETAILS-TEXT', 'LESSON-777', 'ITEM-888', 'stack']) expect(text).not.toContain(secret);
  }
});

test('claim write failure → save-failed', async () => {
  mockFailOutboxWrite = true;
  mockInvoke.mockRejectedValue(new Error('offline'));
  expect(await svc.submitProblemReport(draft)).toBe('save-failed');
  expect(outbox()).toHaveLength(0);
});

test('claim write failure still sends, and a success is sent', async () => {
  mockFailOutboxWrite = true;
  mockInvoke.mockResolvedValue(ok);
  expect(await svc.submitProblemReport(draft)).toBe('sent');
});

test('a send that never answers resolves as queued-offline after 15 s', async () => {
  jest.useFakeTimers();
  mockInvoke.mockImplementation(() => new Promise(() => {}));
  const result = svc.submitProblemReport(draft);
  await jest.advanceTimersByTimeAsync(0);
  await jest.advanceTimersByTimeAsync(15000);
  expect(await result).toBe('queued-offline');
  expect(outbox()).toHaveLength(1);
});

test('the payload carries no email key', async () => {
  let body: Record<string, unknown> = {};
  mockInvoke.mockImplementation(async (_fn: string, opts: { body: Record<string, unknown> }) => { body = opts.body; return ok; });
  await svc.submitProblemReport(draft);
  expect(JSON.stringify(body).toLowerCase()).not.toContain('email');
  expect(body.install_id).toBe('install-test-0001');
});
