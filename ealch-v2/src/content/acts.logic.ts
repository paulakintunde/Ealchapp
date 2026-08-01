// Acts, checkpoints and resume — Lesson Architecture v2, section 10.
//
// A 241-screen lesson is finishable only if it is really six short ones. That
// needs four things, and each is arithmetic that is miserable to verify by
// swiping on a device:
//
//   - which act a section belongs to, and where the checkpoints fall
//   - which SRS tranche a checkpoint releases
//   - where a returning learner should land (two screens back, on a recap)
//   - whether enough time has passed to warrant a warm-back
//
// All of it is here, and all of it is tested. The screens do rendering.
//
// The reward for finishing an act is knowing where you are: one line of text,
// a progress bar, continue or stop. No confetti, no streak, no badge. That is
// a product decision from the architecture doc and it is worth keeping,
// because a celebration every eleven minutes stops meaning anything.

import type { Lesson, LessonAct, LessonSection } from './schema.ts';

/** Milliseconds in a day, for the warm-back gap. */
const DAY_MS = 24 * 60 * 60 * 1000;

/** After this long away, a returning learner gets a short warm-back drawn
 *  from the act they last completed. Three days is the architecture doc's
 *  figure: long enough that the material has faded, short enough that a daily
 *  learner never sees it. */
export const WARM_BACK_DAYS = 3;

/** How many questions the warm-back asks. Short by design: it is a way back
 *  in, not a re-test. */
export const WARM_BACK_QUESTIONS = 3;

/** How far back a returning learner lands, in sections. */
export const RESUME_LOOKBACK = 2;

/* ─── Act membership ──────────────────────────────────────────────────────── */

/** The act a section belongs to, by section id. Null when the lesson declares
 *  no acts (every pre-v2 lesson) or the section is unclaimed. */
export function actForSection(lesson: Lesson, sectionId: string): LessonAct | null {
  return (lesson.acts ?? []).find((a) => a.sections.includes(sectionId)) ?? null;
}

/** The act index a section sits in, or -1. */
export function actIndexForSection(lesson: Lesson, sectionId: string): number {
  return (lesson.acts ?? []).findIndex((a) => a.sections.includes(sectionId));
}

/** Is this section the LAST of its act? That is where the checkpoint fires. */
export function isActEnd(lesson: Lesson, sectionId: string): boolean {
  const act = actForSection(lesson, sectionId);
  if (!act) return false;
  return act.sections[act.sections.length - 1] === sectionId;
}

/** Is this section a declared rest point?
 *
 *  Rest points are authored as 'sectionId' or 'sectionId/marker'. The marker
 *  names a position inside a section (a group, a card index) that only the
 *  renderer knows how to reach, so membership is decided on the section half. */
export function isRestPoint(lesson: Lesson, sectionId: string): boolean {
  return (lesson.acts ?? []).some((a) => (a.restPoints ?? []).some((rp) => rp.split('/')[0] === sectionId));
}

/** Every stopping place in the lesson, in order: act ends and rest points.
 *  What a "leave and come back" surface offers. */
export function stoppingPoints(lesson: Lesson): { sectionId: string; kind: 'checkpoint' | 'rest'; actId: string }[] {
  const out: { sectionId: string; kind: 'checkpoint' | 'rest'; actId: string }[] = [];
  for (const act of lesson.acts ?? []) {
    for (const rp of act.restPoints ?? []) {
      out.push({ sectionId: rp.split('/')[0], kind: 'rest', actId: act.id });
    }
    const last = act.sections[act.sections.length - 1];
    if (last) out.push({ sectionId: last, kind: 'checkpoint', actId: act.id });
  }
  // Author order within an act is not guaranteed to be lesson order, so sort
  // by where each section actually sits in the spine.
  const order = new Map(lesson.sections.map((s, i) => [(s as { id?: string }).id ?? '', i]));
  return out.sort((a, b) => (order.get(a.sectionId) ?? 0) - (order.get(b.sectionId) ?? 0));
}

/* ─── Checkpoints ─────────────────────────────────────────────────────────── */

export type Checkpoint = {
  act: LessonAct;
  actIndex: number;
  /** 0..1 through the lesson's acts, for the bar. */
  progress: number;
  /** Corpus item ids this checkpoint releases to spaced repetition. */
  releases: string[];
  /** Whether this is the last act, and so the end of the lesson. */
  isFinal: boolean;
};

/** The checkpoint reached by finishing `sectionId`, or null if it is not an
 *  act end. */
export function checkpointFor(lesson: Lesson, sectionId: string): Checkpoint | null {
  if (!isActEnd(lesson, sectionId)) return null;
  const actIndex = actIndexForSection(lesson, sectionId);
  const acts = lesson.acts ?? [];
  const act = acts[actIndex];
  if (!act) return null;
  return {
    act,
    actIndex,
    progress: (actIndex + 1) / acts.length,
    releases: tranche(lesson, actIndex),
    isFinal: actIndex === acts.length - 1,
  };
}

/** The SRS slice released at act `actIndex`.
 *
 *  Released AT the checkpoint rather than all at once on completion: cards
 *  arrive as they are taught, so an hour-long lesson does not dump sixty new
 *  items into review the moment it ends. Every id is filtered against the
 *  lesson's own itemIds, so a tranche can never release a word the lesson
 *  does not teach. */
export function tranche(lesson: Lesson, actIndex: number): string[] {
  const slice = lesson.deckTranche?.[actIndex] ?? [];
  const taught = new Set(lesson.itemIds ?? []);
  return slice.filter((id) => taught.has(id));
}

/** Everything released up to and including an act. What a learner who has
 *  reached act N should have in review. */
export function releasedThrough(lesson: Lesson, actIndex: number): string[] {
  const out: string[] = [];
  for (let i = 0; i <= actIndex; i++) out.push(...tranche(lesson, i));
  return [...new Set(out)];
}

/* ─── Resume ──────────────────────────────────────────────────────────────── */

export type ResumePlan = {
  /** The section index to open on. */
  sectionIx: number;
  /** Whether to show the one-screen recap before it. */
  showRecap: boolean;
  /** The act being resumed into, for the recap's copy. */
  act: LessonAct | null;
  /** Whether to run a warm-back first, and over which act. */
  warmBack: { act: LessonAct; questions: number } | null;
};

/**
 * Where a returning learner should land.
 *
 * Two screens back, on a one-screen recap of the act so far, then straight
 * into where they stopped. Backing up is the point: dropping someone exactly
 * where they left off mid-explanation is disorienting, and the two screens
 * they re-see cost about fifteen seconds.
 *
 * Returning after more than three days adds a three-question warm-back drawn
 * from the act just COMPLETED (not the one in progress), because that is the
 * material that has had time to fade.
 *
 * `lastSectionIx` is an index into `lesson.sections`. `awayMs` is how long
 * since the last visit; pass 0 for a fresh session in the same sitting.
 */
export function resumePlan(lesson: Lesson, lastSectionIx: number, awayMs: number): ResumePlan {
  const sections = lesson.sections ?? [];
  const clamped = Math.max(0, Math.min(lastSectionIx, sections.length - 1));
  const target = Math.max(0, clamped - RESUME_LOOKBACK);
  const id = (sections[clamped] as { id?: string })?.id ?? '';
  const act = actForSection(lesson, id);

  // Nothing to back up to on the first two screens, and no recap either: a
  // learner two screens into a lesson has nothing to be reminded of.
  const showRecap = clamped > RESUME_LOOKBACK;

  let warmBack: ResumePlan['warmBack'] = null;
  if (awayMs > WARM_BACK_DAYS * DAY_MS) {
    const ix = actIndexForSection(lesson, id);
    // The act just completed is the one before the one in progress. On act 1
    // there is nothing completed yet, so there is nothing to warm back over.
    const prior = (lesson.acts ?? [])[ix - 1];
    if (prior) warmBack = { act: prior, questions: WARM_BACK_QUESTIONS };
  }

  return { sectionIx: target, showRecap, act, warmBack };
}

/** The sections an act covers up to a point, for the recap's content. */
export function actSectionsSoFar(lesson: Lesson, sectionId: string): LessonSection[] {
  const act = actForSection(lesson, sectionId);
  if (!act) return [];
  const upto = act.sections.slice(0, act.sections.indexOf(sectionId) + 1);
  const byId = new Map(lesson.sections.map((s) => [(s as { id?: string }).id ?? '', s]));
  return upto.map((id) => byId.get(id)).filter((s): s is LessonSection => !!s);
}

/** Questions for the warm-back, drawn from the completed act's own quiz refs.
 *
 *  Taken from the real quiz rather than generated, so the warm-back asks about
 *  what the act actually taught. Deterministic (no shuffling) so a learner who
 *  bounces does not get a different set each time. */
export function warmBackQuestions(lesson: Lesson, act: LessonAct, limit = WARM_BACK_QUESTIONS) {
  const quiz = lesson.sections.find((s) => s.type === 'quiz');
  if (!quiz || quiz.type !== 'quiz') return [];

  const all = (quiz.rounds?.flatMap((r) => r.questions) ?? quiz.questions ?? [])
    // Closed formats only: a warm-back is a way back in, not a typing test.
    .filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number');

  const inAct = new Set(act.sections);
  const own = all.filter((q) => q.ref && inAct.has(q.ref));
  if (own.length >= limit) return own.slice(0, limit);

  // Not enough questions refer to this act's own sections, which is normal
  // rather than an authoring gap: a quiz `ref` points at where a rule was
  // TAUGHT, and teaching clusters in the middle acts while the opening and
  // closing ones carry story, practice and review. Topping up from everything
  // taught EARLIER keeps the warm-back three questions long, and every one of
  // them is still material this learner has already seen.
  const actIx = (lesson.acts ?? []).findIndex((a) => a.id === act.id);
  const seen = new Set(
    (lesson.acts ?? []).slice(0, Math.max(0, actIx + 1)).flatMap((a) => a.sections)
  );
  const earlier = all.filter((q) => q.ref && seen.has(q.ref) && !own.includes(q));
  return [...own, ...earlier].slice(0, limit);
}
