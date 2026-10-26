import type { PersistStorage, StorageValue } from 'zustand/middleware';

// The progress store's persistence, as a zustand PersistStorage that writes one
// shard per top-level field instead of one blob.
//
// It replaces `createJSONStorage(() => AsyncStorage)`, which kept the whole
// progress log — up to 20,000 attempts — in a single AsyncStorage row. That row
// hit two Android ceilings well before the log's own caps: AsyncStorage's 6 MB
// database limit, and SQLite's ~2 MB CursorWindow, past which a READ of the row
// fails. A failed read then took the error branch of onRehydrateStorage, whose
// `setState({ hydrated: true })` persisted the empty initial state over the
// stored log (zustand 5's persist wraps api.setState to write through). So the
// heaviest learners were the ones who would lose everything.
//
// Three rules this module enforces:
//   1. A shard is rewritten only when its value changed (by reference — the
//      store always replaces a field, never mutates it), so logging one attempt
//      no longer re-serialises resume slots and mission records.
//   2. Unreadable is not the same as corrupt. A shard whose text will not parse
//      is quarantined (kept for recovery, then cleared) and that field alone
//      starts empty. A backend that throws on read, or a migrate that throws,
//      leaves everything on disk untouched and `hold()` stops every write for
//      the session, so a transient failure costs one session's progress instead
//      of all of it.
//   3. `meta` (the persist version) is written last. A first launch after this
//      change imports the legacy AsyncStorage blob; until meta exists that
//      import is simply redone, so an interrupted import cannot strand half a
//      log.
//
// The file-system backend lives in progressStorage.ts; everything here runs
// under `node --test` with an in-memory backend.

/** Where shards live. `read` resolves null for a shard that does not exist and
 *  throws only when the shard exists but cannot be read. */
export type ShardBackend = {
  read(shard: string): Promise<string | null>;
  write(shard: string, text: string): Promise<void>;
  remove(shard: string): Promise<void>;
  /** Keep an unparseable shard's text somewhere a later fix can find it, then
   *  clear the shard itself. */
  quarantine(shard: string, text: string): Promise<void>;
};

/** The single-blob store this replaces. Read once, removed after a complete import. */
export type LegacySource = {
  read(): Promise<string | null>;
  remove(): Promise<void>;
};

export type Timer = {
  set(fn: () => void, ms: number): unknown;
  clear(handle: unknown): void;
};

export type ShardedStorage<S> = PersistStorage<S> & {
  /** Stop all writes for the rest of the session. Called when hydration fails. */
  hold(): void;
  readonly held: boolean;
  /** Write anything pending now. Called when the app leaves the foreground. */
  flush(): Promise<void>;
};

export const META_SHARD = 'meta';

/** Long enough to coalesce a burst of graded items into one write, short enough
 *  that a crash right after an answer loses at most that burst. */
export const DEFAULT_DEBOUNCE_MS = 400;

const realTimer: Timer = {
  set: (fn, ms) => setTimeout(fn, ms),
  clear: (h) => clearTimeout(h as ReturnType<typeof setTimeout>),
};

export function createShardedStorage<S extends Record<string, unknown>>(opts: {
  fields: readonly (keyof S & string)[];
  backend: ShardBackend;
  legacy?: LegacySource;
  debounceMs?: number;
  timer?: Timer;
  onError?: (where: string, e: unknown) => void;
}): ShardedStorage<S> {
  const { fields, backend, legacy } = opts;
  const debounceMs = opts.debounceMs ?? DEFAULT_DEBOUNCE_MS;
  const timer = opts.timer ?? realTimer;
  const onError = opts.onError ?? (() => {});

  /** What the disk holds (or is about to hold) per field. */
  const written = new Map<string, unknown>();
  let writtenVersion: number | undefined;
  let pending = new Map<string, unknown>();
  let pendingVersion: number | undefined;
  let handle: unknown = null;
  let held = false;
  let chain: Promise<void> = Promise.resolve();

  const cancelTimer = () => {
    if (handle !== null) timer.clear(handle);
    handle = null;
  };

  const writeAll = async (state: Partial<S>, version: number | undefined) => {
    for (const f of fields) await backend.write(f, JSON.stringify(state[f] ?? null));
    await backend.write(META_SHARD, JSON.stringify({ version: version ?? 0 }));
  };

  const importLegacy = async (): Promise<StorageValue<S> | null> => {
    if (!legacy) return null;
    const text = await legacy.read();
    if (text === null) return null;
    let parsed: StorageValue<S>;
    try {
      parsed = JSON.parse(text) as StorageValue<S>;
      if (!parsed || typeof parsed !== 'object' || !parsed.state || typeof parsed.state !== 'object') {
        throw new Error('legacy progress blob has no state');
      }
    } catch (e) {
      // Corrupt, not unreadable: keep it for recovery and start clean, rather
      // than failing the same parse on every launch forever.
      onError('legacy-parse', e);
      try { await backend.quarantine('legacy', text); await legacy.remove(); } catch (q) { onError('legacy-quarantine', q); }
      return null;
    }
    try {
      await writeAll(parsed.state, parsed.version);
      for (const f of fields) written.set(f, parsed.state[f]);
      writtenVersion = parsed.version;
      await legacy.remove();
    } catch (e) {
      // The legacy blob stays authoritative until a later launch completes the
      // import; the hydrated state below is still the real one.
      onError('legacy-import', e);
      written.clear();
      writtenVersion = undefined;
    }
    return parsed;
  };

  const flushNow = (): Promise<void> => {
    cancelTimer();
    if (held || (pending.size === 0 && pendingVersion === undefined)) return chain;
    const work = pending;
    const version = pendingVersion;
    pending = new Map();
    pendingVersion = undefined;
    chain = chain.then(async () => {
      for (const [f, v] of work) {
        if (held) return;
        try {
          await backend.write(f, JSON.stringify(v ?? null));
        } catch (e) {
          // Forget what we thought was on disk, so the next change to this
          // field rewrites it rather than trusting a write that never landed.
          if (written.get(f) === v) written.delete(f);
          onError(`write:${f}`, e);
        }
      }
      if (version !== undefined && !held) {
        try {
          await backend.write(META_SHARD, JSON.stringify({ version }));
        } catch (e) {
          if (writtenVersion === version) writtenVersion = undefined;
          onError('write:meta', e);
        }
      }
    });
    return chain;
  };

  return {
    get held() {
      return held;
    },

    hold() {
      held = true;
      cancelTimer();
      pending = new Map();
      pendingVersion = undefined;
    },

    flush: flushNow,

    async getItem() {
      // A throw from here is the "unreadable" case: zustand routes it to
      // onRehydrateStorage's error branch, which holds writes.
      const metaText = await backend.read(META_SHARD);
      if (metaText === null) return importLegacy();
      const meta = JSON.parse(metaText) as { version?: unknown };
      const version = typeof meta?.version === 'number' ? meta.version : 0;
      const state: Partial<S> = {};
      for (const f of fields) {
        const text = await backend.read(f);
        if (text === null) continue;
        try {
          const value = JSON.parse(text);
          (state as Record<string, unknown>)[f] = value;
          written.set(f, value);
        } catch (e) {
          onError(`parse:${f}`, e);
          await backend.quarantine(f, text);
        }
      }
      writtenVersion = version;
      return { state: state as S, version };
    },

    setItem(_name, value) {
      if (held) return;
      for (const f of fields) {
        const v = value.state[f];
        if (written.has(f) && written.get(f) === v) continue;
        written.set(f, v);
        pending.set(f, v);
      }
      if (value.version !== writtenVersion) {
        writtenVersion = value.version;
        pendingVersion = value.version ?? 0;
      }
      if (pending.size === 0 && pendingVersion === undefined) return;
      cancelTimer();
      handle = timer.set(() => {
        handle = null;
        void flushNow();
      }, debounceMs);
    },

    async removeItem() {
      // An explicit erase (account deletion) is honoured even while held: it is
      // the user's intent, and afterwards the empty state is safe to persist.
      cancelTimer();
      pending = new Map();
      pendingVersion = undefined;
      await chain;
      written.clear();
      writtenVersion = undefined;
      // meta first: from here on a crash reads as "nothing stored", and the
      // next write rewrites every shard because `written` is empty.
      await backend.remove(META_SHARD);
      for (const f of fields) await backend.remove(f);
      if (legacy) await legacy.remove();
      held = false;
    },
  };
}

/** Wrap any PersistStorage so hydration failure can stop it writing. For the
 *  settings store, whose small blob stays in AsyncStorage. */
export function holdable<S>(inner: PersistStorage<S>): PersistStorage<S> & { hold(): void; readonly held: boolean } {
  let held = false;
  return {
    get held() {
      return held;
    },
    hold() {
      held = true;
    },
    getItem: (name) => inner.getItem(name),
    setItem: (name, value) => (held ? undefined : inner.setItem(name, value)),
    removeItem: async (name) => {
      await inner.removeItem(name);
      held = false;
    },
  };
}
