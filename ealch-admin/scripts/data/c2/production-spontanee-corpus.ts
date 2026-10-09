// c2.08.l1 « La production orale spontanée » — the authored corpus, the
// identity block and the citation constants. DRAFT, fourth and last lesson
// of C2 wave 2. To RICH-LESSON-STANDARD.md and the B1-BUILD-PLAYBOOK.md §6
// house rules, with the C2 rules of C2-BUILD-PLAN.md ("What is different at
// C2") and the c2.08 brief in C2-BUILD-LOG.md ("Wave 2 author briefs").
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
// No Postgres WRITE was made while authoring this file. One read-only probe
// (`ealch-admin/scratch/_c208_probe.mts`, BEGIN TRANSACTION READ ONLY, never
// committed) confirmed 2026-10-09 that `discours-dexamen` 1800-1999 holds 0
// rows at any level, the theme already ranges c1-c2, and its sub_themes
// already carry « la production orale spontanée » (applied at the wave 2
// theme-write pass, C2-BUILD-LOG.md) — this file only needs to stay inside
// the claimed block, which it does.
//
// STABLE EXPORTS (a later C2 lesson, e.g. c2.09 "same wave" per the build
// plan, may import REFRAME from this file and quote it; do not rename):
// REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   SPONTANEOUS ORAL PRODUCTION: answering an unplanned prompt in real time,
//   with no preparation time, while staying on topic, recovering from a
//   false start without losing the thread, and reaching a real conclusion.
//   No new grammar (C2-BUILD-PLAN.md: "C2 adds no new grammar").
//
//     act 1   the problem: the live broadcast does not wait for you to be
//             ready; a frozen, directionless answer against a held one
//     act 2   gambits that buy thinking time on purpose (c'est une bonne
//             question, disons que, comment dire) against empty verbal tics
//             that stall without any content behind them
//     act 3   the mental template for structuring an answer on the fly:
//             reformulate, take a position, justify with one concrete
//             example, qualify or open up
//     act 4   self-correction that keeps the thread (ou plutôt, ce que je
//             veux dire, c'est que, pour être exact) against over-apologising
//             and restarting from zero, which erases what already stood
//     act 5   choosing the better of two spontaneous-sounding replies to the
//             same objection, and explaining why one holds together and the
//             other drops the thread
//     act 6   the trap: a genuine recovery from a stumble against a response
//             that has actually lost coherence, same surface fillers, two
//             different outcomes (stepped trapDrill)
//     act 7   scenario practice: a chain of unplanned turns on a live call-in
//             show, including a listener who tries to change the subject,
//             and closing a response for real instead of trailing off
//     act 8   the task: a fresh unplanned objection, answered on the spot,
//             graded against an explicit spontaneity rubric
//
//   NOT OWNED, CITED ONLY (published, v88, C1 closed):
//     - structured, PREPARED oral production from a dossier, before a jury
//       (the exposé, the floor, objections, reformulation) is c1.09's
//       (« la leçon 9 du C1 »). Act 1 names it once and goes past it: c1.09
//       assumes an hour of preparation; this lesson removes it.
//     - debate turn-taking and structured objection/reformulation as a
//       SKILL IN ITSELF is c1.21's territory (C2-BUILD-LOG.md's own wording
//       for this brief). Never cited, never re-taught: this lesson is about
//       surviving the absence of preparation, not about debate structure.
//     - sustained, long-form monologue is c2.09's, built the same wave, "for
//       the spontaneity half of the skill" per C2-BUILD-PLAN.md — c2.09 cites
//       THIS lesson once it exists; this lesson does not reach forward to it.
//
//   NO UNGRAMMATICAL OR INCOHERENT LINE IS EVER A REAL PRODUCTION TARGET.
//   Every stalling tic, every over-apologetic restart and every example of a
//   response that loses coherence lives in a row tagged and drilled as
//   {sentence, review} only (never {flashcard, voiceflash}), so the deck
//   never asks a learner to produce it as if it were the goal.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. ID DISCIPLINE
// ══════════════════════════════════════════════════════════════════════════
//
//   THEME `discours-dexamen` (domain `education`, exam_flag true) already
//   ranges c1-c2 in Postgres: no widen needed (C2-BUILD-PLAN.md's id-homes
//   table, "no widen needed"). The sub-theme « la production orale
//   spontanée » was appended at the wave 2 theme-write pass, verified by
//   read-back there. This lesson owns block 1800-1999 AND NOTHING ELSE:
//   c1.09 holds 1200-1399 (published), the legacy Speak stock holds
//   .001-.165 (published); re-probed read-only 2026-10-09
//   (`scratch/_c208_probe.mts`): 0 rows at any level inside 1800-1999.
//
//   USED: .1800-.1918, 119 rows total, across eight act blocks (§H below);
//   .1919-.1999 left free inside the claimed block for the pre-review pass.
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. WHAT IS NOT REUSED, AND WHY
// ══════════════════════════════════════════════════════════════════════════
//
//   No row from c1.09 or c1.21 is reused by id. Both are published lessons;
//   their ids resolve through Postgres and the content packs, not through
//   the local `seed.json` cut this draft can read without a database
//   connection. Each predecessor is cited the house way instead: c1.09's
//   trail position is read straight out of `seed.json`, where it already
//   carries a real `seq` (v88 publish); c1.21 is named once in this comment
//   to mark what this lesson deliberately leaves alone, and never appears on
//   any learner-facing string. Every example in this lesson is newly
//   authored for c2.08, invented low-heat cast and all.
//
// ══════════════════════════════════════════════════════════════════════════
//  §C. SOURCES
// ══════════════════════════════════════════════════════════════════════════
//
//   None fact-heavy, per the brief: this is a production-shape lesson, and
//   sourcing here is realistic prompt design, not citations. No real exam,
//   institution or statistic is named; no `dalf_c2` format exists and none
//   of this is wired toward one (C2-BUILD-PLAN.md's "future exam link" note
//   is informational only).
//
// ══════════════════════════════════════════════════════════════════════════
//  §D. FACT CHECK
// ══════════════════════════════════════════════════════════════════════════
//
//   PEOPLE, ALL INVENTED: Odile Franchère (host), Mathieu Lacasse (caller),
//   a second, unnamed caller (act 7).
//   ORGANISATIONS, ALL INVENTED: Radio Verdon (community radio station), the
//   compost collectif du quartier Belmont, the jardin communautaire Garnier
//   (named once, by trail position with the other B1/B2 community-garden
//   world only in spirit, never by id or shared fact: a fresh invention for
//   this lesson, no row or character reused from c2.01 or c1.09).
//   REAL PLACES, AS PLACES ONLY: Montréal (the mixed-francophone setting,
//   same convention as c2.01, c2.02).
//   LOW-HEAT TOPICS ONLY: neighbourhood composting (smell, collection
//   frequency, bin placement, part-time jobs, relative cost), a Saturday
//   producers' market's prices. No living person, no political topic, no
//   health claim, no legal fact, nothing that was REJECTED reading in c1.09
//   (immigration, a specific heated local controversy).
//   QUOTATIONS: none from a real person or text; every quoted line is
//   invented for this lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  §E. HOUSE RULES APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use vous on air (a radio host to a guest,
//   a caller to a guest), as the format calls for. No em dash. No U+203F
//   tie. Never "honnête" / "honest" / "honnêtement". Typographic ’
//   throughout. No scene bubble ever carries a « ? » or a « ! » (the
//   stricter rule c1.09 and c2.02's pre-review both converged on, rather
//   than only avoiding the space before one); every other authored string
//   that does carry one attaches it with no preceding space. French only on
//   the learner surface; English authored behind every `en` field. Citation
//   by trail position in French words only, never a raw id.
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
  id: 'c2.08',
  seq: 8,
  title: 'Spontaneous Oral Production',
  sub: 'La production orale spontanée',
  canDo: "Can answer an unplanned question, objection or change of topic in real time, with no preparation, using a deliberate gambit to buy thinking time, a mental template to structure the answer on the fly, and a self-correction that keeps the thread rather than restarting from zero, and can bring the answer to a real conclusion rather than trailing off",
  prereqUnitIds: ['c1.09'],
} as const;

export const LESSON_ID = 'c2.08.l1';
export const THEME = 'discours-dexamen';
export const LEVEL = 'c2' as const;

/** ONE block. c1.09 holds 1200-1399 and the legacy stock holds .001-.165,
 *  both published, neither touched here. */
export const ID_RANGES = [[1800, 1999]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. HOW THIS LESSON NAMES ITS NEIGHBOUR
 *
 *  All 24 C1 units are in `seed.json` with a real `seq` (v88 publish,
 *  C1-BUILD-LOG.md), so the citation is read straight from the seed, the
 *  same way c2.01 already does it. No hardcoded plan map needed.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const n = SEQ.get(unitId);
  if (!n) throw new Error(`c2.08: ${unitId} is not in the seed`);
  return `la leçon ${n} du C1`;
}

export const C109_UNIT = 'c1.09';
export const C109_REF = refFr(C109_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE DIRECT. A live broadcast is the metaphor for every unplanned prompt:
 *  nobody pauses it so you can think, and it keeps running whether you say
 *  something or nothing at all. The lesson's four tools are what you do
 *  WHILE it keeps running: a gambit buys you a second of real thought, the
 *  template gives the second something to build, a self-correction repairs
 *  without stopping the broadcast, and a real closing word hands it back.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Le direct n’attend pas que tu sois prêt : avance, répare en marchant, et arrive quelque part.";
export const REFRAME_EN = 'Live does not wait for you to be ready: move forward, repair as you go, and arrive somewhere.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Ne t’arrête jamais, quoi qu’il arrive.',
    why: "False where act 4 has to hold: a genuine recovery (ou plutôt, ce que je veux dire, c’est que) DOES mark a brief, named stop. The goal is never pretending nothing happened; it is repairing in one sentence instead of restarting from zero or apologising three times.",
  },
  {
    text: 'Dis la première chose qui vient.',
    why: "False where acts 3 and 5 have to hold: the raw first reflex is exactly what often drifts off topic or trails into several directions at once. The gabarit structures what comes out; it does not replace thinking with pure impulse.",
  },
  {
    text: 'Mieux vaut un silence qu’une erreur.',
    why: 'False where act 2 has to hold: a frozen silence reads as having nothing to say at all, which is worse than a deliberate, named gambit used to think out loud for one more second.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. ROW CONSTRUCTORS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
/** Named for a recap or a wrong-option card: never released, never spoken
 *  as if it were the goal. Every stalling tic, every lost-coherence line and
 *  every over-apologetic restart in this lesson carries this, never FCVR. */
const SR = ['sentence', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, tags, drills, version: 1,
  grammarPoints: ['production-orale-spontanee'], ...extra,
});
const phrase = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  ...sent(n, fr, en, tags, drills, extra), kind: 'phrase',
});

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 1 ROWS — Le direct, sans filet (1800-1811)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT1_ROWS: Row[] = [
  sent(1800, "Le compost collectif du quartier Belmont tourne depuis six mois.", 'The Belmont neighbourhood’s community compost has been running for six months.', ['contexte']),
  sent(1801, "Vous dites que ça marche très bien, ce compost.", 'You say this composting works really well.', ['objection']),
  sent(1802, "Mon voisin, lui, a arrêté net l’année dernière, à cause de l’odeur.", 'My neighbour, though, stopped cold last year, because of the smell.', ['objection']),
  sent(1803, "C’est une bonne question, et elle me permet de préciser un point important.", 'That’s a good question, and it lets me clarify an important point.', ['reponse-reussie']),
  sent(1804, "Euh, non, en fait, je, enfin, c’est compliqué.", 'Um, no, actually, I, well, it’s complicated.', ['reponse-ratee'], SR),
  sent(1805, "Un exposé préparé a déjà choisi ses mots avant de les dire.", 'A prepared exposé has already chosen its words before saying them.', ['regle']),
  sent(1806, "Une réponse spontanée choisit ses mots en les disant.", 'A spontaneous reply chooses its words as it says them.', ['regle']),
  phrase(1807, "la production orale spontanée", 'spontaneous oral production', ['metalangage']),
  phrase(1808, "le direct", 'live, on air', ['metalangage']),
  phrase(1809, "un faux départ", 'a false start', ['metalangage']),
  sent(1810, "Ici, personne ne te donne une heure pour préparer ta réponse.", 'Here, nobody gives you an hour to prepare your reply.', ['regle']),
  sent(1811, "Le jury d’un exposé attend un plan. Un auditeur en direct attend une vraie personne qui pense tout haut.", 'An exposé jury expects a plan. A live listener expects a real person thinking out loud.', ['compare']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 2 ROWS — Les mots qui tiennent le temps (1812-1828)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT2_ROWS: Row[] = [
  sent(1812, "C’est une bonne question.", 'That’s a good question.', ['gambit-bon']),
  sent(1813, "Disons que…", 'Let’s say that…', ['gambit-bon']),
  sent(1814, "Comment dire…", 'How to put it…', ['gambit-bon']),
  sent(1815, "Ce qui est intéressant, c’est que…", 'What’s interesting is that…', ['gambit-bon']),
  sent(1816, "Si je puis dire…", 'If I may put it this way…', ['gambit-bon']),
  sent(1817, "Je dirais même plus.", 'I would even go further.', ['gambit-bon']),
  sent(1818, "Laissez-moi reformuler votre question.", 'Let me rephrase your question.', ['gambit-bon']),
  sent(1819, "Euh, euh, euh…", 'Um, um, um…', ['gambit-vide'], SR),
  sent(1820, "Alors, en fait, du coup, bon, voilà.", 'So, actually, so, well, there you go.', ['gambit-vide'], SR),
  sent(1821, "Bon ben, je sais pas, quoi.", 'Well, I dunno, like.', ['gambit-vide'], SR),
  sent(1822, "Un bon gambit annonce qu’une réponse arrive ; un tic vide ne promet rien.", 'A good gambit announces that an answer is coming; an empty tic promises nothing.', ['regle']),
  sent(1823, "Le silence complet, lui, laisse croire que tu n’as rien à dire.", 'Complete silence, for its part, suggests you have nothing to say.', ['regle']),
  phrase(1824, "un gambit", 'a conversational gambit, a stock phrase that buys thinking time', ['metalangage']),
  phrase(1825, "un tic verbal", 'a verbal tic', ['metalangage']),
  sent(1826, "Un bon gambit se dit lentement, jamais à toute vitesse.", 'A good gambit is said slowly, never at full speed.', ['regle']),
  sent(1827, "Disons que la question mérite d’être posée autrement.", 'Let’s say the question deserves to be put differently.', ['gambit-bon']),
  sent(1828, "Ce qui est intéressant, c’est que mon voisin n’est pas le seul cas.", 'What’s interesting is that my neighbour isn’t the only case.', ['gambit-bon']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 3 ROWS — Le gabarit mental (1829-1845)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT3_ROWS: Row[] = [
  phrase(1829, "le gabarit mental", 'the mental template', ['metalangage']),
  sent(1830, "Premier geste : reformuler la question avec tes propres mots.", 'First move: rephrase the question in your own words.', ['gabarit-etape']),
  sent(1831, "Si je comprends bien, vous me demandez si l’odeur est un vrai problème.", 'If I understand correctly, you’re asking me whether the smell is a real problem.', ['gabarit-reformuler']),
  sent(1832, "Deuxième geste : prendre position, clairement, en une phrase.", 'Second move: take a position, clearly, in one sentence.', ['gabarit-etape']),
  sent(1833, "Je dirais que l’odeur est un vrai problème, mais un problème qu’on peut corriger.", 'I would say the smell is a real problem, but one that can be fixed.', ['gabarit-position']),
  sent(1834, "Troisième geste : justifier avec un exemple concret, pas une idée générale.", 'Third move: justify with a concrete example, not a general idea.', ['gabarit-etape']),
  sent(1835, "Le compost du jardin Garnier a eu le même problème, et un simple réglage l’a réglé.", 'The Garnier garden compost had the same problem, and a simple adjustment fixed it.', ['gabarit-justifier']),
  sent(1836, "Quatrième geste : nuancer ou ouvrir, sans tout remettre en cause.", 'Fourth move: qualify or open up, without calling everything into question.', ['gabarit-etape']),
  sent(1837, "Ce qui ne veut pas dire que chaque compost de quartier marche du premier coup.", 'Which does not mean every neighbourhood compost works on the first try.', ['gabarit-ouvrir']),
  sent(1838, "Le gabarit tient debout même quand le contenu change à chaque fois.", 'The template stays standing even when the content changes every time.', ['regle']),
  sent(1839, "Sans gabarit, une réponse spontanée part souvent dans plusieurs directions à la fois.", 'Without a template, a spontaneous reply often heads in several directions at once.', ['regle']),
  sent(1840, "Reformuler n’est pas répéter mot pour mot ce que la personne a dit.", 'Rephrasing is not repeating word for word what the person said.', ['regle']),
  sent(1841, "Si je comprends bien, vous demandez qui décide des horaires du compost.", 'If I understand correctly, you’re asking who decides the composting hours.', ['gabarit-reformuler']),
  sent(1842, "Je dirais que les horaires actuels conviennent à la majorité, pas à tout le monde.", 'I would say the current hours suit the majority, not everyone.', ['gabarit-position']),
  sent(1843, "Un voisin du quartier Garnier a changé d’avis une fois le compost déplacé.", 'A Garnier neighbourhood resident changed his mind once the compost was moved.', ['gabarit-justifier']),
  sent(1844, "Ce qui laisse justement la question ouverte : où le placer la prochaine fois.", 'Which leaves exactly the question open: where to place it next time.', ['gabarit-ouvrir']),
  phrase(1845, "reformuler, prendre position, justifier, ouvrir", 'rephrase, take a position, justify, open up', ['metalangage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 4 ROWS — Se corriger sans perdre le fil (1846-1862)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT4_ROWS: Row[] = [
  phrase(1846, "se corriger sans perdre le fil", 'correcting yourself without losing the thread', ['metalangage']),
  sent(1847, "Ou plutôt, précisons les choses.", 'Or rather, let’s be precise about this.', ['correction-bon']),
  sent(1848, "Ce que je veux dire, c’est que l’odeur a disparu après le réglage.", 'What I mean is that the smell disappeared after the adjustment.', ['correction-bon']),
  sent(1849, "Enfin, pour être exact, ce n’est pas tout à fait ça.", 'Well, to be exact, that’s not quite it.', ['correction-bon']),
  sent(1850, "Je précise : le problème n’a pas disparu partout, seulement dans ce jardin.", 'Let me be precise: the problem has not disappeared everywhere, only in this garden.', ['correction-bon']),
  sent(1851, "Un faux départ corrigé en une phrase passe presque inaperçu.", 'A false start fixed in one sentence goes almost unnoticed.', ['regle']),
  sent(1852, "Non, attendez, je recommence depuis le début, pardon, pardon.", 'No, wait, let me start over from the beginning, sorry, sorry.', ['correction-ratee'], SR),
  sent(1853, "Enfin bref, tout ça pour dire, en fait, je sais plus où j’en étais.", 'Anyway, all that to say, actually, I don’t know where I was anymore.', ['correction-ratee'], SR),
  sent(1854, "S’excuser trois fois de suite attire plus l’attention que l’erreur elle-même.", 'Apologising three times in a row draws more attention than the mistake itself.', ['regle']),
  sent(1855, "Recommencer depuis le début efface tout ce qui tenait déjà debout.", 'Starting over from the beginning erases everything that was already standing.', ['regle']),
  sent(1856, "Un rétablissement garde la direction de la phrase ; un effacement la jette.", 'A recovery keeps the sentence’s direction; a wipe throws it away.', ['regle']),
  sent(1857, "Ou plutôt, disons que le quartier Garnier n’a pas eu besoin de déplacer son bac.", 'Or rather, let’s say the Garnier neighbourhood didn’t need to move its bin.', ['correction-bon']),
  sent(1858, "Ce que je veux dire, c’est que chaque quartier a trouvé sa propre solution.", 'What I mean is that each neighbourhood found its own solution.', ['correction-bon']),
  sent(1859, "Pour être exact, trois quartiers sur quatre ont ajusté leur compost en moins d’un mois.", 'To be exact, three neighbourhoods out of four adjusted their compost within a month.', ['correction-bon']),
  phrase(1860, "un rétablissement", 'a recovery, from a stumble', ['metalangage']),
  phrase(1861, "un effacement", 'a wipe, restarting from zero', ['metalangage']),
  sent(1862, "La correction vise un mot ou une idée, jamais la phrase entière.", 'The correction targets one word or one idea, never the whole sentence.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 5 ROWS — Choisis la meilleure réponse (1863-1876)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT5_ROWS: Row[] = [
  sent(1863, "Le compost collectif ne crée aucun vrai emploi dans le quartier.", 'The community compost creates no real jobs in the neighbourhood.', ['objection2']),
  sent(1864, "Réponse A : Ben, je sais pas, c’est pas vraiment le but, mais bon, on pourrait regarder, enfin, je verrai.", 'Response A: Well, I dunno, that’s not really the point, but okay, we could look into it, well, I’ll see.', ['reponseA-ratee'], SR),
  sent(1865, "Réponse B : C’est vrai, et ce n’est pas son objectif. Son objectif, c’est de réduire les déchets. Pour l’emploi, le projet Garnier a embauché deux personnes, à temps partiel.", 'Response B: That’s true, and it isn’t its goal. Its goal is reducing waste. For jobs, the Garnier project did hire two people, part time.', ['reponseB-reussie']),
  sent(1866, "La réponse A ne conclut jamais : elle promet de vérifier plus tard, sans rien affirmer maintenant.", 'Response A never concludes: it promises to check later, without stating anything now.', ['regle']),
  sent(1867, "La réponse B reconnaît la limite, nomme l’objectif réel, puis donne un fait précis.", 'Response B acknowledges the limit, names the real goal, then gives a precise fact.', ['regle']),
  sent(1868, "Le compost collectif coûte plus cher à la ville qu’un simple ramassage des ordures.", 'The community compost costs the city more than simple garbage collection.', ['objection3']),
  sent(1869, "Réponse A : Alors là, franchement, je, enfin, les chiffres, je les ai pas sous la main, là, maintenant.", 'Response A: Well then, frankly, I, well, the figures, I don’t have them on hand, right now.', ['reponseA-ratee'], SR),
  sent(1870, "Réponse B : Disons que le coût initial est plus élevé, mais il baisse chaque année, et la ville économise sur le ramassage classique.", 'Response B: Let’s say the initial cost is higher, but it drops every year, and the city saves on standard collection.', ['reponseB-reussie']),
  sent(1871, "La réponse B utilise un gambit, prend position, puis ouvre sur une nuance chiffrée.", 'Response B uses a gambit, takes a position, then opens with a quantified nuance.', ['regle']),
  sent(1872, "Une réponse qui s’arrête sur un aveu d’ignorance, sans rien proposer, laisse le fil tomber.", 'A reply that stops on an admission of ignorance, with nothing proposed, drops the thread.', ['regle']),
  phrase(1873, "tenir ensemble", 'to hold together, said of a reply', ['metalangage']),
  phrase(1874, "un fil qui tombe", 'a dropped thread', ['metalangage']),
  sent(1875, "Rester sur le sujet, se rétablir une fois, et conclure : les trois tiennent une réponse debout.", 'Staying on topic, recovering once, and concluding: the three keep a reply standing.', ['regle']),
  sent(1876, "Une réponse peut être grammaticalement parfaite et pourtant ne tenir debout nulle part.", 'A reply can be grammatically perfect and still not stand up anywhere.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 6 ROWS — Le vrai rétablissement (1877-1889)
 *
 *  Five pairs, same surface fillers, two different outcomes. `perdu` rows
 *  are NAMED, never released: the trapDrill's `promptSound` quotes them, the
 *  learner is never asked to produce one. `retabli` rows ARE the targets.
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT6_ROWS: Row[] = [
  sent(1877, "Enfin, bon, je sais plus, on verra, tant pis.", 'Well, anyway, I don’t know anymore, we’ll see, never mind.', ['perdu'], SR),
  sent(1878, "Ou plutôt, disons les choses ainsi : c’est un vrai souci, et voici comment on le corrige.", 'Or rather, let’s put it this way: it’s a real issue, and here’s how we fix it.', ['retabli']),
  sent(1879, "Alors, du coup, en fait, je reviens un peu en arrière, enfin, c’était pas vraiment ça, bon.", 'So, anyway, actually, I’ll backtrack a bit, well, that wasn’t quite it, okay.', ['perdu'], SR),
  sent(1880, "Je précise un point : le vrai souci n’est pas l’odeur, c’est la fréquence du ramassage.", 'Let me clarify one point: the real issue isn’t the smell, it’s the pickup frequency.', ['retabli']),
  sent(1881, "Non en fait, laissez tomber, ça n’a pas vraiment d’importance de toute façon.", 'No actually, never mind, it doesn’t really matter anyway.', ['perdu'], SR),
  sent(1882, "Ce que je voulais dire, c’est que la fréquence compte plus que l’emplacement.", 'What I meant to say is that frequency matters more than location.', ['retabli']),
  sent(1883, "Bon, après, je sais pas trop, il y a plusieurs avis, enfin, chacun voit différemment, voilà.", 'Well, then, I don’t really know, there are several opinions, well, everyone sees it differently, there you go.', ['perdu'], SR),
  sent(1884, "Pour être exact, deux avis s’opposent, et je penche pour celui du jardin Garnier.", 'To be exact, two opinions clash, and I lean toward the Garnier garden’s.', ['retabli']),
  sent(1885, "Donc, voilà, enfin, c’est compliqué, je crois, peut-être, je ne sais pas trop.", 'So, there, well, it’s complicated, I think, maybe, I don’t really know.', ['perdu'], SR),
  sent(1886, "Ma réponse tient en une phrase : la fréquence d’abord, l’emplacement ensuite.", 'My answer fits in one sentence: frequency first, location second.', ['retabli']),
  phrase(1887, "un rétablissement réel", 'a genuine recovery', ['metalangage']),
  phrase(1888, "une cohérence perdue", 'a lost coherence', ['metalangage']),
  sent(1889, "Un rétablissement nomme le problème et avance ; une cohérence perdue tourne en rond sans jamais rien nommer.", 'A recovery names the problem and moves forward; a lost coherence circles without ever naming anything.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 7 ROWS — Sous pression, en scénario (1890-1906)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT7_ROWS: Row[] = [
  phrase(1890, "improviser sous pression", 'improvising under pressure', ['metalangage']),
  sent(1891, "Un deuxième auditeur appelle : il préférerait qu’on parle plutôt du bruit du camion de collecte.", 'A second caller phones in: he’d rather we talked about the collection truck’s noise instead.', ['objection-topic']),
  sent(1892, "On ne change pas de sujet pour fuir une question gênante.", 'You don’t change the subject to dodge an awkward question.', ['regle']),
  sent(1893, "On reconnaît la nouvelle question, et on y revient après avoir fini la première.", 'You acknowledge the new question, and come back to it after finishing the first.', ['regle']),
  sent(1894, "Je note votre question sur le camion, j’y reviens juste après.", 'I’ll note your question about the truck, I’ll come back to it right after.', ['gambit-bon']),
  sent(1895, "Pour le bruit du camion, disons que c’est un vrai sujet, mais un sujet différent de celui d’aujourd’hui.", 'On the truck noise, let’s say that’s a real topic, but a different one from today’s.', ['gabarit-position']),
  sent(1896, "Changer complètement de sujet au milieu d’une réponse perd l’auditeur, pas seulement le fil.", 'Switching topics entirely mid-reply loses the listener, not just the thread.', ['regle']),
  sent(1897, "Répondre à une question qu’on n’a pas posée donne l’impression de fuir la vraie.", 'Answering a question nobody asked gives the impression of dodging the real one.', ['regle']),
  sent(1898, "Odile relance une dernière fois avant la pause publicitaire.", 'Odile follows up one last time before the ad break.', ['contexte']),
  sent(1899, "Un dernier mot pour les auditeurs qui nous écoutent depuis leur jardin.", 'A final word for listeners tuning in from their own garden.', ['contexte']),
  sent(1900, "En résumé, trois choses : un vrai geste, des réglages possibles, et un prochain rendez-vous public.", 'In short, three things: a real move, possible adjustments, and a next public meeting.', ['conclusion']),
  sent(1901, "Une vraie conclusion nomme une suite ; un silence qui traîne n’en nomme aucune.", 'A real conclusion names a next step; a silence that drags on names none.', ['regle']),
  sent(1902, "Merci à tous, et à la semaine prochaine sur Radio Verdon.", 'Thanks everyone, and see you next week on Radio Verdon.', ['conclusion']),
  sent(1903, "S’arrêter net au milieu d’une phrase, sans un mot de clôture, laisse l’auditeur en suspens.", 'Stopping dead mid sentence, with no closing word, leaves the listener hanging.', ['regle']),
  sent(1904, "Enchaîner sur la pause musicale sans un mot de fin fait croire à une coupure technique.", 'Moving straight into the music break with no closing word makes it sound like a technical cut.', ['regle']),
  phrase(1905, "une vraie conclusion", 'a real conclusion', ['metalangage']),
  phrase(1906, "un silence qui traîne", 'a silence that drags on', ['metalangage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ACT 8 ROWS — Ta réponse, à l’instant (1907-1918)
 * ══════════════════════════════════════════════════════════════════════════ */

export const CALLER_PRICES_FR = "Vos prix sont trop hauts pour une famille à petit budget, et ce marché ne sert au fond que les gens déjà à l’aise.";
export const CALLER_PRICES_EN = 'Your prices are too high for a family on a tight budget, and this market basically only serves people who are already comfortable.';

const ACT8_ROWS: Row[] = [
  sent(1907, "Avant de répondre, passe ton gabarit en revue : reformuler, prendre position, justifier, ouvrir.", 'Before answering, run through your template: rephrase, take a position, justify, open up.', ['bilan']),
  sent(1908, "Un bon gambit annoncé à voix haute vaut mieux qu’un silence qui s’étire.", 'A good gambit said aloud beats a silence that stretches on.', ['bilan']),
  sent(1909, "Une correction qui garde le fil vaut mieux qu’un effacement complet.", 'A correction that keeps the thread beats a complete wipe.', ['bilan']),
  sent(1910, "Une réponse qui conclut vaut mieux qu’une réponse qui s’arrête sans le dire.", 'A reply that concludes beats a reply that stops without saying so.', ['bilan']),
  sent(1911, "Le marché de producteurs du samedi s’installe sur la place Belmont depuis mars.", 'The Saturday producers’ market has been set up on Place Belmont since March.', ['tache-contexte']),
  sent(1912, CALLER_PRICES_FR, CALLER_PRICES_EN, ['tache-objection']),
  sent(1913, "Les prix couvrent le juste prix payé aux producteurs, pas une marge pour le marché.", 'The prices cover what’s fairly paid to the producers, not a margin for the market.', ['tache-reponse']),
  sent(1914, "Disons que c’est un vrai obstacle pour certaines familles, et voici ce qu’on peut faire.", 'Let’s say that’s a real obstacle for some families, and here’s what we can do.', ['tache-reponse']),
  sent(1915, "Le marché propose déjà un panier solidaire à prix réduit, le mercredi.", 'The market already offers a reduced-price solidarity basket, on Wednesdays.', ['tache-reponse']),
  sent(1916, "Une réponse qui nie le problème d’entrée perd l’auditeur avant même la justification.", 'A reply that denies the problem from the start loses the listener before the justification even starts.', ['regle']),
  sent(1917, "Le direct ne pardonne pas un silence qui dure, mais il pardonne largement un faux départ corrigé.", 'Live broadcast doesn’t forgive a silence that drags on, but it forgives a corrected false start easily.', ['bilan']),
  sent(1918, "À la fin, ce qu’on retient n’est jamais le petit accroc, c’est la façon d’y répondre.", 'In the end, what people remember is never the small stumble, it’s the way you respond to it.', ['bilan']),
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
 *  stalling tics, lost-coherence lines and over-apologetic restarts a
 *  learner must not be quizzed on as if they were correct production. */
export const NOT_DECK_ABLE: string[] = ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id);
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];
