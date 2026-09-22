// The sitting pin — pure arithmetic, no React, no store reads.
//
// ── D-05 (phase 22.1): a sitting finishes on the versions it started on ────
//
// Bundling exam papers in the seed (phase 22.1) means the OTA snapshot can now
// supersede a bundled paper or task BY ID (mergeCorpus, content.logic.ts:76-77)
// while a candidate has a section screen mounted mid-sitting. Without this pin,
// exam-section.tsx's `tasks` memo — which reads the live corpus on purpose, see
// below — would swap what the candidate is answering, and what submit() grades,
// out from under them.
//
// The obvious "fix" is to strip `corpus` out of that memo's dependency array so
// it stops re-reading. That is wrong: examSection.logic.test.ts's regression
// test ('every exam screen that reads the corpus re-reads it when it changes')
// exists specifically because a task/paper that legitimately has not resolved
// yet at mount time — the seed/snapshot has not landed — must still resolve
// once it does. Removing the live dependency would reintroduce that exact bug
// for the life of the mounted screen.
//
// So the pin sits UNDERNEATH the live memo, not instead of it. The live memo
// keeps reading the corpus, exactly as before; THIS module takes each reading
// and freezes it, monotonically: the first non-null section is kept forever,
// and a task id in that section's roster is kept forever once it first
// resolves. A later corpus refresh can still cause the live memo to notice a
// previously-unresolved task appearing — Phase 23's submit-time hold (BUG-05)
// needs exactly that to observe a late-resolving task — but once a task has
// been pinned here, nothing can change its content or remove it for the rest
// of the mounted sitting.
//
// Phase 23's own submit-time hold should read resolution through THIS pin
// (poll `content.examTasksOfSection(pinnedSection)` and feed the result back
// through `pinSitting`) rather than inventing a second, parallel pin — see
// this plan's SUMMARY "For Phase 23" note.
import type { ExamSection, ExamTask } from '../content/schema.ts';

export type SittingPin = {
  readonly section: ExamSection;
  readonly tasks: ReadonlyMap<string, ExamTask>;
};

/**
 * Monotonic: the first non-null section is frozen; a task id in that
 * section's roster is frozen the first time it resolves; never shrinks,
 * never replaces. Returns `prev` unchanged (same reference) when nothing new
 * resolved, so a caller can use it directly as a React dep / memo input
 * without a spurious re-render.
 */
export function pinSitting(
  prev: SittingPin | null,
  liveSection: ExamSection | null,
  liveTasks: readonly ExamTask[]
): SittingPin | null {
  const section = prev?.section ?? liveSection;
  if (!section) return null;
  const roster = new Set(section.taskIds);
  let next: Map<string, ExamTask> | null = null;
  for (const t of liveTasks) {
    if (roster.has(t.id) && !prev?.tasks.has(t.id) && !next?.has(t.id)) {
      next ??= new Map(prev?.tasks ?? []);
      next.set(t.id, t);
    }
  }
  if (prev && !next) return prev;
  return { section, tasks: next ?? new Map(prev?.tasks ?? []) };
}

/** Tasks in the pinned section's `taskIds` order, skipping any id that has
 *  not resolved yet. `pinnedTasksOf(null)` is `[]`, the same empty shape the
 *  live `tasks` memo returns before a section has resolved. */
export function pinnedTasksOf(pin: SittingPin | null): ExamTask[] {
  if (!pin) return [];
  const out: ExamTask[] = [];
  for (const id of pin.section.taskIds) {
    const task = pin.tasks.get(id);
    if (task) out.push(task);
  }
  return out;
}
