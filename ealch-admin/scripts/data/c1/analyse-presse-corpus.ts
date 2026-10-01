// c1.24.l1 « Analyser la presse » — the authored corpus, the imports, the
// anchor texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape, strategy variant)
// on top of B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md
// (« What is different at C1 »). Structural model: b2.24
// (`../b2/lecture-critique-*`).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later lessons may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   PRESS ANALYSIS AT C1: THE GENRE, THE SHAPE AND THE FRAME OF A NEWS TEXT,
//   AND TWO TREATMENTS OF ONE EVENT COMPARED.
//
//     act 1   two front pages, one festival (the problem); recap of the
//             lessons it builds on, by trail position
//     act 2   the dispatch and the inverted pyramid
//     act 3   the parts of an article: surtitre, titre, chapô, attaque,
//             intertitre, chute, légende
//     act 4   the report (reportage): on the spot, in the present, and the
//             reporter's choice of whom to meet
//     act 5   the editorial: the paper's own voice (unsigned in France,
//             often signed by an editorial writer in Québec)
//     act 6   the column and the billet: the « je » that is a byline
//     act 7   the op-ed (tribune) and the open letter: who signs, the
//             paper's disclaimer
//     act 8   framing by the choice and order of sources
//     act 9   framing by figures and by photo captions
//     act 10  loaded pairs and connotation
//     act 11  two treatments of one event compared
//     act 12  the task: a 250 to 400 word comparison of two treatments
//
//   NOT OWNED, CITED BY TRAIL POSITION ONLY (act 1 recaps, never re-teaches):
//     - b1.34 « Les médias » (« la leçon 34 du B1 »): media word families,
//       quotidien / hebdo, rubrique, éditorial and chronique AS WORDS, the
//       headline noun and dropped article, titre et chapeau, selon / d’après,
//       the hearsay conditional, checking a source. Its rows sit in theme
//       `journalisme` and are reused in act 1 by id.
//     - b2.24 « Lire de façon critique » (« la leçon 24 du B2 »): thesis,
//       evidence, the writer’s distance and the evaluative reporting verbs,
//       tone and irony, soft words, two texts on one topic. This lesson does
//       not re-teach reporting verbs or irony; act 6 names humour only as a
//       genre signal of the billet.
//     - b2.10 « La nominalisation » (« la leçon 10 du B2 ») and b1.18 « La
//       voix passive » (« la leçon 18 du B1 »): hiding the agent. Recapped
//       in act 1 only.
//     - c1.20 « Lire entre les lignes » (« la leçon 20 du C1 »), written in
//       parallel in wave 1: concession then restriction, presupposition,
//       irony at C1. Cited in words in act 1 and the roundup; nothing here
//       depends on its files.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-09-30 inside BEGIN TRANSACTION READ
//      ONLY … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `strategies-de-comprehension`: range b1-c1 (widened in C1 Phase
//     0), sub-themes include « analyser la presse ». Rows: b1 376
//     (.1000-.1389), b2 365 (.1400-.1764), c1 0 before wave 1.
//
//  2. ID BLOCK: this lesson owns `fr.c1.strategies-de-comprehension.2000`
//     to `.2199` AND NOTHING ELSE (ledger, C1-BUILD-LOG.md). The block was
//     re-probed free at every level on 2026-09-30. c1.20 owns .1800-.1999 in
//     the same theme, written in parallel: not touched. Used: .2000-.2155,
//     156 rows in twelve act blocks (§G).
//
//  3. REUSED ROWS (§F). Fourteen are in the local seed (seedPlusPacks) and
//     their `fr` is printed through `src()`. Three are PUBLISHED IN POSTGRES
//     BUT ABSENT FROM THE SEED CUT, and are carried in `DB_ONLY_ROWS` with
//     their fr / en / drills copied verbatim from Postgres on 2026-09-30:
//       fr.b2.journalisme.037   la ligne éditoriale      {flashcard,voiceflash}
//       fr.b2.journalisme.050   un article d'opinion     {flashcard,voiceflash}
//       fr.b2.litterature.071   la connotation           {flashcard,review}
//     The importer accepts a reused row published in Postgres; the merge
//     pulls it into the seed layer. No legacy c1 row is reused.
//
//  4. NO AUTHORED ROW REPEATS A PUBLISHED HEADWORD. Every `fr` was folded
//     and compared with every Postgres row (scratch check, 2026-09-30).
//     Avoided on purpose: « la connotation » (b2.litterature.071, reused
//     instead), « la chute » (b1.cinema.067, b2.litterature.037), « la
//     légende » (b2.musees.054), « un reportage » (b1.journalisme.037), « la
//     une », « le titre et le chapeau ». The rows here say « la chute d’un
//     article », « la légende d’une photo », « un reportage sur le terrain ».
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR. A real
//     /n/ or /m/ after a vowel is written double so `hasPlainNasal` and
//     `hasPlainNasalFor` cannot read it as a nasal vowel: semaine suh-MENN,
//     scène SENN, personne(s) pehr-SONN, donne(nt) donn, bonne BONN, tribune
//     tree-BÜNN, anonyme a-no-NEEMM, Madame ma-damm, automne ahⁿ-noh-TONN,
//     somme SOMM, peine PENN, dizaines dee-ZENN, impressionne ehⁿ-preh-SYONN,
//     événement lay-venn-MAHⁿ, obtiennent op-TYENN, une (la une) ÜNN.
//     Every doubled consonant is really pronounced. No U+203F tie anywhere,
//     in a respelling or an IPA field.
//
//  6. THE ANCHOR TEXTS IN §I ARE ORIGINAL, WRITTEN FOR THE LESSON (« texte
//     original écrit pour la leçon »). No extract of any real outlet. Every
//     outlet, agency, station, person, association, company and figure is
//     invented: Le Courrier de Montrivage (a daily), L’Hebdo des Rives (a
//     weekly), the Agence Hermine Presse (AHP), Radio Méandre, the town of
//     Montrivage, its quai Saint-Clair, pont des Saules, place du Marché,
//     boulevard des Écluses, rue des Cordiers and canal; the festival Les
//     Nuits du Quai; the associations Quai pour tous, Canal vivant and the
//     collectif Parents de la Rive-Est; every named person (Inès Garnier,
//     Bernard Lemoine, Hélène Morin, Sophie Klein, Chloé Martel, Lucie
//     Fontaine, Robert Chauvin, Aïcha Benali, Odile Vasseur, Nadia Ferrand,
//     Julien Masson, Claire Dubreuil, Martine Roche, Yannick Leroy, Paul
//     Girard, Gérard Pons, Daniel Roussel, Camille, Marc Delorme, Margaux).
//     No living politician, no real campaign, no real current event.
//
//  7. FACT CHECK LIST (for the pre-review). Every factual claim about the
//     REAL world made anywhere in this lesson, and every quotation:
//       a. « Au Québec, l’éditorial est souvent signé par un éditorialiste ;
//          en France, il paraît souvent sans signature. Dans les deux cas,
//          il parle au nom du journal. » (act 5 rule card 2069, sheet
//          sheet-genres, term `signature`). THE ONE FRANCE / QUÉBEC
//          SENTENCE the brief allows. PRE-REVIEW 2026-09-30: the France
//          half was NOT supported (OQLF GDT « éditorial »: « signé ou non
//          signé »; CLEMI-based fiches: « souvent signé du rédacteur en
//          chef »; b1.34 itself pairs « le rédacteur en chef et
//          l’éditorial »). Rewritten everywhere as: « Signé ou non,
//          l’éditorial parle au nom du journal : certains journaux le
//          publient sans signature, d’autres le font signer par le
//          rédacteur en chef ou, comme souvent au Québec, par un
//          éditorialiste. »
//       b. « chapô » is the press spelling of « chapeau » in the sense of
//          the short text under a headline (act 3, row 2031, term `chapo`).
//          PRE-REVIEW: OQLF GDT « chapeau »: the term is « chapeau »,
//          « chapô » is newsroom jargon. The term body now says so.
//       c. The definitions of the genres (dépêche, article, reportage,
//          éditorial, chronique, billet, tribune, lettre ouverte), of the
//          pyramide inversée, surtitre, attaque, intertitre, chute and
//          légende, as given in sheets sheet-genres and sheet-structure. To
//          check each against CLEMI (cite, never copy) and Le Robert.
//       d. « Les opinions exprimées n’engagent que leurs auteurs » as the
//          usual disclaimer formula of an op-ed page (act 7, row 2085):
//          a generic formula, no outlet quoted.
//       e. A dispatch carries a dateline (place and date) and the agency's
//          acronym, and is written to be cut from the bottom (act 2).
//     QUOTATIONS: none. No literary or press extract is quoted; every text
//     and every line is original. All figures are invented and internal to
//     the lesson.
//
//  8. LOW-HEAT TOPICS ONLY, for Paul to approve (research plan, decision 7):
//       - a summer music festival (attendance, ticket prices, noise, a
//         midnight finish): acts 1, 3, 6, 9, 11
//       - a school calendar change (an earlier start, two weeks off in the
//         autumn): acts 2, 5, 7
//       - urban works and planning (a market square under works, a bus
//         detour, a riverside redevelopment, a bridge reserved for
//         pedestrians, bikes and buses): acts 2, 4, 8, 10, 12
//     No politics beyond a town council, no party, no election, no crime,
//     no health or religion. The classic pair « manifestants / casseurs »
//     appears only as a named example in sheet sheet-mots, with no event.
//
//  9. APOSTROPHES: every authored French string uses the typographic ’, so
//     the scenario never mixes ’ and ' (the app check). fr.b2.journalisme.050
//     and fr.b2.langue-soignee.1536 carry a straight ' and are never quoted
//     inside the scenario (1536 is not used at all).
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
  id: 'c1.24',
  seq: 24,
  title: 'Newspaper Analysis',
  sub: 'Analyser la presse',
  canDo: 'Can tell a dispatch, an article, a report, an editorial, a column, a billet, an op-ed and an open letter apart by their signals, read the inverted pyramid and the parts of an article, show how the choice and order of sources, figures, captions and loaded words frame an event, and compare two treatments of one event in writing',
  prereqUnitIds: ['b1.34', 'b2.24'],
} as const;

export const LESSON_ID = 'c1.24.l1';
export const THEME = 'strategies-de-comprehension';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief. c1.20 owns 1800-1999 in the same theme. */
export const ID_RANGES = [[2000, 2199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B1 and B2 units are in the seed, with their `seq`; C1 units are not yet,
 *  so C1 positions come from the plan. A C1 surface is French: never a raw
 *  id on screen, always « la leçon N du B1 / B2 / C1 ».
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

/** TODO(import): drop once the c1 units are rows in `content_units`. */
const C1_SEQ_FROM_PLAN: Record<string, number> = { 'c1.20': 20, 'c1.24': 24 };

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  if (band === 'b1' || band === 'b2') {
    const n = SEQ.get(unitId);
    if (!n) throw new Error(`c1.24: ${unitId} is not in the seed`);
    return `la leçon ${n} du ${band.toUpperCase()}`;
  }
  const planned = C1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du C1` : unitRef(unitId);
}

export const MEDIAS_UNIT = 'b1.34';
export const PASSIF_UNIT = 'b1.18';
export const NOMINAL_UNIT = 'b2.10';
export const CRITIQUE_UNIT = 'b2.24';
export const LIGNES_UNIT = 'c1.20';

export const MEDIAS_REF = refFr(MEDIAS_UNIT);
export const PASSIF_REF = refFr(PASSIF_UNIT);
export const NOMINAL_REF = refFr(NOMINAL_UNIT);
export const CRITIQUE_REF = refFr(CRITIQUE_UNIT);
export const LIGNES_REF = refFr(LIGNES_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B134_REFRAME } from '../b1/medias-corpus.ts';
export { REFRAME as B224_REFRAME } from '../b2/lecture-critique-corpus.ts';
export { REFRAME as B210_REFRAME } from '../b2/nominalisation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE FRAME. A photographer's viewfinder, a picture frame laid over a
 *  scene: everything inside it is real, and everything outside it is real
 *  too. The genre is the kind of frame (a wide shot for a dispatch, a close
 *  shot for a report, a mirror for an editorial); the order of sources, the
 *  figure chosen and the caption are where the frame is placed; the loaded
 *  word is the colour of the lens; the hors-champ is what the frame leaves
 *  out. Two papers on one event are two frames on one scene.
 *
 *  It is NOT « the press lies ». Every comparison in the lesson ends on the
 *  same finding: neither text lies, each one chooses. Cynicism fails a C1
 *  paper as surely as credulity does.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un article est un cadre : regarde aussi ce qu’il laisse hors champ.';
export const REFRAME_EN = 'An article is a frame: look also at what it leaves out of the picture.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Les journaux ne disent pas la vérité.',
    why: 'It licenses cynicism and is false where the lesson has to hold: every pair of texts in acts 9, 11 and 12 reports compatible facts. The finding the task rewards is « neither lies, each chooses ».',
  },
  {
    text: 'Devant une info, demande-toi qui la dit, et comment.',
    why: 'b1.34’s reframe, already owned at B1 and quoted in act 1. It finds the source; it says nothing about genre, the inverted pyramid, the order of voices or the hors-champ.',
  },
  {
    text: 'Ce qu’un texte affirme n’est pas ce qu’il prouve.',
    why: 'b2.24’s reframe. True of an op-ed, silent on a report or a dispatch, which prove nothing and claim little: their bias lies in what they select and leave out, which is this lesson’s subject.',
  },
  {
    text: 'Lis le genre avant le texte.',
    why: 'The best line for acts 2 to 7 and empty for acts 8 to 12, where two texts of the same genre frame the same event differently.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from Postgres on 2026-09-30 and, where present, from
 *  seedPlusPacks(); its French is in the trailing comment. `NOT_DECK_ABLE`
 *  rows carry no `flashcard` drill; `NOT_SPEAKABLE` adds the rows with no
 *  `voiceflash`, which a `practice` speak section may never name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.journalisme.1014',                    // Devant une info, demande-toi qui la dit, et comment.  (flashcard only)
    'fr.b1.journalisme.1023',                    // un éditorial, une chronique
    'fr.b1.journalisme.1051',                    // Sous le titre, le chapeau donne l’essentiel.
    'fr.b1.journalisme.1092',                    // Selon nos informations, l’usine fermerait en décembre.
    'fr.b1.journalisme.1146',                    // J’ai croisé trois sources avant d’y croire.
    'fr.b2.strategies-de-comprehension.1406',    // Le titre affirme ; l’article nuance.
    'fr.b2.strategies-de-comprehension.1413',    // Ce qu’un texte affirme n’est pas ce qu’il prouve.  (flashcard only)
    'fr.b2.langue-soignee.1537',                 // Sa nomination a été annoncée lundi.
    'fr.b1.faits-et-procedures.1065',            // La décision a été prise sans nous.
  ],
  act2: [] as string[],
  act3: [] as string[],
  act4: [] as string[],
  act5: [
    'fr.b2.journalisme.037',                     // la ligne éditoriale  (Postgres only)
  ],
  act6: [] as string[],
  act7: [
    'fr.b2.journalisme.050',                     // un article d'opinion  (Postgres only)
  ],
  act8: [] as string[],
  act9: [] as string[],
  act10: [
    'fr.b2.litterature.071',                     // la connotation  (Postgres only; flashcard, review)
  ],
  act11: [] as string[],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied verbatim on 2026-09-30, so `src()` can print them. */
export const DB_ONLY_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: 'fr.b2.journalisme.037', fr: 'la ligne éditoriale', en: 'editorial line', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b2.journalisme.050', fr: "un article d'opinion", en: 'an opinion piece', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b2.litterature.071', fr: 'la connotation', en: 'the connotation', drills: ['flashcard', 'review'] },
];

/** No `voiceflash`: never in a `practice` speak section. All three are
 *  flashcard-able, so they stay in the deck. */
export const NOT_SPEAKABLE = [
  'fr.b1.journalisme.1014',                      // flashcard only
  'fr.b2.strategies-de-comprehension.1413',      // flashcard only
  'fr.b2.litterature.071',                       // flashcard, review
];

/** No `flashcard` drill: nameable, never releasable. None here. */
export const NOT_DECK_ABLE: string[] = [];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: a line met in a text (a
 *  headline, a caption, a loaded phrase), a question an analyst asks a
 *  text, or a line of a comparison the learner can reuse in the task. Each
 *  act also has one flashcard-only rule card (`rule()`), whose prompt is a
 *  situation and whose `fr` is the act's move.
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
  tags, drills, version: 1, grammarPoints: ['analyse-presse'], ...extra,
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

/* ── ACT 1 · DEUX UNES, UN FESTIVAL ─────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(2000, 'Les Nuits du Quai battent leur record d’affluence', 'The Nuits du Quai festival breaks its attendance record', '/le nɥi dy kɛ bat lœʁ ʁə.kɔʁ da.fly.ɑ̃s/', 'lay NWEE dü KEH bat luhr ruh-KOR da-flü-AHⁿSS', ['titre', 'festival']),
  sent(2001, 'Nuits du Quai : les riverains n’en peuvent plus', 'Nuits du Quai: residents have had enough', '/nɥi dy kɛ le ʁi.və.ʁɛ̃ nɑ̃ pœv ply/', 'NWEE dü KEH lay ree-vuh-REHⁿ nahⁿ puhv PLÜ', ['titre', 'festival']),
  sent(2002, 'Le festival a été un succès total, c’est dans le journal.', 'The festival was a total success, it is in the paper.', '/lə fɛs.ti.val a e.te œ̃ syk.sɛ tɔ.tal sɛ dɑ̃ lə ʒuʁ.nal/', 'luh fes-tee-VAL a ay-tay uhⁿ sük-SEH to-TAL seh dahⁿ luh zhoor-NAL', ['naif', 'festival']),
  sent(2003, 'Le Courrier titre sur le record ; L’Hebdo, sur les riverains.', 'Le Courrier headlines the record; L’Hebdo, the residents.', '/lə ku.ʁje titʁ syʁ lə ʁə.kɔʁ lɛb.do syʁ le ʁi.və.ʁɛ̃/', 'luh koo-RYAY TEETR sür luh ruh-KOR leb-DOH sür lay ree-vuh-REHⁿ', ['comparaison', 'festival']),
  sent(2004, 'Deux journaux, un même week-end, deux histoires.', 'Two papers, one weekend, two stories.', '/dø ʒuʁ.no œ̃ mɛm wi.kɛnd dø.zis.twaʁ/', 'deu zhoor-NOH uhⁿ mem wee-KEND deu-zees-TWAR', ['comparaison'], FCVDR),
  sent(2005, 'Quel genre de texte ai-je sous les yeux ?', 'What kind of text do I have in front of me?', '/kɛl ʒɑ̃ʁ də tɛkst ɛʒ su le.zjø/', 'kel ZHAHⁿR duh TEKST ezh soo lay-ZYEU', ['question', 'genre']),
  sent(2006, 'Qui parle en premier, et qui a le dernier mot ?', 'Who speaks first, and who has the last word?', '/ki paʁl ɑ̃ pʁə.mje e ki a lə dɛʁ.nje mo/', 'kee parl ahⁿ pruh-MYAY ay kee a luh dehr-nyay MOH', ['question', 'sources']),
  sent(2007, 'Qu’est-ce que l’article laisse hors champ ?', 'What does the article leave out of the picture?', '/kɛs kə laʁ.tikl lɛs ɔʁ ʃɑ̃/', 'kess kuh lar-TEEKL less or SHAHⁿ', ['question', 'hors-champ']),
  sent(2008, REFRAME, REFRAME_EN, '/œ̃.naʁ.tikl ɛ.tœ̃ kadʁ ʁə.ɡaʁd o.si sə kil lɛs ɔʁ ʃɑ̃/', 'uhⁿ-nar-TEEKL eh-tuhⁿ KADR ruh-gard oh-SEE suh keel less or SHAHⁿ', ['regle'], FC,
    rule('Deux journaux racontent le même festival. Lequel dit vrai ?', 'Peut-être les deux : un article est un cadre. Regarde ce qu’il montre, et aussi ce qu’il laisse hors champ.')),
  sent(2009, 'Les deux articles donnent le même chiffre, mais pas à la même place.', 'Both articles give the same figure, but not in the same place.', '/le dø.zaʁ.tikl dɔn lə mɛm ʃifʁ mɛ pa a la mɛm plas/', 'lay deu-zar-TEEKL donn luh mem SHEEFR meh pa a la mem PLASS', ['comparaison', 'chiffres']),
  sent(2010, 'J’ai lu un journal, pas l’événement.', 'I read a newspaper, not the event.', '/ʒe ly œ̃ ʒuʁ.nal pa le.vɛn.mɑ̃/', 'zhay lü uhⁿ zhoor-NAL pa lay-venn-MAHⁿ', ['methode'], FCVDR),
];

/* ── ACT 2 · LA DÉPÊCHE ET LA PYRAMIDE ──────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  phrase(2011, 'la pyramide inversée', 'the inverted pyramid', '/la pi.ʁa.mid ɛ̃.vɛʁ.se/', 'la pee-ra-MEED ehⁿ-vehr-SAY', ['pyramide']),
  sent(2012, 'L’essentiel tient dans le premier paragraphe.', 'The essentials fit in the first paragraph.', '/le.sɑ̃.sjɛl tjɛ̃ dɑ̃ lə pʁə.mje pa.ʁa.ɡʁaf/', 'lay-sahⁿ-SYEL tyehⁿ dahⁿ luh pruh-myay pa-ra-GRAF', ['pyramide'], FCVDR),
  sent(2013, 'Une dépêche se coupe par le bas sans perdre l’essentiel.', 'A dispatch can be cut from the bottom without losing the essentials.', '/yn de.pɛʃ sə kup paʁ lə ba sɑ̃ pɛʁdʁ le.sɑ̃.sjɛl/', 'ün day-PESH suh koop par luh BA sahⁿ pehrdr lay-sahⁿ-SYEL', ['pyramide', 'depeche']),
  phrase(2014, 'une dépêche d’agence', 'an agency dispatch, a wire story', '/yn de.pɛʃ da.ʒɑ̃s/', 'ün day-pesh da-ZHAHⁿSS', ['depeche']),
  sent(2015, 'Qui, quoi, où, quand : tout est dans les premières lignes.', 'Who, what, where, when: it is all in the first lines.', '/ki kwa u kɑ̃ tu.tɛ dɑ̃ le pʁə.mjɛʁ liɲ/', 'KEE KWA OO KAHⁿ too-teh dahⁿ lay pruh-myehr LEENY', ['pyramide']),
  sent(2016, 'La dépêche ne dit jamais « je ».', 'A dispatch never says "I".', '/la de.pɛʃ nə di ʒa.mɛ ʒə/', 'la day-PESH nuh dee zha-meh ZHUH', ['depeche', 'genre']),
  sent(2017, 'Le conseil scolaire a adopté un nouveau calendrier mardi soir.', 'The school board adopted a new calendar on Tuesday evening.', '/lə kɔ̃.sɛj skɔ.lɛʁ a a.dɔp.te œ̃ nu.vo ka.lɑ̃.dʁi.je maʁ.di swaʁ/', 'luh kohⁿ-SEY sko-LEHR a a-dop-TAY uhⁿ noo-voh ka-lahⁿ-dree-YAY mar-dee SWAR', ['depeche', 'calendrier']),
  sent(2018, 'Les cours commenceront une semaine plus tôt, le lundi 23 août.', 'Classes will start a week earlier, on Monday 23 August.', '/le kuʁ kɔ.mɑ̃s.ʁɔ̃ yn sə.mɛn ply to lə lœ̃.di vɛ̃t.tʁwa u/', 'lay KOOR ko-mahⁿss-ROHⁿ ün suh-MENN plü TOH luh luhⁿ-dee vehⁿt-trwa OO', ['depeche', 'calendrier'], FCVDR),
  sent(2019, 'Le texte a été adopté par neuf voix contre quatre.', 'The text was adopted by nine votes to four.', '/lə tɛkst a e.te a.dɔp.te paʁ nœf vwa kɔ̃tʁ katʁ/', 'luh TEKST a ay-tay a-dop-TAY par nuhf VWA kohⁿtr KATR', ['depeche', 'calendrier']),
  sent(2020, 'Le syndicat enseignant regrette de ne pas avoir été consulté.', 'The teachers’ union regrets not having been consulted.', '/lə sɛ̃.di.ka ɑ̃.sɛ.ɲɑ̃ ʁə.ɡʁɛt də nə pa.za.vwaʁ e.te kɔ̃.syl.te/', 'luh sehⁿ-dee-KA ahⁿ-seh-NYAHⁿ ruh-GRET duh nuh pa-za-vwar ay-tay kohⁿ-sül-TAY', ['depeche', 'calendrier']),
  sent(2021, 'Dans une dépêche, l’ordre dit l’importance.', 'In a dispatch, the order tells you the importance.', '/dɑ̃.zyn de.pɛʃ lɔʁdʁ di lɛ̃.pɔʁ.tɑ̃s/', 'dahⁿ-zün day-PESH LORDR dee lehⁿ-por-TAHⁿSS', ['regle', 'pyramide'], FC,
    rule('Une dépêche place la réaction des enseignants au troisième paragraphe. Pourquoi là ?', 'Parce que l’agence la juge moins importante que la décision elle-même. Dans une dépêche, l’ordre dit l’importance : l’essentiel d’abord, le contexte à la fin.')),
  sent(2022, 'Il est sept heures, voici les informations de Radio Méandre.', 'It is seven o’clock; here is the news on Radio Méandre.', '/i.lɛ sɛ.tœʁ vwa.si le.zɛ̃.fɔʁ.ma.sjɔ̃ də ʁa.djo me.ɑ̃dʁ/', 'ee-leh seh-TUHR vwa-see lay-zehⁿ-for-ma-SYOHⁿ duh ra-dyoh may-AHⁿDR', ['radio', 'ligne7']),
  sent(2023, 'À partir de lundi, la ligne 7 ne desservira plus le centre-ville.', 'From Monday, route 7 will no longer serve the town centre.', '/a paʁ.tiʁ də lœ̃.di la liɲ sɛt nə de.sɛʁ.vi.ʁa ply lə sɑ̃.tʁə.vil/', 'a par-teer duh luhⁿ-DEE la leeny SET nuh day-sehr-vee-RA plü luh sahⁿ-truh-VEEL', ['radio', 'ligne7']),
  sent(2024, 'Les bus passeront désormais par le boulevard des Écluses.', 'Buses will now go along the boulevard des Écluses.', '/le bys pas.ʁɔ̃ de.zɔʁ.mɛ paʁ lə bul.vaʁ de.ze.klyz/', 'lay BÜSS pass-ROHⁿ day-zor-MEH par luh bool-var day-zay-KLÜZ', ['radio', 'ligne7']),
  sent(2025, 'La société de transport invoque les travaux de la place du Marché.', 'The transit company cites the works on the place du Marché.', '/la sɔ.sje.te də tʁɑ̃s.pɔʁ ɛ̃.vɔk le tʁa.vo də la plas dy maʁ.ʃe/', 'la so-syay-TAY duh trahⁿss-POR ehⁿ-VOK lay tra-VOH duh la plass dü mar-SHAY', ['radio', 'ligne7']),
  sent(2026, 'Le détour devrait durer au moins six mois.', 'The detour should last at least six months.', '/lə de.tuʁ də.vʁɛ dy.ʁe o mwɛ̃ si mwa/', 'luh day-TOOR duh-vreh dü-RAY oh mwehⁿ see MWA', ['radio', 'ligne7']),
  sent(2027, 'Plusieurs usagers dénoncent un trajet allongé de dix minutes.', 'Several passengers complain of a journey ten minutes longer.', '/ply.zjœ.ʁy.za.ʒe de.nɔ̃s œ̃ tʁa.ʒɛ a.lɔ̃.ʒe də di mi.nyt/', 'plü-zyuh-rü-za-ZHAY day-NOHⁿSS uhⁿ tra-ZHEH a-lohⁿ-ZHAY duh dee mee-NÜT', ['radio', 'ligne7']),
  sent(2028, 'Une navette gratuite est à l’étude.', 'A free shuttle is being considered.', '/yn na.vɛt ɡʁa.tɥi.tɛ.ta le.tyd/', 'ün na-VET gra-twee-teh-ta lay-TÜD', ['radio', 'ligne7']),
  sent(2029, 'La ligne 7 transporte environ quatre mille voyageurs par jour.', 'Route 7 carries about four thousand passengers a day.', '/la liɲ sɛt tʁɑ̃s.pɔʁt ɑ̃.vi.ʁɔ̃ katʁ mil vwa.ja.ʒœʁ paʁ ʒuʁ/', 'la leeny SET trahⁿss-PORT ahⁿ-vee-ROHⁿ katr meel vwa-ya-ZHUHR par ZHOOR', ['radio', 'ligne7']),
];

/* ── ACT 3 · DU SURTITRE À LA CHUTE ─────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  phrase(2030, 'le surtitre, au-dessus du titre', 'the kicker, the small line above the headline', '/lə syʁ.titʁ o.də.sy dy titʁ/', 'luh sür-TEETR oh-duh-sü dü TEETR', ['structure']),
  phrase(2031, 'le chapô, ou chapeau', 'the standfirst (chapô, as journalists spell it)', '/lə ʃa.po u ʃa.po/', 'luh sha-POH oo sha-POH', ['structure']),
  phrase(2032, 'l’attaque d’un article', 'the opening lines of an article, the lede', '/la.tak dœ̃.naʁ.tikl/', 'la-TAK duhⁿ-nar-TEEKL', ['structure']),
  phrase(2033, 'la chute d’un article', 'the closing line of an article', '/la ʃyt dœ̃.naʁ.tikl/', 'la SHÜT duhⁿ-nar-TEEKL', ['structure']),
  phrase(2034, 'un intertitre au milieu de l’article', 'a subheading in the middle of the article', '/œ̃.nɛ̃.tɛʁ.titʁ o mi.ljø də laʁ.tikl/', 'uhⁿ-nehⁿ-tehr-TEETR oh mee-lyeu duh lar-TEEKL', ['structure']),
  phrase(2035, 'la légende d’une photo', 'the caption of a photo', '/la le.ʒɑ̃d dyn fɔ.to/', 'la lay-ZHAHⁿD dün fo-TOH', ['structure', 'image']),
  sent(2036, 'Le chapô résume l’article et en donne l’angle.', 'The standfirst sums up the article and gives its angle.', '/lə ʃa.po ʁe.zym laʁ.tikl e ɑ̃ dɔn lɑ̃ɡl/', 'luh sha-POH ray-züm lar-TEEKL ay ahⁿ donn LAHⁿGL', ['structure'], FCVDR),
  sent(2037, 'Un titre informatif dit ce qui s’est passé ; un titre incitatif donne envie de lire.', 'An informative headline says what happened; a teaser headline makes you want to read.', '/œ̃ titʁ ɛ̃.fɔʁ.ma.tif di sə ki sɛ pa.se œ̃ titʁ ɛ̃.si.ta.tif dɔn ɑ̃.vi də liʁ/', 'uhⁿ TEETR ehⁿ-for-ma-TEEF dee suh kee seh pa-SAY uhⁿ TEETR ehⁿ-see-ta-TEEF donn ahⁿ-vee duh LEER', ['structure', 'titre']),
  sent(2038, 'L’article s’ouvre sur une scène : la file d’attente de 10 h 07.', 'The article opens on a scene: the 10:07 queue.', '/laʁ.tikl su.vʁə sy.ʁyn sɛn la fil da.tɑ̃t də di.zœʁ sɛt/', 'lar-TEEKL soo-vruh sü-rün SENN la feel da-TAHⁿT duh dee-zuhr SET', ['structure', 'attaque']),
  sent(2039, 'La chute laisse le lecteur sur une question.', 'The closing line leaves the reader with a question.', '/la ʃyt lɛs lə lɛk.tœʁ sy.ʁyn kɛs.tjɔ̃/', 'la SHÜT less luh lek-TUHR sü-rün kess-TYOHⁿ', ['structure', 'chute'], FCVDR),
  sent(2040, 'J’ai payé, mais j’ai dû renoncer au troisième soir.', 'I paid, but I had to give up the third night.', '/ʒe pɛ.je mɛ ʒe dy ʁə.nɔ̃.se o tʁwa.zjɛm swaʁ/', 'zhay peh-YAY meh zhay dü ruh-nohⁿ-SAY oh trwa-zyem SWAR', ['attaque', 'festival']),
  sent(2041, 'Quatre mille personnes attendaient déjà à 10 h 07.', 'Four thousand people were already waiting at 10:07.', '/katʁ mil pɛʁ.sɔn a.tɑ̃.dɛ de.ʒa a di.zœʁ sɛt/', 'katr meel pehr-SONN a-tahⁿ-DEH day-ZHA a dee-zuhr SET', ['attaque', 'festival']),
  sent(2042, 'Le passe trois soirs augmente de 20 %.', 'The three-night pass goes up by 20%.', '/lə pas tʁwa swaʁ ɔɡ.mɑ̃t də vɛ̃ puʁ sɑ̃/', 'luh PASS trwa SWAR og-MAHⁿT duh vehⁿ poor SAHⁿ', ['titre', 'festival']),
  sent(2043, 'Le festival, un luxe ?', 'The festival, a luxury?', '/lə fɛs.ti.val œ̃ lyks/', 'luh fes-tee-VAL uhⁿ LÜKS', ['titre', 'festival']),
  sent(2044, 'Le titre accroche, le chapô résume, l’attaque fait entrer.', 'The headline hooks, the standfirst sums up, the opening draws you in.', '/lə titʁ a.kʁɔʃ lə ʃa.po ʁe.zym la.tak fɛ ɑ̃.tʁe/', 'luh TEETR a-KROSH luh sha-POH ray-ZÜM la-TAK feh ahⁿ-TRAY', ['regle', 'structure'], FC,
    rule('Tu as dix secondes pour un article. Que lis-tu ?', 'Le titre, le chapô, puis la légende de la photo : le titre accroche, le chapô résume, l’attaque fait entrer dans l’article.')),
];

/* ── ACT 4 · LE REPORTAGE ───────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  phrase(2045, 'un reportage sur le terrain', 'an on-the-spot report', '/œ̃ ʁə.pɔʁ.taʒ syʁ lə tɛ.ʁɛ̃/', 'uhⁿ ruh-por-TAZH sür luh teh-REHⁿ', ['reportage', 'genre']),
  sent(2046, 'Le reportage raconte au présent, comme si tu y étais.', 'A report tells the story in the present, as if you were there.', '/lə ʁə.pɔʁ.taʒ ʁa.kɔ̃t o pʁe.zɑ̃ kɔm si ty i e.tɛ/', 'luh ruh-por-TAZH ra-kohⁿt oh pray-ZAHⁿ komm see tü ee ay-TEH', ['reportage'], FCVDR),
  sent(2047, 'Il est 6 h 40 et la place sent encore le goudron frais.', 'It is 6:40 and the square still smells of fresh tar.', '/i.lɛ si.zœʁ ka.ʁɑ̃t e la plas sɑ̃.tɑ̃.kɔʁ lə ɡu.dʁɔ̃ fʁɛ/', 'ee-leh see-zuhr ka-RAHⁿT ay la PLASS sahⁿ-tahⁿ-kor luh goo-drohⁿ FREH', ['reportage', 'marche']),
  sent(2048, 'Maintenant, je vends mes tomates entre deux palissades.', 'Now I sell my tomatoes between two hoardings.', '/mɛ̃t.nɑ̃ ʒə vɑ̃ me tɔ.mat ɑ̃.tʁə dø pa.li.sad/', 'mehⁿt-NAHⁿ zhuh vahⁿ may to-MAT ahⁿ-truh deu pa-lee-SAD', ['reportage', 'marche']),
  sent(2049, 'Le journaliste choisit qui il rencontre, et donc qui parle.', 'The journalist chooses whom to meet, and so who speaks.', '/lə ʒuʁ.na.list ʃwa.zi ki il ʁɑ̃.kɔ̃tʁ e dɔ̃k ki paʁl/', 'luh zhoor-na-LEEST shwa-ZEE kee eel rahⁿ-KOHⁿTR ay dohⁿk kee PARL', ['reportage', 'sources'], FCVDR),
  phrase(2050, 'un détail vu sur place', 'a detail seen on the spot', '/œ̃ de.taj vy syʁ plas/', 'uhⁿ day-TAHY vü sür PLASS', ['reportage']),
  sent(2051, 'Un reportage montre ; une dépêche résume.', 'A report shows; a dispatch sums up.', '/œ̃ ʁə.pɔʁ.taʒ mɔ̃tʁ yn de.pɛʃ ʁe.zym/', 'uhⁿ ruh-por-TAZH MOHⁿTR ün day-PESH ray-ZÜM', ['regle', 'reportage'], FC,
    rule('Le texte donne une heure, une odeur et une conversation. Quel genre ?', 'Un reportage : le journaliste était sur place et te fait voir la scène. Une dépêche, elle, résume les faits sans décor.')),
  sent(2052, 'Je suis monté dans le bus de 7 h 12, au terminus des Écluses.', 'I got on the 7:12 bus at the Écluses terminus.', '/ʒə sɥi mɔ̃.te dɑ̃ lə bys də sɛ.tœʁ duz o tɛʁ.mi.nys de.ze.klyz/', 'zhuh swee mohⁿ-TAY dahⁿ luh BÜSS duh seh-tuhr DOOZ oh tehr-mee-NÜSS day-zay-KLÜZ', ['radio', 'ligne7']),
  sent(2053, 'Le bus est plein, et le chauffeur annonce déjà dix minutes de retard.', 'The bus is full, and the driver is already announcing a ten-minute delay.', '/lə bys ɛ plɛ̃ e lə ʃo.fœʁ a.nɔ̃s de.ʒa di mi.nyt də ʁə.taʁ/', 'luh BÜSS eh PLEHⁿ ay luh sho-FUHR a-NOHⁿSS day-zha dee mee-NÜT duh ruh-TAR', ['radio', 'ligne7']),
  sent(2054, 'Une infirmière regarde l’heure toutes les deux minutes.', 'A nurse checks the time every two minutes.', '/y.nɛ̃.fiʁ.mjɛʁ ʁə.ɡaʁd lœʁ tut le dø mi.nyt/', 'ü-nehⁿ-feer-MYEHR ruh-gard LUHR toot lay deu mee-NÜT', ['radio', 'ligne7']),
  sent(2055, '« Je pars un quart d’heure plus tôt, et j’arrive quand même en retard », dit-elle.', '"I leave a quarter of an hour earlier and still arrive late," she says.', '/ʒə paʁ œ̃ kaʁ dœʁ ply to e ʒa.ʁiv kɑ̃ mɛm ɑ̃ ʁə.taʁ di.tɛl/', 'zhuh par uhⁿ kar DUHR plü TOH ay zha-reev kahⁿ mem ahⁿ ruh-TAR dee-TEL', ['radio', 'ligne7']),
  sent(2056, 'Au fond du bus, deux lycéens trouvent le nouveau trajet plus calme.', 'At the back of the bus, two secondary-school pupils find the new route quieter.', '/o fɔ̃ dy bys dø li.se.ɛ̃ tʁuv lə nu.vo tʁa.ʒɛ ply kalm/', 'oh fohⁿ dü BÜSS deu lee-say-EHⁿ troov luh noo-voh tra-ZHEH plü KALM', ['radio', 'ligne7']),
  sent(2057, 'Sur le boulevard des Écluses, le bus avance au pas derrière un camion.', 'On the boulevard des Écluses, the bus crawls behind a lorry.', '/syʁ lə bul.vaʁ de.ze.klyz lə bys a.vɑ̃s o pa dɛ.ʁjɛʁ œ̃ ka.mjɔ̃/', 'sür luh bool-var day-zay-KLÜZ luh BÜSS a-vahⁿss oh PA deh-ryehr uhⁿ ka-MYOHⁿ', ['radio', 'ligne7']),
  sent(2058, 'À 7 h 41, nous arrivons enfin devant la mairie.', 'At 7:41 we finally reach the town hall.', '/a sɛ.tœʁ ka.ʁɑ̃.tœ̃ nu.za.ʁi.vɔ̃ ɑ̃.fɛ̃ də.vɑ̃ la mɛ.ʁi/', 'a seh-tuhr ka-rahⁿt-UHⁿ noo-za-ree-VOHⁿ ahⁿ-FEHⁿ duh-vahⁿ la meh-REE', ['radio', 'ligne7']),
  sent(2059, 'La société de transport promet des horaires adaptés dès le mois prochain.', 'The transit company promises adjusted timetables from next month.', '/la sɔ.sje.te də tʁɑ̃s.pɔʁ pʁɔ.mɛ de.zɔ.ʁɛʁ a.dap.te dɛ lə mwa pʁɔ.ʃɛ̃/', 'la so-syay-TAY duh trahⁿss-POR pro-MEH day-zo-REHR a-dap-TAY deh luh mwa pro-SHEHⁿ', ['radio', 'ligne7']),
];

/* ── ACT 5 · L’ÉDITORIAL ────────────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  phrase(2060, 'un éditorial non signé', 'an unsigned editorial', '/œ̃.ne.di.tɔ.ʁjal nɔ̃ si.ɲe/', 'uhⁿ-nay-dee-to-RYAL nohⁿ see-NYAY', ['editorial', 'genre']),
  sent(2061, 'L’éditorial engage le journal tout entier.', 'The editorial commits the whole paper.', '/le.di.tɔ.ʁjal ɑ̃.ɡaʒ lə ʒuʁ.nal tu.tɑ̃.tje/', 'lay-dee-to-RYAL ahⁿ-GAZH luh zhoor-NAL too-tahⁿ-TYAY', ['editorial'], FCVDR),
  sent(2062, 'Nous l’avons écrit ici même : la méthode compte autant que la décision.', 'We have said it here before: the method counts as much as the decision.', '/nu la.vɔ̃.ze.kʁi i.si mɛm la me.tɔd kɔ̃t o.tɑ̃ kə la de.si.zjɔ̃/', 'noo la-vohⁿ-zay-KREE ee-see MEM la may-TOD kohⁿt oh-tahⁿ kuh la day-see-ZYOHⁿ', ['editorial', 'calendrier']),
  sent(2063, 'Le conseil scolaire doit maintenant convaincre les familles.', 'The school board must now convince families.', '/lə kɔ̃.sɛj skɔ.lɛʁ dwa mɛ̃t.nɑ̃ kɔ̃.vɛ̃kʁ le fa.mij/', 'luh kohⁿ-SEY sko-LEHR dwa mehⁿt-NAHⁿ kohⁿ-vehⁿkr lay fa-MEEY', ['editorial', 'calendrier']),
  sent(2064, 'Une semaine de vacances, ce n’est pas un caprice.', 'A week of holidays is not a whim.', '/yn sə.mɛn də va.kɑ̃s sə nɛ pa.zœ̃ ka.pʁis/', 'ün suh-MENN duh va-KAHⁿSS suh neh pa-zuhⁿ ka-PREESS', ['editorial', 'titre']),
  sent(2065, 'L’article informe ; l’éditorial prend position.', 'The article informs; the editorial takes a stand.', '/laʁ.tikl ɛ̃.fɔʁm le.di.tɔ.ʁjal pʁɑ̃ pɔ.zi.sjɔ̃/', 'lar-TEEKL ehⁿ-FORM lay-dee-to-RYAL prahⁿ po-zee-SYOHⁿ', ['editorial', 'genre'], FCVDR),
  sent(2066, 'Le journal estime que le nouveau calendrier va dans le bon sens.', 'The paper considers that the new calendar is a step in the right direction.', '/lə ʒuʁ.nal ɛs.tim kə lə nu.vo ka.lɑ̃.dʁi.je va dɑ̃ lə bɔ̃ sɑ̃s/', 'luh zhoor-NAL ess-TEEMM kuh luh noo-voh ka-lahⁿ-dree-YAY va dahⁿ luh bohⁿ SAHⁿSS', ['editorial', 'calendrier']),
  sent(2067, 'Il faut regretter que les enseignants n’aient pas été consultés.', 'It is to be regretted that teachers were not consulted.', '/il fo ʁə.ɡʁɛ.te kə le.zɑ̃.sɛ.ɲɑ̃ nɛ pa.ze.te kɔ̃.syl.te/', 'eel foh ruh-greh-TAY kuh lay-zahⁿ-seh-NYAHⁿ neh pa-zay-tay kohⁿ-sül-TAY', ['editorial', 'calendrier']),
  sent(2068, 'Selon l’éditorial, la décision est bonne, mais la méthode ne l’est pas.', 'According to the editorial, the decision is good, but the method is not.', '/sə.lɔ̃ le.di.tɔ.ʁjal la de.si.zjɔ̃ ɛ bɔn mɛ la me.tɔd nə lɛ pa/', 'suh-lohⁿ lay-dee-to-RYAL la day-see-zyohⁿ eh BONN meh la may-TOD nuh leh PA', ['editorial', 'reponse'], FCVDR),
  sent(2069, 'Sans signature, c’est la voix du journal.', 'With no signature, it is the paper’s voice.', '/sɑ̃ si.ɲa.tyʁ sɛ la vwa dy ʒuʁ.nal/', 'sahⁿ see-nya-TÜR seh la VWA dü zhoor-NAL', ['regle', 'editorial'], FC,
    rule('Un texte de la rubrique « Éditorial » n’est pas signé. Qui parle ?', 'Le journal lui-même : sa ligne, sa position. Signé ou non, l’éditorial parle au nom du journal : certains journaux le publient sans signature, d’autres le font signer par le rédacteur en chef ou, comme souvent au Québec, par un éditorialiste.')),
  sent(2070, 'L’éditorialiste parle au nom de la rédaction.', 'The editorial writer speaks on behalf of the newsroom.', '/le.di.tɔ.ʁja.list paʁl o nɔ̃ də la ʁe.dak.sjɔ̃/', 'lay-dee-to-rya-LEEST parl oh nohⁿ duh la ray-dak-SYOHⁿ', ['editorial']),
  sent(2071, 'Le « nous » de l’éditorial, c’est le journal.', 'The "we" of the editorial is the paper.', '/lə nu də le.di.tɔ.ʁjal sɛ lə ʒuʁ.nal/', 'luh NOO duh lay-dee-to-RYAL seh luh zhoor-NAL', ['editorial']),
];

/* ── ACT 6 · CHRONIQUE ET BILLET ────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  phrase(2072, 'un billet d’humeur', 'a short opinion piece, often witty', '/œ̃ bi.jɛ dy.mœʁ/', 'uhⁿ bee-yeh dü-MUHR', ['billet', 'genre']),
  phrase(2073, 'une chronique hebdomadaire', 'a weekly column', '/yn kʁɔ.nik ɛb.dɔ.ma.dɛʁ/', 'ün kro-neek eb-do-ma-DEHR', ['chronique', 'genre']),
  sent(2074, 'Le billet tient sur une idée et finit sur un trait d’esprit.', 'A billet holds one idea and ends on a witty line.', '/lə bi.jɛ tjɛ̃ sy.ʁy.ni.de e fi.ni sy.ʁœ̃ tʁɛ dɛs.pʁi/', 'luh bee-YEH tyehⁿ sü-rü-nee-DAY ay fee-nee sü-ruhⁿ treh dess-PREE', ['billet'], FCVDR),
  sent(2075, 'La chroniqueuse parle en son nom, pas au nom du journal.', 'The columnist speaks in her own name, not the paper’s.', '/la kʁɔ.ni.køz paʁl ɑ̃ sɔ̃ nɔ̃ pa.zo nɔ̃ dy ʒuʁ.nal/', 'la kro-nee-KEUZ parl ahⁿ sohⁿ NOHⁿ pa-zoh nohⁿ dü zhoor-NAL', ['chronique'], FCVDR),
  sent(2076, 'J’ai tourné quarante minutes pour trouver une place.', 'I drove round for forty minutes to find a space.', '/ʒe tuʁ.ne ka.ʁɑ̃t mi.nyt puʁ tʁu.ve yn plas/', 'zhay toor-NAY ka-rahⁿt mee-NÜT poor troo-vay ün PLASS', ['billet', 'festival']),
  sent(2077, 'La navette s’arrête à 23 h, une heure avant la fin du dernier concert.', 'The shuttle stops at 11 p.m., an hour before the end of the last concert.', '/la na.vɛt sa.ʁɛt a vɛ̃t.tʁwa.zœʁ y.nœʁ a.vɑ̃ la fɛ̃ dy dɛʁ.nje kɔ̃.sɛʁ/', 'la na-VET sa-RET a vehⁿt-trwa-ZUHR ü-NUHR a-vahⁿ la fehⁿ dü dehr-nyay kohⁿ-SEHR', ['billet', 'festival']),
  sent(2078, 'L’an prochain, je viendrai à pied.', 'Next year I will come on foot.', '/lɑ̃ pʁɔ.ʃɛ̃ ʒə vjɛ̃.dʁe a pje/', 'lahⁿ pro-SHEHⁿ zhuh vyehⁿ-dray a PYAY', ['billet', 'chute']),
  sent(2079, 'Le « je » signale une opinion personnelle.', 'The "I" signals a personal opinion.', '/lə ʒə si.ɲal y.nɔ.pi.njɔ̃ pɛʁ.sɔ.nɛl/', 'luh ZHUH see-nyal ü-no-pee-NYOHⁿ pehr-so-NEL', ['chronique', 'genre']),
  sent(2080, 'Odile Vasseur se moque gentiment de la mairie.', 'Odile Vasseur gently pokes fun at the town hall.', '/ɔ.dil va.sœʁ sə mɔk ʒɑ̃.ti.mɑ̃ də la mɛ.ʁi/', 'o-DEEL va-SUHR suh mok zhahⁿ-tee-MAHⁿ duh la meh-REE', ['billet', 'reponse']),
  sent(2081, 'Un « je » dans le journal, c’est une signature, pas la rédaction.', 'An "I" in the paper is a byline, not the newsroom.', '/œ̃ ʒə dɑ̃ lə ʒuʁ.nal sɛ.tyn si.ɲa.tyʁ pa la ʁe.dak.sjɔ̃/', 'uhⁿ ZHUH dahⁿ luh zhoor-NAL seh-tün see-nya-TÜR pa la ray-dak-SYOHⁿ', ['regle', 'chronique'], FC,
    rule('Le texte dit « j’ai tourné quarante minutes ». Est-ce l’avis du journal ?', 'Non : c’est la voix d’une chroniqueuse, signée de son nom. Un « je » dans le journal, c’est une signature, pas la rédaction.')),
  sent(2082, 'Ce billet n’engage que son auteure.', 'This piece commits only its author.', '/sə bi.jɛ nɑ̃.ɡaʒ kə sɔ̃.no.tœʁ/', 'suh bee-YEH nahⁿ-GAZH kuh sohⁿ-noh-TUHR', ['billet', 'reponse']),
];

/* ── ACT 7 · TRIBUNE ET LETTRE OUVERTE ──────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  phrase(2083, 'une tribune, un texte d’opinion signé', 'an op-ed, a signed opinion piece', '/yn tʁi.byn œ̃ tɛkst dɔ.pi.njɔ̃ si.ɲe/', 'ün tree-BÜNN uhⁿ tekst do-pee-nyohⁿ see-NYAY', ['tribune', 'genre']),
  phrase(2084, 'une lettre ouverte', 'an open letter', '/yn lɛ.tʁu.vɛʁt/', 'ün leh-troo-VEHRT', ['tribune', 'genre']),
  sent(2085, 'Les opinions exprimées n’engagent que leurs auteurs.', 'The opinions expressed are the authors’ own.', '/le.zɔ.pi.njɔ̃.zɛks.pʁi.me nɑ̃.ɡaʒ kə lœʁ.zo.tœʁ/', 'lay-zo-pee-nyohⁿ-zeks-pree-MAY nahⁿ-GAZH kuh luhr-zoh-TUHR', ['tribune'], FCVDR),
  sent(2086, 'Madame la Présidente, nous vous écrivons au nom de deux cents familles.', 'Madam President, we are writing to you on behalf of two hundred families.', '/ma.dam la pʁe.zi.dɑ̃t nu vu.ze.kʁi.vɔ̃ o nɔ̃ də dø sɑ̃ fa.mij/', 'ma-damm la pray-zee-DAHⁿT noo voo-zay-kree-VOHⁿ oh nohⁿ duh deu sahⁿ fa-MEEY', ['tribune', 'calendrier']),
  sent(2087, 'Nous vous demandons d’ouvrir une vraie consultation avant l’été.', 'We ask you to open a real consultation before the summer.', '/nu vu də.mɑ̃.dɔ̃ du.vʁi.ʁyn vʁɛ kɔ̃.syl.ta.sjɔ̃ a.vɑ̃ le.te/', 'noo voo duh-mahⁿ-DOHⁿ doo-vree-rün vreh kohⁿ-sül-ta-SYOHⁿ a-vahⁿ lay-TAY', ['tribune', 'calendrier']),
  sent(2088, 'Deux semaines de vacances en automne, ce sont deux semaines de garde à payer.', 'Two weeks of autumn holidays means two weeks of childcare to pay for.', '/dø sə.mɛn də va.kɑ̃s ɑ̃.no.tɔn sə sɔ̃ dø sə.mɛn də ɡaʁd a pɛ.je/', 'deu suh-MENN duh va-kahⁿss ahⁿ-noh-TONN suh sohⁿ deu suh-MENN duh gard a peh-YAY', ['tribune', 'calendrier']),
  sent(2089, 'Le journal publie la tribune, il ne la signe pas.', 'The paper publishes the op-ed; it does not sign it.', '/lə ʒuʁ.nal py.bli la tʁi.byn il nə la siɲ pa/', 'luh zhoor-NAL pü-blee la tree-BÜNN eel nuh la seeny PA', ['tribune'], FCVDR),
  sent(2090, 'La lettre ouverte s’adresse à une personne, mais elle est écrite pour le public.', 'The open letter is addressed to one person but written for the public.', '/la lɛ.tʁu.vɛʁt sa.dʁɛs a yn pɛʁ.sɔn mɛ ɛ.lɛ.te.kʁit puʁ lə py.blik/', 'la leh-troo-VEHRT sa-DRESS a ün pehr-SONN meh eh-leh-tay-KREET poor luh pü-BLEEK', ['tribune']),
  sent(2091, 'Sous le nom de l’auteur, sa fonction dit d’où il parle.', 'Under the author’s name, their job tells you where they speak from.', '/su lə nɔ̃ də lo.tœʁ sa fɔ̃k.sjɔ̃ di du il paʁl/', 'soo luh nohⁿ duh loh-TUHR sa fohⁿk-SYOHⁿ dee doo eel PARL', ['tribune', 'signature']),
  sent(2092, 'Une tribune parle pour son auteur, pas pour le journal.', 'An op-ed speaks for its author, not for the paper.', '/yn tʁi.byn paʁl puʁ sɔ̃.no.tœʁ pa puʁ lə ʒuʁ.nal/', 'ün tree-BÜNN parl poor sohⁿ-noh-TUHR pa poor luh zhoor-NAL', ['regle', 'tribune'], FC,
    rule('Une tribune contre le nouveau calendrier paraît dans Le Courrier. Le journal est-il contre ?', 'Pas forcément : le journal publie la tribune, il ne la signe pas. Son avis à lui est dans l’éditorial.')),
  sent(2093, 'Un collectif de parents signe ce texte.', 'A parents’ group signs this text.', '/œ̃ kɔ.lɛk.tif də pa.ʁɑ̃ siɲ sə tɛkst/', 'uhⁿ ko-lek-TEEF duh pa-RAHⁿ seeny suh TEKST', ['tribune', 'signature']),
];

/* ── ACT 8 · QUI PARLE, ET DANS QUEL ORDRE ──────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  phrase(2094, 'le choix des sources', 'the choice of sources', '/lə ʃwa de suʁs/', 'luh SHWA day SOORSS', ['sources']),
  phrase(2095, 'l’ordre des citations', 'the order of the quotes', '/lɔʁ.dʁə de si.ta.sjɔ̃/', 'lor-druh day see-ta-SYOHⁿ', ['sources']),
  sent(2096, 'La première voix donne le ton ; la dernière laisse l’impression.', 'The first voice sets the tone; the last leaves the impression.', '/la pʁə.mjɛʁ vwa dɔn lə tɔ̃ la dɛʁ.njɛʁ lɛs lɛ̃.pʁɛ.sjɔ̃/', 'la pruh-myehr VWA donn luh TOHⁿ la dehr-nyehr less lehⁿ-preh-SYOHⁿ', ['sources'], FCVDR),
  sent(2097, '« On nous a pris dix minutes de vie par jour », s’indigne une usagère.', '"They have taken ten minutes of our lives a day," a passenger protests.', '/ɔ̃ nu.za pʁi di mi.nyt də vi paʁ ʒuʁ sɛ̃.diɲ y.ny.za.ʒɛʁ/', 'ohⁿ noo-za pree dee mee-nüt duh VEE par ZHOOR sehⁿ-deeny ü-nü-za-ZHEHR', ['sources', 'ligne7']),
  sent(2098, 'La société de transport assure que le détour est provisoire.', 'The transit company insists the detour is temporary.', '/la sɔ.sje.te də tʁɑ̃s.pɔʁ a.syʁ kə lə de.tuʁ ɛ pʁɔ.vi.zwaʁ/', 'la so-syay-tay duh trahⁿss-POR a-SÜR kuh luh day-TOOR eh pro-vee-ZWAR', ['sources', 'ligne7']),
  sent(2099, 'Un seul usager satisfait, cité en une ligne, à la fin.', 'A single satisfied passenger, quoted in one line, at the end.', '/œ̃ sœ.ly.za.ʒe sa.tis.fɛ si.te ɑ̃.nyn liɲ a la fɛ̃/', 'uhⁿ suh-lü-za-ZHAY sa-tees-FEH see-TAY ahⁿ-nün LEENY a la FEHⁿ', ['sources', 'ligne7']),
  sent(2100, 'Aucun urbaniste n’est interrogé.', 'No urban planner is interviewed.', '/o.kœ̃.nyʁ.ba.nist nɛ.tɛ̃.tɛ.ʁɔ.ʒe/', 'oh-kuhⁿ-nür-ba-NEEST neh-tehⁿ-teh-ro-ZHAY', ['sources', 'hors-champ']),
  sent(2101, 'Citer au style direct, c’est donner la parole ; résumer, c’est la reprendre.', 'Quoting directly gives someone the floor; summing up takes it back.', '/si.te o stil di.ʁɛkt sɛ dɔ.ne la pa.ʁɔl ʁe.zy.me sɛ la ʁə.pʁɑ̃dʁ/', 'see-TAY oh steel dee-REKT seh do-nay la pa-ROL ray-zü-MAY seh la ruh-PRAHⁿDR', ['sources']),
  sent(2102, 'Qui a la parole, et pendant combien de lignes ?', 'Who has the floor, and for how many lines?', '/ki a la pa.ʁɔl e pɑ̃.dɑ̃ kɔ̃.bjɛ̃ də liɲ/', 'kee a la pa-ROL ay pahⁿ-dahⁿ kohⁿ-byehⁿ duh LEENY', ['question', 'sources']),
  sent(2103, 'Les mêmes citations, dans un autre ordre, racontent une autre histoire.', 'The same quotes, in a different order, tell a different story.', '/le mɛm si.ta.sjɔ̃ dɑ̃.zœ̃.no.tʁɔʁdʁ ʁa.kɔ̃t y.no.tʁis.twaʁ/', 'lay mem see-ta-SYOHⁿ dahⁿ-zuhⁿ-noh-TRORDR ra-kohⁿt ü-noh-trees-TWAR', ['sources'], FCVDR),
  sent(2104, 'Un habitué de la ligne, qui préfère rester anonyme, parle de « mépris ».', 'A regular on the route, who prefers to remain anonymous, speaks of "contempt".', '/œ̃.na.bi.tɥe də la liɲ ki pʁe.fɛʁ ʁɛs.te a.nɔ.nim paʁl də me.pʁi/', 'uhⁿ-na-bee-TWAY duh la LEENY kee pray-fehr ress-tay a-no-NEEMM parl duh may-PREE', ['sources', 'ligne7']),
  sent(2105, 'Compte les voix, puis regarde leur ordre.', 'Count the voices, then look at their order.', '/kɔ̃t le vwa pɥi ʁə.ɡaʁd lœ.ʁɔʁdʁ/', 'kohⁿt lay VWA pwee ruh-gard luh-RORDR', ['regle', 'sources'], FC,
    rule('Un article cite trois usagers en colère, puis, à la fin, un usager satisfait. Est-il neutre ?', 'Pas forcément. Compte les voix, puis regarde leur ordre : la première donne le ton, et la place accordée à chacun fait le cadre.')),
];

/* ── ACT 9 · CHIFFRES ET LÉGENDES ───────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  phrase(2106, 'un chiffre présenté sous son meilleur jour', 'a figure shown in its best light', '/œ̃ ʃifʁ pʁe.zɑ̃.te su sɔ̃ mɛ.jœʁ ʒuʁ/', 'uhⁿ SHEEFR pray-zahⁿ-TAY soo sohⁿ meh-yuhr ZHOOR', ['chiffres']),
  sent(2107, 'Près d’un festivalier sur trois venait d’ailleurs.', 'Nearly one festival-goer in three came from elsewhere.', '/pʁɛ dœ̃ fɛs.ti.va.lje syʁ tʁwa və.nɛ da.jœʁ/', 'preh duhⁿ fes-tee-va-LYAY sür TRWA vuh-neh da-YUHR', ['chiffres', 'festival']),
  sent(2108, 'Deux festivaliers sur trois habitent la région.', 'Two festival-goers in three live in the region.', '/dø fɛs.ti.va.lje syʁ tʁwa a.bit la ʁe.ʒjɔ̃/', 'deu fes-tee-va-LYAY sür TRWA a-beet la ray-ZHYOHⁿ', ['chiffres', 'festival']),
  sent(2109, 'Les plaintes pour bruit ont triplé : de douze à trente-huit.', 'Noise complaints have tripled: from twelve to thirty-eight.', '/le plɛ̃t puʁ bʁɥi ɔ̃ tʁi.ple də duz a tʁɑ̃t.ɥit/', 'lay PLEHⁿT poor BRWEE ohⁿ tree-PLAY duh DOOZ a trahⁿt-WEET', ['chiffres', 'festival']),
  sent(2110, 'Trente-huit plaintes pour quarante-deux mille entrées.', 'Thirty-eight complaints for forty-two thousand admissions.', '/tʁɑ̃t.ɥi plɛ̃t puʁ ka.ʁɑ̃t.dø mi.lɑ̃.tʁe/', 'trahⁿt-wee PLEHⁿT poor ka-rahⁿt-DEU mee-lahⁿ-TRAY', ['chiffres', 'festival']),
  sent(2111, 'Le même chiffre peut rassurer ou inquiéter.', 'The same figure can reassure or alarm.', '/lə mɛm ʃifʁ pø ʁa.sy.ʁe u ɛ̃.kje.te/', 'luh mem SHEEFR peu ra-sü-RAY oo ehⁿ-kyay-TAY', ['chiffres'], FCVDR),
  sent(2112, 'Un pourcentage sur une petite base impressionne vite.', 'A percentage on a small base impresses quickly.', '/œ̃ puʁ.sɑ̃.taʒ sy.ʁyn pə.tit baz ɛ̃.pʁɛ.sjɔn vit/', 'uhⁿ poor-sahⁿ-TAZH sü-rün puh-teet BAHZ ehⁿ-preh-SYONN VEET', ['chiffres']),
  sent(2113, 'Une légende dit comment regarder la photo.', 'A caption tells you how to look at the photo.', '/yn le.ʒɑ̃d di kɔ.mɑ̃ ʁə.ɡaʁ.de la fɔ.to/', 'ün lay-ZHAHⁿD dee ko-mahⁿ ruh-gar-DAY la fo-TOH', ['image'], FCVDR),
  sent(2114, 'La foule devant la grande scène, samedi soir.', 'The crowd in front of the main stage, Saturday night.', '/la ful də.vɑ̃ la ɡʁɑ̃d sɛn sam.di swaʁ/', 'la FOOL duh-vahⁿ la grahⁿd SENN sam-dee SWAR', ['image', 'festival']),
  sent(2115, 'Un riverain devant les gobelets abandonnés, dimanche matin.', 'A resident in front of discarded cups, Sunday morning.', '/œ̃ ʁi.və.ʁɛ̃ də.vɑ̃ le ɡɔ.blɛ a.bɑ̃.dɔ.ne di.mɑ̃ʃ ma.tɛ̃/', 'uhⁿ ree-vuh-REHⁿ duh-vahⁿ lay go-BLEH a-bahⁿ-do-NAY dee-mahⁿsh ma-TEHⁿ', ['image', 'festival']),
  sent(2116, 'Par rapport à quoi ?', 'Compared with what?', '/paʁ ʁa.pɔʁ a kwa/', 'par ra-por a KWA', ['question', 'chiffres']),
  sent(2117, 'Un chiffre ne parle jamais seul : regarde sa base et sa comparaison.', 'A figure never speaks alone: look at its base and its comparison.', '/œ̃ ʃifʁ nə paʁl ʒa.mɛ sœl ʁə.ɡaʁd sa baz e sa kɔ̃.pa.ʁɛ.zɔ̃/', 'uhⁿ SHEEFR nuh parl zha-meh SUHL ruh-gard sa BAHZ ay sa kohⁿ-pa-reh-ZOHⁿ', ['regle', 'chiffres'], FC,
    rule('« Les plaintes ont triplé. » Le festival est-il devenu trois fois plus bruyant ?', 'Pas forcément : de douze à trente-huit plaintes, pour quarante-deux mille entrées. Un chiffre ne parle jamais seul : regarde sa base et sa comparaison.')),
  sent(2118, 'La fréquentation progresse de 5 % par rapport à l’an dernier.', 'Attendance is up 5% on last year.', '/la fʁe.kɑ̃.ta.sjɔ̃ pʁɔ.ɡʁɛs də sɛ̃k puʁ sɑ̃ paʁ ʁa.pɔʁ a lɑ̃ dɛʁ.nje/', 'la fray-kahⁿ-ta-SYOHⁿ pro-GRESS duh sehⁿk poor SAHⁿ par ra-por a lahⁿ dehr-NYAY', ['chiffres', 'festival']),
];

/* ── ACT 10 · LES MOTS QUI PÈSENT ───────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  phrase(2119, 'un mot chargé', 'a loaded word', '/œ̃ mo ʃaʁ.ʒe/', 'uhⁿ moh shar-ZHAY', ['mots']),
  phrase(2120, 'le réaménagement des berges', 'the redevelopment of the riverbanks', '/lə ʁe.a.me.naʒ.mɑ̃ de bɛʁʒ/', 'luh ray-a-may-nazh-MAHⁿ day BEHRZH', ['mots', 'canal']),
  phrase(2121, 'le bétonnage des berges', 'concreting over the riverbanks', '/lə be.tɔ.naʒ de bɛʁʒ/', 'luh bay-to-NAZH day BEHRZH', ['mots', 'canal']),
  sent(2122, 'La municipalité s’entête.', 'The council stubbornly persists.', '/la my.ni.si.pa.li.te sɑ̃.tɛt/', 'la mü-nee-see-pa-lee-TAY sahⁿ-TET', ['mots', 'canal']),
  sent(2123, 'La municipalité maintient son projet.', 'The council is keeping its project.', '/la my.ni.si.pa.li.te mɛ̃.tjɛ̃ sɔ̃ pʁɔ.ʒɛ/', 'la mü-nee-see-pa-lee-TAY mehⁿ-tyehⁿ sohⁿ pro-ZHEH', ['mots', 'canal']),
  phrase(2124, 'une poignée de défenseurs du projet', 'a handful of supporters of the project', '/yn pwa.ɲe də de.fɑ̃.sœʁ dy pʁɔ.ʒɛ/', 'ün pwa-NYAY duh day-fahⁿ-SUHR dü pro-ZHEH', ['mots', 'canal']),
  phrase(2125, 'plusieurs dizaines de partisans du projet', 'several dozen supporters of the project', '/ply.zjœʁ di.zɛn də paʁ.ti.zɑ̃ dy pʁɔ.ʒɛ/', 'plü-zyuhr dee-ZENN duh par-tee-ZAHⁿ dü pro-ZHEH', ['mots', 'canal']),
  sent(2126, 'Pas moins de trois cents personnes ont signé la pétition.', 'No fewer than three hundred people signed the petition.', '/pa mwɛ̃ də tʁwa sɑ̃ pɛʁ.sɔn ɔ̃ si.ɲe la pe.ti.sjɔ̃/', 'pa mwehⁿ duh trwa sahⁿ pehr-SONN ohⁿ see-NYAY la pay-tee-SYOHⁿ', ['mots', 'quantite']),
  sent(2127, 'À peine trois cents personnes ont signé la pétition.', 'Barely three hundred people signed the petition.', '/a pɛn tʁwa sɑ̃ pɛʁ.sɔn ɔ̃ si.ɲe la pe.ti.sjɔ̃/', 'a PENN trwa sahⁿ pehr-SONN ohⁿ see-NYAY la pay-tee-SYOHⁿ', ['mots', 'quantite']),
  sent(2128, 'Le fait est le même ; le mot choisit le camp.', 'The fact is the same; the word picks the side.', '/lə fɛ ɛ lə mɛm lə mo ʃwa.zi lə kɑ̃/', 'luh FEH eh luh MEM luh MOH shwa-zee luh KAHⁿ', ['mots'], FCVDR),
  sent(2129, 'Les engins ont envahi les berges dès lundi.', 'The machines invaded the riverbanks from Monday.', '/le.zɑ̃.ʒɛ̃ ɔ̃.tɑ̃.va.i le bɛʁʒ dɛ lœ̃.di/', 'lay-zahⁿ-ZHEHⁿ ohⁿ-tahⁿ-va-EE lay BEHRZH deh luhⁿ-DEE', ['mots', 'canal']),
  sent(2130, 'Les travaux ont commencé lundi sur les berges.', 'Work began on Monday on the riverbanks.', '/le tʁa.vo ɔ̃ kɔ.mɑ̃.se lœ̃.di syʁ le bɛʁʒ/', 'lay tra-VOH ohⁿ ko-mahⁿ-SAY luhⁿ-DEE sür lay BEHRZH', ['mots', 'canal']),
  sent(2131, 'Remplace le mot chargé par un mot neutre : regarde ce qui reste.', 'Swap the loaded word for a neutral one: see what is left.', '/ʁɑ̃.plas lə mo ʃaʁ.ʒe paʁ œ̃ mo nøtʁ ʁə.ɡaʁd sə ki ʁɛst/', 'rahⁿ-plass luh moh shar-ZHAY par uhⁿ moh NEUTR ruh-gard suh kee REST', ['regle', 'mots'], FC,
    rule('« Les engins ont envahi les berges. » Que dit vraiment cette phrase ?', 'Que les travaux ont commencé. Remplace le mot chargé par un mot neutre : ce qui reste est le fait ; ce qui disparaît est le jugement.')),
  sent(2132, 'Le même projet s’appelle réaménagement ou bétonnage selon le journal.', 'The same project is called redevelopment or concreting over, depending on the paper.', '/lə mɛm pʁɔ.ʒɛ sa.pɛl ʁe.a.me.naʒ.mɑ̃ u be.tɔ.naʒ sə.lɔ̃ lə ʒuʁ.nal/', 'luh mem pro-ZHEH sa-PEL ray-a-may-nazh-MAHⁿ oo bay-to-NAZH suh-lohⁿ luh zhoor-NAL', ['mots', 'canal']),
];

/* ── ACT 11 · DEUX TRAITEMENTS, UN MÊME SOIR ────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(2133, 'Le Courrier met le festival en avant ; L’Hebdo, les riverains.', 'Le Courrier puts the festival first; L’Hebdo, the residents.', '/lə ku.ʁje mɛ lə fɛs.ti.val ɑ̃.na.vɑ̃ lɛb.do le ʁi.və.ʁɛ̃/', 'luh koo-RYAY meh luh fes-tee-VAL ahⁿ-na-VAHⁿ leb-DOH lay ree-vuh-REHⁿ', ['comparaison', 'festival']),
  sent(2134, 'Les deux textes rapportent la même décision : finir à minuit.', 'Both texts report the same decision: ending at midnight.', '/le dø tɛkst ʁa.pɔʁt la mɛm de.si.zjɔ̃ fi.niʁ a mi.nɥi/', 'lay deu TEKST ra-port la mem day-see-ZYOHⁿ fee-neer a mee-NWEE', ['comparaison', 'festival'], FCVDR),
  sent(2135, 'Le premier est un article en page cinq ; le second fait la une.', 'The first is an article on page five; the second is on the front page.', '/lə pʁə.mje ɛ.tœ̃.naʁ.tikl ɑ̃ paʒ sɛ̃k lə sə.ɡɔ̃ fɛ la yn/', 'luh pruh-MYAY eh-tuhⁿ-nar-TEEKL ahⁿ pazh SEHⁿK luh suh-GOHⁿ feh la ÜNN', ['comparaison']),
  sent(2136, 'L’un parle d’engagement, l’autre de victoire.', 'One speaks of a commitment, the other of a victory.', '/lœ̃ paʁl dɑ̃.ɡaʒ.mɑ̃ lotʁ də vik.twaʁ/', 'luhⁿ parl dahⁿ-gazh-MAHⁿ lohtr duh veek-TWAR', ['comparaison', 'mots']),
  sent(2137, 'Ni l’un ni l’autre ne ment : chacun choisit.', 'Neither is lying: each one chooses.', '/ni lœ̃ ni lotʁ nə mɑ̃ ʃa.kœ̃ ʃwa.zi/', 'nee luhⁿ nee LOHTR nuh MAHⁿ sha-kuhⁿ shwa-ZEE', ['comparaison', 'methode'], FCVDR),
  sent(2138, 'Le Courrier ne dit pas un mot de la pétition.', 'Le Courrier does not say a word about the petition.', '/lə ku.ʁje nə di pa.zœ̃ mo də la pe.ti.sjɔ̃/', 'luh koo-RYAY nuh dee pa-zuhⁿ MOH duh la pay-tee-SYOHⁿ', ['comparaison', 'hors-champ']),
  sent(2139, 'L’Hebdo oublie que la proposition venait du festival.', 'L’Hebdo leaves out that the proposal came from the festival.', '/lɛb.do u.bli kə la pʁɔ.pɔ.zi.sjɔ̃ və.nɛ dy fɛs.ti.val/', 'leb-DOH oo-BLEE kuh la pro-po-zee-SYOHⁿ vuh-neh dü fes-tee-VAL', ['comparaison', 'hors-champ']),
  sent(2140, 'Pour comparer, pars de ce que les deux textes partagent.', 'To compare, start from what the two texts share.', '/puʁ kɔ̃.pa.ʁe paʁ də sə kə le dø tɛkst paʁ.taʒ/', 'poor kohⁿ-pa-RAY par duh suh kuh lay deu tekst par-TAZH', ['comparaison', 'methode'], FCVDR),
  sent(2141, 'Bruit : le festival s’engage à finir à minuit', 'Noise: the festival pledges to finish at midnight', '/bʁɥi lə fɛs.ti.val sɑ̃.ɡaʒ a fi.niʁ a mi.nɥi/', 'BRWEE luh fes-tee-VAL sahⁿ-GAZH a fee-neer a mee-NWEE', ['titre', 'festival']),
  sent(2142, 'Les riverains obtiennent enfin un couvre-feu', 'Residents finally win a curfew', '/le ʁi.və.ʁɛ̃ ɔp.tjɛn ɑ̃.fɛ̃ œ̃ ku.vʁə.fø/', 'lay ree-vuh-REHⁿ op-TYENN ahⁿ-fehⁿ uhⁿ koo-vruh-FEU', ['titre', 'festival']),
  sent(2143, 'Compare d’abord les faits communs, puis les choix.', 'Compare the shared facts first, then the choices.', '/kɔ̃.paʁ da.bɔʁ le fɛ kɔ.mœ̃ pɥi le ʃwa/', 'kohⁿ-par da-BOR lay feh ko-MUHⁿ pwee lay SHWA', ['regle', 'comparaison'], FC,
    rule('Tu compares deux articles sur la même soirée. Par où commences-tu ?', 'Par ce qu’ils partagent : la décision, la date, le chiffre. Compare d’abord les faits communs, puis les choix : le genre, les sources, les mots, ce qui manque.')),
  sent(2144, 'Chacun laisse hors champ ce qui dérange son récit.', 'Each leaves out of the picture whatever disturbs its story.', '/ʃa.kœ̃ lɛs ɔʁ ʃɑ̃ sə ki de.ʁɑ̃ʒ sɔ̃ ʁe.si/', 'sha-kuhⁿ less or SHAHⁿ suh kee day-RAHⁿZH sohⁿ ray-SEE', ['comparaison', 'hors-champ']),
];

/* ── ACT 12 · TA COMPARAISON ────────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(2145, 'Le Courrier choisit le reportage ; L’Hebdo, l’éditorial.', 'Le Courrier chooses the report; L’Hebdo, the editorial.', '/lə ku.ʁje ʃwa.zi lə ʁə.pɔʁ.taʒ lɛb.do le.di.tɔ.ʁjal/', 'luh koo-RYAY shwa-zee luh ruh-por-TAZH leb-DOH lay-dee-to-RYAL', ['reponse', 'pont']),
  sent(2146, 'Le Courrier parle de piétonnisation ; L’Hebdo, de fermeture.', 'Le Courrier speaks of pedestrianisation; L’Hebdo, of closure.', '/lə ku.ʁje paʁl də pje.tɔ.ni.za.sjɔ̃ lɛb.do də fɛʁ.mə.tyʁ/', 'luh koo-RYAY parl duh pyay-to-nee-za-SYOHⁿ leb-DOH duh fehr-muh-TÜR', ['reponse', 'pont', 'mots'], FCVDR),
  sent(2147, 'Le reportage donne la parole aux familles et aux cyclistes.', 'The report gives the floor to families and cyclists.', '/lə ʁə.pɔʁ.taʒ dɔn la pa.ʁɔl o fa.mij e o si.klist/', 'luh ruh-por-TAZH donn la pa-ROL oh fa-MEEY ay oh see-KLEEST', ['reponse', 'pont', 'sources']),
  sent(2148, 'L’éditorial ne cite aucun habitant favorable au projet.', 'The editorial quotes no resident in favour of the project.', '/le.di.tɔ.ʁjal nə sit o.kœ̃.na.bi.tɑ̃ fa.vɔ.ʁa.blo pʁɔ.ʒɛ/', 'lay-dee-to-RYAL nuh seet oh-kuhⁿ-na-bee-TAHⁿ fa-vo-ra-bloh pro-ZHEH', ['reponse', 'pont', 'sources']),
  sent(2149, 'Le reportage passe sous silence les détours imposés aux automobilistes.', 'The report says nothing about the detours forced on drivers.', '/lə ʁə.pɔʁ.taʒ pas su si.lɑ̃s le de.tuʁ ɛ̃.po.ze o.zo.to.mɔ.bi.list/', 'luh ruh-por-TAZH pass soo see-LAHⁿSS lay day-toor ehⁿ-poh-ZAY oh-zoh-toh-mo-bee-LEEST', ['reponse', 'pont', 'hors-champ'], FCVDR),
  sent(2150, 'Les deux textes traitent le même dimanche de deux façons opposées.', 'The two texts treat the same Sunday in two opposite ways.', '/le dø tɛkst tʁɛt lə mɛm di.mɑ̃ʃ də dø fa.sɔ̃.zɔ.po.ze/', 'lay deu TEKST tret luh mem dee-MAHⁿSH duh deu fa-sohⁿ-zo-poh-ZAY', ['reponse', 'pont']),
  sent(2151, 'L’éditorial voit une frontière là où le reportage montre une fête.', 'The editorial sees a border where the report shows a party.', '/le.di.tɔ.ʁjal vwa yn fʁɔ̃.tjɛʁ la u lə ʁə.pɔʁ.taʒ mɔ̃.tʁyn fɛt/', 'lay-dee-to-RYAL vwa ün frohⁿ-TYEHR la oo luh ruh-por-TAZH mohⁿ-trün FET', ['reponse', 'pont', 'mots']),
  sent(2152, 'Le cadrage n’est pas un mensonge, c’est un choix.', 'Framing is not a lie; it is a choice.', '/lə ka.dʁaʒ nɛ pa.zœ̃ mɑ̃.sɔ̃ʒ sɛ.tœ̃ ʃwa/', 'luh ka-DRAZH neh pa-zuhⁿ mahⁿ-SOHⁿZH seh-tuhⁿ SHWA', ['reponse', 'methode'], FCVDR),
  sent(2153, 'Je compare d’abord les genres, puis les sources, puis les mots.', 'I compare the genres first, then the sources, then the words.', '/ʒə kɔ̃.paʁ da.bɔʁ le ʒɑ̃ʁ pɥi le suʁs pɥi le mo/', 'zhuh kohⁿ-par da-bor lay ZHAHⁿR pwee lay SOORSS pwee lay MOH', ['reponse', 'methode']),
  sent(2154, 'Le reportage ne donne aucun chiffre sur la circulation.', 'The report gives no figure on traffic.', '/lə ʁə.pɔʁ.taʒ nə dɔn o.kœ̃ ʃifʁ syʁ la siʁ.ky.la.sjɔ̃/', 'luh ruh-por-TAZH nuh donn oh-kuhⁿ SHEEFR sür la seer-kü-la-SYOHⁿ', ['reponse', 'pont', 'chiffres']),
  sent(2155, 'En somme, chaque journal a cadré le même pont à sa manière.', 'All in all, each paper framed the same bridge in its own way.', '/ɑ̃ sɔm ʃak ʒuʁ.nal a ka.dʁe lə mɛm pɔ̃ a sa ma.njɛʁ/', 'ahⁿ SOMM shak zhoor-NAL a ka-DRAY luh mem POHⁿ a sa ma-NYEHR', ['reponse', 'pont']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE ANCHOR TEXTS
 *
 *  One per act, 300 to 500 words (C1-BUILD-LOG « What is different at C1 »),
 *  each a real press genre, each « texte original écrit pour la leçon ».
 *  They live here so the reading, the quiz and the task cannot drift apart.
 *  Acts 1, 9, 11 and 12 print TWO short texts as one anchor, because
 *  comparing them is the move. Word counts are asserted by the scratch
 *  check.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: two front pages on the same festival weekend. */
export const UNES_TEXT =
  "TEXTE A · Le Courrier de Montrivage, à la une du lundi 6 juillet. LES NUITS DU QUAI BATTENT LEUR RECORD D’AFFLUENCE. Quarante-deux mille festivaliers en trois soirs, des concerts complets et une ambiance que les organisateurs qualifient d’« historique » : la quinzième édition restera dans les mémoires. Samedi, vers minuit, la foule chantait encore sur le quai Saint-Clair, bien après le dernier rappel. « Nous n’avions jamais vu ça », se réjouit Inès Garnier, directrice du festival, qui promet déjà une édition « encore plus ambitieuse » l’an prochain. Les commerçants du centre ont eux aussi le sourire : plusieurs restaurants affichaient complet dès 19 heures. Le maire, Daniel Roussel, salue « une vitrine formidable pour Montrivage ». La ville avait renforcé les navettes pour l’occasion, et le parking du stade affichait complet dès vendredi soir. Côté sécurité, aucun incident grave n’a été signalé. Seule ombre au tableau, quelques plaintes pour bruit, que la mairie dit « prendre au sérieux ». "
  + "TEXTE B · L’Hebdo des Rives, à la une du mercredi 8 juillet. NUITS DU QUAI : LES RIVERAINS N’EN PEUVENT PLUS. Trois nuits blanches, des rues jonchées de gobelets et des basses qui faisaient trembler les vitres jusqu’à deux heures du matin : pour les habitants du quai Saint-Clair, le festival a tourné à l’épreuve. « On nous parle de record ; nous, on compte les heures », lâche Bernard Lemoine, qui vit face à la grande scène depuis trente ans. « Nous ne sommes pas contre la fête, nous sommes contre la fête sous nos fenêtres », résume une voisine, qui a passé la nuit de samedi chez sa sœur, à l’autre bout de la ville. Une pétition circule dans le quartier ; elle aurait déjà recueilli près de trois cents signatures. À la mairie, on promet une réunion publique « à la rentrée ». Interrogée, la direction du festival n’a pas souhaité répondre avant la publication de cet article. Le festival, lui, revendique quarante-deux mille entrées sur trois soirs.";

/** Act 2: an agency dispatch, built as an inverted pyramid. */
export const DEPECHE_TEXT =
  "MONTRIVAGE, 4 mars (AHP). Le conseil scolaire de Montrivage a adopté mardi soir un nouveau calendrier : à partir de la rentrée 2027, les cours commenceront une semaine plus tôt, le lundi 23 août, et les vacances d’automne passeront d’une à deux semaines. Le texte a été adopté par neuf voix contre quatre, au terme d’une séance de plus de trois heures. La réforme concerne quelque 6 200 élèves répartis dans quatorze écoles primaires et trois collèges. Selon la présidente du conseil, Hélène Morin, il s’agit de « mieux équilibrer l’année » : la période qui va de la rentrée aux fêtes de fin d’année est aujourd’hui « la plus longue et la plus fatigante pour les enfants », a-t-elle déclaré à l’AHP. L’association des parents d’élèves de Montrivage s’est dite « globalement favorable », tout en demandant des solutions de garde pour la deuxième semaine d’automne. Les quatre membres qui ont voté contre ont mis en avant le coût de l’accueil des enfants pendant cette semaine, que les services de la commune estiment à plusieurs centaines de milliers d’euros par an. La commune prévoit d’ouvrir des centres de loisirs, sans préciser leur capacité ni leur tarif. Le principal syndicat enseignant regrette, lui, de ne pas avoir été consulté. « Nous avons appris le détail du projet par la presse », a indiqué sa représentante, Sophie Klein. Les professionnels du tourisme s’inquiètent d’une fin de saison écourtée : selon l’office de tourisme, la dernière semaine d’août représente environ 8 % des nuitées estivales de la commune. Le nouveau calendrier doit encore être validé par l’autorité scolaire régionale, qui dispose de deux mois pour se prononcer. Montrivage serait la troisième commune de la région à adopter un tel découpage, après deux expériences jugées « encourageantes » par le conseil, sans qu’aucune évaluation chiffrée ait été rendue publique. Le précédent changement de calendrier dans la commune remontait à 1998.";

/** Act 3: an article whose parts are all on the page: surtitre, titre,
 *  chapô, attaque, intertitre, chute and the photo caption. */
export const ARTICLE_TEXT =
  "FESTIVAL. LES NUITS DU QUAI : LE PASSE TROIS SOIRS AUGMENTE DE 20 %. Pour sa seizième édition, le festival de Montrivage relève ses prix et réduit sa jauge. Les organisateurs parlent de « survie » ; une partie du public, d’« exclusion ». Il était 10 heures, mardi, quand la billetterie en ligne a ouvert. À 10 h 07, quatre mille personnes attendaient déjà dans la file virtuelle. Parmi elles, Chloé Martel, vingt-deux ans, qui n’a pas manqué une édition depuis ses quinze ans. « J’ai payé, mais j’ai dû renoncer au troisième soir », raconte l’étudiante. Le passe trois soirs coûte désormais un cinquième de plus que l’an dernier, et la jauge du quai passe de 15 000 à 12 000 places par soir, à la demande des services de sécurité. Pour la directrice, Inès Garnier, la hausse n’a rien d’un choix de confort : le coût de la sécurité a doublé en trois ans et les cachets des artistes ont suivi la même pente. « Sans cette hausse, nous finissions l’année en déficit », affirme-t-elle. Elle rappelle que le festival vit à 80 % de sa billetterie, et que la subvention municipale n’a pas bougé depuis l’an dernier. À midi, mardi, les passes trois soirs étaient épuisés ; il restait des billets à la soirée. UN PUBLIC QUI CHANGE. L’association Quai pour tous, qui défend un festival « populaire », dénonce une sélection par le portefeuille et réclame un tarif réduit pour les moins de vingt-cinq ans. Le festival a annoncé mercredi mille places à demi-tarif réservées aux étudiants ; l’association juge le geste « insuffisant ». Les chiffres de la billetterie, eux, montrent un public qui vieillit : l’an dernier, la moitié des acheteurs avaient plus de quarante ans, contre un tiers en 2019. Reste une question que personne, mardi, ne savait trancher : un festival né pour animer un quai populaire peut-il encore porter ce nom s’il faut guetter son écran à 10 heures précises ? Légende de la photo : la file d’attente virtuelle, mardi à 10 h 07, sur l’ordinateur de Chloé Martel.";

/** Act 4: a report from a market square under works. */
export const REPORTAGE_TEXT =
  "REPORTAGE. Place du Marché : la vie continue entre les palissades. Par Lucie Fontaine. Il est 6 h 40 et la place sent encore le goudron frais. Derrière les barrières orange, une pelleteuse dort sous une bâche. Robert Chauvin, maraîcher depuis 1987, déplie ses tréteaux à l’endroit exact que lui indique un marquage à la craie. « Avant, je vendais mes tomates au milieu de la place. Maintenant, je les vends entre deux palissades », sourit-il en alignant ses cagettes. Depuis le début des travaux, en mars, le marché du samedi a perdu un tiers de sa surface. Les étals se serrent le long de la rue des Cordiers, si étroite que deux poussettes ne s’y croisent pas. Vers 8 heures, les premiers clients arrivent, souvent à vélo, parfois avec un plan du marché imprimé par la mairie, que personne ne semble consulter. Un fromager a accroché une ardoise : « Toujours là, malgré tout ». Une retraitée, cabas à la main, hésite devant le passage piéton, déplacé pour la troisième fois. « On s’y fait », dit-elle, sans conviction. À 9 h 15, un marteau-piqueur démarre de l’autre côté de la palissade. Les conversations s’arrêtent net, puis reprennent plus fort. À la boulangerie qui fait l’angle, la gérante, Aïcha Benali, assure avoir perdu « près d’un tiers » de son chiffre d’affaires du samedi ; elle ne veut pas en dire plus. Le chef de chantier, casque sous le bras, passe saluer les commerçants comme chaque matin. « On essaie de faire le plus de bruit possible en semaine », plaisante-t-il, avant de se reprendre : « le moins possible le samedi, je voulais dire. » À midi, les ouvriers déjeunent sur les marches de l’église, face aux maraîchers qui remballent. La place doit rouvrir en octobre, avec des arbres, des bancs et une halle couverte pour le marché. Robert Chauvin, lui, a déjà repéré l’endroit où il installera son stand : « au soleil, enfin ».";

/** Act 5: an editorial, signed by the paper's name only. */
export const EDITO_TEXT =
  "ÉDITORIAL. Une semaine de vacances, ce n’est pas un caprice. Il fallait du courage pour toucher au calendrier scolaire, ce monument que chacun connaît par cœur et que personne n’ose déplacer. Le conseil scolaire de Montrivage l’a fait mardi, et nous pensons qu’il a eu raison sur le fond. Tous les enseignants le savent : entre la rentrée et les fêtes, les classes s’épuisent. Couper ce long tunnel par deux semaines en automne, c’est donner aux enfants ce que les adultes réclament pour eux-mêmes : une vraie pause. Reconnaissons aussi que l’argument touristique pèse peu face à cela. Une semaine d’août ne vaut pas une année mieux répartie. Ceux qui crient au caprice oublient que deux communes de la région ont déjà franchi le pas, sans que personne y voie une révolution. Mais une bonne décision mal préparée peut devenir une mauvaise réforme. Nous l’avons écrit ici même : la méthode compte autant que la décision. Or les enseignants ont découvert le projet dans la presse, et les familles qui travaillent n’ont reçu, pour l’instant, aucune réponse sur la garde des enfants pendant la deuxième semaine d’automne. Ce sont elles qui paieront la réforme, au sens propre, si rien n’est prévu. Le conseil scolaire doit maintenant convaincre les familles, et non seulement les compter. Un vote à neuf voix contre quatre est une majorité ; ce n’est pas encore une adhésion. Il a deux mois avant la décision de l’autorité régionale. C’est peu, mais c’est assez pour réparer ce qui a été mal engagé. Qu’il les emploie à ouvrir les écoles pendant cette semaine, avec les centres de loisirs, et à publier enfin le bilan des communes qui ont déjà tenté l’expérience. Le reste suivra : les familles accepteront d’autant mieux le changement qu’on leur aura donné les moyens de s’y préparer. Une semaine de vacances, ce n’est pas un caprice. L’improvisation, si. Le Courrier de Montrivage.";

/** Act 6: a billet, with its « je », its one idea and its witty ending. */
export const BILLET_TEXT =
  "LE BILLET D’ODILE. Quarante minutes pour une place. Je l’avoue d’emblée : j’aime les Nuits du Quai. J’aime moins la chasse au stationnement qui les précède. Samedi, j’ai tourné quarante minutes pour trouver une place, ce qui m’a laissé le temps d’écouter deux fois le concert d’ouverture, de loin, vitres fermées. J’ai découvert des rues de Montrivage dont j’ignorais l’existence, et des sens interdits dont j’ignorais la patience. J’ai croisé trois fois le même couple de Lyonnais, aussi perdus que moi, qui ont fini par me demander si j’étais du coin. J’ai répondu oui, avec moins d’assurance qu’avant. La mairie, je le sais, a une réponse : la navette. J’ai donc pris la navette dimanche, en citoyenne exemplaire. Elle était parfaite. Ponctuelle, propre, gratuite, avec un chauffeur qui connaissait le nom des groupes mieux que moi. Un seul défaut, minuscule : la navette s’arrête à 23 h, une heure avant la fin du dernier concert. On peut donc venir en navette écouter les Nuits du Quai. On peut aussi en repartir en navette. Simplement, pas le même soir. J’ai interrogé un agent municipal, qui m’a expliqué, très aimablement, que prolonger le service coûterait trop cher. Je ne doute pas qu’il ait raison. Je constate seulement que le festival coûte, lui aussi, et que personne ne propose de l’arrêter à 23 h. J’ai fait le calcul : à pied, depuis le quai, il faut plus de deux heures pour rentrer chez moi. En talons, je préfère ne pas y penser. Je ne demande pas qu’on transforme le quai en parking, ni qu’on fasse jouer les groupes à l’heure du goûter. Je ne réclame pas grand-chose : une navette qui rentre après la musique, comme les festivaliers. En attendant, j’ai pris ma décision. L’an prochain, je viendrai à pied. J’habite à onze kilomètres. Je commence l’entraînement lundi. Odile Vasseur.";

/** Act 7: an open letter published as an op-ed, with the disclaimer. */
export const LETTRE_TEXT =
  "TRIBUNE. Lettre ouverte à la présidente du conseil scolaire. Par le collectif Parents de la Rive-Est, qui regroupe des familles de quatre écoles de Montrivage. Les textes publiés dans cette rubrique n’engagent que leurs auteurs. Madame la Présidente, nous vous écrivons au nom de deux cents familles qui ont appris, comme tout le monde, par la presse, que l’année scolaire de leurs enfants allait changer de forme. Nous ne contestons pas vos intentions. Nous savons, nous aussi, que novembre est un mois difficile pour les enfants, et l’idée de les laisser souffler mérite d’être examinée. Mais deux semaines de vacances en automne, ce sont deux semaines de garde à payer. Pour une famille où les deux parents travaillent, cela représente, selon nos calculs, l’équivalent d’un mois de courses. Pour une mère seule, c’est parfois une semaine de congés qu’elle n’a pas. Nous avons lu que la commune prévoit d’ouvrir des centres de loisirs. Nous en serions heureux, mais personne ne sait encore combien de places ils offriront, ni à quel prix, ni dans quels quartiers. Vous nous répondrez sans doute que des solutions seront trouvées. Nous aimerions les connaître avant que la décision ne devienne définitive, et non après. Nous vous demandons donc trois choses. D’abord, d’ouvrir une vraie consultation avant l’été, dans chaque école, à des heures où les parents qui travaillent peuvent venir. Ensuite, de garantir un accueil des enfants pendant la deuxième semaine d’automne, à un tarif adapté aux revenus. Enfin, de rendre publics les bilans des communes qui ont déjà adopté ce calendrier, puisque vous les jugez encourageants. Nous savons que l’autorité régionale doit encore se prononcer : c’est pour cela que nous écrivons maintenant, et publiquement. Nous ne voulons pas d’une querelle. Nous voulons être entendus avant d’être prévenus. Nous vous prions d’agréer, Madame la Présidente, l’expression de notre haute considération. Pour le collectif : Nadia Ferrand, Julien Masson et Claire Dubreuil, parents d’élèves.";

/** Act 8: an article framed by the choice and order of its sources. */
export const SOURCES_TEXT =
  "TRANSPORTS. Ligne 7 : la colère monte chez les usagers. Trois semaines après le détournement de la ligne 7 par le boulevard des Écluses, les usagers de cette ligne, l’une des plus fréquentées du réseau, ne décolèrent pas. « On nous a pris dix minutes de vie par jour », s’indigne Martine Roche, aide-soignante, qui prend le bus de 6 h 50 depuis douze ans. « Je pars plus tôt, j’arrive plus tard, et personne ne nous a demandé notre avis. » Même constat chez Yannick Leroy, étudiant, qui a calculé avoir perdu « plus de cinq heures » depuis le début du détour. « Le bus est bondé, il roule au pas, et les horaires affichés sont faux. » Un habitué de la ligne, qui préfère rester anonyme, parle de « mépris » à l’égard des quartiers est. Au terminus, une file d’usagers attend sous la pluie un bus annoncé dans « 4 minutes » depuis un quart d’heure. Une pétition lancée par un comité d’usagers aurait déjà recueilli huit cents signatures, selon ses organisateurs. Dans un courriel adressé à notre rédaction, la société de transport assure que le détour est provisoire et qu’il est imposé par les travaux de la place du Marché. Elle indique étudier « des ajustements d’horaires ». Elle n’a pas donné suite à notre demande d’entretien. Contactée, la mairie renvoie vers la société de transport. Selon le comité, plusieurs personnes âgées auraient renoncé à se rendre au marché du samedi depuis le changement de trajet, sans en préciser le nombre. Le comité d’usagers organisera une réunion publique jeudi, à la salle des fêtes, et compte y inviter les élus. La salle compte deux cents places. Parmi les voyageurs croisés sur le quai de la station des Écluses, Paul Girard, retraité, se montre plus mesuré : « C’est long, mais c’est pour six mois, et le nouveau trajet est plus calme. » Les travaux de la place du Marché doivent s’achever en octobre.";

/** Act 9: two short reports built on the same figures, with their photo
 *  captions. */
export const CHIFFRES_TEXT =
  "TEXTE A · Le Courrier de Montrivage. NUITS DU QUAI : UN BILAN SOUS LES APPLAUDISSEMENTS. Avec quarante-deux mille entrées, la fréquentation progresse de 5 % par rapport à l’an dernier et frôle la jauge maximale de quarante-cinq mille places. Le festival attire bien au-delà de la commune, et même de la région : près d’un festivalier sur trois venait d’ailleurs, ce qui fait des Nuits du Quai le premier événement touristique de l’été. La subvention municipale ne représente que 6 % du budget du festival. Côté tranquillité, la mairie a enregistré trente-huit plaintes pour bruit, soit moins d’une plainte pour mille entrées. Les retombées pour les commerces du centre sont estimées par la chambre de commerce à plusieurs millions d’euros. « Les chiffres parlent d’eux-mêmes », résume l’adjoint à la culture. Les hôtels de la commune affichaient complet les trois nuits. Photo : la foule devant la grande scène, samedi soir. "
  + "TEXTE B · L’Hebdo des Rives. NUITS DU QUAI : LA FACTURE DU SUCCÈS. Les plaintes pour bruit ont triplé : de douze en 2025, elles sont passées à trente-huit cette année, un record depuis la création du festival. Un riverain parle d’un « été confisqué ». Et les riverains ne sont pas seuls à payer. La subvention municipale a augmenté de 15 % en deux ans, alors que deux festivaliers sur trois habitent la région : l’argument touristique, invoqué chaque année pour justifier cette aide, pèse moins lourd qu’on ne le dit. Quant à la fréquentation, elle ne progresse plus que de 5 %, loin des hausses à deux chiffres des premières années. Les riverains, eux, ne figurent dans aucun bilan officiel : la mairie ne compte que les plaintes déposées, pas les nuits blanches. Le festival n’a pas souhaité commenter ces chiffres. Il y a cinq ans, pourtant, il publiait chaque automne un bilan détaillé, plaintes comprises. Photo : un riverain devant les gobelets abandonnés, dimanche matin.";

/** Act 10: an article whose every judgement sits in a loaded word. */
export const MOTS_TEXT =
  "BERGES DU CANAL : LE BÉTONNAGE A COMMENCÉ. Les engins ont envahi les berges dès lundi. Malgré une pétition signée par pas moins de trois cents habitants, la municipalité s’entête et lance le chantier de ce qu’elle appelle pudiquement un « réaménagement ». Sur les plans, une promenade en béton clair, des gradins face à l’eau et un ponton pour les bateaux de location. Sur le terrain, des saules centenaires abattus en une matinée, sous les yeux de riverains impuissants. Une poignée de défenseurs du projet, réunis autour de l’adjoint à l’urbanisme, saluent une « reconquête des berges ». Les riverains, eux, parlent de saccage. « On nous vend une promenade, on nous livre un parking à touristes », tempête Gérard Pons, président de l’association Canal vivant. La facture, elle, donne le vertige : 4,2 millions d’euros pour cinq cents mètres de rive, soit plus de huit mille euros le mètre. La mairie se retranche derrière des études d’impact que personne n’a pu consulter, et promet de « replanter davantage qu’elle n’abat ». Promesse de communication ? On peut le craindre. Car le calendrier interroge : les travaux ont démarré une semaine avant la fin de la consultation publique, que la mairie juge « purement informative ». L’adjoint à l’urbanisme, lui, balaie les critiques d’un revers de main : selon lui, les opposants « confondent un chantier et un projet ». En attendant, les promeneurs du dimanche ont découvert des grilles, des panneaux « chantier interdit au public » et un canal soudain très bruyant. Les commerçants du quai, que le projet devait séduire, attendent de voir. Le restaurant La Péniche, qui comptait sur une terrasse au bord de l’eau, a déjà dû fermer la sienne pour la durée du chantier. Quant aux promeneurs habitués du chemin de halage, ils devront faire un détour de près d’un kilomètre pendant au moins dix-huit mois. Les canards, eux, n’ont pas été consultés.";

/** Act 11: two treatments of the same public meeting. */
export const DEUX_TEXT =
  "TEXTE A · Le Courrier de Montrivage, page 5, rubrique Culture. BRUIT : LE FESTIVAL S’ENGAGE À FINIR À MINUIT. Les Nuits du Quai feront un geste pour leurs voisins. Lors de la réunion publique de jeudi soir, la directrice du festival, Inès Garnier, a proposé que les concerts s’arrêtent désormais à minuit, contre une heure du matin jusqu’ici. « Nous voulons que le festival reste une fête pour tout le quai, y compris pour ceux qui y dorment », a-t-elle expliqué devant une centaine de personnes. Le maire, Daniel Roussel, a salué « un engagement responsable » et annoncé le renforcement du nettoyage dès le dimanche matin. Rappelons que l’édition 2026 a réuni quarante-deux mille festivaliers pour trente-huit plaintes, soit moins d’une pour mille entrées. Le festival s’engage aussi à installer des capteurs de bruit autour de la grande scène et à publier leurs mesures après chaque soirée. Une riveraine présente dans la salle s’est dite « plutôt rassurée ». Photo : Inès Garnier présente son engagement, jeudi soir. "
  + "TEXTE B · L’Hebdo des Rives, à la une. LES RIVERAINS OBTIENNENT ENFIN UN COUVRE-FEU. Il aura fallu trois nuits blanches, trois cents signatures et une salle comble pour que la musique s’arrête plus tôt. Jeudi soir, face à des habitants bien décidés à se faire entendre, le festival a dû concéder la fin des concerts à minuit. « C’est une première victoire, mais ce n’est qu’un début », prévient Bernard Lemoine, à l’origine de la pétition, qui réclame aussi des limites de volume contrôlées par un organisme indépendant. Plusieurs riverains ont pris la parole pour décrire des nuits « impossibles » et des rues « transformées en poubelle ». Une habitante a réclamé, sous les applaudissements, que la grande scène soit déplacée loin des immeubles. La mairie a promis un nettoyage renforcé. Les plaintes pour bruit ont triplé en un an. Photo : la salle des fêtes comble, jeudi soir.";

/** Act 12, THE TASK TEXTS, A: a report on the bridge's first car-free
 *  Sunday. Printed twice: as the act's reading, and inside the task brief
 *  (no `source` field on `task`). */
export const PONT_A_TEXT =
  "TEXTE A · Le Courrier de Montrivage, à la une, lundi 1er juin. REPORTAGE. Pont des Saules : le premier dimanche sans voitures. Par Lucie Fontaine. Il est 10 heures et, pour la première fois depuis sa construction, le pont des Saules appartient aux piétons. Des enfants zigzaguent à vélo sur la chaussée, un couple pique-nique sur le trottoir, un accordéoniste s’est installé au milieu du pont. « On redécouvre la rivière », s’émerveille Camille, venue en poussette de la rive est. Depuis dimanche, le pont est réservé aux piétons, aux vélos et au bus de la ligne 4 : une piétonnisation votée en avril par le conseil municipal. Au bout du pont, le fleuriste Marc Delorme n’en revient pas : « J’ai vendu plus de bouquets ce matin qu’un samedi ordinaire. » Les compteurs installés par la ville ont enregistré quatre mille passages de vélos dans la journée. « C’est une piétonnisation, pas une fermeture : le pont n’a jamais été aussi ouvert », sourit l’adjointe aux mobilités, venue à pied. Sur la rive ouest, une file de vélos attend devant le loueur, qui a sorti tout son stock. Vers midi, la fanfare du collège entame un air que tout le pont reprend. Photo : des enfants à vélo au milieu du pont, dimanche matin.";

/** Act 12, THE TASK TEXTS, B: the weekly's editorial on the same Sunday. */
export const PONT_B_TEXT =
  "TEXTE B · L’Hebdo des Rives, mercredi 3 juin. ÉDITORIAL. La ville coupée en deux. On nous promettait une fête ; on nous a livré une frontière. Depuis dimanche, la fermeture du pont des Saules aux voitures impose aux habitants de la rive est un détour de vingt minutes pour rejoindre l’hôpital, la gare ou leur travail. Les artisans, les aides à domicile, les personnes âgées qui ne pédalent pas : voilà ceux que la municipalité a choisi d’oublier. Une poignée de cyclistes enthousiastes ne fait pas une politique des transports. Le quai Saint-Clair, lui, a connu dimanche ses premiers bouchons, et les commerçants de la rive est s’inquiètent déjà pour leur chiffre d’affaires. La mairie invoque l’apaisement de la circulation ; elle n’a publié aucune étude sur les reports de trafic. On nous répond que le bus continue de passer. Encore faut-il qu’il passe près de chez soi, et à l’heure où l’on travaille. Nous ne sommes pas contre le vélo. Nous sommes contre les décisions prises pour une rive au détriment de l’autre. Qu’on rende le pont aux voitures en semaine et qu’on le réserve aux piétons le dimanche : la ville n’a pas besoin d’un symbole, elle a besoin d’un pont. L’Hebdo des Rives.";

/** What a comparison of PONT_A_TEXT and PONT_B_TEXT must hold. The rubric,
 *  the model answer and the grader notes are written against this. */
export const PONT_KEY = {
  commun: 'Le même dimanche : le premier jour où le pont des Saules est réservé aux piétons, aux vélos et au bus.',
  genres: 'A est un reportage, à la une, signé, au présent, qui fait voir une scène ; B est un éditorial du journal, sans signature personnelle, qui juge et propose.',
  cadrage: [
    'Les voix : A ne fait parler que des personnes satisfaites (Camille, le fleuriste, l’adjointe aux mobilités) ; B ne cite personne et parle au nom des « oubliés ».',
    'Les chiffres : A donne quatre mille passages de vélos ; B un détour de vingt minutes, sans source.',
    'Les photos et les titres : des enfants à vélo et « le premier dimanche sans voitures » ; « la ville coupée en deux ».',
  ],
  mots: [
    'piétonnisation (A, dans le récit de la journaliste et dans la bouche de l’adjointe : le mot de la mairie) / fermeture (B)',
    'une fête, un pont qui « appartient aux piétons » (A) / une frontière, « la ville coupée en deux » (B)',
    '« une poignée de cyclistes enthousiastes » (B), qui réduit les partisans à une minorité',
    '« bouchons », « choisi d’oublier » (B)',
  ],
  horsChamp: [
    'A : les automobilistes détournés, les commerçants inquiets de la rive est, toute donnée sur la circulation.',
    'B : le vote du conseil en avril, les quatre mille passages de vélos, le fleuriste satisfait. (B parle du bus, mais pour l’écarter : ce n’est pas une omission.)',
  ],
  conclusion: 'Aucun des deux ne ment ; chacun cadre le même pont, et il faut les lire ensemble.',
} as const;
