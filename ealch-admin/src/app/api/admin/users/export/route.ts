// CSV export of the CURRENT filtered users view (same query params as the
// table, without pagination). Streams the file as an attachment.
import { NextResponse, type NextRequest } from 'next/server';
import { auth } from '@/auth';
import { assertCan, ForbiddenError } from '@/lib/rbac';
import { parseUsersParams, type UserRow } from '@/components/users/types';
import { fetchUsersPage } from '@/app/admin/users/query';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const HEADER = [
  'name', 'email', 'level', 'plan', 'streak_days',
  'confidence', 'status', 'last_seen_at', 'created_at',
] as const;

function csvCell(v: string | number | null): string {
  const s = v === null ? '' : String(v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function csvLine(r: UserRow): string {
  return [
    r.name, r.email, r.level.toUpperCase(), r.plan, r.streakDays,
    r.confidence, r.status, r.lastSeenAt ?? '', r.createdAt,
  ].map(csvCell).join(',');
}

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
  const { rows } = await fetchUsersPage(params, { all: true });

  const encoder = new TextEncoder();
  const CHUNK = 200;
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(encoder.encode(HEADER.join(',') + '\n'));
      for (let i = 0; i < rows.length; i += CHUNK) {
        const chunk = rows
          .slice(i, i + CHUNK)
          .map((r) => csvLine(r) + '\n')
          .join('');
        controller.enqueue(encoder.encode(chunk));
      }
      controller.close();
    },
  });

  const stamp = new Date().toISOString().slice(0, 10);
  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="ealch-users-${stamp}.csv"`,
      'Cache-Control': 'no-store',
    },
  });
}
