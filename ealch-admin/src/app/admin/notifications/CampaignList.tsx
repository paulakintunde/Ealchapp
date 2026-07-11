'use client';
// 'Recent sends' — all campaigns newest first, polled every 4s so the shell's
// queue worker progress (sending → sent, live counters) shows up without a
// reload. Pause/resume for scheduled/sending campaigns.
import { useTransition } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/toast';
import { compact, pct } from '@/lib/format';
import { pauseCampaign, resumeCampaign } from './actions';
import { segmentSummary, type CampaignDTO, type CampaignStatus } from './types';
import styles from './notifications.module.css';

const POLL_MS = 4_000;

const CHIP_CLASS: Record<CampaignStatus, string> = {
  draft: styles.chipGrey,
  scheduled: styles.chipScheduled,
  sending: styles.chipSending,
  sent: styles.chipSent,
  paused: styles.chipGrey,
};

const CHIP_LABEL: Record<CampaignStatus, string> = {
  draft: 'Draft',
  scheduled: 'Scheduled',
  sending: 'Sending',
  sent: 'Sent',
  paused: 'Paused',
};

async function fetchCampaigns(): Promise<CampaignDTO[]> {
  const res = await fetch('/api/admin/notifications/campaigns');
  if (!res.ok) throw new Error('Failed to load campaigns');
  const json = (await res.json()) as { campaigns: CampaignDTO[] };
  return json.campaigns;
}

function shortDateTime(iso: string): string {
  return new Date(iso).toLocaleString('en-IE', {
    day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
  });
}

function metaLine(c: CampaignDTO): string {
  const parts: string[] = [segmentSummary(c.segment)];
  if (c.status === 'scheduled' && c.scheduleAt) {
    parts.push(`scheduled ${shortDateTime(c.scheduleAt)}`);
  } else if (c.scheduleAt && (c.status === 'sent' || c.status === 'sending' || c.status === 'paused')) {
    parts.push(shortDateTime(c.scheduleAt));
  }
  if (c.sentCount > 0 || c.status === 'sent' || c.status === 'sending') {
    parts.push(`${compact(c.sentCount)} delivered`);
  }
  return parts.join(' · ');
}

function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

export default function CampaignList({
  initialCampaigns,
  canWrite,
  onCompose,
}: {
  initialCampaigns: CampaignDTO[];
  canWrite: boolean;
  onCompose: () => void;
}) {
  const toast = useToast();
  const queryClient = useQueryClient();
  const [pending, startTransition] = useTransition();

  const { data: campaigns = initialCampaigns } = useQuery({
    queryKey: ['notif-campaigns'],
    queryFn: fetchCampaigns,
    initialData: initialCampaigns,
    refetchInterval: POLL_MS,
  });

  function act(action: 'pause' | 'resume', c: CampaignDTO) {
    startTransition(async () => {
      const res = action === 'pause' ? await pauseCampaign(c.id) : await resumeCampaign(c.id);
      if (res.ok) {
        toast(action === 'pause' ? `Campaign "${c.name}" paused` : `Campaign "${c.name}" resumed`);
        queryClient.invalidateQueries({ queryKey: ['notif-campaigns'] });
      } else {
        toast(res.error);
      }
    });
  }

  return (
    <section className={styles.listCard}>
      <div className={styles.listHead}>
        <span>Recent sends</span>
        <span className={styles.listHeadMeta}>live · refreshes every 4s</span>
      </div>

      {campaigns.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}><BellIcon /></div>
          <div>No campaigns yet — your first push will show up here.</div>
          <button type="button" className={styles.emptyCta} onClick={onCompose}>
            Compose a notification
          </button>
        </div>
      ) : (
        campaigns.map((c) => (
          <div key={c.id} className={styles.row}>
            <div className={styles.rowMain}>
              <div className={styles.rowName}>
                <span className={styles.rowNameText}>{c.name}</span>
                <span className={`${styles.chip} ${CHIP_CLASS[c.status]}`}>
                  {c.status === 'sending' && <span className={styles.pulseDot} />}
                  {CHIP_LABEL[c.status]}
                </span>
              </div>
              <div className={styles.rowMeta}>{metaLine(c)}</div>
            </div>

            {canWrite && (c.status === 'scheduled' || c.status === 'sending') && (
              <button
                type="button"
                className={styles.rowBtn}
                onClick={() => act('pause', c)}
                disabled={pending}
              >
                Pause
              </button>
            )}
            {canWrite && c.status === 'paused' && (
              <button
                type="button"
                className={styles.rowBtn}
                onClick={() => act('resume', c)}
                disabled={pending}
              >
                Resume
              </button>
            )}

            {c.status === 'sent' && c.openRate !== null && (
              <div className={styles.openRate}>
                <div className={styles.openPct}>{pct(c.openRate)}</div>
                <div className={styles.openLbl}>open rate</div>
              </div>
            )}
          </div>
        ))
      )}
    </section>
  );
}
