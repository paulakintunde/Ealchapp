# Traceability Map — Source Documents to Master Build

Every Master Build phase traced back to the source `.md` documents it draws from. The link runs **Phase -> CF decision -> source doc + in-doc key**. Keys like `§C30`, `§3.2`, `§c15` are the reviewers' locators inside each `.md` (the same tags used in `SSOT-DECISION-SHEET.md`). `_code_` means the decision was also grounded in the live build, not only docs.

Generated from `EALCH-MASTER-BUILD.md` (phase -> CF references) and `SSOT-CONFLICT-DATA.json` (CF -> source citations). 22 root docs, 25 decisions, 16 phases.

---

## Part 1 — Phase to Source

For each phase (and its sub-sections), the decisions it implements and the documents each decision came from.

### Cross-cutting workstream CC-A — Release model, CI, and toolchain proof

_No CF decision cited directly; derived from the fresh code read and panel audit._

### Cross-cutting workstream CC-B — Commercial setup lead time

_No CF decision cited directly; derived from the fresh code read and panel audit._

### Phase 0 — Honesty & store-risk fixes (no schema, no dependencies)

**Decisions implemented:** CF-16, CF-18, CF-19, CF-20, CF-21, CF-22, CF-23

| CF | What it fixes | Source doc + key |
|---|---|---|
| CF-16 | Placement: adaptive 12-18 item probe (target) vs single fake question still shipped | CONTENT-CURRICULUM-AND-GENERATION-PLAN §C18; CANONICAL-DECISIONS-AND-RECONCILIATION §C27; INDEPENDENT-LOOK-REVIEW §3.5; CONTENT-PART4-FIX-PROMPTS §F6; CONTENT-PART4-FIX-PROMPTS §C-placementhonesty |
| CF-18 | STT-decision record location: flags.ts vs config.ts | CANONICAL-DECISIONS-AND-RECONCILIATION §C22; EALCH-MASTER-BLUEPRINT §c36; _code_ |
| CF-19 | Profile weakness engine: hardcoded 2-row list vs data-driven like Home | HOME-FUNCTIONALITY-PLAN §H4d; HOME-BUILD-1-AUDIT §C12; INDEPENDENT-LOOK-REVIEW §health.2 |
| CF-20 | README service-fallback claims vs code that refuses fabrication | README §C5; README §C18; README §C21; _code_ |
| CF-21 | Smart Review copy '1->3->7->21' vs SM-2 engine | INDEPENDENT-LOOK-REVIEW §1.9b; contentresearch §c46; _code_ |
| CF-22 | Third exam chip label: 'TCF Canada' vs generic 'TCF' | EXAMINER-ENGINE-SPEC §C29; CANONICAL-DECISIONS-AND-RECONCILIATION §C25; _code_ |
| CF-23 | Settings fake billing block + Restore purchases: remove vs still present | HOME-FUNCTIONALITY-PLAN §H8b; INDEPENDENT-LOOK-REVIEW §1.7; _code_ |

### Phase 1 — Schema v2 (unified migration) + curriculum spine + level-cap lift — execute immediately (CF-25)

**Decisions implemented:** CF-02, CF-07, CF-10, CF-11, CF-12, CF-13, CF-17, CF-24, CF-25

| CF | What it fixes | Source doc + key |
|---|---|---|
| CF-02 | SRS card key: (user,item,modality) vs (user,item) | EALCH-MASTER-BLUEPRINT §c16; contentresearch §c37; _code_ |
| CF-07 | Content plane: relational SQL tables vs bundled seed + Storage snapshot | CONTENT-CURRICULUM-AND-GENERATION-PLAN §C22; CONTENT-PART4-FIX-PROMPTS §B-tables; PHASE-2-CONTENT-PLAN §c13; EALCH-MASTER-BLUEPRINT §c32; INDEPENDENT-LOOK-REVIEW §5.4 |
| CF-10 | c2: content level vs scoring band only | CANONICAL-DECISIONS-AND-RECONCILIATION §C2; CANONICAL-DECISIONS-AND-RECONCILIATION §C3; EALCH-MASTER-BLUEPRINT §c25; SCHEMA-EXTENSION-PLAN §C15; _code_ |
| CF-11 | Den level cap sons/a1/a2 vs lift to all six bands | CANONICAL-DECISIONS-AND-RECONCILIATION §C10; EALCH-MASTER-BLUEPRINT §c26; SCHEMA-EXTENSION-PLAN §C19; _code_ |
| CF-12 | Exam schema hooks 'already present' vs absent | EXAMINER-ENGINE-SPEC §C6; OPR-CONTENT-STUDIO-SPEC §C3; EALCH-MASTER-BLUEPRINT §c28; _code_ |
| CF-13 | Item skill taxonomy: CO/CE/PO/PE vs read/write/speak/listen | CANONICAL-DECISIONS-AND-RECONCILIATION §C11; EALCH-MASTER-BLUEPRINT §c09; OPR-CONTENT-STUDIO-SPEC §C16; THEME-CATALOGUE-AND-ARCHITECTURE §C03; _code_ |
| CF-17 | Sons/A1/A2 unit spine: PHASE-2 topic lists vs shipped curriculum | PHASE-2-CONTENT-PLAN §c15; PHASE-2-CONTENT-PLAN §c16; PHASE-2-CONTENT-PLAN §c17; _code_ |
| CF-24 | Voice Flash scaling: image_ref indirection (claimed) vs iconFor(fr) derivation (real) | PHASE-2-CONTENT-PLAN §c30; CONTENT-PART4-FIX-PROMPTS §D-imageref; _code_ |
| CF-25 | Amend schema before mass authoring: window open (17 items) vs partly closed | contentresearch §c7; contentresearch §c8; contentresearch §c10; contentresearch §c40; SCHEMA-EXTENSION-PLAN §commits 5-7; contentresearch §c5; _code_ |

_Sub-section keys:_
- **1.A The two-file invariant, corrected** -> CF-11
- **1.B Schema v2 delta (applied to `ealch-v2/src/content/schema.ts` and mirrored in Drizzle + a new migration)** -> CF-02, CF-10, CF-11, CF-12, CF-13, CF-17, CF-24, CF-25

### Phase 2 — Content pipeline hardening + lesson↔corpus join + prove-the-pipe

**Decisions implemented:** CF-05, CF-07

| CF | What it fixes | Source doc + key |
|---|---|---|
| CF-05 | Content-generation model: claude-sonnet-5 vs NVIDIA Nemotron | CONTENT-CURRICULUM-AND-GENERATION-PLAN §C25; INDEPENDENT-LOOK-REVIEW §6.2; PHASE-2-CONTENT-PLAN §c25 |
| CF-07 | Content plane: relational SQL tables vs bundled seed + Storage snapshot | CONTENT-CURRICULUM-AND-GENERATION-PLAN §C22; CONTENT-PART4-FIX-PROMPTS §B-tables; PHASE-2-CONTENT-PLAN §c13; EALCH-MASTER-BLUEPRINT §c32; INDEPENDENT-LOOK-REVIEW §5.4 |

_Sub-section keys:_
- **2.A Ratify the content-plane architecture (CF-07)** -> CF-07
- **2.A+ Extend scope + governed pipeline (CF-07 resolution)** -> CF-07
- **2.F The generation pipeline and prove-the-pipe (pulled forward — HIGH)** -> CF-05

### Phase 3 — Pluggable provider socket → OPR admin :4000, Nemotron default (CF-05, CF-06)

**Decisions implemented:** CF-05, CF-06

| CF | What it fixes | Source doc + key |
|---|---|---|
| CF-05 | Content-generation model: claude-sonnet-5 vs NVIDIA Nemotron | CONTENT-CURRICULUM-AND-GENERATION-PLAN §C25; INDEPENDENT-LOOK-REVIEW §6.2; PHASE-2-CONTENT-PLAN §c25 |
| CF-06 | Coach cheap tier: Gemini 3 Flash vs NVIDIA/Anthropic chain | MONETIZATION-AND-UNIT-ECONOMICS §C3; EALCH-MASTER-BLUEPRINT §c05; CANONICAL-DECISIONS-AND-RECONCILIATION §C19 |

### Phase 4 — Azure / Camille TTS resolver + client remote-audio path (CF-04)

**Decisions implemented:** CF-04

| CF | What it fixes | Source doc + key |
|---|---|---|
| CF-04 | TTS provider: Azure Neural (Camille) primary vs Fish/ElevenLabs wired | CANONICAL-DECISIONS-AND-RECONCILIATION §C18; EALCH-MASTER-BLUEPRINT §c04; NARRATION-ENGINE-SPEC §C9; AUDIO-LESSON-SCRIPT-SYSTEM §C21; NARRATION-ENGINE-SPEC §C4; _code_ |

### Phase 5 — SRS / mastery engine wiring (CF-01, CF-03, CF-02, CF-21)

**Decisions implemented:** CF-01, CF-02, CF-03, CF-21

| CF | What it fixes | Source doc + key |
|---|---|---|
| CF-01 | SRS algorithm: FSRS-6 (specced) vs SM-2 (shipped) | CONTENT-GENERATION-PIPELINE-SPEC §C30; EALCH-MASTER-BLUEPRINT §c15; THEME-CATALOGUE-AND-ARCHITECTURE §C05; contentresearch §c36; INDEPENDENT-LOOK-REVIEW §3.2; WELCOME-SCREEN-COMPONENT-SPEC §C04 |
| CF-02 | SRS card key: (user,item,modality) vs (user,item) | EALCH-MASTER-BLUEPRINT §c16; contentresearch §c37; _code_ |
| CF-03 | Mastery definition: retention>=0.90 & reps>=3 vs no mastery concept | EALCH-MASTER-BLUEPRINT §c22; THEME-CATALOGUE-AND-ARCHITECTURE §C06; contentresearch §c48; _code_ |
| CF-21 | Smart Review copy '1->3->7->21' vs SM-2 engine | INDEPENDENT-LOOK-REVIEW §1.9b; contentresearch §c46; _code_ |

### Phase 6 — Placement rebuild (CF-16)

**Decisions implemented:** CF-16

| CF | What it fixes | Source doc + key |
|---|---|---|
| CF-16 | Placement: adaptive 12-18 item probe (target) vs single fake question still shipped | CONTENT-CURRICULUM-AND-GENERATION-PLAN §C18; CANONICAL-DECISIONS-AND-RECONCILIATION §C27; INDEPENDENT-LOOK-REVIEW §3.5; CONTENT-PART4-FIX-PROMPTS §F6; CONTENT-PART4-FIX-PROMPTS §C-placementhonesty |

### Phase 6b — Voice Flash image_ref, drill breadth, Word of the Day (CF-24)

**Decisions implemented:** CF-24

| CF | What it fixes | Source doc + key |
|---|---|---|
| CF-24 | Voice Flash scaling: image_ref indirection (claimed) vs iconFor(fr) derivation (real) | PHASE-2-CONTENT-PLAN §c30; CONTENT-PART4-FIX-PROMPTS §D-imageref; _code_ |

### Phase 7 — The Den: greenfield 7-stage narrated lesson (CF-08, CF-09)

**Decisions implemented:** CF-04, CF-08, CF-09

| CF | What it fixes | Source doc + key |
|---|---|---|
| CF-04 | TTS provider: Azure Neural (Camille) primary vs Fish/ElevenLabs wired | CANONICAL-DECISIONS-AND-RECONCILIATION §C18; EALCH-MASTER-BLUEPRINT §c04; NARRATION-ENGINE-SPEC §C9; AUDIO-LESSON-SCRIPT-SYSTEM §C21; NARRATION-ENGINE-SPEC §C4; _code_ |
| CF-08 | The Den: 'already a 7-stage narrated lesson' vs net-new/unbuilt | AUDIO-LESSON-SCRIPT-SYSTEM §C2; AUDIO-SCRIPT-PILOT-A1-AU-CAFE §C6; THEME-CATALOGUE-AND-ARCHITECTURE §C09; NARRATION-ENGINE-SPEC §C1; EALCH-MASTER-BLUEPRINT §c12 |
| CF-09 | Pilot 'reuses the existing café roleplay and items' vs neither exists | AUDIO-LESSON-SCRIPT-SYSTEM §C3; AUDIO-SCRIPT-PILOT-A1-AU-CAFE §C6; AUDIO-SCRIPT-PILOT-A1-AU-CAFE §C12; AUDIO-SCRIPT-PILOT-A1-AU-CAFE §C13; AUDIO-SCRIPT-PILOT-A1-AU-CAFE §C11; _code_ |

### Phase 8 — Exam engine + schema (CF-12, CF-13, CF-22)

**Decisions implemented:** CF-12, CF-13, CF-16, CF-22

| CF | What it fixes | Source doc + key |
|---|---|---|
| CF-12 | Exam schema hooks 'already present' vs absent | EXAMINER-ENGINE-SPEC §C6; OPR-CONTENT-STUDIO-SPEC §C3; EALCH-MASTER-BLUEPRINT §c28; _code_ |
| CF-13 | Item skill taxonomy: CO/CE/PO/PE vs read/write/speak/listen | CANONICAL-DECISIONS-AND-RECONCILIATION §C11; EALCH-MASTER-BLUEPRINT §c09; OPR-CONTENT-STUDIO-SPEC §C16; THEME-CATALOGUE-AND-ARCHITECTURE §C03; _code_ |
| CF-16 | Placement: adaptive 12-18 item probe (target) vs single fake question still shipped | CONTENT-CURRICULUM-AND-GENERATION-PLAN §C18; CANONICAL-DECISIONS-AND-RECONCILIATION §C27; INDEPENDENT-LOOK-REVIEW §3.5; CONTENT-PART4-FIX-PROMPTS §F6; CONTENT-PART4-FIX-PROMPTS §C-placementhonesty |
| CF-22 | Third exam chip label: 'TCF Canada' vs generic 'TCF' | EXAMINER-ENGINE-SPEC §C29; CANONICAL-DECISIONS-AND-RECONCILIATION §C25; _code_ |

### Phase 9 — Identity & sync substrate (new)

_No CF decision cited directly; derived from the fresh code read and panel audit._

### Phase 10 — Subscription monetization + paywall/gating (was Phase 9a) (CF-14, CF-15, CF-23)

**Decisions implemented:** CF-14, CF-15

| CF | What it fixes | Source doc + key |
|---|---|---|
| CF-14 | Pricing: doc price points vs shipped Settings | MONETIZATION-AND-UNIT-ECONOMICS §C7; MONETIZATION-AND-UNIT-ECONOMICS §C8; MONETIZATION-AND-UNIT-ECONOMICS §C9; _code_ |
| CF-15 | Payment routing: web-checkout-first (Stripe/Paystack) vs RevenueCat IAP scaffolding | MONETIZATION-AND-UNIT-ECONOMICS §C5; MONETIZATION-AND-UNIT-ECONOMICS §C20; MONETIZATION-AND-UNIT-ECONOMICS §C18; README §C11 |

### Phase 11 — $39 exam tier (was Phase 9b) (CF-14)

**Decisions implemented:** CF-14, CF-25

| CF | What it fixes | Source doc + key |
|---|---|---|
| CF-14 | Pricing: doc price points vs shipped Settings | MONETIZATION-AND-UNIT-ECONOMICS §C7; MONETIZATION-AND-UNIT-ECONOMICS §C8; MONETIZATION-AND-UNIT-ECONOMICS §C9; _code_ |
| CF-25 | Amend schema before mass authoring: window open (17 items) vs partly closed | contentresearch §c7; contentresearch §c8; contentresearch §c10; contentresearch §c40; SCHEMA-EXTENSION-PLAN §commits 5-7; contentresearch §c5; _code_ |

### Cross-cutting invariants carried through every phase

**Decisions implemented:** CF-07

| CF | What it fixes | Source doc + key |
|---|---|---|
| CF-07 | Content plane: relational SQL tables vs bundled seed + Storage snapshot | CONTENT-CURRICULUM-AND-GENERATION-PLAN §C22; CONTENT-PART4-FIX-PROMPTS §B-tables; PHASE-2-CONTENT-PLAN §c13; EALCH-MASTER-BLUEPRINT §c32; INDEPENDENT-LOOK-REVIEW §5.4 |

---

## Part 2 — Document to Phases (reverse index)

For each source `.md`, the in-doc keys that were cited, the decisions they fed, and the phases that consume them. Docs not listed produced no surviving conflict citation (they may still have been reviewed; see `RUN-A-STATS.md`).

| Document | Cited keys | Decisions | Consumed by phases |
|---|---|---|---|
| AUDIO-LESSON-SCRIPT-SYSTEM | §C2, §C21, §C3 | CF-04, CF-08, CF-09 | Phase 4, Phase 7 |
| AUDIO-SCRIPT-PILOT-A1-AU-CAFE | §C11, §C12, §C13, §C6 | CF-08, CF-09 | Phase 7 |
| CANONICAL-DECISIONS-AND-RECONCILIATION | §C10, §C11, §C18, §C19, §C2, §C22, §C25, §C27, §C3 | CF-04, CF-06, CF-10, CF-11, CF-13, CF-16, CF-18, CF-22 | Phase 0, Phase 1, Phase 3, Phase 4, Phase 6, Phase 7, Phase 8 |
| CONTENT-CURRICULUM-AND-GENERATION-PLAN | §C18, §C22, §C25 | CF-05, CF-07, CF-16 | Cross-cutting invariants carried through every phase, Phase 0, Phase 1, Phase 2, Phase 3, Phase 6, Phase 8 |
| CONTENT-GENERATION-PIPELINE-SPEC | §C30 | CF-01 | Phase 5 |
| CONTENT-PART4-FIX-PROMPTS | §B-tables, §C-placementhonesty, §D-imageref, §F6 | CF-07, CF-16, CF-24 | Cross-cutting invariants carried through every phase, Phase 0, Phase 1, Phase 2, Phase 6, Phase 6b, Phase 8 |
| EALCH-MASTER-BLUEPRINT | §c04, §c05, §c09, §c12, §c15, §c16, §c22, §c25, §c26, §c28, §c32, §c36 | CF-01, CF-02, CF-03, CF-04, CF-06, CF-07, CF-08, CF-10, CF-11, CF-12, CF-13, CF-18 | Cross-cutting invariants carried through every phase, Phase 0, Phase 1, Phase 2, Phase 3, Phase 4, Phase 5, Phase 7, Phase 8 |
| EXAMINER-ENGINE-SPEC | §C29, §C6 | CF-12, CF-22 | Phase 0, Phase 1, Phase 8 |
| HOME-BUILD-1-AUDIT | §C12 | CF-19 | Phase 0 |
| HOME-FUNCTIONALITY-PLAN | §H4d, §H8b | CF-19, CF-23 | Phase 0 |
| INDEPENDENT-LOOK-REVIEW | §1.7, §1.9b, §3.2, §3.5, §5.4, §6.2, §health.2 | CF-01, CF-05, CF-07, CF-16, CF-19, CF-21, CF-23 | Cross-cutting invariants carried through every phase, Phase 0, Phase 1, Phase 2, Phase 3, Phase 5, Phase 6, Phase 8 |
| MONETIZATION-AND-UNIT-ECONOMICS | §C18, §C20, §C3, §C5, §C7, §C8, §C9 | CF-06, CF-14, CF-15 | Phase 3, Phase 10, Phase 11 |
| NARRATION-ENGINE-SPEC | §C1, §C4, §C9 | CF-04, CF-08 | Phase 4, Phase 7 |
| OPR-CONTENT-STUDIO-SPEC | §C16, §C3 | CF-12, CF-13 | Phase 1, Phase 8 |
| PHASE-2-CONTENT-PLAN | §c13, §c15, §c16, §c17, §c25, §c30 | CF-05, CF-07, CF-17, CF-24 | Cross-cutting invariants carried through every phase, Phase 1, Phase 2, Phase 3, Phase 6b |
| README | §C11, §C18, §C21, §C5 | CF-15, CF-20 | Phase 0, Phase 10 |
| SCHEMA-EXTENSION-PLAN | §C15, §C19, §commits 5-7 | CF-10, CF-11, CF-25 | Phase 1, Phase 11 |
| THEME-CATALOGUE-AND-ARCHITECTURE | §C03, §C05, §C06, §C09 | CF-01, CF-03, CF-08, CF-13 | Phase 1, Phase 5, Phase 7, Phase 8 |
| WELCOME-SCREEN-COMPONENT-SPEC | §C04 | CF-01 | Phase 5 |
| contentresearch | §c10, §c36, §c37, §c40, §c46, §c48, §c5, §c7, §c8 | CF-01, CF-02, CF-03, CF-21, CF-25 | Phase 0, Phase 1, Phase 5, Phase 11 |

---

## Part 3 — Decision legend (CF to source + phases)

| CF | Category | Title | Source docs + keys | Phases |
|---|---|---|---|---|
| CF-01 | pedagogy | SRS algorithm: FSRS-6 (specced) vs SM-2 (shipped) | CONTENT-GENERATION-PIPELINE-SPEC §C30; EALCH-MASTER-BLUEPRINT §c15; THEME-CATALOGUE-AND-ARCHITECTURE §C05; contentresearch §c36; INDEPENDENT-LOOK-REVIEW §3.2; WELCOME-SCREEN-COMPONENT-SPEC §C04 | Phase 5 |
| CF-02 | pedagogy | SRS card key: (user,item,modality) vs (user,item) | EALCH-MASTER-BLUEPRINT §c16; contentresearch §c37; _code_ | Phase 1, Phase 5 |
| CF-03 | pedagogy | Mastery definition: retention>=0.90 & reps>=3 vs no mastery concept | EALCH-MASTER-BLUEPRINT §c22; THEME-CATALOGUE-AND-ARCHITECTURE §C06; contentresearch §c48; _code_ | Phase 5 |
| CF-04 | narration | TTS provider: Azure Neural (Camille) primary vs Fish/ElevenLabs wired | CANONICAL-DECISIONS-AND-RECONCILIATION §C18; EALCH-MASTER-BLUEPRINT §c04; NARRATION-ENGINE-SPEC §C9; AUDIO-LESSON-SCRIPT-SYSTEM §C21; NARRATION-ENGINE-SPEC §C4; _code_ | Phase 4, Phase 7 |
| CF-05 | narration | Content-generation model: claude-sonnet-5 vs NVIDIA Nemotron | CONTENT-CURRICULUM-AND-GENERATION-PLAN §C25; INDEPENDENT-LOOK-REVIEW §6.2; PHASE-2-CONTENT-PLAN §c25 | Phase 2, Phase 3 |
| CF-06 | monetization | Coach cheap tier: Gemini 3 Flash vs NVIDIA/Anthropic chain | MONETIZATION-AND-UNIT-ECONOMICS §C3; EALCH-MASTER-BLUEPRINT §c05; CANONICAL-DECISIONS-AND-RECONCILIATION §C19 | Phase 3 |
| CF-07 | schema | Content plane: relational SQL tables vs bundled seed + Storage snapshot | CONTENT-CURRICULUM-AND-GENERATION-PLAN §C22; CONTENT-PART4-FIX-PROMPTS §B-tables; PHASE-2-CONTENT-PLAN §c13; EALCH-MASTER-BLUEPRINT §c32; INDEPENDENT-LOOK-REVIEW §5.4 | Cross-cutting invariants carried through every phase, Phase 1, Phase 2 |
| CF-08 | architecture | The Den: 'already a 7-stage narrated lesson' vs net-new/unbuilt | AUDIO-LESSON-SCRIPT-SYSTEM §C2; AUDIO-SCRIPT-PILOT-A1-AU-CAFE §C6; THEME-CATALOGUE-AND-ARCHITECTURE §C09; NARRATION-ENGINE-SPEC §C1; EALCH-MASTER-BLUEPRINT §c12 | Phase 7 |
| CF-09 | content | Pilot 'reuses the existing café roleplay and items' vs neither exists | AUDIO-LESSON-SCRIPT-SYSTEM §C3; AUDIO-SCRIPT-PILOT-A1-AU-CAFE §C6; AUDIO-SCRIPT-PILOT-A1-AU-CAFE §C12; AUDIO-SCRIPT-PILOT-A1-AU-CAFE §C13; AUDIO-SCRIPT-PILOT-A1-AU-CAFE §C11; _code_ | Phase 7 |
| CF-10 | schema | c2: content level vs scoring band only | CANONICAL-DECISIONS-AND-RECONCILIATION §C2; CANONICAL-DECISIONS-AND-RECONCILIATION §C3; EALCH-MASTER-BLUEPRINT §c25; SCHEMA-EXTENSION-PLAN §C15; _code_ | Phase 1 |
| CF-11 | schema | Den level cap sons/a1/a2 vs lift to all six bands | CANONICAL-DECISIONS-AND-RECONCILIATION §C10; EALCH-MASTER-BLUEPRINT §c26; SCHEMA-EXTENSION-PLAN §C19; _code_ | Phase 1 |
| CF-12 | exam | Exam schema hooks 'already present' vs absent | EXAMINER-ENGINE-SPEC §C6; OPR-CONTENT-STUDIO-SPEC §C3; EALCH-MASTER-BLUEPRINT §c28; _code_ | Phase 1, Phase 8 |
| CF-13 | schema | Item skill taxonomy: CO/CE/PO/PE vs read/write/speak/listen | CANONICAL-DECISIONS-AND-RECONCILIATION §C11; EALCH-MASTER-BLUEPRINT §c09; OPR-CONTENT-STUDIO-SPEC §C16; THEME-CATALOGUE-AND-ARCHITECTURE §C03; _code_ | Phase 1, Phase 8 |
| CF-14 | monetization | Pricing: doc price points vs shipped Settings | MONETIZATION-AND-UNIT-ECONOMICS §C7; MONETIZATION-AND-UNIT-ECONOMICS §C8; MONETIZATION-AND-UNIT-ECONOMICS §C9; _code_ | Phase 10, Phase 11 |
| CF-15 | monetization | Payment routing: web-checkout-first (Stripe/Paystack) vs RevenueCat IAP scaffolding | MONETIZATION-AND-UNIT-ECONOMICS §C5; MONETIZATION-AND-UNIT-ECONOMICS §C20; MONETIZATION-AND-UNIT-ECONOMICS §C18; README §C11 | Phase 10 |
| CF-16 | onboarding | Placement: adaptive 12-18 item probe (target) vs single fake question still shipped | CONTENT-CURRICULUM-AND-GENERATION-PLAN §C18; CANONICAL-DECISIONS-AND-RECONCILIATION §C27; INDEPENDENT-LOOK-REVIEW §3.5; CONTENT-PART4-FIX-PROMPTS §F6; CONTENT-PART4-FIX-PROMPTS §C-placementhonesty | Phase 0, Phase 6, Phase 8 |
| CF-17 | content | Sons/A1/A2 unit spine: PHASE-2 topic lists vs shipped curriculum | PHASE-2-CONTENT-PLAN §c15; PHASE-2-CONTENT-PLAN §c16; PHASE-2-CONTENT-PLAN §c17; _code_ | Phase 1 |
| CF-18 | architecture | STT-decision record location: flags.ts vs config.ts | CANONICAL-DECISIONS-AND-RECONCILIATION §C22; EALCH-MASTER-BLUEPRINT §c36; _code_ | Phase 0 |
| CF-19 | ui | Profile weakness engine: hardcoded 2-row list vs data-driven like Home | HOME-FUNCTIONALITY-PLAN §H4d; HOME-BUILD-1-AUDIT §C12; INDEPENDENT-LOOK-REVIEW §health.2 | Phase 0 |
| CF-20 | architecture | README service-fallback claims vs code that refuses fabrication | README §C5; README §C18; README §C21; _code_ | Phase 0 |
| CF-21 | pedagogy | Smart Review copy '1->3->7->21' vs SM-2 engine | INDEPENDENT-LOOK-REVIEW §1.9b; contentresearch §c46; _code_ | Phase 0, Phase 5 |
| CF-22 | exam | Third exam chip label: 'TCF Canada' vs generic 'TCF' | EXAMINER-ENGINE-SPEC §C29; CANONICAL-DECISIONS-AND-RECONCILIATION §C25; _code_ | Phase 0, Phase 8 |
| CF-23 | monetization | Settings fake billing block + Restore purchases: remove vs still present | HOME-FUNCTIONALITY-PLAN §H8b; INDEPENDENT-LOOK-REVIEW §1.7; _code_ | Phase 0 |
| CF-24 | schema | Voice Flash scaling: image_ref indirection (claimed) vs iconFor(fr) derivation (real) | PHASE-2-CONTENT-PLAN §c30; CONTENT-PART4-FIX-PROMPTS §D-imageref; _code_ | Phase 1, Phase 6b |
| CF-25 | schema | Amend schema before mass authoring: window open (17 items) vs partly closed | contentresearch §c7; contentresearch §c8; contentresearch §c10; contentresearch §c40; SCHEMA-EXTENSION-PLAN §commits 5-7; contentresearch §c5; _code_ | Phase 1, Phase 11 |

