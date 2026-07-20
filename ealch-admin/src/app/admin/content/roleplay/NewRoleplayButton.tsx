'use client';
import { useTransition } from 'react';
import { useToast } from '@/components/toast';
import { createRoleplay } from '../actions';
import styles from '../items/items.module.css';

export default function NewRoleplayButton() {
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  return (
    <button
      type="button"
      className={styles.newBtn}
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          const res = await createRoleplay();
          if (res && !res.ok) toast(res.error);
        })
      }
    >
      {pending ? 'Creating…' : '+ New roleplay'}
    </button>
  );
}
