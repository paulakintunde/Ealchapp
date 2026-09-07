// a2.07.l1 « Au restaurant » — the guard. Trail seq 24, head of the A2
// situations band (seq 24 to 31).
//
// THE MOST IMPORTANT TEST IN THIS FILE IS `the six repair rows are frozen`.
// Seven other units cite those ids. A rename, a reorder, a re-theme or a
// dropped drill must go RED here rather than quietly breaking seven lessons.
//
// Every checker used here is imported from the module the app itself runs.
// A test that reimplements the thing it guards is free to drift from it, which
// is the same mistake as a guard that copies a regex.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity } from './density.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { namesUnitLabel } from './unit-label.ts';

/** THE AUTHORED BLOCK, FROM THE SOURCE, which the publish cut cannot touch.
 *
 *  Counting it in the SEED is only correct while every authored row happens to
 *  be referenced. `a2-29-hotel.test.ts` made that assumption and went red on
 *  the first publish in a week: v51 regenerated seed.json from Postgres, the cut
 *  dropped `fr.a2.hebergement.086` because no lesson named it, and the count
 *  broke. The row had been unreachable for weeks with every guard green.
 *
 *  SEED-IS-GENERATED-FIX-PLAN.md Part B: count the block where it is
 *  authoritative, and assert the seed separately for what it actually owes —
 *  every id the lesson REFERENCES. */
let SRC_ROWS: Array<{ id: string }> = [];
let noSrc = false;
try {
  const m = await import('../../../ealch-admin/scripts/data/restaurant-corpus.ts');
  SRC_ROWS = m.ALL_ROWS as never;
} catch {
  noSrc = true;
}

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number;
  units: Array<{ id: string; themes?: string[]; lessonIds?: string[]; canDo?: string; seq?: number }>;
  lessons: Lesson[];
  items: Array<{ id: string; fr: string; en: string; theme: string; level: string; kind: string; respell?: string; ipa?: string; drills?: string[] }>;
};

const UNIT_ID = 'a2.07';
const LESSON_ID = 'a2.07.l1';
const THEME = 'au-restaurant';

const L = seed.lessons.find((l) => l.id === LESSON_ID);
const UNIT = seed.units.find((u) => u.id === UNIT_ID);
const ITEMS = new Map(seed.items.map((i) => [i.id, i]));
const AUTHORED = seed.items.filter((i) => /^fr\.a2\.au-restaurant\.\d{3}$/.test(i.id) && Number(i.id.slice(-3)) >= 132 && Number(i.id.slice(-3)) <= 189);

/** The quiz's own normaliser, `fold` in answer.logic.ts:32, reproduced here
 *  ONLY to assert that two authored strings do not collide under it. It is not
 *  a grading path; it is a measuring tape. */
const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[/[\]()«».,!?;:]/g, '').replace(/[-·’']/g, '').replace(/\s+/g, '').trim();

const sectionsOf = (l: Lesson) => l.sections as LessonSection[];
const byId = (l: Lesson, id: string) => sectionsOf(l).find((s) => (s as { id?: string }).id === id);

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE FROZEN REPAIR BLOCK — the band's Owns. Collation §1.6 and §7.1.
 * ═══════════════════════════════════════════════════════════════════════════ */

/** The contract, verbatim, so a diff on this array is a diff on the contract.
 *
 *  THIS ARRAY IS THE CITATION TARGET for the other seven units of the band. It
 *  used to be a markdown file as well, and a test asserted the two agreed; the
 *  docs have since moved out of the repo and that test went with them. The
 *  contract did not move: it is here, and it is checked against the seed
 *  directly by the tests below. */
const REPAIR = [
  { rung: 1, id: 'fr.a2.au-restaurant.132', fr: 'Pardon ?', respell: 'par-DOHⁿ' },
  { rung: 2, id: 'fr.a2.au-restaurant.133', fr: "Vous pouvez répéter, s'il vous plaît ?", respell: 'voo poo-VAY ray-pay-TAY seel voo PLEH' },
  { rung: 3, id: 'fr.a2.au-restaurant.134', fr: "Plus lentement, s'il vous plaît.", respell: 'plü lahⁿt-MAHⁿ seel voo PLEH' },
  { rung: 4, id: 'fr.a2.au-restaurant.135', fr: "Je n'ai pas bien compris.", respell: 'zhuh nay pah byehⁿ kohⁿ-PREE' },
  { rung: 5, id: 'fr.a2.au-restaurant.136', fr: "Qu'est-ce que ça veut dire ?", respell: 'kess kuh sa veu DEER' },
  { rung: 6, id: 'fr.a2.au-restaurant.137', fr: "Vous pouvez me l'écrire, s'il vous plaît ?", respell: 'voo poo-VAY muh lay-KREER seel voo PLEH' },
];

const REPAIR_DRILLS = ['flashcard', 'voiceflash', 'dictation'];

test('the six repair rows are frozen: id, theme, string, order and drills', () => {
  ok(L, `${LESSON_ID} is not in the seed`);
  for (const r of REPAIR) {
    const it = ITEMS.get(r.id);
    ok(it, `${r.id} (rung ${r.rung}) is missing. Seven units cite this id.`);
    strictEqual(it!.fr, r.fr, `${r.id} changed its fr string. Seven units quote it.`);
    strictEqual(it!.theme, THEME, `${r.id} moved out of ${THEME}. The citable block is single-theme by contract.`);
    strictEqual(it!.respell, r.respell, `${r.id} changed its respelling`);
    for (const d of REPAIR_DRILLS) {
      ok((it!.drills ?? []).includes(d), `${r.id} lost the ${d} drill. A citing unit reaching for it renders nothing.`);
    }
  }
});

test('the six repair ids are a contiguous run at the head of the id block', () => {
  const nums = REPAIR.map((r) => Number(r.id.slice(-3)));
  deepStrictEqual(nums, [132, 133, 134, 135, 136, 137], 'the block moved; it is cited as a run');
  nums.forEach((n, i) => { if (i) strictEqual(n, nums[i - 1] + 1, 'the run has a hole in it'); });
});

test('every repair string is domain-neutral, asserted by word list rather than by eye', () => {
  // A doctor's unit, a hotel unit and a technology unit all have to put these
  // same six strings in front of a learner.
  const RESTAURANT_WORDS = [
    'restaurant', 'table', 'carte', 'menu', 'plat', 'addition', 'serveur', 'serveuse',
    'boisson', 'entrée', 'dessert', 'cuisson', 'café', 'vin', 'eau', 'pain', 'repas',
    'commande', 'commander', 'manger', 'boire', 'terrasse', 'apéritif', 'note',
  ];
  for (const r of REPAIR) {
    const leak = RESTAURANT_WORDS.filter((w) => new RegExp(w, 'i').test(r.fr));
    strictEqual(leak.length, 0, `rung ${r.rung} « ${r.fr} » carries ${leak.join(', ')}, so another unit cannot cite it`);
  }
});

test('the repair ladder is monotonic in face cost, and s17 renders all six in order', () => {
  const s = byId(L!, 's17-repair');
  ok(s, 's17-repair is missing: the band Owns lives there');
  // NOT via itemIds: no renderer reads itemIds on a cardDeck, and a2.07 was the
  // only one of 285 shipped cardDecks that carried the field. The six rows reach
  // the learner through the cards below and the SRS through act 4's deckTranche,
  // so those are what this asserts.
  ok(!('itemIds' in (s as Record<string, unknown>)),
    's17-repair carries itemIds, which draws nothing on a cardDeck');
  const act4Tranche = (L!.deckTranche ?? [])[3] ?? [];
  for (const r of REPAIR) {
    ok(act4Tranche.includes(r.id), `${r.id} is not released by act 4's deckTranche, so it never reaches the SRS`);
  }
  const cards = (s as { cards?: Array<{ head?: string; fr?: string }> }).cards ?? [];
  strictEqual(cards.length, 6, 's17-repair must show exactly six cards, one per rung');
  cards.forEach((card, i) => {
    strictEqual(card.head, `Rung ${i + 1}`, `card ${i + 1} is labelled ${card.head}; citing units quote "rung n"`);
    strictEqual(card.fr, REPAIR[i].fr, `card ${i + 1} shows a string that is not rung ${i + 1}`);
  });
});

/* REMOVED 2026-08-20: "04-REPAIR-MOVE-IDS.md exists and its six ids match the
 * seed".
 *
 * It read `ealch-admin/A2-SITUATIONS/04-REPAIR-MOVE-IDS.md` off disk and
 * asserted the document named all six ids, carried all six strings, and used
 * the word "frozen". The authoring docs have been moved out of the repo, and a
 * test that fails because a markdown file is not where it used to be is testing
 * the filing system rather than the content.
 *
 * NOTHING IS LOST. The guarantee it appeared to protect — that the six rungs
 * are frozen and the seed matches them — is asserted in full by "the six repair
 * rows are frozen: id, theme, string, order and drills" above, which checks
 * every id, theme, string, order position and drill array against the seed
 * itself. The deleted test only added "and a document says the same thing",
 * which is a claim about documentation, not about the corpus.
 *
 * The frozen list still lives in `REPAIR` at the top of this file, which is
 * what citing units are actually checked against. */

/* ═══════════════════════════════════════════════════════════════════════════
 *  Identity, shape and the publish gate
 * ═══════════════════════════════════════════════════════════════════════════ */

test('the unit and the lesson agree, and there is exactly one lesson', () => {
  ok(UNIT, `${UNIT_ID} is not in the seed`);
  strictEqual(UNIT!.seq, 24, 'a2.07 is seq 24 on the A2 trail');
  deepStrictEqual(UNIT!.lessonIds, [LESSON_ID], 'den.tsx opens lessonIds[0] and nothing else; a second lesson is unreachable');
  strictEqual(L!.unitId, UNIT_ID);
  // The canDo lives on the UNIT and nowhere else. An earlier draft copied it onto
  // the lesson too; `canDo` is not a Lesson field, a2.07 was the only lesson of 66
  // carrying it, and nothing read it. Note the CURLY apostrophe: quoted off the
  // seed unit row rather than retyped.
  ok(!('canDo' in (L as unknown as Record<string, unknown>)),
    'canDo belongs to the unit; a lesson-level copy is a field no renderer reads');
  ok(UNIT!.canDo?.includes('waiter\u2019s questions'),
    'the unit canDo lost its curly apostrophe or its third clause');
});

test('the lesson validates, and its density is clean', () => {
  const issues = validateLesson(L as never) as unknown[];
  strictEqual(Array.isArray(issues) ? issues.length : 0, 0, `validateLesson: ${JSON.stringify(issues).slice(0, 400)}`);
  const d = validateDensity(L as never) as unknown;
  const list = Array.isArray(d) ? d : ((d as { issues?: unknown[] }).issues ?? []);
  strictEqual(list.length, 0, `validateDensity: ${JSON.stringify(list).slice(0, 400)}`);
});

test('exactly one quiz section, and practice is present and speaking', () => {
  strictEqual(sectionsOf(L!).filter((s) => s.type === 'quiz').length, 1, 'a second quiz section is silently never rendered');
  const practice = sectionsOf(L!).filter((s) => s.type === 'practice');
  ok(practice.length > 0, 'lesson-contract.test.ts:505 mirrors the publish gate and fails a lesson with no practice');
  for (const p of practice) {
    const ids = (p as { itemIds?: string[] }).itemIds ?? [];
    ok(ids.length > 0, 'a practice section with an empty itemIds fails the publish gate');
    ok((p as { skill?: string }).skill !== 'write', "practice skill 'write' draws no writing surface");
    for (const id of ids) {
      const it = ITEMS.get(id);
      ok(it, `practice names ${id}, which is not in the seed`);
      ok((it!.drills ?? []).includes('voiceflash'), `practice is speaking and ${id} carries no voiceflash`);
    }
  }
  ok((L!.itemIds ?? []).length > 0, 'Lesson.itemIds is empty, so the lesson releases no SRS cards');
});

test('deckTranche has one array per act, and every item is reachable', () => {
  const acts = L!.acts ?? [];
  strictEqual((L!.deckTranche ?? []).length, acts.length, 'deckTranche must carry one array per act');
  const reachable = new Set([
    ...(L!.deckTranche ?? []).flat(),
    ...sectionsOf(L!).flatMap((s) => (s as { itemIds?: string[] }).itemIds ?? []),
  ]);
  for (const it of AUTHORED) {
    ok(reachable.has(it.id), `${it.id} « ${it.fr} » is authored and named by nothing`);
  }
  // A tranche release only works if the row carries a flashcard drill.
  for (const id of (L!.deckTranche ?? []).flat()) {
    const it = ITEMS.get(id);
    ok(it, `deckTranche releases ${id}, which is not in the seed`);
    ok((it!.drills ?? []).includes('flashcard'), `deckTranche releases ${id}, which has no flashcard drill`);
  }
});

test('every act names sections that exist, and every section has a stable id', () => {
  const ids = sectionsOf(L!).map((s) => (s as { id?: string }).id);
  ok(ids.every(Boolean), 'a section has no id, so a quiz ref or an act entry cannot point at it');
  strictEqual(new Set(ids).size, ids.length, 'two sections share an id');
  for (const a of L!.acts ?? []) {
    for (const sid of a.sections) ok(ids.includes(sid), `act ${a.id} names ${sid}, which is not a section`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  The lesson's own claims
 * ═══════════════════════════════════════════════════════════════════════════ */

test('the eight stages appear in one section, in order', () => {
  const s = byId(L!, 's03-stages');
  ok(s, 's03-stages is missing: the stage map is required layout 1');
  strictEqual(s!.type, 'tapTable', '`table` is at zero across 64 shipped lessons; this band uses tapTable');
  const rows = (s as { rows?: Array<{ cells: string[] }> }).rows ?? [];
  ok(rows.length <= 6, `${rows.length} rows; the Pixel 6 cap is six`);
  // Every stage number 1..8 appears once, in ascending order, across the cells.
  const seen = rows.flatMap((r) => (r.cells[0].match(/\d/g) ?? []).map(Number));
  deepStrictEqual(seen, [1, 2, 3, 4, 5, 6, 7, 8], 'the eight stages are not present in order');
});

test('the partitive is recalled and never retaught, and a1.29 is named', () => {
  const s = byId(L!, 's12-some');
  ok(s, 's12-some is missing');
  const say = typeof s!.say === 'string' ? s!.say : (s!.say as { text?: string })?.text ?? '';
  ok(namesUnitLabel(say, 'a1.29'), 's12-some must name a1.29, whose lesson this recalls');
  // No section other than s12-some may make a partitive claim in its body copy.
  const CLAIM = /\b(partitive|du is|de la is|de l’ is|some of it)\b/i;
  for (const sec of sectionsOf(L!)) {
    const id = (sec as { id?: string }).id;
    if (id === 's12-some') continue;
    const body = JSON.stringify(sec);
    // `someOfIt` is a TERM chip and it is allowed to define itself.
    const stripped = body.replace(/"terms":\[[^\]]*\]/g, '');
    ok(!CLAIM.test(stripped) || id === 's14-errors', `${id} makes a partitive claim; a1.29 owns it and a second pass collides with a1-29-partitifs.test.ts`);
  }
});

test("a1.29's nine deckTranche ids are named and not edited", () => {
  const NINE = [
    'fr.a1.au-restaurant.098', 'fr.a1.au-restaurant.102', 'fr.a1.au-restaurant.112',
    'fr.a1.au-restaurant.145', 'fr.a1.au-restaurant.176', 'fr.a1.au-restaurant.182',
    'fr.a1.au-restaurant.184', 'fr.a1.au-restaurant.185', 'fr.a1.au-restaurant.189',
  ];
  const a129 = seed.lessons.find((l) => l.id === 'a1.29.l1');
  ok(a129, 'a1.29.l1 is missing from the seed');
  const released = new Set((a129!.deckTranche ?? []).flat());
  for (const id of NINE) {
    ok(released.has(id), `${id} is no longer released by a1.29; editing a shipped A1 lesson is out of scope here`);
    ok(ITEMS.has(id), `${id} vanished from the corpus`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  Boundaries: what belongs to somebody else
 * ═══════════════════════════════════════════════════════════════════════════ */

test('no authored row and no scored question is about money, reserving a2.26', () => {
  const MONEY = /\b(euros?|centimes?|monnaie|billet|pièce|ça fait combien|combien ça coûte|prix|rendu)\b/i;
  for (const it of AUTHORED) {
    ok(!MONEY.test(it.fr), `${it.id} « ${it.fr} » is about money, which is a2.26's`);
  }
  const quiz = sectionsOf(L!).find((s) => s.type === 'quiz')!;
  for (const q of quizQuestions(quiz)) {
    const blob = JSON.stringify(q);
    ok(!/\b(euros?|centimes?|monnaie|rendu)\b/i.test(blob), `a quiz question turns on a figure: ${q.q}`);
  }
});

test('the single spoken total sits in the scenario and nowhere else', () => {
  // The learner hears a total once, as the closing turn, and is never scored on
  // it. This test pins the one permitted location, so a second one goes red.
  const TOTAL = /quarante-six euros/;
  const hits = sectionsOf(L!).filter((s) => TOTAL.test(JSON.stringify(s))).map((s) => (s as { id?: string }).id);
  deepStrictEqual(hits, ['s22-service'], 'the spoken total moved or multiplied; a2.26 owns number reception');
  const sc = byId(L!, 's22-service') as { turns?: Array<{ ai: string }> };
  const last = (sc.turns ?? [])[(sc.turns ?? []).length - 1];
  ok(TOTAL.test(last.ai), 'the total must be the closing turn, not mid-scenario');
});

test('pourriez-vous appears nowhere, reserving a2.29 and the pending a2.13 decision', () => {
  ok(!/pourriez-vous/i.test(JSON.stringify(L)), 'pourriez-vous is unsettled until the a2.13 amendment is applied');
  for (const it of AUTHORED) ok(!/pourriez-vous/i.test(it.fr), `${it.id} uses pourriez-vous`);
});

test('y and en are never explained, and the guard is on the teaching move not the letters', () => {
  // `en` as a preposition is everywhere in this corpus (en terrasse, en cuisine,
  // en espèces) and an English "en" appears inside ordinary words. A naive
  // \ben\b guard fires on all of it, so this guards the TEACHING MOVE.
  const MUST_NOT_FIRE = [
    'En terrasse ou à l\'intérieur ?',
    'Je vais demander en cuisine.',
    'Par carte ou en espèces.',
    'They ate an enormous meal.',
  ];
  const TEACH = /\b(the pronoun (y|en)|(y|en) replaces|(en|y) means .*(of it|there)|pronoun en\b)/i;
  for (const s of MUST_NOT_FIRE) strictEqual(TEACH.test(s), false, `the guard fires on legitimate content: ${s}`);
  ok(TEACH.test('The pronoun en replaces de plus a noun.'), 'the guard does not fire on the thing it guards');
  // SCOPED TO LEARNER-FACING SURFACES. `teaches[]` is curriculum metadata that
  // describes what the lesson does NOT do ("y and en reserved entirely for
  // a2.25"), and an unscoped walk over the whole Lesson object fires on that
  // sentence. Scoping the absence claim to the surfaces a learner can actually
  // read is the difference between a guard and a nuisance.
  const learnerFacing = [L!.intro, JSON.stringify(L!.overview), JSON.stringify(L!.sections)].join(' ');
  ok(!TEACH.test(learnerFacing), 'this lesson explains y or en; a2.25 owns them and has already shipped');
  // And the chunk itself is present, unglossed.
  const chunk = seed.items.find((i) => i.id === 'fr.a2.au-restaurant.168');
  ok(chunk && /il n'y en a plus/.test(chunk.fr), 'the deviation line is missing');
});

test('no comparative appears in authored copy, reserving a2.08', () => {
  const COMP = /\b(plus \w+ que|moins \w+ que|aussi \w+ que|le plus \w+|meilleur que)\b/i;
  for (const it of AUTHORED) ok(!COMP.test(it.fr), `${it.id} uses a comparative, which is a2.08's at seq 32`);
  const menu = byId(L!, 's19-menu');
  ok(!COMP.test(JSON.stringify(menu)), 'the menu reading uses a comparative');
});

test('Quebec rows live outside au-restaurant and are never scored', () => {
  const qc = seed.items.filter((i) => i.theme === 'quebec-et-francophonie' && /^fr\.a2\.quebec-et-francophonie\.19[78]$/.test(i.id));
  strictEqual(qc.length, 2, 'the two Quebec colour rows are missing');
  for (const r of qc) ok(r.theme !== THEME, `${r.id} must not sit in ${THEME}`);
  const quiz = sectionsOf(L!).find((s) => s.type === 'quiz')!;
  const blob = JSON.stringify(quizQuestions(quiz));
  for (const w of ['souper', 'facture']) {
    ok(!new RegExp(`\\b${w}`, 'i').test(blob), `a scored question turns on the Quebec form "${w}"`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  Surfaces, and the traps this band carries
 * ═══════════════════════════════════════════════════════════════════════════ */

test('every listening line stands alone, for a2.35 to lift', () => {
  for (const s of sectionsOf(L!).filter((x) => x.type === 'listening')) {
    for (const line of (s as { lines?: Array<{ fr: string }> }).lines ?? []) {
      ok(!/\b(as we saw|earlier|above|the last mission|comme on a vu)\b/i.test(line.fr), `a listening line back-references its lesson: ${line.fr}`);
      ok(line.fr.trim().length > 0, 'an empty listening line');
    }
  }
});

test('every quiz question carries a why, listenChoose carries say, errorSpot carries prompt', () => {
  const quiz = sectionsOf(L!).find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quiz);
  strictEqual(qs.length, 30, 'six rounds of five');
  for (const q of qs) {
    ok(q.why && q.why.length > 10, `no why on: ${q.q}`);
    if (q.format === 'listenChoose') {
      ok((q as { say?: string }).say || (q as { audio?: { clip?: string } }).audio?.clip,
        `listenChoose « ${q.q} » would fall back to speaking opts[correct], which reads the answer aloud`);
    }
    if (q.format === 'errorSpot') {
      ok((q as { prompt?: string }).prompt, `errorSpot « ${q.q} » shows no text to correct`);
    }
  }
});

test('no scored item is decided by something the fold strips', () => {
  // fold() strips accents, case, punctuation, hyphens, both apostrophes and ALL
  // whitespace. An answer and its most plausible near-miss must not collide.
  const quiz = sectionsOf(L!).find((s) => s.type === 'quiz')!;
  for (const q of quizQuestions(quiz)) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const accept = ((q as { accept?: string[] }).accept ?? []).map(fold);
    ok(accept.length > 0, `${q.format} « ${q.q} » accepts nothing`);
    // Every accepted spelling must fold to the same string as the stated answer,
    // or the learner is being graded on something invisible.
    const answer = fold(String((q as { answer?: string }).answer ?? ''));
    ok(accept.includes(answer), `${q.format} « ${q.q} » does not accept its own stated answer once folded`);
  }
  // The two contrasts this lesson DOES test must survive folding.
  ok(fold('Je voudrais le poulet.') !== fold('Je veux le poulet.'), 'the register contrast folds away and cannot be tested');
  ok(fold("Je n'ai pas bien compris.") !== fold("Je n'ai pas compris."), 'bien folds away and rung 4 cannot be tested');
});

test('commonErrors swipes, and the trapDrill walks rule > cards > audio > gated drill', () => {
  const ce = byId(L!, 's14-errors');
  ok(ce, 's14-errors is missing');
  strictEqual((ce as { swipe?: boolean }).swipe, true, 'commonErrors without swipe draws a blank screen');
  ok(((ce as { errors?: unknown[] }).errors ?? []).length >= 4, 'four errors, each {wrong, right, why}');

  const td = byId(L!, 's13-trap') as { steps?: Array<{ kind: string; gate?: boolean }>; swipe?: boolean };
  ok(td, 's13-trap is missing');
  deepStrictEqual((td.steps ?? []).map((s) => s.kind), ['rule', 'cards', 'audio', 'drill'], 'the A2 trapDrill has one shape');
  strictEqual(td.swipe, true, 'the stepped trapDrill swipes');
  strictEqual((td.steps ?? []).find((s) => s.kind === 'drill')?.gate, true, 'the drill step must be gated');
});

test('every dictée item carries the dictation drill, and word mode still tests something', () => {
  const d = byId(L!, 's20-write') as { itemIds?: string[] };
  ok(d, 's20-write is missing');
  const ids = d.itemIds ?? [];
  strictEqual(ids.length, 8, 'eight lines, all of them his');
  for (const id of ids) {
    const it = ITEMS.get(id);
    ok(it, `the dictée names ${id}, which is not in the seed`);
    ok((it!.drills ?? []).includes('dictation'), `${id} is in the dictée and carries no dictation drill`);
    // Checked through the REAL function rather than by counting letters.
    const mode = dicteeMode(it!.fr);
    ok(mode === 'words' || mode === 'letters', `unexpected dictée mode ${mode}`);
  }
  // The waiter's lines are long, so most run in word mode. Word mode tests the
  // ORDER of a question the learner has only ever received.
  const words = ids.filter((id) => dicteeMode(ITEMS.get(id)!.fr) === 'words');
  ok(words.length >= 6, 'the dictée was expected to run mostly in word mode');
});

test('the respellings are correct, and the checker is not the authority', () => {
  // Phrased deliberately as "correct", never "the checker is quiet".
  // hasPlainNasalFor has four measured blind spots and a quiet result is
  // evidence rather than proof.
  const bad = AUTHORED.filter((i) => hasPlainNasalFor(i.fr, i.respell ?? ''));
  strictEqual(bad.length, 0, `respelling(s) closing a nasal with a plain n or m: ${bad.map((b) => `${b.id} ${b.respell}`).join(', ')}`);
  // Every row whose French carries a nasal vowel must show the superscript.
  const NASAL_ROWS = [
    ['fr.a2.au-restaurant.132', 'par-DOHⁿ'],
    ['fr.a2.au-restaurant.135', 'zhuh nay pah byehⁿ kohⁿ-PREE'],
    ['fr.a2.au-restaurant.162', 'ahⁿ-SAHⁿBL oo say-pa-ray-MAHⁿ'],
  ];
  for (const [id, want] of NASAL_ROWS) {
    strictEqual(ITEMS.get(id)?.respell, want, `${id} respelling drifted`);
    ok(want.includes('ⁿ'), `${id} must close its nasal with the superscript`);
  }
  // And the blind spot is REAL rather than asserted, so this test explains
  // itself to whoever reads it next. The comment in density.logic.ts says
  // aime/jaune/scène/pleine are exempted; four of the five are not, because
  // hasPlainNasal(respell) short-circuits before the French is ever consulted.
  strictEqual(hasPlainNasalFor('aime', 'EHM'), true, 'the aime exemption now works; this build report can be simplified');
  strictEqual(hasPlainNasalFor('dame', 'DAM'), false, 'dame was the one example the exemption did reach');
});

test('no U+203F in any respelling', () => {
  for (const it of AUTHORED) {
    ok(!/‿/.test(it.respell ?? ''), `${it.id} carries a U+203F tie, which draws as a low underscore on a Pixel 6`);
  }
});

test('house copy rules hold across the lesson and the rows', () => {
  const blob = JSON.stringify(L) + JSON.stringify(AUTHORED);
  ok(!/—/.test(blob), 'an em dash reached an authored string');
  // The substring, not the word: the band's \bhonest guard cannot see "dishonest".
  ok(!/honest/i.test(blob), '"honest" reached an authored string');
});

test('the jargon walk covers intro and overview, and the -s plural of every entry', () => {
  const JARGON = ['partitive', 'clitic', 'adjacency pair', 'second pair part', 'interrogative', 'copula', 'morpheme'];
  const terms = Object.keys((L!.terms ?? {}) as Record<string, unknown>);
  const defined = new Set(terms.map((t) => t.toLowerCase()));
  // Walk the whole lesson INCLUDING intro and overview, which a section-only
  // walk misses, and including a cardDeck card's `sub`.
  const blob = [L!.intro, JSON.stringify(L!.overview), JSON.stringify(L!.sections)].join(' ').toLowerCase();
  for (const j of JARGON) {
    for (const form of [j, `${j}s`]) {
      ok(!blob.includes(form) || defined.has(form.replace(/\s/g, '')), `the metalinguistic term "${form}" appears and is not defined in terms`);
    }
  }
});

test('the band voice floor: at least 40% of authored rows are in the server voice', () => {
  const server = AUTHORED.filter((i) => (i as { tags?: string[] }).tags?.includes('server')).length;
  const pct = server / AUTHORED.length;
  ok(pct >= 0.4, `${(pct * 100).toFixed(1)}% of authored rows are in the server's voice, and the band floor is 40%`);
});

test('the id block held: 58 authored rows, contiguous, inside .132-.189', () => {
  // AGAINST THE SOURCE. The seed is a cut and can only answer "how many
  // survived", never "how many were authored".
  strictEqual(SRC_ROWS.length, 60,
    `${SRC_ROWS.length} rows authored, expected 60`);
  // 58 in au-restaurant plus 2 in quebec-et-francophonie. The seed-based filter this
  // replaced counted the PRIMARY THEME BLOCK only, so it had never asserted
  // the 2 row(s) this build authored elsewhere. Converting to the source is
  // what surfaced them.
  strictEqual(SRC_ROWS.filter((r) => (r as { theme?: string }).theme === 'au-restaurant').length, 58,
    'the au-restaurant block moved');

  // THE ASSERTION a2.29 DID NOT HAVE. Doctrine §E: every authored row must be
  // reachable, or the publish cut drops it and takes this count with it.
  const reachable = new Set<string>([
    ...JSON.stringify(L).match(/fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}/g) ?? [],
  ]);
  const orphans = SRC_ROWS.filter((r) => !reachable.has(r.id)).map((r) => r.id);
  deepStrictEqual(orphans, [],
    'authored row(s) reachable from nothing. Name it in a section, release it in a deckTranche, '
    + 'or do not author it: the publish cut drops it and this block count goes with it.');
  const nums = AUTHORED.map((i) => Number(i.id.slice(-3))).sort((a, b) => a - b);
  strictEqual(nums[0], 132);
  strictEqual(nums[nums.length - 1], 189);
  nums.forEach((n, i) => { if (i) strictEqual(n, nums[i - 1] + 1, `a hole at .${n - 1}`); });
});

test('s16-offscript shipped, and it is hidden or it tests nothing', () => {
  // HELD on the first merge because hideLines had not shipped. It landed
  // 2026-08-15 (blocking step 3) and s16 dropped straight in between s15-break
  // and s17-repair, taking act 4 back to four missions as planned.
  const off = byId(L!, 's16-offscript');
  ok(off, 's16-offscript is missing: it shipped once hideLines landed');
  strictEqual((off as { hideLines?: boolean }).hideLines, true,
    's16-offscript without hideLines is a reading exercise: every one of its questions is answerable off a visible transcript');
  strictEqual(sectionsOf(L!).length, 26, '26 sections now that s16 has shipped');
  const act4 = (L!.acts ?? []).find((a) => a.id === 'act4');
  deepStrictEqual(act4?.sections, ['s15-break', 's16-offscript', 's17-repair', 's18-deploy'], 'act 4 changed shape');
});

test('two scene sections ship, which is device-proven and not a mistake', () => {
  const scenes = sectionsOf(L!).filter((s) => s.type === 'scene').map((s) => (s as { id?: string }).id);
  deepStrictEqual(scenes, ['s01-scene', 's15-break'], 'the repeated scene is deliberate and was device-checked before authoring');
});

test('groupDrill items use note, not sub: sub draws nothing', () => {
  // FOUND BY THE ADMIN TYPECHECK, not by any content test. The groupDrill item
  // type is { fr, ipa?, note?, itemId?, respell?, en?, silent?, pair? } and
  // GroupDrillView builds its second line from note/respell/en. `sub` is not in
  // the type and is read by nothing.
  //
  // a2.07 first shipped `sub` on 33 group items, so 33 second lines rendered
  // blank while validateLesson stayed green: it tolerates unknown keys. The
  // admin `tsc --noEmit` is the only thing that sees this class of defect.
  for (const sec of sectionsOf(L!)) {
    if (sec.type !== 'groupDrill') continue;
    for (const g of (sec as { groups?: Array<{ items?: Array<Record<string, unknown>> }> }).groups ?? []) {
      for (const it of g.items ?? []) {
        ok(!('sub' in it), `${(sec as { id?: string }).id}: a group item carries \`sub\`, which draws nothing. Use \`note\`.`);
      }
    }
  }
});

test('the lesson carries no field the shipped corpus does not', () => {
  // a2.07 invented four: canDo, track, teaches and a cardDeck itemIds. Each
  // validated, published and drew nothing. The real field for what a lesson
  // teaches is `grammarIntroduced` (62 of 66 lessons) with `grammarAssumed` (59).
  const others = seed.lessons.filter((l) => l.id !== LESSON_ID);
  const known = new Set(others.flatMap((l) => Object.keys(l)));
  const mine = Object.keys(L as unknown as Record<string, unknown>);
  const invented = mine.filter((k) => !known.has(k));
  deepStrictEqual(invented, [], `a2.07 carries field(s) no other lesson has: ${invented.join(', ')}`);
  ok(known.has('grammarIntroduced') && mine.includes('grammarIntroduced'),
    'grammarIntroduced is the house field for what a lesson teaches');
});
