'use client';
// Sub-navigation for the /admin/content/* section. The sidebar's single
// "Content" entry fans out into this tab strip rather than growing into a
// dozen top-level sidebar rows as Workstream 3 adds routes phase by phase —
// each phase adds one more tab here, not a new Sidebar.tsx group.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './content.module.css';

const TABS: { href: string; label: string }[] = [
  { href: '/admin/content', label: 'Packs' },
  { href: '/admin/content/items', label: 'Items' },
  { href: '/admin/content/voiceflash', label: 'Voice Flash' },
  { href: '/admin/content/sentences', label: 'Sentences' },
  { href: '/admin/content/listen-write', label: 'La Dictée' },
  { href: '/admin/content/playlists', label: 'Playlists' },
  { href: '/admin/content/roleplay', label: 'Role Play' },
  { href: '/admin/content/den', label: 'The Den' },
  { href: '/admin/content/exams', label: 'Exams' },
  { href: '/admin/content/templates', label: 'Templates' },
  { href: '/admin/content/generate', label: 'Generate' },
  { href: '/admin/content/review', label: 'Review' },
  { href: '/admin/content/tags', label: 'Tags' },
  { href: '/admin/content/schedule', label: 'Schedule' },
];

export default function ContentTabs() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/admin/content' ? pathname === href : pathname.startsWith(href);

  return (
    <div className={styles.tabs}>
      {TABS.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          className={`${styles.tab} ${isActive(t.href) ? styles.tabActive : ''}`}
        >
          {t.label}
        </Link>
      ))}
    </div>
  );
}
