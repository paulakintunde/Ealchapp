import AsyncStorage from '@react-native-async-storage/async-storage';
import { localDay } from '@/store/progress.logic';
import { installId, track } from './analytics';
import { firstOpenRecord, isD1Return, type FirstOpenRecord } from './acquisition.logic';

const FIRST_KEY = 'ealch-acquisition-first-open';
const D1_KEY = 'ealch-acquisition-d1-return';
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
