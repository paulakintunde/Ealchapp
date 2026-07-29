import { useCallback, useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import {
  clampMinutes, decomposeExamMiss, localDay, migrateProgressToV4, mintAttemptId, mintExamResultId,
  type Activity, type AttemptEntry, type AttemptInput, type ErrorEvent, type ErrorInput,
  type ExamResult, type ExamResultInput, type ResumeByMode, type ResumeState, type SessionEntry,
} from './progress.logic';
import type { ExamTask } from '../content/schema';

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
  /** One row per completed ExamTask attempt. Separate from `attempts`: an exam
   *  result is a verdict on a whole task, not a graded response to one item —
   *  see the module note in progress.logic.ts. A closed-task miss's underlying
   *  items still land in `attempts` too, via decomposeExamMiss inside
   *  logExamResult below. */
  examResults: ExamResult[];
  /** The grammar skills the learner has actually missed — the raw material for
   *  home's weak-spots section. Empty on a fresh install, so the section shows an
   *  honest "nothing yet" rather than three invented weaknesses. */
  errors: ErrorEvent[];
  /** The last position left off in each activity — what the hero (and any
   *  secondary "Continue" chips) offer to resume into. Empty on a fresh install
   *  and after a mode's completion clears its own slot, so the hero falls back
   *  to an honest "Begin" recommendation rather than a fabricated one. Per-mode
   *  so leaving La Dictée mid-theme to open a lesson does not erase the
   *  dictée's place — see ResumeByMode in progress.logic.ts. */
  resumeByMode: ResumeByMode;

  setHydrated: () => void;
  /** The session writer. A drill screen calls this when the user finishes it. */
  logSession: (activity: Activity, minutes: number) => void;
  /** The attempt writer. A drill calls this once per graded item, the moment it
   *  grades one — not at the end — so a mid-drill exit still keeps what was done.
   *  `date` is stamped here, like a session. */
  logAttempt: (attempt: AttemptInput) => void;
  /** The exam-result writer. The exam-taking screen calls this once per
   *  completed task. `task` is the ExamTask the result is against — needed
   *  here (not just the result) because a closed-task miss decomposes into
   *  per-item SRS attempts via decomposeExamMiss, reusing logAttempt as the
   *  single write path rather than duplicating the trim/stamp logic. */
  logExamResult: (result: ExamResultInput, task: ExamTask) => void;
  /** The error writer. A drill calls this the moment it can name the grammar
   *  skill a miss belongs to — the date is stamped here, like the other logs. */
  logError: (error: ErrorInput) => void;
  /** Mark one activity's slot as resumable. Called on mount AND again whenever
   *  that screen's position changes (a new card, a new pager page, a new
   *  narration step) — see the per-screen resume effects — so the slot always
   *  reflects where the user actually is, not just where they started. The
   *  local day is stamped here so callers pass only content-stable fields;
   *  `activity` is both the map key and (redundantly, for convenience) part of
   *  the stored row. */
  setResume: (activity: Activity, r: Omit<ResumeState, 'at' | 'activity'>) => void;
  /** Clear one activity's slot — called by that mode's own completion handler,
   *  never on unmount, so a mid-drill exit still leaves something to come back
   *  to. Other modes' slots are untouched. */
  clearResume: (activity: Activity) => void;
  /** Wipe both logs. Account deletion; not a user-facing "reset progress" yet. */
  eraseProgress: () => Promise<void>;
  /** Overwrite the attempt log wholesale with an already-merged, already-
   *  chronologically-sorted array (progress.logic.ts's mergeAttempts). Only
   *  src/services/sync.ts calls this — a screen logs one attempt at a time via
   *  logAttempt, it never replaces the whole log. */
  replaceAttempts: (attempts: AttemptEntry[]) => void;
};

/** Roughly a decade of daily practice. A bound on the persisted blob, not a
 *  product decision — the streak never looks back further than this either. */
const MAX_SESSIONS = 4000;

/** The attempt log grows far faster than the session log (many items per
 *  session), so it gets its own, larger ceiling. The SRS cares about an item's
 *  recent state, which the tail always preserves; the oldest attempts are the
 *  first to fall off. */
const MAX_ATTEMPTS = 20_000;

/** Exams are sat far less often than drills, so this ceiling is generous
 *  relative to MAX_ATTEMPTS without needing to be anywhere near it. */
const MAX_EXAM_RESULTS = 2000;

/** The error log only ever feeds a trailing-7-day ranking, so it needs no deep
 *  history — a generous ceiling that the oldest events fall off the front of. */
const MAX_ERRORS = 4000;

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      sessions: [],
      attempts: [],
      examResults: [],
      errors: [],
      resumeByMode: {},

      setHydrated: () => set({ hydrated: true }),

      setResume: (activity, r) =>
        set({
          resumeByMode: {
            ...get().resumeByMode,
            [activity]: { ...r, activity, at: localDay(new Date()) },
          },
        }),

      clearResume: (activity) => {
        const next = { ...get().resumeByMode };
        delete next[activity];
        set({ resumeByMode: next });
      },

      logSession: (activity, minutes) => {
        const entry: SessionEntry = {
          // The local day is stamped here, at write time, in the timezone the
          // user practised in. See the note on SessionEntry.date.
          date: localDay(new Date()),
          activity,
          // Finishing a drill is worth at least a minute; a zero-minute session
          // would light a week dot while adding nothing to the goal ring.
          // clampMinutes is the backstop below the hook's foreground timing: even
          // if an AppState transition is ever missed, no single session can write
          // an app-left-open duration into the ring.
          minutes: Math.max(1, Math.round(clampMinutes(minutes))),
        };
        const next = [...get().sessions, entry];
        set({ sessions: next.length > MAX_SESSIONS ? next.slice(-MAX_SESSIONS) : next });
      },

      logAttempt: (attempt) => {
        const entry: AttemptEntry = {
          id: mintAttemptId(),
          date: localDay(new Date()),
          ...attempt,
        };
        const next = [...get().attempts, entry];
        set({ attempts: next.length > MAX_ATTEMPTS ? next.slice(-MAX_ATTEMPTS) : next });
      },

      logExamResult: (result, task) => {
        const entry: ExamResult = {
          id: mintExamResultId(),
          date: localDay(new Date()),
          ...result,
        };
        const nextResults = [...get().examResults, entry];
        set({ examResults: nextResults.length > MAX_EXAM_RESULTS ? nextResults.slice(-MAX_EXAM_RESULTS) : nextResults });

        // A closed-task miss decomposes into per-item SRS attempts, reusing
        // logAttempt as the single write path — see decomposeExamMiss.
        if (!result.passed) {
          for (const attempt of decomposeExamMiss(task)) get().logAttempt(attempt);
        }
      },

      logError: (error) => {
        const entry: ErrorEvent = { date: localDay(new Date()), ...error };
        const next = [...get().errors, entry];
        set({ errors: next.length > MAX_ERRORS ? next.slice(-MAX_ERRORS) : next });
      },

      replaceAttempts: (attempts) => {
        // The same trim MAX_ATTEMPTS applies here as in logAttempt — a merge
        // that pulls in a large cross-device history must not silently exceed
        // the ceiling the rest of the app assumes.
        set({ attempts: attempts.length > MAX_ATTEMPTS ? attempts.slice(-MAX_ATTEMPTS) : attempts });
      },

      eraseProgress: async () => {
        set({ sessions: [], attempts: [], examResults: [], errors: [], resumeByMode: {} });
        try {
          await useProgress.persist.clearStorage();
        } catch {
          // Storage is already unreadable — the in-memory wipe still stands.
        }
      },
    }),
    {
      name: 'ealch-progress',
      // Version 2 (Phase 5, CF-02). Version 1 needed no migrate because every
      // change so far was an additive TOP-LEVEL key, and zustand's shallow merge
      // heals those for free by laying the persisted blob over the initial state.
      //
      // `modality` is the first change that is not additive at that level: it
      // lives inside each element of the `attempts` array, where shallow merge
      // never reaches. Old attempts would rehydrate without it and fold into
      // undefined-keyed cards — no crash, just a history that is quietly wrong.
      //
      // The migration itself is in progress.logic.ts, not here, because this file
      // imports zustand and AsyncStorage and therefore cannot be tested; the
      // island can. See migrateProgressToV2/V3 and their tests.
      //
      // Version 3 (Phase 9): `id` became required on AttemptEntry, backfilled by
      // migrateProgressToV3 exactly as `modality` was by migrateProgressToV2.
      // sync.ts determines what still needs pushing by comparing local ids
      // against the server's own id set on each pull, not by a stored cursor,
      // so no other field needs seeding here.
      //
      // Version 4: the single global `resume` slot became `resumeByMode`, one
      // slot per Activity — see ResumeByMode in progress.logic.ts and
      // migrateProgressToV4, which folds any existing v1-v3 `resume` into its
      // own activity's slot.
      version: 4,
      migrate: (persisted, version) => {
        if (version >= 4) return persisted as ReturnType<typeof migrateProgressToV4>;
        return migrateProgressToV4(persisted);
      },
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({
        sessions: s.sessions, attempts: s.attempts, examResults: s.examResults, errors: s.errors,
        resumeByMode: s.resumeByMode,
      }),
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
 *  Minutes are measured, never assumed, and only FOREGROUND minutes count: the
 *  clock banks the time the screen was actually visible and stops while the app
 *  is backgrounded. Measuring raw wall-clock instead would log a three-hour
 *  lunch break as three hours of practice — reintroducing exactly the class of
 *  lie this engine exists to remove. The clock restarts after each log, so a
 *  redo on the same screen is timed from the redo, not from the mount. */
export function useSessionLog(): (activity: Activity) => void {
  // Foreground time banked from segments that have already closed.
  const accumulatedMs = useRef(0);
  // Start of the currently open foreground segment; null while backgrounded.
  const segmentStart = useRef<number | null>(Date.now());
  const logSession = useProgress((s) => s.logSession);

  useEffect(() => {
    const sub = AppState.addEventListener('change', (next) => {
      if (next === 'active') {
        // Returning to the foreground reopens the clock.
        if (segmentStart.current === null) segmentStart.current = Date.now();
      } else if (segmentStart.current !== null) {
        // Going to background/inactive: bank the open segment and stop the clock.
        accumulatedMs.current += Date.now() - segmentStart.current;
        segmentStart.current = null;
      }
    });
    return () => sub.remove();
  }, []);

  return useCallback(
    (activity: Activity) => {
      const openMs = segmentStart.current !== null ? Date.now() - segmentStart.current : 0;
      const minutes = (accumulatedMs.current + openMs) / 60_000;
      logSession(activity, minutes);
      // Restart the clock for a redo on the same screen.
      accumulatedMs.current = 0;
      segmentStart.current = Date.now();
    },
    [logSession]
  );
}
