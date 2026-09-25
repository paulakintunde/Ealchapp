// b1.20.l1 « La négation avancée » — the authored corpus, the imports and the
// citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
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
//   EVERY NEGATIVE THAT IS NOT « ne ... pas ». a1.18 owns ne ... pas, the
//   elision, the collapse to de, the être exception, ne-drop for RECEPTION
//   and « moi non plus ». Measured 2026-09-25 in `../negation-corpus.ts`: its
//   `OTHER_NEGATORS` guard lists « ne ... jamais », « ne ... plus », « ne ...
//   rien », « ne ... personne », « ne ... que » and « ni » as EXCLUDED from its
//   canDo, and no A1 or A2 lesson in the seed names any of them in
//   `grammarIntroduced`. So this lesson owns, act by act:
//
//     1  the gap and the word that shapes it (pas quelqu'un is not personne)
//     2  plus, jamais, rien, personne in place of pas, present tense
//     3  ne ... que as restriction, and seulement
//     4  aucun(e), ni ... ni, nulle part, and ne ... guère for recognition
//     5  personne, rien, aucun, ni ... ni as the SUBJECT (Personne n'est venu)
//     6  placement in compound tenses (je n'ai rien vu, je n'ai vu personne)
//     7  negating an infinitive (ne pas faire, ne plus rien dire, sans + inf.)
//     8  combined negations (plus jamais rien, jamais personne, plus que)
//     9  answering: si, lui non plus, pas du tout, jamais de la vie, pas encore
//    10  the dropped ne, as REGISTER: spoken yes, written never
//    11  a written complaint that says exactly what was missing
//
//   NOT OWNED: ne ... pas itself, the elision of ne and the collapse to de
//   (a1.18, sons.07, a1.11, a1.29), all cited and never re-taught; ne ... pas
//   around the auxiliary (a2.05) and around aller or a modal (a2.19, a2.13),
//   quoted; pronoun order inside a negative (b1.17), quoted; the passive
//   (b1.18). The subjunctive (b1.14 to b1.16) is kept out of every authored
//   French string: « sans que » is named once, on a sheet, as recognition.
//
//   NO UNGRAMMATICAL SENTENCE IS EVER A ROW. Every wrong form lives in a
//   `commonErrors.wrong`, a `trapDrill.promptSound`, a scene `break.wrong` or
//   a quiz `errorSpot.prompt`. The act 10 rows without ne (« Je sais pas »)
//   are NOT errors: they are the ordinary spoken register, tagged `oral`,
//   and none of them carries a `dictation` drill, so the learner is never
//   asked to WRITE one.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `negation-et-restriction` exists (« La négation et la
//     restriction », domain fondations, levelRange a1-b2), so nothing is
//     created at import.
//  2. POSTGRES PROBED 2026-09-25 by the wave orchestrator: 631 rows, 281 of
//     them `fr.b1.*`, the highest number in the theme .283. AUTHORED IDS
//     THEREFORE START AT 1000.
//  3. ID BLOCK: b1.20 owns `fr.b1.negation-et-restriction.1000`-`.1199` AND
//     NOTHING ELSE. Used here: `.1000`-`.1199`, all 200, in eleven act
//     blocks. Compare
//     full ids, never numbers: the level is part of the id.
//  4. THE SEED CARRIES 45 ROWS OF THIS THEME (33 a1, 12 a2) AND NO b1 ROW.
//     Every one of the 45 is ne ... pas. So the 281 published `fr.b1` rows
//     are DB-ONLY and cannot be named here (`src()` resolves against the
//     seed). They are almost certainly on topic, so this corpus WILL hold
//     twins. Known ones, from a1.18's own probe (`../negation-corpus.ts`
//     §5): the phrases « jamais de la vie » (.012) and « pas encore prêt »
//     (.016), and rows on jamais, plus, rien, personne, ne ... que and ni ...
//     ni. See DB_ONLY_TWINS below. Dedupe at import (build log open item).
//  5. The on-topic rows the SEED does carry, outside this theme, were probed
//     over all 11,209 seed items on 2026-09-25 and the useful ones are in §F.
//     Every one was read out of seed.json and its `fr` is copied verbatim
//     wherever a section prints it, through `src()`.
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN FOR THE EAR:
//       aucune / une   oh-KÜNN, ÜNN   (a real /n/ after a single n)
//     Everything else is spelled for the ear. `personne`, `téléphone`,
//     `étonne` carry a double n in the source and are respelled SONN, FONN,
//     TONN, which the checker clears on its own. Nasal vowels always close
//     with the superscript: ahⁿ, ohⁿ, uhⁿ, ehⁿ. No U+203F tie anywhere, in a
//     respelling or in an IPA field.
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
  id: 'b1.20',
  seq: 20,
  title: 'Advanced Negation',
  sub: 'La négation avancée',
  canDo: 'Can say exactly what is missing with plus, jamais, rien, personne, aucun, ni ... ni, nulle part and ne ... que, place them correctly in compound tenses, before an infinitive and as the subject, combine them, answer a negative question with si, and write a complaint that keeps every ne',
  prereqUnitIds: ['a1.18', 'a2.05'],
} as const;

export const LESSON_ID = 'b1.20.l1';
export const THEME = 'negation-et-restriction';
export const LEVEL = 'b1' as const;

/** ONE block. DB holds .001-.283 in this theme; b1.20 owns 1000-1199. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A1 and A2 citations use the house English trail label (« lesson 21 in
 *  A1 »), resolved through `unitRef` from the shipped `unit.seq`, never typed
 *  and never the raw id. b1.* units are not in the seed yet, so they are
 *  labelled in French from the plan until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const NEGATION_UNIT = 'a1.18';
export const ELISION_UNIT = 'sons.07';
export const ARTICLES_UNIT = 'a1.11';
export const PC_AVOIR_UNIT = 'a2.05';
export const PC_ETRE_UNIT = 'a2.21';
export const FUTUR_PROCHE_UNIT = 'a2.19';
export const MODAUX_UNIT = 'a2.13';
export const PC_IMPARFAIT_UNIT = 'b1.03';
export const FUTUR_UNIT = 'b1.05';
export const ORDRE_PRONOMS_UNIT = 'b1.17';
export const PASSIF_UNIT = 'b1.18';
export const SUBJ_DECL_UNIT = 'b1.15';
export const INVERSION_UNIT = 'b1.21';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
  'b1.19': 19, 'b1.20': 20, 'b1.21': 21,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const NEGATION_REF = unitRef(NEGATION_UNIT);
export const ELISION_REF = unitRef(ELISION_UNIT);
export const PC_AVOIR_REF = unitRef(PC_AVOIR_UNIT);
export const FUTUR_PROCHE_REF = unitRef(FUTUR_PROCHE_UNIT);
export const MODAUX_REF = unitRef(MODAUX_UNIT);
export const ORDRE_PRONOMS_REF = refFr(ORDRE_PRONOMS_UNIT);
export const PASSIF_REF = refFr(PASSIF_UNIT);
export const SUBJ_DECL_REF = refFr(SUBJ_DECL_UNIT);
export const INVERSION_REF = refFr(INVERSION_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  The A1 and A2 lines are English (A1 and A2 are taught in English) and
 *  every screen that shows one follows it with the French rendering below.
 *  b1.17's line is already French and is quoted as it stands.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as A118_REFRAME } from '../negation-terms.ts';
export { REFRAME as A205_REFRAME } from '../passe-compose-corpus.ts';
export { REFRAME as A219_REFRAME } from '../futur-proche-corpus.ts';
export { REFRAME as B117_REFRAME } from './ordre-pronoms-corpus.ts';

export const A118_REFRAME_FR = "Entoure le verbe, puis demande-toi quel verbe c'était.";
/** b1.03's rendering, kept byte-identical so two lessons do not gloss one
 *  A2 line two different ways. */
export const A205_REFRAME_FR = 'Un verbe, deux mots, et les petits mots vont au milieu.';
export const A219_REFRAME_FR = 'Entoure le verbe qui change, pas celui qui porte le sens.';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE EMPTY SPACE. A negative sentence draws a gap where something should
 *  be. « ne » says there is a gap; the second word says what shape it is:
 *  pas (plain), plus (it was there and stopped), jamais (no time), rien (no
 *  thing), personne (no person), aucun (not one), nulle part (no place), ni
 *  ... ni (neither of two), que (everything EXCEPT one thing). That last is
 *  the reason the reframe says « forme » and not « ce qui manque »: ne ...
 *  que draws a gap AROUND something, and the reframe still holds.
 *
 *  And in speech, when ne falls away (act 10), the second word carries the
 *  gap on its own, which is exactly what the reframe predicts.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Ne ouvre un vide. Le deuxième mot lui donne sa forme.';
export const REFRAME_EN = 'Ne opens a gap. The second word gives it its shape.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le deuxième mot dit ce qui manque.',
    why: "False for ne ... que, which act 3 is built on: « Je n'ai que dix dollars » says what is THERE. A reframe that act 3 has to apologise for is not a reframe. « sa forme » survives it: a gap around ten dollars.",
  },
  {
    text: 'Deux mots autour du verbe.',
    why: "a1.18's picture, already quoted as its reframe (« Wrap the verb »). It breaks three times here: personne sits after the participle (act 6), ne pas sits together before an infinitive (act 7), and personne or rien can open the sentence (act 5).",
  },
  {
    text: 'Une seule négation par phrase.',
    why: "False where act 8 has to hold: « Je ne dirai plus jamais rien » is one ne and three second words, and it is ordinary French. It is only true of pas, which never combines.",
  },
  {
    text: 'Remplace pas par le bon mot.',
    why: "A procedure that works in acts 2 and 3 and fails in act 5 (« Personne n'est venu » has no pas to replace) and act 7 (« ne pas fumer » keeps pas). It also teaches nothing about why the word matters.",
  },
  {
    text: 'En français, deux négations ne s’annulent pas.',
    why: "True, and the best hack for act 8 (it is kept as one). As a reframe it is about what does NOT happen, and it says nothing to a learner choosing between rien and personne, which is most of the lesson.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-25 and its French is in the
 *  trailing comment, so a reader never has to open seed.json. `named only`
 *  rows carry no `flashcard` drill, so no deckTranche can release them: they
 *  are reachable by being named in a section or a drill. `NOT_SPEAKABLE`
 *  additionally lists the rows with no `voiceflash`, which a `practice` speak
 *  section may never name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a1.negation-et-restriction.068', // Je n'ai pas de chien.
    'fr.a1.negation-et-restriction.046', // Il n'est pas là.
  ],
  act2: [
    'fr.a2.au-restaurant.169',        // Nous n'avons plus de saumon ce soir.
    'fr.a2.hebergement.118',          // Je ne peux rien faire ce soir, monsieur.
    'fr.a1.jours-et-mois.178',        // Le facteur ne passe jamais le dimanche.  (named only)
  ],
  act3: [
    'fr.a2.argent-quotidien.081',     // Je n'ai que des billets.
    'fr.a2.courses.196',              // Je regarde seulement, merci.
  ],
  act4: [] as string[],               // §A.4: the seed carries no aucun, ni ... ni or nulle part row at a1-b1.
  act5: [
    'fr.a2.hebergement.088',          // J'ai appelé la réception hier soir, et personne n'est venu.
    'fr.a2.heure-et-date.147',        // Prends ton temps, rien ne presse.
  ],
  act6: [
    'fr.a2.negation-et-restriction.113', // Elle n'a pas répondu à mon message.
    'fr.a2.marche.119',               // J'ai goûté le fromage, mais je n'ai rien acheté.
    'fr.a2.deplacements.012',         // Nous avons attendu longtemps, mais le train n'est jamais arrivé.  (named only)
  ],
  act7: [
    'fr.a2.verbes.690',               // Il est entré sans frapper.
    'fr.a2.heure-et-date.132',        // Il faut se dépêcher pour ne pas rater le train.
    'fr.b1.maison.008',               // Ils ont signé le bail sans lire toutes les clauses du contrat.  (named only)
  ],
  act8: [
    'fr.a1.objets.196',               // Cette gomme n'efface plus rien du tout.
  ],
  act9: [
    'fr.a1.questions.373',            // Si, je suis prêt.
    'fr.a2.hebergement.089',          // La climatisation ne marche pas non plus.
    'fr.a1.expressions-utiles.095',   // Je n'aime pas le café. Moi non plus.  (named only)
  ],
  act10: [
    'fr.a1.negation-et-restriction.069', // J'ai pas de chien.
  ],
  act11: [
    'fr.a2.prepositions-essentielles.150', // Non, rien de grave.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a1.jours-et-mois.178',          // dictation
  'fr.a2.deplacements.012',           // dictation
  'fr.b1.maison.008',                 // sentence, dictation
  'fr.a1.expressions-utiles.095',     // dictation
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a2.heure-et-date.147',          // flashcard, sentence, roleplay
  'fr.a2.marche.119',                 // sentence, flashcard, review
  'fr.a2.heure-et-date.132',          // flashcard, sentence
  'fr.a1.objets.196',                 // sentence, flashcard, review
  'fr.a1.negation-et-restriction.069', // flashcard, review (and ne-less: never spoken as a model)
];

/** Published rows this corpus is known to twin, from a1.18's Postgres probe.
 *  Not nameable today (DB-only). Decide at import: dedupe or keep both. */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [
  { dbId: 'fr.a1.negation-et-restriction.012', fr: 'jamais de la vie', twin: E(1154) },
  { dbId: 'fr.a1.negation-et-restriction.032', fr: 'ne ... que (one of three a1 rows)', twin: E(1035) },
  { dbId: 'fr.a1.negation-et-restriction.036', fr: 'ni ... ni (one a1 row)', twin: E(1059) },
  { dbId: 'fr.a1.negation-et-restriction.015', fr: 'pas du tout', twin: E(1153) },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie. See §A.6 for the respellings spelled for the checker.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['negation-avancee'], ...extra,
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

/* ── ACT 1 · LE LOGEMENT VIDE ───────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, "Je n'ai vu personne devant l'immeuble.", "I didn't see anyone in front of the building.", '/ʒə ne vy pɛʁ.sɔn də.vɑ̃ li.mœbl/', 'zhuh nay vü pehr-SONN duh-vahⁿ lee-MUHBL', ['scene', 'personne', 'compose'], FCVDR),
  sent(1001, "Il n'y a rien dans le frigo.", 'There is nothing in the fridge.', '/il nja ʁjɛ̃ dɑ̃ lə fʁi.ɡo/', 'eel nya RYEHⁿ dahⁿ luh free-GOH', ['scene', 'rien'], FCVDR),
  sent(1002, "Il n'y a plus d'eau chaude.", 'There is no hot water any more.', '/il nja ply do ʃod/', 'eel nya plü doh SHOHD', ['scene', 'plus']),
  sent(1003, 'Le wifi ne marche jamais.', 'The wifi never works.', '/lə wi.fi nə maʁʃ ʒa.mɛ/', 'luh wee-FEE nuh marsh zha-MEH', ['scene', 'jamais'], FCVDR),
  sent(1004, "Il n'y a aucune serviette.", 'There is not a single towel.', '/il nja o.kyn sɛʁ.vjɛt/', 'eel nya oh-künn sehr-VYEHT', ['scene', 'aucun']),
  sent(1005, "Il n'y a ni savon ni shampoing.", 'There is neither soap nor shampoo.', '/il nja ni sa.vɔ̃ ni ʃɑ̃.pwɛ̃/', 'eel nya nee sa-VOHⁿ nee shahⁿ-PWEHⁿ', ['scene', 'ni']),
  sent(1006, 'Le chauffage ne marche que le soir.', 'The heating only works in the evening.', '/lə ʃo.faʒ nə maʁʃ kə lə swaʁ/', 'luh sho-FAZH nuh marsh kuh luh SWAR', ['scene', 'que']),
  sent(1007, REFRAME, REFRAME_EN, '/nə uvʁ œ̃ vid lə dø.zjɛm mo lɥi dɔn sa fɔʁm/', 'nuh OOVR uhⁿ VEED | luh deu-ZYEM moh lwee donn sa FORM', ['rule', 'reframe'], ['flashcard'],
    rule("« Je n'ai vu personne » : qu'est-ce que ne dit, et qu'est-ce que personne dit ?", "ne dit qu'il y a un vide. personne dit sa forme : une personne manque. Avec rien, c'est une chose ; avec jamais, un moment.")),
  sent(1008, "Personne n'est venu avec les clés.", 'Nobody came with the keys.', '/pɛʁ.sɔn nɛ və.ny a.vɛk le kle/', 'pehr-SONN neh vuh-NÜ a-vehk lay KLAY', ['scene', 'sujet'], FCVDR),
  sent(1009, 'Rien ne fonctionne dans cet appartement.', 'Nothing works in this flat.', '/ʁjɛ̃ nə fɔ̃k.sjɔn dɑ̃ sɛ.ta.paʁ.tə.mɑ̃/', 'ryehⁿ nuh fohⁿk-SYONN dahⁿ seh-ta-par-tuh-MAHⁿ', ['scene', 'sujet']),
  sent(1010, "On n'a pas encore reçu de réponse.", 'We still have not had an answer.', '/ɔ̃ na pa.zɑ̃.kɔʁ ʁə.sy də ʁe.pɔ̃s/', 'ohⁿ na pa-zahⁿ-KOR ruh-sü duh ray-POHⁿS', ['scene', 'pas-encore']),
  sent(1011, "L'annonce ne disait rien sur le bruit.", 'The listing said nothing about the noise.', '/la.nɔ̃s nə di.zɛ ʁjɛ̃ syʁ lə bʁɥi/', 'la-NOHⁿS nuh dee-zeh RYEHⁿ sür luh BRWEE', ['annonce', 'rien']),
  sent(1012, "Je n'ai jamais dit ça.", 'I never said that.', '/ʒə ne ʒa.mɛ di sa/', 'zhuh nay zha-meh dee SA', ['scene', 'jamais', 'compose']),
  sent(1013, "Il ne reste qu'une clé.", 'There is only one key left.', '/il nə ʁɛst kyn kle/', 'eel nuh rehst künn KLAY', ['scene', 'que']),
  sent(1014, 'Le propriétaire ne répond plus.', 'The owner does not answer any more.', '/lə pʁɔ.pʁi.je.tɛʁ nə ʁe.pɔ̃ ply/', 'luh pro-pree-yay-TEHR nuh ray-pohⁿ PLÜ', ['scene', 'plus'], FCVDR),
];

/* ── ACT 2 · PLUS, JAMAIS, RIEN, PERSONNE ───────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1015, 'Je ne fume plus.', 'I do not smoke any more.', '/ʒə nə fym ply/', 'zhuh nuh füm PLÜ', ['plus'], FCVDR),
  sent(1016, 'Elle ne boit jamais de café.', 'She never drinks coffee.', '/ɛl nə bwa ʒa.mɛ də ka.fe/', 'ehl nuh bwa zha-MEH duh ka-FAY', ['jamais', 'de'], FCVDR),
  sent(1017, 'Je ne comprends rien.', 'I do not understand anything.', '/ʒə nə kɔ̃.pʁɑ̃ ʁjɛ̃/', 'zhuh nuh kohⁿ-prahⁿ RYEHⁿ', ['rien'], FCVDR),
  sent(1018, 'Je ne connais personne ici.', 'I do not know anyone here.', '/ʒə nə kɔ.nɛ pɛʁ.sɔn i.si/', 'zhuh nuh ko-neh pehr-SONN ee-SEE', ['personne'], FCVDR),
  sent(1019, "Nous n'habitons plus à Montréal.", 'We do not live in Montréal any more.', '/nu na.bi.tɔ̃ ply a mɔ̃.ʁe.al/', 'noo na-bee-TOHⁿ plü a mohⁿ-ray-AL', ['plus', 'quebec']),
  sent(1020, 'Il ne mange jamais le matin.', 'He never eats in the morning.', '/il nə mɑ̃ʒ ʒa.mɛ lə ma.tɛ̃/', 'eel nuh mahⁿzh zha-meh luh ma-TEHⁿ', ['jamais']),
  sent(1021, 'Tu ne dis rien.', 'You are not saying anything.', '/ty nə di ʁjɛ̃/', 'tü nuh dee RYEHⁿ', ['rien']),
  sent(1022, "On n'attend personne.", 'We are not expecting anyone.', '/ɔ̃ na.tɑ̃ pɛʁ.sɔn/', 'ohⁿ na-tahⁿ pehr-SONN', ['personne']),
  sent(1023, "Il n'y a plus de lait.", 'There is no milk left.', '/il nja ply də lɛ/', 'eel nya plü duh LEH', ['plus', 'de'], FCVDR),
  sent(1024, "Je n'ai jamais de monnaie sur moi.", 'I never have change on me.', '/ʒə ne ʒa.mɛ də mɔ.nɛ syʁ mwa/', 'zhuh nay zha-meh duh mo-NEH sür MWA', ['jamais', 'de']),
  sent(1025, 'Le deuxième mot prend la place de pas.', 'The second word takes the place of pas.', '/lə dø.zjɛm mo pʁɑ̃ la plas də pa/', 'luh deu-ZYEM moh prahⁿ la plass duh PA', ['rule', 'place'], ['flashcard'],
    rule('Dans « je ne fume plus », où est passé pas ?', 'plus a pris sa place. Un seul deuxième mot à la fois : je ne fume plus, et jamais « je ne fume pas plus ».')),
  sent(1026, 'Ma voisine ne sort plus le soir.', 'My neighbour does not go out in the evening any more.', '/ma vwa.zin nə sɔʁ ply lə swaʁ/', 'ma vwa-ZEEN nuh sor plü luh SWAR', ['plus']),
  sent(1027, "Ce restaurant n'ouvre jamais le lundi.", 'This restaurant never opens on Mondays.', '/sə ʁɛs.to.ʁɑ̃ nuvʁ ʒa.mɛ lə lœ̃.di/', 'suh rehs-to-RAHⁿ noovr zha-meh luh luhⁿ-DEE', ['jamais']),
  sent(1028, "Je n'entends rien avec ce bruit.", 'I cannot hear anything with this noise.', '/ʒə nɑ̃.tɑ̃ ʁjɛ̃ a.vɛk sə bʁɥi/', 'zhuh nahⁿ-tahⁿ RYEHⁿ a-vehk suh BRWEE', ['rien'], FCVDR),
  sent(1029, 'Elle ne voit personne le week-end.', 'She does not see anyone at the weekend.', '/ɛl nə vwa pɛʁ.sɔn lə wi.kɛnd/', 'ehl nuh vwa pehr-SONN luh wee-KEHND', ['personne']),
  sent(1030, 'Je ne travaille plus le samedi.', 'I do not work on Saturdays any more.', '/ʒə nə tʁa.vaj ply lə sam.di/', 'zhuh nuh tra-VAHY plü luh sam-DEE', ['plus']),
  sent(1031, "Il n'y a plus de pain.", 'There is no bread left.', '/il nja ply də pɛ̃/', 'eel nya plü duh PEHⁿ', ['plus', 'de'], FCVR,
    gap("Il n'y a plus ___ pain.", 'de : après plus et jamais, un et du deviennent de, comme après pas.')),
  sent(1032, "Tu ne m'écoutes jamais.", 'You never listen to me.', '/ty nə me.kut ʒa.mɛ/', 'tü nuh may-koot zha-MEH', ['jamais']),
  sent(1033, "Il n'y a personne à la réception.", 'There is nobody at reception.', '/il nja pɛʁ.sɔn a la ʁe.sɛp.sjɔ̃/', 'eel nya pehr-SONN a la ray-sehp-SYOHⁿ', ['personne'], FCVDR),
  sent(1034, 'Nous ne mangeons rien de sucré.', 'We do not eat anything sweet.', '/nu nə mɑ̃.ʒɔ̃ ʁjɛ̃ də sy.kʁe/', 'noo nuh mahⁿ-zhohⁿ RYEHⁿ duh sü-KRAY', ['rien']),
];

/* ── ACT 3 · NE ... QUE ─────────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1035, "Je n'ai que dix dollars.", 'I only have ten dollars.', '/ʒə ne kə di dɔ.laʁ/', 'zhuh nay kuh dee do-LAR', ['que', 'quebec'], FCVDR),
  sent(1036, "J'ai seulement dix dollars.", 'I only have ten dollars.', '/ʒe sœl.mɑ̃ di dɔ.laʁ/', 'zhay suhl-mahⁿ dee do-LAR', ['seulement', 'quebec']),
  sent(1037, 'Il ne parle que français.', 'He only speaks French.', '/il nə paʁl kə fʁɑ̃.sɛ/', 'eel nuh parl kuh frahⁿ-SEH', ['que'], FCVDR),
  sent(1038, "Elle ne boit que de l'eau.", 'She only drinks water.', '/ɛl nə bwa kə də lo/', 'ehl nuh bwa kuh duh LOH', ['que', 'article']),
  sent(1039, "Le musée n'ouvre que le mardi.", 'The museum only opens on Tuesdays.', '/lə my.ze nuvʁ kə lə maʁ.di/', 'luh mü-ZAY noovr kuh luh mar-DEE', ['que']),
  sent(1040, 'Je ne veux que du pain.', 'I only want some bread.', '/ʒə nə vø kə dy pɛ̃/', 'zhuh nuh veu kuh dü PEHⁿ', ['que', 'article'], FCVDR),
  sent(1041, "Ne ... que ne nie rien : il enlève tout le reste.", 'Ne ... que denies nothing: it takes away everything else.', '/nə kə nə ni ʁjɛ̃ il ɑ̃.lɛv tu lə ʁɛst/', 'nuh KUH nuh nee RYEHⁿ | eel ahⁿ-lehv too luh REHST', ['rule', 'que'], ['flashcard'],
    rule("« Je n'ai que du pain » : as-tu du pain ?", "Oui. Tu as du pain, et rien d'autre. Donc l'article reste : du pain, jamais de pain.")),
  sent(1042, 'Nous ne sommes que trois ce soir.', 'There are only three of us tonight.', '/nu nə sɔm kə tʁwa sə swaʁ/', 'noo nuh som kuh trwa suh SWAR', ['que']),
  sent(1043, "Il n'y a qu'une salle de bain.", 'There is only one bathroom.', '/il nja kyn sal də bɛ̃/', 'eel nya künn sal duh BEHⁿ', ['que'], FCVDR),
  sent(1044, 'Je ne travaille que le matin.', 'I only work in the mornings.', '/ʒə nə tʁa.vaj kə lə ma.tɛ̃/', 'zhuh nuh tra-vahy kuh luh ma-TEHⁿ', ['que']),
  sent(1045, 'Je travaille seulement le matin.', 'I only work in the mornings.', '/ʒə tʁa.vaj sœl.mɑ̃ lə ma.tɛ̃/', 'zhuh tra-vahy suhl-mahⁿ luh ma-TEHⁿ', ['seulement']),
  sent(1046, "Il ne pense qu'à son travail.", 'He only thinks about his work.', '/il nə pɑ̃s ka sɔ̃ tʁa.vaj/', 'eel nuh pahⁿs ka sohⁿ tra-VAHY', ['que']),
  sent(1047, "Le bus ne passe qu'une fois par heure.", 'The bus only comes once an hour.', '/lə bys nə pas kyn fwa pa.ʁœʁ/', 'luh büs nuh pass künn fwa pa-RUHR', ['que'], FCVDR),
  sent(1048, "Ce n'est qu'un petit problème.", 'It is only a small problem.', '/sə nɛ kœ̃ pə.ti pʁɔ.blɛm/', 'suh neh kuhⁿ puh-tee pro-BLEM', ['que']),
  sent(1049, "On n'a que deux jours à Québec.", 'We only have two days in Québec.', '/ɔ̃ na kə dø ʒuʁ a ke.bɛk/', 'ohⁿ na kuh deu zhoor a kay-BEHK', ['que', 'quebec']),
  sent(1050, 'Il ne reste que du café.', 'There is only coffee left.', '/il nə ʁɛst kə dy ka.fe/', 'eel nuh rehst kuh dü ka-FAY', ['que', 'article'], FCVR,
    gap('Il ne reste ___ du café. (only)', "que : ne ... que garde l'article, parce que le café est bien là.")),
  sent(1051, 'Elle ne mange que des légumes.', 'She only eats vegetables.', '/ɛl nə mɑ̃ʒ kə de le.ɡym/', 'ehl nuh mahⁿzh kuh day lay-GÜM', ['que', 'article']),
  sent(1052, "Tu n'as qu'à demander.", 'You only have to ask.', '/ty na ka də.mɑ̃.de/', 'tü na ka duh-mahⁿ-DAY', ['que', 'expression']),
  phrase(1053, 'ne ... que', 'only', '/nə kə/', 'nuh ... KUH', ['que']),
  phrase(1054, 'seulement', 'only', '/sœl.mɑ̃/', 'suhl-MAHⁿ', ['seulement']),
];

/* ── ACT 4 · AUCUN, NI ... NI, NULLE PART, GUÈRE ────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1055, "Je n'ai aucune idée.", 'I have no idea.', '/ʒə ne o.ky.ni.de/', 'zhuh nay oh-kü-nee-DAY', ['aucun'], FCVDR),
  sent(1056, "Il n'y a aucun problème.", 'There is no problem at all.', '/il nja o.kœ̃ pʁɔ.blɛm/', 'eel nya oh-kuhⁿ pro-BLEM', ['aucun'], FCVDR),
  sent(1057, 'Je ne vois aucune différence.', 'I cannot see any difference.', '/ʒə nə vwa o.kyn di.fe.ʁɑ̃s/', 'zhuh nuh vwa oh-künn dee-fay-RAHⁿS', ['aucun']),
  sent(1058, "Elle n'a aucun ami dans le quartier.", 'She has not a single friend in the neighbourhood.', '/ɛl na o.kœ̃.na.mi dɑ̃ lə kaʁ.tje/', 'ehl na oh-kuhⁿ-na-MEE dahⁿ luh kar-TYAY', ['aucun']),
  sent(1059, "Je n'ai ni frère ni sœur.", 'I have neither a brother nor a sister.', '/ʒə ne ni fʁɛʁ ni sœʁ/', 'zhuh nay nee FREHR nee SUHR', ['ni'], FCVDR),
  sent(1060, 'Il ne boit ni thé ni café.', 'He drinks neither tea nor coffee.', '/il nə bwa ni te ni ka.fe/', 'eel nuh bwa nee TAY nee ka-FAY', ['ni']),
  sent(1061, "Je n'aime ni le froid ni la neige.", 'I like neither the cold nor the snow.', '/ʒə nɛm ni lə fʁwa ni la nɛʒ/', 'zhuh nem nee luh FRWA nee la NEHZH', ['ni', 'article', 'quebec'], FCVDR),
  sent(1062, "L'appartement n'a ni balcon ni ascenseur.", 'The flat has neither a balcony nor a lift.', '/la.paʁ.tə.mɑ̃ na ni bal.kɔ̃ ni a.sɑ̃.sœʁ/', 'la-par-tuh-MAHⁿ na nee bal-KOHⁿ nee a-sahⁿ-SUHR', ['ni']),
  sent(1063, 'Je ne trouve mes lunettes nulle part.', 'I cannot find my glasses anywhere.', '/ʒə nə tʁuv me ly.nɛt nyl paʁ/', 'zhuh nuh troov may lü-NEHT nül PAR', ['nulle-part'], FCVDR),
  sent(1064, 'On ne va nulle part ce week-end.', 'We are not going anywhere this weekend.', '/ɔ̃ nə va nyl paʁ sə wi.kɛnd/', 'ohⁿ nuh va nül PAR suh wee-KEHND', ['nulle-part']),
  sent(1065, 'Il ne pleut guère en juillet.', 'It hardly rains in July.', '/il nə plø ɡɛʁ ɑ̃ ʒɥi.jɛ/', 'eel nuh pleu GEHR ahⁿ zhwee-YEH', ['guere', 'ecrit']),
  sent(1066, "Elle n'a guère le temps de lire.", 'She hardly has time to read.', '/ɛl na ɡɛʁ lə tɑ̃ də liʁ/', 'ehl na gehr luh tahⁿ duh LEER', ['guere', 'ecrit']),
  sent(1067, 'Aucun reste au singulier : il compte zéro.', 'Aucun stays singular: it counts zero.', '/o.kœ̃ ʁɛ.sto sɛ̃.ɡy.lje il kɔ̃t ze.ʁo/', 'oh-KUHⁿ reh-stoh sehⁿ-gü-LYAY | eel kohⁿt zay-ROH', ['rule', 'aucun'], ['flashcard'],
    rule('« Il n’y a aucun... » : aucun peut-il être pluriel ?', 'Presque jamais : aucun problème, aucune idée. Aucun compte zéro, et zéro ne se met pas au pluriel.')),
  sent(1068, "Il n'y a aucune place pour se garer.", 'There is not a single parking space.', '/il nja o.kyn plas puʁ sə ɡa.ʁe/', 'eel nya oh-künn plass poor suh ga-RAY', ['aucun', 'quebec']),
  sent(1069, "Je n'ai ni le temps ni l'argent.", 'I have neither the time nor the money.', '/ʒə ne ni lə tɑ̃ ni laʁ.ʒɑ̃/', 'zhuh nay nee luh TAHⁿ nee lar-ZHAHⁿ', ['ni', 'article']),
  sent(1070, 'Il ne mange ni viande ni poisson.', 'He eats neither meat nor fish.', '/il nə mɑ̃ʒ ni vjɑ̃d ni pwa.sɔ̃/', 'eel nuh mahⁿzh nee VYAHⁿD nee pwa-SOHⁿ', ['ni'], FCVR,
    gap('Il ne mange ___ viande ___ poisson.', 'ni ... ni : pas d’article et pas de pas. Deux choses manquent, les deux à la fois.')),
  phrase(1071, 'nulle part', 'nowhere, not anywhere', '/nyl paʁ/', 'nül PAR', ['nulle-part']),
  phrase(1072, 'ne ... guère', 'hardly, barely', '/nə ɡɛʁ/', 'nuh ... GEHR', ['guere', 'ecrit']),
  phrase(1073, 'aucun, aucune', 'not a single, no', '/o.kœ̃ o.kyn/', 'oh-KUHⁿ, oh-KÜNN', ['aucun']),
  phrase(1074, 'ni ... ni', 'neither ... nor', '/ni ni/', 'nee ... NEE', ['ni']),
];

/* ── ACT 5 · LE SUJET QUI MANQUE ────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1075, "Personne n'est venu.", 'Nobody came.', '/pɛʁ.sɔn nɛ və.ny/', 'pehr-SONN neh vuh-NÜ', ['sujet', 'personne'], FCVDR),
  sent(1076, "Rien n'a changé.", 'Nothing has changed.', '/ʁjɛ̃ na ʃɑ̃.ʒe/', 'ryehⁿ na shahⁿ-ZHAY', ['sujet', 'rien'], FCVDR),
  sent(1077, 'Aucun train ne passe après minuit.', 'No train runs after midnight.', '/o.kœ̃ tʁɛ̃ nə pas a.pʁɛ mi.nɥi/', 'oh-kuhⁿ trehⁿ nuh pass a-preh mee-NWEE', ['sujet', 'aucun']),
  sent(1078, 'Personne ne répond au téléphone.', 'Nobody answers the phone.', '/pɛʁ.sɔn nə ʁe.pɔ̃ o te.le.fɔn/', 'pehr-SONN nuh ray-pohⁿ oh tay-lay-FONN', ['sujet', 'personne'], FCVDR),
  sent(1079, 'Rien ne marche dans cette cuisine.', 'Nothing works in this kitchen.', '/ʁjɛ̃ nə maʁʃ dɑ̃ sɛt kɥi.zin/', 'ryehⁿ nuh marsh dahⁿ seht kwee-ZEEN', ['sujet', 'rien']),
  sent(1080, "Ni le propriétaire ni l'agence ne répondent.", 'Neither the owner nor the agency is answering.', '/ni lə pʁɔ.pʁi.je.tɛʁ ni la.ʒɑ̃s nə ʁe.pɔ̃d/', 'nee luh pro-pree-yay-TEHR nee la-ZHAHⁿS nuh ray-POHⁿD', ['sujet', 'ni'], FCVDR),
  sent(1081, 'Aucune fenêtre ne ferme bien.', 'Not one window shuts properly.', '/o.kyn fə.nɛtʁ nə fɛʁm bjɛ̃/', 'oh-künn fuh-NEHTR nuh fehrm BYEHⁿ', ['sujet', 'aucun']),
  sent(1082, 'Personne, rien et aucun peuvent ouvrir la phrase, sans pas.', 'Personne, rien and aucun can open the sentence, with no pas.', '/pɛʁ.sɔn ʁjɛ̃ e o.kœ̃ pœv.tu.vʁiʁ la fʁaz sɑ̃ pa/', 'pehr-SONN ryehⁿ ay oh-KUHⁿ puhv-too-VREER la FRAZ sahⁿ PA', ['rule', 'sujet'], ['flashcard'],
    rule("« Personne n'est venu » : où est pas ?", "Nulle part. personne fait déjà le travail de pas : « personne n'est pas venu » ne se dit pas.")),
  sent(1083, "Personne ne m'a prévenu.", 'Nobody warned me.', '/pɛʁ.sɔn nə ma pʁe.və.ny/', 'pehr-SONN nuh ma pray-vuh-NÜ', ['sujet', 'personne', 'compose']),
  sent(1084, 'Personne ne le sait.', 'Nobody knows.', '/pɛʁ.sɔn nə lə sɛ/', 'pehr-SONN nuh luh SEH', ['sujet', 'personne']),
  sent(1085, "Rien n'est prêt.", 'Nothing is ready.', '/ʁjɛ̃ nɛ pʁɛ/', 'ryehⁿ neh PREH', ['sujet', 'rien']),
  sent(1086, "Aucun client ne s'est plaint.", 'Not one customer complained.', '/o.kœ̃ kli.jɑ̃ nə sɛ plɛ̃/', 'oh-kuhⁿ klee-yahⁿ nuh seh PLEHⁿ', ['sujet', 'aucun', 'compose']),
  sent(1087, "Personne n'habite au deuxième étage.", 'Nobody lives on the second floor.', '/pɛʁ.sɔn na.bit o dø.zjɛ.me.taʒ/', 'pehr-SONN na-beet oh deu-zyeh-may-TAZH', ['sujet', 'personne']),
  sent(1088, 'Personne ne parle français ici.', 'Nobody here speaks French.', '/pɛʁ.sɔn nə paʁl fʁɑ̃.sɛ i.si/', 'pehr-SONN nuh parl frahⁿ-seh ee-SEE', ['sujet', 'personne']),
  sent(1089, "Rien ne s'est passé.", 'Nothing happened.', '/ʁjɛ̃ nə sɛ pa.se/', 'ryehⁿ nuh seh pa-SAY', ['sujet', 'rien', 'compose'], FCVR,
    gap('Rien ___ s’est passé.', 'ne, et seulement ne : rien ouvre la phrase et prend la place de pas.')),
  phrase(1090, 'personne ne', 'nobody', '/pɛʁ.sɔn nə/', 'pehr-SONN nuh', ['sujet', 'personne']),
  phrase(1091, 'rien ne', 'nothing', '/ʁjɛ̃ nə/', 'RYEHⁿ nuh', ['sujet', 'rien']),
  sent(1092, 'Aucune de ces clés ne marche.', 'None of these keys works.', '/o.kyn də se kle nə maʁʃ/', 'oh-künn duh say KLAY nuh MARSH', ['sujet', 'aucun']),
];

/* ── ACT 6 · LES TEMPS COMPOSÉS ─────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1093, "Je n'ai rien vu.", 'I did not see anything.', '/ʒə ne ʁjɛ̃ vy/', 'zhuh nay ryehⁿ VÜ', ['compose', 'rien', 'avant'], FCVDR),
  sent(1094, "Je n'ai vu personne.", 'I did not see anyone.', '/ʒə ne vy pɛʁ.sɔn/', 'zhuh nay vü pehr-SONN', ['compose', 'personne', 'apres'], FCVDR),
  sent(1095, "Elle n'est jamais venue.", 'She never came.', '/ɛl nɛ ʒa.mɛ və.ny/', 'ehl neh zha-meh vuh-NÜ', ['compose', 'jamais', 'avant']),
  sent(1096, 'Nous ne sommes plus retournés à Gaspé.', 'We never went back to Gaspé.', '/nu nə sɔm ply ʁə.tuʁ.ne a ɡas.pe/', 'noo nuh som plü ruh-toor-NAY a gas-PAY', ['compose', 'plus', 'avant', 'quebec']),
  sent(1097, "Il n'a rien dit.", 'He did not say anything.', '/il na ʁjɛ̃ di/', 'eel na ryehⁿ DEE', ['compose', 'rien', 'avant'], FCVDR),
  sent(1098, "On n'a rencontré personne.", 'We did not meet anyone.', '/ɔ̃ na ʁɑ̃.kɔ̃.tʁe pɛʁ.sɔn/', 'ohⁿ na rahⁿ-kohⁿ-tray pehr-SONN', ['compose', 'personne', 'apres']),
  sent(1099, "Je n'ai trouvé mes clés nulle part.", 'I could not find my keys anywhere.', '/ʒə ne tʁu.ve me kle nyl paʁ/', 'zhuh nay troo-vay may KLAY nül PAR', ['compose', 'nulle-part', 'apres']),
  sent(1100, "Nous n'avons reçu aucun message.", 'We have not received a single message.', '/nu na.vɔ̃ ʁə.sy o.kœ̃ mɛ.saʒ/', 'noo na-vohⁿ ruh-sü oh-kuhⁿ meh-SAZH', ['compose', 'aucun', 'apres'], FCVDR),
  sent(1101, "Je n'ai payé que la moitié.", 'I only paid half.', '/ʒə ne pe.je kə la mwa.tje/', 'zhuh nay pay-yay kuh la mwa-TYAY', ['compose', 'que', 'apres']),
  sent(1102, 'Rien, jamais et plus vont avant le participe. Personne va après.', 'Rien, jamais and plus go before the participle. Personne goes after.', '/ʁjɛ̃ ʒa.mɛ e ply vɔ̃ a.vɑ̃ lə paʁ.ti.sip pɛʁ.sɔn va a.pʁɛ/', 'ryehⁿ zha-meh ay PLÜ vohⁿ a-vahⁿ luh par-tee-SEEP | pehr-SONN va a-PREH', ['rule', 'compose'], ['flashcard'],
    rule("« Je n'ai rien vu », « je n'ai vu personne » : pourquoi deux places ?", "rien, jamais et plus restent collés à l'auxiliaire, comme pas. personne, aucun, que et nulle part vont après le participe, à la place du complément.")),
  sent(1103, "Il n'est jamais arrivé à l'heure.", 'He never arrived on time.', '/il nɛ ʒa.mɛ a.ʁi.ve a lœʁ/', 'eel neh zha-meh a-ree-vay a LUHR', ['compose', 'jamais', 'avant']),
  sent(1104, "Tu n'as rien oublié.", 'You have not forgotten anything.', '/ty na ʁjɛ̃.nu.bli.je/', 'tü na ryehⁿ-noo-blee-YAY', ['compose', 'rien', 'avant']),
  sent(1105, "Elle n'a vu que le salon.", 'She only saw the living room.', '/ɛl na vy kə lə sa.lɔ̃/', 'ehl na vü kuh luh sa-LOHⁿ', ['compose', 'que', 'apres']),
  sent(1106, 'Je ne suis allée nulle part.', 'I did not go anywhere.', '/ʒə nə sɥi.za.le nyl paʁ/', 'zhuh nuh swee-za-lay nül PAR', ['compose', 'nulle-part', 'apres']),
  sent(1107, "Personne n'a appelé.", 'Nobody called.', '/pɛʁ.sɔn na a.pə.le/', 'pehr-SONN na a-puh-LAY', ['compose', 'sujet']),
  sent(1108, "Il ne me l'a jamais rendu.", 'He never gave it back to me.', '/il nə mə la ʒa.mɛ ʁɑ̃.dy/', 'eel nuh muh la zha-meh rahⁿ-DÜ', ['compose', 'jamais', 'pronoms'], FCVDR),
  sent(1109, "Je ne l'ai vu nulle part.", 'I did not see it anywhere.', '/ʒə nə le vy nyl paʁ/', 'zhuh nuh lay vü nül PAR', ['compose', 'nulle-part', 'pronoms']),
  sent(1110, "Je n'ai rien entendu.", 'I did not hear anything.', '/ʒə ne ʁjɛ̃.nɑ̃.tɑ̃.dy/', 'zhuh nay ryehⁿ-nahⁿ-tahⁿ-DÜ', ['compose', 'rien', 'avant'], FCVR,
    gap("Je n'ai ___ entendu. (nothing)", "rien, entre l'auxiliaire et le participe : je n'ai rien entendu.")),
  sent(1111, 'Nous n’avons jamais eu de problème.', 'We have never had a problem.', '/nu na.vɔ̃ ʒa.mɛ y də pʁɔ.blɛm/', 'noo na-vohⁿ zha-meh ü duh pro-BLEM', ['compose', 'jamais', 'de']),
  sent(1112, 'Ils ne sont plus venus.', 'They did not come again.', '/il nə sɔ̃ ply və.ny/', 'eel nuh sohⁿ plü vuh-NÜ', ['compose', 'plus', 'avant']),
];

/* ── ACT 7 · NIER UN INFINITIF ──────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1113, 'Je préfère ne pas sortir ce soir.', 'I would rather not go out tonight.', '/ʒə pʁe.fɛʁ nə pa sɔʁ.tiʁ sə swaʁ/', 'zhuh pray-fehr nuh pa sor-teer suh SWAR', ['infinitif'], FCVDR),
  sent(1114, "Il m'a demandé de ne pas fumer.", 'He asked me not to smoke.', '/il ma də.mɑ̃.de də nə pa fy.me/', 'eel ma duh-mahⁿ-day duh nuh pa fü-MAY', ['infinitif'], FCVDR),
  sent(1115, 'Merci de ne pas claquer la porte.', 'Please do not slam the door.', '/mɛʁ.si də nə pa kla.ke la pɔʁt/', 'mehr-see duh nuh pa kla-kay la PORT', ['infinitif', 'consigne']),
  sent(1116, "J'essaie de ne plus boire de café.", 'I am trying not to drink coffee any more.', '/ʒe.sɛ də nə ply bwaʁ də ka.fe/', 'zheh-seh duh nuh plü bwar duh ka-FAY', ['infinitif', 'plus']),
  sent(1117, 'Elle a promis de ne jamais revenir.', 'She promised never to come back.', '/ɛl a pʁɔ.mi də nə ʒa.mɛ ʁə.və.niʁ/', 'ehl a pro-mee duh nuh zha-meh ruh-vuh-NEER', ['infinitif', 'jamais'], FCVDR),
  sent(1118, 'Je ne veux pas partir.', 'I do not want to leave.', '/ʒə nə vø pa paʁ.tiʁ/', 'zhuh nuh veu pa par-TEER', ['infinitif', 'modal']),
  sent(1119, 'Je peux ne pas venir.', 'I am allowed not to come.', '/ʒə pø nə pa və.niʁ/', 'zhuh peu nuh pa vuh-NEER', ['infinitif', 'modal']),
  sent(1120, 'Je ne peux pas venir.', 'I cannot come.', '/ʒə nə pø pa və.niʁ/', 'zhuh nuh peu pa vuh-NEER', ['infinitif', 'modal']),
  sent(1121, 'Il est parti sans dire au revoir.', 'He left without saying goodbye.', '/il ɛ paʁ.ti sɑ̃ diʁ o ʁə.vwaʁ/', 'eel eh par-tee sahⁿ deer oh ruh-VWAR', ['sans'], FCVDR),
  sent(1122, "J'ai signé sans lire le contrat.", 'I signed without reading the contract.', '/ʒe si.ɲe sɑ̃ liʁ lə kɔ̃.tʁa/', 'zhay see-nyay sahⁿ leer luh kohⁿ-TRA', ['sans']),
  sent(1123, 'Elle est sortie sans rien dire.', 'She went out without saying anything.', '/ɛl ɛ sɔʁ.ti sɑ̃ ʁjɛ̃ diʁ/', 'ehl eh sor-tee sahⁿ ryehⁿ DEER', ['sans', 'rien'], FCVDR),
  sent(1124, "Devant un infinitif, ne pas se mettent ensemble, avant le verbe.", 'Before an infinitive, ne pas go together, in front of the verb.', '/də.vɑ̃ œ̃.nɛ̃.fi.ni.tif nə pa sə mɛt ɑ̃.sɑ̃bl a.vɑ̃ lə vɛʁb/', 'duh-vahⁿ uhⁿ-nehⁿ-fee-nee-TEEF | nuh PA suh meht ahⁿ-SAHⁿBL a-vahⁿ luh VEHRB', ['rule', 'infinitif'], ['flashcard'],
    rule('« de ne pas fumer » : pourquoi pas ne vient-il pas après fumer ?', "Un infinitif n'a pas de personne à entourer. ne et pas se collent et passent devant : ne pas fumer, ne plus boire, ne jamais revenir.")),
  sent(1125, 'Il vaut mieux ne rien toucher.', 'It is better not to touch anything.', '/il vo mjø nə ʁjɛ̃ tu.ʃe/', 'eel voh myeu nuh ryehⁿ too-SHAY', ['infinitif', 'rien']),
  sent(1126, 'Je suis parti sans voir personne.', 'I left without seeing anyone.', '/ʒə sɥi paʁ.ti sɑ̃ vwaʁ pɛʁ.sɔn/', 'zhuh swee par-tee sahⁿ vwar pehr-SONN', ['sans', 'personne']),
  sent(1127, 'Merci de ne pas stationner devant le garage.', 'Please do not park in front of the garage.', '/mɛʁ.si də nə pa sta.sjɔ.ne də.vɑ̃ lə ɡa.ʁaʒ/', 'mehr-see duh nuh pa sta-syo-nay duh-vahⁿ luh ga-RAZH', ['infinitif', 'consigne'], FCVR,
    gap('Merci de ___ stationner devant le garage.', 'ne pas, ensemble, devant l’infinitif.')),
  sent(1128, 'Pour ne pas rater le bus, je pars tôt.', 'So as not to miss the bus, I leave early.', '/puʁ nə pa ʁa.te lə bys ʒə paʁ to/', 'poor nuh pa ra-tay luh büs zhuh par TOH', ['infinitif']),
  phrase(1129, 'sans rien dire', 'without saying a word', '/sɑ̃ ʁjɛ̃ diʁ/', 'sahⁿ ryehⁿ DEER', ['sans', 'rien']),
  phrase(1130, 'de ne pas oublier', 'not to forget', '/də nə pa.zu.bli.je/', 'duh nuh pa-zoo-blee-YAY', ['infinitif']),
];

/* ── ACT 8 · LES NÉGATIONS COMBINÉES ────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1131, 'Je ne dis plus rien.', 'I do not say anything any more.', '/ʒə nə di ply ʁjɛ̃/', 'zhuh nuh dee plü RYEHⁿ', ['combine', 'plus-rien'], FCVDR),
  sent(1132, 'Il ne voit plus personne.', 'He does not see anyone any more.', '/il nə vwa ply pɛʁ.sɔn/', 'eel nuh vwa plü pehr-SONN', ['combine', 'plus-personne'], FCVDR),
  sent(1133, 'Elle ne fait jamais rien.', 'She never does anything.', '/ɛl nə fɛ ʒa.mɛ ʁjɛ̃/', 'ehl nuh feh zha-meh RYEHⁿ', ['combine', 'jamais-rien']),
  sent(1134, 'On ne voit jamais personne dans ce parc.', 'You never see anyone in this park.', '/ɔ̃ nə vwa ʒa.mɛ pɛʁ.sɔn dɑ̃ sə paʁk/', 'ohⁿ nuh vwa zha-meh pehr-SONN dahⁿ suh PARK', ['combine', 'jamais-personne']),
  sent(1135, 'Je ne reviendrai plus jamais ici.', 'I will never come back here again.', '/ʒə nə ʁə.vjɛ̃.dʁɛ ply ʒa.mɛ i.si/', 'zhuh nuh ruh-vyehⁿ-dreh plü zha-meh ee-SEE', ['combine', 'plus-jamais', 'futur'], FCVDR),
  sent(1136, 'Je ne dirai plus jamais rien.', 'I will never say anything again.', '/ʒə nə di.ʁɛ ply ʒa.mɛ ʁjɛ̃/', 'zhuh nuh dee-reh plü zha-meh RYEHⁿ', ['combine', 'plus-jamais-rien', 'futur']),
  sent(1137, "Il n'y a plus rien à faire.", 'There is nothing more to be done.', '/il nja ply ʁjɛ̃ a fɛʁ/', 'eel nya plü ryehⁿ a FEHR', ['combine', 'plus-rien'], FCVDR),
  sent(1138, "Il n'y a plus personne au bureau.", 'There is nobody left at the office.', '/il nja ply pɛʁ.sɔn o by.ʁo/', 'eel nya plü pehr-SONN oh bü-ROH', ['combine', 'plus-personne']),
  sent(1139, "L'ordre ne change pas : plus, puis jamais, puis rien ou personne.", 'The order never changes: plus, then jamais, then rien or personne.', '/lɔʁdʁ nə ʃɑ̃ʒ pa ply pɥi ʒa.mɛ pɥi ʁjɛ̃ u pɛʁ.sɔn/', 'LORDR nuh shahⁿzh PA | PLÜ pwee zha-MEH pwee RYEHⁿ oo pehr-SONN', ['rule', 'combine'], ['flashcard'],
    rule('plus, jamais, rien : dans quel ordre ?', "plus jamais rien. D'abord le temps qui s'arrête, puis le moment, puis la chose ou la personne.")),
  sent(1140, "Je n'ai plus jamais revu ce propriétaire.", 'I never saw that owner again.', '/ʒə ne ply ʒa.mɛ ʁə.vy sə pʁɔ.pʁi.je.tɛʁ/', 'zhuh nay plü zha-meh ruh-vü suh pro-pree-yay-TEHR', ['combine', 'plus-jamais', 'compose']),
  sent(1141, 'Personne ne dit jamais rien.', 'Nobody ever says anything.', '/pɛʁ.sɔn nə di ʒa.mɛ ʁjɛ̃/', 'pehr-SONN nuh dee zha-meh RYEHⁿ', ['combine', 'sujet']),
  sent(1142, "Plus rien ne m'étonne.", 'Nothing surprises me any more.', '/ply ʁjɛ̃ nə me.tɔn/', 'plü ryehⁿ nuh may-TONN', ['combine', 'sujet'], FCVDR),
  sent(1143, "Je n'ai jamais rien volé.", 'I have never stolen anything.', '/ʒə ne ʒa.mɛ ʁjɛ̃ vɔ.le/', 'zhuh nay zha-meh ryehⁿ vo-LAY', ['combine', 'jamais-rien', 'compose']),
  sent(1144, 'Elle ne mange plus que des légumes.', 'These days she only eats vegetables.', '/ɛl nə mɑ̃ʒ ply kə de le.ɡym/', 'ehl nuh mahⁿzh plü kuh day lay-GÜM', ['combine', 'plus-que']),
  sent(1145, 'On ne trouve plus ça nulle part.', 'You cannot find that anywhere any more.', '/ɔ̃ nə tʁuv ply sa nyl paʁ/', 'ohⁿ nuh troov plü sa nül PAR', ['combine', 'plus-nulle-part']),
  sent(1146, "Il n'y a plus rien dans le frigo.", 'There is nothing left in the fridge.', '/il nja ply ʁjɛ̃ dɑ̃ lə fʁi.ɡo/', 'eel nya plü RYEHⁿ dahⁿ luh free-GOH', ['combine', 'plus-rien'], FCVR,
    gap("Il n'y a ___ dans le frigo. (nothing left)", "plus rien : plus d'abord, rien ensuite.")),
  sent(1147, 'Je ne connais plus personne dans cette ville.', 'I do not know anyone in this town any more.', '/ʒə nə kɔ.nɛ ply pɛʁ.sɔn dɑ̃ sɛt vil/', 'zhuh nuh ko-neh plü pehr-SONN dahⁿ seht VEEL', ['combine', 'plus-personne']),
  phrase(1148, 'plus jamais', 'never again', '/ply ʒa.mɛ/', 'plü zha-MEH', ['combine', 'plus-jamais']),
];

/* ── ACT 9 · RÉPONDRE ───────────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1149, "Si, j'ai payé le loyer.", 'Yes I did, I paid the rent.', '/si ʒe pe.je lə lwa.je/', 'SEE | zhay pay-yay luh lwa-YAY', ['reponse', 'si'], FCVDR),
  sent(1150, "Si, je l'ai reçu hier soir.", 'Yes I did, I got it last night.', '/si ʒə le ʁə.sy jɛʁ swaʁ/', 'SEE | zhuh lay ruh-sü yehr SWAR', ['reponse', 'si'], FCVDR),
  sent(1151, 'Moi non plus.', 'Me neither.', '/mwa nɔ̃ ply/', 'mwa nohⁿ PLÜ', ['reponse', 'non-plus']),
  sent(1152, 'Moi aussi.', 'Me too.', '/mwa o.si/', 'mwa oh-SEE', ['reponse', 'aussi']),
  phrase(1153, 'pas du tout', 'not at all', '/pa dy tu/', 'pa dü TOO', ['reponse', 'renfort']),
  phrase(1154, 'jamais de la vie', 'not on your life, never ever', '/ʒa.mɛ də la vi/', 'zha-meh duh la VEE', ['reponse', 'renfort']),
  phrase(1155, 'pas encore', 'not yet', '/pa.zɑ̃.kɔʁ/', 'pa-zahⁿ-KOR', ['reponse', 'pas-encore']),
  phrase(1156, 'plus maintenant', 'not any more', '/ply mɛ̃t.nɑ̃/', 'plü mehⁿt-NAHⁿ', ['reponse', 'plus']),
  sent(1157, "Je n'aime pas le bruit, et lui non plus.", 'I do not like noise, and neither does he.', '/ʒə nɛm pa lə bʁɥi e lɥi nɔ̃ ply/', 'zhuh nem pa luh BRWEE | ay lwee nohⁿ PLÜ', ['reponse', 'non-plus'], FCVDR),
  sent(1158, 'Elle ne fume pas, et moi non plus.', 'She does not smoke, and neither do I.', '/ɛl nə fym pa e mwa nɔ̃ ply/', 'ehl nuh füm PA | ay mwa nohⁿ PLÜ', ['reponse', 'non-plus']),
  sent(1159, "Je ne suis pas du tout d'accord.", 'I do not agree at all.', '/ʒə nə sɥi pa dy tu da.kɔʁ/', 'zhuh nuh swee pa dü too da-KOR', ['reponse', 'renfort'], FCVDR),
  sent(1160, "Ce n'est pas du tout ce que disait l'annonce.", 'It is not at all what the listing said.', '/sə nɛ pa dy tu sə kə di.zɛ la.nɔ̃s/', 'suh neh pa dü too suh kuh dee-zeh la-NOHⁿS', ['reponse', 'renfort', 'annonce']),
  sent(1161, 'Après une question négative, on répond si, pas oui.', 'After a negative question, you answer si, not oui.', '/a.pʁɛ.zyn kɛs.tjɔ̃ ne.ɡa.tiv ɔ̃ ʁe.pɔ̃ si pa wi/', 'a-preh-zünn kehs-tyohⁿ nay-ga-TEEV | ohⁿ ray-pohⁿ SEE pa WEE', ['rule', 'si'], ['flashcard'],
    rule("« Tu n'as pas tes clés ? » Tu les as. Que réponds-tu ?", 'Si. oui répond à une question positive. si contredit une question négative.')),
  sent(1162, 'Non, pas encore.', 'No, not yet.', '/nɔ̃ pa.zɑ̃.kɔʁ/', 'nohⁿ pa-zahⁿ-KOR', ['reponse', 'pas-encore']),
  sent(1163, 'Moi, si.', 'I do.', '/mwa si/', 'mwa SEE', ['reponse', 'si']),
  sent(1164, 'Toi non plus, tu ne dis rien.', 'You are not saying anything either.', '/twa nɔ̃ ply ty nə di ʁjɛ̃/', 'twa nohⁿ PLÜ | tü nuh dee RYEHⁿ', ['reponse', 'non-plus']),
  sent(1165, 'Absolument pas.', 'Absolutely not.', '/ap.sɔ.ly.mɑ̃ pa/', 'ap-so-lü-mahⁿ PA', ['reponse', 'renfort']),
  phrase(1166, 'non plus', 'either, neither', '/nɔ̃ ply/', 'nohⁿ PLÜ', ['reponse', 'non-plus']),
];

/* ── ACT 10 · LE NE QUI TOMBE ───────────────────────────────────────────── *
 *  The `oral` rows are the ordinary spoken register, not errors. None of
 *  them carries `dictation`, so the learner is never asked to WRITE one. */

const FVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];

export const ACT10_ROWS: Row[] = [
  sent(1167, 'Je sais pas.', 'Dunno. (spoken)', '/ʃe pa/', 'sheh PA', ['oral', 'ne-tombe'], FVR),
  sent(1168, 'Je ne sais pas.', 'I do not know.', '/ʒə nə sɛ pa/', 'zhuh nuh seh PA', ['ecrit'], FCVDR),
  sent(1169, "C'est pas grave.", 'No big deal. (spoken)', '/sɛ pa ɡʁav/', 'seh pa GRAV', ['oral', 'ne-tombe'], FVR),
  sent(1170, "Ce n'est pas grave.", 'It does not matter.', '/sə nɛ pa ɡʁav/', 'suh neh pa GRAV', ['ecrit'], FCVDR),
  sent(1171, 'Y a personne.', 'Nobody there. (spoken)', '/ja pɛʁ.sɔn/', 'ya pehr-SONN', ['oral', 'ne-tombe'], FVR),
  sent(1172, "Il n'y a personne.", 'There is nobody there.', '/il nja pɛʁ.sɔn/', 'eel nya pehr-SONN', ['ecrit']),
  sent(1173, "J'ai rien compris.", 'I did not get a thing. (spoken)', '/ʒe ʁjɛ̃ kɔ̃.pʁi/', 'zhay ryehⁿ kohⁿ-PREE', ['oral', 'ne-tombe'], FVR),
  sent(1174, "Je n'ai rien compris.", 'I did not understand anything.', '/ʒə ne ʁjɛ̃ kɔ̃.pʁi/', 'zhuh nay ryehⁿ kohⁿ-PREE', ['ecrit'], FCVDR),
  sent(1175, 'On a plus de lait.', 'We are out of milk. (spoken)', '/ɔ̃.na ply də lɛ/', 'ohⁿ-na plü duh LEH', ['oral', 'ne-tombe', 'plus-ambigu'], FVR),
  sent(1176, 'Il vient jamais.', 'He never comes. (spoken)', '/il vjɛ̃ ʒa.mɛ/', 'eel vyehⁿ zha-MEH', ['oral', 'ne-tombe'], FVR),
  sent(1177, "À l'oral, ne tombe souvent. À l'écrit, il reste toujours.", 'In speech ne often drops. In writing it always stays.', '/a lɔ.ʁal nə tɔ̃b su.vɑ̃ a le.kʁi il ʁɛst tu.ʒuʁ/', 'a lo-RAL nuh tohⁿb soo-VAHⁿ | a lay-KREE eel rehst too-ZHOOR', ['rule', 'registre'], ['flashcard'],
    rule("Tu écris un courriel à l'agence. Écris-tu « je sais pas » ?", "Non : je ne sais pas. Le ne tombé s'entend, il ne s'écrit pas, sauf dans un texto à un ami.")),
  sent(1178, "T'inquiète pas.", 'Do not worry. (spoken)', '/tɛ̃.kjɛt pa/', 'tehⁿ-kyeht PA', ['oral', 'ne-tombe'], FVR),
  sent(1179, "Ne t'inquiète pas.", 'Do not worry.', '/nə tɛ̃.kjɛt pa/', 'nuh tehⁿ-kyeht PA', ['ecrit'], FCVDR),
  sent(1180, 'Je le trouve pas.', 'I cannot find it. (spoken)', '/ʒəl tʁuv pa/', 'zhuhl troov PA', ['oral', 'ne-tombe'], FVR),
  sent(1181, 'Je ne le trouve pas.', 'I cannot find it.', '/ʒə nə lə tʁuv pa/', 'zhuh nuh luh troov PA', ['ecrit']),
  sent(1182, 'Il y a plus de place dans le salon.', 'There is more room in the living room.', '/il ja plys də plas dɑ̃ lə sa.lɔ̃/', 'eel ya plüss duh PLASS dahⁿ luh sa-LOHⁿ', ['plus-ambigu', 'comparatif']),
];

/* ── ACT 11 · ÉCRIRE UNE PLAINTE ────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1183, 'Je ne recommande pas ce logement.', 'I do not recommend this place.', '/ʒə nə ʁə.kɔ.mɑ̃d pa sə lɔʒ.mɑ̃/', 'zhuh nuh ruh-ko-mahⁿd pa suh lozh-MAHⁿ', ['plainte'], FCVDR),
  sent(1184, "Rien ne correspondait à l'annonce.", 'Nothing matched the listing.', '/ʁjɛ̃ nə kɔ.ʁɛs.pɔ̃.dɛ a la.nɔ̃s/', 'ryehⁿ nuh ko-rehs-pohⁿ-deh a la-NOHⁿS', ['plainte', 'sujet'], FCVDR),
  sent(1185, 'Personne ne nous a accueillis.', 'Nobody welcomed us.', '/pɛʁ.sɔn nə nu.za a.kœ.ji/', 'pehr-SONN nuh noo-za a-kuh-YEE', ['plainte', 'sujet', 'compose']),
  sent(1186, "Nous n'avons eu ni chauffage ni eau chaude.", 'We had neither heating nor hot water.', '/nu na.vɔ̃.zy ni ʃo.faʒ ni o ʃod/', 'noo na-vohⁿ-zü nee sho-FAZH nee oh SHOHD', ['plainte', 'ni', 'compose'], FCVDR),
  sent(1187, "Il n'y avait qu'une seule serviette.", 'There was only one towel.', '/il nja.vɛ kyn sœl sɛʁ.vjɛt/', 'eel nya-veh künn suhl sehr-VYEHT', ['plainte', 'que']),
  sent(1188, "Le propriétaire ne s'est jamais excusé.", 'The owner never apologised.', '/lə pʁɔ.pʁi.je.tɛʁ nə sɛ ʒa.mɛ ɛk.sky.ze/', 'luh pro-pree-yay-TEHR nuh seh zha-meh ehk-skü-ZAY', ['plainte', 'jamais', 'compose'], FCVDR),
  sent(1189, "Nous n'avons obtenu aucun remboursement.", 'We did not get any refund.', '/nu na.vɔ̃.zɔp.tə.ny o.kœ̃ ʁɑ̃.buʁs.mɑ̃/', 'noo na-vohⁿ-zop-tuh-nü oh-kuhⁿ rahⁿ-boors-MAHⁿ', ['plainte', 'aucun', 'compose']),
  sent(1190, 'Je ne reviendrai plus jamais.', 'I will never come back.', '/ʒə nə ʁə.vjɛ̃.dʁɛ ply ʒa.mɛ/', 'zhuh nuh ruh-vyehⁿ-dreh plü zha-MEH', ['plainte', 'combine']),
  sent(1191, 'Je ne le conseille à personne.', 'I would not recommend it to anyone.', '/ʒə nə lə kɔ̃.sɛj a pɛʁ.sɔn/', 'zhuh nuh luh kohⁿ-sehy a pehr-SONN', ['plainte', 'personne'], FCVDR),
  sent(1192, "Je ne demande qu'une chose : un remboursement.", 'I am asking for one thing only: a refund.', '/ʒə nə də.mɑ̃d kyn ʃoz œ̃ ʁɑ̃.buʁs.mɑ̃/', 'zhuh nuh duh-mahⁿd künn SHOHZ | uhⁿ rahⁿ-boors-MAHⁿ', ['plainte', 'que']),
  sent(1193, "Le quartier n'est pas du tout calme.", 'The area is not quiet at all.', '/lə kaʁ.tje nɛ pa dy tu kalm/', 'luh kar-tyay neh pa dü too KALM', ['plainte', 'renfort']),
  sent(1194, 'Une bonne plainte dit ce qui manquait, sans crier.', 'A good complaint says what was missing, without shouting.', '/yn bɔn plɛ̃t di sə ki mɑ̃.kɛ sɑ̃ kʁi.je/', 'ünn bonn PLEHⁿT dee suh kee mahⁿ-KEH | sahⁿ kree-YAY', ['rule', 'plainte'], ['flashcard'],
    rule("Qu'est-ce qui rend une plainte efficace ?", 'Des faits précis : rien, personne, aucun, ni ... ni. Chaque négation dit ce qui manquait. Pas de gros mots.')),
  phrase(1195, 'sans aucune explication', 'without any explanation', '/sɑ̃.zo.kyn ɛk.spli.ka.sjɔ̃/', 'sahⁿ-zoh-künn ehk-splee-ka-SYOHⁿ', ['plainte', 'aucun']),
  sent(1196, "L'annonce ne mentionnait pas les travaux.", 'The listing did not mention the building work.', '/la.nɔ̃s nə mɑ̃.sjɔ.nɛ pa le tʁa.vo/', 'la-NOHⁿS nuh mahⁿ-syo-neh pa lay tra-VOH', ['plainte', 'annonce']),
  sent(1197, 'On ne nous a rien expliqué.', 'Nobody explained anything to us.', '/ɔ̃ nə nu.za ʁjɛ̃.nɛk.spli.ke/', 'ohⁿ nuh noo-za ryehⁿ-nehk-splee-KAY', ['plainte', 'rien', 'compose'], FCVDR),
  phrase(1198, 'en aucun cas', 'under no circumstances', '/ɑ̃.no.kœ̃ ka/', 'ahⁿ-noh-kuhⁿ KA', ['plainte', 'aucun', 'ecrit']),
  sent(1199, "Je n'ai reçu qu'une réponse automatique.", 'I only received an automatic reply.', '/ʒə ne ʁə.sy kyn ʁe.pɔ̃s o.to.ma.tik/', 'zhuh nay ruh-sü künn ray-pohⁿs oh-toh-ma-TEEK', ['plainte', 'que', 'compose']),
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

export const DICTEE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS AND THEIR KEYS
 *
 *  All three readings and their answer keys live here so the reading and the
 *  quiz cannot drift apart.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a guest's review of a rented flat in Québec City. About 140 words. */
export const AVIS_TEXT =
  "Deux étoiles, et je suis généreuse. L'annonce promettait un appartement calme, lumineux et tout équipé, rue Saint-Jean. À notre arrivée, personne ne nous attendait et la boîte à clés était vide. Nous avons attendu une heure dans le froid : le propriétaire ne répondait plus au téléphone. Dans la cuisine, il n'y avait rien : ni sel, ni huile, ni café. Le wifi ne marchait jamais plus de dix minutes. Il n'y avait qu'une seule serviette pour trois personnes, et aucune couverture pour le canapé-lit. Le chauffage ne fonctionnait que le soir. Nous n'avons vu le propriétaire qu'une fois, le dernier jour, et il ne s'est pas excusé. Je ne dis pas que tout était mauvais : le quartier est magnifique et la vue sur le fleuve aussi. Mais je ne reviendrai plus jamais, et je ne conseille ce logement à personne.";

/** Every negation in AVIS_TEXT, in order, by its second word. The annotation
 *  drill and the quiz are checked against this list. */
export const AVIS_NEGATIONS = [
  'personne ne', 'ne ... plus', "n'... rien", 'ni ... ni ... ni', 'ne ... jamais',
  "n'... que", 'aucune', 'ne ... que', "n'... que", 'ne ... pas', 'ne ... pas',
  'ne ... plus jamais', 'ne ... personne',
] as const;

/** Act 4: the listing, small print included. About 110 words. */
export const ANNONCE_TEXT =
  "À LOUER, VIEUX-QUÉBEC. Grand trois et demie, deuxième étage, à deux pas du Château Frontenac. L'appartement n'a ni balcon ni ascenseur, mais la vue est superbe. Aucun animal n'est accepté. Il n'y a aucune place de stationnement dans la rue en hiver : on ne se gare nulle part à moins de dix minutes à pied. Les voisins ne font guère de bruit, sauf le samedi soir. Le loyer ne comprend ni l'électricité ni internet. Le propriétaire n'accepte que les virements, jamais les chèques. Visites le mardi et le jeudi seulement. Aucune visite ne sera possible le week-end. Pour toute question, n'hésitez pas à écrire : nous répondons en vingt-quatre heures.";

/** Act 11: the model the learner imitates in the task. A complaint to the
 *  rental agency, about 128 words. */
export const PLAINTE_TEXT =
  "Madame, Monsieur, je vous écris au sujet du logement de la rue Saint-Jean, loué du 3 au 10 novembre. Rien ne correspondait à l'annonce. À notre arrivée, personne ne nous a accueillis et nous n'avons trouvé les clés nulle part. Pendant trois jours, nous n'avons eu ni chauffage ni eau chaude. Il n'y avait qu'une seule serviette pour trois personnes. J'ai appelé le propriétaire cinq fois : il n'a jamais répondu. L'annonce ne mentionnait pas les travaux dans l'immeuble, qui commençaient à sept heures. À ce jour, je n'ai reçu qu'une réponse automatique et aucun remboursement. Je ne demande qu'une chose : le remboursement des trois nuits sans chauffage. Sans réponse de votre part avant le 30 novembre, je ne recommanderai plus jamais votre agence. Veuillez agréer mes salutations distinguées.";

/** The four moves the model makes, in order, for the task checklist. */
export const PLAINTE_MOVES = [
  'le cadre : quel logement, quelles dates',
  'les faits, un par un, chacun avec sa négation précise (rien, personne, ni ... ni, que)',
  'ce qui a été fait et ce qui manque encore (jamais, aucun)',
  'une demande claire, avec ne ... que, et une conséquence',
] as const;

/** The second words, in the order the lesson meets them. The sheet prints
 *  this list and act 2's deck is built on its first four. */
export const SECOND_WORDS = [
  'pas', 'plus', 'jamais', 'rien', 'personne', 'que', 'aucun', 'ni ... ni', 'nulle part', 'guère',
] as const;
