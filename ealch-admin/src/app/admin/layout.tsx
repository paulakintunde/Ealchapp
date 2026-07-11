// Admin shell — RSC layout: auth + settings/incidents reads, then the fixed
// sidebar | topbar/banners/content column, all wrapped in client Providers.
import { redirect } from 'next/navigation';
import { and, desc, eq } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { can, ROLE_LABEL } from '@/lib/rbac';
import Providers from '@/components/providers';
import Sidebar from '@/components/shell/Sidebar';
import Topbar from '@/components/shell/Topbar';
import Banners from '@/components/shell/Banners';
import styles from './admin-shell.module.css';

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  if (!session?.user) redirect('/login');

  const d = await db();
  const [maintRow] = await d
    .select()
    .from(schema.settings)
    .where(eq(schema.settings.key, 'maintenance_mode'))
    .limit(1);
  const maintValue = (maintRow?.value ?? null) as { enabled?: boolean } | null;
  const maintenanceOn = maintValue?.enabled === true;

  const [anomaly] = await d
    .select({ id: schema.incidents.id, title: schema.incidents.title })
    .from(schema.incidents)
    .where(
      and(
        eq(schema.incidents.severity, 'anomaly'),
        eq(schema.incidents.status, 'open'),
      ),
    )
    .orderBy(desc(schema.incidents.openedAt))
    .limit(1);

  const { role, name, email } = session.user;

  return (
    <Providers>
      <div className={styles.shell}>
        <Sidebar
          user={{ name: name ?? email ?? 'Admin', roleLabel: ROLE_LABEL[role] }}
          maintenanceOn={maintenanceOn}
          canMaintenance={can(role, 'settings.maintenance')}
        />
        <div className={styles.main}>
          <Topbar />
          <Banners
            maintenanceOn={maintenanceOn}
            anomaly={anomaly ?? null}
            canDismiss={can(role, 'incidents.act')}
          />
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </Providers>
  );
}
