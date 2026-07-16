# ✅ COMPLETE — Build Prompt — Phase 1 Schema Extension (Ealch)

> **Status: ✅ BUILT AND VERIFIED — 2026-07-16.** All 9 commits landed, plus a back-compat gate
> ahead of them and a projection-debt record after. `node --test` in `ealch-v2`: **208/208 green**
> (baseline was 119). `tsc --noEmit` clean in `ealch-v2`; `ealch-admin` unchanged from its
> pre-existing state (one known `curriculum.ts` path-alias error that predates this work).
>
> **This prompt can be deleted.** Everything in it is now either code, a test, or a comment at
> the point of use — the commit messages carry the reasoning, and the guardrails are executable
> rather than described. Two things to carry forward before deleting, both already recorded in
> the repo and repeated here so they are not lost with the file:
>
> 1. **`ealch-admin` migrations 0004 and 0005 have not been applied.** The publish SELECT now
>    names columns that do not exist until `pnpm db:migrate` runs. The next publish fails loudly
>    until then (verified). Applying them touches the live Supabase database, so it was left to a
>    human.
> 2. **One deliberate departure from the plan:** `ExamTask.level` is typed `ScoreBand`, not
>    `Level | ScoreBand`. See commit `6eac67a` for why. Flagged rather than assumed.
>
> Landed as: `bbbff2f` (seed gate) → `befa3f4` `47a3adc` `ecfce79` `3314fea` `e6b24b8` `6bf3687`
> `6eac67a` `0ad1321` `793bb0e` (commits 1-9) → `41d9fdf` (projection debt).

---

## Your mission

Extend the Ealch content schema so the app can carry a fuller, multi-level, exam-ready corpus, without breaking the shipped app or the shipped content. You will land the change as **9 small, individually testable commits** defined in `SCHEMA-EXTENSION-PLAN.md`. That plan is the source of truth for *what* to build; this prompt is the source of truth for *how* to build it safely.

Primary file: `ealch-v2/src/content/schema.ts` (and, if Commit 8 decides so, a sibling `ealch-v2/src/content/progress-schema.ts`).

## Repo context you must hold in your head

There are two repos in this workspace and they are coupled:

- **`ealch-v2/`** — the Expo/React Native app. `src/content/schema.ts` is the canonical TypeScript content contract. It loads in the app, in tests, and is imported by the publish pipeline. It is a zero-runtime-import, erasable-syntax file (`as const` arrays + unions, no `enum`, no `namespace`, no imports).
- **`ealch-admin/`** — a Next.js + Drizzle content studio (the OPR admin). `src/db/schema.ts` holds Postgres `pgTable`/`pgEnum` definitions. `scripts/publish-content.ts` compiles the database into a checksummed snapshot and **commits `ealch-v2/src/content/seed.json`**. The app reads bundled `seed.json` → local cache → over-the-air snapshot, and **never queries the live database at runtime**.

The consequence you must never forget: a field added to `ealch-v2` types is invisible to the app until `ealch-admin/scripts/publish-content.ts` also selects and maps it. The two repos must move together.

## Golden rules (do not violate)

1. **Zero new imports** in `schema.ts`. Erasable syntax only (`as const` + unions; no `enum`, no `namespace`).
2. **Additive and backward-compatible.** The shipped `seed.json` must still pass `validateCorpus` after every single commit. New corpus arrays are optional and default to `[]`. New entity fields are optional; validators check *type-when-present* only.
3. **Green suite after every commit.** Run `node --test` in `ealch-v2` after each commit. If it is red, do not proceed to the next commit; fix or revert first. The baseline is 15/15 passing.
4. **One commit at a time.** Each commit in `SCHEMA-EXTENSION-PLAN.md` is atomic: implement it, add its positive and negative tests, run the suite, commit. Do not batch.
5. **Stop and ask before any non-additive change.** Commit 2 (the Den level cap) is the only planned non-additive change. If any other commit tempts you into a rename or a required-field change, stop and surface it instead of doing it.

## The guardrails (these catch "validates fine, ships broken")

These are copied from the Pre-flight guardrails in `SCHEMA-EXTENSION-PLAN.md`. Treat them as acceptance gates, not advice.

- **G1 — Publish projection.** For every field you add that will carry real data (`skill`, `register`, `canDo`, `modality`, `imageRef`, exam fields), extend the `SELECT` **and** the row-to-`Item` mapper in `ealch-admin/scripts/publish-content.ts` in the same body of work, with a `::text[]` cast for any enum-array column (e.g. `modality`). Add a publish-time assertion that every `content_items` column has a corresponding mapper key. A field is not done until it round-trips through publish into a snapshot. If you are only doing the type-side commits in this pass, **record an explicit per-field publish-projection TODO** so it is not silently forgotten.
- **G2 — Optional until backfilled.** Keep new `Item`/`Lesson` fields optional. Do **not** make `modality` required on the live persisted attempt log (`useProgress`) in this phase. The Commit 8 contract may declare it required; the runtime store must stay tolerant until a real persist migration (version 1 → 2, defaulting legacy attempts to `'recognise'`) ships with its own test in a later phase.
- **G3 — Two-repo enum parity + c2.** Mirror every new or changed value list (`MODALITIES`, new `DRILL_KINDS`, `EXAM_FAMILIES`, `EXAM_SECTIONS`, `SCORE_BANDS`) into the `ealch-admin` Drizzle `pgEnum`s in the same change. Postgres cannot drop the `c2` enum value, so decide the asymmetry: add a DB `CHECK` forbidding `c2` on `content_items`, or accept publish-gate-only enforcement and document it. Land a minimal parity check (a `node --test` case that diffs the app `as const` unions against the Drizzle `pgEnum` value lists) alongside Commit 1.
- **G4 — Derive id regexes from consts.** In Commit 2, build the band alternation for `UNIT_ID_RE`/`LESSON_ID_RE`/`ITEM_ID_RE`/`SCENARIO_ID_RE` from `TRACKS`/`LEVELS` (a shared `BANDS_RE` fragment), and reconcile all four in the same commit. Do not hand-edit one regex's band list; they already disagree in the live code.
- **G5 — Keep the `SKILLS` → `PracticeSkill` rename value-safe.** Commit 1 renames the read/write/speak/listen union `SKILLS`/`Skill` → `PRACTICE_SKILLS`/`PracticeSkill` (used only on `LessonSection.practice.skill`), and adds `EXAM_SKILLS = ['CO','CE','PO','PE']` → `ExamSkill` for `Item.skill`. Rename **identifiers only**; the string values (`read`/`write`/`speak`/`listen`) must not change, so cached OTA snapshots on existing installs keep working. Adding drill kinds (`playlist`, `exam`) is additive and safe. If any commit ever changes a shipped skill or drill-kind string *value*, add snapshot versioning, cached-snapshot invalidation/migration on app upgrade, a back-compat string mapping, and a `deckLen === 0` guard so progress never becomes `NaN`.

## Working protocol (per commit)

For each of the 9 commits in order:

1. Read the commit's spec in `SCHEMA-EXTENSION-PLAN.md`.
2. Make the edit in `schema.ts` (and mirror to `ealch-admin` where G1/G3 apply).
3. Add tests: at least one **positive** case (the new thing validates) and one **negative** case (the new invariant rejects bad input) per the plan's "Tests" line for that commit.
4. Run `node --test` in `ealch-v2`. Confirm green, including the real-`seed.json` back-compat test.
5. Run typecheck across both packages (`tsc --noEmit` in `ealch-v2` and `ealch-admin`) so a schema change cannot silently break the studio or the publish script.
6. Commit with a message naming the commit number and what it does. Keep commits atomic.
7. If anything is red, fix or revert before moving on. Never leave a red commit behind.

Land the real-`seed.json` back-compat test (imports the actual `ealch-v2/src/content/seed.json`, asserts `validateCorpus(seed).length === 0`) **first**, before Commit 1 tightens anything, so every later commit is measured against the real corpus.

## Definition of done

- `schema.ts` (and any `progress-schema.ts`) defines: split `LEVELS`/`SCORE_BANDS`; the new value lists; lifted Den level cap (regexes derived from consts); `Domain`/`Theme`/`Pack`; extended optional `Item`/`Lesson` fields; audio segment map; exam entities with `formatVersion` and rubric enforcement; and the `AttemptLog`/`SRSCard`/`Entitlement` contracts.
- `validateCorpus` enforces referential integrity for every new entity (theme→domain, pack→theme, series→task, no dup ids across new arrays).
- The actual committed `seed.json` still validates.
- `node --test` is green with new positive and negative cases; typecheck passes in **both** `ealch-v2` and `ealch-admin`.
- Every new field that will carry data has either a completed publish-projection update in `ealch-admin/scripts/publish-content.ts` **or** an explicit recorded TODO for it (G1).
- The enum-parity check exists and passes; the `c2` asymmetry decision is recorded (G3).

## Explicitly out of scope (do not build in this phase)

- The FSRS/SM-2 scheduler logic (later phase). Commit 8 is types only; hard stop there.
- The generation runner, any UI, and populating the 108-theme catalogue *data* (this phase defines the `Theme` *type*, not the rows).
- Making `modality` required on live user data (G2).
- Level-sharded delivery blobs and the `audio_assets` manifest table (CF-07 extend scope, sequenced later; this phase only defines the `AudioSegment` type).

## First actions

1. Read `SCHEMA-EXTENSION-PLAN.md` in full, including the Pre-flight guardrails.
2. Read `ealch-v2/src/content/schema.ts` end to end so you know the existing style, the four id regexes, and the current validators.
3. Run the Pre-check greps: `\.c2\.` across content (confirm no c2 content exists), and find consumers of `Unit.track`/`TRACKS` (`den.tsx`, `curriculum.ts`, `content.ts`) before Commit 2.
4. Establish the baseline: run `node --test` in `ealch-v2` and confirm 15/15 green. Land the real-`seed.json` back-compat test.
5. Begin Commit 1. Work one commit at a time, tests green throughout, and stop to ask on anything non-additive beyond Commit 2.
