// Push notifications — campaign composer with live phone preview, recent
// sends (polled), and template library. RSC does the initial Drizzle reads;
// interactivity lives in colocated client components.
import { auth } from '@/auth';
import { can } from '@/lib/rbac';
import { listCampaigns, listTemplates } from './data';
import NotificationsClient from './NotificationsClient';

export const dynamic = 'force-dynamic';

export const metadata = { title: 'Push notifications — Ealch Ops' };

export default async function NotificationsPage() {
  const session = await auth();
  const role = session?.user.role;

  const [templates, campaigns] = await Promise.all([listTemplates(), listCampaigns()]);

  return (
    <NotificationsClient
      templates={templates}
      initialCampaigns={campaigns}
      canWrite={can(role, 'notifications.write')}
    />
  );
}
