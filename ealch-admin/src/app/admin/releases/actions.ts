'use server';
// Releases & flags mutations — staged rollout lifecycle, halt, flag updates.
import { revalidatePath } from 'next/cache';
import { and, eq, inArray, ne } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { assertCan } from '@/lib/rbac';
import { audit } from '@/lib/audit';
import { publish } from '@/lib/bus';

type ActionResult = { ok: true } | { ok: false; error: string };

function fail(e: unknown): { ok: false; error: string } {
  return { ok: false, error: e instanceof Error ? e.message : 'Something went wrong' };
}

export type FlagEnvName = 'prod' | 'staging';
export type FlagEnvValue = boolean | { pct: number };
export type FlagEnvironments = Record<FlagEnvName, FlagEnvValue>;

/**
 * Set the rollout percentage of a release, enforcing the staged→rolling→
 * complete lifecycle (0 → staged, 1–99 → rolling, 100 → complete).
 * With `allPlatforms`, applies to every platform row of the same version
 * (the big step buttons); otherwise only the given release (mini sliders).
 */
export async function setRollout(
  releaseId: string,
  rawPct: number,
  allPlatforms = false,
): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'releases.write');
    const pct = Math.round(rawPct);
    if (!Number.isFinite(pct) || pct < 0 || pct > 100) {
      return { ok: false, error: 'Rollout must be between 0 and 100' };
    }

    const d = await db();
    const [release] = await d
      .select()
      .from(schema.releases)
      .where(eq(schema.releases.id, releaseId))
      .limit(1);
    if (!release) return { ok: false, error: 'Release not found' };

    const rows = allPlatforms
      ? await d
          .select()
          .from(schema.releases)
          .where(eq(schema.releases.version, release.version))
      : [release];

    const status = pct === 100 ? ('complete' as const) : pct > 0 ? ('rolling' as const) : ('staged' as const);

    await d
      .update(schema.releases)
      .set({ rolloutPct: pct, status })
      .where(inArray(schema.releases.id, rows.map((r) => r.id)));

    for (const r of rows) {
      await audit({
        adminId: session!.user.id,
        action: 'release.rollout_update',
        entityType: 'release',
        entityId: r.version,
        before: { platform: r.platform, rolloutPct: r.rolloutPct, status: r.status },
        after: { platform: r.platform, rolloutPct: pct, status },
      });
    }
    publish({ type: 'system', text: `${release.version} rollout → ${pct}%` });
    revalidatePath('/admin/releases');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

/** Halt an in-progress rollout — status 'halted', percentage untouched. */
export async function haltRollout(releaseId: string): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'releases.write');

    const d = await db();
    const [release] = await d
      .select()
      .from(schema.releases)
      .where(eq(schema.releases.id, releaseId))
      .limit(1);
    if (!release) return { ok: false, error: 'Release not found' };

    const rows = await d
      .select()
      .from(schema.releases)
      .where(
        and(
          eq(schema.releases.version, release.version),
          ne(schema.releases.status, 'complete'),
        ),
      );
    if (rows.length === 0) return { ok: false, error: 'Nothing to halt' };

    await d
      .update(schema.releases)
      .set({ status: 'halted' })
      .where(inArray(schema.releases.id, rows.map((r) => r.id)));

    for (const r of rows) {
      await audit({
        adminId: session!.user.id,
        action: 'release.halt',
        entityType: 'release',
        entityId: r.version,
        before: { platform: r.platform, rolloutPct: r.rolloutPct, status: r.status },
        after: { platform: r.platform, rolloutPct: r.rolloutPct, status: 'halted' },
      });
    }
    publish({
      type: 'incident',
      text: `${release.version} rollout halted at ${release.rolloutPct}%`,
    });
    revalidatePath('/admin/releases');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

/**
 * Update a feature flag's value for one environment (prod or staging).
 * Boolean flags take a boolean, percentage flags a 0–100 number. The
 * top-level `value` column mirrors prod.
 */
export async function updateFlag(
  id: string,
  input: { environment: FlagEnvName; value: boolean | number },
): Promise<ActionResult> {
  try {
    const session = await auth();
    assertCan(session?.user.role, 'flags.write');

    if (input.environment !== 'prod' && input.environment !== 'staging') {
      return { ok: false, error: 'Unknown environment' };
    }

    const d = await db();
    const [flag] = await d
      .select()
      .from(schema.featureFlags)
      .where(eq(schema.featureFlags.id, id))
      .limit(1);
    if (!flag) return { ok: false, error: 'Flag not found' };

    let envValue: FlagEnvValue;
    let label: string;
    if (flag.kind === 'boolean') {
      if (typeof input.value !== 'boolean') {
        return { ok: false, error: 'Boolean flag needs an on/off value' };
      }
      envValue = input.value;
      label = input.value ? 'on' : 'off';
    } else {
      const pct = Math.round(Number(input.value));
      if (!Number.isFinite(pct) || pct < 0 || pct > 100) {
        return { ok: false, error: 'Percentage must be between 0 and 100' };
      }
      envValue = { pct };
      label = `${pct}%`;
    }

    const oldEnvs = (flag.environments ?? {}) as FlagEnvironments;
    const newEnvs: FlagEnvironments = { ...oldEnvs, [input.environment]: envValue };
    const newValue = input.environment === 'prod' ? envValue : flag.value;

    await d
      .update(schema.featureFlags)
      .set({
        environments: newEnvs,
        value: newValue,
        updatedBy: session!.user.id,
        updatedAt: new Date(),
      })
      .where(eq(schema.featureFlags.id, id));

    await audit({
      adminId: session!.user.id,
      action: 'flag.update',
      entityType: 'feature_flag',
      entityId: flag.key,
      before: { value: flag.value, environments: oldEnvs },
      after: { value: newValue, environments: newEnvs },
    });
    publish({
      type: 'system',
      text: `Flag ${flag.key} → ${label} (${input.environment})`,
    });
    revalidatePath('/admin/releases');
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}
