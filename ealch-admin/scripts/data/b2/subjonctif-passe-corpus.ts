// b2.05.l1 « Le subjonctif passé »: the authored corpus, the imports and the
// citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.01),
// under the B2 rules of B2-BUILD-LOG.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b2.06 and later lessons may import REFRAME from this file;
// do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 5 of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE SUBJONCTIF PASSÉ, BUILT AND CHOSEN AGAINST ITS NEIGHBOURS.
//
//     la forme          avoir or être at the present subjunctive + the
//                       participle, the auxiliary chosen exactly as in the
//                       passé composé (que j'aie fini, que je sois parti)
//     les accords       être with the subject, avoir with a direct object
//                       placed before, pronominals with être (que vous vous
//                       soyez réconciliés, qu'elles se soient téléphoné)
//     l'horloge         present subjunctive for what is simultaneous or
//                       still ahead, passé for what is ALREADY DONE at the
//                       moment of the main verb, whatever the main verb's
//                       tense (j'étais content qu'il soit là / qu'il soit venu)
//     les sentiments    reacting after the fact (content, déçu, fier, désolé,
//                       ça m'étonne, c'est dommage), against savoir and être
//                       sûr, which keep the indicative
//     le doute          douter, il est possible, il se peut, ne pas croire,
//                       il semble, on a PAST fact; against croire, il me
//                       semble, il est probable, peut-être que
//     l'échéance        il faut que tu aies fini avant lundi, avant que and
//                       jusqu'à ce que for a completion still ahead, attendre
//                       que; against the present (avant qu'il fasse nuit)
//     le superlatif     le meilleur, le seul, le premier, le dernier + que or
//                       qui + subjonctif passé in careful writing; against la
//                       première fois que (always indicative) and a relative
//                       with no superlative
//     bien que          bien que and quoique on a finished fact, against même
//                       si + indicative (builds on lesson 32 in B1)
//     le même sujet     the past infinitive (content d'être venu, regretter de
//                       ne pas avoir appelé) when the subjects match (builds on
//                       lesson 16 in B1)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 14 in B1   the present subjunctive of avoir and être (rows 1105,
//                       1108 reused; reframe quoted)
//     lesson 15 in B1   the triggers (reframe quoted); the bascule je crois /
//                       je ne crois pas is assumed, and applied to the past here
//     lesson 16 in B1   one subject or two (reframe quoted, rows 1475, 1584)
//     lesson 32 in B1   bien que against même si (reframe quoted)
//     lesson 35 in B1   the feelings (reframe quoted; rows 1105, 1116, 1120,
//                       1121 of `emotions` reused)
//     lesson 1 in B2    the plus-que-parfait: its reframe is quoted where the
//                       act 4 clock is compared with the repère
//   FORWARD (named, never built): lesson 6 in B2 (subjunctive or indicative:
//   search, purpose, subjectivity) and lesson 7 in B2 (futur antérieur).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `emotions` (« Les émotions », concepts). Range widened to a1-b2 by
//     the orchestrator; sub-theme for this lesson: « réagir après coup ». The
//     seed (read 2026-09-27, 19,308 items) holds 198 rows in the theme, a1 and
//     b1 only, none `fr.b2`. b1.35 owns `fr.b1.emotions.1000`-`.1177`.
//
//  2. ID BLOCK: `.1200`-`.1399`, assigned by the brief. Authored: `.1200`-
//     `.1390`, one run per act with small gaps (see ID_RANGES and the act
//     banners). Nothing outside the block.
//
//  3. NO VOCAB-TYPE ROW is authored, so the flashcard hub's headword rule
//     (theme + headword) cannot clash with b1.35's family rows or any
//     published row. Every row is a sentence, a conjugation card, a gapfill
//     card or a rule card. Every `fr` was checked for an exact twin against
//     the seed AND every other lesson corpus in data/b1 and data/b2: none.
//
//  4. REUSED ROWS. B1 is live (v76) and B2 22-26 (v77), so `src()` resolves
//     them. Reused BY ID, never twinned (§F).
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER. « viennes » VYENN,
//     « comprenne » kohⁿ-PRENN, « peine » PENN, « semaine » suh-MENN,
//     « problème » pro-BLEMM, « personne » pehr-SONN, « étonne » may-TONN:
//     the doubled consonant is for the checker, not the ear. No U+203F
//     anywhere, IPA included.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed does.
//     The one `scenario` uses ’ only and embeds no corpus row.
//
//  7. NO verbCheck ON THE CONJUGATION CARDS, as b2.01: no published row
//     carries a subjonctif passé target, so the verbecc key is unproven.
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
  id: 'b2.05',
  seq: 5,
  title: 'The Past Subjunctive',
  sub: 'Le subjonctif passé',
  canDo: 'Can build the subjonctif passé with the right auxiliary and agreements, including pronominal verbs, and choose it over the present subjunctive when the action is already complete at the moment of the main verb: after feelings, doubt and necessity, before a deadline, after a superlative or le seul, with bien que, and against the past infinitive when the subjects match',
  prereqUnitIds: ['b1.14', 'b1.15', 'b1.16', 'b1.32', 'b1.35', 'b2.01'],
} as const;

export const LESSON_ID = 'b2.05.l1';
export const THEME = 'emotions';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan numbers b2.01
 *  to b2.34 in trail order. Only occupied positions are cited: B1 1-39, B2
 *  1-8 and 22-26.
 * ══════════════════════════════════════════════════════════════════════════ */

export const SUBJ_FORM_UNIT = 'b1.14';
export const DECL_UNIT = 'b1.15';
export const INF_UNIT = 'b1.16';
export const CONC_UNIT = 'b1.32';
export const EMO_UNIT = 'b1.35';
export const PQP_UNIT = 'b2.01';
export const MODES_UNIT = 'b2.06';
export const FUT_ANT_UNIT = 'b2.07';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const SUBJ_FORM_REF = refFr(SUBJ_FORM_UNIT);
export const DECL_REF = refFr(DECL_UNIT);
export const INF_REF = refFr(INF_UNIT);
export const CONC_REF = refFr(CONC_UNIT);
export const EMO_REF = refFr(EMO_UNIT);
export const PQP_REF = refFr(PQP_UNIT);
export const MODES_REF = refFr(MODES_UNIT);
export const FUT_ANT_REF = refFr(FUT_ANT_UNIT);
export const SUBJ_B1_RANGE_REF = 'les leçons 14 à 16 du B1';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B114_REFRAME, REFRAME_EN as B114_REFRAME_EN } from '../b1/subjonctif-formation-corpus.ts';
export { REFRAME as B115_REFRAME, REFRAME_EN as B115_REFRAME_EN } from '../b1/subjonctif-declencheurs-corpus.ts';
export { REFRAME as B116_REFRAME, REFRAME_EN as B116_REFRAME_EN } from '../b1/subjonctif-infinitif-corpus.ts';
export { REFRAME as B132_REFRAME, REFRAME_EN as B132_REFRAME_EN } from '../b1/concession-corpus.ts';
export { REFRAME as B135_REFRAME, REFRAME_EN as B135_REFRAME_EN } from '../b1/emotions-corpus.ts';
export { REFRAME as B201_REFRAME, REFRAME_EN as B201_REFRAME_EN } from './plus-que-parfait-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  L'HORLOGE. The trigger (a feeling, a doubt, a necessity, bien que, a
 *  superlative) has already chosen the subjunctive; lesson 15 in B1 said so.
 *  What is left is a clock set on the MAIN verb (or on the deadline it
 *  names): if the action is already done at that moment, the subjunctive
 *  goes into the past. Act 4 is built on the half that surprises: « j'étais
 *  content qu'il soit là » keeps the present, because the clock is relative.
 *
 *  It is NOT « subjonctif passé for the past, subjonctif présent for the
 *  present » (act 4 and act 7 contradict it: « il faut que tu aies fini avant
 *  lundi » is in the future, « j'avais peur qu'il pleuve » is in the past),
 *  and NOT « the passé composé put into the subjunctive » (true of the FORM
 *  only, and silent on the choice).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Même déclencheur, autre horloge : le subjonctif passé dit que c’est déjà fait.';
export const REFRAME_EN = 'Same trigger, a different clock: the subjonctif passé says it is already done.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le subjonctif passé, c’est le subjonctif du passé.',
    why: 'False where acts 4 and 7 have to hold: « il faut que tu aies fini avant lundi » is about next Monday, and « hier soir, j’avais peur qu’il pleuve » is about yesterday with a PRESENT subjunctive. The date does not decide; completion relative to the main verb does.',
  },
  {
    text: 'Le subjonctif passé, c’est le passé composé mis au subjonctif.',
    why: 'True of the FORM (act 2 teaches it that way) but silent on when to choose it, which is the whole B2 question; lesson 14 in B1 already gave the learner the two auxiliaries.',
  },
  {
    text: 'Après un sentiment sur quelque chose de fini, le subjonctif passé.',
    why: 'Too narrow: doubt (act 6), necessity and deadlines (act 7), superlatives (act 8) and bien que (act 9) take it for the same reason, and the reframe has to hold in every one of them.',
  },
  {
    text: 'Le subjonctif passé regarde en arrière.',
    why: 'Wrong for act 7: « ne signe rien avant qu’on ait relu le contrat » looks forward to a completion that has not happened yet. What it marks is completion at the moment in question, not the past.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-27, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const OA = (n: number) => `fr.b1.opinions-et-avis.${n}`;

export const IMPORTED = {
  act1: [
    'fr.b1.emotions.1116',                     // Ça me fait plaisir que tu sois venu.  (lesson 35)
    OA(1003),                                  // Je suis content que tu sois là.  (lesson 14)
  ],
  act2: [
    OA(1108),                                  // que j’aie  (lesson 14, chunk)
    OA(1105),                                  // que je sois  (lesson 14, chunk)
    OA(1372),                                  // Je suis heureux que tu aies ce poste.  (lesson 15: aies = present)
  ],
  act3: [
    'fr.b1.correspondance.1141',               // Je suis désolée que tu aies attendu pour rien.  (lesson 39)
  ],
  act4: [
    OA(1202),                                  // Je suis content que tu viennes avec nous.  (lesson 15)
    OA(1445),                                  // Je regrette que tu partes si tôt.  (lesson 16)
  ],
  act5: [
    'fr.b1.emotions.1105',                     // Ça m'étonne qu'il soit déjà parti.  (lesson 35)
    'fr.b1.emotions.1120',                     // Nous sommes désolés que vous ayez attendu.  (lesson 35)
  ],
  act6: [
    'fr.b1.routines.069',                      // Il se peut qu'elle soit déjà partie travailler.  (dictation only)
    'fr.b1.cafe.075',                          // Il est possible que le serveur ait oublié notre commande.  (dictation only)
    'fr.b2.universite.1091',                   // Il se peut que les étudiants aient sous-estimé leurs heures.  (lesson 22 in B2)
  ],
  act7: [
    OA(1102),                                  // Avant que vous partiez, signez le registre.  (lesson 14)
    OA(1118),                                  // Je veux que tu aies une réponse avant ce soir.  (lesson 14: aies = present)
  ],
  act8: [
    'fr.b2.affaires.1350',                     // C’est la meilleure vitrine que nous puissions avoir en Europe.  (lesson 26 in B2)
    'fr.b2.opinions-et-avis.1786',             // L'argent liquide reste le seul moyen de paiement qui ne dépend d'aucune banque.  (lesson 23 in B2)
  ],
  act9: [
    'fr.b1.connecteurs-logiques.1435',         // Bien que la salle soit petite, tout le monde est venu.  (lesson 32)
    'fr.b1.connecteurs-logiques.1437',         // Bien qu'elle ait peu de temps, elle aide ses voisins.  (lesson 32: ait = present)
    'fr.b2.tourisme.001',                      // Bien que nous ayons prévu de rester un mois, nous avons dû prolonger notre séjour de deux semaines.  (sentence + dictation)
    'fr.b1.cuisine.055',                       // Les invités, bien qu'ils aient déjà mangé, reprennent du gâteau.  (dictation only)
    'fr.b1.dictee.048',                        // Quoiqu'il ait révisé toute la semaine, il a échoué à l'examen oral.  (dictation only)
  ],
  act10: [
    OA(1475),                                  // Je suis content d’avoir une place près de la fenêtre.  (lesson 16: present infinitive)
    OA(1584),                                  // Merci d’avoir accepté de venir un samedi.  (lesson 16)
    'fr.b1.emotions.1121',                     // Elle est triste de quitter ses collègues.  (lesson 35)
    'fr.b2.maison.024',                        // Ils regrettent de ne pas avoir fait inspecter la charpente avant de signer l'acte de vente.  (sentence + dictation)
    'fr.b2.conflits-reconciliation.002',       // Bien qu'elle ait eu raison sur le fond, elle regrette d'avoir haussé le ton pendant la discussion.  (sentence + dictation)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [
  'fr.b1.routines.069',                        // dictation only
  'fr.b1.cafe.075',                            // dictation only
  'fr.b2.tourisme.001',                        // sentence + dictation
  'fr.b1.cuisine.055',                         // dictation only
  'fr.b1.dictee.048',                          // dictation only
  'fr.b2.maison.024',                          // sentence + dictation
  'fr.b2.conflits-reconciliation.002',         // sentence + dictation
];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [...NOT_DECK_ABLE];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `conj` a conjugation card (front « finir · subjonctif
 *  passé · je »); `gap` a gapfill card whose front gaps the verb and names
 *  the MEANING cue; `rule` a grammar card. Every row carries fr, en, ipa and
 *  respell. Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const GP = ['subjonctif-passe'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

type Pers = 'je' | 'tu' | 'il' | 'elle' | 'on' | 'nous' | 'vous' | 'ils' | 'elles';
const conj = (
  n: number, fr: string, en: string, ipa: string, respell: string, inf: string, p: Pers, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['conjugaison', ...tags], drills, version: 1, register: C, grammarPoints: GP,
  cardType: 'conjugation', prompt: `${inf} · subjonctif passé · ${p}`,
});

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · CONTENT QUE TU SOIS VENU (.1200-.1209) ─────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, 'Je suis vraiment content que tu sois venu.', 'I am really glad you came.',
    '/ʒə sɥi vʁɛ.mɑ̃ kɔ̃.tɑ̃ kə ty swa və.ny/', 'zhuh swee vreh-mahⁿ kohⁿ-TAHⁿ | kuh tü swa vuh-NÜ', ['scene', 'accompli'], FCVDR),
  sent(1201, 'Je suis vraiment content que tu viennes.', 'I am really glad you are coming.',
    '/ʒə sɥi vʁɛ.mɑ̃ kɔ̃.tɑ̃ kə ty vjɛn/', 'zhuh swee vreh-mahⁿ kohⁿ-TAHⁿ | kuh tü VYENN', ['scene', 'simultane']),
  sent(1202, 'Je suis ravie que vous ayez pu venir si nombreux.', 'I am delighted you were able to come in such numbers.',
    '/ʒə sɥi ʁa.vi kə vu.ze.je py və.niʁ si nɔ̃.bʁø/', 'zhuh swee ra-VEE | kuh voo-zay-yay pü vuh-NEER | see nohⁿ-BRUH', ['lecture', 'accompli']),
  sent(1203, 'Je regrette que Samir soit parti avant le gâteau.', 'I am sorry Samir left before the cake.',
    '/ʒə ʁə.ɡʁɛt kə sa.miʁ swa paʁ.ti a.vɑ̃ lə ɡa.to/', 'zhuh ruh-GRET | kuh sa-MEER swa par-TEE | a-vahⁿ luh ga-TOH', ['lecture', 'accompli'], FCVDR),
  sent(1204, 'Ça me touche que tu aies fait toute cette route.', 'It touches me that you made that whole journey.',
    '/sa mə tuʃ kə ty ɛ fɛ tut sɛt ʁut/', 'sa muh TOOSH | kuh tü eh feh toot set ROOT', ['lecture', 'accompli']),
  sent(1205, 'Je suis désolée que la musique ait réveillé les voisins.', 'I am sorry the music woke the neighbours.',
    '/ʒə sɥi de.zɔ.le kə la my.zik ɛ ʁe.ve.je le vwa.zɛ̃/', 'zhuh swee day-zo-LAY | kuh la mü-ZEEK eh ray-vay-YAY | lay vwa-ZEHⁿ', ['lecture', 'accompli']),
  sent(1206, "C'est dommage qu'il ait plu toute la soirée.", 'It is a pity it rained all evening.',
    '/sɛ dɔ.maʒ ki.lɛ ply tut la swa.ʁe/', 'seh do-MAZH | kee-leh PLÜ | toot la swa-RAY', ['lecture', 'accompli']),
  rule(1207, REFRAME, REFRAME_EN,
    '/mɛm de.klɑ̃.ʃœʁ o.tʁɔʁ.lɔʒ lə syb.ʒɔ̃k.tif pa.se di kə sɛ de.ʒa fɛ/',
    'MEM day-klahⁿ-SHUHR | oh-tror-LOZH | luh süb-zhohⁿk-teef pa-SAY | dee kuh seh day-zha FEH',
    'À quoi sert le subjonctif passé ?',
    "Le déclencheur (un sentiment, un doute, une nécessité) appelle le subjonctif. Le moment décide de sa forme : si l'action est déjà faite, c'est le subjonctif passé.",
    ['reframe']),
  sent(1208, "C'est dommage qu'il pleuve ce soir.", 'It is a pity it is raining this evening.',
    '/sɛ dɔ.maʒ kil plœv sə swaʁ/', 'seh do-MAZH | keel PLUHV | suh SWAR', ['paire', 'simultane']),
  sent(1209, 'Je regrette que Samir parte avant le gâteau.', 'I am sorry Samir is leaving before the cake.',
    '/ʒə ʁə.ɡʁɛt kə sa.miʁ paʁt a.vɑ̃ lə ɡa.to/', 'zhuh ruh-GRET | kuh sa-MEER PART | a-vahⁿ luh ga-TOH', ['paire', 'simultane']),
];

/* ── ACT 2 · LA FORME (.1212-.1236) ───────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  conj(1212, "que j'aie fini", 'that I (have) finished', '/kə ʒɛ fi.ni/', 'kuh zheh fee-NEE', 'finir', 'je', ['avoir'], FCVDR),
  conj(1213, 'que tu aies fini', 'that you (have) finished', '/kə ty ɛ fi.ni/', 'kuh tü eh fee-NEE', 'finir', 'tu', ['avoir']),
  conj(1214, "qu'il ait fini", 'that he (has) finished', '/ki.lɛ fi.ni/', 'kee-leh fee-NEE', 'finir', 'il', ['avoir']),
  conj(1215, 'que nous ayons fini', 'that we (have) finished', '/kə nu.ze.jɔ̃ fi.ni/', 'kuh noo-zay-yohⁿ fee-NEE', 'finir', 'nous', ['avoir']),
  conj(1216, 'que vous ayez fini', 'that you (have) finished', '/kə vu.ze.je fi.ni/', 'kuh voo-zay-yay fee-NEE', 'finir', 'vous', ['avoir']),
  conj(1217, "qu'ils aient fini", 'that they (have) finished', '/kil.zɛ fi.ni/', 'keel-zeh fee-NEE', 'finir', 'ils', ['avoir']),
  conj(1218, 'que je sois parti', 'that I (have) left', '/kə ʒə swa paʁ.ti/', 'kuh zhuh swa par-TEE', 'partir', 'je', ['etre'], FCVDR),
  conj(1219, "qu'elle soit partie", 'that she (has) left', '/kɛl swa paʁ.ti/', 'kel swa par-TEE', 'partir', 'elle', ['etre', 'accord']),
  conj(1220, 'que nous soyons partis', 'that we (have) left', '/kə nu swa.jɔ̃ paʁ.ti/', 'kuh noo swa-yohⁿ par-TEE', 'partir', 'nous', ['etre', 'accord']),
  conj(1221, "qu'ils soient partis", 'that they (have) left', '/kil swa paʁ.ti/', 'keel swa par-TEE', 'partir', 'ils', ['etre', 'accord']),
  sent(1222, 'Je suis content que tu aies trouvé la maison sans problème.', 'I am glad you found the house with no trouble.',
    '/ʒə sɥi kɔ̃.tɑ̃ kə ty ɛ tʁu.ve la mɛ.zɔ̃ sɑ̃ pʁɔ.blɛm/', 'zhuh swee kohⁿ-TAHⁿ | kuh tü eh troo-VAY la meh-ZOHⁿ | sahⁿ pro-BLEMM', ['avoir']),
  sent(1223, "Il est possible qu'elle ait raté son train.", 'She may have missed her train.',
    '/i.lɛ pɔ.sibl kɛ.lɛ ʁa.te sɔ̃ tʁɛ̃/', 'ee-leh po-SEEBL | keh-leh ra-TAY sohⁿ TREHⁿ', ['avoir'], FCVDR),
  sent(1224, "Je doute qu'ils soient arrivés à l'heure.", 'I doubt they arrived on time.',
    '/ʒə dut kil swa.ta.ʁi.ve a lœʁ/', 'zhuh DOOT | keel swa-ta-ree-VAY a LUHR', ['etre', 'accord']),
  sent(1225, 'Il faut que vous ayez rendu le dossier avant vendredi.', 'You must have handed in the file by Friday.',
    '/il fo kə vu.ze.je ʁɑ̃.dy lə do.sje a.vɑ̃ vɑ̃.dʁə.di/', 'eel FOH | kuh voo-zay-yay rahⁿ-DÜ luh do-SYAY | a-vahⁿ vahⁿ-druh-DEE', ['avoir']),
  sent(1226, "C'est dommage que nous ayons manqué le début.", 'It is a pity we missed the beginning.',
    '/sɛ dɔ.maʒ kə nu.ze.jɔ̃ mɑ̃.ke lə de.by/', 'seh do-MAZH | kuh noo-zay-yohⁿ mahⁿ-KAY luh day-BÜ', ['avoir'], FCVDR),
  sent(1227, "Je regrette qu'elle ait été malade pendant son séjour.", 'I am sorry she was ill during her stay.',
    '/ʒə ʁə.ɡʁɛt kɛ.lɛ.te.te ma.lad pɑ̃.dɑ̃ sɔ̃ se.ʒuʁ/', 'zhuh ruh-GRET | keh-leh-tay-TAY ma-LAD | pahⁿ-dahⁿ sohⁿ say-ZHOOR', ['avoir', 'etre-participe']),
  sent(1228, 'Je suis content que tu aies eu ce poste.', 'I am glad you got that job.',
    '/ʒə sɥi kɔ̃.tɑ̃ kə ty ɛ y sə pɔst/', 'zhuh swee kohⁿ-TAHⁿ | kuh tü eh Ü suh POST', ['avoir', 'avoir-participe']),
  sent(1229, 'Je suis étonné que vous soyez restés si tard.', 'I am surprised you stayed so late.',
    '/ʒə sɥi.ze.tɔ.ne kə vu swa.je ʁɛs.te si taʁ/', 'zhuh swee-zay-to-NAY | kuh voo swa-yay res-TAY | see TAR', ['etre', 'accord']),
  gap(1230, 'Je suis ravie que vous soyez venus.', 'I am delighted you came.',
    '/ʒə sɥi ʁa.vi kə vu swa.je və.ny/', 'zhuh swee ra-VEE | kuh voo swa-yay vuh-NÜ',
    'Je suis ravie que vous ___ venus. (venir · avoir ou être ?)',
    'Venir prend être, comme au passé composé : que vous soyez venus. EN: venir takes être, as in the passé composé.',
    ['etre'], FCVDR),
  gap(1231, 'Je suis soulagé que tu aies retrouvé tes clés.', 'I am relieved you found your keys.',
    '/ʒə sɥi su.la.ʒe kə ty ɛ ʁə.tʁu.ve te kle/', 'zhuh swee soo-la-ZHAY | kuh tü eh ruh-troo-VAY tay KLAY',
    "Je suis soulagé que tu ___ tes clés. (retrouver · c'est fait)",
    'Retrouver prend avoir, au subjonctif : que tu aies retrouvé. EN: avoir, in the subjunctive.',
    ['avoir']),
  rule(1232, 'Le subjonctif présent de avoir ou être, puis le participe passé.', 'The present subjunctive of avoir or être, then the past participle.',
    '/lə syb.ʒɔ̃k.tif pʁe.zɑ̃ də a.vwaʁ u ɛtʁ pɥi lə paʁ.ti.sip pa.se/', 'luh süb-zhohⁿk-teef pray-ZAHⁿ | duh a-VWAR oo EHTR | pwee luh par-tee-seep pa-SAY',
    'Comment se forme le subjonctif passé ?',
    "Deux mots, comme au passé composé : j'ai fini devient que j'aie fini, je suis parti devient que je sois parti.",
    ['forme']),
  rule(1233, "Avoir ou être : le même choix qu'au passé composé.", 'Avoir or être: the same choice as in the passé composé.',
    '/a.vwaʁ u ɛtʁ lə mɛm ʃwa ko pa.se kɔ̃.po.ze/', 'a-VWAR oo EHTR | luh mem SHWA | koh pa-say kohⁿ-poh-ZAY',
    'Avoir ou être, au subjonctif passé ?',
    "Rien à réapprendre : je suis venu donne que je sois venu, j'ai pris donne que j'aie pris.",
    ['forme']),
  rule(1234, 'Aie, aies, ait, aient : un seul son, quatre orthographes.', 'Aie, aies, ait, aient: one sound, four spellings.',
    '/ɛ ɛ ɛ ɛ œ̃ sœl sɔ̃ katʁ ɔʁ.tɔ.ɡʁaf/', 'EH | EH | EH | EH | uhⁿ suhl SOHⁿ | katr or-to-GRAF',
    "Que j'aie, qu'il ait, qu'ils aient : que distingue l'oreille ?",
    "Presque rien : seule la liaison de qu'ils aient s'entend. Écris en regardant le sujet.",
    ['forme', 'orthographe']),
  sent(1235, "Il est normal qu'on ait eu peur.", 'It is normal that we were scared.',
    '/i.lɛ nɔʁ.mal kɔ̃.nɛ.ty pœʁ/', 'ee-leh nor-MAL | kohⁿ-neh-tü PUHR', ['avoir', 'avoir-participe']),
  sent(1236, "Je suis fier que nous ayons tenu jusqu'au bout.", 'I am proud we held out to the end.',
    '/ʒə sɥi fjɛʁ kə nu.ze.jɔ̃ tə.ny ʒys.ko bu/', 'zhuh swee FYEHR | kuh noo-zay-yohⁿ tuh-NÜ | zhüs-koh BOO', ['avoir']),
];

/* ── ACT 3 · LES ACCORDS ET LES PRONOMINAUX (.1240-.1256) ─────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1240, "Je suis heureuse qu'elle soit arrivée sans encombre.", 'I am happy she arrived safely.',
    '/ʒə sɥi ø.ʁøz kɛl swa.ta.ʁi.ve sɑ̃.zɑ̃.kɔ̃bʁ/', 'zhuh swee uh-RUHZ | kel swa-ta-ree-VAY | sahⁿ-zahⁿ-KOHⁿBR', ['etre', 'accord'], FCVDR),
  sent(1241, 'Je suis touché que mes cousines soient venues de si loin.', 'I am touched my cousins came from so far.',
    '/ʒə sɥi tu.ʃe kə me ku.zin swa və.ny də si lwɛ̃/', 'zhuh swee too-SHAY | kuh may koo-ZEEN swa vuh-NÜ | duh see LWEHⁿ', ['etre', 'accord']),
  sent(1242, 'Tes lunettes ? Je suis content que tu les aies retrouvées.', 'Your glasses? I am glad you found them.',
    '/te ly.nɛt ʒə sɥi kɔ̃.tɑ̃ kə ty le.zɛ ʁə.tʁu.ve/', 'tay lü-NET | zhuh swee kohⁿ-TAHⁿ | kuh tü lay-zeh ruh-troo-VAY', ['avoir', 'accord', 'pronom'], FCVDR),
  sent(1243, "C'est la plus belle lettre qu'on m'ait écrite.", 'It is the most beautiful letter anyone has written me.',
    '/sɛ la ply bɛl lɛtʁ kɔ̃ mɛ.te.kʁit/', 'seh la plü bel LETR | kohⁿ meh-tay-KREET', ['avoir', 'accord', 'que']),
  sent(1244, 'Je regrette que tu aies vendu la maison.', 'I am sorry you sold the house.',
    '/ʒə ʁə.ɡʁɛt kə ty ɛ vɑ̃.dy la mɛ.zɔ̃/', 'zhuh ruh-GRET | kuh tü eh vahⁿ-DÜ | la meh-ZOHⁿ', ['avoir', 'sans-accord']),
  sent(1245, 'Je suis content que vous vous soyez réconciliés.', 'I am glad you made up.',
    '/ʒə sɥi kɔ̃.tɑ̃ kə vu vu swa.je ʁe.kɔ̃.si.lje/', 'zhuh swee kohⁿ-TAHⁿ | kuh voo voo swa-yay ray-kohⁿ-see-LYAY', ['pronominal', 'accord']),
  sent(1246, "Je suis surpris qu'elle se soit levée si tôt.", 'I am surprised she got up so early.',
    '/ʒə sɥi syʁ.pʁi kɛl sə swa lə.ve si to/', 'zhuh swee sür-PREE | kel suh swa luh-VAY | see TOH', ['pronominal', 'accord'], FCVDR),
  sent(1247, "Ça m'étonne qu'ils se soient trompés d'adresse.", 'I am surprised they got the wrong address.',
    '/sa me.tɔn kil sə swa tʁɔ̃.pe da.dʁɛs/', 'sa may-TONN | keel suh swa trohⁿ-PAY | da-DRESS', ['pronominal', 'accord']),
  sent(1248, "Je suis contente qu'elles se soient téléphoné.", 'I am glad they phoned each other.',
    '/ʒə sɥi kɔ̃.tɑ̃t kɛl sə swa te.le.fɔ.ne/', 'zhuh swee kohⁿ-TAHⁿT | kel suh swa tay-lay-fo-NAY', ['pronominal', 'sans-accord']),
  sent(1249, "Il se peut qu'il se soit cassé le poignet en tombant.", 'He may have broken his wrist when he fell.',
    '/il sə pø kil sə swa ka.se lə pwa.ɲɛ ɑ̃ tɔ̃.bɑ̃/', 'eel suh PUH | keel suh swa ka-SAY luh pwa-NYEH | ahⁿ tohⁿ-BAHⁿ', ['pronominal', 'sans-accord']),
  gap(1250, 'Je suis désolé que tes parents se soient inquiétés.', 'I am sorry your parents were worried.',
    '/ʒə sɥi de.zɔ.le kə te pa.ʁɑ̃ sə swa.tɛ̃.kje.te/', 'zhuh swee day-zo-LAY | kuh tay pa-RAHⁿ | suh swa-tehⁿ-kyay-TAY',
    "Je suis désolé que tes parents se ___. (s'inquiéter)",
    "Pronominal : être au subjonctif, et l'accord avec parents : se soient inquiétés. EN: être, agreeing with the subject.",
    ['pronominal', 'accord']),
  gap(1251, 'Je suis heureuse que ma sœur soit revenue à Liège.', 'I am happy my sister came back to Liège.',
    '/ʒə sɥi ø.ʁøz kə ma sœʁ swa ʁə.və.ny a ljɛʒ/', 'zhuh swee uh-RUHZ | kuh ma SUHR swa ruh-vuh-NÜ | a LYEHZH',
    'Je suis heureuse que ma sœur ___ à Liège. (revenir · accord)',
    'Revenir prend être, et sœur demande un e : soit revenue. EN: être agrees with sœur.',
    ['etre', 'accord'], FCVDR),
  gap(1252, 'Ces photos, je suis ravie que tu les aies gardées.', 'Those photos, I am delighted you kept them.',
    '/se fo.to ʒə sɥi ʁa.vi kə ty le.zɛ ɡaʁ.de/', 'say foh-TOH | zhuh swee ra-VEE | kuh tü lay-zeh gar-DAY',
    'Ces photos, je suis ravie que tu les aies ___. (garder · les est placé avant)',
    'Les reprend les photos, placé avant avoir : gardées. EN: agreement with les, placed before.',
    ['avoir', 'accord', 'pronom']),
  rule(1253, 'Au subjonctif passé, les accords sont ceux du passé composé.', 'In the past subjunctive, the agreements are those of the passé composé.',
    '/o syb.ʒɔ̃k.tif pa.se le.za.kɔʁ sɔ̃ sø dy pa.se kɔ̃.po.ze/', 'oh süb-zhohⁿk-teef pa-SAY | lay-za-KOR | sohⁿ suh dü pa-say kohⁿ-poh-ZAY',
    'Au subjonctif passé, comment s’accorde le participe ?',
    'Comme au passé composé : être avec le sujet, avoir avec un complément direct placé avant, les pronominaux avec être.',
    ['accord']),
  rule(1254, 'Un verbe pronominal prend être : que je me sois trompé.', 'A pronominal verb takes être: que je me sois trompé.',
    '/œ̃ vɛʁb pʁɔ.nɔ.mi.nal pʁɑ̃ ɛtʁ kə ʒə mə swa tʁɔ̃.pe/', 'uhⁿ vehrb pro-no-mee-NAL | prahⁿ EHTR | kuh zhuh muh swa trohⁿ-PAY',
    'Au subjonctif passé, un verbe pronominal prend…',
    "Toujours être : que je me sois trompé, jamais que je m'aie trompé.",
    ['pronominal']),
  sent(1255, 'Je suis content que nous nous soyons revus.', 'I am glad we saw each other again.',
    '/ʒə sɥi kɔ̃.tɑ̃ kə nu nu swa.jɔ̃ ʁə.vy/', 'zhuh swee kohⁿ-TAHⁿ | kuh noo noo swa-yohⁿ ruh-VÜ', ['pronominal', 'accord']),
  sent(1256, 'Il est normal que tu te sois senti perdu.', 'It is normal that you felt lost.',
    '/i.lɛ nɔʁ.mal kə ty tə swa sɑ̃.ti pɛʁ.dy/', 'ee-leh nor-MAL | kuh tü tuh swa sahⁿ-tee pehr-DÜ', ['pronominal']),
];

/* ── ACT 4 · L'HORLOGE : EN MÊME TEMPS OU DÉJÀ FAIT (.1258-.1273) ─────────── */

export const ACT4_ROWS: Row[] = [
  sent(1258, 'Je suis contente que Léo vienne à la fête.', 'I am glad Léo is coming to the party.',
    '/ʒə sɥi kɔ̃.tɑ̃t kə le.o vjɛn a la fɛt/', 'zhuh swee kohⁿ-TAHⁿT | kuh lay-OH vyenn a la FET', ['horloge', 'simultane']),
  sent(1259, 'Je suis contente que Léo soit venu à la fête.', 'I am glad Léo came to the party.',
    '/ʒə sɥi kɔ̃.tɑ̃t kə le.o swa və.ny a la fɛt/', 'zhuh swee kohⁿ-TAHⁿT | kuh lay-OH swa vuh-NÜ a la FET', ['horloge', 'accompli'], FCVDR),
  sent(1260, "Je regrette qu'elle parte demain.", 'I am sorry she is leaving tomorrow.',
    '/ʒə ʁə.ɡʁɛt kɛl paʁt də.mɛ̃/', 'zhuh ruh-GRET | kel PART duh-MEHⁿ', ['horloge', 'simultane']),
  sent(1261, "Je regrette qu'elle soit partie hier.", 'I am sorry she left yesterday.',
    '/ʒə ʁə.ɡʁɛt kɛl swa paʁ.ti jɛʁ/', 'zhuh ruh-GRET | kel swa par-TEE | YEHR', ['horloge', 'accompli']),
  sent(1262, "J'étais content qu'il soit là.", 'I was glad he was there.',
    '/ʒe.tɛ kɔ̃.tɑ̃ kil swa la/', 'zhay-teh kohⁿ-TAHⁿ | keel swa LA', ['horloge', 'simultane', 'passe']),
  sent(1263, "J'étais content qu'il soit venu.", 'I was glad he had come.',
    '/ʒe.tɛ kɔ̃.tɑ̃ kil swa və.ny/', 'zhay-teh kohⁿ-TAHⁿ | keel swa vuh-NÜ', ['horloge', 'accompli', 'passe'], FCVDR),
  sent(1264, "Je doute qu'il comprenne.", 'I doubt he understands.',
    '/ʒə dut kil kɔ̃.pʁɛn/', 'zhuh DOOT | keel kohⁿ-PRENN', ['horloge', 'simultane']),
  sent(1265, "Je doute qu'il ait compris.", 'I doubt he understood.',
    '/ʒə dut ki.lɛ kɔ̃.pʁi/', 'zhuh DOOT | kee-leh kohⁿ-PREE', ['horloge', 'accompli']),
  sent(1266, "Hier soir, j'avais peur qu'il pleuve.", 'Last night I was afraid it would rain.',
    '/jɛʁ swaʁ ʒa.vɛ pœʁ kil plœv/', 'yehr SWAR | zha-veh PUHR | keel PLUHV', ['horloge', 'simultane', 'passe']),
  sent(1267, "J'étais surprise qu'elle ait déjà fini.", 'I was surprised she had already finished.',
    '/ʒe.tɛ syʁ.pʁiz kɛ.lɛ de.ʒa fi.ni/', 'zhay-teh sür-PREEZ | keh-leh day-zha fee-NEE', ['horloge', 'accompli', 'passe']),
  rule(1268, 'Le subjonctif présent : en même temps ou plus tard. Le subjonctif passé : déjà fait.', 'Present subjunctive: at the same time or later. Past subjunctive: already done.',
    '/lə syb.ʒɔ̃k.tif pʁe.zɑ̃ ɑ̃ mɛm tɑ̃ u ply taʁ lə syb.ʒɔ̃k.tif pa.se de.ʒa fɛ/', 'luh süb-zhohⁿk-teef pray-ZAHⁿ | ahⁿ mem TAHⁿ oo plü TAR | luh süb-zhohⁿk-teef pa-SAY | day-zha FEH',
    'Présent ou passé : qui décide ?',
    "Le moment de l'action par rapport au verbe principal, pas la date du calendrier.",
    ['horloge']),
  gap(1269, 'Je suis désolé que tu aies dû attendre sous la pluie.', 'I am sorry you had to wait in the rain.',
    '/ʒə sɥi de.zɔ.le kə ty ɛ dy a.tɑ̃dʁ su la plɥi/', 'zhuh swee day-zo-LAY | kuh tü eh dü a-TAHⁿDR | soo la PLWEE',
    "Je suis désolé que tu ___ attendre sous la pluie. (devoir · c'est fini)",
    "L'attente est finie quand tu t'excuses : que tu aies dû. EN: the wait is over.",
    ['horloge', 'accompli']),
  gap(1270, 'Je suis ravi que tu sois là ce soir.', 'I am delighted you are here tonight.',
    '/ʒə sɥi ʁa.vi kə ty swa la sə swaʁ/', 'zhuh swee ra-VEE | kuh tü swa LA | suh SWAR',
    'Je suis ravi que tu ___ là ce soir. (être · en ce moment)',
    'Tu es là maintenant, en même temps que ma joie : subjonctif présent. EN: at the same time, so present.',
    ['horloge', 'simultane'], FCVDR),
  sent(1271, 'Nous sommes heureux que vous ayez choisi notre hôtel.', 'We are happy you chose our hotel.',
    '/nu sɔm.zø.ʁø kə vu.ze.je ʃwa.zi nɔ.tʁo.tɛl/', 'noo som-zuh-RUH | kuh voo-zay-yay shwa-ZEE | no-troh-TEL', ['horloge', 'accompli']),
  sent(1272, 'Elle craint que son fils ait perdu ses papiers.', 'She fears her son has lost his papers.',
    '/ɛl kʁɛ̃ kə sɔ̃ fis ɛ pɛʁ.dy se pa.pje/', 'el KREHⁿ | kuh sohⁿ FEESS eh pehr-DÜ | say pa-PYAY', ['horloge', 'accompli']),
  sent(1273, 'Elle craint que son fils perde ses papiers.', 'She fears her son will lose his papers.',
    '/ɛl kʁɛ̃ kə sɔ̃ fis pɛʁd se pa.pje/', 'el KREHⁿ | kuh sohⁿ FEESS PEHRD | say pa-PYAY', ['horloge', 'simultane']),
];

/* ── ACT 5 · RÉAGIR APRÈS COUP : LES SENTIMENTS (.1276-.1293) ─────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1276, "Je suis blessée qu'elle ne m'ait rien dit.", 'I am hurt that she told me nothing.',
    '/ʒə sɥi blɛ.se kɛl nə mɛ ʁjɛ̃ di/', 'zhuh swee bleh-SAY | kel nuh meh ryehⁿ DEE', ['sentiment', 'negation'], FCVDR),
  sent(1277, "Je suis déçu que tu n'aies pas appelé.", 'I am disappointed you did not call.',
    '/ʒə sɥi de.sy kə ty nɛ pa.za.ple/', 'zhuh swee day-SÜ | kuh tü neh pa-za-PLAY', ['sentiment', 'negation']),
  sent(1278, "Ça m'a fait de la peine qu'il ne soit pas venu.", 'It upset me that he did not come.',
    '/sa ma fɛ də la pɛn kil nə swa pa və.ny/', 'sa ma feh duh la PENN | keel nuh swa pa vuh-NÜ', ['sentiment', 'negation', 'passe']),
  sent(1279, 'Je suis fière que tu aies osé parler.', 'I am proud you dared to speak.',
    '/ʒə sɥi fjɛʁ kə ty ɛ o.ze paʁ.le/', 'zhuh swee FYEHR | kuh tü eh oh-zay par-LAY', ['sentiment'], FCVDR),
  sent(1280, "J'ai honte qu'on se soit disputés devant les enfants.", 'I am ashamed we argued in front of the children.',
    '/ʒe ɔ̃t kɔ̃ sə swa dis.py.te də.vɑ̃ le.zɑ̃.fɑ̃/', 'zhay OHⁿT | kohⁿ suh swa dees-pü-TAY | duh-vahⁿ lay-zahⁿ-FAHⁿ', ['sentiment', 'pronominal']),
  sent(1281, "C'est incroyable qu'elle ait gagné le concours.", 'It is incredible that she won the competition.',
    '/sɛ.tɛ̃.kʁwa.jabl kɛ.lɛ ɡa.ɲe lə kɔ̃.kuʁ/', 'seh-tehⁿ-krwa-YABL | keh-leh ga-NYAY luh kohⁿ-KOOR', ['sentiment', 'jugement']),
  sent(1282, "Je suis soulagé que l'opération se soit bien passée.", 'I am relieved the operation went well.',
    '/ʒə sɥi su.la.ʒe kə lɔ.pe.ʁa.sjɔ̃ sə swa bjɛ̃ pa.se/', 'zhuh swee soo-la-ZHAY | kuh lo-pay-ra-SYOHⁿ | suh swa byehⁿ pa-SAY', ['sentiment', 'pronominal']),
  sent(1283, "Je m'étonne qu'il n'ait pas répondu.", 'I am surprised he has not answered.',
    '/ʒə me.tɔn kil nɛ pa ʁe.pɔ̃.dy/', 'zhuh may-TONN | keel neh pa ray-pohⁿ-DÜ', ['sentiment', 'negation']),
  sent(1284, "Je suis furieux qu'on ait annulé le concert sans prévenir.", 'I am furious they cancelled the concert without warning.',
    '/ʒə sɥi fy.ʁjø kɔ̃.nɛ.ta.ny.le lə kɔ̃.sɛʁ sɑ̃ pʁe.və.niʁ/', 'zhuh swee fü-RYUH | kohⁿ-neh-ta-nü-LAY luh kohⁿ-SEHR | sahⁿ pray-vuh-NEER', ['sentiment']),
  sent(1285, 'Je suis content que tu aies réussi ton examen.', 'I am glad you passed your exam.',
    '/ʒə sɥi kɔ̃.tɑ̃ kə ty ɛ ʁe.y.si tɔ̃.nɛɡ.za.mɛ̃/', 'zhuh swee kohⁿ-TAHⁿ | kuh tü eh ray-ü-SEE | tohⁿ-neg-za-MEHⁿ', ['sentiment', 'paire'], FCVDR),
  sent(1286, 'Je sais que tu as réussi ton examen.', 'I know you passed your exam.',
    '/ʒə sɛ kə ty a ʁe.y.si tɔ̃.nɛɡ.za.mɛ̃/', 'zhuh SEH | kuh tü a ray-ü-SEE | tohⁿ-neg-za-MEHⁿ', ['savoir', 'paire']),
  sent(1287, "Je suis sûr qu'il a oublié.", 'I am sure he forgot.',
    '/ʒə sɥi syʁ ki.la u.bli.je/', 'zhuh swee SÜR | kee-la oo-blee-YAY', ['savoir', 'paire']),
  rule(1288, "Après un sentiment, le subjonctif ; après un savoir, l'indicatif.", 'After a feeling, the subjunctive; after knowledge, the indicative.',
    '/a.pʁɛ.zœ̃ sɑ̃.ti.mɑ̃ lə syb.ʒɔ̃k.tif a.pʁɛ.zœ̃ sa.vwaʁ lɛ̃.di.ka.tif/', 'a-preh-zuhⁿ sahⁿ-tee-MAHⁿ | luh süb-zhohⁿk-TEEF | a-preh-zuhⁿ sa-VWAR | lehⁿ-dee-ka-TEEF',
    'Content que tu aies réussi, sûr que tu as réussi : pourquoi deux modes ?',
    "Le sentiment réagit à un fait ; le savoir l'affirme. Le fait est le même, le regard change.",
    ['sentiment', 'savoir']),
  gap(1289, 'Je suis déçue que vous ne soyez pas restés plus longtemps.', 'I am disappointed you did not stay longer.',
    '/ʒə sɥi de.sy kə vu nə swa.je pa ʁɛs.te ply lɔ̃.tɑ̃/', 'zhuh swee day-SÜ | kuh voo nuh swa-yay pa res-TAY | plü lohⁿ-TAHⁿ',
    'Je suis déçue que vous ___ plus longtemps. (ne pas rester)',
    "Ne et pas entourent l'auxiliaire : ne soyez pas restés. EN: ne... pas round the auxiliary.",
    ['sentiment', 'negation']),
  gap(1290, "C'est dommage que tu aies raté le dernier métro.", 'It is a pity you missed the last metro.',
    '/sɛ dɔ.maʒ kə ty ɛ ʁa.te lə dɛʁ.nje me.tʁo/', 'seh do-MAZH | kuh tü eh ra-TAY | luh dehr-nyay may-TROH',
    "C'est dommage que tu ___ le dernier métro. (rater · c'est fait)",
    "C'est dommage réagit à un fait passé : que tu aies raté. EN: a reaction to a past fact.",
    ['sentiment'], FCVDR),
  sent(1291, "Ça me rend triste qu'ils aient vendu la ferme.", 'It makes me sad that they sold the farm.',
    '/sa mə ʁɑ̃ tʁist kil.zɛ vɑ̃.dy la fɛʁm/', 'sa muh rahⁿ TREEST | keel-zeh vahⁿ-DÜ la FEHRM', ['sentiment']),
  sent(1292, 'Je suis touchée que tu te sois souvenu de mon anniversaire.', 'I am touched you remembered my birthday.',
    '/ʒə sɥi tu.ʃe kə ty tə swa su.və.ny də mɔ̃.na.ni.vɛʁ.sɛʁ/', 'zhuh swee too-SHAY | kuh tü tuh swa soo-vuh-NÜ | duh mohⁿ-na-nee-vehr-SEHR', ['sentiment', 'pronominal']),
  sent(1293, 'Je suis heureux que tout se soit arrangé.', 'I am happy it all worked out.',
    '/ʒə sɥi ø.ʁø kə tu sə swa.ta.ʁɑ̃.ʒe/', 'zhuh swee uh-RUH | kuh too suh swa-ta-rahⁿ-ZHAY', ['sentiment', 'pronominal']),
];

/* ── ACT 6 · LE DOUTE SUR CE QUI S'EST PASSÉ (.1296-.1311) ────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1296, "Il est possible que Marc ait oublié la réunion.", 'Marc may have forgotten the meeting.',
    '/i.lɛ pɔ.sibl kə maʁk ɛ.tu.bli.je la ʁe.y.njɔ̃/', 'ee-leh po-SEEBL | kuh MARK eh-too-blee-YAY | la ray-ü-NYOHⁿ', ['doute'], FCVDR),
  sent(1297, "Il se peut qu'il ait eu un empêchement.", 'He may have been held up.',
    '/il sə pø ki.lɛ.ty œ̃.nɑ̃.pɛʃ.mɑ̃/', 'eel suh PUH | kee-leh-TÜ | uhⁿ-nahⁿ-pesh-MAHⁿ', ['doute']),
  sent(1298, "Je doute qu'il soit déjà rentré de Berlin.", 'I doubt he is back from Berlin yet.',
    '/ʒə dut kil swa de.ʒa ʁɑ̃.tʁe də bɛʁ.lɛ̃/', 'zhuh DOOT | keel swa day-zha rahⁿ-TRAY | duh behr-LEHⁿ', ['doute']),
  sent(1299, "Je ne crois pas qu'il ait reçu le message.", 'I do not think he got the message.',
    '/ʒə nə kʁwa pa ki.lɛ ʁə.sy lə me.saʒ/', 'zhuh nuh krwa PA | kee-leh ruh-SÜ luh may-SAZH', ['doute', 'bascule'], FCVDR),
  sent(1300, "Je crois qu'il a reçu le message.", 'I think he got the message.',
    '/ʒə kʁwa ki.la ʁə.sy lə me.saʒ/', 'zhuh KRWA | kee-la ruh-SÜ luh may-SAZH', ['doute', 'bascule', 'indicatif']),
  sent(1301, "Je ne pense pas qu'elle se soit trompée.", 'I do not think she made a mistake.',
    '/ʒə nə pɑ̃s pa kɛl sə swa tʁɔ̃.pe/', 'zhuh nuh pahⁿs PA | kel suh swa trohⁿ-PAY', ['doute', 'bascule', 'pronominal']),
  sent(1302, 'Il est peu probable que le colis soit arrivé avant midi.', 'It is unlikely the parcel arrived before noon.',
    '/i.lɛ pø pʁɔ.babl kə lə kɔ.li swa.ta.ʁi.ve a.vɑ̃ mi.di/', 'ee-leh puh pro-BABL | kuh luh ko-LEE swa-ta-ree-VAY | a-vahⁿ mee-DEE', ['doute']),
  sent(1303, 'Il est probable que le colis est arrivé ce matin.', 'The parcel probably arrived this morning.',
    '/i.lɛ pʁɔ.babl kə lə kɔ.li ɛ.ta.ʁi.ve sə ma.tɛ̃/', 'ee-leh pro-BABL | kuh luh ko-LEE eh-ta-ree-VAY | suh ma-TEHⁿ', ['doute', 'indicatif']),
  sent(1304, 'Il semble que la réunion ait été déplacée.', 'It seems the meeting has been moved.',
    '/il sɑ̃bl kə la ʁe.y.njɔ̃ ɛ.te.te de.pla.se/', 'eel SAHⁿBL | kuh la ray-ü-NYOHⁿ | eh-tay-TAY day-pla-SAY', ['doute']),
  sent(1305, 'Il me semble que la réunion a été déplacée.', 'I think the meeting has been moved.',
    '/il mə sɑ̃bl kə la ʁe.y.njɔ̃ a e.te de.pla.se/', 'eel muh SAHⁿBL | kuh la ray-ü-NYOHⁿ | a ay-TAY day-pla-SAY', ['doute', 'indicatif']),
  sent(1306, "Je ne suis pas sûre qu'ils aient compris la consigne.", 'I am not sure they understood the instructions.',
    '/ʒə nə sɥi pa syʁ kil.zɛ kɔ̃.pʁi la kɔ̃.siɲ/', 'zhuh nuh swee pa SÜR | keel-zeh kohⁿ-PREE | la kohⁿ-SEENY', ['doute', 'bascule']),
  gap(1307, 'Il est possible que le train ait eu du retard.', 'The train may have been late.',
    '/i.lɛ pɔ.sibl kə lə tʁɛ̃ ɛ.ty dy ʁə.taʁ/', 'ee-leh po-SEEBL | kuh luh TREHⁿ | eh-TÜ dü ruh-TAR',
    "Il est possible que le train ___ du retard. (avoir · ce matin, c'est passé)",
    'Un doute sur un fait passé : que le train ait eu. EN: a doubt about something past.',
    ['doute'], FCVDR),
  gap(1308, "Je doute qu'elle ait lu mon rapport.", 'I doubt she read my report.',
    '/ʒə dut kɛ.lɛ ly mɔ̃ ʁa.pɔʁ/', 'zhuh DOOT | keh-leh LÜ | mohⁿ ra-POR',
    "Je doute qu'elle ___ mon rapport. (lire · avant la réunion d'hier)",
    "Lire prend avoir : qu'elle ait lu. EN: avoir, participle lu.",
    ['doute']),
  rule(1309, 'Un doute sur ce qui a déjà eu lieu : subjonctif passé.', 'A doubt about something that has already happened: past subjunctive.',
    '/œ̃ dut syʁ sə ki a de.ʒa y ljø syb.ʒɔ̃k.tif pa.se/', 'uhⁿ DOOT | sür suh kee a day-zha ü LYUH | süb-zhohⁿk-teef pa-SAY',
    "Tu doutes d'un fait passé : quelle forme ?",
    "Le subjonctif passé : je doute qu'il ait compris. Je crois, je pense et il est probable gardent l'indicatif.",
    ['doute']),
  sent(1310, "Peut-être qu'il a oublié.", 'Maybe he forgot.',
    '/pø.tɛtʁ ki.la u.bli.je/', 'puh-TETR | kee-la oo-blee-YAY', ['doute', 'indicatif']),
  sent(1311, "Il n'est pas impossible qu'ils se soient perdus.", 'It is not impossible that they got lost.',
    '/il nɛ pa.zɛ̃.pɔ.sibl kil sə swa pɛʁ.dy/', 'eel neh pa-zehⁿ-po-SEEBL | keel suh swa pehr-DÜ', ['doute', 'pronominal']),
];

/* ── ACT 7 · AVANT L'ÉCHÉANCE (.1314-.1330) ───────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1314, 'Il faut que tu aies fini avant lundi.', 'You must have finished by Monday.',
    '/il fo kə ty ɛ fi.ni a.vɑ̃ lœ̃.di/', 'eel FOH | kuh tü eh fee-NEE | a-vahⁿ luhⁿ-DEE', ['echeance'], FCVDR),
  sent(1315, 'Il faut que tu finisses avant lundi.', 'You must finish before Monday.',
    '/il fo kə ty fi.nis a.vɑ̃ lœ̃.di/', 'eel FOH | kuh tü fee-NEESS | a-vahⁿ luhⁿ-DEE', ['echeance', 'simultane']),
  sent(1316, "Il faut que vous ayez libéré l'appartement avant le trente juin.", 'You must have vacated the flat by 30 June.',
    '/il fo kə vu.ze.je li.be.ʁe la.paʁ.tə.mɑ̃ a.vɑ̃ lə tʁɑ̃t ʒɥɛ̃/', 'eel FOH | kuh voo-zay-yay lee-bay-RAY la-par-tuh-MAHⁿ | a-vahⁿ luh trahⁿt ZHWEHⁿ', ['echeance', 'lecture']),
  sent(1317, "Il est indispensable que les clés aient été rendues à l'agence.", 'The keys must have been returned to the agency.',
    '/i.lɛ.tɛ̃.dis.pɑ̃.sabl kə le kle ɛ.te.te ʁɑ̃.dy a la.ʒɑ̃s/', 'ee-leh-tehⁿ-dees-pahⁿ-SABL | kuh lay KLAY | eh-tay-tay rahⁿ-DÜ | a la-ZHAHⁿS', ['echeance', 'lecture']),
  sent(1318, 'Je veux que tu aies rangé ta chambre avant leur arrivée.', 'I want you to have tidied your room before they arrive.',
    '/ʒə vø kə ty ɛ ʁɑ̃.ʒe ta ʃɑ̃bʁ a.vɑ̃ lœ.ʁa.ʁi.ve/', 'zhuh VUH | kuh tü eh rahⁿ-ZHAY ta SHAHⁿBR | a-vahⁿ luh-ra-ree-VAY', ['echeance']),
  sent(1319, "Je veux partir avant qu'il ait fini son discours.", 'I want to leave before he has finished his speech.',
    '/ʒə vø paʁ.tiʁ a.vɑ̃ ki.lɛ fi.ni sɔ̃ dis.kuʁ/', 'zhuh vuh par-TEER | a-vahⁿ kee-leh fee-NEE | sohⁿ dees-KOOR', ['echeance', 'avant-que'], FCVDR),
  sent(1320, "Ne signe rien avant qu'on ait relu le contrat ensemble.", 'Do not sign anything before we have reread the contract together.',
    '/nə siɲ ʁjɛ̃ a.vɑ̃ kɔ̃.nɛ ʁə.ly lə kɔ̃.tʁa ɑ̃.sɑ̃bl/', 'nuh seeny RYEHⁿ | a-vahⁿ kohⁿ-neh ruh-LÜ | luh kohⁿ-TRA ahⁿ-SAHⁿBL', ['echeance', 'avant-que']),
  sent(1321, "Attends jusqu'à ce que j'aie terminé mon appel.", 'Wait until I have finished my call.',
    '/a.tɑ̃ ʒys.kas.kə ʒɛ tɛʁ.mi.ne mɔ̃.na.pɛl/', 'a-TAHⁿ | zhüs-kass-kuh zheh tehr-mee-NAY | mohⁿ-na-PEL', ['echeance', 'jusqu-a-ce-que']),
  sent(1322, "J'attends que tu aies fini pour servir le dessert.", 'I am waiting until you have finished to serve dessert.',
    '/ʒa.tɑ̃ kə ty ɛ fi.ni puʁ sɛʁ.viʁ lə de.sɛʁ/', 'zha-TAHⁿ | kuh tü eh fee-NEE | poor sehr-veer luh day-SEHR', ['echeance', 'attendre-que']),
  sent(1323, "Rentre avant qu'il fasse nuit.", 'Come home before it gets dark.',
    '/ʁɑ̃tʁ a.vɑ̃ kil fas nɥi/', 'RAHⁿTR | a-vahⁿ keel fass NWEE', ['echeance', 'simultane']),
  rule(1324, 'Avec une échéance, le subjonctif passé dit : ce sera fait à ce moment-là.', 'With a deadline, the past subjunctive says: it will be done by then.',
    '/a.vɛk y.ne.ʃe.ɑ̃s lə syb.ʒɔ̃k.tif pa.se di sə sə.ʁa fɛ a sə mɔ.mɑ̃.la/', 'a-vek ü-nay-shay-AHⁿS | luh süb-zhohⁿk-teef pa-say DEE | suh suh-ra FEH | a suh mo-mahⁿ-LA',
    "Il faut que tu aies fini avant lundi : qu'est-ce qui compte ?",
    "Le résultat, lundi : le travail doit être terminé à ce moment-là. Que tu finisses parle plutôt de l'action à faire.",
    ['echeance']),
  gap(1325, 'Il faut que les candidats aient envoyé leur dossier avant le quinze mars.', 'Candidates must have sent their file by 15 March.',
    '/il fo kə le kɑ̃.di.da ɛ.tɑ̃.vwa.je lœʁ do.sje a.vɑ̃ lə kɛ̃z maʁs/', 'eel FOH | kuh lay kahⁿ-dee-DA | eh-tahⁿ-vwa-YAY luhr do-SYAY | a-vahⁿ luh kehⁿz MARSS',
    'Il faut que les candidats ___ leur dossier avant le quinze mars. (envoyer · au plus tard le quinze)',
    "Le dossier doit être parti à la date limite : qu'ils aient envoyé. EN: sent by the deadline.",
    ['echeance'], FCVDR),
  gap(1326, "Ne pars pas avant qu'on ait trouvé une solution.", 'Do not leave before we have found a solution.',
    '/nə paʁ pa a.vɑ̃ kɔ̃.nɛ tʁu.ve yn sɔ.ly.sjɔ̃/', 'nuh par PA | a-vahⁿ kohⁿ-neh troo-VAY | ün so-lü-SYOHⁿ',
    "Ne pars pas avant qu'on ___ une solution. (trouver · avant que)",
    "Avant que appelle le subjonctif, et la solution doit venir d'abord : qu'on ait trouvé. EN: the solution must come first.",
    ['echeance', 'avant-que']),
  sent(1327, 'Il est important que vous ayez lu le dossier avant la réunion.', 'It is important that you have read the file before the meeting.',
    '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ kə vu.ze.je ly lə do.sje a.vɑ̃ la ʁe.y.njɔ̃/', 'ee-leh-tehⁿ-por-TAHⁿ | kuh voo-zay-yay LÜ luh do-SYAY | a-vahⁿ la ray-ü-NYOHⁿ', ['echeance']),
  sent(1328, "Je souhaite que nous ayons tout réglé d'ici vendredi.", 'I would like us to have settled everything by Friday.',
    '/ʒə swɛt kə nu.ze.jɔ̃ tu ʁe.ɡle di.si vɑ̃.dʁə.di/', 'zhuh SWET | kuh noo-zay-yohⁿ too ray-GLAY | dee-see vahⁿ-druh-DEE', ['echeance']),
  sent(1329, 'Elle est partie avant que nous ayons pu lui dire au revoir.', 'She left before we could say goodbye.',
    '/ɛ.lɛ paʁ.ti a.vɑ̃ kə nu.ze.jɔ̃ py lɥi diʁ o ʁə.vwaʁ/', 'eh-leh par-TEE | a-vahⁿ kuh noo-zay-yohⁿ PÜ | lwee deer oh ruh-VWAR', ['echeance', 'avant-que']),
  sent(1330, "Il faudrait que tu aies pris une décision d'ici ce soir.", 'You would need to have made a decision by this evening.',
    '/il fo.dʁɛ kə ty ɛ pʁi yn de.si.zjɔ̃ di.si sə swaʁ/', 'eel foh-DREH | kuh tü eh PREE ün day-see-ZYOHⁿ | dee-see suh SWAR', ['echeance']),
];

/* ── ACT 8 · LE MEILLEUR FILM QUE J'AIE VU (.1333-.1348) ──────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1333, "C'est le meilleur film que j'aie vu depuis des années.", 'It is the best film I have seen in years.',
    '/sɛ lə mɛ.jœʁ film kə ʒɛ vy də.pɥi de.za.ne/', 'seh luh meh-yuhr FEELM | kuh zheh VÜ | duh-pwee day-za-NAY', ['superlatif'], FCVDR),
  sent(1334, "C'est le seul roman qu'elle ait écrit en français.", 'It is the only novel she has written in French.',
    '/sɛ lə sœl ʁɔ.mɑ̃ kɛ.lɛ.te.kʁi ɑ̃ fʁɑ̃.sɛ/', 'seh luh suhl ro-MAHⁿ | keh-leh-tay-KREE | ahⁿ frahⁿ-SEH', ['superlatif', 'seul']),
  sent(1335, "Tu es la première personne qui m'ait parlé de ce projet.", 'You are the first person who has talked to me about this project.',
    '/ty ɛ la pʁə.mjɛʁ pɛʁ.sɔn ki mɛ paʁ.le də sə pʁɔ.ʒɛ/', 'tü eh la pruh-myehr pehr-SONN | kee meh par-LAY | duh suh pro-ZHEH', ['superlatif', 'premier']),
  sent(1336, "C'est le dernier concert qu'ils aient donné ensemble.", 'It is the last concert they gave together.',
    '/sɛ lə dɛʁ.nje kɔ̃.sɛʁ kil.zɛ dɔ.ne ɑ̃.sɑ̃bl/', 'seh luh dehr-nyay kohⁿ-SEHR | keel-zeh do-NAY ahⁿ-SAHⁿBL', ['superlatif', 'dernier']),
  sent(1337, "C'est la plus belle ville que nous ayons visitée.", 'It is the most beautiful city we have visited.',
    '/sɛ la ply bɛl vil kə nu.ze.jɔ̃ vi.zi.te/', 'seh la plü bel VEEL | kuh noo-zay-yohⁿ vee-zee-TAY', ['superlatif', 'accord'], FCVDR),
  sent(1338, "C'est la première fois que je viens à Québec.", 'It is the first time I have come to Québec.',
    '/sɛ la pʁə.mjɛʁ fwa kə ʒə vjɛ̃ a ke.bɛk/', 'seh la pruh-myehr FWA | kuh zhuh vyehⁿ a kay-BEK', ['indicatif', 'premiere-fois']),
  sent(1339, "C'est le film que j'ai vu hier soir.", 'It is the film I saw last night.',
    '/sɛ lə film kə ʒe vy jɛʁ swaʁ/', 'seh luh FEELM | kuh zhay VÜ | yehr SWAR', ['indicatif']),
  sent(1340, "C'est l'hiver le plus froid que Montréal ait connu depuis vingt ans.", 'It is the coldest winter Montréal has known in twenty years.',
    '/sɛ li.vɛʁ lə ply fʁwa kə mɔ̃.ʁe.al ɛ kɔ.ny də.pɥi vɛ̃.tɑ̃/', 'seh lee-VEHR luh plü FRWA | kuh mohⁿ-ray-AL eh ko-NÜ | duh-pwee vehⁿ-TAHⁿ', ['superlatif']),
  sent(1341, "C'est la meilleure décision que tu aies prise.", 'It is the best decision you have made.',
    '/sɛ la mɛ.jœʁ de.si.zjɔ̃ kə ty ɛ pʁiz/', 'seh la meh-yuhr day-see-ZYOHⁿ | kuh tü eh PREEZ', ['superlatif', 'accord']),
  sent(1342, "C'est le seul endroit où je me sois senti chez moi.", 'It is the only place where I have felt at home.',
    '/sɛ lə sœ.lɑ̃.dʁwa u ʒə mə swa sɑ̃.ti ʃe mwa/', 'seh luh suh-lahⁿ-DRWA | oo zhuh muh swa sahⁿ-TEE | shay MWA', ['superlatif', 'seul', 'pronominal']),
  gap(1343, "C'est le plus long voyage que nous ayons fait.", 'It is the longest trip we have made.',
    '/sɛ lə ply lɔ̃ vwa.jaʒ kə nu.ze.jɔ̃ fɛ/', 'seh luh plü lohⁿ vwa-YAZH | kuh noo-zay-yohⁿ FEH',
    "C'est le plus long voyage que nous ___. (faire · après un superlatif)",
    'Un superlatif, puis que : le subjonctif passé, que nous ayons fait. EN: past subjunctive after a superlative.',
    ['superlatif'], FCVDR),
  gap(1344, "C'est la seule personne qui m'ait aidé.", 'She is the only person who helped me.',
    '/sɛ la sœl pɛʁ.sɔn ki mɛ.te.de/', 'seh la suhl pehr-SONN | kee meh-tay-DAY',
    "C'est la seule personne qui m'___. (aider · après la seule)",
    "La seule, puis qui : qui m'ait aidé. EN: past subjunctive after la seule.",
    ['superlatif', 'seul']),
  rule(1345, "Après un superlatif, le seul, le premier ou le dernier, l'écrit soigné prend le subjonctif.", 'After a superlative, le seul, le premier or le dernier, careful writing takes the subjunctive.',
    '/a.pʁɛ.zœ̃ sy.pɛʁ.la.tif lə sœl lə pʁə.mje u lə dɛʁ.nje le.kʁi swa.ɲe pʁɑ̃ lə syb.ʒɔ̃k.tif/', 'a-preh-zuhⁿ sü-pehr-la-TEEF | luh SUHL | luh pruh-MYAY | oo luh dehr-NYAY | lay-kree swa-NYAY | prahⁿ luh süb-zhohⁿk-TEEF',
    "Le meilleur film que j'ai vu, ou que j'aie vu ?",
    "À l'écrit soigné, que j'aie vu : le superlatif est un jugement. À l'oral, on entend souvent l'indicatif. La première fois que garde toujours l'indicatif.",
    ['superlatif']),
  sent(1346, "C'est le plus beau cadeau qu'on m'ait fait.", 'It is the most beautiful present anyone has given me.',
    '/sɛ lə ply bo ka.do kɔ̃ mɛ fɛ/', 'seh luh plü boh ka-DOH | kohⁿ meh FEH', ['superlatif']),
  sent(1347, "C'est la dernière fois que je prête ma voiture.", 'That is the last time I lend my car.',
    '/sɛ la dɛʁ.njɛʁ fwa kə ʒə pʁɛt ma vwa.tyʁ/', 'seh la dehr-nyehr FWA | kuh zhuh PRET | ma vwa-TÜR', ['indicatif', 'premiere-fois']),
  sent(1348, "C'est le livre que j'ai lu cet été.", 'It is the book I read this summer.',
    '/sɛ lə livʁ kə ʒe ly sɛ.te.te/', 'seh luh LEEVR | kuh zhay LÜ | seh-tay-TAY', ['indicatif']),
];

/* ── ACT 9 · BIEN QUE CE SOIT FINI (.1350-.1362) ──────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1350, "Bien qu'il ait plu toute la journée, le festival a attiré dix mille personnes.", 'Although it rained all day, the festival drew ten thousand people.',
    '/bjɛ̃ ki.lɛ ply tut la ʒuʁ.ne lə fɛs.ti.val a a.ti.ʁe di mil pɛʁ.sɔn/', 'byehⁿ kee-leh PLÜ | toot la zhoor-NAY | luh fes-tee-VAL a a-tee-RAY | dee meel pehr-SONN', ['concession', 'lecture']),
  sent(1351, "Bien qu'elle ait beaucoup travaillé, elle n'a pas eu la promotion.", 'Although she worked hard, she did not get the promotion.',
    '/bjɛ̃ kɛ.lɛ bo.ku tʁa.va.je ɛl na pa.zy la pʁɔ.mɔ.sjɔ̃/', 'byehⁿ keh-leh boh-koo tra-va-YAY | el na pa-ZÜ | la pro-mo-SYOHⁿ', ['concession'], FCVDR),
  sent(1352, "Même s'il a plu toute la journée, le festival a été un succès.", 'Even though it rained all day, the festival was a success.',
    '/mɛm si.la ply tut la ʒuʁ.ne lə fɛs.ti.val a e.te œ̃ syk.sɛ/', 'mem see-la PLÜ | toot la zhoor-NAY | luh fes-tee-VAL a ay-TAY | uhⁿ sük-SEH', ['concession', 'meme-si']),
  sent(1353, "Quoiqu'ils se soient préparés pendant des mois, ils ont perdu en demi-finale.", 'Although they had prepared for months, they lost in the semi-final.',
    '/kwa.kil sə swa pʁe.pa.ʁe pɑ̃.dɑ̃ de mwa il.zɔ̃ pɛʁ.dy ɑ̃ də.mi.fi.nal/', 'kwa-keel suh swa pray-pa-RAY | pahⁿ-dahⁿ day MWA | eel-zohⁿ pehr-DÜ | ahⁿ duh-mee-fee-NAL', ['concession', 'quoique', 'pronominal']),
  sent(1354, "Bien qu'il ait été malade toute la semaine, il est venu à la réunion.", 'Although he had been ill all week, he came to the meeting.',
    '/bjɛ̃ ki.lɛ.te.te ma.lad tut la sə.mɛn i.lɛ və.ny a la ʁe.y.njɔ̃/', 'byehⁿ kee-leh-tay-TAY ma-LAD | toot la suh-MENN | ee-leh vuh-NÜ | a la ray-ü-NYOHⁿ', ['concession']),
  sent(1355, 'Bien que nous soyons arrivés en retard, on nous a servis.', 'Although we arrived late, they served us.',
    '/bjɛ̃ kə nu swa.jɔ̃.za.ʁi.ve ɑ̃ ʁə.taʁ ɔ̃ nu.za sɛʁ.vi/', 'byehⁿ kuh noo swa-yohⁿ-za-ree-VAY | ahⁿ ruh-TAR | ohⁿ noo-za sehr-VEE', ['concession', 'etre']),
  sent(1356, "Bien que le spectacle ait commencé tard, personne n'est parti.", 'Although the show started late, nobody left.',
    '/bjɛ̃ kə lə spɛk.takl ɛ kɔ.mɑ̃.se taʁ pɛʁ.sɔn nɛ paʁ.ti/', 'byehⁿ kuh luh spek-TAKL | eh ko-mahⁿ-say TAR | pehr-SONN neh par-TEE', ['concession']),
  sent(1357, 'Quoique la route ait été fermée, les secours sont arrivés à temps.', 'Although the road had been closed, the emergency services arrived in time.',
    '/kwa.kə la ʁut ɛ.te.te fɛʁ.me le sə.kuʁ sɔ̃.ta.ʁi.ve a tɑ̃/', 'kwa-kuh la ROOT | eh-tay-tay fehr-MAY | lay suh-KOOR | sohⁿ-ta-ree-VAY a TAHⁿ', ['concession', 'quoique']),
  rule(1358, 'Bien que + subjonctif passé pour un fait déjà fini ; même si + indicatif.', 'Bien que with the past subjunctive for a fact already over; même si with the indicative.',
    '/bjɛ̃ kə syb.ʒɔ̃k.tif pa.se puʁ œ̃ fɛ de.ʒa fi.ni mɛm si ɛ̃.di.ka.tif/', 'byehⁿ kuh süb-zhohⁿk-teef pa-SAY | poor uhⁿ FEH day-zha fee-NEE | mem SEE | ehⁿ-dee-ka-TEEF',
    "Bien qu'il a plu, ou bien qu'il ait plu ?",
    "Bien qu'il ait plu : bien que prend toujours le subjonctif, et la pluie est finie. Avec même si, l'indicatif : même s'il a plu.",
    ['concession']),
  gap(1359, "Bien qu'elle soit partie tôt, elle a raté son avion.", 'Although she left early, she missed her plane.',
    '/bjɛ̃ kɛl swa paʁ.ti to ɛ.la ʁa.te sɔ̃.na.vjɔ̃/', 'byehⁿ kel swa par-tee TOH | eh-la ra-TAY | sohⁿ-na-VYOHⁿ',
    "Bien qu'elle ___ tôt, elle a raté son avion. (partir · le départ est fini)",
    "Partir prend être, et elle demande un e : qu'elle soit partie. EN: être, feminine agreement.",
    ['concession', 'etre'], FCVDR),
  gap(1360, 'Bien que nous ayons tout vérifié, il reste une erreur.', 'Although we checked everything, there is still a mistake.',
    '/bjɛ̃ kə nu.ze.jɔ̃ tu ve.ʁi.fje il ʁɛst y.nɛ.ʁœʁ/', 'byehⁿ kuh noo-zay-yohⁿ too vay-ree-FYAY | eel REST ü-neh-RUHR',
    'Bien que nous ___ tout vérifié, il reste une erreur. (avoir · auxiliaire)',
    'Bien que appelle le subjonctif : nous ayons, jamais nous avons. EN: ayons, never avons.',
    ['concession']),
  sent(1361, "Bien qu'on se soit vus souvent, je ne la connais pas vraiment.", 'Although we have seen each other often, I do not really know her.',
    '/bjɛ̃ kɔ̃ sə swa vy su.vɑ̃ ʒə nə la kɔ.nɛ pa vʁɛ.mɑ̃/', 'byehⁿ kohⁿ suh swa vü soo-VAHⁿ | zhuh nuh la ko-neh pa vreh-MAHⁿ', ['concession', 'pronominal']),
  sent(1362, "Même si j'ai tout vérifié, je relis encore une fois.", 'Even though I checked everything, I am reading it once more.',
    '/mɛm si ʒe tu ve.ʁi.fje ʒə ʁə.li ɑ̃.kɔʁ yn fwa/', 'mem see zhay too vay-ree-FYAY | zhuh ruh-LEE | ahⁿ-kor ün FWA', ['concession', 'meme-si']),
];

/* ── ACT 10 · CONTENT D'ÊTRE VENU (.1365-.1380) ───────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1365, "Je suis content d'être venu.", 'I am glad I came.',
    '/ʒə sɥi kɔ̃.tɑ̃ dɛtʁ və.ny/', 'zhuh swee kohⁿ-TAHⁿ | detr vuh-NÜ', ['infinitif', 'meme-sujet'], FCVDR),
  sent(1366, 'Je regrette de ne pas avoir appelé plus tôt.', 'I am sorry I did not call sooner.',
    '/ʒə ʁə.ɡʁɛt də nə pa.za.vwaʁ a.ple ply to/', 'zhuh ruh-GRET | duh nuh pa-za-vwar a-PLAY | plü TOH', ['infinitif', 'meme-sujet', 'negation'], FCVDR),
  sent(1367, "Je regrette que tu n'aies pas appelé plus tôt.", 'I am sorry you did not call sooner.',
    '/ʒə ʁə.ɡʁɛt kə ty nɛ pa.za.ple ply to/', 'zhuh ruh-GRET | kuh tü neh pa-za-PLAY | plü TOH', ['subjonctif', 'deux-sujets', 'negation']),
  sent(1368, "Elle est fière d'avoir terminé le marathon.", 'She is proud she finished the marathon.',
    '/ɛ.lɛ fjɛʁ da.vwaʁ tɛʁ.mi.ne lə ma.ʁa.tɔ̃/', 'eh-leh FYEHR | da-vwar tehr-mee-NAY | luh ma-ra-TOHⁿ', ['infinitif', 'meme-sujet']),
  sent(1369, 'Elle est fière que son fils ait terminé le marathon.', 'She is proud her son finished the marathon.',
    '/ɛ.lɛ fjɛʁ kə sɔ̃ fis ɛ tɛʁ.mi.ne lə ma.ʁa.tɔ̃/', 'eh-leh FYEHR | kuh sohⁿ FEESS | eh tehr-mee-NAY luh ma-ra-TOHⁿ', ['subjonctif', 'deux-sujets']),
  sent(1370, 'Nous sommes désolés de vous avoir fait attendre.', 'We are sorry to have kept you waiting.',
    '/nu sɔm de.zɔ.le də vu.za.vwaʁ fɛ a.tɑ̃dʁ/', 'noo som day-zo-LAY | duh voo-za-vwar feh a-TAHⁿDR', ['infinitif', 'pronom']),
  sent(1371, "Merci d'être venus si nombreux.", 'Thank you for coming in such numbers.',
    '/mɛʁ.si dɛtʁ və.ny si nɔ̃.bʁø/', 'mehr-SEE | detr vuh-NÜ | see nohⁿ-BRUH', ['infinitif', 'etre']),
  sent(1372, "Je suis soulagée d'avoir enfin trouvé un appartement.", 'I am relieved to have found a flat at last.',
    '/ʒə sɥi su.la.ʒe da.vwaʁ ɑ̃.fɛ̃ tʁu.ve œ̃.na.paʁ.tə.mɑ̃/', 'zhuh swee soo-la-ZHAY | da-vwar ahⁿ-fehⁿ troo-VAY | uhⁿ-na-par-tuh-MAHⁿ', ['infinitif']),
  sent(1373, "Il est furieux de s'être trompé de train.", 'He is furious that he took the wrong train.',
    '/i.lɛ fy.ʁjø də sɛtʁ tʁɔ̃.pe də tʁɛ̃/', 'ee-leh fü-RYUH | duh setr trohⁿ-PAY | duh TREHⁿ', ['infinitif', 'pronominal']),
  sent(1374, "Je suis ravi de t'avoir revue.", 'I am delighted to have seen you again.',
    '/ʒə sɥi ʁa.vi də ta.vwaʁ ʁə.vy/', 'zhuh swee ra-VEE | duh ta-vwar ruh-VÜ', ['infinitif', 'pronom', 'accord']),
  rule(1375, 'Un seul sujet : de, puis avoir ou être et le participe.', 'One subject: de, then avoir or être and the participle.',
    '/œ̃ sœl sy.ʒɛ də pɥi a.vwaʁ u ɛtʁ e lə paʁ.ti.sip/', 'uhⁿ suhl sü-ZHEH | DUH | pwee a-VWAR oo EHTR | ay luh par-tee-SEEP',
    'Je suis content que je sois venu ?',
    "Non : un seul sujet, donc l'infinitif passé, je suis content d'être venu.",
    ['infinitif']),
  gap(1376, 'Je regrette de ne pas être allé à son mariage.', 'I am sorry I did not go to her wedding.',
    '/ʒə ʁə.ɡʁɛt də nə pa.zɛ.tʁa.le a sɔ̃ ma.ʁjaʒ/', 'zhuh ruh-GRET | duh nuh pa-zeh-tra-LAY | a sohⁿ ma-RYAZH',
    'Je regrette de ___ à son mariage. (ne pas aller · un seul sujet)',
    'Ne pas se place avant être : de ne pas être allé. EN: ne pas goes before être.',
    ['infinitif', 'negation']),
  gap(1377, "Nous sommes contents d'avoir choisi cet hôtel.", 'We are glad we chose this hotel.',
    '/nu sɔm kɔ̃.tɑ̃ da.vwaʁ ʃwa.zi sɛ.to.tɛl/', 'noo som kohⁿ-TAHⁿ | da-vwar shwa-ZEE | seh-toh-TEL',
    'Nous sommes contents ___ cet hôtel. (choisir · nous, et encore nous)',
    "Même sujet : d'avoir choisi. EN: same subject, past infinitive.",
    ['infinitif'], FCVDR),
  sent(1378, "Je m'en veux de ne pas t'avoir écouté.", 'I blame myself for not listening to you.',
    '/ʒə mɑ̃ vø də nə pa ta.vwaʁ e.ku.te/', 'zhuh mahⁿ VUH | duh nuh pa ta-vwar ay-koo-TAY', ['infinitif', 'negation']),
  sent(1379, "Il est normal d'avoir eu peur.", 'It is normal to have been scared.',
    '/i.lɛ nɔʁ.mal da.vwaʁ y pœʁ/', 'ee-leh nor-MAL | da-vwar ü PUHR', ['infinitif']),
  sent(1380, "Je suis heureuse d'avoir pu t'aider.", 'I am happy I was able to help you.',
    '/ʒə sɥi ø.ʁøz da.vwaʁ py tɛ.de/', 'zhuh swee uh-RUHZ | da-vwar PÜ | teh-DAY', ['infinitif']),
];

/* ── ACT 11 · RÉAGIR APRÈS COUP (.1383-.1390) ─────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1383, 'Je suis tellement contente que tu aies décroché ce poste à Lyon.', 'I am so glad you landed that job in Lyon.',
    '/ʒə sɥi tɛl.mɑ̃ kɔ̃.tɑ̃t kə ty ɛ de.kʁɔ.ʃe sə pɔst a ljɔ̃/', 'zhuh swee tel-mahⁿ kohⁿ-TAHⁿT | kuh tü eh day-kro-SHAY | suh POST a LYOHⁿ', ['tache'], FCVDR),
  sent(1384, "Je suis un peu triste que tu ne m'en aies pas parlé avant.", 'I am a little sad you did not tell me about it before.',
    '/ʒə sɥi.zœ̃ pø tʁist kə ty nə mɑ̃.nɛ pa paʁ.le a.vɑ̃/', 'zhuh swee-zuhⁿ puh TREEST | kuh tü nuh mahⁿ-neh pa par-LAY | a-VAHⁿ', ['tache', 'negation']),
  sent(1385, "C'est la meilleure nouvelle qu'on m'ait annoncée cette année.", 'It is the best news anyone has given me this year.',
    '/sɛ la mɛ.jœʁ nu.vɛl kɔ̃ mɛ.ta.nɔ̃.se sɛ.ta.ne/', 'seh la meh-yuhr noo-VEL | kohⁿ meh-ta-nohⁿ-SAY | seh-ta-NAY', ['tache', 'superlatif']),
  sent(1386, 'Je regrette de ne pas avoir été là pour ta fête de départ.', 'I am sorry I was not there for your leaving party.',
    '/ʒə ʁə.ɡʁɛt də nə pa.za.vwaʁ e.te la puʁ ta fɛt də de.paʁ/', 'zhuh ruh-GRET | duh nuh pa-za-vwar ay-tay LA | poor ta fet duh day-PAR', ['tache', 'infinitif']),
  sent(1387, "Ça m'étonne que tout se soit décidé si vite.", 'I am surprised it was all decided so quickly.',
    '/sa me.tɔn kə tu sə swa de.si.de si vit/', 'sa may-TONN | kuh too suh swa day-see-DAY | see VEET', ['tache', 'pronominal']),
  sent(1388, "Il faut que tu m'aies envoyé ta nouvelle adresse avant Noël.", 'You must have sent me your new address by Christmas.',
    '/il fo kə ty mɛ.zɑ̃.vwa.je ta nu.vɛ.la.dʁɛs a.vɑ̃ nɔ.ɛl/', 'eel FOH | kuh tü meh-zahⁿ-vwa-YAY | ta noo-veh-la-DRESS | a-vahⁿ no-EL', ['tache', 'echeance'], FCVDR),
  sent(1389, 'Je suis ravie que ta sœur ait enfin trouvé du travail.', 'I am delighted your sister has finally found work.',
    '/ʒə sɥi ʁa.vi kə ta sœʁ ɛ.tɑ̃.fɛ̃ tʁu.ve dy tʁa.vaj/', 'zhuh swee ra-VEE | kuh ta SUHR | eh-tahⁿ-fehⁿ troo-VAY dü tra-VAHY', ['tache']),
  sent(1390, 'Bien que tu sois parti loin, on reste proches.', 'Although you have moved far away, we are still close.',
    '/bjɛ̃ kə ty swa paʁ.ti lwɛ̃ ɔ̃ ʁɛst pʁɔʃ/', 'byehⁿ kuh tü swa par-tee LWEHⁿ | ohⁿ rest PROSH', ['tache', 'concession']),
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
 *  §I. THE TEXTS
 *
 *  The long readings (B2: about 200 to 260 words) and the eight short « dans
 *  un texte » paragraphs (60 to 120 words) that close acts 3 to 10. They live
 *  here so the reading, the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Inès writes to her friends the day after her housewarming, Montréal. */
export const LECTURE_FETE =
  "Salut tout le monde, je vous écris le lendemain de la fête, encore un peu fatiguée. D'abord, je suis ravie que vous ayez pu venir si nombreux : nous étions presque quarante dans un appartement prévu pour dix. Malik, ça me touche que tu aies fait toute cette route depuis Québec, sous la pluie en plus. C'est dommage qu'il ait plu toute la soirée, mais le balcon a quand même servi, sous les parapluies. Je regrette seulement que Samir soit parti avant le gâteau : il ne sait pas ce qu'il a manqué. Je suis aussi un peu gênée, je l'avoue. Je suis désolée que la musique ait réveillé les voisins du dessous. Je suis descendue ce matin avec des croissants, et ils ont ri : ils avaient eu vingt ans, eux aussi. Bref, tout s'est bien terminé. Il me reste une chose à organiser : le déménagement de ma sœur, le mois prochain. Je suis contente que plusieurs d'entre vous viennent l'aider, et ce serait parfait que quelqu'un ait une camionnette. Encore merci d'être venus. Vous avez fait de ce nouvel appartement un vrai chez-moi, et je ne l'oublierai pas. Inès";

/** Act 5: a reader's letter to an advice column, and the reply. */
export const LECTURE_COURRIER =
  "Chère Hélène, j'ai quarante ans et, jusqu'au mois dernier, j'avais une meilleure amie, Claire. Nous nous connaissions depuis le lycée. En mars, j'ai appris par une collègue qu'elle avait déménagé à Bruxelles. Je suis blessée qu'elle ne m'ait rien dit, bien sûr. Mais ce qui me fait le plus mal, c'est autre chose : je suis déçue de ne pas l'avoir remarqué. Elle m'avait parlé d'un nouveau travail, et je n'avais pas posé de questions. Aujourd'hui, j'ai honte qu'on se soit éloignées sans que je m'en rende compte. Faut-il que je lui écrive ? Sophie, Lyon. La réponse d'Hélène. Chère Sophie, il est normal que vous vous soyez sentie trahie : on n'apprend pas le départ d'une amie par une collègue. Pourtant, je suis frappée que vous parliez surtout de vous. Il est possible que Claire n'ait pas osé vous l'annoncer, ou qu'elle ait craint votre réaction. Il se peut aussi qu'elle ait attendu d'être sûre de rester. Écrivez-lui. Dites-lui que vous êtes triste qu'elle soit partie sans un mot, mais que vous êtes heureuse qu'elle ait trouvé ce poste. Les deux sont vrais, et une amitié de vingt-cinq ans mérite les deux phrases. Hélène";

/** Act 7: a letting agency writes to an outgoing tenant, Lausanne. */
export const LECTURE_REGIE =
  "Madame, Monsieur, vous nous avez informés de votre départ de l'appartement du chemin des Roses, à Lausanne. Voici les étapes à respecter. Il faut que vous ayez libéré l'appartement avant le trente juin à midi. L'état des lieux aura lieu le même jour à quatorze heures ; il est donc indispensable que les clés aient été rendues à l'agence avant cette heure-là. Nous souhaitons également que les petites réparations (trous dans les murs, joints de la salle de bains) aient été faites avant l'état des lieux. Si ce n'est pas le cas, elles vous seront facturées. Enfin, il est important que vous ayez résilié vos contrats d'électricité et d'internet d'ici la fin du mois, afin que le prochain locataire puisse s'installer dès le premier juillet. Attendez que l'état des lieux ait été signé par les deux parties avant de quitter la ville : aucune réclamation ne sera acceptée ensuite. Nous restons à votre disposition jusqu'à ce que tout soit réglé. Veuillez agréer, Madame, Monsieur, l'expression de nos salutations distinguées. La Régie du Lac";

/** Act 9: a regional news item, Namur. */
export const LECTURE_FESTIVAL =
  "Namur, lundi. Bien qu'il ait plu toute la journée de samedi, le festival Citadelle en musique a attiré dix mille personnes. Les organisateurs avaient craint le pire : vendredi soir, la météo annonçait des orages, et deux groupes avaient déjà annulé leur venue. Quoique la route d'accès ait été fermée pendant deux heures à cause d'un arbre tombé, les navettes ont fini par passer. « Bien que le spectacle ait commencé avec quarante minutes de retard, personne n'est parti », souligne la directrice, visiblement émue. Tout n'a pas été parfait. Même si les bénévoles ont distribué des ponchos à l'entrée, beaucoup de spectateurs sont rentrés trempés, et certains regrettent que les toilettes aient été si peu nombreuses. Le bilan reste pourtant positif : bien que les recettes aient baissé de dix pour cent, le festival ne perd pas d'argent cette année. Les organisateurs sont déjà au travail pour l'édition suivante. « Nous sommes fiers que le public nous soit resté fidèle, même sous la pluie », conclut la directrice.";

/** Act 11: the model message, Maëlle reacts to her cousin's news. */
export const LECTURE_MODELE =
  "Mon cher Hugo, j'ai lu ton message trois fois avant d'y croire. Tu t'es marié ! À Montréal, un mardi, avec deux témoins et un gâteau acheté le matin même. Je suis tellement heureuse que tu aies enfin trouvé quelqu'un qui te ressemble, et je suis ravie que Clara ait dit oui sans hésiter, comme tu me le racontes. Je t'avoue que je suis un peu vexée que tu ne m'aies rien dit avant. Nous nous sommes parlé la semaine dernière, et tu n'as fait aucune allusion ! Mais je comprends que vous ayez voulu rester discrets : c'est votre histoire. Ce qui me fait le plus plaisir, c'est la photo. C'est la plus belle photo de mariage que j'aie vue, avec la neige et vos deux manteaux rouges. Je regrette seulement de ne pas avoir été là pour vous applaudir. Bien que la fête soit déjà passée, j'ai une proposition : il faut que vous ayez choisi une date avant la fin du mois, et je viendrai vous voir cet été. Maman, elle, est surprise que vous vous soyez décidés si vite, mais elle sourit depuis ce matin. Je t'embrasse fort, et embrasse Clara pour moi. Maëlle";

/** The eight « dans un texte » paragraphs (acts 3 to 10). */
export const TEXTE_A3 =
  "Chère tante Aïcha, je t'écris de Liège pour te remercier. Je suis tellement heureuse que tu (venir) au baptême de Nora, et je suis touchée que mes cousines (faire) le voyage depuis Marseille. Les photos, je suis ravie que tu les (garder) : elles sont magnifiques. Maman est soulagée que vous (se revoir) après tant d'années, et elle est surprise que vous (se reconnaître) tout de suite. Je regrette seulement que la tempête (retarder) ton train. Grosses bises, Chloé.";

export const TEXTE_A4 =
  "Hier, c'était l'anniversaire de ma grand-mère. J'étais content que toute la famille (être) là, et surtout que mon oncle (venir) de Dakar : il n'était pas rentré depuis cinq ans. Ma grand-mère avait peur qu'il (ne pas pouvoir) venir, à cause des grèves. Aujourd'hui, je suis triste que mon cousin (repartir) déjà ce matin, mais je suis heureux que mon oncle (rester) encore une semaine avec nous. Et je doute que ma grand-mère (dormir) beaucoup cette nuit : ils ont parlé jusqu'à trois heures.";

export const TEXTE_A5 =
  "Chère Nadia, je viens d'apprendre ton départ. Je suis surprise que tu ne m'en (parler) pas plus tôt, mais je suis surtout triste que nous (ne pas pouvoir) nous dire au revoir. Je sais que tu (hésiter) longtemps ; je suis fière que tu (oser) partir. Ça me fait de la peine que l'équipe (perdre) sa meilleure analyste, mais je suis contente que tu (trouver) un poste qui te ressemble. Écris-moi vite. Julie";

export const TEXTE_A6 =
  "Au bureau de Genève, personne ne sait où est Marc. Paul pense qu'il (oublier) la réunion : il (oublier) celle de mardi aussi. Anna n'est pas sûre qu'il (recevoir) le nouvel horaire, puisqu'on l'a changé hier soir. La directrice, elle, doute qu'il (rentrer) déjà de Berlin. Il est probable que son avion (atterrir) ce matin, mais il se peut qu'il (avoir) un problème de correspondance. À dix heures, Marc entre en souriant : il croyait que la réunion (commencer) à dix heures et demie.";

export const TEXTE_A7 =
  "Message de Camille à ses colocataires, avant la visite de la propriétaire. Il faut que nous (ranger) le salon avant samedi midi, et il est important que quelqu'un (réparer) la poignée de la salle de bains d'ici là. Je veux que chacun (vider) son étagère du frigo avant que la propriétaire (arriver). Théo, attends que j'(finir) mon appel de samedi matin avant de passer l'aspirateur, s'il te plaît. Et ne partez pas avant que nous (faire) le tour de l'appartement ensemble.";

export const TEXTE_A8 =
  "Mon séjour à Québec, en février. C'est la première fois que je (venir) au Canada, et c'est sans doute le voyage le plus froid que je (faire). Le Carnaval est la fête la plus joyeuse que j'(voir) de ma vie. Mon hôte, Luc, est la seule personne qui (réussir) à me faire manger de la poutine à huit heures du matin. C'est aussi le premier ami québécois que je me (faire). Le dernier jour, j'ai pris le traversier pour Lévis : c'est le moment que je (préférer).";

export const TEXTE_A9 =
  "Le mot du capitaine, après la saison. Bien que notre équipe (perdre) la finale dimanche, la saison reste la meilleure de notre histoire. Quoique nous (s'entraîner) sous la neige tout l'hiver, personne n'a abandonné. Même si l'arbitre (faire) des erreurs, nous ne lui en voulons pas. Bien que le club (vendre) moins de billets cette année, les tribunes étaient pleines dimanche. Et bien que je (ne jamais marquer) de but, je suis fier de cette équipe.";

export const TEXTE_A10 =
  "Merci à tous. Samedi, pour mes cinquante ans, vous m'avez fait la surprise. Je suis heureux que vous (venir) si nombreux, et je suis heureux (enfin voir) tous mes amis réunis. Je regrette (ne pas prévenir) mon voisin, qui a appelé la police à minuit. Ma fille est fière (tout organiser) en secret, et moi, je suis fier qu'elle (réussir) à me cacher tout ça pendant deux mois. Je m'en veux seulement (s'endormir) avant le dessert. Vincent";

/** The act 11 exam round's listening: a voicemail (TEF format). */
export const MESSAGE_VOCAL =
  "Bonjour Hélène, c'est Martine, de l'association. Je suis ravie que la mairie ait enfin accepté de nous prêter la salle pour le vingt : la réservation est faite. En revanche, il faut que les invitations soient parties avant vendredi, et je doute que Paul ait déjà choisi le menu. Rappelle-moi quand tu peux.";
