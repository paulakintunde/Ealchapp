// b2.26.l1 « Réunions et négociations » · the authored corpus, the imports,
// the long texts and the citation constants. DRAFT, to RICH-LESSON-STANDARD.md
// on top of B1-BUILD-PLAYBOOK.md, in the WORKSHOP SHAPE of
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 and §1.4, with the B2 rules of
// b2/B2-BUILD-LOG.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later lessons may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE B2 SPEAKING MOVES OF A BUSINESS MEETING AND A NEGOTIATION. It is the
//   PO@b2 remediation target: a learner who fails a B2 speaking task in the
//   Examiner is sent here. The unit of teaching is a MOVE that does a job at
//   the table, not a word: open and steer, take and keep the floor, check by
//   reformulating, disagree with nuance, propose and counter-propose, concede
//   against something, make a conditional offer, persuade by answering the
//   objection first, close on decisions and owners.
//
//     act 1   the problem: a flat no closes the table; « à quelles
//             conditions »; la marge de manœuvre; the task announced
//     act 2   opening and steering: l'objectif de cette réunion, s'en tenir à
//             l'ordre du jour, recadrer la discussion, garder un point pour
//             la fin; calques (prochain item, adresser, céduler, même page)
//     act 3   the floor: si je peux me permettre, rebondir sur, couper /
//             donner / laisser la parole
//     act 4   clarifying: si je vous suis bien, autrement dit, pourriez-vous
//             préciser, ce que j'entends c'est que, la même longueur d'onde
//     act 5   diplomatic disagreement: je ne partage pas tout à fait votre
//             analyse, je crains que + subjonctif, j'aurais tendance à
//             penser, cela dit, toutefois (builds on lesson 36 in B1, act 8)
//     act 6   proposing and counter-proposing: que diriez-vous de, nous
//             pourrions envisager, une contre-proposition, mettre sur la
//             table; si + imparfait; proposer que + subjonctif
//     act 7   conceding strategically: faire un geste, en contrepartie, à
//             condition que, céder sur un point, une commande ferme, le seuil
//     act 8   the conditional offer: si + présent / imparfait, sous réserve
//             de, moyennant, dans le cas de, the gérondif of condition
//     act 9   persuading (TEF section B): je sais ce que tu vas me dire,
//             justement, imagine un peu, tu n'as rien à perdre, l'échelle
//             des objections
//     act 10  closing: récapituler, s'en charger, les prochaines étapes,
//             rester en suspens, faire un suivi (Québec), revenir vers
//             quelqu'un (France)
//     act 11  the task in exam format, the quiz
//
//   NOT OWNED, CITED BY POSITION ONLY: business vocabulary (lesson 36 in B1,
//   rows imported, never retyped); tu and vous (lesson 26 in B1); the
//   conditional of politeness (lesson 9 in B1); si clauses (lesson 10 in B1);
//   concession connectors (lesson 32 in B1); the B2 grammar the recycling
//   round revisits (lessons 2, 3, 5, 12 and 16 in B2, named in words).
//
//   NO UNGRAMMATICAL OR CALQUED SENTENCE IS EVER A ROW. Every wrong form
//   lives in a `commonErrors.wrong`, a `trapDrill.promptSound`, a scene
//   `break.wrong`, a groupDrill `free()` quotation or a quiz
//   `errorSpot.prompt`. Regional forms that are RIGHT where they are said
//   are rows, tagged: une rencontre, faire un suivi, je vous donne des
//   nouvelles (Québec); caler une réunion (France, familier), revenir vers
//   quelqu'un (France); nonante (Belgique). Every company and person is
//   invented: Tessère (a Montréal PME that makes acoustic panels from
//   recycled felt), Coworka (coworking spaces in Lyon and Brussels), Nadia
//   Belkacem, Olivier Gauthier, Kim Tran, Mathilde Aubry, Julien Peeters.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked 2026-09-27 (content v76)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `affaires` exists (« Les affaires », travail, b1-b2), sub-themes
//     « l'entreprise et ses métiers », « la réunion et le projet »,
//     « clients, prix et contrats » in the seed. The orchestrator names a
//     fourth for NEW rows: « négocier et conclure ». Setting it is a
//     Postgres edit for the import, not for this file.
//  2. ID BLOCK: b2.26 owns `fr.b2.affaires.1200`-`.1399` AND NOTHING ELSE
//     (1000-1181 belong to b1.36 at level b1; below 1000 is published).
//     Used: `.1200`-`.1389`, ten free for fixes. Compare full ids, never
//     numbers: the level is part of the id. seed-checked only, DB check
//     pending at import.
//  3. HEADWORDS. Every phrase row below was checked against every seed row
//     (all themes, normalised) on 2026-09-27: zero clashes. Three candidate
//     headwords the seed already has are IMPORTED instead: « à condition
//     que » (fr.b1.opinions-et-avis.1336), « en revanche »
//     (fr.b1.connecteurs-logiques.102), « toutefois »
//     (fr.b2.connecteurs-logiques.041). « Passons au point suivant. »,
//     « prendre la parole », « je comprends votre point de vue » and « je
//     ne suis pas tout à fait d'accord » are lesson 36 in B1's published
//     rows and are imported, never re-authored.
//  4. APOSTROPHES. Every authored French string uses the typographic
//     apostrophe (’), so every scenario has one style. Imported seed rows
//     carry the straight one and are therefore NEVER used in a scenario.
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR, all a
//     real /n/ or /m/ written double so `hasPlainNasal` cannot fire:
//       semaine        SMEHNN        prochaine    pro-SHEHNN
//       tienne        TYEHNN        problème     pro-BLEHMM
//       deuxième       deu-ZYEMM      personne     pehr-SONN
//       comme          KOMM           sommes       SOMM
//       maximum        mak-see-MOMM   PME          pay-emm-UH
//       donne          DONN
//     « même » is MEM, the house spelling. No U+203F tie anywhere.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b2.26',
  seq: 26,
  title: 'Business Meetings and Negotiation',
  sub: 'Réunions et négociations',
  canDo: 'Can take an active part in a business meeting and a negotiation: open and steer the discussion, take and keep the floor, check understanding by reformulating, disagree with nuance, propose and counter-propose, concede against something in return, make conditional offers, persuade by answering objections in advance, and close on decisions, owners and dates; can deliver a structured spoken argument in the format of the TEF, TCF and DELF B2 speaking tasks',
  prereqUnitIds: ['b1.36', 'b1.26'],
} as const;

export const LESSON_ID = 'b2.26.l1';
export const THEME = 'affaires';
export const LEVEL = 'b2' as const;

/** ONE block. b1.36 owns fr.b1.affaires.1000-.1199; this lesson owns fr.b2.affaires.1200-.1399. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B1 units are rows in the seed now, so their number comes from `seq`. B2
 *  units are not written yet: their number is their place in the plan
 *  (b2/B2-BUILD-LOG.md), which is the id's own number.
 * ══════════════════════════════════════════════════════════════════════════ */

const SEED_SEQ = new Map<string, number>(
  (seed as unknown as { units: { id: string; seq: number | string }[] }).units.map((u) => [u.id, Number(u.seq)]),
);

function seqOf(unitId: string): { n: number; band: string } {
  const [track, nn] = unitId.split('.');
  const n = SEED_SEQ.get(unitId) ?? Number(nn);
  if (!Number.isFinite(n)) throw new Error(`b2.26: no seq for ${unitId}`);
  return { n, band: track.toUpperCase() };
}
/** « la leçon 36 du B1 »: French surfaces. */
export function refFr(unitId: string): string { const { n, band } = seqOf(unitId); return `la leçon ${n} du ${band}`; }
/** « lesson 36 in B1 »: English surfaces (userEn, briefEn, grader notes). */
export function refEn(unitId: string): string { const { n, band } = seqOf(unitId); return `lesson ${n} in ${band}`; }

export const POLITESSE_UNIT = 'b1.09';
export const SI_UNIT = 'b1.10';
export const TUVOUS_UNIT = 'b1.26';
export const CONCESSION_UNIT = 'b1.32';
export const AFFAIRES_UNIT = 'b1.36';
export const COND_PASSE_UNIT = 'b2.02';
export const SI_PASSE_UNIT = 'b2.03';
export const SUBJ_PASSE_UNIT = 'b2.05';
export const GERONDIF_UNIT = 'b2.12';
export const CONCESSION_B2_UNIT = 'b2.16';
export const ARGUMENTATION_UNIT = 'b2.23';

export const AFFAIRES_REF = refFr(AFFAIRES_UNIT);
export const POLITESSE_REF = refFr(POLITESSE_UNIT);
export const SI_REF = refFr(SI_UNIT);
export const TUVOUS_REF = refFr(TUVOUS_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const ARGUMENTATION_REF = refFr(ARGUMENTATION_UNIT);
export const AFFAIRES_REF_EN = refEn(AFFAIRES_UNIT);
export const TUVOUS_REF_EN = refEn(TUVOUS_UNIT);
export const POLITESSE_REF_EN = refEn(POLITESSE_UNIT);
export const ARGUMENTATION_REF_EN = refEn(ARGUMENTATION_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE DOOR LEFT AJAR. At a negotiating table every answer moves a door: a
 *  flat yes gives everything away, a flat no shuts it, and a condition
 *  (« si vous vous engagez sur deux ans, nous pourrions... ») keeps it open
 *  while saying exactly how far. Steering, taking the floor and
 *  reformulating (acts 2 to 4) are what keep the table working long enough
 *  for conditions to be set; disagreement, counter-proposals, concessions
 *  and offers (acts 5 to 8) ARE the conditions; persuasion and the close
 *  (acts 9 and 10) make them stick.
 *
 *  It is NOT « be polite » (a lecture, and lesson 9 in B1's ground), and NOT
 *  « never say no » (act 7 teaches the calm refusal: « Là, nous ne pouvons
 *  pas vous suivre »).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Négocier, ce n’est pas dire oui ou non : c’est dire à quelles conditions.';
export const REFRAME_EN = 'Negotiating is not saying yes or no: it is saying on what terms.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'En réunion, sois toujours diplomate.',
    why: 'A lecture, not a language rule, and false where act 7 has to hold: the calm refusal (« Là, nous ne pouvons pas vous suivre », « C’est notre dernière proposition ») is a move, and a negotiator who is only diplomatic gives the margin away.',
  },
  {
    text: 'Le conditionnel rend une demande polie.',
    why: 'Lesson 9 in B1’s point, true but too small here. At B2 the conditional does a harder job: it states a hypothetical offer (« nous pourrions envisager ») that binds nobody yet. Reusing the B1 line would hide that difference.',
  },
  {
    text: 'Ne dis jamais non en négociation.',
    why: 'False: the lesson teaches when and how to say no. What it forbids is the no WITHOUT a condition, the one that closes the table (act 1’s scene).',
  },
  {
    text: 'Reconnaître, nuancer, proposer.',
    why: 'Lesson 36 in B1’s sequence for polite disagreement, which act 5 builds on and cites. As the reframe of the whole lesson it misses steering, reformulating, conceding and closing, and it names steps rather than the idea that holds them together.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-27 and its French is in the
 *  trailing comment. All carry flashcard and voiceflash (checked at load by
 *  the lesson file). None is used in a scenario (straight apostrophes).
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.affaires.1078',                    // négocier, la négociation, un négociateur
    'fr.b1.affaires.1130',                    // trouver un compromis
  ],
  act2: [
    'fr.b1.affaires.1035',                    // l'ordre du jour
    'fr.b1.affaires.1052',                    // Passons au point suivant.
    'fr.b1.affaires.1042',                    // Le premier point à l'ordre du jour, c'est le budget.
  ],
  act3: [
    'fr.b1.affaires.1036',                    // prendre la parole
    'fr.b1.affaires.1044',                    // Est-ce que je peux prendre la parole ?
    'fr.b1.affaires.1141',                    // Permettez-moi de vous interrompre une seconde.
  ],
  act4: [
    'fr.b1.strategies-de-comprehension.1336', // si je comprends bien
    'fr.b1.strategies-de-comprehension.1334', // Si je comprends bien, le technicien vient mercredi après-midi, et je dois être là.
  ],
  act5: [
    'fr.b1.affaires.1126',                    // je ne suis pas tout à fait d'accord
    'fr.b1.affaires.1127',                    // je comprends votre point de vue
    'fr.b1.affaires.1133',                    // Je comprends votre point de vue, mais le délai est trop court.
    'fr.b1.affaires.1134',                    // Il me semble que le prix est un peu élevé.
    'fr.b1.affaires.1138',                    // Vous avez raison sur un point.
    'fr.b2.connecteurs-logiques.041',         // toutefois
    'fr.b1.connecteurs-logiques.1584',        // Je reste toutefois prudent.
    'fr.b1.pronoms-essentiels.1495',          // Le point sur lequel nous ne sommes pas d'accord est le prix.
  ],
  act6: [
    'fr.b1.connecteurs-logiques.102',         // en revanche
    'fr.b1.projets-et-futur.729',             // nous pourrions
    'fr.b1.ecologie.1174',                    // je propose de
    'fr.b1.affaires.1135',                    // Je propose plutôt une livraison en deux fois.
    'fr.b1.affaires.1085',                    // Nous pouvons vous accorder une remise de dix pour cent.
  ],
  act7: [
    'fr.b1.opinions-et-avis.1336',            // à condition que
  ],
  act8: [] as string[],
  act9: [] as string[],
  act10: [
    'fr.b1.affaires.1099',                    // conclure un accord
    'fr.b1.affaires.1108',                    // Nous avons enfin conclu un accord sur le prix.
    'fr.b1.affaires.1037',                    // faire le point
  ],
  act11: [
    'fr.b1.affaires.1136',                    // On pourrait trouver un compromis : la moitié en novembre, le reste en décembre.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. None. */
export const NOT_DECK_ABLE: string[] = [];

/** No `voiceflash`: never in a `practice` speak section. None: every import
 *  carries it (the lesson file asserts this at load). */
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Two kinds: a MOVE row (kind phrase, tag formule: the formula a speaker
 *  uses at the table) and sentence rows that put it in a real exchange.
 *  Listening lines are sentence rows, so the ear mission and the SRS deck
 *  quote the same French.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const GP = ['negociation-reunion'];

type Reg = NonNullable<Item['register']>;

/** A move: the formula and what it does at the table. */
const mv = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes?: string, register: Reg = 'courant'): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['formule', ...tags], drills: FCVR, version: 1, register, grammarPoints: GP,
  ...(notes ? { notes } : {}),
});

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: 'courant', grammarPoints: GP, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · OUI, NON, OU À QUELLES CONDITIONS ────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, 'Quinze pour cent, c’est difficile ; en revanche, si vous vous engagez sur deux ans, nous pourrions aller jusqu’à dix.', 'Fifteen per cent is difficult; on the other hand, if you commit to two years, we could go up to ten.', '/kɛ̃z puʁ sɑ̃ sɛ di.fi.sil ɑ̃ ʁə.vɑ̃ʃ si vu vu.zɑ̃.ga.ʒe syʁ dø.zɑ̃ nu pu.ʁjɔ̃ a.le ʒys.ka dis/', 'kehⁿz poor SAHⁿ | seh dee-fee-SEEL | ahⁿ ruh-VAHⁿSH | see voo voo-zahⁿ-ga-ZHAY sür deu-ZAHⁿ | noo poo-ryohⁿ a-lay zhüs-ka DEESS', ['scene', 'conditions'], FCVDR),
  mv(1201, 'à quelles conditions', 'on what terms, under what conditions', '/a kɛl kɔ̃.di.sjɔ̃/', 'a kehl kohⁿ-dee-SYOHⁿ', ['conditions'], 'La question qui remplace le oui et le non.'),
  sent(1202, 'À quelles conditions pourriez-vous accepter ?', 'On what terms could you accept?', '/a kɛl kɔ̃.di.sjɔ̃ pu.ʁje.vu ak.sɛp.te/', 'a kehl kohⁿ-dee-SYOHⁿ | poo-ryay-VOO ak-sehp-TAY', ['conditions']),
  sent(1203, 'Nous ne dirons ni oui ni non tout de suite.', 'We will not say yes or no straight away.', '/nu nə di.ʁɔ̃ ni wi ni nɔ̃ tut sɥit/', 'noo nuh dee-ROHⁿ | nee WEE nee NOHⁿ | toot SWEET', ['conditions']),
  sent(1204, REFRAME, REFRAME_EN, '/ne.gɔ.sje sə nɛ pa diʁ wi u nɔ̃ sɛ diʁ a kɛl kɔ̃.di.sjɔ̃/', 'nay-go-SYAY | suh neh pa DEER wee oo NOHⁿ | seh DEER a kehl kohⁿ-dee-SYOHⁿ', ['rule', 'reframe'], ['flashcard'],
    rule('Une cliente demande trop. Tu dis non ?', 'Tu dis à quelles conditions tu pourrais dire oui.')),
  mv(1205, 'mener une négociation', 'to conduct a negotiation', '/mə.ne yn ne.gɔ.sja.sjɔ̃/', 'muh-NAY ün nay-go-sya-SYOHⁿ', ['negociation']),
  mv(1206, 'la marge de manœuvre', 'room for manoeuvre', '/la maʁʒ də ma.nœvʁ/', 'la MARZH duh ma-NUHVR', ['negociation'], 'Ce qu’on peut encore céder avant d’atteindre sa limite.'),
  sent(1207, 'Notre marge de manœuvre est limitée sur le prix.', 'Our room for manoeuvre on price is limited.', '/nɔtʁ maʁʒ də ma.nœvʁ ɛ li.mi.te syʁ lə pʁi/', 'notr MARZH duh ma-NUHVR | eh lee-mee-TAY sür luh PREE', ['negociation'], FCVDR),
  sent(1208, 'Le but n’est pas de gagner chaque phrase.', 'The aim is not to win every sentence.', '/lə byt nɛ pa də ga.ɲe ʃak fʁaz/', 'luh BÜT neh pa duh ga-NYAY shak FRAZ', ['negociation']),
  sent(1209, 'Nous voulons repartir avec un accord que les deux équipes peuvent défendre.', 'We want to leave with an agreement both teams can defend.', '/nu vu.lɔ̃ ʁə.paʁ.tiʁ a.vɛk œ̃.na.kɔʁ kə le dø.ze.kip pœv de.fɑ̃dʁ/', 'noo voo-LOHⁿ ruh-par-TEER | a-vehk uhⁿ-na-KOR | kuh lay deu-zay-KEEP puhv day-FAHⁿDR', ['negociation']),
  mv(1210, 'faire un tour de table', 'to go round the table (everyone speaks in turn)', '/fɛʁ œ̃ tuʁ də tabl/', 'fehr uhⁿ TOOR duh TABL', ['reunion']),
  sent(1211, 'Commençons par un rapide tour de table.', 'Let us start with a quick round of the table.', '/kɔ.mɑ̃.sɔ̃ paʁ œ̃ ʁa.pid tuʁ də tabl/', 'ko-mahⁿ-SOHⁿ | par uhⁿ ra-peed TOOR duh TABL', ['reunion']),
  sent(1212, 'Un non sec ferme la porte ; une condition la garde ouverte.', 'A flat no closes the door; a condition keeps it open.', '/œ̃ nɔ̃ sɛk fɛʁm la pɔʁt yn kɔ̃.di.sjɔ̃ la gaʁ.du.vɛʁt/', 'uhⁿ nohⁿ SEHK | fehrm la PORT | ün kohⁿ-dee-SYOHⁿ | la gar-doo-VEHRT', ['rule', 'conditions'], ['flashcard'],
    rule('Un non sec, c’est quoi ?', 'Un non sans condition. Il arrête la négociation.')),
  sent(1213, 'Tessère fabrique des panneaux acoustiques pour les bureaux.', 'Tessère makes acoustic panels for offices.', '/te.sɛʁ fa.bʁik de pa.no a.kus.tik puʁ le by.ʁo/', 'tay-SEHR fa-BREEK | day pa-NOH a-koos-TEEK | poor lay bü-ROH', ['quebec']),
  sent(1214, 'Coworka demande une remise de quinze pour cent.', 'Coworka is asking for a fifteen per cent discount.', '/ko.wɔʁ.ka də.mɑ̃d yn ʁə.miz də kɛ̃z puʁ sɑ̃/', 'ko-wor-KA duh-MAHⁿD | ün ruh-MEEZ duh kehⁿz poor SAHⁿ', ['negociation']),
];

/* ── ACT 2 · OUVRIR ET MENER LA RÉUNION ──────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1215, 'Bonjour à tous, et merci d’être là malgré le décalage horaire.', 'Hello everyone, and thank you for being here despite the time difference.', '/bɔ̃.ʒuʁ a tus e mɛʁ.si dɛtʁ la mal.gʁe lə de.ka.la.ʒɔ.ʁɛʁ/', 'bohⁿ-ZHOOR a TOOSS | ay mehr-SEE dehtr LA | mal-GRAY luh day-ka-la-zho-REHR', ['ouvrir']),
  sent(1216, 'L’objectif de cette réunion est de nous mettre d’accord sur le prix et le calendrier.', 'The aim of this meeting is to agree on the price and the schedule.', '/lɔb.ʒɛk.tif də sɛt ʁe.y.njɔ̃ ɛ də nu mɛtʁ da.kɔʁ syʁ lə pʁi e lə ka.lɑ̃.dʁi.je/', 'lob-zhehk-TEEF duh seht ray-ü-NYOHⁿ | eh duh noo mehtr da-KOR | sür luh PREE ay luh ka-lahⁿ-dree-YAY', ['ouvrir'], FCVDR),
  sent(1217, 'Nous avons une heure, donc je propose qu’on s’en tienne à l’ordre du jour.', 'We have an hour, so I suggest we stick to the agenda.', '/nu.za.vɔ̃ y.nœʁ dɔ̃k ʒə pʁɔ.poz kɔ̃ sɑ̃ tjɛn a lɔʁ.dʁə dy ʒuʁ/', 'noo-za-vohⁿ ü-NUHR | dohⁿk zhuh pro-POZ | kohⁿ sahⁿ TYEHNN a lor-druh dü ZHOOR', ['ouvrir', 'subjonctif']),
  sent(1218, 'Kim prendra des notes et vous enverra le compte rendu demain.', 'Kim will take notes and send you the minutes tomorrow.', '/kim pʁɑ̃.dʁa de nɔt e vu.zɑ̃.vɛ.ʁa lə kɔ̃t ʁɑ̃.dy də.mɛ̃/', 'keem prahⁿ-DRA day NOT | ay voo-zahⁿ-veh-RA luh kohⁿt rahⁿ-DÜ duh-MEHⁿ', ['ouvrir']),
  sent(1219, 'Pour commencer, Mathilde, pourriez-vous nous rappeler vos besoins ?', 'To start, Mathilde, could you remind us of your needs?', '/puʁ kɔ.mɑ̃.se ma.tild pu.ʁje.vu nu ʁa.ple vo bə.zwɛ̃/', 'poor ko-mahⁿ-SAY | ma-TEELD | poo-ryay-VOO noo ra-PLAY voh buh-ZWEHⁿ', ['ouvrir']),
  sent(1220, 'Merci, c’est très clair. Passons au deuxième point : le prix.', 'Thank you, that is very clear. Let us move on to the second item: the price.', '/mɛʁ.si sɛ tʁɛ klɛʁ pa.sɔ̃ o dø.zjɛm pwɛ̃ lə pʁi/', 'mehr-SEE | seh treh KLEHR | pa-SOHⁿ oh deu-zyemm PWEHⁿ | luh PREE', ['diriger']),
  sent(1221, 'Julien, je vous arrête une seconde : nous parlerons de la livraison au point quatre.', 'Julien, let me stop you a second: we will talk about delivery under item four.', '/ʒy.ljɛ̃ ʒə vu.za.ʁɛt yn sə.gɔ̃d nu paʁ.lə.ʁɔ̃ də la li.vʁɛ.zɔ̃ o pwɛ̃ katʁ/', 'zhü-LYEHⁿ | zhuh voo-za-REHT ün suh-GOHⁿD | noo par-luh-ROHⁿ duh la lee-vreh-ZOHⁿ | oh pwehⁿ KATR', ['diriger']),
  sent(1222, 'Revenons à notre sujet, si vous le voulez bien.', 'Let us get back to our subject, if you do not mind.', '/ʁə.və.nɔ̃ a nɔtʁ sy.ʒɛ si vu lə vu.le bjɛ̃/', 'ruh-vuh-NOHⁿ a notr sü-ZHEH | see voo luh voo-lay BYEHⁿ', ['diriger'], FCVDR),
  sent(1223, 'Sur ce point, je propose que nous en reparlions à la fin.', 'On this point, I suggest we come back to it at the end.', '/syʁ sə pwɛ̃ ʒə pʁɔ.poz kə nu.zɑ̃ ʁə.paʁ.ljɔ̃ a la fɛ̃/', 'sür suh PWEHⁿ | zhuh pro-POZ kuh noo-zahⁿ ruh-par-LYOHⁿ | a la FEHⁿ', ['diriger', 'subjonctif']),
  sent(1224, 'Il nous reste vingt minutes ; essayons d’avancer.', 'We have twenty minutes left; let us try to move forward.', '/il nu ʁɛst vɛ̃ mi.nyt e.sɛ.jɔ̃ da.vɑ̃.se/', 'eel noo rehst vehⁿ mee-NÜT | ay-seh-YOHⁿ da-vahⁿ-SAY', ['diriger']),
  mv(1225, 's’en tenir à l’ordre du jour', 'to stick to the agenda', '/sɑ̃ tə.niʁ a lɔʁ.dʁə dy ʒuʁ/', 'sahⁿ tuh-NEER a lor-druh dü ZHOOR', ['ouvrir'], 'S’en tenir à : ne pas aller plus loin que.'),
  mv(1226, 'revenir à notre sujet', 'to get back to our subject', '/ʁə.və.niʁ a nɔtʁ sy.ʒɛ/', 'ruh-vuh-NEER a notr sü-ZHEH', ['diriger']),
  mv(1227, 'garder un point pour la fin', 'to leave an item for the end', '/gaʁ.de œ̃ pwɛ̃ puʁ la fɛ̃/', 'gar-DAY uhⁿ PWEHⁿ | poor la FEHⁿ', ['diriger']),
  mv(1228, 'recadrer la discussion', 'to refocus the discussion', '/ʁə.ka.dʁe la dis.ky.sjɔ̃/', 'ruh-ka-DRAY la dees-kü-SYOHⁿ', ['diriger']),
  sent(1229, 'Je me permets de recadrer la discussion : nous parlions du prix.', 'Allow me to refocus the discussion: we were talking about price.', '/ʒə mə pɛʁ.mɛ də ʁə.ka.dʁe la dis.ky.sjɔ̃ nu paʁ.ljɔ̃ dy pʁi/', 'zhuh muh pehr-MEH | duh ruh-ka-DRAY la dees-kü-SYOHⁿ | noo par-LYOHⁿ dü PREE', ['diriger'], FCVDR),
  sent(1230, 'Est-ce que tout le monde est d’accord pour commencer ?', 'Is everyone happy to start?', '/ɛs.kə tu lə mɔ̃d ɛ da.kɔʁ puʁ kɔ.mɑ̃.se/', 'ehs-kuh too luh MOHⁿD | eh da-KOR poor ko-mahⁿ-SAY', ['ouvrir']),
  sent(1231, 'On commence la rencontre dans cinq minutes.', 'The meeting starts in five minutes (Québec: une rencontre).', '/ɔ̃ kɔ.mɑ̃s la ʁɑ̃.kɔ̃tʁ dɑ̃ sɛ̃ mi.nyt/', 'ohⁿ ko-MAHⁿSS la rahⁿ-KOHⁿTR | dahⁿ sehⁿ mee-NÜT', ['ouvrir', 'quebec']),
  mv(1232, 'caler une réunion', 'to fit in a meeting (France, informal)', '/ka.le yn ʁe.y.njɔ̃/', 'ka-LAY ün ray-ü-NYOHⁿ', ['ouvrir', 'france', 'variante'], 'En France, familier : trouver une place dans un agenda chargé.', 'familier'),
  sent(1233, 'On cale une réunion jeudi à dix heures ?', 'Shall we fit in a meeting on Thursday at ten?', '/ɔ̃ kal yn ʁe.y.njɔ̃ ʒø.di a di.zœʁ/', 'ohⁿ KAL ün ray-ü-NYOHⁿ | zhuh-DEE a dee-ZUHR', ['ouvrir', 'france'], FCVR, { register: 'familier' }),
  sent(1234, 'Abordons maintenant la question du prix.', 'Let us now turn to the question of price.', '/a.bɔʁ.dɔ̃ mɛ̃t.nɑ̃ la kɛs.tjɔ̃ dy pʁi/', 'a-bor-DOHⁿ mehⁿt-NAHⁿ | la kehs-TYOHⁿ dü PREE', ['diriger', 'faux-ami']),
  sent(1235, 'Fixons une rencontre la semaine prochaine.', 'Let us set a meeting for next week (Québec: une rencontre).', '/fik.sɔ̃ yn ʁɑ̃.kɔ̃tʁ la sə.mɛn pʁɔ.ʃɛn/', 'feek-SOHⁿ ün rahⁿ-KOHⁿTR | la SMEHNN pro-SHEHNN', ['ouvrir', 'quebec']),
  sent(1236, 'Animer une réunion, c’est la faire avancer vers une décision.', 'Leading a meeting means moving it towards a decision.', '/a.ni.me yn ʁe.y.njɔ̃ sɛ la fɛʁ a.vɑ̃.se vɛʁ yn de.si.zjɔ̃/', 'a-nee-MAY ün ray-ü-NYOHⁿ | seh la fehr a-vahⁿ-SAY | vehr ün day-see-ZYOHⁿ', ['rule', 'diriger'], ['flashcard'],
    rule('Animer une réunion, c’est parler le plus ?', 'Non : c’est faire avancer le groupe vers une décision.')),
];

/* ── ACT 3 · PRENDRE ET GARDER LA PAROLE ─────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  mv(1237, 'si je peux me permettre', 'if I may', '/si ʒə pø mə pɛʁ.mɛtʁ/', 'see zhuh PUH muh pehr-MEHTR', ['parole'], 'Pour entrer dans la discussion sans couper brutalement.', 'soutenu'),
  sent(1238, 'Si je peux me permettre, j’aimerais ajouter un point.', 'If I may, I would like to add a point.', '/si ʒə pø mə pɛʁ.mɛtʁ ʒɛm.ʁɛ a.ʒu.te œ̃ pwɛ̃/', 'see zhuh PUH muh pehr-MEHTR | zhehm-REH a-zhoo-TAY uhⁿ PWEHⁿ', ['parole'], FCVDR),
  sent(1239, 'Permettez-moi de terminer ma phrase.', 'Allow me to finish my sentence.', '/pɛʁ.mɛ.te.mwa də tɛʁ.mi.ne ma fʁaz/', 'pehr-meh-tay-MWA | duh tehr-mee-NAY ma FRAZ', ['parole']),
  sent(1240, 'Excusez-moi de vous couper, mais le temps presse.', 'Sorry to cut in, but time is short.', '/ɛks.ky.ze.mwa də vu ku.pe mɛ lə tɑ̃ pʁɛs/', 'ehks-kü-zay-MWA duh voo koo-PAY | meh luh TAHⁿ PREHSS', ['parole']),
  mv(1241, 'couper la parole à quelqu’un', 'to cut someone off', '/ku.pe la pa.ʁɔl a kɛl.kœ̃/', 'koo-PAY la pa-ROL | a kehl-KUHⁿ', ['parole']),
  sent(1242, 'Pardon, Julien, je ne voulais pas vous couper la parole.', 'Sorry, Julien, I did not mean to cut you off.', '/paʁ.dɔ̃ ʒy.ljɛ̃ ʒə nə vu.lɛ pa vu ku.pe la pa.ʁɔl/', 'par-DOHⁿ zhü-LYEHⁿ | zhuh nuh voo-leh PA | voo koo-PAY la pa-ROL', ['parole']),
  mv(1243, 'rebondir sur', 'to pick up on (what someone said)', '/ʁə.bɔ̃.diʁ syʁ/', 'ruh-bohⁿ-DEER SÜR', ['parole'], 'Partir de ce que l’autre vient de dire pour avancer.'),
  sent(1244, 'Pour rebondir sur ce que dit Mathilde, le volume change tout.', 'To pick up on what Mathilde says, the volume changes everything.', '/puʁ ʁə.bɔ̃.diʁ syʁ sə kə di ma.tild lə vɔ.lym ʃɑ̃ʒ tu/', 'poor ruh-bohⁿ-DEER sür suh kuh dee ma-TEELD | luh vo-LÜM shahⁿzh TOO', ['parole'], FCVDR),
  mv(1245, 'donner la parole à quelqu’un', 'to give someone the floor', '/dɔ.ne la pa.ʁɔl a kɛl.kœ̃/', 'do-NAY la pa-ROL | a kehl-KUHⁿ', ['parole']),
  sent(1246, 'Je vous laisse la parole, Olivier.', 'Over to you, Olivier.', '/ʒə vu lɛs la pa.ʁɔl ɔ.li.vje/', 'zhuh voo lehss la pa-ROL | o-lee-VYAY', ['parole']),
  sent(1247, 'Un instant, je termine et je vous écoute.', 'One moment, I will finish and then I am listening.', '/œ̃.nɛ̃s.tɑ̃ ʒə tɛʁ.min e ʒə vu.ze.kut/', 'uhⁿ-nehⁿss-TAHⁿ | zhuh tehr-MEEN | ay zhuh voo-zay-KOOT', ['parole'], FCVDR),
  sent(1248, 'Olivier voulait dire quelque chose.', 'Olivier wanted to say something.', '/ɔ.li.vje vu.lɛ diʁ kɛl.kə ʃoz/', 'o-lee-VYAY voo-leh DEER | kehl-kuh SHOZ', ['parole']),
  sent(1249, 'C’est une remarque très juste.', 'That is a very fair remark.', '/sɛ.ty.nə ʁə.maʁk tʁɛ ʒyst/', 'seh-tün ruh-MARK | treh ZHÜST', ['parole', 'faux-ami']),
  mv(1250, 'laisser quelqu’un finir', 'to let someone finish', '/lɛ.se kɛl.kœ̃ fi.niʁ/', 'leh-SAY kehl-kuhⁿ fee-NEER', ['parole']),
  sent(1251, 'Laissez Olivier finir, s’il vous plaît.', 'Please let Olivier finish.', '/lɛ.se ɔ.li.vje fi.niʁ sil vu plɛ/', 'leh-SAY o-lee-VYAY fee-NEER | seel voo PLEH', ['parole']),
  sent(1252, 'On coupe poliment, on garde la parole calmement.', 'You cut in politely; you keep the floor calmly.', '/ɔ̃ kup pɔ.li.mɑ̃ ɔ̃ gaʁd la pa.ʁɔl kal.mə.mɑ̃/', 'ohⁿ koop po-lee-MAHⁿ | ohⁿ gard la pa-ROL kal-muh-MAHⁿ', ['rule', 'parole'], ['flashcard'],
    rule('Pour garder la parole, tu hausses le ton ?', 'Non : tu termines ta phrase calmement, puis tu donnes la parole.')),
];

/* ── ACT 4 · REFORMULER ET CLARIFIER ─────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1253, 'Nous aurions besoin d’un premier lot pour la rentrée.', 'We would need a first batch for the start of term in September.', '/nu.zo.ʁjɔ̃ bə.zwɛ̃ dœ̃ pʁə.mje lo puʁ la ʁɑ̃.tʁe/', 'noo-zoh-RYOHⁿ buh-ZWEHⁿ | duhⁿ pruh-myay LOH | poor la rahⁿ-TRAY', ['clarifier', 'france']),
  sent(1254, 'Si je vous suis bien, vous parlez de début septembre ?', 'If I follow you, you mean early September?', '/si ʒə vu sɥi bjɛ̃ vu paʁ.le də de.by sɛp.tɑ̃bʁ/', 'see zhuh voo swee BYEHⁿ | voo par-LAY duh day-bü sehp-TAHⁿBR', ['clarifier'], FCVDR),
  sent(1255, 'Exactement, pour l’ouverture de nos espaces lyonnais.', 'Exactly, for the opening of our Lyon spaces.', '/ɛg.zak.tə.mɑ̃ puʁ lu.vɛʁ.tyʁ də no.zɛs.pas ljɔ.nɛ/', 'ehg-zak-tuh-MAHⁿ | poor loo-vehr-TÜR | duh noh-zehs-pass lyo-NEH', ['clarifier']),
  sent(1256, 'Pourriez-vous préciser combien de panneaux il vous faut pour ce premier lot ?', 'Could you specify how many panels you need for this first batch?', '/pu.ʁje.vu pʁe.si.ze kɔ̃.bjɛ̃ də pa.no il vu fo puʁ sə pʁə.mje lo/', 'poo-ryay-VOO pray-see-ZAY | kohⁿ-byehⁿ duh pa-NOH eel voo FOH | poor suh pruh-myay LOH', ['clarifier']),
  sent(1257, 'Environ deux cent cinquante, et le reste d’ici la fin de l’année.', 'About two hundred and fifty, and the rest by the end of the year.', '/ɑ̃.vi.ʁɔ̃ dø sɑ̃ sɛ̃.kɑ̃t e lə ʁɛst di.si la fɛ̃ də la.ne/', 'ahⁿ-vee-ROHⁿ | deu sahⁿ sehⁿ-KAHⁿT | ay luh REHST | dee-see la fehⁿ duh la-NAY', ['clarifier']),
  sent(1258, 'Autrement dit, deux livraisons : deux cent cinquante en septembre, le reste en décembre.', 'In other words, two deliveries: two hundred and fifty in September, the rest in December.', '/o.tʁə.mɑ̃ di dø li.vʁɛ.zɔ̃ dø sɑ̃ sɛ̃.kɑ̃t ɑ̃ sɛp.tɑ̃bʁ lə ʁɛst ɑ̃ de.sɑ̃bʁ/', 'oh-truh-mahⁿ DEE | deu lee-vreh-ZOHⁿ | deu sahⁿ sehⁿ-KAHⁿT ahⁿ sehp-TAHⁿBR | luh REHST ahⁿ day-SAHⁿBR', ['clarifier'], FCVDR),
  sent(1259, 'C’est bien ça. Et Bruxelles passerait en dernier.', 'That is right. And Brussels would come last.', '/sɛ bjɛ̃ sa e bʁy.sɛl pa.sʁɛ ɑ̃ dɛʁ.nje/', 'seh byehⁿ SA | ay brü-SEHL pass-REH | ahⁿ dehr-NYAY', ['clarifier']),
  sent(1260, 'Quand vous dites « en dernier », vous pensez à quelle date ?', 'When you say "last", what date do you have in mind?', '/kɑ̃ vu dit ɑ̃ dɛʁ.nje vu pɑ̃.se a kɛl dat/', 'kahⁿ voo DEET ahⁿ dehr-NYAY | voo pahⁿ-SAY a kehl DAT', ['clarifier']),
  sent(1261, 'Julien parlait de janvier, au plus tard.', 'Julien was talking about January at the latest.', '/ʒy.ljɛ̃ paʁ.lɛ də ʒɑ̃.vje o ply taʁ/', 'zhü-LYEHⁿ par-LEH | duh zhahⁿ-VYAY | oh plü TAR', ['clarifier']),
  sent(1262, 'Je récapitule, pour que nous soyons sur la même longueur d’onde.', 'Let me sum up, so that we are on the same wavelength.', '/ʒə ʁe.ka.pi.tyl puʁ kə nu swa.jɔ̃ syʁ la mɛm lɔ̃.gœʁ dɔ̃d/', 'zhuh ray-ka-pee-TÜL | poor kuh noo swa-YOHⁿ | sür la mem lohⁿ-guhr DOHⁿD', ['clarifier', 'subjonctif']),
  mv(1263, 'si je vous suis bien', 'if I follow you correctly', '/si ʒə vu sɥi bjɛ̃/', 'see zhuh voo swee BYEHⁿ', ['clarifier'], 'Suivre quelqu’un : comprendre son raisonnement.'),
  mv(1264, 'autrement dit', 'in other words', '/o.tʁə.mɑ̃ di/', 'oh-truh-mahⁿ DEE', ['clarifier']),
  mv(1265, 'pourriez-vous préciser', 'could you be more specific', '/pu.ʁje.vu pʁe.si.ze/', 'poo-ryay-VOO pray-see-ZAY', ['clarifier'], 'Préciser, pas élaborer sur : élaborer, c’est construire un plan.'),
  mv(1266, 'être sur la même longueur d’onde', 'to be on the same wavelength', '/ɛtʁ syʁ la mɛm lɔ̃.gœʁ dɔ̃d/', 'ehtr sür la mem lohⁿ-guhr DOHⁿD', ['clarifier', 'faux-ami'], 'Le français ne dit pas « être sur la même page ».'),
  mv(1267, 'ce que j’entends, c’est que', 'what I am hearing is that', '/sə kə ʒɑ̃.tɑ̃ sɛ kə/', 'suh kuh zhahⁿ-TAHⁿ | seh KUH', ['clarifier']),
  sent(1268, 'Ce que j’entends, c’est que le délai compte plus que le prix.', 'What I am hearing is that the deadline matters more than the price.', '/sə kə ʒɑ̃.tɑ̃ sɛ kə lə de.lɛ kɔ̃t ply kə lə pʁi/', 'suh kuh zhahⁿ-TAHⁿ | seh kuh luh day-LEH kohⁿt PLÜ | kuh luh PREE', ['clarifier'], FCVDR),
  sent(1269, 'Vous voulez dire que le budget est déjà fixé ?', 'Do you mean that the budget is already set?', '/vu vu.le diʁ kə lə by.dʒɛ ɛ de.ʒa fik.se/', 'voo voo-lay DEER | kuh luh bü-DZHEH | eh day-zha feek-SAY', ['clarifier']),
  sent(1270, 'Je comprends votre inquiétude.', 'I understand your concern.', '/ʒə kɔ̃.pʁɑ̃ vɔ.tʁɛ̃.kje.tyd/', 'zhuh kohⁿ-PRAHⁿ | vo-trehⁿ-kyay-TÜD', ['clarifier']),
  sent(1271, 'Reformuler, c’est redire l’idée de l’autre avec tes mots, puis vérifier.', 'Reformulating means restating the other person’s idea in your own words, then checking.', '/ʁə.fɔʁ.my.le sɛ ʁə.diʁ li.de də lotʁ a.vɛk te mo pɥi ve.ʁi.fje/', 'ruh-for-mü-LAY | seh ruh-DEER lee-DAY duh LOHTR | a-vehk tay MOH | pwee vay-ree-FYAY', ['rule', 'clarifier'], ['flashcard'],
    rule('Tu reformules. Qu’est-ce qui doit suivre ?', 'Une vérification : c’est bien ça ? L’autre confirme ou corrige.')),
  sent(1272, 'Autrement dit, vous préférez payer un peu plus et recevoir plus tôt ?', 'In other words, you would rather pay a little more and receive earlier?', '/o.tʁə.mɑ̃ di vu pʁe.fe.ʁe pe.je œ̃ pø plys e ʁə.sə.vwaʁ ply to/', 'oh-truh-mahⁿ DEE | voo pray-fay-RAY pay-YAY uhⁿ puh PLÜSS | ay ruh-suh-VWAR plü TOH', ['clarifier']),
];

/* ── ACT 5 · NUANCER UN DÉSACCORD ────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  mv(1273, 'je ne partage pas tout à fait votre analyse', 'I do not entirely share your analysis', '/ʒə nə paʁ.taʒ pa tu.ta.fɛ vɔ.tʁa.na.liz/', 'zhuh nuh par-TAZH pa too-ta-FEH | vo-tra-na-LEEZ', ['desaccord'], 'Plus soutenu que « je ne suis pas tout à fait d’accord ».', 'soutenu'),
  sent(1274, 'Je comprends ton point de vue ; toutefois, l’atelier ne suivra pas.', 'I understand your point of view; however, the workshop will not keep up.', '/ʒə kɔ̃.pʁɑ̃ tɔ̃ pwɛ̃ də vy tut.fwa la.tə.lje nə sɥi.vʁa pa/', 'zhuh kohⁿ-PRAHⁿ tohⁿ pwehⁿ duh VÜ | toot-FWA | la-tuh-LYAY nuh swee-vra PA', ['desaccord'], FCVDR),
  mv(1275, 'exprimer des réserves', 'to express reservations', '/ɛks.pʁi.me de ʁe.zɛʁv/', 'ehks-pree-MAY day ray-ZEHRV', ['desaccord']),
  sent(1276, 'Olivier a exprimé des réserves sur le calendrier.', 'Olivier expressed reservations about the schedule.', '/ɔ.li.vje a ɛks.pʁi.me de ʁe.zɛʁv syʁ lə ka.lɑ̃.dʁi.je/', 'o-lee-VYAY a ehks-pree-MAY day ray-ZEHRV | sür luh ka-lahⁿ-dree-YAY', ['desaccord']),
  mv(1277, 'je crains que', 'I am afraid that (+ subjunctive)', '/ʒə kʁɛ̃ kə/', 'zhuh krehⁿ KUH', ['desaccord', 'subjonctif'], 'Suivi du subjonctif, souvent avec un ne qui ne nie rien.'),
  sent(1278, 'Je crains que nous ne puissions pas livrer à temps.', 'I am afraid we may not be able to deliver on time.', '/ʒə kʁɛ̃ kə nu nə pɥi.sjɔ̃ pa li.vʁe a tɑ̃/', 'zhuh krehⁿ kuh noo nuh pwee-SYOHⁿ PA | lee-VRAY a TAHⁿ', ['desaccord', 'subjonctif'], FCVDR),
  sent(1279, 'Ne serait-il pas plus prudent de proposer huit pour cent ?', 'Would it not be wiser to offer eight per cent?', '/nə sə.ʁɛ.til pa ply pʁy.dɑ̃ də pʁɔ.po.ze ɥi puʁ sɑ̃/', 'nuh suh-reh-TEEL pa plü prü-DAHⁿ | duh pro-po-ZAY wee poor SAHⁿ', ['desaccord']),
  mv(1280, 'j’aurais tendance à penser que', 'I would tend to think that', '/ʒo.ʁɛ tɑ̃.dɑ̃s a pɑ̃.se kə/', 'zhoh-REH tahⁿ-DAHⁿSS | a pahⁿ-SAY KUH', ['desaccord']),
  sent(1281, 'J’aurais tendance à penser que le calendrier compte plus que le prix.', 'I would tend to think the schedule matters more than the price.', '/ʒo.ʁɛ tɑ̃.dɑ̃s a pɑ̃.se kə lə ka.lɑ̃.dʁi.je kɔ̃t ply kə lə pʁi/', 'zhoh-REH tahⁿ-DAHⁿSS a pahⁿ-SAY | kuh luh ka-lahⁿ-dree-YAY kohⁿt PLÜ | kuh luh PREE', ['desaccord']),
  sent(1282, 'Sur ce point, nous ne sommes pas du même avis.', 'On this point, we do not see things the same way.', '/syʁ sə pwɛ̃ nu nə sɔm pa dy mɛ.ma.vi/', 'sür suh PWEHⁿ | noo nuh SOMM pa dü meh-ma-VEE', ['desaccord']),
  sent(1283, 'Vous n’avez pas tort ; cela dit, le volume ne suffit pas.', 'You are not wrong; that said, the volume is not enough.', '/vu na.ve pa tɔʁ sə.la di lə vɔ.lym nə sy.fi pa/', 'voo na-vay pa TOR | suh-la DEE | luh vo-LÜM nuh sü-fee PA', ['desaccord'], FCVDR),
  mv(1284, 'cela dit', 'that said', '/sə.la di/', 'suh-la DEE', ['desaccord'], 'Pour reconnaître un point, puis ajouter le tien.'),
  sent(1285, 'Je ne partage pas tout à fait votre analyse du marché.', 'I do not entirely share your analysis of the market.', '/ʒə nə paʁ.taʒ pa tu.ta.fɛ vɔ.tʁa.na.liz dy maʁ.ʃe/', 'zhuh nuh par-TAZH pa too-ta-FEH | vo-tra-na-LEEZ dü mar-SHAY', ['desaccord'], FCVR, { register: 'soutenu' }),
  sent(1286, 'Votre prix me semble un peu élevé pour ce volume.', 'Your price seems a little high to me for this volume.', '/vɔtʁ pʁi mə sɑ̃bl œ̃ pø el.ve puʁ sə vɔ.lym/', 'votr PREE muh SAHⁿBL | uhⁿ puh ayl-VAY | poor suh vo-LÜM', ['desaccord', 'faux-ami']),
  sent(1287, 'Au B2, un désaccord reconnaît, nuance, puis laisse une question ouverte.', 'At B2, a disagreement acknowledges, qualifies, then leaves a question open.', '/o be.dø œ̃ de.za.kɔʁ ʁə.kɔ.nɛ ny.ɑ̃s pɥi lɛs yn kɛs.tjɔ̃ u.vɛʁt/', 'oh bay-DEU | uhⁿ day-za-KOR ruh-ko-NEH | nü-AHⁿSS | pwee lehss ün kehs-TYOHⁿ oo-VEHRT', ['rule', 'desaccord'], ['flashcard'],
    rule('Tu n’es pas d’accord avec un client. Tu commences par quoi ?', 'Par ce qui est juste chez lui. Puis tu nuances, et tu finis sur une question.')),
  sent(1288, 'Kim a fait remarquer que Coworka tenait moins au prix qu’au calendrier.', 'Kim pointed out that Coworka cared less about the price than about the schedule.', '/kim a fɛ ʁə.maʁ.ke kə ko.wɔʁ.ka tə.nɛ mwɛ̃.zo pʁi ko ka.lɑ̃.dʁi.je/', 'keem a feh ruh-mar-KAY | kuh ko-wor-KA tuh-neh mwehⁿ-zoh PREE | koh ka-lahⁿ-dree-YAY', ['desaccord']),
  mv(1289, 'faire remarquer que', 'to point out that', '/fɛʁ ʁə.maʁ.ke kə/', 'fehr ruh-mar-KAY KUH', ['desaccord']),
];

/* ── ACT 6 · PROPOSER ET CONTRE-PROPOSER ─────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1290, 'Nous avons étudié votre devis, et il reste au-dessus de notre budget.', 'We have studied your quote, and it is still above our budget.', '/nu.za.vɔ̃ e.ty.dje vɔtʁ də.vi e il ʁɛst od.sy də nɔtʁ by.dʒɛ/', 'noo-za-vohⁿ ay-tü-DYAY votr duh-VEE | ay eel REHST ohd-SÜ | duh notr bü-DZHEH', ['proposer', 'france']),
  sent(1291, 'Que diriez-vous d’une remise de quinze pour cent ?', 'What would you say to a fifteen per cent discount?', '/kə di.ʁje.vu dyn ʁə.miz də kɛ̃z puʁ sɑ̃/', 'kuh dee-ryay-VOO | dün ruh-MEEZ duh kehⁿz poor SAHⁿ', ['proposer'], FCVDR),
  sent(1292, 'Quinze pour cent, nous ne pouvons pas aller jusque-là.', 'Fifteen per cent: we cannot go that far.', '/kɛ̃z puʁ sɑ̃ nu nə pu.vɔ̃ pa a.le ʒys.kə.la/', 'kehⁿz poor SAHⁿ | noo nuh poo-vohⁿ PA | a-lay zhüs-kuh-LA', ['proposer']),
  sent(1293, 'En revanche, nous pourrions envisager dix pour cent sur deux ans.', 'On the other hand, we could consider ten per cent over two years.', '/ɑ̃ ʁə.vɑ̃ʃ nu pu.ʁjɔ̃ ɑ̃.vi.za.ʒe dis puʁ sɑ̃ syʁ dø.zɑ̃/', 'ahⁿ ruh-VAHⁿSH | noo poo-ryohⁿ ahⁿ-vee-za-ZHAY | DEESS poor SAHⁿ sür deu-ZAHⁿ', ['proposer'], FCVDR),
  sent(1294, 'Et si nous commandions tout d’un coup, dès cette année ?', 'And what if we ordered everything at once, this year?', '/e si nu kɔ.mɑ̃.djɔ̃ tu dœ̃ ku dɛ sɛ.ta.ne/', 'ay see noo ko-mahⁿ-DYOHⁿ | too duhⁿ KOO | deh seh-ta-NAY', ['proposer', 'belgique']),
  sent(1295, 'Dans ce cas, je vous fais une contre-proposition : huit pour cent, et la livraison offerte.', 'In that case, I will make you a counter-proposal: eight per cent, and free delivery.', '/dɑ̃ sə ka ʒə vu fɛ yn kɔ̃.tʁə.pʁɔ.po.zi.sjɔ̃ ɥi puʁ sɑ̃ e la li.vʁɛ.zɔ̃ ɔ.fɛʁt/', 'dahⁿ suh KA | zhuh voo feh ün kohⁿ-truh-pro-po-zee-SYOHⁿ | wee poor SAHⁿ | ay la lee-vreh-zohⁿ o-FEHRT', ['proposer'], FCVDR),
  sent(1296, 'Huit pour cent et la livraison, c’est intéressant, mais le paiement nous pose problème.', 'Eight per cent and delivery is interesting, but the payment is a problem for us.', '/ɥi puʁ sɑ̃ e la li.vʁɛ.zɔ̃ sɛ.tɛ̃.te.ʁe.sɑ̃ mɛ lə pɛ.mɑ̃ nu poz pʁɔ.blɛm/', 'wee poor SAHⁿ ay la lee-vreh-ZOHⁿ | seh-tehⁿ-tay-ray-SAHⁿ | meh luh peh-MAHⁿ noo poz pro-BLEHMM', ['proposer']),
  sent(1297, 'Chez nous, les fournisseurs sont payés à nonante jours.', 'With us, suppliers are paid at ninety days (Belgium: nonante).', '/ʃe nu le fuʁ.ni.sœʁ sɔ̃ pe.je a nɔ.nɑ̃t ʒuʁ/', 'shay NOO | lay foor-nee-SUHR sohⁿ pay-YAY | a no-nahⁿt ZHOOR', ['proposer', 'belgique', 'variante']),
  sent(1298, 'Nonante jours, c’est trop long pour une PME comme la nôtre.', 'Ninety days is too long for a small business like ours.', '/nɔ.nɑ̃t ʒuʁ sɛ tʁo lɔ̃ puʁ yn pe.ɛm.ø kɔm la notʁ/', 'no-nahⁿt ZHOOR | seh troh LOHⁿ | poor ün pay-emm-UH | KOMM la NOHTR', ['proposer', 'variante']),
  sent(1299, 'Ce que nous pouvons vous offrir, c’est soixante jours, sans frais.', 'What we can offer you is sixty days, at no extra cost.', '/sə kə nu pu.vɔ̃ vu.zɔ.fʁiʁ sɛ swa.sɑ̃t ʒuʁ sɑ̃ fʁɛ/', 'suh kuh noo poo-vohⁿ voo-zo-FREER | seh swa-sahⁿt ZHOOR | sahⁿ FREH', ['proposer'], FCVDR),
  sent(1300, 'Laissez-nous en discuter, et nous revenons vers vous demain.', 'Let us discuss it, and we will get back to you tomorrow.', '/lɛ.se.nu ɑ̃ dis.ky.te e nu ʁə.və.nɔ̃ vɛʁ vu də.mɛ̃/', 'leh-say-NOO ahⁿ dees-kü-TAY | ay noo ruh-vuh-NOHⁿ vehr VOO | duh-MEHⁿ', ['proposer', 'france']),
  mv(1301, 'que diriez-vous de', 'what would you say to', '/kə di.ʁje.vu də/', 'kuh dee-ryay-VOO DUH', ['proposer'], 'Une proposition sous forme de question : l’autre peut répondre sans perdre la face.'),
  mv(1302, 'faire une contre-proposition', 'to make a counter-proposal', '/fɛʁ yn kɔ̃.tʁə.pʁɔ.po.zi.sjɔ̃/', 'fehr ün kohⁿ-truh-pro-po-zee-SYOHⁿ', ['proposer']),
  mv(1303, 'nous pourrions envisager', 'we could consider', '/nu pu.ʁjɔ̃ ɑ̃.vi.za.ʒe/', 'noo poo-ryohⁿ ahⁿ-vee-za-ZHAY', ['proposer', 'faux-ami'], 'Envisager une solution. Considérer, c’est regarder ou juger.'),
  mv(1304, 'mettre sur la table', 'to put on the table', '/mɛtʁ syʁ la tabl/', 'mehtr sür la TABL', ['proposer']),
  sent(1305, 'Je mets une autre option sur la table : un contrat de trois ans.', 'I am putting another option on the table: a three-year contract.', '/ʒə mɛ y.no.tʁɔp.sjɔ̃ syʁ la tabl œ̃ kɔ̃.tʁa də tʁwa.zɑ̃/', 'zhuh meh ü-no-trop-SYOHⁿ | sür la TABL | uhⁿ kohⁿ-TRA duh trwa-ZAHⁿ', ['proposer']),
  sent(1306, 'Et si on regardait d’abord le calendrier ?', 'What if we looked at the schedule first?', '/e si ɔ̃ ʁə.gaʁ.dɛ da.bɔʁ lə ka.lɑ̃.dʁi.je/', 'ay see ohⁿ ruh-gar-DEH | da-bor luh ka-lahⁿ-dree-YAY', ['proposer']),
  mv(1307, 'revenir vers quelqu’un', 'to get back to someone (France)', '/ʁə.və.niʁ vɛʁ kɛl.kœ̃/', 'ruh-vuh-NEER vehr kehl-KUHⁿ', ['proposer', 'france', 'variante'], 'Très courant en France au travail. Au Québec, on dit plutôt : je vous rappelle, je vous donne des nouvelles.'),
  sent(1308, 'Que diriez-vous si nous baissions le prix de huit pour cent ?', 'What would you say if we lowered the price by eight per cent?', '/kə di.ʁje.vu si nu bɛ.sjɔ̃ lə pʁi də ɥi puʁ sɑ̃/', 'kuh dee-ryay-VOO | see noo beh-SYOHⁿ luh PREE | duh wee poor SAHⁿ', ['proposer'], FCVDR),
  sent(1309, 'Je vous propose que vous payiez à soixante jours.', 'I suggest that you pay at sixty days.', '/ʒə vu pʁɔ.poz kə vu pɛ.je a swa.sɑ̃t ʒuʁ/', 'zhuh voo pro-POZ | kuh voo peh-YAY | a swa-sahⁿt ZHOOR', ['proposer', 'subjonctif']),
  sent(1310, 'Je vous donne des nouvelles demain matin.', 'I will update you tomorrow morning.', '/ʒə vu dɔn de nu.vɛl də.mɛ̃ ma.tɛ̃/', 'zhuh voo DONN day noo-VEHL | duh-mehⁿ ma-TEHⁿ', ['proposer', 'quebec']),
  sent(1311, 'Une contre-proposition dit non à une offre, et oui à la discussion.', 'A counter-proposal says no to an offer and yes to the discussion.', '/yn kɔ̃.tʁə.pʁɔ.po.zi.sjɔ̃ di nɔ̃ a y.nɔfʁ e wi a la dis.ky.sjɔ̃/', 'ün kohⁿ-truh-pro-po-zee-SYOHⁿ | dee NOHⁿ a ü-NOFR | ay WEE a la dees-kü-SYOHⁿ', ['rule', 'proposer'], ['flashcard'],
    rule('On te fait une offre trop haute. Tu réponds comment ?', 'Par une contre-proposition : un autre chiffre, avec une raison.')),
];

/* ── ACT 7 · CÉDER POUR OBTENIR ──────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  mv(1312, 'faire un geste', 'to make a concession, a goodwill gesture', '/fɛʁ œ̃ ʒɛst/', 'fehr uhⁿ ZHEHST', ['ceder'], 'Faire un geste sur le prix : baisser un peu, pour débloquer la discussion.'),
  sent(1313, 'Je peux faire un geste sur le prix, à condition que vous vous engagiez sur la durée.', 'I can make a concession on price, on condition that you commit for the long term.', '/ʒə pø fɛʁ œ̃ ʒɛst syʁ lə pʁi a kɔ̃.di.sjɔ̃ kə vu vu.zɑ̃.ga.ʒje syʁ la dy.ʁe/', 'zhuh puh fehr uhⁿ ZHEHST sür luh PREE | a kohⁿ-dee-SYOHⁿ kuh voo voo-zahⁿ-ga-ZHYAY | sür la dü-RAY', ['ceder', 'subjonctif'], FCVDR),
  mv(1314, 'en contrepartie', 'in return', '/ɑ̃ kɔ̃.tʁə.paʁ.ti/', 'ahⁿ kohⁿ-truh-par-TEE', ['ceder']),
  sent(1315, 'En contrepartie, nous vous demandons un engagement de deux ans.', 'In return, we are asking you for a two-year commitment.', '/ɑ̃ kɔ̃.tʁə.paʁ.ti nu vu də.mɑ̃.dɔ̃ œ̃.nɑ̃.gaʒ.mɑ̃ də dø.zɑ̃/', 'ahⁿ kohⁿ-truh-par-TEE | noo voo duh-mahⁿ-DOHⁿ | uhⁿ-nahⁿ-gazh-MAHⁿ duh deu-ZAHⁿ', ['ceder'], FCVDR),
  sent(1316, 'Nous faisons un effort sur ce point.', 'We are making an effort on this point.', '/nu fə.zɔ̃ œ̃.ne.fɔʁ syʁ sə pwɛ̃/', 'noo fuh-ZOHⁿ uhⁿ-nay-FOR | sür suh PWEHⁿ', ['ceder']),
  sent(1317, 'Là, nous ne pouvons pas vous suivre.', 'There, we cannot go along with you.', '/la nu nə pu.vɔ̃ pa vu sɥivʁ/', 'LA | noo nuh poo-vohⁿ PA voo SWEEVR', ['ceder'], FCVDR),
  sent(1318, 'C’est notre dernière proposition.', 'This is our final offer.', '/sɛ nɔtʁ dɛʁ.njɛʁ pʁɔ.po.zi.sjɔ̃/', 'seh notr dehr-NYEHR | pro-po-zee-SYOHⁿ', ['ceder']),
  mv(1319, 'céder sur un point', 'to give way on a point', '/se.de syʁ œ̃ pwɛ̃/', 'say-DAY sür uhⁿ PWEHⁿ', ['ceder']),
  sent(1320, 'Nous sommes prêts à céder sur le délai, pas sur le prix.', 'We are ready to give way on the deadline, not on the price.', '/nu sɔm pʁɛ.ta se.de syʁ lə de.lɛ pa syʁ lə pʁi/', 'noo SOMM preh-ta say-DAY sür luh day-LEH | pa sür luh PREE', ['ceder']),
  mv(1321, 'une commande ferme', 'a firm order', '/yn kɔ.mɑ̃d fɛʁm/', 'ün ko-mahⁿd FEHRM', ['ceder'], 'Ferme : signée, qu’on ne peut plus annuler.'),
  sent(1322, 'Nous pouvons accepter soixante jours, mais seulement pour une commande ferme.', 'We can accept sixty days, but only for a firm order.', '/nu pu.vɔ̃ ak.sɛp.te swa.sɑ̃t ʒuʁ mɛ sœl.mɑ̃ puʁ yn kɔ.mɑ̃d fɛʁm/', 'noo poo-VOHⁿ ak-sehp-TAY swa-sahⁿt ZHOOR | meh suhl-MAHⁿ | poor ün ko-mahⁿd FEHRM', ['ceder']),
  sent(1323, 'Soit vous prenez les six cents panneaux, soit nous gardons le prix actuel.', 'Either you take the six hundred panels, or we keep the current price.', '/swa vu pʁə.ne le si sɑ̃ pa.no swa nu gaʁ.dɔ̃ lə pʁi ak.tɥɛl/', 'swa voo pruh-NAY lay see sahⁿ pa-NOH | swa noo gar-DOHⁿ luh pree ak-TWEHL', ['ceder']),
  sent(1324, 'On ne donne jamais rien sans rien obtenir en contrepartie.', 'You never give anything without getting something in return.', '/ɔ̃ nə dɔn ʒa.mɛ ʁjɛ̃ sɑ̃ ʁjɛ̃ ɔp.tə.niʁ ɑ̃ kɔ̃.tʁə.paʁ.ti/', 'ohⁿ nuh DONN zha-meh RYEHⁿ | sahⁿ ryehⁿ op-tuh-NEER | ahⁿ kohⁿ-truh-par-TEE', ['rule', 'ceder'], ['flashcard'],
    rule('Le silence devient gênant. Tu baisses ton prix ?', 'Non. Tu cèdes seulement si tu obtiens quelque chose en échange.')),
  sent(1325, 'Trois pour cent, puis deux : on voit qu’on approche de la limite.', 'Three per cent, then two: you can see the limit is near.', '/tʁwa puʁ sɑ̃ pɥi dø ɔ̃ vwa kɔ̃.na.pʁɔʃ də la li.mit/', 'trwa poor SAHⁿ | pwee DEU | ohⁿ vwa kohⁿ-na-PROSH | duh la lee-MEET', ['ceder']),
  mv(1326, 'connaître son seuil', 'to know one’s bottom line', '/kɔ.nɛtʁ sɔ̃ sœj/', 'ko-nehtr sohⁿ SUHY', ['ceder'], 'Le seuil : la limite en dessous de laquelle tu ne signes pas.'),
  sent(1327, 'Les bons négociateurs connaissent leur seuil avant d’entrer dans la salle.', 'Good negotiators know their bottom line before entering the room.', '/le bɔ̃ ne.gɔ.sja.tœʁ kɔ.nɛs lœʁ sœj a.vɑ̃ dɑ̃.tʁe dɑ̃ la sal/', 'lay bohⁿ nay-go-sya-TUHR | ko-nehss luhr SUHY | a-vahⁿ dahⁿ-TRAY dahⁿ la SAL', ['ceder']),
];

/* ── ACT 8 · L'OFFRE CONDITIONNELLE ──────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1328, 'Si vous confirmez la commande avant le trente juin, nous appliquerons une remise de dix pour cent.', 'If you confirm the order before 30 June, we will apply a ten per cent discount.', '/si vu kɔ̃.fiʁ.me la kɔ.mɑ̃d a.vɑ̃ lə tʁɑ̃t ʒɥɛ̃ nu.za.pli.kə.ʁɔ̃ yn ʁə.miz də dis puʁ sɑ̃/', 'see voo kohⁿ-feer-MAY la ko-MAHⁿD | a-vahⁿ luh trahⁿt ZHWEHⁿ | noo-za-plee-kuh-ROHⁿ ün ruh-MEEZ | duh DEESS poor SAHⁿ', ['offre'], FCVDR),
  sent(1329, 'Si vous vous engagiez sur trois ans, nous pourrions baisser encore le prix.', 'If you committed to three years, we could lower the price further.', '/si vu vu.zɑ̃.ga.ʒje syʁ tʁwa.zɑ̃ nu pu.ʁjɔ̃ be.se ɑ̃.kɔʁ lə pʁi/', 'see voo voo-zahⁿ-ga-ZHYAY sür trwa-ZAHⁿ | noo poo-ryohⁿ bay-SAY ahⁿ-kor luh PREE', ['offre'], FCVDR),
  sent(1330, 'Si vous vous engagez sur deux ans, nous pourrions revoir le paiement.', 'If you commit to two years, we could review the payment terms.', '/si vu vu.zɑ̃.ga.ʒe syʁ dø.zɑ̃ nu pu.ʁjɔ̃ ʁə.vwaʁ lə pɛ.mɑ̃/', 'see voo voo-zahⁿ-ga-ZHAY sür deu-ZAHⁿ | noo poo-ryohⁿ ruh-VWAR luh peh-MAHⁿ', ['offre']),
  mv(1331, 'sous réserve de', 'subject to', '/su ʁe.zɛʁv də/', 'soo ray-ZEHRV DUH', ['offre'], 'Suivi d’un nom : sous réserve de la validation, de votre accord.', 'soutenu'),
  sent(1332, 'Le premier lot sera livré en septembre, sous réserve de la validation des couleurs.', 'The first batch will be delivered in September, subject to approval of the colours.', '/lə pʁə.mje lo sə.ʁa li.vʁe ɑ̃ sɛp.tɑ̃bʁ su ʁe.zɛʁv də la va.li.da.sjɔ̃ de ku.lœʁ/', 'luh pruh-myay LOH | suh-ra lee-VRAY ahⁿ sehp-TAHⁿBR | soo ray-ZEHRV | duh la va-lee-da-SYOHⁿ day koo-LUHR', ['offre'], FCVR, { register: 'soutenu' }),
  mv(1333, 'moyennant', 'in return for (a payment)', '/mwa.jɛ.nɑ̃/', 'mwa-yeh-NAHⁿ', ['offre'], 'Moyennant un forfait : en échange d’une somme.', 'soutenu'),
  sent(1334, 'Nous pourrions former vos équipes, moyennant un forfait de huit cents euros.', 'We could train your teams, for a flat fee of eight hundred euros.', '/nu pu.ʁjɔ̃ fɔʁ.me vo.ze.kip mwa.jɛ.nɑ̃ œ̃ fɔʁ.fɛ də ɥi sɑ̃.zø.ʁo/', 'noo poo-ryohⁿ for-MAY voh-zay-KEEP | mwa-yeh-NAHⁿ uhⁿ for-FEH | duh wee sahⁿ-zuh-ROH', ['offre']),
  sent(1335, 'Dans le cas d’une commande sur un an, la remise serait de cinq pour cent.', 'In the case of a one-year order, the discount would be five per cent.', '/dɑ̃ lə ka dyn kɔ.mɑ̃d syʁ œ̃.nɑ̃ la ʁə.miz sə.ʁɛ də sɛ̃k puʁ sɑ̃/', 'dahⁿ luh KA | dün ko-MAHⁿD sür uhⁿ-NAHⁿ | la ruh-MEEZ suh-REH | duh sehⁿk poor SAHⁿ', ['offre']),
  mv(1336, 'appliquer une remise', 'to apply a discount', '/a.pli.ke yn ʁə.miz/', 'a-plee-KAY ün ruh-MEEZ', ['offre']),
  mv(1337, 'verser un acompte', 'to pay a deposit', '/vɛʁ.se œ̃.na.kɔ̃t/', 'vehr-SAY uhⁿ-na-KOHⁿT', ['offre'], 'Un acompte : une partie du prix, payée d’avance.'),
  sent(1338, 'Le paiement se fera à soixante jours, à condition que l’acompte soit versé à la signature.', 'Payment will be at sixty days, on condition that the deposit is paid on signing.', '/lə pɛ.mɑ̃ sə fə.ʁa a swa.sɑ̃t ʒuʁ a kɔ̃.di.sjɔ̃ kə la.kɔ̃t swa vɛʁ.se a la si.ɲa.tyʁ/', 'luh peh-MAHⁿ suh fuh-RA | a swa-sahⁿt ZHOOR | a kohⁿ-dee-SYOHⁿ kuh la-KOHⁿT | swa vehr-SAY a la see-nya-TÜR', ['offre', 'subjonctif'], FCVDR),
  sent(1339, 'En vous engageant sur deux ans, vous obtiendriez la remise complète.', 'By committing to two years, you would get the full discount.', '/ɑ̃ vu.zɑ̃.ga.ʒɑ̃ syʁ dø.zɑ̃ vu.zɔp.tjɛ̃.dʁi.je la ʁə.miz kɔ̃.plɛt/', 'ahⁿ voo-zahⁿ-ga-ZHAHⁿ sür deu-ZAHⁿ | voo-zop-tyehⁿ-dree-YAY | la ruh-MEEZ kohⁿ-PLEHT', ['offre', 'gerondif']),
  sent(1340, 'Cette offre est valable trente jours.', 'This offer is valid for thirty days.', '/sɛ.tɔfʁ ɛ va.labl tʁɑ̃t ʒuʁ/', 'seh-TOFR eh va-LABL | trahⁿt ZHOOR', ['offre']),
  sent(1341, 'Si + présent pour une offre ferme, si + imparfait pour une hypothèse, jamais si + conditionnel.', 'If + present for a firm offer, if + imperfect for a hypothesis, never if + conditional.', '/si pʁe.zɑ̃ puʁ y.nɔfʁ fɛʁm si ɛ̃.paʁ.fɛ puʁ y.ni.pɔ.tɛz ʒa.mɛ si kɔ̃.di.sjɔ.nɛl/', 'see pray-ZAHⁿ poor ü-nofr FEHRM | see ehⁿ-par-FEH poor ü-nee-po-TEHZ | zha-MEH see kohⁿ-dee-syo-NEHL', ['rule', 'offre'], ['flashcard'],
    rule('Après si, tu mets le conditionnel ?', 'Jamais. Si + présent, ou si + imparfait. Le conditionnel va dans l’autre partie.')),
  sent(1342, 'Si le premier lot vous convient, nous livrerons le second en décembre.', 'If the first batch suits you, we will deliver the second in December.', '/si lə pʁə.mje lo vu kɔ̃.vjɛ̃ nu li.vʁə.ʁɔ̃ lə sə.gɔ̃ ɑ̃ de.sɑ̃bʁ/', 'see luh pruh-myay LOH voo kohⁿ-VYEHⁿ | noo lee-vruh-ROHⁿ luh suh-GOHⁿ | ahⁿ day-SAHⁿBR', ['offre']),
];

/* ── ACT 9 · PERSUADER ───────────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1343, 'Olivier, je sais ce que tu vas me dire : l’atelier est déjà plein.', 'Olivier, I know what you are going to say: the workshop is already full.', '/ɔ.li.vje ʒə sɛ sə kə ty va mə diʁ la.tə.lje ɛ de.ʒa plɛ̃/', 'o-lee-VYAY | zhuh SEH suh kuh tü va muh DEER | la-tuh-LYAY eh day-zha PLEHⁿ', ['persuader'], FCVDR),
  sent(1344, 'Justement, ce contrat nous permettrait d’embaucher deux personnes.', 'That is exactly the point: this contract would let us hire two people.', '/ʒys.tə.mɑ̃ sə kɔ̃.tʁa nu pɛʁ.mɛ.tʁɛ dɑ̃.bo.ʃe dø pɛʁ.sɔn/', 'zhüs-tuh-MAHⁿ | suh kohⁿ-TRA noo pehr-meh-TREH | dahⁿ-boh-SHAY deu pehr-SONN', ['persuader'], FCVDR),
  sent(1345, 'Ensuite, tu vas me parler de la marge.', 'Next, you are going to talk to me about the margin.', '/ɑ̃.sɥit ty va mə paʁ.le də la maʁʒ/', 'ahⁿ-SWEET | tü va muh par-LAY duh la MARZH', ['persuader']),
  sent(1346, 'Dix pour cent de remise, c’est beaucoup, mais sur six cents panneaux, nous restons rentables.', 'Ten per cent off is a lot, but on six hundred panels we stay profitable.', '/dis puʁ sɑ̃ də ʁə.miz sɛ bo.ku mɛ syʁ si sɑ̃ pa.no nu ʁɛs.tɔ̃ ʁɑ̃.tabl/', 'DEESS poor SAHⁿ duh ruh-MEEZ | seh boh-KOO | meh sür see sahⁿ pa-NOH | noo rehs-tohⁿ rahⁿ-TABL', ['persuader']),
  sent(1347, 'Et ce qui te retient vraiment, je crois, c’est le risque de retard.', 'And what is really holding you back, I think, is the risk of delay.', '/e sə ki tə ʁə.tjɛ̃ vʁɛ.mɑ̃ ʒə kʁwa sɛ lə ʁisk də ʁə.taʁ/', 'ay suh kee tuh ruh-TYEHⁿ vreh-MAHⁿ | zhuh KRWA | seh luh REESK duh ruh-TAR', ['persuader']),
  sent(1348, 'Pour ça, nous livrons en deux fois, et le second lot n’arrive qu’en décembre.', 'For that, we deliver in two batches, and the second batch only arrives in December.', '/puʁ sa nu li.vʁɔ̃ ɑ̃ dø fwa e lə sə.gɔ̃ lo na.ʁiv kɑ̃ de.sɑ̃bʁ/', 'poor SA | noo lee-VROHⁿ ahⁿ deu FWA | ay luh suh-gohⁿ LOH | na-reev kahⁿ day-SAHⁿBR', ['persuader']),
  sent(1349, 'Imagine un peu : nos panneaux dans douze espaces, à Lyon et à Bruxelles.', 'Just imagine: our panels in twelve spaces, in Lyon and Brussels.', '/i.ma.ʒin œ̃ pø no pa.no dɑ̃ duz ɛs.pas a ljɔ̃ e a bʁy.sɛl/', 'ee-ma-zheen uhⁿ PUH | noh pa-NOH dahⁿ dooz ehs-PASS | a LYOHⁿ ay a brü-SEHL', ['persuader'], FCVDR),
  sent(1350, 'C’est la meilleure vitrine que nous puissions avoir en Europe.', 'It is the best showcase we could have in Europe.', '/sɛ la mɛ.jœʁ vi.tʁin kə nu pɥi.sjɔ̃ a.vwaʁ ɑ̃.nø.ʁɔp/', 'seh la meh-yuhr vee-TREEN | kuh noo pwee-SYOHⁿ a-VWAR | ahⁿ-nuh-ROP', ['persuader', 'subjonctif']),
  sent(1351, 'Tu n’as rien à perdre à essayer : le premier lot est petit.', 'You have nothing to lose by trying: the first batch is small.', '/ty na ʁjɛ̃.na pɛʁdʁ a e.se.je lə pʁə.mje lo ɛ pə.ti/', 'tü na ryehⁿ-na PEHRDR | a ay-say-YAY | luh pruh-myay LOH eh puh-TEE', ['persuader'], FCVDR),
  sent(1352, 'Moi, je suis convaincue que c’est le bon moment.', 'Personally, I am convinced this is the right moment.', '/mwa ʒə sɥi kɔ̃.vɛ̃.ky kə sɛ lə bɔ̃ mɔ.mɑ̃/', 'MWA | zhuh swee kohⁿ-vehⁿ-KÜ | kuh seh luh bohⁿ mo-MAHⁿ', ['persuader']),
  sent(1353, 'Bon, tu m’as presque convaincu. Envoie-moi les chiffres.', 'All right, you have almost convinced me. Send me the figures.', '/bɔ̃ ty ma pʁɛsk kɔ̃.vɛ̃.ky ɑ̃.vwa.mwa le ʃifʁ/', 'BOHⁿ | tü ma prehsk kohⁿ-vehⁿ-KÜ | ahⁿ-vwa-MWA lay SHEEFR', ['persuader']),
  mv(1354, 'je sais ce que tu vas me dire', 'I know what you are going to say', '/ʒə sɛ sə kə ty va mə diʁ/', 'zhuh SEH suh kuh tü va muh DEER', ['persuader'], 'Tu nommes l’objection avant l’autre : elle perd la moitié de sa force.'),
  mv(1355, 'tu n’as rien à perdre', 'you have nothing to lose', '/ty na ʁjɛ̃.na pɛʁdʁ/', 'tü na ryehⁿ-na PEHRDR', ['persuader']),
  mv(1356, 'lever une objection', 'to answer an objection', '/lə.ve y.nɔb.ʒɛk.sjɔ̃/', 'luh-VAY ü-nob-zhehk-SYOHⁿ', ['persuader'], 'Lever un doute, une objection : le faire disparaître.'),
  mv(1357, 'être une vitrine pour', 'to be a showcase for', '/ɛtʁ yn vi.tʁin puʁ/', 'ehtr ün vee-TREEN POOR', ['persuader']),
  sent(1358, 'Je comprends ta crainte ; justement, c’est pour ça que nous livrons en deux fois.', 'I understand your worry; that is exactly why we are delivering in two batches.', '/ʒə kɔ̃.pʁɑ̃ ta kʁɛ̃t ʒys.tə.mɑ̃ sɛ puʁ sa kə nu li.vʁɔ̃ ɑ̃ dø fwa/', 'zhuh kohⁿ-prahⁿ ta KREHⁿT | zhüs-tuh-MAHⁿ | seh poor SA | kuh noo lee-VROHⁿ ahⁿ deu FWA', ['persuader']),
  sent(1359, 'Essaie une fois : si ça ne te convient pas, on arrête après le premier lot.', 'Try it once: if it does not suit you, we stop after the first batch.', '/e.sɛ yn fwa si sa nə tə kɔ̃.vjɛ̃ pa ɔ̃.na.ʁɛt a.pʁɛ lə pʁə.mje lo/', 'ay-SEH ün FWA | see sa nuh tuh kohⁿ-vyehⁿ PA | ohⁿ-na-REHT a-preh luh pruh-myay LOH', ['persuader']),
  sent(1360, 'Persuader, c’est répondre à l’objection avant qu’elle arrive.', 'Persuading means answering the objection before it comes.', '/pɛʁ.sɥa.de sɛ ʁe.pɔ̃dʁ a lɔb.ʒɛk.sjɔ̃ a.vɑ̃ kɛ.la.ʁiv/', 'pehr-swa-DAY | seh ray-POHⁿDR a lob-zhehk-SYOHⁿ | a-vahⁿ keh-la-REEV', ['rule', 'persuader'], ['flashcard'],
    rule('Ton collègue hésite. Tu attends ses objections ?', 'Non : tu les nommes toi-même, une par une, et tu y réponds.')),
  sent(1361, 'Ce contrat, ce n’est pas un risque de plus : c’est un an de travail assuré.', 'This contract is not one more risk: it is a year of guaranteed work.', '/sə kɔ̃.tʁa sə nɛ pa.zœ̃ ʁisk də plys sɛ.tœ̃.nɑ̃ də tʁa.vaj a.sy.ʁe/', 'suh kohⁿ-TRA | suh neh pa-zuhⁿ REESK duh PLÜSS | seh-tuhⁿ-NAHⁿ duh tra-VAHY a-sü-RAY', ['persuader']),
];

/* ── ACT 10 · CONCLURE ET FIXER LA SUITE ─────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1362, 'Nous arrivons à la fin ; je vous propose de récapituler.', 'We are coming to the end; I suggest we sum up.', '/nu.za.ʁi.vɔ̃ a la fɛ̃ ʒə vu pʁɔ.poz də ʁe.ka.pi.ty.le/', 'noo-za-ree-VOHⁿ a la FEHⁿ | zhuh voo pro-POZ | duh ray-ka-pee-tü-LAY', ['conclure']),
  sent(1363, 'Nous sommes donc d’accord sur six cents panneaux, livrés en deux lots.', 'So we agree on six hundred panels, delivered in two batches.', '/nu sɔm dɔ̃k da.kɔʁ syʁ si sɑ̃ pa.no li.vʁe ɑ̃ dø lo/', 'noo SOMM dohⁿk da-KOR | sür see sahⁿ pa-NOH | lee-VRAY ahⁿ deu LOH', ['conclure'], FCVDR),
  sent(1364, 'La remise sera de dix pour cent, en échange d’un engagement de deux ans.', 'The discount will be ten per cent, in exchange for a two-year commitment.', '/la ʁə.miz sə.ʁa də dis puʁ sɑ̃ ɑ̃.ne.ʃɑ̃ʒ dœ̃.nɑ̃.gaʒ.mɑ̃ də dø.zɑ̃/', 'la ruh-MEEZ suh-RA | duh DEESS poor SAHⁿ | ahⁿ-nay-SHAHⁿZH | duhⁿ-nahⁿ-gazh-MAHⁿ duh deu-ZAHⁿ', ['conclure']),
  sent(1365, 'Reste un point en suspens : les couleurs pour Bruxelles.', 'One item is still pending: the colours for Brussels.', '/ʁɛst œ̃ pwɛ̃ ɑ̃ sys.pɑ̃ le ku.lœʁ puʁ bʁy.sɛl/', 'REHST uhⁿ PWEHⁿ ahⁿ süs-PAHⁿ | lay koo-LUHR poor brü-SEHL', ['conclure']),
  sent(1366, 'Qui s’en charge de votre côté ?', 'Who is taking care of it on your side?', '/ki sɑ̃ ʃaʁʒ də vɔtʁ ko.te/', 'kee sahⁿ SHARZH | duh votr koh-TAY', ['conclure']),
  sent(1367, 'Julien s’en occupe ; il vous écrit d’ici vendredi.', 'Julien is handling it; he will write to you by Friday.', '/ʒy.ljɛ̃ sɑ̃.nɔ.kyp il vu.ze.kʁi di.si vɑ̃.dʁə.di/', 'zhü-LYEHⁿ sahⁿ-no-KÜP | eel voo-zay-KREE | dee-see vahⁿ-druh-DEE', ['conclure']),
  sent(1368, 'De notre côté, Kim vous envoie un récapitulatif ce soir.', 'On our side, Kim is sending you a summary this evening.', '/də nɔtʁ ko.te kim vu.zɑ̃.vwa œ̃ ʁe.ka.pi.ty.la.tif sə swaʁ/', 'duh notr koh-TAY | keem voo-zahⁿ-VWA | uhⁿ ray-ka-pee-tü-la-TEEF suh SWAR', ['conclure'], FCVDR),
  sent(1369, 'Nous nous reparlons mardi prochain pour valider la commande.', 'We will speak again next Tuesday to confirm the order.', '/nu nu ʁə.paʁ.lɔ̃ maʁ.di pʁɔ.ʃɛ̃ puʁ va.li.de la kɔ.mɑ̃d/', 'noo noo ruh-par-LOHⁿ | mar-dee pro-SHEHⁿ | poor va-lee-DAY la ko-MAHⁿD', ['conclure'], FCVDR),
  sent(1370, 'Merci à tous pour cette discussion franche et constructive.', 'Thank you all for this frank and constructive discussion.', '/mɛʁ.si a tus puʁ sɛt dis.ky.sjɔ̃ fʁɑ̃ʃ e kɔ̃s.tʁyk.tiv/', 'mehr-SEE a TOOSS | poor seht dees-kü-SYOHⁿ | FRAHⁿSH ay kohⁿs-trük-TEEV', ['conclure']),
  mv(1371, 'récapituler les décisions', 'to sum up the decisions', '/ʁe.ka.pi.ty.le le de.si.zjɔ̃/', 'ray-ka-pee-tü-LAY lay day-see-ZYOHⁿ', ['conclure']),
  mv(1372, 'les prochaines étapes', 'the next steps', '/le pʁɔ.ʃɛn.ze.tap/', 'lay pro-shehnn-zay-TAP', ['conclure'], 'Pas « les action items » : les prochaines étapes, ou la suite.'),
  mv(1373, 's’en charger', 'to take care of it', '/sɑ̃ ʃaʁ.ʒe/', 'sahⁿ shar-ZHAY', ['conclure']),
  mv(1374, 'faire un suivi', 'to follow up (Québec)', '/fɛʁ œ̃ sɥi.vi/', 'fehr uhⁿ swee-VEE', ['conclure', 'quebec', 'variante'], 'Très courant au Québec. En France, on dit plutôt assurer le suivi, ou revenir vers quelqu’un.'),
  mv(1375, 'rester en suspens', 'to remain pending', '/ʁɛs.te ɑ̃ sys.pɑ̃/', 'rehs-TAY ahⁿ süs-PAHⁿ', ['conclure']),
  sent(1376, 'Je fais un suivi avec vous la semaine prochaine.', 'I will follow up with you next week.', '/ʒə fɛ œ̃ sɥi.vi a.vɛk vu la sə.mɛn pʁɔ.ʃɛn/', 'zhuh feh uhⁿ swee-VEE | a-vehk VOO | la SMEHNN pro-SHEHNN', ['conclure', 'quebec']),
  sent(1377, 'Quelles sont les prochaines étapes ?', 'What are the next steps?', '/kɛl sɔ̃ le pʁɔ.ʃɛn.ze.tap/', 'kehl sohⁿ | lay pro-shehnn-zay-TAP', ['conclure']),
  sent(1378, 'Une réunion se termine sur trois choses : ce qui est décidé, qui s’en charge, et pour quand.', 'A meeting ends on three things: what is decided, who takes care of it, and by when.', '/yn ʁe.y.njɔ̃ sə tɛʁ.min syʁ tʁwa ʃoz sə ki ɛ de.si.de ki sɑ̃ ʃaʁʒ e puʁ kɑ̃/', 'ün ray-ü-NYOHⁿ suh tehr-MEEN | sür trwa SHOZ | suh kee eh day-see-DAY | kee sahⁿ SHARZH | ay poor KAHⁿ', ['rule', 'conclure'], ['flashcard'],
    rule('La réunion finit. Qu’est-ce qui manque souvent ?', 'Qui s’en charge, et pour quand. Sans ça, rien ne bouge.')),
  sent(1379, 'Nous en restons là pour aujourd’hui.', 'We will leave it there for today.', '/nu.zɑ̃ ʁɛs.tɔ̃ la puʁ o.ʒuʁ.dɥi/', 'noo-zahⁿ rehs-tohⁿ LA | poor oh-zhoor-DWEE', ['conclure']),
];

/* ── ACT 11 · À TOI DE NÉGOCIER ──────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1380, 'Deux mille euros, c’est vrai, mais un seul contrat rembourserait le stand dix fois.', 'Two thousand euros, true, but a single contract would pay for the stand ten times over.', '/dø mi.lø.ʁo sɛ vʁɛ mɛ œ̃ sœl kɔ̃.tʁa ʁɑ̃.buʁ.sə.ʁɛ lə stɑ̃d di fwa/', 'deu mee-luh-ROH | seh VREH | meh uhⁿ suhl kohⁿ-TRA | rahⁿ-boor-suh-REH luh STAHⁿD | dee FWA', ['modele']),
  sent(1381, 'Si tu viens seulement le jeudi et le vendredi, Olivier n’aura qu’une journée sans toi.', 'If you only come on Thursday and Friday, Olivier will only have one day without you.', '/si ty vjɛ̃ sœl.mɑ̃ lə ʒø.di e lə vɑ̃.dʁə.di ɔ.li.vje no.ʁa kyn ʒuʁ.ne sɑ̃ twa/', 'see tü vyehⁿ suhl-MAHⁿ | luh zhuh-DEE ay luh vahⁿ-druh-DEE | o-lee-VYAY noh-RA | kün zhoor-NAY sahⁿ TWA', ['modele']),
  sent(1382, 'Alors, on s’inscrit avant le premier septembre ?', 'So, shall we sign up before 1 September?', '/a.lɔʁ ɔ̃ sɛ̃s.kʁi a.vɑ̃ lə pʁə.mje sɛp.tɑ̃bʁ/', 'a-LOR | ohⁿ sehⁿss-KREE | a-vahⁿ luh pruh-myay sehp-TAHⁿBR', ['modele']),
  sent(1383, 'Je leur proposerais dix pour cent, à condition qu’ils s’engagent sur deux ans.', 'I would offer them ten per cent, on condition that they commit to two years.', '/ʒə lœʁ pʁɔ.po.zʁɛ dis puʁ sɑ̃ a kɔ̃.di.sjɔ̃ kil sɑ̃.gaʒ syʁ dø.zɑ̃/', 'zhuh luhr pro-poz-REH | DEESS poor SAHⁿ | a kohⁿ-dee-SYOHⁿ keel sahⁿ-GAZH | sür deu-ZAHⁿ', ['modele', 'subjonctif'], FCVDR),
  mv(1384, 'tenir bon', 'to hold firm', '/tə.niʁ bɔ̃/', 'tuh-neer BOHⁿ', ['modele'], 'Ne pas céder sur un point, calmement.'),
  sent(1385, 'Là, je tiendrais bon : soixante jours au maximum.', 'There, I would hold firm: sixty days at most.', '/la ʒə tjɛ̃.dʁɛ bɔ̃ swa.sɑ̃t ʒuʁ o mak.si.mɔm/', 'LA | zhuh tyehⁿ-dreh BOHⁿ | swa-sahⁿt ZHOOR | oh mak-see-MOMM', ['modele'], FCVDR),
  sent(1386, 'On rappelle Mathilde jeudi avec ces trois conditions.', 'We call Mathilde back on Thursday with these three conditions.', '/ɔ̃ ʁa.pɛl ma.tild ʒø.di a.vɛk se tʁwa kɔ̃.di.sjɔ̃/', 'ohⁿ ra-PEHL ma-TEELD zhuh-DEE | a-vehk say trwa kohⁿ-dee-SYOHⁿ', ['modele']),
  sent(1387, 'Tu es d’accord pour que je l’appelle ?', 'Are you happy for me to call her?', '/ty ɛ da.kɔʁ puʁ kə ʒə la.pɛl/', 'tü eh da-KOR | poor kuh zhuh la-PEHL', ['modele', 'subjonctif']),
  sent(1388, 'Mon avis est clair : il faut négocier, pas refuser.', 'My view is clear: we should negotiate, not refuse.', '/mɔ̃.na.vi ɛ klɛʁ il fo ne.gɔ.sje pa ʁə.fy.ze/', 'mohⁿ-na-VEE eh KLEHR | eel foh nay-go-SYAY | pa ruh-fü-ZAY', ['modele']),
  sent(1389, 'À ce prix-là, nous travaillerions presque pour rien.', 'At that price, we would be working for almost nothing.', '/a sə pʁi.la nu tʁa.va.jə.ʁjɔ̃ pʁɛsk puʁ ʁjɛ̃/', 'a suh pree-LA | noo tra-va-yuh-RYOHⁿ | prehsk poor RYEHⁿ', ['modele']),
];

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS
 *
 *  Every reading lives here so the reading, the quiz and the task agree.
 *  B2 length (200 to 350 words), measured by the scratch check. One
 *  apostrophe style, the typographic one.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the agenda and Nadia's note to the team. */
export const ORDRE_TEXT =
  'Tessère · Rencontre avec Coworka · jeudi 12 juin, 9 h 30 à Montréal, 15 h 30 à Lyon, par vidéo. Ordre du jour : 1. Tour de table et objectif de la rencontre. 2. Les besoins de Coworka : six cents panneaux pour douze espaces, à Lyon et à Bruxelles. 3. Le prix et les conditions de paiement. 4. Le calendrier de livraison. 5. Décisions et prochaines étapes. ' +
  'Note de Nadia à l’équipe. Coworka serait notre plus gros client de l’année, mais ce n’est pas une raison pour tout accepter. Mathilde Aubry demandera sans doute une remise de quinze pour cent et un paiement à quatre-vingt-dix jours. Nous ne dirons ni oui ni non tout de suite. Notre marge de manœuvre nous permet d’aller jusqu’à dix pour cent, à condition que Coworka s’engage sur deux ans ; pour le paiement, soixante jours est notre limite. Olivier rappellera que l’atelier ne peut pas livrer six cents panneaux d’un coup : une livraison en deux fois serait possible. Pendant la réunion, écoutons d’abord, et reformulons ce qu’ils demandent avant de répondre. Si la discussion bloque sur un point, passons au suivant : nous y reviendrons. Le but n’est pas de gagner chaque phrase, mais de repartir avec un accord que les deux équipes peuvent défendre. Kim rédigera le compte rendu.';

/** Act 5: the minutes of the internal preparation meeting. */
export const COMPTE_RENDU_TEXT =
  'Compte rendu · Réunion interne, mardi 10 juin. Présents : Nadia Belkacem, Olivier Gauthier, Kim Tran et toi. Objet : notre position avant la rencontre avec Coworka. ' +
  'Nadia a ouvert la réunion en rappelant l’enjeu : un contrat de six cents panneaux, le plus important de l’année. Elle propose d’accepter une remise de dix pour cent. Olivier a exprimé des réserves : « Je comprends ton point de vue ; toutefois, je ne partage pas tout à fait ton analyse. À dix pour cent, nous travaillerions presque sans marge. » Nadia a reconnu que le chiffre était élevé, mais elle a rappelé qu’un contrat de deux ans remplirait l’atelier. Olivier a nuancé : « Je crains surtout que nous ne puissions pas livrer à temps. Ne serait-il pas plus prudent de proposer huit pour cent et une livraison en deux fois ? » Kim a fait remarquer que Coworka tenait moins au prix qu’au calendrier : dans ses courriels, Mathilde parle surtout de la rentrée. ' +
  'Après discussion, l’équipe s’est mise d’accord sur une position commune : dix pour cent au maximum, uniquement en échange d’un engagement de deux ans ; un premier lot de deux cent cinquante panneaux en septembre ; aucun paiement au-delà de soixante jours. Olivier a précisé qu’il resterait réservé tant que les délais de l’atelier ne seraient pas confirmés. Prochaine étape : Nadia prépare les chiffres pour jeudi.';

/** Act 7: a column from a business magazine on conceding. */
export const CEDER_TEXT =
  'Le Cahier des PME · Céder sans perdre. Dans une négociation, la concession a mauvaise réputation : céder, ce serait perdre. Pourtant, les négociateurs expérimentés cèdent souvent, et ils le font exprès. Leur règle tient en une phrase : ne jamais rien donner sans rien obtenir en contrepartie. « Je peux faire un geste sur le prix, à condition que vous vous engagiez sur la durée » : voilà une concession qui rapporte. À l’inverse, baisser son prix parce que le silence devient gênant, c’est offrir à l’autre ce qu’il n’avait même pas demandé. ' +
  'Deuxième règle : céder lentement, et par petites étapes. Une remise de dix pour cent accordée d’un coup laisse croire qu’il en reste d’autres ; trois pour cent, puis deux, puis un, montrent au contraire qu’on approche de la limite. Troisième règle : nommer la concession. Un geste que personne ne remarque ne vaut rien ; dites clairement « nous faisons un effort sur ce point » pour qu’il soit compté. ' +
  'Reste la question que tout le monde se pose : jusqu’où aller ? Les bons négociateurs connaissent leur seuil avant d’entrer dans la salle. Au-delà, ils savent dire, sans agressivité : « Là, nous ne pouvons pas vous suivre. » Paradoxalement, c’est souvent ce refus calme qui fait avancer la discussion : l’autre comprend qu’il a atteint le vrai prix, et il cherche enfin une solution avec vous plutôt que contre vous.';

/** Act 8: Tessère's written offer to Coworka. */
export const OFFRE_TEXT =
  'Proposition commerciale · Tessère pour Coworka. Madame Aubry, Monsieur Peeters, à la suite de notre rencontre du 12 juin, nous avons le plaisir de vous adresser notre proposition. ' +
  '1. Volume et durée : six cents panneaux acoustiques, livrés en deux lots, dans le cadre d’un contrat de deux ans. ' +
  '2. Prix : si vous confirmez la commande avant le 30 juin, nous appliquerons une remise de dix pour cent sur l’ensemble. Dans le cas d’une commande sur un an seulement, la remise serait ramenée à cinq pour cent. ' +
  '3. Livraison : le premier lot, de deux cent cinquante panneaux, sera livré à Lyon la première semaine de septembre, sous réserve de la validation des couleurs avant le 15 juillet. Le second lot suivra en décembre, pour Lyon et Bruxelles. ' +
  '4. Paiement : à soixante jours, à condition que l’acompte de vingt pour cent soit versé à la signature. ' +
  '5. Option : si vous le souhaitiez, nous pourrions former vos équipes à l’installation, moyennant un forfait de huit cents euros par site. ' +
  'Cette offre est valable trente jours ; au-delà, les prix et les délais devront être revus. Nous sommes convaincus qu’elle répond à vos besoins, et nous restons à votre disposition pour en discuter. Bien cordialement, Nadia Belkacem, directrice commerciale.';

/** Act 11: the model monologue the learner studies (TEF section B shape,
 *  a DIFFERENT document from the task's, so the task is not given away). */
export const SALON_DOC =
  'SALON ESPACES DE TRAVAIL · Bruxelles, du 14 au 16 octobre. Stand de neuf mètres carrés : deux mille euros. Deux mille visiteurs professionnels attendus. Inscription avant le 1er septembre.';
export const SALON_TEXT =
  'Document : ' + SALON_DOC + ' ' +
  'Kim, je voudrais te convaincre de venir avec moi au salon Espaces de travail, à Bruxelles, du quatorze au seize octobre. Le stand fait neuf mètres carrés et coûte deux mille euros, et les organisateurs attendent deux mille visiteurs professionnels. Mon avis est simple : c’est l’occasion de l’année. Je sais ce que tu vas me dire d’abord : deux mille euros, c’est cher pour trois jours. Deux mille euros, c’est vrai, mais un seul contrat rembourserait le stand dix fois. Ensuite, tu vas me dire que tu n’as jamais tenu un stand. Justement, je serai là les trois jours, et tu commenceras par les rendez-vous que j’aurai déjà pris. Et ce qui te retient vraiment, je crois, c’est l’atelier : tu as peur qu’Olivier se retrouve seul en pleine production. Là, j’ai une proposition. Si tu viens seulement le jeudi et le vendredi, Olivier n’aura qu’une journée sans toi. Imagine un peu : deux mille professionnels qui cherchent ce que nous fabriquons, dans la même salle, pendant trois jours. Tu n’as rien à perdre à essayer. Alors, on s’inscrit avant le premier septembre ?';

/** The task's document: Coworka's written request, printed in the brief
 *  because `task` has no source field (shapes doc §1.4). */
export const TASK_DOC =
  'DEMANDE DE COWORKA · six cents panneaux acoustiques pour douze espaces, à Lyon et à Bruxelles, sur deux ans. Remise demandée : quinze pour cent. Paiement à quatre-vingt-dix jours. Premier lot de deux cent cinquante panneaux pour la rentrée, le reste en décembre. En échange, Coworka présentera Tessère comme fournisseur officiel dans ses douze espaces.';

/** The annotated model answer to the task, about three minutes spoken. */
export const TASK_MODEL =
  'Olivier, j’ai relu la demande de Coworka, et je voudrais qu’on en parle avant de leur répondre. Ils veulent six cents panneaux pour leurs douze espaces, à Lyon et à Bruxelles, sur deux ans. Ils demandent quinze pour cent de remise, un paiement à quatre-vingt-dix jours et un premier lot de deux cent cinquante panneaux pour la rentrée. En échange, ils nous présenteraient comme leur fournisseur officiel.\n' +
  'Mon avis est clair : il faut négocier, pas refuser. Je sais ce que tu vas me dire d’abord : l’atelier est déjà plein. Justement, un contrat de deux ans nous permettrait d’embaucher, et on saurait enfin ce qu’on produit l’an prochain.\n' +
  'Ensuite, tu vas me parler de la marge. Tu as raison, quinze pour cent, c’est trop : à ce prix-là, nous travaillerions presque pour rien. C’est pour ça que je ne dirais pas oui à tout. Je leur proposerais dix pour cent, à condition qu’ils s’engagent sur deux ans, et cinq pour cent seulement si la commande ne porte que sur un an.\n' +
  'Et ce qui t’inquiète le plus, je crois, c’est le paiement. Quatre-vingt-dix jours, pour une PME comme nous, c’est impossible. Là, je tiendrais bon : soixante jours au maximum, avec un acompte de vingt pour cent à la signature. Pour le calendrier, si nous livrons en deux fois, comme tu l’avais proposé, l’atelier devrait tenir les délais.\n' +
  'Imagine un peu : notre nom présenté comme celui du fournisseur officiel dans douze espaces, à Lyon et à Bruxelles. Nous n’aurions jamais les moyens de nous payer une vitrine pareille.\n' +
  'Alors voilà ce que je te propose : on rappelle Mathilde jeudi avec ces trois conditions, et si elle refuse l’acompte, on en reste là. Tu es d’accord pour que je l’appelle ?';
