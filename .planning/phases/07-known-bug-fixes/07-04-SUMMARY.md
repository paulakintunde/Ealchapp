# Plan 07-04 Summary: TTS Backgrounding Pause/Resume (BUG-01)

**Status:** Complete
**Requirement closed:** BUG-01

## What was built

`tts.ts` now stops the voice when the app is backgrounded and brings it back appropriately on foreground, on both playback paths:

- **Remote (ElevenLabs / `expo-audio`)** — true pause-and-resume from position. Backgrounding calls `remotePlayer?.pause()`; foregrounding calls `remotePlayer?.play()`. Critically, this pause path does **not** increment `generation` — `stop()` does, and every resume-relevant callback in the file (`playRemote`'s `playbackStatusUpdate` listener, `speak()`'s post-synthesis check) gates on `myGen === generation`. Reusing `stop()` for backgrounding would have preserved the player's position but silently broken the ability to resume (the file's documented landmine, per `07-RESEARCH.md` Pitfall 4).
- **Device (`expo-speech`)** — no native resume-from-word API exists on either platform, so backgrounding calls `Speech.stop()` and foregrounding restarts the current line from its beginning via `tts.speak(current.text, current.opts)`. This divergence from the remote path is the approved design (D-05/D-06 in `07-CONTEXT.md`), not an oversight.

A new module-level `current` record (`{ text, opts, path }`, typed via a newly extracted `SpeakOpts` type — previously an inline object literal duplicated only in `speak()`'s signature) remembers the in-flight utterance so the device path has something to replay. It's set at both play sites in `speak()`, and cleared in `finishOk`, `finishFail`, and `stop()` so a later foreground never replays a line nobody is waiting for.

A `paused: 'device' | 'remote' | null` flag tracks whether a pause is currently in effect. The no-start retry timer in `attempt()`'s grace window (`START_GRACE_MS` = 450ms) now also bails when `paused` is set — without this, backgrounding within 450ms of a speak start would have fired a retry that spoke into a backgrounded app.

One `AppState.addEventListener('change', ...)` listener is registered at module scope, at the bottom of `tts.ts`, once at import time, never removed — matching the existing pattern of `remotePlayer`/`generation` already being plain module-level mutable state in this file. `tts.ts` has no React import and no component lifecycle, and `app/_layout.tsx` (which calls `tts.prime()`) has no `AppState` subscription to attach alongside, so module-scope registration (rather than an exported `attachLifecycle()` called from a component) was the correct placement per `07-RESEARCH.md`'s resolved open question. `state !== 'active'` (i.e. any non-`'active'` transition, covering iOS's transient `'inactive'` too) triggers `pauseForBackground()`; `'active'` triggers `resumeFromForeground()`.

## Key files

- `ealch-v2/src/services/ttsAppState.test.ts` (created) — 5 source-text-assertion tests (`node:test`) pinning: the listener is registered at module scope (not inside a dead function — the `^`-anchored multiline regex is the load-bearing check); both `pauseForBackground(`/`resumeFromForeground(` are wired into the listener body; the module remembers the current utterance and forgets it in `stop()`; `pauseForBackground()` never bumps `generation` (the assertion this whole file exists for); and the two resume paths diverge exactly as designed (remote calls `.play()`, device calls `tts.speak(`, and no remote resume calls `seekTo(0)`, which would make it a restart, not a resume).
- `ealch-v2/src/services/tts.ts` (modified) — import, new module state (`current`, `paused`), extracted `SpeakOpts` type, `current`/`paused` bookkeeping at both `speak()` play sites and in `finishOk`/`finishFail`, the grace-timer `paused` bail, the two new `pauseForBackground()`/`resumeFromForeground()` methods placed immediately after `stop()`, and the module-scope `AppState.addEventListener` registration at the bottom of the file.

## Verification performed

- `node --test src/services/ttsAppState.test.ts` — RED before the tts.ts edit (5 failing, confirmed the test file alone was committed with `tts.ts` unchanged), GREEN after (`pass 5`, `fail 0`).
- `node --test src/services/tts.logic.test.ts` — unaffected, 6/6 pass.
- `npm run typecheck` (`tsc --noEmit`) — clean, no errors. The extracted `SpeakOpts` type resolved correctly everywhere `speak()`'s options were previously typed inline.
- `npm test` (full suite) — 5424 tests, 0 failures.
- Targeted greps for every plan acceptance criterion: `AppState` import present, listener registered at column 0 (exactly one match), `generation += 1` count unchanged at 2 (one in `speak()`, one in `stop()` — the new pause path adds none), `current = null` appears exactly 3 times (`finishOk`, `finishFail`, `stop()`), and the grace-timer bail reads `started || settled || paused`.

## Deviations from the plan

None in substance. Two minor procedural notes:

1. This worktree had no `node_modules` (fresh worktree, gitignored). Ran `npm ci` (from the existing `package-lock.json`, no dependency changes) before `npm run typecheck`/`npm test` could execute — required to satisfy the plan's own verification commands, not a scope change.
2. `.planning/phases/07-known-bug-fixes/07-PATTERNS.md`, listed in this task's `<files_to_read>`, does not exist in this worktree/commit (`39c0c447`). Its content was not needed: the plan's own `<interfaces>` section already inlines the `useReadingBrightness.ts` AppState precedent and the exact `tts.ts` line references needed for both tasks.

## Landmine for downstream work (07-05, device verification)

**Editing `tts.ts` breaks Android TTS hot-reload in dev.** This was already known from prior-session memory and is called out in the plan. After this change, a Metro hot-reload will leave the device TTS engine not-bound and silent — that looks exactly like a broken fix but isn't one. Plan 07-05's device verification of this fix (backgrounding/foregrounding on both playback paths) **must use a full app reload or rebuild, never hot-reload-and-check**. Nothing in this plan (07-04) required a device; both tasks here were verified entirely via `node --test`/`tsc`/`npm test`.

## Requirements status

- **BUG-01**: Closed. `tts.ts` imports `AppState` and registers a `change` listener at module scope; `pauseForBackground()` pauses the remote player or stops the device engine without ever touching `generation`; `resumeFromForeground()` plays the remote player from position or replays the device line from its start; `current` is set at both play sites and cleared on settle/stop; the no-start retry bails when paused. All automated verification (5 structural tests, full 5424-test suite, typecheck) is green. Actual on-device audio behavior remains a manual checkpoint owned by plan 07-05, per this phase's validation architecture (source-text assertions are the only automatable proof pre-TEST-02).
