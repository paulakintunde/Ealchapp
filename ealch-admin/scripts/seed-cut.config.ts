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
  /** Speak-trail worlds bundled in full (stages + every item their blocks
   *  reference). World 1 is where a brand-new speaker starts, so it should be
   *  there before the network is; later worlds arrive over the air. */
  speakWorlds: number[];
};

export const SEED_CUT: SeedCut = {
  // All three Den tracks, in full: SONS 10, A1 30, A2 35.
  //
  // 'sons' was here for the reasons below — deepest content, what the app is
  // differentiated on, where a beginner starts. A1 and A2 joined it when the
  // curriculum spine was completed to 75 units, because bundling a SUBSET of a
  // track turned out to be actively misleading rather than merely incomplete:
  // the Den renders each unit at its real spine `seq`, so shipping seven of
  // A1's thirty units drew a list numbered 1, 2, 3, 9, 10, 16, 19. A learner
  // reads that as a broken curriculum with lessons missing, when in fact the
  // units existed and simply were not in the binary.
  //
  // The cost is small and worth naming: a unit is title + sub + canDo + a
  // lessonIds array, a few hundred bytes. What makes a snapshot big is items,
  // and those are still gated by `themes` and by which lessons reference them.
  // Bundling all 75 units buys a curriculum that reads correctly on a fresh
  // install with no network, which is the property this file exists to protect.
  tracks: ['sons', 'a1', 'a2'],

  // Nothing extra: every Den unit is already covered by `tracks` above.
  units: [],

  // Core themes: the vocabulary a survival-level learner needs first, and drills
  // draw from these on a fresh install. 'objets' and 'dictee' are here so Voice
  // Flash and Dictation are populated OFFLINE — without them, those two drills
  // are empty until the first network fetch. 'marche' / 'salutations' / etc. have
  // no items yet; they are aspirational and simply match nothing for now.
  //
  // The next ten are the best-covered "By Theme" practice themes — their
  // flashcard/voiceflash items were already bundled incidentally (referenced by
  // the a1/a2 lesson units above), but their Construire/Écouter/Scène content
  // was not, so the theme parcours showed empty steps offline. Listing them
  // explicitly pulls in ALL of their published items (not just the
  // lesson-referenced subset) plus their new Scène scenarios, so all five
  // pathway steps work with no network on day one.
  themes: [
    'cafe', 'objets', 'dictee', 'marche', 'salutations', 'nombres', 'transport',
    'cuisine', 'ecole', 'deplacements', 'metiers', 'corps', 'maison', 'animaux',
    'routines', 'famille', 'sports-et-loisirs',
  ],

  // The first Speak world (Le Jardin des Sons), so the trail's first stations
  // are walkable offline on day one. Worlds 2-6 ship in the snapshot only.
  speakWorlds: [1],
};

/** Every unit id explicitly named, for the cut summary. */
export function describeCut(): string {
  const parts = [
    `tracks: ${SEED_CUT.tracks.join(', ') || '(none)'}`,
    `units: ${SEED_CUT.units.length}`,
    `themes: ${SEED_CUT.themes.join(', ') || '(none)'}`,
    `speak worlds: ${SEED_CUT.speakWorlds.join(', ') || '(none)'}`,
  ];
  return parts.join('  ·  ');
}
