// a2.29.l1 « À l'hôtel » — the guard. Trail seq 28, the fifth unit of the A2
// situations band, and the unit a2.30, a2.31 and a2.32 cite for the ladder.
//
// These are the assertions that would have caught this build's own mistakes,
// plus the ones the prompt and the collation asked for BY NAME. A sentence in a
// report cannot fail; a list can.
//
// THE CITATION CONTRACT LIVES HERE. The three rung names are asserted as EXACT
// strings in one section, in order. Three other units quote them verbatim and
// reuse the rung rows by itemId, so a paraphrase or a reorder in this file is
// three lessons quietly describing two different ladders.
//
// Everything is read from `seed.json` rather than from the authoring scripts,
// because the seed is what ships.
import { test } from 'node:test';
import { strictEqual, deepStrictEqual, ok } from 'node:assert';
import seed from './seed.json' with { type: 'json' };
import { hasPlainNasalFor } from './density.logic.ts';
import { dicteeMode } from './dictee.logic.ts';

type Item = { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; drills?: string[]; tags?: string[] };
type Section = Record<string, unknown> & { id: string; type: string };
type Lesson = Record<string, unknown> & {
  id: string; sections: Section[];
  acts?: Array<{ id: string; sections: string[] }>;
  itemIds?: string[]; deckTranche?: string[][];
};

const S = seed as unknown as {
  version: number; items: Item[]; lessons: Lesson[];
  units: Array<{ id: string; themes?: string[]; lessonIds?: string[]; canDo?: string; seq?: number }>;
};

const LESSON = S.lessons.find((l) => l.id === 'a2.29.l1')!;
const UNIT = S.units.find((u) => u.id === 'a2.29')!;
const ITEMS = new Map(S.items.map((i) => [i.id, i]));
const sec = (id: string) => LESSON.sections.find((s) => s.id === id);
const ids = () => LESSON.sections.map((s) => s.id);

const THEME = 'hebergement';

/** Scoped to the BLOCK, never to the theme prefix: `hebergement` holds 371
 *  published rows across three levels and this build authored 59 of them. */
const MINE = S.items.filter((i) => {
  const m = /^fr\.a2\.hebergement\.(\d+)$/.exec(i.id);
  return !!m && Number(m[1]) >= 74 && Number(m[1]) <= 132;
});

/** THE THREE RUNG NAMES. FROZEN. a2.30, a2.31 and a2.32 quote these verbatim. */
const RUNG_1 = 'Ask once, softly.';
const RUNG_2 = 'Say it again, without the person.';
const RUNG_3 = 'Ask for the person who can fix it.';
const RUNGS = [RUNG_1, RUNG_2, RUNG_3];

const REFRAME = 'Take the person out of the sentence.';
const RUDE_LINE = 'Vous devez réparer la douche.';
const IMPERSONAL_LINE = 'Excusez-moi, il y a un problème avec la douche.';

const REPAIR_IDS = [
  'fr.a2.au-restaurant.132', 'fr.a2.au-restaurant.133', 'fr.a2.au-restaurant.134',
  'fr.a2.au-restaurant.135', 'fr.a2.au-restaurant.136', 'fr.a2.au-restaurant.137',
];
const REPAIR_FR = [
  'Pardon ?', "Vous pouvez répéter, s'il vous plaît ?", "Plus lentement, s'il vous plaît.",
  "Je n'ai pas bien compris.", "Qu'est-ce que ça veut dire ?", "Vous pouvez me l'écrire, s'il vous plaît ?",
];

/** THE REAL FOLD, from `answer.logic.ts:32`. This is what grades the quiz. */
const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[/[\]()«».,!?;:]/g, '').replace(/[-·’']/g, '').replace(/\s+/g, '').trim();

/** The house word boundary, WITHOUT the apostrophe on the left, because the
 *  full house shape cannot see `j'ai`, `n'est` or `qu'il` (corrections §14.3). */
const bounded = (needle: string) =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu');

const ALL_TEXT = JSON.stringify(LESSON) + JSON.stringify(MINE);

/** A display() walk: keeps every string a learner can READ, INCLUDING a
 *  cardDeck card's `sub`, which `prose()` drops because it is on NOTATION_KEYS.
 *  a2.15 v1 shipped a banned word in one and only a seed-wide test caught it. */
const MACHINE_KEYS = new Set(['id', 'itemId', 'itemIds', 'ipa', 'ref', 'targets', 'detectOn', 'drill', 'format', 'kind', 'type', 'render', 'layer', 'size', 'lang', 'mode', 'recordingId', 'clip', 'voice', 'assetKey', 'audioRef', 'imageRef', 'sheetId', 'terms', 'respell']);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { out.push(v); return out; }
  if (Array.isArray(v)) { for (const x of v) display(x, out); return out; }
  if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { if (!MACHINE_KEYS.has(k)) display(x, out); }
  return out;
}

/** The learner-facing surfaces, and the ownership guards are scoped to THESE.
 *  `grammarAssumed` and `grammarIntroduced` are addressed to the CURRICULUM and
 *  are allowed the precise words (invariants §8); a guard that walks them fires
 *  on the honest declaration and pushes the next author into deleting the
 *  declaration rather than the teaching. */
const LEARNER = display(LESSON.sections)
  .concat(display(LESSON.terms ?? {}))
  .concat(display(LESSON.drills ?? []))
  .concat([String(LESSON.intro ?? '')])
  .concat(display(LESSON.overview ?? {}));
const LEARNER_TEXT = LEARNER.join('\n');

function quizQs(): Array<Record<string, unknown>> {
  const q = sec('s24-quiz') as { rounds?: Array<{ questions?: Array<Record<string, unknown>> }> } | undefined;
  return (q?.rounds ?? []).flatMap((r) => r.questions ?? []);
}

function scoredStrings(): Array<{ where: string; text: string }> {
  const out: Array<{ where: string; text: string }> = [];
  for (const q of quizQs()) {
    out.push({ where: 'quiz q', text: q.q as string });
    for (const o of ((q.opts as string[]) ?? [])) out.push({ where: 'quiz opt', text: o });
    for (const a of ((q.accept as string[]) ?? [])) out.push({ where: 'quiz accept', text: a });
    if (q.answer) out.push({ where: 'quiz answer', text: q.answer as string });
  }
  for (const s of LESSON.sections) {
    for (const d of ((s as { drill?: Array<{ opts?: string[] }> }).drill ?? [])) {
      for (const o of (d.opts ?? [])) out.push({ where: `${s.id} drill`, text: o });
    }
    for (const g of ((s as { groups?: Array<{ check?: { opts?: string[] } }> }).groups ?? [])) {
      for (const o of (g.check?.opts ?? [])) out.push({ where: `${s.id} check`, text: o });
    }
    for (const q of ((s as { questions?: Array<{ opts?: string[] }> }).questions ?? [])) {
      for (const o of (q.opts ?? [])) out.push({ where: `${s.id} question`, text: o });
    }
  }
  return out;
}

/* ── The lesson exists at all ──────────────────────────────────────────── */

test('a2.29.l1 is in the seed, attached to its unit', () => {
  ok(LESSON, 'a2.29.l1 is missing from seed.json');
  ok(UNIT, 'a2.29 is missing from seed.json');
  deepStrictEqual(UNIT.lessonIds, ['a2.29.l1']);
  strictEqual(UNIT.seq, 28);
  strictEqual(LESSON.unitId, 'a2.29');
  strictEqual(LESSON.level, 'a2');
});

test('the theme re-map landed: hebergement, and voyage is gone', () => {
  deepStrictEqual(UNIT.themes, [THEME], 'band blocking step 2 must have landed');
  strictEqual(S.items.filter((i) => i.theme === 'voyage').length, 0, "'voyage' is a phantom with no themeMeta entry and must stay at zero");
});

/* ── THE CITATION CONTRACT. This is the deliverable three units depend on. ── */

test('the three rung names appear in ONE section, in order, as exact strings', () => {
  const ladder = sec('s04-ladder') as { cols?: string[] } | undefined;
  ok(ladder, 's04-ladder is missing, and it is the section that publishes the rung names');
  deepStrictEqual(ladder!.cols, RUNGS,
    'the rung names are the band contract: a2.30, a2.31 and a2.32 quote these verbatim. A paraphrase is a second ladder.');
});

test('a paraphrase of a rung name would go red', () => {
  // MUTATION CANARY. If this ever passes with a changed string, the assertion
  // above has stopped doing its job.
  const ladder = sec('s04-ladder') as { cols?: string[] };
  ok(ladder.cols![0] !== 'Ask once, gently.', 'a near-paraphrase slipped through');
  ok(ladder.cols![1].includes('without the person'), 'rung 2 no longer names the move it is for');
});

test('the ladder is three rungs by three moves: nine cells and stop', () => {
  const ladder = sec('s04-ladder') as { rows?: Array<{ cells: string[] }> };
  strictEqual(ladder.rows!.length, 3);
  for (const r of ladder.rows!) strictEqual(r.cells.length, 3);
});

test('there is no fourth rung anywhere', () => {
  ok(!/\brung 4\b|\bfourth rung\b/i.test(LEARNER_TEXT), 'a fourth rung is named; three other units are built on there being three');
});

/** THE NINE, by itemId, exactly as the ladder draws them. Row by row, three
 *  rungs across. Typed here independently of the source so the test cannot
 *  become the tautology the batch's first version was. */
const NINE = [
  ['fr.a2.hebergement.074', 'fr.a2.hebergement.084', 'fr.a2.hebergement.091'],
  ['fr.a2.hebergement.076', 'fr.a2.hebergement.085', 'fr.a2.hebergement.092'],
  ['fr.a2.hebergement.078', 'fr.a2.hebergement.087', 'fr.a2.hebergement.093'],
];

test('every ladder cell is a corpus row, cited by id, never new prose', () => {
  // THE CITATION IS ON `say`, NOT ON THE DISPLAYED CELL. `say` is the line the
  // learner hears and it is the authored row verbatim; the cell is a label, and
  // at three equal columns a label sometimes has to be shorter than the
  // sentence. On a Pixel 6 `Excusez-moi,` was one token too wide for a 240dp
  // column and broke MID-WORD as « Excusez-m / oi », so that one cell drops the
  // opener while its `say` keeps it.
  //
  // A shortened cell must still be a real published row. This one is
  // `fr.a2.bricolage.041`, the BARE report, which this build imports precisely
  // so the softened version has something to sit beside.
  const ladder = sec('s04-ladder') as { rows?: Array<{ cells: string[]; say?: string }> };
  const nineFolds = new Set(NINE.flat().map((id) => fold(ITEMS.get(id)!.fr)));
  strictEqual(nineFolds.size, 9);
  const allFolds = new Set(S.items.map((i) => fold(i.fr)));
  for (const row of ladder.rows!) {
    ok(nineFolds.has(fold(row.say ?? '')), `a ladder row's say « ${row.say} » is not one of the nine rung rows`);
    for (const cell of row.cells) {
      const verbatim = nineFolds.has(fold(cell));
      const shortening = [...nineFolds].some((n) => n.endsWith(fold(cell)) || n.startsWith(fold(cell)));
      ok(verbatim || shortening, `the ladder cell « ${cell} » is neither one of the nine nor a shortening of one`);
      ok(allFolds.has(fold(cell)) || verbatim, `the ladder cell « ${cell} » resolves to no corpus row at all. A cell is a label; it may not be new prose.`);
    }
  }
});

test('the practice section drills exactly the nine, in reading order', () => {
  const p = sec('s21-speak') as { itemIds?: string[] };
  deepStrictEqual(p.itemIds, NINE.flat(),
    'the speaking practice and the ladder must be the same nine lines, or the band cites one set and the learner drills another');
});

/* ── The required layouts ───────────────────────────────────────────────── */

test('the rude line and the impersonal line are in ONE section, adjacent', () => {
  const scene = sec('s01-scene') as { beats?: Array<Record<string, unknown>> };
  const brk = (scene.beats ?? []).find((b) => b.kind === 'break') as { wrong?: { fr: string }; right?: { fr: string } };
  ok(brk, 'the scene has no break beat, and the break beat is what puts the two lines on one card');
  strictEqual(fold(brk.wrong!.fr), fold(RUDE_LINE));
  strictEqual(fold(brk.right!.fr), fold(IMPERSONAL_LINE));
});

test('the scene makes the learner commit before it explains', () => {
  const scene = sec('s01-scene') as { beats?: Array<Record<string, unknown>> };
  const choice = (scene.beats ?? []).find((b) => b.kind === 'choice') as { options?: Array<{ fr: string; outcome: string }> };
  ok(choice, 'the scene has no choice beat');
  strictEqual(choice.options!.length, 2, 'the contrast is two options, both grammatical');
  ok(choice.options!.some((o) => fold(o.fr) === fold(RUDE_LINE) && o.outcome === 'breaks'));
  ok(choice.options!.some((o) => fold(o.fr) === fold(IMPERSONAL_LINE) && o.outcome === 'works'));
  // The break beat must come AFTER the choice, or the answer is on screen first.
  const beats = scene.beats!;
  ok(beats.findIndex((b) => b.kind === 'break') > beats.findIndex((b) => b.kind === 'choice'));
});

test('rung 1 and rung 2 are adjacent, with the same request in both', () => {
  strictEqual(ids().indexOf('s07-rung2') - ids().indexOf('s06-rung1'), 1,
    'a section sits between rung 1 and rung 2, and they are the contrast this lesson turns on');
  ok(/serviette/i.test(JSON.stringify(sec('s06-rung1'))));
  ok(/serviette/i.test(JSON.stringify(sec('s07-rung2'))), 'nothing is held still across the contrast');
});

/* ── The reframe ────────────────────────────────────────────────────────── */

test('the reframe appears verbatim at least three times', () => {
  const n = LEARNER.filter((s) => s.includes(REFRAME)).length;
  ok(n >= 3, `the reframe appears ${n} time(s) on a learner surface and the density validator wants at least three`);
});

test('Lesson.reframe is the reframe', () => {
  strictEqual(LESSON.reframe, REFRAME);
});

/* ── The Owns: nobody is accused ────────────────────────────────────────── */

const ACCUSATION_SHAPES = [
  /\bvous devez\s+(?:réparer|changer|nettoyer|refaire|régler)\b/i,
  /\bvous (?:m['’]avez|avez) donné une chambre\b/i,
  /\bc['’]est (?:de )?votre faute\b/i,
  /\bvous avez oublié\b/i,
];

test('no authored corpus row puts the person in the sentence as the target of the fault', () => {
  // The corpus is what the SRS serves cold, months later, with none of the
  // lesson's framing around it.
  for (const r of MINE) {
    for (const sh of ACCUSATION_SHAPES) {
      ok(!sh.test(r.fr), `${r.id} « ${r.fr} » accuses the person`);
    }
  }
});

test('the accusation appears only where it is displayed as wrong', () => {
  // Permitted: the scene option that breaks, the quiz errorSpot prompt, a
  // trapDrill promptSound, a commonErrors `wrong`, and a rejected distractor.
  // Not permitted: a title, a note, a body, a `why` or a correct option.
  const ALLOWED = new Set(['s01-scene', 's24-quiz']);
  for (const s of LESSON.sections) {
    if (ALLOWED.has(s.id)) continue;
    const clone = JSON.parse(JSON.stringify(s)) as Record<string, unknown>;
    if (clone.type === 'trapDrill') {
      for (const c of ((clone.cards ?? []) as Array<Record<string, unknown>>)) { delete c.promptLabel; delete c.promptSound; }
      for (const d of ((clone.drill ?? []) as Array<{ promptSay?: string; opts?: string[]; correct?: number }>)) {
        delete d.promptSay;
        d.opts = (d.opts ?? []).filter((_, i) => i === d.correct);
      }
    }
    for (const e of ((clone.errors ?? []) as Array<Record<string, unknown>>)) delete e.wrong;
    for (const g of ((clone.groups ?? []) as Array<{ check?: { opts?: string[]; correct?: number } }>)) {
      if (g.check) g.check.opts = (g.check.opts ?? []).filter((_, i) => i === g.check!.correct);
    }
    const blob = JSON.stringify(clone);
    for (const sh of ACCUSATION_SHAPES) {
      ok(!sh.test(blob), `${s.id} speaks an accusation in its own voice: ${sh}`);
    }
  }
});

test('the accusation guard still fires on a card body (the stripper has no hole)', () => {
  const canary = JSON.stringify({ type: 'cardDeck', cards: [{ body: RUDE_LINE }] });
  ok(ACCUSATION_SHAPES.some((sh) => sh.test(canary)), 'the guard would no longer catch the rude line in a body');
});

/* ── What this unit does not own ────────────────────────────────────────── */

test('zero repair rows are authored, and a2.07 is cited by id', () => {
  const repairFolds = new Set(REPAIR_FR.map(fold));
  for (const r of MINE) ok(!repairFolds.has(fold(r.fr)), `${r.id} re-authors one of a2.07's six frozen repair rows`);
  ok(/a2\.07/.test(ALL_TEXT), 'a2.07 is never named by unit id, so its repair move is used without attribution');
});

test("a2.07's six repair rows reach the seed and are released by a tranche", () => {
  const tranche = new Set((LESSON.deckTranche ?? []).flat());
  for (const id of REPAIR_IDS) {
    ok(ITEMS.has(id), `${id} is not in the seed, so the repair cards would render empty`);
    ok(tranche.has(id), `${id} is cited but released by no tranche`);
  }
});

test('a2.32 is reserved: no device-fault vocabulary, and no forward citation', () => {
  for (const sh of [/\bne s['’]allume pas\b/i, /\bça bugue\b/i, /\bredémarrer\b/i, /\bredémarre\b/i]) {
    ok(!sh.test(ALL_TEXT), `${sh} is a2.32's diagnostic vocabulary. a2.29 describes a room problem: missing, broken or noisy.`);
  }
  ok(!/\ba2\.3[012]\b/.test(ALL_TEXT), 'a unit that ships AFTER this one is cited. Collation §1.3 forbids a forward citation.');
});

test('MUST_NOT_FIRE: `ne fonctionne pas` is shared and is not guarded away', () => {
  // It is an import, not an ownership question: 14 published rows. Both units
  // use it and neither authors the paradigm. If the a2.32 guard above ever
  // grows to cover it, this goes red.
  ok(/ne fonctionne (?:toujours )?pas/i.test(ALL_TEXT), 'the shared malfunction phrase has been guarded out of a lesson that needs it');
});

test('y and en as PRONOUNS appear on no teaching surface', () => {
  for (const sh of [/\bj['’]y (?:vais|suis|reste)\b/i, /\bil y en a\b/i, /\ben parler\b/i]) {
    ok(!sh.test(ALL_TEXT), `${sh}: a2.25 has zero lessons and collation C8 bans the pronoun band-wide`);
  }
});

test('MUST_NOT_FIRE: `en` as a PREPOSITION is legal and present', () => {
  // The guard above is written against the PRONOUN. `en` the preposition is
  // everywhere in the corpus, and a shape that caught it would be wrong.
  const innocent = ['Je repasse dans une heure, alors.', 'en juin', "L'ascenseur est en réparation."];
  for (const s of innocent) {
    for (const sh of [/\bj['’]y (?:vais|suis|reste)\b/i, /\bil y en a\b/i, /\ben parler\b/i]) {
      ok(!sh.test(s), `the y/en guard fires on the innocent sentence « ${s} »`);
    }
  }
});

test('no job-title feminine is minted: a2.30 owns feminisation band-wide', () => {
  for (const f of ['directrice', 'gérante', 'réceptionniste', 'employée', 'serveuse', 'technicienne']) {
    ok(!bounded(f).test(ALL_TEXT), `the job-title feminine « ${f} » was minted here`);
  }
});

/* ── The five softeners ─────────────────────────────────────────────────── */

const SOFTENERS: Array<{ fr: string; source: 'inherited' | 'imported' | 'authored' }> = [
  { fr: 'je voudrais', source: 'inherited' },
  { fr: 'est-ce que je peux', source: 'inherited' },
  { fr: "j'aimerais", source: 'imported' },
  { fr: 'pourriez-vous', source: 'imported' },
  { fr: 'ce serait possible de', source: 'authored' },
];

test('all five softeners reach a learner surface', () => {
  const folded = fold(LEARNER_TEXT);
  for (const s of SOFTENERS) ok(folded.includes(fold(s.fr)), `the softener « ${s.fr} » never reaches a learner surface`);
});

test('each softener is imported or authored exactly as declared', () => {
  // NOTE: PATH R IS DEAD. Paul approved the a2.13 amendment on 2026-08-15, so a
  // test asserting `pourriez` is ABSENT would now go red against the lesson
  // this build was told to make. It is present, and that is correct.
  const headwords = new Set(MINE.filter((r) => r.kind !== 'sentence').map((r) => fold(r.fr)));
  for (const s of SOFTENERS) {
    if (s.source === 'authored') ok(headwords.has(fold(s.fr)), `« ${s.fr} » is declared authored and no such headword exists`);
    if (s.source === 'imported') ok(!headwords.has(fold(s.fr)), `« ${s.fr} » is declared imported and this build authors it as a headword`);
  }
});

test('pourriez-vous is present, and its upstream exposure is carried', () => {
  ok(/pourriez-vous/i.test(ALL_TEXT), 'the ladder lost its top softener');
  // The three SONS rows are the fact that decided Paul's item 1: the form is
  // already published upstream of a2.13.
  for (const id of ['fr.sons.alphabet.219', 'fr.sons.alphabet.282', 'fr.sons.alphabet.422']) {
    ok(ITEMS.has(id), `${id} did not reach the seed`);
  }
});

test('no softener is ever called a family, a tense or a form', () => {
  for (const sh of [/\b(?:this|that|these|those|a|the|its|their) (?:verb )?family\b/i, /\bbelongs? to a family\b/i]) {
    ok(!sh.test(LEARNER_TEXT), `a softener is described as belonging to a family: ${sh}`);
  }
});

/* ── Jargon and house copy ──────────────────────────────────────────────── */

const JARGON = [
  'conditional', 'conditionals', 'conditionnel', 'subjunctive', 'subjunctives',
  'imperative', 'imperatives', 'paradigm', 'paradigms', 'morphology', 'lexis',
  'modal verb', 'modal verbs', 'auxiliary', 'auxiliaries', 'infinitive', 'infinitives',
  'conjugation', 'conjugations', 'interrogative', 'interrogatives', 'inversion',
  'speech act', 'speech acts', 'mitigator', 'mitigators', 'tense', 'tenses',
];

test('no grammar jargon on any learner surface, plurals included', () => {
  for (const j of JARGON) {
    const hit = bounded(j).exec(LEARNER_TEXT);
    ok(!hit, `the jargon word « ${hit?.[0]} » reached a learner surface`);
  }
});

test('Lesson.intro carries no jargon, in its own assertion', () => {
  // `intro` is drawn on the overview card AND the lesson cover. a2.11 shipped
  // "third person" there past every host-side gate; only a Pixel 6 found it.
  for (const j of JARGON) ok(!bounded(j).test(String(LESSON.intro ?? '')), `Lesson.intro carries « ${j} »`);
});

test('"conditional" is banned outright, in every language', () => {
  ok(!/conditional/i.test(LEARNER_TEXT));
  ok(!/conditionnel/i.test(LEARNER_TEXT));
});

test('"honest" is guarded as a SUBSTRING, so "dishonest" cannot slip through', () => {
  // The house \b boundary cannot see "dishonest" (the a2.06 finding), and a
  // complaint lesson is exactly where an author reaches for it.
  ok(!ALL_TEXT.toLowerCase().includes('honest'), '"honest" reached an authored string');
});

test('no em dash in any authored string', () => {
  ok(!/—/.test(ALL_TEXT));
});

/* ── The corpus ─────────────────────────────────────────────────────────── */

/** THE ONE AUTHORED ROW NOTHING REACHES, and the seed is right to drop it.
 *
 *  `fr.a2.hebergement.086` « Le problème n'est pas réglé. » is a rung-2 row that
 *  NO LESSON references: not this one, not a2.30, a2.31 or a2.32, which cite
 *  .074/.082/.087/.091/.092 and never this. Doctrine §E: every item must be
 *  reachable, named by a section or released by a deckTranche.
 *
 *  It survived in the seed only while the seed was a HAND MERGE. `hebergement`
 *  is not in `SEED_CUT.themes`, so when v51 regenerated the file from the
 *  database the cut kept the referenced rows and dropped this one. That is the
 *  cut working, and this test had been masking an unreachable row by asserting
 *  all 59 were present.
 *
 *  NOT A LEARNER-FACING LOSS: the row is still published in Postgres and ships
 *  in the OTA snapshot's 48,888 items. It is absent from the offline binary
 *  only, which is exactly what a cut is for.
 *
 *  a2.29's owner may want to make it reachable instead, which would be a
 *  lesson edit, a re-merge and a republish. Until then this names it. */
const UNREACHABLE = 86;

/** THE AUTHORED BLOCK, FROM THE SOURCE, which the publish cut cannot touch.
 *
 *  Part B of SEED-IS-GENERATED-FIX-PLAN.md. Counting in the seed is what broke
 *  this suite in the first place; the count belongs where the authoring is. */
let SRC_ROWS: Array<{ id: string; theme?: string; level?: string }> = [];
let noSrc = false;
try {
  const m = await import('../../../ealch-admin/scripts/data/hotel-corpus.ts');
  SRC_ROWS = m.ALL_ROWS as never;
} catch {
  noSrc = true;
}

test('59 rows authored, contiguous, all in hebergement at a2', { skip: noSrc }, () => {
  // AGAINST THE SOURCE, so the full block is asserted whatever the cut does.
  // The .086 exception below is about the SEED and nothing else.
  strictEqual(SRC_ROWS.length, 59, `${SRC_ROWS.length} rows authored, expected 59`);
  const src = SRC_ROWS.map((r) => Number(r.id.slice(-3))).sort((a, b) => a - b);
  strictEqual(src[0], 74);
  strictEqual(src[src.length - 1], 132);
  ok(src.every((n, i) => i === 0 || n === src[i - 1] + 1), 'the authored id block is not contiguous');

  // AND THE SEED, separately: the block minus whatever no lesson references.
  // Naming the exception is what stops it hiding, which is the whole lesson of
  // this suite going red on v51.
  strictEqual(MINE.length, 58, 'the block is 59 ids and .086 is referenced by nothing, so 58 reach the seed');
  const ns = MINE.map((r) => Number(r.id.slice(-3))).sort((a, b) => a - b);
  strictEqual(ns[0], 74);
  strictEqual(ns[ns.length - 1], 132);
  ok(!ns.includes(UNREACHABLE), `.${UNREACHABLE} is in the seed again. If it was made reachable, drop UNREACHABLE and restore 59.`);
  const withGap = [...ns, UNREACHABLE].sort((a, b) => a - b);
  ok(withGap.every((n, i) => i === 0 || n === withGap[i - 1] + 1),
    'the id block is not contiguous, counting the one row the cut drops');
  for (const r of MINE) {
    strictEqual(r.theme, THEME, `${r.id} is in ${r.theme}`);
    strictEqual(r.level, 'a2');
  }
});

test('zero hotel nouns authored: every headword was already published', () => {
  const words = MINE.filter((r) => r.kind === 'word');
  deepStrictEqual(words.map((r) => r.fr), [], 'a hotel noun was authored, and one careless authoring degrades flashhub-coverage');
  // And the ones the lesson leans on are in the seed, imported.
  for (const id of ['fr.a2.hebergement.001', 'fr.a2.hebergement.002', 'fr.a2.hebergement.027']) {
    ok(ITEMS.has(id), `${id} did not reach the seed, so its card would render empty`);
  }
});

test('two rows were repaired, and two were deliberately left alone', () => {
  // A DEFECT THIS BUILD FOUND, A REPAIR THAT WAS RIGHT FOR HALF OF IT, AND THE
  // MEASUREMENT THAT SEPARATED THEM.
  //
  // All four were published and unreachable by any flashcard deck: a
  // `deckTranche` releases through that deck, so an id with no `flashcard`
  // drill releases NOTHING. The first repair gave all four the drill, arguing
  // that `flashhub-coverage.test.ts`'s `SEPARATE_POOL_SIGNATURES` exemption was
  // over-broad.
  //
  // THAT ARGUMENT WAS FALSE, and Postgres provenance says so. Of 2,055 a1/a2
  // vocab rows with no flashcard drill, 2,055 carry
  // `prompt_version = 'exam-vocab-2026-07'`. The exemption has zero false
  // negatives corpus-wide. Two of these four are themselves exam-vocab rows:
  //
  //   fr.a2.expressions-frequentes.072   prompt_version null                STRANDED  -> repaired
  //   fr.a2.expressions-frequentes.077   prompt_version null                STRANDED  -> repaired
  //   fr.a2.hebergement.053              prompt_version exam-vocab-2026-07  DELIBERATE -> reverted
  //   fr.sons.alphabet.282               prompt_version exam-vocab-2026-07  DELIBERATE -> reverted
  //
  // The seed cannot make this distinction: publish withholds every provenance
  // column. So this test pins the OUTCOME rather than re-deriving the reason,
  // and `scripts/repair-flashcard-reachability.ts` holds the measurement.
  const REPAIRED = ['fr.a2.expressions-frequentes.072', 'fr.a2.expressions-frequentes.077'];
  const LEFT_POOLED: Array<[string, string[]]> = [
    ['fr.a2.hebergement.053', ['voiceflash', 'review']],
    ['fr.sons.alphabet.282', ['sentence', 'review']],
  ];
  const released = new Set((LESSON.deckTranche ?? []).flat());

  for (const id of REPAIRED) {
    const it = ITEMS.get(id);
    ok(it, `${id} is not in the seed`);
    ok((it!.drills ?? []).includes('flashcard'), `${id} lost its flashcard drill again, so it releases nothing`);
    ok(released.has(id), `${id} is servable and this lesson no longer releases it`);
  }

  for (const [id, drills] of LEFT_POOLED) {
    const it = ITEMS.get(id);
    ok(it, `${id} is not in the seed; it is carried on purpose so its drills stay true here`);
    deepStrictEqual(it!.drills ?? [], drills,
      `${id} is an exam-vocab pool row. If it now carries flashcard, somebody has overturned that batch's pooling — check provenance before accepting it.`);
    ok(!released.has(id), `${id} carries no flashcard and is released by a tranche, so the release draws nothing`);
  }
});

test('the repair created no duplicate card inside any of the three themes', () => {
  // `flashhub-coverage.test.ts` pins that no theme holds the same word twice.
  // Adding `flashcard` to a row publishes a card into its theme's deck, so the
  // risk is a second card for a string the theme already serves. Checked here
  // against the seed with the same strip-the-article comparison that test uses.
  const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  for (const theme of ['hebergement', 'expressions-frequentes', 'alphabet']) {
    const cards = S.items.filter((i) => i.theme === theme && (i.drills ?? []).includes('flashcard'));
    const seen = new Map<string, string>();
    for (const i of cards) {
      const k = norm(i.fr);
      ok(!seen.has(k), `${theme} now serves « ${i.fr} » twice: ${seen.get(k)} and ${i.id}`);
      seen.set(k, i.id);
    }
  }
});

test('no duplicate fr inside hebergement, computed the way flashhub computes it', () => {
  const strip = (s: string) => s.replace(/^(?:le |la |les |un |une |des |du |de l'|l')/i, '');
  const seen = new Map<string, string>();
  for (const i of S.items.filter((x) => x.theme === THEME)) {
    const k = fold(strip(i.fr));
    if (seen.has(k)) ok(false, `${i.id} « ${i.fr} » collides with ${seen.get(k)} inside ${THEME}`);
    seen.set(k, i.id);
  }
});

test('the receptionist is at least 40% of the authored rows', () => {
  // Collation §1.5. The other party's voice is what the corpus had never
  // written down, and it is why this unit exists.
  const desk = MINE.filter((r) => (r.tags ?? []).includes('desk')).length;
  ok(desk / MINE.length >= 0.4, `only ${((desk / MINE.length) * 100).toFixed(1)}% of authored rows are the receptionist's`);
});

test('every authored respelling closes its nasals with the superscript', () => {
  for (const r of MINE) {
    if (!r.respell) continue;
    ok(!hasPlainNasalFor(r.fr, r.respell), `${r.id} « ${r.respell} » closes a nasal with a plain n or m`);
    ok(!/‿/.test(r.respell), `${r.id} carries a U+203F tie, which renders as a low underscore on a Pixel 6`);
  }
  // BY NAME as well as by the shared checker, because `hasPlainNasalFor` has
  // three documented blind spots and a quiet checker is evidence, not proof.
  const byId = new Map(MINE.map((r) => [r.id, r]));
  ok(/rahⁿ/.test(byId.get('fr.a2.hebergement.131')!.respell!), 'déranger must close its nasal with ⁿ');
});

test('the metalinguistic rows are named by nothing', () => {
  // `.012` is "On utilise le conditionnel pour demander poliment." — a grammar
  // rule stored as a corpus sentence, in a lesson whose test bans the word.
  for (const id of ['fr.a2.hebergement.011', 'fr.a2.hebergement.012']) {
    ok(!(LESSON.itemIds ?? []).includes(id), `${id} is named by the lesson and it is metalinguistic`);
    ok(!(LESSON.deckTranche ?? []).flat().includes(id), `${id} is released by a tranche`);
  }
});

/* ── The shape of the lesson ────────────────────────────────────────────── */

test('24 sections, six acts, act 3 the heaviest', () => {
  strictEqual(LESSON.sections.length, 24);
  const sizes = (LESSON.acts ?? []).map((a) => a.sections.length);
  deepStrictEqual(sizes, [3, 4, 6, 3, 4, 4]);
  ok(sizes[2] > sizes[1], 'act 3 must outweigh act 2');
  ok(sizes.every((n) => n <= sizes[2]));
});

test('every act names a section that exists, and no section is claimed twice', () => {
  const claimed = new Map<string, string>();
  for (const a of (LESSON.acts ?? [])) {
    for (const id of a.sections) {
      ok(sec(id), `act ${a.id} names ${id}, which is not a section`);
      ok(!claimed.has(id), `${id} is claimed by ${claimed.get(id)} and ${a.id}`);
      claimed.set(id, a.id);
    }
  }
  strictEqual(claimed.size, LESSON.sections.length, 'a section belongs to no act');
});

test('exactly one quiz: a second is silently never rendered', () => {
  strictEqual(LESSON.sections.filter((s) => s.type === 'quiz').length, 1);
});

test('the ladder is a tapTable, because a table at core is refused', () => {
  // `density.logic.ts:423` refuses `table` at layer 'core' under the heading
  // « Tables never appear in the flow ». That is why zero of 69 lessons carry
  // one in `sections`, and it is not a renderer gap: the device pass proved it
  // draws. The tapTable carries the identical layout and is audible.
  strictEqual(sec('s04-ladder')!.type, 'tapTable');
  strictEqual((sec('s04-ladder') as { layer?: string }).layer, 'core');
});

test('this lesson ships zero table sections, and that is the answer', () => {
  // `validateDensity` refuses a `table` at `layer: 'core'`. This build shipped
  // one at `layer: 'more'` — the only layer that passes — and then measured
  // that `layer` IS READ BY NO RENDERER: three consumers in the product, two in
  // the density validator and one in the schema's enum check, and no `=== 'more'`
  // anywhere in render code.
  //
  // So `more` draws exactly like `core`. The table was a full numbered mission
  // showing the same nine lines as the tapTable one mission earlier. There is no
  // layer that puts a table out of the flow, so a lesson has no usable home for
  // one, and the tapTable already carries the layout, the nine cells and the audio.
  strictEqual(LESSON.sections.filter((s) => s.type === 'table').length, 0);
  ok(!sec('s05-grid'), 's05-grid is back; see the note in hotel-lesson.ts');
});

test("layer 'more' is a declared contract, not a rendering behaviour", () => {
  // The Quebec card keeps `layer: 'more'` because C3 declares it and this test
  // asserts it. What it does NOT do is keep the card off the teaching path:
  // it is a numbered mission like any other. C3's substance — ONE card, never
  // scored — is what makes Quebec colour rather than curriculum, and neither
  // half depends on `layer`.
  const q = sec('s14-quebec') as { layer?: string };
  strictEqual(q.layer, 'more');
  const moreSections = LESSON.sections.filter((s) => (s as { layer?: string }).layer === 'more');
  strictEqual(moreSections.length, 1, 'only the Quebec card declares more; the table that also did has been removed');
});

test('commonErrors sets swipe, or it renders blank', () => {
  for (const s of LESSON.sections) {
    if (s.type !== 'commonErrors') continue;
    strictEqual((s as { swipe?: boolean }).swipe, true, `${s.id} would fall to the shared fallback and draw nothing`);
  }
});

test('the trapDrill walks rule > cards > audio > drill with a gated drill step', () => {
  const t = LESSON.sections.find((s) => s.type === 'trapDrill') as
    { id: string; steps?: Array<{ kind: string; gate?: boolean }>; swipe?: boolean; size?: string; rule?: unknown };
  ok(t, 'the lesson has no trapDrill');
  deepStrictEqual(t.steps!.map((s) => s.kind), ['rule', 'cards', 'audio', 'drill']);
  strictEqual(t.steps!.at(-1)!.gate, true);
  strictEqual(t.swipe, true);
  strictEqual(t.size, undefined, 'size comes OFF a stepped trapDrill');
  ok(t.rule, 'the rule step would draw nothing');
});

test('both listening sections hide their lines', () => {
  for (const id of ['s03-arrival', 's17-numbers']) {
    const l = sec(id) as { hideLines?: boolean; lines?: Array<{ fr: string }>; questions?: Array<{ q: string }> };
    strictEqual(l.hideLines, true, `${id} would print l.fr and l.en beside the play button, making it a reading exercise`);
    for (const q of l.questions!) {
      ok(!/what did you hear/i.test(q.q), `${id} asks what was heard, which a visible transcript answers`);
      for (const ln of l.lines!) ok(!fold(q.q).includes(fold(ln.fr)), `${id} reprints its line, so hideLines buys nothing`);
    }
  }
});

test('two scenarios, both liftable, and the complaint escalates because the desk refuses', () => {
  const sc = LESSON.sections.filter((s) => s.type === 'scenario');
  strictEqual(sc.length, 2);
  for (const s of sc) {
    for (const t of (s as { turns: Array<{ userEn?: string; alts?: unknown[] }> }).turns) {
      ok(t.userEn, `${s.id} has a turn with no userEn`);
      ok((t.alts ?? []).length >= 2, `${s.id} has a turn with fewer than two alts`);
    }
    // Liftable by a2.35: the setting stands alone without this lesson's act 1.
    ok(String((s as { setting: string }).setting).length > 40, `${s.id}'s setting is too thin to run standalone`);
  }
  const c = sec('s19-complaint') as { turns: Array<{ ai: string }> };
  strictEqual(c.turns.length, 6);
  ok(/désolée|ne peux rien faire|complet/i.test(c.turns[1].ai), 'turn 2 is not a refusal, so nothing forces rung 2');
  ok(/je vais voir|je vais prévenir/i.test(c.turns[3].ai), 'turn 4 does not deflect, so nothing forces rung 3');
});

test('groupDrill items use note, not sub: sub draws nothing', () => {
  for (const s of LESSON.sections) {
    if (s.type !== 'groupDrill') continue;
    for (const g of ((s as { groups?: Array<{ items?: Array<Record<string, unknown>> }> }).groups ?? [])) {
      for (const it of (g.items ?? [])) ok(!('sub' in it), `${s.id} has a group item carrying sub, which draws nothing. Use note.`);
    }
  }
});

test('no cardDeck carries itemIds: only practice reads it', () => {
  for (const s of LESSON.sections) {
    if (s.type === 'cardDeck') ok(!('itemIds' in s), `${s.id} carries itemIds on a cardDeck, which validates, publishes and draws nothing`);
  }
});

/** `skill` is the ONE key this lesson carries that no other shipped lesson has,
 *  and it is deliberate rather than invented.
 *
 *  The a2.07 finding this test comes from was about fields that are not in the
 *  `Lesson` TYPE at all (`canDo`, `track`, `teaches`), which validate, publish
 *  and render nowhere. `skill` is different on every count: it is declared in
 *  `schema.ts`, and `dueExamSkills()` reads it at
 *  `store/progress.logic.ts:1281` (`lessons.find((l) => l.skill === r.skill &&
 *  l.level === r.band)`) with two passing tests over that path in
 *  `store/progress.test.ts:1276-1290`.
 *
 *  So a2.29 is the FIRST lesson in the product to set it, and the exam-skill
 *  deep-link has had no lesson to resolve to until now. That is worth knowing
 *  and it is not a defect. Anything else new still fails.
 *
 *  EMPTIED 2026-08-16 by the a2.30 build, which is the event the test below
 *  was written to detect: a2.30.l1 sets `skill: 'PO'`, so `skill` is no longer
 *  unique to this lesson and no longer needs an exemption. Emptying the set
 *  makes the first test STRICTER rather than weaker, which is why this is the
 *  one edit a neighbouring build may make to this file. */
const NEW_BUT_READ = new Set<string>([]);

test('the lesson carries no field the shipped corpus does not, except a named one', () => {
  const others = S.lessons.filter((l) => l.id !== LESSON.id);
  const known = new Set(others.flatMap((l) => Object.keys(l)));
  const invented = Object.keys(LESSON as unknown as Record<string, unknown>)
    .filter((k) => !known.has(k) && !NEW_BUT_READ.has(k));
  deepStrictEqual(invented, [], `carries field(s) no other lesson has and no renderer reads: ${invented.join(', ')}`);
});

test('the one new field is genuinely new, so the allowlist cannot rot', () => {
  // If another lesson later sets `skill`, this goes red and the allowlist above
  // should be emptied rather than left to hide a real invention.
  const others = S.lessons.filter((l) => l.id !== LESSON.id);
  const known = new Set(others.flatMap((l) => Object.keys(l)));
  for (const k of NEW_BUT_READ) {
    ok(!known.has(k), `${k} is now on another lesson too; drop it from NEW_BUT_READ`);
  }
});

test('canDo, track and teaches are absent: all three draw nothing on a Lesson', () => {
  for (const dead of ['canDo', 'track', 'teaches']) {
    ok(!(dead in (LESSON as unknown as Record<string, unknown>)), `the lesson carries « ${dead} », which renders nowhere`);
  }
  ok((LESSON.grammarIntroduced as string[])?.length, 'grammarIntroduced is the house field 62 of 66 lessons carry');
  ok((LESSON.grammarAssumed as string[])?.length);
});

test('no reference sheet, no deep layer, no imageRef', () => {
  strictEqual(((LESSON.sheets as unknown[]) ?? []).length, 0, 'a cheatSheet inside a sheet draws its title and nothing else');
  ok(!LESSON.sections.some((s) => (s as { layer?: string }).layer === 'deep'));
  ok(!/"imageRef"/.test(ALL_TEXT));
});

test('practice is mandatory, is speak, and every item carries voiceflash', () => {
  const p = LESSON.sections.filter((s) => s.type === 'practice');
  ok(p.length, 'lesson-contract.test.ts:505 fails a teaching lesson with no practice section');
  for (const s of p) {
    const itemIds = (s as { itemIds?: string[] }).itemIds ?? [];
    ok(itemIds.length, 'an empty practice.itemIds fails the publish gate');
    ok((s as { skill?: string }).skill !== 'write', "skill 'write' draws no writing surface");
    for (const id of itemIds) {
      ok((ITEMS.get(id)?.drills ?? []).includes('voiceflash'), `${id} is practised and carries no voiceflash`);
    }
  }
  ok((LESSON.itemIds ?? []).length, 'Lesson.itemIds is empty');
});

test('every dictée item carries the dictation drill and runs in word mode', () => {
  const d = LESSON.sections.find((s) => s.type === 'dictation') as { itemIds?: string[] };
  ok(d?.itemIds?.length);
  for (const id of d.itemIds!) {
    const it = ITEMS.get(id);
    ok(it, `${id} does not resolve`);
    ok((it!.drills ?? []).includes('dictation'), `${id} is dictated and carries no dictation drill`);
    ok(!/['’-]/.test(it!.fr), `${id} carries an apostrophe or a hyphen; normalizeFr strips both`);
    strictEqual(dicteeMode(it!.fr), 'words', `${id} does not run in word mode`);
  }
});

test('every deckTranche id resolves and carries a flashcard drill', () => {
  // A tranche releases through the flashcard deck. An id with no `flashcard`
  // releases NOTHING, which is a line that looks like it works.
  for (const slice of (LESSON.deckTranche ?? [])) {
    for (const id of slice) {
      const it = ITEMS.get(id);
      ok(it, `${id} is released by a tranche and is not in the seed`);
      ok((it!.drills ?? []).includes('flashcard'), `${id} is released by a tranche and carries no flashcard drill`);
    }
  }
});

test('the tranche releases nothing twice, and has one slice per act', () => {
  strictEqual((LESSON.deckTranche ?? []).length, (LESSON.acts ?? []).length);
  const seen = new Set<string>();
  for (const slice of (LESSON.deckTranche ?? [])) {
    for (const id of slice) {
      ok(!seen.has(id), `${id} is released twice`);
      seen.add(id);
    }
  }
});

test('every id the lesson names resolves in the seed', () => {
  for (const id of (LESSON.itemIds ?? [])) ok(ITEMS.has(id), `${id} does not resolve, so its card renders empty`);
});

/* ── Quebec ─────────────────────────────────────────────────────────────── */

test('one Quebec card, at layer more, and nothing on it is scored', () => {
  const q = sec('s14-quebec') as { type: string; layer?: string; cards?: unknown[] };
  ok(q, 's14-quebec is missing');
  strictEqual(q.layer, 'more');
  strictEqual(q.cards!.length, 1, 'collation C3 allows exactly one');
  // The bare Quebec forms never reach a scored surface. `le petit déjeuner` is
  // France-standard and is the corpus's own published phrase.
  for (const { where, text } of scoredStrings()) {
    for (const f of ['dîner', 'souper', 'stationnement', 'chambreur']) {
      ok(!bounded(f).test(text), `${where} carries the Quebec form « ${f} »: « ${text} »`);
    }
    if (/petit déjeuner/i.test(text)) continue;
    ok(!bounded('déjeuner').test(text), `${where} carries the bare Quebec « déjeuner »: « ${text} »`);
  }
});

test('zero Quebec rows authored: the divergence was already published', () => {
  ok(!MINE.some((r) => (r.tags ?? []).includes('quebec')), 'a Quebec row was authored here');
  ok(ITEMS.has('fr.a2.quebec-et-francophonie.121'), 'the a2 Quebec citation did not reach the seed');
});

/* ── The quiz ───────────────────────────────────────────────────────────── */

test('six rounds of five, passMark 70, every round targets an errorTrigger', () => {
  const q = sec('s24-quiz') as { rounds?: Array<{ id: string; targets?: string[]; questions: unknown[] }>; passMark?: number; roundFailThreshold?: number };
  strictEqual(q.rounds!.length, 6);
  for (const r of q.rounds!) strictEqual(r.questions.length, 5, `round ${r.id} is not five questions`);
  strictEqual(q.passMark, 70);
  ok(q.roundFailThreshold);
  const triggers = new Set(((LESSON.errorTriggers as Array<{ id: string }>) ?? []).map((t) => t.id));
  for (const r of q.rounds!) {
    ok((r.targets ?? []).length, `round ${r.id} targets no errorTrigger`);
    for (const t of r.targets!) ok(triggers.has(t), `round ${r.id} targets ${t}, which is not an errorTrigger`);
  }
});

test('every quiz question carries a why and a ref that resolves', () => {
  const sectionIds = new Set(ids());
  for (const q of quizQs()) {
    ok(q.why, `quiz question « ${q.q} » has no why`);
    ok(q.ref, `quiz question « ${q.q} » has no ref`);
    ok(sectionIds.has(q.ref as string), `« ${q.q} » refs ${q.ref}, which is not a section here`);
    ok(q.ref !== 's14-quebec', 'a quiz question refs the Quebec card, which is scored nowhere');
  }
});

test('at most half the quiz is mcq', () => {
  const qs = quizQs();
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq <= qs.length / 2, `${mcq} of ${qs.length} are mcq`);
});

test('every free-text item discriminates after folding', () => {
  // THE BAND RULE. `fold()` strips accents, case, punctuation, hyphens, both
  // apostrophes and ALL whitespace. This lesson is the band's most hyphen- and
  // elision-dense material, so this is where it bites.
  const free = quizQs().filter((q) => q.format === 'typeIn' || q.format === 'errorSpot');
  ok(free.length >= 8, 'the free-text half of the quiz has thinned out');
  const answers = new Map<string, string>();
  for (const q of free) {
    const a = q.answer as string;
    const p = q.prompt as string | undefined;
    ok(a, `${q.format} « ${q.q} » has no answer`);
    ok(p, `${q.format} « ${q.q} » has no prompt, so the learner fixes a phrase that never appears on screen`);
    if (q.format === 'errorSpot') {
      ok(fold(p!) !== fold(a), `errorSpot « ${q.q} » folds its prompt onto its answer: it tests nothing`);
    }
    ok(((q.accept as string[]) ?? []).some((x) => fold(x) === fold(a)), `${q.format} « ${q.q} » accepts nothing that folds onto its answer`);
    const prev = answers.get(fold(a));
    ok(!prev, `two free-text questions fold onto the same answer: « ${q.q} » and « ${prev} »`);
    answers.set(fold(a), q.q as string);
  }
});

test('the contrasts this lesson turns on survive the fold', () => {
  ok(fold('toujours') !== fold('pas encore'), 'the rung 2 contrast folds away');
  ok(fold(RUDE_LINE) !== fold(IMPERSONAL_LINE), 'the trap folds away');
  // And these do NOT survive it, which is why no free-text item tests them.
  strictEqual(fold('Excusez-moi'), fold('Excusez moi'));
  strictEqual(fold("s'il vous plaît"), fold('silvousplait'));
  strictEqual(fold('pourriez-vous'), fold('pourriez vous'));
});

test('every listenChoose can speak something other than its own answer', () => {
  for (const q of quizQs()) {
    if (q.format !== 'listenChoose') continue;
    ok(q.say || (q.audio as { clip?: string } | undefined)?.clip,
      `listenChoose « ${q.q} » would speak its own English answer aloud (the a1.25 bug)`);
  }
});

/* ── Band policy, asserted as an absence ────────────────────────────────── */

test('zero Scenario.exam values and zero ExamTask rows', () => {
  // Band policy, settled by Paul on 2026-08-15 as decision item 4. Asserted
  // because it is policy and not an oversight.
  for (const s of LESSON.sections.filter((x) => x.type === 'scenario')) {
    ok(!('exam' in s), `${s.id} carries an exam value`);
  }
  ok(!(sec('s24-quiz') as { exam?: boolean }).exam, 'the quiz sets exam: true, which is a1.30.l2 only');
  const tasks = (seed as unknown as { examTasks?: unknown[] }).examTasks ?? [];
  ok(!tasks.some((t) => JSON.stringify(t).includes('a2.29')), 'an ExamTask row references a2.29');
});

test('Lesson.skill is PO, so dueExamSkills() can deep-link in', () => {
  strictEqual(LESSON.skill, 'PO');
});

test('no unread audio field is authored believing it does something', () => {
  // modelPlayback, wrongThenRight, perSentenceReplay, scoreOn, autoplay and
  // maxPlays are validated and read by NO renderer.
  for (const f of ['modelPlayback', 'wrongThenRight', 'perSentenceReplay', 'scoreOn', 'maxPlays']) {
    ok(!new RegExp(`"${f}"`).test(JSON.stringify(LESSON)), `${f} is authored and no renderer reads it`);
  }
});
