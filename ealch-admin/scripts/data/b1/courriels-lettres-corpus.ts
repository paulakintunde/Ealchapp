// b1.39.l1 « Courriels et lettres »: the authored corpus, the imports and the
// citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md with the WORKSHOP SHAPE
// of B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (and §1.4) on top.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a B2 writing lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE B1 CAPSTONE, AND THE REMEDIATION TARGET FOR B1 WRITING (PE, as in TEF,
//   TCF and DELF B1). It owns the written message as a whole:
//
//     l'anatomie          objet, formule d'appel, corps, formule de
//                         politesse, signature, pièce jointe
//                         the formulas by register, France and Québec marked
//     les formules
//     l'ouverture         Je vous écris pour / afin de, Suite à notre
//                         conversation, En réponse à votre courriel du,
//                         Comme convenu
//     les types d'examen  invitation and reply, request for information,
//                         complaint (réclamation), news and an event told,
//                         apology
//     le paragraphe       a connector at the head of each step
//     la relecture        the proofreading checklist
//
//   NOT OWNED, CITED BY TRAIL POSITION (never re-taught):
//     lesson 3  in B1  passé composé and imparfait to tell the facts
//     lesson 5  in B1  the future in a reply (« je serai »)
//     lesson 9  in B1  the polite conditional (reframe quoted)
//     lessons 14 to 16 the subjunctive after a feeling, and de + infinitive
//                      with one subject (two reframes quoted)
//     lesson 19 in B1  indirect questions (« je voudrais savoir si »)
//     lesson 25 in B1  register (reframe quoted)
//     lesson 26 in B1  tu or vous (reframe quoted)
//     lessons 30 to 32 connectors (two reframes quoted)
//     lesson 37 in B1  reading strategy: the objet works like a headline
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `correspondance` (« Les courriels et les lettres », b1-b2) is NEW,
//     Postgres only. Sub-themes: « le courriel amical », « le courriel et la
//     lettre formels », « répondre, réclamer, demander ». Probed live
//     2026-09-27: ZERO content_items with theme `correspondance` and ZERO ids
//     `fr.b1.correspondance.*`. It is not in seed.json's theme list, so a
//     readiness run WILL warn about it: expected, not a defect.
//
//  2. ID BLOCK: `.1000`-`.1199`, claimed by the orchestrator's brief.
//     Authored: `.1000`-`.1183`, 161 rows in twelve act blocks with gaps;
//     nothing outside the block. The ledger line in
//     B1-BUILD-LOG.md is the orchestrator's to write (authors do not edit it).
//
//  3. REUSED ROWS. B1 is live (v75), so the seed carries every B1 lesson's
//     rows and `src()` resolves them. The formulas of lessons 21, 25 and 26
//     authored are reused by id, NOT twinned: « Madame, Monsieur, », « Je vous
//     prie d'agréer, Madame, Monsieur, mes salutations distinguées. », « Je
//     vous remercie par avance de votre réponse. », « Je reste à votre
//     disposition pour tout renseignement. », « Bises », « Au plaisir »,
//     « Bien cordialement », « Bonne journée, ». Seed read 2026-09-27.
//
//  4. RESPELLINGS SPELLED FOR THE NASAL CHECKER. `hasPlainNasal` flags any
//     AH / OH / EH / UH / EU / AI / OU closed by a plain n or m. « semaine »
//     is suh-MENN, « personne » pehr-SONN, « téléphone » tay-lay-FONN,
//     « fonctionnent » fohⁿk-syonn, « j'aimerais » zhemm-reh: the doubled
//     consonant is for the checker, not the ear. No U+203F tie anywhere.
//
//  5. APOSTROPHES. Corpus rows and texts use the straight ' as the seed does.
//     Every `scenario` in the lesson is written with ’ only and never embeds a
//     corpus row, so no scenario mixes the two (scenario.logic).
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
  id: 'b1.39',
  seq: 39,
  title: 'Emails and Letters',
  sub: 'Courriels et lettres',
  canDo: 'Can write a clear personal or formal email or letter of 120 to 150 words that states why it is written and what it asks, in a register kept from the first line to the last, organised with connectors, for the four B1 exam text types: an invitation or a reply, a request for information, a complaint, news or an event told, and an apology',
  prereqUnitIds: ['b1.09', 'b1.15', 'b1.16', 'b1.19', 'b1.25', 'b1.26', 'b1.30', 'b1.31', 'b1.32'],
} as const;

export const LESSON_ID = 'b1.39.l1';
export const THEME = 'correspondance';
export const LEVEL = 'b1' as const;

/** ONE block. The theme is new and empty (§A.1). */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 * ══════════════════════════════════════════════════════════════════════════ */

export const PC_IMP_UNIT = 'b1.03';
export const FUTUR_UNIT = 'b1.05';
export const POLITESSE_UNIT = 'b1.09';
export const SUBJ_DECL_UNIT = 'b1.15';
export const SUBJ_INF_UNIT = 'b1.16';
export const DISCOURS_UNIT = 'b1.19';
export const REGISTRES_UNIT = 'b1.25';
export const TUVOUS_UNIT = 'b1.26';
export const COORD_UNIT = 'b1.30';
export const SUBORD_UNIT = 'b1.31';
export const CONCESSION_UNIT = 'b1.32';
export const LECTURE_UNIT = 'b1.37';

/** TODO(import): drop once the b1 units are rows the seed labels in French. */
const B1_SEQ_FROM_PLAN: Record<string, number> = Object.fromEntries(
  Array.from({ length: 39 }, (_, i) => [`b1.${String(i + 1).padStart(2, '0')}`, i + 1]),
);
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const PC_IMP_REF = refFr(PC_IMP_UNIT);
export const FUTUR_REF = refFr(FUTUR_UNIT);
export const POLITESSE_REF = refFr(POLITESSE_UNIT);
export const SUBJ_DECL_REF = refFr(SUBJ_DECL_UNIT);
export const SUBJ_INF_REF = refFr(SUBJ_INF_UNIT);
export const DISCOURS_REF = refFr(DISCOURS_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const TUVOUS_REF = refFr(TUVOUS_UNIT);
export const COORD_REF = refFr(COORD_UNIT);
export const SUBORD_REF = refFr(SUBORD_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const LECTURE_REF = refFr(LECTURE_UNIT);
export const SUBJ_RANGE_REF = 'les leçons 14 à 16 du B1';
export const CONNECTEURS_RANGE_REF = 'les leçons 30 à 32 du B1';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B109_REFRAME, REFRAME_EN as B109_REFRAME_EN } from './politesse-corpus.ts';
export { REFRAME as B116_REFRAME, REFRAME_EN as B116_REFRAME_EN } from './subjonctif-infinitif-corpus.ts';
export { REFRAME as B125_REFRAME, REFRAME_EN as B125_REFRAME_EN } from './registres-corpus.ts';
export { REFRAME as B126_REFRAME, REFRAME_EN as B126_REFRAME_EN } from './tu-ou-vous-corpus.ts';
export { REFRAME as B130_REFRAME, REFRAME_EN as B130_REFRAME_EN } from './coordination-corpus.ts';
export { REFRAME as B132_REFRAME, REFRAME_EN as B132_REFRAME_EN } from './concession-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE ENVELOPE THAT GETS AN ANSWER. A message is written to be answered:
 *  the reader must find in ten seconds why you write and what you want, and
 *  the last line must close the door the first one opened. It is the whole
 *  B1 exam writing rubric in one line: the task done (the request), the
 *  organisation (why first), the register held (close as you opened).
 *
 *  It is NOT « formal is better »: the friend's invitation reply in act 5
 *  and the news in act 8 are warm, and they still say why and what.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Dis pourquoi tu écris, dis ce que tu demandes, et ferme comme tu as ouvert.';
export const REFRAME_EN = 'Say why you are writing, say what you are asking for, and close the way you opened.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Un courriel formel, ce sont des formules.',
    why: "False where act 1 has to hold: the learner's second draft has perfect formulas and still no request, so the company writes back asking what they want. Formulas frame the message; they are not the message.",
  },
  {
    text: "Pour l'examen, écris toujours en soutenu.",
    why: "False for half the exam: the invitation reply and the news to a friend (acts 5 and 8) are graded on register FIT, and a soutenu note to a friend loses the register point. It also contradicts lesson 25's reframe.",
  },
  {
    text: 'Plus c’est long, plus c’est poli.',
    why: "False and costly: a buried request is the commonest B1 fail (act 4), and the exam counts words within a range. Politeness is lesson 9's axis: the favour and the person, not the length.",
  },
  {
    text: 'Commence par te présenter.',
    why: "Right only when the reader needs it. Opening with « Je m'appelle… » pushes the reason to line three; act 4 moves the reason to the first sentence.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-27, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

export const LS = (n: number) => `fr.b1.langue-soignee.${n}`;

export const IMPORTED = {
  act1: [
    LS(1388),                               // l'objet
  ],
  act2: [
    'fr.a2.internet.030',                   // la pièce jointe
    LS(1178),                               // Madame, Monsieur,
  ],
  act3: [
    LS(1321),                               // Bises
    'fr.b1.rp-etiquette.1132',              // Bonne journée,
    'fr.a1.salutations.118',                // Cordialement  (flashcard, review: not speakable)
    'fr.a1.salutations.119',                // Bien à vous  (no flashcard: named only)
    LS(1327),                               // Bien cordialement
    LS(1185),                               // Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.
    LS(1343),                               // Cher Samir, je vous informe que je ne pourrai pas venir samedi.  (review only: named)
    'fr.a2.internet.002',                   // un courriel
  ],
  act4: [
    LS(1286),                               // Je vous informe de mon changement d'adresse.
  ],
  act5: [
    LS(1326),                               // Au plaisir
    'fr.b1.opinions-et-avis.1274',          // Je suis ravi que vous veniez dîner samedi.
  ],
  act6: [
    'fr.b1.projets-et-futur.709',           // Je vous serais reconnaissant de me répondre vite.
    LS(1184),                               // Je vous remercie par avance de votre réponse.
  ],
  act7: [
    'fr.b1.negation-et-restriction.1189',   // Nous n'avons obtenu aucun remboursement.
    'fr.b1.conseils-et-suggestions.1187',   // Je vous prie de bien vouloir examiner ma demande.
  ],
  act8: [] as string[],
  act9: [
    'fr.b1.opinions-et-avis.1268',          // Je suis désolé que tu doives attendre si longtemps.
  ],
  act10: [
    'fr.b1.connecteurs-logiques.101',       // cependant
    'fr.b1.connecteurs-logiques.1311',      // c'est pourquoi
    'fr.b1.connecteurs-logiques.1375',      // Par conséquent, nous avons remboursé une partie des billets.
  ],
  act11: [] as string[],
  act12: [
    LS(1290),                               // Je reste à votre disposition pour tout renseignement.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a1.salutations.119',                  // voiceflash, review
  LS(1343),                                 // review only (the deliberate mismatch of lesson 25)
];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  LS(1343),                                 // review only
  'fr.a1.salutations.118',                  // flashcard, review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
/** Counter-examples: recognised, never produced, never spoken. */
const RECO = ['review'] as Item['drills'];

const F: Register = 'familier';
const C: Register = 'courant';
const S: Register = 'soutenu';

const sent = (
  n: number, register: Register, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register, grammarPoints: ['correspondance'], ...extra,
});

const phrase = (
  n: number, register: Register, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE COURRIEL QUI NE DEMANDE RIEN ──────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, F, 'Salut, le canapé est arrivé cassé. Merci.', 'Hi, the sofa arrived broken. Thanks.', '/sa.ly lə ka.na.pe ɛ.ta.ʁi.ve ka.se mɛʁ.si/', 'sa-LÜ | luh ka-na-PAY eh-ta-ree-vay ka-SAY | mehr-SEE', ['scene', 'contre-exemple'], RECO),
  sent(1001, C, 'Mon canapé est arrivé abîmé. Pourriez-vous le remplacer ?', 'My sofa arrived damaged. Could you replace it?', '/mɔ̃ ka.na.pe ɛ.ta.ʁi.ve a.bi.me pu.ʁje.vu lə ʁɑ̃.pla.se/', 'mohⁿ ka-na-PAY eh-ta-ree-vay a-bee-MAY | poo-ryay-voo luh rahⁿ-pla-SAY', ['scene', 'demande'], FCVDR),
  sent(1002, C, 'Je suis très déçu. Le canapé est arrivé abîmé.', 'I am very disappointed. The sofa arrived damaged.', '/ʒə sɥi tʁɛ de.sy lə ka.na.pe ɛ.ta.ʁi.ve a.bi.me/', 'zhuh swee treh day-SÜ | luh ka-na-PAY eh-ta-ree-vay a-bee-MAY', ['scene', 'sans-demande']),
  sent(1003, C, 'Pourriez-vous préciser votre demande ?', 'Could you say exactly what you are asking for?', '/pu.ʁje.vu pʁe.si.ze vɔtʁ də.mɑ̃d/', 'poo-ryay-voo pray-see-ZAY | votr duh-MAHⁿD', ['scene', 'reponse']),
  sent(1004, C, 'Objet : canapé livré abîmé', 'Subject: sofa delivered damaged', '/ɔb.ʒɛ ka.na.pe li.vʁe a.bi.me/', 'ob-ZHEH | ka-na-pay lee-vray a-bee-MAY', ['objet']),
  sent(1005, C, 'Je vous écris au sujet de ma commande.', 'I am writing to you about my order.', '/ʒə vu.ze.kʁi o sy.ʒɛ də ma kɔ.mɑ̃d/', 'zhuh voo-zay-KREE | oh sü-zheh duh ma ko-MAHⁿD', ['ouverture'], FCVDR),
  phrase(1006, C, 'le service à la clientèle', 'customer service', '/lə sɛʁ.vis a la kli.jɑ̃.tɛl/', 'luh sehr-vees a la klee-yahⁿ-TEHL', ['mot']),
  phrase(1007, C, 'une demande', 'a request', '/yn də.mɑ̃d/', 'ün duh-MAHⁿD', ['mot', 'demande']),
  sent(1008, C, REFRAME, REFRAME_EN, '/di puʁ.kwa ty e.kʁi di sə kə ty də.mɑ̃d e fɛʁm kɔm ty a.zu.vɛʁ/', 'dee poor-kwa tü ay-KREE | dee suh kuh tü duh-MAHⁿD | ay fehrm komm tü a-zoo-VEHR', ['rule', 'reframe'], ['flashcard'],
    rule('Trois choses que ton lecteur doit trouver dans ton courriel ?', 'Pourquoi tu écris, ce que tu demandes, et une fin qui répond au début.')),
  sent(1009, C, 'Je vous remercie de votre réponse rapide.', 'Thank you for your quick reply.', '/ʒə vu ʁə.mɛʁ.si də vɔtʁ ʁe.pɔ̃s ʁa.pid/', 'zhuh voo ruh-mehr-SEE | duh votr ray-pohⁿs ra-PEED', ['fermer']),
  sent(1010, C, 'Pourriez-vous me rembourser ?', 'Could you refund me?', '/pu.ʁje.vu mə ʁɑ̃.buʁ.se/', 'poo-ryay-voo muh rahⁿ-boor-SAY', ['demande']),
  sent(1011, C, 'Pourriez-vous le réparer ?', 'Could you repair it?', '/pu.ʁje.vu lə ʁe.pa.ʁe/', 'poo-ryay-voo luh ray-pa-RAY', ['demande']),
];

/* ── ACT 2 · L'ANATOMIE D'UN COURRIEL ────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  phrase(1016, C, 'Madame Tremblay,', 'Dear Ms Tremblay,', '/ma.dam tʁɑ̃.blɛ/', 'ma-dam trahⁿ-BLEH', ['appel']),
  sent(1017, C, 'Le canapé est arrivé avec un pied cassé.', 'The sofa arrived with a broken leg.', '/lə ka.na.pe ɛ.ta.ʁi.ve a.vɛ.kœ̃ pje ka.se/', 'luh ka-na-PAY eh-ta-ree-VAY | a-veh-kuhⁿ pyay ka-SAY', ['corps'], FCVDR),
  sent(1018, C, 'Je vous envoie deux photos en pièce jointe.', 'I am sending you two photos as attachments.', '/ʒə vu.zɑ̃.vwa dø fo.to ɑ̃ pjɛs ʒwɛ̃t/', 'zhuh voo-zahⁿ-VWA | deu fo-TOH ahⁿ pyehs ZHWEHⁿT', ['corps', 'piece-jointe'], FCVDR),
  sent(1019, C, 'Pourriez-vous me proposer un remplacement ?', 'Could you offer me a replacement?', '/pu.ʁje.vu mə pʁɔ.po.ze œ̃ ʁɑ̃.plas.mɑ̃/', 'poo-ryay-voo muh pro-po-ZAY | uhⁿ rahⁿ-plass-MAHⁿ', ['corps', 'demande'], FCVDR),
  sent(1020, C, 'Je vous remercie de votre aide.', 'Thank you for your help.', '/ʒə vu ʁə.mɛʁ.si də vɔ.tʁɛd/', 'zhuh voo ruh-mehr-SEE | duh vo-TREHD', ['fermer']),
  phrase(1021, C, "la formule d'appel", 'the greeting (Dear…)', '/la fɔʁ.myl da.pɛl/', "la for-mül da-PEHL", ['partie']),
  phrase(1022, C, 'le corps du message', 'the body of the message', '/lə kɔʁ dy me.saʒ/', 'luh kor dü may-SAZH', ['partie']),
  phrase(1023, C, 'la formule de politesse', 'the closing formula', '/la fɔʁ.myl də pɔ.li.tɛs/', 'la for-mül duh po-lee-TEHS', ['partie']),
  phrase(1024, C, 'la signature', 'the signature', '/la si.ɲa.tyʁ/', 'la see-nya-TÜR', ['partie']),
  sent(1025, C, "L'objet annonce, le corps explique, la fin demande et remercie.", 'The subject line announces, the body explains, the ending asks and thanks.', '/lɔb.ʒɛ a.nɔ̃s lə kɔʁ ɛk.splik la fɛ̃ də.mɑ̃d e ʁə.mɛʁ.si/', 'lob-zheh a-NOHⁿS | luh kor ehk-SPLEEK | la fehⁿ duh-mahⁿd ay ruh-mehr-SEE', ['rule', 'partie'], ['flashcard'],
    rule('Les cinq parties d’un courriel ?', "L'objet, la formule d'appel, le corps, la formule de politesse, la signature.")),
  sent(1026, C, 'Objet : demande de remboursement', 'Subject: refund request', '/ɔb.ʒɛ də.mɑ̃d də ʁɑ̃.buʁs.mɑ̃/', 'ob-ZHEH | duh-mahⁿd duh rahⁿ-boors-MAHⁿ', ['objet']),
  sent(1027, C, "Objet : question sur l'inscription au camp de jour", 'Subject: question about registering for day camp', '/ɔb.ʒɛ kɛs.tjɔ̃ syʁ lɛ̃s.kʁip.sjɔ̃ o kɑ̃ də ʒuʁ/', 'ob-ZHEH | kehs-tyohⁿ sür lehⁿs-kreep-SYOHⁿ | oh kahⁿ duh ZHOOR', ['objet', 'quebec']),
  sent(1028, C, 'Objet : invitation au pot de départ de Michel', "Subject: invitation to Michel's farewell drinks", '/ɔb.ʒɛ ɛ̃.vi.ta.sjɔ̃ o po də de.paʁ də mi.ʃɛl/', 'ob-ZHEH | ehⁿ-vee-ta-SYOHⁿ | oh poh duh day-PAR duh mee-SHEHL', ['objet']),
  sent(1029, F, 'Objet : coucou', 'Subject: hi there', '/ɔb.ʒɛ ku.ku/', 'ob-ZHEH | koo-KOO', ['objet', 'contre-exemple'], RECO),
  sent(1030, C, 'Objet : absence à la réunion de lundi', "Subject: absence from Monday's meeting", '/ɔb.ʒɛ ap.sɑ̃s a la ʁe.y.njɔ̃ də lœ̃.di/', 'ob-ZHEH | ap-SAHⁿS | a la ray-ü-nyohⁿ duh luhⁿ-DEE', ['objet']),
];

/* ── ACT 3 · TROIS TENUES, TROIS FORMULES ────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  phrase(1032, F, 'Salut Léa,', 'Hi Léa,', '/sa.ly le.a/', 'sa-lü lay-A', ['appel', 'familier']),
  phrase(1033, C, 'Bonjour Madame Gagnon,', 'Hello Ms Gagnon,', '/bɔ̃.ʒuʁ ma.dam ɡa.ɲɔ̃/', 'bohⁿ-zhoor ma-dam ga-NYOHⁿ', ['appel', 'courant']),
  sent(1034, S, 'Je vous prie de bien vouloir mettre à jour mon dossier.', 'I would ask you kindly to update my file.', '/ʒə vu pʁi də bjɛ̃ vu.lwaʁ mɛtʁ a ʒuʁ mɔ̃ do.sje/', 'zhuh voo pree duh byehⁿ voo-LWAR | mehtr a zhoor mohⁿ do-SYAY', ['soutenu', 'demande']),
  sent(1035, C, 'Je vous informe que je déménage le premier juillet.', 'I am letting you know that I am moving on the first of July.', '/ʒə vu.zɛ̃.fɔʁm kə ʒə de.me.naʒ lə pʁə.mje ʒɥi.jɛ/', 'zhuh voo-zehⁿ-FORM | kuh zhuh day-may-nazh luh pruh-myay zhwee-YEH', ['courant'], FCVDR),
  sent(1036, S, 'Veuillez agréer, Madame, Monsieur, mes salutations distinguées.', 'Yours faithfully (France, formal letter).', '/vœ.je.za.ɡʁe.e ma.dam mə.sjø me sa.ly.ta.sjɔ̃ dis.tɛ̃.ɡe/', 'vuh-yay-za-gray-AY | ma-DAM muh-SYEU | may sa-lü-ta-syohⁿ dees-tehⁿ-GAY', ['fermer', 'soutenu', 'france']),
  phrase(1037, C, 'Salutations distinguées,', 'Yours sincerely (short form, Québec)', '/sa.ly.ta.sjɔ̃ dis.tɛ̃.ɡe/', 'sa-lü-ta-syohⁿ dees-tehⁿ-GAY', ['fermer', 'quebec']),
  phrase(1038, F, 'À bientôt,', 'See you soon,', '/a bjɛ̃.to/', 'a byehⁿ-TOH', ['fermer', 'familier']),
  phrase(1039, C, 'Bonjour Monsieur Diallo,', 'Hello Mr Diallo,', '/bɔ̃.ʒuʁ mə.sjø dja.lo/', 'bohⁿ-zhoor muh-syeu dya-LOH', ['appel', 'courant']),
  phrase(1040, C, 'Merci et bonne journée,', 'Thanks, and have a good day,', '/mɛʁ.si e bɔn ʒuʁ.ne/', 'mehr-SEE | ay bonn zhoor-NAY', ['fermer', 'quebec']),
  phrase(1041, C, 'Madame,', 'Madam, (a woman you do not know)', '/ma.dam/', 'ma-DAM', ['appel', 'soutenu']),
  sent(1042, C, "La formule de fin répond à la formule d'appel.", 'The closing answers the greeting.', '/la fɔʁ.myl də fɛ̃ ʁe.pɔ̃ a la fɔʁ.myl da.pɛl/', 'la for-mül duh FEHⁿ | ray-pohⁿ a la for-mül da-PEHL', ['rule', 'formule'], ['flashcard'],
    rule('Tu as écrit « Madame, Monsieur, ». Tu fermes avec Bises ?', 'Non : Cordialement, ou une formule soutenue. La fin répond au début.')),
  phrase(1043, C, 'un mail', 'an email (France)', '/œ̃ mɛl/', 'uhⁿ MEHL', ['mot', 'france']),
  phrase(1044, F, "Je t'embrasse,", 'Love, (to someone close)', '/ʒə tɑ̃.bʁas/', 'zhuh tahⁿ-BRASS', ['fermer', 'familier']),
  sent(1045, F, 'Salut Madame Gagnon,', 'Hi Ms Gagnon, (a mixed greeting)', '/sa.ly ma.dam ɡa.ɲɔ̃/', 'sa-lü ma-dam ga-NYOHⁿ', ['appel', 'contre-exemple'], RECO),
  phrase(1046, C, 'Bonjour à toutes et à tous,', 'Hello everyone,', '/bɔ̃.ʒuʁ a tut e a tus/', 'bohⁿ-ZHOOR | a toot ay a TOOS', ['appel', 'courant']),
];

/* ── ACT 4 · LA PREMIÈRE PHRASE ──────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1050, C, 'Je vous écris pour vous demander un renseignement.', 'I am writing to ask you for some information.', '/ʒə vu.ze.kʁi puʁ vu də.mɑ̃.de œ̃ ʁɑ̃.sɛɲ.mɑ̃/', 'zhuh voo-zay-KREE | poor voo duh-mahⁿ-DAY | uhⁿ rahⁿ-sehny-MAHⁿ', ['ouverture', 'but'], FCVDR),
  sent(1051, C, "Suite à notre conversation d'hier, je vous envoie le document.", "Following our conversation yesterday, I am sending you the document.", '/sɥit a nɔtʁ kɔ̃.vɛʁ.sa.sjɔ̃ djɛʁ ʒə vu.zɑ̃.vwa lə dɔ.ky.mɑ̃/', 'sweet a notr kohⁿ-vehr-sa-syohⁿ DYEHR | zhuh voo-zahⁿ-vwa luh do-kü-MAHⁿ', ['ouverture', 'suite'], FCVDR),
  sent(1052, C, 'En réponse à votre courriel du trois mars, je confirme ma présence.', 'In reply to your email of the third of March, I confirm I will attend.', '/ɑ̃ ʁe.pɔ̃s a vɔtʁ ku.ʁjɛl dy tʁwa maʁs ʒə kɔ̃.fiʁm ma pʁe.zɑ̃s/', 'ahⁿ ray-pohⁿs a votr koo-ryehl dü trwa MARS | zhuh kohⁿ-feerm ma pray-ZAHⁿS', ['ouverture', 'reponse']),
  sent(1053, S, "Je me permets de vous écrire au sujet de mon inscription.", 'I am taking the liberty of writing to you about my registration.', '/ʒə mə pɛʁ.mɛ də vu.ze.kʁiʁ o sy.ʒɛ də mɔ̃.nɛ̃s.kʁip.sjɔ̃/', 'zhuh muh pehr-MEH | duh voo-zay-KREER | oh sü-zheh duh moh-nehⁿs-kreep-SYOHⁿ', ['ouverture', 'soutenu']),
  sent(1054, C, 'Je vous remercie pour votre message.', 'Thank you for your message.', '/ʒə vu ʁə.mɛʁ.si puʁ vɔtʁ me.saʒ/', 'zhuh voo ruh-mehr-SEE | poor votr may-SAZH', ['ouverture', 'reponse']),
  sent(1055, C, 'Comme convenu au téléphone, je vous envoie mon CV.', 'As agreed on the phone, I am sending you my CV.', '/kɔm kɔ̃v.ny o te.le.fɔn ʒə vu.zɑ̃.vwa mɔ̃ se.ve/', 'komm kohⁿv-nü oh tay-lay-FONN | zhuh voo-zahⁿ-vwa mohⁿ say-VAY', ['ouverture', 'suite']),
  sent(1056, F, "Je t'écris pour te dire que j'ai eu le poste.", 'I am writing to tell you I got the job.', '/ʒə te.kʁi puʁ tə diʁ kə ʒe y lə pɔst/', 'zhuh tay-KREE | poor tuh DEER | kuh zhay ü luh POST', ['ouverture', 'familier']),
  sent(1057, C, "J'ai bien reçu votre courriel.", 'I have received your email.', '/ʒe bjɛ̃ ʁə.sy vɔtʁ ku.ʁjɛl/', 'zhay byehⁿ ruh-SÜ | votr koo-RYEHL', ['ouverture', 'reponse'], FCVDR),
  sent(1058, F, "J'espère que tu vas bien.", 'I hope you are well.', '/ʒɛs.pɛʁ kə ty va bjɛ̃/', 'zhehs-pehr kuh tü va BYEHⁿ', ['ouverture', 'familier']),
  sent(1059, C, "J'espère que vous allez bien.", 'I hope you are well.', '/ʒɛs.pɛʁ kə vu.za.le bjɛ̃/', 'zhehs-pehr kuh voo-za-lay BYEHⁿ', ['ouverture', 'courant']),
  sent(1060, C, 'Je vous écris afin de réserver une salle.', 'I am writing in order to book a room.', '/ʒə vu.ze.kʁi a.fɛ̃ də ʁe.zɛʁ.ve yn sal/', 'zhuh voo-zay-KREE | a-fehⁿ duh ray-zehr-vay ün SAL', ['ouverture', 'but']),
  sent(1061, C, 'La première phrase dit pourquoi tu écris.', 'The first sentence says why you are writing.', '/la pʁə.mjɛʁ fʁaz di puʁ.kwa ty e.kʁi/', 'la pruh-myehr FRAZ | dee poor-kwa tü ay-KREE', ['rule', 'ouverture'], ['flashcard'],
    rule('Où ton lecteur doit-il trouver la raison de ton courriel ?', "Dans la première phrase, juste après la formule d'appel.")),
  sent(1062, C, "Je m'appelle Alex et j'habite à Québec depuis deux ans.", 'My name is Alex and I have lived in Québec City for two years.', '/ʒə ma.pɛl a.lɛks e ʒa.bit a ke.bɛk də.pɥi dø.zɑ̃/', 'zhuh ma-pehl a-LEHKS | ay zha-beet a kay-BEHK | duh-pwee deu-ZAHⁿ', ['ouverture', 'contre-exemple'], RECO),
];

/* ── ACT 5 · INVITER ET RÉPONDRE ─────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1064, C, 'Nous organisons un pot de départ vendredi.', 'We are organising farewell drinks on Friday.', '/nu.zɔʁ.ɡa.ni.zɔ̃ œ̃ po də de.paʁ vɑ̃.dʁə.di/', 'noo-zor-ga-nee-ZOHⁿ | uhⁿ poh duh day-PAR | vahⁿ-druh-DEE', ['inviter']),
  sent(1065, C, 'Pourriez-vous confirmer votre présence avant le sept juin ?', 'Could you confirm whether you will come before the seventh of June?', '/pu.ʁje.vu kɔ̃.fiʁ.me vɔtʁ pʁe.zɑ̃s a.vɑ̃ lə sɛt ʒɥɛ̃/', 'poo-ryay-voo kohⁿ-feer-MAY votr pray-ZAHⁿS | a-vahⁿ luh seht ZHWEHⁿ', ['inviter', 'demande']),
  sent(1066, C, "Merci pour l'invitation.", 'Thank you for the invitation.', '/mɛʁ.si puʁ lɛ̃.vi.ta.sjɔ̃/', 'mehr-SEE | poor lehⁿ-vee-ta-SYOHⁿ', ['repondre'], FCVDR),
  sent(1067, C, 'Je serai ravie de venir.', 'I will be delighted to come.', '/ʒə sə.ʁe ʁa.vi də və.niʁ/', 'zhuh suh-ray ra-VEE | duh vuh-NEER', ['accepter', 'futur']),
  sent(1068, C, 'Je suis contente que vous organisiez cette fête.', 'I am glad you are organising this party.', '/ʒə sɥi kɔ̃.tɑ̃t kə vu.zɔʁ.ɡa.ni.zje sɛt fɛt/', 'zhuh swee kohⁿ-TAHⁿT | kuh voo-zor-ga-nee-ZYAY seht FEHT', ['accepter', 'subjonctif']),
  sent(1069, C, 'Malheureusement, je serai en formation ce jour-là.', 'Unfortunately, I will be on a training course that day.', '/ma.lœ.ʁøz.mɑ̃ ʒə sə.ʁe ɑ̃ fɔʁ.ma.sjɔ̃ sə ʒuʁ.la/', 'ma-luh-reuz-MAHⁿ | zhuh suh-ray ahⁿ for-ma-SYOHⁿ | suh zhoor-LA', ['refuser', 'futur'], FCVDR),
  sent(1070, C, 'Je suis désolé de ne pas pouvoir venir.', 'I am sorry I cannot come.', '/ʒə sɥi de.zɔ.le də nə pa pu.vwaʁ və.niʁ/', 'zhuh swee day-zo-LAY | duh nuh pa poo-vwar vuh-NEER', ['refuser', 'infinitif'], FCVDR),
  sent(1071, C, 'Pourriez-vous transmettre mes vœux à Michel ?', 'Could you pass my best wishes on to Michel?', '/pu.ʁje.vu tʁɑ̃s.mɛtʁ me vø a mi.ʃɛl/', 'poo-ryay-voo trahⁿs-MEHTR | may VEU a mee-SHEHL', ['refuser', 'demande']),
  sent(1072, C, 'Au plaisir de vous y voir.', 'Hoping to see you there.', '/o plɛ.ziʁ də vu.zi vwaʁ/', 'oh pleh-zeer duh voo-zee VWAR', ['inviter', 'fermer', 'quebec']),
  sent(1073, F, "Avec plaisir, j'y serai.", 'With pleasure, I will be there.', '/a.vɛk plɛ.ziʁ ʒi sə.ʁe/', 'a-vehk pleh-ZEER | zhee suh-RAY', ['accepter', 'familier']),
  sent(1074, F, 'Désolée, je ne peux pas ce soir-là.', 'Sorry, I cannot make it that evening.', '/de.zɔ.le ʒə nə pø pa sə swaʁ.la/', 'day-zo-LAY | zhuh nuh peu pa suh swar-LA', ['refuser', 'familier']),
  sent(1075, C, 'Je vous remercie de votre invitation.', 'Thank you for your invitation.', '/ʒə vu ʁə.mɛʁ.si də vɔ.tʁɛ̃.vi.ta.sjɔ̃/', 'zhuh voo ruh-mehr-SEE | duh vo-trehⁿ-vee-ta-SYOHⁿ', ['repondre']),
  sent(1076, C, "Refuser, c'est remercier, dire non, donner une raison et proposer autre chose.", 'Declining means thanking, saying no, giving a reason and offering something else.', '/ʁə.fy.ze sɛ ʁə.mɛʁ.sje diʁ nɔ̃ dɔ.ne yn ʁɛ.zɔ̃ e pʁɔ.po.ze o.tʁə ʃoz/', 'ruh-fü-ZAY | seh ruh-mehr-SYAY | deer NOHⁿ | do-nay ün reh-ZOHⁿ | ay pro-po-zay oh-truh SHOHZ', ['rule', 'refuser'], ['flashcard'],
    rule('Tu refuses une invitation. Qu’écris-tu ?', 'Merci, non, une raison, et si possible une autre date ou un vœu.')),
  sent(1077, C, 'Serait-il possible de nous voir la semaine suivante ?', 'Would it be possible to meet the following week?', '/sə.ʁɛ.til pɔ.sibl də nu vwaʁ la sə.mɛn sɥi.vɑ̃t/', 'suh-reh-teel po-SEEBL | duh noo VWAR | la suh-menn swee-VAHⁿT', ['refuser', 'demande']),
  sent(1078, C, 'Je serai heureux de participer.', 'I will be happy to take part.', '/ʒə sə.ʁe œ.ʁø də paʁ.ti.si.pe/', 'zhuh suh-ray uh-REU | duh par-tee-see-PAY', ['accepter', 'futur']),
];

/* ── ACT 6 · DEMANDER UN RENSEIGNEMENT ───────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1080, C, 'Je voudrais savoir si des places sont encore disponibles.', 'I would like to know whether places are still available.', '/ʒə vu.dʁɛ sa.vwaʁ si de plas sɔ̃.tɑ̃.kɔʁ dis.pɔ.nibl/', 'zhuh voo-dreh sa-VWAR | see day PLASS | sohⁿ-tahⁿ-kor dees-po-NEEBL', ['renseignement', 'indirecte'], FCVDR),
  sent(1081, C, "Pourriez-vous m'indiquer les tarifs et les horaires ?", 'Could you tell me the prices and the times?', '/pu.ʁje.vu mɛ̃.di.ke le ta.ʁif e le.zɔ.ʁɛʁ/', 'poo-ryay-voo mehⁿ-dee-KAY | lay ta-REEF | ay lay-zo-REHR', ['renseignement', 'conditionnel'], FCVDR),
  sent(1082, C, "J'aimerais aussi savoir s'il y a un service de garde.", 'I would also like to know whether there is childcare.', '/ʒɛm.ʁɛ o.si sa.vwaʁ si.li.ja œ̃ sɛʁ.vis də ɡaʁd/', 'zhemm-reh oh-see sa-VWAR | seel ya uhⁿ sehr-vees duh GARD', ['renseignement', 'indirecte', 'quebec']),
  sent(1083, C, 'Je vous écris pour obtenir des renseignements.', 'I am writing to obtain some information.', '/ʒə vu.ze.kʁi puʁ ɔp.tə.niʁ de ʁɑ̃.sɛɲ.mɑ̃/', 'zhuh voo-zay-KREE | poor op-tuh-NEER | day rahⁿ-sehny-MAHⁿ', ['renseignement', 'ouverture']),
  sent(1084, C, 'Je voudrais savoir quand le camp commence.', 'I would like to know when the camp starts.', '/ʒə vu.dʁɛ sa.vwaʁ kɑ̃ lə kɑ̃ kɔ.mɑ̃s/', 'zhuh voo-dreh sa-VWAR | kahⁿ luh kahⁿ ko-MAHⁿS', ['renseignement', 'indirecte'], FCVDR),
  sent(1085, C, 'Pourriez-vous me dire combien coûte une semaine ?', 'Could you tell me how much a week costs?', '/pu.ʁje.vu mə diʁ kɔ̃.bjɛ̃ kut yn sə.mɛn/', 'poo-ryay-voo muh DEER | kohⁿ-byehⁿ koot ün suh-MENN', ['renseignement', 'indirecte']),
  sent(1086, S, "Auriez-vous l'amabilité de m'envoyer le formulaire ?", 'Would you be so kind as to send me the form?', '/o.ʁje.vu la.ma.bi.li.te də mɑ̃.vwa.je lə fɔʁ.my.lɛʁ/', 'oh-ryay-voo la-ma-bee-lee-TAY | duh mahⁿ-vwa-YAY luh for-mü-LEHR', ['renseignement', 'soutenu']),
  sent(1087, F, "C'est combien, le camp ?", "How much is the camp?", '/sɛ kɔ̃.bjɛ̃ lə kɑ̃/', 'seh kohⁿ-BYEHⁿ | luh KAHⁿ', ['renseignement', 'familier', 'contre-exemple'], RECO),
  phrase(1088, C, 'un renseignement', 'a piece of information', '/œ̃ ʁɑ̃.sɛɲ.mɑ̃/', 'uhⁿ rahⁿ-sehny-MAHⁿ', ['mot']),
  phrase(1089, C, 'les tarifs', 'the prices, the rates', '/le ta.ʁif/', 'lay ta-REEF', ['mot']),
  sent(1090, C, 'Une question par phrase, au conditionnel.', 'One question per sentence, in the conditional.', '/yn kɛs.tjɔ̃ paʁ fʁaz o kɔ̃.di.sjɔ.nɛl/', 'ün kehs-tyohⁿ par FRAZ | oh kohⁿ-dee-syo-NEHL', ['rule', 'renseignement'], ['flashcard'],
    rule('Tu demandes trois renseignements. Comment les écris-tu ?', "Une question par phrase, au conditionnel : je voudrais savoir si, pourriez-vous m'indiquer.")),
  sent(1091, C, 'Le camp commence-t-il le premier juillet ?', 'Does the camp start on the first of July?', '/lə kɑ̃ kɔ.mɑ̃s.til lə pʁə.mje ʒɥi.jɛ/', 'luh kahⁿ ko-mahⁿs-TEEL | luh pruh-myay zhwee-YEH', ['renseignement', 'inversion']),
];

/* ── ACT 7 · RÉCLAMER ────────────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1096, C, 'Je vous écris au sujet de ma facture du mois de mars.', 'I am writing about my bill for the month of March.', '/ʒə vu.ze.kʁi o sy.ʒɛ də ma fak.tyʁ dy mwa də maʁs/', 'zhuh voo-zay-KREE | oh sü-zheh duh ma fak-TÜR | dü mwa duh MARS', ['reclamation', 'ouverture']),
  sent(1097, C, 'Pourtant, votre facture indique un autre montant.', 'And yet your bill shows a different amount.', '/puʁ.tɑ̃ vɔtʁ fak.tyʁ ɛ̃.dik œ̃.no.tʁə mɔ̃.tɑ̃/', 'poor-TAHⁿ | votr fak-tür ehⁿ-DEEK | uhⁿ-noh-truh mohⁿ-TAHⁿ', ['reclamation', 'concession']),
  sent(1098, C, "J'ai déjà appelé votre service deux fois.", 'I have already called your department twice.', '/ʒe de.ʒa a.ple vɔtʁ sɛʁ.vis dø fwa/', 'zhay day-zha a-PLAY | votr sehr-VEES | deu FWA', ['reclamation', 'deja-fait'], FCVDR),
  sent(1099, C, "Le problème n'a pas été réglé.", 'The problem has not been solved.', '/lə pʁɔ.blɛm na pa.ze.te ʁe.ɡle/', 'luh pro-BLEM | na pa-zay-tay ray-GLAY', ['reclamation', 'probleme']),
  sent(1100, C, 'Je vous demande donc de corriger cette facture.', 'I am therefore asking you to correct this bill.', '/ʒə vu də.mɑ̃d dɔ̃k də kɔ.ʁi.ʒe sɛt fak.tyʁ/', 'zhuh voo duh-mahⁿd DOHⁿK | duh ko-ree-zhay seht fak-TÜR', ['reclamation', 'demande'], FCVDR),
  sent(1101, C, 'Vous trouverez en pièce jointe une copie de mon contrat.', 'Please find attached a copy of my contract.', '/vu tʁuv.ʁe ɑ̃ pjɛs ʒwɛ̃t yn kɔ.pi də mɔ̃ kɔ̃.tʁa/', 'voo troov-RAY | ahⁿ pyehs ZHWEHⁿT | ün ko-pee duh mohⁿ kohⁿ-TRA', ['reclamation', 'piece-jointe']),
  sent(1102, S, "Dans l'attente de votre réponse, je vous prie d'agréer mes salutations distinguées.", 'I look forward to your reply. Yours faithfully.', '/dɑ̃ la.tɑ̃t də vɔtʁ ʁe.pɔ̃s ʒə vu pʁi da.ɡʁe.e me sa.ly.ta.sjɔ̃ dis.tɛ̃.ɡe/', 'dahⁿ la-TAHⁿT duh votr ray-POHⁿS | zhuh voo pree da-gray-AY | may sa-lü-ta-syohⁿ dees-tehⁿ-GAY', ['reclamation', 'fermer', 'soutenu']),
  sent(1103, C, "La livraison devait arriver lundi, mais elle n'est jamais arrivée.", 'The delivery was due on Monday, but it never came.', '/la li.vʁɛ.zɔ̃ də.vɛ.ta.ʁi.ve lœ̃.di mɛ ɛl nɛ ʒa.mɛ a.ʁi.ve/', 'la lee-vreh-ZOHⁿ | duh-veh-ta-ree-vay luhⁿ-DEE | meh ehl neh zha-meh a-ree-VAY', ['reclamation', 'faits'], FCVDR),
  sent(1104, C, 'Je souhaite être remboursée.', 'I would like to be refunded.', '/ʒə swɛ.tɛtʁ ʁɑ̃.buʁ.se/', 'zhuh sweh-TEHTR | rahⁿ-boor-SAY', ['reclamation', 'demande']),
  sent(1105, F, "C'est n'importe quoi, votre service.", 'Your service is a joke.', '/sɛ nɛ̃.pɔʁt kwa vɔtʁ sɛʁ.vis/', 'seh nehⁿ-port KWA | votr sehr-VEES', ['reclamation', 'contre-exemple'], RECO),
  sent(1106, C, 'Je suis très déçue par votre service.', 'I am very disappointed with your service.', '/ʒə sɥi tʁɛ de.sy paʁ vɔtʁ sɛʁ.vis/', 'zhuh swee treh day-SÜ | par votr sehr-VEES', ['reclamation', 'ton']),
  phrase(1107, C, 'une réclamation', 'a complaint (a formal one)', '/yn ʁe.kla.ma.sjɔ̃/', 'ün ray-kla-ma-SYOHⁿ', ['mot']),
  phrase(1108, C, 'une facture', 'a bill, an invoice', '/yn fak.tyʁ/', 'ün fak-TÜR', ['mot']),
  phrase(1109, C, 'un remboursement', 'a refund', '/œ̃ ʁɑ̃.buʁs.mɑ̃/', 'uhⁿ rahⁿ-boors-MAHⁿ', ['mot']),
  sent(1110, C, 'Les faits, le problème, ce que tu as déjà fait, ce que tu demandes.', 'The facts, the problem, what you have already done, what you are asking for.', '/le fɛ lə pʁɔ.blɛm sə kə ty a de.ʒa fɛ sə kə ty də.mɑ̃d/', 'lay FEH | luh pro-BLEM | suh kuh tü a day-zha FEH | suh kuh tü duh-MAHⁿD', ['rule', 'reclamation'], ['flashcard'],
    rule('Les quatre étapes d’une réclamation ?', 'Les faits, le problème, ce que tu as déjà fait, ce que tu demandes.')),
  sent(1111, C, 'Je vous remercie de régler ce problème rapidement.', 'Thank you for solving this problem quickly.', '/ʒə vu ʁə.mɛʁ.si də ʁe.ɡle sə pʁɔ.blɛm ʁa.pid.mɑ̃/', 'zhuh voo ruh-mehr-SEE | duh ray-GLAY | suh pro-blem ra-peed-MAHⁿ', ['reclamation', 'fermer']),
];

/* ── ACT 8 · DONNER DES NOUVELLES ────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1114, C, 'Je vous écris pour vous donner de mes nouvelles.', 'I am writing to give you my news.', '/ʒə vu.ze.kʁi puʁ vu dɔ.ne də me nu.vɛl/', 'zhuh voo-zay-KREE | poor voo do-NAY | duh may noo-VEHL', ['nouvelles', 'ouverture'], FCVDR),
  sent(1115, C, 'Depuis mon retour, beaucoup de choses ont changé.', 'Since I came back, a lot has changed.', '/də.pɥi mɔ̃ ʁə.tuʁ bo.ku də ʃoz ɔ̃ ʃɑ̃.ʒe/', 'duh-pwee mohⁿ ruh-TOOR | boh-koo duh SHOHZ | ohⁿ shahⁿ-ZHAY', ['nouvelles']),
  sent(1116, C, "D'abord, j'ai trouvé un emploi dans une agence de voyages.", 'First, I found a job in a travel agency.', '/da.bɔʁ ʒe tʁu.ve œ̃.nɑ̃.plwa dɑ̃.zy.na.ʒɑ̃s də vwa.jaʒ/', 'da-BOR | zhay troo-VAY uhⁿ-nahⁿ-PLWA | dahⁿ-zü-na-zhahⁿs duh vwa-YAZH', ['nouvelles', 'ordre'], FCVDR),
  sent(1117, C, "Au début, c'était difficile, parce que je ne connaissais personne.", "At first it was hard, because I didn't know anyone.", '/o de.by se.tɛ di.fi.sil paʁs.kə ʒə nə kɔ.nɛ.sɛ pɛʁ.sɔn/', 'oh day-BÜ | say-teh dee-fee-SEEL | pars-kuh zhuh nuh ko-neh-seh pehr-SONN', ['nouvelles', 'imparfait'], FCVDR),
  sent(1118, C, "Ensuite, j'ai rencontré des collègues très gentils.", 'Then I met some very kind colleagues.', '/ɑ̃.sɥit ʒe ʁɑ̃.kɔ̃.tʁe de kɔ.lɛɡ tʁɛ ʒɑ̃.ti/', 'ahⁿ-SWEET | zhay rahⁿ-kohⁿ-TRAY | day ko-LEHG treh zhahⁿ-TEE', ['nouvelles', 'ordre']),
  sent(1119, C, 'Le mois dernier, nous avons organisé un voyage à Saint-Louis.', 'Last month we organised a trip to Saint-Louis.', '/lə mwa dɛʁ.nje nu.za.vɔ̃.zɔʁ.ɡa.ni.ze œ̃ vwa.jaʒ a sɛ̃.lwi/', 'luh mwa dehr-NYAY | noo-za-vohⁿ-zor-ga-nee-ZAY | uhⁿ vwa-YAZH a sehⁿ-LWEE', ['nouvelles', 'passe-compose']),
  sent(1120, C, 'Je pense souvent à vous.', 'I often think of you.', '/ʒə pɑ̃s su.vɑ̃ a vu/', 'zhuh pahⁿs soo-vahⁿ a VOO', ['nouvelles', 'fermer']),
  phrase(1121, C, 'Bien amicalement,', 'Warm regards,', '/bjɛ̃.na.mi.kal.mɑ̃/', 'byehⁿ-na-mee-kal-MAHⁿ', ['fermer']),
  sent(1122, F, "Devine quoi : j'ai trouvé un travail.", "Guess what: I've found a job.", '/də.vin kwa ʒe tʁu.ve œ̃ tʁa.vaj/', 'duh-veen KWA | zhay troo-vay uhⁿ tra-VAHY', ['nouvelles', 'familier']),
  sent(1123, C, "Tout s'est bien passé, même si le bus est tombé en panne.", 'Everything went well, even though the bus broke down.', '/tu sɛ bjɛ̃ pa.se mɛm si lə bys ɛ tɔ̃.be ɑ̃ pan/', 'too seh byehⁿ pa-SAY | mem see luh BÜS | eh tohⁿ-bay ahⁿ PANN', ['nouvelles', 'concession']),
  sent(1124, C, 'Enfin, je me suis inscrite à un cours de danse.', 'Finally, I have signed up for a dance class.', '/ɑ̃.fɛ̃ ʒə mə sɥi.zɛ̃s.kʁit a œ̃ kuʁ də dɑ̃s/', 'ahⁿ-FEHⁿ | zhuh muh swee-zehⁿs-KREET | a uhⁿ koor duh DAHⁿS', ['nouvelles', 'ordre']),
  sent(1125, C, "Le décor à l'imparfait, les étapes au passé composé, dans l'ordre.", 'The setting in the imparfait, the steps in the passé composé, in order.', '/lə de.kɔʁ a lɛ̃.paʁ.fɛ le.ze.tap o pa.se kɔ̃.po.ze dɑ̃ lɔʁdʁ/', 'luh day-KOR a lehⁿ-par-FEH | lay-zay-TAP oh pa-say kohⁿ-po-ZAY | dahⁿ LORDR', ['rule', 'nouvelles'], ['flashcard'],
    rule('Tu racontes un événement dans un courriel. Quels temps ?', "L'imparfait pour le décor, le passé composé pour les étapes.")),
  sent(1126, C, 'Et vous, comment allez-vous ?', 'And you, how are you?', '/e vu kɔ.mɑ̃.ta.le.vu/', 'ay VOO | ko-mahⁿ-ta-lay-VOO', ['nouvelles', 'fermer']),
];

/* ── ACT 9 · S'EXCUSER ───────────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1128, C, "Je vous prie de m'excuser pour mon absence à la réunion.", 'Please accept my apologies for missing the meeting.', '/ʒə vu pʁi də mɛk.sky.ze puʁ mɔ̃.nap.sɑ̃s a la ʁe.y.njɔ̃/', 'zhuh voo pree duh mehk-skü-ZAY | poor moh-nap-SAHⁿS | a la ray-ü-NYOHⁿ', ['excuse', 'reconnaitre'], FCVDR),
  sent(1129, C, "J'ai eu un empêchement de dernière minute.", 'Something came up at the last minute.', '/ʒe y œ̃.nɑ̃.pɛʃ.mɑ̃ də dɛʁ.njɛʁ mi.nyt/', 'zhay ü uhⁿ-nahⁿ-pehsh-MAHⁿ | duh dehr-nyehr mee-NÜT', ['excuse', 'expliquer']),
  sent(1130, C, 'Je suis désolé que vous deviez reporter la réunion.', 'I am sorry that you have to postpone the meeting.', '/ʒə sɥi de.zɔ.le kə vu də.vje ʁə.pɔʁ.te la ʁe.y.njɔ̃/', 'zhuh swee day-zo-LAY | kuh voo duh-VYAY | ruh-por-tay la ray-ü-NYOHⁿ', ['excuse', 'subjonctif']),
  sent(1131, C, 'Cela ne se reproduira pas.', 'It will not happen again.', '/sə.la nə sə ʁə.pʁɔ.dɥi.ʁa pa/', 'suh-LA | nuh suh ruh-pro-dwee-ra PA', ['excuse', 'futur']),
  sent(1132, C, 'Pourrions-nous fixer un autre rendez-vous ?', 'Could we set another appointment?', '/pu.ʁjɔ̃.nu fik.se œ̃.no.tʁə ʁɑ̃.de.vu/', 'poo-ryohⁿ-noo feek-SAY | uhⁿ-noh-truh rahⁿ-day-VOO', ['excuse', 'reparer'], FCVDR),
  sent(1133, C, 'Je vous envoie mes notes ce soir.', 'I will send you my notes this evening.', '/ʒə vu.zɑ̃.vwa me nɔt sə swaʁ/', 'zhuh voo-zahⁿ-vwa may NOT | suh SWAR', ['excuse', 'reparer']),
  sent(1134, C, "Je m'excuse pour ce malentendu.", 'I apologise for this misunderstanding.', '/ʒə mɛk.skyz puʁ sə ma.lɑ̃.tɑ̃.dy/', 'zhuh mehk-SKÜZ | poor suh ma-lahⁿ-tahⁿ-DÜ', ['excuse', 'reconnaitre']),
  sent(1135, F, "Désolé pour hier, j'ai complètement oublié.", 'Sorry about yesterday, I completely forgot.', '/de.zɔ.le puʁ jɛʁ ʒe kɔ̃.plɛt.mɑ̃ u.bli.je/', 'day-zo-lay poor YEHR | zhay kohⁿ-pleht-mahⁿ oo-blee-YAY', ['excuse', 'familier']),
  sent(1136, F, 'Je te revaudrai ça.', 'I owe you one.', '/ʒə tə ʁə.vo.dʁe sa/', 'zhuh tuh ruh-voh-dray SA', ['excuse', 'familier']),
  sent(1137, C, 'Je comprends votre mécontentement.', 'I understand your dissatisfaction.', '/ʒə kɔ̃.pʁɑ̃ vɔtʁ me.kɔ̃.tɑ̃t.mɑ̃/', 'zhuh kohⁿ-PRAHⁿ | votr may-kohⁿ-tahⁿt-MAHⁿ', ['excuse', 'reconnaitre']),
  sent(1138, C, 'Je regrette de ne pas vous avoir prévenu plus tôt.', 'I am sorry I did not let you know sooner.', '/ʒə ʁə.ɡʁɛt də nə pa vu.za.vwaʁ pʁe.və.ny ply to/', 'zhuh ruh-GREHT | duh nuh pa voo-za-vwar pray-vuh-NÜ | plü TOH', ['excuse', 'infinitif'], FCVDR),
  phrase(1139, C, 'un empêchement', 'something that came up, a hitch', '/œ̃.nɑ̃.pɛʃ.mɑ̃/', 'uhⁿ-nahⁿ-pehsh-MAHⁿ', ['mot']),
  sent(1140, C, 'Reconnaître, expliquer en une phrase, réparer.', 'Own it, explain in one sentence, make it right.', '/ʁə.kɔ.nɛtʁ ɛk.spli.ke ɑ̃.nyn fʁaz ʁe.pa.ʁe/', 'ruh-ko-NEHTR | ehk-splee-KAY ahⁿ-nün FRAZ | ray-pa-RAY', ['rule', 'excuse'], ['flashcard'],
    rule('Trois temps pour une excuse écrite ?', 'Reconnaître, expliquer en une phrase, proposer de réparer.')),
  sent(1141, C, 'Je suis désolée que tu aies attendu pour rien.', 'I am sorry you waited for nothing.', '/ʒə sɥi de.zɔ.le kə ty ɛ.za.tɑ̃.dy puʁ ʁjɛ̃/', 'zhuh swee day-zo-LAY | kuh tü eh-za-tahⁿ-DÜ | poor RYEHⁿ', ['excuse', 'subjonctif']),
];

/* ── ACT 10 · RELIER LES IDÉES ───────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1144, C, "Tout d'abord, les radiateurs ne fonctionnent plus depuis lundi.", 'First of all, the radiators have not worked since Monday.', '/tu.da.bɔʁ le ʁa.dja.tœʁ nə fɔ̃k.sjɔn ply də.pɥi lœ̃.di/', 'too-da-BOR | lay ra-dya-TUHR | nuh fohⁿk-syonn PLÜ | duh-pwee luhⁿ-DEE', ['connecteur', 'ordre'], FCVDR),
  sent(1145, C, 'En effet, la température est descendue à quinze degrés.', 'Indeed, the temperature has dropped to fifteen degrees.', '/ɑ̃.ne.fɛ la tɑ̃.pe.ʁa.tyʁ ɛ de.sɑ̃.dy a kɛ̃z də.ɡʁe/', 'ahⁿ-nay-FEH | la tahⁿ-pay-ra-TÜR | eh day-sahⁿ-DÜ | a kehⁿz duh-GRAY', ['connecteur', 'preuve']),
  sent(1146, C, 'De plus, ma fille est malade.', 'What is more, my daughter is ill.', '/də plys ma fij ɛ ma.lad/', 'duh PLÜS | ma fee eh ma-LAD', ['connecteur', 'ajout']),
  sent(1147, C, "Cependant, personne ne m'a rappelée.", 'However, nobody has called me back.', '/sə.pɑ̃.dɑ̃ pɛʁ.sɔn nə ma ʁa.ple/', 'suh-pahⁿ-DAHⁿ | pehr-sonn nuh ma ra-PLAY', ['connecteur', 'opposition'], FCVDR),
  sent(1148, C, "C'est pourquoi je vous demande d'envoyer un technicien.", 'That is why I am asking you to send a technician.', '/sɛ puʁ.kwa ʒə vu də.mɑ̃d dɑ̃.vwa.je œ̃ tɛk.ni.sjɛ̃/', 'seh poor-KWA | zhuh voo duh-mahⁿd dahⁿ-vwa-YAY | uhⁿ tehk-nee-SYEHⁿ', ['connecteur', 'consequence'], FCVDR),
  sent(1149, C, "Enfin, pourriez-vous me confirmer l'heure de sa visite ?", 'Finally, could you confirm the time of the visit?', '/ɑ̃.fɛ̃ pu.ʁje.vu mə kɔ̃.fiʁ.me lœʁ də sa vi.zit/', 'ahⁿ-FEHⁿ | poo-ryay-voo muh kohⁿ-feer-MAY | luhr duh sa vee-ZEET', ['connecteur', 'ordre']),
  phrase(1150, C, "tout d'abord", 'first of all', '/tu.da.bɔʁ/', 'too-da-BOR', ['connecteur']),
  phrase(1151, C, 'en effet', 'indeed, in fact', '/ɑ̃.ne.fɛ/', 'ahⁿ-nay-FEH', ['connecteur']),
  phrase(1152, C, 'de plus', 'what is more, moreover', '/də plys/', 'duh PLÜS', ['connecteur']),
  phrase(1153, C, 'en revanche', 'on the other hand', '/ɑ̃ ʁə.vɑ̃ʃ/', 'ahⁿ ruh-VAHⁿSH', ['connecteur']),
  sent(1154, C, "Par ailleurs, l'eau chaude coule mal.", 'Besides, the hot water barely runs.', '/paʁ a.jœʁ lo ʃod kul mal/', 'par a-YUHR | loh SHOHD | kool MAL', ['connecteur', 'ajout']),
  sent(1155, C, 'Un paragraphe, une idée, et un connecteur en tête de chaque étape.', 'One paragraph, one idea, and a connector at the head of each step.', '/œ̃ pa.ʁa.ɡʁaf yn i.de e œ̃ kɔ.nɛk.tœʁ ɑ̃ tɛt də ʃak e.tap/', 'uhⁿ pa-ra-GRAF | ün ee-DAY | ay uhⁿ ko-nehk-TUHR | ahⁿ teht duh shak ay-TAP', ['rule', 'connecteur'], ['flashcard'],
    rule('Comment ton lecteur voit-il les étapes de ton courriel ?', "Une idée par paragraphe, et un connecteur en tête : tout d'abord, de plus, cependant, c'est pourquoi, enfin.")),
  sent(1156, F, 'Et puis, en plus, personne répond.', 'And then, on top of that, nobody answers.', '/e pɥi ɑ̃ plys pɛʁ.sɔn ʁe.pɔ̃/', 'ay PWEE | ahⁿ PLÜS | pehr-sonn ray-POHⁿ', ['connecteur', 'contre-exemple'], RECO),
];

/* ── ACT 11 · SE RELIRE ──────────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1160, C, 'Pourriez-vous me dire si une chambre de plus est libre ?', 'Could you tell me whether one more room is free?', '/pu.ʁje.vu mə diʁ si yn ʃɑ̃bʁ də plys ɛ libʁ/', 'poo-ryay-voo muh DEER | see ün SHAHⁿBR duh PLÜS | eh LEEBR', ['relire', 'vous'], FCVDR),
  sent(1161, C, 'Nos amis sont déjà arrivés au Canada.', 'Our friends have already arrived in Canada.', '/no.za.mi sɔ̃ de.ʒa a.ʁi.ve o ka.na.da/', 'noh-za-MEE | sohⁿ day-zha a-ree-VAY | oh ka-na-DA', ['relire', 'accord'], FCVDR),
  sent(1162, C, 'Merci beaucoup de votre aide.', 'Thank you very much for your help.', '/mɛʁ.si bo.ku də vɔ.tʁɛd/', 'mehr-see boh-KOO | duh vo-TREHD', ['relire', 'abreviation']),
  sent(1163, C, "Objet : une chambre de plus pour notre séjour d'août", 'Subject: one more room for our August stay', '/ɔb.ʒɛ yn ʃɑ̃bʁ də plys puʁ nɔtʁ se.ʒuʁ dut/', 'ob-ZHEH | ün shahⁿbr duh PLÜS | poor notr say-zhoor DOOT', ['relire', 'objet']),
  sent(1164, C, "Les documents que j'ai envoyés sont en pièce jointe.", 'The documents I sent are attached.', '/le dɔ.ky.mɑ̃ kə ʒe ɑ̃.vwa.je sɔ̃.tɑ̃ pjɛs ʒwɛ̃t/', 'lay do-kü-MAHⁿ | kuh zhay ahⁿ-vwa-YAY | sohⁿ-tahⁿ pyehs ZHWEHⁿT', ['relire', 'accord'], FCVDR),
  sent(1165, C, "La réponse que vous m'avez donnée m'a beaucoup aidée.", 'The answer you gave me helped me a lot.', '/la ʁe.pɔ̃s kə vu ma.ve dɔ.ne ma bo.ku e.de/', 'la ray-POHⁿS | kuh voo ma-vay do-NAY | ma boh-koo ay-DAY', ['relire', 'accord']),
  sent(1166, C, "Relis ton courriel avant de l'envoyer.", 'Reread your email before you send it.', '/ʁə.li tɔ̃ ku.ʁjɛl a.vɑ̃ də lɑ̃.vwa.je/', 'ruh-lee tohⁿ koo-RYEHL | a-vahⁿ duh lahⁿ-vwa-YAY', ['relire']),
  sent(1167, C, 'La demande, le registre, les accords, les accents, la fin.', 'The request, the register, the agreements, the accents, the ending.', '/la də.mɑ̃d lə ʁə.ʒistʁ le.za.kɔʁ le.zak.sɑ̃ la fɛ̃/', 'la duh-MAHⁿD | luh ruh-ZHEESTR | lay-za-KOR | lay-zak-SAHⁿ | la FEHⁿ', ['rule', 'relire'], ['flashcard'],
    rule('Tu relis ton courriel. Tu cherches quoi ?', 'La demande, le registre, les accords, les accents, et une fin qui répond au début.')),
  sent(1168, C, 'Ma collègue et moi sommes arrivées en retard.', 'My colleague and I (both women) arrived late.', '/ma kɔ.lɛɡ e mwa sɔm.za.ʁi.ve ɑ̃ ʁə.taʁ/', 'ma ko-LEHG ay MWA | somm-za-ree-VAY | ahⁿ ruh-TAR', ['relire', 'accord']),
  phrase(1169, C, 'le brouillon', 'the draft', '/lə bʁu.jɔ̃/', 'luh broo-YOHⁿ', ['mot']),
  sent(1170, C, 'Je vous remercie de votre patience.', 'Thank you for your patience.', '/ʒə vu ʁə.mɛʁ.si də vɔtʁ pa.sjɑ̃s/', 'zhuh voo ruh-mehr-SEE | duh votr pa-SYAHⁿS', ['relire', 'fermer']),
  sent(1171, F, 'Est-ce que tu peux me répondre avant vendredi ?', 'Can you answer me before Friday?', '/ɛs.kə ty pø mə ʁe.pɔ̃dʁ a.vɑ̃ vɑ̃.dʁə.di/', 'ehs-kuh tü peu muh ray-POHⁿDR | a-vahⁿ vahⁿ-druh-DEE', ['relire', 'tu', 'contre-exemple'], RECO),
  sent(1172, C, 'Pourriez-vous me répondre avant vendredi ?', 'Could you answer me before Friday?', '/pu.ʁje.vu mə ʁe.pɔ̃dʁ a.vɑ̃ vɑ̃.dʁə.di/', 'poo-ryay-voo muh ray-POHⁿDR | a-vahⁿ vahⁿ-druh-DEE', ['relire', 'vous'], FCVDR),
];

/* ── ACT 12 · TA MISSION ─────────────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1174, C, 'Je vous écris afin de demander un permis de stationnement.', 'I am writing in order to request a parking permit.', '/ʒə vu.ze.kʁi a.fɛ̃ də də.mɑ̃.de œ̃ pɛʁ.mi də sta.sjɔn.mɑ̃/', 'zhuh voo-zay-KREE | a-fehⁿ duh duh-mahⁿ-DAY | uhⁿ pehr-MEE duh sta-syonn-MAHⁿ', ['modele', 'ouverture'], FCVDR),
  sent(1175, C, 'Depuis le mois dernier, les travaux bloquent notre rue.', 'Since last month, the roadworks have been blocking our street.', '/də.pɥi lə mwa dɛʁ.nje le tʁa.vo blɔk nɔtʁ ʁy/', 'duh-pwee luh mwa dehr-NYAY | lay tra-VOH | blok notr RÜ', ['modele', 'faits']),
  sent(1176, C, 'Je souhaiterais savoir quels documents je dois fournir.', 'I would like to know which documents I have to provide.', '/ʒə swɛ.tʁɛ sa.vwaʁ kɛl dɔ.ky.mɑ̃ ʒə dwa fuʁ.niʁ/', 'zhuh sweh-treh sa-VWAR | kehl do-kü-MAHⁿ | zhuh dwa foor-NEER', ['modele', 'demande'], FCVDR),
  sent(1177, C, 'Il serait important que le permis soit prêt avant lundi.', 'It would be important for the permit to be ready before Monday.', '/il sə.ʁɛ ɛ̃.pɔʁ.tɑ̃ kə lə pɛʁ.mi swa pʁɛ a.vɑ̃ lœ̃.di/', 'eel suh-reh ehⁿ-por-TAHⁿ | kuh luh pehr-MEE swa PREH | a-vahⁿ luhⁿ-DEE', ['modele', 'subjonctif']),
  sent(1178, C, "J'aimerais que vous m'envoyiez le formulaire par courriel.", 'I would like you to send me the form by email.', '/ʒɛm.ʁɛ kə vu mɑ̃.vwa.jje lə fɔʁ.my.lɛʁ paʁ ku.ʁjɛl/', 'zhemm-reh kuh voo mahⁿ-vwa-YYAY | luh for-mü-LEHR | par koo-RYEHL', ['modele', 'subjonctif']),
  sent(1179, C, "Je vous remercie par avance de l'attention que vous porterez à ma demande.", 'Thank you in advance for the attention you will give my request.', '/ʒə vu ʁə.mɛʁ.si paʁ a.vɑ̃s də la.tɑ̃.sjɔ̃ kə vu pɔʁ.tə.ʁe a ma də.mɑ̃d/', 'zhuh voo ruh-mehr-SEE | par a-VAHⁿS | duh la-tahⁿ-SYOHⁿ | kuh voo por-tuh-RAY | a ma duh-MAHⁿD', ['modele', 'fermer', 'soutenu']),
  sent(1180, C, 'Je suis infirmière et je travaille de nuit.', 'I am a nurse and I work nights.', '/ʒə sɥi.zɛ̃.fiʁ.mjɛʁ e ʒə tʁa.vaj də nɥi/', 'zhuh swee-zehⁿ-feer-MYEHR | ay zhuh tra-vahy duh NWEE', ['modele', 'faits']),
  phrase(1181, C, 'le permis de stationnement', 'the parking permit', '/lə pɛʁ.mi də sta.sjɔn.mɑ̃/', 'luh pehr-mee duh sta-syonn-MAHⁿ', ['mot', 'quebec']),
  sent(1182, C, 'Je ne trouve plus de place près de chez moi.', 'I can no longer find a space near my home.', '/ʒə nə tʁuv ply də plas pʁɛ də ʃe mwa/', 'zhuh nuh troov plü duh PLASS | preh duh shay MWA', ['modele', 'probleme']),
  sent(1183, C, 'Je vous remercie de votre compréhension.', 'Thank you for your understanding.', '/ʒə vu ʁə.mɛʁ.si də vɔtʁ kɔ̃.pʁe.ɑ̃.sjɔ̃/', 'zhuh voo ruh-mehr-SEE | duh votr kohⁿ-pray-ahⁿ-SYOHⁿ', ['modele', 'fermer']),
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
 *  Workshop shape: every act meets ONE text first. They live here so the
 *  reading, the quiz and the task cannot drift. Word counts are of `text`.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the email that asks for nothing, and the reply. 82 words. */
export const PREMIER_TEXT =
  "Mardi soir. Ton nouveau canapé arrive de chez Meubles Boréal, à Québec, et un pied est cassé. Tu écris vite au service à la clientèle, sans objet : « Salut, le canapé est arrivé cassé. Merci. » Deux jours plus tard, la réponse arrive : « Bonjour, merci de votre message. Nous sommes désolés pour ce problème. Pourriez-vous préciser votre demande ? Souhaitez-vous un remplacement, une réparation ou un remboursement ? Merci aussi de nous donner votre numéro de commande. Cordialement, Nadia Tremblay, service à la clientèle »";

/** Act 2: the same complaint, written to be answered. 86 words. */
export const ANATOMIE_TEXT =
  "Objet : commande 4821, canapé livré abîmé. Madame Tremblay, je vous écris au sujet de ma commande 4821, livrée le 3 mars. Le canapé est arrivé avec un pied cassé et une déchirure sur le côté. Je vous envoie deux photos en pièce jointe. Pourriez-vous me proposer un remplacement ? Je suis disponible pour une livraison en semaine, après 17 heures. Je vous remercie de votre aide. Cordialement, Alex Martin, 12, rue des Pins, Québec";

/** The five parts of ANATOMIE_TEXT, for the reading key. */
export const ANATOMIE_PARTIES = [
  "l'objet : commande 4821, canapé livré abîmé",
  "la formule d'appel : Madame Tremblay,",
  'le corps : la raison, les faits, la pièce jointe, la demande',
  'la formule de politesse : Je vous remercie de votre aide. Cordialement,',
  'la signature : Alex Martin, et son adresse',
] as const;

/** Act 3: Julien announces his move three times. 116 words. */
export const JULIEN_TEXT =
  "Julien déménage à Québec, et il annonce la nouvelle trois fois. À son amie Léa : « Salut Léa, grande nouvelle : j'ai trouvé un appartement à Québec ! Je déménage le 1er juillet. Tu viens pendre la crémaillère ? Bises, Julien » À sa responsable : « Bonjour Madame Gagnon, je vous informe que je déménage le premier juillet. Je serai donc absent le 2 juillet. Merci de votre compréhension. Bonne journée, Julien Roy » À sa banque, qu'il ne connaît pas : « Madame, Monsieur, je vous informe de mon changement d'adresse à compter du 1er juillet. Je vous prie de bien vouloir mettre à jour mon dossier. Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées. Julien Roy »";

/** Act 5: an invitation and two replies. 132 words. */
export const INVITATION_TEXT =
  "Objet : pot de départ de Michel Bergeron. Bonjour à toutes et à tous, après trente ans à la bibliothèque, Michel Bergeron prend sa retraite. Nous organisons un pot de départ le vendredi 14 juin, à 17 heures, dans la salle du deuxième étage. Pourriez-vous confirmer votre présence avant le 7 juin ? Au plaisir de vous y voir, Sophie Lavoie. Première réponse : « Bonjour Sophie, merci pour l'invitation. Je serai ravie de venir. Je suis contente que vous organisiez cette fête pour Michel. À vendredi, Awa » Deuxième réponse : « Bonjour Sophie, merci pour l'invitation. Malheureusement, je serai en formation à Ottawa ce jour-là. Je suis désolé de ne pas pouvoir venir. Pourriez-vous transmettre mes vœux à Michel ? Bonne journée, Marc »";

/** Act 6: a request for information to a municipal service. 88 words. */
export const RENSEIGNEMENT_TEXT =
  "Objet : inscription au camp de jour. Madame, Monsieur, je vous écris pour obtenir des renseignements sur le camp de jour d'été. Ma fille a neuf ans et nous venons d'arriver à Sainte-Adèle-des-Monts. Je voudrais savoir si des places sont encore disponibles pour juillet. Pourriez-vous m'indiquer les tarifs et les horaires ? J'aimerais aussi savoir s'il y a un service de garde le matin. Je vous remercie par avance de votre réponse. Cordialement, Karim Benali";

/** Act 7: a complaint to an internet provider in Liège. 104 words. */
export const RECLAMATION_TEXT =
  "Objet : facture de mars, montant erroné. Madame, Monsieur, je vous écris au sujet de ma facture du mois de mars. Le 2 mars, j'ai changé d'abonnement pour la formule à 35 euros par mois. Pourtant, votre facture indique 52 euros. J'ai déjà appelé votre service deux fois, mais le problème n'a pas été réglé. Je vous demande donc de corriger cette facture et de me rembourser la différence. Vous trouverez en pièce jointe une copie de mon contrat. Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées. Chantal Dubois, Liège";

/** Act 8: Awa gives her news to the teacher she stayed with in Lyon. 112 words. */
export const NOUVELLES_TEXT =
  "Chère Madame Lefèvre, je vous écris pour vous donner de mes nouvelles. Depuis mon retour à Dakar, beaucoup de choses ont changé. D'abord, j'ai trouvé un emploi dans une agence de voyages. Au début, c'était difficile, parce que je ne connaissais personne. Ensuite, j'ai rencontré des collègues très gentils. Le mois dernier, nous avons organisé un voyage à Saint-Louis pour un groupe de Québécois. Il faisait très chaud et le bus est tombé en panne, mais tout le monde a ri. Enfin, je me suis inscrite à un cours de danse. Je pense souvent à vous et à Lyon. Et vous, comment allez-vous ? Bien amicalement, Awa";

/** Act 10: a complaint to a property manager, one connector per step. 104 words. */
export const PARAGRAPHE_TEXT =
  "Objet : chauffage en panne, appartement 4. Monsieur Poirier, je vous écris au sujet du chauffage de mon appartement. Tout d'abord, les radiateurs ne fonctionnent plus depuis lundi. En effet, la température est descendue à quinze degrés dans le salon. De plus, ma fille de deux ans est malade. J'ai laissé un message à votre bureau mardi. Cependant, personne ne m'a rappelée. C'est pourquoi je vous demande d'envoyer un technicien avant vendredi. Enfin, pourriez-vous me confirmer l'heure de sa visite ? Je vous remercie par avance. Cordialement, Mélanie Côté";

/** Act 11: Tomás's draft, SIX slips to find before sending. 84 words. */
export const BROUILLON_TEXT =
  "Voici le brouillon de Tomás, avant l'envoi. Objet : réservation. Bonjour Madame Leblanc, je vous écris au sujet de notre réservation du 12 au 15 août à l'Auberge du Cap. Nos amis de Lyon viendront aussi : ils sont déja arrivé au Canada. Est-ce que tu peux me dire si une chambre de plus est libre ? Merci bcp et à bientôt. Bises, Tomás";

/** The six slips in BROUILLON_TEXT, in order, with their fix. */
export const BROUILLON_FAUTES = [
  "l'objet est vague : Objet : une chambre de plus pour notre séjour d'août",
  'déja : déjà',
  'arrivé : arrivés (ils sont arrivés)',
  'tu peux : vous pouvez, ou Pourriez-vous',
  'bcp : beaucoup',
  'Bises : Cordialement',
] as const;

/** Act 12: the model request to a municipal service. 128 words. */
export const MODELE_TEXT =
  "Objet : demande de permis de stationnement, rue des Érables. Madame, Monsieur, je vous écris afin de demander un permis de stationnement pour résidents. Depuis le mois dernier, les travaux bloquent notre rue et je ne trouve plus de place près de chez moi. Je suis infirmière et je travaille de nuit : je rentre souvent à trois heures du matin. Je souhaiterais savoir quels documents je dois fournir. De plus, il serait important que le permis soit prêt avant lundi, car les travaux dureront encore deux mois. J'aimerais donc que vous m'envoyiez le formulaire par courriel. Je vous remercie par avance de l'attention que vous porterez à ma demande. Je reste à votre disposition pour tout renseignement. Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées. Nathalie Bouchard";
