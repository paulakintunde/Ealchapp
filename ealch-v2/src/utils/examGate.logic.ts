// Whether a candidate may open a given mock paper. Pure, no React, no config.
//
// ── Wired now, open now ─────────────────────────────────────────────────────
//
// `examiner` has been modelled as a distinct paid product since Phase 10 —
// explicitly NOT granted by Première — and until this phase nothing checked it.
// The exam screens were free by omission rather than by decision.
//
// This closes that, but ships the gate OPEN (`examGateOn: false`). The reason
// for building it before it is needed: a paywall added later, under launch
// pressure, is a paywall nobody has ever exercised, and the first person to
// exercise it is a paying customer. Wiring it now means locking the tier is a
// remote-config flip that has already been running in the open position for
// however long.
//
// The free allowance is papers, not sections. A candidate who hits the wall
// halfway through an épreuve has been sold nothing and lost their sitting.

export type GateDecision =
  /** Open it. */
  | { allowed: true }
  /** Blocked, with the reason the paywall should lead with. */
  | { allowed: false; reason: 'needs-exam-tier' };

export function examPaperAllowed(input: {
  /** RemoteConfig.examGateOn. */
  gateOn: boolean;
  /** hasFeature(e, 'examiner'). */
  entitled: boolean;
  /** RemoteConfig.examFreePapers. */
  freePapers: number;
  /** This paper's number within its format, 1-based. */
  paperNo: number;
}): GateDecision {
  const { gateOn, entitled, freePapers, paperNo } = input;
  // The gate is off: everything is open, whatever else is true.
  if (!gateOn) return { allowed: true };
  // Paid for it.
  if (entitled) return { allowed: true };
  // Inside the free allowance. Papers are numbered from 1, so an allowance of
  // 1 opens paper 1 and nothing else.
  if (paperNo <= Math.max(0, Math.floor(freePapers))) return { allowed: true };
  return { allowed: false, reason: 'needs-exam-tier' };
}
