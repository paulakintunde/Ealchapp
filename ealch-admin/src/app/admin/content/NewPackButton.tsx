'use client';
// '+ New pack' — server action creates a draft scenario then redirects to
// its editor (the redirect is handled by the action itself).
import { useTransition } from 'react';
import { useToast } from '@/components/toast';
import { createUnit } from './actions';

export default function NewPackButton({ className }: { className: string }) {
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  return (
    <button
      type="button"
      className={className}
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          const res = await createUnit();
          // On success the action redirects; we only land here on failure.
          if (res && !res.ok) toast(res.error);
        })
      }
    >
      {pending ? 'Creating…' : '+ New pack'}
    </button>
  );
}
