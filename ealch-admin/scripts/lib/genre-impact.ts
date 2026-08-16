// a1.03's printed ending figures, measured across a merge BEFORE it is written.
//
// ════════════════════════════════════════════════════════════════════════════
//  WHY THIS EXISTS: A2's MERGE SCRIPTS DROPPED A CHECK A1's MERGE SCRIPTS HAVE
// ════════════════════════════════════════════════════════════════════════════
//
// `a1-03-genre.test.ts` recomputes twenty-seven printed ending figures from the
// seed on every run and compares each one exactly. Any merge that carries a
// gendered single-word noun into the seed can move them.
//
// Measured 2026-08-16 across all 61 merge scripts: **30 carry a before/after
// ending check and 31 do not**, and EVERY script in the A2 situational band is
// in the second group:
//
//   merge-restaurant   (a2.07)     merge-hotel           (a2.29)
//   merge-courses      (a2.26)     merge-travail-metiers (a2.30)
//   merge-transports   (a2.27)     merge-medecin         (a2.28)
//
// That is the whole explanation for a1.03 having been re-rendered SIX times in
// this band without a single build being warned in advance. The check was not
// missing from the codebase; it was missing from this lineage. The A1 scripts
// (famille, pays, maison, meteo and twenty-six more) have had it since a1.11
// broke the -e statistic.
//
// ════════════════════════════════════════════════════════════════════════════
//  AND WHY THIS ONE WARNS WHERE THE A1 VERSION DIES
// ════════════════════════════════════════════════════════════════════════════
//
// The A1 version calls `die()` and tells the author to "withdraw the row rather
// than editing a1.03". That is the right remedy for A1, where the joiner is
// usually a noun the lesson chose to author.
//
// It is the WRONG remedy for this band, and three builds established that
// independently. In a2.26, a2.27 and a2.28 the number of AUTHORED rows joining
// a1.03's population was ZERO every time; every joiner was a CARRIED IMPORT,
// and each was a noun named by a card. a2.26 withdrew three imports it did not
// need; a2.27 and a2.28 could withdraw nothing without rendering a card blank
// in a transport lesson or a doctor's lesson.
//
// So a hard gate here would block correct work. What was actually expensive was
// never the drift: it was finding out about it from a red suite twenty minutes
// after the merge, having already written the seed. This reports the exact
// deltas and the exact remediation at the moment the merge runs.
//
// Pass `strict: true` to get the A1 behaviour.
import { endingPopulation, measureEnding } from '../../../ealch-v2/src/content/gender.logic.ts';

/** The twenty-seven endings `a1-03-genre.test.ts` prints and compares. Copied
 *  from the A1 merge scripts so both lineages measure the same list. */
export const PRINTED_ENDINGS = [
  'e', 'age', 'eau', 'ment', 'tion', 'té', 'eur', 'ier', 'isme', 'ette',
  'ance', 'ence', 'oir', 'ie', 'ure', 'ail', 'euse', 'aire', 'in', 'on',
  'ard', 'et', 'is', 'if', 'ude', 'esse', 'al',
] as const;

type Item = { id: string; fr?: string; theme?: string };

export type GenreImpact = {
  moved: string[];
  popBefore: number;
  popAfter: number;
  /** The rows this merge puts INTO a1.03's population, split by whether the
   *  build authored them or merely carried them. The split is the finding: an
   *  authored-only guard cannot see a carry, and six builds have now proved it. */
  joiners: { id: string; fr: string; authored: boolean }[];
};

/**
 * Measure what a merge would do to a1.03's printed figures.
 *
 * @param before   `seed.items` as they are on disk now
 * @param after    the item array this merge is about to write
 * @param authored ids this build AUTHORED, so carries can be told apart
 */
export function measureGenreImpact(
  before: Item[], after: Item[], authored: Iterable<string> = [],
): GenreImpact {
  const own = new Set(authored);
  const popBefore = (endingPopulation(before as never) as unknown[]).length;
  const popAfter = (endingPopulation(after as never) as unknown[]).length;

  const moved: string[] = [];
  for (const e of PRINTED_ENDINGS) {
    const a = measureEnding(before as never, e);
    const b = measureEnding(after as never, e);
    const fa = a ? `${a.n}/${a.accuracy}%/${a.predicts}` : 'none';
    const fb = b ? `${b.n}/${b.accuracy}%/${b.predicts}` : 'none';
    if (fa !== fb) moved.push(`-${e}: ${fa} -> ${fb}`);
  }

  const wasIn = new Set((endingPopulation(before as never) as Array<{ id: string }>).map((i) => i.id));
  const joiners = (endingPopulation(after as never) as Array<{ id: string; fr: string }>)
    .filter((i) => !wasIn.has(i.id))
    .map((i) => ({ id: i.id, fr: i.fr, authored: own.has(i.id) }));

  return { moved, popBefore, popAfter, joiners };
}

/**
 * Print the impact, and optionally refuse the merge.
 *
 * Called BEFORE the seed is written, so an author sees it while the decision is
 * still cheap rather than after `npm test` goes red.
 */
export function reportGenreImpact(
  impact: GenreImpact,
  opts: { strict?: boolean; die?: (m: string) => never } = {},
): void {
  const { moved, popBefore, popAfter, joiners } = impact;

  if (!moved.length && popBefore === popAfter) {
    console.log(`  a1.03 ending figures: unmoved (population ${popBefore})`);
    return;
  }

  const carried = joiners.filter((j) => !j.authored);
  const own = joiners.filter((j) => j.authored);

  console.log(`\n  ── a1.03's printed ending figures WILL MOVE ──`);
  console.log(`  population ${popBefore} -> ${popAfter}`);
  for (const m of moved) console.log(`    ${m}`);
  console.log(`  joiners: ${own.length} authored, ${carried.length} CARRIED`);
  for (const j of joiners.slice(0, 12)) {
    console.log(`    ${j.authored ? 'authored' : 'carried '}  ${j.id}  « ${j.fr} »`);
  }
  if (joiners.length > 12) console.log(`    ... and ${joiners.length - 12} more`);

  // The accuracy is what decides whether a RULE moved or only a COUNTER. In
  // every band build so far only counters moved, which is why re-rendering
  // a1.03 has been correct rather than a symptom.
  const accuracyMoved = moved.some((m) => {
    const [, a, b] = /-\S+: (\S+) -> (\S+)/.exec(m) ?? [];
    return a && b && a.split('/')[1] !== b.split('/')[1];
  });
  console.log(accuracyMoved
    ? '  AN ACCURACY MOVED: a rule a1.03 teaches is now less true. This is not a counter fix.'
    : '  No accuracy moved, so every rule a1.03 teaches is as true as it was and only counters changed.');

  console.log('\n  REMEDY, in order:');
  console.log('    1. If a joiner is a CARRY the lesson does not need, drop it and re-run. Cheapest.');
  console.log('    2. Otherwise re-render a1.03: update the counts in scripts/data/genre-endings.ts,');
  console.log('       bump the version in scripts/data/genre-lesson.ts with the reason in-source, then');
  console.log('       `pnpm content:gender` and `pnpm tsx scripts/merge-noun-gender-into-seed.ts`.');
  console.log('    3. Re-run the suite. a1-03-genre.test.ts and a1-22-pays.test.ts both compare these.\n');

  if (opts.strict) {
    const bail = opts.die ?? ((m: string) => { console.error(m); process.exit(1); });
    bail('this merge moves a1.03\'s measured ending figures and strict mode is on');
  }
}
