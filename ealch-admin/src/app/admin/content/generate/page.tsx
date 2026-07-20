// Generate — a one-off AI generation job: pick a template + curriculum
// target + count, run it, land the drafts in the existing Items review
// workflow. Its own route rather than a Templates-page addition: every
// other /admin/content/* route is single-concern CRUD or a queue view, and
// "run a job against read-only template/curriculum inputs" is a different
// concern from CRUD-ing either of those (see ContentTabs.tsx's own note on
// one-tab-per-phase-slice).
import { eq } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { can } from '@/lib/rbac';
import GenerateForm from './GenerateForm';
import styles from '../items/phase2.module.css';

export default async function GeneratePage() {
  const [session, templateRows, themes] = await Promise.all([
    auth(),
    db().then((d) => d.select().from(schema.contentUnits).where(eq(schema.contentUnits.kind, 'template'))),
    db().then((d) => d.select().from(schema.contentThemes)),
  ]);
  const role = session?.user.role;
  const canWrite = can(role, 'content.write');

  type TemplateBody = { id?: string; target?: string; name?: string; levels?: string[] };
  const templates = templateRows
    .map((r) => {
      const body = (r.body ?? {}) as TemplateBody;
      return { unitId: r.id, id: body.id, target: body.target, name: body.name || r.title, levels: body.levels ?? [] };
    })
    .filter((t): t is { unitId: string; id: string; target: string; name: string; levels: string[] } => Boolean(t.id && t.target));

  return (
    <div className={styles.wrap}>
      <section className={styles.card}>
        <div className={styles.cardHead}>
          <div className={styles.cardTitle}>Generate content</div>
          <div className={styles.cardSub}>
            Runs the template's prompt against the AI model routed to the &apos;content&apos; capability (console → AI Routing).
            Drafts land in the normal draft → in review → published workflow — nothing here publishes anything.
          </div>
        </div>
        {!canWrite ? (
          <div className={styles.empty}>Read-only — your role can&apos;t write content.</div>
        ) : templates.length === 0 ? (
          <div className={styles.empty}>
            No templates yet — create one on the{' '}
            <a href="/admin/content/templates">Templates</a> tab first (target=&quot;item&quot;, a real
            <code>promptSkeleton</code> and worked <code>example</code>).
          </div>
        ) : (
          <GenerateForm
            templates={templates.filter((t) => t.target === 'item')}
            themes={themes.map((t) => ({ slug: t.slug, title: t.title, levelRangeLo: t.levelRangeLo, levelRangeHi: t.levelRangeHi }))}
          />
        )}
      </section>
    </div>
  );
}
