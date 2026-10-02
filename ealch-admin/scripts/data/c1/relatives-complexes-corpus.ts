// c1.04.l1 « Les relatives complexes »: the authored corpus, the imports, the
// texts and the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar
// mission journey) with the C1 rules of C1-BUILD-LOG.md (« What is different
// at C1 », wave 2 brief). Structural model: b2.06 (`../b2/subjonctif-indicatif-*`).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 4 of the C1 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE RELATIVE CLAUSE AS A HOOK: which noun it hangs on, and what it adds.
//
//     act 1   the problem (an invitation where « qui » hangs on the wrong
//             person); ONE recap of lessons 11, 12, 13 in B1 and lesson 6 in
//             B2, rows reused by id
//     act 2   partitive dont: dont deux, dont la plupart, dont certains,
//             dont moi, with or without a verb; parmi lesquels; never « dont
//             … en », never « dont deux d’entre eux »
//     act 3   preposition + quoi with no noun in front: ce à quoi, ce sur
//             quoi, ce contre quoi, rien à quoi; sans quoi, faute de quoi,
//             après quoi, moyennant quoi; « une chose à quoi » (literary)
//     act 4   the relative ending on an infinitive: un endroit où dormir,
//             quelqu’un à qui parler, rien sur quoi s’appuyer; de quoi + inf.
//             (de quoi vivre, il y a de quoi, pas de quoi); never « que + inf. »
//     act 5   attachment ambiguity in long noun groups (le N de N + relative):
//             the clues (verb number, participle agreement, sense)
//     act 6   lequel as SUBJECT to lift the doubt (explicative only, written
//             register), its limit (same gender and number), the other
//             repairs; auquel cas
//     act 7   explicative or déterminative AS MEANING: how many are
//             concerned, the hidden cause or concession, the proper noun
//             with an article (« le Montréal où j’ai grandi »)
//     act 8   où or dans lequel with abstract antecedents: situation, cas,
//             point, mesure, domaine against principe, méthode, règle; là où
//     act 9   relatives inside relatives, by register: dont je sais qu’il
//             (soutenu), que je crois que (lourd), que je crois qui
//             (familier, recognise only), qui, je crois, (all registers);
//             « c’est de cela dont » (pleonasm, avoided in careful usage)
//     act 10  lightening a chain of relatives (participle, adjective,
//             complement, two sentences); reading au cours duquel, à
//             l’issue de laquelle, en vertu duquel in dense prose
//     act 11  the task: a 250 to 350 word notice for a restored building
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 11 in B1   qui / que, the look-behind test, commas = an aside
//                       (row 1155; act 7 goes PAST it, never repeats it)
//     lesson 12 in B1   dont (de complement, adjective, possessor), où for
//                       place and time, preposition + qui for people
//     lesson 13 in B1   lequel after a preposition, auquel / duquel, duquel
//                       after a compound preposition (OWNED THERE: act 10 only
//                       reads new locutions), ce qui / ce que / ce dont
//     lesson 6 in B2    the subjunctive in relatives (sought, denied,
//                       superlative), acts 5-6: named in the recap only
//
//   LEFT TO c1.05 (« L’ellipse et la reprise », written in parallel): celui
//   de / celle que, ce dernier, repairing an ambiguous PRONOUN. Act 6 repairs
//   an ambiguous RELATIVE and never teaches celui-ci or ce dernier.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-01 inside BEGIN TRANSACTION READ ONLY
//      … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `pronoms-essentiels`: range a1-c1 (widened for wave 2), sub-themes
//     « les pronoms d’insistance », « les relatives complexes ». Rows: a1 135,
//     a2 432, b1 908 (to .1797), b2 205 (to .1990), c1 0.
//
//  2. ID BLOCK: this lesson owns `fr.c1.pronoms-essentiels.2000` to `.2199`
//     AND NOTHING ELSE. Re-probed 2026-10-01: 0 rows in 2000-2199 at any
//     level. Used: see the act banners in §G and the header of the lesson.
//
//  3. REUSED ROWS (§F). The B1 and B2 rows and the three c1 rows of lessons
//     21 and 24 are in seedPlusPacks() and printed through `src()`. FOUR
//     legacy c1 rows are PUBLISHED IN POSTGRES BUT ABSENT FROM THE SEED CUT,
//     carried in `PG_ROWS` with fr / en / drills copied verbatim (2026-10-01).
//     They carry no flashcard drill (`{sentence,review}`): named, never
//     released, never in the speak practice. Two keep Postgres’s straight
//     apostrophe (decision 13 fixes legacy typography as a text edit at the
//     import); neither is quoted inside the scenario. The Canadian-history
//     rows the research flagged (nuances-et-registres .034, .035) are NOT
//     reused.
//
//  4. NO AUTHORED ROW REPEATS A PUBLISHED SENTENCE: every `fr` was folded and
//     compared with every Postgres row (scratch check, 2026-10-01; result in
//     the report). No vocabulary (headword) row is authored: every row is a
//     sentence, a gapfill card or a rule card.
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR. A real
//     /n/ or /m/ after a vowel is written double: personne pehr-SONN, semaine
//     suh-MENN, une ÜNN, comme KOMM, même MEMM, donne DONN, femme FAMM,
//     domaine do-MENN, Garonne, reine, madame. Every doubled consonant is
//     really pronounced. No U+203F tie anywhere, respelling or IPA.
//
//  6. EVERY TEXT IN §I IS ORIGINAL, WRITTEN FOR THE LESSON (« texte original
//     écrit pour la leçon »). No literary or press extract is quoted. Every
//     place, institution, outlet and person is invented: the town of
//     Pont-Aurèle, its Archives, the fonds Ferland, Jeanne Ferland and her
//     grandson Léandre, Mathilde Rozier (archivist), Karim Benslimane, the
//     association Les Amis des Archives, the imprimerie Lavallière and Émile
//     and Odette Lavallière, the gare de Pont-Aurèle, La Gazette des Rives
//     and its column « Langue vivante » signed Béatrice Lacombe, Me Olivier
//     Brassard, the Résidence des Tilleuls, Sophie, Noé, Inès, Bastien. No
//     living politician, no real event.
//
//  7. FACT CHECK LIST (for the pre-review). Every claim about the real world
//     or about usage norms:
//       a. « C’est de cela dont il s’agit » is a grammatical pleonasm (de and
//          dont mark the same complement); careful usage writes « c’est de
//          cela qu’il s’agit » or « c’est cela dont il s’agit » (act 9, rule
//          2161, sheet-registre). Attributed in the lesson to « les guides de
//          bon usage, en France comme au Québec ». CHECKED 2026-10-01: the
//          Académie (« Dire, ne pas dire », DNP0650) calls « C’est de cette
//          affaire dont je vous parle » a pleonasm and a grammatical fault,
//          classical usage aside; the BDL (« Le pronom relatif dont ») says
//          dont « ne doit pas être utilisé avec un antécédent précédé de la
//          préposition de » and prescribes que « pour éviter le pléonasme ».
//          Both also condemn dont + en. BDL (lequel): lequel subject only in
//          an explicative, always after a comma; « parmi » always takes
//          lequel, whatever the antecedent.
//       b. « Que je crois qui » (« un livre que je crois qui te plaira ») is
//          popular / familiar speech; « dont je sais qu’il » is written and
//          soutenu; « que je crois que » is correct but heavy (act 9). To
//          check against Grevisse (Le Bon Usage, § on relative pronouns in a
//          subordinate clause: « la relative imbriquée »).
//       c. « Dont » with a quantity (dont deux, dont la plupart, dont
//          certains, dont moi) may stand without a verb; « dont … en » and
//          « dont deux d’entre eux » are redundant (act 2). To check against
//          Le Robert (dont) and the BDL.
//       d. « Parmi lesquels » (not « parmi qui ») is the usual form, people
//          included (act 2). Grevisse records « parmi qui » as rare.
//       e. Quoi with a NOUN antecedent (« une chose à quoi je n’avais jamais
//          songé ») is literary; with ce, rien, quelque chose or a clause it
//          is the norm (act 3). Grevisse.
//       f. Lequel as SUBJECT opens only an explicative relative and belongs
//          to the written, administrative or legal register (act 6).
//       g. « Le cas où », « au cas où » take the conditional (act 8, row
//          2137). Legacy row fr.c1.francais-professionnel-avance.024 breaks
//          this (research finding 2); it is not reused.
//       h. « Où » works for place, time and a situation seen as a place; a
//          verb whose preposition is not locative takes preposition +
//          lequel (act 8). « Le contexte où » and « le contexte dans
//          lequel » are both accepted.
//       i. Act 10 reading: paper made with a mould leaves a watermark
//          (filigrane) and laid and chain lines (vergeures, pontuseaux) that
//          help date a sheet (checked 2026-10-01, memoryofpaper.eu Briquet);
//          machine-made wove paper spreads in the nineteenth century. Kept
//          general, no date given.
//     QUOTATIONS: none.
//
//  8. APOSTROPHES: every authored French string uses the typographic ’. The
//     reused B1 and B2 rows keep the straight ' of their Postgres text; the
//     scenario quotes no row, so it never mixes the two.
//
//  9. REGISTER. Rows are `courant` except `soutenu`: 2001, 2010 (lequel
//     sujet), 2043 (moyennant quoi), 2052 (une chose à quoi), 2095, 2096,
//     2097, 2099, 2101, 2105, 2184 (lequel sujet), 2150, 2151, 2162 (dont +
//     que), 2170, 2171 (en vertu duquel, à l’égard desquels); `familier`: 2154
//     (que je crois qui).
//
// 10. USED: 162 rows, .2000-.2013, .2015-.2029, .2035-.2053, .2055-.2073,
//     .2075-.2091, .2095-.2107, .2115-.2130, .2135-.2147, .2150-.2163,
//     .2165-.2176, .2180-.2189. Free for later use: .2190-.2199 and the gaps.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.04',
  seq: 4,
  title: 'Complex Relative Clauses',
  sub: 'Les relatives complexes',
  canDo: 'Can build and decode relative clauses with partitive dont, preposition + quoi, an infinitive, lequel as subject and abstract antecedents, can tell which noun a relative clause hangs on in a long noun group and repair an ambiguous one, can use the comma to change who is concerned, and can lighten a chain of relatives in formal writing',
  prereqUnitIds: ['b1.11', 'b1.12', 'b1.13', 'b2.06'],
} as const;

export const LESSON_ID = 'c1.04.l1';
export const THEME = 'pronoms-essentiels';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief. */
export const ID_RANGES = [[2000, 2199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  Every cited unit is in the seed with its `seq` (B1, B2 and the four
 *  published C1 lessons). A surface is French: never a raw id on screen,
 *  always « la leçon N du B1 / B2 / C1 ».
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  if (band === 'b1' || band === 'b2' || band === 'c1') {
    const n = SEQ.get(unitId);
    if (!n) throw new Error(`c1.04: ${unitId} is not in the seed`);
    return `la leçon ${n} du ${band.toUpperCase()}`;
  }
  return unitRef(unitId);
}

export const QUI_QUE_UNIT = 'b1.11';
export const DONT_OU_UNIT = 'b1.12';
export const LEQUEL_UNIT = 'b1.13';
export const SUBJ_IND_UNIT = 'b2.06';

export const QUI_QUE_REF = refFr(QUI_QUE_UNIT);
export const DONT_OU_REF = refFr(DONT_OU_UNIT);
export const LEQUEL_REF = refFr(LEQUEL_UNIT);
export const SUBJ_IND_REF = refFr(SUBJ_IND_UNIT);
export const B1_RANGE_REF = 'les leçons 11, 12 et 13 du B1';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B111_REFRAME, REFRAME_EN as B111_REFRAME_EN } from '../b1/qui-que-corpus.ts';
export { REFRAME as B112_REFRAME, REFRAME_EN as B112_REFRAME_EN } from '../b1/dont-ou-corpus.ts';
export { REFRAME as B113_REFRAME, REFRAME_EN as B113_REFRAME_EN } from '../b1/lequel-ce-qui-corpus.ts';
export { REFRAME as B206_REFRAME, REFRAME_EN as B206_REFRAME_EN } from '../b2/subjonctif-indicatif-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE MOBILE. A hanging mobile: every piece hangs from ONE arm by its own
 *  thread. A relative clause is such a piece. At B1 the learner chose the
 *  right thread (qui, que, dont, où, lequel). At C1 the questions are which
 *  arm the piece hangs from (acts 5, 6, 9, 10) and what it adds to it:
 *  identify the noun or comment on it (act 7), a part of it (act 2), a
 *  place to do something (act 4). Ce, rien, quelque chose are the arm when
 *  no noun is there (act 3).
 *
 *  It is NOT « the relative goes next to its noun »: true advice, false as a
 *  description (acts 5 and 9 show relatives that sit next to the wrong noun
 *  and are still read right, by agreement or sense).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Une relative s’accroche à un nom : sache lequel, et ce qu’elle lui ajoute.';
export const REFRAME_EN = 'A relative clause hooks onto a noun: know which one, and what it adds to it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'La relative se place toujours juste après son nom.',
    why: 'False where acts 5 and 9 must hold: « les clés du bureau qui sont sur la table » hangs on clés, two words back, and is read right because of « sont ». It is good advice for writing (act 6), not a description of French.',
  },
  {
    text: 'Le verbe choisit le pronom relatif.',
    why: 'Lesson 12 in B1 already owns it (« la préposition ouvre la relative »), and it is silent on everything new here: the comma (act 7), the attachment (act 5), the partitive (act 2).',
  },
  {
    text: 'Au C1, préfère lequel à qui : c’est plus précis.',
    why: 'It sends the learner into « la femme laquelle chante » and into a stiff register in speech (act 6). Lequel subject is a repair for one ambiguity, nothing more.',
  },
  {
    text: 'Une relative, c’est un adjectif en plus long.',
    why: 'True of the déterminative, false of the explicative, which can carry a cause or a concession (act 7), and of « un endroit où dormir », which adds a purpose (act 4).',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (French in the comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const PE1 = (n: number) => `fr.b1.pronoms-essentiels.${n}`;
const OA2 = (n: number) => `fr.b2.opinions-et-avis.${n}`;

export const IMPORTED = {
  act1: [
    PE1(1150),                        // Ma sœur, qui habite à Sherbrooke, arrive vendredi.  (lesson 11)
    PE1(1156),                        // Les gens qui arrivent en retard attendent dehors.  (lesson 11)
    PE1(1155),                        // Deux virgules : un ajout. Pas de virgule : la relative dit lequel.  (lesson 11, rule)
    PE1(1221),                        // Le livre dont je t'ai parlé est à la bibliothèque.  (lesson 12)
    PE1(1265),                        // La femme dont le fils est médecin habite en face.  (lesson 12)
    PE1(1307),                        // Le jour où je l'ai rencontrée, il neigeait.  (lesson 12)
    PE1(1472),                        // Le bâtiment à côté duquel nous garons le camion est une école.  (lesson 13)
    PE1(1489),                        // La raison pour laquelle je viens ici, c'est le silence.  (lesson 13)
    PE1(1524),                        // Ce dont tu parles est déjà réparé.  (lesson 13)
    OA2(1864),                        // Je cherche une colocataire qui sache cuisiner.  (lesson 6 in B2)
    OA2(1883),                        // C'est le seul architecte qui puisse sauver ce bâtiment.  (lesson 6 in B2)
  ],
  act2: [
    'fr.c1.strategies-de-comprehension.1801', // Une échelle dont on n’utilise que le dernier dixième ne mesure plus grand-chose.  (lesson 20 in C1)
    'fr.c1.nuances-et-registres.048',          // L'exode rural a vidé des villages entiers dont il ne reste parfois qu'un clocher et quelques souvenirs.  (Postgres only)
  ],
  act3: [
    'fr.c1.rhetorique.143',                    // Ce à quoi je m'oppose, c'est à la précipitation du gouvernement.  (Postgres only)
    PE1(1523),                                 // C'est exactement ce dont j'ai besoin.  (lesson 13: ce dont, the B1 neighbour)
  ],
  act4: [] as string[],
  act5: [] as string[],
  act6: [] as string[],
  act7: [] as string[],
  act8: [
    'fr.c1.discours-dexamen.1424',             // Là où nos chemins se séparent, c'est sur qui paie.  (lesson 21 in C1)
    'fr.c1.strategies-de-comprehension.2151',  // L’éditorial voit une frontière là où le reportage montre une fête.  (lesson 24 in C1)
    'fr.c1.culture-profonde.122',              // On peut admirer la construction du raisonnement tout en rejetant la conclusion à laquelle il aboutit.  (Postgres only)
    'fr.c1.discours-dexamen.039',              // Telle est, en substance, la conclusion à laquelle mon analyse me conduit.  (Postgres only)
  ],
  act9: [] as string[],
  act10: [] as string[],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied verbatim on 2026-10-01, so `src()` can print them. */
export const PG_ROWS: Record<string, { id: string; fr: string; en: string; drills: string[] }> = Object.fromEntries([
  { id: 'fr.c1.nuances-et-registres.048', fr: "L'exode rural a vidé des villages entiers dont il ne reste parfois qu'un clocher et quelques souvenirs.", en: 'The rural exodus emptied entire villages, of which sometimes only a steeple and a few memories remain.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.rhetorique.143', fr: "Ce à quoi je m'oppose, c'est à la précipitation du gouvernement.", en: "What I object to is the government's haste.", drills: ['sentence', 'review'] },
  { id: 'fr.c1.culture-profonde.122', fr: 'On peut admirer la construction du raisonnement tout en rejetant la conclusion à laquelle il aboutit.', en: 'You can admire the construction of the argument while rejecting the conclusion it arrives at.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.discours-dexamen.039', fr: 'Telle est, en substance, la conclusion à laquelle mon analyse me conduit.', en: 'That is, in essence, the conclusion to which my analysis leads me.', drills: ['sentence', 'review'] },
].map((r) => [r.id, r]));

/** No `flashcard` drill in Postgres: nameable, never releasable. */
export const NOT_DECK_ABLE: string[] = Object.keys(PG_ROWS);

/** No `voiceflash` either: never in a `practice` speak section. Two B1 rule
 *  cards are flashcard-only. */
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE, PE1(1155)];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `gap` a gapfill card whose front gaps the relative and
 *  names the cue; `rule` a grammar card (flashcard only). Every row carries
 *  fr, en, ipa and respell. Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const S: Register = 'soutenu';
const GP = ['relatives-complexes'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});
const sout = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, tags, drills, { register: S });

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE BON CROCHET (.2000-.2013) ─────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(2000, 'Le petit-fils de Mme Ferland, qui a classé les lettres, prendra la parole.', 'Mrs Ferland’s grandson, who sorted the letters, will speak.',
    '/lə pə.ti.fis də ma.dam fɛʁ.lɑ̃ ki a kla.se le lɛtʁ pʁɑ̃.dʁa la pa.ʁɔl/', 'luh puh-tee-FEESS | duh ma-damm fehr-LAHⁿ | kee a kla-SAY lay LETR | prahⁿ-dra la pa-ROL', ['scene', 'ambigu']),
  sout(2001, 'Le petit-fils de Mme Ferland, laquelle a classé les lettres, prendra la parole.', 'Mrs Ferland’s grandson will speak; she is the one who sorted the letters.',
    '/lə pə.ti.fis də ma.dam fɛʁ.lɑ̃ la.kɛl a kla.se le lɛtʁ pʁɑ̃.dʁa la pa.ʁɔl/', 'luh puh-tee-FEESS | duh ma-damm fehr-LAHⁿ | la-KEL a kla-SAY lay LETR | prahⁿ-dra la pa-ROL', ['scene', 'lequel-sujet'], FCVDR),
  rule(2002, REFRAME, 'A relative clause hooks onto a noun: know which one, and what it adds to it.',
    '/yn ʁə.la.tiv sa.kʁɔʃ a œ̃ nɔ̃ saʃ lə.kɛl e sə kɛl lɥi a.ʒut/', 'ÜNN ruh-la-TEEV | sa-KROSH a uhⁿ NOHⁿ | sash luh-KEL | ay suh kel lwee a-ZHOOT',
    'Devant une relative, quelles deux questions te poses-tu ?',
    'À quel nom elle s’accroche, et ce qu’elle lui ajoute : elle dit lequel, elle commente, elle en prend une partie, elle donne un but.',
    ['reframe']),
  sent(2003, 'Le fonds compte quatre cents lettres, dont une trentaine écrites à Paris.', 'The collection holds four hundred letters, about thirty of them written in Paris.',
    '/lə fɔ̃ kɔ̃t ka.tʁə sɑ̃ lɛtʁ dɔ̃.tyn tʁɑ̃.tɛn e.kʁit a pa.ʁi/', 'luh FOHⁿ kohⁿt ka-truh sahⁿ LETR | dohⁿ-tünn trahⁿ-TENN | ay-kreet a pa-REE', ['lecture', 'partitif'], FCVDR),
  sent(2004, 'C’est ce à quoi Mme Ferland tenait le plus.', 'That is what Mrs Ferland cared about most.',
    '/sɛ sə a kwa ma.dam fɛʁ.lɑ̃ tə.nɛ lə plys/', 'seh suh a KWA | ma-damm fehr-LAHⁿ | tuh-neh luh PLÜSS', ['lecture', 'quoi']),
  sent(2005, 'Les chercheurs y trouveront de quoi nourrir plusieurs thèses.', 'Researchers will find enough there to feed several theses.',
    '/le ʃɛʁ.ʃœʁ i tʁu.və.ʁɔ̃ də kwa nu.ʁiʁ ply.zjœʁ tɛz/', 'lay shehr-SHUHR | ee troo-vuh-ROHⁿ | duh kwa noo-REER | plü-zyuhr TEZ', ['lecture', 'infinitif']),
  sent(2006, 'La salle de lecture offre enfin un endroit où travailler au calme.', 'The reading room at last offers a place to work in peace.',
    '/la sal də lɛk.tyʁ ɔfʁ ɑ̃.fɛ̃ œ̃.nɑ̃.dʁwa u tʁa.va.je o kalm/', 'la sal duh lek-TÜR | ofr ahⁿ-FEHⁿ | uhⁿ-nahⁿ-DRWA | oo tra-va-YAY oh KALM', ['lecture', 'infinitif'], FCVDR),
  sent(2007, 'Les lettres, qui ont voyagé dans une malle, sont restées intactes.', 'The letters, which travelled in a trunk, have stayed intact.',
    '/le lɛtʁ ki ɔ̃ vwa.ja.ʒe dɑ̃.zyn mal sɔ̃ ʁɛs.te ɛ̃.takt/', 'lay LETR | kee ohⁿ vwa-ya-ZHAY | dahⁿ-zünn MAL | sohⁿ res-tay ehⁿ-TAKT', ['lecture', 'explicative']),
  sent(2008, 'Les lettres qui portent un cachet rouge viennent de l’étranger.', 'The letters that bear a red stamp come from abroad.',
    '/le lɛtʁ ki pɔʁt œ̃ ka.ʃɛ ʁuʒ vjɛn də le.tʁɑ̃.ʒe/', 'lay LETR | kee port uhⁿ ka-sheh ROOZH | vyenn duh lay-trahⁿ-ZHAY', ['lecture', 'determinative']),
  sent(2009, 'La correspondance montre un monde dans lequel la lettre tenait lieu de téléphone.', 'The correspondence shows a world in which the letter did the job of the phone.',
    '/la kɔ.ʁɛs.pɔ̃.dɑ̃s mɔ̃tʁ œ̃ mɔ̃d dɑ̃ lə.kɛl la lɛtʁ tə.nɛ ljø də te.le.fɔn/', 'la ko-res-pohⁿ-DAHⁿS | mohⁿtr uhⁿ MOHⁿD | dahⁿ luh-KEL | la LETR tuh-neh LYEU | duh tay-lay-FONN', ['lecture', 'abstrait']),
  sout(2010, 'Le président de l’association, laquelle fête ses vingt ans, a ouvert la séance.', 'The chair of the association, which is celebrating its twentieth year, opened the meeting.',
    '/lə pʁe.zi.dɑ̃ də la.sɔ.sja.sjɔ̃ la.kɛl fɛt se vɛ̃.tɑ̃ a u.vɛʁ la se.ɑ̃s/', 'luh pray-zee-DAHⁿ | duh la-so-sya-SYOHⁿ | la-KEL fet say vehⁿ-TAHⁿ | a oo-vehr la say-AHⁿS', ['usage', 'lequel-sujet']),
  sent(2011, 'Le loyer, dont un tiers est payé par la commune, est versé le premier du mois.', 'The rent, a third of which is paid by the town, is due on the first of the month.',
    '/lə lwa.je dɔ̃.tœ̃ tjɛʁ ɛ pe.je paʁ la kɔ.myn ɛ vɛʁ.se lə pʁə.mje dy mwa/', 'luh lwa-YAY | dohⁿ-tuhⁿ TYEHR | eh pay-YAY par la ko-MÜNN | eh vehr-SAY | luh pruh-myay dü MWA', ['usage', 'partitif']),
  sent(2012, 'Joignez une pièce d’identité, sans quoi le dossier sera refusé.', 'Enclose proof of identity, otherwise the application will be rejected.',
    '/ʒwa.ɲe yn pjɛs di.dɑ̃.ti.te sɑ̃ kwa lə dɔ.sje sə.ʁa ʁə.fy.ze/', 'zhwa-NYAY ünn pyess dee-dahⁿ-tee-TAY | sahⁿ KWA | luh do-SYAY suh-ra ruh-fü-ZAY', ['usage', 'quoi']),
  sent(2013, 'Il nous faut une salle où ranger les cartons avant lundi.', 'We need a room to store the boxes in before Monday.',
    '/il nu fo yn sal u ʁɑ̃.ʒe le kaʁ.tɔ̃ a.vɑ̃ lœ̃.di/', 'eel noo FOH | ünn SAL | oo rahⁿ-ZHAY lay kar-TOHⁿ | a-vahⁿ luhⁿ-DEE', ['usage', 'infinitif']),
];

/* ── ACT 2 · UNE PARTIE DU TOUT (.2015-.2031) ─────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(2015, 'Trente bénévoles se sont inscrits, dont douze étudiants.', 'Thirty volunteers signed up, twelve of them students.',
    '/tʁɑ̃t be.ne.vɔl sə sɔ̃.tɛ̃s.kʁi dɔ̃ duz e.ty.djɑ̃/', 'trahⁿt bay-nay-VOL | suh sohⁿ-tehⁿs-KREE | dohⁿ dooz ay-tü-DYAHⁿ', ['partitif', 'sans-verbe'], FCVDR),
  sent(2016, 'Elle a trois enfants, dont deux vivent à Montréal.', 'She has three children, two of whom live in Montreal.',
    '/ɛ.la tʁwa.zɑ̃.fɑ̃ dɔ̃ dø viv a mɔ̃.ʁe.al/', 'eh-la trwa-zahⁿ-FAHⁿ | dohⁿ DEU | veev a mohⁿ-ray-AL', ['partitif', 'avec-verbe']),
  sent(2017, 'Les cartons, dont la plupart sont encore fermés, attendent dans le couloir.', 'The boxes, most of which are still sealed, are waiting in the corridor.',
    '/le kaʁ.tɔ̃ dɔ̃ la ply.paʁ sɔ̃.tɑ̃.kɔʁ fɛʁ.me a.tɑ̃d dɑ̃ lə ku.lwaʁ/', 'lay kar-TOHⁿ | dohⁿ la plü-PAR | sohⁿ-tahⁿ-kor fehr-MAY | a-tahⁿd dahⁿ luh koo-LWAR', ['partitif', 'la-plupart'], FCVDR),
  sent(2018, 'Plusieurs lettres ont disparu, dont la plus ancienne.', 'Several letters have gone missing, including the oldest one.',
    '/ply.zjœʁ lɛtʁ ɔ̃ dis.pa.ʁy dɔ̃ la ply.zɑ̃.sjɛn/', 'plü-zyuhr LETR | ohⁿ dees-pa-RÜ | dohⁿ la plü-zahⁿ-SYENN', ['partitif', 'sans-verbe']),
  sent(2019, 'Toute l’équipe était là, dont moi.', 'The whole team was there, me included.',
    '/tut le.kip e.tɛ la dɔ̃ mwa/', 'toot lay-KEEP | ay-teh LA | dohⁿ MWA', ['partitif', 'y-compris']),
  sent(2020, 'Le comité a reçu quarante dossiers, parmi lesquels six venaient de l’étranger.', 'The committee received forty applications, six of which came from abroad.',
    '/lə kɔ.mi.te a ʁə.sy ka.ʁɑ̃t dɔ.sje paʁ.mi le.kɛl si və.nɛ də le.tʁɑ̃.ʒe/', 'luh ko-mee-TAY a ruh-SÜ | ka-rahⁿt do-SYAY | par-mee lay-KEL | see vuh-neh duh lay-trahⁿ-ZHAY', ['partitif', 'parmi']),
  sent(2021, 'Des centaines de photos, dont certaines n’ont jamais été montrées, seront numérisées.', 'Hundreds of photos, some of which have never been shown, will be digitised.',
    '/de sɑ̃.tɛn də fɔ.to dɔ̃ sɛʁ.tɛn nɔ̃ ʒa.mɛ e.te mɔ̃.tʁe sə.ʁɔ̃ ny.me.ʁi.ze/', 'day sahⁿ-TENN duh fo-TOH | dohⁿ sehr-TENN | nohⁿ zha-meh ay-tay mohⁿ-TRAY | suh-rohⁿ nü-may-ree-ZAY', ['partitif', 'certains']),
  sent(2022, 'Le budget, dont la moitié vient de dons privés, a été voté.', 'The budget, half of which comes from private donations, has been approved.',
    '/lə byd.ʒɛ dɔ̃ la mwa.tje vjɛ̃ də dɔ̃ pʁi.ve a e.te vɔ.te/', 'luh büd-ZHEH | dohⁿ la mwa-TYAY | vyehⁿ duh dohⁿ pree-VAY | a ay-tay vo-TAY', ['partitif', 'fraction']),
  gap(2023, 'Nous avons reçu dix réponses, dont trois positives.', 'We received ten replies, three of them positive.',
    '/nu.za.vɔ̃ ʁə.sy di ʁe.pɔ̃s dɔ̃ tʁwa pɔ.zi.tiv/', 'noo-za-vohⁿ ruh-SÜ | dee ray-POHⁿS | dohⁿ trwa po-zee-TEEV',
    'Nous avons reçu dix réponses, ___ trois positives. (une partie du tout, sans verbe)',
    'Dont prend trois réponses parmi les dix ; le verbe n’est pas nécessaire. EN: dont takes three out of the ten.',
    ['partitif', 'sans-verbe']),
  gap(2024, 'Les invités, dont la plupart venaient de loin, sont restés dîner.', 'The guests, most of whom had come a long way, stayed for dinner.',
    '/le.zɛ̃.vi.te dɔ̃ la ply.paʁ və.nɛ də lwɛ̃ sɔ̃ ʁɛs.te di.ne/', 'lay-zehⁿ-vee-TAY | dohⁿ la plü-PAR | vuh-neh duh LWEHⁿ | sohⁿ res-tay dee-NAY',
    'Les invités, dont la plupart ___ de loin, sont restés dîner. (venir, à l’imparfait · la plupart des invités)',
    'La plupart des invités : le verbe s’accorde avec invités, au pluriel. EN: la plupart takes a plural verb.',
    ['partitif', 'la-plupart'], FCVDR),
  rule(2025, 'Dont suivi d’un nombre ou d’une quantité prend une partie du groupe qui précède.', 'Dont followed by a number or a quantity takes part of the group before it.',
    '/dɔ̃ sɥi.vi dœ̃ nɔ̃bʁ u dyn kɑ̃.ti.te pʁɑ̃ yn paʁ.ti dy ɡʁup ki pʁe.sɛd/', 'dohⁿ swee-VEE | duhⁿ NOHⁿBR | oo dünn kahⁿ-tee-TAY | prahⁿ ünn par-TEE | dü GROOP kee pray-SED',
    'Dans « trente bénévoles, dont douze étudiants », que fait dont ?',
    'Il prend douze bénévoles parmi les trente. Le verbe peut manquer : dont douze étudiants.',
    ['partitif']),
  rule(2026, 'Après dont, pas de en : dont je connaissais trois, jamais dont j’en connaissais trois.', 'After dont, no en: dont je connaissais trois, never dont j’en connaissais trois.',
    '/a.pʁɛ dɔ̃ pa də ɑ̃ dɔ̃ ʒə kɔ.nɛ.sɛ tʁwa ʒa.mɛ dɔ̃ ʒɑ̃ kɔ.nɛ.sɛ tʁwa/', 'a-preh DOHⁿ | pa duh AHⁿ | dohⁿ zhuh ko-neh-seh TRWA | zha-meh dohⁿ zhahⁿ ko-neh-seh TRWA',
    'Six candidats, dont j’en connaissais trois : qu’est-ce qui ne va pas ?',
    'Dont dit déjà « de ces candidats ». En le répète : supprime-le.',
    ['partitif', 'redondance']),
  sent(2027, 'Il y avait six candidats, dont je connaissais trois.', 'There were six candidates, three of whom I knew.',
    '/il i a.vɛ si kɑ̃.di.da dɔ̃ ʒə kɔ.nɛ.sɛ tʁwa/', 'eel ee a-VEH | see kahⁿ-dee-DA | dohⁿ zhuh ko-neh-seh TRWA', ['partitif', 'redondance']),
  sent(2028, 'Il a écrit dix romans, dont j’ai lu la moitié.', 'He wrote ten novels, half of which I have read.',
    '/i.la e.kʁi di ʁɔ.mɑ̃ dɔ̃ ʒe ly la mwa.tje/', 'ee-la ay-KREE | dee ro-MAHⁿ | dohⁿ zhay lü la mwa-TYAY', ['partitif', 'fraction'], FCVDR),
  sent(2029, 'Trois salles, dont une accessible en fauteuil, sont réservées aux lecteurs.', 'Three rooms, one of them wheelchair accessible, are set aside for readers.',
    '/tʁwa sal dɔ̃.tyn ak.sɛ.sibl ɑ̃ fo.tœj sɔ̃ ʁe.zɛʁ.ve o lɛk.tœʁ/', 'trwa SAL | dohⁿ-tünn ak-seh-SEEBL | ahⁿ foh-TUHY | sohⁿ ray-zehr-VAY oh lek-TUHR', ['partitif', 'sans-verbe']),
];

/* ── ACT 3 · CE À QUOI, SANS QUOI (.2035-.2053) ──────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(2035, 'C’est exactement ce à quoi je m’attendais.', 'That is exactly what I expected.',
    '/sɛ.tɛɡ.zak.tə.mɑ̃ sə a kwa ʒə ma.tɑ̃.dɛ/', 'seh-teg-zak-tuh-MAHⁿ | suh a KWA | zhuh ma-tahⁿ-DEH', ['quoi', 'ce-a-quoi'], FCVDR),
  sent(2036, 'Ce à quoi elle tient, c’est la lecture sur place.', 'What she cares about is reading on site.',
    '/sə a kwa ɛl tjɛ̃ sɛ la lɛk.tyʁ syʁ plas/', 'suh a KWA el TYEHⁿ | seh la lek-TÜR | sür PLASS', ['quoi', 'ce-a-quoi']),
  sent(2037, 'Ce sur quoi nous devons nous mettre d’accord, c’est le calendrier.', 'What we need to agree on is the timetable.',
    '/sə syʁ kwa nu də.vɔ̃ nu mɛtʁ da.kɔʁ sɛ lə ka.lɑ̃.dʁi.je/', 'suh sür KWA | noo duh-vohⁿ noo metr da-KOR | seh luh ka-lahⁿ-dree-YAY', ['quoi', 'ce-sur-quoi']),
  sent(2038, 'Ce contre quoi il se bat, c’est l’oubli.', 'What he is fighting against is oblivion.',
    '/sə kɔ̃tʁ kwa il sə ba sɛ lu.bli/', 'suh kohⁿtr KWA | eel suh BA | seh loo-BLEE', ['quoi', 'ce-contre-quoi']),
  sent(2039, 'Il n’y a rien à quoi je tienne davantage.', 'There is nothing I care about more.',
    '/il nja ʁjɛ̃ a kwa ʒə tjɛn da.vɑ̃.taʒ/', 'eel nya RYEHⁿ | a KWA zhuh TYENN | da-vahⁿ-TAZH', ['quoi', 'rien-a-quoi']),
  sent(2040, 'Voilà à quoi servent les archives.', 'That is what archives are for.',
    '/vwa.la a kwa sɛʁv le.zaʁ.ʃiv/', 'vwa-la a KWA | sehrv lay-zar-SHEEV', ['quoi', 'voila']),
  sent(2041, 'Remplissez le formulaire, après quoi vous recevrez votre carte.', 'Fill in the form, after which you will receive your card.',
    '/ʁɑ̃.pli.se lə fɔʁ.my.lɛʁ a.pʁɛ kwa vu ʁə.sə.vʁe vɔtʁ kaʁt/', 'rahⁿ-plee-SAY | luh for-mü-LEHR | a-preh KWA | voo ruh-suh-VRAY votr KART', ['quoi', 'apres-quoi']),
  sent(2042, 'Prévenez-nous avant midi, faute de quoi la salle sera attribuée à quelqu’un d’autre.', 'Let us know before noon, failing which the room will go to someone else.',
    '/pʁe.və.ne.nu a.vɑ̃ mi.di fot də kwa la sal sə.ʁa a.tʁi.by.e a kɛl.kœ̃ dotʁ/', 'pray-vuh-nay-NOO | a-vahⁿ mee-DEE | foht duh KWA | la SAL suh-ra a-tree-bü-AY | a kel-kuhⁿ DOHTR', ['quoi', 'faute-de-quoi'], FCVDR),
  sout(2043, 'Le lecteur verse une caution, moyennant quoi il peut emprunter les cartes.', 'The reader pays a deposit, in return for which he may borrow the maps.',
    '/lə lɛk.tœʁ vɛʁs yn ko.sjɔ̃ mwa.jɛ.nɑ̃ kwa il pø ɑ̃.pʁœ̃.te le kaʁt/', 'luh lek-TUHR | vehrs ünn koh-SYOHⁿ | mwa-yeh-nahⁿ KWA | eel peu ahⁿ-pruhⁿ-TAY lay KART', ['quoi', 'moyennant-quoi']),
  sent(2044, 'Je ne vois pas en quoi cette règle nous concerne.', 'I do not see how this rule concerns us.',
    '/ʒə nə vwa pa ɑ̃ kwa sɛt ʁɛɡl nu kɔ̃.sɛʁn/', 'zhuh nuh vwa PA | ahⁿ KWA | set REGL | noo kohⁿ-SEHRN', ['quoi', 'interrogative']),
  sent(2045, 'C’est ce par quoi tout a commencé.', 'That is what it all started with.',
    '/sɛ sə paʁ kwa tu.ta kɔ.mɑ̃.se/', 'seh suh par KWA | too-ta ko-mahⁿ-SAY', ['quoi', 'ce-par-quoi']),
  sent(2046, 'Il y a quelque chose à quoi personne n’a pensé.', 'There is something nobody has thought of.',
    '/il i a kɛl.kə ʃoz a kwa pɛʁ.sɔn na pɑ̃.se/', 'eel ee a kel-kuh SHOHZ | a KWA | pehr-SONN na pahⁿ-SAY', ['quoi', 'quelque-chose']),
  gap(2047, 'Voilà ce à quoi je pensais.', 'That is what I was thinking about.',
    '/vwa.la sə a kwa ʒə pɑ̃.sɛ/', 'vwa-la suh a KWA | zhuh pahⁿ-SEH',
    'Voilà ce ___ je pensais. (penser à quelque chose · pas de nom devant)',
    'Penser à, et pas de nom : ce à quoi. EN: penser à with no noun gives ce à quoi.',
    ['quoi', 'ce-a-quoi'], FCVDR),
  gap(2048, 'Ce sur quoi il insiste, c’est la date.', 'What he insists on is the date.',
    '/sə syʁ kwa il ɛ̃.sist sɛ la dat/', 'suh sür KWA | eel ehⁿ-SEEST | seh la DAT',
    'Ce ___ il insiste, c’est la date. (insister sur)',
    'Insister sur : ce sur quoi. EN: insister sur gives ce sur quoi.',
    ['quoi', 'ce-sur-quoi']),
  gap(2049, 'Envoyez votre texte avant vendredi, faute de quoi il ne sera pas publié.', 'Send your text before Friday, failing which it will not be published.',
    '/ɑ̃.vwa.je vɔtʁ tɛkst a.vɑ̃ vɑ̃.dʁə.di fot də kwa il nə sə.ʁa pa py.bli.je/', 'ahⁿ-vwa-YAY votr TEKST | a-vahⁿ vahⁿ-druh-DEE | foht duh KWA | eel nuh suh-ra pa pü-blee-YAY',
    'Envoyez votre texte avant vendredi, faute ___ il ne sera pas publié. (sinon, en langue soignée)',
    'Faute de quoi : sinon. Quoi reprend toute la phrase d’avant. EN: failing which.',
    ['quoi', 'faute-de-quoi']),
  rule(2050, 'Pas de nom devant, et une préposition : ce à quoi, ce sur quoi, ce contre quoi.', 'No noun in front, and a preposition: ce à quoi, ce sur quoi, ce contre quoi.',
    '/pa də nɔ̃ də.vɑ̃ e yn pʁe.pɔ.zi.sjɔ̃ sə a kwa sə syʁ kwa sə kɔ̃tʁ kwa/', 'pa duh nohⁿ duh-VAHⁿ | ay ünn pray-po-zee-SYOHⁿ | suh a KWA | suh sür KWA | suh kohⁿtr KWA',
    'S’attendre à, sans nom devant : ce que, ce dont ou ce à quoi ?',
    'Ce à quoi. Ce tient la place du nom absent, quoi suit la préposition du verbe. Ce dont garde le de.',
    ['quoi']),
  rule(2051, 'Sans quoi, faute de quoi, après quoi : quoi reprend toute la phrase d’avant.', 'Sans quoi, faute de quoi, après quoi: quoi picks up the whole sentence before it.',
    '/sɑ̃ kwa fot də kwa a.pʁɛ kwa kwa ʁə.pʁɑ̃ tut la fʁaz da.vɑ̃/', 'sahⁿ KWA | foht duh KWA | a-preh KWA | kwa ruh-PRAHⁿ | toot la FRAHZ da-VAHⁿ',
    'Dans « …, sans quoi le dossier sera refusé », que reprend quoi ?',
    'Toute la proposition d’avant : si tu ne joins pas la pièce.',
    ['quoi']),
  sout(2052, 'C’est une chose à quoi je n’avais jamais songé.', 'It is something I had never thought of.',
    '/sɛ.tyn ʃoz a kwa ʒə na.vɛ ʒa.mɛ sɔ̃.ʒe/', 'seh-tünn SHOHZ | a KWA | zhuh na-veh zha-meh sohⁿ-ZHAY', ['quoi', 'litteraire']),
  sent(2053, 'C’est une question à laquelle je n’avais jamais songé.', 'It is a question I had never thought about.',
    '/sɛ.tyn kɛs.tjɔ̃ a la.kɛl ʒə na.vɛ ʒa.mɛ sɔ̃.ʒe/', 'seh-tünn kes-TYOHⁿ | a la-KEL | zhuh na-veh zha-meh sohⁿ-ZHAY', ['quoi', 'nom-lequel']),
];

/* ── ACT 4 · UN ENDROIT OÙ DORMIR (.2055-.2073) ──────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(2055, 'Il cherche un endroit où dormir ce soir.', 'He is looking for somewhere to sleep tonight.',
    '/il ʃɛʁʃ œ̃.nɑ̃.dʁwa u dɔʁ.miʁ sə swaʁ/', 'eel SHEHRSH | uhⁿ-nahⁿ-DRWA | oo dor-MEER | suh SWAR', ['infinitif', 'ou-inf'], FCVDR),
  sent(2056, 'Je n’ai personne à qui parler de ce projet.', 'I have nobody to talk to about this project.',
    '/ʒə ne pɛʁ.sɔn a ki paʁ.le də sə pʁɔ.ʒɛ/', 'zhuh nay pehr-SONN | a kee par-LAY | duh suh pro-ZHEH', ['infinitif', 'qui-inf']),
  sent(2057, 'Elle a enfin trouvé quelqu’un sur qui compter.', 'She has finally found someone to rely on.',
    '/ɛ.la ɑ̃.fɛ̃ tʁu.ve kɛl.kœ̃ syʁ ki kɔ̃.te/', 'eh-la ahⁿ-fehⁿ troo-VAY | kel-KUHⁿ | sür kee kohⁿ-TAY', ['infinitif', 'qui-inf']),
  sent(2058, 'Tu as de quoi écrire ?', 'Have you got something to write with?',
    '/ty a də kwa e.kʁiʁ/', 'tü a duh kwa ay-KREER', ['infinitif', 'de-quoi']),
  sent(2059, 'Avec ce salaire, ils ont à peine de quoi vivre.', 'On that salary they barely have enough to live on.',
    '/a.vɛk sə sa.lɛʁ il.zɔ̃ a pɛn də kwa vivʁ/', 'a-vek suh sa-LEHR | eel-zohⁿ a PENN | duh kwa VEEVR', ['infinitif', 'de-quoi'], FCVDR),
  sent(2060, 'Il n’y a pas de quoi s’inquiéter.', 'There is nothing to worry about.',
    '/il nja pa də kwa sɛ̃.kje.te/', 'eel nya PA | duh kwa sehⁿ-kyay-TAY', ['infinitif', 'pas-de-quoi']),
  sent(2061, 'Il y a de quoi être fier de ce travail.', 'There is good reason to be proud of this work.',
    '/il i a də kwa ɛtʁ fjɛʁ də sə tʁa.vaj/', 'eel ee a duh KWA | etr FYEHR | duh suh tra-VAÏ', ['infinitif', 'il-y-a-de-quoi']),
  sent(2062, 'Le dossier ne contient rien sur quoi s’appuyer.', 'The file contains nothing to build on.',
    '/lə dɔ.sje nə kɔ̃.tjɛ̃ ʁjɛ̃ syʁ kwa sa.pɥi.je/', 'luh do-SYAY | nuh kohⁿ-tyehⁿ RYEHⁿ | sür KWA | sa-pwee-YAY', ['infinitif', 'quoi-inf'], FCVDR),
  sent(2063, 'Il nous manque un outil avec lequel trier les photos.', 'We lack a tool to sort the photos with.',
    '/il nu mɑ̃k œ̃.nu.ti a.vɛk lə.kɛl tʁi.je le fɔ.to/', 'eel noo MAHⁿK | uhⁿ-noo-TEE | a-vek luh-KEL | tree-YAY lay fo-TOH', ['infinitif', 'lequel-inf']),
  sent(2064, 'Les nouveaux arrivants n’avaient pas d’adresse où recevoir leur courrier.', 'The newcomers had no address to receive their post at.',
    '/le nu.vo.za.ʁi.vɑ̃ na.vɛ pa da.dʁɛs u ʁə.sə.vwaʁ lœʁ ku.ʁje/', 'lay noo-voh-za-ree-VAHⁿ | na-veh pa da-DRESS | oo ruh-suh-VWAR | luhr koo-RYAY', ['infinitif', 'ou-inf']),
  gap(2065, 'Je n’ai personne à qui confier mes clés.', 'I have nobody to leave my keys with.',
    '/ʒə ne pɛʁ.sɔn a ki kɔ̃.fje me kle/', 'zhuh nay pehr-SONN | a kee kohⁿ-FYAY | may KLAY',
    'Je n’ai personne ___ confier mes clés. (confier à quelqu’un · puis l’infinitif)',
    'Confier à quelqu’un : à qui, puis l’infinitif, sans sujet. EN: à qui plus the infinitive.',
    ['infinitif', 'qui-inf'], FCVDR),
  gap(2066, 'Il cherche un coin où lire au calme.', 'He is looking for a corner to read in peace.',
    '/il ʃɛʁʃ œ̃ kwɛ̃ u liʁ o kalm/', 'eel SHEHRSH | uhⁿ KWEHⁿ | oo LEER | oh KALM',
    'Il cherche un coin ___ lire au calme. (un lieu · puis l’infinitif)',
    'Un lieu : où, puis l’infinitif. EN: où plus the infinitive.',
    ['infinitif', 'ou-inf']),
  gap(2067, 'On a de quoi tenir jusqu’à lundi.', 'We have enough to last until Monday.',
    '/ɔ̃.na də kwa tə.niʁ ʒys.ka lœ̃.di/', 'ohⁿ-NA | duh kwa tuh-NEER | zhüs-ka luhⁿ-DEE',
    'On a ___ tenir jusqu’à lundi. (assez de choses pour · puis l’infinitif)',
    'Avoir de quoi + infinitif : avoir ce qu’il faut pour. EN: to have enough to.',
    ['infinitif', 'de-quoi']),
  rule(2068, 'Une relative peut finir sur un infinitif : un endroit où dormir, quelqu’un à qui parler.', 'A relative clause can end on an infinitive: somewhere to sleep, someone to talk to.',
    '/yn ʁə.la.tiv pø fi.niʁ syʁ œ̃.nɛ̃.fi.ni.tif œ̃.nɑ̃.dʁwa u dɔʁ.miʁ kɛl.kœ̃ a ki paʁ.le/', 'ÜNN ruh-la-TEEV | peu fee-NEER | sür uhⁿ-nehⁿ-fee-nee-TEEF | uhⁿ-nahⁿ-DRWA oo dor-MEER | kel-KUHⁿ a kee par-LAY',
    '« Un endroit où dormir » : qui dort ?',
    'Le sujet de la phrase, ou n’importe qui. Pas de sujet écrit, pas de verbe conjugué : un but.',
    ['infinitif']),
  rule(2069, 'Jamais que relatif suivi d’un infinitif : un livre à lire, quelqu’un à qui parler.', 'Never relative que followed by an infinitive: a book to read, someone to talk to.',
    '/ʒa.mɛ kə ʁə.la.tif sɥi.vi dœ̃.nɛ̃.fi.ni.tif œ̃ livʁ a liʁ kɛl.kœ̃ a ki paʁ.le/', 'zha-meh kuh ruh-la-TEEF | swee-VEE | duhⁿ-nehⁿ-fee-nee-TEEF | uhⁿ LEEVR a LEER | kel-KUHⁿ a kee par-LAY',
    'Something to read : un livre que lire ?',
    'Non : un livre à lire. L’infinitif ne suit que où, ou une préposition et son pronom.',
    ['infinitif']),
  sent(2070, 'Je cherche quelque chose à lire pour le train.', 'I am looking for something to read for the train.',
    '/ʒə ʃɛʁʃ kɛl.kə ʃoz a liʁ puʁ lə tʁɛ̃/', 'zhuh SHEHRSH | kel-kuh SHOHZ a LEER | poor luh TREHⁿ', ['infinitif', 'a-inf']),
  sent(2071, 'Ils n’avaient même pas de quoi payer le loyer.', 'They did not even have enough to pay the rent.',
    '/il na.vɛ mɛm pa də kwa pe.je lə lwa.je/', 'eel na-veh MEMM PA | duh kwa pay-YAY | luh lwa-YAY', ['infinitif', 'de-quoi']),
  sent(2072, 'Une chaise sur laquelle s’asseoir aurait suffi.', 'A chair to sit on would have been enough.',
    '/yn ʃɛz syʁ la.kɛl sa.swaʁ o.ʁɛ sy.fi/', 'ünn SHEZ | sür la-KEL sa-SWAR | oh-reh sü-FEE', ['infinitif', 'lequel-inf']),
  sent(2073, 'Il n’y avait rien à quoi se raccrocher.', 'There was nothing to hold on to.',
    '/il nja.vɛ ʁjɛ̃ a kwa sə ʁa.kʁɔ.ʃe/', 'eel nya-VEH RYEHⁿ | a KWA | suh ra-kro-SHAY', ['infinitif', 'quoi-inf']),
];

/* ── ACT 5 · À QUEL NOM ? (.2075-.2091) ──────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(2075, 'Le fils de la voisine qui chante dans la chorale part à Lyon.', 'The son of the neighbour who sings in the choir is moving to Lyon.',
    '/lə fis də la vwa.zin ki ʃɑ̃t dɑ̃ la kɔ.ʁal paʁ a ljɔ̃/', 'luh FEESS | duh la vwa-ZEENN | kee shahⁿt dahⁿ la ko-RAL | par a LYOHⁿ', ['ambigu', 'n-de-n'], FCVDR),
  sent(2076, 'Les clés du bureau qui sont sur la table sont à toi.', 'The office keys that are on the table are yours.',
    '/le kle dy by.ʁo ki sɔ̃ syʁ la tabl sɔ̃.ta twa/', 'lay KLAY dü bü-ROH | kee sohⁿ sür la TABL | sohⁿ-ta TWA', ['indice', 'nombre']),
  sent(2077, 'La fille du directeur, qui est partie hier, reviendra lundi.', 'The director’s daughter, who left yesterday, will be back on Monday.',
    '/la fij dy di.ʁɛk.tœʁ ki ɛ paʁ.ti jɛʁ ʁə.vjɛ̃.dʁa lœ̃.di/', 'la FEEY dü dee-rek-TUHR | kee eh par-tee YEHR | ruh-vyehⁿ-dra luhⁿ-DEE', ['indice', 'genre']),
  sent(2078, 'La fille du directeur, qui est parti hier, reviendra lundi.', 'The daughter of the director, who himself left yesterday, will be back on Monday.',
    '/la fij dy di.ʁɛk.tœʁ ki ɛ paʁ.ti jɛʁ ʁə.vjɛ̃.dʁa lœ̃.di/', 'la FEEY dü dee-rek-TUHR | kee eh par-tee YEHR | ruh-vyehⁿ-dra luhⁿ-DEE', ['indice', 'genre']),
  sent(2079, 'Les élèves et les professeurs qui le souhaitent pourront visiter la salle.', 'Pupils and teachers who wish to may visit the room.',
    '/le.ze.lɛv e le pʁɔ.fɛ.sœʁ ki lə swɛt pu.ʁɔ̃ vi.zi.te la sal/', 'lay-zay-LEV | ay lay pro-feh-SUHR | kee luh SWET | poo-rohⁿ vee-zee-TAY la SAL', ['ambigu', 'coordination']),
  sent(2080, 'Les résultats de l’enquête dont tu parlais ont été publiés.', 'The results of the survey you mentioned have been published.',
    '/le ʁe.zyl.ta də lɑ̃.kɛt dɔ̃ ty paʁ.lɛ ɔ̃.te.te py.bli.je/', 'lay ray-zül-TA | duh lahⁿ-KET | dohⁿ tü par-LEH | ohⁿ-tay-tay pü-blee-YAY', ['ambigu', 'n-de-n']),
  sent(2081, 'La copie du contrat que le notaire a signée est au dossier.', 'The copy of the contract, the one the notary signed, is on file.',
    '/la kɔ.pi dy kɔ̃.tʁa kə lə nɔ.tɛʁ a si.ɲe ɛ.to dɔ.sje/', 'la ko-PEE dü kohⁿ-TRA | kuh luh no-TEHR a see-NYAY | eh-toh do-SYAY', ['indice', 'participe'], FCVDR),
  sent(2082, 'La copie du contrat que le notaire a signé est au dossier.', 'The copy of the notary-signed contract is on file.',
    '/la kɔ.pi dy kɔ̃.tʁa kə lə nɔ.tɛʁ a si.ɲe ɛ.to dɔ.sje/', 'la ko-PEE dü kohⁿ-TRA | kuh luh no-TEHR a see-NYAY | eh-toh do-SYAY', ['indice', 'participe']),
  rule(2083, 'Après « le nom de nom », une relative peut s’accrocher à l’un ou à l’autre : cherche l’indice.', 'After « noun de noun », a relative can hook onto either one: look for the clue.',
    '/a.pʁɛ lə nɔ̃ də nɔ̃ yn ʁə.la.tiv pø sa.kʁɔ.ʃe a lœ̃ u a lotʁ ʃɛʁʃ lɛ̃.dis/', 'a-preh luh NOHⁿ duh NOHⁿ | ünn ruh-la-TEEV | peu sa-kro-SHAY | a LUHⁿ oo a LOHTR | shehrsh lehⁿ-DEESS',
    'Le fils de la voisine qui chante : qui chante ?',
    'On ne peut pas le savoir sans le contexte. Un accord ou le sens tranchent parfois ; sinon, il faut réécrire.',
    ['ambigu']),
  rule(2084, 'Le verbe, le participe ou le sens disent souvent à quel nom la relative s’accroche.', 'The verb, the participle or the meaning often tell you which noun the relative hooks onto.',
    '/lə vɛʁb lə paʁ.ti.sip u lə sɑ̃s di.zə su.vɑ̃ a kɛl nɔ̃ la ʁə.la.tiv sa.kʁɔʃ/', 'luh VEHRB | luh par-tee-SEEP | oo luh SAHⁿS | dee-zuh soo-VAHⁿ | a kel NOHⁿ | la ruh-la-TEEV sa-KROSH',
    'Les clés du bureau qui sont sur la table : qu’est-ce qui est sur la table ?',
    'Les clés : sont est au pluriel, et bureau au singulier.',
    ['indice']),
  sent(2085, 'Le livre du professeur que j’ai rangé sur l’étagère a disparu.', 'The professor’s book that I put on the shelf has disappeared.',
    '/lə livʁ dy pʁɔ.fɛ.sœʁ kə ʒe ʁɑ̃.ʒe syʁ le.ta.ʒɛʁ a dis.pa.ʁy/', 'luh LEEVR | dü pro-feh-SUHR | kuh zhay rahⁿ-ZHAY | sür lay-ta-ZHEHR | a dees-pa-RÜ', ['indice', 'sens']),
  sent(2086, 'Le directeur de l’école, qui fête ses cent ans, prononcera un discours.', 'The head of the school, which is celebrating its hundredth year, will give a speech.',
    '/lə di.ʁɛk.tœʁ də le.kɔl ki fɛt se sɑ̃.tɑ̃ pʁɔ.nɔ̃s.ʁa œ̃ dis.kuʁ/', 'luh dee-rek-TUHR | duh lay-KOL | kee fet say sahⁿ-TAHⁿ | pro-nohⁿs-RA uhⁿ dees-KOOR', ['indice', 'sens']),
  sent(2087, 'Le chien de la voisine qui aboie toute la nuit empêche tout le monde de dormir.', 'The neighbour’s dog that barks all night keeps everyone awake.',
    '/lə ʃjɛ̃ də la vwa.zin ki a.bwa tut la nɥi ɑ̃.pɛʃ tu lə mɔ̃d də dɔʁ.miʁ/', 'luh SHYEHⁿ | duh la vwa-ZEENN | kee a-BWA toot la NWEE | ahⁿ-PESH too luh MOHⁿD | duh dor-MEER', ['indice', 'sens'], FCVDR),
  gap(2088, 'Les photos du mariage qui sont dans la boîte n’ont jamais été montrées.', 'The wedding photos that are in the box have never been shown.',
    '/le fɔ.to dy ma.ʁjaʒ ki sɔ̃ dɑ̃ la bwat nɔ̃ ʒa.mɛ e.te mɔ̃.tʁe/', 'lay fo-TOH dü ma-RYAZH | kee sohⁿ dahⁿ la BWAT | nohⁿ zha-meh ay-tay mohⁿ-TRAY',
    'Les photos du mariage qui ___ dans la boîte n’ont jamais été montrées. (être · ce sont les photos)',
    'Les photos : sont, au pluriel. Le verbe montre le nom. EN: the plural verb points to the photos.',
    ['indice', 'nombre']),
  gap(2089, 'La lettre du maire qu’elle a reçue est datée de 1951.', 'The letter from the mayor that she received is dated 1951.',
    '/la lɛtʁ dy mɛʁ kɛ.la ʁə.sy ɛ da.te də mil nœf sɑ̃ sɛ̃.kɑ̃t e œ̃/', 'la LETR dü MEHR | keh-la ruh-SÜ | eh da-TAY | duh meel nuhf sahⁿ sehⁿ-kahⁿt ay UHⁿ',
    'La lettre du maire qu’elle a ___ est datée de 1951. (recevoir · c’est la lettre)',
    'Que reprend la lettre, placée avant avoir : reçue, au féminin. EN: the participle agrees with la lettre.',
    ['indice', 'participe']),
  sent(2090, 'Les élèves et les professeurs, s’ils le souhaitent, pourront visiter la salle.', 'Pupils and teachers alike may visit the room if they wish.',
    '/le.ze.lɛv e le pʁɔ.fɛ.sœʁ sil lə swɛt pu.ʁɔ̃ vi.zi.te la sal/', 'lay-zay-LEV | ay lay pro-feh-SUHR | seel luh SWET | poo-rohⁿ vee-zee-TAY la SAL', ['reparer', 'coordination']),
  sent(2091, 'Le fils de la voisine part à Lyon ; c’est lui qui chante dans la chorale.', 'The neighbour’s son is moving to Lyon; he is the one who sings in the choir.',
    '/lə fis də la vwa.zin paʁ a ljɔ̃ sɛ lɥi ki ʃɑ̃t dɑ̃ la kɔ.ʁal/', 'luh FEESS | duh la vwa-ZEENN | par a LYOHⁿ | seh LWEE | kee shahⁿt dahⁿ la ko-RAL', ['reparer', 'couper'], FCVDR),
];

/* ── ACT 6 · LEQUEL, POUR LEVER LE DOUTE (.2095-.2107) ───────────────────── */

export const ACT6_ROWS: Row[] = [
  sout(2095, 'La sœur de Paul, laquelle vit à Genève, hérite de la maison.', 'Paul’s sister, who lives in Geneva, inherits the house.',
    '/la sœʁ də pɔl la.kɛl vi a ʒə.nɛv e.ʁit də la mɛ.zɔ̃/', 'la SUHR duh POL | la-KEL vee a zhuh-NEV | ay-reet duh la meh-ZOHⁿ', ['lequel-sujet'], FCVDR),
  sout(2096, 'Le neveu de la donatrice, lequel n’avait jamais vu les lettres, les a lues en une nuit.', 'The donor’s nephew, who had never seen the letters, read them in one night.',
    '/lə nə.vø də la dɔ.na.tʁis lə.kɛl na.vɛ ʒa.mɛ vy le lɛtʁ le.za ly ɑ̃.nyn nɥi/', 'luh nuh-VEU | duh la do-na-TREESS | luh-KEL na-veh zha-meh vü lay LETR | lay-za LÜ | ahⁿ-nünn NWEE', ['lequel-sujet']),
  sout(2097, 'Un témoin a parlé à l’avocate, laquelle a aussitôt prévenu la juge.', 'A witness spoke to the lawyer, who immediately informed the judge.',
    '/œ̃ te.mwɛ̃ a paʁ.le a la.vɔ.kat la.kɛl a o.si.to pʁe.və.ny la ʒyʒ/', 'uhⁿ tay-MWEHⁿ | a par-LAY a la-vo-KAT | la-KEL a oh-see-TOH | pray-vuh-NÜ la ZHÜZH', ['lequel-sujet']),
  sent(2098, 'La salle sera peut-être pleine, auquel cas nous ouvrirons la seconde.', 'The room may be full, in which case we will open the second one.',
    '/la sal sə.ʁa pø.tɛtʁ plɛn o.kɛl ka nu.zu.vʁi.ʁɔ̃ la sə.ɡɔ̃d/', 'la SAL suh-ra peu-tetr PLENN | oh-kel KA | noo-zoo-vree-ROHⁿ | la suh-GOHⁿD', ['auquel-cas'], FCVDR),
  sent(2099, 'Le locataire et le propriétaire, lequel prend les travaux en charge, signent le bail.', 'The tenant and the landlord, one of whom (but which?) covers the repairs, sign the lease.',
    '/lə lɔ.ka.tɛʁ e lə pʁɔ.pʁi.je.tɛʁ lə.kɛl pʁɑ̃ le tʁa.vo ɑ̃ ʃaʁʒ siɲ lə baj/', 'luh lo-ka-TEHR | ay luh pro-pree-yay-TEHR | luh-KEL prahⁿ lay tra-VOH ahⁿ SHARZH | seeny luh BAÏ', ['lequel-limite'], FCVR, { register: S }),
  sent(2100, 'Le propriétaire, qui prend les travaux en charge, signe le bail avec le locataire.', 'The landlord, who covers the repairs, signs the lease with the tenant.',
    '/lə pʁɔ.pʁi.je.tɛʁ ki pʁɑ̃ le tʁa.vo ɑ̃ ʃaʁʒ siɲ lə baj a.vɛk lə lɔ.ka.tɛʁ/', 'luh pro-pree-yay-TEHR | kee prahⁿ lay tra-VOH ahⁿ SHARZH | seeny luh BAÏ | a-vek luh lo-ka-TEHR', ['reparer', 'rapprocher']),
  sout(2101, 'La fille du gardien, laquelle travaille aux Archives, nous ouvrira.', 'The caretaker’s daughter, who works at the Archives, will let us in.',
    '/la fij dy ɡaʁ.djɛ̃ la.kɛl tʁa.vaj o.zaʁ.ʃiv nu.zu.vʁi.ʁa/', 'la FEEY dü gar-DYEHⁿ | la-KEL tra-VAÏ oh-zar-SHEEV | noo-zoo-vree-RA', ['lequel-sujet']),
  sent(2102, 'La fille du gardien nous ouvrira ; elle travaille aux Archives.', 'The caretaker’s daughter will let us in; she works at the Archives.',
    '/la fij dy ɡaʁ.djɛ̃ nu.zu.vʁi.ʁa ɛl tʁa.vaj o.zaʁ.ʃiv/', 'la FEEY dü gar-DYEHⁿ | noo-zoo-vree-RA | el tra-VAÏ oh-zar-SHEEV', ['reparer', 'couper']),
  rule(2103, 'Lequel sujet porte le genre et le nombre : il dit à quel nom la relative s’accroche.', 'Lequel as subject carries gender and number: it tells you which noun the relative hooks onto.',
    '/lə.kɛl sy.ʒɛ pɔʁt lə ʒɑ̃ʁ e lə nɔ̃bʁ il di a kɛl nɔ̃ la ʁə.la.tiv sa.kʁɔʃ/', 'luh-KEL sü-ZHEH | port luh ZHAHⁿR | ay luh NOHⁿBR | eel dee a kel NOHⁿ | la ruh-la-TEEV sa-KROSH',
    'Pourquoi « laquelle » plutôt que « qui » ?',
    'Qui ne dit ni genre ni nombre. Laquelle ne peut reprendre qu’un nom féminin singulier.',
    ['lequel-sujet']),
  rule(2104, 'Lequel sujet vient après une virgule, dans une langue écrite, soignée ou administrative.', 'Lequel as subject comes after a comma, in written, careful or administrative French.',
    '/lə.kɛl sy.ʒɛ vjɛ̃ a.pʁɛ yn viʁ.ɡyl dɑ̃.zyn lɑ̃ɡ e.kʁit swa.ɲe u ad.mi.nis.tʁa.tiv/', 'luh-KEL sü-ZHEH | vyehⁿ a-preh ünn veer-GÜL | dahⁿ-zünn LAHⁿG | ay-KREET | swa-NYAY | oo ad-mee-nees-tra-TEEV',
    '« La femme laquelle chante » : possible ?',
    'Non. Sans virgule, qui. Lequel sujet n’ouvre qu’une relative explicative, et il sonne écrit.',
    ['lequel-sujet', 'registre']),
  sout(2105, 'La commission a entendu l’expert, lequel conteste ces chiffres.', 'The commission heard the expert, who disputes these figures.',
    '/la kɔ.mi.sjɔ̃ a ɑ̃.tɑ̃.dy lɛk.spɛʁ lə.kɛl kɔ̃.tɛst se ʃifʁ/', 'la ko-mee-SYOHⁿ | a ahⁿ-tahⁿ-DÜ lek-SPEHR | luh-KEL kohⁿ-TEST say SHEEFR', ['lequel-sujet']),
  gap(2106, 'Le frère de la directrice, lequel a signé le registre, est reparti.', 'The director’s brother, who signed the register, has left again.',
    '/lə fʁɛʁ də la di.ʁɛk.tʁis lə.kɛl a si.ɲe lə ʁə.ʒistʁ ɛ ʁə.paʁ.ti/', 'luh FREHR | duh la dee-rek-TREESS | luh-KEL a see-NYAY luh ruh-ZHEESTR | eh ruh-par-TEE',
    'Le frère de la directrice, ___ a signé le registre, est reparti. (lève le doute : c’est le frère)',
    'Qui laisserait le doute. Lequel, masculin, ne reprend que le frère. EN: lequel can only be the brother.',
    ['lequel-sujet'], FCVR),
  gap(2107, 'Il pleuvra peut-être, auquel cas la visite aura lieu à l’intérieur.', 'It may rain, in which case the tour will take place indoors.',
    '/il plø.vʁa pø.tɛtʁ o.kɛl ka la vi.zit o.ʁa ljø a lɛ̃.te.ʁjœʁ/', 'eel pleu-VRA peu-TETR | oh-kel KA | la vee-ZEET oh-ra LYEU | a lehⁿ-tay-RYUHR',
    'Il pleuvra peut-être, ___ cas la visite aura lieu à l’intérieur. (dans ce cas, en un seul mot)',
    'Auquel cas : dans ce cas-là, en langue soignée. EN: in which case.',
    ['auquel-cas']),
];

/* ── ACT 7 · AVEC OU SANS VIRGULES (.2115-.2130) ─────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(2115, 'Les candidats qui ont échoué pourront repasser l’épreuve en juin.', 'The candidates who failed may resit the exam in June.',
    '/le kɑ̃.di.da ki ɔ̃.te.ʃu.e pu.ʁɔ̃ ʁə.pa.se le.pʁœv ɑ̃ ʒɥɛ̃/', 'lay kahⁿ-dee-DA | kee ohⁿ-tay-shoo-AY | poo-rohⁿ ruh-pa-SAY lay-PRUHV | ahⁿ ZHWEHⁿ', ['determinative', 'pluriel'], FCVDR),
  sent(2116, 'Nos candidats, qui ont échoué, pourront repasser l’épreuve en juin.', 'Our candidates, who all failed, may resit the exam in June.',
    '/no kɑ̃.di.da ki ɔ̃.te.ʃu.e pu.ʁɔ̃ ʁə.pa.se le.pʁœv ɑ̃ ʒɥɛ̃/', 'noh kahⁿ-dee-DA | kee ohⁿ-tay-shoo-AY | poo-rohⁿ ruh-pa-SAY lay-PRUHV | ahⁿ ZHWEHⁿ', ['explicative', 'pluriel']),
  sent(2117, 'Les locataires qui ont un chien paient un supplément.', 'Tenants who have a dog pay a supplement.',
    '/le lɔ.ka.tɛʁ ki ɔ̃.tœ̃ ʃjɛ̃ pɛ œ̃ sy.ple.mɑ̃/', 'lay lo-ka-TEHR | kee ohⁿ-tuhⁿ SHYEHⁿ | peh uhⁿ sü-play-MAHⁿ', ['determinative', 'pluriel']),
  sent(2118, 'Nos locataires, qui ont un chien, paient un supplément.', 'Our tenants, who all have a dog, pay a supplement.',
    '/no lɔ.ka.tɛʁ ki ɔ̃.tœ̃ ʃjɛ̃ pɛ œ̃ sy.ple.mɑ̃/', 'noh lo-ka-TEHR | kee ohⁿ-tuhⁿ SHYEHⁿ | peh uhⁿ sü-play-MAHⁿ', ['explicative', 'pluriel']),
  sent(2119, 'Mon frère, qui ne boit jamais, a pris le volant au retour.', 'My brother, who never drinks, drove on the way back.',
    '/mɔ̃ fʁɛʁ ki nə bwa ʒa.mɛ a pʁi lə vɔ.lɑ̃ o ʁə.tuʁ/', 'mohⁿ FREHR | kee nuh bwa zha-MEH | a pree luh vo-LAHⁿ | oh ruh-TOOR', ['explicative', 'cause'], FCVDR),
  sent(2120, 'Ce texte, qui semble simple, cache plusieurs pièges.', 'This text, simple as it looks, hides several traps.',
    '/sə tɛkst ki sɑ̃bl sɛ̃pl kaʃ ply.zjœʁ pjɛʒ/', 'suh TEKST | kee sahⁿbl SEHⁿPL | kash plü-zyuhr PYEZH', ['explicative', 'concession']),
  sent(2121, 'Le Montréal où j’ai grandi n’existe plus.', 'The Montreal I grew up in no longer exists.',
    '/lə mɔ̃.ʁe.al u ʒe ɡʁɑ̃.di nɛɡ.zist ply/', 'luh mohⁿ-ray-AL | oo zhay grahⁿ-DEE | neg-zeest PLÜ', ['determinative', 'nom-propre']),
  sent(2122, 'Montréal, où j’ai grandi, a beaucoup changé.', 'Montreal, where I grew up, has changed a lot.',
    '/mɔ̃.ʁe.al u ʒe ɡʁɑ̃.di a bo.ku ʃɑ̃.ʒe/', 'mohⁿ-ray-AL | oo zhay grahⁿ-DEE | a boh-koo shahⁿ-ZHAY', ['explicative', 'nom-propre']),
  sent(2123, 'Les étudiants qui habitent loin peuvent loger à la résidence.', 'Students who live far away can stay in the residence.',
    '/le.ze.ty.djɑ̃ ki a.bit lwɛ̃ pœv lɔ.ʒe a la ʁe.zi.dɑ̃s/', 'lay-zay-tü-DYAHⁿ | kee a-beet LWEHⁿ | puhv lo-ZHAY | a la ray-zee-DAHⁿS', ['determinative', 'pluriel']),
  rule(2124, 'Avec un pluriel, la virgule change le nombre de gens concernés : tous, ou seulement certains.', 'With a plural, the comma changes how many people are concerned: all, or only some.',
    '/a.vɛk œ̃ ply.ʁjɛl la viʁ.ɡyl ʃɑ̃ʒ lə nɔ̃bʁ də ʒɑ̃ kɔ̃.sɛʁ.ne tus u sœl.mɑ̃ sɛʁ.tɛ̃/', 'a-vek uhⁿ plü-RYEL | la veer-GÜL shahⁿzh luh NOHⁿBR | duh zhahⁿ kohⁿ-sehr-NAY | TOOSS | oo suhl-mahⁿ sehr-TEHⁿ',
    'Les candidats qui ont échoué, les candidats, qui ont échoué : combien ont échoué ?',
    'Sans virgules, une partie seulement. Avec virgules, tous.',
    ['virgule']),
  rule(2125, 'Une explicative ajoute souvent une raison ou une concession, sans les nommer.', 'An explicative clause often adds a reason or a concession without naming it.',
    '/yn ɛk.spli.ka.tiv a.ʒut su.vɑ̃ yn ʁɛ.zɔ̃ u yn kɔ̃.se.sjɔ̃ sɑ̃ le nɔ.me/', 'ünn ek-splee-ka-TEEV | a-zhoot soo-VAHⁿ | ünn reh-ZOHⁿ | oo ünn kohⁿ-say-SYOHⁿ | sahⁿ lay no-MAY',
    'Mon frère, qui ne boit jamais, a pris le volant : pourquoi lui ?',
    'La relative donne la raison sans le dire : parce qu’il ne boit jamais.',
    ['explicative']),
  rule(2126, 'Un nom propre prend une explicative ; une déterminative en fait une époque ou une facette.', 'A proper noun takes an explicative clause; a determinative one turns it into a period or a facet.',
    '/œ̃ nɔ̃ pʁɔpʁ pʁɑ̃.tyn ɛk.spli.ka.tiv yn de.tɛʁ.mi.na.tiv ɑ̃ fɛ.tyn e.pɔk u yn fa.sɛt/', 'uhⁿ nohⁿ PROPR | prahⁿ-tünn ek-splee-ka-TEEV | ünn day-tehr-mee-na-TEEV | ahⁿ feh-tünn ay-POK | oo ünn fa-SET',
    'Le Montréal où j’ai grandi : pourquoi un article ?',
    'La relative choisit un Montréal parmi d’autres : celui d’autrefois.',
    ['nom-propre']),
  sent(2127, 'Nos employés, qui avaient été prévenus, ne sont pas venus.', 'Our employees, who had all been warned, did not come.',
    '/no.zɑ̃.plwa.je ki a.vɛ.te.te pʁe.və.ny nə sɔ̃ pa və.ny/', 'noh-zahⁿ-plwa-YAY | kee a-veh-tay-tay pray-vuh-NÜ | nuh sohⁿ pa vuh-NÜ', ['explicative', 'cause']),
  sent(2128, 'Les employés qui avaient été prévenus ne sont pas venus.', 'The employees who had been warned did not come.',
    '/le.zɑ̃.plwa.je ki a.vɛ.te.te pʁe.və.ny nə sɔ̃ pa və.ny/', 'lay-zahⁿ-plwa-YAY | kee a-veh-tay-tay pray-vuh-NÜ | nuh sohⁿ pa vuh-NÜ', ['determinative', 'pluriel'], FCVDR),
  sent(2129, 'Les touristes, que la pluie avait surpris, se sont réfugiés au musée.', 'The tourists, caught out by the rain, took shelter in the museum.',
    '/le tu.ʁist kə la plɥi a.vɛ syʁ.pʁi sə sɔ̃ ʁe.fy.ʒje o my.ze/', 'lay too-REEST | kuh la PLWEE a-veh sür-PREE | suh sohⁿ ray-fü-ZHYAY | oh mü-ZAY', ['explicative', 'cause']),
  sent(2130, 'Ce règlement, que personne ne lit, change pourtant tout.', 'These rules, which nobody reads, change everything all the same.',
    '/sə ʁɛ.ɡlə.mɑ̃ kə pɛʁ.sɔn nə li ʃɑ̃ʒ puʁ.tɑ̃ tu/', 'suh reh-gluh-MAHⁿ | kuh pehr-SONN nuh LEE | shahⁿzh poor-tahⁿ TOO', ['explicative', 'concession']),
];

/* ── ACT 8 · OÙ OU DANS LEQUEL (.2135-.2147) ─────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(2135, 'Nous sommes dans une situation où chaque jour compte.', 'We are in a situation where every day counts.',
    '/nu sɔm dɑ̃.zyn si.tɥa.sjɔ̃ u ʃak ʒuʁ kɔ̃t/', 'noo SOMM | dahⁿ-zünn see-twa-SYOHⁿ | oo shak zhoor KOHⁿT', ['abstrait', 'ou'], FCVDR),
  sent(2136, 'Nous sommes dans une situation dans laquelle chaque jour compte.', 'We are in a situation in which every day counts.',
    '/nu sɔm dɑ̃.zyn si.tɥa.sjɔ̃ dɑ̃ la.kɛl ʃak ʒuʁ kɔ̃t/', 'noo SOMM | dahⁿ-zünn see-twa-SYOHⁿ | dahⁿ la-KEL | shak zhoor KOHⁿT', ['abstrait', 'lequel']),
  sent(2137, 'Dans le cas où la salle serait fermée, appelez l’accueil.', 'Should the room be closed, call reception.',
    '/dɑ̃ lə ka u la sal sə.ʁɛ fɛʁ.me a.pə.le la.kœj/', 'dahⁿ luh KA | oo la SAL suh-reh fehr-MAY | a-puh-lay la-KUHY', ['abstrait', 'fige']),
  sent(2138, 'La règle sur laquelle repose tout le système date de 1950.', 'The rule the whole system rests on dates from 1950.',
    '/la ʁɛɡl syʁ la.kɛl ʁə.poz tu lə sis.tɛm dat də mil nœf sɑ̃ sɛ̃.kɑ̃t/', 'la REGL | sür la-KEL ruh-POHZ | too luh sees-TEMM | dat duh meel nuhf sahⁿ sehⁿ-KAHⁿT', ['abstrait', 'lequel'], FCVDR),
  sent(2139, 'C’est un domaine où les erreurs coûtent cher.', 'It is a field where mistakes are costly.',
    '/sɛ.tœ̃ dɔ.mɛn u le.ze.ʁœʁ kut ʃɛʁ/', 'seh-tuhⁿ do-MENN | oo lay-zay-RUHR | koot SHEHR', ['abstrait', 'ou']),
  sent(2140, 'Il en est arrivé au point où plus rien ne l’étonne.', 'He has reached the point where nothing surprises him any more.',
    '/i.lɑ̃.nɛ.ta.ʁi.ve o pwɛ̃ u ply ʁjɛ̃ nə le.tɔn/', 'ee-lahⁿ-neh-ta-ree-VAY | oh PWEHⁿ | oo plü RYEHⁿ | nuh lay-TONN', ['abstrait', 'fige']),
  sent(2141, 'Je vous aiderai dans la mesure où je le pourrai.', 'I will help you insofar as I can.',
    '/ʒə vu.zɛ.də.ʁe dɑ̃ la mə.zyʁ u ʒə lə pu.ʁe/', 'zhuh voo-zeh-duh-RAY | dahⁿ la muh-ZÜR | oo zhuh luh poo-RAY', ['abstrait', 'fige']),
  sent(2142, 'La méthode par laquelle on date les papiers est récente.', 'The method by which papers are dated is recent.',
    '/la me.tɔd paʁ la.kɛl ɔ̃ dat le pa.pje ɛ ʁe.sɑ̃t/', 'la may-TOD | par la-KEL | ohⁿ DAT lay pa-PYAY | eh ray-SAHⁿT', ['abstrait', 'lequel']),
  rule(2143, 'Où va avec un lieu, un moment ou une situation vue comme un lieu ; sinon, la préposition du verbe et lequel.', 'Où goes with a place, a time or a situation seen as a place; otherwise, the verb’s preposition and lequel.',
    '/u va a.vɛk œ̃ ljø œ̃ mɔ.mɑ̃ u yn si.tɥa.sjɔ̃ vy kɔm œ̃ ljø si.nɔ̃ la pʁe.pɔ.zi.sjɔ̃ dy vɛʁb e lə.kɛl/', 'oo va a-vek uhⁿ LYEU | uhⁿ mo-MAHⁿ | oo ünn see-twa-SYOHⁿ | vü komm uhⁿ LYEU | see-NOHⁿ | la pray-po-zee-SYOHⁿ dü VEHRB | ay luh-KEL',
    'Le principe … repose le système : où, ou sur lequel ?',
    'Sur lequel : reposer sur. Un principe n’est ni un lieu ni un moment.',
    ['abstrait']),
  rule(2144, 'Dans le cas où, au point où, dans la mesure où : où sans lieu, dans des tours figés.', 'Dans le cas où, au point où, dans la mesure où: où with no place, in fixed phrases.',
    '/dɑ̃ lə ka u o pwɛ̃ u dɑ̃ la mə.zyʁ u u sɑ̃ ljø dɑ̃ de tuʁ fi.ʒe/', 'dahⁿ luh ka OO | oh pwehⁿ OO | dahⁿ la muh-zür OO | oo sahⁿ LYEU | dahⁿ day toor fee-ZHAY',
    'Dans le cas où la salle … fermée : quel mode ?',
    'Le conditionnel : dans le cas où la salle serait fermée. Au cas où aussi.',
    ['abstrait', 'fige']),
  gap(2145, 'La théorie sur laquelle il s’appuie est contestée.', 'The theory he relies on is disputed.',
    '/la te.ɔ.ʁi syʁ la.kɛl il sa.pɥi ɛ kɔ̃.tɛs.te/', 'la tay-o-REE | sür la-KEL | eel sa-PWEE | eh kohⁿ-tes-TAY',
    'La théorie ___ il s’appuie est contestée. (s’appuyer sur)',
    'S’appuyer sur, et une théorie n’est pas un lieu : sur laquelle. EN: sur laquelle, not où.',
    ['abstrait', 'lequel']),
  gap(2146, 'C’était une époque où tout semblait possible.', 'It was a time when everything seemed possible.',
    '/se.tɛ.tyn e.pɔk u tu sɑ̃.blɛ pɔ.sibl/', 'say-teh-tünn ay-POK | oo too sahⁿ-bleh po-SEEBL',
    'C’était une époque ___ tout semblait possible. (un moment)',
    `Une époque est un moment : où, jamais quand, comme dans ${DONT_OU_REF}. EN: où for a time, as in B1.`,
    ['abstrait', 'ou'], FCVDR),
  sent(2147, 'Le contexte dans lequel ces lettres ont été écrites explique leur ton.', 'The context in which these letters were written explains their tone.',
    '/lə kɔ̃.tɛkst dɑ̃ lə.kɛl se lɛtʁ ɔ̃.te.te e.kʁit ɛk.splik lœʁ tɔ̃/', 'luh kohⁿ-TEKST | dahⁿ luh-KEL | say LETR ohⁿ-tay-tay ay-KREET | ek-spleek luhr TOHⁿ', ['abstrait', 'lequel']),
];

/* ── ACT 9 · DES RELATIVES DANS DES RELATIVES (.2150-.2163) ──────────────── */

export const ACT9_ROWS: Row[] = [
  sout(2150, 'C’est un projet dont on peut espérer qu’il aboutira.', 'It is a project one can hope will succeed.',
    '/sɛ.tœ̃ pʁɔ.ʒɛ dɔ̃.tɔ̃ pø ɛs.pe.ʁe ki.la.bu.ti.ʁa/', 'seh-tuhⁿ pro-ZHEH | dohⁿ-tohⁿ PEU | es-pay-RAY | kee-la-boo-tee-RA', ['emboite', 'dont-que'], FCVDR),
  sout(2151, 'Voici le témoin dont je sais qu’il a menti.', 'Here is the witness I know lied.',
    '/vwa.si lə te.mwɛ̃ dɔ̃ ʒə sɛ ki.la mɑ̃.ti/', 'vwa-SEE | luh tay-MWEHⁿ | dohⁿ zhuh SEH | kee-la mahⁿ-TEE', ['emboite', 'dont-que']),
  sent(2152, 'C’est un livre que tu aimeras, je crois.', 'It is a book you will like, I think.',
    '/sɛ.tœ̃ livʁ kə ty ɛm.ʁa ʒə kʁwa/', 'seh-tuhⁿ LEEVR | kuh tü em-RA | zhuh KRWA', ['emboite', 'incise']),
  sent(2153, 'C’est un livre que je crois que tu aimeras.', 'It is a book I believe you will like.',
    '/sɛ.tœ̃ livʁ kə ʒə kʁwa kə ty ɛm.ʁa/', 'seh-tuhⁿ LEEVR | kuh zhuh KRWA | kuh tü em-RA', ['emboite', 'lourd']),
  sent(2154, 'C’est un livre que je crois qui te plaira.', 'It is a book I think you will like.',
    '/sɛ.tœ̃ livʁ kə ʒə kʁwa ki tə plɛ.ʁa/', 'seh-tuhⁿ LEEVR | kuh zhuh KRWA | kee tuh pleh-RA', ['emboite', 'familier'], FCVR, { register: 'familier' }),
  sent(2155, 'C’est un livre qui, je crois, te plaira.', 'It is a book that, I think, you will like.',
    '/sɛ.tœ̃ livʁ ki ʒə kʁwa tə plɛ.ʁa/', 'seh-tuhⁿ LEEVR | KEE | zhuh KRWA | tuh pleh-RA', ['emboite', 'incise'], FCVDR),
  sent(2156, 'C’est de cela qu’il s’agit.', 'That is what it is about.',
    '/sɛ də sə.la kil sa.ʒi/', 'seh duh suh-LA | keel sa-ZHEE', ['de-cela', 'clivee'], FCVDR),
  sent(2157, 'C’est de cela que je voulais te parler.', 'That is what I wanted to talk to you about.',
    '/sɛ də sə.la kə ʒə vu.lɛ tə paʁ.le/', 'seh duh suh-LA | kuh zhuh voo-LEH | tuh par-LAY', ['de-cela', 'clivee']),
  sent(2158, 'Le texte que l’archiviste dont je t’ai parlé a retrouvé date de 1890.', 'The text that the archivist I told you about found dates from 1890.',
    '/lə tɛkst kə laʁ.ʃi.vist dɔ̃ ʒə te paʁ.le a ʁə.tʁu.ve dat də mil yit sɑ̃ ka.tʁə.vɛ̃.dis/', 'luh TEKST | kuh lar-shee-VEEST | dohⁿ zhuh tay par-LAY | a ruh-troo-VAY | dat duh meel weet sahⁿ ka-truh-vehⁿ-DEESS', ['emboite', 'lourd']),
  sent(2159, 'L’archiviste dont je t’ai parlé a retrouvé un texte qui date de 1890.', 'The archivist I told you about found a text dating from 1890.',
    '/laʁ.ʃi.vist dɔ̃ ʒə te paʁ.le a ʁə.tʁu.ve œ̃ tɛkst ki dat də mil yit sɑ̃ ka.tʁə.vɛ̃.dis/', 'lar-shee-VEEST | dohⁿ zhuh tay par-LAY | a ruh-troo-VAY uhⁿ TEKST | kee dat duh meel weet sahⁿ ka-truh-vehⁿ-DEESS', ['emboite', 'alleger']),
  rule(2160, 'Que je crois qui : à l’oral familier seulement ; à l’écrit, qui, je crois, ou dont je crois qu’il.', 'Que je crois qui: in casual speech only; in writing, qui, je crois, or dont je crois qu’il.',
    '/kə ʒə kʁwa ki a lɔ.ʁal fa.mi.lje sœl.mɑ̃ a le.kʁi ki ʒə kʁwa u dɔ̃ ʒə kʁwa kil/', 'kuh zhuh krwa KEE | a lo-RAL fa-mee-LYAY suhl-MAHⁿ | a lay-KREE | KEE zhuh KRWA | oo dohⁿ zhuh krwa KEEL',
    '« Un livre que je crois qui te plaira » : à l’écrit ?',
    'Non : c’est du français parlé familier. Écris « un livre qui, je crois, te plaira ».',
    ['emboite', 'registre']),
  rule(2161, 'C’est de cela qu’il s’agit, ou c’est cela dont il s’agit : jamais de et dont ensemble.', 'C’est de cela qu’il s’agit, or c’est cela dont il s’agit: never de and dont together.',
    '/sɛ də sə.la kil sa.ʒi u sɛ sə.la dɔ̃.til sa.ʒi ʒa.mɛ də e dɔ̃ ɑ̃.sɑ̃bl/', 'seh duh suh-LA keel sa-ZHEE | oo seh suh-LA dohⁿ-teel sa-ZHEE | zha-MEH | duh ay DOHⁿ | ahⁿ-SAHⁿBL',
    '« C’est de cela dont il s’agit » : pourquoi l’éviter ?',
    'De et dont disent deux fois la même chose. Les guides de bon usage conseillent de garder l’un des deux.',
    ['de-cela', 'registre']),
  sout(2162, 'Ce sont des questions dont je doute qu’elles soient réglées un jour.', 'These are questions I doubt will ever be settled.',
    '/sə sɔ̃ de kɛs.tjɔ̃ dɔ̃ ʒə dut kɛl swa ʁe.ɡle œ̃ ʒuʁ/', 'suh sohⁿ day kes-TYOHⁿ | dohⁿ zhuh DOOT | kel swa ray-GLAY | uhⁿ ZHOOR', ['emboite', 'dont-que']),
  gap(2163, 'C’est de ce projet que je voulais te parler.', 'It is this project I wanted to talk to you about.',
    '/sɛ də sə pʁɔ.ʒɛ kə ʒə vu.lɛ tə paʁ.le/', 'seh duh suh pro-ZHEH | kuh zhuh voo-LEH | tuh par-LAY',
    'C’est de ce projet ___ je voulais te parler. (de est déjà écrit)',
    'Le de est déjà devant ce projet : que, pas dont. EN: de is already there, so que.',
    ['de-cela', 'clivee']),
];

/* ── ACT 10 · ALLÉGER LA CHAÎNE (.2165-.2176) ────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(2165, 'La dame qui habite la maison qui est au bout de la rue qui monte vend son piano.', 'The lady who lives in the house that is at the end of the street that goes uphill is selling her piano.',
    '/la dam ki a.bit la mɛ.zɔ̃ ki ɛ.to bu də la ʁy ki mɔ̃t vɑ̃ sɔ̃ pja.no/', 'la DAMM | kee a-beet la meh-ZOHⁿ | kee eh-toh BOO | duh la RÜ kee MOHⁿT | vahⁿ sohⁿ pya-NOH', ['chaine', 'lourd']),
  sent(2166, 'La dame qui habite tout en haut de la rue vend son piano.', 'The lady who lives at the very top of the street is selling her piano.',
    '/la dam ki a.bit tu.tɑ̃ o də la ʁy vɑ̃ sɔ̃ pja.no/', 'la DAMM | kee a-beet too-tahⁿ OH | duh la RÜ | vahⁿ sohⁿ pya-NOH', ['chaine', 'alleger'], FCVDR),
  sent(2167, 'Le rapport, rédigé en mars, contredit l’étude publiée l’an dernier.', 'The report, written in March, contradicts the study published last year.',
    '/lə ʁa.pɔʁ ʁe.di.ʒe ɑ̃ maʁs kɔ̃.tʁə.di le.tyd py.bli.je lɑ̃ dɛʁ.nje/', 'luh ra-POR | ray-dee-ZHAY ahⁿ MARS | kohⁿ-truh-DEE | lay-TÜD pü-blee-YAY | lahⁿ dehr-NYAY', ['chaine', 'participe'], FCVDR),
  sent(2168, 'Le rapport, qui a été rédigé en mars, contredit l’étude qui a été publiée l’an dernier.', 'The report, which was written in March, contradicts the study that was published last year.',
    '/lə ʁa.pɔʁ ki a e.te ʁe.di.ʒe ɑ̃ maʁs kɔ̃.tʁə.di le.tyd ki a e.te py.bli.je lɑ̃ dɛʁ.nje/', 'luh ra-POR | kee a ay-tay ray-dee-ZHAY ahⁿ MARS | kohⁿ-truh-DEE lay-TÜD | kee a ay-tay pü-blee-YAY | lahⁿ dehr-NYAY', ['chaine', 'lourd']),
  sent(2169, 'La réunion, au cours de laquelle trois projets ont été présentés, a duré deux heures.', 'The meeting, during which three projects were presented, lasted two hours.',
    '/la ʁe.y.njɔ̃ o kuʁ də la.kɛl tʁwa pʁɔ.ʒɛ ɔ̃.te.te pʁe.zɑ̃.te a dy.ʁe dø.zœʁ/', 'la ray-ü-NYOHⁿ | oh koor duh la-KEL | trwa pro-ZHEH ohⁿ-tay-tay pray-zahⁿ-TAY | a dü-RAY deu-ZUHR', ['locution', 'lire']),
  sout(2170, 'L’accord en vertu duquel la ville gère le fonds expire en 2030.', 'The agreement under which the town manages the collection expires in 2030.',
    '/la.kɔʁ ɑ̃ vɛʁ.ty dy.kɛl la vil ʒɛʁ lə fɔ̃ ɛk.spiʁ ɑ̃ dø mil tʁɑ̃t/', 'la-KOR | ahⁿ vehr-tü dü-KEL | la VEEL zhehr luh FOHⁿ | ek-SPEER | ahⁿ deu meel TRAHⁿT', ['locution', 'lire']),
  sout(2171, 'Les habitants, à l’égard desquels la mairie s’était engagée, attendent toujours.', 'The residents, to whom the town hall had made a commitment, are still waiting.',
    '/le.za.bi.tɑ̃ a le.ɡaʁ de.kɛl la mɛ.ʁi se.tɛ.tɑ̃.ɡa.ʒe a.tɑ̃d tu.ʒuʁ/', 'lay-za-bee-TAHⁿ | a lay-gar day-KEL | la meh-REE say-teh-tahⁿ-ga-ZHAY | a-tahⁿd too-ZHOOR', ['locution', 'lire']),
  rule(2172, 'Plus de deux relatives sur un même nom : remplace l’une par un adjectif, un participe ou un complément.', 'More than two relatives on one noun: replace one with an adjective, a participle or a complement.',
    '/ply də dø ʁə.la.tiv syʁ œ̃ mɛm nɔ̃ ʁɑ̃.plas lyn paʁ œ̃.na.ʒɛk.tif œ̃ paʁ.ti.sip u œ̃ kɔ̃.ple.mɑ̃/', 'plü duh DEU ruh-la-TEEV | sür uhⁿ memm NOHⁿ | rahⁿ-plass LÜNN | par uhⁿ-na-zhek-TEEF | uhⁿ par-tee-SEEP | oo uhⁿ kohⁿ-play-MAHⁿ',
    'La dame qui habite la maison qui est au bout de la rue qui monte : que faire ?',
    'Garde une relative et dis le reste autrement : tout en haut de la rue, rédigé, publié.',
    ['chaine']),
  rule(2173, 'Au cours duquel, à l’issue de laquelle, en vertu duquel : l’écrit soigné y accroche un événement ou un texte.', 'Au cours duquel, à l’issue de laquelle, en vertu duquel: careful writing hooks an event or a text this way.',
    '/o kuʁ dy.kɛl a li.sy də la.kɛl ɑ̃ vɛʁ.ty dy.kɛl le.kʁi swa.ɲe i a.kʁɔʃ œ̃.ne.vɛn.mɑ̃ u œ̃ tɛkst/', 'oh koor dü-KEL | a lee-SÜ duh la-KEL | ahⁿ vehr-tü dü-KEL | lay-KREE swa-NYAY | ee a-KROSH | uhⁿ-nay-venn-MAHⁿ | oo uhⁿ TEKST',
    'Au cours duquel : à quoi s’accroche duquel ?',
    'Au nom d’avant, masculin singulier : un événement, une période, un texte.',
    ['locution']),
  sent(2174, 'Le comité a retenu trois projets, dont un seul sera financé cette année.', 'The committee chose three projects, only one of which will be funded this year.',
    '/lə kɔ.mi.te a ʁə.tə.ny tʁwa pʁɔ.ʒɛ dɔ̃.tœ̃ sœl sə.ʁa fi.nɑ̃.se sɛ.ta.ne/', 'luh ko-mee-TAY a ruh-tuh-NÜ | trwa pro-ZHEH | dohⁿ-tuhⁿ SUHL | suh-ra fee-nahⁿ-SAY | seh-ta-NAY', ['chaine', 'partitif']),
  sent(2175, 'Les lettres datées d’avant 1920 sont conservées à part.', 'Letters dated before 1920 are kept separately.',
    '/le lɛtʁ da.te da.vɑ̃ mil nœf sɑ̃ vɛ̃ sɔ̃ kɔ̃.sɛʁ.ve a paʁ/', 'lay LETR da-TAY | da-vahⁿ meel nuhf sahⁿ VEHⁿ | sohⁿ kohⁿ-sehr-VAY a PAR', ['chaine', 'participe']),
  gap(2176, 'La visite, à l’issue de laquelle un verre sera servi, commence à dix-huit heures.', 'The tour, after which drinks will be served, starts at six p.m.',
    '/la vi.zit a li.sy də la.kɛl œ̃ vɛʁ sə.ʁa sɛʁ.vi kɔ.mɑ̃s a di.zɥi.tœʁ/', 'la vee-ZEET | a lee-SÜ duh la-KEL | uhⁿ VEHR suh-ra sehr-VEE | ko-mahⁿs a dee-zwee-TUHR',
    'La visite, à l’issue ___ un verre sera servi, commence à dix-huit heures. (à l’issue de · la visite)',
    `Rappel de ${LEQUEL_REF} : après une locution qui finit par de, pas dont, mais de laquelle. EN: a reminder from B1: de laquelle after à l’issue.`,
    ['locution']),
];

/* ── ACT 11 · TA NOTICE (.2180-.2189) ────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(2180, 'L’ancienne imprimerie Lavallière, dont les presses se sont tues en 1987, rouvre en septembre.', 'The former Lavallière print works, whose presses fell silent in 1987, reopens in September.',
    '/lɑ̃.sjɛn ɛ̃.pʁi.mə.ʁi la.va.ljɛʁ dɔ̃ le pʁɛs sə sɔ̃ ty ɑ̃ mil nœf sɑ̃ ka.tʁə.vɛ̃.sɛt ʁuvʁ ɑ̃ sɛp.tɑ̃bʁ/', 'lahⁿ-SYENN ehⁿ-pree-muh-REE la-va-LYEHR | dohⁿ lay PRESS | suh sohⁿ TÜ | ahⁿ meel nuhf sahⁿ ka-truh-vehⁿ-SET | roovr ahⁿ sep-TAHⁿBR', ['tache', 'dont']),
  sent(2181, 'Le bâtiment abrite trois ateliers, dont un consacré à la reliure.', 'The building houses three workshops, one of them devoted to bookbinding.',
    '/lə ba.ti.mɑ̃ a.bʁit tʁwa.za.tə.lje dɔ̃.tœ̃ kɔ̃.sa.kʁe a la ʁə.ljyʁ/', 'luh ba-tee-MAHⁿ a-BREET | trwa-za-tuh-LYAY | dohⁿ-tuhⁿ kohⁿ-sa-KRAY | a la ruh-LYÜR', ['tache', 'partitif'], FCVDR),
  sent(2182, 'Les visiteurs y trouveront de quoi s’initier à la typographie.', 'Visitors will find everything they need there to try their hand at typography.',
    '/le vi.zi.tœʁ i tʁu.və.ʁɔ̃ də kwa si.ni.sje a la ti.pɔ.ɡʁa.fi/', 'lay vee-zee-TUHR | ee troo-vuh-ROHⁿ | duh kwa see-nee-SYAY | a la tee-po-gra-FEE', ['tache', 'de-quoi']),
  sent(2183, 'Une salle où écrire au calme est ouverte à tous.', 'A room to write in peace is open to all.',
    '/yn sal u e.kʁiʁ o kalm ɛ.tu.vɛʁ.ta tus/', 'ünn SAL | oo ay-KREER oh KALM | eh-too-vehr-ta TOOSS', ['tache', 'ou-inf']),
  sout(2184, 'La fille du fondateur, laquelle a dirigé l’imprimerie de 1952 à 1987, a légué les archives à la ville.', 'The founder’s daughter, who ran the print works from 1952 to 1987, left the archives to the town.',
    '/la fij dy fɔ̃.da.tœʁ la.kɛl a di.ʁi.ʒe lɛ̃.pʁi.mə.ʁi də mil nœf sɑ̃ sɛ̃.kɑ̃t.dø a mil nœf sɑ̃ ka.tʁə.vɛ̃.sɛt a le.ɡe le.zaʁ.ʃiv a la vil/', 'la FEEY dü fohⁿ-da-TUHR | la-KEL a dee-ree-ZHAY lehⁿ-pree-muh-REE | duh meel nuhf sahⁿ sehⁿ-kahⁿt-DEU | a meel nuhf sahⁿ ka-truh-vehⁿ-SET | a lay-GAY lay-zar-SHEEV a la VEEL', ['tache', 'lequel-sujet']),
  sent(2185, 'C’est ce à quoi la ville s’était engagée : garder les presses en état de marche.', 'That is what the town had committed to: keeping the presses in working order.',
    '/sɛ sə a kwa la vil se.tɛ.tɑ̃.ɡa.ʒe ɡaʁ.de le pʁɛs ɑ̃.ne.ta də maʁʃ/', 'seh suh a KWA | la VEEL say-teh-tahⁿ-ga-ZHAY | gar-DAY lay PRESS | ahⁿ-nay-ta duh MARSH', ['tache', 'ce-a-quoi']),
  sent(2186, 'Les ateliers, qui ont gardé leurs machines d’origine, se visitent le samedi.', 'The workshops, which have kept their original machines, can be visited on Saturdays.',
    '/le.za.tə.lje ki ɔ̃ ɡaʁ.de lœʁ ma.ʃin dɔ.ʁi.ʒin sə vi.zit lə sam.di/', 'lay-za-tuh-LYAY | kee ohⁿ gar-DAY luhr ma-SHEENN do-ree-ZHEENN | suh vee-ZEET | luh sam-DEE', ['tache', 'explicative']),
  sent(2187, 'Les groupes qui souhaitent une visite guidée doivent réserver.', 'Groups who would like a guided tour must book.',
    '/le ɡʁup ki swɛt yn vi.zit ɡi.de dwav ʁe.zɛʁ.ve/', 'lay GROOP | kee swet ünn vee-zeet gee-DAY | dwav ray-zehr-VAY', ['tache', 'determinative']),
  sent(2188, 'Le projet s’inscrit dans un quartier où la mémoire ouvrière reste vive.', 'The project belongs to a neighbourhood where the memory of the workers is still alive.',
    '/lə pʁɔ.ʒɛ sɛ̃s.kʁi dɑ̃.zœ̃ kaʁ.tje u la me.mwaʁ u.vʁi.jɛʁ ʁɛst viv/', 'luh pro-ZHEH sehⁿs-KREE | dahⁿ-zuhⁿ kar-TYAY | oo la may-MWAR oo-vree-YEHR | rest VEEV', ['tache', 'abstrait']),
  sent(2189, 'Réservez une semaine à l’avance, faute de quoi nous ne pourrons pas vous accueillir.', 'Book a week ahead, failing which we will not be able to welcome you.',
    '/ʁe.zɛʁ.ve yn sə.mɛn a la.vɑ̃s fot də kwa nu nə pu.ʁɔ̃ pa vu.za.kœ.jiʁ/', 'ray-zehr-VAY ünn suh-MENN a la-VAHⁿS | foht duh KWA | noo nuh poo-rohⁿ pa voo-za-kuh-YEER', ['tache', 'faute-de-quoi']),
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
 *  §I. THE TEXTS (all original, written for the lesson)
 *
 *  Four long readings (C1: about 230 to 300 words) and the nine short « dans
 *  un texte » paragraphs (55 to 90 words) that close acts 2 to 10. They live
 *  here so the reading, the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the Archives newsletter. */
export const LECTURE_MALLE =
  "Lettre d’information des Archives de Pont-Aurèle. Le fonds Ferland entre aux Archives.\n\nPendant soixante ans, Jeanne Ferland a gardé dans une malle de cuir la correspondance de sa famille. Le fonds compte quatre cents lettres, dont une trentaine écrites à Paris. Les lettres, qui ont voyagé dans une malle, sont restées intactes ; seules les enveloppes ont souffert de l’humidité. Les lettres qui portent un cachet rouge viennent de l’étranger : Mme Ferland les avait mises à part, avec une note pour chacune.\n\nLa correspondance montre un monde dans lequel la lettre tenait lieu de téléphone, de journal et parfois de confident. Que ces lettres soient lues, et non exposées sous une vitre : c’est ce à quoi Mme Ferland tenait le plus, et c’est la raison pour laquelle elle a refusé l’offre d’un musée. Les chercheurs y trouveront de quoi nourrir plusieurs thèses, sur l’émigration comme sur la vie des femmes à la campagne.\n\nLe petit-fils de Mme Ferland, laquelle a classé les lettres elle-même, prendra la parole à l’inauguration, le samedi 14 mars. Il racontera l’histoire d’un grand-oncle dont personne ne parlait et dont la malle gardait pourtant toutes les lettres. La salle de lecture, rénovée cet hiver, offre enfin un endroit où travailler au calme. Elle est ouverte du mardi au samedi, sans rendez-vous, sauf pour les documents dont l’état exige une surveillance.";

/** Act 9: a language column in an invented regional paper. */
export const LECTURE_CHRONIQUE =
  "La Gazette des Rives, chronique « Langue vivante », par Béatrice Lacombe.\n\nUn lecteur m’écrit, un peu inquiet : « Ma fille dit : C’est un film que je crois qui va te plaire. Est-ce du français ? » C’en est, mais du français parlé, et plutôt familier. Le tour naît d’un croisement : on veut dire à la fois « un film qui va te plaire » et « je crois qu’il va te plaire », et les deux phrases se soudent en route.\n\nÀ l’écrit, trois solutions existent, chacune avec son registre. La plus simple glisse l’opinion entre deux virgules : « un film qui, je crois, va te plaire ». La plus soutenue passe par dont : « un film dont je crois qu’il va te plaire », tournure que l’on rencontre surtout dans les essais. La troisième, « un film que je crois que tu aimeras », est correcte mais lourde ; on l’évite dès que la phrase s’allonge.\n\nLe même lecteur me signale une phrase entendue à la radio : « C’est de cela dont il s’agit. » Ici, le reproche est d’une autre nature. De et dont disent deux fois la même chose, et les guides de bon usage, en France comme au Québec, conseillent de choisir : « c’est de cela qu’il s’agit », ou « c’est cela dont il s’agit ». Rien de dramatique, mais à l’examen comme dans une lettre officielle, mieux vaut ne pas donner prise à la critique.\n\nMa conclusion ? Une relative est un crochet. Quand on en accroche une à l’intérieur d’une autre, il faut que chacune sache encore à quel nom elle tient.";

/** Act 10: an article in the dense prose of a CE text. */
export const LECTURE_PAPIER =
  "Ce que le papier raconte.\n\nAux Archives de Pont-Aurèle, les lettres sans date, dont le fonds Ferland compte près d’une centaine, posent un problème auquel les archivistes consacrent des semaines. La méthode à laquelle ils recourent d’abord est ancienne : examiner le papier lui-même. Une feuille faite à la main, dans un moule, garde la trace des fils sur lesquels la pâte s’est égouttée, et parfois un filigrane, au dessin duquel on reconnaît un moulin ou une époque. Le papier fabriqué en continu, qui se répand au dix-neuvième siècle, porte d’autres marques, ce qui oriente déjà l’enquête.\n\nVient ensuite le texte, au fil duquel l’auteur laisse échapper des indices : un prix, un nom de rue, une allusion à un événement dont la date est connue. Mathilde Rozier, qui dirige le service, résume ainsi la démarche : « On cherche d’abord ce par quoi la lettre se trahit, après quoi on croise les indices. Une seule preuve, c’est une hypothèse ; trois, c’est une date. »\n\nLa convention en vertu de laquelle la ville gère le fonds prévoit d’ailleurs que chaque date proposée soit justifiée par écrit, faute de quoi la lettre reste classée « sans date ». Les lecteurs, à qui ces fiches sont ouvertes, peuvent ainsi vérifier le raisonnement, et le contester. C’est même ce à quoi Mathilde Rozier tient le plus : une date qu’on ne peut pas discuter, dit-elle, n’est qu’une étiquette.";

/** Act 11: the model notice the learner imitates. */
export const LECTURE_MODELE =
  "Journées du patrimoine : l’imprimerie Lavallière.\n\nL’ancienne imprimerie Lavallière, dont les presses se sont tues en 1987, rouvre en septembre sous le nom de Maison des écritures. Fondée en 1921 par Émile Lavallière, elle a imprimé pendant soixante ans les affiches, les faire-part et le journal de la ville. La fille du fondateur, laquelle a dirigé l’imprimerie de 1952 à 1987, a légué les archives à la ville, à une condition : garder les presses en état de marche. C’est ce à quoi la ville s’était engagée, et c’est chose faite.\n\nLe bâtiment abrite trois ateliers, dont un consacré à la reliure. Les ateliers, qui ont gardé leurs machines d’origine, se visitent le samedi ; les visiteurs y trouveront de quoi s’initier à la typographie, du composteur à la casse. Au premier étage, une salle où écrire au calme est ouverte à tous, sans réservation, dans la mesure où les places le permettent.\n\nLe projet s’inscrit dans un quartier où la mémoire ouvrière reste vive : beaucoup d’habitants, parmi lesquels d’anciens apprentis, ont prêté des photos pour l’exposition d’ouverture, au cours de laquelle trois d’entre eux raconteront leur premier jour à l’atelier.\n\nInformations pratiques. Entrée libre, du mercredi au samedi, de dix à dix-huit heures. Les groupes qui souhaitent une visite guidée doivent réserver une semaine à l’avance, faute de quoi nous ne pourrons pas les accueillir.";

/** The task's raw notes (act 11 brief), deliberately in note form. */
export const NOTES_GARE =
  "Gare de Pont-Aurèle. Construite en 1898. Fermée aux voyageurs en 1974. Deux bâtiments : le bâtiment des voyageurs ; la halle aux marchandises (devenue salle d’exposition). Restaurée de 2023 à 2026. Rouvre le 19 septembre : médiathèque. Le chef de gare et sa femme (elle tenait le guichet) logeaient à l’étage. Leur petite-fille : don des registres de la gare (horaires, colis, lettres de voyageurs). 30 000 livres, 4 000 pour la jeunesse. Une salle pour travailler en groupe. Une terrasse sur les anciens quais. Engagement de la ville : garder l’horloge de la façade. Groupes : réserver dix jours avant. Ouvert du mardi au dimanche.";

/** The « dans un texte » paragraphs (acts 2 to 10). (…) marks each gap. */
export const TEXTE_A2 =
  "Compte rendu de l’assemblée des Amis des Archives. Quarante-deux membres étaient présents, (…) une dizaine de nouveaux venus. Trois projets ont été proposés, (…) un seul a été retenu : la numérisation des cartes postales du fonds Ferland, (…) certaines datent de 1905. L’association compte désormais soixante bénévoles, (…) la plupart (être) des retraités. Le trésorier a présenté le budget, (…) un tiers servira à acheter un scanner.";

export const TEXTE_A3 =
  "Règlement de la salle de lecture. Les documents se consultent sur place : c’est ce (…) les Archives tiennent le plus. Présentez votre carte à l’accueil, (…) une place vous sera attribuée. Les crayons sont fournis ; les stylos sont interdits, (…) les lettres risqueraient d’être tachées. Prévenez l’accueil avant de photographier un document, (…) votre demande ne pourra pas être traitée. Ce (…) nous comptons, c’est votre soin.";

export const TEXTE_A4 =
  "Message de Sophie à son frère Noé, qui arrive à Pont-Aurèle. « Je t’ai trouvé un endroit (…) dormir : le canapé de mon amie Inès. Tu auras aussi un bureau (…) travailler le matin. Prends de (…) écrire, la connexion est capricieuse. Si tu te sens seul, tu as quelqu’un (…) parler : Bastien, mon voisin. Et ne t’inquiète pas pour l’argent : il y a (…) vivre deux semaines dans le frigo. »";

export const TEXTE_A5 =
  "Note de Karim à Mathilde. « Le neveu de la donatrice qui a appelé ce matin veut voir les lettres. Les photos du mariage qui sont dans la boîte bleue n’ont pas été inventoriées. J’ai retrouvé la copie de l’acte que le notaire a signée en 1952. Enfin, le fils du gardien qui travaille de nuit demande s’il peut venir samedi. »";

export const TEXTE_A6 =
  "Compte rendu de la visite, réécrit par Mathilde. La directrice du musée, (…) avait organisé la visite, nous a accueillis à neuf heures. Le neveu de la donatrice, (…) n’avait jamais vu les lettres, les a lues en silence. Le notaire de la famille, (…) avait rédigé l’acte de donation, est arrivé plus tard. La salle sera peut-être trop petite à l’inauguration, (…) cas nous ouvrirons le hall.";

export const TEXTE_A7 =
  "Règlement de la Résidence des Tilleuls. Les résidents qui ont un animal doivent le déclarer à l’accueil. Les visiteurs, qui signent le registre à l’entrée, quittent la résidence avant vingt-deux heures. Les chambres qui donnent sur la cour sont attribuées en priorité aux résidents qui travaillent de nuit. Le jardin, que les résidents entretiennent eux-mêmes, reste ouvert jusqu’au coucher du soleil.";

export const TEXTE_A8 =
  "Rapport annuel des Archives. Nous traversons une période (…) chaque euro compte. Le principe (…) repose notre politique reste simple : tout document se consulte gratuitement. Dans le cas (…) une salle (être) fermée, les lecteurs seraient prévenus. La méthode (…) nous datons les lettres a été améliorée, et nous en sommes au point (…) presque chaque lettre trouve sa décennie.";

export const TEXTE_A9 =
  "Quatre messages, quatre registres. Bastien à Inès : « Je t’ai mis de côté un livre que je crois qui va te plaire. » Mathilde au comité : « Voici une hypothèse dont chacun admet qu’elle est fragile. » Karim à Mathilde : « C’est de cela dont je voulais parler jeudi. » Inès à Bastien : « Merci pour le livre qui, je crois, va me plaire. »";

export const TEXTE_A10 =
  "Brouillon de Noé pour le site des Archives. « La salle qui est au premier étage, qui a été rénovée l’hiver dernier, accueille les lecteurs qui ont réservé. Le registre qui contient les délibérations qui datent d’avant 1900 est conservé dans une armoire qui ferme à clé. »";
