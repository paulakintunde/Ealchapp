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

Last sync: 2026-09-22, after the b1.01 art commit (6445c55).

---

## A · Product phases (GSD)

**Owns** the v1.0 milestone: entitlement, paywall, notifications, bugs,
accessibility, mascot, snapshot split.
**Lives in** `.planning/` — ROADMAP.md, STATE.md, phases/.
**Driven by** `/gsd-progress`, `/gsd-plan-phase`, `/gsd-execute-phase`.

| | |
|---|---|
| Position | Phase 22.1, **plan 7 of 8** (01–06 have SUMMARYs; 07, 08 do not) |
| Next | Execute 22.1-07, then 22.1-08, then close the phase |
| Blocked on | Nothing |

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
| Position | b1.01 formation authored (12 acts, 85 missions). b1.02 usages, b1.03 pc-imparfait, b1.04 paires drafted |
| Next | Paul's call — finish the b1.01–04 pilot, or publish b1.01 first |
| Blocked on | Nothing |

**Not on the roadmap.** No GSD phase covers B1 content. That is fine as long as
we both know it, and stops being fine the moment it needs app changes.

**Watch:** none of `b1/` is committed. It is untracked, so it exists only on
this machine.

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
| Position | b1.01: 15 images live, registered, labelled, committed (6445c55). Guard test green, 7 assertions |
| Next | Run `gen-sons-missing-images.mjs` for the 15 refs that currently draw nothing |
| Blocked on | Nothing |

**Debt, baselined in `image-refs.test.ts` so it stays visible:**

- 15 published refs with no art — masterclass 5, elision 5, liaison 4, accents 1
- 22 registered images with no alt text, all predating the ALT table

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

**Nothing is proven on device this session.** Code paths are complete, which is
not the same as rendered.
