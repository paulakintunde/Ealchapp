'use server';
// Shell-level mutations: maintenance mode, anomaly banner dismissal, sign out.
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';
import { auth, signOut } from '@/auth';
import { db, schema } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';
import { publish } from '@/lib/bus';

type ActionResult = { ok: true } | { ok: false; error: string };

function fail(e: unknown): { ok: false; error: string } {
  return { ok: false, error: e instanceof Error ? e.message : 'Something went wrong' };
}

const MAINTENANCE_KEY = 'maintenance_mode';

export async function setMaintenance(enabled: boolean): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'settings.maintenance');
    const adminId = session!.user.id;
    const d = await db();

    const [before] = await d
      .select()
      .from(schema.settings)
      .where(eq(schema.settings.key, MAINTENANCE_KEY))
      .limit(1);

    const value: { enabled: boolean; message?: string } = enabled
      ? { enabled, message: 'Ealch is briefly down for maintenance. Back shortly.' }
      : { enabled };

    await d
      .insert(schema.settings)
      .values({ key: MAINTENANCE_KEY, value, updatedBy: adminId, updatedAt: new Date() })
      .onConflictDoUpdate({
        target: schema.settings.key,
        set: { value, updatedBy: adminId, updatedAt: new Date() },
      });

    await audit({
      adminId,
      action: 'settings.maintenance',
      entityType: 'settings',
      entityId: MAINTENANCE_KEY,
      before: before?.value ?? null,
      after: value,
    });
    publish({
      type: 'system',
      text: enabled
        ? 'Maintenance mode enabled — clients see the downtime screen'
        : 'Maintenance mode disabled — service restored',
    });
    revalidatePath('/admin', 'layout');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

export async function dismissAnomaly(id: string): Promise<ActionResult> {
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

    await d
      .update(schema.incidents)
      .set({ status: 'ack' })
      .where(eq(schema.incidents.id, id));

    await audit({
      adminId: session!.user.id,
      action: 'incident.ack',
      entityType: 'incident',
      entityId: id,
      before: { status: before.status },
      after: { status: 'ack' },
    });
    revalidatePath('/admin', 'layout');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

export async function signOutAction(): Promise<void> {
  await signOut({ redirectTo: '/login' });
}
