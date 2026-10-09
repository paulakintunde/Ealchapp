# C2 build plan

Drafted 2026-10-08, the day the lost 14-lesson list was replaced. `C2-BUILD-LOG.md`
recorded the blocker: Paul's original 2026-09-22 list was never saved to a file.
Paul supplied a fresh 14-item list on 2026-10-08; it was compared lesson-by-lesson
against the shipped C1/B2 corpus, two reframes and one merge were proposed to
avoid re-teaching three existing lessons, and Paul approved the adjusted list
("Looks good and great"). This file is that approved list, at the same level of
detail C1-BUILD-PLAN.md reached at the same stage.

The factory is B1's, B2's and C1's unchanged. Read in this order:
`C2-BUILD-LOG.md` (what Phase 1 wiring already fixed, 2026-10-08), this file
(lessons, units, shapes, builds-on, waves, id homes), `C2-RESEARCH-PLAN.md`
(per lesson: scope, what C1/B2 already own, sources, exam target, risks), then
`../c1/C1-PHASE0-PROMPT.md` as the reusable template this plan follows.

## The 14 lessons (Paul's list, 2026-10-08, adjusted with Paul's sign-off)

Shape: **W** workshop (text and task), **V** vocab (mission journey around word
families), **R** recognition (spot, map, understand; never asks for
production). C2 adds no new grammar — CEFR's own C2 descriptors are about
mastery of registers, nuance, mediation and density, not new forms — so there
is no **G** lesson, the first band since A1 without one. "Builds on" names the
published lesson a C2 act 1 must cite by trail position and go past, never
re-teach; **bold** marks the lesson it sits closest to.

| # | Lesson | Shape | Builds on | Future exam link |
|---|---|---|---|---|
| **Unit 1** | **Précision et style** | | | |
| c2.01 | C2 language use: precision, nuance and the implicit (irony, presupposition, understatement) | W | **c1.20** (reading the implicit), c1.06, c1.17, c1.19 | |
| c2.02 | Literary French: complete analysis, register and voice across a full text | W | **c1.14** (reaction to analysis through form), c1.02, c1.03, c1.19 | |
| c2.03 | Advanced idiomatic expressions: 100 items | V | **c1.17** (connotation and register) | |
| c2.04 | Verlan, argot et registres: slang for literary and ironic effect, past recognition | W | **b2.32** (recognise-and-avoid slang) | |
| **Unit 2** | **Mots et médiation** | | | |
| c2.05 | Étymologie et formation des mots: roots, prefixes, suffixes, word history | V | **c1.18** (false friends; word-level) | |
| c2.06 | La médiation linguistique: reformulating a specialist text for a different audience | W | **c1.22** (translating complex ideas by reformulation) | |
| c2.07 | Translating French poetry (optional enrichment, per the 2026-09-22 wave hint) | W | **c1.22**, c1.19 | |
| c2.08 | Spontaneous oral production | W | **c1.09** (formal oral expression), c1.21 | future PO@c2 |
| **Unit 3** | **Discours et analyse** | | | |
| c2.09 | Maintaining discourse: long, sustained responses | W | **c1.09**, c2.08 (same wave) | future PO@c2 |
| c2.10 | Synthèse experte et dissertation avancée, au-delà de C1 | W | **c1.10** (academic essays) | future PE@c2 |
| c2.11 | Compréhension orale experte, au-delà de B2: overlapping speakers, mixed registers, degraded audio | R | **b2.25** (real-time listening), c1.21 | future CO@c2 |
| c2.12 | C2 reading: dense, unsimplified academic texts | R | **c1.20** (reading between the lines) | future CE@c2 |
| **Unit 4** | **Révision et maîtrise** | | | |
| c2.13 | Correction and self-editing | W | no single owner; draws on c1.05, c1.06, c1.17, c1.22 | |
| c2.14 | Mastery portfolio exercise — capstone | W | cites across the whole C2 band | |

C2 is **9 workshops, 2 vocab, 2 recognition** lessons, no grammar lesson — the
opposite of B1's grammar-heavy balance, continuing C1's own shift away from it.

**Ownership** (so no C2 lesson re-teaches what it builds on): the implicit and
irony c2.01 as productive nuance (c1.20 was recognition-only); literary
analysis c2.02 integrates what c1.02/c1.03/c1.19 taught piecemeal; slang c2.04
is literary/ironic use, never the recognise-and-avoid scope b2.32 already
owns; translating/reformulating is one thread across c1.22 → c2.06 (mediation)
→ c2.07 (poetry); oral production is c1.09 (structured debate) → c2.08
(spontaneous) → c2.09 (sustained length); writing is c1.10 → c2.10 (harder
sources, a genre c1.10 does not ask for); listening is b2.25 → c2.11; reading
is c1.20 → c2.12.

**Why "étymologie et formation des mots" is one lesson, not two:** Paul's
original list had them as separate items (5 and 6); they are the same skill
(where words come from and how French builds new ones from roots and
affixes), so merging them freed a slot. That slot holds c2.06, "la médiation
linguistique" — a genuine CEFR C2 descriptor (reformulating a specialist text
for a different audience) that nothing in Paul's original 14 covered.

**Why "l'implicite et le sous-entendu" is not its own lesson:** it is folded
into c2.01's scope instead of added as a 15th item. c1.20 already taught
RECOGNISING irony, presupposition and omission; c2.01 is precision and nuance
PRODUCED, and reading-the-implicit is the natural other half of that same
coin, not a separate skill.

## Wave plan

As at B1/B2/C1: four lessons per wave (the last wave is two, matching the
2026-09-22 hint that put c2.13-14 together), each gate followed by an import
and a publish. Before each wave: re-probe its id blocks, widen any theme range
it needs, append its sub-themes (all Postgres writes, Paul's OK), BEFORE any
dry run — same rule C1 followed.

| Wave | Lessons | Why this order | Theme writes before dispatch |
|---|---|---|---|
| 1 | c2.01 c2.02 c2.03 c2.04 | Sets the C2 voice: nuance, literary reading, idiom and slang in literary use — all style, nothing structural yet. | widen litterature, expressions-imagees, argot-classique to reach c2; 4 sub-themes appended (see id homes) |
| **GATE C2-1** | after 4 | Paul sets the C2 voice, then import + publish | |
| 2 | c2.05 c2.06 c2.07 c2.08 | Words and mediation: etymology, the new mediation lesson, poetry translation, spontaneous speech | new theme row `etymologie`; widen langue-soignee to reach c2; 3 sub-themes appended |
| **GATE C2-2** | after 8 | review, import + publish | |
| 3 | c2.09 c2.10 c2.11 c2.12 | Discourse and the four "academic skill, past its C1/B2 ceiling" lessons | widen strategies-de-comprehension to reach c2; 4 sub-themes appended (discours-dexamen needs none, already c1-c2) |
| **GATE C2-3** | after 12 | review, import + publish | |
| 4 | c2.13 c2.14 | Self-editing, then the capstone that cites across the whole band | 1 sub-theme appended to langue-soignee (self-editing shares c2.06's widen, already done in wave 2) |
| **GATE C2-4** | after 14 | C2 complete; import + publish | |

About 32 agent dispatches for authors and pre-reviewers (14 lessons x 2, plus
spares), and about 110 to 170 images (8-12 per lesson, per the rich standard)
for Paul to draw.

**Exam link:** no `dalf_c2` format exists and nobody has asked for one (see
C2-BUILD-LOG.md, "deliberately not touched"). The "future" column above is
informational only — it names which lesson a PE@c2/PO@c2/CE@c2/CO@c2 task
would route to IF that product ever gets built, the same way `EXAM_PREP_TARGETS`
routes C1. Nothing is wired; no code or schema change happens from this column.

## Id homes (probed 2026-10-08, read-only against live Postgres; re-probe at each wave's dispatch)

Ids are `fr.c2.<theme>.<n>`. Same rule as B2/C1: C2 lessons claim **blocks of
200**, one per lesson, never a number already used at ANY level of the same
theme. All 14 reuse an EXISTING theme (C1's own territory, several already
ranged c1-c2) rather than a wholly new one, except `etymologie`, which did not
exist at any level.

| Lesson | Theme | Block | Current range | Needed range | State |
|---|---|---|---|---|---|
| c2.01 | nuances-et-registres | 1400-1599 | c1-c2 | no change | **claimed** (widen none needed; sub-theme « la précision et l'implicite » applied 2026-10-09) |
| c2.02 | litterature | 2000-2199 | b1-c2 | **widened 2026-10-09** | **claimed** (sub-theme « l'analyse littéraire intégrale » applied) |
| c2.03 | expressions-imagees | 1800-1999 | b1-c2 | **widened 2026-10-09** | **claimed** (sub-theme « cent expressions idiomatiques avancées » applied) |
| c2.04 | argot-classique | 1000-1199 | b2-c2 | **widened 2026-10-09** | **claimed** (sub-theme « l'argot et le registre en littérature » applied) |
| c2.05 | etymologie (NEW row) | 1000-1199 | — | create, c1-c2 | proposed |
| c2.06 | langue-soignee | 2400-2599 | a2-c1 | widen to c2 | proposed |
| c2.07 | litterature | 2200-2399 | b1-c1 (widening above covers this) | c2 | proposed |
| c2.08 | discours-dexamen | 1800-1999 | c1-c2 | no change | proposed |
| c2.09 | discours-dexamen | 2000-2199 | c1-c2 | no change | proposed |
| c2.10 | discours-dexamen | 2200-2399 | c1-c2 | no change | proposed |
| c2.11 | strategies-de-comprehension | 2200-2399 | b1-c1 | widen to c2 | proposed |
| c2.12 | strategies-de-comprehension | 2400-2599 | b1-c1 (widening above covers this) | c2 | proposed |
| c2.13 | langue-soignee | 2600-2799 | a2-c1 (widening above covers this) | c2 | proposed |
| c2.14 | discours-dexamen | 2400-2599 | c1-c2 | no change | proposed |

Verified against the live `content_items` table (read-only transaction, no
writes): every block above is the first clean 200-block after that theme's
actual highest claimed block, not just the highest id. `validateCorpus`
refuses an item outside its theme's range, so each "widen" must land before
that lesson imports.

**Sub-themes to append** (one string per lesson, Postgres write, Paul's OK):
nuances-et-registres += "la précision et l'implicite" (c2.01); litterature +=
"l'analyse littéraire intégrale" (c2.02) and "traduire la poésie" (c2.07);
expressions-imagees += "cent expressions idiomatiques avancées" (c2.03);
argot-classique += "l'argot et le registre en littérature" (c2.04);
langue-soignee += "la médiation linguistique" (c2.06) and "se corriger et se
réviser" (c2.13); discours-dexamen += "la production orale spontanée" (c2.08),
"maintenir un discours long" (c2.09), "la synthèse et la dissertation
expertes" (c2.10), "le bilan de maîtrise" (c2.14); strategies-de-comprehension
+= "l'écoute native avancée" (c2.11), "lire des textes académiques denses"
(c2.12). The new `etymologie` row starts with sub_themes = ["les racines et
les familles de mots"] (c2.05).

**Proposed new theme row** (Paul approves the values, since this writes to
Postgres): `etymologie`, domain `fondations` (beside its lexical siblings
langue-soignee, nuances-et-registres, faux-amis), title "L'étymologie et la
formation des mots", level range c1-c2, exam_flag false, immig_flag false.

## Pack layout

- The c2 pack already exists (`PACK_ORDER` ... c2, exam): 0 lessons, 0 items,
  kept at v79 (see `ealch-c2-phase1-status` memory). Nothing in the pack code
  changes; the first C2 import simply gives it content.
- **Not bundled in the binary**, like B2 and C1: C2 arrives by download.
- **Gate previews:** a dev build never loads the packs layer, so each gate
  preview fixture must hold the whole C2 band authored so far (memory
  ealch-dev-build-no-packs-layer), the same fixture pattern used for Gate C1-3.

## What is different at C2

- **French only**, learner is **tu**, same EN-pill toggle mechanism as C1+
  (hidden by default, never shown unprompted).
- **No grammar lesson.** CEFR C2 adds no new forms; every lesson is register,
  nuance, mediation, density or production under pressure.
- **Texts are harder than C1's**, not merely longer: dense, unsimplified,
  allowed to assume background knowledge c1.12-c1.18's vocabulary lessons
  built. Reading task length and listening audio length follow the same
  envelope C1 used (300-500 words, 2-4 minute audio) unless a lesson's own
  research plan argues for more (c2.12's "dense academic text" may want
  longer; c2.11's "degraded/overlapping audio" is about difficulty, not length).
- **Pronunciation/production strictness is already wired stricter than C1**
  (`barsForLevel` c2: 92% good / 68% close vs c1's 88%/62%, done 2026-10-08).
- **Cite by trail position**, never a raw id, same as every band.
- **Tag** « C2 · LEÇON NN »; unit `c2.NN`, lesson `c2.NN.l1`.

## Decisions

**Answered by Paul, 2026-10-08:**

1. The adjusted 14-lesson list (merge of the two original word-formation items,
   the new médiation lesson in the freed slot, three lessons reframed to
   explicitly go past b2.32/c1.10/b2.25) — approved ("Looks good and great").

**Open, for Paul:**

1. The four unit names above (Précision et style / Mots et médiation /
   Discours et analyse / Révision et maîtrise) — proposed, not yet confirmed
   the way C1's Unit 5 name was.
2. The id homes and theme writes table above — proposed, writes to Postgres,
   needs explicit sign-off before wave 1 theme writes land.
3. c2.07 (poetry) stays "optional enrichment" per the one surviving hint from
   the lost 2026-09-22 list — confirm it ships in wave 2 regardless, or gets
   deprioritised if wave 2 runs long.
4. Whether to actually build a `dalf_c2` exam format at all — not blocking any
   lesson content, purely a future product call.
