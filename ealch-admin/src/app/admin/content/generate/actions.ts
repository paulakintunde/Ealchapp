'use server';
// Runs one generation job through src/lib/generation/pipeline.ts. Same
// shape as every other admin mutation: auth -> assertCan -> mutate -> audit
// -> revalidatePath -> return {ok,...}. audit() runs HERE, not inside
// generateContent() itself, because audit.ts is 'server-only' — the CLI
// script (scripts/generate-content.ts) calls the same pipeline outside any
// Next.js request context and has no audit trail to attach to, same as
// every other scripts/*.ts file in this repo.
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { db } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';
import { generateContent } from '@/lib/generation/pipeline';
import { isItemLevel, isValidTheme } from '../items/meta';

type RunResult = { ok: true; createdIds: string[]; model: string } | { ok: false; error: string };

export async function runGeneration(input: {
  templateId: string;
  level: string;
  theme: string;
  count: number;
}): Promise<RunResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'content.write');
    const adminId = session!.user.id;

    if (!input.templateId.trim()) return { ok: false, error: 'Pick a template' };
    if (!isItemLevel(input.level)) return { ok: false, error: 'Invalid level' };
    const theme = input.theme.trim().toLowerCase();
    if (!isValidTheme(theme)) return { ok: false, error: 'Theme must be lowercase letters, digits and hyphens' };
    if (!Number.isInteger(input.count) || input.count < 1 || input.count > 100) {
      return { ok: false, error: 'Count must be an integer 1..100' };
    }

    const d = await db();
    const result = await generateContent(d, {
      templateId: input.templateId,
      target: { entity: 'item', level: input.level, theme, count: input.count },
      requestedBy: adminId,
    });
    if (!result.ok) return { ok: false, error: result.error };

    await audit({
      adminId,
      action: 'generation.run',
      entityType: 'content_items',
      after: { templateId: input.templateId, level: input.level, theme, count: input.count, model: result.model, createdIds: result.createdIds },
    });
    revalidatePath('/admin/content/items');
    return { ok: true, createdIds: result.createdIds, model: result.model };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Something went wrong' };
  }
}
