// a2.30.l1 « Le travail & les métiers » — the guard. Trail seq 29, the sixth
// unit of the A2 situations band, and the only one that is not a transaction
// with a stranger who wants to help you.
//
// These are the assertions that would have caught this build's own mistakes,
// plus the ones the prompt asked for BY NAME. A sentence in a report cannot
// fail; a list can. Two of them DID catch this build: the banned-word guard
// found "The honest one" in a cardDeck body, and the a1.06 citation guard found
// four teaching sections using the zero-article rule without naming its owner.
//
// THE FEMINISATION RULE LIVES HERE. Collation C4 assigns the policy to a2.30
// and binds the other seven units to whatever landed. The pair table and the
// import-before-mint rule are asserted rather than described, so a later unit
// that drifts goes red here rather than shipping a second convention.
//
// READ FROM BOTH SIDES. The invariants run against the AUTHORED source, so they
// fail in ten seconds rather than at apply time. The last test runs against
// `seed.json` and is inert until the merge lands, at which point it proves the
// shipped copy is the authored one.
import { test } from 'node:test';
import { strictEqual, deepStrictEqual, ok } from 'node:assert';
import seed from './seed.json' with { type: 'json' };
import { hasPlainNasalFor } from './density.logic.ts';
import { fold } from './answer.logic.ts';
import { quizQuestions } from './schema.ts';
import { namesUnitLabel } from './unit-label.ts';

/* ── The authored source. Imported the way a1-03-genre.test.ts imports
 *    genre-endings.ts, so this file guards the build before it is applied. ── */
type Any = Record<string, unknown>;
type Section = Any & { id: string; type: string };

let L: Any & { sections: Section[] };
let SECTIONS: Section[];
let SHEETS: Array<Any & { sections: Section[] }>;
let TRANCHE: string[][];
let ROWS: Array<Any & { id: string; kind: string; fr: string; en: string; voice: string; respell?: string; drills?: string[]; gender?: string }>;
let C: Any;
let noSrc = false;

try {
  const lesson = await import('../../../ealch-admin/scripts/data/travail-metiers-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/travail-metiers-corpus.ts');
  L = lesson.LESSON as never;
  SECTIONS = lesson.SECTIONS as never;
  SHEETS = lesson.SHEETS as never;
  TRANCHE = lesson.DECK_TRANCHE as never;
  ROWS = corpus.ROWS as never;
  C = corpus as never;
} catch {
  noSrc = true;
  L = { sections: [] } as never; SECTIONS = []; SHEETS = []; TRANCHE = []; ROWS = []; C = {};
}

const LESSON_ID = 'a2.30.l1';
const UNIT_ID = 'a2.30';

const S = (id: string) => SECTIONS.find((s) => s.id === id);
/** Every authored string reachable from a value. */
const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};
const textOf = (s: unknown) => strs(s).join('\n');
/** Every authored string WITH the key it sits under. Needed because "is this
 *  sentence presented as correct?" is a question about the FIELD, not the text:
 *  `Je suis un ingénieur.` is right under `wrong` and wrong under `fr`. */
const keyed = (v: unknown, key = '', out: Array<{ key: string; s: string }> = []): Array<{ key: string; s: string }> => {
  if (typeof v === 'string') out.push({ key, s: v });
  else if (Array.isArray(v)) v.forEach((x) => keyed(x, key, out));
  else if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => keyed(x, k, out));
  return out;
};
const ALL = () => textOf(SECTIONS) + '\n' + textOf(L.intro) + '\n' + textOf(L.overview) + '\n' + textOf(SHEETS);
const QQ = () => quizQuestions(S('s23-quiz') as never) as Array<Any & { format?: string; why?: string; ref?: string; answer?: string; prompt?: string; opts?: string[]; correct?: number; target?: string }>;

/* ══════════════════════════════════════════════════════════════════════════
 *  1. IDENTITY AND SHAPE
 * ══════════════════════════════════════════════════════════════════════════ */

test('the identity block is the spine block, and the theme is NOT re-mapped', { skip: noSrc }, () => {
  strictEqual(L.id, LESSON_ID);
  strictEqual(L.unitId, UNIT_ID);
  strictEqual((C.UNIT as Any).title, 'Work and Jobs');
  strictEqual((C.UNIT as Any).sub, 'Le travail & les métiers');
  deepStrictEqual((C.UNIT as Any).themes, ['metiers']);
  deepStrictEqual((C.UNIT as Any).prereqUnitIds, ['a1.06']);
  // Five of this band's eight units point at a phantom theme and must be
  // re-mapped. THIS ONE IS NOT ONE OF THEM. `metiers` is real, has a themeMeta
  // entry, and holds 353 published rows. If a re-map diff changes it, it is
  // wrong, and this assertion is how that gets found.
  strictEqual(C.THEME, 'metiers');
  ok(ROWS.every((r) => r.theme === 'metiers'), 'every authored row lands in metiers and nowhere else');
});

test('the tag numbers the lesson by where it sits, not by what its id says', { skip: noSrc }, () => {
  // FOUND ON THE PIXEL 6. This was authored « A2 · LEÇON 30 » from the unit id.
  // The header renders « A2 · LEÇON 29 » from the unit SEQ, so the screen was
  // right and the stored string was wrong, and nothing failed. Every A2
  // neighbour follows seq: a2.29.l1 is seq 28 and tagged 28.
  strictEqual((C.UNIT as Any).seq, 29);
  strictEqual(L.tag, `A2 · LEÇON ${(C.UNIT as Any).seq}`);
  // And prove the convention still holds for the neighbours, so this does not
  // become a rule only this lesson believes in.
  const s = seed as Any as { units: Array<{ id: string; seq: number; lessonIds?: string[] }>; lessons: Array<{ id: string; tag?: string; level: string }> };
  for (const u of s.units.filter((x) => /^a2\./.test(x.id) && x.seq >= 22)) {
    for (const lid of u.lessonIds ?? []) {
      const nl = s.lessons.find((x) => x.id === lid);
      if (!nl?.tag || !/^A2 · LEÇON /.test(nl.tag)) continue;   // a2.07.l1 ships 'restaurant'
      strictEqual(nl.tag, `A2 · LEÇON ${u.seq}`, `${lid} tags itself ${nl.tag} at seq ${u.seq}`);
    }
  }
});

test('the lesson carries no field the shipped corpus does not', { skip: noSrc }, () => {
  // 41-DEAD-FIELDS-WARNING.md. a2.07 shipped, published at rollout 10, and
  // passed 4,195 tests with 33 BLANK LINES in it, because validateLesson
  // tolerates unknown keys and so does the publish path.
  const others = (seed as Any as { lessons: Array<Any & { id: string }> }).lessons.filter((l) => l.id !== LESSON_ID);
  const known = new Set(others.flatMap((l) => Object.keys(l)));
  const invented = Object.keys(L).filter((k) => !known.has(k));
  deepStrictEqual(invented, [], `carries field(s) no other lesson has: ${invented.join(', ')}`);
});

test('groupDrill items use note, not sub: sub draws nothing', { skip: noSrc }, () => {
  for (const sec of SECTIONS) {
    if (sec.type !== 'groupDrill') continue;
    for (const g of (sec as Any as { groups?: Array<{ items?: Any[] }> }).groups ?? []) {
      for (const it of g.items ?? []) ok(!('sub' in it), `${sec.id}: a group item carries sub, which draws nothing. Use note.`);
    }
  }
});

test('no cardDeck carries itemIds, which draws nothing', { skip: noSrc }, () => {
  // Only `practice` reads itemIds. a2.07 was the only one of 285 shipped
  // cardDecks carrying it, and it rendered nothing. The ids are released
  // through deckTranche instead.
  for (const sec of SECTIONS) {
    if (sec.type === 'cardDeck') ok(!('itemIds' in sec), `${sec.id}: cardDeck with itemIds. Release through deckTranche.`);
  }
});

test('the lesson sets skill PO and authors no exam artefact', { skip: noSrc }, () => {
  // The ONE permitted exam-layer artefact, and it is free: the remediation join
  // that lets a missed PO band resolve back to a lesson.
  strictEqual(L.skill, 'PO');
  // Collation §1.12, and decisions item 4 which Paul ACCEPTED on 2026-08-15.
  // Scenario.exam is validated and read by NO rendering code anywhere.
  for (const sec of SECTIONS) ok(!('exam' in sec), `${sec.id}: carries Scenario.exam, which no renderer reads`);
  ok(!/delf_a2/i.test(ALL()), 'names delf_a2, which is not in EXAM_FORMATS');
  strictEqual((C.EXAM_POLICY as Any).examTaskRows, 0);
  strictEqual((C.EXAM_POLICY as Any).scenarioExam, false);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  2. THE OWNS — THE SHAPE OF AN EXTENDED ANSWER
 * ══════════════════════════════════════════════════════════════════════════ */

test('the four moves appear in ONE section, in order, with the joined answer visible', { skip: noSrc }, () => {
  // §13's first required layout. It is the Owns, and splitting it across
  // sections makes it four small vocabulary sections.
  const fm = S('s02-fourmoves') as Any as { cards: Array<{ label?: string; fr?: string }> };
  ok(fm, 's02-fourmoves is missing');
  strictEqual(fm.cards.length, 5, 'four moves plus the joined answer');
  const labels = fm.cards.map((c) => c.label ?? '');
  for (const [i, move] of (C.MOVES as string[]).entries()) {
    ok(labels[i].includes(`Move ${i + 1}`), `card ${i} is not move ${i + 1}`);
    ok(labels[i].includes(move), `card ${i} does not name ${move}`);
  }
  strictEqual(fm.cards[4].fr, C.JOINED_ANSWER, 'the fifth card is not the joined answer');
  // FOUND BY MUTATION. Pinning only the fifth card's `fr` left its ROLE
  // unpinned, so the card could stop announcing itself as the join while the
  // string stayed put. Pin the label too.
  ok((fm.cards[4].label ?? '').includes('All four'), 'the fifth card no longer presents itself as the join');
  // And prove it really IS the join: the joined answer must contain each of the
  // four move models verbatim. Drop or reword any move and this goes red.
  const byId = new Map(ROWS.map((r) => [r.id, r]));
  for (const [i, id] of (C.MOVE_MODEL_IDS as string[]).entries()) {
    const row = byId.get(id);
    ok(row, `${id} is not an authored row`);
    strictEqual(fm.cards[i].fr, row!.fr, `card ${i} does not show move ${i + 1}'s model sentence`);
    ok((C.JOINED_ANSWER as string).includes(row!.fr), `the joined answer does not contain move ${i + 1}`);
  }
  // The four moves are TAUGHT in ONE section. A closing summary and a reference
  // sheet may of course list them again — that is what they are for — so the
  // rule is scoped to teaching surfaces. What it forbids is a second section
  // introducing the set, which is what turns the Owns into four small
  // vocabulary sections.
  const SUMMARY = new Set(['roundup', 'progressCheck', 'goals']);
  for (const s of SECTIONS) {
    if (s.id === 's02-fourmoves' || SUMMARY.has(s.type)) continue;
    const t = textOf(s);
    const all = (C.MOVES as string[]).every((m) => t.includes(m));
    ok(!all, `${s.id} also presents all four moves, so the Owns is split across sections`);
  }
});

test('the one-sentence answer and the four-move answer sit side by side', { skip: noSrc }, () => {
  // §13's second required layout, with what moved NAMED.
  const t = S('s04-twoanswers') as Any as { type: string; cols: string[]; rows: Array<{ cells: string[] }> };
  strictEqual(t.type, 'tapTable', 'a table at layer core is a density failure; this must be a tapTable');
  strictEqual(t.rows.length, 3);
  ok(t.rows.length <= 6, 'a2.26 measured the in-flow tapTable cap at six rows on a Pixel 6');
  ok(t.cols.every((c) => c.length <= 16), 'a2.16 measured a header glyph budget');
  strictEqual(t.rows[0].cells[0], C.ONE_SENTENCE_ANSWER);
});

test('the joined answer is authored lesson text and NEVER a corpus row', { skip: noSrc }, () => {
  // Sentence budget is 14 words. The four moves joined run past it.
  ok((C.JOINED_ANSWER as string).split(/\s+/).length > 14);
  ok(!ROWS.some((r) => r.fr === C.JOINED_ANSWER), 'the joined answer was authored as a corpus row');
});

test('s21-deliver is the practice section, and it is the openPrompt seam', { skip: noSrc }, () => {
  // lesson-contract.test.ts:505-519 mirrors the publish gate: a non-assessment
  // lesson with no practice, an empty practice.itemIds or an empty
  // Lesson.itemIds DOES NOT SHIP. Asserted here so it fails in ten seconds.
  const d = S('s21-deliver') as Any as { type: string; itemIds: string[] };
  strictEqual(d.type, 'practice');
  deepStrictEqual(d.itemIds, [...(C.MOVE_MODEL_IDS as string[])], 'exactly the four move models, in move order');
  ok((L.itemIds as string[]).length > 0, 'Lesson.itemIds is empty, so the lesson releases no SRS cards');
  ok(SECTIONS.filter((s) => s.type === 'practice').length >= 1);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  3. THE BOUNDARIES — QUOTED, NOT RE-AUTHORED
 * ══════════════════════════════════════════════════════════════════════════ */

/** Scene and scenario are DRAMATIC surfaces: they have no note, tip or body to
 *  put a unit id in, and a citation inside a bubble breaks the fiction. Every
 *  TEACHING surface that uses the rule must name its owner. */
const DRAMATIC = new Set(['scene', 'scenario']);
const USES_ZERO_ARTICLE = /Je suis (ingénieur|infirmière|professeur|cuisinier|comptable|avocate)\./;

test('a1.06 is named in every TEACHING section that uses the zero-article rule', { skip: noSrc }, () => {
  const users = SECTIONS.filter((s) => !DRAMATIC.has(s.type) && USES_ZERO_ARTICLE.test(textOf(s)));
  ok(users.length >= 8, `only ${users.length} sections use the rule; the detector has drifted`);
  for (const s of users) {
    ok(namesUnitLabel(textOf(s), C.ZERO_ARTICLE_UNIT), `${s.id} uses a1.06's rule and does not name a1.06`);
  }
});

test("a1.06's string is quoted VERBATIM, and a paraphrase goes red", { skip: noSrc }, () => {
  // Lifted from a1.06.l1 s10-jobs, example 1, `note`, measured in the seed.
  strictEqual(C.A1_06_QUOTE, 'No un. The gap after suis is the grammar.');
  ok(ALL().includes(C.A1_06_QUOTE as string), "a1.06's string is not quoted verbatim anywhere");
  // And the source really does still say it. If a1.06 is re-authored, this
  // fails here rather than leaving a2.30 quoting a string that no longer exists.
  const a106 = (seed as Any as { lessons: Array<{ id: string }> }).lessons.find((l) => l.id === 'a1.06.l1');
  if (a106) ok(JSON.stringify(a106).includes(C.A1_06_QUOTE as string), 'a1.06.l1 no longer carries the quoted string');
});

test('the zero-article rule is NOT taught, only named and tested', { skip: noSrc }, () => {
  // Doctrine §B.5: every lesson owns one thing the table does not show, and act
  // 2 of this lesson is not allowed to be a second run at its own prerequisite.
  // Scoped to TEACHING surfaces. Naming it and testing it are both allowed.
  const EXPLAINS = /(because|since|the reason|which is why)[^.]*\b(article|un|une)\b/i;
  for (const s of SECTIONS) {
    if (!['examples', 'cardDeck', 'commonErrors'].includes(s.type)) continue;
    for (const field of ['note', 'body', 'why'] as const) {
      for (const str of strs(s)) {
        if (!EXPLAINS.test(str)) continue;
        ok(false, `${s.id}: a ${field}-level string explains why the article is absent, which is a1.06's teaching: "${str.slice(0, 70)}"`);
      }
    }
  }
});

test('a2.18 is named for depuis, and no section teaches the tense it takes', { skip: noSrc }, () => {
  ok(namesUnitLabel(ALL(), C.TIME_UNIT), 'a2.18 is never named');
  // a2.18's s07-tense is a trapDrill on exactly this. Ours would be the second
  // copy. We own the QUESTION FORM and nothing else.
  const TEACHES_TENSE = /depuis[^.]{0,40}\b(takes|forces|requires|needs)\b[^.]{0,30}\b(present|présent|past)\b/i;
  ok(!TEACHES_TENSE.test(ALL()), 'a section teaches which tense depuis takes, which is a2.18 seq 14');
  // The question form IS ours: it returned zero rows.
  ok(ROWS.some((r) => r.fr === 'depuis combien de temps'), 'the question form was not authored');
});

test('a2.07 owns the repair move: cited by its lesson label, reused by itemId, ZERO authored', { skip: noSrc }, () => {
  ok(namesUnitLabel(ALL(), C.REPAIR_UNIT), 'a2.07 is never named');
  const authored = new Set(ROWS.map((r) => r.fr));
  for (const fr of C.REPAIR_FR as string[]) {
    ok(!authored.has(fr), `this lesson authored a repair row: "${fr}"`);
  }
  // The six frozen ids are RELEASED, which is the assertion 04-REPAIR-MOVE-IDS
  // asks for: assert the release, not the field.
  const released = new Set(TRANCHE.flat());
  for (const id of C.REPAIR_IDS as string[]) ok(released.has(id), `${id} is never released by a tranche`);
});

test('a2.29 owns the ladder: three rung names verbatim, ZERO rung lines authored', { skip: noSrc }, () => {
  const reg = textOf(S('s17-register'));
  // Quote the three names VERBATIM. A paraphrase is a second ladder.
  strictEqual(C.RUNG_1, 'Ask once, softly.');
  strictEqual(C.RUNG_2, 'Say it again, without the person.');
  strictEqual(C.RUNG_3, 'Ask for the person who can fix it.');
  for (const r of C.RUNGS as string[]) ok(reg.includes(r), `s17-register does not quote "${r}" verbatim`);
  // In ORDER, and no fourth rung.
  const at = (C.RUNGS as string[]).map((r) => reg.indexOf(r));
  ok(at[0] < at[1] && at[1] < at[2], 'the three rungs are not in order');
  ok(!/rung 4|fourth rung/i.test(ALL()), 'a fourth rung was added, which clause 4 forbids');
  ok(namesUnitLabel(ALL(), C.LADDER_UNIT), 'a2.29 is never named');
  const released = new Set(TRANCHE.flat());
  for (const id of C.LADDER_IDS as string[]) ok(released.has(id), `${id} is never released by a tranche`);
});

test('a2.31 is cited by UNIT ID only, and none of its ground is authored', { skip: noSrc }, () => {
  // a2.31 ships AFTER this unit, so a forward citation by item id would name an
  // id that does not exist. By unit id it reads as "that comes next".
  ok(!/fr\.[a-z0-9]+\.(ecole|examens-et-diplomes)\.\d+/.test(textOf(SECTIONS)), 'a forward citation by item id');
  for (const w of C.A2_31_RESERVED as string[]) {
    ok(!new RegExp(`\\b${w}\\b`, 'i').test(ALL()), `authors a2.31's ground: "${w}"`);
  }
  ok(!ROWS.some((r) => /diplôme|équivalence|licence|master/i.test(r.fr)), 'authored a diploma or equivalence row');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  4. FEMINISATION — THE RULE THIS UNIT OWNS FOR THE BAND
 * ══════════════════════════════════════════════════════════════════════════ */

test('every feminine is an import or a pair whose masculine is a corpus row', { skip: noSrc }, () => {
  // C4 rule 5: PAIRS ONLY. No orphan feminines.
  const minted = C.MINTED_FEMININE_IDS as string[];
  const anchors = C.MINTED_FEMININE_ANCHORS as string[];
  strictEqual(minted.length, anchors.length, 'a minted feminine has no masculine anchor');
  const authoredIds = new Set(ROWS.map((r) => r.id));
  const importable = new Set(Object.values(C.IMPORTED as Record<string, string[]>).flat());
  for (const [i, id] of minted.entries()) {
    ok(authoredIds.has(id), `${id} is listed as minted and was not authored`);
    ok(importable.has(anchors[i]), `${id} has no imported masculine anchor (${anchors[i]})`);
  }
});

test('the count of newly authored gendered word rows is PINNED', { skip: noSrc }, () => {
  // THE a1.03 EXPOSURE, pinned so the next author sees it in the diff. A
  // gendered single-word row joins the ending population a1.03 measures, and
  // a1.11, a1.22, a1.23 and a1.26 all broke a1-03-genre.test.ts this way.
  //
  // MEASURED for this build, before the apply: 3 of a1.03's 27 pinned endings
  // move. -euse 7->8 (une coiffeuse), -ure 26->28 (professeure, ingénieure,
  // both CARRIED not minted), -e 933->946 at 70%->71%, which stays under the
  // 90% floor and so stays correctly filed as worthless.
  const gendered = ROWS.filter((r) => r.kind === 'word' && r.gender);
  strictEqual(gendered.length, 8, 'the gendered word count moved; re-measure a1.03 before you change this number');
  ok(gendered.every((r) => r.gender === 'f'), 'every gendered row authored here is a feminine half of a pair');
});

test('the contested feminine was never minted, because rule 5 removed it', { skip: noSrc }, () => {
  // The band's contested case is autrice/auteure. Measured 2026-08-16: BOTH are
  // ABSENT from the corpus, so rule 2 is moot. And `metiers` carries `un
  // écrivain`, not `un auteur` — the only `auteur` anywhere is
  // fr.b1.litterature.030, which is B1 and out of level. No masculine anchor,
  // so no feminine, and this unit does not settle a debate it never had.
  ok(!ROWS.some((r) => /\bautrice\b|\bauteure\b/i.test(r.fr)), 'minted a contested form with no masculine anchor at this level');
});

test('rule 4: no feminine that is a different word', { skip: noSrc }, () => {
  for (const t of C.NOT_A_FEMININE as Array<{ wrong: string }>) {
    ok(!ROWS.some((r) => r.fr === t.wrong), `authored "${t.wrong}", which is a field and not a person`);
  }
  // And the trap is on a card, because it is the error a learner PRODUCES.
  ok(textOf(S('s11-fem')).includes('la médecine'), 's11-fem does not name the la médecine trap');
});

test('a masculine and its feminine sit on ONE card, never on two', { skip: noSrc }, () => {
  // §13's third required layout.
  const fem = S('s11-fem') as Any as { cards: Array<{ head?: string }> };
  const pairCards = fem.cards.filter((c) => (c.head ?? '').includes('·'));
  ok(pairCards.length >= 7, `only ${pairCards.length} cards carry both forms`);
  for (const c of pairCards) {
    const [m, f] = (c.head as string).split('·').map((x) => x.trim());
    ok(m && f && m !== f, `a pair card does not carry two distinct forms: ${c.head}`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  5. THE TRAPS, AND WHAT A SCORED SURFACE CAN TEST
 * ══════════════════════════════════════════════════════════════════════════ */

test('BAND RULE: every typeIn/errorSpot near-miss folds differently', { skip: noSrc }, () => {
  // 03-ANSWER-FOLD-FACT.md. Quiz grading uses fold() in answer.logic.ts:32, NOT
  // normalizeFr. fold strips accents, case, punctuation, hyphens, the middle
  // dot, BOTH apostrophes and ALL whitespace. If the answer and its most
  // plausible wrong answer fold to the same string, the item tests NOTHING.
  for (const q of QQ()) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    ok(q.answer, `${q.format} question with no answer`);
    if (!q.prompt) continue;
    ok(fold(q.answer as string) !== fold(q.prompt), `tests nothing after the fold: "${q.answer}" vs "${q.prompt}"`);
  }
});

test('no scored item turns on an accent, capital, hyphen, apostrophe or spacing', { skip: noSrc }, () => {
  // The six things fold() makes invisible. An item whose ONLY difficulty is one
  // of them is not a question.
  for (const q of QQ()) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    for (const acc of (q.accept as string[] | undefined) ?? []) {
      // Every declared alternate must fold to the SAME thing as the answer,
      // which is what makes it an alternate rather than a second question.
      strictEqual(fold(acc), fold(q.answer as string), `accept "${acc}" folds differently from the answer`);
    }
  }
});

test('the article trap appears ONLY on written surfaces', { skip: noSrc }, () => {
  // fold() removes marks, not word tokens, so a missing `un` survives every
  // fold and IS testable in writing. It is NOT reliably testable by ear: a
  // four-word sentence missing one short word still scores close through the
  // similarity blend in score.ts.
  const ARTICLE = /Je suis (un ingénieur|une infirmière)/;
  const spoken: unknown[] = [S('s21-deliver'), S('s20-interview'), ...QQ().filter((q) => q.format === 'speak')];
  for (const s of spoken) {
    ok(!ARTICLE.test(textOf(s)), 'a spoken surface turns on the presence or absence of un');
  }
  // And it IS on a written one.
  ok(QQ().some((q) => q.format === 'errorSpot' && ARTICLE.test(q.prompt ?? '')), 'the article is never tested in writing');
});

test('the article form is NEVER presented as correct', { skip: noSrc }, () => {
  // FOUND BY MUTATION. The check above only guarded SPOKEN surfaces, so an
  // `examples` entry or a cardDeck card could teach `Je suis un ingénieur.` as
  // a model sentence and every test still passed. a1.06's rule would have been
  // contradicted by its own dependent.
  //
  // The article form is legal ONLY in a field that marks it as the error.
  const WRONG_FIELDS = new Set(['wrong', 'promptSound', 'promptSay', 'prompt', 'opts', 'options']);
  const ARTICLE = /\bJe suis (un|une) \p{L}+/u;
  for (const s of SECTIONS) {
    for (const { key, s: str } of keyed(s)) {
      if (!ARTICLE.test(str)) continue;
      ok(WRONG_FIELDS.has(key), `${s.id}: the article form sits under "${key}", which presents it as correct: "${str.slice(0, 60)}"`);
    }
  }
  // And no authored corpus row may carry it at all.
  ok(!ROWS.some((r) => ARTICLE.test(r.fr)), 'an authored row carries the article form');
});

test('s15-trap is STEPPED, gated, and carries no size', { skip: noSrc }, () => {
  const t = S('s15-trap') as Any as { steps?: Array<{ kind: string; gate?: boolean }>; size?: string; cards: unknown[]; drill: unknown[] };
  ok(t.steps, 'the trap is stacked, which hides the gate, the audio and the sub-mission number');
  deepStrictEqual(t.steps!.map((x) => x.kind), ['rule', 'cards', 'audio', 'drill']);
  strictEqual(t.steps!.find((x) => x.kind === 'drill')?.gate, true, 'the drill step is not gated');
  strictEqual(t.size, undefined, 'size comes OFF a stepped trapDrill');
  // §13: `Je suis ingénieur.` and `Je suis un ingénieur.` sit side by side
  // exactly ONCE, here, and not in a teaching section.
  ok(textOf(t).includes('Je suis un ingénieur.') && textOf(t).includes('Je suis ingénieur.'));
});

test('s16-errors carries swipe and lg, or it draws nothing', { skip: noSrc }, () => {
  // Without swipe this falls through the shared fallthrough. Two blank missions
  // have shipped from exactly this: sons.08 mission 22 and a1.01 mission 5.
  const e = S('s16-errors') as Any as { swipe?: boolean; size?: string; errors: unknown[] };
  strictEqual(e.swipe, true);
  strictEqual(e.size, 'lg');
  strictEqual(e.errors.length, 5);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  6. PRODUCTION SURFACES
 * ══════════════════════════════════════════════════════════════════════════ */

test('the scenario runs the four moves as four CONSECUTIVE learner turns', { skip: noSrc }, () => {
  const sc = S('s20-interview') as Any as { turns: Array<{ ai: string; en: string; user: string; userEn?: string; alts?: unknown[] }> };
  strictEqual(sc.turns.length, 6, 'six turns is the seed maximum anywhere, and the whole budget');
  for (const [i, t] of sc.turns.entries()) {
    ok(t.userEn, `turn ${i} carries no userEn`);
    ok(t.ai && t.user, `turn ${i} is incomplete`);
  }
  // Turns 3 to 6 are the four moves, consecutive and uninterrupted.
  const moves = sc.turns.slice(2);
  strictEqual(moves.length, 4);
  for (const [i, t] of moves.entries()) {
    ok((t.alts ?? []).length >= 2, `move turn ${i + 1} carries fewer than two alts`);
    ok((t.alts ?? []).length <= 4, `move turn ${i + 1} carries more than four alts`);
    ok((t.userEn as string).includes(`Move ${i + 1}`), `turn ${i + 3} is not labelled as move ${i + 1}`);
  }
  // The interviewer's turns between the moves are a nod and nothing more.
  for (const t of sc.turns.slice(3)) {
    ok(t.ai.split(/\s+/).length <= 3, `an interviewer turn between the moves is not a nod: "${t.ai}"`);
  }
});

test('exactly one quiz and exactly one scenario', { skip: noSrc }, () => {
  // A second quiz is silently never rendered. And this unit is NOT device-gated
  // (collation §1.10 corrected): it uses one each of scene, scenario, reading
  // and dictation, so it does not need blocking step 4.
  strictEqual(SECTIONS.filter((s) => s.type === 'quiz').length, 1);
  strictEqual(SECTIONS.filter((s) => s.type === 'scenario').length, 1);
  for (const t of ['scene', 'reading', 'dictation'] as const) {
    strictEqual(SECTIONS.filter((s) => s.type === t).length, 1, `repeated ${t} is device-untested`);
  }
});

test('every quiz question carries why and a ref that resolves', { skip: noSrc }, () => {
  const ids = new Set(SECTIONS.map((s) => s.id));
  for (const q of QQ()) {
    ok(q.why, `a question carries no why: ${String(q.q)}`);
    ok(q.ref && ids.has(q.ref), `ref does not point at a section in this lesson: ${String(q.ref)}`);
  }
  strictEqual(QQ().length, 15);
});

test('the quiz spreads its correct answers', { skip: noSrc }, () => {
  // quiz-spread caps any one option slot at 40% of the correct answers.
  const closed = QQ().filter((q) => typeof q.correct === 'number');
  const tally = new Map<number, number>();
  for (const q of closed) tally.set(q.correct as number, (tally.get(q.correct as number) ?? 0) + 1);
  for (const [slot, n] of tally) {
    ok(n / closed.length <= 0.4, `slot ${slot} holds ${n}/${closed.length} of the correct answers`);
  }
});

test('every dictée item carries the dictation drill', { skip: noSrc }, () => {
  const d = S('s19-dictation') as Any as { itemIds: string[] };
  const byId = new Map(ROWS.map((r) => [r.id, r]));
  for (const id of d.itemIds) {
    const row = byId.get(id);
    ok(row, `${id} is not an authored row`);
    ok((row!.drills ?? []).includes('dictation'), `${id} does not carry the dictation drill`);
  }
});

test('the listening section hides its lines and stands alone', { skip: noSrc }, () => {
  // The band's one funded engineering item, and it HAS landed
  // (MissionRich.tsx:1976-1988). Without it ListeningView prints both fr AND en
  // beside the play dot, so every listening section is answerable by reading.
  const l = S('s12-listen') as Any as { hideLines?: boolean; lines: Array<{ fr: string }>; questions: Array<{ why?: string }> };
  strictEqual(l.hideLines, true);
  strictEqual(l.lines.length, 6);
  // Collation §7.2: a2.35 will lift these into a mixed-situation CO set, so no
  // line may lean on this lesson's framing. A crude assertion; the point is
  // that the next person reads the rule.
  for (const line of l.lines) {
    ok(!/\b(ça|cela|celui|celle|ce truc)\b/i.test(line.fr), `a line leans on a referent only this lesson has: "${line.fr}"`);
  }
  for (const q of l.questions) ok(q.why, 'a listening question explains nothing');
  // One question's correct answer is the repair move, cited to a2.07.
  ok(namesUnitLabel(textOf(l), 'a2.07'), 'the repair question does not cite a2.07');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  7. LAYOUT, HOUSE STYLE AND REACHABILITY
 * ══════════════════════════════════════════════════════════════════════════ */

test('no table sits at layer core, and the sheet uses table and no cheatSheet', { skip: noSrc }, () => {
  for (const s of SECTIONS) {
    ok(!(s.type === 'table' && (s as Any).layer === 'core'), `${s.id}: a table at layer core is a density failure`);
  }
  const sheet = SHEETS[0];
  ok(sheet, 'the reference sheet is missing');
  strictEqual((sheet as Any).layer, 'deep');
  ok(sheet.sections.some((s) => s.type === 'table'), 'the sheet draws no table');
  // Inside a sheet render mode a cheatSheet draws its TITLE AND NOTHING ELSE.
  // a1.13 and a1.17 both ship that defect today.
  ok(!sheet.sections.some((s) => s.type === 'cheatSheet'), 'a cheatSheet in a sheet draws nothing');
});

test('the reframe appears verbatim in at least three sections', { skip: noSrc }, () => {
  strictEqual(L.reframe, C.REFRAME);
  const hits = SECTIONS.filter((s) => strs(s).some((x) => x.includes(C.REFRAME as string)));
  ok(hits.length >= 3, `reframe appears in ${hits.length} section(s), needs 3`);
});

test('house style: no em dash, no honest, no claim the app scored anything', { skip: noSrc }, () => {
  const all = ALL();
  ok(!/—/.test(all), 'an em dash in authored copy');
  // The band's existing guard is a `\bhonest` pattern and it CANNOT SEE
  // "dishonest". a2.06 found that hole. This one is a plain substring test in
  // both directions and is deliberately NOT word-bounded.
  for (const b of C.BANNED_SUBSTRINGS as string[]) {
    ok(!all.toLowerCase().includes(b), `authored copy contains "${b}"`);
  }
  // `monologue` is not funded. No card may promise a recording, a countdown, a
  // score or feedback.
  for (const c of C.FORBIDDEN_CLAIMS as string[]) {
    ok(!all.toLowerCase().includes(c.toLowerCase()), `claims something the app cannot deliver: "${c}"`);
  }
});

test('no learner-facing surface carries grammatical jargon', { skip: noSrc }, () => {
  // Corrections §9 and §13: the walk covers intro and overview as well as the
  // sections, which is what a2.11 found the hard way.
  const all = ALL().toLowerCase();
  for (const j of C.JARGON as string[]) {
    ok(!all.includes(j), `jargon on a learner-facing surface: "${j}"`);
    ok(!all.includes(`${j}s`), `jargon (plural) on a learner-facing surface: "${j}s"`);
  }
});

test('nothing addressed to the learner agrees with a man', { skip: noSrc }, () => {
  // FOUND BY SELF-AUDIT, twice. The scenario opened `Merci d'être venu.` and
  // fr.a2.metiers.049 asked `Vous préférez travailler seul ou en équipe ?`.
  // Both are the interviewer speaking TO THE LEARNER, so half of them were
  // handed a participle or adjective that does not agree with them — by the one
  // unit in this band that owns feminine forms and teaches them in act 3.
  //
  // Scoped to the OTHER party's voice and to second-person surfaces. A learner
  // model sentence may of course be masculine: `Je suis ingénieur.` is one of
  // four, and `Je suis infirmière.` is another.
  const AGREES_MASC = /\b(seul|content|prêt|sûr|inscrit|venu|allé|assis|fatigué|payé|embauché|licencié|reçu|attendu)\b(?!e)/;
  for (const r of ROWS) {
    if (r.voice !== 'other') continue;
    ok(!AGREES_MASC.test(r.fr), `${r.id} addresses the learner and agrees with a man: « ${r.fr} »`);
  }
  const sc = S('s20-interview') as Any as { turns: Array<{ ai: string }> };
  for (const t of sc.turns) {
    ok(!AGREES_MASC.test(t.ai), `an interviewer turn agrees with a man: « ${t.ai} »`);
  }
});

test('no elision is written as a bare space', { skip: noSrc }, () => {
  // FOUND BY SELF-AUDIT. A cardDeck body read « heavier than s occuper de »,
  // because the string was single-quoted in TypeScript and the apostrophe was
  // dropped rather than the quoting changed. It renders exactly as written.
  const ELIDED = /\b(s|j|l|d|c|n|m|t|qu)\s+(occup|ai|hôp|équip|est|avez|aime|ouvert|entend|écri|embauch)/i;
  for (const s of SECTIONS) {
    for (const str of strs(s)) {
      ok(!ELIDED.test(str), `${s.id}: an elision is written with a space: "${str.slice(0, 70)}"`);
    }
  }
  for (const r of ROWS) ok(!ELIDED.test(r.fr), `${r.id}: an elision is written with a space`);
});

test('the lesson never contradicts the feminisation rule it owns', { skip: noSrc }, () => {
  // FOUND BY SELF-AUDIT. s06-jobwords told the learner « Une plombière is rare.
  // Most say une plombier. » while §5 rule 3 sends -ier to -ière and s11-fem's
  // closing card says to build it the ordinary way. Seven other units are bound
  // to that rule, so a hedge inside this lesson is the worst place to put one.
  //
  // No learner-facing surface may present `une` + a masculine job form as the
  // feminine. Checked by shape rather than by a list of words.
  const HEDGE = /\bune (plombier|ingénieur|professeur|vendeur|serveur|coiffeur|caissier|infirmier|boulanger|facteur|traducteur|jardinier|ouvrier|mécanicien|pâtissier|informaticien|pharmacien|électricien)\b/;
  for (const s of SECTIONS) {
    for (const str of strs(s)) {
      ok(!HEDGE.test(str), `${s.id}: presents a masculine form behind « une »: "${str.slice(0, 70)}"`);
    }
  }
});

test('no section declares more than three term chips', { skip: noSrc }, () => {
  // MissionSection caps the chips shown at THREE; a fourth pushes content down.
  for (const s of SECTIONS) {
    const t = (s as Any).terms as string[] | undefined;
    ok((t ?? []).length <= 3, `${s.id} declares ${(t ?? []).length} term chips`);
    for (const k of t ?? []) ok(k in (L.terms as Any), `${s.id} names an undefined term: ${k}`);
  }
});

test('every authored row is reachable, and every act claims its sections', { skip: noSrc }, () => {
  // Doctrine §E. `flashcards` and `reviewDeck` were dropped from the tail —
  // nothing enforces them — so every authored row must be released by a
  // tranche or the lesson ships rows no learner can reach.
  const released = new Set(TRANCHE.flat());
  for (const r of ROWS) ok(released.has(r.id), `${r.id} is authored and never released`);
  strictEqual(TRANCHE.length, (L.acts as unknown[]).length, 'one tranche slice per act');
  const claimed = (L.acts as Array<{ sections: string[] }>).flatMap((a) => a.sections);
  deepStrictEqual([...claimed].sort(), SECTIONS.map((s) => s.id).sort(), 'an act claims a ghost, or a section is unclaimed');
  strictEqual(new Set(claimed).size, claimed.length, 'a section is claimed by two acts');
});

test('every respelling survives the real nasal checker', { skip: noSrc }, () => {
  // Imported and run for real, not eyeballed. hasPlainNasalFor has three known
  // blind spots and one of them is about the French rather than the respelling,
  // so a pass here is a floor and not a proof.
  const table: Array<{ id: string; fr: string; respell: string }> = ROWS
    .filter((r) => r.respell)
    .map((r) => ({ id: r.id, fr: r.fr, respell: r.respell as string }));
  ok(table.length >= 20, 'the respelled set shrank; re-check the corpus');
  for (const row of table) {
    ok(!hasPlainNasalFor(row.fr, row.respell), `${row.id} closes a nasal with a plain n/m: ${row.respell}`);
  }
});

test('the band other-voice mandate is met, measured not asserted', { skip: noSrc }, () => {
  // Collation §1.5: at least 40 percent of newly authored rows must be in the
  // voice of the person the learner is talking to. The nouns of work are
  // finished; the QUESTIONS of work did not exist.
  const other = ROWS.filter((r) => r.voice === 'other').length;
  const ratio = other / ROWS.length;
  ok(ratio >= (C.OTHER_VOICE_FLOOR as number), `only ${(ratio * 100).toFixed(1)}% of authored rows are in the other party's voice`);
});

test('the id block is contiguous and inside the range that was requested', { skip: noSrc }, () => {
  const nums = ROWS.map((r) => Number(r.id.split('.').pop()));
  const lo = Math.min(...nums), hi = Math.max(...nums);
  ok(lo >= (C.ID_FIRST as number), `an id landed below the block: ${lo}`);
  ok(hi <= (C.ID_LAST as number), `an id landed above the block: ${hi}`);
  strictEqual(new Set(nums).size, nums.length, 'a duplicate id');
  // VERIFY BY ROW COUNT, NOT BY HIGHEST ID. a1.19 and a1.20 collided because a
  // highest-id check cannot see a concurrent lesson landing BELOW the top.
  strictEqual(ROWS.length, 68, 'the authored row count moved');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  8. ONCE PUBLISHED — inert until the merge lands
 * ══════════════════════════════════════════════════════════════════════════ */

test('once merged, the seed copy is the authored copy', () => {
  const s = seed as Any as { lessons: Array<Any & { id: string }>; items: Array<{ id: string }>; units: Array<{ id: string; lessonIds?: string[] }> };
  const shipped = s.lessons.find((l) => l.id === LESSON_ID);
  if (!shipped || noSrc) return;   // not merged yet; the invariants above still ran
  /* DEEP-EQUAL IGNORING KEY ORDER, not a JSON string compare.
   *
   * This read `strictEqual(JSON.stringify(shipped), JSON.stringify(L))` and went
   * green for weeks, because until v51 nobody had run `content:publish` since it
   * was written. A publish REGENERATES seed.json from the database rather than
   * carrying the merge's copy, and the generator normalises: key order changes,
   * and empty arrays like `grammarPoints: []` are omitted rather than written.
   * 667 item bodies changed that way in v51 and not one of them changed content.
   *
   * So a byte comparison against the seed asserts the serialiser, not the
   * lesson. What this test is for is drift in the CONTENT, and that is what it
   * compares now. */
  const sortDeep = (v: unknown): unknown => (Array.isArray(v) ? v.map(sortDeep)
    : (v && typeof v === 'object')
      ? Object.fromEntries(Object.keys(v as object).sort()
        .map((k) => [k, sortDeep((v as Record<string, unknown>)[k])])
        .filter(([, x]) => x !== undefined))
      : v);
  strictEqual(JSON.stringify(sortDeep(shipped)), JSON.stringify(sortDeep(L)),
    'the seed copy has drifted from the authored source (compared ignoring key order and undefined)');
  const ids = new Set(s.items.map((i) => i.id));
  for (const id of L.itemIds as string[]) ok(ids.has(id), `${id} is referenced and not in the seed, so its card renders empty`);
  const unit = s.units.find((u) => u.id === UNIT_ID);
  ok(unit?.lessonIds?.includes(LESSON_ID), 'the unit row does not claim the lesson');
  deepStrictEqual((unit as Any).themes, ['metiers'], 'the unit themes were re-mapped, and this unit needs no re-map');
});
