// The canonical content schema — the single source of truth for the shape of
// every piece of learning content in Ealch.
//
// This file is imported by FOUR consumers and must stay loadable by all of them:
//   · the mobile app          (src/services/content.ts)
//   · the Ops Console         (ealch-admin — typed review editors)
//   · the generation script   (LLM output must validate against this)
//   · the publish pipeline    (a corpus that fails validation is never shipped)
//
// It therefore has ZERO runtime imports. No react-native, no zustand, no
// supabase, no third-party validator. Exactly the constraint progress.logic.ts
// already lives under, and for the same reason: `node --test` executes the
// TypeScript directly and can load none of them.
//
// It also uses ERASABLE SYNTAX ONLY — no `enum`, no namespaces, no parameter
// properties — because Node type-strips rather than compiles. Unions plus
// `as const` arrays do the same job and give us runtime-checkable value lists
// for free, which the validators below depend on.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS FILE EXISTS
//
// Before it, there was no such thing as a "content item". Seven drills each
// owned a private, differently-shaped array with no stable identity:
//   flashcards { fr, en, ex }        voiceflash { icon, fr, en, key, keyEn }
//   sentence   { w, t }              roleplay   { ai, en, user }
//   dictation  { fr, tipT, tipB }    review     { type, tone, meta, prompt … }
//
// Nothing had an ID. That is the root cause of most of what the review found:
// the SRS does not exist because a scheduler has nothing to point at; Smart
// Review's cards are hardcoded because there is no corpus to draw from; "weak
// spots" are literals because no attempt was ever recorded against anything
// identifiable. `Item.id` is the fix. It is stable, immutable, and it is the
// key the attempt log and the SRS both hang off.

/* ─── Value lists ────────────────────────────────────────────────────────── */

export const LEVELS = ['sons', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'] as const;
export type Level = (typeof LEVELS)[number];

/** Tracks are the three columns of the Beginners' Den. A Level is broader:
 *  corpus items can be tagged b1..c2 long before a track exists for them. */
export const TRACKS = ['sons', 'a1', 'a2'] as const;
export type Track = (typeof TRACKS)[number];

export const ITEM_KINDS = ['word', 'phrase', 'sentence'] as const;
export type ItemKind = (typeof ITEM_KINDS)[number];

/** Which drills MAY select an item. An item carries its own eligibility rather
 *  than each drill hardcoding a list: a drill asks the corpus for what it can
 *  use, so adding a drill never means editing every item. */
export const DRILL_KINDS = [
  'flashcard',
  'voiceflash',
  'dictation',
  'sentence',
  'roleplay',
  'review',
] as const;
export type DrillKind = (typeof DRILL_KINDS)[number];

/** The four skills every rich lesson must exercise. */
export const SKILLS = ['read', 'write', 'speak', 'listen'] as const;
export type Skill = (typeof SKILLS)[number];

export const SECTION_TYPES = [
  'teach',
  'steps',
  'examples',
  'useCases',
  'hacks',
  'cheatSheet',
  'commonErrors',
  'focus',
  'table',
  'audio',
  'practice',
  'quiz',
] as const;
export type SectionType = (typeof SECTION_TYPES)[number];

export const CONTENT_STATUSES = ['draft', 'in_review', 'published', 'archived'] as const;
export type ContentStatus = (typeof CONTENT_STATUSES)[number];

/* ─── Identity ───────────────────────────────────────────────────────────── */

// IDs are public, stable and immutable. They survive regeneration: an item may
// be rewritten, retranslated or re-recorded, but its id must not change, or
// every attempt logged against it and every SRS interval built on it is orphaned.
//
//   item    fr.<level>.<theme>.<seq>   fr.a1.cafe.001
//   unit    <track>.<nn>               sons.03
//   lesson  <unitId>.l<seq>            sons.03.l1

export const ITEM_ID_RE = /^fr\.(sons|a1|a2|b1|b2|c1|c2)\.[a-z0-9-]+\.\d{3,}$/;
export const UNIT_ID_RE = /^(sons|a1|a2)\.\d{2}$/;
export const LESSON_ID_RE = /^(sons|a1|a2)\.\d{2}\.l\d+$/;
/** Scenario ids: sc.<level>.<theme>.<seq>   sc.a1.marche.001 */
export const SCENARIO_ID_RE = /^sc\.(sons|a1|a2|b1|b2|c1|c2)\.[a-z0-9-]+\.\d{3,}$/;
/** Themes group the corpus for batch review and for themed drills. */
export const THEME_RE = /^[a-z0-9-]+$/;

export function itemId(level: Level, theme: string, seq: number): string {
  return `fr.${level}.${theme}.${String(seq).padStart(3, '0')}`;
}
export function unitId(track: Track, seq: number): string {
  return `${track}.${String(seq).padStart(2, '0')}`;
}
export function lessonId(unit: string, seq: number): string {
  return `${unit}.l${seq}`;
}
export function scenarioId(level: Level, theme: string, seq: number): string {
  return `sc.${level}.${theme}.${String(seq).padStart(3, '0')}`;
}
/** The unit a lesson belongs to, read straight off its id. */
export function unitOfLesson(id: string): string {
  return id.replace(/\.l\d+$/, '');
}

/* ─── Item: the atomic corpus row ────────────────────────────────────────── */

export type Item = {
  /** Stable and immutable. The SRS key. See the note on Identity above. */
  id: string;
  kind: ItemKind;
  level: Level;
  /** Lowercase slug: 'cafe', 'marche', 'transport'. Items are generated,
   *  reviewed and shipped in themed batches, so this is not decoration. */
  theme: string;
  fr: string;
  en: string;
  ipa?: string;
  /** Nouns only. The single most common beginner error in French is gender,
   *  so it is a first-class field rather than something buried in `notes`. */
  gender?: 'm' | 'f';
  example?: { fr: string; en: string };
  /** A teaching note, hack or clue. Dictation's why-tip lands here. */
  notes?: string;
  /** 'liaison' | 'nasal' | 'passe-compose' … The handle a future SRS uses to
   *  say "you are weak at nasals", rather than "you are weak at item 47". */
  tags: string[];
  /** Which drills may select this item. Must be non-empty: an item no drill
   *  can reach is dead weight in the corpus and a silent authoring bug. */
  drills: DrillKind[];
  /** Null until Phase 7. Device TTS speaks `fr` in the meantime. */
  audioRef?: string | null;
  version: number;
};

/* ─── Lesson: an ordered list of typed sections ──────────────────────────── */

// A Lesson is a section list, not a fixed set of fields, so a lesson can be as
// deep as the content demands without the renderer changing. That is what makes
// the brief achievable: steps for the learner who wants steps, use cases for the
// one who wants use cases, a cheat sheet for the one who wants to revise, all in
// one lesson, in whatever order the teaching requires.
//
// The old shape (intro, table, examples, errors, audio, subs, quiz) had nowhere
// to put steps, use cases, hacks, cheat sheets or four-skill practice — which is
// why `subs[]` degenerated into a list of TITLES with no content behind them.

export type LessonSection =
  /** Prose. The explanation itself. */
  | { type: 'teach'; title: string; body: string }
  /** Ordered procedure. For the learner who needs the ladder, not the lecture. */
  | { type: 'steps'; title: string; steps: string[] }
  | { type: 'examples'; title: string; examples: { fr: string; en: string; note?: string }[] }
  /** Where you would actually SAY this, in the world. */
  | { type: 'useCases'; title: string; cases: { situation: string; fr: string; en: string }[] }
  /** The trick a good teacher gives you. `why` stops it being folklore. */
  | { type: 'hacks'; title: string; hacks: { hack: string; why: string }[] }
  /** The thing you screenshot before the exam. */
  | { type: 'cheatSheet'; title: string; rows: { k: string; v: string }[] }
  | { type: 'commonErrors'; title: string; errors: { wrong: string; right: string; why: string }[] }
  /** What to concentrate on. Deliberately short. */
  | { type: 'focus'; title: string; points: string[] }
  | { type: 'table'; title: string; cols: string[]; rows: string[][] }
  /** Lines to hear. Device TTS today; real audio in Phase 7. */
  | { type: 'audio'; title: string; lines: string[] }
  /** Practice against real corpus items — this is the join between a lesson and
   *  the drills, and it is what lets a lesson exercise all four skills. */
  | { type: 'practice'; title: string; skill: Skill; itemIds: string[] }
  | {
      type: 'quiz';
      title: string;
      questions: { q: string; opts: string[]; correct: number; why?: string }[];
    };

export type Lesson = {
  /** '<unitId>.l<seq>' — e.g. 'sons.03.l1' */
  id: string;
  unitId: string;
  seq: number;
  title: string;
  level: Level;
  /** Display eyebrow: 'SONS · LEÇON 03' */
  tag: string;
  intro: string;
  /** Ordered. The renderer switches on `type` and walks this list. */
  sections: LessonSection[];
  /** Every corpus item this lesson teaches. */
  itemIds: string[];
  version: number;
};

/** A Unit CONTAINS lessons. The Den's tree is units; the lessons live inside.
 *  A unit with no lessons is legal and must render honestly as "coming soon" —
 *  it must never fall through to a generic player pretending to be its content. */
export type Unit = {
  /** '<track>.<nn>' — e.g. 'sons.03' */
  id: string;
  track: Track;
  seq: number;
  title: string;
  sub: string;
  lessonIds: string[];
};

/**
 * A Role Play scenario: an ordered dialogue the learner works through, one turn
 * at a time. It is neither an Item (atomic) nor a Lesson (a document to read) —
 * it is a script — so it is its own corpus shape rather than being forced into
 * one of the others. `turns[].user` is the line the learner is meant to produce
 * and the STT scores against; `ai` is the other speaker's prompt. */
export type ScenarioTurn = { ai: string; en: string; user: string };
export type Scenario = {
  /** 'sc.<level>.<theme>.<seq>' — e.g. 'sc.a1.marche.001' */
  id: string;
  level: Level;
  theme: string;
  title: string;
  turns: ScenarioTurn[];
  version: number;
};

/** What the publish pipeline emits and the app loads. */
export type Corpus = {
  version: number;
  units: Unit[];
  lessons: Lesson[];
  items: Item[];
  scenarios: Scenario[];
};

export const EMPTY_CORPUS: Corpus = { version: 0, units: [], lessons: [], items: [], scenarios: [] };

/* ─── Validation ─────────────────────────────────────────────────────────── */

// Validators return a list of issues; an empty list means valid. They never
// throw. The publish pipeline aborts on any issue — a corpus with a dangling
// itemId must never reach a user, because it renders as a blank drill with no
// error, which is the hardest possible bug to diagnose from a crash report.

export type Issue = { path: string; message: string };

const isStr = (v: unknown): v is string => typeof v === 'string' && v.length > 0;
const isArr = Array.isArray;
const oneOf = <T extends readonly string[]>(list: T, v: unknown): v is T[number] =>
  typeof v === 'string' && (list as readonly string[]).includes(v);

export function validateItem(v: unknown, path = 'item'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const it = v as Partial<Item>;

  if (!isStr(it.id)) push('id is required');
  else if (!ITEM_ID_RE.test(it.id)) push(`id "${it.id}" must match fr.<level>.<theme>.<seq>`);

  if (!oneOf(ITEM_KINDS, it.kind)) push(`kind must be one of ${ITEM_KINDS.join(' | ')}`);
  if (!oneOf(LEVELS, it.level)) push(`level must be one of ${LEVELS.join(' | ')}`);

  if (!isStr(it.theme)) push('theme is required');
  else if (!THEME_RE.test(it.theme)) push(`theme "${it.theme}" must be a lowercase slug`);

  if (!isStr(it.fr)) push('fr is required');
  if (!isStr(it.en)) push('en is required');

  // The id encodes level and theme. If they disagree with the fields, one of
  // them is a lie and we cannot know which — so refuse both.
  if (isStr(it.id) && ITEM_ID_RE.test(it.id)) {
    const [, lvl, theme] = it.id.split('.');
    if (it.level && lvl !== it.level) push(`id level "${lvl}" disagrees with level "${it.level}"`);
    if (it.theme && theme !== it.theme) push(`id theme "${theme}" disagrees with theme "${it.theme}"`);
  }

  if (it.gender !== undefined && it.gender !== 'm' && it.gender !== 'f') {
    push("gender must be 'm' or 'f'");
  }

  if (!isArr(it.tags)) push('tags must be an array (use [] for none)');
  else if (it.tags.some((t) => !isStr(t))) push('tags must all be non-empty strings');

  if (!isArr(it.drills)) push('drills must be an array');
  else if (it.drills.length === 0) push('drills must not be empty — no drill could ever reach this item');
  else {
    const bad = it.drills.filter((d) => !oneOf(DRILL_KINDS, d));
    if (bad.length) push(`unknown drill(s): ${bad.join(', ')}`);
  }

  if (it.example !== undefined) {
    if (typeof it.example !== 'object' || it.example === null) push('example must be an object');
    else {
      if (!isStr(it.example.fr)) push('example.fr is required when example is present');
      if (!isStr(it.example.en)) push('example.en is required when example is present');
    }
  }

  if (typeof it.version !== 'number' || !Number.isFinite(it.version)) push('version must be a number');

  return out;
}

function validateSection(s: unknown, path: string): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof s !== 'object' || s === null) return [{ path, message: 'not an object' }];
  const sec = s as { type?: unknown; title?: unknown; [k: string]: unknown };

  if (!oneOf(SECTION_TYPES, sec.type)) {
    return [{ path, message: `type must be one of ${SECTION_TYPES.join(' | ')}` }];
  }
  if (!isStr(sec.title)) push('title is required');

  const strList = (k: string) => {
    const v = sec[k];
    if (!isArr(v) || v.length === 0) push(`${k} must be a non-empty array`);
    else if (v.some((x) => !isStr(x))) push(`${k} must all be non-empty strings`);
  };
  const objList = (k: string, req: string[]) => {
    const v = sec[k];
    if (!isArr(v) || v.length === 0) {
      push(`${k} must be a non-empty array`);
      return;
    }
    v.forEach((row, i) => {
      if (typeof row !== 'object' || row === null) {
        push(`${k}[${i}] is not an object`);
        return;
      }
      for (const f of req) {
        if (!isStr((row as Record<string, unknown>)[f])) push(`${k}[${i}].${f} is required`);
      }
    });
  };

  switch (sec.type) {
    case 'teach':
      if (!isStr(sec.body)) push('body is required');
      break;
    case 'steps':
      strList('steps');
      break;
    case 'examples':
      objList('examples', ['fr', 'en']);
      break;
    case 'useCases':
      objList('cases', ['situation', 'fr', 'en']);
      break;
    case 'hacks':
      objList('hacks', ['hack', 'why']);
      break;
    case 'cheatSheet':
      objList('rows', ['k', 'v']);
      break;
    case 'commonErrors':
      objList('errors', ['wrong', 'right', 'why']);
      break;
    case 'focus':
      strList('points');
      break;
    case 'audio':
      strList('lines');
      break;
    case 'table': {
      const cols = sec.cols;
      const rows = sec.rows;
      if (!isArr(cols) || cols.length === 0 || cols.some((c) => !isStr(c))) {
        push('cols must be a non-empty array of strings');
      }
      if (!isArr(rows) || rows.length === 0) push('rows must be a non-empty array');
      else if (isArr(cols)) {
        // A ragged table renders as silently misaligned cells, which reads as
        // a content error to the learner. Catch it here, not on screen.
        rows.forEach((r, i) => {
          if (!isArr(r) || r.some((c) => typeof c !== 'string')) push(`rows[${i}] must be strings`);
          else if (r.length !== cols.length) {
            push(`rows[${i}] has ${r.length} cells but there are ${cols.length} cols`);
          }
        });
      }
      break;
    }
    case 'practice': {
      if (!oneOf(SKILLS, sec.skill)) push(`skill must be one of ${SKILLS.join(' | ')}`);
      const ids = sec.itemIds;
      if (!isArr(ids) || ids.length === 0) push('itemIds must be a non-empty array');
      else {
        ids.forEach((id, i) => {
          if (!isStr(id) || !ITEM_ID_RE.test(id)) push(`itemIds[${i}] "${String(id)}" is not a valid item id`);
        });
      }
      break;
    }
    case 'quiz': {
      const qs = sec.questions;
      if (!isArr(qs) || qs.length === 0) {
        push('questions must be a non-empty array');
        break;
      }
      qs.forEach((q, i) => {
        if (typeof q !== 'object' || q === null) {
          push(`questions[${i}] is not an object`);
          return;
        }
        const qq = q as { q?: unknown; opts?: unknown; correct?: unknown };
        if (!isStr(qq.q)) push(`questions[${i}].q is required`);
        if (!isArr(qq.opts) || qq.opts.length < 2 || qq.opts.some((o) => !isStr(o))) {
          push(`questions[${i}].opts must be 2+ non-empty strings`);
        } else if (
          typeof qq.correct !== 'number' ||
          !Number.isInteger(qq.correct) ||
          qq.correct < 0 ||
          qq.correct >= qq.opts.length
        ) {
          // An out-of-range `correct` makes a question unanswerable: every
          // option scores wrong and the learner is told they failed.
          push(`questions[${i}].correct must index opts (0..${qq.opts.length - 1})`);
        }
      });
      break;
    }
  }
  return out;
}

export function validateLesson(v: unknown, path = 'lesson'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const l = v as Partial<Lesson>;

  if (!isStr(l.id)) push('id is required');
  else if (!LESSON_ID_RE.test(l.id)) push(`id "${l.id}" must match <track>.<nn>.l<seq>`);

  if (!isStr(l.unitId)) push('unitId is required');
  else if (!UNIT_ID_RE.test(l.unitId)) push(`unitId "${l.unitId}" must match <track>.<nn>`);

  // The lesson id embeds its unit. Disagreement means the lesson would be
  // filed under one unit and linked from another.
  if (isStr(l.id) && isStr(l.unitId) && LESSON_ID_RE.test(l.id) && unitOfLesson(l.id) !== l.unitId) {
    push(`id "${l.id}" does not belong to unitId "${l.unitId}"`);
  }

  if (!isStr(l.title)) push('title is required');
  if (!isStr(l.tag)) push('tag is required');
  if (!isStr(l.intro)) push('intro is required');
  if (!oneOf(LEVELS, l.level)) push(`level must be one of ${LEVELS.join(' | ')}`);
  if (typeof l.seq !== 'number' || !Number.isInteger(l.seq) || l.seq < 1) push('seq must be an integer >= 1');
  if (typeof l.version !== 'number' || !Number.isFinite(l.version)) push('version must be a number');

  if (!isArr(l.itemIds)) push('itemIds must be an array (use [] for none)');
  else {
    l.itemIds.forEach((id, i) => {
      if (!isStr(id) || !ITEM_ID_RE.test(id)) push(`itemIds[${i}] "${String(id)}" is not a valid item id`);
    });
  }

  if (!isArr(l.sections)) push('sections must be an array');
  else if (l.sections.length === 0) push('sections must not be empty — an empty lesson teaches nothing');
  else l.sections.forEach((s, i) => out.push(...validateSection(s, `${path}.sections[${i}]`)));

  return out;
}

export function validateUnit(v: unknown, path = 'unit'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const u = v as Partial<Unit>;

  if (!isStr(u.id)) push('id is required');
  else if (!UNIT_ID_RE.test(u.id)) push(`id "${u.id}" must match <track>.<nn>`);

  if (!oneOf(TRACKS, u.track)) push(`track must be one of ${TRACKS.join(' | ')}`);
  if (isStr(u.id) && UNIT_ID_RE.test(u.id) && u.track && u.id.split('.')[0] !== u.track) {
    push(`id track "${u.id.split('.')[0]}" disagrees with track "${u.track}"`);
  }

  if (!isStr(u.title)) push('title is required');
  if (typeof u.sub !== 'string') push('sub is required (may be empty)');
  if (typeof u.seq !== 'number' || !Number.isInteger(u.seq) || u.seq < 1) push('seq must be an integer >= 1');

  // An empty lessonIds is LEGAL: it is a unit whose content has not been
  // written yet, and the Den must render that honestly rather than pretend.
  if (!isArr(u.lessonIds)) push('lessonIds must be an array (use [] for none)');
  else {
    u.lessonIds.forEach((id, i) => {
      if (!isStr(id) || !LESSON_ID_RE.test(id)) push(`lessonIds[${i}] "${String(id)}" is not a valid lesson id`);
    });
  }

  return out;
}

export function validateScenario(v: unknown, path = 'scenario'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const s = v as Partial<Scenario>;

  if (!isStr(s.id)) push('id is required');
  else if (!SCENARIO_ID_RE.test(s.id)) push(`id "${s.id}" must match sc.<level>.<theme>.<seq>`);

  if (!oneOf(LEVELS, s.level)) push(`level must be one of ${LEVELS.join(' | ')}`);
  if (!isStr(s.theme)) push('theme is required');
  else if (!THEME_RE.test(s.theme)) push(`theme "${s.theme}" must be a lowercase slug`);
  if (isStr(s.id) && SCENARIO_ID_RE.test(s.id)) {
    const [, lvl, theme] = s.id.split('.');
    if (s.level && lvl !== s.level) push(`id level "${lvl}" disagrees with level "${s.level}"`);
    if (s.theme && theme !== s.theme) push(`id theme "${theme}" disagrees with theme "${s.theme}"`);
  }

  if (!isStr(s.title)) push('title is required');
  if (typeof s.version !== 'number' || !Number.isFinite(s.version)) push('version must be a number');

  if (!isArr(s.turns)) push('turns must be an array');
  else if (s.turns.length === 0) push('turns must not be empty — a scenario with no dialogue is nothing');
  else {
    s.turns.forEach((t, i) => {
      if (typeof t !== 'object' || t === null) {
        push(`turns[${i}] is not an object`);
        return;
      }
      const tt = t as Partial<ScenarioTurn>;
      if (!isStr(tt.ai)) push(`turns[${i}].ai is required`);
      if (!isStr(tt.en)) push(`turns[${i}].en is required`);
      if (!isStr(tt.user)) push(`turns[${i}].user is required`);
    });
  }

  return out;
}

/**
 * Whole-corpus validation, including referential integrity.
 *
 * This is the gate the publish pipeline runs before writing a snapshot, and the
 * reason it exists: a dangling itemId does not crash. It renders as an empty
 * drill or a blank practice block, with no error anywhere — the user just sees
 * a broken lesson and we see nothing. Catch it here, at publish, where it is
 * one line of output instead of a support ticket.
 */
export function validateCorpus(c: unknown, path = 'corpus'): Issue[] {
  const out: Issue[] = [];
  if (typeof c !== 'object' || c === null) return [{ path, message: 'not an object' }];
  const co = c as Partial<Corpus>;

  if (typeof co.version !== 'number' || !Number.isFinite(co.version)) {
    out.push({ path: `${path}.version`, message: 'version must be a number' });
  }
  // scenarios is optional for back-compat with a v0 seed written before scenarios
  // existed; treat a missing array as empty.
  const scenarios = co.scenarios ?? [];
  if (!isArr(co.units) || !isArr(co.lessons) || !isArr(co.items) || !isArr(scenarios)) {
    return [{ path, message: 'units, lessons, items and scenarios must all be arrays' }];
  }

  co.items.forEach((it, i) => out.push(...validateItem(it, `${path}.items[${i}]`)));
  co.lessons.forEach((l, i) => out.push(...validateLesson(l, `${path}.lessons[${i}]`)));
  co.units.forEach((u, i) => out.push(...validateUnit(u, `${path}.units[${i}]`)));
  scenarios.forEach((s, i) => out.push(...validateScenario(s, `${path}.scenarios[${i}]`)));

  // Duplicate ids: the later one silently wins in any Map-based lookup, so two
  // different items can share a key and the SRS schedules a ghost.
  const dupes = (ids: string[], what: string) => {
    const seen = new Set<string>();
    for (const id of ids) {
      if (seen.has(id)) out.push({ path, message: `duplicate ${what} id "${id}"` });
      seen.add(id);
    }
  };
  const itemIds = co.items.map((i) => i.id).filter(isStr);
  const lessonIds = co.lessons.map((l) => l.id).filter(isStr);
  const unitIds = co.units.map((u) => u.id).filter(isStr);
  dupes(itemIds, 'item');
  dupes(lessonIds, 'lesson');
  dupes(unitIds, 'unit');
  dupes(scenarios.map((s) => s.id).filter(isStr), 'scenario');

  const itemSet = new Set(itemIds);
  const lessonSet = new Set(lessonIds);
  const unitSet = new Set(unitIds);

  // Every reference must resolve, in both directions.
  for (const l of co.lessons) {
    if (isStr(l.unitId) && !unitSet.has(l.unitId)) {
      out.push({ path: `${path}.lessons`, message: `lesson "${l.id}" references unknown unit "${l.unitId}"` });
    }
    for (const id of isArr(l.itemIds) ? l.itemIds : []) {
      if (isStr(id) && !itemSet.has(id)) {
        out.push({ path: `${path}.lessons`, message: `lesson "${l.id}" references unknown item "${id}"` });
      }
    }
    for (const s of isArr(l.sections) ? l.sections : []) {
      if (s && typeof s === 'object' && (s as LessonSection).type === 'practice') {
        for (const id of (s as { itemIds?: unknown }).itemIds as string[] ?? []) {
          if (isStr(id) && !itemSet.has(id)) {
            out.push({
              path: `${path}.lessons`,
              message: `lesson "${l.id}" practice section references unknown item "${id}"`,
            });
          }
        }
      }
    }
  }

  for (const u of co.units) {
    for (const id of isArr(u.lessonIds) ? u.lessonIds : []) {
      if (isStr(id) && !lessonSet.has(id)) {
        out.push({ path: `${path}.units`, message: `unit "${u.id}" references unknown lesson "${id}"` });
      }
    }
  }

  // A lesson nobody links to is unreachable content: it was authored, reviewed
  // and shipped, and no user can ever open it.
  const linked = new Set(co.units.flatMap((u) => (isArr(u.lessonIds) ? u.lessonIds : [])));
  for (const l of co.lessons) {
    if (isStr(l.id) && !linked.has(l.id)) {
      out.push({ path: `${path}.lessons`, message: `lesson "${l.id}" is not listed in any unit's lessonIds` });
    }
  }

  return out;
}

export const isValidItem = (v: unknown): v is Item => validateItem(v).length === 0;
export const isValidLesson = (v: unknown): v is Lesson => validateLesson(v).length === 0;
export const isValidUnit = (v: unknown): v is Unit => validateUnit(v).length === 0;
export const isValidScenario = (v: unknown): v is Scenario => validateScenario(v).length === 0;
export const isValidCorpus = (v: unknown): v is Corpus => validateCorpus(v).length === 0;

/** Render issues for a human — the publish script's abort message, and the
 *  Ops Console's rejection reason. */
export function formatIssues(issues: Issue[]): string {
  return issues.map((i) => `  ${i.path}: ${i.message}`).join('\n');
}
