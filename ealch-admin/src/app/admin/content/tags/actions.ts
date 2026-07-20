'use server';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';

type ActionResult = { ok: true } | { ok: false; error: string };
function fail(e: unknown): { ok: false; error: string } {
  return { ok: false, error: e instanceof Error ? e.message : 'Something went wrong' };
}

const SLUG_RE = /^[a-z0-9-]+$/;

export async function createTag(input: { slug: string; label: string; weakSkill: string }): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const slug = input.slug.trim().toLowerCase();
    const label = input.label.trim();
    if (!SLUG_RE.test(slug)) return { ok: false, error: 'Slug must be lowercase letters, digits and hyphens' };
    if (!label) return { ok: false, error: 'Label is required' };

    const d = await db();
    await d.insert(schema.contentTags).values({ slug, label, weakSkill: input.weakSkill.trim() || null });
    await audit({ adminId: session!.user.id, action: 'tags.create', entityType: 'content_tag', entityId: slug, after: { slug, label } });
    revalidatePath('/admin/content/tags');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}
