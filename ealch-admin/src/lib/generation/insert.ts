// Bulk-inserts generated item drafts as status='draft' rows with provenance
// set — nothing here publishes anything. The id-allocation logic mirrors
// items/actions.ts's createItem() exactly (query existing ids for the
// (level, theme) pair, take max(seq)+1), extended to allocate SEQUENTIALLY
// across the whole batch so ten drafts in one job get ten distinct ids, not
// the same one ten times.
import { and, eq } from 'drizzle-orm';
import type { DB } from '../../db';
import { contentItems } from '../../db/schema';
import {
  itemId,
  type ItemDrillKind, type ItemExamSkill, type ItemGender, type ItemKind,
  type ItemLevel, type ItemModality, type ItemRegister,
} from '../../app/admin/content/items/meta';
import type { NewItemDraft } from './types';

export async function insertItemDrafts(
  d: DB,
  drafts: NewItemDraft[],
  target: { level: ItemLevel; theme: string },
  provenance: { model: string; promptVersion: string }
): Promise<{ id: string }[]> {
  const existing = await d
    .select({ id: contentItems.id })
    .from(contentItems)
    .where(and(eq(contentItems.level, target.level), eq(contentItems.theme, target.theme)));
  const seqs = existing.map((r) => Number(r.id.split('.').pop())).filter((n) => Number.isFinite(n));
  let nextSeq = (seqs.length ? Math.max(...seqs) : 0) + 1;

  const rows = drafts.map((draft) => ({
    id: itemId(target.level, target.theme, nextSeq++),
    kind: draft.kind as ItemKind,
    level: target.level,
    theme: target.theme,
    fr: draft.fr,
    en: draft.en,
    ipa: draft.ipa ?? null,
    gender: (draft.gender ?? null) as ItemGender | null,
    example: draft.exampleFr || draft.exampleEn ? { fr: draft.exampleFr ?? '', en: draft.exampleEn ?? '' } : null,
    notes: draft.notes ?? null,
    tags: draft.tags ?? [],
    drills: draft.drills as ItemDrillKind[],
    skill: (draft.skill ?? null) as ItemExamSkill | null,
    register: (draft.register ?? null) as ItemRegister | null,
    canDo: draft.canDo ?? null,
    grammarPoints: draft.grammarPoints ?? [],
    modality: (draft.modality ?? null) as ItemModality | null,
    verbCheck: draft.verbCheck ?? null,
    status: 'draft' as const,
    generatedBy: 'llm' as const,
    model: provenance.model,
    promptVersion: provenance.promptVersion,
  }));

  return d.insert(contentItems).values(rows).returning({ id: contentItems.id });
}
