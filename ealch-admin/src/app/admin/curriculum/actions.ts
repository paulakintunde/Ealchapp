'use server';
// Curriculum catalogue mutations — content_domains/content_themes. Small
// reference tables (15 domains, 108 themes at full scope per the locked
// THEME-CATALOGUE-AND-ARCHITECTURE.md catalogue), so plain create/update,
// no draft/review/publish workflow: a domain or theme just exists or
// doesn't, the same reasoning the schema comment gives for the table shape.
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';
import type { contentLevel } from '@/db/schema';

type ContentLevel = (typeof contentLevel)['enumValues'][number];

type ActionResult = { ok: true } | { ok: false; error: string };
function fail(e: unknown): { ok: false; error: string } {
  return { ok: false, error: e instanceof Error ? e.message : 'Something went wrong' };
}

const LIST_PATH = '/admin/curriculum';
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const LEVELS = ['sons', 'a1', 'a2', 'b1', 'b2', 'c1'];

export async function createDomain(input: { slug: string; title: string; order: number }): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const slug = input.slug.trim().toLowerCase();
    const title = input.title.trim();
    if (!SLUG_RE.test(slug)) return { ok: false, error: 'Slug must be lowercase letters, digits and hyphens' };
    if (!title) return { ok: false, error: 'Title is required' };
    const d = await db();
    await d.insert(schema.contentDomains).values({ slug, title, order: input.order });
    await audit({ adminId: session!.user.id, action: 'curriculum.create_domain', entityType: 'content_domain', entityId: slug, after: { slug, title, order: input.order } });
    revalidatePath(LIST_PATH);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

export async function createTheme(input: {
  slug: string; title: string; domain: string; levelRangeLo: string; levelRangeHi: string;
  examFlag: boolean; immigFlag: boolean; subThemes: string[];
}): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const slug = input.slug.trim().toLowerCase();
    const title = input.title.trim();
    if (!SLUG_RE.test(slug)) return { ok: false, error: 'Slug must be lowercase letters, digits and hyphens' };
    if (!title) return { ok: false, error: 'Title is required' };
    if (!(LEVELS as string[]).includes(input.levelRangeLo) || !(LEVELS as string[]).includes(input.levelRangeHi)) {
      return { ok: false, error: 'Invalid level range' };
    }
    if (LEVELS.indexOf(input.levelRangeLo) > LEVELS.indexOf(input.levelRangeHi)) {
      return { ok: false, error: 'levelRange is inverted — lo must come before hi' };
    }
    const d = await db();
    const [domainRow] = await d.select().from(schema.contentDomains).where(eq(schema.contentDomains.slug, input.domain)).limit(1);
    if (!domainRow) return { ok: false, error: `Unknown domain "${input.domain}"` };

    const levelRangeLo = input.levelRangeLo as ContentLevel;
    const levelRangeHi = input.levelRangeHi as ContentLevel;
    await d.insert(schema.contentThemes).values({
      slug,
      title,
      domain: input.domain,
      levelRangeLo,
      levelRangeHi,
      examFlag: input.examFlag,
      immigFlag: input.immigFlag,
      subThemes: input.subThemes,
    });
    await audit({ adminId: session!.user.id, action: 'curriculum.create_theme', entityType: 'content_theme', entityId: slug, after: input });
    revalidatePath(LIST_PATH);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}
