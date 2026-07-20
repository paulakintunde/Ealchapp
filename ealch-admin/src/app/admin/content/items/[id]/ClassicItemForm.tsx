'use client';
// Classic mode — every Item field as a plain structured form, grouped into
// the same sections BlockItemView renders as blocks (Meaning, Pronunciation
// & drills, Exam/SRS spine). Both modes write the same ItemInput; this is
// the fuller, easier-to-scan view for a single item.
import type { Dispatch, SetStateAction } from 'react';
import type { ItemInput } from '../actions';
import {
  ITEM_DRILL_KINDS, ITEM_DRILL_LABEL, ITEM_EXAM_SKILLS, ITEM_GENDERS,
  ITEM_KIND_LABEL, ITEM_KINDS, ITEM_MODALITIES, ITEM_REGISTERS,
} from '../meta';
import styles from './editor.module.css';

type Props = {
  form: ItemInput;
  setForm: Dispatch<SetStateAction<ItemInput>>;
  canWrite: boolean;
};

export default function ClassicItemForm({ form, setForm, canWrite }: Props) {
  const set = <K extends keyof ItemInput>(k: K, v: ItemInput[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleDrill = (d: string) =>
    setForm((f) => ({
      ...f,
      drills: f.drills.includes(d) ? f.drills.filter((x) => x !== d) : [...f.drills, d],
    }));

  const setList = (k: 'tags' | 'grammarPoints', text: string) =>
    set(k, text.split(',').map((s) => s.trim()).filter(Boolean));

  return (
    <div className={styles.classicForm}>
      {/* ── Meaning ── */}
      <div className={styles.formSection}>
        <div className={styles.sectionLabel}>Meaning</div>
        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="it-kind">Kind</label>
            <select id="it-kind" className={styles.select} value={form.kind} onChange={(e) => set('kind', e.target.value)} disabled={!canWrite}>
              {ITEM_KINDS.map((k) => <option key={k} value={k}>{ITEM_KIND_LABEL[k]}</option>)}
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="it-gender">Gender (nouns)</label>
            <select id="it-gender" className={styles.select} value={form.gender} onChange={(e) => set('gender', e.target.value)} disabled={!canWrite}>
              <option value="">—</option>
              {ITEM_GENDERS.map((g) => <option key={g} value={g}>{g === 'm' ? 'Masculine' : 'Feminine'}</option>)}
            </select>
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label className={styles.label} htmlFor="it-fr">French</label>
            <input id="it-fr" className={styles.input} value={form.fr} onChange={(e) => set('fr', e.target.value)} disabled={!canWrite} placeholder="un café" />
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label className={styles.label} htmlFor="it-en">English gloss</label>
            <input id="it-en" className={styles.input} value={form.en} onChange={(e) => set('en', e.target.value)} disabled={!canWrite} placeholder="a coffee" />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="it-ipa">IPA</label>
            <input id="it-ipa" className={styles.input} value={form.ipa} onChange={(e) => set('ipa', e.target.value)} disabled={!canWrite} spellCheck={false} />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="it-image">imageRef</label>
            <input id="it-image" className={styles.input} value={form.imageRef} onChange={(e) => set('imageRef', e.target.value)} disabled={!canWrite} placeholder="images/objets/cafe.webp" spellCheck={false} />
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label className={styles.label} htmlFor="it-ex-fr">Example (fr)</label>
            <input id="it-ex-fr" className={styles.input} value={form.exampleFr} onChange={(e) => set('exampleFr', e.target.value)} disabled={!canWrite} placeholder="Un café, s'il vous plaît." />
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label className={styles.label} htmlFor="it-ex-en">Example (en)</label>
            <input id="it-ex-en" className={styles.input} value={form.exampleEn} onChange={(e) => set('exampleEn', e.target.value)} disabled={!canWrite} placeholder="A coffee, please." />
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label className={styles.label} htmlFor="it-notes">Notes</label>
            <input id="it-notes" className={styles.input} value={form.notes} onChange={(e) => set('notes', e.target.value)} disabled={!canWrite} placeholder="A teaching note, hack or clue" />
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label className={styles.label} htmlFor="it-tags">Tags (comma-separated)</label>
            <input id="it-tags" className={styles.input} value={form.tags.join(', ')} onChange={(e) => setList('tags', e.target.value)} disabled={!canWrite} placeholder="liaison, nasal" />
          </div>
        </div>
      </div>

      {/* ── Drills ── */}
      <div className={styles.formSection}>
        <div className={styles.sectionLabel}>Drills</div>
        <div className={styles.drillGrid}>
          {ITEM_DRILL_KINDS.map((d) => (
            <label key={d} className={styles.drillCheck}>
              <input type="checkbox" checked={form.drills.includes(d)} onChange={() => toggleDrill(d)} disabled={!canWrite} />
              {ITEM_DRILL_LABEL[d]}
            </label>
          ))}
        </div>
        {form.drills.length === 0 && <div className={styles.fieldError}>At least one drill is required</div>}
      </div>

      {/* ── Exam / SRS spine ── */}
      <div className={styles.formSection}>
        <div className={styles.sectionLabel}>Exam / SRS spine</div>
        <div className={styles.cardSub}>All optional today, required once the corpus-wide backfill runs</div>
        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="it-skill">Skill</label>
            <select id="it-skill" className={styles.select} value={form.skill} onChange={(e) => set('skill', e.target.value)} disabled={!canWrite}>
              <option value="">—</option>
              {ITEM_EXAM_SKILLS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="it-register">Register</label>
            <select id="it-register" className={styles.select} value={form.register} onChange={(e) => set('register', e.target.value)} disabled={!canWrite}>
              <option value="">—</option>
              {ITEM_REGISTERS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="it-modality">Modality</label>
            <select id="it-modality" className={styles.select} value={form.modality} onChange={(e) => set('modality', e.target.value)} disabled={!canWrite}>
              <option value="">—</option>
              {ITEM_MODALITIES.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label className={styles.label} htmlFor="it-cando">Can-do</label>
            <input id="it-cando" className={styles.input} value={form.canDo} onChange={(e) => set('canDo', e.target.value)} disabled={!canWrite} placeholder="Can order a coffee" />
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label className={styles.label} htmlFor="it-grammar">Grammar points (comma-separated)</label>
            <input id="it-grammar" className={styles.input} value={form.grammarPoints.join(', ')} onChange={(e) => setList('grammarPoints', e.target.value)} disabled={!canWrite} placeholder="present-er, article-defini" />
          </div>
        </div>
      </div>

      {/* ── Conjugation gate target ── */}
      <div className={styles.formSection}>
        <div className={styles.sectionLabel}>Conjugation gate target</div>
        <div className={styles.cardSub}>Checked against a real conjugator at publish — see the authoring guide §3</div>
        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="it-vc-inf">Infinitive</label>
            <input id="it-vc-inf" className={styles.input} value={form.verbCheckInfinitive} onChange={(e) => set('verbCheckInfinitive', e.target.value)} disabled={!canWrite} placeholder="parler" />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="it-vc-tense">Tense</label>
            <input id="it-vc-tense" className={styles.input} value={form.verbCheckTense} onChange={(e) => set('verbCheckTense', e.target.value)} disabled={!canWrite} placeholder="présent" />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="it-vc-mood">Mood (optional)</label>
            <input id="it-vc-mood" className={styles.input} value={form.verbCheckMood} onChange={(e) => set('verbCheckMood', e.target.value)} disabled={!canWrite} placeholder="indicatif" />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="it-vc-person">Person</label>
            <select id="it-vc-person" className={styles.select} value={form.verbCheckPerson} onChange={(e) => set('verbCheckPerson', e.target.value)} disabled={!canWrite}>
              <option value="">—</option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="it-vc-number">Number</label>
            <select id="it-vc-number" className={styles.select} value={form.verbCheckNumber} onChange={(e) => set('verbCheckNumber', e.target.value)} disabled={!canWrite}>
              <option value="">—</option>
              <option value="s">Singular</option>
              <option value="p">Plural</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
