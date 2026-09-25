// a2.36.l1 « Les pronoms toniques » — guards, and (later) the Postgres apply.
//
//   pnpm tsx scripts/author-pronoms-toniques-batch.ts --dry      guards only, writes nothing
//   pnpm tsx scripts/author-pronoms-toniques-batch.ts --apply    applies (NOT YET: draft)
//
// **THIS IS A DRAFT AND THE DEFAULT IS DRY.** Unlike a2.34's batch, running it
// with no flag does NOT write: the apply path needs `--apply`, so an accidental
// run of the bare command cannot put a draft lesson into Postgres.
//
// THE FILENAMES ARE `pronoms-toniques-*`. Checked 2026-09-25: no existing
// script, data file or package.json script uses the name.
//
// WHAT THE APPLY WILL DO, and what it differs from a2.34 in:
//   1. insert the 37 authored rows fr.a2.pronoms-essentiels.400-.436
//   2. repair ONE respelling on an imported row (.049 sans lui), respell only
//   3. **CREATE the curriculum_unit a2.36**, which does not exist. a2.34's
//      batch only UPDATED an existing spine unit; this one inserts a new unit
//      at seq 36. Paul decides the final seq; change `UNIT.seq` first.
//   4. insert the lesson a2.36.l1 and point the unit's lessonIds at it
//
// POSTGRES FIRST, SEED SECOND: `merge-pronoms-toniques-into-seed.ts` after.
// DO NOT run content:publish from here (doctrine §C).
//
// WHAT BREAKS WHEN THIS IS APPLIED AND MERGED (measured by reading the tests,
// not by running them against a merged seed, because this build merges
// nothing):
//   - ealch-v2/src/content/a2-35-bilan.test.ts « a2.35 is the last unit on the
//     A2 trail »: asserts a2.35's seq is the maximum and that the A2 trail is
//     TRAIL.length + 1 units. A 36th A2 unit fails both, whatever its seq.
//   - a2.35's review/exam cover seq 1-34 by name; a2.36 has no review round.
//   - ealch-v2/src/content/spine-drift.test.ts « it declares exactly the units
//     the seed ships »: author-full-curriculum-spine.ts has no a2.36.
//   - if Paul moves it below seq 36, every later A2 unit's printed label
//     (« lesson N in A2 ») shifts, and every lesson citing one by label moves
//     with it; the per-lesson tests that pin labels will need re-reading.
import './env';
import { readFileSync } from 'node:fs';
import {
  ALL_ROWS, UNIT, THEME, LESSON_ID, E, ID_FIRST_FULL, ID_LAST_FULL, THEME_ROWS_BEFORE, THEME_A2_MAX_BEFORE,
  IMPORT_IDS, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, NOT_IMPORTED, DICTEE_IDS, DICTEE_MODE_EXPECTED,
  RESPELL_REPAIRS, REPAIR_IDS, REPAIR_SOURCE, NOT_REPAIRED,
  PAIR_CELLS, FRAME_CELLS, REGISTER_PAIRS, COMPOUND_CELLS, LUI_TRAP, EUX_PAIR,
  LIAISON_ROWS, LIAISON_FRAME_RX, TIE_GLYPH,
  A105_DEFERRAL, SUBJECT_UNIT, A105_SHEET_ID, GENDER_LOST, STRESSED_RULE, A236_SHAPE, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT,
  INDIRECT_UNIT, CHEZ_CLAIM, PLACE_UNIT, NEGATION_UNIT, GREETING_UNIT, COMPARATIVE_UNIT,
  POSSESSIVE_PRONOUN_UNIT, REGISTER_UNIT, CITED_UNITS, SPOKEN_MARK, WRITTEN_MARK,
  HOMOPHONE_FORMS, NEAR_MISSES, FOLD_COLLISIONS, UNSEEN, DISPLAY_PARITY,
  WRONG_FORMS, WRONG_ALLOWED_IN, MUST_FIRE_WRONG, MUST_NOT_FIRE_WRONG,
  POSSESSIVE_PRONOUNS, POSSESSIVE_ALLOWED_IN, DEMONSTRATIVE_PRONOUNS,
  OUT_OF_BAND_TENSES, PRONOMINAL_EN_Y, FORBIDDEN_CLAIMS, DEAD_AUDIO_FIELDS, DEAD_LESSON_FIELDS,
  JARGON, TECHNICAL_WORD, PLAIN_PHRASE, BANNED_SUBSTRINGS, REFRAME, REFRAME_COUNT,
} from './data/pronoms-toniques-corpus.ts';
import { LESSON, ITEM_IDS, DECK_TRANCHE } from './data/pronoms-toniques-lesson.ts';
import { validateLesson, quizQuestions } from '../../ealch-v2/src/content/schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { fold } from '../../ealch-v2/src/content/answer.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { namesUnitLabel, unitRef } from './data/_unit-ref.ts';

const DRY_RUN = !process.argv.includes('--apply');
const REAPPLY = process.argv.includes('--reapply');
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

/** RAW walk (sees `sub` on cardDeck cards, Corrections §13). */
const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};

/** House boundary with the apostrophe dropped on the LEFT (Corrections §14.3). */
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hasWord = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}])${esc(needle)}(?![\\p{L}\\p{N}'’])`, 'iu').test(hay);
const countOf = (hay: string, needle: string): number =>
  (hay.match(new RegExp(`(?<![\\p{L}\\p{N}])${esc(needle)}(?![\\p{L}\\p{N}'’])`, 'giu')) ?? []).length;
const hubNorm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();

const wrongHit = (s: string): string | null => {
  for (const w of WRONG_FORMS) if (hasWord(s, w)) return w;
  return null;
};

async function main() {
  /* ── OFFLINE GUARDS ─────────────────────────────────────────────────── */

  const schemaIssues = validateLesson(LESSON, LESSON_ID);
  if (schemaIssues.length) die(`validateLesson:\n${schemaIssues.map((i) => `    ${i.path}: ${i.message}`).join('\n')}`);
  console.log('\n  validateLesson: clean');

  const density = validateDensity(LESSON, new Set(ITEM_IDS));
  if (density.length) die(`validateDensity:\n${formatDensity(density)}`);
  console.log('  validateDensity: clean');

  const ids = ALL_ROWS.map((r) => r.id);
  if (new Set(ids).size !== ids.length) die('a duplicate id in the authored rows');
  // THE BLOCK, COMPARED AS FULL IDS (the brief: never compare numbers).
  for (const id of ids) {
    if (!(id >= ID_FIRST_FULL && id <= ID_LAST_FULL)) die(`${id} sits outside the allocated block ${ID_FIRST_FULL}..${ID_LAST_FULL}`);
    if (!/^fr\.a2\.pronoms-essentiels\.\d{3}$/.test(id)) die(`${id} is not a three-digit a2 id in ${THEME}`);
  }
  for (const r of ALL_ROWS) {
    if (r.level !== 'a2') die(`${r.id} is level ${r.level}`);
    if (r.theme !== THEME) die(`${r.id} is in theme ${r.theme}`);
    if (r.kind !== 'sentence') die(`${r.id} is a ${r.kind}; every headword is imported (corpus §F) and a phrase row would risk a hub collision`);
    if ((r as { gender?: string }).gender) die(`${r.id} carries a gender, the shape that moves a1.03`);
    if (r.fr.split(/\s+/).length > 14) die(`${r.id} runs past the 14-word budget`);
    if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} "${r.fr}" -> "${r.respell}" closes a nasal with a plain n or m`);
    const d = r.drills as string[];
    if (!d.includes('flashcard') || !d.includes('voiceflash')) die(`${r.id} lacks flashcard or voiceflash`);
    if (!r.respell) die(`${r.id} has no respelling`);
  }
  // No authored row repeats an imported headword's fr.
  for (const r of ALL_ROWS) {
    if (IMPORT_IDS.includes(r.id)) die(`${r.id} is imported and authored at once`);
  }

  // LIAISONS, BOTH DIRECTIONS.
  for (const l of LIAISON_ROWS) {
    const row = ALL_ROWS.find((r) => r.id === l.id);
    if (!row) die(`LIAISON_ROWS names ${l.id}, which this build does not author`);
    if (!row.fr.includes(l.frame)) die(`${l.id} is listed with "${l.frame}" and its fr does not carry it`);
    if (!(row.respell ?? '').includes(l.respell)) die(`${l.id} "${row.fr}" respells "${row.respell}"; the liaison wants "${l.respell}"`);
  }
  for (const r of ALL_ROWS) {
    if (LIAISON_FRAME_RX.test(r.fr) && !LIAISON_ROWS.some((l) => l.id === r.id)) {
      die(`${r.id} "${r.fr}" creates a liaison frame and is not in LIAISON_ROWS`);
    }
  }

  const sec = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id ?? ''));

  const { titleEn: OVERVIEW_TITLE_EN, ...OVERVIEW_REST } = (LESSON.overview ?? {}) as Record<string, unknown>;
  if (OVERVIEW_TITLE_EN !== UNIT.title) die(`overview.titleEn is "${String(OVERVIEW_TITLE_EN)}", the unit title is "${UNIT.title}"`);

  const LEARNER_TEXT = [
    ...strs(LESSON.sections), ...strs(LESSON.terms), ...strs(LESSON.sheets ?? []),
    LESSON.intro ?? '', ...strs(OVERVIEW_REST), ...strs(LESSON.drills ?? []),
    ...strs(LESSON.acts ?? []), ...strs(LESSON.errorTriggers ?? []),
  ].join('\n');
  if (LEARNER_TEXT.length < 12000) die(`the learner-text walk produced ${LEARNER_TEXT.length} chars, too few to be real`);
  console.log(`  learner text: ${LEARNER_TEXT.length} chars across ${strs(LESSON.sections).length} section strings`);

  /* ══ THE THREE REQUIRED LAYOUTS ══════════════════════════════════════ */

  // LAYOUT 1: each of the four pairs on ONE card, both halves.
  {
    const s = sec('s03-pairs') as { cards?: Array<Record<string, unknown>> } | undefined;
    if (!s) die('s03-pairs is missing, and it is required layout 1');
    if ((s.cards ?? []).length !== 4) die('required layout 1 wants four cards');
    for (const p of PAIR_CELLS) {
      const subj = ALL_ROWS.find((r) => r.id === p.subj)!;
      const str = ALL_ROWS.find((r) => r.id === p.str)!;
      if (!hasWord(subj.fr, p.subjForm)) die(`${p.subj} does not carry "${p.subjForm}"`);
      if (!hasWord(str.fr, p.strForm)) die(`${p.str} does not carry "${p.strForm}"`);
      if (hasWord(str.fr, p.subjForm)) die(`${p.str} carries the subject form "${p.subjForm}" in the half that should not`);
      const card = (s.cards ?? []).find((cd) => { const t = strs(cd).join(' '); return t.includes(subj.fr) && t.includes(str.fr); });
      if (!card) die(`no s03-pairs card carries "${subj.fr}" and "${str.fr}" together`);
    }
  }

  // LAYOUT 2: all eight forms in one frame, on one section, cell by cell.
  {
    const s = sec('s05-eight');
    if (!s) die('s05-eight is missing, and it is required layout 2');
    const text = strs(s).join('\n');
    const forms = new Set<string>();
    for (const c of FRAME_CELLS) {
      if (!hasWord(text, `C'est pour ${c.form}`)) die(`s05-eight has no « C'est pour ${c.form} » cell`);
      forms.add(c.form);
    }
    if (forms.size !== 8) die(`layout 2 shows ${forms.size} forms and the set has eight`);
  }

  // LAYOUT 3: the register pair, marked on EACH half.
  {
    const s = sec('s12-cest') as { cards?: Array<Record<string, unknown>> } | undefined;
    if (!s) die('s12-cest is missing, and it is required layout 3');
    const cards = s.cards ?? [];
    const w = ALL_ROWS.find((r) => r.id === REGISTER_PAIRS[0].written)!;
    const sp = ALL_ROWS.find((r) => r.id === REGISTER_PAIRS[0].spoken)!;
    const wc = cards.find((cd) => strs(cd).some((t) => t === w.fr));
    const sc = cards.find((cd) => strs(cd).some((t) => t === sp.fr));
    if (!wc || !sc) die('required layout 3 has no card for one of the two registers');
    if (!strs(wc).includes(WRITTEN_MARK)) die('the Ce sont eux card is not marked as the written one');
    if (!strs(sc).includes(SPOKEN_MARK)) die("the C'est eux card is not marked as the said one");
    if (!namesUnitLabel(LEARNER_TEXT, REGISTER_UNIT)) die(`${REGISTER_UNIT} owns the register axis and is never named`);
    // Both halves of the elles pair appear somewhere on the section.
    const t = strs(s).join('\n');
    for (const p of REGISTER_PAIRS) {
      for (const id of [p.written, p.spoken]) {
        const row = ALL_ROWS.find((r) => r.id === id)!;
        if (!t.includes(row.fr.replace(/\.$/, ''))) die(`s12-cest does not carry "${row.fr}"`);
      }
    }
  }

  /* ══ THE QUOTATIONS, AND EACH ONE ON THE SAME SECTION AS ITS OWNER ═════ */

  const quoteOn = (quote: string, unit: string, label: string) => {
    if (!LEARNER_TEXT.includes(quote)) die(`${label} (${unit}) is not quoted verbatim on any learner surface`);
    const carriers = [...LESSON.sections, ...(LESSON.sheets ?? [])].filter((s) => strs(s).some((t) => t.includes(quote)));
    const inTerms = strs(LESSON.terms).some((t) => t.includes(quote));
    if (!carriers.length && !inTerms) die(`${label} reaches no section`);
    for (const c of carriers) {
      if (!namesUnitLabel(strs(c).join('\n'), unit)) die(`${(c as { id?: string }).id} quotes ${label} and does not name ${unit} by its label`);
    }
  };
  quoteOn(A105_DEFERRAL, SUBJECT_UNIT, "a1.05's deferral");
  quoteOn(GENDER_LOST, INDIRECT_UNIT, "a2.24's gender line");
  quoteOn(STRESSED_RULE, INDIRECT_UNIT, "a2.24's stressed-lui rule");
  quoteOn(CHEZ_CLAIM, PLACE_UNIT, "a2.04's chez claim");
  quoteOn(WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT, "a2.02's recurring shape");
  if (!LEARNER_TEXT.includes(A236_SHAPE)) die('the extension of the lui line is missing');
  if (LEARNER_TEXT.indexOf(A236_SHAPE) < LEARNER_TEXT.indexOf(GENDER_LOST)) die('the extension appears before the line it extends');

  // a1.05's DEFERRAL IS READ OUT OF THE SHIPPED SEED, not trusted from this
  // file: a1.05 does not export it, and a reworded a1.05 must fail this build.
  const seed = JSON.parse(readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8')) as {
    units: Array<{ id: string; seq: number }>; lessons: Array<{ id: string; sheets?: Array<{ id: string }> }>;
  };
  {
    const a105 = seed.lessons.find((l) => l.id === 'a1.05.l1');
    if (!a105) die('a1.05.l1 is not in the seed');
    const sheet = (a105.sheets ?? []).find((sh) => strs(sh).includes(A105_SHEET_ID) || sh.id === A105_SHEET_ID);
    const where = sheet ? strs(sheet) : strs(a105);
    if (!where.some((t) => t.includes(A105_DEFERRAL))) die(`a1.05.l1 no longer says « ${A105_DEFERRAL} »; the quotation is stale`);
    console.log(`  a1.05's deferral found verbatim in the shipped seed${sheet ? ` (${A105_SHEET_ID})` : ''}`);
    if (seed.units.some((u) => u.id === UNIT.id)) console.log(`  NOTE: ${UNIT.id} is already in the seed`);
  }

  // EVERY CITED UNIT RESOLVES TO A LABEL AND IS NAMED.
  for (const u of CITED_UNITS) {
    if (unitRef(u) === u) die(`${u} has no unit in the seed, so its label would print as a raw id`);
    if (!namesUnitLabel(LEARNER_TEXT, u)) die(`${u} is in CITED_UNITS and never named on a learner surface`);
  }
  for (const u of [NEGATION_UNIT, GREETING_UNIT, COMPARATIVE_UNIT, POSSESSIVE_PRONOUN_UNIT]) {
    if (!namesUnitLabel(LEARNER_TEXT, u)) die(`${u} owns a chunk this lesson shows and is not named`);
  }

  /* ══ THE TRAPS ═══════════════════════════════════════════════════════ */

  // TRAP 1: lui after a little word is him only.
  {
    const s = sec('s10-lui');
    if (!s) die('s10-lui is missing');
    const t = strs(s).join('\n');
    const her = ALL_ROWS.find((r) => r.id === LUI_TRAP.stressedElle)!;
    for (const f of ['Je lui parle.', 'Je parle avec lui.', her.fr]) if (!t.includes(f)) die(`s10-lui does not carry "${f}"`);
    if (!namesUnitLabel(t, INDIRECT_UNIT)) die('s10-lui quotes a2.24 and does not name it');
    if (!hasWord(her.en ?? '', 'her')) die(`${her.id} glosses "${her.en}" without her`);
  }
  // TRAP 2: eux for a mixed group, elles for all women.
  {
    const m = ALL_ROWS.find((r) => r.id === EUX_PAIR.mixed)!;
    const w = ALL_ROWS.find((r) => r.id === EUX_PAIR.women)!;
    if (!hasWord(m.fr, 'eux') || hasWord(m.fr, 'elles')) die(`${m.id} is the mixed-group row and must say eux`);
    if (!hasWord(w.fr, 'elles') || hasWord(w.fr, 'eux')) die(`${w.id} is the all-women row and must say elles`);
  }
  // COMPOUND SUBJECTS come back as nous / vous.
  for (const c of COMPOUND_CELLS) {
    const r = ALL_ROWS.find((x) => x.id === c.id)!;
    if (!r.fr.startsWith(c.joined) || !hasWord(r.fr, c.back)) die(`${c.id} "${r.fr}" should join "${c.joined}" and resume with "${c.back}"`);
  }

  // THE WRONG FORMS appear only where they are marked as wrong.
  for (const r of ALL_ROWS) { const w = wrongHit(r.fr); if (w) die(`${r.id} "${r.fr}" authors the error "${w}"`); }
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if ((WRONG_ALLOWED_IN as readonly string[]).includes(sid)) continue;
    for (const t of strs(s)) { const w = wrongHit(t); if (w) die(`${sid} shows the error "${w}" in "${t.slice(0, 70)}"`); }
  }
  const drillsWithoutOpts = (LESSON.drills ?? []).map((d) => { const { opts, ...rest } = d as Record<string, unknown>; return rest; });
  for (const t of [...strs(LESSON.terms), ...strs(LESSON.sheets ?? []), ...strs(drillsWithoutOpts), LESSON.intro ?? '', ...strs(OVERVIEW_REST)]) {
    const w = wrongHit(t); if (w) die(`the error "${w}" reaches an unmarked surface: "${t.slice(0, 70)}"`);
  }
  for (const sid of WRONG_ALLOWED_IN) {
    if (!strs(sec(sid)).some((t) => wrongHit(t))) die(`${sid} is allowed to show an error and does not, so the allowance is dead`);
  }
  for (const s of MUST_FIRE_WRONG) if (!wrongHit(s)) die(`the wrong-form guard does not fire on "${s}"`);
  for (const s of MUST_NOT_FIRE_WRONG) if (wrongHit(s)) die(`the wrong-form guard fires on "${s}", which is correct`);

  /* ══ THE BOUNDARIES ══════════════════════════════════════════════════ */

  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    for (const t of strs(s)) {
      for (const d of DEMONSTRATIVE_PRONOUNS) if (hasWord(t, d)) die(`"${d}" is a2.33's and appears in ${sid}`);
      if (!(POSSESSIVE_ALLOWED_IN as readonly string[]).includes(sid)) {
        for (const p of POSSESSIVE_PRONOUNS) if (hasWord(t, p)) die(`"${p}" is a2.34's and appears in ${sid}`);
      }
    }
  }
  for (const t of [...strs(LESSON.terms), ...strs(LESSON.sheets ?? []), ...strs(LESSON.drills ?? [])]) {
    for (const p of POSSESSIVE_PRONOUNS) if (hasWord(t, p)) die(`"${p}" is a2.34's and reaches a term, sheet or drill`);
  }

  const FR_KEYS = new Set(['fr', 'ai', 'user', 'text', 'promptSound', 'promptLabel', 'answer', 'prompt', 'say', 'wrong', 'right', 'back', 'word', 'promptSay']);
  const frenchStrings = (v: unknown, out: string[] = []): string[] => {
    if (Array.isArray(v)) { v.forEach((x) => frenchStrings(x, out)); return out; }
    if (v && typeof v === 'object') {
      for (const [k, x] of Object.entries(v)) {
        if (typeof x === 'string' && FR_KEYS.has(k)) out.push(x); else frenchStrings(x, out);
      }
    }
    return out;
  };
  const FRENCH = [
    ...frenchStrings(LESSON.sections), ...frenchStrings(LESSON.drills ?? []),
    ...frenchStrings(LESSON.terms ?? {}), ...frenchStrings(LESSON.sheets ?? []), ...ALL_ROWS.map((r) => r.fr),
  ];
  if (FRENCH.length < 150) die(`the French walk produced ${FRENCH.length} strings, too few to be real`);
  const tenseHit = (s: string): string | null => {
    for (const t of OUT_OF_BAND_TENSES) {
      const rx = new RegExp(`(?<![\\p{L}\\p{N}-])(?:${t.stems.join('|')})(?:${t.endings.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
      const m = s.match(rx); if (m) return `${t.name}: "${m[0]}"`;
    }
    return null;
  };
  for (const s of FRENCH) {
    const t = tenseHit(s); if (t) die(`${t} on a French learner surface: "${s.slice(0, 80)}"`);
    for (const p of PRONOMINAL_EN_Y) if (hasWord(s, p)) die(`the pronominal "${p}" reaches a French surface: "${s.slice(0, 80)}"`);
  }
  console.log(`  tense + en/y ceiling: ${FRENCH.length} French strings clear`);

  /* ══ THE CORPUS AND REACHABILITY ═════════════════════════════════════ */

  // No headword authored: all eight are imported (corpus §F).
  if (IMPORTED.headwords.length !== 8) die(`the headword list holds ${IMPORTED.headwords.length}; the set has eight`);
  // Hub collisions among authored non-sentences (there are none, asserted).
  if (ALL_ROWS.some((r) => r.kind !== 'sentence')) die('an authored headword exists; corpus §F imports all eight');

  if (DICTEE_IDS.length < 6) die(`only ${DICTEE_IDS.length} dictée targets`);
  for (const id of DICTEE_IDS) {
    const row = ALL_ROWS.find((r) => r.id === id)!;
    if (dicteeMode(row.fr) !== DICTEE_MODE_EXPECTED) die(`${id} "${row.fr}" resolves to ${dicteeMode(row.fr)} mode`);
    if (hasWord(row.fr, 'elle') || hasWord(row.fr, 'elles')) die(`${id} "${row.fr}" asks the learner to hear elle against elles`);
  }
  {
    const d = sec('s18-dictee') as { itemIds?: string[] } | undefined;
    if ((d?.itemIds ?? []).join(',') !== DICTEE_IDS.join(',')) die('the dictation section and DICTEE_IDS disagree');
  }

  const released = new Set(DECK_TRANCHE.flat());
  if (released.size !== DECK_TRANCHE.flat().length) die('a tranche releases an item twice');
  for (const id of NOT_DECK_ABLE) if (released.has(id)) die(`${id} has no flashcard and a tranche releases it`);
  const named = new Set<string>();
  for (const s of LESSON.sections) for (const v of collectIds(s)) named.add(v);
  for (const d of LESSON.drills ?? []) for (const v of (d as { items?: string[] }).items ?? []) named.add(v);
  for (const t of Object.values(LESSON.terms ?? {})) for (const ex of (t as { examples?: Array<{ itemId?: string }> }).examples ?? []) if (ex.itemId) named.add(ex.itemId);
  for (const id of NOT_DECK_ABLE) if (!named.has(id)) die(`${id} can never be released and nothing names it`);
  for (const id of ITEM_IDS) if (!released.has(id) && !named.has(id)) die(`${id} is neither released nor named`);
  for (const id of [...released]) if (!ITEM_IDS.includes(id)) die(`a tranche releases ${id}, which the lesson does not carry`);
  for (const n of NOT_IMPORTED) if (ITEM_IDS.includes(n.id)) die(`${n.id} is on the do-not-import list (${n.why})`);
  {
    const p = sec('s20-speak') as { itemIds?: string[] } | undefined;
    for (const id of NOT_SPEAKABLE) if ((p?.itemIds ?? []).includes(id)) die(`practice speaks ${id}, which has no voiceflash`);
    for (const id of p?.itemIds ?? []) if (!ITEM_IDS.includes(id)) die(`practice names ${id}, which the lesson does not carry`);
  }

  for (const p of DISPLAY_PARITY) {
    const s = sec(p.section);
    if (!s) die(`DISPLAY_PARITY names ${p.section}, which is not a section`);
    const row = ALL_ROWS.find((r) => r.id === p.itemId);
    if (!row) die(`DISPLAY_PARITY names ${p.itemId}, which this build does not author`);
    if (!strs(s).some((t) => t.includes(row.fr))) die(`${p.section} no longer carries ${p.itemId} verbatim ("${row.fr}"): ${p.why}`);
  }
  for (const s of LESSON.sections) {
    for (const g of ((s as { groups?: Array<{ items?: Array<{ itemId?: string; fr?: string }> }> }).groups ?? [])) {
      for (const it of g.items ?? []) {
        const row = ALL_ROWS.find((r) => r.id === it.itemId);
        if (row && it.fr && !fold(row.fr).includes(fold(it.fr))) die(`${(s as { id?: string }).id} shows "${it.fr}" and ${it.itemId} says "${row.fr}"`);
      }
    }
  }

  /* ══ THE GENERALISATION ═════════════════════════════════════════════ */

  {
    const s = sec('s08-unseen') as { groups?: Array<{ items?: unknown[]; check?: { opts?: string[]; correct?: number } }> } | undefined;
    if (!s) die('s08-unseen is missing');
    const control = (s.groups ?? []).find((g) => (g.items ?? []).length === 0);
    if (!control) die('s08-unseen has no control page');
    const keyed = (control.check?.opts ?? [])[control.check?.correct ?? -1] ?? '';
    if (!keyed.includes(UNSEEN.answer)) die(`the control check keys on "${keyed}" and the unseen word wants "${UNSEEN.answer}"`);
  }
  for (const r of ALL_ROWS) if (hasWord(`${r.fr} ${r.en}`, UNSEEN.word)) die(`${r.id} carries "${UNSEEN.word}", which must stay unseen`);
  {
    const asks = LESSON.sections.filter((s) => strs(s).some((t) => hasWord(t, UNSEEN.word))).map((s) => (s as { id?: string }).id);
    if (asks.length !== 2 || !asks.includes('s08-unseen') || !asks.includes('s22-quiz')) die(`"${UNSEEN.word}" appears in ${asks.join(', ')}; only s08-unseen and s22-quiz may`);
    for (const t of [...strs(LESSON.terms), ...strs(LESSON.sheets ?? []), ...strs(LESSON.drills ?? [])]) if (hasWord(t, UNSEEN.word)) die(`"${UNSEEN.word}" leaks into a term, sheet or drill`);
  }

  /* ══ fold() AND THE EAR ══════════════════════════════════════════════ */

  for (const [a, b] of NEAR_MISSES) if (fold(a) === fold(b)) die(`NEAR_MISSES claims "${a}" / "${b}" survive fold() and they do not`);
  for (const [a, b] of FOLD_COLLISIONS) if (fold(a) !== fold(b)) die(`FOLD_COLLISIONS claims "${a}" / "${b}" collide and they do not`);

  const quizSection = sec('s22-quiz');
  if (!quizSection) die('s22-quiz is missing');
  const qs = quizQuestions(quizSection as never) as Array<Record<string, unknown>>;
  if (qs.length !== 30) die(`the quiz holds ${qs.length} questions; the A2 house shape is 30`);
  const earOpts = (q: Record<string, unknown>) => ((q.opts as string[] | undefined) ?? []);
  for (const q of qs) {
    if (!(q.format === 'listenChoose' || q.say)) continue;
    for (const group of HOMOPHONE_FORMS) {
      const present = group.filter((g) => earOpts(q).some((o) => hasWord(o, g)));
      if (present.length > 1) die(`the ear question "${q.q}" offers ${present.join(' and ')}, which are one sound`);
    }
  }
  // The listening section obeys the same rule on its ear questions' options.
  {
    const l = sec('s06-listen') as { questions?: Array<{ opts?: string[] }> } | undefined;
    for (const q of l?.questions ?? []) for (const group of HOMOPHONE_FORMS) {
      const present = group.filter((g) => (q.opts ?? []).some((o) => hasWord(o, g)));
      if (present.length > 1) die(`s06-listen offers ${present.join(' and ')} as options`);
    }
  }
  for (const q of qs) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const answer = String(q.answer ?? '');
    const accept = (q.accept as string[] | undefined) ?? [];
    if (!accept.length) die(`"${q.q}" is free text with no accept list`);
    if (!accept.some((a) => fold(a) === fold(answer))) die(`"${q.q}" displays "${answer}" and does not accept it`);
    // A typed question on elle/elles must fix the number in the stem.
    if (/\belles?\b/i.test(answer) && !/one woman|both women|all women|Marie|Léa and Julie/i.test(String(q.q))) {
      die(`"${q.q}" types elle or elles and its stem does not fix how many women`);
    }
  }
  for (const q of qs) {
    if (!q.why) die(`"${q.q}" has no why`);
    if (!q.ref || !sectionIds.has(String(q.ref))) die(`"${q.q}" refs "${q.ref}", which is not a section`);
  }
  {
    const mix: Record<string, number> = {};
    for (const q of qs) mix[String(q.format)] = (mix[String(q.format)] ?? 0) + 1;
    if ((mix.mcq ?? 0) > qs.length / 2) die(`the quiz is ${mix.mcq}/${qs.length} mcq`);
    if ((mix.typeIn ?? 0) <= (mix.mcq ?? 0)) die(`the quiz is ${mix.typeIn} typeIn against ${mix.mcq} mcq; A2 assesses in writing`);
    const slots: Record<string, number> = {};
    for (const q of qs) if (typeof q.correct === 'number') slots[String(q.correct)] = (slots[String(q.correct)] ?? 0) + 1;
    console.log(`  quiz: ${qs.length} questions, ${JSON.stringify(mix)}, correct slots ${JSON.stringify(slots)}`);
  }
  // Mission checks (groupDrill, listening, trapDrill drill) do NOT shuffle:
  // no single slot may hold more than half of them.
  {
    const slots: number[] = [];
    for (const s of LESSON.sections) {
      for (const g of ((s as { groups?: Array<{ check?: { correct?: number } }> }).groups ?? [])) if (typeof g.check?.correct === 'number') slots.push(g.check.correct);
      for (const q of ((s as { questions?: Array<{ correct?: number }> }).questions ?? [])) if (typeof q.correct === 'number') slots.push(q.correct);
      for (const d of ((s as { drill?: Array<{ correct?: number }> }).drill ?? [])) if (typeof d.correct === 'number') slots.push(d.correct);
    }
    const tally: Record<number, number> = {};
    for (const c of slots) tally[c] = (tally[c] ?? 0) + 1;
    for (const [slot, n] of Object.entries(tally)) if (n / slots.length > 0.5) die(`mission answers: ${n}/${slots.length} sit in slot ${slot}`);
    console.log(`  mission answer slots ${JSON.stringify(tally)} across ${slots.length} unshuffled checks`);
  }

  /* ══ HOUSE COPY ══════════════════════════════════════════════════════ */

  {
    const idRx = /(?<![\p{L}\p{N}])((?:a1|a2|b1|b2|c1|sons)\.\d{2})(?![\p{L}\p{N}])/giu;
    const bad: string[] = [];
    for (const t of [...strs(LESSON.sections), ...strs(LESSON.terms), ...strs(LESSON.sheets ?? []),
      LESSON.intro ?? '', ...strs(OVERVIEW_REST), ...strs(LESSON.drills ?? []), ...strs(LESSON.acts ?? [])]) {
      for (const m of t.matchAll(idRx)) bad.push(`"${m[1]}" in "${t.slice(0, 60)}"`);
    }
    if (bad.length) die(`a raw unit id reaches a learner surface: ${bad.slice(0, 6).join(' · ')}`);
    for (const t of strs(LESSON.sections)) if (/(?<![\p{L}])seq\s+\d/iu.test(t)) die(`"seq N" reaches a learner: "${t.slice(0, 70)}"`);
    // A citation that opens nothing must not be capitalised mid-sentence.
    for (const t of strs(LESSON)) if (/[a-z,] Lesson \d+/.test(t)) die(`a mid-sentence citation is capitalised: "${t.slice(0, 80)}"`);
    console.log('  no raw unit id, no seq, no mid-sentence capital on any learner surface');
  }
  for (const j of JARGON) for (const form of [j, `${j}s`]) if (hasWord(LEARNER_TEXT, form)) die(`"${form}" is grammar jargon on a learner surface`);
  {
    const plain = countOf(LEARNER_TEXT, PLAIN_PHRASE);
    const tech = countOf(LEARNER_TEXT, TECHNICAL_WORD);
    if (plain <= tech) die(`"${PLAIN_PHRASE}" ${plain} times against "${TECHNICAL_WORD}" ${tech}; the plain phrase must win`);
    console.log(`  plain phrase ${plain} vs technical ${tech}`);
  }
  for (const t of [...strs(LESSON), ...ALL_ROWS.flatMap((r) => [r.fr, r.en ?? ''])]) {
    for (const b of BANNED_SUBSTRINGS) if (t.toLowerCase().includes(b.toLowerCase())) die(`"${b}" appears in "${t.slice(0, 70)}"`);
    if (t.includes(TIE_GLYPH)) die(`U+203F in "${t.slice(0, 70)}"; it draws as an underscore`);
  }
  for (const r of ALL_ROWS) if ((r.respell ?? '').includes(TIE_GLYPH)) die(`${r.id} respelling carries U+203F`);
  for (const c of FORBIDDEN_CLAIMS) if (LEARNER_TEXT.toLowerCase().includes(c)) die(`AI-tell phrasing: "${c}"`);
  for (const t of strs(LESSON)) if (/[.!?][.,!?;:]/.test(t.replace(/\.\.\./g, ''))) die(`double punctuation in "${t.slice(0, 70)}"`);
  // No spaced exclamation mark in a scene bubble (it has clipped a line on a Pixel 6).
  for (const b of ((sec('s01-scene') as { beats?: Array<{ kind: string; fr?: string }> } | undefined)?.beats ?? [])) {
    if (b.kind === 'bubble' && / !/.test(b.fr ?? '')) die(`scene bubble "${b.fr}" has a spaced exclamation mark`);
  }
  for (const f of DEAD_AUDIO_FIELDS) if (f in (LESSON.audio ?? {})) die(`Lesson.audio.${f} is read by no renderer`);
  for (const f of DEAD_LESSON_FIELDS) if (f in LESSON) die(`Lesson.${f} draws nothing`);
  for (const s of LESSON.sections) if (s.type === 'practice' && (s as { skill?: string }).skill === 'write') die("practice skill:'write' draws no writing surface");

  {
    const n = strs(LESSON).filter((t) => t.includes(REFRAME)).length;
    if (n !== REFRAME_COUNT) die(`the reframe is carried ${n} times and REFRAME_COUNT says ${REFRAME_COUNT}`);
    console.log(`  reframe carried ${n} times`);
  }

  if (LESSON.sections.length !== 24) die(`${LESSON.sections.length} missions; the A2 house shape is 24`);
  {
    const acts = LESSON.acts ?? [];
    const of = (id: string) => (acts.find((a) => a.id === id)?.sections ?? []).length;
    const owns = of('act2') + of('act3');
    const rest = of('act1') + of('act4');
    if (owns <= rest) die(`the Owns is ${owns} missions and the scene plus the trap ${rest}`);
    console.log(`  acts: ${acts.map((a) => `${a.id}=${a.sections.length}`).join(' ')}  owns=${owns} vs scene+trap=${rest}`);
  }
  {
    const tap = LESSON.sections.filter((s) => s.type === 'tapTable');
    if (tap.length !== 1) die(`${tap.length} tapTables in the flow`);
    if (((tap[0] as { rows?: unknown[] }).rows ?? []).length > 6) die('the tapTable is over the six-row Pixel 6 ceiling');
    if (LESSON.sections.some((s) => s.type === 'table')) die('a table in the flow');
    const sheetTables = (LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? []).filter((x) => x.type === 'table'));
    if (sheetTables.length !== 1) die(`${sheetTables.length} sheet tables`);
    if ((sheetTables[0] as { cols?: unknown[] }).cols!.length > 3) die('the sheet table has more than three columns');
    if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('more than one quiz: the second would never render');
  }
  for (const s of LESSON.sections) {
    if (((s as { terms?: string[] }).terms ?? []).length > 3) die(`${(s as { id?: string }).id} declares more than three term chips`);
    if (s.type === 'commonErrors' && !(s as { swipe?: boolean }).swipe) die(`${(s as { id?: string }).id} is commonErrors without swipe`);
    if (s.type === 'trapDrill' && (s as { size?: string }).size) die('a stepped trapDrill must not carry size');
  }
  {
    const used = new Set(LESSON.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
    for (const k of Object.keys(LESSON.terms ?? {})) if (!used.has(k)) die(`term "${k}" is surfaced by no section`);
    for (const k of used) if (!(k in (LESSON.terms ?? {}))) die(`a section names term "${k}", which does not exist`);
  }

  console.log(`\n  offline guards: all clear (${ALL_ROWS.length} authored, ${IMPORT_IDS.length} imported, ${ITEM_IDS.length} item ids)`);

  /* ══════════════════════════════════════════════════════════════════════
   *  THE DATABASE. Read-only unless --apply.
   * ══════════════════════════════════════════════════════════════════════ */

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const unitRow = await c.query<{ body: Record<string, unknown> }>(
      "select body from content_units where kind='curriculum_unit' and body->>'id'=$1", [UNIT.id]);
    if (unitRow.rowCount && !REAPPLY) die(`${UNIT.id} already exists in content_units; this is meant to be a first build`);
    const seqClash = await c.query<{ id: string }>(
      "select body->>'id' as id from content_units where kind='curriculum_unit' and body->>'track'='a2' and body->>'seq'=$1 and body->>'id'<>$2",
      [String(UNIT.seq), UNIT.id]);
    if (seqClash.rows.length) die(`seq ${UNIT.seq} is already held on the A2 trail by ${seqClash.rows.map((r) => r.id).join(', ')}`);
    console.log(`\n  ${UNIT.id} absent from content_units, seq ${UNIT.seq} free on the A2 trail`);

    const before = await c.query<{ n: string }>(`select count(*)::text as n from content_items where theme=$1 and status='published'`, [THEME]);
    const nBefore = Number(before.rows[0].n);
    const maxA2 = await c.query<{ m: string }>(`select max(id) as m from content_items where id like 'fr.a2.pronoms-essentiels.%'`);
    console.log(`  ${THEME}: ${nBefore} published (build measured ${THEME_ROWS_BEFORE}); a2 max ${maxA2.rows[0].m} (measured ${THEME_A2_MAX_BEFORE})`);
    if (nBefore !== THEME_ROWS_BEFORE) console.log('  NOTE: the theme has moved since this build measured it.');

    const taken = await c.query<{ id: string }>(`select id from content_items where id >= $1 and id <= $2`, [ID_FIRST_FULL, ID_LAST_FULL]);
    if (taken.rows.length && !REAPPLY) die(`${taken.rows.length} id(s) in the block are taken: ${taken.rows.slice(0, 6).map((r) => r.id).join(', ')}`);
    console.log(`  block ${ID_FIRST_FULL}..${ID_LAST_FULL}: ${taken.rows.length} taken`);

    const imp = await c.query<{ id: string; fr: string; en: string; kind: string; status: string; drills: unknown; gender: string | null; respell: string | null; level: string }>(
      `select id, fr, en, kind, status, drills, gender, respell, level from content_items where id = any($1::text[])`, [IMPORT_IDS]);
    const missing = IMPORT_IDS.filter((i) => !imp.rows.some((r) => r.id === i));
    if (missing.length) die(`${missing.length} imported row(s) are not in Postgres: ${missing.join(', ')}`);
    const unpub = imp.rows.filter((r) => r.status !== 'published');
    if (unpub.length) die(`${unpub.length} imported row(s) unpublished: ${unpub.map((r) => r.id).join(', ')}`);
    const genderedWord = imp.rows.filter((r) => r.gender && r.kind === 'word' && !r.fr.replace(/^(le |la |les |l'|un |une |des )/, '').includes(' '));
    if (genderedWord.length) die(`imported gendered single words: ${genderedWord.map((r) => r.id).join(', ')}`);
    {
      const byLevel: Record<string, number> = {};
      for (const r of imp.rows) byLevel[r.level] = (byLevel[r.level] ?? 0) + 1;
      console.log(`  ${imp.rows.length} imports by level: ${JSON.stringify(byLevel)}`);
    }
    // The eight headwords: ungendered, respelled, flashcard + voiceflash, and
    // one per form.
    {
      const FORMS = ['moi', 'toi', 'lui', 'elle', 'nous', 'vous', 'eux', 'elles'];
      const seen = new Set<string>();
      for (const id of IMPORTED.headwords) {
        const r = imp.rows.find((x) => x.id === id)!;
        const d = toArray(r.drills);
        if (!d.includes('flashcard') || !d.includes('voiceflash')) die(`${id} "${r.fr}" lacks flashcard or voiceflash`);
        if (!r.respell) die(`${id} "${r.fr}" has no respelling`);
        const f = FORMS.find((x) => hasWord(r.fr, x));
        if (!f) die(`${id} "${r.fr}" carries none of the eight forms`);
        seen.add(f);
      }
      if (seen.size !== 8) die(`the headwords cover ${seen.size} of the eight forms: ${[...seen].join(', ')}`);
    }
    // Reachability against Postgres drills, not the corpus file's claims.
    const released = new Set(DECK_TRANCHE.flat());
    for (const id of IMPORT_IDS) {
      const r = imp.rows.find((x) => x.id === id)!;
      const d = toArray(r.drills);
      if (released.has(id) && !d.includes('flashcard')) die(`a tranche releases ${id} and it has no flashcard`);
      if (NOT_DECK_ABLE.includes(id) && d.includes('flashcard')) die(`${id} DOES carry flashcard, so NOT_DECK_ABLE is stale`);
    }
    {
      const p = sec('s20-speak') as { itemIds?: string[] } | undefined;
      const authored = new Set(ALL_ROWS.map((r) => r.id));
      for (const id of p?.itemIds ?? []) {
        if (authored.has(id)) continue;
        const r = imp.rows.find((x) => x.id === id);
        if (!r) die(`practice names ${id}, neither authored nor imported`);
        if (!toArray(r.drills).includes('voiceflash')) die(`practice speaks ${id} and it has no voiceflash`);
      }
      for (const id of NOT_SPEAKABLE) {
        const r = imp.rows.find((x) => x.id === id);
        if (r && toArray(r.drills).includes('voiceflash')) console.log(`  NOTE: ${id} has voiceflash after all; NOT_SPEAKABLE is conservative`);
      }
    }
    for (const s of LESSON.sections) {
      for (const g of ((s as { groups?: Array<{ items?: Array<{ itemId?: string; fr?: string }> }> }).groups ?? [])) {
        for (const it of g.items ?? []) {
          const r = imp.rows.find((x) => x.id === it.itemId);
          if (r && it.fr && !fold(r.fr).includes(fold(it.fr))) die(`${(s as { id?: string }).id} shows "${it.fr}" and ${it.itemId} says "${r.fr}"`);
        }
      }
    }
    // Every imported row is inside the band's tense ceiling and carries no
    // demonstrative or possessive pronoun, no -même and no unseen word.
    for (const r of imp.rows) {
      const t = tenseHit(r.fr); if (t) die(`imported ${r.id} "${r.fr}" carries ${t}`);
      if (hasWord(r.fr, UNSEEN.word)) die(`imported ${r.id} carries "${UNSEEN.word}"`);
      for (const b of BANNED_SUBSTRINGS) if (r.fr.includes(b)) die(`imported ${r.id} carries "${b}"`);
      for (const d of DEMONSTRATIVE_PRONOUNS) if (hasWord(r.fr, d)) die(`imported ${r.id} carries "${d}"`);
    }
    // THE RESPELLING CHECK OVER THE IMPORTS, through the real checker. Every
    // flagged import is either in the repair table or reported.
    {
      const flagged = imp.rows.filter((r) => r.respell && hasPlainNasalFor(r.fr, r.respell));
      for (const f of flagged) {
        if (!REPAIR_IDS.includes(f.id)) die(`imported ${f.id} "${f.fr}" -> "${f.respell}" is flagged by the nasal checker and not in RESPELL_REPAIRS`);
      }
      console.log(`  nasal checker over ${imp.rows.filter((r) => r.respell).length} respelled imports: ${flagged.length} flagged, all in the repair table`);
    }
    for (const r of RESPELL_REPAIRS) {
      const cur = imp.rows.find((x) => x.id === r.id);
      if (!cur) die(`${r.id} is a repair target and not an import`);
      if (cur.respell !== r.from && cur.respell !== r.to) die(`${r.id} reads "${cur.respell}", expected "${r.from}" or "${r.to}"`);
      if (!hasPlainNasalFor(r.fr, r.from)) die(`${r.id}: the checker does not flag "${r.from}", so the repair is unmotivated`);
      if (hasPlainNasalFor(r.fr, r.to)) die(`${r.id}: the checker flags the repaired "${r.to}"`);
    }
    {
      const src = await c.query<{ respell: string | null }>(`select respell from content_items where id=$1`, [REPAIR_SOURCE.id]);
      if (!(src.rows[0]?.respell ?? '').includes(REPAIR_SOURCE.contains)) die(`${REPAIR_SOURCE.id} no longer carries "${REPAIR_SOURCE.contains}", the value the repair was read off`);
    }
    {
      const nr = await c.query<{ id: string; respell: string | null }>(`select id, respell from content_items where id = any($1::text[])`, [NOT_REPAIRED.map((n) => n.id)]);
      for (const n of NOT_REPAIRED) {
        const row = nr.rows.find((x) => x.id === n.id);
        if (!row) die(`${n.id} is on the not-repaired list and is not in Postgres`);
        if (row.respell !== n.respell) console.log(`  NOTE: ${n.id} now reads "${row.respell}"; the not-repaired note is stale`);
      }
    }
    // The published NOT_IMPORTED rows still say what the notes say.
    {
      const ni = await c.query<{ id: string; fr: string }>(`select id, fr from content_items where id = any($1::text[])`, [NOT_IMPORTED.map((n) => n.id)]);
      for (const n of NOT_IMPORTED) {
        const row = ni.rows.find((x) => x.id === n.id);
        if (!row) { console.log(`  NOTE: ${n.id} (not imported) is no longer in Postgres`); continue; }
        if (row.fr !== n.fr) console.log(`  NOTE: ${n.id} now reads "${row.fr}"`);
      }
    }
    // THE LUI TRAP'S TWO a2.24 ROWS say what the trap needs.
    {
      const obj = imp.rows.find((x) => x.id === LUI_TRAP.objectLui)!;
      const str = imp.rows.find((x) => x.id === LUI_TRAP.stressedLui)!;
      if (obj.fr !== 'Je lui parle.') die(`${obj.id} reads "${obj.fr}"`);
      if (str.fr !== 'Je parle avec lui.') die(`${str.id} reads "${str.fr}"`);
    }

    if (DRY_RUN) {
      console.log('\n  --dry (default): every guard passed and nothing was written.\n');
      return;
    }

    /* ── THE WRITE. Only with --apply. NOT RUN FOR THE DRAFT. ─────────── */

    await c.query('begin');
    try {
      for (const r of ALL_ROWS) {
        await c.query(
          `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills, version, status)
             values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,'published')
           on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
             fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell,
             gender=excluded.gender, notes=excluded.notes, tags=excluded.tags, drills=excluded.drills,
             version=excluded.version, status='published'`,
          [r.id, r.kind, r.level, r.theme, r.fr, r.en, r.ipa ?? null, r.respell ?? null,
            (r as { gender?: string }).gender ?? null, r.notes ?? null, r.tags ?? [], r.drills ?? [], r.version ?? 1],
        );
      }
      for (const r of RESPELL_REPAIRS) {
        const up = await c.query('update content_items set respell=$1, updated_at=now() where id=$2', [r.to, r.id]);
        if (up.rowCount !== 1) throw new Error(`the repair of ${r.id} touched ${up.rowCount} rows`);
      }
      await c.query(
        `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
         values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
         on conflict (slug) do update set title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
        [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)],
      );
      // THE NEW UNIT. Shaped exactly like a2.35's body (measured), keyed by
      // slug = unit id as a2.35's row is.
      const unitBody = {
        id: UNIT.id, seq: UNIT.seq, sub: UNIT.sub, canDo: UNIT.canDo, level: UNIT.level,
        title: UNIT.title, track: UNIT.track, lessonIds: [LESSON.id], prereqUnitIds: [...UNIT.prereqUnitIds],
      };
      await c.query(
        `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
         values ($1,$2,'curriculum_unit',$3,'fr','published',$4::jsonb,1,'human')
         on conflict (slug) do update set title=excluded.title, body=excluded.body, status='published', updated_at=now()`,
        [UNIT.id, UNIT.title, UNIT.level, JSON.stringify(unitBody)],
      );
      await c.query('commit');
    } catch (e) {
      await c.query('rollback');
      die(`rolled back: ${(e as Error).message}`);
    }
    const after = await c.query<{ n: string }>(`select count(*)::text as n from content_items where theme=$1 and status='published'`, [THEME]);
    console.log(`\n  ${THEME}: ${nBefore} -> ${after.rows[0].n} published (authored ${ALL_ROWS.length})`);
    console.log(`  ${LESSON.id} and unit ${UNIT.id} (seq ${UNIT.seq}) applied`);
    console.log('\n  NEXT: pnpm tsx scripts/merge-pronoms-toniques-into-seed.ts\n');
  } finally {
    c.release();
    await pool.end();
  }
}

function collectIds(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (/^fr\.[a-z0-9]+\./.test(v)) out.push(v); return out; }
  if (Array.isArray(v)) { v.forEach((x) => collectIds(x, out)); return out; }
  if (v && typeof v === 'object') { Object.values(v).forEach((x) => collectIds(x, out)); return out; }
  return out;
}

void E;
void hubNorm;
main();
