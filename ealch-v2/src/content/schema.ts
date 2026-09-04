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

/**
 * The bands CONTENT can be authored at. Deliberately not the same list as the
 * bands a learner can SCORE at — see SCORE_BANDS.
 *
 * 'c2' is absent on purpose. We author no c2 content: a c2 candidate is not
 * learning French from an app, and pretending the corpus reaches c2 would put an
 * empty band in every level picker. c2 remains meaningful as an exam RESULT,
 * which is why the two lists are split rather than one list doing both jobs.
 */
export const LEVELS = ['sons', 'a1', 'a2', 'b1', 'b2', 'c1'] as const;
export type Level = (typeof LEVELS)[number];

/**
 * The bands a learner can be SCORED at on a real exam paper. Display only: a TEF
 * or TCF result can legitimately come back c2, and 'sons' is not a CEFR band at
 * all — it is our own pronunciation track. So this list is neither a superset
 * nor a subset of LEVELS, and conflating them would either invent c2 content or
 * report a learner's level as "sons".
 */
export const SCORE_BANDS = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'] as const;
export type ScoreBand = (typeof SCORE_BANDS)[number];

/** Tracks are the three columns of the Beginners' Den. A Level is broader:
 *  corpus items can be tagged b1..c1 long before a track exists for them. */
export const TRACKS = ['sons', 'a1', 'a2'] as const;
export type Track = (typeof TRACKS)[number];

export const ITEM_KINDS = ['word', 'phrase', 'sentence'] as const;
export type ItemKind = (typeof ITEM_KINDS)[number];

/** Which drills MAY select an item. An item carries its own eligibility rather
 *  than each drill hardcoding a list: a drill asks the corpus for what it can
 *  use, so adding a drill never means editing every item.
 *
 *  These are SHIPPED STRING VALUES. Existing installs hold cached OTA snapshots
 *  containing them, so adding a kind is safe and changing one is not: a renamed
 *  value silently empties every deck built from a cached snapshot. Append only. */
export const DRILL_KINDS = [
  'flashcard',
  'voiceflash',
  'dictation',
  'sentence',
  'roleplay',
  'review',
  'playlist',
  'exam',
] as const;
export type DrillKind = (typeof DRILL_KINDS)[number];

/**
 * The four skills a rich LESSON must exercise — what `LessonSection.practice`
 * asks the learner to do. Not the exam taxonomy: see EXAM_SKILLS.
 *
 * Named PRACTICE_SKILLS rather than SKILLS because there are now two skill
 * vocabularies in play and an unqualified `Skill` gave no way to tell which one
 * a field meant. The string values are unchanged and must stay that way — they
 * ship inside cached snapshots.
 */
export const PRACTICE_SKILLS = ['read', 'write', 'speak', 'listen'] as const;
export type PracticeSkill = (typeof PRACTICE_SKILLS)[number];

/**
 * The exam taxonomy, per item. Compréhension/Production × Orale/Écrite — the
 * four skills every TEF/TCF/DELF paper is built from.
 *
 *   CO  compréhension orale     listening   → co_mcq                ≈ PracticeSkill 'listen'
 *   CE  compréhension écrite    reading     → ce_mcq                ≈ PracticeSkill 'read'
 *   PO  production orale        speaking    → po_monologue/po_interaction ≈ PracticeSkill 'speak'
 *   PE  production écrite       writing     → pe_short/pe_essay     ≈ PracticeSkill 'write'
 *
 * The mapping is a correspondence, not an identity, which is exactly why both
 * lists exist: an item's skill is a property of the item, while an ExamTask's
 * taskType is a property of the paper (there are two PO task types and two PE
 * task types, all mapping onto one skill each — see examTaskSkill). Do not
 * collapse them.
 */
export const EXAM_SKILLS = ['CO', 'CE', 'PO', 'PE'] as const;
export type ExamSkill = (typeof EXAM_SKILLS)[number];

/**
 * How an item is being exercised, which is not the same as whether it is known.
 * Recognising 'la gare' on sight and producing it from 'the station' are
 * different memories with different decay curves, so the SRS schedules them
 * separately: the scheduler's key is (itemId, modality), never itemId alone.
 * Collapsing them is why an app can insist you know a word you cannot say.
 */
export const MODALITIES = ['recognise', 'produce', 'discriminate'] as const;
export type Modality = (typeof MODALITIES)[number];

/** Register. Saying 'tu fous quoi ?' to a border officer is a grammatically
 *  perfect sentence and a social catastrophe, so register is a first-class
 *  property of an item rather than a note nobody reads. */
export const REGISTERS = ['familier', 'courant', 'soutenu'] as const;
export type Register = (typeof REGISTERS)[number];

/**
 * The themed-flashcard card types — the per-type decks the flashcard hub's
 * category picker offers. 'vocab' is the classic fr/en flip pair (drilled in
 * both directions via the deck's FR/EN toggle); every other type is a
 * prompt-front card: the front shows `prompt`, the back shows `fr` with `en`
 * and `notes` behind it.
 *
 * SHIPPED STRING VALUES like DRILL_KINDS: append only, never rename. An absent
 * `Item.cardType` means 'vocab' — every item authored before the field existed
 * is a vocab pair, and that default is what keeps the shipped seed valid.
 */
export const CARD_TYPES = ['vocab', 'gapfill', 'conjugation', 'error', 'grammar', 'register'] as const;
export type CardType = (typeof CARD_TYPES)[number];

/** The exam formats we author toward. Canada-first launch set only — no bare
 *  'tef'/'tcf'/'delf' and no 'dalf': each value is a specific paper a
 *  candidate actually sits, because "TEF" alone is not one exam (TEF Canada
 *  and TEF Naturalisation differ in sections and marking). */
export const EXAM_FORMATS = ['delf_b2', 'tef_canada', 'tcf_canada'] as const;
export type ExamFormat = (typeof EXAM_FORMATS)[number];

/** The task types an exam paper is built from — finer-grained than EXAM_SKILLS
 *  because one skill can be tested by more than one task shape (PO has a
 *  monologue and an interaction task; PE has a short and an essay task). See
 *  examTaskSkill() for the taskType → skill mapping, and the note on
 *  EXAM_SKILLS for why the two lists are not collapsed into one. */
export const EXAM_TASK_TYPES = ['co_mcq', 'ce_mcq', 'po_monologue', 'po_interaction', 'pe_short', 'pe_essay'] as const;
export type ExamTaskType = (typeof EXAM_TASK_TYPES)[number];

/** taskType → skill. The single place this correspondence is encoded — every
 *  other place that needs a task's skill (SRS decomposition, due-skill
 *  grouping, remediation lookup) calls this instead of re-deriving it. */
export function examTaskSkill(taskType: ExamTaskType): ExamSkill {
  switch (taskType) {
    case 'co_mcq':
      return 'CO';
    case 'ce_mcq':
      return 'CE';
    case 'po_monologue':
    case 'po_interaction':
      return 'PO';
    case 'pe_short':
    case 'pe_essay':
      return 'PE';
  }
}

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
  // Rich course sections (first used by the Sons alphabet rebuild). SHIPPED
  // STRING VALUES like DRILL_KINDS: append only, never rename.
  'letterGrid',
  'cardDeck',
  'tapTable',
  'vocabThemes',
  'flashcards',
  'roundup',
  // Mission-journey sections (Sons v2 rebuild) — same append-only rule.
  'story',
  'goals',
  'soundGrid',
  'groupDrill',
  'trapDrill',
  'pronunciationLab',
  'dictation',
  'scenario',
  'listening',
  'reading',
  'reviewDeck',
  'progressCheck',
  // Lesson Architecture v2 sections (first used by sons.06.l1, Les lettres
  // muettes) — same append-only rule as everything above.
  //
  // 'scene' is NOT a rename of 'story'. `story` renders a fixed array of
  // bubbles together, which is a screenplay on a screen; `scene` walks beats
  // one at a time and can interrupt itself with a full-screen `break` at the
  // moment the learner's instinct fails. Both ship: the six lessons already
  // using `story` keep working untouched.
  //
  // 'inhibitionDrill' is NOT pronunciationLab. The lab teaches a mouth
  // position for a sound you are making. There is no mouth position for a
  // sound you are NOT making, so a silent-letter lesson needs the inverse:
  // training the STOP, which is a physical reflex drill, not articulation.
  'scene',
  'inhibitionDrill',
] as const;
export type SectionType = (typeof SECTION_TYPES)[number];

/* ─── Lesson Architecture v2: render, layer, size ─────────────────────────── */

// The three display axes the v2 architecture adds. All three are OPTIONAL on
// every section: a lesson authored before they existed renders exactly as it
// did, and the density validator only enforces its rules on lessons that opt
// in (see density.logic.ts / isV2Lesson). That is what lets the new model land
// without migrating the six shipped lessons in the same change.

/** How a section's content reaches the screen. `screens` walks one card at a
 *  time, `deck` is a swipeable stack, `sheet` sends it to a reference sheet
 *  where density rules are deliberately relaxed. */
export const RENDER_MODES = ['screens', 'deck', 'sheet'] as const;
export type RenderMode = (typeof RENDER_MODES)[number];

/** How deep in the lesson a section sits. `core` is the flow every learner
 *  walks and is density-capped; `more` is optional depth; `deep` is reference
 *  material, scrollable, and the one place tables are allowed.
 *
 *  ── `more` DOES NOT HIDE A SECTION. MEASURED 2026-08-16. ──
 *
 *  `layer` has exactly three consumers in the product and none of them draws
 *  anything: `isDeep` in density.logic.ts (the word-cap exemption), the same
 *  validator, and the enum check below. **Zero components read it and zero app
 *  routes read it.** There is no `=== 'more'` anywhere in render code.
 *
 *  So a `more` section renders EXACTLY like a `core` one: numbered in the
 *  mission rail, counted in the lesson's mission total, tappable and
 *  completable. Confirmed on a Pixel 6 before it was confirmed by grep, on
 *  a2.28.l1's two `more` sections inside a header reading "24 missions".
 *
 *  What `more` DOES do is opt the section out of the `core-words` and
 *  `core-list-items` density caps, because `isDeep` is false but the
 *  `layer === 'core'` test that gates those rules is also false. That is the
 *  whole of its effect: **it relaxes the density budget on a section the
 *  learner still walks.** That is close to the opposite of what an author
 *  reading "optional depth" expects, and seven shipped sections were authored
 *  on the expectation.
 *
 *  Use `render: 'sheet'` plus a `sheetId` if you want a section genuinely off
 *  the main path. `layer-is-not-read.test.ts` pins the seven so a new one is a
 *  deliberate decision rather than an assumption. */
export const LAYERS = ['core', 'more', 'deep'] as const;
export type Layer = (typeof LAYERS)[number];

/** The card size scale. `xl` is one French word at display size and carries
 *  roughly a third of a lesson; `lg` is a rule or a contrast; `md` is prose. */
export const CARD_SIZES = ['xl', 'lg', 'md'] as const;
export type CardSize = (typeof CARD_SIZES)[number];

export const CONTENT_STATUSES = ['draft', 'in_review', 'published', 'archived'] as const;
export type ContentStatus = (typeof CONTENT_STATUSES)[number];

/* ─── Identity ───────────────────────────────────────────────────────────── */

// IDs are public, stable and immutable. They survive regeneration: an item may
// be rewritten, retranslated or re-recorded, but its id must not change, or
// every attempt logged against it and every SRS interval built on it is orphaned.
//
//   item    fr.<level>.<theme>.<seq>   fr.a1.cafe.001
//   unit    <level>.<nn>               sons.03   b1.01
//   lesson  <unitId>.l<seq>            sons.03.l1

/**
 * The band alternation every content id regex is built from, DERIVED from LEVELS
 * rather than written out.
 *
 * Hand-maintained copies of this list had already drifted: the item and scenario
 * regexes accepted all seven bands while the unit and lesson regexes silently
 * capped at (sons|a1|a2). Nothing caught it, because each regex looked correct on
 * its own. Deriving means dropping 'c2' from LEVELS drops it from all four ids at
 * once, and a future band cannot be half-added.
 *
 * `new RegExp` rather than a literal is not a runtime import — the constraint at
 * the top of this file is about modules, and RegExp is a language builtin.
 */
const BANDS_RE = LEVELS.join('|');

/** Compare two pieces of content for SAMENESS rather than for byte equality:
 *  object keys sorted recursively, array order preserved because array order is
 *  content (mission 3 is not mission 5).
 *
 *  ── Why this exists (2026-08-09) ───────────────────────────────────────────
 *  A lesson body has two homes, the authored source in ealch-admin and the copy
 *  in seed.json, and several tests assert they agree. They did it with
 *  `JSON.stringify(a) === JSON.stringify(b)`, which is byte equality, and byte
 *  equality includes KEY ORDER.
 *
 *  Key order depends on how the seed was last written. `merge-*-into-seed.ts`
 *  writes the authored object and preserves the author's field order;
 *  `content:publish` rewrites the seed from Postgres, and jsonb round-trips
 *  keys in its own order. So those tests passed only in the window between a
 *  merge and the next publish. Publishing v20 reordered 39 of 42 lessons with
 *  ZERO content change and turned four of them red at once.
 *
 *  Sorting the keys keeps the guarantee that matters — the two copies teach the
 *  same lesson — and drops a serialization detail no learner can observe. The
 *  same trap caught check-seed-db-parity.ts first, where a naive stringify
 *  reported 10 false positives out of 16 lessons; that script now imports this. */
export function canonicalJson(v: unknown): string {
  const canon = (x: unknown): unknown => {
    if (Array.isArray(x)) return x.map(canon);
    if (x && typeof x === 'object') {
      return Object.fromEntries(
        Object.keys(x as Record<string, unknown>).sort().map((k) => [k, canon((x as Record<string, unknown>)[k])]),
      );
    }
    return x;
  };
  return JSON.stringify(canon(v));
}

export const ITEM_ID_RE = new RegExp(`^fr\\.(${BANDS_RE})\\.[a-z0-9-]+\\.\\d{3,}$`);
export const UNIT_ID_RE = new RegExp(`^(${BANDS_RE})\\.\\d{2}$`);
export const LESSON_ID_RE = new RegExp(`^(${BANDS_RE})\\.\\d{2}\\.l\\d+$`);
/** Scenario ids: sc.<level>.<theme>.<seq>   sc.a1.marche.001 */
export const SCENARIO_ID_RE = new RegExp(`^sc\\.(${BANDS_RE})\\.[a-z0-9-]+\\.\\d{3,}$`);
/** Themes group the corpus for batch review and for themed drills. */
export const THEME_RE = /^[a-z0-9-]+$/;
/** Storage-relative asset paths (imageRef): lowercase segments, no leading
 *  slash, no '..' — this string becomes part of a URL the app fetches, so the
 *  shape is validated even before an asset manifest can prove it resolves. */
export const IMAGE_REF_RE = /^(?!\/)(?!.*\.\.)[a-z0-9][a-z0-9/_.-]*$/;

export function itemId(level: Level, theme: string, seq: number): string {
  return `fr.${level}.${theme}.${String(seq).padStart(3, '0')}`;
}
/** Units are keyed by LEVEL, not Track — a b1 unit is a legal unit that no Den
 *  column shows. Existing 'sons.03' / 'a1.04' ids are unchanged by this, which
 *  is why lifting the cap needed no data migration. */
export function unitId(level: Level, seq: number): string {
  return `${level}.${String(seq).padStart(2, '0')}`;
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
/**
 * The band a unit or lesson belongs to, read off its id: 'b1.01' → 'b1'.
 *
 * Prefer this to `Unit.track` and `Unit.level`. The id is the only field that
 * cannot be absent or disagree — `track` is undefined for anything past a2, and
 * `level` is optional for back-compat with units authored before it existed.
 * Returns null for an id that is not a unit or lesson id, so a caller cannot
 * mistake a parse failure for a real band.
 */
export function unitBand(id: string): Level | null {
  const band = id.split('.')[0];
  return (LEVELS as readonly string[]).includes(band) ? (band as Level) : null;
}

/* ─── Audio ──────────────────────────────────────────────────────────────── */

/**
 * One spoken span inside a rendered audio file: what is said, and exactly when.
 *
 * `audioRef` alone can only do one thing — play the file from the top. It cannot
 * highlight the line being spoken, replay one sentence, or let a learner scrub
 * to the bit they did not catch, because nothing knows where anything is. That
 * is the difference between an audio LESSON and an audio file.
 *
 * Times are integer milliseconds from the START OF THE FILE, not from the
 * previous segment. Relative offsets accumulate error and mean a mid-file edit
 * silently shifts everything after it.
 */
export type AudioSegment = {
  /** Which block of the lesson this span voices. The join back to the text. */
  blockId: string;
  startMs: number;
  /** Exclusive. Must be > startMs — a zero-length span is not a span. */
  endMs: number;
  /** The words actually spoken here, so a segment is checkable against the
   *  script without re-listening to the file. */
  text: string;
};

/**
 * The media cache key convention: `hash(script + voice + provider + renderVersion)`.
 *
 * All four, and not just the script. Same words in a different voice, from a
 * different provider, or through a changed render pipeline is a DIFFERENT audio
 * file — key on the script alone and a voice change serves the old recording
 * from cache forever. Include renderVersion and re-rendering everything is a
 * constant bump instead of a cache purge nobody can verify ran.
 */
export type AssetKeyed = {
  assetKey?: string;
};

function validateSegments(v: unknown, path: string): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (!isArr(v)) return [{ path, message: 'segments must be an array' }];

  let prevEnd = -1;
  v.forEach((s, i) => {
    if (typeof s !== 'object' || s === null) {
      push(`segments[${i}] is not an object`);
      return;
    }
    const seg = s as Partial<AudioSegment>;
    if (!isStr(seg.blockId)) push(`segments[${i}].blockId is required`);
    if (!isStr(seg.text)) push(`segments[${i}].text is required`);

    const okStart = typeof seg.startMs === 'number' && Number.isInteger(seg.startMs) && seg.startMs >= 0;
    const okEnd = typeof seg.endMs === 'number' && Number.isInteger(seg.endMs) && seg.endMs >= 0;
    if (!okStart) push(`segments[${i}].startMs must be an integer >= 0 (ms from the start of the file)`);
    if (!okEnd) push(`segments[${i}].endMs must be an integer >= 0`);

    if (okStart && okEnd) {
      // A zero-length or reversed span highlights nothing and seeks nowhere. It
      // does not throw — the UI just never lights up, on one line, sometimes.
      if (seg.endMs! <= seg.startMs!) {
        push(`segments[${i}] ends at ${seg.endMs} but starts at ${seg.startMs} — a span must have duration`);
      }
      // Ordered and non-overlapping, checked together because they are the same
      // property: at any moment exactly one segment is speaking. Overlap makes
      // "which line is playing now?" ambiguous, and a player answering it with
      // find() silently picks whichever was authored first.
      if (seg.startMs! < prevEnd) {
        push(`segments[${i}] starts at ${seg.startMs} but segments[${i - 1}] runs to ${prevEnd} — segments must not overlap`);
      }
      prevEnd = Math.max(prevEnd, seg.endMs!);
    }
  });

  return out;
}

/* ─── Provenance ─────────────────────────────────────────────────────────── */

/**
 * Where a piece of content came from. Once content is LLM-generated, "which
 * model wrote this, against which prompt, and who signed it off" stops being
 * paperwork and becomes the only way to answer the question that matters after
 * a bad batch ships: what else did that model, on that prompt version, write?
 * Without it the answer is "re-read everything".
 *
 * Every field is optional because provenance is a claim about history, and
 * hand-written content from before any of this existed has no history to claim.
 * An absent provenance means unknown — it must never be read as "human".
 */
export type Provenance = {
  model?: string;
  promptVersion?: string;
  generatedBy?: 'human' | 'llm';
  /** Admin id of the human who approved it. Absent means nobody has. */
  reviewedBy?: string;
  /** The pedagogical sources backing this content. The brief requires lessons
   *  drawn from established French teaching with sources supporting them; this
   *  is where that claim is recorded and made auditable. */
  sourceRefs?: string[];
};

function validateProvenance(v: unknown, path: string): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null || isArr(v)) return [{ path, message: 'provenance must be an object' }];
  const p = v as Partial<Provenance>;

  // Type-when-present only: every field is optional, and an absent one means
  // "unknown", not "invalid".
  for (const k of ['model', 'promptVersion', 'reviewedBy'] as const) {
    if (p[k] !== undefined && !isStr(p[k])) push(`provenance.${k} must be a non-empty string when present`);
  }
  if (p.generatedBy !== undefined && p.generatedBy !== 'human' && p.generatedBy !== 'llm') {
    push("provenance.generatedBy must be 'human' or 'llm'");
  }
  if (p.sourceRefs !== undefined) {
    if (!isArr(p.sourceRefs)) push('provenance.sourceRefs must be an array');
    else if (p.sourceRefs.some((s) => !isStr(s))) push('provenance.sourceRefs must all be non-empty strings');
  }
  return out;
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
  /** English-friendly pronunciation respelling of `fr`, shown on the card
   *  FRONT under the IPA ("bonjour" → "bohn-ZHOOR"). House style: hyphenated
   *  syllables, final (stressed) syllable in capitals, French u written ü,
   *  nasals as ohn/ahn/an. Authored for short entries (up to ~3 words);
   *  absence just means the line does not render. */
  respell?: string;
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
  /** Storage-relative path to this item's picture (CF-24), e.g.
   *  'images/objets/cafe.webp' under the public content bucket. This is what
   *  uncaps Voice Flash past the five derivable icons: the renderer resolves
   *  imageRef first, falls back to the built-in glyph set, then a generic icon.
   *  Optional and null-able like audioRef — most items have no picture, and
   *  that is not an error. Once the snapshot carries an asset manifest, publish
   *  fails a dangling imageRef the same way it fails a dangling itemId. */
  imageRef?: string | null;
  /** Where the words are inside `audioRef`. Absent means the file can only be
   *  played from the top — see AudioSegment. */
  segments?: AudioSegment[];
  /** hash(script+voice+provider+renderVersion) — see AssetKeyed. */
  assetKey?: string;
  version: number;

  // ── The exam/SRS spine. All optional TODAY, required LATER. ──
  //
  // Every field below will carry real data and none of it is backfilled yet.
  // They are optional because the corpus already on people's phones does not
  // have them, and a required field would mean the shipped seed stops
  // validating — see seed.backcompat.test.ts. The Master Build makes `skill` and
  // `modality` required once a publish has backfilled them; until then the
  // validators check TYPE-WHEN-PRESENT only, and absence is not an error.

  /** The exam taxonomy: CO/CE/PO/PE. Not the lesson-practice PracticeSkill —
   *  see the mapping note on EXAM_SKILLS. */
  skill?: ExamSkill;
  register?: Register;
  /** The can-do this item serves, in the learner's words. */
  canDo?: string;
  /** Grammar this item exercises: 'passe-compose', 'subjonctif-present'. */
  grammarPoints?: string[];
  /** Deterministic French gate target (Phase 2.D): the specific conjugated
   *  form `fr` is claimed to open with. Checked against a real conjugator
   *  (verbecc) in the publish pipeline — `fr` must START WITH one of the
   *  forms it produces for (infinitive, mood, tense, person, number), so a
   *  typo'd or plain wrong conjugation fails publish instead of shipping.
   *  Optional, like the rest of the exam/SRS spine above: absence is not an
   *  error, it just means this item isn't gated on conjugation correctness. */
  verbCheck?: {
    /** The infinitive the conjugator looks up, e.g. 'parler'. */
    infinitive: string;
    /** The conjugator's own tense key, e.g. 'présent', 'passé composé'. */
    tense: string;
    /** The conjugator's own mood key. Defaults to 'indicatif' when absent —
     *  every item authored so far tests the indicative. */
    mood?: string;
    person: '1' | '2' | '3';
    number: 's' | 'p';
  };
  /** How this item is exercised. The SRS keys on (itemId, modality), never on
   *  itemId alone — recognising and producing are different memories. */
  modality?: Modality;
  /** Which themed-flashcard deck type this card belongs to. Absent means
   *  'vocab' — the plain fr/en pair every pre-existing item already is. */
  cardType?: CardType;
  /** The card FRONT for non-vocab card types: the gapped sentence, the
   *  verb + tense + pronoun cue, the erroneous sentence, the rule trigger, or
   *  the register cue. `fr` stays the canonical French answer (and what TTS
   *  speaks); `en` glosses it; `notes` carries the why. Required whenever
   *  cardType is present and not 'vocab' — see validateItem. */
  prompt?: string;
  provenance?: Provenance;
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

/**
 * Fields every section MAY carry, regardless of type.
 *
 * `say` is the card's narration script: English scaffolding the reader speaks
 * aloud (device TTS, en-US) when the learner lands on the card. It is a spoken
 * PERFORMANCE of the card, not a copy of its text, so it is authored separately.
 * `imageRef` names a bundled illustration (resolved by the app's lesson image
 * map, IMAGE_REF_RE shape). Both optional: absence means a silent, text-only
 * card, which every lesson shipped before these fields existed already is.
 */
/** `audioRef` is the pre-rendered clip for `say` (Phase 7's render-once
 *  pipeline — see AUDIO-RENDER-SPEC.md); null/absent falls back to live TTS. */
export type SectionExtras = {
  /** The card's narration script. A bare string is the shipped form and stays
   *  valid forever; the object form adds the v2 architecture's voice and
   *  timing, where `onFirstVisitOnly` stops a line repeating on every review.
   *  Read it through `narrationOf()` rather than switching on the type at each
   *  call site. */
  say?: string | SectionNarration;
  imageRef?: string;
  audioRef?: string | null;
  /** French sub-line under the mission row's English title on the missions
   *  page (den overview flow). Display copy only; hidden when absent. */
  frSub?: string;

  // ── Lesson Architecture v2 (all optional; absence = today's behaviour) ──

  /** A stable handle for this section, e.g. 's05-families'. The shipped
   *  lessons key sections by array index and object identity, which is fine
   *  until something needs to POINT at one: a quiz question's `ref`, an act's
   *  section list, a rest point. Those are ids, and an index would silently
   *  retarget the moment a section is inserted. */
  id?: string;
  render?: RenderMode;
  layer?: Layer;
  /** The default card size for this section. Individual cards may still
   *  differ; this is what the renderer falls back to. */
  size?: CardSize;
  /** The reference sheet this section's full content lives in, when the flow
   *  shows only a preview of it. Resolves against Lesson.sheets. */
  sheetId?: string;
  /** How many items of a `sheet`-rendered section appear in the flow preview.
   *  Ignored unless render is 'sheet'. */
  previewCount?: number;
  /** Glossary keys this section surfaces as tappable term chips.
   *
   *  The lesson's jargon is defined ONCE (see the lesson's `terms`) and
   *  surfaced wherever it is used, so a learner meets the same explanation at
   *  every point of use without any card carrying the definition inline. This
   *  is what lets a term be explained repeatedly without repeating it. */
  terms?: string[];
  /** Render this section's items one at a time in a swipeable deck rather
   *  than stacked on one screen. For missions whose content is a SEQUENCE of
   *  equal things (steps, words, cards) — stacking those turns "one idea per
   *  screen" into "nine ideas per scroll". */
  swipe?: boolean;
  /** Open this section's questions in a modal, one at a time, rather than
   *  listing them under the content they ask about. */
  questionsInModal?: boolean;
  /** `listening` only: hide the passage until the learner has answered.
   *
   *  `ListeningView` renders every line's `fr` and `en` beside its PlayDot, so
   *  every listening section in the product has been answerable by READING.
   *  That is fine for a section whose questions are about the words, and it
   *  quietly voids one whose questions are about what the ear caught. The A2
   *  situations band (seq 24-31) weights hard toward reception and is the first
   *  content that needs the distinction.
   *
   *  When true the line card keeps its box and its PlayDot and replaces the
   *  text with a neutral placeholder. Once every question is answered the lines
   *  REVEAL — the reveal is not gated on getting them right, because the point
   *  is to let the learner check what they heard, not to withhold it as a
   *  prize.
   *
   *  This is the same idea as `questionsInModal`, in the same grammatical
   *  shape, on the same section type: that one stops the learner reading the
   *  QUESTIONS early, this one stops them reading the PASSAGE. Absent means
   *  today's behaviour, so all 63 shipped listening sections are unchanged. */
  hideLines?: boolean;
  /** How this section sounds: which recording it wants, at what speeds, and
   *  whether the audio leads the text.
   *
   *  Distinct from `audioRef`, which is the pre-rendered clip for the card's
   *  narration. This is the FRENCH audio: the word, the passage, the model
   *  reading. Absent means the section falls back to live TTS on whatever
   *  French it displays, which is the shipped behaviour everywhere. */
  audio?: SectionAudio;
};

/** A glossary entry. Defined once per lesson, surfaced anywhere via `terms`. */
export type LessonTerm = {
  term: string;
  title: string;
  body: string;
  /** Worked examples. `itemId` resolves against the corpus, so a term's
   *  examples never restate a transcription. */
  examples?: { itemId: string; note?: string }[];
};

/** The v2 narration object. One or two spoken lines, performed by the coach
 *  voice when the learner lands on the card — never a re-read of what is
 *  already on it. */
export type SectionNarration = {
  text: string;
  voice: 'coach';
  timing: 'onEnter' | 'onFirstVisitOnly';
};

/** The spoken line of a section, whichever form `say` takes. One accessor so
 *  no call site has to know both shapes exist. */
export function narrationOf(s: SectionExtras): SectionNarration | null {
  if (!s.say) return null;
  if (typeof s.say === 'string') return { text: s.say, voice: 'coach', timing: 'onEnter' };
  return s.say;
}

/** One tappable letter in a letterGrid: the glyph, its French NAME (respelled),
 *  the SOUND it makes inside words, and one example. `memo` is the memorize
 *  note the detail card closes on. */
export type GridLetter = {
  ch: string;
  name: string;
  ipa?: string;
  sound: string;
  ex: string;
  exNote?: string;
  memo?: string;

  // ── v2 additions (silent-letter grids) ──
  //
  // These extend the EXISTING letterGrid rather than adding a parallel type.
  // GridLetter already models one glyph with one verdict and one example,
  // which is structurally what a silent-letter grid needs — unlike GridSound,
  // which models one sound with MANY spellings and would be the wrong shape
  // inverted. `name` and `sound` stay required for the shipped alphabet grid;
  // a silent-letter row sets `sound` to what the letter actually produces,
  // which is often nothing.

  /** What happens to this ending: sounded, silent, or it depends. */
  verdict?: 'silent' | 'sounded' | 'conditional';
  /** The one-line reason behind the verdict. */
  rule?: string;
  /** English-friendly respelling of `ex`, in the lesson's notation. */
  respell?: string;
  /** English gloss of `ex`. */
  en?: string;
  /** Character indices into `ex` that are written and not pronounced. */
  silent?: number[];
  /** The words that break this row's rule. */
  exception?: string;
  /** Whether this row appears in the in-flow preview, or only in the full
   *  reference sheet. Absent counts as false: the sheet holds everything, the
   *  flow holds what was chosen. */
  preview?: boolean;
};

/* ─── Scene: the sequential story player (v2 missions 1 and 13) ───────────── */

/** One beat of a scene. The learner advances beat by beat, so each is its own
 *  screen rather than a line in a transcript. */
export type SceneBeat =
  /** Narrator voice over the situation. */
  | { kind: 'narration'; text: string; size?: CardSize; audio?: SectionAudio }
  /** One line of dialogue. `reveal: 'tap'` waits for the learner. */
  | {
      kind: 'bubble';
      from: 'them' | 'you' | 'coach';
      speaker?: string;
      fr: string;
      en: string;
      ipa?: string;
      respell?: string;
      /** Stage direction shown under the bubble, e.g. "She leans in." */
      stage?: string;
      reveal?: 'tap' | 'auto';
      size?: CardSize;
      audio?: SectionAudio;
    }
  /** The commitment beat: the learner picks before being corrected. Both
   *  options must be plausible, and exactly one carries the failing instinct. */
  | {
      kind: 'choice';
      prompt: string;
      size?: CardSize;
      options: { fr: string; respell?: string; en: string; outcome: 'works' | 'breaks'; audio?: SectionAudio }[];
      /** What the coach says after each outcome. Both are required, because
       *  the break plays either way — see the note on `break` below. */
      followUp?: { works: string; breaks: string };
    }
  /** The full-screen interrupt. The conversation stops and the wrong reading
   *  sits against the right one in large type.
   *
   *  This plays whether the learner chose correctly or not. On a correct
   *  choice it is framed as "that is right, and here is what the other option
   *  would have done to you". The break is the teaching, not a penalty for
   *  guessing wrong, and skipping it for a lucky guess would remove the one
   *  screen the whole scene exists to deliver. */
  | {
      kind: 'break';
      heading: string;
      body: string;
      wrong: { fr: string; ipa: string; respell?: string; en: string };
      right: { fr: string; ipa: string; respell?: string; en: string };
      coach?: string;
      size?: CardSize;
      audio?: SectionAudio;
    }
  /** The closing beat: what the scene proved. */
  | { kind: 'resolve'; text: string; size?: CardSize };

/** Where a scene happens. Rendered as the establishing card. */
export type SceneSetting = {
  place: string;
  city?: string;
  time?: string;
  image?: string;
  /** Looping room tone. Off by default: atmospheric once, grating by the
   *  fourth replay. */
  ambience?: string;
};

/* ─── Inhibition drill: training the stop ─────────────────────────────────── */

/** One physical routine for suppressing a sound the reading reflex has already
 *  queued. `practiceOn` names corpus items, so the words are never restated. */
export type InhibitionTarget = {
  label: string;
  sub?: string;
  steps: string[];
  practiceOn: string[];
  /** Whether this target captures and scores the learner's voice. */
  mic?: boolean;
  audio?: SectionAudio;
};

/* ─── Audio spec ──────────────────────────────────────────────────────────── */

/** How one card sounds. `mode` distinguishes what the app must DO, which is
 *  the distinction the audio service already makes: a `recordingId` resolves
 *  to a real clip when the studio has delivered one and falls back to TTS
 *  until then, exactly like `Item.audioRef`. */
export type SectionAudio = {
  mode: 'tts' | 'recorded' | 'mic' | 'none';
  lang?: string;
  /** Playback rates offered, e.g. [1, 0.65]. The slow one is long-press. */
  speeds?: number[];
  /** Names an entry in Lesson.audio.recorded. Unresolved ids play as TTS. */
  recordingId?: string;
  /** Which segment of a multi-word recording this card wants. */
  clip?: string;
  voice?: string;
  autoplay?: boolean;
  /** Contrast cards play the audio BEFORE the text resolves, so the ear
   *  answers the question rather than the eye. */
  audioFirst?: boolean;
  /** Dictation caps replays, then unlocks the answer. */
  maxPlays?: number;
  modelPlayback?: boolean;
  wrongThenRight?: boolean;
  perSentenceReplay?: boolean;
  scoreOn?: string;
};

/** One card in a nested swipeable deck. Every field optional except that a
 *  card must say SOMETHING (head, fr or body) — see validateSection. `label`
 *  is the eyebrow, `fr` the big French line (tap to hear), `sub` the
 *  respelling/gloss under it, `body` the teaching text. */
export type DeckCard = {
  label?: string;
  head?: string;
  fr?: string;
  sub?: string;
  body?: string;
  imageRef?: string;
};

/** One row of a tapTable: the visible cells, plus the detail card a tap opens.
 *  `say` is what the row speaks (French, fr-FR) when tapped or from the detail. */
export type TapRow = {
  cells: string[];
  say?: string;
  detail?: { title: string; body: string; say?: string };
};

export type VocabTheme = {
  title: string;
  imageRef?: string;
  cards: { fr: string; sub?: string; en: string }[];
};

/* ─── Mission-journey section support types (Sons v2 rebuild) ───────────────
 *
 * The types below back the 'story' | 'goals' | 'soundGrid' | 'groupDrill' |
 * 'trapDrill' | 'pronunciationLab' | 'dictation' | 'scenario' | 'listening' |
 * 'reading' | 'reviewDeck' | 'progressCheck' section variants — the mission
 * screens a lesson's pager walks one at a time, replacing the old flat scroll.
 * They deliberately reuse existing shapes (ScenarioTurn, the flashcards card
 * shape) where one already fits, rather than inventing a parallel one. */

/** One tappable sound family in a soundGrid: unlike GridLetter (one glyph),
 *  a SOUND can have several spellings — 'in, im, ain, aim, ein' all → [ɛ̃] —
 *  so `graphemes` is a list, not a single char. `anchor` is the one word a
 *  learner should measure every new word's sound against ("rhymes with
 *  temps?"). `trap` marks a sound the anti-rule/trap-drill section revisits. */
export type GridSound = {
  graphemes: string[];
  ipa: string;
  anchor: string;
  sound: string;
  ex: string;
  exNote?: string;
  trap?: boolean;
  memo?: string;
};

/** One chunk of a groupDrill: a labelled slice of the sound/letter set
 *  (e.g. "A–F"), its items, and the one quick check that gates moving on. */
export type SoundGroup = {
  label: string;
  /** The words worked in this group.
   *
   *  `fr`, `ipa` and `note` are the shipped shape. The rest are v2 additions
   *  for a groupDrill rendering at XL: `itemId` joins the word to the corpus
   *  (so the drill can score against a real item), `respell`, `en` and
   *  `silent` are the XL card's other lines, and `pair` marks a card that
   *  deliberately shows a contrast pair rather than one unit — without it the
   *  xl-single-unit density rule refuses "grand · grande". All optional:
   *  absence is exactly today's behaviour.
   *
   *  The ARRAY is optional too, because a control-page group has a label and a
   *  check and no words at all — that is what a control page is. 233 of the
   *  238 groups in the seed carry it and five do not (sons.09's four checks and
   *  sons.07's "Contrôle"), and the renderer reads `g.items?.length ?? 0`, so
   *  both shapes have always worked. The type said otherwise and produced five
   *  of the twenty standing tsc errors.
   *
   *  The house pattern is still an explicit `items: []` on a control page —
   *  a1-23-nourriture.test.ts pins it for that lesson — and those five are the
   *  outliers rather than the model. They are left alone here because changing
   *  them means re-running two batches and publishing a snapshot to move a key
   *  that no learner can observe. */
  items?: {
    fr: string;
    ipa?: string;
    note?: string;
    itemId?: string;
    respell?: string;
    en?: string;
    silent?: number[];
    pair?: boolean;
  }[];
  /** The one question that gates moving on.
   *
   *  OPTIONAL since sons.06 split its XL drill across missions: at that size
   *  the words and their check are separate pages, so a group carries EITHER
   *  items (a pure word deck) OR a check (a pure control page). A group with
   *  both is the original stacked shape, which every non-xl drill still uses
   *  and which renders exactly as before. */
  check?: {
    q: string;
    opts: string[];
    correct: number;
    /** What the answer TEACHES, shown once the learner has picked.
     *
     *  A control that only recolours two rows tells someone they were wrong
     *  without telling them why, which is the moment the rule was most likely
     *  to land. Optional, so the drills that shipped without it are unchanged.
     */
    why?: string;
  };
};

/** One flip card in a trapDrill: front is the English-reflex trap, back is
 *  the correct French target with the tip that breaks the reflex. */
export type TrapCard = {
  promptLabel: string;
  promptSound: string;
  fr: string;
  ipa: string;
  tip: string;
};

/** What a single trapDrill step puts on screen.
 *
 *  A trapDrill carries three different jobs — meet the trap, hear the trap,
 *  prove you beat it — and stacking all three made the cards a column and left
 *  the drill permanently below the fold. These are the three, named. */
export const TRAP_STEP_KINDS = ['rule', 'cards', 'audio', 'drill'] as const;
export type TrapStepKind = (typeof TRAP_STEP_KINDS)[number];

/** One step of a stepped trapDrill: mission 14.1, 14.2, 14.3.
 *
 *  Steps do NOT carry their own content. They name a slice of the content the
 *  section already declares (`cards`, `audio`, `drill`), so a stepped drill and
 *  a stacked one are the same authored data shown two ways. That is what keeps
 *  `steps` optional and the four shipped trapDrills valid untouched.
 *
 *  `gate` on a drill step holds the learner until every question is answered.
 *  Reserved for the check a lesson actually wants to be a gate: a reflex the
 *  learner can swipe past is not a reflex that was tested. */
export type TrapStep = {
  label: string;
  kind: TrapStepKind;
  /** Overrides the section title while this step is on screen. */
  title?: string;
  /** Answer every question before the pager will advance. `drill` only. */
  gate?: boolean;
};

/** One sound worked in a pronunciationLab: coaching steps plus the real
 *  corpus items `stt.listen()` scores the learner's attempt against. */
export type LabSound = {
  label: string;
  ipa: string;
  sub: string;
  steps: string[];
  itemIds: string[];
};

/* ─── Quiz ────────────────────────────────────────────────────────────────── */

/** How a question is answered. `mcq` is the shipped default and stays the
 *  assumption when `format` is absent, so every existing question is a valid
 *  QuizQuestion unchanged. */
export const QUIZ_FORMATS = ['mcq', 'tapSilent', 'listenChoose', 'typeIn', 'speak', 'errorSpot'] as const;
export type QuizFormat = (typeof QUIZ_FORMATS)[number];

/** One question.
 *
 *  `opts` + `correct` is the closed form (mcq, listenChoose). `accept` is the
 *  open form (typeIn, errorSpot, speak): a list of answers counted right,
 *  because there is more than one way to type an IPA string or respell a word.
 *  `tapSilent` carries `word` plus the letters to tap in `correct`.
 *
 *  `why` and `ref` are what make a wrong answer teach instead of just scoring:
 *  `why` is the one-line explanation, `ref` names the section to jump back to.
 *  Both optional here for backward compatibility with the shipped quizzes; the
 *  density validator REQUIRES both on any v2 lesson. */
export type QuizQuestion = {
  q: string;
  format?: QuizFormat;
  opts?: string[];
  /** Index into `opts` for closed formats; the target string for tapSilent. */
  correct?: number | string;
  /** Accepted answers for open formats, compared case- and accent-folded. */
  accept?: string[];
  /** The canonical answer shown after an open-format attempt. */
  answer?: string;
  /** tapSilent: the word whose silent letters are tapped. */
  word?: string;
  /** speak: what the learner says, and the segment scored. */
  target?: string;
  ipa?: string;
  scoreSegment?: string;
  audio?: SectionAudio;
  /** listenChoose: the line the learner HEARS, when it is not one of the
   *  options.
   *
   *  Without it ListenChooseCard falls back to speaking `opts[correct]`, which
   *  is wrong twice over: on an English-option question it speaks English at a
   *  French listening exercise, and on any question it speaks the answer. a1.25
   *  authored this field for two questions and shipped in v22 with neither
   *  rendered — "Listen. Is this sentence about a habit?" played the words
   *  "A habit" and nothing else. Added to the type and to the card together, so
   *  the fallback is now only for questions that genuinely test an option. */
  say?: string;
  /** errorSpot / typeIn: the text the learner is working ON, shown above the
   *  input.
   *
   *  `q` is the instruction ("write it out corrected"); this is the thing to
   *  correct. a1.16 authored two questions whose phrase lived only here, and
   *  ErrorSpotCard rendered `q` alone — so the learner was asked to fix a
   *  phrase that never appeared on screen. Unanswerable, and shipped. */
  prompt?: string;
  why?: string;
  /** Section id this question tests, for the "see this again" jump. */
  ref?: string;
};

/** Eight questions on one rule, tied to the error triggers it detects. */
export type QuizRound = {
  id: string;
  label: string;
  /** Error trigger ids this round scores against. */
  targets?: string[];
  say?: string | SectionNarration;
  questions: QuizQuestion[];
};

/** Every question in a quiz, whichever shape it uses. The renderer and the
 *  validators both go through this rather than checking for `rounds` twice. */
export function quizQuestions(s: { questions?: QuizQuestion[]; rounds?: QuizRound[] }): QuizQuestion[] {
  if (s.rounds?.length) return s.rounds.flatMap((r) => r.questions ?? []);
  return s.questions ?? [];
}

export type LessonSection = (
  /** Prose. The explanation itself. */
  | { type: 'teach'; title: string; body: string }
  /** Ordered procedure. For the learner who needs the ladder, not the lecture. */
  | { type: 'steps'; title: string; steps: string[] }
  | { type: 'examples'; title: string; examples: { fr: string; en: string; note?: string }[] }
  /** Where you would actually SAY this, in the world. */
  | { type: 'useCases'; title: string; cases: { situation: string; fr: string; en: string }[] }
  /** The trick a good teacher gives you. `why` stops it being folklore. */
  | { type: 'hacks'; title: string; hacks: { hack: string; why: string }[] }
  /** The thing you screenshot before the exam. Each row is a stacked card; a
   *  row with `detail` opens a tap-to-view card, exactly like a `tapTable` row. */
  | {
      type: 'cheatSheet';
      title: string;
      rows: { k: string; v: string; say?: string; detail?: { title: string; body: string; say?: string } }[];
    }
  | { type: 'commonErrors'; title: string; errors: { wrong: string; right: string; why: string }[] }
  /** What to concentrate on. Deliberately short. */
  | { type: 'focus'; title: string; points: string[] }
  /** Each row is a stacked card. `rowDetails` is index-aligned with `rows`
   *  (same index; `null`/absent = that row has no detail and stays plain) —
   *  kept parallel rather than folded into `rows` so existing `string[][]`
   *  content authored before this field existed keeps working unchanged. */
  | {
      type: 'table';
      title: string;
      cols: string[];
      rows: string[][];
      rowDetails?: ({ title: string; body: string; say?: string } | null)[];
    }
  /** Lines to hear. Device TTS today; real audio in Phase 7. `segments` maps
   *  those lines onto a rendered file so the section can highlight and seek
   *  rather than only play; `audioRef` is the file it maps onto. */
  | {
      type: 'audio';
      title: string;
      lines: string[];
      audioRef?: string | null;
      segments?: AudioSegment[];
      assetKey?: string;
    }
  /** Practice against real corpus items — this is the join between a lesson and
   *  the drills, and it is what lets a lesson exercise all four skills. */
  | { type: 'practice'; title: string; skill: PracticeSkill; itemIds: string[] }
  /** The exam.
   *
   *  Two shapes, and both stay valid. `questions` is the flat list every
   *  shipped lesson uses. `rounds` is the v2 form: the same questions grouped
   *  into blocks of eight, each block tied to one rule and one error trigger,
   *  so a learner who fails a round gets that round's drill before the next
   *  one starts instead of a single verdict at the very end. A quiz carries
   *  one or the other; `quizQuestions()` flattens either into a plain list. */
  | {
      type: 'quiz';
      title: string;
      questions?: QuizQuestion[];
      rounds?: QuizRound[];
      /** Percent needed to pass overall. */
      passMark?: number;
      adaptive?: boolean;
      /** Percent below which a ROUND fires its remediation drill. */
      roundFailThreshold?: number;
      /** Exam conditions: no explanation and no "see this again" jump as the
       *  learner answers, and the whole review is handed over on the result
       *  card instead. Rounds that also declare no `targets` fire no
       *  remediation drills, which is what makes the sitting a measurement
       *  rather than a lesson. Off everywhere but a1.30.l2. */
      exam?: boolean;
    }
  /** The full A-Z as a tappable grid; each letter opens a detail card. */
  | { type: 'letterGrid'; title: string; letters: GridLetter[] }
  /** A nested swipeable card series inside one lesson page. `hint` is the
   *  one-line instruction above the deck ("Swipe through each letter"). */
  | { type: 'cardDeck'; title: string; hint?: string; cards: DeckCard[] }
  /** A table whose rows open detail cards with audio. */
  | { type: 'tapTable'; title: string; cols: string[]; rows: TapRow[] }
  /** Themed vocabulary hub: theme cards that each open their own deck. */
  | { type: 'vocabThemes'; title: string; themes: VocabTheme[] }
  /** Flip-to-reveal flashcards embedded in the lesson. */
  | { type: 'flashcards'; title: string; cards: { front: string; back: string; say?: string }[] }
  /** The closing summary and congratulation card. */
  | { type: 'roundup'; title: string; body: string; points: string[] }

  // ── Mission-journey sections (Sons v2 rebuild) ──────────────────────────
  /** Mission 1: the real-world stakes, told as a short chat exchange the
   *  learner reads before any teaching starts. */
  | {
      type: 'story';
      title: string;
      setting: string;
      bubbles: { from: 'coach' | 'user' | 'narrator'; fr: string; en: string; warn?: string }[];
      closing: { fr: string; en: string };
    }
  /** Mission 2: the checklist of what this lesson makes true by its end. */
  | { type: 'goals'; title: string; goals: { t: string; s: string }[] }
  /** The full sound-family grid: every tappable sound, each opening a detail
   *  card. The soundGrid analogue of letterGrid for sounds with more than
   *  one spelling. */
  | { type: 'soundGrid'; title: string; sounds: GridSound[] }
  /** The set chunked into learnable groups, each ending in one quick check
   *  that gates moving to the next chunk. */
  | { type: 'groupDrill'; title: string; groups: SoundGroup[] }
  /** The English-reflex traps as flip cards, followed by a rapid-fire drill
   *  round that scores a running total.
   *
   *  `steps` walks that content one job per screen (14.1 the cards, 14.2 the
   *  audio, 14.3 the drill) instead of stacking all three. Optional, and absent
   *  means the original stacked render, so the shipped trapDrills are
   *  unaffected. See TrapStep. */
  | {
      type: 'trapDrill';
      title: string;
      cards: TrapCard[];
      drill: { promptSay: string; opts: string[]; correct: number }[];
      steps?: TrapStep[];
      /** The rule this drill tests, shown as its opening step.
       *
       *  Present so a rule and the trap that tests it can be ONE mission. In
       *  sons.06 the -er rule was its own `teach` section: 76 words on an
       *  otherwise empty screen, and the single most important exception in the
       *  lesson given the least treatment. Optional — a drill without it simply
       *  has no rule step. */
      rule?: { title: string; body: string };
    }
  /** Real speech-scored coaching: each sound gets its steps plus the corpus
   *  items `stt.listen()` grades the learner's attempt against. */
  | { type: 'pronunciationLab'; title: string; sounds: LabSound[] }
  /** Spelling-by-ear practice: `itemIds` names the words dictated; the
   *  renderer builds the letter-tile bank from each item's `fr` at runtime. */
  | { type: 'dictation'; title: string; itemIds: string[] }
  /** A lesson-local spoken scenario — same shape as the standalone corpus
   *  `Scenario.turns`, kept inline rather than referenced by id because this
   *  conversation only exists to close out this lesson's specific ground. */
  | { type: 'scenario'; title: string; setting: string; turns: ScenarioTurn[] }
  /** Lines to hear, then comprehension questions on what was heard — the
   *  listen-then-check pairing `audio` alone doesn't provide. */
  | {
      type: 'listening';
      title: string;
      lines: { fr: string; en: string }[];
      /** `why` is optional here, as on a quiz question, so a comprehension
       *  check can explain itself rather than only marking an answer. */
      questions: { q: string; opts: string[]; correct: number; why?: string }[];
    }
  /** A short passage plus optional short-answer comprehension questions.
   *
   *  `glossary` marks words inside `text` the learner can tap for a
   *  translation and a note. That is what turns a wall of French into
   *  something interrogable word by word: the passage stays uninterrupted and
   *  the explanation is one tap away rather than in a margin. */
  | {
      type: 'reading';
      title: string;
      text: string;
      questions?: { q: string; a: string }[];
      glossary?: { word: string; en: string; ipa?: string; note?: string }[];
    }
  /** A leitner-style closing review deck: again / hard / easy per card,
   *  rather than flashcards' known/again binary. */
  | { type: 'reviewDeck'; title: string; cards: { front: string; back: string; say?: string }[] }
  /** The mid-journey checkpoint: a short "here's where you stand" card
   *  before the final test, with a handful of authored stat labels. */
  | { type: 'progressCheck'; title: string; body: string; stats: { k: string; v: string }[] }

  // ── Lesson Architecture v2 sections ─────────────────────────────────────
  /** The sequential scene player: beats walked one at a time, with a choice
   *  the learner commits to and a full-screen break that teaches. Replaces
   *  `story`'s all-at-once bubble array for lessons that opt in. */
  | {
      type: 'scene';
      title: string;
      setting: SceneSetting;
      beats: SceneBeat[];
      closing?: { text: string; size?: CardSize };
    }
  /** Training the stop: physical routines for not making a sound, for the
   *  case where there is no mouth position to teach. */
  | {
      type: 'inhibitionDrill';
      title: string;
      intro?: string;
      targets: InhibitionTarget[];
      closing?: { text: string };
    }
) &
  SectionExtras;

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

  // ── The grammar spine ──
  //
  // Two lists, not one, because "what this lesson expects you to already know"
  // and "what it teaches you" are different claims and only the pair makes the
  // curriculum checkable. With both, a lesson ordering that introduces the
  // subjunctive after a lesson that assumes it is findable by a script. With
  // one, it is findable by a confused learner.
  /** Grammar the learner is expected to have already. */
  grammarAssumed?: string[];
  /** Grammar this lesson introduces for the first time. */
  grammarIntroduced?: string[];

  /** Optional capabilities the Den surfaces as depth-tiered entry points
   *  (Learn / Narrated / Practice / Roleplay). Declared, not inferred from
   *  section presence, so the Den can advertise a mode before tapping in. */
  features?: LessonFeature[];
  /** The Role Play scenario that exercises this lesson's ground, when one
   *  exists. Resolved against corpus scenarios by validateCorpus. */
  scenarioId?: string;
  /** The spoken script Camille performs for a 'narrated' lesson (Phase 7).
   *  See LessonNarration. Optional and independent of `features` — a lesson
   *  can declare the 'narrated' feature before its script is written, and a
   *  script can exist in review before the feature is turned on, which is
   *  why presence here is never inferred from `features` or vice versa. */
  narration?: LessonNarration;
  /** Which exam skill this lesson remediates, when it exists to prep one —
   *  most lessons teach vocabulary/grammar with no exam tie, so this is
   *  absent far more often than present. It is the join dueExamSkills()
   *  (progress.logic.ts) uses to turn a missed PO/PE exam skill into a real
   *  lesson deep-link, keyed on (skill, level) — see the note there on why a
   *  missing lesson is a real failure, not a silently dropped one. */
  skill?: ExamSkill;
  provenance?: Provenance;
  /** The den overview page's authored copy (spec 2026-07-30). Optional as a
   *  whole: structure (mission counts, tags, stats) is always DERIVED from
   *  `sections` — see src/content/missions.ts — and the page hides whatever
   *  copy is absent rather than inventing it. */
  overview?: {
    /** English display title, the overview headline. */
    titleEn: string;
    /** French subtitle; doubles as the missions page display title. */
    subFr?: string;
    /** French translation of `intro`. Also what "Listen to the intro" speaks. */
    introFr: string;
    /** Estimated whole minutes. */
    minutes: number;
    difficulty: 1 | 2 | 3 | 4 | 5;
    /** The overview tile, e.g. "Aa". */
    glyph?: string;
    /** Total screens in the flow, so the cover can set expectation up front
     *  rather than surprising someone twenty minutes in. */
    screens?: number;
  };

  // ── Lesson Architecture v2 ──────────────────────────────────────────────
  //
  // All optional. A lesson carrying `acts` is a v2 lesson and is subject to
  // the density validator; one without is left exactly as it was.

  /** The lesson's acts, in order. Each ends in a checkpoint that saves and
   *  offers a clean exit, which is what makes a 241-screen lesson finishable:
   *  six short journeys rather than one long one. */
  acts?: LessonAct[];
  /** The one line the lesson hangs on, e.g. "Silent unless there's a reason."
   *  The density validator checks it appears VERBATIM in at least three
   *  sections — a reframe repeated once is just a sentence. */
  reframe?: string;
  /** Mistakes worth detecting, and what to do about each. */
  errorTriggers?: ErrorTrigger[];
  /** Remediation drills, fired by an errorTrigger or a failed quiz round.
   *  Deliberately NOT in `sections`: they are not part of the spine and a
   *  learner who never trips one never sees them. */
  drills?: LessonDrill[];
  /** Reference sheets. Everything pulled out of the flow has to live
   *  somewhere findable, or it creeps back in. */
  sheets?: ReferenceSheet[];
  /** Corpus item ids released to spaced repetition, in slices, as acts
   *  complete. One entry per act, index-aligned with `acts`, so cards arrive
   *  as they are taught instead of all at once at the end.
   *
   *  Slices of `itemIds`, not a separate card-id space: the SRS keys on
   *  (itemId, modality) via srsKey(), so a parallel id would have nothing to
   *  resolve against. */
  deckTranche?: string[][];
  /** Lesson-wide audio configuration and the recordings the studio owes. */
  audio?: LessonAudio;
  /** The lesson's glossary, keyed by the ids sections name in `terms`.
   *  Defined once and surfaced at every point of use. */
  terms?: Record<string, LessonTerm>;
};

/** One act: a named stretch of the lesson ending in a checkpoint. */
export type LessonAct = {
  id: string;
  title: string;
  /** Section ids in this act, in order. */
  sections: string[];
  /** The one line shown at the checkpoint. No confetti, no streak, no badge:
   *  the reward for finishing an act is knowing where you are. */
  milestone: string;
  /** Screens in this act. Used with `restPoints` to check no stretch runs
   *  past the checkpoint-spacing limit. */
  estScreens: number;
  /** Mid-act stopping places, as 'sectionId/marker'. A save and a one-line
   *  note, without the milestone language reserved for act ends. */
  restPoints?: string[];
};

/** A mistake the lesson knows how to detect and answer. */
export type ErrorTrigger = {
  id: string;
  description: string;
  /** Section ids (and 'sectionId/path' anchors) where this is watched for. */
  detectOn: string[];
  /** The drill id fired when it trips. */
  drill: string;
  /** The check that closes the loop afterwards. */
  retest?: string;
};

/** A remediation drill. Short by design: help, not a detour. */
export type LessonDrill = {
  id: string;
  title: string;
  size?: CardSize;
  format?: QuizFormat | 'sort' | 'flashcard';
  /** Corpus items drilled, when the drill works over real words. */
  items?: string[];
  /** Contrast pairs, when it works over minimal pairs. */
  pairs?: [string, string][];
  /** Buckets for a 'sort' drill. */
  buckets?: string[];
  /** The coach line that frames the drill. */
  coach?: string;
  /** A one-question retest carries its own question inline. */
  q?: string;
  opts?: string[];
  correct?: number;
  why?: string;
  audio?: SectionAudio;
};

/** A reference sheet: layer 'deep', scrollable, and the one place in the
 *  product where tables and density are fine, because the learner arrives
 *  with a specific question. */
export type ReferenceSheet = {
  id: string;
  title: string;
  layer?: Layer;
  /** What this sheet holds, for the index. */
  contains?: string[];
  /** The sheet body. Sections here are exempt from the core density caps. */
  sections?: LessonSection[];
};

/** Lesson-wide audio configuration. */
export type LessonAudio = {
  defaultLang?: string;
  speeds?: number[];
  coachVoice?: string;
  interfaceSounds?: string[];
  ambienceDefault?: 'on' | 'off';
  /** The recordings this lesson wants from the studio. Each is referenced by
   *  `recordingId` from a card's audio spec. Until a clip is delivered the
   *  card falls back to TTS, so the lesson runs today and improves later
   *  without a content change. */
  recorded?: { id: string; desc: string; clipIds?: string[] }[];
};

/** What a lesson can offer beyond reading it. Order here is display order.
 *
 *  `assessment` is the odd one out and is deliberately here rather than in a
 *  field of its own: it declares what a lesson IS, not what it offers. It marks
 *  a lesson that tests material other lessons taught and therefore owns no
 *  corpus rows of its own — a bilan, an exam. The A1 capstone is the first.
 *
 *  It lives in this list because this is already the validated, enumerated,
 *  round-tripping slot for lesson-level flags, and a second field would have to
 *  be threaded through the schema, the validator and both copies of the content
 *  for one boolean. Nothing renders this array — `den.tsx` reads exactly one
 *  value from it, 'narrated' — so adding a member has no effect on screen.
 *
 *  The one consumer that cares is the `lesson-has-practice` publish gate, which
 *  requires every lesson to release SRS cards. That is right for a lesson that
 *  teaches and wrong for one that examines, and this flag is how the gate tells
 *  them apart. It is checked positively: the gate never infers "assessment"
 *  from missing practice, or a broken teaching lesson would exempt itself. */
export const LESSON_FEATURES = ['narrated', 'minimalPairs', 'roleplay', 'voiceflash', 'assessment'] as const;
export type LessonFeature = (typeof LESSON_FEATURES)[number];

/* ─── Narration: the Den's spoken-lesson script ──────────────────────────── */

// A Lesson is read. A NARRATED lesson is performed: Camille walks the learner
// through it stage by stage, in voice, before the learner ever touches
// `sections[]` directly. That makes narration a SCRIPT over a lesson's
// content rather than the content itself — it has its own pacing, it can
// address the learner in English scaffolding before switching to French
// mid-stage, and it carries its own checkpoints. Storing it here, now, means
// narration can be authored, reviewed, gated and shipped OTA long before
// Phase 7 (the Den's native player) exists to perform it — the same
// "cache layer first, screen wiring when a consumer needs it" sequencing this
// codebase already used for `audio_assets` and the deep-link anchor primitives.

// SCHEMA CORRECTION, 2026-07-18: an earlier pass of this file shipped a
// different narration shape (hook/teach/model/guidedPractice/checkpoint/
// freePractice/recap stages, markup-string-free structured segments with no
// voice/timing fields). That was designed without reading the locked schema
// this codebase had already settled on. The authoritative shape below is
// transcribed verbatim from `reconciliation/EALCH-MASTER-BUILD.md`, Phase 7,
// "Narration schema (additive, land the shape before authoring — HIGH note
// 25)" — the actively-maintained engineering doc that supersedes the older
// content-planning drafts (including `AUDIO-LESSON-SCRIPT-SYSTEM.md`'s own
// §7, which proposed a third, markup-string `{stage, script}` shape). The
// `[FR]…[/FR]` markup from that doc survives as the AUTHORING format a
// `parseNarration` pass compiles into the structured segments below before
// they ever reach this schema — the markup is not stored here.

/** The seven Den stages a narrated lesson walks through, in order — the same
 *  seven the Den's guided-narrated-lesson structure names elsewhere
 *  (warm-up → focus → input/story → practice → produce → check →
 *  cheat-sheet). A lesson need not author every stage yet (the same
 *  contract-required-storage-optional pattern as `Item.skill`/`modality`),
 *  but whichever ARE present must appear in this order: the player walks
 *  the array, and a narrated lesson that checks before it teaches is not a
 *  shorter lesson, it is a broken one. */
export const NARRATION_STAGES = ['warm', 'focus', 'input', 'practice', 'produce', 'check', 'cheat'] as const;
export type NarrationStageKind = (typeof NARRATION_STAGES)[number];

/** One spoken line inside a stage. `voice` picks which device/cloud voice
 *  speaks it — a stage routinely scaffolds in English before switching to
 *  French mid-explanation, so this is per-segment, not per-stage. `startMs`/
 *  `endMs` locate it inside `audioRef` once Phase 4 renders real audio;
 *  absent means device TTS speaks `text` directly. */
export type NarrationSegment = {
  voice: 'en' | 'fr';
  text: string;
  audioRef?: string | null;
  startMs?: number;
  endMs?: number;
};

/** A point where the learner acts rather than listens. `repeat` asks them to
 *  echo the preceding segment; `produce` asks for their own line; `check` is
 *  a markable comprehension question. `itemId`, when present, is what this
 *  interaction drills — resolved against corpus items by validateCorpus,
 *  exactly like a `practice` LessonSection's itemIds, because a narration
 *  stage that drills a dangling item is the same silent-blank-drill failure
 *  that rule exists to prevent. `gradeAs` is the modality `logAttempt`
 *  should record it under (Phase 5's SRS keys on (itemId, modality)). */
export type NarrationInteraction = {
  kind: 'repeat' | 'produce' | 'check';
  itemId?: string;
  /** What a correct spoken/written answer should contain, for `produce`/
   *  `check` interactions scored against a fixed expectation. */
  expected?: string;
  gradeAs?: Modality;
};

/** A stage's content is one ordered list mixing spoken segments and
 *  interactions — an interaction is not a trailing afterthought bolted onto
 *  a segment list, it can sit anywhere a stage actually pauses to ask
 *  something. Distinguished by shape: a `NarrationInteraction` always
 *  carries `kind`; a `NarrationSegment` never does. */
export type NarrationStage = {
  stage: NarrationStageKind;
  segments: (NarrationSegment | NarrationInteraction)[];
};

/** `camilleVoiceId` pins the brand voice per lesson (resolved by the Phase 4
 *  TTS Edge Function; device `expo-speech` is the offline fallback and
 *  ignores it). `ratioEnFr` records the authored English:French balance the
 *  CEFR-adaptive authoring brief targets per level (~70/30 at A1-A2, ~20/80
 *  at B1-B2, ~0/100 at C1-C2) — stored so a publish-time check can flag a
 *  script that drifted from its own level's target. */
export type LessonNarration = {
  camilleVoiceId: string;
  stages: NarrationStage[];
  ratioEnFr: number;
};

/** Distinguishes a `NarrationInteraction` from a `NarrationSegment` inside a
 *  stage's mixed segments array — a `NarrationInteraction` always carries
 *  `kind`, a `NarrationSegment` never does. Exported for the Den player
 *  (Phase 7), which walks this same union at runtime. */
export function isNarrationInteraction(v: object): v is NarrationInteraction {
  return 'kind' in v;
}

function validateNarrationSegment(v: unknown, path: string): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  const s = v as Partial<NarrationSegment>;
  if (s.voice !== 'fr' && s.voice !== 'en') push("voice must be 'fr' or 'en'");
  if (!isStr(s.text)) push('text is required');
  if (s.audioRef !== undefined && s.audioRef !== null && !isStr(s.audioRef)) {
    push('audioRef must be a string or null when present');
  }
  for (const k of ['startMs', 'endMs'] as const) {
    if (s[k] !== undefined && (typeof s[k] !== 'number' || !Number.isInteger(s[k]) || s[k]! < 0)) {
      push(`${k} must be an integer >= 0 when present`);
    }
  }
  return out;
}

function validateNarrationInteraction(v: object, path: string): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  const i = v as Partial<NarrationInteraction>;
  if (i.kind !== 'repeat' && i.kind !== 'produce' && i.kind !== 'check') {
    push("kind must be one of 'repeat' | 'produce' | 'check'");
  }
  if (i.itemId !== undefined && (!isStr(i.itemId) || !ITEM_ID_RE.test(i.itemId))) {
    push(`itemId "${String(i.itemId)}" is not a valid item id`);
  }
  if (i.expected !== undefined && !isStr(i.expected)) push('expected must be a non-empty string when present');
  if (i.gradeAs !== undefined && !oneOf(MODALITIES, i.gradeAs)) {
    push(`gradeAs must be one of ${MODALITIES.join(' | ')}`);
  }
  return out;
}

function validateNarration(v: unknown, path: string): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null || isArr(v)) return [{ path, message: 'not an object' }];
  const n = v as Partial<LessonNarration>;
  if (!isStr(n.camilleVoiceId)) push('camilleVoiceId is required');
  if (typeof n.ratioEnFr !== 'number' || n.ratioEnFr < 0 || n.ratioEnFr > 1) {
    push('ratioEnFr must be a number between 0 and 1');
  }
  if (!isArr(n.stages)) {
    push('stages must be an array');
    return out;
  }
  let prevRank = -1;
  n.stages.forEach((st, i) => {
    if (typeof st !== 'object' || st === null) {
      push(`stages[${i}] is not an object`);
      return;
    }
    const stage = st as Partial<NarrationStage>;
    const rank = (NARRATION_STAGES as readonly string[]).indexOf(stage.stage as string);
    if (rank < 0) push(`stages[${i}].stage must be one of ${NARRATION_STAGES.join(', ')}`);
    else if (rank <= prevRank) {
      push(`stages[${i}].stage "${stage.stage}" is out of order — narration stages must follow ${NARRATION_STAGES.join(' → ')}`);
    } else {
      prevRank = rank;
    }
    if (!isArr(stage.segments) || stage.segments.length === 0) {
      push(`stages[${i}].segments must be a non-empty array`);
    } else {
      stage.segments.forEach((seg, j) => {
        const segPath = `${path}.stages[${i}].segments[${j}]`;
        if (typeof seg !== 'object' || seg === null || isArr(seg)) {
          push(`${segPath} is not an object`);
        } else if (isNarrationInteraction(seg)) {
          out.push(...validateNarrationInteraction(seg, segPath));
        } else {
          out.push(...validateNarrationSegment(seg, segPath));
        }
      });
    }
  });
  return out;
}

/**
 * A Unit CONTAINS lessons. The Den's tree is units; the lessons live inside.
 * A unit with no lessons is legal and must render honestly as "coming soon" —
 * it must never fall through to a generic player pretending to be its content.
 *
 * A unit is keyed by LEVEL, not by Track. It used to be the other way round, and
 * that quietly made B1-C1 lessons unrepresentable: the only band vocabulary a
 * unit had was Track, which stops at a2, so there was nowhere to file an upper
 * unit even though items and scenarios have always been taggable that high.
 *
 * Track survives because the Den really does render three fixed beginner columns
 * and needs to know which unit belongs in which. It is now what it always
 * actually was — a DISPLAY grouping over the first three bands, not the unit's
 * identity. Anything past a2 has no track and appears in no column, which is
 * correct: the Den is the Beginners' Den.
 *
 * Both `track` and `level` are optional, and the id is the source of truth for
 * the band. Read it with `unitBand()` rather than trusting either field:
 *   · `track` is absent on b1..c1 units (they belong to no column)
 *   · `level` is absent on every unit authored before it existed, i.e. all of
 *     the shipped seed. Making it required would mean the corpus on people's
 *     phones stops validating, so it is optional until a publish backfills it.
 */
export type Unit = {
  /** '<level>.<nn>' — e.g. 'sons.03', 'b1.01' */
  id: string;
  /** Display grouping for the Den's three beginner columns. Absent past a2. */
  track?: Track;
  /** The band this unit teaches. Optional only for back-compat; when present it
   *  must agree with the id. `unitBand(id)` is the reliable read. */
  level?: Level;
  /** Display order within the band. The Den sorts on this, NOT on the id — ids
   *  are immutable (progress and lessons key on them), so resequencing a
   *  curriculum is a seq edit, never an id rename. Nothing guarantees seq
   *  matches the id's number, and after the A1 resequencing it does not. */
  seq: number;
  title: string;
  sub: string;
  lessonIds: string[];

  // ── The curriculum spine (CF-17) ──
  //
  // All three optional for the same reason `level` is: units authored before
  // these fields existed are on phones. Presence is enforced at publish time
  // (every unit must carry a non-empty canDo), not in the type — the same
  // contract-required-storage-optional pattern as Item.skill/modality.
  /** CEFR-style can-do anchor: what the learner can DO after this unit
   *  ("Can say what they want and refuse politely"). The unit's claim about
   *  itself, and the peg exam tasks and placement probes hang off. */
  canDo?: string;
  /** Theme slugs this unit touches ('famille', 'meteo'). Empty/absent is honest
   *  for pure grammar and phonics: not every unit has a lexical field. */
  themes?: string[];
  /** Units this one genuinely assumes, by id. Honest and minimal: a prereq that
   *  is merely "earlier in the book" is sequence, not dependency, and belongs in
   *  seq. The gate a learner actually hits belongs here. */
  prereqUnitIds?: string[];
};

/**
 * A Role Play scenario: an ordered dialogue the learner works through, one turn
 * at a time. It is neither an Item (atomic) nor a Lesson (a document to read) —
 * it is a script — so it is its own corpus shape rather than being forced into
 * one of the others. `turns[].user` is the line the learner is meant to produce
 * and the STT scores against; `ai` is the other speaker's prompt. */
export type ScenarioTurn = {
  ai: string;
  en: string;
  user: string;
  /** What the model line MEANS. Without it the reveal shows a French sentence
   *  the learner is told they should have said and cannot read, which is the
   *  one moment in the turn where comprehension is the whole point. Optional
   *  because every scenario shipped before this field existed lacks it. */
  userEn?: string;
  /** Other answers that would also have worked at this turn.
   *
   *  A conversation is not a cloze test: "Oui, je cherche un sac" and "Je
   *  voudrais un sac, s'il vous plaît" are both correct, and showing only the
   *  first teaches the learner that dialogue has one right answer. These are
   *  shown alongside the model on the reveal, and `stt` scores against ALL of
   *  them (best match wins) so a learner who says a listed alternative is
   *  marked right rather than "not quite".
   *
   *  Alternatives, not near-misses: everything here must be something a French
   *  speaker would actually say in reply to `ai`. */
  alts?: { fr: string; en: string }[];
};
export type Scenario = {
  /** 'sc.<level>.<theme>.<seq>' — e.g. 'sc.a1.marche.001' */
  id: string;
  level: Level;
  theme: string;
  title: string;
  turns: ScenarioTurn[];
  version: number;
  /** When present, this role-play doubles as the stimulus for a PO
   *  (production orale) exam task — a live conversation is the natural shape
   *  for po_interaction, so it is reused rather than re-authored as a static
   *  ExamTask.stimulus. The referenced task must exist and be a po_* taskType
   *  — checked in validateCorpus alongside the rest of the exam referential
   *  integrity. Not a remediation link (that is Lesson.skill) — this is the
   *  opposite direction: a scenario standing IN for an exam task. */
  exam?: { format: ExamFormat; taskId: string };
  provenance?: Provenance;
};

/* ─── Playlist: a listening set ──────────────────────────────────────────── */

// A Playlist is neither an Item (atomic, drilled) nor a Lesson (read, taught)
// nor a Scenario (a dialogue the learner produces one turn at a time) — it is
// a set the learner LISTENS to, straight through, with no interaction beyond
// play. Before this it lived as a hardcoded array in `content/playlists.ts`,
// entirely outside the DB, the publish pipeline, and every gate that protects
// the rest of the corpus. Promoting it here means a playlist can be authored,
// gated (the same em-dash/register/level-fit rules as anything else) and
// shipped OTA like the rest of the content instead of requiring an app-store
// release to add a new one.

/** 'pl.<level>.<slug>' — pl.sons.la-voix, pl.b1.argot. Derived from LEVELS
 *  like every other id regex; `minLevel` on the type is the authored
 *  listening floor, the id's level is where authoring filed it. */
export const PLAYLIST_ID_RE = new RegExp(`^pl\\.(${BANDS_RE})\\.[a-z0-9-]+$`);

export function playlistId(level: Level, slug: string): string {
  return `pl.${level}.${slug}`;
}

export type PlaylistTrack = {
  /** Stable id: '<playlistId>-t<seq>'. */
  id: string;
  /** French track title, shown as the now-playing heading in the player. */
  title: string;
  /** The lines spoken in order. `fr` is what TTS (or Phase 4 real audio)
   *  says; `en` is the gloss. Raw lines, not itemIds — a playlist track is
   *  authored prose meant to be heard in sequence, not a themed pull from
   *  the corpus, which is why it needs no referential check against items. */
  lines: { fr: string; en: string }[];
};

export type Playlist = {
  id: string;
  /** The lowest band this playlist is honest listening for. Argot at a1
   *  would be noise; this is the declaration a level-aware feed reads. */
  minLevel: Level;
  /** The serif French word painted on the card (La Voix, Argot…). */
  word: string;
  /** Eyebrow tag (DEEP-DIVE, PARIS…). */
  tag: string;
  /** Card gradient, literal rgba — a playlist is theme-independent, matching
   *  the fixed-color sibling cards it sits beside. */
  glow: string;
  labelFr: string;
  labelEn: string;
  /** The meta topic ('nasal vowels'); the count shown on the card is always
   *  derived from `tracks.length`, never stored. */
  topicFr: string;
  topicEn: string;
  tracks: PlaylistTrack[];
  version: number;
  status: ContentStatus;
  provenance?: Provenance;
};

function validatePlaylistTrack(v: unknown, path: string): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null || isArr(v)) return [{ path, message: 'not an object' }];
  const t = v as Partial<PlaylistTrack>;
  if (!isStr(t.id)) push('id is required');
  if (!isStr(t.title)) push('title is required');
  if (!isArr(t.lines) || t.lines.length === 0) push('lines must be a non-empty array');
  else {
    t.lines.forEach((ln, i) => {
      if (typeof ln !== 'object' || ln === null || !isStr((ln as { fr?: unknown }).fr) || !isStr((ln as { en?: unknown }).en)) {
        push(`lines[${i}] must be { fr, en } strings`);
      }
    });
  }
  return out;
}

export function validatePlaylist(v: unknown, path = 'playlist'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const p = v as Partial<Playlist>;

  if (!isStr(p.id)) push('id is required');
  else if (!PLAYLIST_ID_RE.test(p.id)) push(`id "${p.id}" must match pl.<level>.<slug>`);
  if (!oneOf(LEVELS, p.minLevel)) push(`minLevel must be one of ${LEVELS.join(' | ')}`);
  for (const k of ['word', 'tag', 'glow', 'labelFr', 'labelEn', 'topicFr', 'topicEn'] as const) {
    if (!isStr(p[k])) push(`${k} is required`);
  }
  if (!isArr(p.tracks) || p.tracks.length === 0) push('tracks must be a non-empty array');
  else {
    p.tracks.forEach((t, i) => out.push(...validatePlaylistTrack(t, `${path}.tracks[${i}]`)));
    const trackIds = p.tracks.map((t) => (t as Partial<PlaylistTrack>).id).filter(isStr);
    if (new Set(trackIds).size !== trackIds.length) push('track ids must not repeat within a playlist');
  }
  if (typeof p.version !== 'number' || !Number.isFinite(p.version)) push('version must be a number');
  if (!oneOf(CONTENT_STATUSES, p.status)) push(`status must be one of ${CONTENT_STATUSES.join(' | ')}`);
  if (p.provenance !== undefined) out.push(...validateProvenance(p.provenance, `${path}.provenance`));

  return out;
}

/* ─── Domain and Theme: the catalogue ────────────────────────────────────── */

// `theme` has been a bare string on every Item and Scenario since the beginning:
// 'cafe', 'marche', 'transport'. That was enough to batch content for review and
// nothing more. It cannot answer the questions the curriculum actually asks —
// which themes exist, which are worth teaching at a1 versus b2, which an exam
// candidate needs, which someone moving to France needs — because there is no
// row anywhere that says so. A typo'd theme is simply a new theme, silently.
//
// Domain and Theme make the catalogue data instead of folklore. A Theme belongs
// to a Domain, declares the band range it is teachable in, and flags whether it
// serves the exam track or the immigration track. Those flags are what let a
// generator pick the next thing to write, and a learner's plan pick the next
// thing to teach, without either hardcoding a list.

/** Domain slugs: the top of the catalogue. 'vie-quotidienne', 'travail'. */
export const DOMAIN_RE = /^[a-z0-9-]+$/;

export type Domain = {
  slug: string;
  title: string;
  /** Display order. Not the id — a domain can be reordered without breaking
   *  every theme that points at it. */
  order: number;
};

export type Theme = {
  /** The slug carried by Item.theme and Scenario.theme. THE join key. */
  slug: string;
  title: string;
  /** Domain.slug. Must resolve — checked in validateCorpus. */
  domain: string;
  /**
   * The band range this theme is teachable across, inclusive: ['a1','b1'].
   *
   * A range, not a single level, because a theme is not a level — 'cafe' is
   * orderable at a1 and still worth teaching at b2, where the language is
   * different but the situation is the same. A single `level` would force the
   * catalogue to either duplicate the theme per band or lie about it.
   */
  levelRange: [Level, Level];
  /** Serves an exam track (TEF/TCF/DELF/DALF). */
  examFlag: boolean;
  /** Serves the immigration track — the paperwork, the prefecture, the lease.
   *  A different corpus from the exam one, and the reason both flags exist
   *  rather than one 'purpose' field: a theme can serve both, or neither. */
  immigFlag: boolean;
  /** Finer cuts within the theme, for generation batching. May be empty. */
  subThemes: string[];
};

/* ─── Pack: the unit of authoring work ───────────────────────────────────── */

// A Pack is one themed batch at one band: "the a1 café pack". It already exists
// as a working concept — ealch-admin reviews items in themed batches and calls
// the batch a 'vocabulary' content_unit — but it has never been a first-class
// thing in the corpus, only an implicit grouping you get by filtering items on
// (level, theme). That implicitness is what makes "is the a1 café pack finished?"
// unanswerable: there is no row to hold the goal, the targets, or the status.
//
// Making it explicit gives generation a work item with a definition of done, and
// gives review something to approve that is not 8000 rows.

/** 'pack.<level>.<theme>' — pack.a1.cafe. One pack per (band, theme), which is
 *  why there is no seq: a second a1 café pack is a bug, not a feature. Derived
 *  from LEVELS like every other id regex. */
export const PACK_ID_RE = new RegExp(`^pack\\.(${BANDS_RE})\\.[a-z0-9-]+$`);

export function packId(level: Level, theme: string): string {
  return `pack.${level}.${theme}`;
}

export type Pack = {
  /** 'pack.<level>.<theme>' — pack.a1.cafe */
  id: string;
  /** Theme.slug. Must resolve to a Theme — checked in validateCorpus. */
  theme: string;
  level: Level;
  /** The can-do this pack buys the learner, in their words: "I can order a
   *  coffee and pay for it". Not a topic label — a capability, so that "done"
   *  means something a human can check rather than a row count. */
  goal: string;
  /**
   * How many items this pack wants per drill: { flashcard: 40, roleplay: 6 }.
   *
   * Partial on purpose. A pack that wants no dictation says nothing rather than
   * writing `dictation: 0`, so "not wanted" and "wanted, none written yet" stay
   * distinguishable — they are different states and only one of them is a gap.
   */
  modeTargets: Partial<Record<DrillKind, number>>;
  status: ContentStatus;
  provenance?: Provenance;
};

/* ─── Content templates: the antidote to one-size-fits-all ──────────────── */

// A Pack says WHAT to author next: "the a1 café pack, six roleplay turns". A
// ContentTemplate says HOW — which shape the result must take, and the prompt
// skeleton a generator fills in to get there. Without this, every generation
// script hand-codes its own one-off prompt and its own one-off shape, which is
// exactly the "same generic prompt with a topic swapped in" failure mode: a
// verb-conjugation drill and a café roleplay turn are pedagogically different
// authoring problems and need genuinely different instructions, not the same
// instructions pointed at a different theme. A template is a named, versioned,
// reusable authoring pattern that a generation job REFERENCES rather than
// reinvents, and that a human editor can pick from a list instead of copying
// whichever old script looked close enough.

export const TEMPLATE_TARGETS = ['item', 'lesson', 'scenario', 'examTask', 'playlist'] as const;
export type TemplateTarget = (typeof TEMPLATE_TARGETS)[number];

/** 'tpl.<target>.<slug>' — tpl.item.verb-conjugation-drill,
 *  tpl.lesson.den-narrated-teach. The target is embedded in the id so a
 *  mismatched `target` field (a lesson template claiming to produce items)
 *  is catchable by inspection, not just by trusting the field. */
export const TEMPLATE_ID_RE = new RegExp(`^tpl\\.(${TEMPLATE_TARGETS.join('|')})\\.[a-z0-9-]+$`);

export function templateId(target: TemplateTarget, slug: string): string {
  return `tpl.${target}.${slug}`;
}

export type ContentTemplate = {
  id: string;
  target: TemplateTarget;
  name: string;
  /** What a human choosing between sibling templates for the same target
   *  needs to know before picking this one. */
  description: string;
  /** Levels this template is fit to author at. A discriminate minimal-pair
   *  template has nothing useful to say about c1 register nuance; a template
   *  that claims every level is usually a template that fits none of them
   *  well, which is precisely the one-size-fits-all failure this exists to
   *  name and prevent. */
  levels: Level[];
  /** The generation prompt skeleton, with named {{placeholder}} slots a
   *  caller fills from the curriculum target (theme, canDo, recycled
   *  vocabulary, register). This is what makes a template a genuinely
   *  different authoring PATH rather than the same prompt with a topic
   *  swapped in. */
  promptSkeleton: string;
  /** A worked example of the shape this template must produce, so a
   *  reviewer — human or the LLM-judge gate — has something concrete to
   *  check output against, not just a type. */
  example: string;
  /** Narrower than `target` alone implies, when it needs to be: an 'item'
   *  template authored for voiceflash vocabulary should not also claim
   *  dictation eligibility just because both are drills on items. */
  drills?: DrillKind[];
  sections?: SectionType[];
  version: number;
  status: ContentStatus;
  provenance?: Provenance;
};

export function validateTemplate(v: unknown, path = 'template'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const t = v as Partial<ContentTemplate>;

  if (!oneOf(TEMPLATE_TARGETS, t.target)) push(`target must be one of ${TEMPLATE_TARGETS.join(' | ')}`);
  if (!isStr(t.id)) push('id is required');
  else if (!TEMPLATE_ID_RE.test(t.id)) push(`id "${t.id}" must match tpl.<target>.<slug>`);
  else if (oneOf(TEMPLATE_TARGETS, t.target) && !t.id.startsWith(`tpl.${t.target}.`)) {
    push(`id "${t.id}" does not match its own target "${t.target}"`);
  }
  if (!isStr(t.name)) push('name is required');
  if (!isStr(t.description)) push('description is required');
  if (!isArr(t.levels) || t.levels.length === 0 || t.levels.some((l) => !oneOf(LEVELS, l))) {
    push(`levels must be a non-empty array drawn from ${LEVELS.join(' | ')}`);
  }
  if (!isStr(t.promptSkeleton)) push('promptSkeleton is required');
  if (!isStr(t.example)) push('example is required');
  if (t.drills !== undefined) {
    if (!isArr(t.drills)) push('drills must be an array when present');
    else if (t.drills.some((d) => !oneOf(DRILL_KINDS, d))) push(`drills must all be one of ${DRILL_KINDS.join(' | ')}`);
  }
  if (t.sections !== undefined) {
    if (!isArr(t.sections)) push('sections must be an array when present');
    else if (t.sections.some((s) => !oneOf(SECTION_TYPES, s))) push(`sections must all be one of ${SECTION_TYPES.join(' | ')}`);
  }
  if (typeof t.version !== 'number' || !Number.isFinite(t.version)) push('version must be a number');
  if (!oneOf(CONTENT_STATUSES, t.status)) push(`status must be one of ${CONTENT_STATUSES.join(' | ')}`);
  if (t.provenance !== undefined) out.push(...validateProvenance(t.provenance, `${path}.provenance`));

  return out;
}

/* ─── Exam entities ──────────────────────────────────────────────────────── */

// An ExamTask is one task off one paper: a TCF listening question, a DELF B1
// speaking prompt. It is not an Item and not a Lesson — an item is a thing to
// know, a lesson is a document to read, and a task is a thing you are SCORED on
// under a clock. Forcing it into either loses the two properties that make it an
// exam at all: the timing, and the rubric.
//
// The task types these belong to split cleanly in two, and the split is what
// the validators below care about:
//   · CLOSED tasks (co_mcq, ce_mcq) have right answers. A QCM can be marked by
//     a machine.
//   · OPEN   tasks (po_monologue, po_interaction, pe_short, pe_essay) do not.
//     Someone (or, per the grading pipeline, a model grounded in a rubric and
//     model answer) judges them, and without one there is no such thing as a
//     score — only an opinion.

/** 'exam.<format>.<variant>.<taskType>.<seq>' — exam.tcf_canada.2024a.co_mcq.001 */
export const EXAM_TASK_ID_RE = new RegExp(
  `^exam\\.(${EXAM_FORMATS.join('|')})\\.[a-z0-9-]+\\.(${EXAM_TASK_TYPES.join('|')})\\.\\d{3,}$`
);
/**
 * 'paper.<format>.<variant>.<n>' — paper.tcf_canada.2024a.1, n in 1..20.
 *
 * Was `series.<format>.<variant>.<1-5>`, and both halves of that were wrong.
 * The cap of 5 could not express the twenty parallel papers per format the
 * Examiner is built for, and "series" named the wrong thing: one row is ONE
 * mock sitting, not a series of them.
 *
 * This is a clean rename with no compatibility alias, which is only safe
 * because of a fact that will not be true again: exam content publishes at
 * status 'published' and the only two exam rows that have ever existed are
 * 'in_review', so no shipped snapshot and no cached install carries an old
 * `series.*` id. The migration renames the one live row.
 */
export const EXAM_PAPER_ID_RE = new RegExp(
  `^paper\\.(${EXAM_FORMATS.join('|')})\\.[a-z0-9-]+\\.(?:[1-9]|1\\d|20)$`
);

/** Papers per format the model supports. The first release ships 5 TEF, 5 TCF
 *  and 1 DELF; the id space is sized for the destination, not the release. */
export const MAX_PAPER_NO = 20;

/**
 * The four épreuves of every paper, in the order a candidate sits them.
 *
 * READ THE VALUES, NOT THE FRENCH LABELS. The third section is *expression
 * écrite*, universally abbreviated EE on every exam board's paper, and its
 * EXAM_SKILL is 'PE' (production écrite). The fourth is *expression orale*,
 * abbreviated EO, and its skill is 'PO'. The two vocabularies cross over
 * exactly here, and writing ['CO','CE','EE','EO'] would be a list of two real
 * skills and two strings that are not skills at all.
 */
export const EXAM_SECTION_ORDER = ['CO', 'CE', 'PE', 'PO'] as const;

/** What a candidate sees on the section, for the skill the section carries. */
export const EXAM_SECTION_LABEL: Record<ExamSkill, string> = {
  CO: 'Compréhension orale',
  CE: 'Compréhension écrite',
  PE: 'Expression écrite',
  PO: 'Expression orale',
};

export function examTaskId(format: ExamFormat, variant: string, taskType: ExamTaskType, seq: number): string {
  return `exam.${format}.${variant}.${taskType}.${String(seq).padStart(3, '0')}`;
}
export function examPaperId(format: ExamFormat, variant: string, paperNo: number): string {
  return `paper.${format}.${variant}.${paperNo}`;
}

/** Task types whose answers a machine can mark. The rest need a rubric and a
 *  model answer — see OPEN_TASK_TYPES below and the grading pipeline. */
export const CLOSED_TASK_TYPES = ['co_mcq', 'ce_mcq'] as const;
export const OPEN_TASK_TYPES = ['po_monologue', 'po_interaction', 'pe_short', 'pe_essay'] as const;
const isOpenTaskType = (v: unknown): boolean => (OPEN_TASK_TYPES as readonly string[]).includes(v as string);

/** A multiple-choice question. Same shape and same trap as the quiz section. */
export type QcmItem = {
  q: string;
  opts: string[];
  correct: number;
  why?: string;
  /**
   * The CEFR band this single question sits at.
   *
   * REQUIRED on tcf_canada, optional elsewhere, and the asymmetry is the
   * format's defining property rather than an inconsistency. A TEF paper is
   * built from named blocks that do not ramp: block G is not harder than
   * block A, it is different, and the task-level `level` describes it well
   * enough. A TCF comprehension épreuve is a single 39-question slope from A1
   * to C2, so an item's band is what says where on that slope it sits. Without
   * it the ramp cannot be checked, item order stops meaning anything, and the
   * NCLC estimate has nothing to read: twenty correct at the bottom of the
   * slope and twenty scattered across it are different performances that a raw
   * count reports identically.
   */
  band?: ScoreBand;
};

/**
 * One stimulus and the questions hanging off it.
 *
 * `ExamTask.items` models a task with ONE stimulus (the task's own `prompt`)
 * and a flat question list. Real papers are not shaped like that: a TEF
 * listening section is forty questions across roughly thirty separate audio
 * documents, each with its own recording, its own play count and its own
 * reading window. Flattening those into one list loses the only structure that
 * makes it a listening test — which audio you are allowed to hear, and when.
 *
 * A task carries `items` or `parts`, never both. See validateExamTask.
 */
export type ExamPart = {
  /** Shown to the candidate: 'Document 3', 'Question 12'. */
  label: string;
  /** CE: the passage, advert or form. CO: the transcript, which is what gets
   *  rendered to audio and is NEVER shown under exam conditions. */
  text?: string;
  /** CO only. Resolves through the same Storage + disk-cache + TTS-fallback
   *  path as item audio (services/audio.ts), so a part with no clip yet still
   *  speaks rather than falling silent. */
  audioRef?: string | null;
  /** CO only. 1 normally. TEF interview blocks may be 2 since 1 Sept 2025;
   *  TCF is 1 everywhere. Absent means 1. */
  playCount?: number;
  /** CO only. Seconds of silence before autoplay, so the candidate can read
   *  the questions first, as the real paper allows. Absent means 0. */
  readWindowS?: number;
  /**
   * CO only. How long the audio actually runs.
   *
   * Written by the render pipeline (phase E8), which knows the rendered clip's
   * real length. Absent until then, and the runner estimates from the
   * transcript — see estimateDurationS.
   *
   * It exists because the shared audio player exposes no per-play completion
   * callback, so a part with playCount 2 has nothing to tell it when the first
   * play ended, and both would start in the same tick.
   */
  durationS?: number;
  /** TEF CO block A answers with pictures: the images ARE the options. */
  imageRef?: string | null;
  /** Required whenever imageRef is present (UDL 01). An image with no
   *  alternative text is unusable to a screen reader and must not ship. */
  imageAlt?: string;
  items: QcmItem[];
};

/**
 * How one épreuve's raw marks become a reported score and an NCLC estimate.
 *
 * Lives on the SECTION, not the task, because the published conversion is per
 * épreuve: TEF reports listening on /360 and reading on /300 across the whole
 * section, not per block.
 */
export type SectionScoring = {
  /** The official scale for this épreuve: 360, 300, 450, 699 or 20. */
  scale: number;
  /** raw correct → scaled score, as a lookup table read by interpolation.
   *  Expert-judged, NOT equated: see NclcRule. */
  map: { raw: number; scaled: number }[];
  /** Ascending, non-overlapping, and covering 0..(number of items). */
  nclc: NclcRule[];
  /**
   * Per-band weights. Present ONLY on formats where the band of a correct
   * answer is part of the evidence.
   *
   * TEF is a paper of blocks and a correct answer is a correct answer, so it
   * carries no weights and `map`/`nclc` stay indexed by the plain count.
   *
   * TCF is a ramp, and STANDARD-tcf §1 is explicit that "twenty correct at the
   * bottom of the slope and twenty correct scattered across it are different
   * performances and must not produce the same estimate". A plain count gives
   * both candidates the identical scaled score and the identical NCLC, which is
   * the one thing the format says it must not do. When weights are present, the
   * value `map` and `nclc` are indexed by is the WEIGHTED total, not the count.
   */
  weights?: Partial<Record<Level, number>>;
};

/**
 * A raw-score span and the NCLC band it reports as.
 *
 * `nclcLow`/`nclcHigh` are a RANGE, and that is a deliberate accuracy claim
 * rather than vagueness. The exam bodies publish their NCLC boundaries but not
 * their raw-to-scaled conversion, which they equate from live sitting data we
 * do not have. Any map we write is expert judgement. A point estimate off an
 * expert-judged map is a number a candidate may make an immigration decision
 * on, and we cannot stand behind that precision; a range we can. Default span
 * is 2 (e.g. 6 to 7). Narrow to a single value only where there is evidence.
 */
export type NclcRule = { minRaw: number; maxRaw: number; nclcLow: number; nclcHigh: number };

/**
 * One recorded examiner turn. The shapes live here so authored content can be
 * typed from the schema alone; the matching that consumes them is in
 * utils/interlocutor.logic.ts.
 */
export type InterlocutorTurn = {
  id: string;
  /** What the examiner says. Rendered by E8; device TTS speaks it until then. */
  text: string;
  audioRef?: string | null;
  durationS?: number;
  /** Phrases that select this answer against the candidate's transcript. */
  cues: string[];
  /** What this answer is FOR, in the author's words: 'le prix', 'les dates'.
   *  This is the coverage checklist the grader is shown. */
  covers: string;
};

export type ExamInterlocutor = {
  opening: InterlocutorTurn;
  /** Every fact the document withholds. Full coverage is asking for all of them. */
  answers: InterlocutorTurn[];
  catchAll: InterlocutorTurn;
  closing: InterlocutorTurn;
};

/** TCF Canada reports nothing outside this range, whatever the raw score. */
export const NCLC_MIN = 4;
export const NCLC_MAX = 10;

/**
 * Exam conditions, or practice conditions.
 *
 *   'exam'     hard clock, single play, no rewind, no pause. SCORED.
 *   'practice' replay allowed, clock pausable, transcript available. NOT
 *              scored, and the attempt is marked so on the report.
 *
 * This is a SHIPPED STRING VALUE, stored on every logged ExamResult, so it is
 * append-only for the same reason DRILL_KINDS is: renaming a value silently
 * reinterprets every result already on a device. And the two must never blur
 * into one number — a practice run with the clock paused and the audio replayed
 * is not evidence of anything, and reporting it beside a real sitting would
 * make the whole report untrustworthy.
 */
export const EXAM_MODES = ['exam', 'practice'] as const;
export type ExamMode = (typeof EXAM_MODES)[number];

export type RubricCriterion = {
  key: string;
  label: string;
  /** Must be >= 1: a criterion worth nothing cannot change a score, so it is a
   *  thing the examiner is asked to judge and then ignore. */
  maxPoints: number;
  /** What each level of performance looks like. Absent means the examiner is
   *  guessing, which is how two markers give the same answer different scores. */
  descriptors?: string[];
};

export type Rubric = { criteria: RubricCriterion[] };

/** What the candidate must produce. Bounds are what make "too short" markable. */
export type ResponseSpec = {
  kind: 'qcm' | 'text' | 'audio';
  minWords?: number;
  maxWords?: number;
  minDurationS?: number;
  maxDurationS?: number;
};

/** Raw points → the band it reports as. Ascending, and the reason SCORE_BANDS
 *  exists: this is the one place c2 is a legitimate value. */
export type ScoringBandRule = { band: ScoreBand; minPoints: number };

export type ExamTask = {
  /** 'exam.<format>.<variant>.<taskType>.<seq>' */
  id: string;
  format: ExamFormat;
  /** The paper this came from: '2024a', 'blanc-03'. Distinct from formatVersion
   *  below — variant identifies which of several PARALLEL mock papers this is
   *  (see ExamPaper.paperNo), formatVersion identifies which edition of the
   *  exam board's spec it was written against. Losing either collapses two
   *  different questions ("which paper?" vs "is this paper stale?") into one. */
  variant: string;
  taskType: ExamTaskType;
  /** Derived from taskType via examTaskSkill(), and validated to match it —
   *  stored rather than computed on read because it is what the SRS
   *  decomposition and due-skill grouping key off, and both happen far from
   *  any code that also has the taskType in scope. */
  skill: ExamSkill;
  /**
   * The band this task tests. A SCORE band, not a content Level: exams are CEFR
   * -scored, 'sons' is our own pronunciation track and no paper has ever tested
   * it, and c2 tasks are real even though we author no c2 CONTENT. This is the
   * field SCORE_BANDS was split out for.
   */
  level: ScoreBand;
  /**
   * Which published exam format this task was written against: 'tcf-2024.1'.
   *
   * REQUIRED, and the one field here that is not obviously necessary until it is.
   * Exam boards change their formats — task counts, timings, mark schemes. When
   * that happens, tasks written to the old format are not wrong, they are STALE,
   * and without this field the two are indistinguishable: there is no way to ask
   * "what did we write for the format that no longer exists?" short of reading
   * every task. Sitting a candidate on a stale mock is worse than not mocking at
   * all, because they walk in prepared for the wrong paper.
   */
  formatVersion: string;
  prompt: string;
  /** What the candidate sees as this task's name: 'Section A', 'Tâche 2'.
   *  Deliberately a free string and NOT a taskType value: the label belongs to
   *  the paper ("Tâche 2" means different things on TCF and DELF), while
   *  taskType belongs to the engine. Enum values ship inside cached snapshots
   *  and can never be changed; labels can. */
  label?: string;
  /** Closed task types only: the questions to mark, when the task has ONE
   *  stimulus. A task with several stimuli uses `parts` instead. */
  items?: QcmItem[];
  /** Closed task types only, and mutually exclusive with `items` — the
   *  several-stimuli shape. See ExamPart. */
  parts?: ExamPart[];
  /**
   * Open SPOKEN task types only: seconds the candidate gets with the prompt
   * before the answer clock starts.
   *
   * Only some tasks have one, and that asymmetry is the format, not an
   * oversight: TCF tâche 2 gives two minutes with the document, while tâche 1
   * and tâche 3 give none at all. Absent means none, and the runner must show
   * no prep phase rather than a zero-length one.
   *
   * Separate from `timingS`, which is the answer clock. Conflating them would
   * either hand the candidate their prep time as speaking time or start the
   * recording while they are still reading.
   */
  prepS?: number;
  /**
   * po_interaction only: the recorded examiner.
   *
   * TEF EO Section A and TCF EO tâche 2 require the candidate to ASK and an
   * examiner to ANSWER. Without this the task is a monologue wearing an
   * interaction's label — the candidate talks into silence and nothing they
   * ask has consequences.
   *
   * Deliberately NOT `Scenario.exam`, which was the original plan. A role-play
   * turn carries a TARGET line the learner is scored against; here the
   * candidate invents their own questions and there is no target, so reusing
   * it would turn "obtain information" into "recite this sentence".
   *
   * The answer bank doubles as the definition of full coverage — see
   * utils/interlocutor.logic.ts.
   */
  interlocutor?: ExamInterlocutor;
  responseSpec?: ResponseSpec;
  /** Open task types only, and REQUIRED there — see validateExamTask. */
  rubric?: Rubric;
  /** Open task types only, and required there: what a good answer looks like. */
  modelAnswer?: string;
  examinerNotes?: string[];
  /** Seconds allowed. An exam task without a clock is a worksheet. */
  timingS: number;
  scoringMap?: ScoringBandRule[];
  /**
   * Closed task types only. Which corpus items this task is really testing, so
   * a miss can decompose into the atoms that need review instead of just
   * logging "got question 3 wrong" and losing the thread back to the SRS. See
   * decomposeExamMiss() in progress.logic.ts. Every id must resolve against
   * Corpus.items — checked in validateCorpus, same pattern as
   * ExamSection.taskIds resolving against ExamTask ids.
   */
  targetItemIds?: string[];
  provenance?: Provenance;
};

/**
 * One épreuve of a paper: the tasks it is built from, and its clock.
 *
 * The clock lives here rather than only on the task because that is where the
 * real paper puts it. TEF gives sixty minutes for the whole reading épreuve,
 * not per block, and the candidate spends it how they like. `ExamTask.timingS`
 * remains the per-task budget for sections that genuinely have one (TEF
 * writing splits 25 and 35), but the section clock is the one that stops the
 * candidate.
 */
export type ExamSection = {
  /** Which épreuve this is. The four are fixed and ordered: see
   *  EXAM_SECTION_ORDER, and note that the "EE" section carries skill 'PE'. */
  skill: ExamSkill;
  /** Ordered. Must all resolve, and every task's own `skill` must equal this
   *  section's — both checked in validateCorpus. */
  taskIds: string[];
  /** The published clock for the whole épreuve, in seconds. */
  timingS: number;
  /** Which blueprint edition this section was authored against:
   *  'tef-canada-2025.09'. Distinct from ExamTask.formatVersion, which records
   *  the exam board's own spec edition — this records OUR reading of it,
   *  including the fill rules we adopted where the board publishes a gap
   *  (see exam-blueprints/BLUEPRINT-tef-canada.md §3.1). When a fill rule is
   *  later corrected, this is what finds every section built on the old one. */
  blueprintId: string;
  /** How this épreuve's raw marks report. Absent means the section cannot be
   *  scored yet, which the report must show as "non corrigé" rather than 0. */
  scoring?: SectionScoring;
};

/**
 * A full mock sitting: four épreuves, in order.
 *
 * Renamed from ExamSeries, which named one paper as though it were several.
 *
 * The four-section rule is what makes this an exam rather than a bag of tasks,
 * and it is validated rather than assumed. A "paper" missing its speaking
 * épreuve is not a slightly incomplete paper — it is a thing that will report
 * an NCLC estimate off three skills while a real result is governed by the
 * weakest of four, which is the specific way this feature could mislead
 * somebody about their immigration eligibility.
 */
export type ExamPaper = {
  /** 'paper.<format>.<variant>.<n>' */
  id: string;
  format: ExamFormat;
  variant: string;
  /** 1..MAX_PAPER_NO. Parallel mock papers — "parallel," never "equated":
   *  difficulty is expert-judged, not psychometrically balanced from sitting
   *  data, so scores reported off any of them are practice estimates. */
  paperNo: number;
  /** Exactly four, skills in EXAM_SECTION_ORDER. Validated. */
  sections: ExamSection[];
};

/** Every task the paper contains, in sitting order. The flat view the runner
 *  and the SRS want, derived rather than stored so it cannot disagree with
 *  the sections. */
export function paperTaskIds(paper: ExamPaper): string[] {
  return (paper.sections ?? []).flatMap((s) => s.taskIds ?? []);
}

/**
 * What the publish pipeline emits and the app loads.
 *
 * The new arrays are all OPTIONAL, and treated as [] when missing. That is not
 * politeness — the seed.json committed today, and every cached snapshot on every
 * install, is a v0 corpus with exactly four arrays. Making any of these required
 * makes that content invalid, which means a fresh offline install renders
 * nothing and an existing install throws away a cache it could have used. Same
 * reason `scenarios` was optional before them.
 */
/* ─── SpeakStage: one station on the Speak path ──────────────────────────── */

/**
 * One station on the Speak tab's linear avatar trail (SPEAK-PATH-BLUEPRINT.md).
 * A stage is a REFERENCE shape, like a Lesson's practice section: it owns no
 * sentences, only ordered blocks of itemIds into Corpus.items. Deleting an
 * item without re-curating the path is therefore a publish error, not a blank
 * card at runtime — validateCorpus resolves every id.
 *
 * Blocks are the swipe-session unit (~33 cards) and arrive pre-sorted by the
 * curation script (shortest utterance first), so the renderer plays them in
 * order and never re-derives difficulty.
 */
export type SpeakBlock = {
  /** Ordered. Every id must resolve to a Corpus item — see validateCorpus. */
  itemIds: string[];
};

export type SpeakStage = {
  /** 'speak.<world>.<seq>' — e.g. 'speak.2.3'. Stable: progress keys on it. */
  id: string;
  /** 1..6, mapped 1:1 to LEVELS (world 1 = sons … world 6 = c1). */
  world: number;
  /** Display order within the world. The path sorts on (world, seq). */
  seq: number;
  level: Level;
  /** French station name: « Le Pont des Petits Mots ». */
  title: string;
  /** The theme slugs this stage draws from — provenance, not a live query:
   *  the itemIds are the contract, themes just explain where they came from. */
  themes: string[];
  blocks: SpeakBlock[];
  version: number;
};

export type Corpus = {
  version: number;
  units: Unit[];
  lessons: Lesson[];
  items: Item[];
  scenarios: Scenario[];
  domains?: Domain[];
  themes?: Theme[];
  packs?: Pack[];
  examTasks?: ExamTask[];
  /** Mock papers. Renamed from `examSeries`; no shipped snapshot carries the
   *  old key, because no exam content has ever reached status 'published'. */
  examPapers?: ExamPaper[];
  playlists?: Playlist[];
  templates?: ContentTemplate[];
  /** The Speak trail. Optional for back-compat like every post-v0 array. */
  speakPath?: SpeakStage[];
};

export const EMPTY_CORPUS: Corpus = {
  version: 0,
  units: [],
  lessons: [],
  items: [],
  scenarios: [],
  domains: [],
  themes: [],
  packs: [],
  examTasks: [],
  examPapers: [],
  playlists: [],
  templates: [],
  speakPath: [],
};

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

  // ── The optional spine: TYPE-WHEN-PRESENT only ──
  // Absence is not an error here and must not become one until a publish has
  // backfilled the corpus. The shipped seed has none of these fields, so a
  // required check would make the content on people's phones invalid.
  if (it.skill !== undefined && !oneOf(EXAM_SKILLS, it.skill)) {
    push(`skill must be one of ${EXAM_SKILLS.join(' | ')}`);
  }
  if (it.register !== undefined && !oneOf(REGISTERS, it.register)) {
    push(`register must be one of ${REGISTERS.join(' | ')}`);
  }
  if (it.modality !== undefined && !oneOf(MODALITIES, it.modality)) {
    push(`modality must be one of ${MODALITIES.join(' | ')}`);
  }
  if (it.cardType !== undefined && !oneOf(CARD_TYPES, it.cardType)) {
    push(`cardType must be one of ${CARD_TYPES.join(' | ')}`);
  }
  if (it.prompt !== undefined && !isStr(it.prompt)) push('prompt must be a non-empty string when present');
  if (it.respell !== undefined && !isStr(it.respell)) push('respell must be a non-empty string when present');
  // A prompt-front card without a prompt does not fail — it silently renders as
  // a plain vocab pair, which is the blank-drill class of bug. Refuse it here.
  if (it.cardType !== undefined && it.cardType !== 'vocab' && !isStr(it.prompt)) {
    push(`cardType "${it.cardType}" requires a prompt (the card front)`);
  }
  if (it.canDo !== undefined && !isStr(it.canDo)) push('canDo must be a non-empty string when present');
  if (it.grammarPoints !== undefined) {
    if (!isArr(it.grammarPoints)) push('grammarPoints must be an array when present');
    else if (it.grammarPoints.some((g) => !isStr(g))) push('grammarPoints must all be non-empty strings');
  }
  if (it.segments !== undefined) out.push(...validateSegments(it.segments, `${path}.segments`));
  if (it.assetKey !== undefined && !isStr(it.assetKey)) push('assetKey must be a non-empty string when present');
  if (it.imageRef !== undefined && it.imageRef !== null) {
    if (!isStr(it.imageRef)) push('imageRef must be a non-empty string or null when present');
    else if (!IMAGE_REF_RE.test(it.imageRef)) {
      push(`imageRef "${it.imageRef}" must be a storage-relative path (lowercase, no leading slash, no ..)`);
    }
  }
  if (it.provenance !== undefined) out.push(...validateProvenance(it.provenance, `${path}.provenance`));
  if (it.verbCheck !== undefined) {
    const vc = it.verbCheck as Partial<NonNullable<Item['verbCheck']>>;
    if (typeof vc !== 'object' || vc === null) push('verbCheck must be an object when present');
    else {
      if (!isStr(vc.infinitive)) push('verbCheck.infinitive is required when verbCheck is present');
      if (!isStr(vc.tense)) push('verbCheck.tense is required when verbCheck is present');
      if (vc.mood !== undefined && !isStr(vc.mood)) push('verbCheck.mood must be a non-empty string when present');
      if (vc.person !== '1' && vc.person !== '2' && vc.person !== '3') push("verbCheck.person must be '1', '2', or '3'");
      if (vc.number !== 's' && vc.number !== 'p') push("verbCheck.number must be 's' or 'p'");
    }
  }

  return out;
}

/** Silent-letter indices against the word they annotate.
 *
 *  These are character offsets into a French string, hand-authored, and an
 *  off-by-one is invisible in review: the card renders and greys the wrong
 *  letter, teaching the opposite of what it means to. Two were caught this way
 *  while authoring the sons.06 corpus, so this is checked rather than trusted.
 *  Absence is fine — most words have no silent letters and say so with [] or
 *  by omitting the field. */
function validateSilent(silent: unknown, word: unknown, path: string): Issue[] {
  if (silent === undefined) return [];
  const out: Issue[] = [];
  if (!isArr(silent)) return [{ path, message: 'silent must be an array of character indices' }];
  if (!isStr(word)) {
    return silent.length ? [{ path, message: 'silent indices need a word to index into' }] : [];
  }
  const chars = [...word];
  for (const ix of silent) {
    if (typeof ix !== 'number' || !Number.isInteger(ix)) {
      out.push({ path, message: `silent index ${String(ix)} is not an integer` });
    } else if (ix < 0 || ix >= chars.length) {
      out.push({ path, message: `silent index ${ix} is outside "${word}" (0..${chars.length - 1})` });
    } else if (!/[\p{L}']/u.test(chars[ix])) {
      // Pointing at a space is always an authoring slip, and it greys nothing.
      out.push({ path, message: `silent index ${ix} in "${word}" is "${chars[ix]}", not a letter` });
    }
  }
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

  // The shared extras, type-when-present on every section shape.
  // `say` takes two shapes: the shipped bare string, and the v2 object with a
  // voice and a timing. Both are valid forever — see SectionExtras.say.
  if (sec.say !== undefined) {
    if (isStr(sec.say)) {
      // fine
    } else if (typeof sec.say === 'object' && sec.say !== null) {
      const n = sec.say as Partial<SectionNarration>;
      if (!isStr(n.text)) push('say.text is required when say is an object');
      if (n.voice !== undefined && n.voice !== 'coach') push("say.voice must be 'coach'");
      if (n.timing !== undefined && n.timing !== 'onEnter' && n.timing !== 'onFirstVisitOnly') {
        push("say.timing must be 'onEnter' or 'onFirstVisitOnly'");
      }
    } else {
      push('say must be a string or a narration object when present');
    }
  }

  // The v2 display axes. Optional everywhere; wrong values are still errors,
  // because a typo'd layer silently opts a section out of the density caps.
  if (sec.id !== undefined && !isStr(sec.id)) push('id must be a non-empty string when present');
  if (sec.render !== undefined && !oneOf(RENDER_MODES, sec.render)) {
    push(`render must be one of ${RENDER_MODES.join(' | ')}`);
  }
  if (sec.layer !== undefined && !oneOf(LAYERS, sec.layer)) push(`layer must be one of ${LAYERS.join(' | ')}`);
  if (sec.size !== undefined && !oneOf(CARD_SIZES, sec.size)) push(`size must be one of ${CARD_SIZES.join(' | ')}`);
  if (sec.sheetId !== undefined && !isStr(sec.sheetId)) push('sheetId must be a non-empty string when present');
  if (sec.previewCount !== undefined && (typeof sec.previewCount !== 'number' || !Number.isInteger(sec.previewCount) || sec.previewCount < 0)) {
    push('previewCount must be a non-negative integer when present');
  }
  if (sec.terms !== undefined) {
    if (!isArr(sec.terms) || sec.terms.some((x) => !isStr(x))) {
      push('terms must be an array of glossary keys when present');
    }
  }
  for (const flag of ['swipe', 'questionsInModal', 'hideLines'] as const) {
    if (sec[flag] !== undefined && typeof sec[flag] !== 'boolean') push(`${flag} must be a boolean when present`);
  }
  // `hideLines` only means anything on a listening section. Authored anywhere
  // else it is a field that validates, publishes and does nothing, which is the
  // exact shape of the five dead audio fields the seed already carries 31 of.
  if (sec.hideLines !== undefined && sec.type !== 'listening') {
    push("hideLines is only read on a 'listening' section");
  }
  // The French-audio spec. Only checked on section types that do NOT already
  // own an `audio` field of their own shape (the 'audio' section's is a
  // string[] of lines), so the two never fight.
  if (sec.type !== 'audio' && sec.audio !== undefined) {
    const a = sec.audio as Partial<SectionAudio>;
    if (typeof a !== 'object' || a === null) push('audio must be an object when present');
    else {
      if (a.mode !== undefined && !['tts', 'recorded', 'mic', 'none'].includes(a.mode)) {
        push("audio.mode must be 'tts' | 'recorded' | 'mic' | 'none'");
      }
      if (a.speeds !== undefined && (!isArr(a.speeds) || a.speeds.some((n) => typeof n !== 'number' || n <= 0))) {
        push('audio.speeds must be an array of positive numbers');
      }
      if (a.recordingId !== undefined && !isStr(a.recordingId)) push('audio.recordingId must be a non-empty string');
      if (a.maxPlays !== undefined && (typeof a.maxPlays !== 'number' || a.maxPlays < 1)) {
        push('audio.maxPlays must be a positive number when present');
      }
    }
  }
  if (sec.imageRef !== undefined && (!isStr(sec.imageRef) || !IMAGE_REF_RE.test(sec.imageRef))) {
    push(`imageRef "${String(sec.imageRef)}" must be a storage-relative asset path`);
  }
  if (sec.audioRef !== undefined && sec.audioRef !== null && !isStr(sec.audioRef)) {
    push('audioRef must be a string or null when present');
  }

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
    case 'audio': {
      strList('lines');
      if (sec.segments !== undefined) out.push(...validateSegments(sec.segments, `${path}.segments`));
      if (sec.assetKey !== undefined && !isStr(sec.assetKey)) push('assetKey must be a non-empty string when present');
      // Segments locate words inside a FILE. Without audioRef there is no file,
      // so the timings point at nothing and the section silently plays via TTS
      // while claiming to be seekable.
      if (isArr(sec.segments) && sec.segments.length > 0 && !isStr(sec.audioRef)) {
        push('segments need an audioRef — they are offsets into a file that must exist');
      }
      break;
    }
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
      if (!oneOf(PRACTICE_SKILLS, sec.skill)) push(`skill must be one of ${PRACTICE_SKILLS.join(' | ')}`);
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
      // Two shapes: the shipped flat `questions`, and the v2 `rounds` of
      // eight. Exactly one must be present — a quiz carrying both would leave
      // the renderer to guess which list is the real exam.
      const hasRounds = isArr(sec.rounds) && sec.rounds.length > 0;
      const hasFlat = isArr(sec.questions) && sec.questions.length > 0;
      if (hasRounds && hasFlat) {
        push('a quiz carries either questions or rounds, not both');
        break;
      }
      if (!hasRounds && !hasFlat) {
        push('questions (or rounds) must be a non-empty array');
        break;
      }

      /** One question, in either shape. Closed formats index `opts`; open
       *  formats (typeIn, errorSpot, speak) are answered against `accept` and
       *  legitimately carry no options at all. */
      const checkQ = (q: unknown, qp: string) => {
        if (typeof q !== 'object' || q === null) {
          push(`${qp} is not an object`);
          return;
        }
        const qq = q as Partial<QuizQuestion>;
        if (!isStr(qq.q)) push(`${qp}.q is required`);
        if (qq.format !== undefined && !oneOf(QUIZ_FORMATS, qq.format)) {
          push(`${qp}.format must be one of ${QUIZ_FORMATS.join(' | ')}`);
        }
        if (qq.say !== undefined && !isStr(qq.say)) push(`${qp}.say must be a non-empty string when present`);
        if (qq.prompt !== undefined && !isStr(qq.prompt)) push(`${qp}.prompt must be a non-empty string when present`);
        const open = qq.format === 'typeIn' || qq.format === 'errorSpot' || qq.format === 'speak';
        if (open) {
          // An open question with nothing to accept can never be answered
          // right. `speak` is scored by the recogniser, so a target is enough.
          if (!isArr(qq.accept) || qq.accept.length === 0) {
            if (qq.format !== 'speak') push(`${qp}.accept must be a non-empty array for format "${qq.format}"`);
          } else if (qq.accept.some((a) => !isStr(a))) {
            push(`${qp}.accept must all be non-empty strings`);
          }
          if (qq.format === 'speak' && !isStr(qq.target)) push(`${qp}.target is required for format "speak"`);
        } else if (qq.format === 'tapSilent') {
          if (!isStr(qq.word)) push(`${qp}.word is required for format "tapSilent"`);
          if (!isStr(qq.correct)) push(`${qp}.correct must name the silent letters for format "tapSilent"`);
        } else {
          // mcq, listenChoose, and the shipped format-less questions.
          if (!isArr(qq.opts) || qq.opts.length < 2 || qq.opts.some((o) => !isStr(o))) {
            push(`${qp}.opts must be 2+ non-empty strings`);
          } else if (
            typeof qq.correct !== 'number' ||
            !Number.isInteger(qq.correct) ||
            qq.correct < 0 ||
            qq.correct >= qq.opts.length
          ) {
            // An out-of-range `correct` makes a question unanswerable: every
            // option scores wrong and the learner is told they failed.
            push(`${qp}.correct must index opts (0..${(isArr(qq.opts) ? qq.opts.length : 1) - 1})`);
          }
        }
      };

      if (hasFlat) {
        (sec.questions as unknown[]).forEach((q, i) => checkQ(q, `questions[${i}]`));
      } else {
        (sec.rounds as unknown[]).forEach((r, ri) => {
          if (typeof r !== 'object' || r === null) {
            push(`rounds[${ri}] is not an object`);
            return;
          }
          const rr = r as Partial<QuizRound>;
          if (!isStr(rr.id)) push(`rounds[${ri}].id is required`);
          if (!isStr(rr.label)) push(`rounds[${ri}].label is required`);
          if (!isArr(rr.questions) || rr.questions.length === 0) {
            push(`rounds[${ri}].questions must be a non-empty array`);
            return;
          }
          rr.questions.forEach((q, i) => checkQ(q, `rounds[${ri}].questions[${i}]`));
        });
      }

      for (const [k, lo, hi] of [
        ['passMark', 0, 100],
        ['roundFailThreshold', 0, 100],
      ] as const) {
        const v = sec[k];
        if (v !== undefined && (typeof v !== 'number' || v < lo || v > hi)) {
          push(`${k} must be a number between ${lo} and ${hi} when present`);
        }
      }
      break;
    }
    case 'letterGrid': {
      const letters = sec.letters;
      if (!isArr(letters) || letters.length === 0) {
        push('letters must be a non-empty array');
        break;
      }
      letters.forEach((l, i) => {
        if (typeof l !== 'object' || l === null) {
          push(`letters[${i}] is not an object`);
          return;
        }
        const g = l as Partial<GridLetter>;
        // `ch` is the tap target painted in the grid cell. One glyph for the
        // alphabet grid; a silent-letter grid labels ENDINGS ('-ent', '-gt'),
        // so a short multi-character label is allowed there and only there.
        if (!isStr(g.ch)) push(`letters[${i}].ch is required`);
        else if (g.ch.length > 1 && g.verdict === undefined) {
          push(`letters[${i}].ch must be a single character (multi-character endings need a verdict)`);
        } else if (g.ch.length > 12) push(`letters[${i}].ch "${g.ch}" is too long for a grid cell`);
        for (const f of ['name', 'sound', 'ex'] as const) {
          if (!isStr(g[f])) push(`letters[${i}].${f} is required`);
        }
        for (const f of ['ipa', 'exNote', 'memo', 'rule', 'respell', 'en', 'exception'] as const) {
          if (g[f] !== undefined && !isStr(g[f])) push(`letters[${i}].${f} must be a non-empty string when present`);
        }
        if (g.verdict !== undefined && !['silent', 'sounded', 'conditional'].includes(g.verdict)) {
          push(`letters[${i}].verdict must be silent | sounded | conditional`);
        }
        if (g.preview !== undefined && typeof g.preview !== 'boolean') push(`letters[${i}].preview must be a boolean`);
        out.push(...validateSilent(g.silent, g.ex, `${path}.letters[${i}]`));
      });
      break;
    }
    case 'scene': {
      const st = sec.setting as Partial<SceneSetting> | undefined;
      if (typeof st !== 'object' || st === null) push('setting is required');
      else if (!isStr(st.place)) push('setting.place is required');

      const beats = sec.beats;
      if (!isArr(beats) || beats.length === 0) {
        push('beats must be a non-empty array');
        break;
      }
      let choices = 0;
      let breaks = 0;
      beats.forEach((b, i) => {
        if (typeof b !== 'object' || b === null) {
          push(`beats[${i}] is not an object`);
          return;
        }
        const bb = b as Record<string, unknown>;
        const bp = `beats[${i}]`;
        switch (bb.kind) {
          case 'narration':
          case 'resolve':
            if (!isStr(bb.text)) push(`${bp}.text is required`);
            break;
          case 'bubble':
            if (!['them', 'you', 'coach'].includes(bb.from as string)) push(`${bp}.from must be them | you | coach`);
            for (const f of ['fr', 'en']) if (!isStr(bb[f])) push(`${bp}.${f} is required`);
            if (bb.reveal !== undefined && bb.reveal !== 'tap' && bb.reveal !== 'auto') {
              push(`${bp}.reveal must be 'tap' or 'auto'`);
            }
            break;
          case 'choice': {
            choices++;
            if (!isStr(bb.prompt)) push(`${bp}.prompt is required`);
            const opts = bb.options;
            // Two options, both plausible, exactly one carrying the instinct
            // that fails. One option is not a choice; three dilutes the pivot.
            if (!isArr(opts) || opts.length !== 2) {
              push(`${bp}.options must be exactly 2`);
              break;
            }
            const outcomes = opts.map((o) => (o as { outcome?: unknown }).outcome);
            opts.forEach((o, oi) => {
              const oo = o as Record<string, unknown>;
              for (const f of ['fr', 'en']) if (!isStr(oo[f])) push(`${bp}.options[${oi}].${f} is required`);
              if (oo.outcome !== 'works' && oo.outcome !== 'breaks') {
                push(`${bp}.options[${oi}].outcome must be 'works' or 'breaks'`);
              }
            });
            if (!outcomes.includes('works') || !outcomes.includes('breaks')) {
              push(`${bp}.options must offer one 'works' and one 'breaks'`);
            }
            break;
          }
          case 'break': {
            breaks++;
            for (const f of ['heading', 'body']) if (!isStr(bb[f])) push(`${bp}.${f} is required`);
            for (const side of ['wrong', 'right'] as const) {
              const v = bb[side] as Record<string, unknown> | undefined;
              if (typeof v !== 'object' || v === null) {
                push(`${bp}.${side} is required`);
                continue;
              }
              for (const f of ['fr', 'ipa', 'en']) if (!isStr(v[f])) push(`${bp}.${side}.${f} is required`);
            }
            break;
          }
          default:
            push(`${bp}.kind must be narration | bubble | choice | break | resolve`);
        }
      });
      // The choice sets up the failure and the break explains it. A choice
      // with no break leaves the learner committed to an answer and never
      // told why it was wrong, which is the one thing the scene exists for.
      if (choices > 0 && breaks === 0) push('a scene with a choice beat must also carry a break beat');
      break;
    }
    case 'inhibitionDrill': {
      if (sec.intro !== undefined && !isStr(sec.intro)) push('intro must be a non-empty string when present');
      const targets = sec.targets;
      if (!isArr(targets) || targets.length === 0) {
        push('targets must be a non-empty array');
        break;
      }
      targets.forEach((t, i) => {
        if (typeof t !== 'object' || t === null) {
          push(`targets[${i}] is not an object`);
          return;
        }
        const tt = t as Partial<InhibitionTarget>;
        if (!isStr(tt.label)) push(`targets[${i}].label is required`);
        if (tt.sub !== undefined && !isStr(tt.sub)) push(`targets[${i}].sub must be a non-empty string when present`);
        if (!isArr(tt.steps) || tt.steps.length === 0 || tt.steps.some((s2) => !isStr(s2))) {
          push(`targets[${i}].steps must be a non-empty array of strings`);
        }
        // The drill is scored against real corpus words, exactly like a
        // practice section — an unresolvable id is a drill that cannot run.
        if (!isArr(tt.practiceOn) || tt.practiceOn.length === 0) {
          push(`targets[${i}].practiceOn must be a non-empty array`);
        } else {
          tt.practiceOn.forEach((id, j) => {
            if (!isStr(id) || !ITEM_ID_RE.test(id)) push(`targets[${i}].practiceOn[${j}] "${String(id)}" is not a valid item id`);
          });
        }
        if (tt.mic !== undefined && typeof tt.mic !== 'boolean') push(`targets[${i}].mic must be a boolean`);
      });
      break;
    }
    case 'cardDeck': {
      if (sec.hint !== undefined && !isStr(sec.hint)) push('hint must be a non-empty string when present');
      const cards = sec.cards;
      if (!isArr(cards) || cards.length === 0) {
        push('cards must be a non-empty array');
        break;
      }
      cards.forEach((c, i) => {
        if (typeof c !== 'object' || c === null) {
          push(`cards[${i}] is not an object`);
          return;
        }
        const d = c as Partial<DeckCard>;
        for (const f of ['label', 'head', 'fr', 'sub', 'body'] as const) {
          if (d[f] !== undefined && !isStr(d[f])) push(`cards[${i}].${f} must be a non-empty string when present`);
        }
        if (d.imageRef !== undefined && (!isStr(d.imageRef) || !IMAGE_REF_RE.test(d.imageRef))) {
          push(`cards[${i}].imageRef must be a storage-relative asset path`);
        }
        // A card with no head, no French line and no body renders as an empty
        // rectangle the learner swipes past wondering what broke.
        if (!isStr(d.head) && !isStr(d.fr) && !isStr(d.body)) {
          push(`cards[${i}] must carry at least one of head, fr, body`);
        }
      });
      break;
    }
    case 'tapTable': {
      const cols = sec.cols;
      const rows = sec.rows;
      if (!isArr(cols) || cols.length === 0 || cols.some((c) => !isStr(c))) {
        push('cols must be a non-empty array of strings');
      }
      if (!isArr(rows) || rows.length === 0) {
        push('rows must be a non-empty array');
        break;
      }
      rows.forEach((r, i) => {
        if (typeof r !== 'object' || r === null) {
          push(`rows[${i}] is not an object`);
          return;
        }
        const row = r as Partial<TapRow>;
        if (!isArr(row.cells) || row.cells.some((c) => typeof c !== 'string')) {
          push(`rows[${i}].cells must be an array of strings`);
        } else if (isArr(cols) && row.cells.length !== cols.length) {
          // Same ragged-table rule as 'table': misalignment reads as a bug.
          push(`rows[${i}] has ${row.cells.length} cells but there are ${cols.length} cols`);
        }
        if (row.say !== undefined && !isStr(row.say)) push(`rows[${i}].say must be a non-empty string when present`);
        if (row.detail !== undefined) {
          const d = row.detail as Partial<NonNullable<TapRow['detail']>>;
          if (typeof d !== 'object' || d === null) push(`rows[${i}].detail must be an object`);
          else {
            if (!isStr(d.title)) push(`rows[${i}].detail.title is required`);
            if (!isStr(d.body)) push(`rows[${i}].detail.body is required`);
            if (d.say !== undefined && !isStr(d.say)) push(`rows[${i}].detail.say must be a non-empty string when present`);
          }
        }
      });
      break;
    }
    case 'vocabThemes': {
      const themes = sec.themes;
      if (!isArr(themes) || themes.length === 0) {
        push('themes must be a non-empty array');
        break;
      }
      themes.forEach((th, i) => {
        if (typeof th !== 'object' || th === null) {
          push(`themes[${i}] is not an object`);
          return;
        }
        const v2 = th as Partial<VocabTheme>;
        if (!isStr(v2.title)) push(`themes[${i}].title is required`);
        if (v2.imageRef !== undefined && (!isStr(v2.imageRef) || !IMAGE_REF_RE.test(v2.imageRef))) {
          push(`themes[${i}].imageRef must be a storage-relative asset path`);
        }
        if (!isArr(v2.cards) || v2.cards.length === 0) {
          push(`themes[${i}].cards must be a non-empty array`);
          return;
        }
        v2.cards.forEach((c, j) => {
          const card = c as Partial<{ fr: string; sub: string; en: string }>;
          if (typeof c !== 'object' || c === null || !isStr(card.fr) || !isStr(card.en)) {
            push(`themes[${i}].cards[${j}] must be { fr, en } strings`);
          } else if (card.sub !== undefined && !isStr(card.sub)) {
            push(`themes[${i}].cards[${j}].sub must be a non-empty string when present`);
          }
        });
      });
      break;
    }
    case 'flashcards': {
      const cards = sec.cards;
      if (!isArr(cards) || cards.length === 0) {
        push('cards must be a non-empty array');
        break;
      }
      cards.forEach((c, i) => {
        const card = c as Partial<{ front: string; back: string; say: string }>;
        if (typeof c !== 'object' || c === null || !isStr(card.front) || !isStr(card.back)) {
          push(`cards[${i}] must be { front, back } strings`);
        } else if (card.say !== undefined && !isStr(card.say)) {
          push(`cards[${i}].say must be a non-empty string when present`);
        }
      });
      break;
    }
    case 'roundup': {
      if (!isStr(sec.body)) push('body is required');
      strList('points');
      break;
    }

    // ── Mission-journey sections (Sons v2 rebuild) ──────────────────────
    case 'story': {
      if (!isStr(sec.setting)) push('setting is required');
      const bubbles = sec.bubbles;
      if (!isArr(bubbles) || bubbles.length === 0) {
        push('bubbles must be a non-empty array');
      } else {
        bubbles.forEach((b, i) => {
          if (typeof b !== 'object' || b === null) {
            push(`bubbles[${i}] is not an object`);
            return;
          }
          const bb = b as { from?: unknown; fr?: unknown; en?: unknown; warn?: unknown };
          if (!oneOf(['coach', 'user', 'narrator'] as const, bb.from)) {
            push(`bubbles[${i}].from must be coach | user | narrator`);
          }
          if (!isStr(bb.fr)) push(`bubbles[${i}].fr is required`);
          if (!isStr(bb.en)) push(`bubbles[${i}].en is required`);
          if (bb.warn !== undefined && !isStr(bb.warn)) push(`bubbles[${i}].warn must be a non-empty string when present`);
        });
      }
      const closing = sec.closing;
      if (typeof closing !== 'object' || closing === null) push('closing is required');
      else {
        const c = closing as { fr?: unknown; en?: unknown };
        if (!isStr(c.fr)) push('closing.fr is required');
        if (!isStr(c.en)) push('closing.en is required');
      }
      break;
    }
    case 'goals':
      objList('goals', ['t', 's']);
      break;
    case 'soundGrid': {
      const sounds = sec.sounds;
      if (!isArr(sounds) || sounds.length === 0) {
        push('sounds must be a non-empty array');
        break;
      }
      sounds.forEach((s2, i) => {
        if (typeof s2 !== 'object' || s2 === null) {
          push(`sounds[${i}] is not an object`);
          return;
        }
        const g = s2 as Partial<GridSound>;
        if (!isArr(g.graphemes) || g.graphemes.length === 0 || g.graphemes.some((x) => typeof x !== 'string' || !x)) {
          push(`sounds[${i}].graphemes must be a non-empty array of strings`);
        }
        for (const f of ['ipa', 'anchor', 'sound', 'ex'] as const) {
          if (!isStr(g[f])) push(`sounds[${i}].${f} is required`);
        }
        for (const f of ['exNote', 'memo'] as const) {
          if (g[f] !== undefined && !isStr(g[f])) push(`sounds[${i}].${f} must be a non-empty string when present`);
        }
        if (g.trap !== undefined && typeof g.trap !== 'boolean') push(`sounds[${i}].trap must be a boolean when present`);
      });
      break;
    }
    case 'groupDrill': {
      const groups = sec.groups;
      if (!isArr(groups) || groups.length === 0) {
        push('groups must be a non-empty array');
        break;
      }
      groups.forEach((gr, i) => {
        if (typeof gr !== 'object' || gr === null) {
          push(`groups[${i}] is not an object`);
          return;
        }
        const g = gr as Partial<SoundGroup>;
        if (!isStr(g.label)) push(`groups[${i}].label is required`);
        // A group carries words, a check, or both — but never neither, which
        // would render as an empty mission. At size xl sons.06 splits the two
        // halves onto separate pages (a word deck, then its control), so
        // requiring both here is what a split group legitimately breaks.
        const hasItems = isArr(g.items) && g.items.length > 0;
        const hasCheck = typeof g.check === 'object' && g.check !== null;
        if (!hasItems && !hasCheck) {
          push(`groups[${i}] must carry items, a check, or both`);
        }
        if (g.items !== undefined && !isArr(g.items)) {
          push(`groups[${i}].items must be an array when present`);
        } else if (hasItems) {
          g.items!.forEach((it, j) => {
            const row = it as { fr?: unknown; ipa?: unknown; note?: unknown };
            if (typeof it !== 'object' || it === null || !isStr(row.fr)) push(`groups[${i}].items[${j}].fr is required`);
            if (row.ipa !== undefined && !isStr(row.ipa)) push(`groups[${i}].items[${j}].ipa must be a non-empty string when present`);
            if (row.note !== undefined && !isStr(row.note)) push(`groups[${i}].items[${j}].note must be a non-empty string when present`);
          });
        }
        const chk = g.check as
          | { q?: unknown; opts?: unknown; correct?: unknown; why?: unknown }
          | undefined;
        // Absent is legal (a words-only page); malformed is not.
        if (chk !== undefined && (typeof chk !== 'object' || chk === null)) {
          push(`groups[${i}].check must be an object when present`);
        } else if (chk) {
          if (!isStr(chk.q)) push(`groups[${i}].check.q is required`);
          if (!isArr(chk.opts) || chk.opts.length < 2 || chk.opts.some((o) => !isStr(o))) {
            push(`groups[${i}].check.opts must be 2+ non-empty strings`);
          } else if (
            typeof chk.correct !== 'number' ||
            !Number.isInteger(chk.correct) ||
            chk.correct < 0 ||
            chk.correct >= chk.opts.length
          ) {
            push(`groups[${i}].check.correct must index opts (0..${chk.opts.length - 1})`);
          }
          // Optional, but an empty string is an authoring slip rather than an
          // intent to say nothing.
          if (chk.why !== undefined && !isStr(chk.why)) {
            push(`groups[${i}].check.why must be a non-empty string when present`);
          }
        }
      });
      break;
    }
    case 'trapDrill': {
      const cards = sec.cards;
      if (!isArr(cards) || cards.length === 0) {
        push('cards must be a non-empty array');
      } else {
        cards.forEach((c, i) => {
          if (typeof c !== 'object' || c === null) {
            push(`cards[${i}] is not an object`);
            return;
          }
          const t = c as Partial<TrapCard>;
          for (const f of ['promptLabel', 'promptSound', 'fr', 'ipa', 'tip'] as const) {
            if (!isStr(t[f])) push(`cards[${i}].${f} is required`);
          }
        });
      }
      const drill = sec.drill;
      if (!isArr(drill) || drill.length === 0) {
        push('drill must be a non-empty array');
      } else {
        drill.forEach((q, i) => {
          if (typeof q !== 'object' || q === null) {
            push(`drill[${i}] is not an object`);
            return;
          }
          const qq = q as { promptSay?: unknown; opts?: unknown; correct?: unknown };
          if (!isStr(qq.promptSay)) push(`drill[${i}].promptSay is required`);
          if (!isArr(qq.opts) || qq.opts.length < 2 || qq.opts.some((o) => !isStr(o))) {
            push(`drill[${i}].opts must be 2+ non-empty strings`);
          } else if (
            typeof qq.correct !== 'number' ||
            !Number.isInteger(qq.correct) ||
            qq.correct < 0 ||
            qq.correct >= qq.opts.length
          ) {
            push(`drill[${i}].correct must index opts (0..${qq.opts.length - 1})`);
          }
        });
      }
      // Optional: absent means the stacked render, which is what every
      // trapDrill authored before stepping existed still uses.
      const steps = (sec as { steps?: unknown }).steps;
      if (steps !== undefined) {
        if (!isArr(steps) || steps.length === 0) {
          push('steps, when present, must be a non-empty array');
        } else {
          steps.forEach((st, i) => {
            if (typeof st !== 'object' || st === null) {
              push(`steps[${i}] is not an object`);
              return;
            }
            const sp = st as Partial<TrapStep>;
            if (!isStr(sp.label)) push(`steps[${i}].label is required`);
            if (sp.title !== undefined && !isStr(sp.title)) push(`steps[${i}].title must be a string`);
            if (!isStr(sp.kind) || !(TRAP_STEP_KINDS as readonly string[]).includes(sp.kind)) {
              push(`steps[${i}].kind must be one of ${TRAP_STEP_KINDS.join(', ')}`);
              return;
            }
            // An audio step with nothing to play is a blank screen the learner
            // still has to swipe through.
            if (sp.kind === 'audio' && !(sec as { audio?: unknown }).audio) {
              push(`steps[${i}] is an audio step but the section declares no audio`);
            }
            // Same failure, same shape: a rule step with no rule is a blank
            // screen carrying the lesson's most important exception.
            if (sp.kind === 'rule') {
              const r = (sec as { rule?: { title?: unknown; body?: unknown } }).rule;
              if (!r || !isStr(r.title) || !isStr(r.body)) {
                push(`steps[${i}] is a rule step but the section declares no rule {title, body}`);
              }
            }
            if (sp.gate !== undefined) {
              if (typeof sp.gate !== 'boolean') push(`steps[${i}].gate must be a boolean`);
              else if (sp.gate && sp.kind !== 'drill') push(`steps[${i}].gate is only meaningful on a drill step`);
            }
          });
          // Stepping is a way of SHOWING the section's content, so every part
          // of it must be reachable: an unnamed slice would be authored,
          // validated, and then silently never rendered.
          for (const k of ['cards', 'drill'] as const) {
            if (!steps.some((st) => (st as Partial<TrapStep>)?.kind === k)) {
              push(`steps must include a '${k}' step, or ${k} would never render`);
            }
          }
          if ((sec as { audio?: unknown }).audio && !steps.some((st) => (st as Partial<TrapStep>)?.kind === 'audio')) {
            push("steps must include an 'audio' step, or the section's audio would never render");
          }
        }
      }
      break;
    }
    case 'pronunciationLab': {
      const sounds = sec.sounds;
      if (!isArr(sounds) || sounds.length === 0) {
        push('sounds must be a non-empty array');
        break;
      }
      sounds.forEach((s2, i) => {
        if (typeof s2 !== 'object' || s2 === null) {
          push(`sounds[${i}] is not an object`);
          return;
        }
        const l = s2 as Partial<LabSound>;
        for (const f of ['label', 'ipa', 'sub'] as const) {
          if (!isStr(l[f])) push(`sounds[${i}].${f} is required`);
        }
        if (!isArr(l.steps) || l.steps.length === 0 || l.steps.some((x) => typeof x !== 'string' || !x)) {
          push(`sounds[${i}].steps must be a non-empty array of strings`);
        }
        if (!isArr(l.itemIds) || l.itemIds.length === 0) {
          push(`sounds[${i}].itemIds must be a non-empty array`);
        } else {
          l.itemIds.forEach((id, j) => {
            if (!isStr(id) || !ITEM_ID_RE.test(id)) push(`sounds[${i}].itemIds[${j}] "${String(id)}" is not a valid item id`);
          });
        }
      });
      break;
    }
    case 'dictation': {
      const ids = sec.itemIds;
      if (!isArr(ids) || ids.length === 0) {
        push('itemIds must be a non-empty array');
      } else {
        ids.forEach((id, i) => {
          if (!isStr(id) || !ITEM_ID_RE.test(id)) push(`itemIds[${i}] "${String(id)}" is not a valid item id`);
        });
      }
      break;
    }
    case 'scenario': {
      if (!isStr(sec.setting)) push('setting is required');
      const turns = sec.turns;
      if (!isArr(turns) || turns.length === 0) {
        push('turns must be a non-empty array');
        break;
      }
      turns.forEach((t, i) => pushTurnIssues(t, i, push));
      break;
    }
    case 'listening': {
      const lines = sec.lines;
      if (!isArr(lines) || lines.length === 0) {
        push('lines must be a non-empty array');
      } else {
        lines.forEach((l, i) => {
          const row = l as { fr?: unknown; en?: unknown };
          if (typeof l !== 'object' || l === null || !isStr(row.fr) || !isStr(row.en)) {
            push(`lines[${i}] must be { fr, en } strings`);
          }
        });
      }
      const qs = sec.questions;
      if (!isArr(qs) || qs.length === 0) {
        push('questions must be a non-empty array');
      } else {
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
            push(`questions[${i}].correct must index opts (0..${qq.opts.length - 1})`);
          }
        });
      }
      break;
    }
    case 'reading': {
      if (!isStr(sec.text)) push('text is required');
      if (sec.questions !== undefined) {
        const qs = sec.questions;
        if (!isArr(qs) || qs.length === 0) {
          push('questions must be a non-empty array when present');
        } else {
          qs.forEach((q, i) => {
            const row = q as { q?: unknown; a?: unknown };
            if (typeof q !== 'object' || q === null || !isStr(row.q) || !isStr(row.a)) {
              push(`questions[${i}] must be { q, a } strings`);
            }
          });
        }
      }
      break;
    }
    case 'reviewDeck': {
      const cards = sec.cards;
      if (!isArr(cards) || cards.length === 0) {
        push('cards must be a non-empty array');
        break;
      }
      cards.forEach((c, i) => {
        const card = c as Partial<{ front: string; back: string; say: string }>;
        if (typeof c !== 'object' || c === null || !isStr(card.front) || !isStr(card.back)) {
          push(`cards[${i}] must be { front, back } strings`);
        } else if (card.say !== undefined && !isStr(card.say)) {
          push(`cards[${i}].say must be a non-empty string when present`);
        }
      });
      break;
    }
    case 'progressCheck': {
      if (!isStr(sec.body)) push('body is required');
      objList('stats', ['k', 'v']);
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

  // Type-when-present, as on Item: the shipped lessons have no grammar spine.
  for (const k of ['grammarAssumed', 'grammarIntroduced'] as const) {
    const v2 = l[k];
    if (v2 !== undefined) {
      if (!isArr(v2)) push(`${k} must be an array when present`);
      else if (v2.some((g) => !isStr(g))) push(`${k} must all be non-empty strings`);
    }
  }

  if (l.features !== undefined) {
    if (!isArr(l.features)) push('features must be an array when present');
    else {
      l.features.forEach((f, i) => {
        if (!oneOf(LESSON_FEATURES, f)) push(`features[${i}] "${String(f)}" must be one of ${LESSON_FEATURES.join(' | ')}`);
      });
      // A repeated feature is a doubled Den entry point for the same thing.
      if (new Set(l.features).size !== l.features.length) push('features must not repeat');
    }
  }
  if (l.scenarioId !== undefined) {
    if (!isStr(l.scenarioId) || !SCENARIO_ID_RE.test(l.scenarioId)) {
      push(`scenarioId "${String(l.scenarioId)}" is not a valid scenario id`);
    }
  }
  if (l.narration !== undefined) {
    out.push(...validateNarration(l.narration, `${path}.narration`));
  }
  if (l.skill !== undefined && !oneOf(EXAM_SKILLS, l.skill)) {
    push(`skill must be one of ${EXAM_SKILLS.join(' | ')} when present`);
  }
  if (l.provenance !== undefined) out.push(...validateProvenance(l.provenance, `${path}.provenance`));

  // The den overview block: optional as a whole, strict when present — the
  // overview page renders it verbatim and hides only what is absent.
  if (l.overview !== undefined) {
    const o = l.overview as Partial<NonNullable<Lesson['overview']>>;
    if (typeof o !== 'object' || o === null) push('overview must be an object');
    else {
      if (!isStr(o.titleEn)) push('overview.titleEn is required');
      if (!isStr(o.introFr)) push('overview.introFr is required');
      if (o.subFr !== undefined && !isStr(o.subFr)) push('overview.subFr must be a non-empty string when present');
      if (o.glyph !== undefined && !isStr(o.glyph)) push('overview.glyph must be a non-empty string when present');
      if (typeof o.minutes !== 'number' || !Number.isInteger(o.minutes) || o.minutes < 1 || o.minutes > 180) {
        push('overview.minutes must be an integer between 1 and 180');
      }
      if (typeof o.difficulty !== 'number' || !Number.isInteger(o.difficulty) || o.difficulty < 1 || o.difficulty > 5) {
        push('overview.difficulty must be an integer between 1 and 5');
      }
      if (o.screens !== undefined && (typeof o.screens !== 'number' || !Number.isInteger(o.screens) || o.screens < 1)) {
        push('overview.screens must be a positive integer when present');
      }
    }
  }

  // ── Lesson Architecture v2 ──────────────────────────────────────────────
  //
  // Every join below is checked because each one fails SILENTLY at runtime: an
  // act naming a section that does not exist renders an empty checkpoint, a
  // trigger naming a missing drill fires nothing, and a tranche naming an item
  // outside the lesson releases a card the learner was never taught.

  const sectionIds = new Set(
    (isArr(l.sections) ? l.sections : [])
      .map((s) => (s as SectionExtras).id)
      .filter(isStr)
  );

  if (l.acts !== undefined) {
    if (!isArr(l.acts) || l.acts.length === 0) push('acts must be a non-empty array when present');
    else {
      const seen = new Set<string>();
      l.acts.forEach((a, i) => {
        const ap = `acts[${i}]`;
        if (typeof a !== 'object' || a === null) {
          push(`${ap} is not an object`);
          return;
        }
        const act = a as Partial<LessonAct>;
        if (!isStr(act.id)) push(`${ap}.id is required`);
        else if (seen.has(act.id)) push(`${ap}.id "${act.id}" is duplicated`);
        else seen.add(act.id);
        if (!isStr(act.title)) push(`${ap}.title is required`);
        if (!isStr(act.milestone)) push(`${ap}.milestone is required`);
        if (typeof act.estScreens !== 'number' || !Number.isInteger(act.estScreens) || act.estScreens < 1) {
          push(`${ap}.estScreens must be a positive integer`);
        }
        if (!isArr(act.sections) || act.sections.length === 0) push(`${ap}.sections must be a non-empty array`);
        else {
          act.sections.forEach((sid, j) => {
            if (!isStr(sid)) push(`${ap}.sections[${j}] must be a string`);
            else if (sectionIds.size > 0 && !sectionIds.has(sid)) {
              push(`${ap}.sections[${j}] "${sid}" does not name a section in this lesson`);
            }
          });
        }
        if (act.restPoints !== undefined) {
          if (!isArr(act.restPoints)) push(`${ap}.restPoints must be an array when present`);
          else {
            act.restPoints.forEach((rp, j) => {
              if (!isStr(rp)) {
                push(`${ap}.restPoints[${j}] must be a string`);
                return;
              }
              // 'sectionId' or 'sectionId/marker' — the section half must exist.
              const head = rp.split('/')[0];
              if (sectionIds.size > 0 && !sectionIds.has(head)) {
                push(`${ap}.restPoints[${j}] "${rp}" does not start from a section in this lesson`);
              }
            });
          }
        }
      });

      // Every section belongs to exactly one act, or the lesson has stretches
      // with no checkpoint and a learner who leaves there resumes nowhere.
      const claimed = new Set(l.acts.flatMap((a) => ((a as Partial<LessonAct>).sections ?? []).filter(isStr)));
      for (const sid of sectionIds) {
        if (!claimed.has(sid)) push(`section "${sid}" is not claimed by any act`);
      }
    }
  }

  if (l.reframe !== undefined && !isStr(l.reframe)) push('reframe must be a non-empty string when present');

  const drillIds = new Set(
    (isArr(l.drills) ? l.drills : []).map((d) => (d as Partial<LessonDrill>).id).filter(isStr)
  );

  if (l.drills !== undefined) {
    if (!isArr(l.drills)) push('drills must be an array when present');
    else {
      l.drills.forEach((d, i) => {
        const dp = `drills[${i}]`;
        if (typeof d !== 'object' || d === null) {
          push(`${dp} is not an object`);
          return;
        }
        const dr = d as Partial<LessonDrill>;
        if (!isStr(dr.id)) push(`${dp}.id is required`);
        if (!isStr(dr.title)) push(`${dp}.title is required`);
        if (isArr(dr.items)) {
          dr.items.forEach((id, j) => {
            if (!isStr(id) || !ITEM_ID_RE.test(id)) push(`${dp}.items[${j}] "${String(id)}" is not a valid item id`);
          });
        }
        if (isArr(dr.opts) && typeof dr.correct === 'number') {
          if (dr.correct < 0 || dr.correct >= dr.opts.length) {
            push(`${dp}.correct must index opts (0..${dr.opts.length - 1})`);
          }
        }
      });
    }
  }

  if (l.errorTriggers !== undefined) {
    if (!isArr(l.errorTriggers)) push('errorTriggers must be an array when present');
    else {
      l.errorTriggers.forEach((t, i) => {
        const tp = `errorTriggers[${i}]`;
        if (typeof t !== 'object' || t === null) {
          push(`${tp} is not an object`);
          return;
        }
        const tr = t as Partial<ErrorTrigger>;
        if (!isStr(tr.id)) push(`${tp}.id is required`);
        if (!isStr(tr.description)) push(`${tp}.description is required`);
        if (!isArr(tr.detectOn) || tr.detectOn.length === 0) push(`${tp}.detectOn must be a non-empty array`);
        // A trigger whose drill does not exist detects a mistake and then does
        // nothing about it, which is worse than not detecting it.
        if (!isStr(tr.drill)) push(`${tp}.drill is required`);
        else if (drillIds.size > 0 && !drillIds.has(tr.drill)) {
          push(`${tp}.drill "${tr.drill}" does not name a drill in this lesson`);
        }
        if (tr.retest !== undefined) {
          if (!isStr(tr.retest)) push(`${tp}.retest must be a non-empty string when present`);
          else if (drillIds.size > 0 && !drillIds.has(tr.retest)) {
            push(`${tp}.retest "${tr.retest}" does not name a drill in this lesson`);
          }
        }
      });
    }
  }

  if (l.sheets !== undefined) {
    if (!isArr(l.sheets)) push('sheets must be an array when present');
    else {
      const sheetIds = new Set<string>();
      l.sheets.forEach((sh, i) => {
        const sp = `sheets[${i}]`;
        if (typeof sh !== 'object' || sh === null) {
          push(`${sp} is not an object`);
          return;
        }
        const s2 = sh as Partial<ReferenceSheet>;
        if (!isStr(s2.id)) push(`${sp}.id is required`);
        else if (sheetIds.has(s2.id)) push(`${sp}.id "${s2.id}" is duplicated`);
        else sheetIds.add(s2.id);
        if (!isStr(s2.title)) push(`${sp}.title is required`);
        if (s2.sections !== undefined) {
          if (!isArr(s2.sections)) push(`${sp}.sections must be an array when present`);
          else s2.sections.forEach((x, j) => out.push(...validateSection(x, `${path}.${sp}.sections[${j}]`)));
        }
      });
      // A section previewing a sheet that was never written sends the learner
      // to a dead link from a persistent header button.
      for (const s3 of isArr(l.sections) ? l.sections : []) {
        const ref = (s3 as SectionExtras).sheetId;
        if (isStr(ref) && !sheetIds.has(ref)) {
          push(`section "${(s3 as SectionExtras).id ?? '?'}" names sheetId "${ref}" with no such sheet`);
        }
      }
    }
  }

  if (l.deckTranche !== undefined) {
    if (!isArr(l.deckTranche)) push('deckTranche must be an array when present');
    else {
      const own = new Set(isArr(l.itemIds) ? l.itemIds.filter(isStr) : []);
      // One tranche per act: the whole point is that cards are released AT a
      // checkpoint, so a mismatch means some act releases nothing or a tranche
      // never fires at all.
      if (isArr(l.acts) && l.deckTranche.length !== l.acts.length) {
        push(`deckTranche has ${l.deckTranche.length} slices but there are ${l.acts.length} acts — one per act`);
      }
      l.deckTranche.forEach((slice, i) => {
        if (!isArr(slice)) {
          push(`deckTranche[${i}] must be an array of item ids`);
          return;
        }
        slice.forEach((id, j) => {
          if (!isStr(id) || !ITEM_ID_RE.test(id)) push(`deckTranche[${i}][${j}] "${String(id)}" is not a valid item id`);
          else if (own.size > 0 && !own.has(id)) {
            push(`deckTranche[${i}][${j}] "${id}" is not in this lesson's itemIds — it would release a card never taught`);
          }
        });
      });
    }
  }

  if (l.terms !== undefined) {
    if (typeof l.terms !== 'object' || l.terms === null) push('terms must be an object when present');
    else {
      for (const [k, v] of Object.entries(l.terms)) {
        const tp = `terms.${k}`;
        const tv = v as Partial<LessonTerm>;
        if (typeof tv !== 'object' || tv === null) {
          push(`${tp} is not an object`);
          continue;
        }
        for (const f of ['term', 'title', 'body'] as const) {
          if (!isStr(tv[f])) push(`${tp}.${f} is required`);
        }
        for (const [i, ex] of (isArr(tv.examples) ? tv.examples : []).entries()) {
          const id = (ex as { itemId?: unknown })?.itemId;
          if (!isStr(id) || !ITEM_ID_RE.test(id)) push(`${tp}.examples[${i}].itemId "${String(id)}" is not a valid item id`);
        }
      }
    }
    // A section naming a term the lesson never defined shows an empty chip.
    const known = new Set(Object.keys(l.terms as object));
    for (const s of isArr(l.sections) ? l.sections : []) {
      for (const key of (s as SectionExtras).terms ?? []) {
        if (!known.has(key)) push(`section "${(s as SectionExtras).id ?? '?'}" names undefined term "${key}"`);
      }
    }
  }

  if (l.audio !== undefined) {
    const a = l.audio as Partial<LessonAudio>;
    if (typeof a !== 'object' || a === null) push('audio must be an object when present');
    else if (a.recorded !== undefined) {
      if (!isArr(a.recorded)) push('audio.recorded must be an array when present');
      else {
        const recIds = new Set<string>();
        a.recorded.forEach((r, i) => {
          if (typeof r !== 'object' || r === null) {
            push(`audio.recorded[${i}] is not an object`);
            return;
          }
          const rr = r as { id?: unknown; desc?: unknown };
          if (!isStr(rr.id)) push(`audio.recorded[${i}].id is required`);
          else if (recIds.has(rr.id)) push(`audio.recorded[${i}].id "${rr.id}" is duplicated`);
          else recIds.add(rr.id);
          // The description IS the brief handed to the voice engineer, so an
          // empty one means the recording cannot actually be produced.
          if (!isStr(rr.desc)) push(`audio.recorded[${i}].desc is required — it is the studio's brief`);
        });
      }
    }
  }

  return out;
}

export function validateUnit(v: unknown, path = 'unit'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const u = v as Partial<Unit>;

  if (!isStr(u.id)) push('id is required');
  else if (!UNIT_ID_RE.test(u.id)) push(`id "${u.id}" must match <level>.<nn>`);

  // The id carries the band; track and level are both optional restatements of
  // it. Each is checked only when present, and only for AGREEMENT — a unit that
  // says one band in its id and another in a field is filed in one place and
  // linked from another, and there is no way to tell which was meant.
  const band = isStr(u.id) && UNIT_ID_RE.test(u.id) ? u.id.split('.')[0] : null;

  if (u.track !== undefined) {
    if (!oneOf(TRACKS, u.track)) push(`track must be one of ${TRACKS.join(' | ')}`);
    else if (band && band !== u.track) push(`id band "${band}" disagrees with track "${u.track}"`);
  }
  if (u.level !== undefined) {
    if (!oneOf(LEVELS, u.level)) push(`level must be one of ${LEVELS.join(' | ')}`);
    else if (band && band !== u.level) push(`id band "${band}" disagrees with level "${u.level}"`);
  }
  // A unit in a Den band must say which column it is in, or it is authored,
  // published, and rendered by nothing: unitsInTrack() filters on `track`, so a
  // trackless sons/a1/a2 unit silently vanishes from the only screen that shows
  // it. Past a2 there is no column to belong to, so absence is correct there.
  if (band && (TRACKS as readonly string[]).includes(band) && u.track === undefined) {
    push(`unit "${u.id}" is in Den band "${band}" but has no track — it would render in no column`);
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

  // The spine fields: type-when-present, like `level` above. Requiring them
  // would invalidate every unit on phones today; the publish gate is where
  // presence is enforced once the backfill lands.
  if (u.canDo !== undefined && !isStr(u.canDo)) push('canDo must be a non-empty string when present');
  if (u.themes !== undefined) {
    if (!isArr(u.themes)) push('themes must be an array when present');
    else u.themes.forEach((t, i) => {
      if (!isStr(t) || !THEME_RE.test(t)) push(`themes[${i}] "${String(t)}" is not a valid theme slug`);
    });
  }
  if (u.prereqUnitIds !== undefined) {
    if (!isArr(u.prereqUnitIds)) push('prereqUnitIds must be an array when present');
    else u.prereqUnitIds.forEach((id, i) => {
      if (!isStr(id) || !UNIT_ID_RE.test(id)) push(`prereqUnitIds[${i}] "${String(id)}" is not a valid unit id`);
      else if (id === u.id) push(`prereqUnitIds[${i}] — a unit cannot be its own prerequisite`);
    });
  }

  return out;
}

/**
 * One dialogue turn, checked identically wherever it appears.
 *
 * It appears in two places — a corpus `Scenario.turns` and a lesson's inline
 * `scenario` section — and those two had drifted into separate copies of the
 * same three `isStr` lines. Adding `userEn`/`alts` to one copy and not the
 * other would have meant a lesson could ship a malformed alternative that the
 * standalone role play would have rejected, so the check is written once.
 */
function pushTurnIssues(t: unknown, i: number, push: (m: string) => void): void {
  if (typeof t !== 'object' || t === null) {
    push(`turns[${i}] is not an object`);
    return;
  }
  const tt = t as Partial<ScenarioTurn>;
  if (!isStr(tt.ai)) push(`turns[${i}].ai is required`);
  if (!isStr(tt.en)) push(`turns[${i}].en is required`);
  if (!isStr(tt.user)) push(`turns[${i}].user is required`);
  if (tt.userEn !== undefined && !isStr(tt.userEn)) push(`turns[${i}].userEn must be a string`);
  if (tt.alts !== undefined) {
    if (!isArr(tt.alts)) {
      push(`turns[${i}].alts must be an array`);
    } else {
      tt.alts.forEach((a, j) => {
        const alt = a as Partial<{ fr: string; en: string }>;
        if (typeof a !== 'object' || a === null || !isStr(alt.fr) || !isStr(alt.en)) {
          push(`turns[${i}].alts[${j}] must be { fr, en } strings`);
          return;
        }
        // An "alternative" identical to the model teaches nothing — the reveal
        // would show the same sentence twice and claim they were two ways to
        // say it. Compared loosely so casing and spacing cannot smuggle one in.
        if (isStr(tt.user) && loose(alt.fr) === loose(tt.user)) {
          push(`turns[${i}].alts[${j}] repeats the model line`);
        }
      });
    }
  }
}

/** Casing/spacing/punctuation-insensitive compare, for "is this the same line". */
function loose(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
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
  if (s.exam !== undefined) {
    const e = s.exam as Partial<{ format: unknown; taskId: unknown }>;
    if (!oneOf(EXAM_FORMATS, e.format)) push(`exam.format must be one of ${EXAM_FORMATS.join(' | ')}`);
    if (!isStr(e.taskId) || !EXAM_TASK_ID_RE.test(e.taskId)) push('exam.taskId is not a valid exam task id');
    // Resolving taskId against corpus.examTasks and checking it is a po_* task
    // needs the exam task set, which this function does not have — done in
    // validateCorpus alongside the rest of the exam referential integrity.
  }
  if (s.provenance !== undefined) out.push(...validateProvenance(s.provenance, `${path}.provenance`));

  if (!isArr(s.turns)) push('turns must be an array');
  else if (s.turns.length === 0) push('turns must not be empty — a scenario with no dialogue is nothing');
  else {
    s.turns.forEach((t, i) => pushTurnIssues(t, i, push));
  }

  return out;
}

/** Where a band sits in LEVELS. -1 if it is not a band we author. */
const bandIndex = (v: unknown): number =>
  typeof v === 'string' ? (LEVELS as readonly string[]).indexOf(v) : -1;

export function validateDomain(v: unknown, path = 'domain'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const d = v as Partial<Domain>;

  if (!isStr(d.slug)) push('slug is required');
  else if (!DOMAIN_RE.test(d.slug)) push(`slug "${d.slug}" must be a lowercase slug`);
  if (!isStr(d.title)) push('title is required');
  if (typeof d.order !== 'number' || !Number.isInteger(d.order)) push('order must be an integer');

  return out;
}

export function validateTheme(v: unknown, path = 'theme'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const t = v as Partial<Theme>;

  if (!isStr(t.slug)) push('slug is required');
  else if (!THEME_RE.test(t.slug)) push(`slug "${t.slug}" must be a lowercase slug`);
  if (!isStr(t.title)) push('title is required');
  if (!isStr(t.domain)) push('domain is required');
  else if (!DOMAIN_RE.test(t.domain)) push(`domain "${t.domain}" must be a lowercase slug`);

  if (!isArr(t.levelRange) || t.levelRange.length !== 2) {
    push('levelRange must be a [from, to] pair');
  } else {
    const [from, to] = t.levelRange;
    const lo = bandIndex(from);
    const hi = bandIndex(to);
    if (lo < 0) push(`levelRange[0] "${String(from)}" must be one of ${LEVELS.join(' | ')}`);
    if (hi < 0) push(`levelRange[1] "${String(to)}" must be one of ${LEVELS.join(' | ')}`);
    // An inverted range is not a range: it selects nothing. The theme sits in the
    // catalogue looking authored, and every reader that treats it as "from..to"
    // skips it forever, without erroring.
    if (lo >= 0 && hi >= 0 && lo > hi) {
      push(`levelRange is inverted: "${String(from)}" comes after "${String(to)}"`);
    }
  }

  if (typeof t.examFlag !== 'boolean') push('examFlag must be a boolean');
  if (typeof t.immigFlag !== 'boolean') push('immigFlag must be a boolean');

  if (!isArr(t.subThemes)) push('subThemes must be an array (use [] for none)');
  else if (t.subThemes.some((s) => !isStr(s))) push('subThemes must all be non-empty strings');

  return out;
}

export function validatePack(v: unknown, path = 'pack'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const p = v as Partial<Pack>;

  if (!isStr(p.id)) push('id is required');
  else if (!PACK_ID_RE.test(p.id)) push(`id "${p.id}" must match pack.<level>.<theme>`);

  if (!oneOf(LEVELS, p.level)) push(`level must be one of ${LEVELS.join(' | ')}`);
  if (!isStr(p.theme)) push('theme is required');
  else if (!THEME_RE.test(p.theme)) push(`theme "${p.theme}" must be a lowercase slug`);

  // Same rule as Item: the id encodes level and theme, so a disagreement means
  // one of them is a lie and there is no way to tell which. Refuse both. This
  // matters more for a Pack than an Item, because a pack's items are found by
  // filtering on (level, theme) — a pack whose id says a1 and whose fields say
  // a2 collects a different set of items than its name claims.
  if (isStr(p.id) && PACK_ID_RE.test(p.id)) {
    const [, lvl, theme] = p.id.split('.');
    if (p.level && lvl !== p.level) push(`id level "${lvl}" disagrees with level "${p.level}"`);
    if (p.theme && theme !== p.theme) push(`id theme "${theme}" disagrees with theme "${p.theme}"`);
  }

  if (p.provenance !== undefined) out.push(...validateProvenance(p.provenance, `${path}.provenance`));
  if (!isStr(p.goal)) push('goal is required — a pack with no can-do has no definition of done');
  if (!oneOf(CONTENT_STATUSES, p.status)) push(`status must be one of ${CONTENT_STATUSES.join(' | ')}`);

  if (typeof p.modeTargets !== 'object' || p.modeTargets === null || isArr(p.modeTargets)) {
    push('modeTargets must be an object (use {} for none)');
  } else {
    for (const [k, n] of Object.entries(p.modeTargets)) {
      // A target for a drill that does not exist is a target nothing will ever
      // meet, so the pack can never be finished and nothing says why.
      if (!oneOf(DRILL_KINDS, k)) push(`modeTargets has unknown drill "${k}"`);
      if (typeof n !== 'number' || !Number.isInteger(n) || n < 1) {
        // Not >= 0: a target of 0 is what `absent` already means, and having two
        // ways to say it invites code that treats them differently.
        push(`modeTargets.${k} must be an integer >= 1 (omit the key for "not wanted")`);
      }
    }
  }

  return out;
}

/** Shared with the quiz section: an out-of-range `correct` makes every option
 *  score wrong, so the candidate is told they failed whatever they picked. */
function validateQcm(v: unknown, path: string, requireBand = false): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (!isArr(v) || v.length === 0) return [{ path, message: 'items must be a non-empty array' }];

  v.forEach((q, i) => {
    if (typeof q !== 'object' || q === null) {
      push(`items[${i}] is not an object`);
      return;
    }
    const qq = q as Partial<QcmItem>;
    if (!isStr(qq.q)) push(`items[${i}].q is required`);
    if (!isArr(qq.opts) || qq.opts.length < 2 || qq.opts.some((o) => !isStr(o))) {
      push(`items[${i}].opts must be 2+ non-empty strings`);
    } else if (
      typeof qq.correct !== 'number' ||
      !Number.isInteger(qq.correct) ||
      qq.correct < 0 ||
      qq.correct >= qq.opts.length
    ) {
      push(`items[${i}].correct must index opts (0..${qq.opts.length - 1})`);
    }
    // Per-item band. Optional everywhere except tcf_canada, where the épreuve
    // IS a ramp and an untagged item cannot be placed on it — see QcmItem.band.
    if (qq.band !== undefined && !oneOf(SCORE_BANDS, qq.band)) {
      push(`items[${i}].band must be one of ${SCORE_BANDS.join(' | ')} when present`);
    } else if (requireBand && qq.band === undefined) {
      push(`items[${i}].band is required on tcf_canada — the épreuve is a ramp and an untagged item has no place on it`);
    }
  });
  return out;
}

function validateRubric(v: unknown, path: string): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null || isArr(v)) return [{ path, message: 'rubric must be an object' }];
  const r = v as Partial<Rubric>;

  if (!isArr(r.criteria) || r.criteria.length === 0) {
    push('rubric.criteria must be a non-empty array — a rubric with no criteria scores nothing');
    return out;
  }
  const keys = new Set<string>();
  r.criteria.forEach((c, i) => {
    if (typeof c !== 'object' || c === null) {
      push(`criteria[${i}] is not an object`);
      return;
    }
    const cc = c as Partial<RubricCriterion>;
    if (!isStr(cc.key)) push(`criteria[${i}].key is required`);
    else {
      // Two criteria under one key: whichever is applied last silently wins, and
      // the total quietly stops adding up to what the rubric says it does.
      if (keys.has(cc.key)) push(`criteria[${i}] duplicates key "${cc.key}"`);
      keys.add(cc.key);
    }
    if (!isStr(cc.label)) push(`criteria[${i}].label is required`);
    if (typeof cc.maxPoints !== 'number' || !Number.isInteger(cc.maxPoints) || cc.maxPoints < 1) {
      // A zero-point criterion cannot move the score. It is a thing the examiner
      // is asked to judge and then ignore, which wastes their attention on the
      // one task where attention is the whole product.
      push(`criteria[${i}].maxPoints must be an integer >= 1`);
    }
    if (cc.descriptors !== undefined) {
      if (!isArr(cc.descriptors)) push(`criteria[${i}].descriptors must be an array when present`);
      else if (cc.descriptors.some((d) => !isStr(d))) push(`criteria[${i}].descriptors must all be non-empty strings`);
    }
  });
  return out;
}

function validateExamParts(v: unknown, path: string, requireBand: boolean): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (!isArr(v) || v.length === 0) return [{ path, message: 'parts must be a non-empty array' }];

  v.forEach((p, i) => {
    if (typeof p !== 'object' || p === null || isArr(p)) {
      push(`parts[${i}] is not an object`);
      return;
    }
    const pp = p as Partial<ExamPart>;
    if (!isStr(pp.label)) push(`parts[${i}].label is required — it is what the candidate is told to look at`);
    if (pp.text !== undefined && !isStr(pp.text)) push(`parts[${i}].text must be a non-empty string when present`);

    if (pp.audioRef !== undefined && pp.audioRef !== null && !isStr(pp.audioRef)) {
      push(`parts[${i}].audioRef must be a string or null`);
    }
    if (pp.playCount !== undefined) {
      if (typeof pp.playCount !== 'number' || !Number.isInteger(pp.playCount) || pp.playCount < 1) {
        push(`parts[${i}].playCount must be an integer >= 1 when present — a part nobody may hear is not a listening item`);
      }
    }
    if (pp.readWindowS !== undefined) {
      if (typeof pp.readWindowS !== 'number' || !Number.isInteger(pp.readWindowS) || pp.readWindowS < 0) {
        push(`parts[${i}].readWindowS must be an integer >= 0 when present`);
      }
    }
    if (pp.durationS !== undefined) {
      if (typeof pp.durationS !== 'number' || !Number.isInteger(pp.durationS) || pp.durationS < 1) {
        push(`parts[${i}].durationS must be an integer >= 1 when present — a clip of no length is not a clip`);
      }
    }

    // A listening part with neither a clip nor a transcript can produce no
    // sound at all: audio.ts falls back to speaking `text`, and with both
    // absent the part is silent and unanswerable.
    if (pp.audioRef !== undefined && pp.audioRef !== null && !isStr(pp.text)) {
      push(`parts[${i}] has audioRef but no text — the transcript is what renders the clip and what the fallback speaks`);
    }

    if (pp.imageRef !== undefined && pp.imageRef !== null) {
      if (!isStr(pp.imageRef)) push(`parts[${i}].imageRef must be a string or null`);
      // UDL 01. An image with no alternative text is unusable to a screen
      // reader, and on a picture-answer block it is the whole question.
      if (!isStr(pp.imageAlt)) push(`parts[${i}] has imageRef but no imageAlt — an image with no alt text must not ship`);
    }

    out.push(...validateQcm(pp.items, `${path}[${i}].items`, requireBand));
  });

  return out;
}

function validateInterlocutorTurn(v: unknown, path: string, requireCues: boolean): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null || isArr(v)) return [{ path, message: 'not an object' }];
  const tn = v as Partial<InterlocutorTurn>;
  if (!isStr(tn.id)) push('id is required');
  if (!isStr(tn.text)) push('text is required — it is what the examiner says, and what gets rendered');
  if (tn.audioRef !== undefined && tn.audioRef !== null && !isStr(tn.audioRef)) push('audioRef must be a string or null');
  if (tn.durationS !== undefined && (typeof tn.durationS !== 'number' || tn.durationS < 1)) {
    push('durationS must be >= 1 when present');
  }
  if (requireCues) {
    if (!isArr(tn.cues) || tn.cues.length === 0 || tn.cues.some((c) => !isStr(c))) {
      push('an answer needs at least one cue, or nothing a candidate says can ever reach it');
    }
    if (!isStr(tn.covers)) {
      push('an answer needs `covers` — it is the coverage checklist the grader is shown');
    }
  }
  return out;
}

export function validateInterlocutor(v: unknown, path = 'interlocutor'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null || isArr(v)) return [{ path, message: 'not an object' }];
  const b = v as Partial<ExamInterlocutor>;

  out.push(...validateInterlocutorTurn(b.opening, `${path}.opening`, false));
  // The catch-all is what a real examiner does when asked something off their
  // sheet. Without it an unmatched question produces dead air.
  out.push(...validateInterlocutorTurn(b.catchAll, `${path}.catchAll`, false));
  out.push(...validateInterlocutorTurn(b.closing, `${path}.closing`, false));

  if (!isArr(b.answers) || b.answers.length === 0) {
    push('answers must be a non-empty array — the bank IS the document’s list of what there is to ask');
  } else {
    const seen = new Set<string>();
    b.answers.forEach((a, i) => {
      out.push(...validateInterlocutorTurn(a, `${path}.answers[${i}]`, true));
      const id = (a as Partial<InterlocutorTurn>)?.id;
      // Ids drive "already given". A duplicate would silently retire two
      // answers the first time either is asked for.
      if (isStr(id)) {
        if (seen.has(id)) push(`answers[${i}].id "${id}" appears twice — ids are how a given answer is retired`);
        else seen.add(id);
      }
    });
  }
  return out;
}

export function validateExamTask(v: unknown, path = 'examTask'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const t = v as Partial<ExamTask>;

  if (!isStr(t.id)) push('id is required');
  else if (!EXAM_TASK_ID_RE.test(t.id)) push(`id "${t.id}" must match exam.<format>.<variant>.<taskType>.<seq>`);

  if (!oneOf(EXAM_FORMATS, t.format)) push(`format must be one of ${EXAM_FORMATS.join(' | ')}`);
  if (!oneOf(EXAM_TASK_TYPES, t.taskType)) push(`taskType must be one of ${EXAM_TASK_TYPES.join(' | ')}`);
  if (!oneOf(EXAM_SKILLS, t.skill)) push(`skill must be one of ${EXAM_SKILLS.join(' | ')}`);
  else if (oneOf(EXAM_TASK_TYPES, t.taskType) && t.skill !== examTaskSkill(t.taskType as ExamTaskType)) {
    push(`skill "${t.skill}" disagrees with taskType "${t.taskType}" (expected "${examTaskSkill(t.taskType as ExamTaskType)}")`);
  }
  // SCORE_BANDS, not LEVELS: a paper can test c2 and no paper tests 'sons'.
  if (!oneOf(SCORE_BANDS, t.level)) push(`level must be one of ${SCORE_BANDS.join(' | ')}`);
  if (!isStr(t.variant)) push('variant is required');

  // The id encodes format and taskType, as everywhere else in this file.
  if (isStr(t.id) && EXAM_TASK_ID_RE.test(t.id)) {
    const [, format, variant, taskType] = t.id.split('.');
    if (t.format && format !== t.format) push(`id format "${format}" disagrees with format "${t.format}"`);
    if (t.taskType && taskType !== t.taskType) push(`id taskType "${taskType}" disagrees with taskType "${t.taskType}"`);
    if (t.variant && variant !== t.variant) push(`id variant "${variant}" disagrees with variant "${t.variant}"`);
  }

  // Required. A task with no formatVersion cannot be told from a stale one, and
  // a stale mock prepares a candidate for the wrong paper. See the type.
  if (!isStr(t.formatVersion)) push('formatVersion is required — a task nobody can date cannot be retired');
  if (!isStr(t.prompt)) push('prompt is required');

  if (typeof t.timingS !== 'number' || !Number.isInteger(t.timingS) || t.timingS < 1) {
    push('timingS must be an integer >= 1 — an exam task without a clock is a worksheet');
  }

  // THE RULE, per the Examiner spec: an open task needs a rubric and a model
  // answer. Without them nothing can mark it — not a human, not a model. It is
  // not a partially-authored task, it is a prompt that produces an opinion and
  // calls it a score, and the candidate cannot tell the difference.
  if (isOpenTaskType(t.taskType)) {
    if (t.rubric === undefined) {
      push(`taskType "${t.taskType}" is an open task and MUST have a rubric — nothing can mark it otherwise`);
    }
    if (!isStr(t.modelAnswer)) {
      push(`taskType "${t.taskType}" is an open task and MUST have a modelAnswer`);
    }
  }
  if (t.rubric !== undefined) out.push(...validateRubric(t.rubric, `${path}.rubric`));

  if (t.label !== undefined && !isStr(t.label)) push('label must be a non-empty string when present');

  if (t.interlocutor !== undefined) {
    // An interaction is the ONLY task shape that needs one, and a monologue
    // with an answer bank would never play it.
    if (t.taskType !== 'po_interaction') {
      push(`interlocutor belongs to a po_interaction task, not "${t.taskType}"`);
    }
    out.push(...validateInterlocutor(t.interlocutor, `${path}.interlocutor`));
  } else if (t.taskType === 'po_interaction') {
    // THE rule for this task type. Without a bank the candidate asks questions
    // into silence, which is a monologue wearing an interaction's label.
    push('taskType "po_interaction" MUST have an interlocutor — an interaction with nothing to interact with is a monologue');
  }

  if (t.prepS !== undefined) {
    if (typeof t.prepS !== 'number' || !Number.isInteger(t.prepS) || t.prepS < 1) {
      push('prepS must be an integer >= 1 when present — a zero-length prep phase is not a prep phase, omit it');
    }
    // Preparation is a property of a spoken task. On a written one it would be
    // indistinguishable from the answer time the candidate already has.
    if (t.skill !== 'PO') push(`prepS belongs to a spoken task; "${t.skill}" tasks have no preparation phase`);
  }

  // Closed task types carry the questions, in ONE of two shapes: `items` (one
  // stimulus, the task's own prompt) or `parts` (several stimuli, each with
  // its own audio, image and play count). Marking is the whole point of them,
  // so a co_mcq/ce_mcq task with neither is an empty paper that scores 0/0.
  //
  // Carrying both is rejected rather than merged. A reader would have to guess
  // which list is the real question set and in what order the two interleave,
  // and every reader would guess differently — the same reasoning that keeps
  // the quiz section from having two lists.
  const requireBand = t.format === 'tcf_canada';
  if (t.items !== undefined && t.parts !== undefined) {
    push('a task carries items OR parts, never both — with both, nothing can say which list is the real question set');
  }
  if (!isOpenTaskType(t.taskType) && oneOf(EXAM_TASK_TYPES, t.taskType)) {
    if (t.items === undefined && t.parts === undefined) {
      push(`taskType "${t.taskType}" is a closed task and MUST have items or parts to mark`);
    }
  }
  // Open tasks are judged against a rubric; a question list on one is either a
  // mistake or a closed task wearing the wrong taskType.
  if (isOpenTaskType(t.taskType) && t.parts !== undefined) {
    push(`taskType "${t.taskType}" is an open task and cannot have parts — it is judged against a rubric, not marked`);
  }
  if (t.items !== undefined) out.push(...validateQcm(t.items, `${path}.items`, requireBand));
  if (t.parts !== undefined) out.push(...validateExamParts(t.parts, `${path}.parts`, requireBand));

  // targetItemIds is how a miss decomposes back into the SRS — see the type.
  // Closed task types only: open tasks have no per-item right answer to blame.
  if (t.targetItemIds !== undefined) {
    if (!isArr(t.targetItemIds) || t.targetItemIds.some((id) => !isStr(id))) {
      push('targetItemIds must be an array of strings when present');
    } else if (isOpenTaskType(t.taskType) && t.targetItemIds.length > 0) {
      push(`taskType "${t.taskType}" is open and cannot decompose into item atoms — targetItemIds must be empty`);
    }
    // Referential resolution against corpus.items happens in validateCorpus,
    // which has the item set in scope; this function validates one task alone.
  }

  if (t.responseSpec !== undefined) {
    const rs = t.responseSpec as Partial<ResponseSpec>;
    if (typeof rs !== 'object' || rs === null) push('responseSpec must be an object');
    else {
      if (rs.kind !== 'qcm' && rs.kind !== 'text' && rs.kind !== 'audio') {
        push("responseSpec.kind must be 'qcm', 'text' or 'audio'");
      }
      for (const k of ['minWords', 'maxWords', 'minDurationS', 'maxDurationS'] as const) {
        const n = rs[k];
        if (n !== undefined && (typeof n !== 'number' || !Number.isInteger(n) || n < 0)) {
          push(`responseSpec.${k} must be an integer >= 0 when present`);
        }
      }
      // An inverted bound cannot be satisfied: every answer is both too short and
      // too long, so the candidate fails whatever they write.
      if (typeof rs.minWords === 'number' && typeof rs.maxWords === 'number' && rs.minWords > rs.maxWords) {
        push(`responseSpec.minWords (${rs.minWords}) exceeds maxWords (${rs.maxWords}) — no answer can satisfy it`);
      }
      if (
        typeof rs.minDurationS === 'number' &&
        typeof rs.maxDurationS === 'number' &&
        rs.minDurationS > rs.maxDurationS
      ) {
        push(`responseSpec.minDurationS (${rs.minDurationS}) exceeds maxDurationS (${rs.maxDurationS})`);
      }
    }
  }

  if (t.examinerNotes !== undefined) {
    if (!isArr(t.examinerNotes)) push('examinerNotes must be an array when present');
    else if (t.examinerNotes.some((n) => !isStr(n))) push('examinerNotes must all be non-empty strings');
  }

  if (t.scoringMap !== undefined) {
    if (!isArr(t.scoringMap) || t.scoringMap.length === 0) push('scoringMap must be a non-empty array when present');
    else {
      let prev = -1;
      t.scoringMap.forEach((rule, i) => {
        if (typeof rule !== 'object' || rule === null) {
          push(`scoringMap[${i}] is not an object`);
          return;
        }
        const r = rule as Partial<ScoringBandRule>;
        if (!oneOf(SCORE_BANDS, r.band)) push(`scoringMap[${i}].band must be one of ${SCORE_BANDS.join(' | ')}`);
        if (typeof r.minPoints !== 'number' || !Number.isInteger(r.minPoints) || r.minPoints < 0) {
          push(`scoringMap[${i}].minPoints must be an integer >= 0`);
        } else {
          // Ascending, because the map is read as thresholds. Out of order, a
          // reader that returns the first match awards the wrong band — high
          // scorers get the low band, and it looks like a marking error.
          if (r.minPoints <= prev) push(`scoringMap[${i}].minPoints must ascend — thresholds are read in order`);
          prev = r.minPoints;
        }
      });
    }
  }

  if (t.provenance !== undefined) out.push(...validateProvenance(t.provenance, `${path}.provenance`));

  return out;
}

export function validateSectionScoring(v: unknown, path = 'scoring'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null || isArr(v)) return [{ path, message: 'not an object' }];
  const sc = v as Partial<SectionScoring>;

  if (typeof sc.scale !== 'number' || !Number.isInteger(sc.scale) || sc.scale < 1) {
    push('scale must be a positive integer — the épreuve reports on /360, /300, /450, /699 or /20');
  }

  if (!isArr(sc.map) || sc.map.length < 2) {
    push('map must have at least two points — one point cannot interpolate a score');
  } else {
    let prevRaw = -1;
    let prevScaled = -1;
    sc.map.forEach((pt, i) => {
      if (typeof pt !== 'object' || pt === null) {
        push(`map[${i}] is not an object`);
        return;
      }
      const p = pt as Partial<{ raw: number; scaled: number }>;
      if (typeof p.raw !== 'number' || !Number.isInteger(p.raw) || p.raw < 0) {
        push(`map[${i}].raw must be an integer >= 0`);
      } else if (p.raw <= prevRaw) {
        push(`map[${i}].raw must ascend — the table is read by interpolation, and out of order it interpolates backwards`);
      } else prevRaw = p.raw;
      if (typeof p.scaled !== 'number' || p.scaled < 0) {
        push(`map[${i}].scaled must be a number >= 0`);
      } else if (p.scaled < prevScaled) {
        // Monotonic, not merely ordered: a candidate who answers one MORE
        // question correctly must never report a LOWER score.
        push(`map[${i}].scaled must not decrease — more correct answers cannot report a lower score`);
      } else prevScaled = p.scaled;
    });
  }

  if (!isArr(sc.nclc) || sc.nclc.length === 0) {
    push('nclc must be a non-empty array — a section that cannot report a level is not scored');
  } else {
    let prevMax = -1;
    sc.nclc.forEach((rule, i) => {
      if (typeof rule !== 'object' || rule === null) {
        push(`nclc[${i}] is not an object`);
        return;
      }
      const r = rule as Partial<NclcRule>;
      const ints = (['minRaw', 'maxRaw', 'nclcLow', 'nclcHigh'] as const).every(
        (k) => typeof r[k] === 'number' && Number.isInteger(r[k] as number)
      );
      if (!ints) {
        push(`nclc[${i}] needs integer minRaw, maxRaw, nclcLow and nclcHigh`);
        return;
      }
      if ((r.minRaw as number) > (r.maxRaw as number)) push(`nclc[${i}].minRaw exceeds maxRaw — no score falls in it`);
      if ((r.nclcLow as number) > (r.nclcHigh as number)) push(`nclc[${i}].nclcLow exceeds nclcHigh`);
      // NCLC is reportable only across 4..10. A rule outside that says the
      // candidate scored something no exam board would ever put on paper.
      if ((r.nclcLow as number) < NCLC_MIN || (r.nclcHigh as number) > NCLC_MAX) {
        push(`nclc[${i}] must stay within NCLC ${NCLC_MIN}..${NCLC_MAX} — nothing outside it is reportable`);
      }
      // Overlapping spans give one raw score two different levels, and which
      // one a candidate sees becomes an accident of iteration order.
      if ((r.minRaw as number) <= prevMax) {
        push(`nclc[${i}].minRaw overlaps the previous span — one raw score would report two different levels`);
      }
      prevMax = r.maxRaw as number;
    });
  }

  return out;
}

export function validateExamPaper(v: unknown, path = 'examPaper'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const p = v as Partial<ExamPaper>;

  if (!isStr(p.id)) push('id is required');
  else if (!EXAM_PAPER_ID_RE.test(p.id)) push(`id "${p.id}" must match paper.<format>.<variant>.<1-${MAX_PAPER_NO}>`);

  if (!oneOf(EXAM_FORMATS, p.format)) push(`format must be one of ${EXAM_FORMATS.join(' | ')}`);
  if (!isStr(p.variant)) push('variant is required');

  if (typeof p.paperNo !== 'number' || !Number.isInteger(p.paperNo) || p.paperNo < 1 || p.paperNo > MAX_PAPER_NO) {
    push(`paperNo must be an integer 1..${MAX_PAPER_NO}`);
  }

  if (isStr(p.id) && EXAM_PAPER_ID_RE.test(p.id)) {
    const [, format, variant, no] = p.id.split('.');
    if (p.format && format !== p.format) push(`id format "${format}" disagrees with format "${p.format}"`);
    if (p.variant && variant !== p.variant) push(`id variant "${variant}" disagrees with variant "${p.variant}"`);
    if (p.paperNo !== undefined && no !== String(p.paperNo)) {
      push(`id paper number "${no}" disagrees with paperNo "${p.paperNo}"`);
    }
  }

  // THE RULE that makes this an exam rather than a bag of tasks. A paper
  // missing an épreuve is not slightly incomplete: it reports an NCLC estimate
  // off three skills when a real result is governed by the weakest of four,
  // which is precisely how this feature could mislead somebody about their
  // eligibility. See the type.
  if (!isArr(p.sections)) {
    push('sections must be an array');
    return out;
  }
  if (p.sections.length !== EXAM_SECTION_ORDER.length) {
    push(
      `sections must be exactly ${EXAM_SECTION_ORDER.length} (${EXAM_SECTION_ORDER.join(', ')}), got ${p.sections.length}` +
        ' — a paper missing an épreuve reports a level off the wrong number of skills'
    );
  }

  const seenTasks = new Set<string>();
  p.sections.forEach((sec, i) => {
    const sp = `sections[${i}]`;
    if (typeof sec !== 'object' || sec === null || isArr(sec)) {
      push(`${sp} is not an object`);
      return;
    }
    const s = sec as Partial<ExamSection>;
    const expected = EXAM_SECTION_ORDER[i];
    if (!oneOf(EXAM_SKILLS, s.skill)) {
      push(`${sp}.skill must be one of ${EXAM_SKILLS.join(' | ')}`);
    } else if (expected !== undefined && s.skill !== expected) {
      push(`${sp}.skill is "${s.skill}" but position ${i} is "${expected}" — the four épreuves are ordered ${EXAM_SECTION_ORDER.join(', ')}`);
    }

    if (typeof s.timingS !== 'number' || !Number.isInteger(s.timingS) || s.timingS < 1) {
      push(`${sp}.timingS must be an integer >= 1 — an épreuve without a clock is a worksheet`);
    }
    if (!isStr(s.blueprintId)) {
      push(`${sp}.blueprintId is required — a section nobody can date cannot be re-cut when a fill rule changes`);
    }

    if (!isArr(s.taskIds)) push(`${sp}.taskIds must be an array`);
    else if (s.taskIds.length === 0) push(`${sp}.taskIds must not be empty — an épreuve with no tasks scores 0/0`);
    else {
      s.taskIds.forEach((id, j) => {
        if (!isStr(id) || !EXAM_TASK_ID_RE.test(id)) push(`${sp}.taskIds[${j}] "${String(id)}" is not a valid exam task id`);
        // Uniqueness is checked across the WHOLE paper, not per section: the
        // same task in two épreuves is sat twice and marked twice.
        else if (seenTasks.has(id)) push(`${sp}.taskIds[${j}] "${id}" appears twice in this paper — a candidate would sit it twice`);
        else seenTasks.add(id);
      });
    }

    if (s.scoring !== undefined) out.push(...validateSectionScoring(s.scoring, `${path}.${sp}.scoring`));
  });

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
export function validateSpeakStage(v: unknown, path = 'speakStage'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null || isArr(v)) return [{ path, message: 'not an object' }];
  const s = v as Partial<SpeakStage>;

  if (!isStr(s.id)) push('id must be a non-empty string');
  else if (!/^speak\.\d+\.\d+$/.test(s.id)) push(`id "${s.id}" must match speak.<world>.<seq>`);
  if (typeof s.world !== 'number' || !Number.isInteger(s.world) || s.world < 1) {
    push('world must be a positive integer');
  }
  if (typeof s.seq !== 'number' || !Number.isInteger(s.seq) || s.seq < 1) {
    push('seq must be a positive integer');
  }
  if (!oneOf(LEVELS, s.level)) push(`level must be one of ${LEVELS.join(' | ')}`);
  if (!isStr(s.title)) push('title must be a non-empty string');
  if (!isArr(s.themes) || s.themes.some((t) => !isStr(t))) {
    push('themes must be an array of non-empty strings');
  }
  if (!isArr(s.blocks) || s.blocks.length === 0) {
    push('blocks must be a non-empty array');
  } else {
    s.blocks.forEach((b, i) => {
      if (typeof b !== 'object' || b === null || !isArr((b as SpeakBlock).itemIds) || (b as SpeakBlock).itemIds.length === 0) {
        push(`blocks[${i}] must carry a non-empty itemIds array`);
      } else if ((b as SpeakBlock).itemIds.some((id) => !isStr(id))) {
        push(`blocks[${i}].itemIds must all be non-empty strings`);
      }
    });
  }
  if (typeof s.version !== 'number' || !Number.isFinite(s.version)) push('version must be a number');
  return out;
}

export function validateCorpus(c: unknown, path = 'corpus'): Issue[] {
  const out: Issue[] = [];
  if (typeof c !== 'object' || c === null) return [{ path, message: 'not an object' }];
  const co = c as Partial<Corpus>;

  if (typeof co.version !== 'number' || !Number.isFinite(co.version)) {
    out.push({ path: `${path}.version`, message: 'version must be a number' });
  }
  // Every array added after v0 is optional for back-compat with the seed that is
  // already shipped and already cached; a missing one is an empty one.
  const scenarios = co.scenarios ?? [];
  const domains = co.domains ?? [];
  const themes = co.themes ?? [];
  const packs = co.packs ?? [];
  const examTasks = co.examTasks ?? [];
  const examPapers = co.examPapers ?? [];
  const playlists = co.playlists ?? [];
  const templates = co.templates ?? [];
  const speakPath = co.speakPath ?? [];

  if (!isArr(co.units) || !isArr(co.lessons) || !isArr(co.items) || !isArr(scenarios)) {
    return [{ path, message: 'units, lessons, items and scenarios must all be arrays' }];
  }
  if (!isArr(domains) || !isArr(themes) || !isArr(packs) || !isArr(examTasks) || !isArr(examPapers)) {
    return [{ path, message: 'domains, themes, packs, examTasks and examPapers must be arrays when present' }];
  }
  if (!isArr(playlists) || !isArr(templates) || !isArr(speakPath)) {
    return [{ path, message: 'playlists, templates and speakPath must be arrays when present' }];
  }

  co.items.forEach((it, i) => out.push(...validateItem(it, `${path}.items[${i}]`)));
  co.lessons.forEach((l, i) => out.push(...validateLesson(l, `${path}.lessons[${i}]`)));
  co.units.forEach((u, i) => out.push(...validateUnit(u, `${path}.units[${i}]`)));
  scenarios.forEach((s, i) => out.push(...validateScenario(s, `${path}.scenarios[${i}]`)));
  domains.forEach((d, i) => out.push(...validateDomain(d, `${path}.domains[${i}]`)));
  themes.forEach((t, i) => out.push(...validateTheme(t, `${path}.themes[${i}]`)));
  packs.forEach((p, i) => out.push(...validatePack(p, `${path}.packs[${i}]`)));
  examTasks.forEach((t, i) => out.push(...validateExamTask(t, `${path}.examTasks[${i}]`)));
  examPapers.forEach((p, i) => out.push(...validateExamPaper(p, `${path}.examPapers[${i}]`)));
  playlists.forEach((p, i) => out.push(...validatePlaylist(p, `${path}.playlists[${i}]`)));
  templates.forEach((t, i) => out.push(...validateTemplate(t, `${path}.templates[${i}]`)));
  speakPath.forEach((s, i) => out.push(...validateSpeakStage(s, `${path}.speakPath[${i}]`)));

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
  // Domains and themes are keyed by SLUG rather than id, but the failure is the
  // same one: the later row wins every Map lookup, so a theme silently points at
  // a domain nobody meant.
  dupes(domains.map((d) => d.slug).filter(isStr), 'domain slug');
  dupes(themes.map((t) => t.slug).filter(isStr), 'theme slug');
  dupes(packs.map((p) => p.id).filter(isStr), 'pack');
  dupes(examTasks.map((t) => t.id).filter(isStr), 'exam task');
  dupes(examPapers.map((p) => p.id).filter(isStr), 'exam paper');
  dupes(playlists.map((p) => p.id).filter(isStr), 'playlist');
  dupes(templates.map((t) => t.id).filter(isStr), 'template');
  dupes(speakPath.map((s) => s.id).filter(isStr), 'speak stage');

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
    // A narration interaction's itemId is the same join as a `practice`
    // section's itemIds, and fails the same way when it dangles: a drill
    // Camille narrates into that has nothing behind it.
    for (const st of isArr(l.narration?.stages) ? l.narration!.stages : []) {
      for (const seg of isArr(st?.segments) ? st.segments : []) {
        const id = (seg as { itemId?: unknown } | undefined)?.itemId;
        if (isStr(id) && !itemSet.has(id)) {
          out.push({
            path: `${path}.lessons`,
            message: `lesson "${l.id}" narration references unknown item "${id}"`,
          });
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
    // A dangling prerequisite is a gate the learner can never open: the unit it
    // waits on is in no corpus, so the wait never ends.
    for (const id of isArr(u.prereqUnitIds) ? u.prereqUnitIds : []) {
      if (isStr(id) && !unitSet.has(id)) {
        out.push({ path: `${path}.units`, message: `unit "${u.id}" requires unknown prerequisite unit "${id}"` });
      }
    }
  }

  // A lesson's scenario link must land on a scenario that shipped, or the Den
  // advertises a Roleplay entry point that opens onto nothing.
  const scenarioSet = new Set(scenarios.map((s) => s.id).filter(isStr));
  for (const l of co.lessons) {
    if (l.scenarioId !== undefined && isStr(l.scenarioId) && !scenarioSet.has(l.scenarioId)) {
      out.push({ path: `${path}.lessons`, message: `lesson "${l.id}" references unknown scenario "${l.scenarioId}"` });
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

  // ── The catalogue's references ──
  //
  // The same rule as everywhere above, for the same reason: a dangling reference
  // does not crash. A theme pointing at a domain that does not exist renders as a
  // theme filed under nothing — it simply never appears in the picker, and no
  // error is raised at any point between authoring it and not seeing it.
  //
  // Only checked when the catalogue is actually present. A v0 corpus has no
  // themes, and "no themes" must not be reported as "every theme is dangling".
  const domainSlugs = new Set(domains.map((d) => d.slug).filter(isStr));
  const themeSlugs = new Set(themes.map((t) => t.slug).filter(isStr));

  if (domains.length) {
    for (const t of themes) {
      if (isStr(t.domain) && !domainSlugs.has(t.domain)) {
        out.push({ path: `${path}.themes`, message: `theme "${t.slug}" references unknown domain "${t.domain}"` });
      }
    }
  }

  if (themes.length) {
    for (const p of packs) {
      if (isStr(p.theme) && !themeSlugs.has(p.theme)) {
        out.push({ path: `${path}.packs`, message: `pack "${p.id}" references unknown theme "${p.theme}"` });
      }
    }
    // A pack outside its own theme's declared range is a contradiction between
    // two rows we authored: either the range is wrong or the pack is. It would
    // quietly generate content at a band the catalogue says the theme does not
    // reach.
    const themeById = new Map(themes.filter((t) => isStr(t.slug)).map((t) => [t.slug, t]));
    for (const p of packs) {
      const t = isStr(p.theme) ? themeById.get(p.theme) : undefined;
      if (!t || !isArr(t.levelRange) || t.levelRange.length !== 2) continue;
      const lo = bandIndex(t.levelRange[0]);
      const hi = bandIndex(t.levelRange[1]);
      const at = bandIndex(p.level);
      if (lo >= 0 && hi >= 0 && at >= 0 && (at < lo || at > hi)) {
        out.push({
          path: `${path}.packs`,
          message: `pack "${p.id}" is at level "${p.level}" but theme "${t.slug}" declares levelRange ${t.levelRange[0]}..${t.levelRange[1]}`,
        });
      }
    }
  }

  // A paper pointing at a task that does not exist is a mock exam that is
  // shorter than it says it is, and the candidate has no way to know.
  //
  // The second check is new and is the one that matters more: a task sitting
  // in the wrong section. Nothing about a co_mcq task in the writing épreuve
  // looks broken — it renders, it marks, it scores. It just reports its marks
  // against the wrong skill, and since the headline NCLC is governed by the
  // WEAKEST skill, one misfiled task can move the number a candidate reads as
  // their eligibility.
  const examTaskById2 = new Map(examTasks.filter((t) => isStr(t.id)).map((t) => [t.id, t]));
  for (const p of examPapers) {
    for (const sec of isArr(p.sections) ? p.sections : []) {
      if (typeof sec !== 'object' || sec === null) continue;
      const secSkill = (sec as ExamSection).skill;
      for (const id of isArr((sec as ExamSection).taskIds) ? (sec as ExamSection).taskIds : []) {
        if (!isStr(id)) continue;
        const task = examTaskById2.get(id);
        if (!task) {
          out.push({ path: `${path}.examPapers`, message: `paper "${p.id}" references unknown exam task "${id}"` });
        } else if (oneOf(EXAM_SKILLS, secSkill) && task.skill !== secSkill) {
          out.push({
            path: `${path}.examPapers`,
            message: `paper "${p.id}" puts "${id}" (skill ${task.skill}) in the ${secSkill} épreuve — its marks would score against the wrong skill`,
          });
        }
      }
    }
  }

  // A task pointing at an item that does not exist is a miss that decomposes
  // into nothing — the SRS never learns which atom to review. Same failure
  // shape as a dangling taskId above, one join deeper.
  for (const t of examTasks) {
    for (const id of isArr(t.targetItemIds) ? t.targetItemIds : []) {
      if (isStr(id) && !itemSet.has(id)) {
        out.push({ path: `${path}.examTasks`, message: `exam task "${t.id}" targets unknown item "${id}"` });
      }
    }
  }

  // A scenario claiming to stand in for an exam task must point at a REAL
  // po_* task, or the Examiner opens a role-play that scores nothing.
  const examTaskById = new Map(examTasks.map((t) => [t.id, t]));
  for (const s of scenarios) {
    if (!s.exam) continue;
    const task = examTaskById.get(s.exam.taskId);
    if (!task) {
      out.push({ path: `${path}.scenarios`, message: `scenario "${s.id}" exam.taskId references unknown exam task "${s.exam.taskId}"` });
    } else if (task.taskType !== 'po_monologue' && task.taskType !== 'po_interaction') {
      out.push({ path: `${path}.scenarios`, message: `scenario "${s.id}" exam.taskId "${s.exam.taskId}" is a "${task.taskType}" task, not a PO task` });
    } else if (task.format !== s.exam.format) {
      out.push({ path: `${path}.scenarios`, message: `scenario "${s.id}" exam.format "${s.exam.format}" disagrees with task "${s.exam.taskId}"'s format "${task.format}"` });
    }
  }

  // ── The Speak path's references ──
  //
  // A stage's block pointing at an item that does not exist is a card the
  // trail promises and cannot deal — same dangling-reference failure as a
  // lesson's practice section, and caught the same way. An item claimed by
  // two stages breaks the path's core contract (one station per sentence),
  // which the curation script enforces at authoring time; this re-checks it
  // at publish time so a hand-edit cannot quietly undo it.
  const speakSeen = new Map<string, string>();
  for (const s of speakPath) {
    if (isStr(s.level) && typeof s.world === 'number' && LEVELS[s.world - 1] !== s.level) {
      out.push({ path: `${path}.speakPath`, message: `stage "${s.id}" world ${s.world} does not map to level "${s.level}" (expected "${LEVELS[s.world - 1] ?? '?'}")` });
    }
    for (const b of isArr(s.blocks) ? s.blocks : []) {
      for (const id of isArr(b?.itemIds) ? b.itemIds : []) {
        if (!isStr(id)) continue;
        if (!itemSet.has(id)) {
          out.push({ path: `${path}.speakPath`, message: `stage "${s.id}" references unknown item "${id}"` });
        }
        const prior = speakSeen.get(id);
        if (prior !== undefined) {
          out.push({
            path: `${path}.speakPath`,
            message: prior === s.id
              ? `item "${id}" is listed twice within stage "${s.id}"`
              : `item "${id}" appears in stages "${prior}" and "${s.id}"`,
          });
        }
        speakSeen.set(id, isStr(s.id) ? s.id : '?');
      }
    }
  }

  // Ids must be unique ACROSS entity types too, not just within one. Every id in
  // this corpus shares one namespace the moment anything builds a single lookup
  // map over "all content", which is the obvious thing to write. Prefixes make
  // collisions unlikely rather than impossible, and "unlikely" is not a property
  // you want defended by nothing.
  const allIds = [...itemIds, ...lessonIds, ...unitIds, ...scenarios.map((s) => s.id).filter(isStr),
    ...packs.map((p) => p.id).filter(isStr), ...examTasks.map((t) => t.id).filter(isStr),
    ...examPapers.map((p) => p.id).filter(isStr), ...playlists.map((p) => p.id).filter(isStr),
    ...templates.map((t) => t.id).filter(isStr), ...speakPath.map((s) => s.id).filter(isStr)];
  const seenGlobal = new Set<string>();
  const collided = new Set<string>();
  for (const id of allIds) {
    if (seenGlobal.has(id) && !collided.has(id)) {
      collided.add(id);
      out.push({ path, message: `id "${id}" is used by more than one kind of entity` });
    }
    seenGlobal.add(id);
  }

  return out;
}

export const isValidDomain = (v: unknown): v is Domain => validateDomain(v).length === 0;
export const isValidTheme = (v: unknown): v is Theme => validateTheme(v).length === 0;
export const isValidPack = (v: unknown): v is Pack => validatePack(v).length === 0;
export const isValidExamTask = (v: unknown): v is ExamTask => validateExamTask(v).length === 0;
export const isValidExamPaper = (v: unknown): v is ExamPaper => validateExamPaper(v).length === 0;
export const isValidItem = (v: unknown): v is Item => validateItem(v).length === 0;
export const isValidLesson = (v: unknown): v is Lesson => validateLesson(v).length === 0;
export const isValidUnit = (v: unknown): v is Unit => validateUnit(v).length === 0;
export const isValidScenario = (v: unknown): v is Scenario => validateScenario(v).length === 0;
export const isValidSpeakStage = (v: unknown): v is SpeakStage => validateSpeakStage(v).length === 0;
export const isValidPlaylist = (v: unknown): v is Playlist => validatePlaylist(v).length === 0;
export const isValidTemplate = (v: unknown): v is ContentTemplate => validateTemplate(v).length === 0;
export const isValidCorpus = (v: unknown): v is Corpus => validateCorpus(v).length === 0;

/** Render issues for a human — the publish script's abort message, and the
 *  Ops Console's rejection reason. */
export function formatIssues(issues: Issue[]): string {
  return issues.map((i) => `  ${i.path}: ${i.message}`).join('\n');
}
