# C2 build log and plan

The resume point for C2, started 2026-10-08 the day after C1 finished (v88). A
cleared session reads THIS file first. C2 reuses the B1/B2/C1 factory whole;
this file records only what is different and, right now, what is BLOCKED.

## Where C2 actually stood when this file was written (verified, not assumed)

Two independent code-mapping passes plus direct spot-checks against the live
source and the live database found that most of "c2 becomes a real level" was
**already done**, nine days before this file existed — in phase 07.1, decision
D-32 (2026-09-24), which reversed the original "C2 = scoring band only" call.
None of it has anything to do with C1, which was built entirely after:

- `ealch-v2/src/content/schema.ts` `LEVELS` already includes `'c2'` (comment on
  the constant names the reversal and the date). `SPEAK_WORLD_LEVELS` correctly
  still excludes it on purpose — there is no 7th Speak world for c2 by design.
- Postgres `content_level` enum has always carried `'c2'` (enums can't be
  narrowed); the CHECK constraint that made it unwritable was dropped live in
  `drizzle/0022_content_items_allow_c2.sql`. Confirmed directly against the
  live database: the constraint is gone, the enum has all 7 values.
- The level panel already renders a locked "C2 · bientôt / soon" row, in both
  languages, generically (`LEVELS.map`), with its own test guarding against a
  hardcoded list.
- The paid-packs system already reserves a c2 slot: `PAID_BANDS`/`PACK_ORDER`
  include it, and the manifest already carries an empty `c2` pack (0 lessons,
  0 items), confirmed in `C1-BUILD-PLAN.md`'s own text ("kept at v79").
- `seed-cut.config.ts`'s `SeedCut.tracks` type and `TEST_CUT.tracks` already
  include `'c2'`; a test already asserts a `c2.01` unit id passes the test-cut
  check cleanly. No config change needed when the first c2 unit ships.

**What was genuinely still missing, fixed 2026-10-08 (`1a7398b`):**

- `ealch-admin/scripts/b1-import.logic.ts`: `Band` was `'b1'|'b2'|'c1'`, with no
  `C2_SLUGS`. Added `'c2'` to `BANDS`, an empty `C2_SLUGS`, wired into
  `BAND_SLUGS` — the exact pattern C1 used when it was the new band. Every
  downstream script (`b1-import.ts`, `b1-merge-into-seed.ts`,
  `b1-trial-merge.ts`, `scratch/_app-checks-b1.mts`,
  `scripts/data/b1/_preview-b1.ts`) already reads `BAND_SLUGS` generically, so
  none of them needed a change — only this one file did.
- Two tests in `b1-import.logic.test.ts` that pinned c2 as REJECTED, flipped.
- `ealch-v2/src/utils/score.ts` `barsForLevel` had no `case 'c2'` and silently
  used b1's leniency for a pronunciation-shadowing C2 learner. Added a
  stricter tier: 92% good / 68% close (c1 is 88%/62%; the gap from c1 to c2 is
  the same kind of tightening as b2 to c1).
- `ealch-admin`'s Ops Console curriculum screen (`actions.ts`,
  `NewThemeButton.tsx`) each hand-type their own 6-level list, so a c2-ranged
  theme could not be created through that UI even though the schema already
  accepted one. Added `'c2'` to both.

Suites green both repos after: admin 1299/1299 + 1 skipped, app 5778/5778,
both typecheck clean.

**Deliberately NOT touched:**

- `seed-cut.config.ts`'s `SEED_CUT.units` (the legacy, pre-packs bundle list)
  — C1 units were never added there either; a new band arrives purely by
  download via the packs path, not bundled in the binary. C2 should follow
  the same precedent.
- `PAID_BANDS`/`PACK_ORDER` in `packs.logic.ts` — already correct, and it's a
  hand-typed literal rather than derived from `LEVELS` (a structural risk for
  whatever band comes after c2, not blocking today).
- No `dalf_c2` exam format exists (`EXAM_FORMATS` stops at `dalf_c1`). This is
  a product decision — a C2 diploma-exam product — not a content-authoring
  blocker, and nobody has asked for one yet.

## BLOCKED: the actual C2 lesson list

Paul supplied a 111-lesson B1-C2 plan on 2026-09-22 (b1-l01..l39, b2-l01..l34,
c1-l01..l24, c2-l01..l14), pasted directly into a chat session. **That list was
never saved to a file in this repo.** A search for every trace of it found only:

- `ealch-admin/scripts/data/b1/B1-C2-BUILD-SEQUENCE.md` — the wave GROUPING
  (c2.01-04, c2.05-08, c2.09-12, c2.13-14) and one topic hint ("c2.07 poetry is
  optional enrichment"), but no titles or scope for the other 13 lessons.
- The memory index (`ealch-b1-c2-curriculum-decisions`) — records the
  DECISIONS made about the plan (one unit per lesson, tu, fr-FR narration,
  the rich-lesson standard, c2 becomes a real level) but not the plan's
  content itself.

So before a C1-Phase-0-style research pass (per-lesson scope, builds-on,
sources, id home) can start, **Paul needs to either resupply the original
14-lesson list, or approve a freshly drafted one** (the same way C1's 24
lessons were planned from scratch, extending past B2's actual scope, in
`C1-BUILD-PLAN.md`). Nothing below this point is decided.

## Next, once the list exists

Follow `scripts/data/c1/C1-PHASE0-PROMPT.md` as the template (it is explicitly
written to be reusable): Paul's decisions on any B1/B2/C1 overlap, unit
naming, wave order and theme rows; a `C2-RESEARCH-PLAN.md` per lesson (scope,
builds-on, seed/DB inventory, sources, exam target, id home, risks); then
wave 1's author briefs. Do not dispatch authors until Paul says so.
