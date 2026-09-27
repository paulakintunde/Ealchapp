// b1.35.l1 « Les émotions » — the authored corpus, the imports and the
// citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md, in the VOCAB SHAPE, TOPIC VARIANT, of
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 and §2.3.
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
//   THE VOCABULARY OF FEELINGS AT B1, taught three ways at once:
//     FAMILIES     la colère, se mettre en colère, être en colère contre;
//                  la honte, avoir honte de, honteux; la fierté, être fier
//                  de; soulager, soulagé, le soulagement; décevoir, déçu, la
//                  déception, décevant
//     FORCE        the intensity scales: content < heureux < ravi < aux
//                  anges; agacé < énervé < en colère < furieux; inquiet <
//                  angoissé < paniqué
//     SUITE        what a feeling word pulls in after it: de + infinitif,
//                  que + subjonctif (lesson 15 in B1), contre, pour, de;
//                  ça me fait plaisir de / que, ça m'énerve que, ça me rend
//
//     act 1   the method: se sentir / ressentir, avoir hâte de, content pour
//             (the « je suis excité » trap)
//     act 2   joy: the scale, la joie / se réjouir de, faire plaisir
//     act 3   sadness and disappointment: triste, décevoir / déçu, avoir de
//             la peine (Québec nuance), faire de la peine, le moral à zéro
//     act 4   anger: the scale, la colère family, énerver, fâché contre /
//             avec, être tanné (Québec)
//     act 5   fear, worry, stress: the scale, s'inquiéter pour / de, le
//             stress family, faire peur
//     act 6   shame, pride, embarrassment: honte, fierté, gêne; who FEELS
//             (-é) against what CAUSES it (-ant)
//     act 7   surprise and relief: surprendre, étonner, soulager, rassurer
//     act 8   the grammar feelings pull in: de or que, pour or de, ça me
//     act 9   how a feeling changed: imparfait (the state) against passé
//             composé (the trigger), lessons 3 and 4 in B1
//     act 10  reacting to someone else's feelings, by register
//     act 11  a message to a friend: your emotional week and your reaction
//             to their news
//
//   NOT OWNED, CITED, NEVER RE-TAUGHT: the feelings idioms of lessons 27 to
//   29 in B1 (avoir le cœur gros, se faire du mauvais sang, avoir le cafard,
//   taper sur les nerfs, voir rouge, une colère noire, rouge de honte,
//   avoir une peur bleue, faire la tête, voir la vie en rose) are imported
//   as seed rows and shown as « tu connais déjà »; the subjunctive after a
//   feeling (lessons 14 to 16 in B1) is REUSED, never rebuilt; the
//   imparfait / passé composé choice (lessons 3 and 4) is applied to
//   feelings only.
//
//   NO UNGRAMMATICAL SENTENCE IS EVER A ROW. Every wrong form lives in a
//   `commonErrors.wrong`, a `trapDrill.promptSound`, a scene `break.wrong` or
//   a quiz `errorSpot.prompt`. Québec forms (être tanné, avoir de la peine,
//   capoter) are rows because they are right, tagged `quebec`.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, and Postgres probed read-only 2026-09-27
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `emotions` exists (« Les émotions », domain concepts, levelRange
//     a1-b1). Its `sub_themes` are EMPTY in the seed; the brief names three
//     (dire ce qu'on ressent, les nuances des sentiments, réagir aux
//     émotions des autres) and setting them is a Postgres edit outside an
//     authoring agent's reach: open question for the import.
//  2. POSTGRES PROBED READ-ONLY 2026-09-27: 312 rows, fr.a1 .001-.109 (109),
//     fr.a2 .001-.081 (81), fr.b1 .001-.122 (122). NOTHING at or above 1000
//     at any level.
//  3. ID BLOCK: b1.35 owns `fr.b1.emotions.1000`-`.1199` AND NOTHING ELSE.
//     Used: `.1000`-`.1177`, contiguous, in eleven act blocks. Compare full
//     ids, never numbers: the level is part of the id.
//  4. THE SEED CARRIES 20 emotions ROWS; Postgres holds 292 more that
//     `src()` cannot name. The Postgres list of NON-SENTENCE headwords (the
//     flashcard hub's key) was read in full, and NO authored phrase row here
//     equals one after the leading article is dropped: every family and
//     scale is a multi-member row (« content, heureux, ravi, aux anges »),
//     never the bare word the DB already carries (ravi, la colère, le
//     soulagement, être aux anges, angoissé...). Sentences never clash.
//     No DB_ONLY_TWINS were needed; the export is empty on purpose.
//  5. Reused rows come from `emotions`, `opinions-et-avis` (lessons 15 and
//     16), `recits-au-passe` (lessons 3 and 4), `pronoms-essentiels`,
//     `expressions-imagees` (lessons 27 to 29), `negation-et-restriction`,
//     `projets-et-futur` and `evenements-familiaux`, read from seed.json on
//     2026-09-27. Each is in §F with its French. Seed respellings are never
//     printed in a section, only fr/en.
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR, a real
//     /n/ or /m/ written double so `hasPlainNasal` cannot fire:
//       peine    PEHNN          gêne       ZHEHNN
//       Maude is not respelled; « même » is MEM, the house spelling.
//     No U+203F tie anywhere, in a respelling or an IPA field.
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
  id: 'b1.35',
  seq: 35,
  title: 'Emotions',
  sub: 'Les émotions',
  canDo: 'Can say how they feel and how a feeling changed, choosing the word at the right intensity and the construction it takes, and can react to a friend’s good or bad news in the right register, in speech and in a personal message',
  prereqUnitIds: ['b1.15', 'b1.16', 'b1.04'],
} as const;

export const LESSON_ID = 'b1.35.l1';
export const THEME = 'emotions';
export const LEVEL = 'b1' as const;

/** ONE block. DB holds fr.b1 .001-.122; b1.35 owns 1000-1199. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 * ══════════════════════════════════════════════════════════════════════════ */

export const PC_IMP_UNIT = 'b1.03';
export const PAIRES_UNIT = 'b1.04';
export const SUBJ_FORM_UNIT = 'b1.14';
export const SUBJ_DECL_UNIT = 'b1.15';
export const SUBJ_INF_UNIT = 'b1.16';
export const REGISTRES_UNIT = 'b1.25';
export const TU_VOUS_UNIT = 'b1.26';
export const CORPS_UNIT = 'b1.27';
export const ANIMAUX_UNIT = 'b1.28';
export const COULEURS_UNIT = 'b1.29';
export const AFFAIRES_UNIT = 'b1.36';

/** TODO(import): drop once every b1 unit is a row in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
  'b1.19': 19, 'b1.20': 20, 'b1.21': 21, 'b1.22': 22, 'b1.23': 23, 'b1.24': 24,
  'b1.25': 25, 'b1.26': 26, 'b1.27': 27, 'b1.28': 28, 'b1.29': 29, 'b1.30': 30,
  'b1.31': 31, 'b1.32': 32, 'b1.33': 33, 'b1.34': 34, 'b1.35': 35, 'b1.36': 36,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const PC_IMP_REF = refFr(PC_IMP_UNIT);
export const PAIRES_REF = refFr(PAIRES_UNIT);
export const SUBJ_FORM_REF = refFr(SUBJ_FORM_UNIT);
export const SUBJ_DECL_REF = refFr(SUBJ_DECL_UNIT);
export const SUBJ_INF_REF = refFr(SUBJ_INF_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const TU_VOUS_REF = refFr(TU_VOUS_UNIT);
export const CORPS_REF = refFr(CORPS_UNIT);
export const ANIMAUX_REF = refFr(ANIMAUX_UNIT);
export const COULEURS_REF = refFr(COULEURS_UNIT);
export const AFFAIRES_REF = refFr(AFFAIRES_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  A DIAL AND WHAT COMES AFTER IT. A feeling is not a single word: it sits
 *  on a dial (agacé, énervé, en colère, furieux), and the word you choose
 *  then pulls a construction behind it (en colère CONTRE, content DE partir,
 *  content QUE tu sois là, content POUR toi). The learner who has only
 *  « content » and « fâché » says too little or too much; the one who has
 *  the dial and the suite says exactly what they feel.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un sentiment se dit à la bonne force, avec la bonne suite.';
export const REFRAME_EN = 'A feeling is said at the right strength, with the right words after it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Il y a un mot pour chaque émotion.',
    why: 'That is the noun list the shapes doc (§2.3) forbids, and it is false at B1: « content », « ravi » and « aux anges » are one emotion at three strengths, and knowing « la colère » alone never gives « en colère contre ».',
  },
  {
    text: 'Je suis + adjectif, et c’est tout.',
    why: 'False on half the screens: avoir peur, avoir honte, avoir hâte, ça m’énerve, ça me fait plaisir, ça me rend triste are not « je suis + adjectif », and act 8 is about what comes AFTER the adjective.',
  },
  {
    text: 'Plus le mot est fort, plus tu es sincère.',
    why: 'A lecture, and wrong where act 10 must hold: « furieux » for a late bus, or « aux anges » for a sandwich, sounds odd or rude. The right strength is the one that matches.',
  },
  {
    text: 'Un sentiment se dit au présent.',
    why: 'Act 9 exists to contradict it: « j’étais inquiet » (the state) and « j’ai eu peur » (the moment it started) tell two different stories.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-27 and its French is in the
 *  trailing comment. `(named only)` rows carry no `flashcard` drill.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a1.emotions.001',                  // heureux
    'fr.b1.recits-au-passe.172',           // J'étais content de te voir.
  ],
  act2: [
    'fr.b1.pronoms-essentiels.1252',       // Nous sommes ravis de cette nouvelle.
    'fr.b1.opinions-et-avis.1274',         // Je suis ravi que vous veniez dîner samedi.
    'fr.b1.expressions-imagees.1508',      // voir la vie en rose
    'fr.a2.evenements-familiaux.003',      // Ma tante a pleuré de joie en voyant le bébé.  (named only)
  ],
  act3: [
    'fr.b1.recits-au-passe.173',           // Elle était triste ce jour-là.
    'fr.b1.expressions-imagees.1158',      // avoir le cœur gros
    'fr.b1.expressions-imagees.1263',      // avoir le cafard
    'fr.b1.expressions-imagees.1142',      // faire la tête
  ],
  act4: [
    'fr.b1.pronoms-essentiels.1506',       // Ce qui m'énerve, c'est le bruit.
    'fr.b1.expressions-imagees.1030',      // taper sur les nerfs
    'fr.b1.expressions-imagees.1402',      // voir rouge
    'fr.b1.expressions-imagees.1429',      // une colère noire
  ],
  act5: [
    'fr.b1.pronoms-essentiels.1167',       // Ce qui m'inquiète, c'est le prix.
    'fr.b1.expressions-imagees.1162',      // se faire du mauvais sang
    'fr.b1.expressions-imagees.1401',      // avoir une peur bleue
    'fr.b1.emotions.054',                  // avoir des papillons dans le ventre
  ],
  act6: [
    'fr.a1.emotions.037',                  // avoir honte
    'fr.b1.pronoms-essentiels.1244',       // Je suis fier de ce travail.
    'fr.b1.expressions-imagees.1446',      // rouge de honte
    'fr.b1.projets-et-futur.355',          // Tu seras fier de toi.
  ],
  act7: [
    'fr.b1.recits-au-passe.1237',          // J'ai été très surpris.
    'fr.b1.recits-au-passe.1153',          // Heureusement, tout s'est bien terminé.
  ],
  act8: [
    'fr.b1.opinions-et-avis.1003',         // Je suis content que tu sois là.
    'fr.b1.opinions-et-avis.1440',         // Je suis content de travailler avec vous.
    'fr.b1.opinions-et-avis.1441',         // Je suis content que tu travailles avec nous.
    'fr.b1.opinions-et-avis.1443',         // Elle a peur que son fils rate son train.
    'fr.b1.opinions-et-avis.1442',         // Elle a peur de rater son train.
  ],
  act9: [
    'fr.b1.recits-au-passe.1222',          // J'avais peur du chien.
    'fr.b1.recits-au-passe.1223',          // Quand le chien a aboyé, j'ai eu peur.
    'fr.b1.recits-au-passe.1220',          // j'avais peur
    'fr.b1.recits-au-passe.1221',          // j'ai eu peur
  ],
  act10: [
    'fr.b1.negation-et-restriction.1179',  // Ne t'inquiète pas.
    'fr.b1.projets-et-futur.386',          // Ça ira, ne t’inquiète pas.
    'fr.b1.recits-au-passe.1209',          // Tu as dû avoir peur.
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a2.evenements-familiaux.003',  // dictation only
];

/** No `voiceflash` either: never in a `practice` speak section. The lesson
 *  file asserts at load that every import NOT listed here has voiceflash. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
];

/** Published Postgres rows the seed does not carry. None was twinned: see
 *  §A.4. Kept as an empty export so the import reads the same shape. */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Four kinds of row: a FAMILY row (phrase, tag famille), a SCALE row
 *  (phrase, tag echelle: one feeling from weak to strong), a COLLOCATION row
 *  (phrase, tag collocation: the word with its suite), and sentence rows.
 *  `register` is set on every row (familier or courant; soutenu for the
 *  condolence formulas).
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
type Reg = 'familier' | 'courant' | 'soutenu';

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const GP = ['emotions-vocabulaire'];

/** A word family: every member in one card. */
const fam = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string, register: Reg = 'courant'): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['famille', ...tags], drills: FCVR, version: 1, register, grammarPoints: GP, notes,
});

/** A scale: one feeling from weakest to strongest. */
const ech = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string, register: Reg = 'courant'): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['echelle', ...tags], drills: FCVR, version: 1, register, grammarPoints: GP, notes,
});

/** A collocation: the word and its suite. */
const col = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes?: string, register: Reg = 'courant'): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['collocation', ...tags], drills: FCVR, version: 1, register, grammarPoints: GP,
  ...(notes ? { notes } : {}),
});

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Item> = {}, register: Reg = 'courant',
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register, grammarPoints: GP, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · DIRE CE QUE TU RESSENS ──────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  fam(1000, 'sentir, se sentir, ressentir, un sentiment', 'to smell, to feel (+ adjective), to feel (+ noun), a feeling', '/sɑ̃.tiʁ sə sɑ̃.tiʁ ʁə.sɑ̃.tiʁ œ̃ sɑ̃.ti.mɑ̃/', 'sahⁿ-TEER, suh sahⁿ-TEER, ruh-sahⁿ-TEER, uhⁿ sahⁿ-tee-MAHⁿ', ['methode'], 'Je me sens seul ; je ressens de la colère.'),
  col(1001, 'avoir hâte de', 'to look forward to, to be eager to', '/a.vwaʁ ɑt də/', 'a-VWAR AHT duh', ['joie', 'suite'], 'Pour une bonne nouvelle, pas je suis excité.'),
  col(1002, "être content pour quelqu'un", 'to be happy for someone', '/ɛtʁ kɔ̃.tɑ̃ puʁ kɛl.kœ̃/', 'ehtr kohⁿ-TAHⁿ poor kehl-KUHⁿ', ['joie', 'suite'], 'Pour : sa bonne nouvelle te fait plaisir.'),
  col(1003, 'se sentir mieux', 'to feel better', '/sə sɑ̃.tiʁ mjø/', 'suh sahⁿ-teer MYUH', ['methode']),
  sent(1004, 'Je me sens un peu perdue depuis mon déménagement.', 'I have felt a bit lost since my move.', '/ʒə mə sɑ̃ œ̃ pø pɛʁ.dy də.pɥi mɔ̃ de.me.naʒ.mɑ̃/', 'zhuh muh SAHⁿ uhⁿ puh pehr-DÜ | duh-pwee mohⁿ day-may-nazh-MAHⁿ', ['methode']),
  sent(1005, 'Je suis tellement contente pour toi.', 'I am so happy for you.', '/ʒə sɥi tɛl.mɑ̃ kɔ̃.tɑ̃t puʁ twa/', 'zhuh swee tehl-MAHⁿ kohⁿ-TAHⁿT poor TWA', ['scene', 'joie'], FCVDR),
  sent(1006, "J'ai hâte de te voir à Montréal.", 'I cannot wait to see you in Montréal.', '/ʒe ɑt də tə vwaʁ a mɔ̃.ʁe.al/', 'zhay AHT duh tuh VWAR a mohⁿ-ray-AL', ['scene', 'joie', 'quebec'], FCVDR),
  sent(1007, 'Je ressens surtout de la joie, et un peu de peur.', 'Mostly I feel joy, and a little fear.', '/ʒə ʁə.sɑ̃ syʁ.tu də la ʒwa e œ̃ pø də pœʁ/', 'zhuh ruh-SAHⁿ sür-TOO duh la ZHWA | ay uhⁿ puh duh PUHR', ['methode']),
  sent(1008, 'Ça fait du bien de le dire.', 'It feels good to say it.', '/sa fɛ dy bjɛ̃ də lə diʁ/', 'sa feh dü BYEHⁿ duh luh DEER', ['methode']),
  sent(1009, REFRAME, REFRAME_EN, '/œ̃ sɑ̃.ti.mɑ̃ sə di a la bɔn fɔʁs a.vɛk la bɔn sɥit/', 'uhⁿ sahⁿ-tee-MAHⁿ suh DEE a la bonn FORSS | a-vehk la bonn SWEET', ['rule', 'reframe'], ['flashcard'],
    rule('Un sentiment : que faut-il choisir ?', 'Le mot à la bonne force, puis la bonne suite : de, que, pour, contre.')),
  sent(1010, "Pour une bonne nouvelle, on dit j'ai hâte, pas je suis excité.", 'For good news, say j’ai hâte, not je suis excité.', '/puʁ yn bɔn nu.vɛl ɔ̃ di ʒe ɑt pa ʒə sɥi ɛk.si.te/', 'poor ün bonn noo-VEHL | ohⁿ DEE zhay AHT | pa zhuh swee ehk-see-TAY', ['faux-ami']),
  sent(1011, "Tu te sens comment aujourd'hui ?", 'How are you feeling today?', '/ty tə sɑ̃ kɔ.mɑ̃ o.ʒuʁ.dɥi/', 'tü tuh SAHⁿ ko-MAHⁿ oh-zhoor-DWEE', ['methode'], FCVR, {}, 'familier'),
  sent(1012, 'Je me sens mieux depuis hier.', 'I have been feeling better since yesterday.', '/ʒə mə sɑ̃ mjø də.pɥi jɛʁ/', 'zhuh muh sahⁿ MYUH duh-pwee YEHR', ['methode'], FCVDR),
  sent(1013, 'Elle est contente pour sa sœur.', 'She is happy for her sister.', '/ɛ.lɛ kɔ̃.tɑ̃t puʁ sa sœʁ/', 'eh-leh kohⁿ-TAHⁿT poor sa SUHR', ['joie', 'suite']),
  sent(1014, "Se sentir va avec un adjectif ; ressentir va avec un nom.", 'Se sentir takes an adjective; ressentir takes a noun.', '/sə sɑ̃.tiʁ va a.vɛ.kœ̃.na.ʒɛk.tif ʁə.sɑ̃.tiʁ va a.vɛ.kœ̃ nɔ̃/', 'suh sahⁿ-TEER va a-veh-kuh-na-zhehk-TEEF | ruh-sahⁿ-TEER va a-veh-kuhⁿ NOHⁿ', ['rule', 'methode'], ['flashcard'],
    rule('Je me sens triste, ou je ressens triste ?', 'Je me sens triste. Ressentir prend un nom : je ressens de la tristesse.')),
];

/* ── ACT 2 · LA JOIE ─────────────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  ech(1015, 'content, heureux, ravi, aux anges', 'pleased, happy, delighted, over the moon', '/kɔ̃.tɑ̃ ø.ʁø ʁa.vi o.zɑ̃ʒ/', 'kohⁿ-TAHⁿ, uh-RUH, ra-VEE, oh-ZAHⁿZH', ['joie'], 'Du plus faible au plus fort.'),
  fam(1016, 'la joie, joyeux, se réjouir de', 'joy, joyful, to be glad about', '/la ʒwa ʒwa.jø sə ʁe.ʒwiʁ də/', 'la ZHWA, zhwa-YUH, suh ray-ZHWEER duh', ['joie'], 'Se réjouir de : un peu plus soutenu que être content de.'),
  col(1017, 'ça me fait plaisir', 'I am pleased, that is nice', '/sa mə fɛ plɛ.ziʁ/', 'sa muh feh pleh-ZEER', ['joie', 'suite']),
  col(1018, "faire plaisir à quelqu'un", 'to make someone happy', '/fɛʁ plɛ.ziʁ a kɛl.kœ̃/', 'fehr pleh-ZEER a kehl-KUHⁿ', ['joie', 'suite']),
  col(1019, 'sauter de joie', 'to jump for joy', '/so.te də ʒwa/', 'soh-TAY duh ZHWA', ['joie']),
  sent(1020, 'Je suis content de mon nouveau travail.', 'I am pleased with my new job.', '/ʒə sɥi kɔ̃.tɑ̃ də mɔ̃ nu.vo tʁa.vaj/', 'zhuh swee kohⁿ-TAHⁿ duh mohⁿ noo-voh tra-VAHY', ['joie']),
  sent(1021, 'On est heureux dans notre nouvel appartement.', 'We are happy in our new flat.', '/ɔ̃.nɛ.tø.ʁø dɑ̃ nɔtʁ nu.vɛ.la.paʁ.tə.mɑ̃/', 'ohⁿ-neh-tuh-RUH | dahⁿ notr noo-veh-la-par-tuh-MAHⁿ', ['joie'], FCVR, {}, 'familier'),
  sent(1022, 'Elle est ravie de sa promotion.', 'She is delighted with her promotion.', '/ɛ.lɛ ʁa.vi də sa pʁɔ.mo.sjɔ̃/', 'eh-leh ra-VEE duh sa pro-mo-SYOHⁿ', ['joie'], FCVDR),
  sent(1023, 'Depuis la naissance du bébé, ils sont aux anges.', 'Since the baby was born, they have been over the moon.', '/də.pɥi la nɛ.sɑ̃s dy be.be il sɔ̃.to.zɑ̃ʒ/', 'duh-pwee la neh-SAHⁿSS dü bay-BAY | eel sohⁿ-toh-ZAHⁿZH', ['joie']),
  sent(1024, "Ta visite m'a fait très plaisir.", 'Your visit made me very happy.', '/ta vi.zit ma fɛ tʁɛ plɛ.ziʁ/', 'ta vee-ZEET ma feh treh pleh-ZEER', ['joie']),
  sent(1025, "Ça me fait plaisir de t'aider.", 'I am glad to help you.', '/sa mə fɛ plɛ.ziʁ də te.de/', 'sa muh feh pleh-ZEER duh teh-DAY', ['joie', 'suite'], FCVDR),
  sent(1026, 'Je me réjouis de te revoir cet été.', 'I am looking forward to seeing you again this summer.', '/ʒə mə ʁe.ʒwi də tə ʁə.vwaʁ sɛ.te.te/', 'zhuh muh ray-ZHWEE duh tuh ruh-VWAR seh-tay-TAY', ['joie']),
  sent(1027, 'Les enfants sautaient de joie dans le salon.', 'The children were jumping for joy in the living room.', '/le.zɑ̃.fɑ̃ so.tɛ də ʒwa dɑ̃ lə sa.lɔ̃/', 'lay-zahⁿ-FAHⁿ soh-TEH duh ZHWA | dahⁿ luh sa-LOHⁿ', ['joie']),
  sent(1028, "Au Québec, on dit aussi : je capote, c'est trop beau.", 'In Québec you also hear: I am freaking out, it is too good.', '/o ke.bɛk ɔ̃ di o.si ʒə ka.pɔt sɛ tʁo bo/', 'oh kay-BEHK ohⁿ dee oh-SEE | zhuh ka-POT | seh troh BOH', ['joie', 'quebec', 'variante'], FCVR, {}, 'familier'),
  sent(1029, "Content, c'est un peu ; aux anges, c'est au maximum.", 'Content is a little; aux anges is the maximum.', '/kɔ̃.tɑ̃ sɛ.tœ̃ pø o.zɑ̃ʒ sɛ.to mak.si.mɔm/', 'kohⁿ-TAHⁿ seh-tuhⁿ PUH | oh-ZAHⁿZH seh-toh mak-see-MOMM', ['rule', 'echelle'], ['flashcard'],
    rule('Content ou aux anges : lequel est le plus fort ?', 'Aux anges. Content, heureux, ravi, puis aux anges.')),
  sent(1030, 'Quelle joie de vous voir tous ensemble !', 'What a joy to see you all together!', '/kɛl ʒwa də vu vwaʁ tu.sɑ̃.sɑ̃bl/', 'kehl ZHWA duh voo VWAR | too-sahⁿ-SAHⁿBL', ['joie'], FCVDR),
];

/* ── ACT 3 · LA TRISTESSE ET LA DÉCEPTION ─────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  fam(1031, 'triste, la tristesse, attristé', 'sad, sadness, saddened', '/tʁist la tʁis.tɛs a.tʁis.te/', 'TREEST, la trees-TEHSS, a-trees-TAY', ['tristesse'], 'Attristé est un peu soutenu : attristé par la nouvelle.'),
  fam(1032, 'décevoir, déçu, la déception, décevant', 'to disappoint, disappointed, disappointment, disappointing', '/de.sə.vwaʁ de.sy la de.sɛp.sjɔ̃ de.sə.vɑ̃/', 'day-suh-VWAR, day-SÜ, la day-sehp-SYOHⁿ, day-suh-VAHⁿ', ['tristesse', 'faux-ami'], "Pas to deceive : ça, c'est tromper."),
  col(1033, 'avoir de la peine', 'to be sad, to be hurt', '/a.vwaʁ də la pɛn/', 'a-VWAR duh la PEHNN', ['tristesse', 'quebec'], 'Très courant au Québec pour dire triste. Avec à + infinitif : avoir du mal.'),
  col(1034, "faire de la peine à quelqu'un", "to hurt someone's feelings", '/fɛʁ də la pɛn a kɛl.kœ̃/', 'fehr duh la PEHNN a kehl-KUHⁿ', ['tristesse', 'suite']),
  col(1035, 'avoir le moral à zéro', 'to feel really low', '/a.vwaʁ lə mɔ.ʁal a ze.ʁo/', 'a-VWAR luh mo-RAL a zay-ROH', ['tristesse'], 'Le contraire : avoir le moral.', 'familier'),
  col(1036, 'être déçu de, être déçu par', 'to be disappointed with, by', '/ɛtʁ de.sy də ɛtʁ de.sy paʁ/', 'ehtr day-SÜ duh, ehtr day-SÜ PAR', ['tristesse', 'suite']),
  sent(1037, 'Elle est triste depuis le départ de son frère.', 'She has been sad since her brother left.', '/ɛ.lɛ tʁist də.pɥi lə de.paʁ də sɔ̃ fʁɛʁ/', 'eh-leh TREEST | duh-pwee luh day-PAR duh sohⁿ FREHR', ['tristesse']),
  sent(1038, 'Je suis déçu de mes résultats.', 'I am disappointed with my results.', '/ʒə sɥi de.sy də me ʁe.zyl.ta/', 'zhuh swee day-SÜ duh may ray-zül-TA', ['tristesse', 'suite'], FCVDR),
  sent(1039, 'Ce film était vraiment décevant.', 'That film was really disappointing.', '/sə film e.tɛ vʁɛ.mɑ̃ de.sə.vɑ̃/', 'suh FEELM ay-TEH vreh-MAHⁿ day-suh-VAHⁿ', ['tristesse']),
  sent(1040, 'Quelle déception, le concert est annulé.', 'What a disappointment, the concert is cancelled.', '/kɛl de.sɛp.sjɔ̃ lə kɔ̃.sɛʁ ɛ.ta.ny.le/', 'kehl day-sehp-SYOHⁿ | luh kohⁿ-SEHR eh-ta-nü-LAY', ['tristesse']),
  sent(1041, "Ta remarque m'a fait de la peine.", 'Your remark hurt my feelings.', '/ta ʁə.maʁk ma fɛ də la pɛn/', 'ta ruh-MARK ma feh duh la PEHNN', ['tristesse', 'suite'], FCVDR),
  sent(1042, 'Mon grand-père a eu beaucoup de peine quand son chien est mort.', 'My grandfather was very sad when his dog died.', '/mɔ̃ ɡʁɑ̃.pɛʁ a y bo.ku də pɛn kɑ̃ sɔ̃ ʃjɛ̃ ɛ mɔʁ/', 'mohⁿ grahⁿ-PEHR a Ü boh-koo duh PEHNN | kahⁿ sohⁿ SHYEHⁿ eh MOR', ['tristesse', 'quebec']),
  sent(1043, "Cette semaine, j'ai le moral à zéro.", 'This week I feel really low.', '/sɛt sə.mɛn ʒe lə mɔ.ʁal a ze.ʁo/', 'seht suh-MEHNN | zhay luh mo-RAL a zay-ROH', ['tristesse'], FCVR, {}, 'familier'),
  sent(1044, 'Il ne veut pas te décevoir.', 'He does not want to disappoint you.', '/il nə vø pa tə de.sə.vwaʁ/', 'eel nuh VUH pa tuh day-suh-VWAR', ['tristesse']),
  sent(1045, "Avec à et un infinitif, avoir de la peine veut dire avoir du mal.", 'With à and an infinitive, avoir de la peine means to have trouble.', '/a.vɛk a e œ̃.nɛ̃.fi.ni.tif a.vwaʁ də la pɛn vø diʁ a.vwaʁ dy mal/', 'a-vehk A ay uh-nehⁿ-fee-nee-TEEF | a-vwar duh la PEHNN vuh DEER a-vwar dü MAL', ['rule', 'variante'], ['flashcard'],
    rule('Avoir de la peine : triste, ou difficile ?', "Triste, surtout au Québec. Avec à + infinitif : difficile. J'ai de la peine à dormir.")),
  sent(1046, "Décevoir, ce n'est pas tromper.", 'Décevoir is not to deceive.', '/de.sə.vwaʁ sə nɛ pa tʁɔ̃.pe/', 'day-suh-VWAR | suh neh pa trohⁿ-PAY', ['rule', 'faux-ami'], ['flashcard'],
    rule('To deceive : décevoir ?', "Non. Décevoir, c'est to disappoint. To deceive : tromper.")),
];

/* ── ACT 4 · LA COLÈRE ───────────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  ech(1047, 'agacé, énervé, en colère, furieux', 'annoyed, irritated, angry, furious', '/a.ɡa.se e.nɛʁ.ve ɑ̃ kɔ.lɛʁ fy.ʁjø/', 'a-ga-SAY, ay-nehr-VAY, ahⁿ ko-LEHR, fü-RYUH', ['colere'], 'Du plus faible au plus fort.'),
  fam(1048, 'la colère, se mettre en colère, être en colère contre', 'anger, to get angry, to be angry with', '/la kɔ.lɛʁ sə mɛtʁ ɑ̃ kɔ.lɛʁ ɛtʁ ɑ̃ kɔ.lɛʁ kɔ̃tʁ/', 'la ko-LEHR, suh mehtr ahⁿ ko-LEHR, ehtr ahⁿ ko-LEHR KOHⁿTR', ['colere', 'suite'], 'La colère est un nom : on est en colère, pas colère.'),
  fam(1049, "énerver, s'énerver, énervant", 'to annoy, to get worked up, annoying', '/e.nɛʁ.ve se.nɛʁ.ve e.nɛʁ.vɑ̃/', 'ay-nehr-VAY, say-nehr-VAY, ay-nehr-VAHⁿ', ['colere'], 'Énervé : toi. Énervant : ce qui t’énerve.'),
  col(1050, "ça m'énerve", 'it annoys me', '/sa me.nɛʁv/', 'sa may-NEHRV', ['colere', 'suite'], undefined, 'familier'),
  fam(1051, 'se fâcher, fâché contre, fâché avec', 'to get cross, cross with, not on speaking terms with', '/sə fa.ʃe fa.ʃe kɔ̃tʁ fa.ʃe a.vɛk/', 'suh fa-SHAY, fa-SHAY KOHⁿTR, fa-SHAY a-VEHK', ['colere', 'suite'], 'Fâché avec : on ne se parle plus. Au Québec, fâché veut souvent dire en colère.'),
  col(1052, 'être tanné', 'to be fed up (Québec)', '/ɛtʁ ta.ne/', 'ehtr ta-NAY', ['colere', 'quebec', 'variante'], 'Au Québec. En France : en avoir marre.', 'familier'),
  sent(1053, 'Je suis un peu agacée par ce bruit.', 'I am a bit annoyed by this noise.', '/ʒə sɥi œ̃ pø a.ɡa.se paʁ sə bʁɥi/', 'zhuh swee uhⁿ puh a-ga-SAY | par suh BRWEE', ['colere']),
  sent(1054, "Il s'est mis en colère contre son fils.", 'He got angry with his son.', '/il sɛ mi ɑ̃ kɔ.lɛʁ kɔ̃tʁ sɔ̃ fis/', 'eel seh MEE ahⁿ ko-LEHR | kohⁿtr sohⁿ FEESS', ['colere', 'suite'], FCVDR),
  sent(1055, 'Elle est en colère contre moi.', 'She is angry with me.', '/ɛ.lɛ.tɑ̃ kɔ.lɛʁ kɔ̃tʁ mwa/', 'eh-leh-tahⁿ ko-LEHR kohⁿtr MWA', ['colere', 'suite']),
  sent(1056, "Ça m'énerve quand le bus est en retard.", 'It annoys me when the bus is late.', '/sa me.nɛʁv kɑ̃ lə bys ɛ.tɑ̃ ʁə.taʁ/', 'sa may-NEHRV | kahⁿ luh BÜS eh-tahⁿ ruh-TAR', ['colere'], FCVR, {}, 'familier'),
  sent(1057, "Ne t'énerve pas, on va trouver une solution.", 'Do not get worked up, we will find a solution.', '/nə te.nɛʁv pa ɔ̃ va tʁu.ve yn sɔ.ly.sjɔ̃/', 'nuh tay-NEHRV PA | ohⁿ va troo-VAY ün so-lü-SYOHⁿ', ['colere'], FCVDR),
  sent(1058, 'Mon voisin est vraiment énervant.', 'My neighbour is really annoying.', '/mɔ̃ vwa.zɛ̃ ɛ vʁɛ.mɑ̃ e.nɛʁ.vɑ̃/', 'mohⁿ vwa-ZEHⁿ eh vreh-MAHⁿ ay-nehr-VAHⁿ', ['colere']),
  sent(1059, 'Quand il a vu sa voiture, il était furieux.', 'When he saw his car, he was furious.', '/kɑ̃.ti.la vy sa vwa.tyʁ i.le.tɛ fy.ʁjø/', 'kahⁿ-tee-la VÜ sa vwa-TÜR | ee-lay-TEH fü-RYUH', ['colere']),
  sent(1060, "Je suis tanné de l'hiver.", 'I am fed up with winter.', '/ʒə sɥi ta.ne də li.vɛʁ/', 'zhuh swee ta-NAY duh lee-VEHR', ['colere', 'quebec'], FCVDR, {}, 'familier'),
  sent(1061, 'Mes deux sœurs sont fâchées depuis Noël.', 'My two sisters have not been speaking since Christmas.', '/me dø sœʁ sɔ̃ fa.ʃe də.pɥi nɔ.ɛl/', 'may DUH SUHR sohⁿ fa-SHAY | duh-pwee no-EHL', ['colere']),
  sent(1062, 'Il est fâché contre son patron.', 'He is cross with his boss.', '/i.lɛ fa.ʃe kɔ̃tʁ sɔ̃ pa.tʁɔ̃/', 'ee-leh fa-SHAY kohⁿtr sohⁿ pa-TROHⁿ', ['colere', 'suite']),
  sent(1063, "On est en colère contre quelqu'un, jamais à quelqu'un.", 'You are angry with someone: contre, never à.', '/ɔ̃.nɛ.tɑ̃ kɔ.lɛʁ kɔ̃tʁ kɛl.kœ̃ ʒa.mɛ a kɛl.kœ̃/', 'ohⁿ-neh-tahⁿ ko-LEHR kohⁿtr kehl-KUHⁿ | zha-MEH a kehl-KUHⁿ', ['rule', 'suite'], ['flashcard'],
    rule('Angry with Marc : en colère ... Marc ?', 'Contre. En colère contre Marc, fâché contre Marc.')),
];

/* ── ACT 5 · LA PEUR, L'INQUIÉTUDE, LE STRESS ─────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  ech(1064, 'inquiet, angoissé, paniqué', 'worried, anxious, panicking', '/ɛ̃.kjɛ ɑ̃.ɡwa.se pa.ni.ke/', 'ehⁿ-KYEH, ahⁿ-gwa-SAY, pa-nee-KAY', ['peur'], 'Du plus faible au plus fort.'),
  fam(1065, "s'inquiéter, l'inquiétude, inquiétant", 'to worry, worry, worrying', '/sɛ̃.kje.te lɛ̃.kje.tyd ɛ̃.kje.tɑ̃/', 'sehⁿ-kyay-TAY, lehⁿ-kyay-TÜD, ehⁿ-kyay-TAHⁿ', ['peur'], 'Inquiet : toi. Inquiétant : ce qui t’inquiète.'),
  col(1066, "s'inquiéter pour quelqu'un", 'to worry about someone', '/sɛ̃.kje.te puʁ kɛl.kœ̃/', 'sehⁿ-kyay-TAY poor kehl-KUHⁿ', ['peur', 'suite'], 'Pour une personne ; de quelque chose.'),
  col(1067, "ça m'inquiète", 'it worries me', '/sa mɛ̃.kjɛt/', 'sa mehⁿ-KYEHT', ['peur', 'suite']),
  fam(1068, 'le stress, stressé, stressant, stresser', 'stress, stressed, stressful, to stress', '/lə stʁɛs stʁɛ.se stʁɛ.sɑ̃ stʁɛ.se/', 'luh STREHSS, streh-SAY, streh-SAHⁿ, streh-SAY', ['peur'], 'Stressé : toi. Stressant : ce qui te stresse.'),
  col(1069, "faire peur à quelqu'un", 'to frighten someone', '/fɛʁ pœʁ a kɛl.kœ̃/', 'fehr PUHR a kehl-KUHⁿ', ['peur', 'suite']),
  sent(1070, "Je m'inquiète pour ma mère, elle vit seule.", 'I am worried about my mother, she lives alone.', '/ʒə mɛ̃.kjɛt puʁ ma mɛʁ ɛl vi sœl/', 'zhuh mehⁿ-KYEHT poor ma MEHR | ehl vee SUHL', ['peur', 'suite'], FCVDR),
  sent(1071, "Ça m'inquiète qu'il ne réponde pas.", 'It worries me that he is not answering.', '/sa mɛ̃.kjɛt kil nə ʁe.pɔ̃d pa/', 'sa mehⁿ-KYEHT | keel nuh ray-POHⁿD PA', ['peur', 'subjonctif']),
  sent(1072, "Avant l'examen, j'étais vraiment angoissée.", 'Before the exam I was really anxious.', '/a.vɑ̃ lɛɡ.za.mɛ̃ ʒe.tɛ vʁɛ.mɑ̃ ɑ̃.ɡwa.se/', 'a-vahⁿ lehg-za-MEHⁿ | zhay-TEH vreh-MAHⁿ ahⁿ-gwa-SAY', ['peur']),
  sent(1073, 'Il a paniqué quand il a perdu son passeport.', 'He panicked when he lost his passport.', '/i.la pa.ni.ke kɑ̃.ti.la pɛʁ.dy sɔ̃ pas.pɔʁ/', 'ee-la pa-nee-KAY | kahⁿ-tee-la pehr-DÜ sohⁿ pass-POR', ['peur']),
  sent(1074, 'Mon travail est stressant en ce moment.', 'My job is stressful at the moment.', '/mɔ̃ tʁa.vaj ɛ stʁɛ.sɑ̃ ɑ̃ sə mɔ.mɑ̃/', 'mohⁿ tra-VAHY eh streh-SAHⁿ | ahⁿ suh mo-MAHⁿ', ['peur'], FCVDR),
  sent(1075, 'Je suis stressé à cause des délais.', 'I am stressed because of the deadlines.', '/ʒə sɥi stʁɛ.se a koz de de.lɛ/', 'zhuh swee streh-SAY | a KOHZ day day-LEH', ['peur']),
  sent(1076, 'Les orages me font peur.', 'Storms frighten me.', '/le.zɔ.ʁaʒ mə fɔ̃ pœʁ/', 'lay-zo-RAZH muh fohⁿ PUHR', ['peur', 'suite']),
  sent(1077, 'Pas de panique, on a encore le temps.', 'Do not panic, we still have time.', '/pa də pa.nik ɔ̃.na ɑ̃.kɔʁ lə tɑ̃/', 'pa duh pa-NEEK | ohⁿ-na ahⁿ-KOR luh TAHⁿ', ['peur'], FCVR, {}, 'familier'),
  sent(1078, 'Le manque de sommeil augmente le stress.', 'Lack of sleep increases stress.', '/lə mɑ̃k də sɔ.mɛj ɔɡ.mɑ̃t lə stʁɛs/', 'luh MAHⁿK duh so-MEHY | og-MAHⁿT luh STREHSS', ['peur']),
  sent(1079, "L'inquiétude l'empêche de dormir.", 'Worry keeps him from sleeping.', '/lɛ̃.kje.tyd lɑ̃.pɛʃ də dɔʁ.miʁ/', 'lehⁿ-kyay-TÜD | lahⁿ-PEHSH duh dor-MEER', ['peur']),
  sent(1080, "On s'inquiète pour quelqu'un, et de quelque chose.", 'You worry about someone with pour, about something with de.', '/ɔ̃ sɛ̃.kjɛt puʁ kɛl.kœ̃ e də kɛl.kə ʃoz/', 'ohⁿ sehⁿ-KYEHT poor kehl-KUHⁿ | ay duh kehl-kuh SHOHZ', ['rule', 'suite'], ['flashcard'],
    rule('Worried about you : je m’inquiète ... toi ?', 'Pour toi. On s’inquiète pour une personne, de quelque chose.')),
];

/* ── ACT 6 · LA HONTE, LA FIERTÉ, LA GÊNE ─────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  fam(1081, 'la honte, avoir honte de, honteux', 'shame, to be ashamed of, ashamed', '/la ɔ̃t a.vwaʁ ɔ̃t də ɔ̃.tø/', 'la OHⁿT, a-vwar OHⁿT duh, ohⁿ-TUH', ['honte', 'suite'], 'Familier : « La honte » veut dire quelle situation gênante.'),
  fam(1082, 'la fierté, être fier de, être fier de soi', 'pride, to be proud of, to be proud of yourself', '/la fjɛʁ.te ɛtʁ fjɛʁ də ɛtʁ fjɛʁ də swa/', 'la fyehr-TAY, ehtr FYEHR duh, ehtr FYEHR duh SWA', ['fierte', 'suite'], 'Fier de, jamais fier pour.'),
  fam(1083, 'gêner, gêné, gênant, la gêne', 'to bother, embarrassed, awkward, embarrassment', '/ʒɛ.ne ʒɛ.ne ʒɛ.nɑ̃ la ʒɛn/', 'zheh-NAY, zheh-NAY, zheh-NAHⁿ, la ZHEHNN', ['gene'], 'Gêné : la personne. Gênant : la situation.'),
  col(1084, "se sentir mal à l'aise", 'to feel uncomfortable', '/sə sɑ̃.tiʁ ma.la.lɛz/', 'suh sahⁿ-teer ma-la-LEHZ', ['gene']),
  col(1085, "avoir honte pour quelqu'un", 'to feel embarrassed for someone', '/a.vwaʁ ɔ̃t puʁ kɛl.kœ̃/', 'a-vwar OHⁿT poor kehl-KUHⁿ', ['honte', 'suite']),
  sent(1086, "J'ai honte de mon retard.", 'I am ashamed of being late.', '/ʒe ɔ̃t də mɔ̃ ʁə.taʁ/', 'zhay OHⁿT duh mohⁿ ruh-TAR', ['honte', 'suite']),
  sent(1087, 'Il avait honte de ne pas savoir répondre.', 'He was ashamed not to know the answer.', '/i.la.vɛ ɔ̃t də nə pa sa.vwaʁ ʁe.pɔ̃dʁ/', 'ee-la-VEH OHⁿT | duh nuh pa sa-VWAR ray-POHⁿDR', ['honte', 'suite'], FCVDR),
  sent(1088, 'Je suis fière de toi.', 'I am proud of you.', '/ʒə sɥi fjɛʁ də twa/', 'zhuh swee FYEHR duh TWA', ['fierte', 'suite'], FCVDR),
  sent(1089, "Elle est fière d'avoir fini son marathon.", 'She is proud of having finished her marathon.', '/ɛ.lɛ fjɛʁ da.vwaʁ fi.ni sɔ̃ ma.ʁa.tɔ̃/', 'eh-leh FYEHR | da-VWAR fee-NEE sohⁿ ma-ra-TOHⁿ', ['fierte', 'suite']),
  sent(1090, 'Ses parents parlent de lui avec fierté.', 'His parents talk about him with pride.', '/se pa.ʁɑ̃ paʁl də lɥi a.vɛk fjɛʁ.te/', 'say pa-RAHⁿ PARL duh LWEE | a-vehk fyehr-TAY', ['fierte']),
  sent(1091, 'Je suis un peu gêné de te demander ça.', 'I am a bit embarrassed to ask you that.', '/ʒə sɥi œ̃ pø ʒɛ.ne də tə də.mɑ̃.de sa/', 'zhuh swee uhⁿ puh zheh-NAY | duh tuh duh-mahⁿ-DAY SA', ['gene', 'suite']),
  sent(1092, 'Ce silence était vraiment gênant.', 'That silence was really awkward.', '/sə si.lɑ̃s e.tɛ vʁɛ.mɑ̃ ʒɛ.nɑ̃/', 'suh see-LAHⁿSS ay-TEH vreh-MAHⁿ zheh-NAHⁿ', ['gene'], FCVDR),
  sent(1093, "Je me sens mal à l'aise dans les grandes fêtes.", 'I feel uncomfortable at big parties.', '/ʒə mə sɑ̃ ma.la.lɛz dɑ̃ le ɡʁɑ̃d fɛt/', 'zhuh muh SAHⁿ ma-la-LEHZ | dahⁿ lay grahⁿd FEHT', ['gene']),
  sent(1094, "J'ai eu honte pour lui pendant son discours.", 'I felt embarrassed for him during his speech.', '/ʒe y ɔ̃t puʁ lɥi pɑ̃.dɑ̃ sɔ̃ dis.kuʁ/', 'zhay Ü OHⁿT poor LWEE | pahⁿ-dahⁿ sohⁿ dees-KOOR', ['honte']),
  sent(1095, 'La personne est gênée ; la situation est gênante.', 'The person is embarrassed; the situation is awkward.', '/la pɛʁ.sɔn ɛ ʒɛ.ne la si.tɥa.sjɔ̃ ɛ ʒɛ.nɑ̃t/', 'la pehr-SONN eh zheh-NAY | la see-twa-SYOHⁿ eh zheh-NAHⁿT', ['rule', 'ressent'], ['flashcard'],
    rule('Gêné ou gênant : lequel ressent ?', 'Gêné. La personne est gênée ; la situation est gênante.')),
  sent(1096, 'Tu peux être fier de toi.', 'You can be proud of yourself.', '/ty pø ɛtʁ fjɛʁ də twa/', 'tü PUH ehtr FYEHR duh TWA', ['fierte']),
  sent(1097, "Qui ressent prend -é ; ce qui fait ressentir prend -ant.", 'Whoever feels takes -é; whatever causes the feeling takes -ant.', '/ki ʁə.sɑ̃ pʁɑ̃ e sə ki fɛ ʁə.sɑ̃.tiʁ pʁɑ̃ ɑ̃/', 'kee ruh-SAHⁿ prahⁿ AY | suh kee feh ruh-sahⁿ-TEER prahⁿ AHⁿ', ['rule', 'ressent'], ['flashcard'],
    rule('Énervé ou énervant, pour un voisin bruyant ?', "Énervant : il t'énerve. Toi, tu es énervé.")),
];

/* ── ACT 7 · LA SURPRISE ET LE SOULAGEMENT ────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  fam(1098, 'surprendre, surpris, la surprise, surprenant', 'to surprise, surprised, surprise, surprising', '/syʁ.pʁɑ̃dʁ syʁ.pʁi la syʁ.pʁiz syʁ.pʁə.nɑ̃/', 'sür-PRAHⁿDR, sür-PREE, la sür-PREEZ, sür-pruh-NAHⁿ', ['surprise'], 'Surpris : toi. Surprenant : ce qui te surprend.'),
  fam(1099, "s'étonner, étonné, étonnant", 'to be surprised, astonished, astonishing', '/se.tɔ.ne e.tɔ.ne e.tɔ.nɑ̃/', 'say-to-NAY, ay-to-NAY, ay-to-NAHⁿ', ['surprise'], 'Ça m’étonne que + subjonctif.'),
  fam(1100, 'soulager, soulagé, le soulagement', 'to relieve, relieved, relief', '/su.la.ʒe su.la.ʒe lə su.laʒ.mɑ̃/', 'soo-la-ZHAY, soo-la-ZHAY, luh soo-lazh-MAHⁿ', ['soulagement'], 'Relieved : soulagé, pas relevé.'),
  fam(1101, 'rassurer, rassuré, rassurant', 'to reassure, reassured, reassuring', '/ʁa.sy.ʁe ʁa.sy.ʁe ʁa.sy.ʁɑ̃/', 'ra-sü-RAY, ra-sü-RAY, ra-sü-RAHⁿ', ['soulagement'], 'Rassuré : toi. Rassurant : ce qui te rassure.'),
  col(1102, 'quel soulagement', 'what a relief', '/kɛl su.laʒ.mɑ̃/', 'kehl soo-lazh-MAHⁿ', ['soulagement']),
  col(1103, "ne pas en revenir", 'to be unable to get over it', '/nə pa.zɑ̃ ʁəv.niʁ/', 'nuh pa-zahⁿ ruhv-NEER', ['surprise'], "Je n'en reviens pas : je suis très surpris.", 'familier'),
  sent(1104, "J'ai été surprise par sa réponse.", 'I was surprised by his answer.', '/ʒe e.te syʁ.pʁiz paʁ sa ʁe.pɔ̃s/', 'zhay ay-TAY sür-PREEZ | par sa ray-POHⁿSS', ['surprise']),
  sent(1105, "Ça m'étonne qu'il soit déjà parti.", 'I am surprised he has already left.', '/sa me.tɔn kil swa de.ʒa paʁ.ti/', 'sa may-TONN | keel swa day-zha par-TEE', ['surprise', 'subjonctif']),
  sent(1106, "Je n'en reviens pas, tu as gagné.", 'I cannot get over it, you won.', '/ʒə nɑ̃ ʁə.vjɛ̃ pa ty a ɡa.ɲe/', 'zhuh nahⁿ ruh-vyehⁿ PA | tü a ga-NYAY', ['surprise'], FCVDR, {}, 'familier'),
  sent(1107, 'Quel soulagement, ton vol est arrivé.', 'What a relief, your flight has landed.', '/kɛl su.laʒ.mɑ̃ tɔ̃ vɔl ɛ.ta.ʁi.ve/', 'kehl soo-lazh-MAHⁿ | tohⁿ VOL eh-ta-ree-VAY', ['soulagement']),
  sent(1108, "Je suis soulagé d'avoir retrouvé mes clés.", 'I am relieved to have found my keys.', '/ʒə sɥi su.la.ʒe da.vwaʁ ʁə.tʁu.ve me kle/', 'zhuh swee soo-la-ZHAY | da-VWAR ruh-troo-VAY may KLAY', ['soulagement', 'suite'], FCVDR),
  sent(1109, "Le médecin m'a rassurée : ce n'est pas grave.", 'The doctor reassured me: it is nothing serious.', '/lə med.sɛ̃ ma ʁa.sy.ʁe sə nɛ pa ɡʁav/', 'luh mehd-SEHⁿ ma ra-sü-RAY | suh neh pa GRAV', ['soulagement']),
  sent(1110, 'Sa voix était très rassurante.', 'Her voice was very reassuring.', '/sa vwa e.tɛ tʁɛ ʁa.sy.ʁɑ̃t/', 'sa VWA ay-TEH treh ra-sü-RAHⁿT', ['soulagement']),
  sent(1111, "Ouf, j'ai eu mon train de justesse.", 'Phew, I just made my train.', '/uf ʒe y mɔ̃ tʁɛ̃ də ʒys.tɛs/', 'OOF | zhay Ü mohⁿ TREHⁿ duh zhüs-TEHSS', ['soulagement'], FCVR, {}, 'familier'),
  sent(1112, "C'est étonnant, il ne fait pas froid.", 'It is surprising: it is not cold.', '/sɛ.te.tɔ.nɑ̃ il nə fɛ pa fʁwa/', 'seh-tay-to-NAHⁿ | eel nuh feh pa FRWA', ['surprise']),
  sent(1113, 'On dit soulagé, jamais relevé.', 'You say soulagé for relieved, never relevé.', '/ɔ̃ di su.la.ʒe ʒa.mɛ ʁəl.ve/', 'ohⁿ DEE soo-la-ZHAY | zha-MEH ruhl-VAY', ['rule', 'faux-ami'], ['flashcard'],
    rule('Relieved : relevé ?', 'Non : soulagé. Relevé veut dire remonté, ou noté.')),
];

/* ── ACT 8 · LA SUITE : DE OU QUE ─────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1114, 'Je suis heureuse de partir en vacances.', 'I am happy to be going on holiday.', '/ʒə sɥi ø.ʁøz də paʁ.tiʁ ɑ̃ va.kɑ̃s/', 'zhuh swee uh-RUHZ | duh par-TEER ahⁿ va-KAHⁿSS', ['suite', 'infinitif']),
  sent(1115, 'Je suis heureuse que tu partes en vacances.', 'I am happy that you are going on holiday.', '/ʒə sɥi ø.ʁøz kə ty paʁt ɑ̃ va.kɑ̃s/', 'zhuh swee uh-RUHZ | kuh tü PART ahⁿ va-KAHⁿSS', ['suite', 'subjonctif'], FCVDR),
  sent(1116, 'Ça me fait plaisir que tu sois venu.', 'I am so pleased you came.', '/sa mə fɛ plɛ.ziʁ kə ty swa və.ny/', 'sa muh feh pleh-ZEER | kuh tü swa vuh-NÜ', ['suite', 'subjonctif']),
  sent(1117, "Ça m'énerve qu'il arrive toujours en retard.", 'It annoys me that he always arrives late.', '/sa me.nɛʁv ki.la.ʁiv tu.ʒuʁ ɑ̃ ʁə.taʁ/', 'sa may-NEHRV | kee-la-REEV too-ZHOOR ahⁿ ruh-TAR', ['suite', 'subjonctif'], FCVDR, {}, 'familier'),
  sent(1118, "Ça m'énerve d'attendre.", 'It annoys me to wait.', '/sa me.nɛʁv da.tɑ̃dʁ/', 'sa may-NEHRV da-TAHⁿDR', ['suite', 'infinitif'], FCVR, {}, 'familier'),
  sent(1119, "J'ai peur que tu sois déçu.", 'I am afraid you will be disappointed.', '/ʒe pœʁ kə ty swa de.sy/', 'zhay PUHR | kuh tü swa day-SÜ', ['suite', 'subjonctif']),
  sent(1120, 'Nous sommes désolés que vous ayez attendu.', 'We are sorry you had to wait.', '/nu sɔm de.zɔ.le kə vu.ze.je a.tɑ̃.dy/', 'noo somm day-zo-LAY | kuh voo-zay-YAY a-tahⁿ-DÜ', ['suite', 'subjonctif'], FCVR, {}, 'soutenu'),
  sent(1121, 'Elle est triste de quitter ses collègues.', 'She is sad to leave her colleagues.', '/ɛ.lɛ tʁist də ki.te se kɔ.lɛɡ/', 'eh-leh TREEST | duh kee-TAY say ko-LEHG', ['suite', 'infinitif']),
  sent(1122, "Il est furieux qu'on ne le prévienne jamais.", 'He is furious that nobody ever warns him.', '/i.lɛ fy.ʁjø kɔ̃ nə lə pʁe.vjɛn ʒa.mɛ/', 'ee-leh fü-RYUH | kohⁿ nuh luh pray-VYEHNN zha-MEH', ['suite', 'subjonctif']),
  sent(1123, 'Je suis fier que tu fasses ce métier.', 'I am proud that you do this job.', '/ʒə sɥi fjɛʁ kə ty fas sə me.tje/', 'zhuh swee FYEHR | kuh tü FASS suh may-TYAY', ['suite', 'subjonctif']),
  sent(1124, 'Je suis content pour toi.', 'I am happy for you.', '/ʒə sɥi kɔ̃.tɑ̃ puʁ twa/', 'zhuh swee kohⁿ-TAHⁿ poor TWA', ['suite'], FCVDR),
  sent(1125, "C'est gentil de ta part, ça me touche.", 'That is kind of you, it touches me.', '/sɛ ʒɑ̃.ti də ta paʁ sa mə tuʃ/', 'seh zhahⁿ-TEE duh ta PAR | sa muh TOOSH', ['suite']),
  col(1126, 'ça me touche', 'it touches me, it moves me', '/sa mə tuʃ/', 'sa muh TOOSH', ['suite']),
  col(1127, 'ça me rend triste', 'it makes me sad', '/sa mə ʁɑ̃ tʁist/', 'sa muh rahⁿ TREEST', ['suite'], 'Rendre + adjectif : ça me rend nerveux, ça me rend heureux.'),
  sent(1128, 'Cette chanson me rend triste.', 'This song makes me sad.', '/sɛt ʃɑ̃.sɔ̃ mə ʁɑ̃ tʁist/', 'seht shahⁿ-SOHⁿ | muh rahⁿ TREEST', ['suite'], FCVDR),
  sent(1129, "Même sujet : de et l'infinitif ; deux sujets : que et le subjonctif.", 'Same subject: de and the infinitive; two subjects: que and the subjunctive.', '/mɛm sy.ʒɛ də e lɛ̃.fi.ni.tif dø sy.ʒɛ kə e lə syb.ʒɔ̃k.tif/', 'MEM sü-ZHEH | duh ay lehⁿ-fee-nee-TEEF | DUH sü-ZHEH | kuh ay luh süb-zhohⁿk-TEEF', ['rule', 'suite'], ['flashcard'],
    rule('Je suis content que je parte ?', 'Non : même sujet, donc de. Je suis content de partir.')),
  sent(1130, 'Content pour toi, content de toi, content que tu sois là.', 'Happy for you, pleased with you, glad you are here.', '/kɔ̃.tɑ̃ puʁ twa kɔ̃.tɑ̃ də twa kɔ̃.tɑ̃ kə ty swa la/', 'kohⁿ-tahⁿ poor TWA | kohⁿ-tahⁿ duh TWA | kohⁿ-tahⁿ kuh tü swa LA', ['rule', 'suite'], ['flashcard'],
    rule('Content pour toi, ou content de toi ?', 'Pour toi : ta bonne nouvelle me fait plaisir. De toi : ce que tu fais me plaît.')),
];

/* ── ACT 9 · QUAND UN SENTIMENT CHANGE ────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  col(1131, 'au début, puis, peu à peu', 'at first, then, little by little', '/o de.by pɥi pø a pø/', 'oh day-BÜ, PWEE, puh a PUH', ['temps']),
  col(1132, "tout à coup, d'un coup", 'suddenly, all at once', '/tu.ta.ku dœ̃ ku/', 'too-ta-KOO, duhⁿ KOO', ['temps']),
  col(1133, 'finir par se calmer', 'to end up calming down', '/fi.niʁ paʁ sə kal.me/', 'fee-neer par suh kal-MAY', ['temps']),
  sent(1134, "Au début, j'étais inquiet.", 'At first I was worried.', '/o de.by ʒe.tɛ ɛ̃.kjɛ/', 'oh day-BÜ | zhay-TEH ehⁿ-KYEH', ['temps', 'etat']),
  sent(1135, "Tout à coup, j'ai eu peur.", 'Suddenly I got scared.', '/tu.ta.ku ʒe y pœʁ/', 'too-ta-KOO | zhay Ü PUHR', ['temps', 'declic'], FCVDR),
  sent(1136, "Quand j'ai vu son message, j'ai été soulagé.", 'When I saw her message, I felt relieved.', '/kɑ̃ ʒe vy sɔ̃ me.saʒ ʒe e.te su.la.ʒe/', 'kahⁿ zhay VÜ sohⁿ may-SAZH | zhay ay-TAY soo-la-ZHAY', ['temps', 'declic']),
  sent(1137, 'Peu à peu, je suis devenue plus calme.', 'Little by little I became calmer.', '/pø a pø ʒə sɥi də.və.ny ply kalm/', 'puh a PUH | zhuh swee duh-vuh-NÜ plü KALM', ['temps']),
  sent(1138, "J'étais stressée toute la semaine, puis j'ai fini par me calmer.", 'I was stressed all week, then I ended up calming down.', '/ʒe.tɛ stʁɛ.se tut la sə.mɛn pɥi ʒe fi.ni paʁ mə kal.me/', 'zhay-TEH streh-SAY toot la suh-MEHNN | PWEE zhay fee-NEE par muh kal-MAY', ['temps'], FCVDR),
  sent(1139, 'Pendant des mois, il était triste, et un jour, il a souri.', 'For months he was sad, and one day he smiled.', '/pɑ̃.dɑ̃ de mwa i.le.tɛ tʁist e œ̃ ʒuʁ i.la su.ʁi/', 'pahⁿ-dahⁿ day MWA ee-lay-teh TREEST | ay uhⁿ ZHOOR ee-la soo-REE', ['temps']),
  sent(1140, "J'ai été très déçu par ce match.", 'I was very disappointed by that match.', '/ʒe e.te tʁɛ de.sy paʁ sə matʃ/', 'zhay ay-TAY treh day-SÜ | par suh MATCH', ['temps', 'declic']),
  sent(1141, 'Elle était heureuse à Québec.', 'She was happy in Québec.', '/ɛ.le.tɛ ø.ʁøz a ke.bɛk/', 'eh-lay-TEH uh-RUHZ a kay-BEHK', ['temps', 'etat', 'quebec']),
  sent(1142, 'Elle a été heureuse à Québec pendant dix ans.', 'She was happy in Québec for ten years.', '/ɛ.la e.te ø.ʁøz a ke.bɛk pɑ̃.dɑ̃ di.zɑ̃/', 'eh-la ay-TAY uh-RUHZ a kay-BEHK | pahⁿ-dahⁿ dee-ZAHⁿ', ['temps', 'quebec'], FCVDR),
  sent(1143, "Depuis ce jour-là, j'ai moins peur.", 'Since that day I have been less afraid.', '/də.pɥi sə ʒuʁ.la ʒe mwɛ̃ pœʁ/', 'duh-pwee suh zhoor-LA | zhay mwehⁿ PUHR', ['temps']),
  sent(1144, "Je me suis énervé, puis je me suis excusé.", 'I lost my temper, then I apologised.', '/ʒə mə sɥi.ze.nɛʁ.ve pɥi ʒə mə sɥi.zɛks.ky.ze/', 'zhuh muh swee-zay-nehr-VAY | PWEE zhuh muh swee-zehks-kü-ZAY', ['temps', 'declic']),
  sent(1145, "Je ne savais pas quoi dire, j'étais sous le choc.", 'I did not know what to say, I was in shock.', '/ʒə nə sa.vɛ pa kwa diʁ ʒe.tɛ su lə ʃɔk/', 'zhuh nuh sa-VEH pa kwa DEER | zhay-TEH soo luh SHOK', ['temps', 'etat']),
  sent(1146, "L'imparfait dit l'état ; le passé composé dit le déclic.", 'The imparfait says the state; the passé composé says the moment it started.', '/lɛ̃.paʁ.fɛ di le.ta lə pa.se kɔ̃.po.ze di lə de.klik/', 'lehⁿ-par-FEH dee lay-TA | luh pa-SAY kohⁿ-po-ZAY dee luh day-KLEEK', ['rule', 'temps'], ['flashcard'],
    rule("« J'ai eu peur » ou « j'avais peur » : lequel dit que la peur arrive ?", "J'ai eu peur : le déclic. J'avais peur : l'état qui dure.")),
  sent(1147, "Au début, j'avais peur de parler ; aujourd'hui, j'adore ça.", 'At first I was afraid to speak; today I love it.', '/o de.by ʒa.vɛ pœʁ də paʁ.le o.ʒuʁ.dɥi ʒa.dɔʁ sa/', 'oh day-BÜ zha-veh PUHR duh par-LAY | oh-zhoor-DWEE zha-dor SA', ['temps']),
];

/* ── ACT 10 · RÉAGIR AUX ÉMOTIONS DES AUTRES ──────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  col(1148, 'je te comprends', 'I understand, I get it', '/ʒə tə kɔ̃.pʁɑ̃/', 'zhuh tuh kohⁿ-PRAHⁿ', ['empathie']),
  col(1149, 'ça doit être dur', 'that must be hard', '/sa dwa.tɛtʁ dyʁ/', 'sa dwa-tehtr DÜR', ['empathie']),
  col(1150, 'je suis de tout cœur avec toi', 'my heart goes out to you, I am right with you', '/ʒə sɥi də tu kœʁ a.vɛk twa/', 'zhuh swee duh too KUHR a-vehk TWA', ['empathie']),
  col(1151, 'je suis là si tu as besoin', 'I am here if you need me', '/ʒə sɥi la si ty a bə.zwɛ̃/', 'zhuh swee LA see tü a buh-ZWEHⁿ', ['empathie']),
  col(1152, 'ça va aller', 'it is going to be okay', '/sa va a.le/', 'sa va a-LAY', ['empathie'], undefined, 'familier'),
  col(1153, 'je suis désolé pour toi', 'I am sorry for you', '/ʒə sɥi de.zɔ.le puʁ twa/', 'zhuh swee day-zo-LAY poor TWA', ['empathie']),
  col(1154, 'toutes mes condoléances', 'my deepest sympathy', '/tut me kɔ̃.dɔ.le.ɑ̃s/', 'toot may kohⁿ-do-lay-AHⁿSS', ['empathie'], 'Pour un deuil seulement.', 'soutenu'),
  col(1155, 'félicitations, bravo', 'congratulations, well done', '/fe.li.si.ta.sjɔ̃ bʁa.vo/', 'fay-lee-see-ta-SYOHⁿ, bra-VOH', ['empathie']),
  col(1156, 'bon courage', 'hang in there, good luck with it', '/bɔ̃ ku.ʁaʒ/', 'bohⁿ koo-RAZH', ['empathie'], 'Pour une chose difficile. Bonne chance : pour un examen, un hasard.'),
  sent(1157, "Je te comprends, moi aussi, j'ai vécu ça.", 'I get it, I have been through that too.', '/ʒə tə kɔ̃.pʁɑ̃ mwa o.si ʒe ve.ky sa/', 'zhuh tuh kohⁿ-PRAHⁿ | mwa oh-SEE | zhay vay-KÜ SA', ['empathie']),
  sent(1158, 'Ça doit être dur de chercher du travail en ce moment.', 'It must be hard to look for work right now.', '/sa dwa.tɛtʁ dyʁ də ʃɛʁ.ʃe dy tʁa.vaj ɑ̃ sə mɔ.mɑ̃/', 'sa dwa-tehtr DÜR | duh shehr-SHAY dü tra-VAHY ahⁿ suh mo-MAHⁿ', ['empathie'], FCVDR),
  sent(1159, 'Je suis de tout cœur avec vous dans cette épreuve.', 'My thoughts are with you through this ordeal.', '/ʒə sɥi də tu kœʁ a.vɛk vu dɑ̃ sɛ.te.pʁœv/', 'zhuh swee duh too KUHR a-vehk VOO | dahⁿ seh-tay-PRUHV', ['empathie'], FCVR, {}, 'soutenu'),
  sent(1160, 'Si tu veux en parler, je suis là.', 'If you want to talk about it, I am here.', '/si ty vø ɑ̃ paʁ.le ʒə sɥi la/', 'see tü VUH ahⁿ par-LAY | zhuh swee LA', ['empathie'], FCVDR),
  sent(1161, "T'inquiète, ça va aller.", 'Do not worry, it will be fine.', '/tɛ̃.kjɛt sa va a.le/', 'tehⁿ-KYEHT | sa va a-LAY', ['empathie'], FCVR, {}, 'familier'),
  sent(1162, 'Félicitations pour ton nouveau poste, je suis tellement content pour toi.', 'Congratulations on your new job, I am so happy for you.', '/fe.li.si.ta.sjɔ̃ puʁ tɔ̃ nu.vo pɔst ʒə sɥi tɛl.mɑ̃ kɔ̃.tɑ̃ puʁ twa/', 'fay-lee-see-ta-SYOHⁿ poor tohⁿ noo-voh POST | zhuh swee tehl-mahⁿ kohⁿ-tahⁿ poor TWA', ['empathie']),
  sent(1163, 'Bon courage pour ton déménagement.', 'Good luck with your move.', '/bɔ̃ ku.ʁaʒ puʁ tɔ̃ de.me.naʒ.mɑ̃/', 'bohⁿ koo-RAZH | poor tohⁿ day-may-nazh-MAHⁿ', ['empathie']),
  sent(1164, "Je suis vraiment désolée d'apprendre la mort de ton père.", 'I am so sorry to hear about your father’s death.', '/ʒə sɥi vʁɛ.mɑ̃ de.zɔ.le da.pʁɑ̃dʁ la mɔʁ də tɔ̃ pɛʁ/', 'zhuh swee vreh-mahⁿ day-zo-LAY | da-PRAHⁿDR la MOR duh tohⁿ PEHR', ['empathie']),
  sent(1165, 'Prends soin de toi.', 'Take care of yourself.', '/pʁɑ̃ swɛ̃ də twa/', 'prahⁿ SWEHⁿ duh TWA', ['empathie'], FCVDR),
  sent(1166, "Pour consoler, on écoute d'abord ; on conseille après.", 'To comfort someone, listen first; advise afterwards.', '/puʁ kɔ̃.sɔ.le ɔ̃.ne.kut da.bɔʁ ɔ̃ kɔ̃.sɛj a.pʁɛ/', 'poor kohⁿ-so-LAY | ohⁿ-nay-KOOT da-BOR | ohⁿ kohⁿ-SEHY a-PREH', ['rule', 'empathie'], ['flashcard'],
    rule('Ton amie pleure. Tu dis d’abord...', 'Je te comprends, ça doit être dur. Les conseils viennent après.')),
];

/* ── ACT 11 · À TOI D'ÉCRIRE ─────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1167, 'Il faut que je te raconte ma semaine.', 'I have to tell you about my week.', '/il fo kə ʒə tə ʁa.kɔ̃t ma sə.mɛn/', 'eel FOH kuh zhuh tuh ra-KOHⁿT | ma suh-MEHNN', ['message']),
  sent(1168, "Au début, j'étais très stressée, puis tout s'est bien passé.", 'At first I was very stressed, then everything went well.', '/o de.by ʒe.tɛ tʁɛ stʁɛ.se pɥi tu sɛ bjɛ̃ pa.se/', 'oh day-BÜ zhay-TEH treh streh-SAY | PWEE too seh byehⁿ pa-SAY', ['message', 'temps'], FCVDR),
  sent(1169, "Quand j'ai lu ton message, j'ai été tellement content pour toi.", 'When I read your message, I was so happy for you.', '/kɑ̃ ʒe ly tɔ̃ me.saʒ ʒe e.te tɛl.mɑ̃ kɔ̃.tɑ̃ puʁ twa/', 'kahⁿ zhay LÜ tohⁿ may-SAZH | zhay ay-TAY tehl-mahⁿ kohⁿ-tahⁿ poor TWA', ['message', 'empathie']),
  sent(1170, 'Je comprends que tu sois déçue.', 'I understand that you are disappointed.', '/ʒə kɔ̃.pʁɑ̃ kə ty swa de.sy/', 'zhuh kohⁿ-PRAHⁿ | kuh tü swa day-SÜ', ['message', 'subjonctif']),
  sent(1171, 'Ça me fait de la peine que tu sois triste.', 'It hurts me that you are sad.', '/sa mə fɛ də la pɛn kə ty swa tʁist/', 'sa muh feh duh la PEHNN | kuh tü swa TREEST', ['message', 'subjonctif']),
  sent(1172, 'Tiens-moi au courant.', 'Keep me posted.', '/tjɛ̃.mwa o ku.ʁɑ̃/', 'tyehⁿ-MWA oh koo-RAHⁿ', ['message'], FCVDR),
  sent(1173, "Je t'embrasse fort.", 'Big hugs.', '/ʒə tɑ̃.bʁas fɔʁ/', 'zhuh tahⁿ-BRASS FOR', ['message'], FCVR, {}, 'familier'),
  sent(1174, "J'ai tellement hâte de te voir.", 'I cannot wait to see you.', '/ʒe tɛl.mɑ̃ ɑt də tə vwaʁ/', 'zhay tehl-mahⁿ AHT duh tuh VWAR', ['message', 'joie']),
  sent(1175, "Sa nouvelle et ta réaction, puis ton histoire et ce que tu as ressenti.", 'Their news and your reaction, then your story and what you felt.', '/sa nu.vɛl e ta ʁe.ak.sjɔ̃ pɥi tɔ̃.nis.twaʁ e sə kə ty a ʁə.sɑ̃.ti/', 'sa noo-VEHL ay ta ray-ak-SYOHⁿ | PWEE toh-nees-TWAR ay suh kuh tü a ruh-sahⁿ-TEE', ['rule', 'message'], ['flashcard'],
    rule('Ton message à un ami : quel plan ?', "D'abord sa nouvelle et ta réaction, puis ton histoire et ce que tu as ressenti.")),
  sent(1176, 'Tu dois être tellement fière.', 'You must be so proud.', '/ty dwa ɛtʁ tɛl.mɑ̃ fjɛʁ/', 'tü dwa ehtr tehl-mahⁿ FYEHR', ['message', 'empathie']),
  sent(1177, "Moi, j'ai eu une drôle de semaine.", 'I have had a strange week.', '/mwa ʒe y yn dʁol də sə.mɛn/', 'MWA | zhay Ü ün drohl duh suh-MEHNN', ['message']),
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
 *
 *  Every reading lives here so the reading, the quiz and the task agree.
 *  Word counts are measured by the scratch check, not claimed.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Maude's message from Québec, the morning after her news. */
export const MAUDE_TEXT =
  "Salut ! Je t'écris parce que j'ai une grande nouvelle : j'ai eu le poste à Montréal ! Je commence le premier mars. Je ne sais pas trop comment je me sens. Je ressens surtout de la joie, et un peu de peur. Je suis contente, bien sûr, mais je vais quitter Québec, ma famille et mes amis. Ce matin, j'ai annoncé la nouvelle à ma mère. Elle était contente pour moi, mais elle avait les larmes aux yeux. Moi aussi, en fait. Depuis, je me sens un peu bizarre : un moment, j'ai hâte de partir, le moment d'après, j'ai envie de rester. Ma sœur dit que c'est normal quand on change de vie. Et toi, tu te sens comment dans ta nouvelle ville ? Ça fait du bien de le dire à quelqu'un. J'ai hâte de te voir à Montréal ! Maude";

/** Act 3: Samuel's diary, Bruxelles. Disappointment, then the way out. */
export const JOURNAL_TEXT =
  "Dimanche soir, Bruxelles. Quelle semaine. Lundi, j'ai reçu la réponse de l'université : ma demande est refusée. J'étais sûr de moi, alors la déception a été énorme. Je suis surtout déçu de moi-même, parce que je n'ai pas assez travaillé mon dossier. Mardi, j'avais le moral à zéro. Je n'ai parlé à personne. Mercredi, mon amie Inès m'a dit : « Tu fais la tête depuis deux jours. » Sa remarque m'a fait de la peine, mais elle avait raison. Jeudi, j'ai appelé ma grand-mère à Montréal. Elle m'a dit qu'elle avait eu beaucoup de peine pour moi, et qu'un refus n'est pas la fin du monde. Ça m'a fait du bien. Ce soir, je suis encore un peu triste, mais la tristesse est moins lourde. Je ne veux pas décevoir mes parents, alors l'an prochain, j'essaie encore.";

/** Act 5: a short article on stress at work. No figures that could date. */
export const STRESS_TEXT =
  "Le stress au travail : comment en parler ? Au Québec comme en France, beaucoup de salariés disent qu'ils sont stressés au travail. Les causes se ressemblent : trop de courriels, des délais courts, des réunions sans fin. Le stress n'est pas toujours mauvais : un peu de stress avant une présentation, c'est normal, et ça peut même aider. Le problème, c'est quand l'inquiétude ne part plus. On devient angoissé, on dort mal, on s'énerve pour rien. Que faire ? D'abord, en parler. Dire « je suis stressé » à un collègue ou à son gestionnaire n'est pas un signe de faiblesse. Ensuite, nommer la cause : « Ce qui m'inquiète, c'est la date de remise. » Enfin, faire de vraies pauses, loin de l'écran. Pour la psychologue montréalaise Nadia Benali, « mettre le mot juste sur ce qu'on ressent, c'est déjà faire baisser la pression ».";

/** Act 7: Claire's forum post, arrival in Dakar. Panic, relief, surprise. */
export const FORUM_TEXT =
  "Forum Voyageurs. Sujet : ma plus grosse frayeur en voyage. Bonjour à tous ! Je dois vous raconter mon arrivée à Dakar. À l'aéroport, j'ai cherché mon passeport dans mon sac : rien. J'étais sûre de l'avoir mis dans la petite poche. J'ai paniqué. Je suis retournée à la porte de l'avion, puis au bureau des objets trouvés. Une employée très calme m'a rassurée : « Ne vous inquiétez pas, madame, ça arrive tous les jours. » Vingt minutes plus tard, un agent est arrivé avec mon passeport : il était tombé sous mon siège. Quel soulagement ! J'étais tellement soulagée que je l'ai remercié trois fois. Mais la vraie surprise est venue après : l'agent était le cousin de mon amie Awa. Je n'en reviens toujours pas. Et vous, quelle a été votre plus grosse frayeur en voyage ? Claire";

/** Act 9: Koffi's blog, his first month in Sherbrooke. How feelings moved. */
export const BLOGUE_TEXT =
  "Mon premier mois à Sherbrooke. Quand je suis arrivé en septembre, j'étais à la fois content et inquiet. Tout était nouveau : l'accent d'ici, les autobus, le froid qui commençait. La première semaine, je me sentais seul. Le soir, j'appelais ma famille à Abidjan et j'avais le cœur gros. Puis, un lundi, tout à coup, j'ai eu peur : mon permis de travail n'était plus dans mon dossier. J'ai appelé l'employeur, et, deux heures plus tard, j'ai été soulagé : tout était en ordre. Peu à peu, je suis devenu plus calme. Mes collègues m'ont invité à une partie de hockey. Au début, j'avais peur de parler, parce que je ne comprenais pas tout. Aujourd'hui, j'adore ça, et je fais même des blagues. Je suis fier du chemin que j'ai fait.";

/** Act 10: a letter to an advice column, Genève, and the answer. */
export const COURRIER_TEXT =
  "Le courrier de Sophie. Chère Sophie, ma meilleure amie a perdu son emploi il y a deux semaines. Elle me dit que tout va bien, mais je sens qu'elle est triste et qu'elle a honte. Quand je lui parle, je ne sais jamais quoi dire. J'ai peur de dire une bêtise. Que faire ? Léa, Genève. Chère Léa, votre inquiétude montre que vous êtes une bonne amie. D'abord, ne cherchez pas la phrase parfaite. Un simple « Je suis là si tu as besoin » vaut plus qu'un long discours. Ensuite, écoutez avant de conseiller. Évitez « Ce n'est pas grave » : pour elle, c'est grave. Dites plutôt : « Ça doit être dur. » Enfin, proposez quelque chose de concret : un café, une promenade. Elle n'a pas besoin de solutions tout de suite. Elle a besoin de sentir que vous êtes de tout cœur avec elle. Sophie";

/** Act 11: Julien's answer to Maude, the model the learner imitates. */
export const REPONSE_TEXT =
  "Salut Maude ! Merci pour ton message, et félicitations pour ton nouveau poste ! Je suis tellement content pour toi. Tu dois être fière, et je comprends que tu sois un peu triste de quitter Québec : ça doit être dur de laisser ta famille. Moi, j'ai eu une drôle de semaine. Lundi, j'avais une présentation devant tout le service. Au début, j'étais très stressé, et j'avais peur d'oublier mes idées. Puis, tout à coup, mon ordinateur s'est éteint. J'ai paniqué ! Heureusement, une collègue m'a prêté le sien, et finalement, tout s'est bien passé. J'ai été tellement soulagé, et même un peu fier de moi. Ça me fait plaisir que tu viennes à Montréal : j'ai hâte de te voir. Tiens-moi au courant pour ton déménagement. Je t'embrasse, Julien";
