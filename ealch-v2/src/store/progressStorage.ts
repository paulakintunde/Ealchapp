import { AppState, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Directory, File, Paths } from 'expo-file-system';
import { logError } from '../services/errors';
import { createShardedStorage, type ShardBackend } from './progressStorage.logic';

// The file-system shell around progressStorage.logic.ts. One JSON file per
// progress field under Paths.document/progress/ — the document directory, not
// the cache, because the OS may evict a cache and this is the learner's only
// copy of their history (guests have no server copy at all).
//
// Each write lands in `<shard>.json.tmp` and is then moved over the real file,
// so a process death mid-write leaves the previous shard whole. If the death
// falls between the move's delete and rename, `read` falls back to the .tmp.

/** The single-row key the progress store used before sharding. */
export const LEGACY_PROGRESS_KEY = 'ealch-progress';

const dir = () => new Directory(Paths.document, 'progress');
const shardFile = (shard: string) => new File(dir(), `${shard}.json`);
const tmpFile = (shard: string) => new File(dir(), `${shard}.json.tmp`);

const ensureDir = () => {
  const d = dir();
  if (!d.exists) d.create({ intermediates: true, idempotent: true });
};

const fileBackend: ShardBackend = {
  async read(shard) {
    const f = shardFile(shard);
    if (f.exists) return f.text();
    const t = tmpFile(shard);
    if (t.exists) return t.text();
    return null;
  },
  async write(shard, text) {
    ensureDir();
    const t = tmpFile(shard);
    t.write(text);
    await t.move(shardFile(shard), { overwrite: true });
  },
  async remove(shard) {
    for (const f of [shardFile(shard), tmpFile(shard)]) if (f.exists) f.delete();
  },
  async quarantine(shard, text) {
    ensureDir();
    new File(dir(), `${shard}.corrupt-${Date.now()}.json`).write(text);
    for (const f of [shardFile(shard), tmpFile(shard)]) if (f.exists) f.delete();
  },
};

// Web has no document directory (expo-file-system's File API is native-only),
// but localStorage has no 6 MB row problem either, so web keeps AsyncStorage —
// one key per shard, through the same sharded logic.
const keyBackend: ShardBackend = {
  read: (shard) => AsyncStorage.getItem(`${LEGACY_PROGRESS_KEY}:${shard}`),
  write: (shard, text) => AsyncStorage.setItem(`${LEGACY_PROGRESS_KEY}:${shard}`, text),
  remove: (shard) => AsyncStorage.removeItem(`${LEGACY_PROGRESS_KEY}:${shard}`),
  async quarantine(shard, text) {
    await AsyncStorage.setItem(`${LEGACY_PROGRESS_KEY}:${shard}.corrupt-${Date.now()}`, text);
    await AsyncStorage.removeItem(`${LEGACY_PROGRESS_KEY}:${shard}`);
  },
};

export const progressStorage = createShardedStorage<Record<string, unknown>>({
  fields: ['sessions', 'attempts', 'examResults', 'errors', 'resumeByMode', 'lessonMissions'],
  backend: Platform.OS === 'web' ? keyBackend : fileBackend,
  legacy: {
    read: () => AsyncStorage.getItem(LEGACY_PROGRESS_KEY),
    remove: () => AsyncStorage.removeItem(LEGACY_PROGRESS_KEY),
  },
  onError: (where, e) => logError('js', new Error(`progress storage ${where}: ${e instanceof Error ? e.message : String(e)}`)),
});

// A debounced write still pending when the app is backgrounded would be lost if
// the OS then kills the process, so leaving the foreground flushes it.
AppState.addEventListener('change', (next) => {
  if (next !== 'active') void progressStorage.flush();
});
