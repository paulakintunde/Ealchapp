'use client';
// ⌘K command palette — debounced /api/search lookup, grouped results,
// full keyboard navigation (↑↓ Enter Esc), focus-trapped in the input.
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import styles from './CommandPalette.module.css';

interface SearchResults {
  users: { id: string; name: string; email: string }[];
  content: { id: string; title: string; slug: string }[];
  links: { id: string; slug: string }[];
  nav: { label: string; href: string }[];
}

interface Item {
  key: string;
  group: 'Users' | 'Content' | 'Links' | 'Navigate';
  primary: string;
  secondary?: string;
  href: string;
}

const EMPTY: SearchResults = { users: [], content: [], links: [], nav: [] };

function useDebounced<T>(value: T, ms: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return debounced;
}

export default function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [q, setQ] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedQ = useDebounced(q, 200);

  const { data } = useQuery<SearchResults>({
    queryKey: ['palette-search', debouncedQ],
    queryFn: async () => {
      const res = await fetch(`/api/search?q=${encodeURIComponent(debouncedQ)}`);
      if (!res.ok) throw new Error('Search failed');
      return res.json();
    },
    enabled: open,
    placeholderData: (prev) => prev,
  });

  const results = data ?? EMPTY;

  const items = useMemo<Item[]>(() => {
    const out: Item[] = [];
    for (const u of results.users) {
      out.push({
        key: `u-${u.id}`,
        group: 'Users',
        primary: u.name,
        secondary: u.email,
        href: `/admin/users?q=${encodeURIComponent(u.email)}`,
      });
    }
    for (const c of results.content) {
      out.push({
        key: `c-${c.id}`,
        group: 'Content',
        primary: c.title,
        secondary: c.slug,
        href: `/admin/content?q=${encodeURIComponent(c.slug)}`,
      });
    }
    for (const l of results.links) {
      out.push({
        key: `l-${l.id}`,
        group: 'Links',
        primary: `/l/${l.slug}`,
        href: `/admin/links?q=${encodeURIComponent(l.slug)}`,
      });
    }
    for (const n of results.nav) {
      out.push({
        key: `n-${n.href}`,
        group: 'Navigate',
        primary: n.label,
        href: n.href,
      });
    }
    return out;
  }, [results]);

  // Reset on open, keep focus in the input (focus trap).
  useEffect(() => {
    if (open) {
      setQ('');
      setSelected(0);
      const t = setTimeout(() => inputRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [debouncedQ]);

  if (!open) return null;

  const go = (item: Item) => {
    onClose();
    router.push(item.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, Math.max(items.length - 1, 0)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = items[selected];
      if (item) go(item);
    } else if (e.key === 'Tab') {
      // Trap focus — the input is the only focus target.
      e.preventDefault();
      inputRef.current?.focus();
    }
  };

  let lastGroup: string | null = null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.palette}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <input
          ref={inputRef}
          className={styles.input}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search users, content, links…"
          onBlur={() => {
            // Focus trap: never let focus escape while open.
            inputRef.current?.focus();
          }}
        />
        <div className={styles.results}>
          {items.length === 0 ? (
            <div className={styles.empty}>No results</div>
          ) : (
            items.map((item, i) => {
              const showHeader = item.group !== lastGroup;
              lastGroup = item.group;
              return (
                <div key={item.key}>
                  {showHeader ? (
                    <div className={styles.groupHeader}>{item.group}</div>
                  ) : null}
                  <div
                    className={`${styles.item} ${i === selected ? styles.itemSelected : ''}`}
                    onMouseEnter={() => setSelected(i)}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      go(item);
                    }}
                  >
                    <div className={styles.itemPrimary}>{item.primary}</div>
                    {item.secondary ? (
                      <div className={styles.itemSecondary}>{item.secondary}</div>
                    ) : null}
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className={styles.footer}>
          <span className={styles.hint}>↑↓ navigate</span>
          <span className={styles.hint}>↵ open</span>
          <span className={styles.hint}>esc close</span>
        </div>
      </div>
    </div>
  );
}
