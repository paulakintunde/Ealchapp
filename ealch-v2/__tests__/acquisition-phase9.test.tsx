/// <reference types="jest" />
import AsyncStorage from '@react-native-async-storage/async-storage';
import { recordAppForeground, recordAppLaunch } from '@/services/acquisition';
import { installId, track } from '@/services/analytics';

jest.mock('@/services/analytics', () => ({
  installId: jest.fn(async () => 'test-install'),
  track: jest.fn(),
}));

beforeEach(async () => {
  await AsyncStorage.clear();
  jest.clearAllMocks();
});

test('first open is immediate and once per install across repeated launches', async () => {
  const opened = new Date(2026, 8, 29, 23, 30);
  await recordAppLaunch(opened);
  await recordAppLaunch(opened);
  expect(installId).toHaveBeenCalled();
  expect((track as jest.Mock).mock.calls.filter(([event]) => event === 'first_open')).toEqual([
    ['first_open', { local_day: '2026-09-29', opened_at: opened.toISOString() }],
  ]);
});

test('same-day foreground is ignored and next local day is D1 only once', async () => {
  const opened = new Date(2026, 8, 29, 23, 30);
  await recordAppLaunch(opened);
  await recordAppForeground(new Date(2026, 8, 29, 23, 45));
  expect((track as jest.Mock).mock.calls.some(([event]) => event === 'd1_return')).toBe(false);
  await recordAppForeground(new Date(2026, 8, 30, 9));
  await recordAppForeground(new Date(2026, 8, 30, 12));
  await recordAppLaunch(new Date(2026, 8, 30, 13));
  expect((track as jest.Mock).mock.calls.filter(([event]) => event === 'd1_return')).toEqual([
    ['d1_return', { local_day: '2026-09-30' }],
  ]);
});
