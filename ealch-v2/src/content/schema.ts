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
 *   CO  compréhension orale     listening   → EXAM_SECTIONS 'co'  ≈ PracticeSkill 'listen'
 *   CE  compréhension écrite    reading     → EXAM_SECTIONS 'ce'  ≈ PracticeSkill 'read'
 *   PO  production orale        speaking    → EXAM_SECTIONS 'eo'  ≈ PracticeSkill 'speak'
 *   PE  production écrite       writing     → EXAM_SECTIONS 'ee'  ≈ PracticeSkill 'write'
 *
 * The mapping is a correspondence, not an identity, which is exactly why both
 * lists exist. EXAM_SECTIONS uses the French paper's own labels (eo/ee, épreuve
 * orale/écrite) because that is what candidates and past papers call them, and
 * an item's skill is a property of the item while a section is a property of the
 * paper. Do not collapse them.
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

/** The exam families we author toward. */
export const EXAM_FAMILIES = ['tef', 'tcf', 'delf', 'dalf'] as const;
export type ExamFamily = (typeof EXAM_FAMILIES)[number];

/** The sections of an exam paper. See the note on EXAM_SKILLS for how these
 *  correspond to the per-item taxonomy, and why they are not the same list. */
export const EXAM_SECTIONS = ['co', 'ce', 'eo', 'ee'] as const;
export type ExamSection = (typeof EXAM_SECTIONS)[number];

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

export const ITEM_ID_RE = new RegExp(`^fr\\.(${BANDS_RE})\\.[a-z0-9-]+\\.\\d{3,}$`);
export const UNIT_ID_RE = new RegExp(`^(${BANDS_RE})\\.\\d{2}$`);
export const LESSON_ID_RE = new RegExp(`^(${BANDS_RE})\\.\\d{2}\\.l\\d+$`);
/** Scenario ids: sc.<level>.<theme>.<seq>   sc.a1.marche.001 */
export const SCENARIO_ID_RE = new RegExp(`^sc\\.(${BANDS_RE})\\.[a-z0-9-]+\\.\\d{3,}$`);
/** Themes group the corpus for batch review and for themed drills. */
export const THEME_RE = /^[a-z0-9-]+$/;

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
  /** How this item is exercised. The SRS keys on (itemId, modality), never on
   *  itemId alone — recognising and producing are different memories. */
  modality?: Modality;
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
  provenance?: Provenance;
};

/** What a lesson can offer beyond reading it. Order here is display order. */
export const LESSON_FEATURES = ['narrated', 'minimalPairs', 'roleplay', 'voiceflash'] as const;
export type LessonFeature = (typeof LESSON_FEATURES)[number];

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
export type ScenarioTurn = { ai: string; en: string; user: string };
export type Scenario = {
  /** 'sc.<level>.<theme>.<seq>' — e.g. 'sc.a1.marche.001' */
  id: string;
  level: Level;
  theme: string;
  title: string;
  turns: ScenarioTurn[];
  version: number;
  provenance?: Provenance;
};

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

/* ─── Exam entities ──────────────────────────────────────────────────────── */

// An ExamTask is one task off one paper: a TCF listening question, a DELF B1
// speaking prompt. It is not an Item and not a Lesson — an item is a thing to
// know, a lesson is a document to read, and a task is a thing you are SCORED on
// under a clock. Forcing it into either loses the two properties that make it an
// exam at all: the timing, and the rubric.
//
// The sections these belong to (co/ce/eo/ee) split cleanly in two, and the split
// is what the validators below care about:
//   · CLOSED tasks (co, ce) have right answers. A QCM can be marked by a machine.
//   · OPEN   tasks (eo, ee) do not. Someone judges them against a rubric, and
//     without one there is no such thing as a score — only an opinion.

/** 'exam.<family>.<variant>.<section>.<seq>' — exam.tcf.2024a.co.001 */
export const EXAM_TASK_ID_RE = new RegExp(
  `^exam\\.(${EXAM_FAMILIES.join('|')})\\.[a-z0-9-]+\\.(${EXAM_SECTIONS.join('|')})\\.\\d{3,}$`
);
/** 'series.<family>.<variant>.<n>' — series.tcf.2024a.1 */
export const EXAM_SERIES_ID_RE = new RegExp(`^series\\.(${EXAM_FAMILIES.join('|')})\\.[a-z0-9-]+\\.[1-5]$`);

export function examTaskId(family: ExamFamily, variant: string, section: ExamSection, seq: number): string {
  return `exam.${family}.${variant}.${section}.${String(seq).padStart(3, '0')}`;
}
export function examSeriesId(family: ExamFamily, variant: string, seriesNo: number): string {
  return `series.${family}.${variant}.${seriesNo}`;
}

/** Sections whose answers a machine can mark. The rest need a human and a rubric. */
export const CLOSED_SECTIONS = ['co', 'ce'] as const;
export const OPEN_SECTIONS = ['eo', 'ee'] as const;
const isOpenSection = (v: unknown): boolean => (OPEN_SECTIONS as readonly string[]).includes(v as string);

/** A multiple-choice question. Same shape and same trap as the quiz section. */
export type QcmItem = { q: string; opts: string[]; correct: number; why?: string };

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
  /** 'exam.<family>.<variant>.<section>.<seq>' */
  id: string;
  family: ExamFamily;
  /** The paper this came from: '2024a', 'blanc-03'. */
  variant: string;
  section: ExamSection;
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
  /** Closed sections only: the questions to mark. */
  items?: QcmItem[];
  responseSpec?: ResponseSpec;
  /** Open sections only, and REQUIRED there — see validateExamTask. */
  rubric?: Rubric;
  /** Open sections only, and required there: what a good answer looks like. */
  modelAnswer?: string;
  examinerNotes?: string[];
  /** Seconds allowed. An exam task without a clock is a worksheet. */
  timingS: number;
  scoringMap?: ScoringBandRule[];
  provenance?: Provenance;
};

/** A full mock sitting: the ordered tasks that make up one paper. */
export type ExamSeries = {
  /** 'series.<family>.<variant>.<n>' */
  id: string;
  family: ExamFamily;
  variant: string;
  /** 1..5. Five mock papers per variant, per the examiner spec. */
  seriesNo: number;
  /** Ordered. Must all resolve — checked in validateCorpus. */
  taskIds: string[];
};

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
  examSeries?: ExamSeries[];
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
  examSeries: [],
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
  if (it.canDo !== undefined && !isStr(it.canDo)) push('canDo must be a non-empty string when present');
  if (it.grammarPoints !== undefined) {
    if (!isArr(it.grammarPoints)) push('grammarPoints must be an array when present');
    else if (it.grammarPoints.some((g) => !isStr(g))) push('grammarPoints must all be non-empty strings');
  }
  if (it.segments !== undefined) out.push(...validateSegments(it.segments, `${path}.segments`));
  if (it.assetKey !== undefined && !isStr(it.assetKey)) push('assetKey must be a non-empty string when present');
  if (it.provenance !== undefined) out.push(...validateProvenance(it.provenance, `${path}.provenance`));

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
  if (l.provenance !== undefined) out.push(...validateProvenance(l.provenance, `${path}.provenance`));

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
  if (s.provenance !== undefined) out.push(...validateProvenance(s.provenance, `${path}.provenance`));

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
function validateQcm(v: unknown, path: string): Issue[] {
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

export function validateExamTask(v: unknown, path = 'examTask'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const t = v as Partial<ExamTask>;

  if (!isStr(t.id)) push('id is required');
  else if (!EXAM_TASK_ID_RE.test(t.id)) push(`id "${t.id}" must match exam.<family>.<variant>.<section>.<seq>`);

  if (!oneOf(EXAM_FAMILIES, t.family)) push(`family must be one of ${EXAM_FAMILIES.join(' | ')}`);
  if (!oneOf(EXAM_SECTIONS, t.section)) push(`section must be one of ${EXAM_SECTIONS.join(' | ')}`);
  // SCORE_BANDS, not LEVELS: a paper can test c2 and no paper tests 'sons'.
  if (!oneOf(SCORE_BANDS, t.level)) push(`level must be one of ${SCORE_BANDS.join(' | ')}`);
  if (!isStr(t.variant)) push('variant is required');

  // The id encodes family and section, as everywhere else in this file.
  if (isStr(t.id) && EXAM_TASK_ID_RE.test(t.id)) {
    const [, family, variant, section] = t.id.split('.');
    if (t.family && family !== t.family) push(`id family "${family}" disagrees with family "${t.family}"`);
    if (t.section && section !== t.section) push(`id section "${section}" disagrees with section "${t.section}"`);
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
  if (isOpenSection(t.section)) {
    if (t.rubric === undefined) {
      push(`section "${t.section}" is an open task and MUST have a rubric — nothing can mark it otherwise`);
    }
    if (!isStr(t.modelAnswer)) {
      push(`section "${t.section}" is an open task and MUST have a modelAnswer`);
    }
  }
  if (t.rubric !== undefined) out.push(...validateRubric(t.rubric, `${path}.rubric`));

  // Closed sections carry the questions. Marking is the whole point of them, so
  // a co/ce task with nothing to mark is an empty paper that scores 0/0.
  if (!isOpenSection(t.section) && oneOf(EXAM_SECTIONS, t.section)) {
    if (t.items === undefined) push(`section "${t.section}" is a closed task and MUST have items to mark`);
  }
  if (t.items !== undefined) out.push(...validateQcm(t.items, `${path}.items`));

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

export function validateExamSeries(v: unknown, path = 'examSeries'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const s = v as Partial<ExamSeries>;

  if (!isStr(s.id)) push('id is required');
  else if (!EXAM_SERIES_ID_RE.test(s.id)) push(`id "${s.id}" must match series.<family>.<variant>.<1-5>`);

  if (!oneOf(EXAM_FAMILIES, s.family)) push(`family must be one of ${EXAM_FAMILIES.join(' | ')}`);
  if (!isStr(s.variant)) push('variant is required');

  if (typeof s.seriesNo !== 'number' || !Number.isInteger(s.seriesNo) || s.seriesNo < 1 || s.seriesNo > 5) {
    push('seriesNo must be an integer 1..5');
  }

  if (isStr(s.id) && EXAM_SERIES_ID_RE.test(s.id)) {
    const [, family, variant, no] = s.id.split('.');
    if (s.family && family !== s.family) push(`id family "${family}" disagrees with family "${s.family}"`);
    if (s.variant && variant !== s.variant) push(`id variant "${variant}" disagrees with variant "${s.variant}"`);
    if (s.seriesNo !== undefined && no !== String(s.seriesNo)) {
      push(`id series number "${no}" disagrees with seriesNo "${s.seriesNo}"`);
    }
  }

  if (!isArr(s.taskIds)) push('taskIds must be an array');
  else if (s.taskIds.length === 0) push('taskIds must not be empty — a series with no tasks is not a paper');
  else {
    const seen = new Set<string>();
    s.taskIds.forEach((id, i) => {
      if (!isStr(id) || !EXAM_TASK_ID_RE.test(id)) push(`taskIds[${i}] "${String(id)}" is not a valid exam task id`);
      else if (seen.has(id)) push(`taskIds[${i}] "${id}" appears twice — a candidate would sit it twice`);
      else seen.add(id);
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
  // Every array added after v0 is optional for back-compat with the seed that is
  // already shipped and already cached; a missing one is an empty one.
  const scenarios = co.scenarios ?? [];
  const domains = co.domains ?? [];
  const themes = co.themes ?? [];
  const packs = co.packs ?? [];
  const examTasks = co.examTasks ?? [];
  const examSeries = co.examSeries ?? [];

  if (!isArr(co.units) || !isArr(co.lessons) || !isArr(co.items) || !isArr(scenarios)) {
    return [{ path, message: 'units, lessons, items and scenarios must all be arrays' }];
  }
  if (!isArr(domains) || !isArr(themes) || !isArr(packs) || !isArr(examTasks) || !isArr(examSeries)) {
    return [{ path, message: 'domains, themes, packs, examTasks and examSeries must be arrays when present' }];
  }

  co.items.forEach((it, i) => out.push(...validateItem(it, `${path}.items[${i}]`)));
  co.lessons.forEach((l, i) => out.push(...validateLesson(l, `${path}.lessons[${i}]`)));
  co.units.forEach((u, i) => out.push(...validateUnit(u, `${path}.units[${i}]`)));
  scenarios.forEach((s, i) => out.push(...validateScenario(s, `${path}.scenarios[${i}]`)));
  domains.forEach((d, i) => out.push(...validateDomain(d, `${path}.domains[${i}]`)));
  themes.forEach((t, i) => out.push(...validateTheme(t, `${path}.themes[${i}]`)));
  packs.forEach((p, i) => out.push(...validatePack(p, `${path}.packs[${i}]`)));
  examTasks.forEach((t, i) => out.push(...validateExamTask(t, `${path}.examTasks[${i}]`)));
  examSeries.forEach((s, i) => out.push(...validateExamSeries(s, `${path}.examSeries[${i}]`)));

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
  dupes(examSeries.map((s) => s.id).filter(isStr), 'exam series');

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

  // A series pointing at a task that does not exist is a mock exam that is
  // shorter than it says it is, and the candidate has no way to know.
  const taskIds = new Set(examTasks.map((t) => t.id).filter(isStr));
  for (const s of examSeries) {
    for (const id of isArr(s.taskIds) ? s.taskIds : []) {
      if (isStr(id) && !taskIds.has(id)) {
        out.push({ path: `${path}.examSeries`, message: `series "${s.id}" references unknown exam task "${id}"` });
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
    ...examSeries.map((s) => s.id).filter(isStr)];
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
export const isValidExamSeries = (v: unknown): v is ExamSeries => validateExamSeries(v).length === 0;
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
