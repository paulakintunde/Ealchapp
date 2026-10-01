/** Product event contract. All client supplied properties are listed here. */
export type PaywallSource = 'direct' | 'home' | 'settings' | 'placement' | 'gate:levels' | 'gate:coach' | 'gate:roleplay' | 'gate:examiner';
export function paywallSource(value: string | undefined): PaywallSource {
  const known: readonly string[] = ['home', 'settings', 'placement', 'gate:levels', 'gate:coach', 'gate:roleplay', 'gate:examiner'];
  return known.includes(value ?? '') ? value as PaywallSource : 'direct';
}

export type EventProperties = {
  first_open: { local_day: string; opened_at: string };
  install_attribution: { status: 'campaign' | 'no_campaign' | 'lookup_failed' | 'unavailable'; source?: string; medium?: string; campaign?: string };
  d1_return: { local_day: string };
  signup_started: { method: 'email' };
  signup_completed: { method: 'email'; account_id: string };
  onboarding_started: { wizard_id: string };
  onboarding_step_completed: { wizard_id: string; step_index: number };
  onboarding_mic_failed: { category: 'denied' | 'no_speech' | 'unavailable' };
  onboarding_completed: { wizard_id: string; level: string; account_type: 'guest' | 'email' };
  placement_started: { attempt_id: string; source: 'initial' | 'later' };
  placement_skipped: { source: 'offer' };
  placement_load_failed: { attempt_id: string; reason: 'empty_bank' | 'content_unavailable' | 'other' };
  placement_abandoned: { attempt_id: string; answered_count: number };
  placement_result: { attempt_id: string; level: 'A0' | 'A1' | 'A2'; correct_count: number; question_count: number; initial_result: boolean };
  first_lesson_started: { lesson_id: string; unit_id: string };
  lesson_completed: { lesson_id: string; lesson_version: string; session_id: string; completion_kind: 'quiz' | 'no_quiz' };
  exam_submitted: { paper_id: string; skill: string; sitting_id: string; graded_count: number; ungraded_count: number };
  streak_updated: { local_day: string; days: number };
  paywall_viewed: { from: PaywallSource };
  plan_selected: { plan: 'mo' | 'yr' };
  purchase_started: { plan: 'mo' | 'yr'; currency: string; attempt_id: string };
  purchase_completed: { plan: 'mo' | 'yr'; currency: string; attempt_id: string };
  purchase_cancelled: { plan: 'mo' | 'yr'; currency: string; attempt_id: string };
  purchase_failed: { plan: 'mo' | 'yr'; currency: string; attempt_id: string; failure_category: 'unavailable' | 'pending' | 'other' };
  restore_started: Record<string, never>;
  restore_completed: { found: boolean };
  gate_blocked: { feature: string; from: string };
  placement_paywall_offered: { level: string };
  entitlement_downgraded: { fromPlan: string; toPlan: string; hadExpiry: boolean };
  upgrade_nudge_shown: { trigger: 'roleplay' | 'coach' };
  upgrade_nudge_tapped: { trigger: 'roleplay' | 'coach' };
  reconciliation_shown: Record<string, never>;
};

export type AnalyticsEvent = keyof EventProperties;
export type NoPropsEvent = 'restore_started' | 'reconciliation_shown';
export type PropsEvent = Exclude<AnalyticsEvent, NoPropsEvent>;

const allowed: { [K in AnalyticsEvent]: readonly (keyof EventProperties[K])[] } = {
  first_open: ['local_day', 'opened_at'], install_attribution: ['status', 'source', 'medium', 'campaign'], d1_return: ['local_day'],
  signup_started: ['method'], signup_completed: ['method', 'account_id'], onboarding_started: ['wizard_id'],
  onboarding_step_completed: ['wizard_id', 'step_index'], onboarding_mic_failed: ['category'],
  onboarding_completed: ['wizard_id', 'level', 'account_type'], placement_started: ['attempt_id', 'source'],
  placement_skipped: ['source'], placement_load_failed: ['attempt_id', 'reason'],
  placement_abandoned: ['attempt_id', 'answered_count'],
  placement_result: ['attempt_id', 'level', 'correct_count', 'question_count', 'initial_result'],
  first_lesson_started: ['lesson_id', 'unit_id'], lesson_completed: ['lesson_id', 'lesson_version', 'session_id', 'completion_kind'],
  exam_submitted: ['paper_id', 'skill', 'sitting_id', 'graded_count', 'ungraded_count'],
  streak_updated: ['local_day', 'days'], paywall_viewed: ['from'], plan_selected: ['plan'],
  purchase_started: ['plan', 'currency', 'attempt_id'], purchase_completed: ['plan', 'currency', 'attempt_id'],
  purchase_cancelled: ['plan', 'currency', 'attempt_id'], purchase_failed: ['plan', 'currency', 'attempt_id', 'failure_category'], restore_started: [],
  restore_completed: ['found'], gate_blocked: ['feature', 'from'], placement_paywall_offered: ['level'],
  entitlement_downgraded: ['fromPlan', 'toPlan', 'hadExpiry'], upgrade_nudge_shown: ['trigger'],
  upgrade_nudge_tapped: ['trigger'], reconciliation_shown: [],
};

/** Runtime boundary: a caller using `as any` cannot add learner content. */
export function safeProperties<E extends AnalyticsEvent>(event: E, input: EventProperties[E]): Record<string, string | number | boolean> {
  const result: Record<string, string | number | boolean> = {};
  for (const key of allowed[event]) {
    const value = (input as Record<string, unknown>)[key as string];
    if (typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'boolean') continue;
    if (typeof value === 'number' && !Number.isFinite(value)) continue;
    if (event === 'install_attribution' && typeof value === 'string' && key !== 'status') {
      result[key as string] = /@|https?:|[?&#]/i.test(value) ? 'redacted' : value.slice(0, 100);
    } else result[key as string] = value;
  }
  return result;
}

export type PendingSignup = { signupUserId: string; signupNonce: string; guestJourneyId: string };
export type VerifiedUser = { id: string; user_metadata?: Record<string, unknown> };

/** A fake/obfuscated signup response cannot link on a later, different login. */
export function verifiedSignup(pending: PendingSignup | null, user: VerifiedUser | null): boolean {
  return !!pending && !!user && user.id === pending.signupUserId
    && user.user_metadata?.ealch_signup_nonce === pending.signupNonce;
}

export function distinctId(userId: string | null, journeyId: string): string {
  return userId ?? journeyId;
}

/** Stable keys are used by a persisted claim set; screen rerenders cannot re-emit milestones. */
export function milestoneKey(event: AnalyticsEvent, props: Record<string, unknown>, installId: string, journeyId: string): string | null {
  switch (event) {
    case 'first_open': return `${event}:${installId}`;
    case 'd1_return': return `${event}:${installId}`;
    // A Play lookup that keeps failing is retried on later launches; report each status once.
    case 'install_attribution': return `${event}:${installId}:${props.status}`;
    case 'signup_completed': return `${event}:${props.account_id}`;
    case 'onboarding_started': case 'onboarding_completed': return `${event}:${props.wizard_id}`;
    case 'onboarding_step_completed': return `${event}:${props.wizard_id}:${props.step_index}`;
    case 'placement_started': case 'placement_abandoned': case 'placement_result': return `${event}:${props.attempt_id}`;
    case 'placement_skipped': return `${event}:${journeyId}`;
    case 'first_lesson_started': return `${event}:${journeyId}`;
    case 'lesson_completed': return `${event}:${journeyId}:${props.lesson_id}:${props.lesson_version}:${props.session_id}`;
    case 'exam_submitted': return `${event}:${props.sitting_id}`;
    case 'streak_updated': return `${event}:${journeyId}:${props.local_day}`;
    case 'purchase_started': case 'purchase_completed': case 'purchase_cancelled': case 'purchase_failed':
      return `${event}:${props.attempt_id}`;
    default: return null;
  }
}

export function claimOnce(claimed: ReadonlySet<string>, key: string): boolean { return !claimed.has(key); }

/** Carry only learner-scoped claims when a guest creates this account. */
export function carryGuestMilestones(claims: readonly string[], guestId: string, accountId: string): string[] {
  const scoped = ['first_lesson_started', 'lesson_completed', 'streak_updated', 'placement_skipped'];
  const next = new Set(claims);
  for (const claim of claims) {
    for (const event of scoped) {
      const prefix = `${event}:${guestId}`;
      if (claim === prefix || claim.startsWith(`${prefix}:`)) next.add(`${event}:${accountId}${claim.slice(prefix.length)}`);
    }
  }
  return [...next];
}

export type CaptureDiagnostic = { event_id: string; event: string; status: number | 'offline' | 'no_key'; accepted: boolean };
export type CaptureBody = { api_key: string; event: string; distinct_id: string; uuid: string; properties: Record<string, unknown>; timestamp: string };

/** PostHog's client identify wire shape links exactly one previous guest ID. */
export function identityCaptureBody(
  apiKey: string, accountId: string, guestId: string, installId: string, eventId: string, timestamp: string,
): CaptureBody {
  return {
    api_key: apiKey, event: '$identify', distinct_id: accountId, uuid: eventId,
    properties: { $anon_distinct_id: guestId, $lib: 'ealch-app', event_id: eventId, install_id: installId, journey_id: guestId },
    timestamp,
  };
}

/** A capture body as it waits for a retry. The public key is re-added at send time, never stored. */
export type OutboxEntry = Omit<CaptureBody, 'api_key'>;
export const OUTBOX_LIMIT = 200;
export const OUTBOX_MAX_AGE_MS = 14 * 24 * 60 * 60 * 1000;

/** Offline, throttled and server failures are worth another try. A 4xx rejection is a defect to fix, not to repeat. */
export function retryableCapture(diagnostic: CaptureDiagnostic): boolean {
  const { status } = diagnostic;
  return status === 'offline' || status === 408 || status === 429 || (typeof status === 'number' && status >= 500);
}

/** Drops entries too old to be worth sending; their original timestamp would mislead a funnel. */
export function pruneOutbox(outbox: readonly OutboxEntry[], now: number): OutboxEntry[] {
  return outbox.filter((entry) => {
    const at = Date.parse(entry.timestamp);
    return Number.isFinite(at) && now - at <= OUTBOX_MAX_AGE_MS;
  });
}

/** One copy per event ID. When full, the oldest entries win: first_open and onboarding milestones come first. */
export function enqueueOutbox(outbox: readonly OutboxEntry[], entry: OutboxEntry, now: number): OutboxEntry[] {
  const kept = pruneOutbox(outbox, now);
  if (kept.some((queued) => queued.uuid === entry.uuid) || kept.length >= OUTBOX_LIMIT) return kept;
  return [...kept, entry];
}

/** Stored entries are untrusted: one malformed element must not block every later flush. */
export function validOutbox(value: unknown): OutboxEntry[] {
  if (!Array.isArray(value)) return [];
  return value.filter((entry): entry is OutboxEntry => !!entry && typeof entry === 'object'
    && typeof (entry as OutboxEntry).uuid === 'string' && typeof (entry as OutboxEntry).event === 'string'
    && typeof (entry as OutboxEntry).distinct_id === 'string' && typeof (entry as OutboxEntry).timestamp === 'string'
    && !!(entry as OutboxEntry).properties && typeof (entry as OutboxEntry).properties === 'object');
}

export const CAPTURE_TIMEOUT_MS = 10_000;

/** HTTP acknowledgement only; an ingestion warning still requires a test-project check.
 *  A 2xx whose body is not PostHog's JSON (a captive-portal login page) never reached
 *  PostHog, so it counts as offline and the event stays queued. */
export async function captureHttp(
  fetcher: (url: string, init: RequestInit) => Promise<Response>, host: string, body: CaptureBody,
  timeoutMs: number = CAPTURE_TIMEOUT_MS,
): Promise<CaptureDiagnostic> {
  if (!body.api_key) return { event_id: body.uuid, event: body.event, status: 'no_key', accepted: false };
  const controller = typeof AbortController === 'function' ? new AbortController() : null;
  const timer = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;
  try {
    const response = await fetcher(`${host}/capture/`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
      ...(controller ? { signal: controller.signal } : {}),
    });
    if (!response.ok) return { event_id: body.uuid, event: body.event, status: response.status, accepted: false };
    let value: unknown;
    try { value = await response.json(); } catch { value = null; }
    if (!value || typeof value !== 'object') return { event_id: body.uuid, event: body.event, status: 'offline', accepted: false };
    const { status, error } = value as { status?: unknown; error?: unknown };
    const rejectedInBody = status === 0 || status === 'error' || error != null;
    return { event_id: body.uuid, event: body.event, status: response.status, accepted: !rejectedInBody };
  } catch {
    // Network failure or the timeout above.
    return { event_id: body.uuid, event: body.event, status: 'offline', accepted: false };
  } finally {
    if (timer) clearTimeout(timer);
  }
}
