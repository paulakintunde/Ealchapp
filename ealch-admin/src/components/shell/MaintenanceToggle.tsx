'use client';
// Maintenance toggle — confirm modal (focus-trapped, Esc closes) → server
// action → toast. Disabled with a tooltip for roles without the permission.
import { useEffect, useRef, useState, useTransition } from 'react';
import { setMaintenance } from '@/app/admin/actions';
import { useToast } from '@/components/toast';
import styles from './MaintenanceToggle.module.css';

export default function MaintenanceToggle({
  on,
  canToggle,
}: {
  on: boolean;
  canToggle: boolean;
}) {
  const [confirming, setConfirming] = useState(false);
  const [pending, startTransition] = useTransition();
  const toast = useToast();
  const dialogRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (confirming) confirmRef.current?.focus();
  }, [confirming]);

  const apply = () => {
    const enabled = !on;
    startTransition(async () => {
      const res = await setMaintenance(enabled);
      setConfirming(false);
      if (res.ok) {
        toast(enabled ? 'Maintenance mode enabled' : 'Maintenance mode disabled');
      } else {
        toast(res.error);
      }
    });
  };

  const onDialogKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      setConfirming(false);
      return;
    }
    if (e.key === 'Tab') {
      // Focus trap: cycle between the dialog's focusable buttons.
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>('button');
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.toggle} ${on ? styles.toggleOn : ''} ${canToggle ? '' : styles.toggleDisabled}`}
        onClick={canToggle ? () => setConfirming(true) : undefined}
        disabled={!canToggle}
        title={canToggle ? undefined : 'Super admin / ops only'}
        aria-label="Maintenance mode"
        aria-checked={on}
        role="switch"
      >
        <span className={styles.knob} />
      </button>

      {confirming ? (
        <div className={styles.overlay} onClick={() => setConfirming(false)}>
          <div
            ref={dialogRef}
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="maint-confirm-title"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onDialogKeyDown}
          >
            <div id="maint-confirm-title" className={styles.dialogTitle}>
              {on ? 'Turn off maintenance mode?' : 'Turn on maintenance mode?'}
            </div>
            <div className={styles.dialogBody}>
              {on
                ? 'Clients will regain access immediately.'
                : 'All clients will see the downtime screen.'}
            </div>
            <div className={styles.dialogActions}>
              <button
                type="button"
                className={styles.cancelBtn}
                onClick={() => setConfirming(false)}
              >
                Cancel
              </button>
              <button
                ref={confirmRef}
                type="button"
                className={`${styles.confirmBtn} ${on ? '' : styles.confirmDanger}`}
                onClick={apply}
                disabled={pending}
              >
                {pending ? 'Applying…' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
