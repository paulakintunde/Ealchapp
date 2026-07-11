'use client';
// Sidebar — mock structure: logomark row, MONITOR/REVENUE/ENGAGE/PLATFORM nav
// groups, maintenance toggle, signed-in admin + sign out.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IC, NavIcon } from './icons';
import MaintenanceToggle from './MaintenanceToggle';
import { signOutAction } from '@/app/admin/actions';
import styles from './Sidebar.module.css';

const NAV_GROUPS: { label: string; items: { href: string; label: string; icon: string }[] }[] = [
  {
    label: 'MONITOR',
    items: [
      { href: '/admin/overview', label: 'Overview', icon: IC.home },
      { href: '/admin/users', label: 'Users', icon: IC.users },
      { href: '/admin/performance', label: 'Performance', icon: IC.pulse },
      { href: '/admin/links', label: 'Link tracking', icon: IC.link },
    ],
  },
  {
    label: 'REVENUE',
    items: [{ href: '/admin/billing', label: 'Billing', icon: IC.card }],
  },
  {
    label: 'ENGAGE',
    items: [
      { href: '/admin/notifications', label: 'Notifications', icon: IC.bell },
      { href: '/admin/content', label: 'Content', icon: IC.doc },
    ],
  },
  {
    label: 'PLATFORM',
    items: [
      { href: '/admin/ai', label: 'AI models', icon: IC.spark },
      { href: '/admin/releases', label: 'Releases & flags', icon: IC.rocket },
    ],
  },
];

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join('');
}

export default function Sidebar({
  user,
  maintenanceOn,
  canMaintenance,
}: {
  user: { name: string; roleLabel: string };
  maintenanceOn: boolean;
  canMaintenance: boolean;
}) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className={styles.sidebar}>
      <div className={styles.brand}>
        <div className={styles.logomark}>E.</div>
        <div>
          <div className={styles.wordmark}>EALCH</div>
          <div className={styles.wordmarkSub}>OPS CONSOLE</div>
        </div>
      </div>

      <nav className={styles.nav}>
        {NAV_GROUPS.map((grp) => (
          <div key={grp.label}>
            <div className={styles.groupLabel}>{grp.label}</div>
            <div className={styles.groupItems}>
              {grp.items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className={`${styles.item} ${isActive(it.href) ? styles.itemActive : ''}`}
                >
                  <NavIcon d={it.icon} />
                  <div className={styles.itemLabel}>{it.label}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className={styles.maintRow}>
        <div className={styles.maintText}>
          <div className={styles.maintTitle}>Maintenance mode</div>
          <div className={styles.maintSub}>
            {maintenanceOn ? 'Clients see downtime screen' : 'App is live'}
          </div>
        </div>
        <MaintenanceToggle on={maintenanceOn} canToggle={canMaintenance} />
      </div>

      <div className={styles.userRow}>
        <div className={styles.avatar}>{initials(user.name)}</div>
        <div className={styles.userMeta}>
          <div className={styles.userName}>{user.name}</div>
          <div className={styles.userRole}>{user.roleLabel}</div>
        </div>
        <form action={signOutAction}>
          <button className={styles.signOut} type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
