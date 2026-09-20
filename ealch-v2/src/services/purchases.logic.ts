// What Restore should TELL the user. Pure, no SDK, no React.
//
// PAY-01 is a requirement about feedback: "accurate feedback (restored vs no
// purchases found)". That decision was written twice — once in
// app/settings.tsx, once in app/paywall.tsx — as the same four-branch
// conditional, untested in both places. Two copies of a branch is how one
// surface comes to say "restored" where the other says nothing, and the
// requirement names both surfaces.
//
// So the branch lives here once, and both screens map the outcome to their own
// copy through an exhaustive Record<RestoreOutcome, string>, which turns a
// future fifth outcome into a compile error at both call sites rather than a
// missing message on one of them.

/** Structurally identical to purchases.ts's PurchasesStatus. Declared here
 *  rather than imported because this file must stay free of react-native
 *  (purchases.ts loads the Adapty native module). The test asserts the two
 *  unions are assignable, so drift is a compile error, not a surprise. */
export type PurchasesStatusLike = 'ready' | 'no-key' | 'unavailable';

/** The four things a restore can honestly report. */
export type RestoreOutcome =
  /** Found an active purchase and applied it. */
  | 'restored'
  /** The restore worked and there was nothing to restore. NOT an error — the
   *  most common real answer, and the one PAY-01 names explicitly. */
  | 'none'
  /** The restore itself failed on a build that CAN take payment. */
  | 'failed'
  /** This build cannot reach the store at all (no key, or the native module is
   *  absent) — see purchases.ts's three degrade states. */
  | 'unavailable';

export function restoreOutcome(
  res: { ok: boolean; premium: boolean },
  status: PurchasesStatusLike,
): RestoreOutcome {
  // A successful restore's answer never depends on the status cache.
  if (res.ok) return res.premium ? 'restored' : 'none';
  return status === 'ready' ? 'failed' : 'unavailable';
}
