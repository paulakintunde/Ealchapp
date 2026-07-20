'use client';
// Block mode — a BlockNote canvas holding one custom 'ealchItem' block. The
// block's own render is the SAME ClassicItemForm fields, read/written
// through React context rather than BlockNote's own prop-persistence — the
// data of record stays the lifted `form`/`setForm` state (and saveItem),
// never the BlockNote document. What block mode actually buys an author is
// BlockNote's chrome: drag handle, block menu, and the ability to insert
// ordinary text/note blocks alongside the item to leave commentary, which
// classic mode has no room for. This is the shared infrastructure
// (custom-block registration) Workstream 3 Phase 3 builds on for the Den's
// LessonSection block library, where blocks are the natural fit.
import { createContext, useContext, useMemo, type Dispatch, type SetStateAction } from 'react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/core/style.css';
import '@blocknote/mantine/style.css';
import '@mantine/core/styles.css';
import { BlockNoteSchema, defaultBlockSpecs } from '@blocknote/core';
import { createReactBlockSpec, useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import { MantineProvider } from '@mantine/core';
import type { ItemInput } from '../actions';
import ClassicItemForm from './ClassicItemForm';
import styles from './editor.module.css';

type Ctx = { form: ItemInput; setForm: Dispatch<SetStateAction<ItemInput>>; canWrite: boolean };
const ItemFormCtx = createContext<Ctx | null>(null);

const ealchItemSpec = createReactBlockSpec(
  { type: 'ealchItem', propSchema: {}, content: 'none' },
  {
    render: () => {
      const ctx = useContext(ItemFormCtx);
      if (!ctx) return null;
      return (
        <div className={styles.blockCard}>
          <div className={styles.blockCardLabel}>Item — {ctx.form.fr || 'untitled'}</div>
          <ClassicItemForm form={ctx.form} setForm={ctx.setForm} canWrite={ctx.canWrite} />
        </div>
      );
    },
  },
);

const schema = BlockNoteSchema.create({
  blockSpecs: { ...defaultBlockSpecs, ealchItem: ealchItemSpec() },
});

export default function BlockItemView({
  form,
  setForm,
  canWrite,
}: {
  form: ItemInput;
  setForm: Dispatch<SetStateAction<ItemInput>>;
  canWrite: boolean;
}) {
  const editor = useCreateBlockNote({
    schema,
    initialContent: [{ type: 'ealchItem' }],
  });
  const ctxValue = useMemo<Ctx>(() => ({ form, setForm, canWrite }), [form, setForm, canWrite]);

  return (
    <ItemFormCtx.Provider value={ctxValue}>
      <MantineProvider>
        <div className={styles.blockCanvas}>
          <BlockNoteView editor={editor} editable={canWrite} theme="light" />
        </div>
      </MantineProvider>
    </ItemFormCtx.Provider>
  );
}
