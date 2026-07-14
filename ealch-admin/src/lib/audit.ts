// Audit trail — every mutation calls audit() with before/after snapshots.
import 'server-only';
import { headers } from 'next/headers';
import { db, schema } from '@/db';

export async function audit(opts: {
  adminId: string;
  action: string;              // e.g. 'user.ban', 'ai.route', 'flag.update'
  entityType: string;          // e.g. 'user', 'ai_routing', 'feature_flag'
  entityId?: string;
  before?: unknown;
  after?: unknown;
}): Promise<void> {
  const d = await db();
  let ip: string | null = null;
  try {
    const h = await headers();
    ip = h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? h.get('x-real-ip');
  } catch {
    // outside a request scope (worker) — no IP
  }
  await d.insert(schema.auditLog).values({
    adminId: opts.adminId,
    action: opts.action,
    entityType: opts.entityType,
    entityId: opts.entityId,
    before: opts.before ?? null,
    after: opts.after ?? null,
    ip,
  });
}
