// Sub-mission addressing: mission 15 stays mission 15, and the cards inside it
// address as 15.1, 15.2, 15.3…
//
// The problem this solves: six sections in sons.06 render a SwipeDeck, so the
// learner swipes through five cards while the header sits frozen on
// "MISSION 15 / 28". Position inside the mission is invisible, and a resume
// anchor cannot land finer than the mission's first card — someone who stops on
// the third routine of a five-card drill returns to the intro and re-swipes.
//
// Deliberately NOT a new section, a new page or a new act member. Adding pages
// would move the denominator (28 -> 30+), break `acts.sections`, `estScreens`
// and `restPoints`, and split one unit of completion into several. A
// sub-mission is a POSITION INSIDE a mission, not a mission — so this module
// only ever produces a label and an anchor, and the page model
// (lessonPager.logic.ts) is untouched.
//
// Pure island, same contract as deck.logic.ts and lessonPager.logic.ts: no
// React, no RN, no measurement APIs, type-only imports from schema. That is
// what lets `node --test` cover it directly — a .tsx file cannot be imported by
// the test runner at all (ERR_UNKNOWN_FILE_EXTENSION), so a rule that lives
// inside a component can only be checked by grepping its source, which does not
// test behaviour.

import type { LessonSection } from './schema';

/** Two notations, deliberately:
 *
 *    DISPLAY   `15.2`   what the learner reads in the pager header
 *    ANCHOR    `15/2`   what a resume position or deep link stores
 *
 *  The anchor separator is already shipped and already tested — the acts block
 *  writes rest points as `s08-flashcards/10` and `s10-dictation/1`. Reusing it
 *  keeps one anchor grammar in the codebase; introducing `.` there as well
 *  would mean churning the density and sons-06 suites for no behavioural gain.
 *  The dot is display only, because a decimal is what reads as "inside 15"
 *  rather than "after 15". */
export const ANCHOR_SEP = '/';
export const DISPLAY_SEP = '.';

/** A position inside a lesson: which mission, and which card of it.
 *
 *  `sub` is 1-based and counts SWIPEABLE ENTRIES, not authored cards — see
 *  subCount. A `sub` of 0 (or a mission with only one card) means "the mission
 *  as a whole", which is what every non-deck section reports. */
export type SubMissionPos = {
  /** 1-based mission number, in the terms the missions hub counts in. */
  mission: number;
  /** 1-based card position, or 0 when the mission has no sub-structure. */
  sub: number;
};

/* ─── How many sub-missions a section has ─────────────────────────────────── */

/** Does this section present its content as a swipe deck?
 *
 *  Mirrors the pager's `ownsLayout` test, which is the existing answer to
 *  "does this section paginate itself" — a section that owns its layout because
 *  it holds a horizontal deck is exactly a section with sub-missions. Kept as
 *  its own predicate rather than imported because ownsLayout lives in a .tsx
 *  component and this file must stay RN-free. The two are pinned together by a
 *  test that reads the component's source. */
export function hasSubMissions(s: LessonSection): boolean {
  return subCount(s) > 1;
}

/** How many cards the learner swipes through in this section.
 *
 *  Returns 1 for anything that is a single screen — a `teach`, a `goals`, a
 *  scrolling `examples` — so the caller never has to special-case: a count of 1
 *  simply produces no sub-address.
 *
 *  The counts here mirror what each renderer actually builds, which is why the
 *  inhibition drill counts intro and closing: InhibitionDrillView composes
 *  `[intro?, ...targets, closing?]` into one deck, so a learner on the second
 *  routine of that section is on card 3, not card 2. Counting targets alone
 *  would number the cards differently from the way they are swiped, which is
 *  worse than not numbering them. */
export function subCount(s: LessonSection): number {
  switch (s.type) {
    case 'inhibitionDrill': {
      const sec = s as LessonSection & {
        intro?: string;
        targets?: { practiceOn?: string[] }[];
        closing?: { text: string };
      };
      const targets = sec.targets ?? [];
      if (!targets.length) return 1;
      // TWO cards per routine — the steps, then the words it is performed on —
      // because a five-step routine plus four words plus a mic does not fit one
      // screen. A routine authored with no `practiceOn` contributes only its
      // steps card, which is what InhibitionDrillView composes.
      const perTarget = targets.reduce((n, tg) => n + 1 + (tg.practiceOn?.length ? 1 : 0), 0);
      return perTarget + (sec.intro ? 1 : 0) + (sec.closing ? 1 : 0);
    }

    // A swipe-flagged commonErrors is one card per error (MissionSection wraps
    // `s.errors` in a SwipeDeck). Without the flag it is a plain stack.
    case 'commonErrors': {
      const sec = s as LessonSection & { swipe?: boolean; errors?: unknown[] };
      return sec.swipe ? Math.max(1, sec.errors?.length ?? 0) : 1;
    }

    case 'cardDeck': {
      const sec = s as LessonSection & { cards?: unknown[] };
      return Math.max(1, sec.cards?.length ?? 0);
    }

    // An XL group drill renders one word per swiped hero card, exactly like a
    // cardDeck, and it was missed when this module was written. The comment on
    // hasSubMissions says the mirror of `ownsLayout` is the answer to "does this
    // section paginate itself", and ownsLayout has tested `groupDrill` at xl
    // since sons.06 — so the two had drifted, and the pinning test below only
    // ever checked that ownsLayout still names groupDrill, never that this
    // switch handled it.
    //
    // The visible cost: a learner swiping the eleven cards of a1.07 mission 10
    // watched the header sit frozen on "MISSION 10 / 27" from the first card to
    // the eleventh, with no way to tell how far in they were and no anchor
    // finer than the mission's first card. Reported from a device (Paul,
    // 2026-08-06).
    //
    // ONE GROUP ONLY, and that is not a shortcut. With several groups the
    // position is two-dimensional — GroupDrillView holds a group index in `ix`
    // and the deck holds a card index inside it — so a single number cannot name
    // where the learner is, and an anchor built from one could not restore it.
    // That is the same line this module already draws for the review deck:
    // number a position only when it is STABLE AND RESTORABLE. sons.07 and
    // sons.09 author the multi-group shape and keep today's behaviour.
    //
    // A control page (`items: []` plus a check) counts 1 and prints no fraction,
    // which is right: it is one screen.
    case 'groupDrill': {
      const sec = s as LessonSection & { size?: string; groups?: { items?: unknown[] }[] };
      if (sec.size !== 'xl') return 1;
      const groups = sec.groups ?? [];
      if (groups.length !== 1) return 1;
      return Math.max(1, groups[0].items?.length ?? 0);
    }

    // A STEPPED trapDrill walks its jobs one screen at a time behind a
    // Continuer button. It is not swiped, but the pager can still observe the
    // step — it is plain component state advanced by a press, not the internal
    // scheduling of a Leitner deck — and the lesson's own comments have called
    // these steps 14.1, 14.2, 14.3 since before this module existed. So the
    // header names what the code already named.
    //
    // Without `steps` the section is the original stacked column of flip cards
    // that four earlier lessons authored: one screen, no sub-position.
    case 'trapDrill': {
      const sec = s as LessonSection & { steps?: unknown[] };
      return Math.max(1, sec.steps?.length ?? 0);
    }

    // Deliberately NOT flashcards or reviewDeck, though both hold a `cards`
    // array and look like decks in the seed.
    //
    // The line is not swipe-versus-button — the stepped trapDrill above is a
    // button and counts. It is whether a position is STABLE AND RESTORABLE.
    // A trap step is plain component state: step 2 means the same screen every
    // time, so the header can name it and a resume can return to it. A Leitner
    // card index is not: ReviewDeckView's position is a function of how the
    // learner rated the cards before it, so "card 7" is not a place — there is
    // nothing for a sub-number to promise or an anchor to restore. Both also
    // draw their own counter inside the card, so numbering them from the header
    // would put two counters on one screen.
    default:
      return 1;
  }
}

/* ─── Labels and anchors ──────────────────────────────────────────────────── */

/** The mission label for the pager header.
 *
 *  `MISSION 15 / 28` for a plain mission, `MISSION 15.2 / 28` inside a deck.
 *  The DENOMINATOR NEVER CHANGES: the learner's unit of completion is still the
 *  mission, and 28 is what the missions hub lists. That is the whole point of
 *  the decimal — it says "part way through 15 of 28", where a renumbered
 *  `16 / 32` would claim a mission was finished that was not.
 *
 *  A `sub` of 0 or 1 prints no fraction. One card is not a sub-mission, and
 *  `15.1` on a mission with a single card is noise that implies a `15.2` the
 *  learner will never reach. */
export function formatMissionLabel(mission: number, sub: number, total: number): string {
  return `MISSION ${formatMissionNumber(mission, sub)} / ${total}`;
}

/** Just the number part: `15` or `15.2`. Split out because the missions hub and
 *  any future breadcrumb want the number without the MISSION/total chrome. */
export function formatMissionNumber(mission: number, sub: number): string {
  if (sub <= 1) return String(mission);
  return `${mission}${DISPLAY_SEP}${sub}`;
}

/** The stored form of a position: `15` or `15/2`.
 *
 *  This is what a resume position or a deep link persists. Sub 0 and sub 1 both
 *  collapse to the bare mission, so an anchor written before this module
 *  existed still parses, and a mission whose deck was later shortened to one
 *  card does not leave a dangling `/2` behind. */
export function formatAnchor(mission: number, sub: number): string {
  if (sub <= 1) return String(mission);
  return `${mission}${ANCHOR_SEP}${sub}`;
}

/** Read an anchor back. Returns null for anything that is not a position, so a
 *  corrupt or stale stored value falls back to "start of the lesson" rather
 *  than throwing on a cold start.
 *
 *  Tolerant of the display form too (`15.2`): a value that reaches here from a
 *  log, a test fixture or a hand-written deep link should resolve rather than
 *  be discarded over a separator. */
export function parseAnchor(raw: string | null | undefined): SubMissionPos | null {
  if (typeof raw !== 'string') return null;
  const m = raw.trim().match(/^(\d+)(?:[./](\d+))?$/);
  if (!m) return null;
  const mission = Number(m[1]);
  if (!Number.isInteger(mission) || mission < 1) return null;
  const sub = m[2] === undefined ? 0 : Number(m[2]);
  if (!Number.isInteger(sub) || sub < 0) return null;
  return { mission, sub };
}

/** Clamp a (possibly stale) sub position into a section that may have changed
 *  length since the anchor was written.
 *
 *  Content is authored continuously, so a resume anchor pointing at card 5 of a
 *  drill that is now four cards long is an ordinary event, not a corruption.
 *  Landing on the last card is the honest resolution: it is the furthest point
 *  the learner is known to have reached that still exists. Mirrors clampPage in
 *  lessonPager.logic.ts, deliberately — same failure, same shape of answer. */
export function clampSub(sub: number, count: number): number {
  if (!Number.isFinite(sub)) return 0;
  const hi = Math.max(0, count);
  return Math.min(Math.max(0, Math.trunc(sub)), hi);
}

/** Read a `?card=` deep-link / resume parameter into a 0-based card index.
 *
 *  The param is 1-BASED because it is the number the learner saw in the header
 *  (15.2 -> card=2); the pager works in 0-based indices, so the translation
 *  happens here rather than at three call sites that could each get it wrong.
 *
 *  Deliberately its own parameter rather than a third segment on the lesson
 *  anchor. The anchor's existing `.k` slot already means "item index within a
 *  practice section", and resolveAnchor REJECTS a non-zero k for every other
 *  section type — so a card position smuggled in there would make every
 *  sub-mission resume fail closed, and widening the anchor grammar would change
 *  a type that SRS jumps, quiz refs and the reference sheet all share.
 *
 *  Returns null for anything that is not a usable position, including the
 *  first card: `card=1` is where a deck opens anyway, so honouring it would
 *  spend a prop to arrive exactly where the default already lands. */
export function parseCardParam(raw: string | string[] | null | undefined): number | null {
  const s = Array.isArray(raw) ? raw[0] : raw;
  if (typeof s !== 'string') return null;
  // Plain digits only. Number() alone accepts '1e3' (1000), '0x2' and ' 2\n',
  // so a malformed or hand-edited URL could scroll a five-card deck to card
  // 1000 rather than being ignored.
  if (!/^\d+$/.test(s.trim())) return null;
  const n = Number(s.trim());
  if (!Number.isInteger(n) || n < 2) return null;
  return n - 1;
}

/** The accessibility label for a sub-position.
 *
 *  Dots and a decimal in an eyebrow are visual; a screen reader user gets
 *  "Mission 15, part 2 of 5" instead, because "fifteen point two" is a number,
 *  not a position. The pager's header already carries this treatment for the
 *  deck dots (LessonDeck's dots row is `accessibilityLabel`-ed for the same
 *  reason), so this keeps one voice across both. */
export function a11yMissionLabel(mission: number, sub: number, count: number, total: number): string {
  const base = `Mission ${mission} of ${total}`;
  if (sub <= 1 || count <= 1) return base;
  return `${base}, part ${sub} of ${count}`;
}
