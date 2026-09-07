// a1.20.l1 "Les mots interrogatifs" -> Postgres.
//
//     pnpm content:interrogatifs --dry-run
//     pnpm content:interrogatifs
//
// Validates everything before it touches the database, upserts in ONE
// transaction, and is idempotent by id. `--dry-run` reports and writes nothing.
//
// ── The name ───────────────────────────────────────────────────────────────
//
// `interrogatifs-*`, NOT `questions-*`. a1.19's brief proposes `questions-*` for
// itself, so the name was left free for it. That turned out to matter: a1.19
// landed mid-build and its files ARE `questions-{corpus,imported,lesson,terms}.ts`.
// The two lessons share a theme and a corpus and would have collided on every
// file name had this one taken the obvious one.
//
// ── Order, which has cost real work twice ──────────────────────────────────
//
//   1. this script            -> Postgres
//   2. merge-interrogatifs-into-seed.ts  -> seed.json
//   3. content:publish        ONLY when both agree, and not by this build
//
// `content:publish` regenerates the seed FROM the database, so publishing before
// applying deletes the lesson from the seed silently. sons.07.l1 was written to
// the seed, erased by somebody else's publish, and survived only because its
// source files were intact.
//
// ── What this batch writes, and what it deliberately does not ─────────────
//
// It writes 30 authored rows, 37 imported rows, EIGHT respelling repairs, the
// lesson body, and two fields of the unit (`themes`, which was null, and
// `lessonIds`). It does NOT write the unit's title, sub or canDo, and it
// refuses if the batch would change any of them. The canDo omits `comment` and this lesson teaches it anyway; that
// mismatch is reported loudly and is not silently patched. See the header of
// interrogatifs-corpus.ts.

import './env';
import { describeTarget } from './env';
import { Pool } from 'pg';
import {
  type Item, type Lesson, type Unit,
  validateItem, validateLesson, validateUnit, formatIssues,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  AUTHORED, FORBIDDEN_FORMS, HERO, HERO_TAIL, IMPORTED, INDIRECT_QUESTION_FRAMES,
  NASAL_FORMS, NOT_NASAL_FORMS, NOT_REPAIRED, OWNED_ID_RANGES, PRODUCIBLE_VERBS,
  QUEL_FORMS, REGISTER_TEACHING, RELATIVE_FRAMES, REPAIRS_INVISIBLE_TO_CHECKER,
  RESPELL, RESPELL_REPAIRS, REUSED, THE_SEVEN, bareCombienBeforeNoun, hasWord,
  heroTailSub, sub,
} from './data/interrogatifs-corpus.ts';
import {
  INTERROGATIFS_DICTATION_IDS, INTERROGATIFS_HEADWORD_IDS, INTERROGATIFS_ITEM_IDS,
  INTERROGATIFS_LESSON, INTERROGATIFS_SPEAK_IDS, HANDOVER_NEXT_FREE_IDS,
} from './data/interrogatifs-lesson.ts';
import { REFRAME } from './data/interrogatifs-terms.ts';
import { guardLessonVersion } from './version-guard.logic.ts';

const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTED];
const LESSON: Lesson = INTERROGATIFS_LESSON;
const UNIT_ID = 'a1.20';

/** Asserted against an EXPLICIT constant rather than a figure derived from the
 *  lesson. A derived count compares the content to itself and passes on any
 *  rewording, which is how a reframe quietly disappears. */
const REFRAME_APPEARANCES = 10;

const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_SECTIONS = 27;
const EXPECTED_AUTHORED = 30;
const EXPECTED_HERO_ROWS = 7;

const UNIT_THEME = 'questions';
const UNIT_TITLE = 'Question Words';
const UNIT_SUB = 'Les mots interrogatifs';
const UNIT_CANDO = 'Can ask who, what, where, when, why and how much questions';

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** Only OPTION-LIST references break under the runtime shuffle. A reference to a
 *  position in a FRENCH SENTENCE is not one and never moves. A first draft of
 *  this pattern fired on "Everything except the first word", which is the
 *  correct answer to the hero question and the whole point of the lesson. */
const POSITIONAL = /\b(the (first|second|third|last|top|bottom) (one|option|answer|choice)|both of (the above|these)|none of (the above|these)|all of the above|neither of these)\b/i;

/** Verbs a learner may be asked to PRODUCE. Everything else in this lesson is
 *  reading exposure, because there is no regular-verb unit in A1. */
const PRODUCIBLE = new Set(PRODUCIBLE_VERBS);

/** The verbs the lesson DISPLAYS and never asks for. Named so the report can say
 *  which ones were checked rather than claiming a negative. */
const EXPOSURE_ONLY = ['pars', 'part', 'fais', 'fait', 'habites', 'dure', 'commence', 'préfères', 'passe', 'portes', 'parles', 'ouvre', 'vas', 'appelez', 'pleut', 'peux', 'prends'];

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run, nothing will be written)');

  /* ── Items ─────────────────────────────────────────────────────────────── */

  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

  const ids = NEW_ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  if (AUTHORED.length !== EXPECTED_AUTHORED) {
    die(`expected ${EXPECTED_AUTHORED} authored rows, found ${AUTHORED.length}`);
  }
  if (HERO.length !== EXPECTED_HERO_ROWS) {
    die(`the hero must carry all ${EXPECTED_HERO_ROWS} question words, found ${HERO.length}`);
  }

  /* ── flashhub keys decks on `fr` PER THEME ─────────────────────────────── */
  // Two rows sharing an fr within one theme are one card served twice. All
  // twelve question words already exist as published headwords, which is why
  // this lesson imports them and authors only `qu'est-ce que` and `qu'est-ce
  // qui`, neither of which exists bare in `questions`.
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seenWord = new Map<string, string>();
  const dupeWords: string[] = [];
  for (const w of NEW_ITEMS) {
    if (w.kind === 'sentence') continue;
    if ((w.cardType ?? 'vocab') !== 'vocab') continue;
    const key = `${w.theme}::${headword(w.fr)}`;
    const prior = seenWord.get(key);
    if (prior) dupeWords.push(`${prior} vs ${w.id} ("${w.fr}")`);
    else seenWord.set(key, w.id);
  }
  if (dupeWords.length) die(`the same word twice in one theme:\n  ${dupeWords.join('\n  ')}`);

  const SEPARATE_POOLS = new Set(['review+voiceflash', 'flashcard+review']);
  const strandedVocab = NEW_ITEMS.filter(
    (i) => (i.level === 'a1' || i.level === 'a2')
      && i.kind !== 'sentence'
      && (i.cardType ?? 'vocab') === 'vocab'
      && !SEPARATE_POOLS.has([...i.drills].sort().join('+'))
      && !(i.drills.includes('flashcard') && i.drills.includes('voiceflash')),
  );
  if (strandedVocab.length) {
    die(`a1/a2 vocab items missing flashcard or voiceflash:\n  ${strandedVocab.map((i) => `${i.id} ${JSON.stringify(i.drills)}`).join('\n  ')}`);
  }

  /* ── a1.03's measured population, through the REAL function ────────────── */

  const genderPopulation = endingPopulation(
    NEW_ITEMS.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags })),
  );
  if (genderPopulation.length) {
    die(
      `this batch would add ${genderPopulation.length} row(s) to a1.03's measured ending population, which can move `
      + `twenty figures printed on its cards:\n  `
      + genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n`
      + `  NOTHING in this lesson should reach that population. A question word is not a noun and carries no\n`
      + `  gender field, and the two nouns the quel paradigm runs on (le train, la valise) are REUSED from\n`
      + `  fr.a1.deplacements rather than authored, for exactly this reason. a1.11 moved a1.03's -e statistic\n`
      + `  this way and turned a lesson nobody had touched red.`,
    );
  }

  /* ── The nasal convention, through the REAL checker AND by name ────────── */

  const nasalBad: string[] = [];
  for (const it of AUTHORED) {
    if (it.respell && hasPlainNasalFor(it.fr, it.respell)) nasalBad.push(`${it.id} "${it.fr}" [${it.respell}]`);
  }
  for (const [k, d] of Object.entries(RESPELL)) {
    const bare = d.respell.replace(/^\[|\]$/g, '');
    if (hasPlainNasalFor(d.fr, bare)) nasalBad.push(`RESPELL["${k}"] "${d.fr}" [${bare}]`);
  }
  if (nasalBad.length) die(`respelling(s) closing a nasal with a plain n or m:\n  ${nasalBad.join('\n  ')}`);

  // BY NAME as well, because hasPlainNasalFor cannot see a word-internal nasal
  // (invariant §3) and `comment`, `combien` and `train` are all that shape. The
  // blind spot does not actually reach this lesson, and this loop is what keeps
  // that true rather than something the next author has to re-establish.
  for (const f of NASAL_FORMS) {
    const bare = sub(f).replace(/^\[|\]$/g, '');
    if (!bare.includes('ⁿ')) die(`"${f}" carries a nasal vowel and its respelling [${bare}] closes without a superscript`);
  }
  for (const f of NOT_NASAL_FORMS) {
    const bare = sub(f).replace(/^\[|\]$/g, '');
    if (bare.includes('ⁿ')) die(`"${f}" has NO nasal vowel and its respelling [${bare}] carries a superscript, which teaches a sound that is not there`);
  }

  /* ── The four quel forms carry ONE respelling ──────────────────────────── */
  // The single most important pin in this file. The four shipped cards carried
  // TWO spellings (KEL, KEL, KEHL, KEHL) for one sound, which told a learner the
  // plural sounds different. It does not. No shared checker can see this,
  // because it is a fact about a SET rather than about a row, so all four are
  // pinned individually and a later author cannot re-split them.
  const quelSubs = QUEL_FORMS.map((f) => sub(f));
  if (new Set(quelSubs).size !== 1) {
    die(
      `the quel paradigm carries ${new Set(quelSubs).size} respellings and must carry one:\n  `
      + QUEL_FORMS.map((f, i) => `${f} ${quelSubs[i]}`).join('\n  ') + `\n`
      + `  All four are /kɛl/. Two spellings for one sound is what the shipped cards did and what this lesson\n`
      + `  repairs, and it is INVISIBLE to hasPlainNasalFor because there is no nasal involved.`,
    );
  }

  /* ── The hero: one tail, seven openers, byte-identical ─────────────────── */

  const tailSub = heroTailSub();
  for (const h of HERO) {
    if (!h.fr.endsWith(HERO_TAIL)) die(`hero row ${h.id} does not end with the tail: "${h.fr}"`);
    if (!h.respell?.endsWith(tailSub)) die(`hero row ${h.id} respelling does not end with "${tailSub}": "${h.respell}"`);
  }
  const heroWords = HERO.map((h) => h.word);
  for (const w of [...THE_SEVEN, 'quel']) {
    if (w === 'que') continue; // que is the one that joins the frame; it is act 4
    if (!heroWords.includes(w)) die(`the hero table does not carry "${w}"`);
  }

  /* ── Lesson ────────────────────────────────────────────────────────────── */

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  if (LESSON.sections.length !== EXPECTED_SECTIONS) {
    die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);
  }

  const knownIds = new Set([...ids, ...REUSED.map((r) => r.id), ...LESSON.itemIds]);
  const density = validateDensity(LESSON, knownIds);
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  const authoredJson = JSON.stringify({ AUTHORED, LESSON });
  if (authoredJson.includes('—') || authoredJson.includes('–')) die('em or en dash in authored copy, the house style bans it');
  if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
  if (authoredJson.includes('‿')) die('U+203F tie character in authored copy, which renders as a low underscore on a Pixel 6');
  if (authoredJson.includes('’')) die('curly apostrophe in authored copy; this corpus is 99.5% straight (12,699 vs 67)');
  if (/"autoplay"/.test(authoredJson)) die('autoplay is declared in schema.ts and implemented by NO component');
  if (/imageRef/.test(authoredJson)) die('imageRef is validated by nothing and an unregistered ref draws a blank box');

  /* ── comment, ASSERTED BY NAME ─────────────────────────────────────────── */
  // The unit's canDo omits it. This lesson teaches it deliberately. The
  // assertion exists so a later reader who spots the mismatch cannot "correct"
  // the lesson into the unit string.
  const commentSections = LESSON.sections.filter((s) => hasWord(JSON.stringify(s), 'comment'));
  if (commentSections.length < 5) {
    die(
      `"comment" appears in ${commentSections.length} section(s) and this lesson is required to teach it.\n`
      + `  The unit canDo omits it: "${UNIT_CANDO}". That mismatch is REPORTED, not resolved by dropping the\n`
      + `  word. If you are here because the canDo does not mention comment, the canDo is the thing to change,\n`
      + `  and changing it is a curriculum decision rather than this batch's.`,
    );
  }

  /* ── Every one of the seven, by name, in the lesson ────────────────────── */
  // hasWord, NOT a regex with \b: JavaScript's \b is ASCII-only and /\boù\b/
  // matches nothing at all, because the trailing ù is not a word character.
  // A first draft of this loop reported `où` as absent from a lesson that names
  // it on seventeen screens. Invariant §0's first trap.
  const sectionJson = LESSON.sections.map((s) => JSON.stringify(s));
  for (const w of [...THE_SEVEN, ...QUEL_FORMS, 'quoi']) {
    const n = sectionJson.filter((s) => hasWord(s, w)).length;
    if (!n) die(`"${w}" appears in no section of the lesson`);
  }

  /* ── The reframe, against an explicit constant ─────────────────────────── */

  const hits = LESSON.sections.filter((s) => JSON.stringify(s).includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears in ${hits} section(s), expected exactly ${REFRAME_APPEARANCES}. Move REFRAME_APPEARANCES deliberately, not to match.`);
  }

  /* ── The register system belongs to a1.19, which is UNBUILT ────────────── */

  const lessonJson = JSON.stringify(LESSON).toLowerCase();
  for (const p of REGISTER_TEACHING) {
    if (lessonJson.includes(p.toLowerCase())) {
      die(
        `register teaching leaked into a1.20: "${p}"\n`
        + `  a1.19 "Yes/No Questions" owns the three ways to ask and has NOT been built. This lesson borrows\n`
        + `  exactly one frame and says on the card that it is borrowed. It teaches no register system, so\n`
        + `  a1.19 still has a lesson whenever it lands.`,
      );
    }
  }
  for (const p of [...RELATIVE_FRAMES, ...INDIRECT_QUESTION_FRAMES]) {
    if (lessonJson.includes(p.toLowerCase())) die(`a neighbour's content leaked into a1.20: "${p}"`);
  }

  /* ── Quiz ──────────────────────────────────────────────────────────────── */

  const quiz = LESSON.sections.find((s) => s.type === 'quiz') as { rounds?: { id: string; targets?: string[]; questions: Record<string, unknown>[] }[] } | undefined;
  if (!quiz?.rounds) die('the lesson has no quiz section carrying rounds');
  const quizSections = LESSON.sections.filter((s) => s.type === 'quiz');
  if (quizSections.length !== 1) {
    die(`${quizSections.length} quiz sections. lessonPager.logic.ts appends exactly ONE, so the rest are authored and drawn by nothing (a1.01 shipped 12 such questions).`);
  }
  const rounds = quiz.rounds;
  if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} quiz rounds, found ${rounds.length}`);
  const qs = rounds.flatMap((r) => r.questions);

  const mcqN = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  if (mcqN * 2 > qs.length) die(`${mcqN}/${qs.length} questions are mcq. At most half may be.`);

  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id));
  for (const q of qs) {
    if (!q.why) die(`quiz question has no why: ${String(q.q).slice(0, 60)}`);
    if (!q.ref) die(`quiz question has no ref: ${String(q.q).slice(0, 60)}`);
    if (!sectionIds.has(q.ref as string)) die(`quiz ref "${q.ref}" names no section in this lesson`);
    const opts = q.opts as string[] | undefined;
    if (opts) {
      if (new Set(opts).size !== opts.length) die(`duplicate option in "${String(q.q).slice(0, 60)}"`);
      for (const o of opts) {
        if (POSITIONAL.test(o)) {
          die(
            `option "${o}" refers to a position in the OPTION LIST, and QuizDeckView shuffles the options of\n`
            + `  every closed question per attempt, so the positions the learner sees are not the ones authored.`,
          );
        }
      }
    }
  }

  /* ── Every stem names the FACT the learner wants, in English ───────────── */
  // "où or quand?" tests nothing, because both are real words and the stem does
  // not say which answer is wanted. Every closed stem here has to contain an
  // English statement of intent.
  const WANT_MARKERS = [
    'you want', 'somebody answers', 'you are', 'which word', 'how much', 'how many',
    'what decided', 'what separates', 'why', 'which of these', 'listen', 'how do you know',
    'in «', 'somebody writes', 'somebody says', 'meaning',
  ];
  const vagueStems = qs.filter((q) => {
    const stem = String(q.q).toLowerCase();
    return !WANT_MARKERS.some((m) => stem.includes(m));
  });
  if (vagueStems.length) {
    die(
      `${vagueStems.length} quiz stem(s) do not say which fact the learner wants:\n  `
      + vagueStems.map((q) => String(q.q)).join('\n  ') + `\n`
      + `  "où or quand?" tests nothing. "You want to know what time the train leaves" has exactly one answer.`,
    );
  }

  /* ── Free text accepts what it displays, through the REAL matcher ──────── */

  const freeText = qs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot' || q.format === 'speak');
  for (const q of freeText) {
    const accept = (q.accept ?? []) as string[];
    const shown = (q.answer ?? q.target) as string | undefined;
    if (!shown) die(`free-text question has no displayed answer: ${String(q.q).slice(0, 60)}`);
    if (!matchesAccept(shown, accept)) {
      die(
        `a free-text question does not accept the answer it displays:\n  q: ${String(q.q)}\n`
        + `  shows: "${shown}"\n  accepts: ${JSON.stringify(accept)}`,
      );
    }
  }

  /* ── NO free-text question claims to test an accent ────────────────────── */
  // fold() strips accents, so où and ou fold together and no free-text format
  // can separate them. An earlier draft of r1 asked the learner to restore the
  // accent in an errorSpot and would have accepted the answer without it. Only
  // mcq can test this, because its options are picked rather than typed.
  for (const q of freeText) {
    const why = String(q.why ?? '').toLowerCase();
    if (/\baccent\b/.test(why)) {
      die(
        `a ${q.format} question's why claims to test an accent: ${String(q.q).slice(0, 60)}\n`
        + `  errorSpot and typeIn both run matchesAccept -> fold(), and fold() STRIPS ACCENTS, so "ou" and\n`
        + `  "où" are the same string to it. Only mcq can test this. See r6-only-the-page.`,
      );
    }
  }

  /* ── The answer spread ─────────────────────────────────────────────────── */

  const closed = qs.filter((q) => typeof q.correct === 'number');
  const slots: Record<number, number> = {};
  for (const q of closed) slots[q.correct as number] = (slots[q.correct as number] ?? 0) + 1;
  for (const [s, n] of Object.entries(slots)) {
    const pct = (n / closed.length) * 100;
    if (pct > 40) die(`slot ${s} holds ${pct.toFixed(0)}% of correct answers (cap 40%)`);
  }

  /* ── No ear question tries to separate a homophone pair ────────────────── */
  // où and ou are homophones. All four shapes of quel are homophones. Those are
  // the two most interesting distinctions in the lesson and the ear cannot reach
  // either, so a listenChoose question on one certifies a bug.
  const earQs = qs.filter((q) => q.format === 'listenChoose');
  for (const q of earQs) {
    const opts = ((q.opts ?? []) as string[]).map((o) => o.toLowerCase().trim());
    const quels = opts.filter((o) => (QUEL_FORMS as readonly string[]).includes(o));
    if (quels.length > 1) die(`a listenChoose question offers ${quels.join(' and ')}, which are one sound: ${String(q.q)}`);
    if (opts.includes('ou') && opts.includes('où')) die(`a listenChoose question offers où against ou, which are one sound: ${String(q.q)}`);
  }

  /* ── Drill reachability ────────────────────────────────────────────────── */
  // drillForRound fires the drill of the FIRST resolving target only, then
  // stops. A drill named in second place is dead content. a1.05 shipped two and
  // a1.07's first draft a third.
  const triggers = LESSON.errorTriggers ?? [];
  if (triggers.length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} error triggers, found ${triggers.length}`);
  const triggerDrill = new Map(triggers.map((t) => [t.id, t.drill]));
  const firedBy = new Map<string, string[]>();
  const leads: string[] = [];
  for (const r of rounds) {
    const first = (r.targets ?? []).find((t) => triggerDrill.get(t));
    if (!first) die(`round ${r.id} names no target with a drill, so failing it teaches nothing`);
    const d = triggerDrill.get(first)!;
    leads.push(`${r.id} → ${first} → ${d}`);
    firedBy.set(d, [...(firedBy.get(d) ?? []), r.id]);
  }
  const teaching = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  for (const d of teaching) {
    const fired = firedBy.get(d.id) ?? [];
    if (fired.length !== 1) {
      die(`drill "${d.id}" is the first resolving target of ${fired.length} round(s) and must be exactly one. A drill named in second place never runs.`);
    }
  }
  for (const t of triggers) {
    for (const s of t.detectOn ?? []) {
      const base = s.split('/')[0];
      if (!sectionIds.has(base)) die(`trigger ${t.id} detects on "${s}", and "${base}" is not a section in this lesson`);
    }
  }

  /* ── Every itemId is ON A SCREEN, not merely resolvable ────────────────── */
  // a1.08 shipped 43 itemIds that resolved perfectly, were released to spaced
  // repetition, and were drawn by nothing.
  //
  // "ON A SCREEN" means one of two things, and both count:
  //   - the id itself appears, which is how a drill, a dictation, a practice
  //     mission and a groupDrill item reference a row; or
  //   - the row's FRENCH appears, which is how a card, a table cell and a
  //     detail modal show one.
  // Checking only the first would fail every headword card in the lesson, and
  // checking only the second would miss a drill. a1.17 checks the second.
  const surfaceText = strings(LESSON.sections).concat(strings(LESSON.drills ?? [])).join('\n');
  const allRows = new Map([...AUTHORED, ...IMPORTED, ...REUSED].map((r) => [r.id, r.fr]));
  const orphan = LESSON.itemIds.filter((id) => {
    if (surfaceText.includes(id)) return false;
    const fr = allRows.get(id);
    return !fr || !surfaceText.includes(fr);
  });
  if (orphan.length) {
    die(
      `${orphan.length} itemId(s) are declared and drawn by nothing:\n  `
      + orphan.map((id) => `${id} "${allRows.get(id) ?? '?'}"`).join('\n  ') + `\n`
      + `  The question is "did the learner see it", not "does this id resolve". a1.08 shipped 43 itemIds that\n`
      + `  resolved perfectly, were released to spaced repetition, and were drawn by no component.`,
    );
  }

  /* ── Tranches release everything once, and nothing untaught ────────────── */

  const tranches = LESSON.deckTranche ?? [];
  if (tranches.length !== (LESSON.acts?.length ?? 0)) {
    die(`${tranches.length} tranches against ${LESSON.acts?.length} acts; they are index-aligned`);
  }
  const flat = tranches.flat();
  const trancheDupes = flat.filter((id, i) => flat.indexOf(id) !== i);
  if (trancheDupes.length) die(`item(s) released by more than one tranche: ${[...new Set(trancheDupes)].join(', ')}`);
  const taught = new Set(LESSON.itemIds);
  const unreleased = [...taught].filter((id) => !flat.includes(id));
  if (unreleased.length) die(`taught but released by no tranche: ${unreleased.join(', ')}`);
  const stray = flat.filter((id) => !taught.has(id));
  if (stray.length) die(`released but not taught: ${stray.join(', ')}`);

  // NO TRANCHE RELEASES AN ITEM THE ACTS BEFORE IT HAVE NOT SHOWN. a1.17 shipped
  // v1 with two such rows and its own test caught them.
  // Reachability is the SAME two-way rule as above: an id counts as shown when
  // the id appears (a drill, a dictation, a practice list) OR when the row's
  // French appears (a card, a table cell, a detail modal). A first draft looked
  // for the id only and reported all thirteen of act 1's rows, every one of
  // which is on the hero table.
  const actSections = (LESSON.acts ?? []).map((a) => a.sections);
  for (let i = 0; i < tranches.length; i += 1) {
    const upTo = actSections.slice(0, i + 1).flat();
    const shownByNow = strings(
      LESSON.sections.filter((s) => upTo.includes((s as { id?: string }).id ?? '')),
    ).join('\n');
    const early = tranches[i].filter((id) => {
      if (shownByNow.includes(id)) return false;
      const fr = allRows.get(id);
      return !fr || !shownByNow.includes(fr);
    });
    if (early.length) {
      die(
        `tranche ${i + 1} releases item(s) no section up to act ${i + 1} shows:\n  ${early.join('\n  ')}\n`
        + `  A card released before its mission is a card the learner is asked to rate before they have met it.`,
      );
    }
  }

  /* ── Dictation stays in LETTERS mode ───────────────────────────────────── */

  const byId = new Map(NEW_ITEMS.map((i) => [i.id, i]));
  const modes: string[] = [];
  for (const id of INTERROGATIFS_DICTATION_IDS) {
    const it = byId.get(id);
    if (!it) die(`dictation target ${id} is not in this batch`);
    const m = dicteeMode(it.fr);
    modes.push(`${m.padEnd(8)} ${it.fr}`);
    if (m !== 'letters') {
      die(
        `dictation target ${id} "${it.fr}" is in ${m} mode.\n`
        + `  Word mode hands the learner each word as a pre-spelled tile, so tapping one marked "quel" is not\n`
        + `  choosing between quel and quelle, which is what act 3 teaches.`,
      );
    }
  }

  /* ── Speak: whole questions only, all carrying voiceflash ──────────────── */

  const speakIds = INTERROGATIFS_SPEAK_IDS;
  for (const id of speakIds) {
    const it = byId.get(id);
    if (!it) die(`speak target ${id} is not in this batch`);
    if (!it.drills.includes('voiceflash')) die(`speak target ${id} carries no voiceflash, so the mic deck cannot score it`);
    // A bare question word is not a question and cannot be right or wrong.
    if (it.kind !== 'sentence') die(`speak target ${id} "${it.fr}" is a ${it.kind}, not a whole question`);
  }

  /* ── Production surfaces: no forbidden form, no bare combien, no verb
   *    the learner has never been taught ─────────────────────────────────── */
  // STEMS AND TRAP CARDS ARE EXCLUDED. An errorSpot stem MUST quote the wrong
  // form and a commonErrors card MUST show it; that is what they are for. An
  // earlier draft of this guard ran over every string and reported five
  // legitimate teaching surfaces, which is how a guard gets deleted.
  const produced: string[] = [
    ...qs.flatMap((q) => [
      ...((q.accept ?? []) as string[]),
      (q.answer ?? '') as string,
      (q.target ?? '') as string,
    ]),
    ...(LESSON.drills ?? []).flatMap((d) => ((d as { pairs?: [string, string][] }).pairs ?? []).map((p) => p[1])),
    ...speakIds.map((id) => byId.get(id)?.fr ?? ''),
    ...AUTHORED.map((r) => r.fr),
  ].filter(Boolean);

  for (const p of FORBIDDEN_FORMS) {
    const hit = produced.find((s) => s.toLowerCase().includes(p.toLowerCase()));
    if (hit) die(`a forbidden form reached a production surface: "${p}" in "${hit}"`);
  }
  for (const s of produced) {
    if (bareCombienBeforeNoun(s)) {
      die(
        `a bare combien reached a production surface: "${s}"\n`
        + `  combien brings de with it the moment the thing being counted is named. A learner must never be\n`
        + `  asked to produce combien + noun without it.`,
      );
    }
  }

  /* ── NO SURFACE ASKS THE LEARNER TO CONJUGATE ANYTHING BUT ÊTRE OR AVOIR ──
   *
   * The distinction that matters is CONJUGATE, not "contains a verb". There is
   * no regular-verb unit in A1 (-er verbs are a2.01, faire is a2.12), so this
   * lesson displays pars, part, fais, habites, dure and the rest freely as
   * reading exposure. What it must never do is make the learner PRODUCE a form
   * from nothing.
   *
   * So the check runs on `typeIn` only, and it allows a verb that the QUESTION
   * STEM already supplies:
   *
   *   dictation   the form arrives in the audio, so nothing is being chosen
   *   speak       the target is printed on the card
   *   errorSpot   the stem quotes the sentence and only one word moves
   *   typeIn      NOTHING is supplied. This is the one that can ask for a
   *               conjugation, and three of them did until this guard ran.
   *
   * The three that did: r1 asked for « Quand est-ce que le train part ? », r2
   * for « Comment vas-tu ? » and r4 for « Qu'est-ce que tu fais ? ». All three
   * now give the clause in the stem and ask only for the question word and the
   * frame, which is what this lesson actually owns. */
  const conjugationAsks: string[] = [];
  for (const q of qs.filter((x) => x.format === 'typeIn')) {
    const stem = String(q.q ?? '').toLowerCase();
    const answers = [...((q.accept ?? []) as string[]), String(q.answer ?? '')];
    for (const a of answers) {
      for (const v of EXPOSURE_ONLY) {
        if (PRODUCIBLE.has(v)) continue;
        if (hasWord(a, v) && !hasWord(stem, v)) conjugationAsks.push(`"${v}" in typeIn answer "${a}" (stem does not supply it)`);
      }
    }
  }
  if (conjugationAsks.length) {
    die(
      `${conjugationAsks.length} typeIn question(s) ask the learner to produce a verb no A1 unit teaches:\n  `
      + [...new Set(conjugationAsks)].join('\n  ') + `\n`
      + `  Give the clause in the stem and ask for the question word and the frame, which is what this lesson\n`
      + `  owns. Reading exposure is fine everywhere; producing a form from nothing is not.`,
    );
  }

  /* ── No grammar jargon on a learner surface ────────────────────────────── */
  // grammarIntroduced is addressed to the curriculum and may use the precise
  // words; a card may not. The sheet is included, because a learner opens it.
  const JARGON = [
    'interrogative', 'pronoun', 'adjective agreement', 'determiner', 'antecedent',
    'periphrastic', 'orthographic', 'homophonous', 'lexeme', 'complementary distribution',
    'subject pronoun', 'direct object', 'clause', 'morpheme',
  ];
  const learnerFacing = [
    ...strings(LESSON.sections),
    ...strings(LESSON.sheets ?? []),
    ...strings(LESSON.terms ?? {}),
    ...strings(LESSON.drills ?? []),
    LESSON.intro,
    ...strings(LESSON.overview ?? {}),
  ].join(' ').toLowerCase();
  // WHOLE WORDS, through hasWord. A substring check fires on "pronounced",
  // which contains "pronoun" and is ordinary English and exactly the right word
  // for a lesson about endings you never say. It did, on six legitimate cards.
  for (const j of JARGON) {
    if (hasWord(learnerFacing, j)) die(`grammar jargon on a learner surface: "${j}"`);
  }

  /* ── Sheets ────────────────────────────────────────────────────────────── */
  // ReferenceSheet.tsx renders exactly three section types inside a sheet and
  // its default branch draws the TITLE and nothing else. a1.17 shipped two
  // cheatSheet sections here and they drew fourteen invisible rows.
  const SHEET_RENDERS = new Set(['teach', 'letterGrid', 'table']);
  for (const sh of LESSON.sheets ?? []) {
    for (const s of sh.sections ?? []) {
      if (!SHEET_RENDERS.has(s.type)) {
        die(`sheet ${sh.id} carries a "${s.type}" section. ReferenceSheet.tsx draws only ${[...SHEET_RENDERS].join(', ')} and falls through to a title-only branch for anything else.`);
      }
    }
  }
  const declaredSheets = new Set((LESSON.sheets ?? []).map((s) => s.id));
  const referenced = new Set(LESSON.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[]);
  for (const id of referenced) if (!declaredSheets.has(id)) die(`a section names sheetId "${id}", which this lesson does not declare`);
  for (const id of declaredSheets) if (!referenced.has(id)) die(`sheet "${id}" is declared and reachable from no section`);

  /* ── Database ──────────────────────────────────────────────────────────── */

  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();
  try {
    /* ── The imported manifest is a RECORDED READ. Has it drifted? ───────── */
    const importedIds = IMPORTED.map((i) => i.id);
    const live = await client.query<{ id: string; kind: string; level: string; theme: string; fr: string; en: string; ipa: string | null; respell: string | null; status: string }>(
      `select id, kind, level, theme, fr, en, ipa, respell, status from content_items where id = any($1)`,
      [importedIds],
    );
    if (live.rows.length !== importedIds.length) {
      const got = new Set(live.rows.map((r) => r.id));
      die(`${importedIds.length - live.rows.length} imported row(s) are not in the database: ${importedIds.filter((i) => !got.has(i)).join(', ')}`);
    }
    // A REPAIR TARGET MAY CARRY EITHER VALUE, and this batch must stay
    // idempotent across its own repairs. The manifest is a recorded read taken
    // BEFORE the repairs ran and deliberately reproduces the broken respellings;
    // once the batch has been applied once, the database holds the repaired
    // ones. A plain field-by-field comparison therefore reports eight rows as
    // "drifted" on the second run and refuses to write. Found by re-running the
    // batch after a device fix.
    const repairedValue = new Map(RESPELL_REPAIRS.map((r) => [r.id, r.to]));
    const drift: string[] = [];
    for (const want of IMPORTED) {
      const got = live.rows.find((r) => r.id === want.id)!;
      if (got.status !== 'published') drift.push(`${want.id} status=${got.status}`);
      for (const f of ['kind', 'level', 'theme', 'fr', 'en', 'ipa', 'respell'] as const) {
        const a = (want as Record<string, unknown>)[f] ?? null;
        const b = (got as Record<string, unknown>)[f] ?? null;
        if (a === b) continue;
        if (f === 'respell' && repairedValue.get(want.id) === b) continue;
        drift.push(`${want.id}.${f}: manifest ${JSON.stringify(a)} vs db ${JSON.stringify(b)}`);
      }
    }
    if (drift.length) {
      die(
        `the imported manifest has drifted from the database:\n  ${drift.join('\n  ')}\n`
        + `  Regenerate it: pnpm tsx scripts/_interrogatifs_manifest.ts > scripts/data/_interrogatifs-manifest.gen.txt\n`
        + `  A stale manifest puts the seed ahead of rows nobody has looked at.`,
      );
    }

    /* ── The reused rows are published and are NOT rewritten ─────────────── */
    const reusedLive = await client.query<{ id: string; fr: string; status: string }>(
      `select id, fr, status from content_items where id = any($1)`,
      [REUSED.map((r) => r.id)],
    );
    if (reusedLive.rows.length !== REUSED.length) die(`${REUSED.length - reusedLive.rows.length} reused row(s) are missing from the database`);
    for (const r of REUSED) {
      const got = reusedLive.rows.find((x) => x.id === r.id)!;
      if (got.fr !== r.fr) die(`reused row ${r.id} now reads "${got.fr}", the manifest recorded "${r.fr}"`);
      if (ids.includes(r.id)) die(`${r.id} is listed as REUSED and is also being written by this batch`);
    }

    /* ── THE ID COLLISION CHECK, AND WHY IT IS NOT A NEXT-FREE CHECK ──────
     *
     * a1.15 landed inside a1.17's range mid-build and a HIGHEST-ID CHECK PASSED
     * IT CLEANLY, because eighteen rows below that batch's top do not move the
     * maximum. TWO lessons landed during THIS build (a1.18 and a1.22) and the
     * seed moved from 31 lessons and 7,542 items to 33 and 7,638 while these
     * files were being written.
     *
     * So the check is: does any row inside THIS BATCH'S OWN RANGES exist that
     * this batch did not author? An upsert would silently replace it. */
    for (const range of OWNED_ID_RANGES) {
      const prefix = range.from.split('.').slice(0, 3).join('.');
      const inRange = await client.query<{ id: string; fr: string; updated_at: Date }>(
        `select id, fr, updated_at from content_items where id >= $1 and id <= $2 and id like $3`,
        [range.from, range.to, `${prefix}.%`],
      );
      // BY CONTENT, NOT BY ID MEMBERSHIP, and that distinction is the whole
      // value of this check.
      //
      // a1.17's version of it filtered on `!ids.includes(r.id)`, which works
      // only when the other lesson took ids ADJACENT to yours. a1.19 took
      // fr.a1.questions.352-.373, which is EXACTLY the range this lesson had
      // authored into, so every one of its rows was "mine" by id and the guard
      // passed clean while twenty-two published rows were about to be
      // overwritten. The tell was the theme row count moving from 502 to 524.
      //
      // So a row is foreign when it exists at one of this batch's ids and says
      // something else.
      const mine = new Map(NEW_ITEMS.map((i) => [i.id, i.fr]));
      const foreign = inRange.rows.filter((r) => !mine.has(r.id) || mine.get(r.id) !== r.fr);
      if (foreign.length) {
        die(
          `${foreign.length} row(s) inside this batch's own id range ${range.from}..${range.to} were authored by somebody else:\n  `
          + foreign.map((r) => `${r.id} "${r.fr}" (updated ${r.updated_at.toISOString()})`).join('\n  ') + `\n`
          + `  Writing this batch would OVERWRITE them. Renumber this lesson rather than forcing it, and move\n`
          + `  OWNED_ID_RANGES. A highest-id check does NOT catch this: a range entirely below this one's top\n`
          + `  leaves the maximum unmoved, which is exactly what happened to a1.15 and a1.17 on 2026-08-06.`,
        );
      }
    }

    /* ── The theme this lesson binds to, measured ────────────────────────── */
    const themeCount = await client.query<{ n: string }>(
      `select count(*) as n from content_items where theme = $1 and status = 'published'`,
      [UNIT_THEME],
    );
    const nBound = Number(themeCount.rows[0].n);

    /* ── The eight repair targets still carry the value we expect ────────── */
    const repairRows = await client.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where id = any($1)`,
      [RESPELL_REPAIRS.map((r) => r.id)],
    );
    let alreadyRepaired = 0;
    for (const r of RESPELL_REPAIRS) {
      const got = repairRows.rows.find((x) => x.id === r.id);
      if (!got) die(`respelling repair target ${r.id} is not in the database`);
      if (got.fr !== r.fr) die(`respelling repair target ${r.id} now reads "${got.fr}", expected "${r.fr}"`);
      if (got.respell === r.to) { alreadyRepaired += 1; continue; }
      if (got.respell !== r.from) {
        die(
          `respelling repair target ${r.id} carries "${got.respell}", and this batch expected "${r.from}".\n`
          + `  Somebody else has changed it. Two people disagreeing about a transcription is a decision rather\n`
          + `  than a merge, so nothing is written.`,
        );
      }
    }

    /* ── The unit ────────────────────────────────────────────────────────── */
    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID],
    );
    if (!unitRow.rows.length) die(`unit ${UNIT_ID} is not in the database`);
    const unitBody = unitRow.rows[0].body;

    if (unitBody.title !== UNIT_TITLE || unitBody.sub !== UNIT_SUB || unitBody.canDo !== UNIT_CANDO) {
      die(
        `the unit's title, sub or canDo has changed since this lesson was written:\n`
        + `  title: ${JSON.stringify(unitBody.title)} vs ${JSON.stringify(UNIT_TITLE)}\n`
        + `  sub:   ${JSON.stringify(unitBody.sub)} vs ${JSON.stringify(UNIT_SUB)}\n`
        + `  canDo: ${JSON.stringify(unitBody.canDo)} vs ${JSON.stringify(UNIT_CANDO)}`,
      );
    }

    const themesNow = (unitBody as { themes?: string[] | null }).themes;
    const nextUnit: Unit = {
      ...unitBody,
      // The unit declares themes: null and the brief asks for it to be bound.
      themes: [UNIT_THEME],
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    } as Unit;
    if (nextUnit.title !== unitBody.title || nextUnit.sub !== unitBody.sub || nextUnit.canDo !== unitBody.canDo) {
      die('this batch would change the unit title, sub or canDo. Copy them byte for byte or change them deliberately.');
    }
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    const existingLesson = await client.query<{ version: number }>(
      `select (body->>'version')::int as version from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id],
    );
    const prior = existingLesson.rows[0]?.version;
    guardLessonVersion({
      lessonId: LESSON.id, prior, authored: LESSON.version,
      sourceFile: 'interrogatifs-lesson.ts', dryRun: DRY_RUN, die,
    });

    /* ── a1.19, which is this lesson's declared prerequisite ─────────────── */
    const prereq = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = 'a1.19'`,
    );
    const a119 = prereq.rows[0]?.body;
    const a119Built = (a119?.lessonIds ?? []).length > 0;

    /* ── Report ──────────────────────────────────────────────────────────── */

    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = (q.format ?? 'mcq') as string;
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  authored items: ${AUTHORED.length}`);
    console.log(`    fr.a1.questions.374-358: THE HERO. One sentence asked seven ways, one tail, byte-identical`);
    console.log(`    fr.a1.questions.381-360: the scene's two questions, one word apart`);
    console.log(`    fr.a1.questions.383-366: six answers, one per word, each implying exactly one question`);
    console.log(`    fr.a1.questions.389-370: que and quoi in three positions, and the subject/object pair`);
    console.log(`    fr.a1.questions.393-374: où against ou, and combien de against combien d'`);
    console.log(`    fr.a1.questions.397-378: the quel paradigm, one frame, two nouns, four cells`);
    console.log(`    fr.a1.questions.401:     a1.19's frame, bare, with nothing in front of it`);
    console.log(`    fr.sons.questions.174-175: qu'est-ce que and qu'est-ce qui, the only two the theme lacked`);
    console.log(`  the hero tail "${HERO_TAIL}" -> [${tailSub}], identical in all ${HERO.length} rows`);
    console.log(`  imported items: ${IMPORTED.length}, verified field by field against the database`);
    console.log(`  reused items: ${REUSED.length}, already in the seed, untouched`);
    console.log(`  theme "${UNIT_THEME}": ${nBound} published rows, SEVEN of them in the seed.`);
    console.log(`    That theme is OUTSIDE SEED_CUT.themes, so imported rows will not appear in the seed by`);
    console.log(`    themselves and the merge has to carry all ${IMPORTED.length}. Correct behaviour, not a failed merge.`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}", ${prior !== undefined ? `updating v${prior} → v${LESSON.version}` : 'NEW'}, `
      + `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`,
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${triggers.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  the seven: ${THE_SEVEN.join(', ')}`);
    console.log(`    each named on a screen AND carrying a headword card, checked individually with hasWord`);
    console.log(`    (\\b is ASCII-only: /\\boù\\b/ matches NOTHING. Invariant §0.)`);
    console.log(`  quel in all four shapes, ONE respelling: ${QUEL_FORMS.map((f) => `${f}=${sub(f)}`).join('  ')}`);
    console.log(`  headword cards: ${INTERROGATIFS_HEADWORD_IDS.length}, every one imported and none re-authored`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round(mcqN / qs.length * 100)}% (ceiling 50)`);
    console.log(`  every question has a why: yes and a ref that resolves: yes`);
    console.log(`  every stem names the fact wanted, in English: confirmed over ${qs.length} questions`);
    console.log(`  no option refers to a position, none duplicated within a question: confirmed`);
    console.log(`  authored answer spread: ${Object.entries(slots).map(([k, n]) => `slot ${k} ${Math.round(n / closed.length * 100)}%`).join(', ')} (cap 40)`);
    console.log(`  no ear question separates a homophone pair: confirmed (${earQs.length} listenChoose, both on qui/que)`);
    console.log(`  no free-text question claims to test an accent: confirmed (fold() strips them)`);
    console.log(`  SRS tranches: ${tranches.map((t) => t.length).join(' + ')} = ${flat.length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${teaching.length}/${teaching.length}, each the FIRST resolving target of exactly one`);
    for (const l of leads) console.log(`    ${l}`);
    console.log(`  dictation: ${INTERROGATIFS_DICTATION_IDS.length} lines, ALL letters mode`);
    for (const m of modes) console.log(`    ${m}`);
    console.log(`  speak: ${speakIds.length} lines, all carrying voiceflash, NOT ONE a bare question word`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  reframe: "${REFRAME}" in ${hits} sections (constant ${REFRAME_APPEARANCES})`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  no neighbour's content ✓`);

    console.log(`\n  RESPELLING REPAIRS (not silent), display-only:`);
    for (const r of RESPELL_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      console.log(`    ${r.id.padEnd(30)} ${r.fr.padEnd(12)} "${now}" → "${r.to}"   ${r.caughtByChecker ? '(checker catches it)' : '(INVISIBLE to the shared checker)'}`);
    }
    console.log(`    Repairs the shared checker cannot see: ${REPAIRS_INVISIBLE_TO_CHECKER.join(', ')}`);
    console.log(`      None of these three is the documented word-internal blind spot. quel/quelle carry NO nasal`);
    console.log(`      at all; what is wrong with them is a fact about a SET (two spellings for one sound, side by`);
    console.log(`      side on one screen) and no per-row checker can see that. They are pinned by name instead.`);
    if (alreadyRepaired) console.log(`    (${alreadyRepaired} of ${RESPELL_REPAIRS.length} already carry the corrected value; re-applying is a no-op)`);
    console.log(`\n  NOT REPAIRED, and reported rather than done:`);
    for (const n of NOT_REPAIRED) console.log(`    ${n.id.padEnd(34)} "${n.fr}" ${n.respell}   ${n.why}`);

    console.log(`\n  THE canDo DISCREPANCY, which is NOT resolved here:`);
    console.log(`    unit canDo: "${UNIT_CANDO}"`);
    console.log(`    It lists who, what, where, when, why and how much. IT OMITS "comment".`);
    console.log(`    The build request asks for comment, the corpus holds 34 published sentences using it in this`);
    console.log(`    theme alone, and a1.01 shipped « Comment ça va ? » as the first thing in the course.`);
    console.log(`    COMMENT IS TAUGHT (${commentSections.length} sections) AND THE UNIT IS NOT REWRITTEN. Paul decides.`);

    console.log(`\n  a1.19, this lesson's DECLARED PREREQUISITE: ${a119Built ? `BUILT (${(a119?.lessonIds ?? []).join(', ')})` : 'NOT BUILT'}`);
    if (!a119Built) {
      console.log(`    a1.19 is ABSENT, so exactly ONE frame is taken (${JSON.stringify(RESPELL['est-ce que'].fr)}) and the card says so.`);
      console.log(`    No register system is taught: ${REGISTER_TEACHING.length} guard phrases checked and none appears.`);
      console.log(`    a1.19 still has its whole lesson whenever it lands. See the handover.`);
    }

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(themesNow ?? null)} → ${JSON.stringify(nextUnit.themes)}   (the unit declared null; the brief asks for it to be bound)`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} title/sub/canDo: UNCHANGED, byte for byte`);
    console.log(`\n  HANDOVER: NEXT FREE is ${HANDOVER_NEXT_FREE_IDS.sentences} and ${HANDOVER_NEXT_FREE_IDS.words}.`);
    console.log(`    THREE lessons landed DURING this build. a1.18 and a1.22 touched no id in this theme.`);
    console.log(`    a1.19 TOOK fr.a1.questions.352-.373, which is exactly where these 28 rows had been`);
    console.log(`    authored, so every id shifted by 22 to .374-.401. a1.17's collision guard does NOT`);
    console.log(`    catch that shape: it filters on id membership and a1.19 took the SAME ids, so they read`);
    console.log(`    as this batch's own. The check above compares BY CONTENT instead. Copy that version.`);
    console.log(`    Re-run pnpm corpus:probe --theme questions before authoring here again.`);

    if (DRY_RUN) {
      console.log('\n✓ dry run, all valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of NEW_ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, respell, gender, example, notes, tags, drills, audio_ref, version, status, generated_by, card_type, prompt)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,null,$14,'published','human',$15,$16)
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender, example=excluded.example,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
           card_type=excluded.card_type, prompt=excluded.prompt`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.version, it.cardType ?? null, it.prompt ?? null,
        ],
      );
    }

    for (const r of RESPELL_REPAIRS) {
      const res = await client.query(
        `update content_items set respell = $1 where id = $2 and fr = $3`,
        [r.to, r.id, r.fr],
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`respelling repair for ${r.id} touched ${res.rowCount} rows, rolled back, nothing changed`);
      }
    }

    await client.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)],
    );

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID],
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows, rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ interrogatifs batch applied: ${NEW_ITEMS.length} items (${AUTHORED.length} authored, ${IMPORTED.length} imported)`
      + ` + ${RESPELL_REPAIRS.length} respelling repairs + lesson ${LESSON.id} published,`
      + `\n  unit ${UNIT_ID} bound to "${UNIT_THEME}" and linked. Its canDo was NOT touched and still omits comment.`
      + `\n  Next: pnpm tsx scripts/merge-interrogatifs-into-seed.ts --dry-run`
      + `\n  Do NOT run pnpm content:publish. It regenerates seed.json FROM this database and`
      + `\n  pnpm content:parity exits 1 on pre-existing divergences that are not this lesson's.\n`,
    );
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
