// Playlists — content_units filtered to kind='playlist'. Detail editing
// happens at the existing /admin/content/[id] route, which renders a
// structured PlaylistBodyEditor for this kind instead of the raw-JSON
// textarea (see [id]/BodyEditor.tsx).
import Link from 'next/link';
import { desc, eq } from 'drizzle-orm';
import { db, schema } from '@/db';
import { STATUS_META, chipStyle } from '../meta';
import { relTime } from '@/lib/format';
import NewPlaylistButton from './NewPlaylistButton';
import styles from '../items/phase2.module.css';

export default async function PlaylistsPage() {
  const d = await db();
  const u = schema.contentUnits;

  const rows = await d
    .select({ id: u.id, title: u.title, slug: u.slug, level: u.level, status: u.status, version: u.version, updatedAt: u.updatedAt })
    .from(u)
    .where(eq(u.kind, 'playlist'))
    .orderBy(desc(u.updatedAt));

  return (
    <div className={styles.wrap}>
      <section className={styles.card}>
        <div className={styles.cardHead} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div>
            <div className={styles.cardTitle}>Playlists</div>
            <div className={styles.cardSub}>Listening sets — real French lines, played straight through</div>
          </div>
          <div style={{ flex: 1 }} />
          <NewPlaylistButton />
        </div>
        <div className={styles.thead} style={{ gridTemplateColumns: '2.2fr 0.7fr 0.9fr 0.6fr 0.9fr' }}>
          <div>Playlist</div>
          <div>Level</div>
          <div>Status</div>
          <div>Version</div>
          <div>Updated</div>
        </div>
        {rows.length === 0 ? (
          <div className={styles.empty}>No playlists yet — create one to get started.</div>
        ) : (
          rows.map((r) => (
            <Link key={r.id} href={`/admin/content/${r.id}`} className={styles.row} style={{ gridTemplateColumns: '2.2fr 0.7fr 0.9fr 0.6fr 0.9fr' }}>
              <div>
                <div className={styles.itemFr}>{r.title}</div>
                <div className={styles.itemSub}>{r.slug}</div>
              </div>
              <div>{r.level.toUpperCase()}</div>
              <div>
                <span className={styles.chip} style={chipStyle(STATUS_META[r.status].color)}>{STATUS_META[r.status].label}</span>
              </div>
              <div>v{r.version}</div>
              <div>{relTime(r.updatedAt)}</div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}
