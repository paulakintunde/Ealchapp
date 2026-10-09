// c2.01.l1 « Précision, nuance et l’implicite » — the authored corpus, the
// identity block and the citation constants. DRAFT, first lesson of the C2
// band. To RICH-LESSON-STANDARD.md and the B1-BUILD-PLAYBOOK.md §6 house
// rules, with the C2 rules of C2-BUILD-PLAN.md ("What is different at C2")
// and the c2.01 brief in C2-BUILD-LOG.md ("Wave 1 author briefs").
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
// No Postgres read or write was made while authoring this file: the id home
// (nuances-et-registres, 1400-1599, no widen needed) and the sub-theme
// append (« la précision et l’implicite ») are both already recorded as
// done in C2-BUILD-PLAN.md, 2026-10-09, read-only against live Postgres by
// the planning pass. This file only needs to stay inside the claimed block.
//
// STABLE EXPORTS (a later C2 lesson may import REFRAME from this file and
// quote it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME,
// LEVEL, E, ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE FIRST C2 LESSON. No new grammar (C2-BUILD-PLAN.md: "C2 adds no new
//   grammar"): every act is register, connotation, nuance and the implicit,
//   read AND produced.
//
//     act 1   the problem: a word chosen by its English cognate instinct
//             costs a relationship, not a grammar point
//     act 2   near-synonym families as ladders: register (familier / courant
//             / soigné / littéraire), intensity, moral colour, domain
//     act 3   choosing the one word a given context calls for, among several
//             real near-synonyms
//     act 4   the cognate reflex: frustré, intéressant, demander, réaliser,
//             ignorer, charmant — six words an English speaker reaches for
//             because they look English, each wrong for a reason
//     act 5   the implicit, recapped past c1.20: irony, understatement
//             (litote), presupposition — three devices, now read for the
//             REGISTER they carry, not only their literal content
//     act 6   not reading too much, not reading too little: three replies to
//             one implicit line, exactly one register-matched
//     act 7   producing a reply that matches an implied register, with the
//             mismatches that give the reflex away (too literal, too strong,
//             too casual)
//     act 8   the task: reply to a loaded message in the register it calls
//             for, using at least two precisely chosen near-synonyms
//
//   NOT OWNED, CITED ONLY (all published, v88, C1 CLOSED):
//     - hedging and modality in speech (softening, distancing, tact) are
//       c1.06's (« la leçon 6 du C1 »); act 1 quotes its reframe once and
//       never re-teaches softening.
//     - connotation, intensity and register in synonym choice generally are
//       c1.17's (« la leçon 17 du C1 »); acts 2 and 3 build past it into a
//       dedicated ladder method and a cognate-specific trap it never covered.
//     - naming a stylistic device’s effect (litote, antiphrase, chiasme, as
//       LITERARY figures) is c1.19's (« la leçon 19 du C1 »); acts 5 to 7
//       read irony and understatement as everyday REGISTER signals, not as
//       figures to name in a text.
//     - reading irony, presupposition and omission is c1.20's (« la leçon 20
//       du C1 »), RECOGNITION ONLY. Act 5 recaps it in one section, by trail
//       position, with its own invented examples (never c1.20's); every act
//       from 6 on asks for something c1.20 never did: matching a REPLY to
//       the register the implicit carries.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. ID DISCIPLINE
// ══════════════════════════════════════════════════════════════════════════
//
//   THEME `nuances-et-registres` (domain `fondations`) already ranges c1-c2
//   in Postgres (C2-BUILD-PLAN.md, probed 2026-10-08): no widen needed. The
//   sub-theme « la précision et l’implicite » was appended 2026-10-09,
//   verified by read-back (shared/memory). This lesson owns block 1400-1599
//   AND NOTHING ELSE: c1.06 holds 1000-1199, c1.17 holds 1200-1399, both
//   published, neither touched here.
//
//   USED: .1400-.1570 across eight act blocks (§H below), 147 rows total;
//   .1571-.1599 left
//   free inside the claimed block for the pre-review pass.
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. WHAT IS NOT REUSED, AND WHY
// ══════════════════════════════════════════════════════════════════════════
//
//   No row from c1.06, c1.17, c1.19 or c1.20 is reused by id. Those lessons
//   are published (v88) and their ids resolve through Postgres and the
//   content packs, not through the local `seed.json` cut this file can read
//   without a database connection, and this is a DRAFT authored with no
//   Postgres session open. Each predecessor is cited the house way instead:
//   its REFRAME is imported by name from its own corpus file and quoted
//   verbatim (never retyped), and its trail position is read straight out of
//   `seed.json`, where all 24 C1 units already carry a real `seq` (v88
//   publish). Every example sentence in this lesson is newly authored for
//   c2.01, so c1.20's rule ("cite it and move past it, never re-teach its
//   examples") is satisfied by construction, not by a cross-file lookup this
//   draft has no way to verify.
//
// ══════════════════════════════════════════════════════════════════════════
//  §C. SOURCES FOR CONNOTATION AND REGISTER CALLS
// ══════════════════════════════════════════════════════════════════════════
//
//   Le Robert and TLFi/CNRTL entries for the register label (familier,
//   courant, soigné/soutenu, littéraire) and the connotation note on each
//   near-synonym family. Where a call is contested, it is stated as « selon
//   l’Académie française » or « selon Le Robert », never as a single flat
//   verdict — the rule c1.18's false-friends table used. Two contested
//   items in act 4: `réaliser` in the sense "comprendre" (Académie’s « Dire,
//   ne pas dire » calls it an anglicism to avoid in soigné writing; Le Robert
//   records the sense as current) and `ignorer` in the sense "ne pas tenir
//   compte de" (same shape of disagreement). Both are presented with both
//   verdicts, never as a single rule.
//
// ══════════════════════════════════════════════════════════════════════════
//  §D. FACT CHECK
// ══════════════════════════════════════════════════════════════════════════
//
//   PEOPLE, ALL INVENTED: Léa Brassard, Marc Hamelin, M. Fortin (donor),
//   Camille Verdier, Nadia Tousignant, Hugo Delisle, Sana Okafor, Thibault
//   Mercier, Madame Oliveri (landlord).
//   ORGANISATIONS, ALL INVENTED: l’association Trame, l’Atelier Verdier
//   (design studio), le club de lecture des Trois Chênes, le jardin
//   communautaire de la rue Garnier.
//   REAL PLACES, AS PLACES ONLY: Montréal.
//   LOW-HEAT TOPICS ONLY: a donor’s reaction to a programme change, a late
//   software delivery, a landlord’s notice about renovation noise, a book
//   club disagreement, a community garden plot dispute, a lukewarm
//   restaurant review, small talk about the weather. No living person, no
//   political topic, no health claim, no legal fact.
//   QUOTATIONS: none from a real person or text; every quoted line is
//   invented for this lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  §E. HOUSE RULES APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use vous where the situation calls for
//   it (a donor, a landlord, a first message to a new colleague). No em
//   dash. No U+203F tie. Never "honnête" / "honest" / "honnêtement".
//   Typographic ’ throughout. No spaced « ? » or « ! » in a scene or story
//   bubble. French only on the learner surface; English authored behind
//   every `en` field and every trailing « EN: », never shown by default.
//   Citations by trail position in French words only, never a raw id.
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
  id: 'c2.01',
  seq: 1,
  title: 'C2 Language Use: Precision, Nuance and the Implicit',
  sub: "Précision, nuance et l’implicite",
  canDo: "Can choose, among several real near-synonyms, the one word that carries the exact register and connotation a context calls for; can read what a short French text implies without stating it (irony, understatement, presupposition) and produce a reply that matches the register the implicit carries, neither flattening it nor overreacting to it",
  prereqUnitIds: ['c1.20', 'c1.06', 'c1.17', 'c1.19'],
} as const;

export const LESSON_ID = 'c2.01.l1';
export const THEME = 'nuances-et-registres';
export const LEVEL = 'c2' as const;

/** ONE block. c1.06 holds 1000-1199, c1.17 holds 1200-1399, both published,
 *  neither touched here. */
export const ID_RANGES = [[1400, 1599]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  All 24 C1 units are in `seed.json` with a real `seq` (v88 publish,
 *  C1-BUILD-LOG.md), so a C1 citation is read straight from the seed, the
 *  same way a B1/B2 citation always has been. No hardcoded plan map needed.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const n = SEQ.get(unitId);
  if (!n) throw new Error(`c2.01: ${unitId} is not in the seed`);
  return `la leçon ${n} du C1`;
}

export const C120_UNIT = 'c1.20';
export const C106_UNIT = 'c1.06';
export const C117_UNIT = 'c1.17';
export const C119_UNIT = 'c1.19';

export const C120_REF = refFr(C120_UNIT);
export const C106_REF = refFr(C106_UNIT);
export const C117_REF = refFr(C117_UNIT);
export const C119_REF = refFr(C119_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as C120_REFRAME, REFRAME_EN as C120_REFRAME_EN } from '../c1/lire-entre-les-lignes-corpus.ts';
export { REFRAME as C106_REFRAME, REFRAME_EN as C106_REFRAME_EN } from '../c1/nuancer-oral-corpus.ts';
export { REFRAME as C117_REFRAME, REFRAME_EN as C117_REFRAME_EN } from '../c1/synonymes-nuances-corpus.ts';
export { REFRAME as C119_REFRAME, REFRAME_EN as C119_REFRAME_EN } from '../c1/figures-effet-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE DIAL. Every word in a near-synonym family sits at a point on a dial
 *  (familier to littéraire, faible to fort, neutre to connoté), and reading
 *  an implicit line means reading the dial the OTHER person has set, so your
 *  reply can be set to the same point rather than a point you invented.
 *  Choosing a word is turning the dial yourself; reading the implicit is
 *  reading theirs; replying in register is matching it.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Chaque mot a un curseur : où tu le places dit autant que ce qu’il signifie.";
export const REFRAME_EN = 'Every word has a dial: where you set it says as much as what it means.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le mot le plus poli est toujours le bon.',
    why: "False where act 3 and act 7 have to hold: a landlord notice that needs \"exiger\" and gets the soft \"suggérer\" instead fails to protect the tenant, and a reply that stays falsely cheerful after an ironic complaint reads as either obtuse or mocking. The curseur can sit anywhere the situation calls for.",
  },
  {
    text: 'Il suffit de connaître le sens pour bien choisir.',
    why: "False where act 2 has to hold: déçu, frustré, vexé and exaspéré share a dictionary neighbourhood (an unmet expectation) and differ only in register, moral colour and intensity, which no dictionary definition alone sorts out.",
  },
  {
    text: "Lire l’implicite, c’est deviner ce que la personne pense vraiment.",
    why: `False where act 6 has to hold, and the exact fault ${C120_REF} already punished: a reader who finds a hidden meaning everywhere misreads as surely as one who finds none. The register must be read from a cue in the line, never invented.`,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ROW CONSTRUCTORS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
/** Named for a recap or a wrong-option card: never released, never spoken. */
const SR = ['sentence', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, tags, drills, version: 1,
  grammarPoints: ['registre-et-connotation'], ...extra,
});
const phrase = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  ...sent(n, fr, en, tags, drills, extra), kind: 'phrase',
});

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 1 ROWS — Le mot qui blesse (1400-1409)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT1_ROWS: Row[] = [
  sent(1400, "C’est dommage, mais on fera avec.", "That’s a shame, but we’ll manage.", ['comprehension', 'donateur']),
  sent(1401, "Le donateur était déçu par le changement de programme.", 'The donor was disappointed by the change of programme.', ['registre', 'decu']),
  sent(1402, "Le donateur était frustré par le changement de programme.", 'The donor was frustrated by the change of programme.', ['registre', 'frustre'], SR),
  sent(1403, "Déçu dit une attente qui n’a pas été remplie, sans accuser personne.", 'Déçu names an unmet expectation, without blaming anyone.', ['regle']),
  sent(1404, "Frustré dit un besoin bloqué, un mot de la psychologie, plus clinique que chaleureux ici.", 'Frustré names a blocked need, a term from psychology, more clinical than warm here.', ['regle']),
  phrase(1405, 'un courriel de suivi', 'a follow-up email', ['bureau']),
  sent(1406, "La bonne équipe choisit le mot avant d’écrire, pas après.", 'The right team chooses the word before writing, not after.', ['usage']),
  sent(1407, "Dans un rapport médical, le mot exact protège le patient autant que le médecin.", 'In a medical report, the exact word protects the patient as much as the doctor.', ['usage', 'medical']),
  sent(1408, "Dans un courriel au client, un mot trop fort met le feu à une situation calme.", 'In an email to a client, a too-strong word sets fire to a calm situation.', ['usage', 'client']),
  sent(1409, "À l’oral, un mot trop faible laisse croire que rien de grave ne s’est passé.", 'Said aloud, a too-weak word suggests nothing serious happened.', ['usage', 'oral']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 2 ROWS — Les nuances de sens (1410-1439)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT2_ROWS: Row[] = [
  // Famille CONTENT: content / heureux / ravi / comblé / aux anges
  sent(1410, 'Je suis content du résultat.', 'I am pleased with the result.', ['famille-content', 'courant']),
  sent(1411, 'Je suis heureux de ce résultat.', 'I am happy with this result.', ['famille-content', 'courant']),
  sent(1412, 'Je suis ravi de ce résultat.', 'I am delighted with this result.', ['famille-content', 'soigne']),
  sent(1413, 'Je suis comblé par ce résultat.', 'I am fulfilled by this result.', ['famille-content', 'soutenu']),
  sent(1414, 'Je suis aux anges depuis ce résultat.', "I’m over the moon since this result.", ['famille-content', 'familier']),
  // Famille CRITIQUER: critiquer / reprocher / blâmer / incriminer / taper sur
  sent(1415, 'Elle critique la décision du conseil.', 'She criticises the board’s decision.', ['famille-critiquer', 'courant']),
  sent(1416, 'Elle reproche au conseil son silence.', 'She blames the board for its silence.', ['famille-critiquer', 'courant']),
  sent(1417, 'Elle blâme le conseil pour cet échec.', 'She blames the board, morally, for this failure.', ['famille-critiquer', 'soutenu']),
  sent(1418, "Le rapport incrimine directement le conseil d’administration.", 'The report directly implicates the board of directors.', ['famille-critiquer', 'soutenu']),
  sent(1419, 'Il arrête pas de taper sur le conseil.', "He won’t stop slamming the board.", ['famille-critiquer', 'familier']),
  // Famille PRÉOCCUPÉ: préoccupé / inquiet / anxieux / angoissé / stressé
  sent(1420, "Elle est préoccupée par les chiffres du trimestre.", "She is preoccupied by this quarter’s figures.", ['famille-inquiet', 'soigne']),
  sent(1421, "Elle est inquiète pour les chiffres du trimestre.", "She is worried about this quarter’s figures.", ['famille-inquiet', 'courant']),
  sent(1422, "Elle est anxieuse à l’idée de présenter les chiffres.", 'She is anxious about the idea of presenting the figures.', ['famille-inquiet', 'soutenu']),
  sent(1423, "Elle est angoissée par la réunion de vendredi.", "She is deeply distressed by Friday’s meeting.", ['famille-inquiet', 'soutenu']),
  sent(1424, "Elle est stressée depuis lundi.", "She’s been stressed since Monday.", ['famille-inquiet', 'familier']),
  // Famille DEMANDER (force): suggérer / demander / réclamer / exiger / revendiquer
  sent(1425, 'Le comité suggère une réunion supplémentaire.', 'The committee suggests an extra meeting.', ['famille-demander', 'soigne']),
  sent(1426, 'Le comité demande une réunion supplémentaire.', 'The committee asks for an extra meeting.', ['famille-demander', 'courant']),
  sent(1427, 'Le comité réclame une réunion supplémentaire, et vite.', 'The committee is calling for an extra meeting, and soon.', ['famille-demander', 'soutenu']),
  sent(1428, 'Le comité exige une réunion supplémentaire avant vendredi.', 'The committee demands an extra meeting before Friday.', ['famille-demander', 'soutenu']),
  sent(1429, 'Le syndicat revendique une réunion supplémentaire pour tous les postes concernés.', 'The union demands, as a matter of right, an extra meeting for every post concerned.', ['famille-demander', 'soutenu']),
  // tapTable support rows: register markers across other everyday ladders
  sent(1430, "Elle a laissé tomber le projet.", 'She dropped the project.', ['registre-marqueur', 'familier']),
  sent(1431, "Elle a abandonné le projet.", 'She abandoned the project.', ['registre-marqueur', 'courant']),
  sent(1432, "Elle a renoncé au projet.", 'She gave up on the project.', ['registre-marqueur', 'soigne']),
  sent(1433, "C’est pas mal, ton rapport.", "Your report’s not bad.", ['registre-marqueur', 'familier']),
  sent(1434, "Ton rapport est bon.", 'Your report is good.', ['registre-marqueur', 'courant']),
  sent(1435, "Votre rapport est remarquable.", 'Your report is remarkable.', ['registre-marqueur', 'soutenu']),
  phrase(1436, 'la connotation', 'connotation', ['metalangage']),
  phrase(1437, 'le registre', 'register', ['metalangage']),
  phrase(1438, "l’intensité", 'intensity', ['metalangage']),
  phrase(1439, "la couleur morale d’un mot", "a word’s moral colour", ['metalangage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 3 ROWS — Choisir le mot exact (1440-1464)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT3_ROWS: Row[] = [
  sent(1440, "Hé, t’as vu le résultat, non. Plutôt content, toi.", 'Hey, did you see the result, right. Pretty pleased, you.', ['contexte-ami', 'familier']),
  sent(1441, "Nous sommes ravis de vous informer que votre candidature a été retenue.", 'We are delighted to inform you that your application has been accepted.', ['contexte-formel', 'soigne']),
  sent(1442, "Le narrateur se dit comblé par cette existence frugale.", 'The narrator calls himself fulfilled by this frugal existence.', ['contexte-litteraire', 'litteraire']),
  sent(1443, "Franchement, ça me fait vraiment plaisir.", 'Frankly, that really makes me happy.', ['contexte-ami', 'familier']),
  sent(1444, "Monsieur Fortin, nous regrettons sincèrement cette erreur et nous la corrigeons dès aujourd’hui.", 'Mr. Fortin, we sincerely regret this error and are correcting it today.', ['contexte-formel', 'soutenu']),
  sent(1445, "La propriétaire exige que les travaux cessent avant 19 heures, selon le règlement.", 'The landlady requires the work to stop before 7 p.m., under the by-law.', ['contexte-formel', 'exiger']),
  sent(1446, "La propriétaire suggère que les travaux cessent plus tôt, si possible.", 'The landlady suggests the work stop earlier, if possible.', ['contexte-formel', 'suggerer'], SR),
  sent(1447, "Peux-tu juste arrêter de taper sur son idée devant tout le monde ?", 'Can you just stop slamming his idea in front of everyone?', ['contexte-ami', 'familier']),
  sent(1448, "Je vous invite à reconsidérer cette proposition, qui me semble prématurée.", 'I invite you to reconsider this proposal, which seems premature to me.', ['contexte-formel', 'soutenu']),
  sent(1449, "Son mémoire incrimine clairement la gestion du dossier par le comité.", 'His dissertation clearly implicates the committee’s handling of the file.', ['contexte-formel', 'incriminer']),
  sent(1450, "Bon, ok, c’est pas terrible comme idée, je te le dis cash.", "Okay, that’s not a great idea, I’ll tell you straight.", ['contexte-ami', 'familier']),
  sent(1451, "Le comité de lecture juge le roman inégal, mais ambitieux.", 'The reading committee judges the novel uneven, but ambitious.', ['contexte-formel', 'soigne']),
  sent(1452, "Sana est vraiment stressée pour l’entrevue de demain.", "Sana’s really stressed about tomorrow’s interview.", ['contexte-ami', 'familier']),
  sent(1453, "Sana se dit légitimement anxieuse à l’approche de l’entrevue.", 'Sana describes herself as legitimately anxious as the interview approaches.', ['contexte-formel', 'soutenu']),
  sent(1454, "On va juste laisser tomber, c’est pas grave.", "We’ll just drop it, no big deal.", ['contexte-ami', 'familier']),
  sent(1455, "Le conseil a formellement renoncé à ce projet lors de sa dernière séance.", 'The board formally abandoned this project at its last session.', ['contexte-formel', 'soutenu']),
  sent(1456, "Les habitants du quartier revendiquent un droit de regard sur le futur jardin.", 'The neighbourhood residents claim a right, as a matter of principle, to a say on the future garden.', ['contexte-formel', 'revendiquer']),
  sent(1457, "Les habitants demandent juste qu’on les consulte pour le futur jardin.", 'The residents are simply asking to be consulted about the future garden.', ['contexte-formel', 'demander'], SR),
  sent(1458, "Thibault réclame une place au jardin communautaire depuis deux ans.", 'Thibault has been calling for a plot at the community garden for two years.', ['contexte-formel', 'reclamer']),
  sent(1459, "Franchement, c’était pas mal, son plat, mais sans plus.", "Frankly, his dish wasn’t bad, but nothing special.", ['contexte-ami', 'familier']),
  sent(1460, "La cuisine de cet établissement se révèle honorable sans atteindre l’excellence.", "This restaurant’s cooking proves respectable without reaching excellence.", ['contexte-formel', 'soutenu']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 4 ROWS — Le réflexe du mot anglais (1465-1489)
 *
 *  Six cognate traps: the French word that LOOKS English and is reached for
 *  first, against the word that actually carries the wanted register. Each
 *  pair is a real, documented connotation gap, not a false-friend meaning
 *  error (that territory belongs to c1.18).
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT4_ROWS: Row[] = [
  // frustré (clinical, narrow: a blocked need) vs the real family of reactions
  sent(1465, "Je suis frustré que la réunion soit annulée.", "I’m frustrated that the meeting got cancelled.", ['piege-frustre', 'reflexe-anglais']),
  sent(1466, "Je suis déçu que la réunion soit annulée.", "I’m disappointed that the meeting got cancelled.", ['piege-frustre', 'reglage']),
  sent(1467, "Je suis vexé que la réunion soit annulée sans un mot.", "I’m hurt that the meeting got cancelled without a word.", ['piege-frustre', 'reglage']),
  sent(1468, "Je suis exaspéré, c’est la troisième fois ce mois-ci.", "I’m exasperated, this is the third time this month.", ['piege-frustre', 'reglage']),
  // intéressant (overused cognate, and a polite non-committal in French)
  sent(1469, "C’est intéressant, ton projet.", 'That is interesting, your project.', ['piege-interessant', 'reflexe-anglais']),
  sent(1470, "C’est passionnant, ton projet, j’ai hâte de voir la suite.", "That’s gripping, your project, I can’t wait to see more.", ['piege-interessant', 'reglage']),
  sent(1471, "« C’est intéressant » dit parfois poliment : je ne sais pas trop quoi en penser.", "\"That’s interesting\" sometimes politely means: I’m not sure what to make of it.", ['piege-interessant', 'regle']),
  // demander (under-strength: the cognate instinct of "demand" lands on neutral "ask")
  sent(1472, "Je te demande de corriger le rapport avant demain.", "I’m asking you to correct the report before tomorrow.", ['piege-demander', 'reflexe-anglais']),
  sent(1473, "J’exige que le rapport soit corrigé avant demain.", 'I demand that the report be corrected before tomorrow.', ['piege-demander', 'reglage']),
  // réaliser (contested anglicism in the sense "comprendre")
  sent(1474, "J’ai réalisé mon erreur trop tard.", 'I realized my mistake too late.', ['piege-realiser', 'reflexe-anglais']),
  sent(1475, "Je me suis rendu compte de mon erreur trop tard.", 'I became aware of my mistake too late.', ['piege-realiser', 'reglage']),
  sent(1476, "Selon l’Académie française, « réaliser » pour « comprendre » reste à éviter à l’écrit soigné ; Le Robert constate pourtant cet emploi dans l’usage courant.", "According to the Académie française, « réaliser » for « comprendre » is still best avoided in careful writing; Le Robert nonetheless records this use as current.", ['piege-realiser', 'contested']),
  // ignorer (contested anglicism in the sense "ne pas tenir compte de")
  sent(1477, "Elle a ignoré ma remarque pendant toute la réunion.", 'She ignored my remark all through the meeting.', ['piege-ignorer', 'reflexe-anglais']),
  sent(1478, "Elle n’a pas tenu compte de ma remarque pendant toute la réunion.", 'She disregarded my remark all through the meeting.', ['piege-ignorer', 'reglage']),
  sent(1479, "Selon Le Robert, « ignorer » signifie d’abord ne pas savoir ; l’Académie rappelle que « ne pas tenir compte de » reste le tour le plus sûr à l’écrit.", "According to Le Robert, « ignorer » first means not to know; the Académie notes that « ne pas tenir compte de » remains the safest phrasing in writing.", ['piege-ignorer', 'contested']),
  // charmant used insincerely (a lexical, not discourse-level, irony marker)
  sent(1480, "Charmant, ce commentaire, vraiment.", 'Charming, that comment, really.', ['piege-charmant', 'ironie-lexicale']),
  sent(1481, "« Charmant » dit froidement signale souvent le contraire de ce qu’il dit.", "\"Charmant\" said coldly often signals the opposite of what it says.", ['piege-charmant', 'regle']),
  phrase(1482, 'le réflexe du mot anglais', 'the English-cognate reflex', ['metalangage']),
  phrase(1483, 'un faux ami de registre', 'a register false friend', ['metalangage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 5 ROWS — Ce que le texte laisse entendre (1490-1509)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT5_ROWS: Row[] = [
  sent(1490, "On a eu tout le loisir d’apprécier le nouveau délai.", "We had all the time in the world to enjoy the new deadline.", ['implicite-ironie']),
  sent(1491, "Cette phrase ironique dit l’inverse de ce qu’elle affirme, et seul le contexte le prouve.", 'This ironic line says the opposite of what it states, and only the context proves it.', ['regle']),
  sent(1492, "Le voisin a dit que le chantier était « un peu bruyant ».", 'The neighbour said the building site was "a bit noisy".', ['implicite-litote']),
  sent(1493, "La litote dit moins pour faire entendre plus ; « un peu » couvre souvent beaucoup.", 'Understatement says less to suggest more; "a bit" often covers a lot.', ['regle']),
  sent(1494, "On a encore eu le temps de refaire le planning ce mois-ci.", "We’ve had time to redo the schedule again this month.", ['implicite-presuppose']),
  sent(1495, "« Encore » présuppose que ça s’était déjà produit ; ici, le ton dit l’agacement, pas la neutralité.", '"Encore" presupposes it had already happened; here the tone signals irritation, not neutrality.', ['regle']),
  sent(1496, "Camille a écrit : « On a eu l’occasion de revoir le planning, comme d’habitude. »", "Camille wrote: \"We got the chance to revisit the schedule, as usual.\"", ['implicite-mixte']),
  sent(1497, "« Comme d’habitude » présuppose une répétition ; « l’occasion » est ironique : ce n’est pas une chance, c’est un contretemps de plus.", "\"As usual\" presupposes a repetition; \"l’occasion\" is ironic: it is not a stroke of luck, it is one more setback.", ['regle']),
  sent(1498, "Le client a écrit : « Le service était... particulier. »", 'The client wrote: "The service was... particular."', ['implicite-litote']),
  sent(1499, "« Particulier » laissé en suspens, avec des points de suspension, dit poliment : mauvais.", 'Left hanging with an ellipsis, "particulier" politely means: bad.', ['regle']),
  sent(1500, "Léa a écrit : « M. Fortin a eu la bonté de nous écouter jusqu’au bout. »", 'Léa wrote: "Mr. Fortin was kind enough to hear us out to the end."', ['implicite-ironie']),
  sent(1501, "« A eu la bonté de » sur un ton froid souligne un effort qui n’allait pas de soi, pas un vrai compliment.", "\"Was kind enough to\" said coldly underlines an effort that was not a given, not a real compliment.", ['regle']),
  sent(1502, "Le critique a écrit que le restaurant avait « au moins le mérite d’être rapide ».", 'The critic wrote that the restaurant "at least had the merit of being fast".', ['implicite-litote']),
  sent(1503, "« Au moins » isole le seul mérite trouvé, ce qui dit, sans l’écrire, que le reste a déçu.", "\"At least\" isolates the one merit found, which says, without writing it, that the rest disappointed.", ['regle']),
  phrase(1504, "l’ironie", 'irony', ['metalangage']),
  phrase(1505, 'la litote', 'understatement', ['metalangage']),
  phrase(1506, 'le présupposé', 'presupposition', ['metalangage']),
  phrase(1507, "l’indice textuel", 'the textual cue', ['metalangage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 6 ROWS — Lire sans trop lire (1510-1534)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT6_ROWS: Row[] = [
  sent(1510, "Désolé, j’ai pas eu le temps de regarder ton message tranquille, on en reparle plus tard.", "Sorry, I didn’t get a calm moment to look at your message, we’ll talk later.", ['reponse-trop-faible']),
  sent(1511, "Je comprends que le délai t’a vraiment pesé ; je propose qu’on en discute et qu’on ajuste le planning ensemble.", 'I understand the delay really weighed on you; I suggest we discuss it and adjust the schedule together.', ['reponse-exacte']),
  sent(1512, "C’est bon, c’est pas la fin du monde, on verra ça plus tard.", "It’s fine, it’s not the end of the world, we’ll see about it later.", ['reponse-trop-faible'], SR),
  sent(1513, "Comment oses-tu m’écrire ça, je trouve ton message complètement déplacé.", "How dare you write that to me, I find your message completely out of line.", ['reponse-trop-forte']),
  sent(1514, "Je sens une vraie frustration dans ton message, et je la comprends ; voilà ce que je propose.", 'I can hear real frustration in your message, and I understand it; here is what I propose.', ['reponse-exacte']),
  sent(1515, "T’inquiète, c’est cool, pas de souci de mon côté.", "Don’t worry, it’s cool, no worries on my end.", ['reponse-trop-faible'], SR),
  sent(1516, "Je prends note de ton mécontentement et je le signale à la direction dès aujourd’hui.", "I note your dissatisfaction and will flag it to management today.", ['reponse-exacte']),
  sent(1517, "Franchement, si c’est si grave, trouve-toi quelqu’un d’autre.", "Frankly, if it’s that serious, go find someone else.", ['reponse-trop-forte'], SR),
  sent(1518, "Tu as raison d’être agacé ; le délai était trop long, et je t’en tiens informé dès que possible.", 'You are right to be annoyed; the delay was too long, and I will keep you posted as soon as possible.', ['reponse-exacte']),
  sent(1519, "Ah bon ? Je trouvais ça plutôt rapide, moi.", 'Really? I actually found it quite fast.', ['reponse-trop-faible'], SR),
  sent(1520, "Une ironie froide appelle une reconnaissance calme du problème, pas une gaieté forcée ni une colère.", 'Cold irony calls for a calm acknowledgement of the problem, neither forced cheer nor anger.', ['regle']),
  sent(1521, "Trouver une ironie dans chaque phrase neutre, c’est le défaut inverse du premier degré.", "Finding irony in every neutral sentence is the opposite fault to taking everything literally.", ['regle']),
  sent(1522, "« Service impeccable, comme toujours » après une plainte précédente mérite un indice avant d’être lu au premier degré.", '"Flawless service, as always" after an earlier complaint deserves a cue before being read at face value.', ['sur-lecture']),
  sent(1523, "« Service impeccable » dans un courriel neutre, sans historique, se lit au premier degré.", '"Flawless service" in a neutral email, with no history, reads at face value.', ['sous-lecture']),
  phrase(1524, 'le registre exact de la réponse', "the reply’s exact register", ['metalangage']),
  phrase(1525, 'la sur-lecture', 'over-reading', ['metalangage']),
  phrase(1526, 'la sous-lecture', 'under-reading', ['metalangage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 7 ROWS — Répondre dans le ton juste (1535-1554)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT7_ROWS: Row[] = [
  sent(1535, "Nadia a texté : « Le resto que tu voulais, super original, ils ont oublié mon plat. »", 'Nadia texted: "The restaurant you wanted, so original, they forgot my dish."', ['dialogue-ironie']),
  sent(1536, "Oh non, vraiment désolé, on choisit un autre endroit la prochaine fois ?", 'Oh no, really sorry, shall we pick somewhere else next time?', ['reponse-exacte']),
  sent(1537, "Ah, dommage, c’est jamais facile un resto bondé.", 'Ah, shame, a packed restaurant is never easy.', ['reponse-trop-faible'], SR),
  sent(1538, "C’est un scandale, tu devrais les dénoncer en ligne.", 'That is a scandal, you should call them out online.', ['reponse-trop-forte'], SR),
  sent(1539, "Madame Oliveri a affiché : « Les travaux seront, nous l’espérons, à peine perceptibles. »", 'Mrs. Oliveri posted: "The work will, we hope, be barely noticeable."', ['dialogue-litote']),
  sent(1540, "Merci de nous prévenir ; pourriez-vous préciser les heures exactes, pour que nous nous organisions ?", 'Thank you for letting us know; could you specify the exact hours, so we can plan accordingly?', ['reponse-exacte']),
  sent(1541, "Pas de souci, on est habitués au bruit de toute façon.", 'No worries, we are used to the noise anyway.', ['reponse-trop-faible'], SR),
  sent(1542, "C’est intolérable, j’exige un geste commercial immédiat.", 'This is intolerable, I demand an immediate goodwill gesture.', ['reponse-trop-forte'], SR),
  sent(1543, "Hugo a écrit dans sa chronique : « Le service, disons, prenait son temps. »", "Hugo wrote in his column: \"The service, let’s say, was taking its time.\"", ['dialogue-litote']),
  sent(1544, "Un reproche feutré appelle une réponse qui nomme le problème sans dramatiser ni minimiser.", 'A muted reproach calls for a reply that names the problem without dramatising or minimising.', ['regle']),
  sent(1545, "Le club de lecture a décidé, « comme toujours », de reporter le roman de Thibault.", 'The book club decided, "as always", to postpone Thibault’s novel.', ['dialogue-presuppose']),
  sent(1546, "Je note que c’est la troisième fois ; proposons un tour fixe pour éviter ça.", 'I note this is the third time; let’s propose a fixed rotation to avoid this.', ['reponse-exacte']),
  sent(1547, "Bah, c’est pas grave, on le lira un jour.", "Meh, no big deal, we’ll read it someday.", ['reponse-trop-faible'], SR),
  sent(1548, "C’est une injustice flagrante envers Thibault, il faut en parler à tout le groupe.", 'This is a blatant injustice to Thibault, we need to tell the whole group.', ['reponse-trop-forte'], SR),
  phrase(1549, 'un reproche feutré', 'a muted reproach', ['metalangage']),
  phrase(1550, 'une reconnaissance calme', 'a calm acknowledgement', ['metalangage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 8 ROWS — Ta réponse (1555-1599)
 * ══════════════════════════════════════════════════════════════════════════ */

export const MESSAGE_CAMILLE =
  "Bonjour,\n\nOn a eu tout le loisir d’apprécier le nouveau délai de livraison. Ça va nous donner l’occasion de revoir le planning du trimestre, comme d’habitude. J’imagine que l’équipe technique a ses raisons, même si elle ne les a pas vraiment partagées cette fois.\n\nOn se reparle la semaine prochaine, j’espère que ce sera plus simple.\n\nCamille";

export const MESSAGE_CAMILLE_EN =
  "Hello,\n\nWe had all the time in the world to enjoy the new delivery deadline. It’ll give us the chance to redo this quarter’s schedule, as usual. I imagine the technical team has its reasons, even if it didn’t really share them this time.\n\nLet’s talk again next week, I hope it’ll be simpler then.\n\nCamille";

const ACT8_ROWS: Row[] = [
  sent(1555, "Le message de Camille conserve un ton professionnel tout en laissant entendre un vrai agacement.", "Camille’s message keeps a professional tone while implying real irritation.", ['modele']),
  sent(1556, "« Comme d’habitude » présuppose que ce retard s’est déjà produit plusieurs fois.", '"As usual" presupposes this delay has already happened several times.', ['modele']),
  sent(1557, "« Tout le loisir d’apprécier » est ironique : personne n’a apprécié ce délai.", '"All the time in the world to enjoy" is ironic: nobody enjoyed this delay.', ['modele']),
  sent(1558, "Nomme d’abord ce que le message implique, puis choisis le mot qui porte ta réponse au bon registre.", 'Name first what the message implies, then choose the word that carries your reply at the right register.', ['plan']),
  sent(1559, "Camille a lu toutes les captures d’écran de l’équipe technique, et ça valait la peine.", "Camille read every screenshot from the technical team, and it was worth it.", ['scenario-alt']),
  sent(1560, "On comprend ton agacement, et on s’engage à prévenir plus tôt la prochaine fois.", "We understand your irritation, and we commit to giving earlier notice next time.", ['scenario-reponse']),
  sent(1561, "Je prends acte du retard et je te propose un point hebdomadaire pour que ça ne se reproduise plus.", 'I take note of the delay and suggest a weekly check-in so this does not happen again.', ['scenario-reponse']),
  sent(1562, "Je reconnais que le planning a été bousculé plus d’une fois ce trimestre.", 'I acknowledge the schedule has been disrupted more than once this quarter.', ['scenario-reponse']),
  sent(1563, "Je suis ravie que tu comprennes enfin notre point de vue.", "I’m delighted you finally understand our point of view.", ['scenario-alt'], SR),
  sent(1564, "Cette remarque ne répond pas vraiment à l’ironie du message ; elle la retourne sans la reconnaître.", 'This remark does not really answer the irony of the message; it turns it around without acknowledging it.', ['scenario-alt']),
  phrase(1565, 'un geste commercial', 'a goodwill gesture', ['vocabulaire']),
  phrase(1566, 'un point hebdomadaire', 'a weekly check-in', ['vocabulaire']),
  phrase(1567, 'prendre acte de', 'to take note of, formally', ['vocabulaire']),
  sent(1568, "L’équipe de Camille a eu le temps d’apprécier ce retard autant que le reste du bureau.", "Camille’s team had as much time to enjoy this delay as the rest of the office.", ['quiz-support']),
  sent(1569, "Le mot le plus poli n’est pas toujours celui que la situation demande.", 'The most polite word is not always the one the situation calls for.', ['bilan']),
  sent(1570, "Avant de répondre à un message chargé, nomme le procédé, puis le registre qu’il porte.", 'Before replying to a loaded message, name the device, then the register it carries.', ['bilan']),
];

export const ROWS_BY_ACT: Row[][] = [ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS, ACT7_ROWS, ACT8_ROWS];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** No row is reused from another lesson in this draft (§B above): every act
 *  imports nothing. Kept as an export so the lesson file’s assembly code is
 *  identical in shape to every other B1+/C1 lesson. */
export const IMPORTED: Record<string, string[]> = {
  act1: [], act2: [], act3: [], act4: [], act5: [], act6: [], act7: [], act8: [],
};
export const IMPORT_IDS: string[] = [...new Set(Object.values(IMPORTED).flat())];

/** No row here is unreleasable by kind; some are NAMED but never released
 *  (the `SR` drills = {sentence, review}, no flashcard, no voiceflash): the
 *  wrong-register or wrong-reply options a learner must not be quizzed on
 *  as if they were correct French to produce. */
export const NOT_DECK_ABLE: string[] = ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id);
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];
