'use client';
// Toast system — ToastProvider renders a bottom-right stack; useToast()
// returns the `toast(msg)` function. Style matches the mock's dark pill.
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import styles from './toast.module.css';

const TOAST_MS = 2_600;

type ToastFn = (msg: string) => void;

interface ToastItem {
  id: number;
  msg: string;
}

const ToastCtx = createContext<ToastFn | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const nextId = useRef(0);

  const toast = useCallback<ToastFn>((msg) => {
    const id = ++nextId.current;
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, TOAST_MS);
  }, []);

  return (
    <ToastCtx.Provider value={toast}>
      {children}
      <div className={styles.stack} aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={styles.toast}>
            <div className={styles.dot} />
            {t.msg}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

/** Returns `toast(msg: string)`. Must be used under <ToastProvider>. */
export function useToast(): ToastFn {
  const toast = useContext(ToastCtx);
  if (!toast) throw new Error('useToast must be used within <ToastProvider>');
  return toast;
}
