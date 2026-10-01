/// <reference types="jest" />
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lookupPlayReferrer, recordAppForeground, recordAppLaunch, recordInstallAttribution } from '@/services/acquisition';
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

test('iPhone reports unavailable without loading the Android native API', async () => {
  const read = jest.fn(async () => { throw new Error('native module must not load'); });
  expect(await lookupPlayReferrer('ios', read)).toEqual({ status: 'unsupported' });
  expect(read).not.toHaveBeenCalled();
  await recordInstallAttribution('ios');
  await recordInstallAttribution('ios');
  expect((track as jest.Mock).mock.calls.filter(([event]) => event === 'install_attribution')).toEqual([
    ['install_attribution', { status: 'unavailable' }],
  ]);
});

test('Android lookup sends parsed campaign fields once and no raw referrer', async () => {
  await recordAppLaunch(new Date(2026, 8, 29, 9));
  const lookup = jest.fn(async () => ({ status: 'ok' as const, raw: 'utm_source=play&utm_campaign=launch&email=private' }));
  await recordInstallAttribution('android', lookup);
  await recordInstallAttribution('android', lookup);
  expect(lookup).toHaveBeenCalledTimes(1);
  expect((track as jest.Mock).mock.calls.filter(([event]) => event === 'install_attribution')).toEqual([
    ['install_attribution', { status: 'campaign', source: 'play', campaign: 'launch' }],
  ]);
  expect((track as jest.Mock).mock.calls.find(([event]) => event === 'first_open')).toBeTruthy();
});

test('Android unsupported and retryable errors map to different statuses', async () => {
  const unsupported = Object.assign(new Error('unsupported'), { code: 'ERR_APPLICATION_INSTALL_REFERRER_UNAVAILABLE' });
  expect(await lookupPlayReferrer('android', async () => { throw unsupported; })).toEqual({ status: 'unsupported' });
  expect(await lookupPlayReferrer('android', async () => { throw new Error('offline'); })).toEqual({ status: 'failed' });
  const lookup = jest.fn().mockResolvedValueOnce({ status: 'failed' }).mockResolvedValueOnce({ status: 'ok', raw: 'utm_medium=cpc' });
  await recordInstallAttribution('android', lookup);
  await recordInstallAttribution('android', lookup);
  expect((track as jest.Mock).mock.calls.filter(([event]) => event === 'install_attribution')).toEqual([
    ['install_attribution', { status: 'lookup_failed' }],
    ['install_attribution', { status: 'campaign', medium: 'cpc' }],
  ]);
});

test('a lookup that keeps failing is reported once and retried at most five times', async () => {
  const lookup = jest.fn(async () => ({ status: 'failed' as const }));
  for (let launch = 0; launch < 8; launch++) await recordInstallAttribution('android', lookup);
  expect(lookup).toHaveBeenCalledTimes(5);
  expect((track as jest.Mock).mock.calls.filter(([event]) => event === 'install_attribution')).toEqual([
    ['install_attribution', { status: 'lookup_failed' }],
  ]);
});
