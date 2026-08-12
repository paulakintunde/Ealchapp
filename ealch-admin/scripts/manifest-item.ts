// Turning a `content_items` row into an `Item` literal, for the manifest
// generators that record a read of Postgres.
//
// ── WHY THIS FILE EXISTS ───────────────────────────────────────────────────
//
// `_a201_manifest.ts` and `_a209_manifest.ts` each carried their own
// `itemLiteral()`, and both emitted a FIXED list of fifteen columns out of the
// twenty-seven an `Item` has. Every other field was dropped in silence.
//
// That is not theoretical. a2.09's merge carried `fr.a1.dictee.099` (`effacer`)
// into the seed from its manifest, and the manifest had no `example`, no `skill`
// and no `register` — so the merge overwrote a row that HAD all three with a copy
// that had none. Nobody noticed until `content:publish` regenerated the seed from
// the database and the three fields reappeared, which is the only reason the data
// is whole. Six other carried rows arrived incomplete the same way.
//
// A merge is allowed to overwrite the rows it owns; that is what carrying a row
// through the seed cut means. What it must not do is overwrite them with LESS
// than the database holds. So there is one implementation now, it emits every
// field an `Item` can carry, and it REFUSES to run when it meets a populated
// column it does not know about — because the next column somebody adds to
// `content_items` is exactly how this bug comes back.

/** Every field on `Item` (schema.ts) that has a column in `content_items`,
 *  mapped to that column.
 *
 *  `provenance` is the one `Item` field with no column: it is assembled at
 *  publish time rather than stored, so a manifest neither reads nor writes it. */
export const ITEM_FIELD_TO_COLUMN: Record<string, string> = {
  id: 'id',
  kind: 'kind',
  level: 'level',
  theme: 'theme',
  fr: 'fr',
  en: 'en',
  ipa: 'ipa',
  respell: 'respell',
  gender: 'gender',
  example: 'example',
  notes: 'notes',
  tags: 'tags',
  drills: 'drills',
  audioRef: 'audio_ref',
  imageRef: 'image_ref',
  segments: 'segments',
  assetKey: 'asset_key',
  version: 'version',
  skill: 'skill',
  register: 'register',
  canDo: 'can_do',
  grammarPoints: 'grammar_points',
  verbCheck: 'verb_check',
  modality: 'modality',
  cardType: 'card_type',
  prompt: 'prompt',
};

/** Columns that are deliberately NOT part of an `Item`: publication workflow and
 *  provenance. Listed rather than inferred, so that a column which is neither
 *  these nor an `Item` field stops the generator instead of being dropped. */
export const NON_ITEM_COLUMNS = new Set([
  'status', 'published_at', 'scheduled_publish_at', 'pack_id',
  'generated_by', 'model', 'prompt_version', 'source_refs',
  'reviewed_by', 'reviewed_at', 'created_at', 'updated_at',
]);

/** `drills` is `drill_kind[]`, an ENUM array, and node-postgres hands enum arrays
 *  back as the raw Postgres literal `{flashcard,review}` rather than as a JS
 *  array. `tags` and `grammar_points` are `text[]` and DO arrive parsed, so this
 *  is applied to `drills` alone rather than to everything array-shaped. */
export function pgEnumArray(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

/** Every populated column on this row that is neither an `Item` field nor a
 *  known workflow column.
 *
 *  A generator calls this and DIES on a non-empty result. The alternative is the
 *  behaviour this file exists to remove: a new column carrying real content, a
 *  manifest that silently omits it, and a merge that quietly strips it from every
 *  row it carries. */
export function unknownPopulatedColumns(row: Record<string, unknown>): string[] {
  const known = new Set(Object.values(ITEM_FIELD_TO_COLUMN));
  return Object.entries(row)
    .filter(([col, v]) => v !== null && v !== undefined)
    .map(([col]) => col)
    .filter((col) => !known.has(col) && !NON_ITEM_COLUMNS.has(col));
}

/** One row as an `Item` object literal, carrying EVERY field the database holds.
 *
 *  Null and undefined are dropped rather than emitted: `undefined` is not valid
 *  in a `.ts` data file the seed merge round-trips, and an explicit `null` on a
 *  field the schema treats as optional is noise. `audioRef` is the exception and
 *  is always emitted, because the shipped manifests write `audioRef: null`
 *  explicitly and validateItem is happy with it either way. */
export function itemLiteral(row: Record<string, unknown>): string {
  const parts: string[] = [];
  for (const [field, col] of Object.entries(ITEM_FIELD_TO_COLUMN)) {
    let v = row[col];
    if (field === 'drills') v = pgEnumArray(v);
    if (field === 'tags') v = v ?? [];
    if (field === 'audioRef') {
      parts.push(`audioRef: ${v == null ? 'null' : JSON.stringify(v)}`);
      continue;
    }
    if (v === null || v === undefined) continue;
    if (Array.isArray(v) && v.length === 0 && field !== 'tags') continue;
    parts.push(`${field}: ${JSON.stringify(v)}`);
  }
  return `  { ${parts.join(', ')} },`;
}
