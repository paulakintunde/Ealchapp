// b1.23.l1 « Tout, tous, toute, toutes » — the authored corpus, the imports
// and the citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   TOUT AS A SYSTEM. The learner arrives with twenty-odd frozen chunks
//   (measured below, §A.5) and no rule that links them. This lesson owns:
//
//     1  the chunks already known, sorted into four written forms
//     2  tout as a determiner with agreement: tout le, toute la, tous les,
//        toutes les, and with a possessive or a demonstrative
//     3  tous les + time for frequency (tous les deux jours) against toute
//        la + time for duration (toute la journée)
//     4  tout un / toute une, and tout WITHOUT an article (tout retard,
//        toute boîte) as the « each, any » of notices and rules
//     5  tout as a pronoun: everything, invariable, singular verb
//     6  tous and toutes as pronouns, and the pronounced S of pronoun tous
//     7  the place of tout and tous in compound tenses and before an
//        infinitive (j'ai tout compris, ils sont tous partis)
//     8  tout as an adverb (completely) and its one agreement: before a
//        feminine adjective starting with a consonant or an aspirated h
//     9  the fixed expressions (tout à fait, tout à l'heure, en tout cas,
//        malgré tout, tout le temps, de toute façon, après tout)
//    10  tout le monde with a singular verb, tous les deux (both)
//    11  a written message that organises an event
//
//   NOT OWNED, CITED: « tous les » plus a day (a1.08) and « tous les jours »
//   (a1.25) as habit markers; the pronounced S of pronoun tous as a SOUND
//   (sons.06, its row fr.sons.muettes.059 is reused); « tout à fait », « tout
//   à l'heure », « tout à coup » as LIAISON examples (sons.10); « tout ce
//   qui / tout ce que » (b1.13, lequel-ce-qui act 9: cited, never re-taught);
//   « pas du tout / plus du tout » (b1.20, negation-avancee act 9: cited).
//   The subjunctive (b1.14 to b1.16) is kept out of every authored French
//   string. « il faut » is only ever followed by an infinitive here.
//
//   NO UNGRAMMATICAL SENTENCE IS EVER A ROW. Every wrong form lives in a
//   `commonErrors.wrong`, a `trapDrill.promptSound`, a scene bubble or break
//   `wrong`, or a quiz `errorSpot.prompt`.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `expressions-de-quantite` exists (« Les expressions de
//     quantité », domain fondations, levelRange a1-b2). Its sub-themes were
//     set in POSTGRES on 2026-09-25 (les quantités et les mesures, beaucoup
//     peu assez, tout et la totalité); the seed still shows `subThemes: []`
//     until the next publish. Nothing is created at import.
//  2. POSTGRES PROBED 2026-09-25 (read-only, this session): a1 148 rows (max
//     .152), a2 169 (max .170), b1 167 (max .167), b2 37 (max .037), and NO
//     row at or above .1000 at any level. AUTHORED IDS START AT 1000.
//  3. ID BLOCK: b1.23 owns `fr.b1.expressions-de-quantite.1000`-`.1199` AND
//     NOTHING ELSE. Used here: `.1000`-`.1195` (196 rows) in eleven act
//     blocks. Compare full ids, never numbers: the level is part of the id.
//  4. THE SEED CARRIES 18 ROWS OF THIS THEME, ALL a1, NONE about tout. So
//     the 167 published `fr.b1` rows are DB-ONLY and cannot be named here.
//     Eleven of them contain tout/tous/toute(s); the ones this corpus twins
//     are listed in DB_ONLY_TWINS. Dedupe at import (build log open item).
//  5. OWNERSHIP, probed over all 11,209 seed items on 2026-09-25: 273 rows
//     contain tout/tous/toute(s); 84 are named by a shipped lesson. The
//     chunks and the lessons that introduced them:
//       tous les + day         a1.08 (grammarIntroduced: « tous les plus a
//                              plural day, as a reinforced habitual »)
//       tous les jours         a1.25 (« tous les jours as an explicit
//                              habitual marker »), also a2.25, a2.30
//       tout va bien          a1.01; tout se passe bien, ce sera tout: a2.07
//       tout de suite          a1.07 (named), a1.25, a2.07, a2.22
//       tout droit, tout le monde descend   a2.27
//       toute la journée/nuit  a2.30, a2.29; toutes les trois heures a2.28
//       tous [tus], pronoun    sons.06 (« As a PRONOUN the S sounds »),
//                              a2.08 (« le mieux de tous », TOOS)
//       tout à fait, tout à l'heure, tout à coup   sons.10 (liaison)
//     NO A1 OR A2 LESSON NAMES tout in grammarIntroduced as a system: the
//     agreement, the pronoun, the adverb and the place are all unowned.
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN FOR THE EAR:
//       même      MEM     (EHM trips hasPlainNasal; MEM is b1.24's spelling and the seed's)
//       une       ÜNN     (a real /n/ after a single n)
//       semaine   MENN, viennent VYENN, consonne SONN
//     Everything else is spelled for the ear. Pronoun tous is TOOS, the
//     determiner too, toute(s) toot. Names were chosen to avoid a closing
//     plain nasal: Mireille, Hugo, Josée, Fatou, Luc, Élodie. No U+203F tie
//     anywhere, in a respelling or in an IPA field; a liaison consonant
//     moves onto the next syllable (too-ta-FEH).
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.23',
  seq: 23,
  title: 'Tout, Tous, Toute, Toutes',
  sub: 'Tout, tous, toute, toutes',
  canDo: 'Can use tout as a determiner, a pronoun and an adverb with the right agreement, tell frequency (tous les jours) from duration (toute la journée), pronounce pronoun tous with its s, place tout and tous in compound tenses, use the common fixed expressions, and write a message that organises an event',
  prereqUnitIds: ['a1.08', 'a2.05', 'sons.06'],
} as const;

export const LESSON_ID = 'b1.23.l1';
export const THEME = 'expressions-de-quantite';
export const LEVEL = 'b1' as const;

/** ONE block. DB holds .001-.170 in this theme; b1.23 owns 1000-1199. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 * ══════════════════════════════════════════════════════════════════════════ */

export const JOURS_UNIT = 'a1.08';
export const ROUTINE_UNIT = 'a1.25';
export const SALUTATIONS_UNIT = 'a1.01';
export const RESTAURANT_UNIT = 'a2.07';
export const TRANSPORTS_UNIT = 'a2.27';
export const MUETTES_UNIT = 'sons.06';
export const LIAISON_UNIT = 'sons.10';
export const PC_AVOIR_UNIT = 'a2.05';
export const PC_ETRE_UNIT = 'a2.21';
export const COD_UNIT = 'a2.06';
export const CE_QUI_UNIT = 'b1.13';
export const NEGATION_AV_UNIT = 'b1.20';
export const MEME_UNIT = 'b1.24';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
  'b1.19': 19, 'b1.20': 20, 'b1.21': 21, 'b1.22': 22, 'b1.23': 23, 'b1.24': 24,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const JOURS_REF = unitRef(JOURS_UNIT);
export const ROUTINE_REF = unitRef(ROUTINE_UNIT);
export const RESTAURANT_REF = unitRef(RESTAURANT_UNIT);
export const TRANSPORTS_REF = unitRef(TRANSPORTS_UNIT);
export const MUETTES_REF = unitRef(MUETTES_UNIT);
export const LIAISON_REF = unitRef(LIAISON_UNIT);
export const PC_AVOIR_REF = unitRef(PC_AVOIR_UNIT);
export const CE_QUI_REF = refFr(CE_QUI_UNIT);
export const NEGATION_AV_REF = refFr(NEGATION_AV_UNIT);
export const MEME_REF = refFr(MEME_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  The A1 and sons lines are English and every screen that shows one
 *  follows it with the French rendering below. b1.13's line is French.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as A108_REFRAME } from '../jours-terms.ts';
export { REFRAME as S06_REFRAME } from '../muettes-lesson.ts';
export { REFRAME as B113_REFRAME } from './lequel-ce-qui-corpus.ts';

export const A108_REFRAME_FR = "Le en fait une habitude de chaque semaine.";
export const S06_REFRAME_FR = "Muette, sauf s'il y a une raison.";

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE WHOLE SET AGAINST ONE PIECE. Tout never picks a piece: it takes all
 *  of what it covers, without exception. Before a noun it takes that noun's
 *  gender and number (tout le, toute la, tous les, toutes les), because it
 *  is wrapped round that noun. Standing alone it is the whole set itself:
 *  tout (everything), tous and toutes (all of them). In front of an
 *  adjective it means completely, which is still « without exception ».
 *
 *  The reframe deliberately makes a claim only about tout BEFORE A NOUN.
 *  It is silent on the adverb, whose one agreement (toute seule) is a
 *  sound rule, not a noun rule, and act 8 teaches it as the exception it is.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Tout, c'est sans exception. Devant un nom, il en prend la forme.";
export const REFRAME_EN = 'Tout means without exception. Before a noun, it takes that noun’s shape.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Tout s’accorde toujours.',
    why: "False where act 8 has to hold: « tout près », « tout heureuse », « ils sont tout contents » never change. And tout the pronoun (« tout est prêt ») has nothing to agree with.",
  },
  {
    text: 'Tout veut dire all.',
    why: "False four times in this lesson: tout le monde is everybody, tous les jours is every day, tous les deux jours is every OTHER day, tout seul is alone. The all-equals-tout reflex is exactly the act 1 error (« all day » said as tous les jours).",
  },
  {
    text: 'Le s de tous ne se prononce jamais.',
    why: "It is sons.06's exception, and act 6 is built on it: pronoun tous is [tus]. A reframe that act 6 has to contradict is not a reframe.",
  },
  {
    text: 'Tout, c’est l’ensemble ; chaque, c’est un par un.',
    why: "True and useful, and kept as a hack (act 4). As a reframe it fails tout sans article (« tout retard sera facturé »), which means exactly chaque, and it says nothing about agreement, which is most of the lesson.",
  },
  {
    text: 'Tout suit le nom qu’il couvre.',
    why: "It is the second half of the kept reframe, but alone it is wrong for the pronoun and the adverb, which cover no noun. « Sans exception » is what joins all three uses.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-25 and its French is in the
 *  trailing comment. `named only` rows carry no `flashcard` drill.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a1.routines.026',              // tous les jours
    'fr.a2.transports-quotidiens.211', // Terminus, tout le monde descend.
    'fr.a2.au-restaurant.189',         // Je reviens tout de suite.
    'fr.a1.salutations.088',           // Tout va bien
    'fr.a2.au-restaurant.156',         // Ce sera tout ?
    'fr.a2.transports-quotidiens.135', // Continuez tout droit.
  ],
  act2: [
    'fr.a1.jours-et-mois.013',         // Dimanche, toute la famille se retrouve chez grand-mère.  (named only)
    'fr.a2.comparaisons.092',          // Elle chante le mieux de toute la classe.  (named only)
  ],
  act3: [
    'fr.a2.metiers.066',               // Je m'occupe des clients toute la journée.
    'fr.a2.hebergement.102',           // Les voisins font du bruit toute la nuit.
    'fr.a2.symptomes.210',             // Toutes les trois heures, pas plus.
    'fr.a2.pronoms-essentiels.333',    // Oui, j'y vais tous les samedis.
    'fr.a1.jours-et-mois.029',         // Le marché a lieu tous les samedis.  (named only)
  ],
  act4: [
    'fr.a2.metiers.059',               // Et vous voulez faire ça toute votre vie ?
  ],
  act5: [
    'fr.sons.masterclass.037',         // Tout est prêt.
    'fr.a2.au-restaurant.183',         // Ce sera tout pour moi, merci.
    'fr.a2.verbes.157',                // Nous jetons tout.
    'fr.a1.marche.090',                // C'est tout.
  ],
  act6: [
    'fr.sons.muettes.059',             // tous  (sons.06: the pronoun, /tus/)
    'fr.a2.comparaisons.148',          // le mieux de tous
    'fr.sons.jours-et-mois.040',       // tous les jours  (the s is silent)
  ],
  act7: [
    'fr.sons.voyelles.364',            // Tu as tout vu.  (named only)
  ],
  act8: [
    'fr.a1.objets.135',                // Mes gants sont tout blancs.  (named only)
    'fr.a1.objets.128',                // Ses lunettes sont toutes neuves.  (named only)
    'fr.sons.voyelles.341',            // Ma mère habite tout près de la mer depuis toujours.  (named only)
  ],
  act9: [
    'fr.sons.liaisons.029',            // Tout à fait d'accord !
    'fr.sons.liaisons.035',            // À tout à l'heure !
    'fr.a2.nombres.039',               // Ça revient à vingt euros en tout.
    'fr.sons.liaisons.048',            // Tout à coup, la lumière s'est éteinte.  (named only)
  ],
  act10: [
    'fr.sons.masterclass.040',         // Quand il arrive, tout le monde est content.
    'fr.sons.liaisons.050',            // Bon appétit tout le monde !  (named only)
  ],
  act11: [
    'fr.a2.au-restaurant.153',         // Tout se passe bien ?
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a1.jours-et-mois.013',          // dictation
  'fr.a2.comparaisons.092',           // sentence
  'fr.a1.jours-et-mois.029',          // dictation
  'fr.sons.voyelles.364',             // sentence, review
  'fr.a1.objets.135',                 // dictation
  'fr.a1.objets.128',                 // dictation
  'fr.sons.voyelles.341',             // sentence, review
  'fr.sons.liaisons.048',             // sentence, review
  'fr.sons.liaisons.050',             // sentence, review, dictation
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a1.salutations.088',            // flashcard, review
  'fr.a2.nombres.039',                // flashcard, sentence, roleplay
];

/** Published rows this corpus twins, from the read-only probe of
 *  2026-09-25. Not nameable today (DB-only). Decide at import. */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [
  { dbId: 'fr.b1.expressions-de-quantite.010', fr: 'Tout dépend de ton budget.', twin: E(1077) },
  { dbId: 'fr.b1.expressions-de-quantite.011', fr: 'Il a tout mangé sans laisser une miette.', twin: E(1120) },
  { dbId: 'fr.b1.expressions-de-quantite.094', fr: 'Tous les élèves doivent rendre leur devoir avant vendredi.', twin: E(1019) },
  { dbId: 'fr.b1.expressions-de-quantite.161', fr: 'Trop de publicités interrompent la vidéo toutes les deux minutes.', twin: E(1040) },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['tout'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A gapfill card: `prompt` is the front, `fr` the answer (validateItem). */
const gap = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'gapfill', prompt, notes });
/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE PREMIER JUILLET ─────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Il me faut le camion toute la journée.', 'I need the truck for the whole day.', '/il mə fo lə ka.mjɔ̃ tut la ʒuʁ.ne/', 'eel muh foh luh ka-MYOHⁿ | toot la zhoor-NAY', ['scene', 'duree'], FCVDR),
  sent(1001, 'Il me faut le camion tous les jours.', 'I need the truck every day.', '/il mə fo lə ka.mjɔ̃ tu le ʒuʁ/', 'eel muh foh luh ka-MYOHⁿ | too lay ZHOOR', ['scene', 'frequence']),
  sent(1002, 'Tous les cartons sont dans le salon.', 'All the boxes are in the living room.', '/tu le kaʁ.tɔ̃ sɔ̃ dɑ̃ lə sa.lɔ̃/', 'too lay kar-TOHⁿ | sohⁿ dahⁿ luh sa-LOHⁿ', ['determinant', 'masc-pl'], FCVDR),
  sent(1003, 'Toute la vaisselle est emballée.', 'All the dishes are packed.', '/tut la vɛ.sɛl ɛ.tɑ̃.ba.le/', 'toot la veh-SEHL | eh-tahⁿ-ba-LAY', ['determinant', 'fem-sg'], FCVDR),
  sent(1004, 'Toutes les chaises sont dans le camion.', 'All the chairs are in the truck.', '/tut le ʃɛz sɔ̃ dɑ̃ lə ka.mjɔ̃/', 'toot lay SHEHZ | sohⁿ dahⁿ luh ka-MYOHⁿ', ['determinant', 'fem-pl']),
  sent(1005, 'Tout le quartier déménage le premier juillet.', 'The whole neighbourhood moves on the first of July.', '/tu lə kaʁ.tje de.me.naʒ lə pʁə.mje ʒɥi.jɛ/', 'too luh kar-TYAY | day-may-NAZH luh pruh-myay zhwee-YEH', ['determinant', 'masc-sg', 'quebec']),
  sent(1006, 'Tout est dans le camion.', 'Everything is in the truck.', '/tu.tɛ dɑ̃ lə ka.mjɔ̃/', 'too-teh dahⁿ luh ka-MYOHⁿ', ['pronom'], FCVDR),
  sent(1007, REFRAME, REFRAME_EN, '/tu sɛ sɑ̃.zɛk.sɛp.sjɔ̃ də.vɑ̃ œ̃ nɔ̃ il ɑ̃ pʁɑ̃ la fɔʁm/', 'too seh sahⁿ-zehk-sehp-SYOHⁿ | duh-vahⁿ uhⁿ NOHⁿ | eel ahⁿ prahⁿ la FORM', ['rule', 'reframe'], ['flashcard'],
    rule('« Toute la vaisselle » : pourquoi toute et pas tout ?', "Parce que tout prend la forme du nom qu'il couvre : vaisselle est féminin et singulier, donc toute. Et tout dit sans exception : pas une assiette n'est oubliée.")),
  sent(1008, 'Ils sont tous là.', 'They are all here.', '/il sɔ̃ tus la/', 'eel sohⁿ toos LA', ['pronom', 'tus'], FCVDR),
  sent(1009, 'Tout le monde est arrivé à huit heures.', 'Everybody arrived at eight.', '/tu lə mɔ̃.dɛ.ta.ʁi.ve a ɥi.tœʁ/', 'too luh mohⁿ-deh-ta-ree-VAY | a wee-TUHR', ['monde']),
  sent(1010, "Je t'appelle tout de suite.", "I'll call you right away.", '/ʒə ta.pɛl tut.sɥit/', 'zhuh ta-PEHL | toot-SWEET', ['expression']),
  sent(1011, 'Tout un camion pour trois pièces.', 'A whole truck for three rooms.', '/tu.tœ̃ ka.mjɔ̃ puʁ tʁwa pjɛs/', 'too-tuhⁿ ka-MYOHⁿ | poor trwa PYEHS', ['tout-un']),
  sent(1012, 'Mireille a tout organisé.', 'Mireille organised everything.', '/mi.ʁɛj a tu.tɔʁ.ɡa.ni.ze/', 'mee-RAY a too-tor-ga-nee-ZAY', ['pronom', 'place']),
  sent(1013, 'Les déménageurs sont tout près.', 'The movers are very close.', '/le de.me.na.ʒœʁ sɔ̃ tu pʁɛ/', 'lay day-may-na-ZHUHR | sohⁿ too PREH', ['adverbe']),
  sent(1014, 'Toute la famille est venue aider.', 'The whole family came to help.', '/tut la fa.mij ɛ və.ny ɛ.de/', 'toot la fa-MEEY | eh vuh-nü eh-DAY', ['determinant', 'fem-sg']),
  sent(1015, 'Tout a quatre formes : tout, toute, tous, toutes.', 'Tout has four forms: tout, toute, tous, toutes.', '/tu.ta ka.tʁə fɔʁm tu tut tu tut/', 'too-ta ka-truh FORM | too TOOT too TOOT', ['rule', 'formes'], ['flashcard'],
    rule('Combien de formes a tout à l’écrit ?', "Quatre : tout, toute, tous, toutes. À l'oral, on en entend moins : tout et tous devant un nom font [too], toute et toutes font [toot].")),
];

/* ── ACT 2 · QUATRE FORMES DEVANT UN NOM ────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1016, 'Tout le salon est vide.', 'The whole living room is empty.', '/tu lə sa.lɔ̃ ɛ vid/', 'too luh sa-LOHⁿ | eh VEED', ['determinant', 'masc-sg'], FCVDR),
  sent(1017, 'Toute la cuisine est en cartons.', 'The whole kitchen is in boxes.', '/tut la kɥi.zin ɛ.tɑ̃ kaʁ.tɔ̃/', 'toot la kwee-ZEEN | eh-tahⁿ kar-TOHⁿ', ['determinant', 'fem-sg'], FCVDR),
  sent(1018, 'Tous les livres vont dans la chambre.', 'All the books go in the bedroom.', '/tu le livʁ vɔ̃ dɑ̃ la ʃɑ̃bʁ/', 'too lay LEEVR | vohⁿ dahⁿ la SHAHⁿBR', ['determinant', 'masc-pl'], FCVDR),
  sent(1019, 'Toutes les assiettes sont fragiles.', 'All the plates are fragile.', '/tut le.za.sjɛt sɔ̃ fʁa.ʒil/', 'toot lay-za-SYEHT | sohⁿ fra-ZHEEL', ['determinant', 'fem-pl'], FCVDR),
  sent(1020, "J'ai lavé tout le frigo.", 'I washed the whole fridge.', '/ʒe la.ve tu lə fʁi.ɡo/', 'zhay la-vay too luh free-GOH', ['determinant', 'masc-sg']),
  sent(1021, 'Elle a rangé toute la chambre.', 'She tidied the whole bedroom.', '/ɛ.la ʁɑ̃.ʒe tut la ʃɑ̃bʁ/', 'eh-la rahⁿ-zhay toot la SHAHⁿBR', ['determinant', 'fem-sg']),
  sent(1022, 'Nous avons fermé tous les cartons.', 'We sealed all the boxes.', '/nu.za.vɔ̃ fɛʁ.me tu le kaʁ.tɔ̃/', 'noo-za-vohⁿ fehr-may too lay kar-TOHⁿ', ['determinant', 'masc-pl']),
  sent(1023, 'Tu as vidé toutes les armoires.', 'You emptied all the wardrobes.', '/ty a vi.de tut le.zaʁ.mwaʁ/', 'tü a vee-day toot lay-zar-MWAR', ['determinant', 'fem-pl']),
  sent(1024, 'Tous mes amis sont venus.', 'All my friends came.', '/tu me.za.mi sɔ̃ və.ny/', 'too may-za-MEE | sohⁿ vuh-NÜ', ['determinant', 'possessif'], FCVDR),
  sent(1025, 'Toute ma vaisselle tient dans deux cartons.', 'All my crockery fits in two boxes.', '/tut ma vɛ.sɛl tjɛ̃ dɑ̃ dø kaʁ.tɔ̃/', 'toot ma veh-SEHL | tyehⁿ dahⁿ deu kar-TOHⁿ', ['determinant', 'possessif']),
  sent(1026, "Tout regarde le nom qu'il couvre : genre et nombre.", 'Tout looks at the noun it covers: gender and number.', '/tu ʁə.ɡaʁd lə nɔ̃ kil kuvʁ ʒɑ̃ʁ e nɔ̃bʁ/', 'too ruh-GARD luh nohⁿ keel KOOVR | zhahⁿr ay NOHⁿBR', ['rule', 'accord'], ['flashcard'],
    rule('Tout ou toute devant « la table » ?', "toute : la table est féminin et singulier. Tout prend le genre et le nombre du nom, comme un adjectif.")),
  sent(1027, 'Tous les voisins nous ont aidés.', 'All the neighbours helped us.', '/tu le vwa.zɛ̃ nu.zɔ̃.tɛ.de/', 'too lay vwa-ZEHⁿ | noo-zohⁿ-teh-DAY', ['determinant', 'masc-pl']),
  sent(1028, 'Toutes les clés sont sur la table.', 'All the keys are on the table.', '/tut le kle sɔ̃ syʁ la tabl/', 'toot lay KLAY | sohⁿ sür la TABL', ['determinant', 'fem-pl'], FCVDR),
  sent(1029, "Tout l'appartement sent la peinture.", 'The whole flat smells of paint.', '/tu la.paʁ.tə.mɑ̃ sɑ̃ la pɛ̃.tyʁ/', 'too la-par-tuh-MAHⁿ | sahⁿ la pehⁿ-TÜR', ['determinant', 'elision']),
  sent(1030, "Toute l'équipe est fatiguée.", 'The whole team is tired.', '/tut le.kip ɛ fa.ti.ɡe/', 'toot lay-KEEP | eh fa-tee-GAY', ['determinant', 'elision']),
  sent(1031, "J'ai nettoyé toutes les fenêtres.", 'I cleaned all the windows.', '/ʒe nɛ.twa.je tut le fə.nɛtʁ/', 'zhay neh-twa-yay toot lay fuh-NEHTR', ['determinant', 'fem-pl'], FCVR,
    gap("J'ai nettoyé ___ les fenêtres.", 'toutes : les fenêtres, féminin pluriel.')),
  sent(1032, 'Tous les meubles sont lourds.', 'All the furniture is heavy.', '/tu le mœbl sɔ̃ luʁ/', 'too lay MUHBL | sohⁿ LOOR', ['determinant', 'masc-pl']),
  phrase(1033, 'tout le, toute la, tous les, toutes les', 'the whole, all the', '/tu lə tut la tu le tut le/', 'too luh | toot la | too lay | toot LAY', ['formes']),
];

/* ── ACT 3 · TOUS LES JOURS OU TOUTE LA JOURNÉE ─────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1034, 'Je travaille tous les jours.', 'I work every day.', '/ʒə tʁa.vaj tu le ʒuʁ/', 'zhuh tra-vahy too lay ZHOOR', ['frequence'], FCVDR),
  sent(1035, "J'ai travaillé toute la journée.", 'I worked all day.', '/ʒe tʁa.va.je tut la ʒuʁ.ne/', 'zhay tra-va-yay toot la zhoor-NAY', ['duree'], FCVDR),
  sent(1036, 'Il pleut toute la semaine.', 'It is raining all week.', '/il plø tut la sə.mɛn/', 'eel pleu toot la suh-MENN', ['duree']),
  sent(1037, 'On arrose les plantes tous les deux jours.', 'We water the plants every other day.', '/ɔ̃.na.ʁoz le plɑ̃t tu le dø ʒuʁ/', 'ohⁿ-na-ROHZ lay PLAHⁿT | too lay deu ZHOOR', ['frequence', 'intervalle'], FCVDR),
  sent(1038, 'Prends ce sirop toutes les quatre heures.', 'Take this syrup every four hours.', '/pʁɑ̃ sə si.ʁo tut le ka.tʁœʁ/', 'prahⁿ suh see-ROH | toot lay ka-TRUHR', ['frequence', 'intervalle']),
  sent(1039, 'Le bus passe toutes les dix minutes.', 'The bus comes every ten minutes.', '/lə bys pas tut le di mi.nyt/', 'luh büs PASS | toot lay dee mee-NÜT', ['frequence', 'intervalle'], FCVDR),
  sent(1040, 'Nous allons au chalet tous les étés.', 'We go to the cottage every summer.', '/nu.za.lɔ̃ o ʃa.lɛ tu le.ze.te/', 'noo-za-lohⁿ oh sha-LEH | too lay-zay-TAY', ['frequence', 'quebec']),
  sent(1041, "Nous sommes restés au chalet tout l'été.", 'We stayed at the cottage all summer.', '/nu sɔm ʁɛs.te o ʃa.lɛ tu le.te/', 'noo som rehs-TAY oh sha-LEH | too lay-TAY', ['duree', 'quebec']),
  sent(1042, 'Il a neigé toute la nuit.', 'It snowed all night.', '/il a ne.ʒe tut la nɥi/', 'ee-la nay-zhay toot la NWEE', ['duree']),
  sent(1043, 'Je fais du vélo tous les matins.', 'I cycle every morning.', '/ʒə fɛ dy ve.lo tu le ma.tɛ̃/', 'zhuh feh dü vay-LOH | too lay ma-TEHⁿ', ['frequence']),
  sent(1044, "J'ai attendu toute la matinée.", 'I waited all morning.', '/ʒe a.tɑ̃.dy tut la ma.ti.ne/', 'zhay a-tahⁿ-dü toot la ma-tee-NAY', ['duree']),
  sent(1045, 'Tous les jours compte les fois. Toute la journée mesure la durée.', 'Tous les jours counts the times. Toute la journée measures the length.', '/tu le ʒuʁ kɔ̃t le fwa tut la ʒuʁ.ne mə.zyʁ la dy.ʁe/', 'too lay ZHOOR kohⁿt lay FWA | toot la zhoor-NAY muh-zür la dü-RAY', ['rule', 'frequence', 'duree'], ['flashcard'],
    rule('« I worked all day » : tous les jours ou toute la journée ?', "toute la journée : une seule journée, du matin au soir. tous les jours, ce sont des jours qui se répètent.")),
  sent(1046, 'Elle appelle sa mère tous les dimanches.', 'She calls her mother every Sunday.', '/ɛ.la.pɛl sa mɛʁ tu le di.mɑ̃ʃ/', 'eh-la-PEHL sa MEHR | too lay dee-MAHⁿSH', ['frequence']),
  sent(1047, "Le magasin est ouvert toute l'année.", 'The shop is open all year.', '/lə ma.ɡa.zɛ̃ ɛ.tu.vɛʁ tut la.ne/', 'luh ma-ga-ZEHⁿ | eh-too-VEHR toot la-NAY', ['duree']),
  sent(1048, 'On change les draps toutes les semaines.', 'We change the sheets every week.', '/ɔ̃ ʃɑ̃ʒ le dʁa tut le sə.mɛn/', 'ohⁿ shahⁿzh lay DRA | toot lay suh-MENN', ['frequence']),
  sent(1049, 'Je vois mes parents tous les deux mois.', 'I see my parents every two months.', '/ʒə vwa me pa.ʁɑ̃ tu le dø mwa/', 'zhuh vwa may pa-RAHⁿ | too lay deu MWA', ['frequence', 'intervalle']),
  sent(1050, 'Il a plu toute la nuit.', 'It rained all night.', '/il a ply tut la nɥi/', 'ee-la plü toot la NWEE', ['duree'], FCVR,
    gap('Il a plu ___ la nuit.', 'toute : une nuit entière, du soir au matin. La durée, pas la fréquence.')),
  phrase(1051, 'tous les deux jours', 'every other day', '/tu le dø ʒuʁ/', 'too lay deu ZHOOR', ['intervalle']),
  phrase(1052, 'toute la journée', 'all day long', '/tut la ʒuʁ.ne/', 'toot la zhoor-NAY', ['duree']),
  sent(1053, 'Les déménageurs travaillent tout le mois de juillet.', 'The movers work all through July.', '/le de.me.na.ʒœʁ tʁa.vaj tu lə mwa də ʒɥi.jɛ/', 'lay day-may-na-ZHUHR | tra-VAHY too luh mwa duh zhwee-YEH', ['duree', 'quebec']),
];

/* ── ACT 4 · TOUT UN, TOUT CE, TOUT SANS ARTICLE ────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1054, 'Il a fallu tout un camion.', 'It took a whole truck.', '/il a fa.ly tu.tœ̃ ka.mjɔ̃/', 'ee-la fa-lü too-tuhⁿ ka-MYOHⁿ', ['tout-un'], FCVDR),
  sent(1055, "J'ai passé toute une journée à emballer.", 'I spent a whole day packing.', '/ʒe pa.se tu.tyn ʒuʁ.ne a ɑ̃.ba.le/', 'zhay pa-say too-tünn zhoor-NAY | a ahⁿ-ba-LAY', ['tout-un'], FCVDR),
  sent(1056, "C'est toute une histoire.", 'It is quite a saga.', '/sɛ tu.ty.nis.twaʁ/', 'seh too-tü-nees-TWAR', ['tout-un', 'expression']),
  sent(1057, 'Tous ces cartons sont à toi.', 'All these boxes are yours.', '/tu se kaʁ.tɔ̃ sɔ̃.ta twa/', 'too say kar-TOHⁿ | sohⁿ-ta TWA', ['demonstratif'], FCVDR),
  sent(1058, 'Toute cette vaisselle vient de ma grand-mère.', 'All this crockery comes from my grandmother.', '/tut sɛt vɛ.sɛl vjɛ̃ də ma ɡʁɑ̃.mɛʁ/', 'toot seht veh-SEHL | vyehⁿ duh ma grahⁿ-MEHR', ['demonstratif']),
  sent(1059, "J'ai gardé toutes mes lettres.", 'I kept all my letters.', '/ʒe ɡaʁ.de tut me lɛtʁ/', 'zhay gar-day toot may LEHTR', ['possessif'], FCVDR),
  sent(1060, 'Il a donné tous ses livres.', 'He gave away all his books.', '/il a dɔ.ne tu se livʁ/', 'ee-la do-nay too say LEEVR', ['possessif']),
  sent(1061, 'Elle a vécu toute sa vie à Québec.', 'She lived her whole life in Québec.', '/ɛ.la ve.ky tut sa vi a ke.bɛk/', 'eh-la vay-kü toot sa VEE | a kay-BEHK', ['possessif', 'quebec']),
  sent(1062, "J'ai perdu tout mon après-midi.", 'I lost my whole afternoon.', '/ʒe pɛʁ.dy tu mɔ̃.na.pʁɛ.mi.di/', 'zhay pehr-dü too mohⁿ-na-preh-mee-DEE', ['possessif']),
  sent(1063, 'Tout objet oublié sera donné.', 'Any object left behind will be given away.', '/tu.tɔb.ʒɛ u.bli.je sə.ʁa dɔ.ne/', 'too-tob-ZHEH oo-blee-YAY | suh-ra do-NAY', ['sans-article', 'avis']),
  sent(1064, 'Toute boîte doit porter un nom.', 'Every box must carry a name.', '/tut bwat dwa pɔʁ.te œ̃ nɔ̃/', 'toot BWAT | dwa por-tay uhⁿ NOHⁿ', ['sans-article', 'avis'], FCVDR),
  sent(1065, 'Tout retard sera facturé.', 'Any delay will be charged.', '/tu ʁə.taʁ sə.ʁa fak.ty.ʁe/', 'too ruh-TAR | suh-ra fak-tü-RAY', ['sans-article', 'avis']),
  sent(1066, 'Sans article, tout veut dire chaque : tout retard, toute boîte.', 'Without an article, tout means each: any delay, every box.', '/sɑ̃.zaʁ.tikl tu vø diʁ ʃak tu ʁə.taʁ tut bwat/', 'sahⁿ-zar-TEEKL | too veu deer SHAK | too ruh-TAR | toot BWAT', ['rule', 'sans-article'], ['flashcard'],
    rule('« Tout retard sera facturé. » Quels retards ?', "N'importe lequel, chacun. Sans article, tout regarde chaque élément, un par un. C'est la langue des avis et des règlements.")),
  sent(1067, 'On a mis toute une heure à monter le lit.', 'It took us a whole hour to put up the bed.', '/ɔ̃.na mi tu.ty.nœʁ a mɔ̃.te lə li/', 'ohⁿ-na mee too-tü-NUHR | a mohⁿ-tay luh LEE', ['tout-un']),
  sent(1068, 'Tous nos voisins partent aussi.', 'All our neighbours are leaving too.', '/tu no vwa.zɛ̃ paʁt o.si/', 'too noh vwa-ZEHⁿ | part oh-SEE', ['possessif']),
  sent(1069, "J'ai emballé tous ces verres.", 'I packed all these glasses.', '/ʒe ɑ̃.ba.le tu se vɛʁ/', 'zhay ahⁿ-ba-lay too say VEHR', ['demonstratif'], FCVR,
    gap("J'ai emballé ___ ces verres.", 'tous : les verres, masculin pluriel. Avec ces, mes ou ses, tout s’accorde comme avec les.')),
  phrase(1070, 'tout un, toute une', 'a whole', '/tu.tœ̃ tu.tyn/', 'too-TUHⁿ | too-TÜNN', ['tout-un']),
];

/* ── ACT 5 · TOUT, LE PRONOM ────────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1071, 'Tout va bien, on est presque prêts.', 'Everything is fine, we are nearly ready.', '/tu va bjɛ̃ ɔ̃.nɛ pʁɛsk pʁɛ/', 'too va BYEHⁿ | ohⁿ-neh prehsk PREH', ['pronom'], FCVDR),
  sent(1072, 'Tout est emballé.', 'Everything is packed.', '/tu.tɛ.tɑ̃.ba.le/', 'too-teh-tahⁿ-ba-LAY', ['pronom'], FCVDR),
  sent(1073, "J'ai tout.", 'I have everything.', '/ʒe tu/', 'zhay TOO', ['pronom']),
  sent(1074, 'Je comprends tout.', 'I understand everything.', '/ʒə kɔ̃.pʁɑ̃ tu/', 'zhuh kohⁿ-prahⁿ TOO', ['pronom'], FCVDR),
  sent(1075, "C'est tout pour aujourd'hui.", 'That is all for today.', '/sɛ tu puʁ o.ʒuʁ.dɥi/', 'seh TOO | poor oh-zhoor-DWEE', ['pronom']),
  sent(1076, 'Tout dépend du prix.', 'It all depends on the price.', '/tu de.pɑ̃ dy pʁi/', 'too day-pahⁿ dü PREE', ['pronom'], FCVDR),
  sent(1077, 'Merci pour tout.', 'Thanks for everything.', '/mɛʁ.si puʁ tu/', 'mehr-SEE poor TOO', ['pronom']),
  sent(1078, 'Tout coûte plus cher à Montréal.', 'Everything costs more in Montréal.', '/tu kut ply ʃɛʁ a mɔ̃.ʁe.al/', 'too koot plü SHEHR | a mohⁿ-ray-AL', ['pronom', 'quebec']),
  sent(1079, 'Elle pense à tout.', 'She thinks of everything.', '/ɛl pɑ̃s a tu/', 'ehl pahⁿs a TOO', ['pronom'], FCVDR),
  sent(1080, 'Tout était trop lourd.', 'Everything was too heavy.', '/tu.te.tɛ tʁo luʁ/', 'too-tay-teh troh LOOR', ['pronom']),
  sent(1081, 'Tout, pronom, veut dire toutes les choses, et il reste au singulier.', 'Tout as a pronoun means all things, and it stays singular.', '/tu pʁɔ.nɔ̃ vø diʁ tut le ʃoz e il ʁɛst o sɛ̃.ɡy.lje/', 'too proh-NOHⁿ | veu deer toot lay SHOHZ | ay eel rehst oh sehⁿ-gü-LYAY', ['rule', 'pronom'], ['flashcard'],
    rule('« Tout ___ prêt. » est ou sont ?', 'est. Tout est un seul bloc : le verbe reste au singulier, comme après ça.')),
  sent(1082, "Tout s'est bien passé.", 'Everything went well.', '/tu sɛ bjɛ̃ pa.se/', 'too seh byehⁿ pa-SAY', ['pronom']),
  sent(1083, 'Il sait tout sur ce quartier.', 'He knows everything about this neighbourhood.', '/il sɛ tu syʁ sə kaʁ.tje/', 'eel seh TOO | sür suh kar-TYAY', ['pronom']),
  sent(1084, 'Tout est possible.', 'Anything is possible.', '/tu.tɛ pɔ.sibl/', 'too-teh po-SEEBL', ['pronom']),
  sent(1085, "Ce n'est pas tout.", 'That is not all.', '/sə nɛ pa tu/', 'suh neh pa TOO', ['pronom']),
  sent(1086, 'Tout est fermé le dimanche.', 'Everything is closed on Sundays.', '/tu.tɛ fɛʁ.me lə di.mɑ̃ʃ/', 'too-teh fehr-MAY | luh dee-MAHⁿSH', ['pronom'], FCVR,
    gap('___ est fermé le dimanche.', 'Tout : le pronom, au singulier. On ne dit pas « tous est ».')),
  sent(1087, 'Avant de partir, vérifie tout.', 'Before leaving, check everything.', '/a.vɑ̃ də paʁ.tiʁ ve.ʁi.fi tu/', 'a-vahⁿ duh par-TEER | vay-ree-fee TOO', ['pronom']),
];

/* ── ACT 6 · TOUS [TUS], TOUTES : LES PRONOMS ───────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1088, 'Mes amis sont tous venus.', 'My friends all came.', '/me.za.mi sɔ̃ tus və.ny/', 'may-za-MEE | sohⁿ toos vuh-NÜ', ['tus', 'compose'], FCVDR),
  sent(1089, 'Je les connais tous.', 'I know them all.', '/ʒə le kɔ.nɛ tus/', 'zhuh lay ko-neh TOOS', ['tus'], FCVDR),
  sent(1090, "Tous sont d'accord.", 'Everyone agrees.', '/tus sɔ̃ da.kɔʁ/', 'toos sohⁿ da-KOR', ['tus', 'sujet']),
  sent(1091, 'Nous sommes tous fatigués.', 'We are all tired.', '/nu sɔm tus fa.ti.ɡe/', 'noo som toos fa-tee-GAY', ['tus'], FCVDR),
  sent(1092, 'Mes sœurs sont toutes là.', 'My sisters are all here.', '/me sœʁ sɔ̃ tut la/', 'may SUHR | sohⁿ toot LA', ['toutes']),
  sent(1093, 'Les chaises, je les prends toutes.', "The chairs, I'll take them all.", '/le ʃɛz ʒə le pʁɑ̃ tut/', 'lay SHEHZ | zhuh lay prahⁿ TOOT', ['toutes']),
  sent(1094, 'Les voisins sont tous là.', 'The neighbours are all here.', '/le vwa.zɛ̃ sɔ̃ tus la/', 'lay vwa-ZEHⁿ | sohⁿ toos LA', ['tus', 'paire']),
  sent(1095, 'Tous les voisins sont là.', 'All the neighbours are here.', '/tu le vwa.zɛ̃ sɔ̃ la/', 'too lay vwa-ZEHⁿ | sohⁿ LA', ['determinant', 'paire']),
  sent(1096, 'Vous êtes tous invités.', 'You are all invited.', '/vu.zɛt tu.sɛ̃.vi.te/', 'voo-zeht too-sehⁿ-vee-TAY', ['tus']),
  sent(1097, 'Merci à tous.', 'Thanks, everyone.', '/mɛʁ.si a tus/', 'mehr-SEE a TOOS', ['tus'], FCVDR),
  sent(1098, 'Bonjour à toutes et à tous.', 'Hello, everyone.', '/bɔ̃.ʒuʁ a tut e a tus/', 'bohⁿ-ZHOOR | a TOOT | ay a TOOS', ['tus', 'toutes']),
  sent(1099, 'Tous ont aidé à porter le frigo.', 'They all helped carry the fridge.', '/tus ɔ̃.tɛ.de a pɔʁ.te lə fʁi.ɡo/', 'toos ohⁿ-teh-DAY | a por-tay luh free-GOH', ['tus', 'sujet']),
  sent(1100, "Tous, pronom : on entend le s. Tous devant un nom : on ne l'entend pas.", 'Tous as a pronoun: you hear the s. Tous before a noun: you do not.', '/tus pʁɔ.nɔ̃ ɔ̃.nɑ̃.tɑ̃ lə ɛs tus də.vɑ̃ œ̃ nɔ̃ ɔ̃ nə lɑ̃.tɑ̃ pa/', 'toos proh-NOHⁿ | ohⁿ-nahⁿ-tahⁿ luh EHS | toos duh-vahⁿ uhⁿ NOHⁿ | ohⁿ nuh lahⁿ-tahⁿ PA', ['rule', 'tus'], ['flashcard'],
    rule('« Ils sont tous là » : tu dis [too] ou [toos] ?', '[toos]. Ici tous est un pronom : il est seul, sans nom après lui, et son s se prononce. Dans « tous les jours », tous est devant un nom : [too].')),
  sent(1101, 'Tous les enfants dorment.', 'All the children are asleep.', '/tu le.zɑ̃.fɑ̃ dɔʁm/', 'too lay-zahⁿ-fahⁿ DORM', ['determinant', 'paire']),
  sent(1102, 'Les enfants dorment tous.', 'The children are all asleep.', '/le.zɑ̃.fɑ̃ dɔʁm tus/', 'lay-zahⁿ-fahⁿ dorm TOOS', ['tus', 'paire'], FCVDR),
  sent(1103, 'Ces photos, je les veux toutes.', 'These photos, I want them all.', '/se fo.to ʒə le vø tut/', 'say foh-TOH | zhuh lay veu TOOT', ['toutes']),
  sent(1104, 'Vous venez tous samedi.', 'You are all coming on Saturday.', '/vu və.ne tus sam.di/', 'voo vuh-nay toos sam-DEE', ['tus']),
  sent(1105, 'On part tous ensemble.', 'We are all leaving together.', '/ɔ̃ paʁ tu.sɑ̃.sɑ̃bl/', 'ohⁿ par too-sahⁿ-SAHⁿBL', ['tus']),
];

/* ── ACT 7 · LA PLACE AU PASSÉ COMPOSÉ ──────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1106, "J'ai tout compris.", 'I understood everything.', '/ʒe tu kɔ̃.pʁi/', 'zhay too kohⁿ-PREE', ['place', 'pronom'], FCVDR),
  sent(1107, 'Ils sont tous partis.', 'They have all left.', '/il sɔ̃ tus paʁ.ti/', 'eel sohⁿ toos par-TEE', ['place', 'tus'], FCVDR),
  sent(1108, 'Je les ai tous vus.', 'I saw them all.', '/ʒə le.ze tus vy/', 'zhuh lay-zay toos VÜ', ['place', 'tus']),
  sent(1109, 'Elles sont toutes arrivées.', 'They have all arrived.', '/ɛl sɔ̃ tu.ta.ʁi.ve/', 'ehl sohⁿ too-ta-ree-VAY', ['place', 'toutes']),
  sent(1110, 'On a presque tout vendu.', 'We sold almost everything.', '/ɔ̃.na pʁɛsk tu vɑ̃.dy/', 'ohⁿ-na prehsk too vahⁿ-DÜ', ['place', 'pronom'], FCVDR),
  sent(1111, 'Je vais tout ranger ce soir.', 'I am going to tidy everything tonight.', '/ʒə vɛ tu ʁɑ̃.ʒe sə swaʁ/', 'zhuh veh too rahⁿ-ZHAY | suh SWAR', ['place', 'infinitif'], FCVDR),
  sent(1112, 'Il faut tout vérifier avant de partir.', 'Everything has to be checked before leaving.', '/il fo tu ve.ʁi.fje a.vɑ̃ də paʁ.tiʁ/', 'eel foh too vay-ree-FYAY | a-vahⁿ duh par-TEER', ['place', 'infinitif']),
  sent(1113, 'Nous avons tous signé le bail.', 'We all signed the lease.', '/nu.za.vɔ̃ tus si.ɲe lə baj/', 'noo-za-vohⁿ toos see-nyay luh BAHY', ['place', 'tus']),
  sent(1114, 'Les cartons, je les ai tous fermés.', 'The boxes, I sealed them all.', '/le kaʁ.tɔ̃ ʒə le.ze tus fɛʁ.me/', 'lay kar-TOHⁿ | zhuh lay-zay toos fehr-MAY', ['place', 'tus'], FCVDR),
  sent(1115, 'Elle a tout donné à ses voisins.', 'She gave everything to her neighbours.', '/ɛ.la tu dɔ.ne a se vwa.zɛ̃/', 'eh-la too do-NAY | a say vwa-ZEHⁿ', ['place', 'pronom']),
  sent(1116, 'Tu as tout oublié.', 'You forgot everything.', '/ty a tu.tu.bli.je/', 'tü a too-too-blee-YAY', ['place', 'pronom']),
  sent(1117, 'Nous allons tous déménager en juillet.', 'We are all going to move in July.', '/nu.za.lɔ̃ tus de.me.na.ʒe ɑ̃ ʒɥi.jɛ/', 'noo-za-lohⁿ toos day-may-na-ZHAY | ahⁿ zhwee-YEH', ['place', 'infinitif', 'tus']),
  sent(1118, "Tout et tous se glissent après l'auxiliaire, devant le participe.", 'Tout and tous slip in after the auxiliary, before the participle.', '/tu e tus sə ɡlis a.pʁɛ lɔk.si.ljɛʁ də.vɑ̃ lə paʁ.ti.sip/', 'too ay toos suh GLEES | a-preh lohk-see-LYEHR | duh-vahⁿ luh par-tee-SEEP', ['rule', 'place'], ['flashcard'],
    rule("« J'ai compris tout » ou « j'ai tout compris » ?", "J'ai tout compris. Comme bien et déjà, tout se met entre avoir et le participe. Avec un infinitif, il passe devant : je vais tout ranger.")),
  sent(1119, 'Ils ont tout mangé.', 'They ate everything.', '/il.zɔ̃ tu mɑ̃.ʒe/', 'eel-zohⁿ too mahⁿ-ZHAY', ['place', 'pronom']),
  sent(1120, 'Les voisins sont tous venus nous dire au revoir.', 'The neighbours all came to say goodbye to us.', '/le vwa.zɛ̃ sɔ̃ tus və.ny nu diʁ o ʁə.vwaʁ/', 'lay vwa-ZEHⁿ | sohⁿ toos vuh-NÜ | noo deer oh ruh-VWAR', ['place', 'tus']),
  sent(1121, "J'ai tout lu, du début à la fin.", 'I read it all, from start to finish.', '/ʒe tu ly dy de.by a la fɛ̃/', 'zhay too LÜ | dü day-bü a la FEHⁿ', ['place', 'pronom'], FCVR,
    gap("J'ai ___ lu, du début à la fin.", "tout, entre ai et lu. Jamais « j'ai lu tout ».")),
  sent(1122, 'Je veux tout voir avant la vente.', 'I want to see everything before the sale.', '/ʒə vø tu vwaʁ a.vɑ̃ la vɑ̃t/', 'zhuh veu too VWAR | a-vahⁿ la VAHⁿT', ['place', 'infinitif']),
];

/* ── ACT 8 · TOUT, L'ADVERBE ────────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1123, 'Elle est partie toute seule.', 'She left all alone.', '/ɛ.lɛ paʁ.ti tut sœl/', 'eh-leh par-tee toot SUHL', ['adverbe', 'accord-fem'], FCVDR),
  sent(1124, 'Il habite tout près.', 'He lives very close.', '/i.la.bit tu pʁɛ/', 'ee-la-beet too PREH', ['adverbe'], FCVDR),
  sent(1125, 'Le frigo est tout neuf.', 'The fridge is brand new.', '/lə fʁi.ɡo ɛ tu nœf/', 'luh free-GOH | eh too NUHF', ['adverbe']),
  sent(1126, 'La cuisinière est toute neuve.', 'The stove is brand new.', '/la kɥi.zi.njɛʁ ɛ tut nœv/', 'la kwee-zee-NYEHR | eh toot NUHV', ['adverbe', 'accord-fem'], FCVDR),
  sent(1127, 'Les murs sont tout blancs.', 'The walls are all white.', '/le myʁ sɔ̃ tu blɑ̃/', 'lay MÜR | sohⁿ too BLAHⁿ', ['adverbe']),
  sent(1128, 'Les petites sont toutes contentes.', 'The little girls are really happy.', '/le pə.tit sɔ̃ tut kɔ̃.tɑ̃t/', 'lay puh-TEET | sohⁿ toot kohⁿ-TAHⁿT', ['adverbe', 'accord-fem', 'ambigu']),
  sent(1129, 'Elle est tout heureuse.', 'She is really happy.', '/ɛ.lɛ tu.tø.ʁøz/', 'eh-leh too-teu-REUZ', ['adverbe', 'voyelle'], FCVDR),
  sent(1130, 'Elle est toute honteuse.', 'She is really ashamed.', '/ɛ.lɛ tut ɔ̃.tøz/', 'eh-leh toot ohⁿ-TEUZ', ['adverbe', 'h-aspire']),
  sent(1131, 'Parle tout doucement, le bébé dort.', 'Speak very softly, the baby is asleep.', '/paʁl tu dus.mɑ̃ lə be.be dɔʁ/', 'parl too doos-MAHⁿ | luh bay-bay DOR', ['adverbe']),
  sent(1132, 'Ils sont tout contents.', 'They are really happy.', '/il sɔ̃ tu kɔ̃.tɑ̃/', 'eel sohⁿ too kohⁿ-TAHⁿ', ['adverbe', 'paire'], FCVDR),
  sent(1133, 'Ils sont tous contents.', 'They are all happy.', '/il sɔ̃ tus kɔ̃.tɑ̃/', 'eel sohⁿ toos kohⁿ-TAHⁿ', ['tus', 'paire'], FCVDR),
  sent(1134, "Tout, adverbe, veut dire complètement. Il ne change que devant un adjectif féminin qui commence par une consonne.", 'Tout as an adverb means completely. It only changes before a feminine adjective that starts with a consonant.', '/tu ad.vɛʁb vø diʁ kɔ̃.plɛt.mɑ̃ il nə ʃɑ̃ʒ kə də.vɑ̃ œ̃.na.dʒɛk.tif fe.mi.nin ki kɔ.mɑ̃s paʁ yn kɔ̃.sɔn/', 'too ad-VEHRB | veu deer kohⁿ-pleht-MAHⁿ | eel nuh shahⁿzh kuh duh-vahⁿ uhⁿ-nad-zhehk-TEEF fay-mee-NEEN | kee ko-mahⁿs par ünn kohⁿ-SONN', ['rule', 'adverbe'], ['flashcard'],
    rule('« Elle est ___ seule. » tout ou toute ?', "toute : seule est féminin et commence par une consonne. Devant heureuse, qui commence par une voyelle : tout heureuse. Avec un h aspiré, comme honteuse : toute honteuse.")),
  sent(1135, 'La ville tout entière dormait.', 'The whole town was asleep.', '/la vil tu.tɑ̃.tjɛʁ dɔʁ.mɛ/', 'la VEEL | too-tahⁿ-TYEHR dor-MEH', ['adverbe', 'voyelle']),
  sent(1136, 'Les deux filles sont tout émues.', 'The two girls are very moved.', '/le dø fij sɔ̃ tu.te.my/', 'lay deu FEEY | sohⁿ too-tay-MÜ', ['adverbe', 'voyelle']),
  sent(1137, 'Il est tout seul dans l’appartement vide.', 'He is all alone in the empty flat.', '/i.lɛ tu sœl dɑ̃ la.paʁ.tə.mɑ̃ vid/', 'ee-leh too SUHL | dahⁿ la-par-tuh-mahⁿ VEED', ['adverbe']),
  sent(1138, 'La porte est tout ouverte.', 'The door is wide open.', '/la pɔʁt ɛ tu.tu.vɛʁt/', 'la PORT | eh too-too-VEHRT', ['adverbe', 'voyelle']),
  sent(1139, 'La table est toute petite.', 'The table is tiny.', '/la tabl ɛ tut pə.tit/', 'la TABL | eh toot puh-TEET', ['adverbe', 'accord-fem'], FCVR,
    gap('La table est ___ petite.', 'toute : petite est féminin et commence par une consonne, p.')),
  sent(1140, "C'est tout près d'ici.", 'It is really close to here.', '/sɛ tu pʁɛ di.si/', 'seh too preh dee-SEE', ['adverbe']),
];

/* ── ACT 9 · LES EXPRESSIONS FIGÉES ─────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1141, 'Tu as tout à fait raison.', 'You are absolutely right.', '/ty a tu.ta.fɛ ʁɛ.zɔ̃/', 'tü a too-ta-feh reh-ZOHⁿ', ['expression'], FCVDR),
  sent(1142, "Je l'ai vue tout à l'heure.", 'I saw her a little while ago.', '/ʒə le vy tu.ta.lœʁ/', 'zhuh lay vü too-ta-LUHR', ['expression', 'passe'], FCVDR),
  sent(1143, "Je te rappelle tout à l'heure.", 'I will call you back in a little while.', '/ʒə tə ʁa.pɛl tu.ta.lœʁ/', 'zhuh tuh ra-pehl too-ta-LUHR', ['expression', 'futur']),
  sent(1144, "En tout cas, merci d'être venu.", 'In any case, thanks for coming.', '/ɑ̃ tu ka mɛʁ.si dɛtʁ və.ny/', 'ahⁿ too KA | mehr-see dehtr vuh-NÜ', ['expression'], FCVDR),
  sent(1145, 'Il pleuvait, mais on a déménagé malgré tout.', 'It was raining, but we moved all the same.', '/il plø.vɛ mɛ ɔ̃.na de.me.na.ʒe mal.ɡʁe tu/', 'eel pleu-VEH | meh ohⁿ-na day-may-na-ZHAY | mal-gray TOO', ['expression']),
  sent(1146, 'Le chien aboie tout le temps.', 'The dog barks all the time.', '/lə ʃjɛ̃ a.bwa tu lə tɑ̃/', 'luh shyehⁿ a-BWA | too luh TAHⁿ', ['expression'], FCVDR),
  sent(1147, "De toute façon, on n'a pas le choix.", 'Anyway, we have no choice.', '/də tut fa.sɔ̃ ɔ̃ na pa lə ʃwa/', 'duh toot fa-SOHⁿ | ohⁿ na pa luh SHWA', ['expression']),
  sent(1148, "Après tout, ce n'est qu'un appartement.", 'After all, it is only a flat.', '/a.pʁɛ tu sə nɛ kœ̃.na.paʁ.tə.mɑ̃/', 'a-preh TOO | suh neh kuhⁿ-na-par-tuh-MAHⁿ', ['expression']),
  sent(1149, "C'est tout de même un peu cher.", 'It is a bit expensive all the same.', '/sɛ tut mɛm œ̃ pø ʃɛʁ/', 'seh toot MEM | uhⁿ peu SHEHR', ['expression']),
  sent(1150, "Tout à coup, le frigo s'est arrêté.", 'Suddenly the fridge stopped.', '/tu.ta.ku lə fʁi.ɡo sɛ.ta.ʁɛ.te/', 'too-ta-KOO | luh free-goh seh-ta-reh-TAY', ['expression']),
  sent(1151, 'Viens tout de suite, le camion est là.', 'Come right away, the truck is here.', '/vjɛ̃ tut.sɥit lə ka.mjɔ̃ ɛ la/', 'vyehⁿ toot-SWEET | luh ka-myohⁿ eh LA', ['expression']),
  sent(1152, "Une expression figée ne s'accorde pas : tout à fait, tout à l'heure, tout le temps.", 'A fixed expression does not agree: tout à fait, tout à l’heure, tout le temps.', '/yn ɛk.spʁɛ.sjɔ̃ fi.ʒe nə sa.kɔʁd pa tu.ta.fɛ tu.ta.lœʁ tu lə tɑ̃/', 'ünn ehk-spreh-SYOHⁿ fee-ZHAY | nuh sa-kord PA | too-ta-FEH | too-ta-LUHR | too luh TAHⁿ', ['rule', 'expression'], ['flashcard'],
    rule('Une femme te dit : « J’arrive ___ à l’heure. » tout ou toute ?', "tout. Tout à l'heure est un bloc : il ne change jamais, même quand c'est une femme qui parle.")),
  phrase(1153, 'tout à fait', 'absolutely, exactly', '/tu.ta.fɛ/', 'too-ta-FEH', ['expression']),
  phrase(1154, 'en tout cas', 'in any case', '/ɑ̃ tu ka/', 'ahⁿ too KA', ['expression']),
  phrase(1155, 'malgré tout', 'all the same', '/mal.ɡʁe tu/', 'mal-gray TOO', ['expression']),
  phrase(1156, 'tout le temps', 'all the time', '/tu lə tɑ̃/', 'too luh TAHⁿ', ['expression']),
  phrase(1157, 'de toute façon', 'anyway', '/də tut fa.sɔ̃/', 'duh toot fa-SOHⁿ', ['expression']),
  sent(1158, "Au Québec, on dit souvent tantôt pour tout à l'heure.", 'In Québec people often say tantôt for tout à l’heure.', '/o ke.bɛk ɔ̃ di su.vɑ̃ tɑ̃.to puʁ tu.ta.lœʁ/', 'oh kay-BEHK | ohⁿ dee soo-VAHⁿ tahⁿ-TOH | poor too-ta-LUHR', ['expression', 'quebec']),
  sent(1159, "On se voit tout à l'heure au nouvel appart.", 'See you in a bit at the new place.', '/ɔ̃ sə vwa tu.ta.lœʁ o nu.vɛ.la.paʁt/', 'ohⁿ suh vwa too-ta-LUHR | oh noo-veh-la-PART', ['expression', 'futur']),
];

/* ── ACT 10 · TOUT LE MONDE ET TOUS LES DEUX ────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1160, 'Tout le monde est là.', 'Everybody is here.', '/tu lə mɔ̃.dɛ la/', 'too luh mohⁿ-deh LA', ['monde'], FCVDR),
  sent(1161, 'Tout le monde aide Mireille.', 'Everybody helps Mireille.', '/tu lə mɔ̃d ɛd mi.ʁɛj/', 'too luh MOHⁿD | ehd mee-RAY', ['monde']),
  sent(1162, 'Tout le monde a apporté quelque chose.', 'Everybody brought something.', '/tu lə mɔ̃d a a.pɔʁ.te kɛl.kə ʃoz/', 'too luh MOHⁿD | a a-por-TAY kehl-kuh SHOHZ', ['monde'], FCVDR),
  sent(1163, 'Tout le monde connaît Fatou dans la rue.', 'Everybody knows Fatou in the street.', '/tu lə mɔ̃d kɔ.nɛ fa.tu dɑ̃ la ʁy/', 'too luh MOHⁿD | ko-neh fa-TOO | dahⁿ la RÜ', ['monde']),
  sent(1164, 'Nous sommes venus tous les deux.', 'We both came.', '/nu sɔm və.ny tu le dø/', 'noo som vuh-NÜ | too lay DEU', ['deux'], FCVDR),
  sent(1165, 'Mes deux frères habitent tous les deux à Ottawa.', 'My two brothers both live in Ottawa.', '/me dø fʁɛʁ a.bit tu le dø a ɔ.ta.wa/', 'may deu FREHR | a-beet too lay DEU | a o-ta-WA', ['deux']),
  sent(1166, 'Elles viennent toutes les trois.', 'All three of them are coming.', '/ɛl vjɛn tut le tʁwa/', 'ehl VYENN | toot lay TRWA', ['deux']),
  sent(1167, 'Nous tous, on a porté le canapé.', 'All of us carried the sofa.', '/nu tus ɔ̃.na pɔʁ.te lə ka.na.pe/', 'noo TOOS | ohⁿ-na por-tay luh ka-na-PAY', ['tus']),
  sent(1168, 'Le monde entier regarde ce match.', 'The whole world is watching this match.', '/lə mɔ̃.dɑ̃.tje ʁə.ɡaʁd sə matʃ/', 'luh mohⁿ-dahⁿ-TYAY | ruh-gard suh MATSH', ['monde', 'contraste']),
  sent(1169, "Tout le monde, c'est une seule foule : le verbe reste au singulier.", 'Tout le monde is one single crowd: the verb stays singular.', '/tu lə mɔ̃d sɛ.tyn sœl ful lə vɛʁb ʁɛst o sɛ̃.ɡy.lje/', 'too luh MOHⁿD | seh-tünn suhl FOOL | luh VEHRB | rehst oh sehⁿ-gü-LYAY', ['rule', 'monde'], ['flashcard'],
    rule('« Tout le monde ___ content. » est ou sont ?', 'est. Tout le monde veut dire everybody, et le verbe reste au singulier. Avec tous, le verbe passe au pluriel : ils sont tous contents.')),
  sent(1170, 'Tout le monde est parti, sauf toi.', 'Everybody has left except you.', '/tu lə mɔ̃.dɛ paʁ.ti sof twa/', 'too luh mohⁿ-deh par-TEE | sohf TWA', ['monde']),
  sent(1171, 'Ils ont tous les deux raison.', 'They are both right.', '/il.zɔ̃ tu le dø ʁɛ.zɔ̃/', 'eel-zohⁿ too lay deu reh-ZOHⁿ', ['deux'], FCVDR),
  sent(1172, 'Tout le monde est fatigué.', 'Everybody is tired.', '/tu lə mɔ̃.dɛ fa.ti.ɡe/', 'too luh mohⁿ-deh fa-tee-GAY', ['monde'], FCVR,
    gap('Tout le monde ___ fatigué.', 'est : tout le monde, au singulier.')),
  phrase(1173, 'tout le monde', 'everybody', '/tu lə mɔ̃d/', 'too luh MOHⁿD', ['monde']),
  phrase(1174, 'tous les deux, toutes les deux', 'both', '/tu le dø tut le dø/', 'too lay DEU | toot lay DEU', ['deux']),
  sent(1175, 'Tout le monde parle français ici.', 'Everybody speaks French here.', '/tu lə mɔ̃d paʁl fʁɑ̃.sɛ i.si/', 'too luh MOHⁿD | parl frahⁿ-seh ee-SEE', ['monde']),
];

/* ── ACT 11 · ORGANISER UNE FÊTE ────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1176, 'Tout le monde est invité samedi.', 'Everybody is invited on Saturday.', '/tu lə mɔ̃.dɛ.tɛ̃.vi.te sam.di/', 'too luh mohⁿ-deh-tehⁿ-vee-TAY | sam-DEE', ['message', 'monde'], FCVDR),
  sent(1177, 'Tout doit être prêt à six heures.', 'Everything must be ready at six.', '/tu dwa.tɛtʁ pʁɛ a si.zœʁ/', 'too dwa-tehtr PREH | a see-ZUHR', ['message', 'pronom'], FCVDR),
  sent(1178, 'Toutes les boissons sont au frais.', 'All the drinks are chilling.', '/tut le bwa.sɔ̃ sɔ̃.to fʁɛ/', 'toot lay bwa-SOHⁿ | sohⁿ-toh FREH', ['message', 'determinant']),
  sent(1179, 'Chacun apporte un plat, et on partage tout.', 'Everyone brings a dish, and we share everything.', '/ʃa.kœ̃.na.pɔʁt œ̃ pla e ɔ̃ paʁ.taʒ tu/', 'sha-kuhⁿ-na-PORT uhⁿ PLA | ay ohⁿ par-tazh TOO', ['message', 'pronom'], FCVDR),
  sent(1180, 'Vous êtes tous les bienvenus.', 'You are all welcome.', '/vu.zɛt tu le bjɛ̃.və.ny/', 'voo-zeht too lay byehⁿ-vuh-NÜ', ['message', 'determinant']),
  sent(1181, "Toute l'équipe sera là.", 'The whole team will be there.', '/tut le.kip sə.ʁa la/', 'toot lay-KEEP | suh-ra LA', ['message', 'determinant']),
  sent(1182, "J'ai tout réservé : la salle et les chaises.", 'I booked everything: the hall and the chairs.', '/ʒe tu ʁe.zɛʁ.ve la sal e le ʃɛz/', 'zhay too ray-zehr-VAY | la SAL | ay lay SHEHZ', ['message', 'place'], FCVDR),
  sent(1183, 'Les invitations sont toutes parties.', 'The invitations have all gone out.', '/le.zɛ̃.vi.ta.sjɔ̃ sɔ̃ tut paʁ.ti/', 'lay-zehⁿ-vee-ta-SYOHⁿ | sohⁿ toot par-TEE', ['message', 'toutes']),
  sent(1184, 'On rangera tous ensemble à la fin.', 'We will all tidy up together at the end.', '/ɔ̃ ʁɑ̃ʒ.ʁa tu.sɑ̃.sɑ̃.bla la fɛ̃/', 'ohⁿ rahⁿzh-RA | too-sahⁿ-SAHⁿBL | a la FEHⁿ', ['message', 'tus']),
  sent(1185, "La fête dure tout l'après-midi.", 'The party lasts all afternoon.', '/la fɛt dyʁ tu la.pʁɛ.mi.di/', 'la FEHT | dür too la-preh-mee-DEE', ['message', 'duree']),
  sent(1186, 'Hugo et toi, venez tous les deux à midi.', 'Hugo and you, both come at noon.', '/y.ɡo e twa və.ne tu le dø a mi.di/', 'ü-GOH ay TWA | vuh-nay too lay DEU | a mee-DEE', ['message', 'deux']),
  sent(1187, 'Si tout va bien, on finit à minuit.', 'If all goes well, we finish at midnight.', '/si tu va bjɛ̃ ɔ̃ fi.ni a mi.nɥi/', 'see too va BYEHⁿ | ohⁿ fee-nee a mee-NWEE', ['message', 'pronom']),
  sent(1188, 'Merci à tous pour votre aide.', 'Thanks, all of you, for your help.', '/mɛʁ.si a tus puʁ vɔ.tʁɛd/', 'mehr-see a TOOS | poor vo-TREHD', ['message', 'tus'], FCVDR),
  sent(1189, 'Un bon message dit qui fait quoi, et ce qui est déjà prêt.', 'A good message says who does what, and what is already ready.', '/œ̃ bɔ̃ mɛ.saʒ di ki fɛ kwa e sə ki ɛ de.ʒa pʁɛ/', 'uhⁿ bohⁿ meh-SAZH | dee kee feh KWA | ay suh kee eh day-zha PREH', ['rule', 'message'], ['flashcard'],
    rule("Qu'est-ce qu'un message d'organisation doit dire ?", "Le moment, la tâche de chacun, et ce qui est fait. Tout le monde, tous, toute l'équipe : chaque tout couvre un groupe précis.")),
  sent(1190, "N'oubliez pas : tout le monde apporte sa chaise.", 'Do not forget: everybody brings their own chair.', '/nu.bli.je pa tu lə mɔ̃d a.pɔʁt sa ʃɛz/', 'noo-blee-yay PA | too luh MOHⁿD | a-port sa SHEHZ', ['message', 'monde']),
  sent(1191, 'Toutes les tâches sont partagées.', 'All the tasks are shared out.', '/tut le taʃ sɔ̃ paʁ.ta.ʒe/', 'toot lay TASH | sohⁿ par-ta-ZHAY', ['message', 'determinant']),
  sent(1192, 'Je m’occupe de tout le reste.', 'I will take care of all the rest.', '/ʒə mɔ.kyp də tu lə ʁɛst/', 'zhuh mo-KÜP | duh too luh REHST', ['message', 'determinant']),
  sent(1193, 'Tous mes voisins viendront.', 'All my neighbours will come.', '/tu me vwa.zɛ̃ vjɛ̃.dʁɔ̃/', 'too may vwa-ZEHⁿ | vyehⁿ-DROHⁿ', ['message', 'possessif']),
  sent(1194, 'Tout est prêt pour la fête.', 'Everything is ready for the party.', '/tu.tɛ pʁɛ puʁ la fɛt/', 'too-teh PREH | poor la FEHT', ['message', 'pronom'], FCVDR),
  sent(1195, 'Ils ont tous répondu oui.', 'They all said yes.', '/il.zɔ̃ tus ʁe.pɔ̃.dy wi/', 'eel-zohⁿ toos ray-pohⁿ-dü WEE', ['message', 'tus', 'place']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

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
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: moving day in Montréal, 1 July. About 130 words. */
export const JUILLET_TEXT =
  "Au Québec, le premier juillet, tout le monde déménage, ou presque. Ce jour-là, toute la ville est dans la rue. Les camions bloquent toutes les ruelles, et tous les voisins s'entraident. Chez nous, le réveil a sonné à six heures. Mireille avait tout organisé : tous les cartons étaient fermés, toute la vaisselle était emballée, et toutes les chaises attendaient près de la porte. Les déménageurs sont arrivés tout de suite après le café. Ils ont travaillé toute la journée, presque sans pause. À midi, ils étaient tous fatigués, mais tout allait bien. Le soir, dans le nouvel appartement, tout était en désordre. Ce n'est pas grave : on a toute une semaine pour ranger. Et l'an prochain ? Tout le monde recommence.";

/** Act 4: the moving company's conditions. About 110 words. */
export const CONDITIONS_TEXT =
  "Déménagements Gagnon, conditions de location. Le camion est loué pour toute une journée, de sept heures à dix-neuf heures. Tout retard sera facturé vingt dollars l'heure. Toute boîte doit porter un nom et le numéro de la pièce. Tous vos objets fragiles doivent être emballés avant notre arrivée. Nos déménageurs ne démontent pas les meubles : tout meuble démonté par le client reste sous sa responsabilité. Tout objet oublié dans le camion sera gardé une semaine, puis donné. Pour toute question, appelez-nous : nous répondons tous les jours, sauf le dimanche. Toute l'équipe vous souhaite un bon déménagement.";

/** Act 9: Josée's letter to a friend in Liège. About 120 words. */
export const LETTRE_TEXT =
  "Chère Élodie, tu avais tout à fait raison : déménager en juillet, c'est de la folie. Tout à coup, à huit heures, le camion est tombé en panne devant l'immeuble. Le chauffeur a dit : « J'appelle un collègue, il arrive tout de suite. » Il est arrivé à midi. Le chien a aboyé tout le temps. Malgré tout, à six heures, tout était dans le nouvel appartement. Le propriétaire est passé tout à l'heure, de bonne humeur. En tout cas, on est enfin chez nous. Après tout, ce n'est qu'un appartement, et de toute façon, on n'avait pas le choix. Je t'appelle tout à l'heure, quand les enfants dormiront. Bises de Montréal, Josée.";

/** Act 11: the model the learner imitates. Mireille's message to her
 *  neighbours, organising a goodbye party. About 135 words. */
export const MESSAGE_TEXT =
  "Salut tout le monde ! Comme vous le savez, je quitte Montréal pour Moncton à la fin du mois. Avant de partir, je vous invite tous à une fête de départ, samedi prochain, dans la cour de l'immeuble. La fête dure tout l'après-midi, à partir de deux heures. J'ai déjà tout réservé : les tables, les chaises et la musique. Toutes les invitations sont parties, et presque tout le monde a répondu. Il reste quelques tâches. Hugo et Josée, venez tous les deux à midi pour installer les tables. Fatou s'occupe de toutes les boissons. Chacun apporte un plat, et on partage tout. Si tout va bien, on finit vers dix heures, et on range tous ensemble. Vous êtes tous les bienvenus, avec vos enfants. Merci à tous, et à samedi ! Mireille";

/** Every tout in MESSAGE_TEXT, in order, with its job and its sound. */
export const MESSAGE_TOUTS = [
  'tout le monde (déterminant, [too])', 'tous (pronom, [toos])', "tout l'après-midi (déterminant)",
  'tout (pronom)', 'toutes les invitations (déterminant)', 'tout le monde (déterminant)',
  'tous les deux (déterminant, [too])', 'toutes les boissons (déterminant)', 'tout (pronom)',
  'tout va bien (pronom)', 'tous ensemble (pronom, [toos])', 'tous les bienvenus (déterminant, [too])',
  'à tous (pronom, [toos])',
] as const;
