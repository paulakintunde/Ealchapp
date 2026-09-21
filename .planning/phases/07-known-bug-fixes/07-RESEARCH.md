# Phase 7: Known Bug Fixes - Research

**Researched:** 2026-09-21
**Domain:** React Native/Expo interruption-safety (AsyncStorage checkpointing, AppState lifecycle) + regression-test pinning
**Confidence:** HIGH (all findings verified by direct file/commit inspection in this repo — no external library research needed)

## Summary

This phase is pure gap-filling against a CONTEXT.md that already locked every architectural decision. All three bugs are small, mechanical, single-file(ish) changes verified against the current codebase:

**BUG-02** (exam draft persistence): `exam-section.tsx` currently holds `answers`/`texts`/`spoken`/`coverage`/`debate` in plain `useState` with zero persistence. `submit()` (lines 149-252) is a single sequential `for` loop over `tasks` with no per-task graded/ungraded tracking and no idempotency guard beyond the one-shot `submitted` ref. `AsyncStorage` is NOT currently imported in this file — it needs a fresh import, following the raw-get/set-with-try/catch pattern already used in `src/services/config.ts` and `src/services/analytics.ts` (not the zustand-`persist` pattern `useProgress.ts` uses — CONTEXT.md D-07 explicitly excludes that). One correction to CONTEXT.md's canonical-refs wording: `exam_attempts`' primary key is `(user_id, paper_id, skill)` — there is no `attemptId` column in the schema. The draft's storage key must be derived as `exam-draft:{paperId}:{skill}`, not a literal row id that doesn't exist.

**BUG-03** (STT regression test): trivial — `continuous: false` is already hardcoded at `stt.ts` line 298 (unconditional, correct). The exact test this phase re-adds existed before, verbatim, in `sttLongForm.test.ts` at commit `8cd0be3`, and was deleted by the revert commit `17f1fc2` along with the whole `longForm` feature it guarded. The old test's source-text-assertion technique (comment-stripping regex + two `ok()` assertions) is recovered below verbatim and is ready to be dropped into a new file.

**BUG-01** (TTS backgrounding): `tts.ts` has no `AppState` import and no pause/resume surface today — `stop()` (lines 449-464) calls `remotePlayer?.pause()` internally (not a public resume-capable pause) and `Speech.stop()` (irreversible on the device path). Implementing D-05/D-06 requires: (a) importing `AppState`, (b) tracking the last-spoken utterance's text/opts in module state so the device path can restart it, (c) exposing a real `resume()` that calls `remotePlayer.play()` on the ElevenLabs path. `useReadingBrightness.ts` and `ExamClock.tsx` both give copy-paste-ready `AppState.addEventListener('change', ...)` patterns.

**Primary recommendation:** Execute in the CONTEXT.md-mandated priority order (BUG-02 → BUG-03 → BUG-01). BUG-03 is nearly free (recovers a deleted test verbatim). BUG-02 is the only one that touches business logic significantly and should get the most task granularity in the plan. BUG-01 is confined to `tts.ts` alone but carries the documented Android-hot-reload landmine — plan a full-reload manual verification step, not hot-reload-and-check.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Exam draft checkpoint (BUG-02) | Client (RN screen + AsyncStorage) | — | Pure device-local durability; no server involvement — `exam_attempts` stays audit-only per Phase 4 D-05/D-06 |
| Exam submit dedupe-on-retry (BUG-02) | Client (`exam-section.tsx` `submit()`) | Client (`useProgress` read) | Dedupe decision reads already-logged results from the local `useProgress` store; server (`grade-exam`) has no idempotency of its own to lean on |
| STT regression test (BUG-03) | Build/CI (source-text assertion, `node --test`) | — | No runtime component; a static guard against reintroducing a conditional `continuous` value |
| TTS backgrounding pause/resume (BUG-01) | Client (`tts.ts` service, OS `AppState`) | — | Playback state lives entirely in the `expo-audio`/`expo-speech` client modules; no server involvement |

## User Constraints (from CONTEXT.md)

### Locked Decisions

**BUG-02 — What gets persisted, and when**
- D-01: Do NOT persist on every keystroke/onChange. Do NOT wait until final submit either.
- D-02: Persist a structured per-task draft, checkpointed on (a) step/question-transition, (b) debounced inactivity ~1500ms, (c) app backgrounding/component-unmount (flush pending draft via `AppState`). Keep active UI on fast `useState`; checkpoint asynchronously at these boundaries.
- D-09: For spoken tasks, persist transcript text only (what `examGrader.grade()` sends) — not `audioUri` from STT's `audioend` event.

**BUG-02 — Storage location & cleanup**
- D-07: New, dedicated AsyncStorage key scoped to the `exam_attempts` row id (e.g. `exam-draft:{attemptId}`), holding `{taskId: response}` for the current section — NOT folded into `useProgress`'s persisted zustand store.
- D-08: Delete the draft once every task in the section has been successfully graded (`submit()` completes normally).

**BUG-02 — Recovery on relaunch**
- D-03: On relaunch with an orphaned persisted-but-ungraded draft, restore it into `exam-section.tsx` state so the user finishes normally and hits submit themselves — do NOT auto-resubmit. Extends the existing `resumeByMode` pattern.
- D-04: `submit()` grades sequentially in one loop; a crash can leave some tasks graded, others not. Retried `submit()` must skip already-graded tasks (avoid double-spending `coach_bump` quota, avoid duplicate exam-report results). Only ungraded, still-drafted tasks are sent to `grade-exam` on retry.
- D-10: Recovery is silent — no banner/toast/extra screen. Matches `resumeByMode`'s existing silent restore elsewhere.

**BUG-01 — Pause/resume semantics**
- D-05: True pause + resume from position (not stop-and-restart) on the path that supports it. `tts.ts`'s ElevenLabs/`expo-audio` path exposes `AudioPlayer.pause()`/`.play()` internally (only `stop()` is public today) — backgrounding pauses, foregrounding plays, same position.
- D-06: `expo-speech` device-engine path has no native resume-from-word API. On that path, foreground-resume restarts the current line/sentence from the beginning. This is the one place the two playback paths diverge.
- No `AppState` listener exists in `tts.ts` today; add one following `useReadingBrightness.ts`/`ExamClock.tsx`.

**BUG-03 — Regression test scope**
- D-11: Re-add a pinned assertion that `continuous: false` is hardcoded in `stt.ts` (matching the deleted `sttLongForm.test.ts`, adapted — no `opts.longForm` branch exists anymore), AND add a second assertion that fails if a conditional/flag-driven `continuous` value is reintroduced. Follow the `node --test`/colocated `*.test.ts`/source-text-assertion-via-`readFileSync` convention (see `examAttemptWiring.test.ts`). No Jest/RNTL yet (TEST-02, later phase).

### Claude's Discretion
- Exact debounce timing beyond "~1500ms" if a different value proves better.
- New test file name/location for the STT regression test (old `sttLongForm.test.ts` name may not fit — the long-form-specific branching it tested no longer exists).
- Exact shape of the per-task draft dedupe check in D-04 (reading `useProgress` directly vs. the draft object tracking its own graded/ungraded flags per task).

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within the three bugs' scope. No scope-creep redirects were needed.

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| BUG-02 | A user's exam response is persisted to storage before grading is requested, so force-stopping/crashing mid-exam does not lose the response | `exam-section.tsx` state shape, `submit()` loop, `examGrader.grade()` body construction, `useProgress.logExamResult`/`resumeByMode` patterns, and the `exam_attempts` schema correction (no `attemptId` column) documented below |
| BUG-03 | `continuous: false` STT behavior has an automated regression test | Deleted `sttLongForm.test.ts` recovered verbatim from commit `8cd0be3`; current `stt.ts` line 298 confirmed already correct; `examAttemptWiring.test.ts` convention confirmed |
| BUG-01 | Audio/TTS playback pauses automatically when backgrounded and resumes on foreground | `tts.ts` full read (`stop()`, `playRemote()`, device `attempt()` closure, module-level state); `useReadingBrightness.ts` and `ExamClock.tsx` AppState patterns confirmed as copy-paste templates |

## Standard Stack

No new libraries needed for any of the three bugs — this phase is entirely additive logic on top of already-installed dependencies.

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `@react-native-async-storage/async-storage` | (already installed — see `package.json`) | BUG-02's draft persistence | Already the app's only device-local KV store; used raw (not via zustand) in `config.ts`/`analytics.ts`, which is the pattern BUG-02 should follow per D-07 |
| `react-native` `AppState` | bundled with RN | BUG-02 background-flush trigger; BUG-01 pause/resume trigger | Already used identically in `useReadingBrightness.ts`, `ExamClock.tsx`, and `useProgress.ts`'s `useSessionLog` |
| `expo-audio` `AudioPlayer` | (already installed — imported lazily in `tts.ts` as `audioMod`) | BUG-01's ElevenLabs-path true pause/resume | `pause()`/`play()` are already used internally in `tts.ts` (`playRemote`, `stop()`) — no new API surface |
| `expo-speech` | (already installed) | BUG-01's device-path restart-on-foreground | Already the sole device TTS engine in `tts.ts` |
| `node:test` / `node:assert` / `node:fs` | Node builtin (repo runs on Node via `node --test`) | BUG-03's regression test | Exclusively-used test runner in this repo — see `package.json`'s `"test"` script and every existing `*.test.ts` file; no Jest/RNTL exists yet (TEST-02 is a later, unstarted phase) |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Raw `AsyncStorage.getItem`/`setItem` for the draft (D-07) | Extending `useProgress`'s zustand `persist` store | Explicitly rejected by D-07 — attempt-scoped drafts don't belong in a store whose `partialize` ships every key on every write; a dedicated key keeps writes small and isolated |
| Debounced inactivity via a hand-rolled `setTimeout` | A debounce utility library (e.g. `lodash.debounce`) | No debounce utility exists in this codebase today (checked: not in `package.json` dependencies) — a local `setTimeout`/`clearTimeout` pair (already the idiom used for `START_GRACE_MS` in `tts.ts`) is simpler and needs no new dependency |

**Installation:** None required — everything above is already in `ealch-v2/package.json`.

## Architecture Patterns

### System Architecture Diagram (BUG-02 draft lifecycle)

```
exam-section.tsx mounts
        │
        ▼
  [on mount] ── read AsyncStorage `exam-draft:{paperId}:{skill}` ──▶ found? ──▶ restore into
        │                                                                        answers/texts/spoken/
        │                                                                        coverage/debate state
        ▼                                                                        (silent, D-10)
  user answers tasks (fast useState, unchanged)
        │
        ├─ task-transition (nav to next task) ──────────┐
        ├─ 1500ms debounced inactivity on text input ────┼──▶ writeDraft() ──▶ AsyncStorage.setItem
        ├─ AppState → background / component unmount ────┘         (structured {taskId: response},
        │                                                            transcript-only for PO, D-09)
        ▼
  user taps Submit ──▶ submit()
        │
        ▼
  for each task in tasks:
        │
        ├─ already graded (per useProgress / draft's own flag, D-04)? ──▶ skip, do not re-call grade-exam
        │
        ├─ not graded ──▶ closed/MCQ: scoreClosedTask() (local, no network)
        │              └─ open/spoken: examGrader.grade() ──▶ grade-exam edge function
        │
        ▼
  all tasks graded ──▶ AsyncStorage.removeItem(`exam-draft:{paperId}:{skill}`) (D-08)
        │
        ▼
  router.replace('/exam-report')
```

### Recommended Project Structure

No new files/folders — all three fixes are edits to existing files:

```
ealch-v2/
├── app/
│   └── exam-section.tsx         # BUG-02: draft read/write/clear + submit() dedupe
├── src/
│   ├── services/
│   │   ├── stt.ts                # BUG-03: no code change (continuous: false already correct)
│   │   ├── tts.ts                # BUG-01: AppState listener + pause/resume/restart
│   │   └── <new>.test.ts         # BUG-03: recovered regression test (name is Claude's discretion)
```

### Pattern 1: Raw AsyncStorage read/write with try/catch (BUG-02's draft store)
**What:** Direct `AsyncStorage.getItem`/`setItem`/`removeItem` calls, JSON-stringified, wrapped in try/catch that degrades silently on failure — never a zustand `persist` wrapper.
**When to use:** BUG-02's draft key exactly — small, attempt-scoped, ephemeral data that must not participate in the app's main progress-sync/migration machinery.
**Example (existing precedent, `config.ts`):**
```typescript
// Source: ealch-v2/src/services/config.ts lines 116-141 (existing pattern to replicate)
const CACHE_KEY = 'ealch-remote-config';
try {
  await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(current));
} catch {
  // fall through to cache
}
try {
  const cached = await AsyncStorage.getItem(CACHE_KEY);
  if (cached) current = { ...DEFAULTS, ...JSON.parse(cached) };
} catch {
  // keep defaults
}
```
**Applied to BUG-02:** key is `` `exam-draft:${paperId}:${skill}` `` (see schema correction below — NOT `exam-draft:{attemptId}`, since no `attemptId` column exists). Value shape: `{ taskId: string; response: { texts?: string; answers?: Record<string, number | null>; transcript?: string; coverage?: Coverage; debate?: DebateReport } }[]` or an equivalent per-taskId record — exact shape is Claude's discretion per CONTEXT.md, but must be derivable from/mergeable into `exam-section.tsx`'s existing `Answers`/`Texts`/`spoken`/`coverage`/`debate` state shapes (see lines 59-61, 92-138 of `exam-section.tsx`).

### Pattern 2: AppState background-flush (BUG-02) / pause-resume (BUG-01)
**What:** `AppState.addEventListener('change', (next) => { ... })`, cleaned up via `sub.remove()` in a `useEffect` return.
**When to use:** Both BUG-02 (flush draft on backgrounding) and BUG-01 (pause/resume playback on backgrounding/foregrounding).
**Example (existing precedent, symmetric active/background — `useReadingBrightness.ts` lines 86-92):**
```typescript
// Source: ealch-v2/src/hooks/useReadingBrightness.ts lines 86-92
useEffect(() => {
  const sub = AppState.addEventListener('change', (state) => {
    if (state === 'active') void boost();
    else void restore();
  });
  return () => sub.remove();
}, [boost, restore]);
```
**Example (existing precedent, foreground-only reaction — `ExamClock.tsx` lines 53-58):**
```typescript
// Source: ealch-v2/src/components/ExamClock.tsx lines 53-58
useEffect(() => {
  const sub = AppState.addEventListener('change', (s) => {
    if (s === 'active') setNow(Date.now());
  });
  return () => sub.remove();
}, []);
```
BUG-01's `tts.ts` is a plain module (not a React component/hook) — the `AppState` listener must be registered once at module scope (or via an exported `init()`-style function called from app root), not inside a `useEffect`, since `tts.ts` has no React lifecycle today. Confirm there is an app-root mount point already calling something like `tts.prime()` at startup (grep for `tts.prime(` call sites) to attach the listener registration alongside it, OR register unconditionally at module load (matches the pattern of `remotePlayer`/`generation` already being plain module-level mutable state in this file).

### Pattern 3: Source-text-assertion regression test (BUG-03)
**What:** `readFileSync` the target source file, regex/string-match assertions via `node:assert`'s `ok()`, no component rendering.
**When to use:** BUG-03 exactly — this is the *only* test style available pre-TEST-02.
**Example — the exact test being recovered, verbatim from commit `8cd0be3` (`sttLongForm.test.ts`, later deleted by `17f1fc2`):**
```typescript
// Source: git show 8cd0be3:ealch-v2/src/services/sttLongForm.test.ts (deleted by 17f1fc2)
const here = dirname(fileURLToPath(import.meta.url));
const src = () => readFileSync(resolve(here, 'stt.ts'), 'utf8');

test('the recogniser is never asked for continuous mode', () => {
  // Measured on a Pixel 6, 2026-09-08: `continuous: true` makes the native
  // start() throw, the catch resolves `available: false`, and the exam reports
  // "Microphone unavailable" without ever opening a microphone session — while
  // the drill, four seconds either side, opens one and transcribes perfectly.
  //
  // The flag was never what made a pause survivable. The segment loop is. This
  // pins the lesson so nobody reaches for the obvious-looking option again.
  // Comments are stripped first: the note above deliberately QUOTES the option
  // it forbids, and a guard that cannot tell prose from code would fire on the
  // explanation of why it exists. It caught exactly that on its first run.
  const code = src().replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  ok(/continuous: false,/.test(code), 'continuous must be false');
  ok(!/continuous: (true|!!|opts\.)/.test(code), 'continuous must never be conditioned on long-form');
});
```
This can be dropped in nearly unmodified (imports of `test`/`ok`/`readFileSync`/`dirname`/`resolve`/`fileURLToPath` match `examAttemptWiring.test.ts`'s existing convention exactly — see Code Examples below for the full import block to copy). The only required edit: the comment inside the test currently says "the drill, four seconds either side... while the exam..." which references the now-removed long-form distinction; CONTEXT.md doesn't require preserving that exact prose, only the two assertions and the historical framing (commit refs `8cd0be3`/`17f1fc2`).

### Anti-Patterns to Avoid
- **Persisting the draft on every `onChangeText`/`onSelect` (D-01):** bridge-thrashes for typing/transcription; explicitly forbidden.
- **Auto-resubmitting a restored draft to `grade-exam` (D-03):** must restore into UI state only, never trigger `submit()` automatically.
- **Re-grading an already-graded task on retry (D-04):** double-spends the `coach_bump` daily quota and produces a duplicate `ExamResult` row in `useProgress`.
- **Storing `audioUri` in the draft (D-09):** the STT-cached WAV file isn't guaranteed to survive a crash/relaunch; storing it would create a false expectation of recoverability.
- **Using `useProgress`'s zustand `persist` store for the draft (D-07):** wrong lifecycle (drafts are attempt-scoped and must be deletable independent of the whole progress blob) and wrong write frequency (that store's `partialize` re-serializes several other keys on every `set`).
- **True `pause()`/`play()` semantics assumed on the `expo-speech` device path (BUG-01):** no such native capability exists; D-06 explicitly mandates restart-from-line-start on that path only.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Debounce for BUG-02's ~1500ms inactivity checkpoint | A custom debounce hook/class | Plain `setTimeout`/`clearTimeout` in a ref, same idiom as `tts.ts`'s `START_GRACE_MS` retry timer (lines 282, 432-443) | The codebase has zero debounce dependencies and this need is a single call site — a hand-rolled 5-line timer is simpler and more auditable than adding a dependency for one use |
| Draft schema versioning/migration | A full migration framework like `progress.logic.ts`'s `migrateProgressToV4` | None — the draft is ephemeral (deleted on successful submit, D-08) and scoped per attempt, so a schema change simply orphans old unreadable drafts harmlessly (wrap the JSON.parse in try/catch, treat parse failure as "no draft") | Migration machinery exists in this codebase specifically because `useProgress`'s store is long-lived and cross-version; the draft's entire lifetime is one exam sitting |

**Key insight:** Every "don't hand-roll" temptation in this phase is already answered by an existing in-repo pattern — this phase is disciplined reuse, not new infrastructure.

## Common Pitfalls

### Pitfall 1: Treating `exam_attempts`' primary key as a single `attemptId` column
**What goes wrong:** CONTEXT.md's canonical-refs prose says "scoped to the `exam_attempts` row id (e.g. `exam-draft:{attemptId}`)" but the actual schema (`supabase/schema.sql` lines 417-435) has a **composite** primary key `(user_id, paper_id, skill)` — there is no synthetic `id`/`attemptId` column anywhere in that table.
**Why it happens:** The English description in CONTEXT.md was written before this research pass verified the schema; "the exam_attempts row id" is prose shorthand, not a literal column reference.
**How to avoid:** Build the draft key from what `exam-section.tsx` actually has in scope at mount: `paperId` and `skill` (both already destructured from `useLocalSearchParams` at lines 72-74). Use `` `exam-draft:${paperId}:${skill}` ``. `mode` ('exam' | 'practice') is deliberately excluded from the key, matching `exam_attempts`' own PK, so a practice run and a real exam sitting of the same paper+skill can't produce two orphaned drafts that silently shadow each other — though note this also means switching mode mid-recovery could restore the wrong mode's draft; flag this as an explicit open question for the planner (see below) rather than silently deciding it here.
**Warning signs:** A task that literally tries to read `exam_attempts.id` or `exam_attempts.attempt_id` from the schema will fail — there is no such column.

### Pitfall 2: `submit()`'s closure captures `tasks`/`answers`/`texts`/`spoken`/`coverage`/`debate` by value, not the draft
**What goes wrong:** `submit()` is a `useCallback` closing over the live React state (`[answers, texts, spoken, coverage, debate, tasks, unplayable, paperId, section, mode, lang, logExamResult, logSession, router]`, line 252). A relaunch-restore that only writes AsyncStorage but doesn't also call the `setAnswers`/`setTexts`/`setSpoken`/`setCoverage`/`setDebate` setters on mount will leave `submit()` grading against empty state even though the draft "restored."
**Why it happens:** Restoring a draft means literally calling the five `useState` setters with the parsed draft's contents before the user can act — not just having the draft "available" somewhere.
**How to avoid:** The mount-time restore effect must call `setAnswers`/`setTexts`/`setSpoken`/`setCoverage`/`setDebate` with values derived from the parsed draft, keyed to match the existing `Answers`/`Texts`/`Record<string, SpokenAnswer>`/`Record<string, Coverage>`/`Record<string, DebateReport>` shapes exactly (lines 59-61, 92-138).
**Warning signs:** Restored screen shows the tasks as unanswered even though a draft file exists on disk.

### Pitfall 3: Dedupe-on-retry (D-04) has no server-side idempotency to lean on
**What goes wrong:** `grade-exam/index.ts`'s `attemptAuthorized()` (lines 166-181, per CONTEXT.md canonical refs) only checks `expires_at` — it has no concept of "this exact task was already graded," so calling `examGrader.grade()` twice for the same task WILL produce two AI-graded results server-side (and spend the daily grading quota twice) unless the client-side skip logic in `submit()` genuinely prevents the second call from firing at all.
**Why it happens:** The server was deliberately built as attempt-authorization-only (Phase 4 D-05/D-06, referenced in CONTEXT.md) — dedupe is entirely the client's job in this architecture.
**How to avoid:** The retry-skip check in `submit()`'s loop must run BEFORE `examGrader.grade()`/`scoreClosedTask()` is called for a task, not after — reading either `useProgress.getState().examResults` (filtered by `paperId`+`task.id`) or a per-task graded flag carried in the draft object itself (Claude's discretion, per CONTEXT.md). Whichever is chosen, it must be checked inside the same `submit()` loop iteration, before the branch that calls the grader.
**Warning signs:** A device-verification test that force-kills the app mid-`submit()` and relaunches should show the exam report with exactly N results, not N + (already-graded count).

### Pitfall 4: `tts.ts`'s `remotePlayer.pause()` inside `stop()` is not the same as a resumable pause
**What goes wrong:** `stop()` (line 454) already calls `remotePlayer?.pause()`, which might look like BUG-01 is half-done. It is not: `stop()` also increments `generation` (line 450) first, which every in-flight/finish callback checks (`myGen !== generation`) to decide whether to act — so calling `stop()` on backgrounding would silently invalidate the ability to resume, even though the underlying `AudioPlayer` position is technically preserved.
**Why it happens:** `stop()` was designed for "leaving the screen" semantics (irreversible), not "temporarily backgrounded" semantics (must resume).
**How to avoid:** BUG-01's background handler must NOT call the existing `stop()`. It needs new logic that pauses `remotePlayer` (or restarts the device-path utterance) WITHOUT bumping `generation`, so a subsequent foreground `play()`/restart still has a valid generation to act under.
**Warning signs:** Backgrounding then foregrounding produces silence (because the resume path found `myGen !== generation` and no-op'd).

### Pitfall 5: The device (`expo-speech`) path has no stored "what am I currently saying" state to restart with
**What goes wrong:** `speak()`'s device-path closure (`attempt()`, lines 383-444) only exists inside that one invocation's scope — there is no module-level record of "the current utterance's text/lang/voice/rate" that a later `AppState` handler could read to restart the same line on foreground.
**Why it happens:** `tts.ts` was written assuming callers manage their own step-advance; nothing needed to remember the last utterance until now.
**How to avoid:** BUG-01 needs a new module-level variable (e.g. `let current: { text: string; opts: SpeakOpts; path: 'device' | 'remote' } | null`) set at the top of `speak()` and cleared on `finishOk`/`finishFail`/`stop()`, so the `AppState` foreground handler on the device path can call `tts.speak(current.text, current.opts)` again.
**Warning signs:** Foreground-resume on the device path does nothing (there's nothing to replay).

## Code Examples

### The existing test-file import/assertion convention to replicate for BUG-03
```typescript
// Source: ealch-v2/src/services/examAttemptWiring.test.ts lines 1-15 (current convention)
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok } from 'node:assert';
import { test } from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const read = (rel: string) => readFileSync(resolve(here, rel), 'utf8');
```

### `exam-section.tsx`'s current submit() dependency array — exact line to extend
```typescript
// Source: ealch-v2/app/exam-section.tsx line 252 (current — the useCallback deps
// that a draft-dedupe implementation must account for when adding new reads,
// e.g. of useProgress.getState() or a graded-flags map)
}, [answers, texts, spoken, coverage, debate, tasks, unplayable, paperId, section, mode, lang, logExamResult, logSession, router]);
```

### `exam-section.tsx`'s current state shape — exact lines the draft must restore into
```typescript
// Source: ealch-v2/app/exam-section.tsx lines 92-138 (current — verbatim)
const [answers, setAnswers] = useState<Answers>({});
const [unplayable, setUnplayable] = useState<Set<string>>(() => new Set());
const [texts, setTexts] = useState<Texts>({});
const [spoken, setSpoken] = useState<Record<string, SpokenAnswer>>({});
const [phase, setPhase] = useState<Phase>('answering');
// ...
const [coverage, setCoverage] = useState<Record<string, Coverage>>({});
const [debate, setDebate] = useState<Record<string, DebateReport>>({});
const submitted = useRef(false);
```
`Answers = Record<string, Record<string, number | null>>` (taskId → qKey → option) and `Texts = Record<string, string>` (taskId → response) are defined at lines 59-60.

### `examGrader.grade()`'s exact request shape (what BUG-02's transcript-only draft must be able to reconstruct, D-09)
```typescript
// Source: ealch-v2/app/exam-section.tsx lines 214-238 (current — what submit()
// currently sends per open task; the draft only needs to persist `body`
// (the transcript/text), not audioUri or any of the derived signals)
const body = task.skill === 'PO'
  ? (spokenAnswer?.transcript ?? '').trim()
  : (texts[task.id] ?? '').trim();
```

### `stt.ts`'s current (already-correct) `continuous: false` — no change needed for BUG-03 itself
```typescript
// Source: ealch-v2/src/services/stt.ts line 298 (current — verbatim, unconditional)
continuous: false, // auto-finalise on end-of-speech
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|---------------|--------|
| `continuous: !!opts.longForm` (conditional on an `opts.longForm` flag) | `continuous: false` (unconditional) | Commit `8cd0be3` (2026-09-07), reverted+re-fixed structure by `17f1fc2` same day | The `opts.longForm` branch no longer exists at all in current `stt.ts` — BUG-03's new test must assert against the unconditional form, not reference `opts.longForm` |

**Deprecated/outdated:**
- `sttLongForm.test.ts`: deleted by `17f1fc2`, which reverted the entire long-form-capture feature (`2fc9244`) it was written to guard. Its `continuous`-specific assertions are what BUG-03 recovers; its other assertions (about `maxAlternatives`, `contextualStrings` omission under `longForm`) are NOT applicable — those code paths don't exist anymore.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | The draft key should be `exam-draft:{paperId}:{skill}` rather than including `mode` | Pitfall 1, Pattern 1 | If a user has both a practice and a real exam sitting of the same paper+skill in flight simultaneously (unusual but not impossible — e.g. opening two device sessions), the drafts would collide. Flagged as an open question below for the planner/user to confirm rather than silently locking in. |
| A2 | `tts.ts`'s `AppState` listener should be registered at module scope (not inside a component `useEffect`), since `tts.ts` is a plain service module with no React lifecycle | Pattern 2 | If there's an existing app-root component that already wraps service initialization (e.g. calls `tts.prime()` on mount), the listener might be better attached there instead for cleanup symmetry. Not independently re-verified against `app/_layout.tsx` in this research pass — planner should grep for `tts.prime(` call sites before finalizing task actions. |

## Open Questions (RESOLVED)

1. **(RESOLVED) Should the exam-draft AsyncStorage key incorporate `mode` ('exam' vs 'practice')?**
   - What we know: `exam_attempts`' own PK omits `mode` (it's a `default` column, not part of the composite key), and CONTEXT.md's D-07 says the key should be scoped to "the exam_attempts row id."
   - What's unclear: whether a practice-mode draft and an exam-mode draft of the same paper+skill should ever coexist without colliding.
   - Recommendation: Follow the schema's own precedent (key = `paperId:skill`, mode excluded) unless the planner/user decides mode-collision is a real risk worth a longer key. Low-likelihood edge case; does not block planning.
   - RESOLVED: 07-PATTERNS.md confirmed no mode-collision risk exists in practice; plan 07-01 implements the key as `` `exam-draft:${paperId}:${skill}` `` (mode excluded), matching the schema precedent.

2. **(RESOLVED) Where does `tts.ts`'s new `AppState` listener get registered — module scope, or an existing app-root effect?**
   - What we know: `tts.ts` has no React import today and is called from many screens as a stateless service (`tts.speak()`, `tts.stop()`, `tts.prime()`).
   - What's unclear: whether `app/_layout.tsx` (not read in this research pass) already has an app-lifecycle `useEffect` that would be a more natural attachment point than raw module-scope registration.
   - Recommendation: Planner's Wave 0/task list should include a quick grep for `tts.prime(` call sites and `AppState` usage in `app/_layout.tsx` before finalizing exact placement; either approach (module-scope `AppState.addEventListener` called once at import time, or an exported `tts.attachLifecycle()` called from `_layout.tsx`) satisfies D-05/D-06 equally.
   - RESOLVED: 07-PATTERNS.md grepped `app/_layout.tsx` for `tts.prime(`/`AppState` and found no existing lifecycle effect; plan 07-04 registers the listener at module scope in `tts.ts`.

## Environment Availability

Skipped — this phase has no external tool/service dependencies beyond what's already installed and running in the existing Expo/RN toolchain (verified: `AsyncStorage`, `AppState`, `expo-audio`, `expo-speech` are all already imported and working elsewhere in this codebase).

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | `node --test` (Node.js built-in test runner) via `node:test`/`node:assert` |
| Config file | none — invoked directly via `package.json`'s `"test"` script |
| Quick run command | `node --test src/services/<new-stt-test-file>.test.ts` (single file, BUG-03) |
| Full suite command | `npm test` (runs `node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"`, per `ealch-v2/package.json` line 57) |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| BUG-03 | `continuous: false` is hardcoded and never conditioned | source-text-assertion (`node --test`) | `node --test src/services/<new-file>.test.ts` | ❌ Wave 0 — new file, name is Claude's discretion |
| BUG-02 | Draft is written at the right checkpoints and read back correctly | Partially automatable as source-text-assertion (does the code call `AsyncStorage.setItem`/`getItem` at the right call sites, does `submit()` check a graded-flag before grading) — the actual crash/relaunch behavior is **manual-only**, no component-test infra exists (TEST-02 not yet built) | `node --test src/services/<new-exam-draft-wiring>.test.ts` for the structural checks; human-verify checkpoint for the actual force-kill-and-relaunch flow | ❌ Wave 0 — both the structural test and the manual verification script are new |
| BUG-01 | Backgrounding pauses, foregrounding resumes/restarts | Source-text-assertion only for "does `tts.ts` register an `AppState` listener and call pause/resume" — actual audio behavior is device-manual-only (and carries the documented Android hot-reload landmine, requiring a FULL reload to verify, not hot-reload-and-check) | `node --test src/services/<new-tts-appstate>.test.ts` for structural check; human-verify checkpoint on real device | ❌ Wave 0 — new structural test file |

### Sampling Rate
- **Per task commit:** `node --test src/services/<changed-file>.test.ts` (targeted)
- **Per wave merge:** `npm test` (full suite — 7 existing `*.test.ts` files under `src/services/` plus whatever this phase adds)
- **Phase gate:** Full suite green before `/gsd-verify-work`, PLUS a human-verify device checkpoint for BUG-02 (force-kill mid-exam, relaunch, confirm draft restores and retry skips graded tasks) and BUG-01 (background/foreground on both playback paths, using a full reload per the tts.ts hot-reload landmine) — neither of these is automatable pre-TEST-02.

### Wave 0 Gaps
- [ ] New STT regression test file (BUG-03) — name/location is Claude's discretion; must live under `src/services/` to match the `"test"` script's glob (`src/**/*.test.ts`)
- [ ] New exam-draft structural test file (BUG-02) — asserts `exam-section.tsx` imports `AsyncStorage`, writes at the transition/debounce/backgrounding checkpoints, checks a graded-flag before grading in `submit()`, and clears the draft on successful completion
- [ ] New tts.ts AppState structural test file (BUG-01) — asserts `AppState` is imported and a `change` listener is registered, and that the device-path vs. remote-path branch exists
- [ ] No framework install needed — `node --test` is already fully configured

## Security Domain

Not applicable in the ASVS-controls sense — this phase touches no auth, session, access-control, input-validation-from-untrusted-source, or cryptography surface. The one storage-adjacent consideration:

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | No | — |
| V3 Session Management | No | — |
| V4 Access Control | No | — |
| V5 Input Validation | No (draft content is the user's own prior input, already validated/sanitized wherever it's eventually sent to `grade-exam`; the draft itself never becomes a new untrusted input vector — it round-trips through `JSON.stringify`/`JSON.parse` on-device only) | — |
| V6 Cryptography | No | — |

### Known Threat Patterns for this stack
None applicable — `exam-draft:*` AsyncStorage entries are unencrypted-at-rest same as every other AsyncStorage key in this app today (matches existing `config.ts`/`analytics.ts`/`useProgress.ts` precedent; no new data classification is introduced — draft content is the same exam-response text that already gets sent to `grade-exam` over the network once graded).

## Sources

### Primary (HIGH confidence — direct file reads in this repo)
- `ealch-v2/app/exam-section.tsx` (full file, 800 lines) — state shape, `submit()` loop, task dispatch
- `ealch-v2/src/services/examGrader.ts` (full file, 90 lines) — `grade()` request/response shape
- `ealch-v2/src/store/useProgress.ts` (full file, 314 lines) — `resumeByMode`, `logExamResult`, persist config
- `ealch-v2/src/store/progress.logic.ts` (relevant excerpts) — `Activity`, `ResumeState`, `ResumeByMode` types
- `ealch-v2/src/services/stt.ts` (full file, 388 lines) — `continuous: false` at line 298, confirmed unconditional
- `ealch-v2/src/services/examAttemptWiring.test.ts` (full file) — test-writing convention
- `ealch-v2/src/services/tts.ts` (full file, 509 lines) — `stop()`, `playRemote()`, device `attempt()` closure
- `ealch-v2/src/hooks/useReadingBrightness.ts` (full file, 98 lines) — symmetric AppState pattern
- `ealch-v2/src/components/ExamClock.tsx` (full file, 131 lines) — foreground-only AppState pattern
- `ealch-v2/supabase/schema.sql` lines 417-450 — `exam_attempts` table definition (composite PK, no `attemptId` column — corrects CONTEXT.md's canonical-refs prose)
- `ealch-v2/src/services/content.logic.ts` lines 411-431 — `scoreClosedTask()`
- `ealch-v2/src/components/ExamSpeakTask.tsx` lines 39-47 — `SpokenAnswer` type
- `ealch-v2/src/services/config.ts` lines 108-141 — raw AsyncStorage get/set/try-catch precedent
- `git show 8cd0be3` (full commit + deleted `sttLongForm.test.ts` content) — the exact regression test being recovered for BUG-03
- `git show 17f1fc2` (commit message + stat) — confirms why/how the test was deleted
- `ealch-v2/package.json` line 57 — `"test"` script glob (`src/**/*.test.ts`), confirming new tests must live under `src/`

### Secondary (MEDIUM confidence)
None — no external web research was needed; this phase is entirely repo-internal ground-truth gathering.

### Tertiary (LOW confidence)
None.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new libraries; every API referenced (`AsyncStorage`, `AppState`, `expo-audio`'s `AudioPlayer.pause/play`, `expo-speech`) is already in active use elsewhere in this exact codebase, verified by direct read
- Architecture: HIGH — every pattern cited is copy-paste-verified from files in this repo, not inferred from training data
- Pitfalls: HIGH — all five pitfalls are derived from direct code inspection (e.g. Pitfall 4's `generation` interaction with `stop()` was found by reading `tts.ts` line-by-line), not speculation

**Research date:** 2026-09-21
**Valid until:** Until any of the five read files (`exam-section.tsx`, `examGrader.ts`, `useProgress.ts`, `stt.ts`, `tts.ts`) changes — this research is tied to the exact current commit, not a time-based expiry. Re-verify line numbers if other phases land first.
