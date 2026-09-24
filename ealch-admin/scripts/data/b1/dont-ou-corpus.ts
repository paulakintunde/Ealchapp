// b1.12.l1 « Dont et où » — the authored corpus, the imports and the citation
// constants. DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (do not rename; a later lesson may import them): REFRAME,
// REFRAME_EN, THE_TEST, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS — B1 Unit 3, sentence expansion, lesson 2 of 3
// ══════════════════════════════════════════════════════════════════════════
//
//   THE RELATIVES THAT CARRY A PREPOSITION, which is everything b1.11 could
//   not build:
//
//     dont        the de complement      le livre dont je t'ai parlé
//     dont        the de adjective       le projet dont je suis fier
//     dont        the possessor          la femme dont le fils est médecin
//     où          a place                la ville où je suis né
//     où          a moment               le jour où je l'ai rencontrée
//     prep + qui  a person               la personne à qui j'ai parlé
//
//   and the six things an anglophone gets wrong with them:
//
//     1  que written where the verb asked for de                    act 2
//     2  the de of an adjective dropped altogether                  act 3
//     3  « dont son fils » on the English whose pattern             act 4
//     4  quand written for a moment, on the English when            act 6
//     5  que or qui written where a preposition was needed          act 7
//     6  the preposition stranded at the end, as English allows     act 8
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `pronoms-essentiels` exists (domain fondations, levelRange
//     a1-b2), so nothing is created at import.
//  2. POSTGRES PROBED 2026-09-24 by the wave orchestrator (not the seed):
//        693 rows across all levels, 138 of them `fr.b1.*` at .001-.138,
//        the highest number anywhere in the theme is .395, and there is
//        NOTHING at or above .900. AUTHORED IDS THEREFORE START AT 1200.
//  3. ID BLOCK: b1.12 owns `.1200`-`.1399` and nothing else. b1.11 owns
//     1000-1199 and b1.13 owns 1400-1599; neither is written into here.
//  4. ROWS THAT ALREADY TEACH THIS AND ARE IN THE SEED are imported act by
//     act below rather than re-authored. Only seven relative `dont`
//     sentences and fifteen relative `où` sentences exist in the whole seed,
//     which is why this lesson authors as many rows as it does.
//  5. POSTGRES HOLDS ~115 published `fr.b1.pronoms-essentiels.*` rows the
//     seed does not carry, and some of them will be on this topic. They
//     cannot be named by a section today because `src()` resolves against
//     seed.json and a DB-only id throws at module load. Re-probe at import
//     and dedupe: this corpus may hold twins. Open question 1 for Paul.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A2. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN FOR THE EAR
// ══════════════════════════════════════════════════════════════════════════
//
//   `validateDensity`'s nasal rule cannot always tell a real consonant from a
//   nasal vowel. Where it fires on a correct respelling the consonant is
//   doubled, as a2.34 does. Every doubled consonant in this corpus:
//       personne   pehr-SONN     (double n in the source, doubled here too)
//       femme      FAMM          (double m in the source)
//       somme      SOMM          (double m in the source)
//       semaine    suh-MENN      (a real /n/ after a single n in the source)
//       panne      PANN   donne  DONN   étonne  ay-TONN
//   Nasal vowels always close with the superscript: dohⁿ, kahⁿ, mohⁿ, uhⁿ.
//   No U+203F anywhere, in respell or in IPA. `validateDensity` returns zero
//   nasal-convention issues on the assembled lesson with these spellings.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that opens a sentence needs a capital, and the label is built
 *  at interpolation time rather than typed. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.12',
  seq: 12,
  /** English: `content_units` matches it against overview.titleEn. */
  title: 'Dont and Où',
  sub: 'Dont et où',
  canDo: 'Can join two sentences with a relative clause that carries a preposition, choosing dont for a de complement, où for a place or a moment, and preposition plus qui for a person, and can keep the preposition at the front of the clause where French requires it',
  prereqUnitIds: ['b1.11'],
} as const;

export const LESSON_ID = 'b1.12.l1';
export const LESSON_TITLE = 'Dont et où';
export const THEME = 'pronoms-essentiels';
export const LEVEL = 'b1' as const;

/** b1.12's block. Nothing outside it. b1.11 owns 1000-1199, b1.13 1400-1599. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. QUOTATIONS AND CITATIONS
 * ══════════════════════════════════════════════════════════════════════════ */

/** b1.11's ground: qui and que, the relatives this lesson builds on. Imported
 *  by name and never retyped, so a reword there cannot silently diverge here.
 *  b1.11 declares these STABLE EXPORTS for exactly this. */
export { REFRAME as B111_REFRAME, REFRAME_EN as B111_REFRAME_EN, THE_TEST as B111_TEST } from './qui-que-corpus.ts';

/** B1 units have no `seq` in seed.json, so `unitRef` cannot label them. They
 *  are cited by their planned trail position. A2 units use their real seq. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14,
};
function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  if (planned) return `la leçon ${planned} du B1`;
  const m = /^lesson (\d+) in (\w+)$/.exec(unitRef(unitId));
  return m ? `la leçon ${m[1]} de l'${m[2]}` : unitId;
}

export const QUI_QUE_UNIT = 'b1.11';
export const PC_UNIT = 'a2.05';
export const COD_UNIT = 'a2.06';
export const PREP_LIEU_UNIT = 'a2.04';
export const PREP_TEMPS_UNIT = 'a2.18';
export const POSSESSIFS_UNIT = 'a1.17';
export const LEQUEL_UNIT = 'b1.13';

export const QUI_QUE_REF = refFr(QUI_QUE_UNIT);
export const PC_REF = refFr(PC_UNIT);
export const COD_REF = refFr(COD_UNIT);
export const PREP_LIEU_REF = refFr(PREP_LIEU_UNIT);
export const PREP_TEMPS_REF = refFr(PREP_TEMPS_UNIT);
export const POSSESSIFS_REF = refFr(POSSESSIFS_UNIT);
export const LEQUEL_REF = refFr(LEQUEL_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE REFRAME
 *
 *  One metaphor: THE FRONT DOOR. Whatever little word the second sentence
 *  needed, it opens the clause. de arrives as dont, a place or a moment
 *  arrives as où, and every other preposition arrives written out in full in
 *  front of qui. Nothing is ever left hanging at the end, which is the one
 *  thing English allows and French does not.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'La préposition ouvre la relative. Elle ne finit jamais la phrase.';
export const REFRAME_EN = 'The preposition opens the clause. It never ends the sentence.';

/** The one-line operation the drills use as a coach line. */
export const THE_TEST = "Redis la deuxième phrase toute seule, et écoute le petit mot collé au verbe.";
export const THE_TEST_EN = 'Say the second sentence on its own, and listen for the little word stuck to the verb.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: "dont, c'est whose.",
    why: "False in most of its uses. « le livre dont je t'ai parlé » has no owner at all, and acts 2 and 3 are built entirely out of sentences where nobody possesses anything. The possession use is one family of three and it arrives only in act 4.",
  },
  {
    text: "où, c'est where.",
    why: "It leaves the time use unreachable, and the time use is the one an anglophone never produces: English says when, so a where-rule guarantees « le jour quand je suis arrivé ». Act 6 exists to contradict it.",
  },
  {
    text: 'dont remplace de + qui ou de + que.',
    why: "True and unusable at the moment of writing. It asks the learner to build a form they will never write in order to replace it, and « de que » is not French, so the rule teaches a shape that does not exist.",
  },
  {
    text: 'dont pour les personnes, où pour les choses.',
    why: "The antecedent error b1.11 spent a whole act killing, moved onto new words. dont takes people and things alike (« le voisin dont », « le livre dont »), and où takes only places and moments, never a thing.",
  },
  {
    text: 'Mets toujours la préposition devant le pronom.',
    why: "It is the right instinct and it is silent about the two fusions that matter: de does not stay de, it becomes dont, and a place preposition does not stay dans, it becomes où. A learner following it writes « de qui je t'ai parlé » for a book.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. IMPORTED ROWS (seed-checked 2026-09-24)
 *
 *  Every id below was read out of `ealch-v2/src/content/seed.json` and its
 *  French is quoted in the trailing comment, so no reader has to open the
 *  seed. Seed-checked only: DB check pending at import.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.litterature.003',            // C'est le roman dont je t'ai parlé.
    'fr.b1.sports-et-loisirs.092',      // Le club où je m'entraîne organise un tournoi chaque printemps.
    'fr.a1.questions.016',              // Avec qui vis-tu ?  (named only)
  ],
  act2: [
    'fr.b1.cinema.001',                 // C'est le réalisateur dont tout le monde parle en ce moment.  (named only)
    'fr.b1.voisinage.004',              // C'est le voisin dont je t'ai parlé hier.  (named only)
    'fr.a2.pronoms-essentiels.291',     // Je parle de mon travail.
    'fr.a2.metiers.036',                // Parlez-moi de votre parcours.
    'fr.b1.cuisine.003',                // Elle a besoin de plus de farine pour finir la pâte à tarte.
    'fr.a1.marche.173',                 // J'ai besoin d'un kilo d'oignons.
    'fr.b1.droit.006',                  // Le notaire s'occupe de la vente de la maison.  (named only)
    'fr.b1.metiers.006',                // Elle rêve de devenir architecte depuis son enfance.  (named only)
  ],
  act3: [
    'fr.a2.metiers.030',                // Je suis responsable de la sécurité.
    'fr.a2.metiers.068',                // Il est responsable du planning.
    'fr.a1.salutations.198',            // Bonjour, madame Dubois, je suis contente de vous voir.  (named only)
  ],
  act4: [
    'fr.b1.sports-et-loisirs.080',      // Elle a décidé de rejoindre un club dont les membres sont très motivés.
    'fr.b2.traditions.006',             // Cette fête, dont l'origine reste incertaine, mêle influences païennes et chrétiennes.  (named only)
  ],
  act5: [
    'fr.b1.cafe.061',                   // C'est le café où nous nous sommes rencontrés.  (named only)
    'fr.b1.cafe.007',                   // Elle préfère les cafés calmes où elle peut lire tranquillement.  (named only)
    'fr.b1.maison.064',                 // Nous cherchons un appartement où les charges sont incluses.  (named only)
    'fr.a2.sports-et-loisirs.035',      // Ils sont allés au club où ils s'entraînent le mardi.  (named only)
    'fr.b1.cafe.002',                   // C'est le seul café du quartier où l'on peut encore fumer en terrasse.  (named only)
    'fr.b2.communaute.006',             // Le conseil de quartier a mis en place une plateforme en ligne où les citoyens peuvent proposer des idées.  (named only)
    'fr.a2.sports-et-loisirs.044',      // Nous irons au club où on joue au badminton.  (named only)
  ],
  act6: [
    'fr.a2.heure-et-date.143',          // L'année dernière, nous avons visité le Portugal.
    'fr.b1.heure-et-date.039',          // L'année dernière à la même époque, il neigeait.
    'fr.a1.jours-et-mois.115',          // Le jour de son anniversaire, elle reçoit toujours des fleurs.  (named only)
  ],
  act7: [
    'fr.a1.questions.378',              // Avec qui est-ce que tu pars ?
    'fr.a2.prepositions-essentielles.151', // Tu es chez toi ce soir ?
    'fr.b1.famille.018',                // Chaque été, toute la famille se retrouve chez mes grands-parents.  (named only)
  ],
  act8: [
    'fr.a2.metiers.066',                // Je m'occupe des clients toute la journée.
    'fr.a2.metiers.071',                // Je m'occupe de la caisse le samedi.
  ],
  act9: [
    'fr.a2.metiers.028',                // Je m'occupe des dossiers clients.
    'fr.a1.nombres.117',                // Elle habite depuis onze ans dans ce quartier.  (named only)
  ],
  act10: [
    'fr.b1.cafe.080',                   // Je pense que ce café sert le meilleur cappuccino du quartier.
    'fr.a2.animaux.003',                // Mon chien a besoin de sortir tous les jours.
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable by a section, never releasable
 *  through a deck tranche. Checked row by row against seed.json on
 *  2026-09-24, with each row's actual drill list as the reason. */
export const NOT_DECK_ABLE: readonly string[] = [
  'fr.a1.questions.016',              // dictation only
  'fr.b1.cinema.001',                 // dictation only
  'fr.b1.voisinage.004',              // dictation only
  'fr.b1.droit.006',                  // sentence + dictation only
  'fr.b1.metiers.006',                // sentence + dictation only
  'fr.a1.salutations.198',            // sentence + review only
  'fr.b2.traditions.006',             // sentence + dictation only
  'fr.b1.cafe.061',                   // dictation only
  'fr.b1.cafe.007',                   // sentence + dictation only
  'fr.b1.maison.064',                 // dictation only
  'fr.a2.sports-et-loisirs.035',      // dictation only
  'fr.b1.cafe.002',                   // dictation only
  'fr.b2.communaute.006',             // sentence + dictation only
  'fr.a2.sports-et-loisirs.044',      // dictation only
  'fr.a1.jours-et-mois.115',          // dictation only
  'fr.b1.famille.018',                // sentence + dictation only
  'fr.a1.nombres.117',                // dictation only
];

/** A `practice skill: 'speak'` section names AUTHORED rows only. The speak
 *  mission filters `ALL_ROWS` on `voiceflash` and adds nothing by hand, so
 *  every import is listed here and none can leak into it. */
export const NOT_SPEAKABLE: readonly string[] = [...IMPORT_IDS];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE AUTHORED ROWS
 *
 *  `sent` is a sentence, `phrase` a short unit, `gap` a gapfill card whose
 *  front is the sentence with the relative word removed AND a cue naming the
 *  little word the verb asked for, so the card asks for the pronoun because
 *  of what the clause needs. `rule` is a grammar card: the prompt is the
 *  question, `fr` is the rule.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const GP = ['relatives-dont-ou'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: GP,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: GP,
});

/** A gapfill card: the front is the sentence with the relative word gapped
 *  and a cue in brackets naming the little word the verb asked for. */
const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  prompt: string, notes: string, tags: string[], drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, cardType: 'gapfill', prompt, notes, grammarPoints: GP,
});

/** A rule card: the prompt is the question, `fr` is the rule. */
const rule = (
  n: number, fr: string, en: string, prompt: string, notes: string, tags: string[],
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en,
  tags, drills: ['flashcard', 'review'] as Item['drills'], version: 1,
  cardType: 'grammar', prompt, notes, grammarPoints: GP,
});

/* ── ACT 1 · LA PHRASE QUI RESTE EN L'AIR · 1200-1217 ─────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, "Je cherche un appartement.", 'I am looking for a flat.',
    '/ʒə ʃɛʁʃ œ̃.na.paʁ.tə.mɑ̃/', 'zhuh SHEHRSH uhⁿ-nah-par-tuh-MAHⁿ', ['scene', 'court']),
  sent(1201, "J'ai besoin d'un appartement calme.", 'I need a quiet flat.',
    '/ʒe bə.zwɛ̃ dœ̃.na.paʁ.tə.mɑ̃ kalm/', 'zhay buh-ZWEHⁿ duhⁿ-nah-par-tuh-MAHⁿ KALM', ['scene', 'court']),
  sent(1202, "L'appartement dont j'ai besoin est calme et près du campus.",
    'The flat I need is quiet and near the campus.',
    '/la.paʁ.tə.mɑ̃ dɔ̃ ʒe bə.zwɛ̃ ɛ kalm e pʁɛ dy kɑ̃.pys/',
    'lah-par-tuh-MAHⁿ dohⁿ zhay buh-ZWEHⁿ · eh KALM ay preh dü kahⁿ-PÜSS',
    ['scene', 'dont', 'soudure'], FCVDR),
  sent(1203, 'Le quartier me plaît beaucoup.', 'I like the neighbourhood a lot.',
    '/lə kaʁ.tje mə plɛ bo.ku/', 'luh kar-TYAY muh PLEH boh-KOO', ['scene', 'court']),
  sent(1204, "Le quartier où je veux habiter est près du fleuve.",
    'The neighbourhood I want to live in is near the river.',
    '/lə kaʁ.tje u ʒə vø a.bi.te ɛ pʁɛ dy flœv/',
    'luh kar-TYAY oo zhuh vuh ah-bee-TAY · eh preh dü FLUHV',
    ['scene', 'ou', 'soudure'], FCVDR),
  sent(1205, "J'ai écrit à une personne hier.", 'I wrote to somebody yesterday.',
    '/ʒe e.kʁi a yn pɛʁ.sɔn jɛʁ/', 'zhay ay-KREE ah ün pehr-SONN YEHR', ['scene', 'court']),
  sent(1206, "La personne à qui j'ai écrit hier ne m'a pas répondu.",
    'The person I wrote to yesterday has not answered me.',
    '/la pɛʁ.sɔn a ki ʒe e.kʁi jɛʁ nə ma pa ʁe.pɔ̃.dy/',
    'lah pehr-SONN ah kee zhay ay-KREE YEHR · nuh ma pa ray-pohⁿ-DÜ',
    ['scene', 'personne', 'soudure'], FCVDR),
  sent(1207, "Voici le dossier dont vous avez besoin pour l'inscription.",
    'Here is the file you need for the registration.',
    '/vwa.si lə dɔ.sje dɔ̃ vu.za.ve bə.zwɛ̃ puʁ lɛ̃s.kʁip.sjɔ̃/',
    'vwah-see luh doh-SYAY · dohⁿ voo zah-vay buh-ZWEHⁿ pour lehⁿs-kreep-SYOHⁿ',
    ['lecture', 'dont']),
  sent(1208, "L'immeuble où se trouve le bureau date de mille neuf cent trente.",
    'The building the office is in dates from nineteen thirty.',
    '/li.mœbl u sə tʁuv lə by.ʁo dat də mil nœf sɑ̃ tʁɑ̃t/',
    'lee-MUHBL oo suh troov luh bü-ROH · dat duh meel nuhf sahⁿ TRAHⁿT',
    ['lecture', 'ou']),
  sent(1209, "La conseillère avec qui tu as rendez-vous s'appelle madame Roy.",
    'The adviser you have an appointment with is called Madame Roy.',
    '/la kɔ̃.sɛ.jɛʁ a.vɛk ki ty a ʁɑ̃.de.vu sa.pɛl ma.dam ʁwa/',
    'lah kohⁿ-seh-YEHR ah-vek kee tü a rahⁿ-day-VOO · sah-pel mah-damm RWA',
    ['lecture', 'personne']),
  sent(1210, "Le jour où tu déménages, le concierge doit être prévenu.",
    'On the day you move in, the caretaker has to be told.',
    '/lə ʒuʁ u ty de.me.naʒ lə kɔ̃.sjɛʁʒ dwa.t ɛtʁ pʁev.ny/',
    'luh ZHOOR oo tü day-may-NAZH · luh kohⁿ-SYEHRZH dwah tetr prayv-NÜ',
    ['lecture', 'ou', 'moment']),
  sent(1211, "Le formulaire dont je parle est sur le comptoir.",
    'The form I am talking about is on the counter.',
    '/lə fɔʁ.my.lɛʁ dɔ̃ ʒə paʁl ɛ syʁ lə kɔ̃.twaʁ/',
    'luh for-mü-LEHR dohⁿ zhuh PARL · eh sür luh kohⁿ-TWAR',
    ['lecture', 'dont'], FCVDR),
  sent(1212, "La rue où j'ai grandi est à dix minutes d'ici.",
    'The street I grew up in is ten minutes from here.',
    '/la ʁy u ʒe ɡʁɑ̃.di ɛ.t a di mi.nyt di.si/',
    'lah RÜ oo zhay grahⁿ-DEE · eh ta dee mee-NÜT dee-SEE',
    ['lecture', 'ou'], FCVDR),
  rule(1213, "Le petit mot que le verbe réclame ouvre la relative.",
    'The little word the verb asks for opens the clause.',
    "Où se met la préposition dans une relative ?",
    "Elle passe devant, jamais à la fin. EN: it moves to the front, never to the end.",
    ['regle', 'devant']),
  rule(1214, "de donne dont, un lieu ou un moment donne où, une autre préposition reste devant qui.",
    'de gives dont, a place or a moment gives où, any other preposition stays in front of qui.',
    'Quelles sont les trois portes ?',
    "Trois entrées, une seule question : quel petit mot va avec le verbe. EN: three doors, one question.",
    ['regle', 'choix']),
  gap(1215, "Le dossier dont vous avez besoin est prêt.",
    'The file you need is ready.',
    '/lə dɔ.sje dɔ̃ vu.za.ve bə.zwɛ̃ ɛ pʁɛ/',
    'luh doh-SYAY dohⁿ voo zah-vay buh-ZWEHⁿ · eh PREH',
    "Le dossier ___ vous avez besoin est prêt.  [avoir besoin DE]",
    "besoin arrive avec de, donc dont. EN: besoin brings de, so dont.",
    ['tache', 'dont']),
  gap(1216, "La ville où elle travaille est à une heure de train.",
    'The city she works in is an hour away by train.',
    '/la vil u ɛl tʁa.vaj ɛ.t a yn œʁ də tʁɛ̃/',
    'lah VEEL oo el trah-VAHY · eh ta ün UHR duh TREHⁿ',
    'La ville ___ elle travaille est à une heure de train.  [travailler DANS une ville]',
    "Un lieu, donc où. EN: a place, so où.",
    ['tache', 'ou']),
  gap(1217, "Le collègue avec qui je partage le bureau arrive à huit heures.",
    'The colleague I share the office with gets in at eight.',
    '/lə kɔ.lɛɡ a.vɛk ki ʒə paʁ.taʒ lə by.ʁo a.ʁiv a ɥi.t œʁ/',
    'luh koh-LEG ah-vek kee zhuh par-TAZH luh bü-ROH · ah-reev ah üee-TUHR',
    "Le collègue ___ je partage le bureau arrive à huit heures.  [partager AVEC quelqu'un]",
    "avec ne fusionne avec rien : il reste écrit devant qui. EN: avec fuses with nothing.",
    ['tache', 'personne']),
];

/* ── ACT 2 · DONT APRÈS UN VERBE EN « DE » · 1220-1241 ───────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1220, "Je t'ai parlé d'un livre.", 'I told you about a book.',
    '/ʒə te paʁ.le dœ̃ livʁ/', 'zhuh tay par-LAY duhⁿ LEEVR', ['entree', 'court']),
  sent(1221, "Le livre dont je t'ai parlé est à la bibliothèque.",
    'The book I told you about is at the library.',
    '/lə livʁ dɔ̃ ʒə te paʁ.le ɛ a la bi.bli.jɔ.tɛk/',
    'luh LEEVR dohⁿ zhuh tay par-LAY · eh ah lah bee-blee-oh-TEK',
    ['parler', 'dont'], FCVDR),
  sent(1222, "Tu as besoin d'un formulaire.", 'You need a form.',
    '/ty a bə.zwɛ̃ dœ̃ fɔʁ.my.lɛʁ/', 'tü a buh-ZWEHⁿ duhⁿ for-mü-LEHR', ['entree', 'court']),
  sent(1223, "Le formulaire dont tu as besoin est en ligne.",
    'The form you need is online.',
    '/lə fɔʁ.my.lɛʁ dɔ̃ ty a bə.zwɛ̃ ɛ.t ɑ̃ liɲ/',
    'luh for-mü-LEHR dohⁿ tü a buh-ZWEHⁿ · eh tahⁿ LEENY',
    ['besoin', 'dont'], FCVDR),
  sent(1224, 'Je me souviens très bien de cette soirée.',
    'I remember that evening very well.',
    '/ʒə mə su.vjɛ̃ tʁɛ bjɛ̃ də sɛt swa.ʁe/',
    'zhuh muh soo-VYEHⁿ treh byehⁿ duh set swah-RAY', ['entree', 'court']),
  sent(1225, "La soirée dont je me souviens le mieux, c'est la première.",
    'The evening I remember best is the first one.',
    '/la swa.ʁe dɔ̃ ʒə mə su.vjɛ̃ lə mjø sɛ la pʁə.mjɛʁ/',
    'lah swah-RAY dohⁿ zhuh muh soo-VYEHⁿ luh MYUH · seh lah pruh-MYEHR',
    ['souvenir', 'dont']),
  sent(1226, "Elle a envie d'un vrai congé.", 'She wants a real holiday.',
    '/ɛl a ɑ̃.vi dœ̃ vʁɛ kɔ̃.ʒe/', 'el a ahⁿ-VEE duhⁿ vreh kohⁿ-ZHAY', ['entree', 'court']),
  sent(1227, "Le congé dont elle a envie dure trois semaines.",
    'The holiday she wants lasts three weeks.',
    '/lə kɔ̃.ʒe dɔ̃ ɛl a ɑ̃.vi dyʁ tʁwa sə.mɛn/',
    'luh kohⁿ-ZHAY dohⁿ el a ahⁿ-VEE · dür trwah suh-MENN',
    ['envie', 'dont'], FCVDR),
  sent(1228, "Il s'occupe des inscriptions.", 'He handles the registrations.',
    '/il sɔ.kyp de.zɛ̃s.kʁip.sjɔ̃/', 'eel soh-KÜP day zehⁿs-kreep-SYOHⁿ', ['entree', 'court']),
  sent(1229, "Les inscriptions dont il s'occupe ferment vendredi.",
    'The registrations he handles close on Friday.',
    '/le.zɛ̃s.kʁip.sjɔ̃ dɔ̃ il sɔ.kyp fɛʁm vɑ̃.dʁə.di/',
    'lay zehⁿs-kreep-SYOHⁿ dohⁿ eel soh-KÜP · fehrm vahⁿ-druh-DEE',
    ['occuper', 'dont']),
  sent(1230, "Nous rêvons d'un appartement plus grand.",
    'We dream of a bigger flat.',
    '/nu ʁɛ.vɔ̃ dœ̃.na.paʁ.tə.mɑ̃ ply ɡʁɑ̃/',
    'noo reh-VOHⁿ duhⁿ-nah-par-tuh-MAHⁿ plü GRAHⁿ', ['entree', 'court']),
  sent(1231, "L'appartement dont nous rêvons coûte trop cher.",
    'The flat we dream of costs too much.',
    '/la.paʁ.tə.mɑ̃ dɔ̃ nu ʁɛ.vɔ̃ kut tʁo ʃɛʁ/',
    'lah-par-tuh-MAHⁿ dohⁿ noo reh-VOHⁿ · koot troh SHEHR',
    ['rever', 'dont'], FCVDR),
  sent(1232, 'La bourse dont je dépends arrive en septembre.',
    'The grant I depend on arrives in September.',
    '/la buʁs dɔ̃ ʒə de.pɑ̃ a.ʁiv ɑ̃ sɛp.tɑ̃bʁ/',
    'lah BOORSS dohⁿ zhuh day-PAHⁿ · ah-reev ahⁿ sep-TAHⁿBR',
    ['dependre', 'dont']),
  sent(1233, 'Le dictionnaire dont je me sers tous les jours est très vieux.',
    'The dictionary I use every day is very old.',
    '/lə dik.sjɔ.nɛʁ dɔ̃ ʒə mə sɛʁ tu le ʒuʁ ɛ tʁɛ vjø/',
    'luh deek-syoh-NEHR dohⁿ zhuh muh SEHR too lay ZHOOR · eh treh VYUH',
    ['servir', 'dont']),
  sent(1234, 'Le film dont tout le monde parle sort vendredi.',
    'The film everyone is talking about comes out on Friday.',
    '/lə film dɔ̃ tu lə mɔ̃d paʁl sɔʁ vɑ̃.dʁə.di/',
    'luh FEELM dohⁿ too luh MOHⁿD parl · sor vahⁿ-druh-DEE',
    ['parler', 'dont'], FCVDR),
  sent(1235, "La personne dont je me souviens s'appelait Awa.",
    'The person I remember was called Awa.',
    '/la pɛʁ.sɔn dɔ̃ ʒə mə su.vjɛ̃ sa.pə.lɛ a.wa/',
    'lah pehr-SONN dohⁿ zhuh muh soo-VYEHⁿ · sah-puh-leh ah-WAH',
    ['souvenir', 'dont', 'personne']),
  sent(1236, "Le stage dont je rêvais depuis deux ans commence lundi.",
    'The placement I had been dreaming of for two years starts on Monday.',
    '/lə staʒ dɔ̃ ʒə ʁɛ.vɛ də.pɥi dø.zɑ̃ kɔ.mɑ̃s lœ̃.di/',
    'luh STAZH dohⁿ zhuh reh-VEH duh-püee duh-ZAHⁿ · koh-MAHⁿSS luhⁿ-DEE',
    ['rever', 'dont']),
  gap(1237, "Le livre dont j'ai envie coûte quarante dollars.",
    'The book I want costs forty dollars.',
    '/lə livʁ dɔ̃ ʒe ɑ̃.vi kut ka.ʁɑ̃t dɔ.laʁ/',
    'luh LEEVR dohⁿ zhay ahⁿ-VEE · koot kah-RAHⁿT doh-LAR',
    "Le livre ___ j'ai envie coûte quarante dollars.  [avoir envie DE]",
    'envie arrive avec de, donc dont. EN: envie brings de, so dont.',
    ['tache', 'envie']),
  gap(1238, 'La ville dont elle parle souvent est Abidjan.',
    'The city she often talks about is Abidjan.',
    '/la vil dɔ̃ ɛl paʁl su.vɑ̃ ɛ.t a.bi.dʒɑ̃/',
    'lah VEEL dohⁿ el parl soo-VAHⁿ · eh tah-bee-JAHⁿ',
    'La ville ___ elle parle souvent est Abidjan.  [parler DE]',
    "Une ville, et pourtant ce n'est pas où : le verbe réclame de. EN: a city, and still not où: the verb asks for de.",
    ['tache', 'parler', 'contraste']),
  gap(1239, "Le sujet dont nous nous occupons est difficile.",
    'The subject we are dealing with is difficult.',
    '/lə sy.ʒɛ dɔ̃ nu nu.zɔ.ky.pɔ̃ ɛ di.fi.sil/',
    'luh sü-ZHEH dohⁿ noo noo zoh-kü-POHⁿ · eh dee-fee-SEEL',
    "Le sujet ___ nous nous occupons est difficile.  [s'occuper DE]",
    "s'occuper arrive avec de. EN: s'occuper brings de.",
    ['tache', 'occuper']),
  rule(1240, 'dont remplace de, et de ne se réécrit jamais derrière.',
    'dont replaces de, and de is never written again behind it.',
    'Que remplace dont exactement ?',
    "Un seul mot pour de plus le nom repris. EN: one word for de plus the noun it picks up.",
    ['regle', 'dont']),
  rule(1241, 'parler de, avoir besoin de, se souvenir de, avoir envie de, s’occuper de, rêver de.',
    'to talk about, to need, to remember, to want, to look after, to dream of.',
    'Quels verbes arrivent avec de ?',
    'Six verbes très courants, et tous donnent dont. EN: six very common verbs, and all of them give dont.',
    ['regle', 'liste']),
];

/* ── ACT 3 · DONT APRÈS UN ADJECTIF EN « DE » · 1244-1261 ────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1244, 'Je suis fier de ce travail.', 'I am proud of this piece of work.',
    '/ʒə sɥi fjɛʁ də sə tʁa.vaj/', 'zhuh süee FYEHR duh suh trah-VAHY', ['entree', 'court']),
  sent(1245, 'Le travail dont je suis fier a pris six mois.',
    'The work I am proud of took six months.',
    '/lə tʁa.vaj dɔ̃ ʒə sɥi fjɛʁ a pʁi si mwa/',
    'luh trah-VAHY dohⁿ zhuh süee FYEHR · a pree see MWAH',
    ['fier', 'dont', 'adjectif'], FCVDR),
  sent(1246, 'Elle est contente de son nouveau bureau.',
    'She is happy with her new office.',
    '/ɛl ɛ kɔ̃.tɑ̃t də sɔ̃ nu.vo by.ʁo/',
    'el eh kohⁿ-TAHⁿT duh sohⁿ noo-voh bü-ROH', ['entree', 'court']),
  sent(1247, 'Le bureau dont elle est contente donne sur la cour.',
    'The office she is happy with looks onto the courtyard.',
    '/lə by.ʁo dɔ̃ ɛl ɛ kɔ̃.tɑ̃t dɔn syʁ la kuʁ/',
    'luh bü-ROH dohⁿ el eh kohⁿ-TAHⁿT · donn sür lah KOOR',
    ['content', 'dont', 'adjectif'], FCVDR),
  sent(1248, 'Tu es sûr de cette date.', 'You are sure of that date.',
    '/ty ɛ syʁ də sɛt dat/', 'tü eh SÜR duh set DAT', ['entree', 'court']),
  sent(1249, 'La date dont tu es sûr ne figure nulle part.',
    'The date you are sure of appears nowhere.',
    '/la dat dɔ̃ ty ɛ syʁ nə fi.ɡyʁ nyl paʁ/',
    'lah DAT dohⁿ tü eh SÜR · nuh fee-gür nül PAR',
    ['sur', 'dont', 'adjectif']),
  sent(1250, "Elle est responsable de l'accueil.", 'She is in charge of the front desk.',
    '/ɛl ɛ ʁɛs.pɔ̃.sabl də la.kœj/', 'el eh res-pohⁿ-SABL duh lah-KUHY', ['entree', 'court']),
  sent(1251, "L'accueil dont elle est responsable ferme à midi.",
    'The front desk she is in charge of closes at noon.',
    '/la.kœj dɔ̃ ɛl ɛ ʁɛs.pɔ̃.sabl fɛʁm a mi.di/',
    'lah-KUHY dohⁿ el eh res-pohⁿ-SABL · fehrm ah mee-DEE',
    ['responsable', 'dont', 'adjectif']),
  sent(1252, 'Nous sommes ravis de cette nouvelle.', 'We are delighted with this news.',
    '/nu sɔm ʁa.vi də sɛt nu.vɛl/', 'noo SOMM rah-VEE duh set noo-VEL', ['entree', 'court']),
  sent(1253, 'La nouvelle dont nous sommes ravis est arrivée ce matin.',
    'The news we are delighted with came this morning.',
    '/la nu.vɛl dɔ̃ nu sɔm ʁa.vi ɛ.t a.ʁi.ve sə ma.tɛ̃/',
    'lah noo-VEL dohⁿ noo somm rah-VEE · eh tah-ree-VAY suh mah-TEHⁿ',
    ['ravi', 'dont', 'adjectif'], FCVDR),
  sent(1254, "Il est capable d'un effort énorme.", 'He is capable of a huge effort.',
    '/il ɛ ka.pabl dœ̃.n e.fɔʁ e.nɔʁm/',
    'eel eh kah-PABL duhⁿ nay-FOR ay-NORM', ['entree', 'court']),
  sent(1255, "L'effort dont il est capable étonne tout le monde.",
    'The effort he is capable of astonishes everyone.',
    '/le.fɔʁ dɔ̃ il ɛ ka.pabl e.tɔn tu lə mɔ̃d/',
    'lay-FOR dohⁿ eel eh kah-PABL · ay-tonn too luh MOHⁿD',
    ['capable', 'dont', 'adjectif'], FCVDR),
  sent(1256, "Le seul point dont je ne suis pas sûr, c'est l'heure.",
    "The one thing I am not sure of is the time.",
    '/lə sœl pwɛ̃ dɔ̃ ʒə nə sɥi pa syʁ sɛ lœʁ/',
    'luh suhl PWEHⁿ dohⁿ zhuh nuh süee pa SÜR · seh LUHR',
    ['sur', 'dont', 'negation']),
  sent(1257, 'Le quartier dont elle est très fière a beaucoup changé.',
    'The neighbourhood she is very proud of has changed a lot.',
    '/lə kaʁ.tje dɔ̃ ɛl ɛ tʁɛ fjɛʁ a bo.ku ʃɑ̃.ʒe/',
    'luh kar-TYAY dohⁿ el eh treh FYEHR · a boh-koo shahⁿ-ZHAY',
    ['fier', 'dont', 'adjectif'], FCVDR),
  gap(1258, 'Le projet dont je suis fier commence en mars.',
    'The project I am proud of starts in March.',
    '/lə pʁɔ.ʒɛ dɔ̃ ʒə sɥi fjɛʁ kɔ.mɑ̃s ɑ̃ maʁs/',
    'luh proh-ZHEH dohⁿ zhuh süee FYEHR · koh-MAHⁿSS ahⁿ MARSS',
    'Le projet ___ je suis fier commence en mars.  [être fier DE]',
    "fier arrive avec de, exactement comme un verbe. EN: fier brings de, exactly like a verb.",
    ['tache', 'fier']),
  gap(1259, 'La somme dont il est responsable est énorme.',
    'The sum he is responsible for is huge.',
    '/la sɔm dɔ̃ il ɛ ʁɛs.pɔ̃.sabl ɛ.t e.nɔʁm/',
    'lah SOMM dohⁿ eel eh res-pohⁿ-SABL · eh tay-NORM',
    'La somme ___ il est responsable est énorme.  [être responsable DE]',
    "responsable de, jamais responsable que. EN: responsable takes de, never que.",
    ['tache', 'responsable']),
  rule(1260, 'Un adjectif réclame de aussi souvent qu’un verbe.',
    'An adjective asks for de as often as a verb does.',
    'Seuls les verbes donnent-ils dont ?',
    "Non : être fier de, être sûr de, être responsable de. EN: no: adjectives take de too.",
    ['regle', 'adjectif']),
  rule(1261, 'fier de, content de, sûr de, responsable de, capable de, ravi de.',
    'proud of, happy with, sure of, in charge of, capable of, delighted with.',
    'Quels adjectifs arrivent avec de ?',
    'Six adjectifs très courants, et tous donnent dont. EN: six very common adjectives, all giving dont.',
    ['regle', 'liste']),
];

/* ── ACT 4 · DONT, LE POSSESSEUR · 1264-1285 ─────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1264, 'Son fils est médecin.', 'Her son is a doctor.',
    '/sɔ̃ fis ɛ med.sɛ̃/', 'sohⁿ FEESS eh mayd-SEHⁿ', ['entree', 'court']),
  sent(1265, 'La femme dont le fils est médecin habite en face.',
    'The woman whose son is a doctor lives across the road.',
    '/la fam dɔ̃ lə fis ɛ med.sɛ̃ a.bit ɑ̃ fas/',
    'lah FAMM dohⁿ luh FEESS eh mayd-SEHⁿ · ah-beet ahⁿ FASS',
    ['possession', 'dont'], FCVDR),
  sent(1266, 'Sa porte est bleue.', 'Its door is blue.',
    '/sa pɔʁt ɛ blø/', 'sah PORT eh BLUH', ['entree', 'court']),
  sent(1267, 'La maison dont la porte est bleue est à vendre.',
    'The house with the blue door is for sale.',
    '/la mɛ.zɔ̃ dɔ̃ la pɔʁt ɛ blø ɛ.t a vɑ̃dʁ/',
    'lah meh-ZOHⁿ dohⁿ lah PORT eh BLUH · eh tah VAHⁿDR',
    ['possession', 'dont'], FCVDR),
  sent(1268, 'Je connais son frère.', 'I know her brother.',
    '/ʒə kɔ.nɛ sɔ̃ fʁɛʁ/', 'zhuh koh-NEH sohⁿ FREHR', ['entree', 'court']),
  sent(1269, "La voisine dont je connais le frère travaille à l'hôpital.",
    'The neighbour whose brother I know works at the hospital.',
    '/la vwa.zin dɔ̃ ʒə kɔ.nɛ lə fʁɛʁ tʁa.vaj a lɔ.pi.tal/',
    'lah vwah-ZEEN dohⁿ zhuh koh-neh luh FREHR · trah-vahy ah loh-pee-TAL',
    ['possession', 'dont', 'ordre'], FCVDR),
  sent(1270, 'Ses fenêtres donnent sur la cour.', 'Its windows look onto the courtyard.',
    '/se fə.nɛtʁ dɔn syʁ la kuʁ/', 'say fuh-NETR donn sür lah KOOR', ['entree', 'court']),
  sent(1271, "L'appartement dont les fenêtres donnent sur la cour est plus calme.",
    'The flat whose windows look onto the courtyard is quieter.',
    '/la.paʁ.tə.mɑ̃ dɔ̃ le fə.nɛtʁ dɔn syʁ la kuʁ ɛ ply kalm/',
    'lah-par-tuh-MAHⁿ dohⁿ lay fuh-NETR donn sür lah KOOR · eh plü KALM',
    ['possession', 'dont']),
  sent(1272, 'Le collègue dont la voiture est en panne prend le bus.',
    'The colleague whose car has broken down takes the bus.',
    '/lə kɔ.lɛɡ dɔ̃ la vwa.tyʁ ɛ.t ɑ̃ pan pʁɑ̃ lə bys/',
    'luh koh-LEG dohⁿ lah vwah-TÜR eh tahⁿ PANN · prahⁿ luh BÜSS',
    ['possession', 'dont'], FCVDR),
  sent(1273, "L'étudiante dont j'ai oublié le nom revient demain.",
    'The student whose name I have forgotten is coming back tomorrow.',
    '/le.ty.djɑ̃t dɔ̃ ʒe u.bli.je lə nɔ̃ ʁə.vjɛ̃ də.mɛ̃/',
    'lay-tü-DYAHⁿT dohⁿ zhay oo-blee-yay luh NOHⁿ · ruh-vyehⁿ duh-MEHⁿ',
    ['possession', 'dont', 'ordre']),
  sent(1274, 'Le restaurant dont le chef vient de Lyon ouvre à dix-huit heures.',
    'The restaurant whose chef comes from Lyon opens at six.',
    '/lə ʁɛs.to.ʁɑ̃ dɔ̃ lə ʃɛf vjɛ̃ də ljɔ̃ uvʁ a di.zɥi.t œʁ/',
    'luh res-toh-RAHⁿ dohⁿ luh SHEF vyehⁿ duh LYOHⁿ · oovr ah dee-züee-TUHR',
    ['possession', 'dont']),
  sent(1275, 'La rue dont les arbres ont été coupés est méconnaissable.',
    'The street whose trees have been cut down is unrecognisable.',
    '/la ʁy dɔ̃ le.zaʁbʁ ɔ̃.t e.te ku.pe ɛ me.kɔ.nɛ.sabl/',
    'lah RÜ dohⁿ lay ZARBR ohⁿ tay-tay koo-PAY · eh may-koh-neh-SABL',
    ['possession', 'dont']),
  sent(1276, 'Le professeur dont nous lisons le livre enseigne à Genève.',
    'The professor whose book we are reading teaches in Geneva.',
    '/lə pʁɔ.fɛ.sœʁ dɔ̃ nu li.zɔ̃ lə livʁ ɑ̃.sɛɲ a ʒə.nɛv/',
    'luh proh-feh-SUHR dohⁿ noo lee-zohⁿ luh LEEVR · ahⁿ-seny ah zhuh-NEV',
    ['possession', 'dont', 'ordre']),
  sent(1277, "L'immeuble dont le concierge s'appelle Théo date des années trente.",
    'The building whose caretaker is called Théo dates from the thirties.',
    '/li.mœbl dɔ̃ lə kɔ̃.sjɛʁʒ sa.pɛl te.o dat de.za.ne tʁɑ̃t/',
    'lee-MUHBL dohⁿ luh kohⁿ-SYEHRZH sah-pel tay-OH · dat day zah-nay TRAHⁿT',
    ['possession', 'dont']),
  sent(1278, "L'amie dont la sœur habite à Lyon vient me voir en juin.",
    'The friend whose sister lives in Lyon is coming to see me in June.',
    '/la.mi dɔ̃ la sœʁ a.bit a ljɔ̃ vjɛ̃ mə vwaʁ ɑ̃ ʒɥɛ̃/',
    'lah-MEE dohⁿ lah SUHR ah-beet ah LYOHⁿ · vyehⁿ muh vwar ahⁿ ZHÜEHⁿ',
    ['possession', 'dont'], FCVDR),
  sent(1279, 'Le dossier dont la première page manque est sur le bureau.',
    'The file whose first page is missing is on the desk.',
    '/lə dɔ.sje dɔ̃ la pʁə.mjɛʁ paʒ mɑ̃k ɛ syʁ lə by.ʁo/',
    'luh doh-SYAY dohⁿ lah pruh-myehr PAZH mahⁿk · eh sür luh bü-ROH',
    ['possession', 'dont']),
  sent(1280, 'La ville dont je connais bien le centre a beaucoup changé.',
    'The city whose centre I know well has changed a lot.',
    '/la vil dɔ̃ ʒə kɔ.nɛ bjɛ̃ lə sɑ̃tʁ a bo.ku ʃɑ̃.ʒe/',
    'lah VEEL dohⁿ zhuh koh-neh byehⁿ luh SAHⁿTR · a boh-koo shahⁿ-ZHAY',
    ['possession', 'dont', 'ordre', 'contraste']),
  gap(1281, 'Le club dont les membres sont motivés se réunit le jeudi.',
    'The club whose members are keen meets on Thursdays.',
    '/lə klœb dɔ̃ le mɑ̃bʁ sɔ̃ mɔ.ti.ve sə ʁe.y.ni lə ʒø.di/',
    'luh KLUHB dohⁿ lay MAHⁿBR sohⁿ moh-tee-VAY · suh ray-ü-nee luh zhuh-DEE',
    'Le club dont ___ membres sont motivés se réunit le jeudi.  [SES membres]',
    "Après dont, on écrit les, jamais ses. EN: after dont you write les, never ses.",
    ['tache', 'possession']),
  gap(1282, 'La maison dont je connais les propriétaires est vide.',
    'The house whose owners I know is empty.',
    '/la mɛ.zɔ̃ dɔ̃ ʒə kɔ.nɛ le pʁɔ.pʁi.je.tɛʁ ɛ vid/',
    'lah meh-ZOHⁿ dohⁿ zhuh koh-neh lay proh-pree-ay-TEHR · eh VEED',
    'La maison dont je connais ___ propriétaires est vide.  [SES propriétaires]',
    "Le possessif disparaît : dont le porte déjà. EN: the possessive goes; dont already carries it.",
    ['tache', 'possession']),
  sent(1283, "Le voisin dont j'ai gardé les clés revient dimanche.",
    'The neighbour whose keys I looked after is back on Sunday.',
    "/lə vwa.zɛ̃ dɔ̃ ʒe ɡaʁ.de le kle ʁə.vjɛ̃ di.mɑ̃ʃ/",
    'luh vwah-ZEHⁿ dohⁿ zhay gar-day lay KLAY · ruh-vyehⁿ dee-MAHⁿSH',
    ['possession', 'dont', 'ordre']),
  rule(1284, 'Après dont, la chose possédée prend le, la ou les.',
    'After dont, the thing owned takes le, la or les.',
    'Que prend la chose possédée après dont ?',
    "L'article, jamais le possessif. EN: the article, never the possessive.",
    ['regle', 'possession']),
  rule(1285, 'On n’écrit jamais dont son, dont sa ni dont ses.',
    'You never write dont son, dont sa or dont ses.',
    'Quelle suite est impossible après dont ?',
    'Le possessif dirait le propriétaire une deuxième fois. EN: the possessive would name the owner twice.',
    ['regle', 'possession']),
];

/* ── ACT 5 · OÙ, LE LIEU · 1288-1303 ─────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1288, 'Je suis né dans cette ville.', 'I was born in this city.',
    '/ʒə sɥi ne dɑ̃ sɛt vil/', 'zhuh süee NAY dahⁿ set VEEL', ['entree', 'court']),
  sent(1289, 'La ville où je suis né compte dix mille habitants.',
    'The city I was born in has ten thousand inhabitants.',
    '/la vil u ʒə sɥi ne kɔ̃t di mil a.bi.tɑ̃/',
    'lah VEEL oo zhuh süee NAY · kohⁿt dee meel ah-bee-TAHⁿ',
    ['lieu', 'ou'], FCVDR),
  sent(1290, "J'habite dans cette rue depuis trois ans.",
    'I have lived in this street for three years.',
    '/ʒa.bit dɑ̃ sɛt ʁy də.pɥi tʁwa.zɑ̃/',
    'zhah-BEET dahⁿ set RÜ · duh-püee trwah-ZAHⁿ', ['entree', 'court']),
  sent(1291, "La rue où j'habite descend vers le fleuve.",
    'The street I live in runs down towards the river.',
    '/la ʁy u ʒa.bit de.sɑ̃ vɛʁ lə flœv/',
    'lah RÜ oo zhah-BEET · day-sahⁿ vehr luh FLUHV',
    ['lieu', 'ou'], FCVDR),
  sent(1292, "L'épicerie où on trouve du pain ouvre à six heures.",
    'The grocery where you can find bread opens at six.',
    '/le.pis.ʁi u ɔ̃ tʁuv dy pɛ̃ uvʁ a si.zœʁ/',
    'lay-peess-REE oo ohⁿ troov dü PEHⁿ · oovr ah see-ZUHR',
    ['lieu', 'ou']),
  sent(1293, 'La bibliothèque où je travaille ferme à vingt et une heures.',
    'The library I work in closes at nine.',
    '/la bi.bli.jɔ.tɛk u ʒə tʁa.vaj fɛʁm a vɛ̃.t e y.n œʁ/',
    'lah bee-blee-oh-TEK oo zhuh trah-VAHY · fehrm ah vehⁿ tay ü-NUHR',
    ['lieu', 'ou'], FCVDR),
  sent(1294, 'Le parc où je cours le samedi est à trois minutes.',
    'The park I run in on Saturdays is three minutes away.',
    '/lə paʁk u ʒə kuʁ lə sam.di ɛ.t a tʁwa mi.nyt/',
    'luh PARK oo zhuh koor luh sam-DEE · eh tah trwah mee-NÜT',
    ['lieu', 'ou']),
  sent(1295, 'La seule pièce où le soleil entre est la cuisine.',
    'The only room the sun comes into is the kitchen.',
    '/la sœl pjɛs u lə sɔ.lɛj ɑ̃tʁ ɛ la kɥi.zin/',
    'lah suhl PYESS oo luh soh-LEHY AHⁿTR · eh lah küee-ZEEN',
    ['lieu', 'ou']),
  sent(1296, 'Le pays où elle a grandi est le Sénégal.',
    'The country she grew up in is Senegal.',
    '/lə pe.i u ɛl a ɡʁɑ̃.di ɛ lə se.ne.ɡal/',
    'luh pay-EE oo el a grahⁿ-DEE · eh luh say-nay-GAL',
    ['lieu', 'ou'], FCVDR),
  sent(1297, 'Le café où nous avons nos habitudes a changé de propriétaire.',
    'The café where we are regulars has changed hands.',
    '/lə ka.fe u nu.za.vɔ̃ no.za.bi.tyd a ʃɑ̃.ʒe də pʁɔ.pʁi.je.tɛʁ/',
    'luh kah-FAY oo noo zah-vohⁿ noh zah-bee-TÜD · a shahⁿ-zhay duh proh-pree-ay-TEHR',
    ['lieu', 'ou']),
  sent(1298, "Le village où mes grands-parents vivaient n'existe plus.",
    'The village my grandparents lived in no longer exists.',
    '/lə vi.laʒ u me ɡʁɑ̃.pa.ʁɑ̃ vi.vɛ nɛɡ.zist ply/',
    'luh vee-LAZH oo may grahⁿ-pah-RAHⁿ vee-VEH · neg-zeest PLÜ',
    ['lieu', 'ou'], FCVDR),
  sent(1299, 'La gare où tu descends est la troisième.',
    'The station you get off at is the third one.',
    '/la ɡaʁ u ty de.sɑ̃ ɛ la tʁwa.zjɛm/',
    'lah GAR oo tü day-SAHⁿ · eh lah trwah-ZYEM',
    ['lieu', 'ou']),
  gap(1300, 'L’immeuble où je loge date des années trente.',
    'The building I am staying in dates from the thirties.',
    '/li.mœbl u ʒə lɔʒ dat de.za.ne tʁɑ̃t/',
    'lee-MUHBL oo zhuh LOZH · dat day zah-nay TRAHⁿT',
    "L'immeuble ___ je loge date des années trente.  [loger DANS un immeuble]",
    'Un lieu, donc où, quelle que soit la préposition. EN: a place, so où, whatever the preposition was.',
    ['tache', 'lieu']),
  gap(1301, 'La salle où le cours a lieu est au deuxième étage.',
    'The room the class is held in is on the second floor.',
    '/la sal u lə kuʁ a ljø ɛ.t o dø.zjɛm e.taʒ/',
    'lah SAL oo luh koor a LYUH · eh toh deu-zyem ay-TAZH',
    'La salle ___ le cours a lieu est au deuxième étage.  [avoir lieu DANS une salle]',
    'Une salle est un endroit. EN: a room is a place.',
    ['tache', 'lieu']),
  rule(1302, 'Un endroit prend où, quelle que soit la préposition de départ.',
    'A place takes où, whatever preposition the short sentence used.',
    'Quel mot prend un lieu ?',
    'dans, à, sur, chez : tous fondus dans où. EN: dans, à, sur and chez all fuse into où.',
    ['regle', 'lieu']),
  rule(1303, 'On n’écrit jamais une préposition devant où.',
    'You never write a preposition in front of où.',
    'Peut-on écrire dans où ou à où ?',
    'Non : où la contient déjà. EN: no: où already contains it.',
    ['regle', 'lieu']),
];

/* ── ACT 6 · OÙ, LE MOMENT · 1306-1325 ───────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1306, "Je l'ai rencontrée ce jour-là.", 'I met her that day.',
    '/ʒə le ʁɑ̃.kɔ̃.tʁe sə ʒuʁ la/', 'zhuh lay rahⁿ-kohⁿ-TRAY suh zhoor LAH', ['entree', 'court']),
  sent(1307, "Le jour où je l'ai rencontrée, il neigeait.",
    'The day I met her, it was snowing.',
    '/lə ʒuʁ u ʒə le ʁɑ̃.kɔ̃.tʁe il nɛ.ʒɛ/',
    'luh ZHOOR oo zhuh lay rahⁿ-kohⁿ-TRAY · eel neh-ZHEH',
    ['moment', 'ou'], FCVDR),
  sent(1308, 'Nous avons déménagé cette année-là.', 'We moved house that year.',
    '/nu.za.vɔ̃ de.me.na.ʒe sɛt a.ne la/',
    'noo zah-vohⁿ day-may-nah-ZHAY set ah-nay LAH', ['entree', 'court']),
  sent(1309, "L'année où nous avons déménagé, tout a changé.",
    'The year we moved house, everything changed.',
    '/la.ne u nu.za.vɔ̃ de.me.na.ʒe tu.t a ʃɑ̃.ʒe/',
    'lah-NAY oo noo zah-vohⁿ day-may-nah-ZHAY · too tah shahⁿ-ZHAY',
    ['moment', 'ou'], FCVDR),
  sent(1310, 'Il a appelé à ce moment-là.', 'He rang at that moment.',
    '/il a a.pə.le a sə mɔ.mɑ̃ la/', 'eel a ah-puh-LAY ah suh moh-mahⁿ LAH', ['entree', 'court']),
  sent(1311, 'Le moment où il a appelé était très mal choisi.',
    'The moment he rang was very badly chosen.',
    '/lə mɔ.mɑ̃ u il a a.pə.le e.tɛ tʁɛ mal ʃwa.zi/',
    'luh moh-MAHⁿ oo eel a ah-puh-LAY · ay-teh treh mal shwah-ZEE',
    ['moment', 'ou']),
  sent(1312, "La semaine où elle est partie, le bureau était vide.",
    'The week she left, the office was empty.',
    '/la sə.mɛn u ɛl ɛ paʁ.ti lə by.ʁo e.tɛ vid/',
    'lah suh-MENN oo el eh par-TEE · luh bü-roh ay-teh VEED',
    ['moment', 'ou'], FCVDR),
  sent(1313, "L'heure où le train arrive dépend du trafic.",
    'The time the train arrives depends on the traffic.',
    '/lœʁ u lə tʁɛ̃ a.ʁiv de.pɑ̃ dy tʁa.fik/',
    'LUHR oo luh trehⁿ ah-REEV · day-pahⁿ dü trah-FEEK',
    ['moment', 'ou']),
  sent(1314, "L'époque où on roulait sans casque est finie.",
    'The days when people cycled without a helmet are over.',
    '/le.pɔk u ɔ̃ ʁu.lɛ sɑ̃ kask ɛ fi.ni/',
    'lay-POK oo ohⁿ roo-leh sahⁿ KASK · eh fee-NEE',
    ['moment', 'ou']),
  sent(1315, "Le soir où nous avons visité l'appartement, il pleuvait.",
    'The evening we viewed the flat, it was raining.',
    '/lə swaʁ u nu.za.vɔ̃ vi.zi.te la.paʁ.tə.mɑ̃ il plø.vɛ/',
    'luh SWAR oo noo zah-vohⁿ vee-zee-TAY lah-par-tuh-MAHⁿ · eel pluh-VEH',
    ['moment', 'ou'], FCVDR),
  sent(1316, 'Le matin où tu déménages, prends le premier camion.',
    'On the morning you move, take the first van.',
    '/lə ma.tɛ̃ u ty de.me.naʒ pʁɑ̃ lə pʁə.mje ka.mjɔ̃/',
    'luh mah-TEHⁿ oo tü day-may-NAZH · prahⁿ luh pruh-myay kah-MYOHⁿ',
    ['moment', 'ou']),
  sent(1317, "La fois où j'ai oublié mes clés reste mémorable.",
    'The time I forgot my keys is still memorable.',
    '/la fwa u ʒe u.bli.je me kle ʁɛst me.mɔ.ʁabl/',
    'lah FWAH oo zhay oo-blee-yay may KLAY · rest may-moh-RABL',
    ['moment', 'ou'], FCVDR),
  sent(1318, 'Le printemps où le fleuve est monté, la rue était fermée.',
    'The spring the river rose, the street was closed.',
    '/lə pʁɛ̃.tɑ̃ u lə flœv ɛ mɔ̃.te la ʁy e.tɛ fɛʁ.me/',
    'luh prehⁿ-TAHⁿ oo luh fluhv eh mohⁿ-TAY · lah rü ay-teh fehr-MAY',
    ['moment', 'ou']),
  sent(1319, "Le jour où il a plu le plus, personne n'est venu.",
    'The day it rained most, nobody came.',
    '/lə ʒuʁ u il a ply lə ply pɛʁ.sɔn nɛ və.ny/',
    'luh ZHOOR oo eel a plü luh PLÜ · pehr-sonn neh vuh-NÜ',
    ['moment', 'ou']),
  sent(1320, 'Au moment où tu arrives, le magasin ferme.',
    'Just as you arrive, the shop closes.',
    '/o mɔ.mɑ̃ u ty a.ʁiv lə ma.ɡa.zɛ̃ fɛʁm/',
    'oh moh-MAHⁿ oo tü ah-REEV · luh mah-gah-ZEHⁿ FEHRM',
    ['moment', 'ou', 'locution']),
  sent(1321, 'Le lundi où le cours commence, apporte ton dossier.',
    'On the Monday the course starts, bring your file.',
    '/lə lœ̃.di u lə kuʁ kɔ.mɑ̃s a.pɔʁt tɔ̃ dɔ.sje/',
    'luh luhⁿ-DEE oo luh koor koh-MAHⁿSS · ah-port tohⁿ doh-SYAY',
    ['moment', 'ou']),
  gap(1322, "Le jour où j'ai signé le bail était un vendredi.",
    'The day I signed the lease was a Friday.',
    '/lə ʒuʁ u ʒe si.ɲe lə baj e.tɛ œ̃ vɑ̃.dʁə.di/',
    'luh ZHOOR oo zhay see-nyay luh BAHY · ay-teh uhⁿ vahⁿ-druh-DEE',
    "Le jour ___ j'ai signé le bail était un vendredi.  [CE JOUR-LÀ]",
    'Un moment, donc où, jamais quand. EN: a moment, so où, never quand.',
    ['tache', 'moment']),
  gap(1323, "L'année où elle a commencé ses études a été la plus dure.",
    'The year she started her studies was the hardest.',
    '/la.ne u ɛl a kɔ.mɑ̃.se se.ze.tyd a e.te la ply dyʁ/',
    'lah-NAY oo el a koh-mahⁿ-SAY say zay-TÜD · a ay-tay lah plü DÜR',
    "L'année ___ elle a commencé ses études a été la plus dure.  [CETTE ANNÉE-LÀ]",
    "L'anglais dirait when. Le français dit où. EN: English says when, French says où.",
    ['tache', 'moment']),
  rule(1324, 'Un moment prend où, jamais quand.',
    'A moment takes où, never quand.',
    'Que prend un nom de temps ?',
    "Le jour, l'année, le moment, la fois : tous prennent où. EN: day, year, moment, time: all take où.",
    ['regle', 'moment']),
  rule(1325, 'quand pose une question ou ouvre une phrase ; il ne reprend jamais un nom.',
    'quand asks a question or opens a clause; it never picks up a noun.',
    'À quoi sert quand, alors ?',
    "« Quand pars-tu » ou « Quand je suis arrivé, il pleuvait ». EN: a question, or the opening of a whole clause.",
    ['regle', 'moment']),
];

/* ── ACT 7 · À QUI, AVEC QUI, CHEZ QUI · 1328-1345 ───────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1328, "J'ai écrit à cette personne.", 'I wrote to that person.',
    '/ʒe e.kʁi a sɛt pɛʁ.sɔn/', 'zhay ay-KREE ah set pehr-SONN', ['entree', 'court']),
  sent(1329, "La personne à qui j'ai écrit travaille au bureau du logement.",
    'The person I wrote to works at the housing office.',
    '/la pɛʁ.sɔn a ki ʒe e.kʁi tʁa.vaj o by.ʁo dy lɔʒ.mɑ̃/',
    'lah pehr-SONN ah kee zhay ay-KREE · trah-vahy oh bü-roh dü lozh-MAHⁿ',
    ['personne', 'preposition'], FCVDR),
  sent(1330, 'Je pars avec ce collègue.', 'I am travelling with this colleague.',
    '/ʒə paʁ a.vɛk sə kɔ.lɛɡ/', 'zhuh PAR ah-vek suh koh-LEG', ['entree', 'court']),
  sent(1331, 'Le collègue avec qui je pars connaît bien la route.',
    'The colleague I am travelling with knows the road well.',
    '/lə kɔ.lɛɡ a.vɛk ki ʒə paʁ kɔ.nɛ bjɛ̃ la ʁut/',
    'luh koh-LEG ah-vek kee zhuh PAR · koh-neh byehⁿ lah ROOT',
    ['personne', 'preposition'], FCVDR),
  sent(1332, "J'ai dormi chez ces amis.", 'I slept at these friends’ place.',
    '/ʒe dɔʁ.mi ʃe se.za.mi/', 'zhay dor-MEE shay say zah-MEE', ['entree', 'court']),
  sent(1333, "Les amis chez qui j'ai dormi habitent près du parc.",
    'The friends I stayed with live near the park.',
    '/le.za.mi ʃe ki ʒe dɔʁ.mi a.bit pʁɛ dy paʁk/',
    'lay zah-MEE shay kee zhay dor-MEE · ah-beet preh dü PARK',
    ['personne', 'preposition'], FCVDR),
  sent(1334, 'La voisine pour qui je garde le chat rentre dimanche.',
    'The neighbour I am looking after the cat for gets back on Sunday.',
    '/la vwa.zin puʁ ki ʒə ɡaʁd lə ʃa ʁɑ̃tʁ di.mɑ̃ʃ/',
    'lah vwah-ZEEN poor kee zhuh gard luh SHA · rahⁿtr dee-MAHⁿSH',
    ['personne', 'preposition']),
  sent(1335, 'Le technicien sans qui rien ne marche passe le mardi.',
    'The technician nothing works without comes on Tuesdays.',
    '/lə tɛk.ni.sjɛ̃ sɑ̃ ki ʁjɛ̃ nə maʁʃ pas lə maʁ.di/',
    'luh tek-nee-SYEHⁿ sahⁿ kee ryehⁿ nuh MARSH · pass luh mar-DEE',
    ['personne', 'preposition']),
  sent(1336, "La conseillère à qui tu dois remettre le dossier s'appelle madame Roy.",
    'The adviser you have to hand the file to is called Madame Roy.',
    '/la kɔ̃.sɛ.jɛʁ a ki ty dwa ʁə.mɛtʁ lə dɔ.sje sa.pɛl ma.dam ʁwa/',
    'lah kohⁿ-seh-YEHR ah kee tü dwah ruh-METR luh doh-SYAY · sah-pel mah-damm RWA',
    ['personne', 'preposition']),
  sent(1337, 'Les gens avec qui nous partageons la cuisine sont très calmes.',
    'The people we share the kitchen with are very quiet.',
    '/le ʒɑ̃ a.vɛk ki nu paʁ.ta.ʒɔ̃ la kɥi.zin sɔ̃ tʁɛ kalm/',
    'lay ZHAHⁿ ah-vek kee noo par-tah-ZHOHⁿ lah küee-ZEEN · sohⁿ treh KALM',
    ['personne', 'preposition'], FCVDR),
  sent(1338, "L'ami chez qui je loge cette semaine travaille de nuit.",
    'The friend I am staying with this week works nights.',
    '/la.mi ʃe ki ʒə lɔʒ sɛt sə.mɛn tʁa.vaj də nɥi/',
    'lah-MEE shay kee zhuh lozh set suh-MENN · trah-vahy duh NÜEE',
    ['personne', 'preposition']),
  sent(1339, "La personne à qui je pense n'est pas dans la salle.",
    'The person I am thinking of is not in the room.',
    '/la pɛʁ.sɔn a ki ʒə pɑ̃s nɛ pa dɑ̃ la sal/',
    'lah pehr-SONN ah kee zhuh PAHⁿSS · neh pa dahⁿ lah SAL',
    ['personne', 'preposition']),
  sent(1340, "La personne à qui j'ai parlé hier m'a tout expliqué.",
    'The person I spoke to yesterday explained everything to me.',
    '/la pɛʁ.sɔn a ki ʒe paʁ.le jɛʁ ma tu.t ɛks.pli.ke/',
    'lah pehr-SONN ah kee zhay par-LAY YEHR · ma too teks-plee-KAY',
    ['personne', 'preposition', 'contraste'], FCVDR),
  sent(1341, 'Le médecin chez qui elle va est à dix minutes.',
    'The doctor she goes to is ten minutes away.',
    '/lə med.sɛ̃ ʃe ki ɛl va ɛ.t a di mi.nyt/',
    'luh mayd-SEHⁿ shay kee el VA · eh tah dee mee-NÜT',
    ['personne', 'preposition']),
  gap(1342, "La responsable à qui tu remets ton loyer s'appelle Awa.",
    'The manager you hand your rent to is called Awa.',
    '/la ʁɛs.pɔ̃.sabl a ki ty ʁə.mɛ tɔ̃ lwa.je sa.pɛl a.wa/',
    'lah res-pohⁿ-SABL ah kee tü ruh-meh tohⁿ lwah-YAY · sah-pel ah-WAH',
    "La responsable ___ tu remets ton loyer s'appelle Awa.  [remettre À quelqu'un]",
    'remettre à, et le à reste écrit. EN: remettre takes à, and the à stays written.',
    ['tache', 'personne']),
  gap(1343, 'Les voisins chez qui tu peux laisser un colis habitent au deuxième.',
    'The neighbours you can leave a parcel with live on the second floor.',
    '/le vwa.zɛ̃ ʃe ki ty pø lɛ.se œ̃ kɔ.li a.bit o dø.zjɛm/',
    'lay vwah-ZEHⁿ shay kee tü puh leh-say uhⁿ koh-LEE · ah-beet oh deu-ZYEM',
    "Les voisins ___ tu peux laisser un colis habitent au deuxième.  [laisser CHEZ quelqu'un]",
    'chez ne fusionne avec rien. EN: chez fuses with nothing.',
    ['tache', 'personne']),
  rule(1344, "Avec une personne, la préposition s'écrit en entier, puis qui.",
    'With a person, the preposition is written in full, then qui.',
    'Que fait la préposition devant une personne ?',
    'Elle reste visible : à qui, avec qui, chez qui. EN: it stays visible.',
    ['regle', 'personne']),
  rule(1345, 'à qui, avec qui, chez qui, pour qui, sans qui.',
    'to whom, with whom, at whose place, for whom, without whom.',
    'Quelles prépositions marchent avec qui ?',
    'Cinq prépositions très courantes, un seul pronom. EN: five very common prepositions, one pronoun.',
    ['regle', 'liste']),
];

/* ── ACT 8 · JAMAIS À LA FIN · 1348-1365 ─────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1348, 'Le village dont je viens compte trois cents habitants.',
    'The village I come from has three hundred inhabitants.',
    '/lə vi.laʒ dɔ̃ ʒə vjɛ̃ kɔ̃t tʁwa sɑ̃ a.bi.tɑ̃/',
    'luh vee-LAZH dohⁿ zhuh VYEHⁿ · kohⁿt trwah sahⁿ ah-bee-TAHⁿ',
    ['fin', 'dont'], FCVDR),
  sent(1349, 'Le bureau où je travaille est au troisième étage.',
    'The office I work in is on the third floor.',
    '/lə by.ʁo u ʒə tʁa.vaj ɛ.t o tʁwa.zjɛm e.taʒ/',
    'luh bü-ROH oo zhuh trah-VAHY · eh toh trwah-zyem ay-TAZH',
    ['fin', 'ou'], FCVDR),
  sent(1350, "La personne avec qui je travaille s'appelle Awa.",
    'The person I work with is called Awa.',
    '/la pɛʁ.sɔn a.vɛk ki ʒə tʁa.vaj sa.pɛl a.wa/',
    'lah pehr-SONN ah-vek kee zhuh trah-VAHY · sah-pel ah-WAH',
    ['fin', 'personne'], FCVDR),
  sent(1351, 'Le sujet dont nous avons parlé est délicat.',
    'The topic we talked about is a delicate one.',
    '/lə sy.ʒɛ dɔ̃ nu.za.vɔ̃ paʁ.le ɛ de.li.ka/',
    'luh sü-ZHEH dohⁿ noo zah-vohⁿ par-LAY · eh day-lee-KA',
    ['fin', 'dont']),
  sent(1352, "L'ami que j'attends arrive à midi.",
    'The friend I am waiting for arrives at noon.',
    '/la.mi kə ʒa.tɑ̃ a.ʁiv a mi.di/',
    'lah-MEE kuh zhah-TAHⁿ · ah-reev ah mee-DEE',
    ['fin', 'sans-preposition'], FCVDR),
  sent(1353, 'La personne que je cherche est déjà partie.',
    'The person I am looking for has already left.',
    '/la pɛʁ.sɔn kə ʒə ʃɛʁʃ ɛ de.ʒa paʁ.ti/',
    'lah pehr-SONN kuh zhuh SHEHRSH · eh day-zhah par-TEE',
    ['fin', 'sans-preposition']),
  sent(1354, "La musique que j'écoute le matin est très calme.",
    'The music I listen to in the morning is very calm.',
    '/la my.zik kə ʒe.kut lə ma.tɛ̃ ɛ tʁɛ kalm/',
    'lah mü-ZEEK kuh zhay-KOOT luh mah-TEHⁿ · eh treh KALM',
    ['fin', 'sans-preposition'], FCVDR),
  sent(1355, 'Le film que nous regardons dure trois heures.',
    'The film we are watching lasts three hours.',
    '/lə film kə nu ʁə.ɡaʁ.dɔ̃ dyʁ tʁwa.z œʁ/',
    'luh FEELM kuh noo ruh-gar-DOHⁿ · dür trwah-ZUHR',
    ['fin', 'sans-preposition']),
  sent(1356, "Le voisin à qui j'ai répondu n'a rien dit.",
    'The neighbour I answered said nothing.',
    '/lə vwa.zɛ̃ a ki ʒe ʁe.pɔ̃.dy na ʁjɛ̃ di/',
    'luh vwah-ZEHⁿ ah kee zhay ray-pohⁿ-DÜ · na ryehⁿ DEE',
    ['fin', 'personne']),
  sent(1357, "La chose dont j'ai peur est très simple.",
    'The thing I am afraid of is very simple.',
    '/la ʃoz dɔ̃ ʒe pœʁ ɛ tʁɛ sɛ̃pl/',
    'lah SHOZ dohⁿ zhay PUHR · eh treh SEHⁿPL',
    ['fin', 'dont'], FCVDR),
  sent(1358, "Le colis dont je m'occupe arrive demain.",
    'The parcel I am dealing with arrives tomorrow.',
    '/lə kɔ.li dɔ̃ ʒə mɔ.kyp a.ʁiv də.mɛ̃/',
    'luh koh-LEE dohⁿ zhuh moh-KÜP · ah-reev duh-MEHⁿ',
    ['fin', 'dont']),
  sent(1359, 'Les gens chez qui nous allons dîner habitent au bout de la rue.',
    'The people we are going to for dinner live at the end of the street.',
    '/le ʒɑ̃ ʃe ki nu.za.lɔ̃ di.ne a.bit o bu də la ʁy/',
    'lay ZHAHⁿ shay kee noo zah-lohⁿ dee-NAY · ah-beet oh boo duh lah RÜ',
    ['fin', 'personne']),
  sent(1360, "Le dossier dont tu as besoin n'est pas celui que tu regardes.",
    'The file you need is not the one you are looking at.',
    '/lə dɔ.sje dɔ̃ ty a bə.zwɛ̃ nɛ pa sə.lɥi kə ty ʁə.ɡaʁd/',
    'luh doh-SYAY dohⁿ tü a buh-ZWEHⁿ · neh pa suh-lüee kuh tü ruh-GARD',
    ['fin', 'contraste']),
  sent(1361, "La collègue à qui tu penses est celle que tu as rencontrée hier.",
    'The colleague you are thinking of is the one you met yesterday.',
    '/la kɔ.lɛɡ a ki ty pɑ̃s ɛ sɛl kə ty a ʁɑ̃.kɔ̃.tʁe jɛʁ/',
    'lah koh-LEG ah kee tü PAHⁿSS · eh sel kuh tü a rahⁿ-kohⁿ-TRAY YEHR',
    ['fin', 'contraste'], FCVDR),
  gap(1362, 'La personne avec qui tu voyages doit signer ici.',
    'The person you are travelling with has to sign here.',
    '/la pɛʁ.sɔn a.vɛk ki ty vwa.jaʒ dwa si.ɲe i.si/',
    'lah pehr-SONN ah-vek kee tü vwah-YAZH · dwah see-nyay ee-SEE',
    'La personne ___ tu voyages doit signer ici.  [voyager AVEC quelqu’un]',
    'avec reste écrit, et il ouvre la relative. EN: avec stays written and opens the clause.',
    ['tache', 'fin']),
  gap(1363, "Le livre que je cherche n'est pas ici.",
    'The book I am looking for is not here.',
    '/lə livʁ kə ʒə ʃɛʁʃ nɛ pa.z i.si/',
    'luh LEEVR kuh zhuh SHEHRSH · neh pa zee-SEE',
    "Le livre ___ je cherche n'est pas ici.  [chercher : AUCUNE préposition]",
    "L'anglais dit for, le français ne dit rien. EN: English says for, French says nothing.",
    ['tache', 'sans-preposition']),
  rule(1364, 'Une relative française ne finit jamais par une préposition.',
    'A French relative clause never ends with a preposition.',
    'Où la préposition ne peut-elle jamais être ?',
    'À la fin. Elle ouvre la relative ou elle disparaît dedans. EN: at the end.',
    ['regle', 'fin']),
  rule(1365, "attendre, chercher, écouter, regarder : l’anglais met une préposition, le français non.",
    'to wait FOR, to look FOR, to listen TO, to look AT: English adds a preposition, French does not.',
    'Quels verbes piègent dans l’autre sens ?',
    'Ceux qui sont directs en français et indirects en anglais. EN: those that are direct in French and indirect in English.',
    ['regle', 'sans-preposition']),
];

/* ── ACT 9 · TROIS PORTES, UNE CLÉ · 1368-1381 ───────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1368, "La ville où j'habite est au bord d'un fleuve.",
    'The city I live in is on a river.',
    "/la vil u ʒa.bit ɛ.t o bɔʁ dœ̃ flœv/",
    'lah VEEL oo zhah-BEET · eh toh bor duhⁿ FLUHV',
    ['choix', 'ou'], FCVDR),
  sent(1369, "La ville dont je parle le plus à mes parents, c'est Sherbrooke.",
    'The city I talk about most to my parents is Sherbrooke.',
    '/la vil dɔ̃ ʒə paʁl lə ply a me pa.ʁɑ̃ sɛ ʃɛʁ.bʁuk/',
    'lah VEEL dohⁿ zhuh parl luh PLÜ ah may pah-RAHⁿ · seh shehr-BROOK',
    ['choix', 'dont'], FCVDR),
  sent(1370, 'La ville que je préfère au Québec reste Québec.',
    'The city I prefer in Quebec is still Quebec City.',
    '/la vil kə ʒə pʁe.fɛʁ o ke.bɛk ʁɛst ke.bɛk/',
    'lah VEEL kuh zhuh pray-FEHR oh kay-BEK · rest kay-BEK',
    ['choix', 'que'], FCVDR),
  sent(1371, 'La collègue avec qui je prépare le dossier arrive à huit heures.',
    'The colleague I am preparing the file with gets in at eight.',
    '/la kɔ.lɛɡ a.vɛk ki ʒə pʁe.paʁ lə dɔ.sje a.ʁiv a ɥi.t œʁ/',
    'lah koh-LEG ah-vek kee zhuh pray-PAR luh doh-SYAY · ah-reev ah üee-TUHR',
    ['choix', 'personne']),
  sent(1372, "La collègue dont je t'ai parlé change de service.",
    'The colleague I told you about is moving departments.',
    '/la kɔ.lɛɡ dɔ̃ ʒə te paʁ.le ʃɑ̃ʒ də sɛʁ.vis/',
    'lah koh-LEG dohⁿ zhuh tay par-LAY · shahⁿzh duh sehr-VEESS',
    ['choix', 'dont'], FCVDR),
  sent(1373, "La collègue que j'attends est en retard.",
    'The colleague I am waiting for is late.',
    '/la kɔ.lɛɡ kə ʒa.tɑ̃ ɛ.t ɑ̃ ʁə.taʁ/',
    'lah koh-LEG kuh zhah-TAHⁿ · eh tahⁿ ruh-TAR',
    ['choix', 'que']),
  sent(1374, 'Le jour où nous avons signé, il faisait beau.',
    'The day we signed, the weather was fine.',
    '/lə ʒuʁ u nu.za.vɔ̃ si.ɲe il fə.zɛ bo/',
    'luh ZHOOR oo noo zah-vohⁿ see-NYAY · eel fuh-zeh BOH',
    ['choix', 'ou', 'moment']),
  sent(1375, 'Le jour dont je me souviens le mieux est un dimanche.',
    'The day I remember best is a Sunday.',
    '/lə ʒuʁ dɔ̃ ʒə mə su.vjɛ̃ lə mjø ɛ.t œ̃ di.mɑ̃ʃ/',
    'luh ZHOOR dohⁿ zhuh muh soo-VYEHⁿ luh MYUH · eh tuhⁿ dee-MAHⁿSH',
    ['choix', 'dont'], FCVDR),
  sent(1376, "Le jour que j'ai choisi est un mardi.",
    'The day I picked is a Tuesday.',
    '/lə ʒuʁ kə ʒe ʃwa.zi ɛ.t œ̃ maʁ.di/',
    'luh ZHOOR kuh zhay shwah-ZEE · eh tuhⁿ mar-DEE',
    ['choix', 'que']),
  sent(1377, "L'immeuble dont on refait le toit est le nôtre.",
    'The building whose roof is being redone is ours.',
    '/li.mœbl dɔ̃ ɔ̃ ʁə.fɛ lə twa ɛ lə notʁ/',
    'lee-MUHBL dohⁿ ohⁿ ruh-feh luh TWAH · eh luh NOHTR',
    ['choix', 'dont', 'possession']),
  gap(1378, 'Le quartier dont tout le monde parle est près du fleuve.',
    'The neighbourhood everyone is talking about is near the river.',
    '/lə kaʁ.tje dɔ̃ tu lə mɔ̃d paʁl ɛ pʁɛ dy flœv/',
    'luh kar-TYAY dohⁿ too luh MOHⁿD parl · eh preh dü FLUHV',
    'Le quartier ___ tout le monde parle est près du fleuve.  [parler DE]',
    'Un lieu, et pourtant dont : le verbe décide. EN: a place, and still dont: the verb decides.',
    ['tache', 'choix']),
  gap(1379, 'Le quartier où tout le monde veut habiter est près du fleuve.',
    'The neighbourhood everyone wants to live in is near the river.',
    '/lə kaʁ.tje u tu lə mɔ̃d vø a.bi.te ɛ pʁɛ dy flœv/',
    'luh kar-TYAY oo too luh MOHⁿD vuh ah-bee-TAY · eh preh dü FLUHV',
    'Le quartier ___ tout le monde veut habiter est près du fleuve.  [habiter DANS]',
    'Même nom, autre verbe, autre mot. EN: same noun, different verb, different word.',
    ['tache', 'choix']),
  rule(1380, "Le nom de devant ne décide rien. C'est le verbe qui décide.",
    'The noun in front decides nothing. The verb decides.',
    'Qui choisit le mot de la relative ?',
    'Le verbe et son petit mot, jamais le nom. EN: the verb and its little word, never the noun.',
    ['regle', 'choix']),
  rule(1381, 'Rien du tout : qui ou que, comme dans la leçon précédente.',
    'Nothing at all: qui or que, as in the previous lesson.',
    'Et si le verbe ne réclame aucune préposition ?',
    "Tu restes sur qui et que. EN: you stay with qui and que.",
    ['regle', 'choix']),
];

/* ── ACT 10 · DES PHRASES PLUS LONGUES · 1384-1393 ───────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1384, "L'appartement dont je t'ai parlé est dans la rue où j'ai grandi.",
    'The flat I told you about is in the street I grew up in.',
    '/la.paʁ.tə.mɑ̃ dɔ̃ ʒə te paʁ.le ɛ dɑ̃ la ʁy u ʒe ɡʁɑ̃.di/',
    'lah-par-tuh-MAHⁿ dohⁿ zhuh tay par-LAY · eh dahⁿ lah RÜ oo zhay grahⁿ-DEE',
    ['chaine', 'dont', 'ou'], FCVDR),
  sent(1385, 'La collègue avec qui je travaille habite le quartier où tu vas déménager.',
    'The colleague I work with lives in the neighbourhood you are moving to.',
    '/la kɔ.lɛɡ a.vɛk ki ʒə tʁa.vaj a.bit lə kaʁ.tje u ty va de.me.na.ʒe/',
    'lah koh-LEG ah-vek kee zhuh trah-VAHY · ah-beet luh kar-TYAY oo tü va day-may-nah-ZHAY',
    ['chaine', 'personne', 'ou'], FCVDR),
  sent(1386, "Le jour où j'ai signé, la personne à qui j'avais écrit était là.",
    'The day I signed, the person I had written to was there.',
    '/lə ʒuʁ u ʒe si.ɲe la pɛʁ.sɔn a ki ʒa.vɛ.z e.kʁi e.tɛ la/',
    'luh ZHOOR oo zhay see-NYAY · lah pehr-SONN ah kee zhah-veh ay-KREE · ay-teh LAH',
    ['chaine', 'moment', 'personne']),
  sent(1387, 'Le village dont je viens, où mes parents vivent encore, compte trois cents habitants.',
    'The village I come from, where my parents still live, has three hundred inhabitants.',
    '/lə vi.laʒ dɔ̃ ʒə vjɛ̃ u me pa.ʁɑ̃ viv ɑ̃.kɔʁ kɔ̃t tʁwa sɑ̃ a.bi.tɑ̃/',
    'luh vee-LAZH dohⁿ zhuh VYEHⁿ · oo may pah-rahⁿ veev ahⁿ-KOR · kohⁿt trwah sahⁿ ah-bee-TAHⁿ',
    ['chaine', 'virgules'], FCVDR),
  sent(1388, "Le dossier dont tu as besoin, que j'ai posé sur ton bureau, fait quarante pages.",
    'The file you need, which I put on your desk, is forty pages long.',
    '/lə dɔ.sje dɔ̃ ty a bə.zwɛ̃ kə ʒe po.ze syʁ tɔ̃ by.ʁo fɛ ka.ʁɑ̃t paʒ/',
    'luh doh-SYAY dohⁿ tü a buh-ZWEHⁿ · kuh zhay poh-zay sür tohⁿ bü-ROH · feh kah-rahⁿt PAZH',
    ['chaine', 'virgules']),
  sent(1389, "L'ami chez qui je loge travaille dans l'immeuble où se trouve la bibliothèque.",
    'The friend I am staying with works in the building the library is in.',
    '/la.mi ʃe ki ʒə lɔʒ tʁa.vaj dɑ̃ li.mœbl u sə tʁuv la bi.bli.jɔ.tɛk/',
    'lah-MEE shay kee zhuh LOZH · trah-vahy dahⁿ lee-MUHBL oo suh troov lah bee-blee-oh-TEK',
    ['chaine', 'personne', 'ou'], FCVDR),
  sent(1390, 'Le café où nous allons, dont le propriétaire est italien, ferme à vingt-deux heures.',
    'The café we go to, whose owner is Italian, closes at ten.',
    '/lə ka.fe u nu.za.lɔ̃ dɔ̃ lə pʁɔ.pʁi.je.tɛʁ ɛ.t i.ta.ljɛ̃ fɛʁm a vɛ̃t dø.z œʁ/',
    'luh kah-FAY oo noo zah-LOHⁿ · dohⁿ luh proh-pree-ay-tehr eh tee-tah-LYEHⁿ · fehrm ah vehⁿt duh-ZUHR',
    ['chaine', 'virgules', 'possession']),
  gap(1391, "La personne à qui j'ai écrit travaille dans le bureau où tu vas.",
    'The person I wrote to works in the office you are going to.',
    '/la pɛʁ.sɔn a ki ʒe e.kʁi tʁa.vaj dɑ̃ lə by.ʁo u ty va/',
    'lah pehr-SONN ah kee zhay ay-KREE · trah-vahy dahⁿ luh bü-ROH oo tü VA',
    "La personne à qui j'ai écrit travaille dans le bureau ___ tu vas.  [aller DANS un bureau]",
    'Deux relatives, deux verbes, deux petits mots différents. EN: two clauses, two verbs, two different little words.',
    ['tache', 'chaine']),
  rule(1392, 'Chaque relative colle à son propre nom.',
    'Each clause sticks to its own noun.',
    'Où se place une relative dans une longue phrase ?',
    'Juste après le nom qu’elle décrit, même au milieu. EN: right after the noun it describes, even mid-sentence.',
    ['regle', 'chaine']),
  rule(1393, 'Après les relatives, la phrase principale doit encore arriver à son verbe.',
    'After the clauses, the main sentence still has to reach its verb.',
    'Comment savoir si ta longue phrase tient ?',
    'Relis-la à voix haute : le verbe principal doit arriver. EN: read it aloud; the main verb has to arrive.',
    ['regle', 'chaine']),
];

/* ── ACT 11 · DÉCRIRE UN LIEU ET UNE PERSONNE · 1394-1399 ────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1394, "Je partage avec une étudiante dont le frère travaille à la bibliothèque.",
    'I am sharing with a student whose brother works at the library.',
    '/ʒə paʁ.taʒ a.vɛk yn e.ty.djɑ̃t dɔ̃ lə fʁɛʁ tʁa.vaj a la bi.bli.jɔ.tɛk/',
    'zhuh par-TAZH ah-vek ün ay-tü-DYAHⁿT · dohⁿ luh FREHR trah-vahy ah lah bee-blee-oh-TEK',
    ['tache', 'possession'], FCVDR),
  sent(1395, "C'est la personne avec qui j'ai visité deux fois.",
    'She is the person I viewed it with twice.',
    '/sɛ la pɛʁ.sɔn a.vɛk ki ʒe vi.zi.te dø fwa/',
    'seh lah pehr-SONN ah-vek kee zhay vee-zee-TAY duh FWAH',
    ['tache', 'personne'], FCVDR),
  sent(1396, "Le jour où j'emménage, c'est le premier septembre.",
    'The day I move in is the first of September.',
    '/lə ʒuʁ u ʒɑ̃.me.naʒ sɛ lə pʁə.mje sɛp.tɑ̃bʁ/',
    'luh ZHOOR oo zhahⁿ-may-NAZH · seh luh pruh-myay sep-TAHⁿBR',
    ['tache', 'moment'], FCVDR),
  sent(1397, "Tu es la première personne à qui j'avais envie d'écrire.",
    'You are the first person I wanted to write to.',
    '/ty ɛ la pʁə.mjɛʁ pɛʁ.sɔn a ki ʒa.vɛ ɑ̃.vi de.kʁiʁ/',
    'tü eh lah pruh-myehr pehr-SONN · ah kee zhah-veh ahⁿ-vee day-KREER',
    ['tache', 'personne'], FCVDR),
  sent(1398, "Il y a une épicerie où on trouve du pain jusqu'à tard.",
    'There is a grocery where you can get bread until late.',
    '/il i a yn e.pis.ʁi u ɔ̃ tʁuv dy pɛ̃ ʒys.k a taʁ/',
    'eel ee ah ün ay-peess-REE oo ohⁿ troov dü PEHⁿ · zhüss kah TAR',
    ['tache', 'lieu'], FCVDR),
  sent(1399, 'Le quartier où il se trouve descend vers le fleuve.',
    'The neighbourhood it is in runs down towards the river.',
    '/lə kaʁ.tje u il sə tʁuv de.sɑ̃ vɛʁ lə flœv/',
    'luh kar-TYAY oo eel suh TROOV · day-sahⁿ vehr luh FLUHV',
    ['tache', 'lieu'], FCVDR),
];

/* @@ROWS@@ */

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS, ACT7_ROWS,
  ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Per act, so an act's dictation names only what that act taught. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** Rows a `practice skill: 'speak'` section may name: voiceflash-bearing. */
export const SPEAKABLE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE LONG TEXTS AND THEIR ANSWER KEYS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1's reading: the first morning at the housing office. 168 words. */
export const READING_BUREAU =
  "Nadia est arrivée à Sherbrooke en août, avec deux valises et une adresse. " +
  "Le bureau du logement étudiant se trouve au rez-de-chaussée d'un immeuble en brique, rue Galt.\n\n" +
  "Le premier matin, elle a décrit son appartement idéal en quatre phrases courtes. " +
  "Monsieur Lachance a souri : il avait trente fiches devant lui, et vingt-deux appartements calmes.\n\n" +
  "Alors elle a recommencé, autrement. « L'appartement dont j'ai besoin est calme et près du campus. " +
  "Le quartier où je veux habiter est près du fleuve. " +
  "La personne à qui j'ai écrit la semaine dernière travaille ici. »\n\n" +
  "Trois phrases, trois petits mots différents, et chacun ouvre sa relative au lieu de rester à la fin.\n\n" +
  "Monsieur Lachance a ouvert un classeur. « Voici le dossier dont vous avez besoin pour l'inscription. " +
  "L'immeuble où se trouve le bureau date de mille neuf cent trente. " +
  "La conseillère avec qui vous avez rendez-vous s'appelle madame Roy. " +
  "Le jour où vous déménagez, le concierge doit être prévenu. »\n\n" +
  "Nadia a noté les quatre phrases. Aucune ne finissait par une préposition.";

/** The seven relatives in READING_BUREAU, in text order, for the quiz key. */
export const READING_BUREAU_MOTS = [
  "dont j'ai besoin",
  'où je veux habiter',
  "à qui j'ai écrit",
  'dont vous avez besoin',
  'où se trouve le bureau',
  'avec qui vous avez rendez-vous',
  'où vous déménagez',
] as const;

/** Act 3's reading: the bike workshop, six clauses, four of them adjectives.
 *  147 words. */
export const READING_FIERTE =
  "Théo travaille depuis deux ans dans un atelier de réparation de vélos, rue Wellington.\n\n" +
  "« L'atelier dont je suis le plus fier n'est pas le plus grand. C'est celui du samedi matin, quand les gens du quartier arrivent avec leurs vieilles bicyclettes. " +
  "Le projet dont nous sommes tous contents, c'est l'école de réparation : on y apprend à changer une chambre à air en vingt minutes. " +
  "La seule chose dont je ne suis pas sûr, c'est l'hiver, parce qu'en janvier presque personne ne roule.\n\n" +
  "Ma collègue Awa est responsable des commandes. Les pièces dont elle est responsable arrivent d'Italie, et la facture dont elle s'occupe fait trois pages. " +
  "Et le client dont je me souviens le mieux est entré ici avec un vélo de mille neuf cent soixante. »\n\n" +
  "Six relatives, deux verbes et quatre adjectifs, et toujours le même mot devant. " +
  "Un adjectif réclame de aussi souvent qu'un verbe.";

/** The six dont clauses in READING_FIERTE, in text order, for the quiz key. */
export const READING_FIERTE_DONT = [
  'dont je suis le plus fier',
  'dont nous sommes tous contents',
  'dont je ne suis pas sûr',
  'dont elle est responsable',
  "dont elle s'occupe",
  'dont je me souviens le mieux',
] as const;

/** Act 5's reading: the neighbourhood, place by place. 152 words. */
export const READING_VOISINAGE =
  "Le quartier où Nadia a fini par s'installer tient en six rues.\n\n" +
  "« La rue où j'habite descend vers le fleuve. Au coin, il y a une épicerie où on trouve encore du pain à six heures du matin. " +
  "L'immeuble où je loge date des années trente : les fenêtres sont grandes et le plancher craque. " +
  "La cuisine est la seule pièce où entre le soleil l'après-midi. " +
  "Le parc où je cours le samedi est à trois minutes, et la bibliothèque où je travaille ferme à vingt et une heures. " +
  "Le seul endroit où je ne vais jamais, c'est le centre commercial : il est loin et il est laid. »\n\n" +
  "Six phrases, six lieux, et toujours le même petit mot. " +
  "En anglais on choisirait entre where et in which ; en français il n'y a rien à choisir. " +
  "Une rue, une pièce, un parc, une ville, un pays : tout ce qui est un endroit prend où.";

/** The six places in READING_VOISINAGE, in text order, for the quiz key. */
export const READING_VOISINAGE_LIEUX = [
  "la rue où j'habite",
  'une épicerie où on trouve',
  'l’immeuble où je loge',
  'la seule pièce où entre le soleil',
  'le parc où je cours',
  'la bibliothèque où je travaille',
] as const;

/** Act 7's reading: the co-op letter, all people. 124 words. */
export const READING_LETTRE =
  "La coopérative d'habitation envoie la même lettre à chaque nouveau locataire.\n\n" +
  "« Madame, monsieur, bienvenue. Voici les personnes à qui vous aurez affaire cette année. " +
  "La responsable à qui vous remettez votre loyer s'appelle Awa Diallo, et son bureau est au fond du couloir. " +
  "Le technicien avec qui vous prendrez rendez-vous pour le chauffage passe le mardi. " +
  "Les voisins chez qui vous pouvez laisser un colis habitent au deuxième étage. " +
  "La personne pour qui nous gardons le stationnement numéro quatre n'est pas encore arrivée. " +
  "Et le gardien sans qui rien ne fonctionne ici s'appelle Théo. »\n\n" +
  "Cinq phrases, cinq prépositions différentes, et toutes au même endroit : juste devant qui. " +
  "En anglais, quatre de ces cinq phrases finiraient par leur préposition. " +
  "En français, aucune ne le peut.";

/** The five prepositional relatives in READING_LETTRE, for the quiz key. */
export const READING_LETTRE_PREPS = [
  'à qui vous remettez votre loyer',
  'avec qui vous prendrez rendez-vous',
  'chez qui vous pouvez laisser un colis',
  'pour qui nous gardons le stationnement',
  'sans qui rien ne fonctionne',
] as const;

/** Act 11's model: the message the learner will imitate. 122 words. */
export const READING_ANNONCE_MODELE =
  "Salut Awa,\n\n" +
  "Ça y est, j'ai trouvé. L'appartement dont je t'ai parlé au téléphone est au troisième étage, rue Galt. " +
  "C'est exactement le genre de logement dont j'avais besoin : deux pièces, calme, et à dix minutes du campus à pied. " +
  "Le quartier où il se trouve descend vers le fleuve, et la rue où je vais habiter est bordée d'érables. " +
  "Il y a une épicerie où on trouve du pain jusqu'à tard.\n\n" +
  "Je partage avec une étudiante dont le frère travaille à la bibliothèque. " +
  "C'est la personne avec qui j'ai visité deux fois, et elle est très facile à vivre. " +
  "Le jour où j'emménage, c'est le premier septembre.\n\n" +
  "Viens me voir. Tu es la première personne à qui j'avais envie d'écrire.\n\n" +
  "Nadia";

/** Act 9's reading: the same noun, three different words. 132 words. */
export const READING_CHOIX =
  "Trois phrases sur la même ville, et trois mots différents.\n\n" +
  "« La ville où j'habite est au bord d'un fleuve. » Ici, habiter dans une ville : c'est un lieu, donc où.\n\n" +
  "« La ville dont je parle le plus à mes parents, c'est Sherbrooke. » Ici, parler de : le verbe réclame de, donc dont, même si le nom est un lieu.\n\n" +
  "« La ville que je préfère au Québec reste Québec. » Ici, préférer quelque chose : aucune préposition, donc que.\n\n" +
  "Le nom n'a pas bougé d'une ligne à l'autre. Ce qui a bougé, c'est le verbe.\n\n" +
  "Même chose pour une personne. « La collègue avec qui je prépare le dossier » : préparer avec. " +
  "« La collègue dont je t'ai parlé » : parler de. « La collègue que j'attends » : attendre, qui ne réclame rien.\n\n" +
  "Trois portes, une seule question : qu'est-ce que le verbe réclame.";

/** The three clauses on « la ville », in text order, for the quiz key. */
export const READING_CHOIX_VILLE = [
  "la ville où j'habite",
  'la ville dont je parle le plus',
  'la ville que je préfère',
] as const;

/* \n\nTEXTS3\n\n */



/* ══════════════════════════════════════════════════════════════════════════
 *  §I. WHAT THE APP CAN AND CANNOT TEST HERE
 *
 *  `fold()` strips accents, apostrophes, hyphens, commas, case and spacing.
 *  Measured consequences for this lesson:
 *
 *    dont / que / où           TYPEABLE, distinct in every case
 *    où / ou                   ONE STRING once the accent folds. A typed
 *                              question may NEVER turn on the accent alone;
 *                              acts 5, 6 and 9 test it with mcq where the
 *                              contrast is où against ou.
 *    à qui / a qui             ONE STRING. Never tested typed against itself.
 *    dont le / dont son        TYPEABLE: le and son are different letters,
 *                              and this is the whole point of act 4.
 *    quand / où                TYPEABLE, and this is the point of act 6.
 *    de qui / dont             TYPEABLE.
 * ══════════════════════════════════════════════════════════════════════════ */

export const FOLD_COLLISIONS: [string, string][] = [
  ['où', 'ou'],
  ['à qui', 'a qui'],
  ["qu'il", 'quil'],
];

/** Forms this lesson prints ONLY as a wrong reading (trapDrill promptSound,
 *  commonErrors.wrong). Every one is a real anglophone production. */
export const MEANS_SOMETHING_ELSE = [
  "L'appartement que j'ai besoin est calme.",
  "La femme dont son fils est médecin habite en face.",
  "Le jour quand je suis arrivé, il pleuvait.",
  "La personne que j'ai parlé est très gentille.",
  "Le collègue que je partage le bureau avec arrive tôt.",
  "Le village que je viens de est tout petit.",
] as const;

/** Banned everywhere on a learner surface (house rules 6.1 to 6.3). */
export const BANNED_SUBSTRINGS = ['honest', String.fromCharCode(0x2014), String.fromCharCode(0x203f)] as const;
