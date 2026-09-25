// b1.22.l1 « C'est ou il est » — the authored corpus, the imports and the
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
//  WHAT THIS UNIT OWNS, AND WHAT IT CITES
// ══════════════════════════════════════════════════════════════════════════
//
//   MEASURED IN seed.json 2026-09-25, not assumed:
//
//     a1.06 « Le verbe être » OWNS THE DETERMINER TEST. Its grammarIntroduced
//       reads « a little word in front of the noun takes c'est, a bare noun or
//       an adjective takes il est » and « ce sont as the plural of c'est ».
//       Its sections s09-identity, s15-test, s16-contrast and s17-cesterrors
//       already teach c'est Marc, c'est un médecin / il est médecin, ce sont
//       mes parents and « c'est une bonne idée » (item fr.a1.metiers.274,
//       .275, .256, .259). CITED, never re-taught.
//     a1.11 « Les articles indéfinis » owns « no article after être in front
//       of a profession, and its exception after c'est » (s12-jobs).
//     a1.22 « Pays & nationalités » owns il est français / c'est un Français,
//       with the capital (s19-capital).
//     a1.12 « L'heure » owns the impersonal il of il est midi (reframe « Il
//       est says the time. À books it. »). Act 10 cites it.
//     a2.33 « Démonstratifs » owns ce / cet / cette / ces and celui / celle,
//       and names « the ce of c'est and ce sont » as a distinct impersonal
//       subject without teaching its use. Act 8 quotes its reframe.
//     a2.28 « Chez le médecin » uses « C'est difficile à expliquer » as a
//       chunk (fr.a2.symptomes.222). Act 7 turns the chunk into a rule.
//     b1.11 « Qui et que » authors « C'est moi qui ai rempli le formulaire »
//       for verb agreement after qui. Act 9 cites it and owns the CHOICE to
//       put something in relief, not the agreement.
//
//   So this lesson OWNS, act by act:
//
//     1  the whole choice as one picture: the finger and the label
//     2  il / elle for a thing, following the noun's gender, and agreement
//     3  the profession, nationality and religion ONCE AN ADJECTIVE ARRIVES
//        (c'est un bon médecin, never il est un bon médecin)
//     4  c'est + a name or moi, toi, lui, nous, eux; qui est-ce
//     5  c'est + a masculine adjective for a situation, an idea, an activity
//     6  ce sont against c'est + plural, as REGISTER (written / spoken)
//     7  il est + adj + de + inf (formal), c'est + adj + de + inf (spoken),
//        c'est / il est + adj + à + inf (pointing back)
//     8  ça, cela and ce: ce only before être
//     9  c'est ... qui, c'est ... que as mise en relief
//    10  the frozen il: il est midi, il est tard, il est temps de
//    11  a written portrait of a colleague or neighbour
//
//   NO UNGRAMMATICAL SENTENCE IS EVER A ROW. Every wrong form lives in a
//   `commonErrors.wrong`, a `trapDrill.promptSound`, a scene `break.wrong` or
//   a quiz `errorSpot.prompt`. The two `oral` rows of act 6 (« C'est mes
//   collègues ») are ordinary spoken French, tagged `oral`, carry no
//   `dictation`, and are never asked for in writing.
//
//   The subjunctive (b1.14 to b1.16) is kept out of every authored French
//   string: no « il est important que », no « c'est dommage que ».
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `description-personnes-objets` exists (« Décrire les gens et les
//     objets », domain fondations). The seed's copy says levelRange a1-a2
//     and empty subThemes. IT WAS WIDENED TO a1-b1 IN POSTGRES ON 2026-09-25,
//     with sub-themes « le portrait et le caractère », « les objets et leurs
//     qualités », « c'est ou il est ». That edit is POSTGRES ONLY until the
//     next publish carries it into the seed; `import-seed.ts` would revert
//     it. Nothing validates an item's level against its theme's range.
//  2. POSTGRES PROBED 2026-09-25 (read-only, this author): 300 rows, a1 180
//     (max .180) and a2 120 (max .120), ZERO `fr.b1`, nothing at or above
//     1000. AUTHORED IDS THEREFORE START AT 1000.
//  3. ID BLOCK: b1.22 owns `fr.b1.description-personnes-objets.1000`-`.1199`
//     AND NOTHING ELSE. Used here: `.1000`-`.1191`, 192 rows, in eleven act
//     blocks. Compare full ids, never numbers: the level is part of the id.
//  4. THE SEED CARRIES 10 ROWS OF THIS THEME (4 a1, 6 a2), all il / elle est
//     + adjective, all dictation-only except two. The on-topic rows the seed
//     carries elsewhere were probed over every a1-b1 item on 2026-09-25 and
//     the useful ones are in §F, their French copied verbatim through
//     `src()`.
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN FOR THE EAR:
//       une / une personne   ÜNN, tünn     (a real /n/ after a single n)
//       musulmane            mü-zül-MANN   (a real /n/)
//       humaines             sü-MENN       (a real /n/)
//     Everything else is spelled for the ear: personne SONN and comme komm
//     carry a double consonant in the source. j'aime is `zhem`, which the
//     checker clears from the « aime » spelling. NAMES were chosen so that
//     no respelling closes a vowel on a plain n or m (Hugo, Aïcha, Chloé,
//     Moussa, Julie Côté, Madame Pelletier, Monsieur Roy). No U+203F tie
//     anywhere, in a respelling or in an IPA field.
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
  id: 'b1.22',
  seq: 22,
  title: "C'est or Il est",
  sub: "C'est ou il est",
  canDo: "Can choose between c'est and il / elle est when describing people, objects and situations: il / elle for a noun already named, c'est for a name, a pronoun, a determiner, a situation or an idea; il est + adjective + de in writing and c'est + adjective + à when pointing back; ce sont in writing; c'est ... qui / que for emphasis; and can write a short portrait of a colleague or neighbour",
  prereqUnitIds: ['a1.06', 'a1.11', 'a2.33'],
} as const;

export const LESSON_ID = 'b1.22.l1';
export const THEME = 'description-personnes-objets';
export const LEVEL = 'b1' as const;

/** ONE block. DB holds a1 .001-.180 and a2 .001-.120 in this theme; b1.22 owns 1000-1199. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A1 and A2 citations use the house English trail label (« lesson 10 in
 *  A1 »), resolved through `unitRef` from the shipped `unit.seq`, never typed
 *  and never the raw id. b1.* units are not in the seed yet, so they are
 *  labelled in French from the plan until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const ETRE_UNIT = 'a1.06';
export const ARTICLES_UNIT = 'a1.11';
export const HEURE_UNIT = 'a1.12';
export const PAYS_UNIT = 'a1.22';
export const ACCORD_UNIT = 'a2.03';
export const MEDECIN_UNIT = 'a2.28';
export const DEMONSTRATIFS_UNIT = 'a2.33';
export const QUI_QUE_UNIT = 'b1.11';
export const NEGATION_AV_UNIT = 'b1.20';
export const TOUT_UNIT = 'b1.23';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
  'b1.19': 19, 'b1.20': 20, 'b1.21': 21, 'b1.22': 22, 'b1.23': 23,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const ETRE_REF = unitRef(ETRE_UNIT);
export const ARTICLES_REF = unitRef(ARTICLES_UNIT);
export const HEURE_REF = unitRef(HEURE_UNIT);
export const PAYS_REF = unitRef(PAYS_UNIT);
export const MEDECIN_REF = unitRef(MEDECIN_UNIT);
export const DEMONSTRATIFS_REF = unitRef(DEMONSTRATIFS_UNIT);
export const QUI_QUE_REF = refFr(QUI_QUE_UNIT);
export const TOUT_REF = refFr(TOUT_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  The A1 and A2 lines are English (A1 and A2 are taught in English) and
 *  every screen that shows one follows it with the French rendering below.
 *  b1.11's line is already French and is quoted as it stands.
 *
 *  a1.06's determiner test is not a reframe (its reframe is about the six
 *  forms of être), so it is quoted from its grammarIntroduced wording.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as A112_REFRAME } from '../heure-terms.ts';
export { REFRAME as A233_REFRAME } from '../demonstratifs-corpus.ts';
export { REFRAME as B111_REFRAME } from './qui-que-corpus.ts';

export const A106_TEST = "A little word in front of the noun takes c'est; a bare noun or an adjective takes il est.";
export const A106_TEST_FR = "Un petit mot devant le nom : c'est. Rien devant, ou un adjectif : il est.";
export const A112_REFRAME_FR = "Il est donne l'heure. À la fixe.";
export const A233_REFRAME_FR = 'Un nom après : il montre. Pas de nom : il remplace.';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE FINGER AND THE LABEL. C'est points at something: a name, a person, a
 *  whole scene, a noun with its little word, the thing you want to stress.
 *  Il est (elle est, ils sont) sticks a label on something ALREADY pointed
 *  at: a noun already named, whose gender the pronoun inherits.
 *
 *  Where it holds and a1.06's test does not reach: « C'est beau » points at
 *  a whole view (no noun, so no gender, so the masculine), « Elle est belle »
 *  labels la robe. « C'est un bon médecin » points at a man as a kind of
 *  doctor; « il est médecin » labels him. « C'est Aïcha qui a appelé » is
 *  the finger at its strongest. « Il est difficile de trouver un logement »
 *  is a label hung BEFORE the thing it labels, which is exactly why it is
 *  the formal written form; speech points instead (c'est difficile de).
 *  The one place the picture rests is the frozen il of il est midi, which
 *  a1.12 owns as a fixed frame and act 10 cites as one.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "C'est montre du doigt. Il est colle une étiquette.";
export const REFRAME_EN = "C'est points a finger. Il est sticks on a label.";

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: "Un petit mot devant le nom : c'est. Rien devant : il est.",
    why: "a1.06's determiner test, already taught and quoted in act 1. It is a test, not a picture, and it goes silent exactly where B1 starts: « c'est beau » and « il est difficile de » have no noun at all to look in front of.",
  },
  {
    text: "C'est pour les choses, il est pour les personnes.",
    why: "False on both sides from the first minute: « Il est rouge » is an umbrella (act 1), « C'est Aïcha » is a person (act 4). It is the instinct act 2 is built to break.",
  },
  {
    text: "C'est à l'oral, il est à l'écrit.",
    why: "True only for adjective + de + infinitive (act 7). « Il est Marc » is wrong in every register, and « elle est belle » is as spoken as it gets.",
  },
  {
    text: "C'est avec un nom, il est avec un adjectif.",
    why: "Fails on « c'est beau » (an adjective, and c'est) and on « il est médecin » (a noun, and il est). It is a1.06's test with the exceptions left in.",
  },
  {
    text: "C'est parle de tout, il est parle de lui.",
    why: "Close, and the label picture says it better: « lui » misleads for objects, which take il or elle by the noun's gender, not by being a person (act 2).",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-25 and its French is in the
 *  trailing comment, so a reader never has to open seed.json. `named only`
 *  rows carry no `flashcard` drill, so no deckTranche can release them.
 *  `NOT_SPEAKABLE` additionally lists the rows with no `voiceflash`, which a
 *  `practice` speak section may never name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a1.metiers.274',               // C'est un médecin.           (a1.06)
    'fr.a1.metiers.275',               // Il est médecin.             (a1.06)
    'fr.a1.metiers.256',               // C'est Marc.                 (a1.06)
  ],
  act2: [
    'fr.a2.adjectifs-essentiels.022',  // Elle est généreuse.
    'fr.a2.adjectifs-essentiels.032',  // Elle est sérieuse, votre colocataire ?
    'fr.a1.description-personnes-objets.041', // La table est grande.  (named only)
  ],
  act3: [
    'fr.a1.pays-et-nationalites.316',  // Il est canadien.            (a1.22)
    'fr.a1.pays-et-nationalites.317',  // Elle est canadienne.        (a1.22)
    'fr.a1.metiers.261',               // Elle est infirmière.
    'fr.a1.metiers.247',               // C'est un professeur.        (a1.11, a1.06)
  ],
  act4: [
    'fr.a2.rp-etiquette.002',          // c'est moi-même
  ],
  act5: [
    'fr.a1.marche.094',                // C'est trop cher.
    'fr.a1.adjectifs-essentiels.020',  // C'est une mauvaise idée.    (named only)
  ],
  act6: [
    'fr.a1.metiers.259',               // Ce sont mes parents.        (a1.06)
    'fr.a2.pronoms-essentiels.370',    // Ce sont mes clés.
    'fr.a1.adjectifs-essentiels.212',  // Ce sont de vieux amis.
  ],
  act7: [
    'fr.a2.symptomes.222',             // C'est difficile à expliquer.  (a2.28)
    'fr.b1.droit.002',                 // Il est interdit de stationner ici sans autorisation.
  ],
  act8: [
    'fr.a2.courses.177',               // Ça fait combien ?
    'fr.a2.internet.202',              // Ça fait deux jours que ça ne marche plus.
  ],
  act9: [
    'fr.b1.maison.059',                // C'est le locataire qui doit payer les petites réparations.  (named only)
    'fr.b1.heure-et-date.058',         // C'est à neuf heures précises que la réunion commence.  (named only)
  ],
  act10: [
    'fr.a1.temps-et-frequence.052',    // Il est midi.                (a1.12, named only)
    'fr.b1.heure-et-date.047',         // Il est grand temps de faire une pause.
  ],
  act11: [
    'fr.a1.questions.388',             // Il est très gentil.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a1.description-personnes-objets.041', // dictation
  'fr.a1.adjectifs-essentiels.020',         // dictation
  'fr.b1.maison.059',                       // dictation
  'fr.b1.heure-et-date.058',                // dictation
  'fr.a1.temps-et-frequence.052',           // sentence
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a1.metiers.247',                // sentence, flashcard, review
  'fr.a1.adjectifs-essentiels.212',   // sentence, flashcard, review
  'fr.b1.droit.002',                  // sentence, flashcard, review
  'fr.b1.heure-et-date.047',          // flashcard, sentence
];

/** Published rows this corpus is known to twin, from the 2026-09-25 probe.
 *  Not nameable today (DB-only). Decide at import: dedupe or keep both. */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [
  { dbId: 'fr.a2.description-personnes-objets.062', fr: "C'est un homme qui porte toujours un chapeau.", twin: E(1180) },
  { dbId: 'fr.a2.description-personnes-objets.068', fr: 'Elle est optimiste, même quand la journée est difficile.', twin: E(1179) },
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
  tags, drills, version: 1, grammarPoints: ['cest-il-est'], ...extra,
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

/* ── ACT 1 · AU BUREAU DES OBJETS TROUVÉS ───────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, "C'est ma valise.", 'That is my suitcase.', '/sɛ ma va.liz/', 'seh ma va-LEEZ', ['doigt', 'objet'], FCVDR),
  sent(1001, 'Elle est bleue et très lourde.', 'It is blue and very heavy.', '/ɛ.lɛ blø e tʁɛ luʁd/', 'eh-leh BLEU ay treh LOORD', ['etiquette', 'objet']),
  sent(1002, "C'est vraiment embêtant.", 'It is really annoying.', '/sɛ vʁɛ.mɑ̃ ɑ̃.bɛ.tɑ̃/', 'seh vreh-mahⁿ ahⁿ-beh-TAHⁿ', ['situation'], FCVDR),
  sent(1003, "C'est un sac à dos noir.", 'It is a black backpack.', '/sɛ.tœ̃ sak a do nwaʁ/', 'seh-tuhⁿ sak a doh NWAR', ['doigt', 'objet'], FCVDR),
  sent(1004, 'Il est neuf, mais il est un peu sale.', 'It is new, but it is a bit dirty.', '/i.lɛ nœf mɛ i.lɛ.tœ̃ pø sal/', 'ee-leh NUHF | meh ee-leh-tuhⁿ peu SAL', ['etiquette', 'objet']),
  sent(1005, "C'est Madame Pelletier, au comptoir.", 'That is Madame Pelletier, at the counter.', '/sɛ ma.dam pɛl.tje o kɔ̃.twaʁ/', 'seh ma-dam pehl-TYAY | oh kohⁿ-TWAR', ['doigt', 'nom-propre']),
  sent(1006, 'Elle est patiente et très polie.', 'She is patient and very polite.', '/ɛ.lɛ pa.sjɑ̃t e tʁɛ pɔ.li/', 'eh-leh pa-SYAHⁿT ay treh po-LEE', ['etiquette', 'personne']),
  sent(1007, REFRAME, REFRAME_EN, '/sɛ mɔ̃tʁ dy dwa il ɛ kɔl y.ne.ti.kɛt/', 'SEH mohⁿtr dü DWA | eel EH kol ü-nay-tee-KEHT', ['rule', 'reframe'], ['flashcard'],
    rule("« C'est ma valise » et « elle est lourde » : qui montre, et qui décrit ?", "c'est montre la valise du doigt. elle est colle une étiquette, lourde, sur la valise déjà montrée.")),
  phrase(1008, "Qu'est-ce que c'est ?", 'What is it?', '/kɛs.kə sɛ/', 'kehs-kuh SEH', ['doigt', 'question']),
  sent(1009, "C'est quoi, exactement ?", 'What is it, exactly?', '/sɛ kwa ɛɡ.zak.tə.mɑ̃/', 'seh KWA | ehg-zak-tuh-MAHⁿ', ['doigt', 'question', 'oral']),
  sent(1010, "C'est un parapluie.", 'It is an umbrella.', '/sɛ.tœ̃ pa.ʁa.plɥi/', 'seh-tuhⁿ pa-ra-PLWEE', ['doigt', 'objet'], FCVDR),
  sent(1011, 'Il est rouge, avec un manche en bois.', 'It is red, with a wooden handle.', '/i.lɛ ʁuʒ a.vɛ.kœ̃ mɑ̃ʃ ɑ̃ bwa/', 'ee-leh ROOZH | a-veh-kuhⁿ mahⁿsh ahⁿ BWA', ['etiquette', 'objet']),
  sent(1012, 'Ce sont des clés de voiture.', 'Those are car keys.', '/sə sɔ̃ de kle də vwa.tyʁ/', 'suh sohⁿ day klay duh vwa-TÜR', ['doigt', 'pluriel']),
  sent(1013, 'Elles sont sur un porte-clés rouge.', 'They are on a red key ring.', '/ɛl sɔ̃ sy.ʁœ̃ pɔʁt.kle ʁuʒ/', 'ehl sohⁿ sü-ruhⁿ port-klay ROOZH', ['etiquette', 'pluriel']),
  sent(1014, "C'est très gentil de votre part.", 'That is very kind of you.', '/sɛ tʁɛ ʒɑ̃.ti də vɔ.tʁə paʁ/', 'seh treh zhahⁿ-TEE duh vo-truh PAR', ['situation'], FCVDR),
  sent(1015, 'Il est à qui, ce sac ?', 'Whose bag is this?', '/i.lɛ.ta ki sə sak/', 'ee-leh-ta KEE | suh SAK', ['etiquette', 'question']),
];

/* ── ACT 2 · IL EST, ELLE EST : L'ÉTIQUETTE ─────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1016, 'Mon manteau ? Il est gris.', 'My coat? It is grey.', '/mɔ̃ mɑ̃.to i.lɛ ɡʁi/', 'mohⁿ mahⁿ-TOH | ee-leh GREE', ['etiquette', 'objet', 'genre']),
  sent(1017, 'Ma veste ? Elle est grise.', 'My jacket? It is grey.', '/ma vɛst ɛ.lɛ ɡʁiz/', 'ma VEHST | eh-leh GREEZ', ['etiquette', 'objet', 'genre'], FCVDR),
  sent(1018, 'La nouvelle collègue ? Elle est très drôle.', 'The new colleague? She is very funny.', '/la nu.vɛl kɔ.lɛɡ ɛ.lɛ tʁɛ dʁol/', 'la noo-vehl ko-LEHG | eh-leh treh DROHL', ['etiquette', 'personne']),
  sent(1019, 'Ton frère ? Il est grand et timide.', 'Your brother? He is tall and shy.', '/tɔ̃ fʁɛʁ i.lɛ ɡʁɑ̃ e ti.mid/', 'tohⁿ FREHR | ee-leh grahⁿ ay tee-MEED', ['etiquette', 'personne']),
  sent(1020, 'La chambre est petite, mais elle est calme.', 'The room is small, but it is quiet.', '/la ʃɑ̃bʁ ɛ pə.tit mɛ ɛ.lɛ kalm/', 'la SHAHⁿBR eh puh-TEET | meh eh-leh KALM', ['etiquette', 'objet', 'genre'], FCVDR),
  sent(1021, 'Les chaises sont neuves. Elles sont confortables.', 'The chairs are new. They are comfortable.', '/le ʃɛz sɔ̃ nœv ɛl sɔ̃ kɔ̃.fɔʁ.tabl/', 'lay SHEHZ sohⁿ NUHV | ehl sohⁿ kohⁿ-for-TABL', ['etiquette', 'pluriel']),
  sent(1022, 'Mes voisins ? Ils sont très sympathiques.', 'My neighbours? They are very friendly.', '/me vwa.zɛ̃ il sɔ̃ tʁɛ sɛ̃.pa.tik/', 'may vwa-ZEHⁿ | eel sohⁿ treh sehⁿ-pa-TEEK', ['etiquette', 'pluriel'], FCVDR),
  sent(1023, 'Il ou elle suit le nom, pas la chose.', 'Il or elle follows the noun, not the thing.', '/il u ɛl sɥi lə nɔ̃ pa la ʃoz/', 'EEL oo EHL swee luh NOHⁿ | pa la SHOHZ', ['rule', 'genre'], ['flashcard'],
    rule('« Ma voiture ? ... est rouge. » Il ou elle ?', "elle : voiture est féminin. Pour un objet, il et elle suivent le genre du nom, pas la chose elle-même.")),
  sent(1024, 'Cette table ? Elle est en bois.', 'This table? It is made of wood.', '/sɛt tabl ɛ.lɛ.tɑ̃ bwa/', 'seht TABL | eh-leh-tahⁿ BWA', ['etiquette', 'objet', 'genre']),
  sent(1025, 'Le bureau est grand, et il est bien éclairé.', 'The office is big, and it is well lit.', '/lə by.ʁo ɛ ɡʁɑ̃ e i.lɛ bjɛ̃.ne.klɛ.ʁe/', 'luh bü-ROH eh GRAHⁿ | ay ee-leh byehⁿ-nay-kleh-RAY', ['etiquette', 'objet']),
  sent(1026, 'Mon ordinateur ? Il est lent.', 'My computer? It is slow.', '/mɔ̃.nɔʁ.di.na.tœʁ i.lɛ lɑ̃/', 'mohⁿ-nor-dee-na-TUHR | ee-leh LAHⁿ', ['etiquette', 'objet', 'genre'], FCVDR),
  sent(1027, 'Ta tante ? Elle est gentille et généreuse.', 'Your aunt? She is kind and generous.', '/ta tɑ̃t ɛ.lɛ ʒɑ̃.tij e ʒe.ne.ʁøz/', 'ta TAHⁿT | eh-leh zhahⁿ-TEEY ay zhay-nay-REUZ', ['etiquette', 'personne']),
  sent(1028, 'Il est comment, ton nouveau chef ?', 'What is your new boss like?', '/i.lɛ kɔ.mɑ̃ tɔ̃ nu.vo ʃɛf/', 'ee-leh ko-MAHⁿ | tohⁿ noo-voh SHEHF', ['etiquette', 'question', 'personne']),
  sent(1029, 'Il est sérieux, mais il est juste.', 'He is serious, but he is fair.', '/i.lɛ se.ʁjø mɛ i.lɛ ʒyst/', 'ee-leh say-RYEU | meh ee-leh ZHÜST', ['etiquette', 'personne'], FCVDR),
  sent(1030, 'La soupe ? Elle est trop chaude.', 'The soup? It is too hot.', '/la sup ɛ.lɛ tʁo ʃod/', 'la SOOP | eh-leh troh SHOHD', ['etiquette', 'objet', 'genre']),
  sent(1031, 'Ces fleurs ? Elles sont pour toi.', 'These flowers? They are for you.', '/se flœʁ ɛl sɔ̃ puʁ twa/', 'say FLUHR | ehl sohⁿ poor TWA', ['etiquette', 'pluriel']),
  phrase(1032, 'il est, elle est', 'he is, she is, it is', '/i.lɛ ɛ.lɛ/', 'ee-LEH, eh-LEH', ['etiquette']),
  sent(1033, 'Ma valise ? Elle est à la consigne.', 'My suitcase? It is at the left-luggage office.', '/ma va.liz ɛ.lɛ.ta la kɔ̃.siɲ/', 'ma va-LEEZ | eh-leh-ta la kohⁿ-SEENY', ['etiquette', 'objet', 'genre'], FCVR,
    gap('Ma valise ? ___ est à la consigne.', 'Elle : valise est féminin, donc elle, même pour un objet.')),
];

/* ── ACT 3 · LE MÉTIER, LA NATIONALITÉ, LA RELIGION ─────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1034, 'Il est ingénieur.', 'He is an engineer.', '/i.lɛ.tɛ̃.ʒe.njœʁ/', 'ee-leh-tehⁿ-zhay-NYUHR', ['metier', 'etiquette']),
  sent(1035, "C'est un ingénieur très doué.", 'He is a very gifted engineer.', '/sɛ.tœ̃.nɛ̃.ʒe.njœʁ tʁɛ dwe/', 'seh-tuhⁿ-nehⁿ-zhay-NYUHR treh DWAY', ['metier', 'doigt', 'adjectif'], FCVDR),
  sent(1036, 'Elle est comptable.', 'She is an accountant.', '/ɛ.lɛ kɔ̃.tabl/', 'eh-leh kohⁿ-TABL', ['metier', 'etiquette']),
  sent(1037, "C'est une excellente comptable.", 'She is an excellent accountant.', '/sɛ.ty.nɛk.sɛ.lɑ̃t kɔ̃.tabl/', 'seh-tü-nehk-seh-lahⁿt kohⁿ-TABL', ['metier', 'doigt', 'adjectif'], FCVDR),
  sent(1038, 'Il est québécois.', 'He is Québécois.', '/i.lɛ ke.be.kwa/', 'ee-leh kay-bay-KWA', ['nationalite', 'etiquette']),
  sent(1039, "C'est un Québécois de Rimouski.", 'He is a Québécois from Rimouski.', '/sɛ.tœ̃ ke.be.kwa də ʁi.mus.ki/', 'seh-tuhⁿ kay-bay-KWA duh ree-moos-KEE', ['nationalite', 'doigt']),
  sent(1040, 'Elle est sénégalaise.', 'She is Senegalese.', '/ɛ.lɛ se.ne.ɡa.lɛz/', 'eh-leh say-nay-ga-LEHZ', ['nationalite', 'etiquette'], FCVDR),
  sent(1041, "C'est une Sénégalaise.", 'She is a Senegalese woman.', '/sɛ.tyn se.ne.ɡa.lɛz/', 'seh-tünn say-nay-ga-LEHZ', ['nationalite', 'doigt']),
  sent(1042, 'Il est catholique, elle est musulmane.', 'He is Catholic, she is Muslim.', '/i.lɛ ka.tɔ.lik ɛ.lɛ my.zyl.man/', 'ee-leh ka-to-LEEK | eh-leh mü-zül-MANN', ['religion', 'etiquette']),
  sent(1043, 'Un adjectif en plus, et le métier reprend un article.', 'Add an adjective, and the job takes an article again.', '/œ̃.nad.ʒɛk.tif ɑ̃ plys e lə me.tje ʁə.pʁɑ̃ œ̃.naʁ.tikl/', 'uhⁿ-nad-zhehk-TEEF ahⁿ PLÜSS | ay luh may-TYAY ruh-prahⁿ uhⁿ-nar-TEEKL', ['rule', 'metier'], ['flashcard'],
    rule("« Il est médecin », et s'il est excellent ?", "C'est un excellent médecin. Avec un adjectif, le métier redevient un nom qu'on montre : c'est un, jamais il est un.")),
  sent(1044, 'Mon père est boulanger.', 'My father is a baker.', '/mɔ̃ pɛʁ ɛ bu.lɑ̃.ʒe/', 'mohⁿ PEHR eh boo-lahⁿ-ZHAY', ['metier', 'etiquette']),
  sent(1045, "C'est le boulanger du quartier.", 'He is the neighbourhood baker.', '/sɛ lə bu.lɑ̃.ʒe dy kaʁ.tje/', 'seh luh boo-lahⁿ-zhay dü kar-TYAY', ['metier', 'doigt'], FCVDR),
  sent(1046, 'Elle est devenue infirmière.', 'She became a nurse.', '/ɛl ɛ dəv.ny ɛ̃.fiʁ.mjɛʁ/', 'ehl eh duhv-nü ehⁿ-feer-MYEHR', ['metier', 'etiquette']),
  sent(1047, "C'est une infirmière qui travaille la nuit.", 'She is a nurse who works nights.', '/sɛ.ty.nɛ̃.fiʁ.mjɛʁ ki tʁa.vaj la nɥi/', 'seh-tü-nehⁿ-feer-MYEHR kee tra-vahy la NWEE', ['metier', 'doigt']),
  sent(1048, 'Il est marié et père de deux enfants.', 'He is married, with two children.', '/i.lɛ ma.ʁje e pɛʁ də dø.zɑ̃.fɑ̃/', 'ee-leh ma-RYAY | ay pehr duh deu-zahⁿ-FAHⁿ', ['etiquette', 'personne']),
  sent(1049, "C'est un collègue, il est graphiste.", 'He is a colleague, he is a graphic designer.', '/sɛ.tœ̃ kɔ.lɛɡ i.lɛ ɡʁa.fist/', 'seh-tuhⁿ ko-LEHG | ee-leh gra-FEEST', ['metier', 'doigt', 'etiquette'], FCVDR),
  sent(1050, 'Elle est bénévole à la bibliothèque.', 'She volunteers at the library.', '/ɛ.lɛ be.ne.vɔl a la bi.bli.jɔ.tɛk/', 'eh-leh bay-nay-VOL | a la bee-blee-yo-TEHK', ['metier', 'etiquette']),
  sent(1051, "C'est un bon médecin.", 'He is a good doctor.', '/sɛ.tœ̃ bɔ̃ med.sɛ̃/', 'seh-tuhⁿ bohⁿ mayd-SEHⁿ', ['metier', 'doigt', 'adjectif'], FCVR,
    gap('___ un bon médecin. (he is)', "C'est : avec bon, le métier redevient un nom qu'on montre. Il est un bon médecin ne se dit pas.")),
];

/* ── ACT 4 · C'EST MARIE, C'EST MOI ─────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1052, "C'est Aïcha, de la comptabilité.", 'This is Aïcha, from accounts.', '/sɛ a.i.ʃa də la kɔ̃.ta.bi.li.te/', 'seh a-ee-SHA | duh la kohⁿ-ta-bee-lee-TAY', ['nom-propre', 'doigt'], FCVDR),
  sent(1053, "C'est moi.", "It's me.", '/sɛ mwa/', 'seh MWA', ['tonique', 'doigt'], FCVDR),
  sent(1054, "C'est toi, Hugo ?", 'Is that you, Hugo?', '/sɛ twa y.ɡo/', 'seh TWA | ü-GOH', ['tonique', 'question']),
  sent(1055, "Oui, c'est lui.", "Yes, that's him.", '/wi sɛ lɥi/', 'WEE | seh LWEE', ['tonique']),
  sent(1056, "C'est nous, on arrive.", "It's us, we're on our way.", '/sɛ nu ɔ̃.na.ʁiv/', 'seh NOO | ohⁿ-na-REEV', ['tonique'], FCVDR),
  sent(1057, 'Ce sont eux, les nouveaux voisins.', "That's them, the new neighbours.", '/sə sɔ̃.tø le nu.vo vwa.zɛ̃/', 'suh sohⁿ-TEU | lay noo-voh vwa-ZEHⁿ', ['tonique', 'pluriel']),
  sent(1058, "C'est eux, là-bas.", "That's them, over there.", '/sɛ.tø la.ba/', 'seh-TEU | la-BA', ['tonique', 'pluriel', 'oral']),
  sent(1059, "C'est Monsieur Roy, notre directeur.", 'This is Mr Roy, our director.', '/sɛ mə.sjø ʁwa nɔ.tʁə di.ʁɛk.tœʁ/', 'seh muh-syeu RWA | no-truh dee-rehk-TUHR', ['nom-propre', 'metier'], FCVDR),
  sent(1060, "Un nom propre, ou moi, toi, lui : c'est.", "A name, or moi, toi, lui: c'est.", '/œ̃ nɔ̃ pʁɔpʁ u mwa twa lɥi sɛ/', 'uhⁿ nohⁿ PROPR | oo MWA TWA LWEE | SEH', ['rule', 'tonique'], ['flashcard'],
    rule("On sonne. Tu réponds à l'interphone : « ... moi. »", "C'est moi. Un nom ou un pronom comme moi est déjà précis : on le montre, on ne le décrit pas. Il est moi ne se dit pas.")),
  sent(1061, "Qui est à l'appareil ?", 'Who is speaking?', '/ki ɛ.ta la.pa.ʁɛj/', 'kee eh-ta la-pa-REHY', ['question', 'telephone']),
  sent(1062, "C'est Julie Côté, des ressources humaines.", 'This is Julie Côté, from human resources.', '/sɛ ʒy.li ko.te de ʁə.suʁ.sy.mɛn/', 'seh zhü-lee koh-TAY | day ruh-soor-sü-MENN', ['nom-propre', 'telephone'], FCVDR),
  sent(1063, "C'est vous, Madame Pelletier ?", 'Is that you, Madame Pelletier?', '/sɛ vu ma.dam pɛl.tje/', 'seh VOO | ma-dam pehl-TYAY', ['tonique', 'question']),
  sent(1064, "Ah, c'est elle, ta cousine.", "Oh, so that's her, your cousin.", '/a sɛ.tɛl ta ku.zin/', 'A | seh-TEHL | ta koo-ZEEN', ['tonique']),
  phrase(1065, "c'est moi, c'est toi", "it's me, it's you", '/sɛ mwa sɛ twa/', 'seh MWA, seh TWA', ['tonique']),
  sent(1066, "Ce n'est pas moi, c'est Hugo.", "It's not me, it's Hugo.", '/sə nɛ pa mwa sɛ.ty.ɡo/', 'suh neh pa MWA | seh-tü-GOH', ['tonique', 'nom-propre'], FCVDR),
  sent(1067, "C'est Chloé, une amie d'enfance.", 'This is Chloé, a childhood friend.', '/sɛ klɔ.e y.na.mi dɑ̃.fɑ̃s/', 'seh klo-AY | ü-na-mee dahⁿ-FAHⁿS', ['nom-propre', 'doigt'], FCVR,
    gap("___ Chloé, une amie d'enfance.", "C'est : devant un prénom, on montre. Elle est Chloé ne se dit pas.")),
];

/* ── ACT 5 · C'EST BEAU : LA SITUATION ──────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1068, "C'est beau, Québec en hiver.", 'Québec in winter is beautiful.', '/sɛ bo ke.bɛk ɑ̃.ni.vɛʁ/', 'seh BOH | kay-behk ahⁿ-nee-VEHR', ['situation', 'quebec'], FCVDR),
  sent(1069, 'La vue est belle. Elle est magnifique.', 'The view is beautiful. It is magnificent.', '/la vy ɛ bɛl ɛ.lɛ ma.ɲi.fik/', 'la VÜ eh BEHL | eh-leh ma-nyee-FEEK', ['etiquette', 'genre']),
  sent(1070, "C'est difficile, un déménagement.", 'Moving house is hard.', '/sɛ di.fi.sil œ̃ de.me.naʒ.mɑ̃/', 'seh dee-fee-SEEL | uhⁿ day-may-nazh-MAHⁿ', ['situation'], FCVDR),
  sent(1071, 'Cette question est difficile.', 'This question is hard.', '/sɛt kɛs.tjɔ̃ ɛ di.fi.sil/', 'seht kehs-TYOHⁿ eh dee-fee-SEEL', ['etiquette', 'genre']),
  sent(1072, "C'est cher, la vie à Genève.", 'Life in Geneva is expensive.', '/sɛ ʃɛʁ la vi a ʒə.nɛv/', 'seh SHEHR | la VEE a zhuh-NEHV', ['situation', 'suisse']),
  sent(1073, "C'est génial.", "That's great.", '/sɛ ʒe.njal/', 'seh zhay-NYAL', ['situation'], FCVDR),
  sent(1074, "C'est dommage.", "That's a shame.", '/sɛ dɔ.maʒ/', 'seh do-MAZH', ['situation']),
  sent(1075, "C'est vrai.", "That's true.", '/sɛ vʁɛ/', 'seh VREH', ['situation']),
  sent(1076, "Pour une situation, c'est et un adjectif au masculin.", "For a situation, c'est plus a masculine adjective.", '/puʁ y.ne.si.tɥa.sjɔ̃ sɛ e œ̃.nad.ʒɛk.tif o mas.ky.lɛ̃/', 'poor ü-nay-see-twa-SYOHⁿ | SEH ay uhⁿ-nad-zhehk-TEEF oh mas-kü-LEHⁿ', ['rule', 'situation'], ['flashcard'],
    rule("Tu parles de la vie à Montréal en général. « Elle est chère » ou « c'est cher » ?", "C'est cher. Tu montres une situation entière, pas un nom : l'adjectif reste au masculin.")),
  sent(1077, 'La robe est jolie. Elle est un peu chère.', 'The dress is pretty. It is a bit expensive.', '/la ʁɔb ɛ ʒɔ.li ɛ.lɛ.tœ̃ pø ʃɛʁ/', 'la ROB eh zho-LEE | eh-leh-tuhⁿ peu SHEHR', ['etiquette', 'genre']),
  sent(1078, "Travailler de nuit, c'est fatigant.", 'Working nights is tiring.', '/tʁa.va.je də nɥi sɛ fa.ti.ɡɑ̃/', 'tra-va-yay duh NWEE | seh fa-tee-GAHⁿ', ['situation', 'activite'], FCVDR),
  sent(1079, "La ville est grande, mais c'est agréable.", "The city is big, but it's pleasant.", '/la vil ɛ ɡʁɑ̃d mɛ sɛ.ta.ɡʁe.abl/', 'la VEEL eh GRAHⁿD | meh seh-ta-gray-ABL', ['situation', 'etiquette']),
  sent(1080, "Ta proposition ? C'est une bonne idée.", "Your suggestion? It's a good idea.", '/ta pʁɔ.pɔ.zi.sjɔ̃ sɛ.tyn bɔ.ni.de/', 'ta pro-po-zee-SYOHⁿ | seh-tünn bo-nee-DAY', ['situation', 'idee']),
  sent(1081, "Ah, c'est gentil.", "Oh, that's kind.", '/a sɛ ʒɑ̃.ti/', 'A | seh zhahⁿ-TEE', ['situation']),
  sent(1082, "C'est normal.", "That's to be expected.", '/sɛ nɔʁ.mal/', 'seh nor-MAL', ['situation']),
  sent(1083, "C'est compliqué.", "It's complicated.", '/sɛ kɔ̃.pli.ke/', 'seh kohⁿ-plee-KAY', ['situation'], FCVDR),
  sent(1084, "La réunion était longue. C'était ennuyeux.", 'The meeting was long. It was boring.', '/la ʁe.y.njɔ̃ e.tɛ lɔ̃ɡ se.tɛ.tɑ̃.nɥi.jø/', 'la ray-ü-NYOHⁿ ay-teh LOHⁿG | say-teh-tahⁿ-nwee-YEU', ['situation', 'passe']),
  sent(1085, "C'est beau, ici.", "It's beautiful here.", '/sɛ bo i.si/', 'seh BOH | ee-SEE', ['situation'], FCVR,
    gap('Tu regardes le fleuve au coucher du soleil. « ___, ici. »', "C'est beau : tu montres tout le paysage. L'adjectif reste au masculin.")),
];

/* ── ACT 6 · CE SONT, OU C'EST À L'ORAL ─────────────────────────────────── *
 *  The two `oral` rows are ordinary spoken French, not errors. Neither
 *  carries `dictation`, so the learner is never asked to WRITE one. */

const FVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];

export const ACT6_ROWS: Row[] = [
  sent(1086, 'Ce sont mes collègues.', 'These are my colleagues.', '/sə sɔ̃ me kɔ.lɛɡ/', 'suh sohⁿ may ko-LEHG', ['pluriel', 'ecrit'], FCVDR),
  sent(1087, "C'est mes collègues.", 'These are my colleagues. (spoken)', '/sɛ me kɔ.lɛɡ/', 'seh may ko-LEHG', ['pluriel', 'oral'], FVR),
  sent(1088, 'Ce sont des amis de Dakar.', 'They are friends from Dakar.', '/sə sɔ̃ de.za.mi də da.kaʁ/', 'suh sohⁿ day-za-MEE duh da-KAR', ['pluriel', 'ecrit'], FCVDR),
  sent(1089, 'Ce ne sont pas mes affaires.', 'Those are not my things.', '/sə nə sɔ̃ pa me.za.fɛʁ/', 'suh nuh sohⁿ pa may-za-FEHR', ['pluriel', 'negation']),
  sent(1090, 'Ce sont des gens très accueillants.', 'They are very welcoming people.', '/sə sɔ̃ de ʒɑ̃ tʁɛ.za.kœ.jɑ̃/', 'suh sohⁿ day ZHAHⁿ | treh-za-kuh-YAHⁿ', ['pluriel', 'doigt']),
  sent(1091, 'Ils sont très accueillants.', 'They are very welcoming.', '/il sɔ̃ tʁɛ.za.kœ.jɑ̃/', 'eel sohⁿ treh-za-kuh-YAHⁿ', ['pluriel', 'etiquette']),
  sent(1092, "À l'écrit, le pluriel, c'est ce sont.", 'In writing, the plural is ce sont.', '/a le.kʁi lə ply.ʁjɛl sɛ sə sɔ̃/', 'a lay-KREE | luh plü-RYEHL | seh suh SOHⁿ', ['rule', 'pluriel'], ['flashcard'],
    rule("Tu écris : « ... mes collègues. » C'est ou ce sont ?", "Ce sont. À l'oral, tu entendras c'est mes collègues. À l'écrit, le pluriel reste ce sont.")),
  sent(1093, 'Ce sont les photos de mon voyage.', 'These are the photos from my trip.', '/sə sɔ̃ le fɔ.to də mɔ̃ vwa.jaʒ/', 'suh sohⁿ lay fo-TOH duh mohⁿ vwa-YAZH', ['pluriel', 'ecrit'], FCVDR),
  sent(1094, "C'est les photos de mon voyage.", 'These are the photos from my trip. (spoken)', '/sɛ le fɔ.to də mɔ̃ vwa.jaʒ/', 'seh lay fo-TOH duh mohⁿ vwa-YAZH', ['pluriel', 'oral'], FVR),
  sent(1095, 'Ce sont eux.', "It's them.", '/sə sɔ̃.tø/', 'suh sohⁿ-TEU', ['pluriel', 'tonique']),
  sent(1096, 'Ce sont de bons souvenirs.', 'They are good memories.', '/sə sɔ̃ də bɔ̃ suv.niʁ/', 'suh sohⁿ duh bohⁿ soov-NEER', ['pluriel', 'ecrit']),
  sent(1097, 'Ce ne sont pas des touristes, ce sont des voisins.', 'They are not tourists, they are neighbours.', '/sə nə sɔ̃ pa de tu.ʁist sə sɔ̃ de vwa.zɛ̃/', 'suh nuh sohⁿ pa day too-REEST | suh sohⁿ day vwa-ZEHⁿ', ['pluriel', 'negation'], FCVDR),
  sent(1098, 'Qui sont ces gens ?', 'Who are these people?', '/ki sɔ̃ se ʒɑ̃/', 'kee sohⁿ say ZHAHⁿ', ['pluriel', 'question']),
  sent(1099, "Ce sont les parents d'Hugo.", "They are Hugo's parents.", '/sə sɔ̃ le pa.ʁɑ̃ dy.ɡo/', 'suh sohⁿ lay pa-rahⁿ dü-GOH', ['pluriel', 'ecrit']),
  phrase(1100, 'ce sont', 'they are, these are', '/sə sɔ̃/', 'suh SOHⁿ', ['pluriel']),
  sent(1101, 'Ce sont des chaussures de marche.', 'They are walking shoes.', '/sə sɔ̃ de ʃo.syʁ də maʁʃ/', 'suh sohⁿ day sho-SÜR duh MARSH', ['pluriel', 'ecrit'], FCVR,
    gap('___ des chaussures de marche. (they are, written)', "Ce sont : des est un petit mot, et le nom est au pluriel. À l'écrit, ce sont.")),
];

/* ── ACT 7 · IL EST DIFFICILE DE, C'EST FACILE À ───────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1102, 'Il est difficile de trouver un logement à Montréal.', 'It is hard to find housing in Montréal.', '/i.lɛ di.fi.sil də tʁu.ve œ̃ lɔʒ.mɑ̃ a mɔ̃.ʁe.al/', 'ee-leh dee-fee-SEEL duh troo-VAY | uhⁿ lozh-MAHⁿ a mohⁿ-ray-AL', ['infinitif', 'de', 'ecrit'], FCVDR),
  sent(1103, "C'est difficile de trouver un logement.", "It's hard to find a place. (spoken)", '/sɛ di.fi.sil də tʁu.ve œ̃ lɔʒ.mɑ̃/', 'seh dee-fee-SEEL duh troo-VAY | uhⁿ lozh-MAHⁿ', ['infinitif', 'de', 'oral']),
  sent(1104, "Un logement, c'est difficile à trouver.", 'Housing is hard to find.', '/œ̃ lɔʒ.mɑ̃ sɛ di.fi.sil a tʁu.ve/', 'uhⁿ lozh-MAHⁿ | seh dee-fee-SEEL a troo-VAY', ['infinitif', 'a'], FCVDR),
  sent(1105, "Il est interdit de fumer dans l'immeuble.", 'Smoking is forbidden in the building.', '/i.lɛ.tɛ̃.tɛʁ.di də fy.me dɑ̃ li.mœbl/', 'ee-leh-tehⁿ-tehr-DEE duh fü-MAY | dahⁿ lee-MUHBL', ['infinitif', 'de', 'ecrit']),
  sent(1106, 'Il est important de signer le bail.', 'It is important to sign the lease.', '/i.lɛ.tɛ̃.pɔʁ.tɑ̃ də si.ɲe lə baj/', 'ee-leh-tehⁿ-por-TAHⁿ duh see-NYAY luh BAHY', ['infinitif', 'de', 'ecrit'], FCVDR),
  sent(1107, 'Ce formulaire est facile à remplir.', 'This form is easy to fill in.', '/sə fɔʁ.my.lɛʁ ɛ fa.sil a ʁɑ̃.pliʁ/', 'suh for-mü-LEHR eh fa-SEEL a rahⁿ-PLEER', ['infinitif', 'a']),
  sent(1108, "C'est facile à faire.", "It's easy to do.", '/sɛ fa.sil a fɛʁ/', 'seh fa-SEEL a FEHR', ['infinitif', 'a'], FCVDR),
  sent(1109, "De annonce la suite. À renvoie à ce qu'on a dit.", 'De announces what follows. À points back to what was said.', '/də a.nɔ̃s la sɥit a ʁɑ̃.vwa a sə kɔ̃.na di/', 'DUH a-NOHⁿS la SWEET | A rahⁿ-VWA a suh kohⁿ-na DEE', ['rule', 'infinitif'], ['flashcard'],
    rule("« Ce plat ? C'est facile ... faire. » De ou à ?", "à : le plat est déjà nommé, et on revient vers lui. De annonce un infinitif qui arrive avec son complément : il est facile de faire ce plat.")),
  sent(1110, 'Cette recette ? Elle est simple à préparer.', "This recipe? It's simple to make.", '/sɛt ʁə.sɛt ɛ.lɛ sɛ̃pl a pʁe.pa.ʁe/', 'seht ruh-SEHT | eh-leh SEHⁿPL a pray-pa-RAY', ['infinitif', 'a', 'etiquette']),
  sent(1111, 'Il est possible de payer en ligne.', 'It is possible to pay online.', '/i.lɛ pɔ.sibl də pe.je ɑ̃ liɲ/', 'ee-leh po-SEEBL duh pay-YAY ahⁿ LEENY', ['infinitif', 'de', 'ecrit']),
  sent(1112, "C'est possible de payer en ligne.", 'You can pay online. (spoken)', '/sɛ pɔ.sibl də pe.je ɑ̃ liɲ/', 'seh po-SEEBL duh pay-YAY ahⁿ LEENY', ['infinitif', 'de', 'oral']),
  sent(1113, "Il est conseillé d'arriver en avance.", 'It is advisable to arrive early.', '/i.lɛ kɔ̃.se.je da.ʁi.ve ɑ̃.na.vɑ̃s/', 'ee-leh kohⁿ-say-YAY da-ree-VAY | ahⁿ-na-VAHⁿS', ['infinitif', 'de', 'ecrit'], FCVDR),
  sent(1114, 'Ce texte est difficile à lire.', 'This text is hard to read.', '/sə tɛkst ɛ di.fi.sil a liʁ/', 'suh TEHKST eh dee-fee-seel a LEER', ['infinitif', 'a']),
  sent(1115, "C'est agréable de travailler ici.", "It's nice working here.", '/sɛ.ta.ɡʁe.abl də tʁa.va.je i.si/', 'seh-ta-gray-ABL duh tra-va-yay ee-SEE', ['infinitif', 'de', 'oral']),
  sent(1116, 'Elle est agréable à vivre.', 'She is easy to live with.', '/ɛ.lɛ.ta.ɡʁe.abl a vivʁ/', 'eh-leh-ta-gray-ABL a VEEVR', ['infinitif', 'a', 'personne']),
  sent(1117, "C'est gentil de m'aider.", "It's kind of you to help me.", '/sɛ ʒɑ̃.ti də me.de/', 'seh zhahⁿ-TEE duh may-DAY', ['infinitif', 'de', 'oral'], FCVDR),
  phrase(1118, 'facile à faire', 'easy to do', '/fa.sil a fɛʁ/', 'fa-SEEL a FEHR', ['infinitif', 'a']),
  sent(1119, 'Il est nécessaire de réserver.', 'It is necessary to book.', '/i.lɛ ne.se.sɛʁ də ʁe.zɛʁ.ve/', 'ee-leh nay-say-SEHR duh ray-zehr-VAY', ['infinitif', 'de', 'ecrit'], FCVR,
    gap('Il est nécessaire ___ réserver.', "de : l'infinitif arrive après, avec tout ce qu'il annonce.")),
];

/* ── ACT 8 · ÇA, CELA, CE ───────────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1120, "Ça, c'est pratique.", "Now that's handy.", '/sa sɛ pʁa.tik/', 'SA | seh pra-TEEK', ['ca', 'doigt'], FCVDR),
  sent(1121, 'Ça marche.', 'That works.', '/sa maʁʃ/', 'sa MARSH', ['ca']),
  sent(1122, 'Ça coûte combien ?', 'How much does it cost?', '/sa kut kɔ̃.bjɛ̃/', 'sa koot kohⁿ-BYEHⁿ', ['ca', 'question']),
  sent(1123, 'Cela est exact.', 'That is correct.', '/sə.la ɛ.tɛɡ.za/', 'suh-LA | eh-tehg-ZA', ['cela', 'ecrit']),
  sent(1124, 'Cela ne pose aucun problème.', 'That poses no problem.', '/sə.la nə poz o.kœ̃ pʁɔ.blɛm/', 'suh-LA nuh pohz oh-kuhⁿ pro-BLEM', ['cela', 'ecrit'], FCVDR),
  sent(1125, 'Ça me plaît beaucoup.', 'I like it a lot.', '/sa mə plɛ bo.ku/', 'sa muh pleh boh-KOO', ['ca'], FCVDR),
  sent(1126, "C'est ça.", "That's right.", '/sɛ sa/', 'seh SA', ['ca', 'doigt']),
  sent(1127, 'Devant être, ce. Devant les autres verbes, ça.', 'Before être, ce. Before other verbs, ça.', '/də.vɑ̃ ɛtʁ sə də.vɑ̃ le.zo.tʁə vɛʁb sa/', 'duh-vahⁿ EHTR | SUH | duh-vahⁿ lay-zoh-truh VEHRB | SA', ['rule', 'ca'], ['flashcard'],
    rule('« ... me plaît » : ce ou ça ?', "ça. ce ne va que devant être : c'est, ce sont, c'était. Devant plaire, marcher ou coûter, c'est ça.")),
  sent(1128, 'Ça dépend.', 'It depends.', '/sa de.pɑ̃/', 'sa day-PAHⁿ', ['ca']),
  sent(1129, "Ça, ce n'est pas normal.", "Now that's not right.", '/sa sə nɛ pa nɔʁ.mal/', 'SA | suh neh pa nor-MAL', ['ca', 'negation']),
  sent(1130, 'Cela dit, le prix est correct.', 'That said, the price is fair.', '/sə.la di lə pʁi ɛ kɔ.ʁɛkt/', 'suh-la DEE | luh PREE eh ko-REHKT', ['cela', 'ecrit']),
  sent(1131, "Ça, c'est mon bureau.", 'This is my desk.', '/sa sɛ mɔ̃ by.ʁo/', 'SA | seh mohⁿ bü-ROH', ['ca', 'doigt'], FCVDR),
  sent(1132, 'Ça ne marche pas.', "It's not working.", '/sa nə maʁʃ pa/', 'sa nuh marsh PA', ['ca', 'negation']),
  sent(1133, "Tout ça, c'est du passé.", 'All that is in the past.', '/tu sa sɛ dy pa.se/', 'too SA | seh dü pa-SAY', ['ca', 'situation']),
  phrase(1134, 'cela', 'that (written)', '/sə.la/', 'suh-LA', ['cela', 'ecrit']),
  sent(1135, 'Ça fait du bien.', 'That feels good.', '/sa fɛ dy bjɛ̃/', 'sa feh dü BYEHⁿ', ['ca'], FCVR,
    gap('___ fait du bien.', 'Ça : devant faire, jamais ce. Ce ne va que devant être.')),
];

/* ── ACT 9 · C'EST ... QUI, C'EST ... QUE ───────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1136, "C'est Hugo qui a appelé.", 'It was Hugo who called.', '/sɛ.ty.ɡo ki a a.pə.le/', 'seh-tü-GOH kee a a-puh-LAY', ['relief', 'qui'], FCVDR),
  sent(1137, "C'est Aïcha qui a trouvé la solution.", 'It was Aïcha who found the solution.', '/sɛ.ta.i.ʃa ki a tʁu.ve la sɔ.ly.sjɔ̃/', 'seh-ta-ee-SHA kee a troo-vay la so-lü-SYOHⁿ', ['relief', 'qui'], FCVDR),
  sent(1138, "C'est ce dossier que je cherche.", "It's this file I'm looking for.", '/sɛ sə do.sje kə ʒə ʃɛʁʃ/', 'seh suh do-SYAY kuh zhuh SHEHRSH', ['relief', 'que'], FCVDR),
  sent(1139, "C'est demain que je commence.", "It's tomorrow that I start.", '/sɛ də.mɛ̃ kə ʒə kɔ.mɑ̃s/', 'seh duh-MEHⁿ kuh zhuh ko-MAHⁿS', ['relief', 'que']),
  sent(1140, "C'est à Liège qu'elle a grandi.", 'It was in Liège that she grew up.', '/sɛ.ta ljɛʒ kɛ.la ɡʁɑ̃.di/', 'seh-ta LYEHZH | keh-la grahⁿ-DEE', ['relief', 'que', 'belgique']),
  sent(1141, "Ce n'est pas moi qui ai cassé l'imprimante.", "It wasn't me who broke the printer.", '/sə nɛ pa mwa ki e ka.se lɛ̃.pʁi.mɑ̃t/', 'suh neh pa MWA | kee ay ka-say lehⁿ-pree-MAHⁿT', ['relief', 'qui', 'negation'], FCVDR),
  sent(1142, "C'est lui qui organise la fête.", "He's the one organising the party.", '/sɛ lɥi ki ɔʁ.ɡa.niz la fɛt/', 'seh LWEE | kee or-ga-neez la FEHT', ['relief', 'qui', 'tonique']),
  sent(1143, 'Ce sont eux qui ont choisi le restaurant.', "They're the ones who chose the restaurant.", '/sə sɔ̃.tø ki ɔ̃ ʃwa.zi lə ʁɛs.to.ʁɑ̃/', 'suh sohⁿ-TEU | kee ohⁿ shwa-zee luh rehs-to-RAHⁿ', ['relief', 'qui', 'pluriel']),
  sent(1144, "Pour insister, montre du doigt : c'est ... qui, c'est ... que.", "To stress something, point at it: c'est ... qui, c'est ... que.", '/puʁ ɛ̃.sis.te mɔ̃tʁ dy dwa sɛ ki sɛ kə/', 'poor ehⁿ-sees-TAY | mohⁿtr dü DWA | seh ... KEE | seh ... KUH', ['rule', 'relief'], ['flashcard'],
    rule("Ton chef croit que Hugo a appelé. C'est Aïcha. Que dis-tu ?", "Non, c'est Aïcha qui a appelé. Le doigt va sur Aïcha, puis qui si rien d'autre ne fait le verbe, que sinon.")),
  sent(1145, "C'est pour ça que je t'appelle.", "That's why I'm calling you.", '/sɛ puʁ sa kə ʒə ta.pɛl/', 'seh poor SA | kuh zhuh ta-PEHL', ['relief', 'que', 'ca'], FCVDR),
  sent(1146, "C'est le chat qui a fait ça.", 'It was the cat that did it.', '/sɛ lə ʃa ki a fɛ sa/', 'seh luh SHA | kee a feh SA', ['relief', 'qui']),
  sent(1147, "C'est en mars qu'on déménage.", "It's in March that we move.", '/sɛ.tɑ̃ maʁs kɔ̃ de.me.naʒ/', 'seh-tahⁿ MARS | kohⁿ day-may-NAZH', ['relief', 'que']),
  sent(1148, "C'est la vue que j'aime le plus.", "It's the view I like most.", '/sɛ la vy kə ʒɛm lə plys/', 'seh la VÜ | kuh zhem luh PLÜSS', ['relief', 'que']),
  sent(1149, "C'est toi qui décides.", "You're the one who decides.", '/sɛ twa ki de.sid/', 'seh TWA | kee day-SEED', ['relief', 'qui', 'tonique'], FCVDR),
  sent(1150, "C'est nous qui payons.", "We're the ones paying.", '/sɛ nu ki pɛ.jɔ̃/', 'seh NOO | kee peh-YOHⁿ', ['relief', 'qui', 'tonique']),
  phrase(1151, "c'est ... qui", "it's ... who", '/sɛ ki/', 'seh ... KEE', ['relief']),
  sent(1152, "C'est ma voisine qui garde mon chien.", "It's my neighbour who looks after my dog.", '/sɛ ma vwa.zin ki ɡaʁd mɔ̃ ʃjɛ̃/', 'seh ma vwa-ZEEN | kee gard mohⁿ SHYEHⁿ', ['relief', 'qui']),
  sent(1153, "C'est Moussa qui a les clés.", 'Moussa is the one who has the keys.', '/sɛ mu.sa ki a le kle/', 'seh moo-SA | kee a lay KLAY', ['relief', 'qui'], FCVR,
    gap('___ Moussa qui a les clés. (insiste sur Moussa)', "C'est : le doigt va sur Moussa, puis qui, parce que rien d'autre ne fait le verbe.")),
];

/* ── ACT 10 · LES IL FIGÉS ──────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1154, 'Il est tard, je rentre.', "It's late, I'm going home.", '/i.lɛ taʁ ʒə ʁɑ̃tʁ/', 'ee-leh TAR | zhuh RAHⁿTR', ['fige', 'heure'], FCVDR),
  sent(1155, 'Il est tôt pour un dimanche.', "It's early for a Sunday.", '/i.lɛ to puʁ œ̃ di.mɑ̃ʃ/', 'ee-leh TOH | poor uhⁿ dee-MAHⁿSH', ['fige', 'heure']),
  sent(1156, 'Il est temps de partir.', "It's time to leave.", '/i.lɛ tɑ̃ də paʁ.tiʁ/', 'ee-leh TAHⁿ duh par-TEER', ['fige', 'temps'], FCVDR),
  sent(1157, 'Il est déjà huit heures.', "It's already eight o'clock.", '/i.lɛ de.ʒa ɥi.tœʁ/', 'ee-leh day-ZHA | wee-TUHR', ['fige', 'heure']),
  sent(1158, "C'est trop tard pour s'inscrire.", "It's too late to sign up.", '/sɛ tʁo taʁ puʁ sɛ̃s.kʁiʁ/', 'seh troh TAR | poor sehⁿs-KREER', ['situation', 'tard'], FCVDR),
  sent(1159, 'Il était une fois un vieux boulanger.', 'Once upon a time there was an old baker.', '/i.le.tɛ.tyn fwa œ̃ vjø bu.lɑ̃.ʒe/', 'ee-lay-teh-tünn FWA | uhⁿ vyeu boo-lahⁿ-ZHAY', ['fige', 'conte']),
  sent(1160, "L'heure, c'est toujours il est.", 'The time is always il est.', '/lœʁ sɛ tu.ʒuʁ i.lɛ/', 'LUHR | seh too-zhoor ee-LEH', ['rule', 'fige'], ['flashcard'],
    rule("« ... midi » : c'est ou il est ?", "Il est midi. L'heure est un il figé, depuis le A1 : il ne montre rien, il donne l'heure.")),
  sent(1161, 'Il est encore tôt.', "It's still early.", '/i.lɛ.tɑ̃.kɔʁ to/', 'ee-leh-tahⁿ-kor TOH', ['fige', 'heure']),
  sent(1162, "C'est l'heure du dîner.", "It's dinner time.", '/sɛ lœʁ dy di.ne/', 'seh LUHR | dü dee-NAY', ['doigt', 'heure'], FCVDR),
  sent(1163, 'Il est midi pile.', "It's twelve noon on the dot.", '/i.lɛ mi.di pil/', 'ee-leh mee-dee PEEL', ['fige', 'heure']),
  sent(1164, "C'est lundi, aujourd'hui.", "It's Monday today.", '/sɛ lœ̃.di o.ʒuʁ.dɥi/', 'seh luhⁿ-DEE | oh-zhoor-DWEE', ['doigt', 'jour']),
  sent(1165, 'Il est trop tard pour appeler.', "It's too late to call.", '/i.lɛ tʁo taʁ puʁ a.pə.le/', 'ee-leh troh TAR | poor a-puh-LAY', ['fige', 'heure']),
  phrase(1166, 'il est temps de', 'it is time to', '/i.lɛ tɑ̃ də/', 'ee-leh TAHⁿ duh', ['fige', 'temps']),
  sent(1167, 'Il est six heures du matin.', "It's six in the morning.", '/i.lɛ si.zœʁ dy ma.tɛ̃/', 'ee-leh see-ZUHR | dü ma-TEHⁿ', ['fige', 'heure'], FCVR,
    gap('___ six heures du matin.', "Il est : l'heure prend toujours le il figé, jamais c'est.")),
];

/* ── ACT 11 · LE PORTRAIT ───────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1168, "Je te présente Aïcha. C'est notre nouvelle graphiste.", "Let me introduce Aïcha. She's our new graphic designer.", '/ʒə tə pʁe.zɑ̃t a.i.ʃa sɛ nɔ.tʁə nu.vɛl ɡʁa.fist/', 'zhuh tuh pray-zahⁿt a-ee-SHA | seh no-truh noo-vehl gra-FEEST', ['portrait', 'doigt'], FCVDR),
  sent(1169, 'Elle est sénégalaise et elle parle quatre langues.', 'She is Senegalese and she speaks four languages.', '/ɛ.lɛ se.ne.ɡa.lɛz e ɛl paʁl ka.tʁə lɑ̃ɡ/', 'eh-leh say-nay-ga-LEHZ | ay ehl parl ka-truh LAHⁿG', ['portrait', 'etiquette']),
  sent(1170, "C'est une personne très organisée.", 'She is a very organised person.', '/sɛ.tyn pɛʁ.sɔn tʁɛ.zɔʁ.ɡa.ni.ze/', 'seh-tünn pehr-SONN | treh-zor-ga-nee-ZAY', ['portrait', 'doigt'], FCVDR),
  sent(1171, 'Il est discret, mais il est toujours là.', "He is quiet, but he's always there.", '/il ɛ dis.kʁɛ mɛ i.lɛ tu.ʒuʁ la/', 'eel eh dees-KREH | meh ee-leh too-zhoor LA', ['portrait', 'etiquette']),
  sent(1172, "C'est quelqu'un de fiable.", "He's someone reliable.", '/sɛ kɛl.kœ̃ də fjabl/', 'seh kehl-KUHⁿ duh FYABL', ['portrait', 'doigt'], FCVDR),
  sent(1173, 'Mon voisin Moussa est retraité.', 'My neighbour Moussa is retired.', '/mɔ̃ vwa.zɛ̃ mu.sa ɛ ʁə.tʁɛ.te/', 'mohⁿ vwa-ZEHⁿ moo-SA | eh ruh-treh-TAY', ['portrait', 'etiquette']),
  sent(1174, "C'est un ancien chauffeur de taxi.", "He's a former taxi driver.", '/sɛ.tœ̃.nɑ̃.sjɛ̃ ʃo.fœʁ də tak.si/', 'seh-tuhⁿ-nahⁿ-SYEHⁿ | sho-fuhr duh tak-SEE', ['portrait', 'metier']),
  sent(1175, 'Il est drôle et très généreux.', 'He is funny and very generous.', '/il ɛ dʁol e tʁɛ ʒe.ne.ʁø/', 'eel eh DROHL | ay treh zhay-nay-REU', ['portrait', 'etiquette'], FCVDR),
  sent(1176, "C'est lui qui arrose mes plantes l'été.", "He's the one who waters my plants in the summer.", '/sɛ lɥi ki a.ʁoz me plɑ̃t le.te/', 'seh LWEE | kee a-rohz may plahⁿt lay-TAY', ['portrait', 'relief']),
  sent(1177, 'Un bon portrait montre, puis décrit, puis raconte.', 'A good portrait points, then describes, then tells.', '/œ̃ bɔ̃ pɔʁ.tʁɛ mɔ̃tʁ pɥi de.kʁi pɥi ʁa.kɔ̃t/', 'uhⁿ bohⁿ por-TREH | MOHⁿTR | pwee day-KREE | pwee ra-KOHⁿT', ['rule', 'portrait'], ['flashcard'],
    rule("Tu écris le portrait d'une collègue. Par quoi commences-tu ?", "Par c'est : c'est ma collègue Aïcha. Puis il ou elle est pour la décrire. Puis une anecdote, souvent avec c'est ... qui.")),
  sent(1178, "C'est un plaisir de travailler avec elle.", "It's a pleasure to work with her.", '/sɛ.tœ̃ plɛ.ziʁ də tʁa.va.je a.vɛk ɛl/', 'seh-tuhⁿ pleh-ZEER | duh tra-va-yay a-vehk EHL', ['portrait', 'doigt'], FCVDR),
  sent(1179, 'Elle est toujours de bonne humeur.', 'She is always in a good mood.', '/ɛ.lɛ tu.ʒuʁ də bɔ.ny.mœʁ/', 'eh-leh too-ZHOOR | duh bo-nü-MUHR', ['portrait', 'etiquette']),
  sent(1180, "C'est quelqu'un qu'on peut appeler à minuit.", "He's someone you can call at midnight.", '/sɛ kɛl.kœ̃ kɔ̃ pø.ta.pə.le a mi.nɥi/', 'seh kehl-KUHⁿ | kohⁿ peu-ta-puh-LAY a mee-NWEE', ['portrait', 'doigt']),
  sent(1181, 'Il est facile à vivre.', "He's easy to live with.", '/i.lɛ fa.sil a vivʁ/', 'ee-leh fa-SEEL a VEEVR', ['portrait', 'infinitif'], FCVDR),
  sent(1182, "C'est rare, un voisin comme ça.", 'A neighbour like that is rare.', '/sɛ ʁaʁ œ̃ vwa.zɛ̃ kɔm sa/', 'seh RAR | uhⁿ vwa-zehⁿ komm SA', ['portrait', 'situation']),
  sent(1183, 'Elle est cheffe de projet depuis deux ans.', 'She has been a project manager for two years.', '/ɛ.lɛ ʃɛf də pʁɔ.ʒɛ də.pɥi dø.zɑ̃/', 'eh-leh SHEHF duh pro-ZHEH | duh-pwee deu-ZAHⁿ', ['portrait', 'metier']),
  sent(1184, "C'est une excellente cheffe de projet.", 'She is an excellent project manager.', '/sɛ.ty.nɛk.sɛ.lɑ̃t ʃɛf də pʁɔ.ʒɛ/', 'seh-tü-nehk-seh-lahⁿt SHEHF duh pro-ZHEH', ['portrait', 'metier', 'adjectif'], FCVDR),
  sent(1185, "C'est un vrai Montréalais.", "He's a real Montrealer.", '/sɛ.tœ̃ vʁɛ mɔ̃.ʁe.a.lɛ/', 'seh-tuhⁿ VREH | mohⁿ-ray-a-LEH', ['portrait', 'nationalite']),
  sent(1186, 'Il est né à Port-au-Prince.', 'He was born in Port-au-Prince.', '/i.lɛ ne a pɔʁ.to.pʁɛ̃s/', 'ee-leh NAY | a por-toh-PREHⁿS', ['portrait', 'etiquette']),
  sent(1187, 'Ce sont des voisins formidables.', 'They are wonderful neighbours.', '/sə sɔ̃ de vwa.zɛ̃ fɔʁ.mi.dabl/', 'suh sohⁿ day vwa-ZEHⁿ | for-mee-DABL', ['portrait', 'pluriel'], FCVDR),
  sent(1188, "C'est grâce à lui que je parle créole.", "It's thanks to him that I speak Creole.", '/sɛ ɡʁa.sa lɥi kə ʒə paʁl kʁe.ɔl/', 'seh gra-sa LWEE | kuh zhuh parl kray-OL', ['portrait', 'relief']),
  phrase(1189, "quelqu'un de fiable", 'someone reliable', '/kɛl.kœ̃ də fjabl/', 'kehl-KUHⁿ duh FYABL', ['portrait']),
  sent(1190, "Elle est très à l'écoute.", 'She is a very good listener.', '/ɛ.lɛ tʁɛ.za le.kut/', 'eh-leh treh-za lay-KOOT', ['portrait', 'etiquette']),
  sent(1191, "C'est la collègue idéale.", "She's the ideal colleague.", '/sɛ la kɔ.lɛ.ɡi.de.al/', 'seh la ko-leh-gee-day-AL', ['portrait', 'doigt'], FCVDR),
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
 *  §I. THE LONG TEXTS
 *
 *  The four readings live here so the reading and the quiz cannot drift
 *  apart.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the lost-and-found register at Gare Centrale. About 125 words. */
export const REGISTRE_TEXT =
  "Bureau des objets trouvés, Gare Centrale, Montréal. Samedi, 9 h. Premier objet : c'est un sac à dos noir. Il est neuf, mais il est un peu sale, et il est très lourd. Deuxième objet : ce sont des clés de voiture. Elles sont sur un porte-clés rouge. Troisième objet : c'est une valise bleue. Elle est fermée, et c'est une bonne chose, parce qu'elle est pleine. Quatrième objet : c'est un parapluie. Il est rouge, avec un manche en bois. Note de Madame Pelletier : c'est une journée calme. Un monsieur est passé pour la valise. C'est un touriste belge. Il est gentil, mais il est très pressé. C'est normal : son train part à midi, et il est déjà onze heures et demie.";

/** Act 5: a postcard from Québec City. About 125 words. */
export const CARTE_TEXT =
  "Salut ! Je t'écris de Québec. C'est magnifique, ici. La vieille ville est petite, mais elle est pleine de charme. Les rues sont étroites et elles montent beaucoup : c'est fatigant, mais c'est beau. Notre hôtel est simple. Il est propre et il est bien situé, c'est l'essentiel. Hier, on a pris le traversier pour Lévis. C'était génial : la vue sur le Château Frontenac est incroyable. La nourriture ? C'est cher, mais c'est délicieux. Il fait froid, et c'est normal en novembre. Mon amie Léa est ravie. Elle est québécoise, mais elle ne connaissait pas la ville. C'est drôle, non ? Bref, c'est un beau voyage. Je t'embrasse, Chloé.";

/** Act 7: the rules of a Montréal apartment building. About 125 words. */
export const REGLEMENT_TEXT =
  "Règlement de l'immeuble, 4520 rue Saint-Denis. Bienvenue ! Il est important de lire ce règlement avant de signer le bail. Il est interdit de fumer dans les couloirs et sur les balcons. Il est conseillé de fermer la porte d'entrée à clé le soir. Le local à vélos est au sous-sol : il est facile à trouver, à droite de l'ascenseur. Le recyclage, c'est le mardi. Il est nécessaire de trier le papier et le plastique. C'est simple à faire : les bacs bleus sont pour le papier, les bacs verts pour le plastique. Pour une réparation, il est possible d'écrire au concierge, Monsieur Leblanc. C'est un homme patient, et il est très efficace. Merci et bonne installation !";

/** Act 11: the model portrait the learner imitates in the task. About 115 words. */
export const PORTRAIT_TEXT =
  "Je voudrais te présenter ma collègue Aïcha. C'est notre nouvelle graphiste, et c'est une personne formidable. Elle est sénégalaise, elle est née à Dakar, et elle habite à Montréal depuis trois ans. Elle est grande, elle est toujours bien habillée, et elle est très organisée. Au bureau, c'est quelqu'un de fiable : quand un projet est difficile, c'est elle qui trouve la solution. Elle est drôle aussi, et il est rare de s'ennuyer en réunion avec elle. Le vendredi, c'est elle qui apporte des fruits pour toute l'équipe. C'est un plaisir de travailler avec elle, et je suis sûr que tu vas l'adorer. Viens la rencontrer lundi !";

/** The three moves the model makes, in order, for the task checklist. */
export const PORTRAIT_MOVES = [
  "montrer : c'est ma collègue, c'est notre graphiste",
  "décrire : il ou elle est + adjectif, le métier sans article, la nationalité",
  "raconter : une anecdote, souvent avec c'est ... qui",
] as const;
