# Scope: a `dalf_c2` exam format

**Status:** not started. Scoped 2026-10-13 per Paul's call when the C2 content band shipped (v90, 2026-10-14) — write this down as its own future project while the C2 context is fresh, rather than let it get rediscovered cold. See memory `ealch-c2-phase1-status`.

## The decision this doc scopes

Whether to build a `dalf_c2` exam format at all. **Not blocking any lesson content** — `C2-BUILD-PLAN.md` and `C2-RESEARCH-PLAN.md` both name it only as a *future* routing target (`EXAM_PREP_TARGETS`-style) for individual C2 lessons (c2.08, c2.10, c2.11 all cite DALF C1/C2 specs as a content-difficulty reference, not as a shipped exam). Nothing in the app or schema currently references `dalf_c2`.

## What already exists, and is NOT nothing

This is the part worth re-reading before anyone re-derives it from scratch: **`dalf_c1` is fully blueprinted and wired into the app, with zero content.**

- `ealch-admin/exam-blueprints/BLUEPRINT-dalf-c1.md`, `STANDARD-dalf-c1.md`, `TOPICS-dalf-c1.md`, `VOICES-dalf-c1.md` — complete, sourced from FEI's own demo papers and grids (via the Fondation Esprit Francophonie mirror), same sourcing-firewall discipline as TEF/TCF/DELF. Covers paper shape (4 épreuves: CO/CE/PE/PO), timing, point patterns, scoring (same `delf` instrument, banded at `c1`), and engine mapping (`co_mcq`, `ce_mcq`, `pe_short`+`pe_essay`, `po_monologue`+`po_debate`).
- `ealch-v2/src/content/examFormats.ts`: `dalf_c1` is a real entry in `EXAM_FORMAT_FACTS` and `EXAM_FORMAT_ORDER`. The app already knows this format exists.
- **Zero `dalf_c1` papers were ever authored.** `grep -c dalf_c1 seed.json` / `seed-packs.json` = 0. No `PLAN-dalf-c1-blanc-*.md` exists (compare `PLAN-tef-blanc-02..06.md`, `PLAN-tcf-blanc-01..06.md`). The blueprint work (E0-equivalent) is paid for; the authoring work (E7/E9-equivalent, "gold paper then scale") never happened.

**Implication:** a `dalf_c2` project is not starting from zero either way, and arguably `dalf_c1` is the cheaper, closer win that should ship first — same engine, same scoring instrument, a blueprint already sitting unused. C2 would follow the identical pattern once C1 proves it end to end (gold paper → device-proven → scale), the same sequencing E7→E9 used for TEF→TCF.

## What C2 adds that C1 doesn't have

DALF C2 is a harder genre than C1, not just a higher band, per the one research risk already flagged in `C2-RESEARCH-PLAN.md` (c2.10): **the real DALF C2 synthesis task pulls from multiple dense source documents**, where C1's PE is single-source-oriented (synthèse + essai from one dossier). Expect the blueprint work itself (word/source counts, dossier length, the PE/PO grids) to need its own FEI-sourced calibration pass — not a copy of `BLUEPRINT-dalf-c1.md` with the level bumped.

## Rough sizing, by analogy to the existing exam-pack build log

- **Blueprint phase** (E0-equivalent: research + BLUEPRINT/STANDARD/TOPICS/VOICES for `dalf_c2`): comparable to the DALF C1 blueprint effort, ~1 session. Needs the same sourcing firewall (`EXAM-PACK-REDESIGN.md` §8.1-8.2): calibration reads FEI source material, authoring never does.
- **Engine changes**: likely small — `dalf_c2` added to `EXAM_FORMAT_FACTS`/`EXAM_FORMAT_ORDER`, `instrumentFor()` extended (currently an exhaustive switch over `nclc`/`delf` only — confirm whether C2 reuses `delf` banded at `c2`, the same move C1 made, or needs a third instrument given the harder PE genre).
- **Authoring**: a gold paper (E7-equivalent) then scale to however many papers get locked (TEF/TCF/DELF each run 5). `dalf_c1` would need the same authoring pass first or in parallel if it ships too.
- **Decision still open, not this doc's call**: whether to build `dalf_c1` papers, `dalf_c2`, both, or neither — purely a product-appetite call for Paul, same framing C2-BUILD-PLAN.md left it at.

## Sources for the blueprint phase (not yet fetched for C2)

Same mirror used for `dalf_c1`, FEI's own site sits behind an anti-bot check: `fondation-esprit-francophonie.ch/fileadmin/files/Ressources/Ressources_DELF/Exemples_d_Examen/DALF_C2/` (unverified — confirm this path exists and has a demo paper before starting; C1's did).

DALF is a registered trademark of France Éducation international. Named here descriptively. No endorsement, affiliation or equivalence is claimed or implied.
