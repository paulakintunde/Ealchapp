# Screen Test Coverage Audit — Source Document for Phase 22

**Gathered:** 2026-09-22, during Phase 18 planning discussion
**Status:** Reference document — read this before discussing/planning Phase 22

## Why this phase exists

Phase 18 (Component Test Infrastructure) and Phase 19 (High-Risk Test Coverage) between them give exactly 2 of the app's 49 screens automated component-render tests: `settings.tsx` (Phase 18) and `exam-section.tsx` (Phase 19, via the exam-grading E2E test). That is ~4% of the screen surface. This document is the evidence base for closing the rest, gathered by direct measurement of this codebase — not estimation.

## The numbers

- **49 screens** (`ealch-v2/app/*.tsx`), **15,858 lines**
- **39 shared components** (`ealch-v2/src/components/*.tsx`), **14,428 lines**
- **0%** currently have component-render tests (confirmed: no `jest.config*` anywhere in the repo before Phase 18, no `__tests__/` directory, no `@testing-library/react-native` dependency)
- After Phase 18 + 19: **2 of 49 screens** (~4%) get direct coverage

## The historical fact: 45% of screens have already shipped a bug

Searched `git log --all --grep="^fix" -- ealch-v2/app/*.tsx` (fix-prefixed commits touching a screen file). Found **31 fix commits touching 22 of the 49 screens** — a real, measured 45% historical defect rate on files with zero regression-test safety net today.

Breakdown by area (fix-commit count):
| Area | Fix commits |
|------|-------------|
| exam (exam-section, exam-paper, exam-report, exam.tsx combined) | 10 |
| player | 2 |
| lesson | 2 |
| flashcards | 1 |
| playlists | 1 |
| missions | 1 |
| speak | 1 |
| theme | 1 |
| entitlement (`_layout`/global) | 1 |
| a11y | 1 |
| overview (lessonoverview) | 1 |
| content, copy, type, react, 05-02/05-review (misc) | ~9 |

**Real examples, quoting the actual fix commit messages** (these are user-facing bugs that shipped, not hypotheticals):
- `a63a11a fix(player,speak): a playlist that does not exist is not a different playlist`
- `2781dc1 fix(exam): render the DELF debate, which was published and could not be played`
- `851f844 fix(exam): stop apologising for an answer the candidate never gave`
- `56c79a7 fix(lesson): number a lesson by where it sits, not by what its id says`
- `08d2d53 fix(flashcards): the rest of the audit findings, F1 and F3 through F12`

**The mechanism that makes this ongoing risk, not past risk:** BUG-03 in Phase 7 of this same milestone (`continuous: false` in `stt.ts`) reverted **twice in 13 minutes** with no automated test catching either revert — the exact silent-regression failure mode that stays live on every screen below with no test.

## Screen inventory, by coverage status and priority

### Already covered (2 screens)
| Screen | Lines | Covered by |
|--------|-------|-----------|
| `settings.tsx` | 634 | Phase 18 |
| `exam-section.tsx` | 960 | Phase 19 (TEST-01, exam grading E2E) |

### Tier 1 — proven buggy (a real fix commit exists), not yet covered — 21 screens
Prioritize this tier first: these are not speculative risk, they are screens that have already broken in production at least once. Sorted by size (larger = more logic/state = generally more surface area, a reasonable first-pass ordering heuristic — not a substitute for actually reading each screen during planning).

| Screen | Lines | Screen | Lines |
|--------|-------|--------|-------|
| `speak.tsx` | 817 | `player.tsx` | 325 |
| `voiceflash.tsx` | 747 | `narrated.tsx` | 323 |
| `lesson.tsx` | 742 | `exam.tsx` | 226 |
| `home.tsx` | 669 | `flashtypes.tsx` | 222 |
| `flashcards.tsx` | 641 | `theme.tsx` | 221 |
| `sentence.tsx` | 587 | `lessonoverview.tsx` | 183 |
| `exam-report.tsx` | 566 | `_layout.tsx` | 166 |
| `dictation.tsx` | 539 | `downloads.tsx` | 164 |
| `roleplay.tsx` | 486 | `missions.tsx` | 150 |
| `exam-paper.tsx` | 405 | `flashhub.tsx` | 118 |
| | | `playlists.tsx` | 91 |

### Tier 2 — no documented bug yet, still zero test coverage — 26 screens
Lower priority than Tier 1, but real: absence of a recorded bug is not evidence of correctness, only evidence that nobody has found and logged one yet (or a bug shipped and was fixed without a `fix:`-prefixed commit message — the git-log method here is a lower bound, not an exhaustive audit).

| Screen | Lines | Screen | Lines |
|--------|-------|--------|-------|
| `onboarding.tsx` | 714 | `sentencethemes.tsx` | 182 |
| `profile.tsx` | 569 | `smartreview.tsx` | 178 |
| `paywall.tsx` | 454 | `flashthemes.tsx` | 177 |
| `speakmap.tsx` | 316 | `reset.tsx` | 170 |
| `placement.tsx` | 304 | `signin.tsx` | 162 |
| `feedback.tsx` | 268 | `licences.tsx` | 159 |
| `chat.tsx` | 254 | `voices.tsx` | 156 |
| `den.tsx` | 253 | `dictationhub.tsx` | 155 |
| `review.tsx` | 213 | `voicethemes.tsx` | 154 |
| `delete-account.tsx` | 208 | `sentencehub.tsx` | 141 |
| `themes.tsx` | 199 | `voicehub.tsx` | 107 |
| `dictationthemes.tsx` | 191 | `roleplayhub.tsx` | 97 |
| | | `splash.tsx` | 86 |
| | | `index.tsx` | 9 |

## Cross-references to other phases — avoid duplicate work

- **`onboarding.tsx` / `placement.tsx`**: also named in `REQUIREMENTS.md`'s QA-01, mapped to Phase 9 (Onboarding & Analytics Audit). Phase 9 is a manual bug-audit pass; Phase 22 would add automated regression tests. Complementary, not redundant — but coordinate ordering (Phase 9's audit findings may inform what Phase 22 should specifically assert) if both are active near the same time.
- **`exam-section.tsx`**: covered by Phase 19 already — excluded from this document's Tier 1 count for that reason (the raw git-log query still finds it, since it has genuine fix-commit history, but it's not part of the "remaining gap").
- **`_layout.tsx`**: has fix-commit history (entitlement-related) and is the app's root layout — any test here has app-wide blast radius; likely worth an early, careful pass rather than treating it as "just another screen."
- **`paywall.tsx`**: Phase 5 (Paywall Coverage Expansion) already validated its entitlement-gating logic; a Phase 22 test here would cover rendering/interaction, not re-litigate Phase 5's gating decisions.

## What this document is NOT

This is a source document, not a plan. It does not decide: which screens Phase 22 actually commits to (all 47? Tier 1 only? a subset per milestone?), what "covered" means per screen (smoke-only vs interaction-level, mirroring Phase 18's D-02 discussion), how work is batched into plans/waves, or timing relative to other phases. Those are `/gsd-discuss-phase 22` and `/gsd-plan-phase 22` decisions, to be made when this phase is actually started — deliberately deferred per the user's instruction to document now, plan later.

## Method notes (for whoever re-runs this later)

- Screen/line counts: `find app -name "*.tsx" -exec wc -l {} +` from `ealch-v2/`
- Bug history: `git log --oneline --all --grep="^fix" -- ealch-v2/app/*.tsx`, then `git log --all --grep="^fix" --name-only -- ealch-v2/app/*.tsx | grep "^ealch-v2/app/" | sort -u` for the unique-screens list
- This method has a lower bound: it only catches commits with a `fix(...)`-prefixed conventional-commit message that also touched an `app/*.tsx` file directly. A bug fixed entirely in a service/store file that a screen merely consumes, or a fix commit not using the `fix:` prefix convention, would not surface here. Re-running closer to Phase 22's actual planning date is recommended, since more fix commits will have landed by then.
