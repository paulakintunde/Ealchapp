# Orchestration Spec — Single Source of Truth Reconciliation

**Status:** DRAFT for Paul's approval. Nothing runs until you sign off.
**Goal:** Turn ~20 conflicting `.md` docs into one approved, code-grounded Master Ealch Build — without silently discarding good older decisions.

---

## Ground rules (from our alignment)

1. **Scope:** all root `.md` files (21 listed below). Image-only folders excluded.
2. **Flag-only:** no agent ever picks a winner on a conflict. Every doc-vs-code divergence and every doc-vs-doc conflict is surfaced to you neutrally, both sides laid out, with a recommendation you can accept or reject.
3. **Duplicates** (same decision stated in N docs, no disagreement) are collapsed automatically. **Conflicts** (docs or code disagreeing) are always escalated.
4. **Content is first-class:** content/pedagogy docs get a second specialist reviewer.
5. **Two human gates** → two separate workflow runs (an orchestrated run can't pause mid-flight to ask you).

---

## The two runs

```
RUN A  ─ reconcile ───────────────────────────────────────────►  DECISION SHEET  ──►  [ Paul resolves ]
  fan-out doc review → aggregate → dedup + conflict detection

                                                                        │ (approved resolutions)
                                                                        ▼
RUN B  ─ rebuild ─────────────────────────────────────────────►  REVIEWED MASTER BUILD  ──►  [ Paul reviews ]
  fresh code read → Master Build draft → expert panel audit → merge
```

---

## Document inventory (21) and lens assignment

Each doc gets **one code-check reviewer**. Docs marked ● also get a **pedagogy/content reviewer** (second pass).

| # | Document | Size | Pedagogy lens |
|---|---|---|---|
| 1 | AUDIO-LESSON-SCRIPT-SYSTEM.md | 19K | ● |
| 2 | AUDIO-SCRIPT-PILOT-A1-AU-CAFE.md | 4K | ● |
| 3 | CANONICAL-DECISIONS-AND-RECONCILIATION.md | 8K | |
| 4 | CONTENT-CURRICULUM-AND-GENERATION-PLAN.md | 33K | ● |
| 5 | CONTENT-GENERATION-PIPELINE-SPEC.md | 13K | ● |
| 6 | CONTENT-PART4-FIX-PROMPTS.md | 37K | ● |
| 7 | EALCH-MASTER-BLUEPRINT.md | 12K | |
| 8 | EXAMINER-ENGINE-SPEC.md | 13K | ● |
| 9 | HOME-BUILD-1-AUDIT.md | 23K | |
| 10 | HOME-BUILD-PROMPT-1.md | 13K | |
| 11 | HOME-FUNCTIONALITY-PLAN.md | 16K | |
| 12 | INDEPENDENT-LOOK-REVIEW.md | 34K | |
| 13 | MONETIZATION-AND-UNIT-ECONOMICS.md | 11K | |
| 14 | NARRATION-ENGINE-SPEC.md | 10K | ● |
| 15 | OPR-CONTENT-STUDIO-SPEC.md | 12K | ● |
| 16 | PHASE-2-CONTENT-PLAN.md | 16K | ● |
| 17 | README.md | 2K | |
| 18 | SCHEMA-EXTENSION-PLAN.md | 9K | |
| 19 | THEME-CATALOGUE-AND-ARCHITECTURE.md | 17K | ● |
| 20 | WELCOME-SCREEN-COMPONENT-SPEC.md | 67K | |
| 21 | contentresearch.md | 132K | ● |

**Fan-out size:** 21 code-check agents + 11 pedagogy agents = **32 reviewer agents**, run ~10 concurrent (harness caps concurrency; all complete). contentresearch.md (132K) and WELCOME-SCREEN (67K) are chunked so no single agent drowns.

---

## RUN A — Reconcile

### Stage 1 — Doc code-check reviewer (one per doc)

Each agent reads its doc + the relevant code in `ealch-v2/` and extracts every **material claim** (a decision, spec, number, flow, or requirement — not prose). For each claim it verifies against code and returns structured JSON:

```
Claim {
  id, doc, doc_anchor,        // where the claim lives
  statement,                  // the decision/spec, one sentence
  category,                   // architecture | content | pedagogy | monetization | schema | ui | narration | exam | onboarding | other
  code_status,               // SUPPORTED | CONTRADICTED | NOT_IN_CODE | UNVERIFIABLE
  code_evidence,             // file:line refs, or null
  decision_status,           // CURRENT | LOOKS_SUPERSEDED | HISTORICAL  (agent's read, not a ruling)
  value_if_dropped,          // "why this idea might still be worth keeping" — protects good old decisions
  confidence                 // 0–1
}
```

Key point per your rule: `code_status` and `decision_status` are **observations, never verdicts**. `value_if_dropped` is deliberately included so a good idea an update quietly dropped gets a voice.

### Stage 2 — Pedagogy reviewer (content docs only, ● above)

Second lens on the 11 content docs. Judges each content decision on: CEFR/level soundness, learner retention, spaced-repetition fit, script/narration quality, and whether the content pipeline actually produces what the doc promises (checked against `src/content/`). Returns `PedagogyNote { claim_id?, doc, observation, retention_impact: HIGH|MED|LOW, recommendation }`.

### Stage 3 — Aggregator

Collects all Claims + PedagogyNotes into one normalized set. Groups claims by `category` + semantic topic. Emits counts and a coverage log (which docs, which code areas touched, what was chunked/skipped). No judgement here — pure collation.

### Stage 4 — Conflict & duplicate reviewer

Over the aggregated set:
- **Duplicate** = same decision, same stance, multiple docs → collapse to one, list all sources.
- **Conflict** = two docs disagree, OR a doc contradicts code, OR a "current" claim is contradicted by a "superseded"-looking one.
- Produces the **Decision Sheet** (below). Each conflict carries a *recommendation* + rationale, but is marked `UNRESOLVED` pending you.

### RUN A output → `SSOT-DECISION-SHEET.md`

For each conflict:
```
CONFLICT #n — [category] short title
  Side A: <statement>   (source: doc §, or code file:line)
  Side B: <statement>   (source: …)
  Code says: <SUPPORTED/CONTRADICTED + evidence>
  Recommendation: <A | B | merge | keep-both | needs-your-call>  — why
  If we drop the loser: <value_if_dropped>
  ▢ Your decision: ______
```
Plus an appendix of auto-collapsed duplicates (for transparency) and an "orphans" list (claims in no code, no other doc — possibly forgotten good ideas).

**→ You fill in decisions. That approved sheet is the only input Run B trusts for intent.**

---

## RUN B — Rebuild (after your approval)

### Stage 5 — Fresh code read + Master Build author

A fresh agent (deliberately *not* fed the old docs' framing — only the code + your approved Decision Sheet) reads `ealch-v2/` end to end and writes **`EALCH-MASTER-BUILD.md`**: what exists today, the target, and a **phased build plan** (Phase 0…N with goals, scope, dependencies, acceptance criteria). Content phases get extra detail per your priority.

### Stage 6 — Expert mobile-dev panel (parallel audit)

The draft build goes to a panel of senior-reviewer agents, each a distinct lens, each auditing every phase and proposing concrete improvements:

1. **Architecture & Expo/RN** — navigation, state, module boundaries, offline/sync
2. **Performance & reliability** — startup, list/render cost, audio playback, crash surfaces
3. **Data & schema** — Supabase schema, migrations, local persistence, integrity
4. **Content & pedagogy** — curriculum depth, retention loop, examiner/narration quality (heaviest lens, per your emphasis)
5. **Monetization & retention** — paywall placement, unit economics, D1/D7/D30 loops
6. **Release & QA** — EAS build/update, store readiness, testing gaps

Each returns `PanelFinding { phase, lens, severity, finding, improvement, effort }`.

### Stage 7 — Merge

An editor agent folds accepted panel findings into the build, tagging each change with its lens so you see provenance. Nothing is dropped silently.

### RUN B output → `EALCH-MASTER-BUILD.md` (reviewed) + `MASTER-BUILD-PANEL-NOTES.md`

**→ You review. This becomes the single source of truth.**

---

## Cost, model, controls

- **Model tier:** reviewers on the session model (Opus 4.8); heavy synthesis (Stages 4, 5, 7) same. Cheap mechanical steps can drop to a lower effort tier.
- **Rough size:** Run A ≈ 32 reviewer agents + 3 synthesis; Run B ≈ 1 author + 6 panel + 1 editor. This is a large token spend — that's the tradeoff for exhaustiveness you asked for.
- **Determinism:** built as `Workflow` scripts (deterministic fan-out, resumable). If a run hangs or you want to change a prompt, we resume from cache — unchanged agents don't re-run.
- **Every override is visible:** flag-only means nothing good disappears without your signature on the Decision Sheet.

---

## Open items for you before I build Run A

1. **Store outputs where?** Repo root (alongside these docs) or a new `/reconciliation/` folder?
2. **Panel lenses (Stage 6):** the 6 above good, or add/drop any?
3. **README.md & the 3 existing reconciliation docs** (CANONICAL, EALCH-MASTER-BLUEPRINT, INDEPENDENT-LOOK-REVIEW) — review as peers, or treat as prior-attempt reference the reviewers read but don't extract claims from?
