// The trail — the pure half of Concept C's spine screen (plan 08 renders it).
//
// ZERO RUNTIME IMPORTS. This is the same house rule schema.ts:10-11 states for
// itself: no react-native, no zustand, no supabase, no third-party validator.
// Type-only imports from schema.ts are free; the one value import this file
// takes is ENGLISH_TAUGHT_BANDS from english.logic.ts, itself an import-free
// module. That is the whole allowance — TrailStrings below is a LOCAL type,
// not an import from i18n/strings.ts, so this module never depends on the
// i18n table's own shape. `node --test` runs this file directly with no
// device, no bundler, no TTS engine — the only way a 251-row A2 composition
// (and the 391-row B1+ shape it projects to) is testable in seconds instead
// of on a Pixel 6.
//
// D-26: this file is named trail.logic.ts, not gloss.logic.ts or anything
// starting with `gloss` — that name is reserved and colliding with it is the
// exact two-things-one-name hazard D-26 exists to close.
//
// `content.units(track)` cannot source this: `TRACKS` is `['sons','a1','a2']`
// and `Unit.track` is documented "Absent past a2" (schema.ts), so it would not
// typecheck for 'b1' and would return `[]` if it did. Callers pass in units
// already resolved via `unitsInBand` (content.logic.ts) instead.

import type { Lesson, LessonAct, Level, Unit } from './schema';
import { ENGLISH_TAUGHT_BANDS } from './english.logic.ts';

/** The subset of the i18n table releaseLine needs, restated locally rather
 *  than imported from i18n/strings.ts — this module's only allowed value
 *  import is ENGLISH_TAUGHT_BANDS, so even the TYPE it needs from the i18n
 *  table is passed in by shape, not pulled in by reference. The caller (the
 *  screen, plan 08) supplies its real `T.trailReleaseSome` / `T.trailReleaseNone`. */
export type TrailStrings = { trailReleaseSome: string; trailReleaseNone: string };

/**
 * One row of the trail, in walk order. Every row carries a stable, unique
 * `id` (D-41): a virtualized list anchors scroll position on a row id, never
 * a pixel offset, because a fixed HEADER/ROW_H arithmetic (speakmap.tsx's
 * 96/118 pair) is already known wrong at font scale 1.3 and wrong again the
 * moment a dismissible card changes height.
 */
export type TrailRow =
  | { kind: 'orientation'; id: 'trail.card.orientation' }
  | { kind: 'placement'; id: 'trail.card.placement' }
  | { kind: 'gate'; id: 'trail.gate'; band: Level }
  | {
      kind: 'heading';
      id: `trail.h.${string}`;
      unitId: string;
      label: string;
      lessonIds: string[];
      /** Which lesson's reference sheet ("fiche") this heading opens — the
       *  unit's first lesson, the same lesson `ovAlsoHere` treats as the
       *  unit's primary one. */
      ficheLessonId: string;
      /** True once every act row this unit contributed is done. A unit with
       *  no act rows yet (no lesson, or a lesson with no acts authored) is
       *  never sealed — there is nothing to have finished. */
      sealed: boolean;
      locked: boolean;
    }
  | { kind: 'acte0'; id: `trail.a0.${string}`; unitId: string; lessonId: string; locked: boolean }
  | {
      kind: 'act';
      id: `trail.act.${string}.${number}`;
      unitId: string;
      lessonId: string;
      actIx: number;
      title: string;
      releaseLine: string;
      done: boolean;
      startMarker: boolean;
      locked: boolean;
    }
  | { kind: 'boundary'; id: 'trail.boundary' };

export type TrailInput = {
  /** Already band-filtered and seq-sorted — the caller's `unitsInBand` read. */
  units: Unit[];
  lessonsOf: (unitId: string) => Lesson[];
  band: Level;
  levelsAll: boolean;
  freeBands: readonly string[];
  /** Act indices already done for a lesson, keyed by lessonId. Resolved by
   *  the screen ONCE per band from `useProgress.lessonMissions` — this module
   *  never reads a store, and a row renderer never recomputes it per row
   *  (T-07.1-16). */
  doneActs: (lessonId: string) => Set<number>;
  /** Whether a fresh (unexpired) `resumeByMode.lesson` exists (progress.logic
   *  `resumeIsFresh`). A first-run learner is `resumeByMode.lesson ===
   *  undefined` — D-18's start-marker condition. */
  hasFreshResume: boolean;
  orientationDismissed: boolean;
  placementDismissed: boolean;
  T: TrailStrings;
};

/**
 * D-08/SC-3: the unit heading reads in ONE language, driven by band
 * membership in ENGLISH_TAUGHT_BANDS alone — never a per-screen conditional,
 * never a restated band list. sons/A1/A2 are taught in English, so the
 * heading is the English `title`; B1 and above are taught in French, so it is
 * the French `sub`.
 */
export function headingLabel(unit: Unit, band: Level): string {
  return (ENGLISH_TAUGHT_BANDS as readonly string[]).includes(band) ? unit.title : unit.sub;
}

/**
 * D-11's predicate, lifted verbatim from app/den.tsx's own narrated-entry
 * check: a lesson qualifies for an acte 00 row only when it carries BOTH a
 * written `narration` AND the `'narrated'` feature flag. A unit may declare
 * the feature before its script is written (schema.ts's own doc comment on
 * `Lesson.narration`) — that lesson gets no row at all, never a disabled one.
 * Returns the FIRST qualifying lesson of the unit, so a two-lesson unit whose
 * only qualifying lesson is the second one still gets its row.
 */
export function acteZeroLessonOf(lessons: readonly Lesson[]): Lesson | undefined {
  return lessons.find((l) => l.narration && l.features?.includes('narrated'));
}

/**
 * D-45: the act row's release-line copy. A non-empty tranche gets the
 * authored plural line with its real count interpolated; an empty or absent
 * tranche gets the authored empty-state line. Never a fabricated "0 of
 * something" — about a quarter of the shipped seed's act/tranche pairs are
 * empty, and the house rule (den.tsx) is that a row reads truthfully rather
 * than inventing a number.
 */
export function releaseLine(tranche: string[] | undefined, T: TrailStrings): string {
  return releaseCountLine(tranche?.length ?? 0, T);
}

/** releaseLine from a bare count: what a skeleton outline carries. */
export function releaseCountLine(n: number, T: TrailStrings): string {
  if (n === 0) return T.trailReleaseNone;
  return T.trailReleaseSome.replace('{n}', String(n));
}

/** One unit's heading + acte0 (if any) + every act row of every lesson the
 *  unit carries, in `lessonIds` order (D-27: BOTH lessons of a two-lesson
 *  unit contribute, under the one heading). Returns the rows AND the act rows
 *  alone (so the caller can find the single global start-marker candidate
 *  across the whole band without re-walking every unit's rows). */
/** What one lesson contributes to the trail, whichever source it came from:
 *  the lesson body itself, or a skeleton unit's outline. */
type TrailLesson = { id: string; actTitles: string[]; cards: number[]; narrated: boolean };

function fromLesson(l: Lesson): TrailLesson {
  const acts: readonly LessonAct[] = l.acts ?? [];
  return {
    id: l.id,
    actTitles: acts.map((a) => a.title),
    cards: acts.map((_, i) => l.deckTranche?.[i]?.length ?? 0),
    narrated: !!(l.narration && l.features?.includes('narrated')),
  };
}

/**
 * The trail lessons of one unit. The lesson bodies when the device has them;
 * otherwise the unit's `outline`, which is how a paid band whose pack is not
 * on the device (a free user, or a subscriber whose download has not landed)
 * still draws every heading and act row (PREMIUM-PACKS-SPEC.md section 3).
 * The outline is only a fallback: one real lesson and the outline is ignored.
 */
export function trailLessonsOf(unit: Unit, lessons: readonly Lesson[]): TrailLesson[] {
  if (lessons.length > 0 || !unit.outline?.length) return lessons.map(fromLesson);
  return unit.outline.map((o) => ({
    id: o.lessonId,
    actTitles: o.acts.map((a) => a.title),
    cards: o.acts.map((a) => a.cards),
    narrated: !!o.narrated,
  }));
}

function unitRows(
  unit: Unit,
  lessonBodies: readonly Lesson[],
  band: Level,
  locked: boolean,
  doneActs: (lessonId: string) => Set<number>,
  T: TrailStrings
): { rows: TrailRow[]; actRows: Extract<TrailRow, { kind: 'act' }>[] } {
  const rows: TrailRow[] = [];
  const actRows: Extract<TrailRow, { kind: 'act' }>[] = [];
  const lessons = trailLessonsOf(unit, lessonBodies);

  const heading: Extract<TrailRow, { kind: 'heading' }> = {
    kind: 'heading',
    id: `trail.h.${unit.id}`,
    unitId: unit.id,
    label: headingLabel(unit, band),
    lessonIds: unit.lessonIds,
    ficheLessonId: unit.lessonIds[0] ?? '',
    sealed: false,
    locked,
  };
  rows.push(heading);

  // Same predicate as acteZeroLessonOf, read off the normalized view so an
  // outline row and a lesson row cannot disagree about it.
  const a0Lesson = lessons.find((l) => l.narrated);
  if (a0Lesson) {
    rows.push({ kind: 'acte0', id: `trail.a0.${a0Lesson.id}`, unitId: unit.id, lessonId: a0Lesson.id, locked });
  }

  for (const lesson of lessons) {
    const done = doneActs(lesson.id);
    lesson.actTitles.forEach((title, actIx) => {
      const row: Extract<TrailRow, { kind: 'act' }> = {
        kind: 'act',
        id: `trail.act.${lesson.id}.${actIx}`,
        unitId: unit.id,
        lessonId: lesson.id,
        actIx,
        title,
        releaseLine: releaseCountLine(lesson.cards[actIx] ?? 0, T),
        done: done.has(actIx),
        startMarker: false,
        locked,
      };
      rows.push(row);
      actRows.push(row);
    });
  }

  heading.sealed = actRows.length > 0 && actRows.every((r) => r.done);

  return { rows, actRows };
}

/**
 * The whole composition of one band's trail: every card, gate, heading, acte
 * 00 and act row, in the order the screen renders them. Pure — no store read,
 * no entitlement decision beyond echoing the inputs it is given (T-07.1-13:
 * enforcement stays at lesson.tsx's `bandLocked` chokepoint; this function
 * never re-derives `locked`, only displays it).
 */
export function trailRows(input: TrailInput): TrailRow[] {
  const locked = !input.levelsAll && !(input.freeBands as readonly string[]).includes(input.band);

  const rows: TrailRow[] = [];

  // D-21 position 2: the gate row is the very first row of a locked band's
  // trail, before even the orientation/placement cards.
  if (locked) {
    rows.push({ kind: 'gate', id: 'trail.gate', band: input.band });
  }

  // D-19: the how-it-works and placement-offer cards sit above the first
  // heading, independent of the lock state, gone once dismissed.
  if (!input.orientationDismissed) {
    rows.push({ kind: 'orientation', id: 'trail.card.orientation' });
  }
  if (!input.placementDismissed) {
    rows.push({ kind: 'placement', id: 'trail.card.placement' });
  }

  const allActRows: Extract<TrailRow, { kind: 'act' }>[] = [];
  const unitRowBlocks: TrailRow[][] = [];
  for (const unit of input.units) {
    const lessons = input.lessonsOf(unit.id);
    const { rows: block, actRows } = unitRows(unit, lessons, input.band, locked, input.doneActs, input.T);
    unitRowBlocks.push(block);
    allActRows.push(...actRows);
  }

  // D-18: the start marker is a property of the WHOLE trail, not of any one
  // unit — the first unstarted act row across the entire band, and only when
  // there is no fresh lesson resume to prioritise instead.
  // Never on a locked band: the marker says "start here", and every act on a
  // locked band routes to the paywall, so it pointed at a door that does not
  // open (device pass, 2026-09-24). The gate row is that band's call to action.
  if (!input.hasFreshResume && !locked) {
    const firstUnstarted = allActRows.find((r) => !r.done);
    if (firstUnstarted) firstUnstarted.startMarker = true;
  }

  for (const block of unitRowBlocks) rows.push(...block);

  // D-21 position 1: the boundary row sits after A1's very last act row, the
  // other of the two paywall touchpoints — never on the same band as `gate`,
  // since a band is either a1 (free, but the next band is not) or it is the
  // (possibly locked) band the gate row already covers.
  if (input.band === 'a1' && !input.levelsAll) {
    rows.push({ kind: 'boundary', id: 'trail.boundary' });
  }

  return rows;
}
