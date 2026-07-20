// Builds the system+user prompt for a generation job from a ContentTemplate
// row and the curriculum target. The system prompt is built FROM
// reconciliation/CONTENT-AUTHORING-GUIDE.md, read verbatim off disk and
// never copied into a second "prompt version" of the rules — the guide's
// own stated principle (§0: "never duplicated into a second copy for 'the
// AI version'").
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { GenerationTarget } from './types';

export interface ContentTemplateRow {
  id: string; // the template's app-facing id, e.g. 'tpl.item.vocab-word' (NOT the content_units row's own uuid)
  target: string;
  name: string;
  description: string;
  promptSkeleton: string;
  example: string;
  version: number;
}

let cachedGuide: string | null = null;

function loadAuthoringGuide(): string {
  if (cachedGuide) return cachedGuide;
  // cwd is the ealch-admin package root in both contexts this runs in (a
  // `pnpm content:generate` script invocation and a Next.js server action),
  // same assumption publish-content.ts already makes for gates/check_french.py.
  const path = resolve(process.cwd(), '../reconciliation/CONTENT-AUTHORING-GUIDE.md');
  cachedGuide = readFileSync(path, 'utf8');
  return cachedGuide;
}

/** Only `{{level}}`, `{{theme}}`, `{{recycledVocab}}` and `{{count}}` are
 *  filled — everything the curriculum target actually has. A template using
 *  a placeholder this job can't supply (`{{infinitive}}`, `{{canDo}}`…) is
 *  left as literal text in the skeleton; per the authoring guide's §10 rule
 *  ("write the skeleton so a generation job can fill every slot from the
 *  curriculum target alone"), that is the template's own bug to fix, not
 *  something this function should silently paper over by inventing a value. */
function fillSkeleton(skeleton: string, target: GenerationTarget, recycledVocabPool: string[]): string {
  return skeleton
    .replaceAll('{{level}}', target.level)
    .replaceAll('{{theme}}', target.theme)
    .replaceAll('{{recycledVocab}}', recycledVocabPool.join(', ') || '(none yet published for this theme)')
    .replaceAll('{{count}}', String(target.count));
}

const ITEM_JSON_SHAPE = `{
  "kind": "word" | "phrase" | "sentence",
  "fr": string,
  "en": string,
  "ipa"?: string,
  "gender"?: "m" | "f",
  "exampleFr"?: string,
  "exampleEn"?: string,
  "notes"?: string,
  "tags"?: string[],
  "drills": string[],   // at least one of: flashcard, voiceflash, dictation, sentence, roleplay, review, playlist, exam
  "skill"?: "CO" | "CE" | "PO" | "PE",
  "register"?: "familier" | "courant" | "soutenu",
  "canDo"?: string,
  "grammarPoints"?: string[],
  "modality"?: "recognise" | "produce" | "discriminate",
  "verbCheck"?: { "infinitive": string, "tense": string, "mood"?: string, "person": "1"|"2"|"3", "number": "s"|"p" }
}`;

export function buildPrompt(
  template: ContentTemplateRow,
  target: GenerationTarget,
  ctx: { recycledVocabPool: string[] }
): { system: string; user: string } {
  const guide = loadAuthoringGuide();

  const system = [
    'You are generating French-learning content for the Ealch app. Follow the authoring guide below exactly — it is the single source of truth for how content must be written, including the "no em dashes" rule, gender/article rules, and the recycled-vocabulary rule.',
    'Respond with a JSON array ONLY. No prose, no markdown code fences, no commentary before or after the array.',
    '',
    '--- CONTENT-AUTHORING-GUIDE.md ---',
    guide,
    '--- end of authoring guide ---',
    '',
    `Worked example for the "${template.name}" template (match this quality bar, not necessarily this exact content):`,
    template.example,
  ].join('\n');

  const filled = fillSkeleton(template.promptSkeleton, target, ctx.recycledVocabPool);

  const user = [
    filled,
    '',
    `Generate exactly ${target.count} item(s) for level "${target.level}", theme "${target.theme}".`,
    'Respond with a JSON array where each element matches this shape (omit optional fields you have nothing for):',
    ITEM_JSON_SHAPE,
  ].join('\n');

  return { system, user };
}
