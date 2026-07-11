'use client';
// Revision 'Restore' — copies the snapshot body back into the unit as a
// fresh draft (content.write, audited).
import { useTransition } from 'react';
import { useToast } from '@/components/toast';
import { restoreRevision } from '../actions';

export default function RestoreButton({
  revisionId,
  className,
}: {
  revisionId: string;
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
          const res = await restoreRevision(revisionId);
          toast(res.ok ? 'Revision restored to draft' : res.error);
        })
      }
    >
      {pending ? 'Restoring…' : 'Restore'}
    </button>
  );
}
