// The orchestrator: template -> routed model -> prompt -> provider call ->
// parse -> insert. No audit() call here on purpose — audit.ts imports
// 'server-only', so it can only run from an actual Next.js server action
// (see generate/actions.ts). The CLI script (scripts/generate-content.ts)
// runs outside any request context and never had an audit trail to begin
// with, same as every other scripts/*.ts file in this repo.
//
// Item-target generation only, for now. GenerationTarget is a union so
// exam-task generation is a natural extension (a loadTemplate + parse +
// insert triple, same shape as this one), but it needs its own parser
// (ExamTask's rubric/modelAnswer/QCM shape is materially different from an
// Item) and is not wired up in this pass.
import { and, ne, eq } from 'drizzle-orm';
import type { DB } from '../../db';
import { contentItems, contentUnits } from '../../db/schema';
import { buildVocabPoolFromItems, themeLevelKey } from '../vocab';
import { resolveContentModel } from './routing';
import { callProvider } from './provider';
import { buildPrompt, type ContentTemplateRow } from './prompt';
import { parseItemDrafts } from './parse';
import { insertItemDrafts } from './insert';
import type { ItemLevel } from '../../app/admin/content/items/meta';
import type { GenerationJob, GenerationResult } from './types';

async function loadTemplate(d: DB, templateId: string): Promise<ContentTemplateRow | null> {
  // Templates are content_units rows (kind='template'); the app-facing id
  // ("tpl.item.vocab-word") lives INSIDE body, not as the row's own uuid —
  // same body.id-vs-row-id split every jsonb-bodied kind uses (scenario,
  // lesson, playlist). There is no index on body->>'id' yet, so this scans
  // every template row — fine at today's template counts, worth an index
  // if the template library ever grows past a few hundred.
  const rows = await d.select({ body: contentUnits.body }).from(contentUnits).where(eq(contentUnits.kind, 'template'));
  for (const r of rows) {
    const body = r.body as Partial<ContentTemplateRow> | null;
    if (body?.id === templateId) return body as ContentTemplateRow;
  }
  return null;
}

export async function generateContent(d: DB, job: GenerationJob): Promise<GenerationResult> {
  const template = await loadTemplate(d, job.templateId);
  if (!template) return { ok: false, error: `No template found with id "${job.templateId}"` };
  if (template.target !== job.target.entity) {
    return { ok: false, error: `Template "${job.templateId}" targets "${template.target}", not "${job.target.entity}"` };
  }

  const routed = await resolveContentModel(d);
  if (!routed) {
    return {
      ok: false,
      error: "No AI model is routed to the 'content' capability — set one on the console's AI Routing page first.",
    };
  }

  // The recycled-vocab pool for THIS theme only, matching the same scope
  // the recycled-vocab publish gate checks against (lib/vocab.ts) — the
  // model is handed exactly the vocabulary its output will later be graded
  // on, not the whole corpus.
  const vocabRows = await d
    .select({ level: contentItems.level, theme: contentItems.theme, fr: contentItems.fr })
    .from(contentItems)
    .where(and(ne(contentItems.kind, 'sentence'), eq(contentItems.theme, job.target.theme)));
  const pool = buildVocabPoolFromItems(vocabRows);
  const recycledVocabPool = [...(pool.get(themeLevelKey(job.target.level, job.target.theme)) ?? [])];

  const { system, user } = buildPrompt(template, job.target, { recycledVocabPool });

  let raw: string;
  try {
    raw = await callProvider({ provider: routed.provider, model: routed.apiModel, system, user });
  } catch (e) {
    return { ok: false, error: `generation call failed: ${e instanceof Error ? e.message : String(e)}` };
  }

  const parsed = parseItemDrafts(raw, job.target);
  if (!parsed.ok) return { ok: false, error: parsed.error };

  const promptVersion = `${job.templateId}@v${template.version ?? 1}`;
  const inserted = await insertItemDrafts(
    d,
    parsed.items,
    { level: job.target.level as ItemLevel, theme: job.target.theme },
    { model: routed.name, promptVersion }
  );

  return { ok: true, createdIds: inserted.map((r) => r.id), model: routed.name, promptVersion };
}
