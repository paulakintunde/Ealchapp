// Raw marks → a reported score → an NCLC estimate. Pure, no React.
//
// ── The three rules, and why each is structural rather than cosmetic ────────
//
// 1. THE LOWEST SKILL GOVERNS. IRCC sets a candidate's level skill by skill and
//    the weakest épreuve decides the file. Averaging would flatter a candidate
//    with three strong skills and one weak one into a level they cannot claim,
//    which is the single most consequential thing this screen could get wrong.
//
// 2. NCLC IS A RANGE. The exam bodies publish their NCLC boundaries but not
//    their raw-to-scaled conversion, which they equate from live sitting data
//    we do not have. Every map we write is expert judgement. A point estimate
//    off an expert-judged map is a number somebody may make an immigration
//    decision on, and we cannot stand behind that precision; a range we can.
//
// 3. NOTHING IS INVENTED. A section that was not sat, could not be graded, was
//    taken in practice mode, or whose audio never played has NO score — not a
//    zero. Zero is a claim about performance; absence is a claim about
//    evidence, and they are not interchangeable. Every one of those states is
//    carried and reported distinctly, because the candidate needs to know
//    whether the gap is theirs or ours.
//
// The overall estimate therefore requires ALL FOUR épreuves scored. Reporting
// an overall off three skills would be rule 1 with the weakest skill quietly
// omitted, which is worse than reporting nothing.

// Relative with the extension, not the '@/' alias: this module is imported by
// `node --test` directly, which does not resolve the alias, and NCLC_MIN/MAX
// are a RUNTIME import rather than an erased type. Same form progress.logic.ts
// uses for the same reason.
import { NCLC_MAX, NCLC_MIN, type ExamSkill, type NclcRule, type SectionScoring } from '../content/schema.ts';

export type NclcRange = { low: number; high: number };

/** Why a section has no number. Ordered by how much it is OUR fault. */
export type SectionStatus =
  /** Scored normally. */
  | 'scored'
  /** Never attempted. */
  | 'not-sat'
  /** Sat in practice mode: the candidate chose not to be scored. */
  | 'practice'
  /** Open task the grader could not reach. Retryable. */
  | 'not-graded'
  /** Listening whose audio never played. Ours, not theirs. */
  | 'audio-failed'
  /** Sat, but the section carries no scoring map to read. */
  | 'no-scoring';

export type SectionOutcome = {
  skill: ExamSkill;
  status: SectionStatus;
  /** Correct answers. Present whenever the section was sat, even unscored —
   *  the raw count is always shown, so the candidate can see what any
   *  estimate came from. */
  raw: number | null;
  total: number;
  scaled: number | null;
  nclc: NclcRange | null;
};

/**
 * Interpolate a raw count onto the section's reported scale.
 *
 * Piecewise linear between the map's points. Returns null rather than
 * extrapolating past either end: a map that does not cover a raw score is an
 * authoring gap, and guessing past its edge would invent the part of the
 * curve we know least about.
 */
export function scaledFor(raw: number, map: { raw: number; scaled: number }[]): number | null {
  if (map.length < 2) return null;
  const pts = [...map].sort((a, b) => a.raw - b.raw);
  const first = pts[0]!;
  const last = pts[pts.length - 1]!;
  if (raw < first.raw || raw > last.raw) return null;
  for (let i = 1; i < pts.length; i += 1) {
    const lo = pts[i - 1]!;
    const hi = pts[i]!;
    if (raw <= hi.raw) {
      if (hi.raw === lo.raw) return hi.scaled;
      const t = (raw - lo.raw) / (hi.raw - lo.raw);
      return Math.round(lo.scaled + t * (hi.scaled - lo.scaled));
    }
  }
  return last.scaled;
}

/**
 * The NCLC span a raw count falls in, clamped to what is reportable.
 *
 * TCF Canada reports nothing below 4 or above 10 whatever the raw score, and
 * a range that escaped those bounds would name a level no board would put on
 * paper.
 */
export function nclcFor(raw: number, rules: NclcRule[]): NclcRange | null {
  const hit = rules.find((r) => raw >= r.minRaw && raw <= r.maxRaw);
  if (!hit) return null;
  const low = Math.max(NCLC_MIN, Math.min(NCLC_MAX, hit.nclcLow));
  const high = Math.max(NCLC_MIN, Math.min(NCLC_MAX, hit.nclcHigh));
  return { low: Math.min(low, high), high: Math.max(low, high) };
}

/**
 * Turn a per-band profile of correct answers into the value the map is indexed
 * by.
 *
 * On a ramp, WHERE a candidate was right is evidence and a count throws it
 * away. Twenty correct at the bottom and twenty scattered to C2 are different
 * performances; without this they produce the same scaled score and the same
 * NCLC, which STANDARD-tcf §1 names as the thing that must not happen.
 *
 * A band with no weight contributes its plain count, so a partial weights table
 * degrades toward the old behaviour rather than silently scoring zero.
 */
export function weightedRaw(
  byBand: Partial<Record<string, number>>,
  weights: Partial<Record<string, number>> | undefined
): number {
  let total = 0;
  for (const [band, n] of Object.entries(byBand)) {
    if (typeof n !== 'number') continue;
    total += n * (weights?.[band] ?? 1);
  }
  // The map and the rules are integer-indexed, and a fractional weight is a
  // legitimate way to say "worth a little more". Round once, here, rather than
  // letting scaledFor and nclcFor round differently.
  return Math.round(total);
}

/** One épreuve's outcome, from what was actually logged. */
export function sectionOutcome(input: {
  skill: ExamSkill;
  status: SectionStatus;
  raw: number | null;
  total: number;
  scoring?: SectionScoring;
  /** Correct answers per band. Required to honour `scoring.weights`; absent on
   *  formats that do not weight, and on results logged before bands were kept. */
  byBand?: Partial<Record<string, number>>;
}): SectionOutcome {
  const { skill, status, raw, total, scoring, byBand } = input;
  const base: SectionOutcome = { skill, status, raw, total, scaled: null, nclc: null };
  // Anything but a clean scored sitting gets its raw count and nothing else.
  // The number would be real arithmetic on unreal evidence.
  if (status !== 'scored' || raw === null || !scoring) return base;
  // The count is what a candidate is shown; the INDEX is what the map reads.
  // They differ only on a weighted format, and `raw` stays the honest count so
  // the report never shows someone a weighted number as if it were questions.
  const index = scoring.weights && byBand ? weightedRaw(byBand, scoring.weights) : raw;
  return {
    ...base,
    scaled: scaledFor(index, scoring.map),
    nclc: nclcFor(index, scoring.nclc),
  };
}

/** Lower of two spans: by floor first, then by ceiling. */
function lower(a: NclcRange, b: NclcRange): NclcRange {
  if (a.low !== b.low) return a.low < b.low ? a : b;
  return a.high <= b.high ? a : b;
}

export type PaperOutcome = {
  sections: SectionOutcome[];
  /** The headline, or null. See overallStatus for why. */
  overall: NclcRange | null;
  /** 'complete' — every épreuve scored, overall is the weakest.
   *  'incomplete' — at least one épreuve has no score, so no overall exists.
   *  'none' — nothing scored at all. */
  overallStatus: 'complete' | 'incomplete' | 'none';
  /** The épreuves with no score, so the report can say what is missing. */
  missing: ExamSkill[];
};

/**
 * Fold a paper's épreuves into a headline.
 *
 * Requires every section to be scored. A paper with three scored épreuves and
 * one ungraded one reports NO overall, because the ungraded one might be the
 * weakest, and the weakest is the answer.
 */
export function paperOutcome(sections: SectionOutcome[]): PaperOutcome {
  const missing = sections.filter((s) => s.nclc === null).map((s) => s.skill);
  const scored = sections.filter((s): s is SectionOutcome & { nclc: NclcRange } => s.nclc !== null);

  if (scored.length === 0) return { sections, overall: null, overallStatus: 'none', missing };
  if (missing.length > 0) return { sections, overall: null, overallStatus: 'incomplete', missing };

  return {
    sections,
    overall: scored.map((s) => s.nclc).reduce(lower),
    overallStatus: 'complete',
    missing,
  };
}

/** 'NCLC 6 à 7', or 'NCLC 7' when the span is a single level. */
export function formatNclc(r: NclcRange, lang: 'fr' | 'en'): string {
  if (r.low === r.high) return `NCLC ${r.low}`;
  return lang === 'fr' ? `NCLC ${r.low} à ${r.high}` : `NCLC ${r.low}–${r.high}`;
}
