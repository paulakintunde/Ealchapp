// Choosing a subject inside an épreuve (DALF C1 Production orale: two subjects
// drawn, one chosen, each an exposé then its entretien). Pure, no React.
//
// A section with `choiceGroups` is sat ONE group at a time: the section screen
// shows the groups, the candidate picks one before the clock starts, and only
// that group's tasks are pinned, sat, logged and graded. The groups not chosen
// leave no result at all, so the report reads the épreuve off the chosen pair
// exactly as it reads an ordinary section (sectionStatusFor / sectionBands only
// look at results that exist).
import type { ExamSection, ExamTask } from '../content/schema.ts';

/** True when the candidate must choose before sitting this section. */
export function needsChoice(section: Pick<ExamSection, 'choiceGroups'> | null): boolean {
  return !!section?.choiceGroups && section.choiceGroups.length > 1;
}

/** The tasks the candidate sits: all of them, or the chosen group's, in order.
 *  A section that needs a choice and has none yet sits nothing. */
export function tasksToSit(
  section: Pick<ExamSection, 'choiceGroups'> | null,
  tasks: readonly ExamTask[],
  choice: number | null
): ExamTask[] {
  if (!needsChoice(section)) return [...tasks];
  const group = choice === null ? undefined : section!.choiceGroups![choice];
  if (!group) return [];
  const want = new Set(group);
  return tasks.filter((t) => want.has(t.id));
}

/** How many tasks a candidate actually sits in this section (the exam card's
 *  count): one group's size when there is a choice. */
export function sittableCount(section: Pick<ExamSection, 'choiceGroups' | 'taskIds'>): number {
  return needsChoice(section) ? section.choiceGroups![0]!.length : section.taskIds.length;
}

/** What each option shows: the first task of the group (the exposé), whose
 *  prompt carries the subject. Groups whose first task has not resolved yet are
 *  returned with a null task and drawn as unavailable. */
export function choiceOptions(
  section: Pick<ExamSection, 'choiceGroups'>,
  tasks: readonly ExamTask[]
): { index: number; lead: ExamTask | null }[] {
  const byId = new Map(tasks.map((t) => [t.id, t]));
  return (section.choiceGroups ?? []).map((g, index) => ({ index, lead: byId.get(g[0]!) ?? null }));
}
