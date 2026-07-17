# Audio Lesson Script System — bilingual narration for the Den

Status: planning spec + authoring brief. Created 2026-07-15.
Owner decisions captured this session are in **§1**. This doc is the contract between the
**writer** (the AI authoring prompt in §4), the **content schema** (§7), and the
**runtime player** (§5–6).

Related: [[CONTENT-CURRICULUM-AND-GENERATION-PLAN.md]], [[OPR-CONTENT-STUDIO-SPEC.md]],
[[THEME-CATALOGUE-AND-ARCHITECTURE.md]], `contentresearch.md`. Pilot output:
`AUDIO-SCRIPT-PILOT-A1-AU-CAFE.md`.

---

## 1. Locked decisions (this session)

| Question | Decision | Consequence |
|---|---|---|
| How is the bilingual script voiced? | **On-device / Web Speech, segmented.** Parse `[FR]…[/FR]`, switch voice per segment at runtime. | Free, offline, ships now. Two *different* device voices (EN + FR), not one speaker — honest tradeoff. |
| Where does the format live? | **The Den** (7-stage guided narrated lesson). | The template's beats become the Den's per-stage narration. Welcome + objective = the Hook stage. |
| First pilot | **A1–A2 beginner** (greetings-style). | Pilot topic chosen: **A1 "Au café" (ordering a coffee)** — reuses the existing `fr.a1.cafe` theme + the café roleplay. |
| "Pause to repeat" model | **Interactive UI pause** (audio stops, tap-to-continue / countdown). | Script carries explicit `[pause:N]` cues; player halts playback and shows a countdown + Continue. |

**Strategic note — author once, upgrade the renderer later.** The `[FR]…[/FR]` markup is the
*only* thing that makes both worlds work. Ship it against on-device TTS now; when you want the
"single fluent speaker" quality, point the **same scripts** at the already-wired ElevenLabs
`eleven_multilingual_v2` edge function, pre-generate + cache audio, and no script changes are
needed. This is the hybrid path from `OPR-CONTENT-STUDIO-SPEC.md` decision (C).

**Pedagogy guardrail (from `contentresearch.md`):** this is **sequential** narration (hear the
English explanation, then hear the French), **not** split-screen word-level alignment — which
that review explicitly killed ("teaches 'French is English with different words'"). Keep it
sequential. English scaffolds; French is the thing being heard and repeated.

---

## 2. Where it lives: the Den's 7 stages

The Den is already `warm/recall → focus/vocab → input/story → practice → produce → check → cheat sheet`,
walked by Camille (guided-autoplay or self-pace). The authoring template's structural beats map
onto those stages one-to-one:

| Template beat (from the CEFR prompt) | Den stage | Narration job |
|---|---|---|
| **Hook & Context** (welcome, why it matters) | 1. warm/recall | **This is the landing "welcome + objective" audio.** Greet, state the goal, say what they'll be able to do by the end. |
| **Concept breakdown** | 2. focus/vocab | Introduce + contrast the key words/phrases. Hear-and-repeat with `[pause:N]`. |
| **Natural context demo** (dialogue) | 3. input/story | Play a short realistic dialogue, then a one-line "what happened" gloss. |
| **Interactive guided practice** | 4. practice | Level-appropriate drill (A1–A2: repetition; B1–B2: transform; C1–C2: compare/analyze). |
| — | 5. produce | Learner produces their own line out loud (open `[pause:N]`). |
| — | 6. check | Quick comprehension check ("what did she order?"). |
| **Active outro** (question/task) | 7. cheat sheet | Recap the phrases; end with a spoken prompt the learner answers aloud. |

So a Den lesson = **7 narration blocks**, each block written in the markup of §3.

---

## 3. Script markup spec (the machine-readable contract)

Narration is plain text with a small, strict token set. The player parses left-to-right into an
ordered list of *segments*.

### Tokens

| Token | Meaning | Runtime behavior |
|---|---|---|
| `[FR]…[/FR]` | French segment (target language) | Spoken by the **French** voice (`fr-FR`). |
| *(plain text, outside any tag)* | English segment (explanation) | Spoken by the **English** voice (`en-US`/device default). |
| `[pause:N]` | Interactive pause, N seconds | Playback **stops**; player shows a countdown from N + a **Continue** button. Resumes on tap or timeout. |
| `[sfx:name]` | Sound cue | Plays `assets/sounds/<name>.wav`. Allowed: `tap flip success error ding vowel`. Use sparingly (e.g. `ding` before a repeat). |
| `[dir:…]` | Delivery direction (advisory) | **Ignored by device TTS.** Honored by future voice-over / cloud pre-gen. e.g. `[dir: warm, slow]`. Optional; keep rare. |

### Rules

1. **English is the default.** Anything not inside `[FR]…[/FR]` is English. No `[EN]` tag needed.
2. **Tags do not nest.** `[FR]…[/FR]` contains French text only — no pauses/sfx inside; put those between tags.
3. **One French idea per tag** at A1–A2 so the FR voice gets clean prosody (short, <6 words). Longer allowed B1+.
4. **A `[pause:N]` always follows the thing to repeat.** Pattern: `[FR]bonjour[/FR] [pause:4]`.
5. **No em dashes in any spoken or on-screen copy** (standing style rule). Use commas or full stops.
6. **Punctuation matters for TTS prosody** — write "[FR]Comment ça va ?[/FR]" with the question mark so both engines intone it.
7. Directions/sfx are optional polish; a script with only `[FR]`, plain English, and `[pause:N]` is complete and playable.

### Grammar (informal)

```
block      := segment*
segment    := frspan | ensp an | pause | sfx | dir
frspan     := "[FR]" text "[/FR]"
enspan     := text                     // any run of plain text
pause      := "[pause:" int "]"
sfx        := "[sfx:" name "]"
dir        := "[dir:" text "]"
```

---

## 4. The authoring brief (the prompt to write scripts)

This is your reusable system prompt. It is the CEFR-adaptive coach prompt you supplied, **retargeted
to Ealch**: it emits the §3 markup, writes the 7 Den blocks, opens with the welcome/objective, and
gives the learner spoken directions regardless of whether they act on them.

> ### System persona
> You are an elite, adaptive French coach and instructional designer writing the **narration for one
> Den lesson** in the Ealch app, spoken by Camille. Transform the `[LESSON NOTES]` into a warm,
> professional, **bilingual audio script** that a runtime TTS player will read aloud, switching
> between an English voice and a French voice segment by segment.
>
> ### Output format — non-negotiable
> - Wrap **every** French word or phrase in `[FR]…[/FR]`. Everything else is English and is spoken by
>   the English voice. Never leave French untagged; never tag English.
> - After anything the learner should repeat or answer, insert `[pause:N]` (the app stops and shows a
>   countdown). Use the level's pause length (below).
> - Optional: `[sfx:ding]` before a repeat cue; `[dir: …]` for delivery notes (advisory).
> - No em dashes. Keep question marks and commas — the TTS uses them for intonation.
> - Write as natural speech, continuous flow, **no bullet points inside the narration.**
>
> ### Structure — output exactly these 7 labeled blocks (the Den stages)
> 1. **WARM / RECALL — Hook + welcome + objective.** Energetic level-appropriate greeting. Welcome them
>    to *this* lesson, say why it matters in real life, and state plainly what they'll be able to do by
>    the end. This block is what plays when the learner lands on the lesson.
> 2. **FOCUS / VOCAB — concept breakdown.** Introduce and contrast the key words/phrases. Hear-and-
>    repeat each with a `[pause:N]`.
> 3. **INPUT / STORY — natural demo.** A short realistic dialogue or monologue using the target language,
>    then one line of "here's what just happened."
> 4. **PRACTICE — guided drill.** A1–A2: repetition/substitution. B1–B2: transformation (casual→formal,
>    reword). C1–C2: compare 3 near-synonyms or analyze a short extract.
> 5. **PRODUCE — learner output.** Prompt them to say their own line aloud; leave an open `[pause:N]`.
> 6. **CHECK — quick comprehension.** One or two check questions with a `[pause:N]` to answer.
> 7. **CHEAT SHEET — active outro.** Recap the key phrases, then end on a spoken question/task they
>    answer aloud, and Camille's warm sign-off.
>
> ### CEFR adaptation protocol (apply strictly to the target level)
> - **A1–A2:** ~70% English / 30% French. Warm, slow, rhythmic. French phrases <6 words. Break down
>    sounds and silent letters. Pause cue: `[pause:4]`.
> - **B1–B2:** ~20% English / 80% French. Natural pace. Contrast registers (tu/vous, spoken elisions
>    like "[FR]j'sais pas[/FR]"). English only for quick grammar/idiom clarifications. Pause: `[pause:5]`.
> - **C1–C2:** 100% French (no English, so almost no plain-text segments). Native pace, elisions,
>    regional/register/semantic nuance, irony. Pause: `[pause:6]`.
>
> ### Inputs
> - `TARGET CEFR LEVEL:` …
> - `THEME` (Ealch slug, e.g. `cafe`) and `LEVEL` (e.g. `a1`) — used for the item IDs.
> - `LESSON NOTES:` (vocab, grammar, rough ideas) …
> - `CORPUS ITEMS TO REUSE` (optional): existing `fr.<level>.<theme>.<seq>` items to weave in for
>    spaced recycling (aim ≥30% recycled from earlier units).
>
> Return only the 7 labeled blocks in §3 markup. No preamble.

**Where this prompt runs:** manually now (paste notes, get a script); later as the "AI-draft" button
in the OPR Content Studio, feeding the same markup into a `narration` field (§7) with inline TTS
preview + the native-review gate.

---

## 5. Runtime: segmentation → speech

### Parse
A pure function turns a block string into segments:

```ts
type Seg =
  | { t: 'say'; lang: 'fr' | 'en'; text: string }
  | { t: 'pause'; seconds: number }
  | { t: 'sfx'; name: string };

function parseNarration(block: string): Seg[] { /* tokenizer over §3 grammar */ }
```

Keep it pure and unit-tested (same discipline as `progress.logic.ts` — no RN imports so `node --test`
can reach it).

### Play (native — `expo-speech`)
`tts.ts` today hardcodes `language: 'fr-FR'`. Extend it minimally:

```ts
// tts.speak(text, { lang?: 'fr-FR' | 'en-US', rate?, onDone })
// - default lang stays 'fr-FR' (no behavior change for existing callers)
// - EN segments call with lang: 'en-US' (device English voice)
```

The player walks the segment list sequentially:
- `say` → `await tts.speak(text, { lang })`
- `pause` → stop, render the pause UI (§6), await Continue
- `sfx` → `sound.play(name)`

Keep the existing Android "not bound" retry in `tts.ts` (do **not** rewrite the file casually — see
the [[tts-not-bound-hot-reload]] hot-reload footgun; test on a **cold restart**).

### Play (web — Web Speech API)
On web, use `speechSynthesis` with `utterance.lang = 'fr-FR' | 'en-US'` per segment, queued. Same
segment walker; `pause` clears the queue and waits. Voice availability varies by browser — pick the
first matching-lang voice, fall back to default. (Detail + caveats to be confirmed by the TTS research
appendix, §9.)

### Honest limitation
Two device voices ≠ one speaker. Accept it for v1. The `[FR]…[/FR]` boundary is exactly the seam a
future single cloud voice removes.

### 5.4 Renderer abstraction — one interface, swappable providers *(designed in from day one)*

The whole point of the markup is that the **script is provider-agnostic**. Put every renderer behind one
interface so switching from on-device to Azure/ElevenLabs is a config flip, never a script rewrite. This
reuses the existing `config.ttsProvider` knob (`'device' | 'elevenlabs' | 'azure'`) — extend its union,
don't invent a parallel setting.

```ts
// Both live paths and the pre-gen pipeline consume the SAME Seg[] from parseNarration().
interface NarrationRenderer {
  id: 'device' | 'web' | 'elevenlabs' | 'azure' | 'google';
  // live: speak a segment now (device/web). pre-gen: return/emit an audio URL for caching.
  play(segs: Seg[], opts: { onPause: (s: number) => Promise<void>; rate?: number }): Promise<void>;
  canRunOffline: boolean;
}
```

| Renderer | Mechanism | Selected when |
|---|---|---|
| `device` | `expo-speech`, `lang` per segment | native, no cached audio (v1 default) |
| `web` | Web Speech `utterance.lang` per segment | web, no cached audio |
| `azure` | one multilingual voice + SSML `<lang>` → cached MP3 | pre-gen build; **recommended single-voice** |
| `elevenlabs` | `eleven_multilingual_v2` (already wired in the edge fn) → cached MP3 | pre-gen build; fastest to A/B |
| `google` | matched-persona stitch (`en-…-Kore` + `fr-…-Kore`) | pre-gen fallback |

**Selection order at runtime:** cached audio for this `lesson+stage+scriptHash` (if the pre-gen path
ran) → else the live renderer for the platform (`device`/`web`). So flipping `config.ttsProvider` to
`azure` and running the pipeline (§9) upgrades every lesson to one fluent voice **with no change to any
`[FR]…[/FR]` script and no app-store release** (audio ships via the OTA content snapshot / R2). The
segment parser is the shared contract; each renderer is a thin adapter.

---

## 6. Interactive pause UX

At a `[pause:N]` the player:
1. Stops speech.
2. Shows a **countdown ring** from N seconds + a **Continue** button + the repeat prompt (e.g. "Say it
   back: **bonjour**", showing the last FR segment).
3. Resumes on Continue tap **or** when the countdown hits 0 (self-pace vs guided-autoplay honors the
   Den's existing autoplay toggle: autoplay → auto-resume at 0; self-pace → wait for tap).
4. Optional `[sfx:ding]` just before signals "your turn."

No scoring here (this is narration, not a graded drill — consistent with the SRS guardrail that only
item-recall drills schedule cards). The "produce" stage can hand off to an existing mic drill later.

---

## 7. Schema addition (non-breaking)

`contentresearch.md` ruling: *amend the schema before authoring.* Add an optional field to `Lesson` in
`ealch-v2/src/content/schema.ts` — additive, so existing lessons and validators are unaffected:

```ts
// One narration block per Den stage, in §3 markup.
export type NarrationStage =
  | 'warm' | 'focus' | 'input' | 'practice' | 'produce' | 'check' | 'cheat';

export interface LessonNarration {
  version: number;
  blocks: { stage: NarrationStage; script: string }[]; // script = §3 markup
}

// Lesson gains:  narration?: LessonNarration;
```

Add a **validator** (hand-rolled, per `CONTENT-PART4-FIX-PROMPTS.md` — zod isn't installed): balanced
`[FR]…[/FR]` tags, `[pause:N]` N in 2..8, `[sfx:name]` name ∈ the 6 assets, no em dash, all 7 stages
present. This is the "typography + level" lint gate before publish.

`Item.audioRef` stays the hook for the later pre-generated per-line audio (Phase 7 / cloud upgrade).

---

## 8. Content workflow

1. **Draft** — run the §4 prompt on lesson notes (manual now; OPR "AI-draft" button later).
2. **Validate** — the §7 lint gate (tags, pauses, typography, level ratio heuristic).
3. **Native-review gate** — human French reviewer approves high-stakes lines (locked policy; Gate H in
   OPR spec). Especially the FR segments.
4. **Publish** — narration ships inside the `Lesson` in the corpus snapshot (seed + OTA), same pipeline
   as everything else (`content.ts`). No new infra for the on-device path.
5. **(Later) Pre-generate audio** — cloud multilingual voice renders each block to a file in R2, keyed
   to `lessonId + stage + version`; player prefers cached audio, falls back to segmented device TTS.

---

## 9. Upgrade path: single fluent voice (from the TTS research)

The single biggest technical win from carrying `[FR]…[/FR]` tags: **you never need language
auto-detection.** Auto-detect mislocking onto a short French word inside an English sentence is the #1
failure mode of multilingual TTS — and your explicit tags skip it entirely. Two clean architectures
follow, and the **same segment parser (§5) feeds both the pre-gen pipeline and the on-device fallback**.

### Recommended default: Azure AI Speech, one multilingual voice + SSML `<lang>`
Pick one persona (e.g. `en-US-AvaMultilingualNeural`). Parse the script → wrap each French run in
`<lang xml:lang="fr-FR">…</lang>`, leave English as the voice default → render **one continuous MP3**
(no stitching, no seams, native accent pinned per language) → upload to R2.
- **Why over ElevenLabs:** Azure is the only mainstream provider giving *one genuinely bilingual voice
  with accent pinned per language via SSML*, plus mature `<break>`, file output, and near-zero cost. It
  maps 1:1 onto the `[FR]` markup. ElevenLabs v3 is more *natural* but has a documented English
  phonetic bias and auto-detect mislock risk on exactly our word-by-word switches — it's a strong #2,
  and it's the one **already wired** in `supabase/functions/tts/index.ts`, so it's the fastest to A/B.
- **Fallback pattern:** Google Chirp 3 HD offers matched personas across locales
  (`en-US-…-Kore` + `fr-FR-…-Kore`) for near-identical timbre if you prefer stitching; Amazon Polly
  offers `<lang>` + a **10s `<break>`** (the largest).

### Pauses (pre-gen): bake real silence in post
Since we pre-generate, translate `[pause:N]` into an actual N-second silent PCM segment inserted at
concat time (`ffmpeg anullsrc`/`apad`) — exact to the millisecond, provider-independent, and immune to
per-provider `<break>` caps (ElevenLabs ~3s, Azure ~5s). This also lets pause length become a user
setting without re-synthesizing. **Note:** for v1 we chose *interactive* UI pauses (§6), so on-device
there's no baked silence; if a pre-gen lesson wants lean-back autoplay, bake the silence — the player
can support both.

### Cost + storage (one-time, ~750 scripts ≈ ~2M chars)
Synthesis is a rounding error: **Azure Neural ~$32**, Polly ~$38, Google Chirp 3 HD ~$60 (1M/mo free),
ElevenLabs ~$100–200. Audio ≈ **~2.6 GB** at 96 kbps mono MP3 → R2 storage **~$0.04/mo** with zero
egress. **Cost does not decide this — switching quality does.** Key each asset by a content hash of
`script + voice + provider + renderVersion`, e.g. `audio/{lessonId}/{stage}/{scriptHash}.mp3`, so
editing one script re-synthesizes only that item.

### Do this before committing a provider
Run a **bake-off**: synth 3–5 scripts *with the worst word-by-word FR-inside-EN switches* (the café
pilot is a good stressor) through Azure-`<lang>`, ElevenLabs-v3, and Google-stitched; listen for accent
artifacts on the French words. One afternoon decides #1 vs #2 better than any spec. This is the
"TTS provider bake-off harness" already scoped as issue 12 in `CONTENT-PART4-FIX-PROMPTS.md`.

*(Provider pricing/capability verified against official docs, July 2026. Full source list in the
research thread; re-verify pricing pre-launch.)*

---

## 10. First deliverable

Pilot script: **`AUDIO-SCRIPT-PILOT-A1-AU-CAFE.md`** — A1 "Au café", all 7 Den blocks, §3 markup,
70/30 EN/FR, `[pause:4]` cues, reuses the `fr.a1.cafe` theme.
