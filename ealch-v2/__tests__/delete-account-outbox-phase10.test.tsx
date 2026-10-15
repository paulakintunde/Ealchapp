/// <reference types="jest" />
// Phase 10 D-20: deleting the account clears queued reports first and sends install_id.
const mockStorage = new Map<string, string>();
const mockInvoke = jest.fn();
let mockCounter = 0;

jest.mock('@react-native-async-storage/async-storage', () => ({
  __esModule: true,
  default: {
    getItem: jest.fn(async (key: string) => mockStorage.get(key) ?? null),
    setItem: jest.fn(async (key: string, value: string) => { mockStorage.set(key, value); }),
    removeItem: jest.fn(async (key: string) => { mockStorage.delete(key); }),
  },
}));
jest.mock('expo-crypto', () => ({
  randomUUID: () => `00000000-0000-4000-a000-${String(++mockCounter).padStart(12, '0')}`,
}));
jest.mock('@/services/supabase', () => ({
  supabase: () => ({
    auth: { getSession: async () => ({ data: { session: { access_token: 't' } } }), signOut: async () => ({}) },
    functions: { invoke: (...args: unknown[]) => mockInvoke(...args) },
  }),
}));
jest.mock('@/services/analytics', () => ({
  installId: async () => 'install-test-0001',
  track: jest.fn(),
  handleAuthTransition: jest.fn(),
  prepareEmailSignup: jest.fn(),
  recordAcceptedEmailSignup: jest.fn(),
}));

import { auth } from '@/services/auth';
import { flushProblemReportOutbox, submitProblemReport } from '@/services/problemReport';

const KEY = 'ealch-problem-report-outbox';

test('deleteAccount clears queued reports, sends install_id, and nothing is resent after', async () => {
  mockInvoke.mockRejectedValueOnce(new Error('offline'));
  expect(await submitProblemReport({ category: 'crash', screen: 'home' })).toBe('queued-offline');
  expect(mockStorage.has(KEY)).toBe(true);

  mockInvoke.mockClear();
  mockInvoke.mockResolvedValue({ data: {}, error: null });
  const result = await auth.deleteAccount();
  expect(result.ok).toBe(true);
  expect(mockStorage.has(KEY)).toBe(false);
  expect(mockInvoke).toHaveBeenCalledTimes(1);
  expect(mockInvoke.mock.calls[0][0]).toBe('delete-account');
  expect(mockInvoke.mock.calls[0][1]).toEqual({ method: 'POST', body: { install_id: 'install-test-0001' } });

  mockInvoke.mockClear();
  await flushProblemReportOutbox();
  expect(mockInvoke).not.toHaveBeenCalled();
});
