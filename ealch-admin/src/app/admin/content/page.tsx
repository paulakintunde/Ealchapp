// Content — library table (filterable, URL-synced) + review queue,
// curriculum progress and recent-edits cards. RSC reads via Drizzle.
import Link from 'next/link';
import { and, desc, eq, ilike, or, type SQL } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { can } from '@/lib/rbac';
import { relTime } from '@/lib/format';
import {
  KIND_META, STATUS_META, chipStyle, isKind, isStatus,
} from './meta';
import Filters from './Filters';
import NewPackButton from './NewPackButton';
import ResolveFlagButton from './ResolveFlagButton';
import styles from './content.module.css';

interface UnitBody {
  intro?: string;
  sections?: unknown[];
  progress?: number;
}

export default async function ContentPage({
  searchParams,
}: {
  searchParams: Promise<{ kind?: string; status?: string; q?: string }>;
}) {
  const [{ kind, status, q }, session] = await Promise.all([searchParams, auth()]);
  const role = session?.user.role;
  const canWrite = can(role, 'content.write');

  const d = await db();
  const u = schema.contentUnits;

  const filters: SQL[] = [];
  if (isKind(kind)) filters.push(eq(u.kind, kind));
  if (isStatus(status)) filters.push(eq(u.status, status));
  const query = q?.trim();
  if (query) {
    const like = or(ilike(u.title, `%${query}%`), ilike(u.slug, `%${query}%`));
    if (like) filters.push(like);
  }

  const [units, flags, edits, [curriculum]] = await Promise.all([
    d
      .select({
        id: u.id, title: u.title, slug: u.slug, kind: u.kind, level: u.level,
        locale: u.locale, status: u.status, version: u.version, updatedAt: u.updatedAt,
      })
      .from(u)
      .where(filters.length ? and(...filters) : undefined)
      .orderBy(desc(u.updatedAt)),
    d
      .select({
        id: schema.contentFlags.id,
        reason: schema.contentFlags.reason,
        createdAt: schema.contentFlags.createdAt,
        unitId: schema.contentUnits.id,
        unitTitle: schema.contentUnits.title,
        reporter: schema.users.displayName,
      })
      .from(schema.contentFlags)
      .innerJoin(schema.contentUnits, eq(schema.contentFlags.unitId, schema.contentUnits.id))
      .leftJoin(schema.users, eq(schema.contentFlags.userId, schema.users.id))
      .where(eq(schema.contentFlags.status, 'open'))
      .orderBy(desc(schema.contentFlags.createdAt)),
    d
      .select({
        id: schema.contentRevisions.id,
        version: schema.contentRevisions.version,
        createdAt: schema.contentRevisions.createdAt,
        editor: schema.adminUsers.name,
        unitTitle: schema.contentUnits.title,
      })
      .from(schema.contentRevisions)
      .innerJoin(schema.contentUnits, eq(schema.contentRevisions.unitId, schema.contentUnits.id))
      .leftJoin(schema.adminUsers, eq(schema.contentRevisions.editorId, schema.adminUsers.id))
      .orderBy(desc(schema.contentRevisions.createdAt))
      .limit(3),
    d
      .select({ id: u.id, title: u.title, body: u.body })
      .from(u)
      .where(eq(u.slug, 'beginners-den-curriculum'))
      .limit(1),
  ]);

  // 43-unit curriculum progress: published sub-units from body.progress when
  // present; total from body.sections length. Falls back to 28 / 43.
  const currBody = (curriculum?.body ?? {}) as UnitBody;
  const currTotal = Array.isArray(currBody.sections) && currBody.sections.length > 0
    ? currBody.sections.length
    : 43;
  const currDone = typeof currBody.progress === 'number'
    ? Math.min(Math.max(Math.round(currBody.progress), 0), currTotal)
    : 28;
  const currPct = Math.round((currDone / currTotal) * 100);

  const hasFilters = Boolean(isKind(kind) || isStatus(status) || query);

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {/* ── Content library ── */}
        <section className={`${styles.card} ${styles.tableCard}`}>
          <div className={styles.cardHead}>
            <div className={styles.cardTitle}>Content library</div>
            <div className={styles.spacer} />
            {canWrite && <NewPackButton className={styles.newBtn} />}
          </div>

          <Filters kind={isKind(kind) ? kind : ''} status={isStatus(status) ? status : ''} q={query ?? ''} />

          <div className={styles.thead}>
            <div>Pack</div>
            <div>Kind</div>
            <div>Level</div>
            <div>Locale</div>
            <div>Status</div>
            <div>Version</div>
            <div>Updated</div>
          </div>

          {units.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <div className={styles.emptyLine}>
                {hasFilters ? 'No packs match these filters' : 'No content yet'}
              </div>
              <div className={styles.emptyHint}>
                {hasFilters
                  ? 'Try clearing the kind/status pills or the search.'
                  : 'Create your first pack to get started.'}
              </div>
              {canWrite && !hasFilters && <NewPackButton className={styles.newBtn} />}
            </div>
          ) : (
            units.map((unit) => (
              <Link key={unit.id} href={`/admin/content/${unit.id}`} className={styles.row}>
                <div>
                  <div className={styles.unitTitle}>{unit.title}</div>
                  <div className={styles.unitSub}>{unit.slug}</div>
                </div>
                <div>
                  <span className={styles.chip} style={chipStyle(KIND_META[unit.kind].color)}>
                    {KIND_META[unit.kind].label}
                  </span>
                </div>
                <div className={styles.level}>{unit.level.toUpperCase()}</div>
                <div>
                  <span className={styles.chip} style={chipStyle('var(--mut)')}>
                    {unit.locale.toUpperCase()}
                  </span>
                </div>
                <div>
                  <span
                    className={`${styles.chip} ${unit.status === 'archived' ? styles.chipStrike : ''}`}
                    style={chipStyle(STATUS_META[unit.status].color)}
                  >
                    {STATUS_META[unit.status].label}
                  </span>
                </div>
                <div className={styles.mono}>v{unit.version}</div>
                <div className={styles.updated}>{relTime(unit.updatedAt)}</div>
              </Link>
            ))
          )}
        </section>

        {/* ── Right column ── */}
        <div className={styles.side}>
          <section className={`${styles.card} ${styles.sideCard}`}>
            <div className={styles.cardTitle}>Review queue</div>
            <div className={styles.sideSub}>Learner-reported issues on live packs</div>
            {flags.length === 0 ? (
              <div className={styles.queueClear}>Queue clear ✓</div>
            ) : (
              <div className={styles.flagList}>
                {flags.map((f) => (
                  <div key={f.id} className={styles.flagRow}>
                    <div className={styles.flagBody}>
                      <div className={styles.flagReason}>{f.reason}</div>
                      <div className={styles.flagMeta}>
                        <Link href={`/admin/content/${f.unitId}`}>{f.unitTitle}</Link>
                        {' · '}
                        {f.reporter ?? 'Unknown user'} · {relTime(f.createdAt)}
                      </div>
                    </div>
                    {canWrite && <ResolveFlagButton flagId={f.id} className={styles.resolveBtn} />}
                  </div>
                ))}
              </div>
            )}
          </section>

          {curriculum && (
            <section className={`${styles.card} ${styles.sideCard}`}>
              <div className={styles.cardTitle}>{currTotal}-unit {curriculum.title}</div>
              <div className={styles.sideSub}>A1 track rollout — published sub-units</div>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: `${currPct}%` }} />
              </div>
              <div className={styles.progressMeta}>
                <span>
                  <span className={styles.progressCount}>{currDone} / {currTotal}</span> published
                </span>
                <span>{currPct}%</span>
              </div>
            </section>
          )}

          <section className={`${styles.card} ${styles.sideCard}`}>
            <div className={styles.cardTitle}>Recent edits</div>
            {edits.length === 0 ? (
              <div className={styles.sideSub}>No revisions yet.</div>
            ) : (
              <div className={styles.editList}>
                {edits.map((e) => (
                  <div key={e.id} className={styles.editRow}>
                    <div className={styles.editDot} />
                    <div className={styles.editText}>
                      {(e.editor ?? 'Someone').split(' ')[0]} bumped &ldquo;{e.unitTitle}&rdquo; to v{e.version}
                    </div>
                    <div className={styles.editTime}>{relTime(e.createdAt)}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
