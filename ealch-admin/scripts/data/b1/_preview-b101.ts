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

/** What the fixture SHOULD hold, built from the live source files.
 *
 *  Exported so `b1-preview-fixture.test.ts` can rebuild it and compare with the
 *  JSON on disk. This fixture is the ONLY way b1.01 reaches a phone, and it sat
 *  through three b1.01 source commits without being rebuilt: it shipped with 0
 *  sheetIds, so the four reference sheets were unreachable on device, and 4 of
 *  its item ids collided with published seed rows, which a dev build overlays
 *  (services/content.ts merges this file ON TOP of the seed when __DEV__).
 *  Reading the source files alone catches none of that. */
export function buildPreview() {
  return {
    units: [{ ...UNIT, level: 'b1', lessonIds: [LESSON.id] }],
    lessons: [{ ...LESSON, sections }],
    items: ALL_ROWS,
  };
}

export const PREVIEW_PATH = new URL('../../../../ealch-v2/src/content/dev-preview-b101.json', import.meta.url);

/** The exact bytes the script writes, so the test compares like with like. */
export function serialise(out: ReturnType<typeof buildPreview>): string {
  return JSON.stringify(out, null, 2) + '\n';
}

// Running this file writes the fixture. Importing it must not.
if (process.argv[1] && process.argv[1].includes('_preview-b101')) {
  const out = buildPreview();
  writeFileSync(PREVIEW_PATH, serialise(out));
  console.log(`wrote ${out.lessons[0].sections.length} sections, ${out.items.length} items`);
}
