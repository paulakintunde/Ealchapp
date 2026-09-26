// b1.25.l1 « Les registres de langue » — the authored corpus, the imports and
// the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md with the WORKSHOP
// SHAPE of B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 on top.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b1.26 « tu ou vous » and b1.39 may import REFRAME from this
// file; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   REGISTER AS A CHOICE MADE FOR A READER. Every row carries `register`
//   (familier / courant / soutenu), the first B1 corpus to fill that field.
//
//     les trois registres   familier, courant, soutenu, and how to hear them
//     les mots              triplets: bouquin / livre / ouvrage, bagnole /
//                           voiture / véhicule, boulot / travail / emploi,
//                           bosser / travailler, fric-rond / argent / fonds
//     la grammaire          the MARKERS of register: dropped ne, on / nous,
//                           t'as / y a, the question, ça / cela. Each one is
//                           CITED from its owner, never re-taught
//     trois lecteurs        one message rewritten for a friend, a colleague
//                           and an administration
//     les textos            slt, qqch, jsp, mdr, stp, tkt, rdv, bcp, dsl, pk:
//                           RECOGNITION ONLY, review drill alone
//     ouvrir et fermer      openings and closings in each register
//     le faux pas           register mismatch and how it lands
//     au Québec             char, magasiner, chum, blonde, plate, pantoute,
//                           frette, dîner; the wider familiar register
//
//   NOT OWNED, CITED:
//     b1.20 act 10 owns the dropped ne     (rows .1167, .1168, .1177 reused)
//     b1.21 owns inversion and the formal  (rows .1016-.1018, .1178, .1184,
//           closing « Je vous prie d'agréer »  .1185 reused)
//     b1.22 act 8 owns ça / cela / ce      (rows .1123, .1127 reused)
//     b1.09 owns politeness and the polite conditional (reframe quoted)
//     b1.26 « tu ou vous », written in parallel: tu / vous is ITS topic and
//           appears here only as a forward pointer. Characters use tu or vous
//           as the situation needs; nothing here explains the choice.
//   The subjunctive (b1.14 to b1.16) is kept out of every authored French
//   string, which is why no letter here closes with « Veuillez ».
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `langue-soignee` (« La langue soignée », fondations, a2-b2), made
//     in Postgres for b1.21. Probed live 2026-09-26: sub_themes are
//     « l'inversion, les incises, le registre soutenu, les trois registres »;
//     the theme holds ZERO rows in Postgres (b1.21 is authored, not imported)
//     and is NOT in seed.json's theme list. A readiness run WILL warn about
//     the theme list: expected, not a defect.
//
//  2. ID BLOCK: this lesson owns `.1200`-`.1399` AND NOTHING ELSE. b1.21
//     holds `.1000`-`.1194`. Compare FULL ids: b1.21's rows are reused here
//     through the `b121()` builder, never through this file's `E`, so an id
//     below 1200 can only ever be b1.21's own row. Authored: `.1200`-`.1392`,
//     163 rows in ten act blocks with gaps (.1227, .1269, .1312 unused).
//
//  3. THE SEED HOLDS ALMOST NO REGISTER. Probed 2026-09-26 across 11,209
//     seed items: ZERO rows for bouquin, bosser, bagnole, boulot, fric, pote,
//     ouvrage, véhicule, char, chum, blonde, mdr, stp, bcp, jsp. It has
//     `magasiner` (fr.a2.quebec-et-francophonie.199), `le magasinage`
//     (fr.b1.quebec-et-francophonie.015), `bouffer` (fr.a1.cuisine.009) and
//     the a1 salutations (Salut, À plus, Cordialement, Bien à vous, Cher
//     monsieur, Chère madame). Everything else is authored here.
//
//  4. DRAFT ROWS OF OTHER LESSONS ARE REUSED BY ID, not twinned: b1.20,
//     b1.21 and b1.22 are drafts, so `src()` looks them up in their own
//     corpus files (imported below) as well as in the seed. They are in
//     `IMPORTED` with their French in a trailing comment, and they must be
//     imported in the same batch as their owner lesson.
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER. `hasPlainNasal` flags any
//     UH / EU / EH / AH / OH closed by a plain n or m. Two words needed it:
//       « chum »     CHOMM, not CHOM: a lone vowel closed by M with no e after
//                    it is indistinguishable from a missing nasal mark.
//       « déjeune »  day-ZHUHNN, not day-ZHUHN: UH + N always flags.
//     The doubled consonant is for the checker, not the ear. Character names
//     were picked to avoid the problem (Inès, Chloé, Hugo, Théo, Samir, Awa,
//     Moussa, Maxime), and no name closes on a lone vowel + n or m. No U+203F
//     tie anywhere, in a respelling or an IPA field.
//
//  6. TEXTO ROWS (act 6) carry NO ipa and NO respell: « mdr » is read as
//     letters by some people and as the full phrase by others, and nobody
//     says « qqch » aloud. They carry `review` alone: recognition, never
//     produced, never spoken by a practice mission.
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
  id: 'b1.25',
  seq: 25,
  title: 'Register and Formality',
  sub: 'Les registres de langue',
  canDo: 'Can recognise familiar, everyday and formal French in speech, texts and messages, name the words and grammar that mark each register, and write the same news twice, as a message to a friend and as an email to a manager or an administration',
  prereqUnitIds: ['b1.09', 'b1.20', 'b1.21', 'b1.22'],
} as const;

export const LESSON_ID = 'b1.25.l1';
export const THEME = 'langue-soignee';
export const LEVEL = 'b1' as const;

/** ONE block: b1.21 holds .1000-.1194 in this theme. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 * ══════════════════════════════════════════════════════════════════════════ */

export const POLITESSE_UNIT = 'b1.09';
export const NEGATION_UNIT = 'b1.20';
export const INVERSION_UNIT = 'b1.21';
export const CEST_UNIT = 'b1.22';
export const TUVOUS_UNIT = 'b1.26';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
  'b1.19': 19, 'b1.20': 20, 'b1.21': 21, 'b1.22': 22, 'b1.23': 23, 'b1.24': 24,
  'b1.25': 25, 'b1.26': 26,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const POLITESSE_REF = refFr(POLITESSE_UNIT);
export const NEGATION_REF = refFr(NEGATION_UNIT);
export const INVERSION_REF = refFr(INVERSION_UNIT);
export const CEST_REF = refFr(CEST_UNIT);
export const NEXT_REF = refFr(TUVOUS_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED, AND THE DRAFT ROWS REUSED BY ID
 *
 *  Verified against the owners' files on 2026-09-26:
 *   - b1.20 act 10 « Le ne qui tombe » teaches the dropped ne as a register
 *     choice: « spoken yes, written never ». Its rule row .1177 is quoted.
 *   - b1.21's closing formula is row .1185 « Je vous prie d'agréer, Madame,
 *     Monsieur, mes salutations distinguées. »
 *   - b1.22 act 8 « Ça, cela, ce »: milestone « ce devant être, ça devant les
 *     autres verbes, et cela quand tu écris »; rule row .1127.
 *   - b1.09's reframe measures politeness by the favour asked and the person
 *     asked. Register is a different axis, and act 8 says so.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B109_REFRAME } from './politesse-corpus.ts';
export { REFRAME as B120_REFRAME } from './negation-avancee-corpus.ts';
export { REFRAME as B121_REFRAME, REFRAME_EN as B121_REFRAME_EN } from './inversion-corpus.ts';
export { REFRAME as B122_REFRAME } from './cest-il-est-corpus.ts';
export { E as B120_E, ALL_ROWS as B120_ROWS } from './negation-avancee-corpus.ts';
export { E as B121_E, ALL_ROWS as B121_ROWS } from './inversion-corpus.ts';
export { E as B122_E, ALL_ROWS as B122_ROWS } from './cest-il-est-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE SAME PERSON DRESSED THREE WAYS. Jeans at a friend's, a shirt at the
 *  office, a jacket at city hall: none of the three is a wrong outfit, and
 *  each is wrong somewhere. « Je bosse », « je travaille » and « je suis à
 *  mon poste » say the same thing; the reader decides which one fits. It
 *  extends b1.21's « la tenue » from questions to the whole message.
 *
 *  It is NOT « formal is polite ». Too stiff with a friend is a faux pas
 *  (act 8), and politeness is b1.09's axis, not this one.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Aucun registre n'est faux. Chacun va avec une personne et un moment.";
export const REFRAME_EN = 'No register is wrong. Each one fits a person and a moment.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le familier pour les amis, le soutenu pour les chefs.',
    why: "False where act 5 and act 10 have to hold: a manager gets COURANT, not soutenu, and a soutenu chat message to a manager reads as cold. It also hides the moment: the same friend gets a texto on the bus and a careful message of condolence.",
  },
  {
    text: 'Plus c’est soutenu, plus c’est poli.',
    why: "False, and act 8 is built to break it: « Cher Samir, je vous informe » lands as anger on a best friend. It also steals b1.09's axis, which measures the favour and the person, not the level of language.",
  },
  {
    text: "À l'oral le familier, à l'écrit le soutenu.",
    why: "False twice: a texto is written and familier (act 6), and a speech or a service counter is spoken and soigné. The channel matters, but the reader decides.",
  },
  {
    text: 'Le familier, c’est du français relâché.',
    why: "A judgement the lesson refuses (shapes doc §1.2: never label a register wrong). « J'en sais rien » is exactly right with a brother, and the learner who cannot hear it misses half of what is said around them.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Seed rows read from seed.json on 2026-09-26, French in the comment.
 *  Draft rows of b1.20 / b1.21 / b1.22 read from their corpus files.
 * ══════════════════════════════════════════════════════════════════════════ */

const b120 = (n: number) => `fr.b1.negation-et-restriction.${n}`;
const b121 = (n: number) => `fr.b1.langue-soignee.${n}`;
const b122 = (n: number) => `fr.b1.description-personnes-objets.${n}`;

export const IMPORTED = {
  act1: [] as string[],
  act2: [
    b120(1168),                         // Je ne sais pas.  (b1.20 draft)
  ],
  act3: [
    'fr.a1.cuisine.009',                // bouffer  (flashcard only)
  ],
  act4: [
    b120(1167),                         // Je sais pas.  (b1.20 draft, oral)
    b120(1177),                         // À l'oral, ne tombe souvent. À l'écrit, il reste toujours.  (b1.20 rule row)
    b121(1016),                         // Tu viens ce soir ?  (b1.21 draft)
    b121(1017),                         // Est-ce que tu viens ce soir ?  (b1.21 draft)
    b121(1018),                         // Viens-tu ce soir ?  (b1.21 draft)
    b122(1123),                         // Cela est exact.  (b1.22 draft)
    b122(1127),                         // Devant être, ce. Devant les autres verbes, ça.  (b1.22 rule row)
  ],
  act5: [] as string[],
  act6: [
    'fr.a1.salutations.012',            // Merci beaucoup
  ],
  act7: [
    'fr.a1.salutations.003',            // Salut
    'fr.a1.salutations.032',            // À plus
    'fr.a1.salutations.036',            // Bonne journée
    'fr.a1.salutations.118',            // Cordialement
    'fr.a1.salutations.119',            // Bien à vous  (no flashcard: named only)
    'fr.a1.salutations.114',            // Cher monsieur
    'fr.a1.salutations.115',            // Chère madame  (no flashcard: named only)
    b121(1178),                         // Madame, Monsieur,  (b1.21 draft)
    b121(1185),                         // Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.  (b1.21 draft)
  ],
  act8: [] as string[],
  act9: [
    'fr.a2.quebec-et-francophonie.199', // magasiner
    'fr.b1.quebec-et-francophonie.015', // le magasinage
  ],
  act10: [
    b121(1184),                         // Je vous remercie par avance de votre réponse.  (b1.21 draft)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a1.salutations.119',            // voiceflash, review
  'fr.a1.salutations.115',            // voiceflash, review
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  'fr.a1.cuisine.009',                // flashcard
  b120(1177),                         // flashcard (rule row)
  b122(1127),                         // flashcard (rule row)
  'fr.a1.salutations.032',            // flashcard, review
  'fr.a1.salutations.036',            // flashcard, review
  'fr.a1.salutations.118',            // flashcard, review
  'fr.a1.salutations.114',            // flashcard, review
  'fr.a2.quebec-et-francophonie.199', // flashcard, review
  'fr.b1.quebec-et-francophonie.015', // flashcard, review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Every row carries `register`. Recognition-only rows (the texto
 *  abbreviations, and the deliberately mismatched « Cher Samir, je vous
 *  informe ») carry `review` alone: no flashcard, so no tranche releases
 *  them for production, and no voiceflash, so no speak mission asks for them.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const RECO = ['review'] as Item['drills'];

const F: Register = 'familier';
const C: Register = 'courant';
const S: Register = 'soutenu';

const sent = (
  n: number, register: Register, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register, grammarPoints: ['registre'], ...extra,
});

const phrase = (
  n: number, register: Register, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register, ...extra,
});

/** A texto abbreviation: recognition only, no ipa, no respell (§A.6). */
const texto = (n: number, fr: string, en: string, full: string): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en,
  tags: ['texto', 'reconnaissance'], drills: RECO, version: 1, register: F,
  notes: `En entier : ${full}.`,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });
/** A register card: `prompt` is the cue, `fr` the answer in the asked register. */
const reg = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'register', prompt, notes });

/* ── ACT 1 · LE MAUVAIS MESSAGE ─────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, F, "Salut, ma bagnole est en panne. J'arrive vers dix heures.", "Hi, my car's broken down. I'll get in around ten.", '/sa.ly ma ba.ɲɔl ɛ.tɑ̃ pan ʒa.ʁiv vɛʁ di.zœʁ/', 'sa-LÜ | ma ba-nyol eh-tahⁿ PANN | zha-reev vehr dee-ZUHR', ['scene', 'familier']),
  sent(1201, C, "Bonjour Madame Bouchard, ma voiture est en panne. J'arriverai vers dix heures.", 'Good morning Ms Bouchard, my car has broken down. I will arrive around ten.', '/bɔ̃.ʒuʁ ma.dam bu.ʃaʁ ma vwa.tyʁ ɛ.tɑ̃ pan ʒa.ʁiv.ʁe vɛʁ di.zœʁ/', 'bohⁿ-zhoor ma-dam boo-SHAR | ma vwa-tür eh-tahⁿ PANN | zha-reev-ray vehr dee-ZUHR', ['scene', 'courant'], FCVDR),
  sent(1202, F, "Je bosse de la maison aujourd'hui.", "I'm working from home today.", '/ʒə bɔs də la mɛ.zɔ̃ o.ʒuʁ.dɥi/', 'zhuh boss duh la meh-zohⁿ oh-zhoor-DWEE', ['ines', 'familier']),
  sent(1203, C, "Je travaillerai de la maison aujourd'hui.", 'I will work from home today.', '/ʒə tʁa.vaj.ʁe də la mɛ.zɔ̃ o.ʒuʁ.dɥi/', 'zhuh tra-vahy-ray duh la meh-zohⁿ oh-zhoor-DWEE', ['ines', 'courant'], FCVDR),
  sent(1204, F, 'On se voit pas ce midi.', "We're not seeing each other at lunch.", '/ɔ̃ sə vwa pa sə mi.di/', 'ohⁿ suh vwa pa suh mee-DEE', ['ines', 'familier', 'ne-tombe']),
  sent(1205, C, 'Je ne pourrai pas venir à la réunion de midi.', 'I will not be able to come to the noon meeting.', '/ʒə nə pu.ʁe pa və.niʁ a la ʁe.y.njɔ̃ də mi.di/', 'zhuh nuh poo-ray pa vuh-neer a la ray-ü-nyohⁿ duh mee-DEE', ['ines', 'courant'], FCVDR),
  phrase(1206, F, 'Coucou', 'Hi there (very friendly)', '/ku.ku/', 'koo-KOO', ['ouvrir', 'familier']),
  phrase(1207, F, 'Bisous', 'Love, kisses (sign-off)', '/bi.zu/', 'bee-ZOO', ['fermer', 'familier']),
  sent(1208, C, 'Merci de votre compréhension.', 'Thank you for your understanding.', '/mɛʁ.si də vɔtʁ kɔ̃.pʁe.ɑ̃.sjɔ̃/', 'mehr-see duh votr kohⁿ-pray-ahⁿ-SYOHⁿ', ['ines', 'fermer'], FCVDR),
  sent(1209, C, 'Je reste joignable toute la journée.', 'I remain reachable all day.', '/ʒə ʁɛst ʒwa.ɲabl tut la ʒuʁ.ne/', 'zhuh rehst zhwa-NYABL toot la zhoor-NAY', ['ines', 'courant']),
  sent(1210, C, 'Mon fils est malade ce matin.', 'My son is ill this morning.', '/mɔ̃ fis ɛ ma.lad sə ma.tɛ̃/', 'mohⁿ fees eh ma-LAD suh ma-TEHⁿ', ['ines', 'courant']),
  sent(1211, F, 'Le petit a de la fièvre.', 'The little one has a fever.', '/lə pə.ti a də la fjɛvʁ/', 'luh puh-TEE a duh la FYEHVR', ['ines', 'familier']),
  sent(1212, C, 'Toutes mes excuses pour ce retard.', 'My apologies for the delay.', '/tut me.zɛk.skyz puʁ sə ʁə.taʁ/', 'toot may-zehk-SKÜZ poor suh ruh-TAR', ['scene', 'courant'], FCVDR),
  sent(1213, C, 'Je vous tiens au courant.', 'I will keep you posted.', '/ʒə vu tjɛ̃ o ku.ʁɑ̃/', 'zhuh voo tyehⁿ oh koo-RAHⁿ', ['ines', 'courant', 'fermer']),
  sent(1214, F, 'Je te tiens au courant.', "I'll keep you posted.", '/ʒə tə tjɛ̃ o ku.ʁɑ̃/', 'zhuh tuh tyehⁿ oh koo-RAHⁿ', ['ines', 'familier', 'fermer']),
  sent(1215, C, REFRAME, REFRAME_EN, '/o.kœ̃ ʁə.ʒistʁ nɛ fo ʃa.kœ̃ va a.vɛk yn pɛʁ.sɔn e œ̃ mɔ.mɑ̃/', 'oh-kuhⁿ ruh-zheestr neh FOH | sha-kuhⁿ va a-vehk ün pehr-SONN ay uhⁿ mo-MAHⁿ', ['rule', 'reframe'], ['flashcard'],
    rule('Salut, ou Bonjour Madame : lequel est faux ?', 'Aucun. Salut va avec un ami, Bonjour Madame avec une responsable. Le registre suit la personne et le moment.')),
  phrase(1216, C, 'le registre', 'register (the level of language)', '/lə ʁə.ʒistʁ/', 'luh ruh-ZHEESTR', ['rule', 'registre']),
];

/* ── ACT 2 · TROIS REGISTRES ────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1220, F, 'Tu me conseilles un bouquin ?', 'Can you recommend me a book?', '/ty mə kɔ̃.sɛj œ̃ bu.kɛ̃/', 'tü muh kohⁿ-sehy uhⁿ boo-KEHⁿ', ['trois', 'familier', 'livre']),
  sent(1221, C, 'Est-ce que tu peux me conseiller un livre ?', 'Can you recommend a book?', '/ɛs.kə ty pø mə kɔ̃.se.je œ̃ livʁ/', 'ehs-kuh tü peu muh kohⁿ-say-yay uhⁿ LEEVR', ['trois', 'courant', 'livre']),
  sent(1222, S, 'Pourriez-vous me conseiller un ouvrage ?', 'Could you recommend a work to me?', '/pu.ʁje.vu mə kɔ̃.se.je œ̃.nu.vʁaʒ/', 'poo-ryay-voo muh kohⁿ-say-yay uhⁿ-noo-VRAZH', ['trois', 'soutenu', 'livre'], FCVDR),
  sent(1223, F, 'Ma bagnole est au garage.', "My car's at the garage.", '/ma ba.ɲɔl ɛ.to ɡa.ʁaʒ/', 'ma ba-nyol eh-toh ga-RAZH', ['trois', 'familier', 'voiture']),
  sent(1224, C, 'Ma voiture est au garage.', 'My car is at the garage.', '/ma vwa.tyʁ ɛ.to ɡa.ʁaʒ/', 'ma vwa-tür eh-toh ga-RAZH', ['trois', 'courant', 'voiture'], FCVDR),
  sent(1225, S, 'Mon véhicule est en réparation.', 'My vehicle is being repaired.', '/mɔ̃ ve.i.kyl ɛ.tɑ̃ ʁe.pa.ʁa.sjɔ̃/', 'mohⁿ vay-ee-kül eh-tahⁿ ray-pa-ra-SYOHⁿ', ['trois', 'soutenu', 'voiture']),
  sent(1226, F, "J'en sais rien.", 'No idea.', '/ʒɑ̃ sɛ ʁjɛ̃/', 'zhahⁿ seh RYEHⁿ', ['trois', 'familier', 'savoir']),
  sent(1228, S, "Je l'ignore.", 'I do not know.', '/ʒə li.ɲɔʁ/', 'zhuh lee-NYOR', ['trois', 'soutenu', 'savoir']),
  sent(1229, F, 'Je suis crevé.', "I'm wiped out.", '/ʒə sɥi kʁə.ve/', 'zhuh swee kruh-VAY', ['trois', 'familier', 'fatigue']),
  sent(1230, C, 'Je suis très fatigué.', 'I am very tired.', '/ʒə sɥi tʁɛ fa.ti.ɡe/', 'zhuh swee treh fa-tee-GAY', ['trois', 'courant', 'fatigue']),
  sent(1231, S, 'Je suis exténué.', 'I am exhausted.', '/ʒə sɥi.zɛk.ste.nɥe/', 'zhuh swee-zehk-stay-NWAY', ['trois', 'soutenu', 'fatigue']),
  sent(1232, F, 'Il est super sympa, ton pote.', 'Your mate is really nice.', '/i.lɛ sy.pɛʁ sɛ̃.pa tɔ̃ pɔt/', 'ee-leh sü-pehr sehⁿ-PA | tohⁿ POT', ['trois', 'familier', 'ami']),
  sent(1233, C, 'Ton ami est très gentil.', 'Your friend is very kind.', '/tɔ̃.na.mi ɛ tʁɛ ʒɑ̃.ti/', 'tohⁿ-na-mee eh treh zhahⁿ-TEE', ['trois', 'courant', 'ami']),
  sent(1234, S, 'Votre ami est fort aimable.', 'Your friend is most gracious.', '/vɔ.tʁa.mi ɛ fɔʁ ɛ.mabl/', 'vo-tra-mee eh for eh-MABL', ['trois', 'soutenu', 'ami']),
  phrase(1235, F, 'le familier', 'the informal register', '/lə fa.mi.lje/', 'luh fa-mee-LYAY', ['rule', 'familier']),
  phrase(1236, C, 'le courant', 'the everyday register', '/lə ku.ʁɑ̃/', 'luh koo-RAHⁿ', ['rule', 'courant']),
  phrase(1237, S, 'le soutenu', 'the formal register', '/lə sut.ny/', 'luh soot-NÜ', ['rule', 'soutenu']),
  sent(1238, C, 'Le courant va partout. Le familier et le soutenu choisissent leur public.', 'Everyday French goes anywhere. Informal and formal French choose their audience.', '/lə ku.ʁɑ̃ va paʁ.tu lə fa.mi.lje e lə sut.ny ʃwa.zis lœʁ py.blik/', 'luh koo-rahⁿ va par-TOO | luh fa-mee-lyay ay luh soot-nü shwa-zees luhr pü-BLEEK', ['rule', 'registre'], ['flashcard'],
    rule('Tu ne sais pas qui va lire ton message. Quel registre prends-tu ?', 'Le courant : il va avec presque tout le monde.')),
];

/* ── ACT 3 · LES MOTS EN TROIS TENUES ───────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1240, F, "Ma bagnole m'a lâché sur l'autoroute.", 'My car gave out on me on the motorway.', '/ma ba.ɲɔl ma la.ʃe syʁ lo.to.ʁut/', 'ma ba-nyol ma la-SHAY sür lo-to-ROOT', ['hugo', 'familier', 'voiture']),
  sent(1241, C, "Ma voiture est tombée en panne sur l'autoroute.", 'My car broke down on the motorway.', '/ma vwa.tyʁ ɛ tɔ̃.be ɑ̃ pan syʁ lo.to.ʁut/', 'ma vwa-tür eh tohⁿ-bay ahⁿ PANN sür lo-to-ROOT', ['hugo', 'courant', 'voiture'], FCVDR),
  sent(1242, F, 'On bosse comme des fous sur un nouveau projet.', "We're working like crazy on a new project.", '/ɔ̃ bɔs kɔm de fu syʁ œ̃ nu.vo pʁɔ.ʒɛ/', 'ohⁿ boss komm day FOO | sür uhⁿ noo-voh pro-ZHEH', ['hugo', 'familier', 'travail']),
  sent(1243, C, 'Nous travaillons beaucoup sur un nouveau projet.', 'We are working hard on a new project.', '/nu tʁa.va.jɔ̃ bo.ku syʁ œ̃ nu.vo pʁɔ.ʒɛ/', 'noo tra-va-yohⁿ boh-KOO | sür uhⁿ noo-voh pro-ZHEH', ['hugo', 'courant', 'travail'], FCVDR),
  sent(1244, F, "J'ai plus un rond.", "I'm broke.", '/ʒe ply.zœ̃ ʁɔ̃/', 'zhay plü-zuhⁿ ROHⁿ', ['hugo', 'familier', 'argent']),
  sent(1245, C, "Je n'ai plus d'argent.", 'I have no money left.', '/ʒə ne ply daʁ.ʒɑ̃/', 'zhuh nay plü dar-ZHAHⁿ', ['hugo', 'courant', 'argent'], FCVDR),
  sent(1246, F, 'Le soir, je bouquine un peu.', 'In the evening I read a bit.', '/lə swaʁ ʒə bu.kin œ̃ pø/', 'luh SWAR | zhuh boo-keen uhⁿ PEU', ['hugo', 'familier', 'livre']),
  sent(1247, C, 'Le soir, je lis un peu.', 'In the evening I read a little.', '/lə swaʁ ʒə li œ̃ pø/', 'luh SWAR | zhuh lee uhⁿ PEU', ['hugo', 'courant', 'livre']),
  sent(1248, F, "On s'est fait un resto avec les potes.", 'We went for a meal out with the gang.', '/ɔ̃ sɛ fɛ œ̃ ʁɛs.to a.vɛk le pɔt/', 'ohⁿ seh feh uhⁿ rehs-TOH | a-vehk lay POT', ['hugo', 'familier', 'ami']),
  sent(1249, C, 'Nous sommes allés au restaurant avec des amis.', 'We went to a restaurant with friends.', '/nu sɔm.za.le o ʁɛs.to.ʁɑ̃ a.vɛk de.za.mi/', 'noo somm-za-lay oh rehs-to-RAHⁿ | a-vehk day-za-MEE', ['hugo', 'courant', 'ami'], FCVDR),
  phrase(1250, F, 'le boulot', 'work, job (informal)', '/lə bu.lo/', 'luh boo-LOH', ['mot', 'familier', 'travail']),
  phrase(1251, S, "l'emploi", 'employment, a post (formal)', '/lɑ̃.plwa/', 'lahⁿ-PLWA', ['mot', 'soutenu', 'travail']),
  phrase(1252, S, 'se restaurer', 'to have something to eat (formal)', '/sə ʁɛs.to.ʁe/', 'suh rehs-to-RAY', ['mot', 'soutenu', 'manger']),
  sent(1253, S, 'Cet ouvrage est disponible à la bibliothèque.', 'This book is available at the library.', '/sɛ.tu.vʁaʒ ɛ dis.pɔ.nibl a la bi.bli.jɔ.tɛk/', 'seh-too-vrazh eh dees-po-NEEBL | a la bee-blee-yo-TEHK', ['mot', 'soutenu', 'livre']),
  sent(1254, S, 'Les véhicules doivent rester dans le stationnement.', 'Vehicles must stay in the car park.', '/le ve.i.kyl dwav ʁɛs.te dɑ̃ lə sta.sjɔn.mɑ̃/', 'lay vay-ee-KÜL | dwav rehs-tay dahⁿ luh sta-syonn-MAHⁿ', ['mot', 'soutenu', 'voiture', 'quebec']),
  sent(1255, S, 'Les fonds seront versés à la fin du mois.', 'The funds will be paid at the end of the month.', '/le fɔ̃ sə.ʁɔ̃ vɛʁ.se a la fɛ̃ dy mwa/', 'lay FOHⁿ | suh-rohⁿ vehr-SAY a la fehⁿ dü MWA', ['mot', 'soutenu', 'argent']),
  sent(1256, C, 'Je suis venu au travail en bus.', 'I came to work by bus.', '/ʒə sɥi və.ny o tʁa.vaj ɑ̃ bys/', 'zhuh swee vuh-NÜ oh tra-VAHY ahⁿ BÜS', ['hugo', 'courant', 'travail']),
  sent(1257, C, "Un mot familier n'est pas une faute. C'est un mot entre amis.", 'An informal word is not a mistake. It is a word between friends.', '/œ̃ mo fa.mi.lje nɛ pa.zyn fot sɛ.tœ̃ mo ɑ̃.tʁa.mi/', 'uhⁿ moh fa-mee-LYAY neh pa-zün FOHT | seh-tuhⁿ moh ahⁿ-tra-MEE', ['rule', 'mot'], ['flashcard'],
    rule('« Bagnole » dans un courriel à ta banque : une faute, ou un mauvais choix ?', 'Un mauvais choix, pas une faute. Le mot existe ; il ne va pas avec ta banque.')),
  phrase(1258, F, 'bosser', 'to work (informal)', '/bɔ.se/', 'bo-SAY', ['mot', 'familier', 'travail']),
  sent(1259, C, 'Je travaille demain.', 'I am working tomorrow.', '/ʒə tʁa.vaj də.mɛ̃/', 'zhuh tra-vahy duh-MEHⁿ', ['mot', 'courant', 'travail'], FCVR,
    reg('Dis-le à ta directrice : « Je bosse demain. »', 'bosser est familier ; travailler va partout.')),
];

/* ── ACT 4 · LA GRAMMAIRE DU REGISTRE ───────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1260, F, "Salut, c'est Awa. T'es où ?", "Hi, it's Awa. Where are you?", '/sa.ly sɛ.ta.wa te u/', 'sa-LÜ | seh-ta-WA | teh OO', ['awa', 'familier', 'elision']),
  sent(1261, F, "J'ai essayé de t'appeler, mais ça répond pas.", 'I tried calling you, but no answer.', '/ʒe e.se.je də ta.ple mɛ sa ʁe.pɔ̃ pa/', 'zhay ay-say-yay duh ta-PLAY | meh sa ray-pohⁿ PA', ['awa', 'familier', 'ne-tombe']),
  sent(1262, F, 'On va au cinéma ce soir avec Moussa.', "We're going to the cinema tonight with Moussa.", '/ɔ̃ va o si.ne.ma sə swaʁ a.vɛk mu.sa/', 'ohⁿ va oh see-nay-MA suh SWAR | a-vehk moo-SA', ['awa', 'familier', 'on']),
  sent(1263, F, 'Y a une séance à vingt heures.', "There's a showing at eight.", '/ja yn se.ɑ̃s a vɛ̃.tœʁ/', 'ya ün say-AHⁿS a vehⁿ-TUHR', ['awa', 'familier', 'elision']),
  sent(1264, F, 'Tu viens ou pas ?', 'Are you coming or not?', '/ty vjɛ̃ u pa/', 'tü vyehⁿ oo PA', ['awa', 'familier', 'question']),
  sent(1265, F, 'Je sais pas si Moussa a les billets.', "Dunno if Moussa has the tickets.", '/ʃe pa si mu.sa a le bi.jɛ/', 'sheh pa see moo-SA a lay bee-YEH', ['awa', 'familier', 'ne-tombe']),
  sent(1266, F, 'Rappelle-moi vite, ça m’arrange.', "Call me back quick, that'd help.", '/ʁa.pɛl.mwa vit sa ma.ʁɑ̃ʒ/', 'ra-pehl-mwa VEET | sa ma-RAHⁿZH', ['awa', 'familier', 'ca']),
  sent(1267, C, 'Nous allons au cinéma ce soir.', 'We are going to the cinema tonight.', '/nu.za.lɔ̃ o si.ne.ma sə swaʁ/', 'noo-za-lohⁿ oh see-nay-MA suh SWAR', ['courant', 'nous'], FCVDR),
  sent(1268, C, 'Il y a une séance à vingt heures.', 'There is a showing at eight.', '/i.li.ja yn se.ɑ̃s a vɛ̃.tœʁ/', 'eel ya ün say-AHⁿS a vehⁿ-TUHR', ['courant', 'elision'], FCVDR),
  sent(1270, C, "Tu as vu l'heure ?", 'Have you seen the time?', '/ty a vy lœʁ/', 'tü a vü LUHR', ['courant', 'elision']),
  sent(1271, F, "T'as vu l'heure ?", 'Seen the time?', '/ta vy lœʁ/', 'ta vü LUHR', ['familier', 'elision']),
  sent(1272, C, 'Ça me convient.', 'That suits me.', '/sa mə kɔ̃.vjɛ̃/', 'sa muh kohⁿ-VYEHⁿ', ['courant', 'ca']),
  sent(1273, S, 'Cela me convient tout à fait.', 'That suits me perfectly.', '/sə.la mə kɔ̃.vjɛ̃ tu.ta.fɛ/', 'suh-la muh kohⁿ-vyehⁿ too-ta-FEH', ['soutenu', 'cela'], FCVDR),
  sent(1274, F, 'On part à huit heures.', "We're off at eight.", '/ɔ̃ paʁ a ɥi.tœʁ/', 'ohⁿ par a wee-TUHR', ['familier', 'on']),
  sent(1275, C, 'Nous partons à huit heures.', 'We are leaving at eight.', '/nu paʁ.tɔ̃ a ɥi.tœʁ/', 'noo par-tohⁿ a wee-TUHR', ['courant', 'nous']),
  sent(1276, C, 'Je ne sais pas si Moussa a les billets.', 'I do not know whether Moussa has the tickets.', '/ʒə nə sɛ pa si mu.sa a le bi.jɛ/', 'zhuh nuh seh pa see moo-SA a lay bee-YEH', ['courant', 'ne'], FCVDR),
  sent(1277, C, 'Le registre s’entend aussi dans la grammaire : ne, nous, la question, cela.', 'Register shows in the grammar too: ne, nous, the question, cela.', '/lə ʁə.ʒistʁ sɑ̃.tɑ̃ o.si dɑ̃ la ɡʁa.mɛʁ nə nu la kɛs.tjɔ̃ sə.la/', 'luh ruh-zheestr sahⁿ-tahⁿ oh-see dahⁿ la gra-MEHR | NUH | NOO | la kehs-TYOHⁿ | suh-LA', ['rule', 'grammaire'], ['flashcard'],
    rule('Quatre petits signes montrent un message soigné. Lesquels ?', 'Le ne gardé, nous au lieu de on, la question avec est-ce que ou l’inversion, et cela au lieu de ça.')),
];

/* ── ACT 5 · UN MESSAGE, TROIS LECTEURS ─────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1280, F, 'Devine quoi, je déménage le premier juillet.', "Guess what, I'm moving on the first of July.", '/də.vin kwa ʒə de.me.naʒ lə pʁə.mje ʒɥi.jɛ/', 'duh-veen KWA | zhuh day-may-nazh luh pruh-myay zhwee-YEH', ['sami', 'familier']),
  sent(1281, F, "T'es libre pour m'aider ?", 'You free to help me?', '/te libʁ puʁ mɛ.de/', 'teh leebr poor meh-DAY', ['sami', 'familier', 'elision']),
  sent(1282, F, 'Y aura de la pizza.', "There'll be pizza.", '/jo.ʁa də la pid.za/', 'yo-ra duh la peed-ZA', ['sami', 'familier', 'elision']),
  sent(1283, C, "Je t'annonce que je déménage le premier juillet.", "I'm letting you know I'm moving on the first of July.", '/ʒə ta.nɔ̃s kə ʒə de.me.naʒ lə pʁə.mje ʒɥi.jɛ/', 'zhuh ta-NOHⁿS | kuh zhuh day-may-nazh luh pruh-myay zhwee-YEH', ['sami', 'courant'], FCVDR),
  sent(1284, C, 'Est-ce que tu peux me remplacer à la réunion ?', 'Can you stand in for me at the meeting?', '/ɛs.kə ty pø mə ʁɑ̃.pla.se a la ʁe.y.njɔ̃/', 'ehs-kuh tü peu muh rahⁿ-pla-say a la ray-ü-NYOHⁿ', ['sami', 'courant', 'question']),
  sent(1285, C, "Merci d'avance.", 'Thanks in advance.', '/mɛʁ.si da.vɑ̃s/', 'mehr-see da-VAHⁿS', ['sami', 'courant', 'fermer']),
  sent(1286, S, "Je vous informe de mon changement d'adresse.", 'I am informing you of my change of address.', '/ʒə vu.zɛ̃.fɔʁm də mɔ̃ ʃɑ̃ʒ.mɑ̃ da.dʁɛs/', 'zhuh voo-zehⁿ-form duh mohⁿ shahⁿzh-mahⁿ da-DREHS', ['sami', 'soutenu'], FCVDR),
  sent(1287, S, 'Pourriez-vous mettre à jour mon dossier ?', 'Could you update my file?', '/pu.ʁje.vu mɛ.tʁa ʒuʁ mɔ̃ dɔ.sje/', 'poo-ryay-voo meh-tra zhoor mohⁿ do-SYAY', ['sami', 'soutenu', 'question'], FCVDR),
  phrase(1288, S, 'à compter du premier juillet', 'as of the first of July', '/a kɔ̃.te dy pʁə.mje ʒɥi.jɛ/', 'a kohⁿ-tay dü pruh-myay zhwee-YEH', ['sami', 'soutenu']),
  sent(1289, C, 'Je prends deux jours de congé.', 'I am taking two days off.', '/ʒə pʁɑ̃ dø ʒuʁ də kɔ̃.ʒe/', 'zhuh prahⁿ deu zhoor duh kohⁿ-ZHAY', ['sami', 'courant']),
  sent(1290, S, 'Je reste à votre disposition pour tout renseignement.', 'I remain at your disposal for any information.', '/ʒə ʁɛst a vɔtʁ dis.po.zi.sjɔ̃ puʁ tu ʁɑ̃.sɛɲ.mɑ̃/', 'zhuh rehst a votr dees-po-zee-SYOHⁿ | poor too rahⁿ-sehny-MAHⁿ', ['sami', 'soutenu', 'fermer']),
  sent(1291, F, "Je t'explique tout samedi.", "I'll tell you everything on Saturday.", '/ʒə tɛk.splik tu sam.di/', 'zhuh tehk-spleek too sam-DEE', ['sami', 'familier']),
  sent(1292, C, 'Même nouvelle, trois lecteurs : les faits restent, la tenue change.', 'Same news, three readers: the facts stay, the outfit changes.', '/mɛm nu.vɛl tʁwa lɛk.tœʁ le fɛ ʁɛst la tə.ny ʃɑ̃ʒ/', 'mem noo-VEHL | trwa lehk-TUHR | lay feh REHST | la tuh-nü SHAHⁿZH', ['rule', 'lecteur'], ['flashcard'],
    rule('Tu annonces ton déménagement à Chloé, à Marc et à la bibliothèque. Qu’est-ce qui ne change jamais ?', 'Les faits : la date, l’adresse, ce que tu demandes. Seule la tenue change.')),
  sent(1293, C, 'Je déménage le premier juillet.', 'I am moving on the first of July.', '/ʒə de.me.naʒ lə pʁə.mje ʒɥi.jɛ/', 'zhuh day-may-nazh luh pruh-myay zhwee-YEH', ['sami', 'courant'], FCVDR),
];

/* ── ACT 6 · LES TEXTOS ─────────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  texto(1300, 'slt', 'hi (texting)', 'salut'),
  texto(1301, 'qqch', 'something (texting)', 'quelque chose'),
  texto(1302, 'jsp', 'dunno (texting)', 'je sais pas'),
  texto(1303, 'mdr', 'lol (texting)', 'mort de rire'),
  texto(1304, 'stp', 'please (texting)', "s'il te plaît"),
  texto(1305, 'tkt', "don't worry (texting)", "t'inquiète"),
  texto(1306, 'rdv', 'meeting, date (texting)', 'rendez-vous'),
  texto(1307, 'bcp', 'a lot (texting)', 'beaucoup'),
  texto(1308, 'dsl', 'sorry (texting)', 'désolé'),
  texto(1309, 'pk', 'why (texting)', 'pourquoi'),
  sent(1310, F, 'On fait quelque chose ce soir ?', 'Are we doing something tonight?', '/ɔ̃ fɛ kɛl.kə ʃoz sə swaʁ/', 'ohⁿ feh kehl-kuh shohz suh SWAR', ['texto', 'familier', 'on']),
  sent(1311, F, "T'inquiète, on rentre tôt.", "Don't worry, we'll be home early.", '/tɛ̃.kjɛt ɔ̃ ʁɑ̃tʁ to/', 'tehⁿ-KYEHT | ohⁿ rahⁿtr TOH', ['texto', 'familier', 'ne-tombe']),
  sent(1313, C, 'Rendez-vous à dix-neuf heures devant le métro.', 'Meet at seven in front of the metro.', '/ʁɑ̃.de.vu a diz.nœ.vœʁ də.vɑ̃ lə me.tʁo/', 'rahⁿ-day-VOO | a deez-nuh-VUHR duh-vahⁿ luh may-TROH', ['texto', 'courant'], FCVDR),
  sent(1314, C, 'Les abréviations vont aux amis. Un courriel les écrit en entier.', 'Abbreviations are for friends. An email writes them out in full.', '/le.za.bʁe.vja.sjɔ̃ vɔ̃ o.za.mi œ̃ ku.ʁjɛl le.ze.kʁi ɑ̃.nɑ̃.tje/', 'lay-za-bray-vya-SYOHⁿ vohⁿ oh-za-MEE | uhⁿ koo-RYEHL lay-zay-kree ahⁿ-nahⁿ-TYAY', ['rule', 'texto'], ['flashcard'],
    rule('Tu écris à ta propriétaire. « stp », ou « s’il vous plaît » ?', 'S’il vous plaît, en entier. stp, c’est pour un ami, par texto.')),
  sent(1315, F, "Désolé, j'aurai dix minutes de retard.", "Sorry, I'll be ten minutes late.", '/de.zɔ.le ʒo.ʁe di mi.nyt də ʁə.taʁ/', 'day-zo-LAY | zho-ray dee mee-nüt duh ruh-TAR', ['texto', 'familier']),
  sent(1316, C, "Je suis désolé, j'aurai dix minutes de retard.", 'I am sorry, I will be ten minutes late.', '/ʒə sɥi de.zɔ.le ʒo.ʁe di mi.nyt də ʁə.taʁ/', 'zhuh swee day-zo-LAY | zho-ray dee mee-nüt duh ruh-TAR', ['texto', 'courant'], FCVDR),
  sent(1317, C, 'Je ne sais pas encore.', 'I do not know yet.', '/ʒə nə sɛ pa.zɑ̃.kɔʁ/', 'zhuh nuh seh pa-zahⁿ-KOR', ['texto', 'courant', 'ne']),
];

/* ── ACT 7 · OUVRIR ET FERMER ───────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  phrase(1320, F, 'Gros bisous', 'Lots of love', '/ɡʁo bi.zu/', 'groh bee-ZOO', ['fermer', 'familier']),
  phrase(1321, F, 'Bises', 'Love (sign-off, France and Switzerland)', '/biz/', 'BEEZ', ['fermer', 'familier']),
  phrase(1322, C, 'Bonne fin de journée', 'Have a good rest of your day', '/bɔn fɛ̃ də ʒuʁ.ne/', 'bonn fehⁿ duh zhoor-NAY', ['fermer', 'courant']),
  phrase(1323, C, 'Bonjour Madame Tremblay,', 'Hello Ms Tremblay,', '/bɔ̃.ʒuʁ ma.dam tʁɑ̃.blɛ/', 'bohⁿ-zhoor ma-dam trahⁿ-BLEH', ['ouvrir', 'courant']),
  phrase(1324, C, 'Bonjour Marc,', 'Hello Marc,', '/bɔ̃.ʒuʁ maʁk/', 'bohⁿ-zhoor MARK', ['ouvrir', 'courant']),
  phrase(1325, F, 'Salut Maxime,', 'Hi Maxime,', '/sa.ly mak.sim/', 'sa-lü mak-SEEM', ['ouvrir', 'familier']),
  phrase(1326, C, 'Au plaisir', 'Talk soon (Québec sign-off)', '/o plɛ.ziʁ/', 'oh pleh-ZEER', ['fermer', 'courant', 'quebec']),
  phrase(1327, C, 'Bien cordialement', 'Kind regards', '/bjɛ̃ kɔʁ.dja.lə.mɑ̃/', 'byehⁿ kor-dya-luh-MAHⁿ', ['fermer', 'courant']),
  sent(1328, C, 'La première et la dernière ligne annoncent le registre.', 'The first and last lines announce the register.', '/la pʁə.mjɛʁ e la dɛʁ.njɛʁ liɲ a.nɔ̃s lə ʁə.ʒistʁ/', 'la pruh-MYEHR ay la dehr-NYEHR LEEÑ | a-nohⁿs luh ruh-ZHEESTR', ['rule', 'formule'], ['flashcard'],
    rule('Tu ouvres un courriel. Où vois-tu le registre en premier ?', 'Dans la première ligne : Coucou, Salut, Bonjour Marc ou Madame, Monsieur. La dernière ligne le confirme.')),
  sent(1329, F, "Coucou Chloé, j'ai une grande nouvelle.", "Hi Chloé, I've got big news.", '/ku.ku klo.e ʒe yn ɡʁɑ̃d nu.vɛl/', 'koo-koo klo-AY | zhay ün grahⁿd noo-VEHL', ['ouvrir', 'familier']),
  sent(1330, C, 'Merci et bonne journée.', 'Thanks, and have a good day.', '/mɛʁ.si e bɔn ʒuʁ.ne/', 'mehr-see ay bonn zhoor-NAY', ['fermer', 'courant']),
  sent(1331, S, 'Je vous écris au sujet de mon abonnement.', 'I am writing about my membership.', '/ʒə vu.ze.kʁi o sy.ʒɛ də mɔ̃.na.bɔn.mɑ̃/', 'zhuh voo-zay-KREE | oh sü-zheh duh mohⁿ-na-bonn-MAHⁿ', ['ouvrir', 'soutenu'], FCVDR),
];

/* ── ACT 8 · LE FAUX PAS ────────────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1340, F, "Coucou, je bosse pas demain, j'ai le dentiste.", "Hi there, not working tomorrow, got the dentist.", '/ku.ku ʒə bɔs pa də.mɛ̃ ʒe lə dɑ̃.tist/', 'koo-KOO | zhuh boss pa duh-MEHⁿ | zhay luh dahⁿ-TEEST', ['theo', 'familier', 'faux-pas']),
  sent(1341, C, 'Bonjour Madame Lacroix, je serai absent demain matin.', 'Good morning Ms Lacroix, I will be away tomorrow morning.', '/bɔ̃.ʒuʁ ma.dam la.kʁwa ʒə sə.ʁe ap.sɑ̃ də.mɛ̃ ma.tɛ̃/', 'bohⁿ-zhoor ma-dam la-KRWA | zhuh suh-ray ap-sahⁿ duh-mehⁿ ma-TEHⁿ', ['theo', 'courant'], FCVDR),
  sent(1342, C, "J'ai un rendez-vous chez le dentiste.", 'I have a dentist appointment.', '/ʒe œ̃ ʁɑ̃.de.vu ʃe lə dɑ̃.tist/', 'zhay uhⁿ rahⁿ-day-VOO | shay luh dahⁿ-TEEST', ['theo', 'courant']),
  sent(1343, S, 'Cher Samir, je vous informe que je ne pourrai pas venir samedi.', 'Dear Samir, I hereby inform you that I shall not be able to come on Saturday.', '/ʃɛʁ sa.miʁ ʒə vu.zɛ̃.fɔʁm kə ʒə nə pu.ʁe pa və.niʁ sam.di/', 'shehr sa-MEER | zhuh voo-zehⁿ-form kuh zhuh nuh poo-ray pa vuh-neer sam-DEE', ['theo', 'soutenu', 'faux-pas', 'reconnaissance'], RECO),
  sent(1344, F, 'Salut Samir, je peux pas venir samedi, désolé.', "Hey Samir, can't come Saturday, sorry.", '/sa.ly sa.miʁ ʃpø pa və.niʁ sam.di de.zɔ.le/', 'sa-lü sa-MEER | shpeu pa vuh-neer sam-DEE | day-zo-LAY', ['theo', 'familier']),
  sent(1345, C, "Merci de passer par le formulaire d'absence.", 'Please go through the absence form.', '/mɛʁ.si də pa.se paʁ lə fɔʁ.my.lɛʁ dap.sɑ̃s/', 'mehr-see duh pa-SAY | par luh for-mü-lehr dap-SAHⁿS', ['theo', 'courant']),
  sent(1346, C, 'Trop familier, tu sembles négligent. Trop soutenu, tu sembles distant.', 'Too informal, you seem careless. Too formal, you seem distant.', '/tʁo fa.mi.lje ty sɑ̃bl ne.ɡli.ʒɑ̃ tʁo sut.ny ty sɑ̃bl dis.tɑ̃/', 'troh fa-mee-LYAY | tü sahⁿbl nay-glee-ZHAHⁿ | troh soot-NÜ | tü sahⁿbl dees-TAHⁿ', ['rule', 'faux-pas'], ['flashcard'],
    rule('Tu écris « Je vous informe » à ton meilleur ami. Que va-t-il penser ?', 'Que tu es fâché, ou que tu plaisantes. Trop soutenu met de la distance.')),
  sent(1347, F, "Désolé, je t'ai écrit comme un notaire.", 'Sorry, I wrote to you like a lawyer.', '/de.zɔ.le ʒə te e.kʁi kɔ.mœ̃ nɔ.tɛʁ/', 'day-zo-LAY | zhuh tay ay-KREE | ko-muhⁿ no-TEHR', ['theo', 'familier', 'reparer']),
  sent(1348, C, 'Excusez-moi pour ce message un peu trop familier.', 'Sorry for that rather too casual message.', '/ɛk.sky.ze.mwa puʁ sə me.saʒ œ̃ pø tʁo fa.mi.lje/', 'ehk-skü-zay-MWA | poor suh may-SAZH uhⁿ peu troh fa-mee-LYAY', ['theo', 'courant', 'reparer'], FCVDR),
  sent(1349, F, 'Pardon pour le retard.', 'Sorry for being late.', '/paʁ.dɔ̃ puʁ lə ʁə.taʁ/', 'par-dohⁿ poor luh ruh-TAR', ['piege', 'familier']),
  sent(1350, C, 'Bonjour, avez-vous reçu mon rapport ?', 'Hello, did you receive my report?', '/bɔ̃.ʒuʁ a.ve.vu ʁə.sy mɔ̃ ʁa.pɔʁ/', 'bohⁿ-ZHOOR | a-vay-voo ruh-sü mohⁿ ra-POR', ['piege', 'courant']),
  sent(1351, C, "Je voudrais un formulaire, s'il vous plaît.", 'I would like a form, please.', '/ʒə vu.dʁɛ œ̃ fɔʁ.my.lɛʁ sil vu plɛ/', 'zhuh voo-dreh uhⁿ for-mü-LEHR | seel voo PLEH', ['piege', 'courant'], FCVDR),
  sent(1352, C, 'Tu peux sortir les poubelles ?', 'Can you take the bins out?', '/ty pø sɔʁ.tiʁ le pu.bɛl/', 'tü peu sor-teer lay poo-BEHL', ['piege', 'courant']),
  sent(1353, C, 'Oui, bien sûr, aucun problème.', 'Yes, of course, no problem.', '/wi bjɛ̃ syʁ o.kœ̃ pʁɔ.blɛm/', 'WEE | byehⁿ SÜR | oh-kuhⁿ pro-BLEM', ['piege', 'courant']),
  sent(1354, F, "Merci pour l'invitation, c'est trop sympa.", "Thanks for the invite, that's so nice.", '/mɛʁ.si puʁ lɛ̃.vi.ta.sjɔ̃ sɛ tʁo sɛ̃.pa/', 'mehr-see poor lehⁿ-vee-ta-SYOHⁿ | seh troh sehⁿ-PA', ['piege', 'familier']),
];

/* ── ACT 9 · AU QUÉBEC ──────────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1360, F, 'Mon char est encore au garage.', 'My car is still at the garage. (Québec)', '/mɔ̃ ʃaʁ ɛ.tɑ̃.kɔ.ʁo ɡa.ʁaʒ/', 'mohⁿ SHAR | eh-tahⁿ-ko-roh ga-RAZH', ['quebec', 'familier', 'voiture']),
  sent(1361, F, 'Samedi, je vais magasiner avec ma blonde.', "On Saturday I'm going shopping with my girlfriend. (Québec)", '/sam.di ʒə vɛ ma.ɡa.zi.ne a.vɛk ma blɔ̃d/', 'sam-DEE | zhuh veh ma-ga-zee-NAY | a-vehk ma BLOHⁿD', ['quebec', 'familier']),
  sent(1362, F, "C'est plate, il pleut toute la fin de semaine.", "It's a drag, it's raining all weekend. (Québec)", '/sɛ plat il plø tut la fɛ̃ də sə.mɛn/', 'seh PLAT | eel pleu toot la fehⁿ duh suh-MEN', ['quebec', 'familier']),
  sent(1363, F, 'Mon chum travaille de soir cette semaine.', 'My boyfriend is on evenings this week. (Québec)', '/mɔ̃ tʃɔm tʁa.vaj də swaʁ sɛt sə.mɛn/', 'mohⁿ CHOMM | tra-vahy duh SWAR | seht suh-MEN', ['quebec', 'familier']),
  sent(1364, F, "J'ai pas pantoute le goût de cuisiner.", "I don't feel like cooking at all. (Québec)", '/ʒe pa pɑ̃.tut lə ɡu də kɥi.zi.ne/', 'zhay pa pahⁿ-TOOT | luh goo duh kwee-zee-NAY', ['quebec', 'familier', 'ne-tombe']),
  sent(1365, C, 'On dîne ensemble à midi ?', 'Shall we have lunch together at noon? (Québec)', '/ɔ̃ din ɑ̃.sɑ̃bl a mi.di/', 'ohⁿ deen ahⁿ-sahⁿbl a mee-DEE', ['quebec', 'courant']),
  sent(1366, F, 'Il fait frette ce matin.', "It's freezing this morning. (Québec)", '/il fɛ fʁɛt sə ma.tɛ̃/', 'eel feh FREHT | suh ma-TEHⁿ', ['quebec', 'familier']),
  sent(1367, C, "C'est correct, on se voit demain.", "That's fine, see you tomorrow. (Québec)", '/sɛ kɔ.ʁɛkt ɔ̃ sə vwa də.mɛ̃/', 'seh ko-REHKT | ohⁿ suh vwa duh-MEHⁿ', ['quebec', 'courant']),
  sent(1368, C, 'Samedi, je vais faire les magasins avec ma copine.', "On Saturday I'm going shopping with my girlfriend.", '/sam.di ʒə vɛ fɛʁ le ma.ɡa.zɛ̃ a.vɛk ma kɔ.pin/', 'sam-DEE | zhuh veh fehr lay ma-ga-ZEHⁿ | a-vehk ma ko-PEEN', ['france', 'courant']),
  sent(1369, C, "C'est ennuyeux, il pleut tout le week-end.", "It's a pity, it's raining all weekend.", '/sɛ.tɑ̃.nɥi.jø il plø tu lə wi.kɛnd/', 'seh-tahⁿ-nwee-YEU | eel pleu too luh wee-KEHND', ['france', 'courant']),
  sent(1370, C, 'Mon copain travaille le soir cette semaine.', 'My boyfriend works evenings this week.', '/mɔ̃ kɔ.pɛ̃ tʁa.vaj lə swaʁ sɛt sə.mɛn/', 'mohⁿ ko-PEHⁿ | tra-vahy luh SWAR | seht suh-MEN', ['france', 'courant']),
  sent(1371, C, "Je n'ai pas du tout envie de cuisiner.", 'I do not feel like cooking at all.', '/ʒə ne pa dy tu ɑ̃.vi də kɥi.zi.ne/', 'zhuh nay pa dü TOO | ahⁿ-vee duh kwee-zee-NAY', ['france', 'courant'], FCVDR),
  sent(1372, C, 'Il fait très froid ce matin.', 'It is very cold this morning.', '/il fɛ tʁɛ fʁwa sə ma.tɛ̃/', 'eel feh treh FRWA | suh ma-TEHⁿ', ['france', 'courant']),
  sent(1373, C, 'On déjeune ensemble à midi ?', 'Shall we have lunch together at noon? (France)', '/ɔ̃ de.ʒœn ɑ̃.sɑ̃bl a mi.di/', 'ohⁿ day-ZHUHNN | ahⁿ-sahⁿbl a mee-DEE', ['france', 'courant']),
  sent(1374, C, 'Au Québec, le familier va plus loin. Courriel et fin de semaine, c’est du courant.', 'In Québec, informal French goes further. Courriel and fin de semaine are everyday standard.', '/o ke.bɛk lə fa.mi.lje va ply lwɛ̃ ku.ʁjɛl e fɛ̃ də sə.mɛn sɛ dy ku.ʁɑ̃/', 'oh kay-BEHK | luh fa-mee-lyay va plü LWEHⁿ | koo-ryehl ay fehⁿ duh suh-MEN | seh dü koo-RAHⁿ', ['rule', 'quebec'], ['flashcard'],
    rule('« Mon char est au garage » : du français de France ?', 'Non, du familier québécois. En France, on dit ma voiture, ou ma bagnole entre amis.')),
  phrase(1375, F, 'un char', 'a car (Québec, informal)', '/œ̃ ʃaʁ/', 'uhⁿ SHAR', ['quebec', 'familier', 'voiture']),
  phrase(1376, F, 'ma blonde', 'my girlfriend (Québec)', '/ma blɔ̃d/', 'ma BLOHⁿD', ['quebec', 'familier']),
  phrase(1377, F, 'mon chum', 'my boyfriend, my buddy (Québec)', '/mɔ̃ tʃɔm/', 'mohⁿ CHOMM', ['quebec', 'familier']),
  phrase(1378, F, 'pantoute', 'not at all (Québec)', '/pɑ̃.tut/', 'pahⁿ-TOOT', ['quebec', 'familier']),
  phrase(1379, F, "c'est plate", "it's boring (Québec)", '/sɛ plat/', 'seh PLAT', ['quebec', 'familier']),
];

/* ── ACT 10 · LA MÊME NOUVELLE, DEUX FOIS ───────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1380, C, 'Mon vol est annulé à cause de la tempête.', 'My flight is cancelled because of the storm.', '/mɔ̃ vɔl ɛ.ta.ny.le a koz də la tɑ̃.pɛt/', 'mohⁿ VOL | eh-ta-nü-LAY | a kohz duh la tahⁿ-PEHT', ['modele', 'courant'], FCVDR),
  sent(1381, C, 'Je rentre mardi soir au lieu de lundi.', 'I am coming back on Tuesday evening instead of Monday.', '/ʒə ʁɑ̃tʁ maʁ.di swaʁ o ljø də lœ̃.di/', 'zhuh rahⁿtr mar-dee SWAR | oh lyeu duh luhⁿ-DEE', ['modele', 'courant'], FCVDR),
  sent(1382, F, "Si t'as pas le temps, pas de souci.", "If you haven't got time, no worries.", '/si ta pa lə tɑ̃ pad su.si/', 'see ta pa luh TAHⁿ | pad soo-SEE', ['modele', 'familier', 'ne-tombe']),
  sent(1383, F, "T'es la meilleure.", "You're the best.", '/te la mɛ.jœʁ/', 'teh la meh-YUHR', ['modele', 'familier', 'elision']),
  sent(1384, C, 'Je ne pourrai donc pas être au bureau lundi.', 'So I will not be able to be in the office on Monday.', '/ʒə nə pu.ʁe dɔ̃k pa.zɛ.tʁo by.ʁo lœ̃.di/', 'zhuh nuh poo-ray dohⁿk pa-zeh-troh bü-roh luhⁿ-DEE', ['modele', 'courant'], FCVDR),
  sent(1385, C, "La compagnie m'a proposé un vol mardi matin.", 'The airline offered me a flight on Tuesday morning.', '/la kɔ̃.pa.ɲi ma pʁɔ.po.ze œ̃ vɔl maʁ.di ma.tɛ̃/', 'la kohⁿ-pa-NYEE | ma pro-po-zay uhⁿ VOL | mar-dee ma-TEHⁿ', ['modele', 'courant']),
  sent(1386, S, 'Pourriez-vous me confirmer que cela vous convient ?', 'Could you confirm that this suits you?', '/pu.ʁje.vu mə kɔ̃.fiʁ.me kə sə.la vu kɔ̃.vjɛ̃/', 'poo-ryay-voo muh kohⁿ-feer-MAY | kuh suh-la voo kohⁿ-VYEHⁿ', ['modele', 'soutenu', 'cela'], FCVDR),
  sent(1387, S, 'Je vous prie de m’excuser pour ce contretemps.', 'Please accept my apologies for this setback.', '/ʒə vu pʁi də mɛk.sky.ze puʁ sə kɔ̃.tʁə.tɑ̃/', 'zhuh voo pree duh mehk-skü-ZAY | poor suh kohⁿ-truh-TAHⁿ', ['modele', 'soutenu', 'fermer']),
  phrase(1388, C, "l'objet", 'the subject line (of an email)', '/lɔb.ʒɛ/', 'lob-ZHEH', ['modele', 'courant']),
  sent(1389, C, "Avant d'écrire, demande-toi qui va lire.", 'Before you write, ask yourself who will read it.', '/a.vɑ̃ de.kʁiʁ də.mɑ̃d.twa ki va liʁ/', 'a-vahⁿ day-KREER | duh-mahⁿd-TWA kee va LEER', ['rule', 'lecteur'], ['flashcard'],
    rule('La première question avant un message important ?', 'Qui va le lire, et à quel moment. Le registre en découle.')),
  sent(1390, C, 'Inès présentera le rapport à ma place.', 'Inès will present the report in my place.', '/i.nɛs pʁe.zɑ̃t.ʁa lə ʁa.pɔʁ a ma plas/', 'ee-NEHS | pray-zahⁿt-ra luh ra-POR a ma PLASS', ['modele', 'courant']),
  sent(1391, F, 'Tu peux toujours venir me chercher ?', 'Can you still come and pick me up?', '/ty pø tu.ʒuʁ və.niʁ mə ʃɛʁ.ʃe/', 'tü peu too-zhoor vuh-neer muh shehr-SHAY', ['modele', 'familier', 'question']),
  sent(1392, F, "Je t'envoie l'heure demain.", "I'll send you the time tomorrow.", '/ʒə tɑ̃.vwa lœʁ də.mɛ̃/', 'zhuh tahⁿ-vwa LUHR duh-MEHⁿ', ['modele', 'familier']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS,
  ACT6_ROWS, ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE ANCHOR TEXTS AND THEIR KEYS
 *
 *  Workshop shape: every act from 2 on meets ONE anchor text first. The
 *  readings live here so the reading, the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Inès writes the same news twice before 7 h 30. 104 words. */
export const INES_TEXT =
  "Mardi, 7 h 12. Inès écrit à son amie Chloé : « Coucou ! Grosse nuit, le petit a de la fièvre. Je bosse de la maison aujourd'hui, pas le choix. On se voit pas ce midi, dsl. Je te tiens au courant. Bisous ! » À 7 h 20, elle écrit à sa responsable : « Bonjour Madame Bouchard, mon fils est malade ce matin et je ne peux pas le laisser seul. Je travaillerai de la maison aujourd'hui. Je reste joignable toute la journée. Je ne pourrai pas venir à la réunion de midi, mais j'enverrai mes notes avant. Je vous tiens au courant. Merci de votre compréhension. Inès »";

/** The pairs of INES_TEXT, familier then courant, for the reading key. */
export const INES_PAIRES = [
  ['Coucou', 'Bonjour Madame Bouchard'],
  ['le petit a de la fièvre', 'mon fils est malade'],
  ['je bosse', 'je travaillerai'],
  ['on se voit pas', 'je ne pourrai pas venir'],
  ['Bisous', 'Merci de votre compréhension'],
] as const;

/** Act 3: Hugo's message to Léa, all familier. 74 words. */
export const HUGO_TEXT =
  "Salut Léa ! Grosse semaine, je te raconte. Lundi, ma bagnole m'a lâché sur l'autoroute, alors je suis venu au boulot en bus toute la semaine. Au bureau, on bosse comme des fous sur un nouveau projet. Le soir, je bouquine un peu pour décrocher. Samedi, on s'est fait un resto avec les potes, mais c'était cher : j'ai plus un rond. Bref, je suis crevé, mais tout va bien. Et toi, ça roule ? Bises, Hugo";

/** The familier words in HUGO_TEXT, in order. */
export const HUGO_MOTS = ['bagnole', 'boulot', 'bosse', 'bouquine', 'resto', 'potes', 'plus un rond', 'crevé', 'ça roule'] as const;

/** Act 5: Sami announces his move three times. 128 words. */
export const DEMENAGEMENT_TEXT =
  "Sami déménage, et il annonce la nouvelle trois fois. À son amie Chloé, par texto : « Devine quoi, je déménage le premier juillet ! Un quatre et demi à Rosemont. T'es libre pour m'aider ? Y aura de la pizza. » À Marc, un collègue, par courriel : « Salut Marc, je t'annonce que je déménage le premier juillet. Je prends deux jours de congé, le 30 juin et le 2 juillet. Est-ce que tu peux me remplacer à la réunion du mardi ? Merci d'avance ! Sami » Au service des abonnements de la bibliothèque : « Madame, Monsieur, je vous informe de mon changement d'adresse à compter du premier juillet. Ma nouvelle adresse est le 4520, rue Chabot, à Montréal. Pourriez-vous mettre à jour mon dossier ? Je reste à votre disposition pour tout renseignement. Cordialement, Sami Roy »";

/** Act 6: the group chat « Les amis de Rosemont ». 64 words. */
export const TEXTO_TEXT =
  "Chloé : slt tt le monde, on fait qqch ce soir ? Maxime : jsp, je suis crevé mdr. Chloé : allez, stp, un resto vite fait ? Maxime : ok, mais pas trop tard, je bosse demain. Chloé : tkt, on rentre tôt. Rdv à 19 h devant le métro ? Sami : parfait, merci bcp ! Maxime : dsl, j'aurai 10 min de retard. Chloé : pk ? Maxime : le bus, comme d'hab. Chloé : mdr.";

/** The abbreviations in TEXTO_TEXT and what each stands for. */
export const TEXTO_CLES: readonly [string, string, string][] = [
  ['slt', 'salut', 'hi'], ['tt', 'tout', 'all'], ['qqch', 'quelque chose', 'something'],
  ['jsp', 'je sais pas', 'dunno'], ['mdr', 'mort de rire', 'lol'],
  ['stp', "s'il te plaît", 'please'], ['tkt', "t'inquiète", "don't worry"],
  ['rdv', 'rendez-vous', 'meeting, date'], ['bcp', 'beaucoup', 'a lot'],
  ['dsl', 'désolé', 'sorry'], ['pk', 'pourquoi', 'why'],
  ["d'hab", "d'habitude", 'usually'],
];

/** Act 7: Sami's inbox, first and last lines only. 110 words. */
export const BOITE_TEXT =
  "Lundi matin, Sami ouvre sa boîte de réception. Cinq messages l'attendent. Le premier, de Chloé, commence par « Coucou Sami ! » et finit par « Gros bisous ». Le deuxième vient de Maxime : « Salut Sami, » en haut, « À plus » en bas. Le troisième vient de Marc, un collègue : « Bonjour Sami, » puis, à la fin, « Bonne journée ». Le quatrième vient de la banque : « Bonjour Monsieur Roy, » et « Cordialement, le service à la clientèle ». Le dernier est une lettre de la Ville : « Monsieur, » en haut, et en bas une longue formule : « Je vous prie d'agréer, Monsieur, mes salutations distinguées. » Sami n'a encore lu aucun message, mais il sait déjà qui lui écrit, et sur quel ton.";

/** Act 10: the model the learner imitates. The same news, twice. 122 words. */
export const MODELE_TEXT =
  "Premier message, à Awa, par texto : « Salut Awa ! Mauvaise nouvelle : mon vol est annulé à cause de la tempête. Je rentre mardi soir au lieu de lundi. Tu peux toujours venir me chercher ? Si t'as pas le temps, pas de souci, je prendrai un taxi. Je t'envoie l'heure demain. T'es la meilleure ! Bisous » Deuxième message, à Mme Bouchard, par courriel. Objet : absence lundi. « Bonjour Madame Bouchard, mon vol est annulé à cause de la tempête. La compagnie m'a proposé un vol mardi matin. Je ne pourrai donc pas être au bureau lundi. Je reste joignable par courriel, et Inès présentera le rapport à ma place. Pourriez-vous me confirmer que cela vous convient ? Je vous prie de m'excuser pour ce contretemps. Cordialement, Alex »";

/** The facts the two messages share, and the moves that differ. */
export const MODELE_FAITS = ['le vol annulé', 'la tempête', 'le retour mardi', 'ce que tu demandes'] as const;
export const MODELE_MOVES = [
  "l'ouverture : Salut Awa, ou Bonjour Madame Bouchard",
  'la nouvelle, avec les mêmes faits',
  'la demande : une question à l’intonation, ou par inversion',
  'la fin : Bisous, ou une excuse et Cordialement',
] as const;
