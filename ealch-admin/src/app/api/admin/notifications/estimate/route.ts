// Live audience estimate for the campaign composer — counts seeded users
// matching the segment predicates and scales to app-wide device numbers
// (61,408 shown / 2,000 seeded rows). Auth + notifications.read required.
import { NextResponse, type NextRequest } from 'next/server';
import {
  and, count, eq, inArray, isNull, lte, notInArray, or, type SQL,
} from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { can } from '@/lib/rbac';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SCALE = 61_408 / 2_000;
const DAY_MS = 24 * 60 * 60 * 1000;
const LEVELS = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'] as const;
type Level = (typeof LEVELS)[number];

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!can(session.user.role, 'notifications.read')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const p = req.nextUrl.searchParams;
  const level = p.get('level');
  const plan = p.get('plan');
  const lastSeen = Number(p.get('lastSeen') ?? 0);
  const locale = p.get('locale');

  const d = await db();
  const conds: (SQL | undefined)[] = [
    // Reachable devices only — banned/deleted accounts hold no push token.
    notInArray(schema.users.status, ['banned', 'deleted']),
  ];

  if (level && (LEVELS as readonly string[]).includes(level)) {
    conds.push(eq(schema.users.level, level as Level));
  }
  if (locale === 'en' || locale === 'fr') {
    conds.push(eq(schema.users.locale, locale));
  }
  if (lastSeen === 7 || lastSeen === 30) {
    const cutoff = new Date(Date.now() - lastSeen * DAY_MS);
    conds.push(or(isNull(schema.users.lastSeenAt), lte(schema.users.lastSeenAt, cutoff)));
  }
  if (plan === 'plus' || plan === 'pro') {
    // Plus = monthly €5.99, Pro = annual (per plan-mix brief).
    const target = plan === 'plus' ? ('monthly' as const) : ('annual' as const);
    conds.push(
      inArray(
        schema.users.id,
        d
          .select({ id: schema.subscriptions.userId })
          .from(schema.subscriptions)
          .where(
            and(
              eq(schema.subscriptions.plan, target),
              inArray(schema.subscriptions.status, ['active', 'trialing', 'past_due']),
            ),
          ),
      ),
    );
  } else if (plan === 'free') {
    conds.push(
      notInArray(
        schema.users.id,
        d
          .select({ id: schema.subscriptions.userId })
          .from(schema.subscriptions)
          .where(inArray(schema.subscriptions.status, ['active', 'trialing', 'past_due'])),
      ),
    );
  }

  const [row] = await d.select({ c: count() }).from(schema.users).where(and(...conds));
  return NextResponse.json({ count: Math.round(Number(row?.c ?? 0) * SCALE) });
}
