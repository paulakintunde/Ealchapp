// The canonical price matrix, and the only place a price literal may live: the
// Phase 10 paywall imports it rather than re-deriving its own numbers. A price
// in a component, a string table, or a test is drift by definition.
//
// Nothing renders this yet. The settings paywall was removed in the Phase 0
// honesty sweep because it sold a product that does not exist; this file is what
// survives the deletion so Phase 10 rebuilds against pinned numbers.

import type { Currency } from '@/store/useStore';

export type Price = {
  /** Monthly subscription, billed monthly. */
  mo: string;
  /** The annual price expressed per month. Display only: nobody is charged this. */
  yrmo: string;
  /** Annual subscription, billed once. */
  yr: string;
  /** The one-off exam tier (Phase 11). Provisional outside USD — see below. */
  exam: string;
};

/** Annual against twelve months of monthly, as a share saved:
 *
 *    USD  79 vs 119.88 → 34%      GBP  69 vs 107.88 → 36%
 *    EUR  79 vs 119.88 → 34%      CAD  99 vs 155.88 → 36%
 *
 *  Every currency clears 30% and none lands on a whole number of free months, so
 *  annual copy must express the discount as a share, never a month count. If a
 *  price moves, redo this arithmetic and move the copy with it. */
export const PRICES: Record<Currency, Price> = {
  USD: { mo: '$9.99', yrmo: '$6.58', yr: '$79', exam: '$39' },
  EUR: { mo: '9,99 €', yrmo: '6,58 €', yr: '79 €', exam: '39 €' },
  GBP: { mo: '£8.99', yrmo: '£5.75', yr: '£69', exam: '£34.99' },
  CAD: { mo: 'CA$12.99', yrmo: 'CA$8.25', yr: 'CA$99', exam: 'CA$49.99' },
};

// The exam row outside USD is PROVISIONAL. $39 is the pinned decision; no source
// states a EUR/GBP/CAD exam price, so these are derived from the ratios the
// subscription rows already use (GBP ~0.88x, CAD ~1.25x). Apple and Google both
// price IAP from fixed tier ladders, so these will not survive contact with the
// store consoles unchanged. Pin them against the real tiers when the exam SKU is
// created (CC-B), before Phase 11 wires RevenueCat.
//
// Nothing renders the exam row yet: the Examiner does not exist until Phase 8,
// and advertising it before it is built and gated is the fabrication Phase 0
// exists to remove. It is here so the matrix is stated in one place, not so the
// paywall can quote it.
