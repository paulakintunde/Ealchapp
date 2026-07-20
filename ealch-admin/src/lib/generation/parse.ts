// Parses a model's raw text response into typed, validated item drafts.
// A parse failure is a {ok:false} result the caller surfaces, never a
// partial/best-effort insert — a batch that half-parses is a batch that
// silently ships fewer items than requested with no record of why.
import { isItemDrillKind, isItemKind } from '../../app/admin/content/items/meta';
import type { GenerationTarget, NewItemDraft } from './types';

function asString(v: unknown): string | undefined {
  return typeof v === 'string' && v.trim() ? v.trim() : undefined;
}

function asStringArray(v: unknown): string[] | undefined {
  return Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : undefined;
}

function parseVerbCheck(v: unknown): NewItemDraft['verbCheck'] {
  if (typeof v !== 'object' || v === null) return undefined;
  const vc = v as Record<string, unknown>;
  const infinitive = asString(vc.infinitive);
  const tense = asString(vc.tense);
  const person = vc.person;
  const number = vc.number;
  if (!infinitive || !tense || (person !== '1' && person !== '2' && person !== '3') || (number !== 's' && number !== 'p')) {
    // Malformed verbCheck on an otherwise-fine item is not worth failing the
    // whole batch over — drop just the field, the conjugation gate simply
    // won't target this item, same as any item authored without one.
    return undefined;
  }
  return { infinitive, tense, mood: asString(vc.mood), person, number };
}

export function parseItemDrafts(
  raw: string,
  _target: Extract<GenerationTarget, { entity: 'item' }>
): { ok: true; items: NewItemDraft[] } | { ok: false; error: string } {
  const cleaned = raw
    .trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/```\s*$/, '');

  let parsed: unknown;
  try {
    parsed = JSON.parse(cleaned);
  } catch (e) {
    return { ok: false, error: `model output was not valid JSON: ${e instanceof Error ? e.message : String(e)}` };
  }
  if (!Array.isArray(parsed)) return { ok: false, error: 'model output must be a JSON array' };
  if (parsed.length === 0) return { ok: false, error: 'model returned an empty array' };

  const items: NewItemDraft[] = [];
  for (let i = 0; i < parsed.length; i++) {
    const row = parsed[i];
    if (typeof row !== 'object' || row === null) return { ok: false, error: `item ${i}: not an object` };
    const r = row as Record<string, unknown>;

    if (typeof r.kind !== 'string' || !isItemKind(r.kind)) return { ok: false, error: `item ${i}: invalid or missing "kind"` };
    const fr = asString(r.fr);
    if (!fr) return { ok: false, error: `item ${i}: missing "fr"` };
    const en = asString(r.en);
    if (!en) return { ok: false, error: `item ${i} ("${fr}"): missing "en"` };

    const drills = asStringArray(r.drills) ?? [];
    if (drills.length === 0) return { ok: false, error: `item ${i} ("${fr}"): "drills" must be a non-empty array` };
    if (!drills.every((d) => isItemDrillKind(d))) return { ok: false, error: `item ${i} ("${fr}"): invalid drill kind in "drills"` };

    if (r.gender !== undefined && r.gender !== 'm' && r.gender !== 'f') {
      return { ok: false, error: `item ${i} ("${fr}"): "gender" must be "m" or "f"` };
    }

    items.push({
      kind: r.kind,
      fr,
      en,
      ipa: asString(r.ipa),
      gender: r.gender as string | undefined,
      exampleFr: asString(r.exampleFr),
      exampleEn: asString(r.exampleEn),
      notes: asString(r.notes),
      tags: asStringArray(r.tags),
      drills,
      skill: asString(r.skill),
      register: asString(r.register),
      canDo: asString(r.canDo),
      grammarPoints: asStringArray(r.grammarPoints),
      modality: asString(r.modality),
      verbCheck: parseVerbCheck(r.verbCheck),
    });
  }

  return { ok: true, items };
}
