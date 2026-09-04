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

| Band | Target wpm (STANDARD-common §2) | Suggested speed | Documents |
|---|---|---|---|
| A1 | ≤ 110 | 0.72 | 3 |
| A2 | ~ 120 | 0.78 | 6 |
| B1 | ~ 140 | 0.85 | 7 |
| B2 | ~ 160 | 0.92 | 4 |
| C1 | ~ 175 | 0.99 | 3 |
| C2 | ~ 185 | 1.03 | 1 |

**The speed column is a starting point, not a setting.** The equivalent TEF figures were wrong in both directions until they were measured: the renderer produced 127 wpm where 120 was asked for, and 167 where 175 was. Render once, then run `scripts/tef/check-speech-rate.ts` — it already reports measured wpm per document against the band envelope — and correct these from what came out, not from what was intended.

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

## 5. The pool

Unchanged from TEF: `f-neutral`, `f-formal`, `f-media`, `f-street`, `m-neutral`, `m-formal`, `m-media`, `m-street`.

Suggested register per band, following the documents rather than the band:

| Band | Character of the documents | Reach for |
|---|---|---|
| A1–A2 | announcements, counters, a phone call | `f-neutral`, `m-neutral`, plus `f-formal` for the recorded announcements |
| B1 | interviews and conversations | `f-media` for reporters, `m-neutral` / `f-neutral` for the interviewed |
| B2–C1 | panels and debates | `f-media` for moderators, `f-formal` / `m-formal` for specialists |
| C2 | one philosopher, one historian | `f-formal` and `m-formal`, unhurried |

---

## 6. What is deliberately not being done

- **No accents cast for effect.** Every voice is standard metropolitan French. A regional accent as a difficulty lever is a different instrument from the one the blueprint describes.
- **No emotion direction.** The debates are arguments, not quarrels. A voice that sounds annoyed tells the candidate who is losing, which is information the transcript does not give.
- **No per-document voice.** Thirty roles across eight slots means slots repeat between documents, and that is fine: a candidate hears one document at a time. The rule is only that two speakers never share a voice **inside** one document.

---

## 7. Marking

A clip is marked when a person has listened to it against its transcript. `scripts/tef/marking-sheet.ts` builds the sheet; it takes a variant and will need the TCF paper added to its lookup.

Listen for, in this order:

1. **The two three-voice documents.** Can you tell the two women apart with your eyes shut? That is the item.
2. **Numbers, times and prices**, which synthesis reads inconsistently and which are frequently the answer — 14 h 10 against 14 h 30 in document 4, 950 € and 380 € in the interaction task.
3. **The rate rising.** Document 1 against document 37, back to back. If they sound the same speed, the ramp is not in the audio.
