'use client';
// Template library — list + inline create/edit/delete form. Mutations run
// through server actions (RBAC + audit) and the list refreshes via
// revalidatePath on the RSC page.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { createTemplate, deleteTemplate, updateTemplate } from './actions';
import type { SegmentLocale, TemplateDTO } from './types';
import styles from './notifications.module.css';

interface FormState {
  name: string;
  locale: SegmentLocale;
  title: string;
  body: string;
  deeplink: string;
}

const EMPTY_FORM: FormState = { name: '', locale: 'en', title: '', body: '', deeplink: '' };

export default function TemplateLibrary({
  templates,
  canWrite,
}: {
  templates: TemplateDTO[];
  canWrite: boolean;
}) {
  const toast = useToast();
  const [pending, startTransition] = useTransition();
  // null = closed, 'new' = creating, otherwise the template id being edited.
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);

  function openNew() {
    setEditing('new');
    setForm(EMPTY_FORM);
  }

  function openEdit(t: TemplateDTO) {
    if (!canWrite) return;
    setEditing(t.id);
    setForm({
      name: t.name,
      locale: t.locale,
      title: t.title,
      body: t.body,
      deeplink: t.deeplink ?? '',
    });
  }

  function close() {
    setEditing(null);
    setForm(EMPTY_FORM);
  }

  function save() {
    if (!editing) return;
    startTransition(async () => {
      const input = {
        name: form.name,
        locale: form.locale,
        title: form.title,
        body: form.body,
        deeplink: form.deeplink || null,
      };
      const res =
        editing === 'new' ? await createTemplate(input) : await updateTemplate(editing, input);
      if (res.ok) {
        toast(editing === 'new' ? 'Template created' : 'Template saved');
        close();
      } else {
        toast(res.error);
      }
    });
  }

  function remove() {
    if (!editing || editing === 'new') return;
    startTransition(async () => {
      const res = await deleteTemplate(editing);
      if (res.ok) {
        toast('Template deleted');
        close();
      } else {
        toast(res.error);
      }
    });
  }

  const set = (patch: Partial<FormState>) => setForm((f) => ({ ...f, ...patch }));
  const canSave = !pending && form.name.trim() && form.title.trim() && form.body.trim();

  return (
    <section className={styles.card}>
      <div className={styles.tplHead}>
        <div className={styles.tplHeadTitle}>Template library</div>
        {canWrite && (
          <button type="button" className={styles.newBtn} onClick={openNew} disabled={pending}>
            + New template
          </button>
        )}
      </div>

      {templates.length === 0 && editing === null ? (
        <div className={styles.tplEmpty}>
          <div>No templates yet — save your best-performing copy for reuse.</div>
          {canWrite && (
            <button type="button" className={styles.emptyCta} onClick={openNew}>
              + New template
            </button>
          )}
        </div>
      ) : (
        templates.map((t) => (
          <button
            key={t.id}
            type="button"
            className={styles.tplRow}
            onClick={() => openEdit(t)}
            disabled={!canWrite}
            title={canWrite ? 'Edit template' : undefined}
          >
            <div className={styles.tplMain}>
              <div className={styles.tplName}>{t.name}</div>
              <div className={styles.tplPreview}>{t.title}</div>
            </div>
            <span className={`${styles.locChip} ${t.locale === 'fr' ? styles.locFr : styles.locEn}`}>
              {t.locale.toUpperCase()}
            </span>
          </button>
        ))
      )}

      {editing !== null && (
        <div className={styles.tplForm}>
          <div className={styles.tplFormRow}>
            <input
              className={styles.inputSm}
              value={form.name}
              onChange={(e) => set({ name: e.target.value })}
              placeholder="Template name (e.g. streak-saver)"
              aria-label="Template name"
            />
            <select
              className={styles.selectSm}
              value={form.locale}
              onChange={(e) => set({ locale: e.target.value as SegmentLocale })}
              aria-label="Locale"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
          </div>
          <input
            className={styles.inputSm}
            value={form.title}
            onChange={(e) => set({ title: e.target.value })}
            placeholder="Notification title"
            aria-label="Notification title"
          />
          <textarea
            className={styles.textareaSm}
            value={form.body}
            onChange={(e) => set({ body: e.target.value })}
            placeholder="Notification body"
            aria-label="Notification body"
          />
          <input
            className={styles.inputSm}
            value={form.deeplink}
            onChange={(e) => set({ deeplink: e.target.value })}
            placeholder="Deeplink — ealch://… (optional)"
            aria-label="Deeplink"
          />
          <div className={styles.tplBtns}>
            <button type="button" className={styles.btnSmPrimary} onClick={save} disabled={!canSave}>
              {editing === 'new' ? 'Create template' : 'Save changes'}
            </button>
            <button type="button" className={styles.btnSmGhost} onClick={close}>
              Cancel
            </button>
            {editing !== 'new' && (
              <button type="button" className={styles.btnSmDanger} onClick={remove} disabled={pending}>
                Delete
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
