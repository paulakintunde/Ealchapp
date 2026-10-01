# Phase 10: Feedback & Rating Flow - Pattern Map

**Mapped:** 2026-10-01
**Files analyzed:** 24 new/modified (all paths relative to `ealch-v2/` unless noted)
**Analogs found:** 22 / 24 (2 partial, see "No Analog Found")

Note on the entitlement analog: CONTEXT/RESEARCH cite `entitlement.logic.ts`, which does NOT exist. The real pure-logic analogs are `src/services/analytics.logic.ts`, `src/services/purchases.logic.ts`, `src/services/acquisition.logic.ts`, `src/services/engagement.logic.ts` and (edge) `supabase/functions/tts/quota.ts`.

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match |
|---|---|---|---|---|
| `src/services/reviewPrompt.logic.ts` (+ `.test.ts`) | utility (pure decision) | transform | `src/services/analytics.logic.ts` / `supabase/functions/tts/quota.ts` | role-match |
| `src/services/reviewPrompt.ts` | service | event-driven, local persistence | `src/services/acquisition.ts` | role-match |
| `src/services/config.ts` (add `reviewPromptOn`) | config | request-response (cached) | itself, `examGateOn` | exact |
| `src/services/analytics.logic.ts` (+ `review_requested`) | config/contract | transform | itself, `upgrade_nudge_shown` | exact |
| `src/services/problemReport.logic.ts` (+ `.test.ts`) | utility (payload, classify, outbox model) | transform | `analytics.logic.ts` outbox block (lines 154-187) | exact |
| `src/services/problemReport.ts` | service | request-response + outbox | `src/services/analytics.ts` (outbox lines 108-167) + `src/services/llm.ts` (invoke) | exact |
| `supabase/functions/report-problem/index.ts` | edge function | request-response, CRUD insert | `supabase/functions/tts/index.ts` | exact |
| `supabase/functions/report-problem/limits.ts` (+ `limits.test.ts`) | utility (pure) | transform | `supabase/functions/tts/quota.ts` + `quota.test.ts` | exact |
| `supabase/schema.sql` (append) | migration (flat, idempotent) | CRUD | `tts_usage_*` tables + `tts_bump` (lines 275-391) | exact |
| `app/report-problem.tsx` | component (formSheet screen) | request-response | `app/fiche.tsx` + `_layout.tsx` registration | role-match |
| `app/_layout.tsx` (register sheet, rename route, flush outbox) | config/route | event-driven | itself (lines 164-202, 93-104, 207) | exact |
| `app/report.tsx` (renamed from `app/feedback.tsx`) | component | transform/view | `app/feedback.tsx` itself | exact |
| `app/feedback.tsx` (redirect stub) | route | redirect | `fiche.tsx` dead-link `router.replace` | partial |
| `src/i18n/strings.ts` (drillNames x13, new keys FR+EN) | config | static | itself lines 64, 527, 1038 | exact |
| `app/settings.tsx` (two rows) | component | request-response | Licences row lines 568-600 | exact |
| `app/profile.tsx` ("Your report" row) | component | request-response | same Licences row | exact |
| `src/components/ErrorScreen.tsx` (inline panel) | component (provider-free) | request-response | itself (COPY table, raw RN) | exact |
| `src/components/ui.tsx` / `Icon.tsx` (`flag` glyph) | component | static | `Icon.tsx` line 58, 84 | exact |
| `app/lesson.tsx` (score plumbing, arm, flag icon) | screen | event-driven | itself lines 662-692, 770 | exact |
| `src/components/LessonPager.tsx` (flag in header context) | component | event-driven | itself lines 905-940 | role-match |
| `app/speak.tsx` (STT report action, `/report` call) | screen | event-driven | itself lines 181-190, 318-323, 356 | exact |
| `app/exam-report.tsx` (grading report action) | screen | event-driven | itself | role-match |
| `app/roleplay.tsx` (`/report` call, line 436) | screen | route | itself | exact |
| `__tests__/report-phase10.test.tsx`, `__tests__/report-problem-phase10.test.tsx` | test | component | `__tests__/settings.test.tsx` + `helpers/renderInLocale.tsx` | exact |
| wiring tests (`reportRouteWiring`, `reviewPrompt.wiring`) | test | source-grep | `src/store/bannerSlotWiring.test.ts` | exact |

## Pattern Assignments

### `src/services/reviewPrompt.logic.ts` (pure decision, transform)

**Analog:** `src/services/analytics.logic.ts` (zero RN imports, exported pure functions with doc comments, tested by node --test) and `supabase/functions/tts/quota.ts` (decision layer: tier + counters in, `{allowed, reason}` out).

**Pattern to copy** (quota.ts lines 1-9, 72, 100-113): file header comment explains "pure decision layer, no I/O, runs under `node --test`"; a typed decision result; decide() checks in a fixed order and returns the first reason.
```typescript
export type QuotaDecision = { allowed: boolean; reason: QuotaReason | null; tier: Tier };
export function decide(tier, usage, freePreviewTotal, limits): QuotaDecision {
  if (tier === 'guest') return { allowed: false, reason: 'guest_not_allowed', tier };
  ...
}
```
For the cap math and decision skeleton use RESEARCH.md "Cap decision skeleton" verbatim; add "future timestamps are treated as now" per Pattern 1. Imports must be type-only or none (no `@/` alias is resolvable under plain node unless file imports are relative; `analytics.logic.ts` has zero imports).

**Test analog:** `src/services/analytics.logic.test.ts` (lines 1-8): `import { deepStrictEqual, strictEqual } from 'node:assert'; import { test } from 'node:test';` then relative import from `'./analytics.logic'`.

### `src/services/reviewPrompt.ts` (AsyncStorage state + StoreReview call)

**Analog:** `src/services/acquisition.ts`

**Imports/conventions** (lines 1-11): `AsyncStorage` default import, string constant keys with `ealch-` prefix, `installId, track` from `./analytics`.
```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';
import { installId, track } from './analytics';
const FIRST_KEY = 'ealch-acquisition-first-open';
```
**Install date source (D-04)** (lines 17-23): record is JSON `{installId, localDay, at}` under `ealch-acquisition-first-open`; parse in try/catch, validate shape, "Storage failure must not block launch":
```typescript
const raw = await AsyncStorage.getItem(FIRST_KEY);
if (raw) { const candidate = JSON.parse(raw) as FirstOpenRecord;
  if (candidate.installId === id && /^\d{4}-\d{2}-\d{2}$/.test(candidate.localDay)) record = candidate; }
} catch { /* Storage failure must not block launch. */ }
```
Use `record.at` (ISO) as `installAt`. Do not re-implement a first-launch key.

**Flag read** (config.ts): `getConfig().reviewPromptOn`.
**Fire-and-forget analytics** (analytics.ts lines 186-193): `track('review_requested', {...})` never awaited; stable ids only.
**Never-throw contract:** every storage op wrapped try/catch with comment (acquisition.ts lines 26, 31, 34).
**Banner/paywall check (D-06):** read `useUI.getState().banner != null` (`src/store/useUI.ts` lines 29, 74, 90-91, single slot). **Errors check:** `recentErrors().length > 0` (`src/services/errors.ts` line 63). **Guest:** `useStore.getState().userId == null` (analytics.ts line 191 uses the same read).

### `src/services/config.ts` (add `reviewPromptOn`)

**Analog:** itself, `examGateOn`. Add to `RemoteConfig` type with a doc comment (type lines 50-60), add `reviewPromptOn: true` to `DEFAULTS` (lines 86-106; examGateOn at line 102 with comment "Ships OPEN. See the type."). Merge via the existing `{ ...DEFAULTS, ...data.config }` (lines 126, 136); no other change. Also add the key to the `system_config` seed JSON in `supabase/schema.sql` lines 239-256 (note the `on conflict do nothing` caveat at 259-273: a live DB needs an explicit update).

### `src/services/analytics.logic.ts` (add `review_requested`)

**Analog:** itself. Three edits, all in this file:
1. `EventProperties` (line 8-41): add `review_requested: { lesson_id: string };` (stable id only).
2. `allowed` map (lines 47-63): add `review_requested: ['lesson_id'],`. The `allowed` object is typed `{ [K in AnalyticsEvent]: ... }` so a missing key fails typecheck.
3. `milestoneKey` (line 93-112) returns `null` by default, which is correct: each request must emit.
Test: extend `src/services/analytics.logic.test.ts` first test (line 8, "only declared properties reach the product event body").

### `src/services/problemReport.logic.ts` (pure: categories, payload builder, classify, outbox model)

**Analog:** `src/services/analytics.logic.ts` lines 154-187 (outbox model).
```typescript
export type OutboxEntry = Omit<CaptureBody, 'api_key'>;
export const OUTBOX_LIMIT = 200;
export const OUTBOX_MAX_AGE_MS = 14 * 24 * 60 * 60 * 1000;
export function retryableCapture(diagnostic): boolean {
  const { status } = diagnostic;
  return status === 'offline' || status === 408 || status === 429 || (typeof status === 'number' && status >= 500);
}
export function pruneOutbox(outbox, now) { return outbox.filter((entry) => { const at = Date.parse(entry.timestamp); return Number.isFinite(at) && now - at <= OUTBOX_MAX_AGE_MS; }); }
export function enqueueOutbox(outbox, entry, now) {
  const kept = pruneOutbox(outbox, now);
  if (kept.some((queued) => queued.uuid === entry.uuid) || kept.length >= OUTBOX_LIMIT) return kept;
  return [...kept, entry];
}
export function validOutbox(value: unknown) { if (!Array.isArray(value)) return []; return value.filter(...typeof checks...); }
```
Copy shape with `report_id` replacing `uuid` and `createdAt` replacing `timestamp`. Allowlist-and-drop-unknown-keys pattern: `safeProperties` (lines 66-77) iterates an `allowed` list and type-checks each value; reuse that approach for the report payload so `email` can never ride along. Classify: RESEARCH.md `classify(status)` (408 is also retryable here, matching `retryableCapture`). Truncate errors with `.slice(0, n)` (analytics.logic.ts line 73 does `value.slice(0, 100)`).

### `src/services/problemReport.ts` (invoke + outbox flush)

**Analogs:** `src/services/analytics.ts` lines 108-167; `src/services/llm.ts` lines 22-33, 45+.

**Outbox I/O** (analytics.ts lines 109-123): module flag `outboxPending = true`, `readOutbox` validated + try/catch, `writeOutbox` removes the key when empty:
```typescript
async function readOutbox(): Promise<OutboxEntry[]> {
  try { return validOutbox(JSON.parse((await AsyncStorage.getItem(OUTBOX_KEY)) ?? '[]')); } catch { return []; }
}
async function writeOutbox(entries) { outboxPending = entries.length > 0;
  try { if (entries.length) await AsyncStorage.setItem(OUTBOX_KEY, JSON.stringify(entries)); else await AsyncStorage.removeItem(OUTBOX_KEY); } catch { /* ... */ } }
```
**Flush** (lines 150-167): serialise on a promise tail, write progress after each entry, stop at first retryable failure; export `flushProblemReportOutbox()` "Called on launch and on each return to foreground. Never awaited by a learner action."
```typescript
taskTail = taskTail.then(flushOutbox).catch(() => {});
```
**Status from invoke** (llm.ts lines 22-33): `functions.invoke` returns `error.context` as a `Response`; read `ctx.status`:
```typescript
const ctx = (error as { context?: Response }).context;
if (!ctx || typeof ctx.status !== 'number' ...) 
```
Client acquisition: `const sb = supabase();` (`./supabase`), `sb.functions.invoke(name, { body })`. Install id: `installId()` from `./analytics`. Context: `recentErrors()` (errors.ts line 63).

### `supabase/functions/report-problem/index.ts` (edge function)

**Analog:** `supabase/functions/tts/index.ts` (+ `delete-account/index.ts` for CORS/json helpers).

**Header comment convention** (tts lines 32-37): "Deploy: supabase functions deploy report-problem --no-verify-jwt ... the in-body callerUid() check is the real auth boundary."

**Imports/clients** (lines 46, 123-128):
```typescript
import { createClient } from "jsr:@supabase/supabase-js@2";
function serviceClient() {
  return createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
}
```
**Auth** (lines 137-153): copy `callerUid` verbatim. For D-17 email you also need the user object, so return `{ id, email }` from `data.user` (the analog returns only `data.user.id`; delete-account lines 49-56 shows the `caller.auth.getUser()` + `userData?.user` shape). Email comes only from `data.user.email`, never the body.

**Limits from system_config with 60 s cache and safe defaults** (lines 173-203): copy `ttsLimits()` structure (`num()` helper, try/catch to DEFAULT_LIMITS) for `reportDailyGuest`/`reportDailyUser`/global ceiling.

**Atomic counter via RPC, fail-open on DB blip** (lines 211-232): `serviceClient().rpc("tts_bump", {...})`, `Array.isArray(data) ? data[0] : null`, return null on error. NOTE: for abuse protection of an unauthenticated route consider failing closed or rely on global ceiling; the tts analog is fail-open because identity was settled, which is not true for guests (RESEARCH Pitfall 10).

**Response style** (lines 341-346, 386-392, 429-434): `cors` object, `OPTIONS` early return, JSON with status codes; 429 body carries a `reason`:
```typescript
return new Response(JSON.stringify({ error: `...`, reason: decision.reason, tier }), { status: 429, headers: { ...cors, "Content-Type": "application/json" } });
```
Better helper style is delete-account lines 23-33 (`const json = (body, status) => ...`). Use that, plus its method guard (`if (req.method !== 'POST') return json({ error: 'method-not-allowed' }, 405)`).
**Analytics from edge** (lines 250-259): optional `posthog()` helper, fire-and-forget.
**Insert idempotency:** `.upsert({ id: report_id, ... }, { onConflict: 'id', ignoreDuplicates: true })` using the service client (RESEARCH Pattern 3).

### `supabase/functions/report-problem/limits.ts` (+ `limits.test.ts`)

**Analog:** `supabase/functions/tts/quota.ts` / `quota.test.ts`. No Deno globals, no imports, runs under `node --test`. Export `DEFAULT_LIMITS`, a `LimitConfig` type, `validateReport(body)` (category enum, 1000 chars, body-size cap, unknown keys rejected, id patterns) and `decide(subjectTier, usage, limits)`. Test header and imports (quota.test.ts lines 1-17): `import { deepStrictEqual, strictEqual } from 'node:assert'; import { test } from 'node:test'; ... from './quota.ts'` (note the `.ts` extension in the edge test imports, unlike services tests).

### `supabase/schema.sql` (append `problem_reports`, `problem_report_usage`, bump fn)

**Analog:** same file, lines 287-391 (tts tables + functions).

**Table + RLS-no-policy** (lines 287-293, 314-321):
```sql
create table if not exists public.tts_usage_daily (
  subject_key text    not null,
  day         date    not null,
  chars       integer not null default 0,
  requests    integer not null default 0,
  primary key (subject_key, day)
);
alter table public.tts_usage_daily   enable row level security;
-- Quota: NO policies at all, deliberately ...
```
**Atomic bump function** (lines 329-370): `language plpgsql`, `set search_path = ''`, fully-qualified names, `on conflict ... do update set requests = t.requests + 1 returning ... into ...`, then `revoke all on function ... from public; ... from anon; ... from authenticated;` (three lines, lines 368-370; signature must list arg types).
**Cascade requirement** (delete-account header lines 12-15): "Any NEW user-owned table MUST carry the same cascade": `user_id uuid references auth.users(id) on delete cascade`. Use RESEARCH.md schema block as-is. Guard comment style: explain why no policies. Also add `report_*` keys to the `system_config` seed JSON (lines 239-256) with the same `do nothing` caveat comment.
**Plane warning:** this is the app plane (flat idempotent file, applied by hand per SETUP.md). Do NOT use `ealch-admin/drizzle`.

### `app/report-problem.tsx` (formSheet screen)

**Analog:** `app/fiche.tsx` (formSheet screen) with `_layout.tsx` registration.

**Imports** (fiche.tsx lines 1-12): `useRouter, useLocalSearchParams` from `expo-router`, `TX` from `@/components/Type`, `Press` from `@/components/ui`, `Icon` from `@/components/Icon`, `SheetGrabber, SHEET_CONTENT_PADDING` from `@/components/SheetChrome`, `useTheme`, `useT`.
**Params** (lines 37-38): array-or-string normalisation:
```typescript
const params = useLocalSearchParams<{ key?: string }>();
const raw = Array.isArray(params.key) ? params.key[0] : params.key;
```
**Back-out** (lines 41-51): `if (router.canGoBack()) router.back(); else router.replace('/den');` use the same for close/auto-dismiss (D-26).
**Layout caveat** (fiche.tsx lines 28-30): Android formSheet does not support `flex: 1` on a fitToContents root; the sheet here uses a single 0.92 detent, so UI-SPEC's pinned footer applies, verify on device.
**Registration** (`app/_layout.tsx` lines 172-186): copy the `fiche` block, change `name="report-problem"`, keep `contentStyle: { backgroundColor: t.sheet }` and a single `sheetAllowedDetents: [0.92]`.
**Test-render pattern:** see tests section.

### `app/_layout.tsx` (modify)

- Line 207: `<Stack.Screen name="feedback" options={{ animation: 'slide_from_right' }} />` -> `name="report"`; keep a `feedback` entry only if the redirect stub is kept.
- Lines 93-104: add `void flushProblemReportOutbox();` beside both `void flushAnalyticsOutbox();` calls (launch and `next === 'active' && lastAppState.current !== 'active'`).
- Lines 45-52: ErrorBoundary already calls `logError('render', error)` then `<ErrorScreen error retry />`; no change needed beyond the ErrorScreen panel.
- Import style: `import { flushAnalyticsOutbox } from '@/services/analytics';` (line 32).

### `app/report.tsx` (rename of `app/feedback.tsx`, Le Rapport fixes)

**Analog:** `app/feedback.tsx` itself. Use `git mv` so history follows. Edits at known lines:
- Line 60 `export default function Feedback()` -> `Report`.
- Line 69: `const drillName = (act: Activity) => (T.drillNames as Record<string, string>)[act] ?? act;` -> after typing `drillNames` as `Record<Activity, string>` drop the cast and the `?? act` fallback.
- Lines 73-113 (`report` useMemo): D-27 filter. Replace `attempts` use for `total`/`correct`/`perDrill` with `const scored = attempts.filter((a) => a.activity !== 'exam-review');` but leave `weakSpots(attempts, ...)` on the full `attempts` (line 92) because exam-review must still feed the weak list. `empty` (line 115) must derive from `scored.length`.
- Lines 28-57 `ConfidenceRing`: R5, wrap in `accessible accessibilityRole="text" accessibilityLabel=...` and hide the inner `TX` + caps label (`importantForAccessibility="no-hide-descendants"`, `accessibilityElementsHidden`).
- Lines 226-234 weak row `Press`: add `accessibilityLabel`; R6 push `{ pathname: '/lesson', params: { key: parsed.lessonId, at: anchor } }` already; verify landing under Concept C spine (see `app/den.tsx`/`act.tsx`, not mapped here).
- Lines 120, 142: `router.replace('/home')` unchanged.
- Router calls elsewhere: `app/roleplay.tsx:436` and `app/speak.tsx:356` `router.push('/feedback')` -> `'/report'`. No other route references exist in `app`/`src` (grep verified; other "feedback" hits are the English word).

### `app/feedback.tsx` (optional redirect stub)

**Partial analog:** `app/fiche.tsx` lines 45-51 uses `router.replace`. A stub can be `import { Redirect } from 'expo-router'; export default function Feedback() { return <Redirect href="/report" />; }`. `Redirect` is not used in a mapped file; check `app/index.tsx` for the existing redirect idiom before writing. RESEARCH says no stored deep links embed `ealch://feedback`, so the stub is optional safety (Open item for planner).

### `src/i18n/strings.ts` (drillNames + new keys)

**Analog:** itself. Type at line 64: `drillNames: { flashcards: string; voiceflash: string; dictation: string; sentence: string; roleplay: string; placement: string };` -> change to `Record<Activity, string>` (import the `Activity` type from `@/store/progress.logic`; check for an import cycle, strings.ts is a leaf today). FR values at line 527, EN at line 1038: one-line object each; extend with the 13-value table from UI-SPEC S8. Every new key goes in the type block AND both language blocks (FR line ~527 block, EN line ~1038 block). Copy rule: no em dash, no "honest" (enforced by `sons-alphabet.test.ts`).
**Test:** new `src/store/drillNames.test.ts` (node --test) iterating all 13 Activity values; since `Activity` is a type-only union, define the array of 13 in the test and add a compile-time exhaustiveness assertion (`satisfies Record<Activity, true>`).

### `app/settings.tsx` (two rows)

**Analog:** Licences row, lines 568-600. Copy exactly:
```tsx
<SectionHead label={T.aboutSec.toUpperCase()} />
<Press
  onPress={() => router.push('/licences')}
  accessibilityRole="button"
  accessibilityLabel={T.licT}
  style={{ minHeight: 58, borderRadius: 16, borderWidth: 1, borderColor: t.line(10), backgroundColor: t.card, ...t.cardShadow,
    flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 16, paddingVertical: 10, marginBottom: 24 }}
>
  <Icon name="book" size={18} color={t.txSecondary} />
  <View style={{ flex: 1 }}>
    <TX font="semi" role="body">{T.licT}</TX>
    <TX role="label" color={t.txSubtle} style={{ marginTop: 1 }}>{T.licSub}
```
Insert two sibling rows above it with `marginBottom: 8` (UI-SPEC S2); sub-line uses `role="meta" color={t.txMuted}` per UI-SPEC (the Licences row's own `label`/`txSubtle` is inherited, do not change). Rate row: `Linking.openURL(PLAY_APP).catch(() => Linking.openURL(PLAY_WEB).catch(() => {}))` (RESEARCH snippet), hide on iOS. Never import `expo-store-review` in this file (wiring test).

### `app/profile.tsx` ("Your report" row)

**Analog:** the same Licences row (settings.tsx). `profile.tsx` was not read in this pass; planner must read its section order to place the row after the stats and before account/sign-out (UI-SPEC S7 default). Action `router.push('/report')`, icon `book`.

### `src/components/ErrorScreen.tsx` (inline report panel)

**Analog:** itself. Constraints: no `useTheme`, `useT`, router (header lines 1-8). Extend the `COPY` object (lines 14-31, `fr` and `en` keys) with report strings. Colors are local consts (lines 46-51: `bg, tx, dim, line, surface, danger`). Buttons are raw `Pressable` with function style (lines 85-97):
```tsx
<Pressable onPress={retry} accessibilityRole="button" accessibilityLabel={copy.retry}
  style={({ pressed }) => ({ minHeight: 54, paddingVertical: 12, borderRadius: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: tx, opacity: pressed ? 0.8 : 1 })}>
  <Text allowFontScaling maxFontSizeMultiplier={1.6} style={{ color: bg, fontSize: 16, lineHeight: 23, fontWeight: '600' }}>
```
Ghost variant: same geometry, `borderWidth: 1.5, borderColor: tx`, transparent bg. Every `Text` carries `allowFontScaling` + `maxFontSizeMultiplier`. `useStore` read via `safeRead` (lines 34-40) only. For the payload, `entry` (lines 53-58) and `Constants.expoConfig?.version` (line 59) are already there. The panel may import only `problemReport.logic.ts` (pure) and a thin send function; the `useStore` import already exists in this file so one more service import is acceptable but keep it try/catch guarded.

### `src/components/Icon.tsx` (`flag` glyph)

**Analog:** itself. Add `'flag'` to the name union (top, `'chevronRight'` at line 8) and an entry in the map in the same shape as line 58: `chevronRight: { vb: 24, stroke: ['M9 6l6 6-6 6'] },` -> `flag: { vb: 24, stroke: ['M5 21V4', 'M5 4h11l-2 4 2 4H5'] },`.

### `app/lesson.tsx` (score plumbing, arm, flag icon)

**Analog:** itself.
- Lines 662-675: `const onQuizComplete = () => {` ignores args. Change to `(score: number, total: number) =>`; `LessonPager.tsx:105` already types `onQuizComplete: (score: number, total: number) => void` and `LessonRich.tsx:1436,1487` calls `onComplete(finalScore, total)`. Keep the `completedRef` first-completion guard (lines 663-664) so a retry cannot re-arm. Arm only when `score === total && total > 0` and `!L.id.startsWith('sons.')` right after the existing `trackEvent('lesson_completed', ...)` (line 672).
- Lines 677-692 `finish()` calls `router.back()`; `goNextLesson` (703-709) uses `router.replace` and never lands on the trail. Do NOT fire in this file; consume the pending flag on trail focus.
- Trail focus analogs: `app/home.tsx:128` and `app/den.tsx:191` both use `useFocusEffect` from expo-router (imports at home.tsx line 4, den.tsx line 3). Planner confirms which screen `router.back()` returns to (RESEARCH A8).
- Lines 765-790: `FocusHeader extra={<View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}> ... <Press cue={null} accessibilityRole="button" accessibilityLabel={T.lkHelp} hitSlop={8} style={{ width: 32, height: 32, ...` — the `extra` slot already hosts the language chip, SheetLink and the "?" help `Press`; add the flag `Press` here (44x44 per UI-SPEC, the neighbours are 32). `FocusHeader` itself is `src/components/ui.tsx:291-304`.
- **Caveat (Pitfall 1):** `QuizRoundsView.tsx:108` calls `onComplete?.(totalScore(cfg, state), progress.total)`, so `score === total` there means "total score equals progress total", which may not be a "100% correct" signal. Read `totalScore` before relying on it.
- `lessonId` for the flag: `L.id`; item id: the current mission index from `onIndexChange`/`lastFullIx` (lesson.tsx line 679), not read in detail here.

### `app/speak.tsx` (STT report action)

**Analog:** itself. The "hears nothing" branch is at lines 316-323: `else if (res.available && res.error !== 'not-allowed') { setNoHear((n) => n + 1); }`, state at lines 181-190. UI-SPEC S4 wants the quiet action on every hears-nothing result and every mic error; render conditionally on `noHear > 0` or the mic error state in the analysed-phase UI (not read here, planner reads the render section). Navigation: `router.push({ pathname: '/report-problem', params: { category: 'audio', screen: 'speak' } })`. Line 356 `router.push('/feedback')` -> `'/report'`. Same pattern applies to `app/narrated.tsx` and onboarding mic failure (`onboarding_mic_failed` event exists in analytics.logic.ts line 16), but only where an existing failure UI exists.

### `app/exam-report.tsx` (grading report action)

**Role-match only.** The file renders `g.feedback` at line 400 (`TX role="bodySm" ... {g.feedback}`) for graded items; the ungraded / grading-failed state was not located (grep for `ungraded|Retry grading` found nothing). Planner must locate the ungraded branch in `app/exam-report.tsx` (and `src/services/examGrader.ts` lines 66-82, the `{ live: false }` union member) before assigning the action.

### Tests

**Component test analog:** `__tests__/settings.test.tsx` lines 1-60.
```tsx
/// <reference types="jest" />   // required, see jest.setup.ts
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { render, screen, fireEvent } from '@testing-library/react-native';
const metrics = { frame: { x: 0, y: 0, width: 390, height: 844 }, insets: { top: 47, left: 0, right: 0, bottom: 34 } };
render(<SafeAreaProvider initialMetrics={metrics}><Settings /></SafeAreaProvider>);
beforeEach(() => { useStore.setState({ lang: 'en', sound: true }); });
screen.getByRole('button', { name: 'Close' }); await fireEvent.press(toggle);
```
Locale parameterisation: `__tests__/helpers/renderInLocale.tsx` (`renderInLocale(ui, 'fr' | 'en')` + `describe.each`). Seed attempts for Le Rapport with `useProgress.setState({ attempts: [...] })` (real stores, no mocks). Files must match `**/__tests__/**/*.test.tsx`; run `npm run test:component` (jest), never `pnpm`.

**Wiring (source-grep) analog:** `src/store/bannerSlotWiring.test.ts` lines 1-40: `readFileSync(resolve(root, p), 'utf8')` with `root = resolve(dirname(fileURLToPath(import.meta.url)), '../..')` (adjust `../..` depth for `src/services`), `ok(src.includes(...), message)`, `count(src, needle)`. That file's header comment says it exists so "Phase 10's rating prompt has a stable contract to add a fourth kind to"; Phase 10 adds NO banner kind (D-24), so keep its assertions and add none.

**Node test glob:** `npm test` = `node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"` (package.json line 69).

## Shared Patterns

### Never-throw persistence
**Source:** `src/services/acquisition.ts` lines 17-38, `src/services/analytics.ts` lines 111-123
**Apply to:** `reviewPrompt.ts`, `problemReport.ts`
Every AsyncStorage read/write in try/catch with a one-line comment; stored JSON is validated before use ("Stored entries are untrusted", analytics.logic.ts line 180).

### Fire-and-forget analytics
**Source:** `src/services/analytics.ts` lines 186-193
**Apply to:** `review_requested` (and any report event)
`track(event, props)` is never awaited; payload passes through `safeProperties` allowlist.

### Pure logic file split
**Source:** `analytics.logic.ts` / `analytics.ts`, `acquisition.logic.ts` / `acquisition.ts`, `tts/quota.ts` / `tts/index.ts`
**Apply to:** reviewPrompt, problemReport, report-problem edge
Branchy rules in a zero-RN-import `.logic.ts` with sibling `.test.ts`; the I/O file imports from it.

### Edge auth boundary
**Source:** `supabase/functions/tts/index.ts` lines 130-153 (`callerUid`), `delete-account/index.ts` lines 35-72
**Apply to:** `report-problem/index.ts`
`--no-verify-jwt`, in-body `auth.getUser()` with caller-scoped anon client, then service-role client for DB. Identity (uid, email) only from the verified token.

### Error ring
**Source:** `src/services/errors.ts` lines 14-25, 63-65, 68-78
**Apply to:** report payload (last 10, truncate message/stack), D-06 skip
`recentErrors(): readonly LoggedError[]` returns the live ring (max 10, `RING_SIZE`). `formatForReport` is text-only and not suitable for the structured payload; build the array from `recentErrors()` fields `{scope, message, stack, at}`.

### formSheet registration
**Source:** `app/_layout.tsx` lines 172-202
**Apply to:** `report-problem`
Single detent 0.92, `sheetCornerRadius: 26`, grabber, `gestureDirection: 'vertical'`, `contentStyle: { backgroundColor: t.sheet }`.

### Copy rules
**Source:** `sons-alphabet.test.ts` (enforces "honest"), UI-SPEC copy table
**Apply to:** all new strings (strings.ts and ErrorScreen COPY)
No em dash, no "honest", French first, both language blocks populated. Note existing ErrorScreen COPY (lines 18, 26) contains em dashes; do not copy that style.

### Two package managers / commit hygiene
`ealch-v2` is npm. New `.md` need `git add -f`. Use `git commit --only -- <paths>`. Fingerprint changes with `expo-store-review`; ship by binary (D-33).

## No Analog Found

| File | Role | Data Flow | Reason |
|---|---|---|---|
| Offline detection for D-06 | utility | request-response | No NetInfo/expo-network in repo (RESEARCH). Closest signal is `refreshConfig()` success/fail in `src/services/config.ts` lines 116-141 (returns cached on failure but does not expose which path ran); planner must add a boolean there or use the invoke result. |
| `pg_cron` retention job (D-20) | migration | batch | No `cron` usage in `schema.sql`. Use RESEARCH Open Q2 recommendation. |
| `expo-store-review` native call | service | event-driven | Not installed; use RESEARCH "Review call" snippet; no in-repo native-module wrapper to copy beyond `lookupPlayReferrer` in acquisition.ts lines 51-73 (dynamic `await import('expo-application')`, platform guard, try/catch) which is a good shape for lazy-importing the module. |
| Redirect stub for `/feedback` | route | redirect | No `Redirect` usage confirmed in files read; check `app/index.tsx`. |

## Open items for the planner (found while mapping)

1. `entitlement.logic.ts` named in CONTEXT/RESEARCH does not exist; use the analogs above.
2. `QuizRoundsView` score semantics vs `QuizDeckView` for the "100%" trigger (see lesson.tsx notes).
3. `app/profile.tsx`, `app/exam-report.tsx` ungraded branch, `app/den.tsx`/`home.tsx` focus handlers and the STT render section were not read in detail; planner or executor should read them before editing.
4. `src/i18n/strings.ts` importing `Activity` from `progress.logic` needs a cycle check.

## Metadata

**Analog search scope:** `ealch-v2/app`, `ealch-v2/src/{services,store,components,i18n}`, `ealch-v2/supabase/{schema.sql,functions}`, `ealch-v2/__tests__`
**Files read:** ~20 (full or targeted)
**Pattern extraction date:** 2026-10-01
