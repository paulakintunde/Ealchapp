'use client';
// Topbar — serif section title from the pathname, ⌘K search affordance
// (opens the command palette) and the pulsing Production badge.
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { IC, NavIcon } from './icons';
import CommandPalette from './CommandPalette';
import styles from './Topbar.module.css';

const TITLES: Record<string, string> = {
  overview: 'Overview',
  users: 'Users',
  billing: 'Billing & revenue',
  notifications: 'Push notifications',
  content: 'Content',
  ai: 'AI model routing',
  performance: 'Performance',
  links: 'Link tracking',
  releases: 'Releases & flags',
};

export default function Topbar() {
  const pathname = usePathname();
  const [paletteOpen, setPaletteOpen] = useState(false);

  const section = pathname.split('/')[2] ?? 'overview';
  const title = TITLES[section] ?? 'Overview';

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className={styles.topbar}>
      <div className={styles.title}>{title}</div>
      <div className={styles.spacer} />
      <button
        type="button"
        className={styles.search}
        onClick={() => setPaletteOpen(true)}
      >
        <NavIcon d={IC.search} size={13} />
        <div className={styles.searchLabel}>Search users, content, links…</div>
        <div className={styles.kbd}>⌘K</div>
      </button>
      <div className={styles.badge}>
        <div className={styles.badgeDot} />
        Production
      </div>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}
