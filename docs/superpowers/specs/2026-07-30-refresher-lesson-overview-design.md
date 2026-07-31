# Refresher Course: lesson overview + missions flow — design

Date: 2026-07-30 · Status: design approved by Paul; spec pending his review
Scope: ealch-v2 (Expo app) + ealch-admin (authoring batch)

## Summary

Every Refresher Course (Den) lesson gets a two-page front door. Tapping a lesson in the Den
lands on an **overview page** written in English (the app teaches French to native English
speakers): title, French subtitle, CEFR/minutes/difficulty chips, description with French
translation, a missions summary card, prerequisites, and a "Start lesson" CTA. "Start lesson"
opens the **missions page**: the lesson's sections presented as a numbered mission list with
per-mission mechanic tags, completion checks, a progress bar, XP, and free navigation into any
mission. Tapping a mission opens the existing lesson pager at that section. The pager itself is
untouched.

Reference mockups: two screenshots provided by Paul on 2026-07-30 (alphabet lesson overview;
20-mission list). Visual language: existing app theme (dark, teal accent, serif italic titles).

**Guiding principle (Paul, 2026-07-30):** the structure is flexible and reads the actual state
of the content. Every count, stat, mechanic tag, mission list, and progress figure is generated
from the lesson's real sections at render time; only display copy (the `overview` block,
per-section `frSub`) is authored. Nothing is hardcoded per lesson, and no element renders from
invented data.

## Decisions (locked with Paul, 2026-07-30)

1. **Copy source**: authored. New optional `overview` fields on `Lesson`, batch-authored for
   the 6 current lessons via the ealch-admin pipeline. Existing English `intro` stays the
   description base.
2. **Mission taxonomy**: auto-derived from section `type` via a fixed mapping. No authoring.
3. **Mission rows**: free navigation. Every row tappable at any time; checks track completion.
   No locks anywhere on the missions page.
4. **Scope**: all Den lessons (sons + a1 + a2 bands; 6 lessons today, all future ones). Pages
   adapt to any section count.
5. **Architecture**: two new routes in front of the untouched `/lesson` pager.

## Flow and routes

```
Den unit card ──tap──▶ /lessonoverview?key=<lessonId>      NEW
  "Start lesson" / "See all N missions" ──▶ /missions?key=<lessonId>   NEW
    mission row tap ──▶ /lesson?key=<lessonId>&at=<sectionIx>          UNCHANGED
```

- `app/den.tsx`: the unit card's `router.push({ pathname: '/lesson', … })` becomes
  `router.push({ pathname: '/lessonoverview', … })`. No other den change.
- Every other entry point is unchanged and still targets `/lesson` directly: home weak-spots
  row, exam remediation deep links, resume, placement, the result card's next-lesson
  `router.replace`. The level-gate CHOKEPOINT in `app/lesson.tsx` stays exactly where it is.
  The Den's own row gate already paywalls locked bands before navigation, so the two new pages
  never render gated content; any path into actual content still lands on the chokepoint.
- Back: missions → overview → den (standard stack pops).
- Unknown/missing `key` on either new route: `router.replace('/den')`. (The pager's
  first-lesson fallback stays pager-only.)

## Overview page — `app/lessonoverview.tsx`

Element list, top to bottom, with data source for each:

| Element | Source |
|---|---|
| Back chevron + eyebrow `SONS · LEÇON 01` | existing `lesson.tag` (den back-chevron pattern) |
| Glyph tile ("Aa") | `overview.glyph`, hidden when absent |
| Title (serif italic, English) | `overview.titleEn`; fallback `lesson.title` |
| French subtitle « … » | `overview.subFr`; hidden when absent |
| CEFR chip | `lesson.level` → sons `A0`, a1 `A1`, a2 `A2` |
| Minutes chip ("45 min") | `overview.minutes`; hidden when absent |
| Difficulty chip (dots, n/5) | `overview.difficulty`; hidden when absent |
| Description (English) | existing `lesson.intro` |
| Description (French, italic) | `overview.introFr`; hidden when absent |
| Missions card: "N missions" + "see the list →" | N = `sections.length`; link → `/missions` |
| Counts row: required / gates / milestones / badge | derived (see taxonomy); zero-count stats hidden |
| Prerequisites line | unit `prereqUnitIds`: empty → "Prerequisites: none. This lesson starts from zero."; else "Prerequisite: " + each prereq unit's `title` resolved via the content service, comma-joined (e.g. "Prerequisite: L'alphabet") |
| "Start lesson" CTA | → `/missions` |
| "See all N missions" text link | → `/missions` |

Rules: nothing is ever fabricated — an unauthored field hides its element. The mockup's EN⇄FR
pill is deferred (see Out of scope). Page chrome strings come from `strings.ts`.

## Missions page — `app/missions.tsx`

| Element | Source |
|---|---|
| Eyebrow `SONS · LEÇON 01 · A0` | `lesson.tag` + CEFR display level |
| Display title (French, serif) | `overview.subFr`; fallback `lesson.title` |
| Sub copy "N missions, one badge at the end. Each mission has its own mechanic." | strings template; badge clause dropped when the lesson has no roundup |
| "Listen to the intro" | speaks `overview.introFr` (fr-FR) through the existing sound/audio service; hidden when absent. Does not touch tts.ts (known dev hot-reload trap) |
| Progress bar `done/N` + XP chip | mission progress store (below) |
| Mission row × N | one per section, in order |

Each row: number tile (accent + check overlay when done), English title = `section.title`,
French sub-line = `section.frSub` (new optional field, hidden when absent), mechanic tag from
the label map. Free navigation: every row is tappable and pushes
`/lesson?key=<id>&at=<sectionIx>`; LessonPager resolves section index → page index internally
(it already owns the section/page mapping, including image pages that contribute two pages).

## Derivation module — `src/content/missions.ts` (new, pure)

Exports `missionRole(type)`, `missionLabel(section)`, `missionStats(lesson)`. No React, fully
unit-testable.

**Taxonomy** (role per section type):
- `gate`: quiz, progressCheck, dictation
- `badge`: roundup
- `milestone`: story, scenario, listening, reading
- `required`: everything else (including any future type — safe default)

**Mechanic label map** (type → tag shown on the row):

| type | tag | type | tag |
|---|---|---|---|
| story | HISTOIRE | teach | IDÉE |
| goals | OBJECTIFS | steps | ÉTAPES |
| cardDeck | CARTES | examples | EXEMPLES |
| soundGrid | GRILLE | useCases | USAGES |
| letterGrid | GRILLE | hacks | ASTUCES |
| groupDrill | GROUPES | cheatSheet | MÉMO |
| trapDrill | PIÈGES | commonErrors | ERREURS |
| pronunciationLab | LABO | focus | CIBLE |
| dictation | ÉCRIT | table | TABLEAU |
| scenario | BULLES | tapTable | TABLEAU |
| listening | OREILLE | audio | AUDIO |
| reading | LECTURE | vocabThemes | VOCABULAIRE |
| reviewDeck | RÉVISION | flashcards | FLASH |
| progressCheck | BILAN | quiz | QUIZ |
| roundup | BADGE | *(unknown)* | MISSION |

`practice` labels by its `skill` field: listening-type skill → OREILLE, otherwise MICRO
(exact skill values confirmed against `curriculum.ts` at plan time).

## Schema changes — `src/content/schema.ts`

```ts
// on Lesson
overview?: {
  titleEn: string;        // English display title (overview page headline)
  subFr?: string;         // French subtitle; also the missions page display title
  introFr: string;        // French translation of `intro`
  minutes: number;        // estimated time, whole minutes
  difficulty: 1 | 2 | 3 | 4 | 5;
  glyph?: string;         // e.g. "Aa" — the overview tile
};

// on SectionExtras
frSub?: string;           // French sub-line under the mission row title
```

`validateCorpus` additions: when `overview` is present — `titleEn`/`introFr` non-empty,
`minutes` an integer 1–180, `difficulty` an integer 1–5. Advisory (log, don't block): a
sons/a1/a2 lesson without `overview`. Authored copy obeys the standing rules: no em dash, no
"honest" (the existing whole-seed test already enforces the latter). Lessons touched by the
authoring batch get a `version` bump.

## Mission progress + XP — `src/store/useProgress.ts`

New persisted slice:

```ts
lessonMissions: Record<lessonId, { v: number; done: number[]; xp: number }>
```

- A mission is marked done when the pager advances past its last page; `quiz` marks done via
  the existing `quizDone` flag; `roundup` marks done on lesson completion.
- First completion of a mission awards a flat **5 XP** once; re-doing a mission never awards
  again. XP is lesson-local (no global economy yet).
- `v` mirrors `lesson.version`; on mismatch the record resets (content reorders can't
  mis-check).
- Existing resume/session logging is untouched. LessonPager receives an `onSectionDone`
  callback (or equivalent) wired from `lesson.tsx`; the missions page only reads.

## Authoring batch — ealch-admin

New script `ealch-admin/scripts/author-lesson-overviews.ts` + data file, following the
`author-voyelles-*` pattern: writes `overview` blocks and per-section `frSub` lines for all 6
current lessons directly into `seed.json`, bumps versions, then the standard validation gate
run. **No `content:publish`** — publishing stays blocked on the seed-cut size decision; this
follows the established seed.json-direct authoring practice. Claude drafts the copy; Paul
reviews the seed.json diff before commit.

## i18n

All new chrome strings (start lesson, see the list, missions, required/gates/milestones/badge
stat labels, prerequisites lines, listen to the intro, the missions-page sub template, XP)
are added to `src/i18n/strings.ts` mirroring its existing locale structure. No hardcoded
user-facing strings in the two new screens. No em dash in any of them.

## Testing

- Unit tests for `missions.ts`: role/label/stats derivation against a sons.02-shaped fixture,
  unknown-type defaults, badge-less lessons.
- Validator tests for the new `overview` checks (accept/reject cases).
- Existing suites must stay green (`sons-alphabet.test.ts` et al).
- Manual QA on the USB Pixel 6 / Metro 8082 dev-client setup: den → overview → missions →
  mission 7 entry, completion checks after finishing a mission, XP increments once, back
  stack, a1 lesson (6 sections, no mission-rig types) renders sensibly, locked-band den row
  still paywalls.
- Per `ealch-v2/AGENTS.md`: consult Expo v57 docs before writing router/screen code.

## Error and fallback rules (consolidated)

- Missing `overview` entirely: page still works — English title falls back to `lesson.title`,
  chips/French copy/glyph hidden, missions card fully derived.
- Unknown lesson key on new routes: replace to `/den`.
- Section with no `frSub`: row shows title + tag only.
- Lesson with no roundup: no badge stat, sub copy drops the badge clause.

## Out of scope (explicit follow-ups)

- EN⇄FR toggle pill from the mockup.
- Rendered narration clip playback (render-audio.ts output) — intro uses TTS for now.
- Re-rigging sons.01 (alphabet, 26 sections) to the 20-mission format — content project.
- Global XP economy / XP anywhere outside the missions page.
- Pointing den/home "Continue" entries at the missions hub instead of `/lesson`.

## Files touched (expected)

- `ealch-v2/app/lessonoverview.tsx` (new), `ealch-v2/app/missions.tsx` (new)
- `ealch-v2/app/den.tsx` (push target), `ealch-v2/app/lesson.tsx` (wire onSectionDone)
- `ealch-v2/src/components/LessonPager.tsx` (report section completion; `at` entry already exists)
- `ealch-v2/src/content/schema.ts`, `src/content/missions.ts` (new), corpus validator
- `ealch-v2/src/store/useProgress.ts`, `ealch-v2/src/i18n/strings.ts`
- `ealch-v2/src/content/seed.json` (authoring batch output)
- `ealch-admin/scripts/author-lesson-overviews.ts` (new) + data file
