// Marks → a DELF B2 result. Pure, no React.
//
// ── Why this is not nclc.logic.ts with a flag ──────────────────────────────
//
// Because it is a different instrument, not a different scale.
//
// TEF and TCF report a LEVEL, per skill, and the weakest skill governs the
// file: NCLC is a profile, and the answer to "what is my level" is the floor of
// four. DELF B2 reports a DIPLOMA: four marks out of 25, a total out of 100, a
// pass at 50, and a floor of 5 on every épreuve. It is pass or fail against a
// fixed threshold, there is no scaled-score conversion to model, and the result
// is lifelong. BLUEPRINT-delf-b2 §8 says so in as many words, and adds the line
// this module exists to honour:
//
//   "a candidate who scores 60/100 with 4/25 on one épreuve has failed. Any
//    score display we build has to show the per-épreuve floor, or it will tell
//    a candidate they passed when they did not."
//
// Folding those two instruments into one function would mean a flag deciding
// whether `overall` is a floor-of-four or a sum-of-four, which are not the same
// kind of number and must never be presented as though they were.
//
// ── The three rules it inherits ────────────────────────────────────────────
//
// 1. THE FLOOR IS NOT A FORMALITY. It is checked, reported, and named — which
//    épreuve fell short, and by how much. A verdict that says only "fail" when
//    the total was 60 is useless to a candidate deciding what to work on.
//
// 2. A TOTAL IS A SUM, so a missing term is not zero. Three graded épreuves and
//    one the grader could not reach produces NO total, for the same reason
//    nclc.logic refuses an overall off three skills: absence is a claim about
//    evidence, not about performance.
//
// 3. NOTHING IS INVENTED. Practice attempts, dead audio and ungraded work carry
//    their own status and are excluded from every number.

import { SCORE_BANDS, type ExamSkill, type ScoreBand } from '../content/schema.ts';
import type { SectionStatus } from './nclc.logic.ts';

/** Each épreuve is out of 25 and the paper out of 100 — BLUEPRINT §8. */
export const DELF_EPREUVE_MAX = 25;
export const DELF_TOTAL_MAX = 100;
/** Pass needs BOTH of these, never either alone. */
export const DELF_PASS_TOTAL = 50;
export const DELF_EPREUVE_FLOOR = 5;

/**
 * A graded band, as a mark out of 25.
 *
 * The comprehension épreuves do not need this — their marks are the authored
 * per-question `points`, which already sum to exactly 25. Production does: the
 * grader returns a band, and a band has to become a mark before it can be added
 * to anything.
 *
 * OURS, and expert-judged. The published grid marks ten criteria from 0 to 5 in
 * half-points (§7), which is not a shape an AI band can be honestly projected
 * onto criterion by criterion; what can be said is where a band sits relative to
 * the diploma's own two thresholds, and these are anchored on exactly that:
 *
 *   b2  15   the level the paper asks for. Comfortably clear of the 12.5 average
 *            that a 50/100 pass implies, because meeting the level asked is a
 *            pass and not a borderline one.
 *   b1  10   real French, below the diploma. Four épreuves at B1 total 40 and
 *            fail, which is correct: B1 work does not earn a B2 diploma.
 *   a2   6   clears the floor, barely, and nothing more.
 *   a1   2   below the floor. The épreuve gate fires, which is the honest
 *            reading of an A1 performance on a B2 task.
 *   c1  20   above the level asked.
 *   c2  23   well beyond it. Not 25: a full mark is a claim about a specific
 *            performance against ten criteria, and this is a band.
 */
export const DELF_BAND_MARK: Record<ScoreBand, number> = {
  a1: 2,
  a2: 6,
  b1: 10,
  b2: 15,
  c1: 20,
  c2: 23,
};

/** DELF marks in half-points (§7), so a mean of two phases stays on the grid. */
export function toHalfPoint(n: number): number {
  return Math.round(n * 2) / 2;
}

/**
 * One épreuve's mark from its graded bands.
 *
 * Production orale is ONE épreuve in two phases — a monologue and a débat — and
 * the diploma marks it as one performance, so the phases average rather than
 * counting separately. Weighting them equally is deliberate: the débat is the
 * more diagnostic phase, but it is also the shorter one, and an author who
 * later wants them weighted should say so on the paper rather than have it
 * assumed here.
 */
export function markFromBands(bands: ScoreBand[]): number | null {
  if (bands.length === 0) return null;
  const sum = bands.reduce((n, b) => n + DELF_BAND_MARK[b], 0);
  return toHalfPoint(sum / bands.length);
}

export type DelfEpreuve = {
  skill: ExamSkill;
  status: SectionStatus;
  /** Out of DELF_EPREUVE_MAX. Null whenever the épreuve was not scored. */
  mark: number | null;
  /** True only when a mark exists AND falls under the floor. An épreuve with no
   *  mark is not "below the floor" — it is unknown, and saying otherwise would
   *  report our gap as the candidate's failure. */
  belowFloor: boolean;
};

export type DelfVerdict = 'pass' | 'fail' | 'incomplete';

export type DelfOutcome = {
  epreuves: DelfEpreuve[];
  /** Out of DELF_TOTAL_MAX. Null unless all four épreuves are marked. */
  total: number | null;
  verdict: DelfVerdict;
  /** Why it failed. Both reasons can be true at once, and a candidate who
   *  cleared the total but not the floor needs to be told exactly that. */
  failedOn: ('total' | 'floor')[];
  /** The épreuves under 5/25, named. */
  floored: ExamSkill[];
  /** The épreuves with no mark, so the report can say what is missing. */
  missing: ExamSkill[];
};

/** One épreuve's outcome from what was logged. */
export function delfEpreuve(input: {
  skill: ExamSkill;
  status: SectionStatus;
  /** Comprehension: the authored points earned. Production: leave undefined. */
  points?: number | null;
  /** Production: the graded bands. Comprehension: leave undefined. */
  bands?: ScoreBand[] | null;
}): DelfEpreuve {
  const { skill, status, points, bands } = input;
  // Anything but a clean scored sitting has no mark. The number would be real
  // arithmetic on unreal evidence.
  if (status !== 'scored') return { skill, status, mark: null, belowFloor: false };

  const mark =
    typeof points === 'number' ? toHalfPoint(points)
    : bands && bands.length ? markFromBands(bands)
    : null;

  if (mark === null) return { skill, status, mark: null, belowFloor: false };
  return { skill, status, mark, belowFloor: mark < DELF_EPREUVE_FLOOR };
}

/**
 * Fold four épreuves into a diploma result.
 *
 * Requires every épreuve to be marked. A total is a SUM: adding three and
 * comparing the result to 50 would compare a number out of 75 against a
 * threshold defined out of 100, and would tell a candidate they failed when the
 * missing épreuve might have carried them past it.
 */
export function delfOutcome(epreuves: DelfEpreuve[]): DelfOutcome {
  const missing = epreuves.filter((e) => e.mark === null).map((e) => e.skill);
  const floored = epreuves.filter((e) => e.belowFloor).map((e) => e.skill);

  if (missing.length > 0) {
    return { epreuves, total: null, verdict: 'incomplete', failedOn: [], floored, missing };
  }

  const total = toHalfPoint(epreuves.reduce((n, e) => n + (e.mark ?? 0), 0));
  const failedOn: ('total' | 'floor')[] = [];
  if (total < DELF_PASS_TOTAL) failedOn.push('total');
  if (floored.length > 0) failedOn.push('floor');

  return {
    epreuves,
    total,
    verdict: failedOn.length === 0 ? 'pass' : 'fail',
    failedOn,
    floored,
    missing,
  };
}

/** '14,5 / 25' in French, '14.5 / 25' in English. The comma is not decoration:
 *  a French mark written with a point reads as a thousands separator. */
export function formatMark(mark: number, max: number, lang: 'fr' | 'en'): string {
  const n = Number.isInteger(mark) ? String(mark) : mark.toFixed(1);
  return `${lang === 'fr' ? n.replace('.', ',') : n} / ${max}`;
}

/** Every band, for a test that wants to sweep them. Re-exported so callers do
 *  not have to import from two modules to iterate the mark table. */
export const DELF_BANDS = SCORE_BANDS;
