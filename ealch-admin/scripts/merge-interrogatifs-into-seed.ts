// a1.20.l1 "Les mots interrogatifs" -> seed.json.
//
//     pnpm tsx scripts/merge-interrogatifs-into-seed.ts --dry-run
//     pnpm tsx scripts/merge-interrogatifs-into-seed.ts
//
// Runs AFTER author-interrogatifs-batch.ts, never before. The batch writes
// Postgres; this writes the bundled seed. Publishing before both agree deletes
// the lesson from the seed silently, which is how sons.07.l1 was nearly lost.
//
// ── It NAMES the lessons it must not disturb ───────────────────────────────
//
// A count alone lets a one-for-one swap through: drop somebody's lesson, add
// yours, and the total is unchanged. NEIGHBOURS below is a list of ids with a
// reason for each, and the merge dies if any of them is gone afterwards.
//
// ── `questions` is OUTSIDE SEED_CUT.themes, and that is the whole story ────
//
// 524 rows are published in that theme and SEVEN were in the seed before this
// run. So this merge carries 37 imported rows that would otherwise render as
// empty cards, and that is correct behaviour rather than a failed merge. It is
// the opposite of a1.17's position with `famille`, which is inside the cut.
//
// ── `seed.version` is NOT this script's counter ────────────────────────────
//
// It is the OTA snapshot number. publish-content.ts derives it from
// content_snapshots as previous + 1, and content.ts compares it against the
// downloaded manifest to decide whether to adopt an update. A merge must never
// hand-bump it. The LESSON's own `version` is the one that moves.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
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
  NASAL_FORMS, NOT_NASAL_FORMS, OWNED_ID_RANGES, PRODUCIBLE_VERBS, QUEL_FORMS,
  REGISTER_TEACHING, RELATIVE_FRAMES, RESPELL_REPAIRS, REUSED, THE_SEVEN,
  bareCombienBeforeNoun, hasWord, heroTailSub, sub,
} from './data/interrogatifs-corpus.ts';
import {
  INTERROGATIFS_DICTATION_IDS, INTERROGATIFS_ITEM_IDS, INTERROGATIFS_LESSON,
  INTERROGATIFS_SPEAK_IDS, HANDOVER_NEXT_FREE_IDS,
} from './data/interrogatifs-lesson.ts';
import { REFRAME } from './data/interrogatifs-terms.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

const REFRAME_APPEARANCES = 10;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_SECTIONS = 27;
const EXPECTED_AUTHORED = 30;
const EXPECTED_HERO_ROWS = 7;

const UNIT_ID = 'a1.20';
const UNIT_THEMES = ['questions'];
const UNIT_TITLE = 'Question Words';
const UNIT_SUB = 'Les mots interrogatifs';
const UNIT_CANDO = 'Can ask who, what, where, when, why and how much questions';

/** NAMED, not counted. Each of these has a reason, and the merge dies if any is
 *  gone afterwards. a1.19 is first because it landed mid-build, shares this
 *  theme, and is the one this merge could most plausibly damage. */
const NEIGHBOURS: Record<string, string> = {
  'a1.19.l1': 'this lesson\'s declared prerequisite, it landed mid-build, it owns fr.a1.questions.352-.373 and it shares this theme.',
  'a1.18.l1': 'Negation. It landed during this build and its n\' elision is cited by act 5.',
  'a1.17.l1': 'Possessive adjectives. Its mon-before-a-vowel rule is the second link in the anti-hiatus chain act 5 names.',
  'a1.13.l1': 'Colours. Its writtenNotHeard term is what act 3 references for the silent quel endings.',
  'a1.12.l1': 'Time. It shipped Quelle heure est-il as a frozen chunk and act 3 takes it apart.',
  'a1.10.l1': 'Weather. It shipped Quel temps fait-il as an unanalysed block.',
  'a1.03.l1': 'Noun gender. Its measured ending population must not move, and nothing here is a gendered noun.',
  'a1.01.l1': 'Greetings. It shipped Comment ça va, which is why comment is taught here despite the canDo.',
  'sons.05.l1': 'Les accents. It owns the grave that separates où from ou, and both headwords are its.',
  'sons.07.l1': 'Elision. The first link in the anti-hiatus chain, and the lesson a publish nearly erased.',
};

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

const POSITIONAL = /\b(the (first|second|third|last|top|bottom) (one|option|answer|choice)|both of (the above|these)|none of (the above|these)|all of the above|neither of these)\b/i;
const PRODUCIBLE = new Set(PRODUCIBLE_VERBS);
const EXPOSURE_ONLY = ['pars', 'part', 'fais', 'fait', 'habites', 'dure', 'commence', 'préfères', 'passe', 'portes', 'parles', 'ouvre', 'vas', 'appelez', 'pleut', 'peux', 'prends'];

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] } & Record<string, unknown>;

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTED];
const LESSON = INTERROGATIFS_LESSON;

console.log(`→ ${SEED}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);
if (DRY_RUN) console.log('  (dry run, nothing will be written)');

/* ── What must survive, measured BEFORE anything is built ─────────────────── */

const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

for (const [id, why] of Object.entries(NEIGHBOURS)) {
  if (!seed.lessons.some((l) => l.id === id)) {
    // A neighbour that is in Postgres but not yet merged is a warning; one that
    // was in the seed and has vanished is a failure. Distinguish them by asking
    // whether it was there when this run started, which is all this file knows.
    console.warn(`\n⚠  ${id} is not in the seed BEFORE this merge. ${why}\n   It may have been applied to Postgres and not yet merged. This run will not create it.\n`);
  }
}

/* ── Items ────────────────────────────────────────────────────────────────── */

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

if (AUTHORED.length !== EXPECTED_AUTHORED) die(`expected ${EXPECTED_AUTHORED} authored rows, found ${AUTHORED.length}`);
if (HERO.length !== EXPECTED_HERO_ROWS) die(`the hero must carry all ${EXPECTED_HERO_ROWS} question words, found ${HERO.length}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) die(`duplicate ids in this merge: ${[...new Set(dupes)].join(', ')}`);

/* ── The reused rows are ALREADY in the seed and say what we recorded ─────── */

for (const r of REUSED) {
  const inSeed = seed.items.find((i) => i.id === r.id);
  if (!inSeed) die(`reused row ${r.id} "${r.fr}" is not in the seed, so this merge would have to carry it. Move it to IMPORTED.`);
  if (inSeed.fr !== r.fr) die(`reused row ${r.id} reads "${inSeed.fr}" in the seed, the manifest recorded "${r.fr}"`);
  if (ids.includes(r.id)) die(`${r.id} is listed as REUSED and is also being written by this merge`);
}

/* ── No foreign row inside this lesson's id ranges ────────────────────────── */
// BY CONTENT, not by id membership. a1.19 took fr.a1.questions.352-.373, which
// is exactly where these rows were first authored, and a membership filter read
// every one of its rows as this batch's own. See the corpus header.
const mine = new Map(NEW_ITEMS.map((i) => [i.id, i.fr]));
for (const range of OWNED_ID_RANGES) {
  const prefix = range.from.split('.').slice(0, 3).join('.');
  const inRange = seed.items.filter((i) => i.id.startsWith(`${prefix}.`) && i.id >= range.from && i.id <= range.to);
  const foreign = inRange.filter((r) => !mine.has(r.id) || mine.get(r.id) !== r.fr);
  if (foreign.length) {
    die(
      `${foreign.length} row(s) inside ${range.from}..${range.to} say something other than what this merge holds:\n  `
      + foreign.map((r) => `${r.id} seed:"${r.fr}" vs batch:"${mine.get(r.id) ?? '(not ours)'}"`).join('\n  ') + `\n`
      + `  Renumber this lesson rather than forcing it.`,
    );
  }
}

/* ── flashhub coverage, computed over the POST-MERGE item set ─────────────── */
// The way flashhub-coverage.test.ts computes it: keyed on `fr` per theme with
// the article stripped. Two rows sharing a key in one theme are one card served
// twice. Checked over the WHOLE seed after the merge, not just over this batch,
// because the collision that matters is with somebody else's row.
const nextItems: Item[] = [
  ...seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)),
  ...NEW_ITEMS,
].sort((a, b) => a.id.localeCompare(b.id));

const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
const seenWord = new Map<string, string>();
const collisions: string[] = [];
for (const w of nextItems) {
  if (w.kind === 'sentence') continue;
  if ((w.cardType ?? 'vocab') !== 'vocab') continue;
  const key = `${w.theme}::${headword(w.fr)}`;
  const prior = seenWord.get(key);
  if (prior && (ids.includes(w.id) || ids.includes(prior))) collisions.push(`${prior} vs ${w.id} ("${w.fr}" in ${w.theme})`);
  else if (!prior) seenWord.set(key, w.id);
}
if (collisions.length) {
  die(
    `this merge would put the same word twice in one theme:\n  ${collisions.join('\n  ')}\n`
    + `  flashhub-coverage.test.ts treats that as one card served twice. All twelve question words already\n`
    + `  exist as published headwords, which is why this lesson imports them and authors only the two the\n`
    + `  theme genuinely lacked.`,
  );
}

/* ── a1.03's measured population, over the POST-MERGE set ─────────────────── */

const popBefore = endingPopulation(seed.items.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags }))).length;
const popAfter = endingPopulation(nextItems.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags }))).length;
if (popAfter !== popBefore) {
  die(
    `this merge moves a1.03's measured ending population from ${popBefore} to ${popAfter}.\n`
    + `  a1-03-genre.test.ts re-measures twenty printed figures from the seed on every run, and a1.11 turned\n`
    + `  a lesson nobody had touched red exactly this way. Nothing in a1.20 is a gendered single-word noun:\n`
    + `  le train and la valise are REUSED from fr.a1.deplacements rather than authored.`,
  );
}

/* ── Respelling repairs, applied to the seed's copy of each row ───────────── */

const repaired: string[] = [];
for (const r of RESPELL_REPAIRS) {
  const row = nextItems.find((i) => i.id === r.id);
  if (!row) die(`respelling repair target ${r.id} is in neither the seed nor this batch`);
  if (row.fr !== r.fr) die(`respelling repair target ${r.id} reads "${row.fr}", expected "${r.fr}"`);
  if (row.respell === r.to) continue;
  if (row.respell !== r.from) {
    die(
      `respelling repair target ${r.id} carries "${row.respell}" in the seed and this merge expected "${r.from}".\n`
      + `  Two people disagreeing about a transcription is a decision rather than a merge.`,
    );
  }
  row.respell = r.to;
  repaired.push(`${r.id}  ${r.fr}: "${r.from}" → "${r.to}"`);
}

/* ── Every repaired and authored respelling passes the REAL checker ───────── */

for (const r of RESPELL_REPAIRS) {
  if (hasPlainNasalFor(r.fr, r.to)) die(`repaired value for ${r.id} is still flagged: [${r.to}]`);
}
for (const it of AUTHORED) {
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} "${it.fr}" [${it.respell}] closes a nasal with a plain n`);
}
for (const f of NASAL_FORMS) {
  if (!sub(f).includes('ⁿ')) die(`"${f}" is nasal and its respelling ${sub(f)} closes without a superscript`);
}
for (const f of NOT_NASAL_FORMS) {
  if (sub(f).includes('ⁿ')) die(`"${f}" has no nasal and its respelling ${sub(f)} carries a superscript`);
}
const quelSubs = QUEL_FORMS.map((f) => sub(f));
if (new Set(quelSubs).size !== 1) {
  die(`the quel paradigm carries ${new Set(quelSubs).size} respellings: ${QUEL_FORMS.map((f, i) => `${f} ${quelSubs[i]}`).join(', ')}. All four are /kɛl/.`);
}

/* ── The hero, byte for byte ──────────────────────────────────────────────── */

const tailSub = heroTailSub();
for (const h of HERO) {
  if (!h.fr.endsWith(HERO_TAIL)) die(`hero row ${h.id} does not end with the tail`);
  if (!h.respell?.endsWith(tailSub)) die(`hero row ${h.id} respelling does not end with "${tailSub}"`);
}

/* ── Lesson ───────────────────────────────────────────────────────────────── */

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);

const knownIds = new Set(nextItems.map((i) => i.id));
const density = validateDensity(LESSON, knownIds);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

const unresolved = LESSON.itemIds.filter((id) => !knownIds.has(id));
if (unresolved.length) die(`itemId(s) resolve to nothing in the post-merge seed: ${unresolved.join(', ')}`);

// ON A SCREEN, not merely resolvable: the id appears, or the row's French does.
const surfaceText = strings(LESSON.sections).concat(strings(LESSON.drills ?? [])).join('\n');
const allRows = new Map(nextItems.map((r) => [r.id, r.fr]));
// A NUL byte lived in this line until 2026-08-10, as the fallback in
// `allRows.get(id) ?? '<NUL>'`. Two things followed. `file` and grep called
// this source "data", and git would have stored it as a BINARY blob with no
// diffs, which is how merge-bilan-into-seed.ts already appears in one commit.
// And the guard only worked BY ACCIDENT: the intended `?? ''` makes
// `includes('')` true for every row, which inverts to false and empties
// `orphan` on every run, disabling the check silently. The NUL never matched
// anything, so the check survived on a typo.
//
// Written out properly: an id is an orphan when neither the id itself nor the
// row's French appears on any surface a learner sees.
const orphan = LESSON.itemIds.filter((id) => {
  const fr = allRows.get(id);
  return !surfaceText.includes(id) && (fr === undefined || !surfaceText.includes(fr));
});
if (orphan.length) die(`itemId(s) declared and drawn by nothing: ${orphan.join(', ')}`);

const lessonJson = JSON.stringify(LESSON);
if (lessonJson.includes('—') || lessonJson.includes('–')) die('em or en dash in the lesson');
if (/honest/i.test(lessonJson)) die('the word "honest" is banned from authored content');
if (lessonJson.includes('‿')) die('U+203F tie character, which renders as a low underscore on a Pixel 6');
if (lessonJson.includes('’')) die('curly apostrophe; this corpus is 99.5% straight');
if (/"autoplay"/.test(lessonJson)) die('autoplay is implemented by no component');
if (/imageRef/.test(lessonJson)) die('imageRef is validated by nothing and draws a blank box when unregistered');

const hits = LESSON.sections.filter((s) => JSON.stringify(s).includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears in ${hits} section(s), expected ${REFRAME_APPEARANCES}`);

/* ── comment, and the seven, by name ──────────────────────────────────────── */

const sectionJson = LESSON.sections.map((s) => JSON.stringify(s));
for (const w of [...THE_SEVEN, ...QUEL_FORMS, 'quoi']) {
  if (!sectionJson.some((s) => hasWord(s, w))) die(`"${w}" appears in no section of the lesson`);
}
const commentSections = sectionJson.filter((s) => hasWord(s, 'comment')).length;
if (commentSections < 5) {
  die(
    `"comment" appears in ${commentSections} section(s). The unit canDo omits it and this lesson teaches it\n`
    + `  deliberately; the mismatch is reported rather than resolved by dropping the word.`,
  );
}

/* ── Neighbours' teaching stays theirs ────────────────────────────────────── */

const lower = lessonJson.toLowerCase();
for (const p of REGISTER_TEACHING) if (lower.includes(p.toLowerCase())) die(`a1.19's register teaching leaked: "${p}"`);
for (const p of [...RELATIVE_FRAMES, ...INDIRECT_QUESTION_FRAMES]) if (lower.includes(p.toLowerCase())) die(`a neighbour's content leaked: "${p}"`);

/* ── Quiz ─────────────────────────────────────────────────────────────────── */

const quizSections = LESSON.sections.filter((s) => s.type === 'quiz');
if (quizSections.length !== 1) die(`${quizSections.length} quiz sections; lessonPager.logic.ts renders exactly one`);
const quiz = quizSections[0] as { rounds?: { id: string; targets?: string[]; questions: Record<string, unknown>[] }[] };
const rounds = quiz.rounds ?? [];
if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} rounds, found ${rounds.length}`);
const qs = rounds.flatMap((r) => r.questions);

const mcqN = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
if (mcqN * 2 > qs.length) die(`${mcqN}/${qs.length} questions are mcq; at most half may be`);

const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id));
for (const q of qs) {
  if (!q.why) die(`quiz question has no why: ${String(q.q).slice(0, 60)}`);
  if (!q.ref || !sectionIds.has(q.ref as string)) die(`quiz ref "${q.ref}" names no section: ${String(q.q).slice(0, 60)}`);
  const opts = q.opts as string[] | undefined;
  if (opts) {
    if (new Set(opts).size !== opts.length) die(`duplicate option in "${String(q.q).slice(0, 60)}"`);
    for (const o of opts) if (POSITIONAL.test(o)) die(`option "${o}" refers to a position in the option list, and the runtime shuffles them`);
  }
}

for (const q of qs.filter((x) => x.format === 'typeIn' || x.format === 'errorSpot' || x.format === 'speak')) {
  const shown = (q.answer ?? q.target) as string;
  if (!matchesAccept(shown, (q.accept ?? []) as string[])) {
    die(`a free-text question does not accept the answer it displays: "${shown}" against ${JSON.stringify(q.accept)}`);
  }
  if (/\baccent\b/i.test(String(q.why ?? ''))) {
    die(`a ${q.format} why claims to test an accent, and fold() strips accents. Only mcq can: ${String(q.q).slice(0, 60)}`);
  }
}

const closed = qs.filter((q) => typeof q.correct === 'number');
const slots: Record<number, number> = {};
for (const q of closed) slots[q.correct as number] = (slots[q.correct as number] ?? 0) + 1;
for (const [s, n] of Object.entries(slots)) {
  if ((n / closed.length) * 100 > 40) die(`slot ${s} holds ${Math.round((n / closed.length) * 100)}% of correct answers (cap 40%)`);
}

const earQs = qs.filter((q) => q.format === 'listenChoose');
for (const q of earQs) {
  const opts = ((q.opts ?? []) as string[]).map((o) => o.toLowerCase().trim());
  if (opts.filter((o) => (QUEL_FORMS as readonly string[]).includes(o)).length > 1) die(`a listenChoose offers two quel forms, which are one sound`);
  if (opts.includes('ou') && opts.includes('où')) die(`a listenChoose offers où against ou, which are one sound`);
}

/* ── Drills ───────────────────────────────────────────────────────────────── */

const triggers = LESSON.errorTriggers ?? [];
if (triggers.length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} triggers, found ${triggers.length}`);
const triggerDrill = new Map(triggers.map((t) => [t.id, t.drill]));
const firedBy = new Map<string, string[]>();
const leads: string[] = [];
for (const r of rounds) {
  const first = (r.targets ?? []).find((t) => triggerDrill.get(t));
  if (!first) die(`round ${r.id} names no target with a drill`);
  const d = triggerDrill.get(first)!;
  leads.push(`${r.id} → ${d}`);
  firedBy.set(d, [...(firedBy.get(d) ?? []), r.id]);
}
for (const d of (LESSON.drills ?? []).filter((x) => !x.id.startsWith('retest-'))) {
  const n = (firedBy.get(d.id) ?? []).length;
  if (n !== 1) die(`drill "${d.id}" is the first resolving target of ${n} round(s); a drill named second never runs`);
}

/* ── Tranches ─────────────────────────────────────────────────────────────── */

const tranches = LESSON.deckTranche ?? [];
const flat = tranches.flat();
const trancheDupes = flat.filter((id, i) => flat.indexOf(id) !== i);
if (trancheDupes.length) die(`item(s) released by more than one tranche: ${[...new Set(trancheDupes)].join(', ')}`);
const taught = new Set(LESSON.itemIds);
if ([...taught].some((id) => !flat.includes(id))) die(`item(s) taught and released by no tranche`);
if (flat.some((id) => !taught.has(id))) die(`item(s) released but not taught`);

/* ── Dictation and speak ──────────────────────────────────────────────────── */

const byId = new Map(nextItems.map((i) => [i.id, i]));
const dictModes: string[] = [];
for (const id of INTERROGATIFS_DICTATION_IDS) {
  const it = byId.get(id);
  if (!it) die(`dictation target ${id} is not in the post-merge seed`);
  const m = dicteeMode(it.fr);
  dictModes.push(`${m.padEnd(8)} ${it.fr}`);
  if (m !== 'letters') die(`dictation target ${id} "${it.fr}" is in ${m} mode; word mode hands the learner a pre-spelled tile`);
}
for (const id of INTERROGATIFS_SPEAK_IDS) {
  const it = byId.get(id);
  if (!it) die(`speak target ${id} is not in the post-merge seed`);
  if (!it.drills.includes('voiceflash')) die(`speak target ${id} carries no voiceflash`);
  if (it.kind !== 'sentence') die(`speak target ${id} "${it.fr}" is a ${it.kind}, not a whole question`);
}

/* ── Production surfaces ──────────────────────────────────────────────────── */

const produced: string[] = [
  ...qs.flatMap((q) => [...((q.accept ?? []) as string[]), (q.answer ?? '') as string, (q.target ?? '') as string]),
  ...(LESSON.drills ?? []).flatMap((d) => ((d as { pairs?: [string, string][] }).pairs ?? []).map((p) => p[1])),
  ...INTERROGATIFS_SPEAK_IDS.map((id) => byId.get(id)?.fr ?? ''),
  ...AUTHORED.map((r) => r.fr),
].filter(Boolean);

for (const p of FORBIDDEN_FORMS) {
  const hit = produced.find((s) => s.toLowerCase().includes(p.toLowerCase()));
  if (hit) die(`a forbidden form reached a production surface: "${p}" in "${hit}"`);
}
for (const s of produced) if (bareCombienBeforeNoun(s)) die(`a bare combien reached a production surface: "${s}"`);
for (const q of qs.filter((x) => x.format === 'typeIn')) {
  const stem = String(q.q ?? '').toLowerCase();
  for (const a of [...((q.accept ?? []) as string[]), String(q.answer ?? '')]) {
    for (const v of EXPOSURE_ONLY) {
      if (!PRODUCIBLE.has(v) && hasWord(a, v) && !hasWord(stem, v)) {
        die(`typeIn asks the learner to produce "${v}", which no A1 unit teaches, and the stem does not supply it: "${a}"`);
      }
    }
  }
}

/* ── Build the next seed ──────────────────────────────────────────────────── */

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing && existing.version > LESSON.version) {
  die(`the seed already carries ${LESSON.id} at v${existing.version}, above this merge's v${LESSON.version}`);
}
const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);
if (unit.title !== UNIT_TITLE || unit.sub !== UNIT_SUB || unit.canDo !== UNIT_CANDO) {
  die(`the seed's unit ${UNIT_ID} title, sub or canDo has changed since this lesson was written`);
}
const themesNow = (unit as { themes?: string[] | null }).themes;
const nextUnit: Unit = { ...unit, themes: UNIT_THEMES, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] } as Unit;
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

// NO OTHER UNIT MOVES.
for (const before of seed.units) {
  if (before.id === UNIT_ID) continue;
  const after = nextUnits.find((u) => u.id === before.id);
  const ta = JSON.stringify((before as { themes?: unknown }).themes ?? null);
  const tb = JSON.stringify((after as { themes?: unknown } | undefined)?.themes ?? null);
  if (ta !== tb) die(`this merge would change unit ${before.id}'s themes: ${ta} -> ${tb}`);
  if (JSON.stringify(before.lessonIds ?? []) !== JSON.stringify(after?.lessonIds ?? [])) {
    die(`this merge would change unit ${before.id}'s lessonIds`);
  }
}

// seed.version is the OTA snapshot number and is NOT touched.
const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };
if (next.version !== seed.version) die('this merge changed seed.version, which is the OTA snapshot number');

/* ── Nothing that is not this lesson's is dropped ─────────────────────────── */

const keptItems = nextItems.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const keptLessons = nextLessons.filter((l) => l.id !== LESSON.id).length;
const keptLessonIds = nextLessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
if (keptItems < OTHER_ITEMS || keptLessons < OTHER_LESSONS) {
  die(
    `this merge would DROP content that is not its own:\n`
    + `  other items:   ${OTHER_ITEMS} -> ${keptItems}\n`
    + `  other lessons: ${OTHER_LESSONS} -> ${keptLessons}\n`
    + `  Something rewrote seed.json underneath this run. Re-run it; do not force it.`,
  );
}
const lost = OTHER_LESSON_IDS.filter((id) => !keptLessonIds.includes(id));
if (lost.length) die(`this merge would drop lesson(s) it does not own: ${lost.join(', ')}`);
for (const [id, why] of Object.entries(NEIGHBOURS)) {
  const wasThere = seed.lessons.some((l) => l.id === id);
  if (wasThere && !keptLessonIds.includes(id)) die(`${id} is gone from the seed after this merge. It is ${why} It must survive untouched.`);
}

/* ── Report ───────────────────────────────────────────────────────────────── */

const added = NEW_ITEMS.filter((n) => !seed.items.some((i) => i.id === n.id)).length;
const updated = NEW_ITEMS.length - added;
const importedNew = IMPORTED.filter((n) => !seed.items.some((i) => i.id === n.id)).length;
const formats = qs.reduce<Record<string, number>>((a, q) => {
  const f = (q.format ?? 'mcq') as string;
  a[f] = (a[f] ?? 0) + 1;
  return a;
}, {});

console.log(`  items: +${added} new (${AUTHORED.length} authored, ${importedNew} imported from outside the seed cut), ${updated} updated (${seed.items.length} → ${nextItems.length})`);
for (const theme of [...new Set(IMPORTED.map((i) => i.theme))]) {
  const n = IMPORTED.filter((i) => i.theme === theme).length;
  const already = seed.items.filter((i) => i.theme === theme).length;
  console.log(`    ${theme}: ${already} in the seed before this run, +${n} from the IMPORTED manifest`);
}
console.log(`    "questions" is NOT in SEED_CUT.themes: 524 published, ${seed.items.filter((i) => i.theme === 'questions').length} in the seed before this run.`);
console.log(`    So this merge carrying rows is CORRECT BEHAVIOUR rather than a failed merge.`);
for (const r of OWNED_ID_RANGES) console.log(`  id range owned: ${r.from} to ${r.to}`);
console.log(`    a1.19 landed mid-build and holds fr.a1.questions.352-.373. Every id here shifted by 22.`);
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | acts: ${LESSON.acts?.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${qs.length} in ${rounds.length} rounds`);
console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')} | mcq ${Math.round(mcqN / qs.length * 100)}%`);
console.log(`  the seven: ${THE_SEVEN.join(', ')}, every one named on a screen`);
console.log(`  comment is on ${commentSections} sections. The unit canDo OMITS it and was not rewritten.`);
console.log(`  quel in all four shapes carries ONE respelling: ${sub('quel')}`);
console.log(`  the hero tail "${HERO_TAIL}" -> [${tailSub}] is identical in all ${HERO.length} rows`);
console.log(`  no register teaching, no relative pronoun, no indirect question: confirmed`);
console.log(`  no positional option, none duplicated, spread ${Object.entries(slots).map(([k, n]) => `${k}:${Math.round(n / closed.length * 100)}%`).join(' ')} (cap 40)`);
console.log(`  no ear question separates a homophone pair: ${earQs.length} listenChoose, both on qui/que`);
console.log(`  no free-text question claims to test an accent: fold() strips them`);
console.log(`  drills fired: ${leads.join(', ')}`);
console.log(`  dictation: ${INTERROGATIFS_DICTATION_IDS.length} lines, all letters mode`);
for (const m of dictModes) console.log(`    ${m}`);
console.log(`  a1.03 ending population: ${popBefore} → ${popAfter} (must not move)`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify(themesNow ?? null)} → ${JSON.stringify(nextUnit.themes)}`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  seed.version: ${seed.version} (UNCHANGED. It is the OTA snapshot number.)`);
if (repaired.length) {
  console.log(`  respelling repairs applied to the seed (display only):`);
  for (const r of repaired) console.log(`    ${r}`);
} else {
  console.log(`  respelling repairs: already applied in the seed, nothing to do`);
}
console.log(`  neighbours intact: ${Object.keys(NEIGHBOURS).filter((id) => keptLessonIds.includes(id)).join(', ')}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  flashhub coverage ✓  a1.03 population untouched ✓  reused rows match the seed ✓  no neighbour's content taught ✓  no other unit moved ✓  no foreign row in this id range ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run, all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.`
  + `\n`
  + `\n  a1.20.l1 is now in BOTH Postgres and the seed, so this lesson is safe.`
  + `\n`
  + `\n  NOTE for whoever runs the next publish: ${importedNew} rows from themes outside SEED_CUT.themes are`
  + `\n  now in the seed. They survive a publish because publish-content.ts pulls in every item a bundled`
  + `\n  lesson references, and a1.20.l1 references all of them. If this lesson is ever unbundled, they go.`
  + `\n`
  + `\n  NOTE for a1.19, which landed mid-build: its frame is credited rather than retaught, its register`
  + `\n  system is taught nowhere here, and the id ranges are .352-.373 (a1.19) and .374-.401 (a1.20).`
  + `\n  NEXT FREE is ${HANDOVER_NEXT_FREE_IDS.sentences} and ${HANDOVER_NEXT_FREE_IDS.words}.`
  + `\n`
  + `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on pre-existing`
  + `\n  divergences. Do not run pnpm content:publish until those are resolved.\n`,
);
