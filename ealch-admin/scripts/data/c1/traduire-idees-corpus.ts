// c1.22.l1 « Traduire des idées » — the authored corpus, the imports, the
// anchor texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (« What is
// different at C1 », decisions 1-40, the wave 5 review lessons, the wave 6
// brief). Structural models: b2.33 (`../b2/traduire-sans-calquer-*`, recapped
// in ONE card, never re-taught) and the reviewed C1 workshop c1.11
// (`./rapports-comptes-rendus-*`).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later lessons may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   TRANSLATING IDEAS AND STRUCTURE, NOT WORDS: a complex English text
//   rendered in natural French with its meaning, its force (hedging,
//   understatement, tone) and its thread (paragraph logic) intact.
//   Direction English → French; the learner is an English speaker.
//
//     act 1   juste mais faux: a translation with no calque that still
//             betrays the text (Fiona's polite but firm request); ONE recap
//             of b2.33, by trail position
//     act 2   l'idée avant les mots: read to the full stop, close the
//             English, say the idea, rewrite (déverbalisation); English
//             noun stacks become French clauses
//     act 3   la force (1): English hedging (arguably, tend to, may
//             possibly suggest, it may be worth) rendered at the SAME
//             degree of certainty, one hedge where English stacks three
//     act 4   la force (2): English understatement (not entirely
//             convinced, a bit of a problem, not unhappy): keep the French
//             litote when it works, convey the real force when it does not,
//             judged from the context
//     act 5   le fil: the English topic-sentence paragraph and the French
//             reader's signposts (annonce, or, c'est pourquoi); the order of
//             ideas kept, the links made visible
//     act 6   expliciter: what English leaves implicit (juxtaposition, « and »
//             meaning « but », absolute constructions, acronyms) spelled out;
//             over-explaining named as a fault
//     act 7   implicitation: English doublets and padding (each and every,
//             end result, future plans, at this point in time, due to the
//             fact that) lightened, never an idea deleted
//     act 8   l'équivalence culturelle: idioms, references and units (a
//             ballpark figure, back to square one, the tip of the iceberg,
//             miles, Fahrenheit, Thanksgiving): keep, explain, replace,
//             generalise
//     act 9   résumer en traduisant: a French summary of an English article,
//             thesis and thread kept, examples dropped, every idea
//             attributed
//     act 10  changer de public: one English sentence, three French
//             audiences (experts, the general public, a youth account)
//     act 11  relire en traducteur: faux sens, contresens, non-sens,
//             omission, ajout; two readings (with and without the English)
//     act 12  the task: render a 200-300 word English op-ed as natural
//             French (250 to 400 words)
//
//   NOT OWNED, CITED BY TRAIL POSITION ONLY (act 1 recaps, never re-teaches):
//     - « la leçon 33 du B2 » (b2.33): the three kinds of calque, the ten
//       faux amis, transposition, modulation, équivalence, étoffement, the
//       -ing forms, numbers and typography, tone (its rows reused by id; its
//       reframe imported, never retyped).
//     - « la leçon 22 du B2 »: hedging in an academic paragraph (il semble
//       que, les résultats suggèrent, dans une certaine mesure). Act 3 uses
//       it as the TARGET French, and teaches only how English hedges map
//       onto it.
//     - « la leçon 6 du C1 »: hedging and understatement IN SPEECH (il est
//       permis de penser que, litote in conversation). Act 4 does translation
//       of written understatement, never politeness in speech.
//     - « la leçon 5 du C1 »: reprise and ellipsis. Act 7 cites it when
//       English repetition becomes a French reprise.
//     - « la leçon 25 du B1 »: the three registers. Act 10 applies them to
//       audiences.
//     - c1.18 (faux amis savants, same wave, unpublished) owns individual
//       WORDS (opportunité, impacter, éligible…): never taught here, never
//       cited by number. This lesson owns ideas and structure.
//     - c1.10 and c1.11 (synthèse, sommaire de gestion; unpublished) are not
//       cited; act 9's summary is a summary ACROSS languages.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-06 inside BEGIN TRANSACTION READ
//      ONLY … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `langue-soignee` (« La langue soignée », a2-c1), sub_themes read
//     back with « traduire des idées » last (wave 6 setup). Block 2200-2399
//     read at 0 rows at every level on 2026-10-06. Levels present: b1
//     .1000-.1392 (344), b2 .1400-.1999 (544), c1 .2000-.2192 (182, c1.05).
//
//  2. ID BLOCK: this lesson owns `fr.c1.langue-soignee.2200` to `.2399` AND
//     NOTHING ELSE (decision 26). Used: see §G (one sequence, no gaps).
//
//  3. REUSED ROWS (§F), all read in Postgres (published) AND present in
//     seedPlusPacks() on 2026-10-06, so `src()` prints them; no
//     Postgres-only row is reused. Nine b2.33 rows (four of them rule
//     cards, flashcard only), one b2.22 sentence (« Les résultats suggèrent
//     que le taux de réussite tend à diminuer »), one b2.22 phrase (« dans
//     une certaine mesure »), one c1.06 phrase (« il est permis de penser
//     que »). No legacy c1 row is reused.
//
//  4. NO AUTHORED ROW TWINS A PUBLISHED ROW. Every `fr` was folded (fold() of
//     answer.logic) and compared with all 64 066 Postgres rows (scratch
//     twins check): see the report for the count.
//
//  5. NO CALQUE IS EVER A ROW. Every word-for-word or wrong-force rendering
//     (« nous pourrions éventuellement revoir », « un petit problème » for a real
//     one, « sans aucun doute » for arguably…) lives only in a scene choice,
//     a commonErrors.wrong, a trapDrill.promptSound, a free() quotation or a
//     quiz errorSpot prompt.
//
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR: a real
//     /n/ or /m/ closing a syllable is doubled (une ÜNN, comme KOMM, même
//     MEMM, personne pehr-SONN, semaine suh-MENN, prochaine pro-SHENN,
//     domaine, aucune oh-KÜNN, donne DONN, chacune sha-KÜNN). Every doubled
//     consonant is pronounced. No U+203F tie.
//
//  7. FACT AND USAGE CHECK LIST (for the pre-review), read 2026-10-06/07.
//     ENGLISH SOURCE TEXTS: every English sentence and the task's op-ed are
//     ORIGINAL, written for the lesson. Every French anchor text is
//     « texte original écrit pour la leçon ».
//
//     a. ARGUABLY. Larousse anglais-français, « arguably »
//        (https://www.larousse.fr/dictionnaires/anglais-francais/arguably/563102):
//        « possiblement » ; example « the Beatles are arguably the most
//        popular group of all time » → « on pourrait dire ou on peut
//        soutenir que les Beatles sont… ». The lesson teaches « on peut
//        soutenir que », « on pourrait dire que » and warns that « sans aucun
//        doute » overstates (an interpretive point, GK).
//     b. TEND TO → « avoir tendance à »; TO SOME EXTENT → « dans une
//        certaine mesure » (reused b2.22 row); IT MAY BE WORTH → « il serait
//        peut-être utile de »; MAY SUGGEST → « semble indiquer »: GK, standard
//        bilingual dictionary equivalents; « dans une certaine mesure » is
//        b2.22's own row.
//     c. HEDGE STACKING (« may possibly suggest » → one hedge): a
//        precision choice presented as such, never a rule (GK; c1.06 teaches
//        dosage in speech, cited).
//     d. UNDERSTATEMENT. « not bad at all » → « pas mal du tout » and « not
//        unhappy » → « pas mécontents »: the French litote exists and is kept
//        (GK). « a bit of a problem »: the lesson NEVER states a fixed
//        equivalent; it shows that the context (the next sentence cancels two
//        workshops) decides between « un petit problème » and « un vrai
//        problème », and both renderings are rows.
//     e. PARAGRAPH LOGIC. The lesson says « souvent » / « tend à »: an
//        English expository paragraph often opens on its topic sentence and
//        juxtaposes; a French reader of an essay or report often expects the
//        path announced and the logical links marked. Basis: Vinay and
//        Darbelnet, Stylistique comparée du français et de l'anglais (1958),
//        on French marking its « articulations » (GK); presented as a
//        tendency, never a law, and the order of ideas is always kept.
//     f. EXPLICITATION / IMPLICITATION. Vinay and Darbelnet (1958), as
//        quoted in translation studies (e.g. the explicitation literature
//        indexed at translation.biu.ac.il and Meta 65-1, 2020): explicitation
//        is a « stylistic translation technique which consists of making
//        explicit in the target language what remains implicit in the source
//        language because it is apparent from either the context or the
//        situation »; implicitation is the reverse. The lesson paraphrases,
//        never quotes.
//     g. DÉVERBALISATION: the interpretive theory of translation
//        (Seleskovitch and Lederer, ESIT, Paris): understand, let go of the
//        words, re-express. Concept named, never quoted (GK).
//     h. EACH AND EVERY. Larousse anglais-français « each »
//        (https://www.larousse.fr/dictionnaires/anglais-francais/each/577495):
//        « each (and every) one of us » → « chacun d'entre nous (sans
//        exception) ».
//     i. FIRST AND FOREMOST. Larousse anglais-français « first »
//        (https://www.larousse.fr/dictionnaires/anglais-francais/first/580799):
//        « d'abord et surtout ». The lesson's « avant tout » is GK (Larousse
//        unilingual: « avant tout » = « principalement, d'abord »). No verdict
//        is given on « d'abord et avant tout » (no BDL page found).
//     j. END RESULT → « le résultat »; FUTURE PLANS → « nos projets »; AT
//        THIS POINT IN TIME → « actuellement » (correct sense: currently;
//        b1.37 owns actuellement ≠ actually); IN THE EVENT THAT → « si »; DUE
//        TO THE FACT THAT → « comme », « parce que »: GK.
//     k. BALLPARK FIGURE. OQLF GDT, fiche « estimation grossière » (2006,
//        https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/500205/estimation-grossiere):
//        « estimation grossière », « chiffre approximatif » for « ballpark
//        figure » [familier]; note on the baseball origin. Larousse
//        anglais-français « ballpark »
//        (https://larousse.fr/dictionnaires/anglais-francais/ball_park/564359):
//        « ordre de grandeur » ; « ball-park » adj. « un chiffre approximatif ».
//     l. BACK TO SQUARE ONE. Larousse anglais-français « square »
//        (https://www.larousse.fr/dictionnaires/anglais-francais/square/614286):
//        « back to square one! » → « retour à la case départ ! » ; « we're back
//        to square one » → « nous voilà revenus à la case départ » ; also
//        « I had to start from square one again » → « j’ai dû repartir à
//        zéro » (re-read 2026-10-07; the task grader accepts both images).
//     m. TIP OF THE ICEBERG. Larousse anglais-français « tip »
//        (https://www.larousse.fr/dictionnaires/anglais-francais/tip/618647):
//        « it's just the tip of the iceberg » → « ce n'est que la partie
//        émergée de l'iceberg ».
//     n. UNITS: 1 mile = 1,609 km, so 3 miles ≈ 4,8 km (« environ cinq
//        kilomètres »); 90 °F = 32,2 °C (« plus de trente degrés » for « over
//        ninety degrees »). GK, arithmetic.
//        ACRES (act 8 check, pre-review 2026-10-07): 1 acre = 0,4047 ha, so
//        2 acres ≈ 0,81 ha (« un peu moins d’un hectare »). Arithmetic.
//     o. THANKSGIVING in Canada = « l’Action de grâce ». OQLF GDT fiche
//        8370996 « Action de grâce » (grâce singular or plural, only Action
//        capitalised); the federal Clés de la rédaction write « Action de
//        grâces ». The lesson uses the OQLF form for a Montréal reader. NHS = the
//        United Kingdom's National Health Service, its public health system
//        (GK).
//     p. FAUX SENS, CONTRESENS, NON-SENS. Larousse unilingual « faux-sens »
//        (https://www.larousse.fr/dictionnaires/francais/faux_sens):
//        « Erreur consistant à interpréter de manière erronée le sens précis
//        d'un mot dans un texte. » OQLF BDL « Différence entre contresens et
//        sens inverse »
//        (https://vitrinelinguistique.oqlf.gouv.qc.ca/24639/…): contresens =
//        « interprétation contraire à la signification réelle ». Non-sens: a
//        rendering with no meaning at all (GK; the triad is Delisle's
//        classroom typology, named, never quoted). Omission, ajout,
//        surtraduction: GK, same typology.
//     q. ÎLOT DE CHALEUR URBAIN, ARBRE D'ALIGNEMENT: the standard French
//        terms for « urban heat island » and « street tree » (GK, OQLF GDT
//        usage); the lesson claims only that experts use them.
//     r. CEFR Companion Volume (2020) puts translation and summary across
//        languages under MEDIATION (GK; no descriptor quoted).
//
//     QUOTATIONS: none. No literary or press extract.
//
//     INVENTED: la Fondation Arcelle (a Montréal foundation on city life,
//     with an English-speaking research office in Toronto); Fiona Kerr (its
//     research director, writes in English); Odile Vézina (the reviser);
//     Malik Saint-Onge (communications); the library pilot, the schoolyard
//     op-ed, every figure. Real places only as places (Montréal, Toronto).
//
//  8. APOSTROPHES: every authored French string uses the typographic ’. The
//     reused seed rows that carry ’ only are quoted in the scenario; none
//     with a straight ' is.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.22',
  seq: 22,
  title: 'Translating Ideas',
  sub: 'Traduire des idées',
  canDo: 'Can convey the meaning, force and argumentative thread of a complex English text in natural French: reformulates at the level of the idea, renders hedging and understatement at the same degree of certainty, turns topic-sentence paragraphs into signposted French ones, makes implicit links explicit and lightens English redundancy, finds cultural equivalents, summarises across languages, adapts register to the audience, and revises for faux sens, contresens, omissions and additions',
  prereqUnitIds: ['b1.25', 'b2.22', 'b2.33', 'c1.05', 'c1.06'],
} as const;

export const LESSON_ID = 'c1.22.l1';
export const THEME = 'langue-soignee';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief (decision 26). c1.05 owns 2000-2199. */
export const ID_RANGES = [[2200, 2399]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS (never a raw id on screen)
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  if (band === 'b1' || band === 'b2' || band === 'c1') {
    const n = SEQ.get(unitId);
    if (!n) throw new Error(`c1.22: ${unitId} is not in the seed`);
    return `la leçon ${n} du ${band.toUpperCase()}`;
  }
  return unitRef(unitId);
}

export const REGISTRES_UNIT = 'b1.25';
export const ACADEMIQUE_UNIT = 'b2.22';
export const CALQUES_UNIT = 'b2.33';
export const ELLIPSE_UNIT = 'c1.05';
export const NUANCER_UNIT = 'c1.06';

export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const ACADEMIQUE_REF = refFr(ACADEMIQUE_UNIT);
export const CALQUES_REF = refFr(CALQUES_UNIT);
export const ELLIPSE_REF = refFr(ELLIPSE_UNIT);
export const NUANCER_REF = refFr(NUANCER_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B233_REFRAME, REFRAME_EN as B233_REFRAME_EN } from '../b2/traduire-sans-calquer-corpus.ts';
export { REFRAME as B222_REFRAME } from '../b2/style-academique-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE SAME CARGO, ANOTHER BOAT. A text carries three things to its reader:
 *  an idea, a force (how sure, how strong, how polite) and a thread (the
 *  order of the reasoning). The translator unloads all three and reloads
 *  them into French; everything else (word order, word classes, idioms,
 *  units, the number of sentences) is the boat, and may change.
 *
 *  It is NOT « traduis l'idée, pas la phrase » (b2.33 rejected it: it
 *  licenses dropping content; here nothing is dropped except in act 9's
 *  declared summary), and NOT « éloigne-toi de l'anglais » (b2.33 act 11:
 *  keep the literal version when it is natural).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Garde ce que le texte fait à son lecteur : l’idée, sa force, son fil ; pour le reste, écris en français.';
export const REFRAME_EN = 'Keep what the text does to its reader: the idea, its strength, its thread; for the rest, write in French.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Traduis l’idée, pas la phrase.',
    why: 'b2.33 rejected it for good reason: it licenses dropping content. This lesson keeps every idea and changes only how it is carried; the one licensed loss is act 9’s declared summary.',
  },
  {
    text: 'Un texte sans calque est une bonne traduction.',
    why: 'Exactly act 1’s failure: Malik’s draft has no calque and still turns a firm request into an option. Force and thread can be lost in perfectly correct French.',
  },
  {
    text: 'Le français est plus formel : monte toujours d’un registre.',
    why: 'False for act 10 (a youth account says tu) and for act 4 (an understatement may need to become plainer, not grander). The register follows the audience, not the language.',
  },
  {
    text: 'Explique tout ce que l’anglais laisse implicite.',
    why: 'Act 6 names over-explaining (surtraduction) as a fault and act 7 removes what English says twice. Explicitate only what the French reader needs.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (Postgres published + seed, read 2026-10-06)
 * ══════════════════════════════════════════════════════════════════════════ */

export const B233_RULE = 'fr.b2.langue-soignee.1808';      // Traduis le sens, pas les mots : écris ce qu’un francophone aurait écrit.  (lesson 33 in B2; flashcard only)
export const B233_CALQUE = 'fr.b2.langue-soignee.1801';    // Un calque traduit les mots, pas le sens.  (lesson 33 in B2)
export const B233_CLASSE = 'fr.b2.langue-soignee.1896';    // Quand un mot ne passe pas, change sa classe.  (transposition; flashcard only)
export const B233_COTE = 'fr.b2.langue-soignee.1913';      // Quand les mots ne passent pas, regarde la chose d’un autre côté.  (modulation; flashcard only)
export const B233_VERBE = 'fr.b2.langue-soignee.1933';     // Là où l’anglais met une préposition, le français ajoute souvent un verbe.  (étoffement; flashcard only)
export const B233_TON = 'fr.b2.langue-soignee.1999';       // Traduis aussi le ton : l’enthousiasme de l’anglais se dit plus sobrement en français.  (flashcard only)
export const B233_LITTERAL = 'fr.b2.langue-soignee.1988';  // Si la phrase littérale est naturelle, garde-la.  (flashcard only)
export const B233_RELIRE = 'fr.b2.langue-soignee.1806';    // Cache l’anglais et relis ta traduction à voix haute.  (lesson 33 in B2)
export const B233_LIRE = 'fr.b2.langue-soignee.1810';      // Une bonne traduction se lit comme un texte écrit en français.  (lesson 33 in B2)
export const B222_SUGGERER = 'fr.b2.universite.1063';      // Les résultats suggèrent que le taux de réussite tend à diminuer.  (lesson 22 in B2)
export const B222_MESURE = 'fr.b2.opinions-et-avis.039';   // dans une certaine mesure  (lesson 22 in B2; flashcard, voiceflash)
export const C106_PERMIS = 'fr.c1.nuances-et-registres.1031'; // il est permis de penser que  (lesson 6 in C1)

export const IMPORTED = {
  act1: [B233_RULE, B233_CALQUE, B233_CLASSE, B233_COTE, B233_VERBE, B233_TON, B233_LITTERAL],
  act2: [] as string[],
  act3: [B222_SUGGERER, B222_MESURE, C106_PERMIS],
  act4: [] as string[],
  act5: [] as string[],
  act6: [] as string[],
  act7: [] as string[],
  act8: [] as string[],
  act9: [] as string[],
  act10: [] as string[],
  act11: [B233_RELIRE],
  act12: [B233_LIRE],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill: nameable, never releasable. None here. */
export const NOT_DECK_ABLE: string[] = [];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE: string[] = [B233_RULE, B233_CLASSE, B233_COTE, B233_VERBE, B233_TON, B233_LITTERAL];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A TRANSLATION CORPUS: every row's `en` IS the original English source
 *  and its `fr` the natural French rendering, so an `examples` or `it()`
 *  card shows the pair. One flashcard-only rule card per act (`rule()`).
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['traduire-idees'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A rule card: `prompt` is the situation, `fr` the move. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · JUSTE MAIS FAUX ────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(2200, 'Chaque phrase est juste, et pourtant le texte ne dit pas ce que disait l’anglais.', 'Every sentence is correct, and yet the text does not say what the English said.', '/ʃak fʁaz ɛ ʒyst e puʁ.tɑ̃ lə tɛkst nə di pa sə kə di.zɛ lɑ̃.ɡlɛ/', 'shak frahz eh ZHÜST | ay poor-TAHⁿ | luh TEKST nuh dee PA | suh kuh dee-zeh lahⁿ-GLEH', ['probleme', 'force']),
  sent(2201, 'Il conviendrait toutefois de revoir le calendrier.', 'That said, we might want to revisit the timeline.', '/il kɔ̃.vjɛ̃.dʁɛ tut.fwa də ʁə.vwaʁ lə ka.lɑ̃.dʁi.je/', 'eel kohⁿ-vyehⁿ-DREH | toot-FWA | duh ruh-VWAR luh ka-lahⁿ-dree-YAY', ['force', 'demande']),
  sent(2202, REFRAME, REFRAME_EN, '/ɡaʁd sə kə lə tɛkst fɛ a sɔ̃ lɛk.tœʁ li.de sa fɔʁs sɔ̃ fil puʁ lə ʁɛst e.kʁi ɑ̃ fʁɑ̃.sɛ/', 'GARD suh kuh luh TEKST feh | a sohⁿ lek-TUHR | lee-DAY | sa FORSS | sohⁿ FEEL | poor luh REST | ay-kree ahⁿ frahⁿ-SEH', ['regle', 'idee'], FC,
    rule('Ta traduction n’a aucun calque, et la directrice se trompe pourtant sur la demande. Qu’as-tu perdu ?', 'Pas les mots : la force. Un texte porte une idée, une force et un fil. Garde les trois ; le reste peut changer.')),
  sent(2203, 'Qu’est-ce que ce texte fait à son lecteur ?', 'What does this text do to its reader?', '/kɛs kə sə tɛkst fɛ a sɔ̃ lɛk.tœʁ/', 'kess kuh suh TEKST | feh a sohⁿ lek-TUHR', ['question', 'idee'], FCVDR),
  sent(2204, 'Une traduction sans calque peut encore trahir l’idée.', 'A translation without calques can still betray the idea.', '/yn tʁa.dyk.sjɔ̃ sɑ̃ kalk pø ɑ̃.kɔʁ tʁa.iʁ li.de/', 'ünn tra-dük-SYOHⁿ sahⁿ KALK | peu ahⁿ-KOR | tra-EER lee-DAY', ['probleme']),
  sent(2205, 'Le ton de Fiona est poli, mais sa demande est ferme.', 'Fiona’s tone is polite, but her request is firm.', '/lə tɔ̃ də fjɔ.na ɛ pɔ.li mɛ sa də.mɑ̃d ɛ fɛʁm/', 'luh TOHⁿ duh fyo-NA eh po-LEE | meh sa duh-MAHⁿD eh FEHRM', ['force', 'demande']),
  sent(2206, 'Je traduis la demande, pas seulement les mots.', 'I translate the request, not just the words.', '/ʒə tʁa.dɥi la də.mɑ̃d pa sœl.mɑ̃ le mo/', 'zhuh tra-DWEE la duh-MAHⁿD | pa suhl-MAHⁿ lay MOH', ['demande', 'idee'], FCVDR),
  sent(2207, 'Mon lecteur doit comprendre, peser et suivre ce que comprenait le lecteur anglais.', 'My reader must understand, weigh and follow what the English reader understood.', '/mɔ̃ lɛk.tœʁ dwa kɔ̃.pʁɑ̃dʁ pə.ze e sɥivʁ sə kə kɔ̃.pʁə.nɛ lə lɛk.tœʁ ɑ̃.ɡlɛ/', 'mohⁿ lek-TUHR dwa kohⁿ-PRAHⁿDR | puh-ZAY ay SWEEVR | suh kuh kohⁿ-pruh-NEH | luh lek-tuhr ahⁿ-GLEH', ['idee', 'force', 'fil']),
  sent(2208, 'Une phrase juste ne suffit pas : il faut un texte juste.', 'A correct sentence is not enough: you need a correct text.', '/yn fʁaz ʒyst nə sy.fi pa il fo œ̃ tɛkst ʒyst/', 'ünn frahz ZHÜST | nuh sü-fee PA | eel foh uhⁿ tekst ZHÜST', ['probleme', 'fil']),
];

/* ── ACT 2 · L’IDÉE AVANT LES MOTS ──────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(2209, 'Je lis la phrase jusqu’au point, puis je ferme l’anglais.', 'I read the sentence to the full stop, then I close the English.', '/ʒə li la fʁaz ʒys.ko pwɛ̃ pɥi ʒə fɛʁm lɑ̃.ɡlɛ/', 'zhuh lee la FRAHZ | zhüs-koh PWEHⁿ | pwee zhuh FEHRM lahⁿ-GLEH', ['methode', 'deverbaliser'], FCVDR),
  sent(2210, 'Qu’est-ce qu’elle veut dire, en une phrase simple ?', 'What does it mean, in one simple sentence?', '/kɛs kɛl vø diʁ ɑ̃.nyn fʁaz sɛ̃pl/', 'kess kel veu DEER | ah-nünn frahz SEHⁿPL', ['methode', 'question']),
  sent(2211, 'De plus en plus de ménages quittent le centre, chassés par la hausse des loyers.', 'Rent-driven household out-migration from the city centre is accelerating.', '/də ply.zɑ̃ ply də me.naʒ kit lə sɑ̃tʁ ʃa.se paʁ la os de lwa.je/', 'duh plü-zahⁿ PLÜ duh may-NAZH | keet luh SAHⁿTR | sha-SAY par la OHSS day lwa-YAY', ['empilement', 'deverbaliser']),
  sent(2212, 'La bibliothèque restera ouverte le soir, comme le demandaient les familles.', 'Evening opening will be maintained in response to family demand.', '/la bi.bli.jɔ.tɛk ʁɛs.tə.ʁa u.vɛʁt lə swaʁ kɔm lə də.mɑ̃.dɛ le fa.mij/', 'la bee-blee-yo-TEK | res-tuh-RA oo-VEHRT luh SWAR | komm luh duh-mahⁿ-DEH | lay fa-MEEY', ['empilement', 'nom-verbe']),
  sent(2213, 'Les quartiers les plus mal desservis par les transports sont aussi les plus pauvres.', 'Transit-poor neighbourhoods are also income-poor.', '/le kaʁ.tje le ply mal de.sɛʁ.vi paʁ le tʁɑ̃s.pɔʁ sɔ̃.to.si le ply povʁ/', 'lay kar-TYAY | lay plü mal day-sehr-VEE | par lay trahⁿs-POR | sohⁿ-toh-SEE lay plü POHVR', ['empilement', 'deverbaliser']),
  sent(2214, 'Suivre l’ordre des mots anglais mène souvent à une phrase bancale.', 'Following the English word order often leads to a lopsided sentence.', '/sɥivʁ lɔʁdʁ de mo.zɑ̃.ɡlɛ mɛn su.vɑ̃ a yn fʁaz bɑ̃.kal/', 'SWEEVR LORDR | day moh-zahⁿ-GLEH | menn soo-VAHⁿ | a ünn frahz bahⁿ-KAL', ['probleme', 'methode']),
  sent(2215, 'Un groupe nominal anglais empilé devient souvent une proposition française avec un verbe.', 'A stacked English noun phrase often becomes a French clause with a verb.', '/œ̃ ɡʁup nɔ.mi.nal ɑ̃.ɡlɛ ɑ̃.pi.le də.vjɛ̃ su.vɑ̃ yn pʁɔ.po.zi.sjɔ̃ fʁɑ̃.sɛz a.vɛk œ̃ vɛʁb/', 'uhⁿ groop no-mee-NAL ahⁿ-GLEH ahⁿ-pee-LAY | duh-VYEHⁿ soo-VAHⁿ | ünn pro-poh-zee-SYOHⁿ frahⁿ-SEZ | a-vek uhⁿ VEHRB', ['regle', 'empilement'], FC,
    rule('Comment traduire « low-income tenant displacement risk » ?', 'Ne cherche pas cinq mots : dis l’idée, avec un verbe. « Le risque que les locataires à faible revenu soient chassés de leur logement. »')),
  phrase(2216, 'déverbaliser', 'to deverbalise (keep the idea, let go of the words)', '/de.vɛʁ.ba.li.ze/', 'day-vehr-ba-lee-ZAY', ['deverbaliser']),
  sent(2217, 'Le risque, c’est que les locataires modestes perdent leur logement.', 'The risk is low-income tenant displacement.', '/lə ʁisk sɛ kə le lɔ.ka.tɛʁ mɔ.dɛst pɛʁd lœʁ lɔʒ.mɑ̃/', 'luh REESK | seh kuh lay lo-ka-TEHR mo-DEST | pehrd luhr lozh-MAHⁿ', ['empilement', 'nom-verbe']),
  sent(2218, 'Une phrase anglaise peut devenir deux phrases françaises.', 'One English sentence can become two French sentences.', '/yn fʁaz ɑ̃.ɡlɛz pø də.və.niʁ dø fʁaz fʁɑ̃.sɛz/', 'ünn frahz ahⁿ-GLEZ | peu duh-vuh-NEER | deu frahz frahⁿ-SEZ', ['methode']),
  sent(2219, 'J’écris l’idée, puis je vérifie qu’il ne manque rien.', 'I write the idea, then I check that nothing is missing.', '/ʒe.kʁi li.de pɥi ʒə ve.ʁi.fi kil nə mɑ̃k ʁjɛ̃/', 'zhay-KREE lee-DAY | pwee zhuh vay-ree-FEE | keel nuh mahⁿk RYEHⁿ', ['methode', 'idee'], FCVDR),
];

/* ── ACT 3 · LA FORCE (1) : ATTÉNUER COMME L’AUTEUR ─────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(2220, 'Ces résultats semblent indiquer un lien avec les horaires.', 'These results would seem to suggest a link with opening hours.', '/se ʁe.zyl.ta sɑ̃bl ɛ̃.di.ke œ̃ ljɛ̃ a.vɛk le.zɔ.ʁɛʁ/', 'say ray-zül-TA | sahⁿbl ehⁿ-dee-KAY | uhⁿ LYEHⁿ | a-vek lay-zo-REHR', ['attenuer']),
  sent(2221, 'On peut soutenir que la gratuité a joué un rôle.', 'Arguably, free admission played a part.', '/ɔ̃ pø su.tə.niʁ kə la ɡʁa.tɥi.te a ʒu.e œ̃ ʁol/', 'ohⁿ peu soo-tuh-NEER | kuh la gra-twee-TAY | a zhoo-AY uhⁿ ROHL', ['attenuer', 'arguably']),
  phrase(2222, 'on peut soutenir que', 'arguably; one can argue that', '/ɔ̃ pø su.tə.niʁ kə/', 'ohⁿ peu soo-tuh-NEER KUH', ['attenuer', 'arguably']),
  sent(2223, 'Les jeunes lecteurs ont tendance à venir le soir.', 'Younger readers tend to come in the evening.', '/le ʒœn lɛk.tœʁ ɔ̃ tɑ̃.dɑ̃s a və.niʁ lə swaʁ/', 'lay zhuhnn lek-TUHR | ohⁿ tahⁿ-DAHⁿSS | a vuh-NEER luh SWAR', ['attenuer']),
  phrase(2224, 'avoir tendance à + infinitif', 'to tend to + verb', '/a.vwaʁ tɑ̃.dɑ̃s a ɛ̃.fi.ni.tif/', 'a-VWAR tahⁿ-dahⁿss A | ehⁿ-fee-nee-TEEF', ['attenuer']),
  sent(2225, 'Dans une certaine mesure, l’essai a atteint son but.', 'To some extent, the pilot achieved its goal.', '/dɑ̃.zyn sɛʁ.tɛn mə.zyʁ lɛ.sɛ a a.tɛ̃ sɔ̃ byt/', 'dahⁿ-zünn sehr-tenn muh-ZÜR | leh-SEH a a-TEHⁿ | sohⁿ BÜT', ['attenuer']),
  sent(2226, 'Il se pourrait que la météo ait faussé les chiffres.', 'It is possible that the weather may have skewed the figures.', '/il sə pu.ʁɛ kə la me.te.o ɛ fo.se le ʃifʁ/', 'eel suh poo-REH | kuh la may-tay-OH | eh foh-SAY lay SHEEFR', ['attenuer', 'dosage']),
  sent(2227, 'Une précaution suffit quand l’anglais en empile trois.', 'One hedge is enough where English stacks three.', '/yn pʁe.ko.sjɔ̃ sy.fi kɑ̃ lɑ̃.ɡlɛ ɑ̃.nɑ̃.pil tʁwa/', 'ünn pray-koh-SYOHⁿ sü-FEE | kahⁿ lahⁿ-GLEH | ah-nahⁿ-peel TRWA', ['regle', 'dosage'], FC,
    rule('L’anglais écrit « may possibly suggest ». Combien de précautions gardes-tu en français ?', 'Souvent une seule, bien placée : « semble indiquer ». L’auteur n’est pas plus sûr ni moins sûr ; la phrase française reste nette. C’est un choix de précision, pas une règle.')),
  sent(2228, 'Il serait peut-être utile de revoir la méthode.', 'It may be worth revisiting the method.', '/il sə.ʁɛ pø.tɛtʁ y.til də ʁə.vwaʁ la me.tɔd/', 'eel suh-REH peu-TETR ü-TEEL | duh ruh-VWAR la may-TOD', ['attenuer']),
  sent(2229, 'Ces chiffres ne permettent pas de conclure.', 'These figures are inconclusive.', '/se ʃifʁ nə pɛʁ.mɛt pa də kɔ̃.klyʁ/', 'say SHEEFR | nuh pehr-MET PA | duh kohⁿ-KLÜR', ['attenuer']),
  sent(2230, 'L’étude ne prouve rien ; elle ouvre une piste.', 'The study proves nothing; it opens up a line of inquiry.', '/le.tyd nə pʁuv ʁjɛ̃ ɛl uvʁ yn pist/', 'lay-TÜD nuh proov RYEHⁿ | el oovr ünn PEEST', ['attenuer']),
  sent(2231, 'Je garde le degré de certitude de l’auteur, ni plus ni moins.', 'I keep the author’s degree of certainty, no more, no less.', '/ʒə ɡaʁd lə də.ɡʁe də sɛʁ.ti.tyd də lo.tœʁ ni plys ni mwɛ̃/', 'zhuh GARD | luh duh-GRAY duh sehr-tee-TÜD | duh loh-TUHR | nee PLÜSS nee MWEHⁿ', ['attenuer', 'force'], FCVDR),
];

/* ── ACT 4 · LA FORCE (2) : LA RETENUE ANGLAISE ─────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(2232, 'Je ne suis pas entièrement convaincue par ce calendrier.', 'I’m not entirely convinced by this timeline.', '/ʒə nə sɥi pa.zɑ̃.tjɛʁ.mɑ̃ kɔ̃.vɛ̃.ky paʁ sə ka.lɑ̃.dʁi.je/', 'zhuh nuh swee pa-zahⁿ-tyehr-MAHⁿ | kohⁿ-vehⁿ-KÜ | par suh ka-lahⁿ-dree-YAY', ['retenue']),
  sent(2233, 'Le budget pose un petit problème.', 'The budget is a bit of a problem.', '/lə byd.ʒɛ poz œ̃ pə.ti pʁɔ.blɛm/', 'luh büd-ZHEH | pohz uhⁿ puh-TEE pro-BLEMM', ['retenue', 'contexte']),
  sent(2234, 'Le budget pose un vrai problème.', 'The budget is a bit of a problem (said to soften bad news).', '/lə byd.ʒɛ poz œ̃ vʁɛ pʁɔ.blɛm/', 'luh büd-ZHEH | pohz uhⁿ VREH pro-BLEMM', ['retenue', 'contexte']),
  sent(2235, 'Pas mal du tout, ce premier bilan.', 'This first report is not bad at all.', '/pa mal dy tu sə pʁə.mje bi.lɑ̃/', 'pa MAL dü TOO | suh pruh-myay bee-LAHⁿ', ['retenue', 'litote']),
  sent(2236, 'Ce n’est pas l’idée la plus heureuse.', 'It’s not the happiest of ideas.', '/sə nɛ pa li.de la ply.zœ.ʁøz/', 'suh neh pa lee-DAY | la plü-zuh-REUZ', ['retenue', 'litote']),
  sent(2237, 'Le français a ses propres litotes : garde-les quand elles produisent le même effet.', 'French has its own understatements: keep them when they have the same effect.', '/lə fʁɑ̃.sɛ a se pʁɔpʁ li.tɔt ɡaʁd.le kɑ̃.tɛl pʁɔ.dɥiz lə mɛm e.fɛ/', 'luh frahⁿ-SEH a say propr lee-TOT | gard-LAY | kahⁿ-tel pro-DWEEZ | luh memm ay-FEH', ['regle', 'litote'], FC,
    rule('L’anglais écrit « We are not unhappy with the results ». Que fais-tu de la litote ?', 'Tu la gardes : « Nous ne sommes pas mécontents des résultats » produit le même effet en français. On ne défait une litote que si le lecteur français la lirait autrement.')),
  sent(2238, 'Nous ne sommes pas mécontents des résultats.', 'We are not unhappy with the results.', '/nu nə sɔm pa me.kɔ̃.tɑ̃ de ʁe.zyl.ta/', 'noo nuh somm PA | may-kohⁿ-TAHⁿ | day ray-zül-TA', ['retenue', 'litote']),
  sent(2239, 'Je lis la phrase suivante avant de choisir la force.', 'I read the next sentence before choosing the strength.', '/ʒə li la fʁaz sɥi.vɑ̃t a.vɑ̃ də ʃwa.ziʁ la fɔʁs/', 'zhuh lee la frahz swee-VAHⁿT | a-vahⁿ duh shwa-ZEER | la FORSS', ['contexte', 'force'], FCVDR),
  // Listening, act 4: Odile's voice message, eight lines, one take.
  sent(2240, 'Bonjour, c’est Odile, au sujet du courriel de Fiona.', 'Hi, it’s Odile, about Fiona’s email.', '/bɔ̃.ʒuʁ sɛ.tɔ.dil o sy.ʒɛ dy ku.ʁjɛl də fjɔ.na/', 'bohⁿ-ZHOOR | seh-to-DEEL | oh sü-ZHEH | dü koo-RYEL duh fyo-NA', ['ecoute']),
  sent(2241, 'Elle écrit que le budget est « a bit of a problem ».', 'She writes that the budget is “a bit of a problem”.', '/ɛl e.kʁi kə lə byd.ʒɛ ɛ/', 'el ay-KREE | kuh luh büd-ZHEH EH', ['ecoute']),
  sent(2242, 'Dans la phrase suivante, elle annule deux ateliers.', 'In the next sentence, she cancels two workshops.', '/dɑ̃ la fʁaz sɥi.vɑ̃t ɛl a.nyl dø.za.tə.lje/', 'dahⁿ la frahz swee-VAHⁿT | el a-NÜL | deu-za-tuh-LYAY', ['ecoute', 'contexte']),
  sent(2243, 'Ce n’est donc pas un petit problème : c’est un vrai problème, dit poliment.', 'So it is not a small problem: it is a real problem, said politely.', '/sə nɛ dɔ̃k pa.zœ̃ pə.ti pʁɔ.blɛm sɛ.tœ̃ vʁɛ pʁɔ.blɛm di pɔ.li.mɑ̃/', 'suh neh dohⁿk pa-zuhⁿ puh-TEE pro-BLEMM | seh-tuhⁿ VREH pro-BLEMM | dee po-lee-MAHⁿ', ['ecoute', 'retenue']),
  sent(2244, 'Si tu écris « un petit problème », la directrice croira que tout va bien.', 'If you write “a small problem”, the director will think all is well.', '/si ty e.kʁi œ̃ pə.ti pʁɔ.blɛm la di.ʁɛk.tʁis kʁwa.ʁa kə tu va bjɛ̃/', 'see tü ay-KREE | uhⁿ puh-TEE pro-BLEMM | la dee-rek-TREESS | krwa-RA | kuh too va BYEHⁿ', ['ecoute']),
  sent(2245, 'Garde sa politesse, mais rends la gravité.', 'Keep her politeness, but convey how serious it is.', '/ɡaʁd sa pɔ.li.tɛs mɛ ʁɑ̃ la ɡʁa.vi.te/', 'gard sa po-lee-TESS | meh RAHⁿ la gra-vee-TAY', ['ecoute', 'force']),
  sent(2246, 'Et quand elle se dit « pas entièrement convaincue », elle refuse, poliment.', 'And when she says she is not entirely convinced, she is saying no, politely.', '/e kɑ̃.tɛl sə di pa.zɑ̃.tjɛʁ.mɑ̃ kɔ̃.vɛ̃.ky ɛl ʁə.fyz pɔ.li.mɑ̃/', 'ay kahⁿ-tel suh DEE | pa-zahⁿ-tyehr-MAHⁿ kohⁿ-vehⁿ-KÜ | el ruh-FÜZ | po-lee-MAHⁿ', ['ecoute', 'retenue']),
  sent(2247, 'Rappelle-moi avant d’envoyer la version française.', 'Call me back before you send the French version.', '/ʁa.pɛl.mwa a.vɑ̃ dɑ̃.vwa.je la vɛʁ.sjɔ̃ fʁɑ̃.sɛz/', 'ra-pel-MWA | a-vahⁿ dahⁿ-vwa-YAY | la vehr-SYOHⁿ frahⁿ-SEZ', ['ecoute']),
];

/* ── ACT 5 · LE FIL DU PARAGRAPHE ───────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(2248, 'Le paragraphe anglais part souvent de son idée principale.', 'An English paragraph often starts from its main idea.', '/lə pa.ʁa.ɡʁaf ɑ̃.ɡlɛ paʁ su.vɑ̃ də sɔ̃.ni.de pʁɛ̃.si.pal/', 'luh pa-ra-GRAF ahⁿ-GLEH | par soo-VAHⁿ | duh soh-nee-DAY prehⁿ-see-PAL', ['fil', 'paragraphe']),
  sent(2249, 'Le lecteur français attend souvent qu’on lui annonce le chemin.', 'The French reader often expects to be told the way ahead.', '/lə lɛk.tœʁ fʁɑ̃.sɛ a.tɑ̃ su.vɑ̃ kɔ̃ lɥi a.nɔ̃s lə ʃə.mɛ̃/', 'luh lek-TUHR frahⁿ-SEH | a-TAHⁿ soo-VAHⁿ | kohⁿ lwee a-NOHⁿSS | luh shuh-MEHⁿ', ['fil', 'paragraphe']),
  sent(2250, 'Trois raisons expliquent ce choix.', 'There are three reasons for this choice.', '/tʁwa ʁɛ.zɔ̃ ɛks.plik sə ʃwa/', 'trwa reh-ZOHⁿ | ex-PLEEK suh SHWA', ['fil', 'annonce'], FCVDR),
  sent(2251, 'La première tient au coût.', 'First, cost.', '/la pʁə.mjɛʁ tjɛ̃ o ku/', 'la pruh-MYEHR | tyehⁿ oh KOO', ['fil', 'annonce']),
  sent(2252, 'La deuxième, plus décisive, tient aux horaires.', 'Second, and more importantly, opening hours.', '/la dø.zjɛm ply de.si.ziv tjɛ̃ o.zɔ.ʁɛʁ/', 'la deu-ZYEMM | plü day-see-ZEEV | tyehⁿ oh-zo-REHR', ['fil', 'annonce']),
  sent(2253, 'Reste une dernière raison, moins visible.', 'Finally, there is a less obvious reason.', '/ʁɛst yn dɛʁ.njɛʁ ʁɛ.zɔ̃ mwɛ̃ vi.zibl/', 'REST | ünn dehr-nyehr reh-ZOHⁿ | mwehⁿ vee-ZEEBL', ['fil', 'annonce']),
  sent(2254, 'Je garde l’ordre des idées, mais je rends les liens visibles.', 'I keep the order of ideas, but I make the links visible.', '/ʒə ɡaʁd lɔʁdʁ de.zi.de mɛ ʒə ʁɑ̃ le ljɛ̃ vi.zibl/', 'zhuh gard LORDR day-zee-DAY | meh zhuh RAHⁿ | lay lyehⁿ vee-ZEEBL', ['fil', 'charniere'], FCVDR),
  sent(2255, 'Les articulations que l’anglais laisse au lecteur, le français les écrit souvent.', 'The links English leaves to the reader, French often writes out.', '/le.zaʁ.ti.ky.la.sjɔ̃ kə lɑ̃.ɡlɛ lɛs o lɛk.tœʁ lə fʁɑ̃.sɛ le.ze.kʁi su.vɑ̃/', 'lay-zar-tee-kü-la-SYOHⁿ | kuh lahⁿ-GLEH LESS | oh lek-TUHR | luh frahⁿ-SEH | lay-zay-KREE soo-VAHⁿ', ['regle', 'charniere'], FC,
    rule('Le paragraphe anglais aligne trois phrases sans un seul mot de liaison. Que fais-tu ?', 'Tu gardes l’ordre et la thèse, et tu écris les articulations que l’anglais laisse au lecteur : d’abord, en effet, or, c’est pourquoi. C’est une tendance du français écrit, pas une loi.')),
  sent(2256, 'Or ces horaires ne conviennent pas aux familles.', 'But these hours do not suit families.', '/ɔʁ se.zɔ.ʁɛʁ nə kɔ̃.vjɛn pa o fa.mij/', 'OR | say-zo-REHR | nuh kohⁿ-VYENN PA | oh fa-MEEY', ['fil', 'charniere']),
  sent(2257, 'C’est pourquoi nous proposons d’ouvrir le dimanche.', 'Hence our proposal to open on Sundays.', '/sɛ puʁ.kwa nu pʁɔ.po.zɔ̃ du.vʁiʁ lə di.mɑ̃ʃ/', 'seh poor-KWA | noo pro-poh-ZOHⁿ | doo-VREER luh dee-MAHⁿSH', ['fil', 'charniere']),
  sent(2258, 'Le fil de l’argument ne change pas ; seuls ses repères changent.', 'The thread of the argument does not change; only its signposts do.', '/lə fil də laʁ.ɡy.mɑ̃ nə ʃɑ̃ʒ pa sœl se ʁə.pɛʁ ʃɑ̃ʒ/', 'luh FEEL duh lar-gü-MAHⁿ | nuh shahⁿzh PA | suhl say ruh-PEHR SHAHⁿZH', ['fil']),
];

/* ── ACT 6 · EXPLICITER ─────────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(2259, 'Les loyers ont augmenté, si bien que les familles sont parties.', 'Rents rose. Families left.', '/le lwa.je ɔ̃.toɡ.mɑ̃.te si bjɛ̃ kə le fa.mij sɔ̃ paʁ.ti/', 'lay lwa-YAY | ohⁿ-tog-mahⁿ-TAY | see byehⁿ kuh | lay fa-MEEY sohⁿ par-TEE', ['expliciter', 'lien']),
  sent(2260, 'Le projet a été approuvé, mais le financement n’a jamais suivi.', 'The project was approved and the funding never came.', '/lə pʁɔ.ʒɛ a e.te a.pʁu.ve mɛ lə fi.nɑ̃s.mɑ̃ na ʒa.mɛ sɥi.vi/', 'luh pro-ZHEH | a ay-TAY a-proo-VAY | meh luh fee-nahⁿss-MAHⁿ | na zha-MEH swee-VEE', ['expliciter', 'lien']),
  sent(2261, 'Comme le conseil avait changé, le dossier a été rouvert.', 'With a new council in place, the file was reopened.', '/kɔm lə kɔ̃.sɛj a.vɛ ʃɑ̃.ʒe lə do.sje a e.te ʁu.vɛʁ/', 'komm luh kohⁿ-SEY | a-veh shahⁿ-ZHAY | luh do-SYAY | a ay-TAY roo-VEHR', ['expliciter', 'lien']),
  phrase(2262, 'le service public de santé britannique (NHS)', 'the NHS', '/lə sɛʁ.vis py.blik də sɑ̃.te bʁi.ta.nik/', 'luh sehr-VEESS pü-BLEEK | duh sahⁿ-TAY bree-ta-NEEK', ['expliciter', 'sigle']),
  sent(2263, 'J’ajoute ce que le lecteur anglais savait sans qu’on le lui dise.', 'I add what the English reader knew without being told.', '/ʒa.ʒut sə kə lə lɛk.tœʁ ɑ̃.ɡlɛ sa.vɛ sɑ̃ kɔ̃ lə lɥi diz/', 'zha-ZHOOT | suh kuh luh lek-tuhr ahⁿ-GLEH sa-VEH | sahⁿ kohⁿ luh lwee DEEZ', ['expliciter'], FCVDR),
  sent(2264, 'Expliciter, c’est écrire en toutes lettres ce que le contexte disait déjà.', 'Explicitation means spelling out what the context already said.', '/ɛks.pli.si.te sɛ.te.kʁiʁ ɑ̃ tut lɛtʁ sə kə lə kɔ̃.tɛkst di.zɛ de.ʒa/', 'ex-plee-see-TAY | seh-tay-KREER | ahⁿ toot LETR | suh kuh luh kohⁿ-TEKST | dee-ZEH day-ZHA', ['regle', 'expliciter'], FC,
    rule('« Rents rose. Families left. » Que manque-t-il au lecteur français ?', 'Le lien. L’anglais laisse le lecteur le deviner ; en français, écris-le : « si bien que », « c’est pourquoi ». Tu n’ajoutes aucune idée, tu montres celle qui était là.')),
  sent(2265, 'Je n’ajoute aucune idée : je montre celle qui était là.', 'I add no idea: I show the one that was there.', '/ʒə na.ʒut o.kyn i.de ʒə mɔ̃tʁ sɛl ki e.tɛ la/', 'zhuh na-ZHOOT oh-künn ee-DAY | zhuh MOHⁿTR | sel kee ay-teh LA', ['expliciter']),
  sent(2266, 'Trop expliquer, c’est aussi trahir le texte.', 'Over-explaining is also a way of betraying the text.', '/tʁo ɛks.pli.ke sɛ.to.si tʁa.iʁ lə tɛkst/', 'troh ex-plee-KAY | seh-toh-SEE | tra-EER luh TEKST', ['expliciter', 'surtraduction']),
  sent(2267, 'Les prix ont augmenté, et les ventes ont donc baissé.', 'Prices went up; sales went down.', '/le pʁi ɔ̃.toɡ.mɑ̃.te e le vɑ̃t ɔ̃ dɔ̃k be.se/', 'lay PREE | ohⁿ-tog-mahⁿ-TAY | ay lay VAHⁿT | ohⁿ dohⁿk beh-SAY', ['expliciter', 'lien']),
  sent(2268, 'Faute de bénévoles, l’atelier a fermé.', 'Volunteers dropped out and the workshop closed.', '/fot də be.ne.vɔl la.tə.lje a fɛʁ.me/', 'foht duh bay-nay-VOL | la-tuh-LYAY a fehr-MAY', ['expliciter', 'lien']),
  sent(2269, 'L’entente signée en mars entre en vigueur en juin.', 'The March agreement takes effect in June.', '/lɑ̃.tɑ̃t si.ɲe ɑ̃ maʁs ɑ̃tʁ ɑ̃ vi.ɡœʁ ɑ̃ ʒɥɛ̃/', 'lahⁿ-TAHⁿT see-NYAY ahⁿ MARSS | AHⁿTR ahⁿ vee-GUHR | ahⁿ ZHWEHⁿ', ['expliciter', 'etoffement']),
];

/* ── ACT 7 · IMPLICITATION ──────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(2270, 'Chacun d’entre vous a reçu le dossier.', 'Each and every one of you has received the file.', '/ʃa.kœ̃ dɑ̃tʁ vu a ʁə.sy lə do.sje/', 'sha-KUHⁿ dahⁿtr VOO | a ruh-SÜ luh do-SYAY', ['implicitation', 'doublet']),
  sent(2271, 'Nous remercions tous les bénévoles, sans exception.', 'We thank each and every volunteer.', '/nu ʁə.mɛʁ.sjɔ̃ tu le be.ne.vɔl sɑ̃.zɛk.sɛp.sjɔ̃/', 'noo ruh-mehr-SYOHⁿ | too lay bay-nay-VOL | sahⁿ-zek-sep-SYOHⁿ', ['implicitation', 'doublet']),
  sent(2272, 'Avant tout, merci d’être venus.', 'First and foremost, thank you for coming.', '/a.vɑ̃ tu mɛʁ.si dɛtʁ və.ny/', 'a-vahⁿ TOO | mehr-SEE | detr vuh-NÜ', ['implicitation', 'doublet']),
  sent(2273, 'Le résultat a surpris tout le monde.', 'The end result surprised everyone.', '/lə ʁe.zyl.ta a syʁ.pʁi tu lə mɔ̃d/', 'luh ray-zül-TA | a sür-PREE | too luh MOHⁿD', ['implicitation', 'redondance']),
  sent(2274, 'Nos projets restent les mêmes.', 'Our future plans remain the same.', '/no pʁɔ.ʒɛ ʁɛst le mɛm/', 'noh pro-ZHEH | rest lay MEMM', ['implicitation', 'redondance']),
  sent(2275, 'Actuellement, aucune date n’est fixée.', 'At this point in time, no date has been set.', '/ak.tɥɛl.mɑ̃ o.kyn dat nɛ fik.se/', 'ak-twel-MAHⁿ | oh-künn DAT | neh feek-SAY', ['implicitation', 'redondance']),
  sent(2276, 'Si la réunion est annulée, nous vous préviendrons.', 'In the event that the meeting is cancelled, we will let you know.', '/si la ʁe.y.njɔ̃ ɛ.ta.ny.le nu vu pʁe.vjɛ̃.dʁɔ̃/', 'see la ray-ü-NYOHⁿ | eh-ta-nü-LAY | noo voo pray-vyehⁿ-DROHⁿ', ['implicitation']),
  sent(2277, 'Comme la salle était pleine, nous avons dû refuser du monde.', 'Due to the fact that the room was full, we had to turn people away.', '/kɔm la sal e.tɛ plɛn nu.za.vɔ̃ dy ʁə.fy.ze dy mɔ̃d/', 'komm la SAL ay-teh PLENN | noo-za-vohⁿ DÜ | ruh-fü-ZAY dü MOHⁿD', ['implicitation']),
  sent(2278, 'Le français ne double pas ce qu’un seul mot dit déjà.', 'French does not say twice what one word already says.', '/lə fʁɑ̃.sɛ nə dubl pa sə kœ̃ sœl mo di de.ʒa/', 'luh frahⁿ-SEH nuh DOOBL PA | suh kuhⁿ suhl MOH | dee day-ZHA', ['regle', 'implicitation'], FC,
    rule('L’anglais écrit « each and every » et « end result ». Gardes-tu les deux mots ?', 'Non : chacun, sans exception ; le résultat. Le français ne double pas ce qu’un seul mot dit déjà. Ce qui se répète d’une phrase à l’autre se reprend par un pronom ou un synonyme.')),
  sent(2279, 'Un mot suffit quand il dit tout.', 'One word is enough when it says it all.', '/œ̃ mo sy.fi kɑ̃.til di tu/', 'uhⁿ MOH sü-FEE | kahⁿ-teel dee TOO', ['implicitation'], FCVDR),
  sent(2280, 'Alléger, ce n’est jamais supprimer une idée.', 'Lightening a text never means deleting an idea.', '/a.le.ʒe sə nɛ ʒa.mɛ sy.pʁi.me yn i.de/', 'a-lay-ZHAY | suh neh zha-MEH | sü-pree-MAY ünn ee-DAY', ['implicitation', 'idee'], FCVDR),
  sent(2281, 'Je laisse au contexte ce qu’il dit déjà.', 'I leave to the context what it already says.', '/ʒə lɛs o kɔ̃.tɛkst sə kil di de.ʒa/', 'zhuh LESS oh kohⁿ-TEKST | suh keel dee day-ZHA', ['implicitation']),
];

/* ── ACT 8 · L’ÉQUIVALENCE CULTURELLE ───────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(2282, 'Donnez-nous un ordre de grandeur.', 'Give us a ballpark figure.', '/dɔ.ne.nu œ̃.nɔʁdʁ də ɡʁɑ̃.dœʁ/', 'do-nay-NOO | uh-NORDR duh grahⁿ-DUHR', ['equivalence', 'image']),
  sent(2283, 'Le coût serait de l’ordre de deux millions.', 'The cost would be in the ballpark of two million.', '/lə ku sə.ʁɛ də lɔʁdʁ də dø mi.ljɔ̃/', 'luh KOO suh-REH | duh LORDR | duh deu mee-LYOHⁿ', ['equivalence', 'image']),
  sent(2284, 'Ce n’est que la partie émergée de l’iceberg.', 'It is just the tip of the iceberg.', '/sə nɛ kə la paʁ.ti e.mɛʁ.ʒe də lajs.bɛʁɡ/', 'suh neh kuh la par-TEE | ay-mehr-ZHAY | duh lice-BEHRG', ['equivalence', 'image']),
  sent(2285, 'Nous voilà revenus à la case départ.', 'We are back to square one.', '/nu vwa.la ʁə.və.ny a la kaz de.paʁ/', 'noo vwa-LA ruh-vuh-NÜ | a la kahz day-PAR', ['equivalence', 'image']),
  sent(2286, 'La course fait environ cinq kilomètres.', 'The run is about three miles.', '/la kuʁs fɛ ɑ̃.vi.ʁɔ̃ sɛ̃k ki.lɔ.mɛtʁ/', 'la KOORSS feh | ahⁿ-vee-ROHⁿ | sehⁿk kee-lo-METR', ['equivalence', 'unite']),
  sent(2287, 'Il faisait plus de trente degrés.', 'It was over ninety degrees.', '/il fə.zɛ plys də tʁɑ̃t də.ɡʁe/', 'eel fuh-ZEH | plüss duh TRAHⁿT duh-GRAY', ['equivalence', 'unite']),
  sent(2288, 'Le jour de l’Action de grâce, la bibliothèque sera fermée.', 'The library will be closed on Thanksgiving.', '/lə ʒuʁ də lak.sjɔ̃ də ɡʁas la bi.bli.jɔ.tɛk sə.ʁa fɛʁ.me/', 'luh ZHOOR | duh lak-SYOHⁿ duh GRAHSS | la bee-blee-yo-TEK | suh-RA fehr-MAY', ['equivalence', 'reference']),
  sent(2289, 'Je garde, j’explique, je remplace ou je généralise.', 'I keep, explain, replace or generalise.', '/ʒə ɡaʁd ʒɛks.plik ʒə ʁɑ̃.plas u ʒə ʒe.ne.ʁa.liz/', 'zhuh GARD | zhex-PLEEK | zhuh rahⁿ-PLASS | oo zhuh zhay-nay-ra-LEEZ', ['equivalence', 'strategie'], FCVDR),
  sent(2290, 'Une référence culturelle se traduit par l’effet qu’elle produit.', 'A cultural reference is translated by the effect it produces.', '/yn ʁe.fe.ʁɑ̃s kyl.ty.ʁɛl sə tʁa.dɥi paʁ le.fɛ kɛl pʁɔ.dɥi/', 'ünn ray-fay-RAHⁿSS kül-tü-REL | suh tra-DWEE | par lay-FEH | kel pro-DWEE', ['regle', 'equivalence'], FC,
    rule('Fiona écrit « a ballpark figure ». Que cherches-tu ?', 'Ce que l’image fait : donner un chiffre approximatif. « Un ordre de grandeur » le fait sans le stade de baseball. Si le français a une image proche, comme la case départ, prends-la.')),
  sent(2291, 'Je n’explique que ce qui gêne la compréhension.', 'I only explain what gets in the way of understanding.', '/ʒə nɛks.plik kə sə ki ʒɛn la kɔ̃.pʁe.ɑ̃.sjɔ̃/', 'zhuh nex-PLEEK | kuh suh kee ZHENN | la kohⁿ-pray-ahⁿ-SYOHⁿ', ['equivalence', 'strategie']),
  sent(2292, 'Un chiffre en milles ne dit rien à mon lecteur ; en kilomètres, si.', 'A figure in miles means nothing to my reader; in kilometres, it does.', '/œ̃ ʃifʁ ɑ̃ mil nə di ʁjɛ̃ a mɔ̃ lɛk.tœʁ ɑ̃ ki.lɔ.mɛtʁ si/', 'uhⁿ SHEEFR ahⁿ MEEL | nuh dee RYEHⁿ | a mohⁿ lek-TUHR | ahⁿ kee-lo-METR SEE', ['equivalence', 'unite']),
];

/* ── ACT 9 · RÉSUMER EN TRADUISANT ──────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(2293, 'Selon l’auteure, les bibliothèques sont devenues des refuges contre la chaleur.', 'The author argues that libraries have become shelters from the heat.', '/sə.lɔ̃ lo.tœʁ le bi.bli.jɔ.tɛk sɔ̃ dəv.ny de ʁə.fyʒ kɔ̃tʁ la ʃa.lœʁ/', 'suh-LOHⁿ loh-TUHR | lay bee-blee-yo-TEK | sohⁿ duhv-NÜ | day ruh-FÜZH | kohⁿtr la sha-LUHR', ['resume', 'attribuer']),
  phrase(2294, 'l’auteure soutient que', 'the author argues that', '/lo.tœʁ su.tjɛ̃ kə/', 'loh-TUHR soo-tyehⁿ KUH', ['resume', 'attribuer']),
  sent(2295, 'Je garde la thèse, les arguments et leur ordre.', 'I keep the thesis, the arguments and their order.', '/ʒə ɡaʁd la tɛz le.zaʁ.ɡy.mɑ̃ e lœʁ ɔʁdʁ/', 'zhuh gard la TEZ | lay-zar-gü-MAHⁿ | ay luhr ORDR', ['resume', 'fil'], FCVDR),
  sent(2296, 'Je laisse de côté les exemples et les anecdotes.', 'I leave out the examples and the anecdotes.', '/ʒə lɛs də ko.te le.zɛɡ.zɑ̃pl e le.za.nɛk.dɔt/', 'zhuh less duh koh-TAY | lay-zeg-ZAHⁿPL | ay lay-za-nek-DOT', ['resume']),
  sent(2297, 'Un résumé traduit ne donne jamais mon avis.', 'A translated summary never gives my opinion.', '/œ̃ ʁe.zy.me tʁa.dɥi nə dɔn ʒa.mɛ mɔ̃.na.vi/', 'uhⁿ ray-zü-MAY tra-DWEE | nuh donn zha-MEH | moh-na-VEE', ['resume']),
  sent(2298, 'Je résume directement en français, sans tout traduire d’abord.', 'I summarise straight into French, without translating everything first.', '/ʒə ʁe.zym di.ʁɛk.tə.mɑ̃ ɑ̃ fʁɑ̃.sɛ sɑ̃ tu tʁa.dɥiʁ da.bɔʁ/', 'zhuh ray-ZÜMM | dee-rek-tuh-MAHⁿ ahⁿ frahⁿ-SEH | sahⁿ too tra-DWEER da-BOR', ['resume', 'methode']),
  sent(2299, 'Résumer en traduisant, c’est rendre l’idée et le fil sans les détails.', 'Summarising while translating means conveying the idea and the thread without the details.', '/ʁe.zy.me ɑ̃ tʁa.dɥi.zɑ̃ sɛ ʁɑ̃dʁ li.de e lə fil sɑ̃ le de.taj/', 'ray-zü-MAY ahⁿ tra-dwee-ZAHⁿ | seh RAHⁿDR lee-DAY | ay luh FEEL | sahⁿ lay day-TAÏ', ['regle', 'resume'], FC,
    rule('On te demande cent vingt mots en français sur un article anglais de six cents mots. Par quoi commences-tu ?', 'Par la thèse et le plan de l’auteure, repérés dans l’anglais. Puis tu écris directement en français, en attribuant chaque idée : selon l’auteure, l’auteure estime que. Ni exemple, ni avis.')),
  sent(2300, 'Salut, c’est Malik, de la communication.', 'Hi, it’s Malik from communications.', '/sa.ly sɛ ma.lik də la kɔ.my.ni.ka.sjɔ̃/', 'sa-LÜ | seh ma-LEEK | duh la ko-mü-nee-ka-SYOHⁿ', ['ecoute']),
  sent(2301, 'Fiona a publié un long article en anglais sur les bibliothèques.', 'Fiona has published a long article in English on libraries.', '/fjɔ.na a py.bli.je œ̃ lɔ̃.ɡaʁ.tikl ɑ̃.nɑ̃.ɡlɛ syʁ le bi.bli.jɔ.tɛk/', 'fyo-NA a pü-blee-YAY | uhⁿ lohⁿ-gar-TEEKL | ah-nahⁿ-GLEH | sür lay bee-blee-yo-TEK', ['ecoute']),
  sent(2302, 'Il nous faut un résumé en français pour l’infolettre de jeudi.', 'We need a French summary for Thursday’s newsletter.', '/il nu fo œ̃ ʁe.zy.me ɑ̃ fʁɑ̃.sɛ puʁ lɛ̃.fo.lɛtʁ də ʒø.di/', 'eel noo FOH | uhⁿ ray-zü-MAY ahⁿ frahⁿ-SEH | poor lehⁿ-foh-LETR duh zheu-DEE', ['ecoute']),
  sent(2303, 'Cent vingt mots au plus, pas une traduction complète.', 'A hundred and twenty words at most, not a full translation.', '/sɑ̃ vɛ̃ mo o plys pa.zyn tʁa.dyk.sjɔ̃ kɔ̃.plɛt/', 'sahⁿ vehⁿ MOH oh PLÜSS | pa-zünn tra-dük-SYOHⁿ kohⁿ-PLET', ['ecoute']),
  sent(2304, 'Garde son argument central et ses deux propositions.', 'Keep her central argument and her two proposals.', '/ɡaʁd sɔ̃.naʁ.ɡy.mɑ̃ sɑ̃.tʁal e se dø pʁɔ.po.zi.sjɔ̃/', 'gard soh-nar-gü-MAHⁿ sahⁿ-TRAL | ay say DEU pro-poh-zee-SYOHⁿ', ['ecoute']),
  sent(2305, 'Laisse tomber le souvenir de sa grand-mère : c’est joli, mais trop long.', 'Drop the memory of her grandmother: it’s nice, but too long.', '/lɛs tɔ̃.be lə su.və.niʁ də sa ɡʁɑ̃.mɛʁ sɛ ʒɔ.li mɛ tʁo lɔ̃/', 'less tohⁿ-BAY | luh soo-vuh-NEER duh sa grahⁿ-MEHR | seh zho-LEE | meh troh LOHⁿ', ['ecoute']),
  sent(2306, 'Et précise bien que ce sont ses idées, pas celles de la Fondation.', 'And make clear that these are her ideas, not the Foundation’s.', '/e pʁe.siz bjɛ̃ kə sə sɔ̃ se.zi.de pa sɛl də la fɔ̃.da.sjɔ̃/', 'ay pray-SEEZ BYEHⁿ | kuh suh sohⁿ say-zee-DAY | pa sel duh la fohⁿ-da-SYOHⁿ', ['ecoute', 'attribuer']),
  sent(2307, 'Merci, tu me sauves la semaine.', 'Thanks, you are saving my week.', '/mɛʁ.si ty mə sov la sə.mɛn/', 'mehr-SEE | tü muh SOHV | la suh-MENN', ['ecoute']),
];

/* ── ACT 10 · CHANGER DE PUBLIC ─────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(2308, 'Le public change, le contenu reste.', 'The audience changes; the content stays.', '/lə py.blik ʃɑ̃ʒ lə kɔ̃t.ny ʁɛst/', 'luh pü-BLEEK SHAHⁿZH | luh kohⁿt-NÜ REST', ['public'], FCVDR),
  sent(2309, 'Les arbres d’alignement atténuent l’effet d’îlot de chaleur urbain.', 'Street trees reduce the urban heat island effect.', '/le.zaʁbʁ da.li.ɲə.mɑ̃ a.te.ny le.fɛ di.lo də ʃa.lœʁ yʁ.bɛ̃/', 'lay-ZARBR da-lee-nyuh-MAHⁿ | a-tay-NÜ | lay-FEH dee-LOH | duh sha-luhr ür-BEHⁿ', ['public', 'expert']),
  sent(2310, 'Les arbres plantés le long des rues rafraîchissent la ville.', 'Street trees reduce the urban heat island effect (for the general public).', '/le.zaʁbʁ plɑ̃.te lə lɔ̃ de ʁy ʁa.fʁɛ.ʃis la vil/', 'lay-ZARBR plahⁿ-TAY | luh lohⁿ day RÜ | ra-freh-SHEESS la VEEL', ['public', 'grand-public']),
  sent(2311, 'Plus d’arbres dans ta rue, c’est moins de chaleur en été.', 'Street trees reduce the urban heat island effect (for a youth account).', '/ply daʁbʁ dɑ̃ ta ʁy sɛ mwɛ̃ də ʃa.lœʁ ɑ̃.ne.te/', 'plü DARBR dahⁿ ta RÜ | seh mwehⁿ duh sha-LUHR | ah-nay-TAY', ['public', 'jeunes']),
  sent(2312, 'Je choisis vous ou tu selon ce que le public attend.', 'I choose vous or tu according to what the audience expects.', '/ʒə ʃwa.zi vu u ty sə.lɔ̃ sə kə lə py.blik a.tɑ̃/', 'zhuh shwa-ZEE | VOO oo TÜ | suh-LOHⁿ suh kuh luh pü-BLEEK a-TAHⁿ', ['public']),
  sent(2313, 'Pour le grand public, un terme technique s’explique ou se remplace.', 'For the general public, a technical term is explained or replaced.', '/puʁ lə ɡʁɑ̃ py.blik œ̃ tɛʁm tɛk.nik sɛks.plik u sə ʁɑ̃.plas/', 'poor luh grahⁿ pü-BLEEK | uhⁿ TEHRM tek-NEEK | sex-PLEEK | oo suh rahⁿ-PLASS', ['public', 'grand-public']),
  sent(2314, 'Une même idée, trois publics : je change les mots, la longueur et la distance, jamais le fond.', 'One idea, three audiences: I change the words, the length and the distance, never the substance.', '/yn mɛm i.de tʁwa py.blik ʒə ʃɑ̃ʒ le mo la lɔ̃.ɡœʁ e la dis.tɑ̃s ʒa.mɛ lə fɔ̃/', 'ünn memm ee-DAY | trwa pü-BLEEK | zhuh shahⁿzh lay MOH | la lohⁿ-GUHR | ay la dees-TAHⁿSS | zha-MEH luh FOHⁿ', ['regle', 'public'], FC,
    rule('« Street trees reduce the urban heat island effect. » Pour qui traduis-tu ?', 'Pour des urbanistes : « arbres d’alignement », « îlot de chaleur urbain ». Pour le grand public : « les arbres plantés le long des rues rafraîchissent la ville ». Pour un compte jeunesse, tu peux tutoyer. Le fait ne change pas.')),
  sent(2315, 'Je demande toujours : pour qui, et pour quoi faire ?', 'I always ask: for whom, and to do what?', '/ʒə də.mɑ̃d tu.ʒuʁ puʁ ki e puʁ kwa fɛʁ/', 'zhuh duh-MAHⁿD too-ZHOOR | poor KEE | ay poor kwa FEHR', ['public'], FCVDR),
  sent(2316, 'Nous vous invitons à découvrir le rapport complet.', 'We encourage you to read the full report.', '/nu vu.zɛ̃.vi.tɔ̃ a de.ku.vʁiʁ lə ʁa.pɔʁ kɔ̃.plɛ/', 'noo voo-zehⁿ-vee-TOHⁿ | a day-koo-VREER | luh ra-POR kohⁿ-PLEH', ['public', 'vous']),
  sent(2317, 'Découvre le rapport complet en ligne.', 'Check out the full report online.', '/de.kuvʁ lə ʁa.pɔʁ kɔ̃.plɛ ɑ̃ liɲ/', 'day-KOOVR | luh ra-POR kohⁿ-PLEH | ahⁿ LEENY', ['public', 'tu']),
  sent(2318, 'Le registre suit le public, pas la langue de départ.', 'The register follows the audience, not the source language.', '/lə ʁə.ʒistʁ sɥi lə py.blik pa la lɑ̃ɡ də de.paʁ/', 'luh ruh-ZHEESTR swee luh pü-BLEEK | pa la lahⁿg duh day-PAR', ['public']),
];

/* ── ACT 11 · RELIRE EN TRADUCTEUR ──────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  phrase(2319, 'un faux sens', 'a mistranslation of a word (the wrong precise meaning)', '/œ̃ fo sɑ̃s/', 'uhⁿ foh SAHⁿSS', ['relire', 'erreur']),
  phrase(2320, 'un contresens', 'a mistranslation that contradicts the meaning', '/œ̃ kɔ̃.tʁə.sɑ̃s/', 'uhⁿ kohⁿ-truh-SAHⁿSS', ['relire', 'erreur']),
  phrase(2321, 'un non-sens', 'a rendering that makes no sense', '/œ̃ nɔ̃.sɑ̃s/', 'uhⁿ nohⁿ-SAHⁿSS', ['relire', 'erreur']),
  sent(2322, 'Il manque une idée : c’est une omission.', 'An idea is missing: that is an omission.', '/il mɑ̃k yn i.de sɛ.tyn ɔ.mi.sjɔ̃/', 'eel mahⁿk ünn ee-DAY | seh-tünn o-mee-SYOHⁿ', ['relire', 'erreur']),
  sent(2323, 'J’ai ajouté une idée que l’auteure n’a pas écrite.', 'I added an idea the author did not write.', '/ʒe a.ʒu.te yn i.de kə lo.tœʁ na pa.ze.kʁit/', 'zhay a-zhoo-TAY ünn ee-DAY | kuh loh-TUHR | na pa-zay-KREET', ['relire', 'erreur']),
  sent(2324, 'Je relis l’anglais phrase par phrase pour vérifier chaque idée.', 'I reread the English sentence by sentence to check every idea.', '/ʒə ʁə.li lɑ̃.ɡlɛ fʁaz paʁ fʁaz puʁ ve.ʁi.fje ʃak i.de/', 'zhuh ruh-LEE lahⁿ-GLEH | frahz par FRAHZ | poor vay-ree-FYAY | shak ee-DAY', ['relire'], FCVDR),
  sent(2325, 'Puis je relis le français seul, comme un lecteur qui n’a pas l’original.', 'Then I reread the French alone, like a reader without the original.', '/pɥi ʒə ʁə.li lə fʁɑ̃.sɛ sœl kɔ.mœ̃ lɛk.tœʁ ki na pa lɔ.ʁi.ʒi.nal/', 'pwee zhuh ruh-LEE | luh frahⁿ-seh SUHL | ko-muhⁿ lek-TUHR | kee na pa lo-ree-zhee-NAL', ['relire']),
  sent(2326, 'Deux relectures : avec l’anglais pour le sens, sans l’anglais pour le français.', 'Two readings: with the English for the meaning, without the English for the French.', '/dø ʁə.lɛk.tyʁ a.vɛk lɑ̃.ɡlɛ puʁ lə sɑ̃s sɑ̃ lɑ̃.ɡlɛ puʁ lə fʁɑ̃.sɛ/', 'deu ruh-lek-TÜR | a-vek lahⁿ-GLEH poor luh SAHⁿSS | sahⁿ lahⁿ-GLEH poor luh frahⁿ-SEH', ['regle', 'relire'], FC,
    rule('Ta traduction est finie. Combien de fois la relis-tu, et comment ?', 'Deux fois au moins : d’abord avec l’anglais, idée par idée (rien d’oublié, rien d’ajouté, la même force) ; puis sans l’anglais, comme ton lecteur, pour entendre le français.')),
  sent(2327, 'La force est-elle la même que dans l’original ?', 'Is the strength the same as in the original?', '/la fɔʁs ɛ.tɛl la mɛm kə dɑ̃ lɔ.ʁi.ʒi.nal/', 'la FORSS | eh-TEL la MEMM | kuh dahⁿ lo-ree-zhee-NAL', ['relire', 'force']),
  sent(2328, 'Chaque chiffre et chaque nom sont-ils exacts ?', 'Is every figure and every name accurate?', '/ʃak ʃifʁ e ʃak nɔ̃ sɔ̃.til ɛɡ.za/', 'shak SHEEFR | ay shak NOHⁿ | sohⁿ-teel eg-ZA', ['relire']),
  sent(2329, 'Rendre « arguably » par « sans aucun doute », c’est forcer la certitude.', 'Rendering “arguably” as “without any doubt” overstates the certainty.', '/ʁɑ̃dʁ paʁ sɑ̃.zo.kœ̃ dut sɛ fɔʁ.se la sɛʁ.ti.tyd/', 'RAHⁿDR | par sahⁿ-zoh-kuhⁿ DOOT | seh for-SAY | la sehr-tee-TÜD', ['relire', 'force']),
  sent(2330, 'Une traduction se juge à l’effet qu’elle produit sur son lecteur.', 'A translation is judged by the effect it has on its reader.', '/yn tʁa.dyk.sjɔ̃ sə ʒyʒ a le.fɛ kɛl pʁɔ.dɥi syʁ sɔ̃ lɛk.tœʁ/', 'ünn tra-dük-SYOHⁿ | suh ZHÜZH | a lay-FEH kel pro-DWEE | sür sohⁿ lek-TUHR', ['relire', 'idee']),
];

/* ── ACT 12 · TA TRADUCTION ─────────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(2331, 'Je lis tout le texte avant d’écrire une ligne.', 'I read the whole text before writing a line.', '/ʒə li tu lə tɛkst a.vɑ̃ de.kʁiʁ yn liɲ/', 'zhuh lee too luh TEKST | a-vahⁿ day-KREER ünn LEENY', ['mission', 'methode'], FCVDR),
  sent(2332, 'Je repère la thèse, le ton et le plan.', 'I spot the thesis, the tone and the plan.', '/ʒə ʁə.pɛʁ la tɛz lə tɔ̃ e lə plɑ̃/', 'zhuh ruh-PEHR | la TEZ | luh TOHⁿ | ay luh PLAHⁿ', ['mission', 'fil']),
  sent(2333, 'Je traduis idée par idée, pas mot par mot.', 'I translate idea by idea, not word by word.', '/ʒə tʁa.dɥi i.de paʁ i.de pa mo paʁ mo/', 'zhuh tra-DWEE | ee-day par ee-DAY | pa moh par MOH', ['mission', 'idee']),
  sent(2334, 'Je dose les précautions comme l’auteure.', 'I measure the hedges as the author does.', '/ʒə doz le pʁe.ko.sjɔ̃ kɔm lo.tœʁ/', 'zhuh DOHZ | lay pray-koh-SYOHⁿ | komm loh-TUHR', ['mission', 'force']),
  sent(2335, 'J’ajoute les liens que le français attend.', 'I add the links French expects.', '/ʒa.ʒut le ljɛ̃ kə lə fʁɑ̃.sɛ a.tɑ̃/', 'zha-ZHOOT lay LYEHⁿ | kuh luh frahⁿ-SEH a-TAHⁿ', ['mission', 'fil']),
  sent(2336, 'J’explique ce que mon lecteur ne peut pas connaître.', 'I explain what my reader cannot know.', '/ʒɛks.plik sə kə mɔ̃ lɛk.tœʁ nə pø pa kɔ.nɛtʁ/', 'zhex-PLEEK | suh kuh mohⁿ lek-TUHR | nuh peu pa ko-NETR', ['mission', 'equivalence']),
  sent(2337, 'Je relis avec l’anglais, puis sans lui.', 'I reread with the English, then without it.', '/ʒə ʁə.li a.vɛk lɑ̃.ɡlɛ pɥi sɑ̃ lɥi/', 'zhuh ruh-LEE | a-vek lahⁿ-GLEH | pwee sahⁿ LWEE', ['mission', 'relire'], FCVDR),
  sent(2338, 'La cour d’école reste ouverte le week-end.', 'The schoolyard stays open at weekends.', '/la kuʁ de.kɔl ʁɛst u.vɛʁt lə wi.kɛnd/', 'la koor day-KOL | rest oo-VEHRT | luh wee-KENND', ['mission']),
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
 *  §I. THE ANCHOR TEXTS
 *
 *  One per act, each « texte original écrit pour la leçon »: the French
 *  side of a translation done well (acts 2-10, 12) or a reviser's note
 *  (acts 1, 11). The English sources are quoted in the questions and the
 *  cards. The case: the Fondation Arcelle (Montréal), its Toronto research
 *  office, the six-month evening-opening pilot at the invented bibliothèque
 *  du Carré-Vermeil. Figures never change: open until 22 h on weekdays,
 *  six months; evening visits up by about a third; four evening visitors in
 *  ten under 25; two workshops cancelled for budget reasons.
 *  The task (act 12) uses ANOTHER text, Fiona's op-ed on schoolyards
 *  (`TASK_SOURCE_EN`).
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Odile's revision note on Malik's draft. */
export const NOTE_ODILE_TEXT =
  'Note de révision, Fondation Arcelle, service de traduction. Malik, ta version du courriel de Fiona est propre : pas un calque, pas une faute, une ponctuation française impeccable. Et pourtant, la directrice l’a lue de travers. Fiona écrit, à la fin : « That said, we might want to revisit the timeline. » Tu as traduit : « Cela dit, nous pourrions éventuellement revoir le calendrier. » La phrase est correcte, mais elle ne fait plus ce que faisait l’anglais. Sous la plume de Fiona, cette tournure polie est une demande : il faut revoir le calendrier, et vite. En français, « nous pourrions éventuellement » sonne comme une hypothèse lointaine ; la directrice a compris qu’on pouvait attendre l’automne. Le reste du courriel souffre du même mal, en plus discret. Fiona enchaîne trois phrases courtes sans un seul mot de liaison : en anglais, le lecteur voit la cause ; en français, il voit une liste. Elle écrit « arguably » et tu as mis « sans aucun doute », qui la rend plus sûre qu’elle ne l’est. Rien de tout cela n’est un calque. Ce sont des idées, des forces et des fils qui se perdent en route. Je propose « Il conviendrait toutefois de revoir le calendrier », qui garde la politesse et rend la demande. Passe me voir : on reprend le courriel ensemble, idée par idée. Odile';

/** Act 2: the French version of Fiona's research paragraph. */
export const BIBLIO_TEXT =
  'Ouvrir la bibliothèque le soir : premiers enseignements. Depuis six mois, la bibliothèque du Carré-Vermeil reste ouverte jusqu’à vingt-deux heures en semaine. L’idée venait des familles du quartier : beaucoup de parents travaillent tard et ne pouvaient jamais accompagner leurs enfants avant la fermeture. Le soir, la fréquentation a augmenté d’environ un tiers. Les nouveaux visiteurs ne sont pas ceux qu’on attendait : quatre sur dix ont moins de vingt-cinq ans, et beaucoup viennent seuls, pour étudier au calme. Le quartier compte en effet de nombreux logements exigus, où il est difficile de trouver un coin tranquille. Les bibliothécaires ont aussi remarqué que les ateliers d’aide aux devoirs, déplacés en début de soirée, attiraient des parents qui n’y venaient pas auparavant. Tout n’est pas réglé pour autant. Le personnel du soir est encore peu nombreux, et certaines salles restent fermées faute de surveillance. Le coût du projet devra être réévalué à la fin de l’année. Mais le constat est net : quand on adapte les horaires à la vie des gens, ils viennent. Note du traducteur : l’original anglais tenait en un paragraphe de six phrases très denses, dont l’une alignait cinq noms d’affilée (« evening opening hours extension pilot outcomes »). Le français a pris deux paragraphes et des verbes.';

/** Act 3: the pilot evaluation, hedged as the English was. */
export const ETUDE_TEXT =
  'Évaluation de l’essai : ce que disent les chiffres. Les données recueillies pendant les six mois de l’essai semblent indiquer un lien entre les nouveaux horaires et la hausse de fréquentation du soir. Il faut toutefois rester prudent. D’abord, l’essai a commencé en octobre, au moment où les étudiants préparent leurs examens ; il se pourrait que cette période ait gonflé les chiffres. Ensuite, la gratuité des ateliers, introduite au même moment, a sans doute joué un rôle, que l’étude ne permet pas d’isoler. On peut soutenir que l’ouverture tardive a surtout profité aux jeunes : ils ont tendance à venir après vingt heures, quand les familles sont reparties. Dans une certaine mesure, l’essai a donc atteint son but, mais pas tout à fait auprès du public visé. Ces résultats ne permettent pas de conclure sur le long terme. Il serait peut-être utile de prolonger l’essai d’un an et de mener une enquête auprès des usagers. Note du traducteur : l’anglais empilait parfois les précautions (« may possibly suggest », « it could perhaps be argued »). J’en ai gardé une par idée, au même degré de certitude : ni plus sûr, ni moins sûr que Fiona.';

/** Act 4: Fiona's email, rendered with its real force. */
export const COURRIEL_TEXT =
  'Objet : bilan de l’essai et suite. Bonjour à toutes et à tous, merci pour ce premier bilan, que j’ai lu avec intérêt. Les résultats de fréquentation sont très encourageants, et nous ne sommes pas mécontents de l’accueil réservé aux ateliers. Le budget, en revanche, pose un vrai problème : nous devrons annuler deux ateliers au printemps, faute de fonds. Je ne suis pas convaincue par le calendrier proposé pour la suite. Lancer l’enquête en juin, au moment où la bibliothèque réduit ses horaires d’été, me paraît peu judicieux. Je proposerais plutôt de l’avancer à mai. Enfin, la proposition d’ouvrir aussi le dimanche n’est pas l’idée la plus heureuse à ce stade : nous n’avons ni le personnel ni le budget pour l’instant. Il conviendrait toutefois de revoir le calendrier avant la fin du mois. Merci encore pour votre travail. Fiona. Note du traducteur : Fiona écrivait « a bit of a problem » et « not entirely convinced ». Dans son anglais très retenu, la suite du courriel montre qu’il s’agit d’un refus et d’un problème sérieux : j’ai gardé sa politesse, mais rendu la force que son lecteur anglais entendait.';

/** Act 5: a topic-sentence paragraph made into a signposted French one. */
export const PARAGRAPHE_TEXT =
  'Pourquoi ouvrir aussi le dimanche ? Trois raisons expliquent la proposition de l’équipe. La première tient au coût : le dimanche, la bibliothèque partage déjà ses locaux avec le centre communautaire, qui en assure la surveillance ; ouvrir une salle de plus coûterait peu. La deuxième, plus décisive, tient aux horaires. Les familles que l’essai du soir voulait toucher sont justement celles qui travaillent tard en semaine. Or ces horaires ne leur conviennent toujours pas : elles rentrent trop tard, même avec une fermeture à vingt-deux heures, pour faire le trajet avec des enfants fatigués. Le dimanche, au contraire, elles sont libres. Reste une dernière raison, moins visible : la bibliothèque est l’un des rares lieux gratuits et chauffés du quartier le dimanche, quand les commerces sont fermés. C’est pourquoi nous proposons d’ouvrir le dimanche après-midi, à titre d’essai, de treize à dix-sept heures. Note du traducteur : l’original anglais commençait par sa conclusion (« Sunday opening is the next logical step. ») et alignait les trois raisons sans une seule articulation. J’ai annoncé le chemin, numéroté les raisons et marqué la cause et la conséquence ; l’ordre des idées et la thèse n’ont pas changé.';

/** Act 6: a brief on rents and families, the implicit links spelled out. */
export const LOYERS_TEXT =
  'Le quartier qui se vide de ses enfants. En dix ans, les loyers du quartier ont augmenté bien plus vite que les salaires, si bien que de nombreuses familles sont parties vers la banlieue. L’école primaire a perdu trois classes. Le projet de nouvelle garderie a été approuvé, mais le financement n’a jamais suivi. Comme le conseil d’arrondissement avait changé entre-temps, le dossier a été rouvert l’an dernier, sans résultat pour l’instant. Les familles qui restent vivent souvent à l’étroit : un logement de deux chambres pour quatre ou cinq personnes. Faute de place à la maison, les enfants font leurs devoirs à la bibliothèque, ce qui explique en partie le succès de l’ouverture du soir. Les commerçants, eux, voient la différence : les ventes ont baissé dès que les familles ont commencé à partir. Note du traducteur : l’anglais écrivait souvent deux phrases côte à côte (« Rents rose. Families left. ») et laissait le lecteur deviner le lien ; il écrivait « and » là où le sens était « mais ». J’ai écrit ces liens en toutes lettres, sans ajouter une seule idée que Fiona n’avait pas mise.';

/** Act 7: a speech of thanks, lightened. */
export const MERCIS_TEXT =
  'Mot d’ouverture, soirée de bilan. Avant tout, merci d’être venus si nombreux. Chacun d’entre vous a reçu le dossier de l’essai ; je ne le résumerai donc pas. Je tiens à remercier tous les bénévoles, sans exception, qui ont tenu l’accueil le soir pendant six mois. Le résultat a surpris tout le monde, à commencer par nous : nous attendions des familles, nous avons aussi accueilli des étudiants. Nos projets restent les mêmes : prolonger l’essai et mieux toucher les parents. Actuellement, aucune date n’est fixée pour la prochaine étape ; si la décision est prise en mai, nous vous préviendrons aussitôt. Comme la salle était pleine lors de la dernière réunion publique, nous avons réservé ce soir une salle plus grande. Merci encore, et bonne soirée. Note du traducteur : l’anglais disait « first and foremost », « each and every one of you », « the end result », « our future plans », « at this point in time », « due to the fact that ». Le français a gardé chaque idée, mais un seul mot quand un seul suffisait.';

/** Act 8: a newsletter item, the cultural references made French. */
export const COURSE_TEXT =
  'Une course pour la bibliothèque. Le samedi suivant l’Action de grâce, la Fondation organise une course solidaire dans le parc voisin : un parcours d’environ cinq kilomètres, à faire en courant ou en marchant. L’an dernier, il faisait plus de trente degrés le jour de l’événement ; cette année, la course aura lieu en octobre, et à neuf heures du matin. Combien rapportera-t-elle ? Les organisateurs refusent de s’engager, mais donnent un ordre de grandeur : de quoi financer les deux ateliers annulés au printemps. Ce n’est que la partie émergée de l’iceberg, rappellent-ils : les besoins de la bibliothèque sont bien plus vastes. Sans nouveaux fonds d’ici l’hiver, l’équipe craint de revenir à la case départ, avec des horaires réduits. Note du traducteur : l’original anglais parlait de « three miles », de « over ninety degrees », de « a ballpark figure », de « the tip of the iceberg » et de « back to square one ». J’ai converti les mesures, remplacé l’image de baseball par une expression qui fait le même travail, et gardé les deux images que le français partage avec l’anglais. Thanksgiving, au Canada, se dit l’Action de grâce : pas besoin d’explication pour un lecteur québécois.';

/** Act 9: a French summary of Fiona's long English article. */
export const RESUME_TEXT =
  'Résumé pour l’infolettre (cent vingt mots, d’après un article en anglais de Fiona Kerr). Selon Fiona Kerr, directrice de la recherche de la Fondation, les bibliothèques de quartier sont devenues des refuges : contre la chaleur l’été, contre le froid et l’isolement l’hiver. L’auteure soutient que ce rôle, rarement financé, mérite d’être reconnu dans les budgets municipaux. Elle s’appuie sur l’essai d’ouverture du soir au Carré-Vermeil, où la fréquentation a augmenté d’environ un tiers. Elle formule deux propositions : intégrer les bibliothèques aux plans d’urgence en cas de canicule, et financer des horaires élargis là où les logements sont les plus petits. Ces positions sont les siennes et n’engagent pas la Fondation. Note de la rédaction : l’article original compte environ six cents mots ; les exemples étrangers et le souvenir personnel qui l’ouvrait n’ont pas été repris.';

/** Act 10: one English sentence, three French audiences. */
export const ARBRES_TEXT =
  'Une phrase, trois publics. La Fondation publie en anglais une note de recherche qui commence par : « Street trees reduce the urban heat island effect. » Elle doit la diffuser en français auprès de trois publics. Pour la revue des urbanistes : « Les arbres d’alignement atténuent l’effet d’îlot de chaleur urbain. » Les termes techniques sont ceux que ces lecteurs emploient eux-mêmes ; les expliquer leur paraîtrait condescendant. Pour l’infolettre envoyée aux habitants : « Les arbres plantés le long des rues rafraîchissent la ville. » Aucun mot de spécialiste, une image concrète, le vouvoiement dans l’appel qui suit : « Nous vous invitons à découvrir le rapport complet. » Pour le compte de la Fondation destiné aux adolescents : « Plus d’arbres dans ta rue, c’est moins de chaleur en été. » Une phrase courte, le tutoiement que ce compte emploie déjà, un lien direct avec leur vie : « Découvre le rapport complet en ligne. » Dans les trois cas, le fait est le même : les arbres des rues réduisent la chaleur en ville. Seuls changent le vocabulaire, la longueur et la distance avec le lecteur. Ce qu’aucune version n’a le droit de faire : promettre plus que la note de recherche, par exemple que les arbres « suppriment » la chaleur.';

/** Act 11: Odile's revision of a draft. */
export const RELECTURE_TEXT =
  'Relecture d’Odile, version française de la note sur les bibliothèques. Première lecture, avec l’anglais. Paragraphe 1 : « la fréquentation a doublé » ; l’anglais dit « rose by about a third ». C’est un contresens sur le chiffre, à corriger avant tout le reste. Paragraphe 2 : « les usagers sensibles » pour « vulnerable users » ; ce n’est pas faux, mais ce n’est pas le sens précis : un faux sens. Je propose « les usagers vulnérables ». Paragraphe 3 : la phrase sur les logements exigus a disparu. C’est une omission : l’idée explique pourquoi les jeunes viennent étudier. Paragraphe 4 : tu ajoutes « ce qui prouve l’échec des politiques du logement ». Fiona ne l’écrit nulle part. C’est un ajout, et il engage la Fondation. Paragraphe 5 : « On peut soutenir que » pour « arguably » : très bien, la force est la même. Deuxième lecture, sans l’anglais. La phrase « Les horaires étant étendus du soir permettant les parents » ne veut rien dire en français : un non-sens, né d’un participe anglais suivi de trop près. Le reste se lit comme un texte écrit en français. Conclusion : deux relectures, toujours. La première protège le sens, la seconde protège ton lecteur.';

/** Act 12: the model, a French version of Fiona's short op-ed on libraries. */
export const MODELE_TEXT =
  'Gardons les lumières allumées. Les bibliothèques de quartier font bien plus que prêter des livres. Depuis six mois, celle du Carré-Vermeil reste ouverte jusqu’à vingt-deux heures en semaine, et la fréquentation du soir a augmenté d’environ un tiers. On peut soutenir que ce succès tient moins aux collections qu’à ce que le lieu offre : du calme, de la lumière et de la place, dans un quartier où les logements sont exigus. Les chiffres appellent toutefois la prudence. L’essai a coïncidé avec la période des examens, et il se pourrait que l’effet soit moins marqué au printemps. Le budget, lui, pose un vrai problème : deux ateliers ont déjà été annulés. C’est pourquoi nous demandons à la Ville deux choses. D’abord, prolonger l’essai d’un an, le temps de mesurer son effet sur toutes les saisons. Ensuite, reconnaître dans ses budgets le rôle de refuge que jouent ces lieux l’été, quand il fait plus de trente degrés dans les appartements. Revenir aux anciens horaires serait revenir à la case départ. Fiona Kerr, directrice de la recherche, Fondation Arcelle. Traduit de l’anglais.';

/** Act 12, the task: Fiona's op-ed, ORIGINAL ENGLISH written for the lesson
 *  (about 250 words). Every figure is invented. */
export const TASK_SOURCE_EN =
  'Open the schoolyards. Every weekend, the city locks up its largest network of public space. Schoolyards sit empty from Friday evening to Monday morning, behind fences, in the very neighbourhoods that have the fewest parks. Opening them would arguably be the cheapest green-space policy available to the city. A pilot in three schools last summer was, by most accounts, not a failure. Families came. Teenagers came. Complaints were few. The concerns raised by school boards are, to be fair, not without merit. Insurance is a bit of a headache, and someone has to lock the gates at night. But these are problems of organisation, not of principle, and other cities have solved them. With the summers getting hotter, the case is harder to ignore. On a ninety-degree day, an asphalt yard with no shade is of little use to anyone; a yard with trees and a water fountain is a lifeline. Each and every school renovated from now on should be designed with weekend use in mind. The cost? Nobody has a precise answer yet, but a ballpark figure of fifty thousand dollars per school for shade and fountains seems reasonable. We would suggest that the city start with the twenty schools located furthest from a park, and report back after one year. Doing nothing would leave us back at square one: children with nowhere to play, a few hundred metres from a locked yard. Fiona Kerr, Director of Research, Fondation Arcelle.';
