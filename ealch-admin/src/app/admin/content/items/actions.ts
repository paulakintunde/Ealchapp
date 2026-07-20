'use server';
// Items slice mutations — the first-ever write path for content_items.
// Every mutation: auth → assertCan → mutate → audit → revalidate, same shape
// as ../actions.ts. Publishing follows the same draft → in_review →
// published → archived workflow content_units already uses; items simply
// never had a UI to drive it through before this.
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { and, eq, ne, sql } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';
import {
  isItemDrillKind, isItemKind, isItemStatus, isValidTheme, itemId,
  type ItemDrillKind, type ItemExamSkill, type ItemGender, type ItemKind,
  type ItemLevel, type ItemModality, type ItemRegister,
} from './meta';

type ActionResult = { ok: true } | { ok: false; error: string };
type CreateResult = { ok: true; id: string } | { ok: false; error: string };

function fail(e: unknown): { ok: false; error: string } {
  return { ok: false, error: e instanceof Error ? e.message : 'Something went wrong' };
}

const LIST_PATH = '/admin/content/items';

/** Every field an item's classic/block editor can write. Matches
 *  ealch-v2/src/content/schema.ts's Item type field-for-field (minus id,
 *  which is immutable once created — see the note on ItemForm). */
export interface ItemInput {
  kind: string;
  level: string;
  theme: string;
  fr: string;
  en: string;
  ipa: string;
  gender: string; // '' means unset
  exampleFr: string;
  exampleEn: string;
  notes: string;
  tags: string[];
  drills: string[];
  imageRef: string;
  skill: string; // '' means unset
  register: string; // '' means unset
  canDo: string;
  grammarPoints: string[];
  modality: string; // '' means unset
  verbCheckInfinitive: string;
  verbCheckTense: string;
  verbCheckMood: string;
  verbCheckPerson: string; // '1' | '2' | '3' | ''
  verbCheckNumber: string; // 's' | 'p' | ''
}

function validateCommon(input: {
  level: string; theme: string; kind: string; drills: string[]; fr?: string; en?: string;
}): string | null {
  if (!isItemKind(input.kind)) return 'Invalid item kind';
  if (!(['sons', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'] as string[]).includes(input.level)) return 'Invalid level';
  if (!isValidTheme(input.theme)) return 'Theme must be lowercase letters, digits and hyphens';
  if (input.drills.length === 0) return 'At least one drill is required — an item no drill can reach is dead weight';
  if (input.drills.some((d) => !isItemDrillKind(d))) return 'Invalid drill kind';
  return null;
}

// ── Create ──────────────────────────────────────────────────────────────────

/** Computes the next free seq for (level, theme) and inserts a draft item.
 *  fr/en start empty — the row exists so the editor has something to open,
 *  the same "blank draft" pattern createUnit uses for content_units. */
export async function createItem(input: {
  level: string;
  theme: string;
  kind: string;
  drills: string[];
}): Promise<CreateResult> {
  let newId: string;
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const adminId = session!.user.id;

    const err = validateCommon(input);
    if (err) return { ok: false, error: err };
    const level = input.level as ItemLevel;
    const kind = input.kind as ItemKind;
    const drills = input.drills as ItemDrillKind[];

    const d = await db();
    const existing = await d
      .select({ id: schema.contentItems.id })
      .from(schema.contentItems)
      .where(and(eq(schema.contentItems.level, level), eq(schema.contentItems.theme, input.theme)));
    const seqs = existing
      .map((r) => Number(r.id.split('.').pop()))
      .filter((n) => Number.isFinite(n));
    const nextSeq = (seqs.length ? Math.max(...seqs) : 0) + 1;
    const id = itemId(level, input.theme, nextSeq);

    const [row] = await d
      .insert(schema.contentItems)
      .values({
        id,
        kind,
        level,
        theme: input.theme,
        fr: '',
        en: '',
        drills,
        status: 'draft',
        generatedBy: 'human',
      })
      .returning({ id: schema.contentItems.id });

    await audit({
      adminId,
      action: 'items.create',
      entityType: 'content_item',
      entityId: row.id,
      after: { level, theme: input.theme, kind, drills },
    });
    revalidatePath(LIST_PATH);
    newId = row.id;
  } catch (e) {
    return fail(e);
  }
  redirect(`${LIST_PATH}/${newId}`);
}

// ── Editor: full field save ─────────────────────────────────────────────────

export async function saveItem(id: string, input: ItemInput): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();

    const err = validateCommon(input);
    if (err) return { ok: false, error: err };
    if (input.gender && input.gender !== 'm' && input.gender !== 'f') return { ok: false, error: 'Invalid gender' };
    if (input.skill && !(['CO', 'CE', 'PO', 'PE'] as string[]).includes(input.skill)) return { ok: false, error: 'Invalid skill' };
    if (input.register && !(['familier', 'courant', 'soutenu'] as string[]).includes(input.register)) return { ok: false, error: 'Invalid register' };
    if (input.modality && !(['recognise', 'produce', 'discriminate'] as string[]).includes(input.modality)) return { ok: false, error: 'Invalid modality' };

    const [before] = await d.select().from(schema.contentItems).where(eq(schema.contentItems.id, id)).limit(1);
    if (!before) return { ok: false, error: 'Item not found' };
    // level/theme are baked into the immutable id (DB CHECK enforces
    // split_part(id,'.',2)=level and split_part(id,'.',3)=theme) — changing
    // either here would violate the constraint the id already promised.
    if (input.level !== before.level || input.theme !== before.theme) {
      return { ok: false, error: 'Level and theme are fixed by the item id — create a new item to move it' };
    }

    const verbCheck = input.verbCheckInfinitive.trim()
      ? {
          infinitive: input.verbCheckInfinitive.trim(),
          tense: input.verbCheckTense.trim(),
          ...(input.verbCheckMood.trim() ? { mood: input.verbCheckMood.trim() } : {}),
          person: input.verbCheckPerson || '1',
          number: input.verbCheckNumber || 's',
        }
      : null;

    await d
      .update(schema.contentItems)
      .set({
        kind: input.kind as ItemKind,
        fr: input.fr.trim(),
        en: input.en.trim(),
        ipa: input.ipa.trim() || null,
        gender: (input.gender || null) as ItemGender | null,
        example: input.exampleFr.trim() || input.exampleEn.trim()
          ? { fr: input.exampleFr.trim(), en: input.exampleEn.trim() }
          : null,
        notes: input.notes.trim() || null,
        tags: input.tags.filter(Boolean),
        drills: input.drills as ItemDrillKind[],
        imageRef: input.imageRef.trim() || null,
        skill: (input.skill || null) as ItemExamSkill | null,
        register: (input.register || null) as ItemRegister | null,
        canDo: input.canDo.trim() || null,
        grammarPoints: input.grammarPoints.filter(Boolean),
        modality: (input.modality || null) as ItemModality | null,
        verbCheck,
        updatedAt: new Date(),
      })
      .where(eq(schema.contentItems.id, id));

    await audit({
      adminId: session!.user.id,
      action: 'items.save',
      entityType: 'content_item',
      entityId: id,
      before: { fr: before.fr, en: before.en, drills: before.drills },
      after: { fr: input.fr, en: input.en, drills: input.drills },
    });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${id}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

// ── Workflow ─────────────────────────────────────────────────────────────

/** Fields required before a draft can move to in_review — the UI equivalent
 *  of ealch-v2's validateItem, checked here since the admin never imports
 *  that app module into the Next.js bundle (see the note in meta.ts). */
function reviewReadiness(item: { fr: string; en: string; drills: string[] }): string | null {
  if (!item.fr.trim()) return 'fr is required before review';
  if (!item.en.trim()) return 'en is required before review';
  if (item.drills.length === 0) return 'At least one drill is required before review';
  return null;
}

export async function submitItemForReview(id: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();

    const [item] = await d.select().from(schema.contentItems).where(eq(schema.contentItems.id, id)).limit(1);
    if (!item) return { ok: false, error: 'Item not found' };
    if (item.status !== 'draft') return { ok: false, error: 'Only drafts can be submitted for review' };
    const err = reviewReadiness(item);
    if (err) return { ok: false, error: err };

    await d.update(schema.contentItems).set({ status: 'in_review', updatedAt: new Date() }).where(eq(schema.contentItems.id, id));

    await audit({
      adminId: session!.user.id,
      action: 'items.submit_review',
      entityType: 'content_item',
      entityId: id,
      before: { status: 'draft' },
      after: { status: 'in_review' },
    });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${id}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

export async function publishItem(id: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.publish');
    const adminId = session!.user.id;
    const d = await db();

    const [item] = await d.select().from(schema.contentItems).where(eq(schema.contentItems.id, id)).limit(1);
    if (!item) return { ok: false, error: 'Item not found' };
    if (item.status !== 'in_review') return { ok: false, error: 'Only items in review can be published' };

    await d
      .update(schema.contentItems)
      .set({ status: 'published', publishedAt: new Date(), updatedAt: new Date(), reviewedBy: adminId, reviewedAt: new Date() })
      .where(eq(schema.contentItems.id, id));

    await audit({
      adminId,
      action: 'items.publish',
      entityType: 'content_item',
      entityId: id,
      before: { status: 'in_review' },
      after: { status: 'published' },
    });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${id}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

export async function archiveItem(id: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();

    const [item] = await d.select().from(schema.contentItems).where(eq(schema.contentItems.id, id)).limit(1);
    if (!item) return { ok: false, error: 'Item not found' };
    if (item.status !== 'published') return { ok: false, error: 'Only published items can be archived' };

    await d.update(schema.contentItems).set({ status: 'archived', updatedAt: new Date() }).where(eq(schema.contentItems.id, id));

    await audit({
      adminId: session!.user.id,
      action: 'items.archive',
      entityType: 'content_item',
      entityId: id,
      before: { status: 'published' },
      after: { status: 'archived' },
    });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${id}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

// ── Theme breadth (Phase 6b's >=20-items-per-theme gate, surfaced early) ────

export async function themeBreadth(level: string, theme: string): Promise<number> {
  const d = await db();
  const [row] = await d
    .select({ count: sql<number>`count(*)::int` })
    .from(schema.contentItems)
    .where(and(eq(schema.contentItems.level, level as ItemLevel), eq(schema.contentItems.theme, theme), ne(schema.contentItems.status, 'archived')));
  return row?.count ?? 0;
}

// ── Scheduling (Phase 5) ─────────────────────────────────────────────────

/** `at` is an ISO string or '' to clear. A scheduled item still reads
 *  whatever `status` it already has — scheduling names a future publish
 *  TIME, it does not itself change draft/in_review/published, so "approved,
 *  timed" and "approved, live" stay two different, honest states until a
 *  scheduler (not built yet) actually flips one to the other. */
export async function setItemSchedule(id: string, at: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();
    const [item] = await d.select().from(schema.contentItems).where(eq(schema.contentItems.id, id)).limit(1);
    if (!item) return { ok: false, error: 'Item not found' };

    const scheduledPublishAt = at ? new Date(at) : null;
    if (at && Number.isNaN(scheduledPublishAt?.getTime())) return { ok: false, error: 'Invalid date' };

    await d.update(schema.contentItems).set({ scheduledPublishAt, updatedAt: new Date() }).where(eq(schema.contentItems.id, id));
    await audit({
      adminId: session!.user.id, action: 'items.set_schedule', entityType: 'content_item', entityId: id,
      before: { scheduledPublishAt: item.scheduledPublishAt }, after: { scheduledPublishAt },
    });
    revalidatePath(LIST_PATH);
    revalidatePath(`${LIST_PATH}/${id}`);
    revalidatePath('/admin/content/schedule');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

// ── Audio segment map (Phase 2, La Dictée) ──────────────────────────────────

export type SegmentInput = { blockId: string; startMs: number; endMs: number; text: string };

/** Structural validation only — the full ordered/non-overlapping check lives
 *  in ealch-v2's validateSegments (publish gate); this catches obvious
 *  authoring mistakes before they even reach that gate. */
function validateSegmentsInput(segments: SegmentInput[]): string | null {
  let prevEnd = -1;
  for (const s of segments) {
    if (!s.blockId.trim()) return 'Every segment needs a blockId';
    if (!Number.isInteger(s.startMs) || s.startMs < 0) return 'startMs must be an integer >= 0';
    if (!Number.isInteger(s.endMs) || s.endMs <= s.startMs) return 'endMs must be greater than startMs';
    if (s.startMs < prevEnd) return 'segments must not overlap — check the ordering';
    prevEnd = s.endMs;
  }
  return null;
}

export async function saveSegments(id: string, segments: SegmentInput[]): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const d = await db();

    const err = validateSegmentsInput(segments);
    if (err) return { ok: false, error: err };

    const [before] = await d.select().from(schema.contentItems).where(eq(schema.contentItems.id, id)).limit(1);
    if (!before) return { ok: false, error: 'Item not found' };

    await d
      .update(schema.contentItems)
      .set({ segments: segments.length ? segments : null, updatedAt: new Date() })
      .where(eq(schema.contentItems.id, id));

    await audit({
      adminId: session!.user.id,
      action: 'items.save_segments',
      entityType: 'content_item',
      entityId: id,
      before: { segments: before.segments },
      after: { segments },
    });
    revalidatePath('/admin/content/listen-write');
    revalidatePath(`${LIST_PATH}/${id}`);
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}
