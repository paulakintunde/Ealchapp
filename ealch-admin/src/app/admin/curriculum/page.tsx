// Curriculum — the Domain → Theme tree, per Workstream 3 Phase 4. Each theme
// row shows its live item count (content_items grouped by theme) so a gap
// between "themes we've catalogued" and "themes we've actually authored" is
// visible without cross-referencing the Items list by hand.
import { asc, sql } from 'drizzle-orm';
import { db, schema } from '@/db';
import NewDomainButton from './NewDomainButton';
import NewThemeButton from './NewThemeButton';
import styles from './curriculum.module.css';

export default async function CurriculumPage() {
  const d = await db();

  const [domains, themes, itemCounts] = await Promise.all([
    d.select().from(schema.contentDomains).orderBy(asc(schema.contentDomains.order)),
    d.select().from(schema.contentThemes).orderBy(asc(schema.contentThemes.title)),
    d
      .select({ theme: schema.contentItems.theme, count: sql<number>`count(*)::int` })
      .from(schema.contentItems)
      .groupBy(schema.contentItems.theme),
  ]);

  const countByTheme = new Map(itemCounts.map((r) => [r.theme, r.count]));
  const themesByDomain = new Map<string, typeof themes>();
  for (const t of themes) {
    const list = themesByDomain.get(t.domain) ?? [];
    list.push(t);
    themesByDomain.set(t.domain, list);
  }
  const orphanThemes = themes.filter((t) => !domains.some((dm) => dm.slug === t.domain));

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>Curriculum catalogue</div>
          <div className={styles.sub}>
            {domains.length} domain{domains.length === 1 ? '' : 's'} · {themes.length} theme{themes.length === 1 ? '' : 's'}
            {' '}— seeded here as it&apos;s authored; the full locked catalogue (108 themes / 15 domains) is a content pass, not a schema one.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <NewDomainButton nextOrder={domains.length + 1} />
          <NewThemeButton domains={domains.map((dm) => dm.slug)} />
        </div>
      </div>

      {domains.length === 0 ? (
        <div className={styles.empty}>No domains yet — create the first one to start the catalogue.</div>
      ) : (
        domains.map((dm) => (
          <section key={dm.slug} className={styles.domainCard}>
            <div className={styles.domainHead}>
              <span className={styles.domainTitle}>{dm.title}</span>
              <span className={styles.domainSlug}>{dm.slug}</span>
            </div>
            {(themesByDomain.get(dm.slug) ?? []).length === 0 ? (
              <div className={styles.emptyThemes}>No themes under this domain yet.</div>
            ) : (
              <div className={styles.themeGrid}>
                {(themesByDomain.get(dm.slug) ?? []).map((t) => (
                  <div key={t.slug} className={styles.themeRow}>
                    <div className={styles.themeMain}>
                      <span className={styles.themeTitle}>{t.title}</span>
                      <span className={styles.themeSlug}>{t.slug}</span>
                    </div>
                    <span className={styles.themeRange}>{t.levelRangeLo.toUpperCase()}–{t.levelRangeHi.toUpperCase()}</span>
                    {t.examFlag && <span className={styles.flagChip}>exam</span>}
                    {t.immigFlag && <span className={styles.flagChip}>immig</span>}
                    <span className={styles.themeCount}>{countByTheme.get(t.slug) ?? 0} items</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))
      )}

      {orphanThemes.length > 0 && (
        <section className={styles.domainCard}>
          <div className={styles.domainHead}>
            <span className={styles.domainTitle} style={{ color: 'var(--bad)' }}>Orphan themes (unknown domain)</span>
          </div>
          <div className={styles.themeGrid}>
            {orphanThemes.map((t) => (
              <div key={t.slug} className={styles.themeRow}>
                <div className={styles.themeMain}>
                  <span className={styles.themeTitle}>{t.title}</span>
                  <span className={styles.themeSlug}>{t.slug} → {t.domain}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
