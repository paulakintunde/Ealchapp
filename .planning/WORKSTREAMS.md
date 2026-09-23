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

Last sync: 2026-09-23, after publishing v73 (adb8129) and the tracking pass over
ROADMAP.md / STATE.md.

---

## A · Product phases (GSD)

**Owns** the v1.0 milestone: entitlement, paywall, notifications, bugs,
accessibility, mascot, snapshot split.
**Lives in** `.planning/` — ROADMAP.md, STATE.md, phases/.
**Driven by** `/gsd-progress`, `/gsd-plan-phase`, `/gsd-execute-phase`.

| | |
|---|---|
| Position | Phase 22.1, **plan 8 of 8**. 07 done, summarised and now checked off in ROADMAP.md; 08 is the device pass |
| Next | 22.1-08: EAS preview build, Pixel, airplane mode, cold start vs plan 06's 524ms |
| Blocked on | **Paul: it needs a physical device.** Nothing Claude can run |

**Drift, closed 2026-09-23.** STATE.md used to read `Plan: 3 of 8` and report
96%. Both are fixed: it now reads plan 7 of 8, and the headline figure is
**8/24 phases (33%)**, counted by phase rather than by written plan. The old
96% divided 48 by the 50 plans that had been *written*, while Phases 8–17 and
19–23 sit at "0/TBD" and contributed nothing to the denominator. ROADMAP.md's
progress table was stale in the same direction — Phases 3, 5, 6 and 7 showed
"0/TBD | Not started" on top of complete plan+summary sets, and 22.1 had no row
at all. Corrected, with a "How to read this table" note under it so the
percentage does not creep back.

---

## B · B1–C2 curriculum content

**Owns** authoring lessons from B1 upward: corpora, terms, lesson bodies,
narration scripts.
**Lives in** `ealch-admin/scripts/data/b1/`, governed by `B1-C2-BUILD-SEQUENCE.md`,
`B1-PILOT-BRIEF.md` and `RICH-LESSON-STANDARD.md`.
**Driven by** Paul, directly.

| | |
|---|---|
| Position | Lessons committed (ff4fdf8): b1.01 formation (12 acts, 85 missions), b1.02 usages, b1.03 pc-imparfait, b1.04 paires. **Plus live uncommitted work in the tree — see below** |
| Next | Paul's call — finish the b1.01–04 pilot, or publish b1.01 first |
| Blocked on | Nothing |

**The working tree is dirty on purpose.** Whoever opens this repo next: the
uncommitted changes are this workstream mid-flight, not leftovers, and not
something to reset. Two distinct pieces:

1. **The B1+ English toggle.** The EN pill that hides glosses from b1 upward.
   New: `src/content/english.logic.ts` + its test, `src/components/GlossContext.tsx`,
   `src/content/dev-preview-b101.json`. Modified: `Type.tsx`, `LessonPager.tsx`,
   `LessonRich.tsx`, `LessonSection.tsx`, `MissionRich.tsx`, `ScenePlayer.tsx`,
   `WordCardXL.tsx`, `LessonDeck.tsx`, `app/den.tsx`, `app/lesson.tsx`,
   `content/schema.ts`, `services/content.ts`, `store/useStore.ts`.
   `english.logic.ts` is not `gloss.logic.ts` — that one is the reading matcher
   and must not be overwritten.
2. **a2.20 participes, text only — and git is behind Postgres here.**
   `participes-corpus.ts` E604 "I knew the answer" to "I found out the answer"
   and E606 "I wanted to leave" to "I tried to leave", the passé composé
   readings b1.04 teaches, so the old glosses taught the error b1.04 corrects.
   `participes-lesson.ts` carries the matching **NO BUMP** note (Corrections
   §16.7): `Lesson.version` keys learner checkmarks and XP, so a text-only fix
   does not touch it. The separate a2.20 v4-to-v3 *version* revert is already
   committed, as f32f05d during 22.1-07.

   **Commit these two files.** The corrected glosses already shipped: they are
   in Postgres and in `seed.json` as of v73 (adb8129 — `grep "I found out the
   answer" seed.json` returns 3 hits, the old wording 0). Only the authoring
   source that generated them is still uncommitted, so HEAD's
   `participes-corpus.ts` disagrees with the content it is supposed to be the
   source of. Anything that regenerates from the committed source would undo a
   published fix.

The rest of the dirty tree, so nobody has to re-derive it:
`ealch-admin/PUBLISH-REPORT.md` is generated — it currently holds the
**post-publish dry run**, "IDENTICAL to v73, not one byte differs", which is the
proof 22.1-07 was actually finished rather than left mid-flight.
`AUDIT-EVIDENCE/` and `ealch-admin/scripts/find-french-notes.ts` belong to the
v1.0 milestone audit, untracked because `*.md` is gitignored here (new ones need
`git add -f`). Genuinely stray and safe to delete: `ealch-v2/bash.exe.stackdump`
and `ealch-v2/supabase/.temp/cli-latest`.

**Not on the roadmap.** No GSD phase covers B1 content. That is fine as long as
we both know it, and stops being fine the moment it needs app changes — and the
English toggle above **is** app changes, across thirteen files in `ealch-v2/`.
That line has now been crossed. It wants either a GSD phase or an explicit
decision to keep it outside `.planning/`.

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
| Position | **Phase 07.1 exists** (ROADMAP.md, inserted after Phase 7, NAV-01, 8 success criteria). Canvas v11, Concept C and all six outstanding boards approved. The design work is finished |
| Next | `/gsd-plan-phase 07.1` — but commit and device-prove the two-state English toggle first, see below |
| Blocked on | Nothing. The placement question that sat here since 2026-09-22 is answered |

**Ratified 2026-09-23.** Decisions now, not options. Build from them:

- **Acte 00.** The narrated lesson becomes a row at the top of each unit's act
  list, headphone glyph instead of a dot, opening a pre-roll sheet. It had to
  move: C turns the unit row into a heading carrying one "Fiche" chip, so the
  narrated pill `den.tsx` draws today (`T.narrCta`) has nowhere left to sit.
- **A third language state.** `englishShown(band, pref)` stops being a boolean.
  The third state is "anglais a la demande": the translation exists, hidden
  until tapped. The control takes the level-panel shape, a chip opening rows,
  so a fourth mode costs one row. Answers still never hide.
- **The paywall's two positions.** End of the A1 trail, and pinned above a
  locked band's trail. Locked acts stay readable and pressable in both. **This
  settles Phase 5 placement.** It moves where the ratified gating rule is
  *shown* and does not touch the rule.
- **The trail heading follows the teaching language.** The heading has one line
  where `den.tsx` has two, and every unit carries both names (`sons.04` is
  `"French Consonants"` / `"Les consonnes"`). English title for sons, A1 and A2;
  French sub for B1 and above; same split as `ENGLISH_TAUGHT_BANDS`, so one
  constant drives the heading and the language control. The sons, A1 and A2
  headings on the boards were redrawn to real seed titles at canvas v11.

**Still open, one level down:** act and mission naming language. The boards now
show French act names under English unit headings, and C3 shows English mission
names with French subs. Same question, not answered. It belongs in the phase.

**Do this before planning 07.1.** The two-state English toggle is uncommitted
across thirteen files in `ealch-v2/` and has never run on a device. Criterion 5
extends it to three states. Extending an unverified base means a device failure
will be ambiguous between the old work and the new.

**What the insertion changed elsewhere.** Phases 8, 9, 11, 12 and 13 now depend
on 07.1 and left the free-parallel set, because it replaces the screens they
audit, instrument, animate and polish. Phase 9 was not on your list and is the
one worth noting: the day-one trail puts a placement offer and an orientation
card on the first screen, which changes the shape of its activation funnel
between `onboarding_started` and `first_lesson_started`.

**One thing to watch in GSD itself.** `gsd-sdk query state.add-roadmap-evolution`
rewrote STATE.md's frontmatter as a side effect: it dropped `percent_basis` and
`percent_note` and recomputed `percent` back to 98, the plans-over-plans-written
figure that was deliberately corrected to a phase basis. It also overwrote
`status` with a free-text sentence. All three were restored by hand. If 98
reappears in STATE.md, that is the handler, not real progress.

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
