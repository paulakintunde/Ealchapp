# Proposal: a route to the second lesson of a unit

Rider 1 of `A2-10-L2-VERBES-IR-IRREGULIERS-SCOPE.md`.

> **LANDED 2026-08-12.** Written as investigation-only; the recommended option in
> §3 was then approved and implemented. See **§7** for what shipped and for the
> one thing this document got wrong.

Read 2026-08-11 across `app/den.tsx`, `app/lessonoverview.tsx`, `app/missions.tsx`,
`app/lesson.tsx`, `src/content/missions.ts`, `src/services/content.logic.ts` and
`src/content/missions.test.ts`.

---

## 1. The gap is one thing, not two

I opened this expecting two problems — no route, and no way to tell two lessons
apart. **Only the first is real.** Everything else already works, and I am recording
that in detail because the temptation is to fix things that are not broken.

### What already works, verified

| behaviour | where | verdict |
|---|---|---|
| a unit's lessons resolve in `Lesson.seq` order | `content.logic.ts:301` `lessonsOfUnit` | ✅ sorts by seq |
| finishing l1 hands the learner to l2 | `lesson.tsx:127` `nextL` walks `units(band).flatMap(lessonsOf)` | ✅ works across and within units |
| unit progress covers both lessons | `den.tsx:64` unions `lessonsOf(unitId).flatMap(l => l.itemIds)` | ✅ no change needed |
| the overview renders whichever lesson id it is given | `lessonoverview.tsx:28` | ✅ l2 gets its own title, subFr, intro, stats |
| the mission list likewise | `missions.tsx:29` | ✅ |
| the paywall applies to both | chokepoint is `lesson.tsx`, not the unit | ✅ |
| the in-lesson header can differ per lesson | `lesson.tsx:612,660` use **`L.tag` raw** | ✅ a1.30.l2 shows `A1 · EXAMEN` here |

### The one thing that does not

```
app/den.tsx:169
router.push({ pathname: '/lessonoverview', params: { key: u.lessonIds[0] } });
```

**The Den opens `lessonIds[0]` and there is no other entry point.** A second lesson
is reachable only by playing the first one to its result card. Once l1 is finished,
l2 has no route at all short of replaying l1.

---

## 2. The thing I nearly broke, and why I did not

My first instinct was that `lessonEyebrow` was also wrong, because it ignores the
authored `tag`:

```ts
// src/content/missions.ts:105
export function lessonEyebrow(lesson: { level: Level; tag: string }, unit: { seq: number } | null) {
  if (!unit || !Number.isFinite(unit.seq)) return lesson.tag;
  return `${lesson.level.toUpperCase()} · LEÇON ${String(unit.seq).padStart(2, '0')}`;
}
```

So on the overview and the mission list, both lessons of a unit read `A2 · LEÇON 03`.
It looked like a bug. **It is not, and "fixing" it would have been a regression.**

Its own doc comment gives the reason: ids and seq deliberately disagree across this
curriculum (sons.10 sits at seq 7, a1.27/a1.28 were inserted at seq 3/4), so an
authored tag can be stale in a way the computed number cannot. And
`missions.test.ts:81` asserts it over **every lesson in the seed**:

> `every seed lesson gets an eyebrow matching its position in its track`

Making the eyebrow prefer `tag` for a `seq > 1` lesson would take that test red, and
the test would be right to fail.

**The eyebrow answers "where am I in the track". That question has one answer for both
lessons of a unit, and it should.** Telling two lessons of one unit apart is a
different job, and it is already done: the overview leads with `overview.titleEn` and
`subFr`, the mission list leads with `L.title`, and the in-lesson header uses the raw
`tag`. Nothing needs adding.

---

## 3. The proposal

### Recommended: a sibling row on the overview (~12 lines, one file)

`app/lessonoverview.tsx` already holds `L` and imports `content`. After the
prerequisites line, when the unit has more than one lesson, list the siblings:

```
const siblings = content.lessonsOf(L.unitId).filter((x) => x.id !== L.id);
```

and render one tappable row per sibling → `/lessonoverview?key=<sibling.id>`, showing
`overview.titleEn ?? title` and its mission count.

Why this one:

- **Additive and inert for the other 74 units.** `siblings` is empty for every
  one-lesson unit, so nothing renders and nothing changes.
- **It is where the decision is made.** The Den tap already lands the learner on
  l1's overview; the overview is the front door and the natural place to say "there
  is a second door".
- **It makes l2 re-openable**, which the result-card hand-off does not.
- No change to the Den's tap behaviour, which is shared by all 75 units and is the
  riskiest thing to touch.

### Optional polish: a chip in the Den row (~15 lines)

`den.tsx:174-186` already renders an inline `Press` chip inside the unit row for
narrated mode. A second chip for a second lesson would copy an established shape in
the same row rather than invent one. Worth doing if you want l2 reachable without a
tap-through; not required for correctness.

### Explicitly NOT proposed

- **Changing `lessonEyebrow`.** §2.
- **Making the Den tap open the first *incomplete* lesson.** It sounds smaller and it
  is worse: a learner who has finished the unit could then never reopen l1 from the
  Den, trading one hole for another.
- **A new route.** `/lessonoverview?key=` and `/missions?key=` already take any lesson
  id and work; I deep-linked both against a2.10.l1 on the device.

---

## 4. This also fixes a shipped defect

`a1.30` is the only two-lesson unit today. `a1.30.l2` is **the A1 exam**, and right
now the only way to reach it is to play `a1.30.l1` — a twenty-nine-round review —
through to its result card. **There is no way to retake the A1 exam.**

That is a live hole in shipped content, it is not a2.10's, and the sibling row closes
it in the same twelve lines.

---

## 5. What to test, whoever lands it

- A unit with two lessons exposes a route to each, asserted against the seed rather
  than against a2.10 specifically, so a1.30 is covered by the same guard.
- A unit with one lesson renders no sibling row (the inert case is the one that
  regresses silently).
- `missions.test.ts`'s eyebrow test still passes untouched — if it goes red, the
  change has drifted into §2's territory.
- Device: the overview at `exp+wonerock://lessonoverview?key=a1.30.l1` shows a row
  for the exam, and tapping it opens `a1.30.l2`.

---

## 6. Consequence for a2.10.l2

**None blocking.** l2 can be authored and shipped before this lands: it will be
reachable by finishing l1, which is the flow a learner takes the first time anyway.
What the fix adds is the ability to *return* to it.

If it does not land, that gap must be stated in a2.10.l2's build report rather than
discovered later — invariants §1 is a list of seven things that were authored, valid
and drawn by nothing, and this would be the eighth.

---

## 7. What landed, 2026-08-12

The **recommended** option in §3 and nothing else. The optional Den chip was not
built; §3's four rejections all held.

### The change

| file | what |
|---|---|
| `app/lessonoverview.tsx` | `siblings`, derived from `content.lessonsOf(L.unitId)` minus the current lesson, rendered as tappable rows between the prerequisites line and the CTA. +36 lines. |
| `src/i18n/strings.ts` | `ovAlsoHere` in both tables (`ALSO IN THIS UNIT` / `AUSSI DANS CETTE UNITÉ`). The mission count reuses the existing `ovMissionsWord`. +5 lines. |
| `src/content/lesson-siblings.test.ts` | new, 13 tests. |

No change to `den.tsx`, to `lessonEyebrow`, to the router, or to any content.

### Gates

- Suite **2951 → 2964, 0 fail**. `tsc --noEmit` clean.
- Ten mutations, all confirmed red — including one on `den.tsx`, so the file this
  document is about is pinned even though it was not edited.
- Device (Pixel 6, dev client on Metro 8082), all four checks in §5:
  1. `ealch://lessonoverview?key=a1.30.l1` → **ALSO IN THIS UNIT / The A1 Exam / 4 missions**, above the fold.
  2. Tapping it opens **The A1 Exam**, which carries the reciprocal row back to the review. **The A1 exam is retakeable.**
  3. `a2.10.l1` → **The Other -IR Verbs / 23 missions**.
  4. `a2.09.l1`, a one-lesson unit → nothing between the prerequisite line and the CTA. The inert case is genuinely inert.
- The eyebrow read `A1 · LEÇON 30` on **both** a1.30 lessons on the device, which is
  §2 holding rather than a defect.

### What this document got wrong

§5 gives the device URL as `exp+wonerock://lessonoverview?key=…`. The scheme in
`app.json` is **`ealch`**; `wonerock` is a dead name. The working form is
`adb shell am start -a android.intent.action.VIEW -d "ealch://lessonoverview?key=a1.30.l1"`.
Anyone who had tried the printed command would have got nothing and concluded the
route did not work.

### Two things the tests do NOT cover

- **Layout.** The assertions read the source as text, so they prove the row is wired
  and cannot prove it is legible. That is what the four screenshots are for, and a
  future unit with three lessons has never been drawn.
- **The l1 → l2 hand-off.** `lesson.tsx`'s result card is still the first-time path
  and it is still unwalked end to end on a device: `nextL` is read in code and
  asserted through the real `lessonsOfUnit`, not played. That gap predates this
  change and survives it.
