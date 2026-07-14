// Users screen — shared types & param helpers used by the RSC page, the
// /api/admin/users route handlers and the client table/drawer. Pure types +
// plain functions only (safe to import from either side).

export type PlanKey = 'pro' | 'plus' | 'free';
export type FilterKey = 'all' | 'pro' | 'plus' | 'free' | 'churn';
export type SortField = 'name' | 'streak' | 'confidence' | 'lastSeen';
export type SortDir = 'asc' | 'desc';
export type UserStatusKey = 'active' | 'trial' | 'churn_risk' | 'banned' | 'deleted';

export const PAGE_SIZE = 25;

export interface UsersParams {
  q: string;
  filter: FilterKey;
  page: number; // 1-based
  sort: SortField;
  dir: SortDir;
}

export const DEFAULT_PARAMS: UsersParams = {
  q: '',
  filter: 'all',
  page: 1,
  sort: 'lastSeen',
  dir: 'desc',
};

export interface UserRow {
  id: string;
  name: string;
  email: string;
  level: string; // a1…c2
  plan: PlanKey; // derived: annual→pro, monthly→plus, none/free→free
  streakDays: number;
  confidence: number;
  status: UserStatusKey;
  lastSeenAt: string | null; // ISO
  createdAt: string; // ISO
}

export interface UsersResponse {
  rows: UserRow[];
  total: number;
}

export interface UserDetail {
  user: {
    id: string;
    name: string;
    email: string;
    level: string;
    locale: string;
    platform: string;
    country: string | null;
    status: UserStatusKey;
    createdAt: string;
    lastSeenAt: string | null;
  };
  stats: {
    streakDays: number;
    confidenceScore: number;
    sessionsTotal: number;
    minutesTotal: number;
  } | null;
  subscription: {
    id: string;
    plan: PlanKey;
    rawPlan: string;
    store: string;
    status: string;
    mrrCents: number;
    startedAt: string;
    renewsAt: string | null;
  } | null;
  payments: {
    id: string;
    amountCents: number;
    kind: 'charge' | 'refund';
    status: string;
    occurredAt: string;
  }[];
  sessions: {
    id: string;
    scenario: string;
    durationS: number;
    confidence: number;
    mistakes: string[];
    createdAt: string;
  }[];
}

/** Rotating avatar palette from the mock: [bg, fg] pairs. */
export const AVATAR_PALETTE: readonly (readonly [string, string])[] = [
  ['#DCF3EE', '#0E7A6B'],
  ['#E4E8FB', '#3D55C8'],
  ['#F7E9DC', '#A5642A'],
  ['#EFE3F5', '#7C4A9E'],
];

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('');
}

/** Deterministic palette index so a user keeps their colour across pages. */
export function paletteIndex(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h % AVATAR_PALETTE.length;
}

export function planFromSub(plan: string | null | undefined): PlanKey {
  if (plan === 'annual') return 'pro';
  if (plan === 'monthly') return 'plus';
  return 'free';
}

const FILTERS: FilterKey[] = ['all', 'pro', 'plus', 'free', 'churn'];
const SORTS: SortField[] = ['name', 'streak', 'confidence', 'lastSeen'];

/**
 * Parse ?q=&filter=&page=&sort= into normalized params. `sort` encodes the
 * direction with a leading '-' for descending (e.g. `sort=-lastSeen`).
 */
export function parseUsersParams(sp: {
  [key: string]: string | string[] | undefined;
}): UsersParams {
  const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? '';
  const q = one(sp.q).slice(0, 200);
  const rawFilter = one(sp.filter) as FilterKey;
  const filter = FILTERS.includes(rawFilter) ? rawFilter : 'all';
  const page = Math.max(1, Math.floor(Number(one(sp.page)) || 1));
  let sortRaw = one(sp.sort);
  let dir: SortDir = 'asc';
  if (sortRaw.startsWith('-')) {
    dir = 'desc';
    sortRaw = sortRaw.slice(1);
  }
  let sort = sortRaw as SortField;
  if (!SORTS.includes(sort)) {
    sort = DEFAULT_PARAMS.sort;
    dir = DEFAULT_PARAMS.dir;
  }
  return { q, filter, page, sort, dir };
}

/** Serialize params to a query string, omitting defaults (shareable URLs). */
export function usersSearchString(p: UsersParams): string {
  const sp = new URLSearchParams();
  if (p.q) sp.set('q', p.q);
  if (p.filter !== 'all') sp.set('filter', p.filter);
  if (p.page > 1) sp.set('page', String(p.page));
  if (p.sort !== DEFAULT_PARAMS.sort || p.dir !== DEFAULT_PARAMS.dir) {
    sp.set('sort', `${p.dir === 'desc' ? '-' : ''}${p.sort}`);
  }
  return sp.toString();
}
