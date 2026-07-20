// Shared types for the generation pipeline (Workstream 4). Item-target
// generation only for now — exam-task generation is the natural next
// extension (GenerationTarget is already a union so it can grow into it)
// but is not wired up yet; see pipeline.ts's note.

export type GenerationTarget = {
  entity: 'item';
  level: string;
  theme: string;
  count: number;
};

export interface GenerationJob {
  templateId: string; // the template's app-facing id, e.g. 'tpl.item.vocab-word'
  target: GenerationTarget;
  requestedBy: string; // adminId (UI) or 'cli' (script) — provenance, not an RBAC identity
}

export type GenerationResult =
  | { ok: true; createdIds: string[]; model: string; promptVersion: string }
  | { ok: false; error: string };

/** The fields a generated item draft supplies — everything ItemInput has
 *  minus id/level/theme/status (fixed by the job target and the insert
 *  step, never by the model) and minus provenance (set by insert.ts, never
 *  claimed by the model's own output). */
export interface NewItemDraft {
  kind: string;
  fr: string;
  en: string;
  ipa?: string;
  gender?: string;
  exampleFr?: string;
  exampleEn?: string;
  notes?: string;
  tags?: string[];
  drills: string[];
  skill?: string;
  register?: string;
  canDo?: string;
  grammarPoints?: string[];
  modality?: string;
  verbCheck?: {
    infinitive: string;
    tense: string;
    mood?: string;
    person: string;
    number: string;
  };
}
