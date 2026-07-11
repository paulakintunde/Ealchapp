// Server-side reads shared by the RSC page and the polling API route,
// so both return identical shapes/ordering.
import 'server-only';
import { desc, sql } from 'drizzle-orm';
import { db, schema } from '@/db';
import type { CampaignDTO, Segment, TemplateDTO } from './types';

/** All campaigns, newest first (no created_at column — schedule/send time
 *  descending, with unscheduled drafts/immediate sends on top). */
export async function listCampaigns(): Promise<CampaignDTO[]> {
  const d = await db();
  const rows = await d
    .select()
    .from(schema.notifCampaigns)
    .orderBy(sql`${schema.notifCampaigns.scheduleAt} desc nulls first`, schema.notifCampaigns.name);
  return rows.map((c) => ({
    id: c.id,
    name: c.name,
    status: c.status,
    segment: (c.segment ?? null) as Partial<Segment> | null,
    scheduleAt: c.scheduleAt ? c.scheduleAt.toISOString() : null,
    sentCount: c.sentCount,
    openRate: c.openRate,
  }));
}

/** Template library, most recently updated first. */
export async function listTemplates(): Promise<TemplateDTO[]> {
  const d = await db();
  const rows = await d
    .select()
    .from(schema.notifTemplates)
    .orderBy(desc(schema.notifTemplates.updatedAt));
  return rows.map((t) => ({
    id: t.id,
    name: t.name,
    locale: t.locale,
    title: t.title,
    body: t.body,
    deeplink: t.deeplink,
  }));
}
