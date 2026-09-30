// b2.21.l1 « Les négations combinées »: the authored corpus, the imports and
// the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as
// b2.15 cause-consequence and b2.16 concession-avancee), under the B2 rules of
// B2-BUILD-LOG.md (form, meaning, choice, text).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// The slug is `negations-combinees` ON PURPOSE: B1 lesson 20 owns
// `negation-avancee` (scripts/data/b1/negation-avancee-*). Never rename one to
// the other.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 21 of the B2 trail, the last of Unit 3
// ══════════════════════════════════════════════════════════════════════════
//
//   COMBINING NEGATIVE WORDS LEGITIMATELY, PLACING THEM, CHOOSING THEIR
//   REGISTER, AND SAYING EXACTLY WHAT IS DENIED. B1 lesson 20 taught every
//   negative word one by one, their place in the passé composé and before an
//   infinitive, and a first look at plus jamais rien (its act 8). This lesson
//   starts where that act stopped:
//
//     l'ordre           plus, then jamais, then rien / personne / aucun /
//                       nulle part / ni… ni / que; plus aucun, plus ni… ni,
//                       plus nulle part, plus jamais personne, jamais aucun;
//                       jamais plus (soutenu); rien de + adjectif, personne
//                       d'autre (act 2)
//     le participe      each word keeps its own place in a combination: je
//                       n'ai plus jamais rien signé, je n'ai plus vu personne,
//                       je n'ai jamais vu personne entrer, je n'ai rien vu de
//                       suspect, je n'en ai plus reçu aucune; with a modal (je
//                       n'ai rien pu faire) (act 3)
//     l'infinitif       ne plus rien dire, ne plus voir personne, ne plus
//                       jamais rien commander; n'avoir rien vu / ne rien avoir
//                       vu (lesson 14 in B2); sans + rien / personne / aucun /
//                       jamais / plus rien, never « sans ne » (act 4)
//     pas reste dehors  the ban on stacking pas with another negative word;
//                       « ce n'est pas rien » (it matters), the one fixed
//                       exception; pas… non plus against moi aussi; the legit
//                       company of pas (pas un seul, pas du tout, pas encore)
//                       (act 5)
//     le sujet          personne ne, rien ne, aucun… ne, nul ne (soutenu), ni…
//                       ni… ne with the plural, plus personne ne, jamais
//                       personne ne; personne n'a rien vu; never pas, and ne
//                       never dropped in writing (act 6)
//     la restriction    ne… plus que, ne… jamais que, ne… guère que
//                       (soutenu); plain ne… que and ne… pas que (not only)
//                       are lesson 19 in B2: pas que is only RECALLED here, as
//                       the contrast that says « pas seulement » (act 7)
//     le soutenu        ne… guère, ne… plus guère, ne… nullement / aucunement,
//                       ne… point (literary, recognition), ne alone with
//                       savoir, pouvoir, oser, cesser; si je ne me trompe;
//                       point n'est besoin (recognition) (act 8)
//     la portée         je ne vous ai pas demandé de… / je vous ai demandé de
//                       ne pas…; je ne pense pas qu'il ait… / je pense qu'il
//                       n'a pas…; pas tous / tous… ne… pas / aucun; toujours
//                       pas / pas toujours; pas tout / rien; the negated cause
//                       (act 9)
//     le ne qui ne nie  the ne explétif is NOT a negation (lesson 18 in B2 owns
//     pas, le ne qui    it: cited, never re-taught); je crains qu'il ne… /
//     tombe             qu'il ne… pas; the dropped ne in speech, named as
//                       spoken (gate B2-2 decision), and plus [ply] / [plys]
//                       (act 10)
//     la lettre         the DELF B2 production écrite: a formal statement
//                       contesting an invoice or an accusation (act 11)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 20 in B1   every negative word, its place, the first
//                       combinations (reframe quoted; rows .1007, .1065,
//                       .1066, .1075, .1080, .1093, .1094, .1102, .1123,
//                       .1125, .1126, .1131, .1136, .1139, .1141, .1142,
//                       .1143, .1144, .1147, .1157, .1159, .1173, .1174,
//                       .1177, .1189, .1192, .1197)
//     lesson 14 in B2   the infinitive negation (reframe quoted; rows
//                       faits-et-procedures .1227, .1277, .1300)
//     lesson 6 in B2    je ne crois pas que + subjonctif (row opinions-et-avis
//                       .1826)
//     lesson 11 in B2   lui non plus (rows pronoms-essentiels .1855, .1910)
//     lesson 16 in B2   aucun inside a concession (rows connecteurs-logiques
//                       .2004, .2133, .2197)
//     lesson 9 in B2    the ne explétif in a literary subjunctive (row
//                       litterature .1254, recognition)
//     lesson 5 in B2    craindre que without ne (row emotions .1273)
//     lesson 26 in B2   je crains que… ne… pas, a real negation (row affaires
//                       .1278)
//     lesson 25 in B2   pas tous in a listening strategy (row
//                       strategies-de-comprehension .1609)
//     lessons 1, 15 B2  recycling only (rows recits-au-passe .1640,
//                       connecteurs-logiques .1944)
//     lessons 18, 19 B2 the ne explétif and plain ne… que: written in
//                       parallel, cited by number only, no row named
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check done read-only on 2026-09-30
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `negation-et-restriction` (fondations, a1-b2). Sub-theme « les
//     négations combinées » is already in Postgres (read back 2026-09-30,
//     beside « la restriction et l'exception »). Nothing to create.
//
//  2. ID BLOCK: `.1400`-`.1599`, assigned by the brief (fr.b1 .001-.283 and
//     .1000-.1199 are B1, fr.b2 .001-.053 are published DB rows, .1200-.1399
//     is lesson 19 in B2 written in parallel). A read-only probe on
//     2026-09-30 found NO row at .1400-.1599 at any level of this theme.
//     Authored: `.1400`-`.1599`, with gaps between act blocks (see the act
//     banners). Nothing outside it.
//
//  3. NO VOCAB-TYPE NON-SENTENCE ROW is authored, so the flashcard hub's
//     headword rule (theme + headword) cannot clash with b1.20's phrase rows
//     (« plus jamais », « nulle part », « ne ... guère », « en aucun cas »).
//     Every row is a sentence, a gapfill card or a rule card.
//
//  4. REUSED ROWS. The seed plus packs (22,082 items, read 2026-09-30) were
//     probed with real orthography for every combination in this lesson.
//     On-topic rows are reused BY ID (§F), never retyped. Postgres holds 53
//     DB-only fr.b2 rows in this theme (« Je n'ai plus aucune envie de
//     discuter avec lui », « Personne n'a jamais compris cette règle », « Il
//     ne nie nullement avoir commis cette erreur »…): none is an exact twin
//     of a row here (checked 2026-09-30, `scratch/_b221-dbtwins.mts`).
//
//  5. RESPELLINGS. Spelled for the nasal checker, not the ear: « personne »
//     pehr-SONN, « aucune » oh-KÜNN, « une » ÜNN, « prennent » PRENN,
//     « fonctionne » fohⁿk-SYONN, « s'additionnent » sa-dee-SYONN. « même »
//     is MEM (the seed's). No U+203F tie.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does. Reused rows keep theirs. The one `scenario` uses ’ only
//     and embeds no corpus row.
//
//  7. NO UNGRAMMATICAL SENTENCE IS EVER A ROW. « Je n'ai pas rien vu »,
//     « personne n'est pas venu », « sans ne rien dire » and the other stacks
//     live only in the scene's choice, commonErrors.wrong, trapDrill.
//     promptSound and quiz errorSpot prompts. The spoken rows without ne
//     (.1577, .1579, .1584) are NOT errors: they are the ordinary spoken
//     register, tagged `oral`, register familier, and none carries a
//     `dictation` drill, so the learner is never asked to WRITE one.
//
//  8. BOTH WORD ORDERS ARE CORRECT for n'avoir rien vu / ne rien avoir vu
//     (lesson 14 in B2): two rows (.1459, .1460), and every typed answer that
//     could take either lists both in `accept`. « Jamais plus » is correct
//     and soutenu; a typed answer that could take it says « l'ordre courant »
//     in its prompt.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b2.21',
  seq: 21,
  title: 'Negation Combinations',
  sub: 'Les négations combinées',
  canDo: 'Can combine negative words in the right order (plus jamais rien, plus aucun, plus ni… ni, jamais plus in formal style) and place them in simple and compound tenses and before an infinitive, never stacking pas with another negative word; can use a negative word as the subject (personne ne, rien ne, aucun… ne, nul ne, ni… ni… ne), the restrictive combinations (ne… plus que, ne… jamais que), told apart from ne… pas que, sans + rien, personne, aucun or jamais, and the formal negations (ne… guère, nullement, aucunement, ne alone with savoir, pouvoir, oser, cesser); controls the scope of a negation (je ne vous ai pas demandé de… / je vous ai demandé de ne pas…; pas tous / aucun), knows that the ne explétif negates nothing, keeps ne in writing, and writes a formal letter contesting an invoice or an accusation',
  prereqUnitIds: ['b1.20', 'b2.06', 'b2.14'],
} as const;

export const LESSON_ID = 'b2.21.l1';
export const THEME = 'negation-et-restriction';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1400, 1599]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan in
 *  B2-BUILD-LOG.md numbers b2.01 to b2.34 in trail order. Only B1 1-39 and
 *  B2 1-26 are cited (lessons 17 to 21 publish together).
 * ══════════════════════════════════════════════════════════════════════════ */

export const NEG_B1_UNIT = 'b1.20';
export const SUBJ_B1_UNIT = 'b1.15';
export const PQP_UNIT = 'b2.01';
export const SUBJ_PASSE_UNIT = 'b2.05';
export const MODES_UNIT = 'b2.06';
export const LITT_UNIT = 'b2.09';
export const TONIQUES_UNIT = 'b2.11';
export const INFINITIVES_UNIT = 'b2.14';
export const CAUSE_UNIT = 'b2.15';
export const CONCESSION_UNIT = 'b2.16';
export const TEMPS_UNIT = 'b2.18';
export const RESTRICTION_UNIT = 'b2.19';
export const ECOUTE_UNIT = 'b2.25';
export const REUNIONS_UNIT = 'b2.26';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const NEG_B1_REF = refFr(NEG_B1_UNIT);
export const SUBJ_B1_REF = refFr(SUBJ_B1_UNIT);
export const PQP_REF = refFr(PQP_UNIT);
export const SUBJ_PASSE_REF = refFr(SUBJ_PASSE_UNIT);
export const MODES_REF = refFr(MODES_UNIT);
export const LITT_REF = refFr(LITT_UNIT);
export const TONIQUES_REF = refFr(TONIQUES_UNIT);
export const INFINITIVES_REF = refFr(INFINITIVES_UNIT);
export const CAUSE_REF = refFr(CAUSE_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const TEMPS_REF = refFr(TEMPS_UNIT);
export const RESTRICTION_REF = refFr(RESTRICTION_UNIT);
export const ECOUTE_REF = refFr(ECOUTE_UNIT);
export const REUNIONS_REF = refFr(REUNIONS_UNIT);
/** Unit 4 opens with academic style (published): the next step on the trail,
 *  named in the roundup. */
export const NEXT_REF = 'la leçon 22 du B2';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B120_REFRAME, REFRAME_EN as B120_REFRAME_EN } from '../b1/negation-avancee-corpus.ts';
export { REFRAME as B214_REFRAME, REFRAME_EN as B214_REFRAME_EN } from './constructions-infinitives-corpus.ts';
export { REFRAME as B206_REFRAME, REFRAME_EN as B206_REFRAME_EN } from './subjonctif-indicatif-corpus.ts';
export { REFRAME as B211_REFRAME, REFRAME_EN as B211_REFRAME_EN } from './pronoms-insistance-corpus.ts';
export { REFRAME as B216_REFRAME, REFRAME_EN as B216_REFRAME_EN } from './concession-avancee-corpus.ts';
export { REFRAME as B209_REFRAME, REFRAME_EN as B209_REFRAME_EN } from './subjonctif-litteraire-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE VIDE DESSINÉ. B1 lesson 20 said « Ne ouvre un vide. Le deuxième mot
 *  lui donne sa forme. » At B2 several words draw the same gap: plus says
 *  when it began, jamais that it has no exception, rien, personne or aucun
 *  what is missing. They ADD UP around ONE ne (je n'ai plus jamais rien
 *  signé; personne n'a rien vu), and pas, which is the empty default, never
 *  joins them: « je n'ai pas rien vu » blurs the gap and can even be heard
 *  as « quelque chose ». Sans holds the place of ne (sans rien dire). The
 *  one fixed exception is named: « ce n'est pas rien » (it matters). Scope
 *  (act 9) is WHERE the gap is drawn; the ne explétif (act 10) draws none.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Un seul ne, et les mots négatifs s'additionnent pour dessiner le vide ; pas, lui, ne s'y joint jamais.";
export const REFRAME_EN = 'One ne, and the negative words add up to draw the gap; pas never joins them.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Deux négations valent une affirmation.',
    why: 'False in French where this lesson has to hold: « personne n’a rien vu » and « je n’ai plus jamais rien signé » stay negative. Only pas stacked on another negative word blurs the meaning (and « ce n’est pas rien » is a fixed expression, act 5).',
  },
  {
    text: 'Remplace pas par le bon mot.',
    why: 'Already rejected by lesson 20 in B1, and falser here: pas… non plus, ne… pas que and pas un seul keep pas legitimately (acts 5 and 7), and a subject negative has no pas to replace (act 6).',
  },
  {
    text: 'Ne ouvre un vide. Le deuxième mot lui donne sa forme.',
    why: 'Lesson 20 in B1’s reframe, and still true, so it is QUOTED in act 2 rather than replaced. At B2 there is no single « deuxième mot »: three can combine, and one (pas) is banned from the combination.',
  },
  {
    text: 'La négation porte toujours sur le verbe.',
    why: 'False for scope (act 9): « je vous ai demandé de ne pas résilier » negates the infinitive, not demander; « les voisins ne sont pas tous venus » negates tous. It is also false for the ne explétif, which negates nothing (act 10).',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-30, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const NR = (n: number) => `fr.b1.negation-et-restriction.${n}`;
const FP = (n: number) => `fr.b2.faits-et-procedures.${n}`;
const CL = (n: number) => `fr.b2.connecteurs-logiques.${n}`;

export const IMPORTED = {
  act1: [] as string[],
  act2: [
    NR(1007),                                  // Ne ouvre un vide. Le deuxième mot lui donne sa forme.  (lesson 20 in B1, grammar card)
    NR(1131),                                  // Je ne dis plus rien.  (lesson 20 in B1)
    NR(1136),                                  // Je ne dirai plus jamais rien.  (lesson 20 in B1)
    NR(1139),                                  // L'ordre ne change pas : plus, puis jamais, puis rien ou personne.  (grammar card)
    NR(1147),                                  // Je ne connais plus personne dans cette ville.  (lesson 20 in B1)
  ],
  act3: [
    NR(1093),                                  // Je n'ai rien vu.  (lesson 20 in B1)
    NR(1094),                                  // Je n'ai vu personne.  (lesson 20 in B1)
    NR(1102),                                  // Rien, jamais et plus vont avant le participe. Personne va après.  (grammar card)
    NR(1143),                                  // Je n'ai jamais rien volé.  (lesson 20 in B1)
  ],
  act4: [
    NR(1123),                                  // Elle est sortie sans rien dire.  (lesson 20 in B1)
    NR(1125),                                  // Il vaut mieux ne rien toucher.  (lesson 20 in B1)
    NR(1126),                                  // Je suis parti sans voir personne.  (lesson 20 in B1)
    FP(1277),                                  // J'ai été débité deux fois sans avoir rien reçu.  (lesson 14 in B2)
    FP(1300),                                  // Il prétend ne rien savoir.  (lesson 14 in B2)
    FP(1227),                                  // Il regrette de n'avoir pas prévenu ses collègues.  (lesson 14 in B2)
  ],
  act5: [
    NR(1157),                                  // Je n'aime pas le bruit, et lui non plus.  (lesson 20 in B1)
    NR(1159),                                  // Je ne suis pas du tout d'accord.  (lesson 20 in B1)
    'fr.b2.pronoms-essentiels.1855',           // Lui non plus n'a rien dit.  (lesson 11 in B2)
    'fr.b2.pronoms-essentiels.1910',           // Nous non plus, nous n'avons rien vu.  (lesson 11 in B2)
  ],
  act6: [
    NR(1075),                                  // Personne n'est venu.  (lesson 20 in B1)
    NR(1080),                                  // Ni le propriétaire ni l'agence ne répondent.  (lesson 20 in B1)
    NR(1141),                                  // Personne ne dit jamais rien.  (lesson 20 in B1)
    NR(1142),                                  // Plus rien ne m'étonne.  (lesson 20 in B1)
  ],
  act7: [
    NR(1144),                                  // Elle ne mange plus que des légumes.  (lesson 20 in B1)
    NR(1192),                                  // Je ne demande qu'une chose : un remboursement.  (lesson 20 in B1)
  ],
  act8: [
    NR(1065),                                  // Il ne pleut guère en juillet.  (lesson 20 in B1, recognition there)
    NR(1066),                                  // Elle n'a guère le temps de lire.  (lesson 20 in B1)
  ],
  act9: [
    'fr.b2.opinions-et-avis.1826',             // Je ne crois pas qu'il vienne à la réunion.  (lesson 6 in B2)
    CL(2197),                                  // On objecte aussi que tous les métiers ne s'y prêtent pas.  (lesson 16 in B2)
    'fr.b2.strategies-de-comprehension.1609',  // À vitesse réelle, je n'entends pas tous les mots.  (lesson 25 in B2)
  ],
  act10: [
    NR(1177),                                  // À l'oral, ne tombe souvent. À l'écrit, il reste toujours.  (grammar card)
    NR(1173),                                  // J'ai rien compris.  (lesson 20 in B1, spoken)
    NR(1174),                                  // Je n'ai rien compris.  (lesson 20 in B1)
    'fr.b2.affaires.1278',                     // Je crains que nous ne puissions pas livrer à temps.  (lesson 26 in B2)
    'fr.b2.emotions.1273',                     // Elle craint que son fils perde ses papiers.  (lesson 5 in B2)
    'fr.b2.litterature.1254',                  // Il craignait qu'on ne le reconnût.  (lesson 9 in B2; drills: sentence only)
  ],
  act11: [
    NR(1189),                                  // Nous n'avons obtenu aucun remboursement.  (lesson 20 in B1)
    NR(1197),                                  // On ne nous a rien expliqué.  (lesson 20 in B1)
    CL(2004),                                  // J'ai beau chercher, je ne trouve aucune ville qui ait réglé la question.  (lesson 16 in B2, recycling)
    CL(2133),                                  // Il a changé de fournisseur sans rien dire à personne.  (lesson 16 in B2, recycling)
    CL(1944),                                  // Elle était émue au point de ne plus pouvoir parler.  (lesson 15 in B2, recycling)
    'fr.b2.recits-au-passe.1640',              // Elle était partie sans rien dire.  (lesson 1 in B2, recycling)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [
  'fr.b2.litterature.1254',                    // drills: sentence
];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  NR(1007), NR(1102), NR(1139), NR(1177),      // grammar cards: flashcard only
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `gap` a gapfill card whose front gaps the form and
 *  names the cue; `rule` a grammar card. Every row carries fr, en, ipa and
 *  respell. Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const SO = { register: 'soutenu' as Register };
const FA = { register: 'familier' as Register };
const GP = ['negations-combinees'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes, ...extra });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  extra: Partial<Item> = {},
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes, ...extra });

/* ── ACT 1 · LE DÉMENTI (.1400-.1413) ────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1400, "Je n'avais jamais rien remarqué d'anormal dans ce parking.", 'I had never noticed anything unusual in this car park.',
    '/ʒə na.vɛ ʒa.mɛ ʁjɛ̃ ʁə.maʁ.ke da.nɔʁ.mal dɑ̃ sə paʁ.kiŋ/', 'zhuh na-veh zha-meh RYEHⁿ | ruh-mar-KAY da-nor-MAL | dahⁿ suh par-KEENG', ['lecture', 'combine'], FCVDR),
  sent(1401, "Il n'y avait plus aucune voiture au deuxième niveau.", 'There were no cars left at all on the second level.',
    '/il nja.vɛ ply.zo.kyn vwa.tyʁ o dø.zjɛm ni.vo/', 'eel nya-VEH | plü-zoh-KÜNN vwa-TÜR | oh deu-ZYEM nee-VOH', ['lecture', 'combine']),
  sent(1402, "Je n'ai vu personne près de la camionnette.", 'I saw no one near the van.',
    '/ʒə ne vy pɛʁ.sɔn pʁɛ də la ka.mjɔ.nɛt/', 'zhuh nay VÜ pehr-SONN | preh duh la ka-myo-NET', ['lecture', 'participe'], FCVDR),
  sent(1403, "Personne n'est sorti de l'ascenseur.", 'No one came out of the lift.',
    '/pɛʁ.sɔn nɛ sɔʁ.ti də la.sɑ̃.sœʁ/', 'pehr-SONN neh sor-TEE | duh la-sahⁿ-SUHR', ['lecture', 'sujet']),
  sent(1404, "Ensuite, je n'ai plus rien entendu.", 'After that, I heard nothing more.',
    '/ɑ̃.sɥit ʒə ne ply ʁjɛ̃.nɑ̃.tɑ̃.dy/', 'ahⁿ-SWEET | zhuh nay plü ryehⁿ-nahⁿ-tahⁿ-DÜ', ['lecture', 'combine']),
  sent(1405, 'Je ne cherche nullement à le protéger.', 'I am in no way trying to protect him.',
    '/ʒə nə ʃɛʁʃ nyl.mɑ̃ a lə pʁɔ.te.ʒe/', 'zhuh nuh SHEHRSH | nül-MAHⁿ | a luh pro-tay-ZHAY', ['lecture', 'soutenu'], FCVR, SO),
  sent(1406, "Je n'ai vu ni la voiture ni son conducteur.", 'I saw neither the car nor its driver.',
    '/ʒə ne vy ni la vwa.tyʁ ni sɔ̃ kɔ̃.dyk.tœʁ/', 'zhuh nay VÜ | nee la vwa-TÜR | nee sohⁿ kohⁿ-dük-TUHR', ['lecture', 'ni'], FCVDR),
  rule(1407, REFRAME, REFRAME_EN,
    '/ɛ̃ sœl nə e le mo ne.ɡa.tif sa.di.sjɔn puʁ de.si.ne lə vid pa lɥi nə si ʒwɛ̃ ʒa.mɛ/',
    'uhⁿ SUHL NUH | ay lay moh nay-ga-TEEF | sa-dee-SYONN | poor day-see-NAY luh VEED | pa LWEE | nuh see ZHWEHⁿ zha-MEH',
    'Combien de ne dans une négation combinée, et quel mot ne s’y joint jamais ?',
    "Un seul ne, même avec plus, jamais et rien ensemble : je n'ai plus jamais rien signé. Pas ne s'ajoute jamais à rien, personne, jamais, plus ou aucun.",
    ['reframe']),
  sent(1408, "Je n'ai pas dit que j'avais vu le conducteur.", 'I did not say that I had seen the driver.',
    '/ʒə ne pa di kə ʒa.vɛ vy lə kɔ̃.dyk.tœʁ/', 'zhuh nay pa DEE | kuh zha-veh VÜ | luh kohⁿ-dük-TUHR', ['lecture', 'portee']),
  sent(1409, "J'ai dit que je ne l'avais pas vu.", 'I said that I had not seen him.',
    '/ʒe di kə ʒə nə la.vɛ pa vy/', 'zhay DEE | kuh zhuh nuh la-veh pa VÜ', ['lecture', 'portee']),
  sent(1410, "Ce n'est pas rien.", 'That is no small thing.',
    '/sə nɛ pa ʁjɛ̃/', 'suh neh pa RYEHⁿ', ['lecture', 'fige']),
  sent(1411, "Je ne saurais dire d'où venait le bruit.", 'I could not say where the noise came from.',
    '/ʒə nə so.ʁɛ diʁ du və.nɛ lə bʁɥi/', 'zhuh nuh soh-REH DEER | doo vuh-NEH luh BRWEE', ['lecture', 'soutenu'], FCVR, SO),
  sent(1412, "Je n'ai jamais rien cassé dans cet appartement.", 'I have never broken anything in this flat.',
    '/ʒə ne ʒa.mɛ ʁjɛ̃ ka.se dɑ̃ sɛ.ta.paʁ.tə.mɑ̃/', 'zhuh nay zha-meh ryehⁿ ka-SAY | dahⁿ seh-ta-par-tuh-MAHⁿ', ['scene', 'combine']),
  sent(1413, "Je n'ai rien d'autre à ajouter.", 'I have nothing else to add.',
    '/ʒə ne ʁjɛ̃ dotʁ a a.ʒu.te/', 'zhuh nay ryehⁿ DOHTR | a a-zhoo-TAY', ['lecture', 'rien-de']),
];

/* ── ACT 2 · PLUSIEURS MOTS, UN SEUL NE (.1416-.1433) ─────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1416, "Il n'y a plus aucun commerce dans ma rue.", 'There are no shops left at all in my street.',
    '/il nja ply.zo.kœ̃ kɔ.mɛʁs dɑ̃ ma ʁy/', 'eel nya plü-zoh-KUHⁿ | ko-MEHRS dahⁿ ma RÜ', ['ordre', 'plus-aucun'], FCVDR),
  sent(1417, 'Je ne trouve plus ce formulaire nulle part.', 'I can no longer find this form anywhere.',
    '/ʒə nə tʁuv ply sə fɔʁ.my.lɛʁ nyl paʁ/', 'zhuh nuh TROOV plü | suh for-mü-LEHR | nül PAR', ['ordre', 'nulle-part']),
  sent(1418, "La gare n'a plus ni guichet ni salle d'attente.", 'The station no longer has a ticket office or a waiting room.',
    '/la ɡaʁ na ply ni ɡi.ʃɛ ni sal da.tɑ̃t/', 'la GAR na PLÜ | nee ghee-SHEH | nee sal da-TAHⁿT', ['ordre', 'ni']),
  sent(1419, 'Je ne la reverrai jamais plus.', 'I shall never see her again.',
    '/ʒə nə la ʁə.vɛ.ʁe ʒa.mɛ ply/', 'zhuh nuh la ruh-veh-RAY | zha-meh PLÜ', ['ordre', 'registre'], FCVR, SO),
  sent(1420, "Il n'y a plus rien de gratuit dans ce quartier.", 'There is nothing free any more in this neighbourhood.',
    '/il nja ply ʁjɛ̃ də ɡʁa.tɥi dɑ̃ sə kaʁ.tje/', 'eel nya plü RYEHⁿ | duh gra-TWEE | dahⁿ suh kar-TYAY', ['ordre', 'rien-de']),
  sent(1421, "Je ne connais plus personne d'autre ici.", 'I no longer know anyone else here.',
    '/ʒə nə kɔ.nɛ ply pɛʁ.sɔn dotʁ i.si/', 'zhuh nuh ko-NEH plü | pehr-sonn DOHTR | ee-SEE', ['ordre', 'rien-de']),
  sent(1422, 'On ne voit plus jamais personne dans cette rue.', 'You never see anyone in this street any more.',
    '/ɔ̃ nə vwa ply ʒa.mɛ pɛʁ.sɔn dɑ̃ sɛt ʁy/', 'ohⁿ nuh VWA | plü zha-meh pehr-SONN | dahⁿ set RÜ', ['ordre', 'trois-mots'], FCVDR),
  sent(1423, "L'agence ne m'envoie plus jamais aucun relevé.", 'The agency never sends me a single statement any more.',
    '/la.ʒɑ̃s nə mɑ̃.vwa ply ʒa.mɛ o.kœ̃ ʁəl.ve/', 'la-ZHAHⁿS | nuh mahⁿ-VWA | plü zha-MEH | oh-kuhⁿ ruhl-VAY', ['ordre', 'trois-mots']),
  rule(1424, 'Jamais plus, dans cet ordre, relève du registre soutenu.', 'Jamais plus, in that order, belongs to formal style.',
    '/ʒa.mɛ ply dɑ̃ sɛ.tɔʁdʁ ʁə.lɛv dy ʁə.ʒistʁ su.tə.ny/', 'zha-meh PLÜ | dahⁿ seh-TORDR | ruh-LEV | dü ruh-ZHEESTR soo-tuh-NÜ',
    'Plus jamais ou jamais plus : lequel dit-on tous les jours ?',
    "Plus jamais, dans l'ordre habituel : je n'y retournerai plus jamais. Jamais plus est correct, plus soutenu ou plus littéraire, souvent en fin de phrase.",
    ['ordre', 'registre'], SO),
  sent(1425, 'Il ne dit jamais rien de précis.', 'He never says anything precise.',
    '/il nə di ʒa.mɛ ʁjɛ̃ də pʁe.si/', 'eel nuh DEE | zha-meh RYEHⁿ | duh pray-SEE', ['ordre', 'rien-de']),
  sent(1426, 'Depuis la fermeture, on ne peut plus se garer nulle part.', 'Since the closure, you can no longer park anywhere.',
    '/də.pɥi la fɛʁ.mə.tyʁ ɔ̃ nə pø ply sə ɡa.ʁe nyl paʁ/', 'duh-pwee la fehr-muh-TÜR | ohⁿ nuh peu PLÜ | suh ga-RAY nül PAR', ['ordre', 'nulle-part']),
  gap(1427, 'Il ne reste plus aucune place pour samedi.', 'There are no seats left at all for Saturday.',
    '/il nə ʁɛst ply.zo.kyn plas puʁ sam.di/', 'eel nuh REST | plü-zoh-KÜNN PLASS | poor sam-DEE',
    "Il ne reste ___ place pour samedi. (plus + aucune, dans l'ordre)",
    "Plus d'abord, puis aucune : il ne reste plus aucune place. Aucune reste au singulier : il compte zéro. EN: plus first, then aucune.",
    ['ordre', 'plus-aucun']),
  sent(1428, 'Je ne vais plus jamais nulle part sans mon téléphone.', 'I never go anywhere without my phone any more.',
    '/ʒə nə vɛ ply ʒa.mɛ nyl paʁ sɑ̃ mɔ̃ te.le.fɔn/', 'zhuh nuh VEH | plü zha-MEH nül PAR | sahⁿ mohⁿ tay-lay-FONN', ['ordre', 'trois-mots']),
  sent(1429, "Nous n'avons plus ni le temps ni l'envie de discuter.", 'We no longer have either the time or the wish to argue.',
    '/nu na.vɔ̃ ply ni lə tɑ̃ ni lɑ̃.vi də dis.ky.te/', 'noo na-vohⁿ PLÜ | nee luh TAHⁿ | nee lahⁿ-VEE | duh dees-kü-TAY', ['ordre', 'ni']),
  sent(1430, "Elle n'achète jamais rien en ligne.", 'She never buys anything online.',
    '/ɛl na.ʃɛt ʒa.mɛ ʁjɛ̃.nɑ̃ liɲ/', 'el na-SHET | zha-meh ryehⁿ-nahⁿ LEENY', ['ordre']),
  sent(1431, "Il n'y a jamais personne à l'accueil le midi.", 'There is never anyone at reception at lunchtime.',
    '/il nja ʒa.mɛ pɛʁ.sɔn a la.kœj lə mi.di/', 'eel nya zha-meh pehr-SONN | a la-KUHY | luh mee-DEE', ['ordre']),
  rule(1432, "Rien et personne prennent de devant l'adjectif, au masculin singulier.", 'Rien and personne take de before the adjective, masculine singular.',
    '/ʁjɛ̃ e pɛʁ.sɔn pʁɛn də də.vɑ̃ la.dʒɛk.tif o ma.sky.lɛ̃ sɛ̃.ɡy.lje/', 'RYEHⁿ ay pehr-SONN | PRENN DUH | duh-vahⁿ la-zhek-TEEF | oh ma-skü-LEHⁿ sehⁿ-gü-LYAY',
    "Il n'y a plus rien ___ (intéressant) : quelle forme ?",
    "Rien d'intéressant : de, puis l'adjectif au masculin singulier. De même : personne d'autre, personne de sérieux.",
    ['rien-de']),
  sent(1433, 'Tu ne me dis jamais rien de ta journée.', 'You never tell me anything about your day.',
    '/ty nə mə di ʒa.mɛ ʁjɛ̃ də ta ʒuʁ.ne/', 'tü nuh muh DEE | zha-meh RYEHⁿ | duh ta zhoor-NAY', ['ordre', 'rien-de']),
];

/* ── ACT 3 · AU PASSÉ COMPOSÉ (.1436-.1453) ──────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1436, "Je n'ai jamais rien signé de tel.", 'I have never signed anything of the kind.',
    '/ʒə ne ʒa.mɛ ʁjɛ̃ si.ɲe də tɛl/', 'zhuh nay zha-meh ryehⁿ see-NYAY | duh TEL', ['participe', 'combine']),
  sent(1437, "Je n'ai plus vu personne après vingt heures.", 'After eight p.m., I did not see anyone any more.',
    '/ʒə ne ply vy pɛʁ.sɔn a.pʁɛ vɛ̃.tœʁ/', 'zhuh nay plü VÜ pehr-SONN | a-preh vehⁿ-TUHR', ['participe', 'combine'], FCVDR),
  sent(1438, "Je n'ai jamais vu personne entrer dans ce local.", 'I have never seen anyone go into these premises.',
    '/ʒə ne ʒa.mɛ vy pɛʁ.sɔn ɑ̃.tʁe dɑ̃ sə lɔ.kal/', 'zhuh nay zha-meh VÜ | pehr-sonn ahⁿ-TRAY | dahⁿ suh lo-KAL', ['participe', 'combine']),
  sent(1439, "Je n'ai plus jamais rien reçu de leur part.", 'I never received anything from them again.',
    '/ʒə ne ply ʒa.mɛ ʁjɛ̃ ʁə.sy də lœʁ paʁ/', 'zhuh nay plü zha-meh ryehⁿ ruh-SÜ | duh luhr PAR', ['participe', 'trois-mots']),
  sent(1440, "Nous n'avons plus reçu aucune facture depuis juin.", 'We have not received a single invoice since June.',
    '/nu na.vɔ̃ ply ʁə.sy o.kyn fak.tyʁ də.pɥi ʒɥɛ̃/', 'noo na-vohⁿ plü ruh-SÜ | oh-künn fak-TÜR | duh-pwee ZHWEHⁿ', ['participe', 'plus-aucun'], FCVDR),
  sent(1441, "Je n'en ai plus reçu aucune.", 'I have not received a single one since.',
    '/ʒə nɑ̃.ne ply ʁə.sy o.kyn/', 'zhuh nahⁿ-NAY plü ruh-SÜ oh-KÜNN', ['participe', 'plus-aucun']),
  sent(1442, "Je n'ai plus vu sa voiture nulle part.", 'After that I did not see his car anywhere.',
    '/ʒə ne ply vy sa vwa.tyʁ nyl paʁ/', 'zhuh nay plü VÜ | sa vwa-TÜR | nül PAR', ['participe', 'nulle-part']),
  sent(1443, "Je n'ai plus parlé qu'à la gardienne.", 'After that I spoke only to the caretaker.',
    '/ʒə ne ply paʁ.le ka la ɡaʁ.djɛn/', 'zhuh nay plü par-LAY | ka la gar-DYENN', ['participe', 'plus-que']),
  sent(1444, "Elle n'a jamais rencontré ni le directeur ni son adjoint.", 'She has never met either the director or his deputy.',
    '/ɛl na ʒa.mɛ ʁɑ̃.kɔ̃.tʁe ni lə di.ʁɛk.tœʁ ni sɔ̃.na.dʒwɛ̃/', 'el na zha-meh rahⁿ-kohⁿ-TRAY | nee luh dee-rek-TUHR | nee sohⁿ-nad-ZHWEHⁿ', ['participe', 'ni']),
  rule(1445, "Dans une combinaison, chaque mot garde sa place : je n'ai plus vu personne.", 'In a combination each word keeps its own place: je n’ai plus vu personne.',
    '/dɑ̃.zyn kɔ̃.bi.nɛ.zɔ̃ ʃak mo ɡaʁd sa plas ʒə ne ply vy pɛʁ.sɔn/', 'dahⁿ-zünn kohⁿ-bee-neh-ZOHⁿ | shak MOH gard sa PLASS | zhuh nay plü VÜ pehr-SONN',
    'Plus + personne au passé composé : où va chaque mot ?',
    "Plus avant le participe, personne après : je n'ai plus vu personne. Jamais et rien vont avant, aucun et nulle part après.",
    ['participe']),
  gap(1446, "Je n'ai rien vu de suspect.", 'I saw nothing suspicious.',
    '/ʒə ne ʁjɛ̃ vy də sys.pɛ/', 'zhuh nay ryehⁿ VÜ | duh süs-PEH',
    'Je n’___ de suspect. (voir + rien, au passé composé)',
    "Rien avant le participe, de suspect après : je n'ai rien vu de suspect. EN: rien before the participle, de + adjective after it.",
    ['participe', 'rien-de'], FCVDR),
  sent(1447, "Je n'ai vu personne d'autre.", 'I saw nobody else.',
    '/ʒə ne vy pɛʁ.sɔn dotʁ/', 'zhuh nay VÜ | pehr-sonn DOHTR', ['participe', 'rien-de']),
  sent(1448, "Je n'ai rien pu faire pour l'aider.", 'I could do nothing to help him.',
    '/ʒə ne ʁjɛ̃ py fɛʁ puʁ le.de/', 'zhuh nay ryehⁿ PÜ FEHR | poor lay-DAY', ['participe', 'modal']),
  sent(1449, "Je n'ai réussi à joindre personne au service client.", 'I did not manage to reach anyone at customer service.',
    '/ʒə ne ʁe.y.si a ʒwɛ̃dʁ pɛʁ.sɔn o sɛʁ.vis kli.jɑ̃/', 'zhuh nay ray-ü-SEE | a ZHWEHⁿDR pehr-SONN | oh sehr-veess klee-YAHⁿ', ['participe', 'modal']),
  gap(1450, "Je n'ai plus jamais rien signé sans le lire.", 'I never again signed anything without reading it.',
    '/ʒə ne ply ʒa.mɛ ʁjɛ̃ si.ɲe sɑ̃ lə liʁ/', 'zhuh nay plü zha-meh ryehⁿ see-NYAY | sahⁿ luh LEER',
    "Je n'ai ___ signé sans le lire. (plus + jamais + rien)",
    "Les trois avant le participe, dans l'ordre : plus jamais rien signé. EN: all three before the participle, in order.",
    ['participe', 'trois-mots'], FCVDR),
  sent(1451, "Il ne m'a jamais rien dit de ce contrat.", 'He never told me anything about this contract.',
    '/il nə ma ʒa.mɛ ʁjɛ̃ di də sə kɔ̃.tʁa/', 'eel nuh ma zha-meh ryehⁿ DEE | duh suh kohⁿ-TRA', ['participe', 'combine']),
  sent(1452, 'Ils ne sont plus jamais revenus au magasin.', 'They never came back to the shop again.',
    '/il nə sɔ̃ ply ʒa.mɛ ʁə.və.ny o ma.ɡa.zɛ̃/', 'eel nuh sohⁿ plü zha-meh ruh-vuh-NÜ | oh ma-ga-ZEHⁿ', ['participe', 'combine']),
  sent(1453, "Nous n'avons jamais eu aucun problème avec ce locataire.", 'We have never had any problem with this tenant.',
    '/nu na.vɔ̃ ʒa.mɛ y o.kœ̃ pʁɔ.blɛm a.vɛk sə lɔ.ka.tɛʁ/', 'noo na-vohⁿ zha-meh Ü | oh-kuhⁿ pro-BLEM | a-vek suh lo-ka-TEHR', ['participe', 'combine']),
];

/* ── ACT 4 · DEVANT L'INFINITIF, APRÈS SANS (.1456-.1473) ──────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1456, "J'ai promis de ne plus rien dire.", 'I promised to say nothing more.',
    '/ʒe pʁɔ.mi də nə ply ʁjɛ̃ diʁ/', 'zhay pro-MEE | duh nuh plü ryehⁿ DEER', ['infinitif'], FCVDR),
  sent(1457, 'Elle a choisi de ne plus voir personne.', 'She chose to see no one any more.',
    '/ɛ.la ʃwa.zi də nə ply vwaʁ pɛʁ.sɔn/', 'eh-la shwa-ZEE | duh nuh plü VWAR pehr-SONN', ['infinitif']),
  sent(1458, "Je m'engage à ne plus jamais rien commander chez vous.", 'I undertake never to order anything from you again.',
    '/ʒə mɑ̃.ɡaʒ a nə ply ʒa.mɛ ʁjɛ̃ kɔ.mɑ̃.de ʃe vu/', 'zhuh mahⁿ-GAZH | a nuh plü zha-meh ryehⁿ ko-mahⁿ-DAY | shay VOO', ['infinitif', 'trois-mots']),
  sent(1459, "Il affirme n'avoir rien vu.", 'He claims to have seen nothing.',
    '/i.la.fiʁm na.vwaʁ ʁjɛ̃ vy/', 'ee-la-FEERM | na-vwar ryehⁿ VÜ', ['infinitif', 'passe'], FCVR, SO),
  sent(1460, 'Il affirme ne rien avoir vu.', 'He claims he saw nothing.',
    '/i.la.fiʁm nə ʁjɛ̃.na.vwaʁ vy/', 'ee-la-FEERM | nuh ryehⁿ-na-vwar VÜ', ['infinitif', 'passe']),
  sent(1461, "Elle déclare n'avoir vu personne.", 'She states that she saw no one.',
    '/ɛl de.klaʁ na.vwaʁ vy pɛʁ.sɔn/', 'el day-KLAR | na-vwar VÜ pehr-SONN', ['infinitif', 'passe']),
  sent(1462, 'Il est parti sans rien payer.', 'He left without paying anything.',
    '/i.lɛ paʁ.ti sɑ̃ ʁjɛ̃ pɛ.je/', 'ee-leh par-TEE | sahⁿ ryehⁿ peh-YAY', ['sans'], FCVDR),
  sent(1463, 'Elle a quitté la réunion sans saluer personne.', 'She left the meeting without greeting anyone.',
    '/ɛ.la ki.te la ʁe.y.njɔ̃ sɑ̃ sa.lɥe pɛʁ.sɔn/', 'eh-la kee-TAY la ray-ü-NYOHⁿ | sahⁿ sa-lway pehr-SONN', ['sans']),
  sent(1464, 'Ils ont résilié le contrat sans aucune explication.', 'They cancelled the contract without any explanation.',
    '/il.zɔ̃ ʁe.zi.lje lə kɔ̃.tʁa sɑ̃.zo.kyn ɛks.pli.ka.sjɔ̃/', 'eel-zohⁿ ray-zee-LYAY luh kohⁿ-TRA | sahⁿ-zoh-künn eks-plee-ka-SYOHⁿ', ['sans']),
  sent(1465, 'Il travaille ici depuis dix ans sans jamais se plaindre.', 'He has worked here for ten years without ever complaining.',
    '/il tʁa.vaj i.si də.pɥi di.zɑ̃ sɑ̃ ʒa.mɛ sə plɛ̃dʁ/', 'eel tra-VYE ee-SEE | duh-pwee dee-ZAHⁿ | sahⁿ zha-meh suh PLEHⁿDR', ['sans']),
  sent(1466, 'Elle est repartie sans plus rien dire.', 'She left again without saying anything more.',
    '/ɛ.lɛ ʁə.paʁ.ti sɑ̃ ply ʁjɛ̃ diʁ/', 'eh-leh ruh-par-TEE | sahⁿ plü ryehⁿ DEER', ['sans', 'combine']),
  rule(1467, 'Sans tient déjà la place de ne : sans rien dire, jamais sans ne rien dire.', 'Sans already takes the place of ne: sans rien dire, never sans ne rien dire.',
    '/sɑ̃ tjɛ̃ de.ʒa la plas də nə sɑ̃ ʁjɛ̃ diʁ ʒa.mɛ sɑ̃ nə ʁjɛ̃ diʁ/', 'SAHⁿ tyehⁿ day-ZHA | la plass duh NUH | sahⁿ ryehⁿ DEER | zha-MEH sahⁿ nuh ryehⁿ DEER',
    'Sans + rien + dire : faut-il un ne ?',
    "Non. Sans est déjà négatif et tient la place de ne : sans rien dire, sans voir personne, sans jamais se plaindre. Et jamais de pas non plus.",
    ['sans']),
  rule(1468, "Devant l'infinitif, ne, plus, jamais et rien passent avant ; personne et aucun restent après.", 'Before an infinitive, ne, plus, jamais and rien come first; personne and aucun stay after it.',
    '/də.vɑ̃ lɛ̃.fi.ni.tif nə ply ʒa.mɛ e ʁjɛ̃ pas.ta.vɑ̃ pɛʁ.sɔn e o.kœ̃ ʁɛs.ta.pʁɛ/', 'duh-vahⁿ lehⁿ-fee-nee-TEEF | nuh plü zha-meh ay RYEHⁿ | pass-ta-VAHⁿ | pehr-sonn ay oh-KUHⁿ | res-ta-PREH',
    'Ne + plus + voir + personne : dans quel ordre ?',
    "Ne plus voir personne : ne et plus devant l'infinitif, personne après. Ne plus rien dire : rien aussi devant.",
    ['infinitif']),
  gap(1469, 'Merci de ne plus rien déposer devant la porte.', 'Please do not leave anything in front of the door any more.',
    '/mɛʁ.si də nə ply ʁjɛ̃ de.po.ze də.vɑ̃ la pɔʁt/', 'mehr-SEE | duh nuh plü ryehⁿ day-poh-ZAY | duh-vahⁿ la PORT',
    'Merci de ___ déposer devant la porte. (ne + plus + rien)',
    "Tout devant l'infinitif, dans l'ordre : ne plus rien déposer. EN: everything before the infinitive.",
    ['infinitif']),
  sent(1470, 'Je préfère ne plus aller nulle part en voiture.', 'I prefer not to go anywhere by car any more.',
    '/ʒə pʁe.fɛʁ nə ply.za.le nyl paʁ ɑ̃ vwa.tyʁ/', 'zhuh pray-FEHR | nuh plü-za-LAY nül PAR | ahⁿ vwa-TÜR', ['infinitif', 'nulle-part']),
  sent(1471, "Mieux vaut ne jamais rien signer dans l'urgence.", 'Better never to sign anything in a hurry.',
    '/mjø vo nə ʒa.mɛ ʁjɛ̃ si.ɲe dɑ̃ lyʁ.ʒɑ̃s/', 'myeu VOH | nuh zha-meh ryehⁿ see-NYAY | dahⁿ lür-ZHAHⁿS', ['infinitif']),
  sent(1472, 'Il a accepté sans poser aucune question.', 'He accepted without asking a single question.',
    '/i.la.ak.sɛp.te sɑ̃ po.ze o.kyn kɛs.tjɔ̃/', 'ee-la-ak-sep-TAY | sahⁿ poh-zay oh-künn kes-TYOHⁿ', ['sans']),
  sent(1473, "Je vous demande de ne plus m'écrire qu'à cette adresse.", 'I ask you to write to me only at this address from now on.',
    '/ʒə vu də.mɑ̃d də nə ply me.kʁiʁ ka sɛ.ta.dʁɛs/', 'zhuh voo duh-MAHⁿD | duh nuh plü may-KREER | ka seh-ta-DRESS', ['infinitif', 'plus-que']),
];

/* ── ACT 5 · PAS RESTE DEHORS (.1476-.1493) ──────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1476, "Je n'ai rien remarqué ce soir-là.", 'I noticed nothing that evening.',
    '/ʒə ne ʁjɛ̃ ʁə.maʁ.ke sə swaʁ.la/', 'zhuh nay ryehⁿ ruh-mar-KAY | suh swar-LA', ['empilement'], FCVDR),
  sent(1477, "Il n'y avait personne dans le couloir.", 'There was nobody in the corridor.',
    '/il nja.vɛ pɛʁ.sɔn dɑ̃ lə ku.lwaʁ/', 'eel nya-veh pehr-SONN | dahⁿ luh koo-LWAR', ['empilement']),
  sent(1478, "Je ne l'avais jamais vu avant ce jour.", 'I had never seen him before that day.',
    '/ʒə nə la.vɛ ʒa.mɛ vy a.vɑ̃ sə ʒuʁ/', 'zhuh nuh la-veh zha-meh VÜ | a-vahⁿ suh ZHOOR', ['empilement']),
  sent(1479, "Perdre son logement, ce n'est pas rien.", 'Losing your home is no small thing.',
    '/pɛʁdʁ sɔ̃ lɔʒ.mɑ̃ sə nɛ pa ʁjɛ̃/', 'PEHRDR sohⁿ lozh-MAHⁿ | suh neh pa RYEHⁿ', ['fige']),
  sent(1480, "Trois mois de retard, ce n'est pas rien.", 'Three months late is no small matter.',
    '/tʁwa mwa də ʁə.taʁ sə nɛ pa ʁjɛ̃/', 'trwa MWA duh ruh-TAR | suh neh pa RYEHⁿ', ['fige']),
  sent(1481, "Je n'ai pas vu la camionnette non plus.", 'I did not see the van either.',
    '/ʒə ne pa vy la ka.mjɔ.nɛt nɔ̃ ply/', 'zhuh nay pa VÜ | la ka-myo-NET | nohⁿ PLÜ', ['non-plus']),
  sent(1482, "Ma voisine n'a rien entendu non plus.", 'My neighbour did not hear anything either.',
    '/ma vwa.zin na ʁjɛ̃.nɑ̃.tɑ̃.dy nɔ̃ ply/', 'ma vwa-ZEEN | na ryehⁿ-nahⁿ-tahⁿ-DÜ | nohⁿ PLÜ', ['non-plus']),
  sent(1483, "Pas un voisin n'a appelé la police.", 'Not a single neighbour called the police.',
    '/pa.zœ̃ vwa.zɛ̃ na a.pə.le la pɔ.lis/', 'pa-zuhⁿ vwa-ZEHⁿ | na a-puh-LAY la po-LEESS', ['pas-un']),
  rule(1484, 'Pas ne se combine jamais avec rien, personne, jamais, plus ou aucun.', 'Pas never combines with rien, personne, jamais, plus or aucun.',
    '/pa nə sə kɔ̃.bin ʒa.mɛ a.vɛk ʁjɛ̃ pɛʁ.sɔn ʒa.mɛ ply u o.kœ̃/', 'PA nuh suh kohⁿ-BEEN zha-MEH | a-vek RYEHⁿ | pehr-SONN | zha-MEH | PLÜ oo oh-KUHⁿ',
    '« Je n’ai pas rien vu » : pourquoi est-ce faux ?',
    "Rien a déjà pris la place de pas. Les deux ensemble brouillent le sens, et « pas rien » s'entend même comme « quelque chose » : je n'ai rien vu.",
    ['empilement']),
  rule(1485, "Ce n'est pas rien veut dire : c'est important.", 'Ce n’est pas rien means: it matters.',
    '/sə nɛ pa ʁjɛ̃ vø diʁ sɛ.tɛ̃.pɔʁ.tɑ̃/', 'suh neh pa RYEHⁿ | veu DEER | seh-tehⁿ-por-TAHⁿ',
    '« Trois mois de retard, ce n’est pas rien » : c’est grave, ou sans importance ?',
    "Grave. C'est une expression figée : rien y veut dire une chose sans importance, et pas la nie. Ce n'est pas un empilement, pas plus que dans « ce n'est pas pour rien que… ».",
    ['fige']),
  sent(1486, 'Je ne signerai pas, et mon associée non plus.', 'I will not sign, and neither will my partner.',
    '/ʒə nə si.ɲə.ʁe pa e mɔ̃.na.sɔ.sje nɔ̃ ply/', 'zhuh nuh see-nyuh-RAY PA | ay mohⁿ-na-so-SYAY | nohⁿ PLÜ', ['non-plus']),
  sent(1487, "Ce n'est pas du tout ce que j'ai dit.", 'That is not at all what I said.',
    '/sə nɛ pa dy tu sə kə ʒe di/', 'suh neh pa dü TOO | suh kuh zhay DEE', ['pas-legitime']),
  sent(1488, "Je n'ai pas encore reçu le remboursement.", 'I have not received the refund yet.',
    '/ʒə ne pa.zɑ̃.kɔʁ ʁə.sy lə ʁɑ̃.buʁs.mɑ̃/', 'zhuh nay pa-zahⁿ-KOR ruh-SÜ | luh rahⁿ-boors-MAHⁿ', ['pas-legitime']),
  sent(1489, "Je n'ai reçu aucun appel ce jour-là.", 'I received no call that day.',
    '/ʒə ne ʁə.sy o.kœ̃.na.pɛl sə ʒuʁ.la/', 'zhuh nay ruh-SÜ | oh-kuhⁿ-na-PEL | suh zhoor-LA', ['empilement'], FCVDR),
  gap(1490, "Je n'ai rien vu dans le couloir.", 'I saw nothing in the corridor.',
    '/ʒə ne ʁjɛ̃ vy dɑ̃ lə ku.lwaʁ/', 'zhuh nay ryehⁿ VÜ | dahⁿ luh koo-LWAR',
    'Je n’ai ___ vu dans le couloir. (zéro chose, et pas de pas)',
    "Rien, seul avec ne : je n'ai rien vu. Pas n'entre pas dans la combinaison. EN: rien alone with ne, no pas.",
    ['empilement']),
  sent(1491, "Je n'ai jamais dit ça, pas une seule fois.", 'I never said that, not once.',
    '/ʒə ne ʒa.mɛ di sa pa.zyn sœl fwa/', 'zhuh nay zha-meh DEE SA | pa-zünn suhl FWA', ['pas-un']),
  sent(1492, "Je n'ai pas reçu un seul appel.", 'I did not receive a single call.',
    '/ʒə ne pa ʁə.sy œ̃ sœl a.pɛl/', 'zhuh nay pa ruh-SÜ | uhⁿ suhl a-PEL', ['pas-un']),
  sent(1493, "Tu ne m'as pas dit non plus que le loyer augmentait.", 'You did not tell me either that the rent was going up.',
    '/ty nə ma pa di nɔ̃ ply kə lə lwa.je oɡ.mɑ̃.tɛ/', 'tü nuh ma pa DEE nohⁿ PLÜ | kuh luh lwa-YAY | ohg-mahⁿ-TEH', ['non-plus']),
];

/* ── ACT 6 · LE SUJET NÉGATIF (.1496-.1513) ──────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1496, "Personne n'a rien vu.", 'Nobody saw anything.',
    '/pɛʁ.sɔn na ʁjɛ̃ vy/', 'pehr-SONN | na ryehⁿ VÜ', ['sujet', 'combine'], FCVDR),
  sent(1497, "Rien n'a jamais été prouvé.", 'Nothing has ever been proved.',
    '/ʁjɛ̃ na ʒa.mɛ e.te pʁu.ve/', 'RYEHⁿ | na zha-meh ay-TAY proo-VAY', ['sujet', 'combine']),
  sent(1498, "Aucun témoin ne s'est présenté.", 'No witness came forward.',
    '/o.kœ̃ te.mwɛ̃ nə sɛ pʁe.zɑ̃.te/', 'oh-kuhⁿ tay-MWEHⁿ | nuh seh pray-zahⁿ-TAY', ['sujet']),
  sent(1499, "Nul n'est censé ignorer la loi.", 'Ignorance of the law is no excuse.',
    '/nyl nɛ sɑ̃.se i.ɲɔ.ʁe la lwa/', 'NÜL neh sahⁿ-SAY | ee-nyo-RAY la LWA', ['sujet', 'nul', 'fige'], FCVR, SO),
  sent(1500, "Ni le gardien ni les voisins n'ont rien entendu.", 'Neither the caretaker nor the neighbours heard anything.',
    '/ni lə ɡaʁ.djɛ̃ ni le vwa.zɛ̃ nɔ̃ ʁjɛ̃.nɑ̃.tɑ̃.dy/', 'nee luh gar-DYEHⁿ | nee lay vwa-ZEHⁿ | nohⁿ ryehⁿ-nahⁿ-tahⁿ-DÜ', ['sujet', 'ni'], FCVDR),
  sent(1501, 'Plus personne ne répond à cette adresse.', 'No one answers at this address any more.',
    '/ply pɛʁ.sɔn nə ʁe.pɔ̃ a sɛ.ta.dʁɛs/', 'plü pehr-SONN | nuh ray-POHⁿ | a seh-ta-DRESS', ['sujet', 'combine']),
  sent(1502, "Personne ne m'a jamais rien demandé.", 'No one ever asked me anything.',
    '/pɛʁ.sɔn nə ma ʒa.mɛ ʁjɛ̃ də.mɑ̃.de/', 'pehr-SONN | nuh ma zha-meh ryehⁿ duh-mahⁿ-DAY', ['sujet', 'trois-mots'], FCVDR),
  sent(1503, 'Aucune de ces factures ne correspond à ma consommation.', 'None of these invoices matches my consumption.',
    '/o.kyn də se fak.tyʁ nə kɔ.ʁɛs.pɔ̃ a ma kɔ̃.sɔ.ma.sjɔ̃/', 'oh-KÜNN | duh say fak-TÜR | nuh ko-res-POHⁿ | a ma kohⁿ-so-ma-SYOHⁿ', ['sujet']),
  sent(1504, 'Plus rien ne fonctionne depuis la mise à jour.', 'Nothing has worked since the update.',
    '/ply ʁjɛ̃ nə fɔ̃k.sjɔn də.pɥi la mi.za ʒuʁ/', 'plü RYEHⁿ | nuh fohⁿk-SYONN | duh-pwee la mee-za ZHOOR', ['sujet', 'combine'], FCVDR),
  sent(1505, "Jamais personne ne s'est plaint de ce locataire.", 'No one has ever complained about this tenant.',
    '/ʒa.mɛ pɛʁ.sɔn nə sɛ plɛ̃ də sə lɔ.ka.tɛʁ/', 'zha-meh pehr-SONN | nuh seh PLEHⁿ | duh suh lo-ka-TEHR', ['sujet', 'registre'], FCVR, SO),
  rule(1506, "Avec un sujet négatif, ne va devant le verbe, et pas n'entre jamais.", 'With a negative subject, ne goes before the verb, and pas never comes in.',
    '/a.vɛ.kœ̃ sy.ʒɛ ne.ɡa.tif nə va də.vɑ̃ lə vɛʁb e pa nɑ̃tʁ ʒa.mɛ/', 'a-vek-uhⁿ sü-ZHEH nay-ga-TEEF | nuh va duh-vahⁿ luh VEHRB | ay PA nahⁿtr zha-MEH',
    '« Personne n’est pas venu » : où est l’erreur ?',
    "Pas est de trop : personne a déjà pris sa place. Personne n'est venu. Et à l'écrit, jamais sans ne : « personne est venu », c'est de l'oral.",
    ['sujet']),
  rule(1507, "Nul ne, c'est personne ne, dans une langue soutenue.", 'Nul ne is personne ne in formal language.',
    '/nyl nə sɛ pɛʁ.sɔn nə dɑ̃.zyn lɑ̃ɡ su.tə.ny/', 'NÜL NUH | seh pehr-sonn NUH | dahⁿ-zünn lahⁿg soo-tuh-NÜ',
    '« Nul n’est censé ignorer la loi » : que veut dire nul ?',
    'Personne. Nul est soutenu, toujours au singulier, avec ne et sans pas : nul ne peut entrer.',
    ['sujet', 'nul'], SO),
  gap(1508, "Aucun de nous n'a rien remarqué.", 'None of us noticed anything.',
    '/o.kœ̃ də nu na ʁjɛ̃ ʁə.maʁ.ke/', 'oh-kuhⁿ duh NOO | na ryehⁿ ruh-mar-KAY',
    'Aucun de nous ___ rien remarqué. (avoir, au passé composé)',
    "N'a : aucun est singulier, et ne reste devant le verbe. Pas de pas : aucun et rien suffisent. EN: singular verb, ne, no pas.",
    ['sujet', 'combine']),
  sent(1509, "Personne d'autre n'a la clé du local.", 'Nobody else has the key to the premises.',
    '/pɛʁ.sɔn dotʁ na la kle dy lɔ.kal/', 'pehr-sonn DOHTR | na la KLAY | dü lo-KAL', ['sujet', 'rien-de']),
  sent(1510, "Aucun remboursement ne m'a été proposé.", 'No refund was offered to me.',
    '/o.kœ̃ ʁɑ̃.buʁs.mɑ̃ nə ma e.te pʁɔ.po.ze/', 'oh-kuhⁿ rahⁿ-boors-MAHⁿ | nuh ma ay-TAY pro-poh-ZAY', ['sujet']),
  sent(1511, "Ni la banque ni l'assurance ne m'ont rien dit.", 'Neither the bank nor the insurer told me anything.',
    '/ni la bɑ̃k ni la.sy.ʁɑ̃s nə mɔ̃ ʁjɛ̃ di/', 'nee la BAHⁿK | nee la-sü-RAHⁿS | nuh mohⁿ ryehⁿ DEE', ['sujet', 'ni']),
  sent(1512, "Rien de tout cela n'est exact.", 'None of that is accurate.',
    '/ʁjɛ̃ də tu sə.la nɛ.tɛɡ.za/', 'RYEHⁿ duh too suh-LA | neh-teg-ZA', ['sujet', 'rien-de']),
  sent(1513, 'Nul ne peut entrer dans le local sans autorisation.', 'No one may enter the premises without authorisation.',
    '/nyl nə pø ɑ̃.tʁe dɑ̃ lə lɔ.kal sɑ̃.zo.tɔ.ʁi.za.sjɔ̃/', 'NÜL nuh PEU | ahⁿ-TRAY dahⁿ luh lo-KAL | sahⁿ-zoh-to-ree-za-SYOHⁿ', ['sujet', 'nul'], FCVR, SO),
];

/* ── ACT 7 · PLUS QUE, JAMAIS QUE, PAS QUE (.1516-.1530) ───────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1516, 'Il ne reste plus que deux places.', 'There are only two seats left.',
    '/il nə ʁɛst ply kə dø plas/', 'eel nuh REST | plü kuh deu PLASS', ['restriction', 'plus-que'], FCVDR),
  sent(1517, "Je ne paie plus que l'abonnement de base.", 'I now pay only the basic subscription.',
    '/ʒə nə pɛ ply kə la.bɔn.mɑ̃ də baz/', 'zhuh nuh PEH | plü kuh la-bonn-MAHⁿ | duh BAHZ', ['restriction', 'plus-que']),
  sent(1518, "Ce n'est jamais qu'une facture de plus.", 'It is only one more invoice, after all.',
    '/sə nɛ ʒa.mɛ kyn fak.tyʁ də plys/', 'suh neh zha-meh KÜNN | fak-TÜR duh PLÜSS', ['restriction', 'jamais-que']),
  sent(1519, "Il n'a jamais fait que son travail.", 'He only ever did his job.',
    '/il na ʒa.mɛ fɛ kə sɔ̃ tʁa.vaj/', 'eel na zha-meh FEH | kuh sohⁿ tra-VYE', ['restriction', 'jamais-que']),
  sent(1520, "Il n'y a pas que l'argent dans la vie.", 'Money is not the only thing in life.',
    '/il nja pa kə laʁ.ʒɑ̃ dɑ̃ la vi/', 'eel nya PA kuh | lar-ZHAHⁿ | dahⁿ la VEE', ['restriction', 'pas-que']),
  sent(1521, 'Je ne conteste pas que le montant : je conteste aussi les frais.', 'I am not contesting only the amount: I am contesting the fees too.',
    '/ʒə nə kɔ̃.tɛst pa kə lə mɔ̃.tɑ̃ ʒə kɔ̃.tɛst o.si le fʁɛ/', 'zhuh nuh kohⁿ-TEST pa kuh | luh mohⁿ-TAHⁿ | zhuh kohⁿ-TEST oh-SEE lay FREH', ['restriction', 'pas-que']),
  sent(1522, "Depuis le procès, elle n'a plus parlé qu'à son avocate.", 'Since the trial, she has spoken only to her lawyer.',
    '/də.pɥi lə pʁɔ.sɛ ɛl na ply paʁ.le ka sɔ̃.na.vɔ.kat/', 'duh-pwee luh pro-SEH | el na plü par-LAY | ka sohⁿ-na-vo-KAT', ['restriction', 'plus-que']),
  sent(1523, "On n'entend plus que la pluie.", 'All you can hear now is the rain.',
    '/ɔ̃ nɑ̃.tɑ̃ ply kə la plɥi/', 'ohⁿ nahⁿ-TAHⁿ | plü kuh la PLWEE', ['restriction', 'plus-que']),
  rule(1524, 'Ne… plus que : il ne reste que cela, à partir de maintenant.', 'Ne… plus que: only that is left, from now on.',
    '/nə ply kə il nə ʁɛst kə sə.la a paʁ.tiʁ də mɛ̃t.nɑ̃/', 'nuh PLÜ KUH | eel nuh REST kuh suh-LA | a par-TEER duh mehⁿt-NAHⁿ',
    '« Il ne reste plus que deux places » : combien de places ?',
    'Deux, et il y en avait davantage avant. Plus dit le changement ; que, la seule chose qui reste.',
    ['plus-que']),
  rule(1525, 'Ne… pas que veut dire : pas seulement.', 'Ne… pas que means: not only.',
    '/nə pa kə vø diʁ pa sœl.mɑ̃/', 'nuh PA KUH | veu DEER | pa suhl-MAHⁿ',
    '« Il n’y a pas que l’argent » : l’argent compte-t-il ?',
    "Oui, mais d'autres choses aussi : c'est un rappel de la leçon 19 du B2. Ne… pas que enlève la restriction (pas seulement), là où plus que et jamais que la gardent. Ce n'est pas un empilement, car que n'est pas un mot négatif.",
    ['pas-que']),
  sent(1526, "Je ne demande plus qu'une chose : une réponse écrite.", 'I now ask for only one thing: a written reply.',
    '/ʒə nə də.mɑ̃d ply kyn ʃoz yn ʁe.pɔ̃s e.kʁit/', 'zhuh nuh duh-MAHⁿD | plü künn SHOHZ | ünn ray-pohⁿs ay-KREET', ['restriction', 'plus-que']),
  sent(1527, 'Il ne mange guère que du pain.', 'He eats hardly anything but bread.',
    '/il nə mɑ̃ʒ ɡɛʁ kə dy pɛ̃/', 'eel nuh MAHⁿZH | GEHR kuh dü PEHⁿ', ['restriction', 'soutenu'], FCVR, SO),
  gap(1528, 'Il ne me reste plus que cent euros.', 'I have only a hundred euros left.',
    '/il nə mə ʁɛst ply kə sɑ̃.tø.ʁo/', 'eel nuh muh REST | plü kuh sahⁿ-teu-ROH',
    'Il ne me reste ___ cent euros. (maintenant, seulement)',
    "Plus que : plus pour le changement, que pour la seule chose qui reste. EN: plus que, only … left now.",
    ['restriction', 'plus-que']),
  sent(1529, "Ce n'était jamais qu'un malentendu.", 'It was only ever a misunderstanding.',
    '/sə ne.tɛ ʒa.mɛ kœ̃ ma.lɑ̃.tɑ̃.dy/', 'suh nay-teh zha-meh KUHⁿ | ma-lahⁿ-tahⁿ-DÜ', ['restriction', 'jamais-que']),
  sent(1530, 'Ce dossier ne concerne pas que moi.', 'This file does not concern only me.',
    '/sə do.sje nə kɔ̃.sɛʁn pa kə mwa/', 'suh do-SYAY | nuh kohⁿ-SEHRN | pa kuh MWA', ['restriction', 'pas-que']),
];

/* ── ACT 8 · LE REGISTRE SOUTENU (.1532-.1549) ───────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1532, 'Je ne conteste nullement la facture de mars.', 'I do not in any way dispute the March invoice.',
    '/ʒə nə kɔ̃.tɛst nyl.mɑ̃ la fak.tyʁ də maʁs/', 'zhuh nuh kohⁿ-TEST | nül-MAHⁿ | la fak-TÜR duh MARS', ['soutenu', 'nullement'], FCVDR, SO),
  sent(1533, 'Cette décision ne me concerne aucunement.', 'This decision does not concern me in the slightest.',
    '/sɛt de.si.zjɔ̃ nə mə kɔ̃.sɛʁn o.kyn.mɑ̃/', 'set day-see-ZYOHⁿ | nuh muh kohⁿ-SEHRN | oh-kün-MAHⁿ', ['soutenu', 'nullement'], FCVR, SO),
  sent(1534, "Il n'a guère dormi cette nuit-là.", 'He hardly slept that night.',
    '/il na ɡɛʁ dɔʁ.mi sɛt nɥi.la/', 'eel na GEHR dor-MEE | set nwee-LA', ['soutenu', 'guere'], FCVR, SO),
  sent(1535, "Elle ne sort plus guère depuis l'hiver.", 'She hardly goes out any more since the winter.',
    '/ɛl nə sɔʁ ply ɡɛʁ də.pɥi li.vɛʁ/', 'el nuh SOR | plü GEHR | duh-pwee lee-VEHR', ['soutenu', 'guere', 'combine'], FCVR, SO),
  sent(1536, 'Je ne le connais point.', 'I do not know him at all.',
    '/ʒə nə lə kɔ.nɛ pwɛ̃/', 'zhuh nuh luh ko-NEH PWEHⁿ', ['soutenu', 'point', 'reconnaissance'], FC, SO),
  sent(1537, 'Je ne saurais accepter ces frais.', 'I could not possibly accept these charges.',
    '/ʒə nə so.ʁɛ.zak.sɛp.te se fʁɛ/', 'zhuh nuh soh-reh-zak-sep-TAY | say FREH', ['soutenu', 'ne-seul'], FCVR, SO),
  sent(1538, "Je n'ose imaginer la suite.", 'I dare not imagine what comes next.',
    '/ʒə noz i.ma.ʒi.ne la sɥit/', 'zhuh NOHZ | ee-ma-zhee-NAY la SWEET', ['soutenu', 'ne-seul'], FCVR, SO),
  sent(1539, 'Il ne cesse de nous relancer.', 'He keeps chasing us.',
    '/il nə sɛs də nu ʁə.lɑ̃.se/', 'eel nuh SESS | duh noo ruh-lahⁿ-SAY', ['soutenu', 'ne-seul'], FCVR, SO),
  sent(1540, 'Je ne puis vous répondre avant lundi.', 'I cannot reply to you before Monday.',
    '/ʒə nə pɥi vu ʁe.pɔ̃dʁ a.vɑ̃ lœ̃.di/', 'zhuh nuh PWEE | voo ray-POHⁿDR | a-vahⁿ luhⁿ-DEE', ['soutenu', 'ne-seul'], FCVR, SO),
  sent(1541, 'Si je ne me trompe, le contrat a pris fin en mai.', 'Unless I am mistaken, the contract ended in May.',
    '/si ʒə nə mə tʁɔ̃p lə kɔ̃.tʁa a pʁi fɛ̃ ɑ̃ mɛ/', 'see zhuh nuh muh TROHⁿP | luh kohⁿ-TRA | a pree FEHⁿ | ahⁿ MEH', ['soutenu', 'ne-seul'], FCVR, SO),
  rule(1542, 'Avec savoir, pouvoir, oser et cesser, ne peut rester seul, en registre soutenu.', 'With savoir, pouvoir, oser and cesser, ne can stand alone, in formal style.',
    '/a.vɛk sa.vwaʁ pu.vwaʁ o.ze e sɛ.se nə pø ʁɛs.te sœl ɑ̃ ʁə.ʒistʁ su.tə.ny/', 'a-vek sa-VWAR | poo-VWAR | oh-ZAY ay seh-SAY | nuh peu res-tay SUHL | ahⁿ ruh-zheestr soo-tuh-NÜ',
    '« Je ne saurais dire » : où est le deuxième mot ?',
    "Il n'y en a pas. Avec savoir, pouvoir, oser et cesser, ne suffit à l'écrit soutenu. Au quotidien : je ne sais pas, je ne peux pas.",
    ['ne-seul'], SO),
  rule(1543, 'Nullement et aucunement disent pas du tout, dans une lettre ; point est littéraire.', 'Nullement and aucunement mean not at all, in a letter; point is literary.',
    '/nyl.mɑ̃ e o.kyn.mɑ̃ diz pa dy tu dɑ̃.zyn lɛtʁ pwɛ̃ ɛ li.te.ʁɛʁ/', 'nül-MAHⁿ ay oh-kün-MAHⁿ | deez pa dü TOO | dahⁿ-zünn LETR | PWEHⁿ | eh lee-tay-REHR',
    'Dans une lettre à ton fournisseur, comment dire « pas du tout » ?',
    "Nullement ou aucunement : je ne conteste nullement. Point appartient aux livres anciens : ne l'écris pas dans une lettre d'aujourd'hui.",
    ['nullement', 'point'], SO),
  sent(1544, "Je n'ai nullement l'intention de payer ces frais.", 'I have no intention whatsoever of paying these charges.',
    '/ʒə ne nyl.mɑ̃ lɛ̃.tɑ̃.sjɔ̃ də pɛ.je se fʁɛ/', 'zhuh nay nül-MAHⁿ | lehⁿ-tahⁿ-SYOHⁿ | duh peh-YAY say FREH', ['soutenu', 'nullement'], FCVR, SO),
  sent(1545, "Ce retard n'est aucunement de mon fait.", 'This delay is in no way my doing.',
    '/sə ʁə.taʁ nɛ.to.kyn.mɑ̃ də mɔ̃ fɛ/', 'suh ruh-TAR | neh-toh-kün-MAHⁿ | duh mohⁿ FEH', ['soutenu', 'nullement'], FCVR, SO),
  sent(1546, "Je ne sais s'il a reçu mon courrier.", 'I do not know whether he received my letter.',
    '/ʒə nə sɛ si.la ʁə.sy mɔ̃ ku.ʁje/', 'zhuh nuh SEH | see-la ruh-SÜ | mohⁿ koo-RYAY', ['soutenu', 'ne-seul'], FCVR, SO),
  gap(1547, 'Je ne doute nullement de votre bonne foi.', 'I do not doubt your good faith in the least.',
    '/ʒə nə dut nyl.mɑ̃ də vɔtʁ bɔn fwa/', 'zhuh nuh DOOT | nül-MAHⁿ | duh votr bonn FWA',
    'Je ne doute ___ de votre bonne foi. (pas du tout, dans une lettre)',
    'Nullement, ou aucunement : les deux sont soutenus et corrects. EN: nullement or aucunement.',
    ['soutenu', 'nullement'], FCVR, SO),
  sent(1548, "Point n'est besoin de revenir sur ce détail.", 'There is no need to go back over this detail.',
    '/pwɛ̃ nɛ bə.zwɛ̃ də ʁə.və.niʁ syʁ sə de.taj/', 'PWEHⁿ neh buh-ZWEHⁿ | duh ruh-vuh-NEER | sür suh day-TYE', ['soutenu', 'point', 'reconnaissance'], FC, SO),
  sent(1549, "Je ne cesse de vous le répéter : je n'ai rien commandé.", 'I keep telling you: I ordered nothing.',
    '/ʒə nə sɛs də vu lə ʁe.pe.te ʒə ne ʁjɛ̃ kɔ.mɑ̃.de/', 'zhuh nuh SESS | duh voo luh ray-pay-TAY | zhuh nay ryehⁿ ko-mahⁿ-DAY', ['soutenu', 'ne-seul'], FCVR, SO),
];

/* ── ACT 9 · LA PORTÉE (.1552-.1567) ─────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1552, 'Je ne vous ai pas demandé de résilier mon contrat.', 'I did not ask you to cancel my contract.',
    '/ʒə nə vu.ze pa də.mɑ̃.de də ʁe.zi.lje mɔ̃ kɔ̃.tʁa/', 'zhuh nuh voo-ZAY pa duh-mahⁿ-DAY | duh ray-zee-LYAY | mohⁿ kohⁿ-TRA', ['portee']),
  sent(1553, 'Je vous ai demandé de ne pas résilier mon contrat.', 'I asked you not to cancel my contract.',
    '/ʒə vu.ze də.mɑ̃.de də nə pa ʁe.zi.lje mɔ̃ kɔ̃.tʁa/', 'zhuh voo-ZAY duh-mahⁿ-DAY | duh nuh PA ray-zee-LYAY | mohⁿ kohⁿ-TRA', ['portee'], FCVDR),
  sent(1554, "Je ne pense pas qu'il ait signé ce bon.", 'I do not think he signed this form.',
    '/ʒə nə pɑ̃s pa ki.lɛ si.ɲe sə bɔ̃/', 'zhuh nuh PAHⁿS pa | kee-leh see-NYAY | suh BOHⁿ', ['portee', 'subjonctif']),
  sent(1555, "Je pense qu'il n'a pas signé ce bon.", 'I think he did not sign this form.',
    '/ʒə pɑ̃s kil na pa si.ɲe sə bɔ̃/', 'zhuh PAHⁿS | keel na pa see-NYAY | suh BOHⁿ', ['portee']),
  sent(1556, 'Les voisins ne sont pas tous venus.', 'Not all the neighbours came.',
    '/le vwa.zɛ̃ nə sɔ̃ pa tus və.ny/', 'lay vwa-ZEHⁿ | nuh sohⁿ pa TOOSS | vuh-NÜ', ['portee', 'pas-tous']),
  sent(1557, "Aucun voisin n'est venu.", 'No neighbour came.',
    '/o.kœ̃ vwa.zɛ̃ nɛ və.ny/', 'oh-kuhⁿ vwa-ZEHⁿ | neh vuh-NÜ', ['portee', 'sujet']),
  sent(1558, 'Tous les voisins ne sont pas venus.', 'Not all the neighbours came.',
    '/tu le vwa.zɛ̃ nə sɔ̃ pa və.ny/', 'too lay vwa-ZEHⁿ | nuh sohⁿ pa vuh-NÜ', ['portee', 'pas-tous']),
  sent(1559, "Je n'ai toujours pas reçu le remboursement.", 'I still have not received the refund.',
    '/ʒə ne tu.ʒuʁ pa ʁə.sy lə ʁɑ̃.buʁs.mɑ̃/', 'zhuh nay too-zhoor PA | ruh-SÜ | luh rahⁿ-boors-MAHⁿ', ['portee', 'toujours'], FCVDR),
  sent(1560, 'Je ne reçois pas toujours vos factures.', 'I do not always receive your invoices.',
    '/ʒə nə ʁə.swa pa tu.ʒuʁ vo fak.tyʁ/', 'zhuh nuh ruh-SWA | pa too-ZHOOR | voh fak-TÜR', ['portee', 'toujours']),
  sent(1561, "Je n'ai pas tout payé.", 'I have not paid everything.',
    '/ʒə ne pa tu pɛ.je/', 'zhuh nay pa TOO | peh-YAY', ['portee', 'tout']),
  sent(1562, "Je n'ai rien payé du tout.", 'I have paid nothing at all.',
    '/ʒə ne ʁjɛ̃ pɛ.je dy tu/', 'zhuh nay ryehⁿ peh-YAY | dü TOO', ['portee', 'tout']),
  sent(1563, "Il n'est pas parti parce qu'il était malade, mais parce qu'il s'ennuyait.", 'He did not leave because he was ill, but because he was bored.',
    '/il nɛ pa paʁ.ti paʁs kil e.tɛ ma.lad mɛ paʁs kil sɑ̃.nɥi.jɛ/', 'eel neh pa par-TEE | pars keel ay-teh ma-LAD | meh pars keel sahⁿ-nwee-YEH', ['portee', 'cause']),
  sent(1564, "Il n'est pas parti, parce qu'il était malade.", 'He did not leave, because he was ill.',
    '/il nɛ pa paʁ.ti paʁs kil e.tɛ ma.lad/', 'eel neh pa par-TEE | pars keel ay-teh ma-LAD', ['portee', 'cause']),
  rule(1565, "La négation nie ce qu'elle touche : déplace-la, et tu nies autre chose.", 'A negation denies what it touches: move it, and you deny something else.',
    '/la ne.ɡa.sjɔ̃ ni sə kɛl tuʃ de.plas.la e ty ni o.tʁə ʃoz/', 'la nay-ga-SYOHⁿ | NEE suh kel TOOSH | day-plass-LA | ay tü NEE | oh-truh SHOHZ',
    '« Je ne vous ai pas demandé de partir » et « je vous ai demandé de ne pas partir » : même sens ?',
    "Non. La première nie la demande : il n'y en a pas eu. La deuxième est une demande : ne partez pas.",
    ['portee']),
  rule(1566, 'Pas tous : certains, mais pas tous. Aucun : zéro.', 'Pas tous: some, but not all. Aucun: zero.',
    '/pa tus sɛʁ.tɛ̃ mɛ pa tus o.kœ̃ ze.ʁo/', 'pa TOOSS | sehr-TEHⁿ | meh pa TOOSS | oh-KUHⁿ | zay-ROH',
    '« Les voisins ne sont pas tous venus » : combien sont venus ?',
    "Certains, pas tous. Pour dire zéro : aucun voisin n'est venu. Tous… ne… pas se lit d'ordinaire pas tous, mais l'oreille peut hésiter : dans une lettre, écris ne… pas tous, ou aucun.",
    ['pas-tous']),
  sent(1567, "Il ne m'a pas dit de venir ; il m'a dit de ne pas venir.", 'He did not tell me to come; he told me not to come.',
    '/il nə ma pa di də və.niʁ il ma di də nə pa və.niʁ/', 'eel nuh ma pa DEE | duh vuh-NEER | eel ma DEE | duh nuh pa vuh-NEER', ['portee']),
];

/* ── ACT 10 · LE NE QUI NE NIE PAS, LE NE QUI TOMBE (.1570-.1585) ──────────── */

export const ACT10_ROWS: Row[] = [
  sent(1570, "Partons avant qu'il ne pleuve.", 'Let us leave before it rains.',
    '/paʁ.tɔ̃ a.vɑ̃ kil nə plœv/', 'par-TOHⁿ | a-vahⁿ keel nuh PLUHV', ['expletif'], FCVR, SO),
  sent(1571, 'Je crains que la facture ne soit déjà partie.', 'I am afraid the invoice has already gone out.',
    '/ʒə kʁɛ̃ kə la fak.tyʁ nə swa de.ʒa paʁ.ti/', 'zhuh KREHⁿ | kuh la fak-TÜR | nuh swa day-zha par-TEE', ['expletif'], FCVR, SO),
  sent(1572, 'Je crains que la facture ne soit pas encore partie.', 'I am afraid the invoice has not gone out yet.',
    '/ʒə kʁɛ̃ kə la fak.tyʁ nə swa pa.zɑ̃.kɔʁ paʁ.ti/', 'zhuh KREHⁿ | kuh la fak-TÜR | nuh swa pa-zahⁿ-kor par-TEE', ['expletif', 'vraie-negation']),
  sent(1573, "C'est plus cher qu'on ne le pense.", 'It is more expensive than people think.',
    '/sɛ ply ʃɛʁ kɔ̃ nə lə pɑ̃s/', 'seh plü SHEHR | kohⁿ nuh luh PAHⁿS', ['expletif'], FCVR, SO),
  sent(1574, "Nous signerons, à moins qu'il n'y ait un problème.", 'We will sign, unless there is a problem.',
    '/nu si.ɲə.ʁɔ̃ a mwɛ̃ kil ni.ɛ.tœ̃ pʁɔ.blɛm/', 'noo see-nyuh-ROHⁿ | a mwehⁿ keel nee-eh-tuhⁿ pro-BLEM', ['expletif'], FCVR, SO),
  rule(1575, 'Le ne explétif ne nie rien : enlève-le, et le sens reste le même.', 'The ne explétif negates nothing: take it out and the meaning stays the same.',
    '/lə nə ɛks.ple.tif nə ni ʁjɛ̃ ɑ̃.lɛv.lə e lə sɑ̃s ʁɛst lə mɛm/', 'luh NUH eks-play-TEEF | nuh nee RYEHⁿ | ahⁿ-LEV-luh | ay luh SAHⁿS | rest luh MEM',
    '« Partons avant qu’il ne pleuve » : il pleut, ou pas encore ?',
    "Pas encore : ce ne ne nie rien. « Avant qu'il pleuve » dit la même chose, en plus courant. Un vrai non demande pas : qu'il ne pleuve pas.",
    ['expletif']),
  sent(1576, "Préviens-moi avant qu'il parte.", 'Let me know before he leaves.',
    '/pʁe.vjɛ̃.mwa a.vɑ̃ kil paʁt/', 'pray-vyehⁿ-MWA | a-vahⁿ keel PART', ['expletif']),
  sent(1577, "J'ai jamais rien vu de pareil.", 'I have never seen anything like it.',
    '/ʒe ʒa.mɛ ʁjɛ̃ vy də pa.ʁɛj/', 'zhay zha-meh ryehⁿ VÜ | duh pa-REY', ['oral'], FCVR, FA),
  sent(1578, "Je n'ai jamais rien vu de pareil.", 'I have never seen anything like it.',
    '/ʒə ne ʒa.mɛ ʁjɛ̃ vy də pa.ʁɛj/', 'zhuh nay zha-meh ryehⁿ VÜ | duh pa-REY', ['ecrit'], FCVDR),
  sent(1579, 'Y a plus personne au guichet.', 'There is nobody at the counter any more.',
    '/ja ply pɛʁ.sɔn o ɡi.ʃɛ/', 'ya plü pehr-SONN | oh ghee-SHEH', ['oral'], FCVR, FA),
  sent(1580, "Il n'y a plus personne au guichet.", 'There is nobody at the counter any more.',
    '/il nja ply pɛʁ.sɔn o ɡi.ʃɛ/', 'eel nya plü pehr-SONN | oh ghee-SHEH', ['ecrit'], FCVDR),
  sent(1581, "Je n'en veux plus.", 'I do not want any more.',
    '/ʒə nɑ̃ vø ply/', 'zhuh nahⁿ veu PLÜ', ['ecrit', 'plus']),
  sent(1582, "J'en veux plus, s'il vous plaît.", 'I would like more, please.',
    '/ʒɑ̃ vø plys sil vu plɛ/', 'zhahⁿ veu PLÜSS | seel voo PLEH', ['oral', 'plus']),
  rule(1583, "Sans ne, plus peut vouloir dire davantage : à l'écrit, garde ne pour lever le doute.", 'Without ne, plus can mean more: in writing, keep ne to remove the doubt.',
    '/sɑ̃ nə ply pø vu.lwaʁ diʁ da.vɑ̃.taʒ a le.kʁi ɡaʁd nə puʁ lə.ve lə dut/', 'sahⁿ NUH | PLÜ peu voo-lwar DEER da-vahⁿ-TAHZH | a lay-KREE | gard NUH | poor luh-vay luh DOOT',
    '« J’en veux plus » : encore, ou plus du tout ?',
    "L'oreille décide : [ply], plus du tout ; [plys], davantage. À l'écrit, « je n'en veux plus » ne laisse aucun doute.",
    ['oral', 'plus']),
  sent(1584, "Personne m'a rien dit.", 'Nobody told me anything.',
    '/pɛʁ.sɔn ma ʁjɛ̃ di/', 'pehr-SONN | ma ryehⁿ DEE', ['oral'], FCVR, FA),
  sent(1585, "Personne ne m'a rien dit.", 'Nobody told me anything.',
    '/pɛʁ.sɔn nə ma ʁjɛ̃ di/', 'pehr-SONN | nuh ma ryehⁿ DEE', ['ecrit'], FCVDR),
];

/* ── ACT 11 · CONTESTER PAR ÉCRIT (.1588-.1599) ──────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1588, 'Je conteste formellement la facture du 12 mars.', 'I formally dispute the invoice of 12 March.',
    '/ʒə kɔ̃.tɛst fɔʁ.mɛl.mɑ̃ la fak.tyʁ dy duz maʁs/', 'zhuh kohⁿ-TEST | for-mel-MAHⁿ | la fak-TÜR | dü dooz MARS', ['lettre']),
  sent(1589, "Je n'ai jamais souscrit à cette option.", 'I never subscribed to this option.',
    '/ʒə ne ʒa.mɛ sus.kʁi a sɛ.tɔp.sjɔ̃/', 'zhuh nay zha-meh soos-KREE | a seh-top-SYOHⁿ', ['lettre'], FCVDR),
  sent(1590, "Je n'ai reçu aucun avis de passage.", 'I received no delivery notice.',
    '/ʒə ne ʁə.sy o.kœ̃.na.vi də pa.saʒ/', 'zhuh nay ruh-SÜ | oh-kuhⁿ-na-VEE | duh pa-SAHZH', ['lettre'], FCVDR),
  sent(1591, "Personne ne m'a informé de ce changement de tarif.", 'No one informed me of this price change.',
    '/pɛʁ.sɔn nə ma ɛ̃.fɔʁ.me də sə ʃɑ̃ʒ.mɑ̃ də ta.ʁif/', 'pehr-SONN | nuh ma ehⁿ-for-MAY | duh suh shahⁿzh-MAHⁿ | duh ta-REEF', ['lettre', 'sujet']),
  sent(1592, "Je ne nie pas avoir reçu le colis ; je nie l'avoir commandé.", 'I do not deny receiving the parcel; I deny ordering it.',
    '/ʒə nə ni pa.za.vwaʁ ʁə.sy lə kɔ.li ʒə ni la.vwaʁ kɔ.mɑ̃.de/', 'zhuh nuh nee pa-za-VWAR | ruh-SÜ luh ko-LEE | zhuh NEE | la-vwar ko-mahⁿ-DAY', ['lettre', 'portee']),
  sent(1593, "Je ne saurais payer un service dont je n'ai jamais bénéficié.", 'I could not pay for a service I have never had.',
    '/ʒə nə so.ʁɛ pɛ.je œ̃ sɛʁ.vis dɔ̃ ʒə ne ʒa.mɛ be.ne.fi.sje/', 'zhuh nuh soh-REH peh-YAY | uhⁿ sehr-VEESS | dohⁿ zhuh nay zha-MEH | bay-nay-fee-SYAY', ['lettre', 'soutenu'], FCVR, SO),
  sent(1594, "Je vous prie donc d'annuler ces frais.", 'I therefore ask you to cancel these charges.',
    '/ʒə vu pʁi dɔ̃k da.ny.le se fʁɛ/', 'zhuh voo PREE dohⁿk | da-nü-LAY say FREH', ['lettre'], FCVR, SO),
  sent(1595, "Depuis ma lettre du 2 avril, je n'ai plus eu aucune nouvelle de vos services.", 'Since my letter of 2 April, I have not heard a single word from your departments.',
    '/də.pɥi ma lɛtʁ dy dø.za.vʁil ʒə ne ply.zy o.kyn nu.vɛl də vo sɛʁ.vis/', 'duh-pwee ma LETR | dü deu-za-VREEL | zhuh nay plü-ZÜ | oh-künn noo-VEL | duh voh sehr-VEESS', ['lettre', 'plus-aucun']),
  sent(1596, "À aucun moment je n'ai donné mon accord.", 'At no point did I give my consent.',
    '/a o.kœ̃ mɔ.mɑ̃ ʒə ne dɔ.ne mɔ̃.na.kɔʁ/', 'a oh-kuhⁿ mo-MAHⁿ | zhuh nay do-NAY | mohⁿ-na-KOR', ['lettre', 'soutenu'], FCVR, SO),
  sent(1597, 'Je ne vous demande pas un geste commercial : je vous demande de corriger une erreur.', 'I am not asking you for a goodwill gesture: I am asking you to correct an error.',
    '/ʒə nə vu də.mɑ̃d pa œ̃ ʒɛst kɔ.mɛʁ.sjal ʒə vu də.mɑ̃d də kɔ.ʁi.ʒe y.nɛ.ʁœʁ/', 'zhuh nuh voo duh-mahⁿd PA | uhⁿ zhest ko-mehr-SYAL | zhuh voo duh-MAHⁿD | duh ko-ree-ZHAY ü-neh-RUHR', ['lettre', 'portee']),
  sent(1598, 'Sans réponse de votre part sous quinze jours, je saisirai le médiateur.', 'Without a reply from you within fifteen days, I shall refer the matter to the ombudsman.',
    '/sɑ̃ ʁe.pɔ̃s də vɔtʁ paʁ su kɛ̃z ʒuʁ ʒə se.zi.ʁe lə me.dja.tœʁ/', 'sahⁿ ray-POHⁿS | duh votr PAR | soo kehⁿz ZHOOR | zhuh say-zee-RAY | luh may-dya-TUHR', ['lettre'], FCVR, SO),
  sent(1599, "Je n'ai ni signé ce bon ni autorisé ce prélèvement.", 'I neither signed this form nor authorised this direct debit.',
    '/ʒə ne ni si.ɲe sə bɔ̃ ni o.tɔ.ʁi.ze sə pʁe.lɛv.mɑ̃/', 'zhuh nay nee see-NYAY suh BOHⁿ | nee oh-to-ree-ZAY | suh pray-lev-MAHⁿ', ['lettre', 'ni']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS
 *
 *  The long readings (B2: 200 to 350 words) and the eight short « dans un
 *  texte » paragraphs (60 to 120 words) that close acts 3 to 10. They live
 *  here so the reading, the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a witness statement, Liège. */
export const LECTURE_DEPOSITION =
  "Déposition de Mme Nadia Haddad, recueillie au commissariat de Liège le 14 mars. « Je rentrais du travail vers 22 heures. Je n'avais jamais rien remarqué d'anormal dans ce parking, et ce soir-là non plus, au début. Il n'y avait plus aucune voiture au deuxième niveau, sauf la mienne et une camionnette blanche. Je n'ai vu personne près de la camionnette, et je n'ai entendu aucun bruit de moteur. Personne n'est sorti de l'ascenseur pendant que je chargeais mes courses. Puis il y a eu un choc sourd, en dessous. Je n'ai pas entendu de portière claquer non plus. Je ne saurais dire d'où venait le bruit. Je suis descendue au premier niveau ; ensuite, je n'ai plus rien entendu, et je n'ai trouvé personne. Aucune porte n'était ouverte. Je tiens à préciser un point. Je n'ai pas dit que j'avais vu le conducteur : j'ai dit que je ne l'avais pas vu. Ce n'est pas rien, car c'est sur cette phrase que repose l'accusation contre mon voisin. Je ne connais pas bien ce voisin, et je ne cherche nullement à le protéger. Mais je n'ai vu ni la voiture ni son conducteur, et je ne peux témoigner que de ce que j'ai vu. Je n'ai rien d'autre à ajouter. »";

/** Act 11: the model the learner imitates, a letter contesting an invoice. */
export const LECTURE_MODELE =
  "Objet : contestation de la facture du 12 mars. Madame, Monsieur, je conteste formellement la facture du 12 mars, qui me réclame 89,90 dollars pour l'option « Sport plus ». Je n'ai jamais souscrit à cette option, ni par téléphone ni en ligne, et personne ne m'a informé de ce changement de tarif. Je ne conteste nullement le montant de mon abonnement de base, que je règle chaque mois sans aucun retard ; je conteste seulement ce qui s'y est ajouté sans mon accord. Votre conseiller affirme que j'ai accepté l'offre lors d'un appel, le 2 février. Je n'ai reçu aucun appel ce jour-là, et je ne saurais payer un service dont je n'ai jamais bénéficié : mon décodeur n'a jamais affiché aucune chaîne de sport. Je tiens à préciser un point. Je ne vous ai pas demandé de modifier mon forfait ; je vous ai demandé, en janvier, de ne rien y changer. Depuis ma lettre du 2 avril, je n'ai plus eu aucune nouvelle de vos services. Je ne vous demande pas un geste commercial : je vous demande de corriger une erreur. Je vous prie donc d'annuler ces frais et de me rembourser les deux mois déjà prélevés. Sans réponse de votre part sous quinze jours, je saisirai le médiateur. Veuillez agréer, Madame, Monsieur, mes salutations distinguées. Martine Gagnon, Sherbrooke";

/** The eight « dans un texte » paragraphs (acts 3 to 10). */
export const TEXTE_A3 =
  "La déposition de M. Rochat, gardien d'un entrepôt à Lausanne, au lendemain d'un vol. Mets chaque verbe entre parenthèses au passé composé, en gardant la négation. « Cette nuit-là, je (ne plus voir personne) après vingt heures. Je (ne jamais rien signer) pour ce livreur. Depuis juin, nous (ne plus recevoir aucune livraison) le dimanche. Dans la cour, je (ne voir personne d'autre), et je (ne plus parler qu'à) ma collègue de l'accueil. »";

export const TEXTE_A4 =
  "Le courriel de Léa à son voisin du dessous, à Genève, après une plainte pour bruit. Remets les mots entre parenthèses dans le bon ordre. « Cher Monsieur Favre, je vous présente mes excuses pour samedi. Je m'engage à (déplacer / rien / ne / plus) après vingt-deux heures et à (inviter / plus / personne / ne) en semaine. Hier, mes amis sont repartis sans (aucun / faire / bruit). Je vous promets aussi de (claquer / ne / jamais) la porte de l'entrée. J'espère que nous pourrons en rester là sans (rien / signaler) à la régie. Léa Morel »";

export const TEXTE_A5 =
  "Le courriel de Hugo Lambert, contrôleur de gestion à Lyon, accusé d'avoir modifié un tableau. Le courriel contient cinq négations fautives, réparties dans quatre phrases ; une seule phrase est correcte. Corrige les cinq fautes. « Madame, je n'ai pas rien modifié dans ce tableau. Je ne l'ai pas jamais ouvert après le 3 mai. Il n'y avait pas personne au bureau ce soir-là, et je n'ai pas reçu aucun message du service. Ma collègue n'a rien vu, et moi aussi. Être accusé sans preuve, ce n'est pas rien. Hugo Lambert »";

export const TEXTE_A6 =
  "Le compte rendu du conseil de copropriété d'un immeuble de la rue Saint-Denis, à Montréal. Mets chaque verbe entre parenthèses au passé composé. « Depuis la panne de mars, personne ne (réparer) l'ascenseur. Rien ne (être fait) pour les résidents âgés du sixième. Aucun technicien ne (se déplacer). Ni le gestionnaire ni le propriétaire ne (répondre) à nos courriels. Personne ne nous (proposer) jamais rien. Nul ne (pouvoir) nous dire quand les travaux commenceront. Le conseil demande une rencontre avant la fin du mois. »";

export const TEXTE_A7 =
  "Un souvenir d'enfance publié dans une revue de Gaspésie. Complète chaque blanc avec plus que, jamais que ou pas que. « Dans le village de ma grand-mère, l'école a fermé, puis le magasin ; il ne reste (___) l'église et deux maisons. Le soir, depuis, on n'y entend (___) le vent. Ma grand-mère disait en riant que ce n'était (___) un village comme les autres, mais elle ajoutait qu'il n'y avait (___) la pêche dans la vie : il y avait aussi les chansons. Aujourd'hui, je n'y retourne (___) l'été, pour une semaine. »";

export const TEXTE_A8 =
  "La réponse de Me Dubois, notaire à Namur, à une cliente mécontente. Réécris chaque phrase dans le registre soutenu, avec le mot indiqué entre parenthèses. « Madame, je ne conteste pas du tout votre demande (nullement). Ce retard n'est pas du tout de mon fait (aucunement). Je ne peux pas vous répondre avant lundi (ne seul, avec pouvoir). Je ne sais pas si votre voisin a signé l'acte (ne seul, avec savoir). Il ne vient presque plus à l'étude (plus guère). Veuillez agréer, Madame, mes salutations distinguées. »";

export const TEXTE_A9 =
  "La lettre de mise au point de Mme Diallo à son opérateur téléphonique, à Dakar. Lis-la, puis dis ce que nie chaque phrase. « Je ne vous ai pas demandé de résilier mon contrat : je vous ai demandé de ne pas le résilier. Je ne pense pas que votre conseiller ait menti ; je pense qu'il n'a pas compris. Vos clients n'ont pas tous été prévenus du changement : certains l'ont été, d'autres non. Je n'ai toujours pas reçu de réponse, alors que vous ne répondez pas toujours aussi lentement. Je n'ai pas tout payé d'avance, mais j'ai réglé les frais de mise en service. »";

export const TEXTE_A10 =
  "Le témoignage de Kevin, enregistré par une radio de Marseille, à transcrire pour le site du journal. Réécris-le à l'écrit, avec tous les ne qu'il faut. « Moi, j'ai jamais rien vu de pareil. Y avait plus personne dans la rue, et personne m'a rien dit. Les voisins, pareil : ils ont rien entendu. J'ai plus confiance, franchement. Je voulais rentrer avant qu'il pleuve, mais je suis resté pour aider. »";
