// Single-user detail for the drawer: profile, stats, latest subscription,
// payment history and recent learning sessions.
import { NextResponse, type NextRequest } from 'next/server';
import { auth } from '@/auth';
import { assertCan, ForbiddenError } from '@/lib/rbac';
import { fetchUserDetail } from '@/app/admin/users/query';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    assertCan(session.user.role, 'users.read');
  } catch (e) {
    if (e instanceof ForbiddenError) {
      return NextResponse.json({ error: e.message }, { status: 403 });
    }
    throw e;
  }

  const { id } = await params;
  const detail = await fetchUserDetail(id);
  if (!detail) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(detail);
}
