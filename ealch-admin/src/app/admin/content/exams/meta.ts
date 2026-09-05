// Exams slice — value lists derived from the live Drizzle enums, same
// "exhaustive by construction" pattern as ../items/meta.ts.
import type { contentStatus, examFormat, examTaskType, examSkill, userLevel } from '@/db/schema';

export type ExamFormat = (typeof examFormat)['enumValues'][number];
export type ExamTaskType = (typeof examTaskType)['enumValues'][number];
export type ExamSkill = (typeof examSkill)['enumValues'][number];
export type ExamScoreBand = (typeof userLevel)['enumValues'][number];
export type ExamStatus = (typeof contentStatus)['enumValues'][number];

export const EXAM_FORMATS: ExamFormat[] = ['delf_b2', 'tef_canada', 'tcf_canada'];
export const EXAM_TASK_TYPES: ExamTaskType[] = ['co_mcq', 'ce_mcq', 'po_monologue', 'po_interaction', 'pe_short', 'pe_essay'];
export const EXAM_SKILLS: ExamSkill[] = ['CO', 'CE', 'PO', 'PE'];
export const EXAM_SCORE_BANDS: ExamScoreBand[] = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
export const EXAM_STATUSES: ExamStatus[] = ['draft', 'in_review', 'published', 'archived'];

export const EXAM_STATUS_META: Record<ExamStatus, { label: string; color: string }> = {
  draft: { label: 'Draft', color: 'var(--mut)' },
  in_review: { label: 'In review', color: 'var(--warn)' },
  published: { label: 'Published', color: 'var(--ok)' },
  archived: { label: 'Archived', color: 'var(--mut)' },
};

/** taskType → skill. Mirrors examTaskSkill() in ealch-v2/src/content/schema.ts
 *  — the single place this correspondence is encoded on this side too. */
export function examTaskSkill(taskType: ExamTaskType): ExamSkill {
  switch (taskType) {
    case 'co_mcq':
      return 'CO';
    case 'ce_mcq':
      return 'CE';
    case 'po_monologue':
    case 'po_interaction':
      return 'PO';
    case 'pe_short':
    case 'pe_essay':
      return 'PE';
  }
}

/** co_mcq/ce_mcq are machine-markable; the rest need a rubric — see the note
 *  on the CLOSED_TASK_TYPES/OPEN_TASK_TYPES split in ealch-v2's schema.ts. */
export const OPEN_TASK_TYPES = new Set<ExamTaskType>(['po_monologue', 'po_interaction', 'pe_short', 'pe_essay']);

export function examTaskId(format: string, variant: string, taskType: string, seq: number): string {
  return `exam.${format}.${variant}.${taskType}.${String(seq).padStart(3, '0')}`;
}
export function examPaperId(format: string, variant: string, paperNo: number): string {
  return `paper.${format}.${variant}.${paperNo}`;
}

const SLUG_RE = /^[a-z0-9-]+$/;
export function isValidVariant(v: string): boolean {
  return SLUG_RE.test(v);
}
