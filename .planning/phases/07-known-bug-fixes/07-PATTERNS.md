# Phase 7: Known Bug Fixes - Pattern Map

**Mapped:** 2026-09-21
**Files analyzed:** 5 (2 modify, 3 create)
**Analogs found:** 5 / 5 (all matched; one — tts.ts's module-scope AppState — has no exact precedent and is flagged below)

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|-----------------|----------------|
| `ealch-v2/app/exam-section.tsx` (modify — draft checkpoint/restore/dedupe) | screen/controller | CRUD (local draft) + request-response (`grade-exam`) | `ealch-v2/app/lesson.tsx` (resumeByMode) + `ealch-v2/src/services/config.ts` (raw AsyncStorage) + `ealch-v2/src/hooks/useReadingBrightness.ts` (AppState flush) | role-match (composite — no single file does all three) |
| `ealch-v2/src/services/examDraftWiring.test.ts` (create — BUG-02 structural test) | test | batch/static-assertion | `ealch-v2/src/services/examAttemptWiring.test.ts` | exact |
| `ealch-v2/src/services/sttContinuous.test.ts` (create — BUG-03 regression test) | test | batch/static-assertion | `ealch-v2/src/services/examAttemptWiring.test.ts` (convention) + `git show 8cd0be3:ealch-v2/src/services/sttLongForm.test.ts` (verbatim source) | exact |
| `ealch-v2/src/services/tts.ts` (modify — BUG-01 AppState pause/resume) | service (plain module, no React lifecycle) | event-driven | `ealch-v2/src/hooks/useReadingBrightness.ts` + `ealch-v2/src/components/ExamClock.tsx` (both React `AppState` listeners) | role-match (no plain-module `AppState` registration precedent exists — see "No Analog Found") |
| `ealch-v2/src/services/ttsAppState.test.ts` (create — BUG-01 structural test) | test | batch/static-assertion | `ealch-v2/src/services/examAttemptWiring.test.ts` | exact |

## Pattern Assignments

### `ealch-v2/app/exam-section.tsx` (screen/controller, CRUD + request-response)

**Analogs:** `ealch-v2/app/lesson.tsx` (resume pattern), `ealch-v2/src/services/config.ts` (raw AsyncStorage), `ealch-v2/src/hooks/useReadingBrightness.ts` (AppState)

**Current imports** (lines 1-51, verbatim) — new imports (`AsyncStorage`, and nothing else — `AppState` comes from `react-native` which is already imported) attach here:
```typescript
// Source: ealch-v2/app/exam-section.tsx lines 22-50 (current)
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
// ... AppState must be added to this react-native import
import { useLocalSearchParams, useRouter } from 'expo-router';
...
import { useProgress, useSessionLog } from '@/store/useProgress';
import { PLACEMENT_PASS, type ExamResultInput } from '@/store/progress.logic';
import { content, useContent } from '@/services/content';
import { taskQuestions, scoreClosedTask, type ExamQuestion } from '@/services/content.logic';
import { examGrader, startExamAttempt } from '@/services';
```
`AsyncStorage` is NOT imported today; follow `config.ts`'s import line exactly:
```typescript
// Source: ealch-v2/src/services/config.ts line 7
import AsyncStorage from '@react-native-async-storage/async-storage';
```

**Raw AsyncStorage read/write/try-catch pattern to replicate** (`config.ts` lines 108-141, verbatim):
```typescript
// Source: ealch-v2/src/services/config.ts lines 108-141
const CACHE_KEY = 'ealch-remote-config';
let current: RemoteConfig = DEFAULTS;
...
export async function refreshConfig(): Promise<RemoteConfig> {
  const sb = supabase();
  if (sb) {
    try {
      const { data, error } = await sb.from('system_config').select('config').eq('id', 'active').single();
      if (!error && data?.config) {
        current = { ...DEFAULTS, ...(data.config as Partial<RemoteConfig>) };
        await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(current));
        return current;
      }
    } catch {
      // fall through to cache
    }
  }
  try {
    const cached = await AsyncStorage.getItem(CACHE_KEY);
    if (cached) current = { ...DEFAULTS, ...JSON.parse(cached) };
  } catch {
    // keep defaults
  }
  return current;
}
```
**Applied to BUG-02:** the draft key is `` `exam-draft:${paperId}:${skill}` `` (see Pitfall 1 below — NOT an `attemptId`, no such column exists). `setItem`/`getItem`/`removeItem` all wrapped identically in try/catch that degrades silently — a draft write failure must never block the exam UI, exactly as a config-cache-write failure never blocks config resolution above.

**resumeByMode "reopen where you left off" pattern to extend** (`app/lesson.tsx` lines 68-69, 185, 573, 588 + `useProgress.ts` lines 119-131):
```typescript
// Source: ealch-v2/app/lesson.tsx lines 68-69
const setResume = useProgress((s) => s.setResume);
const clearResume = useProgress((s) => s.clearResume);
```
```typescript
// Source: ealch-v2/app/lesson.tsx line 185 — set on mount (position/identity only, today)
if (L && !bandLocked) setResume('lesson', { route: `/lesson?key=${raw ?? id}`, title: L.title });
```
```typescript
// Source: ealch-v2/app/lesson.tsx line 573 — cleared on the mode's own completion, never on unmount
clearResume('lesson');
```
```typescript
// Source: ealch-v2/src/store/useProgress.ts lines 119-131 — the store-side shape this pattern writes into
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
```
**Applied to BUG-02 (D-03, D-08):** this is the *pattern* to extend conceptually (silent mount-time restore, deliberate-completion-only clear) — but per CONTEXT.md D-07 the draft itself is NOT stored via `setResume`/`useProgress`'s persisted store. It is a parallel, dedicated `AsyncStorage` key (config.ts pattern above) read on mount and used to call `setAnswers`/`setTexts`/`setSpoken`/`setCoverage`/`setDebate` directly (see Pitfall 2 below), and removed via `AsyncStorage.removeItem` (not `clearResume`) once `submit()` completes normally.

**AppState background-flush pattern** (`useReadingBrightness.ts` lines 86-92, verbatim):
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
**Applied to BUG-02:** the `else` branch (any non-'active' state) is where the pending/debounced draft gets flushed via the AsyncStorage write pattern above, inside `exam-section.tsx`'s component. Cleanup (`sub.remove()`) mirrors this exactly.

**Debounce idiom already in this codebase** (`tts.ts` lines 282, 432-443 — `START_GRACE_MS` retry timer; the only existing `setTimeout`/`clearTimeout`-shaped idiom to copy for D-02's ~1500ms inactivity checkpoint):
```typescript
// Source: ealch-v2/src/services/tts.ts line 282
const START_GRACE_MS = 450;
// Source: ealch-v2/src/services/tts.ts lines 432-443 (shape to copy, not the content)
if (retriesLeft > 0) {
  setTimeout(async () => {
    if (started || settled) return;
    ...
  }, START_GRACE_MS);
}
```

**Current state shape the draft must restore into** (`exam-section.tsx` lines 59-61, 92-138, verbatim — see Pitfall 2):
```typescript
// Source: ealch-v2/app/exam-section.tsx lines 59-61
type Answers = Record<string, Record<string, number | null>>; // taskId -> qKey -> option
type Texts = Record<string, string>; // taskId -> response
type Phase = 'answering' | 'submitting' | 'done';
```
```typescript
// Source: ealch-v2/app/exam-section.tsx lines 92-99, 133-139
const [answers, setAnswers] = useState<Answers>({});
const [unplayable, setUnplayable] = useState<Set<string>>(() => new Set());
const [texts, setTexts] = useState<Texts>({});
const [spoken, setSpoken] = useState<Record<string, SpokenAnswer>>({});
const [phase, setPhase] = useState<Phase>('answering');
const [confirming, setConfirming] = useState(false);
...
const [coverage, setCoverage] = useState<Record<string, Coverage>>({});
const [debate, setDebate] = useState<Record<string, DebateReport>>({});
const submitted = useRef(false);
```

**submit() loop — exact insertion point for D-04's dedupe-before-grade check** (`exam-section.tsx` lines 149-252, key excerpts):
```typescript
// Source: ealch-v2/app/exam-section.tsx lines 149-166 (loop entry — dedupe check goes
// at the TOP of each iteration, before either the closed-task or open-task branch)
const submit = useCallback(async () => {
  if (submitted.current || !paperId || !section) return;
  submitted.current = true;
  setPhase('submitting');

  for (const task of tasks) {
    const base: ExamResultInput = {
      taskId: task.id, paperId, format: task.format, taskType: task.taskType,
      skill: task.skill, band: task.level, passed: false, mode,
    };

    if (!isOpen(task)) {
      // ... scoreClosedTask + logExamResult (closed/MCQ path, no network)
      continue;
    }
    // ... open path: examGrader.grade() + logExamResult
  }
  logSession('exam');
  setPhase('done');
  router.replace({ pathname: '/exam-report', params: { paperId } });
}, [answers, texts, spoken, coverage, tasks, unplayable, paperId, section, mode, lang, logExamResult, logSession, router]);
```
```typescript
// Source: ealch-v2/app/exam-section.tsx lines 214-238 (the exact body construction
// D-09's transcript-only draft must be able to reconstruct — PO uses `spokenAnswer.transcript`,
// never `audioUri`)
const spokenAnswer = task.skill === 'PO' ? spoken[task.id] : undefined;
if (task.skill === 'PO' && spokenAnswer?.unavailable) {
  logExamResult({ ...base, audioFailed: true }, task);
  continue;
}
const body = task.skill === 'PO'
  ? (spokenAnswer?.transcript ?? '').trim()
  : (texts[task.id] ?? '').trim();
if (!body) {
  logExamResult(base, task);
  continue;
}
const res = await examGrader.grade({
  stimulus: task.prompt, candidateResponse: body, rubric: task.rubric!,
  modelAnswer: task.modelAnswer!, targetBand: task.level, paperId, skill: task.skill, lang,
  ...(spokenAnswer ? { delivery: deliveryNote(spokenAnswer.signals, lang) ?? undefined } : {}),
  ...(coverage[task.id] ? { coverage: coverageNote(coverage[task.id], lang) } : {}),
});
```
**Applied to BUG-02 (D-04):** the graded-flag check must run as the very first statement inside the `for (const task of tasks)` loop, before either branch — reading `useProgress.getState().examResults` filtered by `paperId`+`task.id`, OR a per-task flag carried in the draft object (Claude's discretion). On a hit, `continue` immediately without calling `scoreClosedTask`/`examGrader.grade`/`logExamResult` again.

**Error handling pattern:** this codebase has no thrown-error/try-catch convention in `submit()` itself — `examGrader.grade()` already never throws (`examGrader.ts` lines 74-88, `try { ... } catch { // fall through }` returning `{ live: false }`). The draft's own read/write/parse must follow the same "never throw, degrade silently" contract — model directly on `config.ts`'s try/catch pairs above, treating a `JSON.parse` failure as "no draft" (see Research's "Don't Hand-Roll" table — draft schema changes simply orphan old unreadable drafts harmlessly).

---

### `ealch-v2/src/services/examDraftWiring.test.ts` (test, static-assertion — BUG-02)

**Analog:** `ealch-v2/src/services/examAttemptWiring.test.ts` (full file, 51 lines — exact convention match)

**Full import/read-helper block to copy verbatim** (lines 1-14):
```typescript
// Source: ealch-v2/src/services/examAttemptWiring.test.ts lines 1-14
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok } from 'node:assert';
import { test } from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const read = (rel: string) => readFileSync(resolve(here, rel), 'utf8');
```

**Cross-file source-assertion pattern to copy** (lines 16-41 — reading `../../app/exam-section.tsx` and `./examGrader.ts` by relative path, asserting call-site ordering with `indexOf`):
```typescript
// Source: ealch-v2/src/services/examAttemptWiring.test.ts lines 16-24, 35-41
test('the paper screen consults the gate before it navigates', () => {
  const src = read('../../app/exam-paper.tsx');
  ok(src.includes("useFeature('examiner')"));
  ok(src.includes('examPaperAllowed('));
  const gateAt = src.indexOf('examPaperAllowed(');
  const pushAt = src.indexOf("pathname: '/exam-section'");
  ok(gateAt !== -1 && pushAt !== -1);
  ok(gateAt < pushAt, 'the decision must precede the navigation');
});

test('every grading request names the attempt it belongs to', () => {
  const sectionSrc = read('../../app/exam-section.tsx');
  const graderSrc = read('./examGrader.ts');
  ok(/paperId,\s/.test(sectionSrc));
  ok(sectionSrc.includes('skill: task.skill'));
  ok(graderSrc.includes('paperId: string'));
});
```
**Applied to BUG-02:** read `../../app/exam-section.tsx` and assert (a) `AsyncStorage` is imported, (b) `AsyncStorage.setItem`/`getItem`/`removeItem` calls exist referencing an `exam-draft:` key, (c) the dedupe check (whatever form is chosen) textually precedes `examGrader.grade(` and `scoreClosedTask(` inside the loop, (d) a draft-clear call exists near the `router.replace({ pathname: '/exam-report'` line. This is a structural/wiring test only — the actual crash/relaunch behavior is manual-verify (see RESEARCH.md's Validation Architecture section).

---

### `ealch-v2/src/services/sttContinuous.test.ts` (test, static-assertion — BUG-03)

**Analog:** `git show 8cd0be3:ealch-v2/src/services/sttLongForm.test.ts` (deleted, recovered verbatim) + `examAttemptWiring.test.ts` (current import convention)

**The exact test being recovered** (verbatim from commit `8cd0be3`, adapt only the comment's now-stale "longForm" framing):
```typescript
// Source: git show 8cd0be3:ealch-v2/src/services/sttLongForm.test.ts
// (imports identical to examAttemptWiring.test.ts's convention above)
const here = dirname(fileURLToPath(import.meta.url));
const src = () => readFileSync(resolve(here, 'stt.ts'), 'utf8');

test('the recogniser is never asked for continuous mode', () => {
  const code = src().replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  ok(/continuous: false,/.test(code), 'continuous must be false');
  ok(!/continuous: (true|!!|opts\.)/.test(code), 'continuous must never be conditioned on long-form');
});
```
**Current target line confirmed correct** (`stt.ts` line 298, verbatim, unconditional):
```typescript
// Source: ealch-v2/src/services/stt.ts line 298
continuous: false, // auto-finalise on end-of-speech
```
**Applied to BUG-03:** drop the test in nearly unmodified — same `read`-by-relative-path idiom, same comment-stripping regex, same two `ok()` assertions. Update only the historical comment to reference both commits (`8cd0be3` fixed it, `17f1fc2` reverted it, this test pins it) rather than the retired `opts.longForm`-specific framing.

---

### `ealch-v2/src/services/tts.ts` (service, event-driven — BUG-01)

**Analogs:** `ealch-v2/src/hooks/useReadingBrightness.ts` (symmetric active/background), `ealch-v2/src/components/ExamClock.tsx` (foreground-only reaction) — both are React hooks; `tts.ts` is a plain module with no React import today (see "No Analog Found" below for the gap this creates).

**Current imports** (lines 20-26, verbatim — `AppState` needs adding from `react-native`):
```typescript
// Source: ealch-v2/src/services/tts.ts lines 20-26 (current)
import { Platform } from 'react-native';
import * as Speech from 'expo-speech';
import { getConfig } from './config';
import { ENV } from './env';
import { supabase } from './supabase';
import { shouldAttemptRemoteTts } from './tts.logic';
import { useStore } from '@/store/useStore';
```

**AppState pattern to adapt to module scope** (`useReadingBrightness.ts` lines 86-92 — symmetric active/background handling is the shape D-05/D-06 need, since both paths (pause-and-resume vs restart) require reacting to both directions):
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
**Applied to BUG-01:** since `tts.ts` has no component/hook lifecycle, register this once at module load (top-level `AppState.addEventListener('change', ...)` call, no `useEffect` wrapper, no `sub.remove()` cleanup needed — the module lives for the app's lifetime). Confirmed via grep: `app/_layout.tsx` line 97 calls `tts.prime()` inside a plain `useEffect([])` at app root with no existing `AppState` listener nearby — module-scope registration in `tts.ts` itself (not `_layout.tsx`) is the lower-friction attachment point per RESEARCH.md's Open Question 2.

**`stop()` — what NOT to call for backgrounding** (`tts.ts` lines 449-464, verbatim — Pitfall 4: `stop()` bumps `generation`, invalidating resume):
```typescript
// Source: ealch-v2/src/services/tts.ts lines 449-464
stop() {
  generation += 1; // cancel any synthesis still in flight
  try {
    remoteSub?.remove();
    remoteSub = null;
    remotePlayer?.pause();
  } catch {
    // ignore
  }
  try {
    Speech.stop();
  } catch {
    // ignore
  }
  speaking = false;
},
```
**Applied to BUG-01:** the new background-pause logic must call `remotePlayer?.pause()` directly (same call `stop()` makes) WITHOUT the `generation += 1` line, so `playbackStatusUpdate`'s `myGen === generation` check (line 155) still passes on resume. A new `resume()`-equivalent export calls `remotePlayer?.play()` (mirrors `playRemote()`'s own `remotePlayer.play()` at line 158).

**`playRemote()` — the generation-guard pattern resume must respect** (lines 140-163, verbatim):
```typescript
// Source: ealch-v2/src/services/tts.ts lines 140-163
function playRemote(uri: string, rate: number, onFinish: () => void): boolean {
  const a = audioModule();
  if (!a) return false;
  try {
    remoteSub?.remove();
    remoteSub = null;
    if (!remotePlayer) remotePlayer = a.createAudioPlayer({ uri });
    else remotePlayer.replace({ uri });
    try {
      remotePlayer.setPlaybackRate(rate, 'high');
    } catch {
      // Rate control missing on this runtime — normal speed is still speech.
    }
    const myGen = generation;
    remoteSub = remotePlayer.addListener('playbackStatusUpdate', (status) => {
      if (status.didJustFinish && myGen === generation) onFinish();
    });
    remotePlayer.seekTo(0);
    remotePlayer.play();
    return true;
  } catch {
    return false;
  }
}
```

**Device-path closure with no persisted "current utterance" state** (`speak()`'s `attempt()` closure, lines 383-444 excerpt — Pitfall 5: nothing at module scope remembers what's currently speaking):
```typescript
// Source: ealch-v2/src/services/tts.ts lines 301-343 (speak()'s entry — this is
// where a module-level `current: { text, opts, path } | null` must be set, so
// the AppState foreground handler on the device path can replay it)
async speak(
  text: string,
  opts: { lang?: 'fr-FR' | 'en-US'; slow?: boolean; rate?: number; voice?: TtsVoice; deviceVoiceId?: string; onDone?: () => void; onError?: () => void } = {}
): Promise<void> {
  const lang = opts.lang ?? 'fr-FR';
  const done = opts.onDone;
  const fail = opts.onError ?? opts.onDone;
  let settled = false;
  const finishOk = () => { if (settled) return; settled = true; speaking = false; done?.(); };
  const finishFail = () => { if (settled) return; settled = true; speaking = false; fail?.(); };
  generation += 1;
  const myGen = generation;
  ...
```
**Applied to BUG-01 (D-06):** set the new module-level `current` variable at the top of `speak()` (text/opts/path), clear it in `finishOk`/`finishFail`/`stop()`. On foreground with `current?.path === 'device'`, the `AppState` handler calls `tts.speak(current.text, current.opts)` again (restart-from-line-start, per D-06 — no true device-path resume exists).

---

### `ealch-v2/src/services/ttsAppState.test.ts` (test, static-assertion — BUG-01)

**Analog:** `ealch-v2/src/services/examAttemptWiring.test.ts` (convention) — same import block as above; reads `./tts.ts` by relative path (co-located, like `sttContinuous.test.ts` reads `./stt.ts`).

**Applied to BUG-01:** assert (a) `AppState` is imported from `react-native`, (b) `AppState.addEventListener('change'` appears at module scope (not inside a function that never runs), (c) the background branch calls `remotePlayer?.pause()`/`Speech` -related restart logic without also incrementing `generation` on that exact line, (d) both a device-path and remote-path branch exist in the handler. Structural only — actual audio pause/resume is device-manual-verify only (per RESEARCH.md, plus the tts.ts hot-reload landmine memory note).

## Shared Patterns

### Source-text-assertion test convention (applies to all 3 new test files)
**Source:** `ealch-v2/src/services/examAttemptWiring.test.ts` lines 1-14
**Apply to:** `examDraftWiring.test.ts`, `sttContinuous.test.ts`, `ttsAppState.test.ts`
```typescript
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok } from 'node:assert';
import { test } from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const read = (rel: string) => readFileSync(resolve(here, rel), 'utf8');
```
No Jest/RNTL exists yet (TEST-02, later phase) — this is the *only* available test style pre-that phase. All three new test files must live under `ealch-v2/src/services/` to match `package.json`'s `"test"` script glob (`src/**/*.test.ts`).

### Raw AsyncStorage get/set/try-catch (BUG-02's draft store)
**Source:** `ealch-v2/src/services/config.ts` lines 108-141
**Apply to:** `exam-section.tsx`'s new draft read/write/clear — NOT `useProgress.ts`'s zustand `persist` wrapper (explicitly excluded by CONTEXT.md D-07)
```typescript
try {
  await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(current));
} catch {
  // fall through
}
try {
  const cached = await AsyncStorage.getItem(CACHE_KEY);
  if (cached) current = { ...DEFAULTS, ...JSON.parse(cached) };
} catch {
  // keep defaults
}
```

### AppState.addEventListener('change', ...) with cleanup
**Source:** `ealch-v2/src/hooks/useReadingBrightness.ts` lines 86-92, `ealch-v2/src/components/ExamClock.tsx` lines 53-58, `ealch-v2/src/store/useProgress.ts` lines 282-294 (`useSessionLog`'s foreground/background segment accumulator — a third, closely-related precedent worth reading if BUG-01's device-path "how long was I backgrounded" ever needs it)
**Apply to:** `exam-section.tsx` (BUG-02 background-flush, inside a `useEffect`) and `tts.ts` (BUG-01 pause/resume, at module scope, no `useEffect` wrapper since there is no component)
```typescript
useEffect(() => {
  const sub = AppState.addEventListener('change', (state) => {
    if (state === 'active') void boost();
    else void restore();
  });
  return () => sub.remove();
}, [boost, restore]);
```

### Never-throw / silent-degrade error handling
**Source:** `ealch-v2/src/services/examGrader.ts` lines 74-88 (`grade()` never throws, returns `{ live: false }`), `ealch-v2/src/services/config.ts` lines 116-141 (try/catch fall-through to cache/defaults)
**Apply to:** all of BUG-02's new AsyncStorage read/write/parse code — a draft I/O failure must never surface as a UI error or block the exam flow, exactly as a config-fetch failure never blocks the app.

## No Analog Found

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| `ealch-v2/src/services/tts.ts`'s new module-scope `AppState` registration | service (plain module) | event-driven | Every existing `AppState.addEventListener` call site in this codebase (`useReadingBrightness.ts`, `ExamClock.tsx`, `useProgress.ts`'s `useSessionLog`) is inside a React hook/component `useEffect`. `tts.ts` has no React import and no lifecycle today, so there is no precedent in-repo for registering an `AppState` listener at plain module scope. The closest React-hook shape is copy-adaptable (drop the `useEffect`/cleanup wrapper, call `AppState.addEventListener` once at import time) but is not a literal analog. Confirmed via grep that `app/_layout.tsx` (the app-root mount point, which already calls `tts.prime()` in a `useEffect([])` at line 97) has no existing `AppState` listener to attach alongside — module-scope registration inside `tts.ts` itself is the recommended placement per RESEARCH.md's Open Question 2. |

## Metadata

**Analog search scope:** `ealch-v2/app/`, `ealch-v2/src/services/`, `ealch-v2/src/hooks/`, `ealch-v2/src/components/`, `ealch-v2/src/store/` — all confirmed via CONTEXT.md/RESEARCH.md canonical refs, cross-checked by direct file reads (no additional glob/grep search needed beyond confirming `resumeByMode` call sites in `lesson.tsx` and `AppState`/`tts.prime` usage in `app/_layout.tsx`)
**Files scanned:** 9 direct reads (`exam-section.tsx`, `examGrader.ts`, `config.ts`, `useReadingBrightness.ts`, `ExamClock.tsx`, `examAttemptWiring.test.ts`, `useProgress.ts`, `tts.ts`, `stt.ts` lines 280-310) + 2 targeted greps (`lesson.tsx` resumeByMode call sites, `_layout.tsx` AppState/tts.prime)
**Pattern extraction date:** 2026-09-21

## Corrections to CONTEXT.md/RESEARCH.md Worth Flagging to the Planner

- CONTEXT.md's canonical-refs prose says the draft key should be scoped to "the `exam_attempts` row id (e.g. `exam-draft:{attemptId}`)" — RESEARCH.md already corrects this: no `attemptId` column exists (composite PK is `(user_id, paper_id, skill)`). The draft key must be `` `exam-draft:${paperId}:${skill}` `` built from `exam-section.tsx`'s own `useLocalSearchParams` destructure (lines 72-74, already in scope). Carry this correction into the plan's task descriptions verbatim so a planner reading only CONTEXT.md doesn't reintroduce the wrong key shape.
