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

## RESOLVED 2026-10-08: the actual C2 lesson list

Paul's original 111-lesson B1-C2 plan (2026-09-22, pasted into a chat, never
saved to a file) was never recovered — the search described below found only
the wave grouping and one hint. Paul instead supplied a fresh 14-item list on
2026-10-08. It was compared lesson-by-lesson against every shipped C1/B2
lesson title; three items overlapped existing lessons (literary slang vs
b2.32's recognise-and-avoid verlan, "C2 writing" vs c1.10's academic essays,
"rapid native speech" vs b2.25's real-time listening) and were reframed to
explicitly go past their predecessor rather than repeat it; two items (word
formation, etymology) were merged into one lesson, freeing a slot for "la
médiation linguistique" — a real CEFR C2 descriptor nothing in the list
covered. Paul approved the adjusted 14 ("Looks good and great").

The original search, for the record: `ealch-admin/scripts/data/b1/
B1-C2-BUILD-SEQUENCE.md` held the wave GROUPING (c2.01-04, c2.05-08, c2.09-12,
c2.13-14) and one topic hint ("c2.07 poetry is optional enrichment"), both of
which the fresh list was fitted onto rather than overridden; the memory index
(`ealch-b1-c2-curriculum-decisions`) held the DECISIONS (one unit per lesson,
tu, fr-FR narration, the rich-lesson standard) but never the list's content.

**The approved 14, with units** — see `C2-BUILD-PLAN.md` for the full table,
shapes, builds-on and id homes:

| Unit | Lessons |
|---|---|
| 1. Précision et style | c2.01 language use/nuance/implicit, c2.02 literary analysis, c2.03 100 idioms, c2.04 verlan/argot in literary use |
| 2. Mots et médiation | c2.05 étymologie et formation des mots, c2.06 médiation linguistique, c2.07 poetry translation (optional), c2.08 spontaneous oral production |
| 3. Discours et analyse | c2.09 sustained discourse, c2.10 expert synthèse/dissertation, c2.11 expert listening, c2.12 dense academic reading |
| 4. Révision et maîtrise | c2.13 self-editing, c2.14 capstone |

## Next

Phase 0 research and planning (`C2-BUILD-PLAN.md`, `C2-RESEARCH-PLAN.md`) is
done, written the same day as the list, at the depth C1's Phase 0 reached.
Wave 1's author briefs are below.

**Paul approved both 2026-10-09**: the four unit names, and the wave 1
theme writes. **Done, verified by read-back:** `litterature` b1-c1 -> b1-c2,
`expressions-imagees` b1-b2 -> b1-c2, `argot-classique` b2-c1 -> b2-c2; sub-themes
appended — nuances-et-registres += "la précision et l'implicite",
litterature += "l'analyse littéraire intégrale", expressions-imagees +=
"cent expressions idiomatiques avancées", argot-classique += "l'argot et le
registre en littérature". `nuances-et-registres` needed no widen (already
c1-c2). The four id blocks in the table above are now live, not merely
proposed.

**Correction, 2026-10-09:** this file first said c2.01 would dispatch alone,
citing curriculum-decisions round 3 ("lessons are built ONE AT A TIME"). That
rule was B1's PILOT-phase rule, before the agent-dispatch factory existed; it
was superseded once B1/B2/C1 moved to wave dispatch — C1-BUILD-PLAN.md's own
wave table sends all 4 lessons of a wave out together ("about 55 agent
dispatches for authors and pre-reviewers" across 24 lessons, roughly 2 per
lesson, and ONE gate after each 4-lesson wave, not one gate per lesson). C2
follows the same wave process. c2.01 was built, pre-reviewed and device-proven
alone first only because that is how this correction was caught, not because
it is the intended process — c2.02-04 dispatch now, alongside this fix, and
Gate C2-1 (device review, Paul's OK) comes once after all four, before wave 2.

## Wave 1 author briefs (c2.01-04)

Each brief assumes the rich-lesson standard (`../b1/RICH-LESSON-STANDARD.md`):
up to 100 missions in 8-12 acts, one quiz of 8-12 rounds x 8 questions with
per-round remediation drills, act checks, deck tranches per act, `opener`
artwork per act. French only, tu, no em dash, no U+203F tie, never
"honnête"/"honest", curly apostrophes, cite predecessors by trail position in
words. Draft only — nothing merged into seed.json or imported until Paul
reviews the preview build.

### Author c2.01 — « Précision, nuance et l'implicite »

- **Id range**: `fr.c2.nuances-et-registres.1400` to `.1599` (once the id-home
  table is approved and no widen is needed for this theme).
- **Builds on, cite by trail position**: c1.20 (« la leçon 20 du C1 », reading
  the implicit — recognition only, never re-teach its examples); c1.06
  (hedging/modality in speech); c1.17 (connotation and register); c1.19
  (naming a figure's effect).
- **What is NEW here**: c1.20 only asked the learner to SPOT irony,
  presupposition and omission; c2.01 asks them to PRODUCE a reply that
  matches an implied register, and to choose the one near-synonym among
  several that carries the exact connotation wanted.
- **Suggested act shape** (adapt freely): meet precision failures in a real
  exchange (scene) -> name the near-synonym families and their connotation
  differences (cardDeck/tapTable) -> build it (groupDrill choosing the right
  register for a context) -> trap it (the English-speaker reflex to pick the
  literal cognate over the connoted French word) -> produce a reply matching
  an implied register (task, the graded production act) -> check it.
- **Sources**: Le Robert and TLFi/CNRTL for connotation; Académie française
  « Dire, ne pas dire » for contested register calls, stated as « selon … ».
- **Image prompts**: write `c2-langue-use-image-prompts.md` with full save
  paths under `ealch-v2/assets/lessons/c2-01-precision-nuance/actNN.jpg`.

### Author c2.02 — « L'analyse littéraire intégrale »

- **Id range**: `fr.c2.litterature.2000` to `.2199` (theme widen to c2 needed
  first).
- **Builds on, cite by trail position**: c1.02 (passé antérieur in narrative
  sequence), c1.03 (literary subjunctive), c1.19 (naming a figure's effect),
  **c1.14** closest (film/literature/arts: reaction to analysis through form —
  the lesson c2.02 must clearly surpass).
- **What is NEW here**: a FULL extract analysed as one integrated whole
  (register + voice + structure + at least one figure of style together),
  where every predecessor taught one piece in isolation.
- **Suggested act shape**: meet a full extract (reading with glossary) ->
  name register/voice/structure/figures one at a time (cardDeck) -> build a
  combined reading grid (groupDrill) -> choose the right analytical claim
  among plausible distractors (errorSpot-style) -> produce a structured
  written analysis (task) -> check it.
- **Sources**: Wikisource/Gutenberg for the extract, verified public domain
  and copied word for word; never paraphrase a quotation.
- **Image prompts**: `c2-litterature-image-prompts.md`, save paths under
  `ealch-v2/assets/lessons/c2-02-analyse-litteraire/actNN.jpg`.

### Author c2.03 — « Cent expressions idiomatiques avancées »

- **Id range**: `fr.c2.expressions-imagees.1800` to `.1999` (theme widen to c2
  needed first).
- **Builds on, cite by trail position**: **c1.17** (connotation, register,
  collocation) closest; the b1/b2 `expressions-imagees` rows (body,
  animals/food, colours, proverbs, four 200-blocks already published) are the
  FAMILIES this lesson extends into literary/formal register, past B2's level.
- **What is NEW here**: a dedicated bank of 100 advanced idioms (literary or
  formal register), used in context, not just defined.
- **Suggested act shape**: this is the V (vocab) shape — mission journey
  around word families, not a single narrative arc. Group the 100 idioms into
  8-12 families (by image domain or by register), each family its own act:
  meet (reading/examples in context) -> name (cardDeck) -> build (groupDrill)
  -> choose/trap (confusable near-idiom pairs) -> check.
- **Before drafting**: probe `expressions-imagees` for which idioms b1/b2
  already published, so c2.03 extends rather than repeats (see
  C2-RESEARCH-PLAN.md's risk note).
- **Sources**: Larousse and Le Robert idiom entries; OQLF BDL for any
  Québécois variant, per the mixed-francophone setting.
- **Image prompts**: `c2-idiomes-image-prompts.md`, save paths under
  `ealch-v2/assets/lessons/c2-03-cent-idiomes/actNN.jpg`.

### Author c2.04 — « Verlan, argot et registres : l'usage littéraire »

- **Id range**: `fr.c2.argot-classique.1000` to `.1199` (theme widen to c2
  needed first).
- **Builds on, cite by trail position**: **b2.32** exact (« la leçon 32 du
  B2 », recognise-and-avoid slang) — cite it and go past it, never re-teach
  its vocabulary list.
- **What is NEW here**: reading slang deployed DELIBERATELY for literary or
  ironic effect (free indirect style, a character's voice, a formal text
  quoting slang on purpose) and explaining the author's choice, the opposite
  direction from b2.32's "know it exists, avoid it in formal writing".
- **Suggested act shape**: meet a literary extract using slang for effect
  (reading) -> name what register the author is signalling and why (cardDeck)
  -> build a reading grid distinguishing accidental vs deliberate register
  shift (groupDrill) -> trap it (mistaking literary slang quotation for an
  instruction to USE it formally) -> produce a short analysis (task) -> check.
- **Sources**: period literary slang (Bruant, Céline, Queneau — verify public
  domain) or an original contemporary pastiche, clearly labelled as such, if
  no suitable public-domain extract exists; verify any modern-sounding term's
  currency via OQLF/Usito before using it as a positive example.
- **Image prompts**: `c2-argot-litteraire-image-prompts.md`, save paths under
  `ealch-v2/assets/lessons/c2-04-argot-litteraire/actNN.jpg`.

## Progress

- **2026-10-08** (`1a7398b`): Phase 1 admin pipeline wiring (`--band c2`
  support, score.ts strictness, Ops Console UI) — see the section above.
- **2026-10-09**: the lost-list blocker resolved — Paul supplied and approved
  a fresh 14-lesson list; `C2-BUILD-PLAN.md` and `C2-RESEARCH-PLAN.md` written
  (units, shapes, builds-on, wave plan, id homes probed read-only against live
  Postgres, one new theme proposed); wave 1's four author briefs written
  above. Unit names and the id-home Postgres writes approved and applied
  (litterature/expressions-imagees/argot-classique widened to c2, four
  sub-themes appended, verified by read-back). c2.01 "Précision, nuance et
  l'implicite" authored, pre-reviewed (one copy fix: an English "cue" had
  leaked into French-facing glossary text), and device-proven on the Pixel 9
  via `ealch://levels?from=home` -> pick C2: unit list, lesson header
  (« C2 · LEÇON 01 »), all 8 acts and the graded task's missions all render
  correctly, French/English paired, no banned characters. `C2_SLUGS` now
  carries `precision-nuance`; dry run 1 lesson / 147 rows / 0 blockers.
  Nothing imported to Postgres or merged into seed.json — still a draft.
  c2.02-04 (rest of wave 1) wait on dispatch.

  **Device-preview gotcha, worth repeating for every future wave:** Metro and
  the manifest-cache proxy were already running, inherited from before this
  session, and kept serving a bundle built BEFORE `dev-preview-b1.json` was
  regenerated — stale for over an hour despite `adb reverse`, force-stops and
  relaunches all looking normal. A fast bundle fetch (~1.5s for 31 MiB) was
  the false "it's fine" signal; the real one was grepping the SERVED bundle
  for a string unique to the new content (`grep -c "c2.01.l1"` etc.) and
  finding nothing. Fix: kill Metro's and the proxy's process trees, restart
  Metro with `--clear`, confirm `/status` answers before starting the proxy,
  re-run `adb reverse` for both ports, then re-verify the SERVED bundle (not
  just "fetched fast") before trusting anything seen on the phone. One more
  trap hit along the way: `cmd.exe`'s `set VAR=1 && next` includes the space
  before `&&` IN the value, so `getenv.boolish()` rejected `"1 "` — use
  `set "VAR=1" && next` instead.
