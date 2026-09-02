# exam-blueprints

**This directory is a firewall.**

Ealch holds no licence from CCI Paris Île-de-France, France Éducation international, or any accredited centre. Every exam item we ship is written from scratch. The controlling precedent is *ETS v. Katzman* (1986): a prep publisher that based questions on released items with details changed was found to infringe. Paraphrase of a protected item is a derivative work, and "we rewrote it" is not a defence.

So the work is split in two, and the split is the control:

**CALIBRATION** happened once, in phase E0. It read exam-body preparation pages, published rubrics, prep-site format guides and the IRCC equivalency grid, in order to learn *what the standard is*. Its entire output is the files in this directory.

**AUTHORING** (phase E7 onward) reads these files and our own corpus, and nothing else. It is never shown an exam item, a sample paper, or a prep-site question. It cannot paraphrase what it was never given.

Three artefacts per format, plus one shared file the two `STANDARD` files both build on:

| File | Contains | Does not contain |
|---|---|---|
| `BLUEPRINT-<format>.md` | Structural facts: section counts, question counts, durations, options per question, play counts, exercise taxonomy, score scales, the NCLC grid. Every fact carries a source URL and a retrieval date. | Any example, passage, stem or option. |
| `STANDARD-common.md` | The parts that do not vary by format: length and lexis envelopes per CEFR band, the question-stem taxonomy, distractor design rules, failure modes, authoring integrity rules, the handover checklist. | Format-specific block or task specs. |
| `STANDARD-<format>.md` | What "meets the standard" looks like for this paper, as rules an author can work against: what each block or task is, its register, its traps, its rubric shape. | Anything lifted, translated or adapted from a source. Every illustrative example was written fresh. |
| `TOPICS-<format>.md` | Our own topic bank, built from the CEFR can-do descriptors and the 128 themes already in `content_themes`. | Anything drawn from an exam paper. |

`STANDARD-common.md` exists so the envelopes and distractor rules cannot drift apart between the two formats. Read it first, then your format's file.

Structural facts are functional and factual, and are what every legitimate prep publisher works from. Everything else here is ours.

`content_exam_tasks.source_refs` records the blueprint id and version. It never records an item source, because there is no item source.

## If you are about to author

Read `BLUEPRINT`, `STANDARD` and `TOPICS` for your format. Do not go looking for a real paper to "check against". If a stimulus you are writing starts to feel familiar, discard it and write another.

## If you are about to update a blueprint

Exam boards change their formats. TEF Canada changed on 11 December 2023 and again on 1 September 2025. Bump the version string, record what changed and when, and then run the staleness report: every `content_exam_tasks` row carries a `formatVersion`, and that field exists precisely so a paper written against a retired format reads as *stale* rather than *wrong*.

Do not silently edit a fact in place. A blueprint with no history cannot tell you which papers to re-cut.

## Files

```
README.md                     this file
BLUEPRINT-tef-canada.md       tef-canada-2025.09
BLUEPRINT-tcf-canada.md       tcf-canada-2026.01
STANDARD-common.md            envelopes, stems, distractors, integrity rules
STANDARD-tef-canada.md        block by block
STANDARD-tcf-canada.md        the ramp, task by task
TOPICS-tef-canada.md          66 situations, grouped by subject
TOPICS-tcf-canada.md          72 situations, grouped by band, A1 to C2
```

Reading order for an author: `STANDARD-common.md` → `BLUEPRINT-<format>.md` → `STANDARD-<format>.md` → `TOPICS-<format>.md`.

DELF B2 has no blueprint yet. Its per-exercise question counts are not published on any page consulted during E0, and phase E10 must confirm them against an official sample paper before a single item is authored. Do not guess them.
