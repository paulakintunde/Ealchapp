'use client';
// Kind + status pill filters, URL-synced (?kind=&status=&q=). The q param is
// fed by the ⌘K palette; when present it shows as a clearable pill.
import { useRouter } from 'next/navigation';
import { KINDS, STATUSES, KIND_META, STATUS_META } from './meta';
import styles from './content.module.css';

export default function Filters({
  kind,
  status,
  q,
}: {
  kind: string;
  status: string;
  q: string;
}) {
  const router = useRouter();

  const apply = (next: { kind?: string; status?: string; q?: string }) => {
    const params = new URLSearchParams();
    const merged = { kind, status, q, ...next };
    if (merged.kind) params.set('kind', merged.kind);
    if (merged.status) params.set('status', merged.status);
    if (merged.q) params.set('q', merged.q);
    const qs = params.toString();
    router.replace(qs ? `/admin/content?${qs}` : '/admin/content', { scroll: false });
  };

  return (
    <div className={styles.filters}>
      <button
        type="button"
        className={`${styles.pill} ${kind === '' ? styles.pillActive : ''}`}
        onClick={() => apply({ kind: '' })}
      >
        All kinds
      </button>
      {KINDS.map((k) => (
        <button
          key={k}
          type="button"
          className={`${styles.pill} ${kind === k ? styles.pillActive : ''}`}
          onClick={() => apply({ kind: kind === k ? '' : k })}
        >
          {KIND_META[k].label}
        </button>
      ))}

      <div className={styles.filterSep} />

      <button
        type="button"
        className={`${styles.pill} ${status === '' ? styles.pillActive : ''}`}
        onClick={() => apply({ status: '' })}
      >
        All statuses
      </button>
      {STATUSES.map((s) => (
        <button
          key={s}
          type="button"
          className={`${styles.pill} ${status === s ? styles.pillActive : ''}`}
          onClick={() => apply({ status: status === s ? '' : s })}
        >
          {STATUS_META[s].label}
        </button>
      ))}

      {q && (
        <>
          <div className={styles.filterSep} />
          <button
            type="button"
            className={`${styles.pill} ${styles.pillActive}`}
            onClick={() => apply({ q: '' })}
            title="Clear search"
          >
            &ldquo;{q}&rdquo; ✕
          </button>
        </>
      )}
    </div>
  );
}
