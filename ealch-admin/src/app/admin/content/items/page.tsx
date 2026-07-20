// Items — the first-ever admin list for content_items. Filterable by level/
// status/theme/kind, URL-synced like ../page.tsx's pack list.
import Link from 'next/link';
import { and, desc, eq, ilike, or, type SQL } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { can } from '@/lib/rbac';
import { relTime } from '@/lib/format';
import {
  ITEM_KIND_LABEL, ITEM_STATUS_META, chipStyle, isItemKind, isItemStatus, isItemLevel,
} from './meta';
import Filters from './Filters';
import NewItemButton from './NewItemButton';
import styles from './items.module.css';

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: Promise<{ level?: string; status?: string; kind?: string; theme?: string; q?: string }>;
}) {
  const [{ level, status, kind, theme, q }, session] = await Promise.all([searchParams, auth()]);
  const role = session?.user.role;
  const canWrite = can(role, 'content.write');

  const d = await db();
  const it = schema.contentItems;

  const filters: SQL[] = [];
  if (isItemLevel(level)) filters.push(eq(it.level, level));
  if (isItemStatus(status)) filters.push(eq(it.status, status));
  if (isItemKind(kind)) filters.push(eq(it.kind, kind));
  const themeQ = theme?.trim();
  if (themeQ) filters.push(eq(it.theme, themeQ));
  const query = q?.trim();
  if (query) {
    const like = or(ilike(it.fr, `%${query}%`), ilike(it.en, `%${query}%`), ilike(it.id, `%${query}%`));
    if (like) filters.push(like);
  }

  const items = await d
    .select({
      id: it.id, kind: it.kind, level: it.level, theme: it.theme, fr: it.fr, en: it.en,
      drills: it.drills, status: it.status, updatedAt: it.updatedAt,
    })
    .from(it)
    .where(filters.length ? and(...filters) : undefined)
    .orderBy(desc(it.updatedAt))
    .limit(200);

  const hasFilters = Boolean(isItemLevel(level) || isItemStatus(status) || isItemKind(kind) || themeQ || query);

  return (
    <div className={styles.wrap}>
      <section className={`${styles.card} ${styles.tableCard}`}>
        <div className={styles.cardHead}>
          <div>
            <div className={styles.cardTitle}>Items</div>
            <div className={styles.cardSub}>The atomic corpus — words, phrases, sentences</div>
          </div>
          <div className={styles.spacer} />
          {canWrite && <NewItemButton className={styles.newBtn} />}
        </div>

        <Filters
          level={isItemLevel(level) ? level : ''}
          status={isItemStatus(status) ? status : ''}
          kind={isItemKind(kind) ? kind : ''}
          theme={themeQ ?? ''}
          q={query ?? ''}
        />

        <div className={styles.thead}>
          <div>Item</div>
          <div>Kind</div>
          <div>Level</div>
          <div>Theme</div>
          <div>Drills</div>
          <div>Status</div>
          <div>Updated</div>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyLine}>
              {hasFilters ? 'No items match these filters' : 'No items yet'}
            </div>
            <div className={styles.emptyHint}>
              {hasFilters ? 'Try clearing a filter.' : 'Create the first item to get started.'}
            </div>
            {canWrite && !hasFilters && <NewItemButton className={styles.newBtn} />}
          </div>
        ) : (
          items.map((item) => (
            <Link key={item.id} href={`/admin/content/items/${item.id}`} className={styles.row}>
              <div>
                <div className={styles.itemFr}>{item.fr || <span className={styles.blank}>(empty)</span>}</div>
                <div className={styles.itemSub}>{item.id} · {item.en || '—'}</div>
              </div>
              <div className={styles.kind}>{ITEM_KIND_LABEL[item.kind]}</div>
              <div className={styles.level}>{item.level.toUpperCase()}</div>
              <div className={styles.theme}>{item.theme}</div>
              <div className={styles.drillCount}>{item.drills.length}</div>
              <div>
                <span
                  className={`${styles.chip} ${item.status === 'archived' ? styles.chipStrike : ''}`}
                  style={chipStyle(ITEM_STATUS_META[item.status].color)}
                >
                  {ITEM_STATUS_META[item.status].label}
                </span>
              </div>
              <div className={styles.updated}>{relTime(item.updatedAt)}</div>
            </Link>
          ))
        )}
        {items.length === 200 && (
          <div className={styles.moreHint}>Showing the first 200 — narrow with a filter to see more.</div>
        )}
      </section>
    </div>
  );
}
