// Sentence Builder — sentence-kind items, with the recycled-vocabulary rule
// from the authoring guide (§2: >=30% recycled vocab at a1/a2/b1) made
// visible per sentence rather than only checked at publish time. A
// sentence's recycled share is the fraction of its French tokens that
// already appear in a published word/phrase item at the same (level,theme).
import Link from 'next/link';
import { and, eq, ne } from 'drizzle-orm';
import { db, schema } from '@/db';
import { tokenize, buildVocabPoolFromItems, recycledShare, themeLevelKey, RECYCLED_VOCAB_FLOOR } from '@/lib/vocab';
import { ITEM_STATUS_META, chipStyle } from '../items/meta';
import styles from '../items/phase2.module.css';

// a1/a2/b1 share one floor (0.3); used for the page's headline copy only —
// the per-row check below reads RECYCLED_VOCAB_FLOOR per row's own level.
const RECYCLE_FLOOR = RECYCLED_VOCAB_FLOOR.a1;

export default async function SentencesPage() {
  const d = await db();
  const it = schema.contentItems;

  const [sentences, vocab] = await Promise.all([
    d
      .select({ id: it.id, fr: it.fr, en: it.en, level: it.level, theme: it.theme, status: it.status })
      .from(it)
      .where(and(eq(it.kind, 'sentence'), ne(it.status, 'archived')))
      .orderBy(it.level, it.theme, it.id),
    d
      .select({ fr: it.fr, level: it.level, theme: it.theme })
      .from(it)
      .where(and(ne(it.kind, 'sentence'), ne(it.status, 'archived'))),
  ]);

  const poolByThemeLevel = buildVocabPoolFromItems(vocab);

  const rows = sentences.map((s) => {
    const pool = poolByThemeLevel.get(themeLevelKey(s.level, s.theme));
    const tokens = tokenize(s.fr);
    const pct = recycledShare(tokens, pool);
    const floor = RECYCLED_VOCAB_FLOOR[s.level] ?? RECYCLE_FLOOR;
    return { ...s, tokenCount: tokens.length, pct, floor };
  });

  return (
    <div className={styles.wrap}>
      <section className={styles.card}>
        <div className={styles.cardHead}>
          <div className={styles.cardTitle}>Sentences</div>
          <div className={styles.cardSub}>
            {rows.length} sentence{rows.length === 1 ? '' : 's'} — recycled % against that theme&apos;s published word/phrase pool (authoring guide §2: ≥{Math.round(RECYCLE_FLOOR * 100)}% target)
          </div>
        </div>
        <div className={styles.thead} style={{ gridTemplateColumns: '2.4fr 0.7fr 0.9fr 1fr 0.9fr' }}>
          <div>Sentence</div>
          <div>Level</div>
          <div>Theme</div>
          <div>Recycled</div>
          <div>Status</div>
        </div>
        {rows.length === 0 ? (
          <div className={styles.empty}>No sentences yet.</div>
        ) : (
          rows.map((row) => (
            <Link
              key={row.id}
              href={`/admin/content/items/${row.id}`}
              className={styles.row}
              style={{ gridTemplateColumns: '2.4fr 0.7fr 0.9fr 1fr 0.9fr' }}
            >
              <div>
                <div className={styles.itemFr}>{row.fr || <em>(empty)</em>}</div>
                <div className={styles.itemSub}>{row.id}</div>
              </div>
              <div>{row.level.toUpperCase()}</div>
              <div>{row.theme}</div>
              <div>
                {row.tokenCount === 0 ? (
                  <span className={styles.badge}>—</span>
                ) : (
                  <span className={`${styles.badge} ${row.pct >= row.floor ? styles.badgeOk : styles.badgeWarn}`}>
                    {Math.round(row.pct * 100)}%
                  </span>
                )}
              </div>
              <div>
                <span className={styles.chip} style={chipStyle(ITEM_STATUS_META[row.status].color)}>
                  {ITEM_STATUS_META[row.status].label}
                </span>
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}
