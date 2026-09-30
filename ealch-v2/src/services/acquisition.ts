import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { localDay } from '@/store/progress.logic';
import { installId, track } from './analytics';
import { firstOpenRecord, isD1Return, parseReferrer, type Attribution, type FirstOpenRecord, type ReferrerLookup } from './acquisition.logic';

const FIRST_KEY = 'ealch-acquisition-first-open';
const D1_KEY = 'ealch-acquisition-d1-return';
const ATTRIBUTION_KEY = 'ealch-acquisition-attribution';
let work: Promise<void> = Promise.resolve();

function queue(now: Date): Promise<void> {
  work = work.then(async () => {
    const id = await installId();
    let record: FirstOpenRecord | null = null;
    try {
      const raw = await AsyncStorage.getItem(FIRST_KEY);
      if (raw) {
        const candidate = JSON.parse(raw) as FirstOpenRecord;
        if (candidate.installId === id && /^\d{4}-\d{2}-\d{2}$/.test(candidate.localDay)) record = candidate;
      }
    } catch { /* Storage failure must not block launch. */ }
    if (!record) {
      record = firstOpenRecord(id, now);
      try { await AsyncStorage.setItem(FIRST_KEY, JSON.stringify(record)); } catch { /* Best effort. */ }
      track('first_open', { local_day: record.localDay, opened_at: record.at });
      return;
    }
    let emitted: string | null = null;
    try { emitted = await AsyncStorage.getItem(D1_KEY); } catch { /* Analytics remains optional. */ }
    if (isD1Return(record.localDay, now, emitted)) {
      const today = localDay(now);
      try { await AsyncStorage.setItem(D1_KEY, today); } catch { /* Best effort. */ }
      track('d1_return', { local_day: today });
    }
  }).catch(() => {});
  return work;
}

/** Called once at app mount; immediately records launch independently of attribution. */
export function recordAppLaunch(now: Date = new Date()): Promise<void> {
  return queue(now);
}

/** Called when a backgrounded app returns to foreground. */
export function recordAppForeground(now: Date = new Date()): Promise<void> {
  return queue(now);
}

/** Only Android loads the native Expo Application implementation. */
export async function lookupPlayReferrer(
  platform: string = Platform.OS,
  read: () => Promise<string> = async () => {
    const Application = await import('expo-application');
    return Application.getInstallReferrerAsync();
  },
): Promise<ReferrerLookup> {
  if (platform !== 'android') return { status: 'unsupported' };
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const raw = await Promise.race([
      read(),
      new Promise<never>((_, reject) => { timer = setTimeout(() => reject(new Error('referrer-timeout')), 5000); }),
    ]);
    return { status: 'ok', raw };
  } catch (error) {
    const code = error && typeof error === 'object' && 'code' in error ? String(error.code) : '';
    return { status: code === 'ERR_APPLICATION_INSTALL_REFERRER_UNAVAILABLE' || code === 'ERR_UNAVAILABLE' ? 'unsupported' : 'failed' };
  } finally {
    if (timer) clearTimeout(timer);
  }
}

/** Called after first-open has been queued; Play lookup never delays launch. */
export async function recordInstallAttribution(
  platform: string = Platform.OS,
  lookup: (platform: string) => Promise<ReferrerLookup> = lookupPlayReferrer,
): Promise<void> {
  try {
    const id = await installId();
    const oldRaw = await AsyncStorage.getItem(ATTRIBUTION_KEY);
    try {
      if (oldRaw) {
        const old = JSON.parse(oldRaw) as { installId: string; result: Attribution };
        if (old.installId === id && old.result?.status !== 'lookup_failed') return;
      }
    } catch { /* Invalid saved attribution gets one fresh lookup. */ }
    const result: Attribution = platform === 'ios' ? { status: 'unavailable' } : parseReferrer(await lookup(platform));
    await AsyncStorage.setItem(ATTRIBUTION_KEY, JSON.stringify({ installId: id, result }));
    track('install_attribution', result);
  } catch {
    // Acquisition is optional and must never delay onboarding.
  }
}
