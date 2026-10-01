// c1.05.l1 « L’ellipse et la reprise »: the authored corpus, the imports, the
// texts and the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar
// shape), with the C1 rules of C1-BUILD-LOG.md (« What is different at C1 »,
// wave 2 brief) and the c1.05 section of C1-RESEARCH-PLAN.md. Structural
// model: b2.11 « Les pronoms d’insistance » (`../b2/pronoms-insistance-*`).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 5 of the C1 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   KEEPING THE THREAD: WHAT A TEXT HAS ALREADY SAID IS PICKED UP BY A SMALL
//   WORD, BY ANOTHER NOUN, OR LEFT UNSAID, AND THE READER ALWAYS KNOWS WHAT.
//
//     le neutre (1)     le picks up an adjective or a bare noun and
//                       never agrees: « il l’est », « fatiguée, je le suis »,
//                       « ils ne le sont plus »; the English truncation « she
//                       isn’t » as the learner trap (act 2)
//     le neutre (2)     le picks up a whole clause: « comme je l’ai dit »,
//                       « je le sais », « si tu le veux », « plus cher qu’on
//                       ne le pense »; « comme prévu » without le (act 3)
//     faire             the pro-verb: « je le ferai », « en faire autant »,
//                       « faites de même », « plus que je ne le fais »; être
//                       and avoir never go through faire (act 4)
//     l’ellipse du verbe gapping: « Pierre lit Proust ; Marie, Zola »; the
//                       comma that marks the gap; non, aussi, non plus, pas,
//                       si standing for a predicate (act 5)
//     l’ellipse de la    sluicing: « je ne sais pas qui », « reste à savoir
//     question          laquelle », « si oui, lesquels », quoi for a thing
//                       (act 6)
//     celui de          the demonstrative as a reprise across distance in
//                       written prose (« la question des loyers, celle du
//                       chauffage »), the announcing apposition (« un
//                       avantage, celui de la simplicité »), celui +
//                       participle with its register note (act 7)
//     l’hyperonyme      reprise by a broader noun (l’arbre, le véhicule) and
//                       by a noun that sums up a clause (cette décision, ce
//                       refus, ce silence), with ce / cette (act 8)
//     ledit             ledit / ladite / lesdits, dudit, audit; susdit,
//                       précité; le cas échéant, dans le cas contraire, si
//                       oui, si tel est le cas as ellipsis of a condition;
//                       administrative in writing, comic in talk (act 9)
//     l’ambiguïté       repairing an anaphor two nouns could answer: the
//                       noun again, cette dernière, a new construction, son
//                       propre, direct speech (act 10)
//     le fil            reading a chain of reprises (CE format « à quoi
//                       renvoie… »), and writing one: when to repeat the noun
//                       anyway, when variation loses the reader (act 11)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 11 in B2   act 3, detachment and its resuming pronoun (rows
//                       pronoms-essentiels .1834 .1845 reused); act 8, il
//                       continues and lui switches (rows .1918 .1919)
//     lesson 10 in B2   nominalisation (reframe quoted; row langue-soignee
//                       .1410): the noun that sums up in act 8 is built with
//                       its suffixes, never re-taught
//     lesson 37 in B1   act 8, ce dernier, celui-ci (the latter), le premier
//                       / le second, the noun that picks up a name (rows
//                       strategies-de-comprehension .1146 .1148 .1149 .1150
//                       .1153 .1154 reused)
//     lesson 33 in A2   the demonstrative pronouns and celui de, celui qui,
//                       celui que as FORMS (reframe quoted with its French
//                       rendering; rows a2 pronoms-essentiels .353 and b1
//                       pronoms-essentiels .037 reused)
//   ALSO NAMED, ONE LINE EACH (published): lesson 30 in B2 (the narrative
//   « ellipse », a time-skip: row litterature .1460, act 5 names the
//   difference); lesson 27 in B2 (« le cas échéant » as a clause formula:
//   row droit .1092, act 9 goes past it to the ellipsis it performs); lesson
//   16 in B2 (« bien que fatigué », recalled in act 11 only).
//   NO C1 LESSON IS CITED: c1.20 teaches reading method, not reference, so
//   the CE round does not route to it (open question 3).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, Postgres-checked 2026-10-01 (read-only probes inside
//      BEGIN TRANSACTION READ ONLY … COMMIT, no plain SET)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `langue-soignee` (fondations) is widened to a2-c1 (wave 2 setup)
//     and carries the sub-theme « l’ellipse et la reprise ». Postgres holds
//     b1 344 rows (.1000-.1392) and b2 544 rows (.1400-.1999), and ZERO c1
//     rows (read 2026-10-01).
//
//  2. ID BLOCK: this lesson owns `fr.c1.langue-soignee.2000` to `.2199` AND
//     NOTHING ELSE. The block was probed free at EVERY level of the theme
//     (0 rows numbered 2000-2199). Authored: `.2000`-`.2192`, in twelve act
//     blocks with gaps between them (see the act banners).
//
//  3. REUSED ROWS. Every reused row in §F is published in Postgres AND in
//     the local seed (`seedPlusPacks()`, read 2026-10-01), so `src()` reads
//     it from the seed and no Postgres-only copy is carried. Rows considered
//     and NOT reused: `fr.b2.projets-et-futur.041` « le cas échéant »
//     (phrase, Postgres only; act 9 reuses b2.27’s sentence .1092 instead and
//     never authors the headword); `fr.b2.litterature.065` « l’ellipse
//     narrative » (Postgres only); `fr.c1.discours-dexamen.119` (Postgres
//     only, sentence + review); `fr.b1.opinions-et-avis.023` « qu’ils ne le
//     font » (dictation only, not deck-able).
//
//  4. TWIN CHECK. Every authored `fr` was folded (accents, case, punctuation,
//     apostrophes and spaces stripped) and compared with every Postgres row
//     and every `*-corpus.ts` under data/, data/b1, data/b2 and data/c1 on
//     2026-10-01: result in the closing report. No authored row is a phrase
//     that repeats a published headword (« le cas échéant » is reused, not
//     authored; « ledit », « susdit », « précité » have no published row).
//
//  5. RESPELLINGS. House style: stressed syllable in caps, ü, nasal closed
//     with ⁿ, groups separated by « | ». No U+203F tie anywhere, IPA
//     included. Spelled for the nasal checker rather than the ear (the
//     consonant is really pronounced): Madame DAMM, personne SONN, voisine
//     ZEENN, piscine SEENN, mienne MYENN, automne TONN, somme SOMM, commune
//     MÜNN, électricienne SYENN, femme FAMM, téléphone FONN, synonymes
//     NEEMM, Belkacem SEMM, une LÜNN.
//
//  6. APOSTROPHES: every authored French string uses the typographic ’, so
//     the scenario never mixes ’ and ' (the app check). Reused rows keep
//     their stored spelling.
//
//  7. FACT CHECK AND QUOTATIONS. Every person, company, cooperative and
//     association is INVENTED; real places appear only as places.
//       PEOPLE: Simon Gagné (secretary), Mme Roy, Mme Lavoie, M. Tremblay,
//         Mme Duval, M. Hébert, Nadia Belkacem, Odile Ferland, Inès Morel
//         (a pianist, invented), Julie, Marc, Léo, Inès, Marie, Paul, Hugo,
//         Léa, Nina, Claire, Sophie, Nadia, Camille (the model writer).
//       ORGANISATIONS: la coopérative d’habitation Les Tilleuls; les
//         entreprises Morin, Bâtisol and Élagex; le café-réparation de la
//         rue Wellington (an invented repair café on a real street name).
//       PLACES, AS PLACES ONLY: Sherbrooke, Lyon, Laval, Gatineau.
//       LITERARY NAMES: « Pierre lit Proust ; Marie, Zola » cites two
//         authors as reading matter only (the textbook example the research
//         plan names); no line of either is quoted.
//       FIGURES: all invented and stated inside the example (« quatre pour
//         cent », « huit cents dollars », « vingt-deux membres »).
//       NORM CLAIMS a reviewer should check once:
//         (a) neutral le is invariable (« fatiguée, je le suis », « elles le
//             sont »): Grevisse, Le Bon Usage, the pronoun « le » neutre
//             attribut; OQLF BDL « le, pronom neutre ».
//         (b) after a comparative (« plus … qu’on ne le pense ») the
//             neutral le is optional in careful style: Grevisse.
//         (c) faire cannot stand for être or avoir (« plus patiente que je
//             ne le suis », never « que je ne le fais »).
//         (d) gapping marked by a comma (« Marie, Zola »), the comma being
//             usual, not compulsory, in short sequences.
//         (e) celui + participle (« celui proposé par l’entreprise »): very
//             common in the press and administration, criticised by some
//             usage guides; the lesson labels it and offers « celui que
//             propose » for very careful writing. Not marked as an error.
//         (f) ledit / ladite / lesdits written in one word, contracted dudit,
//             audit, auxdits, desdits; administrative register, ironic in
//             conversation (Le Robert; OQLF BDL « ledit »).
//         (g) « le cas échéant » = « si le cas se présente », not « en tout
//             cas » nor « finalement » (Le Robert; Académie).
//       QUOTATIONS: none. Every text is « texte original écrit pour la
//         leçon »; no literary or press extract is quoted.
//
//  8. LOW-HEAT TOPICS ONLY: a housing cooperative’s meetings (a courtyard
//     garden, diseased maples, a bike room, the budget, parking), a repair
//     café, an office move, a choir, a swimming pool closed for the summer.
//     No living politician, no party, no real institution’s decision.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
import { unitRef } from '../_unit-ref.ts';
const seed = seedPlusPacks();

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.05',
  seq: 5,
  title: 'Ellipsis and Reference',
  sub: 'L’ellipse et la reprise',
  canDo: 'Can follow and build chains of reference across a long text: pick up an adjective or a whole clause with the neutral le, stand in for a verb with faire, leave out a repeated verb or the rest of a question, take up a noun with celui de or celle que, with a broader noun or with a noun that sums up, use ledit and le cas échéant in administrative writing, and repair a pronoun two nouns could answer, in reading (CE « à quoi renvoie… ») as in writing',
  prereqUnitIds: ['b2.11', 'b2.10', 'b1.37'],
} as const;

export const LESSON_ID = 'c1.05.l1';
export const THEME = 'langue-soignee';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief (wave 2 setup, 2026-10-01). */
export const ID_RANGES = [[2000, 2199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A2, B1 and B2 units are in the seed; their trail position is read from
 *  `seq` (a2.36 is lesson 35 in A2, so never from the id). A2 labels come
 *  back in English through `unitRef`, as A2 is taught in English. Never a
 *  raw id on screen.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  if (band === 'b1' || band === 'b2' || band === 'c1') {
    const n = SEQ.get(unitId);
    if (!n) throw new Error(`c1.05: ${unitId} is not in the seed`);
    return `la leçon ${n} du ${band.toUpperCase()}`;
  }
  if (band === 'a2' || band === 'a1') {
    const n = SEQ.get(unitId);
    if (!n) throw new Error(`c1.05: ${unitId} is not in the seed`);
    return `la leçon ${n} de l’${band.toUpperCase()}`;
  }
  return unitRef(unitId);
}

export const INSISTANCE_UNIT = 'b2.11';
export const NOMINAL_UNIT = 'b2.10';
export const LECTURE_UNIT = 'b1.37';
export const DEMONSTRATIFS_UNIT = 'a2.33';
export const LITTERAIRE_UNIT = 'b2.30';
export const JURIDIQUE_UNIT = 'b2.27';
export const CONCESSION_UNIT = 'b2.16';

export const INSISTANCE_REF = refFr(INSISTANCE_UNIT);       // la leçon 11 du B2
export const NOMINAL_REF = refFr(NOMINAL_UNIT);             // la leçon 10 du B2
export const LECTURE_REF = refFr(LECTURE_UNIT);             // la leçon 37 du B1
export const DEMONSTRATIFS_REF = refFr(DEMONSTRATIFS_UNIT); // la leçon 33 de l’A2
export const LITTERAIRE_REF = refFr(LITTERAIRE_UNIT);       // la leçon 30 du B2
export const JURIDIQUE_REF = refFr(JURIDIQUE_UNIT);         // la leçon 27 du B2
export const CONCESSION_REF = refFr(CONCESSION_UNIT);       // la leçon 16 du B2

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 *
 *  a2.33’s reframe is English (A2 is taught in English), so every screen that
 *  shows it follows it with the French rendering below.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B211_REFRAME, REFRAME_EN as B211_REFRAME_EN } from '../b2/pronoms-insistance-corpus.ts';
export { REFRAME as B210_REFRAME, REFRAME_EN as B210_REFRAME_EN } from '../b2/nominalisation-corpus.ts';
export { REFRAME as B137_REFRAME, REFRAME_EN as B137_REFRAME_EN } from '../b1/strategies-lecture-corpus.ts';
export { REFRAME as B227_REFRAME, REFRAME_EN as B227_REFRAME_EN } from '../b2/langage-juridique-corpus.ts';
export { REFRAME as A233_REFRAME } from '../demonstratifs-corpus.ts';
export const A233_REFRAME_FR = 'Un nom après : il montre. Pas de nom : il remplace.';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE FIL. A text is sewn with one thread. Each reprise is a stitch that
 *  comes back to the surface on the same thread (le, faire, celui de,
 *  l’arbre, ledit); an ellipsis is where the thread runs behind the cloth,
 *  unseen and unbroken (Marie, Zola ; je ne sais pas qui); an ambiguous
 *  pronoun is two threads crossing, and the reader no longer knows which to
 *  follow (act 10). The reframe holds both halves: pick up OR leave out, and
 *  in either case the reader must still hold the thread.
 *
 *  It is NOT « never repeat a word »: acts 10 and 11 repeat the noun on
 *  purpose, as a contract does, when a pronoun would cross two threads.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Ce qui est déjà dit se reprend ou se tait, pourvu qu’on sache quoi.';
export const REFRAME_EN = 'What has already been said is picked up or left unsaid, as long as the reader knows what.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Ne répète jamais un mot.',
    why: 'False where the lesson has to hold: act 10 repairs an ambiguous elle by repeating the noun (« quand sa sœur est rentrée »), and act 11 shows a contract repeating « le locataire » on purpose. A learner told never to repeat produces the synonym chains act 11 corrects (le chien, l’animal, le quadrupède).',
  },
  {
    text: 'Le pronom remplace le nom.',
    why: 'The A2 definition, and wrong for most of this lesson: the neutral le replaces an adjective or a whole clause (acts 2 and 3), faire replaces a verb (act 4), and an ellipsis replaces nothing at all (acts 5 and 6). It also hides the trap of act 2: « fatiguée, je la suis » comes from thinking le stands for a person.',
  },
  {
    text: 'L’ellipse, c’est ce qu’on enlève.',
    why: 'Confuses the grammatical ellipsis with lesson 30 in B2’s narrative ellipse (a time-skip, act 5 names the difference), and says nothing about the half of the lesson where a word is ADDED to pick something up (le, faire, celui, ledit).',
  },
  {
    text: 'Un pronom renvoie au dernier nom cité.',
    why: 'That is ce dernier’s rule (lesson 37 in B1), and it is false for il and elle, which follow the subject (« Marc a croisé Paul ; il ne l’a pas reconnu »). Taught as general, it produces the misreadings act 10 and the CE round are built against.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (Postgres and seed rows, read 2026-10-01,
 *  French in the trailing comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const B2PE = (n: number) => `fr.b2.pronoms-essentiels.${n}`;
const B1SC = (n: number) => `fr.b1.strategies-de-comprehension.${n}`;

export const IMPORTED = {
  act1: [
    B2PE(1834),                                 // Ce livre, je l'ai lu en une nuit.  (lesson 11 in B2, act 3)
    B2PE(1845),                                 // Le mot détaché est repris par un pronom dans la phrase.  (rule card, flashcard + review)
    'fr.b2.langue-soignee.1410',                // Le verbe raconte, le nom condense : choisis selon qui te lit ou t’écoute.  (lesson 10 in B2, reframe card)
    B1SC(1146),                                 // Ce dernier a salué un outil moderne pour le quartier.  (lesson 37 in B1, act 8)
    B1SC(1148),                                 // Paul et Marc sont arrivés. Le premier était fatigué, le second avait faim.
    B1SC(1154),                                 // celui-ci, celle-ci  (phrase)
    'fr.a2.pronoms-essentiels.353',             // Je veux celui de Marie.  (lesson 33 in A2)
    'fr.b1.pronoms-essentiels.037',             // Ce sac est joli, mais celui de Marie est plus grand.  (imported by lesson 33 in A2; no voiceflash)
  ],
  act2: [
    'fr.b2.strategies-de-comprehension.1461',   // Il suppose que ce qui était vrai il y a vingt ans l’est encore.  (lesson 24 in B2)
    'fr.c1.strategies-de-comprehension.2068',   // Selon l’éditorial, la décision est bonne, mais la méthode ne l’est pas.  (lesson 24 in C1)
    'fr.b1.projets-et-futur.1365',              // Si elle ne l’est pas, nous chercherons une autre solution.
  ],
  act3: [
    'fr.b2.negation-et-restriction.1573',       // C'est plus cher qu'on ne le pense.
    'fr.b2.connecteurs-logiques.2473',          // Le trajet a été plus long que je ne le pensais.
    'fr.c1.discours-dexamen.1091',              // Cet avantage se double d'un bénéfice environnemental, encore qu'il soit moins net qu'on ne le dit.  (lesson 1 in C1)
  ],
  act4: [] as string[],
  act5: [
    'fr.b2.litterature.1460',                   // Le texte saute trois ans : c’est une ellipse.  (lesson 30 in B2: the OTHER ellipse)
    'fr.c1.strategies-de-comprehension.2136',   // L’un parle d’engagement, l’autre de victoire.  (lesson 24 in C1)
    'fr.b1.negation-et-restriction.1163',       // Moi, si.
  ],
  act6: [] as string[],
  act7: [
    'fr.b2.universite.1157',                    // Cette souplesse comporte néanmoins un risque, celui de l'isolement.
    'fr.b2.litterature.1421',                   // Ici, le je est celui d’une ancienne élève, pas celui de l’auteure.  (lesson 30 in B2)
    'fr.c1.strategies-de-comprehension.1864',   // Chacun gagne sur son terrain et ne met jamais le pied sur celui de l’autre.  (lesson 20 in C1)
  ],
  act8: [
    B1SC(1149),                                 // Aïssatou Ndiaye vend du poisson depuis vingt ans. La commerçante connaît tout le monde.  (lesson 37 in B1)
    B1SC(1150),                                 // Le projet a coûté deux milliards. Cette somme a surpris les habitants.
  ],
  act9: [
    'fr.b2.droit.1092',                         // Le cas échéant, les frais de réparation seront à la charge du Client.  (lesson 27 in B2)
    'fr.b2.droit.1126',                         // La présente attestation est établie à la demande de l'intéressé.  (lesson 27 in B2)
    'fr.b2.universite.1107',                    // La ministre a reçu la rectrice ; cette dernière a promis une réforme.
  ],
  act10: [
    B2PE(1918),                                 // Marc a croisé Paul au marché ; lui ne l'a pas reconnu.  (lesson 11 in B2, act 8)
    B2PE(1919),                                 // Marc a croisé Paul au marché ; il ne l'a pas reconnu.
    B1SC(1153),                                 // ce dernier, cette dernière  (phrase, lesson 37 in B1)
  ],
  act11: [] as string[],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. None here:
 *  every reused row carries flashcard. */
export const NOT_DECK_ABLE: readonly string[] = [];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  B2PE(1845),                                   // flashcard, review (rule card)
  'fr.b2.langue-soignee.1410',                  // checked at runtime too: rule card
  'fr.b1.pronoms-essentiels.037',               // flashcard, sentence, review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `phrase` a short form; `gap` a gapfill card whose
 *  front gaps the reprise and names the cue; `rule` a grammar card. Every
 *  row carries fr, en, ipa and respell. Corpus respellings carry no
 *  brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const SOU: Register = 'soutenu';
const GP = ['ellipse-et-reprise'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({ ...sent(n, fr, en, ipa, respell, tags, drills, extra), kind: 'phrase' });

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes, ...extra });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · DIRE UNE FOIS (.2000-.2011) ──────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(2000, 'Mme Roy est favorable au jardin ; Mme Lavoie ne l’est pas.', 'Mrs Roy is in favour of the garden; Mrs Lavoie is not.',
    '/ma.dam ʁwa ɛ fa.vɔ.ʁabl o ʒaʁ.dɛ̃ ma.dam la.vwa nə lɛ pa/', 'ma-DAMM RWA | eh fa-vo-RABL oh zhar-DEHⁿ | ma-DAMM la-VWA | nuh leh PA', ['scene', 'neutre'], FCVDR),
  sent(2001, 'Mme Roy est favorable au jardin ; Mme Lavoie, non.', 'Mrs Roy is in favour of the garden; Mrs Lavoie is not.',
    '/ma.dam ʁwa ɛ fa.vɔ.ʁabl o ʒaʁ.dɛ̃ ma.dam la.vwa nɔ̃/', 'ma-DAMM RWA | eh fa-vo-RABL oh zhar-DEHⁿ | ma-DAMM la-VWA | NOHⁿ', ['scene', 'ellipse']),
  sent(2002, 'Le comité avait promis de repeindre le hall, et il l’a fait.', 'The committee had promised to repaint the hall, and it has done so.',
    '/lə kɔ.mi.te a.vɛ pʁɔ.mi də ʁə.pɛ̃dʁ lə ol e i.la fɛ/', 'luh ko-mee-TAY | a-veh pro-MEE | duh ruh-PEHⁿDR luh OL | ay ee-la FEH', ['lecture', 'faire']),
  sent(2003, 'Les uns voulaient un potager, les autres une aire de jeux.', 'Some wanted a vegetable garden, others a play area.',
    '/le.zœ̃ vu.lɛ œ̃ pɔ.ta.ʒe le.zotʁ y.nɛʁ də ʒø/', 'lay-ZUHⁿ | voo-leh uhⁿ po-ta-ZHAY | lay-ZOHTR | ü-nehr duh ZHEU', ['lecture', 'ellipse'], FCVDR),
  sent(2004, 'Le budget de cette année est plus serré que celui de l’an dernier.', 'This year’s budget is tighter than last year’s.',
    '/lə byd.ʒɛ də sɛ.ta.ne ɛ ply se.ʁe kə sə.lɥi də lɑ̃ dɛʁ.nje/', 'luh büd-ZHEH | duh seh-ta-NAY | eh plü say-RAY | kuh suh-lwee duh lahⁿ dehr-NYAY', ['lecture', 'celui']),
  sent(2005, 'Quelqu’un a laissé un vélo dans le local, mais personne ne sait qui.', 'Someone left a bike in the storeroom, but nobody knows who.',
    '/kɛl.kœ̃ a le.se œ̃ ve.lo dɑ̃ lə lɔ.kal mɛ pɛʁ.sɔn nə sɛ ki/', 'kel-KUHⁿ a leh-SAY | uhⁿ vay-LOH | dahⁿ luh lo-KAL | meh pehr-SONN | nuh seh KEE', ['lecture', 'question']),
  sent(2006, 'Si personne ne le réclame avant le 30 juin, ledit vélo sera donné à une association.', 'If nobody claims it before 30 June, the said bike will be given to a charity.',
    '/si pɛʁ.sɔn nə lə ʁe.klam a.vɑ̃ lə tʁɑ̃t ʒɥɛ̃ lə.di ve.lo sə.ʁa dɔ.ne a y.na.sɔ.sja.sjɔ̃/', 'see pehr-SONN | nuh luh ray-KLAMM | a-vahⁿ luh trahⁿt ZHWEHⁿ | luh-dee vay-LOH | suh-ra do-NAY | a ü-na-so-sya-SYOHⁿ', ['lecture', 'ledit'], FCVR, { register: SOU }),
  sent(2007, 'Les trois érables de la cour sont malades ; ces arbres devront être abattus.', 'The three maples in the courtyard are diseased; these trees will have to be felled.',
    '/le tʁwa.ze.ʁabl də la kuʁ sɔ̃ ma.lad se.zaʁbʁ də.vʁɔ̃ ɛtʁ a.ba.ty/', 'lay trwa-zay-RABL | duh la KOOR | sohⁿ ma-LAD | say-ZARBR | duh-vrohⁿ etr a-ba-TÜ', ['lecture', 'hyperonyme']),
  rule(2008, REFRAME, REFRAME_EN,
    '/sə ki ɛ de.ʒa di sə ʁə.pʁɑ̃ u sə tɛ puʁ.vy kɔ̃ saʃ kwa/', 'suh kee eh day-zha DEE | suh ruh-PRAHⁿ | oo suh TEH | poor-vü kohⁿ sash KWA',
    'Que fait un texte soigné de ce qu’il a déjà dit ?',
    'Il le reprend par un petit mot ou un autre nom (le, faire, celui de, ledit, l’arbre), ou il le tait (Marie, Zola ; je ne sais pas qui), sans jamais laisser le lecteur se demander quoi.',
    ['reframe']),
  sent(2009, 'Comme je l’ai écrit dans le dernier compte rendu, la toiture doit être refaite.', 'As I wrote in the last minutes, the roof has to be redone.',
    '/kɔm ʒə le e.kʁi dɑ̃ lə dɛʁ.nje kɔ̃t ʁɑ̃.dy la twa.tyʁ dwa.tɛtʁ ʁə.fɛt/', 'kom zhuh lay ay-KREE | dahⁿ luh dehr-nyay kohⁿt rahⁿ-DÜ | la twa-TÜR | dwa-tetr ruh-FET', ['lecture', 'neutre']),
  sent(2010, 'La réunion a duré plus longtemps qu’on ne l’avait prévu.', 'The meeting lasted longer than had been planned.',
    '/la ʁe.y.njɔ̃ a dy.ʁe ply lɔ̃.tɑ̃ kɔ̃ nə la.vɛ pʁe.vy/', 'la ray-ü-NYOHⁿ | a dü-RAY | plü lohⁿ-TAHⁿ | kohⁿ nuh la-veh pray-VÜ', ['lecture', 'neutre']),
  sent(2011, 'Mme Roy a écrit à Mme Lavoie ; cette dernière propose d’attendre l’automne.', 'Mrs Roy wrote to Mrs Lavoie; the latter suggests waiting for the autumn.',
    '/ma.dam ʁwa a e.kʁi a ma.dam la.vwa sɛt dɛʁ.njɛʁ pʁɔ.poz da.tɑ̃dʁ lo.tɔn/', 'ma-DAMM RWA | a ay-KREE | a ma-DAMM la-VWA | set dehr-NYEHR | pro-POHZ | da-tahⁿdr loh-TONN', ['usage', 'ambiguite']),
];

/* ── ACT 2 · LE NEUTRE : IL L’EST (.2013-.2029) ───────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(2013, 'Fatiguée, je le suis, mais pas découragée.', 'Tired, yes, I am, but not discouraged.',
    '/fa.ti.ɡe ʒə lə sɥi mɛ pa de.ku.ʁa.ʒe/', 'fa-tee-GAY | zhuh luh SWEE | meh pa day-koo-ra-ZHAY', ['neutre', 'invariable'], FCVDR),
  sent(2014, 'Les dossiers sont-ils complets ? Ils le sont presque tous.', 'Are the files complete? Almost all of them are.',
    '/le do.sje sɔ̃.til kɔ̃.plɛ il lə sɔ̃ pʁɛsk tus/', 'lay doh-SYAY | sohⁿ-teel kohⁿ-PLEH | eel luh SOHⁿ | presk TOOS', ['neutre', 'pluriel']),
  sent(2015, 'Elle semble sûre d’elle, mais elle ne l’est pas.', 'She seems sure of herself, but she is not.',
    '/ɛl sɑ̃bl syʁ dɛl mɛ ɛl nə lɛ pa/', 'el sahⁿbl sür DEL | meh el nuh leh PA', ['neutre', 'negation'], FCVDR),
  sent(2016, 'Il est discret, et il le restera.', 'He is discreet, and he will stay that way.',
    '/i.lɛ dis.kʁɛ e il lə ʁɛs.tə.ʁa/', 'ee-leh dees-KREH | ay eel luh res-tuh-RA', ['neutre', 'rester']),
  sent(2017, 'Médecin, elle l’est depuis vingt ans.', 'A doctor: she has been one for twenty years.',
    '/med.sɛ̃ ɛl lɛ də.pɥi vɛ̃.tɑ̃/', 'mayd-SEHⁿ | el LEH | duh-pwee vehⁿ-TAHⁿ', ['neutre', 'nom-attribut']),
  sent(2018, 'Les loyers étaient raisonnables ; ils ne le sont plus.', 'The rents were reasonable; they no longer are.',
    '/le lwa.je e.tɛ ʁɛ.zɔ.nabl il nə lə sɔ̃ ply/', 'lay lwa-YAY | ay-teh reh-zo-NABL | eel nuh luh sohⁿ PLÜ', ['neutre', 'pluriel']),
  sent(2019, 'Nous étions inquiets, et nous le sommes encore.', 'We were worried, and we still are.',
    '/nu.ze.tjɔ̃.zɛ̃.kjɛ e nu lə sɔm.zɑ̃.kɔʁ/', 'noo-zay-tyohⁿ-zehⁿ-KYEH | ay noo luh som-zahⁿ-KOR', ['neutre', 'pluriel']),
  sent(2020, 'Si la salle est libre jeudi, elle le sera aussi vendredi.', 'If the room is free on Thursday, it will be on Friday too.',
    '/si la sal ɛ libʁ ʒø.di ɛl lə sə.ʁa o.si vɑ̃.dʁə.di/', 'see la SAL | eh leebr zheu-DEE | el luh suh-RA | oh-see vahⁿ-druh-DEE', ['neutre', 'futur']),
  sent(2021, 'Elle a été très patiente ; lui ne l’a jamais été.', 'She has been very patient; he never has.',
    '/ɛ.la e.te tʁɛ pa.sjɑ̃t lɥi nə la ʒa.mɛ e.te/', 'eh-la ay-TAY | treh pa-SYAHⁿT | lwee nuh la zha-meh ay-TAY', ['neutre', 'compose'], FCVDR),
  sent(2022, 'Être ponctuel n’est pas difficile ; encore faut-il vouloir l’être.', 'Being punctual is not hard; you still have to want to be.',
    '/ɛtʁ pɔ̃k.tɥɛl nɛ pa di.fi.sil ɑ̃.kɔʁ fo.til vu.lwaʁ lɛtʁ/', 'etr pohⁿk-TWEL | neh pa dee-fee-SEEL | ahⁿ-kor foh-TEEL | voo-lwar LETR', ['neutre', 'infinitif'], FCVR, { register: SOU }),
  rule(2023, 'Le reprend un adjectif ou un nom sans article, et il ne s’accorde jamais.', 'Le picks up an adjective or a bare noun, and it never agrees.',
    '/lə ʁə.pʁɑ̃ œ̃.na.dʒɛk.tif u œ̃ nɔ̃ a.tʁi.by e il nə sa.kɔʁd ʒa.mɛ/', 'luh ruh-PRAHⁿ | uhⁿ-nad-zhek-TEEF | oo uhⁿ nohⁿ a-tree-BÜ | ay eel nuh sa-kord zha-MEH',
    'Fatiguée, je la suis ou je le suis ?',
    'Je le suis. Ce le est neutre : il reprend l’idée d’être fatiguée, pas une personne. Il reste le au féminin comme au pluriel : elles le sont. Un nom avec article (la directrice) se reprend plutôt par c’est elle.',
    ['neutre', 'invariable']),
  gap(2024, 'Prêtes, elles le sont depuis lundi.', 'Ready? They have been since Monday.',
    '/pʁɛt ɛl lə sɔ̃ də.pɥi lœ̃.di/', 'PRET | el luh SOHⁿ | duh-pwee luhⁿ-DEE',
    'Prêtes, elles ___ sont depuis lundi. (reprends prêtes)',
    'Le neutre ne prend ni e ni s : le, même pour elles. EN: neutral le never agrees.',
    ['neutre', 'invariable'], FCVDR),
  gap(2025, 'Les comptes sont-ils à jour ? Ils le seront demain.', 'Are the accounts up to date? They will be tomorrow.',
    '/le kɔ̃t sɔ̃.ti.la ʒuʁ il lə sə.ʁɔ̃ də.mɛ̃/', 'lay KOHⁿT | sohⁿ-tee-la ZHOOR | eel luh suh-ROHⁿ | duh-MEHⁿ',
    'Les comptes sont-ils à jour ? Ils ___ demain. (être, au futur, avec la reprise)',
    'Le avant le verbe : ils le seront. EN: le comes before the verb.',
    ['neutre', 'futur']),
  sent(2026, 'Tu es déçue ? Je le serais à ta place.', 'You are disappointed? I would be, in your shoes.',
    '/ty ɛ de.sy ʒə lə sə.ʁɛ a ta plas/', 'tü eh day-SÜ | zhuh luh suh-REH | a ta PLASS', ['neutre', 'conditionnel']),
  sent(2027, 'Votre demande est recevable ; la mienne ne l’était pas.', 'Your request is admissible; mine was not.',
    '/vɔtʁ də.mɑ̃d ɛ ʁə.sə.vabl la mjɛn nə le.tɛ pa/', 'votr duh-MAHⁿD | eh ruh-suh-VABL | la MYENN | nuh lay-teh PA', ['neutre', 'imparfait'], FCVR, { register: SOU }),
  sent(2028, 'Mécontents, les locataires le sont, et ils le disent.', 'The tenants are unhappy, and they say so.',
    '/me.kɔ̃.tɑ̃ le lɔ.ka.tɛʁ lə sɔ̃ e il lə diz/', 'may-kohⁿ-TAHⁿ | lay lo-ka-TEHR | luh SOHⁿ | ay eel luh DEEZ', ['neutre', 'deux-le']),
  sent(2029, 'Le local est-il fermé ? Il devrait l’être.', 'Is the storeroom locked? It should be.',
    '/lə lɔ.kal ɛ.til fɛʁ.me il də.vʁɛ lɛtʁ/', 'luh lo-KAL | eh-teel fehr-MAY | eel duh-vreh LETR', ['neutre', 'infinitif']),
];

/* ── ACT 3 · LE NEUTRE : COMME JE L’AI DIT (.2031-.2047) ──────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(2031, 'Le chantier prendra du retard, je le sais.', 'The works will be delayed, I know.',
    '/lə ʃɑ̃.tje pʁɑ̃.dʁa dy ʁə.taʁ ʒə lə sɛ/', 'luh shahⁿ-TYAY | prahⁿ-dra dü ruh-TAR | zhuh luh SEH', ['proposition', 'savoir']),
  sent(2032, 'Comme je l’ai dit à la dernière réunion, le budget est bouclé.', 'As I said at the last meeting, the budget is finalised.',
    '/kɔm ʒə le di a la dɛʁ.njɛʁ ʁe.y.njɔ̃ lə byd.ʒɛ ɛ bu.kle/', 'kom zhuh lay DEE | a la dehr-nyehr ray-ü-NYOHⁿ | luh büd-ZHEH | eh boo-KLAY', ['proposition', 'incise'], FCVDR),
  sent(2033, 'Comme vous le savez, l’ascenseur sera fermé en juillet.', 'As you know, the lift will be closed in July.',
    '/kɔm vu lə sa.ve la.sɑ̃.sœʁ sə.ʁa fɛʁ.me ɑ̃ ʒɥi.jɛ/', 'kom voo luh sa-VAY | la-sahⁿ-SUHR | suh-ra fehr-MAY | ahⁿ zhwee-YEH', ['proposition', 'incise'], FCVDR),
  sent(2034, 'Je te l’avais bien dit.', 'I told you so.',
    '/ʒə tə la.vɛ bjɛ̃ di/', 'zhuh tuh la-veh byehⁿ DEE', ['proposition', 'dire']),
  sent(2035, 'Le projet sera accepté, du moins je l’espère.', 'The project will be accepted, at least I hope so.',
    '/lə pʁɔ.ʒɛ sə.ʁa ak.sɛp.te dy mwɛ̃ ʒə lɛs.pɛʁ/', 'luh pro-ZHEH | suh-ra ak-sep-TAY | dü MWEHⁿ | zhuh les-PEHR', ['proposition', 'esperer']),
  sent(2036, 'Passe samedi, si tu le veux.', 'Come by on Saturday, if you like.',
    '/pas sam.di si ty lə vø/', 'pass sam-DEE | see tü luh VEU', ['proposition', 'vouloir']),
  sent(2037, 'La rénovation coûtera moins cher qu’on ne le craignait.', 'The renovation will cost less than people feared.',
    '/la ʁe.nɔ.va.sjɔ̃ ku.tə.ʁa mwɛ̃ ʃɛʁ kɔ̃ nə lə kʁɛ.ɲɛ/', 'la ray-no-va-SYOHⁿ | koo-tuh-ra mwehⁿ SHEHR | kohⁿ nuh luh kreh-NYEH', ['proposition', 'comparaison'], FCVDR),
  sent(2038, 'Les travaux ont commencé comme prévu.', 'The works began as planned.',
    '/le tʁa.vo ɔ̃ kɔ.mɑ̃.se kɔm pʁe.vy/', 'lay tra-VOH | ohⁿ ko-mahⁿ-SAY | kom pray-VÜ', ['proposition', 'sans-le']),
  sent(2039, 'Les travaux ont commencé comme on l’avait prévu.', 'The works began as we had planned.',
    '/le tʁa.vo ɔ̃ kɔ.mɑ̃.se kɔ.mɔ̃ la.vɛ pʁe.vy/', 'lay tra-VOH | ohⁿ ko-mahⁿ-SAY | ko-mohⁿ la-veh pray-VÜ', ['proposition', 'incise']),
  sent(2040, 'Je m’en occupe, si vous le permettez.', 'I will take care of it, if you will allow me.',
    '/ʒə mɑ̃.nɔ.kyp si vu lə pɛʁ.me.te/', 'zhuh mahⁿ-no-KÜP | see voo luh pehr-may-TAY', ['proposition', 'permettre'], FCVR, { register: SOU }),
  sent(2041, 'Elle refusera, tout le monde le sent.', 'She will refuse, everyone can feel it.',
    '/ɛl ʁə.fy.zə.ʁa tu lə mɔ̃d lə sɑ̃/', 'el ruh-fü-zuh-RA | too luh MOHⁿD | luh SAHⁿ', ['proposition', 'sentir']),
  rule(2042, 'Le reprend aussi une idée entière : comme je l’ai dit, je le sais.', 'Le also picks up a whole idea: as I said, I know.',
    '/lə ʁə.pʁɑ̃ o.si y.ni.de ɑ̃.tjɛʁ kɔm ʒə le di ʒə lə sɛ/', 'luh ruh-PRAHⁿ | oh-see ü-nee-DAY ahⁿ-TYEHR | kom zhuh lay DEE | zhuh luh SEH',
    'Dans « comme je l’ai dit », que reprend l’ ?',
    'Toute l’idée déjà énoncée. À l’écrit soigné, ce le est attendu dans l’incise : comme je l’ai dit, comme vous le savez, comme on l’avait prévu. Comme prévu, comme convenu se passent de le.',
    ['proposition', 'incise']),
  gap(2043, 'Comme nous l’avions annoncé, la salle sera repeinte.', 'As we had announced, the room will be repainted.',
    '/kɔm nu la.vjɔ̃.za.nɔ̃.se la sal sə.ʁa ʁə.pɛ̃t/', 'kom noo la-vyohⁿ-za-nohⁿ-SAY | la SAL | suh-ra ruh-PEHⁿT',
    'Comme nous ___ annoncé, la salle sera repeinte. (avoir, au plus-que-parfait, avec la reprise)',
    'L’ reprend ce qu’on avait annoncé : nous l’avions. EN: l’ picks up the announcement.',
    ['proposition', 'incise'], FCVDR),
  gap(2044, 'Le bruit est plus fort qu’on ne le dit.', 'The noise is louder than people say.',
    '/lə bʁɥi ɛ ply fɔʁ kɔ̃ nə lə di/', 'luh BRWEE | eh plü FOR | kohⁿ nuh luh DEE',
    'Le bruit est plus fort qu’on ne ___ dit. (reprends l’idée)',
    'Après plus que, à l’écrit : ne explétif et le neutre. Le le peut manquer en style soutenu ; ne mets jamais la ou les à sa place.',
    ['proposition', 'comparaison']),
  sent(2045, 'Il viendra, je le crois, mais il ne l’a pas promis.', 'He will come, I believe, but he has not promised.',
    '/il vjɛ̃.dʁa ʒə lə kʁwa mɛ il nə la pa pʁɔ.mi/', 'eel vyehⁿ-DRA | zhuh luh KRWA | meh eel nuh la pa pro-MEE', ['proposition', 'croire']),
  sent(2046, 'Comme convenu, le devis vous parviendra lundi.', 'As agreed, the quote will reach you on Monday.',
    '/kɔm kɔ̃v.ny lə də.vi vu paʁ.vjɛ̃.dʁa lœ̃.di/', 'kom kohⁿv-NÜ | luh duh-VEE | voo par-vyehⁿ-dra luhⁿ-DEE', ['proposition', 'sans-le'], FCVR, { register: SOU }),
  sent(2047, 'Tu n’as rien dit ? Tu aurais dû le dire.', 'You said nothing? You should have said so.',
    '/ty na ʁjɛ̃ di ty o.ʁɛ dy lə diʁ/', 'tü na ryehⁿ DEE | tü oh-reh DÜ luh DEER', ['proposition', 'dire']),
];

/* ── ACT 4 · FAIRE, LE VERBE QUI REMPLACE (.2049-.2064) ───────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(2049, 'Il faut appeler le plombier ; je le ferai demain.', 'The plumber needs calling; I will do it tomorrow.',
    '/il fo.ta.ple lə plɔ̃.bje ʒə lə fə.ʁe də.mɛ̃/', 'eel foh-ta-PLAY | luh plohⁿ-BYAY | zhuh luh fuh-RAY | duh-MEHⁿ', ['faire', 'le-faire'], FCVDR),
  sent(2050, 'Elle a rendu son rapport à temps, et son collègue en a fait autant.', 'She handed in her report on time, and her colleague did the same.',
    '/ɛ.la ʁɑ̃.dy sɔ̃ ʁa.pɔʁ a tɑ̃ e sɔ̃ kɔ.lɛɡ ɑ̃.na fɛ.to.tɑ̃/', 'eh-la rahⁿ-DÜ | sohⁿ ra-POR a TAHⁿ | ay sohⁿ ko-LEG | ahⁿ-na feh-toh-TAHⁿ', ['faire', 'en-faire-autant'], FCVDR),
  sent(2051, 'Il lit beaucoup plus que je ne le fais.', 'He reads much more than I do.',
    '/il li bo.ku plys kə ʒə nə lə fɛ/', 'eel lee boh-koo PLÜS | kuh zhuh nuh luh FEH', ['faire', 'comparaison'], FCVDR),
  sent(2052, 'Elle parle aux locataires comme sa mère le faisait.', 'She speaks to the tenants the way her mother did.',
    '/ɛl paʁl o lɔ.ka.tɛʁ kɔm sa mɛʁ lə fə.zɛ/', 'el parl oh lo-ka-TEHR | kom sa MEHR | luh fuh-ZEH', ['faire', 'comme']),
  sent(2053, 'Les voisins ont trié leurs déchets ; faites de même.', 'The neighbours have sorted their waste; do the same.',
    '/le vwa.zɛ̃ ɔ̃ tʁi.je lœʁ de.ʃɛ fɛt də mɛm/', 'lay vwa-ZEHⁿ | ohⁿ tree-YAY | luhr day-SHEH | fet duh MEM', ['faire', 'de-meme'], FCVR, { register: SOU }),
  sent(2054, 'Tu voulais repeindre le hall ? Fais-le.', 'You wanted to repaint the hall? Do it.',
    '/ty vu.lɛ ʁə.pɛ̃dʁ lə ol fɛ.lə/', 'tü voo-LEH | ruh-pehⁿdr luh OL | feh-LUH', ['faire', 'imperatif']),
  sent(2055, 'Elle est plus patiente que je ne le suis.', 'She is more patient than I am.',
    '/ɛ.lɛ ply pa.sjɑ̃t kə ʒə nə lə sɥi/', 'eh-leh plü pa-SYAHⁿT | kuh zhuh nuh luh SWEE', ['faire', 'etre'], FCVDR),
  sent(2056, 'Ils ont plus de place que nous n’en avons.', 'They have more space than we do.',
    '/il.zɔ̃ ply də plas kə nu nɑ̃.na.vɔ̃/', 'eel-ZOHⁿ | plü duh PLASS | kuh noo nahⁿ-na-VOHⁿ', ['faire', 'avoir']),
  sent(2057, 'Personne ne m’a aidé, alors je l’ai fait seul.', 'Nobody helped me, so I did it alone.',
    '/pɛʁ.sɔn nə ma e.de a.lɔʁ ʒə le fɛ sœl/', 'pehr-SONN | nuh ma ay-DAY | a-lor zhuh lay feh SUHL', ['faire', 'le-faire']),
  sent(2058, 'Il avait promis de rappeler ; il ne l’a pas fait.', 'He had promised to call back; he did not.',
    '/i.la.vɛ pʁɔ.mi də ʁa.ple il nə la pa fɛ/', 'ee-la-veh pro-MEE | duh ra-PLAY | eel nuh la pa FEH', ['faire', 'le-faire']),
  rule(2059, 'Faire reprend un verbe d’action ; être et avoir se reprennent eux-mêmes.', 'Faire picks up an action verb; être and avoir pick themselves up.',
    '/fɛʁ ʁə.pʁɑ̃ œ̃ vɛʁb dak.sjɔ̃ ɛtʁ e a.vwaʁ sə ʁə.pʁɛn ø.mɛm/', 'FEHR ruh-PRAHⁿ | uhⁿ vehrb dak-SYOHⁿ | etr ay a-VWAR | suh ruh-PRENN eu-MEM',
    'Il lit plus que je ne… ?',
    'Que je ne le fais : faire reprend lire. Mais elle est plus patiente que je ne le suis, ils ont plus de place que nous n’en avons : être et avoir ne passent jamais par faire.',
    ['faire', 'etre']),
  gap(2060, 'Je n’ai pas encore signé, mais je le ferai ce soir.', 'I have not signed yet, but I will do it tonight.',
    '/ʒə ne pa.zɑ̃.kɔʁ si.ɲe mɛ ʒə lə fə.ʁe sə swaʁ/', 'zhuh nay pa-zahⁿ-kor see-NYAY | meh zhuh luh fuh-RAY | suh SWAR',
    'Je n’ai pas encore signé, mais je ___ ce soir. (faire, au futur, avec la reprise)',
    'Le ferai reprend signer. EN: le ferai stands for signer.',
    ['faire', 'le-faire']),
  gap(2061, 'Il travaille plus qu’elle ne le fait.', 'He works more than she does.',
    '/il tʁa.vaj plys kɛl nə lə fɛ/', 'eel tra-VAHY | plüs KEL | nuh luh FEH',
    'Il travaille plus qu’elle ne ___ . (reprends travailler, au présent)',
    'Faire reprend travailler : ne le fait. EN: faire stands for travailler.',
    ['faire', 'comparaison']),
  sent(2062, 'Tu fumes ? Plus maintenant.', 'Do you smoke? Not any more.',
    '/ty fym ply mɛ̃t.nɑ̃/', 'tü FÜM | plü mehⁿt-NAHⁿ', ['faire', 'reponse-courte']),
  sent(2063, 'Elle a démissionné, comme beaucoup l’avaient fait avant elle.', 'She resigned, as many had done before her.',
    '/ɛ.la de.mi.sjɔ.ne kɔm bo.ku la.vɛ fɛ a.vɑ̃.tɛl/', 'eh-la day-mee-syo-NAY | kom boh-KOO | la-veh FEH | a-vahⁿ-TEL', ['faire', 'comme']),
  sent(2064, 'Je ne peux pas l’accompagner ; peux-tu le faire ?', 'I cannot go with her; can you?',
    '/ʒə nə pø pa la.kɔ̃.pa.ɲe pø.ty lə fɛʁ/', 'zhuh nuh peu pa la-kohⁿ-pa-NYAY | peu-TÜ luh FEHR', ['faire', 'le-faire']),
];

/* ── ACT 5 · PIERRE LIT PROUST ; MARIE, ZOLA (.2066-.2082) ────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(2066, 'Pierre lit Proust ; Marie, Zola.', 'Pierre reads Proust; Marie, Zola.',
    '/pjɛʁ li pʁust ma.ʁi zɔ.la/', 'pyehr lee PROOST | ma-REE | zo-LA', ['ellipse', 'virgule'], FCVDR),
  sent(2067, 'Le premier étage sera repeint en juin, le second en septembre.', 'The first floor will be repainted in June, the second in September.',
    '/lə pʁə.mje.ʁe.taʒ sə.ʁa ʁə.pɛ̃ ɑ̃ ʒɥɛ̃ lə sə.ɡɔ̃ ɑ̃ sɛp.tɑ̃bʁ/', 'luh pruh-myay-ray-TAZH | suh-ra ruh-PEHⁿ ahⁿ ZHWEHⁿ | luh suh-GOHⁿ | ahⁿ sep-TAHⁿBR', ['ellipse', 'liste']),
  sent(2068, 'Lui accepte le compromis, elle non.', 'He accepts the compromise; she does not.',
    '/lɥi ak.sɛpt lə kɔ̃.pʁɔ.mi ɛl nɔ̃/', 'lwee ak-SEPT | luh kohⁿ-pro-MEE | el NOHⁿ', ['ellipse', 'non'], FCVDR),
  sent(2069, 'Elle a voté pour, moi aussi.', 'She voted for it, and so did I.',
    '/ɛ.la vɔ.te puʁ mwa o.si/', 'eh-la vo-tay POOR | mwa oh-SEE', ['ellipse', 'aussi']),
  sent(2070, 'Je ne connais pas le nouveau gérant, mon voisin non plus.', 'I do not know the new manager, and neither does my neighbour.',
    '/ʒə nə kɔ.nɛ pa lə nu.vo ʒe.ʁɑ̃ mɔ̃ vwa.zɛ̃ nɔ̃ ply/', 'zhuh nuh ko-neh pa | luh noo-voh zhay-RAHⁿ | mohⁿ vwa-ZEHⁿ | nohⁿ PLÜ', ['ellipse', 'non-plus']),
  sent(2071, 'Il a trois enfants, sa sœur deux.', 'He has three children, his sister two.',
    '/i.la tʁwa.zɑ̃.fɑ̃ sa sœʁ dø/', 'ee-la trwa-zahⁿ-FAHⁿ | sa SUHR | DEU', ['ellipse', 'nombre']),
  sent(2072, 'Les jeunes préfèrent le courriel ; les plus âgés, le téléphone.', 'Young people prefer email; older people, the phone.',
    '/le ʒœn pʁe.fɛʁ lə ku.ʁjɛl le ply.za.ʒe lə te.le.fɔn/', 'lay ZHUHNN | pray-fehr luh koo-RYEL | lay plü-za-ZHAY | luh tay-lay-FONN', ['ellipse', 'virgule'], FCVDR),
  sent(2073, 'Elle est d’accord, pas moi.', 'She agrees; I do not.',
    '/ɛ.lɛ da.kɔʁ pa mwa/', 'eh-leh da-KOR | pa MWA', ['ellipse', 'pas']),
  sent(2074, 'Je paierai l’électricité, toi le chauffage.', 'I will pay the electricity, you the heating.',
    '/ʒə pɛ.ʁe le.lɛk.tʁi.si.te twa lə ʃo.faʒ/', 'zhuh peh-RAY | lay-lek-tree-see-TAY | TWA | luh shoh-FAZH', ['ellipse', 'liste']),
  rule(2075, 'Quand deux phrases ont le même verbe, la seconde peut le taire.', 'When two clauses share the same verb, the second can leave it out.',
    '/kɑ̃ dø fʁaz ɔ̃ lə mɛm vɛʁb la sə.ɡɔ̃d pø lə tɛʁ/', 'kahⁿ deu FRAHZ | ohⁿ luh mem VEHRB | la suh-GOHⁿD | peu luh TEHR',
    'Dans « Pierre lit Proust ; Marie, Zola », où est le verbe de la seconde phrase ?',
    'Il est sous-entendu : Marie lit Zola. Le lecteur le reprend de la première phrase, et la virgule montre souvent l’endroit où il manque.',
    ['ellipse', 'virgule']),
  gap(2076, 'Mon frère habite à Laval, ma sœur à Gatineau.', 'My brother lives in Laval, my sister in Gatineau.',
    '/mɔ̃ fʁɛʁ a.bit a la.val ma sœʁ a ɡa.ti.no/', 'mohⁿ FREHR | a-beet a la-VAL | ma SUHR | a ga-tee-NOH',
    'Mon frère habite à Laval, ma sœur ___ Gatineau. (sans répéter le verbe)',
    'Habite est sous-entendu : ma sœur à Gatineau. EN: the verb is understood.',
    ['ellipse', 'liste']),
  gap(2077, 'Lui part demain, elle non.', 'He leaves tomorrow; she does not.',
    '/lɥi paʁ də.mɛ̃ ɛl nɔ̃/', 'lwee par duh-MEHⁿ | el NOHⁿ',
    'Lui part demain, elle ___ . (elle ne part pas demain)',
    'Non tient la place de « ne part pas demain ». EN: non stands for the whole negative predicate.',
    ['ellipse', 'non'], FCVDR),
  sent(2078, 'Les uns arrivent en avance, les autres jamais à l’heure.', 'Some arrive early, others never on time.',
    '/le.zœ̃ a.ʁiv ɑ̃.na.vɑ̃s le.zotʁ ʒa.mɛ a lœʁ/', 'lay-ZUHⁿ | a-reev ahⁿ-na-VAHⁿS | lay-ZOHTR | zha-meh a LUHR', ['ellipse', 'les-uns']),
  sent(2079, 'Elle préfère la mer, son mari la montagne.', 'She prefers the sea, her husband the mountains.',
    '/ɛl pʁe.fɛʁ la mɛʁ sɔ̃ ma.ʁi la mɔ̃.taɲ/', 'el pray-fehr la MEHR | sohⁿ ma-REE | la mohⁿ-TANY', ['ellipse', 'liste']),
  sent(2080, 'Il a fini son rapport ; moi, pas encore.', 'He has finished his report; I have not yet.',
    '/i.la fi.ni sɔ̃ ʁa.pɔʁ mwa pa.zɑ̃.kɔʁ/', 'ee-la fee-NEE | sohⁿ ra-POR | MWA | pa-zahⁿ-KOR', ['ellipse', 'pas']),
  sent(2081, 'La mairie paiera la moitié des travaux, la coopérative le reste.', 'The town hall will pay half the works, the cooperative the rest.',
    '/la mɛ.ʁi pɛ.ʁa la mwa.tje de tʁa.vo la ko.ɔ.pe.ʁa.tiv lə ʁɛst/', 'la meh-REE | peh-ra la mwa-TYAY | day tra-VOH | la koh-o-pay-ra-TEEV | luh REST', ['ellipse', 'liste']),
  sent(2082, 'Tu as aimé le film ? Moi, beaucoup.', 'Did you like the film? I did, a lot.',
    '/ty a e.me lə film mwa bo.ku/', 'tü a ay-MAY luh FEELM | MWA | boh-KOO', ['ellipse', 'reponse-courte']),
];

/* ── ACT 6 · JE NE SAIS PAS QUI (.2084-.2098) ─────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(2084, 'Quelqu’un a appelé pendant ton absence, mais je ne sais pas qui.', 'Someone called while you were out, but I do not know who.',
    '/kɛl.kœ̃ a a.pə.le pɑ̃.dɑ̃ tɔ̃.nap.sɑ̃s mɛ ʒə nə sɛ pa ki/', 'kel-KUHⁿ a a-puh-LAY | pahⁿ-dahⁿ tohⁿ-nap-SAHⁿS | meh zhuh nuh seh pa KEE', ['question', 'qui'], FCVDR),
  sent(2085, 'Il manque une pièce au dossier ; reste à savoir laquelle.', 'A document is missing from the file; the question is which one.',
    '/il mɑ̃k yn pjɛs o do.sje ʁɛst a sa.vwaʁ la.kɛl/', 'eel mahⁿk ün PYESS | oh doh-SYAY | rest a sa-VWAR | la-KEL', ['question', 'lequel'], FCVDR),
  sent(2086, 'Les travaux reprendront, mais personne ne sait quand.', 'The works will resume, but nobody knows when.',
    '/le tʁa.vo ʁə.pʁɑ̃.dʁɔ̃ mɛ pɛʁ.sɔn nə sɛ kɑ̃/', 'lay tra-VOH | ruh-prahⁿ-DROHⁿ | meh pehr-SONN | nuh seh KAHⁿ', ['question', 'quand']),
  sent(2087, 'Il manque quelque chose à ce texte, mais je ne sais pas quoi.', 'Something is missing from this text, but I do not know what.',
    '/il mɑ̃k kɛl.kə ʃoz a sə tɛkst mɛ ʒə nə sɛ pa kwa/', 'eel mahⁿk kel-kuh SHOHZ | a suh TEKST | meh zhuh nuh seh pa KWA', ['question', 'quoi'], FCVDR),
  sent(2088, 'On m’a demandé de passer au bureau, sans me dire pourquoi.', 'I was asked to come by the office, without being told why.',
    '/ɔ̃ ma də.mɑ̃.de də pa.se o by.ʁo sɑ̃ mə diʁ puʁ.kwa/', 'ohⁿ ma duh-mahⁿ-DAY | duh pa-say oh bü-ROH | sahⁿ muh deer poor-KWA', ['question', 'pourquoi']),
  sent(2089, 'L’une des deux offres est meilleure, et nous savons laquelle.', 'One of the two offers is better, and we know which.',
    '/lyn de dø.zɔfʁ ɛ mɛ.jœʁ e nu sa.vɔ̃ la.kɛl/', 'LÜNN | day deu-ZOFR | eh meh-YUHR | ay noo sa-vohⁿ la-KEL', ['question', 'lequel']),
  sent(2090, 'Vous avez des questions ? Si oui, lesquelles ?', 'Do you have questions? If so, which ones?',
    '/vu.za.ve de kɛs.tjɔ̃ si wi le.kɛl/', 'voo-za-VAY | day kes-TYOHⁿ | see WEE | lay-KEL', ['question', 'si-oui']),
  sent(2091, 'Elle a déménagé, je ne sais plus où.', 'She moved, I no longer know where.',
    '/ɛ.la de.me.na.ʒe ʒə nə sɛ ply.zu/', 'eh-la day-may-na-ZHAY | zhuh nuh seh plü-ZOO', ['question', 'ou']),
  rule(2092, 'Après savoir, dire ou se demander, le mot interrogatif peut rester seul.', 'After savoir, dire or se demander, the question word can stand alone.',
    '/a.pʁɛ sa.vwaʁ diʁ u sə də.mɑ̃.de lə mo ɛ̃.te.ʁɔ.ɡa.tif pø ʁɛs.te sœl/', 'a-preh sa-VWAR | DEER | oo suh duh-mahⁿ-DAY | luh moh ehⁿ-tay-ro-ga-TEEF | peu res-tay SUHL',
    '« Quelqu’un a appelé, mais je ne sais pas qui » : que manque-t-il après qui ?',
    'Toute la question : qui a appelé. On garde seulement le mot interrogatif (qui, quand, où, pourquoi, comment, lequel), et quoi pour une chose.',
    ['question', 'qui']),
  gap(2093, 'Il y a un problème, mais je ne sais pas lequel.', 'There is a problem, but I do not know which one.',
    '/i.li.ja œ̃ pʁɔ.blɛm mɛ ʒə nə sɛ pa lə.kɛl/', 'ee-lee-YA uhⁿ pro-BLEM | meh zhuh nuh seh pa luh-KEL',
    'Il y a un problème, mais je ne sais pas ___ . (quel problème ?)',
    'Lequel, au masculin, comme problème. EN: lequel agrees with problème.',
    ['question', 'lequel']),
  gap(2094, 'Une voisine s’est plainte, mais on ignore laquelle.', 'A neighbour complained, but nobody knows which one.',
    '/yn vwa.zin sɛ plɛ̃t mɛ.zɔ̃.ni.ɲɔʁ la.kɛl/', 'ün vwa-ZEENN | seh PLEHⁿT | meh-zohⁿ-nee-NYOR | la-KEL',
    'Une voisine s’est plainte, mais on ignore ___ . (quelle voisine ?)',
    'Laquelle, au féminin, comme voisine. EN: laquelle agrees with voisine.',
    ['question', 'lequel'], FCVDR),
  sent(2095, 'Il viendra avec quelqu’un ; devine avec qui.', 'He is coming with someone; guess who with.',
    '/il vjɛ̃.dʁa a.vɛk kɛl.kœ̃ də.vin a.vɛk ki/', 'eel vyehⁿ-DRA | a-vek kel-KUHⁿ | duh-VEENN | a-vek KEE', ['question', 'preposition']),
  sent(2096, 'Ils veulent changer le règlement, mais ils ne disent pas comment.', 'They want to change the rules, but they do not say how.',
    '/il vœl ʃɑ̃.ʒe lə ʁɛ.ɡlə.mɑ̃ mɛ il nə diz pa kɔ.mɑ̃/', 'eel vuhl shahⁿ-ZHAY | luh reh-gluh-MAHⁿ | meh eel nuh deez pa ko-MAHⁿ', ['question', 'comment']),
  sent(2097, 'Elle ne vient plus aux réunions. Depuis quand ?', 'She no longer comes to meetings. Since when?',
    '/ɛl nə vjɛ̃ ply.zo ʁe.y.njɔ̃ də.pɥi kɑ̃/', 'el nuh vyehⁿ plü-ZOH | ray-ü-NYOHⁿ | duh-pwee KAHⁿ', ['question', 'dialogue']),
  sent(2098, 'Je veux bien t’aider ; dis-moi seulement en quoi.', 'I am happy to help; just tell me how.',
    '/ʒə vø bjɛ̃ te.de di.mwa sœl.mɑ̃ ɑ̃ kwa/', 'zhuh veu byehⁿ tay-DAY | dee-MWA | suhl-mahⁿ ahⁿ KWA', ['question', 'preposition']),
];

/* ── ACT 7 · CELUI DE, CELLE QUE (.2100-.2116) ────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(2100, 'La question des loyers est réglée, celle du chauffage ne l’est pas.', 'The rent question is settled; the heating one is not.',
    '/la kɛs.tjɔ̃ de lwa.je ɛ ʁe.ɡle sɛl dy ʃo.faʒ nə lɛ pa/', 'la kes-TYOHⁿ day lwa-YAY | eh ray-GLAY | sel dü shoh-FAZH | nuh leh PA', ['celui', 'accord'], FCVDR),
  sent(2101, 'Le budget du comité culturel est modeste, celui du comité des fêtes encore plus.', 'The culture committee’s budget is modest, the events committee’s even more so.',
    '/lə byd.ʒɛ dy kɔ.mi.te kyl.ty.ʁɛl ɛ mɔ.dɛst sə.lɥi dy kɔ.mi.te de fɛt ɑ̃.kɔʁ plys/', 'luh büd-ZHEH | dü ko-mee-tay kül-tü-REL | eh mo-DEST | suh-lwee dü ko-mee-tay day FET | ahⁿ-kor PLÜS', ['celui', 'ellipse']),
  sent(2102, 'Je compare deux devis : celui de l’entreprise Morin et celui de Bâtisol.', 'I am comparing two quotes: the one from Morin and the one from Bâtisol.',
    '/ʒə kɔ̃.paʁ dø də.vi sə.lɥi də lɑ̃.tʁə.pʁiz mɔ.ʁɛ̃ e sə.lɥi də ba.ti.sɔl/', 'zhuh kohⁿ-PAR | deu duh-VEE | suh-lwee duh lahⁿ-truh-preez mo-REHⁿ | ay suh-lwee duh ba-tee-SOL', ['celui', 'liste']),
  sent(2103, 'Le projet actuel est moins ambitieux que celui que nous avions voté.', 'The current project is less ambitious than the one we had voted for.',
    '/lə pʁɔ.ʒɛ ak.tɥɛl ɛ mwɛ̃.zɑ̃.bi.sjø kə sə.lɥi kə nu.za.vjɔ̃ vɔ.te/', 'luh pro-zheh ak-TWEL | eh mwehⁿ-zahⁿ-bee-SYEU | kuh suh-lwee kuh noo-za-vyohⁿ vo-TAY', ['celui', 'que']),
  sent(2104, 'Ce plan présente un avantage, celui de la simplicité.', 'This plan has one advantage: simplicity.',
    '/sə plɑ̃ pʁe.zɑ̃.tœ̃.na.vɑ̃.taʒ sə.lɥi də la sɛ̃.pli.si.te/', 'suh PLAHⁿ | pray-zahⁿ-tuhⁿ-na-vahⁿ-TAZH | suh-lwee duh la sehⁿ-plee-see-TAY', ['celui', 'apposition'], FCVDR),
  sent(2105, 'Les règles de la cour sont claires ; celles du local à vélos, beaucoup moins.', 'The courtyard rules are clear; the bike room rules much less so.',
    '/le ʁɛɡl də la kuʁ sɔ̃ klɛʁ sɛl dy lɔ.kal a ve.lo bo.ku mwɛ̃/', 'lay REGL duh la KOOR | sohⁿ KLEHR | sel dü lo-kal a vay-LOH | boh-koo MWEHⁿ', ['celui', 'ellipse']),
  sent(2106, 'Ceux qui ne peuvent pas venir peuvent voter par courriel.', 'Those who cannot come can vote by email.',
    '/sø ki nə pœv pa və.niʁ pœv vɔ.te paʁ ku.ʁjɛl/', 'seu kee nuh puhv pa vuh-NEER | puhv vo-TAY | par koo-RYEL', ['celui', 'qui']),
  sent(2107, 'Entre la solution du conseil et celle des locataires, l’assemblée a choisi la seconde.', 'Between the board’s solution and the tenants’, the meeting chose the latter.',
    '/ɑ̃tʁ la sɔ.ly.sjɔ̃ dy kɔ̃.sɛj e sɛl de lɔ.ka.tɛʁ la.sɑ̃.ble a ʃwa.zi la sə.ɡɔ̃d/', 'ahⁿtr la so-lü-SYOHⁿ dü kohⁿ-SEHY | ay sel day lo-ka-TEHR | la-sahⁿ-BLAY | a shwa-ZEE | la suh-GOHⁿD', ['celui', 'accord']),
  sent(2108, 'Le calendrier initial et celui proposé par l’entreprise ne concordent pas.', 'The initial schedule and the one proposed by the company do not match.',
    '/lə ka.lɑ̃.dʁi.je i.ni.sjal e sə.lɥi pʁɔ.po.ze paʁ lɑ̃.tʁə.pʁiz nə kɔ̃.kɔʁd pa/', 'luh ka-lahⁿ-dree-YAY | ee-nee-SYAL | ay suh-lwee pro-poh-ZAY | par lahⁿ-truh-PREEZ | nuh kohⁿ-kord PA', ['celui', 'participe']),
  sent(2109, 'Le calendrier initial et celui que propose l’entreprise ne concordent pas.', 'The initial schedule and the one the company proposes do not match.',
    '/lə ka.lɑ̃.dʁi.je i.ni.sjal e sə.lɥi kə pʁɔ.poz lɑ̃.tʁə.pʁiz nə kɔ̃.kɔʁd pa/', 'luh ka-lahⁿ-dree-YAY | ee-nee-SYAL | ay suh-lwee kuh pro-POHZ | lahⁿ-truh-PREEZ | nuh kohⁿ-kord PA', ['celui', 'que'], FCVR, { register: SOU }),
  rule(2110, 'Celui, celle, ceux, celles prennent le genre et le nombre du nom qu’ils reprennent.', 'Celui, celle, ceux and celles take the gender and number of the noun they pick up.',
    '/sə.lɥi sɛl sø sɛl pʁɛn lə ʒɑ̃ʁ e lə nɔ̃bʁ dy nɔ̃ kil ʁə.pʁɛn/', 'suh-LWEE | SEL | SEU | SEL | prenn luh ZHAHⁿR | ay luh NOHⁿBR | dü NOHⁿ | keel ruh-PRENN',
    '« La question des loyers, et … du chauffage » : celui ou celle ?',
    'Celle : le pronom reprend question, féminin, pas chauffage. Il s’accorde avec le nom qu’il remplace, même loin derrière, jamais avec son complément.',
    ['celui', 'accord']),
  gap(2111, 'Ma demande a été acceptée, celle de mon voisin refusée.', 'My request was accepted, my neighbour’s refused.',
    '/ma də.mɑ̃d a e.te ak.sɛp.te sɛl də mɔ̃ vwa.zɛ̃ ʁə.fy.ze/', 'ma duh-MAHⁿD | a ay-tay ak-sep-TAY | sel duh mohⁿ vwa-ZEHⁿ | ruh-fü-ZAY',
    'Ma demande a été acceptée, ___ de mon voisin refusée. (reprends demande)',
    'Celle : demande est féminin. Le verbe aussi est sous-entendu : a été. EN: celle, and the verb is understood.',
    ['celui', 'accord'], FCVDR),
  gap(2112, 'Les comptes de cette année sont plus clairs que ceux de l’an passé.', 'This year’s accounts are clearer than last year’s.',
    '/le kɔ̃t də sɛ.ta.ne sɔ̃ ply klɛʁ kə sø də lɑ̃ pa.se/', 'lay KOHⁿT | duh seh-ta-NAY | sohⁿ plü KLEHR | kuh seu duh lahⁿ pa-SAY',
    'Les comptes de cette année sont plus clairs que ___ de l’an passé. (reprends les comptes)',
    'Ceux : les comptes, masculin pluriel. EN: ceux, masculine plural.',
    ['celui', 'accord']),
  sent(2113, 'Il y a deux façons de voir les choses : celle du gestionnaire et celle des habitants.', 'There are two ways of seeing things: the manager’s and the residents’.',
    '/i.li.ja dø fa.sɔ̃ də vwaʁ le ʃoz sɛl dy ʒɛs.tjɔ.nɛʁ e sɛl de.za.bi.tɑ̃/', 'ee-lee-ya deu fa-SOHⁿ | duh vwar lay SHOHZ | sel dü zhes-tyo-NEHR | ay sel day-za-bee-TAHⁿ', ['celui', 'apposition']),
  sent(2114, 'Mon avis compte moins que celui des experts, paraît-il.', 'My opinion counts for less than the experts’, apparently.',
    '/mɔ̃.na.vi kɔ̃t mwɛ̃ kə sə.lɥi de.zɛk.spɛʁ pa.ʁɛ.til/', 'mohⁿ-na-VEE | kohⁿt MWEHⁿ | kuh suh-lwee day-zeks-PEHR | pa-reh-TEEL', ['celui', 'ironie']),
  sent(2115, 'La salle du rez-de-chaussée est plus grande que celle du sous-sol.', 'The ground-floor room is bigger than the basement one.',
    '/la sal dy ʁɛd.ʃo.se ɛ ply ɡʁɑ̃d kə sɛl dy su.sɔl/', 'la SAL | dü red-shoh-SAY | eh plü GRAHⁿD | kuh sel dü soo-SOL', ['celui', 'comparaison']),
  sent(2116, 'Ces chiffres confirment ceux de l’enquête précédente.', 'These figures confirm those of the previous survey.',
    '/se ʃifʁ kɔ̃.fiʁm sø də lɑ̃.kɛt pʁe.se.dɑ̃t/', 'say SHEEFR | kohⁿ-FEERM | seu duh lahⁿ-ket pray-say-DAHⁿT', ['celui', 'accord']),
];

/* ── ACT 8 · UN AUTRE NOM POUR LA MÊME CHOSE (.2118-.2133) ────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(2118, 'Un érable est tombé sur le parking ; l’arbre était malade depuis des années.', 'A maple fell on the car park; the tree had been diseased for years.',
    '/œ̃.ne.ʁabl ɛ tɔ̃.be syʁ lə paʁ.kiŋ laʁbʁ e.tɛ ma.lad də.pɥi de.za.ne/', 'uhⁿ-nay-RABL | eh tohⁿ-BAY | sür luh par-KEENG | LARBR | ay-teh ma-LAD | duh-pwee day-za-NAY', ['hyperonyme', 'arbre'], FCVDR),
  sent(2119, 'Le conseil a reporté le vote. Cette décision a surpris les locataires.', 'The board postponed the vote. This decision surprised the tenants.',
    '/lə kɔ̃.sɛj a ʁə.pɔʁ.te lə vɔt sɛt de.si.zjɔ̃ a syʁ.pʁi le lɔ.ka.tɛʁ/', 'luh kohⁿ-SEHY | a ruh-por-tay luh VOT | set day-see-ZYOHⁿ | a sür-PREE | lay lo-ka-TEHR', ['resume', 'decision'], FCVDR),
  sent(2120, 'Les loyers augmenteront de quatre pour cent. Cette hausse sera discutée en juin.', 'The rents will rise by four per cent. This increase will be discussed in June.',
    '/le lwa.je oɡ.mɑ̃t.ʁɔ̃ də katʁ puʁ sɑ̃ sɛt os sə.ʁa dis.ky.te ɑ̃ ʒɥɛ̃/', 'lay lwa-YAY | ohg-mahⁿt-ROHⁿ | duh katr poor SAHⁿ | set OHSS | suh-ra dees-kü-TAY | ahⁿ ZHWEHⁿ', ['resume', 'nominalisation']),
  sent(2121, 'La chorale a donné son dernier concert ; l’ensemble reviendra à l’automne.', 'The choir gave its last concert; the ensemble will be back in the autumn.',
    '/la kɔ.ʁal a dɔ.ne sɔ̃ dɛʁ.nje kɔ̃.sɛʁ lɑ̃.sɑ̃bl ʁə.vjɛ̃.dʁa a lo.tɔn/', 'la ko-RAL | a do-NAY | sohⁿ dehr-nyay kohⁿ-SEHR | lahⁿ-SAHⁿBL | ruh-vyehⁿ-DRA | a loh-TONN', ['hyperonyme', 'synonyme']),
  sent(2122, 'Nadia Belkacem a été élue présidente ; la nouvelle élue entre en fonction lundi.', 'Nadia Belkacem has been elected president; the newly elected president takes office on Monday.',
    '/na.dja bɛl.ka.sɛm a e.te e.ly pʁe.zi.dɑ̃t la nu.vɛ.le.ly ɑ̃.tʁɑ̃ fɔ̃k.sjɔ̃ lœ̃.di/', 'na-DYA bel-ka-SEMM | a ay-tay ay-LÜ | pray-zee-DAHⁿT | la noo-veh-lay-LÜ | ahⁿ-trahⁿ fohⁿk-SYOHⁿ | luhⁿ-DEE', ['hyperonyme', 'personne']),
  sent(2123, 'Le concierge a découvert une fuite au sous-sol. Ce constat oblige à revoir le calendrier.', 'The caretaker found a leak in the basement. This finding means the schedule must be revised.',
    '/lə kɔ̃.sjɛʁʒ a de.ku.vɛʁ yn fɥit o su.sɔl sə kɔ̃s.ta ɔ.bliʒ a ʁə.vwaʁ lə ka.lɑ̃.dʁi.je/', 'luh kohⁿ-SYEHRZH | a day-koo-VEHR | ün FWEET | oh soo-SOL | suh kohⁿs-TA | o-BLEEZH | a ruh-vwar luh ka-lahⁿ-dree-YAY', ['resume', 'constat'], FCVR, { register: SOU }),
  sent(2124, 'Personne n’a répondu au sondage. Ce silence en dit long.', 'Nobody answered the survey. This silence speaks volumes.',
    '/pɛʁ.sɔn na ʁe.pɔ̃.dy o sɔ̃.daʒ sə si.lɑ̃s ɑ̃ di lɔ̃/', 'pehr-SONN | na ray-pohⁿ-DÜ | oh sohⁿ-DAZH | suh see-LAHⁿS | ahⁿ dee LOHⁿ', ['resume', 'silence'], FCVDR),
  sent(2125, 'Une camionnette bloquait l’entrée ; le véhicule a été déplacé à midi.', 'A van was blocking the entrance; the vehicle was moved at noon.',
    '/yn ka.mjɔ.nɛt blɔ.kɛ lɑ̃.tʁe lə ve.i.kyl a e.te de.pla.se a mi.di/', 'ün ka-myo-NET | blo-KEH lahⁿ-TRAY | luh vay-ee-KÜL | a ay-tay day-pla-SAY | a mee-DEE', ['hyperonyme', 'vehicule']),
  sent(2126, 'La coopérative a acheté l’immeuble voisin. Cette acquisition double sa capacité.', 'The cooperative has bought the building next door. This acquisition doubles its capacity.',
    '/la ko.ɔ.pe.ʁa.tiv a aʃ.te li.mœbl vwa.zɛ̃ sɛ.ta.ki.zi.sjɔ̃ dubl sa ka.pa.si.te/', 'la koh-o-pay-ra-TEEV | a ash-TAY | lee-muhbl vwa-ZEHⁿ | seh-ta-kee-zee-SYOHⁿ | doobl sa ka-pa-see-TAY', ['resume', 'nominalisation'], FCVR, { register: SOU }),
  rule(2127, 'Un nom plus large, ou un nom qui résume, reprend ce qui précède.', 'A broader noun, or a noun that sums up, picks up what came before.',
    '/œ̃ nɔ̃ ply laʁʒ u œ̃ nɔ̃ ki ʁe.zym ʁə.pʁɑ̃ sə ki pʁe.sɛd/', 'uhⁿ nohⁿ plü LARZH | oo uhⁿ NOHⁿ kee ray-ZÜM | ruh-PRAHⁿ | suh kee pray-SED',
    '« Le conseil a reporté le vote. … a surpris les locataires. » Comment reprendre la première phrase ?',
    'Par un nom qui la résume, souvent avec ce ou cette : cette décision, ce report. Le démonstratif dit au lecteur : c’est ce dont on vient de parler.',
    ['hyperonyme', 'resume']),
  gap(2128, 'Le gardien a refusé la livraison. Ce refus a retardé le chantier.', 'The caretaker refused the delivery. This refusal delayed the works.',
    '/lə ɡaʁ.djɛ̃ a ʁə.fy.ze la li.vʁɛ.zɔ̃ sə ʁə.fy a ʁə.taʁ.de lə ʃɑ̃.tje/', 'luh gar-DYEHⁿ | a ruh-fü-ZAY | la lee-vreh-ZOHⁿ | suh ruh-FÜ | a ruh-tar-DAY | luh shahⁿ-TYAY',
    'Le gardien a refusé la livraison. Ce ___ a retardé le chantier. (le nom de refuser)',
    'Refuser donne le refus, un nom court. Ce refus résume toute la première phrase. EN: ce refus sums up the first sentence.',
    ['resume', 'nominalisation'], FCVDR),
  gap(2129, 'Plusieurs locataires ont déménagé. Ces départs ont libéré trois logements.', 'Several tenants have moved out. These departures have freed three flats.',
    '/ply.zjœʁ lɔ.ka.tɛʁ ɔ̃ de.me.na.ʒe se de.paʁ ɔ̃ li.be.ʁe tʁwa lɔʒ.mɑ̃/', 'plü-ZYUHR lo-ka-TEHR | ohⁿ day-may-na-ZHAY | say day-PAR | ohⁿ lee-bay-RAY | trwa lozh-MAHⁿ',
    'Plusieurs locataires ont déménagé. Ces ___ ont libéré trois logements. (le nom de partir, au pluriel)',
    'Partir donne le départ ; plusieurs locataires, donc ces départs. EN: ces départs, plural.',
    ['resume', 'nominalisation']),
  sent(2130, 'Les fenêtres seront changées en mai ; ce remplacement réduira la facture de chauffage.', 'The windows will be changed in May; this replacement will cut the heating bill.',
    '/le fə.nɛtʁ sə.ʁɔ̃ ʃɑ̃.ʒe ɑ̃ mɛ sə ʁɑ̃.plas.mɑ̃ ʁe.dɥi.ʁa la fak.tyʁ də ʃo.faʒ/', 'lay fuh-NETR | suh-rohⁿ shahⁿ-zhay ahⁿ MEH | suh rahⁿ-plass-MAHⁿ | ray-dwee-RA | la fak-TÜR | duh shoh-FAZH', ['resume', 'nominalisation']),
  sent(2131, 'La pianiste Inès Morel avait neuf ans à son premier concert ; l’enfant jouait déjà sans partition.', 'The pianist Inès Morel was nine at her first concert; the child was already playing without a score.',
    '/la pja.nist i.nɛs mɔ.ʁɛl a.vɛ nœ.vɑ̃ a sɔ̃ pʁə.mje kɔ̃.sɛʁ lɑ̃.fɑ̃ ʒwɛ de.ʒa sɑ̃ paʁ.ti.sjɔ̃/', 'la pya-NEEST | ee-ness mo-REL | a-veh nuh-VAHⁿ | a sohⁿ pruh-myay kohⁿ-SEHR | lahⁿ-FAHⁿ | zhweh day-ZHA | sahⁿ par-tee-SYOHⁿ', ['hyperonyme', 'personne']),
  sent(2132, 'Le chien des voisins aboie toute la nuit ; l’animal reste seul jusqu’à minuit.', 'The neighbours’ dog barks all night; the animal is left alone until midnight.',
    '/lə ʃjɛ̃ de vwa.zɛ̃ a.bwa tut la nɥi la.ni.mal ʁɛst sœl ʒys.ka mi.nɥi/', 'luh SHYEHⁿ day vwa-ZEHⁿ | a-BWA | toot la NWEE | la-nee-MAL | rest SUHL | zhüs-ka mee-NWEE', ['hyperonyme', 'animal']),
  sent(2133, 'La ville a fermé la piscine pour l’été. Cette fermeture inquiète les familles.', 'The town has closed the pool for the summer. This closure worries families.',
    '/la vil a fɛʁ.me la pi.sin puʁ le.te sɛt fɛʁ.mə.tyʁ ɛ̃.kjɛt le fa.mij/', 'la VEEL | a fehr-MAY | la pee-SEENN | poor lay-TAY | set fehr-muh-TÜR | ehⁿ-KYET | lay fa-MEEY', ['resume', 'nominalisation']),
];

/* ── ACT 9 · LEDIT, SUSDIT, LE CAS ÉCHÉANT (.2135-.2149) ──────────────────── */

export const ACT9_ROWS: Row[] = [
  phrase(2135, 'ledit, ladite, lesdits, lesdites', 'the said, the aforementioned',
    '/lə.di la.dit le.di le.dit/', 'luh-DEE | la-DEET | lay-DEE | lay-DEET', ['ledit', 'formes'], FCVR, { register: SOU }),
  sent(2136, 'Le locataire signale une fuite ; ladite fuite provient de l’appartement du dessus.', 'The tenant reports a leak; the said leak comes from the flat above.',
    '/lə lɔ.ka.tɛʁ si.ɲal yn fɥit la.dit fɥit pʁɔ.vjɛ̃ də la.paʁ.tə.mɑ̃ dy də.sy/', 'luh lo-ka-TEHR | see-NYAL ün FWEET | la-deet FWEET | pro-VYEHⁿ | duh la-par-tuh-MAHⁿ | dü duh-SÜ', ['ledit', 'feminin'], FCVDR, { register: SOU }),
  sent(2137, 'Les contrats sont joints ; lesdits contrats doivent être signés avant le 15 mai.', 'The contracts are attached; the said contracts must be signed before 15 May.',
    '/le kɔ̃.tʁa sɔ̃ ʒwɛ̃ le.di kɔ̃.tʁa dwav.tɛtʁ si.ɲe a.vɑ̃ lə kɛ̃z mɛ/', 'lay kohⁿ-TRA | sohⁿ ZHWEHⁿ | lay-dee kohⁿ-TRA | dwav-tetr see-NYAY | a-vahⁿ luh kehⁿz MEH', ['ledit', 'pluriel'], FCVR, { register: SOU }),
  sent(2138, 'Le propriétaire du véhicule est prié de déplacer ledit véhicule.', 'The owner of the vehicle is requested to move the said vehicle.',
    '/lə pʁɔ.pʁi.je.tɛʁ dy ve.i.kyl ɛ pʁi.je də de.pla.se lə.di ve.i.kyl/', 'luh pro-pree-yay-TEHR | dü vay-ee-KÜL | eh pree-YAY | duh day-pla-SAY | luh-dee vay-ee-KÜL', ['ledit', 'masculin'], FCVR, { register: SOU }),
  sent(2139, 'Toute réclamation relative audit règlement doit être écrite.', 'Any complaint regarding the said regulation must be in writing.',
    '/tut ʁe.kla.ma.sjɔ̃ ʁə.la.tiv o.di ʁɛ.ɡlə.mɑ̃ dwa.tɛtʁ e.kʁit/', 'toot ray-kla-ma-SYOHⁿ | ruh-la-TEEV | oh-dee reh-gluh-MAHⁿ | dwa-tetr ay-KREET', ['ledit', 'audit'], FCVDR, { register: SOU }),
  sent(2140, 'Les membres dudit comité sont élus pour deux ans.', 'The members of the said committee are elected for two years.',
    '/le mɑ̃bʁ dy.di kɔ.mi.te sɔ̃.te.ly puʁ dø.zɑ̃/', 'lay MAHⁿBR | dü-dee ko-mee-TAY | sohⁿ-tay-LÜ | poor deu-ZAHⁿ', ['ledit', 'dudit'], FCVR, { register: SOU }),
  phrase(2141, 'susdit, susmentionné, précité', 'aforesaid, above-mentioned, aforementioned',
    '/sys.di sys.mɑ̃.sjɔ.ne pʁe.si.te/', 'süs-DEE | süs-mahⁿ-syo-NAY | pray-see-TAY', ['susdit', 'formes'], FCVR, { register: SOU }),
  sent(2142, 'Le rapport précité ne mentionne pas le local à vélos.', 'The aforementioned report does not mention the bike room.',
    '/lə ʁa.pɔʁ pʁe.si.te nə mɑ̃.sjɔn pa lə lɔ.kal a ve.lo/', 'luh ra-POR pray-see-TAY | nuh mahⁿ-SYONN pa | luh lo-kal a vay-LOH', ['susdit', 'precite'], FCVR, { register: SOU }),
  sent(2143, 'Joignez, le cas échéant, l’attestation de votre employeur.', 'Attach, where applicable, your employer’s certificate.',
    '/ʒwa.ɲe lə ka e.ʃe.ɑ̃ la.tɛs.ta.sjɔ̃ də vɔ.tʁɑ̃.plwa.jœʁ/', 'zhwa-NYAY | luh KA ay-shay-AHⁿ | la-tes-ta-SYOHⁿ | duh vo-trahⁿ-plwa-YUHR', ['condition', 'cas-echeant'], FCVDR, { register: SOU }),
  sent(2144, 'Si votre demande est acceptée, vous recevrez une clé ; dans le cas contraire, vous serez remboursé.', 'If your application is accepted, you will receive a key; otherwise, you will be refunded.',
    '/si vɔtʁ də.mɑ̃d ɛ.tak.sɛp.te vu ʁə.sə.vʁe yn kle dɑ̃ lə ka kɔ̃.tʁɛʁ vu sə.ʁe ʁɑ̃.buʁ.se/', 'see votr duh-MAHⁿD | eh-tak-sep-TAY | voo ruh-suh-VRAY ün KLAY | dahⁿ luh ka kohⁿ-TREHR | voo suh-ray rahⁿ-boor-SAY', ['condition', 'cas-contraire'], FCVR, { register: SOU }),
  sent(2145, 'Avez-vous un animal ? Si oui, précisez lequel.', 'Do you have a pet? If so, state which.',
    '/a.ve.vu œ̃.na.ni.mal si wi pʁe.si.ze lə.kɛl/', 'a-vay-VOO | uhⁿ-na-nee-MAL | see WEE | pray-see-zay luh-KEL', ['condition', 'si-oui']),
  sent(2146, 'Si tel est le cas, merci de nous prévenir.', 'If that is the case, please let us know.',
    '/si tɛ.lɛ lə ka mɛʁ.si də nu pʁe.və.niʁ/', 'see teh-leh luh KA | mehr-SEE | duh noo pray-vuh-NEER', ['condition', 'tel'], FCVR, { register: SOU }),
  rule(2147, 'Ledit reprend un nom déjà nommé ; le cas échéant tait toute une condition.', 'Ledit picks up a noun already named; le cas échéant leaves a whole condition unsaid.',
    '/lə.di ʁə.pʁɑ̃ œ̃ nɔ̃ de.ʒa nɔ.me lə ka e.ʃe.ɑ̃ tɛ tu.ty.nə kɔ̃.di.sjɔ̃/', 'luh-DEE ruh-PRAHⁿ | uhⁿ nohⁿ day-zha no-MAY | luh KA ay-shay-AHⁿ | teh too-tü-nuh kohⁿ-dee-SYOHⁿ',
    'Que veut dire « le cas échéant » dans « Joignez, le cas échéant, une attestation » ?',
    'Si le cas se présente : si tu es concerné. La condition n’est pas répétée ; le lecteur la retrouve dans ce qui précède. Ce n’est ni en tout cas ni finalement.',
    ['ledit', 'condition']),
  gap(2148, 'Ladite somme vous sera remboursée sous un mois.', 'The said sum will be refunded to you within a month.',
    '/la.dit sɔm vu sə.ʁa ʁɑ̃.buʁ.se su.zœ̃ mwa/', 'la-deet SOMM | voo suh-ra rahⁿ-boor-SAY | soo-zuhⁿ MWA',
    '___ somme vous sera remboursée sous un mois. (reprends « la somme de deux cents dollars », style officiel)',
    'Ladite : la et dite en un seul mot, au féminin. EN: one word, feminine.',
    ['ledit', 'feminin'], FCVR, { register: SOU }),
  sent(2149, 'Ledit cousin est reparti avec mon parapluie.', 'The said cousin went off with my umbrella.',
    '/lə.di ku.zɛ̃ ɛ ʁə.paʁ.ti a.vɛk mɔ̃ pa.ʁa.plɥi/', 'luh-dee koo-ZEHⁿ | eh ruh-par-TEE | a-vek mohⁿ pa-ra-PLWEE', ['ledit', 'ironie']),
];

/* ── ACT 10 · QUI EST « ELLE » ? (.2151-.2165) ────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(2151, 'Marie a téléphoné à sa sœur quand elle est rentrée de Lyon.', 'Marie phoned her sister when she got back from Lyon (ambiguous: Marie or her sister?).',
    '/ma.ʁi a te.le.fɔ.ne a sa sœʁ kɑ̃.tɛ.lɛ ʁɑ̃.tʁe də ljɔ̃/', 'ma-REE | a tay-lay-fo-NAY | a sa SUHR | kahⁿ-teh-leh rahⁿ-TRAY | duh LYOHⁿ', ['ambiguite', 'ambigu'], FC),
  sent(2152, 'Marie a téléphoné à sa sœur quand cette dernière est rentrée de Lyon.', 'Marie phoned her sister when the latter got back from Lyon.',
    '/ma.ʁi a te.le.fɔ.ne a sa sœʁ kɑ̃ sɛt dɛʁ.njɛʁ ɛ ʁɑ̃.tʁe də ljɔ̃/', 'ma-REE | a tay-lay-fo-NAY | a sa SUHR | kahⁿ set dehr-NYEHR | eh rahⁿ-TRAY | duh LYOHⁿ', ['ambiguite', 'ce-dernier'], FCVDR),
  sent(2153, 'De retour de Lyon, Marie a téléphoné à sa sœur.', 'Back from Lyon, Marie phoned her sister.',
    '/də ʁə.tuʁ də ljɔ̃ ma.ʁi a te.le.fɔ.ne a sa sœʁ/', 'duh ruh-TOOR duh LYOHⁿ | ma-REE | a tay-lay-fo-NAY | a sa SUHR', ['ambiguite', 'construction'], FCVDR),
  sent(2154, 'Paul a croisé Marc avec sa femme.', 'Paul ran into Marc with his wife (ambiguous: whose wife?).',
    '/pɔl a kʁwa.ze maʁk a.vɛk sa fam/', 'POL a krwa-ZAY MARK | a-vek sa FAMM', ['ambiguite', 'ambigu'], FC),
  sent(2155, 'Paul a croisé Marc avec la femme de ce dernier.', 'Paul ran into Marc with Marc’s wife.',
    '/pɔl a kʁwa.ze maʁk a.vɛk la fam də sə dɛʁ.nje/', 'POL a krwa-ZAY MARK | a-vek la FAMM | duh suh dehr-NYAY', ['ambiguite', 'ce-dernier']),
  sent(2156, 'Paul et sa femme ont croisé Marc.', 'Paul and his wife ran into Marc.',
    '/pɔl e sa fam ɔ̃ kʁwa.ze maʁk/', 'POL ay sa FAMM | ohⁿ krwa-zay MARK', ['ambiguite', 'construction']),
  sent(2157, 'Le gérant a reçu le plombier, qui avait oublié ses outils.', 'The manager saw the plumber, who had forgotten his tools.',
    '/lə ʒe.ʁɑ̃ a ʁə.sy lə plɔ̃.bje ki a.vɛ u.bli.je se.zu.ti/', 'luh zhay-RAHⁿ | a ruh-SÜ | luh plohⁿ-BYAY | kee a-veh oo-blee-YAY | say-zoo-TEE', ['ambiguite', 'relative']),
  sent(2158, 'La présidente a écrit à la trésorière pour lui dire qu’elle démissionnait.', 'The president wrote to the treasurer to tell her she was resigning (ambiguous: which of them?).',
    '/la pʁe.zi.dɑ̃t a e.kʁi a la tʁe.zɔ.ʁjɛʁ puʁ lɥi diʁ kɛl de.mi.sjɔ.nɛ/', 'la pray-zee-DAHⁿT | a ay-KREE | a la tray-zo-RYEHR | poor lwee DEER | kel day-mee-syo-NEH', ['ambiguite', 'ambigu'], FC),
  sent(2159, 'La présidente a écrit à la trésorière pour lui annoncer sa propre démission.', 'The president wrote to the treasurer to announce her own resignation.',
    '/la pʁe.zi.dɑ̃t a e.kʁi a la tʁe.zɔ.ʁjɛʁ puʁ lɥi a.nɔ̃.se sa pʁɔpʁ de.mi.sjɔ̃/', 'la pray-zee-DAHⁿT | a ay-KREE | a la tray-zo-RYEHR | poor lwee a-nohⁿ-SAY | sa propr day-mee-SYOHⁿ', ['ambiguite', 'propre']),
  sent(2160, 'La présidente a écrit à la trésorière, qui lui a annoncé sa démission.', 'The president wrote to the treasurer, who then announced her own resignation to her.',
    '/la pʁe.zi.dɑ̃t a e.kʁi a la tʁe.zɔ.ʁjɛʁ ki lɥi a a.nɔ̃.se sa de.mi.sjɔ̃/', 'la pray-zee-DAHⁿT | a ay-KREE | a la tray-zo-RYEHR | kee lwee a a-nohⁿ-SAY | sa day-mee-SYOHⁿ', ['ambiguite', 'relative']),
  rule(2161, 'Si deux noms peuvent répondre au pronom, change d’outil.', 'If two nouns could answer the pronoun, change tools.',
    '/si dø nɔ̃ pœv ʁe.pɔ̃dʁ o pʁɔ.nɔ̃ ʃɑ̃ʒ du.til/', 'see deu NOHⁿ | puhv ray-POHⁿDR | oh pro-NOHⁿ | shahⁿzh doo-TEEL',
    '« Marie a téléphoné à sa sœur quand elle est rentrée. » Qui est rentrée ?',
    'On ne peut pas le savoir. Répète le nom (quand sa sœur est rentrée), écris cette dernière, ou change la construction : de retour de Lyon, Marie a téléphoné à sa sœur.',
    ['ambiguite']),
  gap(2162, 'Léa a prêté sa voiture à Nina, mais cette dernière ne la lui a pas rendue.', 'Léa lent her car to Nina, but the latter has not given it back.',
    '/le.a a pʁɛ.te sa vwa.tyʁ a ni.na mɛ sɛt dɛʁ.njɛʁ nə la lɥi a pa ʁɑ̃.dy/', 'lay-A | a preh-TAY | sa vwa-TÜR | a nee-NA | meh set dehr-NYEHR | nuh la lwee a pa rahⁿ-DÜ',
    'Léa a prêté sa voiture à Nina, mais ___ ne la lui a pas rendue. (Nina, sans répéter son nom)',
    'Cette dernière : le dernier nom cité, Nina. Elle aurait pu être Léa. EN: cette dernière points to Nina, elle would not.',
    ['ambiguite', 'ce-dernier'], FCVDR),
  sent(2163, 'Le directeur a rencontré l’architecte, et c’est ce dernier qui a proposé de reporter le chantier.', 'The director met the architect, and it was the architect who proposed postponing the works.',
    '/lə di.ʁɛk.tœʁ a ʁɑ̃.kɔ̃.tʁe laʁ.ʃi.tɛkt e sɛ sə dɛʁ.nje ki a pʁɔ.po.ze də ʁə.pɔʁ.te lə ʃɑ̃.tje/', 'luh dee-rek-TUHR | a rahⁿ-kohⁿ-TRAY | lar-shee-TEKT | ay seh suh dehr-NYAY | kee a pro-poh-ZAY | duh ruh-por-tay luh shahⁿ-TYAY', ['ambiguite', 'ce-dernier']),
  sent(2164, 'Hugo a dit à son frère qu’il avait gagné.', 'Hugo told his brother he had won (ambiguous: which of them?).',
    '/y.ɡo a di a sɔ̃ fʁɛʁ ki.la.vɛ ɡa.ɲe/', 'ü-GOH | a DEE | a sohⁿ FREHR | kee-la-veh ga-NYAY', ['ambiguite', 'ambigu'], FC),
  sent(2165, 'Hugo a dit à son frère : « J’ai gagné. »', 'Hugo told his brother: « I won. »',
    '/y.ɡo a di a sɔ̃ fʁɛʁ ʒe ɡa.ɲe/', 'ü-GOH | a DEE | a sohⁿ FREHR | zhay ga-NYAY', ['ambiguite', 'discours-direct']),
];

/* ── ACT 11 · SUIVRE LE FIL (.2167-.2181) ─────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(2167, 'Chaque samedi, des bénévoles réparent gratuitement les appareils qu’on leur apporte.', 'Every Saturday, volunteers repair for free the appliances people bring them.',
    '/ʃak sam.di de be.ne.vɔl ʁe.paʁ ɡʁa.tɥit.mɑ̃ le.za.pa.ʁɛj kɔ̃ lœʁ a.pɔʁt/', 'shak sam-DEE | day bay-nay-VOL | ray-par gra-tweet-MAHⁿ | lay-za-pa-REHY | kohⁿ luhr a-PORT', ['fil', 'lecture']),
  sent(2168, 'Ce rendez-vous attire plus de monde que ses fondateurs ne l’espéraient.', 'This weekly meeting draws more people than its founders hoped.',
    '/sə ʁɑ̃.de.vu a.tiʁ ply də mɔ̃d kə se fɔ̃.da.tœʁ nə lɛs.pe.ʁɛ/', 'suh rahⁿ-day-VOO | a-TEER | plü duh MOHⁿD | kuh say fohⁿ-da-TUHR | nuh les-pay-REH', ['fil', 'neutre'], FCVDR),
  sent(2169, 'Les uns viennent avec un grille-pain, les autres avec une lampe ou un vélo.', 'Some come with a toaster, others with a lamp or a bike.',
    '/le.zœ̃ vjɛn a.vɛ.kœ̃ ɡʁij.pɛ̃ le.zotʁ a.vɛ.kyn lɑ̃p u œ̃ ve.lo/', 'lay-ZUHⁿ | VYENN | a-veh-kuhⁿ greey-PEHⁿ | lay-ZOHTR | a-veh-kün LAHⁿP | oo uhⁿ vay-LOH', ['fil', 'ellipse']),
  sent(2170, 'Certains objets repartent réparés, d’autres non.', 'Some objects leave repaired, others do not.',
    '/sɛʁ.tɛ̃.zɔb.ʒɛ ʁə.paʁt ʁe.pa.ʁe do.tʁə nɔ̃/', 'sehr-tehⁿ-zob-ZHEH | ruh-PART ray-pa-RAY | doh-truh NOHⁿ', ['fil', 'ellipse'], FCVDR),
  sent(2171, 'Odile Ferland, ancienne électricienne, accueille les visiteurs ; c’est elle qui a lancé l’initiative.', 'Odile Ferland, a former electrician, welcomes the visitors; she is the one who started the initiative.',
    '/ɔ.dil fɛʁ.lɑ̃ ɑ̃.sjɛ.ne.lɛk.tʁi.sjɛn a.kœj le vi.zi.tœʁ sɛ.tɛl ki a lɑ̃.se li.ni.sja.tiv/', 'o-DEEL fehr-LAHⁿ | ahⁿ-syeh-nay-lek-tree-SYENN | a-KUHY lay vee-zee-TUHR | seh-TEL kee a lahⁿ-SAY | lee-nee-sya-TEEV', ['fil', 'lecture']),
  sent(2172, 'Celle-ci ne coûte presque rien à la ville.', 'It costs the town almost nothing.',
    '/sɛl.si nə kut pʁɛsk ʁjɛ̃ a la vil/', 'sel-SEE | nuh koot presk RYEHⁿ | a la VEEL', ['fil', 'celle-ci']),
  sent(2173, 'Si possible, apportez la notice de l’appareil.', 'If possible, bring the appliance’s instructions.',
    '/si pɔ.sibl a.pɔʁ.te la nɔ.tis də la.pa.ʁɛj/', 'see po-SEEBL | a-por-TAY | la no-TEES | duh la-pa-REHY', ['fil', 'ellipse-etre']),
  sent(2174, 'Une fois l’objet réparé, le visiteur est invité à laisser un don.', 'Once the object is repaired, the visitor is invited to leave a donation.',
    '/yn fwa lɔb.ʒɛ ʁe.pa.ʁe lə vi.zi.tœʁ ɛ.tɛ̃.vi.te a le.se œ̃ dɔ̃/', 'ün fwa lob-ZHEH ray-pa-RAY | luh vee-zee-TUHR | eh-tehⁿ-vee-TAY | a leh-SAY uhⁿ DOHⁿ', ['fil', 'ellipse-etre'], FCVDR),
  sent(2175, 'Faut-il ouvrir un second atelier ? Les bénévoles le souhaitent ; la ville, pas encore.', 'Should a second workshop open? The volunteers want one; the town, not yet.',
    '/fo.ti.lu.vʁiʁ œ̃ sə.ɡɔ̃.ta.tə.lje le be.ne.vɔl lə swɛt la vil pa.zɑ̃.kɔʁ/', 'foh-tee-loo-VREER | uhⁿ suh-gohⁿ-ta-tuh-LYAY | lay bay-nay-VOL | luh SWET | la VEEL | pa-zahⁿ-KOR', ['fil', 'neutre']),
  sent(2176, 'Odile Ferland répare plus vite que les jeunes bénévoles ne le font.', 'Odile Ferland repairs faster than the young volunteers do.',
    '/ɔ.dil fɛʁ.lɑ̃ ʁe.paʁ ply vit kə le ʒœn be.ne.vɔl nə lə fɔ̃/', 'o-DEEL fehr-LAHⁿ | ray-PAR plü VEET | kuh lay zhuhnn bay-nay-VOL | nuh luh FOHⁿ', ['fil', 'faire']),
  rule(2177, 'À chaque reprise, demande-toi ce qui est repris, et où.', 'At each reprise, ask yourself what is picked up, and where.',
    '/a ʃak ʁə.pʁiz də.mɑ̃d.twa sə ki ɛ ʁə.pʁi e u/', 'a shak ruh-PREEZ | duh-mahⁿd-TWA | suh kee eh ruh-PREE | ay OO',
    'À quoi renvoie « celle-ci » dans « … a lancé l’initiative. Celle-ci ne coûte presque rien » ?',
    'À l’initiative : le seul nom féminin singulier qui donne un sens à la phrase. Vérifie toujours en remettant le nom à la place du pronom.',
    ['fil']),
  sent(2178, 'Dans un contrat, on répète le nom plutôt que de risquer un doute.', 'In a contract, you repeat the noun rather than risk any doubt.',
    '/dɑ̃.zœ̃ kɔ̃.tʁa ɔ̃ ʁe.pɛt lə nɔ̃ ply.to kə də ʁis.ke œ̃ dut/', 'dahⁿ-zuhⁿ kohⁿ-TRA | ohⁿ ray-PET luh NOHⁿ | plü-toh kuh duh rees-KAY uhⁿ DOOT', ['fil', 'repetition']),
  sent(2179, 'Trop de synonymes égarent le lecteur autant qu’une répétition le lasse.', 'Too many synonyms lose the reader as surely as repetition tires him.',
    '/tʁo də si.nɔ.nim e.ɡaʁ lə lɛk.tœʁ o.tɑ̃ kyn ʁe.pe.ti.sjɔ̃ lə las/', 'troh duh see-no-NEEMM | ay-GAR luh lek-TUHR | oh-tahⁿ kün ray-pay-tee-SYOHⁿ | luh LASS', ['fil', 'repetition'], FCVR, { register: SOU }),
  sent(2180, 'Une fois le paragraphe écrit, relis chaque pronom.', 'Once the paragraph is written, reread every pronoun.',
    '/yn fwa lə pa.ʁa.ɡʁa.fe.kʁi ʁə.li ʃak pʁɔ.nɔ̃/', 'ün fwa luh pa-ra-gra-fay-KREE | ruh-LEE | shak pro-NOHⁿ', ['fil', 'ellipse-etre']),
  sent(2181, 'Quoique fatiguée, elle ne manque jamais un samedi.', 'Though tired, she never misses a Saturday.',
    '/kwa.kə fa.ti.ɡe ɛl nə mɑ̃k ʒa.mɛ œ̃ sam.di/', 'kwa-kuh fa-tee-GAY | el nuh mahⁿk zha-meh uhⁿ sam-DEE', ['fil', 'ellipse-etre'], FCVR, { register: SOU }),
];

/* ── ACT 12 · TON COMPTE RENDU (.2183-.2192) ──────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(2183, 'Les uns ont plaidé pour un report, les autres pour un vote immédiat.', 'Some argued for a postponement, others for an immediate vote.',
    '/le.zœ̃ ɔ̃ ple.de puʁ œ̃ ʁə.pɔʁ le.zotʁ puʁ œ̃ vɔt i.me.dja/', 'lay-ZUHⁿ | ohⁿ pleh-DAY | poor uhⁿ ruh-POR | lay-ZOHTR | poor uhⁿ vot ee-may-DYA', ['compte-rendu', 'ellipse'], FCVDR),
  sent(2184, 'Mme Duval était favorable à la proposition ; M. Hébert ne l’était pas.', 'Mrs Duval was in favour of the proposal; Mr Hébert was not.',
    '/ma.dam dy.val e.tɛ fa.vɔ.ʁabl a la pʁɔ.po.zi.sjɔ̃ mə.sjø e.bɛʁ nə le.tɛ pa/', 'ma-DAMM dü-VAL | ay-teh fa-vo-RABL | a la pro-poh-zee-SYOHⁿ | muh-SYEU ay-BEHR | nuh lay-teh PA', ['compte-rendu', 'neutre']),
  sent(2185, 'Comme le conseil l’avait annoncé, les travaux commenceront en septembre.', 'As the board had announced, the works will begin in September.',
    '/kɔm lə kɔ̃.sɛj la.vɛ.ta.nɔ̃.se le tʁa.vo kɔ.mɑ̃s.ʁɔ̃ ɑ̃ sɛp.tɑ̃bʁ/', 'kom luh kohⁿ-SEHY | la-veh-ta-nohⁿ-SAY | lay tra-VOH | ko-mahⁿs-ROHⁿ | ahⁿ sep-TAHⁿBR', ['compte-rendu', 'neutre']),
  sent(2186, 'Le premier devis dépasse le budget, le second non.', 'The first quote exceeds the budget, the second does not.',
    '/lə pʁə.mje də.vi de.pas lə byd.ʒɛ lə sə.ɡɔ̃ nɔ̃/', 'luh pruh-myay duh-VEE | day-PASS luh büd-ZHEH | luh suh-GOHⁿ | NOHⁿ', ['compte-rendu', 'ellipse']),
  sent(2187, 'Cette décision sera revue à l’automne, si nécessaire.', 'This decision will be reviewed in the autumn, if necessary.',
    '/sɛt de.si.zjɔ̃ sə.ʁa ʁə.vy a lo.tɔn si ne.se.sɛʁ/', 'set day-see-ZYOHⁿ | suh-ra ruh-VÜ | a loh-TONN | see nay-say-SEHR', ['compte-rendu', 'resume']),
  sent(2188, 'L’un des deux bénévoles coordonnera le chantier, mais on ne sait pas encore lequel.', 'One of the two volunteers will coordinate the works, but nobody knows yet which.',
    '/lœ̃ de dø be.ne.vɔl ko.ɔʁ.dɔn.ʁa lə ʃɑ̃.tje mɛ.zɔ̃ nə sɛ pa.zɑ̃.kɔʁ lə.kɛl/', 'LUHⁿ | day deu bay-nay-VOL | koh-or-donn-RA | luh shahⁿ-TYAY | meh-zohⁿ nuh seh pa-zahⁿ-kor luh-KEL', ['compte-rendu', 'question']),
  sent(2189, 'Le conseil s’était engagé à publier les comptes ; il l’a fait dès le lendemain.', 'The board had undertaken to publish the accounts; it did so the very next day.',
    '/lə kɔ̃.sɛj se.tɛ.tɑ̃.ɡa.ʒe a py.bli.je le kɔ̃t i.la fɛ dɛ lə lɑ̃d.mɛ̃/', 'luh kohⁿ-SEHY | say-teh-tahⁿ-ga-ZHAY | a pü-blee-YAY lay KOHⁿT | ee-la FEH | deh luh lahⁿd-MEHⁿ', ['compte-rendu', 'faire'], FCVDR),
  sent(2190, 'La salle commune sera rénovée ; celle du sous-sol attendra.', 'The common room will be renovated; the basement one will wait.',
    '/la sal kɔ.myn sə.ʁa ʁe.nɔ.ve sɛl dy su.sɔl a.tɑ̃.dʁa/', 'la sal ko-MÜNN | suh-ra ray-no-VAY | sel dü soo-SOL | a-tahⁿ-DRA', ['compte-rendu', 'celui']),
  sent(2191, 'Le cas échéant, une assemblée extraordinaire sera convoquée.', 'Should the need arise, an extraordinary general meeting will be called.',
    '/lə ka e.ʃe.ɑ̃ y.na.sɑ̃.ble ɛks.tʁa.ɔʁ.di.nɛʁ sə.ʁa kɔ̃.vɔ.ke/', 'luh KA ay-shay-AHⁿ | ü-na-sahⁿ-BLAY | eks-tra-or-dee-NEHR | suh-ra kohⁿ-vo-KAY', ['compte-rendu', 'condition'], FCVR, { register: SOU }),
  sent(2192, 'Ce compromis satisfait la plupart des membres, sinon tous.', 'This compromise satisfies most members, if not all.',
    '/sə kɔ̃.pʁɔ.mi sa.tis.fɛ la ply.paʁ de mɑ̃bʁ si.nɔ̃ tus/', 'suh kohⁿ-pro-MEE | sa-tees-FEH | la plü-PAR day MAHⁿBR | see-nohⁿ TOOS', ['compte-rendu', 'ellipse']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS (all « texte original écrit pour la leçon »)
 *
 *  The three long readings (C1: about 300 words), the official notice of act
 *  9 and the nine « dans un texte » paragraphs (80 to 130 words) that close
 *  acts 3 to 11. They live here so the reading, the quiz and the task cannot
 *  drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the minutes of a housing cooperative’s general meeting, Sherbrooke. */
export const LECTURE_CR =
  'Coopérative d’habitation Les Tilleuls, Sherbrooke. Compte rendu de l’assemblée du 12 mai, rédigé par Simon Gagné, secrétaire. Vingt-deux membres étaient présents, deux de plus qu’en avril. Comme je l’ai écrit dans le dernier compte rendu, la toiture doit être refaite avant l’hiver ; le conseil d’administration l’a confirmé. Premier point : la cour. Les uns voulaient un potager, les autres une aire de jeux. Mme Roy est favorable au jardin ; Mme Lavoie ne l’est pas, car elle craint le bruit. Ses voisins du rez-de-chaussée aussi. Après un long échange, l’assemblée a retenu une solution mixte, celle que proposait le comité des jeunes. Deuxième point : les arbres. Les trois érables de la cour sont malades ; ces arbres devront être abattus au printemps. La Ville en remplacera deux, nous le troisième. Le choix des nouvelles essences se fera à l’automne, celui de leur emplacement aussi. Troisième point : le budget. Le budget de cette année est plus serré que celui de l’an dernier, mais le comité avait promis de repeindre le hall, et il l’a fait sans dépasser l’enveloppe. Quatrième point : le local à vélos. Quelqu’un a laissé un vélo dans le local, mais personne ne sait qui ; il y est depuis l’automne. Si personne ne le réclame avant le 30 juin, ledit vélo sera donné à une association. Questions diverses. M. Tremblay a demandé si les places de stationnement seraient redistribuées et, si oui, selon quels critères. Le conseil étudiera la question et, le cas échéant, proposera une règle à la prochaine assemblée. Mme Lavoie a demandé que le compte rendu soit envoyé plus tôt ; le secrétaire s’y est engagé. La réunion a duré plus longtemps qu’on ne l’avait prévu : elle s’est terminée à 21 h 40. Prochaine assemblée : le 9 juin.';

/** Act 9: a notice from the cooperative’s board, posted in the lobby. */
export const AVIS_CONSEIL =
  'Avis du conseil d’administration. Objet : local à vélos et stationnement. Un vélo rouge sans propriétaire connu est stationné dans le local depuis octobre. Le propriétaire dudit vélo est prié de le retirer avant le 30 juin ; passé ce délai, ledit vélo sera donné à une association de quartier. Par ailleurs, une clé du local a été perdue. Toute personne qui retrouverait ladite clé est priée de la remettre au concierge. Les membres sont invités à relire le règlement intérieur et à se conformer audit règlement, notamment à son article quatre, précité dans notre avis de mars. Enfin, les locataires qui souhaitent une place de stationnement remplissent le formulaire ci-joint et y joignent, le cas échéant, une attestation de leur employeur. Les demandes incomplètes seront retournées ; dans le cas contraire, une réponse sera donnée sous un mois. Le conseil d’administration.';

/** Act 11: a local paper’s portrait of a repair café, Sherbrooke. */
export const LECTURE_FIL =
  'Au café-réparation de la rue Wellington, on ne jette plus. Chaque samedi, des bénévoles réparent gratuitement les appareils qu’on leur apporte. Ce rendez-vous, né il y a trois ans dans une salle paroissiale, attire plus de monde que ses fondateurs ne l’espéraient. Les uns viennent avec un grille-pain, les autres avec une lampe ou un vélo. Certains objets repartent réparés, d’autres non, mais personne ne repart sans avoir appris quelque chose. Les plus jeunes visiteurs ont douze ans, les plus âgés plus de quatre-vingts. Odile Ferland, ancienne électricienne, accueille les visiteurs ; c’est elle qui a lancé l’initiative. Celle-ci ne coûte presque rien à la ville : le local est prêté, les outils ont été donnés, et les pièces sont payées par ceux qui en ont besoin. À soixante-douze ans, la retraitée répare plus vite que les jeunes bénévoles ne le font, et elle le leur rappelle volontiers. Quoique fatiguée certains soirs, elle ne manque jamais un samedi. Sa règle est simple : on répare avec le visiteur, pas à sa place. Celui-ci tient la lampe, dévisse, cherche la panne ; la bénévole explique. Si possible, apportez la notice de l’appareil, recommande-t-elle, et surtout, ne venez pas pressé. Une fois l’objet réparé, le visiteur est invité à laisser un don. Ce geste reste libre, et la plupart le font. Le samedi de la rentrée, quarante objets ont été déposés ; trente-deux sont repartis en état de marche, les huit autres attendent une pièce. Reste une question : faut-il ouvrir un second atelier ? Les bénévoles le souhaitent ; la ville, pas encore. Elle attend un bilan, et Odile Ferland le lui fournira en septembre, chiffres à l’appui. D’ici là, la file d’attente du samedi parle pour elle.';

/** Act 12: the model the learner imitates, minutes of a meeting. */
export const LECTURE_MODELE =
  'Coopérative d’habitation Les Tilleuls. Compte rendu de l’assemblée extraordinaire du 2 juin sur la buanderie, rédigé par Camille Ouellet. Dix-neuf membres étaient présents, trois de moins qu’en mai. Comme le conseil l’avait annoncé, la buanderie du sous-sol doit être rénovée : deux machines sur quatre sont hors service, et les deux autres le seront bientôt, d’après le technicien. Deux devis ont été présentés. Le premier dépasse le budget, le second non ; celui-ci prévoit toutefois des machines d’occasion. Les uns ont plaidé pour un report, les autres pour un vote immédiat. Mme Duval était favorable à la proposition la moins chère ; M. Hébert ne l’était pas, car il doute de la fiabilité des machines d’occasion. Il a demandé que le fournisseur garantisse les appareils deux ans, et le fournisseur l’a fait le jour même, par courriel. Cette garantie a convaincu une partie de la salle. Mme Duval a rappelé que les anciennes machines avaient été achetées neuves, et qu’elles n’avaient pas mieux tenu : une machine neuve, selon elle, n’est pas une garantie en soi. Après un vote à main levée, le second devis a été retenu par quatorze voix contre cinq. Ce compromis satisfait la plupart des membres, sinon tous. Les travaux commenceront le 15 juillet et dureront une semaine ; pendant ce temps, la buanderie de l’immeuble voisin nous sera ouverte, et celle de la rue King aussi, à prix réduit. Les membres qui ont des besoins particuliers, par exemple une famille avec un nourrisson, sont invités à le signaler au conseil, qui étudiera chaque cas. L’un des deux bénévoles coordonnera le chantier, mais on ne sait pas encore lequel. Le cas échéant, une assemblée extraordinaire sera convoquée. Prochaine assemblée ordinaire : le 8 septembre.';

/** The nine « dans un texte » paragraphs (acts 3 to 11). */
export const TEXTE_A3 =
  'Julie écrit à son équipe. Complète chaque blanc avec le pronom qui reprend l’idée, ou laisse-le vide s’il n’en faut pas. « Bonjour à tous. Comme je (…) ai dit vendredi, le déménagement du bureau aura lieu le 3 mars. Je sais que la date est serrée, et la direction (…) sait aussi. Le budget couvre, comme prévu (…), les cartons et le transport. Le nouveau local est plus grand qu’on ne (…) croit. Si vous (…) voulez, nous le visiterons jeudi. Je vous (…) avais promis : chacun aura une fenêtre. »';

export const TEXTE_A4 =
  'Marc relit son courriel avant de l’envoyer. Réécris-le sans répéter les verbes : faire et le pronom qu’il faut pour un verbe d’action, être ou avoir quand le verbe est l’un des deux. « Salut Léo. Tu m’avais promis de vérifier les comptes : as-tu vérifié les comptes ? Inès range le local plus vite que je range le local. Elle est plus organisée que je suis organisé, c’est vrai. Elle a plus de patience que j’ai de la patience. Si tu ne peux pas appeler le fournisseur, j’appellerai le fournisseur demain. »';

export const TEXTE_A5 =
  'Résultats du sondage sur la cour. Allège le paragraphe : supprime chaque verbe répété, et mets une virgule à sa place quand il le faut. « Les familles veulent une aire de jeux ; les retraités veulent des bancs. Le premier étage a voté pour le potager ; le deuxième étage a voté contre le potager. Mme Roy est favorable aux bancs ; M. Tremblay n’est pas favorable aux bancs. Trente locataires ont répondu ; douze locataires n’ont pas répondu. »';

export const TEXTE_A6 =
  'Une note laissée par le concierge. Raccourcis chaque question entre crochets : garde seulement le mot interrogatif. « Quelqu’un a laissé une poussette dans l’entrée, mais je ne sais pas [qui a laissé une poussette]. Le livreur repassera, mais il n’a pas dit [quand il repasserait]. Une des deux clés du local ne marche plus ; je cherche [quelle clé ne marche plus]. Le chauffage s’est arrêté cette nuit, et je ne sais pas [pourquoi il s’est arrêté]. Il manque quelque chose sur le tableau d’affichage, mais je ne vois pas [ce qui manque]. »';

export const TEXTE_A7 =
  'Un extrait du rapport annuel. Complète chaque blanc avec celui, celle, ceux ou celles. « Deux devis ont été reçus : (…) de l’entreprise Morin et (…) de Bâtisol. Le premier est plus élevé que (…) de l’an passé. Les demandes des familles ont toutes été satisfaites ; (…) des retraités, pas encore. Le conseil remercie (…) qui ont donné de leur temps. Cette année a fait apparaître un problème nouveau, (…) du stationnement. »';

export const TEXTE_A8 =
  'Le concierge rédige son rapport de la semaine. Réécris-le en reprenant chaque groupe répété par un nom plus large ou par un nom qui résume. « Un bouleau est tombé dans la cour dimanche. Le bouleau a abîmé deux voitures. Le conseil a décidé de couper les deux autres bouleaux. Que le conseil ait décidé de couper les deux autres bouleaux a soulagé les locataires. La société Élagex interviendra mardi. La société Élagex facturera huit cents dollars. »';

export const TEXTE_A9 =
  'Un second avis du conseil, à compléter. Complète chaque blanc avec ledit, ladite, lesdits, dudit, audit ou le cas échéant. « Un vélo bleu est stationné dans le local depuis novembre. Le propriétaire (…) vélo est prié de le retirer avant le 31 juillet. Passé ce délai, (…) vélo sera donné. Une carte d’accès a été trouvée dans l’ascenseur : (…) carte est disponible chez le concierge. Le règlement intérieur a été modifié en mars ; les membres sont priés de se conformer (…) règlement. Ils signaleront, (…), tout objet abandonné. »';

export const TEXTE_A10 =
  'Ce message de Nadia prête à confusion. Réécris chaque phrase pour qu’un seul sens soit possible. « Hier, Claire a croisé Sophie à la piscine ; elle venait de s’inscrire au cours du soir. Le gérant a appelé le plombier pendant qu’il dînait. Paul a prêté sa perceuse à Marc, qui l’a perdue. La présidente a dit à la trésorière qu’elle avait fait une erreur dans les comptes. »';

export const TEXTE_A11 =
  'Un paragraphe lourd, à réécrire pour le journal du quartier : reprends chaque élément déjà dit par l’outil qui convient (le, faire, une ellipse, celui de, un autre nom), sans créer de doute. « Le café-réparation ouvre un second atelier. Le café-réparation ouvrira le second atelier rue King. Les bénévoles voulaient un second atelier ; la ville ne voulait pas un second atelier. La ville a changé d’avis en mars. Le changement d’avis de la ville vient du bilan d’Odile Ferland. Le bilan d’Odile Ferland était plus convaincant que la ville ne croyait que le bilan serait convaincant. »';
