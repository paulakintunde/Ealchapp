// Campaign list poll target — the 'Recent sends' card refetches this every
// 4s (TanStack Query) so queue-worker progress (sending → sent, counters)
// is visible live. Auth + notifications.read required.
import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { can } from '@/lib/rbac';
import { listCampaigns } from '@/app/admin/notifications/data';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!can(session.user.role, 'notifications.read')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  return NextResponse.json({ campaigns: await listCampaigns() });
}
