import { useCallback, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { localDay, type Activity, type AttemptEntry, type AttemptInput, type SessionEntry } from './progress.logic';

// The session log — the record that the user showed up — and the attempt log —
// the record of what they got right or wrong, per item. Every number on the
// today strip is a view over the sessions; the review queue and (soon) the SRS
// are views over the attempts. Nothing here is seeded. All the math lives in
// progress.logic.ts so it stays testable under `node --test`; this file is the
// zustand + AsyncStorage shell and nothing else.

export type ProgressState = {
  hydrated: boolean;
  sessions: SessionEntry[];
  attempts: AttemptEntry[];

  setHydrated: () => void;
  /** The session writer. A drill screen calls this when the user finishes it. */
  logSession: (activity: Activity, minutes: number, items: number) => void;
  /** The attempt writer. A drill calls this once per graded item, the moment it
   *  grades one — not at the end — so a mid-drill exit still keeps what was done.
   *  `date` is stamped here, like a session. */
  logAttempt: (attempt: AttemptInput) => void;
  /** Wipe both logs. Account deletion; not a user-facing "reset progress" yet. */
  eraseProgress: () => Promise<void>;
};

/** Roughly a decade of daily practice. A bound on the persisted blob, not a
 *  product decision — the streak never looks back further than this either. */
const MAX_SESSIONS = 4000;

/** The attempt log grows far faster than the session log (many items per
 *  session), so it gets its own, larger ceiling. The SRS cares about an item's
 *  recent state, which the tail always preserves; the oldest attempts are the
 *  first to fall off. */
const MAX_ATTEMPTS = 20_000;

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      sessions: [],
      attempts: [],

      setHydrated: () => set({ hydrated: true }),

      logSession: (activity, minutes, items) => {
        const entry: SessionEntry = {
          // The local day is stamped here, at write time, in the timezone the
          // user practised in. See the note on SessionEntry.date.
          date: localDay(new Date()),
          activity,
          // Finishing a drill is worth at least a minute; a zero-minute session
          // would light a week dot while adding nothing to the goal ring.
          minutes: Math.max(1, Math.round(minutes)),
          items: Math.max(0, Math.round(items)),
        };
        const next = [...get().sessions, entry];
        set({ sessions: next.length > MAX_SESSIONS ? next.slice(-MAX_SESSIONS) : next });
      },

      logAttempt: (attempt) => {
        const entry: AttemptEntry = {
          date: localDay(new Date()),
          ...attempt,
        };
        const next = [...get().attempts, entry];
        set({ attempts: next.length > MAX_ATTEMPTS ? next.slice(-MAX_ATTEMPTS) : next });
      },

      eraseProgress: async () => {
        set({ sessions: [], attempts: [] });
        try {
          await useProgress.persist.clearStorage();
        } catch {
          // Storage is already unreadable — the in-memory wipe still stands.
        }
      },
    }),
    {
      name: 'ealch-progress',
      // Still version 1: `attempts` is an additive field. zustand's default
      // shallow merge lays the persisted blob over the initial state, so a v1
      // record written before this change (which has no `attempts`) simply keeps
      // the initial `attempts: []` — no migration, and no risk of dropping the
      // existing session history that a version bump without a migrate would run.
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({ sessions: s.sessions, attempts: s.attempts }),
      // Always flip `hydrated`, even when rehydration fails — a corrupt log must
      // never brick startup, it must only mean "no progress yet".
      onRehydrateStorage: () => (state, error) => {
        if (state && !error) state.setHydrated();
        else useProgress.setState({ hydrated: true });
      },
    }
  )
);

/** Times a screen visit and logs it once the user finishes.
 *
 *  Minutes are measured, never assumed: the clock starts when the screen mounts
 *  and stops when the drill reports completion. Hardcoding a per-activity
 *  duration would reintroduce exactly the class of lie this engine exists to
 *  remove. The clock restarts after each log, so a redo on the same screen is
 *  timed from the redo, not from the mount. */
export function useSessionLog(): (activity: Activity, items: number) => void {
  const startedAt = useRef(Date.now());
  const logSession = useProgress((s) => s.logSession);

  return useCallback(
    (activity: Activity, items: number) => {
      const now = Date.now();
      logSession(activity, (now - startedAt.current) / 60_000, items);
      startedAt.current = now;
    },
    [logSession]
  );
}
