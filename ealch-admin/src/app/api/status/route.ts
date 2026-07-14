// Public status endpoint — mobile clients poll this to decide whether to show
// the downtime screen. Intentionally unauthenticated.
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { db, schema } from '@/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Settings row convention (shared): key 'maintenance_mode',
// value: { enabled: boolean, message?: string }
export async function GET() {
  try {
    const d = await db();
    const [row] = await d
      .select()
      .from(schema.settings)
      .where(eq(schema.settings.key, 'maintenance_mode'))
      .limit(1);
    const value = (row?.value ?? null) as
      | { enabled?: boolean; message?: string }
      | boolean
      | null;
    const maintenance =
      value === true || (typeof value === 'object' && value?.enabled === true);
    const message =
      typeof value === 'object' && value?.message ? value.message : undefined;
    return NextResponse.json(
      message !== undefined ? { maintenance, message } : { maintenance },
    );
  } catch {
    // If the DB is unreachable the app itself is degraded, but we must not
    // strand clients on the downtime screen because of an admin-side error.
    return NextResponse.json({ maintenance: false });
  }
}
