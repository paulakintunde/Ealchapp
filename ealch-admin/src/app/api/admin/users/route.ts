// Users table data — server-side search/filter/sort/pagination.
// GET /api/admin/users?q=&filter=&page=&sort= → { rows, total }
import { NextResponse, type NextRequest } from 'next/server';
import { auth } from '@/auth';
import { assertCan, ForbiddenError } from '@/lib/rbac';
import { parseUsersParams, type UsersResponse } from '@/components/users/types';
import { fetchUsersPage } from '@/app/admin/users/query';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
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

  const params = parseUsersParams(
    Object.fromEntries(req.nextUrl.searchParams.entries()),
  );
  const data: UsersResponse = await fetchUsersPage(params);
  return NextResponse.json(data);
}
