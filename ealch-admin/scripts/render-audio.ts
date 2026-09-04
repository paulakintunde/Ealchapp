// RENDER-AUDIO — the producer side of Phase 7 audio (AUDIO-RENDER-SPEC.md).
//
// Pre-renders studio ElevenLabs clips for the two surfaces that are allowed to
// carry ONE-TIME synthesis cost (see the spec's cost table): la dictée
// (Amélie/Léo) and lesson narration (Liam). Everything else keeps speaking via
// on-device TTS forever — that policy is enforced app-side by
// `config.ts DEFAULTS.ttsProvider = 'device'`, not by this script.
//
// Usage (from ealch-admin/):
//   pnpm audio:render --dry-run                 enumerate + report, render nothing
//   pnpm audio:render                            render + upload to R2 (default), write refs
//   pnpm audio:render --target supabase          upload to the Supabase `content` bucket instead
//   pnpm audio:render --only fr.a1.cafe.014      just that item (a dictée item id)
//   pnpm audio:render --only sons.03.l1          just that lesson (renders every pending
//                                                 audio section + narration segment in it)
//   pnpm audio:render --exam                     ONLY the exam listening documents
//
// USE --exam FOR EXAM WORK. An unscoped run also picks up every unrendered
// dictée item and lesson unit in the corpus, which is three orders of magnitude
// more spend than the 30 listening documents a paper needs.
//
// Idempotent (skip-if-done, spec step 2): `assetKey = sha256(text|voiceId|provider|
// renderVersion)`. A unit whose current stored key already matches is skipped, so a
// partial/interrupted run — or a content edit that only touched a few items — costs
// only the delta on the next pass. Because of that, this script commits PER RENDER
// UNIT (items) / PER LESSON (lesson audio), not in one giant transaction around the
// whole batch: a run over hundreds of paid ElevenLabs calls must leave durable
// progress behind if it dies partway, not roll all of it back.
//
// ── Render units (spec step 1) ──────────────────────────────────────────────
//   1. every item carrying the `dictation` drill → its `fr` text, voice = Amélie
//      or Léo, picked deterministically per item (even/odd of sha256(item.id)) —
//      the pre-rendered file bakes in a voice the live path only picks at
//      playback time, so the render script is what owns the assignment now.
//   2. every lesson `{ type: 'audio' }` section → its `lines` (joined into one
//      file — no per-line timings, see the segments note below), voice = Liam.
//   3. every `Lesson.narration.stages[].segments[]` entry that is a spoken
//      NarrationSegment (not a NarrationInteraction — those have no text to
//      speak) → its `text`, voice = Liam. (Not `seg.voice`-dependent casting:
//      the spec casts ALL lesson narration to Liam; `NarrationSegment.voice`
//      is an en/fr LANGUAGE hint used only to pick ElevenLabs' language_code,
//      same as item 2.)
//
//   4. every section's `say` script → the coach line the Listen chip plays,
//      voice = Liam, language en. Stored on the SECTION's own `audioRef`.
//
//      This was previously listed here as un-renderable, on the grounds that
//      "SectionExtras has no sibling `audioRef`". That is no longer true: the
//      field exists on SectionExtras, and LessonPager's `listen()` already
//      passes it straight to speakItem as
//      `{ fr: sayText, audioRef: currentSection?.audioRef }`. The read path
//      was already there, so this is storage that is used, not invented.
//
//      Both `say` shapes are covered — the bare string and the v2
//      `{text, voice, timing}` object — by reading through `narrationOf()`,
//      which is the same accessor the app uses.
//
// ── Deliberately NOT rendered here, and why ─────────────────────────────────
//   The OTHER `say` surfaces — TapRow.say, TapRow.detail.say, flashcards
//   cards[].say — are still device-TTS-only. Those are per-ROW and per-CARD
//   strings inside a section, and the schema gives a row or a card nowhere to
//   record a ref; only the section has `audioRef`. Rendering clips with nowhere
//   valid to record them would be spend with no read path. Land a per-row ref
//   first if that surface is ever wanted.
//
// ── The `audio_assets` ledger is ITEM-scoped only ───────────────────────────
//   `audio_assets.item_id` is `NOT NULL REFERENCES content_items(id)` (see
//   0006_audio_assets.sql) — there is no row shape for a clip that belongs to
//   a LESSON rather than an item. So:
//     - dictée items get the full treatment: an `audio_assets` row (the
//       ledger) AND `content_items.audio_ref`/`asset_key` backfilled.
//     - lesson audio (sections + narration segments) is idempotency-tracked
//       by embedding the assetKey directly in the lesson JSON body — the
//       `audio` section already has an `assetKey` field for this; a bare
//       `NarrationSegment` does not, so its key is recovered from the
//       filename stem of its own `audioRef` on the next run (see
//       `assetKeyFromRef`). No `audio_assets` row is written for lesson audio.
//       This is the correct reading of the ledger table's own doc-comment
//       ("it dies with the item"), not a shortcut.
//
// ── R2 upload: hand-rolled SigV4, not @aws-sdk/client-s3 ────────────────────
//   R2 is S3-compatible, so the obvious dependency is @aws-sdk/client-s3 — but
//   it is not installed in this workspace, this task is barred from running
//   `pnpm install`, and `tsc --noEmit` must pass as written. Adding the
//   package to package.json without installing it would make this file fail
//   to typecheck today. A single-PUT SigV4 signer is ~40 lines of
//   `node:crypto` and needs no dependency at all — clips are a few hundred KB,
//   nowhere near where multipart upload would matter. If the team later
//   prefers the official SDK, swapping `putToR2` for an S3Client call is a
//   contained, optional refactor.
//
// Secrets (ealch-admin/.env, admin-side only — the app never holds these):
//   ELEVENLABS_API_KEY                         required to render (not for --dry-run)
//   ELEVENLABS_VOICE_LIAM                       optional, defaults to the premade id below
//   ELEVENLABS_VOICE_AMELIE, ELEVENLABS_VOICE_LEO   required for any dictée render unit
//   ELEVENLABS_MODEL_ID                         optional, defaults to eleven_multilingual_v2
//   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET   required for --target r2
//     (R2_PUBLIC_BASE_URL already exists in .env for the app's EXPO_PUBLIC_ASSET_BASE_URL
//      seam — this script does not need it, it only writes storage-relative paths)
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY     required for --target supabase
//
// Not this script's job (spec step 7): once refs are backfilled, run
// `pnpm content:publish` to ship them OTA. publish-content.ts does not yet
// hard-fail a dangling `audioRef` the way it fails a dangling itemId — the
// nearest existing gate is the imageRef note at publish-content.ts's
// machine-gates block ("resolvability is not machine-checked until the asset
// manifest lands"). That gate is a separate, pre-existing gap this script does
// not touch or worsen: every ref this script writes points at bytes it just
// finished uploading, so within this script's own writes there is no
// dangling ref to catch.

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { putToR2, sha256Hex, r2Configured } from './lib/r2.ts';
import { resolve as resolvePath, dirname as dirnameOf } from 'node:path';
import { fileURLToPath as fileUrlToPath } from 'node:url';
import {
  billableChars,
  castDocument,
  examAssetKey,
  gapsFor,
  parseTurns,
  interlocutorTurnPaths,
  registerFor,
  registerKeyFor,
  type CastTurn,
  type SlotName,
} from './lib/examAudio.ts';
import { loadVoices, voiceIdFor as castVoiceId, type Cast } from './lib/voices.ts';
import { haveFfmpeg, stitchClips } from './lib/stitch.ts';
import { createHash, createHmac } from 'node:crypto';
import {
  validateItem,
  validateLesson,
  isNarrationInteraction,
  narrationOf,
  type Item,
  type Lesson,
  type LessonSection,
  type NarrationSegment,
  type SectionExtras,
} from '../../ealch-v2/src/content/schema.ts';

/* ─── CLI ────────────────────────────────────────────────────────────────── */

const argv = process.argv.slice(2);
const DRY_RUN = argv.includes('--dry-run');
/**
 * Render ONLY the exam listening documents.
 *
 * Without this, an unscoped run also picks up ~15,800 dictée items and ~1,900
 * lesson units, none of which this phase asked for. The exam work is 30
 * documents; the difference is three orders of magnitude of spend, and a flag
 * is cheaper than finding out.
 */
const EXAM_ONLY = process.argv.includes('--exam');

const onlyIx = argv.indexOf('--only');
const ONLY: string | null = onlyIx === -1 ? null : (argv[onlyIx + 1] ?? null);
if (onlyIx !== -1 && !ONLY) {
  console.error('\n✖ --only needs a value (an item id or a lesson id)\n');
  process.exit(1);
}

const targetIx = argv.indexOf('--target');
const TARGET_RAW = targetIx === -1 ? 'r2' : argv[targetIx + 1];
if (TARGET_RAW !== 'r2' && TARGET_RAW !== 'supabase') {
  console.error(`\n✖ --target must be "r2" or "supabase", got "${TARGET_RAW}"\n`);
  process.exit(1);
}
const TARGET: 'r2' | 'supabase' = TARGET_RAW;

function die(msg: string): never {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

/* ─── Cast + model (mirrors ealch-v2/supabase/functions/tts/index.ts) ──────── */

// ElevenLabs premade "Liam" — same default the live tts Edge Function falls
// back to when no env override is set. Kept identical on purpose: whichever
// path renders a given line, it should be the same voice unless someone
// deliberately recasts both.
const LIAM_FALLBACK = 'TX3LPaxmHKxFdv7VOQHJ';
const LIAM = process.env.ELEVENLABS_VOICE_LIAM ?? LIAM_FALLBACK;
const AMELIE = process.env.ELEVENLABS_VOICE_AMELIE ?? null;
const LEO = process.env.ELEVENLABS_VOICE_LEO ?? null;
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID ?? 'eleven_multilingual_v2';

// Bump this to force a full re-render of everything (a voice_settings change,
// a model swap, a fix to how text is assembled) — it is one of the four
// assetKey inputs the spec names, so a bump changes every computed key at once.
const RENDER_VERSION = 1;

// Real ElevenLabs ceiling is model-dependent (multilingual_v2 comfortably past
// 5000, v3 caps there) — this is a sanity ceiling for a BATCH job, not the live
// path's 2400-char cost cap (that cap exists to bound per-request spend on a
// path billed continuously; a one-time render has no such pressure). Catching
// an oversized unit here, before any call is made, beats an opaque 400 from
// ElevenLabs mid-batch.
const MAX_RENDER_CHARS = 5000;

type Role = 'narrator' | 'amelie' | 'leo';

/** Role → raw ElevenLabs voice id. Dies (not silently falls back to Liam) when
 *  a dictée unit needs Amélie/Léo and the env var is unset — a batch that
 *  quietly records the wrong voice for hundreds of items is a worse failure
 *  than one that stops and says exactly what is missing. narrator has no such
 *  gap: LIAM always resolves, per the fallback above. */
function resolveVoiceId(role: Role): string {
  if (role === 'narrator') return LIAM;
  if (role === 'amelie') {
    if (!AMELIE) return unsetVoice('ELEVENLABS_VOICE_AMELIE');
    return AMELIE;
  }
  if (!LEO) return unsetVoice('ELEVENLABS_VOICE_LEO');
  return LEO;
}

/**
 * A dictée voice that is not configured.
 *
 * A real run cannot proceed: it would spend a credit on the wrong voice. A DRY
 * run can, and must — otherwise a machine that has never been set up to render
 * dictée audio cannot preview anything else either, and previewing is the
 * whole point of the flag. The placeholder is obviously fake in the output.
 */
function unsetVoice(envName: string): string {
  if (!DRY_RUN) die(`${envName} is not set — cannot render dictée audio (see ealch-admin/.env).`);
  return `UNSET-${envName}`;
}

/** Deterministic per-item Amélie/Léo split (spec: "even/odd of a stable hash
 *  of the item id"). Voice is baked into the FILE for a pre-rendered clip, so
 *  unlike the live path's alternate-by-sentence-index, this must be a pure
 *  function of the id — the same item must always land the same voice, run
 *  to run, or every re-render would also be a silent recast. */
function dicteeRoleFor(itemId: string): 'amelie' | 'leo' {
  const h = createHash('sha256').update(itemId).digest();
  return h[0] % 2 === 0 ? 'amelie' : 'leo';
}

/** hash(script|voice|provider|renderVersion) — the app's AssetKeyed contract
 *  (schema.ts). Keyed on the RESOLVED voice id, not the role name: a role's
 *  underlying id changing (recast Amélie in ElevenLabs) must produce a new
 *  key, or the ledger would keep serving the old actor's clip forever. */
function computeAssetKey(text: string, voiceId: string): string {
  return createHash('sha256').update(`${text}|${voiceId}|elevenlabs|${RENDER_VERSION}`).digest('hex');
}

function storagePath(voiceId: string, assetKey: string): string {
  return `audio/${voiceId}/${assetKey}.mp3`;
}

/**
 * The size of an object already in the bucket, or null if it is not there.
 *
 * The path is content-addressed, so an object AT that path IS the document the
 * key describes — same turns, same voices, same settings. Asking before
 * synthesising turns a lost database pointer into a HEAD request instead of a
 * re-render.
 *
 * Uses the PUBLIC base rather than a signed request: these clips are public
 * assets and a HEAD is the cheapest possible question. A network failure
 * reports absent, which costs a re-render and never a wrong pointer.
 */
async function bucketHas(path: string): Promise<number | null> {
  const base = process.env.R2_PUBLIC_BASE_URL;
  if (!base) return null;
  try {
    const res = await fetch(`${base.replace(/\/$/, '')}/${path}`, { method: 'HEAD' });
    if (!res.ok) return null;
    const n = Number(res.headers.get('content-length') ?? 0);
    return n > 0 ? n : null;
  } catch {
    return null;
  }
}

/** Point one exam part at a clip, with its measured length. */
async function writePartRef(
  client: { query: (q: string, v: unknown[]) => Promise<{ rowCount: number | null }> },
  unit: { taskId: string; partIndex: number },
  path: string,
  durationS: number
): Promise<void> {
  const res = await client.query(
    `update content_exam_tasks
        set parts = jsonb_set(
              parts, $2::text[],
              (parts->$3::int) || jsonb_build_object('audioRef', $4::text, 'durationS', $5::int),
              false),
            updated_at = now()
      where id = $1`,
    [unit.taskId, `{${unit.partIndex}}`, unit.partIndex, path, durationS]
  );
  if (res.rowCount !== 1) throw new Error(`update touched ${res.rowCount} rows for ${unit.taskId}`);
}

/** Recover the assetKey embedded in a previously-written path's filename —
 *  the fallback idempotency check for NarrationSegment, which has no assetKey
 *  field of its own (see the header note on the ledger being item-scoped). */
function assetKeyFromRef(ref: string | null | undefined): string | null {
  if (!ref) return null;
  const base = ref.split('/').pop() ?? '';
  return base.endsWith('.mp3') ? base.slice(0, -4) : null;
}

/* ─── ElevenLabs ─────────────────────────────────────────────────────────── */

/** Same endpoint, model resolution and voice_settings as the live tts Edge
 *  Function — this is a batch job with its own secrets (ELEVENLABS_API_KEY
 *  read directly from env, not looked up via system_config), so it calls
 *  ElevenLabs directly rather than proxying through that function. */
async function renderClip(
  text: string,
  voiceId: string,
  lang: 'fr' | 'en',
  /** Per-slot prosody from VOICES-<format>.md. Empty keeps the defaults below,
   *  which is what every non-exam unit uses. */
  settings: Record<string, number> = {}
): Promise<Buffer> {
  const key = process.env.ELEVENLABS_API_KEY;
  if (!key) die('ELEVENLABS_API_KEY is not set (see ealch-admin/.env).');
  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'xi-api-key': key },
      body: JSON.stringify({
        text,
        model_id: MODEL_ID,
        // multilingual_v2 rejects language_code; v3/flash accept it — identical
        // conditional to the live path, so a model swap behaves the same in both.
        ...(!MODEL_ID.startsWith('eleven_multilingual_v2') ? { language_code: lang } : {}),
        // The casting file's numbers win where it gives any. The assetKey does
        // NOT hash them, so changing a setting without bumping renderVersion
        // leaves the old clip in place — that is called out in VOICES-*.md.
        voice_settings: {
          stability: settings.stability ?? 0.5,
          similarity_boost: settings.similarity ?? settings.similarity_boost ?? 0.75,
          ...(settings.style !== undefined ? { style: settings.style } : {}),
          ...(settings.speed !== undefined ? { speed: settings.speed } : {}),
        },
      }),
      signal: AbortSignal.timeout(60_000), // batch job, not a live request — longer leash than the edge fn's 25s
    }
  );
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`elevenlabs ${res.status}: ${body.slice(0, 300)}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

/** CBR estimate, not a decode: mp3_44100_128 is 128kbps constant, so
 *  duration_ms ≈ bytes / 16 (128_000 bits/s ÷ 8 ÷ 1000). Good enough for the
 *  ledger's advisory `duration_ms` column; swap for a real decode (ffprobe)
 *  if a consumer ever needs exact timing from this column specifically. */
function estimateDurationMs(bytes: Buffer): number {
  return Math.round(bytes.length / 16);
}

/* ─── Storage: R2 (hand-rolled SigV4 PUT) ───────────────────────────────────
 * See the header note: no @aws-sdk/client-s3 dependency, on purpose. Single
 * PUT, unsigned streaming not needed (payloads are small render clips). */

/* ─── Storage: Supabase `content` bucket (wave-1 fallback) ──────────────────
 * Same bucket publish-content.ts uploads snapshots to. A local binary-body
 * helper rather than reusing snapshot-utils.ts's uploadToStorage(), which is
 * JSON-content-type only and shared by the publish/rollback path — safer not
 * to touch that shared file for a one-off binary upload. */

async function putToSupabase(path: string, body: Buffer, contentType: string): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) die('Supabase upload needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in ealch-admin/.env.');
  const res = await fetch(`${url}/storage/v1/object/content/${path}`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable', // content-addressed path (assetKey) — never changes under one key
      'x-upsert': 'true',
    },
    body: new Uint8Array(body),
  });
  if (!res.ok) {
    throw new Error(`Storage upload failed for ${path}: HTTP ${res.status} ${await res.text().catch(() => '')}`);
  }
}

async function uploadAudio(path: string, body: Buffer): Promise<void> {
  if (TARGET === 'r2') {
    // The credential check used to live inside putToR2. It moved out with the
    // signer, so it is asserted here instead — without it a missing key fails
    // as an opaque signing error rather than as the one-line fix it is.
    if (!r2Configured()) {
      die(
        'R2 upload needs R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET in ealch-admin/.env ' +
          '(--target supabase is the fallback if R2 is not provisioned yet).'
      );
    }
    await putToR2(path, body, 'audio/mpeg');
  }
  else await putToSupabase(path, body, 'audio/mpeg');
}

/* ─── Render units ───────────────────────────────────────────────────────── */

type ItemUnit = {
  kind: 'item';
  item: Item;
  role: 'amelie' | 'leo';
  lang: 'fr';
  text: string;
};

type LessonAudioUnit = {
  kind: 'lessonSection';
  sectionIndex: number;
  role: 'narrator';
  lang: 'fr';
  text: string;
};

type LessonNarrationUnit = {
  kind: 'lessonNarration';
  stageIndex: number;
  segmentIndex: number;
  role: 'narrator';
  lang: 'fr' | 'en';
  text: string;
};

/** A section's `say` narration — the coach line the Listen chip plays.
 *
 *  Cast to the narrator voice in English, like a NarrationSegment with
 *  `voice: 'en'`: `say` is coach script, the app speaks it with `lang: 'en-US'`
 *  (LessonPager's `listen()`), and the spec casts all lesson narration to Liam. */
type LessonSayUnit = {
  kind: 'lessonSay';
  sectionIndex: number;
  role: 'narrator';
  lang: 'en';
  text: string;
};

type LessonUnit = LessonAudioUnit | LessonNarrationUnit | LessonSayUnit;

/**
 * One listening document.
 *
 * Unlike every other unit here, this is not one voice saying one thing. A
 * micro-trottoir is three people and an interview is two, and the candidate's
 * task in blocks C, E and F is partly to tell them apart — so the unit is a
 * TURN LIST, rendered per turn and stitched with real gaps.
 *
 * Idempotency follows the lesson pattern rather than the item one: `ExamPart`
 * has an `audioRef` and no `assetKey` field, so the key is recovered from the
 * ref's own filename stem (see assetKeyFromRef). No `audio_assets` row is
 * written, for the same reason lesson audio writes none: the ledger is keyed
 * on `item_id` and a listening document is not an item.
 */
/**
 * One turn of a recorded interlocutor.
 *
 * NOT a listening document, and the difference is the whole design. A document
 * is stitched into one file because a candidate hears it start to finish. An
 * interlocutor's turns are played ONE AT A TIME, chosen by what the candidate
 * just asked, so each turn is its own clip with its own ref — stitching them
 * would produce a recording of an examiner answering questions nobody put.
 *
 * `durationS` matters here for the same reason it does on a part: the
 * component waits that long before handing the turn back to the candidate.
 */
type InterlocutorTurnUnit = {
  kind: 'interlocutorTurn';
  taskId: string;
  taskLabel: string;
  turnId: string;
  /** jsonb path into the task's `interlocutor` column. */
  path: string[];
  text: string;
  slot: SlotName;
  currentRef: string | null;
};

type ExamPartUnit = {
  kind: 'examPart';
  taskId: string;
  taskLabel: string;
  partIndex: number;
  partLabel: string;
  block: string;
  cast: CastTurn[];
  currentRef: string | null;
};

/** Walks one lesson body for every render-eligible span — `audio` sections,
 *  narration segments, and `say` scripts. */
function collectLessonUnits(lesson: Lesson): LessonUnit[] {
  const units: LessonUnit[] = [];

  // `say` scripts. The header used to say these were unrenderable because
  // "SectionExtras has no sibling audioRef" — that is out of date. The field is
  // there, and LessonPager's `listen()` already hands it to speakItem as
  // `{ fr: sayText, audioRef: currentSection?.audioRef }`, so a ref written
  // here is read by the app today with no further change.
  //
  // Idempotency comes from the ref's own filename stem, the same way a
  // NarrationSegment's does; no assetKey field is added to SectionExtras for
  // it. See assetKeyFromRef.
  (lesson.sections as LessonSection[]).forEach((sec, i) => {
    const text = narrationOf(sec as SectionExtras)?.text?.trim();
    if (text) {
      units.push({ kind: 'lessonSay', sectionIndex: i, role: 'narrator', lang: 'en', text });
    }
  });

  (lesson.sections as LessonSection[]).forEach((sec, i) => {
    if (sec.type === 'audio' && sec.lines.length > 0) {
      units.push({
        kind: 'lessonSection',
        sectionIndex: i,
        role: 'narrator',
        lang: 'fr',
        // One file per section, not per line: there is no forced-alignment
        // step in this build to produce per-line startMs/endMs, so `segments`
        // stays whatever it already was (untouched) and the section plays
        // start-to-finish, exactly like it does today on device TTS.
        text: sec.lines.join('\n'),
      });
    }
  });

  const stages = lesson.narration?.stages ?? [];
  stages.forEach((stage, si) => {
    stage.segments.forEach((seg, gi) => {
      if (isNarrationInteraction(seg)) return; // nothing to speak
      const s = seg as NarrationSegment;
      if (s.text.length > 0) {
        units.push({
          kind: 'lessonNarration',
          stageIndex: si,
          segmentIndex: gi,
          role: 'narrator',
          lang: s.voice === 'en' ? 'en' : 'fr',
          text: s.text,
        });
      }
    });
  });

  return units;
}

/** What's already recorded for a lesson unit, read back from the lesson body
 *  itself (there is no audio_assets row for these — see header). */
/** Where a lesson unit sits, for an error a human can act on. One function so
 *  a new unit kind is a compile error here rather than a silent `undefined` in
 *  a message somebody reads at 2am. */
function lessonUnitLabel(unit: LessonUnit): string {
  switch (unit.kind) {
    case 'lessonSection':
    case 'lessonSay':
      return String(unit.sectionIndex);
    case 'lessonNarration':
      return `${unit.stageIndex}.${unit.segmentIndex}`;
  }
}

function existingLessonAssetKey(lesson: Lesson, unit: LessonUnit): string | null {
  if (unit.kind === 'lessonSection') {
    const sec = lesson.sections[unit.sectionIndex] as Extract<LessonSection, { type: 'audio' }>;
    return sec.assetKey ?? assetKeyFromRef(sec.audioRef);
  }
  if (unit.kind === 'lessonSay') {
    const sec = lesson.sections[unit.sectionIndex] as SectionExtras;
    return assetKeyFromRef(sec.audioRef);
  }
  const seg = lesson.narration!.stages[unit.stageIndex].segments[unit.segmentIndex] as NarrationSegment;
  return assetKeyFromRef(seg.audioRef);
}

function applyLessonAudioRef(lesson: Lesson, unit: LessonUnit, path: string, assetKey: string): void {
  if (unit.kind === 'lessonSection') {
    const sec = lesson.sections[unit.sectionIndex] as Extract<LessonSection, { type: 'audio' }>;
    sec.audioRef = path;
    sec.assetKey = assetKey;
    return;
  }
  if (unit.kind === 'lessonSay') {
    // Only `audioRef` is written. A `say` clip belongs to the section's
    // narration, and the section's own `audioRef` is exactly what the app
    // reads for it; adding a parallel assetKey field to SectionExtras would
    // change the shared schema for an idempotency detail the filename already
    // carries.
    const sec = lesson.sections[unit.sectionIndex] as SectionExtras;
    sec.audioRef = path;
    return;
  }
  const seg = lesson.narration!.stages[unit.stageIndex].segments[unit.segmentIndex] as NarrationSegment;
  seg.audioRef = path; // no assetKey field on NarrationSegment — see assetKeyFromRef
}

/* ─── Main ───────────────────────────────────────────────────────────────── */

async function main() {
  console.log(`→ ${describeTarget()}`);
  console.log(`  target bucket: ${TARGET}`);
  if (DRY_RUN) console.log('  (dry run — nothing will be rendered, uploaded, or written)');
  if (ONLY) console.log(`  scope: --only ${ONLY}`);
  if (EXAM_ONLY) console.log('  scope: --exam (listening documents only)');

  if (!process.env.DATABASE_URL) die('No DATABASE_URL. This renders against the canonical database, never PGlite.');
  if (!DRY_RUN && !process.env.ELEVENLABS_API_KEY) {
    die('ELEVENLABS_API_KEY is not set (see ealch-admin/.env). Use --dry-run to preview without it.');
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  let rendered = 0;
  let skipped = 0;
  /** Units whose voice is not configured, so their state cannot be assessed. */
  let unknown = 0;
  /** Units whose bytes were already in the bucket — re-pointed, not re-bought. */
  let recovered = 0;
  let uploadedBytes = 0;

  try {
    /* ── 1. Items carrying the dictation drill ─────────────────────────── */

    const itemRows = EXAM_ONLY ? { rows: [] } : await client.query(
      `select id, kind::text as kind, level::text as level, theme, fr, en, ipa, respell,
              gender::text as gender, example, notes, tags, drills::text[] as drills,
              audio_ref, image_ref, segments, asset_key, version
         from content_items
        where 'dictation' = any(drills)
          and status <> 'archived'
          and ($1::text is null or id = $1)
        order by id`,
      [ONLY]
    );

    const itemUnits: ItemUnit[] = itemRows.rows.map((r) => {
      const item: Item = {
        id: r.id,
        kind: r.kind,
        level: r.level,
        theme: r.theme,
        fr: r.fr,
        en: r.en,
        ...(r.ipa ? { ipa: r.ipa } : {}),
        ...(r.respell ? { respell: r.respell } : {}),
        ...(r.gender ? { gender: r.gender } : {}),
        ...(r.example ? { example: r.example } : {}),
        ...(r.notes ? { notes: r.notes } : {}),
        tags: r.tags ?? [],
        drills: r.drills ?? [],
        audioRef: r.audio_ref ?? null,
        ...(r.image_ref ? { imageRef: r.image_ref } : {}),
        ...(r.segments ? { segments: r.segments } : {}),
        ...(r.asset_key ? { assetKey: r.asset_key } : {}),
        version: r.version,
      };
      return { kind: 'item', item, role: dicteeRoleFor(item.id), lang: 'fr', text: item.fr };
    });

    /* ── 2. Lessons: audio sections + narration segments ───────────────── */

    const lessonRows = EXAM_ONLY ? { rows: [] } : await client.query<{ id: string; body: Lesson }>(
      `select id, body from content_units
        where kind = 'lesson'
          and status <> 'archived'
          and ($1::text is null or body->>'id' = $1)
        order by body->>'id'`,
      [ONLY]
    );

    type LessonBundle = { rowId: string; lesson: Lesson; units: LessonUnit[] };
    const lessonBundles: LessonBundle[] = lessonRows.rows
      .map((r) => ({ rowId: r.id, lesson: r.body, units: collectLessonUnits(r.body) }))
      .filter((b) => b.units.length > 0);

    /* ── 2b. Exam parts: the listening documents ───────────────────────── */

    const examRows = await client.query<{
      id: string;
      label: string | null;
      format: string;
      level: string | null;
      parts: { label: string; text?: string; audioRef?: string | null }[] | null;
    }>(
      `select id, label, format::text as format, level::text as level, parts
         from content_exam_tasks
        where skill = 'CO'
          and parts is not null
          and status <> 'archived'
          and ($1::text is null or id = $1)
        order by id`,
      [ONLY]
    );

    const examUnits: ExamPartUnit[] = [];
    for (const row of examRows.rows) {
      // The casting register, per format. TEF reads a block letter off the task
      // label; TCF reads the band, because it has no blocks. Deriving it here
      // by slicing the label was silently wrong for TCF: 'Compréhension orale ·
      // A1' begins with C, so every document would have been cast and paced as
      // a TEF block C micro-trottoir with nothing failing.
      // TWO KEYS, and conflating them re-rendered 118 clips that had not
      // changed. `block` is the SPEED key and must stay the épreuve's own
      // division — the block letter on TEF, the band on TCF. The CASTING key is
      // computed per part below, because TEF's block G is five sub-types
      // wearing one letter and a micro-trottoir is cast from block C's voices
      // while still being paced at block G's speed.
      const block =
        row.format === 'tcf_canada'
          ? registerKeyFor({ format: row.format, taskLabel: row.label ?? '', partLabel: '', level: row.level })
          : (row.label ?? '').replace(/^Section\s+/i, '').trim().slice(0, 1).toUpperCase() || 'G';
      (row.parts ?? []).forEach((part, i) => {
        if (!part.text) return;
        examUnits.push({
          kind: 'examPart',
          taskId: row.id,
          taskLabel: row.label ?? row.id,
          partIndex: i,
          partLabel: part.label,
          block,
          // Block G is five sub-types wearing one letter, so ITS register comes
          // from the part label rather than the block — which is why the key is
          // recomputed per part here and not reused from above. On TCF the band
          // is the key and the part label changes nothing.
          cast: castDocument(
            parseTurns(part.text),
            registerKeyFor({ format: row.format, taskLabel: row.label ?? '', partLabel: part.label, level: row.level })
          ),
          currentRef: part.audioRef ?? null,
        });
      });
    }

    /* ── 2c. Interlocutor turns: the recorded examiner ─────────────────── */

    type Turn = { id: string; text: string; audioRef?: string | null };
    type Bank = { opening: Turn; answers: Turn[]; catchAll: Turn; closing: Turn };

    const bankRows = await client.query<{ id: string; label: string | null; interlocutor: Bank | null }>(
      `select id, label, interlocutor
         from content_exam_tasks
        where task_type = 'po_interaction'
          and interlocutor is not null
          and status <> 'archived'
          and ($1::text is null or id = $1)
        order by id`,
      [ONLY]
    );

    // One examiner, one voice. `f-neutral` rather than `f-formal`: this is a
    // person at a reception desk answering questions, not an announcement.
    const EXAMINER_SLOT: SlotName = 'f-neutral';

    const turnUnits: InterlocutorTurnUnit[] = [];
    for (const row of bankRows.rows) {
      const b = row.interlocutor;
      if (!b) continue;
      // Paths come from interlocutorTurnPaths, which is tested. They are
      // RELATIVE TO THE `interlocutor` COLUMN; see the note there for what
      // happens when they are not.
      const turnsInOrder: Turn[] = [b.opening, ...b.answers, b.catchAll, b.closing];
      const named: [Turn, string[]][] = interlocutorTurnPaths(b).map(
        (path, i) => [turnsInOrder[i]!, path] as [Turn, string[]]
      );
      for (const [turn, path] of named) {
        if (!turn?.text) continue;
        turnUnits.push({
          kind: 'interlocutorTurn',
          taskId: row.id,
          taskLabel: row.label ?? row.id,
          turnId: turn.id,
          path,
          text: turn.text,
          slot: EXAMINER_SLOT,
          currentRef: turn.audioRef ?? null,
        });
      }
    }

    /* ── 3. Length sanity, before anything is spent ─────────────────────── */

    const tooLong = [
      ...itemUnits.filter((u) => u.text.length > MAX_RENDER_CHARS).map((u) => `item ${u.item.id} (${u.text.length} chars)`),
      ...lessonBundles.flatMap((b) =>
        b.units
          .filter((u) => u.text.length > MAX_RENDER_CHARS)
          .map((u) => `lesson ${b.lesson.id} ${u.kind}#${lessonUnitLabel(u)} (${u.text.length} chars)`)
      ),
    ];
    if (tooLong.length) {
      die(`${tooLong.length} render unit(s) exceed MAX_RENDER_CHARS (${MAX_RENDER_CHARS}):\n  ${tooLong.join('\n  ')}`);
    }

    const examTurns = examUnits.reduce((n, u) => n + u.cast.length, 0);
    const examChars = examUnits.reduce((n, u) => n + billableChars(u.cast), 0);
    const totalUnits =
      itemUnits.length + lessonBundles.reduce((n, b) => n + b.units.length, 0) + examUnits.length + turnUnits.length;
    console.log(
      `\n  render units: ${itemUnits.length} dictée item(s) across ${new Set(itemUnits.map((u) => u.item.theme)).size} theme(s), ` +
        `${lessonBundles.reduce((n, b) => n + b.units.length, 0)} lesson audio unit(s) across ${lessonBundles.length} lesson(s), ` +
        `${examUnits.length} listening document(s) across ${new Set(examUnits.map((u) => u.taskId)).size} épreuve task(s) ` +
        `(${totalUnits} total)`
    );
    if (examUnits.length) {
      // Turns, not documents, is what gets billed: a three-speaker document is
      // three synthesis calls. Reporting documents alone would understate the
      // spend by a factor of two on this paper.
      console.log(
        `  listening: ${examTurns} turn(s), ${examChars.toLocaleString('en-GB')} billable character(s)` +
        `${DRY_RUN ? '' : ' — this is what will be spent'}`
      );
    }
    if (turnUnits.length) {
      const turnChars = turnUnits.reduce((n, u) => n + u.text.length, 0);
      console.log(
        `  interlocutor: ${turnUnits.length} turn(s), ${turnChars.toLocaleString('en-GB')} billable character(s)`
      );
    }
    if (totalUnits === 0) {
      console.log('\n✓ nothing matches this scope — nothing to render.\n');
      return;
    }

    /* ── 3b. Casting, before anything is spent ─────────────────────────── */

    let cast: Cast | null = null;
    if (examUnits.length || turnUnits.length) {
      const voicesPath = resolvePath(
        dirnameOf(fileUrlToPath(import.meta.url)),
        '../exam-blueprints/VOICES-tef-canada.md'
      );
      cast = loadVoices(voicesPath);
      const needed = new Set([
        ...examUnits.flatMap((u) => u.cast.map((t) => t.slot)),
        ...turnUnits.map((u) => u.slot),
      ]);
      const missing = [...needed].filter((slot) => !cast!.entries.has(slot));
      if (missing.length) {
        const note =
          `${missing.length} voice slot(s) are not cast yet: ${missing.join(', ')}.\n` +
          `  Fill their Voice id in exam-blueprints/VOICES-tef-canada.md (E8 stage 1).`;
        // A dry run exists to show what WOULD happen, so it reports the gap and
        // carries on listing. A real run refuses rather than substituting:
        // borrowing another voice is exactly how two speakers in one document
        // end up sounding alike, and that breaks the item after the credits are
        // spent.
        if (DRY_RUN) console.log(`\n  ! ${note}\n    Listing the documents anyway, since nothing will be spent.`);
        else die(note);
      }
      if (!DRY_RUN && !(await haveFfmpeg())) {
        die('ffmpeg is not on PATH. A multi-speaker document cannot be stitched without it.');
      }
    }

    /* ── 4. Items: skip-if-done, else render → upload → ledger + backfill ── */

    for (const unit of itemUnits) {
      const voiceId = resolveVoiceId(unit.role);
      const assetKey = computeAssetKey(unit.text, voiceId);
      const path = storagePath(voiceId, assetKey);

      if (unit.item.assetKey === assetKey) {
        skipped++;
        continue;
      }
      if (voiceId.startsWith('UNSET-')) {
        // Its real voice is not configured, so its real key is unknowable and
        // whether it needs rendering cannot be answered here. Counting it as
        // "would render" would report a bill nobody is about to be sent.
        unknown++;
        continue;
      }

      // Validate the POST-STATE before spending a render call — same
      // discipline as author-practice.ts/backfill-voiceflash-themes.ts, just
      // moved earlier: a doomed write should fail before it costs a credit.
      const nextItem: Item = { ...unit.item, audioRef: path, assetKey };
      const issues = validateItem(nextItem, nextItem.id);
      if (issues.length) {
        die(`post-state for ${nextItem.id} fails validateItem:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);
      }

      console.log(`  · ${unit.item.id} (${unit.role} ${voiceId.slice(0, 8)}…)`);
      if (DRY_RUN) {
        rendered++;
        continue;
      }

      const bytes = await renderClip(unit.text, voiceId, unit.lang);
      await uploadAudio(path, bytes);
      uploadedBytes += bytes.length;
      const checksum = sha256Hex(bytes);
      const durationMs = estimateDurationMs(bytes);

      await client.query('begin');
      try {
        await client.query(
          `insert into audio_assets (item_id, path, checksum, voice_id, duration_ms)
           values ($1, $2, $3, $4, $5)
           on conflict (item_id, voice_id) do update
             set path = excluded.path, checksum = excluded.checksum,
                 duration_ms = excluded.duration_ms, published_at = now()`,
          [unit.item.id, path, checksum, voiceId, durationMs]
        );
        const res = await client.query(`update content_items set audio_ref = $1, asset_key = $2 where id = $3`, [
          path,
          assetKey,
          unit.item.id,
        ]);
        if (res.rowCount !== 1) throw new Error(`update touched ${res.rowCount} rows for ${unit.item.id}`);
        await client.query('commit');
      } catch (e) {
        await client.query('rollback').catch(() => {});
        throw e;
      }
      rendered++;
    }

    /* ── 4b. Listening documents: cast → per-turn render → stitch → ref ── */

    for (const unit of examUnits) {
      const voices = [...new Set(unit.cast.map((t) => t.slot))];
      // Uncast slots have no voice id, so there is no key to compute. A real
      // run has already died by this point; a dry run lists the document and
      // says the key is not knowable yet, rather than inventing one.
      // Slot prosody, plus the block's speech rate. Rate is per block because
      // one voice serves blocks at different bands, and it is folded in here
      // so it reaches BOTH the asset key and the request: a rate change must
      // re-render the block, and a key that ignored it would leave the old,
      // too-fast clips in place.
      const speed = cast!.blockSpeed.get(unit.block);
      const settingsFor = (slot: typeof unit.cast[number]['slot']) => ({
        ...(cast!.entries.get(slot)?.settings ?? {}),
        ...(speed ? { speed } : {}),
      });
      const cued = unit.cast.every((t) => cast!.entries.has(t.slot));
      const key = cued
        ? examAssetKey(
            unit.cast,
            (slot) => castVoiceId(cast!, slot),
            'elevenlabs',
            cast!.renderVersion,
            settingsFor
          )
        : null;

      if (key && assetKeyFromRef(unit.currentRef) === key) {
        skipped++;
        continue;
      }

      console.log(
        `  · ${unit.taskLabel} / ${unit.partLabel} ` +
        `(${unit.cast.length} turn(s), ${voices.length} voice(s): ${voices.join(', ')}${speed ? `, speed ${speed}` : ''})` +
        `${key ? '' : '  [uncast]'}`
      );
      if (DRY_RUN) {
        rendered++;
        continue;
      }

      // The path is keyed on the FIRST voice only because a path needs one
      // directory; the key in the filename is what identifies the document,
      // and it hashes every voice in it.
      const path = storagePath(castVoiceId(cast!, unit.cast[0]!.slot), key!);

      // ALREADY IN THE BUCKET? Then this exact document has been rendered
      // before and only the database pointer is missing. Re-synthesising would
      // buy identical bytes.
      //
      // Not a rare case: a `parts` upsert from the authoring script replaces
      // the whole jsonb column and takes `audioRef` with it, which wiped all
      // thirty clips off this paper once while the bytes sat safely in R2. The
      // pipeline should survive losing its own pointers.
      const alreadyBytes = await bucketHas(path);
      if (alreadyBytes !== null) {
        await writePartRef(client, unit, path, Math.max(1, Math.round(alreadyBytes / 16 / 1000)));
        recovered++;
        continue;
      }

      // Per turn, in order. A failure part-way leaves nothing written, which
      // is the right outcome: a half-rendered conversation is not a document.
      const clips: Buffer[] = [];
      for (const turn of unit.cast) {
        clips.push(
          await renderClip(
            turn.text,
            castVoiceId(cast!, turn.slot),
            'fr',
            settingsFor(turn.slot)
          )
        );
      }
      const bytes = await stitchClips(clips, gapsFor(unit.cast));

      await uploadAudio(path, bytes);
      uploadedBytes += bytes.length;

      // The ref goes back into the task's `parts` jsonb at this part's index.
      // jsonb_set rather than a whole-array rewrite, so two concurrent renders
      // of different parts of one task cannot clobber each other.
      // The MEASURED length goes back with the ref. estimateDurationS says in
      // so many words that the real duration should come from this pipeline:
      // until it did, the runner waited on my authored estimate, which ran
      // several seconds long on every part and left dead air in an exam.
      // 128 kbps CBR mono, so bytes/16 is milliseconds and matches ffprobe.
      await writePartRef(client, unit, path, Math.max(1, Math.round(estimateDurationMs(bytes) / 1000)));
      rendered++;
    }

    /* ── 4c. Interlocutor turns: one clip each, never stitched ──────────── */

    for (const unit of turnUnits) {
      const voiceId = castVoiceId(cast!, unit.slot);
      const speed = cast!.blockSpeed.get('EO');
      const settings = { ...(cast!.entries.get(unit.slot)?.settings ?? {}), ...(speed ? { speed } : {}) };
      // The same key function the documents use, so a turn and a document that
      // happened to carry identical text in the same voice land on one object.
      const key = examAssetKey(
        [{ speaker: unit.turnId, text: unit.text, slot: unit.slot }],
        () => voiceId,
        'elevenlabs',
        cast!.renderVersion,
        () => settings
      );
      if (assetKeyFromRef(unit.currentRef) === key) {
        skipped++;
        continue;
      }

      const path = storagePath(voiceId, key);
      console.log(`  · ${unit.taskLabel} / interlocuteur · ${unit.turnId}${speed ? ` (speed ${speed})` : ''}`);
      if (DRY_RUN) {
        rendered++;
        continue;
      }

      let bytes: Buffer;
      const have = await bucketHas(path);
      if (have !== null) {
        recovered++;
      } else {
        bytes = await renderClip(unit.text, voiceId, 'fr', settings);
        await uploadAudio(path, bytes);
        uploadedBytes += bytes.length;
        rendered++;
      }
      const durationS = Math.max(1, Math.round((have ?? bytes!.length) / 16 / 1000));

      // The `#> ... is not null` guard is the important part. Without it a
      // path that does not resolve writes NULL over the entire bank, which is
      // exactly what happened the first time this ran. Now it matches no rows
      // and the rowCount check below turns it into a loud failure.
      const res = await client.query(
        `update content_exam_tasks
            set interlocutor = jsonb_set(
                  interlocutor, $2::text[],
                  (interlocutor #> $2::text[]) || jsonb_build_object('audioRef', $3::text, 'durationS', $4::int),
                  false),
                updated_at = now()
          where id = $1
            and interlocutor #> $2::text[] is not null`,
        [unit.taskId, `{${unit.path.join(',')}}`, path, durationS]
      );
      if (res.rowCount !== 1) {
        throw new Error(
          `interlocutor path {${unit.path.join(',')}} did not resolve on ${unit.taskId} — nothing written`
        );
      }
    }

    /* ── 5. Lessons: same skip-if-done, one write per lesson ────────────── */

    for (const bundle of lessonBundles) {
      const nextLesson: Lesson = JSON.parse(JSON.stringify(bundle.lesson)); // deep clone — mutate the clone, validate, then write
      const toRender: { unit: LessonUnit; voiceId: string; assetKey: string; path: string }[] = [];

      for (const unit of bundle.units) {
        const voiceId = resolveVoiceId(unit.role);
        const assetKey = computeAssetKey(unit.text, voiceId);
        if (existingLessonAssetKey(bundle.lesson, unit) === assetKey) {
          skipped++;
          continue;
        }
        toRender.push({ unit, voiceId, assetKey, path: storagePath(voiceId, assetKey) });
      }
      if (toRender.length === 0) continue;

      for (const { unit, path, assetKey } of toRender) applyLessonAudioRef(nextLesson, unit, path, assetKey);

      const issues = validateLesson(nextLesson, nextLesson.id);
      if (issues.length) {
        die(`post-state for lesson ${nextLesson.id} fails validateLesson:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);
      }

      console.log(`  · ${bundle.lesson.id} — ${toRender.length} audio unit(s)`);
      if (DRY_RUN) {
        rendered += toRender.length;
        continue;
      }

      for (const { unit, voiceId, path } of toRender) {
        const bytes = await renderClip(unit.text, voiceId, unit.lang);
        await uploadAudio(path, bytes);
        uploadedBytes += bytes.length;
      }

      await client.query('begin');
      try {
        const res = await client.query(
          `update content_units set body = $1::jsonb where kind = 'lesson' and body->>'id' = $2`,
          [JSON.stringify(nextLesson), bundle.lesson.id]
        );
        if (res.rowCount !== 1) throw new Error(`update touched ${res.rowCount} rows for lesson ${bundle.lesson.id}`);
        await client.query('commit');
      } catch (e) {
        await client.query('rollback').catch(() => {});
        throw e;
      }
      rendered += toRender.length;
    }

    /* ── 6. Report ────────────────────────────────────────────────────────── */

    if (DRY_RUN) {
      console.log(`\n✓ dry run — ${rendered} unit(s) would render, ${skipped} already up to date${unknown ? `, ${unknown} not assessable (voice not configured)` : ''}. Nothing written.`);
    } else {
      if (recovered) {
        console.log(`  ${recovered} document(s) were already in the bucket and were re-pointed, not re-bought.`);
      }
      console.log(
        `\n✓ rendered ${rendered} clip(s) (${(uploadedBytes / 1024 / 1024).toFixed(1)} MB uploaded to ${TARGET}), ` +
          `${skipped} already up to date${recovered ? `, ${recovered} recovered` : ''}.\n` +
          `  Run pnpm content:publish to ship the new refs OTA.\n`
      );
    }
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
