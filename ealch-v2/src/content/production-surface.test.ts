// THREE GUARDS THAT WERE WRITTEN FOR ONE LESSON AND BELONG TO ALL OF THEM.
//
// a2.08's build and audit produced three checks that caught real, shipped
// defects, and every one of them lived in a2-08-comparatifs.test.ts where it
// protected exactly one lesson out of seventy-four. This file is the backport.
//
// ── Why a seed-wide file rather than thirty edits ─────────────────────────
//
// A per-lesson copy of a guard is a guard that drifts: `A2-BRIEF-CORRECTIONS`
// §9 exists because four holes were copied into eleven suites before anyone
// noticed. One file that walks every lesson cannot drift, and a new lesson is
// covered the day it lands rather than the day somebody remembers.
//
// ── Every waiver here was MEASURED, not guessed ────────────────────────────
//
// Each rule was run over the whole seed before it was written, and the
// exceptions below are what the corpus actually does today. A rule with an
// unexplained waiver list is a rule nobody trusts, so every entry says why it
// is legitimate. If one turns out not to be, the fix is to fix the content and
// delete the entry — never to widen the rule.
//
// ── What each rule caught, so nobody deletes one as theoretical ────────────
//
//   1. a2.08 moved a corpus row out from under the card that displayed it and
//      every one of 33 guards stayed green. Required layout 1 was destroyed.
//   2. a2.08 shipped `celle` in a scenario alt, which is a2.33's material, one
//      seq ahead.
//   3. a2.08 asked the learner to SAY « Je dormirais mieux dans le second. »
//      The conditional is B1 and arrives nowhere in the 35-unit A2 trail.

import { test } from 'node:test';
import { ok, deepStrictEqual } from 'node:assert';
import seed from './seed.json' with { type: 'json' };

type Row = { id: string; fr: string };
type Sec = Record<string, unknown> & { type: string; id?: string };
type Lsn = Record<string, unknown> & { id: string; unitId?: string; level?: string; sections: Sec[] };

const lessons = seed.lessons as unknown as Lsn[];
const byId = new Map((seed.items as unknown as Row[]).map((i) => [i.id, i]));
const unitSeq = new Map((seed.units as Array<{ id: string; seq?: number | string }>).map((u) => [u.id, Number(u.seq)]));

const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};
/** The house boundary, with the apostrophe dropped on the left so it can see
 *  `qu'il` and `d'un` (Corrections §14.3). */
const hasWord = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu').test(hay);
/** Accent- and punctuation-insensitive containment, so `l'école` inside a row
 *  matches a card that writes `l’école`. */
const fold = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]/g, '');

ok(lessons.length > 60, `only ${lessons.length} lessons in the seed, which is too few to be real`);

/* ═══════════════════════════════════════════════════════════════════════════
 *  1. A CARD MUST SAY WHAT THE ROW IT NAMES SAYS
 *
 *  A `groupDrill` item carries BOTH an `itemId` and its own `fr`, so the French
 *  on screen is a SECOND COPY of the row behind it and the two can walk apart
 *  in silence. a2.08's mutation harness proved the consequence: moving
 *  `fr.a2.comparaisons.134` from « Il est moins grand que moi. » to « ... moins
 *  rapide ... » destroyed the one thing its required layout 1 existed for, and
 *  every guard in that build stayed green.
 *
 *  THE RULE IS CONTAINMENT, NOT EQUALITY, and that is measured rather than
 *  lenient. 18 of 1,085 items across six lessons deliberately show the FORM
 *  being drilled while the itemId points at a whole sentence — `je suis` joined
 *  to « Je suis ici pour la conférence. » is a1.06 drilling the paradigm, and
 *  that is right. What is never right is a card whose text is not in the row at
 *  all, which is what drift looks like.
 * ═══════════════════════════════════════════════════════════════════════════ */

/** MEASURED 2026-08-17: one item in the whole seed fails containment, and it is
 *  legitimate. a1.24 drills the singular against the plural, so the card is
 *  `les dents` and the row it scores against is `la dent`. */
const CARD_ROW_WAIVERS = new Set(['a1.24.l1|s10-contract|fr.a1.corps.021']);

test('every groupDrill card says what the row it names says', () => {
  const bad: string[] = [];
  let checked = 0;
  for (const L of lessons) {
    for (const s of L.sections ?? []) {
      for (const g of (s.groups ?? []) as Array<{ items?: Array<{ itemId?: string; fr?: string }> }>) {
        for (const it of g.items ?? []) {
          if (!it.itemId || !it.fr) continue;
          checked++;
          const key = `${L.id}|${s.id}|${it.itemId}`;
          if (CARD_ROW_WAIVERS.has(key)) continue;
          const row = byId.get(it.itemId);
          if (!row) { bad.push(`${key} names an id that is not in the seed`); continue; }
          if (!fold(row.fr).includes(fold(it.fr))) {
            bad.push(`${key}\n      card: "${it.fr}"\n      row:  "${row.fr}"`);
          }
        }
      }
    }
  }
  ok(checked > 900, `only ${checked} itemId-carrying group items were checked, which is too few to be real`);
  deepStrictEqual(bad, [], `a card and the row it names have walked apart:\n    ${bad.join('\n    ')}`);
});

test('the card-to-row rule fires on drift and spares a form drilled from a sentence', () => {
  // A guard that cannot fail is worse than no guard. Both directions, on the
  // real shapes: the first is a2.08's mutation, the second is a1.06's paradigm.
  ok(!fold('Il est moins rapide que moi.').includes(fold('Il est moins grand que moi.')), 'the rule cannot see a2.08\'s drift');
  ok(fold('Je suis ici pour la conférence.').includes(fold('je suis')), 'the rule forbids a1.06 drilling a form from a sentence');
  ok(fold("Je suis à l'école.").includes(fold('à l’')), 'the rule cannot match across a curly apostrophe');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  2. a2.33 OWNS THE DEMONSTRATIVE PRONOUNS
 *
 *  `celui`, `celle`, `ceux`, `celles` and their `-ci`/`-là` forms are seq 33's
 *  material. a2.08 shipped `celle du premier` in a scenario alt, which is a
 *  line the learner may say, one seq before the lesson that teaches it.
 *
 *  `ce`, `cette` and `ces` are demonstrative ADJECTIVES, which a1 owns and
 *  which appear in hundreds of rows. A guard that caught them would forbid half
 *  the corpus, so it is scoped to the pronouns by name.
 * ═══════════════════════════════════════════════════════════════════════════ */

const DEM_PRONOUNS = ['celui', 'celle', 'ceux', 'celles'];
const DEM_UNIT_SEQ = 33;

/** MEASURED 2026-08-17: three A2 lessons carry one and all three are fixed or
 *  relative uses rather than the paradigm a2.33 teaches. Named so a fourth
 *  fails and these three do not silently license it. */
const DEM_WAIVERS = new Set([
  'a2.04.l1',   // « Celui qui ne fait rien » — a proverb, quoted whole
  'a2.21.l1',   // « Celui qu'on entend » — a relative, not a contrast between two things
  'a2.27.l1',   // « Celui de neuf heures, s'il vous plaît. » — the train, and a2.27 owns the counter
]);

test('no A2 lesson before seq 33 puts a demonstrative pronoun on a learner surface', () => {
  const bad: string[] = [];
  for (const L of lessons) {
    if (String(L.level ?? '') !== 'a2') continue;
    const seq = unitSeq.get(String(L.unitId)) ?? 99;
    if (seq >= DEM_UNIT_SEQ) continue;
    if (DEM_WAIVERS.has(L.id)) continue;
    const lines = strs(L.sections);
    for (const d of DEM_PRONOUNS) {
      const hit = lines.find((x) => hasWord(x, d) || hasWord(x, `${d}-ci`) || hasWord(x, `${d}-là`));
      if (hit) bad.push(`${L.id} (seq ${seq}) "${d}" in: ${hit.slice(0, 70)}`);
    }
  }
  deepStrictEqual(bad, [], `a demonstrative pronoun before a2.33 teaches it:\n    ${bad.join('\n    ')}`);
});

test('the demonstrative rule spares the ADJECTIVES, which a1 owns', () => {
  for (const s of ["Cette rue est moins longue que l'avenue.", 'Ce livre est aussi intéressant que le film.',
    'Ce sont les plus grands jardins du quartier.', 'Ces exercices sont plus faciles que les précédents.']) {
    ok(!DEM_PRONOUNS.some((d) => hasWord(s, d)), `the rule fires on a demonstrative adjective: "${s}"`);
  }
  ok(DEM_PRONOUNS.some((d) => hasWord('Non, celle du premier est plus petite.', d)), 'the rule cannot see what a2.08 shipped');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  3. NO TENSE THE LEARNER DOES NOT HAVE, ON A SURFACE THEY PRODUCE
 *
 *  Doctrine §B.3 permits a CORPUS sentence to use a tense the lesson body does
 *  not teach: the theme is shared across the level. A scenario turn is not a
 *  corpus sentence. It is a line the learner is asked to say, and `alts` are
 *  lines they may say instead.
 *
 *  TWO THINGS MAKE THIS SAFE AND BOTH WERE MEASURED.
 *
 *  `je voudrais` IS NOT THE CONDITIONAL. It is the fixed polite form, taught as
 *  lexis at A1, and it accounts for 24 of the 25 matches a naive shape finds
 *  across A2. Stripped before the test, not waived after it.
 *
 *  AND THE SHAPE ITSELF WAS WRONG WHEN IT ARRIVED. a2.08 shipped a subjunctive
 *  pattern with `\s*` before the verb, which let it split a word: `avait`
 *  matched as av+ait and `serait` as ser+ait, so it would have fired on a2.32's
 *  scenario and a2.29's trap the day anyone reused it. Requiring whitespace
 *  fixes it, and both sentences are in the spare-list below.
 * ═══════════════════════════════════════════════════════════════════════════ */

/** Fixed polite forms, stripped before the tense shapes run. These are lexis a
 *  learner is handed whole, not a tense they are being asked to build. */
const LEXICAL_CONDITIONAL = /(?<![\p{L}\p{N}-])(voudrai(s|t)|voudrions|voudriez|voudraient|pourrai(s|t)|aimerai(s|t)|saurai(s|t))(?![\p{L}\p{N}'’-])/giu;

/** And the subjunctive's own fixed phrases. `pas que je sache` is "not that I
 *  know of", handed to the learner whole in a2.28's consultation, and it is the
 *  only one in the band. Stripped rather than waived by section id, because a
 *  section-level waiver would blind `s10-consult` to a real subjunctive later.
 *  MEASURED 2026-08-17: this is the one occurrence in A2. */
const LEXICAL_SUBJUNCTIVE = /(?<![\p{L}\p{N}-])(pas )?que je sache(?![\p{L}\p{N}'’-])/giu;

/** Anchored on a French SUBJECT PRONOUN, never on the ending alone.
 *  Corrections §14.4: a shape built out of French morphology reads the English
 *  as French, and `-rait` sits inside `portrait`. */
const CONDITIONAL = /(?<![\p{L}\p{N}-])(je|tu|il|elle|on|nous|vous|ils|elles)\s+\w*(rais|rait|rions|riez|raient)(?![\p{L}\p{N}'’-])/iu;
const SUBJUNCTIVE = /(?<![\p{L}\p{N}-])(que|qu['’])[\p{L}\p{N}'’ -]{0,24}?\s+(soit|soient|sois|ait|aies|aient|puisse|puisses|puissent|fasse|fasses|fassent|aille|ailles|sache|sachent|veuille|veuillent)(?![\p{L}\p{N}'’-])/iu;

const PRODUCTION = new Set(['scenario', 'practice', 'dictation', 'quiz', 'groupDrill', 'trapDrill']);

/** MEASURED 2026-08-17, after the fixed forms are stripped: one line in the
 *  whole A2 band, and it is a2.07's restaurant order. `Je prendrais plutôt le
 *  poulet.` is the polite ordering formula in the lesson that owns ordering,
 *  and it sits beside `je voudrais` on the same card. Named rather than folded
 *  into LEXICAL_CONDITIONAL, because `prendre` is a full verb elsewhere and
 *  exempting it wholesale would blind the rule. */
const TENSE_WAIVERS = new Set(['a2.07.l1|s25-quiz']);

test('no A2 production surface uses the conditional or the subjunctive', () => {
  const bad: string[] = [];
  for (const L of lessons) {
    if (String(L.level ?? '') !== 'a2') continue;
    for (const s of L.sections ?? []) {
      if (!PRODUCTION.has(s.type)) continue;
      if (TENSE_WAIVERS.has(`${L.id}|${s.id}`)) continue;
      for (const x of strs(s)) {
        const stripped = x.replace(LEXICAL_CONDITIONAL, 'X').replace(LEXICAL_SUBJUNCTIVE, 'X');
        if (CONDITIONAL.test(stripped)) bad.push(`${L.id} ${s.id} conditional: "${x.slice(0, 74)}"`);
        else if (SUBJUNCTIVE.test(stripped)) bad.push(`${L.id} ${s.id} subjunctive: "${x.slice(0, 74)}"`);
      }
    }
  }
  deepStrictEqual([...new Set(bad)], [],
    `an A2 lesson asks the learner to produce a tense the A2 trail never teaches:\n    ${[...new Set(bad)].join('\n    ')}`);
});

test('the tense rule fires on what shipped and spares the fixed forms and the English', () => {
  // Fires on the real defect.
  ok(CONDITIONAL.test('Je dormirais mieux dans le second.'), 'cannot see the line a2.08 asked the learner to say');
  ok(CONDITIONAL.test('Bon. Et si tu devais choisir, tu prendrais lequel ?'), 'cannot see the prompt beside it');
  ok(SUBJUNCTIVE.test('Il faut que ce soit plus grand.'), 'cannot see the commonest subjunctive shape there is');
  // Spares the fixed polite form, which is 24 of 25 matches across A2.
  ok(!CONDITIONAL.test('Je voudrais un aller-retour pour Nantes.'.replace(LEXICAL_CONDITIONAL, 'X')), 'fires on `je voudrais`, which is A1 lexis');
  // Spares the two the first version of this shape got wrong by splitting a word.
  ok(!SUBJUNCTIVE.test('Que le code avait expiré. Super.'), 'splits `avait` into av+ait, which is a2.32 content');
  ok(!SUBJUNCTIVE.test("Est-ce que ce serait possible d'avoir une autre chambre ?"), 'splits `serait`, which is a2.29 content');
  // Spares the English half of a learner surface, and ordinary A2 French.
  for (const s of ['The first is nicer, quite simply.', 'A portrait of the frame, and it never moves.',
    'Il est plus grand que moi.', "C'est la question la plus difficile de l'examen.",
    'On dort mieux dans le second, il est plus calme.']) {
    ok(!CONDITIONAL.test(s) && !SUBJUNCTIVE.test(s), `fires on legitimate content: "${s}"`);
  }
});
