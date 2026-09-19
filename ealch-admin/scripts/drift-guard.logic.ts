// THE NO-SILENT-REGRESSION RULE, generalized.
//
// This rule lived inline in `publish-content.ts:614-633` as a single block
// wired directly into `main()`, gated behind a mandatory `DATABASE_URL`. That
// meant PUBLISH was the only thing that knew it, and nothing about it could
// be tested without a live Postgres connection.
//
// It also watched `lessons` only. On 2026-07-31, a publish overwrote
// seed-direct work from older DB rows: `sons.03.l1` collapsed from 20
// sections to 6, and `overview` silently vanished on sons.01/02/03, a1.04 and
// a2.01. The guard added afterwards caught the DELETE/REVERT shape for
// lessons, but a same-version section collapse and an overview erasure at ANY
// version relation could both still get through — and units, scenarios,
// playlists and speak stages were never watched at all.
//
// This module is that whole surface, made pure and testable:
//
//   - findVersionedLosses — DELETE/REVERT/same-version-shrink, for any kind
//     carrying a body-embedded `version` (lessons, scenarios, playlists,
//     speak stages).
//   - findUnitLosses — units carry NO version, so the only loss-shaped
//     signal is the lesson roster, and it must not false-positive on the
//     publisher's own legitimate lesson pruning (step 2).
//   - findPresenceLosses — fields that can vanish without moving any version
//     or count, the blind spot that let the 2026-07-31 overview collapse
//     through.
//
// Deliberately LOSS-ONLY and DIRECTIONAL. A DB ahead of git — the normal flow
// of new content — must never block, so these functions compare losses and
// never equality. A CHANGED value is an edit, not a loss.
//
// This phase adds no bypass flag. If one is ever added, it must log the
// specific kind+id it overrides rather than being a blanket switch — a
// blanket bypass is how a guard like this stops meaning anything.

import type { Unit } from '../../ealch-v2/src/content/schema.ts';

/** A single detected loss, ready to be grouped and printed by the CLI. */
export type DriftLoss = {
  /** Human label for the content kind, used verbatim in the CLI's grouped
   *  error output: 'lesson' | 'unit' | 'scenario' | 'playlist' | 'speak stage'. */
  kind: string;
  id: string;
  message: string;
};

/** Losses for any kind carrying a body-embedded `version`.
 *  Blocks on DELETE (gone from the DB) and REVERT (DB at a lower version).
 *  `signals` are structural richness counts compared ONLY at EQUAL version —
 *  a higher DB version is allowed to trim, a same-version DB that shrank is
 *  the 2026-08-09 scenario-alts shape and is a loss. */
export function findVersionedLosses<T extends { id: string; version: number }>(args: {
  kind: string;
  committed: T[] | null | undefined;
  live: Map<string, T>;
  describe: (t: T) => string;
  signals?: { label: string; of: (t: T) => number }[];
}): DriftLoss[] {
  const { kind, committed, live, describe, signals } = args;
  if (!committed) return [];

  const losses: DriftLoss[] = [];

  for (const git of committed) {
    const db = live.get(git.id);

    if (!db) {
      losses.push({
        kind,
        id: git.id,
        message: `${git.id}: in the committed seed (${describe(git)}) but NOT published in the DB — this publish would DELETE it`,
      });
      continue;
    }

    if (db.version < git.version) {
      losses.push({
        kind,
        id: git.id,
        message: `${git.id}: DB is v${db.version}, committed seed is v${git.version} — this publish would REVERT it`,
      });
      continue;
    }

    if (db.version === git.version && signals) {
      for (const { label, of } of signals) {
        const dbCount = of(db);
        const gitCount = of(git);
        if (dbCount < gitCount) {
          losses.push({
            kind,
            id: git.id,
            message: `${git.id}: same version (v${git.version}) but the DB has FEWER ${label} (${dbCount} vs ${gitCount}) — this publish would LOSE them`,
          });
        }
      }
    }
  }

  return losses;
}

/** Units have NO version field (schema.ts:1713-1747), so the only loss-shaped
 *  signal is the lesson roster — and it must NOT false-positive on step 2's
 *  legitimate prune. A committed lessonId missing from the DB unit is only a
 *  loss when that lesson is STILL PUBLISHED: if the lesson left the published
 *  set, the prune is correct and the lesson-level comparator already reports
 *  the lesson itself. */
export function findUnitLosses(args: {
  committed: Unit[] | null | undefined;
  livePruned: Map<string, Unit>;
  livePublishedLessonIds: Set<string>;
}): DriftLoss[] {
  const { committed, livePruned, livePublishedLessonIds } = args;
  if (!committed) return [];

  const losses: DriftLoss[] = [];

  for (const git of committed) {
    const db = livePruned.get(git.id);

    if (!db) {
      losses.push({
        kind: 'unit',
        id: git.id,
        message: `${git.id}: in the committed seed (${(git.lessonIds ?? []).length} lesson(s)) but NOT published in the DB — this publish would DELETE it`,
      });
      continue;
    }

    const dbIds = new Set(db.lessonIds ?? []);
    const dropped = (git.lessonIds ?? []).filter((id) => !dbIds.has(id) && livePublishedLessonIds.has(id));

    if (dropped.length) {
      losses.push({
        kind: 'unit',
        id: git.id,
        message: `${git.id}: lessonIds — the committed seed lists ${dropped.join(', ')}, still published but no longer on this unit in the DB — this publish would DROP ${dropped.length === 1 ? 'it' : 'them'} from the unit`,
      });
    }
    // Lesson ids dropped that are NOT in livePublishedLessonIds are the
    // expected step-2 prune and must produce nothing — not even a warning.
  }

  return losses;
}

/** Fields that can vanish without moving any version or count — the blind spot
 *  that let the 2026-07-31 overview collapse through. Checked at ANY version
 *  relation, because a DB that is version-ahead can still be missing a field
 *  git has. Presence only, never equality: a CHANGED value is an edit, not a
 *  loss, and blocking on edits is the false-positive failure this guard exists
 *  to avoid.
 *
 *  Direction warning: `restore-lesson-bodies-from-seed.ts:283-284` checks
 *  `db.overview && !git.overview` because it is guarding a RESTORE (git ->
 *  DB). This function guards a PUBLISH (DB -> git), so the test inverts to
 *  `git has it, db does not`. Copying the recovery script's condition
 *  verbatim would produce a check that is exactly backwards and would never
 *  fire on the 2026-07-31 shape. */
export function findPresenceLosses<T extends { id: string }>(args: {
  kind: string;
  committed: T[] | null | undefined;
  live: Map<string, T>;
  fields: { label: string; present: (t: T) => boolean }[];
}): DriftLoss[] {
  const { kind, committed, live, fields } = args;
  if (!committed) return [];

  const losses: DriftLoss[] = [];

  for (const git of committed) {
    const db = live.get(git.id);
    if (!db) continue; // deletion is the versioned/unit comparator's job — do not double-report.

    for (const { label, present } of fields) {
      if (present(git) && !present(db)) {
        losses.push({
          kind,
          id: git.id,
          message: `${git.id}: the committed seed has ${label} and the DB does not — this publish would ERASE it`,
        });
      }
    }
  }

  return losses;
}
