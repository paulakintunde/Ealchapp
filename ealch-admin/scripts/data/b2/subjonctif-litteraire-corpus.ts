// b2.09.l1 « Reconnaître le subjonctif littéraire »: the authored corpus, the
// imports, the texts and the citation constants. DRAFT, to
// B1-BUILD-PLAYBOOK.md (grammar shape) under the B2 rules of B2-BUILD-LOG.md,
// RECOGNITION variant (spot → map → understand), mirroring b2.08.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later lessons may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 9 of the B2 trail, the first of Unit 2
// ══════════════════════════════════════════════════════════════════════════
//
//   THE LITERARY SUBJUNCTIVE, FOR RECOGNITION ONLY (Paul, 2026-09-27). The
//   learner finds the form, names its mood and tense, finds its infinitive
//   and maps it to the form a writer would use today. NOTHING in this lesson
//   asks for an imparfait or plus-que-parfait du subjonctif, or for a
//   « conditionnel passé deuxième forme »: no conjugation card, no gap to
//   fill with one, no error-spot whose answer holds one, no production drill
//   on a row that contains one (see §A.3).
//
//     le chapeau        fut / fût, eut / eût, fit / fît, vint / vînt,
//                       prit / prît, put / pût: the circumflex is the visual
//                       clue, the ear hears nothing (lesson 8 in B2 taught
//                       the passé simple WITHOUT it)
//     l'imparfait       built on the passé simple: aima, qu'il aimât; finit,
//     du subjonctif     qu'il finît; fut, qu'il fût; vint, qu'il vînt; the
//                       plural -assent / -issent / -ussent / -inssent; the
//                       3rd person singular is by far the most frequent and
//                       the only one still met outside old texts
//     le plus-que-      eût or fût + participle (qu'il eût fait, qu'elle fût
//     parfait           partie); against the passé antérieur « quand il eut
//                       fini » (no circumflex, lesson 8 in B2)
//     la deuxième       il eût fallu, j'eusse aimé, on eût dit, s'il l'eût
//     forme             su, il fût venu = the conditionnel passé (lessons 2
//                       and 3 in B2); after si and comme si the modern
//                       equivalent is the plus-que-parfait de l'INDICATIF
//     la concordance    main verb in the past → imparfait du subjonctif in a
//                       classic text, where today's French keeps the présent
//                       (the clock of lesson 5 in B2 is unchanged)
//     aujourd'hui       imparfait du subjonctif → présent du subjonctif;
//                       plus-que-parfait du subjonctif → subjonctif passé;
//                       deuxième forme → conditionnel passé (or the
//                       plus-que-parfait after si); the passé simple around
//                       it → passé composé (lesson 8 in B2)
//     les figées        fût-ce, ne fût-ce que (= ne serait-ce que), quoi
//                       qu'il en fût (today: quoi qu'il en soit), dût-il;
//                       « qu'à cela ne tienne » is a PRÉSENT du subjonctif
//     où il vit         classic novels, careful history writing, some
//                       journalism for effect, humour, formal speeches;
//                       NEVER in conversation or everyday writing
//     comprendre        a pastiche page read for global meaning, detail,
//                       inference and stance, irony above all (lessons 37 in
//                       B1 and 24 in B2)
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked (seedPlusPacks, read 2026-09-29), DB check
//      pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `litterature` (« La littérature », culture, b1-b2), sub-theme
//     « le subjonctif littéraire » already set in Postgres (brief). The seed
//     holds b2.08's rows fr.b2.litterature.1000-.1198 and the 001-006 rows.
//
//  2. ID BLOCK: `.1200`-`.1399`, assigned by the brief (1000-1199 is b2.08).
//     Authored rows sit in one sub-block per act (see the act banners).
//     Nothing outside the block.
//
//  3. RECOGNITION ONLY, ENFORCED BY THE DRILLS (as b2.08 §A.3). The app's
//     voiceflash and review screens show the ENGLISH and ask for the French,
//     so any row whose `fr` holds a literary form would make the learner
//     produce it. Therefore:
//       · `sl()` rows (literary lines) carry ONLY the `sentence` drill (word
//         tiles, every form given, order only): never in a deck tranche,
//         never in `practice`.
//       · `map()` rows are the SRS cards: `cardType: 'grammar'`, logged as
//         « recognise ». FRONT (`prompt`) = the literary line; ANSWER (`fr`) =
//         the sentence a writer would use today. Producing the modern form is
//         the lesson's goal, so voiceflash and review on it are wanted.
//       · `rule()` rows whose `fr` names a literary form (qu'il fût) carry
//         the `flashcard` drill ONLY (grammar card, « recognise »), so no
//         voiceflash or review screen asks for them from the English.
//       · No `conjugation` card anywhere.
//
//  4. NO VOCAB-TYPE ROW is authored (every row is kind `sentence`), so the
//     flashcard hub's headword rule cannot clash with the seed or with the
//     parallel lessons b2.10 to b2.12. The seed holds NO imparfait or
//     plus-que-parfait du subjonctif anywhere (probed 2026-09-29 for fût,
//     eût, fît, vînt, prît, pût, -assent, -ussent, eusse: zero hits), and no
//     « quoi qu'il en soit », « ne serait-ce que » or « qu'à cela ne tienne ».
//     Every `fr` was checked against the seed for an exact twin: none (the
//     modern equivalents the seed already holds are REUSED, §F).
//
//  5. REUSED ROWS. B1 is live (v76), Unit 1 of B2 is live (v78), so `src()`
//     resolves b2.08's passé simple rows (fut, eut, fit, the passé antérieur),
//     b2.02's conditionnel passé, b2.01's si + plus-que-parfait, b2.05's
//     « j'étais content qu'il soit là / venu » and b1.14's present
//     subjunctive. They are reused BY ID (§F).
//
//  6. TEXTS. EVERY extract is an invented pastiche: a 19th-century-style
//     novel opening (the notary of Valbonne), an invented regional history
//     page (the canal of Sainte-Aure, an invented town), a schoolteacher's
//     memoir, a novel page in a cabinetmaker's workshop, a mayor's
//     inauguration speech (the Garenne bridge, invented), the baron of
//     Morville, and the task extract (Clémence). NO real quotation and NO
//     real historical fact is used anywhere, so nothing needs a fact check.
//
//  7. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     does; every story and scene uses ' only. The one `scenario` uses ’ only
//     and embeds no corpus row.
//
//  8. RESPELLINGS. House style (hyphens, CAPS on the stressed final
//     syllable, ü, nasal ⁿ). « personne » pehr-SONN is doubled for the nasal
//     checker, as b2.01 and b2.08 do. No U+203F anywhere.
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
  id: 'b2.09',
  seq: 9,
  title: 'Recognising the Literary Subjunctive',
  sub: 'Reconnaître le subjonctif littéraire',
  canDo: 'Can recognise the imperfect and pluperfect subjunctive and the second form of the past conditional in classic novels, careful history writing, formal speeches and journalism, use the circumflex and the trigger to tell them from the passé simple, map each form to its infinitive and to the form a writer would use today, read the fixed expressions still alive in formal French, and understand a literary page for its meaning, its implications and its irony, without ever needing to produce the forms',
  prereqUnitIds: ['b1.14', 'b1.15', 'b2.02', 'b2.03', 'b2.05', 'b2.08'],
} as const;

export const LESSON_ID = 'b2.09.l1';
export const THEME = 'litterature';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan numbers b2.01
 *  to b2.34 in trail order. Only occupied positions are cited (B1 1-39,
 *  B2 1-8 and 22-26).
 * ══════════════════════════════════════════════════════════════════════════ */

export const FORMATION_UNIT = 'b1.14';
export const DECLENCHEURS_UNIT = 'b1.15';
export const INFINITIF_UNIT = 'b1.16';
export const DISCOURS_UNIT = 'b1.19';
export const CONCESSION_UNIT = 'b1.32';
export const LECTURE_B1_UNIT = 'b1.37';
export const PQP_UNIT = 'b2.01';
export const CONDPASSE_UNIT = 'b2.02';
export const SI_UNIT = 'b2.03';
export const SUBJPASSE_UNIT = 'b2.05';
export const SUBJIND_UNIT = 'b2.06';
export const PS_UNIT = 'b2.08';
export const CRITIQUE_UNIT = 'b2.24';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const FORMATION_REF = refFr(FORMATION_UNIT);
export const DECLENCHEURS_REF = refFr(DECLENCHEURS_UNIT);
export const INFINITIF_REF = refFr(INFINITIF_UNIT);
export const DISCOURS_REF = refFr(DISCOURS_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const LECTURE_B1_REF = refFr(LECTURE_B1_UNIT);
export const PQP_REF = refFr(PQP_UNIT);
export const CONDPASSE_REF = refFr(CONDPASSE_UNIT);
export const SI_REF = refFr(SI_UNIT);
export const SUBJPASSE_REF = refFr(SUBJPASSE_UNIT);
export const SUBJIND_REF = refFr(SUBJIND_UNIT);
export const PS_REF = refFr(PS_UNIT);
export const CRITIQUE_REF = refFr(CRITIQUE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B114_REFRAME, REFRAME_EN as B114_REFRAME_EN } from '../b1/subjonctif-formation-corpus.ts';
export { REFRAME as B115_REFRAME, REFRAME_EN as B115_REFRAME_EN } from '../b1/subjonctif-declencheurs-corpus.ts';
export { REFRAME as B132_REFRAME, REFRAME_EN as B132_REFRAME_EN } from '../b1/concession-corpus.ts';
export { REFRAME as B137_REFRAME, REFRAME_EN as B137_REFRAME_EN } from '../b1/strategies-lecture-corpus.ts';
export { REFRAME as B202_REFRAME, REFRAME_EN as B202_REFRAME_EN } from './conditionnel-passe-corpus.ts';
export { REFRAME as B203_REFRAME, REFRAME_EN as B203_REFRAME_EN } from './si-irreel-passe-corpus.ts';
export { REFRAME as B205_REFRAME, REFRAME_EN as B205_REFRAME_EN } from './subjonctif-passe-corpus.ts';
export { REFRAME as B206_REFRAME, REFRAME_EN as B206_REFRAME_EN } from './subjonctif-indicatif-corpus.ts';
export { REFRAME as B208_REFRAME, REFRAME_EN as B208_REFRAME_EN } from './passe-simple-corpus.ts';
export { REFRAME as B224_REFRAME, REFRAME_EN as B224_REFRAME_EN } from './lecture-critique-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE COSTUME D'ÉPOQUE. The literary subjunctive is the same actor in period
 *  dress: qu'il fût says what qu'il soit says, il eût fallu what il aurait
 *  fallu says. The learner never learns to WEAR the costume; they learn to
 *  see who is inside it. Every map card, every rewrite, every quiz round is
 *  that translation back into today's clothes.
 *
 *  It is NOT « a tense with its own meaning » (the concordance of act 7 is a
 *  rule of form, not of sense), NOT « a dead tense » (fût-ce, ne fût-ce que,
 *  il eût fallu live in today's formal press), and NOT a form the learner has
 *  to produce.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le subjonctif littéraire change la forme, jamais le sens : tu le lis, et tu dis la forme d’aujourd’hui.';
export const REFRAME_EN = 'The literary subjunctive changes the form, never the meaning: you read it, and you say today’s form.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le chapeau sur la voyelle, c’est le subjonctif.',
    why: 'False where act 4 has to hold: the plural forms carry no circumflex (qu’ils fussent, qu’ils vinssent), and the passé simple nous forms carry one (nous arrivâmes, lesson 8 in B2). The circumflex is a clue for the 3rd person singular, not the rule.',
  },
  {
    text: 'Le subjonctif littéraire, c’est le subjonctif du passé.',
    why: 'Leads straight to the wrong map: qu’il vînt after a past verb is a PRESENT subjunctive today (qu’il vienne), not the subjonctif passé (qu’il soit venu). Act 7 is built to undo exactly that.',
  },
  {
    text: 'Le subjonctif littéraire, c’est du français mort.',
    why: 'Makes the learner skip it, when fût-ce, ne fût-ce que, il eût fallu and on eût dit appear in today’s formal press and speeches (acts 2, 8 and 9).',
  },
  {
    text: 'Apprends les terminaisons -asse, -isse, -usse, et tu sauras le lire.',
    why: 'Turns a recognition lesson into a conjugation lesson (Paul, 2026-09-27: recognition only), and misses the key: the form is built on the passé simple the learner already recognises.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-29, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const LIT = (n: number) => `fr.b2.litterature.${n}`;
const EMO = (n: number) => `fr.b2.emotions.${n}`;
const CS = (n: number) => `fr.b2.conseils-et-suggestions.${n}`;
const OA = (n: number) => `fr.b1.opinions-et-avis.${n}`;

export const IMPORTED = {
  act1: [] as string[],
  act2: [] as string[],
  act3: [
    LIT(1105),                                     // Ce fut une longue nuit.  (lesson 8 in B2, sentence only)
    LIT(1106),                                     // Ça a été une longue nuit.  (lesson 8 in B2, map card)
    LIT(1107),                                     // Il eut peur et recula.  (lesson 8 in B2, sentence only)
    LIT(1109),                                     // Elle fit ses valises en silence.  (lesson 8 in B2, sentence only)
    LIT(1110),                                     // Elle a fait ses valises en silence.  (lesson 8 in B2, map card)
    LIT(1122),                                     // Fut vient d'être, fit vient de faire.  (lesson 8 in B2, rule card, flashcard + review)
  ],
  act4: [
    OA(1155),                                      // Il faut qu’il fasse beau demain pour la fête.  (lesson 14 in B1)
    OA(1008),                                      // Il faut qu’elle prenne une décision cette semaine.  (lesson 14 in B1)
  ],
  act5: [
    LIT(1126),                                     // Quand il eut fini, il se leva.  (lesson 8 in B2, passé antérieur, sentence only)
    LIT(1127),                                     // Quand il a fini, il s'est levé.  (lesson 8 in B2, map card)
    EMO(1263),                                     // J'étais content qu'il soit venu.  (lesson 5 in B2)
    EMO(1267),                                     // J'étais surprise qu'elle ait déjà fini.  (lesson 5 in B2)
  ],
  act6: [
    CS(1208),                                      // Il aurait fallu changer la date plus tôt.  (lesson 2 in B2)
    CS(1249),                                      // J'aurais aimé connaître mon grand-père.  (lesson 2 in B2)
    'fr.b2.recits-au-passe.1760',                  // Si j'avais su, je serais venu plus tôt.  (lesson 1 in B2)
  ],
  act7: [
    EMO(1262),                                     // J'étais content qu'il soit là.  (lesson 5 in B2)
  ],
  act8: [] as string[],
  act9: [] as string[],
  act10: [
    'fr.b2.strategies-de-comprehension.1507',      // Le ton est sérieux : l’auteur ne plaisante pas.  (lesson 24 in B2)
  ],
  act11: [
    OA(1323),                                      // Bien que la salle soit petite, tout le monde tient.  (lesson 15 in B1)
    OA(1327),                                      // Bien qu’il ait quatre-vingts ans, il fait encore du vélo.  (lesson 15 in B1)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [
  LIT(1105), LIT(1107), LIT(1109), LIT(1126),      // b2.08 passé simple lines: sentence only
];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  LIT(1122),                                       // flashcard + review only
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sl`   a literary line: drill `sentence` ONLY (§A.3).
 *  `map`  the SRS card: front = the literary line, answer = today's sentence
 *         (cardType 'grammar', « recognise »).
 *  `rule` a grammar card whose answer is a rule (flashcard + review, or
 *         flashcard ONLY when the rule names a literary form).
 *  `sent` a plain modern sentence.
 *  Every row carries fr, en, ipa and respell. Corpus respellings carry no
 *  brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];
/** A rule card that NAMES a literary form: recognised, never asked for. */
const F = ['flashcard'] as Item['drills'];
/** The ONLY drill a literary line carries: every word is given as a tile. */
const SL_DRILLS = ['sentence'] as Item['drills'];

const C: Register = 'courant';
const S: Register = 'soutenu';
const GP = ['subjonctif-litteraire'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const sl = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[]): Row =>
  sent(n, fr, en, ipa, respell, ['litteraire', ...tags], SL_DRILLS, { register: S });

/** The map card: `slFr` is printed on the front, `fr` is the answer. */
const map = (
  n: number, slFr: string, fr: string, en: string, ipa: string, respell: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, ['aujourdhui', ...tags], drills, {
  cardType: 'grammar', prompt: `« ${slFr} » Aujourd'hui, tu dirais…`, notes,
});

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FC,
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], drills, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · UN CHAPEAU SUR LE U (.1200-.1212) ─────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sl(1200, "Elle exigea qu'il fût là avant midi.", 'She demanded that he be there before noon.',
    '/ɛ.lɛɡ.zi.ʒa kil fy la a.vɑ̃ mi.di/', 'eh-leg-zee-ZHA | keel FÜ LA | a-vahⁿ mee-DEE', ['imparfait', 'etre']),
  sent(1201, 'Il a été là avant midi.', 'He was there before noon.',
    '/i.la e.te la a.vɑ̃ mi.di/', 'ee-la ay-TAY LA | a-vahⁿ mee-DEE', ['fausse-lecture'], FC),
  map(1202, "Elle exigea qu'il fût là avant midi.", "Elle a exigé qu'il soit là avant midi.", 'She demanded that he be there before noon.',
    '/ɛ.la ɛɡ.zi.ʒe kil swa la a.vɑ̃ mi.di/', 'eh-la eg-zee-ZHAY | keel swa LA | a-vahⁿ mee-DEE',
    'Fût : être, avec un chapeau. Après exiger que, un subjonctif : aujourd’hui, qu’il soit.', ['imparfait', 'etre'], FCVDR),
  rule(1203, REFRAME, REFRAME_EN,
    '/lə syb.ʒɔ̃k.tif li.te.ʁɛʁ ʃɑ̃ʒ la fɔʁm ʒa.mɛ lə sɑ̃s ty lə li e ty di la fɔʁm do.ʒuʁ.dɥi/',
    'luh süb-zhohⁿk-TEEF lee-tay-REHR | SHAHⁿZH la FORM | zha-meh luh SAHⁿS | tü luh LEE | ay tü dee la form doh-zhoor-DWEE',
    'À quoi sert le subjonctif littéraire ?',
    'Il dit la même chose que le subjonctif d’aujourd’hui, dans un habit plus ancien. Tu le reconnais et tu le traduis ; tu ne le produis jamais.',
    ['reframe']),
  sl(1204, "Il fallait qu'elle vînt seule.", 'She had to come alone.',
    '/il fa.lɛ kɛl vɛ̃ sœl/', 'eel fa-LEH | kel VEHⁿ SUHL', ['imparfait', 'venir']),
  map(1205, "Il fallait qu'elle vînt seule.", "Il fallait qu'elle vienne seule.", 'She had to come alone.',
    '/il fa.lɛ kɛl vjɛn sœl/', 'eel fa-LEH | kel VYENN SUHL',
    'Vînt : venir. Vint, sans chapeau, serait un passé simple ; avec le chapeau, c’est un subjonctif.', ['imparfait', 'venir']),
  sl(1206, "Bien qu'il fût tard, le notaire la reçut.", 'Although it was late, the notary saw her.',
    '/bjɛ̃ kil fy taʁ lə nɔ.tɛʁ la ʁə.sy/', 'byehⁿ keel fü TAR | luh no-TEHR la ruh-SÜ', ['imparfait', 'etre', 'bien-que']),
  map(1207, "Bien qu'il fût tard, le notaire la reçut.", "Bien qu'il soit tard, le notaire l'a reçue.", 'Although it was late, the notary saw her.',
    '/bjɛ̃ kil swa taʁ lə nɔ.tɛʁ la ʁə.sy/', 'byehⁿ keel swa TAR | luh no-TEHR la ruh-SÜ',
    'Fût, après bien que : soit. Reçut, un passé simple, devient l’a reçue : la, placé avant, fait l’accord.', ['imparfait', 'etre', 'bien-que']),
  sl(1208, 'Il eût fallu partir plus tôt.', 'We should have left earlier.',
    '/i.ly fa.ly paʁ.tiʁ ply to/', 'ee-lü fa-LÜ | par-teer plü TOH', ['deuxieme-forme']),
  map(1209, 'Il eût fallu partir plus tôt.', 'Il aurait fallu partir plus tôt.', 'We should have left earlier.',
    '/i.lo.ʁɛ fa.ly paʁ.tiʁ ply to/', 'ee-loh-reh fa-LÜ | par-teer plü TOH',
    'Eût fallu, sans que : un conditionnel passé à l’ancienne. Aujourd’hui : il aurait fallu.', ['deuxieme-forme'], FCVDR),
  sl(1210, "Le notaire attendait qu'elle parlât.", 'The notary was waiting for her to speak.',
    '/lə nɔ.tɛʁ a.tɑ̃.dɛ kɛl paʁ.la/', 'luh no-TEHR a-tahⁿ-DEH | kel par-LA', ['imparfait', 'er']),
  map(1211, "Le notaire attendait qu'elle parlât.", "Le notaire attendait qu'elle parle.", 'The notary was waiting for her to speak.',
    '/lə nɔ.tɛʁ a.tɑ̃.dɛ kɛl paʁl/', 'luh no-TEHR a-tahⁿ-DEH | kel PARL',
    'Parlât : parler, avec -ât. Ne le confonds ni avec parla, le passé simple, ni avec parlait.', ['imparfait', 'er']),
  rule(1212, "Dans une conversation, on dit qu'il soit, pas qu'il fût.", 'In conversation people say qu’il soit, not qu’il fût.',
    '/dɑ̃.zyn kɔ̃.vɛʁ.sa.sjɔ̃ ɔ̃ di kil swa pa kil fy/', 'dahⁿ-zün kohⁿ-vehr-sa-SYOHⁿ | ohⁿ DEE keel SWA | pa keel FÜ',
    'Et à l’oral ?', 'Qu’il fût appartient aux livres. À l’oral, on ne l’entend que pour plaisanter.', ['oral'], F),
];

/* ── ACT 2 · OÙ IL VIT ENCORE (.1215-.1229) ────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sl(1215, "Le préfet ordonna que les travaux fussent achevés avant l'hiver.", 'The prefect ordered the work to be finished before winter.',
    '/lə pʁe.fɛ ɔʁ.dɔ.na kə le tʁa.vo fys.taʃ.ve a.vɑ̃ li.vɛʁ/', 'luh pray-FEH or-do-NA | kuh lay tra-VOH füss-tash-VAY | a-vahⁿ lee-VEHR', ['histoire', 'etre', 'pluriel']),
  map(1216, "Le préfet ordonna que les travaux fussent achevés avant l'hiver.", "Le préfet a ordonné que les travaux soient achevés avant l'hiver.", 'The prefect ordered the work to be finished before winter.',
    '/lə pʁe.fɛ a ɔʁ.dɔ.ne kə le tʁa.vo swa.taʃ.ve a.vɑ̃ li.vɛʁ/', 'luh pray-FEH a or-do-NAY | kuh lay tra-VOH swa-tash-VAY | a-vahⁿ lee-VEHR',
    'Fussent : être, au pluriel, avec un double s. Aujourd’hui : soient.', ['histoire', 'etre', 'pluriel']),
  sl(1217, 'Bien que le budget fût épuisé, le chantier continua.', 'Although the budget was spent, the work went on.',
    '/bjɛ̃ kə lə byd.ʒɛ fy.te.pɥi.ze lə ʃɑ̃.tje kɔ̃.ti.nɥa/', 'byehⁿ kuh luh büd-ZHEH fü-tay-pwee-ZAY | luh shahⁿ-TYAY kohⁿ-tee-NWA', ['histoire', 'etre', 'bien-que']),
  map(1218, 'Bien que le budget fût épuisé, le chantier continua.', 'Bien que le budget soit épuisé, le chantier a continué.', 'Although the budget was spent, the work went on.',
    '/bjɛ̃ kə lə byd.ʒɛ swa.te.pɥi.ze lə ʃɑ̃.tje a kɔ̃.ti.nɥe/', 'byehⁿ kuh luh büd-ZHEH swa-tay-pwee-ZAY | luh shahⁿ-TYAY a kohⁿ-tee-NWAY',
    'Fût, après bien que : soit. Continua, le passé simple, devient a continué.', ['histoire', 'etre', 'bien-que'], FCVDR),
  sl(1219, "Il eût été plus sage d'attendre le printemps.", 'It would have been wiser to wait for spring.',
    '/i.ly.te.te ply saʒ da.tɑ̃dʁ lə pʁɛ̃.tɑ̃/', 'ee-lü-tay-TAY plü SAZH | da-tahⁿdr luh prehⁿ-TAHⁿ', ['histoire', 'deuxieme-forme']),
  map(1220, "Il eût été plus sage d'attendre le printemps.", "Il aurait été plus sage d'attendre le printemps.", 'It would have been wiser to wait for spring.',
    '/i.lo.ʁɛ.te.te ply saʒ da.tɑ̃dʁ lə pʁɛ̃.tɑ̃/', 'ee-loh-reh-tay-TAY plü SAZH | da-tahⁿdr luh prehⁿ-TAHⁿ',
    'Eût été, sans que ni déclencheur : un conditionnel passé. Aujourd’hui : aurait été.', ['histoire', 'deuxieme-forme']),
  sl(1221, 'Il eût été préférable que la réunion fût reportée.', 'It would have been better for the meeting to be postponed.',
    '/i.ly.te.te pʁe.fe.ʁabl kə la ʁe.y.njɔ̃ fy ʁə.pɔʁ.te/', 'ee-lü-tay-TAY pray-fay-RABL | kuh la ray-ü-NYOHⁿ fü ruh-por-TAY', ['humour', 'deuxieme-forme', 'etre']),
  map(1222, 'Il eût été préférable que la réunion fût reportée.', 'Il aurait été préférable que la réunion soit reportée.', 'It would have been better for the meeting to be postponed.',
    '/i.lo.ʁɛ.te.te pʁe.fe.ʁabl kə la ʁe.y.njɔ̃ swa ʁə.pɔʁ.te/', 'ee-loh-reh-tay-TAY pray-fay-RABL | kuh la ray-ü-NYOHⁿ swa ruh-por-TAY',
    'Deux formes littéraires dans une phrase : eût été devient aurait été, fût devient soit.', ['humour', 'deuxieme-forme', 'etre']),
  sl(1223, 'Le ministre regretta que la loi ne fût pas votée.', 'The minister regretted that the law was not passed.',
    '/lə mi.nistʁ ʁə.ɡʁɛ.ta kə la lwa nə fy pa vɔ.te/', 'luh mee-NEESTR ruh-greh-TA | kuh la LWA nuh fü pa vo-TAY', ['presse', 'etre']),
  map(1224, 'Le ministre regretta que la loi ne fût pas votée.', 'Le ministre a regretté que la loi ne soit pas votée.', 'The minister regretted that the law was not passed.',
    '/lə mi.nistʁ a ʁə.ɡʁɛ.te kə la lwa nə swa pa vɔ.te/', 'luh mee-NEESTR a ruh-greh-TAY | kuh la LWA nuh swa pa vo-TAY',
    'Un journaliste peut écrire ne fût pas pour donner du poids à sa phrase. Tu lis : ne soit pas.', ['presse', 'etre']),
  rule(1225, "Romans classiques, livres d'histoire soignés, presse pour l'effet, humour.", 'Classic novels, careful history books, the press for effect, humour.',
    '/ʁɔ.mɑ̃ kla.sik livʁ dis.twaʁ swa.ɲe pʁɛs puʁ le.fɛ y.muʁ/', 'ro-mahⁿ kla-SEEK | leevr dees-twar swa-NYAY | PRESS poor lay-FEH | ü-MOOR',
    'Où rencontres-tu encore le subjonctif littéraire ?',
    'Dans l’écrit soigné, surtout à la troisième personne. Jamais dans une conversation, sauf pour plaisanter.', ['usages']),
  rule(1226, "Surtout à la troisième personne du singulier : qu'il fût, qu'elle eût.", 'Mostly in the third person singular: qu’il fût, qu’elle eût.',
    '/syʁ.tu a la tʁwa.zjɛm pɛʁ.sɔn dy sɛ̃.ɡy.lje kil fy kɛ.ly/', 'sür-TOO a la trwa-zyem pehr-SONN dü sehⁿ-gü-LYAY | keel FÜ | keh-LÜ',
    'Quelle personne rencontres-tu le plus ?',
    'Les autres personnes (que nous fussions, qu’ils eussent) sont rares et sonnent très vieillies, souvent comiques.', ['personne'], F),
  sent(1227, 'Il fallait que tu le saches avant la réunion.', 'You needed to know before the meeting.',
    '/il fa.lɛ kə ty lə saʃ a.vɑ̃ la ʁe.y.njɔ̃/', 'eel fa-LEH | kuh tü luh SASH | a-vahⁿ la ray-ü-NYOHⁿ', ['oral', 'present'], FCVDR),
  sl(1228, "Il fallait que la ville se dotât d'un canal.", 'The town needed to give itself a canal.',
    '/il fa.lɛ kə la vil sə dɔ.ta dœ̃ ka.nal/', 'eel fa-LEH | kuh la VEEL suh do-TA | duhⁿ ka-NAL', ['histoire', 'er']),
  map(1229, "Il fallait que la ville se dotât d'un canal.", "Il fallait que la ville se dote d'un canal.", 'The town needed to give itself a canal.',
    '/il fa.lɛ kə la vil sə dɔt dœ̃ ka.nal/', 'eel fa-LEH | kuh la VEEL suh DOT | duhⁿ ka-NAL',
    'Dotât : doter, avec -ât. Un manuel soigné l’écrit encore ; ton professeur dit se dote.', ['histoire', 'er']),
];

/* ── ACT 3 · FUT OU FÛT (.1230-.1247) ─────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sl(1230, 'Bien que ce fût une longue nuit, personne ne dormit.', 'Although it was a long night, nobody slept.',
    '/bjɛ̃ kə sə fy yn lɔ̃ɡ nɥi pɛʁ.sɔn nə dɔʁ.mi/', 'byehⁿ kuh suh FÜ ün lohⁿg NWEE | pehr-SONN nuh dor-MEE', ['chapeau', 'etre']),
  map(1231, 'Bien que ce fût une longue nuit, personne ne dormit.', "Bien que ce soit une longue nuit, personne n'a dormi.", 'Although it was a long night, nobody slept.',
    '/bjɛ̃ kə sə swa yn lɔ̃ɡ nɥi pɛʁ.sɔn na dɔʁ.mi/', 'byehⁿ kuh suh SWA ün lohⁿg NWEE | pehr-SONN na dor-MEE',
    'Ce fut une longue nuit : un fait, au passé simple. Bien que ce fût : un subjonctif. Même son, un chapeau de plus.', ['chapeau', 'etre'], FCVDR),
  sl(1232, "Il était furieux qu'elle eût raison.", 'He was furious that she was right.',
    '/i.le.tɛ fy.ʁjø kɛ.ly ʁɛ.zɔ̃/', 'ee-lay-TEH fü-RYEU | keh-lü reh-ZOHⁿ', ['chapeau', 'avoir']),
  map(1233, "Il était furieux qu'elle eût raison.", "Il était furieux qu'elle ait raison.", 'He was furious that she was right.',
    '/i.le.tɛ fy.ʁjø kɛ.lɛ ʁɛ.zɔ̃/', 'ee-lay-TEH fü-RYEU | keh-leh reh-ZOHⁿ',
    'Eût : avoir, avec un chapeau. Il eut peur, sans chapeau, raconte ; qu’elle eût raison dépend de furieux que.', ['chapeau', 'avoir']),
  sl(1234, "Il fallait qu'elle fît ses valises en silence.", 'She had to pack her cases in silence.',
    '/il fa.lɛ kɛl fi se va.liz ɑ̃ si.lɑ̃s/', 'eel fa-LEH | kel FEE say va-LEEZ | ahⁿ see-LAHⁿS', ['chapeau', 'faire']),
  map(1235, "Il fallait qu'elle fît ses valises en silence.", "Il fallait qu'elle fasse ses valises en silence.", 'She had to pack her cases in silence.',
    '/il fa.lɛ kɛl fas se va.liz ɑ̃ si.lɑ̃s/', 'eel fa-LEH | kel FASS say va-LEEZ | ahⁿ see-LAHⁿS',
    'Fît : faire, avec un chapeau. Elle fit ses valises, sans chapeau, serait un passé simple.', ['chapeau', 'faire']),
  sl(1236, "Il fallut qu'il prît le premier train.", 'He had to take the first train.',
    '/il fa.ly kil pʁi lə pʁə.mje tʁɛ̃/', 'eel fa-LÜ | keel PREE | luh pruh-myay TREHⁿ', ['chapeau', 'prendre']),
  map(1237, "Il fallut qu'il prît le premier train.", "Il a fallu qu'il prenne le premier train.", 'He had to take the first train.',
    '/i.la fa.ly kil pʁɛn lə pʁə.mje tʁɛ̃/', 'ee-la fa-LÜ | keel PRENN | luh pruh-myay TREHⁿ',
    'Fallut, un passé simple : a fallu. Prît, un subjonctif : prenne.', ['chapeau', 'prendre'], FCVDR),
  sl(1238, "Elle attendit qu'il pût parler.", 'She waited until he could speak.',
    '/ɛ.la.tɑ̃.di kil py paʁ.le/', 'eh-la-tahⁿ-DEE | keel PÜ par-LAY', ['chapeau', 'pouvoir']),
  map(1239, "Elle attendit qu'il pût parler.", "Elle a attendu qu'il puisse parler.", 'She waited until he could speak.',
    '/ɛ.la a.tɑ̃.dy kil pɥis paʁ.le/', 'eh-la a-tahⁿ-DÜ | keel PWEESS par-LAY',
    'Pût : pouvoir. Attendre que appelle le subjonctif : aujourd’hui, puisse.', ['chapeau', 'pouvoir']),
  sl(1240, "Il souhaitait qu'elle vînt le voir.", 'He wished she would come and see him.',
    '/il swɛ.tɛ kɛl vɛ̃ lə vwaʁ/', 'eel sweh-TEH | kel VEHⁿ luh VWAR', ['chapeau', 'venir']),
  map(1241, "Il souhaitait qu'elle vînt le voir.", "Il souhaitait qu'elle vienne le voir.", 'He wished she would come and see him.',
    '/il swɛ.tɛ kɛl vjɛn lə vwaʁ/', 'eel sweh-TEH | kel VYENN luh VWAR',
    'Vînt : venir, au subjonctif. Elle vint le voir, sans chapeau, dirait qu’elle est venue.', ['chapeau', 'venir']),
  rule(1242, 'Sans chapeau, un fait raconté ; avec un chapeau, un subjonctif.', 'No circumflex, a narrated fact; with one, a subjunctive.',
    '/sɑ̃ ʃa.po œ̃ fɛ ʁa.kɔ̃.te a.vɛk œ̃ ʃa.po œ̃ syb.ʒɔ̃k.tif/', 'sahⁿ sha-POH | uhⁿ FEH ra-kohⁿ-TAY | a-vek uhⁿ sha-POH | uhⁿ süb-zhohⁿk-TEEF',
    'Fut ou fût : comment les distinguer ?',
    'Fut, eut, fit, vint, prit racontent un fait. Fût, eût, fît, vînt, prît suivent souvent que : ils ne racontent rien, ils dépendent.', ['chapeau']),
  rule(1243, "À l'oreille, fut et fût sonnent pareil : écoute ce qui vient avant.", 'To the ear, fut and fût sound alike: listen to what comes before.',
    '/a lɔ.ʁɛj fy e fy sɔn pa.ʁɛj e.kut sə ki vjɛ̃ a.vɑ̃/', 'a lo-REY | FÜ ay FÜ | SONN pa-REY | ay-KOOT suh kee vyehⁿ a-VAHⁿ',
    'Et quand tu écoutes ?', 'Il fallait que, bien que, avant que, je voulais que : le déclencheur annonce le subjonctif.', ['chapeau', 'oral'], F),
  sl(1244, "Il fallait que ce fût un succès.", 'It had to be a success.',
    '/il fa.lɛ kə sə fy.tœ̃ syk.sɛ/', 'eel fa-LEH | kuh suh fü-TUHⁿ sük-SEH', ['chapeau', 'etre']),
  map(1245, "Il fallait que ce fût un succès.", "Il fallait que ce soit un succès.", 'It had to be a success.',
    '/il fa.lɛ kə sə swa.tœ̃ syk.sɛ/', 'eel fa-LEH | kuh suh swa-TUHⁿ sük-SEH',
    'Même son que ce fut un succès. Le que, devant, te dit : subjonctif.', ['chapeau', 'etre']),
  sl(1246, 'Ce fut un succès.', 'It was a success.',
    '/sə fy.tœ̃ syk.sɛ/', 'suh fü-TUHⁿ sük-SEH', ['chapeau', 'passe-simple']),
  map(1247, 'Ce fut un succès.', 'Ça a été un succès.', 'It was a success.',
    '/sa a e.te œ̃ syk.sɛ/', 'sa a ay-TAY | uhⁿ sük-SEH',
    'Fut, sans chapeau : le passé simple d’être, un fait. Aujourd’hui : ça a été.', ['chapeau', 'passe-simple']),
];

/* ── ACT 4 · -ÂT, -ÎT, -ÛT, -ÎNT : LA FORME (.1250-.1272) ─────────────────── */

export const ACT4_ROWS: Row[] = [
  sl(1250, "Il voulait qu'elle chantât pour lui.", 'He wanted her to sing for him.',
    '/il vu.lɛ kɛl ʃɑ̃.ta puʁ lɥi/', 'eel voo-LEH | kel shahⁿ-TA | poor LWEE', ['forme', 'er']),
  map(1251, "Il voulait qu'elle chantât pour lui.", "Il voulait qu'elle chante pour lui.", 'He wanted her to sing for him.',
    '/il vu.lɛ kɛl ʃɑ̃t puʁ lɥi/', 'eel voo-LEH | kel SHAHⁿT | poor LWEE',
    'Chantât : chanter. Elle chanta, au passé simple ; qu’elle chantât, le même radical, avec -ât.', ['forme', 'er'], FCVDR),
  sl(1252, "Elle attendait qu'il finît son repas.", 'She was waiting for him to finish his meal.',
    '/ɛ.la.tɑ̃.dɛ kil fi.ni sɔ̃ ʁə.pa/', 'eh-la-tahⁿ-DEH | keel fee-NEE | sohⁿ ruh-PA', ['forme', 'ir']),
  map(1253, "Elle attendait qu'il finît son repas.", "Elle attendait qu'il finisse son repas.", 'She was waiting for him to finish his meal.',
    '/ɛ.la.tɑ̃.dɛ kil fi.nis sɔ̃ ʁə.pa/', 'eh-la-tahⁿ-DEH | keel fee-NEESS | sohⁿ ruh-PA',
    'Finît : finir, avec -ît. Il finit, sans chapeau, serait un passé simple ou un présent. Aujourd’hui : finisse.', ['forme', 'ir']),
  sl(1254, "Il craignait qu'on ne le reconnût.", 'He was afraid he would be recognised.',
    '/il kʁɛ.ɲɛ kɔ̃ nə lə ʁə.kɔ.ny/', 'eel kreh-NYEH | kohⁿ nuh luh ruh-ko-NÜ', ['forme', 're', 'ne-expletif']),
  map(1255, "Il craignait qu'on ne le reconnût.", "Il craignait qu'on le reconnaisse.", 'He was afraid he would be recognised.',
    '/il kʁɛ.ɲɛ kɔ̃ lə ʁə.kɔ.nɛs/', 'eel kreh-NYEH | kohⁿ luh ruh-ko-NESS',
    'Reconnût : reconnaître, avec -ût. Le ne n’est pas une négation ; tu peux le garder ou l’enlever : qu’on le reconnaisse, qu’on ne le reconnaisse.', ['forme', 're', 'ne-expletif']),
  sl(1256, "Il fallait qu'il sût la vérité.", 'He had to know the truth.',
    '/il fa.lɛ kil sy la ve.ʁi.te/', 'eel fa-LEH | keel SÜ | la vay-ree-TAY', ['forme', 'oir']),
  map(1257, "Il fallait qu'il sût la vérité.", "Il fallait qu'il sache la vérité.", 'He had to know the truth.',
    '/il fa.lɛ kil saʃ la ve.ʁi.te/', 'eel fa-LEH | keel SASH | la vay-ree-TAY',
    'Sût : savoir. Le participe est su : le chapeau ne cache pas le verbe.', ['forme', 'oir'], FCVDR),
  sl(1258, "Elle voulait qu'il dît oui.", 'She wanted him to say yes.',
    '/ɛl vu.lɛ kil di wi/', 'el voo-LEH | keel DEE WEE', ['forme', 're']),
  map(1259, "Elle voulait qu'il dît oui.", "Elle voulait qu'il dise oui.", 'She wanted him to say yes.',
    '/ɛl vu.lɛ kil diz wi/', 'el voo-LEH | keel DEEZ WEE',
    'Dît : dire, avec un chapeau sur le i. Aujourd’hui : dise.', ['forme', 're']),
  sl(1260, "Il fallait qu'ils partissent à l'aube.", 'They had to leave at dawn.',
    '/il fa.lɛ kil paʁ.tis a lob/', 'eel fa-LEH | keel par-TEESS | a LOHB', ['forme', 'ir', 'pluriel']),
  map(1261, "Il fallait qu'ils partissent à l'aube.", "Il fallait qu'ils partent à l'aube.", 'They had to leave at dawn.',
    '/il fa.lɛ kil paʁt a lob/', 'eel fa-LEH | keel PART | a LOHB',
    'Partissent : partir, ils. Le double s et -ent marquent le pluriel. Aujourd’hui : partent.', ['forme', 'ir', 'pluriel']),
  sl(1262, 'Le roi voulait que ses fils fussent instruits.', 'The king wanted his sons to be educated.',
    '/lə ʁwa vu.lɛ kə se fis fys.tɛ̃s.tʁɥi/', 'luh RWA voo-LEH | kuh say FEESS | füss-tehⁿs-TRWEE', ['forme', 'etre', 'pluriel']),
  map(1263, 'Le roi voulait que ses fils fussent instruits.', 'Le roi voulait que ses fils soient instruits.', 'The king wanted his sons to be educated.',
    '/lə ʁwa vu.lɛ kə se fis swa.tɛ̃s.tʁɥi/', 'luh RWA voo-LEH | kuh say FEESS | swa-tehⁿs-TRWEE',
    'Fussent : être, ils. Aujourd’hui : soient.', ['forme', 'etre', 'pluriel']),
  sl(1264, 'Elle exigea que les enfants se lavassent les mains.', 'She demanded that the children wash their hands.',
    '/ɛ.lɛɡ.zi.ʒa kə le.zɑ̃.fɑ̃ sə la.vas le mɛ̃/', 'eh-leg-zee-ZHA | kuh lay-zahⁿ-FAHⁿ | suh la-VASS lay MEHⁿ', ['forme', 'er', 'pluriel']),
  map(1265, 'Elle exigea que les enfants se lavassent les mains.', 'Elle a exigé que les enfants se lavent les mains.', 'She demanded that the children wash their hands.',
    '/ɛ.la ɛɡ.zi.ʒe kə le.zɑ̃.fɑ̃ sə lav le mɛ̃/', 'eh-la eg-zee-ZHAY | kuh lay-zahⁿ-FAHⁿ | suh LAV lay MEHⁿ',
    'Lavassent : laver, ils. Au pluriel, ces formes sonnent vieillies, et parfois comiques.', ['forme', 'er', 'pluriel']),
  sl(1266, "Il fallait qu'ils eussent du courage.", 'They needed to have courage.',
    '/il fa.lɛ kil.zys dy ku.ʁaʒ/', 'eel fa-LEH | keel-ZÜSS | dü koo-RAZH', ['forme', 'avoir', 'pluriel']),
  map(1267, "Il fallait qu'ils eussent du courage.", "Il fallait qu'ils aient du courage.", 'They needed to have courage.',
    '/il fa.lɛ kil.zɛ dy ku.ʁaʒ/', 'eel fa-LEH | keel-ZEH | dü koo-RAZH',
    'Eussent : avoir, ils. Aujourd’hui : aient.', ['forme', 'avoir', 'pluriel']),
  sent(1268, 'Il fallait que nous finissions avant midi.', 'We had to finish before noon.',
    '/il fa.lɛ kə nu fi.ni.sjɔ̃ a.vɑ̃ mi.di/', 'eel fa-LEH | kuh noo fee-nee-SYOHⁿ | a-vahⁿ mee-DEE', ['forme', 'sosie', 'present'], FCVDR),
  sl(1269, "Je voulais qu'il vînt, et il vint.", 'I wanted him to come, and he came.',
    '/ʒə vu.lɛ kil vɛ̃ e il vɛ̃/', 'zhuh voo-LEH | keel VEHⁿ | ay eel VEHⁿ', ['forme', 'venir', 'chapeau']),
  map(1270, "Je voulais qu'il vînt, et il vint.", "Je voulais qu'il vienne, et il est venu.", 'I wanted him to come, and he came.',
    '/ʒə vu.lɛ kil vjɛn e i.lɛ və.ny/', 'zhuh voo-LEH | keel VYENN | ay ee-leh vuh-NÜ',
    'Vînt, le subjonctif : vienne. Vint, le passé simple : est venu. Deux formes, un seul son.', ['forme', 'venir', 'chapeau']),
  rule(1271, "Le passé simple, plus un chapeau : il fut, qu'il fût ; il aima, qu'il aimât.", 'The passé simple plus a circumflex: il fut, qu’il fût; il aima, qu’il aimât.',
    '/lə pa.se sɛ̃pl plys œ̃ ʃa.po il fy kil fy i.lɛ.ma ki.lɛ.ma/', 'luh pa-say SEHⁿPL | plüss uhⁿ sha-POH | eel FÜ | keel FÜ | ee-leh-MA | kee-leh-MA',
    'D’où vient qu’il fût ?',
    'L’imparfait du subjonctif se construit sur le passé simple : finit, qu’il finît ; vint, qu’il vînt. Avec -a, un t s’ajoute : aima, qu’il aimât.', ['forme', 'radical'], F),
  rule(1272, "-asse, -isse, -usse, -insse : les autres personnes, avec un double s.", 'The other persons, with a double s.',
    '/as is ys ɛ̃s le.zo.tʁə pɛʁ.sɔn a.vɛk œ̃ dubl ɛs/', 'ASS | EESS | ÜSS | EHⁿSS | lay-zoh-truh pehr-SONN | a-vek uhⁿ doobl ESS',
    'Et au pluriel ?',
    'Qu’ils aimassent, qu’ils finissent, qu’ils fussent, qu’ils vinssent : un double s, puis -ent. Qu’ils finissent a aussi la forme du présent.', ['forme', 'pluriel'], F),
];

/* ── ACT 5 · LE PLUS-QUE-PARFAIT DU SUBJONCTIF (.1275-.1289) ──────────────── */

export const ACT5_ROWS: Row[] = [
  sl(1275, "Il était content qu'elle fût venue.", 'He was glad she had come.',
    '/i.le.tɛ kɔ̃.tɑ̃ kɛl fy və.ny/', 'ee-lay-TEH kohⁿ-TAHⁿ | kel fü vuh-NÜ', ['pqp', 'etre']),
  map(1276, "Il était content qu'elle fût venue.", "Il était content qu'elle soit venue.", 'He was glad she had come.',
    '/i.le.tɛ kɔ̃.tɑ̃ kɛl swa və.ny/', 'ee-lay-TEH kohⁿ-TAHⁿ | kel swa vuh-NÜ',
    'Fût venue : déjà fait. Aujourd’hui : soit venue, le subjonctif passé.', ['pqp', 'etre'], FCVDR),
  sl(1277, "Bien qu'il eût beaucoup travaillé, il échoua.", 'Although he had worked hard, he failed.',
    '/bjɛ̃ ki.ly bo.ku tʁa.va.je i.le.ʃwa/', 'byehⁿ kee-LÜ boh-koo tra-va-YAY | ee-lay-SHWA', ['pqp', 'avoir', 'bien-que']),
  map(1278, "Bien qu'il eût beaucoup travaillé, il échoua.", "Bien qu'il ait beaucoup travaillé, il a échoué.", 'Although he had worked hard, he failed.',
    '/bjɛ̃ ki.lɛ bo.ku tʁa.va.je i.la e.ʃwe/', 'byehⁿ kee-LEH boh-koo tra-va-YAY | ee-la ay-SHWAY',
    'Eût travaillé : ait travaillé. Échoua, le passé simple : a échoué.', ['pqp', 'avoir', 'bien-que']),
  sl(1279, "Elle partit avant qu'il eût fini sa phrase.", 'She left before he had finished his sentence.',
    '/ɛl paʁ.ti a.vɑ̃ ki.ly fi.ni sa fʁaz/', 'el par-TEE | a-vahⁿ kee-LÜ fee-NEE | sa FRAZ', ['pqp', 'avoir']),
  map(1280, "Elle partit avant qu'il eût fini sa phrase.", "Elle est partie avant qu'il ait fini sa phrase.", 'She left before he had finished his sentence.',
    '/ɛ.lɛ paʁ.ti a.vɑ̃ ki.lɛ fi.ni sa fʁaz/', 'eh-leh par-TEE | a-vahⁿ kee-LEH fee-NEE | sa FRAZ',
    'Eût fini, après avant que : ait fini. Partit, avec être : est partie.', ['pqp', 'avoir'], FCVDR),
  sl(1281, "Je doutais qu'ils fussent déjà arrivés.", 'I doubted they had already arrived.',
    '/ʒə du.tɛ kil fys de.ʒa a.ʁi.ve/', 'zhuh doo-TEH | keel FÜSS | day-zha a-ree-VAY', ['pqp', 'etre', 'pluriel']),
  map(1282, "Je doutais qu'ils fussent déjà arrivés.", "Je doutais qu'ils soient déjà arrivés.", 'I doubted they had already arrived.',
    '/ʒə du.tɛ kil swa de.ʒa a.ʁi.ve/', 'zhuh doo-TEH | keel SWA | day-zha a-ree-VAY',
    'Fussent arrivés : être au pluriel, puis le participe. Aujourd’hui : soient arrivés.', ['pqp', 'etre', 'pluriel']),
  sl(1283, "Il regrettait qu'elle ne l'eût jamais aimé.", 'He regretted that she had never loved him.',
    '/il ʁə.ɡʁɛ.tɛ kɛl nə ly ʒa.mɛ ɛ.me/', 'eel ruh-greh-TEH | kel nuh LÜ zha-MEH eh-MAY', ['pqp', 'avoir']),
  map(1284, "Il regrettait qu'elle ne l'eût jamais aimé.", "Il regrettait qu'elle ne l'ait jamais aimé.", 'He regretted that she had never loved him.',
    '/il ʁə.ɡʁɛ.tɛ kɛl nə lɛ ʒa.mɛ ɛ.me/', 'eel ruh-greh-TEH | kel nuh LEH zha-meh eh-MAY',
    'Ici, ne et jamais font une vraie négation. Aujourd’hui : ne l’ait jamais aimé.', ['pqp', 'avoir']),
  sl(1285, "Elle attendit qu'il eût fini pour se lever.", 'She waited until he had finished before getting up.',
    '/ɛ.la.tɑ̃.di ki.ly fi.ni puʁ sə lə.ve/', 'eh-la-tahⁿ-DEE | kee-LÜ fee-NEE | poor suh luh-VAY', ['pqp', 'avoir', 'chapeau']),
  map(1286, "Elle attendit qu'il eût fini pour se lever.", "Elle a attendu qu'il ait fini pour se lever.", 'She waited until he had finished before getting up.',
    '/ɛ.la a.tɑ̃.dy ki.lɛ fi.ni puʁ sə lə.ve/', 'eh-la a-tahⁿ-DÜ | kee-LEH fee-NEE | poor suh luh-VAY',
    'Qu’il eût fini, avec un chapeau et que : le subjonctif. Quand il eut fini, sans chapeau : un passé antérieur.', ['pqp', 'avoir', 'chapeau']),
  rule(1287, 'Eût ou fût, puis un participe : ce qui était déjà fait.', 'Eût or fût, then a participle: what was already done.',
    '/y u fy pɥi.zœ̃ paʁ.ti.sip sə ki e.tɛ de.ʒa fɛ/', 'Ü oo FÜ | pwee-zuhⁿ par-tee-SEEP | suh kee ay-teh day-zha FEH',
    'Comment reconnais-tu le plus-que-parfait du subjonctif ?',
    'Qu’il eût fini, qu’elle fût partie : aujourd’hui, qu’il ait fini, qu’elle soit partie.', ['pqp'], F),
  sl(1288, "Il était furieux qu'on eût ouvert sa lettre.", 'He was furious that someone had opened his letter.',
    '/i.le.tɛ fy.ʁjø kɔ̃.ny.tu.vɛʁ sa lɛtʁ/', 'ee-lay-TEH fü-RYEU | kohⁿ-nü-too-VEHR | sa LETR', ['pqp', 'avoir']),
  map(1289, "Il était furieux qu'on eût ouvert sa lettre.", "Il était furieux qu'on ait ouvert sa lettre.", 'He was furious that someone had opened his letter.',
    '/i.le.tɛ fy.ʁjø kɔ̃.nɛ.tu.vɛʁ sa lɛtʁ/', 'ee-lay-TEH fü-RYEU | kohⁿ-neh-too-VEHR | sa LETR',
    'Eût ouvert : avoir, puis ouvert. Aujourd’hui : ait ouvert.', ['pqp', 'avoir']),
];

/* ── ACT 6 · LA DEUXIÈME FORME (.1295-.1310) ──────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sl(1295, 'Il eût fallu le dire plus tôt.', 'It should have been said sooner.',
    '/i.ly fa.ly lə diʁ ply to/', 'ee-lü fa-LÜ | luh DEER plü TOH', ['deuxieme-forme']),
  map(1296, 'Il eût fallu le dire plus tôt.', 'Il aurait fallu le dire plus tôt.', 'It should have been said sooner.',
    '/i.lo.ʁɛ fa.ly lə diʁ ply to/', 'ee-loh-reh fa-LÜ | luh DEER plü TOH',
    'Eût fallu, sans que ni déclencheur : aurait fallu, un conditionnel passé.', ['deuxieme-forme'], FCVDR),
  sl(1297, "J'eusse aimé vous connaître.", 'I would have liked to know you.',
    '/ʒy.sɛ.me vu kɔ.nɛtʁ/', 'zhü-seh-MAY | voo ko-NETR', ['deuxieme-forme', 'je']),
  map(1298, "J'eusse aimé vous connaître.", "J'aurais aimé vous connaître.", 'I would have liked to know you.',
    '/ʒo.ʁɛ.zɛ.me vu kɔ.nɛtʁ/', 'zhoh-reh-zeh-MAY | voo ko-NETR',
    'J’eusse aimé : avoir, je, avec -usse. Aujourd’hui : j’aurais aimé. Très soigné, parfois pour sourire.', ['deuxieme-forme', 'je']),
  sl(1299, 'On eût dit un château de conte.', 'It looked like a fairy-tale castle.',
    '/ɔ̃.ny di œ̃ ʃa.to də kɔ̃t/', 'ohⁿ-nü DEE | uhⁿ sha-TOH duh KOHⁿT', ['deuxieme-forme', 'presse']),
  map(1300, 'On eût dit un château de conte.', 'On aurait dit un château de conte.', 'It looked like a fairy-tale castle.',
    '/ɔ̃.no.ʁɛ di œ̃ ʃa.to də kɔ̃t/', 'ohⁿ-noh-reh DEE | uhⁿ sha-TOH duh KOHⁿT',
    'On eût dit : on aurait dit, pour une comparaison. La presse l’aime encore.', ['deuxieme-forme', 'presse'], FCVDR),
  sl(1301, "S'il l'eût su, il fût venu.", 'Had he known, he would have come.',
    '/sil ly sy il fy və.ny/', 'seel lü SÜ | eel fü vuh-NÜ', ['deuxieme-forme', 'si']),
  map(1302, "S'il l'eût su, il fût venu.", "S'il l'avait su, il serait venu.", 'Had he known, he would have come.',
    '/sil la.vɛ sy il sə.ʁɛ və.ny/', 'seel la-veh SÜ | eel suh-reh vuh-NÜ',
    'Après si, eût su devient avait su, un plus-que-parfait. Fût venu, sans si : serait venu.', ['deuxieme-forme', 'si']),
  sl(1303, 'Sans elle, tout eût été perdu.', 'Without her, all would have been lost.',
    '/sɑ̃.zɛl tu.ty.te.te pɛʁ.dy/', 'sahⁿ-ZEL | too-tü-tay-TAY pehr-DÜ', ['deuxieme-forme']),
  map(1304, 'Sans elle, tout eût été perdu.', 'Sans elle, tout aurait été perdu.', 'Without her, all would have been lost.',
    '/sɑ̃.zɛl tu.to.ʁɛ.te.te pɛʁ.dy/', 'sahⁿ-ZEL | too-toh-reh-tay-TAY pehr-DÜ',
    'Sans elle pose la condition ; eût été donne le résultat : aurait été.', ['deuxieme-forme']),
  sl(1305, 'Il eût mieux valu se taire.', 'It would have been better to keep quiet.',
    '/i.ly mjø va.ly sə tɛʁ/', 'ee-lü myeu va-LÜ | suh TEHR', ['deuxieme-forme']),
  map(1306, 'Il eût mieux valu se taire.', 'Il aurait mieux valu se taire.', 'It would have been better to keep quiet.',
    '/i.lo.ʁɛ mjø va.ly sə tɛʁ/', 'ee-loh-reh myeu va-LÜ | suh TEHR',
    'Eût mieux valu : aurait mieux valu, un regret poli.', ['deuxieme-forme']),
  sl(1307, 'Elle fût partie si elle avait pu.', 'She would have left if she could have.',
    '/ɛl fy paʁ.ti si ɛ.la.vɛ py/', 'el fü par-TEE | see eh-la-veh PÜ', ['deuxieme-forme', 'si']),
  map(1308, 'Elle fût partie si elle avait pu.', 'Elle serait partie si elle avait pu.', 'She would have left if she could have.',
    '/ɛl sə.ʁɛ paʁ.ti si ɛ.la.vɛ py/', 'el suh-reh par-TEE | see eh-la-veh PÜ',
    'Fût partie, avec être et sans que : serait partie.', ['deuxieme-forme', 'si']),
  rule(1309, 'Sans que ni déclencheur, eût ou fût et un participe : un conditionnel passé.', 'With no que and no trigger, eût or fût plus a participle is a past conditional.',
    '/sɑ̃ kə ni de.klɑ̃.ʃœʁ y u fy e œ̃ paʁ.ti.sip œ̃ kɔ̃.di.sjɔ.nɛl pa.se/', 'sahⁿ KUH | nee day-klahⁿ-SHUHR | Ü oo FÜ | ay uhⁿ par-tee-SEEP | uhⁿ kohⁿ-dee-syo-nel pa-SAY',
    'Il eût fallu : subjonctif ou conditionnel ?',
    'La forme est celle du plus-que-parfait du subjonctif ; le sens, celui du conditionnel passé. Tu lis : il aurait fallu.', ['deuxieme-forme'], F),
  rule(1310, 'Après si, eût su se lit avait su.', 'After si, eût su reads as avait su.',
    '/a.pʁɛ si y sy sə li a.vɛ sy/', 'a-preh SEE | Ü SÜ | suh LEE | a-veh SÜ',
    'S’il l’eût su : quel temps aujourd’hui ?',
    'Après si et comme si, jamais de subjonctif aujourd’hui : le plus-que-parfait de l’indicatif.', ['deuxieme-forme', 'si'], F),
];

/* ── ACT 7 · LA CONCORDANCE DES TEMPS (.1315-.1329) ───────────────────────── */

export const ACT7_ROWS: Row[] = [
  sl(1315, "Je voulais qu'il partît.", 'I wanted him to leave.',
    '/ʒə vu.lɛ kil paʁ.ti/', 'zhuh voo-LEH | keel par-TEE', ['concordance', 'ir']),
  map(1316, "Je voulais qu'il partît.", "Je voulais qu'il parte.", 'I wanted him to leave.',
    '/ʒə vu.lɛ kil paʁt/', 'zhuh voo-LEH | keel PART',
    'Voulais, au passé : le livre met l’imparfait du subjonctif. Aujourd’hui, le présent suffit.', ['concordance', 'ir'], FCVDR),
  sent(1317, "Je veux qu'il parte ce soir.", 'I want him to leave tonight.',
    '/ʒə vø kil paʁt sə swaʁ/', 'zhuh VEU | keel PART | suh SWAR', ['concordance', 'present']),
  sl(1318, "Elle ordonna qu'on ouvrît les fenêtres.", 'She ordered the windows to be opened.',
    '/ɛ.lɔʁ.dɔ.na kɔ̃.nu.vʁi le fə.nɛtʁ/', 'eh-lor-do-NA | kohⁿ-noo-VREE | lay fuh-NETR', ['concordance', 'ir']),
  map(1319, "Elle ordonna qu'on ouvrît les fenêtres.", "Elle a ordonné qu'on ouvre les fenêtres.", 'She ordered the windows to be opened.',
    '/ɛ.la ɔʁ.dɔ.ne kɔ̃.nuvʁ le fə.nɛtʁ/', 'eh-la or-do-NAY | kohⁿ-NOOVR | lay fuh-NETR',
    'Ouvrît : ouvrir. Dans le livre, un imparfait du subjonctif après ordonna ; aujourd’hui, ouvre.', ['concordance', 'ir']),
  sl(1320, "Il faudrait qu'il vînt demain.", 'He would need to come tomorrow.',
    '/il fo.dʁɛ kil vɛ̃ də.mɛ̃/', 'eel foh-DREH | keel VEHⁿ | duh-MEHⁿ', ['concordance', 'venir']),
  map(1321, "Il faudrait qu'il vînt demain.", "Il faudrait qu'il vienne demain.", 'He would need to come tomorrow.',
    '/il fo.dʁɛ kil vjɛn də.mɛ̃/', 'eel foh-DREH | keel VYENN | duh-MEHⁿ',
    'Après un conditionnel aussi, le livre met l’imparfait du subjonctif. Aujourd’hui : vienne.', ['concordance', 'venir']),
  sl(1322, "Il était parti sans qu'on le remarquât.", 'He had left without anyone noticing.',
    '/i.le.tɛ paʁ.ti sɑ̃ kɔ̃ lə ʁə.maʁ.ka/', 'ee-lay-teh par-TEE | sahⁿ kohⁿ luh ruh-mar-KA', ['concordance', 'er']),
  map(1323, "Il était parti sans qu'on le remarquât.", "Il était parti sans qu'on le remarque.", 'He had left without anyone noticing.',
    '/i.le.tɛ paʁ.ti sɑ̃ kɔ̃ lə ʁə.maʁk/', 'ee-lay-teh par-TEE | sahⁿ kohⁿ luh ruh-MARK',
    'Remarquât : remarquer, avec -ât. Sans que garde le subjonctif ; seul le temps change.', ['concordance', 'er'], FCVDR),
  sl(1324, "Nous doutions qu'elle eût reçu notre lettre.", 'We doubted she had received our letter.',
    '/nu du.tjɔ̃ kɛ.ly ʁə.sy nɔtʁ lɛtʁ/', 'noo doo-TYOHⁿ | keh-lü ruh-SÜ | notr LETR', ['concordance', 'pqp']),
  map(1325, "Nous doutions qu'elle eût reçu notre lettre.", "Nous doutions qu'elle ait reçu notre lettre.", 'We doubted she had received our letter.',
    '/nu du.tjɔ̃ kɛ.lɛ ʁə.sy nɔtʁ lɛtʁ/', 'noo doo-TYOHⁿ | keh-leh ruh-SÜ | notr LETR',
    'Eût reçu : déjà fait avant le doute. Aujourd’hui : ait reçu.', ['concordance', 'pqp']),
  rule(1326, "Verbe principal au passé : imparfait du subjonctif dans les livres, présent aujourd'hui.", 'Main verb in the past: imperfect subjunctive in books, present today.',
    '/vɛʁb pʁɛ̃.si.pal o pa.se ɛ̃.paʁ.fɛ dy syb.ʒɔ̃k.tif dɑ̃ le livʁ pʁe.zɑ̃ o.ʒuʁ.dɥi/', 'VEHRB prehⁿ-see-PAL oh pa-SAY | ehⁿ-par-FEH dü süb-zhohⁿk-TEEF | dahⁿ lay LEEVR | pray-ZAHⁿ oh-zhoor-DWEE',
    'Pourquoi qu’il vînt, et non qu’il vienne ?',
    'C’est la concordance des temps du français classique. Le français d’aujourd’hui garde le présent, quel que soit le temps du verbe principal.', ['concordance']),
  rule(1327, "Déjà fait : plus-que-parfait du subjonctif dans les livres, subjonctif passé aujourd'hui.", 'Already done: pluperfect subjunctive in books, past subjunctive today.',
    '/de.ʒa fɛ ply kə paʁ.fɛ dy syb.ʒɔ̃k.tif dɑ̃ le livʁ syb.ʒɔ̃k.tif pa.se o.ʒuʁ.dɥi/', 'day-zha FEH | plü kuh par-FEH dü süb-zhohⁿk-TEEF | dahⁿ lay LEEVR | süb-zhohⁿk-teef pa-SAY oh-zhoor-DWEE',
    'Et pour ce qui était déjà fait ?',
    'Qu’elle eût reçu devient qu’elle ait reçu : l’horloge ne change pas, seul l’habit change.', ['concordance', 'pqp']),
  sl(1328, "J'étais heureuse que tu fusses là.", 'I was happy you were there.',
    '/ʒe.tɛ.zœ.ʁøz kə ty fys la/', 'zhay-teh-zuh-REUZ | kuh tü füss LA', ['concordance', 'etre', 'tu']),
  map(1329, "J'étais heureuse que tu fusses là.", "J'étais heureuse que tu sois là.", 'I was happy you were there.',
    '/ʒe.tɛ.zœ.ʁøz kə ty swa la/', 'zhay-teh-zuh-REUZ | kuh tü swa LA',
    'Tu fusses : être, tu. Une forme très rare, presque comique aujourd’hui. On dit : que tu sois là.', ['concordance', 'etre', 'tu'], FCVDR),
];

/* ── ACT 8 · AUJOURD'HUI, TU DIRAIS (.1335-.1346) ─────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sl(1335, 'Il eût été facile de renoncer.', 'It would have been easy to give up.',
    '/i.ly.te.te fa.sil də ʁə.nɔ̃.se/', 'ee-lü-tay-TAY fa-SEEL | duh ruh-nohⁿ-SAY', ['discours', 'deuxieme-forme']),
  map(1336, 'Il eût été facile de renoncer.', 'Il aurait été facile de renoncer.', 'It would have been easy to give up.',
    '/i.lo.ʁɛ.te.te fa.sil də ʁə.nɔ̃.se/', 'ee-loh-reh-tay-TAY fa-SEEL | duh ruh-nohⁿ-SAY',
    'Eût été, sans que : aurait été.', ['discours', 'deuxieme-forme'], FCVDR),
  sl(1337, 'Nos parents voulaient que ce pont fût construit.', 'Our parents wanted this bridge to be built.',
    '/no pa.ʁɑ̃ vu.lɛ kə sə pɔ̃ fy kɔ̃s.tʁɥi/', 'noh pa-RAHⁿ voo-LEH | kuh suh POHⁿ | fü kohⁿs-TRWEE', ['discours', 'etre']),
  map(1338, 'Nos parents voulaient que ce pont fût construit.', 'Nos parents voulaient que ce pont soit construit.', 'Our parents wanted this bridge to be built.',
    '/no pa.ʁɑ̃ vu.lɛ kə sə pɔ̃ swa kɔ̃s.tʁɥi/', 'noh pa-RAHⁿ voo-LEH | kuh suh POHⁿ | swa kohⁿs-TRWEE',
    'Fût construit, un passif : soit construit.', ['discours', 'etre']),
  sl(1339, 'Il fallut que chacun y mît du sien.', 'Everyone had to do their bit.',
    '/il fa.ly kə ʃa.kœ̃ i mi dy sjɛ̃/', 'eel fa-LÜ | kuh sha-KUHⁿ ee MEE | dü SYEHⁿ', ['discours', 'mettre']),
  map(1340, 'Il fallut que chacun y mît du sien.', 'Il a fallu que chacun y mette du sien.', 'Everyone had to do their bit.',
    '/i.la fa.ly kə ʃa.kœ̃ i mɛt dy sjɛ̃/', 'ee-la fa-LÜ | kuh sha-KUHⁿ ee MET | dü SYEHⁿ',
    'Mît : mettre, avec un chapeau. Fallut, un passé simple : a fallu.', ['discours', 'mettre'], FCVDR),
  sl(1341, "Bien qu'on eût promis ce pont cent fois, rien n'avançait.", 'Although this bridge had been promised a hundred times, nothing moved.',
    '/bjɛ̃ kɔ̃.ny pʁɔ.mi sə pɔ̃ sɑ̃ fwa ʁjɛ̃ na.vɑ̃.sɛ/', 'byehⁿ kohⁿ-nü pro-MEE | suh POHⁿ sahⁿ FWA | ryehⁿ na-vahⁿ-SEH', ['discours', 'pqp']),
  map(1342, "Bien qu'on eût promis ce pont cent fois, rien n'avançait.", "Bien qu'on ait promis ce pont cent fois, rien n'avançait.", 'Although this bridge had been promised a hundred times, nothing moved.',
    '/bjɛ̃ kɔ̃.nɛ pʁɔ.mi sə pɔ̃ sɑ̃ fwa ʁjɛ̃ na.vɑ̃.sɛ/', 'byehⁿ kohⁿ-neh pro-MEE | suh POHⁿ sahⁿ FWA | ryehⁿ na-vahⁿ-SEH',
    'Eût promis : ait promis. N’avançait, un imparfait de l’indicatif, ne bouge pas.', ['discours', 'pqp']),
  sl(1343, 'Qui eût cru que nous y arriverions ?', 'Who would have thought we would make it?',
    '/ki y kʁy kə nu.zi a.ʁi.və.ʁjɔ̃/', 'kee ü KRÜ | kuh noo-zee a-ree-vuh-RYOHⁿ', ['discours', 'deuxieme-forme']),
  map(1344, 'Qui eût cru que nous y arriverions ?', 'Qui aurait cru que nous y arriverions ?', 'Who would have thought we would make it?',
    '/ki o.ʁɛ kʁy kə nu.zi a.ʁi.və.ʁjɔ̃/', 'kee oh-reh KRÜ | kuh noo-zee a-ree-vuh-RYOHⁿ',
    'Qui eût cru : qui aurait cru, une question pour s’étonner.', ['discours', 'deuxieme-forme']),
  rule(1345, 'Imparfait du subjonctif : présent. Plus-que-parfait : passé. Deuxième forme : conditionnel passé.', 'Imperfect subjunctive: present. Pluperfect: past. Second form: past conditional.',
    '/ɛ̃.paʁ.fɛ dy syb.ʒɔ̃k.tif pʁe.zɑ̃ ply kə paʁ.fɛ pa.se dø.zjɛm fɔʁm kɔ̃.di.sjɔ.nɛl pa.se/', 'ehⁿ-par-FEH dü süb-zhohⁿk-TEEF | pray-ZAHⁿ | plü kuh par-FEH | pa-SAY | deu-zyem FORM | kohⁿ-dee-syo-nel pa-SAY',
    'Les trois traductions, dans l’ordre ?',
    'Qu’il fût : qu’il soit. Qu’il eût fini : qu’il ait fini. Il eût fallu : il aurait fallu. Après si : le plus-que-parfait de l’indicatif.', ['aujourdhui']),
  rule(1346, 'Seules les formes littéraires changent ; le reste du texte ne bouge pas.', 'Only the literary forms change; the rest of the text stays.',
    '/sœl le fɔʁm li.te.ʁɛʁ ʃɑ̃ʒ lə ʁɛst dy tɛkst nə buʒ pa/', 'suhl lay FORM lee-tay-REHR | SHAHⁿZH | luh REST dü TEKST | nuh boozh PA',
    'Que gardes-tu tel quel ?',
    'L’indicatif, l’ordre des faits et le vocabulaire restent. Le passé simple, lui, devient passé composé.', ['aujourdhui']),
];

/* ── ACT 9 · LES FORMES QUI VIVENT ENCORE (.1350-.1364) ───────────────────── */

export const ACT9_ROWS: Row[] = [
  sl(1350, "Reste, ne fût-ce qu'une heure.", 'Stay, if only for an hour.',
    '/ʁɛst nə fys ky.nœʁ/', 'REST | nuh füss kü-NUHR', ['figee', 'etre']),
  map(1351, "Reste, ne fût-ce qu'une heure.", "Reste, ne serait-ce qu'une heure.", 'Stay, if only for an hour.',
    '/ʁɛst nə sə.ʁɛs ky.nœʁ/', 'REST | nuh suh-ress kü-NUHR',
    'Ne fût-ce que : ne serait-ce que, même seulement. Encore vivant à l’écrit soigné.', ['figee', 'etre'], FCVDR),
  sl(1352, 'Il faut le lire, fût-ce en traduction.', 'You must read it, even in translation.',
    '/il fo lə liʁ fys ɑ̃ tʁa.dyk.sjɔ̃/', 'eel foh luh LEER | füss ahⁿ tra-dük-SYOHⁿ', ['figee', 'etre']),
  map(1353, 'Il faut le lire, fût-ce en traduction.', 'Il faut le lire, même en traduction.', 'You must read it, even in translation.',
    '/il fo lə liʁ mɛm ɑ̃ tʁa.dyk.sjɔ̃/', 'eel foh luh LEER | MEM ahⁿ tra-dük-SYOHⁿ',
    'Fût-ce : même, même si c’est. L’inversion remplace si.', ['figee', 'etre']),
  sl(1354, "Quoi qu'il en fût, elle ne céda pas.", 'Be that as it may, she did not give in.',
    '/kwa kil ɑ̃ fy ɛl nə se.da pa/', 'KWA keel ahⁿ FÜ | el nuh say-DA PA', ['figee', 'etre']),
  map(1355, "Quoi qu'il en fût, elle ne céda pas.", "Quoi qu'il en soit, elle n'a pas cédé.", 'Be that as it may, she did not give in.',
    '/kwa kil ɑ̃ swa ɛl na pa se.de/', 'KWA keel ahⁿ SWA | el na pa say-DAY',
    'Quoi qu’il en fût, au passé dans un livre ; aujourd’hui, on dit toujours quoi qu’il en soit.', ['figee', 'etre']),
  sent(1356, "Quoi qu'il en soit, on se voit demain.", 'Either way, we will see each other tomorrow.',
    '/kwa kil ɑ̃ swa ɔ̃ sə vwa də.mɛ̃/', 'KWA keel ahⁿ SWA | ohⁿ suh VWA duh-MEHⁿ', ['figee', 'vivant'], FCVDR),
  sent(1357, "Tu n'as pas de voiture ? Qu'à cela ne tienne, je t'emmène.", 'You have no car? Never mind, I will drive you.',
    '/ty na pa də vwa.tyʁ ka sə.la nə tjɛn ʒə tɑ̃.mɛn/', 'tü na pa duh vwa-TÜR | ka suh-LA nuh TYENN | zhuh tahⁿ-MENN', ['figee', 'vivant', 'present']),
  sl(1358, 'Je finirai ce livre, dût-il me prendre dix ans.', 'I will finish this book, even if it takes me ten years.',
    '/ʒə fi.ni.ʁe sə livʁ dy.til mə pʁɑ̃dʁ di.zɑ̃/', 'zhuh fee-nee-RAY suh LEEVR | dü-TEEL | muh prahⁿdr dee-ZAHⁿ', ['figee', 'devoir']),
  map(1359, 'Je finirai ce livre, dût-il me prendre dix ans.', 'Je finirai ce livre, même si ça devait me prendre dix ans.', 'I will finish this book, even if it takes me ten years.',
    '/ʒə fi.ni.ʁe sə livʁ mɛm si sa də.vɛ mə pʁɑ̃dʁ di.zɑ̃/', 'zhuh fee-nee-RAY suh LEEVR | mem see sa duh-VEH | muh prahⁿdr dee-ZAHⁿ',
    'Dût-il : même s’il devait. Devoir, avec un chapeau et l’inversion.', ['figee', 'devoir']),
  rule(1360, "Qu'à cela ne tienne est un présent du subjonctif.", 'Qu’à cela ne tienne is a present subjunctive.',
    '/ka sə.la nə tjɛn ɛ.tœ̃ pʁe.zɑ̃ dy syb.ʒɔ̃k.tif/', 'ka suh-LA nuh TYENN | eh-tuhⁿ pray-ZAHⁿ dü süb-zhohⁿk-TEEF',
    'Qu’à cela ne tienne : quel temps ?',
    'Tienne vient de tenir, au présent : l’expression est ancienne, mais la forme est celle d’aujourd’hui. Elle veut dire : pas de problème.', ['figee', 'present']),
  sent(1361, 'Appelle-la, ne serait-ce que pour lui dire merci.', 'Call her, if only to say thank you.',
    '/a.pɛl.la nə sə.ʁɛs kə puʁ lɥi diʁ mɛʁ.si/', 'a-pel-LA | nuh suh-ress kuh | poor lwee deer mehr-SEE', ['figee', 'vivant'], FCVDR),
  sl(1362, 'Il ne voulait rien changer, fût-ce une virgule.', 'He did not want to change anything, not even a comma.',
    '/il nə vu.lɛ ʁjɛ̃ ʃɑ̃.ʒe fys yn viʁ.ɡyl/', 'eel nuh voo-leh RYEHⁿ shahⁿ-ZHAY | füss ün veer-GÜL', ['figee', 'etre']),
  map(1363, 'Il ne voulait rien changer, fût-ce une virgule.', 'Il ne voulait rien changer, pas même une virgule.', 'He did not want to change anything, not even a comma.',
    '/il nə vu.lɛ ʁjɛ̃ ʃɑ̃.ʒe pa mɛm yn viʁ.ɡyl/', 'eel nuh voo-leh RYEHⁿ shahⁿ-ZHAY | pa MEM ün veer-GÜL',
    'Après une négation, fût-ce se lit : pas même.', ['figee', 'etre']),
  rule(1364, 'Fût-ce, ne fût-ce que, dût-il : trois formes figées encore vivantes.', 'Fût-ce, ne fût-ce que, dût-il: three fixed forms still alive.',
    '/fys nə fys kə dy.til tʁwa fɔʁm fi.ʒe ɑ̃.kɔʁ vi.vɑ̃t/', 'FÜSS | nuh füss KUH | dü-TEEL | trwa FORM fee-ZHAY | ahⁿ-kor vee-VAHⁿT',
    'Quelles formes littéraires vivent encore ?',
    'Tu les liras dans la presse et les discours. Tu peux les comprendre sans jamais les employer.', ['figee'], F),
];

/* ── ACT 10 · COMPRENDRE L'EXTRAIT (.1370-.1380) ──────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1370, 'Le narrateur se moque doucement de son personnage.', 'The narrator gently makes fun of his character.',
    '/lə na.ʁa.tœʁ sə mɔk du.sə.mɑ̃ də sɔ̃ pɛʁ.sɔ.naʒ/', 'luh na-ra-TUHR suh MOK | doo-suh-MAHⁿ duh sohⁿ pehr-so-NAZH', ['lecture', 'ironie']),
  sent(1371, 'Le texte laisse entendre que le baron est ridicule.', 'The text implies the baron is ridiculous.',
    '/lə tɛkst lɛs ɑ̃.tɑ̃dʁ kə lə ba.ʁɔ̃ ɛ ʁi.di.kyl/', 'luh TEKST less ahⁿ-TAHⁿDR | kuh luh ba-ROHⁿ eh ree-dee-KÜL', ['lecture', 'inference'], FCVDR),
  sent(1372, 'Le style est solennel, mais la situation est comique.', 'The style is solemn, but the situation is comic.',
    '/lə stil ɛ sɔ.la.nɛl mɛ la si.tɥa.sjɔ̃ ɛ kɔ.mik/', 'luh STEEL eh so-la-NEL | meh la see-twa-SYOHⁿ eh ko-MEEK', ['lecture', 'ironie']),
  sent(1373, "Ce décalage crée l'ironie.", 'This gap creates the irony.',
    '/sə de.ka.laʒ kʁe li.ʁɔ.ni/', 'suh day-ka-LAZH | kray lee-ro-NEE', ['lecture', 'ironie']),
  sl(1374, "Il exigeait qu'on l'appelât monsieur le baron.", 'He insisted on being called Monsieur le baron.',
    '/i.lɛɡ.zi.ʒɛ kɔ̃ la.pə.la mə.sjø lə ba.ʁɔ̃/', 'ee-leg-zee-ZHEH | kohⁿ la-puh-LA | muh-syeu luh ba-ROHⁿ', ['lecture', 'er']),
  map(1375, "Il exigeait qu'on l'appelât monsieur le baron.", "Il exigeait qu'on l'appelle monsieur le baron.", 'He insisted on being called Monsieur le baron.',
    '/i.lɛɡ.zi.ʒɛ kɔ̃ la.pɛl mə.sjø lə ba.ʁɔ̃/', 'ee-leg-zee-ZHEH | kohⁿ la-PEL | muh-syeu luh ba-ROHⁿ',
    'Appelât : appeler, avec -ât. Aujourd’hui : qu’on l’appelle.', ['lecture', 'er']),
  sl(1376, 'On eût dit un roi en exil.', 'He looked like a king in exile.',
    '/ɔ̃.ny di œ̃ ʁwa ɑ̃.nɛɡ.zil/', 'ohⁿ-nü DEE | uhⁿ RWA ahⁿ-neg-ZEEL', ['lecture', 'deuxieme-forme']),
  map(1377, 'On eût dit un roi en exil.', 'On aurait dit un roi en exil.', 'He looked like a king in exile.',
    '/ɔ̃.no.ʁɛ di œ̃ ʁwa ɑ̃.nɛɡ.zil/', 'ohⁿ-noh-reh DEE | uhⁿ RWA ahⁿ-neg-ZEEL',
    'On eût dit : une comparaison. Ici, le narrateur exagère pour faire sourire.', ['lecture', 'deuxieme-forme'], FCVDR),
  sl(1378, 'Il eût voulu que tout le village le saluât.', 'He would have liked the whole village to greet him.',
    '/i.ly vu.ly kə tu lə vi.laʒ lə sa.lɥa/', 'ee-lü voo-LÜ | kuh too luh vee-LAZH | luh sa-LWA', ['lecture', 'deuxieme-forme', 'er']),
  map(1379, 'Il eût voulu que tout le village le saluât.', 'Il aurait voulu que tout le village le salue.', 'He would have liked the whole village to greet him.',
    '/i.lo.ʁɛ vu.ly kə tu lə vi.laʒ lə sa.ly/', 'ee-loh-reh voo-LÜ | kuh too luh vee-LAZH | luh sa-LÜ',
    'Deux formes : eût voulu, un conditionnel passé ; saluât, un imparfait du subjonctif. Aujourd’hui : aurait voulu, salue.', ['lecture', 'deuxieme-forme', 'er']),
  sent(1380, "L'auteur imite le style d'un roman du dix-neuvième siècle.", 'The author imitates the style of a nineteenth-century novel.',
    '/lo.tœʁ i.mit lə stil dœ̃ ʁɔ.mɑ̃ dy diz.nœ.vjɛm sjɛkl/', 'loh-TUHR ee-MEET luh STEEL | duhⁿ ro-MAHⁿ | dü deez-nuh-vyem SYEKL', ['lecture', 'pastiche']),
];

/* ── ACT 11 · RACONTE-LE À UN AMI (.1385-.1396) ───────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1385, "Je viens de lire une page qui m'a fait rire.", 'I have just read a page that made me laugh.',
    '/ʒə vjɛ̃ də liʁ yn paʒ ki ma fɛ ʁiʁ/', 'zhuh vyehⁿ duh LEER | ün PAZH | kee ma feh REER', ['tache'], FCVDR),
  sent(1386, "Je te la raconte en français d'aujourd'hui.", 'I will tell it to you in today’s French.',
    '/ʒə tə la ʁa.kɔ̃t ɑ̃ fʁɑ̃.sɛ do.ʒuʁ.dɥi/', 'zhuh tuh la ra-KOHⁿT | ahⁿ frahⁿ-seh doh-zhoor-DWEE', ['tache']),
  sl(1387, "Il eût fallu qu'on la retînt.", 'Someone should have held her back.',
    '/i.ly fa.ly kɔ̃ la ʁə.tɛ̃/', 'ee-lü fa-LÜ | kohⁿ la ruh-TEHⁿ', ['tache', 'deuxieme-forme', 'venir']),
  map(1388, "Il eût fallu qu'on la retînt.", "Il aurait fallu qu'on la retienne.", 'Someone should have held her back.',
    '/i.lo.ʁɛ fa.ly kɔ̃ la ʁə.tjɛn/', 'ee-loh-reh fa-LÜ | kohⁿ la ruh-TYENN',
    'Eût fallu : aurait fallu. Retînt : retenir ; aujourd’hui, retienne.', ['tache', 'deuxieme-forme', 'venir'], FCVDR),
  sl(1389, "Il fallait qu'elle vît Paris.", 'She had to see Paris.',
    '/il fa.lɛ kɛl vi pa.ʁi/', 'eel fa-LEH | kel VEE pa-REE', ['tache', 'voir']),
  map(1390, "Il fallait qu'elle vît Paris.", "Il fallait qu'elle voie Paris.", 'She had to see Paris.',
    '/il fa.lɛ kɛl vwa pa.ʁi/', 'eel fa-LEH | kel VWA pa-REE',
    'Vît : voir, avec un chapeau. Elle vit Paris, sans chapeau, serait un passé simple.', ['tache', 'voir']),
  sl(1391, "Elle s'arrêta, comme si elle eût entendu son nom.", 'She stopped, as if she had heard her name.',
    '/ɛl sa.ʁɛ.ta kɔm si ɛ.ly.tɑ̃.tɑ̃.dy sɔ̃ nɔ̃/', 'el sa-reh-TA | kom see eh-lü-tahⁿ-tahⁿ-DÜ | sohⁿ NOHⁿ', ['tache', 'si']),
  map(1392, "Elle s'arrêta, comme si elle eût entendu son nom.", "Elle s'est arrêtée, comme si elle avait entendu son nom.", 'She stopped, as if she had heard her name.',
    '/ɛl sɛ.ta.ʁɛ.te kɔm si ɛ.la.vɛ.tɑ̃.tɑ̃.dy sɔ̃ nɔ̃/', 'el seh-ta-reh-TAY | kom see eh-la-veh-tahⁿ-tahⁿ-DÜ | sohⁿ NOHⁿ',
    'Après comme si, eût entendu devient avait entendu : jamais de subjonctif après si.', ['tache', 'si'], FCVDR),
  sent(1393, "Ce qui m'a plu, c'est le ton.", 'What I liked was the tone.',
    '/sə ki ma ply sɛ lə tɔ̃/', 'suh kee ma PLÜ | seh luh TOHⁿ', ['tache']),
  sent(1394, 'Et toi, tu serais parti à sa place ?', 'And you, would you have left in her place?',
    '/e twa ty sə.ʁɛ paʁ.ti a sa plas/', 'ay TWA | tü suh-reh par-TEE | a sa PLASS', ['tache']),
  sl(1395, "Sa mère eût voulu qu'elle attendît le printemps.", 'Her mother would have liked her to wait for spring.',
    '/sa mɛʁ y vu.ly kɛ.la.tɑ̃.di lə pʁɛ̃.tɑ̃/', 'sa MEHR ü voo-LÜ | keh-la-tahⁿ-DEE | luh prehⁿ-TAHⁿ', ['tache', 'deuxieme-forme', 're']),
  map(1396, "Sa mère eût voulu qu'elle attendît le printemps.", "Sa mère aurait voulu qu'elle attende le printemps.", 'Her mother would have liked her to wait for spring.',
    '/sa mɛʁ o.ʁɛ vu.ly kɛ.la.tɑ̃d lə pʁɛ̃.tɑ̃/', 'sa MEHR oh-reh voo-LÜ | keh-la-TAHⁿD | luh prehⁿ-TAHⁿ',
    'Eût voulu : aurait voulu. Attendît : attendre ; aujourd’hui, attende.', ['tache', 'deuxieme-forme', 're']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act (modern rows only: a literary
 *  line never carries `dictation`). */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS
 *
 *  The long readings (B2: 200 to 350 words) and the « dans un texte »
 *  paragraphs (60 to 120 words) that close acts 3 to 10. They live here so
 *  the reading, the quiz and the task cannot drift. ALL INVENTED (§A.6).
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a 19th-century-style novel opening, « Le notaire de Valbonne ». */
export const LECTURE_NOTAIRE =
  "Valbonne, automne 1872. Il pleuvait depuis le matin lorsque Madame Delorme se présenta chez le notaire. Bien qu'il fût tard, Maître Garnier la reçut dans son cabinet, où une lampe brûlait encore. Elle était vêtue de noir et, bien qu'elle eût marché sous la pluie, pas une mèche ne dépassait de son chapeau. Elle posa sur le bureau une lettre cachetée. « Mon mari voulait que je vous la remette en main propre », dit-elle simplement. Le notaire l'ouvrit sans hâte. Le défunt y demandait que sa maison fût vendue et que l'argent allât à l'école du village. Il exigeait aussi que sa femme vînt seule à la lecture du testament, et qu'on n'en dît rien à ses neveux. Maître Garnier leva les yeux. Il eût fallu, pensa-t-il, que cette lettre arrivât un mois plus tôt : la maison venait d'être promise à un cousin. Madame Delorme attendait qu'il parlât. Il se tut longtemps, comme s'il eût cherché ses mots. Enfin, il replia la lettre avec soin. « Madame, dit-il, quoi qu'il en soit, la volonté de votre mari sera respectée. » Elle sourit pour la première fois de la soirée. Dehors, la pluie avait cessé, et l'on eût dit que la place entière retenait son souffle. Maître Garnier, lui, savait déjà que le cousin ne céderait pas sans bruit.";

/** Act 2: an invented regional history textbook page, the Sainte-Aure canal. */
export const LECTURE_CANAL =
  "Extrait d'un manuel d'histoire régionale. Au début du XIXe siècle, la petite ville de Sainte-Aure vivait du commerce du bois, mais les routes étaient si mauvaises qu'il fallait trois jours pour atteindre le port. Les marchands demandaient depuis longtemps qu'on creusât un canal. En 1821, le conseil municipal décida enfin qu'il fallait que la ville se dotât d'un canal. Certains conseillers craignaient que la ville ne s'endettât pour vingt ans ; d'autres voulaient qu'on attendît l'aide de l'État. Les ingénieurs proposèrent un tracé de douze kilomètres. Le préfet ordonna que les travaux fussent achevés avant l'hiver suivant, bien qu'aucun ingénieur ne le crût possible. Il eût été plus sage d'attendre le printemps : les pluies d'automne inondèrent le chantier à deux reprises. Bien que le budget fût épuisé dès 1823, le chantier continua, grâce à un emprunt que les marchands garantirent eux-mêmes. Le canal fut inauguré en 1826, avec trois ans de retard, et toute la ville se pressa sur les quais. Il transforma la ville : en dix ans, la population doubla. Les historiens soulignent aujourd'hui que le projet faillit échouer plusieurs fois, et qu'il fallut toute l'obstination des marchands pour qu'il aboutît. À l'examen, retiens deux dates : 1821, la décision, et 1826, l'inauguration.";

/** Act 5: a schoolteacher's memoir, written in 1910 (invented). */
export const LECTURE_MEMOIRES =
  "Extrait des souvenirs d'une institutrice, écrits en 1910. J'avais dix-neuf ans lorsqu'on me nomma dans un village de montagne. Mon père eût préféré que je restasse auprès de lui ; il ne me le dit jamais, mais je le lus dans ses yeux. Le jour de mon arrivée, il neigeait. Le maire s'étonna qu'on eût envoyé une si jeune fille, et il me fit comprendre qu'il eût mieux valu un homme. L'école était glaciale. Bien que le poêle eût été réparé la veille, il fumait tant qu'il fallut ouvrir les fenêtres. Les enfants me regardaient sans un mot. La première leçon fut un désastre : aucun d'eux ne savait lire, bien qu'on m'eût assuré le contraire. Le soir, j'écrivais à mon père des lettres où tout allait bien. Je craignais qu'ils ne se moquassent de moi. Au bout d'une semaine, pourtant, le plus grand d'entre eux vint me voir avant la classe. Il voulait que je l'aidasse à écrire une lettre, parce que son frère était parti en Amérique sans qu'on eût reçu de ses nouvelles depuis un an. Nous écrivîmes cette lettre ensemble, lentement, en cherchant chaque mot. La réponse arriva au printemps, avec une photographie et trois dollars pour l'école. Ce jour-là, je compris que je resterais.";

/** Act 7: a novel page in a cabinetmaker's workshop (invented). The
 *  narration uses the classical concordance; the characters' own words, in
 *  quotation marks, use today's present subjunctive. */
export const LECTURE_ATELIER =
  "Chapitre trois. Monsieur Lambert exigeait que ses ouvriers fussent à l'atelier avant six heures, et il ne tolérait pas qu'on y parlât pendant le travail. Personne ne savait d'où lui venait cette exigence, ni pourquoi il n'avait jamais pris d'apprenti. Il voulait que chaque meuble sortît de ses mains aussi parfait que s'il eût été fait pour un roi. Le jeune Antoine, arrivé de Nantes au printemps, craignait qu'on ne le renvoyât avant l'hiver. Il travaillait plus que les autres, bien qu'on ne lui eût jamais adressé un compliment. Les autres se moquaient de lui, quoiqu'ils admirassent en secret la finesse de son travail. Un matin, le patron s'arrêta devant la table qu'Antoine venait de finir. Il en caressa le bois longtemps, sans rien dire. Les ouvriers attendaient qu'il parlât. Enfin, il demanda qu'on lui apportât une chaise, s'assit, et ordonna qu'Antoine revînt le voir le soir même. Toute la journée, le jeune homme se demanda ce qu'il avait fait. Le soir venu, Monsieur Lambert lui tendit une clé. « Il faut que quelqu'un ouvre l'atelier quand je ne serai plus là, dit-il. Je voudrais que ce soit vous. » Antoine ne sut que répondre. Il eût voulu le remercier, mais aucun mot ne lui vint.";

/** Act 8: a mayor's inauguration speech (invented bridge, invented town). */
export const LECTURE_DISCOURS =
  "Discours de Madame la maire pour l'inauguration du pont de la Garenne. Mesdames et Messieurs, chers amis, il eût été facile de renoncer. Depuis cinquante ans, on nous promettait ce pont. Nos parents voulaient que ce pont fût construit ; nos grands-parents l'espéraient déjà. Bien qu'on eût promis ce pont cent fois, rien n'avançait. Il fallut que les habitants se missent en colère, que les écoliers écrivissent au ministre et que la presse s'en mêlât pour que les travaux commençassent enfin. Qui eût cru que nous y arriverions ? Je ne vous cacherai pas qu'il eût mieux valu finir avant l'été : les orages nous ont coûté deux mois. Mais le voici. Je veux remercier les ingénieurs, les ouvriers et surtout les riverains, qui ont supporté deux ans de poussière. Mes prédécesseurs, qu'on aurait tort d'accabler, n'avaient ni l'argent ni l'appui de l'État. Il fallut que chacun y mît du sien, et chacun l'a fait, ne fût-ce qu'en supportant le bruit des machines. Je voudrais que ce pont soit désormais celui de tous, et qu'on s'y promène le dimanche comme sur une place. Quoi qu'il en soit des critiques, et Dieu sait qu'il y en eut, ce soir, la Garenne n'est plus coupée en deux. Vive notre pont, et merci.";

/** Act 10: the exam extract, « Le baron de Morville » (invented pastiche). */
export const LECTURE_BARON =
  "Extrait d'un roman contemporain, écrit à la manière du XIXe siècle. Le baron de Morville exigeait qu'on l'appelât « monsieur le baron », bien que sa baronnie tînt tout entière dans un jardin de trois cents mètres carrés, derrière la pharmacie. Il eût voulu que tout le village le saluât ; le village, lui, trouvait plus simple d'attendre qu'il saluât le premier, ce qui n'arrivait jamais. Chaque dimanche, après la messe, il se postait devant l'église, une main sur sa canne, l'autre derrière le dos, et attendait qu'on vînt lui présenter ses respects. On eût dit un roi en exil. Seul le curé s'y pliait, dans l'espoir, murmurait-on, que le baron finît par léguer son jardin à la paroisse. Un dimanche de juin, une petite fille qui passait par là s'arrêta devant lui, le regarda longuement et lui demanda s'il était déguisé. Le baron devint écarlate. Il eût souhaité que la terre l'engloutît ou, à défaut, que la mère de l'enfant la grondât sévèrement. La mère éclata de rire. Le lendemain, pour la première fois de sa vie, le baron entra dans la boulangerie sans attendre qu'on lui ouvrît la porte, et dit bonjour le premier. Personne ne sut jamais ce qui s'était passé en lui cette nuit-là. Mais depuis ce jour, au village, on l'appelle simplement monsieur Morville, et il répond en souriant.";

/** Act 11: the model retelling, Léa to Hugo, of the act 1 novel opening
 *  (the notary of Valbonne), in today's French. */
export const LECTURE_MODELE =
  "Salut Hugo, j'ai enfin lu le roman que tu m'avais prêté, et je te raconte le début en français d'aujourd'hui, parce que le style est très ancien. Un soir d'automne, sous la pluie, une veuve, Madame Delorme, va voir le notaire. Bien qu'il soit tard, il la reçoit. Elle lui donne une lettre de son mari. Dans cette lettre, le mari demande que sa maison soit vendue et que l'argent aille à l'école du village. Il exige aussi que sa femme vienne seule à la lecture du testament. Le problème, c'est que la maison vient d'être promise à un cousin : il aurait fallu que la lettre arrive un mois plus tôt. Le notaire se tait longtemps, comme s'il cherchait ses mots, puis il lui promet que la volonté de son mari sera respectée. À la fin, on aurait dit que toute la place retenait son souffle. Ce qui m'a plu, c'est le ton : tout est lent et solennel, mais on sent que quelque chose va exploser. Tu crois que le cousin va se laisser faire ? Bises, Léa";

/** The task extract (printed in the brief, since `task` has no source field). */
export const EXTRAIT_TACHE =
  "Le soir où Clémence quitta la maison, il eût fallu qu'on la retînt. Son père, qui craignait qu'elle ne partît sans un mot, avait laissé la porte entrouverte. Bien qu'il fût tard et qu'il plût depuis le matin, elle prit son manteau et descendit l'escalier. Sa mère eût voulu qu'elle attendît le printemps ; son frère, qu'elle lui eût au moins dit adieu. Mais Clémence ne se retourna pas. Il fallait qu'elle vît Paris avant que sa jeunesse ne fût passée. Au coin de la rue, elle s'arrêta pourtant, comme si elle eût entendu son nom. Personne ne l'appelait. Elle sourit, quoique ses yeux fussent pleins de larmes, et marcha vers la gare. On eût dit qu'elle avait toujours su ce qu'elle ferait ce soir-là.";

/** The « dans un texte » paragraphs (acts 3 to 10). */
export const TEXTE_A3 =
  "Ce fut un hiver terrible. La neige tomba dès novembre et le village fut coupé du monde. Il fallait pourtant que quelqu'un descendît à la ville chercher des médicaments. Bien que ce fût dangereux, le jeune Paul se proposa. Sa mère eût préféré qu'il restât, mais elle ne dit rien. Il partit à l'aube. Trois jours plus tard, il fut de retour, épuisé, les bras chargés. On fit une fête, bien qu'il n'y eût presque rien à manger.";

export const TEXTE_A4 =
  "La comtesse voulait que tout fût parfait. Elle exigea que les domestiques cirassent les parquets, que le cuisinier préparât douze plats et que les musiciens jouassent jusqu'à l'aube. Il fallait aussi que ses deux fils fussent présents, bien qu'ils détestassent ces soirées. Le jour venu, il plut. Personne ne vint. La comtesse attendit jusqu'à minuit qu'on sonnât à la porte, puis elle mangea seule les douze plats, en silence.";

export const TEXTE_A5 =
  "Quand Hélène revint au village, trente ans plus tard, elle s'étonna que rien n'eût changé. Le café était toujours là, bien que le vieux patron fût mort depuis longtemps. Elle chercha la maison de son enfance. Elle eût aimé que ses parents l'eussent gardée ; ils l'avaient vendue avant qu'elle eût seize ans. Elle frappa pourtant à la porte. Une petite fille lui ouvrit et lui demanda, très sérieuse, si elle s'était perdue.";

export const TEXTE_A6 =
  "Si l'on eût écouté le vieux gardien, le phare n'eût jamais été vendu. Il eût suffi de réparer le toit. Mais le conseil municipal préféra un hôtel. Le jour de l'inauguration, il y eut une tempête. On eût dit que la mer se vengeait. Le toit neuf s'envola, et les touristes, trempés, se réfugièrent chez le gardien, qui leur offrit du thé sans un mot de reproche. Il n'en pensait pas moins.";

export const TEXTE_A7 =
  "Mon grand-père voulait que je devinsse notaire. Il fallait, disait-il, qu'un homme eût un métier sérieux. Je n'osais pas lui dire que je voulais qu'on me laissât peindre. Un dimanche, sans qu'il le sût, j'envoyai une toile à un concours. Je craignais qu'il ne l'apprît par le journal. Il l'apprit. Il vint me voir, posa le journal sur la table et dit seulement : « Il faut que tu continues. »";

export const TEXTE_A8 =
  "Il eût été simple de fermer l'école. Le ministère voulait qu'elle disparût, bien que trente enfants y fussent inscrits. Il fallut que les parents se missent en grève et que le maire écrivît au préfet. Qui eût cru qu'une lettre suffirait ? L'école resta ouverte, et le maire, qu'on eût volontiers oublié, fut réélu l'année suivante. À la rentrée, les enfants accrochèrent une banderole au-dessus de la porte.";

export const TEXTE_A9 =
  "Julien avait promis d'être à Lyon le lendemain, fût-ce à pied. Sa sœur le supplia de rester, ne fût-ce qu'une nuit. Il refusa : quoi qu'il en fût, il ne manquerait pas ce rendez-vous. Il n'avait pourtant plus de voiture. « Qu'à cela ne tienne, dit-elle enfin, prends la mienne. » Il partit à minuit, résolu à rouler toute la nuit, dût-il s'arrêter dix fois pour dormir.";

export const TEXTE_A10 =
  "Madame Pélissier voulait que ses invités admirassent son salon, bien qu'il n'y eût rien à y admirer. Elle exigeait qu'on s'extasiât devant chaque bibelot et qu'on la complimentât sur ses rideaux. Ses amis s'exécutaient avec un sérieux admirable. On eût dit une visite de musée. Un soir, un neveu de dix ans demanda tout haut pourquoi tout le monde mentait. Il ne fut plus jamais invité.";
