# Workstreams

Four things are in flight at once. GSD's `.planning/` tracks exactly one of
them, which is why the other three keep surprising us.

This file is the shared board. It holds **current position only** — where each
path is right now, what it is waiting on, what comes next. It is not a log and
not a spec. Durable findings go to memory; specs stay in their own documents.

**The protocol.** Claude reads this and `STATE.md` at the start of a session and
reports the deltas before doing anything else. Claude writes it back at the end
of a session, in the same commit as the work. Paul edits any line, any time —
the human line is always right and Claude reconciles to it, never the reverse.

Last sync: 2026-09-23, after publishing v73 (adb8129).

---

## A · Product phases (GSD)

**Owns** the v1.0 milestone: entitlement, paywall, notifications, bugs,
accessibility, mascot, snapshot split.
**Lives in** `.planning/` — ROADMAP.md, STATE.md, phases/.
**Driven by** `/gsd-progress`, `/gsd-plan-phase`, `/gsd-execute-phase`.

| | |
|---|---|
| Position | Phase 22.1, **plan 8 of 8**. 07 done and summarised; 08 is the device pass |
| Next | 22.1-08: EAS preview build, Pixel, airplane mode, cold start vs plan 06's 524ms |
| Blocked on | **Paul: it needs a physical device.** Nothing Claude can run |

**Known drift:** STATE.md reads `Plan: 3 of 8` and `total_phases: 24 /
completed_phases: 8`. The plan number is wrong. The 96% figure counts 48 of 50
*written* plans, but phases 11–17 are mostly "Plans: TBD", so by phase the
milestone is 8/24. Treat 96% as meaningless until the remaining phases are
planned.

---

## B · B1–C2 curriculum content

**Owns** authoring lessons from B1 upward: corpora, terms, lesson bodies,
narration scripts.
**Lives in** `ealch-admin/scripts/data/b1/`, governed by `B1-C2-BUILD-SEQUENCE.md`,
`B1-PILOT-BRIEF.md` and `RICH-LESSON-STANDARD.md`.
**Driven by** Paul, directly.

| | |
|---|---|
| Position | Committed (ff4fdf8). b1.01 formation (12 acts, 85 missions), b1.02 usages, b1.03 pc-imparfait, b1.04 paires |
| Next | Paul's call — finish the b1.01–04 pilot, or publish b1.01 first |
| Blocked on | Nothing |

**Not on the roadmap.** No GSD phase covers B1 content. That is fine as long as
we both know it, and stops being fine the moment it needs app changes.

**Watch:** b1.01 is still seed-absent, reachable only through the dev preview.
Publishing is now unblocked: v73 went out cleanly, so b1.01 ships whenever it is
marked published in Postgres.

---

## C · Spine redesign (Den / Act / Mission)

**Owns** the navigation rewrite: the Trail, the level panel, the act screen,
the three-state language control.
**Lives in** the Design canvas — https://claude.ai/artifact/YcQn6EAGDab4rSAqiEe9Wt
**Driven by** review on the canvas, then a GSD phase that does not exist yet.

| | |
|---|---|
| Position | Concept C (Trail) approved. Level panel approved. Mastery stats, review-release surfacing and the unit-completion toast approved |
| Next | Six artboards: 4 new (first-run trail, narrated entry, language picker states, paywall row) + 2 amendments (C-Sheet intro listen, C-Act opener play) |
| Blocked on | **Paul: where does this live?** Insert as a phase before Phase 5, or start a new milestone |

**Collides with** Phase 5 (paywall placement is the same decision), Phase 13
(hard dependency, audits the screens this replaces), Phases 11–12 (Rive is
already committed as ANIM-01, so motion is not an open question).

**Open, carried into whichever phase takes this:** where achievements live once
the unit stops being a screen; whether the unit badge survives at all.

---

## D · Assets and guards

**Owns** lesson art, audio refs, and the tests that stop either from shipping
broken.
**Lives in** `ealch-admin/scripts/gen-*.mjs`, `ealch-v2/assets/lessons/`,
`ealch-v2/src/content/lessonImages.ts`, `image-refs.test.ts`.

| | |
|---|---|
| Position | 30 images live, registered, labelled, committed (6445c55, d205bdf). Guard test green, 7 assertions |
| Next | Nothing queued. Next image work is whatever the spine redesign needs |
| Blocked on | Nothing |

**Debt, baselined in `image-refs.test.ts` so it stays visible:**

- ~~15 published refs with no art~~ — closed d205bdf, KNOWN_UNREGISTERED is empty
- 22 registered images with no alt text, all predating the ALT table. This is
  the remaining image debt and it belongs to Phase 8, accessibility.

**Duplication to resolve:** `b1/imparfait-image-prompts.md` and
`gen-imparfait-images.mjs` describe the same twelve images. Keep one. The
script is runnable and carries alt text; the markdown is paste-into-a-chat.

---

## Cross-cutting, owned by nobody yet

**The branch.** `feat/sons-course` is **653 commits ahead** of
`build/ealch-v2-expo` and 0 behind. It is trunk in everything but name, and the
name describes work that finished long ago. Five stale branches sit beside it:
four `worktree-agent-*` and `fix/sons06-lesson-layout`.

**Alt text does not reach the screen yet.** `lessonImageAlt()` is committed;
its caller in `LessonRich.tsx` is not. Lands when that in-flight change does.

**Nothing is proven on device.** Code paths are complete, which is not the same
as rendered. This is now the only blocker on path A.

**There are no users.** `attempts`, `learning_sessions`, `entitlements` and
`subscriptions` are all 0 rows; 5 auth users and 1 profile are test accounts.
Every "this would wipe learner progress" constraint is protecting nothing today,
which makes this the cheapest moment there will ever be for structural change.

**a1.03's figures are measured against 22.9% of the corpus.** 0 of 27 endings
read the same in the seed cut and the full corpus; `-on` is 53% accurate in one
and 74% in the other. Re-measuring keeps the suite green and the teaching wrong.
Measuring against the corpus is the fix and touches ~16 coupled files, so it
wants its own phase. See `_a1_genre_cut_vs_full.ts`.
