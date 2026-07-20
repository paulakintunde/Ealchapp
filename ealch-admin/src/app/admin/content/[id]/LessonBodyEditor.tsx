'use client';
// The Den editor — the LessonSection block library (one sub-form per
// SectionType) plus the narration markup editor, replacing the raw-JSON
// textarea for kind='lesson' content_units. Builds the exact Lesson shape
// from ealch-v2/src/content/schema.ts and saves through the existing
// saveBody action.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { saveBody } from '../actions';
import { compileStageMarkup } from './parseNarrationMarkup';
import styles from './editor.module.css';

const LEVELS = ['sons', 'a1', 'a2', 'b1', 'b2', 'c1'];
const SECTION_TYPES = [
  'teach', 'steps', 'examples', 'useCases', 'hacks', 'cheatSheet',
  'commonErrors', 'focus', 'table', 'audio', 'practice', 'quiz',
] as const;
const PRACTICE_SKILLS = ['read', 'write', 'speak', 'listen'];
const NARRATION_STAGES = ['warm', 'focus', 'input', 'practice', 'produce', 'check', 'cheat'] as const;

type SectionType = (typeof SECTION_TYPES)[number];
// Deliberately loose (Record<string, unknown>) rather than the full
// discriminated union: this editor is a plain form over jsonb, not a
// type-checked consumer of schema.ts, and the shape it produces is what
// validateLesson (the publish gate) actually enforces.
type Section = { type: SectionType; title: string } & Record<string, unknown>;

type LessonBody = {
  id: string;
  unitId: string;
  seq: number;
  title: string;
  level: string;
  tag: string;
  intro: string;
  sections: Section[];
  itemIds: string[];
  version: number;
  grammarAssumed?: string[];
  grammarIntroduced?: string[];
  narration?: {
    camilleVoiceId: string;
    ratioEnFr: number;
    stagesMarkup: Record<string, string>; // admin-only working format, compiled on save
  };
};

function blankSection(type: SectionType): Section {
  switch (type) {
    case 'teach': return { type, title: '', body: '' };
    case 'steps': return { type, title: '', steps: [] };
    case 'examples': return { type, title: '', examples: [] };
    case 'useCases': return { type, title: '', cases: [] };
    case 'hacks': return { type, title: '', hacks: [] };
    case 'cheatSheet': return { type, title: '', rows: [] };
    case 'commonErrors': return { type, title: '', errors: [] };
    case 'focus': return { type, title: '', points: [] };
    case 'table': return { type, title: '', cols: [], rows: [] };
    case 'audio': return { type, title: '', lines: [] };
    case 'practice': return { type, title: '', skill: 'read', itemIds: [] };
    case 'quiz': return { type, title: '', questions: [] };
  }
}

const lines = (s: string) => s.split('\n').map((l) => l.trim()).filter(Boolean);
const csv = (s: string) => s.split(',').map((l) => l.trim()).filter(Boolean);

/** One section's fields, switched on type. Array-of-string fields (steps,
 *  points, lines) are authored as one-per-line text for speed; array-of-
 *  object fields get compact repeatable rows. */
function SectionFields({
  section,
  onChange,
  canWrite,
}: {
  section: Section;
  onChange: (patch: Record<string, unknown>) => void;
  canWrite: boolean;
}) {
  const ta = (k: string, ph: string, value: string) => (
    <textarea
      className={styles.textarea}
      style={{ minHeight: 80 }}
      value={value}
      onChange={(e) => onChange({ [k]: lines(e.target.value) })}
      disabled={!canWrite}
      placeholder={ph}
    />
  );

  switch (section.type) {
    case 'teach':
      return (
        <textarea className={styles.textarea} style={{ minHeight: 100 }} value={(section.body as string) ?? ''}
          onChange={(e) => onChange({ body: e.target.value })} disabled={!canWrite} placeholder="The explanation itself." />
      );
    case 'steps':
      return ta('steps', 'One step per line', ((section.steps as string[]) ?? []).join('\n'));
    case 'focus':
      return ta('points', 'One point per line, short', ((section.points as string[]) ?? []).join('\n'));
    case 'audio':
      return ta('lines', 'One spoken line per line', ((section.lines as string[]) ?? []).join('\n'));
    case 'examples': {
      const rows = (section.examples as { fr: string; en: string; note?: string }[]) ?? [];
      const set = (i: number, patch: object) => onChange({ examples: rows.map((r, j) => (j === i ? { ...r, ...patch } : r)) });
      return (
        <RowList
          rows={rows}
          onAdd={() => onChange({ examples: [...rows, { fr: '', en: '' }] })}
          onRemove={(i) => onChange({ examples: rows.filter((_, j) => j !== i) })}
          canWrite={canWrite}
          renderRow={(r, i) => (
            <>
              <input className={styles.input} placeholder="fr" value={r.fr} onChange={(e) => set(i, { fr: e.target.value })} disabled={!canWrite} />
              <input className={styles.input} placeholder="en" value={r.en} onChange={(e) => set(i, { en: e.target.value })} disabled={!canWrite} />
              <input className={styles.input} placeholder="note (optional)" value={r.note ?? ''} onChange={(e) => set(i, { note: e.target.value })} disabled={!canWrite} />
            </>
          )}
        />
      );
    }
    case 'useCases': {
      const rows = (section.cases as { situation: string; fr: string; en: string }[]) ?? [];
      const set = (i: number, patch: object) => onChange({ cases: rows.map((r, j) => (j === i ? { ...r, ...patch } : r)) });
      return (
        <RowList
          rows={rows}
          onAdd={() => onChange({ cases: [...rows, { situation: '', fr: '', en: '' }] })}
          onRemove={(i) => onChange({ cases: rows.filter((_, j) => j !== i) })}
          canWrite={canWrite}
          renderRow={(r, i) => (
            <>
              <input className={styles.input} placeholder="situation" value={r.situation} onChange={(e) => set(i, { situation: e.target.value })} disabled={!canWrite} />
              <input className={styles.input} placeholder="fr" value={r.fr} onChange={(e) => set(i, { fr: e.target.value })} disabled={!canWrite} />
              <input className={styles.input} placeholder="en" value={r.en} onChange={(e) => set(i, { en: e.target.value })} disabled={!canWrite} />
            </>
          )}
        />
      );
    }
    case 'hacks': {
      const rows = (section.hacks as { hack: string; why: string }[]) ?? [];
      const set = (i: number, patch: object) => onChange({ hacks: rows.map((r, j) => (j === i ? { ...r, ...patch } : r)) });
      return (
        <RowList
          rows={rows}
          onAdd={() => onChange({ hacks: [...rows, { hack: '', why: '' }] })}
          onRemove={(i) => onChange({ hacks: rows.filter((_, j) => j !== i) })}
          canWrite={canWrite}
          renderRow={(r, i) => (
            <>
              <input className={styles.input} placeholder="the hack" value={r.hack} onChange={(e) => set(i, { hack: e.target.value })} disabled={!canWrite} />
              <input className={styles.input} placeholder="why it works" value={r.why} onChange={(e) => set(i, { why: e.target.value })} disabled={!canWrite} />
            </>
          )}
        />
      );
    }
    case 'cheatSheet': {
      const rows = (section.rows as { k: string; v: string }[]) ?? [];
      const set = (i: number, patch: object) => onChange({ rows: rows.map((r, j) => (j === i ? { ...r, ...patch } : r)) });
      return (
        <RowList
          rows={rows}
          onAdd={() => onChange({ rows: [...rows, { k: '', v: '' }] })}
          onRemove={(i) => onChange({ rows: rows.filter((_, j) => j !== i) })}
          canWrite={canWrite}
          renderRow={(r, i) => (
            <>
              <input className={styles.input} placeholder="key" value={r.k} onChange={(e) => set(i, { k: e.target.value })} disabled={!canWrite} />
              <input className={styles.input} placeholder="value" value={r.v} onChange={(e) => set(i, { v: e.target.value })} disabled={!canWrite} />
            </>
          )}
        />
      );
    }
    case 'commonErrors': {
      const rows = (section.errors as { wrong: string; right: string; why: string }[]) ?? [];
      const set = (i: number, patch: object) => onChange({ errors: rows.map((r, j) => (j === i ? { ...r, ...patch } : r)) });
      return (
        <RowList
          rows={rows}
          onAdd={() => onChange({ errors: [...rows, { wrong: '', right: '', why: '' }] })}
          onRemove={(i) => onChange({ errors: rows.filter((_, j) => j !== i) })}
          canWrite={canWrite}
          renderRow={(r, i) => (
            <>
              <input className={styles.input} placeholder="wrong" value={r.wrong} onChange={(e) => set(i, { wrong: e.target.value })} disabled={!canWrite} />
              <input className={styles.input} placeholder="right" value={r.right} onChange={(e) => set(i, { right: e.target.value })} disabled={!canWrite} />
              <input className={styles.input} placeholder="why" value={r.why} onChange={(e) => set(i, { why: e.target.value })} disabled={!canWrite} />
            </>
          )}
        />
      );
    }
    case 'table': {
      const cols = (section.cols as string[]) ?? [];
      const rows = (section.rows as string[][]) ?? [];
      return (
        <>
          <label className={styles.label}>Columns (comma-separated)</label>
          <input className={styles.input} value={cols.join(', ')} onChange={(e) => onChange({ cols: csv(e.target.value) })} disabled={!canWrite} />
          <label className={styles.label} style={{ marginTop: 8, display: 'block' }}>Rows — one per line, cells comma-separated</label>
          <textarea
            className={styles.textarea}
            style={{ minHeight: 80 }}
            value={rows.map((r) => r.join(', ')).join('\n')}
            onChange={(e) => onChange({ rows: lines(e.target.value).map(csv) })}
            disabled={!canWrite}
          />
        </>
      );
    }
    case 'practice': {
      const skill = (section.skill as string) ?? 'read';
      const itemIds = (section.itemIds as string[]) ?? [];
      return (
        <>
          <label className={styles.label}>Skill</label>
          <select className={styles.select} value={skill} onChange={(e) => onChange({ skill: e.target.value })} disabled={!canWrite}>
            {PRACTICE_SKILLS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <label className={styles.label} style={{ marginTop: 8, display: 'block' }}>Item ids (comma-separated) — the join that feeds the SRS</label>
          <input className={styles.input} value={itemIds.join(', ')} onChange={(e) => onChange({ itemIds: csv(e.target.value) })} disabled={!canWrite} placeholder="fr.a1.cafe.001, fr.a1.cafe.002" spellCheck={false} />
        </>
      );
    }
    case 'quiz': {
      const qs = (section.questions as { q: string; opts: string[]; correct: number; why?: string }[]) ?? [];
      const set = (i: number, patch: object) => onChange({ questions: qs.map((r, j) => (j === i ? { ...r, ...patch } : r)) });
      return (
        <>
          {qs.map((q, i) => (
            <div key={i} style={{ border: '1px solid var(--line)', borderRadius: 8, padding: 8, marginTop: 8 }}>
              <input className={styles.input} placeholder="question" value={q.q} onChange={(e) => set(i, { q: e.target.value })} disabled={!canWrite} />
              <input className={styles.input} style={{ marginTop: 6 }} placeholder="options, comma-separated" value={q.opts.join(', ')} onChange={(e) => set(i, { opts: csv(e.target.value) })} disabled={!canWrite} />
              <input className={styles.input} style={{ marginTop: 6, width: 100 }} type="number" placeholder="correct idx" value={q.correct} onChange={(e) => set(i, { correct: Number(e.target.value) })} disabled={!canWrite} />
              {canWrite && <button type="button" className={styles.dangerBtn} style={{ marginTop: 6 }} onClick={() => onChange({ questions: qs.filter((_, j) => j !== i) })}>Remove question</button>}
            </div>
          ))}
          {canWrite && <button type="button" className={styles.ghostBtn} style={{ marginTop: 8 }} onClick={() => onChange({ questions: [...qs, { q: '', opts: ['', ''], correct: 0 }] })}>+ Question</button>}
        </>
      );
    }
  }
}

function RowList<T>({
  rows, onAdd, onRemove, renderRow, canWrite,
}: {
  rows: T[];
  onAdd: () => void;
  onRemove: (i: number) => void;
  renderRow: (r: T, i: number) => React.ReactNode;
  canWrite: boolean;
}) {
  return (
    <>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'flex', gap: 6, marginTop: 6, alignItems: 'center' }}>
          {renderRow(r, i)}
          {canWrite && <button type="button" className={styles.ghostBtn} onClick={() => onRemove(i)}>✕</button>}
        </div>
      ))}
      {canWrite && <button type="button" className={styles.ghostBtn} style={{ marginTop: 8 }} onClick={onAdd}>+ Row</button>}
    </>
  );
}

export default function LessonBodyEditor({
  unitId,
  initialBody,
  canWrite,
}: {
  unitId: string;
  initialBody: unknown;
  canWrite: boolean;
}) {
  const initial = (initialBody ?? {}) as Partial<LessonBody>;
  const [l, setL] = useState<LessonBody>({
    id: initial.id ?? '',
    unitId: initial.unitId ?? '',
    seq: initial.seq ?? 1,
    title: initial.title ?? '',
    level: initial.level ?? 'a1',
    tag: initial.tag ?? '',
    intro: initial.intro ?? '',
    sections: initial.sections ?? [],
    itemIds: initial.itemIds ?? [],
    version: initial.version ?? 1,
    grammarAssumed: initial.grammarAssumed,
    grammarIntroduced: initial.grammarIntroduced,
    narration: initial.narration ?? { camilleVoiceId: '', ratioEnFr: 0.7, stagesMarkup: {} },
  });
  const [addingType, setAddingType] = useState<SectionType>('teach');
  const [compilePreview, setCompilePreview] = useState<{ stage: string; count: number; issues: string[] }[] | null>(null);
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const set = <K extends keyof LessonBody>(k: K, v: LessonBody[K]) => setL((cur) => ({ ...cur, [k]: v }));
  const setSection = (i: number, patch: Record<string, unknown>) =>
    setL((cur) => ({ ...cur, sections: cur.sections.map((s, j) => (j === i ? { ...s, ...patch } : s)) }));
  const addSection = () => setL((cur) => ({ ...cur, sections: [...cur.sections, blankSection(addingType)] }));
  const removeSection = (i: number) => setL((cur) => ({ ...cur, sections: cur.sections.filter((_, j) => j !== i) }));
  const moveSection = (i: number, dir: -1 | 1) =>
    setL((cur) => {
      const j = i + dir;
      if (j < 0 || j >= cur.sections.length) return cur;
      const sections = [...cur.sections];
      [sections[i], sections[j]] = [sections[j]!, sections[i]!];
      return { ...cur, sections };
    });

  const stagesUsed = Object.keys(l.narration?.stagesMarkup ?? {});
  const nextStage = NARRATION_STAGES.find((s) => !stagesUsed.includes(s));
  const addStage = () => {
    if (!nextStage) return;
    setL((cur) => ({ ...cur, narration: { ...cur.narration!, stagesMarkup: { ...cur.narration!.stagesMarkup, [nextStage]: '' } } }));
  };
  const setStageMarkup = (stage: string, text: string) =>
    setL((cur) => ({ ...cur, narration: { ...cur.narration!, stagesMarkup: { ...cur.narration!.stagesMarkup, [stage]: text } } }));
  const removeStage = (stage: string) =>
    setL((cur) => {
      const stagesMarkup = { ...cur.narration!.stagesMarkup };
      delete stagesMarkup[stage];
      return { ...cur, narration: { ...cur.narration!, stagesMarkup } };
    });

  const compileNarration = () => {
    const preview = NARRATION_STAGES.filter((s) => stagesUsed.includes(s)).map((stage) => {
      const { items, issues } = compileStageMarkup(l.narration!.stagesMarkup[stage] ?? '', stage);
      return { stage, count: items.length, issues: issues.map((i) => i.message) };
    });
    setCompilePreview(preview);
  };

  const save = () =>
    startTransition(async () => {
      // Compile narration markup → the structured schema shape at save time,
      // per the authoring guide §5.4: authors write markup, the compiled
      // (NarrationSegment|NarrationInteraction)[] is what's actually stored.
      const orderedStages = NARRATION_STAGES.filter((s) => stagesUsed.includes(s));
      const compiledStages = orderedStages.map((stage) => {
        const { items } = compileStageMarkup(l.narration!.stagesMarkup[stage] ?? '', stage);
        return { stage, segments: items };
      });
      const body: Record<string, unknown> = {
        id: l.id, unitId: l.unitId, seq: l.seq, title: l.title, level: l.level,
        tag: l.tag, intro: l.intro, sections: l.sections, itemIds: l.itemIds, version: l.version,
        ...(l.grammarAssumed?.length ? { grammarAssumed: l.grammarAssumed } : {}),
        ...(l.grammarIntroduced?.length ? { grammarIntroduced: l.grammarIntroduced } : {}),
        ...(orderedStages.length && l.narration?.camilleVoiceId
          ? { narration: { camilleVoiceId: l.narration.camilleVoiceId, ratioEnFr: l.narration.ratioEnFr, stages: compiledStages } }
          : {}),
      };
      const res = await saveBody(unitId, JSON.stringify(body));
      toast(res.ok ? 'Draft saved' : res.error);
    });

  return (
    <>
      <div className={styles.formGrid}>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label className={styles.label} htmlFor="ls-title">Title</label>
          <input id="ls-title" className={styles.input} value={l.title} onChange={(e) => set('title', e.target.value)} disabled={!canWrite} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="ls-unit">Unit id</label>
          <input id="ls-unit" className={styles.input} value={l.unitId} onChange={(e) => set('unitId', e.target.value)} disabled={!canWrite} placeholder="a1.01" spellCheck={false} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="ls-id">Lesson id</label>
          <input id="ls-id" className={styles.input} value={l.id} onChange={(e) => set('id', e.target.value)} disabled={!canWrite} placeholder="a1.01.l1" spellCheck={false} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="ls-level">Level</label>
          <select id="ls-level" className={styles.select} value={l.level} onChange={(e) => set('level', e.target.value)} disabled={!canWrite}>
            {LEVELS.map((lv) => <option key={lv} value={lv}>{lv.toUpperCase()}</option>)}
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="ls-tag">Eyebrow tag</label>
          <input id="ls-tag" className={styles.input} value={l.tag} onChange={(e) => set('tag', e.target.value)} disabled={!canWrite} placeholder="SONS · LEÇON 03" />
        </div>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label className={styles.label} htmlFor="ls-intro">Intro</label>
          <input id="ls-intro" className={styles.input} value={l.intro} onChange={(e) => set('intro', e.target.value)} disabled={!canWrite} />
        </div>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label className={styles.label} htmlFor="ls-items">Item ids taught (comma-separated)</label>
          <input id="ls-items" className={styles.input} value={l.itemIds.join(', ')} onChange={(e) => set('itemIds', csv(e.target.value))} disabled={!canWrite} spellCheck={false} />
        </div>
      </div>

      {/* ── Sections: the block library ── */}
      <div style={{ marginTop: 20 }}>
        <div className={styles.cardTitle} style={{ fontSize: 12.5 }}>Sections ({l.sections.length})</div>
        {l.sections.map((s, i) => (
          <div key={i} style={{ border: '1px solid var(--line)', borderRadius: 10, padding: 12, marginTop: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className={styles.sectionLabel}>{s.type}</span>
              {canWrite && (
                <div style={{ display: 'flex', gap: 6 }}>
                  <button type="button" className={styles.ghostBtn} onClick={() => moveSection(i, -1)} disabled={i === 0}>↑</button>
                  <button type="button" className={styles.ghostBtn} onClick={() => moveSection(i, 1)} disabled={i === l.sections.length - 1}>↓</button>
                  <button type="button" className={styles.dangerBtn} onClick={() => removeSection(i)}>Remove</button>
                </div>
              )}
            </div>
            <input
              className={styles.input}
              style={{ marginTop: 8 }}
              placeholder="Section title"
              value={s.title}
              onChange={(e) => setSection(i, { title: e.target.value })}
              disabled={!canWrite}
            />
            <div style={{ marginTop: 8 }}>
              <SectionFields section={s} onChange={(patch) => setSection(i, patch)} canWrite={canWrite} />
            </div>
          </div>
        ))}
        {canWrite && (
          <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
            <select className={styles.select} value={addingType} onChange={(e) => setAddingType(e.target.value as SectionType)}>
              {SECTION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <button type="button" className={styles.darkBtn} onClick={addSection}>+ Add section</button>
          </div>
        )}
      </div>

      {/* ── Narration ── */}
      <div style={{ marginTop: 20 }}>
        <div className={styles.cardTitle} style={{ fontSize: 12.5 }}>Narration (Den script)</div>
        <div className={styles.cardSub}>
          Markup per stage — [FR]…[/FR], [pause:N], [sfx:name]. Compiled to the stored schema on save (authoring guide §5).
        </div>
        <div className={styles.formGrid} style={{ marginTop: 8 }}>
          <div className={styles.field}>
            <label className={styles.label}>Camille voice id</label>
            <input className={styles.input} value={l.narration?.camilleVoiceId ?? ''} onChange={(e) => setL((cur) => ({ ...cur, narration: { ...cur.narration!, camilleVoiceId: e.target.value } }))} disabled={!canWrite} placeholder="camille-fr-ca-01" />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>EN:FR ratio (0-1, EN share)</label>
            <input className={styles.input} type="number" step="0.1" min="0" max="1" value={l.narration?.ratioEnFr ?? 0.7} onChange={(e) => setL((cur) => ({ ...cur, narration: { ...cur.narration!, ratioEnFr: Number(e.target.value) } }))} disabled={!canWrite} />
          </div>
        </div>

        {NARRATION_STAGES.filter((s) => stagesUsed.includes(s)).map((stage) => (
          <div key={stage} style={{ marginTop: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label className={styles.label}>{stage}</label>
              {canWrite && <button type="button" className={styles.ghostBtn} onClick={() => removeStage(stage)}>Remove stage</button>}
            </div>
            <textarea
              className={styles.textarea}
              style={{ minHeight: 70 }}
              value={l.narration?.stagesMarkup[stage] ?? ''}
              onChange={(e) => setStageMarkup(stage, e.target.value)}
              disabled={!canWrite}
              placeholder="Ever ordered a coffee and frozen up? [FR]Je voudrais un café.[/FR] [pause:4]"
            />
          </div>
        ))}
        {canWrite && nextStage && (
          <button type="button" className={styles.darkBtn} style={{ marginTop: 10 }} onClick={addStage}>+ Add {nextStage} stage</button>
        )}

        {stagesUsed.length > 0 && (
          <div style={{ marginTop: 10 }}>
            <button type="button" className={styles.ghostBtn} onClick={compileNarration}>Compile & preview</button>
            {compilePreview && (
              <div style={{ marginTop: 8, fontSize: 12 }}>
                {compilePreview.map((p) => (
                  <div key={p.stage} style={{ marginTop: 4 }}>
                    <strong>{p.stage}</strong>: {p.count} item{p.count === 1 ? '' : 's'}
                    {p.issues.length > 0 && (
                      <ul style={{ margin: '4px 0 0 16px', color: 'var(--bad)' }}>
                        {p.issues.map((iss, k) => <li key={k}>{iss}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {canWrite && (
        <div className={styles.btnRow}>
          <button type="button" className={styles.primaryBtn} onClick={save} disabled={pending}>
            {pending ? 'Saving…' : 'Save draft'}
          </button>
          <span className={styles.hint}>Saving compiles narration and keeps the lesson in draft.</span>
        </div>
      )}
    </>
  );
}
