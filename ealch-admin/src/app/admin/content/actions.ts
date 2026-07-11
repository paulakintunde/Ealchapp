'use server';
// Content slice mutations — create/meta/body edits, review workflow
// (draft → in_review → published → archived), flag resolution and revision
// restore. Every mutation: auth → assertCan → mutate → audit → revalidate.
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { and, eq, ne } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';
import { publish } from '@/lib/bus';
import {
  isKind, LEVELS, LOCALES,
  type ContentKind, type ContentLevel, type ContentLocale,
} from './meta';

type ActionResult = { ok: true } | { ok: false; error: string };
type PublishResult = { ok: true; version: number; title: string } | { ok: false; error: string };

function fail(e: unknown): { ok: false; error: string } {
  return { ok: false, error: e instanceof Error ? e.message : 'Something went wrong' };
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64) || 'pack';
}

const LIST_PATH = '/admin/content';

// ── Create ──────────────────────────────────────────────────────────────────

/** '+ New pack' — creates an empty draft scenario and redirects to its editor. */
export async function createUnit(): Promise<ActionResult> {
  let newId: string;
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const adminId = session!.user.id;
    const d = await db();

    const title = 'Untitled pack';
    const base = slugify(title);
    let slug = base;
    for (let i = 2; ; i++) {
      const [taken] = await d
        .select({ id: schema.contentUnits.id })
        .from(schema.contentUnits)
        .where(eq(schema.contentUnits.slug, slug))
        .limit(1);
      if (!taken) break;
      slug = `${base}-${i}`;
    }

    const [row] = await d
      .insert(schema.contentUnits)
      .values({
        slug,
        title,
        kind: 'scenario',
        level: 'a1',
        locale: 'fr',
        status: 'draft',
        body: { intro: '', sections: [] },
        version: 1,
        authorId: adminId,
      })
      .returning({ id: schema.contentUnits.id });

    await audit({
      adminId,
      action: 'content.create',
      entityType: 'content_unit',
      entityId: row.id,
      after: { slug, title, kind: 'scenario', level: 'a1', status: 'draft' },
    });
    revalidatePath(LIST_PATH);
    newId = row.id;
  } catch (e) {
    return fail(e);
  }
  redirect(`${LIST_PATH}/${newId}`);
}

// ── Review queue ────────────────────────────────────────────────────────────

export async function resolveFlag(flagId: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();

    const [flag] = await d
      .select()
      .from(schema.contentFlags)
      .where(eq(schema.contentFlags.id, flagId))
      .limit(1);
    if (!flag) return { ok: false, error: 'Flag not found' };
    if (flag.status === 'resolved') return { ok: false, error: 'Flag already resolved' };

    await d
      .update(schema.contentFlags)
      .set({ status: 'resolved' })
      .where(eq(schema.contentFlags.id, flagId));

    await audit({
      adminId: session!.user.id,
      action: 'content.flag_resolve',
      entityType: 'content_flag',
      entityId: flagId,
      before: { status: flag.status, reason: flag.reason },
      after: { status: 'resolved' },
    });
    revalidatePath(LIST_PATH);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

// ── Editor: metadata ────────────────────────────────────────────────────────

export async function updateMeta(
  unitId: string,
  input: { title: string; slug: string; kind: string; level: string; locale: string },
): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();

    const title = input.title.trim();
    const slug = input.slug.trim().toLowerCase();
    if (!title) return { ok: false, error: 'Title is required' };
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
      return { ok: false, error: 'Slug must be lowercase letters, digits and hyphens' };
    }
    if (!isKind(input.kind)) return { ok: false, error: 'Invalid kind' };
    if (!(LEVELS as string[]).includes(input.level)) return { ok: false, error: 'Invalid level' };
    if (!(LOCALES as string[]).includes(input.locale)) return { ok: false, error: 'Invalid locale' };
    const kind = input.kind as ContentKind;
    const level = input.level as ContentLevel;
    const locale = input.locale as ContentLocale;

    const [before] = await d
      .select()
      .from(schema.contentUnits)
      .where(eq(schema.contentUnits.id, unitId))
      .limit(1);
    if (!before) return { ok: false, error: 'Pack not found' };

    // Server-side slug uniqueness check (schema has a unique index too).
    const [clash] = await d
      .select({ id: schema.contentUnits.id })
      .from(schema.contentUnits)
      .where(and(eq(schema.contentUnits.slug, slug), ne(schema.contentUnits.id, unitId)))
      .limit(1);
    if (clash) return { ok: false, error: `Slug "${slug}" is already in use` };

    await d
      .update(schema.contentUnits)
      .set({ title, slug, kind, level, locale, updatedAt: new Date() })
      .where(eq(schema.contentUnits.id, unitId));

    await audit({
      adminId: session!.user.id,
      action: 'content.update_meta',
      entityType: 'content_unit',
      entityId: unitId,
      before: {
        title: before.title, slug: before.slug, kind: before.kind,
        level: before.level, locale: before.locale,
      },
      after: { title, slug, kind, level, locale },
    });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${unitId}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

// ── Editor: body / workflow ─────────────────────────────────────────────────

/** 'Save draft' — replaces the JSON body; status stays/becomes draft. */
export async function saveBody(unitId: string, bodyText: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();

    let body: unknown;
    try {
      body = JSON.parse(bodyText);
    } catch {
      return { ok: false, error: 'Body is not valid JSON' };
    }
    if (body === null || typeof body !== 'object' || Array.isArray(body)) {
      return { ok: false, error: 'Body must be a JSON object' };
    }

    const [before] = await d
      .select()
      .from(schema.contentUnits)
      .where(eq(schema.contentUnits.id, unitId))
      .limit(1);
    if (!before) return { ok: false, error: 'Pack not found' };

    await d
      .update(schema.contentUnits)
      .set({ body, status: 'draft', updatedAt: new Date() })
      .where(eq(schema.contentUnits.id, unitId));

    await audit({
      adminId: session!.user.id,
      action: 'content.save_draft',
      entityType: 'content_unit',
      entityId: unitId,
      before: { status: before.status, body: before.body },
      after: { status: 'draft', body },
    });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${unitId}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

export async function submitForReview(unitId: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();

    const [unit] = await d
      .select()
      .from(schema.contentUnits)
      .where(eq(schema.contentUnits.id, unitId))
      .limit(1);
    if (!unit) return { ok: false, error: 'Pack not found' };
    if (unit.status !== 'draft') {
      return { ok: false, error: 'Only drafts can be submitted for review' };
    }

    await d
      .update(schema.contentUnits)
      .set({ status: 'in_review', updatedAt: new Date() })
      .where(eq(schema.contentUnits.id, unitId));

    await audit({
      adminId: session!.user.id,
      action: 'content.submit_review',
      entityType: 'content_unit',
      entityId: unitId,
      before: { status: 'draft' },
      after: { status: 'in_review' },
    });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${unitId}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

/**
 * 'Publish' — ops+ only (content_editor lacks content.publish). Transaction:
 * snapshot the outgoing body as a revision at the old version, bump version,
 * stamp publishedAt. Then audit + live-feed event.
 */
export async function publishUnit(unitId: string): Promise<PublishResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.publish');
    const adminId = session!.user.id;
    const d = await db();

    const [unit] = await d
      .select()
      .from(schema.contentUnits)
      .where(eq(schema.contentUnits.id, unitId))
      .limit(1);
    if (!unit) return { ok: false, error: 'Pack not found' };
    if (unit.status !== 'in_review') {
      return { ok: false, error: 'Only packs in review can be published' };
    }

    const newVersion = unit.version + 1;
    await d.transaction(async (tx) => {
      await tx.insert(schema.contentRevisions).values({
        unitId,
        version: unit.version,
        body: unit.body,
        editorId: adminId,
      });
      await tx
        .update(schema.contentUnits)
        .set({
          status: 'published',
          version: newVersion,
          publishedAt: new Date(),
          updatedAt: new Date(),
        })
        .where(eq(schema.contentUnits.id, unitId));
    });

    await audit({
      adminId,
      action: 'content.publish',
      entityType: 'content_unit',
      entityId: unitId,
      before: { status: 'in_review', version: unit.version },
      after: { status: 'published', version: newVersion },
    });
    publish({ type: 'system', text: `"${unit.title}" v${newVersion} published` });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${unitId}`);
    return { ok: true, version: newVersion, title: unit.title };
  } catch (e) {
    return fail(e);
  }
}

export async function archiveUnit(unitId: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();

    const [unit] = await d
      .select()
      .from(schema.contentUnits)
      .where(eq(schema.contentUnits.id, unitId))
      .limit(1);
    if (!unit) return { ok: false, error: 'Pack not found' };
    if (unit.status !== 'published') {
      return { ok: false, error: 'Only published packs can be archived' };
    }

    await d
      .update(schema.contentUnits)
      .set({ status: 'archived', updatedAt: new Date() })
      .where(eq(schema.contentUnits.id, unitId));

    await audit({
      adminId: session!.user.id,
      action: 'content.archive',
      entityType: 'content_unit',
      entityId: unitId,
      before: { status: 'published' },
      after: { status: 'archived' },
    });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${unitId}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

// ── Revision history ────────────────────────────────────────────────────────

/** 'Restore' — copies a revision's body back into the unit as a new draft. */
export async function restoreRevision(revisionId: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();

    const [rev] = await d
      .select()
      .from(schema.contentRevisions)
      .where(eq(schema.contentRevisions.id, revisionId))
      .limit(1);
    if (!rev) return { ok: false, error: 'Revision not found' };

    const [unit] = await d
      .select()
      .from(schema.contentUnits)
      .where(eq(schema.contentUnits.id, rev.unitId))
      .limit(1);
    if (!unit) return { ok: false, error: 'Pack not found' };

    await d
      .update(schema.contentUnits)
      .set({ body: rev.body, status: 'draft', updatedAt: new Date() })
      .where(eq(schema.contentUnits.id, rev.unitId));

    await audit({
      adminId: session!.user.id,
      action: 'content.restore_revision',
      entityType: 'content_unit',
      entityId: rev.unitId,
      before: { status: unit.status, body: unit.body },
      after: { status: 'draft', body: rev.body, restoredFromVersion: rev.version },
    });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${rev.unitId}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}
