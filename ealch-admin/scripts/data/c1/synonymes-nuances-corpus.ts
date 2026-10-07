// c1.17.l1 « Synonymes et nuances » — the authored corpus, the imports, the
// texts and the citation constants. DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md
// §2 (THE VOCAB SHAPE: families and collocations in use, never isolated nouns)
// on top of B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (« What
// is different at C1 », wave 5 and its review lessons). Structural model: the
// reviewed C1 vocabulary lesson c1.12 « Le vocabulaire des idées »
// (`./vocabulaire-idees-*`), whose file layout, helpers, act loop and counts
// it copies.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 17 of the C1 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   CHOOSING AMONG NEAR-SYNONYMS (wave 5 brief, research plan c1.17): by
//   intensity, by connotation, by collocation, and picking the antonym that
//   matches the sense; Québec register labels anchored in Usito and the OQLF.
//   Every judgement below is anchored in a dictionary label or definition
//   (§A.7), never in intuition.
//
//     act 1   le bon cran: a client's complaint relayed as « un peu agacée »
//             when she threatens to end the contract; recap of b1.25,
//             b1.35, b2.32, b2.33 and c1.06 by trail position, rows reused
//     act 2   intensity 1: agacer < irriter < exaspérer, excéder (past
//             b1.35's agacé < énervé < en colère < furieux)
//     act 3   intensity 2, the press: grimper, flamber; fléchir, reculer,
//             s'effondrer, stagner; une légère / forte hausse (past b2.29's
//             numbers that move)
//     act 4   connotation 1: the same trait, two judgements: économe /
//             avare / radin, persévérant / obstiné / têtu, prudent / timoré,
//             curieux / indiscret, ambitieux / arriviste (c1.24 owns press
//             framing: cited)
//     act 5   connotation 2, the suffixes that judge: -âtre (approximation,
//             often pejorative: rougeâtre is neutral, verdâtre and douceâtre
//             are not), bellâtre, -asse (fadasse, paperasse), lourdaud,
//             écrivailleur; -ard is b2.32's (cited, row reused)
//     act 6   euphemism as connotation: décéder, s'éteindre; respect, soften
//             or mask (litote in speech is c1.06's: cited, never re-taught)
//     act 7   collocation 1, the verb a noun chooses: poser une question,
//             émettre une hypothèse, formuler des revendications, nourrir un
//             projet, dissiper un malentendu, tenir sa promesse, mener une
//             enquête, prendre des mesures; the OQLF calques « demander une
//             question », « prendre une action »
//     act 8   collocation 2, the expected intensifier: grièvement blessé /
//             gravement malade, un refus catégorique, une écrasante majorité,
//             un gros fumeur, une circulation dense, un célibataire endurci,
//             une habitude invétérée, une pluie battante
//     act 9   antonymy that matches the sense: doux (hiver rigoureux,
//             caractère emporté, peau rêche, eau salée), léger (repas
//             copieux, café corsé, blessure grave, valise lourde)
//     act 10  one word, one label per region: magasiner (standard in
//             Québec), ma blonde (familier), un char (non standard,
//             criticised), courriel (born in Québec, recommended in France);
//             b1.25's Québec act recapped and made precise
//     act 11  the all-purpose word: important, grand, faire, dire replaced
//             by the word that says how (majeur, considérable, grave,
//             influent; prononcer, exprimer, occuper)
//     act 12  the task: a farewell portrait for a staff newsletter, written
//             from blunt notes, fair in connotation and exact in intensity
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     la leçon 25 du B1  the three registers, triplets, « un mot familier
//                        n'est pas une faute », the Québec act (char,
//                        magasiner, blonde): rows .1257 .1360 .1361 .1374
//                        .1375 .1376 of langue-soignee
//     la leçon 35 du B1  the feeling scales (agacé < énervé < en colère <
//                        furieux): row emotions .1047 and the three bank
//                        nouns .057 .055 .040
//     la leçon 32 du B2  the register ladder; « vénère » (row argot-des-
//                        jeunes .1059); the suffix -ard (row .1097)
//     la leçon 33 du B2  act 12, tone in translation (row langue-soignee
//                        .1999)
//     la leçon 29 du B2  numbers that move (row methode-scientifique .1091)
//     la leçon 6 du C1   litote and understatement in speech (row
//                        nuances-et-registres .1122): cited in acts 1 and 6
//     la leçon 24 du C1  loaded words in the press (rows strategies-de-
//                        comprehension .2122 .2123): cited in act 4
//     la leçon 5 du C1   reprise by synonym (row langue-soignee .2179):
//                        cited in act 11, never re-taught
//
//   LEFT TO OTHER LESSONS (never taught here):
//     c1.18  false friends as a system (« la leçon 18 du C1 », next on the
//            trail, typed from the plan). Act 7's two calques are the OQLF's
//            verdicts on collocations, not faux amis.
//     c1.19  litote as a literary figure; c1.06 litote in speech.
//     c1.24  press framing and loaded pairs; b2.24 the evaluative reporting
//            verbs (affirmer, prétendre): no reporting verb is taught here.
//     c1.05  reprise and anaphora by synonym or hypernym.
//     b1.27-b1.29  the colour and body idioms (une colère noire, une peur
//            bleue): never re-listed.
//
//   NO WRONG FORM IS EVER A ROW. Mismatched words live only in the scene's
//   choice, trapDrill.promptSound, commonErrors.wrong and quiz errorSpots.
//   A row may hold a word at the wrong DEGREE only inside a sentence that
//   names the mismatch (« Une baisse de deux pour cent n'est pas un
//   effondrement »).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-06 inside BEGIN TRANSACTION READ ONLY
//      … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `nuances-et-registres` (« Les nuances et les registres »,
//     fondations, c1-c2). sub_themes read back: ["nuancer à l'oral",
//     "synonymes et nuances"] (wave 5 setup). No widening needed.
//
//  2. ID BLOCK: `fr.c1.nuances-et-registres.1200` to `.1399` and nothing
//     else (ledger; c1.06 owns 1000-1199). Probed 2026-10-06: 0 rows in
//     1200-1399 at any level. Authored: `.1200`-`.1353`, 150 rows in twelve
//     act blocks (§G); .1278 .1313 .1324 .1339 unused (twins, §A.8);
//     .1354-.1399 free.
//
//  3. REUSED ROWS. Every id was read in Postgres on 2026-10-06 (fr, en,
//     drills, example, status: all published) and checked against
//     seedPlusPacks(). 45 rows in all: 25 are in the seed cut; 20 are POSTGRES-ONLY and
//     carried in PG_ROWS (fr / en / drills copied verbatim from the read,
//     straight apostrophes kept: the decision 13 typography pass applies at
//     import): b1 emotions .057 .055 .040, c1 culture-profonde .091, c1
//     nuances-et-registres .097 .074 .129 .132 .135 .140 .141 .143 .157
//     .163, sons adjectifs-essentiels .241 .262, b2 argot-classique .030,
//     b1 recherche-emploi .128, b2 litterature .078, b1 rp-repas .024, a2 courses
//     .074 (the last two replaced authored twins, §A.8). The merge must carry
//     them; the gate preview needs them.
//
//  4. LEGACY ROWS READ BEFORE REUSE. The 165 legacy Speak rows of this theme
//     (.001-.165) were all read. Reused: the euphemism rows .074 .097 .129
//     .132 .135 .140 .141 .143 .157 .163 (none used by another lesson; none
//     names a real person, place or figure). REJECTED on reading: .064
//     (« licenciements massifs », duplicate of .135's point), .145
//     (« dommages collatéraux », war casualties), .147 (homelessness as
//     « misère »: a sensitive topic the brief keeps generic), .106 (a real
//     city's rents), .137 (« pas mal = excellent », overstated, also
//     rejected by c1.06). The reused PG rows' `example` fields were read:
//     none names a person.
//
//  5. TYPOGRAPHY OF THE REUSED POSTGRES ROWS (decision 13 pass at import,
//     straight ' to ’): every PG row with an apostrophe (.057 .055 .040
//     .091 .097 .074 .129 .132 .140 .143 .157 .163 .078). b1.25's seed rows
//     .1257 and .1361 also carry a straight apostrophe; they are printed only
//     through `src()`, never inside the scenario.
//
//  6. NO AUTHORED ROW TWINS A PUBLISHED ROW. Every authored `fr`, folded
//     (accents, case, punctuation, apostrophes, spaces), compared with every
//     Postgres row of every theme and level (scratch `twins.mts`,
//     2026-10-06): result recorded in §A.8.
//
//  7. FACT AND JUDGEMENT CHECK LIST (for the pre-review). Every register,
//     connotation, intensity and collocation claim, with its source. All
//     Larousse references are larousse.fr/dictionnaires/francais, read
//     2026-10-06; Usito is usito.usherbrooke.ca; OQLF is the Vitrine
//     linguistique (BDL). CNRTL / CRISCO could not be read (the portal
//     serves a JavaScript shell to scripts): flagged for Paul.
//       a. agacer « provoquer chez quelqu'un un sentiment d'impatience,
//          d'irritation, de gêne » ; irriter « mettre quelqu'un en colère » ;
//          exaspérer « irriter vivement quelqu'un, le mettre en colère » ;
//          excéder « importuner grandement quelqu'un, lui imposer une tension
//          extrême, une gêne insupportable » (no register label for that
//          sense). The order agacer < irriter < exaspérer, excéder is the
//          brief's and follows these definitions (Larousse).
//       b. grimper « s'élever rapidement, monter : la température grimpe »
//          (no label); flamber « s'élever brutalement, en parlant des prix »;
//          fléchir « diminuer en valeur, en intensité, en quantité » ;
//          s'effondrer « subir une baisse brutale : les cours s'effondrent
//          à la Bourse » ; stagner « en parlant d'une activité économique,
//          fonctionner au ralenti » (Larousse). « s'envoler » and
//          « plonger » for prices were NOT found in Larousse and are not
//          taught.
//       c. économe « qui veille à limiter ses dépenses » ; avare « qui se
//          plaît à accumuler l'argent en restreignant ses dépenses » ; radin
//          « mot familier », « d'une avarice mesquine » (Larousse).
//          persévérant (persévérer: hold firm in a resolution, approving);
//          obstiné « qui persévère dans ses actions sans vouloir rien
//          entendre » ; têtu (courant). « tenace » is NOT used as the
//          approving pole: Larousse gives buté, entêté, obstiné as its
//          synonyms. timoré « qui est d'une prudence excessive » ; indiscret
//          « qui cherche à connaître avec une insistance choquante ce qu'on
//          ne tient pas à dévoiler » ; arriviste « qui veut réussir à tout
//          prix ; ambitieux sans scrupule » (Larousse). péjoratif « qui tend
//          à déprécier », contraire mélioratif (Larousse).
//       d. -âtre: « un peu, pas tout à fait » ; « également utilisé comme
//          péjoratif » (Wiktionnaire « -âtre »: rougeâtre, bleuâtre are
//          plain approximations). verdâtre « qui tire sur un vert un peu
//          trouble : un teint verdâtre » ; douceâtre « doux et fade au goût,
//          à l'odorat » ; bellâtre « homme physiquement beau mais fat et
//          niais » ; fadasse « qui manque totalement de goût » ; lourdaud
//          « personne lente et maladroite » ; écrivailleur « mauvais
//          écrivain » (Larousse). -asse « à nuance péjorative » and
//          paperasse « papier écrit ou imprimé qu'on regarde comme inutile »,
//          péjoratif (Wiktionnaire). -ard: b2.32's row .1097.
//       e. euphémisme « atténuation dans l'expression de certaines idées ou
//          de certains faits dont la crudité aurait quelque chose de brutal
//          ou de déplaisant », example « il s'est éteint » ; décéder
//          « soutenu », « souvent employé par euphémisme pour mourir »,
//          humans only, auxiliary être (Larousse).
//       f. « demander une question » déconseillé (calque of to ask a
//          question): poser, formuler une question, adresser une question à
//          quelqu'un (OQLF, « La tournure anglaise déconseillée demander une
//          question »). « prendre une action » déconseillé: prendre des
//          mesures, intervenir, passer à l'action (OQLF, « L'emprunt
//          déconseillé prendre une action »).
//       g. Collocations, Larousse: « émettre une autre hypothèse » (émettre
//          3); « formuler des revendications » ; « nourrir des projets
//          ambitieux » ; « tenir sa promesse », « manquer à sa promesse »,
//          « faire une promesse » ; « mener une enquête » ; « il occupe un
//          poste important » ; « commettre une imprudence » ; « faire cesser
//          un malentendu » and « dissiper un malentendu » (Larousse
//          français-anglais « dissiper » ; Académie 9e éd. « la dissipation
//          d'un malentendu ») ; « mettre en doute ».
//       h. Intensifiers, Larousse: grièvement (at « gravement »; also OQLF « Sens et emploi de gravement et de grièvement ») « ne s'emploie qu'avec blesser
//          et des mots de sens analogue (brûler, atteindre, toucher) » ;
//          « un refus catégorique » ; « une écrasante majorité » ; « c'est un
//          gros fumeur » ; « circulation dense sur l'autoroute » ; « un
//          célibataire endurci » ; « une habitude invétérée ». « pluie
//          battante »: « forte pluie » (Wiktionnaire).
//       i. Antonyms by sense, Larousse « Contraires »: doux (climat):
//          rigoureux, glacial ; doux (personne): emporté, irascible, bourru ;
//          doux (au toucher): rêche, rugueux ; eau douce « qui n'est pas
//          salée ». léger (poids): lourd, pesant ; léger (repas) « peu
//          copieux » (contraires listed: dense, indigeste; « copieux » from
//          the definition) ; léger (café) « peu concentré » : corsé, fort ;
//          léger (faute, peine): grave, important, sérieux. emporté
//          « personne qui se met facilement en colère ».
//          rigoureux: (climat) « pénible, difficile à supporter (en
//          particulier les conditions atmosphériques très froides) » ; (personne)
//          « qui fait preuve … de rigueur, de sévérité » (act 9 story: why
//          rigoureux is not the opposite of a gentle nature).
//       j. Usito: magasiner [Q/C], v. intr. « faire des achats dans les
//          magasins », v. tr. « comparer des prix pour un achat ultérieur »,
//          NO familiar label; char [Q/C] « critiqué comme synonyme non
//          standard de auto, automobile, voiture » (anglicisme critiqué);
//          blonde [Q/C] mod. fam. « petite amie, conjointe, épouse » ;
//          courriel: of Québec origin, officially recommended in France.
//          OQLF « Emploi et sens de magasiner et de magasinage »: magasiner
//          « implanté dans l'usage », magasinage « implanté et légitimé » ;
//          « faire du shopping » is European usage, déconseillé in Québec.
//          b1.25 had tagged magasiner with the familiar Québec words; act 10
//          makes the label precise (flagged for Paul).
//       k. considérable « qui est très grand par le nombre, l'intensité, la
//          valeur » (Larousse).
//       l. connotation « ensemble de significations secondes … qui viennent
//          s'ajouter au sens conceptuel » ; collocation « association
//          habituelle d'un mot à un autre au sein de l'énoncé » (Larousse).
//     QUOTATIONS: none. Every text is « texte original écrit pour la
//     leçon »; every person, company, outlet and town is invented (§I).
//
//  8. TWIN CHECK RESULT (scratch `twins.mts`, 64,066 Postgres rows, 2026-10-06).
//     First run: 4 twins, all bare collocations already published: « poser
//     une question » (fr.a1.dictee.107, seed), « un repas copieux »
//     (fr.b1.rp-repas.024, PG), « faire du shopping » (fr.a2.courses.074,
//     PG), « occuper un poste » (fr.b1.affaires.1022, seed). All four are now
//     REUSED by id; their planned ids .1278 .1313 .1324 .1339 stay unused.
//     Second run: 0 twins, 0 id collisions.
//
//  9. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR: a real
//     /n/ or /m/ after a vowel is written double: personne pehr-SONN,
//     semaine suh-MENN, comme KOMM, menace muh-NASS, plaine PLENN, donne
//     DONN, douceâtre is plain. No U+203F tie anywhere.
//
// 10. APOSTROPHES: every authored French string uses the typographic ’.
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
  id: 'c1.17',
  seq: 17,
  title: 'Synonyms and Shades of Meaning',
  sub: 'Synonymes et nuances',
  canDo: 'Can choose among near-synonyms by intensity (agacer, irriter, exaspérer; grimper, flamber, fléchir, s’effondrer), by connotation (économe or avare, persévérant or obstiné, the suffixes -âtre, -asse, -aud, the euphemism), by collocation (the verb and the intensifier a noun expects) and by region and register (Québec labels in Usito and the OQLF), pick the antonym that matches the sense, read these choices precisely in a text, and write a portrait that is fair and exact',
  prereqUnitIds: ['b1.25', 'b1.35', 'b2.32', 'b2.33', 'c1.06'],
} as const;

export const LESSON_ID = 'c1.17.l1';
export const THEME = 'nuances-et-registres';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief (sub-theme « synonymes et nuances »). */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  By trail position, in words, read from the seed units. A C1 surface is
 *  French: never a raw id on screen, always « la leçon N du B1 / B2 / C1 ».
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  const n = SEQ.get(unitId);
  if (n) return `la leçon ${n} du ${band.toUpperCase()}`;
  if (band === 'b1' || band === 'b2' || band === 'c1') throw new Error(`c1.17: ${unitId} is not in the seed`);
  return unitRef(unitId);
}

export const REGISTRES_UNIT = 'b1.25';
export const EMOTIONS_UNIT = 'b1.35';
export const SCIENCE_UNIT = 'b2.29';
export const ARGOT_UNIT = 'b2.32';
export const CALQUER_UNIT = 'b2.33';
export const REPRISE_UNIT = 'c1.05';
export const NUANCER_UNIT = 'c1.06';
export const PRESSE_UNIT = 'c1.24';

export const REGISTRES_REF = refFr(REGISTRES_UNIT);   // la leçon 25 du B1
export const EMOTIONS_REF = refFr(EMOTIONS_UNIT);     // la leçon 35 du B1
export const SCIENCE_REF = refFr(SCIENCE_UNIT);       // la leçon 29 du B2
export const ARGOT_REF = refFr(ARGOT_UNIT);           // la leçon 32 du B2
export const CALQUER_REF = refFr(CALQUER_UNIT);       // la leçon 33 du B2
export const REPRISE_REF = refFr(REPRISE_UNIT);       // la leçon 5 du C1
export const NUANCER_REF = refFr(NUANCER_UNIT);       // la leçon 6 du C1
export const PRESSE_REF = refFr(PRESSE_UNIT);         // la leçon 24 du C1

/** The next lesson on the trail (c1.18, faux amis, wave 6). Not in the seed
 *  yet, so typed from the plan. TODO(import): drop if c1.18 slips. */
export const NEXT_REF_PLANNED = 'la leçon 18 du C1';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B125_REFRAME, REFRAME_EN as B125_REFRAME_EN } from '../b1/registres-corpus.ts';
export { REFRAME as B232_REFRAME, REFRAME_EN as B232_REFRAME_EN } from '../b2/verlan-argot-corpus.ts';
export { REFRAME as B233_REFRAME, REFRAME_EN as B233_REFRAME_EN } from '../b2/traduire-sans-calquer-corpus.ts';
export { REFRAME as C106_REFRAME, REFRAME_EN as C106_REFRAME_EN } from './nuancer-oral-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE NUANCIER. A painter's fan of swatches: one colour, a dozen shades, and
 *  each shade has its place. A list of synonyms is a fan, not a set of
 *  twins: each word differs by its strength (the intensity), its colour
 *  (the connotation and the register) and its neighbours (the words it
 *  goes with, which also decide its opposite). The task asks the learner to
 *  pick the exact shade for a real person.
 *
 *  It is NOT « the rarer word is better » (act 11: « important » is often
 *  the right word, and act 10: magasiner is standard French in Québec), and
 *  it is NOT « synonyms are interchangeable » (the whole lesson).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un synonyme n’est jamais un jumeau : pèse sa force, sa couleur et ses voisins.';
export const REFRAME_EN = 'A synonym is never a twin: weigh its strength, its colour and its neighbours.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le mot le plus rare est le plus précis.',
    why: 'False where the lesson has to hold: act 11 keeps « important » when nothing more exact is meant, act 10 shows magasiner is standard in Québec, and « fadasse » is rarer than « fade » and only ruder.',
  },
  {
    text: 'Évite les répétitions : varie tes mots.',
    why: 'It is c1.05’s concern (reprise), and it pushes toward exactly the error this lesson fights: a synonym chosen to vary, not to fit, changes the strength or the colour of the sentence (row langue-soignee .2179 of lesson 5 in C1).',
  },
  {
    text: 'Chaque mot a un seul contraire.',
    why: 'True of no word in act 9: doux has rigoureux, emporté, rêche and salé as opposites depending on the sense. It covers one act, not the lesson.',
  },
  {
    text: 'Le registre fait le mot juste.',
    why: 'Only one of the three weights: b1.25 owns register. économe and avare are both courant and still say two judgements; grièvement and gravement are both standard and still not interchangeable.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from Postgres on 2026-10-06 and, where present, from
 *  seedPlusPacks(); its French is in the trailing comment. `PG` marks a row
 *  absent from the seed cut, carried in PG_ROWS.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.langue-soignee.1257',               // Un mot familier n'est pas une faute. C'est un mot entre amis.  (b1.25, flashcard only)
    'fr.b2.argot-des-jeunes.1059',             // Vénère se dit entre amis ; au travail, on dit énervé ou en colère.  (b2.32)
    'fr.b2.langue-soignee.1999',               // Traduis aussi le ton : l’enthousiasme de l’anglais se dit plus sobrement en français.  (b2.33, flashcard only)
    'fr.c1.nuances-et-registres.1122',         // La litote dit moins pour faire entendre plus.  (c1.06, flashcard only)
    'fr.b1.dictee.014',                        // un synonyme
    'fr.b1.dictee.015',                        // un antonyme
    'fr.b2.litterature.071',                   // la connotation
  ],
  act2: [
    'fr.b1.emotions.1047',                     // agacé, énervé, en colère, furieux  (b1.35)
    'fr.b1.emotions.057',                      // l'agacement  (PG)
    'fr.b1.emotions.055',                      // l'irritation  (PG)
    'fr.b1.emotions.040',                      // l'exaspération  (PG)
    'fr.c1.culture-profonde.091',              // Ce qui m'agace chez lui, c'est cette manière de trancher sans jamais douter.  (PG, no flashcard)
  ],
  act3: [
    'fr.b2.methode-scientifique.1091',         // Les ventes ont reculé de cinq pour cent au premier trimestre.  (b2.29)
    'fr.b2.economie.003',                      // L'inflation a fait grimper le prix des produits de première nécessité.  (no voiceflash)
    'fr.b1.strategies-de-comprehension.1052',  // Logement : les loyers grimpent encore à Montréal
  ],
  act4: [
    'fr.c1.nuances-et-registres.097',          // Quand on dit qu'il est économe, c'est une façon polie de dire autre chose.  (PG, no flashcard)
    'fr.sons.adjectifs-essentiels.241',        // avare  (PG)
    'fr.b2.argot-classique.030',               // le radin  (PG)
    'fr.sons.adjectifs-essentiels.262',        // têtu  (PG)
    'fr.b1.recherche-emploi.128',              // persévérant  (PG, no flashcard)
    'fr.c1.strategies-de-comprehension.2122',  // La municipalité s’entête.  (c1.24)
    'fr.c1.strategies-de-comprehension.2123',  // La municipalité maintient son projet.  (c1.24)
    'fr.b2.litterature.1524',                  // Les adjectifs mélioratifs montrent la tendresse du narrateur.
  ],
  act5: [
    'fr.b2.argot-des-jeunes.1097',             // Le suffixe -ard est souvent péjoratif : il ajoute de la moquerie ou du mépris.  (b2.32, flashcard only)
  ],
  act6: [
    'fr.b2.litterature.078',                   // l'euphémisme  (PG)
    'fr.c1.nuances-et-registres.074',          // Dire qu'il conduit prudemment, c'est un euphémisme, il roule comme une tortue.  (PG)
    'fr.c1.nuances-et-registres.132',          // Elle est d'un certain âge, comme on dit poliment.  (PG)
    'fr.c1.nuances-et-registres.129',          // Senior, c'est juste vieux dit avec des gants.  (PG)
    'fr.c1.nuances-et-registres.135',          // Ici, on ne licencie pas, on ajuste les effectifs.  (PG)
    'fr.c1.nuances-et-registres.140',          // Le communiqué parle d'un incident, les pompiers parlent d'un incendie.  (PG)
    'fr.c1.nuances-et-registres.141',          // Le mot balayeur a cédé la place à technicien de surface.  (PG)
    'fr.c1.nuances-et-registres.143',          // Il aurait pu dire pauvre, il a préféré dire économiquement fragile.  (PG)
    'fr.c1.nuances-et-registres.157',          // Le médecin a évoqué une issue défavorable, jamais il n'a prononcé le mot décès.  (PG)
    'fr.c1.nuances-et-registres.163',          // Elle a qualifié la maison de pleine de charme, ce qui signifie petite et vétuste.  (PG)
  ],
  act7: [
    'fr.a1.dictee.107',                        // poser une question  (seed, no flashcard; authored twin dropped, §A.8)
  ],
  act8: [] as string[],
  act9: [
    'fr.b1.rp-repas.024',                      // un repas copieux  (PG; twin dropped)
  ],
  act10: [
    'fr.b1.langue-soignee.1360',               // Mon char est encore au garage.  (b1.25)
    'fr.b1.langue-soignee.1361',               // Samedi, je vais magasiner avec ma blonde.  (b1.25)
    'fr.b1.langue-soignee.1374',               // Au Québec, le familier va plus loin. Courriel et fin de semaine, c’est du courant.  (b1.25, flashcard only)
    'fr.b1.langue-soignee.1375',               // un char  (b1.25)
    'fr.b1.langue-soignee.1376',               // ma blonde  (b1.25)
    'fr.a2.quebec-et-francophonie.199',        // magasiner  (no voiceflash)
    'fr.a2.courses.074',                       // faire du shopping  (PG; twin dropped)
  ],
  act11: [
    'fr.c1.langue-soignee.2179',               // Trop de synonymes égarent le lecteur autant qu’une répétition le lasse.  (c1.05)
    'fr.b1.affaires.1022',                     // occuper un poste  (seed; twin dropped)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied VERBATIM from the 2026-10-06 read (straight apostrophes kept: the
 *  decision 13 edit happens at import), so `src()` can print them. */
export const PG_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: 'fr.b1.emotions.057', fr: "l'agacement", en: 'annoyance', drills: ['flashcard', 'review'] },
  { id: 'fr.b1.emotions.055', fr: "l'irritation", en: 'irritation', drills: ['flashcard', 'review'] },
  { id: 'fr.b1.emotions.040', fr: "l'exaspération", en: 'exasperation', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.c1.culture-profonde.091', fr: "Ce qui m'agace chez lui, c'est cette manière de trancher sans jamais douter.", en: 'What irritates me about him is that way of settling every question without ever doubting.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.097', fr: "Quand on dit qu'il est économe, c'est une façon polie de dire autre chose.", en: "When people say he is thrifty, it's a polite way of saying something else.", drills: ['sentence', 'review'] },
  { id: 'fr.sons.adjectifs-essentiels.241', fr: 'avare', en: 'stingy, miserly', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b2.argot-classique.030', fr: 'le radin', en: 'cheapskate', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.sons.adjectifs-essentiels.262', fr: 'têtu', en: 'stubborn', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b1.recherche-emploi.128', fr: 'persévérant', en: 'persevering', drills: ['voiceflash', 'review'] },
  { id: 'fr.b2.litterature.078', fr: "l'euphémisme", en: 'the euphemism', drills: ['flashcard', 'review'] },
  { id: 'fr.c1.nuances-et-registres.074', fr: "Dire qu'il conduit prudemment, c'est un euphémisme, il roule comme une tortue.", en: 'To say he drives carefully is putting it kindly, he crawls along like a turtle.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.132', fr: "Elle est d'un certain âge, comme on dit poliment.", en: 'She is of a certain age, as we politely say.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.129', fr: "Senior, c'est juste vieux dit avec des gants.", en: 'Senior is just old said with kid gloves.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.135', fr: 'Ici, on ne licencie pas, on ajuste les effectifs.', en: 'Here, nobody gets laid off, the workforce gets adjusted.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.140', fr: "Le communiqué parle d'un incident, les pompiers parlent d'un incendie.", en: 'The press release mentions an incident, the firefighters mention a fire.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.141', fr: 'Le mot balayeur a cédé la place à technicien de surface.', en: 'The word sweeper has given way to surface technician.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.143', fr: "Il aurait pu dire pauvre, il a préféré dire économiquement fragile.", en: 'He could have said poor, he preferred to say economically fragile.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.157', fr: "Le médecin a évoqué une issue défavorable, jamais il n'a prononcé le mot décès.", en: 'The doctor mentioned an unfavorable outcome, he never once said the word death.', drills: ['sentence', 'review'] },
  { id: 'fr.b1.rp-repas.024', fr: 'un repas copieux', en: 'a hearty meal', drills: ['flashcard', 'voiceflash', 'review'] },
  { id: 'fr.a2.courses.074', fr: 'faire du shopping', en: 'to go shopping', drills: ['flashcard', 'voiceflash', 'review'] },
  { id: 'fr.c1.nuances-et-registres.163', fr: "Elle a qualifié la maison de pleine de charme, ce qui signifie petite et vétuste.", en: 'She described the house as full of charm, which means small and run-down.', drills: ['sentence', 'review'] },
];

const SEED_DRILLS = new Map((seed as unknown as { items: { id: string; drills?: string[] }[] }).items.map((i) => [i.id, i.drills ?? []]));
const drillsOf = (id: string): string[] => PG_ROWS.find((r) => r.id === id)?.drills ?? SEED_DRILLS.get(id) ?? [];

/** No `flashcard` drill: nameable, never releasable. Computed from the rows
 *  above and the seed, so it cannot drift from the drills read. */
export const NOT_DECK_ABLE: string[] = IMPORT_IDS.filter((id) => !drillsOf(id).includes('flashcard'));

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE: string[] = IMPORT_IDS.filter((id) => !drillsOf(id).includes('voiceflash'));

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `col` a collocation (kind phrase: the word with what it goes with);
 *  `fam` a word family or a scale in one card; `sent` a sentence; `rule` a
 *  grammar card whose prompt is a question and whose `fr` is the act’s
 *  point. Every row carries fr, en, ipa and respell; corpus respellings
 *  carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const SO = { register: 'soutenu' as Register };
const FA = { register: 'familier' as Register };
const GP = ['synonymes-nuances'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

/** A collocation: the word and what it goes with. */
const col = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string,
  extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['collocation', ...tags], drills: FCVR, version: 1, register: C, grammarPoints: GP, notes, ...extra,
});

/** A word family or a scale: every member in one card. */
const fam = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string,
  extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['famille', ...tags], drills: FCVR, version: 1, register: C, grammarPoints: GP, notes, ...extra,
});

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE BON CRAN (.1200-.1211) ──────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, 'La cliente est exaspérée : elle menace de rompre le contrat.', 'The client is exasperated: she is threatening to end the contract.',
    '/la kli.jɑ̃t ɛ.tɛɡ.zas.pe.ʁe ɛl mə.nas də ʁɔ̃pʁ lə kɔ̃.tʁa/', 'la klee-YAHⁿT | eh-teg-zass-pay-RAY | el muh-NASS | duh rohⁿpr luh kohⁿ-TRA', ['scene', 'intensite'], FCVDR),
  sent(1201, 'Agacée ou exaspérée, ce n’est pas la même urgence.', 'Annoyed or exasperated is not the same urgency.',
    '/a.ɡa.se u ɛɡ.zas.pe.ʁe sə nɛ pa la mɛ.myʁ.ʒɑ̃s/', 'a-ga-SAY | oo eg-zass-pay-RAY | suh neh pa la meh-mür-ZHAHⁿSS', ['scene', 'intensite']),
  rule(1202, REFRAME, REFRAME_EN,
    '/œ̃ si.nɔ.nim nɛ ʒa.mɛ œ̃ ʒy.mo pɛz sa fɔʁs sa ku.lœʁ e se vwa.zɛ̃/', 'uhⁿ see-no-NEEM | neh zha-meh uhⁿ zhü-MOH | PEZ sa FORSS | sa koo-LUHR | ay say vwa-ZEHⁿ',
    'Deux mots sont donnés comme synonymes. Que pèses-tu avant de choisir ?',
    'Trois choses : sa force (agacée ou exaspérée), sa couleur (économe ou avare, courant ou familier) et ses voisins (les mots avec lesquels il va). Le dictionnaire des synonymes te donne un éventail, pas des jumeaux.',
    ['reframe', 'nuancier']),
  sent(1203, 'Ce mot dit la même chose, mais pas avec la même force.', 'This word says the same thing, but not with the same strength.',
    '/sə mo di la mɛm ʃoz mɛ pa a.vɛk la mɛm fɔʁs/', 'suh MOH | dee la mem SHOHZ | meh pa a-vek la mem FORSS', ['nuancier'], FCVDR),
  sent(1204, 'Ce mot-là juge déjà la personne.', 'That word already judges the person.',
    '/sə mo la ʒyʒ de.ʒa la pɛʁ.sɔn/', 'suh moh-LA | zhüzh day-ZHA | la pehr-SONN', ['nuancier']),
  sent(1205, 'Le mot est juste, mais il ne va pas avec ce nom.', 'The word is right, but it does not go with this noun.',
    '/lə mo ɛ ʒyst mɛ il nə va pa a.vɛk sə nɔ̃/', 'luh MOH eh ZHÜST | meh eel nuh va pa a-vek suh NOHⁿ', ['nuancier']),
  sent(1206, 'Dans le dictionnaire, ces deux mots sont synonymes ; dans ta phrase, non.', 'In the dictionary these two words are synonyms; in your sentence, they are not.',
    '/dɑ̃ lə dik.sjɔ.nɛʁ se dø mo sɔ̃ si.nɔ.nim dɑ̃ ta fʁaz nɔ̃/', 'dahⁿ luh deek-syo-NEHR | say deu MOH | sohⁿ see-no-NEEM | dahⁿ ta FRAHZ | NOHⁿ', ['nuancier'], FCVDR),
  sent(1207, 'Quel mot dirait exactement ce que tu veux dire ?', 'Which word would say exactly what you mean?',
    '/kɛl mo di.ʁɛ ɛɡ.zak.tə.mɑ̃ sə kə ty vø diʁ/', 'kel MOH | dee-REH eg-zak-tuh-MAHⁿ | suh kuh tü veu DEER', ['nuancier']),
  sent(1208, 'Le contraire de ce mot dépend du sens que tu lui donnes.', 'The opposite of this word depends on the meaning you give it.',
    '/lə kɔ̃.tʁɛʁ də sə mo de.pɑ̃ dy sɑ̃s kə ty lɥi dɔn/', 'luh kohⁿ-TREHR duh suh MOH | day-PAHⁿ dü SAHⁿSS | kuh tü lwee DONN', ['nuancier']),
  sent(1209, 'Remplace le mot, puis relis la phrase entière.', 'Replace the word, then reread the whole sentence.',
    '/ʁɑ̃.plas lə mo pɥi ʁə.li la fʁa.zɑ̃.tjɛʁ/', 'rahⁿ-PLASS luh MOH | pwee ruh-LEE | la fra-zahⁿ-TYEHR', ['nuancier']),
  sent(1210, 'Le mot était presque juste, et ce presque a tout changé.', 'The word was almost right, and that almost changed everything.',
    '/lə mo e.tɛ pʁɛsk ʒyst e sə pʁɛsk a tu ʃɑ̃.ʒe/', 'luh MOH | ay-teh presk ZHÜST | ay suh PRESK | a too shahⁿ-ZHAY', ['scene', 'nuancier']),
  sent(1211, 'Un dictionnaire des synonymes propose ; c’est la phrase qui dispose.', 'A dictionary of synonyms proposes; it is the sentence that decides.',
    '/œ̃ dik.sjɔ.nɛʁ de si.nɔ.nim pʁɔ.poz sɛ la fʁaz ki dis.poz/', 'uhⁿ deek-syo-NEHR day see-no-NEEM | pro-POHZ | seh la FRAHZ | kee dees-POHZ', ['nuancier']),
];

/* ── ACT 2 · DE L’AGACEMENT À L’EXASPÉRATION (.1212-.1224) ─────────────── */

export const ACT2_ROWS: Row[] = [
  col(1212, 'agacer quelqu’un', 'to annoy someone', '/a.ɡa.se kɛl.kœ̃/', 'a-ga-SAY kel-KUHⁿ', ['agacer'],
    'Agacer : provoquer de l’impatience, de la gêne. Le premier cran.'),
  col(1213, 'irriter quelqu’un', 'to irritate someone', '/i.ʁi.te kɛl.kœ̃/', 'ee-ree-TAY kel-KUHⁿ', ['agacer'],
    'Irriter : mettre en colère. Plus fort qu’agacer.'),
  col(1214, 'exaspérer quelqu’un', 'to exasperate someone', '/ɛɡ.zas.pe.ʁe kɛl.kœ̃/', 'eg-zass-pay-RAY kel-KUHⁿ', ['agacer'],
    'Exaspérer : irriter vivement. La patience est à bout.'),
  col(1215, 'excéder quelqu’un', 'to drive someone to the limit', '/ɛk.se.de kɛl.kœ̃/', 'ek-say-DAY kel-KUHⁿ', ['agacer'],
    'Excéder : importuner grandement, imposer une tension extrême. Excédé, on n’en peut plus.'),
  fam(1216, 'agacer, agaçant, agacé', 'to annoy, annoying, annoyed', '/a.ɡa.se a.ɡa.sɑ̃ a.ɡa.se/', 'a-ga-SAY, a-ga-SAHⁿ, a-ga-SAY', ['agacer'],
    'Agaçant : ce qui agace. Agacé : celui qui est agacé.'),
  fam(1217, 'exaspérer, exaspérant, exaspéré', 'to exasperate, exasperating, exasperated', '/ɛɡ.zas.pe.ʁe ɛɡ.zas.pe.ʁɑ̃ ɛɡ.zas.pe.ʁe/', 'eg-zass-pay-RAY, eg-zass-pay-RAHⁿ, eg-zass-pay-RAY', ['agacer'],
    'Exaspérant : ce qui exaspère. Exaspéré : celui qui ne supporte plus.'),
  sent(1218, 'Ses retards répétés commencent à m’agacer.', 'His repeated lateness is starting to annoy me.',
    '/se ʁə.taʁ ʁe.pe.te kɔ.mɑ̃s a ma.ɡa.se/', 'say ruh-TAR ray-pay-TAY | ko-MAHⁿSS | a ma-ga-SAY', ['agacer'], FCVDR),
  sent(1219, 'Le bruit du chantier irrite tout le quartier.', 'The noise from the building site irritates the whole neighbourhood.',
    '/lə bʁɥi dy ʃɑ̃.tje i.ʁit tu lə kaʁ.tje/', 'luh BRWEE dü shahⁿ-TYAY | ee-REET | too luh kar-TYAY', ['agacer']),
  sent(1220, 'Après trois appels sans réponse, elle était exaspérée.', 'After three unanswered calls, she was exasperated.',
    '/a.pʁɛ tʁwa.za.pɛl sɑ̃ ʁe.pɔ̃s ɛ.le.tɛ.tɛɡ.zas.pe.ʁe/', 'a-PREH | trwa-za-PEL | sahⁿ ray-POHⁿSS | eh-lay-teh-teg-zass-pay-RAY', ['agacer'], FCVDR),
  sent(1221, 'Excédé, il a quitté la réunion sans un mot.', 'At the end of his tether, he left the meeting without a word.',
    '/ɛk.se.de i.la ki.te la ʁe.y.njɔ̃ sɑ̃.zœ̃ mo/', 'ek-say-DAY | ee-la kee-TAY la ray-ü-NYOHⁿ | sahⁿ-zuhⁿ MOH', ['agacer']),
  rule(1222, 'Agacer, irriter, exaspérer : le même fait, trois crans de colère.', 'To annoy, to irritate, to exasperate: the same fact, three notches of anger.',
    '/a.ɡa.se i.ʁi.te ɛɡ.zas.pe.ʁe lə mɛm fɛ tʁwa kʁɑ̃ də kɔ.lɛʁ/', 'a-ga-SAY | ee-ree-TAY | eg-zass-pay-RAY | luh mem FEH | trwa KRAHⁿ duh ko-LEHR',
    'Agacer, irriter, exaspérer : qu’est-ce qui change ?',
    'La force. Agacer, c’est l’impatience ; irriter, la colère ; exaspérer, la colère vive, la patience à bout. Excéder va jusqu’à l’insupportable. Choisis le cran que les faits justifient.',
    ['agacer']),
  sent(1223, 'Un léger agacement, oui ; de l’exaspération, non.', 'A slight annoyance, yes; exasperation, no.',
    '/œ̃ le.ʒe.ʁa.ɡas.mɑ̃ wi də lɛɡ.zas.pe.ʁa.sjɔ̃ nɔ̃/', 'uhⁿ lay-zhay-ra-gass-MAHⁿ | WEE | duh leg-zass-pay-ra-SYOHⁿ | NOHⁿ', ['agacer']),
  sent(1224, 'Ce n’est plus de l’agacement : c’est de l’exaspération.', 'This is no longer annoyance: it is exasperation.',
    '/sə nɛ ply də la.ɡas.mɑ̃ sɛ də lɛɡ.zas.pe.ʁa.sjɔ̃/', 'suh neh plü duh la-gass-MAHⁿ | seh duh leg-zass-pay-ra-SYOHⁿ', ['agacer']),
];

/* ── ACT 3 · MONTER, DESCENDRE (.1225-.1237) ────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  col(1225, 'les prix grimpent', 'prices are climbing', '/le pʁi ɡʁɛ̃p/', 'lay PREE | GREHⁿP', ['hausse'],
    'Grimper : monter vite. Plus fort qu’augmenter, sans être brutal.'),
  col(1226, 'les loyers flambent', 'rents are soaring', '/le lwa.je flɑ̃b/', 'lay lwa-YAY | FLAHⁿB', ['hausse'],
    'Flamber : s’élever brutalement, en parlant des prix. Le cran le plus fort de la hausse.'),
  col(1227, 'les ventes fléchissent', 'sales are dipping', '/le vɑ̃t fle.ʃis/', 'lay VAHⁿT | flay-SHEESS', ['baisse'],
    'Fléchir : diminuer en valeur ou en quantité. Une baisse sans drame.'),
  col(1228, 'les cours s’effondrent', 'share prices are collapsing', '/le kuʁ se.fɔ̃dʁ/', 'lay KOOR | say-FOHⁿDR', ['baisse'],
    'S’effondrer : subir une baisse brutale. Le cran le plus fort de la baisse.'),
  col(1229, 'une légère hausse', 'a slight rise', '/yn le.ʒɛʁ os/', 'ün lay-zhehr OHSS', ['hausse'],
    'Léger, sensible, fort : l’adjectif règle la force du nom.'),
  col(1230, 'une forte baisse', 'a sharp fall', '/yn fɔʁt bɛs/', 'ün fort BESS', ['baisse'],
    'Fort pour une baisse ou une hausse marquée. Faible ou léger pour le contraire.'),
  sent(1231, 'Les inscriptions ont légèrement fléchi cet automne.', 'Enrolments dipped slightly this autumn.',
    '/le.zɛ̃s.kʁip.sjɔ̃ ɔ̃ le.ʒɛʁ.mɑ̃ fle.ʃi sɛ.to.tɔn/', 'lay-zehⁿss-kreep-SYOHⁿ | ohⁿ lay-zhehr-MAHⁿ flay-SHEE | seh-toh-TONN', ['baisse'], FCVDR),
  sent(1232, 'Depuis janvier, les loyers du quartier flambent.', 'Since January, rents in the neighbourhood have been soaring.',
    '/də.pɥi ʒɑ̃.vje le lwa.je dy kaʁ.tje flɑ̃b/', 'duh-PWEE zhahⁿ-VYAY | lay lwa-YAY dü kar-TYAY | FLAHⁿB', ['hausse']),
  sent(1233, 'Après l’annonce, l’action s’est effondrée en une matinée.', 'After the announcement, the share collapsed in a single morning.',
    '/a.pʁɛ la.nɔ̃s lak.sjɔ̃ sɛ.te.fɔ̃.dʁe ɑ̃.nyn ma.ti.ne/', 'a-preh la-NOHⁿSS | lak-SYOHⁿ | seh-tay-fohⁿ-DRAY | ahⁿ-nün ma-tee-NAY', ['baisse'], FCVDR),
  sent(1234, 'Les ventes stagnent depuis le printemps.', 'Sales have been flat since the spring.',
    '/le vɑ̃t staɡn də.pɥi lə pʁɛ̃.tɑ̃/', 'lay VAHⁿT | STAGN | duh-pwee luh prehⁿ-TAHⁿ', ['baisse']),
  rule(1235, 'Le verbe dit déjà la force du mouvement : vérifie qu’il colle au chiffre.', 'The verb already states the strength of the movement: check that it fits the figure.',
    '/lə vɛʁb di de.ʒa la fɔʁs dy muv.mɑ̃ ve.ʁi.fi kil kɔl o ʃifʁ/', 'luh VEHRB | dee day-ZHA la FORSS | dü moov-MAHⁿ | vay-ree-FEE | keel KOL oh SHEEFR',
    'Les ventes baissent de deux pour cent. « S’effondrent » : juste ?',
    'Non : s’effondrer dit une baisse brutale. Pour deux pour cent, fléchir ou reculer. Le verbe de la presse est déjà un jugement sur le chiffre.',
    ['hausse', 'baisse']),
  sent(1236, 'Une baisse de deux pour cent n’est pas un effondrement.', 'A two per cent fall is not a collapse.',
    '/yn bɛs də dø puʁ sɑ̃ nɛ pa.zœ̃.ne.fɔ̃.dʁə.mɑ̃/', 'ün BESS | duh deu poor SAHⁿ | neh pa-zuhⁿ-nay-fohⁿ-druh-MAHⁿ', ['baisse'], FCVDR),
  sent(1237, 'Le titre parle de flambée ; l’article donne trois pour cent.', 'The headline speaks of a surge; the article gives three per cent.',
    '/lə titʁ paʁl də flɑ̃.be laʁ.tikl dɔn tʁwa puʁ sɑ̃/', 'luh TEETR | parl duh flahⁿ-BAY | lar-TEEKL | DONN trwa poor SAHⁿ', ['hausse']),
];

/* ── ACT 4 · LE MÊME TRAIT, DEUX JUGEMENTS (.1238-.1251) ────────────────── */

export const ACT4_ROWS: Row[] = [
  col(1238, 'une gestionnaire économe', 'a thrifty manager', '/yn ʒɛs.tjɔ.nɛʁ e.kɔ.nɔm/', 'ün zhess-tyo-NEHR | ay-ko-NOMM', ['connotation'],
    'Économe : qui veille à limiter ses dépenses. Le mot approuve, ou reste neutre.'),
  col(1239, 'un voisin avare', 'a miserly neighbour', '/œ̃ vwa.zɛ̃ a.vaʁ/', 'uhⁿ vwa-zehⁿ a-VAR', ['connotation'],
    'Avare : qui accumule l’argent en restreignant ses dépenses. Le mot blâme.'),
  col(1240, 'une chercheuse persévérante', 'a persevering researcher', '/yn ʃɛʁ.ʃøz pɛʁ.se.ve.ʁɑ̃t/', 'ün shehr-SHEUZ | pehr-say-vay-RAHⁿT', ['connotation'],
    'Persévérante : qui tient bon dans sa résolution. Le mot approuve.'),
  col(1241, 'un négociateur obstiné', 'an obstinate negotiator', '/œ̃ ne.ɡɔ.sja.tœʁ ɔp.sti.ne/', 'uhⁿ nay-go-sya-TUHR | op-stee-NAY', ['connotation'],
    'Obstiné : qui persévère sans vouloir rien entendre. Le mot reproche.'),
  col(1242, 'une décision prudente', 'a cautious decision', '/yn de.si.zjɔ̃ pʁy.dɑ̃t/', 'ün day-see-ZYOHⁿ | prü-DAHⁿT', ['connotation'],
    'Prudent : qui évite les risques inutiles. Neutre, ou flatteur.'),
  col(1243, 'une direction timorée', 'a timid management', '/yn di.ʁɛk.sjɔ̃ ti.mɔ.ʁe/', 'ün dee-rek-SYOHⁿ | tee-mo-RAY', ['connotation'],
    'Timoré : d’une prudence excessive. Le même trait, cette fois reproché.'),
  col(1244, 'un esprit curieux', 'an inquiring mind', '/œ̃.nɛs.pʁi ky.ʁjø/', 'uhⁿ-ness-PREE | kü-RYEU', ['connotation'],
    'Curieux, pour un esprit : qui veut apprendre. Un éloge.'),
  col(1245, 'une question indiscrète', 'a prying question', '/yn kɛs.tjɔ̃ ɛ̃.dis.kʁɛt/', 'ün kes-TYOHⁿ | ehⁿ-dees-KRET', ['connotation'],
    'Indiscret : qui cherche à savoir, avec une insistance choquante, ce qu’on ne veut pas dévoiler.'),
  col(1246, 'un jeune arriviste', 'a young careerist', '/œ̃ ʒœ.na.ʁi.vist/', 'uhⁿ zhuh-na-ree-VEEST', ['connotation'],
    'Arriviste : qui veut réussir à tout prix, ambitieux sans scrupule. Ambitieux peut être un compliment ; arriviste, jamais.'),
  sent(1247, 'Économe, elle refuse de payer plus cher pour la même chose.', 'Thrifty, she refuses to pay more for the same thing.',
    '/e.kɔ.nɔm ɛl ʁə.fyz də pe.je ply ʃɛʁ puʁ la mɛm ʃoz/', 'ay-ko-NOMM | el ruh-FÜZ | duh pay-YAY plü SHEHR | poor la mem SHOHZ', ['connotation'], FCVDR),
  sent(1248, 'Persévérante, elle a relancé le dossier jusqu’à obtenir une réponse.', 'Persevering, she kept chasing the file until she got an answer.',
    '/pɛʁ.se.ve.ʁɑ̃t ɛ.la ʁə.lɑ̃.se lə do.sje ʒys.ka ɔp.tə.niʁ yn ʁe.pɔ̃s/', 'pehr-say-vay-RAHⁿT | eh-la ruh-lahⁿ-SAY luh do-SYAY | zhüs-ka op-tuh-NEER ün ray-POHⁿSS', ['connotation']),
  rule(1249, 'Économe ou avare : la dépense est la même, le jugement change.', 'Thrifty or miserly: the spending is the same, the judgement changes.',
    '/e.kɔ.nɔm u a.vaʁ la de.pɑ̃s ɛ la mɛm lə ʒyʒ.mɑ̃ ʃɑ̃ʒ/', 'ay-ko-NOMM oo a-VAR | la day-PAHⁿSS eh la MEM | luh zhüzh-MAHⁿ SHAHⁿZH',
    'Économe, avare, radin : qu’est-ce qui change d’un mot à l’autre ?',
    'Pas la dépense : le jugement, et le registre. Économe approuve, avare blâme, radin blâme entre amis. Avant de choisir, demande-toi si tu veux louer ou reprocher.',
    ['connotation']),
  sent(1250, 'Ambitieuse, c’est un compliment ; arriviste, une accusation.', 'Ambitious is a compliment; careerist is an accusation.',
    '/ɑ̃.bi.sjøz sɛ.tœ̃ kɔ̃.pli.mɑ̃ a.ʁi.vist yn a.ky.za.sjɔ̃/', 'ahⁿ-bee-SYEUZ | seh-tuhⁿ kohⁿ-plee-MAHⁿ | a-ree-VEEST | ün a-kü-za-SYOHⁿ', ['connotation'], FCVDR),
  sent(1251, 'Prudent pour les uns, timoré pour les autres : le chef n’a pas changé.', 'Cautious to some, timid to others: the boss has not changed.',
    '/pʁy.dɑ̃ puʁ le.zœ̃ ti.mɔ.ʁe puʁ le.zotʁ lə ʃɛf na pa ʃɑ̃.ʒe/', 'prü-DAHⁿ poor lay-ZUHⁿ | tee-mo-RAY poor lay-ZOHTR | luh SHEF | na pa shahⁿ-ZHAY', ['connotation']),
];

/* ── ACT 5 · LES SUFFIXES QUI JUGENT (.1252-.1265) ──────────────────────── */

export const ACT5_ROWS: Row[] = [
  fam(1252, 'rouge, rougeâtre', 'red, reddish', '/ʁuʒ ʁu.ʒɑtʁ/', 'ROOZH, roo-ZHAHTR', ['suffixe'],
    'Rougeâtre : qui tire sur le rouge. Ici, -âtre dit seulement « presque ».'),
  col(1253, 'une lueur rougeâtre', 'a reddish glow', '/yn lɥœʁ ʁu.ʒɑtʁ/', 'ün LWUHR | roo-ZHAHTR', ['suffixe'],
    'Une couleur approximative, sans jugement.'),
  col(1254, 'un teint verdâtre', 'a greenish complexion', '/œ̃ tɛ̃ vɛʁ.dɑtʁ/', 'uhⁿ TEHⁿ | vehr-DAHTR', ['suffixe'],
    'Verdâtre : d’un vert un peu trouble. Sur un visage, le mot n’a rien de flatteur.'),
  col(1255, 'un parfum douceâtre', 'a sickly-sweet scent', '/œ̃ paʁ.fœ̃ du.sɑtʁ/', 'uhⁿ par-FUHⁿ | doo-SAHTR', ['suffixe'],
    'Douceâtre : doux et fade. Le suffixe rend le doux désagréable.'),
  col(1256, 'un bellâtre', 'a vain pretty boy', '/œ̃ bɛ.lɑtʁ/', 'uhⁿ beh-LAHTR', ['suffixe'],
    'Un bellâtre : un homme beau, mais fat et niais. Le mot se moque.'),
  fam(1257, 'fade, fadasse', 'bland, utterly tasteless', '/fad fa.das/', 'FAD, fa-DASS', ['suffixe'],
    'Fadasse : qui manque totalement de goût. Plus fort, et plus méprisant, que fade.'),
  col(1258, 'remplir de la paperasse', 'to fill in paperwork', '/ʁɑ̃.pliʁ də la pa.pʁas/', 'rahⁿ-PLEER | duh la pa-PRASS', ['suffixe'],
    'La paperasse : des papiers qu’on juge inutiles. Le mot râle.'),
  fam(1259, 'lourd, lourdaud', 'heavy, oafish', '/luʁ luʁ.do/', 'LOOR, loor-DOH', ['suffixe'],
    'Un lourdaud : une personne lente et maladroite. -aud ajoute la moquerie.'),
  fam(1260, 'un écrivain, un écrivailleur', 'a writer, a hack writer', '/œ̃.ne.kʁi.vɛ̃ œ̃.ne.kʁi.va.jœʁ/', 'uhⁿ-nay-kree-VEHⁿ, uhⁿ-nay-kree-va-YUHR', ['suffixe'],
    'Un écrivailleur : un mauvais écrivain. -ailleur rabaisse.'),
  sent(1261, 'Au loin, le ciel prenait une teinte rougeâtre.', 'In the distance, the sky was taking on a reddish tint.',
    '/o lwɛ̃ lə sjɛl pʁə.nɛ yn tɛ̃t ʁu.ʒɑtʁ/', 'oh LWEHⁿ | luh SYEL | pruh-NEH ün tehⁿt roo-ZHAHTR', ['suffixe'], FCVDR),
  sent(1262, 'Il est descendu du bateau avec un teint verdâtre.', 'He came off the boat with a greenish complexion.',
    '/i.lɛ de.sɑ̃.dy dy ba.to a.vɛ.kœ̃ tɛ̃ vɛʁ.dɑtʁ/', 'ee-leh day-sahⁿ-DÜ dü ba-TOH | a-veh-kuhⁿ TEHⁿ vehr-DAHTR', ['suffixe']),
  rule(1263, 'Le suffixe -âtre dit « presque » ; souvent, il ajoute « et pas très beau ».', 'The suffix -âtre says « almost »; often it adds « and not very nice ».',
    '/lə sy.fiks ɑtʁ di pʁɛsk su.vɑ̃ i.la.ʒut e pa tʁɛ bo/', 'luh sü-FEEKS AHTR | dee PRESK | soo-VAHⁿ | ee-la-ZHOOT | ay pa treh BOH',
    'Rougeâtre, verdâtre : le suffixe -âtre juge-t-il toujours ?',
    'Non. Une lueur rougeâtre tire simplement sur le rouge. Mais un teint verdâtre, un parfum douceâtre, un bellâtre : là, le suffixe déprécie. Regarde ce qu’il qualifie.',
    ['suffixe']),
  sent(1264, 'Je passe mes soirées à remplir de la paperasse.', 'I spend my evenings filling in paperwork.',
    '/ʒə pas me swa.ʁe a ʁɑ̃.pliʁ də la pa.pʁas/', 'zhuh PASS may swa-RAY | a rahⁿ-PLEER | duh la pa-PRASS', ['suffixe'], FCVDR),
  sent(1265, 'La soupe était fade ; la sauce, franchement fadasse.', 'The soup was bland; the sauce, frankly tasteless.',
    '/la sup e.tɛ fad la sos fʁɑ̃ʃ.mɑ̃ fa.das/', 'la SOOP | ay-teh FAD | la SOHSS | frahⁿsh-MAHⁿ fa-DASS', ['suffixe']),
];

/* ── ACT 6 · ADOUCIR OU MASQUER (.1266-.1277) ───────────────────────────── */

export const ACT6_ROWS: Row[] = [
  fam(1266, 'mourir, décéder, s’éteindre', 'to die, to pass away, to slip away', '/mu.ʁiʁ de.se.de se.tɛ̃dʁ/', 'moo-REER, day-say-DAY, say-TEHⁿDR', ['euphemisme'],
    'Mourir : le mot direct. Décéder : soutenu, souvent par euphémisme. S’éteindre : un euphémisme doux.'),
  sent(1267, 'Il s’est éteint dans la nuit, entouré des siens.', 'He slipped away in the night, surrounded by his family.',
    '/il sɛ.te.tɛ̃ dɑ̃ la nɥi ɑ̃.tu.ʁe de sjɛ̃/', 'eel seh-tay-TEHⁿ | dahⁿ la NWEE | ahⁿ-too-RAY day SYEHⁿ', ['euphemisme'], FCVDR),
  sent(1268, 'Madame Roy est décédée le 3 mars, à Rimouski.', 'Mrs Roy passed away on 3 March, in Rimouski.',
    '/ma.dam ʁwa ɛ de.se.de lə tʁwa maʁs a ʁi.mus.ki/', 'ma-DAMM RWA | eh day-say-DAY | luh trwa MARSS | a ree-moos-KEE', ['euphemisme'], FCVR, SO),
  rule(1269, 'Un euphémisme adoucit les mots, jamais les faits.', 'A euphemism softens the words, never the facts.',
    '/œ̃.nø.fe.mism a.du.si le mo ʒa.mɛ le fɛ/', 'uhⁿ-neu-fay-MEESM | a-doo-SEE lay MOH | zha-meh lay FEH',
    'Comment savoir si un euphémisme est juste ?',
    'Demande-toi si le lecteur comprend encore ce qui s’est passé. S’éteindre, pour un décès : il comprend, et la famille est ménagée. Un incident, pour un incendie : il ne comprend plus.',
    ['euphemisme']),
  sent(1270, 'Le mot doux ménage la famille ; il ne cache rien.', 'The gentle word spares the family; it hides nothing.',
    '/lə mo du me.naʒ la fa.mij il nə kaʃ ʁjɛ̃/', 'luh moh DOO | may-NAZH la fa-MEEY | eel nuh KASH RYEHⁿ', ['euphemisme']),
  sent(1271, 'Ce mot doux cache un fait que le lecteur a le droit de connaître.', 'This gentle word hides a fact the reader has a right to know.',
    '/sə mo du ka.ʃœ̃ fɛ kə lə lɛk.tœʁ a lə dʁwa də kɔ.nɛtʁ/', 'suh moh DOO | ka-shuhⁿ FEH | kuh luh lek-TUHR | a luh DRWA duh ko-NEHTR', ['euphemisme'], FCVDR),
  sent(1272, 'Dis-le avec égards, mais dis-le.', 'Say it with consideration, but say it.',
    '/di.lə a.vɛ.ke.ɡaʁ mɛ di.lə/', 'dee-LUH | a-veh-kay-GAR | meh dee-LUH', ['euphemisme']),
  sent(1273, 'Une restructuration qui supprime quarante postes, ce sont quarante licenciements.', 'A restructuring that cuts forty jobs is forty redundancies.',
    '/yn ʁə.stʁyk.ty.ʁa.sjɔ̃ ki sy.pʁim ka.ʁɑ̃t pɔst sə sɔ̃ ka.ʁɑ̃t li.sɑ̃.si.mɑ̃/', 'ün ruh-strük-tü-ra-SYOHⁿ | kee sü-PREEM ka-rahⁿt POST | suh sohⁿ ka-rahⁿt lee-sahⁿ-see-MAHⁿ', ['euphemisme']),
  sent(1274, 'Le courriel parle d’un ajustement tarifaire : l’abonnement augmente de huit dollars.', 'The email speaks of a price adjustment: the subscription goes up by eight dollars.',
    '/lə ku.ʁjɛl paʁl dœ̃.na.ʒys.tə.mɑ̃ ta.ʁi.fɛʁ la.bɔn.mɑ̃ oɡ.mɑ̃t də ɥi dɔ.laʁ/', 'luh koo-RYEL | parl duhⁿ-na-zhüs-tuh-MAHⁿ ta-ree-FEHR | la-bonn-MAHⁿ | og-MAHⁿT duh wee do-LAR', ['euphemisme']),
  col(1275, 'respecter, adoucir, masquer', 'to respect, to soften, to mask', '/ʁɛs.pɛk.te a.du.siʁ mas.ke/', 'res-pek-TAY, a-doo-SEER, mass-KAY', ['euphemisme'],
    'Trois usages de l’euphémisme : respecter une douleur, adoucir une remarque, masquer un fait. Seul le troisième trompe.'),
  sent(1276, 'Respecter, adoucir, masquer : trois usages, trois jugements.', 'Respecting, softening, masking: three uses, three judgements.',
    '/ʁɛs.pɛk.te a.du.siʁ mas.ke tʁwa.zy.zaʒ tʁwa ʒyʒ.mɑ̃/', 'res-pek-TAY | a-doo-SEER | mass-KAY | trwa-zü-ZAZH | trwa zhüzh-MAHⁿ', ['euphemisme']),
  sent(1277, 'Ici, le mot direct serait le plus respectueux.', 'Here the plain word would be the most respectful.',
    '/i.si lə mo di.ʁɛkt sə.ʁɛ lə ply ʁɛs.pɛk.tɥø/', 'ee-SEE | luh moh dee-REKT | suh-REH luh plü res-pek-TWEU', ['euphemisme']),
];

/* ── ACT 7 · LES VERBES QUI VONT AVEC (.1278-.1292) ─────────────────────── */

export const ACT7_ROWS: Row[] = [
  col(1279, 'émettre une hypothèse', 'to put forward a hypothesis', '/e.mɛtʁ yn i.pɔ.tɛz/', 'ay-METR ün ee-po-TEZ', ['verbe'],
    'Émettre : exprimer, formuler une idée. On émet une hypothèse.'),
  col(1280, 'formuler des revendications', 'to set out demands', '/fɔʁ.my.le de ʁə.vɑ̃.di.ka.sjɔ̃/', 'for-mü-LAY | day ruh-vahⁿ-dee-ka-SYOHⁿ', ['verbe'],
    'Formuler : exprimer de façon précise. On formule une question, des revendications.'),
  col(1281, 'nourrir un projet', 'to cherish a plan', '/nu.ʁiʁ œ̃ pʁɔ.ʒɛ/', 'noo-REER uhⁿ pro-ZHEH', ['verbe'],
    'Nourrir : entretenir en soi une idée, un sentiment, un projet.'),
  col(1282, 'dissiper un malentendu', 'to clear up a misunderstanding', '/di.si.pe œ̃ ma.lɑ̃.tɑ̃.dy/', 'dee-see-PAY | uhⁿ ma-lahⁿ-tahⁿ-DÜ', ['verbe'],
    'Dissiper : faire disparaître. On dissipe, ou on fait cesser, un malentendu.'),
  col(1283, 'tenir sa promesse', 'to keep one’s promise', '/tə.niʁ sa pʁɔ.mɛs/', 'tuh-NEER sa pro-MESS', ['verbe'],
    'On fait une promesse, on la tient, ou l’on y manque.'),
  col(1284, 'mener une enquête', 'to conduct an investigation', '/mə.ne yn ɑ̃.kɛt/', 'muh-NAY ün ahⁿ-KET', ['verbe'],
    'Mener une enquête : enquêter.'),
  col(1285, 'prendre des mesures', 'to take steps', '/pʁɑ̃dʁ de mə.zyʁ/', 'prahⁿdr day muh-ZÜR', ['verbe'],
    'Prendre des mesures, intervenir, passer à l’action. « Prendre une action » est un calque déconseillé (OQLF).'),
  sent(1286, 'Puis-je vous poser une dernière question ?', 'May I ask you one last question?',
    '/pɥiʒ vu po.ze yn dɛʁ.njɛʁ kɛs.tjɔ̃/', 'pweezh voo poh-ZAY | ün dehr-nyehr kes-TYOHⁿ', ['verbe'], FCVDR),
  sent(1287, 'Le comité a émis une autre hypothèse.', 'The committee put forward another hypothesis.',
    '/lə kɔ.mi.te a e.mi y.no.tʁi.pɔ.tɛz/', 'luh ko-mee-TAY | a ay-MEE | ü-noh-tree-po-TEZ', ['verbe']),
  sent(1288, 'Un simple appel a suffi à dissiper le malentendu.', 'A simple phone call was enough to clear up the misunderstanding.',
    '/œ̃ sɛ̃.pla.pɛl a sy.fi a di.si.pe lə ma.lɑ̃.tɑ̃.dy/', 'uhⁿ sehⁿ-pla-PEL | a sü-FEE | a dee-see-PAY | luh ma-lahⁿ-tahⁿ-DÜ', ['verbe'], FCVDR),
  sent(1289, 'Elle nourrit depuis longtemps le projet de reprendre ses études.', 'She has long cherished the plan of going back to her studies.',
    '/ɛl nu.ʁi də.pɥi lɔ̃.tɑ̃ lə pʁɔ.ʒɛ də ʁə.pʁɑ̃dʁ se.ze.tyd/', 'el noo-REE | duh-pwee lohⁿ-TAHⁿ | luh pro-ZHEH | duh ruh-PRAHⁿDR say-zay-TÜD', ['verbe']),
  rule(1290, 'Un nom choisit ses verbes : on pose une question, on émet une hypothèse, on tient une promesse.', 'A noun chooses its verbs: you ask a question, put forward a hypothesis, keep a promise.',
    '/œ̃ nɔ̃ ʃwa.zi se vɛʁb ɔ̃ poz yn kɛs.tjɔ̃ ɔ̃.ne.mɛ.ty.ni.pɔ.tɛz ɔ̃ tjɛ̃ yn pʁɔ.mɛs/', 'uhⁿ NOHⁿ | shwa-ZEE say VEHRB | ohⁿ POHZ ün kes-TYOHⁿ | ohⁿ-nay-meh-tü-nee-po-TEZ | ohⁿ TYEHⁿ ün pro-MESS',
    'Comment trouver le verbe qui va avec un nom ?',
    'Pars du nom, pas de l’anglais. Le dictionnaire donne ses verbes habituels : poser une question, tenir une promesse, mener une enquête. Le calque mot à mot (demander une question, prendre une action) sonne faux.',
    ['verbe']),
  sent(1291, 'Il a tenu sa promesse, à la lettre.', 'He kept his promise to the letter.',
    '/i.la tə.ny sa pʁɔ.mɛs a la lɛtʁ/', 'ee-la tuh-NÜ sa pro-MESS | a la LETR', ['verbe']),
  sent(1292, 'La ville a pris des mesures pour réduire le bruit.', 'The city has taken steps to reduce the noise.',
    '/la vil a pʁi de mə.zyʁ puʁ ʁe.dɥiʁ lə bʁɥi/', 'la VEEL | a pree day muh-ZÜR | poor ray-DWEER luh BRWEE', ['verbe']),
];

/* ── ACT 8 · LES INTENSIFS ATTENDUS (.1293-.1307) ───────────────────────── */

export const ACT8_ROWS: Row[] = [
  col(1293, 'grièvement blessé', 'seriously injured', '/ɡʁi.jɛv.mɑ̃ blɛ.se/', 'gree-yev-MAHⁿ bleh-SAY', ['intensif'],
    'Grièvement ne va qu’avec blesser et ses voisins (brûler, atteindre). Pour une maladie : gravement.'),
  col(1294, 'gravement malade', 'seriously ill', '/ɡʁav.mɑ̃ ma.lad/', 'grav-MAHⁿ ma-LAD', ['intensif'],
    'Gravement : l’intensif général. Il va aussi avec blessé ; grièvement, lui, ne va pas avec malade.'),
  col(1295, 'un refus catégorique', 'a flat refusal', '/œ̃ ʁə.fy ka.te.ɡɔ.ʁik/', 'uhⁿ ruh-FÜ | ka-tay-go-REEK', ['intensif'],
    'Catégorique : exprimé avec force et netteté.'),
  col(1296, 'une écrasante majorité', 'an overwhelming majority', '/y.ne.kʁa.zɑ̃t ma.ʒɔ.ʁi.te/', 'ü-nay-kra-ZAHⁿT | ma-zho-ree-TAY', ['intensif'],
    'Écrasante : qui accable par sa supériorité. Avant ou après le nom.'),
  col(1297, 'un gros fumeur', 'a heavy smoker', '/œ̃ ɡʁo fy.mœʁ/', 'uhⁿ groh fü-MUHR', ['intensif'],
    'Gros, pour celui qui fume beaucoup. L’anglais dit heavy ; le français dit gros.'),
  col(1298, 'une circulation dense', 'heavy traffic', '/yn siʁ.ky.la.sjɔ̃ dɑ̃s/', 'ün seer-kü-la-SYOHⁿ | DAHⁿSS', ['intensif'],
    'Dense : beaucoup de voitures, serrées. L’intensif attendu de circulation.'),
  col(1299, 'un célibataire endurci', 'a confirmed bachelor', '/œ̃ se.li.ba.tɛ.ʁɑ̃.dyʁ.si/', 'uhⁿ say-lee-ba-teh-rahⁿ-dür-SEE', ['intensif'],
    'Endurci : qui a pris des habitudes bien ancrées.'),
  col(1300, 'une habitude invétérée', 'an ingrained habit', '/y.na.bi.tyd ɛ̃.ve.te.ʁe/', 'ü-na-bee-TÜD | ehⁿ-vay-tay-RAY', ['intensif'],
    'Invétéré : enraciné par le temps.'),
  col(1301, 'une pluie battante', 'driving rain', '/yn plɥi ba.tɑ̃t/', 'ün PLWEE | ba-TAHⁿT', ['intensif'],
    'Une pluie battante : une forte pluie.'),
  sent(1302, 'Deux passagers ont été grièvement blessés dans l’accident.', 'Two passengers were seriously injured in the accident.',
    '/dø pa.sa.ʒe ɔ̃.te.te ɡʁi.jɛv.mɑ̃ blɛ.se dɑ̃ lak.si.dɑ̃/', 'deu pa-sa-ZHAY | ohⁿ-tay-TAY gree-yev-MAHⁿ bleh-SAY | dahⁿ lak-see-DAHⁿ', ['intensif'], FCVDR),
  sent(1303, 'Sa grand-mère est gravement malade depuis l’hiver.', 'Her grandmother has been seriously ill since the winter.',
    '/sa ɡʁɑ̃.mɛʁ ɛ ɡʁav.mɑ̃ ma.lad də.pɥi li.vɛʁ/', 'sa grahⁿ-MEHR | eh grav-MAHⁿ ma-LAD | duh-pwee lee-VEHR', ['intensif']),
  sent(1304, 'La proposition a été adoptée à une écrasante majorité.', 'The proposal was adopted by an overwhelming majority.',
    '/la pʁɔ.po.zi.sjɔ̃ a e.te a.dɔp.te a y.ne.kʁa.zɑ̃t ma.ʒɔ.ʁi.te/', 'la pro-po-zee-SYOHⁿ | a ay-tay a-dop-TAY | a ü-nay-kra-ZAHⁿT ma-zho-ree-TAY', ['intensif'], FCVDR),
  sent(1305, 'Ce matin, la circulation est dense sur l’autoroute 40.', 'This morning traffic is heavy on Highway 40.',
    '/sə ma.tɛ̃ la siʁ.ky.la.sjɔ̃ ɛ dɑ̃s syʁ lo.to.ʁut ka.ʁɑ̃t/', 'suh ma-TEHⁿ | la seer-kü-la-SYOHⁿ eh DAHⁿSS | sür lo-to-ROOT ka-RAHⁿT', ['intensif']),
  rule(1306, 'Chaque mot attend ses intensifs : grièvement blessé, mais gravement malade.', 'Each word expects its intensifiers: grièvement blessé, but gravement malade.',
    '/ʃak mo a.tɑ̃ se.zɛ̃.tɑ̃.sif ɡʁi.jɛv.mɑ̃ blɛ.se mɛ ɡʁav.mɑ̃ ma.lad/', 'shak MOH | a-TAHⁿ say-zehⁿ-tahⁿ-SEEF | gree-yev-MAHⁿ bleh-SAY | meh grav-MAHⁿ ma-LAD',
    '« Très » suffit-il toujours ?',
    'Très est toujours correct. Mais l’usage a ses intensifs attendus : un refus catégorique, une écrasante majorité, un gros fumeur, une pluie battante. Le bon intensif sonne juste ; le calque de l’anglais sonne faux.',
    ['intensif']),
  sent(1307, 'Nous sommes partis sous une pluie battante.', 'We set off in driving rain.',
    '/nu sɔm paʁ.ti su.zyn plɥi ba.tɑ̃t/', 'noo somm par-TEE | soo-zün PLWEE ba-TAHⁿT', ['intensif']),
];

/* ── ACT 9 · LE CONTRAIRE DÉPEND DU SENS (.1308-.1321) ──────────────────── */

export const ACT9_ROWS: Row[] = [
  col(1308, 'un hiver doux', 'a mild winter', '/œ̃.ni.vɛʁ du/', 'uhⁿ-nee-vehr DOO', ['contraire'],
    'Doux, pour le climat : ni froid ni dur. Son contraire : rigoureux.'),
  col(1309, 'un hiver rigoureux', 'a harsh winter', '/œ̃.ni.vɛʁ ʁi.ɡu.ʁø/', 'uhⁿ-nee-vehr ree-goo-REU', ['contraire'],
    'Rigoureux, pour le climat : dur à supporter.'),
  col(1310, 'un caractère emporté', 'a quick temper', '/œ̃ ka.ʁak.tɛ.ʁɑ̃.pɔʁ.te/', 'uhⁿ ka-rak-teh-rahⁿ-por-TAY', ['contraire'],
    'Emporté : qui se met facilement en colère. Le contraire de doux pour une personne.'),
  col(1311, 'une peau rêche', 'rough skin', '/yn po ʁɛʃ/', 'ün POH | RESH', ['contraire'],
    'Rêche : rude au toucher. Le contraire de doux pour la peau, un tissu.'),
  col(1312, 'de l’eau salée', 'salt water', '/də lo sa.le/', 'duh LOH | sa-LAY', ['contraire'],
    'L’eau douce n’est pas salée : son contraire est l’eau salée.'),
  col(1314, 'un café corsé', 'a strong coffee', '/œ̃ ka.fe kɔʁ.se/', 'uhⁿ ka-FAY | kor-SAY', ['contraire'],
    'Corsé, ou fort : le contraire de léger pour un café.'),
  col(1315, 'une faute grave', 'a serious fault', '/yn fot ɡʁav/', 'ün foht GRAV', ['contraire'],
    'Grave : le contraire de léger pour une faute, une blessure, une peine.'),
  sent(1316, 'Après un hiver aussi rigoureux, ce printemps doux fait du bien.', 'After such a harsh winter, this mild spring does us good.',
    '/a.pʁɛ.zœ̃.ni.vɛʁ o.si ʁi.ɡu.ʁø sə pʁɛ̃.tɑ̃ du fɛ dy bjɛ̃/', 'a-preh-zuhⁿ-nee-VEHR | oh-see ree-goo-REU | suh prehⁿ-tahⁿ DOO | feh dü BYEHⁿ', ['contraire'], FCVDR),
  sent(1317, 'Il a un caractère doux, mais son frère est plutôt emporté.', 'He has a gentle nature, but his brother is rather quick-tempered.',
    '/i.la œ̃ ka.ʁak.tɛʁ du mɛ sɔ̃ fʁɛʁ ɛ ply.to.tɑ̃.pɔʁ.te/', 'ee-la uhⁿ ka-rak-tehr DOO | meh sohⁿ FREHR | eh plü-toh-tahⁿ-por-TAY', ['contraire']),
  sent(1318, 'À midi, un repas léger ; le soir, un repas plus copieux.', 'At noon, a light meal; in the evening, a heartier one.',
    '/a mi.di œ̃ ʁə.pa le.ʒe lə swaʁ œ̃ ʁə.pa ply kɔ.pjø/', 'a mee-DEE | uhⁿ ruh-pa lay-ZHAY | luh SWAR | uhⁿ ruh-PA plü ko-PYEU', ['contraire']),
  rule(1319, 'Un mot a autant de contraires que de sens : trouve d’abord le sens.', 'A word has as many opposites as meanings: find the meaning first.',
    '/œ̃ mo a o.tɑ̃ də kɔ̃.tʁɛʁ kə də sɑ̃s tʁuv da.bɔʁ lə sɑ̃s/', 'uhⁿ MOH | a oh-TAHⁿ duh kohⁿ-TREHR | kuh duh SAHⁿSS | troov da-BOR luh SAHⁿSS',
    'Quel est le contraire de « doux » ?',
    'Cela dépend du sens : un hiver doux, rigoureux ; un caractère doux, emporté ; une peau douce, rêche ; l’eau douce, salée. C’est le nom voisin qui choisit le contraire.',
    ['contraire']),
  sent(1320, 'La blessure est légère ; la faute, elle, est grave.', 'The injury is slight; the fault, though, is serious.',
    '/la blɛ.syʁ ɛ le.ʒɛʁ la fot ɛl ɛ ɡʁav/', 'la bleh-SÜR | eh lay-ZHEHR | la FOHT | EL | eh GRAV', ['contraire'], FCVDR),
  sent(1321, 'Un café léger pour moi, un café corsé pour elle.', 'A weak coffee for me, a strong coffee for her.',
    '/œ̃ ka.fe le.ʒe puʁ mwa œ̃ ka.fe kɔʁ.se puʁ ɛl/', 'uhⁿ ka-fay lay-ZHAY poor MWA | uhⁿ ka-fay kor-SAY poor EL', ['contraire']),
];

/* ── ACT 10 · UNE ÉTIQUETTE SELON LA RÉGION (.1322-.1332) ───────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1322, 'Je magasine un nouvel ordinateur depuis une semaine.', 'I have been shopping around for a new computer for a week. (Québec)',
    '/ʒə ma.ɡa.zin œ̃ nu.vɛ.lɔʁ.di.na.tœʁ də.pɥi yn sə.mɛn/', 'zhuh ma-ga-ZEEN | uhⁿ noo-veh-lor-dee-na-TUHR | duh-pwee ün suh-MENN', ['region', 'quebec'], FCVDR),
  col(1323, 'le magasinage en ligne', 'online shopping (Québec)', '/lə ma.ɡa.zi.naʒ ɑ̃ liɲ/', 'luh ma-ga-zee-NAZH | ahⁿ LEENY', ['region', 'quebec'],
    'Le terme recommandé au Québec (OQLF). Magasinage est implanté et légitimé.'),
  fam(1325, 'une auto, une voiture, une automobile', 'a car', '/y.no.to yn vwa.tyʁ y.no.to.mɔ.bil/', 'ü-noh-TOH, ün vwa-TÜR, ü-noh-toh-mo-BEEL', ['region'],
    'Les mots standard que Usito propose à la place de char.'),
  col(1326, 'ma conjointe', 'my partner (female)', '/ma kɔ̃.ʒwɛ̃t/', 'ma kohⁿ-ZHWEHⁿT', ['region', 'quebec'],
    'Le mot standard, pour un formulaire ou une lettre. Ma blonde, au Québec, est familier.'),
  sent(1327, 'Dans un rapport, écris voiture ou automobile, pas char.', 'In a report, write voiture or automobile, not char.',
    '/dɑ̃.zœ̃ ʁa.pɔʁ e.kʁi vwa.tyʁ u o.to.mɔ.bil pa ʃaʁ/', 'dahⁿ-zuhⁿ ra-POR | ay-KREE vwa-TÜR | oo oh-toh-mo-BEEL | pa SHAR', ['region', 'quebec']),
  sent(1328, 'Entre amis, ma blonde passe très bien ; dans un formulaire, écris ma conjointe.', 'Among friends, ma blonde is fine; on a form, write ma conjointe.',
    '/ɑ̃.tʁa.mi ma blɔ̃d pas tʁɛ bjɛ̃ dɑ̃.zœ̃ fɔʁ.my.lɛʁ e.kʁi ma kɔ̃.ʒwɛ̃t/', 'ahⁿ-tra-MEE | ma BLOHⁿD | pass treh BYEHⁿ | dahⁿ-zuhⁿ for-mü-LEHR | ay-kree ma kohⁿ-ZHWEHⁿT', ['region', 'quebec'], FCVDR),
  sent(1329, 'Le mot courriel est né au Québec ; la France l’a recommandé.', 'The word courriel was born in Québec; France has recommended it.',
    '/lə mo ku.ʁjɛl ɛ ne o ke.bɛk la fʁɑ̃s la ʁə.kɔ.mɑ̃.de/', 'luh moh koo-RYEL | eh NAY oh kay-BEK | la FRAHⁿSS | la ruh-ko-mahⁿ-DAY', ['region', 'quebec']),
  rule(1330, 'Au Québec, magasiner est standard, blonde est familier, char est critiqué.', 'In Québec, magasiner is standard, blonde is informal, char is criticised.',
    '/o ke.bɛk ma.ɡa.zi.ne ɛ stɑ̃.daʁ blɔ̃d ɛ fa.mi.lje ʃaʁ ɛ kʁi.ti.ke/', 'oh kay-BEK | ma-ga-zee-NAY eh stahⁿ-DAR | BLOHⁿD eh fa-mee-LYAY | SHAR eh kree-tee-KAY',
    'Magasiner, blonde, char : le même registre ?',
    'Non. Usito marque les trois comme québécois, mais seul blonde porte « familier », et char est critiqué comme anglicisme non standard. Magasiner, sans marque, s’écrit dans un rapport.',
    ['region', 'quebec']),
  sent(1331, 'Un même mot peut être neutre ici et familier ailleurs.', 'The same word can be neutral here and informal elsewhere.',
    '/œ̃ mɛm mo pø ɛtʁ nøtʁ i.si e fa.mi.lje a.jœʁ/', 'uhⁿ mem MOH | peu etr NEUTR ee-SEE | ay fa-mee-LYAY a-YUHR', ['region']),
  sent(1332, 'Avant d’étiqueter un mot, demande-toi où on le lit.', 'Before labelling a word, ask yourself where it is being read.',
    '/a.vɑ̃ de.tik.te œ̃ mo də.mɑ̃d.twa u ɔ̃ lə li/', 'a-vahⁿ day-teek-TAY uhⁿ MOH | duh-mahⁿd-TWA | oo ohⁿ luh LEE', ['region']),
];

/* ── ACT 11 · LE MOT PASSE-PARTOUT (.1333-.1345) ────────────────────────── */

export const ACT11_ROWS: Row[] = [
  col(1333, 'jouer un rôle majeur', 'to play a major role', '/ʒwe œ̃ ʁol ma.ʒœʁ/', 'zhway uhⁿ ROHL | ma-ZHUHR', ['passe-partout'],
    'Majeur : plus important que les autres. Mieux que « un rôle important » quand c’est le premier rôle.'),
  col(1334, 'une somme considérable', 'a considerable sum', '/yn sɔm kɔ̃.si.de.ʁabl/', 'ün SOMM | kohⁿ-see-day-RABL', ['passe-partout'],
    'Considérable : très grand par le nombre ou la valeur.'),
  col(1335, 'une erreur grave', 'a serious mistake', '/y.nɛ.ʁœʁ ɡʁav/', 'ü-neh-RUHR GRAV', ['passe-partout'],
    'Grave : qui a des conséquences sérieuses. Ce qu’« important » voulait dire.'),
  col(1336, 'une personne influente', 'an influential person', '/yn pɛʁ.sɔn ɛ̃.fly.ɑ̃t/', 'ün pehr-SONN | ehⁿ-flü-AHⁿT', ['passe-partout'],
    'Influente : qui pèse sur les décisions des autres.'),
  col(1337, 'prononcer un discours', 'to deliver a speech', '/pʁɔ.nɔ̃.se œ̃ dis.kuʁ/', 'pro-nohⁿ-SAY uhⁿ dees-KOOR', ['passe-partout'],
    'Prononcer : dire à voix haute. Mieux que « faire un discours » à l’écrit.'),
  col(1338, 'exprimer un avis', 'to express an opinion', '/ɛks.pʁi.me œ̃.na.vi/', 'eks-pree-MAY | uhⁿ-na-VEE', ['passe-partout'],
    'Exprimer : rendre sensible par la parole. Mieux que « dire un avis ».'),
  sent(1340, 'Ce bénévole a joué un rôle majeur dans le projet.', 'This volunteer played a major role in the project.',
    '/sə be.ne.vɔl a ʒwe œ̃ ʁol ma.ʒœʁ dɑ̃ lə pʁɔ.ʒɛ/', 'suh bay-nay-VOL | a ZHWAY | uhⁿ rohl ma-ZHUHR | dahⁿ luh pro-ZHEH', ['passe-partout'], FCVDR),
  sent(1341, 'La rénovation a coûté une somme considérable.', 'The renovation cost a considerable sum.',
    '/la ʁe.nɔ.va.sjɔ̃ a ku.te yn sɔm kɔ̃.si.de.ʁabl/', 'la ray-no-va-SYOHⁿ | a koo-TAY | ün SOMM kohⁿ-see-day-RABL', ['passe-partout']),
  sent(1342, 'Elle occupe un poste de direction depuis deux ans.', 'She has held a management position for two years.',
    '/ɛl ɔ.kyp œ̃ pɔst də di.ʁɛk.sjɔ̃ də.pɥi dø.zɑ̃/', 'el o-KÜP | uhⁿ POST duh dee-rek-SYOHⁿ | duh-pwee deu-ZAHⁿ', ['passe-partout']),
  rule(1343, 'Important dit seulement que ça compte ; dis en quoi.', 'Important only says that it matters; say how.',
    '/ɛ̃.pɔʁ.tɑ̃ di sœl.mɑ̃ kə sa kɔ̃t di.zɑ̃ kwa/', 'ehⁿ-por-TAHⁿ | dee suhl-MAHⁿ | kuh sa KOHⁿT | dee-zahⁿ KWA',
    '« Un problème important » : que peux-tu dire à la place ?',
    'Cela dépend de ce qui compte : un problème grave (il fait du tort), un rôle majeur (il pèse plus que les autres), une somme considérable (elle est très grande). Si rien de plus précis n’est vrai, garde important.',
    ['passe-partout']),
  sent(1344, 'Si rien de plus précis n’est vrai, garde le mot simple.', 'If nothing more precise is true, keep the simple word.',
    '/si ʁjɛ̃ də ply pʁe.si nɛ vʁɛ ɡaʁd lə mo sɛ̃pl/', 'see RYEHⁿ | duh plü pray-SEE | neh VREH | gard luh moh SEHⁿPL', ['passe-partout'], FCVDR),
  sent(1345, 'Le maire a prononcé un discours très bref.', 'The mayor delivered a very short speech.',
    '/lə mɛʁ a pʁɔ.nɔ̃.se œ̃ dis.kuʁ tʁɛ bʁɛf/', 'luh MEHR | a pro-nohⁿ-SAY | uhⁿ dees-KOOR | treh BREF', ['passe-partout']),
];

/* ── ACT 12 · TON PORTRAIT (.1346-.1353) ────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1346, 'Elle dit ce qu’elle pense, avec franchise et sans détour.', 'She says what she thinks, frankly and without beating about the bush.',
    '/ɛl di sə kɛl pɑ̃s a.vɛk fʁɑ̃.ʃiz e sɑ̃ de.tuʁ/', 'el DEE | suh kel PAHⁿSS | a-vek frahⁿ-SHEEZ | ay sahⁿ day-TOOR', ['portrait']),
  sent(1347, 'Elle gérait le budget avec une rigueur que nous lui envions.', 'She managed the budget with a rigour we envied her.',
    '/ɛl ʒe.ʁɛ lə by.dʒɛ a.vɛ.kyn ʁi.ɡœʁ kə nu lɥi ɑ̃.vjɔ̃/', 'el zhay-REH luh bü-DJEH | a-veh-kün ree-GUHR | kuh noo lwee ahⁿ-VYOHⁿ', ['portrait'], FCVDR),
  sent(1348, 'Quand elle tenait à une idée, il fallait de bons arguments pour l’en faire changer.', 'When she held to an idea, it took good arguments to make her change it.',
    '/kɑ̃.tɛl tə.nɛ a y.ni.de il fa.lɛ də bɔ̃.zaʁ.ɡy.mɑ̃ puʁ lɑ̃ fɛʁ ʃɑ̃.ʒe/', 'kahⁿ-tel tuh-NEH | a ü-nee-DAY | eel fa-LEH | duh bohⁿ-zar-gü-MAHⁿ | poor lahⁿ fehr shahⁿ-ZHAY', ['portrait']),
  sent(1349, 'Ses questions nous ont souvent évité des erreurs graves.', 'Her questions often saved us from serious mistakes.',
    '/se kɛs.tjɔ̃ nu.zɔ̃ su.vɑ̃ e.vi.te de.zɛ.ʁœʁ ɡʁav/', 'say kes-TYOHⁿ | noo-zohⁿ soo-VAHⁿ | ay-vee-TAY | day-zeh-ruhr GRAV', ['portrait']),
  sent(1350, 'Un portrait juste ne cache pas les défauts ; il les nomme avec égards.', 'A fair portrait does not hide faults; it names them with consideration.',
    '/œ̃ pɔʁ.tʁɛ ʒyst nə kaʃ pa le de.fo il le nɔm a.vɛ.ke.ɡaʁ/', 'uhⁿ por-treh ZHÜST | nuh KASH pa lay day-FOH | eel lay NOMM | a-veh-kay-GAR', ['portrait'], FCVDR),
  rule(1351, 'Pour chaque trait : le bon cran, la bonne couleur, les bons voisins.', 'For each trait: the right notch, the right colour, the right neighbours.',
    '/puʁ ʃak tʁɛ lə bɔ̃ kʁɑ̃ la bɔn ku.lœʁ le bɔ̃ vwa.zɛ̃/', 'poor shak TREH | luh bohⁿ KRAHⁿ | la bonn koo-LUHR | lay bohⁿ vwa-ZEHⁿ',
    'Tu écris le portrait d’une collègue. Que vérifies-tu pour chaque trait ?',
    'Sa force (exigeante, pas exaspérante), sa couleur (économe, pas avare, si c’est un éloge) et ses voisins (une rigueur que l’on envie, des erreurs graves évitées). Et le fait doit rester reconnaissable.',
    ['portrait']),
  sent(1352, 'Nous lui souhaitons une retraite à la hauteur de son énergie.', 'We wish her a retirement worthy of her energy.',
    '/nu lɥi swɛ.tɔ̃ yn ʁə.tʁɛt a la o.tœʁ də sɔ̃.ne.nɛʁ.ʒi/', 'noo lwee sweh-TOHⁿ | ün ruh-TRET | a la oh-TUHR | duh sohⁿ-nay-nehr-ZHEE', ['portrait']),
  sent(1353, 'Elle nous manquera, ses questions aussi.', 'We will miss her, and her questions too.',
    '/ɛl nu mɑ̃k.ʁa se kɛs.tjɔ̃ o.si/', 'el noo mahⁿk-RA | say kes-TYOHⁿ oh-SEE', ['portrait']),
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
 *  Four long readings (a language column, a company notice and its plain
 *  version, a library's annual report, the model portrait of act 12), the
 *  colleagues' notes the task starts from, and ten « Dans un texte »
 *  paragraphs that close acts 2 to 11. Every person, company, outlet,
 *  street and figure is invented: the Imprimerie des Deux-Ponts (Longueuil)
 *  and its staff (Benoît Lachance, Josée Ouellette, Normand Bélair), the
 *  Fromagerie du Haut-Ruisseau and Mme Nadeau, the association Les Amis du
 *  mot juste and its bulletin « La Vigie des mots » (Sherbrooke), Rosalie
 *  Brassard, the residents of the 412, rue des Érables (Laval), the paper
 *  « La Voix des Deux-Rives », the Atelier Vigneault and Samuel, the Bistro
 *  des Quais, the Brasserie du Vieux-Moulin (Trois-Rivières) and Armand
 *  Vigneault, the Comité du quartier Saint-Roch-Nord, Radio Cap-Blanc, the
 *  Auberge du Phare and its guide Mathias, the Coop des Trois-Lacs, the
 *  bibliothèque de Saint-Ours-sur-Rive and Madame Roy. Every figure (9 %,
 *  2 %, thirty-two jobs, eight dollars) is invented and stated as such in
 *  no learner text, because none is presented as a real statistic.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Rosalie Brassard's language column (about 280 words). */
export const LECTURE_CHRONIQUE =
  '« La Vigie des mots », bulletin de l’association Les Amis du mot juste, Sherbrooke. Chronique de Rosalie Brassard : « Presque synonymes ». Le mois dernier, une lectrice m’a écrit pour se plaindre d’un dictionnaire des synonymes. Elle avait cherché un autre mot pour « agacée », afin d’éviter une répétition, choisi « exaspérée » dans la liste, et son courriel à un fournisseur avait déclenché une petite crise. « Le dictionnaire disait que c’était pareil ! » Non : il disait que c’était voisin. Un dictionnaire des synonymes propose ; c’est la phrase qui dispose. Trois questions m’aident avant de remplacer un mot. D’abord, sa force : agacée, irritée et exaspérée ne disent pas la même colère, pas plus qu’une légère hausse n’est une flambée. Ensuite, sa couleur : une voisine économe et une voisine avare dépensent peut-être la même somme, mais la première reçoit un compliment et la seconde un reproche. Le registre fait partie de cette couleur : radin dit la même chose qu’avare, entre amis. Enfin, ses voisins : certains mots ne vont qu’avec d’autres. On est grièvement blessé, mais gravement malade ; on pose une question, on ne la demande pas. Et le contraire d’un mot dépend lui aussi de ses voisins : un hiver doux s’oppose à un hiver rigoureux, un caractère doux à un caractère emporté. Ma lectrice a fini par en rire. Elle a écrit de nouveau au fournisseur : « Je me suis mal exprimée : j’étais un peu agacée, pas exaspérée. » La commande est arrivée le lendemain, avec des excuses. Un mot presque juste peut coûter cher ; le mot juste, lui, ne coûte qu’un peu d’attention. Rosalie Brassard';

/** Act 6: a company notice, then the regional paper's plain version (about 200 words). */
export const LECTURE_COMMUNIQUE =
  'Deux textes sur la même semaine, à Trois-Rivières. Le premier est un communiqué de la Brasserie du Vieux-Moulin : « C’est avec une grande tristesse que nous annonçons que notre fondateur, Armand Vigneault, s’est éteint le 2 mai, entouré des siens. Par ailleurs, dans le cadre de l’évolution de notre site, nous procéderons à un ajustement de nos effectifs : trente-deux collaborateurs seront invités à poursuivre leur parcours professionnel hors de l’entreprise. Enfin, un incident technique survenu lundi dans la salle de brassage n’a fait aucun blessé. » Le second est l’article de La Voix des Deux-Rives, le lendemain : « La Brasserie du Vieux-Moulin perd son fondateur, Armand Vigneault, décédé le 2 mai. La même semaine, l’entreprise annonce trente-deux licenciements. Lundi, un début d’incendie dans la salle de brassage a été maîtrisé par les pompiers ; personne n’a été blessé. » Le journal garde « décédé » pour le fondateur : le communiqué disait « s’éteint », et les deux mots disent la même chose avec égards. Pour le reste, il remplace chaque formule douce par le fait qu’elle enveloppait.';

/** Act 11: a library's annual report, first draft and final version (about 190 words). */
export const LECTURE_RAPPORT =
  'Bibliothèque de Saint-Ours-sur-Rive, rapport annuel. Le premier jet, écrit par un bénévole : « Cette année a été une année importante. Les bénévoles ont eu un rôle important dans la réouverture. La toiture a coûté une somme importante. Il y a eu un problème important avec le chauffage en janvier. La mairesse a fait un discours, et plusieurs personnes importantes du village ont dit leur avis sur l’avenir de la bibliothèque. » La version finale, relue par la directrice : « Cette année a été décisive. Les bénévoles ont joué un rôle majeur dans la réouverture. La toiture a coûté une somme considérable. En janvier, une panne grave du chauffage nous a obligés à fermer dix jours. La mairesse a prononcé un discours, et plusieurs personnes influentes du village ont exprimé leur avis sur l’avenir de la bibliothèque. » La directrice a gardé un seul « important », dans la dernière phrase : « Merci à tous ceux qui rendent ce lieu important pour le village. » Là, rien de plus précis n’était vrai.';

/** Act 12: the model portrait (about 230 words). */
export const LECTURE_MODELE =
  'Le Petit Deux-Ponts, bulletin de l’Imprimerie des Deux-Ponts, Longueuil. Portrait : Normand Bélair prend sa retraite. Après vingt-huit ans à l’atelier, Normand nous quitte vendredi. Ceux qui l’ont côtoyé savent qu’il n’aime pas les grands discours ; ce portrait sera donc bref, et exact. Normand est exigeant. Il relisait chaque épreuve deux fois, et il lui est arrivé de faire recommencer un tirage entier pour une couleur un peu terne. Certains jeunes l’ont trouvé dur ; tous ont appris avec lui à regarder une page comme un client la regardera. Normand est économe. Il a longtemps refusé de changer la vieille presse, tant qu’elle tournait, et il gardait les chutes de papier pour les cartes de vœux de l’atelier. Ce que certains appelaient de l’entêtement nous a pourtant évité, en 2019, un achat que la baisse des commandes aurait rendu ruineux. Normand est discret. Il ne parlait guère de lui, mais il connaissait le prénom des enfants de chacun. Il laisse un atelier rangé, un carnet de recettes d’encres que personne d’autre ne sait lire, et un vide considérable. Bonne retraite, Normand : nous te souhaitons des journées à la hauteur de ta patience. L’équipe de l’atelier';

/** The task: the colleagues' blunt notes the learner turns into a portrait. */
export const NOTES_JOSEE =
  'Notes laissées sur le tableau de la salle de pause pour le portrait de Josée Ouellette, comptable, qui part à la retraite après trente et un ans. « Têtue comme pas une : quand elle a une idée, impossible de la faire changer d’avis. » « Radine avec le budget : elle a refusé trois fois le nouveau café. » « Exaspérante en réunion si tu n’as pas lu le dossier. » « Elle pose des questions indiscrètes aux fournisseurs sur leurs prix. » « Elle a repéré l’erreur de facturation de 2021, qui nous aurait coûté une fortune. » « Elle connaît chaque client par son prénom. » « Toujours là pour aider les nouveaux, mais pas pour faire leur travail à leur place. » « Une boîte de chocolats dans le tiroir du bas, pour les jours difficiles. »';

/* ── THE TEN « DANS UN TEXTE » PARAGRAPHS (acts 2 to 11) ─────────────────── */

export const TEXTE_A2 =
  'Sur le forum des résidents du 412, rue des Érables, à Laval. Pour chaque résident, dis à quel cran il en est. « Gilles, troisième étage : Les travaux de la toiture commencent à m’agacer, surtout le samedi matin. Martine, cinquième étage : Moi, ils m’irritent franchement : trois semaines de marteaux-piqueurs, et aucun avis affiché. Paul, deuxième étage : Je suis exaspéré. Hier, l’eau a été coupée sans prévenir, pour la deuxième fois cette semaine. Si rien ne change, je demande une réunion d’urgence. La gestionnaire : Votre exaspération est compréhensible, Paul. La réunion aura lieu jeudi, et un horaire des coupures sera affiché dans l’entrée. »';

export const TEXTE_A3 =
  'Une brève de La Voix des Deux-Rives. Classe les verbes et les adjectifs selon la force du mouvement. « Immobilier : les loyers flambent, les ventes fléchissent. Selon la chambre immobilière régionale, le loyer moyen d’un quatre et demie a grimpé de neuf pour cent en un an. Dans le même temps, les ventes de maisons ont légèrement fléchi, de deux pour cent. Un journal concurrent titre sur l’« effondrement du marché » : le mot est excessif pour un recul de cette taille. En revanche, la construction de logements neufs stagne depuis le printemps, et c’est peut-être la vraie nouvelle de ce trimestre. »';

export const TEXTE_A4 =
  'Deux lettres de référence pour le même candidat, Samuel, qui postule dans une imprimerie. Repère, pour chaque trait, le mot qui approuve et celui qui blâme. Lettre de l’Atelier Vigneault : « Samuel est persévérant : il ne lâche pas un problème avant de l’avoir réglé. Il est économe des fournitures de l’atelier et prudent avant d’engager une dépense. Sa curiosité l’a mené à apprendre seul la reliure. » Message d’un ancien collègue : « Samuel est obstiné : il n’écoute pas quand on lui propose une autre solution. Il est avare de tout, même d’un compliment, et timoré dès qu’il faut décider vite. »';

export const TEXTE_A5 =
  'La critique d’un blogue gourmand, à Québec. Trouve le suffixe qui décrit seulement, puis ceux qui jugent. « Au Bistro des Quais, la salle baigne dans une lumière rougeâtre, plutôt chaleureuse. Le reste nous a moins plu. Notre serveur, un bellâtre qui s’admirait dans chaque miroir, a oublié deux fois notre commande. La soupe était fade, le poisson franchement fadasse, et le dessert laissait un goût douceâtre. Pour finir, il a fallu remplir de la paperasse pour obtenir la carte de fidélité promise à l’entrée. Nous n’y retournerons pas, sauf pour la lumière. »';

export const TEXTE_A6 =
  'Un message envoyé aux abonnés d’un club de sport, puis la réponse d’un abonné. Trouve l’euphémisme qui ménage et celui qui masque. « Chers membres, afin de continuer à vous offrir un service de qualité, nous procéderons à un ajustement tarifaire au 1er septembre. Par ailleurs, notre ancien entraîneur, Lucien, est décédé cet été ; nous pensons à sa famille. » Réponse de Mireille : « Merci pour ce mot sur Lucien. Mais votre ajustement tarifaire, c’est une hausse de huit dollars par mois. Dites-le avec égards, mais dites-le : nous préférons les chiffres aux formules. »';

export const TEXTE_A7 =
  'Le compte rendu du Comité du quartier Saint-Roch-Nord. Pour chaque nom, trouve le verbe qui va avec. « Lors de la séance de mardi, les résidents ont posé trois questions au conseil municipal sur la sécurité de la rue Gauvin. Le comité a formulé ses revendications : un passage piéton et une limite de trente kilomètres à l’heure. Un conseiller a émis l’hypothèse que les excès de vitesse viennent surtout des livraisons de nuit. La mairesse a promis de prendre des mesures avant l’hiver ; le comité veillera à ce qu’elle tienne sa promesse. Un malentendu sur les horaires du chantier a été dissipé en fin de séance. »';

export const TEXTE_A8 =
  'Le bulletin de dix-sept heures de Radio Cap-Blanc. Repère chaque intensif et le nom qu’il accompagne. « Circulation dense ce soir sur l’autoroute 40, en direction est, où un accident s’est produit vers quinze heures sous une pluie battante. Deux personnes ont été grièvement blessées et transportées à l’hôpital. À l’hôtel de ville, le projet de piste cyclable a été adopté à une écrasante majorité, malgré le refus catégorique de deux conseillers. Enfin, la santé publique rappelle qu’il n’est jamais trop tard pour arrêter de fumer, même pour un gros fumeur aux habitudes invétérées. »';

export const TEXTE_A9 =
  'Un avis laissé sur le site de l’Auberge du Phare, en Gaspésie. Pour chaque « doux » et chaque « léger », trouve le contraire qui convient. « Nous sommes venus en février : l’hiver ici est rigoureux, et le vent ne pardonne rien. L’auberge, elle, est douce comme un refuge. Notre guide, Mathias, a un caractère doux ; il ne s’est jamais emporté, même quand nous étions en retard. Le midi, on nous servait un repas léger avant la randonnée, et le soir, un souper copieux. Un seul regret : le café du matin, trop léger à notre goût. Nous l’aurions voulu corsé. »';

export const TEXTE_A10 =
  'Un extrait du guide de rédaction de la Coop des Trois-Lacs, en Estrie. Pour chaque mot, dis s’il est permis dans les textes de la coop. « Dans nos infolettres, écrivez magasiner et magasinage sans guillemets : ce sont des mots implantés au Québec. Évitez faire du shopping. N’écrivez pas char : écrivez voiture, auto ou automobile. Réservez blonde et chum aux échanges entre amis ; dans un formulaire, on écrit conjointe et conjoint. Pour le message électronique, écrivez courriel. Enfin, souvenez-vous qu’un mot n’est pas faux parce qu’il est familier : il est seulement mal placé dans un texte officiel. »';

export const TEXTE_A11 =
  'Un courriel de Benoît Lachance, directeur de l’Imprimerie des Deux-Ponts, relu avant envoi. Dis par quoi chaque mot passe-partout a été remplacé. Premier jet : « Josée a eu un rôle important dans l’entreprise. Elle a évité une erreur importante en 2021. Elle a eu le poste de comptable pendant trente et un ans. Vendredi, je ferai un petit discours. » Version envoyée : « Josée a joué un rôle majeur dans l’entreprise. Elle nous a évité une erreur grave en 2021. Elle a occupé le poste de comptable pendant trente et un ans. Vendredi, je prononcerai quelques mots en son honneur. »';
