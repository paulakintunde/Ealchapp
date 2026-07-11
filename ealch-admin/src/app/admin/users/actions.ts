'use server';
// Users screen mutations — every action: auth() → assertCan('users.act') →
// mutate via drizzle → audit(before/after) → publish bus event where sensible
// → revalidatePath('/admin/users') → { ok }.
import { revalidatePath } from 'next/cache';
import { eq, sql } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';
import { publish } from '@/lib/bus';

type ActionResult = { ok: true } | { ok: false; error: string };
type ExportResult =
  | { ok: true; filename: string; json: string }
  | { ok: false; error: string };

function fail(e: unknown): { ok: false; error: string } {
  return { ok: false, error: e instanceof Error ? e.message : 'Something went wrong' };
}

const DAY_MS = 24 * 60 * 60 * 1000;

async function gate() {
  const session = await auth();
  assertCan(session?.user.role, 'users.act');
  return session!.user.id;
}

async function getUser(userId: string) {
  const d = await db();
  const [user] = await d.select().from(schema.users).where(eq(schema.users.id, userId)).limit(1);
  return { d, user };
}

/**
 * Grant a free month: extends the latest subscription's renewsAt by 30 days,
 * or creates a €0 comp subscription when the user has none.
 */
export async function grantFreeMonth(userId: string): Promise<ActionResult> {
  try {
    const adminId = await gate();
    const { d, user } = await getUser(userId);
    if (!user) return { ok: false, error: 'User not found' };

    const [latest] = await d
      .select()
      .from(schema.subscriptions)
      .where(eq(schema.subscriptions.userId, userId))
      .orderBy(sql`${schema.subscriptions.startedAt} DESC`)
      .limit(1);

    if (latest) {
      const base = latest.renewsAt && latest.renewsAt > new Date() ? latest.renewsAt : new Date();
      const renewsAt = new Date(base.getTime() + 30 * DAY_MS);
      await d
        .update(schema.subscriptions)
        .set({ renewsAt })
        .where(eq(schema.subscriptions.id, latest.id));
      await audit({
        adminId,
        action: 'user.grant_free_month',
        entityType: 'subscription',
        entityId: latest.id,
        before: { renewsAt: latest.renewsAt?.toISOString() ?? null },
        after: { renewsAt: renewsAt.toISOString() },
      });
    } else {
      const renewsAt = new Date(Date.now() + 30 * DAY_MS);
      const [created] = await d
        .insert(schema.subscriptions)
        .values({
          userId,
          plan: 'monthly',
          store: 'stripe',
          status: 'active',
          mrrCents: 0, // comp — no revenue
          renewsAt,
        })
        .returning({ id: schema.subscriptions.id });
      await audit({
        adminId,
        action: 'user.grant_free_month',
        entityType: 'subscription',
        entityId: created.id,
        before: null,
        after: { plan: 'monthly', mrrCents: 0, comp: true, renewsAt: renewsAt.toISOString() },
      });
    }

    publish({ type: 'subscription', text: `Support granted ${user.email} a free month` });
    revalidatePath('/admin/users');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

/** Send a reset-password email (demo no-op — audited only). */
export async function sendResetPassword(userId: string): Promise<ActionResult> {
  try {
    const adminId = await gate();
    const { user } = await getUser(userId);
    if (!user) return { ok: false, error: 'User not found' };

    // No real mailer in this console — the audit trail is the deliverable.
    await audit({
      adminId,
      action: 'user.reset_password_sent',
      entityType: 'user',
      entityId: userId,
      before: null,
      after: { email: user.email },
    });
    revalidatePath('/admin/users');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

/** Ban (or unban) a user — flips status between banned and active. */
export async function setBanned(userId: string, banned: boolean): Promise<ActionResult> {
  try {
    const adminId = await gate();
    const { d, user } = await getUser(userId);
    if (!user) return { ok: false, error: 'User not found' };
    if (user.status === 'deleted') return { ok: false, error: 'User is deleted' };

    const next = banned ? 'banned' : 'active';
    if (user.status === next) return { ok: true };

    await d.update(schema.users).set({ status: next }).where(eq(schema.users.id, userId));
    await audit({
      adminId,
      action: banned ? 'user.ban' : 'user.unban',
      entityType: 'user',
      entityId: userId,
      before: { status: user.status },
      after: { status: next },
    });
    publish({
      type: 'system',
      text: banned ? `User ${user.email} was banned` : `User ${user.email} was unbanned`,
    });
    revalidatePath('/admin/users');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

/** GDPR export — returns every row we hold about the user as a JSON string. */
export async function gdprExport(userId: string): Promise<ExportResult> {
  try {
    const adminId = await gate();
    const { d, user } = await getUser(userId);
    if (!user) return { ok: false, error: 'User not found' };

    const subs = await d
      .select()
      .from(schema.subscriptions)
      .where(eq(schema.subscriptions.userId, userId));
    const [stats, payments, sessions, events, sends] = await Promise.all([
      d.select().from(schema.userStats).where(eq(schema.userStats.userId, userId)),
      subs.length
        ? d
            .select({
              id: schema.payments.id,
              subscriptionId: schema.payments.subscriptionId,
              amountCents: schema.payments.amountCents,
              currency: schema.payments.currency,
              kind: schema.payments.kind,
              status: schema.payments.status,
              occurredAt: schema.payments.occurredAt,
            })
            .from(schema.payments)
            .innerJoin(
              schema.subscriptions,
              eq(schema.subscriptions.id, schema.payments.subscriptionId),
            )
            .where(eq(schema.subscriptions.userId, userId))
        : Promise.resolve([]),
      d.select().from(schema.learningSessions).where(eq(schema.learningSessions.userId, userId)),
      d.select().from(schema.events).where(eq(schema.events.userId, userId)),
      d.select().from(schema.notifSends).where(eq(schema.notifSends.userId, userId)),
    ]);

    const payload = {
      exportedAt: new Date().toISOString(),
      user,
      stats,
      subscriptions: subs,
      payments,
      learningSessions: sessions,
      events,
      notificationSends: sends,
    };

    await audit({
      adminId,
      action: 'user.gdpr_export',
      entityType: 'user',
      entityId: userId,
      before: null,
      after: { email: user.email, rows: { subscriptions: subs.length, payments: payments.length, sessions: sessions.length, events: events.length } },
    });
    revalidatePath('/admin/users');
    return {
      ok: true,
      filename: `gdpr-export-${user.email.replace(/[^a-z0-9.@_-]/gi, '_')}.json`,
      json: JSON.stringify(payload, null, 2),
    };
  } catch (e) {
    return fail(e);
  }
}

/** Soft-delete: sets status 'deleted' (rows retained for audit/GDPR). */
export async function deleteUser(userId: string): Promise<ActionResult> {
  try {
    const adminId = await gate();
    const { d, user } = await getUser(userId);
    if (!user) return { ok: false, error: 'User not found' };
    if (user.status === 'deleted') return { ok: true };

    await d.update(schema.users).set({ status: 'deleted' }).where(eq(schema.users.id, userId));
    await audit({
      adminId,
      action: 'user.delete',
      entityType: 'user',
      entityId: userId,
      before: { status: user.status },
      after: { status: 'deleted' },
    });
    publish({ type: 'system', text: `User ${user.email} was deleted (soft)` });
    revalidatePath('/admin/users');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}
