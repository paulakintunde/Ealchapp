// T-06-17 (Phase 6 Plan 04, 06-04-01): the post-session report notification
// must never be able to roll back or block the practice-session log write.
// The plan's contract is precise: `useSessionLog()`'s returned callback calls
// `logSession(...)` FIRST, then fires the injected `sessionEndListener` inside
// a try/catch whose catch body is a deliberate no-op.
//
// This is a real behavioral test of that exact closure in useProgress.ts, not
// a source-text guard: it registers a listener with `setSessionEndListener`,
// invokes the real `useSessionLog()` hook, and calls its returned callback.
//
// `useSessionLog()` is a React hook (useRef/useCallback/useEffect), and this
// repo has no React renderer available under `node --test` yet (no RNTL —
// see drillGateWiring.test.ts's header comment). Rather than fall back to a
// source-text guard, this file runs the hook once under a minimal fake
// dispatcher — the same technique `@testing-library/react-hooks` used
// internally before React 18 — via React's own (unstable, internal) current-
// dispatcher slot. See sessionEndListener.test-loader.mjs for the matching
// resolve-hook that lets useProgress.ts's react-native/extensionless imports
// load under plain Node at all.
import { register } from 'node:module';
register('./sessionEndListener.test-loader.mjs', import.meta.url);

import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import * as React from 'react';

// React 19's internal hook dispatcher slot. Set for the duration of exactly
// one hook call, then restored — never touched anywhere else, and never used
// to drive more than a single, synchronous render pass.
const internals = (React as unknown as {
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: { H: unknown };
}).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

/** Runs `fn` once under a fake dispatcher implementing exactly the hooks
 *  `useSessionLog()` and zustand's react binding call: useRef, useCallback,
 *  useEffect (run synchronously, cleanup ignored — this test never unmounts),
 *  useSyncExternalStore (reads the snapshot once, no subscription), and
 *  useDebugValue (no-op). */
function callHookOnce<T>(fn: () => T): T {
  const prevDispatcher = internals.H;
  internals.H = {
    useRef: (init: unknown) => ({ current: init }),
    useCallback: (f: unknown) => f,
    useEffect: (effect: () => void) => { effect(); },
    useSyncExternalStore: (_sub: unknown, getSnapshot: () => unknown) => getSnapshot(),
    useDebugValue: () => {},
  };
  try {
    return fn();
  } finally {
    internals.H = prevDispatcher;
  }
}

test('the session-end listener fires only after the session is already recorded', async () => {
  const { useProgress, useSessionLog, setSessionEndListener } = await import('./useProgress.ts');

  const calls: Array<{ activity: string; minutes: number; sessionsAtCallTime: number }> = [];
  setSessionEndListener((activity, minutes) => {
    // Reading live state (not a closed-over snapshot) is what proves ordering:
    // if the listener ran BEFORE logSession, this would read the pre-write
    // count instead.
    calls.push({ activity, minutes, sessionsAtCallTime: useProgress.getState().sessions.length });
  });

  try {
    const before = useProgress.getState().sessions.length;
    const log = callHookOnce(() => useSessionLog());

    log('flashcards');

    strictEqual(useProgress.getState().sessions.length, before + 1, 'the session was written');
    strictEqual(calls.length, 1, 'the listener fired exactly once');
    strictEqual(calls[0].activity, 'flashcards');
    ok(typeof calls[0].minutes === 'number' && calls[0].minutes >= 0, 'minutes is a real, non-negative number');
    strictEqual(
      calls[0].sessionsAtCallTime,
      before + 1,
      'the listener observed the session log already containing the new entry — it ran AFTER the write, not before or racing it',
    );
  } finally {
    setSessionEndListener(null);
  }
});

test('a session-end listener that throws does not block or roll back the session write', async () => {
  const { useProgress, useSessionLog, setSessionEndListener } = await import('./useProgress.ts');

  setSessionEndListener(() => {
    throw new Error('a notification that refuses to schedule must never cost the user their logged session');
  });

  try {
    const before = useProgress.getState().sessions.length;
    const log = callHookOnce(() => useSessionLog());

    // The plan's exact requirement: calling the callback must not throw to the
    // caller, and the session must still be recorded despite the listener's
    // exception. If useSessionLog's try/catch were ever removed, this
    // assertion fails with the listener's own exception propagating out.
    let thrown: unknown;
    try {
      log('lesson');
    } catch (e) {
      thrown = e;
    }
    strictEqual(thrown, undefined, 'the listener exception must be isolated, never surfaced to the caller');
    strictEqual(useProgress.getState().sessions.length, before + 1, 'the log write survives a throwing listener');
  } finally {
    setSessionEndListener(null);
  }
});
