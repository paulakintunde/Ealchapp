'use client';
// Failed-payments (dunning) card — bad-tinted per the mock, with the
// "Retry all now" action (super_admin only; hidden otherwise).
import { useTransition } from 'react';
import { useToast } from '@/components/toast';
import { retryDunning } from './actions';
import styles from './billing.module.css';

export default function FailedPaymentsCard({
  count,
  atRiskLabel,
  canWrite,
}: {
  count: number;
  atRiskLabel: string;
  canWrite: boolean;
}) {
  const toast = useToast();
  const [pending, startTransition] = useTransition();

  if (count === 0) {
    return (
      <div className={styles.failedCardOk}>
        <div className={styles.failedTitleOk}>No failed payments</div>
        <div className={styles.failedMeta}>Dunning queue is clear — nothing at risk.</div>
      </div>
    );
  }

  const retry = () => {
    startTransition(async () => {
      const res = await retryDunning();
      if (res.ok) toast(`Payment retry succeeded for ${res.recovered} accounts`);
      else toast(res.error);
    });
  };

  return (
    <div className={styles.failedCard}>
      <div className={styles.failedTitle}>
        {count} failed payment{count === 1 ? '' : 's'}
      </div>
      <div className={styles.failedMeta}>{atRiskLabel} at risk · dunning emails sent to 9</div>
      {canWrite && (
        <button type="button" className={styles.retryBtn} onClick={retry} disabled={pending}>
          {pending ? 'Retrying…' : 'Retry all now'}
        </button>
      )}
    </div>
  );
}
