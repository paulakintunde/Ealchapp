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

- **2026-10-09, later the same day: wave 1 completed properly.** A stop-hook
  check caught two real gaps in the entry above: the id-homes table still
  read "proposed" for wave 1 despite the Postgres writes being live (fixed,
  see the table above), and "c2.01 dispatched first, not all four" cited
  curriculum-decisions round 3 ("one lesson at a time") as if it still
  governed dispatch — it does not; that was B1's PRE-FACTORY pilot rule,
  superseded once wave dispatch existed (C1-BUILD-PLAN.md's own wave table
  sends all 4 lessons of a wave out together with ONE gate after the wave,
  not one gate per lesson). Corrected, and c2.02-04 dispatched as three
  parallel fresh author agents, same as c2.01.

  **All four wave 1 lessons are now authored, pre-reviewed and fixed:**
  - **c2.02** « L'analyse littéraire intégrale » (`50ef5b5`): 9 acts, 50
    missions, 160 rows (now 159, see below), anchored on Maupassant's "La
    Parure" opening — fetched from Wikisource's raw wikitext to get it
    word-for-word, independently re-verified against the live source by the
    pre-reviewer. The authentic dialogue's em-dash-opened turns were
    rewritten as guillemets-opened turns, preserving every word, to satisfy
    the no-em-dash rule. Pre-review found one real defect: a hardcoded scene
    bubble (`A8_SCENE`, act 8) had a spaced `?` before its closing mark,
    exactly the device-proven "scene bubble clips its tail" pattern (memory
    `ealch-scene-bubble-clips-tail`) — fixed (`38fa94b`). The wave-1 dry run
    then found a second, independent defect: id 2007 and id 2136 were the
    same flashcard ("une lecture intégrale") authored twice with no
    published row to dedupe against — a real import blocker. Removed the
    earlier, unpaired occurrence (2007); kept 2136, which pairs meaningfully
    with "une lecture plausible" (2135) in act 7 (`78bd27d`). 159 rows after
    the removal.
  - **c2.03** « Cent expressions idiomatiques avancées » (`f8791e0`): 12
    acts (V shape, 10 idiom families x 10 idioms), 76 missions, 139 rows,
    soutenu register throughout, a recurring character (le juge Antoine
    Berthier) threading acts 2/6/8/11/task. Pre-review: clean, ready as-is.
    One open decision surfaced for Paul, not a defect: the lesson teaches 10
    idioms per act, past `B1-WORKSHOP-AND-VOCAB-SHAPES.md`'s documented
    "max 8/act" ceiling (written and calibrated for B1). The pre-reviewer's
    read: defensible, since the brief's own 100-item/8-12-family scope
    cannot hit <=8/act without 13 acts the brief never asked for, and C2's
    100-item scope already knowingly supersedes B1's density numbers — but
    it should be a Paul-ratified C2-scale amendment to that doc, not a
    silent default.
  - **c2.04** « Verlan, argot et registres : l'usage littéraire » (`eb18ebc`):
    8 acts, 41 missions, 132 rows, all extracts original pastiches (clearly
    labelled as such), confirmed never overlapping or reusing b2.32's own
    vocabulary (argot-classique register vs b2.32's argot-des-jeunes set).
    Pre-review found one real defect: the lesson's own header promises every
    argotique row is sentence+review-only (never a flashcard/speaking
    target, the whole point of an analysis-not-production lesson), but 28
    rows embedding one of the six headwords (or the act 7 meta-example
    "relou, wesh") defaulted to flashcard/voiceflash/review — independently
    re-verified by a corpus-level audit script, not just trusted. Fixed, all
    28 rows now `SR` (`d6135ad`); re-validated clean.
  - **c2.01** (from earlier the same day): one pre-review fix already landed
    (an English "cue" leaked into French glossary copy, `aab474d`).

  **Wave-1 dry run, after all four fixes:** 4 lessons, 575 to insert (now
  574 after the c2.02 dedupe), 0 blockers, 7 warnings (all the expected
  "art not registered yet" kind, plus 3 harmless dedupe-against-published
  notices for c2.02's reused `litterature` hub rows).

  **`C2_SLUGS` now carries all four**: `precision-nuance`, `analyse-litteraire`,
  `cent-idiomes`, `argot-litteraire` (`78bd27d`).

  **Device-proven on the Pixel 9, the whole wave, not just c2.01.** Hit the
  Metro-staleness trap a SECOND time, a different flavour: this Metro
  session had been started with `CI=1` (to survive being launched from a
  Claude background shell), and `CI=1` is documented to disable Metro's file
  watcher entirely (memory `ealch-usb-metro-dev`) — so three new lesson
  files plus two bugfixes, all added after that Metro started, were silently
  absent from every "fast" bundle fetch afterward. Caught the same way as
  before: grepped the served bundle for strings unique to c2.02/03/04 and
  found nothing. Fixed by the same `--clear` restart recipe, this time
  WITHOUT `CI=1` (launched from a real detached console via
  `Start-Process cmd.exe`, which survives fine without it), confirmed a
  genuine cold transform (~60s, not ~2s) before trusting the result. The
  served bundle then confirmed all four lessons byte-for-byte, including the
  exact fixed scene-bubble string. On device: the Levels screen shows
  "Level C2 . 4 units"; all four units and their acts render with the exact
  titles each author reported; two full lessons opened and rendered their
  final acts' missions correctly (c2.01, already proven earlier, and c2.04's
  act 8 "Rédiger l'analyse", freshly opened this pass).

  **Still open for Paul:** the c2.03 idiom-density amendment (10/act vs the
  documented 8/act ceiling); review the whole wave on your own device; the
  go-ahead for wave 2 (c2.05-08).

- **2026-10-09, same day: "wave 1 all good."** Paul reviewed and approved.
  Ratified the c2.03 idiom-density call as its own amendment, §2.2b in
  `../b1/B1-WORKSHOP-AND-VOCAB-SHAPES.md` (`a39f623`), same precedent as
  §2.2a after b1.27/b1.28 — the B1-calibrated 8/act and 50-70-total ceilings
  do not bind C2 by default, but each lesson's actual total still needs
  Paul's own sign-off, not an assumed new default.

  **Wave 1 shipped for real**, Paul's OK: `pnpm tsx scripts/b1-import.ts
  --band c2 --apply` (574 rows, 4 units, 4 lessons, 0 blockers, read-back
  clean), then `pnpm tsx scripts/b1-merge-into-seed.ts --band c2
  precision-nuance analyse-litteraire cent-idiomes argot-litteraire` (seed
  v88 -> seed.json 177 units/41 lessons/6534 items, seed-packs.json layer
  137 units/139 lessons/22557 items, validateCorpus 0 issues before and
  after). c2.01-04 are in Postgres and the seed layer now — no longer
  drafts. **Not published**: `content:publish` has not run, so none of this
  reaches a learner yet (still waiting on art — every wave-1 lesson's act
  openers are unregistered, the dry run's own standing warning). The dev
  preview fixture was regenerated and correctly came back empty (`e425493`)
  — nothing left to overlay until wave 2 has drafts.

  **Wave 2 setup, Paul's OK:** the theme writes `C2-BUILD-PLAN.md` proposed
  for wave 2, applied and verified by read-back — new theme row `etymologie`
  (domain fondations, c1-c2, sub-theme "les racines et les familles de
  mots"), `langue-soignee` widened a2-c1 -> c2 with "la médiation
  linguistique" appended, `litterature` += "traduire la poésie",
  `discours-dexamen` += "la production orale spontanée". All four id blocks
  (c2.05-08, see the table above) are now live, not proposed.

## Wave 2 author briefs (c2.05-08)

Same standard as wave 1: rich-lesson standard, French only, tu, no em dash/
U+203F tie/"honnête", curly apostrophes, cite predecessors by trail position
in words. Draft only — nothing merges into seed.json or imports until Paul
reviews the wave-2 preview build. Every author should read wave 1's four
lesson files first (especially `precision-nuance-*` and `argot-litteraire-*`,
the two that had real pre-review defects) as the current quality bar, and
the matching `C2-RESEARCH-PLAN.md` section for full scope/sources/risks.

### Author c2.05 — « Étymologie et formation des mots »

- **Id range**: `fr.c2.etymologie.1000` to `.1199` (new theme, nothing to
  collide with).
- **Shape**: V (vocab). **Builds on**: « la leçon 18 du C1 » (c1.18, false
  friends — word-level, closest owner, but never taught word FORMATION
  systematically). **New here**: deriving a word's probable meaning from
  Greek/Latin roots, prefixes and suffixes, and explaining how French built
  a given word historically — a genuinely new theme, confirmed absent from
  all 141 pre-existing `content_themes` rows.
  **Research-heavy**: every etymology claim needs a named source (TLFi/
  CNRTL, Bloch & Wartburg, Le Robert historique) — no folk etymology.
  Budget more fact-check time than a typical lesson.
- **Image prompts**: `c2-etymologie-image-prompts.md`, save paths under
  `ealch-v2/assets/lessons/c2-05-etymologie/actNN.jpg`.

### Author c2.06 — « La médiation linguistique »

- **Id range**: `fr.c2.langue-soignee.2400` to `.2599`.
- **Shape**: W. **Builds on**: « la leçon 22 du C1 » (c1.22, translating
  complex ideas by reformulation) exact — this lesson continues that same
  thread toward a named AUDIENCE change (a specialist text reformulated for
  a child, a layperson, a colleague) rather than a language-to-language
  translation. The real CEFR C2 "mediation" descriptor nothing else teaches.
- **Sources**: OQLF Vitrine linguistique (plain-language guidance), a real
  government/public-health plain-language rewrite as a before/after model
  (prefer public-sector sources, reusable; or write an original technical
  passage, labelled as such, to avoid any copyright question).
- **Image prompts**: `c2-mediation-image-prompts.md`, save paths under
  `ealch-v2/assets/lessons/c2-06-mediation/actNN.jpg`.

### Author c2.07 — « Traduire la poésie » (optional enrichment)

- **Id range**: `fr.c2.litterature.2200` to `.2399`.
- **Shape**: W. **Builds on**: « la leçon 22 du C1 » (c1.22, translating
  ideas), « la leçon 19 du C1 » (c1.19, naming a figure's effect). Flagged
  **optional** per the one surviving hint from the lost 2026-09-22 list
  ("c2.07 poetry is optional enrichment") — confirm scope with Paul before
  going deep; cut is acceptable if wave 2 runs long.
- **Sources**: Wikisource/Gutenberg for public-domain French poems
  (Baudelaire, Verlaine, Apollinaire all safely public domain) — same
  verify-word-for-word rule c2.02 followed for its Maupassant extract.
- **Image prompts**: `c2-poesie-image-prompts.md`, save paths under
  `ealch-v2/assets/lessons/c2-07-poesie/actNN.jpg`.

### Author c2.08 — « La production orale spontanée »

- **Id range**: `fr.c2.discours-dexamen.1800` to `.1999`.
- **Shape**: W. **Builds on**: « la leçon 9 du C1 » (c1.09, debate and
  formal oral expression: exposé, floor, objections, reformulation) —
  structured and prepared; c2.08 removes the preparation time, responding
  to an unplanned prompt in real time. Future PO@c2 link (informational,
  nothing wired, no `dalf_c2` format exists).
- **Sources**: none fact-heavy — this is a production-shape lesson; sourcing
  is realistic prompt design, not citations.
- **Risk**: grading spontaneous production objectively is harder than a
  scripted task; the rubric needs explicit criteria for "coherent under time
  pressure," not just correctness.
- **Image prompts**: `c2-production-spontanee-image-prompts.md`, save paths
  under `ealch-v2/assets/lessons/c2-08-production-spontanee/actNN.jpg`.

## Wave 3 author briefs (c2.09-12)

Same standard as waves 1-2: rich-lesson standard, French only, tu, no em
dash/U+203F tie/"honnête", curly apostrophes, cite predecessors by trail
position in words. Draft only — nothing merges into seed.json or imports
until Paul reviews the wave-3 preview build. Every author should read at
least one wave-1 and one wave-2 lesson file first as the current quality
bar, and the matching `C2-RESEARCH-PLAN.md` section for full scope/sources/
risks.

**Self-check before reporting back, all four lessons** — five specific bug
classes surfaced only by the FULL test suites after wave 1-2 shipped, none
caught by any single-lesson pre-review brief:
1. every `ScenarioTurn` with an `alts` array needs at least 2 entries, and
   each one a genuinely different valid reply, not a near-miss
   (`scenario.logic.test.ts`).
2. every reference sheet the lesson defines must have at least one mission
   whose `sheetId` actually points to it — an authored, unlinked sheet is
   silently unreachable (`sheet-reach.test.ts`).
3. no two rows in the lesson share the exact same `fr` text with nothing to
   dedupe against (a real import blocker, caught by the wave-1 dry run, not
   a test).
4. if any section sets `hideLines: true`, that section's own quiz questions
   must never quote the hidden line, even near-verbatim or with different
   trailing punctuation — refer to it by position instead
   (`listening-hidelines.test.ts`).
5. every glossary `word` must be a string that genuinely appears in that
   section's own passage `text` (same inflection/form, elision-aware) — no
   infinitive glossing a conjugated form, no two words merged with a slash
   (`gloss.logic.test.ts`).

### Author c2.09 — « Soutenir un discours long »

- **Id range**: `fr.c2.discours-dexamen.2000` to `.2199` (no widen).
- **Shape**: W. **Builds on**: « la leçon 9 du C1 » (c1.09, debate — turn-
  based, structured exchange) from the LENGTH angle this time, and c2.08
  (same band, « la leçon 8 du C2 », spontaneity) for the unplanned half of
  the skill. **New here**: the learner sustains ONE coherent response alone,
  for several minutes, without losing structure — holding the floor, not
  trading turns. State the ownership split explicitly in the lesson's own
  framing (c2.08 = unplanned prompts, c2.09 = sustained length) so missions
  don't duplicate c2.08's material.
- **Sources**: none fact-heavy — production-shape lesson, sourcing is
  realistic monologue/argument prompt design.
- **Future exam link**: PO@c2 (informational only, no `dalf_c2` format
  exists yet).
- **Image prompts**: `c2-discours-long-image-prompts.md`, save paths under
  `ealch-v2/assets/lessons/c2-09-discours-long/actNN.jpg`.

### Author c2.10 — « Synthèse experte et dissertation avancée »

- **Id range**: `fr.c2.discours-dexamen.2200` to `.2399` (no widen).
- **Shape**: W. **Builds on**: « la leçon 10 du C1 » (c1.10, the problem
  question and plan types — thèse/antithèse/synthèse, comparative plans,
  single-source-oriented) exactly — name what c1.10 already covers in the
  brief so c2.10 does not repeat it, only raises source count and density:
  synthesising MULTIPLE dense sources under tight constraints into one
  structured essay.
- **Sources**: DALF C1/C2 writing specifications (France Éducation
  internationale) as a content-difficulty reference only, even though no
  `dalf_c2` format exists in this app yet.
- **Risk, confirm with Paul before drafting**: the real DALF C2 synthesis
  task (multiple source documents) can run long — this is the same open
  word/source-count question C1-BUILD-PLAN.md left open for c1.10 itself;
  don't silently default to the heaviest DALF version.
- **Future exam link**: PE@c2 (informational only).
- **Image prompts**: `c2-synthese-dissertation-image-prompts.md`, save
  paths under `ealch-v2/assets/lessons/c2-10-synthese-dissertation/actNN.jpg`.

### Author c2.11 — « Compréhension orale experte »

- **Id range**: `fr.c2.strategies-de-comprehension.2200` to `.2399` (widen
  to c2 already applied and verified by read-back).
- **Shape**: R (recognition only — never ask for production; this is a
  listening-comprehension lesson). **Builds on**: « la leçon 25 du B2 »
  (b2.25, « écouter à vitesse réelle », real-time listening at natural
  speed) exact predecessor, and « la leçon 21 du C1 » (c1.21, debates/
  interviews: turn-taking, interruption, fillers) the closest C1 listening
  lesson. **New here**: stacking BOTH difficulty dimensions together that
  b2.25 and c1.21 each handled separately — overlapping speakers, mixed
  registers, regional accents stacked, degraded-audio conditions — the
  learner only extracts the right information, never produces speech.
- **Sources**: none fact-heavy — sourcing here is AUDIO difficulty design.
  Mixed-francophone accent selection (FR, Québec, Belgique, Suisse, West
  Africa) per the house setting.
- **Risk, flag at dispatch not after scripting**: ElevenLabs voice
  availability for stacked/overlapping audio and regional accents needs a
  feasibility check before this lesson goes deep on audio design — confirm
  achievable voice/accent combinations early, don't discover a gap after
  the act scripts are written.
- **Future exam link**: CO@c2 (informational only).
- **Image prompts**: `c2-ecoute-experte-image-prompts.md`, save paths under
  `ealch-v2/assets/lessons/c2-11-ecoute-experte/actNN.jpg`.

### Author c2.12 — « Lire des textes académiques denses »

- **Id range**: `fr.c2.strategies-de-comprehension.2400` to `.2599`
  (covered by c2.11's widen, no further write needed).
- **Shape**: R (recognition only — reading comprehension, never asks for
  production). **Builds on**: « la leçon 20 du C1 » (c1.20, reading between
  the lines: stance, irony, presupposition — taught INTERPRETATION) — c2.12
  goes past interpretation into raw TEXT DENSITY and register: genuinely
  dense, unsimplified academic/specialist prose that assumes background
  knowledge, extracting argument structure under a realistic time
  constraint.
- **Sources**: Le Monde / Cairn.info-style academic-register models — never
  copy a live paywalled article verbatim; write an original text in that
  register, clearly labelled as such, same copyright rule c2.02 and c2.07
  followed for their literary extracts.
- **Risk**: "dense academic" can drift into one discipline's own jargon
  (law, medicine, philosophy already each have a dedicated C1 vocab
  lesson) — keep the texts general-academic register, not discipline-
  specific terminology.
- **Future exam link**: CE@c2 (informational only).
- **Image prompts**: `c2-lecture-academique-image-prompts.md`, save paths
  under `ealch-v2/assets/lessons/c2-12-lecture-academique/actNN.jpg`.

## Progress, continued

- **2026-10-09, same day: wave 2 authored, pre-reviewed and device-proven.**
  All four lessons landed clean on their FIRST pre-review pass (unlike wave
  1, which had a real defect in 3 of 4 lessons) — c2.05 `c496f72`, c2.06
  `b8bc324`, c2.07 `51938e1`, c2.08 `71c9b68`.
  - **c2.05** « Étymologie et formation des mots »: 10 acts, 63 missions,
    113 rows. The author had no web access and wrote every etymological
    claim from training-data recall — flagged as the #1 risk. The
    pre-reviewer DID have web access and independently verified every
    claim against CNRTL/Wiktionary: all 8 Greek/Latin root-and-prefix
    claims, all 7 populaire/savant doublets (hospitale, potionem,
    captivus, legalis, directum, fragilis, auscultare), and all 3 corrected
    folk etymologies (choucroute, contredanse, forcené) confirmed accurate.
    Zero factual corrections needed — unusually clean for a no-verification
    draft. One cosmetic nit (header said 64 missions, actual is 63) fixed
    (`dade579`).
  - **c2.06** « La médiation linguistique »: 8 acts, 44 missions, 67 rows,
    three original specialist/plain-language text pairs (legal, medical,
    scientific) written to sidestep any copyright question. Pre-review:
    clean, confirmed the French-to-French distinction from c1.22's
    language-to-language translation holds throughout, confirmed the
    false-simplification trap (act 5) genuinely tests two different failure
    modes, not one twice.
  - **c2.07** « Traduire la poésie » (optional enrichment): 6 acts, 33
    missions, 89 rows. Verlaine's "Chanson d'automne" and Rimbaud's
    "Sensation", both independently re-fetched and verified word-for-word
    by the pre-reviewer against Wikisource's own page exports — including
    confirming Rimbaud's source genuinely carries an authentic em dash at
    the claimed point, correctly kept out of all learner-facing code (only
    in comments documenting the edit).
  - **c2.08** « La production orale spontanée »: 8 acts, 40 missions, 119
    rows. A 6-criterion, 20-point spontaneity rubric for the graded task;
    pre-review judged it genuinely gradeable by an LLM grader (not a
    deterministic one) and flagged that for whoever wires grading. Confirmed
    c1.21 is never cited or re-taught (comment-only, as the brief required).

  **Wave-2 dry run**: 8 lessons total (wave 1 + wave 2), wave 1's 574 rows
  correctly read back as already published (skipped, not re-inserted),
  wave 2's 388 new rows ready to insert, 0 blockers. `C2_SLUGS` now carries
  all eight slugs. Dev preview fixture rebuilt (4 lessons, 32 acts, 388
  items) and device-proven on the Pixel 9: Levels screen shows "Level C2 .
  8 units"; three of the four wave-2 units (c2.06, c2.07, c2.08) directly
  confirmed rendering with exact matching act titles; c2.05 confirmed via
  the served bundle carrying its specific content strings (same rendering
  path as the other three, already proven). This time Metro's file watcher
  stayed live without a `--clear` restart (started without `CI=1`, unlike
  wave 1's first pass) — still verified the served bundle directly rather
  than trusting a fast fetch, per the standing rule.

  **Not yet imported to Postgres or merged into seed.json** — wave 2 is
  drafts only, gated on Paul's own device review, same pattern as wave 1.

- **2026-10-09, same day: "I have done 1-3," wave 2 shipped, and a
  full-suite sweep found 5 more real bugs.** Paul's "next 5 steps" list
  was: (1) draw the 69 chapter-opener images, (2) register them in
  `lessonImages.ts`, (3) review wave 2 on device then say go. "I have done
  1-3" meant exactly that — all 69 images existed on disk, both
  `lessonImages.ts` maps already carried all 1216 registry entries
  (verified: every ref resolves to a real file, REG/ALT key sets match
  exactly, no duplicates, app typecheck and test suite both clean before
  committing). Taken as the go-ahead: wave 2 imported for real
  (`b1-import.ts --band c2 --apply`, included wave 1's reapply for the
  alts fix below in the same run) and merged into seed.json/seed-packs.json.

  **Running the full `npm test` / `pnpm test` suites (not just per-lesson
  validators) after shipping surfaced 5 real content bugs no pre-review
  brief had explicitly checked for**, each found, fixed, re-validated,
  re-synced to Postgres (`--reapply`) and re-merged, one at a time:
  1. **15 scenario turns across all 8 lessons had only one accepted reply**
     (`scenario.logic.test.ts`, "every authored role-play turn offers more
     than one way to answer" — the cloze-test guard). 7 in wave 1
     (precision-nuance x1, analyse-litteraire x2, cent-idiomes x2,
     argot-litteraire x2), 8 in wave 2 (etymologie x2, c2-mediation x3,
     poesie x2, production-spontanee x1). One genuine second alternative
     authored per turn — a plausible reply a French speaker could actually
     give, not a near-miss.
  2. **c2.06's `sheet-mediation-domaines` had no mission linking to it**
     (`sheet-reach.test.ts`). Re-pointed `A2_DECK` ("Trois leviers, trois
     domaines") from `sheet-mediation` (which kept three other links) to
     `sheet-mediation-domaines`, a closer content match anyway.
  3. **The dev preview fixture drifted from the generator's output, twice**
     (`b1-preview-fixture.test.ts`) — once after wave 1's import, once
     after wave 2's. Regenerated each time; it correctly comes back empty
     once a wave is fully shipped.
  4. **c2.08's `hideLines` listening section reprinted 3 of 7 hidden lines
     almost verbatim inside its own quiz questions**
     (`listening-hidelines.test.ts`). The exact-substring check caught only
     one (trailing punctuation masked the other two from the automated
     check); all three were the same real defect. Reworded all three to
     refer to the line by position ("la deuxième phrase", "la dernière des
     sept phrases", "la sixième phrase") instead of quoting it.
  5. **4 glossary entries across 4 lessons named a word form that never
     appeared in their own passage** (`gloss.logic.test.ts`). c2.02's
     "balbutia / bégaya" was one entry wrongly combining two different
     words that each appear once, separately, in the real Maupassant
     extract — split into two entries. c2.03's "le parcours" never
     appears (the text says "son parcours" twice) — renamed to the bare
     word "parcours". c2.04's "becter" (infinitive) never appears (the
     pastiche uses conjugated "on becte") — renamed to "becte". c2.06's
     "franchir la ligne" (infinitive) never appears (the text says "a
     franchi la ligne") — renamed to "franchi la ligne".

  Also re-ran the standing, documented a1.03 noun-ending remeasure: the
  corpus growing by 962 items moved the `-e` ending count 1078→1079, the
  same unrelated-to-nouns drift this file has recorded before.
  `_a1_genre_remeasure.ts --write`, `content:gender`,
  `merge-noun-gender-into-seed.ts`.

  **Final state, verified clean**: `npm test` (app) 5778/5778 pass,
  `pnpm test` (admin) 1299/1300 pass + 1 skip, `content:publish --packs
  --dry-run` valid (v88 → v89 if published: +8 units/lessons, +962 items,
  +1 theme). **Still not published** — `content:publish` has not run for
  real; that is Paul's own separate decision, distinct from "imported."

  **The lesson for every future wave**: per-lesson pre-review (what this
  file's briefs ask for) catches lesson-local defects well, but it cannot
  catch house-wide, cross-content rules that only a full suite run
  exercises (scenario alts, sheet reachability, glossary resolution,
  hideLines leaks, fixture drift). Run `npm test` and `pnpm test` in full,
  not just the per-lesson validators, before calling a wave done — this
  wave needed it twice (once after wave 1 alone, once after wave 2) and
  both times found real, previously-invisible defects.
