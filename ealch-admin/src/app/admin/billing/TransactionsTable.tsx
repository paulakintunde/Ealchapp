'use client';
// Recent transactions table + refund modal. Rows arrive pre-formatted from
// the RSC page; this component owns hover, the Refund flow and toasts.
import { useEffect, useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { refundPayment } from './actions';
import styles from './billing.module.css';

export interface TxRow {
  id: string;
  customer: string;
  planLabel: string;
  // Restating the sub_store union here is what made adding 'paystack' a
  // compile error in this file (Phase 10 migration 0015). Kept as a literal
  // union because this is a 'use client' file that should not import the
  // server schema module — but it must mirror schema.ts subStore exactly.
  store: 'app_store' | 'play' | 'stripe' | 'paystack';
  amountLabel: string; // signed, pre-formatted (refunds negative)
  isRefund: boolean;
  kindLabel: string;
  chip: 'Paid' | 'Failed' | 'Refunded';
  dateLabel: string;
  refundable: boolean;
}

const STORE_TITLE: Record<TxRow['store'], string> = {
  app_store: 'App Store',
  play: 'Google Play',
  stripe: 'Stripe',
  paystack: 'Paystack',
};

/** Tiny 14px store glyphs: apple, play triangle, stripe S. */
function StoreIcon({ store }: { store: TxRow['store'] }) {
  return (
    <span className={styles.storeIcon} title={STORE_TITLE[store]} aria-label={STORE_TITLE[store]}>
      {store === 'app_store' && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14.9 2c.2 1.2-.3 2.4-1 3.3-.7.9-1.9 1.6-3 1.5-.2-1.2.4-2.4 1-3.2.7-.9 2-1.5 3-1.6Z" />
          <path d="M15 7.3c1.2 0 2.5.7 3.4 1.8-2.9 1.6-2.4 5.6.6 6.8-.6 1.4-1.7 3.4-3.2 3.4-1 0-1.4-.6-2.7-.6s-1.8.6-2.7.6c-1.6 0-3.7-3.2-3.7-6.2 0-3.3 2.2-5 4.2-5 1 0 1.9.7 2.6.7.6 0 1.5-.5 2.5-.5.3 0 .7-.1 1 0Z" />
        </svg>
      )}
      {store === 'play' && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.5 3.2v17.6c0 .5.6.9 1 .6l14.6-8.4c.5-.3.5-1 0-1.2L5.5 2.7c-.4-.3-1 0-1 .5Z" />
        </svg>
      )}
      {store === 'stripe' && (
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="5" fill="currentColor" />
          <text
            x="12"
            y="17"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fontFamily="var(--font-ui)"
            fill="var(--card)"
          >
            S
          </text>
        </svg>
      )}
      {store === 'paystack' && (
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="5" fill="currentColor" />
          <text
            x="12"
            y="17"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fontFamily="var(--font-ui)"
            fill="var(--card)"
          >
            P
          </text>
        </svg>
      )}
    </span>
  );
}

const CHIP_CLASS: Record<TxRow['chip'], string> = {
  Paid: styles.chipOk,
  Failed: styles.chipBad,
  Refunded: styles.chipMut,
};

export default function TransactionsTable({
  rows,
  canWrite,
}: {
  rows: TxRow[];
  canWrite: boolean;
}) {
  const toast = useToast();
  const [target, setTarget] = useState<TxRow | null>(null);
  const [reason, setReason] = useState('');
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (!target) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setTarget(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [target]);

  const open = (row: TxRow) => {
    setReason('');
    setTarget(row);
  };

  const submit = () => {
    if (!target || !reason.trim()) return;
    startTransition(async () => {
      const res = await refundPayment(target.id, reason);
      if (res.ok) {
        toast('Refund issued');
        setTarget(null);
      } else {
        toast(res.error);
      }
    });
  };

  return (
    <div className={styles.tableCard}>
      <div className={styles.tableTitle}>Recent transactions</div>
      {rows.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon} aria-hidden="true">
            ◎
          </div>
          No transactions yet
        </div>
      ) : (
        <>
          <div className={styles.thead}>
            <div>Customer</div>
            <div>Plan</div>
            <div>Store</div>
            <div>Amount</div>
            <div>Kind</div>
            <div>Status</div>
            <div>Date</div>
            <div />
          </div>
          {rows.map((row) => (
            <div key={row.id} className={styles.row}>
              <div className={styles.cName}>{row.customer}</div>
              <div className={styles.cMut}>{row.planLabel}</div>
              <StoreIcon store={row.store} />
              <div className={`${styles.cAmount}${row.isRefund ? ` ${styles.cAmountNeg}` : ''}`}>
                {row.amountLabel}
              </div>
              <div className={styles.cMut}>{row.kindLabel}</div>
              <div>
                <span className={`${styles.chip} ${CHIP_CLASS[row.chip]}`}>{row.chip}</span>
              </div>
              <div className={styles.cMut}>{row.dateLabel}</div>
              <div>
                {canWrite && row.refundable && (
                  <button type="button" className={styles.refundLink} onClick={() => open(row)}>
                    Refund
                  </button>
                )}
              </div>
            </div>
          ))}
        </>
      )}

      {target && (
        <div className={styles.overlay} onClick={() => setTarget(null)}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label="Issue refund"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalTitle}>Refund {target.amountLabel}</div>
            <div className={styles.modalText}>
              {target.customer} · {target.planLabel} — the charge is reversed and, for a full
              refund, the subscription is marked refunded.
            </div>
            <textarea
              className={styles.reasonInput}
              placeholder="Reason (required)"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              autoFocus
            />
            <div className={styles.modalActions}>
              <button type="button" className={styles.btnGhost} onClick={() => setTarget(null)}>
                Cancel
              </button>
              <button
                type="button"
                className={styles.btnDanger}
                onClick={submit}
                disabled={pending || !reason.trim()}
              >
                {pending ? 'Refunding…' : 'Issue refund'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
