'use client';
// "+ New link" button + focus-trapped create modal. Slug auto-kebabs from the
// campaign name (until manually edited) and is collision-checked server-side
// on blur and on submit ("Slug taken" inline error). Esc closes.
import { useEffect, useRef, useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { checkSlug, createLink, type LinkChannel } from './actions';
import styles from './links.module.css';

const CHANNELS: LinkChannel[] = ['email', 'social', 'ads', 'podcast', 'qr'];

function kebab(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function NewLink() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={styles.newBtn} onClick={() => setOpen(true)}>
        + New link
      </button>
      {open ? <Modal onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function Modal({ onClose }: { onClose: () => void }) {
  const toast = useToast();
  const [pending, startTransition] = useTransition();

  const [destination, setDestination] = useState('');
  const [campaign, setCampaign] = useState('');
  const [channel, setChannel] = useState<LinkChannel>('social');
  const [slug, setSlug] = useState('');
  const [slugTouched, setSlugTouched] = useState(false);
  const [slugError, setSlugError] = useState<string | null>(null);
  const [destError, setDestError] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Focus trap: focus first field on mount, cycle Tab within the dialog,
  // Esc closes, and focus returns to the opener on unmount.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    firstFieldRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !modalRef.current) return;
      const focusables = modalRef.current.querySelectorAll<HTMLElement>(
        'input, select, button, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      opener?.focus();
    };
  }, [onClose]);

  const onCampaignChange = (v: string) => {
    setCampaign(v);
    if (!slugTouched) {
      setSlug(kebab(v));
      setSlugError(null);
    }
  };

  const verifySlug = async (value: string): Promise<boolean> => {
    const clean = value.trim().toLowerCase();
    if (!clean) {
      setSlugError('Slug is required');
      return false;
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(clean)) {
      setSlugError('Lowercase letters, digits and dashes only');
      return false;
    }
    const { taken } = await checkSlug(clean);
    if (taken) {
      setSlugError('Slug taken');
      return false;
    }
    setSlugError(null);
    return true;
  };

  const validDestination = (v: string): boolean => {
    try {
      const url = new URL(v.trim());
      return url.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const submit = () => {
    if (pending) return;
    if (!validDestination(destination)) {
      setDestError('Enter a valid https:// URL');
      return;
    }
    setDestError(null);
    startTransition(async () => {
      const okSlug = await verifySlug(slug);
      if (!okSlug) return;
      const res = await createLink({
        slug: slug.trim().toLowerCase(),
        destinationUrl: destination.trim(),
        campaign,
        channel,
      });
      if (res.ok) {
        toast(`Link created — ealch.app/${slug.trim().toLowerCase()}`);
        onClose();
      } else if (res.error === 'Slug taken') {
        setSlugError('Slug taken');
      } else {
        toast(`Couldn’t create link — ${res.error}`);
      }
    });
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label="New tracked link"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalTitle}>New tracked link</div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="nl-dest">
            Destination URL
          </label>
          <input
            id="nl-dest"
            ref={firstFieldRef}
            className={`${styles.input} ${destError ? styles.inputError : ''}`}
            placeholder="https://ealch.app/download"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
              setDestError(null);
            }}
            onBlur={() => {
              if (destination && !validDestination(destination)) {
                setDestError('Enter a valid https:// URL');
              }
            }}
          />
          {destError ? <div className={styles.errText}>{destError}</div> : null}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="nl-campaign">
            Campaign
          </label>
          <input
            id="nl-campaign"
            className={styles.input}
            placeholder="July newsletter"
            value={campaign}
            onChange={(e) => onCampaignChange(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="nl-channel">
            Channel
          </label>
          <select
            id="nl-channel"
            className={styles.select}
            value={channel}
            onChange={(e) => setChannel(e.target.value as LinkChannel)}
          >
            {CHANNELS.map((c) => (
              <option key={c} value={c}>
                {c[0].toUpperCase() + c.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="nl-slug">
            Slug
          </label>
          <div className={styles.slugWrap}>
            <span className={styles.slugPrefix}>ealch.app/</span>
            <input
              id="nl-slug"
              className={`${styles.input} ${slugError ? styles.inputError : ''}`}
              placeholder="july-newsletter"
              value={slug}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(e.target.value);
                setSlugError(null);
              }}
              onBlur={() => {
                if (slug.trim()) void verifySlug(slug);
              }}
            />
          </div>
          {slugError ? <div className={styles.errText}>{slugError}</div> : null}
        </div>

        <div className={styles.btnRow}>
          <button type="button" className={styles.btnGhost} onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={submit}
            disabled={pending || !destination.trim() || !slug.trim()}
          >
            {pending ? 'Creating…' : 'Create link'}
          </button>
        </div>
      </div>
    </div>
  );
}
