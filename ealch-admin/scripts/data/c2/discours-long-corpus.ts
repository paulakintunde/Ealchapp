// c2.09.l1 « Soutenir un discours long » — the authored corpus, the identity
// block and the citation constants. DRAFT, ninth lesson of the C2 band
// (wave 3, discours-dexamen's third C2 unit after c1.09 and c2.08). To
// RICH-LESSON-STANDARD.md and the B1-BUILD-PLAYBOOK.md §6 house rules, with
// the C2 rules of C2-BUILD-PLAN.md ("C2 adds no new grammar") and the c2.09
// brief in C2-RESEARCH-PLAN.md (line 179, "c2.09 — Maintaining discourse:
// long, sustained responses").
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json. No
// Postgres session was opened while authoring this file: the brief states
// the id block is already reserved inside `discours-dexamen` (c1-c2 already
// ranges this theme; c1.09 holds 1200-1399, c2.08 holds 1800-1999, both
// published), so this file only needs to stay inside the block it was
// assigned, 2000-2199, which it does.
//
// STABLE EXPORTS (kept parallel in shape to production-spontanee-corpus.ts,
// the structural model for this file, per the brief):
// REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr, HIKER_QUESTION_FR,
// HIKER_QUESTION_EN.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   SUSTAINING ONE LONG, UNINTERRUPTED SPOKEN RESPONSE, ALONE, FOR SEVERAL
//   MINUTES, without losing its structure. No new grammar.
//
//     act 1   the problem: nobody trades turns with you here, and nobody
//             corrects a single word either; the whole plan has to hold,
//             not a sentence. States the split with both predecessors.
//     act 2   balises (venons-en à, cela m’amène à, pour résumer avant de
//             poursuivre) that keep listeners oriented
//             across minutes of talk, against strings of fillers that
//             announce no transition at all
//     act 3   the macro-architecture: announce the whole plan up front,
//             hold its announced order, signal every passage from one part
//             to the next, and recall the plan at the end of each major
//             part, so the structure is carried on purpose, not by luck
//     act 4   la reprise: returning to the announced plan, by name, after
//             an aside, in one sentence, against restarting the whole
//             turn from zero or over-apologising, which erodes minutes
//             already held, not a single word (c2.08's territory)
//     act 5   choosing the better of two long excerpts, and explaining
//             which one keeps its architecture across its whole length
//             rather than only in one sentence
//     act 6   the trap: a genuine return to the plan against a drift that
//             never actually names where the plan stands, same surface
//             hesitation, two different destinations (stepped trapDrill)
//     act 7   scenario practice: a single logistical pause mid walk,
//             absorbed in one sentence before the plan resumes exactly
//             where it stood, and a real closing loop back onto the
//             architecture named at the very start
//     act 8   the task: a fresh guided walk, three to five minutes, graded
//             against an explicit sustained-length rubric
//
//   NOT OWNED, CITED ONLY:
//     - a prepared, turn-based exposé before a jury, built on relances and
//       objections, is c1.09's (« la leçon 9 du C1 »). Act 1 names it once
//       and removes the turns it assumed: here, nobody relances for you.
//     - answering an unplanned prompt in real time, in a few sentences, with
//       no preparation time, is c2.08's (« la leçon 8 du C2 », same wave,
//       built just before this one). Act 1 names it once and removes the
//       length limit it assumed: here, nobody asks a short question, and
//       the turn itself lasts several minutes, alone.
//     - the four-step micro-template (reformuler, prendre position,
//       justifier, ouvrir) and single-word self-correction (ou plutôt, ce
//       que je veux dire) both stay c2.08's: never re-taught here. This
//       lesson assumes a learner can already build ONE such point; it
//       teaches the architecture that carries SEVERAL of them, held open,
//       across minutes, with nobody else to trade a turn with.
//
//   EVERY RAMBLING LINE, EVERY LOST-ARCHITECTURE EXTRACT AND EVERY DRIFT
//   THAT NEVER RETURNS TO THE PLAN lives in a row tagged {sentence, review}
//   only (never {flashcard, voiceflash}), so the deck never asks a learner
//   to produce it as if it were the goal.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. ID DISCIPLINE
// ══════════════════════════════════════════════════════════════════════════
//
//   THEME `discours-dexamen` (domain `education`, exam_flag true) already
//   ranges c1-c2 in Postgres: no widen needed, per the brief ("already live
//   in Postgres, theme needs no further widen"). This lesson owns block
//   2000-2199 AND NOTHING ELSE: c1.09 holds 1200-1399 (published), c2.08
//   holds 1800-1999 (drafted, this same wave, not yet merged). No read-only
//   probe was run from this session (no DB credentials available here); the
//   brief's own id-home line for c2.09 ("block 2000-2199, no widen") is
//   taken as given, exactly as instructed.
//
//   USED: .2000-.2118, 119 rows total, across eight act blocks (§H below);
//   .2119-.2199 left free inside the claimed block for the pre-review pass,
//   the same margin production-spontanee-corpus.ts left inside its own block.
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. WHAT IS NOT REUSED, AND WHY
// ══════════════════════════════════════════════════════════════════════════
//
//   No row from c1.09 or c2.08 is reused by id. c1.09 is published; its rows
//   resolve through Postgres and the content packs, not through this local
//   draft. c2.08 is itself an unpublished draft from the same wave, so its
//   item ids are not reusable by trail position either (it has no `seq` in
//   `seed.json` yet). Both predecessors are cited the house way instead:
//   c1.09's trail position is read straight out of `seed.json` (v88 publish,
//   same mechanism production-spontanee-corpus.ts already uses); c2.08's
//   trail position is hardcoded as "la leçon 8 du C2" below, exactly as the
//   brief itself already phrases it, because no seed entry exists yet to
//   read it from. Every example in this lesson is newly authored for c2.09,
//   invented low-heat cast and all.
//
// ══════════════════════════════════════════════════════════════════════════
//  §C. SOURCES
// ══════════════════════════════════════════════════════════════════════════
//
//   None fact-heavy, per the brief: this is a production-shape lesson, and
//   sourcing here is realistic monologue/argument prompt design, not
//   citations. No real exam, institution or statistic is named; no
//   `dalf_c2` format exists and none of this is wired toward one (the
//   brief's "future exam link: PO@c2, informational only" note is
//   informational only, nothing built here).
//
// ══════════════════════════════════════════════════════════════════════════
//  §D. FACT CHECK
// ══════════════════════════════════════════════════════════════════════════
//
//   PEOPLE, ALL INVENTED: Fabienne Delorme (the senior guide who sets the
//   task), an unnamed walking group, one unnamed randonneur who asks a
//   single logistical question mid walk (act 7, act 8).
//   ORGANISATIONS AND PLACES, ALL INVENTED: la Réserve naturelle de Brandes,
//   le sentier des Trois-Sources (the task's fresh trail).
//   REAL PLACES, AS PLACES ONLY: le Jura (the mixed-francophone, low-heat
//   setting, same convention as c2.01, c2.02, c2.08's use of Montréal).
//   LOW-HEAT TOPICS ONLY: a peat bog, a beech forest, erosion, a lookout
//   point, walking pace, return times. No living person, no political
//   topic, no health claim, no legal fact.
//   QUOTATIONS: none from a real person or text; every quoted line is
//   invented for this lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  §E. HOUSE RULES APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; the guide's own group hears the usual public-address
//   register (no vous/tu clash: a guide speaks TO a group, so no second
//   person singular is directed back at the learner by a character). No em
//   dash. No U+203F tie. Never "honnête" / "honest" / "honnêtement".
//   Typographic ' throughout. No scene bubble ever carries a « ? » or a
//   « ! », matching production-spontanee-lesson.ts's stricter convention;
//   every objection, pause or challenge quoted in a scene bubble is phrased
//   as a statement. French only on the learner surface; English authored
//   behind every `en` field. Citation by trail position in French words
//   only, never a raw id.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c2.09',
  seq: 9,
  title: 'Sustaining Long-Form Spoken Discourse',
  sub: 'Soutenir un discours long',
  canDo: "Can sustain a single, uninterrupted spoken turn for several minutes, announcing its whole structure up front, signposting every passage from one part to the next, returning to the announced plan by name after any aside rather than restarting it, and closing by looping back onto the structure named at the start rather than trailing off",
  prereqUnitIds: ['c1.09', 'c2.08'],
} as const;

export const LESSON_ID = 'c2.09.l1';
export const THEME = 'discours-dexamen';
export const LEVEL = 'c2' as const;

/** ONE block. c1.09 holds 1200-1399 and c2.08 holds 1800-1999, both already
 *  claimed, neither touched here. */
export const ID_RANGES = [[2000, 2199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  c1.09 is published (v88), so its trail position is read straight from
 *  `seed.json`, exactly as production-spontanee-corpus.ts already does.
 *  c2.08 is an unpublished draft from this same wave: it carries no `seq` in
 *  `seed.json` yet, so refFr() cannot resolve it. Its trail position is
 *  hardcoded instead, using the exact phrase the brief itself already
 *  supplies ("la leçon 8 du C2"), rather than invented independently.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const n = SEQ.get(unitId);
  if (!n) throw new Error(`c2.09: ${unitId} is not in the seed`);
  return `la leçon ${n} du C1`;
}

export const C109_UNIT = 'c1.09';
export const C109_REF = refFr(C109_UNIT);

/** c2.08 is this same wave's draft, not yet in `seed.json`: no `seq` to read.
 *  Hardcoded per the brief's own phrasing, not invented independently. */
export const C208_REF = 'la leçon 8 du C2';

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE SENTIER BALISÉ. A long marked trail is the metaphor for a sustained
 *  spoken turn: it is announced whole before the first step, it carries
 *  markers that each announce the next one, and nothing about it gets
 *  rebuilt partway through just because the walker is tiring. The lesson's
 *  four tools are what keeps the trail whole while it is being walked: a
 *  balise signals a passage, the charpente carries the whole plan, a reprise
 *  returns to it by name after any aside, and a real clôture loops back onto
 *  it at the very end instead of stopping wherever the walk happens to be.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Le sentier ne raccourcit pas parce que tu fatigues : chaque balise tient tout le chemin, de la première minute à la dernière.";
export const REFRAME_EN = 'The trail does not get shorter because you are tiring: each marker holds the whole path, from the first minute to the last.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Parle vite pour finir avant de t’essouffler.',
    why: "False where acts 3 and 5 have to hold: the lesson is about carrying a structure across a fixed, announced length, not about rushing to shorten it. Speed is never the goal; holding the whole plan is.",
  },
  {
    text: 'Improvise à chaque balise, le plan n’est qu’un décor.',
    why: "False where act 3 has to hold: the whole point of announcing a plan up front is that it is actually held, part by part, in the announced order. A balise that signals a part nobody announced is not a balise at all.",
  },
  {
    text: 'Un aparté perd toujours le fil.',
    why: 'False where acts 4 and 6 have to hold: a brief aside, closed by a named reprise that returns exactly to the point the plan had reached, loses nothing. Only a drift that never names where the plan stands actually loses it.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. ROW CONSTRUCTORS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
/** Named for a recap or a wrong-option card: never released, never spoken
 *  as if it were the goal. Every string of fillers, every lost-architecture
 *  extract and every drift that never returns to the plan carries this,
 *  never FCVR. */
const SR = ['sentence', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, tags, drills, version: 1,
  grammarPoints: ['discours-long-soutenu'], ...extra,
});
const phrase = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  ...sent(n, fr, en, tags, drills, extra), kind: 'phrase',
});

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 1 ROWS — Le problème : tenir seul (2000-2011)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT1_ROWS: Row[] = [
  sent(2000, "La Réserve naturelle de Brandes, dans le Jura, propose une grande visite guidée chaque samedi matin.", 'The Brandes nature reserve, in the Jura, offers a long guided walk every Saturday morning.', ['contexte']),
  sent(2001, "Fabienne Delorme forme les nouveaux guides depuis douze ans.", 'Fabienne Delorme has been training new guides for twelve years.', ['contexte']),
  sent(2002, "Face à un jury, tu avais le droit à des relances toutes les deux minutes.", 'Facing a jury, you had the right to a follow-up every two minutes.', ['compare-c109']),
  sent(2003, "En direct à la radio, tu répondais en quelques phrases, à chaque question posée.", 'Live on the radio, you answered in a few sentences, each time a question was asked.', ['compare-c208']),
  sent(2004, "Alors, enfin, on va, je crois, par là, enfin, on verra.", 'So, well, we are going, I think, this way, well, we will see.', ['reponse-ratee'], SR),
  sent(2005, "Nous verrons trois choses aujourd’hui : la tourbière, la hêtraie, puis le belvédère.", 'We will see three things today: the peat bog, the beech forest, then the lookout.', ['reponse-reussie']),
  sent(2006, "Un exposé devant un jury tient grâce aux relances du jury lui-même.", 'An exposé before a jury holds thanks to the jury’s own follow-ups.', ['regle']),
  sent(2007, "Une réponse en direct tient sur quelques phrases, jamais plus d’une minute.", 'A live reply holds for a few sentences, never more than a minute.', ['regle']),
  phrase(2008, "soutenir un discours long", 'sustaining a long piece of spoken discourse', ['metalangage']),
  phrase(2009, "le sentier balisé", 'the marked trail', ['metalangage']),
  phrase(2010, "tenir seul", 'holding the floor alone', ['metalangage']),
  sent(2011, "Ici, personne ne corrige une hésitation au mot près ; c’est le plan entier qui doit tenir, pas une phrase.", 'Here, nobody corrects a single word of hesitation; it is the whole plan that has to hold, not one sentence.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 2 ROWS — Les balises qui tiennent le chemin (2012-2028)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT2_ROWS: Row[] = [
  sent(2012, "Pour commencer, suivons le chemin de la tourbière.", 'To begin, let’s follow the path to the peat bog.', ['balise-bonne']),
  sent(2013, "Venons-en maintenant à la hêtraie, notre deuxième étape.", 'Let’s move on now to the beech forest, our second stage.', ['balise-bonne']),
  sent(2014, "Cela m’amène justement à la question de l’eau.", 'That brings me exactly to the question of water.', ['balise-bonne']),
  sent(2015, "Avant d’aller plus loin, résumons ce que nous venons de voir.", 'Before going any further, let’s sum up what we’ve just seen.', ['balise-bonne']),
  sent(2016, "Je referme ici une parenthèse sur les castors, et je reviens à notre chemin.", 'I will close this aside on the beavers here, and come back to our path.', ['balise-bonne']),
  sent(2017, "Pour résumer ce point avant de poursuivre, la tourbière filtre l’eau de toute la vallée.", 'To sum up this point before continuing, the peat bog filters the whole valley’s water.', ['balise-bonne']),
  sent(2018, "Arrivons-en au dernier volet de notre promenade, le belvédère.", 'Let’s come to the last part of our walk, the lookout.', ['balise-bonne']),
  sent(2019, "Et puis, enfin, voilà, bon, on continue, quoi.", 'And then, well, there, okay, we keep going, like.', ['balise-absente'], SR),
  sent(2020, "Bon après, enfin, je sais pas, on verra plus loin.", 'Well then, I mean, I don’t know, we’ll see further on.', ['balise-absente'], SR),
  sent(2021, "Alors du coup, enfin bref, la suite, quoi.", 'So anyway, well anyway, what’s next, like.', ['balise-absente'], SR),
  sent(2022, "Une bonne balise annonce la suivante ; une transition absente laisse le groupe sans repère.", 'A good marker announces the next one; a missing transition leaves the group with no bearing.', ['regle']),
  sent(2023, "Sans balise, un auditeur perd le plan avant de perdre les mots.", 'Without a marker, a listener loses the plan before losing the words.', ['regle']),
  phrase(2024, "une balise", 'a signposting marker, a transition device', ['metalangage']),
  phrase(2025, "un aparté", 'an aside, a brief digression', ['metalangage']),
  sent(2026, "Une balise se dit posément, jamais glissée entre deux pas rapides.", 'A marker is said steadily, never slipped in between two quick steps.', ['regle']),
  sent(2027, "Nous entrons à présent dans la partie la plus humide du sentier.", 'We are now entering the wettest part of the trail.', ['balise-bonne']),
  sent(2028, "Pour conclure cette première étape, retenons surtout le rôle de l’eau.", 'To close this first stage, let’s mainly remember the role of water.', ['balise-bonne']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 3 ROWS — La charpente annoncée (2029-2045)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT3_ROWS: Row[] = [
  phrase(2029, "la charpente annoncée", 'the announced architecture', ['metalangage']),
  sent(2030, "Premier geste : annoncer, en une phrase, le plan entier avant de commencer.", 'First move: announce, in one sentence, the whole plan before starting.', ['plan-etape']),
  sent(2031, "Nous verrons trois choses aujourd’hui : d’abord la tourbière, ensuite la hêtraie, enfin le belvédère.", 'We will see three things today: first the peat bog, then the beech forest, finally the lookout.', ['plan-exemple']),
  sent(2032, "Deuxième geste : tenir l’ordre annoncé, sans sauter une partie ni en inventer une nouvelle.", 'Second move: hold the announced order, without skipping a part or inventing a new one.', ['plan-etape']),
  sent(2033, "La tourbière d’abord, puisqu’elle explique tout le reste du sentier.", 'The peat bog first, since it explains everything else on the trail.', ['plan-exemple']),
  sent(2034, "Troisième geste : signaler chaque passage d’une partie à l’autre avec une vraie balise.", 'Third move: signal each move from one part to the next with a real marker.', ['plan-etape']),
  sent(2035, "Venons-en à présent à la hêtraie, notre deuxième étape du jour.", 'Let’s move on now to the beech forest, today’s second stage.', ['plan-exemple']),
  sent(2036, "Quatrième geste : rappeler le plan entier à la fin de chaque grande partie.", 'Fourth move: recall the whole plan at the end of each major part.', ['plan-etape']),
  sent(2037, "Nous venons de voir la tourbière ; il nous reste la hêtraie, puis le belvédère.", 'We have just seen the peat bog; we still have the beech forest, then the lookout.', ['plan-exemple']),
  sent(2038, "La charpente tient debout même quand le sujet de chaque partie change complètement.", 'The architecture stays standing even when each part’s subject changes completely.', ['regle']),
  sent(2039, "Sans plan annoncé, une visite longue part souvent dans plusieurs directions à la fois.", 'Without an announced plan, a long walk often heads in several directions at once.', ['regle']),
  sent(2040, "Annoncer le plan n’est pas réciter un résumé : c’est donner au groupe une carte avant de partir.", 'Announcing the plan is not reciting a summary: it is handing the group a map before setting off.', ['regle']),
  sent(2041, "Nous verrons deux choses au belvédère : d’abord l’érosion, ensuite la vue sur la vallée.", 'We will see two things at the lookout: first the erosion, then the view over the valley.', ['plan-exemple']),
  sent(2042, "L’érosion d’abord, puisqu’elle explique pourquoi le sentier a été déplacé deux fois.", 'Erosion first, since it explains why the trail has been moved twice.', ['plan-exemple']),
  sent(2043, "Venons-en à présent à la vue sur la vallée, notre dernier arrêt.", 'Let’s move on now to the view over the valley, our last stop.', ['plan-exemple']),
  sent(2044, "Nous venons de voir l’érosion ; il nous reste la vue d’ensemble, pour finir.", 'We have just seen the erosion; we still have the overall view, to finish.', ['plan-exemple']),
  phrase(2045, "annoncer, tenir, signaler, rappeler", 'announce, hold, signal, recall', ['metalangage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 4 ROWS — La reprise, jamais un redémarrage (2046-2062)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT4_ROWS: Row[] = [
  phrase(2046, "la reprise de fil", 'picking the thread back up', ['metalangage']),
  sent(2047, "Je referme cette parenthèse sur les castors, et je reviens à la tourbière.", 'I’ll close this aside on the beavers, and come back to the peat bog.', ['reprise-bonne']),
  sent(2048, "Pour revenir à notre fil conducteur, nous en étions à la hêtraie.", 'To come back to our thread, we had reached the beech forest.', ['reprise-bonne']),
  sent(2049, "Je reprends ici le plan annoncé : il nous restait le belvédère.", 'I’ll pick up the announced plan here: we still had the lookout left.', ['reprise-bonne']),
  sent(2050, "Je reviens à présent à notre deuxième étape, que j’avais laissée en suspens.", 'I’m coming back now to our second stage, which I had left hanging.', ['reprise-bonne']),
  sent(2051, "Une reprise nomme où l’on en était, puis repart de ce point exact.", 'A reprise names where things stood, then sets off again from that exact point.', ['regle']),
  sent(2052, "Enfin bon, on reprend, enfin, je sais plus trop où j’en étais, en fait.", 'Well okay, let’s pick back up, well, I don’t really know where I was, actually.', ['reprise-ratee'], SR),
  sent(2053, "Bon, on va reprendre depuis le début de la visite, pardon, pardon, désolé.", 'Okay, let’s pick back up from the start of the walk, sorry, sorry, I’m sorry.', ['reprise-ratee'], SR),
  sent(2054, "Reprendre depuis le début de la visite efface quarante minutes déjà tenues.", 'Picking back up from the start of the walk erases forty minutes already held.', ['regle']),
  sent(2055, "S’excuser plusieurs fois pour un aparté attire plus l’attention que l’aparté lui-même.", 'Apologising several times for an aside draws more attention than the aside itself.', ['regle']),
  sent(2056, "Une reprise garde la direction du plan ; un redémarrage complet la jette.", 'A reprise keeps the plan’s direction; a full restart throws it away.', ['regle']),
  sent(2057, "Je referme cette parenthèse sur l’érosion, et je reviens à notre deuxième étape.", 'I’ll close this aside on erosion, and come back to our second stage.', ['reprise-bonne']),
  sent(2058, "Pour revenir à notre plan, il nous restait la vue sur la vallée.", 'To come back to our plan, we still had the view over the valley left.', ['reprise-bonne']),
  sent(2059, "Je reprends le fil : nous avions commencé par la tourbière.", 'I’ll pick up the thread: we had started with the peat bog.', ['reprise-bonne']),
  phrase(2060, "un redémarrage complet", 'a full restart', ['metalangage']),
  phrase(2061, "un aparté refermé", 'a closed-off aside', ['metalangage']),
  sent(2062, "La reprise vise le plan entier, jamais un seul mot isolé, ce qui la distingue d’une simple correction.", 'The reprise targets the whole plan, never a single isolated word, which is what sets it apart from a simple correction.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 5 ROWS — Tenir la distance (2063-2076)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT5_ROWS: Row[] = [
  sent(2063, "Situation : la visite entre dans sa vingt-cinquième minute, au milieu de la hêtraie.", 'Situation: the walk is entering its twenty-fifth minute, in the middle of the beech forest.', ['situation']),
  sent(2064, "Extrait A : Alors donc la hêtraie, enfin, c’est joli, hein, et puis bon, il y a aussi des champignons, enfin, plein de choses, quoi, on continue.", 'Extract A: So then the beech forest, well, it’s pretty, right, and then well, there are also mushrooms, well, lots of things, like, let’s continue.', ['extraitA-ratee'], SR),
  sent(2065, "Extrait B : Nous voici dans notre deuxième étape, la hêtraie. Comme annoncé, elle prend le relais de la tourbière : les mêmes eaux qui filtrent là-bas nourrissent ces hêtres ici. Dans cinq minutes, nous rejoindrons le belvédère, notre dernier arrêt.", 'Extract B: Here we are in our second stage, the beech forest. As announced, it takes over from the peat bog: the same waters that filter there feed these beeches here. In five minutes, we will reach the lookout, our last stop.', ['extraitB-reussie']),
  sent(2066, "L’extrait A perd le plan annoncé dès la première phrase ; il ne nomme plus où l’on en est.", 'Extract A loses the announced plan from its very first sentence; it no longer names where things stand.', ['regle']),
  sent(2067, "L’extrait B rappelle l’étape, relie au point précédent, et annonce la suite exacte.", 'Extract B recalls the stage, links to the previous point, and announces exactly what comes next.', ['regle']),
  sent(2068, "Situation : un aparté sur un animal croisé en chemin a duré deux minutes de trop.", 'Situation: an aside on an animal spotted along the way has lasted two minutes too long.', ['situation']),
  sent(2069, "Extrait A : Enfin bref, le chevreuil, c’était joli, et donc, enfin, voilà, je sais plus trop, on reprend un truc.", 'Extract A: Anyway, the deer, that was nice, and so, well, there, I don’t really know, let’s pick something back up.', ['extraitA-ratee'], SR),
  sent(2070, "Extrait B : Ce chevreuil referme notre parenthèse animale. Je reviens à présent à notre plan : il nous restait la hêtraie, puis le belvédère.", 'Extract B: This deer closes our animal aside. I’m coming back now to our plan: we still had the beech forest, then the lookout.', ['extraitB-reussie']),
  sent(2071, "L’extrait B utilise une vraie reprise : il referme l’aparté, nomme le plan, et repart du bon point.", 'Extract B uses a genuine reprise: it closes the aside, names the plan, and sets off again from the right point.', ['regle']),
  sent(2072, "Une seule parenthèse mal refermée peut faire perdre quarante minutes de plan déjà tenu.", 'A single badly closed aside can lose forty minutes of plan already held.', ['regle']),
  phrase(2073, "tenir la distance", 'to hold up over the whole length', ['metalangage']),
  phrase(2074, "une architecture qui s’effondre", 'an architecture that collapses', ['metalangage']),
  sent(2075, "Un extrait peut être grammaticalement parfait et pourtant perdre son architecture en chemin.", 'An extract can be grammatically perfect and still lose its architecture along the way.', ['regle']),
  sent(2076, "Rester dans le plan, refermer chaque aparté, et avancer : les trois tiennent un discours long debout.", 'Staying in the plan, closing every aside, and moving forward: the three keep a long discourse standing.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 6 ROWS — La vraie reprise, pas la dérive (2077-2089)
 *
 *  Five pairs, same surface hesitation, two different outcomes. `derive`
 *  rows are NAMED, never released: the trapDrill's `promptSound` quotes
 *  them, the learner is never asked to produce one. `retour` rows ARE the
 *  targets.
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT6_ROWS: Row[] = [
  sent(2077, "Bon, je referme la parenthèse, enfin, je sais plus trop, on verra plus loin.", 'Okay, I’ll close the aside, well, I don’t really know, we’ll see further on.', ['derive'], SR),
  sent(2078, "Je referme la parenthèse sur les castors, et je reviens à la tourbière, notre point de départ.", 'I’ll close the aside on the beavers, and come back to the peat bog, our starting point.', ['retour']),
  sent(2079, "Pour revenir à notre sujet, enfin, c’était quoi déjà, ah oui, enfin, bref.", 'To come back to our topic, well, what was it again, ah yes, well, anyway.', ['derive'], SR),
  sent(2080, "Pour revenir à notre sujet, nous en étions au rôle de l’eau dans la tourbière.", 'To come back to our topic, we had reached the role of water in the peat bog.', ['retour']),
  sent(2081, "Je reprends le fil, enfin, un peu, je crois, on va dire que c’est bon.", 'I’ll pick up the thread, well, a bit, I think, let’s say that’s fine.', ['derive'], SR),
  sent(2082, "Je reprends le fil exactement où nous l’avions laissé : la deuxième étape, la hêtraie.", 'I’ll pick up the thread exactly where we had left it: the second stage, the beech forest.', ['retour']),
  sent(2083, "Bon après, enfin, plusieurs choses à dire encore, je sais plus par où commencer.", 'Okay then, well, several things left to say, I don’t really know where to start.', ['derive'], SR),
  sent(2084, "Il nous reste exactement deux choses à voir : la hêtraie, puis le belvédère.", 'We have exactly two things left to see: the beech forest, then the lookout.', ['retour']),
  sent(2085, "Donc voilà, enfin, c’est un peu compliqué de savoir où on en était, je crois.", 'So there, well, it’s a bit complicated to know where we were, I think.', ['derive'], SR),
  sent(2086, "Notre plan tient en une phrase : la tourbière vue, la hêtraie à voir, le belvédère pour finir.", 'Our plan fits in one sentence: the peat bog seen, the beech forest still to see, the lookout to finish.', ['retour']),
  phrase(2087, "une reprise réelle", 'a genuine return to the plan', ['metalangage']),
  phrase(2088, "une dérive", 'a drift, an architecture that has actually been lost', ['metalangage']),
  sent(2089, "Une reprise réelle nomme le point exact du plan et y revient ; une dérive tourne en rond sans jamais le nommer.", 'A genuine reprise names the plan’s exact point and returns to it; a drift circles without ever naming it.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 7 ROWS — Sous la durée, en scénario (2090-2106)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT7_ROWS: Row[] = [
  phrase(2090, "improviser sous la durée", 'improvising under duration', ['metalangage']),
  sent(2091, "Un randonneur du groupe demande, au milieu de la hêtraie, combien de temps il reste avant le retour.", 'A hiker in the group asks, in the middle of the beech forest, how much time is left before heading back.', ['pause-logistique']),
  sent(2092, "On ne reconstruit pas tout le plan pour répondre à une question de logistique.", 'You don’t rebuild the whole plan to answer a logistical question.', ['regle']),
  sent(2093, "On répond en une phrase, puis on revient exactement où l’on en était.", 'You answer in one sentence, then come back exactly to where things stood.', ['regle']),
  sent(2094, "Encore vingt minutes environ, et je reviens à notre hêtraie.", 'About twenty more minutes, and I’ll come back to our beech forest.', ['balise-bonne']),
  sent(2095, "Pour revenir à notre deuxième étape, les hêtres les plus âgés ont plus de deux cents ans.", 'To come back to our second stage, the oldest beeches are more than two hundred years old.', ['plan-partie']),
  sent(2096, "Répondre à côté du plan pendant plusieurs minutes perd le groupe, pas seulement le fil d’une phrase.", 'Drifting off the plan for several minutes loses the group, not just one sentence’s thread.', ['regle']),
  sent(2097, "Ignorer complètement la question du randonneur donne l’impression de ne pas l’avoir entendue.", 'Completely ignoring the hiker’s question gives the impression of not having heard it.', ['regle']),
  sent(2098, "Fabienne observe la fin de la visite, un peu en retrait du groupe.", 'Fabienne watches the end of the walk, a little apart from the group.', ['contexte']),
  sent(2099, "Il reste le belvédère, le dernier arrêt annoncé au départ.", 'There is still the lookout left, the last stop announced at the start.', ['contexte']),
  sent(2100, "Nous avons vu trois choses aujourd’hui : la tourbière qui filtre l’eau, la hêtraie qui s’en nourrit, et ce belvédère qui les relie.", 'We have seen three things today: the peat bog that filters water, the beech forest that feeds on it, and this lookout that connects them.', ['cloture']),
  sent(2101, "Une vraie clôture reboucle sur le plan annoncé au départ, point par point.", 'A real closing loops back onto the plan announced at the start, point by point.', ['regle']),
  sent(2102, "Merci d’avoir suivi cette visite jusqu’au bout, et à bientôt sur le sentier.", 'Thank you for following this walk to the end, and see you soon on the trail.', ['cloture']),
  sent(2103, "S’arrêter net au dernier point, sans reboucler sur le plan, laisse croire que la visite s’est arrêtée au hasard.", 'Stopping dead at the last point, without looping back onto the plan, suggests the walk just stopped at random.', ['regle']),
  sent(2104, "Une visite qui reboucle sur son plan se termine toujours au bon endroit, même si elle a pris des détours.", 'A walk that loops back onto its plan always ends in the right place, even if it took detours.', ['regle']),
  phrase(2105, "une clôture bouclée", 'a closing that loops back', ['metalangage']),
  phrase(2106, "un arrêt au hasard", 'a stop that lands nowhere in particular', ['metalangage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 8 ROWS — Ton discours, du début à la fin (2107-2118)
 * ══════════════════════════════════════════════════════════════════════════ */

export const HIKER_QUESTION_FR = "Combien de temps il reste avant qu’on soit de retour au parking, parce que j’ai un rendez-vous cet après-midi.";
export const HIKER_QUESTION_EN = 'How much longer until we’re back at the parking lot, because I have an appointment this afternoon.';

const ACT8_ROWS: Row[] = [
  sent(2107, "Avant de parler, passe ta charpente en revue : annoncer, tenir, signaler, rappeler.", 'Before speaking, run through your architecture: announce, hold, signal, recall.', ['bilan']),
  sent(2108, "Une balise dite posément vaut mieux qu’un enchaînement de tics sans direction.", 'A marker said steadily beats a string of fillers with no direction.', ['bilan']),
  sent(2109, "Une reprise qui nomme le plan vaut mieux qu’un redémarrage complet.", 'A reprise that names the plan beats a full restart.', ['bilan']),
  sent(2110, "Une clôture qui reboucle sur le plan vaut mieux qu’un arrêt qui s’interrompt au hasard.", 'A closing that loops back onto the plan beats a stop that breaks off at random.', ['bilan']),
  sent(2111, "Le sentier des Trois-Sources ouvre au public pour la première fois ce week-end.", 'The Trois-Sources trail opens to the public for the first time this weekend.', ['tache-contexte']),
  sent(2112, HIKER_QUESTION_FR, HIKER_QUESTION_EN, ['tache-pause']),
  sent(2113, "Encore environ vingt minutes, et je reviens tout de suite à notre deuxième étape.", 'About twenty more minutes, and I’ll come straight back to our second stage.', ['tache-reponse']),
  sent(2114, "Nous verrons trois choses aujourd’hui : la source principale, la passerelle, puis le point de vue final.", 'We will see three things today: the main spring, the footbridge, then the final viewpoint.', ['tache-reponse']),
  sent(2115, "Nous avons vu la source, la passerelle, et ce point de vue qui les relie : voilà notre sentier, du début à la fin.", 'We have seen the spring, the footbridge, and this viewpoint that connects them: that is our trail, from beginning to end.', ['tache-reponse']),
  sent(2116, "Une réponse à une question de logistique tient en une phrase, puis le plan reprend exactement où il en était.", 'A reply to a logistical question fits in one sentence, then the plan resumes exactly where it stood.', ['regle']),
  sent(2117, "Une longue visite ne pardonne pas un plan qui s’arrête en chemin, mais elle pardonne largement un aparté bien refermé.", 'A long walk does not forgive a plan that stops partway, but it readily forgives a well-closed aside.', ['bilan']),
  sent(2118, "À la fin, ce qu’on retient n’est jamais la minute perdue, c’est la façon de revenir au plan.", 'In the end, what people remember is never the lost minute, it is the way you return to the plan.', ['bilan']),
];

export const ROWS_BY_ACT: Row[][] = [ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS, ACT7_ROWS, ACT8_ROWS];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** No row is reused from another lesson in this draft (§B above): every act
 *  imports nothing. Kept as an export so the lesson file’s assembly code is
 *  identical in shape to every other B1+/C1/C2 lesson. */
export const IMPORTED: Record<string, string[]> = {
  act1: [], act2: [], act3: [], act4: [], act5: [], act6: [], act7: [], act8: [],
};
export const IMPORT_IDS: string[] = [...new Set(Object.values(IMPORTED).flat())];

/** No row here is unreleasable by kind; some are NAMED but never released
 *  (the `SR` drills = {sentence, review}, no flashcard, no voiceflash): the
 *  filler strings, lost-architecture extracts and drifts a learner must not
 *  be quizzed on as if they were correct production. */
export const NOT_DECK_ABLE: string[] = ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id);
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];
