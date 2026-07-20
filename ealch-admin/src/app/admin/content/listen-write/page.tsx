// La Dictée — items eligible for dictation (drills @> {dictation}), with the
// audio segment map (AudioSegment[]) editor Phase 2 adds: where the words
// sit inside `audioRef`, so the drill can highlight/seek instead of only
// playing the file from the top (see the note on AudioSegment in schema.ts).
import { and, arrayContains, ne } from 'drizzle-orm';
import { db, schema } from '@/db';
import { ITEM_STATUS_META, chipStyle } from '../items/meta';
import SegmentRow from './SegmentRow';
import styles from '../items/phase2.module.css';

export default async function ListenWritePage() {
  const d = await db();
  const it = schema.contentItems;

  const items = await d
    .select({
      id: it.id, fr: it.fr, en: it.en, level: it.level, theme: it.theme,
      audioRef: it.audioRef, segments: it.segments, status: it.status,
    })
    .from(it)
    .where(and(arrayContains(it.drills, ['dictation']), ne(it.status, 'archived')))
    .orderBy(it.level, it.theme, it.id);

  const withSegments = items.filter((i) => Array.isArray(i.segments) && i.segments.length > 0).length;

  return (
    <div className={styles.wrap}>
      <section className={styles.card}>
        <div className={styles.cardHead}>
          <div className={styles.cardTitle}>La Dictée — audio segment map</div>
          <div className={styles.cardSub}>
            {items.length} item{items.length === 1 ? '' : 's'} · {withSegments} with a segment map, {items.length - withSegments} without
          </div>
        </div>
        <div className={styles.thead} style={{ gridTemplateColumns: '2fr 0.7fr 0.9fr 0.9fr 0.9fr 0.6fr' }}>
          <div>Item</div>
          <div>Level</div>
          <div>Theme</div>
          <div>audioRef</div>
          <div>Segments</div>
          <div>Status</div>
        </div>
        {items.length === 0 ? (
          <div className={styles.empty}>No dictation-eligible items yet.</div>
        ) : (
          items.map((item) => (
            <SegmentRow
              key={item.id}
              item={{
                id: item.id,
                fr: item.fr,
                level: item.level,
                theme: item.theme,
                audioRef: item.audioRef,
                segments: (item.segments as { blockId: string; startMs: number; endMs: number; text: string }[] | null) ?? [],
              }}
              statusChip={
                <span className={styles.chip} style={chipStyle(ITEM_STATUS_META[item.status].color)}>
                  {ITEM_STATUS_META[item.status].label}
                </span>
              }
            />
          ))
        )}
      </section>
    </div>
  );
}
