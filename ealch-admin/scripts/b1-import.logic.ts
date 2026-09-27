// The PURE half of the B1+ import pipeline: plan building, the guards, and the
// seed merge. No database, no filesystem. `b1-import.ts` (Postgres) and
// `b1-merge-into-seed.ts` (seed.json) call these, and `b1-import.logic.test.ts`
// pins them, so a guard cannot quietly weaken between one wave and the next.
//
// THE RULES THIS FILE ENCODES
//
//  1. An authored row that already exists is SKIPPED when it is identical and
//     REFUSED when it differs, unless the caller passes `reapply`. Identity is
//     judged on the shape the app receives (the publish projection), so a key
//     order or an empty optional field is not a difference.
//  2. The level is part of the id. Nothing here compares numbers.
//  3. `Lesson.version` keys learner checkmarks and XP. It moves only when the
//     SECTION LIST changes. A bump with the same section list is refused even
//     under `reapply`; a changed section list with no bump is refused too.
//  4. A lesson may name a row it does not author only if that row is published
//     in Postgres, or authored by another lesson in the SAME run.
//  5. DB_ONLY_TWINS are imported as authored. Their count is reported, never
//     acted on: the dedupe decision is Paul's.
import { canonicalJson } from '../../ealch-v2/src/content/schema.ts';
import { itemsReferencedBy } from './seed-cut.logic.ts';

/** Every B1 lesson authored so far, in trail order. The import and the merge
 *  default to this list; a wave adds one line. */
export const B1_SLUGS = [
  'imparfait-formation', 'imparfait-usage', 'pc-imparfait', 'pc-imparfait-paires',
  'futur-simple', 'futur-irregulier', 'futur-usage', 'conditionnel-present',
  'politesse', 'si-clauses', 'qui-que', 'dont-ou', 'lequel-ce-qui', 'subjonctif-formation',
  'subjonctif-declencheurs', 'subjonctif-infinitif', 'ordre-pronoms', 'voix-passive',
  'discours-indirect', 'negation-avancee', 'inversion',
  'cest-il-est', 'tout', 'meme',
  'registres', 'tu-ou-vous', 'expressions-corps', 'expressions-animaux', 'expressions-couleurs',
  'coordination', 'subordination', 'concession', 'environnement', 'strategies-lecture',
] as const;

export type Obj = Record<string, unknown>;
export type AuthoredRow = Obj & { id: string; theme: string; level: string };

/* ── ITEM IDENTITY ─────────────────────────────────────────────────────── */

const truthy = (v: unknown) => v !== null && v !== undefined && v !== '';

/** An Item-shaped object reduced to exactly what `publish-content.ts` ships:
 *  the same fields, the same spread-when-present rules. Two rows that agree
 *  here are the same row as far as any phone can tell. */
export function normaliseItem(x: Obj): Obj {
  const out: Obj = {
    id: x.id, kind: x.kind, level: x.level, theme: x.theme, fr: x.fr, en: x.en,
  };
  for (const k of ['ipa', 'respell', 'gender', 'example', 'notes']) if (truthy(x[k])) out[k] = x[k];
  out.tags = x.tags ?? [];
  out.drills = x.drills ?? [];
  out.audioRef = x.audioRef ?? null;
  for (const k of ['imageRef', 'segments', 'assetKey']) if (truthy(x[k])) out[k] = x[k];
  out.version = x.version ?? 1;
  for (const k of ['skill', 'register', 'canDo']) if (truthy(x[k])) out[k] = x[k];
  if (Array.isArray(x.grammarPoints) && x.grammarPoints.length) out.grammarPoints = x.grammarPoints;
  for (const k of ['modality', 'verbCheck', 'cardType', 'prompt']) if (truthy(x[k])) out[k] = x[k];
  return out;
}

/** A `content_items` row (snake_case, enums cast to text) to the Item shape. */
export function dbRowToItem(r: Obj): Obj {
  return normaliseItem({
    id: r.id, kind: r.kind, level: r.level, theme: r.theme, fr: r.fr, en: r.en,
    ipa: r.ipa, respell: r.respell, gender: r.gender, example: r.example, notes: r.notes,
    tags: r.tags, drills: toArray(r.drills), audioRef: r.audio_ref, imageRef: r.image_ref,
    segments: r.segments, assetKey: r.asset_key, version: r.version,
    skill: r.skill, register: r.register, canDo: r.can_do, grammarPoints: r.grammar_points,
    modality: r.modality, verbCheck: r.verb_check, cardType: r.card_type, prompt: r.prompt,
  });
}

/** node-postgres hands a custom-enum array back as the raw literal
 *  `{flashcard,review}` unless the query casts it. Accept both. */
export function toArray(d: unknown): string[] {
  return Array.isArray(d) ? (d as string[]) : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);
}

export const sameItem = (a: Obj, b: Obj) => canonicalJson(normaliseItem(a)) === canonicalJson(normaliseItem(b));
export const sameDoc = (a: unknown, b: unknown) => canonicalJson(a) === canonicalJson(b);

/* ── THE VERSION RULE ──────────────────────────────────────────────────── */

type LessonLike = { id?: string; version?: number; sections?: { id?: unknown }[] };

const sectionIds = (l: LessonLike) => (l.sections ?? []).map((s) => String(s.id));

export type VersionVerdict =
  | { ok: true; kind: 'identical' | 'text-edit' | 'structural-bump' }
  | { ok: false; reason: string };

/** May `next` replace `prev` without costing a learner anything they should
 *  keep? Text edits keep the version; section-list changes must raise it. */
export function versionVerdict(prev: LessonLike, next: LessonLike): VersionVerdict {
  if (sameDoc(prev, next)) return { ok: true, kind: 'identical' };
  const pv = prev.version ?? 1;
  const nv = next.version ?? 1;
  const sameSections = canonicalJson(sectionIds(prev)) === canonicalJson(sectionIds(next));
  if (sameSections) {
    if (nv !== pv) {
      return { ok: false, reason: `${next.id}: version ${pv} -> ${nv} with the SAME section list. A text-only bump wipes every learner's checkmarks and XP; keep v${pv}.` };
    }
    return { ok: true, kind: 'text-edit' };
  }
  if (nv <= pv) {
    return { ok: false, reason: `${next.id}: the section list changed and the version did not rise (v${pv} -> v${nv}). Stored progress would point at sections that moved.` };
  }
  return { ok: true, kind: 'structural-bump' };
}

/* ── THE PLAN ──────────────────────────────────────────────────────────── */

export type LessonInput = {
  slug: string;
  unit: Obj & { id: string };
  lesson: Obj & { id: string; version?: number };
  rows: AuthoredRow[];
  /** DB_ONLY_TWINS as the corpus exported it (array or record), or undefined. */
  twins?: unknown;
};

export type DbState = {
  /** Postgres rows for every id the plan asks about, keyed by id. */
  items: Map<string, { status: string; item: Obj }>;
  /** content_units rows keyed by slug. */
  units: Map<string, { kind: string; status: string; body: Obj }>;
  themes: Set<string>;
  /** fr.b1 ids at or above a theme's authored floor that no B1 lesson authors. */
  foreignAboveFloor?: Map<string, string[]>;
};

export type PlanContext = {
  reapply: boolean;
  /** Ids authored by any lesson in THIS run: a reference to one resolves. */
  runAuthored: ReadonlySet<string>;
  /** Registered lesson-image refs (lessonImages.ts). */
  images?: ReadonlySet<string>;
};

export type Action = 'create' | 'skip' | 'update' | 'conflict';

export type LessonPlan = {
  slug: string;
  lessonId: string;
  unitId: string;
  themes: string[];
  authored: number;
  insert: string[];
  skip: string[];
  update: string[];
  conflict: string[];
  reusedPublished: number;
  reusedInRun: number;
  twins: number;
  unit: Action;
  lesson: Action;
  lessonVersion: number;
  blockers: string[];
  warnings: string[];
};

export function twinCount(t: unknown): number {
  if (!t) return 0;
  if (Array.isArray(t)) return t.length;
  if (typeof t === 'object') return Object.keys(t as Obj).length;
  return 0;
}

/** The unit document as it lands: the corpus UNIT plus band and lesson list. */
export function unitBody(unit: Obj & { id: string }, lessonId: string): Obj {
  return { ...unit, level: 'b1', lessonIds: [lessonId] };
}

/** Every act opener image the lesson names. */
export function openerImages(lesson: Obj): string[] {
  const acts = (lesson.acts ?? []) as { opener?: { imageRef?: string } }[];
  return acts.map((a) => a.opener?.imageRef).filter((r): r is string => !!r);
}

export function planLesson(input: LessonInput, db: DbState, ctx: PlanContext): LessonPlan {
  const { lesson, rows } = input;
  const unit = unitBody(input.unit, lesson.id);
  const blockers: string[] = [];
  const warnings: string[] = [];
  const insert: string[] = [], skip: string[] = [], update: string[] = [], conflict: string[] = [];

  const own = new Set(rows.map((r) => r.id));
  if (own.size !== rows.length) blockers.push(`${lesson.id}: the corpus authors the same id twice`);

  // 1. Authored rows against Postgres.
  for (const r of rows) {
    const found = db.items.get(r.id);
    if (!found) { insert.push(r.id); continue; }
    if (sameItem(found.item, r)) { skip.push(r.id); continue; }
    if (ctx.reapply) update.push(r.id);
    else conflict.push(r.id);
  }
  if (conflict.length) {
    blockers.push(`${lesson.id}: ${conflict.length} authored id(s) already exist in Postgres with DIFFERENT content, first ${conflict[0]}. Refusing to overwrite (pass --reapply only if these rows are this lesson's own).`);
  }

  // 2. Themes must exist in the catalogue.
  const themes = [...new Set(rows.map((r) => r.theme))].sort();
  for (const th of themes) if (!db.themes.has(th)) blockers.push(`${lesson.id}: theme "${th}" is not in content_themes`);
  for (const th of themes) {
    const f = db.foreignAboveFloor?.get(th) ?? [];
    if (f.length) blockers.push(`${lesson.id}: ${th} holds ${f.length} fr.b1 row(s) at or above the authored floor that no B1 lesson authors, first ${f[0]}`);
  }

  // 3. Everything the lesson NAMES that it does not author.
  let reusedPublished = 0, reusedInRun = 0;
  const named = [...new Set(itemsReferencedBy(lesson as never))].filter((id) => !own.has(id));
  for (const id of named) {
    const found = db.items.get(id);
    if (found && found.status === 'published') { reusedPublished++; continue; }
    if (ctx.runAuthored.has(id)) { reusedInRun++; continue; }
    blockers.push(found
      ? `${lesson.id}: names ${id}, which is in Postgres at status '${found.status}', not published`
      : `${lesson.id}: names ${id}, which is neither published nor authored in this run`);
  }

  // 4. The unit.
  let unitAction: Action = 'create';
  const u = db.units.get(unit.id as string);
  if (u) {
    if (u.kind !== 'curriculum_unit') blockers.push(`${unit.id}: the slug is taken by a ${u.kind} row`);
    else if (sameDoc(u.body, unit)) unitAction = 'skip';
    else if (ctx.reapply) unitAction = 'update';
    else { unitAction = 'conflict'; blockers.push(`${unit.id}: a curriculum unit with this id exists with a different body`); }
  }

  // 5. The lesson, under the version rule.
  let lessonAction: Action = 'create';
  const l = db.units.get(lesson.id);
  if (l) {
    if (l.kind !== 'lesson') blockers.push(`${lesson.id}: the slug is taken by a ${l.kind} row`);
    else {
      const v = versionVerdict(l.body as LessonLike, lesson as LessonLike);
      if (!v.ok) { lessonAction = 'conflict'; blockers.push(v.reason); }
      else if (v.kind === 'identical') lessonAction = 'skip';
      else if (ctx.reapply) lessonAction = 'update';
      else { lessonAction = 'conflict'; blockers.push(`${lesson.id}: already in Postgres with a different body (${v.kind}); pass --reapply to replace it`); }
    }
  }

  // 6. Act openers: an unregistered image draws nothing. Not fatal, but said.
  if (ctx.images) {
    const missing = openerImages(lesson).filter((r) => !ctx.images!.has(r));
    if (missing.length) warnings.push(`${lesson.id}: ${missing.length} act opener image(s) not registered in lessonImages.ts, first ${missing[0]}`);
  }

  // 7. The task section ships as authored; say so when there is none.
  const tasks = ((lesson.sections ?? []) as { type?: string }[]).filter((s) => s.type === 'task').length;
  if (tasks !== 1) warnings.push(`${lesson.id}: carries ${tasks} task section(s), the standard is one`);

  return {
    slug: input.slug, lessonId: lesson.id, unitId: unit.id as string, themes,
    authored: rows.length, insert, skip, update, conflict,
    reusedPublished, reusedInRun, twins: twinCount(input.twins),
    unit: unitAction, lesson: lessonAction, lessonVersion: lesson.version ?? 1,
    blockers, warnings,
  };
}

/** Ids authored by more than one lesson must be byte-identical rows, or the
 *  import would land whichever came last. */
export function crossLessonClashes(inputs: { slug: string; rows: AuthoredRow[] }[]): string[] {
  const first = new Map<string, { slug: string; row: AuthoredRow }>();
  const out: string[] = [];
  for (const { slug, rows } of inputs) {
    for (const r of rows) {
      const p = first.get(r.id);
      if (!p) { first.set(r.id, { slug, row: r }); continue; }
      if (!sameItem(p.row, r)) out.push(`${r.id}: authored by ${p.slug} and ${slug} with different content`);
    }
  }
  return out;
}

/** The flashcard hub's card key: theme plus the headword with its leading
 *  article dropped, for vocab-type non-sentence rows only (the same rule as
 *  ealch-v2's flashhub-coverage.test.ts). Null when the hub never deals it. */
export function headwordKey(it: Obj): string | null {
  if (it.kind === 'sentence') return null;
  if (((it.cardType as string | undefined) ?? 'vocab') !== 'vocab') return null;
  const fr = String(it.fr ?? '').toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  return `${it.theme}::${fr}`;
}

/** Pairs of rows the hub would deal as the same card. `rows` are this run's
 *  authored rows; `others` is everything already published in their themes.
 *  Only a pair that involves at least one row in `rows` is reported. */
export function headwordClashes(rows: Obj[], others: Obj[]): { a: string; b: string; key: string }[] {
  const seen = new Map<string, string>();
  const mine = new Set(rows.map((r) => r.id as string));
  const out: { a: string; b: string; key: string }[] = [];
  for (const it of [...others.filter((o) => !mine.has(o.id as string)), ...rows]) {
    const k = headwordKey(it);
    if (!k) continue;
    const prior = seen.get(k);
    if (prior === undefined) { seen.set(k, it.id as string); continue; }
    if (prior === it.id) continue;
    if (mine.has(prior) || mine.has(it.id as string)) out.push({ a: prior, b: it.id as string, key: k });
  }
  return out;
}

/** The lowest authored number per theme, from full ids. */
export function authoredFloors(ids: Iterable<string>): Map<string, number> {
  const floors = new Map<string, number>();
  for (const id of ids) {
    const [, , theme, num] = id.split('.');
    const n = Number(num);
    if (!theme || !Number.isFinite(n)) continue;
    floors.set(theme, Math.min(floors.get(theme) ?? Infinity, n));
  }
  return floors;
}

/* ── THE SEED MERGE ────────────────────────────────────────────────────── */

export type SeedLike = Obj & { units: Obj[]; lessons: Obj[]; items: Obj[] };

export type MergeStats = {
  unitsAdded: string[]; unitsReplaced: string[];
  lessonsAdded: string[]; lessonsReplaced: string[];
  itemsAdded: string[]; itemsReplaced: string[]; itemsUnchanged: number;
  /** Rows this merge does not own whose seed copy differs from Postgres. They
   *  are LEFT AS THE SEED HAS THEM: somebody else's edit, which the next
   *  publish carries. Reported so the drift is visible, never fixed here. */
  itemsLeftAlone: string[];
};

/**
 * Carry units, lessons and items into a seed. Existing entries are replaced IN
 * PLACE (their position is kept) and new ones appended, the way every A2 merge
 * script does. Returns a NEW seed; the input is not mutated.
 *
 * An item this merge does not own (`ownedItem` false) that differs between the
 * seed and Postgres is left exactly as the seed has it and listed in
 * `itemsLeftAlone`: that is somebody else's Postgres edit, which the next
 * publish carries. Never rewritten here.
 *
 * Refuses (throws) when a lesson would change version against the version rule.
 */
export function mergeIntoSeed(
  seed: SeedLike,
  add: { units: Obj[]; lessons: Obj[]; items: Obj[] },
  ownedItem: (id: string) => boolean,
): { seed: SeedLike; stats: MergeStats } {
  const stats: MergeStats = {
    unitsAdded: [], unitsReplaced: [], lessonsAdded: [], lessonsReplaced: [],
    itemsAdded: [], itemsReplaced: [], itemsUnchanged: 0, itemsLeftAlone: [],
  };
  const units = [...seed.units];
  const lessons = [...seed.lessons];
  const items = [...seed.items];

  const upsert = (arr: Obj[], doc: Obj, added: string[], replaced: string[]) => {
    const i = arr.findIndex((x) => x.id === doc.id);
    if (i < 0) { arr.push(doc); added.push(doc.id as string); return; }
    if (sameDoc(arr[i], doc)) return;
    arr[i] = doc;
    replaced.push(doc.id as string);
  };

  for (const u of add.units) upsert(units, u, stats.unitsAdded, stats.unitsReplaced);
  for (const l of add.lessons) {
    const prev = lessons.find((x) => x.id === l.id);
    if (prev) {
      const v = versionVerdict(prev as LessonLike, l as LessonLike);
      if (!v.ok) throw new Error(v.reason);
    }
    upsert(lessons, l, stats.lessonsAdded, stats.lessonsReplaced);
  }

  const at = new Map(items.map((x, i) => [x.id as string, i]));
  for (const it of add.items) {
    const id = it.id as string;
    const i = at.get(id);
    if (i === undefined) { at.set(id, items.length); items.push(it); stats.itemsAdded.push(id); continue; }
    if (sameItem(items[i], it)) { stats.itemsUnchanged++; continue; }
    if (!ownedItem(id)) { stats.itemsLeftAlone.push(id); continue; }
    items[i] = it;
    stats.itemsReplaced.push(id);
  }

  return { seed: { ...seed, units, lessons, items }, stats };
}
