// c2.10.l1 « La synthèse experte et la dissertation avancée » — the authored
// corpus, the identity block, the three-document dossier and the citation
// constants. DRAFT, third lesson of C2 wave 3. To RICH-LESSON-STANDARD.md and
// the B1-BUILD-PLAYBOOK.md house rules, with the C2 rules of
// C2-BUILD-PLAN.md ("writing is c1.10 → c2.10, harder sources, a genre c1.10
// does not ask for") and the c2.10 brief in C2-RESEARCH-PLAN.md. Structural
// model: `c2/analyse-litteraire-corpus.ts` (c2.02) for the reading-text /
// model-answer / task shape; `c1/dissertation-synthese-corpus.ts` (c1.10)
// for the multi-document dossier shape this lesson continues.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json. No
// Postgres read or write was made while authoring this file: the id home
// (discours-dexamen, 2200-2399, c1-c2 already, no widen needed) and the
// sub-theme append (« la synthèse et la dissertation expertes ») are both
// already recorded as done in C2-BUILD-PLAN.md. This file only needs to stay
// inside the claimed block.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE THIRD C2 WAVE-3 LESSON. c1.10 already teaches, as TWO SEPARATE
//   exercises, the synthèse de documents (own words, no opinion, a dossier of
//   three short documents, ~150-200 words each) and the essai sur dossier (a
//   position essay drawing on a dossier without copying it). c2.10's job is
//   the genre c1.10 never asks for: ONE SINGLE TEXT that does both at once,
//   on DENSER sources (statistics, qualifying clauses, specialist register,
//   not c1.10's conversational single-paragraph quotes), under a tighter,
//   sentence-level fusion of citation and argument, inside a word budget that
//   punishes padding.
//
//     act 1   le problème : un genre à part entière; Camille's two separate
//             sheets (a neutral synthèse, a separate opinion page) named as
//             exactly the fault this lesson corrects; recap of c1.10
//     act 2   lire trois sources denses comme un seul dossier: reading by
//             the shared stake across all three documents, never document by
//             document
//     act 3   tenir le fil : citer et trancher dans la même phrase; the
//             sentence-level fusion connector, against two adjacent but
//             unfused sentences
//     act 4   la compression : choisir ce qui compte; keeping the
//             qualifying statistic under a tight word budget, against both
//             padding and the statistic's quiet disappearance
//     act 5   ce qu'on ne trahit jamais : fidelity extended past c1.10's rule
//             to statistical nuance (never inventing a figure, never
//             reversing a document's claim, never adding an idea absent from
//             all three sources)
//     act 6   choisir son plan pour ce dossier: c1.10's plan types (analytical,
//             comparative) applied to a real three-document tension that
//             refuses a pour/contre split
//     act 7   le piège : la moitié manquante; the stepped trap, five ways a
//             paragraph can look complete while holding only half the fused
//             genre (synthesis with no decision, or decision with no
//             grounding)
//     act 8   ta synthèse-dissertation: the model text, the plan, the
//             rehearsal, the TASK (the same three-document dossier, graded),
//             the quiz, the review, the roundup
//
// ══════════════════════════════════════════════════════════════════════════
//  NOT OWNED, CITED ONLY (published, v88, C1 CLOSED)
// ══════════════════════════════════════════════════════════════════════════
//
//   - the problématique as a tension or paradox, the analytical and
//     comparative plan types, the transition-bilan, and the conclusion that
//     keeps the tension while earning its ouverture, are all c1.10's (« la
//     leçon 10 du C1 »); act 1 and act 6 cite it once each, by trail
//     position, never re-teaching any of it.
//   - the synthèse de documents genre's OWN rules (own words, key words but
//     not whole sentences, no personal opinion, no idea absent from the
//     dossier, a word range) are also c1.10's, taught there on a three-
//     document dossier of plain, conversational quotes; this lesson assumes
//     a learner already knows those rules and goes past them, never restating
//     them as new content.
//   - the essai sur dossier genre (a position essay from a dossier, not
//     copied) is also c1.10's; this lesson fuses it with the synthèse rather
//     than re-teaching it on its own.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. ID DISCIPLINE
// ══════════════════════════════════════════════════════════════════════════
//
//   THEME `discours-dexamen` (domain `fondations`) is already ranged c1-c2 in
//   Postgres: no widen needed (C2-BUILD-PLAN.md). This lesson owns block
//   2200-2399 AND NOTHING ELSE. c1.10 holds 1600-1799, c2.08 holds
//   1800-1999, c2.09 holds 2000-2199 (all published or claimed), none touched
//   here.
//
//   USED: .2200-.2312 (113 rows). .2313-.2399 (87 ids) left free inside the
//   claimed block for the pre-review pass, the same margin every prior C2
//   lesson in this folder keeps.
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. THE THREE-DOCUMENT DOSSIER, INVENTED FOR THE EXERCISE
// ══════════════════════════════════════════════════════════════════════════
//
//   All three documents (the institute, the sociologist, the HR director, and
//   every figure they cite) are INVENTED for this exercise, exactly as
//   c1.10's own task dossier (DOSSIER_TEXT, « l'avenir de la halle de
//   Sorbevaux ») and act 9 practice dossier (DOSSIER_ENNUI_TEXT) are. The
//   learner-facing text says so directly (SOURCE_NOTE, "Document, institut et
//   chiffres inventés pour l'exercice."), the same phrasing family c1.10
//   uses. No real statistic, institute, newspaper or person is named or
//   implied. The topic (widespread remote work, five years on) is a low-heat
//   workplace-policy debate: no health claim, no politics, no religion.
//
//   DENSITY, versus c1.10's dossier: each document here runs roughly the same
//   length as one of c1.10's three documents (84 to 96 words of body each,
//   316 words total including the "DOCUMENT N." labels, well inside the C1/C2 300-500 word reading envelope and
//   deliberately on the SHORT side of it per this lesson's own risk note:
//   the real multi-document synthesis genre can run very long, and this
//   lesson stays at three short, dense excerpts rather than full documents).
//   What raises the difficulty is register and structure, not length: each
//   document carries at least one statistic that QUALIFIES rather than
//   simply supports its own headline claim (document 1's four-point average
//   gain falls under one point for recent hires; document 2 states its cost
//   is invisible to the very productivity tables document 1 relies on;
//   document 3 reframes the whole question away from the "télétravail
//   oui/non" axis the other two seem to assume). Losing any one of these
//   qualifiers under compression is the exact fault acts 4 and 7 correct.
//
// ══════════════════════════════════════════════════════════════════════════
//  §C. WHAT IS NOT REUSED, AND WHY
// ══════════════════════════════════════════════════════════════════════════
//
//   No row is reused from c1.10 by id. c1.10 is published (v88) and resolves
//   through Postgres and the content packs, not through the local
//   `seed.json` cut this draft can read without a database connection. c1.10
//   is cited the house way instead: its REFRAME is imported by name from its
//   own corpus file and quoted verbatim (never retyped), and its trail
//   position is read straight out of `seed.json`, where all 24 C1 units
//   already carry a real `seq` (v88 publish). Every sentence in this lesson,
//   and the dossier itself, is newly authored for c2.10.
//
// ══════════════════════════════════════════════════════════════════════════
//  §D. FACT CHECK
// ══════════════════════════════════════════════════════════════════════════
//
//   REAL: nothing beyond the general, undisputed fact that remote work
//   became widespread and stayed widespread; no claim is made about any real
//   company, institute, study or statistic.
//   INVENTED: the Observatoire des mutations du travail (document 1, and
//   every figure it cites), Aminata Sow (document 2), Karim Belhadj
//   (document 3), and all three documents' content, labelled as invented in
//   the learner-facing SOURCE_NOTE. The frame-story people (Camille Vasseur,
//   Hadrien Lemoine, her tutor, Farah Benali, a fellow candidate) are
//   likewise invented.
//   LOW-HEAT TOPIC ONLY: workplace policy (remote work), no health claim, no
//   politics, no religion, no named real person, no named real company.
//   QUOTATIONS: none from any real source; every French sentence in this
//   file, including every cited dossier fragment, is original to this draft.
//
// ══════════════════════════════════════════════════════════════════════════
//  §E. HOUSE RULES APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; Hadrien (the tutor) and Camille use tu with each
//   other, matching a one-on-one coaching relationship. No em dash. No
//   U+203F tie. Never "honnête" / "honnêtement" / "honest" in any form, any
//   language. Typographic ’ throughout. French only on the learner surface;
//   English authored behind every `en` field and every trailing « EN: »,
//   never shown by default. Citations by trail position in French words
//   only (« la leçon 10 du C1 »), never a raw id.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c2.10',
  seq: 10,
  title: 'Expert Synthesis and Advanced Dissertation',
  sub: 'La synthèse experte et la dissertation avancée',
  canDo: 'Can read two to three dense sources on one topic, identify the real tension across them rather than summarising document by document, and write a single text that weighs those sources faithfully while defending a structured personal position in the same sentences, under a tight word budget',
  prereqUnitIds: ['c1.10'],
} as const;

export const LESSON_ID = 'c2.10.l1';
export const THEME = 'discours-dexamen';
export const LEVEL = 'c2' as const;

/** ONE block. c1.10 holds 1600-1799, c2.08 holds 1800-1999, c2.09 holds
 *  2000-2199, all published or claimed, none touched here. */
export const ID_RANGES = [[2200, 2399]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. HOW THIS LESSON NAMES ITS NEIGHBOUR
 *
 *  All 24 C1 units are in `seed.json` with a real `seq` (v88 publish,
 *  C1-BUILD-LOG.md), so the c1.10 citation is read straight from the seed,
 *  the same way c2.02/c2.06/c2.08 already do it.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const n = SEQ.get(unitId);
  if (!n) throw new Error(`c2.10: ${unitId} is not in the seed`);
  return `la leçon ${n} du C1`;
}

export const C110_UNIT = 'c1.10';
export const C110_REF = refFr(C110_UNIT);

export { REFRAME as C110_REFRAME, REFRAME_EN as C110_REFRAME_EN } from '../c1/dissertation-synthese-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE REFRAME AND THE ONE METAPHOR
 *
 *  PESER, PUIS TRANCHER. c1.10 handed the learner two separate tools on two
 *  separate papers: a scale that weighs sources without ever deciding (the
 *  synthèse) and an arrow that decides without ever weighing (the essai).
 *  This lesson fuses the two into one gesture, repeated at the sentence
 *  level: weigh a source, then decide, in the SAME sentence, never on two
 *  separate sheets.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Peser les sources, puis trancher, dans la même phrase.';
export const REFRAME_EN = 'Weigh the sources, then decide, in the same sentence.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Une bonne copie résume les documents dans une partie, puis donne son avis dans une autre.',
    why: `False where l’acte 1 a à tenir : c’est exactement la faute que corrige cette leçon. ${Cap(C110_REF)} enseignait la synthèse (peser, sans trancher) et l’essai (trancher, sans peser forcément sur les mêmes documents) comme deux exercices séparés ; ici, les deux tiennent dans le même texte, et souvent dans la même phrase.`,
  },
  {
    text: 'Trois documents qui ne s’accordent pas appellent forcément un plan pour ou contre.',
    why: 'False where l’acte 6 a à tenir : le dossier de cette leçon oppose trois manières de compter ce qui compte, pas un camp contre un autre ; le document 3 refuse explicitement le clivage pour/contre, et un plan dialectique forcé perdrait sa position réelle.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE DOSSIER
 * ══════════════════════════════════════════════════════════════════════════ */

export const SOURCE_NOTE = 'Document, institut et chiffres inventés pour l’exercice.';

export const DOC1_TEXT =
  'DOCUMENT 1. Note de l’Observatoire des mutations du travail (institut et chiffres inventés pour l’exercice). Sur un panel de mille quatre cents entreprises suivies depuis cinq ans, la productivité déclarée des équipes en télétravail partiel progresse de quatre points en moyenne, portée surtout par la réduction du temps de trajet et la baisse des interruptions de bureau. Ce gain se réduit cependant à moins d’un point chez les salariés arrivés depuis moins de deux ans, dont l’intégration et la montée en compétence restent, de l’aveu même des équipes concernées, plus lentes à distance. Les surfaces de bureau louées par les entreprises du panel ont, dans le même temps, reculé d’un cinquième.';

export const DOC1_TEXT_EN =
  'DOCUMENT 1. Note from the Observatory of Changing Work (institute and figures invented for the exercise). Across a panel of fourteen hundred companies tracked over five years, the self-reported productivity of partially remote teams rises by four points on average, driven mainly by reduced commuting time and fewer office interruptions. That gain falls, however, to under one point among employees hired less than two years ago, whose onboarding and skill growth remain, by the admission of the teams themselves, slower at a distance. Office space rented by the panel’s companies has, over the same period, fallen by a fifth.';

export const DOC2_TEXT =
  'DOCUMENT 2. Tribune de la sociologue Aminata Sow (nom inventé pour l’exercice), parue dans une revue professionnelle. Un bureau vide n’est jamais neutre : il déplace son coût ailleurs. Les centres-villes de taille moyenne perdent la fréquentation de midi qui faisait vivre leurs commerces, et les plus jeunes salariés, privés des conversations informelles qui transmettaient autrefois les gestes du métier, doivent désormais les redemander, un par un, au lieu de les observer. Cette transmission diffuse ne se mesure dans aucun tableau de productivité, ce qui ne l’empêche pas de coûter, à terme, bien plus cher qu’un mètre carré de bureau libéré.';

export const DOC2_TEXT_EN =
  'DOCUMENT 2. Op-ed by sociologist Aminata Sow (name invented for the exercise), published in a professional journal. An empty office is never neutral: it moves its cost elsewhere. Mid-sized city centres lose the lunchtime footfall that kept their shops alive, and the youngest employees, deprived of the informal conversations that once passed on the trade’s know-how, must now ask for it piece by piece instead of observing it. That diffuse transmission shows up in no productivity table, which does not stop it from costing, in the long run, far more than one freed-up square metre of office.';

export const DOC3_TEXT =
  'DOCUMENT 3. Entretien avec Karim Belhadj (nom inventé pour l’exercice), directeur des ressources humaines dans une entreprise de services. Ce que nos équipes redoutent n’est plus l’absence de bureau : c’est l’absence de limite. Le même outil qui autorise à travailler depuis chez soi autorise aussi à répondre à vingt-deux heures, et beaucoup finissent par le faire par anxiété plus que par choix. Nous n’opposons plus télétravail et présence : nous fixons des jours communs fixes, par équipe, et nous mesurons moins les heures que les livrables tenus. Le vrai risque n’est pas le lieu de travail, c’est la confusion entre disponibilité et performance.';

export const DOC3_TEXT_EN =
  'DOCUMENT 3. Interview with Karim Belhadj (name invented for the exercise), HR director at a services company. What our teams fear now is no longer the absence of an office: it is the absence of a limit. The same tool that allows working from home also allows answering a message at ten at night, and many end up doing so out of anxiety more than choice. We no longer set remote work against office presence: we fix common in-person days, by team, and we measure deliverables kept rather than hours logged. The real risk is not the place of work, it is the confusion between availability and performance.';

export const DOSSIER_TITLE = 'Dossier : le télétravail, cinq ans après sa généralisation.';

export const DOSSIER_FULL = `${DOSSIER_TITLE} ${SOURCE_NOTE}\n\n${DOC1_TEXT}\n\n${DOC2_TEXT}\n\n${DOC3_TEXT}`;
export const DOSSIER_FULL_EN = `${DOSSIER_TITLE.replace('Dossier', 'Dossier').replace(':', ':')} Three documents, invented for the exercise.\n\n${DOC1_TEXT_EN}\n\n${DOC2_TEXT_EN}\n\n${DOC3_TEXT_EN}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. THE MODEL TEXT
 * ══════════════════════════════════════════════════════════════════════════ */

export const MODELE_SYNTHESE_DISSERTATION =
  'Après cinq années de généralisation, le télétravail ne se laisse plus résumer par un chiffre moyen. Le document 1 avance un gain de productivité de quatre points, mais ce même document le réduit à moins d’un point chez les salariés les plus récents : la moyenne cache déjà une fracture selon l’ancienneté, pas un bénéfice uniforme. Le document 2 va plus loin : il affirme que ce qu’aucun tableau ne mesure, la transmission informelle des gestes du métier, pèse davantage, à terme, que les mètres carrés de bureau économisés. Le document 3, enfin, déplace la question : le vrai danger n’est pas le lieu de travail, mais la confusion entre disponibilité et performance, qui ronge la frontière entre les deux.\n\nCes trois sources ne s’opposent pas sur le principe du télétravail : elles s’opposent sur ce qui compte, et sur qui en porte le coût. Le document 1 raisonne en points de productivité, le document 2 en gestes non transmis, le document 3 en limites non tenues. Trancher entre « pour » et « contre » le télétravail reviendrait à choisir une seule de ces trois mesures et à ignorer les deux autres.\n\nJe défends donc une autre réponse : le télétravail doit rester un outil encadré par des règles précises, jamais un principe appliqué sans condition. Fixer des jours communs par équipe, comme le propose le document 3, répond directement au risque que nomme le document 2, car une présence commune recrée l’occasion de transmettre ce qu’un chiffre ne capte pas. Mesurer les livrables plutôt que les heures, dans le même mouvement, corrige la confusion que dénonce le document 3 sans renoncer au gain réel que mesure le document 1 pour les équipes déjà formées.\n\nReste une question que ces trois documents laissent ouverte : qui, dans une petite structure sans service de ressources humaines, fixera ces règles communes, et les fera vraiment tenir ?';

export const MODELE_SYNTHESE_DISSERTATION_EN =
  'After five years of becoming widespread, remote work no longer fits into one average figure. Document 1 claims a four-point productivity gain, but the same document reduces it to under one point for the most recently hired: the average already hides a split by seniority, not a uniform benefit. Document 2 goes further: it claims that what no table measures, the informal passing-on of trade know-how, weighs more, in the long run, than the square metres of freed office space. Document 3, finally, shifts the question: the real danger is not the place of work, but the confusion between availability and performance, which erodes the boundary between the two.\n\nThese three sources do not disagree on the principle of remote work: they disagree on what counts, and on who bears its cost. Document 1 reasons in productivity points, document 2 in untransmitted gestures, document 3 in unheld limits. Deciding between "for" and "against" remote work would mean picking only one of these three measures and ignoring the other two.\n\nI therefore defend another answer: remote work must remain a tool governed by precise rules, never a principle applied unconditionally. Fixing common in-person days per team, as document 3 proposes, answers directly the risk document 2 names, because shared presence recreates the chance to pass on what no figure captures. Measuring deliverables rather than hours, in the same move, fixes the confusion document 3 denounces without giving up the real gain document 1 measures for already-trained teams.\n\nOne question these three documents leave open remains: who, in a small structure with no HR department, will set these shared rules, and actually make them hold?';

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ROW CONSTRUCTORS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
/** Named for a deliberately flawed or incomplete claim: never released,
 *  never spoken as correct French to produce. */
const SR = ['sentence', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, tags, drills, version: 1,
  grammarPoints: ['synthese-dissertation-expertes'], ...extra,
});
const phrase = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  ...sent(n, fr, en, tags, drills, extra), kind: 'phrase',
});
/** A fragment copied word for word from the dossier (§I). Real, well-formed
 *  C2 French: FCVR by default, same convention c2.02's `cite()` uses. */
const cite = (n: number, fr: string, en: string, tags: string[]): Row =>
  sent(n, fr, en, ['citation-dossier', ...tags]);

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 1 ROWS — Le problème : un genre à part entière (2200-2209)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT1_ROWS: Row[] = [
  sent(2200, 'Camille remet deux feuilles à son tuteur : une synthèse neutre des trois documents, puis, sur une seconde feuille, son avis personnel.', 'Camille hands her tutor two sheets: a neutral synthesis of the three documents, then, on a second sheet, her personal opinion.', ['scene-probleme']),
  sent(2201, 'Hadrien pose les deux feuilles côte à côte et demande : « Où, dans cette épreuve, imagines-tu qu’on te laisse le temps d’écrire deux textes ? »', 'Hadrien lays the two sheets side by side and asks: "Where, in this exam, do you imagine you are given time to write two texts?"', ['scene-probleme']),
  sent(2202, 'Une bonne copie pèse les sources, puis tranche, dans le même texte, jamais sur deux feuilles séparées.', 'A good exam answer weighs the sources, then decides, in the same text, never on two separate sheets.', ['regle']),
  sent(2203, 'Peser sans trancher laisse un texte prudent, mais vide de position.', 'Weighing without deciding leaves a text that is careful, but empty of any position.', ['regle']),
  sent(2204, 'Trancher sans peser laisse une opinion qui ne doit rien aux documents fournis.', 'Deciding without weighing leaves an opinion that owes nothing to the documents provided.', ['regle']),
  phrase(2205, 'peser une source', 'to weigh a source', ['metalangage']),
  phrase(2206, 'trancher une position', 'to decide on a position', ['metalangage']),
  sent(2207, 'Cette leçon lit trois documents denses comme un seul dossier, puis écrit un seul texte qui les pèse et qui tranche, sous un nombre de mots serré.', 'This lesson reads three dense documents as a single dossier, then writes a single text that weighs them and decides, inside a tight word count.', ['plan']),
  sent(2208, `${Cap(C110_REF)} t’a appris à construire un plan et à écrire une synthèse de documents, mais sur deux exercices distincts, jamais fondus en un seul texte.`, 'The C1 lesson taught you to build a plan and write a document synthesis, but as two separate exercises, never fused into a single text.', ['recap']),
  sent(2209, 'Camille comprend : « Il ne s’agit pas d’écrire moins. Il s’agit d’écrire une seule chose, qui fait les deux à la fois. »', 'Camille understands: "It is not about writing less. It is about writing one single thing that does both at once."', ['scene-probleme']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 2 ROWS — Lire trois sources denses comme un seul dossier (2210-2228)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT2_ROWS: Row[] = [
  cite(2210, 'La productivité déclarée des équipes en télétravail partiel progresse de quatre points en moyenne.', 'The self-reported productivity of partially remote teams rises by four points on average.', ['doc1']),
  cite(2211, 'Ce gain se réduit cependant à moins d’un point chez les salariés arrivés depuis moins de deux ans.', 'That gain falls, however, to under one point among employees hired less than two years ago.', ['doc1', 'nuance']),
  cite(2212, 'Un bureau vide n’est jamais neutre : il déplace son coût ailleurs.', 'An empty office is never neutral: it moves its cost elsewhere.', ['doc2']),
  cite(2213, 'Cette transmission diffuse ne se mesure dans aucun tableau de productivité.', 'That diffuse transmission shows up in no productivity table.', ['doc2', 'nuance']),
  cite(2214, 'Ce que nos équipes redoutent n’est plus l’absence de bureau : c’est l’absence de limite.', 'What our teams fear now is no longer the absence of an office: it is the absence of a limit.', ['doc3']),
  cite(2215, 'Le vrai risque n’est pas le lieu de travail, c’est la confusion entre disponibilité et performance.', 'The real risk is not the place of work, it is the confusion between availability and performance.', ['doc3', 'nuance']),
  sent(2216, 'Lire trois documents comme un dossier, ce n’est pas lire le document 1, puis le document 2, puis le document 3 : c’est chercher ce qui, dans les trois, répond à la même question.', 'Reading three documents as a dossier is not reading document 1, then 2, then 3: it is looking for what, across all three, answers the same question.', ['regle']),
  sent(2217, 'La question commune ici n’est pas « pour ou contre le télétravail », mais : qu’est-ce qui compte, et qui en porte le coût.', 'The shared question here is not "for or against remote work", but: what counts, and who bears its cost.', ['regle']),
  sent(2218, 'Le document 1 compte en points de productivité ; le document 2 compte en gestes non transmis ; le document 3 compte en limites non tenues.', 'Document 1 counts in productivity points; document 2 counts in untransmitted gestures; document 3 counts in unheld limits.', ['analyse']),
  sent(2219, 'Repérer la nuance du document 1, le gain qui tombe sous un point pour les plus récents, ne suffit pas si elle disparaît ensuite du résumé.', 'Spotting document 1’s nuance, the gain falling under one point for recent hires, is not enough if it then disappears from the summary.', ['analyse']),
  phrase(2220, 'lire par enjeu', 'to read by shared stake', ['metalangage']),
  phrase(2221, 'lire document par document', 'to read document by document', ['metalangage']),
  sent(2222, 'Un dossier dense se lit une fois pour le contenu, une seconde fois pour la tension qui traverse les trois textes à la fois.', 'A dense dossier is read once for content, a second time for the tension running through all three texts at once.', ['bilan']),
  sent(2223, 'Farah propose : « Je commence par le document 1, puis le 2, puis le 3. »', 'Farah suggests: "I will start with document 1, then 2, then 3."', ['scene-analyse']),
  sent(2224, 'Camille objecte : « Mais alors tu résumes trois fois, tu ne lis jamais les trois ensemble. »', 'Camille objects: "But then you summarise three times, you never read the three together."', ['scene-analyse']),
  sent(2225, 'Farah corrige son plan : elle part désormais de la question commune, et convoque les trois documents à l’intérieur de chaque paragraphe.', 'Farah corrects her plan: she now starts from the shared question, and brings all three documents into each paragraph.', ['scene-analyse']),
  sent(2226, 'Une statistique moyenne cache souvent la sous-catégorie qui la contredit en partie.', 'An average statistic often hides the sub-category that partly contradicts it.', ['regle']),
  sent(2227, '« De l’aveu même des équipes concernées » signale, dans le document 1, que la nuance vient des équipes elles-mêmes, pas d’un chiffre extérieur.', '"By the admission of the teams themselves" signals, in document 1, that the nuance comes from the teams themselves, not an outside figure.', ['analyse']),
  sent(2228, 'Trois documents denses, lus par enjeu, donnent une seule tension à tenir, pas trois résumés séparés.', 'Three dense documents, read by shared stake, give a single tension to hold, not three separate summaries.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 3 ROWS — Tenir le fil : citer et trancher (2229-2243)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT3_ROWS: Row[] = [
  sent(2229, 'Le document 2 montre que la transmission informelle a un coût réel, ce qui m’amène à proposer des jours de présence communs par équipe.', 'Document 2 shows that informal transmission has a real cost, which leads me to propose common in-person days per team.', ['claim-correcte', 'fusion']),
  sent(2230, 'Le document 2 montre que la transmission informelle a un coût réel. Je pense par ailleurs que le télétravail devrait être limité à deux jours par semaine.', 'Document 2 shows that informal transmission has a real cost. I also think remote work should be limited to two days a week.', ['claim-plausible', 'non-fusion'], SR),
  sent(2231, 'Une phrase fondue cite un document ET prend position dans la même proposition, pas dans deux phrases qui se suivent.', 'A fused sentence cites a document AND takes a position in the same clause, not in two sentences that simply follow each other.', ['regle']),
  sent(2232, '« Ce qui m’amène à », « ce qui confirme que », « ce qui justifie » relient une citation à une décision, dans la même phrase.', '"Which leads me to", "which confirms that", "which justifies" link a citation to a decision, in the same sentence.', ['regle']),
  phrase(2233, 'une phrase fondue', 'a fused sentence', ['metalangage']),
  phrase(2234, 'un bloc synthèse, un bloc avis', 'a synthesis block, an opinion block', ['metalangage']),
  sent(2235, 'Puisque le document 3 déplace le problème vers la limite entre disponibilité et performance, mesurer les livrables plutôt que les heures règle directement ce point.', 'Since document 3 shifts the problem toward the limit between availability and performance, measuring deliverables rather than hours directly addresses that point.', ['claim-correcte', 'fusion']),
  sent(2236, 'Le document 3 déplace le problème vers la limite entre disponibilité et performance. Les livrables sont une bonne mesure, à mon avis.', 'Document 3 shifts the problem toward the limit between availability and performance. Deliverables are a good measure, in my opinion.', ['claim-plausible', 'non-fusion'], SR),
  sent(2237, 'Dans la phrase fondue, le connecteur porte tout le poids : sans lui, la citation et l’avis restent deux phrases voisines, jamais une seule.', 'In a fused sentence, the connector carries all the weight: without it, the citation and the opinion remain two neighbouring sentences, never one.', ['analyse']),
  sent(2238, 'Farah relit sa copie : « J’ai une partie qui résume, puis une partie où je donne mon avis. »', 'Farah rereads her answer: "I have one part that summarises, then one part where I give my opinion."', ['scene-analyse']),
  sent(2239, 'Camille répond : « Essaie de mettre les deux dans la même phrase, pas l’une après l’autre. »', 'Camille replies: "Try putting both in the same sentence, not one after the other."', ['scene-analyse']),
  sent(2240, 'Farah réécrit une phrase, et cette fois le document cité porte directement sa propre conclusion.', 'Farah rewrites one sentence, and this time the cited document directly carries her own conclusion.', ['scene-analyse']),
  sent(2241, 'Une phrase qui pèse et qui tranche ne se repère pas par sa longueur, mais par le connecteur qui relie la source à la décision.', 'A sentence that weighs and decides is not identified by its length, but by the connector linking the source to the decision.', ['bilan']),
  sent(2242, '« Reviendrait à » et « sans renoncer à » tiennent le même rôle : ils gardent la source visible au moment même où la phrase tranche.', '"Would amount to" and "without giving up" play the same role: they keep the source visible at the very moment the sentence decides.', ['analyse']),
  sent(2243, 'Une copie qui fond chaque phrase ne compte plus deux genres séparés, mais un seul texte qui avance d’un seul mouvement.', 'An answer that fuses every sentence no longer counts as two separate genres, but as one single text moving as one.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 4 ROWS — La compression : choisir ce qui compte (2244-2258)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT4_ROWS: Row[] = [
  sent(2244, 'La productivité déclarée des équipes en télétravail partiel progresse de quatre points en moyenne, mais ce gain se réduit à moins d’un point chez les salariés arrivés depuis moins de deux ans.', 'The self-reported productivity of partially remote teams rises by four points on average, but that gain falls to under one point among employees hired less than two years ago.', ['dense-original']),
  sent(2245, 'Le gain moyen de quatre points masque un gain proche de zéro chez les plus récents.', 'The four-point average gain hides a near-zero gain for the most recently hired.', ['compression-fidele']),
  sent(2246, 'Le télétravail augmente la productivité de quatre points.', 'Remote work increases productivity by four points.', ['compression-trahie'], SR),
  sent(2247, 'Cette transmission diffuse ne se mesure dans aucun tableau de productivité, ce qui ne l’empêche pas de coûter, à terme, bien plus cher qu’un mètre carré de bureau libéré.', 'That diffuse transmission shows up in no productivity table, which does not stop it from costing, in the long run, far more than one freed-up square metre of office.', ['dense-original']),
  sent(2248, 'Un coût invisible dans les tableaux peut peser plus, à terme, qu’une économie de bureau visible.', 'A cost invisible in the tables can weigh more, in the long run, than a visible office saving.', ['compression-fidele']),
  sent(2249, 'Le télétravail n’a aucun coût caché.', 'Remote work has no hidden cost.', ['compression-trahie'], SR),
  sent(2250, 'Compresser, c’est choisir le mot qui porte la nuance, jamais effacer la nuance pour gagner de la place.', 'Compressing means choosing the word that carries the nuance, never erasing the nuance to save space.', ['regle']),
  sent(2251, 'Une phrase trop longue se raccourcit par le choix du mot juste, pas par la suppression de ce qui gênait la moyenne.', 'An overly long sentence is shortened by choosing the right word, not by deleting whatever complicated the average.', ['regle']),
  phrase(2252, 'le chiffre qui nuance', 'the qualifying figure', ['metalangage']),
  phrase(2253, 'une compression fidèle', 'a faithful compression', ['metalangage']),
  sent(2254, '« Moins d’un point » n’est pas un détail : c’est la seule phrase qui empêche de lire un gain moyen comme un gain universel.', '"Under one point" is not a detail: it is the only phrase that stops a reader from mistaking an average gain for a universal one.', ['analyse']),
  sent(2255, 'Sous un nombre de mots serré, la première phrase sacrifiée est souvent celle qui contredit, même en partie, la phrase d’avant.', 'Under a tight word count, the first sentence sacrificed is often the one that partly contradicts the sentence before it.', ['analyse']),
  sent(2256, 'La contrainte de mots ne justifie jamais de perdre le chiffre qui nuance ; elle justifie seulement de le dire plus court.', 'A word-count constraint never justifies losing the qualifying figure; it only justifies saying it more briefly.', ['bilan']),
  sent(2257, 'Avant de couper une phrase, demande-toi : est-ce que je coupe de la longueur, ou est-ce que je coupe une idée ?', 'Before cutting a sentence, ask yourself: am I cutting length, or am I cutting an idea?', ['regle']),
  sent(2258, 'Une bonne compression tient en dix mots ce qu’une mauvaise compression perd en une phrase entière.', 'A good compression holds in ten words what a bad compression loses across a whole sentence.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 5 ROWS — Ce qu’on ne trahit jamais (2259-2270)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT5_ROWS: Row[] = [
  sent(2259, 'Trois gestes restent interdits, quelle que soit la contrainte de mots : inventer un chiffre, faire dire à un document le contraire de ce qu’il dit, ajouter une idée absente des trois sources.', 'Three moves stay forbidden, whatever the word-count constraint: inventing a figure, making a document say the opposite of what it says, adding an idea absent from all three sources.', ['regle']),
  sent(2260, 'Selon le document 1, soixante pour cent des salariés en télétravail changent d’emploi dans l’année.', 'According to document 1, sixty percent of remote employees change jobs within the year.', ['claim-plausible', 'invente'], SR),
  sent(2261, 'Le document 1 ne donne aucun chiffre sur le changement d’emploi ; il porte uniquement sur la productivité et les surfaces de bureau.', 'Document 1 gives no figure on job changes at all; it covers only productivity and office space.', ['claim-correcte']),
  sent(2262, 'Le document 3 affirme que les équipes préfèrent revenir au bureau à temps plein.', 'Document 3 states that teams prefer returning to the office full time.', ['claim-plausible', 'inverse'], SR),
  sent(2263, 'Le document 3 ne prend pas position entre bureau et télétravail ; il porte sur la confusion entre disponibilité et performance.', 'Document 3 does not take sides between office and remote work; it is about the confusion between availability and performance.', ['claim-correcte']),
  sent(2264, 'Les trois documents s’accordent pour dire que le télétravail nuit à la santé mentale.', 'All three documents agree that remote work harms mental health.', ['claim-plausible', 'ajoutee'], SR),
  sent(2265, 'Aucun des trois documents ne parle de santé mentale ; attribuer cette idée au dossier ajoute ce qu’il ne contient pas.', 'None of the three documents mentions mental health; attributing that idea to the dossier adds what it does not contain.', ['claim-correcte']),
  phrase(2266, 'inventer un chiffre', 'to invent a figure', ['metalangage']),
  phrase(2267, 'ajouter une idée absente', 'to add an absent idea', ['metalangage']),
  sent(2268, 'Attribuer chaque affirmation à son document, par son numéro, protège autant le lecteur que l’auteur de la copie.', 'Attributing every claim to its document, by number, protects the reader as much as the exam-taker.', ['regle']),
  sent(2269, 'Une position personnelle peut aller plus loin que les documents, mais jamais en leur prêtant une phrase qu’ils ne contiennent pas.', 'A personal position can go further than the documents, but never by lending them a sentence they do not contain.', ['analyse']),
  sent(2270, 'La fidélité ne se négocie pas contre la contrainte de mots : elle se tient, même la plus serrée.', 'Fidelity is never traded against a word-count constraint: it holds, even under the tightest one.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 6 ROWS — Choisir son plan pour ce dossier (2271-2282)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT6_ROWS: Row[] = [
  sent(2271, `${Cap(C110_REF)} t’a donné deux plans : le plan analytique (constat, causes, enjeux) et le plan comparatif, critère par critère.`, 'The C1 lesson gave you two plans: the analytical plan (observation, causes, stakes) and the comparative plan, criterion by criterion.', ['recap']),
  sent(2272, 'Ce dossier ne pose pas une question pour ou contre : un plan dialectique forcerait une opposition que les trois documents ne tiennent pas.', 'This dossier does not pose a for-or-against question: a dialectical plan would force an opposition the three documents do not actually hold.', ['regle']),
  sent(2273, 'Un plan comparatif, ici, compare non pas « télétravail » et « bureau », mais trois manières de compter ce qui compte : en points, en gestes, en limites.', 'A comparative plan here compares not "remote work" against "office", but three ways of counting what counts: in points, in gestures, in limits.', ['analyse']),
  sent(2274, 'Un plan analytique, ici, part du constat, une moyenne qui cache une fracture, remonte aux causes, ancienneté, transmission informelle, confusion des limites, et ouvre sur l’enjeu : qui fixera les règles.', 'An analytical plan here starts from the observation, an average hiding a split, traces the causes, seniority, informal transmission, confused limits, and opens onto the stake: who will set the rules.', ['analyse']),
  phrase(2275, 'un critère de comparaison', 'a basis for comparison', ['metalangage']),
  phrase(2276, 'l’enjeu du dossier', 'the dossier’s real stake', ['metalangage']),
  sent(2277, 'Le bon plan n’est pas celui que le sujet préférerait ; c’est celui que la tension réelle entre les trois documents rend possible.', 'The right plan is not the one the topic would prefer; it is the one the real tension among the three documents makes possible.', ['regle']),
  sent(2278, 'Hadrien demande à Camille : « Ton plan vient-il du sujet, ou des trois documents que tu as sous les yeux ? »', 'Hadrien asks Camille: "Does your plan come from the topic, or from the three documents in front of you?"', ['scene-analyse']),
  sent(2279, 'Camille répond : « Des trois documents. Un plan pour ou contre aurait forcé le document 3 à choisir un camp qu’il refuse. »', 'Camille answers: "From the three documents. A for-or-against plan would have forced document 3 to pick a side it refuses."', ['scene-analyse']),
  sent(2280, 'Choisir un plan, à ce niveau, c’est d’abord refuser le plan qui simplifierait une tension que le dossier ne simplifie pas lui-même.', 'Choosing a plan, at this level, means first refusing the plan that would simplify a tension the dossier does not simplify itself.', ['bilan']),
  sent(2281, 'Le document 3 refuse justement le clivage pour/contre : son plan, forcé dans une dissertation dialectique, perdrait sa position réelle.', 'Document 3 precisely refuses the for-or-against divide: forced into a dialectical dissertation plan, it would lose its real position.', ['analyse']),
  sent(2282, 'Un plan mal choisi ne se corrige pas par de meilleures phrases : il se corrige en remontant au dossier lui-même.', 'A badly chosen plan is not fixed with better sentences: it is fixed by going back to the dossier itself.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 7 ROWS — Le piège : la moitié manquante (2283-2292)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT7_ROWS: Row[] = [
  sent(2283, 'Les trois documents comptent différemment ce qui compte : en points, en gestes, en limites.', 'The three documents count what counts differently: in points, in gestures, in limits.', ['piege-synthese-seule'], SR),
  sent(2284, 'Le télétravail doit être limité à deux jours par semaine, et c’est une évidence.', 'Remote work must be limited to two days a week, and that is obvious.', ['piege-avis-seul'], SR),
  sent(2285, 'Le document 1 dit ceci, le document 2 dit cela, le document 3 dit encore autre chose.', 'Document 1 says this, document 2 says that, document 3 says yet another thing.', ['piege-liste'], SR),
  sent(2286, 'Je pense que le télétravail est globalement positif pour tout le monde, dans toutes les équipes.', 'I think remote work is broadly positive for everyone, in every team.', ['piege-avis-seul'], SR),
  sent(2287, 'Ces trois documents montrent bien la complexité du sujet.', 'These three documents certainly show the complexity of the topic.', ['piege-vide'], SR),
  sent(2288, 'Le remède à chacun de ces cinq pièges est le même : relire sa phrase et chercher si elle pèse ET si elle tranche, les deux à la fois.', 'The remedy for each of these five traps is the same: reread the sentence and check whether it weighs AND whether it decides, both at once.', ['regle']),
  sent(2289, 'Farah relit sa conclusion : « Ces trois documents montrent bien la complexité du sujet. » Elle s’arrête : « Mais je ne dis rien. »', 'Farah rereads her conclusion: "These three documents certainly show the complexity of the topic." She stops: "But I am not saying anything."', ['scene-analyse']),
  sent(2290, 'Camille lui montre où ajouter la décision qui manque, sans retirer un seul document déjà cité.', 'Camille shows her where to add the missing decision, without removing a single document already cited.', ['scene-analyse']),
  sent(2291, 'La moitié manquante ne se voit pas toujours : une copie qui pèse beaucoup peut sembler complète, en ne tranchant jamais.', 'The missing half is not always visible: an answer that weighs a great deal can look complete while never deciding anything.', ['bilan']),
  sent(2292, 'Avant de rendre sa copie, compte : chaque document a-t-il été pesé, et la position a-t-elle vraiment été tranchée ?', 'Before handing in an answer, count: has every document been weighed, and has the position really been decided?', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 8 ROWS — Ta synthèse-dissertation (2293-2312)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT8_ROWS: Row[] = [
  sent(2293, 'Lis les trois documents une fois pour le contenu, une seconde fois pour la question commune qu’ils posent tous.', 'Read the three documents once for content, a second time for the shared question they all pose.', ['plan']),
  sent(2294, 'Choisis un plan que la tension réelle rend possible, jamais celui que le sujet préférerait.', 'Choose a plan the real tension makes possible, never the one the topic would prefer.', ['plan']),
  sent(2295, 'Fonds chaque phrase : cite un document, puis tranche, dans la même proposition.', 'Fuse every sentence: cite a document, then decide, in the same clause.', ['plan']),
  sent(2296, 'Compte tes mots en écrivant, pas à la fin : coupe la longueur, jamais le chiffre qui nuance.', 'Count your words as you write, not at the end: cut length, never the qualifying figure.', ['plan']),
  sent(2297, 'Puisque le document 2 chiffre un coût invisible dans les tableaux, je refuse de juger la productivité par un seul indicateur.', 'Since document 2 names a cost invisible in the tables, I refuse to judge productivity by a single indicator.', ['usage']),
  sent(2298, 'Comme le document 3 déplace le problème vers la limite plutôt que le lieu, je mesure la réussite par les livrables tenus.', 'Since document 3 shifts the problem toward the limit rather than the place, I measure success by deliverables kept.', ['usage']),
  sent(2299, 'Parce que le document 1 et le document 2 comptent deux coûts différents, je refuse de choisir entre eux et je propose une règle qui répond aux deux.', 'Because document 1 and document 2 count two different costs, I refuse to choose between them and propose one rule that answers both.', ['usage']),
  sent(2300, 'Avant de conclure, je relis chaque phrase et je vérifie qu’elle pèse une source ET qu’elle tranche une position.', 'Before concluding, I reread every sentence and check that it weighs a source AND decides a position.', ['usage']),
  sent(2301, 'Puisque le document 1 montre un gain moyen qui tombe sous un point pour les plus récents, je refuse d’emblée toute lecture univoque du télétravail.', 'Since document 1 shows an average gain falling under one point for recent hires, I refuse from the outset any single-sided reading of remote work.', ['scenario-reponse']),
  sent(2302, 'Je préfère ouvrir sur le document 2, parce que son idée, un coût invisible dans les tableaux, cadre directement ma position finale.', 'I would rather open on document 2, because its idea, a cost invisible in the tables, directly frames my final position.', ['scenario-alt']),
  sent(2303, 'Je commence plutôt par le document 3, car sa reformulation du problème, la limite plutôt que le lieu, oriente tout le reste de mon plan.', 'I would rather start with document 3, because its reframing of the problem, the limit rather than the place, shapes the rest of my plan.', ['scenario-alt']),
  sent(2304, 'Ma position tient sur les trois documents à la fois : je fixe des jours communs contre le coût du document 2, et je mesure les livrables contre la confusion du document 3.', 'My position holds on all three documents at once: I fix common days against document 2’s cost, and I measure deliverables against document 3’s confusion.', ['scenario-reponse']),
  sent(2305, 'Je construis plutôt un plan comparatif : trois manières de compter ce qui compte, puis la règle commune qui répond aux trois en même temps.', 'I would rather build a comparative plan: three ways of counting what counts, then the shared rule that answers all three at once.', ['scenario-alt']),
  sent(2306, 'Je pars du constat d’une moyenne qui cache une fracture, je remonte aux causes dans les trois documents, puis j’ouvre sur qui fixera la règle.', 'I start from the observation of an average hiding a split, trace the causes across the three documents, then open onto who will set the rule.', ['scenario-alt']),
  sent(2307, 'Une synthèse-dissertation pèse trois sources denses et tranche une position, dans le même texte, sous un nombre de mots serré.', 'A synthesis-dissertation weighs three dense sources and decides a position, in the same text, under a tight word count.', ['bilan']),
  sent(2308, 'Avant l’examen, reprends un dossier déjà annoté et vérifie, phrase par phrase, que chacune pèse une source et tranche une position.', 'Before any exam, take a dossier you have already annotated and check, sentence by sentence, that each one weighs a source and decides a position.', ['bilan']),
  phrase(2309, 'une copie fondue', 'a fused exam answer', ['metalangage']),
  phrase(2310, 'la contrainte de mots', 'the word-count constraint', ['metalangage']),
  sent(2311, 'Le fil qui tient ce dossier n’est pas « pour ou contre », mais ce qui compte, et qui en porte le coût.', 'The thread holding this dossier together is not "for or against", but what counts, and who bears its cost.', ['bilan']),
  sent(2312, `Trois documents, une tension, un texte qui pèse et qui tranche : voilà ce que cette leçon ajoute à ${C110_REF}.`, 'Three documents, one tension, one text that weighs and decides: that is what this lesson adds to the C1 lesson.', ['bilan']),
];

export const ROWS_BY_ACT: Row[][] = [ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS, ACT7_ROWS, ACT8_ROWS];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** No row is reused from another lesson in this draft (§C above): every act
 *  imports nothing. Kept as an export so the lesson file’s assembly code is
 *  identical in shape to every other B1+/C1/C2 lesson. */
export const IMPORTED: Record<string, string[]> = {
  act1: [], act2: [], act3: [], act4: [], act5: [], act6: [], act7: [], act8: [],
};
export const IMPORT_IDS: string[] = [...new Set(Object.values(IMPORTED).flat())];

/** Every row whose `drills` carries no `flashcard`: the deliberately flawed
 *  or incomplete claims a learner must never be quizzed on as if they were
 *  the correct French to produce. */
export const NOT_DECK_ABLE: string[] = ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id);
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];
