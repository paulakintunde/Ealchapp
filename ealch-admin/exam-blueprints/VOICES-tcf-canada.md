# VOICES — TCF Canada

**Blueprint:** `tcf-canada-2026.01` · **Paper:** blanc-01 · **Drafted:** 2026-09-04 (phase E9)

The casting brief for the TCF gold paper. Counted from the authored source, not estimated.

---

## 1. What blanc-01 actually needs

| | |
|---|---|
| Listening documents | **24** |
| Documents with more than one speaker | **19 of 24** |
| Distinct role labels | **30** |
| Voice slots available | **8** (4 f, 4 m — unchanged from TEF) |
| Labels whose sex cannot be inferred | **none** |

That last row matters more than it looks. `sexOfLabel` reports an unmarked label as `unknown` and gives it whatever slot is free, which is how a `LA BOULANGÈRE` ends up with a man's voice. Every label in this paper is marked, so nothing is being guessed.

No document needs more than **three** voices, and the pool holds eight. Casting is not tight here; only two documents are.

---

## 2. The two documents that can break

Nineteen documents have two speakers, and in every one of those the two are **one man and one woman**. Those cast themselves: any f-slot against any m-slot is audibly two people.

Two documents have three speakers, and both put **two women together**:

| Document | Band | Speakers | What the item asks |
|---|---|---|---|
| 20 · table ronde sur le télétravail | B2 | L'ANIMATRICE (f) · UNE DRH (f) · UN SOCIOLOGUE (m) | which of the two guests conceded, and what the other did with the concession |
| 30 · la reproductibilité des résultats | C1 | UNE MODÉRATRICE (f) · UN STATISTICIEN (m) · UNE BIOLOGISTE (f) | where the statistician and the biologist actually disagree |

**These are the whole casting session.** Both items turn on attributing a position to the right person. If the DRH and the animatrice sound alike, or the modératrice and the biologiste do, the question is not hard — it is unanswerable, and no amount of good French in the transcript repairs it.

Cast them from **different registers**, not just different voices: the moderator is doing a job (`f-media`), the guest is arguing (`f-formal` or `f-neutral`). Two voices from the same register are the collision this section exists to prevent.

The moderator in both speaks once, briefly, at the top. That is deliberate — the listener's ear only has to hold two arguers — but it does not remove the requirement.

---

## 3. Speech rate rises across the ramp

STANDARD-tcf §7: *"CO: speech rate rises across the épreuve and sits in each band's envelope."*

This is the single biggest difference from TEF's casting. TEF sets a speed **per block**, because its blocks are exercise families with fixed bands. TCF has no blocks; it has a slope, and the rate is a function of **where on the slope the document sits**.

`voices.ts` reads this table too: first cell the band, **last cell the speed**.
A speed of exactly `1` is skipped rather than stored, because `speed=1` in an
assetKey would re-render a whole band to sound identical to the default.

| Band | Documents | Target wpm (STANDARD-common §2) | Speed | First render gave |
|---|---|---|---|---|
| a1 | 3 | ≤ 110 | 0.66 | 120 wpm at 0.72 |
| a2 | 6 | ~ 120 | 0.79 | 118 wpm at 0.78 |
| b1 | 7 | ~ 140 | 0.83 | 143 wpm at 0.85 |
| b2 | 4 | ~ 160 | 0.78 | 188 wpm at 0.92 |
| c1 | 3 | ~ 175 | 0.97 | 177 wpm at 0.99 |
| c2 | 1 | ~ 185 | 1.02 | 186 wpm at 1.03 |
| EO | 1 | ~ 140 | 0.83 | not measured |

**b2 is slower than b1 and that is not a typo.** The speed is a multiplier on
whatever the voice does with the text in front of it, and the b2 documents come
out of the provider at about 204 wpm unmultiplied against b1's 168. Denser,
shorter words. What has to rise across the ramp is the DELIVERED rate, so the
multipliers are free to do whatever produces it.

`EO` is the recorded interlocutor of Expression orale tâche 2 — a person at an
agency answering a candidate's questions. Not a band, and it needs a rate all
the same.

**The speed column is a starting point, not a setting.** The equivalent TEF figures were wrong in both directions until they were measured: the renderer produced 127 wpm where 120 was asked for, and 167 where 175 was. Render once, then run `scripts/exam/check-speech-rate.ts tcf` — it reports measured wpm per document against the band envelope, and fails the ramp check if the rate does not rise — and correct these from what came out, not from what was intended.

The column above has been through that once. **It has not been through it since the documents were extended to their envelope**, and the rate a voice delivers depends on the text it is reading, so these are corrections against the short drafts and are due one more pass.

A rate that does not rise is not a cosmetic failure. It is the difficulty lever the standard calls "the cheapest one we control", switched off.

---

## 4. Before this file can be used: the renderer is block-shaped

`scripts/lib/examAudio.ts` keys both casting preference and speed by **TEF block letter**:

```ts
export const BLOCK_PREFERENCE: Record<string, SlotName[]> = { A: [...], B: [...], ... G: [...] };
```

and `render-audio.ts` reads `cast.blockSpeed.get(unit.block)`. There is no block on a TCF task — there is a `level`. So rendering this paper needs the preference and speed lookups keyed by band as well as by block, which is a small change and an unwritten one.

Recorded here rather than discovered at render time, because the casting session and the code change are independent and the session need not wait for it.

---

## 5. The pool — where the voice ids go

**Render version:** `v1`

`scripts/lib/voices.ts` reads the table below. It takes the **fifth column** as the
voice id and the sixth as prosody settings; everything else is for the reader.
A slot with an empty id is **uncast**, and a document needing it refuses to
render rather than borrowing another voice — substituting is exactly how two
speakers in one document end up sharing one.

To change a voice: audition in the ElevenLabs UI, copy the id, paste it into the
`Voice id` cell. Nothing else to run. `Settings` is free text like
`stability 0.4, similarity 0.8`; anything that is not a number is ignored rather
than coerced, because a `NaN` reaching a synthesis request is a wasted credit.

**These are TEF's voices, and that is a proposal rather than a default.** The
eight slots, the registers and the requirement (metropolitan French,
STANDARD-common §2.1) are identical across the two formats, and the two
documents that could break already resolve to different slots — see §2. So this
paper can render today. Re-audition only if you want TCF to sound like a
different exam board, which is a product decision and not a casting one.

| Slot | Voice id | Settings | Sex | Register to audition for | Serves on this paper |
|---|---|---|---|---|---|
| `f-neutral` | GYzIdoKkRyANjBvkKYfO |  | F | Everyday, warm, unhurried. The default female speaker. | A1–A2 announcements and counters, B1 interviewees |
| `f-formal` | O31r762Gb3WFygrEOGh0 |  | F | Institutional, even, no warmth. Reads, does not chat. | recorded announcements; **the second woman in documents 20 and 30** |
| `f-media` | 3C1zYzXNXNzrB66ON8rj |  | F | Broadcast. Projects, varies pitch, lands its clauses. | B1 reporters; **the moderator in documents 20 and 30** |
| `f-street` | WQKwBV2Uzw1gSGr69N8I |  | F | Spontaneous, uneven, thinks mid-sentence. | unused on blanc-01 — kept so the pool stays whole |
| `m-neutral` | HeQxwrjIb6zvCa1bt1EE |  | M | Everyday, warm, unhurried. The default male speaker. | A1–A2 exchanges, B1 interviewees, the C1 historian |
| `m-formal` | zAr1POVZUrr1zkX0T94t |  | M | Institutional. Specialists who argue from a position. | B2 and C1 panels, the C2 historian |
| `m-media` | fEtpdogpDkBrq53KdupV |  | M | Broadcast, a shade lower and slower than `f-media`. | B1 reporters where the woman is the interviewee |
| `m-street` | SsVUx1gFlvniIrUMZtgF |  | M | Spontaneous. | unused on blanc-01 — kept so the pool stays whole |

Register per band, which is what the casting lists in `examAudio.ts` encode:

| Band | Character of the documents | Cast from |
|---|---|---|
| A1–A2 | announcements, counters, a phone call | `f-neutral`, `m-neutral`, then `f-formal`, `m-formal` |
| B1 | interviews and conversations | `f-media`, `m-neutral`, then `f-neutral`, `m-media` |
| B2 | panels and debates | `f-media`, `m-formal`, then `f-formal`, `m-media` |
| C1 | specialists arguing | `f-media`, `m-formal`, then `f-formal`, `m-neutral` |
| C2 | one philosopher, one historian | `f-formal`, `m-formal`, unhurried |

---

## 6. What is deliberately not being done

- **No accents cast for effect.** Every voice is standard metropolitan French. A regional accent as a difficulty lever is a different instrument from the one the blueprint describes.
- **No emotion direction.** The debates are arguments, not quarrels. A voice that sounds annoyed tells the candidate who is losing, which is information the transcript does not give.
- **No per-document voice.** Thirty roles across eight slots means slots repeat between documents, and that is fine: a candidate hears one document at a time. The rule is only that two speakers never share a voice **inside** one document.

---

## 7. Marking

A clip is marked when a person has listened to it against its transcript. `scripts/exam/marking-sheet.ts tcf 1` builds the sheet.

Listen for, in this order:

1. **The two three-voice documents.** Can you tell the two women apart with your eyes shut? That is the item.
2. **Numbers, times and prices**, which synthesis reads inconsistently and which are frequently the answer — 14 h 10 against 14 h 30 in document 4, 950 € and 380 € in the interaction task.
3. **The rate rising.** Document 1 against document 37, back to back. If they sound the same speed, the ramp is not in the audio.
