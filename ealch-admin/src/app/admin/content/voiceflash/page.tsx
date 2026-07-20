// Voice Flash — items eligible for the pronunciation drill (drills @>
// {voiceflash}). Surfaces the two things that make a voiceflash item
// honest: IPA present (Phase 2.D's gate) and imageRef resolved (CF-24,
// still shape-only — Storage resolvability needs the asset manifest, Phase
// 2.D's open item), plus the >=20-items-per-theme breadth floor (Phase 6b)
// grouped so a gap in a specific theme is visible before it becomes a
// publish-time warning.
import Link from 'next/link';
import { and, arrayContains, ne } from 'drizzle-orm';
import { db, schema } from '@/db';
import { ITEM_STATUS_META, chipStyle } from '../items/meta';
import styles from '../items/phase2.module.css';

export default async function VoiceflashPage() {
  const d = await db();
  const it = schema.contentItems;

  const items = await d
    .select({
      id: it.id, fr: it.fr, en: it.en, ipa: it.ipa, imageRef: it.imageRef,
      level: it.level, theme: it.theme, status: it.status,
    })
    .from(it)
    .where(and(arrayContains(it.drills, ['voiceflash']), ne(it.status, 'archived')))
    .orderBy(it.level, it.theme, it.id);

  const byTheme = new Map<string, { level: string; theme: string; count: number; missingIpa: number; missingImage: number }>();
  for (const item of items) {
    const key = `${item.level}::${item.theme}`;
    const cell = byTheme.get(key) ?? { level: item.level, theme: item.theme, count: 0, missingIpa: 0, missingImage: 0 };
    cell.count++;
    if (!item.ipa) cell.missingIpa++;
    if (!item.imageRef) cell.missingImage++;
    byTheme.set(key, cell);
  }
  const cells = [...byTheme.values()].sort((a, b) => (a.level + a.theme).localeCompare(b.level + b.theme));

  return (
    <div className={styles.wrap}>
      <section className={styles.card}>
        <div className={styles.cardHead}>
          <div className={styles.cardTitle}>Theme breadth</div>
          <div className={styles.cardSub}>Phase 6b&apos;s ≥20-items-per-theme floor, and IPA/imageRef gaps within each theme</div>
        </div>
        {cells.length === 0 ? (
          <div className={styles.empty}>No voiceflash-eligible items yet.</div>
        ) : (
          <div className={styles.dashGrid}>
            {cells.map((c) => (
              <div key={`${c.level}::${c.theme}`} className={`${styles.dashCell} ${c.count < 20 ? styles.dashCellWarn : styles.dashCellOk}`}>
                <div className={styles.dashLabel}>{c.theme} · {c.level.toUpperCase()}</div>
                <div className={styles.dashCount}>{c.count} <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--mut)' }}>/ 20</span></div>
                <div className={styles.dashSub}>
                  {c.missingIpa > 0 && `${c.missingIpa} missing IPA`}
                  {c.missingIpa > 0 && c.missingImage > 0 && ' · '}
                  {c.missingImage > 0 && `${c.missingImage} missing imageRef`}
                  {c.missingIpa === 0 && c.missingImage === 0 && 'gate-clean'}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className={styles.card}>
        <div className={styles.cardHead}>
          <div className={styles.cardTitle}>Voice Flash items</div>
          <div className={styles.cardSub}>{items.length} item{items.length === 1 ? '' : 's'}</div>
        </div>
        <div className={styles.thead} style={{ gridTemplateColumns: '2.2fr 0.9fr 0.9fr 0.6fr 0.9fr 0.9fr' }}>
          <div>Item</div>
          <div>Level</div>
          <div>Theme</div>
          <div>IPA</div>
          <div>imageRef</div>
          <div>Status</div>
        </div>
        {items.length === 0 ? (
          <div className={styles.empty}>Nothing here yet.</div>
        ) : (
          items.map((item) => (
            <Link
              key={item.id}
              href={`/admin/content/items/${item.id}`}
              className={styles.row}
              style={{ gridTemplateColumns: '2.2fr 0.9fr 0.9fr 0.6fr 0.9fr 0.9fr' }}
            >
              <div>
                <div className={styles.itemFr}>{item.fr || <em>(empty)</em>}</div>
                <div className={styles.itemSub}>{item.id}</div>
              </div>
              <div>{item.level.toUpperCase()}</div>
              <div>{item.theme}</div>
              <div>
                {item.ipa
                  ? <span className={`${styles.badge} ${styles.badgeOk}`}>✓</span>
                  : <span className={`${styles.badge} ${styles.badgeBad}`}>missing</span>}
              </div>
              <div>
                {item.imageRef
                  ? <span className={`${styles.badge} ${styles.badgeOk}`}>set</span>
                  : <span className={`${styles.badge} ${styles.badgeWarn}`}>fallback glyph</span>}
              </div>
              <div>
                <span className={styles.chip} style={chipStyle(ITEM_STATUS_META[item.status].color)}>
                  {ITEM_STATUS_META[item.status].label}
                </span>
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}
