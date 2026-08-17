// The density validator — Lesson Architecture v2 section 13, as machine checks.
//
// The architecture doc's central claim is that what overwhelms a learner is not
// a long lesson, it is a CROWDED SCREEN. That makes density the one property
// worth enforcing mechanically: a lesson can run 241 screens as long as no
// single screen holds more than one idea. A writer's checklist cannot hold that
// line across forty lessons. This can.
//
// Pure functions over a plain Lesson object. No React, no fs, no network — so
// it runs identically in `node --test` (CI), in the admin authoring scripts
// before anything is written to the database, and in a future editor preview.
// That is the same "pure island" shape as narration.logic.ts and
// lessonPager.logic.ts, and it is why CI picks this up with no workflow change.
//
// ── On scope ────────────────────────────────────────────────────────────────
//
// These rules apply to lessons that OPT IN by carrying the v2 fields (`layer`,
// `size`, `acts`). The six lessons shipped before this validator existed do not
// carry them and are not retro-failed — see `isV2Lesson`. That is deliberate:
// gating on presence means the new model can land without a migration, and the
// migration becomes a separate, visible decision rather than a silent blocker.

import type { Lesson, LessonSection } from './schema.ts';

export type DensityIssue = {
  /** Dotted path to the offending node: 's05-families.groups[1].check'. */
  path: string;
  /** Which rule fired. Stable ids so a suppression can name one. */
  rule: DensityRule;
  message: string;
};

export const DENSITY_RULES = [
  'core-words',
  'core-list-items',
  'xl-words',
  'xl-single-unit',
  'table-in-core',
  'activity-run',
  'checkpoint-spacing',
  'ipa-notation',
  'respell-notation',
  'nasal-convention',
  'item-resolution',
  'quiz-correct-range',
  'quiz-duplicate-option',
  'quiz-why-ref',
  'quiz-spread',
  'em-dash',
  'reframe',
] as const;
export type DensityRule = (typeof DENSITY_RULES)[number];

/* ─── Thresholds ──────────────────────────────────────────────────────────── */

/** Straight from the doc's section 2 governing-rules table. Named rather than
 *  inlined so a failure message can quote the limit it broke. */
export const LIMITS = {
  coreWords: 45,
  coreListItems: 4,
  xlWords: 12,
  /** Raised 6 -> 8 when sons.06 split its XL group drill into one mission per
   *  family plus a control page each (see the seed's s05 run). The run is 8
   *  sections of one TYPE, but it alternates between a word deck and a
   *  four-option control, so what the learner meets is not the sameness this
   *  rule was written to catch — the type is the same, the screen is not.
   *
   *  Kept as a limit rather than removed: it still catches a genuine wall of
   *  identical screens, and no other lesson in the seed exceeds 5, so this is
   *  headroom for the split shape rather than a licence to author monotony.
   *  A cleaner fix is a distinct section type for the control page, which
   *  would make the run alternate by type too. */
  activityRun: 8,
  checkpointSpacing: 22,
  /** Percent of correct answers allowed to sit in any one option slot. */
  quizSpreadPct: 40,
  /** How many sections must carry the reframe verbatim. */
  reframeMinSections: 3,
} as const;

/* ─── Text helpers ────────────────────────────────────────────────────────── */

/** Word count over authored prose. Punctuation-only tokens do not count, so a
 *  line does not fail because it uses a lot of commas. */
export function wordCount(s: string): number {
  return s.trim().split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

/** Every authored string reachable from a value, with its dotted path.
 *  Keys named in `skip` are not descended into — used to keep reference-sheet
 *  bodies (layer 'deep', where density is deliberately fine) out of the core
 *  density counts. */
export function strings(v: unknown, path = '', skip: ReadonlySet<string> = new Set()): { path: string; s: string }[] {
  const out: { path: string; s: string }[] = [];
  const walk = (node: unknown, p: string) => {
    if (typeof node === 'string') {
      out.push({ path: p, s: node });
    } else if (Array.isArray(node)) {
      node.forEach((n, i) => walk(n, `${p}[${i}]`));
    } else if (node && typeof node === 'object') {
      for (const [k, val] of Object.entries(node)) {
        if (skip.has(k)) continue;
        walk(val, p ? `${p}.${k}` : k);
      }
    }
  };
  walk(v, path);
  return out;
}

/* ─── Notation ────────────────────────────────────────────────────────────── */

/** IPA characters that effectively never appear in ordinary French orthography
 *  or English glosses. Their presence in a string means the author is writing a
 *  transcription, which then has to be delimited properly. Deliberately narrow:
 *  letters like a, e, i, o, u, s, t are shared with normal spelling and would
 *  make every gloss look like IPA. */
const IPA_ONLY = /[ɡʁɑ̃ɛ̃ɔ̃œ̃øœəʃʒɲŋɥɐɪʊʌθðæːˈˌ]/u;

/** A bare respelling token: two or more capitals, optionally with the nasal
 *  superscript, hyphens or the French ü. This is what the respelling convention
 *  produces, and what has to sit inside brackets. */
const RESPELL_TOKEN = /(?:^|[\s(])((?:[A-ZÜ]{2,}|[a-zəü]+-[A-ZÜ]{2,})[A-Za-zəÜüⁿ-]*)(?=$|[\s.,;:!?)])/u;

/** Does this string carry IPA that is not wrapped in slashes?
 *  A string may hold several transcriptions (« /pə.ti/ · /pə.tit/ »), so the
 *  check is: strip every properly-slashed span, then look for leftover IPA. */
export function hasUndelimitedIpa(s: string): boolean {
  const stripped = s.replace(/\/[^/]*\//gu, '');
  return IPA_ONLY.test(stripped);
}

/** Is an `ipa` FIELD properly delimited? Every transcription in it must sit
 *  in slashes. A field may legitimately hold a pair (« /ɡʁɑ̃/ · /ɡʁɑ̃d/ »),
 *  so what is checked is that nothing IPA-ish survives outside the slashes. */
export function isDelimitedIpa(s: string): boolean {
  if (!s.trim()) return true;
  if (!s.includes('/')) return false;
  return !hasUndelimitedIpa(s);
}

/** Is a `respell` FIELD properly delimited? Same rule, with brackets. */
export function isDelimitedRespell(s: string): boolean {
  if (!s.trim()) return true;
  const outside = s.replace(/\[[^\]]*\]/gu, '').trim();
  // What remains once the bracketed spans are removed must be separators
  // only: a middot between the two halves of a pair, or whitespace.
  return s.includes('[') && /^[\s·/,]*$/u.test(outside);
}

/** The fields that CARRY notation, with the key that says which kind.
 *
 *  Only these are checked for delimiting and the nasal convention. See the
 *  note at the call site for why running the checks over prose is worse than
 *  not running them. */
function notationFields(s: LessonSection, sid: string): { path: string; s: string; key: 'ipa' | 'respell' }[] {
  const out: { path: string; s: string; key: 'ipa' | 'respell' }[] = [];
  const walk = (node: unknown, p: string) => {
    if (Array.isArray(node)) {
      node.forEach((n, i) => walk(n, `${p}[${i}]`));
      return;
    }
    if (!node || typeof node !== 'object') return;
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
      if (typeof v === 'string') {
        if (k === 'ipa') out.push({ path: `${p}.${k}`, s: v, key: 'ipa' });
        else if (k === 'respell') out.push({ path: `${p}.${k}`, s: v, key: 'respell' });
      } else {
        walk(v, `${p}.${k}`);
      }
    }
  };
  walk(s, sid);
  return out;
}

/** Nasal vowels must close with a superscript n, never a plain n or m.
 *  [GRAHN] teaches a consonant that is not pronounced, which is the exact error
 *  this lesson exists to kill.
 *
 *  Detects the ban precisely: a nasal vowel spelling (AH, OH, EH, AN, ON, UH,
 *  EU) followed by a plain N or M at a token boundary. `MEHR`, `NAY`, `OM` and
 *  `NET` are NOT hits — those are real pronounced consonants, and a blunt
 *  "contains n" rule would flag all of them. */
export function hasPlainNasal(respell: string): boolean {
  // Inside brackets only: that is where respellings live.
  const inner = respell.replace(/^\[|\]$/g, '');
  // A vowel spelling closed by a plain N or M at a syllable boundary. Case
  // insensitive, because respellings mix case to mark stress and the old house
  // style produced both [GRAHN] and [bon-ZHOOR] — both are the error.
  //
  // The trailing guard is what keeps genuinely pronounced consonants out: in
  // [NEUF] and [NAY] the N opens a syllable rather than closing a vowel, and in
  // [bonne] the n is followed by a vowel and really does sound.
  //
  // One ambiguity survives this test and cannot be settled from the respelling
  // alone: [OM] is correct for `homme` (a real doubled m) and wrong for `bon`.
  // Use hasPlainNasalFor() wherever the French source spelling is to hand; a
  // single closing consonant after a lone vowel is left to that check rather
  // than guessed at here.
  return /(?:AH|OH|EH|UH|EU|AI|OU)[NM](?![A-Za-zÀ-ÿ])/iu.test(inner);
}

/** The precise form of the nasal check, for the case where the French source
 *  spelling is available. A written double nasal (homme, bonne, année) is a
 *  real pronounced consonant and its respelling may legitimately end in that
 *  consonant; a single one (bon, grand, temps) marks a nasal vowel and must
 *  use the superscript. */
export function hasPlainNasalFor(fr: string, respell: string): boolean {
  if (hasPlainNasal(respell)) return true;
  const inner = respell.replace(/^\[|\]$/g, '');
  // A lone vowel closed by N or M in the respelling, e.g. [OM], [VAN], [AN].
  if (!/(?:^|[\s-])[A-ZÀ-Ý]*[AEIOUY][NM](?![A-Za-zÀ-ÿ])/iu.test(inner)) return false;
  // Doubled in the source: the consonant is real, so this is not the error.
  if (/(?:nn|mm)/i.test(fr)) return false;
  // A French nasal vowel only exists where the m/n is NOT followed by a vowel:
  // bon, grand, temps, pain. Where a vowel letter DOES follow it, the consonant
  // is genuinely pronounced and the respelling is right to end in it: aime
  // /ɛm/, dame /dam/, jaune /ʒon/, scène /sɛn/, pleine /plɛn/.
  //
  // Without this, the rule fired on every one of those. It was invisible while
  // the only v2 lesson was sons.06, whose one m-final word (homme) happens to
  // be spelled with a double m and so took the branch above. sons.07 teaches
  // j'aime, which is the same shape with a single m, and the check called a
  // correct respelling an error.
  return !/[aeiouyàâäéèêëîïôöûüù][nm]e/i.test(fr);
}

/* ─── The three ways `hasPlainNasalFor` is wrong, named ────────────────────
 *
 * MEASURED 2026-08-17 against all 17,367 published respelled rows. This block
 * adds NO behaviour: `hasPlainNasalFor` above is byte-for-byte what it was.
 * What it adds is a DIAGNOSIS, so a build gets a named hole instead of a
 * silent clear, and so the next person does not re-derive this from scratch.
 * Every A2 build since a2.11 has hand-rolled a plain/half/to table to work
 * around it.
 *
 * ── Why this is a diagnosis and not a fix ──
 *
 * The obvious fix is to scope the two "clear" tests from the whole `fr` string
 * down to the WORD that produced the flag. That was implemented and measured,
 * and it is WRONG: it clears 193 rows that must stay flagged, because
 * `vraiment` contains the letters `ime` and `-ment` is a nasal ending.
 *
 * Refining it so the clearing `e` may not be the `-ent`/`-ment` ending fixes
 * `vraiment`, and still wrongly clears 68 rows, because ONE WORD CAN HOLD BOTH
 * a real consonant and a nasal vowel:
 *
 *     centième     sahn-TYEHM     `ième` is real, `sahn` is a nasal
 *     apparemment  a-pa-ra-MAHN   `mm` is real, `MAHN` is a nasal
 *     ennuyer      ahn-nwee-YAY   `nn` is real, `ahn` is a nasal
 *
 * So a correct clear has to be per-SYLLABLE, aligned to the grapheme that
 * produced each respelling token. That is a real piece of work with its own
 * review, not a regex patch, and shipping a half-fix would trade 2 known false
 * positives for 68 silent false clears. Hence: named, not changed.        */

/** Which known blind spot applies to this pair, if any.
 *
 *  `null` means the verdict from `hasPlainNasalFor` is trustworthy for this
 *  row. Anything else means the verdict is an artifact of one of the three
 *  measured holes and must be asserted by hand.
 *
 *  - `'digraph-early-return'`  the digraph rule at the top of
 *    `hasPlainNasalFor` fires and returns TRUE before the French is ever
 *    consulted, so a genuinely pronounced consonant cannot clear itself.
 *    `diplôme` respelled `dee-PLOHM` is the case: `ôme` is a real /m/ and the
 *    repair below is unreachable.
 *  - `'cross-word-clear'`  the clear was granted by a DIFFERENT WORD in the
 *    same string. `Sélectionnez une option` respelled `...ü-nop-SYON`: the
 *    flagged token is `option`, which has one `n`, and `Sélectionnez` carries
 *    the `nn` that clears it from several words away.
 *  - `'token-internal'`  a nasal followed by a CONSONANT inside the token, so
 *    neither pattern can see it in either direction. `compte` respelled
 *    `KOHNT` matches nothing, because both patterns require the N to end the
 *    token. This is the hole the invariants already document.
 */
export type NasalBlindSpot = 'digraph-early-return' | 'cross-word-clear' | 'token-internal';

export function nasalBlindSpot(fr: string, respell: string): NasalBlindSpot | null {
  const inner = respell.replace(/^\[|\]$/g, '');
  const digraph = /(?:AH|OH|EH|UH|EU|AI|OU)[NM](?![A-Za-zÀ-ÿ])/iu.test(inner);
  const lone = /(?:^|[\s-])[A-ZÀ-Ý]*[AEIOUY][NM](?![A-Za-zÀ-ÿ])/iu.test(inner);
  const words = fr.split(/[\s'’]+/u).map((w) => w.replace(/[^A-Za-zÀ-ÿ]/gu, '')).filter(Boolean);
  const realConsonant = (w: string) => /(?:nn|mm)/i.test(w) || /[aeiouyàâäéèêëîïôöûüù][nm]e/i.test(w);

  // A nasal the respelling closes with a consonant that is not at a token
  // boundary: invisible to both patterns, in both directions.
  if (!digraph && !lone && /(?:AH|OH|EH|UH|EU|AI|OU|[AEIOUY])[NM][A-Za-zÀ-ÿ]/iu.test(inner)) return 'token-internal';

  if (!digraph && !lone) return null;

  // The digraph rule short-circuits, so a real consonant in the source cannot
  // rescue the row.
  if (digraph && words.some(realConsonant)) return 'digraph-early-return';

  // The clear exists, but not in every word: it was granted across a boundary.
  if (words.length > 1 && words.some(realConsonant) && !words.every(realConsonant)) return 'cross-word-clear';

  return null;
}

/** Words that are all-caps for reasons other than being a respelling: acronyms
 *  the copy legitimately uses, and the CaReFuL mnemonic, whose whole point is
 *  its capitalisation. Without this the rule fires on ordinary prose. */
const NOT_A_RESPELL = new Set(['IPA', 'TTS', 'SRS', 'XP', 'CAREFUL', 'CARFL', 'FR', 'EN', 'OK', 'AN', 'ON', 'IN', 'UN', 'AI']);

/** Respelling tokens that are not wrapped in brackets. */
export function hasUndelimitedRespell(s: string): boolean {
  const stripped = s.replace(/\[[^\]]*\]/gu, '');
  const m = RESPELL_TOKEN.exec(stripped);
  if (!m) return false;
  const token = m[1];
  // A single letter-run that is a known acronym is prose, not notation.
  return !NOT_A_RESPELL.has(token.replace(/[^A-Za-zÜü]/g, '').toUpperCase());
}

/** A middot or a slash separating two French forms: the signature of a
 *  contrast pair ("grand · grande", "fils / fil"). */
const PAIR_SEPARATOR = /\s(?:·|\/)\s/u;

/** Sections whose body IS a passage, exempt from the per-screen word cap.
 *
 *  The density rule exists to stop a CARD holding four ideas. These sections
 *  do not render cards: `reading` shows a continuous passage in a scrollable
 *  block (its whole purpose is that the default holds across a paragraph of
 *  real French), and `progressCheck` and `roundup` are debrief prose the
 *  learner reads once at a checkpoint. Capping them at 45 words would make a
 *  reading mission impossible to author rather than making it less crowded.
 *
 *  Note this exempts the section's PROSE only. Everything else in them, and
 *  every other section type, is still capped. */
const PASSAGE_SECTIONS: ReadonlySet<string> = new Set(['reading', 'progressCheck', 'roundup', 'inhibitionDrill']);

/** Every (French spelling, respelling) pair reachable in a section, at any
 *  nesting depth. The nasal rule needs both halves together: the respelling
 *  says what is pronounced, the spelling says whether the consonant is really
 *  there. Any object carrying both an `fr`-ish and a `respell` field qualifies. */
function respellPairs(s: LessonSection, sid: string): { path: string; fr: string; respell: string }[] {
  const out: { path: string; fr: string; respell: string }[] = [];
  const walk = (node: unknown, p: string) => {
    if (Array.isArray(node)) {
      node.forEach((n, i) => walk(n, `${p}[${i}]`));
      return;
    }
    if (!node || typeof node !== 'object') return;
    const o = node as Record<string, unknown>;
    const respell = o.respell;
    const fr = o.fr ?? o.ex ?? o.front ?? o.target ?? o.word;
    if (typeof respell === 'string' && typeof fr === 'string') {
      out.push({ path: `${p}.respell`, fr, respell });
    }
    for (const [k, v] of Object.entries(o)) walk(v, `${p}.${k}`);
  };
  walk(s, sid);
  return out;
}

/** The per-screen display elements of an XL section. An XL section renders one
 *  screen per element, so the single-unit rule applies to each element, not to
 *  the section as a whole. Returns the array fields that carry French display
 *  strings, with the path that names them. */
function xlDisplayElements(s: LessonSection): { path: string; node: Record<string, unknown> }[] {
  const out: { path: string; node: Record<string, unknown> }[] = [];
  for (const key of ['cards', 'items', 'examples'] as const) {
    const arr = (s as unknown as Record<string, unknown>)[key];
    if (!Array.isArray(arr)) continue;
    arr.forEach((node, i) => {
      if (node && typeof node === 'object') out.push({ path: `${key}[${i}]`, node: node as Record<string, unknown> });
    });
  }
  // groupDrill nests its words one level deeper, inside each group.
  const groups = (s as unknown as { groups?: unknown }).groups;
  if (Array.isArray(groups)) {
    groups.forEach((g, gi) => {
      const items = (g as { items?: unknown }).items;
      if (!Array.isArray(items)) return;
      items.forEach((node, i) => {
        if (node && typeof node === 'object') out.push({ path: `groups[${gi}].items[${i}]`, node: node as Record<string, unknown> });
      });
    });
  }
  return out;
}

/* ─── Section shape helpers ───────────────────────────────────────────────── */

/** The v2 display fields. Optional on LessonSection so pre-v2 lessons stay
 *  valid; this is the accessor that reads them without widening the union. */
type V2Fields = {
  id?: string;
  layer?: 'core' | 'more' | 'deep';
  render?: 'screens' | 'deck' | 'sheet';
  size?: 'xl' | 'lg' | 'md';
};
export const v2 = (s: LessonSection): V2Fields => s as LessonSection & V2Fields;

/** A lesson opts into density enforcement by carrying act structure. Lessons
 *  authored before v2 have no `acts` and are skipped wholesale. */
export function isV2Lesson(l: Lesson): boolean {
  return Array.isArray((l as Lesson & { acts?: unknown[] }).acts);
}

type Act = { id: string; title: string; sections: string[]; milestone: string; estScreens: number; restPoints?: string[] };
type V2Lesson = Lesson & {
  acts?: Act[];
  reframe?: string;
  drills?: { id: string }[];
  sheets?: { id: string }[];
};

/* ─── The rules ───────────────────────────────────────────────────────────── */

/**
 * Run every density rule over a lesson.
 *
 * `knownItemIds` is the corpus join: pass the set of ids the corpus actually
 * contains and `item-resolution` fires on any that dangle. Pass an empty set to
 * skip that one rule (the authoring script does this before the items are
 * written; CI passes the real set).
 */
export function validateDensity(lesson: Lesson, knownItemIds: ReadonlySet<string> = new Set()): DensityIssue[] {
  const out: DensityIssue[] = [];
  const L = lesson as V2Lesson;
  const push = (rule: DensityRule, path: string, message: string) => out.push({ rule, path, message });

  if (!isV2Lesson(lesson)) return out;

  const sections = lesson.sections ?? [];

  // Reference sheets are layer 'deep' and are the one place density is fine.
  const isDeep = (s: LessonSection) => v2(s).layer === 'deep' || v2(s).render === 'sheet';

  for (const [i, s] of sections.entries()) {
    const sid = v2(s).id ?? `sections[${i}]`;
    const layer = v2(s).layer;
    const size = v2(s).size;

    // ── Density: words and list items on a core screen ──────────────────────
    // Counted per authored FIELD, not per section: a section renders as many
    // screens, and it is the individual screen that must not be crowded. The
    // narration (`say`) is spoken, not shown, so it is excluded from the
    // on-screen word budget.
    if (layer === 'core' && !isDeep(s) && !PASSAGE_SECTIONS.has(s.type)) {
      for (const { path, s: str } of strings(s, sid, new Set(['say', 'ipa', 'respell', 'audio', 'itemId', 'itemIds', 'id', 'type', 'render', 'layer', 'size']))) {
        const n = wordCount(str);
        if (n > LIMITS.coreWords) {
          push('core-words', path, `${n} words on a core screen (limit ${LIMITS.coreWords})`);
        }
      }
      // Only fields that render as a LIST ON ONE SCREEN count. `cards`,
      // `items`, `examples` and `goals` are screen sequences (render:'screens'
      // walks them one at a time, render:'deck' swipes them), so their length
      // is a screen count, not a density figure. `steps` belongs to one
      // inhibition target and is a numbered routine the learner works
      // through, not four competing ideas. `opts` is a question's answers,
      // governed by the quiz rules instead.
      //
      // What is left is the genuinely list-shaped: a roundup's takeaways and a
      // focus card's points, which do all appear on a single screen together.
      for (const key of ['points', 'bullets'] as const) {
        const val = (s as unknown as Record<string, unknown>)[key];
        if (Array.isArray(val) && val.length > LIMITS.coreListItems && v2(s).render !== 'screens') {
          push('core-list-items', `${sid}.${key}`, `${val.length} list items on one core screen (limit ${LIMITS.coreListItems})`);
        }
      }
    }

    // ── XL discipline ───────────────────────────────────────────────────────
    // An XL screen is one French unit at 56pt. The rule is per DISPLAY STRING,
    // because an XL section holds many cards and each is its own screen.
    if (size === 'xl') {
      for (const { path, s: str } of strings(s, sid, new Set(['say', 'note', 'notes', 'why', 'tip', 'hint', 'drills', 'id', 'type', 'render', 'layer', 'size', 'itemId', 'itemIds', 'audio', 'tag', 'back']))) {
        const n = wordCount(str);
        if (n > LIMITS.xlWords) {
          push('xl-words', path, `${n} words on an xl screen (limit ${LIMITS.xlWords})`);
        }
      }
      // One French unit per XL screen. A middot between two French forms is a
      // contrast PAIR: a legitimate teaching card, but one that belongs at lg,
      // where both halves and both transcriptions fit. At 56pt a pair either
      // overflows or shrinks below the size that made XL worth having.
      // An element carrying `pair: true` is the author saying so explicitly,
      // and is checked as a pair rather than refused.
      for (const el of xlDisplayElements(s)) {
        if (el.node.pair) continue;
        for (const field of ['fr', 'front', 'target'] as const) {
          const val = el.node[field];
          if (typeof val === 'string' && PAIR_SEPARATOR.test(val)) {
            push('xl-single-unit', `${sid}.${el.path}.${field}`, `more than one French unit on an xl screen: "${val.slice(0, 50)}" — use size lg for a contrast pair, or set pair: true`);
          }
        }
      }
    }

    // ── Tables never appear in the flow ─────────────────────────────────────
    if (s.type === 'table' && layer === 'core') {
      push('table-in-core', sid, 'a table in a core section — tables belong in a reference sheet (layer deep)');
    }

    // ── Notation ────────────────────────────────────────────────────────────
    //
    // Checked on NOTATION-BEARING FIELDS ONLY, not on every string in the
    // section. Running these over prose produces false positives that are
    // worse than no check at all, because a validator that cries wolf on
    // ordinary English gets silenced wholesale:
    //
    //   "a job noun in -er"      the letters oun look like a nasal respelling
    //   "not POR-tuh"            a deliberate quotation of a WRONG reading
    //   "fr-FR"                  a language tag
    //   "When -ent is NOT silent" an ending quoted mid-sentence
    //
    // Teaching prose quotes bad respellings on purpose — that is what a
    // commonErrors card IS — so the rule cannot be "this string contains a
    // pattern". It has to be "this FIELD is a transcription", and those
    // fields are named. Prose is still covered by the em-dash and reframe
    // rules, which are safe to run everywhere.
    for (const { path, s: str, key } of notationFields(s, sid)) {
      if (key === 'ipa' && !isDelimitedIpa(str)) {
        push('ipa-notation', path, `IPA must sit in slashes: "${str.slice(0, 60)}"`);
      }
      if (key === 'respell' && !isDelimitedRespell(str)) {
        push('respell-notation', path, `respelling must sit in brackets: "${str.slice(0, 60)}"`);
      }
      if (key === 'respell' && hasPlainNasal(str)) {
        push('nasal-convention', path, `nasal respelled with a plain n or m: "${str.slice(0, 60)}" — use the superscript n`);
      }
    }

    // The precise nasal check, for elements carrying both a French spelling
    // and its respelling. Catches [BON] for `bon` while leaving [OM] for
    // `homme` alone, a distinction the respelling alone cannot make.
    for (const el of respellPairs(s, sid)) {
      if (hasPlainNasal(el.respell)) continue; // already reported above
      if (hasPlainNasalFor(el.fr, el.respell)) {
        push('nasal-convention', el.path, `"${el.fr}" respelled "${el.respell}" closes a nasal vowel with a plain n or m — use the superscript n`);
      }
    }

    // ── Item resolution ─────────────────────────────────────────────────────
    if (knownItemIds.size > 0) {
      for (const { path, s: id } of strings(s, sid)) {
        if (!/^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(id)) continue;
        if (!knownItemIds.has(id)) push('item-resolution', path, `itemId "${id}" does not resolve against the corpus`);
      }
    }
  }

  // ── Activity run: no more than 6 consecutive screens of one mission type ──
  // Measured over SECTIONS of the same type in a row, which is the authored
  // unit a reader actually experiences as sameness.
  let run = 1;
  for (let i = 1; i < sections.length; i++) {
    if (sections[i].type === sections[i - 1].type) {
      run++;
      if (run > LIMITS.activityRun) {
        push('activity-run', v2(sections[i]).id ?? `sections[${i}]`, `${run} consecutive sections of type "${sections[i].type}" (limit ${LIMITS.activityRun})`);
      }
    } else run = 1;
  }

  // ── Checkpoint spacing ──────────────────────────────────────────────────
  // Every act ends in a checkpoint; rest points break up the long ones. No
  // stretch between two stopping places may exceed 22 screens.
  for (const [ai, act] of (L.acts ?? []).entries()) {
    const stops = 1 + (act.restPoints?.length ?? 0);
    const longest = Math.ceil(act.estScreens / stops);
    if (longest > LIMITS.checkpointSpacing) {
      push(
        'checkpoint-spacing',
        `acts[${ai}]:${act.id}`,
        `${act.estScreens} screens across ${stops} stopping place(s) leaves a ${longest}-screen stretch (limit ${LIMITS.checkpointSpacing}) — add a rest point`
      );
    }
  }

  // ── Quiz integrity ──────────────────────────────────────────────────────
  const correctSlots: number[] = [];
  for (const [i, s] of sections.entries()) {
    if (s.type !== 'quiz') continue;
    const sid = v2(s).id ?? `sections[${i}]`;
    type Q = { q: string; format?: string; opts?: string[]; correct?: number | string; accept?: string[]; why?: string; ref?: string };
    const rounds = (s as unknown as { rounds?: { id: string; questions: Q[] }[] }).rounds;
    const groups: { path: string; questions: Q[] }[] = rounds
      ? rounds.map((r, ri) => ({ path: `${sid}.rounds[${ri}]:${r.id}`, questions: r.questions ?? [] }))
      : [{ path: sid, questions: ((s as unknown as { questions?: Q[] }).questions ?? []) }];

    for (const g of groups) {
      for (const [qi, q] of g.questions.entries()) {
        const qp = `${g.path}.questions[${qi}]`;
        if (Array.isArray(q.opts) && typeof q.correct === 'number') {
          if (q.correct < 0 || q.correct >= q.opts.length) {
            push('quiz-correct-range', qp, `correct index ${q.correct} out of range for ${q.opts.length} options`);
          } else {
            correctSlots.push(q.correct);
          }
          const seen = new Set(q.opts);
          if (seen.size !== q.opts.length) {
            push('quiz-duplicate-option', qp, `duplicate option in "${q.q.slice(0, 50)}"`);
          }
        }
        if (!q.why) push('quiz-why-ref', qp, `question has no "why": "${q.q.slice(0, 50)}"`);
        if (!q.ref) push('quiz-why-ref', qp, `question has no "ref": "${q.q.slice(0, 50)}"`);
      }
    }
  }

  // ── Quiz spread: correct answers must not cluster in one slot ────────────
  if (correctSlots.length >= 8) {
    const tally = new Map<number, number>();
    for (const c of correctSlots) tally.set(c, (tally.get(c) ?? 0) + 1);
    for (const [slot, n] of tally) {
      const pct = (n / correctSlots.length) * 100;
      if (pct > LIMITS.quizSpreadPct) {
        push('quiz-spread', 'quiz', `${pct.toFixed(0)}% of correct answers sit in position ${slot} (limit ${LIMITS.quizSpreadPct}%)`);
      }
    }
  }

  // ── Em dash ─────────────────────────────────────────────────────────────
  for (const { path, s } of strings(lesson, lesson.id)) {
    if (s.includes('—')) push('em-dash', path, `em dash in "${s.slice(0, 60)}"`);
  }

  // ── The reframe ─────────────────────────────────────────────────────────
  // The line the lesson hangs on has to appear VERBATIM, in several places, or
  // it is not a reframe, it is a sentence that happened once.
  if (L.reframe) {
    const hits = sections.filter((s) => strings(s).some((x) => x.s.includes(L.reframe!)));
    if (hits.length < LIMITS.reframeMinSections) {
      push('reframe', lesson.id, `reframe "${L.reframe}" appears verbatim in ${hits.length} section(s), needs at least ${LIMITS.reframeMinSections}`);
    }
  }

  return out;
}

/** One-line-per-issue rendering, for CI output and script reports. */
export function formatDensity(issues: DensityIssue[]): string {
  return issues.map((i) => `  [${i.rule}] ${i.path}: ${i.message}`).join('\n');
}
