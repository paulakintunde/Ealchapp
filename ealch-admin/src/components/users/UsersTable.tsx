'use client';
// Users table — TanStack Table over server-filtered data. All state (search,
// filter pills, page, sort) lives in the URL (?q=&filter=&page=&sort=) so
// views are shareable; the server does the actual filtering via
// /api/admin/users and this component just renders one page.
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { relTime } from '@/lib/format';
import { Avatar, LevelChip, PlanChip, StatusChip } from './bits';
import UserDrawer from './UserDrawer';
import {
  DEFAULT_PARAMS,
  PAGE_SIZE,
  parseUsersParams,
  usersSearchString,
  type FilterKey,
  type SortField,
  type UserRow,
  type UsersParams,
  type UsersResponse,
} from './types';
import styles from './UsersTable.module.css';

const FILTER_PILLS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'pro', label: 'Pro' },
  { key: 'plus', label: 'Plus' },
  { key: 'free', label: 'Free' },
  { key: 'churn', label: 'Churn risk' },
];

const nf = new Intl.NumberFormat('en-IE');
const col = createColumnHelper<UserRow>();

async function fetchUsers(qs: string): Promise<UsersResponse> {
  const res = await fetch(`/api/admin/users${qs ? `?${qs}` : ''}`);
  if (!res.ok) throw new Error(`Failed to load users (${res.status})`);
  return res.json();
}

export default function UsersTable({
  initialParams,
  initialData,
  canAct,
}: {
  initialParams: UsersParams;
  initialData: UsersResponse;
  canAct: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // URL is the source of truth for table state.
  const params = useMemo(
    () => parseUsersParams(Object.fromEntries(searchParams.entries())),
    [searchParams],
  );
  const qs = usersSearchString(params);
  const initialQs = usersSearchString(initialParams);

  const { data, isError, isFetching, refetch } = useQuery<UsersResponse>({
    queryKey: ['admin-users', qs],
    queryFn: () => fetchUsers(qs),
    // Server-rendered page already fetched this exact view — hydrate it.
    initialData: qs === initialQs ? initialData : undefined,
    placeholderData: keepPreviousData,
  });

  // Latest params in a ref so debounced/queued updates never apply a stale
  // snapshot (e.g. typing, then clicking a filter pill within 300ms).
  const paramsRef = useRef(params);
  useEffect(() => {
    paramsRef.current = params;
  }, [params]);

  const setParams = useCallback(
    (patch: Partial<UsersParams>) => {
      const next = { ...paramsRef.current, ...patch };
      paramsRef.current = next;
      const s = usersSearchString(next);
      router.replace(`${pathname}${s ? `?${s}` : ''}`, { scroll: false });
    },
    [pathname, router],
  );

  // Debounced (300ms) search input, synced back when the URL changes
  // externally (e.g. ⌘K palette navigates to /admin/users?q=<email>).
  const [search, setSearch] = useState(params.q);
  useEffect(() => setSearch(params.q), [params.q]);
  useEffect(() => {
    if (search === params.q) return;
    const t = setTimeout(() => setParams({ q: search, page: 1 }), 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const toggleSort = useCallback(
    (field: SortField) => {
      if (params.sort === field) {
        setParams({ dir: params.dir === 'asc' ? 'desc' : 'asc', page: 1 });
      } else {
        setParams({ sort: field, dir: field === 'name' ? 'asc' : 'desc', page: 1 });
      }
    },
    [params.dir, params.sort, setParams],
  );

  const columns = useMemo(
    () => [
      col.accessor('name', {
        id: 'name',
        header: 'User',
        cell: (info) => {
          const u = info.row.original;
          return (
            <div className={styles.userCell}>
              <Avatar id={u.id} name={u.name} />
              <div className={styles.userMeta}>
                <div className={styles.userName}>{u.name}</div>
                <div className={styles.userEmail}>{u.email}</div>
              </div>
            </div>
          );
        },
      }),
      col.accessor('level', {
        id: 'level',
        header: 'Level',
        cell: (info) => <LevelChip level={info.getValue()} />,
      }),
      col.accessor('plan', {
        id: 'plan',
        header: 'Plan',
        cell: (info) => <PlanChip plan={info.getValue()} />,
      }),
      col.accessor('streakDays', {
        id: 'streak',
        header: 'Streak',
        cell: (info) => <span className={styles.num}>{info.getValue()} d</span>,
      }),
      col.accessor('confidence', {
        id: 'confidence',
        header: 'Confidence',
        cell: (info) => (
          <span className={styles.confidence}>
            <span className={styles.confidenceBar}>
              <span
                className={styles.confidenceFill}
                style={{ width: `${Math.min(100, Math.max(0, info.getValue()))}%` }}
              />
            </span>
            <span className={styles.num}>{info.getValue()}</span>
          </span>
        ),
      }),
      col.accessor('status', {
        id: 'status',
        header: 'Status',
        cell: (info) => <StatusChip status={info.getValue()} />,
      }),
      col.accessor('lastSeenAt', {
        id: 'lastSeen',
        header: 'Last seen',
        cell: (info) => {
          const v = info.getValue();
          return (
            <span className={styles.seen} suppressHydrationWarning>
              {v ? relTime(new Date(v)) : '—'}
            </span>
          );
        },
      }),
    ],
    [],
  );

  const rows = data?.rows ?? [];
  const total = data?.total ?? 0;
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    manualPagination: true,
    manualFiltering: true,
    pageCount,
  });

  const SORTABLE: Record<string, SortField> = {
    name: 'name',
    streak: 'streak',
    confidence: 'confidence',
    lastSeen: 'lastSeen',
  };

  const [openUserId, setOpenUserId] = useState<string | null>(null);
  const hasFilters = params.q !== '' || params.filter !== 'all';

  return (
    <div className={styles.card}>
      <div className={styles.toolbar}>
        <div className={styles.pills} role="tablist" aria-label="Plan filter">
          {FILTER_PILLS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={params.filter === f.key}
              className={`${styles.pill} ${params.filter === f.key ? styles.pillActive : ''}`}
              onClick={() => setParams({ filter: f.key, page: 1 })}
            >
              {f.label}
            </button>
          ))}
        </div>
        <input
          className={styles.search}
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search name or email…"
          aria-label="Search users"
        />
        <div className={styles.spacer} />
        <div className={styles.count} aria-live="polite">
          {isFetching && !data ? 'Loading…' : `${nf.format(rows.length)} of ${nf.format(total)} shown`}
        </div>
        <a
          className={styles.export}
          href={`/api/admin/users/export${qs ? `?${qs}` : ''}`}
        >
          Export CSV
        </a>
      </div>

      {isError ? (
        <div className={styles.emptyWrap}>
          <div className={styles.emptyTitle}>Couldn’t load users</div>
          <button type="button" className={styles.emptyBtn} onClick={() => refetch()}>
            Retry
          </button>
        </div>
      ) : rows.length === 0 ? (
        <div className={styles.emptyWrap}>
          <div className={styles.emptyIcon} aria-hidden>
            ⌀
          </div>
          <div className={styles.emptyTitle}>No users match — clear filters</div>
          <button
            type="button"
            className={styles.emptyBtn}
            onClick={() => {
              setSearch('');
              setParams({ ...DEFAULT_PARAMS });
            }}
            disabled={!hasFilters}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <table className={styles.table}>
            <thead>
              {table.getHeaderGroups().map((hg) => (
                <tr key={hg.id} className={styles.headRow}>
                  {hg.headers.map((h) => {
                    const field = SORTABLE[h.column.id];
                    const active = field && params.sort === field;
                    return (
                      <th
                        key={h.id}
                        className={styles.th}
                        aria-sort={
                          active ? (params.dir === 'asc' ? 'ascending' : 'descending') : undefined
                        }
                      >
                        {field ? (
                          <button
                            type="button"
                            className={`${styles.thBtn} ${active ? styles.thActive : ''}`}
                            onClick={() => toggleSort(field)}
                          >
                            {flexRender(h.column.columnDef.header, h.getContext())}
                            <span className={styles.sortArrow} aria-hidden>
                              {active ? (params.dir === 'asc' ? '↑' : '↓') : ''}
                            </span>
                          </button>
                        ) : (
                          flexRender(h.column.columnDef.header, h.getContext())
                        )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody className={isFetching && data ? styles.refetching : undefined}>
              {table.getRowModel().rows.map((r) => (
                <tr
                  key={r.original.id}
                  className={styles.row}
                  tabIndex={0}
                  onClick={() => setOpenUserId(r.original.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setOpenUserId(r.original.id);
                  }}
                >
                  {r.getVisibleCells().map((c) => (
                    <td key={c.id} className={styles.td}>
                      {flexRender(c.column.columnDef.cell, c.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.pager}>
            <button
              type="button"
              className={styles.pageBtn}
              disabled={params.page <= 1}
              onClick={() => setParams({ page: params.page - 1 })}
            >
              ‹ Prev
            </button>
            <span className={styles.pageInfo}>
              Page {nf.format(Math.min(params.page, pageCount))} of {nf.format(pageCount)}
            </span>
            <button
              type="button"
              className={styles.pageBtn}
              disabled={params.page >= pageCount}
              onClick={() => setParams({ page: params.page + 1 })}
            >
              Next ›
            </button>
          </div>
        </>
      )}

      {openUserId ? (
        <UserDrawer userId={openUserId} canAct={canAct} onClose={() => setOpenUserId(null)} />
      ) : null}
    </div>
  );
}
