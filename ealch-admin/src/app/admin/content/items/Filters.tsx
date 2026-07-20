'use client';
// Level + status + kind pill filters, plus a theme text box — URL-synced
// (?level=&status=&kind=&theme=&q=), same pattern as ../Filters.tsx.
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ITEM_LEVELS, ITEM_STATUSES, ITEM_KINDS, ITEM_STATUS_META, ITEM_KIND_LABEL } from './meta';
import styles from './items.module.css';

export default function Filters({
  level,
  status,
  kind,
  theme,
  q,
}: {
  level: string;
  status: string;
  kind: string;
  theme: string;
  q: string;
}) {
  const router = useRouter();
  const [themeInput, setThemeInput] = useState(theme);

  const apply = (next: { level?: string; status?: string; kind?: string; theme?: string; q?: string }) => {
    const params = new URLSearchParams();
    const merged = { level, status, kind, theme, q, ...next };
    if (merged.level) params.set('level', merged.level);
    if (merged.status) params.set('status', merged.status);
    if (merged.kind) params.set('kind', merged.kind);
    if (merged.theme) params.set('theme', merged.theme);
    if (merged.q) params.set('q', merged.q);
    const qs = params.toString();
    router.replace(qs ? `/admin/content/items?${qs}` : '/admin/content/items', { scroll: false });
  };

  return (
    <div className={styles.filters}>
      <button type="button" className={`${styles.pill} ${level === '' ? styles.pillActive : ''}`} onClick={() => apply({ level: '' })}>
        All levels
      </button>
      {ITEM_LEVELS.map((l) => (
        <button key={l} type="button" className={`${styles.pill} ${level === l ? styles.pillActive : ''}`} onClick={() => apply({ level: level === l ? '' : l })}>
          {l.toUpperCase()}
        </button>
      ))}

      <div className={styles.filterSep} />

      <button type="button" className={`${styles.pill} ${kind === '' ? styles.pillActive : ''}`} onClick={() => apply({ kind: '' })}>
        All kinds
      </button>
      {ITEM_KINDS.map((k) => (
        <button key={k} type="button" className={`${styles.pill} ${kind === k ? styles.pillActive : ''}`} onClick={() => apply({ kind: kind === k ? '' : k })}>
          {ITEM_KIND_LABEL[k]}
        </button>
      ))}

      <div className={styles.filterSep} />

      <button type="button" className={`${styles.pill} ${status === '' ? styles.pillActive : ''}`} onClick={() => apply({ status: '' })}>
        All statuses
      </button>
      {ITEM_STATUSES.map((s) => (
        <button key={s} type="button" className={`${styles.pill} ${status === s ? styles.pillActive : ''}`} onClick={() => apply({ status: status === s ? '' : s })}>
          {ITEM_STATUS_META[s].label}
        </button>
      ))}

      <div className={styles.filterSep} />

      <input
        className={styles.themeInput}
        placeholder="theme…"
        value={themeInput}
        onChange={(e) => setThemeInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') apply({ theme: themeInput.trim() });
        }}
        onBlur={() => apply({ theme: themeInput.trim() })}
      />

      {q && (
        <>
          <div className={styles.filterSep} />
          <button type="button" className={`${styles.pill} ${styles.pillActive}`} onClick={() => apply({ q: '' })} title="Clear search">
            &ldquo;{q}&rdquo; ✕
          </button>
        </>
      )}
    </div>
  );
}
