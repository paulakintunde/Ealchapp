// WHAT SHIPS INSIDE THE APP BINARY.
//
// The full corpus lives in Supabase and reaches users over the air. This file
// declares the subset that is compiled into the build, so the app works on a
// first launch with no network, no account and no configuration — a property the
// codebase deliberately protects today, and one we must not quietly lose.
//
// It is a CONFIG, not logic, on purpose: the seed cut is a product decision
// ("what must a brand-new user have offline on day one?"), and it should be
// reviewable in a diff by someone who does not read TypeScript.
//
// Everything NOT matched here still publishes — it just arrives via the snapshot
// channel instead of the binary. Nothing is lost by leaving something out; it
// only means a first-run user needs one network call to see it.

export type SeedCut = {
  /** Whole tracks bundled in full. Their units, their lessons, and every item
   *  those lessons reference are pulled in automatically. */
  tracks: ('sons' | 'a1' | 'a2')[];
  /** Individual units to bundle from tracks NOT listed above. */
  units: string[];
  /** Themed vocabulary bundled regardless of which lesson references it — this
   *  is what gives a brand-new user something to drill on day one. */
  themes: string[];
};

export const SEED_CUT: SeedCut = {
  // The complete pronunciation track. It is the deepest content we ship, it is
  // what the app is actually differentiated on, and it is where a beginner
  // starts — so it must be there before the network is.
  tracks: ['sons'],

  // The first four lessons of A1 and A2. Enough to prove the curriculum is real
  // without bundling a corpus that has not been written yet.
  units: ['a1.01', 'a1.02', 'a1.03', 'a1.04', 'a2.01', 'a2.02', 'a2.03', 'a2.04'],

  // Core themes: the vocabulary a survival-level learner needs first, and drills
  // draw from these on a fresh install. 'objets' and 'dictee' are here so Voice
  // Flash and Dictation are populated OFFLINE — without them, those two drills
  // are empty until the first network fetch. 'marche' / 'salutations' / etc. have
  // no items yet; they are aspirational and simply match nothing for now.
  themes: ['cafe', 'objets', 'dictee', 'marche', 'salutations', 'nombres', 'transport'],
};

/** Every unit id explicitly named, for the cut summary. */
export function describeCut(): string {
  const parts = [
    `tracks: ${SEED_CUT.tracks.join(', ') || '(none)'}`,
    `units: ${SEED_CUT.units.length}`,
    `themes: ${SEED_CUT.themes.join(', ') || '(none)'}`,
  ];
  return parts.join('  ·  ');
}
