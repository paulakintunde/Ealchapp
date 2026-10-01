# Prompt: plan the C1 lesson research and build C1 Phase 0

Paste everything below the line into a fresh Claude Code session opened at
`C:\Users\harki\Downloads\gitbuild appealch\Ealchapp`.

---

You are starting the **C1 band** of Ealch, a French-learning app (Expo app in `ealch-v2/`,
admin pipeline in `ealch-admin/`). B1 (39 lessons) and B2 (34 lessons) are complete and live
(content v84). C1 is 24 lessons and nothing is built yet. Your job in this session has two
parts: **(A) plan the research for all 24 C1 lessons**, and **(B) build Phase 0, the
enablers**, so the first C1 wave can be authored next. You do NOT author any C1 lesson in
this session.

The product owner is Paul (use they/them). Paul approves decisions, every publish, and any
change to an external service. Keep replies short and plain.

## Read first, in this order

1. `ealch-admin/scripts/data/c1/C1-BUILD-PLAN.md`: the 24 lessons, units, shapes, "builds on",
   the proposed waves, id homes, pack layout, and **four decisions for Paul**.
2. `ealch-admin/scripts/data/b2/B2-BUILD-LOG.md`: how B2 was built. Read "Wave 0" (the B2
   enablers, the model for C1 Phase 0), "How one wave runs", "What is different at B2",
   the newest Progress entries and every pre-review note (they list the defects reviewers
   keep finding).
3. `ealch-admin/scripts/data/b1/B1-BUILD-PLAYBOOK.md`, especially §6 (house rules that have
   shipped bugs, incl. §6.17-6.20: `git commit --only`, pooled Postgres, image registration,
   OTA settings), and `B1-WORKSHOP-AND-VOCAB-SHAPES.md` (C1 is mostly workshops).
4. Your memory index (`MEMORY.md`), especially: ealch-b1-build-process,
   ealch-dev-build-no-packs-layer, ealch-pooler-session-set-leaks,
   ealch-concurrent-plan-execution, ealch-fingerprint-includes-eas-config,
   ealch-eas-update-drops-env, seed-json-never-git-checkout, bash-heredoc-halves-backslashes.

## Step 1: Paul's four decisions (ask before building anything that depends on them)

Ask with one multiple-choice question set (recommended option first):
1. **The five C1 lessons that overlap B2** (c1.03/b2.09, c1.06/b2.20+b2.22, c1.07/b2.15+b2.16,
   c1.10/b2.22+b2.23, c1.23/b2.26): keep all five, each refocused past its B2 lesson
   (recommended), or fold c1.03 into c1.02 (C1 becomes 23 lessons).
2. **Unit 5's name**: « Interprétation et médiation » (proposed) or Paul's own.
3. **Wave 1 exam-first** (c1.20, c1.21, c1.01, c1.24) as B2 did: yes (recommended) or trail order.
4. **Theme rows**: create the five missing `content_themes` rows (`francais-professionnel-avance`,
   `nuances-et-registres`, `discours-dexamen`, `culture-profonde`, `rhetorique`) with their
   domain, French title and level range. Propose values; Paul approves them, because this
   writes to Postgres.

Record the answers in a new `ealch-admin/scripts/data/c1/C1-BUILD-LOG.md` (modelled on the
B2 log's header and Progress section) and update C1-BUILD-PLAN.md to match.

## Part A: plan the research for all 24 lessons

Produce `ealch-admin/scripts/data/c1/C1-RESEARCH-PLAN.md`. For EACH lesson give, in a compact
table or block:
- **Scope at C1**: what the learner can do after it, in one sentence (CEFR C1 descriptors).
- **Builds on**: the exact published B1/B2 lessons (by trail position) and what they already
  cover. Open those lesson files in `ealch-admin/scripts/data/b1|b2/` and summarise what is
  taught, so the C1 author goes past it and never re-teaches it.
- **Seed and DB inventory**: rows already published for the topic (reuse candidates). Probe
  with read-only SELECTs (see Rules) per candidate theme: counts per level and per
  200-block, the c1 rows that already exist (913 items, ids 1-165 in most C1 themes).
- **Sources to consult** for facts, usage and quotations: name the reference works per
  lesson (Le Robert, Larousse, TLFi/CNRTL, Grevisse, Académie française « Dire, ne pas dire »,
  OQLF Vitrine linguistique and BDL, Usito, BDLP, Wikisource and Gutenberg for literary
  quotations, the DALF C1 exam specifications from France Éducation international,
  TEF/TCF C1 descriptors). Mark which lessons need a fact check (history, culture, law,
  literature, statistics).
- **Exam target**: CE@c1 → c1.20, CO@c1 → c1.21 (12 published tasks route nowhere today);
  PE@c1 → c1.10 and PO@c1 → c1.09 once DALF C1 tasks exist. Check the published C1 exam
  tasks (`seedPlusPacks().examTasks` with level c1) and list what each needs from its lesson.
- **Id home**: confirm or correct the proposed theme and 200-block in C1-BUILD-PLAN.md by
  probing; a block must be unused at EVERY level of the theme.
- **Risks**: contested usage, register traps, copyright (literary extracts only if public
  domain and verified word for word; otherwise write original text labelled as such),
  anything that needs Paul's judgement.

Use subagents for the per-lesson inventory if it saves context (about one per unit, read-only),
but merge their findings yourself into the one plan. Keep the plan factual; do not draft lessons.

## Part B: Phase 0, the enablers (build and prove)

Follow the B2 wave 0 pattern exactly. Each step ends with its proof.

1. **Pipeline takes `--band c1`.** `Band` in `ealch-admin/scripts/b1-import.logic.ts` is
   `'b1' | 'b2'`: add `'c1'`, a `C1_SLUGS` list (empty until wave 1), lessons loading from
   `data/c1/`, and `--band c1` in `b1-import.ts`, `b1-merge-into-seed.ts`,
   `b1-trial-merge.ts`, `scratch/_app-checks-b1.mts`, `scripts/data/b1/_preview-b1.ts`, and
   the three house tests (`b1-answer-slots`, `b1-en-tail-on-answers`, `b1-lesson-integrity`).
   **Proof:** B1 and B2 byte-identical behaviour: full B1 and B2 import dry runs report 0 to
   insert / 0 to update; both test suites green (app: `npm test` in `ealch-v2`; admin:
   `pnpm test` in `ealch-admin`).
2. **Theme rows** (after Paul approves the values): insert the five rows in one transaction,
   read them back, and record them in the C1 log's id ledger. Then add one sub-theme per
   wave 1 lesson home, as the B2 waves did (`scratch/_w8_themes.mts` is the model).
3. **Exam routing ready**: prepare (do not ship yet) the `EXAM_PREP_TARGETS` entries
   `CE@c1 → c1.20` and `CO@c1 → c1.21` in `ealch-v2/src/store/progress.logic.ts` behind the
   same pattern B2 used, with a test, to switch on when those lessons publish.
4. **Seed cut and trail**: confirm `seed-cut.config.ts` and the core skeleton logic handle c1
   units (the c1 pack exists in `PACK_ORDER`; today 0 lessons, 913 items, kept at v79), and
   that the Den's C1 tab shows a unit once one exists. **Proof:** a unit test, plus a
   `--packs --dry-run` that is still valid with no C1 lesson (the pack replay must show 0
   deadlocks).
5. **Wave 1 setup**: probe and claim the id blocks for the wave Paul chose, record them in the
   ledger, and write the four wave 1 author briefs into the C1 log, using the B2 author
   prompts as the template (the B2 log and git history hold them; the "Author b2.2x" briefs
   are the workshop model). Do NOT dispatch authors in this session unless Paul says so.

Commit after each proven step with `git commit --only -- <your paths>` and a clear message
ending with the co-author line the system gives you. Update the C1 log's Progress section
as you go.

## Rules (each one has cost a real defect before)

- **Shared git index**: other sessions work in this repo. Never `git add -A` or a plain
  commit; always `git commit --only -- <paths>`. Never commit files you did not write.
- **Never `git checkout` or hand-edit `ealch-v2/src/content/seed.json`**; only the merge and
  publish scripts write it.
- **Postgres**: `DATABASE_URL` is a transaction pooler. Read-only work goes in
  `BEGIN TRANSACTION READ ONLY … COMMIT`; never a plain session `SET`. Writes (theme rows,
  imports) only with Paul's OK for that change.
- **Bash heredocs halve backslashes**: write scripts with the Write tool, or build a
  backslash with `chr(92)`.
- **Never run `find /`** or whole-disk searches.
- **Copy rules**: no em dash (—) in any learner-facing string, no U+203F tie, never the words
  honest/honnête/honnêtement. French learner strings always carry English (`en` or `EN: …`);
  the learner is tu; cite lessons by trail position in words (« la leçon 20 du B2 »), never
  raw ids, and only positions that exist.
- **No `Lesson.version` bump for text edits** (it wipes learner progress).
- **Art**: Paul draws every act opener in ChatGPT from the `-image-prompts.md` files. Never
  use Fal. Give Paul the prompt links and the save folders.
- **Publishing** (`pnpm content:publish --packs`) only after a clean `--dry-run` AND Paul's
  explicit OK. Not in this session.
- **Device reviews**: a dev build never loads the packs layer, so a gate preview must hold the
  whole band (see memory ealch-dev-build-no-packs-layer).
- **Secrets**: never print or read secret values from `.env` files; Paul sets secrets.

## Finish with

A short report for Paul: the four decisions as recorded, what Phase 0 changed and how each
step was proven (test counts, dry-run results), the research plan's headline risks, the
wave 1 id blocks, and the one thing you need from Paul next.
