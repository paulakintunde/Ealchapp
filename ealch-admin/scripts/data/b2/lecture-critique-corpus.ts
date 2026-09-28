// b2.24.l1 « Lire de façon critique » — the authored corpus, the imports,
// the anchor texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape, strategy variant)
// on top of B1-BUILD-PLAYBOOK.md, with the B2 rules of B2-BUILD-LOG.md
// (« Reading at B2 » and « What is different at B2 »).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later B2 lessons may import REFRAME from this file and
// quote it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME,
// LEVEL, E, ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   CRITICAL READING AT B2: GOING FROM UNDERSTANDING A TEXT TO JUDGING IT.
//   The B2 reading (CE) remediation target: a learner who fails a B2 reading
//   task in the Examiner is sent here.
//
//     act 1   the headline claims, the article proves less (the problem)
//     act 2   the thesis: topic vs claim, the concession before the claim
//     act 3   evidence vs assertion: figure, study, example, testimony,
//             authority, bare assertion; link vs cause; the sample
//     act 4   the unstated assumption: after vs because, the general rule,
//             the golden past, the false either/or
//     act 5   the writer's distance: conditionnel de distance, il semblerait
//             que, prétendument, soi-disant, à en croire, the quotation marks,
//             and the evaluative reporting verbs (affirmer, reconnaître,
//             prétendre, admettre, assurer, se targuer, démentir)
//     act 6   tone and irony: antiphrasis, ironic quotation marks,
//             exaggeration, the absurd comparison, the context that decides
//     act 7   who benefits: a press release and the news story about it; the
//             soft word that hides a cut; what the text leaves out
//     act 8   fact, opinion, interpretation (and the claim dressed as a fact),
//             on an advertisement
//     act 9   two texts, one topic: an official report extract and a blog
//     act 10  the exam: DELF B2 / TCF inference and stance questions, and
//             answering with a quotation
//     act 11  the task: a 150 to 200 word critical response to a tribune
//
//   NOT OWNED, CITED ONLY (all published in v76):
//     - reading for the gist, genre, standfirst, signposts, reference chains
//       and the first pass at fact / source / rumour / opinion are b1.37's
//       (« Lire sans tout comprendre »). Act 1 names it (« la leçon 37 du
//       B1 »), quotes its reframe and reuses its rows by id; act 5 goes past
//       its act 9 (selon, d'après, il paraît que).
//     - the conditional of hearsay is b1.08's (reframe quoted in act 5);
//       b1.34 « Les médias » owns the media vocabulary, checking a source and
//       « prendre une info avec des pincettes » (reframe quoted in act 5).
//     - concession as GRAMMAR (certes... mais, bien que) is b1.32's and
//       b2.16's; here it is read as the place a thesis hides (act 2).
//     - argumentation as WRITING (thesis, counterargument, rebuttal) is
//       b2.23's, written in parallel: this lesson never teaches how to build
//       an argument, only how to take one apart.
//     - listening for stance is b2.25's, written in parallel. The three
//       listenings here are practice on the ear, not the strategy.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `strategies-de-comprehension` (« Les stratégies de
//     compréhension », domain education, levelRange b1-b2, subThemes lire un
//     texte, écouter, deviner le sens) is IN THE SEED since v76. It holds 376
//     rows, ALL `fr.b1.*` (b1.37 at .1000-.1199, b1.38 at .1200-.1389), and
//     ZERO `fr.b2.*` rows (read 2026-09-27). The brief adds the sub-theme
//     « lire de façon critique »: a Postgres edit for the import step, not
//     for this file.
//
//  2. ID BLOCK: this lesson owns `fr.b2.strategies-de-comprehension.1400`
//     to `.1599` AND NOTHING ELSE. `.1000`-`.1389` are b1.37 and b1.38's
//     NUMBERS, but at level b1; the level is part of the id, so they cannot
//     collide, and the block starts at 1400 anyway by the brief. `.1600`-
//     `.1799` belongs to b2.25 (listening), written in parallel: not touched.
//     Used: `.1400`-`.1599`, all 200, in eleven act blocks (§H).
//
//  3. Every reused id in §F was read out of seed.json on 2026-09-27 and its
//     `fr` is copied verbatim wherever a section prints it, through `src()`.
//     b1.37's rows use the straight apostrophe; they are never quoted inside
//     the scenario, which uses the typographic ’ only.
//
//  4. NO AUTHORED ROW REPEATS A PUBLISHED HEADWORD (the flashcard-hub
//     duplicate rule). Every `fr` was folded and compared with the whole
//     seed; the one planned clash (« un échantillon »,
//     fr.b2.methode-scientifique.002) was avoided by authoring « un
//     échantillon de 1 840 élèves ».
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR. A real
//     /n/ or /m/ is written double where `hasPlainNasal` or
//     `hasPlainNasalFor` would otherwise read it as a nasal vowel:
//       symptôme     sehⁿp-TOMM        (1433, 1571)
//       Karim        ka-REEMM          (1559)
//       personne(s)  pehr-SONN         (1439, 1542, 1599)
//       jeunes       ZHUHNN            (1464, 1468)
//       téléphone    tay-lay-FONN      (1431, 1464, 1468, 1589)
//       piétonne     pyay-TONN         (1454, 1455)
//       semaine, prochaine, certaines, reprenne, moyenne, somme, bonne,
//       viennent, fonctionne: -MENN, -SHENN, -tenn, -PRENN, -YENN, SOMM,
//       bonn, vyenn, -SYONN
//     Every consonant doubled here is really pronounced. No U+203F tie
//     anywhere, in a respelling OR an IPA field.
//
//  6. THE ANCHOR TEXTS IN §I ARE AUTHORED, NOT QUOTED. Every person,
//     organisation, company, study and figure is invented: l'Institut
//     Morphée, Somnéa, l'Observatoire de la santé urbaine de Sherbrooke,
//     Châtel-sur-Broye, Belmont-sur-Rivière, Bâtiments Rivard et fils,
//     Rochemont, TRL, Mesnil-sur-Lesse, Nuage+, Montval, Paylo, l'Institut
//     Carrel. Real places appear only as places (Lyon, Sherbrooke, Namur,
//     Bordeaux, Nantes). No real current event is stated as fact, and the
//     tribune of act 11 names no country.
//
//  7. APOSTROPHES: every authored French string uses the typographic ’, so
//     the scenario never mixes ’ and ' (the app check).
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b2.24',
  seq: 24,
  title: 'Critical Reading',
  sub: 'Lire de façon critique',
  canDo: 'Can identify the claim of a B2 text, tell its evidence from its assertions, bring out its unstated assumptions, read its tone, irony and the writer’s distance, ask who benefits, compare two texts on one topic, and answer inference and stance questions with a quotation',
  prereqUnitIds: ['b1.37', 'b1.34'],
} as const;

export const LESSON_ID = 'b2.24.l1';
export const THEME = 'strategies-de-comprehension';
export const LEVEL = 'b2' as const;

/** ONE block, by the brief. b2.25 owns 1600-1799 in the same theme. */
export const ID_RANGES = [[1400, 1599]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/** b1.37's rows, published in v76, named by their full id. */
export const B137 = (n: number) => `fr.b1.${THEME}.${n}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B1 units are in the seed since v76, and `unitRef` would label them in
 *  English (« lesson 37 in B1 »). A B2 learner surface is French, so B1 and
 *  B2 citations are built here in French, from the SEED's `seq` for B1 and
 *  from the plan for B2 (no b2 unit exists yet). Never a raw id on screen.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

/** TODO(import): drop once the b2 units are rows in `content_units`. */
const B2_SEQ_FROM_PLAN: Record<string, number> = {
  'b2.16': 16, 'b2.22': 22, 'b2.23': 23, 'b2.24': 24, 'b2.25': 25, 'b2.26': 26,
};

export function refFr(unitId: string): string {
  if (unitId.startsWith('b1.')) {
    const n = SEQ.get(unitId);
    if (!n) throw new Error(`b2.24: ${unitId} is not in the seed`);
    return `la leçon ${n} du B1`;
  }
  const planned = B2_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B2` : unitRef(unitId);
}

export const CONDITIONNEL_UNIT = 'b1.08';
export const CONCESSION_UNIT = 'b1.32';
export const MEDIAS_UNIT = 'b1.34';
export const LECTURE_UNIT = 'b1.37';
export const COURRIELS_UNIT = 'b1.39';
export const ARGUMENTATION_UNIT = 'b2.23';
export const ECOUTE_B2_UNIT = 'b2.25';

export const CONDITIONNEL_REF = refFr(CONDITIONNEL_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const MEDIAS_REF = refFr(MEDIAS_UNIT);
export const LECTURE_REF = refFr(LECTURE_UNIT);
export const ARGUMENTATION_REF = refFr(ARGUMENTATION_UNIT);
export const ECOUTE_B2_REF = refFr(ECOUTE_B2_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B137_REFRAME, REFRAME_EN as B137_REFRAME_EN } from '../b1/strategies-lecture-corpus.ts';
export { REFRAME as B134_REFRAME } from '../b1/medias-corpus.ts';
export { REFRAME as B108_REFRAME } from '../b1/conditionnel-present-corpus.ts';
export { REFRAME as B132_REFRAME } from '../b1/concession-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE MAGNIFYING GLASS. b1.37's lamp lit what carries the meaning, so the
 *  learner understood a text above their level. The glass comes second: it
 *  is held over a text ALREADY understood, and it separates the big claim
 *  from the small things that hold it up, or do not. A headline under the
 *  glass shrinks to what its study can carry; a « tout le monde le sait »
 *  turns out to rest on nothing; a soft word turns out to cover a cut.
 *
 *  It is NOT « do not believe what you read ». The lesson asks the learner
 *  to REPORT a stance faithfully (act 5, act 10) and to name a solid
 *  argument as solid (act 11's rubric): cynicism fails a B2 paper as surely
 *  as credulity does.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Ce qu’un texte affirme n’est pas ce qu’il prouve.';
export const REFRAME_EN = 'What a text claims is not what it proves.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Ne crois pas tout ce que tu lis.',
    why: 'It licenses cynicism, which fails a B2 paper as surely as credulity: acts 5 and 10 ask the learner to report a stance faithfully, and act 11 rewards naming a solid argument as solid. Doubting everything is not reading.',
  },
  {
    text: 'Qui parle, et pourquoi ?',
    why: 'True for acts 5 and 7 and silent on acts 2, 3, 4 and 6: it does not find a thesis, weigh a sample, bring out an assumption or catch irony. It is also b1.34’s question, already asked at B1.',
  },
  {
    text: 'Cherche la preuve.',
    why: 'The best line for act 3 and wrong for act 6, where the problem is not a missing proof but a sentence that means its opposite, and for act 9, where both texts share the same figures and differ only in what they draw from them.',
  },
  {
    text: 'Le sens d’abord, le jugement ensuite.',
    why: 'An echo of b1.37’s reframe that keeps its order and loses the point: the lesson is not a second pass for its own sake, it is the gap between the claim and its support. Quoting b1.37 in act 1 is enough.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-27 and its French is in the
 *  trailing comment. `NOT_DECK_ABLE` rows carry no `flashcard` drill;
 *  `NOT_SPEAKABLE` adds the rows with no `voiceflash`, which a `practice`
 *  speak section may never name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    B137(1005),                      // Le sens d'abord, les mots ensuite.  (flashcard only)
    B137(1006),                      // Je lis d'abord le titre et le chapeau.
    B137(1009),                      // Le titre dit déjà l'essentiel.
  ],
  act2: [
    B137(1144),                      // L'auteur est pour, mais seulement si on l'adapte à chaque métier.
    B137(1132),                      // Pourtant, il faut rester prudent.
  ],
  act3: [
    'fr.b1.journalisme.1141',        // croiser les sources
    'fr.b1.journalisme.1162',        // Il me semble que l’article oublie une partie de l’histoire.
  ],
  act4: [] as string[],
  act5: [
    B137(1161),                      // Selon la Région, les accidents ont baissé de 15 %.
    B137(1162),                      // D'après une association, ce chiffre serait plus faible.
    'fr.b1.journalisme.1157',        // prendre une info avec des pincettes
    'fr.b1.journalisme.1183',        // Le texte dit « selon nos sources », mais il n’en nomme aucune.
  ],
  act6: [] as string[],
  act7: [] as string[],
  act8: [
    B137(1171),                      // Un fait se vérifie. Une opinion se discute.  (flashcard only)
    B137(1163),                      // Je trouve que c'est une bonne chose.
  ],
  act9: [
    B137(1142),                      // en revanche
  ],
  act10: [] as string[],
  act11: [
    B137(1199),                      // Ce n'est pas un fait, c'est son avis.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `voiceflash` in the seed: never in a `practice` speak section. Both
 *  are flashcard-only rule cards, so they stay deck-able. */
export const NOT_SPEAKABLE = [
  B137(1005),                        // flashcard
  B137(1171),                        // flashcard
];

/** No `flashcard` drill in the seed: nameable, never releasable. None here. */
export const NOT_DECK_ABLE: string[] = [];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB, NOT FORMS: a line the
 *  learner meets in a text (a headline, a hedged claim, an ironic aside, a
 *  soft word), a question a critical reader asks a text, or a line of a
 *  critical response the learner can reuse in the task. Each act also has
 *  one flashcard-only rule card (`rule()`), whose prompt is a situation and
 *  whose `fr` is the act's move.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['lecture-critique'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A rule card: `prompt` is the situation, `fr` the move. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE TITRE AFFIRME ───────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1400, 'La sieste au bureau, nouvelle arme de la productivité ?', 'Napping at the office, the new weapon of productivity?', '/la sjɛst o by.ʁo nu.vɛl aʁm də la pʁɔ.dyk.ti.vi.te/', 'la SYEST oh bü-ROH noo-vel ARM duh la pro-dük-tee-vee-TAY', ['titre', 'sieste']),
  sent(1401, 'Une sieste de vingt minutes augmenterait la productivité de 30 %.', 'A twenty-minute nap would supposedly raise productivity by 30%.', '/yn sjɛst də vɛ̃ mi.nyt ɔɡ.mɑ̃t.ʁɛ la pʁɔ.dyk.ti.vi.te də tʁɑ̃t puʁ sɑ̃/', 'ün SYEST duh vehⁿ mee-NÜT og-mahⁿt-REH la pro-dük-tee-vee-TAY duh trahⁿt poor SAHⁿ', ['chapeau', 'sieste']),
  sent(1402, 'L’étude a été financée par un fabricant de capsules de repos.', 'The study was funded by a manufacturer of rest pods.', '/le.tyd a e.te fi.nɑ̃.se paʁ œ̃ fa.bʁi.kɑ̃ də kap.syl də ʁə.po/', 'lay-TÜD a ay-tay fee-nahⁿ-SAY par uhⁿ fa-bree-KAHⁿ duh kap-SÜL duh ruh-POH', ['interet', 'sieste'], FCVDR),
  sent(1403, 'Les salariés ont noté eux-mêmes leur forme.', 'The employees rated their own condition themselves.', '/le sa.la.ʁje ɔ̃ nɔ.te ø mɛm lœʁ fɔʁm/', 'lay sa-la-RYAY ohⁿ no-TAY eu-MEM luhr FORM', ['preuve', 'sieste'], FCVDR),
  sent(1404, 'Une étude montre que la sieste augmente la productivité de 30 %.', 'A study shows that napping raises productivity by 30%.', '/yn e.tyd mɔ̃tʁ kə la sjɛst ɔɡ.mɑ̃t la pʁɔ.dyk.ti.vi.te də tʁɑ̃t puʁ sɑ̃/', 'ün ay-TÜD MOHⁿTR kuh la SYEST og-MAHⁿT la pro-dük-tee-vee-TAY duh trahⁿt poor SAHⁿ', ['naif', 'sieste']),
  sent(1405, 'Selon une étude payée par un fabricant de capsules, la sieste aiderait, mais les salariés se sont notés eux-mêmes.', 'According to a study paid for by a pod maker, napping would help, but the employees rated themselves.', '/sə.lɔ̃ yn e.tyd pɛ.je paʁ œ̃ fa.bʁi.kɑ̃ də kap.syl la sjɛst ɛd.ʁɛ mɛ le sa.la.ʁje sə sɔ̃ nɔ.te ø mɛm/', 'suh-lohⁿ ün ay-tüd peh-YAY par uhⁿ fa-bree-kahⁿ duh kap-SÜL la SYEST ed-REH meh lay sa-la-RYAY suh sohⁿ no-TAY eu-MEM', ['critique', 'sieste']),
  sent(1406, 'Le titre affirme ; l’article nuance.', 'The headline asserts; the article qualifies.', '/lə titʁ a.fiʁm laʁ.tikl nɥɑ̃s/', 'luh TEETR a-FEERM lar-TEEKL NWAHⁿSS', ['titre'], FCVDR),
  sent(1407, 'Qui le dit ?', 'Who says so?', '/ki lə di/', 'kee luh DEE', ['question']),
  sent(1408, 'Sur quelle preuve ?', 'On what evidence?', '/syʁ kɛl pʁœv/', 'sür kel PRUHV', ['question']),
  sent(1409, 'Qui a payé l’étude ?', 'Who paid for the study?', '/ki a pɛ.je le.tyd/', 'kee a peh-yay lay-TÜD', ['question', 'interet']),
  sent(1410, 'Qu’est-ce que le texte affirme vraiment ?', 'What does the text really claim?', '/kɛs kə lə tɛkst a.fiʁm vʁɛ.mɑ̃/', 'kess kuh luh TEKST a-feerm vreh-MAHⁿ', ['question', 'these']),
  sent(1411, 'Le chiffre de 30 % est difficile à prendre au sérieux.', 'The 30% figure is hard to take seriously.', '/lə ʃifʁ də tʁɑ̃t puʁ sɑ̃ ɛ di.fi.sil a pʁɑ̃dʁ o se.ʁjø/', 'luh SHEEFR duh trahⁿt poor SAHⁿ eh dee-fee-SEEL a prahⁿdr oh say-RYEU', ['preuve', 'sieste']),
  sent(1412, 'J’ai compris le texte ; maintenant, je le juge.', 'I have understood the text; now I judge it.', '/ʒe kɔ̃.pʁi lə tɛkst mɛ̃t.nɑ̃ ʒə lə ʒyʒ/', 'zhay kohⁿ-pree luh TEKST mehⁿt-NAHⁿ zhuh luh ZHÜZH', ['methode'], FCVDR),
  sent(1413, REFRAME, REFRAME_EN, '/sə kœ̃ tɛkst a.fiʁm nɛ pa sə kil pʁuv/', 'suh kuhⁿ TEKST a-FEERM neh pa suh keel PROOV', ['regle'], FC,
    rule('Un titre dit « une étude montre ». As-tu une preuve ?', 'Pas encore : ce qu’un texte affirme n’est pas ce qu’il prouve. Cherche qui le dit, et sur quoi.')),
  sent(1414, 'De courtes pauses peuvent améliorer l’attention.', 'Short breaks can improve attention.', '/də kuʁt poz pœv a.me.ljɔ.ʁe la.tɑ̃.sjɔ̃/', 'duh koort POHZ puhv a-may-lyo-ray la-tahⁿ-SYOHⁿ', ['preuve', 'sieste']),
];

/* ── ACT 2 · LA THÈSE ───────────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1415, 'Notes : le thermomètre n’est pas la fièvre', 'Grades: the thermometer is not the fever', '/nɔt lə tɛʁ.mɔ.mɛtʁ nɛ pa la fjɛvʁ/', 'NOT luh tehr-mo-METR neh pa la FYEVR', ['titre', 'notes']),
  sent(1416, 'Faut-il supprimer les notes à l’école ?', 'Should grades be abolished at school?', '/fo.til sy.pʁi.me le nɔt a le.kɔl/', 'foh-teel sü-pree-MAY lay NOT a lay-KOL', ['sujet', 'notes']),
  sent(1417, 'Le problème n’est pas la note, mais ce qu’on en fait.', 'The problem is not the grade but what is done with it.', '/lə pʁɔ.blɛm nɛ pa la nɔt mɛ sə kɔ̃.nɑ̃ fɛ/', 'luh pro-BLEM neh pa la NOT meh suh kohⁿ-nahⁿ FEH', ['these', 'notes'], FCVDR),
  sent(1418, 'Gardons les notes, et rendons-les bavardes.', 'Let us keep grades, and make them talk.', '/ɡaʁ.dɔ̃ le nɔt e ʁɑ̃.dɔ̃ le ba.vaʁd/', 'gar-dohⁿ lay NOT ay rahⁿ-dohⁿ-lay ba-VARD', ['these', 'notes']),
  sent(1419, 'Tout cela est vrai.', 'All of that is true.', '/tu sə.la ɛ vʁɛ/', 'too suh-la eh VREH', ['concession', 'notes']),
  sent(1420, 'On aurait tort, pourtant, d’en conclure qu’il faut casser le thermomètre.', 'Yet it would be wrong to conclude that the thermometer must be broken.', '/ɔ̃.no.ʁɛ tɔʁ puʁ.tɑ̃ dɑ̃ kɔ̃.klyʁ kil fo ka.se lə tɛʁ.mɔ.mɛtʁ/', 'oh-noh-reh TOR poor-TAHⁿ dahⁿ kohⁿ-KLÜR keel foh ka-say luh tehr-mo-METR', ['concession', 'notes']),
  phrase(1421, 'le sujet d’un texte', 'the topic of a text', '/lə sy.ʒɛ dœ̃ tɛkst/', 'luh sü-zheh duhⁿ TEKST', ['sujet']),
  phrase(1422, 'la thèse d’un auteur', 'a writer’s thesis, their claim', '/la tɛz dœ̃.no.tœʁ/', 'la TEZ duhⁿ-noh-TUHR', ['these']),
  sent(1423, 'Le sujet, ce sont les notes ; la thèse, c’est qu’il faut les garder avec un commentaire.', 'The topic is grades; the thesis is that they should be kept, with a comment.', '/lə sy.ʒɛ sə sɔ̃ le nɔt la tɛz sɛ kil fo le ɡaʁ.de a.vɛk œ̃ kɔ.mɑ̃.tɛʁ/', 'luh sü-ZHEH suh sohⁿ lay NOT la TEZ seh keel foh lay gar-DAY a-vek uhⁿ ko-mahⁿ-TEHR', ['these', 'sujet', 'notes']),
  sent(1424, 'L’auteure soutient qu’il faut garder les notes.', 'The writer argues that grades should be kept.', '/lo.tœʁ su.tjɛ̃ kil fo ɡaʁ.de le nɔt/', 'loh-TUHR soo-TYEHⁿ keel foh gar-day lay NOT', ['these', 'reponse'], FCVDR),
  sent(1425, 'Certes, les notes humilient parfois, mais elles informent.', 'Admittedly grades sometimes humiliate, but they inform.', '/sɛʁt le nɔt y.mi.li paʁ.fwa mɛ.zɛl ɛ̃.fɔʁm/', 'SEHRT lay NOT ü-mee-lee par-FWA meh-zel ehⁿ-FORM', ['concession', 'notes']),
  sent(1426, 'La thèse arrive souvent après la concession.', 'The thesis often comes after the concession.', '/la tɛz a.ʁiv su.vɑ̃ a.pʁɛ la kɔ̃.sɛ.sjɔ̃/', 'la TEZ a-reev soo-VAHⁿ a-preh la kohⁿ-seh-SYOHⁿ', ['regle', 'these'], FC,
    rule('Un texte commence par « Tout cela est vrai. » As-tu trouvé la thèse ?', 'Pas encore : c’est une concession. La thèse arrive souvent juste après, avec pourtant, mais ou toutefois.')),
  sent(1427, 'Selon la chroniqueuse, une note sans commentaire ne dit rien.', 'According to the columnist, a grade without a comment says nothing.', '/sə.lɔ̃ la kʁɔ.ni.køz yn nɔt sɑ̃ kɔ.mɑ̃.tɛʁ nə di ʁjɛ̃/', 'suh-lohⁿ la kro-nee-KEUZ ün NOT sahⁿ ko-mahⁿ-TEHR nuh dee RYEHⁿ', ['reponse', 'notes']),
  sent(1428, 'Quelle est la thèse de ce texte ?', 'What is the thesis of this text?', '/kɛ.lɛ la tɛz də sə tɛkst/', 'keh-leh la TEZ duh suh TEKST', ['question', 'these'], FCVDR),
  sent(1429, 'Le vélo en hiver n’est pas une folie, à condition d’équiper les pistes.', 'Cycling in winter is not madness, provided the lanes are equipped.', '/lə ve.lo ɑ̃.ni.vɛʁ nɛ pa.zyn fɔ.li a kɔ̃.di.sjɔ̃ de.ki.pe le pist/', 'luh vay-LOH ahⁿ-nee-VEHR neh pa-zün fo-LEE a kohⁿ-dee-SYOHⁿ day-kee-PAY lay PEEST', ['these']),
  sent(1430, 'Le télétravail n’isole pas les salariés ; c’est l’absence de règles qui les isole.', 'Remote work does not isolate employees; the lack of rules does.', '/lə te.le.tʁa.vaj ni.zɔl pa le sa.la.ʁje sɛ lap.sɑ̃s də ʁɛɡl ki le.zi.zɔl/', 'luh tay-lay-tra-VAHY nee-zol pa lay sa-la-RYAY seh lap-SAHⁿSS duh REGL kee lay-zee-ZOL', ['these']),
  sent(1431, 'Il ne faut pas interdire les téléphones, mais apprendre à s’en servir.', 'Phones should not be banned; pupils should learn to use them.', '/il nə fo pa.zɛ̃.tɛʁ.diʁ le te.le.fɔn mɛ.za.pʁɑ̃dʁ a sɑ̃ sɛʁ.viʁ/', 'eel nuh foh pa-zehⁿ-tehr-DEER lay tay-lay-FONN meh-za-PRAHⁿDR a sahⁿ sehr-VEER', ['these']),
];

/* ── ACT 3 · PREUVE OU AFFIRMATION ──────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1432, 'L’étude montre un lien, pas une cause.', 'The study shows a link, not a cause.', '/le.tyd mɔ̃tʁ œ̃ ljɛ̃ pa.zyn koz/', 'lay-TÜD mohⁿtr uhⁿ LYEHⁿ pa-zün KOHZ', ['preuve', 'parcs'], FCVDR),
  sent(1433, 'Les symptômes sont déclarés par les élèves eux-mêmes.', 'The symptoms are self-reported by the pupils.', '/le sɛ̃p.tom sɔ̃ de.kla.ʁe paʁ le.ze.lɛv ø mɛm/', 'lay sehⁿp-TOMM sohⁿ day-kla-RAY par lay-zay-LEV eu-MEM', ['preuve', 'parcs']),
  sent(1434, 'Les quartiers riches en parcs sont souvent plus aisés.', 'Neighbourhoods rich in parks are often better off.', '/le kaʁ.tje ʁi.ʃɑ̃ paʁk sɔ̃ su.vɑ̃ ply.zɛ.ze/', 'lay kar-TYAY ree-shahⁿ PARK sohⁿ soo-vahⁿ plü-zeh-ZAY', ['preuve', 'parcs']),
  sent(1435, 'Ces résultats ne suffisent pas à recommander une politique.', 'These results are not enough to recommend a policy.', '/se ʁe.zyl.ta nə sy.fiz pa.za ʁə.kɔ.mɑ̃.de yn pɔ.li.tik/', 'say ray-zül-TA nuh sü-FEEZ pa-za ruh-ko-mahⁿ-DAY ün po-lee-TEEK', ['preuve', 'parcs']),
  sent(1436, 'Les parcs réduisent l’anxiété des ados, prouve une étude.', 'Parks reduce teenagers’ anxiety, a study proves.', '/le paʁk ʁe.dɥiz lɑ̃k.sje.te de.za.do pʁuv y.ne.tyd/', 'lay PARK ray-dweez lahⁿk-syay-TAY day-za-DOH proov ü-nay-TÜD', ['titre', 'parcs']),
  phrase(1437, 'un échantillon de 1 840 élèves', 'a sample of 1,840 pupils', '/œ̃.ne.ʃɑ̃.ti.jɔ̃ də mil ɥi sɑ̃ ka.ʁɑ̃.te.lɛv/', 'uhⁿ-nay-shahⁿ-tee-YOHⁿ duh meel wee sahⁿ ka-rahⁿ-tay-LEV', ['preuve', 'parcs']),
  phrase(1438, 'une corrélation, pas une causalité', 'a correlation, not causation', '/yn kɔ.ʁe.la.sjɔ̃ pa.zyn ko.za.li.te/', 'ün ko-ray-la-SYOHⁿ pa-zün koh-za-lee-TAY', ['preuve']),
  sent(1439, 'Sur combien de personnes ?', 'On how many people?', '/syʁ kɔ̃.bjɛ̃ də pɛʁ.sɔn/', 'sür kohⁿ-byehⁿ duh pehr-SONN', ['question', 'preuve']),
  sent(1440, 'Tout le monde sait que les écrans rendent les enfants agressifs.', 'Everyone knows screens make children aggressive.', '/tu lə mɔ̃d sɛ kə le.ze.kʁɑ̃ ʁɑ̃d le.zɑ̃.fɑ̃ a.ɡʁe.sif/', 'too luh MOHⁿD seh kuh lay-zay-KRAHⁿ rahⁿd lay-zahⁿ-fahⁿ a-gray-SEEF', ['affirmation']),
  sent(1441, 'Il est évident que la ville doit agir.', 'It is obvious that the city must act.', '/i.lɛ.te.vi.dɑ̃ kə la vil dwa.ta.ʒiʁ/', 'ee-leh-tay-vee-DAHⁿ kuh la VEEL dwa-ta-ZHEER', ['affirmation']),
  sent(1442, 'Selon une étude menée auprès de 1 840 élèves, l’écart est de huit points.', 'According to a study of 1,840 pupils, the gap is eight points.', '/sə.lɔ̃ yn e.tyd mə.ne o.pʁɛ də mil ɥi sɑ̃ ka.ʁɑ̃.te.lɛv le.kaʁ ɛ də ɥi pwɛ̃/', 'suh-lohⁿ ün ay-tüd muh-NAY oh-preh duh meel wee sahⁿ ka-rahⁿ-tay-LEV lay-KAR eh duh wee PWEHⁿ', ['preuve', 'parcs']),
  sent(1443, 'Mon voisin a arrêté le sucre, et il dort mieux.', 'My neighbour gave up sugar, and he sleeps better.', '/mɔ̃ vwa.zɛ̃ a a.ʁe.te lə sykʁ e il dɔʁ mjø/', 'mohⁿ vwa-ZEHⁿ a a-reh-tay luh SÜKR ay eel dor MYEU', ['exemple']),
  sent(1444, 'Un exemple n’est pas une preuve.', 'An example is not proof.', '/œ̃.nɛɡ.zɑ̃pl nɛ pa.zyn pʁœv/', 'uhⁿ-neg-ZAHⁿPL neh pa-zün PRUHV', ['regle', 'exemple'], FC,
    rule('« Mon voisin a arrêté le sucre, et il dort mieux. » Est-ce une preuve ?', 'Non : c’est un exemple, un seul cas. Il illustre une idée, il ne la prouve pas.')),
  phrase(1445, 'une affirmation sans preuve', 'a claim with no evidence', '/y.na.fiʁ.ma.sjɔ̃ sɑ̃ pʁœv/', 'ü-na-feer-ma-SYOHⁿ sahⁿ PRUHV', ['affirmation']),
  sent(1446, 'Bonne nouvelle : les parcs protègent nos ados de l’anxiété.', 'Good news: parks protect our teenagers from anxiety.', '/bɔn nu.vɛl le paʁk pʁɔ.tɛʒ no.za.do də lɑ̃k.sje.te/', 'bonn noo-VEL lay PARK pro-TEZH noh-za-DOH duh lahⁿk-syay-TAY', ['radio', 'parcs']),
  sent(1447, 'C’est ce que montre une étude réalisée à Sherbrooke.', 'That is what a study carried out in Sherbrooke shows.', '/sɛs kə mɔ̃.tʁy.ne.tyd ʁe.a.li.ze a ʃɛʁ.bʁuk/', 'sess kuh mohⁿ-trü-nay-TÜD ray-a-lee-ZAY a shehr-BROOK', ['radio', 'parcs']),
  sent(1448, 'Attention : l’étude observe un lien, elle ne prouve pas que le parc soit la cause.', 'Careful: the study observes a link; it does not prove the park is the cause.', '/a.tɑ̃.sjɔ̃ le.tyd ɔp.sɛʁv œ̃ ljɛ̃ ɛl nə pʁuv pa kə lə paʁk swa la koz/', 'a-tahⁿ-SYOHⁿ lay-TÜD op-sehrv uhⁿ LYEHⁿ el nuh proov pa kuh luh PARK swa la KOHZ', ['radio', 'parcs']),
  sent(1449, 'Les familles qui vivent près d’un parc ont souvent plus de moyens.', 'Families who live near a park often have more money.', '/le fa.mij ki viv pʁɛ dœ̃ paʁk ɔ̃ su.vɑ̃ ply də mwa.jɛ̃/', 'lay fa-MEEY kee veev preh duhⁿ PARK ohⁿ soo-vahⁿ plü duh mwa-YEHⁿ', ['radio', 'parcs']),
  sent(1450, 'Et les élèves ont décrit eux-mêmes leur humeur.', 'And the pupils described their mood themselves.', '/e le.ze.lɛv ɔ̃ de.kʁi ø mɛm lœ.ʁy.mœʁ/', 'ay lay-zay-LEV ohⁿ day-KREE eu-MEM luh-rü-MUHR', ['radio', 'parcs']),
  sent(1451, 'Tous les experts sont d’accord : il faut planter des arbres.', 'All the experts agree: we must plant trees.', '/tu le.zɛks.pɛʁ sɔ̃ da.kɔʁ il fo plɑ̃.te de.zaʁbʁ/', 'too lay-zeks-PEHR sohⁿ da-KOR eel foh plahⁿ-tay day-ZARBR', ['radio', 'affirmation']),
  sent(1452, 'En réalité, les auteurs demandent d’abord une deuxième étude.', 'In fact, the authors first call for a second study.', '/ɑ̃ ʁe.a.li.te le.zo.tœʁ də.mɑ̃d da.bɔʁ yn dø.zjɛm e.tyd/', 'ahⁿ ray-a-lee-TAY lay-zoh-TUHR duh-mahⁿd da-BOR ün deu-ZYEM ay-TÜD', ['radio', 'parcs']),
  sent(1453, 'Moi, je trouve qu’un parc ne remplace pas un psychologue.', 'Personally, I think a park does not replace a psychologist.', '/mwa ʒə tʁuv kœ̃ paʁk nə ʁɑ̃.plas pa.zœ̃ psi.kɔ.lɔɡ/', 'MWA zhuh troov kuhⁿ PARK nuh rahⁿ-plass pa-zuhⁿ psee-ko-LOG', ['radio', 'opinion']),
];

/* ── ACT 4 · CE QUE LE TEXTE SUPPOSE ────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1454, 'Depuis que la rue est piétonne, trois commerces ont fermé.', 'Since the street went pedestrian, three shops have closed.', '/də.pɥi kə la ʁy ɛ pje.tɔn tʁwa kɔ.mɛʁs ɔ̃ fɛʁ.me/', 'duh-pwee kuh la RÜ eh pyay-TONN trwa ko-MEHRSS ohⁿ fehr-MAY', ['lettre', 'cause']),
  sent(1455, 'Rien ne prouve que la rue piétonne en soit la cause.', 'Nothing proves that the pedestrian street is the cause.', '/ʁjɛ̃ nə pʁuv kə la ʁy pje.tɔn ɑ̃ swa la koz/', 'ryehⁿ nuh PROOV kuh la rü pyay-TONN ahⁿ swa la KOHZ', ['reponse', 'cause'], FCVDR),
  sent(1456, 'L’auteur suppose que les clients viennent en voiture.', 'The writer assumes customers come by car.', '/lo.tœʁ sy.poz kə le kli.jɑ̃ vjɛn ɑ̃ vwa.tyʁ/', 'loh-TUHR sü-pohz kuh lay klee-YAHⁿ vyenn ahⁿ vwa-TÜR', ['reponse', 'presuppose']),
  sent(1457, 'Une ville sans voitures est une ville sans vie.', 'A city without cars is a city without life.', '/yn vil sɑ̃ vwa.tyʁ ɛ.tyn vil sɑ̃ vi/', 'ün VEEL sahⁿ vwa-TÜR eh-tün VEEL sahⁿ VEE', ['lettre', 'slogan']),
  phrase(1458, 'un présupposé', 'an unstated assumption', '/œ̃ pʁe.sy.po.ze/', 'uhⁿ pray-sü-poh-ZAY', ['presuppose']),
  sent(1459, 'Ce raisonnement repose sur une idée qui n’est jamais dite.', 'This reasoning rests on an idea that is never stated.', '/sə ʁɛ.zɔn.mɑ̃ ʁə.poz sy.ʁy.ni.de ki nɛ ʒa.mɛ dit/', 'suh reh-zonn-MAHⁿ ruh-POHZ sü-rü-nee-DAY kee neh zha-meh DEET', ['presuppose'], FCVDR),
  sent(1460, 'Après, ce n’est pas forcément à cause de.', 'After does not necessarily mean because of.', '/a.pʁɛ sə nɛ pa fɔʁ.se.mɑ̃ a koz də/', 'a-PREH suh neh pa for-say-MAHⁿ a KOHZ duh', ['regle', 'cause'], FC,
    rule('« Depuis que la rue est piétonne, trois commerces ont fermé. » La rue est-elle la cause ?', 'Peut-être, peut-être pas : après, ce n’est pas forcément à cause de. Cherche les autres causes possibles.')),
  sent(1461, 'Il suppose que ce qui était vrai il y a vingt ans l’est encore.', 'He assumes that what was true twenty years ago still is.', '/il sy.poz kə sə ki e.tɛ vʁɛ i.li.ja vɛ̃.tɑ̃ lɛ.tɑ̃.kɔʁ/', 'eel sü-POHZ kuh suh kee ay-teh VREH ee-lee-ya vehⁿ-TAHⁿ leh-tahⁿ-KOR', ['reponse', 'presuppose']),
  sent(1462, 'Soit on rouvre la rue, soit le centre meurt.', 'Either the street reopens, or the centre dies.', '/swa ɔ̃ ʁuvʁ la ʁy swa lə sɑ̃tʁ mœʁ/', 'swa ohⁿ ROOVR la RÜ swa luh SAHⁿTR MUHR', ['dilemme']),
  sent(1463, 'Il existe sans doute d’autres solutions.', 'There are probably other solutions.', '/i.lɛɡ.zist sɑ̃ dut do.tʁə sɔ.ly.sjɔ̃/', 'ee-leg-ZEEST sahⁿ DOOT doh-truh so-lü-SYOHⁿ', ['reponse', 'dilemme']),
  sent(1464, 'Tous les jeunes passent leur vie sur leur téléphone.', 'All young people spend their lives on their phones.', '/tu le ʒœn pas lœʁ vi syʁ lœʁ te.le.fɔn/', 'too lay ZHUHNN pass luhr VEE sür luhr tay-lay-FONN', ['generalisation']),
  sent(1465, 'Quelle idée l’auteur tient-il pour acquise ?', 'What idea does the writer take for granted?', '/kɛ.li.de lo.tœʁ tjɛ̃.til pu.ʁa.kiz/', 'keh-lee-DAY loh-TUHR tyehⁿ-TEEL poo-ra-KEEZ', ['question', 'presuppose'], FCVDR),
  sent(1466, 'Le texte ne le dit pas, mais il le suppose.', 'The text does not say it, but it assumes it.', '/lə tɛkst nə lə di pa mɛ il lə sy.poz/', 'luh TEKST nuh luh dee PA meh eel luh sü-POHZ', ['regle', 'presuppose'], FC,
    rule('Où se cache un présupposé ?', 'Dans ce que le texte tient pour acquis sans le dire. Demande-toi : pour que cet argument marche, que faut-il croire ?')),
  sent(1467, 'La lettre repose sur l’idée que les piétons n’achètent rien.', 'The letter rests on the idea that pedestrians buy nothing.', '/la lɛtʁ ʁə.poz syʁ li.de kə le pje.tɔ̃ na.ʃɛt ʁjɛ̃/', 'la LETR ruh-POHZ sür lee-DAY kuh lay pyay-TOHⁿ na-shet RYEHⁿ', ['reponse', 'presuppose']),
  sent(1468, 'Beaucoup de jeunes passent plusieurs heures par jour sur leur téléphone.', 'Many young people spend several hours a day on their phone.', '/bo.ku də ʒœn pas ply.zjœ.zœʁ paʁ ʒuʁ syʁ lœʁ te.le.fɔn/', 'boh-koo duh ZHUHNN pass plü-zyuh-ZUHR par ZHOOR sür luhr tay-lay-FONN', ['generalisation']),
  sent(1469, 'Le lecteur regrette la rue d’avant, mais les habitudes ont changé.', 'The reader misses the street as it was, but habits have changed.', '/lə lɛk.tœʁ ʁə.ɡʁɛt la ʁy da.vɑ̃ mɛ le.za.bi.tyd ɔ̃ ʃɑ̃.ʒe/', 'luh lek-TUHR ruh-GRET la rü da-VAHⁿ meh lay-za-bee-TÜD ohⁿ shahⁿ-ZHAY', ['reponse', 'passe']),
];

/* ── ACT 5 · LA DISTANCE DE L’AUTEUR ────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1470, 'La rénovation aurait coûté deux fois plus que prévu.', 'The renovation reportedly cost twice as much as planned.', '/la ʁe.nɔ.va.sjɔ̃ o.ʁɛ ku.te dø fwa plys kə pʁe.vy/', 'la ray-no-va-SYOHⁿ oh-reh koo-TAY deu fwa plüss kuh pray-VÜ', ['distance', 'piscine'], FCVDR),
  sent(1471, 'Selon des documents consultés par notre rédaction, la facture atteindrait 7,8 millions.', 'According to documents seen by our newsroom, the bill would reach 7.8 million.', '/sə.lɔ̃ de dɔ.ky.mɑ̃ kɔ̃.syl.te paʁ nɔtʁ ʁe.dak.sjɔ̃ la fak.tyʁ a.tɛ̃.dʁɛ sɛt viʁ.ɡyl ɥi mi.ljɔ̃/', 'suh-lohⁿ day do-kü-mahⁿ kohⁿ-sül-TAY par notr ray-dak-SYOHⁿ la fak-TÜR a-tehⁿ-DREH set veer-gül wee mee-LYOHⁿ', ['distance', 'piscine']),
  sent(1472, 'Le maire reconnaît un dépassement, qu’il juge « raisonnable ».', 'The mayor admits an overrun, which he calls "reasonable".', '/lə mɛʁ ʁə.kɔ.nɛ œ̃ de.pas.mɑ̃ kil ʒyʒ ʁɛ.zɔ.nabl/', 'luh MEHR ruh-ko-NEH uhⁿ day-pass-MAHⁿ keel zhüzh reh-zo-NABL', ['distance', 'piscine']),
  sent(1473, 'Le contrat a été attribué sans appel d’offres, prétendument pour gagner du temps.', 'The contract was awarded without a tender, supposedly to save time.', '/lə kɔ̃.tʁa a e.te a.tʁi.bɥe sɑ̃.za.pɛl dɔfʁ pʁe.tɑ̃.dy.mɑ̃ puʁ ɡa.ɲe dy tɑ̃/', 'luh kohⁿ-TRA a ay-tay a-tree-BWAY sahⁿ-za-pel DOFR pray-tahⁿ-dü-MAHⁿ poor ga-nyay dü TAHⁿ', ['distance', 'piscine']),
  sent(1474, 'Il semblerait que certaines pièces du dossier soient introuvables.', 'It would seem that some documents in the file cannot be found.', '/il sɑ̃.blə.ʁɛ kə sɛʁ.tɛn pjɛs dy dɔ.sje swa.tɛ̃.tʁu.vabl/', 'eel sahⁿ-bluh-REH kuh sehr-tenn PYESS dü do-SYAY swa-tehⁿ-troo-VABL', ['distance', 'piscine']),
  sent(1475, 'La mairie dément avoir caché quoi que ce soit.', 'The town hall denies having hidden anything at all.', '/la mɛ.ʁi de.mɑ̃ a.vwaʁ ka.ʃe kwa kə sə swa/', 'la meh-REE day-MAHⁿ a-vwar ka-SHAY kwa kuh suh SWA', ['verbe', 'piscine']),
  phrase(1476, 'semble-t-il', 'it seems (a hedging aside)', '/sɑ̃bl.til/', 'sahⁿbl-TEEL', ['distance']),
  phrase(1477, 'prétendument, soi-disant', 'supposedly, so-called', '/pʁe.tɑ̃.dy.mɑ̃ swa.di.zɑ̃/', 'pray-tahⁿ-dü-MAHⁿ swa-dee-ZAHⁿ', ['distance']),
  phrase(1478, 'à en croire le maire', 'if the mayor is to be believed', '/a ɑ̃ kʁwaʁ lə mɛʁ/', 'a ahⁿ krwar luh MEHR', ['distance']),
  sent(1479, 'Le conditionnel met le journaliste à distance.', 'The conditional keeps the journalist at a distance.', '/lə kɔ̃.di.sjɔ.nɛl mɛ lə ʒuʁ.na.list a dis.tɑ̃s/', 'luh kohⁿ-dee-syo-NEL meh luh zhoor-na-LEEST a dees-TAHⁿSS', ['regle', 'distance'], FC,
    rule('« La facture atteindrait 7,8 millions. » Le journaliste en est-il sûr ?', 'Non : le conditionnel dit que l’information vient d’ailleurs et n’est pas confirmée. Il rapporte, il ne garantit pas.')),
  sent(1480, 'Des guillemets autour d’un mot marquent souvent une distance.', 'Quotation marks around a word often mark distance.', '/de ɡij.mɛ o.tuʁ dœ̃ mo maʁk su.vɑ̃ yn dis.tɑ̃s/', 'day geey-MEH oh-toor duhⁿ MOH mark soo-vahⁿ ün dees-TAHⁿSS', ['regle', 'distance'], FC,
    rule('Le maire parle d’un dépassement « raisonnable ». Pourquoi ces guillemets ?', 'Le journaliste cite le mot du maire sans le reprendre à son compte. Les guillemets disent : c’est lui qui le dit.')),
  sent(1481, 'Le directeur admet une erreur de calcul.', 'The director admits a calculation error.', '/lə di.ʁɛk.tœʁ ad.mɛ y.nɛ.ʁœʁ də kal.kyl/', 'luh dee-rek-TUHR ad-MEH ü-neh-RUHR duh kal-KÜL', ['verbe']),
  sent(1482, 'L’entreprise se targue d’avoir terminé à temps.', 'The company boasts of having finished on time.', '/lɑ̃.tʁə.pʁiz sə taʁɡ da.vwaʁ tɛʁ.mi.ne a tɑ̃/', 'lahⁿ-truh-PREEZ suh TARG da-vwar tehr-mee-NAY a TAHⁿ', ['verbe']),
  sent(1483, 'L’adjoint assure n’avoir jamais participé aux discussions.', 'The deputy insists he never took part in the discussions.', '/lad.ʒwɛ̃ a.syʁ na.vwaʁ ʒa.mɛ paʁ.ti.si.pe o dis.ky.sjɔ̃/', 'lad-ZHWEHⁿ a-SÜR na-vwar zha-meh par-tee-see-PAY oh dees-kü-SYOHⁿ', ['verbe', 'piscine']),
  sent(1484, 'Le président du club affirme que le stade sera prêt en mars.', 'The club president states that the stadium will be ready in March.', '/lə pʁe.zi.dɑ̃ dy klœb a.fiʁm kə lə stad sə.ʁa pʁɛ ɑ̃ maʁs/', 'luh pray-zee-DAHⁿ dü KLUHB a-feerm kuh luh STAD suh-ra PREH ahⁿ MARSS', ['radio', 'verbe']),
  sent(1485, 'Les travaux auraient pris quatre mois de retard.', 'The works have reportedly fallen four months behind.', '/le tʁa.vo o.ʁɛ pʁi katʁ mwa də ʁə.taʁ/', 'lay tra-VOH oh-reh PREE katr mwa duh ruh-TAR', ['radio', 'distance']),
  sent(1486, 'La ministre reconnaît que le budget n’a pas été respecté.', 'The minister admits that the budget was not kept to.', '/la mi.nistʁ ʁə.kɔ.nɛ kə lə by.dʒɛ na pa.ze.te ʁɛs.pɛk.te/', 'la mee-NEESTR ruh-ko-NEH kuh luh bü-DZHEH na pa-zay-tay res-pek-TAY', ['radio', 'verbe']),
  sent(1487, 'Le directeur prétend n’avoir jamais reçu le rapport.', 'The director claims never to have received the report.', '/lə di.ʁɛk.tœʁ pʁe.tɑ̃ na.vwaʁ ʒa.mɛ ʁə.sy lə ʁa.pɔʁ/', 'luh dee-rek-TUHR pray-TAHⁿ na-vwar zha-meh ruh-sü luh ra-POR', ['radio', 'verbe'], FCVDR),
  sent(1488, 'À en croire l’entreprise, tout est sous contrôle.', 'If the company is to be believed, everything is under control.', '/a ɑ̃ kʁwaʁ lɑ̃.tʁə.pʁiz tu.tɛ su kɔ̃.tʁol/', 'a ahⁿ krwar lahⁿ-truh-PREEZ too-teh soo kohⁿ-TROHL', ['radio', 'distance']),
  sent(1489, 'Ce « petit retard », comme l’appelle la mairie, dure depuis un an.', 'This "slight delay", as the town hall calls it, has lasted a year.', '/sə pə.ti ʁə.taʁ kɔm la.pɛl la mɛ.ʁi dyʁ də.pɥi.zœ̃.nɑ̃/', 'suh puh-tee ruh-TAR kom la-pel la meh-REE dür duh-pwee-zuhⁿ-NAHⁿ', ['radio', 'distance']),
  sent(1490, 'Il semblerait que le chantier reprenne la semaine prochaine.', 'It would seem that work on the site resumes next week.', '/il sɑ̃.blə.ʁɛ kə lə ʃɑ̃.tje ʁə.pʁɛn la sə.mɛn pʁɔ.ʃɛn/', 'eel sahⁿ-bluh-REH kuh luh shahⁿ-TYAY ruh-PRENN la suh-menn pro-SHENN', ['radio', 'distance']),
  sent(1491, 'L’entreprise, soi-disant spécialisée dans les piscines, n’en avait jamais construit.', 'The company, supposedly a pool specialist, had never built one.', '/lɑ̃.tʁə.pʁiz swa.di.zɑ̃ spe.sja.li.ze dɑ̃ le pi.sin nɑ̃.na.vɛ ʒa.mɛ kɔ̃s.tʁɥi/', 'lahⁿ-truh-PREEZ swa-dee-zahⁿ spay-sya-lee-ZAY dahⁿ lay pee-SEEN nahⁿ-na-veh zha-meh kohⁿs-TRWEE', ['radio', 'distance']),
  sent(1492, 'Devant une info, je cherche qui la dit, et avec quelle distance.', 'Faced with a piece of news, I look for who says it, and with what distance.', '/də.vɑ̃ yn ɛ̃.fo ʒə ʃɛʁʃ ki la di e a.vɛk kɛl dis.tɑ̃s/', 'duh-vahⁿ ün ehⁿ-FOH zhuh shehrsh kee la DEE ay a-vek kel dees-TAHⁿSS', ['methode', 'distance']),
  sent(1493, 'Le journaliste rapporte ces chiffres sans les reprendre à son compte.', 'The journalist reports these figures without endorsing them.', '/lə ʒuʁ.na.list ʁa.pɔʁt se ʃifʁ sɑ̃ le ʁə.pʁɑ̃dʁ a sɔ̃ kɔ̃t/', 'luh zhoor-na-LEEST ra-port say SHEEFR sahⁿ lay ruh-PRAHⁿDR a sohⁿ KOHⁿT', ['reponse', 'distance'], FCVDR),
];

/* ── ACT 6 · LE TON ET L’IRONIE ─────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1494, 'Quelle bonne nouvelle : le guichet a fermé.', 'What good news: the counter has closed.', '/kɛl bɔn nu.vɛl lə ɡi.ʃɛ a fɛʁ.me/', 'kel bonn noo-VEL luh gee-SHEH a fehr-MAY', ['ironie', 'blog']),
  sent(1495, 'Le format PDF, sans doute trop moderne.', 'The PDF format, no doubt too modern.', '/lə fɔʁ.ma pe.de.ɛf sɑ̃ dut tʁo mɔ.dɛʁn/', 'luh for-MA pay-day-EF sahⁿ DOOT troh mo-DEHRN', ['ironie', 'blog']),
  sent(1496, 'On n’arrête pas le progrès.', 'There is no stopping progress.', '/ɔ̃ na.ʁɛt pa lə pʁɔ.ɡʁɛ/', 'ohⁿ na-ret pa luh pro-GREH', ['ironie', 'blog']),
  sent(1497, 'Elle aussi va sans doute adorer la « simplification ».', 'She too will no doubt love the "simplification".', '/ɛ.lo.si va sɑ̃ dut a.dɔ.ʁe la sɛ̃.pli.fi.ka.sjɔ̃/', 'eh-loh-SEE va sahⁿ doot a-do-RAY la sehⁿ-plee-fee-ka-SYOHⁿ', ['ironie', 'blog']),
  sent(1498, 'Bref, bravo. Vraiment.', 'In short, well done. Really.', '/bʁɛf bʁa.vo vʁɛ.mɑ̃/', 'BREF bra-VOH vreh-MAHⁿ', ['ironie', 'blog']),
  phrase(1499, 'l’ironie d’un texte', 'the irony of a text', '/li.ʁɔ.ni dœ̃ tɛkst/', 'lee-ro-NEE duhⁿ TEKST', ['ironie']),
  phrase(1500, 'une antiphrase', 'an antiphrasis: saying the opposite of what you mean', '/y.nɑ̃.ti.fʁaz/', 'ü-nahⁿ-tee-FRAHZ', ['ironie']),
  sent(1501, 'L’ironie dit le contraire de ce qu’elle pense.', 'Irony says the opposite of what it means.', '/li.ʁɔ.ni di lə kɔ̃.tʁɛʁ də sə kɛl pɑ̃s/', 'lee-ro-NEE dee luh kohⁿ-TREHR duh suh kel PAHⁿSS', ['regle', 'ironie'], FC,
    rule('« Quelle bonne nouvelle : le guichet a fermé. » L’auteure est-elle contente ?', 'Non : c’est de l’ironie. Tout le reste du billet critique la fermeture. L’ironie dit le contraire de ce qu’elle pense.')),
  sent(1502, 'L’auteure se moque de la mairie.', 'The writer is mocking the town hall.', '/lo.tœʁ sə mɔk də la mɛ.ʁi/', 'loh-TUHR suh MOK duh la meh-REE', ['reponse', 'ironie'], FCVDR),
  sent(1503, 'Le ton est ironique : elle critique la fermeture du guichet.', 'The tone is ironic: she criticises the closing of the counter.', '/lə tɔ̃ ɛ.ti.ʁɔ.nik ɛl kʁi.tik la fɛʁ.mə.tyʁ dy ɡi.ʃɛ/', 'luh TOHⁿ eh-tee-ro-NEEK el kree-TEEK la fehr-muh-TÜR dü gee-SHEH', ['reponse', 'ironie'], FCVDR),
  sent(1504, 'Merci pour ce magnifique embouteillage.', 'Thanks for this magnificent traffic jam.', '/mɛʁ.si puʁ sə ma.ɲi.fi.kɑ̃.bu.tɛ.jaʒ/', 'mehr-SEE poor suh ma-nyee-fee-kahⁿ-boo-teh-YAZH', ['ironie']),
  sent(1505, 'Génial, le train est encore en retard.', 'Great, the train is late again.', '/ʒe.njal lə tʁɛ̃ ɛ.tɑ̃.kɔ.ʁɑ̃ ʁə.taʁ/', 'zhay-NYAL luh TREHⁿ eh-tahⁿ-ko-rahⁿ ruh-TAR', ['ironie']),
  sent(1506, 'Cette réforme est une réussite, surtout pour ceux qui l’ont écrite.', 'This reform is a success, especially for those who wrote it.', '/sɛt ʁe.fɔʁm ɛ.tyn ʁe.y.sit syʁ.tu puʁ sø ki lɔ̃.te.kʁit/', 'set ray-FORM eh-tün ray-ü-SEET sür-TOO poor seu kee lohⁿ-tay-KREET', ['ironie']),
  sent(1507, 'Le ton est sérieux : l’auteur ne plaisante pas.', 'The tone is serious: the writer is not joking.', '/lə tɔ̃ ɛ se.ʁjø lo.tœʁ nə plɛ.zɑ̃t pa/', 'luh TOHⁿ eh say-RYEU loh-TUHR nuh pleh-zahⁿt PA', ['ton']),
  sent(1508, 'L’auteure trouve que la fermeture du guichet est une mauvaise idée.', 'The writer thinks that closing the counter is a bad idea.', '/lo.tœʁ tʁuv kə la fɛʁ.mə.tyʁ dy ɡi.ʃɛ ɛ.tyn mo.vɛ.zi.de/', 'loh-TUHR troov kuh la fehr-muh-TÜR dü gee-SHEH eh-tün moh-veh-zee-DAY', ['reponse', 'ironie']),
  sent(1509, 'Le site refuse un format tout à fait courant.', 'The site rejects a perfectly common format.', '/lə sit ʁə.fyz œ̃ fɔʁ.ma tu.ta.fɛ ku.ʁɑ̃/', 'luh SEET ruh-füz uhⁿ for-MA too-ta-feh koo-RAHⁿ', ['reponse', 'ironie']),
  sent(1510, 'Le numéro renvoie au site : c’est absurde.', 'The phone number sends you back to the site: it is absurd.', '/lə ny.me.ʁo ʁɑ̃.vwa o sit sɛ.tap.syʁd/', 'luh nü-may-ROH rahⁿ-vwa oh SEET seh-tap-SÜRD', ['reponse', 'ironie']),
  sent(1511, 'La mairie parle de simplification, mais tout est plus compliqué.', 'The town hall talks of simplification, but everything is more complicated.', '/la mɛ.ʁi paʁl də sɛ̃.pli.fi.ka.sjɔ̃ mɛ tu.tɛ ply kɔ̃.pli.ke/', 'la meh-REE parl duh sehⁿ-plee-fee-ka-SYOHⁿ meh too-teh plü kohⁿ-plee-KAY', ['reponse', 'ironie']),
  sent(1512, 'Si 70 % passent par le site, c’est qu’il n’y a plus d’autre choix.', 'If 70% go through the site, it is because there is no other choice left.', '/si swa.sɑ̃t.dis puʁ sɑ̃ pas paʁ lə sit sɛ kil ni ja ply do.tʁə ʃwa/', 'see swa-sahⁿt-DEES poor SAHⁿ pass par luh SEET seh keel nee ya plü doh-truh SHWA', ['reponse', 'ironie']),
  sent(1513, 'Sans le contexte, l’ironie ne se voit pas.', 'Without context, irony cannot be seen.', '/sɑ̃ lə kɔ̃.tɛkst li.ʁɔ.ni nə sə vwa pa/', 'sahⁿ luh kohⁿ-TEKST lee-ro-NEE nuh suh vwa PA', ['regle', 'ironie'], FC,
    rule('« Bravo pour ce beau travail. » Compliment ou critique ?', 'Impossible à dire seul : c’est le contexte qui décide. Si le texte critique partout ailleurs, c’est de l’ironie.')),
];

/* ── ACT 7 · À QUI ÇA PROFITE ───────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1514, 'Plan Horizon 2027 : un réseau plus simple, plus vert, plus efficace.', 'Horizon 2027 plan: a simpler, greener, more efficient network.', '/plɑ̃ ɔ.ʁi.zɔ̃ dø mil vɛ̃t.sɛt œ̃ ʁe.zo ply sɛ̃pl ply vɛʁ ply.ze.fi.kas/', 'plahⁿ o-ree-ZOHⁿ deu meel vehⁿt-SET uhⁿ ray-ZOH plü SEHⁿPL plü VEHR plü-zay-fee-KASS', ['communique', 'bus']),
  sent(1515, 'TRL concentrera ses moyens sur les lignes les plus fréquentées.', 'TRL will focus its resources on the busiest lines.', '/te.ɛʁ.ɛl kɔ̃.sɑ̃.tʁə.ʁa se mwa.jɛ̃ syʁ le liɲ le ply fʁe.kɑ̃.te/', 'tay-ehr-EL kohⁿ-sahⁿ-truh-RA say mwa-YEHⁿ sür lay LEENY lay plü fray-kahⁿ-TAY', ['communique', 'bus']),
  sent(1516, 'Les arrêts peu fréquentés bénéficieront d’un service à la demande.', 'Little-used stops will benefit from an on-demand service.', '/le.za.ʁɛ pø fʁe.kɑ̃.te be.ne.fi.si.ʁɔ̃ dœ̃ sɛʁ.vis a la də.mɑ̃d/', 'lay-za-REH peu fray-kahⁿ-TAY bay-nay-fee-see-ROHⁿ duhⁿ sehr-VEESS a la duh-MAHⁿD', ['communique', 'bus']),
  sent(1517, 'Derrière le service à la demande se cache la suppression de neuf lignes.', 'Behind the on-demand service lies the cutting of nine lines.', '/dɛ.ʁjɛʁ lə sɛʁ.vis a la də.mɑ̃d sə kaʃ la sy.pʁɛ.sjɔ̃ də nœf liɲ/', 'deh-RYEHR luh sehr-VEESS a la duh-MAHⁿD suh KASH la sü-preh-SYOHⁿ duh nuhf LEENY', ['article', 'bus'], FCVDR),
  sent(1518, 'Les habitants devront réserver leur trajet la veille.', 'Residents will have to book their trip the day before.', '/le.za.bi.tɑ̃ də.vʁɔ̃ ʁe.zɛʁ.ve lœʁ tʁa.ʒɛ la vɛj/', 'lay-za-bee-TAHⁿ duh-vrohⁿ ray-zehr-vay luhr tra-ZHEH la VEY', ['article', 'bus']),
  sent(1519, 'Les bus électriques sont financés aux deux tiers par la Région.', 'Two thirds of the electric buses are paid for by the Region.', '/le bys e.lɛk.tʁik sɔ̃ fi.nɑ̃.se o dø tjɛʁ paʁ la ʁe.ʒjɔ̃/', 'lay büss ay-lek-TREEK sohⁿ fee-nahⁿ-SAY oh deu TYEHR par la ray-ZHYOHⁿ', ['article', 'bus']),
  sent(1520, 'À qui profite ce plan ?', 'Who benefits from this plan?', '/a ki pʁɔ.fit sə plɑ̃/', 'a kee pro-feet suh PLAHⁿ', ['question', 'interet'], FCVDR),
  sent(1521, 'Qu’est-ce que le texte ne dit pas ?', 'What does the text leave unsaid?', '/kɛs kə lə tɛkst nə di pa/', 'kess kuh luh TEKST nuh dee PA', ['question', 'interet']),
  phrase(1522, 'optimiser le réseau', 'to optimise the network (often: to cut services)', '/ɔp.ti.mi.ze lə ʁe.zo/', 'op-tee-mee-ZAY luh ray-ZOH', ['euphemisme']),
  phrase(1523, 'une adaptation nécessaire', 'a necessary adjustment (often: a cut)', '/y.na.dap.ta.sjɔ̃ ne.se.sɛʁ/', 'ü-na-dap-ta-SYOHⁿ nay-say-SEHR', ['euphemisme']),
  phrase(1524, 'un plan de départs volontaires', 'a voluntary redundancy plan', '/œ̃ plɑ̃ də de.paʁ vɔ.lɔ̃.tɛʁ/', 'uhⁿ plahⁿ duh day-PAR vo-lohⁿ-TEHR', ['euphemisme']),
  sent(1525, 'Un mot doux peut cacher une mauvaise nouvelle.', 'A soft word can hide bad news.', '/œ̃ mo du pø ka.ʃe yn mo.vɛz nu.vɛl/', 'uhⁿ moh DOO peu ka-SHAY ün moh-vez noo-VEL', ['regle', 'euphemisme'], FC,
    rule('Un communiqué parle d’« optimiser le réseau ». Qu’est-ce que ça peut cacher ?', 'Souvent une suppression : des lignes, des postes, des services. Cherche ce que le mot doux remplace, puis ce que l’article en dit.')),
  sent(1526, 'Le communiqué présente comme un progrès ce qui est une suppression.', 'The press release presents a cut as progress.', '/lə kɔ.my.ni.ke pʁe.zɑ̃t kɔ.mœ̃ pʁɔ.ɡʁɛ sə ki ɛ.tyn sy.pʁɛ.sjɔ̃/', 'luh ko-mü-nee-KAY pray-zahⁿt ko-muhⁿ pro-GREH suh kee eh-tün sü-preh-SYOHⁿ', ['reponse', 'interet'], FCVDR),
  sent(1527, 'La bourgmestre dénonce un plan écrit pour les comptables.', 'The mayor condemns a plan written for the accountants.', '/la buʁɡ.mɛstʁ de.nɔ̃s œ̃ plɑ̃ e.kʁi puʁ le kɔ̃.tabl/', 'la boorg-MESTR day-nohⁿss uhⁿ plahⁿ ay-KREE poor lay kohⁿ-TABL', ['article', 'bus']),
  sent(1528, 'L’entreprise a dégagé un bénéfice de 4,2 millions l’an dernier.', 'The company made a profit of 4.2 million last year.', '/lɑ̃.tʁə.pʁiz a de.ɡa.ʒe œ̃ be.ne.fis də katʁ viʁ.ɡyl dø mi.ljɔ̃ lɑ̃ dɛʁ.nje/', 'lahⁿ-truh-PREEZ a day-ga-ZHAY uhⁿ bay-nay-FEESS duh katr veer-gül DEU mee-LYOHⁿ lahⁿ dehr-NYAY', ['article', 'bus']),
  sent(1529, 'Cherche qui parle, et ce qu’il gagne à le dire.', 'Look for who is speaking, and what they gain by saying it.', '/ʃɛʁʃ ki paʁl e sə kil ɡaɲ a lə diʁ/', 'shehrsh kee PARL ay suh keel gany a luh DEER', ['regle', 'interet'], FC,
    rule('Un communiqué et un article parlent du même plan. Lequel parle au nom de l’entreprise ?', 'Le communiqué : l’entreprise l’écrit elle-même. Demande-toi toujours qui parle, et ce qu’il gagne à le dire.')),
  sent(1530, 'Un communiqué parle au nom de celui qui l’écrit.', 'A press release speaks for whoever writes it.', '/œ̃ kɔ.my.ni.ke paʁl o nɔ̃ də sə.lɥi ki le.kʁi/', 'uhⁿ ko-mü-nee-KAY parl oh nohⁿ duh suh-lwee kee lay-KREE', ['interet']),
  sent(1531, 'Le communiqué ne dit pas que le week-end, il n’y aura plus de bus.', 'The press release does not say there will be no buses at weekends.', '/lə kɔ.my.ni.ke nə di pa kə lə wi.kɛnd il ni jo.ʁa ply də bys/', 'luh ko-mü-nee-KAY nuh dee PA kuh luh wee-KEND eel nee yoh-ra plü duh BÜSS', ['reponse', 'interet']),
];

/* ── ACT 8 · FAIT, OPINION, INTERPRÉTATION ──────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1532, 'Nuage+, le matelas qui change vos nuits.', 'Nuage+, the mattress that changes your nights.', '/nɥaʒ plys lə mat.la ki ʃɑ̃ʒ vo nɥi/', 'nwazh PLÜSS luh mat-LA kee shahⁿzh voh NWEE', ['pub', 'matelas']),
  sent(1533, 'Neuf clients sur dix le recommandent.', 'Nine customers out of ten recommend it.', '/nœf kli.jɑ̃ syʁ dis lə ʁə.kɔ.mɑ̃d/', 'nuhf klee-YAHⁿ sür DEESS luh ruh-ko-MAHⁿD', ['pub', 'matelas']),
  sent(1534, 'Le test a été réalisé par la marque, auprès de vingt-quatre volontaires.', 'The test was carried out by the brand itself, on twenty-four volunteers.', '/lə tɛst a e.te ʁe.a.li.ze paʁ la maʁk o.pʁɛ də vɛ̃t.katʁ vɔ.lɔ̃.tɛʁ/', 'luh TEST a ay-tay ray-a-lee-ZAY par la MARK oh-preh duh vehⁿt-katr vo-lohⁿ-TEHR', ['reponse', 'matelas']),
  sent(1535, 'Vous méritez le meilleur sommeil de votre vie.', 'You deserve the best sleep of your life.', '/vu me.ʁi.te lə mɛ.jœʁ sɔ.mɛj də vɔtʁ vi/', 'voo may-ree-TAY luh meh-yuhr so-MEY duh votr VEE', ['pub', 'matelas']),
  sent(1536, 'Ce n’est pas votre faute : c’est votre matelas.', 'It is not your fault: it is your mattress.', '/sə nɛ pa vɔtʁ fot sɛ vɔtʁ mat.la/', 'suh neh pa votr FOHT seh votr mat-LA', ['pub', 'matelas']),
  phrase(1537, 'un fait, une opinion, une interprétation', 'a fact, an opinion, an interpretation', '/œ̃ fɛ y.nɔ.pi.njɔ̃ y.nɛ̃.tɛʁ.pʁe.ta.sjɔ̃/', 'uhⁿ FEH ü-no-pee-NYOHⁿ ü-nehⁿ-tehr-pray-ta-SYOHⁿ', ['interpretation']),
  sent(1538, 'Le chômage a baissé de 0,3 point en un an.', 'Unemployment fell by 0.3 points in a year.', '/lə ʃo.maʒ a bɛ.se də ze.ʁo viʁ.ɡyl tʁwa pwɛ̃ ɑ̃.nœ̃.nɑ̃/', 'luh shoh-MAZH a beh-SAY duh zay-roh veer-gül TRWA pwehⁿ ahⁿ-nuhⁿ-NAHⁿ', ['fait']),
  sent(1539, 'Le ministre y voit la preuve que sa réforme fonctionne.', 'The minister sees it as proof that his reform works.', '/lə mi.nistʁ i vwa la pʁœv kə sa ʁe.fɔʁm fɔ̃k.sjɔn/', 'luh mee-NEESTR ee vwa la PRUHV kuh sa ray-FORM fohⁿk-SYONN', ['interpretation'], FCVDR),
  sent(1540, 'Cette réforme est injuste.', 'This reform is unfair.', '/sɛt ʁe.fɔʁm ɛ.tɛ̃.ʒyst/', 'set ray-FORM eh-tehⁿ-ZHÜST', ['opinion']),
  sent(1541, 'Une interprétation relie des faits à une cause.', 'An interpretation links facts to a cause.', '/y.nɛ̃.tɛʁ.pʁe.ta.sjɔ̃ ʁə.li de fɛ a yn koz/', 'ü-nehⁿ-tehr-pray-ta-SYOHⁿ ruh-lee day FEH a ün KOHZ', ['regle', 'interpretation'], FC,
    rule('« Le chômage a baissé : la réforme fonctionne. » Fait ou interprétation ?', 'La baisse est un fait. « La réforme fonctionne » est une interprétation : une cause proposée, qu’on peut discuter.')),
  sent(1542, '« Cliniquement testé » : par qui, et sur combien de personnes ?', '"Clinically tested": by whom, and on how many people?', '/kli.nik.mɑ̃ tɛs.te paʁ ki e syʁ kɔ̃.bjɛ̃ də pɛʁ.sɔn/', 'klee-neek-mahⁿ tes-TAY par KEE ay sür kohⁿ-byehⁿ duh pehr-SONN', ['question', 'matelas'], FCVDR),
  sent(1543, 'Les avis viennent de clients qui ont choisi d’en laisser un.', 'The reviews come from customers who chose to leave one.', '/le.za.vi vjɛn də kli.jɑ̃ ki ɔ̃ ʃwa.zi dɑ̃ lɛ.se œ̃/', 'lay-za-VEE vyenn duh klee-YAHⁿ kee ohⁿ shwa-ZEE dahⁿ leh-say UHⁿ', ['reponse', 'matelas']),
  sent(1544, 'Le matelas est livré en quarante-huit heures.', 'The mattress is delivered within forty-eight hours.', '/lə mat.la ɛ li.vʁe ɑ̃ ka.ʁɑ̃.tɥi.tœʁ/', 'luh mat-LA eh lee-VRAY ahⁿ ka-rahⁿ-twee-TUHR', ['fait', 'matelas']),
  sent(1545, 'Cet été, la ville a accueilli 12 % de touristes en plus.', 'This summer the city welcomed 12% more tourists.', '/sɛ.te.te la vil a a.kœ.ji duz puʁ sɑ̃ də tu.ʁist ɑ̃ plys/', 'seh-tay-TAY la VEEL a a-kuh-YEE dooz poor SAHⁿ duh too-REEST ahⁿ PLÜSS', ['radio', 'fait']),
  sent(1546, 'Pour l’office du tourisme, c’est la preuve que la nouvelle campagne a marché.', 'For the tourist office, it proves the new campaign worked.', '/puʁ lɔ.fis dy tu.ʁism sɛ la pʁœv kə la nu.vɛl kɑ̃.paɲ a maʁ.ʃe/', 'poor lo-FEESS dü too-REESM seh la PRUHV kuh la noo-vel kahⁿ-PANY a mar-SHAY', ['radio', 'interpretation']),
  sent(1547, 'Moi, je trouve que la ville est devenue invivable en juillet.', 'Personally, I think the city has become unbearable in July.', '/mwa ʒə tʁuv kə la vil ɛ dəv.ny ɛ̃.vi.vabl ɑ̃ ʒɥi.jɛ/', 'MWA zhuh troov kuh la VEEL eh duhv-nü ehⁿ-vee-VABL ahⁿ zhwee-YEH', ['radio', 'opinion']),
  sent(1548, 'Les hôtels affichaient complet quarante nuits sur soixante.', 'The hotels were fully booked forty nights out of sixty.', '/le.zo.tɛl a.fi.ʃɛ kɔ̃.plɛ ka.ʁɑ̃t nɥi syʁ swa.sɑ̃t/', 'lay-zoh-TEL a-fee-sheh kohⁿ-PLEH ka-rahⁿt NWEE sür swa-SAHⁿT', ['radio', 'fait']),
  sent(1549, 'Selon un commerçant, cette hausse s’explique surtout par la météo.', 'According to a shopkeeper, the rise is mostly down to the weather.', '/sə.lɔ̃.nœ̃ kɔ.mɛʁ.sɑ̃ sɛt os sɛks.plik syʁ.tu paʁ la me.te.o/', 'suh-lohⁿ-nuhⁿ ko-mehr-SAHⁿ set OHSS sex-pleek sür-TOO par la may-tay-OH', ['radio', 'interpretation']),
  sent(1550, 'Les touristes dépensent en moyenne 85 euros par jour.', 'Tourists spend 85 euros a day on average.', '/le tu.ʁist de.pɑ̃s ɑ̃ mwa.jɛn ka.tʁə.vɛ̃.sɛ̃.kø.ʁo paʁ ʒuʁ/', 'lay too-REEST day-PAHⁿSS ahⁿ mwa-YENN ka-truh-vehⁿ-sehⁿ-keu-ROH par ZHOOR', ['radio', 'fait']),
  sent(1551, 'C’est une excellente nouvelle pour tout le monde.', 'It is excellent news for everyone.', '/sɛ.ty.nɛk.sɛ.lɑ̃t nu.vɛl puʁ tu lə mɔ̃d/', 'seh-tü-nek-seh-lahⁿt noo-VEL poor too luh MOHⁿD', ['radio', 'opinion']),
  sent(1552, 'Le festival a été déplacé de juin à juillet cette année.', 'The festival was moved from June to July this year.', '/lə fɛs.ti.val a e.te de.pla.se də ʒɥɛ̃ a ʒɥi.jɛ sɛ.ta.ne/', 'luh fes-tee-VAL a ay-tay day-pla-SAY duh zhwehⁿ a zhwee-YEH seh-ta-NAY', ['radio', 'fait']),
  sent(1553, 'Une affirmation se présente souvent comme un fait.', 'A claim often presents itself as a fact.', '/y.na.fiʁ.ma.sjɔ̃ sə pʁe.zɑ̃t su.vɑ̃ kɔ.mœ̃ fɛ/', 'ü-na-feer-ma-SYOHⁿ suh pray-zahⁿt soo-VAHⁿ ko-muhⁿ FEH', ['affirmation']),
  sent(1554, 'La hausse est un fait ; son explication est une interprétation.', 'The rise is a fact; its explanation is an interpretation.', '/la os ɛ.tœ̃ fɛ sɔ̃.nɛks.pli.ka.sjɔ̃ ɛ.ty.nɛ̃.tɛʁ.pʁe.ta.sjɔ̃/', 'la OHSS eh-tuhⁿ FEH sohⁿ-nex-plee-ka-SYOHⁿ eh-tü-nehⁿ-tehr-pray-ta-SYOHⁿ', ['reponse', 'interpretation'], FCVDR),
];

/* ── ACT 9 · DEUX TEXTES, UN SUJET ──────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1555, 'La fréquentation a augmenté de 38 %.', 'Ridership rose by 38%.', '/la fʁe.kɑ̃.ta.sjɔ̃ a ɔɡ.mɑ̃.te də tʁɑ̃t.ɥit puʁ sɑ̃/', 'la fray-kahⁿ-ta-SYOHⁿ a og-mahⁿ-TAY duh trahⁿt-WEET poor SAHⁿ', ['rapport', 'gratuite']),
  sent(1556, 'Près de la moitié des nouveaux trajets se faisaient avant à pied ou à vélo.', 'Nearly half of the new trips used to be made on foot or by bike.', '/pʁɛ də la mwa.tje de nu.vo tʁa.ʒɛ sə fə.zɛ a.vɑ̃ a pje u a ve.lo/', 'preh duh la mwa-TYAY day noo-voh tra-ZHEH suh fuh-zeh a-VAHⁿ a PYAY oo a vay-LOH', ['rapport', 'gratuite']),
  sent(1557, 'La baisse du trafic est proche de la marge d’erreur.', 'The fall in traffic is close to the margin of error.', '/la bɛs dy tʁa.fik ɛ pʁɔʃ də la maʁʒ de.ʁœʁ/', 'la BESS dü tra-FEEK eh prosh duh la marzh day-RUHR', ['rapport', 'gratuite']),
  sent(1558, 'Le rapport recommande d’attendre deux ans avant de conclure.', 'The report recommends waiting two years before drawing conclusions.', '/lə ʁa.pɔʁ ʁə.kɔ.mɑ̃d da.tɑ̃dʁ dø.zɑ̃ a.vɑ̃ də kɔ̃.klyʁ/', 'luh ra-POR ruh-ko-mahⁿd da-TAHⁿDR deu-ZAHⁿ a-vahⁿ duh kohⁿ-KLÜR', ['rapport', 'gratuite'], FCVDR),
  sent(1559, 'Pour Karim, c’est un cadeau électoral.', 'For Karim, it is an election giveaway.', '/puʁ ka.ʁim sɛ.tœ̃ ka.do e.lɛk.tɔ.ʁal/', 'poor ka-REEMM seh-tuhⁿ ka-DOH ay-lek-to-RAL', ['blog', 'gratuite']),
  sent(1560, 'Les deux textes citent les mêmes chiffres, mais n’en tirent pas la même conclusion.', 'The two texts quote the same figures but do not draw the same conclusion from them.', '/le dø tɛkst sit le mɛm ʃifʁ mɛ nɑ̃ tiʁ pa la mɛm kɔ̃.kly.zjɔ̃/', 'lay deu TEKST seet lay mem SHEEFR meh nahⁿ teer pa la mem kohⁿ-klü-ZYOHⁿ', ['reponse', 'comparer'], FCVDR),
  sent(1561, 'Le rapport est prudent ; le blog est polémique.', 'The report is cautious; the blog is polemical.', '/lə ʁa.pɔʁ ɛ pʁy.dɑ̃ lə blɔɡ ɛ pɔ.le.mik/', 'luh ra-POR eh prü-DAHⁿ luh BLOG eh po-lay-MEEK', ['reponse', 'comparer'], FCVDR),
  sent(1562, 'Sur quels faits les deux textes sont-ils d’accord ?', 'Which facts do the two texts agree on?', '/syʁ kɛl fɛ le dø tɛkst sɔ̃.til da.kɔʁ/', 'sür kel FEH lay deu TEKST sohⁿ-teel da-KOR', ['question', 'comparer']),
  sent(1563, 'Où les deux textes divergent-ils ?', 'Where do the two texts diverge?', '/u le dø tɛkst di.vɛʁʒ.til/', 'oo lay deu TEKST dee-vehrzh-TEEL', ['question', 'comparer']),
  sent(1564, 'Les deux textes s’accordent sur la hausse de la fréquentation.', 'Both texts agree on the rise in ridership.', '/le dø tɛkst sa.kɔʁd syʁ la os də la fʁe.kɑ̃.ta.sjɔ̃/', 'lay deu TEKST sa-KORD sür la OHSS duh la fray-kahⁿ-ta-SYOHⁿ', ['reponse', 'comparer']),
  sent(1565, 'Le blog ne dit pas qu’une partie des automobilistes a changé d’habitude.', 'The blog does not say that some drivers changed their habits.', '/lə blɔɡ nə di pa kyn paʁ.ti de.zo.to.mɔ.bi.list a ʃɑ̃.ʒe da.bi.tyd/', 'luh BLOG nuh dee PA kün par-TEE day-zoh-toh-mo-bee-LEEST a shahⁿ-zhay da-bee-TÜD', ['reponse', 'comparer']),
  sent(1566, 'Alors que le rapport attend, le blog a déjà tranché.', 'Whereas the report waits, the blog has already made up its mind.', '/a.lɔʁ kə lə ʁa.pɔʁ a.tɑ̃ lə blɔɡ a de.ʒa tʁɑ̃.ʃe/', 'a-lor kuh luh ra-POR a-TAHⁿ luh BLOG a day-zha trahⁿ-SHAY', ['reponse', 'comparer']),
  sent(1567, 'Deux textes, un sujet : compare les faits, puis les positions.', 'Two texts, one topic: compare the facts, then the positions.', '/dø tɛkst œ̃ sy.ʒɛ kɔ̃.paʁ le fɛ pɥi le po.zi.sjɔ̃/', 'deu TEKST uhⁿ sü-ZHEH kohⁿ-PAR lay FEH pwee lay po-zee-SYOHⁿ', ['regle', 'comparer'], FC,
    rule('Un rapport et un blog parlent de la gratuité des bus. Par quoi commences-tu la comparaison ?', 'Par les faits qu’ils partagent. Ensuite seulement, les conclusions qu’ils en tirent, et le ton.')),
  sent(1568, 'Le blog utilise un seul chiffre et oublie les autres.', 'The blog uses one figure and forgets the others.', '/lə blɔɡ y.ti.liz œ̃ sœl ʃifʁ e u.bli le.zotʁ/', 'luh BLOG ü-tee-leez uhⁿ suhl SHEEFR ay oo-blee lay-ZOHTR', ['reponse', 'comparer']),
];

/* ── ACT 10 · À L’EXAMEN, INFÉRENCE ET POSITION ─────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1569, 'La déconnexion ne se décrète pas.', 'Disconnecting cannot be decreed.', '/la de.kɔ.nɛk.sjɔ̃ nə sə de.kʁɛt pa/', 'la day-ko-nek-SYOHⁿ nuh suh day-KRET PA', ['examen', 'deconnexion']),
  sent(1570, 'L’intention est louable.', 'The intention is commendable.', '/lɛ̃.tɑ̃.sjɔ̃ ɛ lu.abl/', 'lehⁿ-tahⁿ-SYOHⁿ eh loo-ABL', ['concession', 'deconnexion']),
  sent(1571, 'Couper la messagerie traite le symptôme, et non la cause.', 'Cutting off email treats the symptom, not the cause.', '/ku.pe la me.saʒ.ʁi tʁɛt lə sɛ̃p.tom e nɔ̃ la koz/', 'koo-PAY la may-sazh-REE tret luh sehⁿp-TOMM ay nohⁿ la KOHZ', ['these', 'deconnexion'], FCVDR),
  sent(1572, 'La déconnexion se construit dans l’organisation du travail.', 'Disconnecting is built into the way work is organised.', '/la de.kɔ.nɛk.sjɔ̃ sə kɔ̃s.tʁɥi dɑ̃ lɔʁ.ɡa.ni.za.sjɔ̃ dy tʁa.vaj/', 'la day-ko-nek-SYOHⁿ suh kohⁿs-TRWEE dahⁿ lor-ga-nee-za-SYOHⁿ dü tra-VAHY', ['these', 'deconnexion']),
  phrase(1573, 'une question d’inférence', 'an inference question', '/yn kɛs.tjɔ̃ dɛ̃.fe.ʁɑ̃s/', 'ün kes-tyohⁿ dehⁿ-fay-RAHⁿSS', ['examen']),
  phrase(1574, 'une question sur la position de l’auteur', 'a question on the writer’s stance', '/yn kɛs.tjɔ̃ syʁ la po.zi.sjɔ̃ də lo.tœʁ/', 'ün kes-TYOHⁿ sür la po-zee-SYOHⁿ duh loh-TUHR', ['examen']),
  sent(1575, 'Justifiez votre réponse en citant le texte.', 'Justify your answer by quoting the text.', '/ʒys.ti.fje vɔtʁ ʁe.pɔ̃s ɑ̃ si.tɑ̃ lə tɛkst/', 'zhüs-tee-FYAY votr ray-POHⁿSS ahⁿ see-tahⁿ luh TEKST', ['examen', 'consigne'], FCVDR),
  sent(1576, 'Vrai ou faux ? Justifiez.', 'True or false? Justify.', '/vʁɛ u fo ʒys.ti.fje/', 'vreh oo FOH zhüs-tee-FYAY', ['examen', 'consigne']),
  sent(1577, 'La réponse est dans le texte, mais rarement avec les mêmes mots.', 'The answer is in the text, but rarely in the same words.', '/la ʁe.pɔ̃s ɛ dɑ̃ lə tɛkst mɛ ʁaʁ.mɑ̃ a.vɛk le mɛm mo/', 'la ray-POHⁿSS eh dahⁿ luh TEKST meh rar-MAHⁿ a-vek lay mem MOH', ['regle', 'examen'], FC,
    rule('Une question d’inférence demande ce que le texte laisse entendre. Où est la réponse ?', 'Dans le texte, mais pas mot pour mot : dans un exemple, une image, un connecteur. Tu la prouves en citant la phrase.')),
  sent(1578, 'L’auteur est favorable à l’objectif, mais pas au moyen.', 'The writer supports the aim, but not the means.', '/lo.tœʁ ɛ fa.vɔ.ʁabl a lɔb.ʒɛk.tif mɛ pa.zo mwa.jɛ̃/', 'loh-TUHR eh fa-vo-RABL a lob-zhek-TEEF meh pa-zoh mwa-YEHⁿ', ['reponse', 'position'], FCVDR),
  sent(1579, 'Le mot « louable » montre qu’il concède un point.', 'The word "commendable" shows he concedes a point.', '/lə mo lu.abl mɔ̃tʁ kil kɔ̃.sɛd œ̃ pwɛ̃/', 'luh moh loo-ABL mohⁿtr keel kohⁿ-SED uhⁿ PWEHⁿ', ['reponse', 'position']),
  sent(1580, 'Je cite la phrase qui prouve ma réponse.', 'I quote the sentence that proves my answer.', '/ʒə sit la fʁaz ki pʁuv ma ʁe.pɔ̃s/', 'zhuh seet la FRAHZ kee proov ma ray-POHⁿSS', ['methode', 'examen'], FCVDR),
  sent(1581, 'Les arrêts maladie auraient reculé de 12 %.', 'Sick leave has reportedly fallen by 12%.', '/le.za.ʁɛ ma.la.di o.ʁɛ ʁə.ky.le də duz puʁ sɑ̃/', 'lay-za-reh ma-la-DEE oh-reh ruh-kü-LAY duh dooz poor SAHⁿ', ['distance', 'deconnexion']),
  sent(1582, 'Que pense l’auteur de la coupure des serveurs ?', 'What does the writer think of cutting the servers?', '/kə pɑ̃s lo.tœʁ də la ku.pyʁ de sɛʁ.vœʁ/', 'kuh pahⁿss loh-TUHR duh la koo-PÜR day sehr-VUHR', ['question', 'position']),
  sent(1583, 'La mère de famille n’a pas besoin qu’on la protège d’elle-même.', 'The working mother does not need protecting from herself.', '/la mɛʁ də fa.mij na pa bə.zwɛ̃ kɔ̃ la pʁɔ.tɛʒ dɛl mɛm/', 'la MEHR duh fa-MEEY na pa buh-ZWEHⁿ kohⁿ la pro-TEZH del-MEM', ['exemple', 'deconnexion']),
];

/* ── ACT 11 · TA RÉPONSE CRITIQUE ───────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1584, 'Il est temps de dire adieu aux espèces.', 'It is time to say goodbye to cash.', '/i.lɛ tɑ̃ də diʁ a.djø o.zɛs.pɛs/', 'ee-leh TAHⁿ duh DEER a-DYEU oh-zes-PESS', ['tribune', 'especes']),
  sent(1585, 'L’auteur dirige une entreprise de paiement.', 'The writer runs a payment company.', '/lo.tœʁ di.ʁiʒ y.nɑ̃.tʁə.pʁiz də pɛ.mɑ̃/', 'loh-TUHR dee-REEZH ü-nahⁿ-truh-PREEZ duh peh-MAHⁿ', ['reponse', 'interet'], FCVDR),
  sent(1586, 'Huit paiements sur dix se font déjà par carte.', 'Eight payments out of ten are already made by card.', '/ɥi pɛ.mɑ̃ syʁ dis sə fɔ̃ de.ʒa paʁ kaʁt/', 'wee peh-MAHⁿ sür DEESS suh fohⁿ day-zha par KART', ['tribune', 'especes']),
  sent(1587, 'Un boulanger lui a confié passer une heure par jour à gérer sa monnaie.', 'A baker told him he spends an hour a day handling his change.', '/œ̃ bu.lɑ̃.ʒe lɥi a kɔ̃.fje pa.se y.nœʁ paʁ ʒuʁ a ʒe.ʁe sa mɔ.nɛ/', 'uhⁿ boo-lahⁿ-ZHAY lwee a kohⁿ-FYAY pa-say ü-NUHR par ZHOOR a zhay-ray sa mo-NEH', ['tribune', 'especes']),
  sent(1588, 'Tout le monde le sait : les espèces servent d’abord à la fraude.', 'Everyone knows it: cash is used first of all for fraud.', '/tu lə mɔ̃d lə sɛ le.zɛs.pɛs sɛʁv da.bɔʁ a la fʁod/', 'too luh mohⁿd luh SEH lay-zes-PESS sehrv da-bor a la FROHD', ['tribune', 'affirmation']),
  sent(1589, 'Elles s’adapteront, comme elles se sont adaptées au téléphone portable.', 'They will adapt, as they adapted to mobile phones.', '/ɛl sa.dap.tə.ʁɔ̃ kɔm ɛl sə sɔ̃.ta.dap.te o te.le.fɔn pɔʁ.tabl/', 'el sa-dap-tuh-ROHⁿ kom el suh sohⁿ-ta-dap-TAY oh tay-lay-fonn por-TABL', ['tribune', 'presuppose']),
  sent(1590, 'L’auteur soutient qu’il faut supprimer les espèces d’ici 2030.', 'The writer argues that cash should be abolished by 2030.', '/lo.tœʁ su.tjɛ̃ kil fo sy.pʁi.me le.zɛs.pɛs di.si dø mil tʁɑ̃t/', 'loh-TUHR soo-tyehⁿ keel foh sü-pree-may lay-zes-PESS dee-see deu meel TRAHⁿT', ['reponse', 'these'], FCVDR),
  sent(1591, 'Pour appuyer sa thèse, il avance un chiffre et un témoignage.', 'To support his thesis, he puts forward a figure and a testimony.', '/puʁ a.pɥi.je sa tɛz i.la.vɑ̃s œ̃ ʃifʁ e œ̃ te.mwa.ɲaʒ/', 'poor a-pwee-YAY sa TEZ ee-la-VAHⁿSS uhⁿ SHEEFR ay uhⁿ tay-mwa-NYAZH', ['reponse', 'preuve'], FCVDR),
  sent(1592, 'Cet argument repose sur une affirmation, pas sur une preuve.', 'This argument rests on a claim, not on evidence.', '/sɛ.taʁ.ɡy.mɑ̃ ʁə.poz sy.ʁy.na.fiʁ.ma.sjɔ̃ pa sy.ʁyn pʁœv/', 'seh-tar-gü-MAHⁿ ruh-POHZ sü-rü-na-feer-ma-SYOHⁿ pa sü-rün PRUHV', ['reponse', 'preuve'], FCVDR),
  sent(1593, 'Il suppose que tout le monde peut payer par carte.', 'He assumes that everyone can pay by card.', '/il sy.poz kə tu lə mɔ̃d pø pɛ.je paʁ kaʁt/', 'eel sü-POHZ kuh too luh MOHⁿD peu peh-yay par KART', ['reponse', 'presuppose'], FCVDR),
  sent(1594, 'On notera que l’auteur a intérêt à cette réforme.', 'It should be noted that the writer has a stake in this reform.', '/ɔ̃ nɔt.ʁa kə lo.tœʁ a ɛ̃.te.ʁɛ a sɛt ʁe.fɔʁm/', 'ohⁿ not-RA kuh loh-TUHR a ehⁿ-tay-REH a set ray-FORM', ['reponse', 'interet'], FCVDR),
  sent(1595, 'Le ton est assuré, parfois méprisant.', 'The tone is self-assured, at times dismissive.', '/lə tɔ̃ ɛ.ta.sy.ʁe paʁ.fwa me.pʁi.zɑ̃/', 'luh TOHⁿ eh-ta-sü-RAY par-fwa may-pree-ZAHⁿ', ['reponse', 'ton']),
  sent(1596, 'En somme, la thèse est claire, mais les preuves sont fragiles.', 'All in all, the thesis is clear, but the evidence is weak.', '/ɑ̃ sɔm la tɛz ɛ klɛʁ mɛ le pʁœv sɔ̃ fʁa.ʒil/', 'ahⁿ SOMM la TEZ eh KLEHR meh lay PRUHV sohⁿ fra-ZHEEL', ['reponse', 'conclusion'], FCVDR),
  phrase(1597, 'un argument solide, un argument fragile', 'a strong argument, a weak argument', '/œ̃.naʁ.ɡy.mɑ̃ sɔ.lid œ̃.naʁ.ɡy.mɑ̃ fʁa.ʒil/', 'uhⁿ-nar-gü-mahⁿ so-LEED uhⁿ-nar-gü-mahⁿ fra-ZHEEL', ['preuve']),
  sent(1598, 'Une réponse critique résume, juge, puis cite.', 'A critical response summarises, judges, then quotes.', '/yn ʁe.pɔ̃s kʁi.tik ʁe.zym ʒyʒ pɥi sit/', 'ün ray-pohⁿss kree-TEEK ray-ZÜM ZHÜZH pwee SEET', ['regle', 'reponse'], FC,
    rule('Ta réponse critique commence par ton avis sur les espèces ?', 'Non : d’abord la thèse de l’auteur, avec tes mots. Ensuite, tu juges ses preuves et sa position, citations à l’appui.')),
  sent(1599, 'Huit paiements sur dix, ce n’est pas huit personnes sur dix.', 'Eight payments out of ten is not eight people out of ten.', '/ɥi pɛ.mɑ̃ syʁ dis sə nɛ pa ɥi pɛʁ.sɔn syʁ dis/', 'wee peh-MAHⁿ sür DEESS suh neh pa wee pehr-SONN sür DEESS', ['reponse', 'preuve'], FCVDR),
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
 *  §I. THE ANCHOR TEXTS
 *
 *  One per act, 200 to 350 words (B2-BUILD-LOG « Reading at B2 »), each a
 *  real B2 genre. They live here so the reading, the quiz and the task
 *  cannot drift apart. Acts 7 and 9 print TWO short texts as one anchor,
 *  because comparing them is the move. Word counts are asserted by the
 *  scratch check.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a news article whose headline claims more than its body proves. */
export const SIESTE_TEXT =
  "LA SIESTE AU BUREAU, NOUVELLE ARME DE LA PRODUCTIVITÉ ? Une sieste de vingt minutes en début d’après-midi augmenterait la productivité des salariés de 30 %. C’est la conclusion d’une étude publiée mardi par l’Institut Morphée, qui a suivi pendant deux mois 120 employés d’une entreprise lyonnaise de logiciels. Chaque jour, la moitié d’entre eux pouvait s’isoler vingt minutes dans une capsule de repos ; l’autre moitié travaillait normalement. Les résultats semblent spectaculaires : les salariés « siesteurs » se disent plus concentrés, moins irritables et plus créatifs. « La sieste n’est plus un luxe, c’est un investissement », affirme Claire Dumoulin, directrice de l’Institut. Encore faut-il regarder de près. La productivité n’a pas été mesurée : ce sont les salariés eux-mêmes qui ont noté leur forme, sur une échelle de 1 à 10. Ceux qui avaient accès aux capsules savaient qu’ils participaient à l’expérience, ce qui a pu influencer leurs réponses. Enfin, l’étude a été financée par Somnéa, qui fabrique justement ces capsules et en vend déjà à une quarantaine d’entreprises. Un chercheur en psychologie du travail, interrogé par notre rédaction, reconnaît que « de courtes pauses peuvent améliorer l’attention », mais juge le chiffre de 30 % « difficile à prendre au sérieux ». Somnéa, de son côté, prévoit d’équiper « toutes les grandes entreprises de la région d’ici trois ans ».";

/** Act 2: an opinion column whose thesis arrives after a long concession. */
export const NOTES_TEXT =
  "NOTES : LE THERMOMÈTRE N’EST PAS LA FIÈVRE. Chronique de Sophie Van Acker. Chaque rentrée, le même débat revient : faut-il supprimer les notes à l’école ? Les arguments contre elles sont connus. Un 8 sur 20 humilie plus qu’il n’explique. Les élèves apprennent à viser la note plutôt que la compétence. Et une moyenne additionne des choses qui n’ont rien à voir entre elles : l’orthographe et la géométrie, la motivation d’octobre et la fatigue de juin. Tout cela est vrai. On aurait tort, pourtant, d’en conclure qu’il faut casser le thermomètre. Là où les notes ont été supprimées, elles sont souvent revenues par la fenêtre : des pastilles de couleur, des « acquis » et des « en voie d’acquisition » que les parents traduisent aussitôt en chiffres. Les élèves ne sont pas dupes non plus : un feu orange reste un 10 sur 20. Le problème n’est donc pas la note, mais ce qu’on en fait. Une note seule ne dit rien ; une note accompagnée de deux lignes qui disent ce qui est réussi et ce qui reste à travailler devient une information. C’est plus long à écrire, j’en conviens, et les enseignants manquent déjà de temps. Mais c’est à cela que devrait servir le temps gagné sur les réunions et les formulaires. Gardons les notes, et rendons-les bavardes.";

/** Act 3: a study summary that states its own limits. */
export const PARCS_TEXT =
  "RÉSUMÉ D’ÉTUDE · Parcs de quartier et bien-être des adolescents. Objectif. L’Observatoire de la santé urbaine de Sherbrooke a voulu savoir si la proximité d’un parc est liée au bien-être des 12-17 ans. Méthode. En 2025, 1 840 élèves de onze écoles secondaires ont rempli un questionnaire sur leur humeur, leur sommeil et leurs activités. Les chercheurs ont ensuite mesuré la distance entre le domicile de chaque élève et le parc le plus proche. Résultats. Les adolescents qui habitent à moins de cinq cents mètres d’un parc déclarent en moyenne moins de symptômes d’anxiété que les autres : 21 % contre 29 %. Ils disent aussi dormir un peu plus longtemps, environ vingt minutes par nuit. L’écart persiste quand on tient compte de l’âge et du sexe. Limites. L’étude montre un lien, pas une cause. Les quartiers riches en parcs sont aussi, souvent, des quartiers plus aisés, et le revenu des familles n’a pas pu être pris en compte. Les symptômes sont déclarés par les élèves eux-mêmes et non évalués par un professionnel. Enfin, l’étude ne dit pas si les adolescents fréquentent réellement ces parcs. Conclusion des auteurs. Ces résultats justifient d’étudier plus précisément le rôle des espaces verts, par exemple en suivant les mêmes élèves pendant plusieurs années. Ils ne permettent pas, à eux seuls, de recommander une politique d’aménagement.";

/** Act 4: a letter to the editor built on three unstated assumptions. */
export const COURRIER_TEXT =
  "COURRIER DES LECTEURS · « Notre centre-ville se meurt ». Madame, Monsieur, j’habite la vieille ville de Châtel-sur-Broye depuis quarante ans, et je n’ai jamais vu la rue des Tanneurs aussi triste. Depuis que la commune l’a rendue piétonne, il y a dix-huit mois, trois commerces ont fermé : la mercerie, le magasin de chaussures et la librairie des Remparts, où j’achetais mes journaux. Faut-il vous faire un dessin ? Les responsables nous expliquent que les piétons flânent davantage et que la rue est plus agréable. Mais qui, à mon âge, va venir à pied depuis les hauts de la ville avec ses courses ? Les clients d’avant venaient en voiture ; ceux d’aujourd’hui, s’ils existent, n’achètent rien : ils se promènent. Quant aux jeunes, tous les jeunes passent leur vie sur leur téléphone et commandent tout en ligne : ce ne sont pas eux qui feront vivre nos boutiques. On me répondra que les commerces ferment partout, à cause d’Internet. C’est peut-être vrai ailleurs, pas chez nous : ces boutiques marchaient très bien il y a vingt ans. Soit on rouvre la rue, soit le centre meurt. Je demande donc au Conseil communal de la rouvrir aux voitures, au moins le samedi, avant qu’il ne soit trop tard. Une ville sans voitures est une ville sans vie. Gérard Chappuis, Châtel-sur-Broye.";

/** Act 5: a local news story whose every sentence carries a marker of
 *  distance. The listening of the act is a different story, on purpose. */
export const PISCINE_TEXT =
  "PISCINE MUNICIPALE : UN CHANTIER QUI COÛTE CHER. La rénovation de la piscine municipale de Belmont-sur-Rivière aurait coûté près de deux fois plus que prévu. Selon des documents consultés par notre rédaction, la facture atteindrait 7,8 millions de dollars, contre 4 millions annoncés au lancement des travaux, en 2023. Le maire, Denis Arsenault, reconnaît un « dépassement », qu’il juge toutefois « raisonnable compte tenu du contexte ». Il l’explique par la hausse du prix des matériaux et par des « découvertes imprévues » dans les fondations, qui auraient exigé des travaux supplémentaires. Cette version ne convainc pas tout le monde. Pour la conseillère d’opposition Maude Leclerc, ces problèmes de fondations étaient connus dès 2021 : un rapport d’ingénieurs les signalait, affirme-t-elle, mais il n’aurait jamais été transmis au conseil. La mairie dément avoir caché quoi que ce soit. Autre point sensible : le contrat a été attribué sans appel d’offres, prétendument pour gagner du temps. L’entreprise retenue, Bâtiments Rivard et fils, appartient au beau-frère d’un conseiller municipal, qui assure n’avoir jamais participé aux discussions. Le maire promet de publier « l’ensemble des factures » avant la fin du mois. Il semblerait toutefois que certaines pièces du dossier soient introuvables. La piscine, elle, doit rouvrir en juin, avec six mois de retard.";

/** Act 6: an ironic blog post. The stance is the opposite of the words. */
export const BLOG_TEXT =
  "LE BLOG DE LÉA · Merci, le guichet en ligne. Quelle bonne nouvelle : depuis lundi, la mairie de Rochemont a fermé son guichet des cartes de stationnement. Tout se fait désormais « en ligne, simplement et rapidement ». J’ai donc essayé, pleine d’enthousiasme. Première étape, créer un compte. Rien de plus simple : il suffit d’un mot de passe de douze caractères, avec une majuscule, un chiffre, un symbole et, j’imagine, une goutte de sang. Deuxième étape, joindre une preuve de domicile. Ma facture d’électricité a été refusée trois fois, « format non reconnu ». Le format PDF, sans doute trop moderne. Au bout d’une heure, j’ai voulu appeler. Le numéro indiqué renvoie, bien sûr, vers le site. On n’arrête pas le progrès. Je ne me plains pas pour moi. J’ai un ordinateur, une imprimante et, surtout, du temps libre un mardi soir. Mais je pense à ma voisine, Mme Joly, quatre-vingt-trois ans, qui n’a jamais eu d’adresse électronique. Elle aussi va sans doute adorer la « simplification ». La mairie annonce fièrement que 70 % des demandes sont désormais faites en ligne. Évidemment : il n’y a plus d’autre moyen. Si l’on fermait toutes les boulangeries sauf une, on pourrait aussi annoncer que 100 % des habitants achètent leur pain au même endroit, et parler d’un franc succès. Bref, bravo. Vraiment.";

/** Act 7: a press release, then the news story about the same plan. */
export const TRL_TEXT =
  "TEXTE A · COMMUNIQUÉ DE PRESSE · TRL, Transports régionaux de la Lesse. Namur, le 3 mars. Plan Horizon 2027 : un réseau plus simple, plus vert, plus efficace. TRL est fière de présenter Horizon 2027, un plan ambitieux pour moderniser son réseau. Afin de mieux répondre aux besoins de ses voyageurs, TRL concentrera ses moyens sur les lignes les plus fréquentées, où passera un bus toutes les quinze minutes. Les arrêts peu fréquentés bénéficieront d’un service à la demande, plus souple. Par ailleurs, TRL investira 3 millions d’euros dans quinze bus électriques. « Horizon 2027, c’est un réseau pensé pour les voyageurs d’aujourd’hui », déclare Olivier Masson, directeur général. TEXTE B · ARTICLE · Bus : les villages de la Lesse perdent leurs lignes régulières. Derrière le service à la demande annoncé par TRL se cache la suppression de neuf lignes rurales. À partir de septembre, les habitants de vingt-trois villages devront réserver leur trajet la veille, par application ou par téléphone, du lundi au vendredi. Le week-end, il n’y aura plus de bus du tout. Les quinze bus électriques, eux, sont financés aux deux tiers par la Région. Selon le syndicat des chauffeurs, vingt postes ne seront pas remplacés. TRL, qui a dégagé un bénéfice de 4,2 millions l’an dernier, parle d’une « adaptation nécessaire ». La bourgmestre de Mesnil-sur-Lesse, Anne Lambotte, dénonce un plan « écrit pour les comptables, pas pour les voyageurs ».";

/** Act 8: an advertisement, with its two footnotes. */
export const MATELAS_TEXT =
  "NUAGE+, LE MATELAS QUI CHANGE VOS NUITS. Vous vous réveillez fatigué ? Ce n’est pas votre faute : c’est votre matelas. Nuage+ est le seul matelas conçu avec trois couches de mousse à mémoire de forme et un tissu refroidissant inspiré de la recherche spatiale. Nos ingénieurs ont travaillé trois ans pour vous offrir ce confort unique. Cliniquement testé*, Nuage+ s’adapte à votre corps en quelques secondes. Neuf clients sur dix le recommandent**. Résultat : des nuits plus profondes, des matins plus légers et une énergie retrouvée. Fabriqué en France, livré en quarante-huit heures, essayé cent nuits : si vous n’êtes pas convaincu, nous le reprenons, sans frais. « Depuis que je dors sur Nuage+, je suis une autre personne », témoigne Camille, 34 ans, de Bordeaux. Les experts du sommeil le répètent : un bon matelas, c’est la moitié d’une bonne nuit. Offre de lancement : 30 % de réduction jusqu’au 15 octobre. Pourquoi continuer à mal dormir quand la solution existe ? Rejoignez les milliers de dormeurs qui ont déjà dit adieu aux nuits agitées. Parce que vous méritez le meilleur sommeil de votre vie. * Test réalisé par Nuage+ auprès de 24 volontaires pendant deux semaines. ** Enquête en ligne auprès de 312 clients ayant laissé un avis sur notre site.";

/** Act 9: an official report extract, then a blog on the same topic. */
export const GRATUITE_TEXT =
  "TEXTE A · Extrait du rapport d’évaluation de l’agglomération de Montval, juin. La gratuité du réseau de bus, en vigueur depuis douze mois, s’est traduite par une hausse de la fréquentation de 38 %. Les enquêtes montrent toutefois que 45 % des nouveaux trajets remplacent des déplacements autrefois effectués à pied ou à vélo, et 19 % seulement des trajets en voiture. La baisse du trafic automobile dans le centre est estimée à 4 %, un chiffre proche de la marge d’erreur. Le manque à gagner pour la collectivité, soit 9 millions d’euros de recettes, est couvert par une hausse de la taxe versée par les employeurs. Le rapport recommande de poursuivre l’expérience deux ans avant toute conclusion sur son effet environnemental. TEXTE B · Le blog de Karim, cycliste à Montval. Un an de bus gratuits : la belle affaire ! Tout le monde s’extasie devant les 38 % de hausse. Moi, je vois surtout des bus bondés de gens qui marchaient avant, et toujours autant de voitures sur le boulevard. Neuf millions d’euros, c’est le prix de combien de pistes cyclables ? On nous vend une mesure écologique ; en réalité, c’est un cadeau électoral, payé par les entreprises, donc, au bout du compte, par nous tous. Mais qui osera le dire à six mois des élections ?";

/** Act 10: a DELF B2-style opinion text, for inference and stance items. */
export const DECONNEXION_TEXT =
  "LA DÉCONNEXION NE SE DÉCRÈTE PAS. Depuis quelques années, plusieurs entreprises ont choisi une solution radicale : couper leurs serveurs de messagerie entre 20 h et 7 h. L’intention est louable, et les premiers bilans semblent lui donner raison : dans une société d’assurances qui a tenté l’expérience, les arrêts maladie liés au stress auraient reculé de 12 % en un an. On aurait tort, cependant, de voir dans ce bouton rouge une solution miracle. D’abord, parce qu’il traite le symptôme et non la cause. Si un cadre écrit à 22 h, c’est rarement par plaisir : c’est que sa journée, faite de réunions, ne lui a laissé aucun moment pour le travail de fond. Couper la messagerie ne lui rend pas ce temps ; cela le pousse, au mieux, à se lever plus tôt, au pire, à passer par son téléphone personnel. Ensuite, parce qu’une règle uniforme ignore la diversité des vies. La mère de famille qui préfère quitter le bureau à 16 h et relire ses dossiers une fois les enfants couchés n’a pas besoin qu’on la protège d’elle-même. Faut-il pour autant laisser faire ? Non. Mais la déconnexion se construit dans l’organisation du travail : moins de réunions, des délais réalistes, des managers qui n’attendent pas de réponse avant le lendemain. Le reste relève de la responsabilité de chacun et, sans doute, d’un peu de confiance.";

/** Act 11: THE TASK TEXT. A tribune with a clear thesis, one sourced figure
 *  that does not say what the writer makes it say, one anecdote, one bare
 *  assertion, two unstated assumptions, a self-assured tone and a writer
 *  with a stake in his own proposal. Printed twice: as the act's reading,
 *  and inside the task brief (no `source` field on `task`). */
export const ESPECES_TEXT =
  "TRIBUNE · Il est temps de dire adieu aux espèces. Par Hugo Lemaire, fondateur de Paylo, application de paiement mobile. Les pièces et les billets appartiennent au passé. Selon l’Institut Carrel, huit paiements sur dix se font déjà par carte ou par téléphone dans nos commerces. Pourquoi continuer à entretenir un système coûteux pour une minorité ? L’argent liquide coûte cher à tout le monde. Les commerçants perdent du temps à compter leur caisse, à se rendre à la banque, à se protéger des vols. Un boulanger de Nantes me confiait récemment qu’il passait « une heure par jour » à gérer sa monnaie. Une heure qu’il pourrait consacrer à ses clients. Surtout, tout le monde le sait : les espèces servent d’abord à la fraude et au travail au noir. Un paiement numérique laisse une trace ; un billet, non. Supprimer le liquide, c’est donc faire reculer l’économie souterraine. On m’objectera que certaines personnes, notamment les plus âgées, tiennent à leurs billets. Elles s’adapteront, comme elles se sont adaptées au téléphone portable. Quant aux pannes, elles sont devenues si rares qu’il serait absurde d’organiser toute l’économie autour d’elles. D’autres pays ont déjà fait ce choix. Nous prenons, une fois de plus, du retard. Il est temps que les pouvoirs publics fixent une date : 2030, par exemple. Les consommateurs, j’en suis convaincu, ne regretteront pas leur porte-monnaie.";

/** What a critical response to ESPECES_TEXT must hold. The rubric, the
 *  model answer and the grader notes are written against this. */
export const ESPECES_KEY = {
  these: 'Il faut supprimer les espèces, avec une date fixée par l’État, par exemple 2030.',
  preuves: [
    'Un chiffre sourcé (huit paiements sur dix), qui compte des paiements et non des personnes : il ne prouve pas que la minorité soit petite.',
    'Un témoignage, un seul boulanger : un exemple, pas une preuve.',
    'Une affirmation sans preuve : « tout le monde le sait », les espèces servent d’abord à la fraude.',
  ],
  presupposes: [
    'Tout le monde a une carte, un téléphone et une connexion.',
    'Les personnes âgées s’adapteront comme elles l’ont fait pour le portable.',
    'Les pannes sont assez rares pour être ignorées.',
  ],
  position: 'Un auteur très favorable, au ton assuré, parfois méprisant (« une fois de plus », « il serait absurde »), qui ne nuance rien.',
  interet: 'L’auteur fonde une application de paiement : il a intérêt à la réforme qu’il défend.',
} as const;
