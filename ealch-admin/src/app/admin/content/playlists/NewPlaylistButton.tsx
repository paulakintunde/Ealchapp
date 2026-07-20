'use client';
import { useTransition } from 'react';
import { useToast } from '@/components/toast';
import { createPlaylist } from '../actions';
import styles from '../items/items.module.css';

export default function NewPlaylistButton() {
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  return (
    <button
      type="button"
      className={styles.newBtn}
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          const res = await createPlaylist();
          if (res && !res.ok) toast(res.error);
        })
      }
    >
      {pending ? 'Creating…' : '+ New playlist'}
    </button>
  );
}
