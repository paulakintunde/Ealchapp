# Ealch Single-Source-of-Truth Decision Sheet

This sheet surfaces 25 open conflicts between the target-state specs and the shipped code, 21 cross-doc decisions collapsed into single duplicates, and 19 orphan ideas that appear in only one doc and may be worth reviving. Every conflict is UNRESOLVED and every recommendation is advisory; no winners have been picked for you. For each conflict, read the two sides, what the code actually does, the recommendation and its trade-off, then write your call on the "Your decision" line. Work top to bottom or jump by category tag ([pedagogy], [narration], [monetization], [schema], [architecture], [content], [exam], [ui], [onboarding]).

---

### CONFLICT #1 - [pedagogy] SRS algorithm: FSRS-6 (specced) vs SM-2 (shipped)
- Side A: The scheduler must be FSRS-6 because retrievability is the only defensible mastery number (about 20-30% fewer reviews than SM-2).  (CONTENT-GENERATION-PIPELINE-SPEC C30 / EALCH-MASTER c15 / THEME-CATALOGUE C05 / contentresearch c36)
- Side B: A working SM-2-shaped scheduler already exists and drives due counts, weak spots and Smart Review honestly.  (INDEPENDENT-LOOK 3.2 / WELCOME C04)
- Code says: progress.logic.ts:301-350 applyGrade is an SM-2 ease-factor ladder (MIN_EASE 1.3, MAX_EASE 3.0, 1 to 3 to interval x ease); no FSRS and no retrievability probability. SM-2 cannot compute the 0.90-retention figure other docs assume.
- Recommendation: Reframe every doc that asserts FSRS as-built to say "SM-2 today, FSRS-6 as a later upgrade"; keep SM-2 for launch (adequate at 17-item scale) and gate the FSRS migration behind a real need, since the mastery/headline claims (CF-03) depend on it.  - SM-2 is shipped, tested and honest; FSRS is a genuine efficiency and mastery-honesty upgrade but non-blocking. Docs currently advertise an algorithm the code does not run, which will misdirect anyone building against "the scheduler".
- If we drop the other side: If FSRS is dropped, the app loses the only algorithm that yields a decaying "items you can currently recall" number and a probabilistic mastery gate; if SM-2 is dropped prematurely, a working retention loop is rebuilt for marginal gain.
- Your decision: _I agree with the recommendation, there SM-2 to be kept and the other for future upgrade._________

### CONFLICT #2 - [pedagogy] SRS card key: (user,item,modality) vs (user,item)
- Side A: Cards must key on (user, item, modality) so recognise/produce/discriminate are separate memories, the voice-first learning decision.  (EALCH-MASTER c16 / contentresearch c37)
- Side B: One card per item is what ships; the attempt log has no modality dimension.  (code (progress.logic.ts))
- Code says: progress.logic.ts:303-399 srsCards keys purely on itemId; SrsCard and AttemptEntry carry no modality field. Recognition and production collapse into one schedule.
- Recommendation: Decide now whether to add a modality dimension to AttemptEntry/SrsCard before the corpus and attempt log grow, since retrofitting a modality split after users accumulate history is expensive (the doc's stated warning).  - A single card collapses "I know it" and "I can say it" into one interval, under-drilling production, the exact skill a speaking-first app sells. But adding modality roughly triples review load and needs sibling-gating (see orphan) to stay tolerable.
- If we drop the other side: Dropping the modality split makes the SRS blind to the recognise/produce gap that is the product's core; keeping it triples day-one review volume without the gating machinery.
- Your decision: Prefrence for A, add modalilty and separate cards__________

### CONFLICT #3 - [pedagogy] Mastery definition: retention >= 0.90 and reps >= 3 vs no mastery concept
- Side A: Mastery = retention >= 0.90 AND reps >= 3, never a single quiz; "complete" and "mastered" must be two separate words.  (EALCH-MASTER c22 / THEME-CATALOGUE C06 / contentresearch c48)
- Side B: The code has no mastery threshold; the closest proxy (itemsPracticed = >=1 correct) means "met", not "retained".  (code (progress.logic.ts:276))
- Code says: progress.logic.ts computes ratios/reps but defines no mastery constant, and the shipped SM-2 scheduler has no retrievability to compare against 0.90.
- Recommendation: Either encode a concrete two-factor mastery rule the SM-2 engine can actually compute (e.g. reps >= 3 AND interval >= N days) or defer the 0.90-retention definition until FSRS lands (CF-01); do not surface "mastered" anywhere until one is chosen.  - An explicit mastery bar keeps progress honest, but the specified 0.90 formula is uncomputable under SM-2, so the definition and the engine must be reconciled before any "mastered" UI ships.
- If we drop the other side: Without a mastery definition, den "learned" counts and any future "mastered" label conflate coverage with competence, the fabrication the whole honesty pass set out to remove.
- Your decision: __We will adopt Side A's philosophy of "honest progress" but implement Option 1 (The Quick Fix) for our current engine, while preparing the database for the smarter FSRS engine later. The Rule: A card is "Mastered" only when Reps $\ge$ 5 AND the Interval $\ge$ 21 days (without a recent failure).________

### CONFLICT #4 - [narration] TTS provider: Azure Neural (Camille) primary vs Fish/ElevenLabs wired
- Side A: TTS is Azure Neural (fr-FR, voice Camille) as primary for batch and live, with Fish Audio and ElevenLabs kept as options.  (CANONICAL C18 / EALCH-MASTER c04 / NARRATION C9 / AUDIO-LESSON C21)
- Side B: The Edge Function has no Azure path; its chain is custom(OpenAI-compatible) to Fish to ElevenLabs, and "azure" in the config enum has no implementation.  (NARRATION C4 / code)
- Code says: supabase/functions/tts/index.ts:100 chain=[customTts,fishAudio,elevenlabs]; config.ts:15 ttsProvider enum lists 'device'|'elevenlabs'|'azure' but no azure resolver exists; default 'device'.
- Recommendation: Reconcile the decision with the function: either add an Azure/OpenAI-neural resolver and lock the Camille voice by audition, or update the provider docs to endorse the Fish/OpenAI-compatible path already built. The config enum and the resolver set must be made to agree either way.  - The one provider the decision names as primary is unimplemented, and the providers implemented are the "fallback" ones; a single consistent Camille voice is a real brand/quality lever the docs preserve.
- If we drop the other side: Dropping Azure loses the specced single-consistent-neural-Camille voice; dropping the Fish/ElevenLabs reality means ignoring the only working server-side synthesis path.
- Your decision: _ We keep the Side A, we add an Azure/OpenAI-neural resolver and lock the Camille voice by audition. Go ahead and implemented, the providers implemented are the "fallback" ones; a single consistent Camille voice is a real brand/quality lever the docs preserve. _________

### CONFLICT #5 - [narration] Content-generation model: claude-sonnet-5 vs NVIDIA Nemotron
- Side A: Config names "claude-sonnet-5" as the content-generation model (a stale factual claim).  (CONTENT-CURRICULUM C25)
- Side B: Post-merge default orchestrator/content model is NVIDIA Nemotron, matched to the coach Edge Function cascade.  (INDEPENDENT-LOOK 6.2 / PHASE-2 c25)
- Code says: config.ts:23 models.content = 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning'; schema.sql:86 mirrors it. No claude-sonnet-5 as the content model (it appears only as the coach Anthropic fallback).
- Recommendation: Correct the curriculum doc's factual claim to Nemotron, then separately decide the intended content model. PHASE-2 D2 recommends a top-tier model while config answers Nemotron, so the target-vs-current gap should be recorded explicitly.  - This is both a stale doc fact and an open quality decision (cheap Nemotron drafts vs a mid/top model for content); leaving the doc asserting claude-sonnet-5 misleads anyone wiring generation.
- If we drop the other side: If the Nemotron reality is ignored, generation is planned against a model that is not configured; if the top-model recommendation is dropped, bulk content is drafted by a small model with known level-control degradation.
- Your decision: We keep Neotron and leave out claude, we can add a multipurpose socket that will be connected to the opr admin on port 4000. That can accept any api should this become an issue. If with have a kei ai api it should work, if we have open ai, or claude it should work. The NVIDIA right now stays default._________

### CONFLICT #6 - [monetization] Coach cheap tier: Gemini 3 Flash vs NVIDIA/Anthropic chain
- Side A: Coach runs on a cheap tier defaulting to Gemini 3 Flash at about $0.0015/turn, the only real recurring variable cost.  (MONETIZATION C3)
- Side B: Keep NVIDIA plus cheap-tier options (Gemini/DeepSeek) selectable via remote config.  (EALCH-MASTER c05 / CANONICAL C19)
- Code says: coach/index.ts:112-166 provider chain is AI_API to OpenRouter to NVIDIA nemotron to Anthropic claude-sonnet-5; no Gemini or DeepSeek is wired.
- Recommendation: Preserve "coach defaults to a cheap tier" as a hard cost rule regardless of provider, and either wire Gemini/DeepSeek or update the economics doc to cost the actual Nemotron/Anthropic chain; the unit-margin model in MONETIZATION depends on the per-turn figure being real.  - The whole contribution-margin story rests on a roughly $0.0015/turn coach; the code's chain has no Gemini and can fall through to Anthropic (5-8x cost), so the economic assumption is unverified.
- If we drop the other side: Dropping the cheap-tier rule risks the coach silently running an expensive model and breaking margins; dropping the specific Gemini claim just requires re-costing against the wired providers.
- Your decision: _Keep the cheap their and hold on to Side B_________

### CONFLICT #7 - [schema] Content plane: relational SQL tables vs bundled seed plus Storage snapshot
- Side A: Create content_units, content_items, audio_assets, content_releases SQL tables with RLS (published-only read) as the content plane.  (CONTENT-CURRICULUM C22 / CONTENT-PART4 B-tables)
- Side B: The content plane is a typed TS Corpus bundled as seed.json, cached in AsyncStorage, and OTA-updated via a Supabase Storage snapshot; the relational tables are rejected.  (PHASE-2 c13 / EALCH-MASTER c32 / INDEPENDENT 5.4)
- Code says: content.ts:1-161 implements seed to cache to Storage manifest with sha256 verify; ealch-admin DOES have a content_items table (drizzle) but there is no audio_assets or content_releases table and the app never reads content tables directly.
- Recommendation: Record the snapshot-over-tables model as canonical, but preserve the audio_assets manifest and content_releases pointer concepts as open items for Phase 7 (audio) and formal release tracking, since the Storage-blob approach has no equivalent and may limit partial sync/querying at volume.  - The blob-snapshot approach shipped and is offline-first with no 8000-row RLS surface, but the rejected relational design carries capabilities (per-row queries, level +/-1 partial sync, audio manifest) the current model lacks.
- If we drop the other side: Discarding the SQL-table design loses the audio_assets manifest and level +/-1 sync-scoping that become relevant once real audio ships or the single corpus blob grows large on Android.
- Your decision: __We reject both a pure relational live-query model (Side A) and a single monolithic global JSON blob model (Side B). Instead, we adopt a Hybrid Production Architecture that separates the Management Plane from the Delivery Plane.

[ Admin Dashboard ] ──(Drizzle Writes)──> [ Relational SQL Tables ]
                                                   │
                                            (Publish Trigger)
                                                   ▼
[ Student Mobile App ] <──(Level Sync)─── [ Sharded JSON Blobs ]
1. Management Plane (SQL Source of Truth)
Canonical Storage: The ealch-admin Drizzle schemas (content_items, content_units, and the newly added audio_assets manifest) are designated as the absolute source of truth.

The Admin Dashboard interacts directly with these relational tables to ensure safe, real-time, per-row data updates and content authoring.

2. Delivery Plane (Sharded Blobs via Storage)
Compilation Step: A "Publish" event triggers an automated pipeline that compiles the relational SQL rows into sharded JSON blobs separated by CEFR language levels (e.g., a1_content.json, a2_content.json) and uploads them to a Supabase Storage bucket.

App Ingestion: The client app reads a lightweight, version-controlled manifest pointer table to execute a Level +/- 1 scoped sync. The app downloads only the relevant level-specific JSON snapshots into local AsyncStorage, avoiding global blob parsing lag on Android.

Audio Assets: Heavy media assets are excluded from the JSON blobs entirely. The app uses the audio_assets database table to map IDs to asset URLs, caching audio files on-demand.________

**RESOLUTION — CF-07 (approved 2026-07-16): CONFIRMED (architecture) · EXTEND (schema, level-sharding, audio manifest) · GREENFIELD (content).**

The word "greenfield" here applies to the content corpus only, never to the pipeline. The Management-Plane / Delivery-Plane hybrid recorded above is already the shipped architecture and is not to be rebuilt.

_Built and confirmed — do not re-implement:_
- Author-in-database (OPR admin, `ealch-admin/`, Drizzle) as the source of truth.
- Compile step: `publish-content.ts` produces an sha256-checksummed `snapshots/v{n}.json` + `manifest.json`, uploads them to the Storage `content` bucket, writes a `content_snapshots` row, and commits `ealch-v2/src/content/seed.json`.
- App delivery: `content.ts` reads bundled seed, then local cache, then the over-the-air manifest (verified before merge), and never queries the live database at runtime.

_Extend in place — added by this decision, not yet built:_
- Level-sharded blobs (e.g. `a1_content.json`, `a2_content.json`) with a manifest pointer and a Level +/- 1 scoped sync, so the app downloads only nearby levels instead of one global blob. The current build ships a single global snapshot.
- An `audio_assets` manifest table mapping ids to media URLs, so heavy audio is excluded from the JSON blobs and cached on demand. No `audio_assets` table exists today.
- The Schema v2 fields the fuller corpus needs (modality, register, can-do, image_ref, exam entities, level-cap lift), authored in both the admin database and the app definitions in the same change so the two never disagree.

_Greenfield — the primary work:_
- The corpus itself. It currently holds about 17 items, all A1, with 3 lessons that reference no items. This is a placeholder to replace with a full, level-by-level body of content, and it is the main retention lever.

_Governed pipeline — systematize the OPR to database to app flow (enforced by machine, not memory):_
1. No silent loss: every field authored in OPR is guaranteed to reach the app, or the publish fails loudly.
2. No divergence: the admin allowed-value lists and the app allowed-value lists must always match; an automated check blocks any change that makes them disagree.
3. Safe updates: every content update passes through staged rollout, a freeze/kill switch, and rollback before reaching all users.
4. Real authoring lifecycle: draft to in-review to published is an enforced gate, so quality is checked systematically as volume grows.

_Corpus wiring:_ the 3 lessons that reference no items are connected to real items as part of the content build; a lesson pointing at an empty item list is not "complete." Tracked as a Phase 2 exit blocker.

_Net record:_ architecture confirmed as-built; schema and delivery extended (level-sharding, audio manifest, v2 fields); corpus is greenfield and primary; the whole flow is governed through OPR.

### CONFLICT #8 - [architecture] The Den: "already a 7-stage narrated lesson" vs net-new/unbuilt
- Side A: The Den is already a 7-stage guided narrated lesson walked by Camille in guided-autoplay or self-pace.  (AUDIO-LESSON C2 / AUDIO-SCRIPT-PILOT C6)
- Side B: The narrated 7-stage swipe lesson with Camille is net-new and does not exist; the Den is a track/unit listing and a lesson is a typed-section list.  (THEME-CATALOGUE C09 / NARRATION C1 / EALCH-MASTER c12)
- Code says: den.tsx:29-58 is a SONS/A1/A2 unit browser; lesson.tsx renders an ordered LessonSection[] then a quiz; no stage grouping, no Camille narrator, no guided-autoplay/self-pace toggle, no narration engine anywhere.
- Recommendation: Relabel the narration docs as greenfield build (not integration) and sequence the real dependencies - schema narration field plus validator, segment parser plus pause player, a 7-stage Den host - before authoring more scripts against a player that does not exist.  - Framing the 7-stage lesson as already-existing corrupts effort estimates and lets scripts accumulate with nothing able to play them; the honest state is that it is the flagship's largest unbuilt piece.
- If we drop the other side: Keeping the "already exists" framing hides that the flagship experience is 0% built; discarding the 7-stage design entirely loses the Den's intended pedagogical spine.
- Your decision: __We will officially classify the 7-stage narrated lesson as a greenfield build (0% built).

To prevent effort-estimation corruption and halt the accumulation of unplayable content, we are halting active script writing and shifting focus to core player infrastructure. The pedagogical spine of the Den remains intact, but it must be built from the ground up.________

### CONFLICT #9 - [content] Pilot "reuses the existing cafe roleplay and items" vs neither exists
- Side A: The A1 "Au cafe" pilot reuses the existing fr.a1.cafe theme AND the existing cafe roleplay, weaving corpus items the drills already key against.  (AUDIO-LESSON C3 / AUDIO-SCRIPT-PILOT C6/C12/C13)
- Side B: There is no cafe roleplay scenario and no standalone "un cafe" / "s'il vous plait" items; the only scenarios are sc.a1.marche and sc.a2.marche.  (code / AUDIO-SCRIPT-PILOT C11/C12)
- Code says: seed.json has fr.a1.cafe.001-020 (9 items) but zero cafe scenarios; roleplay.tsx loads 'marche'; 'un cafe' appears only in notes/a separate a1.04 lesson; 's'il vous plait' only embedded in cafe.004; 'merci' exists only as 'Merci beaucoup'.
- Recommendation: Before scaling narration scripts, either author a sc.a1.cafe scenario plus discrete corpus items (un cafe, s'il vous plait, merci, un the) and cite real item IDs, or rewrite the pilot to reference only existing IDs; enforce ID-existence at validate time so a script referencing a missing item/scenario fails publish.  - The pilot's "spaced recycling" and "reuse the roleplay" claims are unbacked; its INPUT/STORY stage has no scenario to reuse and its targets are not SRS-schedulable atoms.
- If we drop the other side: If the recycling claim is dropped without adding the items, the narrated lesson leaves no memory trace and cannot feed review; if the pilot is discarded, the 70/30 ratio and sequential-scaffold pedagogy should survive.
- Your decision: __The side b is out of touch, side a is close to reality. un cafe is no longer the scenario, this page pools from all learning component that the user needs to start with or stopped last.________

### CONFLICT #10 - [schema] c2: content level vs scoring band only
- Side A: Drop c2 from content LEVELS (sons..c1 only) and model it as a separate SCORE_BANDS list for scoring display only.  (CANONICAL C2/C3 / EALCH-MASTER c25 / SCHEMA-EXTENSION C15)
- Side B: Current code keeps c2 as a taggable content level.  (code)
- Code says: schema.ts:38 LEVELS=['sons','a1','a2','b1','b2','c1','c2']; ITEM_ID_RE and SCENARIO_ID_RE both accept c2; no SCORE_BANDS export. seed.json currently has no c2 content, so the split can be made without rejecting data (SCHEMA-EXTENSION C05).
- Recommendation: Make the LEVELS/SCORE_BANDS split now while zero c2 content exists, so validateItem cannot silently accept a c2-tagged item the product deliberately does not sell (no DALF C2).  - Multiple docs agree c2 is scoring-only, and the pre-check confirms no c2 content would break, so this is a cheap guardrail against exactly the drift the decision warns about.
- If we drop the other side: Leaving c2 in the content LEVELS union lets authors generate a C2 tier no launch exam requires; removing it costs nothing today but must precede mass authoring.
- Your decision: __Go with recommendation c2 is for scoring only________

### CONFLICT #11 - [schema] Den level cap sons/a1/a2 vs lift to all six bands
- Side A: Lift UNIT_ID_RE/LESSON_ID_RE (and TRACKS) to sons|a1|a2|b1|b2|c1 so the Den can hold the B1-B2 immigration wedge.  (CANONICAL C10 / EALCH-MASTER c26 / SCHEMA-EXTENSION C19)
- Side B: The regexes and TRACKS still stop at a2.  (code)
- Code says: schema.ts:96-97 UNIT_ID_RE/LESSON_ID_RE capped to (sons|a1|a2); schema.ts:43 TRACKS=['sons','a1','a2']. B1-C1 Den content is structurally impossible today.
- Recommendation: Treat the regex/TRACKS relaxation as a prerequisite gate for any B1-C1 or exam-prep content, since it blocks the Canada-first build order (this is linked to the immigration wedge duplicate).  - This is the one non-additive schema change the plans agree on, and it structurally blocks the prioritised upper-level content until made.
- If we drop the other side: Without the lift, the immigration/exam content the business prioritises cannot exist in the Den at all.
- Your decision: __We must remove the A2 ceiling in our database configuration before authoring or importing any advanced content. Relaxing these verification rules is an absolute prerequisite gate for the immigration-focused product launch. Its from Sons - C1________

### CONFLICT #12 - [exam] Exam schema hooks "already present" vs absent
- Side A: The content schema already has exam hooks - an exam_task payload and a roleplay_scenario.exam{} object - as a reusable foundation.  (EXAMINER C6 / OPR C3)
- Side B: No exam_task type and no exam{} field on Scenario exist anywhere; the exam data model is entirely greenfield.  (EALCH-MASTER c28 / code)
- Code says: schema.ts:226-234 Scenario carries id/level/theme/title/turns/version only; grep exam_task returns nothing; Corpus is units/lessons/items/scenarios. c2/c28 confirm "Scenario.exam already present" is factually wrong.
- Recommendation: Correct the build-status lines that claim exam hooks exist, then add the exam entities (ExamTask/ExamSeries, Scenario.exam{}, format_version) per SCHEMA-EXTENSION C26 before the Examiner is planned against, so the claim becomes true.  - Misrepresenting exam readiness corrupts sequencing for the premium wedge; the reuse idea (extend LessonSection/Scenario) is right but must be built, not asserted.
- If we drop the other side: Believing the hooks exist means the Examiner is scoped as an extension when it is greenfield schema work; discarding the design loses the natural home for exam metadata.
- Your decision: __Exam is a greenfield schema work ,  Correct the build-status lines that claim exam hooks exist, then add the exam entities (ExamTask/ExamSeries, Scenario.exam{}, format_version) per SCHEMA-EXTENSION C26 before the Examiner is planned against, so the claim becomes tru________

### CONFLICT #13 - [schema] Item skill taxonomy: CO/CE/PO/PE vs read/write/speak/listen
- Side A: Every Item is tagged with an exam skill CO/CE/PO/PE (and register, can_do, grammar_points, modality).  (CANONICAL C11 / EALCH-MASTER c09 / OPR C16 / THEME-CATALOGUE C03)
- Side B: The shipped skill union is read/write/speak/listen and lives only on LessonSection.practice, not on Items.  (code (schema.ts:63,182))
- Code says: schema.ts:63 SKILLS=['read','write','speak','listen']; Item (122-148) has no skill, register, can_do, grammar_points, or modality fields.
- Recommendation: Decide one canonical skill vocabulary (CO/CE/PO/PE aligns with CEFR/exam marking; read/write/speak/listen is simpler and shipped) and, if exam alignment is wanted, add the CO/CE/PO/PE tagging plus register/can_do/modality to Item before the corpus is authored.  - The exam engine and SRS modality split need the richer per-item tags; the current thin Item cannot support exam-skill views or a recognise-vs-produce schedule, and reconciling the two vocabularies late means re-tagging the corpus.
- If we drop the other side: Dropping CO/CE/PO/PE loses exam-skill alignment and per-item four-skill coverage; the read/write/speak/listen mapping cannot express oral vs written comprehension/expression.
- Your decision: __THis is to be reconstructed like a green field project, go with side A,_ (CO/CE/PO/PE aligns with CEFR/exam marking; read/write/speak/listen is simpler and shipped) and, if exam alignment is wanted, add the CO/CE/PO/PE tagging plus register/can_do/modality to Item before the corpus is authored.  - The exam engine and SRS modality split need the richer per-item tags_______

### CONFLICT #14 - [monetization] Pricing: doc price points vs shipped Settings
- Side A: Premium $9.99/mo and $59.99/yr (=$5/mo); a separate Exam tier at $14.99/mo; Africa PPP about $2-4/mo via Paystack.  (MONETIZATION C7/C8/C9)
- Side B: Settings shows $9.99/mo but $79/yr; no Exam tier; currencies limited to USD/EUR/GBP/CAD with no PPP/NGN tier.  (code (settings.tsx))
- Code says: settings.tsx:22 USD yr '$79' (yrmo '$6.58'); useStore Currency='USD'|'EUR'|'GBP'|'CAD'; no $14.99 plan, no Paystack, no local-currency tier.
- Recommendation: Reconcile the annual price ($59.99 target vs $79 shipped, which sits above the roughly $7-8/mo competitor cluster the doc cites as the wedge) and decide whether the Exam tier and Africa PPP pricing, both named as core differentiation, are launch scope or deferred.  - The two documented wedges (Africa PPP plus a distinct exam tier) are absent from code, and the shipped annual price contradicts the positioning; these are strategy-vs-build gaps, not mere unbuilt features.
- If we drop the other side: Keeping $79/yr abandons the sub-competitor annual positioning; dropping the Exam tier and PPP pricing discards the two revenue theses unique to this audience.
- Your decision: __I will go with Side b on this, also adding the currency versions in Side B, there will be an in app upgrade tier for additional $39 for exam mode________

### CONFLICT #15 - [monetization] Payment routing: web-checkout-first (Stripe/Paystack) vs RevenueCat IAP scaffolding
- Side A: Payment routing is web-checkout-first: Stripe web plus Paystack primary, IAP as fallback (the single biggest revenue lever, about 34% more kept per sub).  (MONETIZATION C5/C20)
- Side B: The only payment scaffolding present is a RevenueCat public-key placeholder, which is IAP-centric and pulls opposite to web-first.  (MONETIZATION C18 / README C11)
- Code says: env.ts:19-20 revenueCatKey placeholder only; no Stripe/Paystack code; upgrade() just sets premium locally. No react-native-purchases import either.
- Recommendation: Resolve the routing tension before wiring real checkout: either commit to web-first (add Stripe/Paystack, treat RevenueCat as IAP-only fallback) or accept RevenueCat/IAP and re-cost margins; the doc flags a time-sensitive Epic-ruling window worth re-checking.  - The scaffolded SDK contradicts the stated highest-leverage economic decision; building on RevenueCat by default silently forfeits the web-checkout margin the model depends on.
- If we drop the other side: Defaulting to IAP/RevenueCat gives up about $28/yr/subscriber vs web; dropping web-first without re-costing breaks the unit economics.
- Your decision: __As a new app, maintaining the revenuecat is good, side with B, but should have options for diversification after been established, if this will not be redundant for the app. we can wire the stripe for future. stripe to be avoided if complicated ________

### CONFLICT #16 - [onboarding] Placement: adaptive 12-18 item probe (target) vs single fake question still shipped
- Side A: Placement is a 12-18 item adaptive probe (vocab recognition to audio QCM to produced sentence) outputting A0..C1 and setting profiles.level.  (CONTENT-CURRICULUM C18 / CANONICAL C27)
- Side B: Placement is one hardcoded question with a fake "Q7" label and 58% bar, a mocked A2 result, writing to no store; the honesty cleanup was never applied.  (INDEPENDENT 3.5 / CONTENT-PART4 F6 / CONTENT-PART4 C-placementhonesty)
- Code says: placement.tsx:31/34/61/65 hardcoded isA2/estChip/58%/Q7; single drills.placementQuestion; "adaptive - the test ends when your level is confident" copy remains (148-152). Not written to any store.
- Recommendation: As an immediate step, either relabel honestly (single-question quick check, remove Q7/58%/"adaptive" copy) to avoid an Apple 2.3.1 fabricated-UI risk, or gate placement behind a real item bank; separately keep the 12-18 item adaptive design as the target.  - The shipped screen presents confident adaptive theatre over one question, a live store-review and trust risk, while the real adaptive probe is the intended end state; the two must not be conflated as done.
- If we drop the other side: Shipping the fake Q7/58% as-is risks App Store rejection and erodes trust on retake; dropping the adaptive-probe target leaves placement permanently a facade.
- Your decision: __This is will require a rebuild, I will be going with side A, A is the future plan, side B is a mock or demo that is coded. to be discarded for upgrade planned with side a. ________

### CONFLICT #17 - [content] Sons/A1/A2 unit spine: PHASE-2 topic lists vs shipped curriculum
- Side A: Sons units include semi-voyelles, Le R francais, liaisons, accent tonique; A1 1-4 = salutations/se presenter/nombres et l'heure/etre et avoir; A2 1-4 = passe compose avoir/etre/pronoms objets/futur proche.  (PHASE-2 c15/c16/c17)
- Side B: Shipped curriculum has different Sons units (no semi-voyelles/Le R/liaisons), A1 3-4 = genre/articles definis, and A2 1-4 = verbes reguliers/irreguliers/adjectifs/prepositions (passe compose is a2.05).  (code (curriculum.ts / seed.json))
- Code says: curriculum.ts:18-73 and seed.json encode the shipped spine; unit IDs are immutable (sons.03, a1.04, a2.01). Generating to the doc's lists would mint units/lessons whose IDs and topics do not line up with the Den tree and would break the level-discipline vocab gate.
- Recommendation: Before any generation, reconcile the plan's unit lists against curriculum.ts/seed.json and pick ONE canonical spine (the shipped one, since the Den renders it and IDs are immutable), rewriting lesson targets as concrete existing unit IDs.  - Two divergent unit spines mean generated content cannot slot into existing units and the teaching-order-based recycling gate has no single order to enforce.
- If we drop the other side: Following the doc's spine orphans generated content from the Den tree; abandoning the doc's topic choices (e.g. earlier liaisons, /y/-/u/, passe compose sequencing) loses pedagogically motivated ordering worth folding into the canonical spine.
- Your decision: __This will be a greenfield project both will be expanded. What is build is an incomplete version that has some other missing elements. The redesign will take into account a new curriculum flow, swapable lessons that goes deep into the topic with various steps, lessons, classes, features and more.________

### CONFLICT #18 - [architecture] STT-decision record location: flags.ts vs config.ts
- Side A: Record the on-device STT reversal in flags.ts.  (CANONICAL C22 / EALCH-MASTER c36)
- Side B: The STT decision is recorded in config.ts (sttProvider default 'device'), not flags.ts; flags.ts holds only oauth/forgotPassword.  (code)
- Code says: flags.ts:3-14 contains only oauth and forgotPassword; config.ts:26 sttProvider default 'device'. The specific action item (write it in flags.ts) is undone, though the intent (a durable record) is satisfied elsewhere.
- Recommendation: Note the location mismatch and either add the STT note to flags.ts or update the docs to point at config.ts as the record; this is a low-stakes bookkeeping reconciliation, not a functional gap.  - The decision is durably captured, just not where two docs say; leaving the docs asserting flags.ts sends readers to the wrong file.
- If we drop the other side: Minor. Only the provenance trail's discoverability is affected.
- Your decision: ___Side B wins in this case_______

### CONFLICT #19 - [ui] Profile weakness engine: hardcoded 2-row list vs data-driven like Home
- Side A: Profile's weakness engine should read the same topWeaknesses aggregation as Home, removing its hardcoded copy.  (HOME-FUNCTIONALITY H4d)
- Side B: Profile still renders a hardcoded two-item weak array (La liaison obligatoire / Voyelles nasales) routing all rows to openSheet('grammar').  (HOME-BUILD-1-AUDIT C12 / INDEPENDENT health.2)
- Code says: profile.tsx:159-162 hardcoded weak[] rendered at 402-436 from T.weakMeta, not derived from the error log; Home was made real (topWeaknesses) but Profile was not, a residual fabrication the re-reviews mostly missed.
- Recommendation: Wire Profile's weakness section to topWeaknesses(errors,today,7) exactly as Home does, so the two surfaces agree and Profile stops re-introducing fabricated weaknesses.  - A code-internal inconsistency: Home is honest, Profile is not, which reopens the exact distrust the honesty pass closed.
- If we drop the other side: Leaving Profile hardcoded means a fabricated-weakness surface survives on a screen users inspect for their real stats.
- Your decision: __This might no longer be correct has they are now in code for side B. However the advice is to reverify and also ensure its not. I will go with Side A on this one________

### CONFLICT #20 - [architecture] README service-fallback claims vs code that refuses fabrication
- Side A: Service ports have graceful fallbacks: NativeWind is configured; auth falls back to a local session; stt falls back to simulated capture.  (README C5/C18/C21)
- Side B: NativeWind was removed; auth returns AUTH_UNAVAILABLE rather than a fake session; stt reports available:false and never invents a transcript.  (code)
- Code says: metro.config.js notes NativeWind removed (no className anywhere); auth.ts:1-4 "no local fallback... fails honestly"; stt.ts:14-16 "NEVER invents a transcript... reports available:false". The README's fallback column is stale for these three.
- Recommendation: Update README to match the honest-failure design: no NativeWind, no fake auth session, no simulated STT; the real adapters remain accurate, only the fallback descriptions are wrong.  - The README documents fallbacks the code deliberately rejected on honesty grounds; leaving them invites someone to "restore" fabrication the app intentionally removed.
- If we drop the other side: Stale README claims could lead a contributor to reintroduce simulated capture or a fake session, undoing deliberate honesty guarantees.
- Your decision: __Side B more like it, Update README to match the honest-failure design: no NativeWind, no fake auth session, no simulated STT; the real adapters remain accurate, only the fallback descriptions are wrong.________

### CONFLICT #21 - [pedagogy] Smart Review copy "1 to 3 to 7 to 21" vs SM-2 engine
- Side A: Smart Review text promises items return in 1 to 3 to 7 to 21 days (a fixed Leitner ladder).  (INDEPENDENT 1.9b)
- Side B: The implemented scheduler is SM-2 (1 to 3 to interval x ease), so the shown ladder is not literal.  (code / contentresearch c46)
- Code says: progress.logic.ts:333-350 applyGrade SM-2 ladder; smartreview.tsx T.srLadder copy. (Note strings.ts:255 already reworded to "1 to 3 to 7 days...", so the copy is partly reconciled.)
- Recommendation: Reconcile copy and engine either way: adopt a fixed 1/3/7/21 Leitner ladder (simpler to explain) or reword the copy to describe SM-2 spacing honestly; do not display a literal schedule the engine does not follow.  - User-facing copy asserting a specific interval sequence the SM-2 engine does not produce is a small but real honesty mismatch on a trust-sensitive screen.
- If we drop the other side: A fixed ladder is easier to communicate; SM-2 gives better spacing but needs copy that does not promise exact day counts.
- Your decision: _We will keep the SM-2 calculation engine but update the UI text to describe the dynamic intervals honestly. Rather than promising rigid, literal days, we will explain that the app calculates custom review intervals tailored to the user's performance._________

### CONFLICT #22 - [exam] Third exam chip label: "TCF Canada" vs generic "TCF"
- Side A: Launch set is Canada/immigration: TEF Canada + TCF Canada + DELF B2.  (EXAMINER C29 / CANONICAL C25)
- Side B: Home chips are ['TEF Canada','DELF B2','TCF'] - the third is generic "TCF" and the order differs.  (code (home.tsx:122))
- Code says: home.tsx:122 exams=['TEF Canada','DELF B2','TCF']; all three route to /speak. The third chip's label and the order diverge from the resolved decision.
- Recommendation: Relabel the third chip to "TCF Canada" to match the resolved Canada-first launch set, or record that generic TCF is intended; trivial but worth aligning before the exam engine is wired.  - Small label drift on the paid-tier surface that immigration users read literally.
- If we drop the other side: Minor. Only exam-chip labeling accuracy is affected.
- Your decision: __Relabel the third chip to "TCF Canada" to match the resolved Canada-first launch set, or record that generic TCF is intended; trivial but worth aligning before the exam engine is wired.________

### CONFLICT #23 - [monetization] Settings fake billing block plus Restore purchases: remove vs still present
- Side A: Remove the fake billing block and delete the "Restore purchases" row (monetization-honesty fix).  (HOME-FUNCTIONALITY H8b)
- Side B: Settings still shows a hardcoded "Visa ....4212" and a Restore-purchases row with no handler.  (INDEPENDENT 1.7 / code (settings.tsx:285-299))
- Code says: settings.tsx:285-297 billing rows plus T.restore still present; :292 "Visa ....4212"; :295-299 Restore Press with no onPress. The alarm TimeWheel landed but this removal did not.
- Recommendation: Remove or wire the billing block and Restore row before any build reaches review, independent of the broader monetization decision, since a fabricated payment method is a concrete App Store rejection risk.  - An outstanding honesty fix that also carries store-review risk; the docs asked for its removal and it was not done.
- If we drop the other side: Shipping the fake "Visa ....4212" and dead Restore row risks App Store rejection and user distrust.
- Your decision: __Remove or wire the billing block and Restore row before any build reaches review, independent of the broader monetization decision, since a fabricated payment method is a concrete App Store rejection risk.  - An outstanding honesty fix that also carries store-review risk; the docs asked for its removal and it was not done.________

### CONFLICT #24 - [schema] Voice Flash scaling: image_ref indirection (claimed) vs iconFor(fr) derivation (real)
- Side A: The schema already has an audioRef-style indirection so voiceflash content need not be re-authored when the icon set scales; add image_ref.  (PHASE-2 c30 / CONTENT-PART4 D-imageref)
- Side B: The corpus carries no per-item icon field; voiceflash derives icons from the French string via iconFor(fr) over a hardcoded 5-icon map, so the scaling wall is only partly solved.  (code (voiceflash.tsx:17-19))
- Code says: voiceflash.tsx:17-19,264 iconFor(fr) with cup/house/book/sun/car and a vfBook fallback; Item schema has no icon/image_ref field, only audioRef. The doc's stated "indirection exists" rationale is inaccurate.
- Recommendation: Correct the rationale (no icon indirection exists) and decide the real mechanism: add an optional image_ref to Item (named icon | emoji | URL) with a fallback chain, so voiceflash can scale past the closed 5-icon set without re-authoring content.  - The scaling concern is real but the doc's premise is wrong; without a content-carried icon field, voiceflash is permanently capped at the hardcoded derivation.
- If we drop the other side: Without image_ref, Voice Flash cannot grow beyond words that map to the five hardcoded icons.
- Your decision: __The planning document's premise is incorrect—no dynamic icon mapping exists.

However, the scaling concern is absolutely valid. To prevent Voice Flash from being permanently locked into a tiny 5-icon set, we must introduce an optional image_ref field (which can accept an icon name, a Lucide identifier, or a remote asset URL) to our Item schema. We will then refactor the UI to prioritize this dynamic reference and only use the legacy hardcoded map as a safe fallback.________

### CONFLICT #25 - [schema] Amend schema before mass authoring: window open (17 items) vs partly closed
- Side A: Amend the schema (register on useCases, itemId plus per-distractor errorClass on quiz, audio on table/paradigm, new section types) BEFORE the corpus is written - every breaking change is free today.  (contentresearch c7/c8/c10/c40 / SCHEMA-EXTENSION commits 5-7)
- Side B: The "amend before authoring" window was skipped: 17 items and 3 lessons are already authored against the unchanged 12-type schema.  (contentresearch c5/c7 / code)
- Code says: schema.ts unchanged (12 section types; useCases {situation,fr,en} no register; quiz {q,opts,correct,why} no itemId/errorClass; table {cols,rows} no audio). seed.json has 17 items, small enough that migration is still cheap but no longer free.
- Recommendation: Land the highest-leverage schema deltas (useCases.register, quiz.itemId, table/audio) now while the corpus is only 17 items, before it grows and each change becomes a data migration plus re-record.  - The zero-cost window closed but the low-cost window is still open; delaying makes register-less French use cases and quiz answers that cannot feed the SRS permanent liabilities.
- If we drop the other side: Deferring the schema amendments turns a cheap 17-item migration into a large one and ships French use cases with no tu/vous and quiz misses that never reach the scheduler.
- Your decision: __We must execute the database schema migrations immediately.

While the zero-cost window has closed, the database is still incredibly small. Modifying 17 items and 3 lessons is a quick, low-cost afternoon task for a developer. If we wait until we have written hundreds of lessons and recorded hours of audio, implementing this schema change will require a massive, expensive data migration and re-recording effort.

If we delay, we permanently handicap our product: we will ship conversational examples that don't distinguish between formal/informal speech (tu / vous), and our quiz engine will not be able to feed our smart review scheduler when users miss a question..________

---

## Collapsed duplicates

These decisions recur across many docs and are treated as already-agreed (no conflict). Listed as topic - sources.

- Home is mode-first with mode buckets - CANONICAL C23, EALCH-MASTER c07, THEME-CATALOGUE C01/C19, WELCOME C01
- Pack = first-class theme x level bundle - CANONICAL C7, EALCH-MASTER c11, SCHEMA-EXTENSION C21
- 15 domains / 108 themes machine-readable catalogue - CANONICAL C5/C6, EALCH-MASTER c02, THEME-CATALOGUE C17, OPR C9, CONTENT-GEN C35
- Corpus sizing about 250-300 packs plus about 130-150 Den lessons - CANONICAL C16, EALCH-MASTER c03
- Provenance columns on every generated row - CONTENT-CURRICULUM C15, EALCH-MASTER c31, CONTENT-GEN C27, SCHEMA-EXTENSION C24, PHASE-2 c23
- Real per-user Entitlement replaces the fake premium boolean - CANONICAL C14, EALCH-MASTER c30, SCHEMA-EXTENSION C27, THEME-CATALOGUE C13
- Audio segment map beyond single audioRef - CANONICAL C13, EALCH-MASTER c29, SCHEMA-EXTENSION C25, NARRATION C10, contentresearch c64/c65
- On-device STT is installed, free and offline - CANONICAL C21, EALCH-MASTER c06, EXAMINER C4
- Three-layer content load that never blocks or throws - CONTENT-PART4 C-contentservice, EALCH-MASTER c42, INDEPENDENT 5.2/5.4, PHASE-2 c8, OPR C7, README C30
- schema.ts is a zero-runtime-import shared module - EALCH-MASTER c24, SCHEMA-EXTENSION C02, CONTENT-PART4 F4, HOME-BUILD-1 C13
- Append-only attempt log; SRS cards derived from it - EALCH-MASTER c18, THEME-CATALOGUE C16, contentresearch c38, HOME-FUNCTIONALITY C1
- Stable immutable IDs fr.<level>.<theme>.<seq> as SRS key - CONTENT-CURRICULUM C29, CONTENT-PART4 C-idscheme, OPR C2, PHASE-2 c4, THEME-CATALOGUE C02, contentresearch c17
- system_prompts RLS leaks prompt IP; restrict to active=true - CONTENT-CURRICULUM C35, CONTENT-PART4 B-rls11, PHASE-2 c24
- Native review (Gate H) is the real cost and the mandatory gate - CONTENT-GEN C20/C22, MONETIZATION C16, EXAMINER C17, PHASE-2 c28, CONTENT-CURRICULUM C28
- Exam copyright guardrails - CONTENT-CURRICULUM C34, EXAMINER C8/C9, CONTENT-PART4 B-examdisclaimer/B-examcheck, CONTENT-GEN C24
- Deterministic French correctness gates - CONTENT-GEN C12/C13/C14/C15/C33, EALCH-MASTER c33, contentresearch c66
- >=30% recycled vocab / <=8 new items comprehensible-input rule - CONTENT-CURRICULUM C17, CONTENT-GEN C3/C16, PHASE-2 c23/c27
- Versioned OTA snapshot with checksum and rollback - CONTENT-GEN C25, PHASE-2 c7, OPR C28, INDEPENDENT 5.3
- Seeded progress fakes deleted; only freeze:1 kept - HOME-BUILD-PROMPT C8/C23, HOME-BUILD-1 C21, WELCOME C06, HOME-FUNCTIONALITY C3/C4
- Immigration/Canada-first build order - CANONICAL C25, EALCH-MASTER c35, EXAMINER C29, MONETIZATION C21

## Orphans (possibly-lost good ideas)

Each appears in only one doc. Statement, doc, and why it may be worth reviving.

- Sibling gating: a produce card is not created until its recognise sibling reaches stability >= 7 days, so learners are never asked to produce words they cannot yet recognise. (EALCH-MASTER c17) - The essential pacing rule that makes the modality split (CF-02) tolerable by preventing a day-one review explosion. Worth reviving alongside any modality work.
- Weak-spot detection should rank by Wilson lower confidence bound with MIN_ATTEMPTS=8 over a 30-day window, not raw counts over 7 days. (contentresearch c39) - The shipped topWeaknesses ranks by raw count over 7 days; the Wilson-bound plus min-attempts approach is a cheap statistical hardening that avoids surfacing noise as a "weakness".
- Cap the daily review queue (e.g. 20/day) and present a backlog gently ("do 20 today, clear the rest over the week") rather than the raw due count. (contentresearch c68) - Named the single biggest churn event in the SRS category. dueCards()/reviewDueCount() currently return the full backlog uncapped, a high-value returning-user retention fix.
- Cache the shared instruction prefix across generation packs for about 90% input-cost reduction. (CONTENT-GENERATION-PIPELINE-SPEC C10) - A large, concrete cost lever for bulk generation that should survive into any generation-runner spec.
- Version-hash staleness: a prompt/schema/format change marks only affected items stale by version hash and enqueues just those for regen plus re-review, never the whole corpus. (CONTENT-GENERATION-PIPELINE-SPEC C28) - The optimization that avoids regenerating thousands of items on every prompt tweak; genuinely important once the corpus is large.
- Idempotency-keyed resumable generation runner: queue plus workers, key = hash(prompt_version + schema_version + inputs), building on the existing port/publish scripts. (CONTENT-GENERATION-PIPELINE-SPEC C29) - The orchestration layer that makes bulk regen cheap and safe; the port/publish scripts exist as anchors but the runner does not.
- Affiliate/immigration lead-gen as a 5-15% revenue top-up (italki/Preply tutoring, recurring course affiliates, TEF/TCF immigration leads). (MONETIZATION-AND-UNIT-ECONOMICS C14) - A modest but real supplemental revenue line uniquely fitted to this app's immigration audience; nothing in code or other docs references it.
- Reject Boss Fight (timed cumulative gate); replace with an untimed, advisory, skippable Checkpoint that writes to the SRS and never hard-gates paid content. (contentresearch c49) - A load-bearing product principle (no hard content gates for paying adults) embodied nowhere in code or other docs.
- Reject XP/levels; the honest headline is "items you can currently recall" (retrievability >= 0.90 and reps >= 3), a number that goes down with inaction. (contentresearch c47) - The no-XP stance is honored (no XP shipped) but the proposed honest recall headline needs FSRS (CF-01); a distinctive motivational-honesty idea worth preserving.
- Author error diagnosis on the content: QuizQ needs itemId plus per-distractor Choice.errorClass/why so a wrong answer is diagnosed in O(1) and feeds weak spots/SRS. (contentresearch c40) - Currently only a single lesson-level "why" exists; per-distractor diagnosis is a zero-runtime-cost, high-leverage error loop.
- Mark French text with fr-FR (accessibilityLanguage/lang on the TX component) so VoiceOver does not read French in the English voice. (contentresearch c26) - A concrete, cheap accessibility fix (TX has no lang prop) that no other doc raises.
- Teach "on" at A1 alongside nous, move negation and yes/no plus question words into the first third of A1 (they currently arrive at units 18-20 of 26), and add CEFR can_do statements to drive units. (contentresearch c50/c51/c52) - Concrete curriculum-sequencing fixes: a learner currently cannot ask or deny for two-thirds of A1, and units lack a communicative-function anchor.
- Sub-Item Token/Align on examples enabling story tap-a-word, inline clues and chunk alignment, with a tokensReconstruct hard publish gate. (contentresearch c65) - Enables tap-a-word comprehensible-input reading; not represented in schema or any other doc.
- Authoring collaboration primitives: autosave, a draft lock to prevent two editors clobbering, and inline threaded per-block comments. (OPR-CONTENT-STUDIO-SPEC C15) - Draft-lock/comments become necessary once more than one author works the corpus; the studio editor currently saves only on explicit click with no lock.
- Live device preview (phone frame plus real renderers incl. Camille narration) with a QR/deep-link to open a draft on device before publish. (OPR-CONTENT-STUDIO-SPEC C14) - Preview-before-publish catches render errors before they enter the OTA bundle; no equivalent exists and no other doc raises it.
- Restructure-with-migration: attaching/moving a pack to a curriculum node auto-applies domain/theme/level tags and any restructure rewrites tags via a migration with preview plus diff plus undo. (OPR-CONTENT-STUDIO-SPEC C11) - Protects published items from silent tag reassignment once a real corpus exists; a genuine data-safety idea.
- Positional deep-link anchors (<lessonId>#s<n>.<k>) derived from array index, invalidated on corpusVersion mismatch and never used as an SRS key, backing the error drawer's "see this in the lesson" link. (contentresearch c67) - The mechanism that lets an error point back into the exact lesson block without polluting the immutable SRS key space.
- Skip a Sepia mode: warm LIGHT.card from #FFFFFF to about #FDFBF6 to capture the sepia delta with a two-hex change and no third theme. (contentresearch c23) - A tiny, high-return reading-comfort tweak that avoids the cost of a whole third color mode.