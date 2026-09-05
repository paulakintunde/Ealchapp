// Content service — the PURE half. Merge, selection, and snapshot verification.
//
// Like progress.logic.ts, this file imports nothing from react-native, zustand,
// AsyncStorage or expo, so `node --test` can execute it directly and every rule
// here is tested without a device. The store shell (content.ts) is the only
// place the platform is touched.
// TYPE-ONLY import, and deliberately so. `node --test` runs this file directly;
// a runtime import of schema would force node to resolve the module (extension
// and alias rules differ across node/tsc/Metro and fighting all three is not
// worth it). Types are erased before node ever runs, so schema is never
// resolved here. The one runtime thing verifySnapshot needs — the structural
// validator — is passed IN (see `validate` below). Same spirit as
// progress.logic.ts: this file stays a pure island.
import type { CardType, Corpus, DrillKind, ExamFormat, ExamPaper, ExamSection, ExamSkill, ExamTask, Item, Lesson, LessonSection, Level, QcmItem, Scenario, SpeakStage, Track, Unit } from '../content/schema';

/* ─── merge ──────────────────────────────────────────────────────────────── */

// The app ships a SEED (a subset, bundled in the binary) and may later cache a
// SNAPSHOT (the full published corpus, fetched over the air). Merge overlays the
// snapshot onto the seed, union by id, snapshot winning any conflict.
//
// Why union and not "snapshot replaces seed wholesale": the snapshot SHOULD be a
// superset of the seed, but if a publish ever dropped something the seed still
// carries, wholesale replacement would make a bundled item vanish on any device
// that had fetched once. Union means the seed is a floor the network can raise
// but never lower — an offline-capable app should never lose content it shipped
// with.

function indexById<T extends { id: string }>(rows: T[]): Map<string, T> {
  const m = new Map<string, T>();
  for (const r of rows) m.set(r.id, r);
  return m;
}

function overlay<T extends { id: string }>(base: T[], over: T[]): T[] {
  const m = indexById(base);
  for (const r of over) m.set(r.id, r);
  return [...m.values()];
}

/** Same overlay-by-key merge as `overlay`, for the rows keyed by something
 *  other than `id` — Domain and Theme are keyed by `slug`, matching how
 *  validateCorpus dedupes them. */
function overlayBy<T>(base: T[], over: T[], key: (r: T) => string): T[] {
  const m = new Map<string, T>();
  for (const r of base) m.set(key(r), r);
  for (const r of over) m.set(key(r), r);
  return [...m.values()];
}

/** Overlay `snapshot` onto `seed`. A null/undefined snapshot returns the seed
 *  unchanged. The result carries the higher version.
 *
 * Every Corpus array must be listed here, including the ones that are
 * optional on the type. Adding a new top-level Corpus array is a genuine
 * four-touchpoint change (the type, EMPTY_CORPUS, this function, and the
 * publish seed-cut) and this was the touchpoint that went missing when
 * domains/themes/packs/examTasks/examSeries were added: they existed on
 * Corpus and were validated, but this function still only overlaid
 * items/lessons/units/scenarios, so any snapshot carrying them would merge
 * back down to the seed's empty floor and silently ship nothing. Fixed here
 * for those five and extended for playlists/templates so the same class of
 * bug cannot recur for the next array either. */
export function mergeCorpus(seed: Corpus, snapshot: Corpus | null | undefined): Corpus {
  if (!snapshot) return seed;
  return {
    version: Math.max(seed.version, snapshot.version),
    items: overlay(seed.items, snapshot.items),
    lessons: overlay(seed.lessons, snapshot.lessons),
    units: overlay(seed.units, snapshot.units),
    // A seed written before any of these existed has no such array; default it.
    scenarios: overlay(seed.scenarios ?? [], snapshot.scenarios ?? []),
    domains: overlayBy(seed.domains ?? [], snapshot.domains ?? [], (d) => d.slug),
    themes: overlayBy(seed.themes ?? [], snapshot.themes ?? [], (t) => t.slug),
    packs: overlay(seed.packs ?? [], snapshot.packs ?? []),
    examTasks: overlay(seed.examTasks ?? [], snapshot.examTasks ?? []),
    examPapers: overlay(seed.examPapers ?? [], snapshot.examPapers ?? []),
    playlists: overlay(seed.playlists ?? [], snapshot.playlists ?? []),
    templates: overlay(seed.templates ?? [], snapshot.templates ?? []),
    speakPath: overlay(seed.speakPath ?? [], snapshot.speakPath ?? []),
  };
}

/**
 * Which cached snapshot a launch is allowed to overlay onto the seed.
 *
 * In DEV the answer is none, and that is the whole point of this function.
 *
 * ── The bug this closes, found on a Pixel 6 ────────────────────────────────
 *
 * `refreshFromRemote()` has been dev-guarded since the Phase 10 sons.02/03
 * incident, on the reasoning written at its own call site: in dev the published
 * snapshot is routinely BEHIND the seed being hand-edited right now, so adopting
 * it would silently overlay in-progress local edits with old content.
 *
 * That guard stopped the app ACQUIRING a stale overlay. It did nothing about one
 * the device already held. `initContent` read the cache unconditionally, and
 * `mergeCorpus` overlays the snapshot ON TOP of the seed, so for any id present
 * in both, THE CACHE WON. On any device that had ever run a release build or
 * fetched once, a locally edited lesson or a repaired respelling was invisible
 * no matter how many times Metro rebuilt the bundle, because the bundle is only
 * layer 1 of 3 and layer 2 silently outranked it.
 *
 * That is what made this look like a Metro caching problem for two sessions. It
 * never was. The bundle was fresh every time; the corpus on top of it was not,
 * and nothing in the app could clear it.
 *
 * New ids still appeared (nothing to lose to), which is what made it so
 * confusing: adding a lesson worked, editing one did not.
 *
 * ── Why "seed only" rather than "seed wins the overlay" ───────────────────
 *
 * Reversing the merge order in dev (`overlay(snapshot, seed)`) would also work
 * and would keep OTA-only content visible. It was rejected because it makes dev
 * and production disagree about the DIRECTION of the merge, which is the one
 * property of this path most worth testing honestly. Dropping the overlay
 * entirely keeps one rule ("dev shows exactly what is in your seed") and leaves
 * the merge itself identical in both.
 *
 * Production behaviour is unchanged: a release build adopts the cache exactly as
 * before.
 */
export function adoptedForLaunch(cached: Corpus | null | undefined, isDev: boolean): Corpus | null {
  if (isDev) return null;
  return cached ?? null;
}

/** The Speak trail, in walk order. Stages ship unordered (they are keyed rows,
 *  not a sequence) — (world, seq) is the one true order, so the single sort
 *  lives here rather than in every screen that renders the path. */
export function speakStages(corpus: Corpus): SpeakStage[] {
  return [...(corpus.speakPath ?? [])].sort((a, b) => a.world - b.world || a.seq - b.seq);
}

/* ─── selection — every drill is a view over the one corpus ──────────────── */

export type ItemQuery = {
  level?: Item['level'];
  theme?: string;
  /** Any of these theme slugs — how a hub DOMAIN queries its deck (the
   *  catalogue maps domain → themes; items only know their theme). Ignored
   *  when `theme` is also set: one theme is already the narrower ask. */
  themes?: string[];
  /** Themed-flashcard card type. An item with no cardType IS a vocab card
   *  (the field predates nothing — absence means the plain fr/en pair), so
   *  querying 'vocab' matches both absent and explicit 'vocab'. */
  cardType?: CardType;
  /** Restrict to these ids, in this order. Everything else is ignored. */
  ids?: string[];
};

/** The effective card type of an item — absence means 'vocab'. The single
 *  place that default is encoded; the deck screen and the type-picker counts
 *  must agree with the query filter, so all three call this. */
export function itemCardType(it: Item): CardType {
  return it.cardType ?? 'vocab';
}

/**
 * Items a drill may use. The drill names itself; the corpus answers. This is the
 * join that replaces seven hardcoded per-drill arrays: a drill asks "what can I
 * use", instead of owning its content.
 *
 * With `ids`, returns exactly those items that exist AND allow this drill, in the
 * order asked — a lesson's practice section drives the drill from its itemIds.
 */
export function selectItems(corpus: Corpus, drill: DrillKind, q: ItemQuery = {}): Item[] {
  if (q.ids) {
    const byId = indexById(corpus.items);
    const out: Item[] = [];
    for (const id of q.ids) {
      const it = byId.get(id);
      if (it && it.drills.includes(drill)) out.push(it);
    }
    return out;
  }
  const themeSet = q.theme === undefined && q.themes !== undefined ? new Set(q.themes) : null;
  return corpus.items.filter(
    (it) =>
      it.drills.includes(drill) &&
      (q.level === undefined || it.level === q.level) &&
      (q.theme === undefined || it.theme === q.theme) &&
      (themeSet === null || themeSet.has(it.theme)) &&
      (q.cardType === undefined || itemCardType(it) === q.cardType)
  );
}

/* ─── beginner tokenization (CF-24 / Phase 6b panel note) ────────────────── */

export type SbTile = { w: string; t: string };

/** Determiners that must travel WITH their noun in beginner sentence-building.
 *  Articles and the everyday possessives/demonstratives only — deliberately
 *  not bare 'de', which is usually a preposition and would glue itself to
 *  whatever follows. */
const SB_DETERMINERS = new Set([
  'un', 'une', 'des', 'le', 'la', 'les', "l'", 'du',
  'mon', 'ma', 'mes', 'ton', 'ta', 'tes', 'son', 'sa', 'ses',
  'ce', 'cet', 'cette', 'ces',
]);

/** Merge a determiner tile into the word that follows it, so the Sentence
 *  Builder offers « un café » as ONE draggable bubble, never « un » + « café ».
 *  Splitting them teaches that the article is detachable from the noun — the
 *  exact instinct a gender-first product exists to prevent; the phonological
 *  word keeps its gender attached wherever it surfaces. Elision ("l'") joins
 *  without a space. A determiner with nothing after it is left alone. */
export function mergeArticleTiles(tiles: SbTile[]): SbTile[] {
  const out: SbTile[] = [];
  for (let i = 0; i < tiles.length; i++) {
    let w = tiles[i].w;
    let t = tiles[i].t;
    while (i + 1 < tiles.length && SB_DETERMINERS.has(w.toLowerCase().trim())) {
      const next = tiles[i + 1];
      w = w.endsWith("'") ? w + next.w : `${w} ${next.w}`;
      t = [t, next.t].filter(Boolean).join(' ');
      i++;
    }
    out.push({ w, t });
  }
  return out;
}

/**
 * An item's teaching note, for any screen that is NOT the Sentence Builder.
 *
 * `Item.notes` does double duty: a plain-English tip (dictation's why-tip, a
 * flashcard's teaching note) on most items, but on an item that also drills
 * 'sentence' it is instead a JSON-encoded `{ tiles }` payload that only
 * `app/sentence.tsx` (see `tilesFor` there) knows how to read. An item can
 * carry both drills at once (dual flashcard/sentence-builder content), so a
 * screen cannot tell which shape `notes` is from the drill it is running.
 * Anything that renders `item.notes` as prose — the flashcard back, a
 * lesson's practice card — must go through this, or a sentence item's raw
 * tile JSON leaks onto the card as if it were the note itself.
 */
export function noteFor(item: Item): string | undefined {
  const notes = item.notes;
  if (!notes || !notes.startsWith('{')) return notes;
  try {
    const parsed = JSON.parse(notes);
    if (Array.isArray(parsed?.tiles)) return undefined;
  } catch {
    // Not JSON after all — treat it as a real note.
  }
  return notes;
}

export function getItem(corpus: Corpus, id: string): Item | null {
  return corpus.items.find((i) => i.id === id) ?? null;
}
export function getLesson(corpus: Corpus, id: string): Lesson | null {
  return corpus.lessons.find((l) => l.id === id) ?? null;
}
export function getUnit(corpus: Corpus, id: string): Unit | null {
  return corpus.units.find((u) => u.id === id) ?? null;
}

/** Units of a track, in seq order. The Den's spine. */
export function unitsInTrack(corpus: Corpus, track: Track): Unit[] {
  return corpus.units.filter((u) => u.track === track).sort((a, b) => a.seq - b.seq);
}

export function getScenario(corpus: Corpus, id: string): Scenario | null {
  return (corpus.scenarios ?? []).find((s) => s.id === id) ?? null;
}

/** Role Play scenarios, optionally filtered by level and/or theme. */
export function scenariosFor(corpus: Corpus, q: { level?: Level; theme?: string } = {}): Scenario[] {
  return (corpus.scenarios ?? []).filter(
    (s) => (q.level === undefined || s.level === q.level) && (q.theme === undefined || s.theme === q.theme)
  );
}

export function getExamTask(corpus: Corpus, id: string): ExamTask | null {
  return (corpus.examTasks ?? []).find((t) => t.id === id) ?? null;
}

export function getExamPaper(corpus: Corpus, id: string): ExamPaper | null {
  return (corpus.examPapers ?? []).find((p) => p.id === id) ?? null;
}

/** Mock papers for a format, in paperNo order — the format hub's list. */
export function examPapersFor(corpus: Corpus, format: ExamFormat): ExamPaper[] {
  return (corpus.examPapers ?? []).filter((p) => p.format === format).sort((a, b) => a.paperNo - b.paperNo);
}

/** A paper's tasks, resolved and in sitting order across all four épreuves —
 *  a paper listing a task that has not published yet simply yields fewer
 *  tasks rather than a blank entry, same posture as lessonsOfUnit. */
export function examTasksOfPaper(corpus: Corpus, paperId: string): ExamTask[] {
  const paper = getExamPaper(corpus, paperId);
  if (!paper) return [];
  const byId = indexById(corpus.examTasks ?? []);
  // Inlined rather than calling schema's paperTaskIds: this file imports
  // schema for TYPES only (see the module note), and a runtime import would
  // make node resolve it.
  const ids = (paper.sections ?? []).flatMap((s) => s.taskIds ?? []);
  return ids.map((id) => byId.get(id)).filter((t): t is ExamTask => !!t);
}

/** One épreuve's tasks, resolved and in order. The section runner's unit of
 *  work: a candidate sits one épreuve at a time, under its own clock. */
export function examTasksOfSection(corpus: Corpus, section: ExamSection): ExamTask[] {
  const byId = indexById(corpus.examTasks ?? []);
  return (section.taskIds ?? []).map((id) => byId.get(id)).filter((t): t is ExamTask => !!t);
}

/** The section of a paper carrying a given skill, or null. Papers always have
 *  all four (validateExamPaper enforces it), so null means the paper is
 *  invalid or absent, not that the épreuve is optional. */
export function examSectionOf(paper: ExamPaper, skill: ExamSkill): ExamSection | null {
  return (paper.sections ?? []).find((s) => s.skill === skill) ?? null;
}

/**
 * One task flattened into the questions a runner actually draws.
 *
 * A task carries `items` (one stimulus, the task's own prompt) or `parts`
 * (several, each with its own audio, image and play count). The runner should
 * not care which: it needs an ordered list of questions, each knowing where it
 * came from so answers can be kept and marked per question.
 */
export type ExamQuestion = {
  /** Stable within the task, and stable across re-renders — the key answers
   *  are stored under. Positional rather than content-derived, because two
   *  questions in a paper can legitimately have identical text. */
  key: string;
  item: QcmItem;
  /** Which part it came from, or null when the task uses a flat `items` list. */
  partIx: number | null;
  partLabel: string | null;
};

export function taskQuestions(task: ExamTask): ExamQuestion[] {
  if (task.parts?.length) {
    return task.parts.flatMap((p, pi) =>
      (p.items ?? []).map((item, ii) => ({ key: `p${pi}.i${ii}`, item, partIx: pi, partLabel: p.label ?? null }))
    );
  }
  return (task.items ?? []).map((item, ii) => ({ key: `i${ii}`, item, partIx: null, partLabel: null }));
}

/**
 * Mark a closed task.
 *
 * An unanswered question is WRONG, not skipped, and the total is every question
 * the task asked. Both exam bodies score exactly this way — one point per
 * correct answer, nothing deducted and nothing forgiven for a blank — and
 * scoring "out of what was attempted" would flatter a candidate who ran out of
 * time into a band they did not earn.
 */
export function scoreClosedTask(
  task: ExamTask,
  answers: Record<string, number | null | undefined>
): { correct: number; total: number; points: number; pointsTotal: number } {
  const qs = taskQuestions(task);
  const correct = qs.reduce((n, q) => n + (answers[q.key] === q.item.correct ? 1 : 0), 0);

  // The weighted pair rides ALONGSIDE the counts rather than replacing them,
  // and that separation is deliberate. TCF's NCLC estimate weights by BAND and
  // reads counts per band (nclc.logic.weightedRaw); if `correct` became a point
  // sum, that profile would quietly start reading the wrong unit. So counts
  // stay counts, and formats that weight their questions get a second pair.
  //
  // With no item declaring `points`, the two pairs are equal by construction —
  // every existing TEF and TCF paper scores byte-identically to before.
  const weight = (q: (typeof qs)[number]) => q.item.points ?? 1;
  const points = qs.reduce((n, q) => n + (answers[q.key] === q.item.correct ? weight(q) : 0), 0);
  const pointsTotal = qs.reduce((n, q) => n + weight(q), 0);

  return { correct, total: qs.length, points, pointsTotal };
}

/** The lessons of a unit, in seq order, resolved and filtered to what exists.
 *  A unit may list a lesson that has not published yet; that link simply yields
 *  nothing rather than a blank row. */
export function lessonsOfUnit(corpus: Corpus, unitId: string): Lesson[] {
  const u = getUnit(corpus, unitId);
  if (!u) return [];
  const byId = indexById(corpus.lessons);
  return u.lessonIds
    .map((id) => byId.get(id))
    .filter((l): l is Lesson => !!l)
    .sort((a, b) => a.seq - b.seq);
}

/* ─── positional deep-link anchors (Phase 2.E) ───────────────────────────── */
//
// A mistaken attempt during a drill should be able to point back at the exact
// lesson block it came from, not just name the item — so a review flow can
// jump straight to where something is taught. The anchor is POSITIONAL,
// `<lessonId>#s<n>.<k>` (section index, item index within that section's
// itemIds), derived purely from array position rather than a stored id. It is
// NEVER an SRS key — SRS keys stay itemId (progress.logic.ts), because item
// identity is stable but a lesson's section order and itemIds are not: an
// author can reorder or re-author a lesson at any time. A caller that wants a
// stale anchor to fail closed rather than silently point at the wrong block
// should stash the corpus version alongside it and pass it back as
// `atCorpusVersion` — resolveAnchor treats any mismatch as "not found."

export type LessonAnchor = { lessonId: string; sectionIndex: number; itemIndex: number };

const ANCHOR_RE = /^(.+)#s(\d+)\.(\d+)$/;

/** Format an anchor. Pure string join — pair with resolveAnchor to confirm it
 *  actually points at something before using it. */
export function formatAnchor(a: LessonAnchor): string {
  return `${a.lessonId}#s${a.sectionIndex}.${a.itemIndex}`;
}

/** Parse an anchor string's shape. Does not confirm the target exists. */
export function parseAnchor(anchor: string): LessonAnchor | null {
  const m = ANCHOR_RE.exec(anchor);
  if (!m) return null;
  return { lessonId: m[1], sectionIndex: Number(m[2]), itemIndex: Number(m[3]) };
}

/** The anchor for an item's first appearance in one of this lesson's practice
 *  sections, or null if the lesson does not teach it there. */
export function anchorForItem(lesson: Lesson, itemId: string): LessonAnchor | null {
  for (let s = 0; s < lesson.sections.length; s++) {
    const section = lesson.sections[s];
    if (section.type !== 'practice') continue;
    const k = section.itemIds.indexOf(itemId);
    if (k !== -1) return { lessonId: lesson.id, sectionIndex: s, itemIndex: k };
  }
  return null;
}

/** Resolve an anchor against the live corpus. Fails closed (returns null) on
 *  ANY mismatch — missing lesson, out-of-range section, out-of-range item, or
 *  (when `atCorpusVersion` is passed) a corpus that has moved on since the
 *  anchor was minted. A resolved non-practice section has no item. */
export function resolveAnchor(
  corpus: Corpus,
  anchor: LessonAnchor,
  opts: { atCorpusVersion?: number } = {}
): { lesson: Lesson; section: LessonSection; item: Item | null } | null {
  if (opts.atCorpusVersion !== undefined && opts.atCorpusVersion !== corpus.version) return null;
  const lesson = getLesson(corpus, anchor.lessonId);
  if (!lesson) return null;
  const section = lesson.sections[anchor.sectionIndex];
  if (!section) return null;
  if (section.type === 'practice') {
    const itemId = section.itemIds[anchor.itemIndex];
    if (itemId === undefined) return null;
    const item = getItem(corpus, itemId);
    return item ? { lesson, section, item } : null;
  }
  if (anchor.itemIndex !== 0) return null;
  return { lesson, section, item: null };
}

/* ─── snapshot verification ──────────────────────────────────────────────── */

// stableStringify MUST match ealch-admin/scripts/publish-content.ts byte for
// byte, or a snapshot that was published cleanly will fail its own checksum here
// and OTA updates will silently never apply. Sort plain-object keys; leave arrays
// (which are order-significant) untouched.
export function stableStringify(v: unknown): string {
  return JSON.stringify(v, (_k, val) => {
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      return Object.fromEntries(
        Object.entries(val as Record<string, unknown>).sort(([a], [b]) => a.localeCompare(b))
      );
    }
    return val;
  });
}

// SHA-256, pure and dependency-free (the app has no crypto module). Tested for
// byte-equality against node:crypto so it cannot silently diverge from the hash
// the publish script writes. A wrong hash here would REJECT every valid snapshot,
// so this is verified, not trusted.
export function sha256Hex(input: string): string {
  const K = SHA256_K;
  // UTF-8 bytes. Unpaired surrogates are emitted as U+FFFD, matching how Node's
  // Buffer/TextEncoder handle them — without this, sha256Hex would diverge from
  // node:crypto on any malformed UTF-16, which is exactly the parity the publish
  // checksum depends on.
  const bytes: number[] = [];
  const push3 = (c: number) => bytes.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
  for (let i = 0; i < input.length; i++) {
    const c = input.charCodeAt(i);
    if (c < 0x80) bytes.push(c);
    else if (c < 0x800) bytes.push(0xc0 | (c >> 6), 0x80 | (c & 0x3f));
    else if (c < 0xd800 || c >= 0xe000) push3(c);
    else if (c < 0xdc00) {
      // High surrogate — must be followed by a low surrogate.
      const lo = input.charCodeAt(i + 1);
      if (lo >= 0xdc00 && lo < 0xe000) {
        i++;
        const cp = 0x10000 + (((c & 0x3ff) << 10) | (lo & 0x3ff));
        bytes.push(0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 0x3f), 0x80 | ((cp >> 6) & 0x3f), 0x80 | (cp & 0x3f));
      } else {
        push3(0xfffd); // lone high surrogate → replacement char
      }
    } else {
      push3(0xfffd); // lone low surrogate → replacement char
    }
  }

  const l = bytes.length;
  bytes.push(0x80);
  while (bytes.length % 64 !== 56) bytes.push(0);
  const bitLen = l * 8;
  // 64-bit length, big-endian. Lengths here are well under 2^32, so the high
  // word is 0.
  for (let i = 7; i >= 0; i--) bytes.push((bitLen / 2 ** (8 * i)) & 0xff);

  let [h0, h1, h2, h3, h4, h5, h6, h7] = SHA256_H;
  const w = new Array<number>(64);
  const rotr = (x: number, n: number) => (x >>> n) | (x << (32 - n));

  for (let off = 0; off < bytes.length; off += 64) {
    for (let i = 0; i < 16; i++) {
      w[i] = (bytes[off + i * 4] << 24) | (bytes[off + i * 4 + 1] << 16) | (bytes[off + i * 4 + 2] << 8) | bytes[off + i * 4 + 3];
    }
    for (let i = 16; i < 64; i++) {
      const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
      const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
    }
    let [a, b, c, d, e, f, g, h] = [h0, h1, h2, h3, h4, h5, h6, h7];
    for (let i = 0; i < 64; i++) {
      const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
      const ch = (e & f) ^ (~e & g);
      const t1 = (h + S1 + ch + K[i] + w[i]) | 0;
      const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const t2 = (S0 + maj) | 0;
      h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
    }
    h0 = (h0 + a) | 0; h1 = (h1 + b) | 0; h2 = (h2 + c) | 0; h3 = (h3 + d) | 0;
    h4 = (h4 + e) | 0; h5 = (h5 + f) | 0; h6 = (h6 + g) | 0; h7 = (h7 + h) | 0;
  }

  const hex = (x: number) => (x >>> 0).toString(16).padStart(8, '0');
  return hex(h0) + hex(h1) + hex(h2) + hex(h3) + hex(h4) + hex(h5) + hex(h6) + hex(h7);
}

const SHA256_H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
const SHA256_K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];

export type Manifest = {
  version: number;
  path: string;
  checksum: string;
  /** Staged rollout: the share of devices (0-100) that should adopt this
   *  version. Absent means 100 — every manifest published before the field
   *  existed rolled out to everyone, so absence keeps meaning that. 0 is the
   *  KILL SWITCH: nobody adopts, everyone freezes on what they hold. */
  rollout?: number;
};

export function isManifest(v: unknown): v is Manifest {
  if (!v || typeof v !== 'object') return false;
  const m = v as Record<string, unknown>;
  return (
    typeof m.version === 'number' &&
    typeof m.path === 'string' &&
    typeof m.checksum === 'string' &&
    // A malformed rollout rejects the whole manifest rather than being
    // defaulted: a publisher that writes junk here should look broken at the
    // next fetch, not silently roll out to everyone.
    (m.rollout === undefined || typeof m.rollout === 'number')
  );
}

/** Should we bother downloading? Only if the manifest offers a strictly newer
 *  version than we already hold. */
export function manifestIsNewer(manifest: Manifest, currentVersion: number): boolean {
  return manifest.version > currentVersion;
}

/**
 * The adoption decision, whole: strictly newer AND inside the rollout.
 *
 * `bucket` is the device's stable lot number, 0-99, drawn once per install and
 * persisted (content.ts). A device adopts when bucket < rollout, so raising
 * the rollout only ever ADDS devices — the 10% who took v9 at rollout 10 are
 * the same devices inside 50 and 100, and nobody flaps between versions when
 * the number moves.
 *
 * What this can and cannot do:
 *   rollout 10  — a bad publish reaches ~10% of devices instead of all of them
 *   rollout 0   — the kill switch: adoption halts; devices keep what they hold
 *   rollback    — this gate cannot HEAL a device that already adopted a bad
 *                 version (versions only ever rise, deliberately — see
 *                 manifestIsNewer). Healing is publishing the last good
 *                 snapshot AS A NEW VERSION: ealch-admin content:rollback.
 */
export function shouldAdopt(manifest: Manifest, currentVersion: number, bucket: number): boolean {
  if (!manifestIsNewer(manifest, currentVersion)) return false;
  const rollout = manifest.rollout === undefined ? 100 : manifest.rollout;
  if (!Number.isFinite(rollout)) return false;
  return bucket < Math.min(100, Math.max(0, rollout));
}

/* ─── The trusted cache (cold-start perf budget, master plan Phase 2) ──────── */

// The cached snapshot was fully verified — checksum, structure, version — the
// moment it was WRITTEN. Re-running validateCorpus over the whole corpus on
// every cold start re-does that work on the paint-gating path: per-entity
// validation, duplicate-id sets and the referential walks are O(corpus) and sit
// between the user and first paint. So the read path trusts the write path:
// an O(1) shape check gates the paint, and the full validation re-runs AFTER
// paint, demoting a corrupted cache from "slow every launch" to "detected one
// frame later, rolled back to seed".

/** The metadata written alongside the cached snapshot text. Its PRESENCE is the
 *  commit marker: text without meta (a torn write, or a cache from before this
 *  scheme) is treated as no cache at all. */
export type CacheMeta = { version: number; checksum: string };

export function isCacheMeta(v: unknown): v is CacheMeta {
  if (!v || typeof v !== 'object') return false;
  const m = v as Record<string, unknown>;
  return typeof m.version === 'number' && typeof m.checksum === 'string';
}

/** The O(1) stand-in for validateCorpus on the paint path: is this parsed value
 *  shaped like a corpus at all? Catches the torn/truncated/wrong-key cache
 *  without walking a single entity. Everything deeper waits until after paint. */
export function looksLikeCorpus(v: unknown): v is Corpus {
  if (!v || typeof v !== 'object') return false;
  const c = v as Record<string, unknown>;
  return (
    typeof c.version === 'number' &&
    Array.isArray(c.units) &&
    Array.isArray(c.lessons) &&
    Array.isArray(c.items)
  );
}

/** The hard ceiling on snapshot bytes, enforced on BOTH ends: publish refuses
 *  to produce a snapshot the app would refuse, and the app refuses to parse a
 *  download past it (a multi-MB parse + verify is a main-thread stall and a
 *  low-end-Android OOM window). Heavy media never belongs in the snapshot —
 *  audio ships via the asset manifest (Phase 4) precisely so this number can
 *  hold. Raising it is a deliberate decision, not a fix for a fat corpus.
 *
 *  Raised 4 MiB → 30 MiB (Paul, 2026-07-28): the corpus outgrew the old
 *  ceiling for real — 46k authored items stableStringify to ~21 MiB — and
 *  there is no production install base to strand on the old limit. The parse
 *  cost concern stands: verify/merge already run behind InteractionManager,
 *  and snapshot slimming (per-level splits, compression) is the recorded
 *  follow-up if low-end devices struggle. */
export const MAX_SNAPSHOT_BYTES = 30 * 1024 * 1024;

export type VerifyResult =
  | { ok: true; corpus: Corpus }
  | { ok: false; reason: 'parse' | 'checksum' | 'invalid' | 'version' };

/** The structural validator, injected. In the app and in tests this is
 *  schema.ts's `validateCorpus`; taking it as a parameter is what lets this file
 *  stay a type-only pure island (see the import note at the top). Returns the
 *  list of issues — empty means valid. */
export type CorpusValidator = (corpus: unknown) => { length: number };

/**
 * Turn snapshot bytes into a trusted Corpus, or reject with a reason. Four gates,
 * in order, because each is cheaper than the next and each catches a different
 * lie:
 *   parse    — truncated or corrupt download
 *   checksum — bytes are not what the manifest promised (tamper / stale CDN)
 *   invalid  — structurally wrong per schema.ts (a dangling itemId, etc.)
 *   version  — the snapshot and its manifest disagree about their own version
 * A snapshot that fails any gate is discarded and whatever we already have stands.
 */
export function verifySnapshot(text: string, manifest: Manifest, validate: CorpusValidator): VerifyResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return { ok: false, reason: 'parse' };
  }

  if (sha256Hex(stableStringify(parsed)) !== manifest.checksum) {
    return { ok: false, reason: 'checksum' };
  }

  if (validate(parsed).length > 0) {
    return { ok: false, reason: 'invalid' };
  }

  const corpus = parsed as Corpus;
  if (corpus.version !== manifest.version) {
    return { ok: false, reason: 'version' };
  }
  return { ok: true, corpus };
}
