'use client';
// User detail drawer — right side, 420px, slides in. Esc closes, focus is
// trapped inside. Shows profile, subscription + payments, recent learning
// sessions, and support actions (RBAC-gated, each behind a confirm modal).
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { eur, relTime } from '@/lib/format';
import { useToast } from '@/components/toast';
import {
  deleteUser,
  gdprExport,
  grantFreeMonth,
  sendResetPassword,
  setBanned,
} from '@/app/admin/users/actions';
import { Avatar, LevelChip, PlanChip, StatusChip } from './bits';
import type { UserDetail } from './types';
import styles from './UserDrawer.module.css';

interface Confirm {
  key: string;
  title: string;
  body: string;
  confirmLabel: string;
  destructive?: boolean;
  run: () => Promise<{ ok: boolean; error?: string }>;
  successMsg: string;
}

const FOCUSABLE =
  'button:not([disabled]), a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function fmtDuration(s: number): string {
  const m = Math.floor(s / 60);
  return m > 0 ? `${m}m ${s % 60}s` : `${s}s`;
}

const STORE_LABEL: Record<string, string> = {
  app_store: 'App Store',
  play: 'Google Play',
  stripe: 'Stripe',
};

export default function UserDrawer({
  userId,
  canAct,
  onClose,
}: {
  userId: string;
  canAct: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const toast = useToast();
  const panelRef = useRef<HTMLDivElement>(null);
  const [confirm, setConfirm] = useState<Confirm | null>(null);
  const [busy, setBusy] = useState(false);

  const { data, isPending, isError } = useQuery<UserDetail>({
    queryKey: ['admin-user', userId],
    queryFn: async () => {
      const res = await fetch(`/api/admin/users/${userId}`);
      if (!res.ok) throw new Error(`Failed to load user (${res.status})`);
      return res.json();
    },
  });

  // Focus the panel on open; Esc closes (confirm modal first), Tab is
  // trapped inside the drawer.
  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        if (confirm) setConfirm(null);
        else onClose();
      } else if (e.key === 'Tab') {
        const root = panelRef.current;
        if (!root) return;
        const focusables = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
          (el) => el.offsetParent !== null,
        );
        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && (active === first || active === root)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [confirm, onClose],
  );

  const afterMutation = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['admin-user', userId] });
    queryClient.invalidateQueries({ queryKey: ['admin-users'] });
    router.refresh(); // stat cards are RSC-rendered
  }, [queryClient, router, userId]);

  const runConfirm = async () => {
    if (!confirm || busy) return;
    setBusy(true);
    try {
      const res = await confirm.run();
      if (res.ok) {
        toast(confirm.successMsg);
        afterMutation();
        setConfirm(null);
      } else {
        toast(res.error ?? 'Something went wrong');
      }
    } finally {
      setBusy(false);
    }
  };

  const u = data?.user;
  const banned = u?.status === 'banned';

  const actions: (Confirm & { label: string })[] = u
    ? [
        {
          key: 'grant',
          label: 'Grant free month',
          title: 'Grant free month',
          body: `Extend ${u.name}'s subscription by 30 days (or create a €0 comp subscription if they have none)?`,
          confirmLabel: 'Grant month',
          run: () => grantFreeMonth(u.id),
          successMsg: 'Free month granted',
        },
        {
          key: 'reset',
          label: 'Send reset-password email',
          title: 'Send reset-password email',
          body: `Send a password reset link to ${u.email}?`,
          confirmLabel: 'Send email',
          run: () => sendResetPassword(u.id),
          successMsg: 'Reset-password email sent',
        },
        {
          key: 'ban',
          label: banned ? 'Unban user' : 'Ban user',
          title: banned ? 'Unban user' : 'Ban user',
          body: banned
            ? `Restore ${u.name}'s access? Their status returns to active.`
            : `Ban ${u.name}? They will be signed out and blocked from the app.`,
          confirmLabel: banned ? 'Unban' : 'Ban user',
          destructive: !banned,
          run: () => setBanned(u.id, !banned),
          successMsg: banned ? 'User unbanned' : 'User banned',
        },
        {
          key: 'gdpr',
          label: 'GDPR export',
          title: 'GDPR data export',
          body: `Download a JSON export of every row stored for ${u.email}? The export is audited.`,
          confirmLabel: 'Export JSON',
          run: async () => {
            const res = await gdprExport(u.id);
            if (res.ok) {
              const blob = new Blob([res.json], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = res.filename;
              a.click();
              URL.revokeObjectURL(url);
            }
            return res;
          },
          successMsg: 'GDPR export downloaded',
        },
        {
          key: 'delete',
          label: 'Delete user',
          title: 'Delete user',
          body: `Delete ${u.name}? Their account is soft-deleted (status → deleted) and hidden from the app. This is destructive.`,
          confirmLabel: 'Delete user',
          destructive: true,
          run: () => deleteUser(u.id),
          successMsg: 'User deleted',
        },
      ]
    : [];

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      onKeyDown={onKeyDown}
      role="presentation"
    >
      <div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label={u ? `${u.name} — user detail` : 'User detail'}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.head}>
          <div className={styles.headTitle}>User detail</div>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        {isPending ? (
          <div className={styles.body}>
            <div className={`skeleton ${styles.skelProfile}`} />
            <div className={`skeleton ${styles.skelBlock}`} />
            <div className={`skeleton ${styles.skelBlock}`} />
          </div>
        ) : isError || !data || !u ? (
          <div className={styles.body}>
            <div className={styles.errorNote}>Couldn’t load this user.</div>
          </div>
        ) : (
          <div className={styles.body}>
            {/* Profile */}
            <div className={styles.profile}>
              <Avatar id={u.id} name={u.name} size={42} />
              <div className={styles.profileMeta}>
                <div className={styles.profileName}>{u.name}</div>
                <div className={styles.profileEmail}>{u.email}</div>
                <div className={styles.profileChips}>
                  <LevelChip level={u.level} />
                  {data.subscription ? <PlanChip plan={data.subscription.plan} /> : <PlanChip plan="free" />}
                  <StatusChip status={u.status} />
                </div>
              </div>
            </div>

            <div className={styles.factGrid}>
              <Fact label="Locale" value={u.locale.toUpperCase()} />
              <Fact label="Platform" value={u.platform === 'ios' ? 'iOS' : 'Android'} />
              <Fact label="Country" value={u.country ?? '—'} />
              <Fact label="Joined" value={fmtDate(u.createdAt)} />
              <Fact label="Streak" value={`${data.stats?.streakDays ?? 0} d`} />
              <Fact label="Confidence" value={String(data.stats?.confidenceScore ?? 0)} />
              <Fact label="Sessions" value={String(data.stats?.sessionsTotal ?? 0)} />
              <Fact
                label="Last seen"
                value={u.lastSeenAt ? relTime(new Date(u.lastSeenAt)) : '—'}
              />
            </div>

            {/* Subscription + payments */}
            <div className={styles.sectionTitle}>Subscription</div>
            {data.subscription ? (
              <div className={styles.subCard}>
                <div className={styles.subRow}>
                  <PlanChip plan={data.subscription.plan} />
                  <span className={styles.subMeta}>
                    {STORE_LABEL[data.subscription.store] ?? data.subscription.store} ·{' '}
                    {data.subscription.status} · {eur(data.subscription.mrrCents)}/mo
                  </span>
                </div>
                <div className={styles.subDates}>
                  Started {fmtDate(data.subscription.startedAt)}
                  {data.subscription.renewsAt
                    ? ` · renews ${fmtDate(data.subscription.renewsAt)}`
                    : ''}
                </div>
              </div>
            ) : (
              <div className={styles.noneNote}>Free — no subscription on file.</div>
            )}

            {data.payments.length > 0 ? (
              <div className={styles.payList}>
                {data.payments.map((p) => (
                  <div key={p.id} className={styles.payRow}>
                    <span className={p.kind === 'refund' ? styles.payRefund : styles.payKind}>
                      {p.kind === 'refund' ? 'Refund' : 'Charge'}
                    </span>
                    <span className={styles.payDate}>{fmtDate(p.occurredAt)}</span>
                    <span
                      className={`${styles.payAmount} ${p.kind === 'refund' ? styles.payRefund : ''}`}
                    >
                      {p.kind === 'refund' ? '−' : ''}
                      {eur(p.amountCents)}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}

            {/* Recent sessions */}
            <div className={styles.sectionTitle}>Recent sessions</div>
            {data.sessions.length === 0 ? (
              <div className={styles.noneNote}>No learning sessions yet.</div>
            ) : (
              <div className={styles.sessionList}>
                {data.sessions.map((s) => (
                  <div key={s.id} className={styles.session}>
                    <div className={styles.sessionTop}>
                      <span className={styles.sessionName}>{s.scenario}</span>
                      <span className={styles.sessionMeta}>
                        {fmtDuration(s.durationS)} · conf {s.confidence}
                      </span>
                    </div>
                    <div className={styles.sessionDate}>{relTime(new Date(s.createdAt))}</div>
                    {s.mistakes.length > 0 ? (
                      <div className={styles.mistakes}>
                        {s.mistakes.map((m, i) => (
                          <span key={`${s.id}-${i}`} className={styles.mistake}>
                            {m}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            {canAct ? (
              <>
                <div className={styles.sectionTitle}>Actions</div>
                <div className={styles.actions}>
                  {actions.map((a) => (
                    <button
                      key={a.key}
                      type="button"
                      className={`${styles.actionBtn} ${a.destructive ? styles.actionDanger : ''}`}
                      onClick={() => setConfirm(a)}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        )}

        {confirm ? (
          <div className={styles.confirmOverlay} onClick={() => !busy && setConfirm(null)}>
            <div
              className={styles.confirmBox}
              role="alertdialog"
              aria-modal="true"
              aria-label={confirm.title}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.confirmTitle}>{confirm.title}</div>
              <div className={styles.confirmBody}>{confirm.body}</div>
              <div className={styles.confirmBtns}>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setConfirm(null)}
                  disabled={busy}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className={`${styles.confirmBtn} ${confirm.destructive ? styles.confirmDanger : ''}`}
                  onClick={runConfirm}
                  disabled={busy}
                  autoFocus
                >
                  {busy ? 'Working…' : confirm.confirmLabel}
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.fact}>
      <div className={styles.factLabel}>{label}</div>
      <div className={styles.factValue}>{value}</div>
    </div>
  );
}
