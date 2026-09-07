// TCF Canada — how the two comprehension épreuves report.
//
// FORMAT-LEVEL, not per-paper. These tables describe the instrument, so every
// TCF paper shares them: two papers of the same format that scored the same
// performance differently would not be parallel forms, which is the one thing
// a pack of five has to be. Moved out of tcf-blanc01/ when blanc-02 needed
// them, rather than copied, because a copy is how five TEF papers came to
// share one answer key.
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

/* ─── Expression écrite and orale — 3 raw on /20 each ─────────────────────── */
//
// Authored because their absence was a live defect, not a gap in the format:
// TCF papers carried scoring on CO and CE only, so `paperOutcome` was permanently
// one épreuve short of an overall and five published papers could report nothing
// at all, whatever the candidate scored. See exam/report-reachable.test.ts.
//
// ── Raw is a RAMP here, which is the difference from TEF ────────────────────
//
// Raw is the number of tasks whose AI grade met that task's OWN target band,
// and TCF's three tasks are a graded climb — a2, then b1, then b2, on both
// épreuves and identically on all five papers. TEF's two are a b1/b2 pair, so
// its count says "how many", while this one also says "how far": one task met
// is A2 work, two is B1, three is B2.
//
// The count still assumes the candidate climbs IN ORDER. Someone who somehow
// met the b2 task while failing the a2 one reads as having reached A2, which is
// wrong and vanishingly unlikely; resolving it would need the per-task grades
// the section score does not carry. Named here rather than hidden, because it
// is the one place this table can misreport.
//
// ── Where each number comes from ────────────────────────────────────────────
//
// The /20 scale and every NCLC boundary are BLUEPRINT-tcf-canada §8.1, which
// derived them at calibration:
//
//     NCLC   4     5    6     7      8      9      10
//     /20    4-5   6    7-9   10-11  12-13  14-15  16-20
//
// The mapping from tasks-met to a band is OURS, the expert-judged approximation
// §8.2 requires ("the raw-to-scaled conversion is not published"). Every scaled
// anchor below sits inside the /20 span of the NCLC band its own rule reports —
// asserted in tcf/paper-rules.test.ts so the two halves cannot drift apart.
//
// The ceiling is 9, not 10. NCLC 10 needs C1 evidence and neither épreuve ever
// asks for it: the hardest task on the paper is B2, so a C1 candidate cannot
// demonstrate C1 here. Reporting 10 off a B2 ceiling would be inventing the
// part of the range the paper does not test. TEF's tables stop at 9 for exactly
// the same reason.

const OPEN_MAP = [
  // No positive evidence. Reported at the floor because §8.1 states it is not
  // possible to score below NCLC 4, NOT because 4 was measured.
  { raw: 0, scaled: 4 },
  { raw: 1, scaled: 5 },  // met the A2 task
  { raw: 2, scaled: 9 },  // and the B1 task
  { raw: 3, scaled: 13 }, // and the B2 task: the paper's own ceiling
];

const OPEN_NCLC = [
  { minRaw: 0, maxRaw: 0, nclcLow: 4, nclcHigh: 4 },
  { minRaw: 1, maxRaw: 1, nclcLow: 4, nclcHigh: 5 },
  { minRaw: 2, maxRaw: 2, nclcLow: 6, nclcHigh: 7 },
  { minRaw: 3, maxRaw: 3, nclcLow: 8, nclcHigh: 9 },
];

/** Deliberately NOT weighted. `weights` reads a per-band profile of correct
 *  ANSWERS, which an épreuve of three graded tasks does not have — the ramp is
 *  already carried by what "met its target" means task by task. */
export const EE_SCORING: SectionScoring = { scale: 20, map: OPEN_MAP, nclc: OPEN_NCLC };
export const EO_SCORING: SectionScoring = { scale: 20, map: OPEN_MAP, nclc: OPEN_NCLC };
