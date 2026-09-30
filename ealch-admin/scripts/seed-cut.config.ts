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
  tracks: ('sons' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2')[];
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

  // B1 is not a bundled track, so each B1 unit that ships in the binary is
  // named here. b1-merge-into-seed.ts refuses to merge a unit missing from this
  // list, because the next publish would cut it straight back out of the seed.
  // Side effect worth knowing: a bundled b1 unit puts 'b1' in the publish's
  // seedLevels, so published b1 scenarios and playlists ship in the seed too.
  units: [
    'b1.01', 'b1.02', 'b1.03', 'b1.04',
    'b1.05', 'b1.06', 'b1.07', 'b1.08', 'b1.09', 'b1.10', 'b1.11', 'b1.12', 'b1.13', 'b1.14',
    'b1.15', 'b1.16', 'b1.17', 'b1.18', 'b1.19', 'b1.20', 'b1.21', 'b1.22', 'b1.23', 'b1.24',
    'b1.25', 'b1.26', 'b1.27', 'b1.28', 'b1.29', 'b1.30', 'b1.31', 'b1.32', 'b1.33', 'b1.34', 'b1.35', 'b1.36', 'b1.37', 'b1.38', 'b1.39',
    'b2.01', 'b2.02', 'b2.03', 'b2.04', 'b2.05', 'b2.06', 'b2.07', 'b2.08',
    'b2.09', 'b2.10', 'b2.11', 'b2.12', 'b2.13', 'b2.14', 'b2.15', 'b2.16', 'b2.17', 'b2.18', 'b2.19', 'b2.20', 'b2.21',
    'b2.22', 'b2.23', 'b2.24', 'b2.25', 'b2.26',
  ],

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
  // 'jours-et-mois' and 'heure-et-date' joined on 2026-08-09, and the reason is
  // worth keeping because the alternative looked cheaper and was worse.
  //
  // Publishing v20 was the first publish since a1.08 and a1.12 were authored.
  // Both builds had copied rows into seed.json by hand and pinned them with a
  // manifest test; the cut re-derives the seed from themes plus references and
  // knew nothing about either manifest, so 47 of those rows left the binary and
  // two tests went red. The cheap fix was to name the 47 ids individually, or to
  // stop the tests asserting presence at all.
  //
  // Neither is what a learner needs. Days, months and clock times are the two
  // themes a beginner reaches for first and the two most likely to be wanted on
  // a train with no signal, and a1.08, a1.09 and a1.12 are all inside the
  // bundled A1 track — the lessons ship offline while the vocabulary they drill
  // did not. Bundling the themes whole costs 869 items on a 7,794-item cut,
  // about eleven percent, and buys the same day-one property the ten themes
  // above were added for. An id list would have bought only a green test.
  themes: [
    'cafe', 'objets', 'dictee', 'marche', 'salutations', 'nombres',
    'cuisine', 'ecole', 'deplacements', 'metiers', 'corps', 'maison', 'animaux',
    'routines', 'famille', 'sports-et-loisirs',
    'jours-et-mois', 'heure-et-date',
  ],

  // The first Speak world (Le Jardin des Sons), so the trail's first stations
  // are walkable offline on day one. Worlds 2-6 ship in the snapshot only.
  speakWorlds: [1],
};

/**
 * THE FREE-CORE CUT (premium content packs, PREMIUM-PACKS-SPEC.md section 7,
 * approved 2026-09-27): sons and a1 in full, every paid unit as a skeleton,
 * no exams (they are the `exam` pack). Applied by `buildCoreSeed` in
 * seed-cut.logic.ts, on the core that content-packs.logic.ts splits off, and
 * used by `content:publish --packs`.
 *
 * NOT YET the default cut, deliberately: a plain `content:publish` still cuts
 * with `SEED_CUT` above until the rollout (the private bucket must exist
 * first). The tests and the band merge are ready for it (2026-09-28): the
 * content tests read seed.json plus seed-packs.json (TEST_CUT below), and
 * b1-merge-into-seed.ts writes both files under packs. The rollout's seed step
 * is making --packs the default and retiring SEED_CUT.units.
 */
export const CORE_SEED_CUT: SeedCut = {
  tracks: ['sons', 'a1'],
  units: [],
  themes: SEED_CUT.themes,
  speakWorlds: [1],
};

/**
 * THE TEST CUT (premium packs): what the content tests read once the binary is
 * the free core. Every band's units in full (so every published lesson and
 * every item it names), the same themes and speak worlds as SEED_CUT. It is
 * SEED_CUT with the unit list retired: SEED_CUT.units existed only because b1
 * and b2 were not bundled tracks, and under packs nothing paid is bundled, so
 * the question "is this unit in the seed?" becomes "is it published?".
 *
 * `content:publish --packs` cuts the corpus with it (cutSeed) and writes the
 * rows the core seed does not already carry to ealch-v2/src/content/
 * seed-packs.json; seedPlusPacks() composes the two for the tests. A band
 * merge under packs (b1-merge-into-seed.ts) therefore needs no unit list: a
 * published unit of any band is in this cut.
 */
export const TEST_CUT: SeedCut = {
  tracks: ['sons', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'],
  units: [],
  themes: SEED_CUT.themes,
  speakWorlds: SEED_CUT.speakWorlds,
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
