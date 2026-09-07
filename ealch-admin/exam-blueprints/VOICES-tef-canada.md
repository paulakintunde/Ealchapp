# VOICES — TEF Canada

**Blueprint:** `tef-canada-2025.09` · **Render version:** `v3`

> **v2 → v3, 2026-09-01: two-pass loudness.** v2 levelled every turn but with a
> SINGLE loudnorm pass, which gains from a running estimate and so needs
> material to converge on. Short single-speaker documents never gave it any:
> after v2 the spread was down to 3.6 LU but the two worst clips were both
> one-turn documents, Section G document 17 at −20.0 and Section D's chronique
> at −18.3. Measured on a speech-shaped input, one pass overshoots to −13.5
> where two passes reach −16.4, so `stitch.ts` now measures first and feeds the
> numbers back. Bumped rather than left alone because papers 2–11 render
> two-pass: leaving Examen 1 on v2 would make one paper in eleven the odd one
> out, which is the kind of difference a candidate sitting two papers notices.

> **v1 → v2, 2026-08-30: loudness.** `stitch.ts` normalises every turn to EBU
> R128 (−16 LUFS), which fixes both a speaker sounding distant beside the
> others and a voice swinging in level inside one clip. The asset key hashes
> text, voice, provider, render version and voice settings — **not the
> stitching parameters** — so that change was inert on every clip already
> rendered. Measured before the bump: a **12.8 LU spread** across the thirty
> documents, 29 of them 2 LU or more off target. Bumping the version is what
> makes a stitching change reach existing audio.
**Status:** ✅ CAST 2026-08-27. Eight voices locked. Rendering is blocked only on `ELEVENLABS_API_KEY`.

This file is the render script's casting input. `render-audio.ts` reads it to
decide which voice speaks which turn, so **it must not be regenerated casually**:
changing a voice id changes the assetKey of every clip that voice speaks, and
re-renders them all.

---

## 1. What Examen 1 actually needs

Measured from the authored paper, not estimated
(`pnpm tsx scripts/tef-blanc01/audio-budget.ts`):

| | |
|---|---|
| Documents to synthesise | 43 (30 listening parts + 13 interlocutor turns) |
| Turns | **80** — this is the number of synthesis requests, not 43 |
| Characters | 12,553 |
| Mean per document | 292 |
| Distinct speaker roles | 33 |
| Projection for five TEF papers | ~215 documents, ~63,000 characters |

The phase brief estimated ~800 characters per document across ~170 documents.
Measured, it is 292 across 215, so **the five-paper budget is roughly half what
was planned for**. Turns are what cost: multi-speaker stitching sends 80
requests for this paper.

---

## 2. Thirty-three roles, eight voices

Casting one voice per role would be wrong twice over: it would cost eight times
more, and it would make every document sound like a different production. Real
listening papers use a small repertory company.

The rule is **distinctness within a document, consistency within a register**.
Two speakers in the same document never share a voice. The same document type
across the paper keeps the same register.

### The pool

Audition in the ElevenLabs UI and fill the id column. Every voice must be
metropolitan French (STANDARD-common §2.1): Canadian subject matter is welcome,
Canadian accent is not, because it would stop testing what the real paper tests.

| Slot | Sex | Register to audition for | Serves | Voice id | Settings |
|---|---|---|---|---|---|
| `f-neutral` | F | Everyday, warm, unhurried. The default female speaker. | CO-A, CO-G exchanges | GYzIdoKkRyANjBvkKYfO| |
| `f-formal` | F | Institutional, even, no warmth. Reads, does not chat. | CO-B announcements, voicemail systems | O31r762Gb3WFygrEOGh0 | |
| `f-media` | F | Broadcast. Projects, varies pitch, lands its clauses. | CO-D chronicle, CO-E interviewer, CO-F narrator |3C1zYzXNXNzrB66ON8rj | |
| `f-street` | F | Spontaneous, uneven, thinks mid-sentence. | CO-C speakers, CO-G vox-pop |WQKwBV2Uzw1gSGr69N8I | |
| `m-neutral` | M | Everyday, warm, unhurried. The default male speaker. | CO-A, CO-G exchanges |HeQxwrjIb6zvCa1bt1EE | |
| `m-formal` | M | Institutional. Pharmacy, station, town hall, customs. | CO-B, CO-G instructions |zAr1POVZUrr1zkX0T94t | |
| `m-media` | M | Broadcast, a shade lower and slower than `f-media`. | CO-D, CO-F interviewed voices | fEtpdogpDkBrq53KdupV| |
| `m-street` | M | Spontaneous. The male half of every micro-trottoir. | CO-C, CO-G vox-pop | SsVUx1gFlvniIrUMZtgF| |

Eight is the working minimum: block C needs three genuinely different speakers
in one document, block F needs three, and block E needs two that never sound
like the same person interviewing herself.

### Prosody

Set per slot in the UI and record the numbers here: the render script sends
them, and the assetKey hashes them. Leaving a cell blank keeps the provider
defaults (stability 0.5, similarity 0.75), which is what the first render used.

Filling one in later is safe — the key changes, so that voice’s clips
re-render and nothing else does. Recognised keys: `stability`, `similarity`,
`style`, `speed`. Prose in the cell is ignored rather than coerced.

Speech rate is a real difficulty lever and the cheapest one we control
(STANDARD-common §2). Target the band envelope:

| Band | Target rate | Blocks |
|---|---|---|
| A1–A2 | ≤120 wpm | CO-A, the easier CO-G documents |
| B1 | ~140 wpm | CO-B, CO-G |
| B2 | ~160 wpm | CO-C, CO-D, CO-E |
| C1 | ~175 wpm | CO-F, the top of CO-E |

### Speech rate, per block

MEASURED, not guessed. The first render came out well over target on the lower
bands: the voices read at a natural B2/C1 pace, which makes the A2/B1 on-ramp
harder than the format specifies. Rate is per BLOCK rather than per slot,
because one voice serves blocks with different targets.

`speed` below is sent in voice_settings and is hashed into the assetKey, so
changing a number here re-renders that block and nothing else. Verified
honoured by this model (eleven_multilingual_v2): speed 0.81 lengthened a test
clip by 26%.

| Block | Target wpm | Measured at speed 1.0 | Speed |
|---|---|---|---|
| A | 120 | 144 | 0.83 |
| B | 140 | 173 | 0.81 |
| C | 160 | 179 | 0.89 |
| D | 160 | 179 | 0.89 |
| E | 160 | 168 | 1.00 |
| F | 175 | 169 | 1.00 |
| G | 140 | 173 | 0.81 |
| EO | 140 | 173 | 0.83 |

`EO` is not a listening block: it is the recorded interlocutor of Expression
orale Section A, a person at a reception desk answering a candidate's
questions. It is cast to `f-neutral` — an everyday register, not the
institutional one an announcement gets — and each of its turns is a separate
clip, because the engine plays them one at a time in response to what the
candidate asks, never as one file.

E and F are left at 1.00: both are inside 5% of target, and re-rendering them
would cost credits to change nothing a listener could hear.

`f-street` and `m-street` should be auditioned at **higher stability** than the
name suggests: spontaneous-sounding text plus an unstable voice produces
something that reads as a synthesis artefact rather than as a real person
hesitating. The hesitation is already written into the transcript.

---

## 3. Two collisions to resolve before rendering

The paper's speaker labels are what the renderer keys on, and two of them name
different people in different documents:

| Label | Appears in | Problem |
|---|---|---|
| `L’AGENT` | CO-A échange 2 (station), CO-B annonce 4 (mairie) | Two unrelated officials |
| `LE CLIENT` | CO-A échange 4 (boulangerie), CO-G document 6 (magasin) | Two unrelated customers |

Neither is a content defect — a candidate never sees a label — but the render
script must not treat them as one person and cast them identically across two
document types with different registers. **Cast per (document, label), not per
label.** The turn list the script builds is per document, so this is a property
of the assignment function, not of the content.

---

## 4. What is deliberately not being done

**No ambient noise, no overlapping speech.** The phase brief rules both out and
it is right to: they multiply cost and QA time for realism a candidate does not
score on. A micro-trottoir recorded in a quiet room and a micro-trottoir with
traffic behind it test the same thing.

**No accent variation.** See §2.

---

## 5. Running the render

    pnpm tsx scripts/render-audio.ts --dry-run --exam     preview, spends nothing
    pnpm tsx scripts/render-audio.ts --exam               render and upload

**Always pass --exam.** Without it the run also picks up every unrendered
dictee item and lesson unit in the corpus, which is three orders of magnitude
more spend than the thirty documents a paper needs.

Requires ELEVENLABS_API_KEY in ealch-admin/.env, and ffmpeg on PATH. The run
commits per document, so if it dies part-way the documents already finished
stay done and a re-run costs only the remainder.

---

## 6. Marking

A clip is **marked** when a person has listened to it against its transcript and
signed it off. Only marked clips upload; until a part's clip is marked the app
speaks it with on-device TTS, which is why none of this blocks the runner.

Two things to listen for that a transcript check will not catch:

1. **Numbers and times.** `21 h 15`, `quatre-vingt-dix euros`, `10 h – 12 h`.
   Synthesis reads these inconsistently and they are frequently the answer.
2. **Speaker distinctness in blocks C, E and F.** If two speakers in one
   document are hard to tell apart, the item is broken however good the French
   is. This is the single most important thing to listen for in this paper.
