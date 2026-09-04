// TCF Canada blanc-01 — how the two comprehension épreuves report.
//
// ── Weighted, because the format says so ───────────────────────────────────
//
// STANDARD-tcf §1: "twenty correct at the bottom of the slope and twenty
// correct scattered across it are different performances and must not produce
// the same estimate." A plain count gives both candidates the same scaled score
// and the same NCLC, so `weights` is what makes this a TCF score rather than a
// TEF score with different numbers. When weights are present, `map` and `nclc`
// are indexed by the WEIGHTED total, not by the count.
//
// The weights rise with the band and are deliberately gentle: a C2 answer is
// worth five A1 answers, not fifty. A steeper curve would let three lucky
// guesses at the top outrank a solid B1 performance, which is the opposite
// failure and no more honest than the one it fixes.
//
//   band  weight   items   contribution
//   a1     1.0       3        3
//   a2     1.5       6        9
//   b1     2.0      10       20
//   b2     3.0      10       30
//   c1     4.0       7       28
//   c2     5.0       3       15
//                            ---
//                            105   ← the index runs 0..105, not 0..39
//
// Cumulative, for reading the tables below: everything right through A2 is 12,
// through B1 is 32, through B2 is 62, through C1 is 90, everything is 105.
//
// ── Separate tables for CO and CE ──────────────────────────────────────────
//
// §7 requires it and the reason is not symmetry: the two épreuves are not
// equally hard at the same point on the ramp. A reading document stays in front
// of the candidate; a listening document is gone. So the same weighted index
// buys a slightly higher NCLC on CO than on CE, and the maps differ at the top
// where that gap is widest. Sharing one table would be tidier and wrong.
//
// ── What these numbers are ─────────────────────────────────────────────────
//
// Expert judgement, not equating. The boards publish NCLC boundaries but not
// their raw-to-scaled conversion, which they derive from live sitting data we
// do not have. Every band below is therefore a RANGE, and the estimate clamps
// to NCLC 4-10 because nothing outside that is reportable.
import type { SectionScoring } from '../../../ealch-v2/src/content/schema.ts';

/** Shared by both épreuves: the band is the evidence, on either skill. */
const WEIGHTS = { a1: 1, a2: 1.5, b1: 2, b2: 3, c1: 4, c2: 5 } as const;

export const CO_SCORING: SectionScoring = {
  scale: 699,
  weights: WEIGHTS,
  map: [
    { raw: 0, scaled: 0 },
    { raw: 12, scaled: 130 },
    { raw: 32, scaled: 300 },
    { raw: 62, scaled: 460 },
    { raw: 90, scaled: 600 },
    { raw: 105, scaled: 699 },
  ],
  nclc: [
    // Below the A2 ceiling there is nothing this instrument can report.
    { minRaw: 0, maxRaw: 11, nclcLow: 4, nclcHigh: 4 },
    { minRaw: 12, maxRaw: 24, nclcLow: 4, nclcHigh: 5 },
    { minRaw: 25, maxRaw: 39, nclcLow: 5, nclcHigh: 6 },
    { minRaw: 40, maxRaw: 54, nclcLow: 6, nclcHigh: 7 },
    { minRaw: 55, maxRaw: 69, nclcLow: 7, nclcHigh: 8 },
    { minRaw: 70, maxRaw: 84, nclcLow: 8, nclcHigh: 9 },
    { minRaw: 85, maxRaw: 96, nclcLow: 9, nclcHigh: 10 },
    { minRaw: 97, maxRaw: 105, nclcLow: 10, nclcHigh: 10 },
  ],
};

export const CE_SCORING: SectionScoring = {
  scale: 699,
  weights: WEIGHTS,
  map: [
    { raw: 0, scaled: 0 },
    { raw: 12, scaled: 120 },
    { raw: 32, scaled: 290 },
    { raw: 62, scaled: 450 },
    { raw: 90, scaled: 595 },
    { raw: 105, scaled: 699 },
  ],
  nclc: [
    // Shifted up against CO: the document does not disappear, so the same
    // weighted index is slightly weaker evidence of the same ability.
    { minRaw: 0, maxRaw: 12, nclcLow: 4, nclcHigh: 4 },
    { minRaw: 13, maxRaw: 26, nclcLow: 4, nclcHigh: 5 },
    { minRaw: 27, maxRaw: 42, nclcLow: 5, nclcHigh: 6 },
    { minRaw: 43, maxRaw: 57, nclcLow: 6, nclcHigh: 7 },
    { minRaw: 58, maxRaw: 72, nclcLow: 7, nclcHigh: 8 },
    { minRaw: 73, maxRaw: 87, nclcLow: 8, nclcHigh: 9 },
    { minRaw: 88, maxRaw: 98, nclcLow: 9, nclcHigh: 10 },
    { minRaw: 99, maxRaw: 105, nclcLow: 10, nclcHigh: 10 },
  ],
};
