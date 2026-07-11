// AI model routing — RSC. Reads capabilities + models + active routing and
// hands everything to the client RoutingBoard (staging, confirm modal, apply).
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { can } from '@/lib/rbac';
import { IC } from '@/components/shell/icons';
import RoutingBoard, { type CapabilityCard } from './RoutingBoard';
import styles from './ai.module.css';

const CAP_ORDER = ['general', 'content', 'audio', 'video'] as const;
const CAP_ICON: Record<string, string> = {
  general: IC.spark,
  content: IC.doc,
  audio: IC.mic,
  video: IC.film,
};

export default async function AiModelsPage() {
  const session = await auth();
  const role = session?.user.role;
  const canRoute = can(role, 'ai.route');

  const d = await db();
  const [caps, models, routing] = await Promise.all([
    d.select().from(schema.aiCapabilities),
    d.select().from(schema.aiModels),
    d.select().from(schema.aiRouting),
  ]);

  const activeByCap = new Map(routing.map((r) => [r.capabilityId, r.activeModelId]));
  const cards: CapabilityCard[] = caps
    .slice()
    .sort(
      (a, b) =>
        CAP_ORDER.indexOf(a.key as (typeof CAP_ORDER)[number]) -
        CAP_ORDER.indexOf(b.key as (typeof CAP_ORDER)[number]),
    )
    .map((cap) => ({
      id: cap.id,
      key: cap.key,
      label: cap.label,
      description: cap.description,
      monthlyVolume: cap.monthlyVolume,
      icon: CAP_ICON[cap.key] ?? IC.spark,
      activeModelId: activeByCap.get(cap.id) ?? null,
      // No ORDER BY: seed insertion order matches the mock's option order.
      models: models
        .filter((m) => m.capabilityId === cap.id)
        .map((m) => ({
          id: m.id,
          name: m.name,
          provider: m.provider,
          meta: m.meta,
          costLabel: m.costLabel,
          latencyLabel: m.latencyLabel,
          monthlyCostCents: m.monthlyCostCents,
          enabled: m.enabled,
        })),
    }));

  if (cards.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>✦</div>
        <div className={styles.emptyLine}>No AI capabilities configured yet.</div>
        <div className={styles.emptyCta}>
          Seed the database with <code>pnpm db:seed</code> to load the routing table.
        </div>
      </div>
    );
  }

  return <RoutingBoard capabilities={cards} canRoute={canRoute} />;
}
