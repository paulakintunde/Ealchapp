// Review — the Gate H queue (CONTENT-AUTHORING-GUIDE.md §12). Every
// content_items/content_units/content_exam_tasks row sitting in_review,
// tagged 'full' or 'sampled' per reviewTier.ts, so a reviewer sees what MUST
// be reviewed before what's merely spot-check-eligible. Adapts the same
// cross-table-merge pattern schedule/page.tsx already uses (there: two
// tables keyed on scheduledPublishAt; here: three tables keyed on status).
import Link from 'next/link';
import { and, eq, ne } from 'drizzle-orm';
import { db, schema } from '@/db';
import { buildVocabPoolFromItems, recycledShare, themeLevelKey, tokenize, RECYCLED_VOCAB_FLOOR } from '@/lib/vocab';
import { reviewTierFor, type ReviewTier } from '@/lib/reviewTier';
import styles from '../items/phase2.module.css';

const TIER_LABEL: Record<ReviewTier, string> = { full: '100% review', sampled: 'sampled (10-20%)' };

export default async function ReviewQueuePage() {
  const d = await db();

  const [items, units, examTasks, vocabRows] = await Promise.all([
    d
      .select({ id: schema.contentItems.id, fr: schema.contentItems.fr, kind: schema.contentItems.kind, level: schema.contentItems.level, theme: schema.contentItems.theme, updatedAt: schema.contentItems.updatedAt })
      .from(schema.contentItems)
      .where(eq(schema.contentItems.status, 'in_review')),
    d
      .select({ id: schema.contentUnits.id, title: schema.contentUnits.title, kind: schema.contentUnits.kind, level: schema.contentUnits.level, updatedAt: schema.contentUnits.updatedAt })
      .from(schema.contentUnits)
      .where(eq(schema.contentUnits.status, 'in_review')),
    d
      .select({ id: schema.contentExamTasks.id, format: schema.contentExamTasks.format, taskType: schema.contentExamTasks.taskType, level: schema.contentExamTasks.level, rubric: schema.contentExamTasks.rubric, modelAnswer: schema.contentExamTasks.modelAnswer, updatedAt: schema.contentExamTasks.updatedAt })
      .from(schema.contentExamTasks)
      .where(eq(schema.contentExamTasks.status, 'in_review')),
    // Published, non-sentence items — the pool the cheap recycled-vocab
    // re-check (below) scores in-review SENTENCES against, same scope the
    // real publish-time gate uses.
    d
      .select({ level: schema.contentItems.level, theme: schema.contentItems.theme, fr: schema.contentItems.fr })
      .from(schema.contentItems)
      .where(and(eq(schema.contentItems.status, 'published'), ne(schema.contentItems.kind, 'sentence'))),
  ]);

  const vocabPool = buildVocabPoolFromItems(vocabRows);

  type Row = { key: string; href: string; label: string; sub: string; tier: ReviewTier; updatedAt: Date };
  const rows: Row[] = [
    ...items.map((i) => {
      let gateFlagged = false;
      if (i.kind === 'sentence') {
        const floor = RECYCLED_VOCAB_FLOOR[i.level];
        if (floor !== undefined) {
          const tokens = tokenize(i.fr);
          if (tokens.length > 0) {
            const pct = recycledShare(tokens, vocabPool.get(themeLevelKey(i.level, i.theme)));
            gateFlagged = pct < floor;
          }
        }
      }
      return {
        key: `item-${i.id}`,
        href: `/admin/content/items/${i.id}`,
        label: i.fr || i.id,
        sub: `item · ${i.theme} · ${i.level.toUpperCase()}`,
        tier: reviewTierFor({ level: i.level, gateFlagged }),
        updatedAt: i.updatedAt,
      };
    }),
    ...units.map((u) => ({
      key: `unit-${u.id}`,
      href: `/admin/content/${u.id}`,
      label: u.title,
      sub: `${u.kind} · ${u.level.toUpperCase()}`,
      tier: reviewTierFor({ level: u.level }),
      updatedAt: u.updatedAt,
    })),
    ...examTasks.map((t) => ({
      key: `exam-${t.id}`,
      href: `/admin/content/exams/${t.id}`,
      label: t.id,
      sub: `exam · ${t.format} · ${t.taskType}`,
      tier: reviewTierFor({ level: t.level, examTaskType: t.taskType, hasRubricOrModelAnswer: Boolean(t.rubric || t.modelAnswer) }),
      updatedAt: t.updatedAt,
    })),
  ].sort((a, b) => (a.tier === b.tier ? b.updatedAt.getTime() - a.updatedAt.getTime() : a.tier === 'full' ? -1 : 1));

  const fullCount = rows.filter((r) => r.tier === 'full').length;

  return (
    <div className={styles.wrap}>
      <section className={styles.card}>
        <div className={styles.cardHead}>
          <div className={styles.cardTitle}>Review queue (Gate H)</div>
          <div className={styles.cardSub}>
            {rows.length} in review · {fullCount} require 100% review — authoring guide §12. &quot;Cultural claim&quot;
            content and gender/IPA gate flags are not mechanically detected here; apply those by eye regardless of the badge shown.
          </div>
        </div>
        <div className={styles.thead} style={{ gridTemplateColumns: '2.2fr 1.4fr 1fr 1fr' }}>
          <div>Content</div>
          <div>Detail</div>
          <div>Review tier</div>
          <div>Updated</div>
        </div>
        {rows.length === 0 ? (
          <div className={styles.empty}>Queue clear — nothing in review.</div>
        ) : (
          rows.map((r) => (
            <Link key={r.key} href={r.href} className={styles.row} style={{ gridTemplateColumns: '2.2fr 1.4fr 1fr 1fr' }}>
              <div className={styles.itemFr}>{r.label}</div>
              <div className={styles.itemSub}>{r.sub}</div>
              <div>
                <span className={`${styles.badge} ${r.tier === 'full' ? styles.badgeBad : styles.badgeWarn}`}>
                  {TIER_LABEL[r.tier]}
                </span>
              </div>
              <div>{r.updatedAt.toLocaleDateString()}</div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}
