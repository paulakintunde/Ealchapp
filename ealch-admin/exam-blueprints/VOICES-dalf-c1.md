# VOICES — DALF C1

**Blueprint:** `dalf-c1-2026.10` · **Papers:** blanc-01 – blanc-05 · **Render version:** `v1` · **Drafted:** 2026-10-06

The render version is part of every clip's assetKey. Bump it to force a
re-render of the whole format when a stitching or prosody change must reach
clips that are otherwise unchanged; leave it alone for a text edit, which
changes the key by itself.

The casting brief for the DALF pack. Drafted before any paper exists: §1 is
what the format implies, and §3.1 is to be filled from `castDocument` once
blanc-01 renders, never from intention.

`render-audio.ts` finds this file by format name (`VOICES-dalf-c1.md`) and dies
if it is missing, so it must exist before the first DALF render.

---

## 1. What a DALF paper needs

| | |
|---|---|
| Listening documents | **3 or 4** (1 long, 2 or 3 short extracts) |
| Long document | **6-7 min**, a host and one expert, or a lecture with a host's questions |
| Short extracts | **60-120 s each**, one radio genre each |
| Debate turns to render | one examiner voice per entretien, **two entretiens** per paper |
| Voice slots available | **8** (4 f, 4 m), the same pool as TEF, TCF and DELF |

Genres and the voices they want:

| Document | Speakers | Wants |
|---|---|---|
| Part 1 · interview | host + expert | host projects (`*-media`), expert argues (`*-formal`) |
| Part 1 · lecture | lecturer, a host for one or two questions | lecturer `*-formal` |
| Part 2 · news flash | one presenter | `*-media` |
| Part 2 · poll / vox pop | presenter + 2-3 respondents | respondents ideally `*-street` (see §3, they will not get it) |
| Part 2 · advert | one or two voices | `*-neutral`, warm |
| Part 2 · chronicle | one columnist | `*-media` or `*-formal` |

**The document that can break is part 1.** It is worth 18 of 25 points and its
dear questions separate the expert's view from views the expert reports or the
host puts to them. If host and expert are the same sex they must come from
different registers, and the host must ASK rather than state positions (the
benign same-sex case recorded for DELF blanc-03). Prefer a mixed pair.

Label every role by sex so the renderer casts it (`UNE JOURNALISTE`,
`UN URBANISTE`, `UNE PASSANTE`). Labels are stripped before rendering; the
candidate hears voice and discourse role only.

---

## 2. Speech rate — one band, one speed

DALF is a single level, like DELF: one speed for the documents, one for the
examiner, no ramp. `voices.ts` reads the table positionally: **first cell the
key, last cell the speed.** Add new columns before `Speed`, never after.
**0.7 is the floor and 1.2 the ceiling**; outside them the provider refuses the
request and the run dies on the first document.

| Band | Documents | Target wpm (STANDARD-common §2) | Last measured | Speed |
|---|---|---|---|---|
| c1 | 3-4 per paper | ~ 175 | not measured | 0.98 |
| EO | 2 entretiens per paper | ~ 145 (our estimate) | not measured | 0.85 |

**0.98 is borrowed, not tuned.** It is the TCF pack's c1 default, which measured
174 wpm against the same 175 target on blanc-01 (VOICES-tcf-canada §2). TCF's
per-paper c1 calibrations ran 0.96 to 1.07, so expect DALF blanc-01 to need one
measuring pass. The long document is the one to measure: an interview with real
hesitations reads slower per word than a flash.

**`EO` is the jury**, deliberately slower than the documents, as for DELF (139
wpm measured at 0.85 there and left alone). A challenge across a table at news
pace reads as hectoring. Do not tune EO to hit its own estimate.

A per-paper override (`c1@blanc-02`) exists and is a paper-wide instrument. A
single long document that runs over is fixed in its own text, not by moving
every document in the paper (the DELF blanc-03 lesson).

---

## 3. Casting

**The keying is band-based.** `registerKeyFor` lists `dalf_c1` with TCF and DELF,
so the task's `level` (`c1`) is the casting and pacing key, and a DALF task with
no usable level throws instead of falling through to TEF's block-letter branch
(our labels begin « Compréhension de l'oral… », which that branch would read as
block C). `render-audio.ts` keys DALF the same way (`BAND_KEYED`).

`BAND_PREFERENCE.c1` gives the order `f-media`, `m-formal`, `f-formal`,
`m-neutral`, then the remaining slots in pool order (`f-neutral`, `f-street`,
`m-media`, `m-street`). First speech picks first. That suits part 1: a woman host
opens on `f-media` and a man expert answers on `m-formal`. A man host opening
gets `m-formal` too, which is why a man host with a man expert is the pairing to
avoid: the expert would fall to `m-neutral`, close in register.

**Part 2 genres ARE cast by genre (decision 39, `examAudio.ts` dalfGenreKey).** A
part label containing « sondage », « micro-trottoir » or « vox pop » casts as
`dalf-poll`: the first speaker (the presenter) takes `f-media` / `m-media`, every
respondent after takes a street voice. A label containing « publicité », « spot »
or « annonce publicitaire » casts as `dalf-advert` (neutral, warm first). Any other
label (flash, chronique, the long interview) stays on the c1 band order. Pacing is
unchanged: the speed key is still the band. So name the genre in every part 2
label, e.g. « Document 2 · sondage ».

| Slot | Sex | Register | Serves on DALF | Voice id | Settings |
|---|---|---|---|---|---|
| `f-neutral` | F | Everyday, warm, unhurried. | adverts; a respondent | GYzIdoKkRyANjBvkKYfO | |
| `f-formal` | F | Institutional, even. Reads, does not chat. | a woman expert or lecturer; a chronicle | GoEy5CmodqJy0T9AxjLk | |
| `f-media` | F | Broadcast. Projects, varies pitch. | **the part 1 host**; flashes | 3C1zYzXNXNzrB66ON8rj | |
| `f-street` | F | Spontaneous, uneven. | rarely reached (see above) | B7fiLqn1fkwb8VKxZsLm | |
| `m-neutral` | M | Everyday, warm, unhurried. | adverts; a respondent | jGpnMdbhtKgQbVrYezOx | |
| `m-formal` | M | Institutional. Argues from a position. | **the part 1 expert**; the jury examiner | 7DC4sk5JWSwsxDH9wneS | |
| `m-media` | M | Broadcast, a shade lower and slower. | a man presenter late in a document | DGTOOUoGpoP6UZ9uSWfA | |
| `m-street` | M | Spontaneous. | rarely reached (see above) | UBXZKOKbt62aLQHhc1Jm | |

Voice ids are the shared pool, on purpose: a learner moving from a DELF paper to
a DALF one should not meet eight new strangers, and the registers mean the same
thing in every format.

### 3.1 What each paper was actually cast as

To be read back OUT of `castDocument` after each render, as VOICES-delf-b2 §3.1
does. Empty until blanc-01 exists.

| Paper | Document | Slots, in order of first speech |
|---|---|---|

---

## 4. Trademark

DALF is a registered trademark of France Éducation international. Named here
descriptively. No endorsement, affiliation or equivalence is claimed or implied.
