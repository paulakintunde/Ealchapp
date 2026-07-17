# Content Batch 1 — Café theme breadth (first real authoring pass)

**Date:** 2026-07-17
**Goal:** Take the café theme from a starved 9 items to ~28, and make the new
items gate-clean, so every café drill has real depth and the Phase 6b breadth
warnings go quiet for this theme.

## Why café first

It is the app's flagship scene (the pilot narration script, the placement
sample, the Sentence Builder's one sentence are all café), so depth here is
felt everywhere. Current state, measured from the corpus:

- **9 café items**, all `flashcard + review` only — no voiceflash, no sentence.
- **0 have IPA** — so none can honestly drive Voice Flash (a pronunciation drill).
- Sentence Builder has exactly **one** café sentence (`fr.a1.cafe.020`).

## What this batch authors (19 new items → café = 28)

All new items are honest a1 café vocabulary, multi-drill, and IPA-complete.
Nouns carry their gender and their article (gender travels with the noun — the
Voice Flash principle), plus a natural café example sentence.

- **14 nouns** (`kind: word`, drills `flashcard + voiceflash + review`, with
  `ipa`, `gender`, `example`): un café, un thé, un croissant, une baguette, un
  jus d'orange, un chocolat chaud, le sucre, le lait, une tasse, le menu, la
  terrasse, le serveur, la monnaie, un verre. (ids `fr.a1.cafe.009`–`.023`,
  skipping the taken `.020`.)
- **2 short phrases** (`kind: phrase`, drills `flashcard + voiceflash + review`,
  with `ipa`): « Un café, s'il vous plaît », « C'est combien ? ».
- **3 sentences** (`kind: sentence`, drills `sentence + review`) for Sentence
  Builder breadth: « Je prends un café et un croissant. », « Je voudrais un thé,
  s'il vous plaît. », « Vous avez une terrasse ? ».

## What clears, after this batch

- **Theme breadth ≥20:** café reaches 28. ✓
- **Voiceflash-has-IPA:** every new voiceflash item carries IPA. ✓ (the 8 older
  café phrases stay `flashcard+review` for now — a later pass widens them; they
  are pre-existing single-drill warnings, not introduced here.)
- **Sentence Builder:** café sentences go 1 → 4, so its rotating deck is real.
- **Placement:** café gains 14 recognition-ready nouns, so the quick check can
  ask more than a handful and the fresh-words deck has depth.

## How it ships (the existing pipeline, no new machinery)

1. `scripts/author-cafe-batch.ts` — same transactional, validate-before-write,
   idempotent pattern as `author-practice.ts`: each item passes `validateItem`,
   then upserts into `content_items` as `published` in one transaction.
2. `pnpm content:practice`-style **dry run first** (`--dry-run`), then apply.
3. `pnpm content:publish` compiles a new snapshot → `validateCorpus` gate →
   machine-gate report → Storage + `content_snapshots` row + committed
   `seed.json`. This is the OTA channel; the app picks it up on next launch.
4. Device-verify on the Pixel: café flashcards deeper, Voice Flash shows café
   nouns with pronunciation, Sentence Builder rotates café sentences.

## Not in this batch (named so the scope is honest)

- Widening the 8 existing café phrases to multi-drill + IPA (a safe follow-up).
- Item pictures (`imageRef`) — needs the asset manifest + uploads (Phase 6b tail).
- A café Den lesson/unit — that is narrated-lesson territory (Phase 7).
