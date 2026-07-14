'use server';
// Billing mutations: refunds and dunning retries. Both are super_admin-only
// ('billing.write' — ops lacks it per the RBAC matrix).
import { revalidatePath } from 'next/cache';
import { asc, eq } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';
import { publish } from '@/lib/bus';
import { eur } from '@/lib/format';

type ActionResult = { ok: true } | { ok: false; error: string };
type RetryResult = { ok: true; recovered: number } | { ok: false; error: string };

function fail(e: unknown): { ok: false; error: string } {
  return { ok: false, error: e instanceof Error ? e.message : 'Something went wrong' };
}

// Full charge per plan at seeded pricing: Plus €5.99/mo, Pro €99/yr.
const FULL_CHARGE_CENTS = { monthly: 599, annual: 9900, free: 0 } as const;

/**
 * Refund a paid charge: inserts a `kind='refund'` payments row for the same
 * amount, marks the original charge `refunded`, and — when the refund covers
 * the plan's full charge — sets the subscription to `refunded`.
 */
export async function refundPayment(paymentId: string, reason: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'billing.write');
    const trimmed = reason.trim();
    if (!trimmed) return { ok: false, error: 'A refund reason is required' };

    const d = await db();
    const [row] = await d
      .select({
        payment: schema.payments,
        sub: schema.subscriptions,
        customer: schema.users.displayName,
      })
      .from(schema.payments)
      .innerJoin(schema.subscriptions, eq(schema.payments.subscriptionId, schema.subscriptions.id))
      .innerJoin(schema.users, eq(schema.subscriptions.userId, schema.users.id))
      .where(eq(schema.payments.id, paymentId))
      .limit(1);
    if (!row) return { ok: false, error: 'Payment not found' };
    const { payment, sub, customer } = row;
    if (payment.kind !== 'charge' || payment.status !== 'paid') {
      return { ok: false, error: 'Only paid charges can be refunded' };
    }

    const now = new Date();
    const isFull = payment.amountCents >= FULL_CHARGE_CENTS[sub.plan];

    await d.insert(schema.payments).values({
      subscriptionId: sub.id,
      amountCents: payment.amountCents,
      currency: payment.currency,
      kind: 'refund',
      status: 'refunded',
      occurredAt: now,
    });
    await d
      .update(schema.payments)
      .set({ status: 'refunded' })
      .where(eq(schema.payments.id, paymentId));
    if (isFull) {
      await d
        .update(schema.subscriptions)
        .set({ status: 'refunded', canceledAt: now })
        .where(eq(schema.subscriptions.id, sub.id));
    }

    await audit({
      adminId: session!.user.id,
      action: 'payment.refund',
      entityType: 'payment',
      entityId: paymentId,
      before: { status: payment.status, subscriptionStatus: sub.status },
      after: {
        status: 'refunded',
        amountCents: payment.amountCents,
        reason: trimmed,
        subscriptionStatus: isFull ? 'refunded' : sub.status,
      },
    });
    publish({ type: 'refund', text: `${eur(payment.amountCents)} refunded — ${customer}` });
    revalidatePath('/admin/billing');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

// The dunning batch: the 9 accounts the emails went out to (see the card copy).
const DUNNING_BATCH = 9;

/**
 * Retry all failed payments: a deterministic subset (first `DUNNING_BATCH`
 * past_due subscriptions by id) is charged successfully and flipped back to
 * `active`; the rest stay past_due for the next run.
 */
export async function retryDunning(): Promise<RetryResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'billing.write');

    const d = await db();
    const pastDue = await d
      .select({
        id: schema.subscriptions.id,
        plan: schema.subscriptions.plan,
      })
      .from(schema.subscriptions)
      .where(eq(schema.subscriptions.status, 'past_due'))
      .orderBy(asc(schema.subscriptions.id))
      .limit(DUNNING_BATCH);
    if (pastDue.length === 0) return { ok: false, error: 'No past-due subscriptions to retry' };

    const now = new Date();
    const DAY = 86_400_000;
    await d.insert(schema.payments).values(
      pastDue.map((s) => ({
        subscriptionId: s.id,
        amountCents: FULL_CHARGE_CENTS[s.plan],
        currency: 'EUR',
        kind: 'charge' as const,
        status: 'paid',
        occurredAt: now,
      })),
    );
    for (const s of pastDue) {
      await d
        .update(schema.subscriptions)
        .set({
          status: 'active',
          renewsAt: new Date(now.getTime() + (s.plan === 'annual' ? 365 : 30) * DAY),
        })
        .where(eq(schema.subscriptions.id, s.id));
    }

    await audit({
      adminId: session!.user.id,
      action: 'billing.retry_dunning',
      entityType: 'subscription',
      before: { status: 'past_due', ids: pastDue.map((s) => s.id) },
      after: { status: 'active', recovered: pastDue.length },
    });
    publish({ type: 'system', text: `Payment retry succeeded for ${pastDue.length} accounts` });
    revalidatePath('/admin/billing');
    return { ok: true, recovered: pastDue.length };
  } catch (e) {
    return fail(e);
  }
}
