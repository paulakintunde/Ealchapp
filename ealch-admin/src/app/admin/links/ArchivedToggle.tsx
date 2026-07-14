'use client';
// URL-synced pill toggling ?archived=1 (archived rows shown dimmed).
import { useRouter } from 'next/navigation';
import styles from './links.module.css';

export default function ArchivedToggle({
  showArchived,
  q,
}: {
  showArchived: boolean;
  q: string;
}) {
  const router = useRouter();

  const toggle = () => {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (!showArchived) params.set('archived', '1');
    const qs = params.toString();
    router.replace(`/admin/links${qs ? `?${qs}` : ''}`);
  };

  return (
    <button
      type="button"
      className={`${styles.pill} ${showArchived ? styles.pillActive : ''}`}
      onClick={toggle}
      aria-pressed={showArchived}
    >
      Show archived
    </button>
  );
}
