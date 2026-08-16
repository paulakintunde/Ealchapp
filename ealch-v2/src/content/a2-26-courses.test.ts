// a2.26.l1 « Les courses & l'argent » — the guard. Trail seq 25, the second
// unit of the A2 situations band.
//
// These assertions are the ones that would have caught this build's own
// mistakes, plus the ones the collation asked for BY NAME rather than by
// intention. Collation §C3 rule 5 is the clearest example: "no Quebec form is a
// correct answer and none is a distractor" is a sentence in a report until it
// is a list asserted against every scored option, and a sentence in a report
// cannot fail.
//
// Everything is read from `seed.json` rather than from the authoring scripts,
// because the seed is what ships. A test that imports the corpus file proves
// the corpus file is self-consistent and proves nothing about the learner.
import { test } from 'node:test';
import { strictEqual, ok, deepStrictEqual } from 'node:assert';
import seed from './seed.json' with { type: 'json' };

type Item = { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; drills?: string[]; tags?: string[] };
type Section = Record<string, unknown> & { id: string; type: string };
type Lesson = Record<string, unknown> & { id: string; sections: Section[]; acts?: Array<{ id: string; sections: string[] }>; itemIds?: string[]; deckTranche?: string[][] };

const S = seed as unknown as { version: number; items: Item[]; lessons: Lesson[]; units: Array<{ id: string; themes?: string[]; lessonIds?: string[]; canDo?: string }> };

const LESSON = S.lessons.find((l) => l.id === 'a2.26.l1')!;
const UNIT = S.units.find((u) => u.id === 'a2.26')!;
const ITEMS = new Map(S.items.map((i) => [i.id, i]));
const sec = (id: string) => LESSON.sections.find((s) => s.id === id);

/** THE REAL FOLD, copied from `answer.logic.ts:32`. It strips accents, case,
 *  punctuation, hyphens, the middle dot, BOTH apostrophes and ALL whitespace. */
const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[/[\]()«».,!?;:]/g, '').replace(/[-·’']/g, '').replace(/\s+/g, '').trim();

/** Every scored option anywhere in the lesson: quiz opts, quiz accept entries,
 *  speak targets, trapDrill options, groupDrill check options and listening
 *  question options. */
function scoredOptions(): Array<{ where: string; text: string }> {
  const out: Array<{ where: string; text: string }> = [];
  for (const s of LESSON.sections) {
    for (const r of ((s as { rounds?: Array<{ questions?: Array<Record<string, unknown>> }> }).rounds ?? [])) {
      for (const q of (r.questions ?? [])) {
        for (const o of ((q.opts as string[]) ?? [])) out.push({ where: `${s.id} quiz`, text: o });
        for (const a of ((q.accept as string[]) ?? [])) out.push({ where: `${s.id} accept`, text: a });
        if (q.target) out.push({ where: `${s.id} speak`, text: q.target as string });
      }
    }
    for (const d of ((s as { drill?: Array<{ opts?: string[] }> }).drill ?? [])) {
      for (const o of (d.opts ?? [])) out.push({ where: `${s.id} drill`, text: o });
    }
    for (const g of ((s as { groups?: Array<{ check?: { opts?: string[] } }> }).groups ?? [])) {
      for (const o of (g.check?.opts ?? [])) out.push({ where: `${s.id} check`, text: o });
    }
    for (const q of ((s as { questions?: Array<{ opts?: string[] }> }).questions ?? [])) {
      for (const o of (q.opts ?? [])) out.push({ where: `${s.id} listening`, text: o });
    }
  }
  return out;
}

function quizQs(): Array<Record<string, unknown>> {
  const q = sec('s24-quiz') as { rounds?: Array<{ questions?: Array<Record<string, unknown>> }> };
  return (q.rounds ?? []).flatMap((r) => r.questions ?? []);
}

/* ── The lesson exists and is wired ──────────────────────────────────────── */

test('a2.26.l1 is in the seed, and the unit row points at it', () => {
  ok(LESSON, 'a2.26.l1 is missing from seed.json');
  strictEqual(LESSON.unitId, 'a2.26');
  strictEqual(LESSON.seq, 25);
  strictEqual(LESSON.level, 'a2');
  deepStrictEqual(UNIT.lessonIds, ['a2.26.l1'], 'the unit row must name exactly this lesson');
  // One lesson per unit, band-wide (collation §C6). `den.tsx:169` opens
  // lessonIds[0] and nothing else, so a second lesson would be unreachable.
  strictEqual((UNIT.lessonIds ?? []).length, 1, 'one lesson per unit, band-wide');
});

test('the unit keeps both themes, and the spine was not re-run', () => {
  // Band blocking step 2 landed before this build. `argent-quotidien` is here
  // because collation §5's split puts money-itself rows there and ledger §2
  // settled that the "if it is empty, use courses" fallback does not fire:
  // 300 published rows.
  deepStrictEqual(UNIT.themes, ['courses', 'argent-quotidien']);
  strictEqual(UNIT.canDo, 'Can shop, ask a price, count change and complete a purchase');
});

test('25 sections in six acts, and act 3 outweighs act 2', () => {
  strictEqual(LESSON.sections.length, 25);
  const acts = LESSON.acts ?? [];
  strictEqual(acts.length, 6);
  // Doctrine §B.5: the Owns must outweigh the paradigm. There is no paradigm at
  // a till, so the script takes act 2's slot and act 3 is price and change
  // reception on its own.
  strictEqual(acts[1].sections.length, 4, 'act 2, the script');
  strictEqual(acts[2].sections.length, 7, 'act 3, the Owns');
  ok(acts[2].sections.length > acts[1].sections.length, 'the Owns must be the heavier act');
  // Every section belongs to exactly one act, and every act names real sections.
  const inActs = acts.flatMap((a) => a.sections);
  strictEqual(new Set(inActs).size, inActs.length, 'a section is named by two acts');
  deepStrictEqual([...inActs].sort(), LESSON.sections.map((s) => s.id).sort());
  strictEqual((LESSON.deckTranche ?? []).length, acts.length, 'one deckTranche array per act');
});

test('THE PRACTICE SECTION EXISTS, which the prompt\'s own mission table omitted', () => {
  // `lesson-contract.test.ts:505` mirrors the publish gate and fails any
  // non-assessment lesson with no practice section, an empty practice.itemIds
  // or an empty Lesson.itemIds. The prompt's 24-mission table has no practice
  // row at all, which is why this lesson ships 25 sections rather than 24.
  const p = LESSON.sections.filter((s) => s.type === 'practice');
  strictEqual(p.length, 1, 'exactly one practice section');
  strictEqual(p[0].id, 's20-say');
  // `skill` is not passed to PracticeVFView and practice renders the SPEAKING
  // drill regardless, so the authored value must match what actually renders.
  strictEqual((p[0] as { skill?: string }).skill, 'speak');
  ok(((p[0] as { itemIds?: string[] }).itemIds ?? []).length > 0);
  ok((LESSON.itemIds ?? []).length > 0, 'Lesson.itemIds is empty, so no SRS card is released');
});

test('exactly one quiz, because a second is silently never rendered', () => {
  strictEqual(LESSON.sections.filter((s) => s.type === 'quiz').length, 1);
});

/* ── THE MERGE-SCRIPT ASSERTION the collation asked for (§1.2) ───────────── */

test('every itemId the lesson names resolves to an item in the same seed file', () => {
  // The blank-card risk is real and its cause is the merge script, not
  // SEED_CUT. `courses` holds 353 published rows in Postgres and held 5 in the
  // seed before this build, so a lesson that names an imported id without
  // carrying it renders an empty card on device while its tests pass.
  const named = new Set<string>([
    ...(LESSON.itemIds ?? []),
    ...(LESSON.deckTranche ?? []).flat(),
    ...LESSON.sections.flatMap((s) => ((s as { itemIds?: string[] }).itemIds ?? [])),
  ]);
  const missing = [...named].filter((id) => !ITEMS.has(id));
  deepStrictEqual(missing, [], `${missing.length} named id(s) are not in seed.json`);
  ok(named.size >= 100, `only ${named.size} ids named; the build carries 100`);
});

test('every deckTranche id carries the flashcard drill, or it releases nothing', () => {
  // Three imported rows were DROPPED from the tranche arrays for failing this,
  // measured rather than assumed: fr.a2.courses.092, fr.a2.courses.108 and
  // fr.a1.argent-quotidien.017 all carry `dictation` and nothing else. They are
  // shipped A1/A2 rows and this build does not widen another lesson's drills.
  for (const id of new Set((LESSON.deckTranche ?? []).flat())) {
    ok((ITEMS.get(id)!.drills ?? []).includes('flashcard'), `${id} is released by a tranche and carries no flashcard drill`);
  }
  for (const dead of ['fr.a2.courses.092', 'fr.a2.courses.108', 'fr.a1.argent-quotidien.017']) {
    ok(!(LESSON.deckTranche ?? []).flat().includes(dead), `${dead} carries only dictation and must not be released as a card`);
  }
});

test('practice items carry voiceflash and dictée items carry dictation', () => {
  const p = LESSON.sections.find((s) => s.type === 'practice') as { itemIds: string[] };
  for (const id of p.itemIds) ok((ITEMS.get(id)!.drills ?? []).includes('voiceflash'), `${id} is spoken by practice and carries no voiceflash`);
  const d = LESSON.sections.find((s) => s.type === 'dictation') as { itemIds: string[] };
  for (const id of d.itemIds) ok((ITEMS.get(id)!.drills ?? []).includes('dictation'), `${id} is in the dictée and carries no dictation drill`);
});

/* ── ZERO REPAIR ROWS: a2.07 owns the move (collation §1.6) ──────────────── */

const REPAIR_IDS = [
  'fr.a2.au-restaurant.132', 'fr.a2.au-restaurant.133', 'fr.a2.au-restaurant.134',
  'fr.a2.au-restaurant.135', 'fr.a2.au-restaurant.136', 'fr.a2.au-restaurant.137',
];

test('s11-repair quotes a2.07 and authors nothing', () => {
  // THE CITATION IS PROVED BY THE CARD TEXT, NOT BY `itemIds`. `cardDeck` is
  // one of the section types that never reads `itemIds` — only `practice` and
  // `dictation` do — so an itemIds array here would validate, publish and draw
  // nothing, which is a2.07's §3.5 dead-field list in a new place. a2.07 hit
  // this on its own `s17-repair`, stripped the array and re-applied, and
  // `a2-07-restaurant.test.ts:106` now asserts the ABSENCE. This unit follows.
  //
  // Reachability is unaffected: all six ids are released by act 4's
  // deckTranche, which is what actually produces a card.
  const r = sec('s11-repair') as { itemIds?: string[]; cards: Array<{ fr: string }> };
  strictEqual(r.itemIds, undefined, 's11-repair carries itemIds, which draws nothing on a cardDeck');
  ok((LESSON.deckTranche ?? []).flat().filter((id) => REPAIR_IDS.includes(id)).length === 6,
    'all six repair ids must still be released by a deckTranche, or the citation reaches no SRS card');
  for (const id of REPAIR_IDS) {
    const it = ITEMS.get(id);
    ok(it, `${id} is not in the seed, so the citation points at nothing`);
    strictEqual(it!.theme, 'au-restaurant', 'the frozen block lives in a2.07\'s theme and stays there');
  }
  // The first three rungs are quoted verbatim, in a2.07's face-cost order.
  for (let i = 0; i < 3; i++) {
    strictEqual(r.cards[i].fr, ITEMS.get(REPAIR_IDS[i])!.fr, `card ${i + 1} does not quote rung ${i + 1}`);
  }
  // a2.07 is named by UNIT ID in the copy, per doctrine §B.7.
  ok(/a2\.07/.test(JSON.stringify(r)), 's11-repair must name a2.07 by unit id');
});

test('no cardDeck or groupDrill carries itemIds, which draws nothing', () => {
  // The general form of the assertion above, so the next edit cannot put one
  // back on a different section. `practice` and `dictation` are the only two
  // section types in this lesson whose itemIds a renderer reads.
  const carriers = LESSON.sections.filter((s) => (s as { itemIds?: string[] }).itemIds);
  deepStrictEqual(carriers.map((s) => s.id).sort(), ['s18-dictee', 's20-say']);
  deepStrictEqual(carriers.map((s) => s.type).sort(), ['dictation', 'practice']);
});

test('a groupDrill item puts its second line where the renderer reads it', () => {
  // `sub` on a groupDrill item is not a rendered field. `groupdrill-second-line.test.ts`
  // documents the defect: 583 of 730 lg cards across 28 lessons showed the
  // French and nothing else, because the renderer draws `note` (or joins
  // `respell`/`en`) and everything else was dropped in silence. Every item
  // here carries `note` rather than `sub`, which is where a2.07 also landed.
  for (const s of LESSON.sections.filter((x) => x.type === 'groupDrill')) {
    for (const g of ((s as { groups?: Array<{ items?: Array<Record<string, unknown>> }> }).groups ?? [])) {
      for (const it of (g.items ?? [])) {
        ok(!('sub' in it), `${s.id} has a groupDrill item carrying sub, which draws nothing`);
        ok(it.note || it.en || it.respell, `${s.id} has a groupDrill item with no second line at all`);
      }
    }
  }
});

test('NO courses or argent-quotidien row carries a repair fr, by fold', () => {
  // The rule the flashcard hub enforces is intra-theme, but the reason for this
  // one is collation §1.6: eight independent authorings of the same six strings
  // would put eight rows with the same fr into overlapping themes. Folded, so a
  // later author cannot slip one in under different punctuation or casing.
  const repairFolds = new Set(REPAIR_IDS.map((id) => fold(ITEMS.get(id)!.fr)));
  for (const it of S.items) {
    if (it.theme !== 'courses' && it.theme !== 'argent-quotidien') continue;
    ok(!repairFolds.has(fold(it.fr)), `${it.id} « ${it.fr} » duplicates one of a2.07's six frozen repair rows`);
  }
});

/* ── THE BAND'S VOICE FLOOR (collation §1.5) ─────────────────────────────── */

test('at least 40% of the authored rows are in the vendor\'s voice', () => {
  const mine = S.items.filter((i) => (i.tags ?? []).includes('situation')
    && (i.theme === 'courses' || i.theme === 'argent-quotidien')
    && /^fr\.a2\.(courses\.(1[6-9][0-9]|2[0-3][0-9])|argent-quotidien\.(0[7-9][0-9]|100))$/.test(i.id));
  ok(mine.length >= 50, `expected the authored block, found ${mine.length} rows`);
  const vendor = mine.filter((i) => (i.tags ?? []).includes('vendor')).length;
  const pct = vendor / mine.length;
  ok(pct >= 0.4, `only ${(pct * 100).toFixed(1)}% of ${mine.length} authored rows are in the vendor's voice`);
});

test('ça fait combien is authored exactly once, in courses', () => {
  // 0 rows corpus-wide before this build, confirmed against Postgres. The
  // single most frequent utterance in a French shop.
  const hits = S.items.filter((i) => fold(i.fr) === fold('Ça fait combien ?'));
  strictEqual(hits.length, 1, 'exactly one row, or the flashcard hub serves one card twice');
  strictEqual(hits[0].theme, 'courses');
  strictEqual(hits[0].kind, 'phrase', 'a formulaic sequence is stored whole, never decomposed');
});

/* ── THE QUEBEC EXCEPTION (collation §C3, which excepts a2.26 by name) ───── */

const QUEBEC_FORMS = ['magasiner', 'dépanneur', 'dollars', 'piastre', 'sou noir'];

test('NO Quebec form is a correct answer, and none is a distractor either', () => {
  // C3 rule 3 forbids a Quebec form displacing the France form in a drill. This
  // extends it one step, and it is the part most likely to be got wrong: a
  // Quebec form is not WRONG, it is ELSEWHERE. An option that is correct in
  // Montreal and marked red is a defect a TEF Canada candidate will notice and
  // be right about.
  for (const { where, text } of scoredOptions()) {
    for (const qf of QUEBEC_FORMS) {
      const re = new RegExp(`(?<![\\p{L}\\p{N}-])${qf}(?![\\p{L}\\p{N}-])`, 'iu');
      ok(!re.test(text), `${where} carries the Quebec form « ${qf} » in a scored option: « ${text} »`);
    }
  }
});

test('Quebec appears in exactly two places, and both are unscored', () => {
  // §D rule 3: one cardDeck mission, plus two recognition rows inside
  // s13-paying's card set. That is the whole regional footprint.
  const withQc = LESSON.sections.filter((s) => QUEBEC_FORMS.some((qf) =>
    new RegExp(`(?<![\\p{L}\\p{N}-])${qf}(?![\\p{L}\\p{N}-])`, 'iu').test(JSON.stringify(s))));
  deepStrictEqual(withQc.map((s) => s.id).sort(), ['s13-paying', 's15-quebec']);
  for (const s of withQc) strictEqual(s.type, 'cardDeck', 'a cardDeck is unscored; a quiz or a drill is not');
});

test('s15-quebec sits in act 4, away from every euro figure being tested', () => {
  // Not act 3, and deliberately: no dollar figure is ever adjacent to the euro
  // figures the learner is being tested on.
  const acts = LESSON.acts ?? [];
  ok(acts[3].sections.includes('s15-quebec'), 's15-quebec must be in act 4');
  ok(!acts[2].sections.includes('s15-quebec'), 's15-quebec must not sit beside the reception missions');
});

test('REQUIRED LAYOUT: the label and the till are in the SAME card body', () => {
  // Separating them turns the Quebec exception back into a vocabulary note,
  // which is the thing C3 excepted this unit FROM. Both currencies, one screen.
  const q = sec('s15-quebec') as { cards: Array<{ body: string }> };
  strictEqual(q.cards.length, 3);
  const b = q.cards[0].body;
  ok(/euros/.test(b), 'card 1 must show the France side');
  ok(/dollars/.test(b), 'card 1 must show the Quebec side');
  ok(b.indexOf('euros') < b.indexOf('dollars'), 'France first, then Quebec');
});

test('NO ARITHMETIC anywhere: no tax rate, and nothing asks for a sum', () => {
  // C3's own constraint and the pedagogy: the Quebec teaching is an
  // EXPECTATION, not an operation. The till's number is the only number.
  const all = JSON.stringify(LESSON);
  for (const shape of [/\bTPS\b/, /\bTVQ\b/, /\d+\s*(?:%|pour cent)\s*de\s*taxe/i, /plus\s+(?:la\s+)?taxe/i]) {
    ok(!shape.test(all), `a tax rate or a plus-tax sum reached an authored string: ${shape}`);
  }
});

test('every price on a scored surface is in euros, never dollars', () => {
  // §D rules 1 and 2: every scored surface is France, and the currency word is
  // the region flag and is always audible.
  for (const { where, text } of scoredOptions()) {
    ok(!/\bdollars?\b/i.test(text), `${where} prices a scored option in dollars: « ${text} »`);
  }
  for (const q of quizQs()) {
    const say = (q.say as string) ?? '';
    ok(!/\bdollars?\b/i.test(say), `a quiz listenChoose speaks dollars: « ${say} »`);
  }
});

/* ── THE ANSWER FOLD (03-ANSWER-FOLD-FACT.md, and the band rule) ─────────── */

test('BAND RULE: every typeIn and errorSpot actually discriminates', () => {
  // Fold the expected answer and the most plausible wrong answer. If they fold
  // to the same string the item tests nothing and must be an mcq. This is the
  // sharpest case in the band, because the subject is numbers: 97,30 folds to
  // 9730 and so does 97 30.
  let checked = 0;
  for (const q of quizQs()) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    checked++;
    const answer = q.answer as string;
    ok(answer, `${q.format} « ${q.q} » has no answer`);
    const accept = (q.accept as string[]) ?? [];
    ok(accept.some((a) => fold(a) === fold(answer)), `${q.format} « ${q.q} » would mark its own stated answer wrong`);
    if (q.format === 'errorSpot') {
      const prompt = q.prompt as string;
      ok(prompt, `errorSpot « ${q.q} » has no prompt, so the learner fixes a phrase that never appears`);
      ok(fold(prompt) !== fold(answer), `errorSpot « ${q.q} » folds its prompt onto its answer, so it tests nothing`);
    }
  }
  ok(checked >= 5, `only ${checked} free-text items found; the build authored 5`);
});

test('no scored item turns on a decimal comma, an accent, a hyphen or a capital', () => {
  // fold() strips all four. a1.28 §17 teaches the decimal comma and no scored
  // surface in this app can grade it, which is why round 1 is listenChoose with
  // rendered digit-string options: those are graded on an option index.
  for (const q of quizQs()) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const accept = (q.accept as string[]) ?? [];
    const folds = new Set(accept.map(fold));
    strictEqual(folds.size >= 1, true);
    // A free-text answer must never be a bare figure: 97,30 and 9730 fold alike.
    ok(!/^[\d\s,.]+$/.test(q.answer as string), `${q.format} « ${q.q} » expects a bare figure, which folds to digits and tests nothing`);
  }
});

test('every price on a scored surface is SPELLED IN WORDS', () => {
  // Then « quatre-vingt-dix-sept euros trente » and « quatre vingt dix sept
  // euros trente » fold identical, which is correct behaviour rather than a
  // defect: both are the right answer. Digit strings are legal only as mcq
  // OPTIONS, which are graded on an index and never folded.
  for (const q of quizQs()) {
    const say = (q.say as string) ?? '';
    ok(!/\d/.test(say), `a spoken quiz prompt carries a digit: « ${say} »`);
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      for (const a of ((q.accept as string[]) ?? [])) {
        ok(!/\d[\d,. ]*€?/.test(a) || !/\d/.test(a), `a free-text accept entry carries a digit: « ${a} »`);
      }
    }
  }
});

/* ── s07-heard, the funded engineering item's mission ────────────────────── */

test('s07-heard is masked, and no question reprints its own line', () => {
  const h = sec('s07-heard') as { hideLines?: boolean; questionsInModal?: boolean; lines: Array<{ fr: string }>; questions: Array<{ q: string; why?: string }> };
  strictEqual(h.hideLines, true, 'without hideLines this is a reading exercise and the en gloss hands over the figure in English');
  strictEqual(h.questionsInModal, true);
  strictEqual(h.lines.length, 4);
  strictEqual(h.questions.length, 4);
  // a2.07 found on device that the question rail renders UNDER the masked
  // cards, so a question that quotes its line hands the words straight back.
  for (const q of h.questions) {
    for (const l of h.lines) {
      ok(!fold(q.q).includes(fold(l.fr)), `s07-heard « ${q.q} » reprints its line, so hideLines buys nothing`);
    }
    ok(q.why, 'every question carries a why');
  }
});

test('the listening options are digit strings, which is the only unfoldable surface', () => {
  const h = sec('s07-heard') as { questions: Array<{ opts: string[] }> };
  const numeric = h.questions.filter((q) => q.opts.every((o) => /^[\d, ]+$/.test(o)));
  ok(numeric.length >= 3, `${numeric.length} of 4 questions use digit-string options`);
});

/* ── The trap, and the shapes that draw nothing without a flag ───────────── */

test('the trapDrill walks the stepped shape with a gated drill', () => {
  // lesson-contract.test.ts has enforced rule > cards > audio > drill since
  // 2026-08-13 and it caught both of a2.17's. The A2 band has one trap shape
  // and the stacked one hides the gate, the audio and the sub-mission number.
  const t = sec('s10-which') as { swipe?: boolean; steps: Array<{ kind: string; gate?: boolean }>; rule?: unknown; cards?: unknown[]; drill?: unknown[] };
  strictEqual(t.swipe, true);
  deepStrictEqual(t.steps.map((s) => s.kind), ['rule', 'cards', 'audio', 'drill']);
  strictEqual(t.steps.at(-1)!.gate, true);
  ok(t.rule && (t.cards ?? []).length && (t.drill ?? []).length);
});

test('commonErrors carries swipe, or it draws a blank screen', () => {
  for (const s of LESSON.sections.filter((x) => x.type === 'commonErrors')) {
    strictEqual((s as { swipe?: boolean }).swipe, true, `${s.id} renders its own deck only when swipe is present`);
  }
});

/* ── Boundaries: what this unit must not take from a neighbour ───────────── */

test('the politeness ladder is a2.29\'s, and only the repair ladder is named', () => {
  // Collation §C5: the register ladder is authored once, for all eight units.
  // One card contrasting je veux with je voudrais is permitted and is s05's.
  const body = JSON.stringify(LESSON).replace(/repair ladder/gi, '');
  ok(!/\bladder\b/i.test(body), 'the word "ladder" appears outside "repair ladder"');
  ok(!/pourriez-vous/i.test(JSON.stringify(LESSON)), 'pourriez-vous is reserved for a2.29');
  ok(!/je prendrais/i.test(JSON.stringify(LESSON)), 'the third rung of the ordering gradient is a2.07\'s and a2.29\'s');
});

test('the price shape and the containers are QUOTED, not re-taught', () => {
  // Doctrine §B.7: name the earlier instance by unit id rather than re-owning
  // it. a1.28 §15 owns the price shape, a1.28 §17 owns the decimal comma and
  // a1.29 §11 owns the containers.
  const body = JSON.stringify(LESSON);
  ok(/a1\.28/.test(body), 'a1.28 must be named by unit id');
  ok(/a1\.29/.test(body), 'a1.29 must be named by unit id');
  ok(/a1\.27/.test(body), 'a1.27 must be named by unit id');
  ok(/a2\.07/.test(body), 'a2.07 must be named by unit id');
  ok(/a2\.13/.test(body), 'a2.13 must be named by unit id for the vouloir contrast');
  // The reframe must not re-own a neighbour's.
  const rf = LESSON.reframe as string;
  for (const taken of ['A price is one run', 'Currency, then the small number', 'Learn the shape, not the sum']) {
    ok(fold(rf) !== fold(taken), `the reframe re-owns a neighbour's: « ${taken} »`);
  }
  strictEqual(rf, 'The number comes once. Asking again is part of the script.');
});

test('nothing is authored into a neighbour\'s theme', () => {
  // `nombres`, `expressions-de-quantite`, `marche` and `vetements` are a1.27,
  // a1.28, a1.29 and a1.23 populations whose tests assert statistics over them.
  // A CARRY moves a population even when an authoring does not, so the merge
  // does add marche rows to the seed; what it must never do is MINT one.
  const authored = S.items.filter((i) => (i.tags ?? []).includes('situation') && (i.tags ?? []).includes('courses'));
  for (const i of authored) {
    ok(['courses', 'argent-quotidien', 'quebec-et-francophonie'].includes(i.theme),
      `${i.id} was authored into ${i.theme}, which this unit does not own`);
  }
  ok(!S.items.some((i) => i.theme === 'vetements' && (LESSON.itemIds ?? []).includes(i.id)),
    'this lesson names no vetements id: the clothing shop is one setting, not a teaching block');
});

/* ── The corpus rows themselves ──────────────────────────────────────────── */

test('no U+203F tie in any authored respelling', () => {
  // It draws as a low underscore on a Pixel 6 and has already hit shipped
  // sons.10 content. Band-wide, ledger §5.
  for (const i of S.items.filter((x) => (x.tags ?? []).includes('situation') && (x.tags ?? []).includes('courses'))) {
    ok(!/‿/.test(i.respell ?? ''), `${i.id} carries a U+203F tie`);
  }
});

test('a dictée item is spelled in words and carries no digit or currency glyph', () => {
  // `OneDictationWord` builds the tile bank from the item's fr, so « 97,30 € »
  // produces a bank of digits, a comma and a glyph the learner cannot type.
  const d = sec('s18-dictee') as { itemIds: string[] };
  strictEqual(d.itemIds.length, 6);
  for (const id of d.itemIds) {
    const fr = ITEMS.get(id)!.fr;
    ok(!/[0-9]/.test(fr), `${id} « ${fr} » carries a digit`);
    ok(!/[€$]/.test(fr), `${id} « ${fr} » carries a currency glyph`);
  }
});

test('the scenario is France, vous, and eleven turns with alts on every one', () => {
  // §D rule 6, and collation §7.2: this is the most liftable artefact the unit
  // produces and a2.35 is asked to take eight mutually consistent scripts.
  const s = sec('s21-scenario') as { turns: Array<{ ai: string; user: string; userEn?: string; alts?: unknown[] }> };
  strictEqual(s.turns.length, 11);
  for (const t of s.turns) {
    ok(t.userEn, `turn « ${t.ai} » has no userEn`);
    ok((t.alts ?? []).length >= 2, `turn « ${t.ai} » carries fewer than two alts`);
    ok(!/\bdollars?\b|\bQuébec\b|magasiner|dépanneur/i.test(JSON.stringify(t)), 'the scenario is France throughout');
  }
  // Register: the cashier uses vous, matching a2.07's waiter (collation §7.3).
  ok(s.turns.some((t) => /\bvous\b/.test(t.ai)), 'the cashier must address the learner as vous');
  ok(!s.turns.some((t) => /\btu\b|\bton\b|\bta\b/.test(t.ai)), 'no tutoiement from the cashier');
  // One turn where she gives a total the learner repeats back, and one where
  // the only correct move is a repair.
  ok(s.turns.some((t) => /euros/.test(t.ai) && /euros/.test(t.user)), 'no turn repeats a total back');
  const repairFrs = REPAIR_IDS.map((id) => fold(ITEMS.get(id)!.fr));
  ok(s.turns.some((t) => repairFrs.includes(fold(t.user))), 'no turn where the only correct move is a repair');
  // No Scenario.exam, band-wide (collation §1.12): zero ExamTask rows exist.
  ok(!('exam' in s), 'Scenario.exam is not authored anywhere in this band');
});

test('no ExamTask is referenced and no exam field is authored', () => {
  ok(!/"exam"\s*:/.test(JSON.stringify(LESSON)), 'zero ExamTask rows exist, so an exam reference would dangle');
});

/* ── House rules ─────────────────────────────────────────────────────────── */

test('no em dash and no "honest" in any authored string', () => {
  const body = JSON.stringify(LESSON);
  ok(!/—/.test(body), 'an em dash reached an authored string');
  // The band's guard is written as \bhonest, which cannot see "dishonest".
  // Matched as a substring here for that reason (a2.06's finding).
  ok(!/honest/i.test(body), '"honest" reached an authored string');
});

test('every quiz question carries a why, and every listenChoose carries say', () => {
  const qs = quizQs();
  strictEqual(qs.length, 32, 'four rounds of eight');
  for (const q of qs) {
    ok(q.why, `quiz question « ${q.q} » has no why`);
    if (q.format === 'listenChoose') {
      ok(q.say, `listenChoose « ${q.q} » has no say, so ListenChooseCard would speak opts[correct] aloud`);
    }
  }
});

test('the quiz correct answers are spread, which validateDensity enforces', () => {
  // Doctrine §C says never hand-randomise the quiz, because LessonRich permutes
  // options at runtime. validateDensity's `quiz-spread` rule enforces a spread
  // anyway, at 40%, and it is a gate. Both are true and the gate wins: this
  // build shipped with every correct answer at position 0 and was stopped.
  const positioned = quizQs().filter((q) => typeof q.correct === 'number');
  const atZero = positioned.filter((q) => q.correct === 0).length;
  ok(atZero / positioned.length <= 0.4, `${atZero}/${positioned.length} correct answers sit at position 0`);
});

test('the reframe is carried across at least three sections', () => {
  const rf = LESSON.reframe as string;
  const hits = LESSON.sections.filter((s) => JSON.stringify(s).includes(rf));
  ok(hits.length >= 3, `the reframe appears verbatim in ${hits.length} section(s), and the density validator needs three`);
});

/* ── Two failure modes this build actually hit, pinned so they cannot return ─ */

test('every reading glossary entry underlines a word the passage really prints', () => {
  // FOUND BY `gloss.logic.test.ts`, which walks the whole seed. The first draft
  // wrote the entries as headwords with articles (« le sous-total », « le rendu »)
  // while the receipt prints SOUS-TOTAL and RENDU with no article, and it
  // glossed « le prix unitaire », which the passage never prints at all. Four
  // entries underlined nothing. Matching is case-insensitive; it is not
  // article-insensitive.
  const r = sec('s19-receipt') as { text: string; glossary: Array<{ word: string }> };
  const passage = r.text.toLowerCase();
  for (const g of r.glossary) {
    ok(passage.includes(g.word.toLowerCase()), `the glossary glosses « ${g.word} », which the receipt never prints`);
    ok(!/^(le |la |les |un |une |l')/i.test(g.word), `« ${g.word} » carries an article the passage does not`);
  }
});

test('nothing this lesson carries moves a1.03\'s ending population', () => {
  // FOUND BY `a1-03-genre.test.ts` and `a1-22-pays.test.ts`. The first merge
  // carried three imported nouns into the seed and a1.03's printed counts
  // drifted: -et 29 -> 30, -tion 36 -> 38. Both endings stayed at 100%
  // accuracy, so the rule was fine and only the figures moved.
  //
  // NONE OF THE 55 AUTHORED ROWS DID THIS. Measured: removing every authored
  // row leaves a1.03 unchanged. It was three IMPORTS, which is a1.23's finding
  // exactly — a carry moves a population even when an authoring does not, and
  // an authored-only guard is blind to it. So this guard walks what the lesson
  // NAMES, not what it authored.
  const named = new Set<string>([
    ...(LESSON.itemIds ?? []),
    ...(LESSON.deckTranche ?? []).flat(),
    ...LESSON.sections.flatMap((s) => ((s as { itemIds?: string[] }).itemIds ?? [])),
  ]);
  for (const id of ['fr.a1.argent-quotidien.054', 'fr.a2.courses.016', 'fr.a2.courses.059']) {
    ok(!named.has(id), `${id} is named again; it moves a1.03's ending counts and was pruned for that reason`);
    ok(!ITEMS.has(id), `${id} is back in the seed; the merge script's PRUNE list did not run`);
  }
});
