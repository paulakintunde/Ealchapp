'use client';
// Review queue 'Resolve' — marks a content flag resolved (content.write).
import { useTransition } from 'react';
import { useToast } from '@/components/toast';
import { resolveFlag } from './actions';

export default function ResolveFlagButton({
  flagId,
  className,
}: {
  flagId: string;
  className: string;
}) {
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  return (
    <button
      type="button"
      className={className}
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          const res = await resolveFlag(flagId);
          toast(res.ok ? 'Flag resolved' : res.error);
        })
      }
    >
      {pending ? 'Resolving…' : 'Resolve'}
    </button>
  );
}
