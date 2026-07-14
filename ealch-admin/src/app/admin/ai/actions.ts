'use server';
// AI routing mutations — applyRouting stages come from the client board;
// every change is RBAC-gated, audited (before/after model names) and
// published to the live-event bus.
import { revalidatePath } from 'next/cache';
import { and, eq } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';
import { publish } from '@/lib/bus';

export interface RoutingChange {
  capabilityId: string;
  modelId: string;
}

type ActionResult = { ok: true } | { ok: false; error: string };

function fail(e: unknown): { ok: false; error: string } {
  return { ok: false, error: e instanceof Error ? e.message : 'Something went wrong' };
}

export async function applyRouting(changes: RoutingChange[]): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'ai.route');
    const adminId = session!.user.id;
    if (!Array.isArray(changes) || changes.length === 0) {
      return { ok: false, error: 'No routing changes to apply' };
    }
    const d = await db();

    for (const change of changes) {
      const [cap] = await d
        .select()
        .from(schema.aiCapabilities)
        .where(eq(schema.aiCapabilities.id, change.capabilityId))
        .limit(1);
      if (!cap) return { ok: false, error: 'Unknown capability' };

      const [next] = await d
        .select()
        .from(schema.aiModels)
        .where(
          and(
            eq(schema.aiModels.id, change.modelId),
            eq(schema.aiModels.capabilityId, cap.id),
          ),
        )
        .limit(1);
      if (!next) return { ok: false, error: `Unknown model for ${cap.label}` };
      if (!next.enabled) return { ok: false, error: `${next.name} is currently disabled` };

      const [current] = await d
        .select()
        .from(schema.aiRouting)
        .where(eq(schema.aiRouting.capabilityId, cap.id))
        .limit(1);
      if (current?.activeModelId === next.id) continue; // no-op

      const [prev] = current
        ? await d
            .select()
            .from(schema.aiModels)
            .where(eq(schema.aiModels.id, current.activeModelId))
            .limit(1)
        : [undefined];

      const now = new Date();
      await d
        .insert(schema.aiRouting)
        .values({ capabilityId: cap.id, activeModelId: next.id, updatedBy: adminId, updatedAt: now })
        .onConflictDoUpdate({
          target: schema.aiRouting.capabilityId,
          set: { activeModelId: next.id, updatedBy: adminId, updatedAt: now },
        });

      await audit({
        adminId,
        action: 'ai.route',
        entityType: 'ai_routing',
        entityId: cap.id,
        before: { model: prev?.name ?? null },
        after: { model: next.name },
      });
      publish({ type: 'system', text: `AI routing: ${cap.key} → ${next.name}` });
    }

    revalidatePath('/admin/ai');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}
