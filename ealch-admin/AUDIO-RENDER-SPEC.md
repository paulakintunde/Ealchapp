# AUDIO-RENDER-SPEC — one-time studio audio for lessons + la dictée

Status: **approved plan, not built** (Paul, 2026-07-21). This is the producer
side of Phase 7 audio. The consumer side already ships in the app.

> New `.md` files are gitignored in this repo — track this one with
> `git add -f ealch-admin/AUDIO-RENDER-SPEC.md`.

## Policy (the why)

Live TTS synthesis is the only audio path whose cost scales with installs, so
it is **never the shipping default**. The cost model is:

| Path | Cost shape | Role |
| --- | --- | --- |
| Device TTS (expo-speech) | zero, forever | default for drills/pronunciation, and the universal fallback |
| Pre-rendered ElevenLabs clips (this spec) | one-time credits per corpus version + ~zero hosting | lesson narration (Liam) + la dictée (Amélie/Léo) |
| Live synthesis (`tts` Edge Function + tts.ts remote path) | continuous, per character per device | authoring preview / emergency voice, opt-in via `ttsProvider: 'elevenlabs'` |

`config.ts DEFAULTS.ttsProvider = 'device'` encodes this policy app-side.

## What already exists (do not rebuild)

- **App playback**: `ealch-v2/src/services/audio.ts` — resolves `item.audioRef`
  from the content bucket, caches on disk, sha256-verifies when a checksum is
  known, falls back to device TTS on any failure.
- **URL resolution**: `contentAssetUrl()` in `ealch-v2/src/services/content.ts`
  (Supabase public `content` bucket today).
- **Ledger**: `audio_assets` table (`item_id`, `path`, `checksum`, `voice_id`,
  `duration_ms`; unique per item+voice).
- **Idempotency key**: `assetKey = hash(script|voice|provider|renderVersion)`
  on `content_items` and in the app schema (`AssetKeyed`).
- **Seek maps**: `AudioSegment[]` (`Item.segments`, lesson `audio` sections,
  `NarrationSegment.startMs/endMs`) — offsets into a rendered file.
- **Live-synth tooling**: `supabase/functions/tts/index.ts` (role → voice id
  mapping, model from `system_config.models.audio`), `tts.ts` remote path with
  on-device store. Kept as the preview/emergency path.

## Cast and model

| Role | Voice | Used for |
| --- | --- | --- |
| narrator | Liam (premade `TX3LPaxmHKxFdv7VOQHJ`) — energetic, social-media creator | lesson narration, `say` scripts, audio sections |
| amelie | Amélie — young, confident, friendly (fr-CA), Voice Library | la dictée |
| leo | Léo — gentle, enthusiastic (fr-CA), Voice Library | la dictée |

Amélie/Léo ids are minted per-account when added to My Voices — record them in
`ealch-admin/.env` as `ELEVENLABS_VOICE_AMELIE` / `ELEVENLABS_VOICE_LEO`.

Model: `eleven_multilingual_v2` (default; best fidelity for fr). `eleven_v3`
is a flag away (`ELEVENLABS_MODEL_ID` for the render script; `models.audio` in
`system_config` for the live path). `output_format=mp3_44100_128` (~1 MB/min).

**Dictée voice assignment**: the app currently alternates Amélie/Léo by
on-screen sentence index — that only governs the *live-synth* path. For
pre-rendered clips the voice is baked into the file, so the render script owns
the assignment: deterministic per item (even/odd of a stable hash of the item
id), recorded in `audio_assets.voice_id`. The app just plays the clip.

## The render script (to build)

`ealch-admin/scripts/render-audio.ts`, run as `pnpm audio:render`
(`--dry-run`, `--only <itemId|lessonId>`, `--target supabase|r2`). Follows the
house authoring pattern (`content:spine`, `content:practice`): transactional,
validates post-state before writing, idempotent.

1. **Enumerate render units** from the canonical DB:
   - every item with the `dictation` drill → its `fr`, voice per the
     assignment rule above;
   - every lesson narration segment / `audio` section / `say` script → Liam.
2. **Skip-if-done**: compute `assetKey`; skip units whose `audio_assets` row
   matches (this is what makes content updates re-render only the delta).
3. **Render** via the ElevenLabs TTS API (same endpoint as the edge fn).
4. **Upload** to the target bucket under `audio/<voice>/<assetKey>.mp3`.
5. **Ledger**: upsert `audio_assets` (path, sha256, voice_id, durationMs).
6. **Backfill** `content_items.audio_ref` + `asset_key` (and lesson-body
   `audioRef`s) in the same transaction.
7. **Publish** a snapshot (existing `publish-content.ts`) so refs reach
   devices OTA. Publish must fail a dangling `audioRef` exactly as it fails a
   dangling `itemId`.

Secrets stay **admin-side only** (`ELEVENLABS_API_KEY`, R2 keys in
`ealch-admin/.env`) — the app never holds a render credential.

## Hosting: R2 (approved) with Supabase as the stepping stone

- **Wave 1 may ship on the Supabase `content` bucket** — zero new wiring, the
  app already resolves it. Fine at small corpus size.
- **R2 is the end state** (zero egress fees): S3-compatible bucket + public
  custom domain. App change is one seam: `contentAssetUrl()` prefers a new
  `EXPO_PUBLIC_ASSET_BASE_URL` env over the Supabase-derived base. Clips keep
  their storage-relative paths, so migration = copy bucket + set one env.

## Client follow-through (small, app-side)

1. `contentAssetUrl()`: honor `EXPO_PUBLIC_ASSET_BASE_URL` (R2 seam).
2. `app/dictation.tsx`: play via `audio.speakItem` (clip-first) instead of
   `tts.speak`; keep the live alternation only as the TTS-fallback voice hint.
3. Lesson surfaces (`LessonPager`/`LessonRich`/narrated): adopt clip playback
   for segments carrying `audioRef`; device TTS remains the no-clip path.
4. Snapshot manifest: carry `path → sha256` for audio so `resolveClip` runs
   verified (the checksum socket in `audio.ts` is already there).

## Estimate

Current corpus text for lessons + dictée is small (tens of thousands of
characters); a much fuller wave at ~200k chars ≈ 200k credits ≈ one month of a
Creator/Pro ElevenLabs tier (**$22–$99 one-time per content wave**, subscription
active only in render months). Hosting: ~400 MB corpus ≈ $0 on R2. Runtime
marginal cost per user: **$0**.

## Open decisions (Paul)

1. R2 account/bucket name + custom domain (or explicitly ship wave 1 on
   Supabase Storage).
2. Confirm the deterministic dictée voice rule (hash-parity per item) — or
   hand-pick voices per item in the studio.
3. Scope of wave 1: dictée items + which lessons.
