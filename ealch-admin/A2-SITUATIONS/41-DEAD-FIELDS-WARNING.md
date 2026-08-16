# Five fields a2.07 authored that draw NOTHING — read before you copy its files

**Found 2026-08-15 by `pnpm -C ealch-admin typecheck`, and by nothing else.**
The seed validator, the density validator and 4,195 passing tests were all green
while every one of these was broken. **a2.26 has already inherited three of them.**

`validateLesson` tolerates unknown keys. So does the publish path. A field that
is not in the type is not rejected — it is carried into Postgres, into the seed,
into the OTA snapshot, and rendered by nobody.

---

## The five

| # | what a2.07 wrote | where | what actually renders |
|---|---|---|---|
| 1 | `sub` on a **groupDrill item** | 33 items across s09, s12, s18 | **nothing.** The item type is `{ fr, ipa?, note?, itemId?, respell?, en?, silent?, pair? }` and `GroupDrillView` builds its second line from `note` / `respell` / `en`. Use **`note`**. |
| 2 | `itemIds` on a **cardDeck** | s17-repair | **nothing.** Only `practice` reads `s.itemIds` (`PracticeVFView`). a2.07 was the only one of **285** shipped cardDecks carrying it. Release ids through `deckTranche`. |
| 3 | `canDo` on the **Lesson** | lesson root | **nothing.** `canDo` belongs to the UNIT. a2.07 was 1 of 66. |
| 4 | `track` on the **Lesson** | lesson root | **nothing.** 1 of 66. |
| 5 | `teaches` on the **Lesson** | lesson root | **nothing.** The house field is **`grammarIntroduced`** (62 of 66 lessons), with **`grammarAssumed`** (59 of 66). `teaches` was invented. |

All five are fixed in a2.07 and pinned by two new tests in
`a2-07-restaurant.test.ts`:

- *groupDrill items use note, not sub: sub draws nothing*
- *the lesson carries no field the shipped corpus does not* — which compares
  a2.07's key set against the other 65 lessons and fails on anything invented.

## a2.26 has three of them right now

`scripts/data/courses-lesson.ts` currently fails the admin typecheck with **19
errors**, and they are the same three classes:

```
courses-lesson.ts: 'beats' does not exist on type 'LessonSection'      (typing)
courses-lesson.ts: 'sub' does not exist in type '{ fr; ipa?; note?; ... }'  (x17)
courses-lesson.ts: format: string is not assignable to LessonDrill['format']
```

**a2.26's builder: rename every groupDrill `sub` to `note` before you merge.**
Seventeen of your second lines are currently blank on device and nothing will
tell you.

## The two-line fix for the typing ones

```ts
// `beats`: LessonSection is a union and only the scene variant has beats.
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [ ... ];

// `drills`: format is a literal union, not string.
import type { LessonDrill } from '../../../ealch-v2/src/content/schema.ts';
const DRILLS: LessonDrill[] = [ { id, title, format: 'flashcard' as const, ... } ];
```

## The rule this produces, and it belongs in the band's shared brief

> **Run `pnpm -C ealch-admin typecheck` before you merge.** It is the only check
> in the project that sees a field the renderer does not read. The seed
> validator, the density validator and the whole test suite will stay green
> while a third of your second lines render blank.

a2.07 shipped, published in snapshot v48 and passed 4,195 tests with 33 blank
lines in it. That is how quiet this failure is.
