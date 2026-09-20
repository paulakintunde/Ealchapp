// The four-input exam gate decision, pinned. Any change to this file's
// expectations is a change to who is allowed into a paper — it should never
// happen as a side effect of touching something else.
import { deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { examPaperAllowed } from './examGate.logic.ts';

// THE SHIP-DAY CASE. system_config.config.examGateOn is false in production
// and nobody holds 'examiner' yet, so a server gate that only asked "does
// this uid have 'examiner'?" would reject 100% of live exam attempts.
// Phase 4's server gate mirrors this whole function; this is the case that
// proves it did not shrink to the entitlement half.
test('the gate being off opens every paper, entitled or not', () => {
  deepStrictEqual(
    examPaperAllowed({ gateOn: false, entitled: false, freePapers: 0, paperNo: 20 }),
    { allowed: true }
  );
  deepStrictEqual(
    examPaperAllowed({ gateOn: false, entitled: true, freePapers: 1, paperNo: 1 }),
    { allowed: true }
  );
});

test('an entitled candidate opens any paper once the gate is on', () => {
  deepStrictEqual(
    examPaperAllowed({ gateOn: true, entitled: true, freePapers: 0, paperNo: 20 }),
    { allowed: true }
  );
});

test('the free allowance is papers, numbered from one', () => {
  deepStrictEqual(
    examPaperAllowed({ gateOn: true, entitled: false, freePapers: 1, paperNo: 1 }),
    { allowed: true }
  );
  deepStrictEqual(
    examPaperAllowed({ gateOn: true, entitled: false, freePapers: 1, paperNo: 2 }),
    { allowed: false, reason: 'needs-exam-tier' }
  );
  deepStrictEqual(
    examPaperAllowed({ gateOn: true, entitled: false, freePapers: 0, paperNo: 1 }),
    { allowed: false, reason: 'needs-exam-tier' }
  );
});

test('a fractional or negative allowance never widens the gate', () => {
  // floor(2.7) = 2, so paper 2 is still inside the allowance.
  deepStrictEqual(
    examPaperAllowed({ gateOn: true, entitled: false, freePapers: 2.7, paperNo: 2 }),
    { allowed: true }
  );
  // max(0, -5) = 0: a negative allowance is never fewer than zero free papers.
  deepStrictEqual(
    examPaperAllowed({ gateOn: true, entitled: false, freePapers: -5, paperNo: 1 }),
    { allowed: false, reason: 'needs-exam-tier' }
  );
});
