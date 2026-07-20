'use client';
// Template + curriculum-target + count -> Generate. Reuses the "new panel"
// look items/NewItemButton.tsx already established rather than inventing a
// second form style for what is, structurally, the same kind of small
// upfront-inputs-then-submit panel.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { ITEM_LEVELS, isValidTheme } from '../items/meta';
import { runGeneration } from './actions';
import styles from '../items/items.module.css';

interface TemplateOption {
  unitId: string;
  id: string;
  target: string;
  name: string;
  levels: string[];
}

interface ThemeOption {
  slug: string;
  title: string;
  levelRangeLo: string;
  levelRangeHi: string;
}

export default function GenerateForm({
  templates,
  themes,
}: {
  templates: TemplateOption[];
  themes: ThemeOption[];
}) {
  const [templateId, setTemplateId] = useState(templates[0]?.id ?? '');
  const [level, setLevel] = useState('a1');
  const [theme, setTheme] = useState('');
  const [count, setCount] = useState(10);
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<{ createdIds: string[]; model: string } | null>(null);
  const toast = useToast();

  const themeValid = isValidTheme(theme.trim().toLowerCase());
  const canSubmit = templateId && themeValid && count >= 1 && count <= 100 && !pending;

  const run = () =>
    startTransition(async () => {
      setResult(null);
      const res = await runGeneration({ templateId, level, theme: theme.trim().toLowerCase(), count });
      if (res.ok) {
        toast(`${res.createdIds.length} draft(s) created via ${res.model}`);
        setResult({ createdIds: res.createdIds, model: res.model });
      } else {
        toast(res.error);
      }
    });

  return (
    <div>
      <div className={styles.newPanelRow} style={{ padding: '12px 0 0' }}>
        <select className={styles.newSelect} value={templateId} onChange={(e) => setTemplateId(e.target.value)}>
          {templates.map((t) => (
            <option key={t.unitId} value={t.id}>{t.name} ({t.id})</option>
          ))}
        </select>
        <select className={styles.newSelect} value={level} onChange={(e) => setLevel(e.target.value)}>
          {ITEM_LEVELS.filter((l) => l !== 'c2').map((l) => (
            <option key={l} value={l}>{l.toUpperCase()}</option>
          ))}
        </select>
        <input
          className={styles.newInput}
          placeholder="theme (e.g. cafe)"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          spellCheck={false}
          list="generate-theme-options"
        />
        <datalist id="generate-theme-options">
          {themes.map((t) => <option key={t.slug} value={t.slug} />)}
        </datalist>
        <input
          className={styles.newInput}
          style={{ flex: 'unset', width: 70 }}
          type="number"
          min={1}
          max={100}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>

      <div className={styles.newPanelRow} style={{ padding: '10px 0' }}>
        <button type="button" className={styles.newBtn} onClick={run} disabled={!canSubmit}>
          {pending ? 'Generating…' : 'Generate'}
        </button>
        {!themeValid && theme.length > 0 && <span className={styles.newHint}>lowercase, digits, hyphens only</span>}
        {templates.length === 0 && <span className={styles.newHint}>no item-target templates yet</span>}
      </div>

      {result && (
        <div style={{ padding: '10px 0', fontSize: 12.5 }}>
          {result.createdIds.length} draft item(s) created via {result.model}:
          <ul style={{ margin: '6px 0 0 18px' }}>
            {result.createdIds.map((id) => (
              <li key={id}>
                <a href={`/admin/content/items/${id}`}>{id}</a>
              </li>
            ))}
          </ul>
          <a href={`/admin/content/items?level=${level}&theme=${theme.trim().toLowerCase()}&status=draft`} style={{ display: 'inline-block', marginTop: 6 }}>
            View the whole batch in Items →
          </a>
        </div>
      )}
    </div>
  );
}
