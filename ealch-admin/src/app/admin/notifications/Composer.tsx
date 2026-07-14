'use client';
// Campaign composer — template picker, title/message, segment builder with a
// debounced live audience estimate, schedule pills, and send actions.
import {
  useEffect, useMemo, useState, useTransition, type RefObject,
} from 'react';
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/toast';
import { compact } from '@/lib/format';
import { createCampaign } from './actions';
import type {
  SegmentLastSeen, SegmentLevel, SegmentLocale, SegmentPlan, TemplateDTO,
} from './types';
import styles from './notifications.module.css';

const BODY_LIMIT = 120;
const ESTIMATE_DEBOUNCE_MS = 350;

const LEVEL_OPTS: { value: '' | SegmentLevel; label: string }[] = [
  { value: '', label: 'Any level' },
  { value: 'a1', label: 'A1' }, { value: 'a2', label: 'A2' },
  { value: 'b1', label: 'B1' }, { value: 'b2', label: 'B2' },
  { value: 'c1', label: 'C1' }, { value: 'c2', label: 'C2' },
];
const PLAN_OPTS: { value: SegmentPlan; label: string }[] = [
  { value: 'all', label: 'All plans' },
  { value: 'free', label: 'Free' },
  { value: 'plus', label: 'Plus' },
  { value: 'pro', label: 'Pro' },
];
const LAST_SEEN_OPTS: { value: '' | '7' | '30'; label: string }[] = [
  { value: '', label: 'Any' },
  { value: '7', label: '7d+ dormant' },
  { value: '30', label: '30d+ dormant' },
];
const LOCALE_OPTS: { value: '' | SegmentLocale; label: string }[] = [
  { value: '', label: 'Any locale' },
  { value: 'en', label: 'EN' },
  { value: 'fr', label: 'FR' },
];

type SendMode = 'now' | 'schedule' | 'optimal';
const MODE_OPTS: { value: SendMode; label: string }[] = [
  { value: 'now', label: 'Send now' },
  { value: 'schedule', label: 'Schedule' },
  { value: 'optimal', label: 'Optimal per user' },
];

/** Local datetime-local value one hour from now, minutes zeroed. */
function defaultScheduleValue(): string {
  const d = new Date(Date.now() + 60 * 60 * 1000);
  d.setMinutes(0, 0, 0);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function Composer({
  templates,
  canWrite,
  title,
  body,
  onTitleChange,
  onBodyChange,
  titleRef,
}: {
  templates: TemplateDTO[];
  canWrite: boolean;
  title: string;
  body: string;
  onTitleChange: (v: string) => void;
  onBodyChange: (v: string) => void;
  titleRef: RefObject<HTMLInputElement | null>;
}) {
  const toast = useToast();
  const queryClient = useQueryClient();
  const [pending, startTransition] = useTransition();

  const [templateId, setTemplateId] = useState('');
  const [deeplink, setDeeplink] = useState('');
  const [level, setLevel] = useState<'' | SegmentLevel>('');
  const [plan, setPlan] = useState<SegmentPlan>('all');
  const [lastSeen, setLastSeen] = useState<'' | '7' | '30'>('');
  const [locale, setLocale] = useState<'' | SegmentLocale>('');
  const [mode, setMode] = useState<SendMode>('now');
  const [scheduleAt, setScheduleAt] = useState('');

  // Debounce the predicate key so typing through the selects doesn't spam
  // the estimate endpoint; TanStack Query dedupes/caches per key.
  const segKey = useMemo(() => {
    const p = new URLSearchParams();
    if (level) p.set('level', level);
    if (plan !== 'all') p.set('plan', plan);
    if (lastSeen) p.set('lastSeen', lastSeen);
    if (locale) p.set('locale', locale);
    return p.toString();
  }, [level, plan, lastSeen, locale]);
  const [debouncedKey, setDebouncedKey] = useState(segKey);
  useEffect(() => {
    const t = setTimeout(() => setDebouncedKey(segKey), ESTIMATE_DEBOUNCE_MS);
    return () => clearTimeout(t);
  }, [segKey]);

  const { data: estimateData } = useQuery({
    queryKey: ['notif-estimate', debouncedKey],
    queryFn: async (): Promise<{ count: number }> => {
      const res = await fetch(`/api/admin/notifications/estimate?${debouncedKey}`);
      if (!res.ok) throw new Error('Estimate failed');
      return res.json();
    },
    placeholderData: keepPreviousData,
  });
  const estimate = estimateData?.count;

  function pickTemplate(id: string) {
    setTemplateId(id);
    const t = templates.find((x) => x.id === id);
    if (t) {
      onTitleChange(t.title);
      onBodyChange(t.body);
      setDeeplink(t.deeplink ?? '');
    }
  }

  function pickMode(m: SendMode) {
    setMode(m);
    if (m === 'schedule' && !scheduleAt) setScheduleAt(defaultScheduleValue());
  }

  const canSend =
    canWrite && !pending && title.trim().length > 0 && body.trim().length > 0 &&
    (mode !== 'schedule' || scheduleAt.length > 0);

  function send() {
    if (!canSend) return;
    startTransition(async () => {
      const res = await createCampaign({
        title,
        body,
        deeplink: deeplink || null,
        templateId: templateId || null,
        segment: {
          level: level || null,
          plan,
          lastSeenDays: lastSeen ? (Number(lastSeen) as SegmentLastSeen) : null,
          locale: locale || null,
          ...(estimate ? { estimate } : {}),
        },
        mode,
        scheduleAt: mode === 'schedule' ? scheduleAt : null,
      });
      if (res.ok) {
        toast(
          mode === 'schedule'
            ? `Campaign scheduled for ${new Date(scheduleAt).toLocaleString('en-IE', {
                day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
              })}`
            : `Push queued to ${estimate ? `${compact(estimate)} devices` : 'segment'}`,
        );
        onTitleChange('');
        onBodyChange('');
        setTemplateId('');
        setDeeplink('');
        queryClient.invalidateQueries({ queryKey: ['notif-campaigns'] });
      } else {
        toast(res.error);
      }
    });
  }

  const overLimit = body.length > BODY_LIMIT;

  return (
    <section className={styles.card}>
      <div className={styles.cardTitle}>Compose push notification</div>

      {!canWrite && (
        <div className={styles.roHint}>
          Read-only — your role can view campaigns but not send notifications.
        </div>
      )}

      <div className={styles.form}>
        <div>
          <div className={styles.fieldLabel}>TEMPLATE</div>
          <select
            className={styles.select}
            value={templateId}
            onChange={(e) => pickTemplate(e.target.value)}
            disabled={!canWrite}
            aria-label="Template"
          >
            <option value="">Start from scratch…</option>
            {templates.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} ({t.locale.toUpperCase()})
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className={styles.fieldLabel}>TITLE</div>
          <input
            ref={titleRef}
            className={styles.input}
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="e.g. Your streak is on the line"
            disabled={!canWrite}
            aria-label="Title"
          />
        </div>

        <div>
          <div className={styles.fieldLabel}>MESSAGE</div>
          <textarea
            className={styles.textarea}
            value={body}
            onChange={(e) => onBodyChange(e.target.value)}
            placeholder="Keep it under 120 characters for best open rates"
            disabled={!canWrite}
            aria-label="Message"
          />
          <div className={`${styles.counter} ${overLimit ? styles.counterOver : ''}`}>
            {body.length}/{BODY_LIMIT}
          </div>
        </div>

        <div>
          <div className={styles.fieldLabel}>DEEPLINK</div>
          <input
            className={styles.input}
            value={deeplink}
            onChange={(e) => setDeeplink(e.target.value)}
            placeholder="ealch://… (optional)"
            disabled={!canWrite}
            aria-label="Deeplink"
          />
        </div>

        <div>
          <div className={styles.fieldLabel}>AUDIENCE</div>
          <div className={styles.segGrid}>
            <div className={styles.segCell}>
              <div className={styles.segLabel}>Level</div>
              <select
                className={styles.select}
                value={level}
                onChange={(e) => setLevel(e.target.value as '' | SegmentLevel)}
                disabled={!canWrite}
                aria-label="Level"
              >
                {LEVEL_OPTS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div className={styles.segCell}>
              <div className={styles.segLabel}>Plan</div>
              <select
                className={styles.select}
                value={plan}
                onChange={(e) => setPlan(e.target.value as SegmentPlan)}
                disabled={!canWrite}
                aria-label="Plan"
              >
                {PLAN_OPTS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div className={styles.segCell}>
              <div className={styles.segLabel}>Last seen</div>
              <select
                className={styles.select}
                value={lastSeen}
                onChange={(e) => setLastSeen(e.target.value as '' | '7' | '30')}
                disabled={!canWrite}
                aria-label="Last seen"
              >
                {LAST_SEEN_OPTS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div className={styles.segCell}>
              <div className={styles.segLabel}>Locale</div>
              <select
                className={styles.select}
                value={locale}
                onChange={(e) => setLocale(e.target.value as '' | SegmentLocale)}
                disabled={!canWrite}
                aria-label="Locale"
              >
                {LOCALE_OPTS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.reach}>
            Estimated reach:{' '}
            <span className={styles.reachNum}>
              {estimate !== undefined ? compact(estimate) : '…'}
            </span>{' '}
            devices
          </div>
        </div>

        <div className={styles.pillRow}>
          {MODE_OPTS.map((o) => (
            <button
              key={o.value}
              type="button"
              className={`${styles.pill} ${mode === o.value ? styles.pillActive : ''}`}
              onClick={() => pickMode(o.value)}
              disabled={!canWrite}
            >
              {o.label}
            </button>
          ))}
          {mode === 'schedule' && (
            <input
              type="datetime-local"
              className={styles.dtInput}
              value={scheduleAt}
              onChange={(e) => setScheduleAt(e.target.value)}
              disabled={!canWrite}
              aria-label="Schedule time"
            />
          )}
        </div>

        <div className={styles.composerActions}>
          <button type="button" className={styles.btnPrimary} onClick={send} disabled={!canSend}>
            {pending ? 'Sending…' : 'Send notification'}
          </button>
          <button
            type="button"
            className={styles.btnGhost}
            onClick={() => toast('Test sent to your device')}
            disabled={!canWrite}
          >
            Send test to my device
          </button>
        </div>
      </div>
    </section>
  );
}
