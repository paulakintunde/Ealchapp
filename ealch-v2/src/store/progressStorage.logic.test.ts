import { deepStrictEqual, ok, rejects, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { createShardedStorage, holdable, META_SHARD, type ShardBackend, type Timer } from './progressStorage.logic.ts';

type P = { attempts: unknown[]; sessions: unknown[]; resume: Record<string, unknown> };
const FIELDS = ['attempts', 'sessions', 'resume'] as const;

function memBackend(initial: Record<string, string> = {}) {
  const files = new Map(Object.entries(initial));
  const writes: string[] = [];
  const quarantined: Record<string, string> = {};
  let failRead = false;
  let failWrite: string | null = null;
  const backend: ShardBackend = {
    async read(s) {
      if (failRead) throw new Error('EIO');
      return files.get(s) ?? null;
    },
    async write(s, t) {
      if (failWrite === s) throw new Error('ENOSPC');
      writes.push(s);
      files.set(s, t);
    },
    async remove(s) {
      files.delete(s);
    },
    async quarantine(s, t) {
      quarantined[s] = t;
      files.delete(s);
    },
  };
  return {
    backend, files, writes, quarantined,
    setFailRead: (v: boolean) => { failRead = v; },
    setFailWrite: (s: string | null) => { failWrite = s; },
  };
}

function manualTimer() {
  let fn: (() => void) | null = null;
  const timer: Timer = { set: (f) => { fn = f; return 1; }, clear: () => { fn = null; } };
  return { timer, fire: () => { const f = fn; fn = null; f?.(); }, armed: () => fn !== null };
}

function memLegacy(text: string | null) {
  let value = text;
  return {
    source: { read: async () => value, remove: async () => { value = null; } },
    get: () => value,
  };
}

const value = (state: P, version = 5) => ({ state, version });

test('a fresh install hydrates to null and the first write creates every shard, meta last', async () => {
  const m = memBackend();
  const t = manualTimer();
  const s = createShardedStorage<P>({ fields: FIELDS, backend: m.backend, timer: t.timer });
  strictEqual(await s.getItem('x'), null);
  s.setItem('x', value({ attempts: [1], sessions: [], resume: {} }));
  strictEqual(m.writes.length, 0, 'debounced, not written synchronously');
  t.fire();
  await s.flush();
  deepStrictEqual(m.writes, ['attempts', 'sessions', 'resume', META_SHARD]);
  deepStrictEqual(JSON.parse(m.files.get('attempts')!), [1]);
  deepStrictEqual(JSON.parse(m.files.get(META_SHARD)!), { version: 5 });
});

test('logging one attempt rewrites only the attempts shard', async () => {
  const m = memBackend();
  const t = manualTimer();
  const s = createShardedStorage<P>({ fields: FIELDS, backend: m.backend, timer: t.timer });
  const sessions: unknown[] = [];
  const resume = {};
  s.setItem('x', value({ attempts: [], sessions, resume }));
  await s.flush();
  m.writes.length = 0;
  s.setItem('x', value({ attempts: [{ id: 'a1' }], sessions, resume }));
  await s.flush();
  deepStrictEqual(m.writes, ['attempts']);
});

test('a burst of writes inside the debounce window lands once, with the latest value', async () => {
  const m = memBackend();
  const t = manualTimer();
  const s = createShardedStorage<P>({ fields: FIELDS, backend: m.backend, timer: t.timer });
  const sessions: unknown[] = [];
  const resume = {};
  s.setItem('x', value({ attempts: [], sessions, resume }));
  await s.flush();
  m.writes.length = 0;
  s.setItem('x', value({ attempts: [1], sessions, resume }));
  s.setItem('x', value({ attempts: [1, 2], sessions, resume }));
  s.setItem('x', value({ attempts: [1, 2, 3], sessions, resume }));
  t.fire();
  await s.flush();
  deepStrictEqual(m.writes, ['attempts']);
  deepStrictEqual(JSON.parse(m.files.get('attempts')!), [1, 2, 3]);
});

test('the legacy single-row blob is imported into shards, then removed', async () => {
  const m = memBackend();
  const blob = JSON.stringify(value({ attempts: [{ id: 'old' }], sessions: [{ d: 1 }], resume: { a: 1 } }, 4));
  const legacy = memLegacy(blob);
  const s = createShardedStorage<P>({ fields: FIELDS, backend: m.backend, legacy: legacy.source });
  const got = await s.getItem('x');
  deepStrictEqual(got, JSON.parse(blob));
  deepStrictEqual(m.writes, ['attempts', 'sessions', 'resume', META_SHARD]);
  deepStrictEqual(JSON.parse(m.files.get(META_SHARD)!), { version: 4 }, 'old version kept so persist still migrates');
  strictEqual(legacy.get(), null);
});

test('an import interrupted by a failed write keeps the legacy row and still hydrates from it', async () => {
  const m = memBackend();
  m.setFailWrite('resume');
  const blob = JSON.stringify(value({ attempts: [1], sessions: [], resume: {} }));
  const legacy = memLegacy(blob);
  const errors: string[] = [];
  const s = createShardedStorage<P>({ fields: FIELDS, backend: m.backend, legacy: legacy.source, onError: (w) => errors.push(w) });
  deepStrictEqual(await s.getItem('x'), JSON.parse(blob));
  strictEqual(legacy.get(), blob, 'legacy row survives for the next launch to retry');
  strictEqual(m.files.has(META_SHARD), false, 'no meta, so the next launch redoes the import');
  deepStrictEqual(errors, ['legacy-import']);
});

test('a corrupt legacy blob is quarantined, not re-failed on every launch', async () => {
  const m = memBackend();
  const legacy = memLegacy('{"state":{"attempts":[1,');
  const s = createShardedStorage<P>({ fields: FIELDS, backend: m.backend, legacy: legacy.source });
  strictEqual(await s.getItem('x'), null);
  strictEqual(m.quarantined.legacy, '{"state":{"attempts":[1,');
  strictEqual(legacy.get(), null);
});

test('one corrupt shard is quarantined and only that field starts empty', async () => {
  const m = memBackend({
    [META_SHARD]: '{"version":5}',
    attempts: '[{"id":"a"}]',
    sessions: '[{"d":',
    resume: '{"lesson":{"at":"2026-10-01"}}',
  });
  const s = createShardedStorage<P>({ fields: FIELDS, backend: m.backend });
  const got = await s.getItem('x');
  deepStrictEqual(got, { version: 5, state: { attempts: [{ id: 'a' }], resume: { lesson: { at: '2026-10-01' } } } });
  strictEqual(m.quarantined.sessions, '[{"d":');
  strictEqual(m.files.has('sessions'), false);
});

test('an unreadable backend rejects, and a held storage writes nothing at all', async () => {
  const m = memBackend({ [META_SHARD]: '{"version":5}', attempts: '[1,2,3]' });
  m.setFailRead(true);
  const t = manualTimer();
  const s = createShardedStorage<P>({ fields: FIELDS, backend: m.backend, timer: t.timer });
  await rejects(Promise.resolve(s.getItem('x')));
  s.hold();
  s.setItem('x', value({ attempts: [], sessions: [], resume: {} }));
  strictEqual(t.armed(), false);
  await s.flush();
  deepStrictEqual(m.writes, []);
  strictEqual(m.files.get('attempts'), '[1,2,3]');
});

test('a failed shard write is retried on the next change instead of being trusted', async () => {
  const m = memBackend();
  const s = createShardedStorage<P>({ fields: FIELDS, backend: m.backend, timer: manualTimer().timer });
  const sessions: unknown[] = [];
  const resume = {};
  m.setFailWrite('attempts');
  s.setItem('x', value({ attempts: [1], sessions, resume }));
  await s.flush();
  strictEqual(m.files.has('attempts'), false);
  m.setFailWrite(null);
  m.writes.length = 0;
  s.setItem('x', value({ attempts: [1], sessions, resume }));
  await s.flush();
  deepStrictEqual(m.writes, ['attempts']);
});

test('erase removes every shard and the legacy row, releases a hold, and the next write is complete', async () => {
  const m = memBackend({ [META_SHARD]: '{"version":5}', attempts: '[1]', sessions: '[]', resume: '{}' });
  const legacy = memLegacy('{"state":{}}');
  const s = createShardedStorage<P>({ fields: FIELDS, backend: m.backend, legacy: legacy.source, timer: manualTimer().timer });
  await s.getItem('x');
  s.hold();
  await s.removeItem('x');
  strictEqual(m.files.size, 0);
  strictEqual(legacy.get(), null);
  strictEqual(s.held, false);
  s.setItem('x', value({ attempts: [], sessions: [], resume: {} }));
  await s.flush();
  deepStrictEqual(m.writes, ['attempts', 'sessions', 'resume', META_SHARD]);
});

test('holdable stops writes once held and resumes them after an explicit erase', async () => {
  const sets: string[] = [];
  const inner = {
    getItem: () => null,
    setItem: (n: string) => { sets.push(n); },
    removeItem: () => {},
  };
  const h = holdable(inner);
  h.setItem('k', { state: {}, version: 1 });
  h.hold();
  h.setItem('k', { state: {}, version: 1 });
  deepStrictEqual(sets, ['k']);
  await h.removeItem('k');
  h.setItem('k', { state: {}, version: 1 });
  deepStrictEqual(sets, ['k', 'k']);
});

// The bug this module exists for, end to end through zustand's real persist:
// the old error branch called setState({ hydrated: true }), and persist's
// wrapped setState wrote the EMPTY initial state over the stored log.
function storeOver(storage: ReturnType<typeof createShardedStorage<P>>) {
  const store = createStore<P & { hydrated: boolean }>()(
    persist(() => ({ hydrated: false, attempts: [], sessions: [], resume: {} }), {
      name: 'ealch-progress',
      version: 5,
      storage,
      partialize: (s) => ({ attempts: s.attempts, sessions: s.sessions, resume: s.resume }),
      onRehydrateStorage: () => (state, error) => {
        if (state && !error) return;
        storage.hold();
        store.setState({ hydrated: true });
      },
    }),
  );
  return store;
}

test('regression: a failed read no longer overwrites the stored log with an empty one', async () => {
  const m = memBackend({ [META_SHARD]: '{"version":5}', attempts: '[{"id":"precious"}]', sessions: '[]', resume: '{}' });
  m.setFailRead(true);
  const storage = createShardedStorage<P>({ fields: FIELDS, backend: m.backend, debounceMs: 0 });
  const store = storeOver(storage);
  await store.persist.rehydrate();
  strictEqual(store.getState().hydrated, true);
  store.setState({ attempts: [{ id: 'this-session' }] });
  await new Promise((r) => setTimeout(r, 5));
  await storage.flush();
  deepStrictEqual(m.writes, []);
  strictEqual(m.files.get('attempts'), '[{"id":"precious"}]');
});

test('regression: a migrate that throws also leaves the stored log alone', async () => {
  const m = memBackend({ [META_SHARD]: '{"version":3}', attempts: '[{"id":"precious"}]', sessions: '[]', resume: '{}' });
  const storage = createShardedStorage<P>({ fields: FIELDS, backend: m.backend, debounceMs: 0 });
  const store = createStore<P & { hydrated: boolean }>()(
    persist(() => ({ hydrated: false, attempts: [], sessions: [], resume: {} }), {
      name: 'ealch-progress',
      version: 5,
      storage,
      migrate: () => { throw new Error('bad migration'); },
      partialize: (s) => ({ attempts: s.attempts, sessions: s.sessions, resume: s.resume }),
      onRehydrateStorage: () => (state, error) => {
        if (state && !error) return;
        storage.hold();
        store.setState({ hydrated: true });
      },
    }),
  );
  await store.persist.rehydrate();
  await storage.flush();
  ok(store.getState().hydrated);
  strictEqual(m.files.get('attempts'), '[{"id":"precious"}]');
  deepStrictEqual(m.writes, []);
});

test('healthy hydration round-trips through real persist and writes nothing until something changes', async () => {
  const m = memBackend({ [META_SHARD]: '{"version":5}', attempts: '[{"id":"a"}]', sessions: '[{"d":1}]', resume: '{}' });
  const storage = createShardedStorage<P>({ fields: FIELDS, backend: m.backend, debounceMs: 0 });
  const store = storeOver(storage);
  await store.persist.rehydrate();
  deepStrictEqual(store.getState().attempts, [{ id: 'a' }]);
  store.setState({ hydrated: true });
  await new Promise((r) => setTimeout(r, 5));
  await storage.flush();
  deepStrictEqual(m.writes, [], 'flipping hydrated rewrites no shard');
  store.setState({ attempts: [...store.getState().attempts, { id: 'b' }] });
  await new Promise((r) => setTimeout(r, 5));
  await storage.flush();
  deepStrictEqual(m.writes, ['attempts']);
});
