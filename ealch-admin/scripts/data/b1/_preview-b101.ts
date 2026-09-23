// TEMPORARY. Writes ealch-v2/src/content/dev-preview-b101.json so b1.01 can be
// seen on a dev build. Nothing here touches seed.json or Postgres.
//
//   pnpm tsx scripts/data/b1/_preview-b101.ts
//
// Remove with the rest of the DEV-PREVIEW-B101 marker (grep for it).
import { writeFileSync } from 'node:fs';
import { LESSON } from './imparfait-formation-lesson.ts';
import { UNIT, ALL_ROWS } from './imparfait-formation-corpus.ts';
import type { TaskSection } from './_task-section.ts';

// The `task` section has no renderer yet. Shown as a `teach` card in place, so
// the lesson keeps its shape and the brief, criteria and model answer are
// visible where the real task will sit.
const sections = LESSON.sections.map((s) => {
  if (s.type !== 'task') return s;
  const t = s as TaskSection;
  const criteria = t.rubric.criteria.map((c) => `• ${c.label} (${c.maxPoints} pts)`).join('\n');
  return {
    type: 'teach', id: t.id, frSub: t.frSub,
    title: `${t.title} (aperçu de la tâche)`,
    body: [t.brief, t.briefEn ? `EN: ${t.briefEn}` : '', `À faire : ${t.produce}`, `Critères :\n${criteria}`, `Exemple de réponse :\n${t.modelAnswer}`]
      .filter(Boolean).join('\n\n'),
  };
});

const out = {
  units: [{ ...UNIT, level: 'b1', lessonIds: [LESSON.id] }],
  lessons: [{ ...LESSON, sections }],
  items: ALL_ROWS,
};
const path = new URL('../../../../ealch-v2/src/content/dev-preview-b101.json', import.meta.url);
writeFileSync(path, JSON.stringify(out, null, 2) + '\n');
console.log(`wrote ${out.lessons[0].sections.length} sections, ${out.items.length} items`);
