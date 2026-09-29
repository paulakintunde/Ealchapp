# Phase 9 Pattern Map

**Mapped:** 2026-09-29. Read these live files again before implementation; this is a planning snapshot.

| Role | Existing analog and concrete pattern | Phase 9 use |
|---|---|---|
| Nonblocking telemetry | `ealch-v2/src/services/analytics.ts`: `track()` returns `void`, `void send(...)`, one JSON POST to `${ENV.posthogHost}/capture/`, catches network errors. | Keep user actions nonblocking; add event-specific payload types and capture acceptance diagnostics in test builds. |
| Stable install identity | Same file: `AsyncStorage` key `ealch-analytics-id`, `Crypto.randomUUID()`. | Retain separate install ID; add rotatable anonymous journey ID and one-time first-open marker. |
| Persisted app preferences | `ealch-v2/src/store/useStore.ts`: Zustand `persist`, versioned `migrate`, `partialize` allowlist. | Store wizard checkpoint and completed step set; explicitly add fields to `partialize`, omit password and microphone data. |
| Persisted progress | `ealch-v2/src/store/useProgress.ts`: `logSession` stamps `localDay(new Date())`; `markMissionDone` is idempotent. | Emit streak on first session of a new local day after write; attach lesson completion to progress/session authority. |
| Wizard state | `ealch-v2/app/onboarding.tsx`: 0..11 step state; `finish()` calls `completeOnboarding`; `submitAccount()` awaits `auth.signUpWithEmail`; step 8 permission path; step 9 STT optional. | Resume last unfinished step; count first step completion once; add explicit quiet skip and recovery copy from UI-SPEC. |
| Auth authority | `ealch-v2/src/services/session.ts`: `onAuthStateChange` updates `userId`; `app/signin.tsx` also marks app onboarded. | Signup completion waits for real session and signup intent; existing sign-in does not emit wizard completion or link prior guest. |
| Placement grading | `ealch-v2/app/placement.tsx`: `buildQuickCheck()`, `pick()`, `advance()`, `placementEstimate(answers)`, `logAttempt`, `logSession`. | Persist question order, answers, and attempt ID; first result vs retakes; no-question recovery; explicit abandonment. |
| Lesson gate | `ealch-v2/app/lesson.tsx`: gate effect routes locked lesson to paywall; `onQuizComplete()` and no-quiz `finish()` write session/progress. | First lesson event only after gate/content; complete event after recorded completion. |
| Exam results | `ealch-v2/app/exam-section.tsx`: submit callback logs every task result, then session, then `setPhase('done')`. | Emit section submission after result writes with outcome IDs only. |
| Purchase | `ealch-v2/app/paywall.tsx`: purchase event after `purchasePremiere` outcome. | Keep sandbox path, add capture acceptance proof and safe result payloads. |
| Tests | `ealch-v2/src/store/progress.test.ts`, `src/services/purchases.logic.test.ts` use `node --test`; `__tests__/*.test.tsx` use Jest. | Pure logic in Node, route behavior in Jest, transport fake for 2xx/4xx/offline. |

Native attribution has no existing bridge analog in this app. Use the [Expo local module contract](https://docs.expo.dev/more/create-expo-module/) and [Google Play Install Referrer library](https://developer.android.com/google/play/installreferrer/library) as implementation references; require a rebuilt native development client.
