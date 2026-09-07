// a1.26.l1 "La maison": the assertions that keep this lesson true.
//
// Modelled on a1-22-pays.test.ts and a1-15-famille.test.ts. Everything here runs
// the REAL app function rather than a copy: an earlier a1.01 test inlined its
// own glossary lookup, copied the version that was already broken, and passed
// while the feature was dead.
//
// ── What this file is actually guarding ────────────────────────────────────
//
// This lesson IMPORTS almost everything it teaches. 153 rows were published at
// fr.a1.maison before it started and it authored three, so the failure mode here
// is not "the word is missing", it is:
//
//   the three-way split of English "room" drifting onto three separate cards,
//   which turns one decision into three synonyms while every id still resolves
//   la salle de bain and les toilettes being separated, which is the scene
//   les toilettes losing its plural in a later edit
//   the compound-gender rule shipping without its boundary, so it reads as
//   "appliances are masculine" and is then wrong
//   a1.21's prepositions being taken back as a teaching point, or a guard
//   against them being written so wide it fires on legitimate context
//   `la panne` being "fixed" to a superscript by somebody who trusts the shared
//   checker, which false-positives on it
//   any of the 42 repaired respellings being reverted, especially the 25 the
//   shared checker cannot see
//   `la pièce` being authored in the singular by a future author who does not
//   know it moves a1.03's printed -e from 880 to 881
//   the quiz answer spread collapsing, which matters MORE here than the density
//   validator knows, because QuizRoundsView does not shuffle
//
// Every one of those is asserted below, and every one was mutation-tested: the
// assertion was broken on purpose and confirmed to go red before it was kept.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson } from './schema.ts';
import { quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation, measureEnding } from './gender.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { MAX_GLOSS_WORDS } from './gloss.logic.ts';
import { matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; lessonIds?: string[]; themes?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.26.l1');
const noLesson = !L;

const byId = new Map(seed.items.map((i) => [i.id, i] as const));
const maison = seed.items.filter((i) => i.theme === 'maison');

/* ─── The shape of the lesson ──────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-three', 's04-split',
  's05-bath', 's06-rooms', 's07-bank', 's08-check', 's09-errors',
  's10-furniture', 's11-byroom', 's12-things', 's13-sort', 's14-machines',
  's15-already', 's16-listen', 's17-drill', 's18-reading',
  's19-flash', 's20-dictation', 's21-speak', 's22-scenario', 's23-review',
  's24-progress', 's25-quiz', 's26-roundup',
];

const REFRAME = 'Never say "room". Say which room.';
const REFRAME_APPEARANCES = 9;

/** The lesson. English "room" is three French words. */
const THREE = ['la chambre', 'les pièces', 'la salle'];
const BATH = 'la salle de bain';
const TOILET = 'les toilettes';

/** All 58 taught headwords, so a quiet drop goes red rather than shrinking the
 *  lesson. These are the SHAPE of the lesson, which is the documented exception
 *  to "a hardcoded count fails on itself". */
const TAUGHT = [
  'la maison', 'la chambre', 'le salon', 'la cuisine', 'la salle de bain', 'les toilettes',
  'la salle à manger', 'le couloir', 'la cave', 'le grenier', 'le jardin', 'le balcon',
  'les pièces',
  "l'appartement", 'le studio', 'le garage',
  'la porte', 'la fenêtre', "l'escalier", 'le mur', 'le plafond', 'le sol',
  'le lit', 'la table', 'la chaise', 'le canapé', 'le fauteuil', 'la lampe',
  "l'armoire", 'le tapis', "l'étagère", 'le rideau', 'le placard',
  'la couverture', "l'oreiller", 'la douche', 'la baignoire', 'le lavabo',
  'le frigo', 'le four', 'le micro-ondes', 'la cuisinière',
  'le lave-vaisselle', 'la machine à laver', 'le sèche-linge',
  'la fourchette', 'le couteau', 'la cuillère', "l'assiette", 'le verre',
  'la clé', 'la poubelle', "l'ampoule", 'le balai', 'le seau',
  'faire la vaisselle', 'faire le lit', 'mettre la table',
];

/** Nasal-carrying words this lesson displays. The shared checker CANNOT see a
 *  word-internal nasal, so these are asserted by name as well as through it. */
const MUST_CARRY_SUPERSCRIPT: Record<string, string> = {
  'fr.a1.maison.001': 'la maison',
  'fr.a1.maison.002': 'la chambre',
  'fr.a1.maison.003': 'le salon',
  'fr.a1.maison.010': 'la salle de bain',
  'fr.a1.maison.018': 'le jardin',
  'fr.a1.maison.025': 'la lampe',
  'fr.a1.maison.033': 'le plafond',
  'fr.a1.maison.038': 'la salle à manger',
  'fr.a1.maison.039': 'le balcon',
  'fr.a1.maison.077': "l'appartement",
  'fr.a1.maison.100': "l'ampoule",
  'fr.a1.maison.107': 'le micro-ondes',
  'fr.a1.maison.111': 'le sèche-linge',
};

/** Displayed, and correctly carrying NO superscript. */
const MUST_NOT_CARRY_SUPERSCRIPT = [
  'fr.a1.maison.104', // la cuisine
  'fr.a1.maison.012', // la porte
  'fr.a1.maison.014', // le lit
  'fr.a1.maison.015', // la table
];

/** a1.21 owns every one of these. They appear all over this lesson's corpus
 *  sentences as CONTEXT, which is legitimate; the assertion is scoped to what
 *  the lesson presents as its own teaching. */
const A121_PREPOSITIONS = ['sur', 'sous', 'dans', 'devant', 'derrière', 'à côté de', 'entre', 'chez'];

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

function section(id: string): Record<string, unknown> | undefined {
  return (L?.sections ?? []).find((s) => (s as { id?: string }).id === id) as Record<string, unknown> | undefined;
}

/** What the learner is asked to PRODUCE or CHOOSE. A guard over every string
 *  fires on « Le lit est près de la fenêtre. », which is legitimate context, and
 *  gets deleted by whoever it blocks. */
function productionSurfaces(l: Lesson): string[] {
  const out: string[] = [];
  for (const s of l.sections) {
    const sec = s as Record<string, unknown>;
    for (const k of ['cards', 'rows', 'groups', 'errors', 'turns', 'lines', 'goals', 'points', 'themes']) {
      if (sec[k]) strings(sec[k], out);
    }
  }
  strings(l.drills ?? [], out);
  strings(l.terms ?? {}, out);
  return out;
}

/** What the lesson PRESENTS AS CORRECT: everything above MINUS the slots whose
 *  whole job is to hold a wrong answer.
 *
 *  The first draft of this file asserted « la toilette » was absent from
 *  `productionSurfaces` and went red on four legitimate strings: a groupDrill
 *  distractor, a drill retest distractor, a commonErrors `wrong`, and the `why`
 *  that explains the singular does not exist. All four are the lesson teaching
 *  the very thing the assertion was written to protect. A guard that fires on
 *  correct content gets deleted by whoever it blocks, so it is scoped instead. */
function teachingSurfaces(l: Lesson): string[] {
  const out: string[] = [];
  for (const s of l.sections) {
    const sec = s as Record<string, unknown>;
    for (const k of ['cards', 'rows', 'themes', 'lines', 'goals', 'points']) {
      if (sec[k]) strings(sec[k], out);
    }
    // A groupDrill's `items` teach; its `check.opts` deliberately hold wrong ones.
    if (Array.isArray(sec.groups)) {
      for (const g of sec.groups as Record<string, unknown>[]) if (g.items) strings(g.items, out);
    }
    // commonErrors: the `right` half teaches, the `wrong` half must not be read.
    if (Array.isArray(sec.errors)) {
      for (const e of sec.errors as Record<string, unknown>[]) if (e.right) strings(e.right, out);
    }
    // A scenario models correct French in `user` and `alts`.
    if (Array.isArray(sec.turns)) {
      for (const t of sec.turns as Record<string, unknown>[]) {
        if (t.user) strings(t.user, out);
        if (t.alts) strings(t.alts, out);
      }
    }
  }
  strings(l.sheets ?? [], out);
  strings(l.terms ?? {}, out);
  for (const d of l.drills ?? []) {
    const dd = d as unknown as Record<string, unknown>;
    if (dd.pairs) strings(dd.pairs, out);
  }
  return out;
}

/* ─── The spine ────────────────────────────────────────────────────────── */

test('a1.26.l1 is in the seed', () => { ok(L, 'a1.26.l1 is not in seed.json'); });

test('the spine is in order', { skip: noLesson }, () => {
  strictEqual(L!.sections.length, SPINE.length);
  SPINE.forEach((id, i) => strictEqual((L!.sections[i] as { id?: string }).id, id, `section ${i} should be ${id}`));
});

test('six acts, and every act names sections that exist', { skip: noLesson }, () => {
  strictEqual((L!.acts ?? []).length, 6);
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  const claimed = new Set<string>();
  for (const a of L!.acts ?? []) {
    for (const s of a.sections) {
      ok(ids.has(s), `act ${a.id} names ${s}, which is not a section`);
      ok(!claimed.has(s), `${s} is claimed by two acts`);
      claimed.add(s);
    }
  }
  strictEqual(claimed.size, SPINE.length, 'every section belongs to exactly one act');
});

test('the lesson passes the real validators', { skip: noLesson }, () => {
  const issues = validateLesson(L!);
  strictEqual(issues.length, 0, formatIssues(issues));
  const d = validateDensity(L!);
  strictEqual(d.length, 0, formatDensity(d));
});

test('the reframe is carried verbatim, the exact number of times', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
  const hits = strings(L!).filter((s) => s.includes(REFRAME)).length;
  strictEqual(hits, REFRAME_APPEARANCES, `the reframe appears ${hits} times`);
});

test('the unit carries the lesson, and its theme was not rebound', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a1.26');
  ok(u, 'unit a1.26 is missing');
  ok((u!.lessonIds ?? []).includes('a1.26.l1'), 'a1.26 does not list its lesson');
  strictEqual(JSON.stringify(u!.themes), JSON.stringify(['maison']));
  strictEqual(JSON.stringify(u!.prereqUnitIds), JSON.stringify(['a1.21']));
});

test('the tag agrees with what the header will draw from unit.seq', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a1.26') as { seq?: number } | undefined;
  strictEqual(L!.tag, `A1 · LEÇON ${String(u?.seq).padStart(2, '0')}`);
});

/* ─── The lesson: three words, one screen ──────────────────────────────── */

test('THE CONTRAST: all three room words are on ONE screen, in one tapTable', { skip: noLesson }, () => {
  const s = section('s04-split');
  ok(s, 's04-split is missing');
  strictEqual(s!.type, 'tapTable', 'the three-way contrast must be a tapTable');
  strictEqual((s!.cols as string[]).length, 2, 'two columns: English, then French');
  const rows = s!.rows as { cells: string[] }[];
  strictEqual(rows.length, 3, 'three rows, one per room word');
  for (const w of THREE) {
    ok(rows.some((r) => r.cells.includes(w)), `s04-split does not carry "${w}", and separating the three is how this lesson decays into a word list`);
  }
});

test('THE SECOND PAIR: the bath and the toilet are on ONE screen', { skip: noLesson }, () => {
  const s = section('s05-bath');
  ok(s, 's05-bath is missing');
  strictEqual(s!.type, 'tapTable');
  strictEqual((s!.cols as string[]).length, 2);
  const text = strings(s).join(' | ');
  ok(text.includes(BATH), 's05-bath does not carry la salle de bain');
  ok(text.includes(TOILET), 's05-bath does not carry les toilettes');
});

test('les toilettes is taught as a plural everywhere it is produced', { skip: noLesson }, () => {
  const row = byId.get('fr.a1.maison.011');
  ok(row, 'les toilettes is not in the seed');
  strictEqual(row!.fr, 'les toilettes', 'the headword lost its plural');
  // Scoped to what the lesson presents as CORRECT. « la toilette » appears four
  // times on purpose: as a quiz distractor, a drill distractor, a commonErrors
  // `wrong`, and inside the `why` that explains the singular is not a room.
  const singular = teachingSurfaces(L!).filter((s) => /\bla toilette\b/i.test(s));
  strictEqual(singular.length, 0, `"la toilette" is presented as correct in: ${singular.join(' | ')}`);
  // And the lesson must still be teaching against it somewhere.
  const warns = strings(L!).filter((s) => /\bla toilette\b/i.test(s));
  ok(warns.length > 0, 'the lesson no longer warns against the singular anywhere');
});

test('every one of the 58 taught words is on a production surface', { skip: noLesson }, () => {
  const surfaces = productionSurfaces(L!);
  const missing = TAUGHT.filter((w) => !surfaces.some((s) => s.includes(w)));
  strictEqual(missing.length, 0, `taught but shown nowhere: ${missing.join(', ')}`);
  strictEqual(TAUGHT.length, 58);
});

test('the three-way split is named by a term, and the term is used', { skip: noLesson }, () => {
  const terms = L!.terms ?? {};
  ok('whichRoom' in terms, 'the whichRoom term is missing');
  ok('twoRooms' in terms, 'the twoRooms term is missing');
  const used = new Set<string>();
  for (const s of L!.sections) for (const t of ((s as { terms?: string[] }).terms ?? [])) used.add(t);
  for (const k of Object.keys(terms)) ok(used.has(k), `term ${k} is defined and never surfaced`);
});

test('no section declares more than three term chips, because the renderer shows three', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${(s as { id?: string }).id} declares ${t.length} term chips`);
  }
});

/* ─── The compound rule needs its boundary ─────────────────────────────── */

test('the compound-gender rule ships with both sides visible', { skip: noLesson }, () => {
  const text = strings(section('s14-machines')).join(' | ');
  for (const w of ['le lave-vaisselle', 'le sèche-linge', 'le micro-ondes']) {
    ok(text.includes(w), `s14-machines does not carry the compound "${w}"`);
  }
  for (const w of ['la machine à laver', 'la cuisinière']) {
    ok(text.includes(w), `s14-machines does not carry "${w}", so the rule has no boundary and reads as "appliances are masculine", which is false`);
  }
});

/* ─── The neighbours ───────────────────────────────────────────────────── */

test('a1.21 keeps its lesson: no preposition is a correct quiz answer', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!) as unknown as
    { opts?: string[]; correct?: number }[];
  for (const q of qs) {
    if (!Array.isArray(q.opts) || typeof q.correct !== 'number') continue;
    const ans = q.opts[q.correct].toLowerCase().trim();
    ok(!A121_PREPOSITIONS.includes(ans), `a quiz answer is a preposition a1.21 owns: "${ans}"`);
  }
});

test('a1.21 keeps its lesson: its headline rule is not restated', { skip: noLesson }, () => {
  const surfaces = productionSurfaces(L!).map((s) => s.toLowerCase());
  for (const p of ['one word goes straight onto the noun', 'a phrase needs de first', 'compound preposition']) {
    ok(!surfaces.some((s) => s.includes(p)), `a1.21's rule reached a learner surface: "${p}"`);
  }
});

test('the prepositions still appear as CONTEXT, which is the point of scoping the guard', { skip: noLesson }, () => {
  // If this ever goes red, somebody has written the guard above too wide and
  // stripped legitimate corpus sentences out of the lesson.
  const all = strings(L!).join(' | ');
  ok(all.includes('à côté du salon'), 'the published corpus sentence using à côté de has gone');
  ok(all.includes('dans le salon'), 'the published corpus sentence using dans has gone');
});

test('a1.25 keeps its lesson: no chore verb is conjugated on a surface', { skip: noLesson }, () => {
  const surfaces = productionSurfaces(L!).map((s) => s.toLowerCase());
  for (const v of ['je range', 'nous rangeons', 'elle balaie', "passe l'aspirateur"]) {
    ok(!surfaces.some((s) => s.includes(v)), `a conjugated chore verb a1.25 owns reached a surface: "${v}"`);
  }
  // The three fixed phrases ARE this lesson's, and must still be here.
  for (const p of ['faire la vaisselle', 'faire le lit', 'mettre la table']) {
    ok(surfaces.some((s) => s.includes(p)), `the fixed phrase "${p}" has gone`);
  }
});

/* ─── The respellings ──────────────────────────────────────────────────── */

test('every respelling the lesson displays passes the REAL checker', { skip: noLesson }, () => {
  for (const id of L!.itemIds) {
    const it = byId.get(id);
    if (!it?.respell) continue;
    ok(!hasPlainNasalFor(it.fr, it.respell), `${id} "${it.fr}" -> "${it.respell}" closes a nasal with a plain n/m`);
  }
});

test('the superscript is asserted BY NAME, because the checker is blind to a word-internal nasal', { skip: noLesson }, () => {
  for (const [id, fr] of Object.entries(MUST_CARRY_SUPERSCRIPT)) {
    const it = byId.get(id);
    ok(it, `${id} (${fr}) is not in the seed`);
    strictEqual(it!.fr, fr, `${id} is no longer "${fr}"`);
    ok(it!.respell?.includes('ⁿ'), `${id} "${fr}" carries a nasal and its respelling has no superscript: ${it!.respell}`);
  }
});

test('words with no nasal vowel do NOT carry a superscript', { skip: noLesson }, () => {
  for (const id of MUST_NOT_CARRY_SUPERSCRIPT) {
    const it = byId.get(id);
    ok(it, `${id} is not in the seed`);
    ok(!it!.respell?.includes('ⁿ'), `${id} "${it!.fr}" has no nasal and its respelling carries a superscript`);
  }
});

test('la panne is NOT repaired, and that is deliberate', { skip: noLesson }, () => {
  const it = byId.get('fr.a1.maison.096');
  ok(it, 'la panne is not in the seed');
  strictEqual(it!.respell, 'lah PAHN');
  // The shared checker FLAGS this row and is wrong: /pan/ has a real doubled n
  // with a vowel behind it and no nasal vowel at all. Adding a superscript would
  // silence the checker and teach a sound that is not in the word. This is the
  // documented false-positive class in A1-BUILD-INVARIANTS §3, alongside jaune
  // and automne. If a future author "fixes" it, this goes red.
  ok(hasPlainNasalFor(it!.fr, it!.respell!), 'the checker no longer flags la panne, so this guard is stale and should be re-read rather than deleted');
  ok(!it!.respell!.includes('ⁿ'), 'la panne has been given a superscript it must not have');
});

test('one word has one respelling inside the theme', { skip: noLesson }, () => {
  for (const [word, ids] of Object.entries({
    linge: ['fr.a1.maison.072', 'fr.a1.maison.073', 'fr.a1.maison.074', 'fr.a1.maison.111'],
    vaisselle: ['fr.a1.maison.068', 'fr.a1.maison.109', 'fr.a1.maison.121'],
    table: ['fr.a1.maison.015', 'fr.a1.maison.043', 'fr.a1.maison.123'],
  })) {
    const forms = new Set<string>();
    for (const id of ids) {
      const r = byId.get(id)?.respell ?? '';
      const m = word === 'linge' ? /LAⁿZH|LANZH|LIHNZH/ : word === 'vaisselle' ? /veh-SE[HL]+L?/ : /TA+H?BL/;
      const hit = r.match(m);
      if (hit) forms.add(hit[0]);
    }
    strictEqual(forms.size, 1, `"${word}" has ${forms.size} respellings inside theme maison: ${[...forms].join(' | ')}`);
  }
});

test('the whole a1 band of theme maison is migrated, not just the rows on screen', { skip: noLesson }, () => {
  // The stronger claim this build can make: not one fr.a1.maison row carries a
  // plain nasal any more, whether this lesson displays it or not. `la panne` is
  // the single exception and is the documented checker false positive, asserted
  // separately above.
  const a1 = maison.filter((i) => i.id.startsWith('fr.a1.maison.') && i.respell);
  const flagged = a1.filter((i) => hasPlainNasalFor(i.fr, i.respell!)).map((i) => i.id);
  ok(a1.length > 100, 'the a1 band of theme maison has shrunk unexpectedly');
  strictEqual(
    JSON.stringify(flagged), JSON.stringify(['fr.a1.maison.096']),
    `the a1 band should flag exactly la panne and nothing else, and it flags: ${flagged.join(', ')}`
  );
});

test('no row this lesson displays carries a word-internal nasal either', { skip: noLesson }, () => {
  // The checker's blind spot, swept over the whole displayed set rather than
  // only the thirteen asserted by name. AHN/OHN/AN followed by a consonant is a
  // nasal the checker cannot see.
  const internal = /(AHN|OHN|UHN|IHN|AN|EHN)(?=[BCDFGKLMPRSTVZ])/;
  const bad: string[] = [];
  for (const id of L!.itemIds) {
    const it = byId.get(id);
    if (it?.respell && internal.test(it.respell)) bad.push(`${id} "${it.fr}" -> ${it.respell}`);
  }
  strictEqual(bad.length, 0, `word-internal nasal written with a plain n:\n  ${bad.join('\n  ')}`);
});

test('every row in theme maison writes its feminine article the same way', { skip: noLesson }, () => {
  const bare = maison.filter((i) => i.respell && /^la[\s-]/.test(i.respell));
  strictEqual(bare.length, 0, `rows using a bare "la " where the theme uses "lah ": ${bare.map((i) => i.id).join(', ')}`);
});

/* ─── The corpus ───────────────────────────────────────────────────────── */

test('nothing this lesson authored duplicates an fr inside its theme', { skip: noLesson }, () => {
  const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seen = new Map<string, string>();
  for (const it of maison) {
    if ((it.cardType ?? 'vocab') !== 'vocab' || it.kind === 'sentence') continue;
    const k = norm(it.fr);
    const prior = seen.get(k);
    ok(!prior, `duplicate word in theme maison: ${prior} vs ${it.id} ("${it.fr}")`);
    seen.set(k, it.id);
  }
});

test('les pièces is PLURAL, and the singular is not authored', { skip: noLesson }, () => {
  const it = byId.get('fr.a1.maison.156');
  ok(it, 'fr.a1.maison.156 is missing');
  strictEqual(it!.fr, 'les pièces');
  // THIS IS NOT A STYLE CHOICE. `la pièce` as a gendered single-word noun joins
  // a1.03's measured ending population and moves its printed -e from 880 to 881,
  // which a1-03-genre.test.ts compares exactly. The plural is outside the
  // population. If a future author "tidies" this to the singular, this goes red
  // and so does a1.03.
  const singular = maison.filter((i) => i.kind !== 'sentence' && i.fr === 'la pièce');
  strictEqual(singular.length, 0, 'la pièce has been authored in theme maison and it breaks a1.03');
});

test('a1.03\'s printed ending figures are unmoved by this lesson', { skip: noLesson }, () => {
  const authored = new Set(['fr.a1.maison.156', 'fr.a1.maison.157', 'fr.a1.maison.158']);
  const without = seed.items.filter((i) => !authored.has(i.id));
  strictEqual(endingPopulation(seed.items).length, endingPopulation(without).length,
    'this lesson changed the size of a1.03\'s ending population');
  for (const e of ['e', 'age', 'eau', 'ment', 'tion', 'té', 'eur', 'ier', 'ette', 'ure', 'in', 'on']) {
    const a = measureEnding(seed.items, e);
    const b = measureEnding(without, e);
    strictEqual(
      a ? `${a.n}/${a.accuracy}/${a.predicts}` : 'none',
      b ? `${b.n}/${b.accuracy}/${b.predicts}` : 'none',
      `this lesson moved a1.03's printed -${e} figure`
    );
  }
});

test('the two rows excluded on purpose are still excluded', { skip: noLesson }, () => {
  // .008 is a1.04's article rule stored as a flashcard in a furniture theme.
  // .009 is slang with no respelling and no voiceflash. Both are reported for
  // removal and neither is deleted here, because deleting another author's
  // published row is not this build's call. If somebody adds them to the lesson
  // to "complete" it, this goes red.
  for (const id of ['fr.a1.maison.008', 'fr.a1.maison.009']) {
    ok(!L!.itemIds.includes(id), `${id} is excluded on purpose and the lesson now names it`);
  }
});

test('the id gaps at 127 and 143 stay empty', { skip: noLesson }, () => {
  // Gaps in a shipped, SRS-scheduled sequence. Filling them looks tidy and is
  // not: ids are the SRS key. Asserted so a future tidy-up goes red.
  for (const n of ['127', '143']) {
    ok(!byId.has(`fr.a1.maison.${n}`), `fr.a1.maison.${n} was a deliberate gap and has been filled`);
  }
});

/* ─── Reachability ─────────────────────────────────────────────────────── */

test('every declared itemId resolves and is on a screen', { skip: noLesson }, () => {
  const shown = strings(L!.sections).join('   ');
  for (const id of L!.itemIds) {
    const it = byId.get(id);
    ok(it, `${id} is declared and not in the seed`);
    const named = shown.includes(id) || shown.includes(it!.fr);
    ok(named, `${id} "${it!.fr}" resolves and is drawn by nothing. That is a1.08's failure exactly.`);
  }
});

test('tranches release every taught item exactly once and nothing untaught', { skip: noLesson }, () => {
  const tr = L!.deckTranche ?? [];
  strictEqual(tr.length, (L!.acts ?? []).length, 'one tranche per act, index-aligned');
  const flat = tr.flat();
  strictEqual(new Set(flat).size, flat.length, 'an item is released by two tranches, so the SRS would ask for two ratings');
  strictEqual(new Set(flat).size, new Set(L!.itemIds).size, 'the tranches and itemIds disagree');
  for (const id of flat) ok(L!.itemIds.includes(id), `${id} is released and the lesson does not teach it`);
});

test('no tranche releases an item the acts before it have not shown', { skip: noLesson }, () => {
  const acts = L!.acts ?? [];
  const tr = L!.deckTranche ?? [];
  for (let i = 0; i < tr.length; i++) {
    const shownByNow = strings(
      acts.slice(0, i + 1).flatMap((a) => a.sections.map((s) => section(s)))
    ).join('   ');
    for (const id of tr[i]) {
      const it = byId.get(id);
      ok(it, `${id} released by tranche ${i} and not in the seed`);
      ok(shownByNow.includes(id) || shownByNow.includes(it!.fr),
        `tranche ${i} releases ${id} "${it!.fr}" before any section up to act ${i + 1} has shown it`);
    }
  }
});

/* ─── The quiz ─────────────────────────────────────────────────────────── */

test('exactly one quiz section, carrying rounds', { skip: noLesson }, () => {
  const quizzes = L!.sections.filter((s) => s.type === 'quiz');
  strictEqual(quizzes.length, 1, 'the pager renders exactly one quiz');
  strictEqual(((quizzes[0] as unknown as { rounds?: unknown[] }).rounds ?? []).length, 6);
});

test('the exam is at most half mcq, and every question has a why and a ref', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!) as unknown as
    { q: string; format?: string; why?: string; ref?: string }[];
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq} of ${qs.length} are mcq`);
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  for (const q of qs) {
    ok(q.why, `no why: ${q.q}`);
    ok(q.ref && ids.has(q.ref), `ref names a section that does not exist: ${q.ref}`);
  }
});

test('every free-text question accepts the answer it displays', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!) as unknown as
    { q: string; format?: string; accept?: string[]; answer?: string }[];
  for (const q of qs.filter((x) => ['typeIn', 'errorSpot', 'speak'].includes(x.format ?? ''))) {
    ok(q.answer && q.accept && matchesAccept(q.answer, q.accept), `does not accept what it shows: ${q.q}`);
  }
});

test('THE ANSWER SPREAD, because QuizRoundsView does NOT shuffle', { skip: noLesson }, () => {
  // Verified in LessonPager.tsx:802-831 and QuizRoundsView.tsx:204-224: a lesson
  // declaring `rounds` renders through QuizRoundsView, whose McqCard maps `opts`
  // in AUTHORED ORDER. QuizDeckView in LessonRich.tsx does shuffle and only ever
  // sees pre-v2 lessons carrying no rounds. So the authored index IS the
  // position the learner sees, on every attempt, and the density validator's 40
  // percent cap is looser than this lesson wants.
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!) as unknown as
    { opts?: string[]; correct?: number }[];
  const closed = qs.filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number');
  ok(closed.length >= 12, 'too few closed questions to make a spread meaningful');
  for (const s of [0, 1, 2, 3]) {
    const n = closed.filter((q) => q.correct === s).length;
    const share = n / closed.length;
    ok(share <= 0.30, `answer slot ${s} holds ${Math.round(share * 100)}% of closed questions (cap 30)`);
    ok(share >= 0.15, `answer slot ${s} holds ${Math.round(share * 100)}% of closed questions (floor 15)`);
  }
});

test('the correct answer is not systematically the longest option', { skip: noLesson }, () => {
  // Slot position is not the only tell. On a lesson whose subject is which noun
  // to choose, a learner who always picks the longest option must not pass.
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!) as unknown as
    { opts?: string[]; correct?: number }[];
  const closed = qs.filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number');
  const longest = closed.filter((q) => {
    const lens = q.opts!.map((o) => o.length);
    const mx = Math.max(...lens);
    return lens[q.correct!] === mx && lens.filter((l) => l === mx).length === 1;
  }).length;
  ok(longest * 3 <= closed.length, `the correct answer is the uniquely longest option in ${longest} of ${closed.length}`);
});

test('no closed question repeats an option', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!) as unknown as
    { q: string; opts?: string[] }[];
  for (const q of qs) {
    const o = q.opts ?? [];
    strictEqual(new Set(o).size, o.length, `duplicate option in "${q.q}"`);
  }
});

test('each drill is the FIRST resolving target of exactly one round', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz') as unknown as
    { rounds?: { id: string; targets?: string[] }[] };
  const triggers = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t] as const));
  const drillIds = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of L!.errorTriggers ?? []) {
    ok(!t.drill || drillIds.has(t.drill), `trigger ${t.id} names a missing drill`);
    ok(!t.retest || drillIds.has(t.retest), `trigger ${t.id} names a missing retest`);
  }
  const fired = new Set<string>();
  for (const r of quiz.rounds ?? []) {
    const first = (r.targets ?? []).map((id) => triggers.get(id)).find((t) => t?.drill);
    ok(first, `round ${r.id} names no target with a drill, so failing it teaches nothing`);
    ok(!fired.has(first!.drill!), `${first!.drill} is the first resolving target of more than one round`);
    fired.add(first!.drill!);
  }
});

/* ─── The dictée cannot test this lesson, and that is measured ──────────── */

test('every dictée target is in WORD mode, because none can be otherwise', { skip: noLesson }, () => {
  // DICTEE_LETTER_LIMIT is 16 and the shortest row in theme maison carrying a
  // dictation drill is 24 letters, so letters mode is unreachable here. This
  // assertion records the measured fact rather than an aspiration: if a future
  // author adds a short target this goes red and they should read the header of
  // maison-lesson.ts before "fixing" it.
  const s = section('s20-dictation');
  ok(s, 's20-dictation is missing');
  const ids = s!.itemIds as string[];
  ok(ids.length >= 4, 'the dictée has too few targets');
  for (const id of ids) {
    const it = byId.get(id);
    ok(it, `the dictée names ${id}, which is not in the seed`);
    ok(it!.drills.includes('dictation'), `${id} "${it!.fr}" carries no dictation drill`);
    strictEqual(dicteeMode(it!.fr), 'words', `${id} is not in word mode, which contradicts the measured finding`);
  }
});

test('the shortest dictation row in the theme is still too long for letters mode', { skip: noLesson }, () => {
  const rows = maison.filter((i) => i.drills.includes('dictation'));
  ok(rows.length > 0);
  const anyLetters = rows.filter((i) => dicteeMode(i.fr) === 'letters');
  strictEqual(anyLetters.length, 0,
    `theme maison now has a letters-mode dictation row (${anyLetters.map((i) => i.id).join(', ')}), so the dictée could test the room words after all. Re-read maison-lesson.ts's header.`);
});

/* ─── Production surfaces ──────────────────────────────────────────────── */

test('the speak mission names only items carrying voiceflash', { skip: noLesson }, () => {
  const s = section('s21-speak');
  ok(s, 's21-speak is missing');
  for (const id of s!.itemIds as string[]) {
    const it = byId.get(id);
    ok(it, `the speak mission names ${id}, which is not in the seed`);
    ok(it!.drills.includes('voiceflash'), `${id} "${it!.fr}" is named by the speak mission and carries no voiceflash`);
  }
});

test('no maison SENTENCE carries voiceflash, which is why the speak mission is words', { skip: noLesson }, () => {
  // Measured, not chosen. If this ever changes, the speak mission can grow and
  // whoever changes it should know that this is why it was words-only.
  const sentences = maison.filter((i) => i.kind === 'sentence' && i.drills.includes('voiceflash'));
  strictEqual(sentences.length, 0, `sentences in theme maison now carry voiceflash: ${sentences.map((i) => i.id).join(', ')}`);
});

test('the reading passage is one block and its glossary can actually match', { skip: noLesson }, () => {
  const s = section('s18-reading');
  ok(s, 's18-reading is missing');
  strictEqual(s!.questionsInModal, true, 'without questionsInModal the glossary renderer is never reached');
  ok(Array.isArray(s!.questions) && (s!.questions as unknown[]).length > 0, 'a glossary needs questions to render');
  const text = s!.text as string;
  ok(!text.includes('\n'), 'PassagePage discards an authored newline, so the passage must be one block');
  const gloss = (s!.glossary ?? []) as { word: string }[];
  for (const g of gloss) {
    ok(g.word.split(/\s+/).length <= MAX_GLOSS_WORDS, `glossary key "${g.word}" is longer than MAX_GLOSS_WORDS and can never match`);
    ok(text.toLowerCase().includes(g.word.toLowerCase()), `glossary key "${g.word}" is not in the passage`);
  }
  // No entry may be a substring of another: longest-match-first shadows it out.
  for (const a of gloss) {
    for (const b of gloss) {
      if (a === b) continue;
      ok(!b.word.toLowerCase().includes(a.word.toLowerCase()), `glossary key "${a.word}" is shadowed by "${b.word}"`);
    }
  }
});

test('the scenario turns all carry userEn and at least two alternates', { skip: noLesson }, () => {
  const s = section('s22-scenario');
  ok(s, 's22-scenario is missing');
  const turns = s!.turns as { user?: string; userEn?: string; alts?: unknown[] }[];
  ok(turns.length >= 4);
  for (const t of turns) {
    ok(t.userEn, 'a scenario turn has no userEn');
    ok((t.alts ?? []).length >= 2, 'a scenario turn offers fewer than two alternates');
  }
});

test('commonErrors carries swipe and lg, or it renders a blank screen', { skip: noLesson }, () => {
  const s = section('s09-errors');
  ok(s, 's09-errors is missing');
  strictEqual(s!.swipe, true, 'without swipe, commonErrors falls through to a path that drew a blank screen');
  strictEqual(s!.size, 'lg');
});

test('no groupDrill carries a size, and every control page carries items: []', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    if (s.type !== 'groupDrill') continue;
    const sec = s as unknown as { id: string; size?: string; groups: { items?: unknown[] }[] };
    strictEqual(sec.size, undefined, `${sec.id} carries a size; xl is a 12-word cap on every string in the section`);
    for (const g of sec.groups) ok(Array.isArray(g.items), `${sec.id} has a group with no explicit items array`);
  }
});

/* ─── House rules ──────────────────────────────────────────────────────── */

test('no em dash, no "honest", no autoplay, no U+203F, no imageRef', { skip: noLesson }, () => {
  const all = strings(L!);
  strictEqual(all.filter((s) => s.includes('—')).length, 0, 'em dash');
  strictEqual(all.filter((s) => /honest/i.test(s)).length, 0, '"honest"');
  ok(!JSON.stringify(L!).includes('"autoplay"'), 'autoplay is implemented in no component');
  ok(!JSON.stringify(L!).includes('‿'), 'U+203F renders as a low underscore on a Pixel 6');
  strictEqual(all.filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s)).length, 0,
    'nothing validates imageRef, so this lesson authors none');
});

test('the audio brief keeps the constraints that cannot be recovered later', { skip: noLesson }, () => {
  const recs = L!.audio?.recorded ?? [];
  ok(recs.length >= 8, 'the audio brief has shrunk');
  const byIdRec = new Map(recs.map((r) => [r.id, r] as const));
  const three = byIdRec.get('rec-a1-26-three');
  ok(three, 'the three-way contrast has no recording brief');
  ok(/ONE TAKE/.test(three!.desc), 'the three room words must be one take, and the brief no longer says so');
  const bath = byIdRec.get('rec-a1-26-bath');
  ok(bath && /ADJACENT IN ONE TAKE/.test(bath.desc), 'the bath and toilet pair must be adjacent in one take');
  const ear = byIdRec.get('rec-a1-26-ear');
  ok(ear && /NEVER RECORD « salle » IN ISOLATION/.test(ear.desc), 'the never-record-salle-alone constraint has gone');
  ok(ear && /pwal/.test(ear.desc), 'the poêle pronunciation note has gone and a reader will "correct" it');
});
