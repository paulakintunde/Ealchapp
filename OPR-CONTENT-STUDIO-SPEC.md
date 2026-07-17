# OPR Content Studio — Spec (port 4000 admin)

The content-authoring system inside the existing `ealch-admin` Next.js Ops Console (port 4000). Goal: a WordPress/Gutenberg-class authoring environment purpose-built for Ealch's learning content, that emits the **tagged, SRS-keyable `Item`s** the app schema already expects (`schema.ts`: every item tagged `level` + `theme`, IDs `fr.<level>.<theme>.<seq>`).

**What already exists to build on:** `ealch-admin/src/app/admin/content/**` (draft→in_review→published→archived pipeline), NextAuth + TOTP 2FA + **RBAC** + **audit log** (`src/lib/audit.ts`), feature-flag + staged-rollout system (`releases/FlagsCard.tsx`), and the mobile OTA content-snapshot mechanism (`src/services/content.ts` pulls a Supabase-Storage snapshot merged over bundled `seed.json`). The Studio is a large extension of the content section, not a greenfield app.

**The load-bearing principle:** authoring is not prose. Every block the author places must serialize into validated schema entities (`Item`, `Lesson`/`LessonSection`, `Scenario`, `exam_task`) with their tags, so the SRS scheduler and the app renderers consume authored content directly. WYSIWYG is a *view*; the source of truth is structured data.

---

## 1. Curriculum structure manager
The backbone. Everything else attaches here.
- **Visual curriculum tree:** Domain (15) → Theme (~108) → Pack (theme × level) → blocks. Drag-drop reorder, reparent, rename, create, archive.
- **Coverage matrix (the build cockpit):** a grid of Theme × Level × Mode showing each cell as empty / draft / in-review / published. This is how a 108-theme build is managed without losing track. Filter by `[exam]`/`[immig]`, by level, by missing-audio, by needs-native-review.
- **Structure = tagging space:** attaching a pack/block to a node auto-applies its `domain`, `theme`, `level` tags. Content can't be "untagged"; its position in the tree *is* its tags.
- **Restructure safely:** moving a node rewrites tags via a migration with a preview + diff + undo (never silently reassigns published items).
- **Den path editor:** order the level-sequenced guided lessons and their grammar-spine dependencies (which grammar a lesson assumes/introduces), so the guided path stays gap-free.

## 2. The content editor
- **Full-screen, distraction-free authoring** with left rail (block inserter + outline), canvas (blocks), right rail (block settings + item tags + validation).
- **Block model = Gutenberg-style:** insert, drag-reorder, duplicate, nest, transform block-to-block, copy/paste, keyboard-first. Each block is self-contained and independently editable.
- **Two edit modes, toggleable (WP-classic style):**
  - **WYSIWYG / visual** (default) — renders blocks as they'll appear on device.
  - **Source/HTML mode** — edit the underlying markup/structured payload directly for power users; round-trips back to blocks. (Guard: source edits are validated before they can re-serialize to blocks.)
- **Live device preview:** render the pack exactly as the app will (phone frame + real renderers), including Camille narration playback, before publish. QR/deep-link to open the draft on a real device or simulator.
- **Autosave + draft lock** (prevent two editors clobbering), inline **comments/annotations** for collaboration.

## 3. Block library
Generic blocks + language-learning blocks. Every block carries per-block metadata: `level`, `theme`, `skill` (CO/CE/PO/PE), grammar tags, target vocab, and emits the matching schema entity.

**Generic:** instruction / briefing · free-text (rich) · heading · image · audio clip · video lesson · callout/tip · divider · embed.

**Learning blocks (map to app renderers):**
- Flashcard / flashcard-deck (`{fr,en,ex,ipa,gender,audio}`, "never a bare noun" enforced)
- Voice-flash item (image/emoji + `{fr,en,key}` + audio)
- Sentence-builder puzzle (target + distractors, word-tokenisation aware so `un café` isn't split)
- Dictation sentence (audio at 2 speeds, accepted-answer variants, trap annotations: liaison/homophones)
- Minimal-pair / phonics (perception-before-production ordering)
- Roleplay turn / scenario (scene card: role, goal, register tu/vous; branch variants; exit criteria; optional exam mapping)
- Conjugation / paradigm table (generative, with audio per form)
- Grammar rule + examples (examples→rule→paradigm→assembly ordering)
- Cloze / fill-in-the-blank · matching · ordering
- MCQ / practice quiz (with `why` rationale + `itemId` link; distractors AI-generated then checked)
- Comprehension question set (attached to a story/episode/player block)
- Story / episode script (timestamps, per-line EN gloss, ≥90%-tokens-already-taught validator)
- Speaking / shadowing drill (records via STT, honest verdict, no fake %)
- Mini-assessment / checkpoint (advisory, never a hard gate)
- Cheat-sheet / recap (locked during practice)

## 4. Outline templates & content creation entry points
- **Outline presets** (the skeleton an author starts from), e.g. Intro → Objective → Key vocabulary → Listen & reply → Practice → Mini-assessment → Recap. Per lesson-type presets follow the four research formulas (phonics / vocabulary / grammar / conversation).
- **Create a new piece from:** blank · **template** (pack + outline templates per mode/level) · **AI draft** (see §5) · **import** (CSV/JSON word lists, sentence banks, exam banks; import existing `seed.json`) · **duplicate existing → rewrite** (clone a published pack as a new draft, e.g. reuse "Shopping·A2" structure for "Shopping·B1").

## 5. AI assist (draft + accelerate)
Uses the research's Master Prompt + job-spec. Every AI output lands as an *editable draft*, never auto-published.
- **Generate full pack draft** from (theme, level, mode) using the Master Prompt.
- **Per-block AI actions:** generate distractors · generate examples · **translate / gloss** · **simplify to a target level** · generate IPA · generate model answer + examiner notes (exam) · rewrite in register.
- **Inline audio generation:** generate Camille TTS per line (voice + pace), preview, regenerate, then human-approve → cached to media library. (Supports the hybrid narration: cache fixed lines, live-TTS only dynamic ones.)
- **AI cross-checks surfaced as warnings, not truths:** adversarial distractor check, level-discipline check (word length, tense scope), "bare noun" check.

## 6. Media library
- Assets: **image, audio, voice, video**, with folders, tags, search, reuse across content, replace-everywhere.
- **Storage:** Supabase/R2 (Gate R to resolve); transcodes/variants; CDN refs written to `Item.audioRef` etc.
- Per-asset: alt text, transcript/caption, **licensing & attribution** (for Pixabay/stock), source, usage list (where it's used).
- Voice assets track: voice model, pace, generated-vs-recorded, approved-by.

## 7. Localization / translation system
- Content is FR source + **gloss languages** (EN + future L1s — Gate G).
- Per-locale status (missing / draft / translated / reviewed) with a **translation memory** so repeated strings aren't re-translated.
- Translate three surfaces: item glosses, instruction/briefing copy, and app UI strings (`src/i18n/strings.ts`).
- AI-assisted translation with a human-review gate for high-stakes locales.

## 8. Review, roles & workflow
- **Roles (tie to existing RBAC):** Author · Editor · **Native Reviewer** (Gate H) · Translator · Admin/Publisher.
- **States:** draft → in_review → (native-review, when required) → approved → scheduled → published → archived. (Extends the existing pipeline.)
- **Workflow rules engine:** conditional gates by content type/level. E.g. *Sons/A1 and all exam model answers require native-reviewer sign-off*; *exam items require the legal disclaimer + `format_version`*; *auto-assign reviewer by theme domain*.
- **Review UI:** side-by-side draft, threaded comments per block, approve/request-changes with reasons, reviewer sign-off recorded.

## 9. Publishing
- **Publishing checklist (validation gates before a piece can go live):**
  - Schema/referential integrity (audioRef resolves, itemId valid, quiz links, no orphan blocks).
  - Pedagogy gates: "never a bare noun", perception-before-production ordering, ≥90% story tokens already taught, level-discipline.
  - Non-LLM gates: verb forms via a **deterministic conjugator**, `gender` via lexicon/human, cultural claims flagged for native review.
  - Assets present (audio generated + approved where required), IPA present.
  - Exam-specific: disclaimer string present, `format_version` set, rubric + model answer + examiner notes present.
  - Translation completeness for required locales.
- **Scheduling:** publish now · **schedule later (defer date/time)** · staged/percentage rollout via the existing flag/rollout system · **environment targeting (staging vs prod)**.
- **Publish action = build a new content snapshot** (the OTA bundle the app pulls) and push it; app picks it up via `content.ts`. Version-stamped and rollback-able.

## 10. Versioning, history & audit
- **Revision history per piece:** every save is a version; **diff view** (block-level); **restore/rollback** to any prior version.
- **Review history:** who reviewed, decisions, comments (kept with the piece).
- **Audit log** (extend existing `audit.ts`): who created/edited/published/scheduled/unpublished what, when.

## 11. Content types & schema management
- **Create new content types** (new activity/block kinds) with **custom fields**, a renderer contract, and validation rules — so new learning formats can be added without a code release where possible.
- Attach **workflow rules** to each type (which gates apply).
- Governance: schema changes are versioned and migration-checked against published content.

## 12. Content health / feedback loop (uses live app data)
Closes the loop between the SRS/attempt logs and authoring:
- Surface **leech/high-lapse items** ("this card is confusing, N users stuck") back to authors with a fix action.
- Flag items with fabricated/placeholder data still live.
- Per-pack completion & difficulty analytics feeding revision priorities. (Ties to the admin's existing performance boards.)

---

## Additions beyond the original list (things a system like this needs)
1. **Blocks must emit tagged `Item`s** — the whole point; without it, authored content can't be scheduled by the SRS.
2. **Coverage matrix** — the only sane way to drive a 108-theme × 6-band (Foundation/A1–C1) × multi-mode build.
3. **Inline audio (TTS) generation + approval** in the editor — required by the hybrid narration model.
4. **Non-LLM validation gates** (conjugator, gender lexicon, cultural review) — the research's "confidently-taught lie" defense.
5. **Native-reviewer role + sign-off gate** (Gate H) — the real quality/cost line for Sons/A1 and exam answers.
6. **Live device preview + snapshot-based publish** — because publishing = building the OTA content bundle the app already consumes.
7. **Restructure-with-migration** — moving curriculum nodes must safely rewrite tags on published content.
8. **Content-health feedback from SRS** — authored content improves from real usage, not guesswork.
9. **Bulk operations** — bulk tag/level-assign/publish, find-and-replace across the corpus.
10. **Import + duplicate-to-rewrite** at scale — seeds the corpus fast from word/sentence banks.

## Resolved decisions
- **A) New content types — fixed-but-rich now, custom-type builder later.** Ship a strong fixed block/type set extended in code; defer the full custom-type builder to a later phase.
- **B) Editor — adopt a block-editor base** (Gutenberg-like / BlockNote / Editor.js) and add Ealch's learning blocks on top; do not build bespoke.
- **C) Audio at publish — pre-generate + cache, live only for dynamic.** Den lessons and drill briefings must have generated + approved audio before publish; live TTS reserved for roleplay/coach.
