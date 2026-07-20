'use server';
// Exam task mutations — the first-ever write path for content_exam_tasks.
// Same auth → assertCan → mutate → audit → revalidate shape as ../items/actions.ts.
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';
import {
  examTaskId, examTaskSkill, isValidVariant, OPEN_TASK_TYPES,
  type ExamFormat, type ExamScoreBand, type ExamTaskType,
} from './meta';

type ActionResult = { ok: true } | { ok: false; error: string };
type CreateResult = { ok: true; id: string } | { ok: false; error: string };
function fail(e: unknown): { ok: false; error: string } {
  return { ok: false, error: e instanceof Error ? e.message : 'Something went wrong' };
}

const LIST_PATH = '/admin/content/exams';

export interface ExamTaskInput {
  prompt: string;
  formatVersion: string;
  timingS: number;
  // Closed task types (co_mcq/ce_mcq)
  itemsJson: string; // QcmItem[] as JSON text — kept as text so a malformed edit fails loudly, not silently
  // Open task types — both required together
  rubricJson: string; // Rubric as JSON text
  modelAnswer: string;
  examinerNotes: string[];
  // Closed task types only — see validateOpenClosed and validateExamTask.
  targetItemIds: string[];
}

function validateOpenClosed(taskType: ExamTaskType, input: ExamTaskInput): string | null {
  if (OPEN_TASK_TYPES.has(taskType)) {
    if (!input.rubricJson.trim() || !input.modelAnswer.trim()) {
      return 'Open task types require both a rubric and a model answer';
    }
  }
  return null;
}

function parseJsonField(text: string, label: string): { ok: true; value: unknown } | { ok: false; error: string } {
  if (!text.trim()) return { ok: true, value: undefined };
  try {
    return { ok: true, value: JSON.parse(text) };
  } catch {
    return { ok: false, error: `${label} is not valid JSON` };
  }
}

export async function createExamTask(input: {
  format: string; variant: string; taskType: string; level: string;
}): Promise<CreateResult> {
  let newId: string;
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const adminId = session!.user.id;

    if (!isValidVariant(input.variant)) return { ok: false, error: 'Variant must be lowercase letters, digits and hyphens' };
    const d = await db();

    const existing = await d
      .select({ id: schema.contentExamTasks.id })
      .from(schema.contentExamTasks);
    const prefix = `exam.${input.format}.${input.variant}.${input.taskType}.`;
    const seqs = existing
      .filter((r) => r.id.startsWith(prefix))
      .map((r) => Number(r.id.slice(prefix.length)))
      .filter((n) => Number.isFinite(n));
    const nextSeq = (seqs.length ? Math.max(...seqs) : 0) + 1;
    const id = examTaskId(input.format, input.variant, input.taskType, nextSeq);

    await d.insert(schema.contentExamTasks).values({
      id,
      format: input.format as ExamFormat,
      variant: input.variant,
      taskType: input.taskType as ExamTaskType,
      skill: examTaskSkill(input.taskType as ExamTaskType),
      level: input.level as ExamScoreBand,
      formatVersion: '',
      prompt: '',
      timingS: 60,
      status: 'draft',
      generatedBy: 'human',
    });

    await audit({ adminId, action: 'exams.create', entityType: 'content_exam_task', entityId: id, after: input });
    revalidatePath(LIST_PATH);
    newId = id;
  } catch (e) {
    return fail(e);
  }
  redirect(`${LIST_PATH}/${newId}`);
}

export async function saveExamTask(id: string, input: ExamTaskInput): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();

    const [before] = await d.select().from(schema.contentExamTasks).where(eq(schema.contentExamTasks.id, id)).limit(1);
    if (!before) return { ok: false, error: 'Exam task not found' };

    const err = validateOpenClosed(before.taskType, input);
    if (err) return { ok: false, error: err };

    const items = parseJsonField(input.itemsJson, 'Items');
    if (!items.ok) return items;
    const rubric = parseJsonField(input.rubricJson, 'Rubric');
    if (!rubric.ok) return rubric;

    await d
      .update(schema.contentExamTasks)
      .set({
        prompt: input.prompt.trim(),
        formatVersion: input.formatVersion.trim(),
        timingS: input.timingS,
        items: items.value ?? null,
        rubric: rubric.value ?? null,
        modelAnswer: input.modelAnswer.trim() || null,
        examinerNotes: input.examinerNotes.filter(Boolean),
        targetItemIds: input.targetItemIds.filter(Boolean),
        updatedAt: new Date(),
      })
      .where(eq(schema.contentExamTasks.id, id));

    await audit({
      adminId: session!.user.id, action: 'exams.save', entityType: 'content_exam_task', entityId: id,
      before: { prompt: before.prompt }, after: { prompt: input.prompt },
    });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${id}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

function reviewReadiness(t: { prompt: string; formatVersion: string; taskType: ExamTaskType; rubric: unknown; modelAnswer: string | null }): string | null {
  if (!t.prompt.trim()) return 'prompt is required before review';
  if (!t.formatVersion.trim()) return 'formatVersion is required before review';
  if (OPEN_TASK_TYPES.has(t.taskType) && (!t.rubric || !t.modelAnswer)) {
    return 'Open task types need a rubric and a model answer before review';
  }
  return null;
}

export async function submitExamForReview(id: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();
    const [t] = await d.select().from(schema.contentExamTasks).where(eq(schema.contentExamTasks.id, id)).limit(1);
    if (!t) return { ok: false, error: 'Exam task not found' };
    if (t.status !== 'draft') return { ok: false, error: 'Only drafts can be submitted for review' };
    const err = reviewReadiness(t);
    if (err) return { ok: false, error: err };

    await d.update(schema.contentExamTasks).set({ status: 'in_review', updatedAt: new Date() }).where(eq(schema.contentExamTasks.id, id));
    await audit({ adminId: session!.user.id, action: 'exams.submit_review', entityType: 'content_exam_task', entityId: id, before: { status: 'draft' }, after: { status: 'in_review' } });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${id}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

export async function publishExamTask(id: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.publish');
    const adminId = session!.user.id;
    const d = await db();
    const [t] = await d.select().from(schema.contentExamTasks).where(eq(schema.contentExamTasks.id, id)).limit(1);
    if (!t) return { ok: false, error: 'Exam task not found' };
    if (t.status !== 'in_review') return { ok: false, error: 'Only tasks in review can be published' };

    await d
      .update(schema.contentExamTasks)
      .set({ status: 'published', publishedAt: new Date(), updatedAt: new Date(), reviewedBy: adminId, reviewedAt: new Date() })
      .where(eq(schema.contentExamTasks.id, id));
    await audit({ adminId, action: 'exams.publish', entityType: 'content_exam_task', entityId: id, before: { status: 'in_review' }, after: { status: 'published' } });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${id}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

export async function archiveExamTask(id: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();
    const [t] = await d.select().from(schema.contentExamTasks).where(eq(schema.contentExamTasks.id, id)).limit(1);
    if (!t) return { ok: false, error: 'Exam task not found' };
    if (t.status !== 'published') return { ok: false, error: 'Only published tasks can be archived' };

    await d.update(schema.contentExamTasks).set({ status: 'archived', updatedAt: new Date() }).where(eq(schema.contentExamTasks.id, id));
    await audit({ adminId: session!.user.id, action: 'exams.archive', entityType: 'content_exam_task', entityId: id, before: { status: 'published' }, after: { status: 'archived' } });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${id}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}
