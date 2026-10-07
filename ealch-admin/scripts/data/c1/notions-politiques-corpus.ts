// c1.15.l1 « Justice, liberté, identité, pouvoir » — the authored corpus, the
// imports, the texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 (THE VOCAB SHAPE: families and
// collocations in use, never isolated nouns) on top of B1-BUILD-PLAYBOOK.md,
// with the C1 rules of C1-BUILD-LOG.md (« What is different at C1 », wave 5).
// Structural model: the reviewed C1 vocabulary lesson c1.12 « Le vocabulaire
// des idées » (`./vocabulaire-idees-*`): its shape, counts and helpers.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (c1.16 and later lessons may import REFRAME from this file
// and quote it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME,
// LEVEL, E, ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 15 of the C1 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE POLITICAL AND SOCIAL HEADWORDS (wave 5 brief, research plan
//   « Ownership to settle »): the words of public debate, each taught
//   against its neighbour, with its collocations and its WEIGHT (what it
//   makes heard: praise, reproach, a position). Loaded terms are taught as
//   USES (who says it, about whom), never as positions.
//
//     act 1   le poids des mots: a neighbourhood council splits a grant and
//             the minutes must say « équitablement », not « également »;
//             recap of b2.27, b1.33 and c1.12 by trail position
//     act 2   égalité / équité (égalitaire, à parts égales, à égalité,
//             l’égalité des chances against l’égalité des résultats)
//     act 3   la justice: the value and the institution; rendre justice à,
//             rendre la justice, se faire justice, réclamer justice, saisir
//             la justice, juste (fair / correct)
//     act 4   la liberté / les libertés publiques; conscience, réunion,
//             circulation; porter atteinte à, restreindre, être libre de,
//             prendre la liberté de
//     act 5   les droits et leurs textes: droit fondamental, consacrer, les
//             droits de l’homme / de la personne / humains; the 1789
//             Déclaration, the Charte canadienne (1982), the Charte
//             québécoise (1975), article numbers checked (§A.7)
//     act 6   pouvoir / puissance / autorité (les pouvoirs publics, faire
//             autorité, autoritaire, les autorités)
//     act 7   les contre-pouvoirs: séparation des pouvoirs, législatif /
//             exécutif / judiciaire, garde-fou, le quatrième pouvoir
//     act 8   légal / légitime (and juridique, the legal calque per OQLF;
//             légitime défense)
//     act 9   l’État de droit et l’impunité (nul n’est au-dessus des lois,
//             rester impuni, deux poids deux mesures, procès équitable,
//             l’indépendance de la justice, la reddition de comptes)
//     act 10  l’identité in its abstract sense (identité culturelle,
//             plurielle, sentiment d’appartenance, s’identifier à,
//             identitaire, « identité nationale » as a use)
//     act 11  vivre ensemble: multiculturalisme / interculturalisme,
//             accommodement raisonnable, laïcité, communautarisme (uses)
//     act 12  the task: a contribution to a neighbourhood consultation that
//             answers a resident's open letter
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     la leçon 27 du B2  le langage juridique: « la justice » as the courts
//                        (row droit .1171), le droit / la loi (row .1177),
//                        être en droit de (row .1051). Act 3 goes PAST it to
//                        justice as a value; act 8 to légal / légitime.
//     la leçon 33 du B1  the topic-vocabulary shape: « un mot n’arrive jamais
//                        seul » (row ecologie .1009) and « égal, inégal, les
//                        inégalités » (row ecologie .1156), applied in act 2.
//     la leçon 12 du C1  the epistemic pairs and its line « Deux mots voisins,
//                        deux idées » (re-exported, quoted in act 1 and the
//                        recycling round). c1.12 is drafted, not published:
//                        its rows are NOT reused by id, its reframe is quoted
//                        (open question 3 in the lesson header).
//
//   LEFT TO OTHER LESSONS (never taught here):
//     c1.16  morale / éthique / déontologie, vérité / véracité, mémoire.
//            « La morale » appears here only inside two reused b2 sentences.
//     c1.12  croyance / connaissance, expliquer / justifier, cause / raison.
//     c1.13  the HISTORY of laïcité (1905 against Loi 21), of the
//            Révolution, of the Conquest: act 11 names the word and its uses,
//            and cites « la leçon 13 du C1 » for the references.
//     c1.18  high-level false friends as a system: act 8 carries ONE trap the
//            field cannot do without (légal / legal), flagged for Paul.
//     c1.08  persuasion and loaded wording in argument; c1.24 press framing.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-06 inside BEGIN TRANSACTION READ ONLY
//      … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `ethique` (« L’éthique », domain concepts, b2-c1, exam flag).
//     Sub-theme « les notions politiques et sociales » set at the wave 5
//     setup and read back. 326 rows, all published: b2 .001-.320, c1
//     .001-.006. seedPlusPacks() holds only b2 .001-.006. THEME `valeurs`
//     (b1-b2, no c1 row authored there): 317 rows, all published (b1 147,
//     b2 170); seedPlusPacks() holds only b2 .001-.006.
//
//  2. ID BLOCK: `fr.c1.ethique.1000` to `.1199` and nothing else (ledger).
//     Re-probed 2026-10-06: 0 rows in 1000-1199 at any level of `ethique`.
//     Authored: `.1000`-`.1149`, 150 rows in twelve act blocks (§G).
//
//  3. THE B2 BANKS. Every one of the 643 `ethique` and `valeurs` rows was
//     read (id, fr, en, drills, example, notes) before choosing. 56 rows are
//     reused BY ID: 50 are absent from the seed cut, so their fr / en /
//     drills are copied VERBATIM into `PG_ROWS` (generated from the Postgres
//     JSON, not retyped): 40 ethique / valeurs rows, fr.c1.ethique.006,
//     fr.b2.philosophie.202 (reused by c1.12 too) and the 8 published rows
//     found by the twin check (§A.6). The other 6 are in seedPlusPacks():
//     fr.b2.ethique.002 « l’équité », three b2.27 rows (droit .1051 .1171
//     .1177) and two b1.33 rows (ecologie .1009 .1156).
//
//  4. ATTRIBUTIONS AND CLAIMS IN THE BANKS, READ BEFORE REUSE. No reused row
//     names a person. NOT reused: ethique .090 (« l’éthique kantienne »,
//     example names Kant), .031 and c1 .001 (« le philosophe »: fine, but
//     out of scope), .093 « la dignité humaine » (its example « La Charte
//     garantit le respect de la dignité humaine » does not say WHICH charter;
//     only the Québec one names dignity, art. 4), the morale / éthique /
//     déontologie rows (c1.16's headwords). Reused rows whose EXAMPLE makes
//     a real-world claim, checked: ethique .126 « La liberté d’expression est
//     protégée par la Charte canadienne » (true: art. 2 b); valeurs .085 « Le
//     multiculturalisme est une valeur reconnue au Canada » (true as policy:
//     Loi sur le multiculturalisme canadien, 1988; Charte art. 27); valeurs
//     .089 « La primauté du droit est un principe fondamental au Canada »
//     (true: the Charter's preamble names « la primauté du droit »).
//
//  5. STRAIGHT APOSTROPHES IN THE REUSED ROWS (23, computed): ethique b2
//     .002 .007 .022 .101 .102 .107 .126 .130 .149 .177 .248 .257 .265
//     .275; valeurs b1 .041, b2 .087 .090 .114; c1 ethique .006;
//     philosophie .202; immigration-et-citoyennete .072; and the two seed
//     rows droit .1171 and ecologie .1009. The Postgres-only ones need the
//     decision 13 pass at import (straight to typographic). None is printed
//     inside the scenario (the app's mixed-apostrophe check passes).
//
//  6. NO AUTHORED ROW TWINS A PUBLISHED ROW. Every authored `fr`, folded
//     (accents, case, punctuation, apostrophes, spaces), was compared with
//     all 64,066 Postgres rows (scratch `twins.mts`, 2026-10-06). The first
//     run found 8 twins; each published row was read (example included,
//     no attribution, no false claim) and is now REUSED by id, while the
//     authored row at the same id became a collocation: .1052 « défendre
//     les droits de la personne » (questions-sociales b1 .075), .1076 « le
//     principe de la séparation des pouvoirs » (gouvernement b2 .026),
//     .1077 « relever du pouvoir judiciaire » (gouvernement b2 .029), .1106
//     « exiger une reddition de comptes » (rp-societe b2 .016), .1116
//     « revendiquer une identité plurielle » (rp-identite b2 .022), .1117
//     « renforcer le sentiment d’appartenance » (immigration-et-citoyennete
//     b1 .072), .1130 « demander un accommodement raisonnable »
//     (quebec-et-francophonie b2 .016), .1133 « accuser quelqu’un de
//     communautarisme » (questions-sociales b2 .035). Second run: 0 twins,
//     every PG_ROWS entry identical to Postgres and published, 0 rows in
//     the block. Bare headwords the banks hold are imported, never
//     re-authored; this corpus authors collocations, families and
//     sentences.
//
//  7. FACT CHECK LIST (for the pre-review), each with the source read on
//     2026-10-06:
//       a. DDHC 1789, article premier: « Les hommes naissent et demeurent
//          libres et égaux en droits. Les distinctions sociales ne peuvent
//          être fondées que sur l’utilité commune. » Row .1057 quotes the
//          first sentence verbatim. Légifrance, « Déclaration des Droits de
//          l’Homme et du Citoyen de 1789 »
//          (legifrance.gouv.fr/contenu/menu/droit-national-en-vigueur/
//          constitution/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789).
//       b. DDHC article 4: « La liberté consiste à pouvoir faire tout ce qui
//          ne nuit pas à autrui : ainsi, l’exercice des droits naturels de
//          chaque homme n’a de bornes que celles qui assurent aux autres
//          membres de la société la jouissance de ces mêmes droits. Ces
//          bornes ne peuvent être déterminées que par la loi. » Row .1058
//          quotes the first clause (before the colon), labelled « extrait ».
//          Same source.
//       c. DDHC article 11 (« La libre communication des pensées et des
//          opinions est un des droits les plus précieux de l’homme ») and
//          article 16 (« Toute société dans laquelle la garantie des droits
//          n’est pas assurée, ni la séparation des pouvoirs déterminée, n’a
//          point de Constitution. »): quoted in TEXTE_A5 and TEXTE_A7. Same
//          source.
//       d. Charte canadienne des droits et libertés (Partie I de la Loi
//          constitutionnelle de 1982): préambule « la primauté du droit »;
//          art. 1 (limits « raisonnables et dont la justification puisse se
//          démontrer dans le cadre d’une société libre et démocratique »);
//          art. 2 a) to d) libertés fondamentales (conscience et religion;
//          pensée, croyance, opinion et expression, y compris la liberté de
//          la presse; réunion pacifique; association); art. 15 (1) égalité,
//          15 (2) programmes de promotion sociale; art. 27 patrimoine
//          multiculturel; art. 33 (1) dérogation. Justice Canada, Lois
//          codifiées, laws-lois.justice.gc.ca/fra/const/page-12.html (raw
//          HTML read). Rows .1054 .1059 .1061, TEXTE_A5, sheet-droits.
//       e. Charte des droits et libertés de la personne (Québec, RLRQ c.
//          C-12), adopted by the Assemblée nationale on 27 June 1975 (re-read
//          on LégisQuébec at pre-review, see after m), in
//          force 28 June 1976: art. 3 « Toute personne est titulaire des
//          libertés fondamentales telles la liberté de conscience, la liberté
//          de religion, la liberté d’opinion, la liberté d’expression, la
//          liberté de réunion pacifique et la liberté d’association. »; art.
//          4 « Toute personne a droit à la sauvegarde de sa dignité, de son
//          honneur et de sa réputation. »; art. 10 equality without
//          discrimination. LégisQuébec (legisquebec.gouv.qc.ca/fr/document/
//          lc/C-12) returned HTTP 403 to every tool, twice: the article texts
//          were read in a search of Québec government mirrors (OCPM, BAnQ)
//          and the dates on the Assemblée nationale's annual statutes
//          (1975, chap. 6) and the CDPDJ. TO RE-VERIFY ON LégisQuébec by
//          hand (open question 1). Rows .1055 .1060, TEXTE_A5.
//       f. Loi sur le multiculturalisme canadien (« Loi sur le maintien et la
//          valorisation du multiculturalisme au Canada », L.R.C. (1985), ch.
//          24 (4e suppl.)), sanctioned 21 July 1988. Justice Canada,
//          laws-lois.justice.gc.ca/fra/lois/c-18.7/. Rows .1129 .1135.
//       g. Interculturalism as the Québec model: defended by successive
//          Québec governments; a 2025 statute (« Loi sur l’intégration à la
//          nation québécoise », bill 84, adopted May 2025) gives it a legal
//          basis (immigrantquebec.com; CSN; press). The lesson says only
//          « Le Québec défend plutôt un modèle d’interculturalisme » and
//          never names the statute (recent and contested).
//       h. Accommodement raisonnable: an obligation arising from the right to
//          equality, adapting a common rule to avoid discrimination, limited
//          by « contrainte excessive » (a Supreme Court notion). CDPDJ
//          publications (cdpdj.qc.ca, « Accommodements raisonnables »).
//          Row .1130.
//       i. Laïcité: Constitution of 4 October 1958, art. 1 « La France est
//          une République indivisible, laïque, démocratique et sociale. »
//          (Conseil constitutionnel, full text in force); loi du 9 décembre
//          1905 « concernant la séparation des Églises et de l’État », art.
//          1 « La République assure la liberté de conscience. » (Légifrance
//          LEGITEXT000006070169). Row .1131, TEXTE_A11. The history of 1905
//          and of Québec's Loi 21 is c1.13's: cited, never told here.
//       j. Légal / juridique / judiciaire: OQLF Vitrine linguistique,
//          « Différence entre juridique, judiciaire et légal »: juridique
//          « relatif au droit », judiciaire « qui concerne la justice et son
//          administration », légal « conforme à la loi ou défini par la
//          loi »; « On abuse parfois de cet adjectif sous l’influence de
//          l’anglais legal ». Rows .1077 .1092 .1099, act 8 trap.
//       k. Reddition de comptes: OQLF Grand dictionnaire terminologique,
//          fiche « reddition de comptes » (public administration). Row .1106.
//       l. Contre-pouvoir: Larousse « Pouvoir s’organisant face à une
//          autorité établie »; plural contre-pouvoirs. Row .1078. No item
//          turns on the hyphen (fold() strips it).
//       m. Voting age 18 in Canada (federal elections: Loi électorale du
//          Canada; the Charter art. 3 gives every citizen the vote, with no
//          age: the age is the statute's, so « l'âge légal » is exact). Row
//          .1100. Pre-review: Charter art. 3 re-read on Justice Canada.
//
//       PRE-REVIEW 2026-10-06 (all re-read at source): DDHC art. 1, 4, 11,
//       16 and the count of 17 articles on the Conseil constitutionnel's
//       full text (Légifrance's page is a JS shell to curl); Charte
//       canadienne préambule, art. 1, 2 a-d, 3, 15, 27, 32, 33 on
//       laws-lois.justice.gc.ca (raw HTML); Charte québécoise art. 3, 4, 10,
//       49, 54, 55 on LégisQuébec itself (curl with a browser user agent
//       returns 200); adoption 27 June 1975, in force 28 June 1976; applies
//       between private parties (Canadian Charter binds governments only,
//       art. 32); Constitution 1958 art. 1 (Conseil constitutionnel); loi
//       1905 art. 1-2 (Légifrance); OQLF « juridique, judiciaire, légal »
//       (the « on abuse parfois de cet adjectif sous l'influence de
//       l'anglais legal » sentence). Multiculturalism: official policy since
//       8 October 1971, Act assented 21 July 1988 (TEXTE_A11 and quiz r11
//       corrected: they said « depuis une loi de 1988 »). « Faire justice à
//       quelqu'un » is listed by Larousse beside « rendre justice à », so it
//       is no longer a wrong option. « Liberté d'assemblée »: no dictionary
//       verdict found; the items now ask for « le mot des chartes »
//       (réunion pacifique), the calque is named, never called a fault.
//       n. Droits de l’homme (France: the 1789 text, the Commission
//          nationale consultative des droits de l’homme) / droits de la
//          personne (Canada: Commission canadienne des droits de la
//          personne; Québec: the Charte « de la personne », the CDPDJ) /
//          droits humains (spreading in French usage). Row .1052, rule
//          .1056. Presented as uses, never as faults.
//       p. « La liberté de réunion » (the Charter's « réunion pacifique »)
//          against the calque « liberté d’assemblée » (act 4 trap): the two
//          charters both say « réunion »; « assemblée » for « assembly » is
//          a calque. Dictionary verdict to confirm at pre-review (OQLF /
//          Larousse); « sécularité » for « laïcité » (act 11 trap) likewise.
//       q. The Charte québécoise also applies between private parties
//          (A5_CARTES card 3), the Canadian Charter binds governments only;
//          the Declaration has 17 articles (card 1). Standard, to confirm.
//       o. « La liberté des uns s’arrête où commence celle des autres »
//          (row .1049): a proverbial saying with NO reliable author; it is
//          never attributed. Its idea is DDHC art. 4 (b), which the lesson
//          quotes separately.
//     QUOTATIONS: only the official texts of a, b, c, d (short phrase), e
//     (art. 3 and 4) and i, verbatim from the sources above. Every other
//     text is « texte original écrit pour la leçon »; every person, venue,
//     outlet, association, co-op and town district is invented (§I). No
//     living politician, no real party, no real campaign.
//
//  8. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR: a real
//     /n/ or /m/ after a vowel is written double: personne pehr-SONN,
//     humaine ü-MENN, commune ko-MÜNN, homme OMM, domaine do-MENN, peine
//     PENN, légitime lay-zhee-TEEMM (and the like). Every doubled consonant
//     is really pronounced. No U+203F tie anywhere.
//
//  9. APOSTROPHES: every authored French string uses the typographic ’, so
//     the scenario never mixes ’ and '. Reused Postgres rows keep their
//     straight ' until the decision 13 pass.
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
  id: 'c1.15',
  seq: 15,
  title: 'Justice, Freedom, Identity, Power',
  sub: 'Justice, liberté, identité, pouvoir',
  canDo: 'Can choose and use the political and social headwords of public debate (égalité and équité, the senses of justice, la liberté and les libertés publiques, fundamental rights and their texts, pouvoir, puissance and autorité, contre-pouvoir, légal and légitime, l’État de droit and l’impunité, identité in its abstract sense, multiculturalisme and interculturalisme) with their collocations, name the weight a loaded word carries without taking it on, and answer someone who confuses them',
  prereqUnitIds: ['b1.33', 'b2.27'],
} as const;

export const LESSON_ID = 'c1.15.l1';
export const THEME = 'ethique';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief (sub-theme « les notions politiques et sociales »). */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/** The b2 ethique bank and the valeurs bank: published, reused by id. */
export const ETH = (n: number) => `fr.b2.ethique.${String(n).padStart(3, '0')}`;
export const VAL1 = (n: number) => `fr.b1.valeurs.${String(n).padStart(3, '0')}`;
export const VAL2 = (n: number) => `fr.b2.valeurs.${String(n).padStart(3, '0')}`;

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
  if (band === 'b1' || band === 'b2' || band === 'c1') throw new Error(`c1.15: ${unitId} is not in the seed`);
  return unitRef(unitId);
}

export const JURIDIQUE_UNIT = 'b2.27';
export const ENVIRONNEMENT_UNIT = 'b1.33';

export const JURIDIQUE_REF = refFr(JURIDIQUE_UNIT);         // la leçon 27 du B2
export const ENVIRONNEMENT_REF = refFr(ENVIRONNEMENT_UNIT); // la leçon 33 du B1

/** Drafted in wave 4, not in the seed yet: typed from the plan.
 *  TODO(import): replace by refFr() once c1.12 and c1.13 are published. */
export const IDEES_REF_PLANNED = 'la leçon 12 du C1';
export const REFERENCES_REF_PLANNED = 'la leçon 13 du C1';
/** The next lesson on the trail (c1.16, written in the same wave). */
export const NEXT_REF_PLANNED = 'la leçon 16 du C1';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B227_REFRAME, REFRAME_EN as B227_REFRAME_EN } from '../b2/langage-juridique-corpus.ts';
export { REFRAME as B133_REFRAME, REFRAME_EN as B133_REFRAME_EN } from '../b1/environnement-corpus.ts';
export { REFRAME as C112_REFRAME, REFRAME_EN as C112_REFRAME_EN } from './vocabulaire-idees-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA BALANCE. Every word of public debate goes on a pair of scales: on one
 *  pan what it MEANS, on the other what it WEIGHS (the praise, the reproach,
 *  the position it carries). Égalité and équité weigh the same and mean two
 *  things; « communautarisme » means little and weighs a lot. Each act puts
 *  one pair on the scales; the task asks the learner to weigh a resident's
 *  words for the whole neighbourhood.
 *
 *  It is NOT « political words are neutral if you define them »: act 10 and
 *  act 11 show words whose weight survives every definition (identitaire,
 *  communautarisme). And it is NOT « avoid loaded words »: the learner may
 *  use any of them, once he has said in which sense and who else uses it.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un mot du débat public a un sens et un poids : nomme les deux.';
export const REFRAME_EN = 'A word of public debate has a meaning and a weight: name both.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Deux mots voisins, deux idées : nomme ce qui les sépare.',
    why: 'True here, and already c1.12’s line (« la leçon 12 du C1 »). It names the meaning and says nothing of the WEIGHT, which is what this field adds: « communautarisme » has no close neighbour to separate it from, and still cannot be used innocently.',
  },
  {
    text: 'Les mots politiques sont neutres, c’est l’usage qui les charge.',
    why: 'False where the lesson has to hold: « autoritaire », « impunité », « repli identitaire » carry a judgment in the dictionary itself (act 6, act 9, act 10). It would also let the learner think a definition removes the charge.',
  },
  {
    text: 'Choisis toujours le mot le plus fort.',
    why: 'The opposite of the task’s rubric: a contribution that says « illégal » for « illégitime » or « communautarisme » for « vie associative » loses the neighbourhood, and the point.',
  },
  {
    text: 'L’égalité n’est pas l’équité.',
    why: 'True, and only one pair: it is act 2’s rule card (row .1016), not the lesson’s line. It says nothing of liberté, pouvoir or identité.',
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
    'fr.b2.droit.1171',              // Il a porté l'affaire devant la justice.  (b2.27)
    'fr.b2.droit.1177',              // Le droit est un domaine ; une loi est un texte.  (b2.27, flashcard only)
    'fr.b1.ecologie.1009',           // Un mot n'arrive jamais seul : il vient avec sa famille et ses voisins.  (b1.33, flashcard only)
  ],
  act2: [
    ETH(2),                          // l'équité  (seed, flashcard only)
    VAL1(41),                        // l'égalité  (PG)
    ETH(200),                        // équitable  (PG, voiceflash only)
    ETH(142),                        // inéquitable  (PG)
    ETH(130),                        // l'égalité des chances  (PG)
    ETH(131),                        // la justice distributive  (PG)
    'fr.b1.ecologie.1156',           // égal, inégal, les inégalités  (b1.33)
    'fr.b2.philosophie.202',         // Pour qu'une société soit juste, il ne suffit pas que les lois soient égales, encore faut-il qu'elles soient appliquées équitablement.  (PG)
  ],
  act3: [
    VAL1(39),                        // la justice  (PG)
    ETH(189),                        // la justice sociale  (PG, voiceflash only)
    ETH(190),                        // la justice réparatrice  (PG, voiceflash only)
    ETH(67),                         // injuste  (PG)
    ETH(248),                        // Il serait injuste de pénaliser toute l'équipe pour la faute d'une seule personne.  (PG)
    'fr.c1.ethique.006',             // Quand bien même l'enquête aurait démontré sa culpabilité, il aura fallu des années avant que justice ne soit véritablement rendue.  (PG, dictation only)
  ],
  act4: [
    VAL1(40),                        // la liberté  (PG)
    ETH(126),                        // la liberté d'expression  (PG)
    ETH(184),                        // la censure  (PG, voiceflash only)
    ETH(185),                        // le respect de la vie privée  (PG, voiceflash only)
    ETH(186),                        // la surveillance de masse  (PG, voiceflash only)
  ],
  act5: [
    'fr.b1.questions-sociales.075',  // les droits de la personne  (PG; example: Au Canada, la charte protège les droits de la personne.)
    ETH(152),                        // les droits humains  (PG, voiceflash only)
    ETH(187),                        // la discrimination  (PG, voiceflash only)
    VAL1(54),                        // la citoyenneté  (PG)
    ETH(177),                        // l'autodétermination  (PG, voiceflash only)
  ],
  act6: [
    ETH(101),                        // l'abus de pouvoir  (PG)
    ETH(243),                        // Un policier ne devrait jamais abuser de son autorité, même face à un suspect hostile.  (PG)
  ],
  act7: [
    'fr.b2.gouvernement.026',        // la séparation des pouvoirs  (PG)
    'fr.b2.gouvernement.029',        // le pouvoir judiciaire  (PG)
    ETH(154),                        // la transparence  (PG, voiceflash only)
    ETH(102),                        // le lanceur d'alerte  (PG)
    ETH(257),                        // La journaliste a protégé l'identité de son informateur, même sous la menace d'une poursuite.  (PG)
    VAL2(114),                       // Il importe que les institutions demeurent impartiales, faute de quoi la confiance des citoyens s'effrite.  (PG)
    ETH(265),                        // Les dirigeants de l'entreprise ont dû rendre des comptes devant les actionnaires.  (PG, dictation only; act 7 dictation)
  ],
  act8: [
    'fr.b2.droit.1051',              // être en droit de refuser  (b2.27)
    ETH(7),                          // Bien que la loi le permette, ce n'est pas moral.  (PG, flashcard only)
    ETH(22),                         // Peu importe que la loi l'autorise, cette expérience pose un vrai problème moral.  (PG, dictation)
    ETH(307),                        // Les avocats débattent de la légitimité de cette clause contractuelle.  (PG, dictation only)
  ],
  act9: [
    'fr.b2.rp-societe.016',          // la reddition de comptes  (PG)
    VAL2(90),                        // l'État de droit  (PG, voiceflash only)
    VAL2(89),                        // la primauté du droit  (PG, voiceflash only)
    ETH(107),                        // l'impunité  (PG)
    ETH(149),                        // l'impartialité  (PG, voiceflash only)
    ETH(219),                        // Beaucoup jugent scandaleux que certains dirigeants échappent à toute sanction.  (PG)
    ETH(275),                        // Le juge a rappelé que nul n'est censé ignorer la loi.  (PG, dictation only)
  ],
  act10: [
    'fr.b2.rp-identite.022',         // une identité plurielle  (PG)
    'fr.b1.immigration-et-citoyennete.072', // le sentiment d'appartenance  (PG)
  ],
  act11: [
    'fr.b2.quebec-et-francophonie.016', // un accommodement raisonnable  (PG; example on the public debate, no claim)
    'fr.b2.questions-sociales.035',  // le communautarisme  (PG)
    VAL2(85),                        // le multiculturalisme  (PG, voiceflash only)
    VAL2(86),                        // la diversité  (PG, voiceflash only)
    VAL2(87),                        // l'inclusion  (PG, voiceflash only)
    VAL2(81),                        // le vivre-ensemble  (PG)
    VAL2(82),                        // la cohésion sociale  (PG)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied VERBATIM from the 2026-10-06 read (straight apostrophes kept: the
 *  decision 13 edit happens at import), so `src()` can print them. */
export const PG_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: VAL1(41), fr: "l'égalité", en: "equality", drills: ['flashcard', 'voiceflash'] },
  { id: ETH(200), fr: "équitable", en: "fair, equitable", drills: ['voiceflash', 'review'] },
  { id: ETH(142), fr: "inéquitable", en: "unfair", drills: ['flashcard', 'review'] },
  { id: ETH(130), fr: "l'égalité des chances", en: "equal opportunity", drills: ['flashcard', 'review'] },
  { id: ETH(131), fr: "la justice distributive", en: "distributive justice", drills: ['flashcard', 'review'] },
  { id: 'fr.b2.philosophie.202', fr: "Pour qu'une société soit juste, il ne suffit pas que les lois soient égales, encore faut-il qu'elles soient appliquées équitablement.", en: "For a society to be just, it is not enough for laws to be equal, they must also be applied fairly.", drills: ['sentence', 'review'] },
  { id: VAL1(39), fr: "la justice", en: "justice", drills: ['flashcard', 'voiceflash'] },
  { id: ETH(189), fr: "la justice sociale", en: "social justice", drills: ['voiceflash', 'review'] },
  { id: ETH(190), fr: "la justice réparatrice", en: "restorative justice", drills: ['voiceflash', 'review'] },
  { id: ETH(67), fr: "injuste", en: "unjust", drills: ['flashcard', 'voiceflash'] },
  { id: ETH(248), fr: "Il serait injuste de pénaliser toute l'équipe pour la faute d'une seule personne.", en: "It would be unfair to penalize the whole team for one person's mistake.", drills: ['sentence', 'review'] },
  { id: 'fr.c1.ethique.006', fr: "Quand bien même l'enquête aurait démontré sa culpabilité, il aura fallu des années avant que justice ne soit véritablement rendue.", en: "Even if the investigation had proven his guilt, it would take years before justice was truly served.", drills: ['dictation'] },
  { id: VAL1(40), fr: "la liberté", en: "freedom", drills: ['flashcard', 'voiceflash'] },
  { id: ETH(126), fr: "la liberté d'expression", en: "freedom of speech", drills: ['flashcard', 'review'] },
  { id: ETH(184), fr: "la censure", en: "censorship", drills: ['voiceflash', 'review'] },
  { id: ETH(185), fr: "le respect de la vie privée", en: "respect for privacy", drills: ['voiceflash', 'review'] },
  { id: ETH(186), fr: "la surveillance de masse", en: "mass surveillance", drills: ['voiceflash', 'review'] },
  { id: ETH(152), fr: "les droits humains", en: "human rights", drills: ['voiceflash', 'review'] },
  { id: ETH(187), fr: "la discrimination", en: "discrimination", drills: ['voiceflash', 'review'] },
  { id: VAL1(54), fr: "la citoyenneté", en: "the citizenship", drills: ['flashcard', 'review'] },
  { id: ETH(177), fr: "l'autodétermination", en: "self-determination", drills: ['voiceflash', 'review'] },
  { id: ETH(101), fr: "l'abus de pouvoir", en: "abuse of power", drills: ['flashcard', 'review'] },
  { id: ETH(243), fr: "Un policier ne devrait jamais abuser de son autorité, même face à un suspect hostile.", en: "A police officer should never abuse his authority, even facing a hostile suspect.", drills: ['sentence', 'review'] },
  { id: ETH(154), fr: "la transparence", en: "transparency", drills: ['voiceflash', 'review'] },
  { id: ETH(102), fr: "le lanceur d'alerte", en: "whistleblower", drills: ['flashcard', 'review'] },
  { id: ETH(257), fr: "La journaliste a protégé l'identité de son informateur, même sous la menace d'une poursuite.", en: "The journalist protected her source's identity, even under threat of prosecution.", drills: ['sentence', 'review'] },
  { id: VAL2(114), fr: "Il importe que les institutions demeurent impartiales, faute de quoi la confiance des citoyens s'effrite.", en: "It matters that institutions remain impartial, otherwise citizens' trust erodes.", drills: ['sentence', 'review'] },
  { id: ETH(7), fr: "Bien que la loi le permette, ce n'est pas moral.", en: "Although the law allows it, it is not moral.", drills: ['flashcard'] },
  { id: ETH(22), fr: "Peu importe que la loi l'autorise, cette expérience pose un vrai problème moral.", en: "Regardless of whether the law allows it, this experiment poses a real moral problem.", drills: ['sentence', 'dictation'] },
  { id: ETH(307), fr: "Les avocats débattent de la légitimité de cette clause contractuelle.", en: "The lawyers are debating the legitimacy of this contract clause.", drills: ['dictation'] },
  { id: VAL2(90), fr: "l'État de droit", en: "the rule of law, the constitutional state", drills: ['voiceflash', 'review'] },
  { id: VAL2(89), fr: "la primauté du droit", en: "the rule of law", drills: ['voiceflash', 'review'] },
  { id: ETH(107), fr: "l'impunité", en: "impunity", drills: ['flashcard', 'review'] },
  { id: ETH(149), fr: "l'impartialité", en: "impartiality", drills: ['voiceflash', 'review'] },
  { id: ETH(219), fr: "Beaucoup jugent scandaleux que certains dirigeants échappent à toute sanction.", en: "Many find it scandalous that some leaders escape any sanction.", drills: ['sentence', 'review'] },
  { id: ETH(275), fr: "Le juge a rappelé que nul n'est censé ignorer la loi.", en: "The judge reminded everyone that ignorance of the law is no excuse.", drills: ['dictation'] },
  { id: ETH(265), fr: "Les dirigeants de l'entreprise ont dû rendre des comptes devant les actionnaires.", en: "The company's leaders had to answer to shareholders.", drills: ['dictation'] },
  { id: VAL2(85), fr: "le multiculturalisme", en: "the multiculturalism", drills: ['voiceflash', 'review'] },
  { id: VAL2(86), fr: "la diversité", en: "the diversity", drills: ['voiceflash', 'review'] },
  { id: VAL2(87), fr: "l'inclusion", en: "the inclusion", drills: ['voiceflash', 'review'] },
  { id: VAL2(81), fr: "le vivre-ensemble", en: "social cohesion, living together", drills: ['flashcard', 'review'] },
  { id: VAL2(82), fr: "la cohésion sociale", en: "the social cohesion", drills: ['flashcard', 'review'] },
  { id: 'fr.b1.questions-sociales.075', fr: "les droits de la personne", en: "human rights", drills: ['flashcard', 'review'] },
  { id: 'fr.b2.gouvernement.026', fr: "la séparation des pouvoirs", en: "the separation of powers", drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b2.gouvernement.029', fr: "le pouvoir judiciaire", en: "the judicial power", drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b2.rp-societe.016', fr: "la reddition de comptes", en: "accountability", drills: ['flashcard', 'review'] },
  { id: 'fr.b2.rp-identite.022', fr: "une identité plurielle", en: "a plural, multiple identity", drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b1.immigration-et-citoyennete.072', fr: "le sentiment d'appartenance", en: "the sense of belonging", drills: ['flashcard', 'review'] },
  { id: 'fr.b2.quebec-et-francophonie.016', fr: "un accommodement raisonnable", en: "a reasonable accommodation", drills: ['flashcard', 'review'] },
  { id: 'fr.b2.questions-sociales.035', fr: "le communautarisme", en: "communitarianism", drills: ['flashcard', 'voiceflash'] },
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
 *  `col` a collocation (kind phrase: the word with what you do with it);
 *  `fam` a word family in one card; `sent` a sentence; `rule` a grammar card
 *  whose prompt is a question and whose `fr` is the act’s distinction. Every
 *  row carries fr, en, ipa and respell; corpus respellings carry no brackets.
 *  No wrong form is ever a row: the misused words live only in the scene’s
 *  choice, trapDrill.promptSound, commonErrors.wrong and quiz errorSpots.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const SO = { register: 'soutenu' as Register };
const GP = ['notions-politiques'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

/** A collocation: the word and what you do with it. */
const col = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string,
  extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['collocation', ...tags], drills: FCVR, version: 1, register: C, grammarPoints: GP, notes, ...extra,
});

/** A word family: every member in one card. */
const fam = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string,
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['famille', ...tags], drills: FCVR, version: 1, register: C, grammarPoints: GP, notes,
});

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE POIDS DES MOTS (.1000-.1010) ────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Le comité répartit la somme équitablement, selon le nombre de familles.', 'The committee shares out the sum fairly, according to the number of families.',
    '/lə kɔ.mi.te ʁe.paʁ.ti la sɔm e.ki.ta.blə.mɑ̃ sə.lɔ̃ lə nɔ̃bʁ də fa.mij/', 'luh ko-mee-TAY | ray-par-TEE la SOMM | ay-kee-ta-bluh-MAHⁿ | suh-LOHⁿ luh nohⁿbr duh fa-MEEY', ['scene', 'equite'], FCVDR),
  sent(1001, 'Partager également, c’est donner la même part à chacun.', 'To share equally is to give everyone the same share.',
    '/paʁ.ta.ʒe e.ɡal.mɑ̃ sɛ dɔ.ne la mɛm paʁ a ʃa.kœ̃/', 'par-ta-ZHAY ay-gal-MAHⁿ | seh do-NAY la mem PAR | a sha-KUHⁿ', ['scene', 'egalite']),
  sent(1002, 'Partager équitablement, c’est tenir compte des besoins de chacun.', 'To share fairly is to take each person’s needs into account.',
    '/paʁ.ta.ʒe e.ki.ta.blə.mɑ̃ sɛ tə.niʁ kɔ̃t de bə.zwɛ̃ də ʃa.kœ̃/', 'par-ta-ZHAY ay-kee-ta-bluh-MAHⁿ | seh tuh-neer KOHⁿT | day buh-ZWEHⁿ duh sha-KUHⁿ', ['scene', 'equite']),
  rule(1003, REFRAME, REFRAME_EN,
    '/œ̃ mo dy de.ba py.blik a œ̃ sɑ̃s e œ̃ pwa nɔm le dø/', 'uhⁿ MOH | dü day-ba pü-BLEEK | a uhⁿ SAHⁿSS ay uhⁿ PWA | NOMM lay DEU',
    'Un mot politique te paraît évident. Que fais-tu avant de l’employer ?',
    'Tu dis dans quel sens tu le prends, et ce qu’il fait entendre : un éloge, un reproche, une position. Égalité et équité n’ont pas le même sens ; communautarisme n’a pas le même poids que vie associative.',
    ['reframe', 'poids']),
  sent(1004, 'Ce mot n’est pas neutre : il prend déjà parti.', 'This word is not neutral: it already takes sides.',
    '/sə mo nɛ pa nøtʁ il pʁɑ̃ de.ʒa paʁ.ti/', 'suh MOH | neh pa NEUTR | eel prahⁿ day-ZHA par-TEE', ['poids'], FCVDR),
  sent(1005, 'Dans quel sens emploies-tu ce mot ?', 'In what sense are you using this word?',
    '/dɑ̃ kɛl sɑ̃s ɑ̃.plwa.ty sə mo/', 'dahⁿ kel SAHⁿSS | ahⁿ-plwa-TÜ suh MOH', ['poids']),
  sent(1006, 'Le même mot ne veut pas dire la même chose pour tout le monde.', 'The same word does not mean the same thing to everyone.',
    '/lə mɛm mo nə vø pa diʁ la mɛm ʃoz puʁ tu lə mɔ̃d/', 'luh mem MOH | nuh veu pa DEER | la mem SHOHZ | poor too luh MOHⁿD', ['poids']),
  sent(1007, 'Je décris une position ; je ne la défends pas.', 'I am describing a position; I am not defending it.',
    '/ʒə de.kʁi yn po.zi.sjɔ̃ ʒə nə la de.fɑ̃ pa/', 'zhuh day-KREE ün po-zee-SYOHⁿ | zhuh nuh la day-fahⁿ PA', ['poids'], FCVDR),
  sent(1008, 'Le débat porte moins sur les faits que sur les mots.', 'The debate is less about the facts than about the words.',
    '/lə de.ba pɔʁt mwɛ̃ syʁ le fɛ kə syʁ le mo/', 'luh day-BA | port mwehⁿ sür lay FEH | kuh sür lay MOH', ['poids']),
  sent(1009, 'Chacun met un sens différent derrière ce mot.', 'Each person puts a different meaning behind this word.',
    '/ʃa.kœ̃ mɛ œ̃ sɑ̃s di.fe.ʁɑ̃ dɛ.ʁjɛʁ sə mo/', 'sha-KUHⁿ meh uhⁿ SAHⁿSS dee-fay-RAHⁿ | deh-ryehr suh MOH', ['poids']),
  sent(1010, 'Avant de voter, mettons-nous d’accord sur les mots.', 'Before we vote, let us agree on the words.',
    '/a.vɑ̃ də vɔ.te mɛ.tɔ̃.nu da.kɔʁ syʁ le mo/', 'a-vahⁿ duh vo-TAY | meh-tohⁿ-NOO da-KOR | sür lay MOH', ['poids']),
];

/* ── ACT 2 · ÉGALITÉ ET ÉQUITÉ (.1011-.1023) ────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  col(1011, 'l’égalité des droits', 'equal rights', '/le.ɡa.li.te de dʁwa/', 'lay-ga-lee-TAY day DRWA', ['egalite'],
    'Les mêmes droits pour tous, devant la loi. On revendique, on garantit l’égalité des droits.'),
  col(1012, 'une répartition équitable', 'a fair distribution', '/yn ʁe.paʁ.ti.sjɔ̃ e.ki.tabl/', 'ün ray-par-tee-SYOHⁿ ay-kee-TABL', ['equite'],
    'Équitable : juste, compte tenu de la situation de chacun. Une part équitable n’est pas forcément une part égale.'),
  col(1013, 'partager à parts égales', 'to share in equal parts', '/paʁ.ta.ʒe a paʁ.ze.ɡal/', 'par-ta-ZHAY | a par-zay-GAL', ['egalite'],
    'À parts égales : chacun reçoit exactement autant. On dit aussi partager en parts égales.'),
  fam(1014, 'égal, l’égalité, égalitaire, également', 'equal, equality, egalitarian, equally',
    '/e.ɡal le.ɡa.li.te e.ɡa.li.tɛʁ e.ɡal.mɑ̃/', 'ay-GAL, lay-ga-lee-TAY, ay-ga-lee-TEHR, ay-gal-MAHⁿ', ['egalite'],
    'Égalitaire : qui vise l’égalité stricte. Une société égalitaire, une répartition égalitaire.'),
  fam(1015, 'équitable, l’équité, inéquitable, équitablement', 'fair, fairness, unfair, fairly',
    '/e.ki.tabl le.ki.te i.ne.ki.tabl e.ki.ta.blə.mɑ̃/', 'ay-kee-TABL, lay-kee-TAY, ee-nay-kee-TABL, ay-kee-ta-bluh-MAHⁿ', ['equite'],
    'L’équité corrige ce que l’égalité stricte laisserait d’injuste.'),
  rule(1016, 'L’égalité donne la même part à chacun ; l’équité, la part juste.', 'Equality gives everyone the same share; equity, the fair share.',
    '/le.ɡa.li.te dɔn la mɛm paʁ a ʃa.kœ̃ le.ki.te la paʁ ʒyst/', 'lay-ga-lee-TAY | donn la mem PAR a sha-KUHⁿ | lay-kee-TAY | la par ZHÜST',
    'Égalité, équité : laquelle regarde la situation de chacun ?',
    'L’équité. L’égalité applique la même règle à tous ; l’équité ajuste pour que le résultat soit juste. Les deux mots sont positifs : ils ne disent pas la même chose.',
    ['egalite', 'equite']),
  sent(1017, 'Tous les citoyens sont égaux devant la loi.', 'All citizens are equal before the law.',
    '/tu le si.twa.jɛ̃ sɔ̃.te.ɡo də.vɑ̃ la lwa/', 'too lay see-twa-YEHⁿ | sohⁿ-tay-GOH | duh-vahⁿ la LWA', ['egalite'], FCVDR),
  sent(1018, 'Une même aide pour tous serait égale, mais pas forcément équitable.', 'The same help for everyone would be equal, but not necessarily fair.',
    '/yn mɛm ɛd puʁ tus sə.ʁɛ.te.ɡal mɛ pa fɔʁ.se.mɑ̃ e.ki.tabl/', 'ün mem ED poor TOOSS | suh-reh-tay-GAL | meh pa for-say-MAHⁿ ay-kee-TABL', ['egalite', 'equite']),
  sent(1019, 'Les élèves en difficulté reçoivent plus d’heures de soutien : c’est une mesure d’équité.', 'Pupils who are struggling get more support hours: it is a fairness measure.',
    '/le.ze.lɛv ɑ̃ di.fi.kyl.te ʁə.swav ply dœʁ də su.tjɛ̃ sɛ.tyn mə.zyʁ de.ki.te/', 'lay-zay-LEV ahⁿ dee-fee-kül-TAY | ruh-SWAV plü DUHR duh soo-TYEHⁿ | seh-tün muh-ZÜR day-kee-TAY', ['equite']),
  sent(1020, 'Le vote s’est terminé à égalité, six voix contre six.', 'The vote ended in a tie, six votes to six.',
    '/lə vɔt sɛ tɛʁ.mi.ne a e.ɡa.li.te si vwa kɔ̃tʁ sis/', 'luh VOT | seh tehr-mee-NAY a ay-ga-lee-TAY | see VWA kohⁿtr SEESS', ['egalite']),
  sent(1021, 'Ce partage me paraît inéquitable pour les petites associations.', 'This split seems unfair to me for the small associations.',
    '/sə paʁ.taʒ mə pa.ʁɛ i.ne.ki.tabl puʁ le pə.tit.za.sɔ.sja.sjɔ̃/', 'suh par-TAZH | muh pa-REH ee-nay-kee-TABL | poor lay puh-teet-za-so-sya-SYOHⁿ', ['equite']),
  sent(1022, 'L’égalité des chances ne garantit pas l’égalité des résultats.', 'Equal opportunity does not guarantee equal outcomes.',
    '/le.ɡa.li.te de ʃɑ̃s nə ɡa.ʁɑ̃.ti pa le.ɡa.li.te de ʁe.zyl.ta/', 'lay-ga-lee-TAY day SHAHⁿSS | nuh ga-rahⁿ-TEE pa | lay-ga-lee-TAY day ray-zül-TA', ['egalite'], FCVDR),
  sent(1023, 'Traiter différemment des situations différentes peut être plus juste.', 'Treating different situations differently can be fairer.',
    '/tʁɛ.te di.fe.ʁa.mɑ̃ de si.tɥa.sjɔ̃ di.fe.ʁɑ̃t pø.tɛtʁ ply ʒyst/', 'treh-TAY dee-fay-ra-MAHⁿ | day see-twa-SYOHⁿ dee-fay-RAHⁿT | peu-TETR plü ZHÜST', ['equite']),
];

/* ── ACT 3 · LA JUSTICE (.1024-.1036) ───────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  col(1024, 'un sentiment d’injustice', 'a sense of injustice', '/œ̃ sɑ̃.ti.mɑ̃ dɛ̃.ʒys.tis/', 'uhⁿ sahⁿ-tee-MAHⁿ | dehⁿ-zhüs-TEESS', ['justice'],
    'L’impression de ne pas avoir reçu ce qui était juste. On éprouve, on nourrit un sentiment d’injustice.'),
  col(1025, 'rendre justice à quelqu’un', 'to do someone justice', '/ʁɑ̃dʁ ʒys.tis a kɛl.kœ̃/', 'rahⁿdr zhüs-TEESS | a kel-KUHⁿ', ['justice'],
    'Reconnaître ses mérites, ou réparer le tort qu’on lui a fait. Sans article devant justice.'),
  col(1026, 'rendre la justice', 'to administer justice', '/ʁɑ̃dʁ la ʒys.tis/', 'rahⁿdr la zhüs-TEESS', ['justice'],
    'Juger, comme le fait un tribunal. Ce sont les juges qui rendent la justice.', SO),
  col(1027, 'se faire justice soi-même', 'to take the law into one’s own hands', '/sə fɛʁ ʒys.tis swa.mɛm/', 'suh fehr zhüs-TEESS | swa-MEM', ['justice'],
    'Se venger, ou punir quelqu’un, sans passer par les tribunaux. L’expression est critique.'),
  fam(1028, 'juste, la justice, l’injustice, injustement', 'fair, justice, injustice, unfairly',
    '/ʒyst la ʒys.tis lɛ̃.ʒys.tis ɛ̃.ʒys.tə.mɑ̃/', 'ZHÜST, la zhüs-TEESS, lehⁿ-zhüs-TEESS, ehⁿ-zhüs-tuh-MAHⁿ', ['justice'],
    'Juste a deux sens : conforme à la justice (une décision juste) et exact (une réponse juste).'),
  rule(1029, 'La justice est une valeur, et aussi l’institution qui juge.', 'Justice is a value, and also the institution that judges.',
    '/la ʒys.tis ɛ.tyn va.lœʁ e o.si lɛ̃s.ti.ty.sjɔ̃ ki ʒyʒ/', 'la zhüs-TEESS | eh-tün va-LUHR | ay oh-SEE lehⁿs-tee-tü-SYOHⁿ kee ZHÜZH',
    'Dans « réclamer justice » et « saisir la justice », est-ce la même justice ?',
    'Non. Réclamer justice, sans article : la valeur, ce qui est dû. Saisir la justice, avec l’article : l’institution, les tribunaux. Le même mot, deux choses ; le contexte tranche.',
    ['justice']),
  sent(1030, 'Les familles des victimes réclament justice.', 'The victims’ families are demanding justice.',
    '/le fa.mij de vik.tim ʁe.klam ʒys.tis/', 'lay fa-MEEY day veek-TEEMM | ray-KLAMM zhüs-TEESS', ['justice'], FCVDR),
  sent(1031, 'Le film rend enfin justice à ces ouvrières oubliées.', 'The film finally does justice to these forgotten women workers.',
    '/lə film ʁɑ̃.tɑ̃.fɛ̃ ʒys.tis a se.zu.vʁi.jɛʁ u.bli.je/', 'luh FEELM | rahⁿ-tahⁿ-FEHⁿ zhüs-TEESS | a say-zoo-vree-YEHR oo-blee-YAY', ['justice']),
  sent(1032, 'Personne n’a le droit de se faire justice soi-même.', 'No one has the right to take the law into their own hands.',
    '/pɛʁ.sɔn na lə dʁwa də sə fɛʁ ʒys.tis swa.mɛm/', 'pehr-SONN | na luh DRWA | duh suh fehr zhüs-TEESS swa-MEM', ['justice']),
  sent(1033, 'Cette décision a laissé un profond sentiment d’injustice.', 'This decision left a deep sense of injustice.',
    '/sɛt de.si.zjɔ̃ a lɛ.se œ̃ pʁɔ.fɔ̃ sɑ̃.ti.mɑ̃ dɛ̃.ʒys.tis/', 'set day-see-ZYOHⁿ | a leh-SAY uhⁿ pro-FOHⁿ | sahⁿ-tee-MAHⁿ dehⁿ-zhüs-TEESS', ['justice'], FCVDR),
  sent(1034, 'Ta réponse est juste, mais ta remarque était injuste.', 'Your answer is correct, but your remark was unfair.',
    '/ta ʁe.pɔ̃s ɛ ʒyst mɛ ta ʁə.maʁk e.tɛ.tɛ̃.ʒyst/', 'ta ray-POHⁿSS eh ZHÜST | meh ta ruh-MARK | ay-teh-tehⁿ-ZHÜST', ['justice']),
  sent(1035, 'Une justice trop lente finit par décourager les citoyens.', 'Justice that is too slow ends up discouraging citizens.',
    '/yn ʒys.tis tʁo lɑ̃t fi.ni paʁ de.ku.ʁa.ʒe le si.twa.jɛ̃/', 'ün zhüs-TEESS troh LAHⁿT | fee-nee par day-koo-ra-ZHAY | lay see-twa-YEHⁿ', ['justice']),
  sent(1036, 'Elle a saisi la justice pour faire reconnaître ses droits.', 'She took the matter to court to have her rights recognised.',
    '/ɛl a se.zi la ʒys.tis puʁ fɛʁ ʁə.kɔ.nɛtʁ se dʁwa/', 'el a say-ZEE la zhüs-TEESS | poor fehr ruh-ko-NETR say DRWA', ['justice']),
];

/* ── ACT 4 · LA LIBERTÉ ET LES LIBERTÉS (.1037-.1049) ──────────────────── */

export const ACT4_ROWS: Row[] = [
  col(1037, 'les libertés publiques', 'civil liberties', '/le li.bɛʁ.te py.blik/', 'lay lee-behr-TAY pü-BLEEK', ['liberte'],
    'Les libertés que l’État reconnaît et protège : s’exprimer, se réunir, s’associer, croire. Toujours au pluriel.'),
  col(1038, 'la liberté de conscience', 'freedom of conscience', '/la li.bɛʁ.te də kɔ̃.sjɑ̃s/', 'la lee-behr-TAY | duh kohⁿ-SYAHⁿSS', ['liberte'],
    'La liberté de croire, de ne pas croire et de changer de conviction.'),
  col(1039, 'porter atteinte à une liberté', 'to infringe a freedom', '/pɔʁ.te a.tɛ̃t a yn li.bɛʁ.te/', 'por-TAY a-TEHⁿT | a ün lee-behr-TAY', ['liberte'],
    'Porter atteinte à : nuire, réduire. Une atteinte aux libertés est une accusation grave.', SO),
  col(1040, 'restreindre une liberté', 'to restrict a freedom', '/ʁɛs.tʁɛ̃dʁ yn li.bɛʁ.te/', 'res-TREHⁿDR | ün lee-behr-TAY', ['liberte'],
    'Restreindre, une restriction : limiter. Une liberté peut être restreinte sans être supprimée.'),
  fam(1041, 'libre, la liberté, librement, libérer', 'free, freedom, freely, to free',
    '/libʁ la li.bɛʁ.te li.bʁə.mɑ̃ li.be.ʁe/', 'LEEBR, la lee-behr-TAY, lee-bruh-MAHⁿ, lee-bay-RAY', ['liberte'],
    'S’exprimer librement ; libérer un otage. Être libre de + infinitif : avoir le choix.'),
  rule(1042, 'La liberté est une valeur ; les libertés sont des droits précis.', 'Liberty is a value; liberties are specific rights.',
    '/la li.bɛʁ.te ɛ.tyn va.lœʁ le li.bɛʁ.te sɔ̃ de dʁwa pʁe.si/', 'la lee-behr-TAY | eh-tün va-LUHR | lay lee-behr-TAY | sohⁿ day DRWA pray-SEE',
    'Pourquoi dit-on « les libertés publiques » au pluriel ?',
    'Parce qu’on compte des droits précis : s’exprimer, se réunir, s’associer, croire. Au singulier, la liberté est l’idée ; au pluriel, ce sont des droits qu’on peut nommer et défendre.',
    ['liberte']),
  sent(1043, 'La liberté d’expression n’est pas sans limites.', 'Freedom of expression is not without limits.',
    '/la li.bɛʁ.te dɛks.pʁɛ.sjɔ̃ nɛ pa sɑ̃ li.mit/', 'la lee-behr-TAY | dek-spreh-SYOHⁿ | neh pa sahⁿ lee-MEET', ['liberte'], FCVDR),
  sent(1044, 'La liberté de réunion permet de manifester pacifiquement.', 'Freedom of assembly makes it possible to demonstrate peacefully.',
    '/la li.bɛʁ.te də ʁe.y.njɔ̃ pɛʁ.mɛ də ma.ni.fɛs.te pa.si.fik.mɑ̃/', 'la lee-behr-TAY | duh ray-ü-NYOHⁿ | pehr-MEH | duh ma-nee-fes-TAY pa-see-feek-MAHⁿ', ['liberte']),
  sent(1045, 'Cette mesure restreint la liberté de circulation des habitants.', 'This measure restricts residents’ freedom of movement.',
    '/sɛt mə.zyʁ ʁɛs.tʁɛ̃ la li.bɛʁ.te də siʁ.ky.la.sjɔ̃ de.za.bi.tɑ̃/', 'set muh-ZÜR | res-TREHⁿ la lee-behr-TAY | duh seer-kü-la-SYOHⁿ | day-za-bee-TAHⁿ', ['liberte']),
  sent(1046, 'Tu es libre de ne pas être d’accord.', 'You are free to disagree.',
    '/ty ɛ libʁ də nə pa.zɛtʁ da.kɔʁ/', 'tü eh LEEBR | duh nuh pa-zetr da-KOR', ['liberte']),
  sent(1047, 'J’ai pris la liberté de vous écrire directement.', 'I have taken the liberty of writing to you directly.',
    '/ʒe pʁi la li.bɛʁ.te də vu.ze.kʁiʁ di.ʁɛk.tə.mɑ̃/', 'zhay PREE la lee-behr-TAY | duh voo-zay-KREER | dee-rek-tuh-MAHⁿ', ['liberte']),
  sent(1048, 'Les associations dénoncent une atteinte aux libertés publiques.', 'The associations are denouncing an infringement of civil liberties.',
    '/le.za.sɔ.sja.sjɔ̃ de.nɔ̃s y.na.tɛ̃t o li.bɛʁ.te py.blik/', 'lay-za-so-sya-SYOHⁿ | day-NOHⁿSS | ü-na-TEHⁿT | oh lee-behr-TAY pü-BLEEK', ['liberte'], FCVDR),
  sent(1049, 'La liberté des uns s’arrête où commence celle des autres.', 'One person’s freedom ends where another’s begins.',
    '/la li.bɛʁ.te de.zœ̃ sa.ʁɛt u kɔ.mɑ̃s sɛl de.zotʁ/', 'la lee-behr-TAY | day-ZUHⁿ | sa-RET | oo ko-MAHⁿSS | sel day-ZOHTR', ['liberte']),
];

/* ── ACT 5 · LES DROITS ET LEURS TEXTES (.1050-.1062) ──────────────────── */

export const ACT5_ROWS: Row[] = [
  col(1050, 'un droit fondamental', 'a fundamental right', '/œ̃ dʁwa fɔ̃.da.mɑ̃.tal/', 'uhⁿ DRWA fohⁿ-da-mahⁿ-TAL', ['droits'],
    'Un droit que les textes les plus élevés protègent. On le reconnaît, on le garantit, on y porte atteinte.'),
  col(1051, 'consacrer un droit', 'to enshrine a right', '/kɔ̃.sa.kʁe œ̃ dʁwa/', 'kohⁿ-sa-KRAY uhⁿ DRWA', ['droits'],
    'Soutenu : un texte consacre un droit quand il l’inscrit et le reconnaît solennellement.', SO),
  col(1052, 'défendre les droits de la personne', 'to defend human rights', '/de.fɑ̃dʁ le dʁwa də la pɛʁ.sɔn/', 'day-FAHⁿDR | lay DRWA | duh la pehr-SONN', ['droits'],
    'Au Canada et au Québec : les droits de la personne. En France : les droits de l’homme, et de plus en plus les droits humains.'),
  col(1053, 'la Déclaration des droits de l’homme et du citoyen', 'the Declaration of the Rights of Man and of the Citizen',
    '/la de.kla.ʁa.sjɔ̃ de dʁwa də lɔm e dy si.twa.jɛ̃/', 'la day-kla-ra-SYOHⁿ | day DRWA duh LOMM | ay dü see-twa-YEHⁿ', ['droits', 'textes'],
    'France, 1789. Son article premier : les hommes naissent et demeurent libres et égaux en droits.'),
  col(1054, 'la Charte canadienne des droits et libertés', 'the Canadian Charter of Rights and Freedoms',
    '/la ʃaʁt ka.na.djɛn de dʁwa e li.bɛʁ.te/', 'la SHART ka-na-DYENN | day DRWA ay lee-behr-TAY', ['droits', 'textes'],
    'Canada, 1982, dans la Loi constitutionnelle de 1982. Son article 2 énumère les libertés fondamentales.'),
  col(1055, 'la Charte des droits et libertés de la personne', 'the Quebec Charter of Human Rights and Freedoms',
    '/la ʃaʁt de dʁwa e li.bɛʁ.te də la pɛʁ.sɔn/', 'la SHART | day DRWA ay lee-behr-TAY | duh la pehr-SONN', ['droits', 'textes'],
    'Québec, adoptée en 1975. Son article 3 énumère les libertés fondamentales.'),
  rule(1056, 'Droits de l’homme, droits de la personne, droits humains : trois usages, une même idée.', 'Rights of man, rights of the person, human rights: three usages, one idea.',
    '/dʁwa də lɔm dʁwa də la pɛʁ.sɔn dʁwa y.mɛ̃ tʁwa.zy.zaʒ yn mɛm i.de/', 'DRWA duh LOMM | DRWA duh la pehr-SONN | DRWA ü-MEHⁿ | trwa-zü-ZAZH | ün mem ee-DAY',
    'Comment dit-on human rights à Montréal, et à Paris ?',
    'À Montréal : les droits de la personne, comme dans la Charte québécoise. À Paris : les droits de l’homme, le mot de 1789, et de plus en plus les droits humains. Ce sont des usages, pas des fautes.',
    ['droits']),
  sent(1057, 'Les hommes naissent et demeurent libres et égaux en droits.', 'Men are born and remain free and equal in rights.',
    '/le.zɔm nɛs e də.mœʁ libʁ e.ze.ɡo ɑ̃ dʁwa/', 'lay-ZOMM | NESS | ay duh-MUHR LEEBR | ay-zay-GOH | ahⁿ DRWA', ['droits', 'textes', 'citation'], FCVDR),
  sent(1058, 'La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui.', 'Liberty consists in being able to do anything that does not harm others.',
    '/la li.bɛʁ.te kɔ̃.sist a pu.vwaʁ fɛʁ tu sə ki nə nɥi pa.za o.tʁɥi/', 'la lee-behr-TAY | kohⁿ-SEEST | a poo-vwar FEHR | too suh kee nuh NWEE | pa-za oh-TRWEE', ['droits', 'textes', 'citation'], FCVR,
    { notes: 'Article 4 de la Déclaration de 1789, extrait (le début de l’article).' }),
  sent(1059, 'La Charte canadienne protège notamment la liberté de pensée et d’expression.', 'The Canadian Charter protects, among others, freedom of thought and expression.',
    '/la ʃaʁt ka.na.djɛn pʁɔ.tɛʒ nɔ.ta.mɑ̃ la li.bɛʁ.te də pɑ̃.se e dɛks.pʁɛ.sjɔ̃/', 'la SHART ka-na-DYENN | pro-TEZH no-ta-MAHⁿ | la lee-behr-TAY | duh pahⁿ-SAY ay dek-spreh-SYOHⁿ', ['droits', 'textes']),
  sent(1060, 'Au Québec, la Charte protège aussi la dignité, l’honneur et la réputation.', 'In Quebec, the Charter also protects dignity, honour and reputation.',
    '/o ke.bɛk la ʃaʁt pʁɔ.tɛʒ o.si la di.ɲi.te lɔ.nœʁ e la ʁe.py.ta.sjɔ̃/', 'oh kay-BEK | la SHART pro-TEZH oh-SEE | la dee-nyee-TAY | lo-NUHR | ay la ray-pü-ta-SYOHⁿ', ['droits', 'textes']),
  sent(1061, 'Ces droits ne peuvent être restreints que dans des limites raisonnables.', 'These rights can be restricted only within reasonable limits.',
    '/se dʁwa nə pœv ɛtʁ ʁɛs.tʁɛ̃ kə dɑ̃ de li.mit ʁɛ.zɔ.nabl/', 'say DRWA | nuh puhv etr res-TREHⁿ | kuh dahⁿ day lee-MEET reh-zo-NABL', ['droits', 'textes'], FCVDR),
  sent(1062, 'La loi interdit toute discrimination fondée sur la religion ou l’origine.', 'The law prohibits any discrimination based on religion or origin.',
    '/la lwa ɛ̃.tɛʁ.di tut dis.kʁi.mi.na.sjɔ̃ fɔ̃.de syʁ la ʁə.li.ʒjɔ̃ u lɔ.ʁi.ʒin/', 'la LWA | ehⁿ-tehr-DEE | toot dees-kree-mee-na-SYOHⁿ | fohⁿ-DAY sür la ruh-lee-ZHYOHⁿ | oo lo-ree-ZHEEN', ['droits']),
];

/* ── ACT 6 · POUVOIR, PUISSANCE, AUTORITÉ (.1063-.1075) ─────────────────── */

export const ACT6_ROWS: Row[] = [
  col(1063, 'exercer le pouvoir', 'to exercise power', '/ɛɡ.zɛʁ.se lə pu.vwaʁ/', 'eg-zehr-SAY luh poo-VWAR', ['pouvoir'],
    'Le pouvoir : la capacité de décider pour d’autres. On le prend, on l’exerce, on le perd ; être au pouvoir, c’est gouverner.'),
  col(1064, 'les pouvoirs publics', 'the public authorities', '/le pu.vwaʁ py.blik/', 'lay poo-VWAR pü-BLEEK', ['pouvoir'],
    'L’ensemble des autorités qui gouvernent et administrent : l’État, les villes, les provinces. Toujours au pluriel.'),
  col(1065, 'une grande puissance', 'a great power', '/yn ɡʁɑ̃d pɥi.sɑ̃s/', 'ün grahⁿd pwee-SAHⁿSS', ['pouvoir'],
    'La puissance : la force, les moyens. Un pays riche et armé est une puissance ; on parle aussi de puissance économique.'),
  col(1066, 'faire autorité', 'to be authoritative', '/fɛʁ o.tɔ.ʁi.te/', 'fehr oh-to-ree-TAY', ['pouvoir'],
    'Un ouvrage, une experte font autorité quand tout le monde les reconnaît comme une référence.'),
  fam(1067, 'l’autorité, autoritaire, l’autoritarisme, les autorités', 'authority, authoritarian, authoritarianism, the authorities',
    '/lo.tɔ.ʁi.te o.tɔ.ʁi.tɛʁ lo.tɔ.ʁi.ta.ʁism le.zo.tɔ.ʁi.te/', 'lo-to-ree-TAY, oh-to-ree-TEHR, lo-to-ree-ta-REESM, lay-zoh-to-ree-TAY', ['pouvoir'],
    'Autoritaire est un reproche : qui impose sans écouter. Avoir de l’autorité est un éloge.'),
  rule(1068, 'Le pouvoir s’exerce, la puissance s’impose, l’autorité se reconnaît.', 'Power is exercised, might imposes itself, authority is recognised.',
    '/lə pu.vwaʁ sɛɡ.zɛʁs la pɥi.sɑ̃s sɛ̃.poz lo.tɔ.ʁi.te sə ʁə.kɔ.nɛ/', 'luh poo-VWAR seg-ZEHRSS | la pwee-SAHⁿSS sehⁿ-POHZ | lo-to-ree-TAY suh ruh-ko-NEH',
    'Pouvoir, puissance, autorité : laquelle dépend de ceux qui obéissent ?',
    'L’autorité : on la reconnaît, on la respecte, sans y être forcé. Le pouvoir est une capacité de décider ; la puissance, une force. Une présidente peut avoir le pouvoir sans avoir d’autorité.',
    ['pouvoir']),
  sent(1069, 'Elle a le pouvoir de signer, mais pas l’autorité pour convaincre.', 'She has the power to sign, but not the authority to convince.',
    '/ɛl a lə pu.vwaʁ də si.ɲe mɛ pa lo.tɔ.ʁi.te puʁ kɔ̃.vɛ̃kʁ/', 'el a luh poo-VWAR duh see-NYAY | meh pa lo-to-ree-TAY | poor kohⁿ-VEHⁿKR', ['pouvoir'], FCVDR),
  sent(1070, 'Ce parti est au pouvoir depuis huit ans.', 'This party has been in power for eight years.',
    '/sə paʁ.ti ɛ.to pu.vwaʁ də.pɥi ɥi.tɑ̃/', 'suh par-TEE | eh-toh poo-VWAR | duh-pwee wee-TAHⁿ', ['pouvoir']),
  sent(1071, 'Les autorités ont fermé la route par précaution.', 'The authorities closed the road as a precaution.',
    '/le.zo.tɔ.ʁi.te ɔ̃ fɛʁ.me la ʁut paʁ pʁe.ko.sjɔ̃/', 'lay-zoh-to-ree-TAY | ohⁿ fehr-MAY la ROOT | par pray-koh-SYOHⁿ', ['pouvoir']),
  sent(1072, 'Son livre sur la question fait autorité.', 'Her book on the subject is the authoritative work.',
    '/sɔ̃ livʁ syʁ la kɛs.tjɔ̃ fɛ.to.tɔ.ʁi.te/', 'sohⁿ LEEVR | sür la kes-TYOHⁿ | feh-toh-to-ree-TAY', ['pouvoir']),
  sent(1073, 'Une enseignante qui a de l’autorité n’a pas besoin de crier.', 'A teacher with authority does not need to shout.',
    '/y.nɑ̃.sɛ.ɲɑ̃t ki a də lo.tɔ.ʁi.te na pa bə.zwɛ̃ də kʁi.je/', 'ü-nahⁿ-seh-NYAHⁿT | kee a duh lo-to-ree-TAY | na pa buh-ZWEHⁿ duh kree-YAY', ['pouvoir'], FCVDR),
  sent(1074, 'On lui reproche un style de direction très autoritaire.', 'People criticise his very authoritarian management style.',
    '/ɔ̃ lɥi ʁə.pʁɔʃ œ̃ stil də di.ʁɛk.sjɔ̃ tʁɛ.zo.tɔ.ʁi.tɛʁ/', 'ohⁿ lwee ruh-PROSH | uhⁿ STEEL duh dee-rek-SYOHⁿ | treh-zoh-to-ree-TEHR', ['pouvoir']),
  sent(1075, 'La ville réclame plus de pouvoirs en matière de logement.', 'The city is calling for more powers over housing.',
    '/la vil ʁe.klam ply də pu.vwaʁ ɑ̃ ma.tjɛʁ də lɔʒ.mɑ̃/', 'la VEEL ray-KLAMM | plü duh poo-VWAR | ahⁿ ma-TYEHR duh lozh-MAHⁿ', ['pouvoir']),
];

/* ── ACT 7 · LES CONTRE-POUVOIRS (.1076-.1088) ──────────────────────────── */

export const ACT7_ROWS: Row[] = [
  col(1076, 'le principe de la séparation des pouvoirs', 'the principle of the separation of powers', '/lə pʁɛ̃.sip də la se.pa.ʁa.sjɔ̃ de pu.vwaʁ/', 'luh prehⁿ-SEEP | duh la say-pa-ra-SYOHⁿ | day poo-VWAR', ['contre-pouvoir'],
    'Le législatif fait les lois, l’exécutif les applique, le judiciaire juge : trois pouvoirs, trois mains différentes.'),
  col(1077, 'relever du pouvoir judiciaire', 'to be a matter for the judiciary', '/ʁə.lə.ve dy pu.vwaʁ ʒy.di.sjɛʁ/', 'ruh-luh-VAY | dü poo-VWAR zhü-dee-SYEHR', ['contre-pouvoir'],
    'Une affaire relève du pouvoir judiciaire quand ce sont les tribunaux qui tranchent. Judiciaire se rapporte à la justice ; juridique, au droit (OQLF).'),
  col(1078, 'jouer le rôle de contre-pouvoir', 'to act as a counterweight to power', '/ʒwe lə ʁol də kɔ̃.tʁə.pu.vwaʁ/', 'ZHWAY luh ROHL | duh kohⁿ-truh-poo-VWAR', ['contre-pouvoir'],
    'Un contre-pouvoir s’organise face à une autorité établie : la presse, les syndicats, l’opposition, les tribunaux.'),
  col(1079, 'servir de garde-fou', 'to act as a safeguard', '/sɛʁ.viʁ də ɡaʁd.fu/', 'sehr-VEER | duh gard-FOO', ['contre-pouvoir'],
    'Un garde-fou empêche les excès, comme la rambarde d’un pont empêche de tomber.'),
  fam(1080, 'législatif, exécutif, judiciaire', 'legislative, executive, judicial',
    '/le.ʒis.la.tif ɛɡ.ze.ky.tif ʒy.di.sjɛʁ/', 'lay-zhees-la-TEEF, eg-zay-kü-TEEF, zhü-dee-SYEHR', ['contre-pouvoir'],
    'Le législatif (le Parlement), l’exécutif (le gouvernement), le judiciaire (les tribunaux). Adjectifs, et noms avec l’article.'),
  rule(1081, 'Un pouvoir sans contre-pouvoir n’a plus de limite.', 'A power with no counterweight has no limit left.',
    '/œ̃ pu.vwaʁ sɑ̃ kɔ̃.tʁə.pu.vwaʁ na ply də li.mit/', 'uhⁿ poo-VWAR | sahⁿ kohⁿ-truh-poo-VWAR | na plü duh lee-MEET',
    'À quoi sert un contre-pouvoir ?',
    'À limiter un pouvoir établi : le surveiller, le contester, le corriger. Le mot ne dit pas qui a raison ; il dit qui fait contrepoids.',
    ['contre-pouvoir']),
  sent(1082, 'On appelle parfois la presse le quatrième pouvoir.', 'The press is sometimes called the fourth estate.',
    '/ɔ̃.na.pɛl paʁ.fwa la pʁɛs lə ka.tʁi.jɛm pu.vwaʁ/', 'ohⁿ-na-PEL par-FWA | la PRESS | luh ka-tree-YEMM poo-VWAR', ['contre-pouvoir'], FCVDR),
  sent(1083, 'Les syndicats jouent un rôle de contre-pouvoir dans l’entreprise.', 'Unions act as a counterweight within the company.',
    '/le sɛ̃.di.ka ʒu.tœ̃ ʁol də kɔ̃.tʁə.pu.vwaʁ dɑ̃ lɑ̃.tʁə.pʁiz/', 'lay sehⁿ-dee-KA | zhoo-tuhⁿ ROHL | duh kohⁿ-truh-poo-VWAR | dahⁿ lahⁿ-truh-PREEZ', ['contre-pouvoir']),
  sent(1084, 'Un tribunal peut annuler une décision du gouvernement.', 'A court can overturn a government decision.',
    '/œ̃ tʁi.by.nal pø a.ny.le yn de.si.zjɔ̃ dy ɡu.vɛʁ.nə.mɑ̃/', 'uhⁿ tree-bü-NAL | peu a-nü-LAY | ün day-see-ZYOHⁿ | dü goo-vehr-nuh-MAHⁿ', ['contre-pouvoir']),
  sent(1085, 'Le Parlement contrôle l’action du gouvernement.', 'Parliament scrutinises the government’s action.',
    '/lə paʁ.lə.mɑ̃ kɔ̃.tʁol lak.sjɔ̃ dy ɡu.vɛʁ.nə.mɑ̃/', 'luh par-luh-MAHⁿ | kohⁿ-TROHL | lak-SYOHⁿ dü goo-vehr-nuh-MAHⁿ', ['contre-pouvoir']),
  sent(1086, 'L’opposition a interpellé la ministre sur ce contrat.', 'The opposition questioned the minister about this contract.',
    '/lɔ.po.zi.sjɔ̃ a ɛ̃.tɛʁ.pə.le la mi.nistʁ syʁ sə kɔ̃.tʁa/', 'lo-po-zee-SYOHⁿ | a ehⁿ-tehr-puh-LAY | la mee-NEESTR | sür suh kohⁿ-TRA', ['contre-pouvoir']),
  sent(1087, 'Sans presse libre, le pouvoir n’a plus de témoin.', 'Without a free press, power has no witness left.',
    '/sɑ̃ pʁɛs libʁ lə pu.vwaʁ na ply də te.mwɛ̃/', 'sahⁿ press LEEBR | luh poo-VWAR | na plü duh tay-MWEHⁿ', ['contre-pouvoir'], FCVDR),
  sent(1088, 'Ce comité indépendant sert de garde-fou.', 'This independent committee acts as a safeguard.',
    '/sə kɔ.mi.te ɛ̃.de.pɑ̃.dɑ̃ sɛʁ də ɡaʁd.fu/', 'suh ko-mee-TAY ehⁿ-day-pahⁿ-DAHⁿ | sehr duh gard-FOO', ['contre-pouvoir']),
];

/* ── ACT 8 · LÉGAL ET LÉGITIME (.1089-.1101) ────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  col(1089, 'une décision légale', 'a lawful decision', '/yn de.si.zjɔ̃ le.ɡal/', 'ün day-see-ZYOHⁿ lay-GAL', ['legal'],
    'Légal : conforme à la loi, ou défini par elle. Une décision légale respecte les textes en vigueur.'),
  col(1090, 'une revendication légitime', 'a legitimate demand', '/yn ʁə.vɑ̃.di.ka.sjɔ̃ le.ʒi.tim/', 'ün ruh-vahⁿ-dee-ka-SYOHⁿ | lay-zhee-TEEMM', ['legal'],
    'Légitime : juste, fondé, qu’on peut défendre. On en juge au nom de la raison ou de la morale, pas seulement de la loi.'),
  col(1091, 'agir en état de légitime défense', 'to act in self-defence', '/a.ʒiʁ ɑ̃.ne.ta də le.ʒi.tim de.fɑ̃s/', 'a-ZHEER | ahⁿ-nay-TA | duh lay-zhee-teemm day-FAHⁿSS', ['legal'],
    'La légitime défense : se défendre contre une attaque, dans les limites que la loi fixe. Le mot légitime y est figé.'),
  col(1092, 'un conseiller juridique', 'a legal adviser', '/œ̃ kɔ̃.se.je ʒy.ʁi.dik/', 'uhⁿ kohⁿ-say-YAY zhü-ree-DEEK', ['legal'],
    'Juridique : relatif au droit. Sous l’influence de l’anglais legal, on abuse de légal (OQLF).'),
  fam(1093, 'légal, la légalité, illégal, légaliser', 'lawful, legality, illegal, to legalise',
    '/le.ɡal la le.ɡa.li.te i.le.ɡal le.ɡa.li.ze/', 'lay-GAL, la lay-ga-lee-TAY, ee-lay-GAL, lay-ga-lee-ZAY', ['legal'],
    'Légaliser : rendre légal par une loi. La légalité se constate dans les textes.'),
  fam(1094, 'légitime, la légitimité, illégitime, légitimer', 'legitimate, legitimacy, illegitimate, to legitimise',
    '/le.ʒi.tim la le.ʒi.ti.mi.te i.le.ʒi.tim le.ʒi.ti.me/', 'lay-zhee-TEEMM, la lay-zhee-tee-mee-TAY, ee-lay-zhee-TEEMM, lay-zhee-tee-MAY', ['legal'],
    'La légitimité se discute : on la reconnaît, on la conteste, on la gagne.'),
  rule(1095, 'Légal dit ce que la loi permet ; légitime dit ce qui est juste ou fondé.', 'Légal says what the law allows; légitime says what is just or well-founded.',
    '/le.ɡal di sə kə la lwa pɛʁ.mɛ le.ʒi.tim di sə ki ɛ ʒyst u fɔ̃.de/', 'lay-GAL dee suh kuh la LWA pehr-MEH | lay-zhee-TEEMM | dee suh kee eh ZHÜST | oo fohⁿ-DAY',
    'Une décision peut-elle être légale et jugée illégitime ?',
    'Oui : légale, elle respecte la loi ; illégitime, c’est un jugement sur ses raisons ou sur ceux qui l’ont prise. L’inverse existe aussi : un geste illégal que beaucoup trouvent légitime.',
    ['legal']),
  sent(1096, 'Ce qui est légal n’est pas toujours légitime.', 'What is lawful is not always legitimate.',
    '/sə ki ɛ le.ɡal nɛ pa tu.ʒuʁ le.ʒi.tim/', 'suh kee eh lay-GAL | neh pa too-zhoor lay-zhee-TEEMM', ['legal'], FCVDR),
  sent(1097, 'Leur colère est légitime, même si la manifestation n’était pas autorisée.', 'Their anger is legitimate, even if the demonstration was not authorised.',
    '/lœʁ kɔ.lɛʁ ɛ le.ʒi.tim mɛm si la ma.ni.fɛs.ta.sjɔ̃ ne.tɛ pa.zo.tɔ.ʁi.ze/', 'luhr ko-LEHR eh lay-zhee-TEEMM | mem see la ma-nee-fes-ta-SYOHⁿ | nay-teh pa-zoh-to-ree-ZAY', ['legal']),
  sent(1098, 'Le gouvernement est légal ; c’est sa légitimité qui est contestée.', 'The government is lawful; it is its legitimacy that is disputed.',
    '/lə ɡu.vɛʁ.nə.mɑ̃ ɛ le.ɡal sɛ sa le.ʒi.ti.mi.te ki ɛ kɔ̃.tɛs.te/', 'luh goo-vehr-nuh-MAHⁿ eh lay-GAL | seh sa lay-zhee-tee-mee-TAY | kee eh kohⁿ-tes-TAY', ['legal']),
  sent(1099, 'Ce contrat pose un problème juridique, pas moral.', 'This contract raises a legal problem, not a moral one.',
    '/sə kɔ̃.tʁa poz œ̃ pʁɔ.blɛm ʒy.ʁi.dik pa mɔ.ʁal/', 'suh kohⁿ-TRA | pohz uhⁿ pro-BLEMM zhü-ree-DEEK | pa mo-RAL', ['legal'], FCVDR),
  sent(1100, 'Au Canada, on peut voter à dix-huit ans : c’est l’âge légal.', 'In Canada you can vote at eighteen: it is the legal age.',
    '/o ka.na.da ɔ̃ pø vɔ.te a di.zɥi.tɑ̃ sɛ laʒ le.ɡal/', 'oh ka-na-DA | ohⁿ peu vo-TAY | a dee-zwee-TAHⁿ | seh lazh lay-GAL', ['legal']),
  sent(1101, 'Une loi votée dans les règles peut sembler illégitime à une partie des citoyens.', 'A law passed by the rules may seem illegitimate to some citizens.',
    '/yn lwa vɔ.te dɑ̃ le ʁɛɡl pø sɑ̃.ble i.le.ʒi.tim a yn paʁ.ti de si.twa.jɛ̃/', 'ün LWA vo-TAY | dahⁿ lay REGL | peu sahⁿ-BLAY ee-lay-zhee-TEEMM | a ün par-TEE day see-twa-YEHⁿ', ['legal']),
];

/* ── ACT 9 · L’ÉTAT DE DROIT ET L’IMPUNITÉ (.1102-.1114) ────────────────── */

export const ACT9_ROWS: Row[] = [
  col(1102, 'nul n’est au-dessus des lois', 'no one is above the law', '/nyl nɛ.to.də.sy de lwa/', 'nül neh-toh-duh-SÜ | day LWA', ['etat-de-droit'],
    'La formule de l’État de droit : les gouvernants aussi obéissent à la loi.', SO),
  col(1103, 'rester impuni', 'to go unpunished', '/ʁɛs.te ɛ̃.py.ni/', 'res-TAY ehⁿ-pü-NEE', ['etat-de-droit'],
    'Impuni : sans sanction. Un crime impuni ; l’impunité, le fait de rester impuni.'),
  col(1104, 'lutter contre l’impunité', 'to fight impunity', '/ly.te kɔ̃.tʁə lɛ̃.py.ni.te/', 'lü-TAY | kohⁿ-truh lehⁿ-pü-nee-TAY', ['etat-de-droit'],
    'L’impunité choque parce qu’elle fait deux poids, deux mesures.'),
  col(1105, 'l’indépendance de la justice', 'the independence of the judiciary', '/lɛ̃.de.pɑ̃.dɑ̃s də la ʒys.tis/', 'lehⁿ-day-pahⁿ-DAHⁿSS | duh la zhüs-TEESS', ['etat-de-droit'],
    'Les juges décident sans recevoir d’ordres du gouvernement ni de personne.'),
  col(1106, 'exiger une reddition de comptes', 'to demand accountability', '/ɛɡ.zi.ʒe yn ʁe.di.sjɔ̃ də kɔ̃t/', 'eg-zee-ZHAY | ün reh-dee-SYOHⁿ duh KOHⁿT', ['etat-de-droit'],
    'Au Québec, le terme de l’administration publique (OQLF) : rendre compte de la façon dont on exerce une responsabilité. On dit aussi rendre des comptes.', SO),
  fam(1107, 'puni, impuni, la punition, l’impunité', 'punished, unpunished, punishment, impunity',
    '/py.ni ɛ̃.py.ni la py.ni.sjɔ̃ lɛ̃.py.ni.te/', 'pü-NEE, ehⁿ-pü-NEE, la pü-nee-SYOHⁿ, lehⁿ-pü-nee-TAY', ['etat-de-droit'],
    'Le préfixe in- (im- devant p) dit l’absence : impuni, sans punition.'),
  rule(1108, 'Dans un État de droit, le pouvoir aussi obéit à la loi.', 'Under the rule of law, power too obeys the law.',
    '/dɑ̃.zœ̃.ne.ta də dʁwa lə pu.vwaʁ o.si o.be.i a la lwa/', 'dahⁿ-zuhⁿ-nay-TA duh DRWA | luh poo-VWAR oh-SEE | oh-bay-EE a la LWA',
    'Qu’est-ce qui distingue un État de droit d’un État qui a simplement des lois ?',
    'Tout État a des lois. Dans un État de droit, les gouvernants y sont soumis, des juges indépendants peuvent les sanctionner, et les droits fondamentaux sont garantis.',
    ['etat-de-droit']),
  sent(1109, 'Dans un État de droit, nul n’est au-dessus des lois.', 'Under the rule of law, no one is above the law.',
    '/dɑ̃.zœ̃.ne.ta də dʁwa nyl nɛ.to.də.sy de lwa/', 'dahⁿ-zuhⁿ-nay-TA duh DRWA | nül neh-toh-duh-SÜ day LWA', ['etat-de-droit'], FCVDR),
  sent(1110, 'Ces fraudes sont restées impunies pendant des années.', 'These frauds went unpunished for years.',
    '/se fʁod sɔ̃ ʁɛs.te.zɛ̃.py.ni pɑ̃.dɑ̃ de.za.ne/', 'say FROHD | sohⁿ res-tay-zehⁿ-pü-NEE | pahⁿ-dahⁿ day-za-NAY', ['etat-de-droit']),
  sent(1111, 'L’impunité des puissants nourrit la méfiance des citoyens.', 'The impunity of the powerful feeds citizens’ distrust.',
    '/lɛ̃.py.ni.te de pɥi.sɑ̃ nu.ʁi la me.fjɑ̃s de si.twa.jɛ̃/', 'lehⁿ-pü-nee-TAY day pwee-SAHⁿ | noo-REE la may-FYAHⁿSS | day see-twa-YEHⁿ', ['etat-de-droit'], FCVDR),
  sent(1112, 'Chacun a droit à un procès équitable.', 'Everyone is entitled to a fair trial.',
    '/ʃa.kœ̃ a dʁwa a œ̃ pʁɔ.sɛ e.ki.tabl/', 'sha-KUHⁿ a DRWA | a uhⁿ pro-SEH ay-kee-TABL', ['etat-de-droit']),
  sent(1113, 'Les élus doivent rendre compte de leurs décisions.', 'Elected officials must account for their decisions.',
    '/le.ze.ly dwav ʁɑ̃dʁ kɔ̃t də lœʁ de.si.zjɔ̃/', 'lay-zay-LÜ | dwav rahⁿdr KOHⁿT | duh luhr day-see-ZYOHⁿ', ['etat-de-droit']),
  sent(1114, 'On parle de deux poids, deux mesures quand la règle change selon la personne.', 'People speak of double standards when the rule changes with the person.',
    '/ɔ̃ paʁl də dø pwa dø mə.zyʁ kɑ̃ la ʁɛɡl ʃɑ̃ʒ sə.lɔ̃ la pɛʁ.sɔn/', 'ohⁿ parl duh deu PWA | deu muh-ZÜR | kahⁿ la REGL SHAHⁿZH | suh-lohⁿ la pehr-SONN', ['etat-de-droit']),
];

/* ── ACT 10 · L’IDENTITÉ (.1115-.1127) ──────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  col(1115, 'l’identité culturelle', 'cultural identity', '/li.dɑ̃.ti.te kyl.ty.ʁɛl/', 'lee-dahⁿ-tee-TAY kül-tü-REL', ['identite'],
    'Ce par quoi une personne ou un groupe se reconnaît : une langue, une mémoire, des habitudes. Rien à voir avec la pièce d’identité.'),
  col(1116, 'revendiquer une identité plurielle', 'to claim a multiple identity', '/ʁə.vɑ̃.di.ke y.ni.dɑ̃.ti.te ply.ʁjɛl/', 'ruh-vahⁿ-dee-KAY | ü-nee-dahⁿ-tee-TAY plü-RYEL', ['identite'],
    'On peut être à la fois montréalaise, haïtienne et francophone : l’identité se compose, et on peut le dire haut.'),
  col(1117, 'renforcer le sentiment d’appartenance', 'to strengthen the sense of belonging', '/ʁɑ̃.fɔʁ.se lə sɑ̃.ti.mɑ̃ da.paʁ.tə.nɑ̃s/', 'rahⁿ-for-SAY | luh sahⁿ-tee-MAHⁿ | da-par-tuh-NAHⁿSS', ['identite'],
    'Le fait de se sentir membre d’un groupe, d’un quartier, d’un pays : on le renforce, on le perd, il se gagne.'),
  col(1118, 's’identifier à quelqu’un', 'to identify with someone', '/si.dɑ̃.ti.fje a kɛl.kœ̃/', 'see-dahⁿ-tee-FYAY | a kel-KUHⁿ', ['identite'],
    'Se reconnaître dans une personne, un personnage, un groupe. Sans à, s’identifier, c’est donner son nom ou ses papiers.'),
  fam(1119, 'l’identité, identitaire, s’identifier, l’identification', 'identity, identity-related, to identify, identification',
    '/li.dɑ̃.ti.te i.dɑ̃.ti.tɛʁ si.dɑ̃.ti.fje li.dɑ̃.ti.fi.ka.sjɔ̃/', 'lee-dahⁿ-tee-TAY, ee-dahⁿ-tee-TEHR, see-dahⁿ-tee-FYAY, lee-dahⁿ-tee-fee-ka-SYOHⁿ', ['identite'],
    'Identitaire est souvent chargé : le repli identitaire est un reproche.'),
  rule(1120, 'L’identité d’une personne se construit ; elle ne se résume pas à ses papiers.', 'A person’s identity is built; it does not come down to their papers.',
    '/li.dɑ̃.ti.te dyn pɛʁ.sɔn sə kɔ̃s.tʁɥi ɛl nə sə ʁe.zym pa a se pa.pje/', 'lee-dahⁿ-tee-TAY dün pehr-SONN | suh kohⁿs-TRWEE | el nuh suh ray-ZÜMM pa | a say pa-PYAY',
    'Pièce d’identité, identité culturelle : est-ce le même sens ?',
    'Le même mot, deux sens. La pièce d’identité dit qui tu es pour l’administration. L’identité au sens abstrait dit ce par quoi tu te reconnais : elle bouge, elle se compose, elle se discute.',
    ['identite']),
  sent(1121, 'Pour beaucoup, la langue est au cœur de l’identité.', 'For many people, language is at the heart of identity.',
    '/puʁ bo.ku la lɑ̃ɡ ɛ.to kœʁ də li.dɑ̃.ti.te/', 'poor boh-KOO | la LAHⁿG | eh-toh KUHR | duh lee-dahⁿ-tee-TAY', ['identite'], FCVDR),
  sent(1122, 'Je m’identifie à ce personnage plus qu’à son auteur.', 'I identify with this character more than with its author.',
    '/ʒə mi.dɑ̃.ti.fi a sə pɛʁ.sɔ.naʒ ply ka sɔ̃.no.tœʁ/', 'zhuh mee-dahⁿ-tee-FEE | a suh pehr-so-NAZH | plü ka soh-noh-TUHR', ['identite']),
  sent(1123, 'L’expression « identité nationale » n’a pas le même sens pour tous ceux qui l’emploient.', 'The phrase « national identity » does not mean the same to everyone who uses it.',
    '/lɛks.pʁɛ.sjɔ̃ i.dɑ̃.ti.te na.sjɔ.nal na pa lə mɛm sɑ̃s puʁ tu sø ki lɑ̃.plwa/', 'lek-spreh-SYOHⁿ | ee-dahⁿ-tee-TAY na-syo-NAL | na pa luh mem SAHⁿSS | poor too seu kee lahⁿ-PLWA', ['identite', 'mot-charge']),
  sent(1124, 'Ses adversaires parlent de repli identitaire.', 'Its opponents speak of identity-based withdrawal.',
    '/se.zad.vɛʁ.sɛʁ paʁl də ʁə.pli i.dɑ̃.ti.tɛʁ/', 'say-zad-vehr-SEHR | parl duh ruh-PLEE | ee-dahⁿ-tee-TEHR', ['identite', 'mot-charge']),
  sent(1125, 'Le quartier a gardé un fort sentiment d’appartenance.', 'The neighbourhood has kept a strong sense of belonging.',
    '/lə kaʁ.tje a ɡaʁ.de œ̃ fɔʁ sɑ̃.ti.mɑ̃ da.paʁ.tə.nɑ̃s/', 'luh kar-TYAY | a gar-DAY uhⁿ FOR | sahⁿ-tee-MAHⁿ da-par-tuh-NAHⁿSS', ['identite']),
  sent(1126, 'On ne choisit pas toutes ses appartenances.', 'You do not choose all the groups you belong to.',
    '/ɔ̃ nə ʃwa.zi pa tut se.za.paʁ.tə.nɑ̃s/', 'ohⁿ nuh shwa-ZEE pa | toot say-za-par-tuh-NAHⁿSS', ['identite']),
  sent(1127, 'Son identité s’est construite entre deux langues.', 'Her identity was built between two languages.',
    '/sɔ̃.ni.dɑ̃.ti.te sɛ kɔ̃s.tʁɥit ɑ̃.tʁə dø lɑ̃ɡ/', 'soh-nee-dahⁿ-tee-TAY | seh kohⁿs-TRWEET | ahⁿ-truh deu LAHⁿG', ['identite'], FCVDR),
];

/* ── ACT 11 · VIVRE ENSEMBLE (.1128-.1140) ──────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  col(1128, 'le modèle de l’interculturalisme', 'the interculturalism model', '/lə mɔ.dɛl də lɛ̃.tɛʁ.kyl.ty.ʁa.lism/', 'luh mo-DEL | duh lehⁿ-tehr-kül-tü-ra-LEESM', ['vivre-ensemble'],
    'Le modèle défendu au Québec : une culture commune, de langue française, qui dialogue avec les apports des nouveaux arrivants.'),
  col(1129, 'une politique de multiculturalisme', 'a multiculturalism policy', '/yn pɔ.li.tik də myl.ti.kyl.ty.ʁa.lism/', 'ün po-lee-TEEK | duh mül-tee-kül-tü-ra-LEESM', ['vivre-ensemble'],
    'Au Canada, le multiculturalisme est une politique officielle : une loi de 1988, et l’article 27 de la Charte.'),
  col(1130, 'demander un accommodement raisonnable', 'to request a reasonable accommodation', '/də.mɑ̃.de œ̃.na.kɔ.mɔd.mɑ̃ ʁɛ.zɔ.nabl/', 'duh-mahⁿ-DAY | uhⁿ-na-ko-mod-MAHⁿ | reh-zo-NABL', ['vivre-ensemble'],
    'En droit québécois et canadien : adapter une règle commune pour éviter une discrimination, sauf contrainte excessive.'),
  col(1131, 'la laïcité de l’État', 'state secularism', '/la la.i.si.te də le.ta/', 'la la-ee-see-TAY | duh lay-TA', ['vivre-ensemble', 'mot-charge'],
    'L’État ne reconnaît ni ne favorise aucune religion. La Constitution française dit la République « laïque ».'),
  fam(1132, 'laïque, la laïcité, laïciser, la laïcisation', 'secular, secularism, to secularise, secularisation',
    '/la.ik la la.i.si.te la.i.si.ze la la.i.si.za.sjɔ̃/', 'la-EEK, la la-ee-see-TAY, la-ee-see-ZAY, la la-ee-see-za-SYOHⁿ', ['vivre-ensemble'],
    'Une école laïque, un État laïque. Laïciser : rendre une institution indépendante des religions.'),
  col(1133, 'accuser quelqu’un de communautarisme', 'to accuse someone of communitarianism', '/a.ky.ze kɛl.kœ̃ də kɔ.my.no.ta.ʁism/', 'a-kü-ZAY kel-KUHⁿ | duh ko-mü-noh-ta-REESM', ['vivre-ensemble', 'mot-charge'],
    'Le mot sert surtout d’accusation : le repli d’un groupe sur ses propres règles. Dis qui l’emploie, et à propos de qui.'),
  rule(1134, 'Multiculturalisme et interculturalisme : deux modèles, pas deux synonymes.', 'Multiculturalism and interculturalism: two models, not two synonyms.',
    '/myl.ti.kyl.ty.ʁa.lism e ɛ̃.tɛʁ.kyl.ty.ʁa.lism dø mɔ.dɛl pa dø sɛ̃.nɔ.nim/', 'mül-tee-kül-tü-ra-LEESM | ay ehⁿ-tehr-kül-tü-ra-LEESM | deu mo-DEL | pa deu see-no-NEEMM',
    'Qu’est-ce qui sépare le multiculturalisme de l’interculturalisme ?',
    'Le multiculturalisme insiste sur la coexistence des cultures ; l’interculturalisme, sur leurs échanges autour d’une culture commune. Présente-les comme des modèles que d’autres défendent ou critiquent.',
    ['vivre-ensemble']),
  sent(1135, 'Au Canada, le multiculturalisme est une politique officielle.', 'In Canada, multiculturalism is an official policy.',
    '/o ka.na.da lə myl.ti.kyl.ty.ʁa.lism ɛ.tyn pɔ.li.tik ɔ.fi.sjɛl/', 'oh ka-na-DA | luh mül-tee-kül-tü-ra-LEESM | eh-tün po-lee-TEEK o-fee-SYEL', ['vivre-ensemble'], FCVDR),
  sent(1136, 'Le Québec défend plutôt un modèle d’interculturalisme.', 'Quebec instead defends a model of interculturalism.',
    '/lə ke.bɛk de.fɑ̃ ply.to œ̃ mɔ.dɛl dɛ̃.tɛʁ.kyl.ty.ʁa.lism/', 'luh kay-BEK | day-FAHⁿ plü-TOH | uhⁿ mo-DEL | dehⁿ-tehr-kül-tü-ra-LEESM', ['vivre-ensemble']),
  sent(1137, 'Pour ses partisans, la laïcité protège la liberté de conscience.', 'For its supporters, secularism protects freedom of conscience.',
    '/puʁ se paʁ.ti.zɑ̃ la la.i.si.te pʁɔ.tɛʒ la li.bɛʁ.te də kɔ̃.sjɑ̃s/', 'poor say par-tee-ZAHⁿ | la la-ee-see-TAY pro-TEZH | la lee-behr-TAY duh kohⁿ-SYAHⁿSS', ['vivre-ensemble', 'mot-charge']),
  sent(1138, 'Pour ses critiques, cette loi vise surtout certaines minorités.', 'For its critics, this law mainly targets certain minorities.',
    '/puʁ se kʁi.tik sɛt lwa viz syʁ.tu sɛʁ.tɛn mi.nɔ.ʁi.te/', 'poor say kree-TEEK | set LWA | veez sür-TOO | sehr-TENN mee-no-ree-TAY', ['vivre-ensemble', 'mot-charge']),
  sent(1139, 'Ceux que le mot communautarisme désigne l’emploient rarement.', 'Those whom the word communautarisme refers to rarely use it.',
    '/sø kə lə mo kɔ.my.no.ta.ʁism de.ziɲ lɑ̃.plwa ʁaʁ.mɑ̃/', 'seu kuh luh MOH | ko-mü-noh-ta-REESM | day-ZEENY | lahⁿ-PLWA rar-MAHⁿ', ['vivre-ensemble', 'mot-charge'], FCVDR),
  sent(1140, 'S’intégrer, ce n’est pas s’assimiler : on ne demande pas de tout effacer.', 'Integrating is not assimilating: no one is asked to erase everything.',
    '/sɛ̃.te.ɡʁe sə nɛ pa sa.si.mi.le ɔ̃ nə də.mɑ̃d pa də tu.te.fa.se/', 'sehⁿ-tay-GRAY | suh neh pa sa-see-mee-LAY | ohⁿ nuh duh-MAHⁿD pa | duh too-tay-fa-SAY', ['vivre-ensemble']),
];

/* ── ACT 12 · TA CONTRIBUTION (.1141-.1149) ─────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1141, 'Merci d’avoir lancé ce débat : il nous concerne tous.', 'Thank you for starting this debate: it concerns us all.',
    '/mɛʁ.si da.vwaʁ lɑ̃.se sə de.ba il nu kɔ̃.sɛʁn tus/', 'mehr-SEE da-vwar lahⁿ-SAY suh day-BA | eel noo kohⁿ-SEHRN TOOSS', ['reponse']),
  sent(1142, 'Tu emploies le mot égalité là où tu veux dire équité.', 'You use the word equality where you mean fairness.',
    '/ty ɑ̃.plwa lə mo e.ɡa.li.te la u ty vø diʁ e.ki.te/', 'tü ahⁿ-PLWA luh MOH ay-ga-lee-TAY | la oo tü veu deer ay-kee-TAY', ['reponse'], FCVDR),
  sent(1143, 'Que la mesure soit légale ne règle pas la question de sa légitimité.', 'That the measure is lawful does not settle the question of its legitimacy.',
    '/kə la mə.zyʁ swa le.ɡal nə ʁɛɡl pa la kɛs.tjɔ̃ də sa le.ʒi.ti.mi.te/', 'kuh la muh-ZÜR swa lay-GAL | nuh regl PA | la kes-TYOHⁿ duh sa lay-zhee-tee-mee-TAY', ['reponse']),
  sent(1144, 'Je précise dans quel sens je prends ce mot.', 'I am specifying the sense in which I take this word.',
    '/ʒə pʁe.siz dɑ̃ kɛl sɑ̃s ʒə pʁɑ̃ sə mo/', 'zhuh pray-SEEZ | dahⁿ kel SAHⁿSS | zhuh prahⁿ suh MOH', ['reponse']),
  sent(1145, 'On peut défendre cette position sans caricaturer l’autre.', 'You can defend this position without caricaturing the other.',
    '/ɔ̃ pø de.fɑ̃dʁ sɛt po.zi.sjɔ̃ sɑ̃ ka.ʁi.ka.ty.ʁe lotʁ/', 'ohⁿ peu day-FAHⁿDR set po-zee-SYOHⁿ | sahⁿ ka-ree-ka-tü-RAY LOHTR', ['reponse']),
  rule(1146, 'Définis le mot, dis qui l’emploie, puis prends position.', 'Define the word, say who uses it, then take a stand.',
    '/de.fi.ni lə mo di ki lɑ̃.plwa pɥi pʁɑ̃ po.zi.sjɔ̃/', 'day-fee-NEE luh MOH | dee kee lahⁿ-PLWA | pwee prahⁿ po-zee-SYOHⁿ',
    'Quelqu’un emploie un mot chargé dans une lettre. Que fait ta réponse ?',
    'Elle dit dans quel sens le mot est pris, rappelle ce qu’il fait entendre et qui l’emploie, sépare les mots voisins, puis donne ton avis, annoncé comme tel.',
    ['reponse']),
  sent(1147, 'À mon sens, la question est moins juridique que politique.', 'In my view, the question is less legal than political.',
    '/a mɔ̃ sɑ̃s la kɛs.tjɔ̃ ɛ mwɛ̃ ʒy.ʁi.dik kə pɔ.li.tik/', 'a mohⁿ SAHⁿSS | la kes-TYOHⁿ | eh mwehⁿ zhü-ree-DEEK | kuh po-lee-TEEK', ['reponse'], FCVDR),
  sent(1148, 'Voilà où je me situe, et pourquoi.', 'That is where I stand, and why.',
    '/vwa.la u ʒə mə si.ty e puʁ.kwa/', 'vwa-LA oo zhuh muh see-TÜ | ay poor-KWA', ['reponse']),
  sent(1149, 'Je propose que nous en débattions à la prochaine séance.', 'I propose that we debate it at the next meeting.',
    '/ʒə pʁɔ.poz kə nu.zɑ̃ de.ba.tjɔ̃ a la pʁɔ.ʃɛn se.ɑ̃s/', 'zhuh pro-POHZ | kuh noo-zahⁿ day-ba-TYOHⁿ | a la pro-SHENN say-AHⁿSS', ['reponse']),
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
 *  §I. THE TEXTS (all « texte original écrit pour la leçon », except the
 *  short official quotations named in §A.7)
 *
 *  Three long readings (the council's minutes, a column on a housing co-op,
 *  a magazine piece on identity), the model contribution of act 12, the open
 *  letter the task answers, and ten « Dans un texte » paragraphs that close
 *  acts 2 to 11. Every person, venue, outlet, association, co-op and
 *  district is invented: the conseil de quartier des Hautes-Rives
 *  (Montréal) and its animatrice Rosalie Gendron; Malik, Yvette, Théo,
 *  Aminata, Gérald Poulin, Bernard Lessard; the jardins communautaires du
 *  Ruisseau, des Pommiers and de la Gare; the coopérative d’habitation Le
 *  Grand Pin (Québec), Claudette, Hervé; the magazine Carrefours
 *  (Bruxelles); Radio Hautes-Rives; the bulletin La Voix des Hautes-Rives;
 *  the bibliothèque Marie-Galante and its atelier citoyen; the Collectif
 *  des parents du Plateau-Est; the journal Le Riverain (Lyon); the Fondation
 *  Belle-Anse (Genève); the société de transport Navibus; the quartier
 *  Saint-Firmin (Dakar). Figures are invented and belong to the example.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Rosalie's minutes of the neighbourhood council (about 270 words). */
export const LECTURE_CONSEIL =
  'Conseil de quartier des Hautes-Rives, Montréal. Compte rendu de la séance du 14 mai. Seize résidents présents. Point unique : la répartition de la subvention de douze mille dollars accordée par l’arrondissement aux trois jardins communautaires du quartier. Malik, qui préside l’association du jardin du Ruisseau, a proposé une répartition à parts égales : quatre mille dollars par jardin, « par souci d’égalité ». Yvette, du jardin des Pommiers, a fait remarquer que les trois jardins n’ont pas la même taille : le jardin de la Gare compte soixante familles, les deux autres une vingtaine chacun. Pour elle, donner la même somme à tous serait égal, mais pas équitable. Théo a répondu qu’un critère fondé sur le nombre de familles favoriserait toujours le plus grand jardin et que les petits finiraient par disparaître. Le ton est monté quand Aminata a parlé de « justice ». Malik a cru qu’elle l’accusait d’injustice ; elle voulait seulement dire que chacun, dans la salle, mettait un sens différent derrière le même mot. L’animatrice a proposé de mettre d’abord les participants d’accord sur les mots : l’égalité donne la même part à chacun, l’équité la part juste, compte tenu des besoins. Après discussion, le conseil a retenu une formule mixte : deux mille dollars de base par jardin, et le reste réparti selon le nombre de familles. La décision a été adoptée par onze voix contre cinq. Malik a demandé qu’on note son désaccord : il juge la décision légale, mais pas tout à fait légitime, puisque seize personnes seulement ont voté. Prochaine séance : le 11 juin. Rosalie Gendron, animatrice.';

/** Act 6: a column on a housing co-op (about 200 words). */
export const LECTURE_COOP =
  'La Voix des Hautes-Rives, chronique « Vie de quartier ». Qui décide vraiment ? À la coopérative d’habitation Le Grand Pin, à Québec, la présidente du conseil d’administration, Claudette, a tous les pouvoirs que lui donnent les règlements : elle convoque les assemblées, signe les contrats et parle au nom des quarante membres. Pourtant, quand il faut convaincre les locataires de refaire la toiture, c’est Hervé qu’on écoute. Il n’a aucun titre ; il habite là depuis trente ans, il connaît chaque fuite et il ne s’est jamais trompé sur un devis. Claudette exerce le pouvoir ; Hervé a de l’autorité. L’an dernier, Claudette a voulu imposer un nouveau règlement sans consulter l’assemblée. Elle en avait le pouvoir ; elle y a perdu une part de son autorité, et plusieurs membres ont parlé d’abus de pouvoir. Les autorités municipales, elles, n’interviennent que si la sécurité est en jeu. Quant à la puissance, la coopérative n’en a guère : face au propriétaire du terrain voisin, un grand promoteur, elle pèse peu. Morale de l’histoire : on reçoit le pouvoir, on mérite l’autorité. Et un guide qui fait autorité, publié par la fédération des coopératives, le dit en une ligne : une décision expliquée vaut deux décisions imposées.';

/** Act 10: a magazine piece on identity (about 200 words). */
export const LECTURE_IDENTITE =
  'Carrefours, magazine bruxellois, rubrique « Paroles ». « D’où viens-tu, vraiment ? » Nadia a trente-quatre ans et cette question l’accompagne depuis l’école. Née à Bruxelles d’une mère congolaise et d’un père liégeois, elle a d’abord cru qu’il fallait choisir. « Au bureau, j’étais la Congolaise ; à Kinshasa, chez mes cousins, j’étais la Belge. » Elle parle aujourd’hui d’une identité plurielle : bruxelloise, belge, africaine, francophone, et un peu néerlandophone depuis qu’elle travaille à Gand. Son identité, dit-elle, s’est construite entre deux langues et trois villes ; elle ne se résume pas à ce qui est écrit sur sa carte d’identité. Elle se méfie pourtant de certains mots. « Quand on me parle de mes racines, j’entends de la curiosité. Quand on parle de repli identitaire à propos de mon quartier, j’entends un reproche. » Le sentiment d’appartenance, pour elle, ne se décrète pas : il se gagne, dans une équipe de basket, une chorale, une rue où l’on connaît le boulanger. Et elle s’identifie moins à un pays qu’aux personnes qui l’ont aidée à grandir. « On ne choisit pas toutes ses appartenances, conclut-elle. Mais on choisit lesquelles on cultive. »';

/** Act 12: the model the learner imitates, Rosalie's contribution. */
export const LECTURE_MODELE =
  'Sur le site du conseil de quartier, Rosalie répond à une lettre ouverte de Bernard Lessard, qui écrivait : « La transformation de la rue Fleury en rue piétonne est une atteinte à ma liberté : je dois pouvoir garer ma voiture devant chez moi. Cette décision est illégitime, puisque je n’ai pas été consulté. Et l’égalité voudrait que les voitures aient autant de place que les piétons. » Voici sa réponse. « Cher Bernard, merci d’avoir lancé ce débat : il nous concerne tous. Ta lettre mêle pourtant trois idées voisines, et je voudrais les séparer. D’abord, la liberté. Aucune liberté n’est sans limites : la liberté de circuler existe, mais elle ne comprend pas le droit de stationner partout. La liberté des uns s’arrête où commence celle des autres, dit le proverbe ; ici, celle des enfants qui jouent dans la rue. Ensuite, la légitimité. La décision est légale : le conseil d’arrondissement l’a votée dans les règles. Tu peux contester sa légitimité, mais l’argument ne tient que si l’on montre que la consultation a été mal faite, pas seulement que tu n’y étais pas. Enfin, l’égalité. Donner la même place à chacun ne veut pas dire la même place à chaque véhicule : on raisonne en personnes, et une rue piétonne en accueille beaucoup plus. Si tu veux parler de justice, parle plutôt d’équité : comment tenir compte des résidents âgés qui ont besoin d’une voiture ? Voilà une vraie question, et je propose que nous en débattions à la prochaine séance. Pour ma part, je soutiens le projet, avec une place réservée aux personnes à mobilité réduite. Voilà où je me situe, et pourquoi. Au plaisir de te lire, Rosalie. »';

/** The task: the open letter the learner answers (about 150 words). */
export const LETTRE_GERALD =
  '« Le conseil de quartier veut réserver la piscine municipale aux aînés et aux personnes handicapées de 7 h à 9 h, deux matins par semaine. C’est contraire à l’égalité : tout le monde paie les mêmes taxes, tout le monde doit avoir les mêmes horaires. D’ailleurs, cette mesure est illégale, puisqu’elle me choque et qu’elle choque mes voisins. Le conseil n’a aucune autorité pour décider cela : il n’a que le pouvoir que lui donnent quelques bénévoles. On nous parle d’inclusion, mais c’est du communautarisme : chaque groupe aura bientôt sa piscine. Ma liberté, c’est de nager quand je veux, un point c’est tout. Si on laisse passer cela, plus rien n’empêchera le conseil de faire n’importe quoi. » Gérald Poulin';

/** The ten « dans un texte » paragraphs (acts 2 to 11). */
export const TEXTE_A2 =
  'Un message du Collectif des parents du Plateau-Est, à Montréal. Repère ce qui relève de l’égalité et ce qui relève de l’équité. « Chers parents, le centre de services scolaire propose de donner à toutes les écoles du secteur le même budget de sorties culturelles : trois mille dollars chacune. Nous saluons l’intention : c’est une mesure d’égalité. Mais nos deux écoles accueillent beaucoup d’enfants dont les familles ne peuvent pas payer les billets. Un même budget pour tous serait égal ; il ne serait pas équitable. Nous demandons donc une part de base identique, et une part supplémentaire selon les besoins de chaque école. L’égalité des chances ne se décrète pas : elle se finance. »';

export const TEXTE_A3 =
  'Une brève du journal Le Riverain, à Lyon. Trouve les deux sens du mot justice. « Après sept ans de procédure, les anciens salariés de la blanchisserie de la Croix-Pâquier ont obtenu gain de cause hier devant le tribunal : ils avaient saisi la justice en 2019, après un licenciement jugé abusif. « Nous ne voulions pas d’argent, nous voulions justice », a déclaré leur porte-parole, Josiane Merle. Le jugement leur rend enfin justice, mais il arrive tard : deux d’entre eux sont décédés entre-temps. Une justice aussi lente, regrette l’avocate des salariés, laisse toujours un sentiment d’injustice, même quand elle donne raison. »';

export const TEXTE_A4 =
  'Un communiqué de la Fondation Belle-Anse, à Genève. Repère la liberté au singulier et les libertés au pluriel. « La Fondation Belle-Anse s’inquiète du projet de règlement qui soumettrait toute réunion de plus de vingt personnes dans un parc à une autorisation préalable. Nous ne contestons pas que la liberté ait des limites : la tranquillité des riverains compte aussi. Mais une autorisation exigée pour chaque pique-nique d’association porterait atteinte à deux libertés publiques à la fois, la liberté de réunion et la liberté d’association. Restreindre une liberté peut se justifier ; la soumettre à la bonne volonté d’un bureau, beaucoup moins. »';

export const TEXTE_A5 =
  'Une fiche d’éducation civique distribuée à la bibliothèque Marie-Galante, à Montréal. Pour chaque texte, trouve son pays, sa date et une liberté qu’il protège. « Trois textes, une même famille. En France, la Déclaration des droits de l’homme et du citoyen de 1789 proclame à son article 11 que « la libre communication des pensées et des opinions est un des droits les plus précieux de l’homme ». Au Canada, la Charte canadienne des droits et libertés, adoptée en 1982, énumère à son article 2 les libertés fondamentales : conscience et religion, pensée, croyance, opinion et expression, réunion pacifique, association. Au Québec, la Charte des droits et libertés de la personne, adoptée en 1975, reconnaît à son article 3 des libertés très proches. Remarque le vocabulaire : droits de l’homme en 1789, droits et libertés de la personne au Québec. »';

export const TEXTE_A6 =
  'Une offre publiée par la société de transport Navibus, à Québec. Trouve qui a le pouvoir, qui a l’autorité et qui a les moyens. « Navibus recherche un ou une chef d’équipe pour son atelier de maintenance. Vous aurez le pouvoir de répartir le travail et de valider les réparations. Nous cherchons toutefois une personne qui saura gagner l’autorité de l’équipe par sa compétence plutôt que l’imposer par son titre : le style autoritaire n’a pas sa place chez nous. Vous serez en contact avec les autorités portuaires pour les inspections. Notre manuel de sécurité, qui fait autorité dans le secteur, sera votre outil quotidien. »';

export const TEXTE_A7 =
  'Un éditorial du bulletin La Voix des Hautes-Rives. Trouve les contre-pouvoirs nommés, et la phrase citée. « Notre arrondissement n’a pas de Parlement, mais il a des contre-pouvoirs : le conseil de quartier, les associations, et ce modeste bulletin. Quand l’arrondissement a voulu vendre le terrain de l’ancienne caserne sans appel d’offres, ce sont eux qui ont demandé des explications. La Déclaration de 1789 le disait déjà à son article 16 : « Toute société dans laquelle la garantie des droits n’est pas assurée, ni la séparation des pouvoirs déterminée, n’a point de Constitution. » Un quartier n’est pas une société entière ; mais un pouvoir sans garde-fou s’y installe aussi vite qu’ailleurs. »';

export const TEXTE_A8 =
  'Un échange sur le forum d’un syndicat étudiant de Lausanne. Pour chaque message, dis s’il parle de légalité ou de légitimité. « Léa : L’occupation du hall était illégale, le règlement de l’université l’interdit. Samir : Illégale, oui. Mais notre demande était légitime : la cafétéria ferme à 14 h et beaucoup d’étudiants n’ont pas d’autre endroit pour manger. Léa : Une revendication peut être légitime sans que tous les moyens le soient. Samir : D’accord. Alors demandons un avis juridique avant la prochaine action, au lieu de nous accuser mutuellement. »';

export const TEXTE_A9 =
  'Une dépêche de Radio Hautes-Rives. Trouve ce qui menace l’État de droit et ce qui le protège. « Le directeur du service des permis de l’arrondissement, soupçonné d’avoir accordé des passe-droits à des proches pendant six ans, a été suspendu hier. L’affaire a été révélée par une employée, aujourd’hui protégée comme lanceuse d’alerte. Pour l’association Vigie Hautes-Rives, ces faits seraient restés impunis sans elle : « Le problème, ce n’est pas seulement la fraude, c’est l’impunité. Quand la règle change selon la personne, c’est deux poids, deux mesures. » Le directeur, qui conteste les faits, aura droit à un procès équitable. »';

export const TEXTE_A10 =
  'Une annonce de la maison de quartier Saint-Firmin, à Dakar. Repère les sens du mot identité. « Atelier « Qui suis-je ici ? », tous les samedis. Pour faire refaire votre carte nationale d’identité, adressez-vous aux services de l’administration : ce n’est pas l’objet de cet atelier. Nous parlons ici d’identité au sens large : les langues que vous parlez, les lieux auxquels vous vous sentez attachés, les groupes auxquels vous appartenez. Wolof, français, sérère, anglais : beaucoup d’entre nous en parlent plusieurs. Venez raconter comment votre identité s’est construite, sans que personne ne vous dise laquelle est la bonne. »';

export const TEXTE_A11 =
  'Le glossaire de l’atelier citoyen de la bibliothèque Marie-Galante, à Montréal. Pour chaque mot, repère qui l’emploie, et dans quel sens. « Multiculturalisme : au Canada, politique officielle depuis 1971, inscrite dans une loi en 1988 ; elle met l’accent sur la coexistence des cultures. Interculturalisme : le modèle que défend le Québec, qui insiste sur les échanges autour d’une culture commune de langue française. Laïcité : la neutralité de l’État envers les religions ; ses partisans y voient une protection de la liberté de conscience, ses critiques une contrainte pour certaines minorités. Pour l’histoire du mot, voir la séance sur les grandes références. Communautarisme : mot surtout employé en France, presque toujours comme un reproche ; ceux qu’il désigne ne l’emploient guère. »';
