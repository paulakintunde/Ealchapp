// c2.14.l1 « Bilan de maîtrise » — the authored corpus, the identity block
// and the citation constants. DRAFT, the FOURTEENTH AND LAST lesson of the
// C2 band, wave 4, written LAST on purpose: its brief (C2-RESEARCH-PLAN.md,
// around line 276; C2-BUILD-PLAN.md's unit table) requires every one of the
// other 13 C2 lessons to already exist as a file in this directory, because
// this lesson cites them by trail position and reuses their real content.
// Structural model: `c2/correction-revision-corpus.ts` (c2.13), the sibling
// right before this one, same shape W, same theme `discours-dexamen` family
// (c2.13 sits in `langue-soignee`; this file returns to `discours-dexamen`,
// which c2.08/c2.09/c2.10 already used).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json. No
// Postgres read or write was made while authoring this file: the id home
// (discours-dexamen, 2400-2599, the block after c2.10's 2200-2399, no widen
// needed — the theme already ranges c1-c2) is recorded in C2-RESEARCH-PLAN.md
// and C2-BUILD-PLAN.md's id-homes table ("no widen needed").
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT MAKES THIS LESSON DIFFERENT FROM EVERY OTHER C2 FILE IN THIS FOLDER
// ══════════════════════════════════════════════════════════════════════════
//
//   EVERY OTHER C2 LESSON cites its C1 predecessors by REFRAME IMPORT and
//   TRAIL POSITION ONLY, never by reusing a C1 row's id, because a C1 row
//   resolves through Postgres and the content packs, which no C2 draft
//   session has open. THIS LESSON is different: its thirteen predecessors are
//   NOT in Postgres either (none of c2.01-c2.13 is merged or published) — they
//   are thirteen sibling `.ts` files sitting in this very directory, so this
//   file has something no other C2 lesson had: direct, readable, importable
//   access to the real text of every lesson it cites. It uses that access
//   two ways, never guessing at unread content:
//
//     (a) REFRAME + REFRAME_EN imported from all thirteen sibling corpus
//         files below (§H), exactly the mechanism every C1-citing C2 lesson
//         already uses, now pointed at C2 siblings instead of C1 ones;
//     (b) a handful of each sibling's own named passage constants (an
//         anchor text, a model message, a source document) imported and
//         reused verbatim as reading/example material, never retyped from
//         memory — MESSAGE_CAMILLE (c2.01), EXTRACT_A (c2.02),
//         PORTRAIT_BERTHIER (c2.03), PASTICHE_IRONIQUE (c2.04),
//         MESSAGE_GIRARD (c2.05), MEDIATION_SOURCE (c2.06), POEM1 (c2.07),
//         CALLER_PRICES_FR (c2.08), HIKER_QUESTION_FR (c2.09), DOC2_TEXT
//         (c2.10), EXTRACT_DEMO and EXTRACT_PARAGRAPH (c2.12);
//     (c) for five siblings, their own ALL_ROWS array imported directly and
//         specific real ITEM IDS reused by `itemId`, exactly the way
//         `bilan-grammatical-c1-corpus.ts` reused real B1/B2 rows by id once
//         those bands were published — c2.01 (.1555-.1557), c2.05
//         (.1093-.1095), c2.06 (.2466), c2.11 (.2200, .2208), c2.13
//         (.2607, .2636, .2649, .2662, .2673, .2681). These ids are declared
//         in `IMPORTED` below and rolled into `LESSON.itemIds` by the lesson
//         file's assembly, the identical mechanism c1.01 used for its 86
//         reused B1/B2 rows.
//
//   c2.11 (compréhension orale experte) is cited by REFRAME, by two reused
//   row ids and by its own written REC_DESC note that a lesson built only
//   from text can describe what listening teaches without needing audio;
//   this lesson never adds a `listening` section of its own, so none of its
//   own content risks the `hideLines` bug class two prior waves shipped.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   NO NEW SKILL. This is the capstone: a single extended portfolio task
//   (act 8) that draws on all thirteen C2 skills at once, scaffolded by seven
//   acts that each recap one pair (or trio) of predecessors by the band's own
//   four-unit structure (C2-BUILD-PLAN.md's unit table), never re-teaching a
//   single one of them.
//
//     act 1   le dossier de maîtrise : the problem (thirteen skills, written
//             as thirteen separate paragraphs, is not a portfolio); the whole
//             band mapped, lesson by lesson and unit by unit
//     act 2   lire et entendre, sous contrainte : c2.11 (compréhension orale
//             experte) and c2.12 (lire des textes académiques denses), the
//             band's two RECOGNITION skills, recapped together as the INPUT
//             half of the portfolio
//     act 3   les mots, le registre, l'origine : c2.03 (cent expressions),
//             c2.04 (argot littéraire) and c2.05 (étymologie), the band's
//             lexical unit, recapped together
//     act 4   la nuance et la lecture intégrale : c2.01 (précision, nuance et
//             l'implicite) and c2.02 (l'analyse littéraire intégrale), the
//             unit's two close-reading skills
//     act 5   médier, traduire, improviser à l'oral : c2.06 (la médiation
//             linguistique), c2.07 (traduire la poésie) and c2.08 (la
//             production orale spontanée)
//     act 6   tenir un discours, trancher par écrit : c2.09 (soutenir un
//             discours long) and c2.10 (la synthèse experte et la
//             dissertation avancée)
//     act 7   le piège du bilan : une compétence peut en cacher une autre,
//             c2.13's own trap (« une correction peut en cacher une autre »)
//             raised one level: a portfolio response that nails three skills
//             and silently skips a fourth
//     act 8   ton bilan de maîtrise : the graded task. Read a dense original
//             passage (c2.12's skill), extract and take a position on its
//             argument (c2.10's skill), name the rhetorical device that
//             carries its central claim (c2.02/c2.03's skill), produce a
//             sustained written response (c2.09's skill) in precise,
//             consistently soutenu register (c2.01's skill), then self-edit
//             it against c2.13's own four questions before submitting
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. ID DISCIPLINE
// ══════════════════════════════════════════════════════════════════════════
//
//   THEME `discours-dexamen` (domain `education`, exam_flag true) already
//   ranges c1-c2 in Postgres: no widen needed. c1.09 holds 1200-1399, c2.08
//   holds 1800-1999, c2.09 holds 2000-2199, c2.10 holds 2200-2399 (all
//   published or drafted in this same folder), none touched here. This lesson
//   owns block 2400-2599 AND NOTHING ELSE — the same block number c2.06 and
//   c2.12 each own inside their OWN, different themes (`langue-soignee` and
//   `strategies-de-comprehension` respectively); an item id always carries
//   its theme, so `fr.c2.discours-dexamen.2400` cannot collide with
//   `fr.c2.langue-soignee.2400` or `fr.c2.strategies-de-comprehension.2400`.
//
//   USED: .2400-.2513, 114 rows total, across eight act blocks (§I below);
//   .2514-.2599 left free inside the claimed block for the pre-review pass,
//   the same margin every C2 lesson in this folder leaves.
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. SOURCES
// ══════════════════════════════════════════════════════════════════════════
//
//   NONE NEW, by brief. Every passage this lesson reads is reused, imported,
//   from a sibling file (§H and §I); the frame story, the drill sentences and
//   the task's own dense source passage (which reuses c2.12's EXTRACT_PARAGRAPH
//   verbatim) are the only freshly authored prose, and none of it carries a
//   new fact or claim — it is about the portfolio exercise itself, never
//   about the world.
//
// ══════════════════════════════════════════════════════════════════════════
//  §C. FACT CHECK
// ══════════════════════════════════════════════════════════════════════════
//
//   PEOPLE, ALL INVENTED: Odile Rochas (coordinatrice du Programme de
//   maîtrise), the learner's own candidate role, Noor (a second candidate,
//   named once, act 7).
//   ORGANISATIONS, ALL INVENTED: l'Institut Delorme, le Programme de
//   maîtrise, le jury.
//   REAL PLACES: none named; the setting is generic (« une salle de
//   l'institut »).
//   LOW-HEAT TOPIC ONLY: assembling a portfolio for a language-mastery
//   mentoring programme. No real fact, no living person, no political or
//   medical content is introduced by this file; the reused passages carry
//   whatever their own source lesson already fact-checked (c2.02's Maupassant
//   extract is public domain and verified there; c2.06's and c2.10's and
//   c2.12's invented institutes/researchers are invented there, not here).
//   QUOTATIONS: every reused passage is quoted exactly as its own file
//   defines it, via a TypeScript import, never retyped from memory.
//
// ══════════════════════════════════════════════════════════════════════════
//  §D. HOUSE RULES APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; Odile uses vous with the candidates, as a programme
//   coordinator would. No em dash. No U+203F tie. Never "honnête" /
//   "honnêtement" / "honest", in any field, including a `note` on a
//   groupDrill item (the exact bug class a prior wave shipped). Typographic
//   ’ throughout. No spaced « ? » or « ! » in a scene or story bubble. French
//   only on the learner surface; English authored behind every `en` field and
//   every trailing « EN: », never shown by default. Citations by trail
//   position in French words only (« la leçon 9 du C2 »), never a raw id.
//
//   SELF-DUPLICATE CHECK: every `fr` string in this file's own `ALL_ROWS` was
//   compared by hand against every other to rule out two identical cards
//   under different ids, the fault c2.02's wave-1 dry run found; a reused
//   sibling passage is never also retyped as a new row here.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c2.14',
  seq: 14,
  title: 'Mastery Portfolio Exercise',
  sub: 'Bilan de maîtrise',
  canDo: "Can assemble, under a realistic time budget, a single coherent response that draws on every C2 skill at once: extracting the argument of a dense, unsimplified passage; taking and defending a position on it; naming the rhetorical or idiomatic device that carries its central claim; sustaining a full written response in precise, consistently soutenu register; and self-editing that response against a four-question coherence checklist before submitting it",
  prereqUnitIds: ['c2.01', 'c2.02', 'c2.03', 'c2.04', 'c2.05', 'c2.06', 'c2.07', 'c2.08', 'c2.09', 'c2.10', 'c2.11', 'c2.12', 'c2.13'],
} as const;

export const LESSON_ID = 'c2.14.l1';
export const THEME = 'discours-dexamen';
export const LEVEL = 'c2' as const;

/** ONE block. c1.09 holds 1200-1399, c2.08 holds 1800-1999, c2.09 holds
 *  2000-2199, c2.10 holds 2200-2399, all published or drafted in this same
 *  folder; none touched here. */
export const ID_RANGES = [[2400, 2599]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. HOW THIS LESSON NAMES ITS THIRTEEN PREDECESSORS
 *
 *  None of c2.01-c2.13 carries a real `seq` in `seed.json` (none is merged or
 *  published), so `refFr()`'s usual seed lookup cannot resolve them. The
 *  band's own order is fixed by C2-BUILD-PLAN.md's approved unit table
 *  regardless of what is in Postgres yet (the same reasoning c2.09's corpus
 *  file already used for its own same-wave citation of "la leçon 8 du C2").
 *  These thirteen labels are therefore hardcoded, exactly that way, and are
 *  NOT placeholders: the order is final.
 * ══════════════════════════════════════════════════════════════════════════ */

export const C201_REF = 'la leçon 1 du C2';
export const C202_REF = 'la leçon 2 du C2';
export const C203_REF = 'la leçon 3 du C2';
export const C204_REF = 'la leçon 4 du C2';
export const C205_REF = 'la leçon 5 du C2';
export const C206_REF = 'la leçon 6 du C2';
export const C207_REF = 'la leçon 7 du C2';
export const C208_REF = 'la leçon 8 du C2';
export const C209_REF = 'la leçon 9 du C2';
export const C210_REF = 'la leçon 10 du C2';
export const C211_REF = 'la leçon 11 du C2';
export const C212_REF = 'la leçon 12 du C2';
export const C213_REF = 'la leçon 13 du C2';

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. UNIT MAP (C2-BUILD-PLAN.md's own four-unit table)
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT1_TITLE = 'Précision et style';
export const UNIT2_TITLE = 'Mots et médiation';
export const UNIT3_TITLE = 'Discours et analyse';
export const UNIT4_TITLE = 'Révision et maîtrise';

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE THIRTEEN REFRAMES, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as C201_REFRAME, REFRAME_EN as C201_REFRAME_EN, MESSAGE_CAMILLE, MESSAGE_CAMILLE_EN } from './precision-nuance-corpus.ts';
export { REFRAME as C202_REFRAME, REFRAME_EN as C202_REFRAME_EN, EXTRACT_A as C202_EXTRACT_A, EXTRACT_A_EN as C202_EXTRACT_A_EN } from './analyse-litteraire-corpus.ts';
export { REFRAME as C203_REFRAME, REFRAME_EN as C203_REFRAME_EN, PORTRAIT_BERTHIER, PORTRAIT_BERTHIER_EN } from './cent-idiomes-corpus.ts';
export { REFRAME as C204_REFRAME, REFRAME_EN as C204_REFRAME_EN, PASTICHE_IRONIQUE, PASTICHE_IRONIQUE_EN } from './argot-litteraire-corpus.ts';
export { REFRAME as C205_REFRAME, REFRAME_EN as C205_REFRAME_EN, MESSAGE_GIRARD, MESSAGE_GIRARD_EN } from './etymologie-corpus.ts';
export { REFRAME as C206_REFRAME, REFRAME_EN as C206_REFRAME_EN, MEDIATION_SOURCE, MEDIATION_SOURCE_EN } from './c2-mediation-corpus.ts';
export { REFRAME as C207_REFRAME, REFRAME_EN as C207_REFRAME_EN, POEM1, POEM1_EN, POEM1_SOURCE } from './poesie-corpus.ts';
export { REFRAME as C208_REFRAME, REFRAME_EN as C208_REFRAME_EN, CALLER_PRICES_FR, CALLER_PRICES_EN } from './production-spontanee-corpus.ts';
export { REFRAME as C209_REFRAME, REFRAME_EN as C209_REFRAME_EN, HIKER_QUESTION_FR, HIKER_QUESTION_EN } from './discours-long-corpus.ts';
export { REFRAME as C210_REFRAME, REFRAME_EN as C210_REFRAME_EN, DOC2_TEXT, DOC2_TEXT_EN, DOSSIER_TITLE as C210_DOSSIER_TITLE } from './synthese-dissertation-corpus.ts';
export { REFRAME as C211_REFRAME, REFRAME_EN as C211_REFRAME_EN } from './ecoute-experte-corpus.ts';
export { REFRAME as C212_REFRAME, REFRAME_EN as C212_REFRAME_EN, EXTRACT_DEMO as C212_EXTRACT_DEMO, EXTRACT_DEMO_EN as C212_EXTRACT_DEMO_EN, EXTRACT_PARAGRAPH as C212_EXTRACT_PARAGRAPH, EXTRACT_PARAGRAPH_EN as C212_EXTRACT_PARAGRAPH_EN } from './lecture-academique-corpus.ts';
export { REFRAME as C213_REFRAME, REFRAME_EN as C213_REFRAME_EN } from './correction-revision-corpus.ts';

/** Five siblings' own real rows, imported by their ids, exactly as
 *  `bilan-grammatical-c1-corpus.ts` reused real published B1/B2 rows once
 *  those bands existed to reuse. These five C2 siblings cannot be read from
 *  Postgres (none is published) but CAN be read as sibling `.ts` files,
 *  which is the whole point of writing c2.14 last. */
import { ALL_ROWS as C201_ROWS } from './precision-nuance-corpus.ts';
import { ALL_ROWS as C205_ROWS } from './etymologie-corpus.ts';
import { ALL_ROWS as C206_ROWS } from './c2-mediation-corpus.ts';
import { ALL_ROWS as C211_ROWS } from './ecoute-experte-corpus.ts';
import { ALL_ROWS as C213_ROWS } from './correction-revision-corpus.ts';

type ForeignRow = { id: string; fr: string; en: string };
const FOREIGN_ROWS: ForeignRow[] = [
  ...(C201_ROWS as unknown as ForeignRow[]),
  ...(C205_ROWS as unknown as ForeignRow[]),
  ...(C206_ROWS as unknown as ForeignRow[]),
  ...(C211_ROWS as unknown as ForeignRow[]),
  ...(C213_ROWS as unknown as ForeignRow[]),
];
export const FOREIGN = new Map<string, ForeignRow>(FOREIGN_ROWS.map((r) => [r.id, r]));

/** The exact reused ids, named so the lesson file and this file agree, and so
 *  a typo in either throws instead of silently resolving to nothing. */
export const F201 = { modele1: 'fr.c2.nuances-et-registres.1555', modele2: 'fr.c2.nuances-et-registres.1556', modele3: 'fr.c2.nuances-et-registres.1557' };
export const F205 = { photophobe: 'fr.c2.etymologie.1093', insupportable: 'fr.c2.etymologie.1094', decompose: 'fr.c2.etymologie.1095' };
export const F206 = { bilan: 'fr.c2.langue-soignee.2466' };
export const F211 = { signal: 'fr.c2.strategies-de-comprehension.2200', triage: 'fr.c2.strategies-de-comprehension.2208' };
export const F213 = { registre: 'fr.c2.langue-soignee.2607', redondance: 'fr.c2.langue-soignee.2636', reference: 'fr.c2.langue-soignee.2649', transition: 'fr.c2.langue-soignee.2662', piege: 'fr.c2.langue-soignee.2673', questions: 'fr.c2.langue-soignee.2681' };

/** A foreign row's fr/en, resolved through the merged map. Throws on a typo. */
function foreign(id: string): ForeignRow {
  const r = FOREIGN.get(id);
  if (!r) throw new Error(`c2.14: no foreign row ${id}`);
  return r;
}

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE REFRAME AND THE ONE METAPHOR
 *
 *  THIRTEEN INSTRUMENTS, ONE PIECE. Every C2 lesson before this one tuned ONE
 *  instrument alone: a dial (c2.01), four threads (c2.02), a picture-and-
 *  register (c2.03), a costume (c2.04), a stone (c2.05), a door (c2.06), a
 *  crossing (c2.07), a live broadcast (c2.08), a trail (c2.09), weighing then
 *  deciding (c2.10), a signal in noise (c2.11), unfolding (c2.12), a thread
 *  followed again (c2.13). None of those thirteen images is retired here:
 *  the capstone's own image gathers them, rather than replacing them, the way
 *  an orchestra does not erase what each instrument already was.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Treize instruments accordés séparément ; le bilan est la pièce où ils jouent enfin ensemble.';
export const REFRAME_EN = 'Thirteen instruments tuned separately; the capstone is the piece where they finally play together.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Un bilan de maîtrise, c’est treize paragraphes, un par leçon.',
    why: 'False where act 1 has to hold: treize paragraphes séparés ne prouvent que treize instruments accordés, jamais qu’ils jouent ensemble ; c’est exactement le brouillon qu’Odile refuse en acte 1.',
  },
  {
    text: 'Le bilan enseigne une nouvelle compétence, plus difficile que les treize autres.',
    why: 'False: cette leçon ne possède aucun contenu propre à enseigner (C2-BUILD-PLAN.md : « C2 adds no new grammar », et ce bilan n’ajoute aucune compétence nouvelle non plus). Elle recombine les treize acquis, elle n’en ajoute pas un quatorzième.',
  },
  {
    text: 'Réussir trois compétences sur quatre dans une même réponse suffit à un bon bilan.',
    why: 'False where act 7 has to hold : une réponse peut réussir la lecture, la synthèse et le registre, et pourtant ne jamais nommer un procédé, exactement le piège que cet acte nomme et que l’acte 8 note comme un critère séparé.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ROW CONSTRUCTORS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
/** Named for a flawed example, a decoy, or a scene-only line: never released,
 *  never spoken as a model to produce, the same convention every C2 lesson
 *  in this folder uses for its own `SR` constant. */
const SR = ['sentence', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, tags, drills, version: 1,
  grammarPoints: ['bilan-maitrise'], ...extra,
});
const phrase = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  ...sent(n, fr, en, tags, drills, extra), kind: 'phrase',
});

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 1 ROWS — Le dossier de maîtrise (2400-2415)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT1_ROWS: Row[] = [
  sent(2400, 'Treize fiches, une par leçon, et aucune ne se répond.', 'Thirteen sheets, one per lesson, and none of them answers another.', ['piege-fragmentation', 'scenario'], SR),
  sent(2401, 'Vous avez treize compétences solides et un dossier qui ne les montre jamais ensemble.', 'You have thirteen solid skills and a portfolio that never shows them together.', ['scenario']),
  phrase(2402, 'le dossier de maîtrise', 'the mastery portfolio', ['metalangage']),
  sent(2403, 'Le Programme de maîtrise ne demande pas treize réponses séparées ; il demande une seule réponse où les treize s’entendent.', 'The Mastery Programme does not ask for thirteen separate answers; it asks for one answer in which all thirteen can be heard.', ['regle']),
  sent(2404, 'Le C2 n’ajoute aucune compétence nouvelle à ce bilan ; il recombine les treize déjà acquises.', 'C2 adds no new skill to this capstone; it recombines the thirteen already acquired.', ['regle']),
  phrase(2405, 'précision et style', 'precision and style', ['unite']),
  phrase(2406, 'mots et médiation', 'words and mediation', ['unite']),
  phrase(2407, 'discours et analyse', 'discourse and analysis', ['unite']),
  phrase(2408, 'révision et maîtrise', 'revision and mastery', ['unite']),
  sent(2409, 'Quatre unités, treize leçons, une seule pièce à la fin.', 'Four units, thirteen lessons, one single piece at the end.', ['regle']),
  sent(2410, 'Odile Rochas coordonne le Programme de maîtrise depuis six ans ; elle a lu des centaines de dossiers fragmentés.', 'Odile Rochas has coordinated the Mastery Programme for six years; she has read hundreds of fragmented portfolios.', ['scenario']),
  sent(2411, 'Un dossier réussi se lit comme une seule voix, jamais comme treize voix à la suite.', 'A successful portfolio reads as one single voice, never as thirteen voices in a row.', ['usage']),
  sent(2412, 'La lecture, l’écoute, les mots, la nuance, la médiation, le discours, la révision : rien n’est nouveau ici, tout doit se répondre.', 'Reading, listening, words, nuance, mediation, discourse, revision: nothing here is new, everything must answer everything else.', ['bilan']),
  sent(2413, 'Je vais reprendre chaque leçon séparément, dans l’ordre, du début à la fin.', 'I will go back through each lesson separately, in order, from start to finish.', ['piege-fragmentation'], SR),
  sent(2414, 'Je vais relire les quatre unités, puis écrire une seule réponse où elles se répondent.', 'I will reread the four units, then write a single response in which they answer each other.', ['reformulation']),
  sent(2415, 'Un bilan de maîtrise ne teste jamais une treizième compétence ; il teste si les treize premières savent jouer ensemble.', 'A mastery capstone never tests a fourteenth skill; it tests whether the first thirteen know how to play together.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 2 ROWS — Lire et entendre, sous contrainte (2416-2427)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT2_ROWS: Row[] = [
  sent(2416, 'Une phrase dense et un appel téléphonique bruité n’ont, en apparence, rien en commun.', 'A dense sentence and a noisy phone call seem to have nothing in common.', ['scenario']),
  sent(2417, 'Les deux exigent la même chose : trier d’abord ce qui gêne, avant de comprendre ce qui compte.', 'Both demand the same thing: sort out what is in the way first, before understanding what matters.', ['regle']),
  phrase(2418, 'l’armature de la phrase', 'the sentence’s backbone', ['vocabulaire']),
  phrase(2419, 'le signal dans le bruit', 'the signal in the noise', ['vocabulaire']),
  sent(2420, 'Une phrase académique dense cache son verbe principal sous trois propositions ; un appel bruité cache un mot sous deux voix qui se chevauchent.', 'A dense academic sentence hides its main verb under three subordinate clauses; a noisy call hides a word under two overlapping voices.', ['usage']),
  sent(2421, 'Repérer l’armature avant de résoudre une seule subordonnée évite de perdre le fil, à l’écrit comme à l’oral.', 'Spotting the backbone before resolving a single subordinate clause keeps you from losing the thread, in writing as in speech.', ['usage']),
  sent(2422, 'Ni l’une ni l’autre de ces deux leçons ne te demande de produire un mot de français ; toutes les deux sont des leçons de reconnaissance.', 'Neither of these two lessons asks you to produce a single word of French; both are recognition lessons.', ['recap']),
  sent(2423, 'Candidate : je repère d’abord le bruit qui me gêne le plus, avant de chercher le reste.', 'Candidate: I first work out which noise is in my way the most, before looking for the rest.', ['scenario']),
  sent(2424, 'Lire sous contrainte de temps et écouter sous contrainte de bruit sont deux moitiés de la même compétence : extraire vite, sans tout comprendre d’un coup.', 'Reading under a time constraint and listening under noise are two halves of the same skill: extracting fast, without understanding everything at once.', ['bilan']),
  sent(2425, 'Je comprends chaque mot, donc j’ai compris la phrase entière.', 'I understand every word, so I have understood the whole sentence.', ['piege-densite'], SR),
  sent(2426, 'Comprendre chaque mot ne suffit pas tant que l’armature, le sujet et le verbe principal, n’est pas trouvée.', 'Understanding every word is not enough until the backbone, the subject and the main verb, has been found.', ['reformulation']),
  sent(2427, 'Dans ton bilan, une seule lecture, une seule écoute : ce qui n’est pas trié la première fois ne le sera pas la seconde.', 'In your capstone, one reading, one listening: what is not sorted the first time will not be the second.', ['usage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 3 ROWS — Les mots, le registre, l’origine (2428-2443)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT3_ROWS: Row[] = [
  sent(2428, 'Un mot savant, une expression imagée, un mot d’argot cité : trois costumes, jamais le même tissu.', 'A learned word, a vivid idiom, a quoted slang word: three costumes, never the same fabric.', ['scenario']),
  phrase(2429, 'le registre d’une expression', 'an idiom’s register', ['vocabulaire']),
  phrase(2430, 'l’histoire d’un mot', 'a word’s history', ['vocabulaire']),
  sent(2431, 'Une expression imagée porte un registre avant de porter une image ; un mot savant porte une histoire avant de porter un sens.', 'A vivid idiom carries a register before it carries a picture; a learned word carries a history before it carries a meaning.', ['regle']),
  sent(2432, 'Citer un mot d’argot dans une analyse n’autorise jamais à l’employer soi-même dans cette même analyse.', 'Quoting a slang word inside an analysis never licenses using it oneself inside that same analysis.', ['regle']),
  sent(2433, 'Un portrait qui mêle cinq familles d’expressions sans jamais en citer deux dans la même phrase garde un registre tenu, du début à la fin.', 'A portrait that blends five idiom families without ever citing two in the same sentence keeps a held register, from start to finish.', ['usage']),
  sent(2434, 'Décomposer un mot savant en ses racines permet de deviner son sens avant de le connaître par cœur.', 'Breaking a learned word down into its roots lets you guess its meaning before knowing it by heart.', ['usage']),
  sent(2435, 'Candidate : je nomme d’abord la famille d’expression qu’il me faut, puis je choisis le mot le plus exact.', 'Candidate: I first name the idiom family I need, then I choose the most exact word.', ['scenario']),
  sent(2436, 'J’emploie ce mot d’argot moi-même, puisque le texte que j’analyse l’emploie déjà.', 'I use this slang word myself, since the text I am analysing already uses it.', ['piege-costume'], SR),
  sent(2437, 'Je nomme ce mot d’argot, sans jamais l’employer moi-même dans mon propre texte.', 'I name this slang word, without ever using it myself in my own text.', ['reformulation']),
  sent(2438, 'Ces trois leçons ne se recoupent jamais : les expressions imagées, l’argot cité et l’histoire des mots touchent chacune un terrain que les deux autres laissent intact.', 'These three lessons never overlap: vivid idioms, quoted slang and word history each touch ground the other two leave untouched.', ['recap']),
  sent(2439, 'Un dossier de maîtrise qui cite un mot savant sans jamais dire d’où il vient perd la moitié de ce que cette leçon lui a donné.', 'A mastery portfolio that quotes a learned word without ever saying where it comes from loses half of what this lesson gave it.', ['bilan']),
  sent(2440, 'Trois leçons, trois façons de juger un mot : par son registre, par son usage littéraire, par son histoire.', 'Three lessons, three ways to judge a word: by its register, by its literary use, by its history.', ['regle']),
  sent(2441, 'Un mot bien choisi dans ton bilan porte les trois jugements à la fois, sans qu’aucun des trois ne se voie séparément.', 'A well-chosen word in your capstone carries all three judgements at once, without any of the three showing separately.', ['bilan']),
  sent(2442, 'Je choisis un mot parce qu’il sonne bien, sans vérifier son registre ni son histoire.', 'I choose a word because it sounds good, without checking its register or its history.', ['piege-costume'], SR),
  sent(2443, 'Je choisis un mot après avoir vérifié son registre et, si besoin, son histoire.', 'I choose a word after checking its register and, if needed, its history.', ['reformulation']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 4 ROWS — La nuance et la lecture intégrale (2444-2455)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT4_ROWS: Row[] = [
  sent(2444, 'Un courriel qui laisse entendre un agacement, un roman qui tient quatre fils à la fois : deux lectures, un seul réflexe.', 'An email implying irritation, a novel holding four threads at once: two readings, one single reflex.', ['scenario']),
  phrase(2445, 'le curseur d’un mot', 'a word’s dial', ['vocabulaire']),
  phrase(2446, 'les quatre fils d’une œuvre', 'a work’s four threads', ['vocabulaire']),
  sent(2447, 'Lire l’implicite, c’est lire le curseur qu’un autre a déjà réglé ; lire une œuvre intégralement, c’est tenir plusieurs curseurs à la fois, sur les mêmes lignes.', 'Reading the implicit means reading a dial someone else has already set; reading a whole work means holding several dials at once, on the same lines.', ['regle']),
  sent(2448, 'Un message professionnel reste poli tout en laissant deviner un vrai agacement, sans jamais le nommer.', 'A professional message stays polite while letting real irritation show through, without ever naming it.', ['usage']),
  sent(2449, 'Un texte littéraire tient son registre, sa voix narrative, sa structure et ses figures ensemble, jamais une seule à la fois.', 'A literary text holds its register, its narrative voice, its structure and its figures together, never just one at a time.', ['usage']),
  sent(2450, 'Candidate : je nomme d’abord ce que la phrase laisse entendre, puis je choisis le mot exact qui répond au même registre.', 'Candidate: I first name what the sentence implies, then I choose the exact word that answers in the same register.', ['scenario']),
  sent(2451, 'Ce texte emploie un mot ironique ; je réponds donc avec un mot encore plus fort, pour montrer que j’ai compris.', 'This text uses an ironic word; so I reply with an even stronger word, to show I understood.', ['piege-surlecture'], SR),
  sent(2452, 'Ce texte emploie un mot ironique ; je réponds avec un mot du même registre, ni plus fort, ni plus faible.', 'This text uses an ironic word; I reply with a word of the same register, neither stronger nor weaker.', ['reformulation']),
  sent(2453, 'Nommer un seul procédé dans un texte et s’arrêter là est exactement le piège que l’analyse littéraire intégrale t’a appris à éviter.', 'Naming a single device in a text and stopping there is exactly the trap the integral literary analysis taught you to avoid.', ['recap']),
  sent(2454, 'La précision du mot et l’intégralité de la lecture sont deux moitiés d’un seul geste : lire tout, puis répondre juste.', 'Word precision and reading the whole text are two halves of one gesture: read everything, then answer precisely.', ['bilan']),
  sent(2455, 'Dans ton bilan, une lecture qui ne tient qu’un seul fil, ou une réponse qui ne règle qu’un seul mot, ne suffit jamais.', 'In your capstone, a reading that holds only one thread, or an answer that gets only one word right, is never enough.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 5 ROWS — Médier, traduire, improviser à l’oral (2456-2471)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT5_ROWS: Row[] = [
  sent(2456, 'Reformuler un rapport technique, traduire un poème, répondre à un appel en direct : trois portes, un même sens à faire passer.', 'Reformulating a technical report, translating a poem, answering a live call: three doors, the same meaning to carry through.', ['scenario']),
  phrase(2457, 'la porte de la médiation', 'mediation’s door', ['vocabulaire']),
  phrase(2458, 'la traversée du poème', 'the poem’s crossing', ['vocabulaire']),
  sent(2459, 'Médier change la porte sans jamais toucher le sens ; traduire un poème accepte de perdre un peu du sens pour garder le ton.', 'Mediating changes the door without ever touching the meaning; translating a poem accepts losing a little meaning to keep the tone.', ['regle']),
  sent(2460, 'Un programme de verdissement urbain décrit en langage technique peut se redire, pour un public non spécialiste, sans perdre un seul fait.', 'An urban greening programme described in technical language can be restated, for a non-specialist audience, without losing a single fact.', ['usage']),
  sent(2461, 'Un sanglot d’automne, en vers français, ne porte jamais exactement le même sanglot en anglais ; le traducteur choisit ce qu’il garde.', 'An autumn sob, in French verse, never carries exactly the same sob in English; the translator chooses what to keep.', ['usage']),
  sent(2462, 'Une question en direct, sans préparation, demande une réponse qui tient, même improvisée.', 'A live, unprepared question demands a reply that holds together, even improvised.', ['usage']),
  sent(2463, 'Candidate : je reformule le fait technique pour mon lecteur, je choisis ce que je garde du poème, et je structure ma réponse même sans préparation.', 'Candidate: I reformulate the technical fact for my reader, I choose what I keep from the poem, and I structure my reply even without preparation.', ['scenario']),
  sent(2464, 'Je simplifie le vocabulaire du rapport technique, mais je garde sa phrase complexe intacte.', 'I simplify the technical report’s vocabulary, but I keep its complex sentence intact.', ['piege-fausse-simplification'], SR),
  sent(2465, 'Je simplifie à la fois le vocabulaire et la structure de la phrase, sans perdre le fait qu’elle porte.', 'I simplify both the vocabulary and the sentence structure, without losing the fact it carries.', ['reformulation']),
  sent(2466, 'La fausse simplification de la médiation et la traduction mot à mot de la poésie sont le même piège, dans deux sens opposés : garder la forme en perdant le sens, ou garder le sens en perdant tout le reste.', 'Mediation’s false simplification and poetry’s word-for-word translation are the same trap, in two opposite directions: keeping the form while losing the meaning, or keeping the meaning while losing everything else.', ['bilan']),
  sent(2467, 'Une réponse en direct qui s’arrête net, sans conclure, n’a pas la même valeur qu’une réponse qui arrive quelque part.', 'A live reply that stops dead, without concluding, is not worth the same as a reply that arrives somewhere.', ['usage']),
  sent(2468, 'Médier, traduire et improviser partagent une seule exigence : ne jamais perdre ce que le texte ou l’échange porte, même en changeant tout le reste.', 'Mediating, translating and improvising share one demand: never lose what the text or exchange carries, even while changing everything else.', ['bilan']),
  sent(2469, 'Je réponds à la question sans jamais revenir à mon idée de départ, même improvisée.', 'I answer the question without ever returning to my starting idea, even improvised.', ['piege-fausse-simplification'], SR),
  sent(2470, 'Je réponds à la question et je reviens, en une phrase, à l’idée dont j’étais parti.', 'I answer the question and I return, in one sentence, to the idea I started from.', ['reformulation']),
  sent(2471, 'Dans ton bilan, une porte changée, un bagage choisi, une réponse tenue : les trois comptent, jamais une seule.', 'In your capstone, a door changed, luggage chosen, a reply held together: all three count, never just one.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 6 ROWS — Tenir un discours, trancher par écrit (2472-2483)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT6_ROWS: Row[] = [
  sent(2472, 'Un randonneur qui veut déjà rentrer, trois sources qui se contredisent sans s’opposer : deux fils à tenir jusqu’au bout.', 'A hiker already wanting to turn back, three sources that disagree without opposing each other: two threads to hold to the end.', ['scenario']),
  phrase(2473, 'la balise du discours', 'the discourse’s marker', ['vocabulaire']),
  phrase(2474, 'peser puis trancher', 'weigh, then decide', ['vocabulaire']),
  sent(2475, 'Tenir un discours long, c’est annoncer un plan et y revenir, par son nom, après chaque écart ; trancher par écrit, c’est peser plusieurs sources dans la même phrase qui décide.', 'Sustaining a long discourse means announcing a plan and returning to it, by name, after every detour; deciding in writing means weighing several sources in the very sentence that decides.', ['regle']),
  sent(2476, 'Un sociologue affirme qu’un bureau vide déplace son coût ailleurs, sans que ce coût apparaisse dans aucun tableau de productivité.', 'A sociologist claims an empty office moves its cost elsewhere, a cost that shows up in no productivity table.', ['usage']),
  sent(2477, 'Trois documents qui ne s’opposent pas sur le principe, mais sur ce qui compte, demandent un plan que le simple pour-contre ne peut pas tenir.', 'Three documents that disagree not on the principle but on what counts call for a plan that a simple for-against split cannot hold.', ['usage']),
  sent(2478, 'Candidate : j’annonce mon plan, je pèse chaque source dans la phrase même qui tranche, et je reviens à mon plan après chaque écart.', 'Candidate: I announce my plan, I weigh each source in the very sentence that decides, and I return to my plan after every detour.', ['scenario']),
  sent(2479, 'Je réponds à la question du randonneur, puis je redémarre mon explication depuis le début.', 'I answer the hiker’s question, then I restart my explanation from the beginning.', ['piege-redemarrage'], SR),
  sent(2480, 'Je réponds à la question du randonneur en une phrase, puis je reprends mon explication exactement où elle en était.', 'I answer the hiker’s question in one sentence, then I pick my explanation back up exactly where it stood.', ['reformulation']),
  sent(2481, 'Je résume d’abord les trois sources côte à côte, puis je donne mon avis dans une phrase séparée, à la fin.', 'I first summarise the three sources side by side, then I give my opinion in a separate sentence, at the end.', ['piege-deux-moities'], SR),
  sent(2482, 'Je pèse et je tranche dans la même phrase, source après source, jusqu’à la dernière.', 'I weigh and I decide in the same sentence, source after source, down to the last.', ['reformulation']),
  sent(2483, 'Un discours qui tient son plan et une synthèse qui tranche en citant sont deux formes d’une seule endurance : ne jamais lâcher le fil, du premier mot au dernier.', 'A discourse that holds its plan and a synthesis that decides while citing are two forms of one endurance: never drop the thread, from the first word to the last.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 7 ROWS — Le piège du bilan (2484-2493)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT7_ROWS: Row[] = [
  sent(2484, 'Noor a rendu un dossier impeccable : lecture fine, synthèse tranchée, registre tenu du début à la fin. Aucun procédé n’y est jamais nommé.', 'Noor submitted a flawless portfolio: fine reading, a decided synthesis, a register held from start to finish. No device is ever named in it.', ['piege-bilan'], SR),
  sent(2485, 'Trois compétences réussies sur quatre ne garantissent jamais la quatrième.', 'Three skills out of four succeeding never guarantees the fourth.', ['regle']),
  phrase(2486, 'une compétence qui en cache une autre', 'a skill that hides another', ['metalangage']),
  sent(2487, 'La leçon 13 du C2 t’a appris qu’une correction peut en cacher une autre, dans le même texte ; ici, c’est une compétence entière qui peut en cacher une autre, dans la même réponse.', 'Lesson 13 of C2 taught you that one correction can hide another, in the same text; here, a whole skill can hide another, in the same answer.', ['recap']),
  sent(2488, 'La seule façon de savoir qu’un bilan est complet est de le relire contre les quatre unités, une par une, même ce qui semble déjà réussi.', 'The only way to know a capstone is complete is to reread it against all four units, one by one, even what already seems to have succeeded.', ['usage']),
  sent(2489, 'Un dossier qui réussit la lecture, la synthèse et le registre, mais ne nomme jamais un procédé, n’est réussi qu’à trois quarts.', 'A portfolio that succeeds at reading, synthesis and register, but never names a device, is only three-quarters successful.', ['usage']),
  sent(2490, 'Puisque ma lecture et ma synthèse sont solides, mon dossier est complet.', 'Since my reading and my synthesis are solid, my portfolio is complete.', ['piege-bilan'], SR),
  sent(2491, 'Ma lecture et ma synthèse sont solides, mais je vérifie encore si j’ai nommé un procédé et tenu mon registre.', 'My reading and my synthesis are solid, but I still check whether I named a device and held my register.', ['reformulation']),
  sent(2492, 'Avant de rendre ton dossier, repasse les quatre unités une à une, même sur ce que tu crois déjà tenu.', 'Before submitting your portfolio, go back through the four units one by one, even on what you believe already holds.', ['usage']),
  sent(2493, 'Un bilan de maîtrise se juge comme un texte de la leçon 13 du C2 : une seule relecture, par compétence, ne suffit jamais.', 'A mastery capstone is judged the way lesson 13 of C2 judges a text: a single reread, per skill, is never enough.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 8 ROWS — Ton bilan de maîtrise (2494-2513)
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE TASK'S DENSE SOURCE. Reused verbatim from c2.12's own EXTRACT_PARAGRAPH
 *  (C212_EXTRACT_PARAGRAPH, imported above), never retyped: a real dense
 *  academic paragraph the learner already read once, in a different lesson,
 *  that carries a stacked hedge, a named citation (Delmas, 2020) and a
 *  nominal chain all at once — exactly the C2.12 density this task's first
 *  criterion grades, and a genuine argument (c2.10's skill) to take a
 *  position on. */
export const TASK_SOURCE_NOTE =
  'Ce passage est celui que la leçon 12 du C2 t’a déjà fait lire : un texte original, écrit pour cette leçon dans le registre des essais académiques généraux, jamais une citation d’un article réel.';
export const TASK_SOURCE_NOTE_EN =
  'This passage is the one lesson 12 of C2 already had you read: an original text, written for that lesson in the register of general academic essays, never a quotation from a real article.';

const ACT8_ROWS: Row[] = [
  sent(2494, 'Odile remet à chaque candidate le même passage dense, et demande une seule réponse qui tienne les quatre unités à la fois.', 'Odile hands every candidate the same dense passage, and asks for a single response that holds all four units at once.', ['scenario']),
  sent(2495, 'Je repère d’abord l’armature de la phrase, avant de juger si la réserve qu’elle empile change ce qu’elle affirme vraiment.', 'I first spot the sentence’s backbone, before judging whether the hedge it stacks changes what it really asserts.', ['plan']),
  sent(2496, 'Je nomme ensuite la relation que ce passage affirme, puis la position que je défends face à elle, dans la même phrase qui tranche.', 'I then name the relation this passage asserts, then the position I defend against it, in the very sentence that decides.', ['plan']),
  sent(2497, 'Je nomme un procédé précis, jamais un mot vague comme « une figure » ou « un effet ».', 'I name a precise device, never a vague word like "a figure" or "an effect".', ['plan']),
  sent(2498, 'Je tiens un registre soutenu du début à la fin de ma réponse, sans une seule aparté familière.', 'I hold a soutenu register from the start to the end of my response, without a single familiar aside.', ['plan']),
  sent(2499, 'Je relis ma réponse contre les quatre questions de la leçon 13 du C2, même sur les phrases que je crois déjà réussies.', 'I reread my response against lesson 13 of C2’s four questions, even on the sentences I already believe have succeeded.', ['plan']),
  sent(2500, 'Candidate, avant d’écrire : nomme-moi ton plan en quatre phrases, à voix haute.', 'Candidate, before writing: name me your plan in four sentences, out loud.', ['scenario']),
  sent(2501, 'D’abord l’armature de la phrase, puis la relation qu’elle affirme et ma position, puis le procédé que je nomme, puis le registre que je tiens, puis la relecture contre les quatre questions.', 'First the sentence’s backbone, then the relation it asserts and my position, then the device I name, then the register I hold, then the reread against the four questions.', ['plan']),
  sent(2502, 'Un bon plan de bilan ne nomme jamais une seule unité ; il nomme les quatre, dans un ordre qui te convient.', 'A good capstone plan never names a single unit; it names all four, in an order that suits you.', ['regle']),
  sent(2503, 'Je commence à écrire sans avoir nommé mon plan à voix haute une seule fois.', 'I start writing without having named my plan out loud even once.', ['piege-bilan'], SR),
  sent(2504, 'Je nomme mon plan à voix haute, une fois, puis j’écris en le suivant.', 'I name my plan out loud, once, then I write while following it.', ['reformulation']),
  sent(2505, 'Un bilan réussi se lit comme s’il n’avait jamais été treize leçons séparées.', 'A successful capstone reads as if it had never been thirteen separate lessons.', ['bilan']),
  sent(2506, 'Le passage dense garde exactement les mêmes mots qu’à la leçon 12 du C2 ; seule ta réponse est neuve.', 'The dense passage keeps exactly the same words as in lesson 12 of C2; only your response is new.', ['bilan']),
  sent(2507, 'Je cite la réserve empilée du passage sans jamais dire ce que j’en pense.', 'I quote the passage’s stacked hedge without ever saying what I think of it.', ['piege-bilan'], SR),
  sent(2508, 'Je cite la réserve empilée du passage, puis je dis dans la même phrase ce que j’en pense vraiment.', 'I quote the passage’s stacked hedge, then I say in the same sentence what I really think of it.', ['reformulation']),
  sent(2509, 'La dernière relecture d’un bilan de maîtrise porte sur les quatre unités, jamais sur l’orthographe seule.', 'A mastery capstone’s final reread covers the four units, never spelling alone.', ['usage']),
  sent(2510, 'Treize leçons, quatre unités, une seule pièce : c’est ce que ton bilan doit prouver, et rien de plus.', 'Thirteen lessons, four units, one single piece: that is what your capstone must prove, and nothing more.', ['bilan']),
  sent(2511, 'À la fin du Programme de maîtrise, Odile ne demande plus treize preuves séparées ; elle n’en lit plus qu’une.', 'By the end of the Mastery Programme, Odile no longer asks for thirteen separate proofs; she now reads only one.', ['scenario']),
  sent(2512, 'Ton dossier de maîtrise est complet quand chacune des quatre unités s’y entend, sans qu’aucune ne se voie séparément.', 'Your mastery portfolio is complete when each of the four units can be heard in it, without any of the four showing separately.', ['bilan']),
  sent(2513, 'Treize instruments accordés séparément ; le bilan est la pièce où ils jouent enfin ensemble.', REFRAME_EN, ['bilan']),
];

export const ROWS_BY_ACT: Row[][] = [ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS, ACT7_ROWS, ACT8_ROWS];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** The real reused ids from five siblings (§H), by act, so the lesson file's
 *  assembly can roll them into `LESSON.itemIds` the same way every B1+/C1/C2
 *  lesson's own `IMPORTED` map does for a cross-band citation. */
export const IMPORTED: Record<string, string[]> = {
  act1: [],
  act2: [F211.signal, F211.triage],
  act3: [F205.photophobe, F205.insupportable, F205.decompose],
  act4: [F201.modele1, F201.modele2, F201.modele3],
  act5: [F206.bilan],
  act6: [],
  act7: [F213.piege, F213.questions],
  act8: [F213.registre, F213.redondance, F213.reference, F213.transition],
};
export const IMPORT_IDS: string[] = [...new Set(Object.values(IMPORTED).flat())];

/** No row here is unreleasable by kind except the named decoys (`SR` drills
 *  = {sentence, review}, no flashcard, no voiceflash): flawed candidate
 *  attempts a learner must not be quizzed on as if they were correct French
 *  to produce. */
export const NOT_DECK_ABLE: string[] = ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id);
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];

export { foreign };
