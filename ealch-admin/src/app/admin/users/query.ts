// Users screen — server-side data access shared by the RSC page and the
// /api/admin/users route handlers. Filtering/sorting/paging all happen in
// Postgres so the client only ever sees one page.
import 'server-only';
import { and, eq, ilike, isNull, or, sql, type SQL } from 'drizzle-orm';
import { db, schema } from '@/db';
import {
  PAGE_SIZE,
  planFromSub,
  type UserDetail,
  type UserRow,
  type UsersParams,
  type UserStatusKey,
} from '@/components/users/types';

const iso = (d: Date | null | undefined): string | null => (d ? d.toISOString() : null);

/** Latest subscription per user (row_number over startedAt desc). */
function latestSubQuery(d: Awaited<ReturnType<typeof db>>) {
  return d
    .select({
      userId: schema.subscriptions.userId,
      plan: schema.subscriptions.plan,
      rn: sql<number>`row_number() over (partition by ${schema.subscriptions.userId} order by ${schema.subscriptions.startedAt} desc)`.as('rn'),
    })
    .from(schema.subscriptions)
    .as('latest_sub');
}

function buildWhere(
  params: UsersParams,
  latest: ReturnType<typeof latestSubQuery>,
): SQL | undefined {
  const conds: (SQL | undefined)[] = [];
  if (params.q) {
    const like = `%${params.q}%`;
    conds.push(or(ilike(schema.users.displayName, like), ilike(schema.users.email, like)));
  }
  switch (params.filter) {
    case 'pro':
      conds.push(eq(latest.plan, 'annual'));
      break;
    case 'plus':
      conds.push(eq(latest.plan, 'monthly'));
      break;
    case 'free':
      conds.push(or(isNull(latest.plan), eq(latest.plan, 'free')));
      break;
    case 'churn':
      conds.push(eq(schema.users.status, 'churn_risk'));
      break;
  }
  const present = conds.filter((c): c is SQL => c !== undefined);
  return present.length ? and(...present) : undefined;
}

function orderClause(params: UsersParams): SQL {
  const col = {
    name: schema.users.displayName,
    streak: schema.userStats.streakDays,
    confidence: schema.userStats.confidenceScore,
    lastSeen: schema.users.lastSeenAt,
  }[params.sort];
  return params.dir === 'desc'
    ? sql`${col} DESC NULLS LAST, ${schema.users.id} ASC`
    : sql`${col} ASC NULLS FIRST, ${schema.users.id} ASC`;
}

/**
 * One filtered/sorted page of users + total match count.
 * Pass `all: true` (CSV export) to skip pagination.
 */
export async function fetchUsersPage(
  params: UsersParams,
  opts: { all?: boolean } = {},
): Promise<{ rows: UserRow[]; total: number }> {
  const d = await db();
  const latest = latestSubQuery(d);
  const where = buildWhere(params, latest);

  const base = () =>
    d
      .select({
        id: schema.users.id,
        name: schema.users.displayName,
        email: schema.users.email,
        level: schema.users.level,
        status: schema.users.status,
        lastSeenAt: schema.users.lastSeenAt,
        createdAt: schema.users.createdAt,
        streakDays: schema.userStats.streakDays,
        confidence: schema.userStats.confidenceScore,
        subPlan: latest.plan,
      })
      .from(schema.users)
      .leftJoin(schema.userStats, eq(schema.userStats.userId, schema.users.id))
      .leftJoin(latest, and(eq(latest.userId, schema.users.id), eq(latest.rn, 1)));

  let listQuery = base().where(where).orderBy(orderClause(params)).$dynamic();
  if (!opts.all) {
    listQuery = listQuery.limit(PAGE_SIZE).offset((params.page - 1) * PAGE_SIZE);
  }

  const countQuery = d
    .select({ n: sql<number>`count(*)` })
    .from(schema.users)
    .leftJoin(latest, and(eq(latest.userId, schema.users.id), eq(latest.rn, 1)))
    .where(where);

  const [list, [{ n }]] = await Promise.all([listQuery, countQuery]);

  const rows: UserRow[] = list.map((r) => ({
    id: r.id,
    name: r.name,
    email: r.email,
    level: r.level,
    plan: planFromSub(r.subPlan),
    streakDays: r.streakDays ?? 0,
    confidence: r.confidence ?? 0,
    status: r.status as UserStatusKey,
    lastSeenAt: iso(r.lastSeenAt),
    createdAt: r.createdAt.toISOString(),
  }));

  return { rows, total: Number(n) };
}

/** Raw KPI counts for the stat cards (page.tsx applies display scaling). */
export async function fetchUserKpis(): Promise<{
  total: number;
  newToday: number;
  paying: number;
  churnRisk: number;
}> {
  const d = await db();
  const midnight = new Date();
  midnight.setHours(0, 0, 0, 0);

  const [[totalR], [newR], [payingR], [churnR]] = await Promise.all([
    d.select({ n: sql<number>`count(*)` }).from(schema.users),
    d
      .select({ n: sql<number>`count(*)` })
      .from(schema.users)
      .where(sql`${schema.users.createdAt} >= ${midnight}`),
    d
      .select({ n: sql<number>`count(distinct ${schema.subscriptions.userId})` })
      .from(schema.subscriptions)
      .where(
        and(
          or(eq(schema.subscriptions.status, 'active'), eq(schema.subscriptions.status, 'trialing')),
          sql`${schema.subscriptions.plan} <> 'free'`,
        ),
      ),
    d
      .select({ n: sql<number>`count(*)` })
      .from(schema.users)
      .where(eq(schema.users.status, 'churn_risk')),
  ]);

  return {
    total: Number(totalR.n),
    newToday: Number(newR.n),
    paying: Number(payingR.n),
    churnRisk: Number(churnR.n),
  };
}

/** Full profile for the detail drawer. */
export async function fetchUserDetail(id: string): Promise<UserDetail | null> {
  const d = await db();
  const [user] = await d.select().from(schema.users).where(eq(schema.users.id, id)).limit(1);
  if (!user) return null;

  const [[stats], subs, sessions] = await Promise.all([
    d.select().from(schema.userStats).where(eq(schema.userStats.userId, id)).limit(1),
    d
      .select()
      .from(schema.subscriptions)
      .where(eq(schema.subscriptions.userId, id))
      .orderBy(sql`${schema.subscriptions.startedAt} DESC`),
    d
      .select()
      .from(schema.learningSessions)
      .where(eq(schema.learningSessions.userId, id))
      .orderBy(sql`${schema.learningSessions.createdAt} DESC`)
      .limit(6),
  ]);

  const latest = subs[0] ?? null;
  const payments = latest
    ? await d
        .select({
          id: schema.payments.id,
          amountCents: schema.payments.amountCents,
          kind: schema.payments.kind,
          status: schema.payments.status,
          occurredAt: schema.payments.occurredAt,
          subscriptionId: schema.payments.subscriptionId,
        })
        .from(schema.payments)
        .innerJoin(
          schema.subscriptions,
          eq(schema.subscriptions.id, schema.payments.subscriptionId),
        )
        .where(eq(schema.subscriptions.userId, id))
        .orderBy(sql`${schema.payments.occurredAt} DESC`)
        .limit(12)
    : [];

  return {
    user: {
      id: user.id,
      name: user.displayName,
      email: user.email,
      level: user.level,
      locale: user.locale,
      platform: user.platform,
      country: user.country,
      status: user.status as UserStatusKey,
      createdAt: user.createdAt.toISOString(),
      lastSeenAt: iso(user.lastSeenAt),
    },
    stats: stats
      ? {
          streakDays: stats.streakDays,
          confidenceScore: stats.confidenceScore,
          sessionsTotal: stats.sessionsTotal,
          minutesTotal: stats.minutesTotal,
        }
      : null,
    subscription: latest
      ? {
          id: latest.id,
          plan: planFromSub(latest.plan),
          rawPlan: latest.plan,
          store: latest.store,
          status: latest.status,
          mrrCents: latest.mrrCents,
          startedAt: latest.startedAt.toISOString(),
          renewsAt: iso(latest.renewsAt),
        }
      : null,
    payments: payments.map((p) => ({
      id: p.id,
      amountCents: p.amountCents,
      kind: p.kind as 'charge' | 'refund',
      status: p.status,
      occurredAt: p.occurredAt.toISOString(),
    })),
    sessions: sessions.map((s) => ({
      id: s.id,
      scenario: s.scenario,
      durationS: s.durationS,
      confidence: s.confidence,
      mistakes: Array.isArray(s.mistakes) ? s.mistakes.map(String) : [],
      createdAt: s.createdAt.toISOString(),
    })),
  };
}
