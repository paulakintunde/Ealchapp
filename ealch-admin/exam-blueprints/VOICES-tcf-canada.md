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
An UNQUALIFIED speed of exactly `1` is skipped rather than stored, because
`speed=1` in an assetKey would re-render a whole band to sound identical to the
default. A qualified one is kept: `c1@blanc-04 | 1.00` does not mean "no
multiplier", it means "not 0.98", and dropping it hands that paper the very
default it was written to override. It was dropped, blanc-04's C1 re-rendered at
0.98 while this table said 1.00, and the two disagreed with nothing to say so.

**0.7 is the floor and 1.2 the ceiling.** The provider rejects anything outside
that range outright, with `invalid_voice_settings`, and the run dies on the
first document rather than part way through. A1 wants 110 wpm and the measured
correction against the first voice pool was 0.61, below the floor. That is a
limit of the voice, not a choice, and the only other lever on an A1 document
would be to make it say less, which the length envelope forbids.

**The speed must stay the last column.** Adding a column after it makes the
parser read that column instead, find no number, and store no speed at all. The
render does not fail: it produces the whole épreuve at the provider's default
rate, which is exactly the defect this table exists to prevent. Add new columns
before `Speed`, never after. `voices.test.ts` now asserts every band has a
speed, so this fails loudly rather than silently.

**A PAPER MAY OVERRIDE ITS BAND.** Write `b2@blanc-02` in the first cell and it
applies to that paper alone; the unqualified row stays the default for every
other. This is not a convenience. The multiplier compensates for how fast the
provider reads THIS text, and density differs between papers of one format:
blanc-01's B2 documents come out at about 192 wpm unmultiplied, blanc-02's at
174. No single value puts both at the standard's 160. A shared table was tuned
for blanc-02 and silently took blanc-01's ramp out of order — c1 fell below b2
on a paper that had already been reviewed and published.

**The defaults are blanc-01's**, because it is the gold paper and the one that
has been sat.

| Band | Documents | Target wpm (STANDARD-common §2) | Last measured | Speed |
|---|---|---|---|---|
| a1 | 3 | ≤ 110 | 118 wpm at 0.70 (floored) | 0.70 |
| a2 | 6 | ~ 120 | 123 wpm at 0.72 | 0.72 |
| b1 | 7 | ~ 140 | 142 wpm at 0.71 | 0.71 |
| b2 | 4 | ~ 160 | 157 wpm at 0.84 | 0.84 |
| c1 | 3 | ~ 175 | 174 wpm at 0.98 | 0.98 |
| c2 | 1 | ~ 185 | 186 wpm at 1.18 | 1.18 |
| EO | 1 | ~ 140 | not measured | 0.83 |

Per-paper overrides. Only the bands that actually differ appear here; anything
absent falls through to the table above.

| Band · paper | Documents | Target wpm | Last measured | Speed |
|---|---|---|---|---|
| a2@blanc-02 | 6 | ~ 120 | 121 wpm at 0.73 | 0.73 |
| b2@blanc-02 | 4 | ~ 160 | 161 wpm at 0.92 | 0.92 |
| c1@blanc-02 | 3 | ~ 175 | 169 wpm at 0.99 | 1.02 |
| a2@blanc-03 | 6 | ~ 120 | 132 wpm at 0.72 | 0.70 |
| b1@blanc-03 | 7 | ~ 140 | 137 wpm at 0.70 | 0.72 |
| b2@blanc-03 | 4 | ~ 160 | 152 wpm at 0.84 | 0.88 |
| c1@blanc-03 | 3 | ~ 175 | 178 wpm at 0.98 | 0.96 |
| c2@blanc-03 | 1 | ~ 185 | 176 wpm at 1.18 | 1.20 |
| a2@blanc-04 | 6 | ~ 120 | 126 wpm at 0.70 | 0.70 |
| b2@blanc-04 | 4 | ~ 160 | 165 wpm at 0.91 | 0.91 |
| c1@blanc-04 | 3 | ~ 175 | 171 wpm at 1.00 | 1.00 |
| c2@blanc-04 | 1 | ~ 185 | 187 wpm at 1.15 | 1.15 |

**blanc-04's A1 could not be fixed with a speed at all,** and it took two goes
to find what did fix it. It measured 130 wpm against a 110 target with the
default already at the 0.70 floor, so there was nowhere lower to go.

The first theory was turn count: a monologue has no turn boundaries, and a turn
boundary is a pause. Two of the three documents were monologues, so they became
dialogues. The band improved and the worst document got WORSE, from 137 to 143.

Adding turns had added words, and the rate is words over seconds. The document
was written almost entirely in monosyllables — *oui*, *non*, *alors*, *quel
temps* — and a word counts as one whether it takes a fifth of a second or a
whole one. Rewriting the same exchange with longer words (*bonjour Monsieur*,
*cet après-midi*, *votre parapluie*) took it to 111, and the band to 119.

So on a floored band there are two levers and they are not the same one: turn
boundaries buy seconds, and word length buys seconds without buying words. Reach
for the second when the first makes things worse.

**blanc-03's C2 is at the ceiling and cannot reach its target.** Its two voices
read that document at about 149 wpm unmultiplied, so 1.20 — the provider's
maximum — delivers roughly 179 against a target of 185. That is inside
tolerance and it is the most the format allows. A2 has the mirror problem on
the same paper: 183 wpm unmultiplied means even the 0.70 floor leaves it near
128. Both ends of the range are now in use on one paper, which is worth knowing
before anyone assumes a speed can always be found.
| _(c2 needs no override: blanc-02 measured 183 at 1.17 and wants 1.18, which is already the default)_ | | | | |

**b2 is slower than b1 and that is not a typo.** The speed is a multiplier on
whatever the voice does with the text in front of it, and the b2 documents come
out of the provider far faster unmultiplied than the b1 ones do. Denser, shorter
words. What has to rise across the ramp is the DELIVERED rate, so the
multipliers are free to do whatever produces it. That shape is a property of the
TEXT rather than of the voices, so it should survive a recast even though the
exact numbers will not.

`EO` is the recorded interlocutor of Expression orale tâche 2 — a person at an
agency answering a candidate's questions. Not a band, and it needs a rate all
the same.

**The speed column is a starting point, not a setting.** The equivalent TEF figures were wrong in both directions until they were measured: the renderer produced 127 wpm where 120 was asked for, and 167 where 175 was. Render once, then run `scripts/exam/check-speech-rate.ts tcf` — it reports measured wpm per document against the band envelope, and fails the ramp check if the rate does not rise — and correct these from what came out, not from what was intended.

**How far a recast moves these.** The second pool needed b1 taken from 0.86 to
0.71 and c2 from 1.01 to 1.18, because the new male voices read considerably
faster and the new C2 pairing considerably slower. Nothing about the documents
changed. That is the size of the correction a recast costs, and it is the reason
the column is never final: it describes voices, not text.

A rate that does not rise is not a cosmetic failure. It is the difficulty lever the standard calls "the cheapest one we control", switched off.

---

## 4. The renderer was block-shaped, and now is not

This section used to say the work below was outstanding. It is done, and what it
cost is worth keeping.

`examAudio.ts` keyed both casting preference and speed by TEF block letter, and
`render-audio.ts` read `cast.blockSpeed.get(unit.block)`. A TCF task has no
block, it has a `level`. Both lookups take the band now.

Two traps were found doing it, and both are the same trap:

**Deriving the key from the label.** `'Compréhension orale · A1'` begins with C,
so slicing the first character silently cast and paced every document in the
paper as a TEF block C micro-trottoir. Nothing failed.

**Loading one casting file for both formats.** `render-audio.ts` read
VOICES-tef-canada.md whatever the format. Both files list the same eight slot
names, so casting resolved perfectly and only the SPEEDS went missing, every
band falling back to the provider's default. The first full TCF render shipped
with no ramp in it at all, and the only way to see that was to measure words per
second per band afterwards.

The theme: on this paper a casting mistake is loud and a pacing mistake is
silent. Everything here is guarded now — `voices.test.ts` for the table,
`scripts/exam/rate-rules.ts` for the ramp.

---

## 5. The pool — where the voice ids go

**Render version:** `v1`

`scripts/lib/voices.ts` reads the table below. It finds the voice id and the
settings by their **column headings**, so the columns can be reordered to suit
whoever is reading; it falls back to the fifth and sixth columns only if the
headings are missing. Everything else is for the reader. A slot with an empty id
is **uncast**, and a document needing it refuses to render rather than borrowing
another voice — substituting is exactly how two speakers in one document end up
sharing one.

This is the opposite of the band table in §3, which is read by POSITION and
where the speed must stay last. The two tables are not the same kind of table.

To change a voice: audition in the ElevenLabs UI, copy the id, paste it into the
`Voice id` cell. Nothing else to run. `Settings` is free text like
`stability 0.4, similarity 0.8`; anything that is not a number is ignored rather
than coerced, because a `NaN` reaching a synthesis request is a wasted credit.

**TCF has its own pool now.** It began as a copy of TEF's, on the argument that
the eight slots, the registers and the requirement (metropolitan French,
STANDARD-common §2.1) are identical across the two formats. Six of the eight
have since been recast, so the two papers no longer sound like the same exam
board, which was always available as a product decision and has now been taken.

`f-neutral` and `f-media` are the two still shared with TEF. That is worth
knowing before changing either of them here: the clips are content-addressed, so
a TCF-only edit to a shared id re-renders TCF and leaves TEF alone, but a reader
comparing the two files will find the same string in both and may assume it is
deliberate. It is.

What has NOT changed is §2: the two documents that can break are the ones with
three voices, and both must resolve to different registers. Check that first
after any recast.

| Slot | Sex | Register to audition for | Serves on this paper | Voice id | Settings |
|---|---|---|---|---|---|
| `f-neutral` | F | Everyday, warm, unhurried. The default female speaker. | A1–A2 announcements and counters, B1 interviewees | GYzIdoKkRyANjBvkKYfO| |
| `f-formal` | F | Institutional, even, no warmth. Reads, does not chat. | recorded announcements; **the second woman in documents 20 and 30** | GoEy5CmodqJy0T9AxjLk | |
| `f-media` | F | Broadcast. Projects, varies pitch, lands its clauses. | B1 reporters; **the moderator in documents 20 and 30** | 3C1zYzXNXNzrB66ON8rj | |
| `f-street` | F | Spontaneous, uneven, thinks mid-sentence. | unused on blanc-01 — kept so the pool stays whole | B7fiLqn1fkwb8VKxZsLm | |
| `m-neutral` | M | Everyday, warm, unhurried. The default male speaker. | A1–A2 exchanges, B1 interviewees, the C1 historian | jGpnMdbhtKgQbVrYezOx | |
| `m-formal` | M | Institutional. Specialists who argue from a position. | B2 and C1 panels, the C2 historian |7DC4sk5JWSwsxDH9wneS | |
| `m-media` | M | Broadcast, a shade lower and slower than `f-media`. | B1 reporters where the woman is the interviewee | DGTOOUoGpoP6UZ9uSWfA | |
| `m-street` | M | Spontaneous. | unused on blanc-01 — kept so the pool stays whole | UBXZKOKbt62aLQHhc1Jm | |

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

A clip is marked when a person has listened to it against its transcript. `scripts/exam/marking-sheet.ts tcf 1` builds the sheet, grouped by band, with the two three-voice documents flagged.

Listen for, in this order:

1. **The two three-voice documents.** Can you tell the two women apart with your eyes shut? That is the item.
2. **Numbers, times and prices**, which synthesis reads inconsistently and which are frequently the answer — 14 h 10 against 14 h 30 in document 4, 950 € and 380 € in the interaction task.
3. **The rate rising.** Document 1 against document 37, back to back. If they sound the same speed, the ramp is not in the audio.
