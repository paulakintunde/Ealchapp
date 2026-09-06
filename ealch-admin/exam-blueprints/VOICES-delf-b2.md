# VOICES — DELF B2 tout public

**Blueprint:** `delf-b2-2026.09` · **Paper:** blanc-01 · **Render version:** `v1` · **Drafted:** 2026-09-05 (phase E0)

The render version is part of every clip's assetKey. Bump it to force a
re-render of the whole format when a stitching or prosody change must reach
clips that are otherwise unchanged; leave it alone for a text edit, which
changes the key by itself.

The casting brief for the DELF pack. Counted from the authored source, not estimated.

---

## 1. What blanc-01 actually needs

| | |
|---|---|
| Listening documents | **5** (2 long, 3 short) |
| Documents with more than one speaker | **2 of 5** |
| Distinct role labels | **8** |
| Debate turns to render | **26**, all one voice |
| Voice slots available | **8** (4 f, 4 m — the same pool as TEF and TCF) |
| Labels whose sex cannot be inferred | **none** |

Casting is loose here. DELF's long documents carry three speakers at most and
its short ones carry a single voice, so nothing in this paper is tight the way
TCF's two three-speaker documents were.

The eight role labels:

| Document | Speakers |
|---|---|
| Exercice 1 · la semaine de quatre jours | UNE JOURNALISTE (f) · UN ÉCONOMISTE (m) · UNE SYNDICALISTE (f) |
| Exercice 2 · classer les hôpitaux | UN ANIMATEUR (m) · UNE CHERCHEUSE (f) · UN DIRECTEUR D'HÔPITAL (m) |
| Ex 3, document 1 | UNE RESPONSABLE (f) |
| Ex 3, document 2 | UN INGÉNIEUR (m) |
| Ex 3, document 3 | UNE JOURNALISTE (f) |

**The two documents that can break** are exercises 1 and 2, and for the reason
TCF's did: each puts two speakers of the same sex in one document, and the
dearest questions turn on attributing a position to the right person.

- **Exercice 1** has two women — the presenter and the union representative —
  and question 5 asks which position the *economist* holds against what the
  union representative said. If the two women sound alike the item is not hard,
  it is unanswerable.
- **Exercice 2** has two men — the presenter and the hospital director — and
  question 6 asks how the *researcher* described something the director
  challenged.

Cast them from **different registers**, not merely different voices: the
presenter is doing a job (`f-media` / `m-media`), the guest is arguing
(`f-formal` / `m-formal`).

---

## 2. Speech rate — one band, one speed

This is where DELF differs most from the other two files in this directory.

TEF sets a speed per block. TCF sets one per band and requires the rate to
**rise** across the épreuve, because a TCF paper is a slope from A1 to C2.
**DELF is a single level**, so there is one speed, no ramp to build, and no
ordering constraint to satisfy. The table is correspondingly short.

`voices.ts` reads it the same way: first cell the key, **last cell the speed**.
Add new columns before `Speed`, never after — a column added after it makes the
parser read that column, find no number, and store no speed at all. The render
does not fail; it produces the whole épreuve at the provider's default rate.

**0.7 is the floor and 1.2 the ceiling.** Outside them the provider answers 400
`invalid_voice_settings` and the run dies on the first document.

| Band | Documents | Target wpm (STANDARD-delf-b2 §3) | Last measured | Speed |
|---|---|---|---|---|
| b2 | 5 | ~ 165 | **163 wpm at 0.90** | 0.90 |
| EO | 29 turns | ~ 150 (our estimate) | **139 wpm at 0.85** | 0.85 |

**0.90 was a guess and it landed.** TCF's b2 documents sit at 0.84 to 0.92
across five papers for a 160 wpm target; DELF wants 165 and these documents are
broadcast debate throughout, so 0.90 was the middle of that range nudged up.
Measured at 163 against 165, first try — no calibration pass was needed, which
has not happened on any other paper in the pack.

Per document, in order: 153, 172, 188, 154, 159 wpm. The spread is wider than
the mean suggests and every one is inside the ±18% band (135–195). Recorded
total 563s of a 900s ceiling.

**`EO` is the debate examiner**, and it is deliberately slower than the
documents. He is not broadcasting, he is putting a question to a candidate and
waiting for an answer, and a challenge delivered at news pace reads as
hectoring.

**It measured 139 against a 150 target and has been LEFT THERE.** Nudging the
speed to close that gap would be circular: 150 was our own estimate, since the
exam board publishes no examiner rate, so tuning to hit it would only prove we
can hit our own guess. 139 is an unhurried person across a table, which is what
the number was meant to describe in the first place. If the debate ever reads as
too slow to a real candidate, that is the evidence to change it — not this.

### 2.1 A per-paper override is available and not yet needed

Write `b2@blanc-02` in the first cell and it applies to that paper alone. The
TCF pack needs this because text density differs between its papers; DELF has
one paper so far and nothing to compensate for. **A qualified row set to exactly
`1.00` is kept** — unlike an unqualified one, which is skipped because it equals
the provider default. That asymmetry cost a silent mis-render on TCF blanc-04.

---

## 3. Casting

`BAND_PREFERENCE` in `scripts/lib/examAudio.ts` already gives `b2` its order:
`f-media`, `m-formal`, `f-formal`, `m-media`. That is the right order for this
paper without changing anything — it opens with a broadcast woman and an
arguing man, which is exactly what exercises 1 and 2 need.

**The keying is band-based, and that is load-bearing.** `registerKeyFor` reads
the task's `level` for DELF as it does for TCF. It must never fall through to
the block-letter branch, which reads the first character of the task label: our
labels begin *"Compréhension de l'oral…"*, so DELF would be cast and paced as a
TEF block C micro-trottoir with nothing failing. That is not hypothetical — it
happened to TCF once, and DELF was in the same fall-through until this file was
written. `examAudio.test.ts` now pins it for both formats.

| Slot | Sex | Register | Serves on blanc-01 | Voice id | Settings |
|---|---|---|---|---|---|
| `f-neutral` | F | Everyday, warm, unhurried. | the Ex 3 responsable and journalist | GYzIdoKkRyANjBvkKYfO | |
| `f-formal` | F | Institutional, even. Reads, does not chat. | **the second woman in exercise 1** | GoEy5CmodqJy0T9AxjLk | |
| `f-media` | F | Broadcast. Projects, varies pitch. | **the presenter in exercise 1**; the researcher in exercise 2 | 3C1zYzXNXNzrB66ON8rj | |
| `f-street` | F | Spontaneous, uneven. | unused on blanc-01 — kept so the pool stays whole | B7fiLqn1fkwb8VKxZsLm | |
| `m-neutral` | M | Everyday, warm, unhurried. | the Ex 3 engineer | jGpnMdbhtKgQbVrYezOx | |
| `m-formal` | M | Institutional. Argues from a position. | the economist in exercise 1; **the director in exercise 2**; the debate examiner | 7DC4sk5JWSwsxDH9wneS | |
| `m-media` | M | Broadcast, a shade lower and slower. | **the presenter in exercise 2** | DGTOOUoGpoP6UZ9uSWfA | |
| `m-street` | M | Spontaneous. | unused on blanc-01 — kept so the pool stays whole | UBXZKOKbt62aLQHhc1Jm | |

Voice ids are the same pool as TEF and TCF. That is intentional: a learner who
sits a TCF paper and then a DELF one should not meet eight new strangers, and
the registers mean the same thing in both.

---

## 4. Trademark

DELF is a registered trademark of France Éducation international. Named here
descriptively. No endorsement, affiliation or equivalence is claimed or implied.
