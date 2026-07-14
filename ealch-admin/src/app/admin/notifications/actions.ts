'use server';
// Notifications mutations — campaign create/pause/resume + template CRUD.
// Every action: auth → assertCan('notifications.write') → mutate → audit →
// revalidate. Errors are returned as {ok:false,error}, never thrown raw.
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';
import { publish } from '@/lib/bus';
import { compact } from '@/lib/format';
import type { Segment, SegmentLevel, SegmentLocale } from './types';

type ActionResult = { ok: true; id?: string } | { ok: false; error: string };

const ROUTE = '/admin/notifications';
const LEVELS: readonly string[] = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
const PLANS: readonly string[] = ['all', 'free', 'plus', 'pro'];
const LOCALES: readonly string[] = ['en', 'fr'];

async function requireWriter(): Promise<{ id: string; name: string }> {
  const session = await auth();
  const user = session?.user;
  assertCan(user?.role, 'notifications.write');
  if (!user) throw new Error('Unauthorized'); // unreachable — assertCan throws first
  return { id: user.id, name: user.name };
}

function errMsg(e: unknown): string {
  return e instanceof Error ? e.message : 'Something went wrong';
}

/** Coerce an untrusted segment payload into the canonical stored shape. */
function sanitizeSegment(seg: Partial<Segment> | null | undefined): Segment {
  const level = seg?.level && LEVELS.includes(seg.level) ? (seg.level as SegmentLevel) : null;
  const plan = seg?.plan && PLANS.includes(seg.plan) ? seg.plan : 'all';
  const lastSeenDays = seg?.lastSeenDays === 7 || seg?.lastSeenDays === 30 ? seg.lastSeenDays : null;
  const locale = seg?.locale && LOCALES.includes(seg.locale) ? (seg.locale as SegmentLocale) : null;
  const estimate =
    typeof seg?.estimate === 'number' && Number.isFinite(seg.estimate) && seg.estimate > 0
      ? Math.floor(seg.estimate)
      : undefined;
  return { level, plan, lastSeenDays, locale, ...(estimate !== undefined ? { estimate } : {}) };
}

// ── Campaigns ───────────────────────────────────────────────────────────────

export async function createCampaign(input: {
  title: string;
  body: string;
  deeplink?: string | null;
  templateId?: string | null;
  segment: Partial<Segment>;
  mode: 'now' | 'schedule' | 'optimal';
  scheduleAt?: string | null;
}): Promise<ActionResult> {
  try {
    const admin = await requireWriter();
    const title = input.title.trim();
    const body = input.body.trim();
    if (!title) return { ok: false, error: 'Title is required' };
    if (!body) return { ok: false, error: 'Message is required' };
    if (title.length > 80) return { ok: false, error: 'Title must be 80 characters or fewer' };
    if (body.length > 240) return { ok: false, error: 'Message must be 240 characters or fewer' };

    let scheduleAt = new Date(); // 'now'/'optimal' record their send time for ordering
    let status: 'sending' | 'scheduled' = 'sending';
    if (input.mode === 'schedule') {
      const when = input.scheduleAt ? new Date(input.scheduleAt) : null;
      if (!when || Number.isNaN(when.getTime())) {
        return { ok: false, error: 'Pick a valid schedule time' };
      }
      scheduleAt = when;
      status = 'scheduled';
    }

    const segment = sanitizeSegment(input.segment);
    const d = await db();
    const [row] = await d
      .insert(schema.notifCampaigns)
      .values({
        name: title,
        segment,
        scheduleAt,
        status,
        templateId: input.templateId || null,
        createdBy: admin.id,
      })
      .returning({ id: schema.notifCampaigns.id });

    await audit({
      adminId: admin.id,
      action: 'notification.campaign_create',
      entityType: 'notif_campaign',
      entityId: row.id,
      after: { name: title, status, segment, scheduleAt: scheduleAt.toISOString(), mode: input.mode },
    });

    const reach = segment.estimate ? `${compact(segment.estimate)} devices` : 'segment';
    publish({ type: 'system', text: `Push "${title}" queued to ${reach}` });

    revalidatePath(ROUTE);
    return { ok: true, id: row.id };
  } catch (e) {
    return { ok: false, error: errMsg(e) };
  }
}

export async function pauseCampaign(id: string): Promise<ActionResult> {
  try {
    const admin = await requireWriter();
    const d = await db();
    const [before] = await d
      .select()
      .from(schema.notifCampaigns)
      .where(eq(schema.notifCampaigns.id, id))
      .limit(1);
    if (!before) return { ok: false, error: 'Campaign not found' };
    if (before.status !== 'scheduled' && before.status !== 'sending') {
      return { ok: false, error: `Cannot pause a ${before.status} campaign` };
    }

    await d
      .update(schema.notifCampaigns)
      .set({ status: 'paused' })
      .where(eq(schema.notifCampaigns.id, id));

    await audit({
      adminId: admin.id,
      action: 'notification.campaign_pause',
      entityType: 'notif_campaign',
      entityId: id,
      before: { status: before.status },
      after: { status: 'paused' },
    });

    revalidatePath(ROUTE);
    return { ok: true, id };
  } catch (e) {
    return { ok: false, error: errMsg(e) };
  }
}

export async function resumeCampaign(id: string): Promise<ActionResult> {
  try {
    const admin = await requireWriter();
    const d = await db();
    const [before] = await d
      .select()
      .from(schema.notifCampaigns)
      .where(eq(schema.notifCampaigns.id, id))
      .limit(1);
    if (!before) return { ok: false, error: 'Campaign not found' };
    if (before.status !== 'paused') {
      return { ok: false, error: `Cannot resume a ${before.status} campaign` };
    }

    // Future schedule → back to scheduled; otherwise the queue picks it up now.
    const next =
      before.scheduleAt && before.scheduleAt.getTime() > Date.now() ? 'scheduled' : 'sending';
    await d
      .update(schema.notifCampaigns)
      .set({ status: next })
      .where(eq(schema.notifCampaigns.id, id));

    await audit({
      adminId: admin.id,
      action: 'notification.campaign_resume',
      entityType: 'notif_campaign',
      entityId: id,
      before: { status: 'paused' },
      after: { status: next },
    });

    revalidatePath(ROUTE);
    return { ok: true, id };
  } catch (e) {
    return { ok: false, error: errMsg(e) };
  }
}

// ── Templates ───────────────────────────────────────────────────────────────

interface TemplateInput {
  name: string;
  locale: 'en' | 'fr';
  title: string;
  body: string;
  deeplink?: string | null;
}

function validateTemplate(input: TemplateInput): string | null {
  if (!input.name.trim()) return 'Template name is required';
  if (!input.title.trim()) return 'Title is required';
  if (!input.body.trim()) return 'Body is required';
  if (input.locale !== 'en' && input.locale !== 'fr') return 'Locale must be EN or FR';
  return null;
}

export async function createTemplate(input: TemplateInput): Promise<ActionResult> {
  try {
    const admin = await requireWriter();
    const invalid = validateTemplate(input);
    if (invalid) return { ok: false, error: invalid };

    const d = await db();
    const values = {
      name: input.name.trim(),
      locale: input.locale,
      title: input.title.trim(),
      body: input.body.trim(),
      deeplink: input.deeplink?.trim() || null,
      createdBy: admin.id,
      updatedAt: new Date(),
    };
    const [row] = await d
      .insert(schema.notifTemplates)
      .values(values)
      .returning({ id: schema.notifTemplates.id });

    await audit({
      adminId: admin.id,
      action: 'notification.template_create',
      entityType: 'notif_template',
      entityId: row.id,
      after: values,
    });

    revalidatePath(ROUTE);
    return { ok: true, id: row.id };
  } catch (e) {
    return { ok: false, error: errMsg(e) };
  }
}

export async function updateTemplate(id: string, input: TemplateInput): Promise<ActionResult> {
  try {
    const admin = await requireWriter();
    const invalid = validateTemplate(input);
    if (invalid) return { ok: false, error: invalid };

    const d = await db();
    const [before] = await d
      .select()
      .from(schema.notifTemplates)
      .where(eq(schema.notifTemplates.id, id))
      .limit(1);
    if (!before) return { ok: false, error: 'Template not found' };

    const values = {
      name: input.name.trim(),
      locale: input.locale,
      title: input.title.trim(),
      body: input.body.trim(),
      deeplink: input.deeplink?.trim() || null,
      updatedAt: new Date(),
    };
    await d.update(schema.notifTemplates).set(values).where(eq(schema.notifTemplates.id, id));

    await audit({
      adminId: admin.id,
      action: 'notification.template_update',
      entityType: 'notif_template',
      entityId: id,
      before: {
        name: before.name, locale: before.locale, title: before.title,
        body: before.body, deeplink: before.deeplink,
      },
      after: values,
    });

    revalidatePath(ROUTE);
    return { ok: true, id };
  } catch (e) {
    return { ok: false, error: errMsg(e) };
  }
}

export async function deleteTemplate(id: string): Promise<ActionResult> {
  try {
    const admin = await requireWriter();
    const d = await db();
    const [before] = await d
      .select()
      .from(schema.notifTemplates)
      .where(eq(schema.notifTemplates.id, id))
      .limit(1);
    if (!before) return { ok: false, error: 'Template not found' };

    // Campaigns keep their history — detach the FK before deleting.
    await d
      .update(schema.notifCampaigns)
      .set({ templateId: null })
      .where(eq(schema.notifCampaigns.templateId, id));
    await d.delete(schema.notifTemplates).where(eq(schema.notifTemplates.id, id));

    await audit({
      adminId: admin.id,
      action: 'notification.template_delete',
      entityType: 'notif_template',
      entityId: id,
      before: {
        name: before.name, locale: before.locale, title: before.title,
        body: before.body, deeplink: before.deeplink,
      },
    });

    revalidatePath(ROUTE);
    return { ok: true, id };
  } catch (e) {
    return { ok: false, error: errMsg(e) };
  }
}
