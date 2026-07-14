import { useCallback, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { localDay, type Activity, type SessionEntry } from './progress.logic';

// The session log — the only record that the user did anything. Every number on
// the today strip is a view over this list; nothing here is seeded. All the math
// lives in progress.logic.ts so it stays testable under `node --test`; this file
// is the zustand + AsyncStorage shell and nothing else.

export type ProgressState = {
  hydrated: boolean;
  sessions: SessionEntry[];

  setHydrated: () => void;
  /** The one writer. A drill screen calls this when the user finishes it. */
  logSession: (activity: Activity, minutes: number, items: number) => void;
  /** Wipe the log. Account deletion; not a user-facing "reset progress" yet. */
  eraseProgress: () => Promise<void>;
};

/** Roughly a decade of daily practice. A bound on the persisted blob, not a
 *  product decision — the streak never looks back further than this either. */
const MAX_SESSIONS = 4000;

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      sessions: [],

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

      eraseProgress: async () => {
        set({ sessions: [] });
        try {
          await useProgress.persist.clearStorage();
        } catch {
          // Storage is already unreadable — the in-memory wipe still stands.
        }
      },
    }),
    {
      name: 'ealch-progress',
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({ sessions: s.sessions }),
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
