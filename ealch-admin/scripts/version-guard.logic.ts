// "Has this lesson's version moved forward?" — asked once, for every batch.
//
// ── Why it is a function now (2026-08-10) ───────────────────────────────────
//
// Seventeen authoring batches carried their own copy of this check, and every
// copy had the same defect: it ran BEFORE validation and it died on a DRY RUN.
//
// A dry run writes nothing. The guard's own message says what it is protecting
// — "a rebuild that reuses its own number reads as a rollback in the log" —
// and that is a statement about the log, which a dry run never touches. So the
// check was refusing to answer a question it had no stake in.
//
// The cost showed up on 2026-08-09. `withScenarioAlts` was added to fourteen
// lesson sources at once and the obvious way to check that nothing broke was to
// dry-run all fourteen batches. Eleven answered. Three (a1.04, a1.05, a1.06)
// died here instead, for a reason unrelated to the question being asked, and
// verifying them meant editing their version, running, and editing it back.
//
// A validation path you cannot run at the moment you need it is the one that
// rots. Those fourteen sources had drifted for three days precisely because
// nothing routinely re-read them.
//
// Two things the dry run then told us that nobody could have seen before, both
// from batches that used to die at this line: a1.05 would author 26 NEW items,
// and a1.06 would clear its unit's themes. Neither is a rebuild-in-place, and
// both are worth knowing before bumping a version rather than after.
//
// A real run still dies. That has not changed and must not.

export type VersionGuardArgs = {
  /** The lesson this batch writes, e.g. 'a1.06.l1'. */
  lessonId: string;
  /** The version Postgres holds today, or undefined if the lesson is new. */
  prior: number | undefined;
  /** The version the authored source declares. */
  authored: number;
  /** Where to go and change it, e.g. 'etre-lesson.ts'. Named in the message
   *  because the batch and the version live in different files and the person
   *  reading this error is usually looking at the batch. */
  sourceFile: string;
  dryRun: boolean;
  /** The caller's own die(), so the message and exit behaviour stay that
   *  script's. Not imported here: several batches close a pool or print a
   *  trailer first. */
  die: (message: string) => never;
};

/**
 * Refuse a write that would reuse or lower a version. On a dry run, say so and
 * keep going.
 *
 * Returns nothing and, on a real run with a stale version, does not return at
 * all.
 */
export function guardLessonVersion(args: VersionGuardArgs): void {
  const { lessonId, prior, authored, sourceFile, dryRun, die } = args;
  if (prior === undefined || prior < authored) return;

  const message =
    `the database already carries ${lessonId} at v${prior} and this batch is v${authored}. ` +
    `Move the version counter forward in ${sourceFile}: a rebuild that reuses its own number reads as a ` +
    `rollback in the log.`;

  if (!dryRun) die(message);

  console.log(`  ! ${message}`);
  console.log('    A dry run writes nothing, so validation continues below. Bump before applying.');
}
