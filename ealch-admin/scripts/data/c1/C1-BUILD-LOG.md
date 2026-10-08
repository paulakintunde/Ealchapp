# C1 build log and plan

The resume point for C1, started 2026-09-30 the day B2 finished (v84). A cleared
session reads THIS file, then `C1-BUILD-PLAN.md` (the 24 lessons, waves, pack
layout), `C1-RESEARCH-PLAN.md` (per-lesson scope, builds-on, inventory, sources,
exam link, id home, risks), then `../b2/B2-BUILD-LOG.md`,
`../b1/B1-BUILD-PLAYBOOK.md` and `../b1/B1-WORKSHOP-AND-VOCAB-SHAPES.md`. C1
reuses the B1/B2 factory whole; this file records only what is different.

## Paul's decisions

**Phase 0 decisions (Paul, 2026-09-30):**

1. **The five lessons that overlap B2 stay, each refocused past its B2 lesson.**
   C1 keeps 24 lessons. c1.03 on tense agreement in literary texts (past b2.09);
   c1.06 on politeness and distance in speech (past b2.20, b2.22); c1.07 on
   reframing and closure (past b2.15, b2.16); c1.10 on the problem question and
   plan types (past b2.22, b2.23); c1.23 on tact in writing and presenting (past
   b2.26). Each act 1 names its B2 lesson by trail position and goes past it.
2. **Unit 5 is « Interprétation et médiation ».**
3. **Wave 1 is exam-first:** c1.20, c1.21, c1.01, c1.24, as B2 did.
4. **The five missing theme rows are created** with these values (written and
   read back 2026-09-30, see the ledger):

   | slug | title | domain | range | exam |
   |---|---|---|---|---|
   | francais-professionnel-avance | Le français professionnel avancé | travail | c1-c2 | no |
   | nuances-et-registres | Les nuances et les registres | fondations | c1-c2 | no |
   | discours-dexamen | Le discours d'examen | education | c1-c2 | yes |
   | culture-profonde | La culture en profondeur | culture | c1-c2 | no |
   | rhetorique | La rhétorique | concepts | c1-c2 | no |

**Wave 1 setup decisions (Paul, 2026-09-30):**

5. `strategies-de-comprehension` widens from b1-b2 to b1-c1, so c1.20 and c1.24
   sit beside b2.24 and b2.25 (validateCorpus refuses a c1 row outside a theme's
   range).
6. One sub-theme per wave 1 home, as B2's waves did: discours-dexamen « faire le
   point sur sa grammaire » (c1.01) and « suivre un débat à l'oral » (c1.21);
   strategies-de-comprehension « lire entre les lignes » (c1.20) and « analyser
   la presse » (c1.24).

**Exam link decision (Paul, 2026-09-30, wave 1):**

7. **Both.** (a) The 12 C1 closed tasks' `targetItemIds` are repointed to c1.20
   rows (CE) and c1.21 rows (CO), so a miss re-queues the C1 reading or
   listening atoms. (b) The exam report also offers the prep lesson for a failed
   closed section: `dueExamSkills` resolves closed misses through
   `EXAM_PREP_TARGETS` too, which also makes `CE@b2 → b2.24` and
   `CO@b2 → b2.25` live.
8. **The two TEF C1 tasks** (`ce_mcq.006`, `co_mcq.006`) are repointed from
   A1/A2 rows to c1.20 / c1.21 rows with the other ten, at the wave 1 import.

**Wave 1 pre-gate decisions (Paul, 2026-09-30):**

9. c1.24's topics approved (festival, school calendar, urban works).
10. The listening screen ENFORCES `maxPlays: 1` on exam-format items (app
    change), so c1.21's one-play practice matches the exam.
11. c1.20 act 9's billet gets a new situation (not B2 lesson 24's closed counter
    and phone loop); the act 9 image and prompt stay as they are.
12. c1.20 keeps « présupposé » / « sous-entendu » as linguists use them, with one
    bridge line: B2 lesson 24 used « présupposé » for both.
13. The 23 Postgres-only legacy rows (c1.20 9, c1.21 11, c1.24 3) stay reused by
    id; their typography (straight apostrophes, space before ?) is fixed as a
    text edit at the import.
14. Task rubrics stay 6 criteria / 20 points (c1.20, c1.24).
15. Verify the TEF reportage section label (pack says F, prep sources say G);
    if G is right, relabel the pack and c1.21 together for v85. **Checked
    2026-09-30:** no official CCI document letters the listening paper (the
    Oct 2024 sample booklet uses question ranges: Q21-30 chroniques, interviews,
    reportage radio), so F vs G is a prep-site convention. c1.21 now drops the
    letter and says the real reportage carries two questions. Pack labels left
    as they are. **New, for Paul (outside wave 1):** against the official
    sample, all five TEF papers' listening diverges: the reportage has 1
    question (official 2), answering-machine messages are 3 documents inside G
    (official family of about 6), documents divers are 17 (official 10). The
    labels also drive voice casting and pacing (`lib/examAudio.ts`,
    `exam/check-speech-rate.ts`, `exam/marking-sheet.ts`), so any relabel needs
    an explicit block key first. Sources and file list: the TEF check report
    (2026-09-30).
16. Up to 4 tapTables per lesson at C1 (playbook open point 11.2).

**Open, for Paul** (raised by the research; detail in C1-RESEARCH-PLAN.md):

- PE@c1 / PO@c1: a `dalf_c1` format (schema + enum migration) or TEF/TCF tasks
  tagged c1; c1.10's task shape.
- Later-wave range widenings (litterature, pronoms-essentiels, langue-soignee,
  connecteurs-logiques, faux-amis) and three home changes (c1.04, c1.11, c1.22).

## Progress

**PHASE 0, 2026-09-30.**

- **Step 1, the pipeline takes `--band c1` (`795b44a`).** `Band` is
  `'b1' | 'b2' | 'c1'`, `C1_SLUGS` is empty until wave 1, lessons load from
  `data/c1/`. The import, merge, trial merge, preview and the three house tests
  were already keyed on the band (the house tests take the folder from the lesson
  id), so only the band list changed. `scratch/_app-checks-b1.mts --all` now reads
  the chosen band's list (it read B1's for every band; scratch is untracked).
  Proof: B1 import dry run 39 lessons, 7121 rows identical, 0 to insert, 0 to
  update, 0 blockers; B2 34 lessons, 6046 identical, 0 / 0 / 0; C1 runs with 0
  lessons, 0 blockers; app checks `--band b2 --all` TOTAL 0; admin 1009 pass /
  0 fail / 1 skipped; app 5724/5724.
- **Step 2, theme rows.** The five rows above inserted in one transaction (it
  refuses if any slug exists) and read back; 0 c1 items left without a theme row
  (`scratch/_c1p0_theme_rows.mts`).
- **Step 3, exam routing prepared (`ca9762c`).** `CE@c1 → c1.20.l1` and
  `CO@c1 → c1.21.l1` in `EXAM_PREP_TARGETS`. Inert until the lessons publish: a
  named target absent from the corpus falls back to the first-match rule, so a
  C1 miss resolves exactly as before. Test « C1 reading and listening route to
  c1.20 and c1.21, and stay inert until those lessons exist »; progress tests
  124/124. See the open item above: these keys only ever answer OPEN tasks.
- **Step 4, seed cut and trail (`466769f`).** Nothing to change. Under packs the seed cut
  needs no unit list (`TEST_CUT` carries every band, c1 included, and the merge
  needs no `SEED_CUT.units` entry), `splitCorpus` puts a c1 unit's skeleton in the
  core and its body in the c1 pack, and the Den draws a band's units from
  `unitsInBand`. Postgres already holds 5 c1 units, all Speak trail stages
  (`speak.6.1`-`speak.6.5`), which carry the 913 c1 rows into the c1 pack: no
  collision with lesson units `c1.NN`. Pinned by two tests in
  `content-packs.logic.test.ts` (a C1 unit splits like B2 and never pulls a B2 row
  up; today's lesson-less c1 pack holds only Speak rows) and one in
  `trail.logic.test.ts` (the C1 tab draws a skeleton unit, gated for a free
  learner, open once entitled). `--packs --dry-run` (no C1 lesson, after the five theme rows, before the wave 1
  sub-themes): valid, v84 → v85 with 0 content change except themes 136 → 141;
  packs valid (core alone, every band in fetch order, exam alone, core seed); all
  5 packs reused, c1 still v79 at 0.35 MiB; pack replay 12 phone upgrades from 4
  older states, **0 deadlocks**; checksum 4cdbcda7...; seed.json untouched (the dry
  run rewrites the tracked `PUBLISH-REPORT.md`, left uncommitted). Suites after
  all Phase 0 tests: app 5730/5730, admin 1011 pass / 0 fail / 1 skipped.
- **Step 5, wave 1 setup.** `strategies-de-comprehension` widened to c1, four
  sub-themes set, each block re-probed free at every level inside the same
  transaction (`scratch/_c1w1_themes.mts`). Blocks in the ledger; the four author
  briefs below. Authors NOT dispatched (Paul's call).
- **Research plan:** `C1-RESEARCH-PLAN.md`, all 24 lessons, from five read-only
  inventories (one per unit).

**WAVE 1, 2026-09-30.**

- **Drafts (four fresh authors, one per lesson).** c1.01, c1.20, c1.21, c1.24
  written; slugs in `C1_SLUGS` (trail order), the four lessons in the three
  house tests and in `ART_PENDING` (48 openers). c1.01's tag made unpadded
  (« C1 · LEÇON 1 », as B2). Checks: app checks `--band c1 --all` TOTAL 0; house
  tests 310/310; C1 import dry run 602 rows to insert, 0 conflicts, 0 blockers,
  136 reused published rows, floors discours-dexamen 1000 and
  strategies-de-comprehension 1800 clear. Each author's open questions sit in
  its lesson header.
- **Postgres-only reused rows** (c1.20: 9 legacy c1 rows in `PG_ROWS`; c1.21:
  11 in `DB_ROWS`; c1.24: 3 in `DB_ONLY_ROWS`): published but absent from the
  seed cut. The merge must carry them into the seed, and the gate preview needs
  them.
- **Exam report (`085b98d`):** closed CE/CO misses now offer the named prep
  lesson (decision 7b). The `targetItemIds` repoint (7a, 8) goes with the
  import; c1.20 proposes its rule cards .1808 .1827 .1842 .1866 .1888 .1906
  .1930 .1942 .1949 .1974 .1985 .1998 as CE targets.

- **Pre-review (one fresh reviewer per lesson, WebSearch fact check), fixes
  applied: 36 blockers.** c1.01 11 (a correct « devaient » and two superlative
  keys taught as errors against b2.06, « faute de » routed to lesson 19 not 15,
  errorSpots with no wrong form; « Théâtre de la Rive » is a real venue, renamed
  « Théâtre de l'Anse-Grise »; « revenir vers vous » calque replaced; 9 facts).
  c1.20 5 (the app's mock CE format presented as the real exam: real TCF Canada
  CE 39 items / 60 min, TEF 40 / 60; a reading key the text contradicts;
  « s'en appuyer »; typeIns refusing reprend/renie/fait/loin; « bien parti »
  ambiguous) plus two passages that echoed TCF/TEF blanc-01 word for word,
  reworded (rows .1806, .1880, .1895, same ids); 8 facts. c1.21 14 (typeIns and
  all 11 errorSpots refusing correct French, a reportage question unanswerable
  from hidden audio, mock format presented as the real exam, a false « every
  concession is followed by mais »); acts 2 and 10 re-marked as B2 recap; 18
  facts. c1.24 6 (« the editorial is often unsigned in France » false, now
  hedged per OQLF / CLEMI; three keys the texts contradict; chapeau is the term,
  chapô the jargon); 6 facts. c1.01's pile chips shortened to « produire »,
  « reconnaître » (row was 39 of 37). After: app checks 0, house tests 310/310,
  import dry run 602 / 0 conflicts / 0 twins / 0 blockers, floors clear.
  Image prompts untouched; no act, id or version change.
- **For Paul at gate C1-1** (each lesson header lists its own): c1.20 act 9's
  billet re-runs b2.24 act 6's situation (rewrite after the art?) and
  « sous-entendu » relabels b2.24's « présupposé »; c1.21's one-play cap is
  declared, not enforced by the listening screen; c1.24's topic list (festival,
  school calendar, urban works); Postgres-only reused rows (c1.20 9, c1.21 11,
  c1.24 3) ride in through the merge; the TEF pack labels its reportage
  « Section F », prep sources say G.

- **Trial merge (`b1-trial-merge.ts --band c1`, nothing written):** +4 units,
  +4 lessons, +625 items (113 identical), validateCorpus 0, both seed files
  restored byte-identical. App suite 5729 / 5734: two art tests (until the art
  lands), c1.01 « (e.g. lesson 3 in B2 » read as a lowercase citation after a
  full stop (fixed: « such as lesson 3 in B2 »), and a1.03's printed -tion count
  (52 → 53): c1.24 reuses `fr.b2.litterature.071` « la connotation », published
  but Postgres-only, which the merge carries into the seed. At the real merge:
  re-measure and re-render a1.03 (`pnpm content:gender`,
  `merge-noun-gender-into-seed.ts`; a text edit, no version bump).

- **Pre-gate decisions applied (2026-10-01).** c1.20 act 9's billet is new (a
  tenant's day waiting for the radiator technician, « la Régie du Vieux-Pommier »;
  rows .1946-.1955 and .1965 rewritten in place, act 9 image unchanged) and act 8
  carries the présupposé / sous-entendu bridge line (decisions 11, 12). One-play
  cap in ListeningView (`23c5e80`). c1.21 drops the TEF letter (`b16d2d1`).
  Legacy typography script and synced source copies (`77564cd`).
- **Art registered (2026-10-01).** Paul's 48 openers landed and were registered
  by an outside process with double-quoted alt lines, converted to single quotes
  (alt = each prompt's « The subject is » line). Count per lesson: 12 files, 12
  require, 12 alt, 0 duplicates. ART_PENDING cleared. Suites: admin 1027 pass /
  0 fail / 1 skipped, app 5735/5735.

- **Gate C1-1 preview ON THE PIXEL 6 (2026-10-01).** The Pixel 6 held a release
  build (installed 2026-09-30 21:45); with Paul's OK it was uninstalled and the
  2026-09-30 debug APK installed. Temporary fixture `scratch/_gate-c1-1-preview.mts`
  (4 lessons, 48 acts, 738 items: +113 reused rows from seed+packs, +23 from
  Postgres with the decision 13 typography applied; 0 missing) written over
  dev-preview-b1.json, NOT committed; Metro 8082 `--clear`. The C1 tab shows
  « PREVIEW · C1 DRAFTS » and all four lessons; c1.20's openers render with art.
  Afterwards: restore with `npx tsx scripts/data/b1/_preview-b1.ts`.

- **GATE C1-1 PASSED (Paul, 2026-10-01): « Check on device and its okay ».**
  No change to the C1 voice (length, tone, difficulty), so the wave 2-6 briefs
  keep the wave 1 shape: workshop, 70-90 missions in 11-12 acts, readings of
  about 300 words, unsimplified French with authored English. Orchestrator
  device check on the Pixel 6: c1.21 act 10's capped listening shows one
  « Play the recording (1) » control, lines hidden, no per-line dots, and locks
  after one play; while it plays it now says « Listening… » (it said « done »
  during playback).

- **IMPORT (Paul's OK, 2026-10-01).** Trial merge first: 5735 / 5737, only
  a1.03's two printed figures. Postgres: legacy typography 14 rows (re-run 0);
  `b1-import.ts --band c1 ... --apply` 602 inserted, 4 units + 4 lessons, read
  back published and identical; exam repoint 12/12 read back. Merge: +4 units,
  +4 lessons, +625 items, +3 themes, validateCorpus 0 (core as free sees it 0),
  additive against HEAD (0 lost; only a1.03.l1 changed). a1.03 re-measured
  (-tion 52 → 53, -on 173 → 174), `pnpm content:gender` (version stays 14),
  merged. Two scripts still read seed.json alone since packs (v79) and were
  fixed to seed + packs: `author-noun-gender-batch.ts`,
  `merge-noun-gender-into-seed.ts` (its id lookup stays on the core: a1.03 is
  free). `b1-preview-fixture.test.ts` counted only b1/b2 lessons as seeded; now
  every band. Suites: app 5737/5737, admin all pass. `pnpm content:parity` is
  not a gate under packs (it reads seed.json alone; 2145 « missing » rows live
  in the layer).
- **v85 DRY RUN found a deadlock (2026-10-01):** legacy full v82 + exam only
  never converged, the first exam-pack change since packs (the 8 paid C1 tasks'
  new targets). Paul: fix the app first. `f77a81e` (trialBands): a pack is
  judged against the bands the base really holds. Dry run after: 0 deadlocks in
  12 states, valid, checksum 292a8b45..., packs b2/c1/exam at v85, a2 v81 and
  b1 v79 reused. Publish waits for the fix to reach phones (OTA).

- **OTA with the fix (Paul's OK, 2026-10-01).** Built from a clean worktree of
  HEAD (`../ealch-ota`, excluding another session's uncommitted Phase 9 work).
  The worktree resolved runtime 5a6ae77, not 514c4cb: the main checkout's
  eas.json / .easignore carry mixed line endings and the fingerprint hashes raw
  bytes; copying those two files byte for byte gave 514c4cb (the Pixel 9's
  preview build cd5a3e0d, installed 02:56). `eas update --channel preview
  --environment preview --platform android`: group db63a24b, update 01a0f810,
  runtime 514c4cb; bundle carries all 9 EXPO_PUBLIC values, the Supabase ref and
  trialBands. Pixel 9: launch 1 downloaded 01a0f810, launch 2 runs it.

- **v85 PUBLISHED (Paul's OK, 2026-10-01). C1 wave 1 is live.** `pnpm
  content:publish --packs`: every gate passed, pack replay 0 deadlocks in 12
  states, checksum 292a8b45...; uploaded core v85 (9.79 MiB), b2/c1/exam packs
  v85; a2 v81 and b1 v79 reused; legacy snapshot untouched (retired). Pixel 9
  (preview build + OTA 01a0f810): the C1 tab shows c1.01's unit and the trail
  through c1.24's last acts, locked « PREMIÈRE » (that device is not entitled
  today). Next: wave 2 (see the wave plan), from these briefs unchanged (gate
  C1-1 kept the voice). Leftovers: the temporary worktree `../ealch-ota`
  (delete when convenient); the Pixel 6 now runs the dev build; the TEF pack
  divergence (decision 15) and the open items below stay open.

- **After v85 (2026-10-01):** the publish's cut dropped six fr.c1.ethique rows
  the repoint freed (still published), moving a1.03's « -e » card 1045 → 1043.
  Re-measured, content:gender (v14), merged, committed (`a207431`); app
  5741/5741. A core-only v86 dry run is valid (checksum 39784708..., 5 packs
  reused, 0 deadlocks). **Paul: ship it with the next publish (wave 2), not
  alone.** Until then phones show « 1045 » on that card.

**WAVE 2 DRAFTED (2026-10-01).** c1.02, c1.03, c1.04, c1.05 written by four
fresh authors; slugs in `C1_SLUGS` in trail order, the four in the three house
tests and in `ART_PENDING` (46 openers). App checks `--band c1 --all` TOTAL 0;
validators 0; house tests 326/326; C1 import dry run 653 to insert (wave 1's 602
identical, published), 0 conflicts, 0 blockers, floors litterature 1600,
pronoms-essentiels 2000, langue-soignee 2000 clear. Postgres-only reused rows:
c1.02 3 (`fr.b2.communaute.108`, `fr.b2.rp-etiquette.066`, `fr.b2.soins.122`),
c1.04 4 (2 with straight apostrophes: same typography edit as decision 13).
Each lesson header lists its open questions; c1.02's roundup may cite « la
leçon 3 du C1 » since c1.03 publishes in the same wave.

- **Wave 2 pre-review (one fresh reviewer per lesson, WebSearch), fixes
  applied: 16 blockers.** c1.02 5 (« Il est à peine arrivé quand… » taught as
  an error and offered as a wrong distractor; a passive shown as the example
  passé antérieur; « eut terminé » note; à peine read as simultaneity; the
  surcomposé claim too broad: only the « j'en ai eu vu » experience use is
  regional); all 9 PD quotations match Wikisource. c1.03 6 (« jamais de
  conditionnel après que » false; « never seriously in speech » contradicted by
  its own act 8 text; row .1968 false; a mislabelled anteriority; a review card
  with literary forms on its back; seven typeIns refusing the modern subjunctive);
  Corneille verified; act 4 partly overlaps b2.09 act 7, now cited. c1.04 2 (a
  correct sentence taught as an error; « auquel cas » refused); « c'est de cela
  dont » confirmed by the Académie (DNP0650) and the BDL; lequel as subject is
  written production (BDL). c1.05 3 (neuter le « ne s'accorde jamais » false for
  a noun with an article; rubric vs model answer; ~25 correct typed answers
  refused). After: app checks 0, validators 0, house tests 326/326, import dry
  run 653 / 0 conflicts / 0 blockers, floors clear. No act, id or version change;
  image prompts untouched.

- **Wave 2 art registered (2026-10-01).** Paul's 46 openers landed, registered
by an outside process with single-quoted alt lines (each prompt's « The subject
is » sentence). Per lesson files = require = alt, 0 duplicates, all JPEG; the
registry diff is exactly 92 added lines. ART_PENDING cleared.

**WAVE 3 DRAFTED (2026-10-01).** c1.06, c1.07, c1.08, c1.09 written by four
fresh authors; slugs in `C1_SLUGS` in trail order, the four in the three house
tests and in `ART_PENDING` (48 openers). App checks `--band c1 --all` TOTAL 0;
validators 0; house tests 342/342; C1 import dry run 1279 to insert (waves 2 +
3; wave 1's 602 identical), 0 conflicts, 0 blockers, eight floors clear.
Postgres-only reused rows grew a lot (c1.06 20, c1.07 14 incl. 7 at level
« sons », c1.08 9, c1.09 18): the merge carries them, the gate preview needs
them, and the decision 13 typography edit must be extended to every listed id
before the wave 2-3 import. c1.09 names no exam (FEI returned 403; the task is
« le format de l'application »). Published legacy rows with defects noted for a
text edit: `fr.c1.francais-professionnel-avance.160` (subjunctive after « il y
a fort à parier »), `fr.b1.pronoms-essentiels.1590` (« le moment auquel »).

- **Wave 3 pre-review (one fresh reviewer per lesson, WebSearch), fixes
  applied: 9 blockers.** c1.06 3 (a correct « à proprement parler » sentence
  taught as an error; an act 4 listening nobody could follow; acts 7-8 broke the
  lesson's own register rules, vous/tu flipping); two re-drills of B2 phrases
  replaced; « c'est pas pire » aligned with Usito. c1.07 1 (an a fortiori
  question about a direction the essay never takes); all 17 Académie / OQLF
  verdicts match their live pages; no OQLF entry for « du coup » (Usito: fam.).
  c1.08 2 (a false « why » against the lesson's own budget figures; two
  defensible answers); « Clémence Arbaud » renamed « Hortense Vallier » (one
  letter off c1.24's « Clémence Arnaud »). c1.09 3 (a correct « si… je
  résumerais » taught as an error; « souligner comment » ambiguous; a tip
  recommending the condemned « je reviendrai vers vous »); act 10's mood trapDrill
  refocused on moods a jury provokes, past b2.06 (orchestrator call: never
  re-teach); new row `.1362`; the DALF stays unnamed (only a 2005 BO annex found;
  the app's 3-5 min task is far shorter). After: app checks 0, validators 0,
  house tests 342/342, import dry run 1280 / 0 conflicts / 0 blockers. No act
  or version change; image prompts untouched.

- **Waves 2-3 trial merge (2026-10-01, nothing written).** +8 units, +8
  lessons, +1348 items, validateCorpus 0, both seed files restored
  byte-identical. It caught one real defect: c1.04's three explicative rows
  (.2116, .2118, .2127) differed from their determinative twins only by commas,
  which the theme duplicate test (the flashhub's view) counts as one card. They
  now read « Nos candidats / locataires / employés, qui… », which keeps the
  comma contrast without hinting « tous ». After: app suite 5743 / 5748, the 5
  left being a1.03's printed figures (re-measure at the merge) and the art tests
  (wave 3 art pending). `c1-legacy-typography.ts` now computes every
  Postgres-only reused row (dry run: 91 rows, 35 would change).

## Wave plan

As `C1-BUILD-PLAN.md`: wave 1 c1.20 c1.21 c1.01 c1.24 → GATE C1-1 → waves 2-3 →
GATE C1-2 → waves 4-6 → GATE C1-3. Each gate: preview on the Pixel (the dev
build has no packs layer, so the preview fixture must hold the whole band; memory
ealch-dev-build-no-packs-layer), import, merge, both suites, `--packs --dry-run`,
publish with Paul's OK.

## How one wave runs (unchanged from B2)

1. Set up themes in Postgres (probe, home, sub-theme, block), record the ledger.
   Set themes BEFORE a dry run, never during one.
2. One fresh agent per lesson, background, touching only its own four files in
   `data/c1/`; add its slug to `C1_SLUGS` in trail order at the end.
3. Validate each lesson (app checks `--band c1 --only <slug>` to 0, the three
   house tests with the lesson's row added, `pnpm tsx scripts/b1-import.ts --band
   c1` dry run), update the status table, commit the wave with
   `git commit --only -- <paths>`.
4. Pre-review: one fresh reviewer per lesson (French, keys, glosses, facts,
   scope against its B1/B2 lessons), fixes applied.
5. Paul draws the art from each `-image-prompts.md` in ChatGPT; register each
   image once by script (playbook §6.19); add lessons to ART_PENDING until then.
6. Gate: preview on the Pixel, Paul reviews. Import: trial merge → `--apply`
   (Paul's OK) → merge → suites → `--packs --dry-run` → publish (Paul's OK).

## What is different at C1

- **French at C1, English still authored** on every learner string (the EN pill
  hides it). Learner is tu. Texts unsimplified: reading 300 to 500 words,
  listening 2 to 4 minutes (exam-format items: two texts of about 300-360 words;
  recordings of 90-120 s heard once).
- **Workshops weigh the task:** 250 to 400 words; the rubric adds precision and
  nuance of vocabulary and argument structure to the B2 criteria. Exam-target
  lessons mirror the exam's item types.
- **Recognition stays recognition** (c1.02, c1.03).
- **Cite by trail position** (« la leçon 24 du B2 »), never a raw id; positions
  read from the lesson file header, never from slug order.
- **Reuse published rows by id, Postgres first.** The test corpus is a cut: 884
  of the 913 published c1 rows are absent from it. Read a legacy c1 row before
  reusing it (typography and one wrong mood, see the research plan).
- **Tag** is « C1 · LEÇON NN »; unit ids `c1.NN`, lesson ids `c1.NN.l1`.

## Wave 1 author briefs (not dispatched)

Each brief is the whole prompt for one fresh author agent. Common block first;
each agent gets the common block plus its own lesson block.

### Common block (every C1 author)

> You are authoring ONE C1 lesson of Ealch, a French-learning app (repo
> `c:/Users/harki/Downloads/gitbuild appealch/Ealchapp`; app `ealch-v2/`, admin
> `ealch-admin/`). Write ONLY your four files in `ealch-admin/scripts/data/c1/`:
> `<slug>-corpus.ts`, `<slug>-terms.ts`, `<slug>-lesson.ts`,
> `<slug>-image-prompts.md`. Touch nothing else: no git, no seed.json, no
> Postgres writes, no `find /`. The session scratchpad is shared by parallel
> authors: put your scratch scripts in a `<slug>/` subfolder (wave 1 authors
> overwrote each other's probe files).
>
> Read first: `ealch-admin/scripts/data/c1/C1-BUILD-LOG.md` (decisions, "What is
> different at C1"), your lesson's section in `C1-RESEARCH-PLAN.md` (scope,
> builds-on, what is NEW, inventory, sources, exam, risks), then
> `../b1/B1-BUILD-PLAYBOOK.md` (whole; §6 house rules and the §10 checklist are
> binding) and `../b1/B1-WORKSHOP-AND-VOCAB-SHAPES.md` §1 (the workshop shape).
> Your structural model is a published B2 workshop: copy its file layout, import
> paths (`../../../../ealch-v2/src/content/schema.ts`), exports and helpers, then
> write new content.
>
> Shape: workshop, 70 to 90 missions in 11 or 12 acts, one anchor text per act
> from act 2, one quiz of 11 or 12 rounds × 8 with one drill per round, 4 to 5
> sheets all reached by `sheetId`, one graded `task` (250 to 400 words, or the
> audio spec in your block), art prompt per act. `version: 1`. Tag
> « C1 · LEÇON NN ».
>
> Art (playbook §8): `<slug>-image-prompts.md` copies the header of your
> structural model's prompt file, one prompt per act, each standing alone with
> the house STYLE block repeated verbatim (the flat editorial vector block in
> `../b2/lecture-critique-image-prompts.md`), one visual metaphor for the
> lesson, no lettering, no close-up faces. Save folder
> `ealch-v2/assets/lessons/<slug>/`, files `act01.jpg` … `actNN.jpg`, landscape
> 4:3. Paul draws them in ChatGPT; never register them in `lessonImages.ts`
> yourself, and never use Fal.
>
> C1 language: unsimplified French; English authored on every learner string
> (`en` field or a trailing « EN: », never on an answer); learner is tu. Act 1
> recaps the B1/B2 lessons your section names, by trail position in words, and
> reuses their published rows by id; from act 2 on, only the NEW list. Never
> re-teach.
>
> Ids: `fr.c1.<theme>.<n>` with `n` inside your claimed block only (ledger
> below). Reuse published rows by id (Postgres is the truth: probe read-only
> inside `BEGIN TRANSACTION READ ONLY … COMMIT`, never a plain `SET`; the local
> seed is a cut and misses most c1 rows). Read any legacy c1 row before reusing
> it.
>
> Copy rules: no em dash, no U+203F tie, never honest / honnête / honnêtement,
> no spaced ? or ! in a bubble, invented people, outlets and companies only, no
> living politician, literary or press extracts only if public domain and
> verified word for word (Wikisource / Gutenberg), otherwise « texte original
> écrit pour la leçon ». List every factual claim and every quotation in the
> corpus header §A.7 for the fact check.
>
> Validate after EVERY act (playbook §9.3): typecheck your files, then
> `validateLesson` / `validateDensity` / `validateItem` on `lessonWithoutTask()`
> to 0. At the end: `npx tsx scratch/_app-checks-b1.mts --band c1 --only <slug>`
> TOTAL 0 (from `ealch-admin/`). Report: mission / act / quiz / sheet counts,
> rows authored and reused, validator output verbatim, open questions for Paul.

### c1.20 « Lire entre les lignes » (slug `lire-entre-les-lignes`, workshop, skill CE)

> **Home:** `strategies-de-comprehension`, block **1800-1999**, sub-theme « lire
> entre les lignes ». Unit `c1.20`, lesson `c1.20.l1`. Structural model:
> `../b2/lecture-critique-*`.
> **Builds on:** « la leçon 24 du B2 » (read its four files; it owns thesis vs
> topic, the unstated assumption, distance markers, tone and irony, soft words
> and omissions, fact / opinion / interpretation) and « la leçon 37 du B1 ». Act
> 1 recaps them in one card and moves on.
> **Teach (NEW):** concession then restriction as the backbone of essay prose;
> the exact scope of a conclusion (reject the stronger and the weaker
> paraphrase); the real vs the stated object of a disagreement; what a
> paragraph, an analogy or a final sentence is DOING; the author's stance toward
> a source; grammatical presupposition (definite article, encore, cesser de,
> factive verbs, the presupposing question); irony at C1 (antiphrase, echo, irony
> as a topic) always with a textual cue; the hidden agent (nominalisation,
> passive, on).
> **Exam target CE@c1:** your quiz and task mirror the six published tasks
> (`exam.tcf_canada.blanc-01..05.ce_mcq.005`, `exam.tef_canada.blanc-01.ce_mcq.006`;
> read them with `seedPlusPacks().examTasks`): two essays of about 300-360 words
> with 4 + 3 items, or one article with 8 items; distractors are overstatement,
> topic-for-thesis, true-but-secondary, the opposite camp. Imitate, never copy
> their texts. `Lesson.skill: 'CE'`. Task: a written answer of 250 to 400 words
> analysing an original opinion piece printed in the brief (thesis, what it
> concedes and restricts, one presupposition, one omission, the author's stance),
> graded on a CE-shaped rubric.
> **Traps:** irony that needs French political culture; ambiguous scope keys
> (each key must be the only defensible answer).

### c1.21 « Débats et entretiens » (slug `debats-entretiens`, workshop, skill CO)

> **Home:** `discours-dexamen`, block **1400-1599**, sub-theme « suivre un débat
> à l'oral ». Unit `c1.21`, lesson `c1.21.l1`. Structural model:
> `../b2/ecoute-vitesse-reelle-*`.
> **Builds on:** « la leçon 25 du B2 » (it owns the announced plan, positions in
> a debate, interruptions and turn-taking, concession and irony by ear, the
> polite no, recovering a missed chunk) and « la leçon 38 du B1 ».
> **Teach (NEW):** three voices with a moderator; the agreement before the
> disagreement; disagreement about a name or a definition (« le mot me gêne »);
> C1 concession formulas by ear (« J'accorde la distinction… », « Je vous suis
> sur…, je ne vous suis pas sur… »); a speaker narrowing a claim (« je soutiens
> quelque chose de plus étroit »); answering an objection; analogy and allusion
> decodable from context; one-play listening with a 28-30 s read window.
> Turn-taking and fillers stay comprehension aids: no C1 task tests overlap.
> **Exam target CO@c1:** mirror the six tasks (`exam.tcf_canada.blanc-01..05.co_mcq.005`:
> three recordings of 90-116 s, heard once, 3 + 2 + 2 items;
> `exam.tef_canada.blanc-01.co_mcq.006`: a 123 s reportage, one main-idea item).
> `Lesson.skill: 'CO'`. Listening sections `hideLines: true`, transcript after
> the questions; include once-only practice. Task: `responseSpec.kind: 'text'`,
> 250 to 400 words: a written account of a debate printed in the brief (who
> agrees on what, the real disagreement, how one objection is answered), since
> there is no live speech grading.
> **Traps:** TTS cannot overlap voices: where an act needs an interruption,
> write it as successive turns and add a studio brief naming the line; invented
> stations, hosts and guests only.

### c1.01 « Faire le point sur sa grammaire » (slug `bilan-grammatical-c1`, workshop, diagnostic, skill PE)

> **Home:** `discours-dexamen`, block **1000-1199**, sub-theme « faire le point
> sur sa grammaire ». Unit `c1.01`, lesson `c1.01.l1`. Structural model:
> `../b2/style-academique-*`.
> **Builds on:** all of B2 (summary in your research section: built lessons
> 1-7 and 10-21, recognition-only 8 and 9, recognition inside built lessons) and
> the B1 recognition-only forms. Reuse B2 rows by id heavily; new rows only for
> diagnostic prompts and the C1 frame.
> **Teach:** nothing new. The lesson is a guided audit: each act takes one
> family (timeline and moods; compression; logical relations; register), shows
> a C1-length text using it, asks the learner to sort structures into must
> produce / must recognise / my weak spot, and every check's `why` routes the
> gap back to its lesson by trail position in words. It is also the C1 voice
> set-piece: the act 1 scene says what C1 is for (precision, nuance, implicit
> meaning).
> **Exam:** none. Task: 250 to 400 words, a self-diagnosis written as a short
> learning plan (three strengths, three weak structures with the lesson that
> fixes each, one example sentence per structure), graded on accuracy and
> precision.
> **Traps:** re-teaching creep (one recap card per family at most); cite only
> published positions (B2 1-34); never cite a C1 lesson that does not exist yet.

### c1.24 « Analyser la presse » (slug `analyse-presse`, workshop, skill CE)

> **Home:** `strategies-de-comprehension`, block **2000-2199**, sub-theme
> « analyser la presse ». Unit `c1.24`, lesson `c1.24.l1`. Structural model:
> `../b2/lecture-critique-*`.
> **Builds on:** « la leçon 34 du B1 » (media word families, headline grammar,
> selon / d'après, the hearsay conditional, checking a source; its rows sit in
> theme `journalisme`), « la leçon 24 du B2 » (critical reading), « la leçon 10
> du B2 » and « la leçon 18 du B1 » (hiding the agent). Shares c1.20's reading
> method: cite « la leçon 20 du C1 » ONLY if c1.20 publishes in the same wave
> (it does in wave 1).
> **Teach (NEW):** the genres and their signals (dépêche, article, reportage,
> éditorial unsigned = the paper's voice, chronique and billet with a « je »,
> tribune and lettre ouverte); pyramide inversée; titre, surtitre, chapô,
> attaque, chute; framing by the choice and order of sources, figures and
> captions; loaded pairs and connotation; two treatments of one event compared.
> **Exam:** serves CE@c1 (task 1 is an opinion article). Task: 250 to 400 words
> comparing two original treatments of one event printed in the brief (genre,
> framing, two loaded word choices, what each leaves out).
> **Traps:** invented outlets and bylines only (never analyse a real paper's
> framing); low-heat topics (urban planning, a festival, a school calendar), and
> list them in the header for Paul; France and Québec press differences in one
> sentence, no caricature.

## Wave 2 author briefs (dispatched 2026-10-01)

Wave 2 setup (Paul's OK, 2026-10-01, `scratch/_c1w2_themes.mts`): litterature,
pronoms-essentiels and langue-soignee widened to c1; sub-themes « le passé
antérieur », « la concordance littéraire » (litterature), « les relatives
complexes » (pronoms-essentiels), « l'ellipse et la reprise » (langue-soignee);
blocks re-probed free at every level. Each author gets the wave 1 common block
with these changes: the SHAPE is the structural model's (a grammar or
recognition mission journey, not a workshop): copy its act count (11-12), its
mission range (80-90), its quiz (11-12 × 8), its sheets (4-5) and whether and
how it ends on a task; recognition lessons never ask for production. Gate C1-1
kept the C1 voice. Scratch files go in a `<slug>/` subfolder of the session
scratchpad; the report comes back as text.

- **c1.02 « Le passé antérieur »** (slug `passe-anterieur`, recognition):
  `litterature` 1600-1799, unit c1.02. Model `../b2/passe-simple-*`. Builds on
  « la leçon 8 du B2 » (one card and one trap on the passé antérieur, act 7),
  « la leçon 18 du B2 » (« Dès qu'il eut fini »), « la leçon 9 du B2 » act 5
  (eut / eût), « la leçon 1 du B2 ». NEW: the full paradigm with être; « À peine
  eut-il… que »; main-clause use with bientôt / en un instant; passé antérieur vs
  plus-que-parfait on one page; the surcomposé as its spoken counterpart (regional
  and marked: recognise, never prescribe); the effect on pace. Owns the passé
  antérieur only (concordance is c1.03). Public-domain pages verified word for
  word (Mérimée, Maupassant, Flaubert « Trois contes », Hémon « Maria
  Chapdelaine »). Risk: padding (thin ground after B2 8, 9, 18).
- **c1.03 « La concordance littéraire »** (slug `concordance-litteraire`,
  recognition): `litterature` 1800-1999, unit c1.03. Model
  `../b2/subjonctif-litteraire-*`. Builds on « la leçon 9 du B2 » (act 7 owns the
  core concordance map, act 9 fût-ce / dût-il), lessons 5, 6 and 8 of B2; reuse
  `fr.b2.litterature.1326`, `.1327`, `.1345`. NEW (Paul's refocus): simultaneity
  vs anteriority in full; a conditionnel main clause (« je voudrais qu'il
  vînt »); concessive and hypothetical inversion (« eût-il su », « fût-il
  roi »); deliberate non-concordance in modern prose and press; the register
  effect (solemnity, irony, pastiche). Heaviest B2 overlap of the band: one recap
  card, then only the NEW list; modern strictness is contested, present both and
  cite Grevisse. PD candidates: Corneille « Horace » III 6, La Fayette, Stendhal,
  Balzac « Eugénie Grandet », Chateaubriand.
- **c1.04 « Les relatives complexes »** (slug `relatives-complexes`, grammar):
  `pronoms-essentiels` 2000-2199, unit c1.04. Model
  `../b2/subjonctif-indicatif-*`. Builds on « les leçons 11, 12 et 13 du B1 »
  (qui/que, dont and où, lequel/auquel/duquel, ce qui/ce que/ce dont) and « la
  leçon 6 du B2 » acts 5-6. NEW: partitive dont (« dont deux enfants »); ce à
  quoi, sans quoi, de quoi + infinitive; relative + infinitive (« un endroit où
  dormir »); lequel as subject to disambiguate; attachment ambiguity in long noun
  groups; nested relatives by register; explicative vs déterminative as meaning;
  où vs dans lequel with abstract antecedents. 54 published c1 rows already
  carry advanced relatives (read before reusing). Traps: « que je crois qui » is
  colloquial (recognise, label); « c'est de cela dont » per the Académie / BDL;
  b1.13 owns duquel after a compound preposition. Indirect CE/CO link.
- **c1.05 « L'ellipse et la reprise »** (slug `ellipse-reprise`, grammar):
  `langue-soignee` 2000-2199, unit c1.05. Model `../b2/pronoms-insistance-*`.
  Builds on « la leçon 11 du B2 » act 3, « la leçon 10 du B2 », « la leçon 37 du
  B1 » act 8 (ce dernier, le premier / le second), « la leçon 33 de l'A2 ». NEW:
  neuter le (« il l'est », « comme je l'ai dit »); faire as pro-verb; verb
  ellipsis (« Pierre lit Proust ; Marie, Zola », « plus qu'on ne le pense »);
  celui de / celle que; ledit, susdit, le cas échéant; interrogative ellipsis;
  repairing an ambiguous anaphor; reprise by a hypernym. Name the difference
  from b2.30's narrative « ellipse »; « fatiguée, je le suis » (invariable le)
  is the learner trap; ledit is administrative, comic in talk. Include one quiz
  round in CE format (« à quoi renvoie… »).

## Wave 3 author briefs (dispatched 2026-10-01)

Wave 3 setup (Paul's OK, 2026-10-01, `scratch/_c1w3_themes.mts`):
connecteurs-logiques widened a2-b2 → a2-c1; sub-themes « nuancer à l'oral »
(nuances-et-registres), « reformuler et conclure » (connecteurs-logiques),
« persuader » (rhetorique), « l'exposé et le jury » (discours-dexamen); blocks
re-probed free at every level. **Decisions (Paul, 2026-10-01):** 17. c1.07's
contested markers (du coup, au final, suite à, en termes de, voire même, par
contre, au niveau de) are « recognise, don't write », b2.16's pattern, each with
the Académie and OQLF verdicts quoted (they differ). 18. c1.08 uses original
texts only (no historical oratory); Aristotle and Fontanier cited for concepts.
19. c1.09's task is a spoken exposé (responseSpec audio, about 180-300 s, as
b2.26) from a printed dossier, with a scenario rehearsing the jury's questions.
All four are WORKSHOPS: the wave 1 common block applies as written (70-90
missions, 11-12 acts, one anchor text per act, quiz 11-12 × 8, 4-5 sheets, a
graded task), plus the wave 2 notes (scratch subfolder, report as text,
« The subject is » line per prompt, unpadded tag).

20. (2026-10-02, Paul) The two published legacy rows are fixed in the waves 2-3
import: `scripts/c1-legacy-fixes.ts` (dry by default, `--apply`, guarded on the
reviewed text). .160 « se fasse » becomes « se fera »; .1590 « le moment auquel »
becomes « le moment où » (the B1 où/dont lesson's rule), IPA and respell follow.
Neither row has recorded audio.
21. (2026-10-02, Paul) c1.07 keeps its 7 recognition-marker rows at level « sons ».
22. (2026-10-02, Paul) Task lengths stay as authored: c1.05 250-320 words, c1.06
120-240 s (lesson tasks shorter than the workshop and exam tasks, as in B2).

**Waves 4-6 decisions (Paul, 2026-10-06), after a code and data check:** no PE
or PO exam task exists above B2 (65 open tasks, all a2-b2); `EXAM_FORMATS` leaves
out 'dalf' on purpose (Canada-first); a task carries ONE level, so relabelling a
B2 task to c1 would take it from PE@b2/PO@b2. Already done, nothing to decide:
litterature, pronoms-essentiels, langue-soignee and connecteurs-logiques reach c1
(widened for waves 2-3); c1.04 shipped in pronoms-essentiels 2000-2199. Every
proposed block below is empty in Postgres.

23. C1 writing and speaking exams are NEW TEF Canada / TCF Canada tasks authored
at level c1 (no schema, enum or code change). When they publish, add
`'PE@c1': 'c1.10.l1'` and `'PO@c1': 'c1.09.l1'` to `EXAM_PREP_TARGETS`. No DALF
for now (a later project if learners ask).
24. c1.10's graded task is ONE essay, 250-400 words, from a short dossier inlined
in the brief; the synthèse is practised ungraded in an earlier act.
25. c1.11 home: `francais-professionnel-avance` 1200-1399.
26. c1.22 home: `langue-soignee` 2200-2399 (beside b2.33; no widening).
27. `faux-amis` widens to sons-c1 (Postgres write with the c1.18 import, Paul's OK
then); it also legalises the 322 a1 rows.
28. c1.13 home: `culture-profonde` 1000-1199; no new history theme.

**DALF C1 added (Paul, 2026-10-06), alongside decision 23 (TEF/TCF C1 tasks stay).**
Format facts (Ministry BO 2005 table, an FEI-format sample, the FEI PO grid, FEI's
2021 kit; FEI pages block bots): CO about 40 min (one long document heard twice,
short items once, 10 min audio max), CE 50 min (one 1500-2000 word text), PE 2 h 30
(synthèse about 220 words, 200-240, from about 1000 words of documents, 13 pts;
essai about 250 words, 12 pts), PO 1 h prep + 30 min (exposé 8-10 min from a dossier,
then 15-20 min entretien). 4 x 25, pass 50/100, 5/25 floor. No domain choice since
March 2020 (do not copy the old two-domain split from pre-2020 papers).

**VERIFIED against the current FEI demo paper (2026-10-06).** FEI's own site sits
behind an Anubis anti-bot check (not bypassed); the same FEI files are hosted openly
by Fondation Esprit Francophonie, the Swiss partner linked from delfdalf.ch:
fondation-esprit-francophonie.ch/fileadmin/files/Ressources/Ressources_DELF/Exemples_d_Examen/DALF_C1/
(dalf-c1_sujet-demo-candidat-coll.pdf, -candidat-indiv, -correcteur, -examinateur,
C1_Grille_PE.pdf, C1_Grille_PO.pdf, dalf_c1_demo.mp3). FEI copyright: read for
format facts only, never copied into the app or the repo.
- CO 25 pts. Part 1 (18 pts): one recording of about 6 min heard twice (3 min to read
  the questions, listen, 3 min to answer, listen again, 5 min to finish); 10
  questions, 1 to 2 pts each, a mix of 3-option MCQ and short written answers.
  Part 2 (7 pts): short radio extracts heard ONCE, 50 s to read and 50 s to answer
  each; the demo has 2 extracts with 3 + 4 MCQ, 1 pt each.
- CE 25 pts: one text of 1500-2000 words, 12 questions (1 to 3 pts): MCQ, short
  answers « avec vos propres mots », and Vrai/Faux WITH a copied justifying quote
  (2 pts only if both the choice and the quote are right, else 0).
- Marking rule (correcteur): spelling and syntax ignored in CO/CE unless they wreck
  the meaning; the marker « acceptera les réponses données ci-dessous et toute
  reformulation ou réponse cohérente avec la question posée » (this supports decision
  32: key words first, then the AI grader for rewordings). A V/F quote can be checked
  mechanically against the text.
- PE 25 pts, 2 h 30. Synthèse 13 pts, 200-240 words, own words, one new text (not
  two summaries end to end), no personal comment, key words may be reused but not
  whole sentences; word = anything between two spaces (« c’est-à-dire » = 1); -1 pt
  per 20 words outside the range. Essai argumenté 12 pts, « 250 mots minimum », a
  real-world genre (the demo: an open letter to the minister) built on the dossier.
- PO 25 pts: draw two subjects, pick one, 60 min preparation, about 30 min in the
  room; exposé 8-10 min (introduction, conclusion, ordered reflection) on a theme
  from the documents, then a debate with the jury 15-20 min, run straight on. Grid:
  exposé, entretien, lexique, morphosyntaxe, phonologie, each judged « en dessous /
  C1 / C1+ ».

29. Five DALF C1 papers, like DELF B2 (paper 1 free in core, 2-5 in the exam pack;
the packs layer needs no per-format change).
30. Dossier documents render as separate document cards: text-only `parts` allowed
on open tasks (relax schema.ts open-task-parts rule), drawn with the `Document`
component above the writing box or recorder; the grader's stimulus concatenates
prompt + parts. No DB change (`parts` is already a column).
31. CO/CE include short typed answers (new optional short-answer shape on QcmItem,
a text input in the runner, a scoring branch).
32. Typed answers are marked by key words first, then the AI grader only when the
key words are missing (fair to rewording, cheap).
33. The PO entretien reuses `po_debate` (examiner pushes back on the exposé's
thesis); the exposé is `po_monologue` with `prepS` 3600. No new task type.
34. DALF work runs ALONGSIDE waves 4-6; v87 ships the lessons and DALF together.
35. Mandatory scoring fix first: `DELF_BAND_MARK` (delf.logic.ts) is anchored to
b2, so B2 work would pass a C1 paper. Make the band-to-mark table relative to the
task's target level, with a test that b2 work fails a C1 paper. The DB change is
one drizzle migration `ALTER TYPE exam_format ADD VALUE 'dalf_c1'` (pattern of
0021_po_debate.sql; Paul's OK before it runs). Name used nominatively with the
existing not-affiliated disclaimer.

- **DALF step 1 done (2026-10-06): app support, all tested, nothing deployed.**
  879e6d3 band marks relative to the level asked (B2 work fails a C1 paper; DELF B2
  marks unchanged), `dalf_c1` in EXAM_FORMATS / pgEnum / admin meta, targetBandFor,
  EXAM_FORMAT_FACTS (CO 17 q 40 min, CE 12 q 50 min, PE 2 tasks 2 h 30, PO 2 tasks
  30 min), drizzle 0023 written; 6f23721 dossier documents on open tasks
  (ExamDossier in the writing, exposé and entretien screens; grader stimulus =
  prompt + documents); acd91d2 typed answers (`kind` short / tfj, key words then one
  AI batch per task via grade-exam mode 'short', unchecked answers score 0 and show
  on the report row); 5323644 audio casting / render / promote / marking sheet.
  App 5770/5770, admin 1060 + 1 skipped, tsc clean.
- **Server side done with Paul's OK (2026-10-06).** Migration 0023 applied (only
  pending one; enum now delf_b2, tef_canada, tcf_canada, dalf_c1). grade-exam
  deployed as v8 through the Supabase connector (no CLI on this machine; v7 matched
  the repo before acd91d2, so v8 adds only the 'short' mode). Smoke test on v8: bad
  short batch 400 with its own message; essay without rubric still refused; a live
  batch accepted a reworded right answer and rejected a wrong one (nvidia). The app
  side ships with the next build/OTA; device check of the new screens at gate C1-3
  once a DALF paper exists.

- **Wave 3 art registered** (36dc575): 48 openers, files = require = alt, ART_PENDING
  empty, house tests 342/342, app suite 5748/5748. Gate C1-2 preview on the Pixel 6
  (dev build): 12 lessons, 142 acts, 2195 items, 245 reused rows from seed+packs and
  68 from Postgres, 0 missing.
- **Gate C1-2 passed (Paul, no changes). Waves 2-3 LIVE at v86 (2026-10-02).**
  Postgres: typography 35 rows, .160/.1590 fixed, 1280 rows + 16 unit/lesson rows
  (c46ec45). Merge additive. Publish v86: dry run 0 pack-replay deadlocks; c1 pack
  4.51 MiB, exam pack kept at v85; a1.03 figures match after publish; app 5748/5748,
  admin 1060 + 1 skipped. Pixel 9 (preview build cd5a3e0d reinstalled over a dev build another session had installed): all 12 C1 unit headings on the C1 tab, locked Première for a guest. ../ealch-ota worktree removed.

- **c1.06 « Nuancer à l'oral »** (slug `nuancer-oral`): `nuances-et-registres`
  1000-1199, unit c1.06. Model `../b2/reunions-negociation-*`. Builds on « la
  leçon 9 du B1 » (request ladder), « la leçon 8 du B1 », « les leçons 25 et 26
  du B1 », « la leçon 20 du B2 », « la leçon 22 du B2 » acts 5-6, « la leçon 24
  du B2 » act 5, « la leçon 26 du B2 » act 5 (Paul's refocus: politeness and
  distance in SPEECH, past b2.20 and b2.22). Already taught (never re-teach):
  il semblerait que, il se pourrait que, vraisemblablement, tout porte à croire,
  si je peux me permettre, je ne saurais, prétendument, sauf erreur. NEW: me
  semble-t-il, si je ne m'abuse, en quelque sorte, il y a fort à parier, il est
  permis de penser, je vous saurais gré de, un tant soit peu, à proprement
  parler, loin de moi l'idée de, sans vouloir + infinitif, avec tout le
  respect…, être amené à, rien n'indique que; epistemic devoir; litote and
  understatement IN SPEECH (c1.17 owns connotation, c1.19 litote as a figure);
  the hedged criticism. Traps: hedge stacking (teach dosage); « sans vouloir te
  vexer » often introduces the opposite; Québec vs France politeness tagged and
  fact-checked; euphemisms kept generic. Task: a short spoken or written reply
  per the model's task shape, graded on dosage and register.
- **c1.07 « Reformuler et conclure »** (slug `reformuler-conclure`):
  `connecteurs-logiques` 2600-2799, unit c1.07. Model `../b2/style-academique-*`.
  Builds on « les leçons 30, 31 et 32 du B1 », « la leçon 15 du B2 » (cause,
  conséquence, du coup's register ladder), « la leçon 16 du B2 » (concession,
  malgré que contested), « la leçon 22 du B2 » acts 3-4 and 7, « la leçon 26 du
  B2 » acts 4 and 10. NEW (Paul's refocus): reframing (plus exactement, ou
  plutôt, j'entends par là, en l'occurrence, à vrai dire, pour mieux dire) and
  closure (somme toute, tout bien considéré, en guise de conclusion, en tout état
  de cause); also qui plus est, au demeurant, à cet égard, dès lors (temporal vs
  causal), du reste, d'ailleurs, a fortiori, à plus forte raison, quitte à, sans
  compter que, loin s'en faut. Decision 17 for the contested markers. Traps:
  connector stacking; ownership with c1.05 (reprise, live in this band) and the
  future c1.10 (transitions inside an essay plan: do not teach plan transitions).
  Task: 250-400 words, a text reframed and closed with markers chosen by
  register.
- **c1.08 « Persuader »** (slug `persuader`): `rhetorique` 1000-1199, unit
  c1.08. Model `../b2/argumentation-*`. Builds on « la leçon 23 du B2 » (thesis,
  concession, rebuttal, plans, six fallacies), « la leçon 24 du B2 », « la leçon
  26 du B2 » act 9 (objection ladder), « la leçon 16 du B2 ». NEW: ethos / logos
  / pathos named; prétérition, anaphore, gradation as persuasive figures; analogy
  as an argument; framing and loaded wording in argument (c1.24, live, owns press
  framing: cite « la leçon 24 du C1 »); « on m'objectera que… »; authority vs
  expertise; producing a rhetorical question. Decision 18: original texts only,
  no living politician, no historical speech. Teach judge-first (is this move
  fair?), never a manipulation manual. c1.19 will own literary effect. Reuse the
  published rhetorique c1 rows (concession formulas, rhetorical questions) after
  reading them. Task: 250-400 words, a persuasive piece that names its own
  moves and answers one objection fairly.
- **c1.09 « L'exposé et le jury »** (slug `expose-jury`): `discours-dexamen`
  1200-1399, unit c1.09. Model `../b2/reunions-negociation-*` (its spoken task
  shape). Builds on « la leçon 26 du B2 » (chairing, floor, reformulating,
  disagreeing, closing), « la leçon 23 du B2 » (plans, problématique), « la
  leçon 25 du B2 », « la leçon 22 du B2 »; « la leçon 21 du C1 » (live) owns
  debate LISTENING. NEW: the exposé genre; synthesis aloud from documents; the
  spoken problématique; the formal floor toward a jury (vous to the jury, tu to
  the learner); buying time under questioning; conceding in public without
  losing the thesis; closing a Q&A. Reuse the published discours-dexamen c1 rows
  (openings, plan, examples, closings; read `.145` and `.017` first). Decision
  19: task responseSpec audio about 180-300 s, an exposé from a short printed
  invented dossier on a generic question, plus a scenario of scripted jury
  turns. Describe DALF C1 PO only with verified numbers (France Éducation
  international) or call it the app's own format. c1.23 will own meetings.

## Wave 4 (c1.10-c1.13), set up and dispatched 2026-10-06

Setup (Paul's OK, `scratch/_c1w4_themes.mts --apply`): blocks re-probed free at
every level; sub-themes « la dissertation et la synthèse » (discours-dexamen),
« le rapport et le compte rendu » (francais-professionnel-avance), « les concepts
et leurs distinctions » (philosophie), « les références historiques »
(culture-profonde). No widening. Each author gets the wave 1 common block plus the
wave 2 notes (shape = the structural model's; scratch in a `<slug>/` subfolder;
report as text; « The subject is » line per prompt; unpadded tag).

- **c1.10 « Dissertation et synthèse »** (slug `dissertation-synthese`, workshop,
  skill PE): `discours-dexamen` 1600-1799, unit c1.10. Model `../b2/argumentation-*`
  (b2.23). Builds on « la leçon 22 du B2 » and « la leçon 23 du B2 » (problématique
  as « la question que ton texte va trancher », dialectical and thematic plans,
  transitions): one recap card, never re-taught. NEW: the problématique as a
  tension or paradox; defining the sujet's terms; analytical and comparative
  plans; choosing a plan FROM the problématique; transitions-bilan; conclusion with
  ouverture; the synthèse of documents (one new text, own words, no opinion, no
  added idea, key words reusable but not whole sentences, 200-240 words, practised
  UNGRADED in an act). Decision 24: the graded task is ONE essai argumenté of
  250-400 words built on a short dossier (2-3 original documents, about 400-600
  words in all, inlined in `brief`), in a real genre (lettre ouverte, article,
  contribution). Rubric adds lexical precision and argument structure to b2.23's
  four. Do not name the DALF in learner text. Invented sources only; any figure
  marked invented.
- **c1.11 « Rapports et comptes rendus »** (slug `rapports-comptes-rendus`,
  workshop, skill PE): `francais-professionnel-avance` 1200-1399, unit c1.11.
  Model `../b2/style-academique-*` (b2.22). Builds on « la leçon 39 du B1 », « la
  leçon 22 du B2 », « la leçon 26 du B2 », « la leçon 10 du B2 » (minutes condense
  into nouns). NEW: report architecture (objet, contexte, constat, analyse,
  recommandations, annexes); compte rendu vs procès-verbal (fact-check France vs
  Québec, OQLF « Le français au bureau »); case analysis (problème, causes,
  options, critères, choix); recommendation register (nous préconisons, il
  conviendrait de, il est recommandé que + subjonctif); executive summary
  (synthèse en tête). Traps: les minutes, item, adresser, implémenter, deadline
  (b2.33 owns supporter / adresser / réaliser: cite it). Task: a short report or
  compte rendu, 250-400 words, from facts given in the brief.
- **c1.12 « Le vocabulaire des idées »** (slug `vocabulaire-idees`, vocabulary
  lesson, skill CE): `philosophie` 1000-1199, unit c1.12. Model
  `../b2/langage-juridique-*` (b2.27) and the vocab shape in
  B1-WORKSHOP-AND-VOCAB-SHAPES §2. Builds on « la leçon 22 du B2 », « la leçon 23 du
  B2 », « la leçon 10 du B2 » (-ité, -isme). About 320 b2 `philosophie` bank nouns
  were never taught: reuse them as known, teach collocation and contrast. OWNS the
  epistemic and logical pairs (nécessité / contingence, cause / raison, croyance /
  connaissance, expliquer / justifier, prémisse / conclusion, sophisme, a priori /
  a posteriori, condition nécessaire / suffisante); c1.15 owns political and social
  headwords, c1.16 moral, aesthetic and memorial ones. No name-dropping; any short
  line from Descartes, Pascal, Montaigne or Rousseau verified word for word on
  Wikisource; check every attribution (the « Voltaire » free-speech line is Evelyn
  Beatrice Hall's). Read any b2 row carrying an attribution before reuse.
- **c1.13 « Les références qui comptent »** (slug `references-historiques`,
  workshop, skill CE): `culture-profonde` 1000-1199, unit c1.13 (decision 28). Model
  `../b2/francais-regional-*` (b2.31). Builds on « la leçon 31 du B2 », « la leçon 24
  du B2 » (stance), « la leçon 34 du B2 » (fixed expressions: « franchir le Rubicon »
  is b2.34's kind, « un Waterloo » is this lesson's). NEW: recognise and explain the
  references press and speech take for granted (les Lumières, 1789, la loi de 1905,
  l'appel du 18 juin, mai 68, la Révolution tranquille, la Négritude…) and what
  invoking one MEANS, without endorsing a reading. At least one act each for Québec,
  Belgium, Switzerland and francophone Africa. Contested history (Vichy, Algeria
  and its naming, colonisation, laïcité 1905 vs Loi 21, the Acadian deportation, the
  Conquest): literacy, named sources, no verdict. Apocrypha only as apocrypha
  (« L'État, c'est moi », « qu'ils mangent de la brioche »). Fact-check every date,
  number, quotation and law against an official source (Légifrance, Assemblée
  nationale, Encyclopédie canadienne, Dictionnaire historique de la Suisse,
  belgium.be, UNESCO); date-stamp anything "today". Task: a short written
  explanation of a reference used in an invented article, 250-400 words.

**DALF step 3 (same day, one agent):** `exam-blueprints/BLUEPRINT-dalf-c1.md`,
`STANDARD-dalf-c1.md`, `TOPICS-dalf-c1.md`, `VOICES-dalf-c1.md`, and
`scripts/dalf/paper-rules.ts` + test, modelled on the DELF B2 set and the verified
facts above.

**DALF step 3 done (3638d1a):** BLUEPRINT / STANDARD / TOPICS (64 topics, FEI demo
topics excluded) / VOICES for dalf_c1, `scripts/dalf/paper-rules.ts` (dalfPaperViolations,
26 tests). Agent notes: the paper prints 13 + 12 but both FEI grids total 12.5 (rubrics
follow the paper; the épreuve is 25 either way); the -1 per 20 words penalty is carried
by the rubric's length criterion, not deducted mechanically; extracts 60-120 s, long
document 360-480 s so the 10-minute audio cap holds; c1 speech speed 0.98 borrowed
from TCF, to measure on blanc-01.

36. (Paul, 2026-10-06) The essai repeats the synthèse dossier in its own parts so the
grader sees it (enforced by paper-rules).
37. Fixed question counts per paper: CO 10 + 7, CE 12 (the exam card stays true).
38. PO criteria split across exposé (13) and entretien (12), as the DELF oral.
39. Before blanc-01 is recorded, add a genre override to the DALF audio casting
(interview / vox pop / advert) in `scripts/lib/examAudio.ts`.

**DALF papers 1-2 dispatched** (two authors, `scripts/dalf-blanc01/`, `dalf-blanc02/`).

**Wave 4 drafted (4af46a1, fbe4a61) and DALF papers 1-2 drafted (46d4c4c), 2026-10-06.**
c1.10 77 missions / 171 rows; c1.11 77 / 158; c1.12 87 / 146; c1.13 81 / 170. Wave 4:
house tests 358/358, app checks TOTAL 0, import dry run 645 rows / 0 conflicts / 0
blockers. Four agents were cut off by the account session limit and resumed from disk.
DALF: both first drafts had an A-B-C key rotation inside one part and paper 1 was short
of STANDARD §6-7 lengths; fixed, and paper-rules now checks both (shared
`scripts/dalf/scatter.ts`). Pre-review dispatched: one reviewer per lesson and per paper.
Art folders created for the four wave 4 lessons.

**Wave 4 pre-reviewed (bbc452e, f87acec, d3a2dea, 5829c31, d956ef0); DALF papers 1-2
reviewed (a54c97f, d660b7b).** Blockers: c1.10 5, c1.11 7, c1.12 4, c1.13 4; blanc-01 7
keyword sets, blanc-02 3 + 6 keyword sets. App-wide: a typed answer with a negation is
never marked right on key words (shortAnswer.logic negates()). Exam papers keep a plain
space before ? ! ; : (every published paper does). c1.11 act 8 art: five at the table.
After review: app checks TOTAL 0, import dry run 645 / 0 conflicts / 0 blockers.
DALF papers 3-4 dispatched (blanc-03: DALF-03/13/15/34/43/52/56; blanc-04:
DALF-04/16/17/35/44/54/57).

40. (Paul, 2026-10-06) The AI checks EVERY typed answer (one batch per task, key words
sent as part of the item, the verdict decides). Key words cannot see a reversed meaning
without a negation word; the blanc-03/04 reviews still found plausible reversals passing.
A blank answer or a vrai/faux with the wrong choice is wrong outright and never sent.
Offline or grader down: the key words stand (matched = right, unsure = 0, reported). A
full DALF sitting spends at most ~7 grading turns (cap 12/day). App-only change; the
deployed grade-exam v8 already accepts the batch. DALF papers 3-4 reviewed (1b9cec8,
280e6bb). Scatter also rejects descending runs (67d7205).

41. (Paul, 2026-10-07) Decision 23 is delivered as a SIXTH TEF Canada paper and a SIXTH
TCF Canada paper (blanc-06), real format throughout; the top writing and speaking tasks
(TEF section B, TCF tâche 3) are pitched and tagged at c1, so PE@c1 / PO@c1 also route
from TEF/TCF. Exam tasks only reach learners inside a paper, so no loose tasks. TEF topic
bank: 67 free situations but short per code for one paper (CO-A 3, CO-B 2, CO-G 10, CE-A
1, CE-DE 1; `pnpm tsx scripts/topic-demand.ts 1`): the TEF author extends the bank first.
Waves 4-5 art registered (efb6f21); wave 5 reviewed (67f0cab, c9bb637).

42. (Paul, 2026-10-07) DALF oral: two subjects drawn, the candidate picks one.
`ExamSection.choiceGroups` (schema-validated partition of equal size); exam-section
shows a chooser before the clock starts and sits only the chosen exposé + entretien; the
choice survives a crash (draft `choice`). All five DALF papers declare their groups;
paper-rules requires them; report-reachable counts sittable tasks (2ffd668).

43. (Paul, 2026-10-07) TEF blanc-06 keeps its Canadian setting (dollars, winter, Québec-style
services); papers 2-5 unchanged.
44. The stricter TEF key shuffle (no monotone run, no repeating cycle) becomes the shared rule
for NEW TEF papers only; papers 1-5 keep their published keys.
45. Paul draws TEF blanc-06's four block A picture plates (`img/exam/tef/blanc-06/co-a-01..04.png`;
briefs in the imageAlt of `scripts/tef-blanc06/co.ts`).
46. TEF blanc-06 may use common Canadian everyday words (mitaines, souffleuse, chauffe-moteur,
camp de jour, canot, huard); STANDARD-common §2.1 carries the exception.

**Reviews done 2026-10-07:** wave 6 c1.18 (695e798), c1.19 (188f756), c1.22 (d7a20f5), c1.23
(b49e63e); DALF blanc-05 (cbe8125); TEF blanc-06 (8e7d788: Belcourt and Fréneuse were real
places). TCF blanc-06 review running.

**Status 2026-10-07.** All 24 C1 lessons drafted (wave 6: c1.18 bc8c5eb, c1.19 6a6e74c,
c1.22 830b364, c1.23 bc8c5eb). All five DALF papers drafted (blanc-05 7c1135f), 1-4
reviewed. Sixth TCF (ec0a785) and TEF (this commit's sibling) papers written. Still to
review: wave 6, DALF blanc-05, TEF/TCF blanc-06. Art pending: c1.18, c1.19, c1.22, c1.23;
TEF blanc-06 block A needs four picture plates.

## Wave 5 (c1.14-c1.17), set up and dispatched 2026-10-06

Setup (Paul's OK, `scratch/_c1w5_themes.mts --apply`): blocks free at every level;
sub-themes « l'analyse des œuvres » (culture-profonde), « les notions politiques et
sociales » (ethique), « les notions morales et esthétiques » (philosophie), « synonymes et
nuances » (nuances-et-registres). No widening. Each author gets the wave 1 common block,
the wave 2 notes, and these **review lessons from wave 4** (every wave 4 lesson had 4-7
blockers of these kinds): never teach correct French as an error (check the OQLF /
Académie / Larousse before marking anything wrong, and allow France and Québec usage);
no item with two defensible answers; a model answer never copies a whole source
sentence or adds a figure the source lacks; invented facts never contradict each other
(dates, headcounts, durations); every listening names its speakers in the text; explain a
nuance as a precision choice, not a rule, when both forms are correct French.

- **c1.14 « Analyser une œuvre »** (slug `analyser-oeuvre`, workshop, skill CE):
  `culture-profonde` 1200-1399, unit c1.14. Model `../b2/lire-litterature-*` (b2.30) and
  the reviewed C1 workshop `references-historiques-*`. Builds on « la leçon 30 du B2 »
  (narrator, focalisation, analepse, ellipse, tonalités, incipit and chute, commentary
  formulas): one recap card. NEW: from « j'ai aimé » to argued analysis; film language
  (plan, cadrage, champ / contrechamp, plan-séquence, montage, hors-champ, bande-son);
  visual arts (composition, touche, clair-obscur, perspective); music and stage in
  outline; the critique genre weighing strengths and weaknesses. Films and post-1950
  works are described in original prose, never quoted; no named living director in art
  prompts; canon balance with verified Québec, Belgian, Swiss and African references.
  Task: a short critique, 250-400 words, of a work described in the brief (invented).
- **c1.15 « Justice, liberté, identité, pouvoir »** (slug `notions-politiques`,
  vocabulary lesson, skill CE): `ethique` 1000-1199, unit c1.15. Model: the reviewed
  `vocabulaire-idees-*` (c1.12) and B1-WORKSHOP-AND-VOCAB-SHAPES §2. Builds on « la leçon
  27 du B2 » (legal-procedural sense) and « la leçon 33 du B1 ». Owns the political and
  social headwords: équité / égalité, libertés publiques, pouvoir / puissance / autorité,
  contre-pouvoir, légitimité / légalité, l'État de droit, impunité, identité in its abstract
  sense, multiculturalisme vs interculturalisme. Loaded terms (identité nationale,
  laïcité, communautarisme) presented as uses, not positions. Article numbers of the 1789
  Déclaration, the Charte canadienne (1982) and the Charte québécoise (1975) checked on
  Légifrance / Justice Canada / LégisQuébec. Reuse b2 `ethique` and `valeurs` bank rows
  after reading each (Postgres; check attributions).
- **c1.16 « Mémoire, vérité, beauté, éthique »** (slug `notions-morales`, vocabulary
  lesson, skill CE): `philosophie` 1200-1399, unit c1.16. Model: the reviewed
  `vocabulaire-idees-*` (c1.12). Builds on « les leçons 28 et 29 du B2 » (ethics in care
  and research). Owns the moral, aesthetic and memorial headwords: sincérité / véracité /
  vraisemblance; morale / éthique / déontologie; le beau / le sublime / le joli; mémoire /
  souvenir / commémoration / devoir de mémoire; infox (FranceTerme) vs fausse nouvelle
  (OQLF), both marked. Ricœur may be cited, never quoted; any Boileau line verified on
  Gallica / Wikisource. Memorial laws: literacy only, no verdict. Do not reuse c1.12's
  epistemic pairs (croyance / connaissance etc.): cite « la leçon 12 du C1 ».
- **c1.17 « Synonymes et nuances »** (slug `synonymes-nuances`, vocabulary lesson,
  skill CE): `nuances-et-registres` 1200-1399, unit c1.17. Model: the reviewed
  `vocabulaire-idees-*` (c1.12). Builds on « la leçon 25 du B1 » (three registers), « la
  leçon 26 du B1 », « la leçon 33 du B2 » act 12, « la leçon 32 du B2 », and c1.06
  « Nuancer à l'oral » (« la leçon 6 du C1 », which owns euphemism and litote in speech:
  cite, never re-teach). NEW: intensity scales (agacer < irriter < exaspérer), connotation
  (positive / neutral / pejorative), collocation (verify each in a dictionary or corpus,
  never by intuition), antonymy that matches the sense (« un temps doux » vs « un caractère
  doux »). Québec register labels (char, blonde, magasiner) anchored in Usito / OQLF.

## Wave 6 (c1.18, c1.19, c1.22, c1.23), set up and dispatched 2026-10-06

Setup (Paul's OK, `scratch/_c1w6_themes.mts --apply`): blocks free at every level;
faux-amis widened to sons-c1 (decision 27; its 322 a1 rows now legal); sub-themes « les
calques de haut niveau » (faux-amis), « les figures et leur effet » (rhetorique),
« traduire des idées » (langue-soignee), « le tact au travail »
(francais-professionnel-avance). Each author gets the wave 1 common block, the wave 2
notes and the wave 5 review lessons. Wave 5 drafted (13aa845, 3b99399): c1.14 79
missions / 156 rows, c1.15 87 / 150, c1.16 87 / 160, c1.17 87 / 150; reviews running.

- **c1.18 « Les faux amis savants »** (slug `faux-amis-savants`, vocabulary lesson,
  skill CE): `faux-amis` 1000-1199, unit c1.18. Model the reviewed `vocabulaire-idees-*`
  (c1.12). Builds on « la leçon 33 du B2 » (attendre, prétendre, formation, introduire,
  achever, rester, supporter, adresser, définitivement, réaliser: never re-teach), « les
  leçons 35 et 37 du B1 », « les leçons 27, 28 et 29 du B2 »; the faux-amis bank (about
  110 headwords) is reused as known. NEW: initier, opportunité, alternative, impacter,
  académique, versatile, juridiction, éligible, digital, faire sens / faire du sens,
  questionner, canceller, céduler, booker. For each: who condemns, who accepts (OQLF BDL /
  GDT, Académie « Dire, ne pas dire », FranceTerme, Usito, the Belgian Service de la
  langue française), stated as « selon … », never a single verdict when authorities
  differ. c1.12 already teaches « évidence / evidence »: cite « la leçon 12 du C1 ».
  Owns words; c1.22 owns ideas.
- **c1.19 « Les figures et leur effet »** (slug `figures-effet`, workshop, skill CE):
  `rhetorique` 1200-1399, unit c1.19. Model `../b2/lire-litterature-*` (b2.30) and the
  reviewed `persuader-*` (c1.08, owns persuasion; cite, never re-teach). Builds on « la
  leçon 30 du B2 » act 7 (comparaison, métaphore, personnification) and its B2 term rows
  (anaphore, oxymore, antithèse, hyperbole, euphémisme, métaphore filée, ironie). NEW:
  litote as a figure (c1.06 owns it in speech, c1.17 as connotation), antiphrase,
  prétérition, chiasme, gradation, zeugme, hypallage, métonymie and synecdoque,
  allitération and assonance, rhythm (ternaire, cadence), effects of rupture; the
  skill is one sentence on the EFFECT, not the name. Effect claims are interpretive:
  accept other defensible readings in `why`. Public-domain extracts only, verified word
  for word on Wikisource (Corneille, Racine, La Fontaine, Pascal, La Bruyère, Montesquieu,
  Hugo, Baudelaire, Rimbaud, Verlaine, Apollinaire, Rostand). Sound devices flatten in
  TTS: show them in text. Task: a short commentary, 250-400 words, on an extract.
- **c1.22 « Traduire des idées »** (slug `traduire-idees`, workshop, skill PE):
  `langue-soignee` 2200-2399, unit c1.22 (decision 26). Model `../b2/traduire-sans-calquer-*`
  (b2.33) and the reviewed `rapports-comptes-rendus-*` (c1.11). Builds on « la leçon 33
  du B2 » (three calque kinds, ten faux amis, transposition, modulation, équivalence,
  étoffement, -ing forms, tone): one recap card. NEW: idea-level reformulation; English
  hedging and understatement; paragraph logic (topic-sentence linearity vs French
  announcement); implicitation and explicitation; cultural equivalence; summary
  translation; register shifts across audiences. Original English source texts only.
  Every translation example checked against a dictionary, BDL, Termium or the Language
  Portal of Canada. graderNotes name the target moves (LLM grading over-rewards
  literalness). Task: render a 200-300 word English text as natural French, 250-400 words.
- **c1.23 « Le tact au travail »** (slug `tact-travail`, workshop, skill PE):
  `francais-professionnel-avance` 1000-1199, unit c1.23. Model `../b2/reunions-negociation-*`
  (b2.26) and the reviewed `rapports-comptes-rendus-*` (c1.11). Builds on « la leçon 26 du
  B2 » (chairing, softening, conceding) and « la leçon 39 du B1 » (formal email); c1.06
  owns speech politeness and c1.11 minutes (cite both). NEW: tact in writing (refusal, bad
  news, escalation, saying no upward); degrees of indirectness and when indirectness reads
  as passive-aggressive; presentations (signposting, slide titles, hostile questions);
  France vs Québec directness (sourced, not stereotyped). Contested business usage
  (revenir vers vous, impacter, initier, booker, call) stated with its source. Read every
  legacy fpa row before reuse (known: .024 needs the conditional; fix spaced « ? » on
  reuse). Task: a written refusal or bad-news message, 250-400 words.

**DALF paper 5** dispatched with blanc-04 as model: DALF-05, 18 (chronique), 19 (flash),
36, 45, 58, 60.

## Status

| Lesson | Slug | Missions | Acts | Quiz | Drills | Sheets | Items | Art | State |
|---|---|---|---|---|---|---|---|---|---|
| c1.20 | lire-entre-les-lignes (CE target) | 81 | 12 | 11×8 | 11 | 5 | 200 new / 17 reused | 12 in | LIVE v85 |
| c1.21 | debats-entretiens (CO target) | 78 | 12 | 11×8 | 11 | 5 | 146 new / 21 reused | 12 in | LIVE v85 |
| c1.01 | bilan-grammatical-c1 (diagnostic) | 78 | 12 | 12×8 | 12 | 5 | 100 new / 86 reused | 12 in | LIVE v85 |
| c1.24 | analyse-presse | 78 | 12 | 11×8 | 11 | 5 | 156 new / 12 reused | 12 in | LIVE v85 |
| c1.02 | passe-anterieur (recognition) | 86 | 12 | 11×8 | 11 | 5 | 159 new / 14 reused | 12 in | pre-reviewed, art in |
| c1.03 | concordance-litteraire (recognition) | 83 | 11 | 11×8 | 11 | 5 | 150 new / 16 reused | 11 in | pre-reviewed, art in |
| c1.04 | relatives-complexes | 85 | 11 | 12×8 | 12 | 5 | 162 new / 19 reused | 11 in | pre-reviewed, art in |
| c1.05 | ellipse-reprise | 87 | 12 | 12×8 | 12 | 5 | 182 new / 28 reused | 12 in | pre-reviewed, art in |
| c1.06 | nuancer-oral | 81 | 12 | 11×8 | 11 | 5 | 154 new / 38 reused | 12 pending | pre-reviewed |
| c1.07 | reformuler-conclure | 77 | 12 | 11×8 | 11 | 5 | 132 new / 26 reused | 12 pending | pre-reviewed |
| c1.08 | persuader | 77 | 12 | 11×8 | 11 | 5 | 178 new / 28 reused | 12 pending | pre-reviewed |
| c1.09 | expose-jury | 79 | 12 | 11×8 | 11 | 5 | 163 new / 44 reused | 12 pending | pre-reviewed |

## Id ledger

| Theme | Block | Owner | Authored |
|---|---|---|---|
| `francais-professionnel-avance` (NEW row 2026-09-30: travail, c1-c2) | 1-165 legacy | Speak stage 6.3 | |
| `nuances-et-registres` (NEW row: fondations, c1-c2) | 1-165 legacy | Speak stage 6.1 | |
| `discours-dexamen` (NEW row: education, c1-c2, exam) | 1-165 legacy | Speak stage 6.5 | |
| `culture-profonde` (NEW row: culture, c1-c2) | 1-161 legacy | Speak stage 6.4 | |
| `rhetorique` (NEW row: concepts, c1-c2) | 1-160 legacy | Speak stage 6.2 | |
| `discours-dexamen` (sub-theme « faire le point sur sa grammaire ») | 1000-1199 | c1.01 bilan-grammatical-c1 | .1000-.1099 (100) |
| `discours-dexamen` (sub-theme « suivre un débat à l'oral ») | 1400-1599 | c1.21 debats-entretiens | .1400-.1545 (146) |
| `strategies-de-comprehension` (range widened b1-c1; sub-theme « lire entre les lignes »; b1 1000-1389, b2 1400-1764) | 1800-1999 | c1.20 lire-entre-les-lignes | .1800-.1999 (200, block full) |
| `strategies-de-comprehension` (sub-theme « analyser la presse ») | 2000-2199 | c1.24 analyse-presse | .2000-.2155 (156) |
| `litterature` (widened b1-c1; sub-theme « le passé antérieur ») | 1600-1799 | c1.02 passe-anterieur | .1600-.1783 (159) |
| `litterature` (sub-theme « la concordance littéraire ») | 1800-1999 | c1.03 concordance-litteraire | .1800-.1982 (150) |
| `pronoms-essentiels` (widened a1-c1; sub-theme « les relatives complexes ») | 2000-2199 | c1.04 relatives-complexes | .2000-.2191 (162) |
| `langue-soignee` (widened a2-c1; sub-theme « l'ellipse et la reprise ») | 2000-2199 | c1.05 ellipse-reprise | .2000-.2192 (182) |
| `nuances-et-registres` (sub-theme « nuancer à l'oral ») | 1000-1199 | c1.06 nuancer-oral | .1000-.1156 (154; .1004/.1005/.1097 unused) |
| `connecteurs-logiques` (widened a2-c1; sub-theme « reformuler et conclure ») | 2600-2799 | c1.07 reformuler-conclure | .2600-.2731 (132) |
| `rhetorique` (sub-theme « persuader ») | 1000-1199 | c1.08 persuader | .1000-.1177 (178) |
| `discours-dexamen` (sub-theme « l'exposé et le jury ») | 1200-1399 | c1.09 expose-jury | .1200-.1362 (163) |

Later waves: proposed homes for all 24 are in `C1-RESEARCH-PLAN.md`; probe again
and claim at each wave's dispatch. **Rule:** a block must be unused at EVERY level
of the theme.

## Status 2026-10-07: papers in the database, DALF 1 recorded

- DALF 1-5, TEF blanc-06 and TCF blanc-06 written to Postgres, all tasks in_review (apply-paper learned `dalf`, 23220cd).
- Audio measured from the paper files (scratch/_audio_budget_c1.mts): 128,009 characters, 704 calls (80,354 listening + 47,655 examiner turns).
- Paul chose "one paper first". DALF blanc-01 recorded: 19,021 characters, 3 documents + 54 examiner turns on R2, 4 clips reused.
- Speech rates: Partie 1 about 160 wpm, sondage about 155, the news flash about 196 (above the 175 target). The examiner speaks at speed 0.85.
- Waiting on Paul's listen before recording the other 6 (about 109,000 characters).
- Paul: "sounds good". DALF 2-5 and most of TEF blanc-06 recorded (22 of 31 tasks, 230 clips). ElevenLabs then returned quota_exceeded (0 credits left).
- Still to record (about 26,800 characters, list in scratch/_render_ids_left.txt): TCF blanc-06 co_mcq.001-006 + po_interaction.001, TEF blanc-06 co_mcq.007 + po_interaction.001. Re-running the same loop renders only what is missing.
- Wave 6 art registered (762ab7e), ART_PENDING empty. The 4 TEF blanc-06 plates (hand-drawn by Paul) are uploaded to R2 at img/exam/tef/blanc-06/co-a-01..04.png, all four checked against their alt order.

## Decision 47 (Paul, 2026-10-07): finish the exam audio after the C2 lessons

The 9 unrecorded tasks (TCF blanc-06 x7, TEF blanc-06 x2, scratch/_render_ids_left.txt) wait until the C2 lessons are done. Until then TEF and TCF blanc-06 stay in_review and are NOT promoted: a paper ships whole, audio included. DALF 1-5 are fully recorded and can ship with v87.
