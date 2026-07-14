// Shared types + pure helpers for the Notifications screen.
// Plain module (no 'server-only') — imported from both RSC/actions and
// client components.

export type SegmentLevel = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';
export type SegmentPlan = 'all' | 'free' | 'plus' | 'pro';
export type SegmentLocale = 'en' | 'fr';
export type SegmentLastSeen = 7 | 30 | null;

/** Segment predicate stored in notif_campaigns.segment (jsonb). */
export interface Segment {
  level: SegmentLevel | null;      // null = any
  plan: SegmentPlan;               // 'all' = any
  lastSeenDays: SegmentLastSeen;   // 7 = dormant 7d+, 30 = dormant 30d+
  locale: SegmentLocale | null;    // null = any
  /** Scaled audience estimate at compose time — the queue worker converges on it. */
  estimate?: number;
}

export type CampaignStatus = 'draft' | 'scheduled' | 'sending' | 'sent' | 'paused';

/** JSON-safe campaign row (dates as ISO strings) shared by page + API route. */
export interface CampaignDTO {
  id: string;
  name: string;
  status: CampaignStatus;
  segment: Partial<Segment> | null;
  scheduleAt: string | null;
  sentCount: number;
  openRate: number | null;
}

export interface TemplateDTO {
  id: string;
  name: string;
  locale: SegmentLocale;
  title: string;
  body: string;
  deeplink: string | null;
}

const PLAN_LABEL: Record<string, string> = { free: 'Free', plus: 'Plus', pro: 'Pro' };

/** Human summary of a segment: 'All users' or e.g. 'A2, dormant 30d+, FR'. */
export function segmentSummary(seg: Partial<Segment> | null | undefined): string {
  if (!seg) return 'All users';
  const parts: string[] = [];
  if (seg.level) parts.push(String(seg.level).toUpperCase());
  if (seg.plan && seg.plan !== 'all') parts.push(PLAN_LABEL[seg.plan] ?? String(seg.plan));
  if (seg.lastSeenDays) parts.push(`dormant ${seg.lastSeenDays}d+`);
  if (seg.locale) parts.push(String(seg.locale).toUpperCase());
  return parts.length > 0 ? parts.join(', ') : 'All users';
}
