'use client';
// Per-row actions: copy the full public URL, archive/unarchive (links.write).
import { useTransition } from 'react';
import { useToast } from '@/components/toast';
import { setLinkArchived } from './actions';
import styles from './links.module.css';

export default function RowActions({
  id,
  slug,
  archived,
  canWrite,
}: {
  id: string;
  slug: string;
  archived: boolean;
  canWrite: boolean;
}) {
  const toast = useToast();
  const [pending, startTransition] = useTransition();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/l/${slug}`);
      toast(`Copied ealch.app/${slug}`);
    } catch {
      toast('Copy failed — clipboard unavailable');
    }
  };

  const toggleArchived = () => {
    startTransition(async () => {
      const res = await setLinkArchived(id, !archived);
      if (res.ok) {
        toast(archived ? `Link ealch.app/${slug} restored` : `Link ealch.app/${slug} archived`);
      } else {
        toast(`Couldn’t update link — ${res.error}`);
      }
    });
  };

  return (
    <div className={styles.actions}>
      <button type="button" className={styles.actionBtn} onClick={copy}>
        Copy
      </button>
      {canWrite ? (
        <button
          type="button"
          className={`${styles.actionBtn} ${styles.actionMut}`}
          onClick={toggleArchived}
          disabled={pending}
        >
          {archived ? 'Unarchive' : 'Archive'}
        </button>
      ) : null}
    </div>
  );
}
