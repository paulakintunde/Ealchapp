// a2.28.l1 « Chez le médecin » — the guard. Trail seq 27, the fourth unit of
// the A2 situations band.
//
// These are the assertions that would have caught this build's own mistakes,
// plus the ones the prompt and the collation asked for BY NAME. A sentence in a
// report cannot fail; a list can.
//
// Everything is read from `seed.json` rather than from the authoring scripts,
// because the seed is what ships.
import { test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import seed from './seed.json' with { type: 'json' };
import { hasPlainNasalFor } from './density.logic.ts';

type Item = { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; drills?: string[]; tags?: string[]; skill?: string; register?: string };
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

const LESSON = S.lessons.find((l) => l.id === 'a2.28.l1')!;
const UNIT = S.units.find((u) => u.id === 'a2.28')!;
const ITEMS = new Map(S.items.map((i) => [i.id, i]));
const sec = (id: string) => LESSON.sections.find((s) => s.id === id);
const ids = () => LESSON.sections.map((s) => s.id);

const THEME = 'symptomes';
const BODY = 'corps';

/** Scoped to the BLOCK, never to the theme prefix: `symptomes` holds 364
 *  published rows across three levels and this build authored 30 of them. */
const MINE = S.items.filter((i) => {
  const m = /^fr\.a2\.symptomes\.(\d+)$/.exec(i.id);
  return !!m && Number(m[1]) >= 194 && Number(m[1]) <= 227;
});
const MY_BODY = S.items.filter((i) => {
  const m = /^fr\.a2\.corps\.(\d+)$/.exec(i.id);
  return !!m && Number(m[1]) >= 21 && Number(m[1]) <= 24;
});
const ALL_MINE = [...MINE, ...MY_BODY];

const REPAIR_IDS = [
  'fr.a2.au-restaurant.132', 'fr.a2.au-restaurant.133', 'fr.a2.au-restaurant.134',
  'fr.a2.au-restaurant.135', 'fr.a2.au-restaurant.136', 'fr.a2.au-restaurant.137',
];

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[/[\]()«».,!?;:]/g, '').replace(/[-·’']/g, '').replace(/\s+/g, '').trim();

const ALL_TEXT = JSON.stringify(LESSON) + JSON.stringify(ALL_MINE);
/** The guards on a neighbour's Owns are scoped HERE rather than to the whole
 *  lesson: `grammarAssumed` exists precisely to declare what this lesson leans
 *  on without teaching, and a guard that walks it fires on the honest
 *  declaration. This fired on `grammarAssumed` during the build and nowhere else. */
const LEARNER_FACING = JSON.stringify(LESSON.sections) + String(LESSON.intro ?? '') + JSON.stringify(LESSON.overview ?? {});

function quizQs(): Array<Record<string, unknown>> {
  const q = sec('s23-quiz') as { rounds?: Array<{ questions?: Array<Record<string, unknown>> }> } | undefined;
  return (q?.rounds ?? []).flatMap((r) => r.questions ?? []);
}

function scoredStrings(): Array<{ where: string; text: string }> {
  const out: Array<{ where: string; text: string }> = [];
  for (const s of LESSON.sections) {
    for (const r of ((s as { rounds?: Array<{ questions?: Array<Record<string, unknown>> }> }).rounds ?? [])) {
      for (const q of (r.questions ?? [])) {
        out.push({ where: `${s.id} q`, text: q.q as string });
        for (const o of ((q.opts as string[]) ?? [])) out.push({ where: `${s.id} opt`, text: o });
        for (const a of ((q.accept as string[]) ?? [])) out.push({ where: `${s.id} accept`, text: a });
      }
    }
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

/* ═══ `sante`, and the test it protects ══════════════════════════════════ */

test('ZERO items carry theme sante, and this unit points at symptomes', () => {
  // Asserted HERE as well as in a1.24's file, so a failure points at this unit
  // rather than at a1.24. `a1-24-corps.test.ts:80-87`'s assertion is GLOBAL over
  // the whole seed, so the first row authored into `sante` turns another unit's
  // test red, and the supervisor settled that nobody edits it.
  strictEqual(S.items.filter((i) => i.theme === 'sante').length, 0,
    'sante was dropped, not filled: it is a phantom with no themeMeta entry');
  ok(UNIT.themes?.includes(THEME), 'the unit must author into symptomes');
  ok(!UNIT.themes?.includes('sante'), 'the unit row must not carry the phantom theme');
  strictEqual(UNIT.seq, 27);
  ok(UNIT.lessonIds?.includes('a2.28.l1'));
  strictEqual(UNIT.lessonIds?.length, 1, 'one lesson per unit, band-wide');
});

test('every corps id is below 294, and the six at or above it are still six', () => {
  // `a1-24-corps.test.ts:366` counts every `corps` row with a numeric tail >= 294
  // and expects exactly six. `theme` is band-agnostic, so an `fr.a2.corps.294`
  // would count.
  for (const r of MY_BODY) {
    const n = Number(/(\d+)$/.exec(r.id)![1]);
    ok(n < 294, `${r.id} sits at or above 294 and would be counted by a1.24's guard`);
  }
  const high = S.items.filter((i) => i.theme === BODY && Number(/(\d+)$/.exec(i.id)?.[1] ?? 0) >= 294);
  strictEqual(high.length, 6, `${high.length} corps rows at or above 294, and a1.24 expects exactly six`);
});

/* ═══ The shape ══════════════════════════════════════════════════════════ */

test('24 sections, six acts, one quiz, and act 3 is the heaviest', () => {
  strictEqual(LESSON.sections.length, 24);
  strictEqual((LESSON.acts ?? []).length, 6);
  strictEqual(LESSON.sections.filter((s) => s.type === 'quiz').length, 1,
    'a second quiz section is silently never rendered');
  const sizes = (LESSON.acts ?? []).map((a) => a.sections.length);
  ok(sizes[2] > sizes[1], `act 3 has ${sizes[2]} and act 2 has ${sizes[1]}; act 3 must outweigh the frame`);
  ok(sizes.every((n) => n <= sizes[2]), `act 3 is not the largest: ${sizes.join(', ')}`);
});

test('no table, no reference sheet, no deep layer, no imageRef', () => {
  // Each an explicit decision rather than an omission. `table` is at zero across
  // the shipped corpus; `cheatSheet` inside a sheet draws its title and nothing
  // else; a1.24 authors zero imageRef and pins it at zero.
  ok(!LESSON.sections.some((s) => s.type === 'table'), 'no table in this lesson');
  strictEqual(((LESSON.sheets as unknown[]) ?? []).length, 0, 'no reference sheet, and therefore no cheatSheet');
  ok(!LESSON.sections.some((s) => (s as { layer?: string }).layer === 'deep'), 'no deep layer');
  ok(!/"imageRef"/.test(ALL_TEXT), 'no imageRef');
});

/* ═══ The boundary that decides this lesson ══════════════════════════════ */

test('a1.24 is cited by unit id and THE CONTRACTION IS NEVER EXPLAINED', () => {
  // a1.24 is this unit's own prereq and owns `avoir mal à` AND the article
  // contraction across FIVE sections, with two of its own tests pinning them.
  // Re-teaching it would make an A2 learner at seq 27 walk a lesson they walked
  // at A1 seq 27.
  ok(/a1\.24/.test(ALL_TEXT), 'a1.24 must be named by unit id');
  for (const shape of [
    /\bà\s*\+\s*le\b/i, /\bau\s*=\s*à\s*le\b/i, /\baux\s*=\s*à\s*les\b/i,
    /\bcontraction\b/i, /\bcontracts?\s+(?:to|into)\b/i, /\bau,?\s+à la,?\s+aux\b/i,
  ]) {
    ok(!shape.test(LEARNER_FACING), `the contraction is explained in a learner-facing surface: ${shape}`);
  }
  // And construction 1 IS used, or the anchor is missing.
  ok(/j'ai mal à la tête/i.test(ALL_TEXT), 'construction 1 must appear, as the anchor the other two are seen against');
});

test('a2.18 is cited and the tense depuis wants is never taught', () => {
  ok(/a2\.18/.test(ALL_TEXT), 'a2.18 must be named by unit id, because depuis appears here');
  for (const shape of [
    /depuis[^.?!]{0,40}\bpresent tense\b/i, /\bpresent tense\b[^.?!]{0,40}depuis/i,
    /\bEnglish hands you a past tense\b/i,
  ]) {
    ok(!shape.test(LEARNER_FACING), `the tense depuis wants is being taught: ${shape}`);
  }
});

test('NO quiz question tests the contraction, depuis or the reflexive past', () => {
  // The prompt calls this the assertion the test most needs.
  for (const q of quizQs()) {
    const blob = JSON.stringify(q);
    ok(!/\bcontraction\b/i.test(blob), `« ${q.q} » tests the contraction, which is a1.24's`);
    ok(!/\bau,?\s+à la,?\s+aux\b/i.test(blob), `« ${q.q} » tests the four shapes, which are a1.24's`);
    // Phrased against the shapes that TEACH the tense, not against
    // co-occurrence. The first version fired on a `why` reading "a2.18 owns
    // depuis and everything about the tense it wants", which is the citation
    // the prompt asks for rather than a violation. Testing `pour` against
    // `depuis` is a LEXICAL choice and is sanctioned: the prompt lists it by
    // name as one of the six errors s15-errors must carry.
    for (const teach of [/use the present[^"]{0,30}depuis/i, /depuis[^"]{0,30}takes the present/i,
      /depuis[^"]{0,40}not the past/i, /English hands you a past tense/i]) {
      ok(!teach.test(blob), `« ${q.q} » teaches the tense depuis wants, which is a2.18's`);
    }
    ok(!/s'est cass|se sont cass|s'est foul/i.test(blob), `« ${q.q} » tests the reflexive past, which is a2.22 and a2.23's`);
  }
});

/* ═══ The Owns ═══════════════════════════════════════════════════════════ */

test('REQUIRED LAYOUT: the three constructions on ONE screen, each with its English', () => {
  // It is the Owns, and splitting it across two sections makes it two small
  // lessons.
  const three = sec('s03-three') as { cards?: Array<{ fr?: string; sub?: string }> } | undefined;
  ok(three, 's03-three is missing');
  const frs = (three!.cards ?? []).map((c) => c.fr ?? '').join(' ');
  for (const shape of [/j'ai mal à la tête/i, /j'ai de la fièvre/i, /je tousse/i]) {
    ok(shape.test(frs), `s03-three does not show all three constructions: missing ${shape}`);
  }
  for (const c of (three!.cards ?? [])) {
    ok(c.sub, 'every card in s03-three needs its English beside it');
  }
});

test('the sort drill tests the rule on words no deck taught', () => {
  // Doctrine §B.1's generation test: if the rule works, it works on words the
  // learner meets for the first time in the drill.
  const sort = sec('s05-sort') as { groups?: Array<{ items?: Array<{ note?: string }> }> } | undefined;
  ok(sort, 's05-sort is missing');
  const fresh = (sort!.groups ?? []).flatMap((g) => g.items ?? []).filter((i) => /NEW/.test(i.note ?? ''));
  ok(fresh.length >= 4, `only ${fresh.length} of the twelve are words the decks did not teach; the generation test wants four`);
});

test('the reframe is carried verbatim and there is only one of it', () => {
  const REFRAME = 'English gives you one shape for a symptom. French picks one of three, and the choice is made before the word arrives.';
  strictEqual(LESSON.reframe, REFRAME);
  const hits = LESSON.sections.filter((s) => JSON.stringify(s).includes(REFRAME));
  ok(hits.length >= 3, `the reframe appears in ${hits.length} section(s), and the validator wants at least 3`);
  // Rejected phrasing: anything of the form "there are three ways to describe a
  // symptom" is the TABLE, not the rule.
  ok(!/there are three ways to describe/i.test(ALL_TEXT), 'that phrasing is the table, not the rule');
});

/* ═══ THE DISCLAIMER CARD, pinned exactly as the contract specifies ═══════ */

test('s14-notmedical exists, is one card, at layer more', () => {
  // Paul answered decision item 5 on 2026-08-15, option B. It is a build
  // requirement and it is now the house position for health-adjacent content,
  // so the next such unit copies this shape rather than re-raising the question.
  const nm = sec('s14-notmedical') as { type: string; layer?: string; cards?: unknown[]; itemIds?: string[] } | undefined;
  ok(nm, 's14-notmedical is missing and it is a build requirement');
  strictEqual(nm!.type, 'cardDeck');
  strictEqual(nm!.layer, 'more', "layer 'more' is what lets a learner on the core path walk past it");
  strictEqual((nm!.cards ?? []).length, 1, 'EXACTLY one card. A second is scope creep and the next author copies it.');
  ok(!nm!.itemIds, 'it names no itemIds');
});

test('s14-notmedical sits between s13-dosetrap and s15-errors, BY ID', () => {
  const order = ids();
  const at = order.indexOf('s14-notmedical');
  strictEqual(order[at - 1], 's13-dosetrap',
    'it must follow the last scored dosage surface, so it lands when the learner has just discovered they can mishear a dose');
  strictEqual(order[at + 1], 's15-errors',
    'it must precede s15-errors, so it closes the dosage run rather than opening the trap act');
  // s12-dose and s13-dosetrap are ONE teaching move in two parts.
  strictEqual(order.indexOf('s13-dosetrap') - order.indexOf('s12-dose'), 1,
    'nothing goes between s12-dose and s13-dosetrap');
  // And it is in act 3, with them.
  const act = (LESSON.acts ?? []).find((a) => a.sections.includes('s14-notmedical'));
  ok(act?.sections.includes('s12-dose'), 'the card belongs to the dosage run, which is act 3');
});

test('s14-notmedical is scored NOWHERE', () => {
  const nm = sec('s14-notmedical')!;
  const body = JSON.stringify(nm);
  // No quiz question refs it, and none of its strings is a scored option.
  for (const q of quizQs()) {
    ok(q.ref !== 's14-notmedical', `quiz « ${q.q} » refs the disclaimer card`);
  }
  // It names no itemIds, so it cannot collide with the dictée or practice.
  ok(!/"itemIds"/.test(body), 'it names no itemIds');
  for (const t of ['dictation', 'practice', 'reviewDeck'] as const) {
    for (const s of LESSON.sections.filter((x) => x.type === t)) {
      const named = (s as { itemIds?: string[] }).itemIds ?? [];
      ok(!named.some((i) => body.includes(i)), `${s.id} names an id the disclaimer card also carries`);
    }
  }
});

test('it is the ONLY disclaimer in the lesson', () => {
  // No second one in the roundup, the intro or the unit description.
  const outside = JSON.stringify(LESSON.sections.filter((s) => s.id !== 's14-notmedical')) + String(LESSON.intro);
  for (const shape of [/not medical advice/i, /consult a (?:doctor|physician) before/i, /we are not (?:doctors|medical)/i]) {
    ok(!shape.test(outside), `a second disclaimer appears outside s14-notmedical: ${shape}`);
  }
});

test('NO drug is named, at any dose, anywhere in the lesson', () => {
  // Collation 1.13 rule 5, and it is permanent rather than interim. Generic
  // instructions only.
  for (const d of ['paracétamol', 'paracetamol', 'ibuprofène', 'aspirine', 'amoxicilline',
    'doliprane', 'advil', 'tylenol', 'codéine', 'morphine']) {
    ok(!new RegExp(`(?<![\\p{L}])${d}(?![\\p{L}])`, 'iu').test(ALL_TEXT),
      `the drug name « ${d} » reached an authored string`);
  }
});

/* ═══ The corpus, and the headline ═══════════════════════════════════════ */

test('34 authored rows, and the corpus plan collapsed because the lexicon existed', () => {
  // THE HEADLINE. The design measured on the seed, saw nothing, and planned 75
  // to 90 rows. Postgres held 193 published a2 rows in `symptomes` and the seed
  // showed ZERO of them. This unit authored 34 and imported the rest.
  strictEqual(MINE.length, 30);
  strictEqual(MY_BODY.length, 4);
  for (const r of ALL_MINE) strictEqual(r.level, 'a2', `${r.id} is not a2`);
  // The symptom lexicon that made the collapse: it must be in the seed now, or
  // the imported cards render blank on device.
  // Rows the lesson actually references. `fr.a2.symptomes.105` (le comprimé) is
  // quoted in the copy as evidence that the lexicon existed, is named by no
  // section and released by no tranche, and is therefore correctly NOT carried:
  // the seed is a cut and this build does not widen it beyond what it uses.
  for (const id of ['fr.a2.symptomes.001', 'fr.a2.symptomes.036', 'fr.a2.symptomes.022']) {
    ok(ITEMS.has(id), `${id} did not reach the seed; symptomes showed 0 rows before this merge`);
  }
});

test('THE BAND VOICE FLOOR: at least 40% of authored rows are the other party', () => {
  // Collation §1.5. Here it is not a constraint but the whole content: the
  // doctor's voice at `vous` did not exist at this level in any published row.
  const other = ALL_MINE.filter((r) => (r.tags ?? []).some((t) => ['doctor', 'pharmacist'].includes(t))).length;
  const pct = other / ALL_MINE.length;
  ok(pct >= 0.4, `only ${(pct * 100).toFixed(1)}% of authored rows are the other party's voice`);
});

test('every authored row carries skill and register', () => {
  // The prompt asks for both on every row: it costs nothing at authoring time
  // and is what lets a future Examiner assemble a health CO task from published
  // rows.
  for (const r of ALL_MINE) {
    ok(r.skill, `${r.id} has no skill`);
    ok(r.register, `${r.id} has no register`);
  }
});

test('no intra-theme fold collision involving anything this build wrote', () => {
  // SCOPED TO THIS BUILD. The first version walked the whole theme and failed on
  // a duplicate this unit did not create, which is the "scope absence claims to
  // the lesson, never the bundle" trap arriving on schedule.
  const mine = new Set(ALL_MINE.map((r) => r.id));
  const byFold = new Map<string, string>();
  for (const i of S.items) {
    if (i.theme !== THEME && i.theme !== BODY) continue;
    const k = `${i.theme}::${fold(i.fr)}`;
    const hit = byFold.get(k);
    if (hit && (mine.has(i.id) || mine.has(hit))) {
      ok(false, `${i.id} « ${i.fr} » folds onto ${hit} inside ${i.theme}, and one of them is this build's`);
    }
    if (!hit) byFold.set(k, i.id);
  }
});

test('the ONE pre-existing duplicate in corps is still exactly one', () => {
  // FOUND BY THIS BUILD AND NOT CREATED BY IT. `fr.a1.corps.007` and
  // `fr.a1.corps.011` are both « J'ai mal à la tête. », both `sentence`, and
  // both carry `flashcard`. `flashhub-coverage.test.ts` treats two rows sharing
  // an `fr` in one theme as one card served twice, so the hub serves this one
  // twice today. It is a1.24's territory and this unit does not edit another
  // lesson's rows. Pinned here so the count cannot grow quietly, and reported.
  const byFold = new Map<string, string[]>();
  for (const i of S.items) {
    if (i.theme !== BODY) continue;
    const k = fold(i.fr);
    byFold.set(k, [...(byFold.get(k) ?? []), i.id]);
  }
  const dupes = [...byFold.values()].filter((v) => v.length > 1);
  strictEqual(dupes.length, 1, `corps duplicate groups: ${JSON.stringify(dupes)}`);
  strictEqual(dupes[0].join(','), 'fr.a1.corps.007,fr.a1.corps.011');
});

test('every respelling passes the real nasal checker', () => {
  // `médecin`, `comprimé` and `ordonnance` are all nasal-bearing and
  // `hasPlainNasalFor` has documented blind spots, so a quiet checker is
  // evidence and not proof. Run through the REAL function.
  const flagged = ALL_MINE.filter((r) => hasPlainNasalFor(r.fr, r.respell ?? ''));
  strictEqual(flagged.map((r) => `${r.id} ${r.respell}`).join(', '), '',
    'respelling(s) close a nasal with a plain n or m');
  for (const r of ALL_MINE) {
    ok(r.respell, `${r.id} has no respelling`);
    ok(!/‿/.test(r.respell!), `${r.id} carries a U+203F tie`);
  }
});

/* ═══ a2.07's move, imported ═════════════════════════════════════════════ */

test('EVERY repair utterance is an imported a2.07 id, and zero were authored', () => {
  const repairFolds = new Set(REPAIR_IDS.map((id) => fold(ITEMS.get(id)!.fr)));
  for (const r of ALL_MINE) {
    ok(!repairFolds.has(fold(r.fr)), `${r.id} « ${r.fr} » duplicates one of a2.07's six frozen rows`);
  }
  for (const id of REPAIR_IDS) ok(ITEMS.has(id), `${id} did not reach the seed`);
  const tranche = new Set((LESSON.deckTranche ?? []).flat());
  for (const id of REPAIR_IDS) {
    ok(tranche.has(id), `${id} is released by no deckTranche. NO RENDERER READS itemIds ON A cardDeck.`);
  }
  ok(/a2\.07/.test(ALL_TEXT), 'a2.07 must be named by unit id');
});

test('no cardDeck carries itemIds, which draws nothing', () => {
  for (const s of LESSON.sections) {
    if (s.type !== 'cardDeck') continue;
    ok(!(s as { itemIds?: string[] }).itemIds, `${s.id} carries itemIds on a cardDeck`);
  }
});

test('groupDrill items use note, not sub: sub draws nothing', () => {
  // a2.07 shipped 33 blank lines this way and only the admin typecheck saw it.
  for (const s of LESSON.sections) {
    if (s.type !== 'groupDrill') continue;
    for (const g of ((s as { groups?: Array<{ items?: Array<Record<string, unknown>> }> }).groups ?? [])) {
      for (const it of (g.items ?? [])) {
        ok(!('sub' in it), `${s.id} has a group item carrying sub, which draws nothing. Use note.`);
      }
    }
  }
});

test('the lesson carries no field the shipped corpus does not', () => {
  const others = S.lessons.filter((l) => l.id !== 'a2.28.l1');
  const known = new Set(others.flatMap((l) => Object.keys(l)));
  const invented = Object.keys(LESSON as unknown as Record<string, unknown>).filter((k) => !known.has(k));
  strictEqual(invented.join(', '), '', 'carries field(s) no other lesson has');
});

/* ═══ Reception ══════════════════════════════════════════════════════════ */

test('both blind listening sections carry the flag and ask how many / when', () => {
  for (const id of ['s07-asks', 's12-dose']) {
    const l = sec(id) as {
      hideLines?: boolean; audio?: { audioFirst?: boolean };
      lines?: Array<{ fr: string }>; questions?: Array<{ q: string }>;
    } | undefined;
    ok(l, `${id} is missing`);
    ok(l!.hideLines === true || l!.audio?.audioFirst === true,
      `${id} carries neither hideLines nor audio.audioFirst, so it is a reading exercise with a play button`);
    for (const q of (l!.questions ?? [])) {
      ok(!/what did you hear/i.test(q.q), `${id} « ${q.q} » asks what was heard, which a visible transcript answers`);
      for (const ln of (l!.lines ?? [])) {
        ok(!fold(q.q).includes(fold(ln.fr)), `${id} « ${q.q} » reprints its line`);
      }
    }
  }
});

test('every listening line stands alone, so a2.35 can lift it', () => {
  // Collation §7.2 and 1.4: this band leaves a2.35 a reception bank, and it does
  // so for free if the lines are authored to be liftable.
  const framing = /\bthe card before\b|\bthe scene\b|\bthis lesson\b|\bearlier\b|\bas we saw\b/i;
  for (const s of LESSON.sections) {
    for (const l of ((s as { lines?: Array<{ fr: string; en: string }> }).lines ?? [])) {
      ok(!framing.test(l.en), `${s.id} line « ${l.en} » depends on this lesson's framing`);
    }
    for (const t of ((s as { turns?: Array<{ en: string }> }).turns ?? [])) {
      ok(!framing.test(t.en), `${s.id} turn « ${t.en} » depends on this lesson's framing`);
    }
  }
});

test('ONE scenario, and it is the single-scenario fallback', () => {
  // Band blocking step 4 requires a Pixel 6 check of two `scenario` sections and
  // `scenario` repeats in ZERO shipped lessons. The check could not be run, so
  // the fallback the prompt names was taken up front: one scenario at ten to
  // twelve turns, ending on the prescription and the dosage read back.
  const scenarios = LESSON.sections.filter((s) => s.type === 'scenario');
  strictEqual(scenarios.length, 1, 'the fallback is ONE scenario until the device check is run');
  const turns = (scenarios[0] as { turns?: Array<{ ai: string; en: string; user: string; userEn?: string; alts?: unknown[] }> }).turns ?? [];
  ok(turns.length >= 10 && turns.length <= 12, `${turns.length} turns; the fallback specifies ten to twelve`);
  for (const t of turns) {
    ok(t.userEn, `a turn has no userEn: « ${t.ai} »`);
    ok((t.alts ?? []).length >= 2, `a turn has fewer than two alts: « ${t.ai} »`);
  }
  // TWO turns require a repair, because the doctor uses a word the lesson never
  // taught. That is the design's signature.
  const repairs = turns.filter((t) => /Pardon|ne connais pas le mot|veut dire/i.test(t.user));
  ok(repairs.length >= 2, `${repairs.length} turn(s) require a repair move, and the design wants two`);
  // It ends on the dosage read back.
  ok(/comprimé matin et soir/i.test(turns.at(-2)?.user ?? ''), 'the scenario must end on the dosage read back');
  ok(!(scenarios[0] as { exam?: unknown }).exam, 'Scenario.exam is read by no code and must not be authored');
});

/* ═══ The quiz ═══════════════════════════════════════════════════════════ */

test('24 questions, six rounds, at most half mcq', () => {
  const qs = quizQs();
  strictEqual(qs.length, 24);
  strictEqual(((sec('s23-quiz') as { rounds?: unknown[] }).rounds ?? []).length, 6);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq <= qs.length / 2, `${mcq} of ${qs.length} are mcq, and at most half is house style`);
});

test('THE BAND FOLD RULE: every typeIn and errorSpot discriminates', () => {
  // `matchesAccept` grades both through `fold()`, which strips accents, case,
  // punctuation, hyphens, both apostrophes and all whitespace. This bites
  // hardest in the dosage material, which is where an author reaches for a comma.
  for (const q of quizQs()) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const answer = (q.answer as string) ?? '';
    ok(answer, `${q.format} « ${q.q} » has no answer`);
    const accept = (q.accept as string[]) ?? [];
    ok(accept.some((a) => fold(a) === fold(answer)), `${q.format} « ${q.q} » has an answer no accept entry folds onto`);
    if (q.format === 'errorSpot') {
      const prompt = q.prompt as string;
      ok(prompt, `errorSpot « ${q.q} » has no prompt`);
      ok(fold(prompt) !== fold(answer), `errorSpot « ${q.q} » folds its prompt onto its answer: it tests nothing`);
    }
  }
});

test('every listenChoose carries say, and every question a why and a ref', () => {
  const sectionIds = new Set(ids());
  for (const q of quizQs()) {
    ok(q.why, `« ${q.q} » has no why`);
    ok(q.ref, `« ${q.q} » has no ref`);
    ok(sectionIds.has(q.ref as string), `« ${q.q} » refs ${q.ref}, not a section here`);
    if (q.format !== 'listenChoose') continue;
    ok(q.say || (q.audio as { clip?: string })?.clip, `listenChoose « ${q.q} » would speak its own answer`);
  }
});

/* ═══ Regional policy, and the professions ═══════════════════════════════ */

test('at most one Quebec card, at layer more, and nothing on it is scored', () => {
  const qc = sec('s17-quebec') as { layer?: string; cards?: unknown[] } | undefined;
  ok(qc, 's17-quebec is missing');
  strictEqual(qc!.layer, 'more');
  strictEqual((qc!.cards ?? []).length, 1, 'collation C3 allows exactly one');
  for (const { where, text } of scoredStrings()) {
    for (const f of ['RAMQ', 'carte soleil', 'CLSC', 'Info-Santé']) {
      ok(!new RegExp(`(?<![\\p{L}\\p{N}-])${f}(?![\\p{L}\\p{N}-])`, 'iu').test(text),
        `${where} carries the Quebec form « ${f} » in a scored surface: « ${text} »`);
    }
  }
});

test('NO job-title feminine is minted, and the conditional is never named', () => {
  // a2.30 owns feminisation for all eight units. a2.29 owns the register ladder.
  for (const f of ['médecine', 'docteure', 'pharmacienne', 'médecin traitante']) {
    ok(!new RegExp(`(?<![\\p{L}])${f}(?![\\p{L}])`, 'iu').test(ALL_TEXT), `the feminine « ${f} » was minted here`);
  }
  ok(!/pourriez-vous/i.test(ALL_TEXT), "pourriez-vous is a2.29's");
  ok(!/\bconditional\b/i.test(ALL_TEXT), 'the conditional is named, and collation 1.8 keeps it unnamed at this level');
  // `je voudrais` IS available as unanalysed lexis and is used that way.
  ok(/je voudrais/i.test(ALL_TEXT), 'je voudrais is permitted and appears as a whole form');
});

test('NOTHING uses y or en as a pronoun', () => {
  // Collation C8. Written against the PRONOUN's shapes: the preposition `en` is
  // legal and appears in « sans en parler » on the label.
  for (const shape of [/\bj'y\b/i, /\bon y\b/i, /\bvous y\b/i, /\bd'y aller\b/i, /\ballons-y\b/i, /\bil y en a\b/i, /\bj'en ai\b/i]) {
    const hit = shape.exec(ALL_TEXT);
    ok(!hit, `the pronoun y or en reached an authored string as « ${hit?.[0]} »`);
  }
});

/* ═══ Production surfaces ════════════════════════════════════════════════ */

test('PRACTICE IS MANDATORY and every item it names can be spoken', () => {
  const p = LESSON.sections.filter((s) => s.type === 'practice');
  strictEqual(p.length, 1);
  const named = (p[0] as { itemIds?: string[] }).itemIds ?? [];
  ok(named.length > 0, 'an empty practice.itemIds fails the publish gate');
  strictEqual((p[0] as { skill?: string }).skill, 'speak');
  for (const id of named) {
    const it = ITEMS.get(id);
    ok(it, `practice names ${id}, which is not in the seed`);
    ok((it!.drills ?? []).includes('voiceflash'), `${id} cannot reach a speak drill: it has no voiceflash`);
  }
  ok((LESSON.itemIds ?? []).length > 0, 'an empty Lesson.itemIds releases no SRS cards');
});

test('THE PUBLISHED HEALTH CORPUS IS UNSPEAKABLE, which is why practice names only our rows', () => {
  // A finding worth pinning rather than reporting once. Of the published a2
  // rows in `symptomes` that are learner-voice sentences, NONE carries
  // `voiceflash`: the corpus was authored for reading and dictation and never
  // for production. This build does not widen another lesson's drill arrays.
  const learnerRows = S.items.filter((i) => i.theme === THEME && i.level === 'a2'
    && /^J[e'’]/.test(i.fr) && !ALL_MINE.some((m) => m.id === i.id));
  const speakable = learnerRows.filter((i) => (i.drills ?? []).includes('voiceflash'));
  strictEqual(speakable.length, 0,
    `${speakable.length} published learner rows now carry voiceflash; if this changed, practice can import again`);
});

test('the dictée never hinges on an accent, an apostrophe or a hyphen', () => {
  const d = sec('s18-dictation') as { itemIds?: string[] } | undefined;
  ok(d?.itemIds?.length, 's18-dictation names no items');
  for (const id of d!.itemIds!) {
    const it = ITEMS.get(id);
    ok(it, `s18-dictation names ${id}, which is not in the seed`);
    ok((it!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
    ok(!/['’-]/.test(it!.fr), `${id} « ${it!.fr} » carries an apostrophe or a hyphen, which normalizeFr strips`);
    const letters = it!.fr.replace(/[^A-Za-zÀ-ÿ]/gu, '').length;
    ok(letters > 16, `${id} has ${letters} letters and would run in LETTER mode`);
    ok(it!.fr.trim().split(/\s+/).length > 1, `${id} is one word and would run in LETTER mode`);
  }
});

test('every trapDrill is stepped, gated, swipes, and carries no size', () => {
  const traps = LESSON.sections.filter((s) => s.type === 'trapDrill');
  ok(traps.length >= 1);
  for (const t of traps) {
    const steps = ((t as { steps?: Array<{ kind: string; gate?: boolean }> }).steps ?? []);
    strictEqual(steps.map((s) => s.kind).join(','), 'rule,cards,audio,drill', `${t.id} is not the house trap shape`);
    strictEqual(steps.at(-1)?.gate, true, `${t.id}'s drill step is not gated`);
    strictEqual((t as { swipe?: boolean }).swipe, true, `${t.id} has no swipe`);
    ok(!(t as { size?: string }).size, `${t.id} carries size, which comes off a stepped trapDrill`);
  }
});

test('commonErrors carries swipe, or it renders blank', () => {
  for (const s of LESSON.sections) {
    if (s.type !== 'commonErrors') continue;
    strictEqual((s as { swipe?: boolean }).swipe, true, `${s.id} without swipe renders nothing`);
  }
});

test('no ExamTask claim, no Scenario.exam, and no dead audio field', () => {
  const text = JSON.stringify(LESSON);
  for (const f of ['modelPlayback', 'perSentenceReplay', 'scoreOn', 'autoplay', 'maxPlays', 'wrongThenRight']) {
    ok(!text.includes(`"${f}"`), `${f} is authored and no renderer reads it`);
  }
});

test('no em dash and no "honest" anywhere', () => {
  ok(!/—/.test(ALL_TEXT), 'an em dash reached an authored string');
  ok(!/honest/i.test(ALL_TEXT), '"honest" reached an authored string');
});

test('every itemId the lesson names resolves in this same file', () => {
  // The seed is a CUT: `symptomes` held 364 published rows and showed ZERO
  // before this merge. Without the merge pulling every referenced row out of
  // Postgres, the imported cards render EMPTY ON DEVICE while every test passes.
  for (const id of (LESSON.itemIds ?? [])) {
    ok(ITEMS.has(id), `${id} is named by the lesson and is not in the seed`);
  }
  for (const s of LESSON.sections) {
    for (const id of ((s as { itemIds?: string[] }).itemIds ?? [])) {
      ok(ITEMS.has(id), `${s.id} names ${id}, which is not in the seed`);
    }
    for (const g of ((s as { groups?: Array<{ items?: Array<{ itemId?: string }> }> }).groups ?? [])) {
      for (const it of (g.items ?? [])) {
        if (it.itemId) ok(ITEMS.has(it.itemId), `${s.id} names ${it.itemId}, which is not in the seed`);
      }
    }
  }
  for (const id of (LESSON.deckTranche ?? []).flat()) {
    ok(ITEMS.has(id), `deckTranche releases ${id}, which is not in the seed`);
    ok((ITEMS.get(id)!.drills ?? []).includes('flashcard'),
      `${id} is released by a tranche and carries no flashcard drill, so it produces no card`);
  }
});
