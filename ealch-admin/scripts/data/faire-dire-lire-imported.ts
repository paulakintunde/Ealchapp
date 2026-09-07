// What a2.12 imports rather than authors, and what it reads without importing.
//
// The rows themselves are in faire-dire-lire-rows.gen.ts, a recorded read of
// Postgres taken by scripts/_a212_manifest.ts. This file is the meaning laid
// over them.
//
// ══════════════════════════════════════════════════════════════════════════
//  TWENTY-SIX ROWS OUT OF FIFTEEN THEMES, WHICH IS THE SHAPE OF THE LESSON
// ══════════════════════════════════════════════════════════════════════════
//
// a2.02 imported ten rows out of three themes. a2.01 imported thirty out of
// eight. This lesson imports twenty-six out of FIFTEEN:
//
//   amis · animaux-domestiques · bien-etre · courses · dictee · ecole ·
//   famille · maison · meteo · routines · rp-achats · sports-et-loisirs ·
//   tourisme · verbes-essentiels · voisinage
//
// That is not sprawl. The Owns is the reach of `faire`, and the reach IS the
// list of themes: the corpus filed `faire le ménage` under routines, `faire du
// ski` under sports, `il fait beau` under meteo and `faire la queue` under
// tourism, each time because of the NOUN. Putting them back together is the
// lesson. A build that authored its own copies would have made thirty new rows
// saying what thirty existing rows already say, and the flashcard hub would have
// served each expression twice.
//
// ── EVERY ID, WITH ITS SOURCE THEME, WHICH THE BRIEF ASKS FOR ─────────────
//
//   faire                  fr.sons.verbes-essentiels.004    verbes-essentiels
//   dire                   fr.sons.verbes-essentiels.005    verbes-essentiels
//   lire                   fr.a1.dictee.091                 dictee
//
//   faire les courses      fr.a2.courses.018                courses
//   faire le ménage        fr.a1.routines.030               routines
//   faire la vaisselle     fr.a1.routines.031               routines
//   faire la lessive       fr.a1.routines.032               routines
//   faire ses devoirs      fr.a1.ecole.106                  ecole
//   faire le lit           fr.a1.maison.122                 maison
//   faire du bruit         fr.b1.voisinage.062              voisinage
//   faire un effort        fr.b2.rp-achats.004              rp-achats
//   faire du sport         fr.b1.bien-etre.035              bien-etre
//   faire du vélo          fr.a1.sports-et-loisirs.109      sports-et-loisirs
//   faire du ski           fr.a1.sports-et-loisirs.074      sports-et-loisirs
//   faire de la natation   fr.a1.sports-et-loisirs.073      sports-et-loisirs
//   faire une promenade    fr.a1.animaux-domestiques.123    animaux-domestiques
//   il fait beau           fr.a1.meteo.027                  meteo
//   il fait chaud          fr.a1.meteo.029                  meteo
//   il fait froid          fr.a1.meteo.028                  meteo
//   il fait frais          fr.a1.meteo.039                  meteo
//   il fait mauvais        fr.a1.meteo.037                  meteo
//   faire la cuisine       fr.a1.famille.136                famille
//   faire la queue         fr.b1.tourisme.039               tourisme
//   faire la fête          fr.a1.amis.026                   amis
//   faire la sieste        fr.a1.routines.043               routines
//   faire attention        fr.a1.dictee.122                 dictee
//
// ── THE ROW CHOSEN FOR EACH, AND WHY ──────────────────────────────────────
//
// In this order: NO `gender`, a respelling if any row has one, a `flashcard`
// drill if any row has one. Level is NOT a criterion. Four of these are b1 or b2
// rows for phrases an A2 learner uses daily, and a2.02 settled the principle:
// a row's level is a fact about where it was authored, not about who may
// reference it.
//
// Three choices were contested and all three are recorded in the corpus's
// NOT_REPAIRED:
//
//   lire            fr.a1.ecole.048 carries gender=m on an infinitive.
//                   fr.a1.verbes-du-quotidien.112 and fr.a1.rp-loisirs.041 have
//                   no respelling. fr.a1.dictee.091 has LEER and no gender.
//   faire la queue  fr.b1.courses.023 respells it with no stressed syllable.
//                   fr.b1.tourisme.039 has one.
//   faire le lit    fr.a1.routines.050 is `faire son lit` with a broken
//                   respelling (FEHR sohn LEE). fr.a1.maison.122 is the
//                   article version and is clean.
//
// ── THREE ROWS HAVE NO RESPELLING AND THIS BUILD DOES NOT GIVE THEM ONE ───
//
//   fr.a1.famille.136    faire la cuisine
//   fr.a1.dictee.122     faire attention
//   fr.b2.rp-achats.004  faire un effort
//
// Every other row a lesson in this band has imported came with a transcription.
// These three do not, and writing one would be AUTHORING on somebody else's row
// rather than importing it, which is the difference doctrine §2 turns on. The
// cards show the French and the English and no bracket. It is a real gap, it is
// named in NO_RESPELL_IDS, and the report says so rather than leaving it to be
// noticed on a device.
//
// ── THREE ROWS GAIN A `flashcard` DRILL AND NOTHING ELSE ──────────────────
//
// Every released row needs a `flashcard` drill to be served as a hub card, and
// three of the twenty-six carry {voiceflash, review} only:
//
//   fr.a1.dictee.091     lire
//   fr.a1.famille.136    faire la cuisine
//   fr.a1.dictee.122     faire attention
//
// The addition is a UNION, not a replacement, and `drills` is a Postgres ENUM
// array so the only route is the double cast. Ledger §5. Nothing else about
// those rows moves.
//
// ── TWO ROWS ARE REPAIRED, AND ONE OF THE REPAIRS IS NOT A SUPERSCRIPT ────
//
//   fr.a1.sports-et-loisirs.073  na-ta-SYOHN  ->  na-ta-SYOHⁿ
//   fr.a1.animaux-domestiques.123  prohm-NAHD  ->  prom-NAHD
//
// The first is an ordinary nasal repair. The second is invariants §3's `jaune`
// case: `promenade` is /pʁɔm.nad/ with a real m and no nasal vowel, so a
// superscript would teach a sound that is not in the word. See the corpus.
//
// ── THE SEED IS A CUT AND THIS IS WHY THE MERGE CARRIES ROWS ──────────────
//
// Measured 2026-08-12: `meteo` holds 336 published rows in Postgres against 26
// in the seed, `verbes-essentiels` 535 against 48. Eleven of the fifteen themes
// this lesson borrows from are outside SEED_CUT.themes entirely. a2.11 found
// that NEITHER of the two rows its lesson leaned on hardest was in the seed, and
// a lesson whose itemIds resolve to nothing renders empty cards on a device. So
// the merge CARRIES all twenty-six.
//
// ── Five levels appear here and that is correct ───────────────────────────
//
// sons, a1, a2, b1 and b2. A row's level is a fact about where it was authored.
// Doctrine §C's "everything you author is A2" binds the twenty-five rows in
// faire-dire-lire-corpus.ts, and all twenty-five are `level: 'a2'`.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import type { Reach } from './faire-dire-lire-corpus.ts';
import {
  EXPRESSION_ROW_IDS,
  IMPORTED_EXPRESSION_ROWS,
  IMPORTED_VERB_ROWS,
  READ_ONLY_ROWS,
  READ_ONLY_ROW_IDS,
  VERB_ROW_IDS,
} from './faire-dire-lire-rows.gen.ts';

export { IMPORTED_EXPRESSION_ROWS, IMPORTED_VERB_ROWS, READ_ONLY_ROWS };

/** One imported naming form: the pairing, plus the row it points at. */
export type ImportedVerb = { verb: string; id: string; row: Item };
/** One imported expression: which English verb it replaces, plus the row. */
export type ImportedExpression = { reach: Reach; fr: string; id: string; row: Item };

const VERB_BY_ID = new Map(IMPORTED_VERB_ROWS.map((r) => [r.id, r] as const));

/** The three, in the order the learner meets them. */
export const IMPORTED_VERBS: ImportedVerb[] = VERB_ROW_IDS.map(([verb, id]) => {
  const row = VERB_BY_ID.get(id);
  if (!row) throw new Error(`faire-dire-lire: ${id} is paired with "${verb}" and is not in the generated rows`);
  if (row.fr !== verb) throw new Error(`faire-dire-lire: ${id} holds ${JSON.stringify(row.fr)}, paired with ${JSON.stringify(verb)}`);
  return { verb, id, row };
});

const EXPR_BY_ID = new Map(IMPORTED_EXPRESSION_ROWS.map((r) => [r.id, r] as const));

/** The twenty-three, in tapTable group order. */
export const IMPORTED_EXPRESSIONS: ImportedExpression[] = EXPRESSION_ROW_IDS.map(([reach, frText, id]) => {
  const row = EXPR_BY_ID.get(id);
  if (!row) throw new Error(`faire-dire-lire: ${id} is paired with "${frText}" and is not in the generated rows`);
  if (row.fr !== frText) throw new Error(`faire-dire-lire: ${id} holds ${JSON.stringify(row.fr)}, paired with ${JSON.stringify(frText)}`);
  return { reach: reach as Reach, fr: frText, id, row };
});

const READ_ONLY_BY_ID = new Map(READ_ONLY_ROWS.map((r) => [r.id, r] as const));

/** The rows this lesson reads and refuses. Never carried, never in itemIds, and
 *  named on no screen.
 *
 *  `écrire` is the fourth headword the brief tells this author to probe. It is
 *  read, and it reaches nothing: the unit names three verbs, and a fourth
 *  paradigm would give the paradigm act more weight than the Owns, which
 *  doctrine §B.5 calls building the wrong lesson.
 *
 *  `faire son lit` is read because its respelling is genuinely broken and
 *  somebody should know; this build does not display it and so does not repair
 *  it. `faire la queue` at fr.b1.courses.023 is the row NOT taken. */
export const READ_ONLY_VERBS: { label: string; id: string; row: Item }[] = READ_ONLY_ROW_IDS.map(([label, id]) => {
  const row = READ_ONLY_BY_ID.get(id);
  if (!row) throw new Error(`faire-dire-lire: read-only ${id} is paired with "${label}" and is not in the generated rows`);
  if (row.fr !== label) throw new Error(`faire-dire-lire: ${id} holds ${JSON.stringify(row.fr)}, paired with ${JSON.stringify(label)}`);
  return { label, id, row };
});

/** Every row this lesson carries into the seed without owning it.
 *
 *  THE READ-ONLY ROWS ARE NOT HERE, and that is the whole point of the split. */
export const IMPORTED_ROWS: Item[] = [...IMPORTED_VERB_ROWS, ...IMPORTED_EXPRESSION_ROWS];

/** Every imported id, naming forms then expressions. */
export const IMPORTED_IDS: string[] = IMPORTED_ROWS.map((r) => r.id);
/** The expression ids alone, in group order. */
export const IMPORTED_EXPRESSION_IDS: string[] = IMPORTED_EXPRESSIONS.map((e) => e.id);

/** The distinct source themes, derived. The report quotes this rather than a
 *  hand count, and the test asserts it is more than any other lesson in the
 *  batch borrowed from. */
export const SOURCE_THEMES: string[] = [...new Set(IMPORTED_ROWS.map((r) => r.theme))].sort();

/** verb -> its imported row. The lesson builds every verb card through this, so
 *  no screen restates a gloss or a respelling. */
export const VERB_BY_NAME: ReadonlyMap<string, ImportedVerb> = new Map(IMPORTED_VERBS.map((v) => [v.verb, v]));

const lookupVerb = (verb: string): ImportedVerb => {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`faire-dire-lire: "${verb}" is not one of the three imported naming forms`);
  return v;
};

/** The id carrying one naming form. */
export const verbId = (verb: string): string => lookupVerb(verb).id;
/** The English gloss of one naming form, from the row rather than retyped. */
export const verbEn = (verb: string): string => lookupVerb(verb).row.en;

/** The respelling STORED for one naming form, bracketed, or an empty string
 *  where the row has none. All three of these have one. */
export const verbRespell = (verb: string): string => {
  const r = lookupVerb(verb).row.respell;
  return r ? `[${r}]` : '';
};

/** One naming form as a groupDrill item.
 *
 *  `itemId` is what puts the row on a screen rather than merely in `itemIds`:
 *  a1.08 declared 43 itemIds that resolved perfectly and were drawn by nothing,
 *  and `vocabThemes` cards carry no itemId at all, which is why the three are
 *  presented as a groupDrill and not as a vocabulary hub. */
export function verbCard(verb: string): { fr: string; itemId: string; respell: string; en: string } {
  const v = lookupVerb(verb);
  return { fr: v.verb, itemId: v.id, respell: verbRespell(verb), en: v.row.en };
}

/* ─── The expressions ──────────────────────────────────────────────────────  */

const EXPR_BY_FR = new Map(IMPORTED_EXPRESSIONS.map((e) => [e.fr, e] as const));

const lookupExpr = (frText: string): ImportedExpression => {
  const e = EXPR_BY_FR.get(frText);
  if (!e) throw new Error(`faire-dire-lire: "${frText}" is not one of the imported expressions`);
  return e;
};

/** The id carrying one imported expression. */
export const expressionId = (frText: string): string => lookupExpr(frText).id;

/** THE RESPELLING THIS LESSON DISPLAYS FOR AN IMPORTED EXPRESSION, bracketed,
 *  AFTER any repair.
 *
 *  Two of the twenty-three are repaired and three have none at all, so the
 *  stored value is NOT always the displayed value and there has to be one
 *  function standing between them. A screen that read `row.respell` directly
 *  would print `na-ta-SYOHN` on the card while the database held the repaired
 *  form, which is the drift a2.11 warned about from the other side.
 *
 *  The repair table is the corpus's and is passed in rather than imported here,
 *  so this file has no opinion about which rows are wrong. */
export function repairedRespell(id: string, repairs: { id: string; from: string; to: string }[]): string {
  const row = [...IMPORTED_ROWS, ...READ_ONLY_ROWS].find((r) => r.id === id);
  if (!row) throw new Error(`faire-dire-lire: ${id} is not an imported row`);
  if (!row.respell) return '';
  const fix = repairs.find((r) => r.id === id);
  if (!fix) return row.respell;
  if (row.respell !== fix.from) {
    throw new Error(`faire-dire-lire: ${id} is stored as ${JSON.stringify(row.respell)} and the repair expects ${JSON.stringify(fix.from)}`);
  }
  return fix.to;
}

/** One imported expression's French, read from the recorded row rather than
 *  retyped. */
export const importedFr = (id: string): string => {
  const r = IMPORTED_ROWS.find((x) => x.id === id);
  if (!r) throw new Error(`faire-dire-lire: ${id} is not one of the imported rows`);
  return r.fr;
};

/** And its English gloss. */
export const importedEn = (id: string): string => {
  const r = IMPORTED_ROWS.find((x) => x.id === id);
  if (!r) throw new Error(`faire-dire-lire: ${id} is not one of the imported rows`);
  return r.en;
};
