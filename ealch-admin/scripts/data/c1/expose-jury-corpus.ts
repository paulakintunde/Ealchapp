// c1.09.l1 « L’exposé et le jury » · the authored corpus, the imports, the
// long texts and the citation constants. DRAFT, to B1-WORKSHOP-AND-VOCAB-
// SHAPES.md §1 (the workshop shape, amended §1.4) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (« What is
// different at C1 », decisions 13, 16 and 19) and this lesson's section of
// C1-RESEARCH-PLAN.md. Structural model: b2.26 « Réunions et négociations »
// (../b2/reunions-negociation-*), whose file layout, helpers, act loop and
// SPOKEN task shape it copies.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may quote the reframe; do not rename):
// REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   FORMAL ORAL PRODUCTION AT C1: THE EXPOSÉ FROM A DOSSIER, THEN ITS
//   DEFENCE BEFORE A JURY (research plan, « Ownership »: c1.09 owns formal
//   production, c1.21 debate listening, c1.23 meetings). The unit of
//   teaching is a MOVE the candidate makes aloud:
//
//     act 1   the problem: a faithful summary is not an exposé; the recap
//             of B2 lessons 22, 23, 25 and 26 in ONE card; the task announced
//     act 2   the exposé as a SPOKEN genre: announce, repeat the key line,
//             address the jury, refer back aloud (not a written text read)
//     act 3   reading a dossier: genre, voice, thesis; where documents meet
//             (se rejoindre sur, aller dans le même sens) and part
//             (prendre le contre-pied de)
//     act 4   synthesis aloud: reporting verbs that carry a stance
//             (souligner, avancer, mettre en garde contre, soutenir),
//             attribution without redundancy, the calques insister que /
//             souligner comment
//     act 5   the spoken problématique (dès lors, on peut se demander si ;
//             toute la question est de savoir ; la question n’est pas tant
//             de… que de…) and the indirect question it needs
//     act 6   holding the plan aloud: spoken signposts, time management,
//             the oral conclusion that restates the question, the ouverture,
//             handing over to the jury
//     act 7   the formal floor toward a jury: vous, reformulating the
//             question, asking for a precision, answering first
//     act 8   buying time under questioning without filling the silence;
//             not knowing without inventing; meeting-room anglicisms
//     act 9   conceding in public without losing the thesis: concede the
//             point, narrow the scope, maintain
//     act 10  when the jury pushes: outside the dossier, the personal view,
//             the hypothesis, the false dilemma; B2 moods under load
//     act 11  closing the entretien
//     act 12  the model exposé (another dossier), the plan, the jury
//             scenario, THE TASK (spoken, 180 to 300 s), the quiz
//
//   NOT OWNED, CITED BY TRAIL POSITION ONLY, never re-taught:
//     - « la leçon 23 du B2 » (b2.23) owns the WRITTEN introduction (amorce,
//       problématique, thèse or annonce du plan), the conclusion (bilan,
//       answer, ouverture), the dialectical and thematic plans, concession
//       then rebuttal (certes… mais, il n’en reste pas moins que). Act 1
//       recaps it; act 5 goes past it to the problématique SAID ALOUD.
//     - « la leçon 22 du B2 » (b2.22) owns announcing and following a plan
//       in writing (en premier lieu, il convient de). Recapped in act 1.
//     - « la leçon 25 du B2 » (b2.25) owns hearing an announced plan.
//       Recapped in act 1.
//     - « la leçon 26 du B2 » (b2.26) owns the meeting floor (si je peux me
//       permettre, si je vous suis bien, je ne partage pas tout à fait votre
//       analyse, récapituler). Recapped in act 1; act 7 moves from the
//       meeting table to a jury.
//     - « la leçon 21 du C1 » (c1.21, live) owns debate LISTENING, including
//       hearing « je ne dis pas que…, je dis que… », « tout dépend de ce
//       qu’on met derrière le mot » and « il faut distinguer deux choses ».
//       Those rows are REUSED by id here, where the learner says them.
//     - « la leçon 6 du B2 » owns indicative vs subjunctive; act 10 only
//       recycles it under load.
//     - Wave-mates, deliberately NOT authored here: closure markers (somme
//       toute, tout bien considéré, en guise de conclusion) and reframing
//       markers (ou plutôt, j’entends par là): c1.07. Hedges (si je ne
//       m’abuse, loin de moi l’idée, sans vouloir): c1.06. « On m’objectera
//       que », prétérition, ethos / logos / pathos: c1.08. None is cited.
//
//   NO UNGRAMMATICAL OR CALQUED SENTENCE IS EVER A ROW. Every wrong form
//   lives in a `commonErrors.wrong`, a `trapDrill.promptSound`, a scene
//   `break.wrong`, a groupDrill `free()` quotation or a quiz
//   `errorSpot.prompt`. Weak but grammatical lines (a problématique the
//   dossier already answers) ARE rows, tagged `faible`, and always shown as
//   weak, never as wrong.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED. Postgres read 2026-10-01, read-only, inside
//      BEGIN TRANSACTION READ ONLY … COMMIT (no plain SET).
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `discours-dexamen` (« Le discours d'examen », education, c1-c2,
//     exam). Its sub_themes read back as ["faire le point sur sa grammaire",
//     "suivre un débat à l'oral", "l'exposé et le jury"]. These rows carry
//     the third.
//
//  2. ID BLOCK: `fr.c1.discours-dexamen.1200`-`.1399`, claimed in the C1
//     build log ledger for c1.09. Probed 2026-10-01: 0 rows in 1200-1399 at
//     ANY level of the theme. Used: `.1200`-`.1361`, 162 rows, no gaps (§G).
//     `.1362`-`.1399` free for fixes.
//
//  3. REUSED ROWS (all `published` in Postgres, read 2026-10-01):
//     - act 1 recap: 13 rows of b2.22, b2.23, b2.25 and b2.26, all in
//       seedPlusPacks(), fr identical in both.
//     - c1.21's rows `.1409` (diverger sur), `.1437`, `.1452`, `.1461`,
//       `.1462`, `.1465`: in seedPlusPacks(). b2.23's `une objection`,
//       `une ouverture`, `une transition`, `le faux dilemme`: in
//       seedPlusPacks().
//     - THE LEGACY STOCK, discours-dexamen .001-.165 (Speak stage 6.5):
//       read in full, all 165. Five sit in seedPlusPacks() (.067, .098,
//       .142, .150, .161); this lesson reuses .098, .142 and .161 from there.
//       The other 18 reused here are Postgres-only, so their fr / en /
//       drills are copied VERBATIM into `PG_ROWS` and `src()` reads them
//       there (as c1.20's PG_ROWS). All carry {sentence, review} only, no
//       ipa, no respell: NOT_DECK_ABLE and NOT_SPEAKABLE, named in
//       groupDrills and examples, never released, never in a scenario.
//       STRAIGHT APOSTROPHES (decision 13, typography edit at import): .014,
//       .020, .025, .045, .064, .065, .066, .075, .087, .122, .132, .134
//       (12 rows). No apostrophe at all: .049, .050, .072, .128, .149, .155.
//       The three seed rows (.098, .142, .161) already carry ’ or none. None has a space problem before « ? ».
//       One carries a gendered form (.049 « prêt »): named, never said by the
//       learner in a scenario.
//     - REJECTED on reading: .145 (a real Vancouver house price), .017
//       (protecting French at work, a sensitive Québec topic), .006
//       (immigration), .054 and .105 (a comma splice before a question,
//       « je conclurai par une question, sommes-nous… »), .003, .018,
//       .021, .024, .034, .057 and every other row that joins two clauses
//       with a comma where a colon is needed; .009 (« au delà » without its
//       hyphen); .129, .133, .135, .153, .157, .162 (real provinces, real
//       events presented as facts); .040 (screens at school, a heated
//       topic); .084 and .088 (stock grandiloquence the lesson would have
//       to call weak).
//
//  4. HEADWORDS. Every new row was checked against all 62,786 Postgres rows
//     (normalised fr, scratch twin check, 2026-10-01): zero exact twins.
//     Headwords Postgres already has are REUSED, never re-authored: un
//     exposé (fr.b1.disciplines.050, Postgres-only, not used), le jury, la
//     synthèse, la thèse, une objection, une ouverture, une transition,
//     une amorce, la problématique, le faux dilemme, diverger sur, tout
//     dépend de ce qu’on met derrière le mot.
//
//  5. APOSTROPHES. Every authored French string uses the typographic
//     apostrophe (’). Reused seed rows of b2.22, b2.25 and c1.21 and the
//     legacy rows carry the straight one, so NO reused row is ever used in a
//     scenario (scenario.logic refuses mixed styles).
//
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR, the
//     consonant really pronounced, written double so `hasPlainNasal` cannot
//     fire: « comme » KOMM, « agronome » a-gro-NOMM, « problème »
//     pro-BLEHMM, « bonne » BONN, « donne » DONN, « amène » a-MEHNN,
//     « dilemme » dee-LEHMM. « même » is MEM (b2.26's spelling). « faille »
//     is FAÏ. No U+203F tie anywhere.
//
//  7. FACT CHECK (for the pre-review).
//     a. THE EXAM FORMAT. The task, the scenario, the terms and the sheets
//        describe THE APP’S OWN FORMAT (« le format de l’application »): an
//        exposé of three to five minutes from a printed dossier, then
//        scripted jury questions rehearsed in a scenario. No exam is named
//        on any learner surface, and no timing, score or structure of any
//        real exam is stated. The term « le format » and sheet-format say
//        the format is the app’s own and send the learner to the official
//        instructions of a real exam.
//        CHECKED 2026-10-01: france-education-international.fr returned
//        403 to the fetcher (twice), so the DALF numbers could NOT be
//        verified at the source. Secondary sources (Sorbonne Université's
//        DALF C1 descriptif, GlobalExam) agree on: production orale =
//        exposé from several written documents, then an entretien with the
//        jury; 1 h preparation; 30 min passation; scored /25; exposé about
//        8-10 min, entretien about 15-20 min. NONE of these numbers is in
//        the lesson. Paul: verify at FEI before any number is added.
//     b. Every person, town, institute, company and figure is INVENTED:
//        Institut Verlune (house invention), Sainte-Albine and its forty
//        gardens, the jardin des Tilleuls, the 300-name waiting list,
//        Mireille Kassab, Paul-Henri Desgranges, Hélène Rocheval, Yannick
//        Aubertin, Sophie Marchetti, Nora, Théo, the Réseau ferroviaire de
//        l’Estuaire, Gaël Morin, Anne-Sophie Varenne, Lucie Fortier,
//        Bertrand Ollivier. Every text is « texte original écrit pour la
//        leçon »; no quotation from any published text.
//     c. Plausibility claims put in invented speakers’ mouths (to check they
//        read as the speaker’s claim and are not false as stated): a
//        weekend parcel « ne nourrira jamais une famille », and a city’s
//        shared gardens « ne pèsent presque rien » against what it consumes
//        (Desgranges, an opinion column); quiet carriages make passengers
//        lower their voices (an invented operator’s communiqué).
//     d. The anglicisms of act 8 (faire du sens for « avoir du sens », basiquement,
//        définitivement for « assurément », adresser une question for
//        « traiter », revenir à quelqu’un for « revenir vers », « comme une question de fait »
//        for « en fait »): check each against Académie « Dire, ne pas dire »
//        and the OQLF BDL. « Insister que » and « souligner comment »
//        (act 4) against the same.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.09',
  seq: 9,
  title: 'The Exposé and the Jury',
  sub: 'L’exposé et le jury',
  canDo: 'Can deliver a structured spoken exposé of three to five minutes from a dossier of documents, presenting them in synthesis rather than one by one, stating a spoken problématique and a plan and holding to them aloud; can then defend the exposé before a jury: take the floor formally, reformulate a question, buy time without filling the silence, admit what one does not know, concede a point in public without abandoning the thesis, handle questions outside the dossier and close the exchange',
  prereqUnitIds: ['b2.26', 'b2.23'],
} as const;

export const LESSON_ID = 'c1.09.l1';
export const THEME = 'discours-dexamen';
export const LEVEL = 'c1' as const;

/** ONE block, claimed in the C1 build log ledger. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;
/** The legacy Speak stock of the same theme (.001-.165), Postgres first. */
export const LEG = (n: number) => `fr.c1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  By trail position, in French words, never a raw unit id. Positions read
 *  from each lesson file's tag: b2.06 « B2 · LEÇON 6 », b2.22 « LEÇON 22 »,
 *  b2.23 « LEÇON 23 », b2.25 « LEÇON 25 », b2.26 « LEÇON 26 », c1.21
 *  « C1 · LEÇON 21 » (live since v85).
 * ══════════════════════════════════════════════════════════════════════════ */

const SEQ_FROM_TAG: Record<string, number> = {
  'b2.06': 6, 'b2.22': 22, 'b2.23': 23, 'b2.25': 25, 'b2.26': 26, 'c1.21': 21,
};
/** « la leçon 26 du B2 »: French surfaces. */
export function refFr(unitId: string): string {
  const n = SEQ_FROM_TAG[unitId];
  if (!n) throw new Error(`c1.09: no trail position for ${unitId}`);
  return `la leçon ${n} du ${unitId.slice(0, 2).toUpperCase()}`;
}
/** « lesson 26 in B2 »: English surfaces (userEn, briefEn, grader notes). */
export function refEn(unitId: string): string {
  const n = SEQ_FROM_TAG[unitId];
  if (!n) throw new Error(`c1.09: no trail position for ${unitId}`);
  return `lesson ${n} in ${unitId.slice(0, 2).toUpperCase()}`;
}

export const REUNION_UNIT = 'b2.26';
export const ARGUMENTATION_UNIT = 'b2.23';
export const ACADEMIQUE_UNIT = 'b2.22';
export const ECOUTE_UNIT = 'b2.25';
export const MODES_UNIT = 'b2.06';
export const DEBATS_UNIT = 'c1.21';

export const REUNION_REF = refFr(REUNION_UNIT);
export const ARGUMENTATION_REF = refFr(ARGUMENTATION_UNIT);
export const ACADEMIQUE_REF = refFr(ACADEMIQUE_UNIT);
export const ECOUTE_REF = refFr(ECOUTE_UNIT);
export const MODES_REF = refFr(MODES_UNIT);
export const DEBATS_REF = refFr(DEBATS_UNIT);
export const ARGUMENTATION_REF_EN = refEn(ARGUMENTATION_UNIT);
export const REUNION_REF_EN = refEn(REUNION_UNIT);
export const DEBATS_REF_EN = refEn(DEBATS_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE THREAD (le fil). An exposé lives or dies on ONE question drawn from
 *  the dossier. The synthesis (acts 3-4) is chosen for it, the problématique
 *  (act 5) states it, the plan (act 6) carries it; and every answer to the
 *  jury (acts 7-11) leads back to it: a reformulation checks the question
 *  against the thread, a concession narrows what the thread claims without
 *  cutting it, the closing sentence ties the thread off.
 *
 *  It is NOT « never give way » (act 9 teaches the real concession) and NOT
 *  « résume bien les documents » (act 1's scene is a faithful summary that
 *  fails).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Pose une vraie question, puis tiens ton fil : chaque réponse au jury y ramène.';
export const REFRAME_EN = 'Ask a real question, then hold your thread: every answer to the jury leads back to it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Résume fidèlement chaque document.',
    why: 'Act 1’s scene is exactly that, and it fails: a faithful document-by-document summary has no question, so the jury hears four minutes without a point. Fidelity is a floor, not the exposé.',
  },
  {
    text: 'Ne cède jamais devant le jury.',
    why: 'False where act 9 has to hold: the objection about the waiting list is right, and the C1 move is to concede it and narrow the claim. A candidate who never concedes sounds deaf, one who abandons sounds empty; the thread is what lets you concede without either.',
  },
  {
    text: 'Annonce ton plan et suis-le.',
    why: '« La leçon 22 du B2 »’s rule for writing, true but recapped only. It says nothing about the dossier, the question or the jury, which are what this lesson adds.',
  },
  {
    text: 'Prends position, prouve-la, et réponds à ceux qui pensent le contraire.',
    why: '« La leçon 23 du B2 »’s reframe, quoted in act 1. At C1 the position comes out of a dossier the candidate did not choose, and the people « who think the opposite » are a jury sitting in front of you, asking questions, not texts to rebut.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Act 1: the recap rows of b2.22, b2.23, b2.25 and b2.26 (seed). From act
 *  2 on: the legacy discours-dexamen stock (openings, plan, examples,
 *  closings), c1.21's production-ready rows, b2.23's headwords. Every id
 *  was read on 2026-10-01; the French is in the trailing comment.
 * ══════════════════════════════════════════════════════════════════════════ */

const B2O = (n: number) => `fr.b2.opinions-et-avis.${n}`;
const B2U = (n: number) => `fr.b2.universite.${n}`;
const B2S = (n: number) => `fr.b2.strategies-de-comprehension.${n}`;
const B2A = (n: number) => `fr.b2.affaires.${n}`;

export const IMPORTED = {
  act1: [
    B2O(1723),                   // la problématique
    B2O(1726),                   // Amorcer, poser la question, puis donner sa thèse ou annoncer le plan.
    B2O(1742),                   // Pour ou contre : un plan dialectique. Quels effets, quelles causes : un plan thématique.
    B2O(1612),                   // Prends position, prouve-la, et réponds à ceux qui pensent le contraire.  (b2.23's reframe)
    B2U(1040),                   // l'annonce du plan
    B2U(1032),                   // Nous examinerons en premier lieu les avantages de l'ordinateur.
    B2U(1043),                   // Annonce ton plan, puis suis-le dans l'ordre annoncé.
    B2S(1614),                   // Je vais procéder en trois temps.
    B2S(1618),                   // J'en viens maintenant à mon deuxième point.
    B2A(1237),                   // si je peux me permettre
    B2A(1263),                   // si je vous suis bien
    B2A(1273),                   // je ne partage pas tout à fait votre analyse
    B2A(1371),                   // récapituler les décisions
  ],
  act2: [
    LEG(64),                     // Permettez-moi tout d'abord de situer brièvement le sujet.
  ],
  act3: [
    E(1409),                     // diverger sur  (c1.21)
    LEG(98),                     // Il me paraît essentiel de distinguer d’emblée deux réalités que l’on confond souvent.
  ],
  act4: [] as string[],
  act5: [
    LEG(75),                     // Il convient d'abord de délimiter le champ du débat.
    LEG(122),                    // Pour amorcer la discussion, je voudrais d'abord m'arrêter sur les termes mêmes du sujet qui nous est proposé.
  ],
  act6: [
    LEG(65),                     // Mon exposé s'articulera autour de trois axes principaux.
    LEG(87),                     // Je compte structurer ma réponse en deux parties, suivies d'une brève ouverture.
    LEG(66),                     // J'en viens à présent au cœur du sujet.
    LEG(72),                     // Venons-en à présent au deuxième axe de ma réflexion.
    LEG(14),                     // Récapitulons brièvement les trois axes que j'ai développés.
    LEG(25),                     // Pour ne pas allonger inutilement mon propos, je m'en tiendrai à cette dernière remarque.
    B2O(1739),                   // une transition
    B2O(1725),                   // une ouverture
  ],
  act7: [] as string[],
  act8: [
    E(1452),                     // Il faut distinguer deux choses.  (c1.21)
  ],
  act9: [
    B2O(1712),                   // une objection
    E(1462),                     // Je ne dis pas qu'on crée moins chez soi ; je dis que les idées nouvelles naissent moins en visioconférence.  (c1.21)
    E(1461),                     // Je soutiens quelque chose de plus étroit.  (c1.21)
    LEG(142),                    // Certes, les chiffres semblent encourageants, mais ils masquent de fortes disparités régionales.
    LEG(161),                    // Cette statistique, je le concède, ne dit rien des réalités vécues sur le terrain.
    LEG(128),                    // Il convient toutefois de nuancer ce constat, car la réalité est bien plus complexe.
    LEG(149),                    // Cette réussite repose, précisons-le, sur un contexte économique très particulier.
  ],
  act10: [
    B2O(1773),                   // le faux dilemme  (b2.23's fallacy, named here as a jury move)
    E(1437),                     // Tout dépend de ce qu'on met derrière le mot.  (c1.21)
    E(1465),                     // Ne me faites pas dire ce que je n'ai pas dit.  (c1.21)
    LEG(132),                    // Il serait réducteur de voir dans ce phénomène une simple question d'argent.
    LEG(134),                    // Gardons-nous cependant de tirer des conclusions hâtives à partir d'un seul sondage.
    LEG(155),                    // Cette solution, aussi séduisante soit-elle, se heurte à des obstacles financiers considérables.
  ],
  act11: [
    LEG(49),                     // Je vous remercie de votre attention et me tiens prêt à répondre à vos questions.
    LEG(50),                     // Reste une interrogation en suspens, que je laisse volontiers à votre réflexion.
    LEG(20),                     // Au vu de l'ensemble des arguments avancés, ma position reste favorable, mais prudente.
    LEG(45),                     // Ainsi s'achève mon exposé, mais le débat, lui, ne fait que commencer.
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** The legacy rows ABSENT from the seed cut, copied VERBATIM from Postgres
 *  on 2026-10-01 (status published, drills {sentence, review}). Straight
 *  apostrophes kept as published (decision 13: typography edit at import).
 *  `src()` in the lesson falls back to these. */
export const PG_ROWS: Record<string, { id: string; fr: string; en: string; drills: string[] }> = Object.fromEntries(([
  [LEG(14), "Récapitulons brièvement les trois axes que j'ai développés.", 'Let us briefly recap the three main points I have developed.'],
  [LEG(20), "Au vu de l'ensemble des arguments avancés, ma position reste favorable, mais prudente.", 'Given all the arguments presented, my position remains favourable, but cautious.'],
  [LEG(25), "Pour ne pas allonger inutilement mon propos, je m'en tiendrai à cette dernière remarque.", 'So as not to drag out my remarks unnecessarily, I will limit myself to this final comment.'],
  [LEG(45), "Ainsi s'achève mon exposé, mais le débat, lui, ne fait que commencer.", 'Thus ends my presentation, but the debate itself is only beginning.'],
  [LEG(49), 'Je vous remercie de votre attention et me tiens prêt à répondre à vos questions.', 'I thank you for your attention and stand ready to answer your questions.'],
  [LEG(50), "Reste une interrogation en suspens, que je laisse volontiers à votre réflexion.", 'One question remains unresolved, which I gladly leave for you to ponder.'],
  [LEG(64), "Permettez-moi tout d'abord de situer brièvement le sujet.", 'Allow me first of all to briefly set out the topic.'],
  [LEG(65), "Mon exposé s'articulera autour de trois axes principaux.", 'My presentation will be organized around three main lines.'],
  [LEG(66), "J'en viens à présent au cœur du sujet.", 'I now come to the heart of the subject.'],
  [LEG(72), 'Venons-en à présent au deuxième axe de ma réflexion.', 'Let us now come to the second focus of my analysis.'],
  [LEG(75), "Il convient d'abord de délimiter le champ du débat.", 'We should first define the boundaries of the debate.'],
  [LEG(87), "Je compte structurer ma réponse en deux parties, suivies d'une brève ouverture.", 'I intend to structure my answer in two parts, followed by a brief broader perspective.'],
  [LEG(122), "Pour amorcer la discussion, je voudrais d'abord m'arrêter sur les termes mêmes du sujet qui nous est proposé.", 'To get the discussion started, I would first like to dwell on the very wording of the topic we are given.'],
  [LEG(128), 'Il convient toutefois de nuancer ce constat, car la réalité est bien plus complexe.', 'That said, this observation needs some qualifying, because the reality is far more complex.'],
  [LEG(132), "Il serait réducteur de voir dans ce phénomène une simple question d'argent.", 'It would be simplistic to see this phenomenon as merely a question of money.'],
  [LEG(134), "Gardons-nous cependant de tirer des conclusions hâtives à partir d'un seul sondage.", 'Let us be careful, however, not to draw hasty conclusions from a single poll.'],
  [LEG(149), 'Cette réussite repose, précisons-le, sur un contexte économique très particulier.', 'This success rests, let us be clear, on a very particular economic context.'],
  [LEG(155), 'Cette solution, aussi séduisante soit-elle, se heurte à des obstacles financiers considérables.', 'This solution, however appealing it may be, runs up against considerable financial obstacles.'],
] as const).map(([id, fr, en]) => [id, { id, fr, en, drills: ['sentence', 'review'] }]));

/** No `flashcard` drill: nameable, never releasable. The legacy rows
 *  (Postgres-only and the three in the seed) carry {sentence, review}. */
export const NOT_DECK_ABLE: string[] = [...Object.keys(PG_ROWS), LEG(98), LEG(142), LEG(161)];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE: string[] = [
  ...NOT_DECK_ABLE,
  B2O(1726),                     // flashcard only (a rule card)
  B2O(1742),                     // flashcard only (a rule card)
  B2O(1612),                     // flashcard only (b2.23's reframe)
  B2U(1043),                     // flashcard only (a rule card)
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: the moves a candidate
 *  says aloud (dès lors, on peut se demander si ; je vous accorde que ;
 *  permettez-moi d’y réfléchir un instant), the anchor lines that carry the
 *  act’s move, and the lines of the model exposé the learner can reuse.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const GP = ['expose-jury'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: 'soutenu', grammarPoints: GP, ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], notes?: string,
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['formule', ...tags], drills: FCVR, version: 1, register: 'soutenu', grammarPoints: GP,
  ...(notes ? { notes } : {}),
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });
const RULE = ['flashcard'] as Item['drills'];

/* ── ACT 1 · L’EXPOSÉ QUI RÉSUME ──────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, 'Ces trois documents répondent, chacun à sa manière, à une même question, et c’est elle que je veux traiter.', 'These three documents each answer the same question in their own way, and that is the question I want to address.', '/se tʁwa dɔ.ky.mɑ̃ ʁe.pɔ̃d ʃa.kœ̃.na sa ma.njɛʁ a yn mɛm kɛs.tjɔ̃ e sɛ.tɛl kə ʒə vø tʁɛ.te/', 'say trwa do-kü-MAHⁿ ray-POHⁿD | sha-kuhⁿ-na sa ma-NYEHR | a ün MEM kehs-TYOHⁿ | ay seh-TEHL kuh zhuh veu treh-TAY', ['scene', 'question'], FCVDR),
  phrase(1201, 'faire un exposé devant un jury', 'to give a presentation before a jury', '/fɛʁ œ̃.nɛks.po.ze də.vɑ̃.tœ̃ ʒy.ʁi/', 'fehr uhⁿ-nehks-poh-ZAY | duh-vahⁿ-tuhⁿ zhü-REE', ['expose']),
  phrase(1202, 'le fil conducteur', 'the guiding thread, the common thread', '/lə fil kɔ̃.dyk.tœʁ/', 'luh FEEL kohⁿ-dük-TUHR', ['fil'], 'La question qui relie tout l’exposé, du début à la fin.'),
  sent(1203, REFRAME, REFRAME_EN, '/poz yn vʁɛ kɛs.tjɔ̃ pɥi tjɛ̃ tɔ̃ fil ʃak ʁe.pɔ̃s o ʒy.ʁi i ʁa.mɛn/', 'pohz ün vreh kehs-TYOHⁿ | pwee tyehⁿ tohⁿ FEEL | shak ray-POHⁿSS oh zhü-REE | ee ra-MEHNN', ['rule', 'reframe'], RULE,
    rule('Le jury t’objecte quelque chose. Tu changes de position ?', 'Non : tu précises, et ta réponse ramène à ta question.')),
  sent(1204, 'Un exposé ne résume pas un dossier : il répond à une question que le dossier pose.', 'A presentation does not summarise a dossier: it answers a question the dossier raises.', '/œ̃.nɛks.po.ze nə ʁe.zym pa œ̃ do.sje il ʁe.pɔ̃ a yn kɛs.tjɔ̃ kə lə do.sje poz/', 'uhⁿ-nehks-poh-ZAY | nuh ray-züm pa uhⁿ do-SYAY | eel ray-pohⁿ a ün kehs-TYOHⁿ | kuh luh do-syay POHZ', ['rule', 'expose'], RULE,
    rule('Un exposé, c’est le résumé des documents ?', 'Non : c’est la réponse à une question que les documents posent ensemble.')),
  phrase(1205, 'faire dialoguer les documents', 'to make the documents speak to each other', '/fɛʁ dja.lɔ.ge le dɔ.ky.mɑ̃/', 'fehr dya-lo-GAY | lay do-kü-MAHⁿ', ['synthese'], 'Les mettre face à face au lieu de les présenter l’un après l’autre.'),
  sent(1206, 'Je n’ai pas résumé les documents l’un après l’autre : je les ai fait dialoguer.', 'I did not summarise the documents one after another: I made them speak to each other.', '/ʒə ne pa ʁe.zy.me le dɔ.ky.mɑ̃ lœ̃.na.pʁɛ lotʁ ʒə le.ze fɛ dja.lɔ.ge/', 'zhuh nay pa ray-zü-MAY lay do-kü-MAHⁿ | luhⁿ-na-preh LOHTR | zhuh lay-zay feh dya-lo-GAY', ['synthese'], FCVDR),
  sent(1207, 'Le jury ne note pas ce que tu sais, mais ce que tu fais du dossier.', 'The jury does not mark what you know, but what you do with the dossier.', '/lə ʒy.ʁi nə nɔt pa sə kə ty sɛ mɛ sə kə ty fɛ dy do.sje/', 'luh zhü-REE nuh NOT pa | suh kuh tü SEH | meh suh kuh tü FEH | dü do-SYAY', ['jury'], FCVR, { register: 'courant' }),
  sent(1208, 'Une objection n’est pas une attaque : c’est une invitation à préciser.', 'An objection is not an attack: it is an invitation to be more precise.', '/yn ɔb.ʒɛk.sjɔ̃ nɛ pa.zyn a.tak sɛ.tyn ɛ̃.vi.ta.sjɔ̃ a pʁe.si.ze/', 'ün ob-zhehk-SYOHⁿ | neh pa-zün a-TAK | seh-tün ehⁿ-vee-ta-SYOHⁿ | a pray-see-ZAY', ['jury', 'concession']),
  phrase(1209, 'tenir son fil', 'to keep hold of one’s thread', '/tə.niʁ sɔ̃ fil/', 'tuh-neer sohⁿ FEEL', ['fil'], 'Garder la même question du début de l’exposé à la fin de l’entretien.'),
  sent(1210, 'Sophie Marchetti a siégé dans des jurys pendant quinze ans.', 'Sophie Marchetti sat on juries for fifteen years.', '/so.fi maʁ.kɛ.ti a sje.ʒe dɑ̃ de ʒy.ʁi pɑ̃.dɑ̃ kɛ̃.zɑ̃/', 'so-FEE mar-keh-TEE | a syay-ZHAY dahⁿ day zhü-REE | pahⁿ-dahⁿ kehⁿ-ZAHⁿ', ['scene'], FCVR, { register: 'courant' }),
];

/* ── ACT 2 · UN GENRE QUI SE PARLE ────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1211, 'Le dossier que j’ai choisi porte sur les marchés de nuit.', 'The dossier I chose is about night markets.', '/lə do.sje kə ʒe ʃwa.zi pɔʁt syʁ le maʁ.ʃe də nɥi/', 'luh do-SYAY kuh zhay shwa-ZEE | port sür lay mar-shay duh NWEE', ['ouverture'], FCVDR),
  sent(1212, 'Trois documents, trois regards : une commerçante, un urbaniste, une association de riverains.', 'Three documents, three viewpoints: a shopkeeper, an urban planner, a residents’ association.', '/tʁwa dɔ.ky.mɑ̃ tʁwa ʁə.gaʁ yn kɔ.mɛʁ.sɑ̃t œ̃.nyʁ.ba.nist yn a.sɔ.sja.sjɔ̃ də ʁi.vʁɛ̃/', 'trwa do-kü-MAHⁿ | trwa ruh-GAR | ün ko-mehr-SAHⁿT | uhⁿ-nür-ba-NEEST | ün a-so-sya-SYOHⁿ duh ree-VREHⁿ', ['ouverture']),
  sent(1213, 'Je vais d’abord vous dire en une phrase ce qu’ils ont en commun.', 'First I will tell you in one sentence what they have in common.', '/ʒə vɛ da.bɔʁ vu diʁ ɑ̃.nyn fʁaz sə kil.zɔ̃.tɑ̃ kɔ.mœ̃/', 'zhuh veh da-BOR voo DEER | ahⁿ-nün FRAHZ | suh keel-zohⁿ-tahⁿ ko-MUHⁿ', ['annonce'], FCVDR),
  sent(1214, 'Tous les trois parlent de la nuit comme d’un temps à partager.', 'All three speak of the night as a time to be shared.', '/tu le tʁwa paʁl də la nɥi kɔm dœ̃ tɑ̃ a paʁ.ta.ʒe/', 'too lay TRWA | parl duh la NWEE | komm duhⁿ TAHⁿ a par-ta-ZHAY', ['ouverture']),
  sent(1215, 'Mais sur un point, ils ne sont pas d’accord, et ce point, le voici.', 'But on one point they disagree, and here is that point.', '/mɛ syʁ œ̃ pwɛ̃ il nə sɔ̃ pa da.kɔʁ e sə pwɛ̃ lə vwa.si/', 'meh sür uhⁿ PWEHⁿ | eel nuh sohⁿ pa da-KOR | ay suh PWEHⁿ | luh vwa-SEE', ['annonce']),
  sent(1216, 'Qui décide de ce qui se passe dans une rue après vingt-deux heures ?', 'Who decides what happens in a street after ten at night?', '/ki de.sid də sə ki sə pas dɑ̃.zyn ʁy a.pʁɛ vɛ̃t.dø.zœʁ/', 'kee day-SEED | duh suh kee suh PASS | dahⁿ-zün RÜ | a-preh vehⁿt-deu-ZUHR', ['question']),
  sent(1217, 'Ce sera ma question.', 'That will be my question.', '/sə sə.ʁa ma kɛs.tjɔ̃/', 'suh suh-RA ma kehs-TYOHⁿ', ['annonce']),
  sent(1218, 'Je vous propose de la traiter en deux temps.', 'I suggest dealing with it in two stages.', '/ʒə vu pʁɔ.poz də la tʁɛ.te ɑ̃ dø tɑ̃/', 'zhuh voo pro-POHZ | duh la treh-TAY | ahⁿ deu TAHⁿ', ['annonce'], FCVDR),
  sent(1219, 'D’abord, ce que la ville gagne à vivre la nuit ; ensuite, ce qu’elle doit à ceux qui dorment.', 'First, what the city gains by living at night; then, what it owes those who sleep.', '/da.bɔʁ sə kə la vil gaɲ a vivʁ la nɥi ɑ̃.sɥit sə kɛl dwa a sø ki dɔʁm/', 'da-BOR | suh kuh la VEEL | gany a veevr la NWEE | ahⁿ-SWEET | suh kehl DWA | a seu kee DORM', ['annonce']),
  sent(1220, 'Je reviendrai à la fin sur une proposition précise.', 'I will come back at the end to a specific proposal.', '/ʒə ʁə.vjɛ̃.dʁe a la fɛ̃ syʁ yn pʁɔ.po.zi.sjɔ̃ pʁe.siz/', 'zhuh ruh-vyehⁿ-DRAY | a la FEHⁿ | sür ün pro-po-zee-SYOHⁿ pray-SEEZ', ['annonce']),
  phrase(1221, 'porter sur', 'to be about (a topic)', '/pɔʁ.te syʁ/', 'por-tay SÜR', ['ouverture'], 'Mon dossier porte sur… : on dit le sujet sans « parler de ».'),
  sent(1222, 'À l’oral, le jury ne peut pas revenir en arrière : dis-lui où tu vas.', 'In a talk, the jury cannot go back: tell them where you are going.', '/a lɔ.ʁal lə ʒy.ʁi nə pø pa ʁə.və.niʁ ɑ̃.na.ʁjɛʁ di.lɥi u ty va/', 'a lo-RAL | luh zhü-REE nuh PUH pa | ruh-vuh-neer ahⁿ-na-RYEHR | dee-LWEE oo tü VA', ['rule', 'oral'], RULE,
    rule('Pourquoi annoncer à l’oral ce que tu vas dire ?', 'Parce que l’auditeur ne peut pas relire : il a besoin de savoir où tu vas.')),
  sent(1223, 'Comme je le disais il y a un instant, la nuit appartient à tout le monde.', 'As I was saying a moment ago, the night belongs to everyone.', '/kɔm ʒə lə di.zɛ il.ja œ̃.nɛ̃s.tɑ̃ la nɥi a.paʁ.tjɛ̃ a tu lə mɔ̃d/', 'komm zhuh luh dee-ZEH | eel-ya uhⁿ-nehⁿs-TAHⁿ | la NWEE | a-par-tyehⁿ a too luh MOHⁿD', ['oral']),
  sent(1224, 'Je m’arrête un instant sur ce chiffre, parce qu’il change tout.', 'I will pause for a moment on this figure, because it changes everything.', '/ʒə ma.ʁɛ.tœ̃.nɛ̃s.tɑ̃ syʁ sə ʃifʁ paʁs.kil ʃɑ̃ʒ tu/', 'zhuh ma-reh-tuhⁿ-nehⁿs-TAHⁿ | sür suh SHEEFR | pars-keel shahⁿzh TOO', ['oral'], FCVDR),
];

/* ── ACT 3 · LIRE LE DOSSIER ──────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  phrase(1225, 'aller dans le même sens', 'to point the same way, to agree', '/a.le dɑ̃ lə mɛm sɑ̃s/', 'a-lay dahⁿ luh MEM SAHⁿSS', ['synthese']),
  phrase(1226, 'prendre le contre-pied de', 'to take the opposite line to', '/pʁɑ̃dʁ lə kɔ̃.tʁə.pje də/', 'prahⁿdr luh kohⁿ-truh-PYAY duh', ['synthese'], 'Soutenir l’inverse de ce qu’un autre document affirme.'),
  phrase(1227, 'se rejoindre sur', 'to meet on, to agree on', '/sə ʁə.ʒwɛ̃dʁ syʁ/', 'suh ruh-zhwehⁿdr SÜR', ['synthese']),
  sent(1228, 'Les trois documents se rejoignent sur un constat : les jardins sont pleins.', 'The three documents agree on one finding: the gardens are full.', '/le tʁwa dɔ.ky.mɑ̃ sə ʁə.ʒwaɲ syʁ œ̃ kɔ̃s.ta le ʒaʁ.dɛ̃ sɔ̃ plɛ̃/', 'lay trwa do-kü-MAHⁿ | suh ruh-ZHWANY | sür uhⁿ kohⁿs-TA | lay zhar-DEHⁿ sohⁿ PLEHⁿ', ['synthese'], FCVDR),
  sent(1229, 'Le témoignage et le bilan de la ville vont dans le même sens.', 'The testimony and the city’s report point the same way.', '/lə te.mwa.ɲaʒ e lə bi.lɑ̃ də la vil vɔ̃ dɑ̃ lə mɛm sɑ̃s/', 'luh tay-mwa-NYAZH | ay luh bee-LAHⁿ duh la VEEL | vohⁿ dahⁿ luh MEM SAHⁿSS', ['synthese']),
  sent(1230, 'L’agronome prend le contre-pied du bilan municipal.', 'The agronomist takes the opposite line to the city’s report.', '/la.gʁɔ.nɔm pʁɑ̃ lə kɔ̃.tʁə.pje dy bi.lɑ̃ my.ni.si.pal/', 'la-gro-NOMM | prahⁿ luh kohⁿ-truh-PYAY | dü bee-LAHⁿ mü-nee-see-PAL', ['synthese']),
  sent(1231, 'Il ne nie pas l’intérêt des jardins : il en déplace la valeur.', 'He does not deny that the gardens are worthwhile: he moves where their value lies.', '/il nə ni pa lɛ̃.te.ʁɛ de ʒaʁ.dɛ̃ i.lɑ̃ de.plas la va.lœʁ/', 'eel nuh NEE pa | lehⁿ-tay-REH day zhar-DEHⁿ | ee-lahⁿ day-PLASS la va-LUHR', ['synthese']),
  sent(1232, 'Qui parle, d’où, et pour dire quoi ?', 'Who is speaking, from where, and to say what?', '/ki paʁl du e puʁ diʁ kwa/', 'kee PARL | DOO | ay poor deer KWA', ['methode']),
  sent(1233, 'Un bilan chiffre, un témoignage raconte, une tribune prend position.', 'A report counts, a testimony tells, an opinion piece takes a stand.', '/œ̃ bi.lɑ̃ ʃifʁ œ̃ te.mwa.ɲaʒ ʁa.kɔ̃t yn tʁi.byn pʁɑ̃ po.zi.sjɔ̃/', 'uhⁿ bee-LAHⁿ SHEEFR | uhⁿ tay-mwa-NYAZH ra-KOHⁿT | ün tree-BÜN prahⁿ po-zee-SYOHⁿ', ['rule', 'methode'], RULE,
    rule('Trois documents de genres différents. Que regardes-tu d’abord ?', 'Ce que chaque genre fait : un bilan chiffre, un témoignage raconte, une tribune prend position.')),
  sent(1234, 'La liste d’attente dépasse trois cents noms.', 'The waiting list runs to more than three hundred names.', '/la list da.tɑ̃t de.pas tʁwa sɑ̃ nɔ̃/', 'la LEEST da-TAHⁿT | day-PASS trwa sahⁿ NOHⁿ', ['dossier'], FCVR, { register: 'courant' }),
  sent(1235, 'Les documents divergent moins sur les faits que sur ce qu’on attend d’un jardin.', 'The documents differ less on the facts than on what people expect of a garden.', '/le dɔ.ky.mɑ̃ di.vɛʁʒ mwɛ̃ syʁ le fɛ kə syʁ sə kɔ̃.na.tɑ̃ dœ̃ ʒaʁ.dɛ̃/', 'lay do-kü-MAHⁿ dee-VEHRZH | mwehⁿ sür lay FEH | kuh sür suh kohⁿ-na-TAHⁿ | duhⁿ zhar-DEHⁿ', ['synthese'], FCVDR),
  sent(1236, 'Une synthèse dit où les documents se rejoignent, puis où ils se séparent.', 'A synthesis says where the documents meet, then where they part.', '/yn sɛ̃.tɛz di u le dɔ.ky.mɑ̃ sə ʁə.ʒwaɲ pɥi u il sə se.paʁ/', 'ün sehⁿ-TEHZ | dee oo lay do-kü-MAHⁿ suh ruh-ZHWANY | pwee oo eel suh say-PAR', ['rule', 'synthese'], RULE,
    rule('Une synthèse, c’est trois résumés à la suite ?', 'Non : elle dit d’abord où les documents se rejoignent, puis où ils se séparent.')),
];

/* ── ACT 4 · SYNTHÉTISER À VOIX HAUTE ─────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1237, 'Les trois documents partent du même constat : les jardins de Sainte-Albine sont pleins.', 'The three documents start from the same finding: the gardens of Sainte-Albine are full.', '/le tʁwa dɔ.ky.mɑ̃ paʁt dy mɛm kɔ̃s.ta le ʒaʁ.dɛ̃ də sɛ̃.tal.bin sɔ̃ plɛ̃/', 'lay trwa do-kü-MAHⁿ | part dü MEM kohⁿs-TA | lay zhar-DEHⁿ duh sehⁿ-tal-BEEN | sohⁿ PLEHⁿ', ['synthese']),
  sent(1238, 'Le bilan de la ville le chiffre : plus de trois cents noms attendent une parcelle.', 'The city’s report puts a figure on it: more than three hundred names are waiting for a plot.', '/lə bi.lɑ̃ də la vil lə ʃifʁ ply də tʁwa sɑ̃ nɔ̃ a.tɑ̃d yn paʁ.sɛl/', 'luh bee-LAHⁿ duh la VEEL | luh SHEEFR | plü duh trwa sahⁿ NOHⁿ | a-tahⁿd ün par-SEHL', ['synthese']),
  sent(1239, 'Mireille Kassab le raconte à sa manière : on vient pour les tomates, on reste pour les voisins.', 'Mireille Kassab tells it her own way: you come for the tomatoes, you stay for the neighbours.', '/mi.ʁɛj ka.sab lə ʁa.kɔ̃t a sa ma.njɛʁ ɔ̃ vjɛ̃ puʁ le tɔ.mat ɔ̃ ʁɛst puʁ le vwa.zɛ̃/', 'mee-REY ka-SAB | luh ra-KOHⁿT a sa ma-NYEHR | ohⁿ vyehⁿ poor lay to-MAT | ohⁿ rehst poor lay vwa-ZEHⁿ', ['synthese']),
  sent(1240, 'L’agronome souligne ce même point, mais pour en tirer une autre conclusion.', 'The agronomist stresses the same point, but to draw a different conclusion from it.', '/la.gʁɔ.nɔm su.liɲ sə mɛm pwɛ̃ mɛ puʁ ɑ̃ ti.ʁe y.no.tʁə kɔ̃.kly.zjɔ̃/', 'la-gro-NOMM soo-LEENY | suh MEM PWEHⁿ | meh poor ahⁿ tee-RAY | ü-noh-truh kohⁿ-klü-ZYOHⁿ', ['synthese', 'verbe']),
  sent(1241, 'Selon lui, un jardin partagé nourrit très peu la ville.', 'In his view, a shared garden feeds the city very little.', '/sə.lɔ̃ lɥi œ̃ ʒaʁ.dɛ̃ paʁ.ta.ʒe nu.ʁi tʁɛ pø la vil/', 'suh-lohⁿ LWEE | uhⁿ zhar-DEHⁿ par-ta-ZHAY | noo-REE treh PEU la VEEL', ['attribution'], FCVDR),
  sent(1242, 'Il met en garde contre un discours qui en ferait une politique alimentaire.', 'He warns against a way of talking that would turn them into a food policy.', '/il mɛ.tɑ̃ gaʁd kɔ̃.tʁə œ̃ dis.kuʁ ki ɑ̃ fə.ʁɛ yn pɔ.li.tik a.li.mɑ̃.tɛʁ/', 'eel meh-tahⁿ GARD | kohⁿ-truh uhⁿ dees-KOOR | kee ahⁿ fuh-REH | ün po-lee-TEEK a-lee-mahⁿ-TEHR', ['verbe']),
  sent(1243, 'Le bilan, lui, avance l’idée inverse, sans la chiffrer.', 'The report, for its part, puts forward the opposite idea, without putting a figure on it.', '/lə bi.lɑ̃ lɥi a.vɑ̃s li.de ɛ̃.vɛʁs sɑ̃ la ʃi.fʁe/', 'luh bee-LAHⁿ | LWEE | a-vahⁿss lee-DAY ehⁿ-VEHRSS | sahⁿ la shee-FRAY', ['verbe']),
  phrase(1244, 'mettre en garde contre', 'to warn against', '/mɛtʁ ɑ̃ gaʁd kɔ̃tʁ/', 'mehtr ahⁿ gard KOHⁿTR', ['verbe'], 'Suivi d’un nom : mettre en garde contre un discours, contre un risque.'),
  phrase(1245, 'avancer une idée', 'to put forward an idea', '/a.vɑ̃.se y.ni.de/', 'a-vahⁿ-say ü-nee-DAY', ['verbe'], 'Une idée proposée, pas encore prouvée.'),
  sent(1246, 'Le bilan chiffre ce que le témoignage raconte.', 'The report counts what the testimony tells.', '/lə bi.lɑ̃ ʃifʁ sə kə lə te.mwa.ɲaʒ ʁa.kɔ̃t/', 'luh bee-LAHⁿ SHEEFR | suh kuh luh tay-mwa-NYAZH ra-KOHⁿT', ['synthese', 'trap'], FCVDR),
  sent(1247, 'Selon l’auteur, une parcelle ne nourrira jamais une famille.', 'According to the author, a plot will never feed a family.', '/sə.lɔ̃ lo.tœʁ yn paʁ.sɛl nə nu.ʁi.ʁa ʒa.mɛ yn fa.mij/', 'suh-lohⁿ loh-TUHR | ün par-SEHL | nuh noo-ree-RA zha-MEH | ün fa-MEEY', ['attribution', 'trap']),
  sent(1248, 'L’agronome soutient que les jardins nourrissent peu la ville.', 'The agronomist maintains that the gardens feed the city little.', '/la.gʁɔ.nɔm su.tjɛ̃ kə le ʒaʁ.dɛ̃ nu.ʁis pø la vil/', 'la-gro-NOMM soo-TYEHⁿ | kuh lay zhar-DEHⁿ noo-REESS | PEU la VEEL', ['verbe', 'trap']),
  sent(1249, 'Le témoignage rejoint le bilan sur ce point.', 'The testimony agrees with the report on this point.', '/lə te.mwa.ɲaʒ ʁə.ʒwɛ̃ lə bi.lɑ̃ syʁ sə pwɛ̃/', 'luh tay-mwa-NYAZH ruh-ZHWEHⁿ | luh bee-LAHⁿ | sür suh PWEHⁿ', ['synthese', 'trap']),
  sent(1250, 'Le bilan insiste sur le fait que les jardins sont pleins.', 'The report insists on the fact that the gardens are full.', '/lə bi.lɑ̃ ɛ̃.sist syʁ lə fɛ kə le ʒaʁ.dɛ̃ sɔ̃ plɛ̃/', 'luh bee-LAHⁿ ehⁿ-SEEST | sür luh FEH | kuh lay zhar-DEHⁿ sohⁿ PLEHⁿ', ['verbe', 'trap', 'calque'], FCVDR),
  sent(1251, 'Elle souligne à quel point le jardin compte pour le quartier.', 'She stresses how much the garden matters to the neighbourhood.', '/ɛl su.liɲ a kɛl pwɛ̃ lə ʒaʁ.dɛ̃ kɔ̃t puʁ lə kaʁ.tje/', 'ehl soo-LEENY | a kehl PWEHⁿ | luh zhar-DEHⁿ KOHⁿT | poor luh kar-TYAY', ['verbe', 'trap', 'calque']),
  sent(1252, 'Rapporter un document, c’est choisir le verbe qui dit sa position.', 'Reporting a document means choosing the verb that states its position.', '/ʁa.pɔʁ.te œ̃ dɔ.ky.mɑ̃ sɛ ʃwa.ziʁ lə vɛʁb ki di sa po.zi.sjɔ̃/', 'ra-por-tay uhⁿ do-kü-MAHⁿ | seh shwa-zeer luh VEHRB | kee dee sa po-zee-SYOHⁿ', ['rule', 'verbe'], RULE,
    rule('« Il dit que » pour chaque document : quel problème ?', 'Le verbe ne dit rien de la position : choisis souligner, avancer, soutenir, mettre en garde.')),
];

/* ── ACT 5 · LA QUESTION, DITE À VOIX HAUTE ───────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1253, 'Dès lors, on peut se demander si les jardins partagés nourrissent la ville ou s’ils la rassemblent.', 'That being so, one may ask whether shared gardens feed the city or bring it together.', '/dɛ lɔʁ ɔ̃ pø sə də.mɑ̃.de si le ʒaʁ.dɛ̃ paʁ.ta.ʒe nu.ʁis la vil u sil la ʁa.sɑ̃bl/', 'deh LOR | ohⁿ PUH suh duh-mahⁿ-DAY | see lay zhar-DEHⁿ par-ta-ZHAY noo-reess la VEEL | oo seel la ra-SAHⁿBL', ['problematique'], FCVDR),
  sent(1254, 'Toute la question est de savoir ce qu’une ville attend d’un jardin.', 'The whole question is what a city expects of a garden.', '/tut la kɛs.tjɔ̃ ɛ də sa.vwaʁ sə kyn vil a.tɑ̃ dœ̃ ʒaʁ.dɛ̃/', 'toot la kehs-TYOHⁿ | eh duh sa-VWAR | suh kün VEEL a-TAHⁿ | duhⁿ zhar-DEHⁿ', ['problematique'], FCVDR),
  sent(1255, 'La question n’est pas tant de savoir si les jardins sont utiles que de savoir à quoi.', 'The question is not so much whether the gardens are useful as what they are useful for.', '/la kɛs.tjɔ̃ nɛ pa tɑ̃ də sa.vwaʁ si le ʒaʁ.dɛ̃ sɔ̃.ty.til kə də sa.vwaʁ a kwa/', 'la kehs-TYOHⁿ | neh pa TAHⁿ duh sa-VWAR | see lay zhar-DEHⁿ sohⁿ-tü-TEEL | kuh duh sa-VWAR a KWA', ['problematique']),
  sent(1256, 'Il s’agira donc de se demander dans quelle mesure un jardin relève d’une politique publique.', 'So the task will be to ask to what extent a garden is a matter for public policy.', '/il sa.ʒi.ʁa dɔ̃k də sə də.mɑ̃.de dɑ̃ kɛl mə.zyʁ œ̃ ʒaʁ.dɛ̃ ʁə.lɛv dyn pɔ.li.tik py.blik/', 'eel sa-zhee-RA DOHⁿK | duh suh duh-mahⁿ-DAY | dahⁿ kehl muh-ZÜR | uhⁿ zhar-DEHⁿ ruh-LEHV | dün po-lee-teek pü-BLEEK', ['problematique']),
  phrase(1257, 'toute la question est de savoir', 'the whole question is', '/tut la kɛs.tjɔ̃ ɛ də sa.vwaʁ/', 'toot la kehs-TYOHⁿ | eh duh sa-VWAR', ['problematique'], 'Suivi de si, de ce que, de qui : une question indirecte, sans pronom repris après le verbe.'),
  phrase(1258, 'dès lors, on peut se demander', 'that being so, one may ask', '/dɛ lɔʁ ɔ̃ pø sə də.mɑ̃.de/', 'deh LOR | ohⁿ PUH suh duh-mahⁿ-DAY', ['problematique'], 'Dès lors : à partir de ce constat. La question naît de ce qui précède.'),
  phrase(1259, 'relever de', 'to be a matter for, to fall within', '/ʁə.lə.ve də/', 'ruh-luh-VAY duh', ['problematique']),
  sent(1260, 'Une problématique est une question que le dossier pose sans y répondre.', 'A problématique is a question the dossier raises without answering it.', '/yn pʁɔ.ble.ma.tik ɛ.tyn kɛs.tjɔ̃ kə lə do.sje poz sɑ̃.zi ʁe.pɔ̃dʁ/', 'ün pro-blay-ma-TEEK | eh-tün kehs-TYOHⁿ | kuh luh do-SYAY POHZ | sahⁿ-zee ray-POHⁿDR', ['rule', 'problematique'], RULE,
    rule('Une problématique, c’est le sujet du dossier ?', 'Non : c’est une question que le dossier pose et ne tranche pas.')),
  sent(1261, 'Ma question est la suivante : les jardins partagés sont-ils une bonne chose ?', 'My question is this: are shared gardens a good thing?', '/ma kɛs.tjɔ̃ ɛ la sɥi.vɑ̃t le ʒaʁ.dɛ̃ paʁ.ta.ʒe sɔ̃.til yn bɔn ʃoz/', 'ma kehs-TYOHⁿ | eh la swee-VAHⁿT | lay zhar-DEHⁿ par-ta-ZHAY | sohⁿ-TEEL ün bonn SHOHZ', ['problematique', 'faible']),
  sent(1262, 'Je me demanderai combien de jardins compte Sainte-Albine.', 'I will ask how many gardens Sainte-Albine has.', '/ʒə mə də.mɑ̃d.ʁe kɔ̃.bjɛ̃ də ʒaʁ.dɛ̃ kɔ̃t sɛ̃.tal.bin/', 'zhuh muh duh-mahⁿd-RAY | kohⁿ-byehⁿ duh zhar-DEHⁿ | kohⁿt sehⁿ-tal-BEEN', ['problematique', 'faible']),
  sent(1263, 'Votre question, le dossier y répond dès la première ligne.', 'Your question, the dossier answers it in its very first line.', '/vɔtʁ kɛs.tjɔ̃ lə do.sje i ʁe.pɔ̃ dɛ la pʁə.mjɛʁ liɲ/', 'votr kehs-TYOHⁿ | luh do-SYAY ee ray-POHⁿ | deh la pruh-myehr LEENY', ['jury']),
  sent(1264, 'Une bonne question oppose les documents au lieu de les résumer.', 'A good question sets the documents against each other instead of summarising them.', '/yn bɔn kɛs.tjɔ̃ ɔ.poz le dɔ.ky.mɑ̃ o ljø də le ʁe.zy.me/', 'ün bonn kehs-TYOHⁿ | o-POHZ lay do-kü-MAHⁿ | oh LYEU duh lay ray-zü-MAY', ['problematique']),
  sent(1265, 'On peut se demander ce que les habitants attendent vraiment de ces jardins.', 'One may ask what residents really expect of these gardens.', '/ɔ̃ pø sə də.mɑ̃.de sə kə le.za.bi.tɑ̃ a.tɑ̃d vʁɛ.mɑ̃ də se ʒaʁ.dɛ̃/', 'ohⁿ PUH suh duh-mahⁿ-DAY | suh kuh lay-za-bee-TAHⁿ a-TAHⁿD | vreh-MAHⁿ duh say zhar-DEHⁿ', ['problematique', 'interrogation'], FCVDR),
  sent(1266, 'On peut se demander si la ville doit financer ces jardins.', 'One may ask whether the city should fund these gardens.', '/ɔ̃ pø sə də.mɑ̃.de si la vil dwa fi.nɑ̃.se se ʒaʁ.dɛ̃/', 'ohⁿ PUH suh duh-mahⁿ-DAY | see la VEEL dwa fee-nahⁿ-SAY | say zhar-DEHⁿ', ['interrogation']),
  sent(1267, 'Je me demande ce qui pousse les habitants vers ces jardins.', 'I wonder what draws residents to these gardens.', '/ʒə mə də.mɑ̃d sə ki pus le.za.bi.tɑ̃ vɛʁ se ʒaʁ.dɛ̃/', 'zhuh muh duh-MAHⁿD | suh kee POOSS | lay-za-bee-TAHⁿ | vehr say zhar-DEHⁿ', ['interrogation']),
  sent(1268, 'Reste à savoir dans quelle mesure la ville doit s’en mêler.', 'It remains to be seen to what extent the city should get involved.', '/ʁɛst a sa.vwaʁ dɑ̃ kɛl mə.zyʁ la vil dwa sɑ̃ me.le/', 'rehst a sa-VWAR | dahⁿ kehl muh-ZÜR | la VEEL dwa sahⁿ may-LAY', ['interrogation']),
];

/* ── ACT 6 · TENIR LE PLAN À VOIX HAUTE ──────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1269, 'Premier temps, donc, les récoltes.', 'First stage, then: the harvests.', '/pʁə.mje tɑ̃ dɔ̃k le ʁe.kɔlt/', 'pruh-myay TAHⁿ | DOHⁿK | lay ray-KOLT', ['balise']),
  sent(1270, 'Pour ne pas dépasser mon temps, je passerai vite sur ce point.', 'So as not to run over my time, I will move quickly over this point.', '/puʁ nə pa de.pa.se mɔ̃ tɑ̃ ʒə pa.sə.ʁe vit syʁ sə pwɛ̃/', 'poor nuh pa day-pa-SAY mohⁿ TAHⁿ | zhuh pa-suh-RAY VEET | sür suh PWEHⁿ', ['balise', 'temps'], FCVDR),
  sent(1271, 'J’en viens à mon second temps, qui répond à ma question.', 'I now come to my second stage, which answers my question.', '/ʒɑ̃ vjɛ̃ a mɔ̃ sə.gɔ̃ tɑ̃ ki ʁe.pɔ̃ a ma kɛs.tjɔ̃/', 'zhahⁿ vyehⁿ a mohⁿ suh-gohⁿ TAHⁿ | kee ray-POHⁿ | a ma kehs-TYOHⁿ', ['balise'], FCVDR),
  sent(1272, 'Je reviens à ma question de départ.', 'I come back to my starting question.', '/ʒə ʁə.vjɛ̃ a ma kɛs.tjɔ̃ də de.paʁ/', 'zhuh ruh-VYEHⁿ | a ma kehs-TYOHⁿ duh day-PAR', ['balise', 'fil'], FCVDR),
  sent(1273, 'Ma réponse tient en une phrase : un jardin partagé nourrit peu la ville, mais il la rassemble.', 'My answer fits in one sentence: a shared garden feeds the city little, but it brings it together.', '/ma ʁe.pɔ̃s tjɛ̃.tɑ̃.nyn fʁaz œ̃ ʒaʁ.dɛ̃ paʁ.ta.ʒe nu.ʁi pø la vil mɛ.zil la ʁa.sɑ̃bl/', 'ma ray-POHⁿSS | tyehⁿ-tahⁿ-nün FRAHZ | uhⁿ zhar-DEHⁿ par-ta-ZHAY | noo-ree PEU la VEEL | meh-zeel la ra-SAHⁿBL', ['conclusion'], FCVDR),
  sent(1274, 'Reste une question que le dossier laisse ouverte : qui ne demande même pas de parcelle ?', 'One question the dossier leaves open: who does not even ask for a plot?', '/ʁɛst yn kɛs.tjɔ̃ kə lə do.sje lɛ.su.vɛʁt ki nə də.mɑ̃d mɛm pa də paʁ.sɛl/', 'rehst ün kehs-TYOHⁿ | kuh luh do-SYAY leh-soo-VEHRT | kee nuh duh-MAHⁿD MEM pa | duh par-SEHL', ['conclusion', 'ouverture']),
  sent(1275, 'Je vous remercie ; je me tiens à votre disposition pour vos questions.', 'Thank you; I am at your disposal for your questions.', '/ʒə vu ʁə.mɛʁ.si ʒə mə tjɛ̃ a vɔtʁ dis.po.zi.sjɔ̃ puʁ vo kɛs.tjɔ̃/', 'zhuh voo ruh-mehr-SEE | zhuh muh TYEHⁿ | a votr dees-po-zee-SYOHⁿ | poor voh kehs-TYOHⁿ', ['conclusion'], FCVDR),
  phrase(1276, 'une balise', 'a signpost (in a talk)', '/yn ba.liz/', 'ün ba-LEEZ', ['balise'], 'À l’oral : la phrase courte qui dit au jury où tu en es.'),
  sent(1277, 'À l’oral, la conclusion redit la question avant d’y répondre.', 'In a talk, the conclusion restates the question before answering it.', '/a lɔ.ʁal la kɔ̃.kly.zjɔ̃ ʁə.di la kɛs.tjɔ̃ a.vɑ̃ di ʁe.pɔ̃dʁ/', 'a lo-RAL | la kohⁿ-klü-ZYOHⁿ | ruh-DEE la kehs-TYOHⁿ | a-vahⁿ dee ray-POHⁿDR', ['rule', 'conclusion'], RULE,
    rule('Ta conclusion orale commence par quoi ?', 'Par la question de départ : le jury l’a peut-être perdue de vue en dix minutes.')),
  sent(1278, 'Je viens de montrer ce que les jardins produisent ; voyons ce qu’ils font vraiment.', 'I have just shown what the gardens produce; let us see what they really do.', '/ʒə vjɛ̃ də mɔ̃.tʁe sə kə le ʒaʁ.dɛ̃ pʁɔ.dɥiz vwa.jɔ̃ sə kil fɔ̃ vʁɛ.mɑ̃/', 'zhuh vyehⁿ duh mohⁿ-TRAY | suh kuh lay zhar-DEHⁿ pro-DWEEZ | vwa-YOHⁿ | suh keel fohⁿ vreh-MAHⁿ', ['balise', 'transition']),
  sent(1279, 'Il me reste deux minutes ; je vais à l’essentiel.', 'I have two minutes left; I will go straight to the essentials.', '/il mə ʁɛst dø mi.nyt ʒə vɛ a le.sɑ̃.sjɛl/', 'eel muh rehst deu mee-NÜT | zhuh veh a lay-sahⁿ-SYEHL', ['balise', 'temps']),
  sent(1280, 'Voilà pour le premier temps.', 'So much for the first stage.', '/vwa.la puʁ lə pʁə.mje tɑ̃/', 'vwa-LA poor luh pruh-myay TAHⁿ', ['balise']),
];

/* ── ACT 7 · DEVANT LE JURY ───────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1281, 'Si je comprends bien, vous me demandez si les jardins méritent un budget municipal.', 'If I understand correctly, you are asking me whether the gardens deserve a municipal budget.', '/si ʒə kɔ̃.pʁɑ̃ bjɛ̃ vu mə də.mɑ̃.de si le ʒaʁ.dɛ̃ me.ʁit œ̃ byd.ʒɛ my.ni.si.pal/', 'see zhuh kohⁿ-prahⁿ BYEHⁿ | voo muh duh-mahⁿ-DAY | see lay zhar-DEHⁿ may-REET | uhⁿ büd-ZHEH mü-nee-see-PAL', ['jury', 'reformuler'], FCVDR),
  sent(1282, 'Pourriez-vous préciser ce que vous entendez par « rentable » ?', 'Could you say exactly what you mean by « profitable »?', '/pu.ʁje.vu pʁe.si.ze sə kə vu.zɑ̃.tɑ̃.de paʁ ʁɑ̃.tabl/', 'poo-ryay-VOO pray-see-ZAY | suh kuh voo-zahⁿ-tahⁿ-DAY | par rahⁿ-TABL', ['jury', 'preciser'], FCVDR),
  sent(1283, 'Je réponds d’abord à votre question, puis je la nuance.', 'I will answer your question first, then qualify my answer.', '/ʒə ʁe.pɔ̃ da.bɔʁ a vɔtʁ kɛs.tjɔ̃ pɥi ʒə la nɥɑ̃s/', 'zhuh ray-POHⁿ da-BOR | a votr kehs-TYOHⁿ | pwee zhuh la NWAHⁿSS', ['jury']),
  sent(1284, 'Ai-je répondu à votre question ?', 'Have I answered your question?', '/e.ʒə ʁe.pɔ̃.dy a vɔtʁ kɛs.tjɔ̃/', 'ay-zhuh ray-pohⁿ-DÜ | a votr kehs-TYOHⁿ', ['jury'], FCVDR),
  sent(1285, 'Vous me demandez, au fond, si un jardin doit rapporter quelque chose.', 'What you are asking, at bottom, is whether a garden has to bring something in.', '/vu mə də.mɑ̃.de o fɔ̃ si œ̃ ʒaʁ.dɛ̃ dwa ʁa.pɔʁ.te kɛl.kə ʃoz/', 'voo muh duh-mahⁿ-DAY | oh FOHⁿ | see uhⁿ zhar-DEHⁿ dwa ra-por-TAY | kehl-kuh SHOHZ', ['reformuler']),
  sent(1286, 'C’est une question qui touche au cœur du sujet.', 'That is a question that goes to the heart of the subject.', '/sɛ.tyn kɛs.tjɔ̃ ki tuʃ o kœʁ dy sy.ʒɛ/', 'seh-tün kehs-TYOHⁿ | kee toosh oh KUHR | dü sü-ZHEH', ['jury']),
  sent(1287, 'Je reprends votre mot, si vous le permettez.', 'I will take up your word, if you will allow me.', '/ʒə ʁə.pʁɑ̃ vɔtʁ mo si vu lə pɛʁ.mɛ.te/', 'zhuh ruh-PRAHⁿ votr MOH | see voo luh pehr-meh-TAY', ['reformuler']),
  phrase(1288, 'reformuler une question', 'to rephrase a question', '/ʁə.fɔʁ.my.le yn kɛs.tjɔ̃/', 'ruh-for-mü-LAY ün kehs-TYOHⁿ', ['reformuler'], 'La redire avec tes mots pour vérifier que tu l’as comprise.'),
  sent(1289, 'Vous parlez de lien social : comment le mesure-t-on ?', 'You talk about social ties: how do you measure them?', '/vu paʁ.le də ljɛ̃ sɔ.sjal kɔ.mɑ̃ lə mə.zyʁ.tɔ̃/', 'voo par-LAY duh lyehⁿ so-SYAL | ko-MAHⁿ | luh muh-zür-TOHⁿ', ['jury']),
  sent(1290, 'Pas en kilos, en tout cas : plutôt en voisins qui se connaissent.', 'Not in kilos, at any rate: rather in neighbours who know each other.', '/pa.zɑ̃ ki.lo ɑ̃ tu ka ply.to ɑ̃ vwa.zɛ̃ ki sə kɔ.nɛs/', 'pa-zahⁿ kee-LOH | ahⁿ too KA | plü-toh ahⁿ vwa-ZEHⁿ | kee suh ko-NEHSS', ['jury']),
  sent(1291, 'Devant un jury, on vouvoie, on reformule, on répond, puis on vérifie.', 'Before a jury, you say vous, rephrase, answer, then check.', '/də.vɑ̃.tœ̃ ʒy.ʁi ɔ̃ vu.vwa ɔ̃ ʁə.fɔʁ.myl ɔ̃ ʁe.pɔ̃ pɥi ɔ̃ ve.ʁi.fi/', 'duh-vahⁿ-tuhⁿ zhü-REE | ohⁿ voo-VWA | ohⁿ ruh-for-MÜL | ohⁿ ray-POHⁿ | pwee ohⁿ vay-ree-FEE', ['rule', 'jury'], RULE,
    rule('Le jury te pose une question. Dans quel ordre fais-tu les choses ?', 'Tu reformules, tu réponds d’abord, tu nuances ensuite, puis tu vérifies que tu as répondu.')),
  sent(1292, 'Je crains de mal saisir votre question : pourriez-vous la reformuler ?', 'I am afraid I am not quite grasping your question: could you rephrase it?', '/ʒə kʁɛ̃ də mal se.ziʁ vɔtʁ kɛs.tjɔ̃ pu.ʁje.vu la ʁə.fɔʁ.my.le/', 'zhuh krehⁿ duh mal say-ZEER | votr kehs-TYOHⁿ | poo-ryay-VOO la ruh-for-mü-LAY', ['preciser']),
  sent(1293, 'Oui, c’est bien cela, et je précise un point.', 'Yes, that is right, and let me make one point clearer.', '/wi sɛ bjɛ̃ sə.la e ʒə pʁe.siz œ̃ pwɛ̃/', 'WEE | seh byehⁿ suh-LA | ay zhuh pray-SEEZ uhⁿ PWEHⁿ', ['jury']),
  sent(1294, 'Cela dépend de ce qu’on attend d’un jardin, et je vais vous dire ce que j’en attends.', 'That depends on what one expects of a garden, and I will tell you what I expect of it.', '/sə.la de.pɑ̃ də sə kɔ̃.na.tɑ̃ dœ̃ ʒaʁ.dɛ̃ e ʒə vɛ vu diʁ sə kə ʒɑ̃.na.tɑ̃/', 'suh-la day-PAHⁿ | duh suh kohⁿ-na-TAHⁿ duhⁿ zhar-DEHⁿ | ay zhuh veh voo DEER | suh kuh zhahⁿ-na-TAHⁿ', ['jury']),
];

/* ── ACT 8 · GAGNER DU TEMPS SANS MEUBLER ─────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1295, 'Permettez-moi d’y réfléchir un instant.', 'Allow me to think about it for a moment.', '/pɛʁ.mɛ.te.mwa di ʁe.fle.ʃi.ʁœ̃.nɛ̃s.tɑ̃/', 'pehr-meh-tay-MWA | dee ray-flay-shee-ruhⁿ-nehⁿs-TAHⁿ', ['temps'], FCVDR),
  sent(1296, 'C’est une question qui mérite qu’on s’y arrête.', 'It is a question worth stopping on.', '/sɛ.tyn kɛs.tjɔ̃ ki me.ʁit kɔ̃ si.a.ʁɛt/', 'seh-tün kehs-TYOHⁿ | kee may-REET | kohⁿ see-a-REHT', ['temps']),
  sent(1297, 'Je distinguerais deux choses.', 'I would distinguish two things.', '/ʒə dis.tɛ̃.gə.ʁɛ dø ʃoz/', 'zhuh dees-tehⁿ-guh-REH | deu SHOHZ', ['temps']),
  sent(1298, 'Je n’ai pas le chiffre exact en tête, mais l’ordre de grandeur est clair.', 'I do not have the exact figure in my head, but the order of magnitude is clear.', '/ʒə ne pa lə ʃi.fʁɛɡ.za.tɑ̃ tɛt mɛ lɔʁ.dʁə də gʁɑ̃.dœʁ ɛ klɛʁ/', 'zhuh nay pa luh shee-freg-za-tahⁿ TEHT | meh lor-druh duh grahⁿ-DUHR | eh KLEHR', ['temps', 'savoir'], FCVDR),
  sent(1299, 'En première analyse, je dirais que la ville paie surtout l’eau et les clôtures.', 'As a first answer, I would say the city mainly pays for the water and the fences.', '/ɑ̃ pʁə.mjɛ.ʁa.na.liz ʒə di.ʁɛ kə la vil pɛ syʁ.tu lo e le klo.tyʁ/', 'ahⁿ pruh-myeh-ra-na-LEEZ | zhuh dee-REH | kuh la VEEL PEH | sür-too LOH | ay lay kloh-TÜR', ['temps']),
  sent(1300, 'Le dossier ne donne pas ce chiffre, et je préfère ne pas l’inventer.', 'The dossier does not give that figure, and I would rather not invent it.', '/lə do.sje nə dɔn pa sə ʃifʁ e ʒə pʁe.fɛʁ nə pa lɛ̃.vɑ̃.te/', 'luh do-SYAY nuh DONN pa | suh SHEEFR | ay zhuh pray-FEHR | nuh pa lehⁿ-vahⁿ-TAY', ['savoir'], FCVDR),
  phrase(1301, 'meubler le silence', 'to fill the silence (with empty words)', '/mœ.ble lə si.lɑ̃s/', 'muh-BLAY luh see-LAHⁿSS', ['temps'], 'Parler pour ne rien dire, par peur du silence.'),
  phrase(1302, 'en première analyse', 'as a first answer, on first examination', '/ɑ̃ pʁə.mjɛ.ʁa.na.liz/', 'ahⁿ pruh-myeh-ra-na-LEEZ', ['temps'], 'Tu donnes une réponse, et tu annonces qu’elle pourra être affinée.'),
  phrase(1303, 'avoir un chiffre en tête', 'to have a figure in one’s head', '/a.vwaʁ œ̃ ʃifʁ ɑ̃ tɛt/', 'a-vwar uhⁿ SHEEFR ahⁿ TEHT', ['savoir']),
  sent(1304, 'Votre objection a du sens.', 'Your objection makes sense.', '/vɔ.tʁɔb.ʒɛk.sjɔ̃ a dy sɑ̃s/', 'vo-trob-zhehk-SYOHⁿ | a dü SAHⁿSS', ['trap', 'calque']),
  sent(1305, 'Au fond, la question est celle du coût.', 'At bottom, the question is one of cost.', '/o fɔ̃ la kɛs.tjɔ̃ ɛ sɛl dy ku/', 'oh FOHⁿ | la kehs-TYOHⁿ | eh sehl dü KOO', ['trap', 'calque']),
  sent(1306, 'C’est assurément un point important.', 'It is certainly an important point.', '/sɛ.ta.sy.ʁe.mɑ̃ œ̃ pwɛ̃ ɛ̃.pɔʁ.tɑ̃/', 'seh-ta-sü-ray-MAHⁿ | uhⁿ PWEHⁿ ehⁿ-por-TAHⁿ', ['trap', 'calque']),
  sent(1307, 'J’y reviens dans un instant.', 'I will come back to it in a moment.', '/ʒi ʁə.vjɛ̃ dɑ̃.zœ̃.nɛ̃s.tɑ̃/', 'zhee ruh-VYEHⁿ | dahⁿ-zuhⁿ-nehⁿs-TAHⁿ', ['trap', 'calque'], FCVDR),
  sent(1308, 'Je vais traiter cette question en deux temps.', 'I will deal with this question in two stages.', '/ʒə vɛ tʁɛ.te sɛt kɛs.tjɔ̃ ɑ̃ dø tɑ̃/', 'zhuh veh treh-TAY | seht kehs-TYOHⁿ | ahⁿ deu TAHⁿ', ['trap', 'calque']),
  sent(1309, 'En fait, la ville paie surtout l’eau et les clôtures.', 'In fact, the city mainly pays for the water and the fences.', '/ɑ̃ fɛt la vil pɛ syʁ.tu lo e le klo.tyʁ/', 'ahⁿ FEHT | la VEEL PEH | sür-too LOH | ay lay kloh-TÜR', ['trap', 'calque']),
  sent(1310, 'Combien un jardin coûte-t-il à la ville, selon vous ?', 'How much does a garden cost the city, in your view?', '/kɔ̃.bjɛ̃ œ̃ ʒaʁ.dɛ̃ kut.til a la vil sə.lɔ̃ vu/', 'kohⁿ-BYEHⁿ | uhⁿ zhar-DEHⁿ koot-TEEL | a la VEEL | suh-lohⁿ VOO', ['jury']),
  sent(1311, 'Gagner du temps, c’est réfléchir à voix haute, pas remplir le silence.', 'Buying time means thinking aloud, not filling the silence.', '/ga.ɲe dy tɑ̃ sɛ ʁe.fle.ʃiʁ a vwa ot pa ʁɑ̃.pliʁ lə si.lɑ̃s/', 'ga-nyay dü TAHⁿ | seh ray-flay-SHEER a vwa OHT | pa rahⁿ-pleer luh see-LAHⁿSS', ['rule', 'temps'], RULE,
    rule('Tu ne sais pas répondre tout de suite. Que fais-tu ?', 'Tu reprends la question, tu distingues, tu dis ce que tu sais, et tu n’inventes rien.')),
];

/* ── ACT 9 · CONCÉDER SANS LÂCHER SON FIL ─────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1312, 'Vous avez raison de le souligner : la liste d’attente pose un problème d’accès.', 'You are right to point it out: the waiting list raises a problem of access.', '/vu.za.ve ʁɛ.zɔ̃ də lə su.li.ɲe la list da.tɑ̃t po.zœ̃ pʁɔ.blɛm dak.sɛ/', 'voo-za-vay reh-ZOHⁿ | duh luh soo-lee-NYAY | la LEEST da-TAHⁿT | poh-zuhⁿ pro-BLEHMM dak-SEH', ['concession'], FCVDR),
  sent(1313, 'Je vous accorde que trois cents noms en attente, c’est beaucoup.', 'I grant you that three hundred names on a waiting list is a lot.', '/ʒə vu.za.kɔʁd kə tʁwa sɑ̃ nɔ̃ ɑ̃.na.tɑ̃t sɛ bo.ku/', 'zhuh voo-za-KORD | kuh trwa sahⁿ NOHⁿ | ahⁿ-na-TAHⁿT | seh boh-KOO', ['concession']),
  sent(1314, 'Votre remarque m’oblige à préciser ma pensée.', 'Your remark obliges me to make my thinking more precise.', '/vɔtʁ ʁə.maʁk mɔ.bliʒ a pʁe.si.ze ma pɑ̃.se/', 'votr ruh-MARK | mo-BLEEZH | a pray-see-ZAY ma pahⁿ-SAY', ['concession', 'portee'], FCVDR),
  sent(1315, 'Je ne dis pas que les jardins sont ouverts à tous ; je dis qu’ils pourraient l’être.', 'I am not saying the gardens are open to all; I am saying they could be.', '/ʒə nə di pa kə le ʒaʁ.dɛ̃ sɔ̃.tu.vɛʁ a tus ʒə di kil pu.ʁɛ lɛtʁ/', 'zhuh nuh dee pa | kuh lay zhar-DEHⁿ sohⁿ-too-VEHR a TOOSS | zhuh dee keel poo-REH LEHTR', ['portee']),
  sent(1316, 'Cela nuance ma position sans la renverser.', 'That qualifies my position without overturning it.', '/sə.la nɥɑ̃s ma po.zi.sjɔ̃ sɑ̃ la ʁɑ̃.vɛʁ.se/', 'suh-la NWAHⁿSS | ma po-zee-SYOHⁿ | sahⁿ la rahⁿ-vehr-SAY', ['portee'], FCVDR),
  sent(1317, 'Je maintiens néanmoins que leur valeur est d’abord sociale.', 'I nonetheless maintain that their value is first and foremost social.', '/ʒə mɛ̃.tjɛ̃ ne.ɑ̃.mwɛ̃ kə lœʁ va.lœʁ ɛ da.bɔʁ sɔ.sjal/', 'zhuh mehⁿ-TYEHⁿ | nay-ahⁿ-MWEHⁿ | kuh luhr va-LUHR | eh da-bor so-SYAL', ['portee', 'fil'], FCVDR),
  sent(1318, 'Sur ce point, je me suis sans doute mal fait comprendre.', 'On this point, I probably did not make myself clear.', '/syʁ sə pwɛ̃ ʒə mə sɥi sɑ̃ dut mal fɛ kɔ̃.pʁɑ̃dʁ/', 'sür suh PWEHⁿ | zhuh muh swee sahⁿ DOOT | mal feh kohⁿ-PRAHⁿDR', ['concession']),
  sent(1319, 'C’est une objection sérieuse, et je la prends au sérieux.', 'It is a serious objection, and I take it seriously.', '/sɛ.ty.nɔb.ʒɛk.sjɔ̃ se.ʁjøz e ʒə la pʁɑ̃ o se.ʁjø/', 'seh-tü-nob-zhehk-SYOHⁿ say-RYEUZ | ay zhuh la PRAHⁿ | oh say-RYEU', ['concession']),
  phrase(1320, 'concéder un point', 'to concede a point', '/kɔ̃.se.de œ̃ pwɛ̃/', 'kohⁿ-say-DAY uhⁿ PWEHⁿ', ['concession'], 'Reconnaître qu’un point est juste, sans abandonner le reste.'),
  phrase(1321, 'nuancer sans renverser', 'to qualify without overturning', '/nɥɑ̃.se sɑ̃ ʁɑ̃.vɛʁ.se/', 'nwahⁿ-SAY | sahⁿ rahⁿ-vehr-SAY', ['portee']),
  sent(1322, 'Ces jardins profitent peut-être surtout à ceux qui ont déjà du temps.', 'These gardens may mainly benefit those who already have time.', '/se ʒaʁ.dɛ̃ pʁɔ.fit pø.tɛtʁ syʁ.tu a sø ki ɔ̃ de.ʒa dy tɑ̃/', 'say zhar-DEHⁿ pro-FEET | peu-TEHTR sür-TOO | a seu kee ohⁿ day-ZHA dü TAHⁿ', ['jury']),
  sent(1323, 'Concéder un point, ce n’est pas changer de question.', 'Conceding a point is not changing your question.', '/kɔ̃.se.de œ̃ pwɛ̃ sə nɛ pa ʃɑ̃.ʒe də kɛs.tjɔ̃/', 'kohⁿ-say-DAY uhⁿ PWEHⁿ | suh neh pa shahⁿ-ZHAY | duh kehs-TYOHⁿ', ['rule', 'concession'], RULE,
    rule('Le jury a raison sur un point. Tu abandonnes ta thèse ?', 'Non : tu concèdes le point, tu précises ta thèse, et tu reviens à ta question.')),
  sent(1324, 'Vous avez raison sur ce point, et cela m’amène à préciser ma réponse.', 'You are right on this point, and that leads me to make my answer more precise.', '/vu.za.ve ʁɛ.zɔ̃ syʁ sə pwɛ̃ e sə.la ma.mɛn a pʁe.si.ze ma ʁe.pɔ̃s/', 'voo-za-vay reh-ZOHⁿ | sür suh PWEHⁿ | ay suh-la ma-MEHNN | a pray-see-ZAY ma ray-POHⁿSS', ['concession']),
  sent(1325, 'Votre objection porte sur l’accès, pas sur la valeur des jardins.', 'Your objection is about access, not about the value of the gardens.', '/vɔ.tʁɔb.ʒɛk.sjɔ̃ pɔʁt syʁ lak.sɛ pa syʁ la va.lœʁ de ʒaʁ.dɛ̃/', 'vo-trob-zhehk-SYOHⁿ | port sür lak-SEH | pa sür la va-LUHR | day zhar-DEHⁿ', ['portee']),
  sent(1326, 'L’accès, je vous l’accorde ; la valeur, je la maintiens.', 'Access, I grant you; the value, I maintain.', '/lak.sɛ ʒə vu la.kɔʁd la va.lœʁ ʒə la mɛ̃.tjɛ̃/', 'lak-SEH | zhuh voo la-KORD | la va-LUHR | zhuh la mehⁿ-TYEHⁿ', ['portee'], FCVDR),
];

/* ── ACT 10 · QUAND LE JURY POUSSE ────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1327, 'Le dossier ne l’aborde pas, mais je peux vous donner mon avis.', 'The dossier does not deal with it, but I can give you my view.', '/lə do.sje nə la.bɔʁd pa mɛ ʒə pø vu dɔ.ne mɔ̃.na.vi/', 'luh do-SYAY nuh la-BORD pa | meh zhuh PUH voo do-NAY | mohⁿ-na-VEE', ['hors-dossier'], FCVDR),
  sent(1328, 'À titre personnel, je cultiverais volontiers une parcelle.', 'Speaking personally, I would gladly grow a plot.', '/a titʁ pɛʁ.sɔ.nɛl ʒə kyl.ti.və.ʁɛ vɔ.lɔ̃.tje yn paʁ.sɛl/', 'a teetr pehr-so-NEHL | zhuh kül-tee-vuh-REH | vo-lohⁿ-TYAY ün par-SEHL', ['avis']),
  sent(1329, 'Je ne crois pas qu’il faille choisir entre nourrir et rassembler.', 'I do not think one has to choose between feeding and bringing together.', '/ʒə nə kʁwa pa kil faj ʃwa.ziʁ ɑ̃tʁ nu.ʁiʁ e ʁa.sɑ̃.ble/', 'zhuh nuh krwa PA | keel FAÏ shwa-ZEER | ahⁿtr noo-REER ay ra-sahⁿ-BLAY', ['subjonctif', 'dilemme'], FCVDR),
  phrase(1330, 'à titre personnel', 'speaking personally, in a personal capacity', '/a titʁ pɛʁ.sɔ.nɛl/', 'a teetr pehr-so-NEHL', ['avis'], 'Pour dire que tu sors du dossier et que tu parles en ton nom.'),
  phrase(1331, 'refuser un faux dilemme', 'to refuse a false dilemma', '/ʁə.fy.ze œ̃ fo di.lɛm/', 'ruh-fü-ZAY uhⁿ foh dee-LEHMM', ['dilemme'], 'Montrer qu’on n’est pas obligé de choisir entre deux options.'),
  sent(1332, 'Et si la ville n’avait plus de budget, que faudrait-il garder ?', 'And if the city had no budget left, what should be kept?', '/e si la vil na.vɛ ply də byd.ʒɛ kə fo.dʁɛ.til gaʁ.de/', 'ay see la VEEL na-veh plü duh büd-ZHEH | kuh foh-dreh-TEEL gar-DAY', ['jury', 'hypothese']),
  sent(1333, 'Dans ce cas, je garderais les parcelles collectives, qui rassemblent le plus.', 'In that case, I would keep the shared plots, which bring the most people together.', '/dɑ̃ sə ka ʒə gaʁ.də.ʁɛ le paʁ.sɛl kɔ.lɛk.tiv ki ʁa.sɑ̃bl lə plys/', 'dahⁿ suh KA | zhuh gar-duh-REH | lay par-SEHL ko-lehk-TEEV | kee ra-SAHⁿBL luh PLÜSS', ['hypothese']),
  sent(1334, 'Et vous, personnellement, que feriez-vous ?', 'And you, personally, what would you do?', '/e vu pɛʁ.sɔ.nɛl.mɑ̃ kə fə.ʁje.vu/', 'ay VOO | pehr-so-nehl-MAHⁿ | kuh fuh-ryay-VOO', ['jury', 'avis']),
  sent(1335, 'Je doute que les jardins fassent baisser le prix des légumes.', 'I doubt the gardens bring down the price of vegetables.', '/ʒə dut kə le ʒaʁ.dɛ̃ fas be.se lə pʁi de le.gym/', 'zhuh DOOT | kuh lay zhar-DEHⁿ FASS | beh-SAY luh PREE | day lay-GÜM', ['subjonctif', 'trap']),
  sent(1336, 'Il faut que la ville paie l’eau et les clôtures.', 'The city has to pay for the water and the fences.', '/il fo kə la vil pɛ lo e le klo.tyʁ/', 'eel FOH | kuh la VEEL PEH | LOH | ay lay kloh-TÜR', ['subjonctif', 'trap']),
  sent(1337, 'À titre personnel, je pense que c’est une bonne idée.', 'Speaking personally, I think it is a good idea.', '/a titʁ pɛʁ.sɔ.nɛl ʒə pɑ̃s kə sɛ.tyn bɔ.ni.de/', 'a teetr pehr-so-NEHL | zhuh PAHⁿSS | kuh seh-tün bo-nee-DAY', ['subjonctif', 'trap']),
  sent(1338, 'Bien que le dossier ne dise rien des toits, la question se pose.', 'Although the dossier says nothing about roofs, the question arises.', '/bjɛ̃ kə lə do.sje nə diz ʁjɛ̃ de twa la kɛs.tjɔ̃ sə poz/', 'byehⁿ kuh luh do-SYAY | nuh deez RYEHⁿ | day TWA | la kehs-TYOHⁿ suh POHZ', ['subjonctif', 'trap']),
  sent(1339, 'À moins que la ville ne puisse payer l’eau, le projet restera fragile.', 'Unless the city can pay for the water, the project will remain fragile.', '/a mwɛ̃ kə la vil nə pɥis pe.je lo lə pʁɔ.ʒɛ ʁɛs.tə.ʁa fʁa.ʒil/', 'a MWEHⁿ | kuh la VEEL nuh PWEESS | pay-YAY LOH | luh pro-ZHEH | rehs-tuh-RA fra-ZHEEL', ['subjonctif', 'trap']),
  sent(1340, 'Il est peu probable que les toits soient plus faciles à cultiver.', 'It is unlikely that roofs are easier to cultivate.', '/il ɛ pø pʁɔ.babl kə le twa swa ply fa.sil a kyl.ti.ve/', 'eel eh peu pro-BABL | kuh lay TWA | swa plü fa-SEEL | a kül-tee-VAY', ['subjonctif', 'trap']),
  sent(1341, 'Le jury pousse pour voir si ta pensée tient, pas pour te piéger.', 'The jury pushes to see whether your thinking holds, not to trap you.', '/lə ʒy.ʁi pus puʁ vwaʁ si ta pɑ̃.se tjɛ̃ pa puʁ tə pje.ʒe/', 'luh zhü-REE POOSS | poor vwar see ta pahⁿ-SAY TYEHⁿ | pa poor tuh pyay-ZHAY', ['rule', 'jury'], RULE,
    rule('Le jury te demande ton avis personnel. C’est un piège ?', 'Non : il veut voir ta pensée hors du dossier. Dis que tu en sors, puis donne un avis motivé.')),
];

/* ── ACT 11 · CLORE L’ENTRETIEN ───────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1342, 'Si vous n’avez pas d’autres questions, je résumerai ma position en une phrase.', 'If you have no other questions, I will sum up my position in one sentence.', '/si vu na.ve pa do.tʁə kɛs.tjɔ̃ ʒə ʁe.zym.ʁe ma po.zi.sjɔ̃ ɑ̃.nyn fʁaz/', 'see voo na-vay pa doh-truh kehs-TYOHⁿ | zhuh ray-züm-RAY | ma po-zee-SYOHⁿ | ahⁿ-nün FRAHZ', ['cloture'], FCVDR),
  sent(1343, 'Vos questions m’ont permis de préciser un point : l’accès.', 'Your questions allowed me to make one point clearer: access.', '/vo kɛs.tjɔ̃ mɔ̃ pɛʁ.mi də pʁe.si.ze œ̃ pwɛ̃ lak.sɛ/', 'voh kehs-TYOHⁿ | mohⁿ pehr-MEE | duh pray-see-ZAY uhⁿ PWEHⁿ | lak-SEH', ['cloture'], FCVDR),
  sent(1344, 'Je vous remercie pour cet échange.', 'Thank you for this exchange.', '/ʒə vu ʁə.mɛʁ.si puʁ sɛ.te.ʃɑ̃ʒ/', 'zhuh voo ruh-mehr-SEE | poor seh-tay-SHAHⁿZH', ['cloture']),
  sent(1345, 'Mon fil n’a pas changé : un jardin partagé se juge d’abord à ce qu’il rassemble.', 'My thread has not changed: a shared garden is judged first by what it brings together.', '/mɔ̃ fil na pa ʃɑ̃.ʒe œ̃ ʒaʁ.dɛ̃ paʁ.ta.ʒe sə ʒyʒ da.bɔʁ a sə kil ʁa.sɑ̃bl/', 'mohⁿ FEEL na pa shahⁿ-ZHAY | uhⁿ zhar-DEHⁿ par-ta-ZHAY | suh ZHÜZH da-BOR | a suh keel ra-SAHⁿBL', ['cloture', 'fil']),
  sent(1346, 'J’ai nuancé ma réponse ; je n’ai pas changé de question.', 'I qualified my answer; I did not change my question.', '/ʒe nɥɑ̃.se ma ʁe.pɔ̃s ʒə ne pa ʃɑ̃.ʒe də kɛs.tjɔ̃/', 'zhay nwahⁿ-SAY ma ray-POHⁿSS | zhuh nay pa shahⁿ-ZHAY | duh kehs-TYOHⁿ', ['cloture', 'fil'], FCVDR),
  sent(1347, 'Nous n’avons plus de questions. Voulez-vous ajouter quelque chose ?', 'We have no more questions. Would you like to add anything?', '/nu.na.vɔ̃ ply də kɛs.tjɔ̃ vu.le.vu a.ʒu.te kɛl.kə ʃoz/', 'noo-na-vohⁿ plü duh kehs-TYOHⁿ | voo-lay-VOO a-zhoo-TAY | kehl-kuh SHOHZ', ['jury']),
  sent(1348, 'Une seule chose : ma réponse vaut pour une ville qui a encore du terrain.', 'Just one thing: my answer holds for a city that still has land.', '/yn sœl ʃoz ma ʁe.pɔ̃s vo puʁ yn vil ki a ɑ̃.kɔʁ dy tɛ.ʁɛ̃/', 'ün suhl SHOHZ | ma ray-POHⁿSS | voh poor ün VEEL | kee a ahⁿ-kor dü teh-REHⁿ', ['cloture']),
  phrase(1349, 'clore un entretien', 'to close an interview', '/klɔʁ œ̃.nɑ̃.tʁə.tjɛ̃/', 'klor uhⁿ-nahⁿ-truh-TYEHⁿ', ['cloture']),
  sent(1350, 'On finit l’entretien comme l’exposé : par la question, et par sa réponse.', 'You end the interview as you ended the exposé: with the question, and with its answer.', '/ɔ̃ fi.ni lɑ̃.tʁə.tjɛ̃ kɔm lɛks.po.ze paʁ la kɛs.tjɔ̃ e paʁ sa ʁe.pɔ̃s/', 'ohⁿ fee-NEE lahⁿ-truh-TYEHⁿ | komm lehks-poh-ZAY | par la kehs-TYOHⁿ | ay par sa ray-POHⁿSS', ['rule', 'cloture'], RULE,
    rule('Le jury n’a plus de questions. Que dis-tu ?', 'Une phrase qui redit ta question et ta réponse, précisée par l’échange, puis un merci.')),
];

/* ── ACT 12 · À TOI, DEVANT LE JURY ───────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1351, 'Le dossier que j’ai choisi porte sur le silence dans les trains.', 'The dossier I chose is about silence on trains.', '/lə do.sje kə ʒe ʃwa.zi pɔʁt syʁ lə si.lɑ̃s dɑ̃ le tʁɛ̃/', 'luh do-SYAY kuh zhay shwa-ZEE | port sür luh see-LAHⁿSS | dahⁿ lay TREHⁿ', ['modele']),
  sent(1352, 'Les trois documents se rejoignent sur un point : le bruit fatigue.', 'The three documents agree on one point: noise is tiring.', '/le tʁwa dɔ.ky.mɑ̃ sə ʁə.ʒwaɲ syʁ œ̃ pwɛ̃ lə bʁɥi fa.tig/', 'lay trwa do-kü-MAHⁿ | suh ruh-ZHWANY | sür uhⁿ PWEHⁿ | luh BRWEE fa-TEEG', ['modele']),
  sent(1353, 'Là où ils divergent, c’est sur la manière d’obtenir le calme.', 'Where they part ways is on how to achieve calm.', '/la u il di.vɛʁʒ sɛ syʁ la ma.njɛʁ dɔp.tə.niʁ lə kalm/', 'LA oo eel dee-VEHRZH | seh sür la ma-NYEHR | dop-tuh-NEER luh KALM', ['modele'], FCVDR),
  sent(1354, 'Dès lors, on peut se demander si le silence doit être une règle ou une courtoisie.', 'That being so, one may ask whether silence should be a rule or a courtesy.', '/dɛ lɔʁ ɔ̃ pø sə də.mɑ̃.de si lə si.lɑ̃s dwa.tɛtʁ yn ʁɛgl u yn kuʁ.twa.zi/', 'deh LOR | ohⁿ PUH suh duh-mahⁿ-DAY | see luh see-LAHⁿSS dwa-TEHTR | ün REHGL | oo ün koor-twa-ZEE', ['modele'], FCVDR),
  sent(1355, 'Mon exposé suivra deux temps : ce qu’une règle peut obtenir, puis ce qu’elle ne peut pas obtenir.', 'My exposé will follow two stages: what a rule can achieve, then what it cannot.', '/mɔ̃.nɛks.po.ze sɥi.vʁa dø tɑ̃ sə kyn ʁɛgl pø ɔp.tə.niʁ pɥi sə kɛl nə pø pa.zɔp.tə.niʁ/', 'mohⁿ-nehks-poh-ZAY swee-VRA | deu TAHⁿ | suh kün REHGL | puh op-tuh-NEER | pwee suh kehl nuh PUH | pa-zop-tuh-NEER', ['modele']),
  sent(1356, 'Le silence peut être une règle dans quelques voitures, à condition de rester une courtoisie partout ailleurs.', 'Silence can be a rule in a few carriages, provided it remains a courtesy everywhere else.', '/lə si.lɑ̃s pø.tɛtʁ yn ʁɛgl dɑ̃ kɛl.kə vwa.tyʁ a kɔ̃.di.sjɔ̃ də ʁɛs.te yn kuʁ.twa.zi paʁ.tu a.jœʁ/', 'luh see-LAHⁿSS peu-TEHTR ün REHGL | dahⁿ kehl-kuh vwa-TÜR | a kohⁿ-dee-SYOHⁿ duh rehs-TAY | ün koor-twa-ZEE | par-too a-YUHR', ['modele']),
  sent(1357, 'Une question reste ouverte : qui rappellera la règle dans un train sans contrôleur ?', 'One question remains open: who will remind people of the rule on a train with no conductor?', '/yn kɛs.tjɔ̃ ʁɛs.tu.vɛʁt ki ʁa.pɛl.ʁa la ʁɛgl dɑ̃.zœ̃ tʁɛ̃ sɑ̃ kɔ̃.tʁo.lœʁ/', 'ün kehs-TYOHⁿ rehs-too-VEHRT | kee ra-pehl-RA la REHGL | dahⁿ-zuhⁿ TREHⁿ | sahⁿ kohⁿ-troh-LUHR', ['modele']),
  phrase(1358, 'une voiture silencieuse', 'a quiet carriage (on a train)', '/yn vwa.tyʁ si.lɑ̃.sjøz/', 'ün vwa-TÜR see-lahⁿ-SYEUZ', ['modele']),
  phrase(1359, 'un atelier de réparation', 'a repair workshop', '/œ̃.na.tə.lje də ʁe.pa.ʁa.sjɔ̃/', 'uhⁿ-na-tuh-LYAY | duh ray-pa-ra-SYOHⁿ', ['tache']),
  sent(1360, 'La réparation relève-t-elle d’abord des habitants ou des fabricants ?', 'Is repair first a matter for residents or for manufacturers?', '/la ʁe.pa.ʁa.sjɔ̃ ʁə.lɛv.tɛl da.bɔʁ de.za.bi.tɑ̃ u de fa.bʁi.kɑ̃/', 'la ray-pa-ra-SYOHⁿ | ruh-lehv-TEHL da-BOR | day-za-bee-TAHⁿ | oo day fa-bree-KAHⁿ', ['tache']),
  sent(1361, 'Un atelier de quartier répare des objets ; il ne change pas la façon dont on les fabrique.', 'A neighbourhood workshop repairs objects; it does not change the way they are made.', '/œ̃.na.tə.lje də kaʁ.tje ʁe.paʁ de.zɔb.ʒɛ il nə ʃɑ̃ʒ pa la fa.sɔ̃ dɔ̃.tɔ̃ le fa.bʁik/', 'uhⁿ-na-tuh-LYAY duh kar-TYAY | ray-PAR day-zob-ZHEH | eel nuh shahⁿzh PA | la fa-SOHⁿ | dohⁿ-tohⁿ lay fa-BREEK', ['tache']),
];

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS
 *
 *  Every reading lives here so the reading, the quiz and the task agree.
 *  C1 length (about 200 to 320 words; the task model about 430). Texte original écrit pour la leçon,
 *  every one. One apostrophe style, the typographic one.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the jury’s written report on your mock oral. */
export const RAPPORT_TEXT =
  'Institut Verlune · Oral blanc · Rapport du jury. Dossier : « Les jardins partagés ». Le jury salue un français précis et une diction claire. Ses remarques portent sur la méthode, non sur la langue. ' +
  'Vous avez présenté les trois documents l’un après l’autre, fidèlement, mais sans jamais les faire dialoguer : au bout de quatre minutes, nous ne savions toujours pas quelle question vous vouliez traiter. Votre plan était annoncé, mais il n’a pas été suivi, et vous avez lu vos notes presque sans lever les yeux. ' +
  'Pendant l’entretien, vous avez répondu à nos questions par oui ou par non, puis attendu la suivante. Quand M. Aubertin vous a objecté que la liste d’attente excluait une partie des habitants, vous avez renoncé à votre position en une phrase : « Vous avez raison, je n’y avais pas pensé. » Or l’objection appelait une précision, pas un abandon. Enfin, l’exposé s’est terminé sur un « voilà » qui laissait le jury sans conclusion. ' +
  'Pour le prochain oral, nous vous conseillons trois choses : tirer du dossier une vraie question, et la dire ; tenir cette question du début à la fin, y compris pendant l’entretien ; traiter chaque question du jury comme une occasion de préciser votre pensée. Hélène Rocheval, présidente du jury.';

/** Act 3: the practice dossier, three documents. */
export const DOSSIER_TEXT =
  'Dossier : « Les jardins partagés ». ' +
  'Document 1. Extrait du bilan annuel de la Ville de Sainte-Albine. La ville compte aujourd’hui quarante jardins partagés, soit près de neuf cents parcelles. Tous sont pleins, et la liste d’attente dépasse trois cents noms. La municipalité y voit un outil de politique alimentaire : produire en ville, c’est raccourcir les circuits et apprendre aux familles à cuisiner des légumes frais. Elle prévoit d’ouvrir dix jardins de plus d’ici trois ans. ' +
  'Document 2. Témoignage de Mireille Kassab, jardinière au jardin des Tilleuls. « Je suis arrivée pour les tomates, je l’avoue. Mais ce qui me fait revenir, ce sont les gens. Le samedi, on partage les outils, on se donne des graines, on discute avec des voisins qu’on croisait depuis dix ans sans se parler. Aux Tilleuls, il n’y a plus une parcelle libre depuis des années. L’été dernier, un retraité a appris à deux adolescents à greffer un pommier. Des légumes, on en récolte, bien sûr, mais pas de quoi remplir un frigo. » ' +
  'Document 3. Tribune de Paul-Henri Desgranges, agronome. « Les jardins partagés n’ont jamais été aussi demandés, et c’est tant mieux. Mais il faut cesser de leur demander ce qu’ils ne peuvent pas donner. Une parcelle de quelques mètres carrés, cultivée le week-end, ne nourrira jamais une famille, et l’ensemble des jardins d’une ville ne pèse presque rien face à ce qu’elle consomme. Présenter ces jardins comme une politique alimentaire, c’est s’exposer à les juger sur leurs récoltes, et donc à les condamner. Leur valeur est ailleurs : ils créent du voisinage, ils apprennent la patience des saisons, ils rendent un coin de ville à ceux qui l’habitent. C’est sur ce terrain qu’il faut les défendre, et les financer. »';

/** Act 6: your exposé on the dossier, as delivered (about four minutes). */
export const EXPOSE_TEXT =
  'Merci. Le dossier que j’ai choisi réunit trois documents sur les jardins partagés de Sainte-Albine : un extrait du bilan de la ville, le témoignage d’une jardinière et la tribune d’un agronome. Ces trois documents répondent, chacun à sa manière, à une même question : à quoi sert un jardin partagé ? La ville répond : à nourrir. L’agronome répond : à rassembler. Dès lors, on peut se demander si les jardins partagés nourrissent la ville ou s’ils la rassemblent. Je vous propose de la traiter en deux temps : d’abord ce que les jardins produisent, ensuite ce qu’ils font vraiment. ' +
  'Premier temps, donc, les récoltes. Pour ne pas dépasser mon temps, je passerai vite sur ce point, car les documents se rejoignent. La jardinière le dit elle-même : on récolte, mais pas de quoi remplir un frigo. L’agronome va plus loin : l’ensemble des jardins pèse très peu face à ce que la ville consomme. Seul le bilan municipal en fait une politique alimentaire, et il ne donne aucun chiffre de production. ' +
  'Je viens de montrer ce que les jardins produisent ; voyons ce qu’ils font vraiment. Mireille Kassab le raconte mieux qu’aucun rapport : on vient pour les tomates, on reste pour les voisins. Un retraité qui apprend à deux adolescents à greffer un pommier, cela ne se mesure pas en kilos. L’agronome en tire une conséquence que je partage : si l’on juge les jardins sur leurs récoltes, on finira par les condamner ; si on les juge sur ce qu’ils rassemblent, on comprend pourquoi trois cents personnes attendent une parcelle. ' +
  'Je reviens à ma question de départ. Ma réponse tient en une phrase : un jardin partagé nourrit peu la ville, mais il la rassemble, et c’est à ce titre qu’une municipalité peut le financer. Reste une question que le dossier laisse ouverte : qui ne demande même pas de parcelle ? Je vous remercie ; je me tiens à votre disposition pour vos questions.';

/** Act 9: an extract of the entretien, the objection and the concession. */
export const ENTRETIEN_TEXT =
  'Extrait de l’entretien. ' +
  'M. Aubertin : Vous défendez des jardins qui rassemblent. Mais trois cents personnes attendent : ces jardins profitent peut-être surtout à ceux qui ont déjà une parcelle, et du temps. ' +
  'Toi : Vous avez raison de le souligner, et c’est d’ailleurs la question que j’ai laissée ouverte. Je vous accorde que trois cents noms en attente, c’est beaucoup, et que le dossier ne dit pas qui sont ces personnes. Votre remarque m’oblige à préciser ma pensée. Je ne dis pas que les jardins sont ouverts à tous ; je dis qu’ils créent du lien là où ils existent, et que c’est ce lien qu’il faut étendre. ' +
  'M. Aubertin : Étendre, mais comment, si la ville n’a plus de terrain ? ' +
  'Toi : En première analyse, je dirais qu’on peut limiter la durée des parcelles, deux ans par exemple au lieu de dix, pour qu’elles changent de mains. ' +
  'Mme Rocheval : Mais alors, votre jardinière, celle qui revient pour les voisins, devrait partir au bout de deux ans. ' +
  'Toi : C’est une objection sérieuse, et je la prends au sérieux. Elle nuance ma proposition sans renverser ma position : on pourrait garder, à côté des parcelles individuelles, des parcelles collectives ouvertes à tous. Je maintiens néanmoins que la valeur d’un jardin partagé est d’abord sociale ; votre question montre simplement qu’il faut aussi en partager l’accès. ' +
  'Mme Rocheval : Merci, c’est très clair.';

/** Act 12: the model exposé, on a DIFFERENT dossier from the task’s, so the
 *  task is not given away. */
export const MODELE_TEXT =
  'Bonjour. Le dossier que j’ai choisi porte sur le silence dans les trains. Il réunit trois documents : un communiqué du Réseau ferroviaire de l’Estuaire, qui annonce des voitures silencieuses sur ses lignes de banlieue ; le témoignage de Gaël Morin, contrôleur ; et une chronique de la sociologue Anne-Sophie Varenne. ' +
  'Les trois documents se rejoignent sur un point : le bruit fatigue. Là où ils divergent, c’est sur la manière d’obtenir le calme. Le Réseau veut une règle et des panneaux ; le contrôleur raconte qu’il n’a ni le temps ni l’envie de faire la police ; la sociologue rappelle qu’un espace public vit aussi de ses bruits. Dès lors, on peut se demander si le silence doit être une règle ou une courtoisie. Mon exposé suivra deux temps : ce qu’une règle peut obtenir, puis ce qu’elle ne peut pas obtenir. ' +
  'D’abord, ce qu’une règle peut obtenir. Le communiqué l’affirme : dans les voitures signalées, les voyageurs baissent la voix d’eux-mêmes. Une règle donne un repère, et elle protège ceux qui n’osent pas demander le silence à un inconnu. ' +
  'J’en viens à mon second temps. Une règle ne crée pas la courtoisie, et le contrôleur le dit sans détour : si personne ne la fait respecter, elle s’use. La sociologue va plus loin : à vouloir un train muet, on oublie que l’enfant qui rit ou le voisin qui demande son chemin font aussi partie du voyage. ' +
  'Je reviens donc à ma question. Ma réponse est nuancée : le silence peut être une règle dans quelques voitures, à condition de rester une courtoisie partout ailleurs. Une question reste ouverte : qui rappellera la règle dans un train sans contrôleur ? Je vous remercie ; je me tiens à votre disposition pour vos questions.';

/** The task’s dossier, printed in the brief because `task` has no source
 *  field (shapes doc §1.4). */
export const TASK_DOC =
  'DOSSIER · « Réparer plutôt que racheter ». ' +
  'Document 1, communiqué de la Ville de Sainte-Albine : le premier atelier de réparation municipal ouvrira en septembre. Deux soirs par semaine, des bénévoles y aideront les habitants à réparer leurs petits appareils, leurs vélos et leurs vêtements. ' +
  'Document 2, témoignage de Lucie Fortier, couturière bénévole : « Les gens arrivent avec un grille-pain et repartent en ayant appris quelque chose. Mais certaines pièces sont introuvables, et parfois on ne peut rien faire. » ' +
  'Document 3, chronique de l’économiste Bertrand Ollivier : « Un atelier de quartier ne changera pas la façon dont les objets sont fabriqués. Si l’on veut vraiment réparer, il faut des pièces disponibles et des prix qui rendent la réparation moins chère que l’achat. »';

/** The annotated model answer to the task, about three and a half minutes
 *  spoken (about 430 words at C1 exam pace). */
export const TASK_MODEL =
  'Merci. Le dossier que j’ai choisi réunit trois documents sur la réparation des objets : le communiqué de la Ville de Sainte-Albine, qui annonce son premier atelier de réparation, le témoignage de Lucie Fortier, couturière bénévole, et la chronique de l’économiste Bertrand Ollivier.\n' +
  'Les trois documents se rejoignent sur un point : réparer vaut mieux que racheter. Là où ils divergent, c’est sur la personne qui doit agir. La ville mise sur les habitants et sur des bénévoles ; l’économiste soutient que rien ne changera sans les fabricants ; la couturière, entre les deux, raconte à la fois ce que l’atelier apporte et ce qui lui manque. Dès lors, on peut se demander si la réparation relève d’abord des habitants ou des fabricants. Je vous propose de traiter cette question en deux temps : ce qu’un atelier de quartier peut faire, puis ce qu’il ne peut pas faire seul.\n' +
  'Premier temps, donc, ce que l’atelier peut faire. Le communiqué l’annonce : deux soirs par semaine, des bénévoles aideront les habitants à réparer leurs appareils, leurs vélos et leurs vêtements. Lucie Fortier en souligne le vrai bénéfice : on arrive avec un grille-pain et on repart en ayant appris quelque chose. L’atelier ne répare donc pas seulement des objets ; il rend aux habitants un savoir-faire. On peut y voir aussi un lieu de rencontre : des voisins qui ne se seraient jamais parlé passent une soirée autour d’un vélo. Pour la ville, l’atelier est un geste simple, peu coûteux, et visible.\n' +
  'J’en viens à mon second temps. Ce même témoignage met en garde contre un excès d’optimisme : certaines pièces sont introuvables, et parfois on ne peut rien faire. C’est précisément le point de Bertrand Ollivier : un atelier de quartier répare des objets, il ne change pas la façon dont on les fabrique. Sans pièces disponibles et sans prix raisonnables, la meilleure volonté s’épuise. Autrement dit, les bénévoles peuvent réparer un grille-pain ; ils ne peuvent pas obliger quiconque à fabriquer la pièce qui manque. Le problème se pose donc en amont, là où les objets sont conçus et vendus.\n' +
  'Je reviens à ma question de départ. Ma réponse tient en une phrase : la réparation commence chez les habitants, mais elle ne durera que si les fabricants la rendent possible. L’atelier municipal est donc utile, à condition de ne pas servir d’alibi : il ne faudrait pas qu’une ville, parce qu’elle a ouvert un atelier, se croie quitte de la question. Reste une question que le dossier laisse ouverte : qui, de la ville ou de l’État, peut obliger un fabricant à vendre ses pièces ? Je vous remercie ; je me tiens à votre disposition pour vos questions.';
