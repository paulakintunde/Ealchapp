import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  formatNclc,
  nclcFor,
  paperOutcome,
  scaledFor,
  sectionOutcome,
  type SectionOutcome,
  type SectionStatus,
} from './nclc.logic.ts';
import type { ExamSkill, SectionScoring } from '../content/schema.ts';

const scoring: SectionScoring = {
  scale: 300,
  map: [{ raw: 0, scaled: 0 }, { raw: 40, scaled: 300 }],
  nclc: [
    { minRaw: 0, maxRaw: 15, nclcLow: 4, nclcHigh: 5 },
    { minRaw: 16, maxRaw: 27, nclcLow: 6, nclcHigh: 7 },
    { minRaw: 28, maxRaw: 40, nclcLow: 8, nclcHigh: 9 },
  ],
};

const out = (skill: ExamSkill, status: SectionStatus, raw: number | null): SectionOutcome =>
  sectionOutcome({ skill, status, raw, total: 40, scoring });

/* ─── scaling ────────────────────────────────────────────────────────────── */

test('scaled scores interpolate between the map’s points', () => {
  strictEqual(scaledFor(0, scoring.map), 0);
  strictEqual(scaledFor(40, scoring.map), 300);
  strictEqual(scaledFor(20, scoring.map), 150);
  strictEqual(scaledFor(10, scoring.map), 75);
});

test('a raw score off the end of the map yields nothing, not a guess', () => {
  // Extrapolating past the map's edge would invent the part of the curve we
  // know least about, and an uncovered raw score is an authoring gap.
  strictEqual(scaledFor(-1, scoring.map), null);
  strictEqual(scaledFor(41, scoring.map), null);
  // A map that cannot interpolate at all is not a map.
  strictEqual(scaledFor(5, [{ raw: 0, scaled: 0 }]), null);
  strictEqual(scaledFor(5, []), null);
});

test('an unsorted map is sorted rather than misread', () => {
  const jumbled = [{ raw: 40, scaled: 300 }, { raw: 0, scaled: 0 }, { raw: 20, scaled: 100 }];
  strictEqual(scaledFor(20, jumbled), 100);
  strictEqual(scaledFor(10, jumbled), 50);
});

/* ─── NCLC ───────────────────────────────────────────────────────────────── */

test('a raw count maps to the span it falls in', () => {
  deepStrictEqual(nclcFor(0, scoring.nclc), { low: 4, high: 5 });
  deepStrictEqual(nclcFor(15, scoring.nclc), { low: 4, high: 5 });
  deepStrictEqual(nclcFor(16, scoring.nclc), { low: 6, high: 7 });
  deepStrictEqual(nclcFor(40, scoring.nclc), { low: 8, high: 9 });
  // Outside every span is no level, not the nearest one.
  strictEqual(nclcFor(41, scoring.nclc), null);
});

test('a span is clamped to what a board would actually report', () => {
  // Nothing below 4 or above 10 is reportable, whatever a map says.
  deepStrictEqual(nclcFor(5, [{ minRaw: 0, maxRaw: 40, nclcLow: 1, nclcHigh: 12 }]), { low: 4, high: 10 });
  // An inverted span is repaired rather than rendered backwards.
  deepStrictEqual(nclcFor(5, [{ minRaw: 0, maxRaw: 40, nclcLow: 8, nclcHigh: 6 }]), { low: 6, high: 8 });
});

test('the range is formatted as a range, and collapses only when it truly is one', () => {
  strictEqual(formatNclc({ low: 6, high: 7 }, 'fr'), 'NCLC 6 à 7');
  strictEqual(formatNclc({ low: 6, high: 7 }, 'en'), 'NCLC 6–7');
  strictEqual(formatNclc({ low: 7, high: 7 }, 'fr'), 'NCLC 7');
});

/* ─── a section's outcome ────────────────────────────────────────────────── */

test('only a clean scored sitting produces a number', () => {
  const scored = out('CE', 'scored', 20);
  strictEqual(scored.scaled, 150);
  deepStrictEqual(scored.nclc, { low: 6, high: 7 });

  // Every other state keeps the raw count and refuses the number. Zero is a
  // claim about performance; absence is a claim about evidence.
  for (const status of ['not-sat', 'practice', 'not-graded', 'audio-failed', 'no-scoring'] as const) {
    const s = out('CE', status, 20);
    strictEqual(s.scaled, null, `${status} must not report a scaled score`);
    strictEqual(s.nclc, null, `${status} must not report a level`);
    strictEqual(s.raw, 20, `${status} must still show what was answered`);
  }
});

test('a section with no scoring map reports nothing, even when sat', () => {
  const s = sectionOutcome({ skill: 'CO', status: 'scored', raw: 20, total: 40 });
  strictEqual(s.scaled, null);
  strictEqual(s.nclc, null);
});

/* ─── the headline ───────────────────────────────────────────────────────── */

const four = (co: number, ce: number, pe: number, po: number): SectionOutcome[] => [
  out('CO', 'scored', co),
  out('CE', 'scored', ce),
  out('PE', 'scored', pe),
  out('PO', 'scored', po),
];

test('the lowest skill governs, never the average', () => {
  // Three strong skills and one weak one is NCLC 4-5, not the mean. This is
  // the single most consequential thing the screen could get wrong.
  const p = paperOutcome(four(40, 40, 40, 10));
  strictEqual(p.overallStatus, 'complete');
  deepStrictEqual(p.overall, { low: 4, high: 5 });
});

test('ties break on the ceiling, so the narrower span wins', () => {
  const a = { low: 6, high: 7 };
  const sections: SectionOutcome[] = [
    { skill: 'CO', status: 'scored', raw: 20, total: 40, scaled: 150, nclc: a },
    { skill: 'CE', status: 'scored', raw: 20, total: 40, scaled: 150, nclc: { low: 6, high: 9 } },
    { skill: 'PE', status: 'scored', raw: 30, total: 40, scaled: 225, nclc: { low: 8, high: 9 } },
    { skill: 'PO', status: 'scored', raw: 30, total: 40, scaled: 225, nclc: { low: 8, high: 9 } },
  ];
  deepStrictEqual(paperOutcome(sections).overall, a);
});

test('a paper missing one épreuve reports NO overall', () => {
  // THE rule that makes rule 1 safe. Three scored and one ungraded cannot
  // report an overall, because the ungraded one might be the weakest — and
  // the weakest is the answer.
  const p = paperOutcome([out('CO', 'scored', 40), out('CE', 'scored', 40), out('PE', 'scored', 40), out('PO', 'not-graded', null)]);
  strictEqual(p.overall, null);
  strictEqual(p.overallStatus, 'incomplete');
  deepStrictEqual(p.missing, ['PO']);
});

test('a practice épreuve blocks the overall exactly like an ungraded one', () => {
  // The candidate chose not to be scored on it; that is still no evidence.
  const p = paperOutcome([out('CO', 'scored', 40), out('CE', 'practice', 40), out('PE', 'scored', 40), out('PO', 'scored', 40)]);
  strictEqual(p.overall, null);
  deepStrictEqual(p.missing, ['CE']);
});

test('audio that never played blocks the overall, and is named', () => {
  const p = paperOutcome([out('CO', 'audio-failed', 12), out('CE', 'scored', 40), out('PE', 'scored', 40), out('PO', 'scored', 40)]);
  strictEqual(p.overallStatus, 'incomplete');
  deepStrictEqual(p.missing, ['CO'], 'the report must be able to say WHICH épreuve is missing');
});

test('nothing sat at all is distinguished from a partial paper', () => {
  const p = paperOutcome([out('CO', 'not-sat', null), out('CE', 'not-sat', null), out('PE', 'not-sat', null), out('PO', 'not-sat', null)]);
  strictEqual(p.overallStatus, 'none');
  strictEqual(p.overall, null);
});

test('every section keeps its raw count on the report, scored or not', () => {
  // The raw count is always visible so the candidate can see what any estimate
  // came from — and so an absent estimate still shows what they did.
  const p = paperOutcome([out('CO', 'audio-failed', 12), out('CE', 'scored', 30), out('PE', 'practice', 8), out('PO', 'not-graded', null)]);
  deepStrictEqual(p.sections.map((s) => s.raw), [12, 30, 8, null]);
  deepStrictEqual(p.sections.map((s) => s.status), ['audio-failed', 'scored', 'practice', 'not-graded']);
});
