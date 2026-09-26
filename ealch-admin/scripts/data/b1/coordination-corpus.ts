// b1.30.l1 « La coordination » : the authored corpus, the imports and the
// citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b1.31, b1.32 and b1.37 may import REFRAME from this file; do
// not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, SEPT_MOTS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   COORDINATION: the seven coordinating conjunctions (« mais où est donc
//   Ornicar » : mais, ou, et, donc, or, ni, car) and the linking adverbs that
//   join two ideas of the same rank. Measured 2026-09-26 over every seed
//   lesson's `grammarIntroduced` and every A1 and A2 lesson source in
//   `../`: NO A1 or A2 lesson teaches et, mais or ou as a system. They are
//   used from A1 and never named. What IS owned elsewhere, and is cited here:
//
//     a1.20  parce que as the answer selected by pourquoi (grammarIntroduced)
//     a1.27  et inside numbers (vingt et un), not a connector
//     sons.10  et never takes a liaison (the liaison lesson)
//     sons.05  ou against où (the accent lesson)
//     a2.27  puis, ensuite, après as the « joints » of a route (JOINTS, and
//            its reframe « Find the joints »)
//     b1.03  d'abord, ensuite, puis, alors, finalement as narrative ORDER
//            (act 5, tapTable a5-connecteurs)
//     b1.20  ni ... ni as a NEGATION (act 4), with non plus
//     b1.37  connectors as READING signposts (written in parallel), with
//            en revanche, par ailleurs, bref
//
//   So this lesson owns, act by act:
//     1  the link a connector names (juxtaposition and « et » everywhere fail)
//     2  the seven, and what each one links
//     3  et and ou, the list comma, ou bien, et/ou
//     4  mais: opposition, correction (pas X mais Y), non seulement ... mais
//     5  donc against alors, and « so » that is NOT si
//     6  car: written, after a comma, never opening a sentence
//     7  or (recognition, written argument) and ni ... ni as coordination
//     8  en plus, de plus, en effet, c'est-à-dire (puis, ensuite cited)
//     9  sinon; pourtant and cependant for recognition, pointer to b1.32
//    10  ellipsis after et and mais (je parle anglais, mais pas espagnol)
//    11  a connected message that explains a decision
//
//   NOT OWNED, CONTRAST ONLY: subordination (parce que, quand, si, alors que,
//   bien que) is b1.31 and b1.32, with b1.10 for si and b1.15 for bien que.
//   parce que appears only beside car, as the spoken answer to pourquoi. No
//   authored French string uses a subjunctive.
//
//   NO UNGRAMMATICAL SENTENCE IS EVER A ROW. Every wrong form lives in a
//   `commonErrors.wrong`, a `trapDrill.promptSound`, a scene `break.wrong` or
//   a quiz `errorSpot.prompt`.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `connecteurs-logiques` exists (« Les connecteurs logiques »,
//     domain fondations, levelRange a2-b2). The seed's copy has empty
//     subThemes; Postgres carries la coordination, la subordination, la
//     concession (set 2026-09-26, Postgres only until the next publish).
//  2. POSTGRES PROBED 2026-09-26 (read-only, this session): a2 132 rows
//     (max .132), b1 115 rows (max .115), b2 48 rows (max .048). Nothing at or
//     above 1000 at any level. AUTHORED IDS START AT 1000.
//  3. ID BLOCK: b1.30 owns `fr.b1.connecteurs-logiques.1000`-`.1199` AND
//     NOTHING ELSE. Used here: `.1000`-`.1184` (185 rows), eleven act blocks
//     (act 1 also carries .1184, the scene's two-link sentence, added last).
//     b1.31 owns .1200-.1399 and b1.32 .1400-.1599 in the same theme. Compare
//     full ids, never numbers: the level is part of the id.
//  4. THE SEED CARRIES 11 ROWS OF THIS THEME, fr.b1.connecteurs-logiques.001
//     to .011, every one `dictation` only (no flashcard, no voiceflash). Four
//     are named here (named only). The other 104 published b1 rows are
//     DB-ONLY and cannot be named (`src()` resolves against the seed). The
//     probe found at least 17 on-topic twins; see DB_ONLY_TWINS.
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN FOR THE EAR:
//       une, bonne, pomme, homme, banane, semaine, téléphone
//         ÜNN, BONN, POMM, NOMM, NANN, MENN, FONN  (a real /n/ or /m/)
//     Nasal vowels always close with the superscript ⁿ. No U+203F tie, in
//     a respelling or an IPA field. même is not used in any row.
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
  id: 'b1.30',
  seq: 30,
  title: 'Coordination',
  sub: 'La coordination',
  canDo: 'Can link ideas of the same rank with et, ou, mais, donc, or, ni and car and with en plus, de plus, en effet, c\'est-à-dire and sinon, choosing each for the link it names, punctuating lists, leaving out what is already said, and write a connected message that explains a decision',
  prereqUnitIds: ['a1.20', 'b1.20'],
} as const;

export const LESSON_ID = 'b1.30.l1';
export const THEME = 'connecteurs-logiques';
export const LEVEL = 'b1' as const;

/** ONE block. DB holds a2 .001-.132, b1 .001-.115, b2 .001-.048. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 * ══════════════════════════════════════════════════════════════════════════ */

export const INTERROGATIFS_UNIT = 'a1.20';
export const LIAISON_UNIT = 'sons.10';
export const TRANSPORTS_UNIT = 'a2.27';
export const PC_IMPARFAIT_UNIT = 'b1.03';
export const SI_UNIT = 'b1.10';
export const NEGATION_AV_UNIT = 'b1.20';
export const SUBORDINATION_UNIT = 'b1.31';
export const CONCESSION_UNIT = 'b1.32';
export const LECTURE_UNIT = 'b1.37';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = Object.fromEntries(
  Array.from({ length: 39 }, (_, i) => [`b1.${String(i + 1).padStart(2, '0')}`, i + 1]),
);
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const INTERROGATIFS_REF = unitRef(INTERROGATIFS_UNIT);
export const LIAISON_REF = unitRef(LIAISON_UNIT);
export const TRANSPORTS_REF = unitRef(TRANSPORTS_UNIT);
export const PC_IMPARFAIT_REF = refFr(PC_IMPARFAIT_UNIT);
export const NEGATION_AV_REF = refFr(NEGATION_AV_UNIT);
export const SUBORDINATION_REF = refFr(SUBORDINATION_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const LECTURE_REF = refFr(LECTURE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as A227_REFRAME } from '../transports-corpus.ts';
export { REFRAME as A120_REFRAME } from '../interrogatifs-terms.ts';
export { REFRAME as B120_REFRAME } from './negation-avancee-corpus.ts';

export const A227_REFRAME_FR = 'Trouve les jointures, puis fais un mouvement à la fois.';
export const A120_REFRAME_FR = 'Ton mot, puis est-ce que. Ça marche toujours.';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE COUPLING. Two carriages of a train are joined by a coupling, and
 *  every coupling is a different kind: et hooks on one more carriage, ou
 *  lets you take one or the other, mais turns the next carriage round, donc
 *  pulls the consequence behind, car pushes the cause in front, ni joins
 *  two empty wagons, or brings in a carriage nobody expected. The lesson's
 *  claim is that the joint is not neutral: choosing it IS choosing the
 *  meaning. Which is why « et » everywhere (act 1) says nothing, and why
 *  « donc » at every sentence start (act 5) claims links that do not exist.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un connecteur ne relie pas seulement : il dit le lien.';
export const REFRAME_EN = 'A connector does not just join: it says what the link is.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Mais où est donc Ornicar.',
    why: 'An inventory, not a meaning. It lists the seven and says nothing about choosing between them; it is kept as the act 2 hack. It also misses the linking adverbs of acts 8 and 9.',
  },
  {
    text: 'Et ajoute, mais oppose, donc conclut.',
    why: 'A list of three that act 7 (or, ni) and act 6 (car) immediately outgrow, and a reframe you have to extend every act is a table, not a reframe.',
  },
  {
    text: 'Un connecteur, c\'est de la colle entre deux phrases.',
    why: 'True of every connector alike, so it predicts « et » everywhere, which is exactly the act 1 failure. Glue has no direction; a link does.',
  },
  {
    text: 'Plus de connecteurs, plus de clarté.',
    why: 'False where act 5 has to hold: « donc » at the head of every sentence claims consequences that are not there. A connector costs something when the link is wrong.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-26 and its French is in the
 *  trailing comment. `named only` rows have no `flashcard` drill.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a2.marche.119',                   // J'ai goûté le fromage, mais je n'ai rien acheté.
  ],
  act2: [
    'fr.a2.cafe.060',                     // Il a plu, donc nous sommes restés à l'intérieur.
    'fr.a1.cafe.145',                     // Nous restons à l'intérieur car il pleut.
    'fr.a2.verbes.405',                   // Je sais nager, mais je ne peux pas aujourd'hui.
  ],
  act3: [
    'fr.a1.questions.394',                // Le train ou le bus ?
    'fr.a2.marche.069',                   // payer en espèces ou par carte
    'fr.a2.au-restaurant.054',            // avec ou sans sucre ?
  ],
  act4: [
    'fr.a2.objets.107',                   // Elle a cherché son téléphone partout, mais elle ne l'a pas trouvé.
    'fr.a2.internet.204',                 // J'ai reçu un code, mais il ne marche pas.
  ],
  act5: [
    'fr.a2.cafe.063',                     // Nous sommes arrivés en avance, alors nous avons attendu.
    'fr.a2.routines.052',                 // Il a raté son bus, donc il est arrivé en retard.
    'fr.a2.verbes.525',                   // Ah, d'accord. À ce soir, alors.
    'fr.b1.connecteurs-logiques.008',     // Le pont était fermé, donc nous avons dû faire un détour.  (named only)
  ],
  act6: [
    'fr.a2.cuisine.054',                  // Nous avons mangé tôt car nous avions très faim.
    'fr.b1.connecteurs-logiques.010',     // Le vol a été annulé car les conditions météo étaient trop mauvaises.  (named only)
    'fr.b1.connecteurs-logiques.011',     // Les habitants se plaignent car le bruit du chantier ne cesse jamais.  (named only)
    'fr.b1.connecteurs-logiques.001',     // Elle a changé de métier parce qu'elle voulait plus de liberté.  (named only)
  ],
  act7: [] as string[],                   // §A.4: the seed carries no or row and no ni ... ni row at a1-b1.
  act8: [
    'fr.a2.routines.051',                 // Nous avons pris le petit déjeuner ensemble, ensuite nous sommes sortis.
    'fr.a2.routines.049',                 // Ce matin, je me suis réveillé tôt, puis j'ai pris une douche.
    'fr.a1.mots-de-liaison.007',          // Il pleut, en plus il fait du vent.  (named only)
  ],
  act9: [
    'fr.a2.heure-et-date.099',            // Fais-le tout de suite, sinon tu vas oublier.
  ],
  act10: [] as string[],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.b1.connecteurs-logiques.008',       // dictation
  'fr.b1.connecteurs-logiques.010',       // dictation
  'fr.b1.connecteurs-logiques.011',       // dictation
  'fr.b1.connecteurs-logiques.001',       // dictation (and parce que: b1.31's)
  'fr.a1.mots-de-liaison.007',            // dictation
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a2.marche.119',                     // sentence, flashcard, review
  'fr.a2.cafe.060',                       // sentence, flashcard, review
  'fr.a1.cafe.145',                       // sentence, flashcard, review
  'fr.a2.objets.107',                     // sentence, flashcard, review
  'fr.a2.cafe.063',                       // sentence, flashcard, review
  'fr.a2.routines.052',                   // sentence, flashcard, review
  'fr.a2.cuisine.054',                    // sentence, flashcard, review
  'fr.a2.routines.051',                   // sentence, flashcard, review
  'fr.a2.routines.049',                   // sentence, flashcard, review
  'fr.a2.heure-et-date.099',              // flashcard, sentence
];

/** Published rows this corpus twins, from the 2026-09-26 Postgres probe.
 *  Not nameable today (DB-only). Decide at import: dedupe or keep both. */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [
  { dbId: 'fr.b1.connecteurs-logiques.012', fr: "Je n'ai pas répondu au message car je n'avais pas vu la notification.", twin: E(1087) },
  { dbId: 'fr.b1.connecteurs-logiques.014', fr: 'Le rendez-vous a été reporté car le médecin avait une urgence.', twin: E(1086) },
  { dbId: 'fr.b1.connecteurs-logiques.056', fr: 'Il pleuvait toute la journée, donc le match a été reporté.', twin: E(1068) },
  { dbId: 'fr.b1.connecteurs-logiques.026', fr: 'Elle a beaucoup révisé, mais elle doute encore de sa réussite.', twin: E(1060) },
  { dbId: 'fr.b1.connecteurs-logiques.042', fr: "L'hôtel propose un excellent petit-déjeuner ; de plus, son personnel se montre très accueillant.", twin: E(1119) },
  { dbId: 'fr.b1.connecteurs-logiques.044', fr: "La maison bénéficie d'une belle vue ; de plus, elle se trouve près des commerces.", twin: E(1126) },
  { dbId: 'fr.b1.connecteurs-logiques.083', fr: 'Non seulement il parle trois langues, mais il joue aussi du piano.', twin: E(1056) },
  { dbId: 'fr.b1.connecteurs-logiques.092', fr: 'Non seulement elle cuisine bien, mais elle sait aussi organiser une fête.', twin: E(1064) },
  { dbId: 'fr.b1.connecteurs-logiques.034', fr: 'Le climat semblait favorable ; pourtant, la récolte a été décevante.  (pourtant: b1.32 owns it)', twin: E(1141) },
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
  tags, drills, version: 1, grammarPoints: ['coordination'], ...extra,
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

/* ── ACT 1 · LE MESSAGE QUI NE TIENT PAS ────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Le salaire est bon, mais je reste à Montréal.', 'The salary is good, but I am staying in Montréal.', '/lə sa.lɛʁ ɛ bɔ̃ mɛ ʒə ʁɛst a mɔ̃.ʁe.al/', 'luh sa-LEHR eh BOHⁿ | meh zhuh rehst a mohⁿ-ray-AL', ['scene', 'mais', 'quebec'], FCVDR),
  sent(1001, 'Je reste à Montréal, car ma mère est malade.', 'I am staying in Montréal, because my mother is ill.', '/ʒə ʁɛst a mɔ̃.ʁe.al kaʁ ma mɛʁ ɛ ma.lad/', 'zhuh rehst a mohⁿ-ray-AL | kar ma mehr eh ma-LAD', ['scene', 'car'], FCVDR),
  sent(1002, "Le poste est intéressant et l'équipe est sympathique.", 'The job is interesting and the team is friendly.', '/lə pɔst ɛ.tɛ̃.te.ʁɛ.sɑ̃ e le.kip ɛ sɛ̃.pa.tik/', 'luh post eh-tehⁿ-tay-reh-SAHⁿ | ay lay-KEEP eh sehⁿ-pa-TEEK', ['scene', 'et']),
  sent(1003, 'Tu viens avec nous ou tu restes ici ?', 'Are you coming with us or staying here?', '/ty vjɛ̃ a.vɛk nu u ty ʁɛst i.si/', 'tü vyehⁿ a-vehk NOO | oo tü rehst ee-SEE', ['scene', 'ou']),
  sent(1004, 'Ma mère est malade, donc je ne peux pas partir.', 'My mother is ill, so I cannot leave.', '/ma mɛʁ ɛ ma.lad dɔ̃k ʒə nə pø pa paʁ.tiʁ/', 'ma mehr eh ma-LAD | dohⁿk zhuh nuh peu pa par-TEER', ['scene', 'donc'], FCVDR),
  sent(1005, 'Je ne veux ni partir ni perdre ce poste.', 'I want neither to leave nor to lose this job.', '/ʒə nə vø ni paʁ.tiʁ ni pɛʁdʁ sə pɔst/', 'zhuh nuh veu nee par-TEER nee pehrdr suh POST', ['scene', 'ni']),
  sent(1006, 'Genève me plaît, or ma famille est ici.', 'I like Geneva, yet my family is here.', '/ʒə.nɛv mə plɛ ɔʁ ma fa.mij ɛ.ti.si/', 'zhuh-NEHV muh PLEH | or ma fa-MEEY eh-tee-SEE', ['scene', 'or', 'ecrit']),
  sent(1007, REFRAME, REFRAME_EN, '/œ̃ kɔ.nɛk.tœʁ nə ʁə.li pa sœl.mɑ̃ il di lə ljɛ̃/', 'uhⁿ ko-nehk-TUHR nuh ruh-lee pa suhl-MAHⁿ | eel dee luh LYEHⁿ', ['rule', 'reframe'], ['flashcard'],
    rule('« et » ou « mais » : les deux relient. Quelle différence ?', "et dit : j'ajoute. mais dit : attention, la suite va dans l'autre sens. Le connecteur dit le lien.")),
  sent(1008, "J'ai réfléchi, et j'ai pris ma décision.", 'I have thought it over, and I have made my decision.', '/ʒe ʁe.fle.ʃi e ʒe pʁi ma de.si.zjɔ̃/', 'zhay ray-flay-SHEE | ay zhay pree ma day-see-ZYOHⁿ', ['scene', 'et'], FCVDR),
  sent(1009, 'Le poste est intéressant, mais il est loin.', 'The job is interesting, but it is far away.', '/lə pɔst ɛ.tɛ̃.te.ʁɛ.sɑ̃ mɛ.zil ɛ lwɛ̃/', 'luh post eh-tehⁿ-tay-reh-SAHⁿ | meh-zeel eh LWEHⁿ', ['scene', 'mais']),
  sent(1010, 'Je refuse le poste, mais je te remercie.', 'I am turning the job down, but thank you.', '/ʒə ʁə.fyz lə pɔst mɛ ʒə tə ʁə.mɛʁ.si/', 'zhuh ruh-füz luh POST | meh zhuh tuh ruh-mehr-SEE', ['scene', 'mais']),
  sent(1011, "C'est une bonne offre, donc j'ai hésité.", 'It is a good offer, so I hesitated.', '/sɛ.tyn bɔ.nɔfʁ dɔ̃k ʒe e.zi.te/', 'seh-tünn bo-NOFR | dohⁿk zhay ay-zee-TAY', ['scene', 'donc']),
  sent(1012, 'Je reste, et je le dis sans regret.', 'I am staying, and I say so with no regret.', '/ʒə ʁɛst e ʒə lə di sɑ̃ ʁə.ɡʁɛ/', 'zhuh REHST | ay zhuh luh dee sahⁿ ruh-GREH', ['scene', 'et']),
  // The scene's right answer, both links in one sentence. Numbered after the
  // act 11 block because it was added last; still inside the 1000-1199 block.
  sent(1184, 'Le salaire est bon, mais je reste à Montréal, car ma mère est malade.', 'The salary is good, but I am staying in Montréal, because my mother is ill.', '/lə sa.lɛʁ ɛ bɔ̃ mɛ ʒə ʁɛst a mɔ̃.ʁe.al kaʁ ma mɛʁ ɛ ma.lad/', 'luh sa-LEHR eh BOHⁿ | meh zhuh rehst a mohⁿ-ray-AL | kar ma mehr eh ma-LAD', ['scene', 'mais', 'car'], FCVDR),
];

/* ── ACT 2 · MAIS OÙ EST DONC ORNICAR ───────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  phrase(1013, 'et', 'and', '/e/', 'AY', ['sept', 'et']),
  phrase(1014, 'ou', 'or', '/u/', 'OO', ['sept', 'ou']),
  phrase(1015, 'mais', 'but', '/mɛ/', 'MEH', ['sept', 'mais']),
  phrase(1016, 'donc', 'so, therefore', '/dɔ̃k/', 'DOHⁿK', ['sept', 'donc']),
  phrase(1017, 'or', 'now, yet (in an argument)', '/ɔʁ/', 'OR', ['sept', 'or', 'ecrit']),
  phrase(1018, 'ni', 'nor, neither', '/ni/', 'NEE', ['sept', 'ni']),
  phrase(1019, 'car', 'for, because (written)', '/kaʁ/', 'KAR', ['sept', 'car', 'ecrit']),
  sent(1020, 'Mais où est donc Ornicar ?', 'But where is Ornicar, then? (the memory sentence for the seven)', '/mɛ u ɛ dɔ̃k ɔʁ.ni.kaʁ/', 'meh oo eh dohⁿk or-nee-KAR', ['sept', 'mnemo']),
  sent(1021, "J'aime le thé et le café.", 'I like tea and coffee.', '/ʒɛm lə te e lə ka.fe/', 'zhem luh TAY ay luh ka-FAY', ['sept', 'et']),
  sent(1022, "Tu préfères le train ou l'avion ?", 'Do you prefer the train or the plane?', '/ty pʁe.fɛʁ lə tʁɛ̃ u la.vjɔ̃/', 'tü pray-fehr luh TREHⁿ | oo la-VYOHⁿ', ['sept', 'ou']),
  sent(1023, 'Il est fatigué, mais il continue.', 'He is tired, but he keeps going.', '/il ɛ fa.ti.ɡe mɛ il kɔ̃.ti.ny/', 'eel eh fa-tee-GAY | meh eel kohⁿ-tee-NÜ', ['sept', 'mais'], FCVDR),
  sent(1024, 'Il pleut, donc je prends le bus.', 'It is raining, so I am taking the bus.', '/il plø dɔ̃k ʒə pʁɑ̃ lə bys/', 'eel PLEU | dohⁿk zhuh prahⁿ luh BÜSS', ['sept', 'donc'], FCVDR),
  sent(1025, 'Je prends le bus, car il pleut.', 'I am taking the bus, because it is raining.', '/ʒə pʁɑ̃ lə bys kaʁ il plø/', 'zhuh prahⁿ luh BÜSS | kar eel PLEU', ['sept', 'car'], FCVDR),
  sent(1026, "Je n'aime ni le bruit ni la foule.", 'I like neither noise nor crowds.', '/ʒə nɛm ni lə bʁɥi ni la ful/', 'zhuh nem nee luh BRWEE nee la FOOL', ['sept', 'ni']),
  sent(1027, "Tous les candidats parlent anglais. Or, ce poste demande l'espagnol.", 'All the candidates speak English. Yet this job requires Spanish.', '/tu le kɑ̃.di.da paʁl ɑ̃.ɡlɛ ɔʁ sə pɔst də.mɑ̃d lɛs.pa.ɲɔl/', 'too lay kahⁿ-dee-DA parl ahⁿ-GLEH | OR suh post duh-mahⁿd lehs-pa-NYOL', ['sept', 'or', 'ecrit']),
  sent(1028, 'Chaque mot de la liste dit un lien différent.', 'Each word on the list names a different link.', '/ʃak mo də la list di œ̃ ljɛ̃ di.fe.ʁɑ̃/', 'shak moh duh la LEEST | dee uhⁿ lyehⁿ dee-fay-RAHⁿ', ['rule', 'sept'], ['flashcard'],
    rule('mais, ou, et, donc, or, ni, car : que dit chacun ?', "et ajoute, ou propose un choix, mais oppose, donc conclut, or apporte un fait qui change tout, ni nie deux choses, car explique.")),
  sent(1029, 'Karim cuisine et Nadia met la table.', 'Karim cooks and Nadia sets the table.', '/ka.ʁim kɥi.zin e na.dja mɛ la tabl/', 'ka-REEM kwee-ZEEN | ay na-DYA meh la TABL', ['sept', 'et']),
  sent(1030, 'On se voit ce soir ou demain ?', 'Shall we meet tonight or tomorrow?', '/ɔ̃ sə vwa sə swaʁ u də.mɛ̃/', 'ohⁿ suh vwa suh SWAR | oo duh-MEHⁿ', ['sept', 'ou']),
  sent(1031, "L'appartement est petit, mais il est lumineux.", 'The flat is small, but it is bright.', '/la.paʁ.tə.mɑ̃ ɛ pə.ti mɛ.zil ɛ ly.mi.nø/', 'la-par-tuh-MAHⁿ eh puh-TEE | meh-zeel eh lü-mee-NEU', ['sept', 'mais'], FCVDR),
  sent(1032, 'Le magasin est fermé, donc on revient demain.', 'The shop is shut, so we will come back tomorrow.', '/lə ma.ɡa.zɛ̃ ɛ fɛʁ.me dɔ̃k ɔ̃ ʁə.vjɛ̃ də.mɛ̃/', 'luh ma-ga-ZEHⁿ eh fehr-MAY | dohⁿk ohⁿ ruh-vyehⁿ duh-MEHⁿ', ['sept', 'donc']),
  sent(1033, 'Il est tard, mais le magasin est encore ouvert.', 'It is late, but the shop is still open.', '/il ɛ taʁ mɛ lə ma.ɡa.zɛ̃ ɛ.tɑ̃.kɔʁ u.vɛʁ/', 'eel eh TAR | meh luh ma-ga-ZEHⁿ eh-tahⁿ-kor oo-VEHR', ['sept', 'mais'], FCVR,
    gap('Il est tard, ___ le magasin est encore ouvert.', 'mais : le deuxième fait va contre le premier.')),
];

/* ── ACT 3 · ET, OU, ET LA VIRGULE ──────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1034, "J'ai acheté du pain, du fromage et des fruits.", 'I bought bread, cheese and fruit.', '/ʒe aʃ.te dy pɛ̃ dy fʁɔ.maʒ e de fʁɥi/', 'zhay ash-TAY dü PEHⁿ | dü fro-MAZH | ay day FRWEE', ['liste', 'et'], FCVDR),
  sent(1035, 'Il faut un passeport, une photo et un formulaire.', 'You need a passport, a photo and a form.', '/il fo œ̃ pas.pɔʁ yn fɔ.to e œ̃ fɔʁ.my.lɛʁ/', 'eel foh uhⁿ pass-POR | ünn fo-TOH | ay uhⁿ for-mü-LEHR', ['liste', 'et'], FCVDR),
  sent(1036, 'Nous avons visité Québec, Montréal et Gatineau.', 'We visited Québec City, Montréal and Gatineau.', '/nu.za.vɔ̃ vi.zi.te ke.bɛk mɔ̃.ʁe.al e ɡa.ti.no/', 'noo-za-vohⁿ vee-zee-TAY kay-BEHK | mohⁿ-ray-AL | ay ga-tee-NOH', ['liste', 'et', 'quebec']),
  sent(1037, 'Tu peux payer par carte ou en espèces.', 'You can pay by card or in cash.', '/ty pø pe.je paʁ kaʁt u ɑ̃.nɛs.pɛs/', 'tü peu pay-YAY par KART | oo ahⁿ-nehs-PEHSS', ['ou'], FCVDR),
  sent(1038, 'Tu viens samedi ou dimanche ?', 'Are you coming on Saturday or Sunday?', '/ty vjɛ̃ sam.di u di.mɑ̃ʃ/', 'tü vyehⁿ sam-DEE | oo dee-MAHⁿSH', ['ou']),
  sent(1039, 'Tu peux prendre le métro ou bien le bus.', 'You can take the metro, or else the bus.', '/ty pø pʁɑ̃dʁ lə me.tʁo u bjɛ̃ lə bys/', 'tü peu prahⁿdr luh may-TROH | oo byehⁿ luh BÜSS', ['ou', 'ou-bien']),
  sent(1040, 'Apportez un dessert et/ou une boisson.', 'Bring a dessert and/or a drink.', '/a.pɔʁ.te œ̃ de.sɛʁ e u yn bwa.sɔ̃/', 'a-por-TAY uhⁿ day-SEHR | ay OO ünn bwa-SOHⁿ', ['ou', 'et-ou', 'ecrit']),
  sent(1041, 'Je me lève, je me douche et je pars.', 'I get up, I shower and I leave.', '/ʒə mə lɛv ʒə mə duʃ e ʒə paʁ/', 'zhuh muh LEHV | zhuh muh DOOSH | ay zhuh PAR', ['liste', 'et'], FCVDR),
  sent(1042, 'Elle parle vite et bien.', 'She speaks fast and well.', '/ɛl paʁl vit e bjɛ̃/', 'ehl parl VEET ay BYEHⁿ', ['et']),
  sent(1043, 'Dans une liste, les virgules séparent, et et va devant le dernier élément.', 'In a list the commas separate, and et goes before the last item.', '/dɑ̃.zyn list le viʁ.ɡyl se.paʁ e e va də.vɑ̃ lə dɛʁ.nje e.le.mɑ̃/', 'dahⁿ-zünn LEEST | lay veer-GÜL say-PAR | ay AY va duh-vahⁿ luh dehr-nyay ay-lay-MAHⁿ', ['rule', 'liste'], ['flashcard'],
    rule('du pain, du fromage, des fruits : où mets-tu et ?', 'Devant le dernier seulement : du pain, du fromage et des fruits. Les autres sont séparés par des virgules.')),
  sent(1044, 'Il fait chaud et humide.', 'It is hot and humid.', '/il fɛ ʃo e y.mid/', 'eel feh SHOH ay ü-MEED', ['et']),
  sent(1045, 'Vous voulez du thé ou du café ?', 'Would you like tea or coffee?', '/vu vu.le dy te u dy ka.fe/', 'voo voo-lay dü TAY | oo dü ka-FAY', ['ou']),
  sent(1046, 'Ou tu viens maintenant, ou tu restes à la maison.', 'Either you come now, or you stay at home.', '/u ty vjɛ̃ mɛ̃t.nɑ̃ u ty ʁɛst a la mɛ.zɔ̃/', 'oo tü vyehⁿ mehⁿt-NAHⁿ | oo tü rehst a la meh-ZOHⁿ', ['ou', 'ou-ou']),
  sent(1047, 'Il y a des pommes, des poires et des bananes.', 'There are apples, pears and bananas.', '/il ja de pɔm de pwaʁ e de ba.nan/', 'eel ya day POMM | day PWAR | ay day ba-NANN', ['liste', 'et'], FCVDR),
  sent(1048, "J'ai invité Paul, Léa et Karim.", 'I invited Paul, Léa and Karim.', '/ʒe ɛ̃.vi.te pɔl le.a e ka.ʁim/', 'zhay ehⁿ-vee-TAY POL | lay-A | ay ka-REEM', ['liste', 'et'], FCVR,
    gap("J'ai invité Paul___ Léa ___ Karim.", 'une virgule, puis et devant le dernier nom.')),
  sent(1049, 'Nous avons mangé, bu et beaucoup ri.', 'We ate, drank and laughed a lot.', '/nu.za.vɔ̃ mɑ̃.ʒe by e bo.ku ʁi/', 'noo-za-vohⁿ mahⁿ-ZHAY | BÜ | ay boh-koo REE', ['liste', 'et']),
  phrase(1050, 'ou bien', 'or else, or', '/u bjɛ̃/', 'oo BYEHⁿ', ['ou', 'ou-bien']),
  phrase(1051, 'et/ou', 'and/or', '/e u/', 'ay OO', ['et-ou', 'ecrit']),
];

/* ── ACT 4 · MAIS ───────────────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1052, "Je parle bien anglais, mais j'écris mal.", 'I speak English well, but I write badly.', '/ʒə paʁl bjɛ̃ ɑ̃.ɡlɛ mɛ ʒe.kʁi mal/', 'zhuh parl byehⁿ ahⁿ-GLEH | meh zhay-kree MAL', ['mais', 'opposition'], FCVDR),
  sent(1053, "Ce n'est pas cher, mais c'est loin.", 'It is not expensive, but it is far.', '/sə nɛ pa ʃɛʁ mɛ sɛ lwɛ̃/', 'suh neh pa SHEHR | meh seh LWEHⁿ', ['mais', 'opposition'], FCVDR),
  sent(1054, "Ce n'est pas mon frère, mais mon cousin.", 'It is not my brother but my cousin.', '/sə nɛ pa mɔ̃ fʁɛʁ mɛ mɔ̃ ku.zɛ̃/', 'suh neh pa mohⁿ FREHR | meh mohⁿ koo-ZEHⁿ', ['mais', 'correction'], FCVDR),
  sent(1055, 'Je ne pars pas lundi, mais mardi.', 'I am not leaving on Monday but on Tuesday.', '/ʒə nə paʁ pa lœ̃.di mɛ maʁ.di/', 'zhuh nuh par pa luhⁿ-DEE | meh mar-DEE', ['mais', 'correction']),
  sent(1056, 'Non seulement il pleut, mais il fait froid.', 'Not only is it raining, it is cold too.', '/nɔ̃ sœl.mɑ̃ il plø mɛ.zil fɛ fʁwa/', 'nohⁿ suhl-mahⁿ eel PLEU | meh-zeel feh FRWA', ['mais', 'non-seulement']),
  sent(1057, 'Mais oui, bien sûr.', 'Why yes, of course.', '/mɛ wi bjɛ̃ syʁ/', 'meh WEE | byehⁿ SÜR', ['mais', 'oral']),
  sent(1058, "Mais non, ce n'est pas grave.", "Oh no, it doesn't matter.", '/mɛ nɔ̃ sə nɛ pa ɡʁav/', 'meh NOHⁿ | suh neh pa GRAV', ['mais', 'oral']),
  sent(1059, "J'aimerais venir, mais je travaille.", 'I would like to come, but I am working.', '/ʒɛm.ʁɛ və.niʁ mɛ ʒə tʁa.vaj/', 'zhem-reh vuh-NEER | meh zhuh tra-VAHY', ['mais', 'opposition'], FCVDR),
  sent(1060, 'Le film était long, mais il était très beau.', 'The film was long, but it was very beautiful.', '/lə film e.tɛ lɔ̃ mɛ.zi.le.tɛ tʁɛ bo/', 'luh feelm ay-teh LOHⁿ | meh-zee-lay-teh treh BOH', ['mais', 'opposition']),
  sent(1061, "Mais annonce que la suite va dans l'autre sens.", 'Mais announces that what follows goes the other way.', '/mɛ a.nɔ̃s kə la sɥit va dɑ̃ lotʁ sɑ̃s/', 'MEH a-NOHⁿS | kuh la SWEET va dahⁿ lohtr SAHⁿS', ['rule', 'mais'], ['flashcard'],
    rule('« pas cher, mais loin » : que prépare mais ?', "Un changement de direction. Après mais, tu attends quelque chose qui va contre ce qui précède.")),
  sent(1062, 'Il a raison, mais il parle trop fort.', 'He is right, but he talks too loudly.', '/il a ʁɛ.zɔ̃ mɛ il paʁl tʁo fɔʁ/', 'eel a reh-ZOHⁿ | meh eel parl troh FOR', ['mais', 'opposition']),
  sent(1063, 'Elle ne mange pas de viande, mais elle mange du poisson.', 'She does not eat meat, but she eats fish.', '/ɛl nə mɑ̃ʒ pa də vjɑ̃d mɛ ɛl mɑ̃ʒ dy pwa.sɔ̃/', 'ehl nuh mahⁿzh pa duh VYAHⁿD | meh ehl mahⁿzh dü pwa-SOHⁿ', ['mais', 'opposition']),
  sent(1064, 'Non seulement elle chante, mais elle écrit ses chansons.', 'Not only does she sing, she writes her own songs.', '/nɔ̃ sœl.mɑ̃ ɛl ʃɑ̃t mɛ.zɛl e.kʁi se ʃɑ̃.sɔ̃/', 'nohⁿ suhl-mahⁿ ehl SHAHⁿT | meh-zehl ay-kree say shahⁿ-SOHⁿ', ['mais', 'non-seulement'], FCVDR),
  sent(1065, 'Je voulais sortir, mais il pleuvait.', 'I wanted to go out, but it was raining.', '/ʒə vu.lɛ sɔʁ.tiʁ mɛ il plø.vɛ/', 'zhuh voo-leh sor-TEER | meh eel pluh-VEH', ['mais', 'opposition'], FCVR,
    gap('Je voulais sortir, ___ il pleuvait.', "mais : la pluie va contre l'envie de sortir.")),
  phrase(1066, 'non seulement ... mais aussi', 'not only ... but also', '/nɔ̃ sœl.mɑ̃ mɛ.zo.si/', 'nohⁿ suhl-MAHⁿ ... meh-zoh-SEE', ['mais', 'non-seulement']),
  sent(1067, 'Le loyer est bas, mais les charges sont élevées.', 'The rent is low, but the service charges are high.', '/lə lwa.je ɛ ba mɛ le ʃaʁʒ sɔ̃.te.lə.ve/', 'luh lwa-yay eh BA | meh lay sharzh sohⁿ-tay-luh-VAY', ['mais', 'opposition']),
];

/* ── ACT 5 · DONC, ALORS, ET LE SO ANGLAIS ──────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1068, "Il a neigé toute la nuit, donc l'école est fermée.", 'It snowed all night, so the school is closed.', '/il a ne.ʒe tut la nɥi dɔ̃k le.kɔl ɛ fɛʁ.me/', 'eel a neh-ZHAY toot la NWEE | dohⁿk lay-KOL eh fehr-MAY', ['donc', 'quebec'], FCVDR),
  sent(1069, 'Il a neigé toute la nuit, alors on reste à la maison.', 'It snowed all night, so we are staying home.', '/il a ne.ʒe tut la nɥi a.lɔʁ ɔ̃ ʁɛst a la mɛ.zɔ̃/', 'eel a neh-ZHAY toot la NWEE | a-LOR ohⁿ rehst a la meh-ZOHⁿ', ['alors', 'oral', 'quebec'], FCVDR),
  sent(1070, 'Il faut donc partir plus tôt.', 'So we have to leave earlier.', '/il fo dɔ̃k paʁ.tiʁ ply to/', 'eel foh dohⁿk par-teer plü TOH', ['donc', 'ecrit'], FCVDR),
  sent(1071, 'Nous avons donc décidé de reporter la réunion.', 'We have therefore decided to postpone the meeting.', '/nu.za.vɔ̃ dɔ̃k de.si.de də ʁə.pɔʁ.te la ʁe.y.njɔ̃/', 'noo-za-vohⁿ dohⁿk day-see-DAY duh ruh-por-TAY la ray-ü-NYOHⁿ', ['donc', 'ecrit']),
  sent(1072, 'Alors, on fait quoi ce soir ?', 'So, what are we doing tonight?', '/a.lɔʁ ɔ̃ fɛ kwa sə swaʁ/', 'a-LOR | ohⁿ feh KWA suh SWAR', ['alors', 'oral']),
  sent(1073, 'Je suis tellement fatigué.', 'I am so tired.', '/ʒə sɥi tɛl.mɑ̃ fa.ti.ɡe/', 'zhuh swee tehl-mahⁿ fa-tee-GAY', ['so', 'intensite'], FCVDR),
  sent(1074, 'Il fait si froid ce matin.', 'It is so cold this morning.', '/il fɛ si fʁwa sə ma.tɛ̃/', 'eel feh see FRWA suh ma-TEHⁿ', ['so', 'intensite', 'quebec']),
  sent(1075, 'Je suis fatigué, donc je vais me coucher.', 'I am tired, so I am going to bed.', '/ʒə sɥi fa.ti.ɡe dɔ̃k ʒə vɛ mə ku.ʃe/', 'zhuh swee fa-tee-GAY | dohⁿk zhuh veh muh koo-SHAY', ['donc', 'so'], FCVDR),
  sent(1076, 'Je pense, donc je suis.', 'I think, therefore I am.', '/ʒə pɑ̃s dɔ̃k ʒə sɥi/', 'zhuh PAHⁿS | dohⁿk zhuh SWEE', ['donc', 'citation']),
  sent(1077, "C'est donc toi, la nouvelle voisine.", 'So you are the new neighbour.', '/sɛ dɔ̃k twa la nu.vɛl vwa.zin/', 'seh dohⁿk TWA | la noo-vehl vwa-ZEEN', ['donc', 'apres-verbe']),
  sent(1078, "Donc tire une conclusion ; à l'oral, on dit souvent alors.", 'Donc draws a conclusion; in speech people often say alors.', '/dɔ̃k tiʁ yn kɔ̃.kly.zjɔ̃ a lɔ.ʁal ɔ̃ di su.vɑ̃ a.lɔʁ/', 'DOHⁿK teer ünn kohⁿ-klü-ZYOHⁿ | a lo-RAL ohⁿ dee soo-vahⁿ a-LOR', ['rule', 'donc'], ['flashcard'],
    rule('« so » : donc, alors ou si ?', "donc ou alors pour une conséquence : il pleut, donc je reste. si ou tellement pour l'intensité : je suis si fatigué.")),
  sent(1079, "Le train était en retard, alors j'ai pris un taxi.", 'The train was late, so I took a taxi.', '/lə tʁɛ̃ e.tɛ.tɑ̃ ʁə.taʁ a.lɔʁ ʒe pʁi œ̃ tak.si/', 'luh trehⁿ ay-teh-tahⁿ ruh-TAR | a-LOR zhay pree uhⁿ tak-SEE', ['alors', 'oral']),
  sent(1080, 'Tu as faim ? Alors, on mange.', 'Are you hungry? Then let us eat.', '/ty a fɛ̃ a.lɔʁ ɔ̃ mɑ̃ʒ/', 'tü a FEHⁿ | a-LOR ohⁿ MAHⁿZH', ['alors', 'oral']),
  sent(1081, "C'est si beau ici.", 'It is so beautiful here.', '/sɛ si bo i.si/', 'seh see BOH ee-SEE', ['so', 'intensite']),
  sent(1082, 'Le magasin ferme à dix-huit heures, donc dépêche-toi.', 'The shop closes at six, so hurry up.', '/lə ma.ɡa.zɛ̃ fɛʁm a di.zɥi.tœʁ dɔ̃k de.pɛʃ.twa/', 'luh ma-ga-ZEHⁿ fehrm a dee-zwee-TUHR | dohⁿk day-pehsh-TWA', ['donc'], FCVR,
    gap('Le magasin ferme à dix-huit heures, ___ dépêche-toi.', "donc : la conséquence. À l'oral, alors marche aussi.")),
  phrase(1083, 'alors', 'so, then (spoken)', '/a.lɔʁ/', 'a-LOR', ['alors', 'oral']),
  phrase(1084, 'si, tellement', 'so (so tired, so beautiful)', '/si tɛl.mɑ̃/', 'SEE | tehl-MAHⁿ', ['so', 'intensite']),
  sent(1085, "Il n'avait pas son passeport, donc il n'a pas pu partir.", 'He did not have his passport, so he could not leave.', '/il na.vɛ pa sɔ̃ pas.pɔʁ dɔ̃k il na pa py paʁ.tiʁ/', 'eel na-veh pa sohⁿ pass-POR | dohⁿk eel na pa pü par-TEER', ['donc']),
];

/* ── ACT 6 · CAR ────────────────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1086, 'Le vol est annulé, car il y a une tempête.', 'The flight is cancelled, because there is a storm.', '/lə vɔl ɛ.ta.ny.le kaʁ il ja yn tɑ̃.pɛt/', 'luh vol eh-ta-nü-LAY | kar eel ya ünn tahⁿ-PEHT', ['car', 'ecrit'], FCVDR),
  sent(1087, "Je ne suis pas venu, car j'étais malade.", 'I did not come, because I was ill.', '/ʒə nə sɥi pa və.ny kaʁ ʒe.tɛ ma.lad/', 'zhuh nuh swee pa vuh-NÜ | kar zhay-teh ma-LAD', ['car'], FCVDR),
  sent(1088, 'La bibliothèque est fermée, car les travaux continuent.', 'The library is closed, as the work is still going on.', '/la bi.bli.jɔ.tɛk ɛ fɛʁ.me kaʁ le tʁa.vo kɔ̃.ti.ny/', 'la bee-blee-yo-TEHK eh fehr-MAY | kar lay tra-VOH kohⁿ-tee-NÜ', ['car', 'ecrit']),
  sent(1089, 'Pourquoi tu pars ? Parce que je suis fatigué.', 'Why are you leaving? Because I am tired.', '/puʁ.kwa ty paʁ paʁs kə ʒə sɥi fa.ti.ɡe/', 'poor-KWA tü PAR | pars-kuh zhuh swee fa-tee-GAY', ['contraste', 'parce-que', 'oral']),
  sent(1090, 'Je me couche tôt, car je travaille demain.', 'I am going to bed early, as I am working tomorrow.', '/ʒə mə kuʃ to kaʁ ʒə tʁa.vaj də.mɛ̃/', 'zhuh muh koosh TOH | kar zhuh tra-vahy duh-MEHⁿ', ['car']),
  sent(1091, 'Prends un parapluie, car il va pleuvoir.', 'Take an umbrella, because it is going to rain.', '/pʁɑ̃ œ̃ pa.ʁa.plɥi kaʁ il va plø.vwaʁ/', 'prahⁿ uhⁿ pa-ra-PLWEE | kar eel va pleu-VWAR', ['car'], FCVDR),
  sent(1092, 'Car explique, mais il ne commence jamais une phrase.', 'Car explains, but it never begins a sentence.', '/kaʁ ɛk.splik mɛ il nə kɔ.mɑ̃s ʒa.mɛ yn fʁaz/', 'KAR ehk-SPLEEK | meh eel nuh ko-mahⁿs zha-meh ünn FRAZ', ['rule', 'car'], ['flashcard'],
    rule('« Car il pleut. » Cette phrase est-elle correcte ?', 'Non. car arrive après une première idée et une virgule : je reste, car il pleut. Pour répondre à pourquoi, dis parce que.')),
  sent(1093, 'Il faut réserver, car le restaurant est souvent plein.', 'You have to book, because the restaurant is often full.', '/il fo ʁe.zɛʁ.ve kaʁ lə ʁɛs.to.ʁɑ̃ ɛ su.vɑ̃ plɛ̃/', 'eel foh ray-zehr-VAY | kar luh rehs-to-RAHⁿ eh soo-vahⁿ PLEHⁿ', ['car']),
  sent(1094, 'Elle a démissionné, car elle voulait changer de vie.', 'She resigned, because she wanted to change her life.', '/ɛl a de.mi.sjɔ.ne kaʁ ɛl vu.lɛ ʃɑ̃.ʒe də vi/', 'ehl a day-mee-syo-NAY | kar ehl voo-leh shahⁿ-zhay duh VEE', ['car'], FCVDR),
  sent(1095, 'Je rentre à pied, car il fait beau.', 'I am walking home, as the weather is nice.', '/ʒə ʁɑ̃tʁ a pje kaʁ il fɛ bo/', 'zhuh rahⁿtr a PYAY | kar eel feh BOH', ['car', 'miroir']),
  sent(1096, 'Il fait beau, donc je rentre à pied.', 'The weather is nice, so I am walking home.', '/il fɛ bo dɔ̃k ʒə ʁɑ̃tʁ a pje/', 'eel feh BOH | dohⁿk zhuh rahⁿtr a PYAY', ['donc', 'miroir']),
  sent(1097, "Les prix montent, car l'essence coûte plus cher.", 'Prices are rising, because petrol costs more.', '/le pʁi mɔ̃t kaʁ le.sɑ̃s kut ply ʃɛʁ/', 'lay pree MOHⁿT | kar lay-SAHⁿS koot plü SHEHR', ['car', 'ecrit']),
  sent(1098, "Nous restons à l'intérieur, car il fait très froid.", 'We are staying inside, because it is very cold.', '/nu ʁɛs.tɔ̃ a lɛ̃.te.ʁjœʁ kaʁ il fɛ tʁɛ fʁwa/', 'noo rehs-tohⁿ a lehⁿ-tay-RYUHR | kar eel feh treh FRWA', ['car'], FCVR,
    gap("Nous restons à l'intérieur, ___ il fait très froid.", "car : la cause, après une virgule. À l'oral, parce que.")),
  sent(1099, "J'ai pris un taxi, car il était tard.", 'I took a taxi, as it was late.', '/ʒe pʁi œ̃ tak.si kaʁ i.le.tɛ taʁ/', 'zhay pree uhⁿ tak-SEE | kar ee-lay-teh TAR', ['car']),
  sent(1100, "Le musée est gratuit, car c'est le premier dimanche du mois.", 'The museum is free, because it is the first Sunday of the month.', '/lə my.ze ɛ ɡʁa.tɥi kaʁ sɛ lə pʁə.mje di.mɑ̃ʃ dy mwa/', 'luh mü-ZAY eh gra-TWEE | kar seh luh pruh-myay dee-mahⁿsh dü MWA', ['car', 'ecrit']),
];

/* ── ACT 7 · OR ET NI ───────────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1101, 'Je voulais louer cet appartement. Or, il était déjà loué.', 'I wanted to rent that flat. But it turned out it was already let.', '/ʒə vu.lɛ lu.e sɛ.ta.paʁ.tə.mɑ̃ ɔʁ i.le.tɛ de.ʒa lu.e/', 'zhuh voo-leh loo-AY seh-ta-par-tuh-MAHⁿ | OR ee-lay-teh day-zha loo-AY', ['or', 'ecrit'], FCVDR),
  sent(1102, "Le contrat exige un diplôme. Or, Paul n'en a pas.", 'The contract requires a diploma. Now, Paul does not have one.', '/lə kɔ̃.tʁa ɛɡ.ziʒ œ̃ di.plom ɔʁ pɔl nɑ̃.na pa/', 'luh kohⁿ-TRA ehg-ZEEZH uhⁿ dee-PLOHM | OR pol nahⁿ-na PA', ['or', 'ecrit']),
  sent(1103, 'Tous les hommes sont mortels. Or, Socrate est un homme.', 'All men are mortal. Now, Socrates is a man.', '/tu le.zɔm sɔ̃ mɔʁ.tɛl ɔʁ sɔ.kʁat ɛ.tœ̃.nɔm/', 'too lay-ZOMM sohⁿ mor-TEHL | OR so-KRAT eh-tuhⁿ-NOMM', ['or', 'ecrit', 'citation']),
  sent(1104, 'Donc Socrate est mortel.', 'Therefore Socrates is mortal.', '/dɔ̃k sɔ.kʁat ɛ mɔʁ.tɛl/', 'dohⁿk so-KRAT eh mor-TEHL', ['donc', 'citation']),
  sent(1105, "La réunion était prévue à dix heures. Or, personne n'est venu.", 'The meeting was set for ten. Yet nobody came.', '/la ʁe.y.njɔ̃ e.tɛ pʁe.vy a di.zœʁ ɔʁ pɛʁ.sɔn nɛ və.ny/', 'la ray-ü-NYOHⁿ ay-teh pray-vü a dee-ZUHR | OR pehr-SONN neh vuh-NÜ', ['or', 'ecrit']),
  sent(1106, "Or présente un fait nouveau qui change l'argument.", 'Or brings in a new fact that changes the argument.', "/ɔʁ pʁe.zɑ̃t œ̃ fɛ nu.vo ki ʃɑ̃ʒ laʁ.ɡy.mɑ̃/", 'OR pray-ZAHⁿT uhⁿ feh noo-VOH | kee shahⁿzh lar-gü-MAHⁿ', ['rule', 'or'], ['flashcard'],
    rule('« Or, il était déjà loué. » Que veut dire or ici ?', "Now, yet : un fait nouveau qui change tout. Ce n'est pas l'or, le métal, et ce n'est pas ou. Tu le liras surtout à l'écrit.")),
  sent(1107, "Je n'ai ni le temps ni l'envie.", 'I have neither the time nor the wish.', '/ʒə ne ni lə tɑ̃ ni lɑ̃.vi/', 'zhuh nay nee luh TAHⁿ nee lahⁿ-VEE', ['ni'], FCVDR),
  sent(1108, 'Ni Paul ni Léa ne sont venus.', 'Neither Paul nor Léa came.', '/ni pɔl ni le.a nə sɔ̃ və.ny/', 'nee POL nee lay-A | nuh sohⁿ vuh-NÜ', ['ni', 'sujet']),
  sent(1109, 'Il ne parle ni anglais ni espagnol.', 'He speaks neither English nor Spanish.', '/il nə paʁl ni ɑ̃.ɡlɛ ni ɛs.pa.ɲɔl/', 'eel nuh parl nee ahⁿ-GLEH nee ehs-pa-NYOL', ['ni'], FCVDR),
  sent(1110, "Je n'aime pas le froid, ni la neige.", 'I do not like the cold, or the snow.', '/ʒə nɛm pa lə fʁwa ni la nɛʒ/', 'zhuh nem pa luh FRWA | nee la NEHZH', ['ni', 'apres-pas', 'quebec']),
  sent(1111, 'Il est parti sans manger ni boire.', 'He left without eating or drinking.', '/il ɛ paʁ.ti sɑ̃ mɑ̃.ʒe ni bwaʁ/', 'eel eh par-TEE sahⁿ mahⁿ-ZHAY nee BWAR', ['ni', 'sans']),
  sent(1112, "Sans sucre ni lait, s'il vous plaît.", 'No sugar or milk, please.', '/sɑ̃ sykʁ ni lɛ sil vu plɛ/', 'sahⁿ SÜKR nee LEH | seel voo PLEH', ['ni', 'sans'], FCVDR),
  sent(1113, 'Elle ne boit ni ne fume.', 'She neither drinks nor smokes.', '/ɛl nə bwa ni nə fym/', 'ehl nuh BWA nee nuh FÜM', ['ni', 'ecrit']),
  sent(1114, 'Je ne veux ni thé ni café.', 'I want neither tea nor coffee.', '/ʒə nə vø ni te ni ka.fe/', 'zhuh nuh veu nee TAY nee ka-FAY', ['ni'], FCVR,
    gap('Je ne veux ___ thé ___ café.', 'ni ... ni : deux non, sans pas et sans article.')),
  phrase(1115, 'sans ... ni', 'without ... or', '/sɑ̃ ni/', 'SAHⁿ ... NEE', ['ni', 'sans']),
  sent(1116, "L'annonce promettait un balcon. Or, il n'y en a pas.", 'The listing promised a balcony. Yet there is not one.', "/la.nɔ̃s pʁɔ.mɛ.tɛ œ̃ bal.kɔ̃ ɔʁ il njɑ̃.na pa/", 'la-NOHⁿS pro-meh-teh uhⁿ bal-KOHⁿ | OR eel nyahⁿ-na PA', ['or', 'ecrit']),
];

/* ── ACT 8 · AJOUTER ET PRÉCISER ────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1117, "L'appartement est grand. En plus, il est bien situé.", 'The flat is big. On top of that, it is well located.', '/la.paʁ.tə.mɑ̃ ɛ ɡʁɑ̃ ɑ̃ plys il ɛ bjɛ̃ si.tɥe/', 'la-par-tuh-MAHⁿ eh GRAHⁿ | ahⁿ PLÜSS eel eh byehⁿ see-TWAY', ['ajout', 'en-plus'], FCVDR),
  sent(1118, 'Il est tard, et en plus il pleut.', 'It is late, and on top of that it is raining.', '/il ɛ taʁ e ɑ̃ plys il plø/', 'eel eh TAR | ay ahⁿ PLÜSS eel PLEU', ['ajout', 'en-plus', 'oral']),
  sent(1119, 'Le projet est utile. De plus, il ne coûte pas cher.', 'The project is useful. Moreover, it is not expensive.', '/lə pʁɔ.ʒɛ ɛ.ty.til də plys il nə kut pa ʃɛʁ/', 'luh pro-ZHEH eh-tü-TEEL | duh PLÜSS eel nuh koot pa SHEHR', ['ajout', 'de-plus', 'ecrit'], FCVDR),
  sent(1120, "Il a l'air fatigué. En effet, il a mal dormi.", 'He looks tired. And indeed, he slept badly.', '/il a lɛʁ fa.ti.ɡe ɑ̃.ne.fɛ il a mal dɔʁ.mi/', 'eel a lehr fa-tee-GAY | ahⁿ-nay-FEH eel a mal dor-MEE', ['preuve', 'en-effet'], FCVDR),
  sent(1121, "J'arrive après-demain, c'est-à-dire jeudi.", 'I arrive the day after tomorrow, that is, Thursday.', '/ʒa.ʁiv a.pʁɛ.də.mɛ̃ sɛ.ta.diʁ ʒø.di/', 'zha-reev a-preh-duh-MEHⁿ | seh-ta-deer zheu-DEE', ['precision'], FCVDR),
  sent(1122, "Il travaille à mi-temps, c'est-à-dire vingt heures par semaine.", 'He works part-time, that is, twenty hours a week.', '/il tʁa.vaj a mi.tɑ̃ sɛ.ta.diʁ vɛ̃.tœʁ paʁ sə.mɛn/', 'eel tra-vahy a mee-TAHⁿ | seh-ta-DEER vehⁿ-TUHR par suh-MENN', ['precision']),
  sent(1123, "D'abord on visite, ensuite on décide.", 'First we visit, then we decide.', '/da.bɔʁ ɔ̃ vi.zit ɑ̃.sɥit ɔ̃ de.sid/', 'da-BOR ohⁿ vee-ZEET | ahⁿ-SWEET ohⁿ day-SEED', ['ordre', 'ensuite']),
  sent(1124, "Je finis ce dossier, puis je t'appelle.", 'I will finish this file, then I will call you.', '/ʒə fi.ni sə dɔ.sje pɥi ʒə ta.pɛl/', 'zhuh fee-nee suh do-SYAY | pwee zhuh ta-PEHL', ['ordre', 'puis']),
  sent(1125, "En plus ajoute, en effet confirme, c'est-à-dire précise.", 'En plus adds, en effet confirms, c\'est-à-dire makes precise.', '/ɑ̃ plys a.ʒut ɑ̃.ne.fɛ kɔ̃.fiʁm sɛ.ta.diʁ pʁe.siz/', 'ahⁿ PLÜSS a-ZHOOT | ahⁿ-nay-FEH kohⁿ-FEERM | seh-ta-DEER pray-SEEZ', ['rule', 'ajout'], ['flashcard'],
    rule("en plus, en effet, c'est-à-dire : lequel prouve ce que tu viens de dire ?", "en effet : il confirme avec une preuve. en plus ajoute un autre argument, c'est-à-dire redit la même idée plus précisément.")),
  sent(1126, 'Le quartier est calme. De plus, les écoles sont proches.', 'The area is quiet. Moreover, the schools are close.', '/lə kaʁ.tje ɛ kalm də plys le.ze.kɔl sɔ̃ pʁɔʃ/', 'luh kar-TYAY eh KALM | duh PLÜSS lay-zay-KOL sohⁿ PROSH', ['ajout', 'de-plus', 'ecrit']),
  sent(1127, 'Elle parle bien espagnol. En effet, elle a vécu à Madrid.', 'She speaks good Spanish. Indeed, she lived in Madrid.', '/ɛl paʁl bjɛ̃ ɛs.pa.ɲɔl ɑ̃.ne.fɛ ɛl a ve.ky a ma.dʁid/', 'ehl parl byehⁿ ehs-pa-NYOL | ahⁿ-nay-FEH ehl a vay-kü a ma-DREED', ['preuve', 'en-effet']),
  sent(1128, "Le bureau est fermé le week-end, c'est-à-dire samedi et dimanche.", 'The office is closed at the weekend, that is, Saturday and Sunday.', '/lə by.ʁo ɛ fɛʁ.me lə wi.kɛnd sɛ.ta.diʁ sam.di e di.mɑ̃ʃ/', 'luh bü-ROH eh fehr-may luh wee-KEHND | seh-ta-deer sam-DEE ay dee-MAHⁿSH', ['precision']),
  sent(1129, 'Et en plus, tu es en retard.', 'And on top of that, you are late.', '/e ɑ̃ plys ty ɛ.zɑ̃ ʁə.taʁ/', 'ay ahⁿ PLÜSS | tü eh-zahⁿ ruh-TAR', ['ajout', 'en-plus', 'oral']),
  sent(1130, "Tu as raison. En effet, c'est trop cher.", 'You are right. It is indeed too expensive.', '/ty a ʁɛ.zɔ̃ ɑ̃.ne.fɛ sɛ tʁo ʃɛʁ/', 'tü a reh-ZOHⁿ | ahⁿ-nay-FEH seh troh SHEHR', ['preuve', 'en-effet']),
  sent(1131, "C'est loin. En plus, il n'y a pas de bus.", 'It is far. On top of that, there is no bus.', '/sɛ lwɛ̃ ɑ̃ plys il nja pa də bys/', 'seh LWEHⁿ | ahⁿ PLÜSS eel nya pa duh BÜSS', ['ajout', 'en-plus'], FCVR,
    gap("C'est loin. ___, il n'y a pas de bus.", "En plus : un argument de plus, dans le même sens. À l'écrit, de plus.")),
  phrase(1132, 'en plus', 'on top of that, what is more', '/ɑ̃ plys/', 'ahⁿ PLÜSS', ['ajout', 'en-plus']),
  phrase(1133, 'de plus', 'moreover (written)', '/də plys/', 'duh PLÜSS', ['ajout', 'de-plus', 'ecrit']),
  phrase(1134, 'en effet', 'indeed, and in fact', '/ɑ̃.ne.fɛ/', 'ahⁿ-nay-FEH', ['preuve', 'en-effet']),
  phrase(1135, "c'est-à-dire", 'that is, in other words', '/sɛ.ta.diʁ/', 'seh-ta-DEER', ['precision']),
];

/* ── ACT 9 · SINON, ET POURTANT ─────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1136, 'Dépêche-toi, sinon on va rater le train.', 'Hurry up, or else we will miss the train.', '/de.pɛʃ.twa si.nɔ̃ ɔ̃ va ʁa.te lə tʁɛ̃/', 'day-pehsh-TWA | see-NOHⁿ ohⁿ va ra-tay luh TREHⁿ', ['sinon'], FCVDR),
  sent(1137, 'Prends ton manteau, sinon tu vas avoir froid.', 'Take your coat, otherwise you will be cold.', '/pʁɑ̃ tɔ̃ mɑ̃.to si.nɔ̃ ty va.za.vwaʁ fʁwa/', 'prahⁿ tohⁿ mahⁿ-TOH | see-NOHⁿ tü va-za-vwar FRWA', ['sinon', 'quebec'], FCVDR),
  sent(1138, "Réserve aujourd'hui, sinon il n'y aura plus de place.", 'Book today, otherwise there will be no room left.', '/ʁe.zɛʁv o.ʒuʁ.dɥi si.nɔ̃ il njo.ʁa ply də plas/', 'ray-ZEHRV oh-zhoor-DWEE | see-NOHⁿ eel nyoh-ra plü duh PLASS', ['sinon']),
  sent(1139, 'On se voit samedi. Sinon, dimanche.', 'Let us meet on Saturday. If not, Sunday.', '/ɔ̃ sə vwa sam.di si.nɔ̃ di.mɑ̃ʃ/', 'ohⁿ suh vwa sam-DEE | see-NOHⁿ dee-MAHⁿSH', ['sinon', 'alternative']),
  sent(1140, 'Ça va, sinon ?', 'Apart from that, how are things? (spoken)', '/sa va si.nɔ̃/', 'sa VA | see-NOHⁿ', ['sinon', 'oral']),
  sent(1141, 'Il a beaucoup travaillé. Pourtant, il a échoué.', 'He worked hard. And yet he failed.', '/il a bo.ku tʁa.va.je puʁ.tɑ̃ il a e.ʃwe/', 'eel a boh-koo tra-va-YAY | poor-TAHⁿ eel a ay-SHWAY', ['pourtant', 'reconnaissance']),
  sent(1142, "Il fait beau. Pourtant, elle reste à l'intérieur.", 'The weather is nice. And yet she stays inside.', '/il fɛ bo puʁ.tɑ̃ ɛl ʁɛst a lɛ̃.te.ʁjœʁ/', 'eel feh BOH | poor-TAHⁿ ehl rehst a lehⁿ-tay-RYUHR', ['pourtant', 'reconnaissance']),
  sent(1143, "Le test était facile. Cependant, peu d'élèves l'ont réussi.", 'The test was easy. However, few pupils passed it.', '/lə tɛst e.tɛ fa.sil sə.pɑ̃.dɑ̃ pø de.lɛv lɔ̃ ʁe.y.si/', 'luh TEHST ay-teh fa-SEEL | suh-pahⁿ-DAHⁿ peu day-LEHV lohⁿ ray-ü-SEE', ['pourtant', 'reconnaissance', 'ecrit']),
  sent(1144, 'Sinon dit ce qui arrive dans le cas contraire.', 'Sinon says what happens if the first thing does not.', '/si.nɔ̃ di sə ki a.ʁiv dɑ̃ lə ka kɔ̃.tʁɛʁ/', 'see-NOHⁿ dee suh kee a-REEV | dahⁿ luh ka kohⁿ-TREHR', ['rule', 'sinon'], ['flashcard'],
    rule('« Dépêche-toi, sinon on va rater le train. » Que veut dire sinon ?', "Si tu ne te dépêches pas. sinon annonce ce qui arrive si la première idée n'a pas lieu : otherwise, or else.")),
  sent(1145, 'Mets ta ceinture, sinon tu auras une amende.', 'Put your seatbelt on, or you will get a fine.', '/mɛ ta sɛ̃.tyʁ si.nɔ̃ ty o.ʁa.zy.na.mɑ̃d/', 'meh ta sehⁿ-TÜR | see-NOHⁿ tü oh-ra-zü-na-MAHⁿD', ['sinon']),
  sent(1146, "Il est riche, mais il n'est pas heureux.", 'He is rich, but he is not happy.', '/i.lɛ ʁiʃ mɛ il nɛ pa.zœ.ʁø/', 'ee-leh REESH | meh eel neh pa-zuh-REU', ['mais', 'miroir']),
  sent(1147, "Note l'adresse, sinon tu vas l'oublier.", 'Write the address down, or you will forget it.', '/nɔt la.dʁɛs si.nɔ̃ ty va lu.bli.je/', 'not la-DREHSS | see-NOHⁿ tü va loo-blee-YAY', ['sinon'], FCVR,
    gap("Note l'adresse, ___ tu vas l'oublier.", 'sinon : si tu ne la notes pas.')),
  phrase(1148, 'sinon', 'otherwise, or else', '/si.nɔ̃/', 'see-NOHⁿ', ['sinon']),
  phrase(1149, 'pourtant', 'and yet', '/puʁ.tɑ̃/', 'poor-TAHⁿ', ['pourtant', 'reconnaissance']),
];

/* ── ACT 10 · NE PAS TOUT RÉPÉTER ───────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1150, 'Je parle anglais, mais pas espagnol.', 'I speak English, but not Spanish.', '/ʒə paʁl ɑ̃.ɡlɛ mɛ pa ɛs.pa.ɲɔl/', 'zhuh parl ahⁿ-GLEH | meh pa ehs-pa-NYOL', ['ellipse', 'mais-pas'], FCVDR),
  sent(1151, 'Elle aime le thé, et moi aussi.', 'She likes tea, and so do I.', '/ɛl ɛm lə te e mwa o.si/', 'ehl em luh TAY | ay mwa oh-SEE', ['ellipse', 'aussi'], FCVDR),
  sent(1152, 'Il aime le café, mais pas moi.', 'He likes coffee, but I do not.', '/il ɛm lə ka.fe mɛ pa mwa/', 'eel em luh ka-FAY | meh pa MWA', ['ellipse', 'mais-pas'], FCVDR),
  sent(1153, "J'ai lu le livre, mais pas le journal.", 'I read the book, but not the paper.', '/ʒe ly lə livʁ mɛ pa lə ʒuʁ.nal/', 'zhay lü luh LEEVR | meh pa luh zhoor-NAL', ['ellipse', 'mais-pas']),
  sent(1154, 'Mon frère habite à Liège, et ma sœur à Namur.', 'My brother lives in Liège, and my sister in Namur.', '/mɔ̃ fʁɛʁ a.bit a ljɛʒ e ma sœʁ a na.myʁ/', 'mohⁿ frehr a-beet a LYEHZH | ay ma suhr a na-MÜR', ['ellipse', 'verbe']),
  sent(1155, 'Je travaille le lundi et le mardi.', 'I work on Mondays and Tuesdays.', '/ʒə tʁa.vaj lə lœ̃.di e lə maʁ.di/', 'zhuh tra-vahy luh luhⁿ-DEE | ay luh mar-DEE', ['ellipse']),
  sent(1156, 'Il chante et danse très bien.', 'He sings and dances very well.', '/il ʃɑ̃t e dɑ̃s tʁɛ bjɛ̃/', 'eel SHAHⁿT | ay dahⁿs treh BYEHⁿ', ['ellipse', 'sujet']),
  sent(1157, "C'est simple, mais pas facile.", 'It is simple, but not easy.', '/sɛ sɛ̃pl mɛ pa fa.sil/', 'seh SEHⁿPL | meh pa fa-SEEL', ['ellipse', 'mais-pas'], FCVDR),
  sent(1158, 'Nous avons visité le musée, mais pas le château.', 'We visited the museum, but not the castle.', '/nu.za.vɔ̃ vi.zi.te lə my.ze mɛ pa lə ʃa.to/', 'noo-za-vohⁿ vee-zee-tay luh mü-ZAY | meh pa luh sha-TOH', ['ellipse', 'mais-pas']),
  sent(1159, 'Après et ou mais, on ne répète pas ce qui est déjà dit.', 'After et or mais, you do not repeat what has already been said.', '/a.pʁɛ e u mɛ ɔ̃ nə ʁe.pɛt pa sə ki ɛ de.ʒa di/', 'a-PREH AY oo MEH | ohⁿ nuh ray-peht pa suh kee eh day-zha DEE', ['rule', 'ellipse'], ['flashcard'],
    rule('« Je parle anglais, mais je ne parle pas espagnol. » Comment la raccourcir ?', 'Je parle anglais, mais pas espagnol. Le verbe est déjà dit : après mais, pas suffit.')),
  sent(1160, 'Elle vient ce soir, et son mari aussi.', 'She is coming tonight, and so is her husband.', '/ɛl vjɛ̃ sə swaʁ e sɔ̃ ma.ʁi o.si/', 'ehl vyehⁿ suh SWAR | ay sohⁿ ma-ree oh-SEE', ['ellipse', 'aussi']),
  sent(1161, "Je n'aime pas le froid, et lui non plus.", 'I do not like the cold, and neither does he.', '/ʒə nɛm pa lə fʁwa e lɥi nɔ̃ ply/', 'zhuh nem pa luh FRWA | ay lwee nohⁿ PLÜ', ['ellipse', 'non-plus'], FCVDR),
  sent(1162, 'Il a fini, et toi ?', 'He has finished. What about you?', '/il a fi.ni e twa/', 'eel a fee-NEE | ay TWA', ['ellipse', 'oral']),
  sent(1163, 'Elle est partie tôt et rentrée tard.', 'She left early and came back late.', '/ɛl ɛ paʁ.ti to e ʁɑ̃.tʁe taʁ/', 'ehl eh par-tee TOH | ay rahⁿ-tray TAR', ['ellipse', 'auxiliaire']),
  sent(1164, "J'aime Montréal, mais pas en hiver.", 'I like Montréal, but not in winter.', '/ʒɛm mɔ̃.ʁe.al mɛ pa.zɑ̃.ni.vɛʁ/', 'zhem mohⁿ-ray-AL | meh pa-zahⁿ-nee-VEHR', ['ellipse', 'mais-pas', 'quebec'], FCVDR),
  sent(1165, 'Il boit du thé, mais pas de café.', 'He drinks tea, but not coffee.', '/il bwa dy te mɛ pa də ka.fe/', 'eel bwa dü TAY | meh pa duh ka-FAY', ['ellipse', 'mais-pas'], FCVR,
    gap('Il boit du thé, mais ___ de café.', "pas : après mais, le verbe n'est pas répété, et du devient de.")),
  phrase(1166, 'mais pas', 'but not', '/mɛ pa/', 'meh PA', ['ellipse', 'mais-pas']),
  phrase(1167, 'et moi aussi', 'and so do I', '/e mwa o.si/', 'ay mwa oh-SEE', ['ellipse', 'aussi']),
];

/* ── ACT 11 · EXPLIQUER UNE DÉCISION ────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1168, "J'ai pris ma décision, et je voulais te l'expliquer.", 'I have made my decision, and I wanted to explain it to you.', '/ʒe pʁi ma de.si.zjɔ̃ e ʒə vu.lɛ tə lɛk.spli.ke/', 'zhay pree ma day-see-ZYOHⁿ | ay zhuh voo-leh tuh lehk-splee-KAY', ['message', 'et'], FCVDR),
  sent(1169, "J'ai longtemps hésité, car les deux offres étaient bonnes.", 'I hesitated for a long time, as both offers were good.', '/ʒe lɔ̃.tɑ̃ e.zi.te kaʁ le dø.zɔfʁ e.tɛ bɔn/', 'zhay lohⁿ-TAHⁿ ay-zee-TAY | kar lay deu-ZOFR ay-teh BONN', ['message', 'car'], FCVDR),
  sent(1170, 'Le salaire est moins élevé, mais le travail me plaît davantage.', 'The salary is lower, but I like the work more.', '/lə sa.lɛʁ ɛ mwɛ̃.ze.lə.ve mɛ lə tʁa.vaj mə plɛ da.vɑ̃.taʒ/', 'luh sa-LEHR eh mwehⁿ-zay-luh-VAY | meh luh tra-vahy muh pleh da-vahⁿ-TAZH', ['message', 'mais']),
  sent(1171, 'De plus, je pourrai rester près de ma famille.', 'What is more, I will be able to stay close to my family.', '/də plys ʒə pu.ʁɛ ʁɛs.te pʁɛ də ma fa.mij/', 'duh PLÜSS | zhuh poo-reh rehs-tay preh duh ma fa-MEEY', ['message', 'de-plus'], FCVDR),
  sent(1172, "J'ai donc accepté le poste à Québec.", 'So I have accepted the job in Québec City.', '/ʒe dɔ̃.kak.sɛp.te lə pɔst a ke.bɛk/', 'zhay dohⁿ-kak-sehp-TAY luh post a kay-BEHK', ['message', 'donc', 'quebec'], FCVDR),
  sent(1173, 'Je ne regrette ni mon choix ni ces années avec vous.', 'I regret neither my choice nor these years with you.', '/ʒə nə ʁə.ɡʁɛt ni mɔ̃ ʃwa ni se.za.ne a.vɛk vu/', 'zhuh nuh ruh-greht nee mohⁿ SHWA | nee say-za-nay a-vehk VOO', ['message', 'ni']),
  sent(1174, "Je commence le 3 mars, c'est-à-dire dans un mois.", 'I start on 3 March, that is, in a month.', '/ʒə kɔ.mɑ̃s lə tʁwa maʁs sɛ.ta.diʁ dɑ̃.zœ̃ mwa/', 'zhuh ko-mahⁿs luh trwa MARSS | seh-ta-deer dahⁿ-zuhⁿ MWA', ['message', 'precision']),
  sent(1175, 'Je reste joignable par courriel ou par téléphone.', 'I can still be reached by email or by phone.', '/ʒə ʁɛst ʒwa.ɲabl paʁ ku.ʁjɛl u paʁ te.le.fɔn/', 'zhuh rehst zhwa-NYABL par koo-RYEHL | oo par tay-lay-FONN', ['message', 'ou', 'quebec']),
  sent(1176, 'Merci pour tout, et à bientôt.', 'Thank you for everything, and see you soon.', '/mɛʁ.si puʁ tu e a bjɛ̃.to/', 'mehr-see poor TOO | ay a byehⁿ-TOH', ['message', 'et'], FCVDR),
  sent(1177, 'Un message clair : la décision, les raisons, puis la suite.', 'A clear message: the decision, the reasons, then what happens next.', '/œ̃ mɛ.saʒ klɛʁ la de.si.zjɔ̃ le ʁɛ.zɔ̃ pɥi la sɥit/', 'uhⁿ meh-sazh KLEHR | la day-see-ZYOHⁿ | lay reh-ZOHⁿ | pwee la SWEET', ['rule', 'message'], ['flashcard'],
    rule('Tu expliques une décision. Dans quel ordre ?', "La décision, puis les raisons avec car et de plus, ce qui t'a fait hésiter avec mais, la conclusion avec donc, et enfin la suite.")),
  sent(1178, 'Le poste à Genève était tentant. Or, mes enfants ne voulaient pas partir.', 'The job in Geneva was tempting. But my children did not want to leave.', '/lə pɔst a ʒə.nɛv e.tɛ tɑ̃.tɑ̃ ɔʁ me.zɑ̃.fɑ̃ nə vu.lɛ pa paʁ.tiʁ/', 'luh post a zhuh-NEHV ay-teh tahⁿ-TAHⁿ | OR may-zahⁿ-FAHⁿ nuh voo-leh pa par-TEER', ['message', 'or', 'ecrit']),
  sent(1179, "Je sais que c'est une surprise, mais c'est la bonne décision pour moi.", 'I know it is a surprise, but it is the right decision for me.', '/ʒə sɛ kə sɛ.tyn syʁ.pʁiz mɛ sɛ la bɔn de.si.zjɔ̃ puʁ mwa/', 'zhuh seh kuh seh-tünn sür-PREEZ | meh seh la bonn day-see-ZYOHⁿ poor MWA', ['message', 'mais'], FCVDR),
  sent(1180, "Je quitte l'équipe, mais je ne quitte pas la ville.", 'I am leaving the team, but I am not leaving the city.', '/ʒə kit le.kip mɛ ʒə nə kit pa la vil/', 'zhuh keet lay-KEEP | meh zhuh nuh keet pa la VEEL', ['message', 'mais']),
  sent(1181, 'En effet, le trajet me prenait trois heures par jour.', 'Indeed, the commute was taking me three hours a day.', '/ɑ̃.ne.fɛ lə tʁa.ʒɛ mə pʁə.nɛ tʁwa.zœʁ paʁ ʒuʁ/', 'ahⁿ-nay-FEH | luh tra-ZHEH muh pruh-neh trwa-ZUHR par ZHOOR', ['message', 'en-effet']),
  sent(1182, 'Sinon, rien ne change pour le projet.', 'Apart from that, nothing changes for the project.', '/si.nɔ̃ ʁjɛ̃ nə ʃɑ̃ʒ puʁ lə pʁɔ.ʒɛ/', 'see-NOHⁿ | ryehⁿ nuh shahⁿzh poor luh pro-ZHEH', ['message', 'sinon']),
  phrase(1183, 'pour toutes ces raisons', 'for all these reasons', '/puʁ tut se ʁɛ.zɔ̃/', 'poor toot say reh-ZOHⁿ', ['message']),
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
 *  §I. THE LONG TEXTS AND THEIR KEYS
 * ══════════════════════════════════════════════════════════════════════════ */

/** The seven, in mnemonic order. The sheet and the act 2 deck print it. */
export const SEPT_MOTS = ['mais', 'ou', 'et', 'donc', 'or', 'ni', 'car'] as const;

/** Act 1: Camille's email to her team, Montréal. About 127 words. */
export const DECISION_TEXT =
  "Bonjour à toutes et à tous. Vous le savez, la direction m'a proposé un poste à Genève, et j'ai longtemps hésité. Le salaire est meilleur et le projet est passionnant, mais la ville est chère et je ne connais personne là-bas. J'ai donc demandé conseil à ma famille. Mes enfants ne voulaient ni changer d'école ni quitter leurs amis. Or, l'école internationale de Genève accepte les élèves en janvier, c'est-à-dire au milieu de l'année. Ils pourront donc essayer six mois, puis décider avec nous. J'ai accepté le poste, car c'est une chance rare. Je pars le 5 janvier, mais je reste joignable par courriel. En effet, je continue à suivre deux de nos dossiers. Merci pour ces cinq belles années, et à bientôt, ici ou là-bas. Camille";

/** The connectors in DECISION_TEXT, in order, with the link each names.
 *  The act 1 drill and the r1 quiz round are checked against this list. */
export const DECISION_LIENS = [
  ['et', 'ajoute'], ['et', 'ajoute'], ['mais', 'oppose'], ['et', 'ajoute'],
  ['donc', 'conclut'], ['ni ... ni', 'nie deux choses'], ['or', 'fait nouveau'],
  ["c'est-à-dire", 'précise'], ['donc', 'conclut'], ['puis', 'ordonne'],
  ['car', 'explique'], ['mais', 'oppose'], ['en effet', 'prouve'],
  ['et', 'ajoute'], ['ou', 'choix'],
] as const;

/** Act 6: a transit notice, Montréal. About 102 words. */
export const AVIS_TEXT =
  "AVIS AUX USAGERS. La station Berri-UQAM sera fermée samedi et dimanche, car des travaux importants ont lieu sous les quais. Les trains ne s'arrêteront donc pas à cette station. Des navettes remplaceront le métro entre Beaubien et Berri-UQAM, mais elles seront plus lentes. Prévoyez vingt minutes de plus, car la circulation est dense le samedi. Les abonnements restent valables, et aucun billet supplémentaire n'est nécessaire. Vous pouvez consulter l'horaire des navettes sur notre site ou le demander aux agents. La station rouvrira lundi à cinq heures trente. Nous vous remercions de votre patience, car nous savons que ces travaux compliquent vos déplacements.";

/** Act 7: residents' letter to the City of Lausanne. About 125 words. */
export const LETTRE_TEXT =
  "Madame, Monsieur, la Ville veut fermer la piscine de notre quartier, car elle coûte trop cher à entretenir. Or, c'est la seule piscine à moins de trois kilomètres. Beaucoup de familles n'ont ni voiture ni le temps d'aller plus loin. Les enfants apprennent à nager à l'école, et l'école utilise cette piscine. Si elle ferme, les cours de natation s'arrêtent donc aussi. On nous dit que les réparations coûtent un million de francs. Or, la Ville vient de dépenser le double pour un nouveau parking. Nous ne demandons ni un luxe ni un cadeau : nous demandons un service public. Nous proposons donc une solution simple : garder la piscine ouverte, mais avec des horaires réduits. Nous vous remercions de votre attention. L'Association des habitants du quartier";

/** Act 11: the model the learner imitates. Julie to a colleague. About 115 words. */
export const MESSAGE_TEXT =
  "Salut Mathieu, j'ai pris ma décision, et je voulais te l'expliquer avant de l'annoncer à l'équipe. On m'a proposé le poste à Québec, et j'ai longtemps hésité, car les deux offres étaient bonnes. Le salaire est moins élevé, mais le travail me plaît davantage. De plus, je pourrai rester près de ma famille. En effet, ma mère vit seule à Lévis, c'est-à-dire à dix minutes du nouveau bureau. J'ai donc accepté le poste. Je ne regrette ni mon choix ni ces années avec vous. Je commence le 3 mars, c'est-à-dire dans un mois. Je reste joignable par courriel ou par téléphone. Sinon, rien ne change pour le projet. Merci pour tout, et à bientôt. Julie";

/** The four moves the model makes, in order, for the task checklist. */
export const MESSAGE_MOVES = [
  'la décision, dite tout de suite',
  'les raisons, liées par car, de plus, en effet',
  "ce qui a fait hésiter, avec mais, puis la conclusion avec donc",
  'la suite et le mot de la fin, avec et ou ou',
] as const;
