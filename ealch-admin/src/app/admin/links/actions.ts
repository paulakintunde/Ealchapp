'use server';
// Link tracking mutations — create, archive/unarchive, slug collision check.
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';

type ActionResult = { ok: true } | { ok: false; error: string };

function fail(e: unknown): { ok: false; error: string } {
  return { ok: false, error: e instanceof Error ? e.message : 'Something went wrong' };
}

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type LinkChannel = (typeof schema.linkChannel.enumValues)[number];

/** Collision check used by the create-link modal on blur/submit. */
export async function checkSlug(slug: string): Promise<{ taken: boolean }> {
  const session = await auth();
  assertCan(session?.user.role, 'links.read');
  const clean = slug.trim().toLowerCase();
  if (!SLUG_RE.test(clean)) return { taken: false };
  const d = await db();
  const [existing] = await d
    .select({ id: schema.trackedLinks.id })
    .from(schema.trackedLinks)
    .where(eq(schema.trackedLinks.slug, clean))
    .limit(1);
  return { taken: Boolean(existing) };
}

export async function createLink(input: {
  slug: string;
  destinationUrl: string;
  campaign: string;
  channel: LinkChannel;
}): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'links.write');

    const slug = input.slug.trim().toLowerCase();
    if (!SLUG_RE.test(slug)) {
      return { ok: false, error: 'Slug must be lowercase letters, digits and dashes' };
    }
    let url: URL;
    try {
      url = new URL(input.destinationUrl.trim());
    } catch {
      return { ok: false, error: 'Destination must be a valid URL' };
    }
    if (url.protocol !== 'https:') {
      return { ok: false, error: 'Destination must use https://' };
    }
    if (!schema.linkChannel.enumValues.includes(input.channel)) {
      return { ok: false, error: 'Unknown channel' };
    }

    const d = await db();
    const [existing] = await d
      .select({ id: schema.trackedLinks.id })
      .from(schema.trackedLinks)
      .where(eq(schema.trackedLinks.slug, slug))
      .limit(1);
    if (existing) return { ok: false, error: 'Slug taken' };

    const campaign = input.campaign.trim() || null;
    await d.insert(schema.trackedLinks).values({
      slug,
      destinationUrl: url.toString(),
      campaign,
      channel: input.channel,
      createdBy: session!.user.id,
    });

    await audit({
      adminId: session!.user.id,
      action: 'link.create',
      entityType: 'tracked_link',
      entityId: slug,
      after: { slug, destinationUrl: url.toString(), campaign, channel: input.channel },
    });
    revalidatePath('/admin/links');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

export async function setLinkArchived(id: string, archived: boolean): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'links.write');

    const d = await db();
    const [before] = await d
      .select()
      .from(schema.trackedLinks)
      .where(eq(schema.trackedLinks.id, id))
      .limit(1);
    if (!before) return { ok: false, error: 'Link not found' };

    await d
      .update(schema.trackedLinks)
      .set({ archived })
      .where(eq(schema.trackedLinks.id, id));

    await audit({
      adminId: session!.user.id,
      action: archived ? 'link.archive' : 'link.unarchive',
      entityType: 'tracked_link',
      entityId: before.slug,
      before: { archived: before.archived },
      after: { archived },
    });
    revalidatePath('/admin/links');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}
