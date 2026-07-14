'use server';
// Incident mutations — Ack (open → ack) and Resolve (→ resolved). Both are
// RBAC-gated ('incidents.act') and audited; Resolve publishes a bus incident
// event and revalidates the admin layout so the global amber banner (which
// reads OPEN anomaly incidents in src/app/admin/layout.tsx) clears.
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';
import { publish } from '@/lib/bus';

type ActionResult = { ok: true } | { ok: false; error: string };

function fail(e: unknown): { ok: false; error: string } {
  return { ok: false, error: e instanceof Error ? e.message : 'Something went wrong' };
}

export async function ackIncident(id: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'incidents.act');
    const d = await db();

    const [before] = await d
      .select()
      .from(schema.incidents)
      .where(eq(schema.incidents.id, id))
      .limit(1);
    if (!before) return { ok: false, error: 'Incident not found' };
    if (before.status !== 'open') return { ok: false, error: 'Only open incidents can be acked' };

    await d.update(schema.incidents).set({ status: 'ack' }).where(eq(schema.incidents.id, id));

    await audit({
      adminId: session!.user.id,
      action: 'incident.ack',
      entityType: 'incident',
      entityId: id,
      before: { status: before.status },
      after: { status: 'ack' },
    });
    revalidatePath('/admin/performance');
    revalidatePath('/admin', 'layout'); // banner reads open incidents
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

export async function resolveIncident(id: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'incidents.act');
    const d = await db();

    const [before] = await d
      .select()
      .from(schema.incidents)
      .where(eq(schema.incidents.id, id))
      .limit(1);
    if (!before) return { ok: false, error: 'Incident not found' };
    if (before.status === 'resolved') return { ok: false, error: 'Incident is already resolved' };

    await d
      .update(schema.incidents)
      .set({ status: 'resolved', resolvedAt: new Date() })
      .where(eq(schema.incidents.id, id));

    await audit({
      adminId: session!.user.id,
      action: 'incident.resolve',
      entityType: 'incident',
      entityId: id,
      before: { status: before.status },
      after: { status: 'resolved' },
    });
    publish({ type: 'incident', text: `Incident resolved: ${before.title}` });
    revalidatePath('/admin/performance');
    revalidatePath('/admin', 'layout'); // clears the global amber anomaly banner
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}
