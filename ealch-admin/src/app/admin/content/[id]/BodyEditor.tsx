'use client';
// JSON body editor — mono textarea with live JSON.parse validation; invalid
// JSON shows an error line (--bad) and disables 'Save draft'.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { saveBody } from '../actions';
import styles from './editor.module.css';

function parseError(text: string): string | null {
  try {
    const v: unknown = JSON.parse(text);
    if (v === null || typeof v !== 'object' || Array.isArray(v)) {
      return 'Body must be a JSON object';
    }
    return null;
  } catch (e) {
    return e instanceof Error ? e.message : 'Invalid JSON';
  }
}

export default function BodyEditor({
  unitId,
  initialJson,
  canWrite,
}: {
  unitId: string;
  initialJson: string;
  canWrite: boolean;
}) {
  const [text, setText] = useState(initialJson);
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const onChange = (next: string) => {
    setText(next);
    setJsonError(parseError(next));
  };

  const save = () =>
    startTransition(async () => {
      const res = await saveBody(unitId, text);
      toast(res.ok ? 'Draft saved' : res.error);
    });

  return (
    <>
      <textarea
        className={`${styles.textarea} ${jsonError ? styles.textareaBad : ''}`}
        value={text}
        onChange={(e) => onChange(e.target.value)}
        disabled={!canWrite}
        spellCheck={false}
        aria-label="Pack body JSON"
      />
      {jsonError && <div className={styles.jsonError}>{jsonError}</div>}
      {canWrite && (
        <div className={styles.btnRow}>
          <button
            type="button"
            className={styles.primaryBtn}
            onClick={save}
            disabled={pending || jsonError !== null}
          >
            {pending ? 'Saving…' : 'Save draft'}
          </button>
          <span className={styles.hint}>Saving moves the pack back to draft.</span>
        </div>
      )}
    </>
  );
}
