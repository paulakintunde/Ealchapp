// TEMPORARY. Writes ealch-v2/src/content/dev-preview-b1.json so the WHOLE B1
// draft band can be seen on a dev build. Nothing here touches seed.json or
// Postgres.
//
//   pnpm tsx scripts/data/b1/_preview-b1.ts
//
// This replaces `_preview-b101.ts`, which served b1.01 alone. One generator and
// one fixture, because the old shape needed a new file, a new import and a new
// hard-coded id per lesson, and the b1.01 fixture had already drifted through
// three source commits before anyone noticed.
//
// The app does NOT need a bespoke preview surface for these. den.tsx's trail
// renders whatever units are in the corpus, and the seed carries no b1 units at
// all, so merging this fixture makes the B1 band appear on its own.
//
// Remove with the rest of the DEV-PREVIEW-B1 marker (grep for it).
import { readFileSync, writeFileSync } from 'node:fs';
import { B1_SLUGS } from '../../b1-import.logic.ts';

/** Every B1 lesson authored, in trail order: the one registry the import
 *  pipeline also reads (B1_SLUGS in scripts/b1-import.logic.ts). A new lesson is
 *  one line there.
 *
 *  A lesson stops being a DRAFT when it is imported: b1-import.ts puts it in
 *  Postgres and b1-merge-into-seed.ts puts it in seed.json. From then on the
 *  seed carries it, so the preview SKIPS it (overlaying the draft copy on the
 *  published one would hide what actually ships). No list to edit by hand:
 *  run the merge, then rebuild this fixture. */
const SLUGS = B1_SLUGS;

/** Lesson ids already in the seed, which are therefore no longer drafts. */
function seededLessonIds(): Set<string> {
  const seed = JSON.parse(readFileSync(new URL('../../../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8'));
  return new Set((seed.lessons ?? []).map((l: { id: string }) => l.id));
}

/** The `task` section now has a real renderer (`TaskView`, wired into
 *  MissionSection), and the schema carries the type, so the preview ships the
 *  task AS a task. It used to be flattened into a `teach` card here because
 *  nothing could draw it. */

/** What the fixture SHOULD hold, built from the live source files. Exported so
 *  `b1-preview-fixture.test.ts` can rebuild it and compare with what is on
 *  disk, which is the only thing that catches drift. */
export async function buildPreview() {
  const units: any[] = [];
  const lessons: any[] = [];
  const items = new Map<string, any>();
  const seeded = seededLessonIds();

  for (const slug of SLUGS) {
    const L: any = await import(`./${slug}-lesson.ts`);
    if (seeded.has(L.LESSON.id)) continue;
    const C: any = await import(`./${slug}-corpus.ts`);
    units.push({ ...C.UNIT, level: 'b1', lessonIds: [L.LESSON.id] });
    lessons.push({ ...L.LESSON });
    // Lessons quote each other's rows, so the same id can arrive twice. Last
    // write wins, which is safe: a quoted row is the same row.
    for (const row of C.ALL_ROWS) items.set(row.id, row);
  }

  units.sort((a, b) => (a.seq ?? 0) - (b.seq ?? 0));
  return { units, lessons, items: [...items.values()] };
}

export const PREVIEW_PATH = new URL('../../../../ealch-v2/src/content/dev-preview-b1.json', import.meta.url);

/** The exact bytes the script writes, so the test compares like with like. */
export function serialise(out: Awaited<ReturnType<typeof buildPreview>>): string {
  return JSON.stringify(out, null, 2) + '\n';
}

// Running this file writes the fixture. Importing it must not. Wrapped rather
// than top-level await: tsx transforms this to CJS, which has no top-level await.
if (process.argv[1] && process.argv[1].includes('_preview-b1.')) {
  void (async () => {
    const out = await buildPreview();
    writeFileSync(PREVIEW_PATH, serialise(out));
    const acts = out.lessons.reduce((n, l) => n + (l.acts?.length ?? 0), 0);
    console.log(`wrote ${out.lessons.length} lessons, ${acts} acts, ${out.items.length} items`);
  })();
}
