'use client';
// Small presentational pieces shared by the users table and detail drawer:
// initials avatar (rotating palette), plan / level / status chips.
import {
  AVATAR_PALETTE,
  initials,
  paletteIndex,
  type PlanKey,
  type UserStatusKey,
} from './types';
import styles from './bits.module.css';

export function Avatar({ id, name, size = 30 }: { id: string; name: string; size?: number }) {
  const [bg, fg] = AVATAR_PALETTE[paletteIndex(id)];
  return (
    <div
      className={styles.avatar}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        background: bg,
        color: fg,
        fontSize: size >= 38 ? 13 : 11,
      }}
      aria-hidden
    >
      {initials(name)}
    </div>
  );
}

const PLAN_LABEL: Record<PlanKey, string> = { pro: 'Pro', plus: 'Plus', free: 'Free' };

export function PlanChip({ plan }: { plan: PlanKey }) {
  return (
    <span className={`${styles.chip} ${styles[`plan_${plan}`]}`}>{PLAN_LABEL[plan]}</span>
  );
}

export function LevelChip({ level }: { level: string }) {
  return <span className={`${styles.chip} ${styles.level}`}>{level.toUpperCase()}</span>;
}

const STATUS_LABEL: Record<UserStatusKey, string> = {
  active: 'Active',
  trial: 'Trial',
  churn_risk: 'Churn risk',
  banned: 'Banned',
  deleted: 'Deleted',
};

export function StatusChip({ status }: { status: UserStatusKey }) {
  return (
    <span className={`${styles.status} ${styles[`st_${status}`]}`}>
      <span className={styles.dot} />
      {STATUS_LABEL[status]}
    </span>
  );
}
