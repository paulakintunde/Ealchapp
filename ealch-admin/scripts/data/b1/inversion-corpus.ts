// b1.21.l1 « L'inversion » — the authored corpus, the imports and the
// citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   INVERSION AS A REGISTER, NOT AS A QUESTION TYPE.
//
//   a1.19 (« Questions oui / non ») already taught the three ways to ask,
//   the hyphen, the -t- in a-t-il, and inversion as a CLOSED LIST of twelve
//   être / avoir forms. a1.20 taught the question words with est-ce que.
//   This lesson does not re-teach either: it cites them and opens the list.
//
//     la tenue       inversion changes the register, never the meaning:
//                    speech, writing and formal service compared
//     le petit t     -t- with ANY verb ending in a vowel: va-t-il,
//                    parle-t-on, viendra-t-elle, y a-t-il
//     l'auxiliaire   compound tenses: as-tu fini, avez-vous mangé
//     le sujet nom   complex inversion: Votre fille viendra-t-elle ?
//     où, quand      inversion after a question word, and pourquoi's rule
//     la négation    Ne viens-tu pas ? N'avez-vous pas reçu ?
//     le piège je    Puis-je, never peux-je; est-ce que for most je forms
//     la formule     the service and email questions (Pourriez-vous,
//                    Serait-il possible de, Que puis-je faire pour vous)
//     l'incise       « Je pars », dit-elle / répond-il / ajoute-t-elle
//     peut-être      inversion after peut-être, sans doute, à peine and
//                    aussi (= donc) in writing, against spoken « peut-être que »
//
//   NOT OWNED: indirect questions and reported speech, which are b1.19's
//   (written in parallel): no « il demande si », no « elle a dit que » in
//   any authored string. The incise here is ALWAYS attached to a direct
//   quotation. The subjunctive (b1.14 to b1.16) is kept out of every
//   authored French string, which is why the letters close with « Je vous
//   prie d'agréer » and never with « Veuillez ».
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `langue-soignee` (« La langue soignée », domain fondations,
//     levelRange a2-b2) WAS CREATED IN POSTGRES FOR THIS LESSON ON
//     2026-09-25. Sub-themes: l'inversion, les incises, le registre soutenu.
//     Why this theme: at B1 inversion is a REGISTER, not a question type.
//     `questions` is a sons theme and `questions-du-quotidien` stops at a2,
//     and a1.19 already owns the simple question inversion. b1.25 (register)
//     can reuse the theme.
//
//     IT EXISTS IN POSTGRES ONLY. It is NOT in `seed.json`'s theme list
//     (verified 2026-09-25: 130 themes, none of them this one) and it arrives
//     there at the next publish. So a readiness run WILL warn that the theme
//     is not in the seed's theme list. THAT WARNING IS EXPECTED AND IS NOT A
//     DEFECT. The theme holds ZERO rows, in the seed and in Postgres alike.
//
//  2. ID BLOCK: this lesson owns `.1000`-`.1199` AND NOTHING ELSE. Authored
//     b1 ids start at 1000 in every theme by house rule, even in an empty
//     one, so `.001`-`.999` stays free for a future published import. Used
//     here: `.1000`-`.1194`, in eleven act blocks with a gap between each.
//     181 rows.
//
//  3. THE SEED HOLDS A LITTLE INVERSION AND NO REGISTER. Probed 2026-09-25
//     across all seed items: 42 rows carry a `-vous` inversion (mostly
//     service phrases and a1.19's closed list), ONE carries `-je` (« Puis-je
//     avoir une serviette »), and ZERO carry an incise (dit-il, répond-elle),
//     a head `peut-être` / `sans doute` / `à peine` / `aussi`, or `-t-on`.
//     So acts 9 and 10 author every row outright. Re-probe Postgres at
//     import (the log's standing « DB-only rows cannot be reused » item).
//
//  4. Every reused id in §F was read out of seed.json on 2026-09-25 and its
//     `fr` is copied verbatim wherever a section prints it, through `src()`.
//     « Savez-vous quelle heure il est ? » (fr.a2.heure-et-date.001) was
//     REFUSED on purpose: its second half is an indirect question, which is
//     b1.19's.
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER. The house writes a
//     pronounced n or m after a vowel as a plain consonant only where the
//     French has vowel + n/m + e (semaine, peine, téléphone, madame), which
//     `hasPlainNasalFor` clears. None of the rows needed a2.34's doubling
//     trick (PLENN, TRAMM). The character « Karim » was renamed « Samir »
//     because `ka-REEM` is a lone vowel closed by M with no following e,
//     which the checker cannot tell from a missing nasal mark. No U+203F
//     tie anywhere, in a respelling OR in an IPA field.
//
//  6. HYPHENS. Every inversion carries its ordinary hyphen (Va-t-il,
//     Pourriez-vous). `fold()` strips hyphens, so NO typed answer in this
//     lesson turns on a hyphen alone: the typeIns test word ORDER, the -t-
//     (its letter survives folding) and the choice of form.
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
  id: 'b1.21',
  seq: 21,
  title: 'Inversion',
  sub: "L'inversion",
  canDo: 'Can choose inversion as a register for formal writing and service, build it with -t-, compound tenses, noun subjects, question words and negation, use the incise after a quotation, and write a formal email that asks its questions by inversion',
  prereqUnitIds: ['b1.05', 'b1.08', 'b1.09'],
} as const;

export const LESSON_ID = 'b1.21.l1';
export const THEME = 'langue-soignee';
export const LEVEL = 'b1' as const;

/** ONE block, by the house rule for a theme with no published import yet. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A1 citations use the house English trail label (« lesson 22 in A1 »),
 *  resolved through `unitRef` from the shipped `unit.seq`, never typed and
 *  never the raw id. b1.* units are not in the seed yet, so they are
 *  labelled in French from the plan until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

/** « Questions oui / non »: the three strategies, the hyphen, a-t-il, and
 *  the closed twelve-form être / avoir list. THE owner of simple inversion. */
export const YESNO_UNIT = 'a1.19';
/** « Les mots interrogatifs »: the question words, with est-ce que. */
export const QWORDS_UNIT = 'a1.20';
export const FUTUR_UNIT = 'b1.05';
export const CONDITIONNEL_UNIT = 'b1.08';
export const POLITESSE_UNIT = 'b1.09';
export const PASSIF_UNIT = 'b1.18';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
  'b1.19': 19, 'b1.20': 20, 'b1.21': 21, 'b1.22': 22,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const YESNO_REF = unitRef(YESNO_UNIT);
export const QWORDS_REF = unitRef(QWORDS_UNIT);
export const FUTUR_REF = refFr(FUTUR_UNIT);
export const CONDITIONNEL_REF = refFr(CONDITIONNEL_UNIT);
export const POLITESSE_REF = refFr(POLITESSE_UNIT);
export const PASSIF_REF = refFr(PASSIF_UNIT);
export const NEXT_REF = refFr('b1.22');

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  The A1 lines are English (A1 is taught in English) and every screen that
 *  shows one follows it with the French rendering below. The b1 lines are
 *  already French and are quoted as they stand.
 *
 *  b1.05 and b1.08 carry inversion in passing, as CORPUS ROWS of their own
 *  draft lessons (« Resterez-vous pour le dîner ? », b1.05 row .1117;
 *  « Pourriez-vous m'envoyer le contrat ? », b1.08 row .697). Those rows are
 *  not in the seed, so `src()` cannot resolve them: they are quoted as the
 *  two strings below and never named by id.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as A119_REFRAME } from '../questions-terms.ts';
export { REFRAME as A120_REFRAME } from '../interrogatifs-terms.ts';
export { REFRAME as B105_REFRAME } from './futur-simple-corpus.ts';
export { REFRAME as B108_REFRAME } from './conditionnel-present-corpus.ts';
export { REFRAME as B109_REFRAME } from './politesse-corpus.ts';
export { REFRAME as B118_REFRAME } from './voix-passive-corpus.ts';

export const A119_REFRAME_FR = 'Est-ce que marche toujours. Les deux autres sont des choix.';
export const A120_REFRAME_FR = 'Ton mot, puis est-ce que. Ça marche toujours.';

/** Verbatim from futur-simple-corpus.ts (b1.05, row .1117). */
export const B105_INVERSION = 'Resterez-vous pour le dîner ?';
/** Verbatim from conditionnel-present-corpus.ts (b1.08, row .697). */
export const B108_INVERSION = "Pourriez-vous m'envoyer le contrat ?";

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE SAME PERSON IN TWO OUTFITS. « Tu viens ? », « Est-ce que tu viens ? »
 *  and « Viens-tu ? » ask exactly the same thing; what changes is what the
 *  sentence is wearing. Inversion is the good jacket: the letter, the
 *  service counter, the job interview, the written story. The whole lesson
 *  asks one question at the moment of writing: where is this sentence going?
 *
 *  It is NOT « inversion is more polite ». « Vous venez ? » said to a
 *  stranger is perfectly polite; politeness is b1.09's and lives in vous and
 *  the conditionnel. Inversion is about the occasion, not the person.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "L'inversion ne change pas le sens. Elle change la tenue.";
export const REFRAME_EN = 'Inversion does not change the meaning. It changes the outfit.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: "L'inversion ne change pas la question. Elle change la tenue.",
    why: "Too narrow. Acts 9 and 10 invert sentences that are not questions at all (« dit-elle », « peut-être viendra-t-il »), and a reframe that only speaks of questions leaves them outside the lesson's one idea.",
  },
  {
    text: "L'inversion, c'est plus poli.",
    why: "False, and it steals b1.09's job. « Vous venez ? » to a stranger is polite; « Viens-tu ? » to a child is not more polite than « Tu viens ? ». Inversion measures the OCCASION (writing, service, ceremony), and politeness measures the person.",
  },
  {
    text: "À l'oral, on n'inverse jamais.",
    why: "False where acts 7 and 8 have to hold: « Comment allez-vous ? », « Puis-je vous aider ? » and « Que puis-je faire pour vous ? » are spoken every day, at every counter. A learner who believes this sounds wrong exactly where a service phrase is expected.",
  },
  {
    text: 'Le verbe passe devant le sujet.',
    why: "The FORM, not a reframe, and it is false for act 5: in « Votre fille viendra-t-elle ? » the noun subject stays in front. A reframe made of the rule also says nothing about WHEN to invert, which is what b1 adds to a1.19.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-25 and its French is in the
 *  trailing comment, so a reader never has to open seed.json. `namedOnly`
 *  rows carry no `flashcard` drill, so no deckTranche can release them: they
 *  are reachable by being named in a section or a drill. `NOT_SPEAKABLE`
 *  additionally lists the rows with no `voiceflash`, which a `practice` speak
 *  section may never name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a1.questions.328',          // Pourriez-vous répéter la question, s'il vous plaît ?
    'fr.a1.salutations.015',        // Comment allez-vous ?
  ],
  act2: [
    'fr.a1.questions.352',          // Es-tu prêt ?
    'fr.a1.questions.362',          // Avez-vous faim ?
    'fr.a1.questions.050',          // Comment vas-tu ?  (named only)
  ],
  act3: [
    'fr.a1.questions.359',          // A-t-il faim ?
    'fr.a1.questions.360',          // A-t-elle faim ?
    'fr.a1.au-restaurant.186',      // Y a-t-il des noix dans ce plat ?
  ],
  act4: [
    'fr.a2.heure-et-date.104',      // Pendant combien de temps as-tu étudié ?
  ],
  act5: [] as string[],             // §A.3: the seed carries no noun-subject inversion worth naming.
  act6: [
    'fr.a2.symptomes.195',          // Où avez-vous mal exactement ?
    'fr.b1.heure-et-date.005',      // À quelle heure faut-il arriver ?
    'fr.a2.prepositions-essentielles.178', // Depuis quand es-tu ici ?
  ],
  act7: [
    'fr.a1.au-restaurant.209',      // Puis-je avoir une serviette, s'il vous plaît ?
  ],
  act8: [
    'fr.a2.hebergement.075',        // Pourriez-vous m'apporter une serviette, s'il vous plaît ?
    'fr.a2.au-restaurant.058',      // Pouvez-vous m'apporter du pain ?
  ],
  act9: [] as string[],             // §A.3: the seed carries no incise.
  act10: [] as string[],            // §A.3: the seed carries no head peut-être / sans doute / à peine / aussi.
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a1.questions.050',            // dictation
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a1.questions.328',            // sentence, flashcard, review
  'fr.a1.au-restaurant.186',        // sentence, flashcard, review
  'fr.a2.heure-et-date.104',        // flashcard, sentence
  'fr.b1.heure-et-date.005',        // flashcard, roleplay, sentence
  'fr.a1.au-restaurant.209',        // sentence, flashcard, review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie. See §A.5 for the one respelling decision made for the
 *  nasal checker rather than for the ear.
 *
 *  Recognition-only rows (the Québec « Tu viens-tu ? ») carry the `review`
 *  drill alone: no flashcard, so no tranche releases them for production,
 *  and no voiceflash, so the speak mission never asks for them.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const RECO = ['review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['inversion'], ...extra,
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

/* ── ACT 1 · MÊME QUESTION, AUTRE TENUE ─────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, "Est-ce que vous pouvez me confirmer la date de l'entretien ?", 'Can you confirm the date of the interview?', '/ɛs.kə vu pu.ve mə kɔ̃.fiʁ.me la dat də lɑ̃.tʁə.tjɛ̃/', 'ehs-kuh voo poo-VAY muh kohⁿ-feer-MAY la DAT duh lahⁿ-truh-TYEHⁿ', ['scene', 'est-ce-que'], FCVDR),
  sent(1001, "Pouvez-vous me confirmer la date de l'entretien ?", 'Could you confirm the date of the interview?', '/pu.ve.vu mə kɔ̃.fiʁ.me la dat də lɑ̃.tʁə.tjɛ̃/', 'poo-vay-VOO muh kohⁿ-feer-MAY la DAT duh lahⁿ-truh-TYEHⁿ', ['scene', 'inversion'], FCVDR),
  sent(1002, "Vous pouvez me confirmer la date de l'entretien ?", 'You can confirm the date of the interview?', '/vu pu.ve mə kɔ̃.fiʁ.me la dat də lɑ̃.tʁə.tjɛ̃/', 'voo poo-VAY muh kohⁿ-feer-MAY la DAT duh lahⁿ-truh-TYEHⁿ', ['scene', 'intonation']),
  sent(1003, REFRAME, REFRAME_EN, '/lɛ̃.vɛʁ.sjɔ̃ nə ʃɑ̃ʒ pa lə sɑ̃s ɛl ʃɑ̃ʒ la tə.ny/', 'lehⁿ-vehr-SYOHⁿ nuh shahⁿzh pa luh SAHⁿS ehl shahⁿzh la tuh-NÜ', ['rule', 'reframe'], ['flashcard'],
    rule('Tu viens ? Est-ce que tu viens ? Viens-tu ? Qu’est-ce qui change entre les trois ?', 'La tenue, pas le sens. La plus soignée des trois est l’inversion.')),
  sent(1004, 'Êtes-vous disponible lundi matin ?', 'Are you available on Monday morning?', '/ɛt.vu dis.pɔ.nibl lœ̃.di ma.tɛ̃/', 'eht-voo dees-po-NEEBL luhⁿ-dee ma-TEHⁿ', ['lettre', 'inversion'], FCVDR),
  sent(1005, "Faut-il apporter une pièce d'identité ?", 'Do I need to bring ID?', '/fo.til a.pɔʁ.te yn pjɛs di.dɑ̃.ti.te/', 'foh-TEEL a-por-tay ün pyehs dee-dahⁿ-tee-TAY', ['lettre', 'inversion']),
  sent(1006, 'Tu es disponible lundi ?', 'Are you free on Monday?', '/ty ɛ dis.pɔ.nibl lœ̃.di/', 'tü eh dees-po-neebl luhⁿ-DEE', ['oral', 'intonation']),
  sent(1007, 'Est-ce que tu es disponible lundi ?', 'Are you free on Monday?', '/ɛs.kə ty ɛ dis.pɔ.nibl lœ̃.di/', 'ehs-kuh tü eh dees-po-neebl luhⁿ-DEE', ['oral', 'est-ce-que']),
  sent(1008, 'Pouvez-vous m’appeler après seize heures ?', 'Could you call me after four in the afternoon?', '/pu.ve.vu ma.ple a.pʁɛ sɛ.zœʁ/', 'poo-vay-VOO ma-play a-preh seh-ZUHR', ['lettre', 'inversion'], FCVDR),
  sent(1009, 'Tu peux m’appeler après seize heures ?', 'Can you call me after four?', '/ty pø ma.ple a.pʁɛ sɛ.zœʁ/', 'tü peu ma-play a-preh seh-ZUHR', ['oral', 'intonation']),
  sent(1010, 'Souhaitez-vous recevoir le plan par courriel ?', 'Would you like to receive the map by email?', '/swɛ.te.vu ʁə.sə.vwaʁ lə plɑ̃ paʁ ku.ʁjɛl/', 'sweh-tay-VOO ruh-suh-VWAR luh plahⁿ par koo-RYEHL', ['lettre', 'inversion', 'quebec']),
  sent(1011, 'Connaissez-vous déjà notre bibliothèque ?', 'Do you already know our library?', '/kɔ.nɛ.se.vu de.ʒa nɔtʁ bi.bli.jɔ.tɛk/', 'ko-neh-say-VOO day-zha notr bee-blee-yo-TEHK', ['lettre', 'inversion'], FCVDR),
  phrase(1012, 'la tenue', 'the outfit (here: the register)', '/la tə.ny/', 'la tuh-NÜ', ['rule', 'registre']),
  sent(1013, 'Tu connais la bibliothèque ?', 'Do you know the library?', '/ty kɔ.nɛ la bi.bli.jɔ.tɛk/', 'tü ko-neh la bee-blee-yo-TEHK', ['oral', 'intonation']),
];

/* ── ACT 2 · TROIS FAÇONS DE DEMANDER ───────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1016, 'Tu viens ce soir ?', 'Are you coming tonight?', '/ty vjɛ̃ sə swaʁ/', 'tü vyehⁿ suh SWAR', ['trois', 'intonation']),
  sent(1017, 'Est-ce que tu viens ce soir ?', 'Are you coming tonight?', '/ɛs.kə ty vjɛ̃ sə swaʁ/', 'ehs-kuh tü vyehⁿ suh SWAR', ['trois', 'est-ce-que']),
  sent(1018, 'Viens-tu ce soir ?', 'Are you coming tonight?', '/vjɛ̃.ty sə swaʁ/', 'vyehⁿ-tü suh SWAR', ['trois', 'inversion'], FCVDR),
  sent(1019, 'Vous partez demain ?', 'Are you leaving tomorrow?', '/vu paʁ.te də.mɛ̃/', 'voo par-tay duh-MEHⁿ', ['trois', 'intonation']),
  sent(1020, 'Est-ce que vous partez demain ?', 'Are you leaving tomorrow?', '/ɛs.kə vu paʁ.te də.mɛ̃/', 'ehs-kuh voo par-tay duh-MEHⁿ', ['trois', 'est-ce-que']),
  sent(1021, 'Partez-vous demain ?', 'Are you leaving tomorrow?', '/paʁ.te.vu də.mɛ̃/', 'par-tay-voo duh-MEHⁿ', ['trois', 'inversion'], FCVDR),
  sent(1022, "À l'oral, on monte la voix. À l'écrit soigné, on inverse.", 'Out loud you raise your voice. In careful writing you invert.', '/a lɔ.ʁal ɔ̃ mɔ̃t la vwa a le.kʁi swa.ɲe ɔ̃.nɛ̃.vɛʁs/', 'a lo-RAL ohⁿ mohⁿt la VWA a lay-kree swa-NYAY ohⁿ-nehⁿ-VEHRS', ['rule', 'registre'], ['flashcard'],
    rule('Quelle forme de question choisis-tu pour une lettre officielle ?', "L'inversion. Est-ce que va partout ; l'intonation vit surtout à l'oral.")),
  sent(1023, 'Parlez-vous français ?', 'Do you speak French?', '/paʁ.le.vu fʁɑ̃.sɛ/', 'par-lay-voo frahⁿ-SEH', ['trois', 'inversion'], FCVDR),
  sent(1024, 'Aimez-vous la lecture ?', 'Do you like reading?', '/ɛ.me.vu la lɛk.tyʁ/', 'eh-may-voo la lehk-TÜR', ['trois', 'inversion']),
  sent(1025, 'Habites-tu toujours à Québec ?', 'Do you still live in Québec City?', '/a.bit.ty tu.ʒuʁ a ke.bɛk/', 'a-beet-tü too-zhoor a kay-BEHK', ['trois', 'inversion', 'quebec']),
  sent(1026, 'Tu viens-tu avec nous ?', 'Are you coming with us?', '/ty vjɛ̃.ty a.vɛk nu/', 'tü vyehⁿ-tü a-vehk NOO', ['quebec', 'reconnaissance'], RECO),
  sent(1027, 'Vous travaillez ici depuis longtemps ?', 'Have you worked here long?', '/vu tʁa.va.je i.si də.pɥi lɔ̃.tɑ̃/', 'voo tra-va-yay ee-SEE duh-pwee lohⁿ-TAHⁿ', ['trois', 'intonation']),
  sent(1028, 'Travaillez-vous ici depuis longtemps ?', 'Have you been working here long?', '/tʁa.va.je.vu i.si də.pɥi lɔ̃.tɑ̃/', 'tra-va-yay-voo ee-SEE duh-pwee lohⁿ-TAHⁿ', ['trois', 'inversion'], FCVDR),
  sent(1029, 'Connais-tu ce quartier ?', 'Do you know this neighbourhood?', '/kɔ.nɛ.ty sə kaʁ.tje/', 'ko-neh-tü suh kar-TYAY', ['trois', 'inversion']),
  sent(1030, "Préférez-vous le matin ou l'après-midi ?", 'Do you prefer the morning or the afternoon?', '/pʁe.fe.ʁe.vu lə ma.tɛ̃ u la.pʁɛ.mi.di/', 'pray-fay-ray-VOO luh ma-TEHⁿ oo la-preh-mee-DEE', ['trois', 'inversion']),
  sent(1031, 'Est-ce que tu connais ce quartier ?', 'Do you know this neighbourhood?', '/ɛs.kə ty kɔ.nɛ sə kaʁ.tje/', 'ehs-kuh tü ko-neh suh kar-TYAY', ['trois', 'est-ce-que']),
  sent(1032, 'Prenez-vous le train ?', 'Are you taking the train?', '/pʁə.ne.vu lə tʁɛ̃/', 'pruh-nay-voo luh TREHⁿ', ['trois', 'inversion'], FCVR,
    gap('___ le train ?  (vous prenez, en inversion)', 'Prenez-vous : le verbe, un trait d’union, puis vous.')),
];

/* ── ACT 3 · LE PETIT T ─────────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1035, 'Va-t-il à la réunion ?', 'Is he going to the meeting?', '/va.til a la ʁe.y.njɔ̃/', 'va-TEEL a la ray-ü-NYOHⁿ', ['petit-t'], FCVDR),
  sent(1036, 'Parle-t-elle espagnol ?', 'Does she speak Spanish?', '/paʁl.tɛl ɛs.pa.ɲɔl/', 'parl-TEHL ehs-pa-NYOL', ['petit-t'], FCVDR),
  sent(1037, 'Parle-t-on français dans ce bureau ?', 'Is French spoken in this office?', '/paʁl.tɔ̃ fʁɑ̃.sɛ dɑ̃ sə by.ʁo/', 'parl-TOHⁿ frahⁿ-SEH dahⁿ suh bü-ROH', ['petit-t', 'on']),
  sent(1038, 'A-t-il une voiture ?', 'Does he have a car?', '/a.til yn vwa.tyʁ/', 'a-TEEL ün vwa-TÜR', ['petit-t']),
  sent(1039, 'Viendra-t-elle demain ?', 'Will she come tomorrow?', '/vjɛ̃.dʁa.tɛl də.mɛ̃/', 'vyehⁿ-dra-TEHL duh-MEHⁿ', ['petit-t', 'futur'], FCVDR),
  sent(1040, "Y a-t-il un stationnement près d'ici ?", 'Is there a car park near here?', '/i.ja.til œ̃ sta.sjɔ.nə.mɑ̃ pʁɛ di.si/', 'ee-ya-TEEL uhⁿ sta-syo-nuh-MAHⁿ preh dee-SEE', ['petit-t', 'quebec']),
  sent(1041, 'Est-elle à Montréal cette semaine ?', 'Is she in Montréal this week?', '/ɛ.tɛl a mɔ̃.ʁe.al sɛt sə.mɛn/', 'eh-TEHL a mohⁿ-ray-AL seht suh-MEN', ['sans-t', 'quebec']),
  sent(1042, 'Prend-il le métro ?', 'Does he take the metro?', '/pʁɑ̃.til lə me.tʁo/', 'prahⁿ-TEEL luh may-TROH', ['sans-t']),
  sent(1043, 'Fait-elle du sport ?', 'Does she do any sport?', '/fɛ.tɛl dy spɔʁ/', 'feh-TEHL dü SPOR', ['sans-t']),
  sent(1044, "Le t sert de pont entre deux voyelles. Il ne veut rien dire.", 'The t is a bridge between two vowels. It means nothing.', '/lə te sɛʁ də pɔ̃ ɑ̃tʁ dø vwa.jɛl il nə vø ʁjɛ̃ diʁ/', 'luh TAY sehr duh pohⁿ ahⁿtr deu vwa-YEHL eel nuh veu ryehⁿ DEER', ['rule', 'petit-t'], ['flashcard'],
    rule('Pourquoi « va-t-il », et pas « est-t-il » ?', "va finit par une voyelle ; est finit déjà par un t. Le petit t n'arrive qu'entre deux voyelles.")),
  sent(1045, 'Mange-t-on bien dans ce quartier ?', 'Is the food good in this neighbourhood?', '/mɑ̃ʒ.tɔ̃ bjɛ̃ dɑ̃ sə kaʁ.tje/', 'mahⁿzh-tohⁿ byehⁿ dahⁿ suh kar-TYAY', ['petit-t', 'on']),
  sent(1046, "Arrivera-t-il à l'heure ?", 'Will he arrive on time?', '/a.ʁiv.ʁa.til a lœʁ/', 'a-reev-ra-TEEL a LUHR', ['petit-t', 'futur'], FCVDR),
  sent(1047, 'Répond-elle aux courriels ?', 'Does she answer emails?', '/ʁe.pɔ̃.tɛl o ku.ʁjɛl/', 'ray-pohⁿ-TEHL oh koo-RYEHL', ['sans-t', 'quebec']),
  sent(1048, 'Travaille-t-il le samedi ?', 'Does he work on Saturdays?', '/tʁa.vaj.til lə sam.di/', 'tra-vahy-TEEL luh sam-DEE', ['petit-t'], FCVR,
    gap('Travaille-___ le samedi ?  (il)', 't-il : travaille finit par une voyelle, et il commence par une voyelle.')),
  phrase(1049, 'y a-t-il', 'is there, are there', '/i.ja.til/', 'ee-ya-TEEL', ['petit-t']),
  sent(1050, 'Commence-t-elle à neuf heures ?', 'Does she start at nine?', '/kɔ.mɑ̃s.tɛl a nœ.vœʁ/', 'ko-mahⁿs-TEHL a nuh-VUHR', ['petit-t']),
];

/* ── ACT 4 · LES TEMPS COMPOSÉS ─────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1052, 'As-tu fini ton rapport ?', 'Have you finished your report?', '/a.ty fi.ni tɔ̃ ʁa.pɔʁ/', 'a-tü fee-NEE tohⁿ ra-POR', ['compose'], FCVDR),
  sent(1053, 'Avez-vous déjà mangé ?', 'Have you already eaten?', '/a.ve.vu de.ʒa mɑ̃.ʒe/', 'a-vay-voo day-zha mahⁿ-ZHAY', ['compose'], FCVDR),
  sent(1054, 'A-t-il compris la question ?', 'Did he understand the question?', '/a.til kɔ̃.pʁi la kɛs.tjɔ̃/', 'a-teel kohⁿ-pree la kehs-TYOHⁿ', ['compose', 'petit-t']),
  sent(1055, 'Êtes-vous déjà allé en Gaspésie ?', 'Have you ever been to the Gaspé?', '/ɛt.vu de.ʒa a.le ɑ̃ ɡas.pe.zi/', 'eht-voo day-zha a-LAY ahⁿ gas-pay-ZEE', ['compose', 'etre', 'quebec']),
  sent(1056, "Sont-ils arrivés à l'heure ?", 'Did they arrive on time?', '/sɔ̃.ti.la.ʁi.ve a lœʁ/', 'sohⁿ-tee-la-ree-VAY a LUHR', ['compose', 'etre']),
  sent(1057, "Aux temps composés, le pronom se place après l'auxiliaire.", 'In compound tenses the pronoun goes after the auxiliary.', '/o tɑ̃ kɔ̃.po.ze lə pʁɔ.nɔ̃ sə plas a.pʁɛ lok.si.lje/', 'oh tahⁿ kohⁿ-poh-ZAY luh pro-NOHⁿ suh plass a-preh lohk-see-LYAY', ['rule', 'compose'], ['flashcard'],
    rule('« As-tu fini » ou « As fini-tu » : où va le pronom ?', 'Juste après l’auxiliaire : as-tu fini, avez-vous mangé. Le participe reste derrière.')),
  sent(1058, 'Avez-vous reçu ma lettre ?', 'Have you received my letter?', '/a.ve.vu ʁə.sy ma lɛtʁ/', 'a-vay-voo ruh-sü ma LEHTR', ['compose'], FCVDR),
  sent(1059, 'A-t-elle trouvé un appartement ?', 'Has she found a flat?', '/a.tɛl tʁu.ve œ̃.na.paʁ.tə.mɑ̃/', 'a-tehl troo-vay uhⁿ-na-par-tuh-MAHⁿ', ['compose', 'petit-t']),
  sent(1060, 'As-tu bien dormi ?', 'Did you sleep well?', '/a.ty bjɛ̃ dɔʁ.mi/', 'a-tü byehⁿ dor-MEE', ['compose']),
  sent(1061, 'Allez-vous signer le contrat ?', 'Are you going to sign the contract?', '/a.le.vu si.ɲe lə kɔ̃.tʁa/', 'a-lay-voo see-nyay luh kohⁿ-TRA', ['compose', 'futur-proche']),
  sent(1062, "L'avez-vous lu ?", 'Have you read it?', '/la.ve.vu ly/', 'la-vay-voo LÜ', ['compose', 'pronom']),
  sent(1063, 'Vous a-t-on répondu ?', 'Has anyone answered you?', '/vu.za.tɔ̃ ʁe.pɔ̃.dy/', 'voo-za-tohⁿ ray-pohⁿ-DÜ', ['compose', 'pronom', 'on'], FCVDR),
  sent(1064, 'Avons-nous oublié quelque chose ?', 'Have we forgotten something?', '/a.vɔ̃.nu u.bli.je kɛl.kə ʃoz/', 'a-vohⁿ-noo oo-blee-YAY kehl-kuh SHOHZ', ['compose']),
  sent(1065, 'Avez-vous déjà travaillé en bibliothèque ?', 'Have you worked in a library before?', '/a.ve.vu de.ʒa tʁa.va.je ɑ̃ bi.bli.jɔ.tɛk/', 'a-vay-voo day-zha tra-va-YAY ahⁿ bee-blee-yo-TEHK', ['compose'], FCVR,
    gap('___-vous déjà travaillé en bibliothèque ?  (avoir)', 'Avez : l’auxiliaire passe devant, et travaillé reste après vous.')),
  sent(1066, 'Es-tu déjà venu à Montréal ?', 'Have you been to Montréal before?', '/ɛ.ty de.ʒa və.ny a mɔ̃.ʁe.al/', 'eh-tü day-zha vuh-NÜ a mohⁿ-ray-AL', ['compose', 'etre', 'quebec']),
];

/* ── ACT 5 · LE SUJET EST UN NOM ────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1068, 'Votre fille viendra-t-elle ?', 'Will your daughter come?', '/vɔtʁ fij vjɛ̃.dʁa.tɛl/', 'votr FEEY vyehⁿ-dra-TEHL', ['sujet-nom'], FCVDR),
  sent(1069, 'Le train est-il parti ?', 'Has the train left?', '/lə tʁɛ̃ ɛ.til paʁ.ti/', 'luh TREHⁿ eh-teel par-TEE', ['sujet-nom'], FCVDR),
  sent(1070, 'Votre frère parle-t-il anglais ?', 'Does your brother speak English?', '/vɔtʁ fʁɛʁ paʁl.til ɑ̃.ɡlɛ/', 'votr FREHR parl-teel ahⁿ-GLEH', ['sujet-nom', 'petit-t']),
  sent(1071, 'Les enfants ont-ils mangé ?', 'Have the children eaten?', '/le.zɑ̃.fɑ̃ ɔ̃.til mɑ̃.ʒe/', 'lay-zahⁿ-FAHⁿ ohⁿ-teel mahⁿ-ZHAY', ['sujet-nom', 'compose']),
  sent(1072, 'La réunion commence-t-elle à neuf heures ?', 'Does the meeting start at nine?', '/la ʁe.y.njɔ̃ kɔ.mɑ̃s.tɛl a nœ.vœʁ/', 'la ray-ü-NYOHⁿ ko-mahⁿs-tehl a nuh-VUHR', ['sujet-nom', 'petit-t']),
  sent(1073, 'Avec un nom sujet, le nom reste devant et un pronom le répète.', 'With a noun subject the noun stays in front and a pronoun repeats it.', '/a.vɛk œ̃ nɔ̃ sy.ʒɛ lə nɔ̃ ʁɛst də.vɑ̃ e œ̃ pʁɔ.nɔ̃ lə ʁe.pɛt/', 'a-vehk uhⁿ nohⁿ sü-ZHEH luh nohⁿ rehst duh-VAHⁿ ay uhⁿ pro-nohⁿ luh ray-PEHT', ['rule', 'sujet-nom'], ['flashcard'],
    rule('Comment inverses-tu « Votre fille viendra » ?', 'Votre fille viendra-t-elle ? Le nom ne bouge pas, et elle se place après le verbe.')),
  sent(1074, 'Le musée est-il ouvert le lundi ?', 'Is the museum open on Mondays?', '/lə my.ze ɛ.ti.lu.vɛʁ lə lœ̃.di/', 'luh mü-ZAY eh-tee-loo-VEHR luh luhⁿ-DEE', ['sujet-nom']),
  sent(1075, 'Les billets sont-ils remboursables ?', 'Are the tickets refundable?', '/le bi.jɛ sɔ̃.til ʁɑ̃.buʁ.sabl/', 'lay bee-YEH sohⁿ-teel rahⁿ-boor-SABL', ['sujet-nom']),
  sent(1076, 'Votre dossier est-il complet ?', 'Is your application complete?', '/vɔtʁ dɔ.sje ɛ.til kɔ̃.plɛ/', 'votr do-SYAY eh-teel kohⁿ-PLEH', ['sujet-nom'], FCVDR),
  sent(1077, 'Madame Diallo a-t-elle reçu les documents ?', 'Has Ms Diallo received the documents?', '/ma.dam dja.lo a.tɛl ʁə.sy le dɔ.ky.mɑ̃/', 'ma-dam dya-LOH a-tehl ruh-sü lay do-kü-MAHⁿ', ['sujet-nom', 'compose']),
  sent(1078, 'Ce bus va-t-il au centre-ville ?', 'Does this bus go downtown?', '/sə bys va.ti.lo sɑ̃.tʁə.vil/', 'suh BÜS va-tee-loh sahⁿ-truh-VEEL', ['sujet-nom', 'petit-t']),
  sent(1079, 'Tes parents habitent-ils toujours à Dakar ?', 'Do your parents still live in Dakar?', '/te pa.ʁɑ̃ a.bit.til tu.ʒuʁ a da.kaʁ/', 'tay pa-RAHⁿ a-beet-teel too-zhoor a da-KAR', ['sujet-nom']),
  sent(1080, 'Le directeur sera-t-il présent ?', 'Will the director be there?', '/lə di.ʁɛk.tœʁ sə.ʁa.til pʁe.zɑ̃/', 'luh dee-rehk-TUHR suh-ra-teel pray-ZAHⁿ', ['sujet-nom', 'futur']),
  sent(1081, 'Ce formulaire doit-il être signé ?', 'Does this form have to be signed?', '/sə fɔʁ.my.lɛʁ dwa.ti.lɛtʁ si.ɲe/', 'suh for-mü-LEHR dwa-tee-lehtr see-NYAY', ['sujet-nom', 'passif']),
  sent(1082, 'Ta sœur viendra-t-elle au mariage ?', 'Will your sister come to the wedding?', '/ta sœʁ vjɛ̃.dʁa.tɛl o ma.ʁjaʒ/', 'ta SUHR vyehⁿ-dra-tehl oh ma-RYAZH', ['sujet-nom'], FCVR,
    gap('Ta sœur viendra-___ au mariage ?', 't-elle : le nom reste devant, et elle le répète après le verbe.')),
  sent(1083, "Votre fils est-il inscrit à l'école ?", 'Is your son enrolled at the school?', '/vɔtʁ fis ɛ.ti.lɛ̃s.kʁi a le.kɔl/', 'votr FEESS eh-tee-lehⁿs-KREE a lay-KOL', ['sujet-nom'], FCVDR),
];

/* ── ACT 6 · AVEC UN MOT INTERROGATIF ───────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1087, 'Où allez-vous ?', 'Where are you going?', '/u a.le.vu/', 'oo a-lay-VOO', ['mot-q'], FCVDR),
  sent(1088, 'Quand partez-vous ?', 'When are you leaving?', '/kɑ̃ paʁ.te.vu/', 'kahⁿ par-tay-VOO', ['mot-q']),
  sent(1089, 'Pourquoi Marie part-elle ?', 'Why is Marie leaving?', '/puʁ.kwa ma.ʁi paʁ.tɛl/', 'poor-kwa ma-REE par-TEHL', ['mot-q', 'sujet-nom', 'pourquoi'], FCVDR),
  sent(1090, 'Comment votre fils va-t-il ?', 'How is your son?', '/kɔ.mɑ̃ vɔtʁ fis va.til/', 'ko-mahⁿ votr FEESS va-TEEL', ['mot-q', 'sujet-nom']),
  sent(1091, 'Que faites-vous dans la vie ?', 'What do you do for a living?', '/kə fɛt.vu dɑ̃ la vi/', 'kuh feht-voo dahⁿ la VEE', ['mot-q', 'que'], FCVDR),
  sent(1092, 'Où habite votre sœur ?', 'Where does your sister live?', '/u a.bit vɔtʁ sœʁ/', 'oo a-beet votr SUHR', ['mot-q', 'sujet-nom', 'simple']),
  sent(1093, 'Où votre sœur habite-t-elle ?', 'Where does your sister live?', '/u vɔtʁ sœʁ a.bit.tɛl/', 'oo votr suhr a-beet-TEHL', ['mot-q', 'sujet-nom']),
  sent(1094, 'Après pourquoi, le nom reste devant et le pronom le répète.', 'After pourquoi the noun stays in front and the pronoun repeats it.', '/a.pʁɛ puʁ.kwa lə nɔ̃ ʁɛst də.vɑ̃ e lə pʁɔ.nɔ̃ lə ʁe.pɛt/', 'a-preh poor-KWA luh nohⁿ rehst duh-VAHⁿ ay luh pro-nohⁿ luh ray-PEHT', ['rule', 'pourquoi'], ['flashcard'],
    rule('« Pourquoi part Marie » ou « Pourquoi Marie part-elle » ?', 'Pourquoi Marie part-elle. Après pourquoi, le nom ne passe jamais derrière le verbe.')),
  sent(1095, 'Combien de temps restez-vous ?', 'How long are you staying?', '/kɔ̃.bjɛ̃ də tɑ̃ ʁɛs.te.vu/', 'kohⁿ-byehⁿ duh TAHⁿ rehs-tay-VOO', ['mot-q']),
  sent(1096, 'À quelle heure commence la visite ?', 'What time does the tour start?', '/a kɛ.lœʁ kɔ.mɑ̃s la vi.zit/', 'a keh-LUHR ko-mahⁿs la vee-ZEET', ['mot-q', 'sujet-nom', 'simple']),
  sent(1097, 'Qui avez-vous rencontré ?', 'Who did you meet?', '/ki a.ve.vu ʁɑ̃.kɔ̃.tʁe/', 'kee a-vay-voo rahⁿ-kohⁿ-TRAY', ['mot-q', 'compose']),
  sent(1098, 'Pourquoi le magasin est-il fermé ?', 'Why is the shop closed?', '/puʁ.kwa lə ma.ɡa.zɛ̃ ɛ.til fɛʁ.me/', 'poor-kwa luh ma-ga-ZEHⁿ eh-teel fehr-MAY', ['mot-q', 'sujet-nom', 'pourquoi'], FCVDR),
  sent(1099, "Comment s'appelle votre directrice ?", 'What is your director called?', '/kɔ.mɑ̃ sa.pɛl vɔtʁ di.ʁɛk.tʁis/', 'ko-mahⁿ sa-pehl votr dee-rehk-TREESS', ['mot-q', 'sujet-nom', 'simple']),
  sent(1100, 'Que pensez-vous de ce projet ?', 'What do you think of this project?', '/kə pɑ̃.se.vu də sə pʁɔ.ʒɛ/', 'kuh pahⁿ-say-voo duh suh pro-ZHEH', ['mot-q', 'que']),
  sent(1101, 'Quand votre fils rentre-t-il ?', 'When is your son coming home?', '/kɑ̃ vɔtʁ fis ʁɑ̃tʁ.til/', 'kahⁿ votr fees rahⁿtr-TEEL', ['mot-q', 'sujet-nom']),
  sent(1102, 'Pourquoi ton frère déménage-t-il ?', 'Why is your brother moving?', '/puʁ.kwa tɔ̃ fʁɛʁ de.me.naʒ.til/', 'poor-kwa tohⁿ frehr day-may-nazh-TEEL', ['mot-q', 'pourquoi'], FCVR,
    gap('Pourquoi ton frère ___ ?  (déménager, en inversion)', 'déménage-t-il : ton frère reste devant, et il revient après le verbe.')),
  sent(1103, 'Où avez-vous appris le français ?', 'Where did you learn French?', '/u a.ve.vu a.pʁi lə fʁɑ̃.sɛ/', 'oo a-vay-voo a-pree luh frahⁿ-SEH', ['mot-q', 'compose'], FCVDR),
  sent(1104, 'Que dit le médecin ?', 'What does the doctor say?', '/kə di lə med.sɛ̃/', 'kuh dee luh mayd-SEHⁿ', ['mot-q', 'que', 'simple']),
];

/* ── ACT 7 · LA NÉGATION ET LE JE ───────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1106, 'Ne viens-tu pas ce soir ?', 'Aren’t you coming tonight?', '/nə vjɛ̃.ty pa sə swaʁ/', 'nuh vyehⁿ-tü pa suh SWAR', ['negation'], FCVDR),
  sent(1107, "N'avez-vous pas reçu mon message ?", 'Didn’t you get my message?', '/na.ve.vu pa ʁə.sy mɔ̃ me.saʒ/', 'na-vay-voo pa ruh-sü mohⁿ may-SAZH', ['negation', 'compose'], FCVDR),
  sent(1108, "N'est-il pas encore arrivé ?", 'Hasn’t he arrived yet?', '/nɛ.til pa.zɑ̃.kɔʁ a.ʁi.ve/', 'neh-teel pa-zahⁿ-kor a-ree-VAY', ['negation', 'compose']),
  sent(1109, 'Ne va devant le verbe, et pas après le pronom.', 'ne goes before the verb, and pas after the pronoun.', '/nə va də.vɑ̃ lə vɛʁb e pa a.pʁɛ lə pʁɔ.nɔ̃/', 'NUH va duh-vahⁿ luh VEHRB ay PA a-preh luh pro-NOHⁿ', ['rule', 'negation'], ['flashcard'],
    rule('Où mets-tu ne et pas autour de « viens-tu » ?', 'Ne viens-tu pas : ne devant, pas après tout le bloc verbe et pronom.')),
  sent(1110, 'Puis-je vous aider ?', 'May I help you?', '/pɥi.ʒə vu.ze.de/', 'pwee-zhuh voo-zay-DAY', ['je'], FCVDR),
  sent(1111, 'Puis-je poser une question ?', 'May I ask a question?', '/pɥi.ʒə po.ze yn kɛs.tjɔ̃/', 'pwee-zhuh poh-zay ün kehs-TYOHⁿ', ['je']),
  sent(1112, 'Avec je, on dit puis-je, jamais peux-je.', 'With je you say puis-je, never peux-je.', '/a.vɛk ʒə ɔ̃ di pɥiʒ ʒa.mɛ pøʒ/', 'a-vehk ZHUH ohⁿ dee PWEEZH zha-meh PEUZH', ['rule', 'je'], ['flashcard'],
    rule('« Can I? » en langue soignée : peux-je ou puis-je ?', 'Puis-je. La forme peux-je n’existe pas.')),
  sent(1113, 'Est-ce que je peux payer par carte ?', 'Can I pay by card?', '/ɛs.kə ʒə pø pe.je paʁ kaʁt/', 'ehs-kuh zhuh peu pay-yay par KART', ['je', 'est-ce-que'], FCVDR),
  sent(1114, 'Dois-je remplir ce formulaire ?', 'Do I have to fill in this form?', '/dwa.ʒə ʁɑ̃.pliʁ sə fɔʁ.my.lɛʁ/', 'dwa-zhuh rahⁿ-pleer suh for-mü-LEHR', ['je']),
  sent(1115, 'Est-ce que je dois apporter mon passeport ?', 'Do I need to bring my passport?', '/ɛs.kə ʒə dwa a.pɔʁ.te mɔ̃ pas.pɔʁ/', 'ehs-kuh zhuh dwa a-por-tay mohⁿ pass-POR', ['je', 'est-ce-que']),
  sent(1116, 'Est-ce que je parle assez fort ?', 'Am I speaking loudly enough?', '/ɛs.kə ʒə paʁl a.se fɔʁ/', 'ehs-kuh zhuh parl a-say FOR', ['je', 'est-ce-que']),
  sent(1117, "Le bureau n'est-il pas ouvert le samedi ?", 'Isn’t the office open on Saturdays?', '/lə by.ʁo nɛ.til pa.zu.vɛʁ lə sam.di/', 'luh bü-ROH neh-teel pa-zoo-VEHR luh sam-DEE', ['negation', 'sujet-nom']),
  sent(1118, 'Ne pourriez-vous pas venir plus tôt ?', 'Couldn’t you come earlier?', '/nə pu.ʁje.vu pa və.niʁ ply to/', 'nuh poo-ryay-voo pa vuh-neer plü TOH', ['negation', 'conditionnel']),
  sent(1119, "N'as-tu pas faim ?", 'Aren’t you hungry?', '/na.ty pa fɛ̃/', 'na-tü pa FEHⁿ', ['negation'], FCVDR),
  sent(1120, 'Ne parlez-vous pas anglais ?', 'Don’t you speak English?', '/nə paʁ.le.vu pa.zɑ̃.ɡlɛ/', 'nuh par-lay-voo pa-zahⁿ-GLEH', ['negation'], FCVR,
    gap('___ parlez-vous ___ anglais ?', 'Ne ... pas : ne devant le verbe, pas après vous.')),
  phrase(1121, 'puis-je', 'may I', '/pɥiʒ/', 'PWEEZH', ['je']),
  sent(1122, 'Si, je viens.', 'Yes, I am coming (after a negative question).', '/si ʒə vjɛ̃/', 'see zhuh VYEHⁿ', ['negation', 'si']),
];

/* ── ACT 8 · LA LANGUE DES SERVICES ─────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1124, 'Pourriez-vous me rappeler demain matin ?', 'Could you call me back tomorrow morning?', '/pu.ʁje.vu mə ʁa.ple də.mɛ̃ ma.tɛ̃/', 'poo-ryay-voo muh ra-play duh-mehⁿ ma-TEHⁿ', ['service', 'conditionnel'], FCVDR),
  sent(1125, "Auriez-vous quelques minutes à m'accorder ?", 'Could you spare me a few minutes?', '/o.ʁje.vu kɛl.kə mi.nyt a ma.kɔʁ.de/', 'oh-ryay-voo kehl-kuh mee-NÜT a ma-kor-DAY', ['service', 'conditionnel']),
  sent(1126, 'Serait-il possible de changer la date ?', 'Would it be possible to change the date?', '/sə.ʁɛ.til pɔ.sibl də ʃɑ̃.ʒe la dat/', 'suh-reh-teel po-SEEBL duh shahⁿ-zhay la DAT', ['service', 'conditionnel'], FCVDR),
  sent(1127, 'Que puis-je faire pour vous ?', 'What can I do for you?', '/kə pɥiʒ fɛʁ puʁ vu/', 'kuh pweezh fehr poor VOO', ['service', 'je'], FCVDR),
  sent(1128, 'Désirez-vous un reçu ?', 'Would you like a receipt?', '/de.zi.ʁe.vu œ̃ ʁə.sy/', 'day-zee-ray-voo uhⁿ ruh-SÜ', ['service']),
  sent(1129, 'Seriez-vous disponible jeudi ?', 'Would you be available on Thursday?', '/sə.ʁje.vu dis.pɔ.nibl ʒø.di/', 'suh-ryay-voo dees-po-neebl zheu-DEE', ['service', 'conditionnel']),
  sent(1130, 'Dans un courriel officiel, la question polie commence par le verbe.', 'In a formal email the polite question starts with the verb.', '/dɑ̃.zœ̃ ku.ʁjɛl ɔ.fi.sjɛl la kɛs.tjɔ̃ pɔ.li kɔ.mɑ̃s paʁ lə vɛʁb/', 'dahⁿ-zuhⁿ koo-ryehl o-fee-SYEHL la kehs-tyohⁿ po-LEE ko-mahⁿs par luh VEHRB', ['rule', 'service'], ['flashcard'],
    rule('Quelle question ouvre le mieux un courriel à un service ?', 'Pourriez-vous, Auriez-vous, Serait-il possible de : le verbe d’abord.')),
  sent(1131, 'Pourrais-je parler à la responsable ?', 'Could I speak to the person in charge?', '/pu.ʁɛʒ paʁ.le a la ʁɛs.pɔ̃.sabl/', 'poo-rehzh par-lay a la rehs-pohⁿ-SABL', ['service', 'je']),
  sent(1132, "Avez-vous besoin d'autre chose ?", 'Do you need anything else?', '/a.ve.vu bə.zwɛ̃ dotʁ ʃoz/', 'a-vay-voo buh-zwehⁿ dohtr SHOHZ', ['service']),
  sent(1133, 'Voulez-vous laisser un message ?', 'Would you like to leave a message?', '/vu.le.vu le.se œ̃ me.saʒ/', 'voo-lay-voo lay-say uhⁿ may-SAZH', ['service'], FCVDR),
  sent(1134, 'Comment puis-je vous joindre ?', 'How can I reach you?', '/kɔ.mɑ̃ pɥiʒ vu ʒwɛ̃dʁ/', 'ko-mahⁿ pweezh voo ZHWEHⁿDR', ['service', 'je']),
  sent(1135, 'Accepteriez-vous un paiement en deux fois ?', 'Would you accept payment in two instalments?', '/ak.sɛp.tə.ʁje.vu œ̃ pɛ.mɑ̃ ɑ̃ dø fwa/', 'ak-sehp-tuh-ryay-voo uhⁿ peh-mahⁿ ahⁿ deu FWA', ['service', 'conditionnel']),
  sent(1136, "Pouvez-vous m'envoyer une confirmation écrite ?", 'Can you send me a written confirmation?', '/pu.ve.vu mɑ̃.vwa.je yn kɔ̃.fiʁ.ma.sjɔ̃ e.kʁit/', 'poo-vay-voo mahⁿ-vwa-yay ün kohⁿ-feer-ma-syohⁿ ay-KREET', ['service']),
  sent(1137, 'Vous pourriez me rappeler demain ?', 'Could you call me back tomorrow?', '/vu pu.ʁje mə ʁa.ple də.mɛ̃/', 'voo poo-ryay muh ra-play duh-MEHⁿ', ['service', 'oral']),
  phrase(1138, 'serait-il possible de', 'would it be possible to', '/sə.ʁɛ.til pɔ.sibl də/', 'suh-reh-teel po-SEEBL duh', ['service']),
  sent(1139, 'Auriez-vous un formulaire en français ?', 'Would you have a form in French?', '/o.ʁje.vu œ̃ fɔʁ.my.lɛʁ ɑ̃ fʁɑ̃.sɛ/', 'oh-ryay-voo uhⁿ for-mü-lehr ahⁿ frahⁿ-SEH', ['service', 'conditionnel'], FCVR,
    gap('___-vous un formulaire en français ?  (avoir, au conditionnel)', 'Auriez : le conditionnel de avoir, puis vous.')),
  sent(1140, "À qui dois-je m'adresser ?", 'Who should I speak to?', '/a ki dwaʒ ma.dʁɛ.se/', 'a kee dwazh ma-dreh-SAY', ['service', 'je'], FCVDR),
];

/* ── ACT 9 · L'INCISE ───────────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1142, '« Je pars demain », dit-elle.', '“I am leaving tomorrow,” she says.', '/ʒə paʁ də.mɛ̃ di.tɛl/', 'zhuh par duh-MEHⁿ dee-TEHL', ['incise'], FCVDR),
  sent(1143, '« Tout est prêt », répond-il.', '“Everything is ready,” he answers.', '/tu.tɛ pʁɛ ʁe.pɔ̃.til/', 'too-teh PREH ray-pohⁿ-TEEL', ['incise']),
  sent(1144, '« Il reste du café », ajoute-t-elle.', '“There is some coffee left,” she adds.', '/il ʁɛst dy ka.fe a.ʒut.tɛl/', 'eel rehst dü ka-FAY a-zhoot-TEHL', ['incise', 'petit-t'], FCVDR),
  sent(1145, "« Vous venez d'où ? » demande-t-il.", '“Where are you from?” he asks.', '/vu və.ne du də.mɑ̃d.til/', 'voo vuh-nay DOO duh-mahⁿd-TEEL', ['incise', 'petit-t']),
  sent(1146, 'Après une citation, le verbe de parole passe devant le sujet.', 'After a quotation the speech verb comes before the subject.', '/a.pʁɛ.zyn si.ta.sjɔ̃ lə vɛʁb də pa.ʁɔl pas də.vɑ̃ lə sy.ʒɛ/', 'a-preh-zün see-ta-SYOHⁿ luh vehrb duh pa-ROL pass duh-vahⁿ luh sü-ZHEH', ['rule', 'incise'], ['flashcard'],
    rule('« Je pars », elle dit : qu’est-ce qui ne va pas à l’écrit ?', 'L’ordre. Après la citation, on inverse : « Je pars », dit-elle.')),
  sent(1147, "« C'est fini », dit le médecin.", '“It is over,” says the doctor.', '/sɛ fi.ni di lə med.sɛ̃/', 'seh fee-NEE dee luh mayd-SEHⁿ', ['incise', 'sujet-nom'], FCVDR),
  sent(1148, '« Demain, dit-il, je commence à huit heures. »', '“Tomorrow,” he says, “I start at eight.”', '/də.mɛ̃ di.til ʒə kɔ.mɑ̃s a ɥi.tœʁ/', 'duh-MEHⁿ dee-TEEL zhuh ko-mahⁿs a wee-TUHR', ['incise', 'milieu']),
  sent(1149, '« Bien sûr », a-t-elle répondu.', '“Of course,” she answered.', '/bjɛ̃ syʁ a.tɛl ʁe.pɔ̃.dy/', 'byehⁿ SÜR a-tehl ray-pohⁿ-DÜ', ['incise', 'compose']),
  sent(1150, '« Merci », murmure-t-il.', '“Thank you,” he murmurs.', '/mɛʁ.si myʁ.myʁ.til/', 'mehr-SEE mür-mür-TEEL', ['incise', 'petit-t']),
  sent(1151, '« Attendez », crie le chauffeur.', '“Wait,” the driver shouts.', '/a.tɑ̃.de kʁi lə ʃo.fœʁ/', 'a-tahⁿ-DAY kree luh shoh-FUHR', ['incise', 'sujet-nom']),
  sent(1152, '« Je ne sais pas », avoue-t-elle.', '“I don’t know,” she admits.', '/ʒə nə sɛ pa a.vu.tɛl/', 'zhuh nuh seh PA a-voo-TEHL', ['incise', 'petit-t']),
  sent(1153, '« On se revoit lundi », propose Samir.', '“See you again on Monday,” Samir suggests.', '/ɔ̃ sə ʁə.vwa lœ̃.di pʁɔ.poz sa.miʁ/', 'ohⁿ suh ruh-vwa luhⁿ-DEE pro-pohz sa-MEER', ['incise', 'sujet-nom']),
  sent(1154, '« Tu as raison », reconnaît-il.', '“You are right,” he admits.', '/ty a ʁɛ.zɔ̃ ʁə.kɔ.nɛ.til/', 'tü a reh-ZOHⁿ ruh-ko-neh-TEEL', ['incise']),
  sent(1155, '« Nous arrivons », dit-elle.', '“We are on our way,” she says.', '/nu.za.ʁi.vɔ̃ di.tɛl/', 'noo-za-ree-VOHⁿ dee-TEHL', ['incise'], FCVR,
    gap('« Nous arrivons », ___  (dire, elle)', 'dit-elle : après la citation, le verbe passe devant le sujet.')),
  phrase(1156, 'dit-il', 'he says', '/di.til/', 'dee-TEEL', ['incise']),
  phrase(1157, 'ajoute-t-elle', 'she adds', '/a.ʒut.tɛl/', 'a-zhoot-TEHL', ['incise', 'petit-t']),
  sent(1158, '« Où est la gare ? » demande une touriste.', '“Where is the station?” a tourist asks.', '/u ɛ la ɡaʁ də.mɑ̃d yn tu.ʁist/', 'oo eh la GAR duh-mahⁿd ün too-REEST', ['incise', 'sujet-nom']),
];

/* ── ACT 10 · PEUT-ÊTRE, SANS DOUTE, À PEINE, AUSSI ─────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1160, 'Peut-être viendra-t-il demain.', 'Perhaps he will come tomorrow.', '/pø.tɛtʁ vjɛ̃.dʁa.til də.mɛ̃/', 'peu-tehtr vyehⁿ-dra-teel duh-MEHⁿ', ['adverbe', 'ecrit'], FCVDR),
  sent(1161, "Peut-être qu'il viendra demain.", 'Maybe he will come tomorrow.', '/pø.tɛtʁ kil vjɛ̃.dʁa də.mɛ̃/', 'peu-tehtr keel vyehⁿ-dra duh-MEHⁿ', ['adverbe', 'oral'], FCVDR),
  sent(1162, 'Il viendra peut-être demain.', 'He will maybe come tomorrow.', '/il vjɛ̃.dʁa pø.tɛtʁ də.mɛ̃/', 'eel vyehⁿ-dra peu-tehtr duh-MEHⁿ', ['adverbe', 'neutre']),
  sent(1163, 'En tête de phrase écrite, peut-être et sans doute font inverser.', 'At the head of a written sentence, peut-être and sans doute trigger inversion.', '/ɑ̃ tɛt də fʁa.ze.kʁit pø.tɛtʁ e sɑ̃ dut fɔ̃ ɛ̃.vɛʁ.se/', 'ahⁿ teht duh fra-zay-KREET peu-tehtr ay sahⁿ doot fohⁿ ehⁿ-vehr-SAY', ['rule', 'adverbe'], ['flashcard'],
    rule('« Peut-être il viendra » : que corriges-tu dans un texte écrit ?', "Peut-être viendra-t-il. À l'oral : peut-être qu'il viendra.")),
  sent(1164, 'Sans doute a-t-elle raison.', 'She is probably right.', '/sɑ̃ dut a.tɛl ʁɛ.zɔ̃/', 'sahⁿ DOOT a-tehl reh-ZOHⁿ', ['adverbe', 'ecrit'], FCVDR),
  sent(1165, 'Elle a sans doute raison.', 'She is probably right.', '/ɛ.la sɑ̃ dut ʁɛ.zɔ̃/', 'eh-la sahⁿ doot reh-ZOHⁿ', ['adverbe', 'neutre']),
  sent(1166, 'Sans doute que tu as raison.', 'You are probably right.', '/sɑ̃ dut kə ty a ʁɛ.zɔ̃/', 'sahⁿ doot kuh tü a reh-ZOHⁿ', ['adverbe', 'oral']),
  sent(1167, 'À peine est-il arrivé que le téléphone a sonné.', 'He had barely arrived when the phone rang.', '/a pɛn ɛ.ti.la.ʁi.ve kə lə te.le.fɔn a sɔ.ne/', 'a PEN eh-tee-la-ree-VAY kuh luh tay-lay-fon a so-NAY', ['adverbe', 'ecrit', 'a-peine'], FCVDR),
  sent(1168, "À peine a-t-elle fini qu'elle repart.", 'She has barely finished and she is off again.', '/a pɛn a.tɛl fi.ni kɛl ʁə.paʁ/', 'a PEN a-tehl fee-NEE kehl ruh-PAR', ['adverbe', 'ecrit', 'a-peine']),
  sent(1169, 'Le train était en retard. Aussi sommes-nous arrivés à dix heures.', 'The train was late. So we arrived at ten.', '/lə tʁɛ̃ e.tɛ.tɑ̃ ʁə.taʁ o.si sɔm.nu.za.ʁi.ve a di.zœʁ/', 'luh TREHⁿ ay-teh-tahⁿ ruh-TAR oh-see som-noo-za-ree-VAY a dee-ZUHR', ['adverbe', 'ecrit', 'aussi']),
  sent(1170, 'Aussi a-t-il refusé le poste.', 'So he turned the job down.', '/o.si a.til ʁə.fy.ze lə pɔst/', 'oh-see a-teel ruh-fü-zay luh POST', ['adverbe', 'ecrit', 'aussi'], FCVDR),
  sent(1171, 'Aussi en tête de phrase veut dire donc, et il fait inverser.', 'Aussi at the head of a sentence means so, and it triggers inversion.', '/o.si ɑ̃ tɛt də fʁaz vø diʁ dɔ̃k e il fɛ ɛ̃.vɛʁ.se/', 'oh-SEE ahⁿ teht duh FRAZ veu deer DOHⁿK ay eel feh ehⁿ-vehr-SAY', ['rule', 'aussi'], ['flashcard'],
    rule('« Aussi a-t-il refusé » : que veut dire aussi ici ?', 'Donc. En tête de phrase, avec l’inversion, aussi annonce une conséquence.')),
  sent(1172, 'Il a donc refusé le poste.', 'So he turned the job down.', '/i.la dɔ̃k ʁə.fy.ze lə pɔst/', 'ee-la dohⁿk ruh-fü-zay luh POST', ['adverbe', 'neutre', 'aussi']),
  sent(1173, 'Peut-être avez-vous déjà reçu notre courriel.', 'Perhaps you have already received our email.', '/pø.tɛ.tʁa.ve.vu de.ʒa ʁə.sy nɔtʁ ku.ʁjɛl/', 'peu-teh-tra-vay-voo day-zha ruh-SÜ notr koo-RYEHL', ['adverbe', 'ecrit', 'quebec']),
  sent(1174, 'Sans doute le colis arrivera-t-il lundi.', 'The parcel will probably arrive on Monday.', '/sɑ̃ dut lə kɔ.li a.ʁiv.ʁa.til lœ̃.di/', 'sahⁿ doot luh ko-LEE a-reev-ra-teel luhⁿ-DEE', ['adverbe', 'ecrit', 'sujet-nom']),
  sent(1175, 'Peut-être pourrons-nous nous voir jeudi.', 'Perhaps we will be able to meet on Thursday.', '/pø.tɛtʁ pu.ʁɔ̃.nu nu vwaʁ ʒø.di/', 'peu-tehtr poo-rohⁿ-noo noo vwar zheu-DEE', ['adverbe', 'ecrit'], FCVR,
    gap('Peut-être ___ nous voir jeudi.  (pouvoir, nous, au futur)', 'pourrons-nous : après peut-être en tête de phrase, on inverse.')),
  phrase(1176, 'peut-être que', 'maybe (spoken)', '/pø.tɛtʁ kə/', 'peu-tehtr KUH', ['adverbe', 'oral']),
];

/* ── ACT 11 · ÉCRIRE À UNE ADMINISTRATION ───────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  phrase(1178, 'Madame, Monsieur,', 'Dear Sir or Madam,', '/ma.dam mə.sjø/', 'ma-DAM muh-SYEU', ['lettre']),
  sent(1179, 'Je vous écris au sujet de ma demande de permis.', 'I am writing about my permit application.', '/ʒə vu.ze.kʁi o sy.ʒɛ də ma də.mɑ̃d də pɛʁ.mi/', 'zhuh voo-zay-KREE oh sü-zheh duh ma duh-mahⁿd duh pehr-MEE', ['lettre']),
  sent(1180, "Pourriez-vous m'indiquer les documents à fournir ?", 'Could you tell me which documents to provide?', '/pu.ʁje.vu mɛ̃.di.ke le dɔ.ky.mɑ̃ a fuʁ.niʁ/', 'poo-ryay-voo mehⁿ-dee-KAY lay do-kü-MAHⁿ a foor-NEER', ['lettre', 'service'], FCVDR),
  sent(1181, 'Ma demande a-t-elle bien été reçue ?', 'Has my application been received?', '/ma də.mɑ̃d a.tɛl bjɛ̃.ne.te ʁə.sy/', 'ma duh-MAHⁿD a-tehl byehⁿ-nay-tay ruh-SÜ', ['lettre', 'sujet-nom', 'passif'], FCVDR),
  sent(1182, 'Dans quel délai la réponse sera-t-elle envoyée ?', 'How soon will the answer be sent?', '/dɑ̃ kɛl de.lɛ la ʁe.pɔ̃s sə.ʁa.tɛl ɑ̃.vwa.je/', 'dahⁿ kehl day-LEH la ray-pohⁿs suh-ra-tehl ahⁿ-vwa-YAY', ['lettre', 'sujet-nom', 'passif']),
  sent(1183, 'Est-il possible de prendre rendez-vous en ligne ?', 'Is it possible to book an appointment online?', '/ɛ.til pɔ.sibl də pʁɑ̃dʁ ʁɑ̃.de.vu ɑ̃ liɲ/', 'eh-teel po-seebl duh prahⁿdr rahⁿ-day-voo ahⁿ LEEÑ', ['lettre'], FCVDR),
  sent(1184, 'Je vous remercie par avance de votre réponse.', 'Thank you in advance for your reply.', '/ʒə vu ʁə.mɛʁ.si paʁ a.vɑ̃s də vɔtʁ ʁe.pɔ̃s/', 'zhuh voo ruh-mehr-SEE par a-vahⁿs duh votr ray-POHⁿS', ['lettre', 'formule']),
  sent(1185, "Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.", 'Yours faithfully.', '/ʒə vu pʁi da.ɡʁe.e ma.dam mə.sjø me sa.ly.ta.sjɔ̃ dis.tɛ̃.ɡe/', 'zhuh voo pree da-gray-AY ma-DAM muh-SYEU may sa-lü-ta-syohⁿ dees-tehⁿ-GAY', ['lettre', 'formule']),
  sent(1186, 'Le bureau est-il ouvert pendant les vacances ?', 'Is the office open during the holidays?', '/lə by.ʁo ɛ.ti.lu.vɛʁ pɑ̃.dɑ̃ le va.kɑ̃s/', 'luh bü-ROH eh-tee-loo-VEHR pahⁿ-dahⁿ lay va-KAHⁿS', ['lettre', 'sujet-nom']),
  sent(1187, 'Dois-je envoyer les originaux ou des copies ?', 'Should I send the originals or copies?', '/dwa.ʒɑ̃.vwa.je le.zɔ.ʁi.ʒi.no u de kɔ.pi/', 'dwa-zhahⁿ-vwa-YAY lay-zo-ree-zhee-NOH oo day ko-PEE', ['lettre', 'je']),
  sent(1188, 'Faut-il prendre rendez-vous ?', 'Is an appointment needed?', '/fo.til pʁɑ̃dʁ ʁɑ̃.de.vu/', 'foh-teel prahⁿdr rahⁿ-day-VOO', ['lettre'], FCVDR),
  sent(1189, 'Quels frais faut-il prévoir ?', 'What fees should be expected?', '/kɛl fʁɛ fo.til pʁe.vwaʁ/', 'kehl freh foh-teel pray-VWAR', ['lettre', 'mot-q']),
  sent(1190, "Une lettre officielle pose ses questions avec l'inversion.", 'A formal letter asks its questions by inversion.', '/yn lɛtʁ ɔ.fi.sjɛl poz se kɛs.tjɔ̃ a.vɛk lɛ̃.vɛʁ.sjɔ̃/', 'ün lehtr o-fee-SYEHL pohz say kehs-TYOHⁿ a-vehk lehⁿ-vehr-SYOHⁿ', ['rule', 'lettre'], ['flashcard'],
    rule('Combien de questions par inversion veux-tu dans ton courriel ?', 'Trois au moins, chacune avec son trait d’union, et son petit t si le verbe finit par une voyelle.')),
  phrase(1191, 'au sujet de', 'regarding, about', '/o sy.ʒɛ də/', 'oh sü-ZHEH duh', ['lettre']),
  phrase(1192, 'par avance', 'in advance', '/paʁ a.vɑ̃s/', 'par a-VAHⁿS', ['lettre', 'formule']),
  sent(1193, 'Votre service accepte-t-il les paiements par virement ?', 'Does your department accept payment by bank transfer?', '/vɔtʁ sɛʁ.vis ak.sɛpt.til le pɛ.mɑ̃ paʁ viʁ.mɑ̃/', 'votr sehr-VEESS ak-sehpt-teel lay peh-mahⁿ par veer-MAHⁿ', ['lettre', 'sujet-nom', 'petit-t']),
  sent(1194, 'Pourriez-vous me confirmer la réception de mon dossier ?', 'Could you confirm that my file has been received?', '/pu.ʁje.vu mə kɔ̃.fiʁ.me la ʁe.sɛp.sjɔ̃ də mɔ̃ dɔ.sje/', 'poo-ryay-voo muh kohⁿ-feer-MAY la ray-sehp-SYOHⁿ duh mohⁿ do-SYAY', ['lettre', 'service'], FCVDR),
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
 *  The readings and their answer keys live here so the reading and the quiz
 *  cannot drift apart.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the library's reply to a job application. 129 words. */
export const EMAIL_TEXT =
  "Bonjour, nous avons bien reçu votre candidature pour le poste d'aide-bibliothécaire, et votre profil nous intéresse. Êtes-vous disponible pour un entretien lundi matin, à dix heures ? L'entretien durera environ quarante minutes. Le poste commence le premier septembre, à raison de vingt heures par semaine. Pouvez-vous nous confirmer votre présence avant vendredi ? Le jour de l'entretien, merci d'apporter une pièce d'identité et une copie de vos diplômes. Faut-il prévoir un accès pour fauteuil roulant ? Si oui, dites-le-nous, et nous organiserons l'accueil. Connaissez-vous déjà notre bibliothèque ? Elle se trouve au deuxième étage de la maison de la culture, à deux minutes du métro Mont-Royal. Souhaitez-vous recevoir le plan d'accès par courriel ? Nous restons à votre disposition pour toute question. Je vous prie d'agréer mes salutations distinguées. Julie Tremblay, responsable du recrutement.";

/** Every question in EMAIL_TEXT, in order. All five are inversions. */
export const EMAIL_INVERSIONS = [
  'Êtes-vous', 'Pouvez-vous', 'Faut-il', 'Connaissez-vous', 'Souhaitez-vous',
] as const;

/** Act 4: the recruiter's interview grid and her notes. 122 words. */
export const GRILLE_TEXT =
  "Grille d'entretien, poste d'aide-bibliothécaire. Questions à poser à chaque personne, dans l'ordre. Un : Avez-vous déjà travaillé en bibliothèque ? Deux : Avez-vous déjà utilisé un logiciel de prêt ? Trois : Êtes-vous déjà allé à une activité de notre maison de la culture ? Quatre : Avez-vous lu un bon livre récemment ? Cinq : Pouvez-vous travailler un samedi sur deux ? Six : Avez-vous des questions pour nous ? Notes après l'entretien de dix heures, avec Awa Okafor. Elle est arrivée à l'heure. A-t-elle compris le poste ? Oui, très bien. A-t-elle déjà animé un groupe d'enfants ? Pas encore, mais elle a travaillé deux étés dans un camp de jour. Elle a posé deux bonnes questions sur les horaires. Impression générale : très bonne. Les références ont-elles été vérifiées ? Pas encore : à faire lundi.";

/** Every compound-tense inversion in GRILLE_TEXT, in order. */
export const GRILLE_COMPOSES = [
  'Avez-vous déjà travaillé', 'Avez-vous déjà utilisé', 'Êtes-vous déjà allé', 'Avez-vous lu',
  'A-t-elle compris', 'A-t-elle déjà animé', 'Les références ont-elles été vérifiées',
] as const;

/** Act 5: a school letter to parents in Montréal. 125 words. */
export const ECOLE_TEXT =
  "Chers parents, la classe de madame Gagnon visitera le Biodôme de Montréal le jeudi 14 mai. Pour organiser la journée, nous avons besoin de quelques réponses. Votre enfant participera-t-il à la sortie ? Le coupon doit être rendu à l'enseignante avant lundi. Votre enfant a-t-il une allergie ? Prend-il un médicament pendant la journée ? Si oui, merci de l'écrire sur le coupon. L'autobus partira de l'école à huit heures trente et reviendra vers quinze heures. Le dîner n'est pas fourni : chaque enfant apporte son lunch et une bouteille d'eau. Un parent pourrait-il accompagner le groupe ? Nous cherchons deux adultes. Enfin, votre enfant a-t-il un imperméable ? La météo annonce de la pluie. Pour toute question, vous pouvez appeler le secrétariat. Merci de votre collaboration. La direction de l'école";

/** The noun-subject inversions in ECOLE_TEXT, in order. */
export const ECOLE_COMPLEXES = [
  'Votre enfant participera-t-il', 'Votre enfant a-t-il', 'Un parent pourrait-il', 'votre enfant a-t-il',
] as const;

/** Act 8: a customer's email to a phone company. 127 words. */
export const SERVICE_TEXT =
  "Bonjour, je vous écris au sujet de ma facture du mois de mars. Mon numéro de client est le 4471-2290, et la facture a été payée le 15 mars. Un montant de quarante dollars y figure pour un appel à l'étranger, mais je n'ai appelé personne hors du Canada ce mois-là. Pourriez-vous vérifier ce montant ? Serait-il possible de recevoir le détail des appels ? Si l'erreur est confirmée, le montant sera-t-il remboursé sur ma prochaine facture, ou faut-il faire une demande à part ? Par ailleurs, j'ai déménagé le mois dernier. Pouvez-vous mettre à jour mon adresse ? Auriez-vous aussi un formulaire en ligne pour ce genre de changement ? Je reste disponible par téléphone en semaine, après seize heures. Je vous remercie par avance de votre aide. Cordialement, Amadou Sow";

/** Act 9: a short scene told in the present, with eight incises. 120 words. */
export const RECIT_TEXT =
  "Il est presque minuit quand Léa arrive sur le quai de la gare. « Le train pour Québec est-il déjà parti ? » demande-t-elle à un employé. « Il part dans deux minutes, répond-il, mais la voiture trois est fermée. » Léa court jusqu'à la voiture quatre. Un vieil homme l'aide à monter sa valise. « Vous allez loin ? » lui demande-t-il. « Jusqu'au bout », dit-elle avec un sourire. « Moi aussi, ajoute-t-il. Je rentre chez ma fille. » Le train démarre doucement. Dehors, il pleut encore. Le vieil homme sort un livre de son sac. « Je lis toujours dans le train », explique-t-il. « Vous avez de la chance, murmure le vieil homme. C'est le dernier de la nuit. » Léa regarde la ville disparaître dans le noir. « Je sais », répond-elle simplement.";

/** The eight incises in RECIT_TEXT, in order. */
export const RECIT_INCISES = [
  'demande-t-elle', 'répond-il', 'lui demande-t-il', 'dit-elle', 'ajoute-t-il',
  'explique-t-il', 'murmure le vieil homme', 'répond-elle',
] as const;

/** Act 11: the model the learner imitates in the task. A resident writes to
 *  the city's permit office. 121 words in all. */
export const MODELE_TEXT =
  "Objet : demande de vignette de stationnement. Madame, Monsieur, je vous écris au sujet de la vignette de stationnement de mon quartier. J'ai emménagé rue Fullum le mois dernier et j'ai envoyé ma demande en ligne le 3 avril. Mon numéro de dossier est le 55120. Ma demande a-t-elle bien été reçue ? Je n'ai reçu aucune confirmation. Par ailleurs, dois-je envoyer une copie de mon bail, ou une facture d'électricité suffit-elle ? Enfin, dans quel délai la vignette sera-t-elle envoyée ? Ma voiture est garée dans la rue et je ne voudrais pas recevoir de contravention. Je vous remercie par avance de votre réponse et je reste disponible par courriel ou par téléphone. Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées. Sofia Haddad";

/** The five moves the model makes, in order, for the task checklist. */
export const MODELE_MOVES = [
  "l'objet et la formule d'appel (Madame, Monsieur)",
  'la raison du courriel (je vous écris au sujet de)',
  "trois questions par inversion, chacune sur un point précis",
  'le remerciement (je vous remercie par avance)',
  'la formule de politesse finale',
] as const;
