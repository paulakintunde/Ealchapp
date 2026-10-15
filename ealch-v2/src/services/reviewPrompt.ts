// Native store-review request (FEEDBACK-02). The only importer of expo-store-review.
// No UI, no report input (D-06, D-11, D-24).
//
// D-03: the pending arm lives in memory only; an app kill clears it.
// D-34: the request is spent and persisted BEFORE the native call, never refunded.
// D-38: every read-modify-write of the persisted state runs on one promise queue.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContent } from './content';
import { usePackSync } from './packs';
import { getConfig, refreshConfigWithin } from './config';
import { recentErrors } from './errors';
import { track } from './analytics';
import { firstOpenAt } from './acquisition';
import { useProgress } from '@/store/useProgress';
import { useStore } from '@/store/useStore';
import { useUI } from '@/store/useUI';
import {
  REVIEW_STATE_KEY,
  addCompleted,
  canArm,
  countsTowardReview,
  decide,
  markArmed,
  pendingLive,
  recordRequest,
  seedCompleted,
  validReviewState,
  type Pending,
  type ReviewState,
} from './reviewPrompt.logic';

let queue: Promise<unknown> = Promise.resolve();
function serial<T>(fn: () => Promise<T>): Promise<T> {
  const run = queue.then(fn, fn);
  queue = run.catch(() => {});
  return run;
}

let pending: Pending | null = null;
let lastSurfaceAt: number | null = null;

export function notePaywallShown(): void {
  lastSurfaceAt = Date.now();
}

// A banner appearing counts as a shown surface (D-05).
useUI.subscribe((s, prev) => {
  if (s.banner && s.banner !== prev.banner) lastSurfaceAt = Date.now();
});

async function writeState(s: ReviewState): Promise<boolean> {
  try {
    await AsyncStorage.setItem(REVIEW_STATE_KEY, JSON.stringify(s));
    return true;
  } catch {
    return false;
  }
}

/** D-04: the seed runs only once progress has hydrated and content (base + pack sync) is ready. */
function seedReady(): boolean {
  return useProgress.persist.hasHydrated() && useContent.getState().hydrated && usePackSync.getState().status === 'idle';
}

async function readState(): Promise<ReviewState> {
  let state: ReviewState;
  try {
    const raw = await AsyncStorage.getItem(REVIEW_STATE_KEY);
    state = validReviewState(raw ? JSON.parse(raw) : null);
  } catch {
    state = validReviewState(null);
  }
  if (!state.seeded && seedReady()) {
    const ids = Object.entries(useProgress.getState().lessonMissions ?? {})
      .filter(([id, rec]) => countsTowardReview(id) && Array.isArray(rec?.done) && rec.done.length > 0)
      .map(([id]) => id);
    state = seedCompleted(state, ids);
    await writeState(state);
  }
  return state;
}

export function noteLessonCompleted(lessonId: string): Promise<void> {
  return serial(async () => {
    const state = await readState();
    const next = addCompleted(state, lessonId);
    if (next !== state) await writeState(next);
  }).catch(() => {});
}

export function armReviewPrompt(lessonId: string): Promise<void> {
  return serial(async () => {
    const state = await readState();
    if (!canArm(state, lessonId)) return;
    if (!(await writeState(markArmed(state, lessonId)))) return;
    pending = { lessonId, at: Date.now() };
  }).catch(() => {});
}

export function maybeRequestReview(): Promise<void> {
  const now = Date.now();
  if (!pending || !pendingLive(pending, now)) {
    pending = null;
    return Promise.resolve();
  }
  const taken = pending;
  pending = null;
  return serial(async () => {
    const cfg = getConfig();
    if (!cfg.reviewPromptOn) return;
    const reachable = await refreshConfigWithin(4000);
    const state = await readState();
    const at = Date.now();
    const decision = decide({
      flagOn: getConfig().reviewPromptOn,
      guest: useStore.getState().accountType === 'guest',
      lessonId: taken.lessonId,
      completedCount: state.completed.length,
      installAt: await firstOpenAt(),
      now: at,
      requests: state.requests,
      errorsThisSession: recentErrors().length,
      offline: !reachable,
      bannerShowing: useUI.getState().banner != null,
      lastSurfaceAt,
    });
    if (!decision.ask) return;
    let StoreReview: typeof import('expo-store-review');
    try {
      // Lazy require: a binary without the native module must not crash at import time.
      StoreReview = require('expo-store-review');
      if (!(await StoreReview.isAvailableAsync())) return;
    } catch {
      return;
    }
    if (!(await writeState(recordRequest(state, at)))) return;
    track('review_requested', { lesson_id: taken.lessonId });
    try {
      await StoreReview.requestReview();
    } catch {
      // A rejection is not refunded and never reaches the error ring (D-34).
    }
  }).catch(() => {});
}
