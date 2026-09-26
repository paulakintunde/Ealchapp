# B1 build log and id ledger

The resume point. A session that has been cleared reads THIS file, then `B1-BUILD-PLAYBOOK.md`, and can carry on without asking anything.

Standards: `B1-BUILD-PLAYBOOK.md` (how to build one), `RICH-LESSON-STANDARD.md` (the size and shape decisions), `B1-C2-BUILD-SEQUENCE.md` (the order of the whole B1-C2 programme).

## Status

Legend: DONE = built to the rich standard, validated, committed. Drafts only: nothing is in seed.json or Postgres.

| Lesson | Slug | Missions | Acts | Quiz | Drills | Sheets | Links | Items | Art | State |
|---|---|---|---|---|---|---|---|---|---|---|
| b1.01 | imparfait-formation | 91 | 12 | 11x8 | 11 | 4 | 22 | 261 | 12 images, registered + alt | DONE |
| b1.02 | imparfait-usage | 76 | 10 | 10x8 | 10 | 5 | 10 | 233 | 10 images, registered + alt | DONE |
| b1.03 | pc-imparfait | 76 | 10 | 10x8 | 10 | 5 | 7 | 161 | 10 images, registered + alt | DONE |
| b1.04 | pc-imparfait-paires | 86 | 12 | 11x8 | 11 | 5 | 19 | 224 | 12 images, registered + alt | DONE |
| b1.05 | futur-simple | 80 | 10 | 10x8 | 10 | 5 | 14 | 196 | 10 images, registered + alt | DONE |
| b1.06 | futur-irregulier | 83 | 11 | 10x8 | 10 | 5 | 15 | 222 | 11 images, registered + alt | DONE |
| b1.07 | futur-usage | 82 | 11 | 11x8 | 11 | 5 | 9 | 201 | 11 images, registered + alt | DONE |
| b1.08 | conditionnel-present | 82 | 11 | 11x8 | 11 | 5 | 12 | 221 | 11 images, registered + alt | DONE |
| b1.09 | politesse | 82 | 11 | 11x8 | 11 | 5 | 13 | 232 | 11 images, registered + alt | DONE |
| b1.10 | si-clauses | 89 | 12 | 12x8 | 12 | 5 | 10 | 215 | 12 images, registered + alt | DONE |
| b1.11 | qui-que | 83 | 11 | 11x8 | 11 | 5 | 18 | 246 | 11 images, registered + alt | DONE |
| b1.12 | dont-ou | 84 | 11 | 11x8 | 11 | 5 | 22 | 217 | 11 images, registered + alt | DONE |
| b1.13 | lequel-ce-qui | 84 | 11 | 11x8 | 11 | 5 | 17 | 215 | 11 images, registered + alt | DONE |
| b1.14 | subjonctif-formation | 82 | 11 | 11x8 | 11 | 5 | 15 | 234 | 11 images, registered + alt | DONE |
| b1.15 | subjonctif-declencheurs | 86 | 11 | 11x8 | 11 | 5 | 16 | 253 | 11 images, registered + alt | DONE |
| b1.16 | subjonctif-infinitif | 85 | 11 | 11x8 | 11 | 5 | 20 | 235 | 11 images, registered + alt | DONE |
| b1.17 | ordre-pronoms | 87 | 11 | 11x8 | 11 | 5 | 9 | 235 | 11 images, registered + alt | DONE |
| b1.18 | voix-passive | 85 | 11 | 11x8 | 11 | 5 | 15 | 195 | 11 images, registered + alt | DONE |
| b1.19 | discours-indirect | 85 | 11 | 11x8 | 11 | 5 | 18 | 181 | 11 images, registered + alt | DONE |
| b1.20 | negation-avancee | 85 | 11 | 11x8 | 11 | 5 | 19 | 200 | 11 images, registered + alt | DONE |
| b1.21 | inversion | 88 | 11 | 11x8 | 11 | 5 | 13 | 181 | 11 images, registered + alt | DONE |
| b1.22 | cest-il-est | 86 | 11 | 11x8 | 11 | 5 | 19 | 192 | 11 images, registered + alt | DONE |
| b1.23 | tout | 85 | 11 | 11x8 | 11 | 5 | 16 | 196 | 11 images, registered + alt | DONE |
| b1.24 | meme | 85 | 11 | 11x8 | 11 | 5 | 19 | 180 | 11 images, registered + alt | DONE |
| b1.25 to b1.39 | see the sequence doc | | | | | | | | | NOT STARTED |

Commits: `ff4fdf8` (b1.01 + standards), `39baeec` (act chapter cards + dev preview), `b1e47c9` (b1.02 to b1.04 rebuilt), then the playbook and log, then wave 1 (b1.05 to b1.08), wave 2 (b1.09 to b1.11), wave 3 (b1.12 to b1.14).

**Wave 4 LANDED 2026-09-25: b1.15, b1.16, b1.17 and b1.18, each verified
independently by the orchestrator. That is EIGHTEEN lessons authored and NONE
has reached a learner: the import pipeline exists and its dry run is clean, but
it has never been applied. Applying it, then the seed merge, then a publish, is
the work that matters more than a nineteenth lesson.**

**REVIEW GATE 2 PASSED 2026-09-26. Paul reviewed b1.15 to b1.24 on the Pixel 6 and passed the gate. Wave 7 (b1.25 register, b1.37 reading strategy, the NEW workshop shape) is unblocked; Paul reviews those two before the rest of the workshop lessons.**

- All 110 act openers of b1.15 to b1.24 opened by deep link (`ealch://act?key=b1.NN.l1&act=N`, N counts from 0) and screenshotted: right lesson number, own art on every act (none blank), French title and intro with the English under it. The b1.24 graded task (mission 79) renders brief, bold requirement and weighted criteria, and « French only » hides the English.
- **The Metro that was running served a bundle WITHOUT b1.18 to b1.24** (it predated wave 5). Restarted per [[ealch-manifest-retry-pileup]]: Metro `CI=1 --clear` on 8083, the manifest-cache proxy on 8082, both ports reversed. The first manifest took 5 minutes because an emulator and other sessions had the CPU at 100%; cached after that. **CI mode means Metro does not see edits: restart it after any source change before looking on the phone.**
- FIXED: b1.20 act 2 intro read « Pas dit non, sans plus », broken French without the quote marks. Now « « Pas » dit non ». Text only, no version bump.
- PAUL DECIDED (`cd1d420`): b1.24 act 6 retitled « Même Paul »; b1.17 act 6 « La bascule » retitled « À l’impératif » (the term stays); b1.16's closing intro rewritten so it no longer echoes b1.15's; the floating gear was the Expo dev menu's button (debug builds only), switched off on the phone.

**Wave 6 LANDED 2026-09-25: b1.22 c'est vs il est, b1.23 tout, b1.24 même,
verified independently (validators 0/0/0, 568 rows, zero id collisions, 104/104
house tests, readiness 0 blockers, live Postgres probe clean on all twelve
themes). TWENTY-FOUR lessons authored. REVIEW GATE 2 IS NEXT: nothing in wave 7
starts until Paul has looked. 143 prompts (b1.12 to b1.24) have no art yet. Findings:**

- **a1.06 owns the c'est / il est determiner test**, a1.11 jobs, a1.22 nationality, a1.12 the clock. b1.22 builds on them. Open: act 6 calls spoken « c'est mes collègues » normal where a1.06 calls it wrong (the written rule stays ce sont).
- **No A1/A2 lesson teaches tout as a system**, only chunks (a1.08, a1.25, a2.07, a2.27-30; sons.06 owns the sounded s of pronoun tous).
- **NOBODY OWNS THE STRESSED PRONOUNS.** a1.05 defers them to a lesson that was never built. b1.24 uses moi, toi, lui as known forms for moi-même. A gap for Paul to decide.
- **même respells MEM** (the seed's spelling, and it passes hasPlainNasal). b1.23 had MEMM in one row; aligned by the orchestrator.
- **b1.20 did not cover « ne ... même pas »**; b1.24 act 7 teaches it.

**Wave 5 LANDED 2026-09-25: b1.19 reported speech, b1.20 advanced negation,
b1.21 inversion, verified independently (validators 0/0/0 on all three, 562
rows, zero id collisions across the batch, a live Postgres probe clean on all
nine themes). TWENTY-ONE lessons authored, none has reached a learner. Next:
wave 6 (b1.22-24), then REVIEW GATE 2. Findings from this wave:**

- **a1.18 does NOT teach ne...plus / jamais / rien / personne.** Its corpus guard excludes them and no A1 or A2 lesson introduces them, so b1.20 act 2 TEACHES them rather than recapping. Open: is one act enough.
- **Simple question inversion is a1.19's, not a1.20's.** a1.19 « Questions oui / non » owns the three strategies and the closed list of twelve forms; a1.20 owns the question words. b1.21 cites both.
- **b1.19 is the first lesson to BUILD the plus-que-parfait**, only as a reported passé composé. Whether a later lesson owns it as a narrative tense is open.
- **b1.21 has 2 stories, not 3-6**: a bubble cannot carry a spaced « ? » and most of its French is questions.
- **`fr.sons.liaisons.023`** « Dis-moi quand est-ce que ça commence. » is published and is exactly what b1.19 act 4 teaches NOT to write. Left alone; Paul to decide.
- **`b1-import-readiness.ts` had never picked up wave 4**, and printed a hard-coded « lessons 14 ». It now lists all 21 slugs and counts them.

## THE ID RULE, learned the hard way (2026-09-24)

**Authored b1 ids start at 1000 in every theme, and you probe POSTGRES before claiming a block.** The seed is roughly a quarter of the database, so a theme that looks empty in `seed.json` is not empty: `recits-au-passe`, `projets-et-futur` and `conseils-et-suggestions` each hold 115 published `fr.b1.*` rows that the seed does not carry, and `pronoms-essentiels` holds 138. Blocks claimed from the seed alone put 200 authored rows straight on top of published ones (b1.01 70, b1.02 15, b1.05 115), which an import would have overwritten.

The probe, from `ealch-admin/`:

```
select split_part(id,'.',2) lvl, theme, count(*), max(nullif(regexp_replace(split_part(id,'.',4),'[^0-9]','','g'),'')::int)
from content_items where theme = 'your-theme' group by 1,2;
```

## Id ledger, theme `recits-au-passe`

Every B1 Unit 1 item lives in the existing `recits-au-passe` theme (fondations, a2-b2). Ids are `fr.b1.recits-au-passe.NNN`, built by each corpus's `E(n)`. **Before authoring, claim your block here in the same commit as the lesson.**

| Block | Owner | Authored |
|---|---|---|
| 001-099 | **DB HOLDS 001-115** | do not use |
| 1401-1499 | b1.01 (moved off the collision) | 1401-1471 |
| 101-199 | b1.02 (116-178 only) | 116-178 |
| 1501-1599 | b1.02 (moved off the collision) | 1501-1515 |
| 201-299 | b1.03 | 201-281 |
| 301-399 | b1.04 | 301-390 |
| 401-799 | b1.01 (overflow) | 401-550 |
| 800-999 | b1.02 (overflow) | 800-899 |
| 1000-1199 | b1.03 (overflow) | 1000-1161 |
| 1200-1399 | b1.04 (overflow) | 1200-1322 |
| **1400+** | **FREE** | a later past-narration lesson takes a 200-wide block from 1400 |

729 rows authored so far, zero id collisions.

### Theme `projets-et-futur` (fondations, a2-b2, EMPTY in the seed)

B1 Unit 2 is about the future and the conditional, which are not past narration, so its items go here. The theme already exists, so nothing is created at import.

| Block | Owner | Authored |
|---|---|---|
| 001-199 | **DB HOLDS 001-115** | do not use |
| 1001-1199 | b1.05 futur simple (moved off the collision) | 1001-1170 |
| 200-399 | b1.06 futur simple, irregular stems | 200-397 |
| 400-599 | b1.07 future usage and conditions | 400-577 |
| 600-799 | b1.08 conditionnel présent | 600-789 |
| 800-999 | FREE | |
| 1200-1399 | b1.10 si clauses | 1200-1378 |
| 1400+ | FREE | |

### Theme `conseils-et-suggestions` (fondations, a2-b2)

DB holds 115 `fr.b1.*` rows (001-115) that the seed does not show.

| Block | Owner | Authored |
|---|---|---|
| 001-115 | **DB** | do not use |
| 1000-1199 | b1.09 polite requests | 1000-1190 |

### Theme `pronoms-essentiels` (fondations, a1-b2)

DB holds 138 `fr.b1.*` rows (001-138), and 693 rows across all levels.

| Block | Owner | Authored |
|---|---|---|
| 001-138 | **DB** | do not use |
| 1000-1199 | b1.11 qui and que | 1000-1196 |
| 1200-1399 | b1.12 dont and où, prepositional relatives | 1200-1399 (182 rows) |
| 1400-1599 | b1.13 lequel, ce qui, ce que | 1400-1592 (193 rows) |
| 1600+ | FREE | |

### Theme `opinions-et-avis` (fondations, a2-b2)

B1 Unit 4 is the subjunctive, which lives in opinion, will and doubt, not in
pronouns. Probed 2026-09-24: 295 rows in all, 115 of them `fr.b1.*` at 001-115,
highest number in the theme 132, and NOTHING at or above 900. The theme already
exists, so nothing is created at import.

| Block | Owner | Authored |
|---|---|---|
| 001-132 | **DB** | do not use |
| 1000-1199 | b1.14 subjunctive formation | 1000-1195 (196 rows) |
| 1200-1399 | b1.15 subjunctive triggers | 1200-1398 (199 rows) |
| 1400-1599 | b1.16 subjunctive vs infinitive | 1400-1591 (192 rows) |
| 1600+ | FREE | |

b1.15 is the TRIGGERS lesson, so this theme is exactly right for it: `il faut
que`, `je doute que`, `je suis content que` are opinion, will and doubt. The
open question about whether `opinions-et-avis` suits the subjunctive is about
b1.14, the FORMATION lesson, which found no reusable rows here. That question
can be settled later without holding wave 4 up.

## Seeing the drafts on a phone (READY, 2026-09-24)

`pnpm tsx scripts/data/b1/_preview-b1.ts` from `ealch-admin/` rebuilds
`ealch-v2/src/content/dev-preview-b1.json`, the whole draft band in one file.
A dev build merges it over the seed, and because the seed carries NO b1 units,
the B1 band then appears in the Den trail on its own: 14 headings and 154 act
rows. Switch the level chip to B1, or deep-link `ealch://den?band=b1`.

- **Adding a lesson is ONE line** in the generator's `SLUGS` list.
- **Rebuild after ANY source change.** `scripts/b1-preview-fixture.test.ts`
  fails if the fixture and the sources disagree, and names what drifted. The
  old b1.01-only fixture went three commits stale and shipped 0 sheet links.
- **Release builds are unaffected**, measured by `expo export`: no string
  unique to the fixture survives into the bundle.
- The drafts open past the level gate in dev only, from `DRAFT_LESSON_IDS`.

### Theme `pronoms-essentiels`, continued

| Block | Owner | Authored |
|---|---|---|
| 1600-1799 | b1.17 pronoun order | 1600-1797 (198 rows) |
| 1800+ | FREE | |

### Theme `faits-et-procedures` (fondations, a2-b2) — CREATED 2026-09-25

« Les faits et les procédures ». Made for b1.18, the passive, because no
existing theme fitted: `verbes` is the most crowded in the corpus (870 rows,
highest number 833), and `connecteurs-logiques` is the wrong meaning.

Named for the FUNCTION rather than the grammar, which is the convention every
other B1 theme follows (`recits-au-passe`, `projets-et-futur`,
`conseils-et-suggestions`). The French passive lives in notices, rules and
official language: « Le magasin sera fermé », « Les documents seront envoyés ».
Sub-themes: la voix passive, on et se faire, les avis et les consignes.

It exists in POSTGRES only. The seed gets it at the next publish, so a
readiness run will warn that the theme is not in the seed's theme list until
then. That warning is expected, not a defect.

| Block | Owner | Authored |
|---|---|---|
| 001-999 | reserved for a future published import | do not use |
| 1000-1199 | b1.18 the passive | 1000-1192 (173 rows) |
| 1200+ | FREE | |

### Theme `paroles-rapportees` (fondations, a2-b2) — CREATED 2026-09-25

« Les paroles rapportées ». Made for b1.19, reported speech. Probed all 130
themes: nothing about speech, quotation or saying. Named for the function, like
the others: you report what someone said. Sub-themes: le discours indirect,
la concordance des temps, les verbes introducteurs. POSTGRES ONLY until the
next publish, so the readiness warning about the seed's theme list is expected.

| Block | Owner | Authored |
|---|---|---|
| 001-999 | reserved for a future published import | do not use |
| 1000-1199 | b1.19 reported speech | 1000-1193 (181 rows) |
| 1200+ | FREE | |

### Theme `negation-et-restriction` (fondations, a1-b2) — existing

Probed 2026-09-25: 631 rows, 281 `fr.b1.*`, highest number 283.

| Block | Owner | Authored |
|---|---|---|
| 001-283 | **DB** | do not use |
| 1000-1199 | b1.20 advanced negation | 1000-1199 (200 rows, the whole block) |
| 1200+ | FREE | |

### Theme `langue-soignee` (fondations, a2-b2) — CREATED 2026-09-25

« La langue soignée ». Made for b1.21, inversion. `questions` is a sons theme
and `questions-du-quotidien` stops at a2, and a1.20 already owns the simple
question inversion. What b1.21 adds is the CAREFUL register: complex inversion
(« Votre fille viendra-t-elle ? »), inversion after « peut-être », « sans
doute », « à peine », and the incise (« dit-elle »). That is a register, not a
question type, and b1.25 (register) can reuse the theme. Sub-themes:
l'inversion, les incises, le registre soutenu. POSTGRES ONLY until the next
publish.

| Block | Owner | Authored |
|---|---|---|
| 001-999 | reserved for a future published import | do not use |
| 1000-1199 | b1.21 inversion | 1000-1194 (181 rows) |
| 1200+ | FREE | |

### Wave 6 themes, all EXISTING, edited in Postgres 2026-09-25

None of the three needed a new theme. All three had empty `sub_themes`, now
filled. **These edits live in POSTGRES ONLY. `import-seed.ts` upserts seed.json's
themes over Postgres, so running it would revert them; a publish carries them
into the seed instead.** Nothing validates an item's level against its
theme's range, so the widening is for the label, not for a gate.

| Theme | Change | Probed 2026-09-25 |
|---|---|---|
| `description-personnes-objets` | range a1-a2 WIDENED to a1-b1; sub-themes: le portrait et le caractère, les objets et leurs qualités, c'est ou il est | 300 rows, 0 `fr.b1`, highest 180 |
| `expressions-de-quantite` (a1-b2) | sub-themes: les quantités et les mesures, beaucoup peu assez, tout et la totalité | 521 rows, 167 `fr.b1`, highest 170 |
| `comparaisons` (a2-b2) | sub-themes: le comparatif, le superlatif, le même et la différence | 319 rows, 111 `fr.b1`, highest 163 |

Why `description-personnes-objets` for c'est vs il est rather than
`pronoms-essentiels`: the choice IS describing people and things, the theme
had no b1 rows, and `pronoms-essentiels` already carries four B1 lessons.

| Theme | Block | Owner | Authored |
|---|---|---|---|
| `description-personnes-objets` | 1000-1199 | b1.22 c'est vs il est | 1000-1191 (192 rows) |
| `expressions-de-quantite` | 1000-1199 | b1.23 tout | 1000-1195 (196 rows) |
| `comparaisons` | 1000-1199 | b1.24 même | 1000-1179 (180 rows) |

In each, everything below 1000 is published or reserved: do not use.

## The wave plan from here

Lessons are built in waves. **Paul reviews after every 10 lessons**, and nothing in the next wave starts until he has.

| Wave | Lessons | Shape |
|---|---|---|
| 1 | b1.05 b1.06 b1.07 b1.08 | Futur simple (regular, irregular stems, usage after quand/dès que), conditionnel présent |
| 2 | b1.09 b1.10 b1.11 | Polite requests, si clauses, qui/que |
| 3 | b1.12 b1.13 b1.14 | Dont/où, lequel and ce qui/ce que, subjunctive formation |
| **REVIEW GATE 1** | after b1.14 (10 lessons) | Paul reviews on the Pixel 6 |
| 4 | b1.15 b1.16 b1.17 b1.18 | Subjunctive triggers, subjunctive vs infinitive, pronoun order, passive |
| 5 | b1.19 b1.20 b1.21 | Reported speech, advanced negation, inversion |
| 6 | b1.22 b1.23 b1.24 | C'est vs il est, tout, même |
| **REVIEW GATE 2** | after b1.24 (20 lessons) | PASSED 2026-09-26 |
| 7 | b1.25 b1.37 | The workshop shape pilot (register, reading strategy). NEW SHAPE: Paul reviews these two before the rest of the workshop lessons |
| 8 | b1.26 b1.27 b1.28 b1.29 | Tu vs vous, body idioms, animal and food idioms, colour expressions |
| 9 | b1.30 b1.31 b1.32 b1.33 | Coordination, subordination, concession, environment and society |
| **REVIEW GATE 3** | after b1.33 (30 lessons) | Paul reviews |
| 10 | b1.34 b1.35 b1.36 | Media, emotions, business |
| 11 | b1.38 b1.39 | Listening strategy, emails and letters (B1 capstone) |
| **REVIEW GATE 4** | after b1.39 (B1 complete) | Paul reviews, then B2 |

## How a wave runs

1. Each lesson gets its OWN fresh agent. The agent reads `B1-BUILD-PLAYBOOK.md` and this log, claims its id block, and builds one act at a time.
2. Agents in a wave touch only their own `<slug>-{corpus,terms,lesson}.ts` and `<slug>-image-prompts.md`. Nothing under `ealch-v2/` is edited by an authoring agent.
3. When a wave lands: verify each lesson independently (missions, acts, openers, quiz, drills, sheets, links, items, id collisions, banned characters), update this table and the ledger, then commit the wave.
4. At a review gate: regenerate the previews, put them on the Pixel 6, and stop until Paul has looked.

## Open items carried forward
- **DRAFT 2026-09-25: a2.36 « Les pronoms toniques », the stressed-pronoun gap.** Nobody taught moi/toi/lui/eux (a1.05 deferred them to a lesson never built), and b1.22 and b1.24 assume them. Paul chose DRAFT ONLY. Files: `scripts/data/pronoms-toniques-{corpus,terms,lesson}.ts`, `scripts/author-pronoms-toniques-batch.ts` (dry by default, writes only with `--apply`), `scripts/merge-pronoms-toniques-into-seed.ts`. 24 missions in 6 acts, 30-question quiz, 37 rows at `fr.a2.pronoms-essentiels.400-436` (block 400-499 claimed), 44 imports. Dry run clean. Sits at seq 36, AFTER the Bilan A2, until Paul picks its place. **Applying it will break** `a2-35-bilan.test.ts` (a2.35 must be the last A2 unit) and `spine-drift.test.ts` (spine script lacks a2.36); both need a decision, not a blind fix. Moving it earlier than 36 shifts every later « lesson N in A2 » label (~220 baked citations). Also found: NO lesson teaches the imperative; a1.05's sheet omits elle from the forms shared by both sets. The A2 doctrine files live OUTSIDE this repo, in `C:/Users/harki/Downloads/appsroleealch/ealch-admin/`.

- **FIXED 2026-09-24: b1.01's sheet links.** Four sheets, nothing pointed at them, so a learner could never open one; it was the only lesson of fourteen with none. 22 missions now carry a `sheetId`: sheet-recette from acts 2, 3, 5 and the recap, sheet-irreg from act 4, sheet-ortho from acts 6, 7, 8 and 11, sheet-il-me-ne from acts 9 and 10. `Lesson.version` was NOT bumped, because a bump wipes every learner's checkmarks and XP. Held by `ealch-admin/scripts/b1-lesson-integrity.test.ts`, which was checked against the pre-fix lesson and fails on it.
- **The 109 images are made, registered and COMMITTED** (`d63bb5c`, 2026-09-24). Counted on disk: b1.02 10, b1.03 10, b1.04 12, b1.05 10, b1.06 11, b1.07 11, b1.08 11, b1.09 11, b1.10 12, b1.11 11 = 109, plus b1.01 regenerated. `lessonImages.ts` carries the registrations and is also uncommitted. Every act opener in b1.01 to b1.11 resolves: 121 files on disk, 161 registered paths, none missing in either direction. None of it has been seen on a device, so REVIEW GATE 1 is the first look. Wave 3 (b1.12, b1.13, b1.14) has 33 prompts and no art yet.
- **FIXED 2026-09-24: the answer-slot skew.** Every lesson had piled its answers onto one slot. b1.09 sat at 75% on one slot across its binary checks with a run of NINETEEN identical answers in a row, b1.10 at 72% with a run of 13. Nothing caught it: the playbook asked for "no slot over 40% lesson-wide", but `validateDensity`'s only spread rule is `quiz-spread`, which inspects the quiz alone, so authors hit ~36% there and the missions drifted. The old rule was also unreachable, because a two-option check can only answer in slot 0 or 1. All fourteen lessons were rebalanced by permuting each item's options and its `correct` index together, which moves the answer without changing a word: the option sets and the correct answer strings are byte-identical before and after, and 52 items whose `why` names a position ("La troisième est le présent") were left alone. The quiz was excluded, because LessonRich re-shuffles its options every attempt. Result: every class is now 50/50 or a third each, and no lesson repeats a slot more than 3 times. Held by `ealch-admin/scripts/b1-answer-slots.test.ts`, which was checked against the pre-fix b1.09 and fails on it.
- **RESOLVED 2026-09-25: the `task` section is real.** `task` is in `SECTION_TYPES` and the `LessonSection` union, `validateSection` enforces its rubric/model/watchFor rules, and `TaskView.tsx` draws brief, criteria, response box, scaffold and a per-criterion self-check. All fourteen now validate WITH the task in place, and the preview ships it as a task. **The LLM grading path is NOT built, and it is BLOCKED, not merely unstarted**: `examGrader.grade()` requires a `paperId` and `skill`, and `grade-exam` calls `attemptAuthorized(uid, paperId, skill)` against `exam_attempts` before grading. A lesson task has no exam attempt, so the Examiner's grader would refuse it. The draft spec assumed the grader was reusable; the reusable part is the TYPES, not the call. Lesson tasks need their OWN endpoint, ungated by an attempt but still metered, which is a decision about LLM spend. Meanwhile the shipped behaviour is offline self-check against the model answer, and a test asserts the view makes no network call.
- **DB-only rows cannot be reused, so lessons author twins.** An author can only name an existing row that the SEED carries: `src()` resolves against seed.json and naming a DB-only id throws at module load. But Postgres holds ~115 published `fr.b1.*` rows per theme that the seed omits, and many are exactly on topic (b1.09 found ~40: « il faudrait », « à ta place », « et si on », « on pourrait »). Every lesson therefore authors near-duplicates of published content. b1.09 records seven of them in its corpus as `DB_ONLY_TWINS`. **This needs a decision at import time**: either dedupe against the DB and drop the twins, or keep both and accept the overlap. Until then, authors keep writing twins and the corpus grows redundant.
- **No B1 import pipeline.** Nothing can reach Postgres or the seed until one exists. **Readiness IS proven, 2026-09-25**: `pnpm tsx scripts/b1-import-readiness.ts` (writes nothing) reports 0 blockers over 14 lessons, 14 units, 2,603 authored items and 487 reused published ones, and a read-only Postgres probe found no `fr.b1` row at or above any authored floor. So what is missing is the pipeline, not permission. **Two traps it records**: the batch quotes itself (b1.02 names 39 of b1.01's rows), so a lesson must be checked against the WHOLE batch, not its own corpus; and `recits-au-passe`/`projets-et-futur` each hold 17 published rows numbered 116-132 that look like a collision against b1.02's 116 floor but are `fr.a2` rows. **The level is part of the id: compare full ids, never numbers.**
- **RESOLVED 2026-09-25: `coach-fr-FR` is inert, not broken.** Nothing reads `audio.coachVoice` at runtime (only the schema declaration, content files and one test fixture). Narration language comes from `services/tts.ts`, which defaults to fr-FR and picks a device French voice, so French `say` lines already speak French. No voice needs registering. What A2 and B1 need for a narrated way in is a `narration` SCRIPT plus the `'narrated'` feature flag, which is content.
- **Two repo typecheck errors** in `check-genre-artifacts.ts` and `publish-content.ts` (WorthlessEnding/EndingClaim), from the genre-drift commits. Not from this work; do not "fix" them blind.
