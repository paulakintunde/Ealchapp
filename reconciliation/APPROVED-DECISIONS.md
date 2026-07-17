# Ealch SSOT - Approved Decisions (Run B input)

These 25 decisions are Paul-approved and are the ONLY intent Run B trusts. Three carry follow-up clarifications (CF-02, CF-07, CF-24). Flag-only reconciliation is complete; nothing here is open.

## CF-01 - [pedagogy] SRS algorithm: FSRS-6 (specced) vs SM-2 (shipped)

**Decision:** I agree with the recommendation, there SM-2 to be kept and the other for future upgrade.

## CF-02 - [pedagogy] SRS card key: (user,item,modality) vs (user,item)

**Decision:** Prefrence for A, add modalilty and separate cards

**CLARIFICATION (approved): include sibling-gating. A produce/discriminate card does not surface until its recognise sibling is learned, to cap daily review volume while keeping the modality split.**

## CF-03 - [pedagogy] Mastery definition: retention >= 0.90 and reps >= 3 vs no mastery concept

**Decision:** We will adopt Side A's philosophy of "honest progress" but implement Option 1 (The Quick Fix) for our current engine, while preparing the database for the smarter FSRS engine later. The Rule: A card is "Mastered" only when Reps $\ge$ 5 AND the Interval $\ge$ 21 days (without a recent failure).

## CF-04 - [narration] TTS provider: Azure Neural (Camille) primary vs Fish/ElevenLabs wired

**Decision:** We keep the Side A, we add an Azure/OpenAI-neural resolver and lock the Camille voice by audition. Go ahead and implemented, the providers implemented are the "fallback" ones; a single consistent Camille voice is a real brand/quality lever the docs preserve.

## CF-05 - [narration] Content-generation model: claude-sonnet-5 vs NVIDIA Nemotron

**Decision:** We keep Neotron and leave out claude, we can add a multipurpose socket that will be connected to the opr admin on port 4000. That can accept any api should this become an issue. If with have a kei ai api it should work, if we have open ai, or claude it should work. The NVIDIA right now stays default.

## CF-06 - [monetization] Coach cheap tier: Gemini 3 Flash vs NVIDIA/Anthropic chain

**Decision:** Keep the cheap their and hold on to Side B

## CF-07 - [schema] Content plane: relational SQL tables vs bundled seed plus Storage snapshot

**Decision:** We reject both a pure relational live-query model (Side A) and a single monolithic global JSON blob model (Side B). Instead, we adopt a Hybrid Production Architecture that separates the Management Plane from the Delivery Plane.

**CLARIFICATION (approved): Hybrid = author-in-DB, ship compiled snapshot. OPR studio edits normalized SQL tables (Management Plane); a build step compiles an immutable content snapshot (bundle + Storage) the app reads offline (Delivery Plane). The app never queries the live DB at runtime for core content.**

## CF-08 - [architecture] The Den: "already a 7-stage narrated lesson" vs net-new/unbuilt

**Decision:** We will officially classify the 7-stage narrated lesson as a greenfield build (0% built).

## CF-09 - [content] Pilot "reuses the existing cafe roleplay and items" vs neither exists

**Decision:** The side b is out of touch, side a is close to reality. un cafe is no longer the scenario, this page pools from all learning component that the user needs to start with or stopped last.

## CF-10 - [schema] c2: content level vs scoring band only

**Decision:** Go with recommendation c2 is for scoring only

## CF-11 - [schema] Den level cap sons/a1/a2 vs lift to all six bands

**Decision:** We must remove the A2 ceiling in our database configuration before authoring or importing any advanced content. Relaxing these verification rules is an absolute prerequisite gate for the immigration-focused product launch. Its from Sons - C1

## CF-12 - [exam] Exam schema hooks "already present" vs absent

**Decision:** Exam is a greenfield schema work ,  Correct the build-status lines that claim exam hooks exist, then add the exam entities (ExamTask/ExamSeries, Scenario.exam{}, formatversion) per SCHEMA-EXTENSION C26 before the Examiner is planned against, so the claim becomes tru

## CF-13 - [schema] Item skill taxonomy: CO/CE/PO/PE vs read/write/speak/listen

**Decision:** THis is to be reconstructed like a green field project, go with side A, (CO/CE/PO/PE aligns with CEFR/exam marking; read/write/speak/listen is simpler and shipped) and, if exam alignment is wanted, add the CO/CE/PO/PE tagging plus register/cando/modality to Item before the corpus is authored.  - The exam engine and SRS modality split need the richer per-item tags

## CF-14 - [monetization] Pricing: doc price points vs shipped Settings

**Decision:** I will go with Side b on this, also adding the currency versions in Side B, there will be an in app upgrade tier for additional $39 for exam mode

## CF-15 - [monetization] Payment routing: web-checkout-first (Stripe/Paystack) vs RevenueCat IAP scaffolding

**Decision:** As a new app, maintaining the revenuecat is good, side with B, but should have options for diversification after been established, if this will not be redundant for the app. we can wire the stripe for future. stripe to be avoided if complicated

## CF-16 - [onboarding] Placement: adaptive 12-18 item probe (target) vs single fake question still shipped

**Decision:** This is will require a rebuild, I will be going with side A, A is the future plan, side B is a mock or demo that is coded. to be discarded for upgrade planned with side a.

## CF-17 - [content] Sons/A1/A2 unit spine: PHASE-2 topic lists vs shipped curriculum

**Decision:** This will be a greenfield project both will be expanded. What is build is an incomplete version that has some other missing elements. The redesign will take into account a new curriculum flow, swapable lessons that goes deep into the topic with various steps, lessons, classes, features and more.

## CF-18 - [architecture] STT-decision record location: flags.ts vs config.ts

**Decision:** Side B wins in this case

## CF-19 - [ui] Profile weakness engine: hardcoded 2-row list vs data-driven like Home

**Decision:** This might no longer be correct has they are now in code for side B. However the advice is to reverify and also ensure its not. I will go with Side A on this one

## CF-20 - [architecture] README service-fallback claims vs code that refuses fabrication

**Decision:** Side B more like it, Update README to match the honest-failure design: no NativeWind, no fake auth session, no simulated STT; the real adapters remain accurate, only the fallback descriptions are wrong.

## CF-21 - [pedagogy] Smart Review copy "1 to 3 to 7 to 21" vs SM-2 engine

**Decision:** We will keep the SM-2 calculation engine but update the UI text to describe the dynamic intervals honestly. Rather than promising rigid, literal days, we will explain that the app calculates custom review intervals tailored to the user's performance.

## CF-22 - [exam] Third exam chip label: "TCF Canada" vs generic "TCF"

**Decision:** Relabel the third chip to "TCF Canada" to match the resolved Canada-first launch set, or record that generic TCF is intended; trivial but worth aligning before the exam engine is wired.

## CF-23 - [monetization] Settings fake billing block plus Restore purchases: remove vs still present

**Decision:** Remove or wire the billing block and Restore row before any build reaches review, independent of the broader monetization decision, since a fabricated payment method is a concrete App Store rejection risk.  - An outstanding honesty fix that also carries store-review risk; the docs asked for its removal and it was not done.

## CF-24 - [schema] Voice Flash scaling: image_ref indirection (claimed) vs iconFor(fr) derivation (real)

**Decision:** The planning document's premise is incorrect—no dynamic icon mapping exists.

**CLARIFICATION (approved): build the image_ref indirection now. Add explicit per-item image references so Voice Flash scales beyond derivable icons; iconFor(fr) becomes the fallback.**

## CF-25 - [schema] Amend schema before mass authoring: window open (17 items) vs partly closed

**Decision:** We must execute the database schema migrations immediately.

