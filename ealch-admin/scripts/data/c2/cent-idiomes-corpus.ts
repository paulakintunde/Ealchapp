// c2.03.l1 « Cent expressions idiomatiques avancées » — the authored corpus,
// the identity block and the citation constants. DRAFT, the third lesson of
// the C2 band. To B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 (THE VOCAB SHAPE: word
// families in use, never isolated nouns) on top of B1-BUILD-PLAYBOOK.md, with
// the C2 rules of C2-BUILD-PLAN.md and the c2.03 brief in C2-BUILD-LOG.md.
// Structural model: c2.01 (`../c2/precision-nuance-corpus.ts`, the workshop
// shape) for the Lesson assembly machinery; b1.27/b1.28/b1.29
// (`../b1/expressions-corps-corpus.ts` and its two siblings) for the VOCAB
// shape applied to an idiom bank specifically.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
// No Postgres WRITE was made while authoring this file. A read-only probe
// (BEGIN TRANSACTION READ ONLY, no SET) against the live `expressions-imagees`
// theme is recorded in `ealch-admin/scratch/_c203-probe.out` (not committed):
// b1 holds 526 published rows (1002-1589, four families: le corps, les
// animaux et la nourriture, les couleurs, plus proverb-adjacent fixed
// expressions folded into b1's own blocks) and b2 holds 166 (1600-1765,
// proverbs, La Fontaine, negotiation idioms). The id home table in
// C2-BUILD-PLAN.md already records the theme widened to c2 and the sub-theme
// « cent expressions idiomatiques avancées » appended, 2026-10-09, verified
// by read-back — this file only needs to stay inside the claimed block and
// not repeat an idiom the probe found.
//
// STABLE EXPORTS (a later C2 lesson may import REFRAME from this file and
// quote it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME,
// LEVEL, E, ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   A DEDICATED BANK OF 100 ADVANCED IDIOMS, at a literary or formal register
//   past B1/B2's courant/familier idioms, each used IN A SENTENCE (never a
//   flat definition list), grouped into TEN FAMILIES by domain rather than by
//   key image (the b1/b2 convention), because at C2 the organising question
//   is no longer "what picture does this idiom draw" but "what register does
//   it carry, and where does it belong":
//
//     act 1   the problem: a familiar-register idiom (b1/b2's own) used where
//             a soutenu one was needed, in a professional text
//     act 2   le pouvoir et l'autorité (10 idioms)
//     act 3   la ruse, le double jeu et la rhétorique (10)
//     act 4   le jugement et la mesure (10)
//     act 5   l'excès et la démesure (10)
//     act 6   la réputation et la disgrâce (10)
//     act 7   le destin et l'inéluctable (10)
//     act 8   le temps, la mémoire et l'oubli (10)
//     act 9   la parole soutenue (10)
//     act 10  l'ambition, l'effort et l'échec (10)
//     act 11  la solitude, le repli et la distance (10)
//     act 12  the task: a portrait using several families at once
//
//   NOT OWNED, CITED ONLY (all published, b1/b2 CLOSED):
//     - le corps (coûter les yeux de la tête, avoir le cœur sur la main...)
//       is b1.27's (« la leçon 27 du B1 »).
//     - les animaux et la nourriture (poser un lapin, avoir une faim de
//       loup...) is b1.28's (« la leçon 28 du B1 »).
//     - les couleurs (voir rouge, rire jaune, avoir carte blanche...) is
//       b1.29's (« la leçon 29 du B1 »).
//     - les proverbes et les expressions figées, et La Fontaine, are b2.34's
//       (« la leçon 34 du B2 »).
//     - connotation, register and collocation as a GENERAL method for single
//       words is c1.17's (« la leçon 17 du C1 »); this lesson applies that
//       same judgement to a FIXED, multi-word idiom instead of a single word,
//       the thing c1.17 never built a bank for.
//   None of these four families is retaught, and no row here twins a
//   published b1/b2 idiom (checked against the probe, §A below).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. WHAT THE PROBE FOUND, AND HOW THIS LESSON AVOIDS IT
// ══════════════════════════════════════════════════════════════════════════
//
//   b1 (1002-1589): le corps (aider, agacer, paresse/effort, gaffe, distrait,
//   argent/relations, courage/bon sens, mémoire/savoir, refus, émotion — all
//   body-part idioms); les animaux et la nourriture (poser un lapin, froid de
//   canard, poule mouillée, taureau par les cornes, faim de loup, cafard,
//   malade comme un chien, anguille sous roche, pain sur la planche, têtu
//   comme une mule); les couleurs (peur bleue, voir rouge, nuit blanche, rire
//   jaune, vert de jalousie, carte blanche, feu vert, série noire, cordon
//   bleu). b2 (1600-1765): proverbs and fixed-expression FORM (qui veut dire
//   celui qui, le présent de vérité générale), the patience/prudence/gens/
//   conséquence proverb families, La Fontaine's fables, negotiation idioms
//   (mettre de l'eau dans son vin, couper la poire en deux, tirer son épingle
//   du jeu, une tempête dans un verre d'eau), translating a proverb.
//
//   THIS LESSON's 100 idioms touch NONE of those images or domains: no body
//   part, no animal, no colour, no proverb, no La Fontaine fable, no
//   negotiation cliché. Instead: authority and power, deception and
//   rhetoric, judgement and restraint, excess, reputation and disgrace,
//   fate, time and memory, elevated speech, ambition and failure, solitude.
//   These are the domains a C2 reader meets in an editorial, a literary
//   portrait or a formal report — the register b1/b2 deliberately left for
//   later (B1-WORKSHOP-AND-VOCAB-SHAPES.md §2.2: "only expressions a B1
//   learner will actually hear... no rare literary idioms").
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. ID DISCIPLINE
// ══════════════════════════════════════════════════════════════════════════
//
//   THEME `expressions-imagees` (domain lexique) was widened b1-b2 -> b1-c2 in
//   Postgres 2026-10-09 (C2-BUILD-PLAN.md, verified by read-back); the
//   sub-theme « cent expressions idiomatiques avancées » was appended the
//   same day. This lesson owns block 1800-1999 AND NOTHING ELSE: every b1/b2
//   block below 1800 is published and untouched here.
//
//   USED: .1800-.1807 (act 1), then eleven ids per family act (ten idiom
//   rows plus one rule row), .1810-.1819 (act 2) through .1945-.1955 (act
//   11), then .1960-.1989 (act 12, the task and its support). .1990-.1999
//   left free inside the claimed block for the pre-review pass.
//
// ══════════════════════════════════════════════════════════════════════════
//  §C. SOURCES
// ══════════════════════════════════════════════════════════════════════════
//
//   Larousse and Le Robert idiom entries for every expression's meaning and
//   register; none is a Québécois variant (unlike the b1/b2 idioms, which
//   mark several), since the FORMAL/LITERARY register this lesson teaches is
//   the Paris-centred standard both dictionaries describe for this register
//   band — the mixed-francophone setting is carried instead in the acts'
//   narrator and settings (Montréal newsroom, a Genève tribunal reference, a
//   Dakar cultural page), per the house decision. OQLF/Usito were checked for
//   each idiom and found no Québec-specific register note at this formal
//   level: all 100 are pan-francophone soutenu French. Two historically
//   rooted idioms (« le sort en est jeté », « brûler ses vaisseaux ») are
//   taught as live, fully lexicalised French idioms, with NO name attached to
//   their origin (the fact-check rule b1/b2 and c1.12 both follow: no
//   thinker, no historical figure is named anywhere a learner reads).
//
// ══════════════════════════════════════════════════════════════════════════
//  §D. FACT CHECK (for the pre-review)
// ══════════════════════════════════════════════════════════════════════════
//
//   Every meaning and register above was checked against Larousse/Le Robert
//   entries for the headword idiom. Two notes for the pre-review:
//     a. « renaître de ses cendres » is the attested form (not "ressusciter
//        de ses cendres"); act 10 row .1938 uses "est rené de ses cendres"
//        (renaître conjugates like naître: être + né/rené, never avoir).
//     b. « nager entre deux eaux » (act 3) is the attested idiom for playing
//        both sides; the near-synonym "louvoyer" (to use evasive tactics) is
//        a related but separate verb, deliberately NOT taught as a twin so
//        the family stays at ten distinct idioms, not nine plus a repeat.
//
// ══════════════════════════════════════════════════════════════════════════
//  §E. HOUSE RULES APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; every character in a scene/reading/story uses what
//   the situation needs (vous between strangers and officials). No em dash.
//   No U+203F tie. Never "honnête" / "honest" / "honnêtement". Typographic ’
//   throughout. No spaced « ? » or « ! » in a scene or story bubble. French
//   only on the learner surface; English authored behind every `en` field
//   and every trailing « EN: », never shown by default. Citations by trail
//   position in French words only, never a raw id. `register: 'soutenu'` on
//   every row (REGISTERS has no 'littéraire' value in the schema; every
//   idiom here sits at the soutenu end of that scale in any case).
//
// ══════════════════════════════════════════════════════════════════════════
//  §F. FACT CHECK ON PEOPLE AND PLACES
// ══════════════════════════════════════════════════════════════════════════
//
//   PEOPLE, ALL INVENTED, NO REAL PERSON NAMED: Inès Laurent (journaliste),
//   Julien Vasseur (rédacteur), le juge Antoine Berthier (recurring profile
//   subject, act 12's task), Madame Oliveri (reused role name only, no
//   relation to c2.01's landlady; kept generic on purpose).
//   ORGANISATIONS, ALL INVENTED: le magazine Le Courrier des Lettres, le
//   tribunal civil (unnamed city), la Fondation Berthier.
//   REAL PLACES, AS PLACES ONLY: Montréal, Genève, Dakar.
//   LOW-HEAT TOPICS ONLY: an editor correcting a colleague's draft, a
//   retired judge's rise and fall (fictional, no real case), a company
//   founder's gamble, a literary salon, a negotiation at a tribunal. No
//   living person, no real political event, no health claim, no legal fact
//   beyond "a tribunal exists".
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c2.03',
  seq: 3,
  title: 'Advanced Idiomatic Expressions: 100 Items',
  sub: 'Cent expressions idiomatiques avancées',
  canDo: "Can recognise and correctly use, in context, 100 advanced idiomatic and figurative expressions at a literary or formal register past what B1/B2 taught, choosing the idiom whose image AND register fit a formal or literary text, telling a real idiom from a confusable near-miss that does not exist or sits at the wrong register",
  prereqUnitIds: ['c1.17', 'b1.27', 'b1.28', 'b1.29', 'b2.34'],
} as const;

export const LESSON_ID = 'c2.03.l1';
export const THEME = 'expressions-imagees';
export const LEVEL = 'c2' as const;

/** ONE block. Every b1/b2 block below 1800 is published and untouched. */
export const ID_RANGES = [[1800, 1999]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  b1.27/b1.28/b1.29/b2.34 are Postgres-only drafts of their own, read here
 *  through seedPlusPacks() exactly as c1.12 read its b2 predecessors; c1.17
 *  is published (v88) and in the same seed. One map covers all four bands.
 * ══════════════════════════════════════════════════════════════════════════ */

const seed = seedPlusPacks() as unknown as { units: { id: string; seq: number | string }[] };
const SEQ = new Map(seed.units.map((u) => [u.id, Number(u.seq)]));

function bandLabel(unitId: string): string {
  const band = unitId.split('.')[0];
  const labels: Record<string, string> = { a1: 'A1', a2: 'A2', b1: 'B1', b2: 'B2', c1: 'C1', c2: 'C2' };
  const label = labels[band];
  if (!label) throw new Error(`c2.03: unknown band for ${unitId}`);
  return label;
}

export function refFr(unitId: string): string {
  const n = SEQ.get(unitId);
  if (!n) throw new Error(`c2.03: ${unitId} is not in the seed`);
  return `la leçon ${n} du ${bandLabel(unitId)}`;
}

export const B127_UNIT = 'b1.27';
export const B128_UNIT = 'b1.28';
export const B129_UNIT = 'b1.29';
export const B234_UNIT = 'b2.34';
export const C117_UNIT = 'c1.17';

export const B127_REF = refFr(B127_UNIT);
export const B128_REF = refFr(B128_UNIT);
export const B129_REF = refFr(B129_UNIT);
export const B234_REF = refFr(B234_UNIT);
export const C117_REF = refFr(C117_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B127_REFRAME, REFRAME_EN as B127_REFRAME_EN } from '../b1/expressions-corps-corpus.ts';
export { REFRAME as B128_REFRAME, REFRAME_EN as B128_REFRAME_EN } from '../b1/expressions-animaux-corpus.ts';
export { REFRAME as B129_REFRAME, REFRAME_EN as B129_REFRAME_EN } from '../b1/expressions-couleurs-corpus.ts';
export { REFRAME as B234_REFRAME, REFRAME_EN as B234_REFRAME_EN } from '../b2/proverbes-corpus.ts';
export { REFRAME as C117_REFRAME, REFRAME_EN as C117_REFRAME_EN } from '../c1/synonymes-nuances-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE PICTURE AND THE REGISTER. b1.27 taught that an idiom's picture is not
 *  its meaning (corpus of that lesson: "the picture comes from the body, the
 *  meaning comes from the whole phrase"). This lesson adds the second axis a
 *  B1/B2 learner never had to weigh: the same correct idiom can still be the
 *  WRONG choice, because it sits at the wrong register for the text it is
 *  dropped into. Choosing well means reading both the picture and the
 *  register of the sentence it has to fit.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Une expression porte un registre autant qu’une image : choisis celle qui tient dans ta phrase, pas la plus belle.';
export const REFRAME_EN = 'An idiom carries a register as much as a picture: choose the one that holds up in your sentence, not the prettiest one.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Plus une expression est rare, plus elle impressionne.',
    why: 'False where act 1 and act 12 have to hold: a soutenu idiom dropped into the wrong text reads as pompous, not impressive, and a text stuffed with idioms reads as a list, not a text (act 12’s rubric marks exactly this).',
  },
  {
    text: 'Une expression qui existe en français marche partout où son sens convient.',
    why: 'False where acts 2 to 11 all have to hold: ten real idioms per family share a near-identical meaning, and only one fits a given register (familier, courant, soutenu) and a given formal or literary text.',
  },
  {
    text: 'Si une expression a l’air logique, elle existe probablement.',
    why: 'False where the trap steps (acts 3, 5, 7, 9, 11) have to hold: a plausible-sounding near-miss that nobody actually says is exactly the fault this lesson names and drills.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ROW CONSTRUCTORS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
/** Named for a recap or a wrong-option/trap card: never released, never spoken. */
const SR = ['sentence', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, tags, drills, version: 1, register: 'soutenu',
  grammarPoints: ['expression-idiomatique-c2'], ...extra,
});
const phrase = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  ...sent(n, fr, en, tags, drills, extra), kind: 'phrase',
});

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 1 ROWS — Le registre de l’image (1800-1807)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT1_ROWS: Row[] = [
  sent(1800, 'Le juge a mis les pieds dans le plat devant les journalistes.', 'The judge put his foot in it in front of the journalists.', ['probleme', 'trop-familier'], SR),
  sent(1801, 'Le juge s’est couvert de ridicule devant les journalistes.', 'The judge covered himself in ridicule in front of the journalists.', ['solution', 'registre-juste']),
  sent(1802, 'Une expression correcte peut rester fausse dans le texte où on la pose.', 'A correct idiom can still be the wrong one for the text it is placed in.', ['regle']),
  sent(1803, 'Un portrait soigné ne tolère pas une expression de cuisine de tous les jours.', 'A careful portrait cannot carry an everyday, kitchen-table idiom.', ['regle']),
  sent(1804, 'Cent expressions, dix familles, un seul critère : l’image, puis le registre.', 'A hundred idioms, ten families, one single test: the picture, then the register.', ['rule', 'reframe']),
  sent(1805, 'Le corps, les animaux, les couleurs et les proverbes restent à leur place.', 'The body, the animals, the colours and the proverbs stay exactly where they are.', ['recap']),
  sent(1806, 'Ici, le pouvoir, la ruse, le jugement, l’excès, la réputation, le destin, le temps, la parole, l’ambition et la solitude.', 'Here: power, cunning, judgement, excess, reputation, fate, time, speech, ambition and solitude.', ['plan']),
  sent(1807, 'Avant de choisir une expression, demande-toi dans quel texte elle doit tenir.', 'Before choosing an idiom, ask yourself what text it has to hold up in.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 2 ROWS — Le pouvoir et l’autorité (1810-1820)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT2_ROWS: Row[] = [
  sent(1810, 'Le préfet a la haute main sur l’ensemble du dossier.', 'The prefect has complete authority over the whole file.', ['pouvoir']),
  sent(1811, 'Depuis dix ans, elle tient les rênes de l’entreprise familiale.', 'For ten years she has held the reins of the family business.', ['pouvoir']),
  sent(1812, 'Le vieux ministre régnait sans partage sur son administration.', 'The old minister ruled without rival over his administration.', ['pouvoir']),
  sent(1813, 'Après trois recours rejetés, l’avocat a fini par rendre les armes.', 'After three rejected appeals, the lawyer finally laid down his arms.', ['pouvoir']),
  sent(1814, 'Le syndicat a mis l’entreprise genou à terre en six semaines.', 'The union brought the company to its knees in six weeks.', ['pouvoir']),
  sent(1815, 'Devant l’ampleur du scandale, le conseil a battu en retraite.', 'Faced with the scale of the scandal, the board retreated.', ['pouvoir']),
  sent(1816, 'Le ministre a fini par baisser pavillon devant les députés.', 'The minister finally backed down before the members of parliament.', ['pouvoir']),
  sent(1817, 'Le propriétaire de l’immeuble a barre sur tout le quartier.', 'The building’s owner has the upper hand over the whole neighbourhood.', ['pouvoir']),
  sent(1818, 'La directrice a dû faire acte d’autorité pour calmer la salle.', 'The director had to assert her authority to calm the room.', ['pouvoir']),
  sent(1819, 'Le journal se pose en arbitre du débat, sans y participer.', 'The newspaper sets itself up as arbiter of the debate, without taking part.', ['pouvoir']),
  sent(1820, 'Dix expressions, un seul terrain : qui commande, qui cède, qui arbitre.', 'Ten idioms, one territory: who commands, who yields, who arbitrates.', ['rule']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 3 ROWS — La ruse, le double jeu et la rhétorique (1825-1835)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT3_ROWS: Row[] = [
  sent(1825, 'Le rapport jette de la poudre aux yeux plus qu’il n’informe.', 'The report dazzles more than it informs.', ['ruse']),
  sent(1826, 'Toute la salle a fait des gorges chaudes de sa maladresse.', 'The whole room openly mocked his clumsiness.', ['ruse']),
  sent(1827, 'Pour la discussion, je me fais l’avocat du diable un instant.', 'For the discussion, let me play devil’s advocate for a moment.', ['ruse']),
  sent(1828, 'Le candidat nage entre deux eaux depuis le premier débat.', 'The candidate has been playing both sides since the first debate.', ['ruse']),
  sent(1829, 'On soupçonne l’ancien associé de tirer encore les ficelles.', 'The former partner is suspected of still pulling the strings.', ['ruse']),
  sent(1830, 'L’élu a retourné sa veste dès que le vote a changé.', 'The elected official switched sides as soon as the vote shifted.', ['ruse']),
  sent(1831, 'L’accusé joue sur les mots pour éviter de répondre franchement.', 'The defendant plays on words to avoid answering plainly.', ['ruse']),
  sent(1832, 'L’enquêteur a prêché le faux pour savoir le vrai.', 'The investigator claimed something false to learn the truth.', ['ruse']),
  sent(1833, 'Avant de démissionner, elle a pris soin de ménager ses arrières.', 'Before resigning, she took care to cover herself.', ['ruse']),
  sent(1834, 'Le communiqué brouille les pistes plus qu’il n’éclaircit l’affaire.', 'The statement muddies the trail more than it clarifies the matter.', ['ruse']),
  sent(1835, 'Dix façons de dire, de cacher ou de retourner, jamais la même.', 'Ten ways to say, to hide or to turn around, never the same one.', ['rule']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 4 ROWS — Le jugement et la mesure (1840-1850)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT4_ROWS: Row[] = [
  sent(1840, 'Un bon juge sait faire la part des choses, même sous pression.', 'A good judge knows how to keep things in perspective, even under pressure.', ['jugement']),
  sent(1841, 'Le comité n’est pas dupe des chiffres présentés par la direction.', 'The committee is not fooled by the figures management presented.', ['jugement']),
  sent(1842, 'Face à l’urgence, le conseil a dû trancher dans le vif.', 'Faced with the emergency, the board had to make a hard, decisive cut.', ['jugement']),
  sent(1843, 'On ne peut juger ce texte à l’aune des règles d’aujourd’hui.', 'This text cannot be judged by today’s standards.', ['jugement']),
  sent(1844, 'Les employés réclament enfin d’avoir voix au chapitre.', 'The employees are finally demanding a say in the matter.', ['jugement']),
  sent(1845, 'Le rapporteur s’en tient strictement aux faits établis.', 'The rapporteur sticks strictly to the established facts.', ['jugement']),
  sent(1846, 'Il a fallu une semaine pour prendre la mesure du désastre.', 'It took a week to gauge the full scale of the disaster.', ['jugement']),
  sent(1847, 'Le discours fait bon marché des inquiétudes des riverains.', 'The speech treats the residents’ worries as if they counted for nothing.', ['jugement']),
  sent(1848, 'Sur ce point, l’opposition n’est pas en reste non plus.', 'On this point, the opposition is not to be outdone either.', ['jugement']),
  sent(1849, 'Peu d’orateurs ont vraiment le sens de la mesure, ce soir-là.', 'Few speakers that evening truly had a sense of proportion.', ['jugement']),
  sent(1850, 'Juger juste, c’est peser, pas trancher au hasard.', 'Judging well means weighing, not cutting at random.', ['rule']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 5 ROWS — L’excès et la démesure (1855-1865)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT5_ROWS: Row[] = [
  sent(1855, 'Cette fois, le metteur en scène ne fait pas dans la demi-mesure.', 'This time, the director does not do things by halves.', ['exces']),
  sent(1856, 'L’éloge du maire frisait le ridicule, tant il en faisait trop.', 'The mayor’s praise bordered on the ridiculous, he laid it on so thick.', ['exces']),
  sent(1857, 'L’article verse dans l’excès dès ses premières lignes.', 'The article tips into excess from its very first lines.', ['exces']),
  sent(1858, 'Le projet, modeste au départ, est tombé dans la démesure.', 'The project, modest at first, fell into excess.', ['exces']),
  sent(1859, 'En licenciant sans préavis, la direction a outrepassé les bornes.', 'By dismissing without notice, management overstepped the bounds.', ['exces']),
  sent(1860, 'Certaines clauses du contrat confinent à l’absurde.', 'Some clauses of the contract border on the absurd.', ['exces']),
  sent(1861, 'Son ambition, dit-on, ne connaît aucune limite.', 'His ambition, people say, knows no limit.', ['exces']),
  sent(1862, 'Entre les deux camps, le médiateur joue les équilibristes.', 'Between the two camps, the mediator is walking a tightrope.', ['exces']),
  sent(1863, 'Le ton du discours flirtait ouvertement avec l’excès.', 'The speech’s tone openly flirted with excess.', ['exces']),
  sent(1864, 'Un bon négociateur sait s’arrêter à temps.', 'A good negotiator knows when to stop.', ['exces']),
  sent(1865, 'Neuf excès, un seul contrepoint : savoir où est la limite.', 'Nine kinds of excess, one counterpoint: knowing where the limit is.', ['rule']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 6 ROWS — La réputation et la disgrâce (1870-1880)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT6_ROWS: Row[] = [
  sent(1870, 'Jusqu’à ce scandale, le cabinet jouissait d’une réputation sans tache.', 'Until this scandal, the firm enjoyed a spotless reputation.', ['reputation']),
  sent(1871, 'Un seul article a terni sa réputation pour des années.', 'A single article tarnished her reputation for years.', ['reputation']),
  sent(1872, 'En niant l’évidence, le porte-parole s’est couvert de ridicule.', 'By denying the obvious, the spokesman covered himself in ridicule.', ['reputation']),
  sent(1873, 'L’ancien favori du conseil est tombé en disgrâce en un mois.', 'The board’s former favourite fell into disgrace within a month.', ['reputation']),
  sent(1874, 'Le président a préféré transiger plutôt que de perdre la face.', 'The chairman preferred to compromise rather than lose face.', ['reputation']),
  sent(1875, 'Un simple communiqué a suffi à sauver la face du cabinet.', 'A simple press release was enough to save the firm’s face.', ['reputation']),
  sent(1876, 'Le candidat se targue d’une expérience qu’il n’a jamais eue.', 'The candidate boasts of an experience he never had.', ['reputation']),
  sent(1877, 'Cette autrice est devenue la coqueluche des salons littéraires.', 'This author has become the darling of the literary salons.', ['reputation']),
  sent(1878, 'Le ministre a essuyé un affront public devant les caméras.', 'The minister suffered a public affront in front of the cameras.', ['reputation']),
  sent(1879, 'Il n’a trouvé qu’un moyen pour laver cet affront : démissionner.', 'He found only one way to wipe out that affront: resign.', ['reputation']),
  sent(1880, 'La réputation monte lentement et tombe en une phrase.', 'Reputation rises slowly and falls in a single sentence.', ['rule']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 7 ROWS — Le destin et l’inéluctable (1885-1895)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT7_ROWS: Row[] = [
  sent(1885, 'Sans réforme, le projet semblait voué à l’échec.', 'Without reform, the project seemed doomed to fail.', ['destin']),
  sent(1886, 'En ignorant les alertes, la direction courait à sa perte.', 'By ignoring the warnings, management was heading for its own downfall.', ['destin']),
  sent(1887, 'Le vote est clos : le sort en est jeté.', 'The vote is closed: the die is cast.', ['destin']),
  sent(1888, 'Après ce procès, la famille a tiré un trait sur l’héritage.', 'After this trial, the family drew a line under the inheritance.', ['destin']),
  sent(1889, 'Toute sa carrière reste marquée du sceau de ce premier échec.', 'His whole career still bears the mark of that first failure.', ['destin']),
  sent(1890, 'Le promoteur a maille à partir avec la mairie depuis deux ans.', 'The developer has had a running dispute with the town hall for two years.', ['destin']),
  sent(1891, 'En republiant ce texte, l’éditeur a voulu forcer le destin.', 'By republishing this text, the publisher tried to force fate’s hand.', ['destin']),
  sent(1892, 'Sans ce contrat, l’atelier est à la merci du moindre retard.', 'Without this contract, the workshop is at the mercy of the smallest delay.', ['destin']),
  sent(1893, 'Le fondateur a joué son destin sur un coup de dés.', 'The founder staked his fate on a single roll of the dice.', ['destin']),
  sent(1894, 'Ce discours malheureux a scellé le destin du candidat.', 'That unfortunate speech sealed the candidate’s fate.', ['destin']),
  sent(1895, 'Dix façons d’être rattrapé, une seule issue à chaque fois.', 'Ten ways to be caught up with, one single outcome each time.', ['rule']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 8 ROWS — Le temps, la mémoire et l’oubli (1900-1910)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT8_ROWS: Row[] = [
  sent(1900, 'On n’avait pas vu pareille sécheresse de mémoire d’homme.', 'No one had seen such a drought within living memory.', ['temps']),
  sent(1901, 'Le pays se trouvait à l’aube d’un nouveau cycle politique.', 'The country stood at the dawn of a new political cycle.', ['temps']),
  sent(1902, 'Au crépuscule de sa carrière, il publie enfin ses mémoires.', 'At the twilight of his career, he finally publishes his memoirs.', ['temps']),
  sent(1903, 'Peu de ses décisions ont résisté à l’épreuve du temps.', 'Few of his decisions have stood the test of time.', ['temps']),
  sent(1904, 'Rien, dans ce domaine, n’est jamais gravé dans le marbre.', 'In this field, nothing is ever set in stone.', ['temps']),
  sent(1905, 'Le discours est passé à la postérité pour une seule phrase.', 'The speech went down in history for a single sentence.', ['temps']),
  sent(1906, 'Le projet, pourtant ambitieux, est vite tombé dans l’oubli.', 'The project, ambitious as it was, soon fell into oblivion.', ['temps']),
  sent(1907, 'La réforme ne s’inscrira dans la durée que sous deux conditions.', 'The reform will only last if two conditions are met.', ['temps']),
  sent(1908, 'Selon elle, ce modèle économique a fait son temps.', 'According to her, this economic model has had its day.', ['temps']),
  sent(1909, 'Ce discours martial paraît d’un autre temps.', 'That martial speech seems to belong to another era.', ['temps']),
  sent(1910, 'Dix façons de dater un propos : à l’aube, au crépuscule, pour toujours, ou pour rien.', 'Ten ways to date a statement: at dawn, at dusk, forever, or for nothing.', ['rule']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 9 ROWS — La parole soutenue (1915-1925)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT9_ROWS: Row[] = [
  sent(1915, 'Devant la commission, le témoin pesait chaque mot.', 'Before the committee, the witness weighed every word.', ['parole']),
  sent(1916, 'Le nouvel associé a le verbe haut, dès la première réunion.', 'The new partner is loud and assertive, from the very first meeting.', ['parole']),
  sent(1917, 'Le porte-parole maniait la langue de bois avec aisance.', 'The spokesman handled doublespeak with ease.', ['parole']),
  sent(1918, 'Ce communiqué se paie de mots, sans rien promettre de précis.', 'This statement is all empty words, promising nothing precise.', ['parole']),
  sent(1919, 'L’invité a tenu un discours convenu, sans surprendre personne.', 'The guest gave a conventional speech, surprising no one.', ['parole']),
  sent(1920, 'Les deux candidats ont fait assaut d’éloquence pendant deux heures.', 'The two candidates vied in eloquence for two hours.', ['parole']),
  sent(1921, 'Le rapport s’exprime à mots couverts sur les vraies causes.', 'The report speaks in veiled terms about the real causes.', ['parole']),
  sent(1922, 'La nouvelle directrice ne mâche pas ses mots devant le conseil.', 'The new director does not mince her words before the board.', ['parole']),
  sent(1923, 'Peu d’auteurs savent tourner une phrase avec autant de soin.', 'Few authors know how to turn a phrase with such care.', ['parole']),
  sent(1924, 'Son grand-père avait le don de la parole, disait-on.', 'His grandfather had the gift of speech, people used to say.', ['parole']),
  sent(1925, 'Peser, voiler, trancher : la parole soutenue a ses dix outils.', 'Weighing, veiling, cutting: elevated speech has its ten tools.', ['rule']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 10 ROWS — L’ambition, l’effort et l’échec (1930-1940)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT10_ROWS: Row[] = [
  sent(1930, 'Dès ses débuts, l’ingénieure a visé haut.', 'From her very first days, the engineer aimed high.', ['ambition']),
  sent(1931, 'Le nouveau maire voit grand pour ce quartier oublié.', 'The new mayor is thinking big for this forgotten district.', ['ambition']),
  sent(1932, 'En quittant son poste, il a brûlé ses vaisseaux.', 'By leaving his position, he burned his boats.', ['ambition']),
  sent(1933, 'Avec ce dernier roman, l’auteur joue son va-tout.', 'With this last novel, the author is staking everything.', ['ambition']),
  sent(1934, 'Elle caresse depuis longtemps l’ambition de diriger l’atelier.', 'She has long nurtured the ambition of running the workshop.', ['ambition']),
  sent(1935, 'Le village nourrit encore l’espoir de rouvrir son école.', 'The village still nurtures the hope of reopening its school.', ['ambition']),
  sent(1936, 'Le candidat a essuyé un échec cuisant au premier tour.', 'The candidate suffered a stinging defeat in the first round.', ['ambition']),
  sent(1937, 'Contre toute attente, l’équipe sort grandie de cet échec.', 'Against all expectation, the team comes out of this failure stronger.', ['ambition']),
  sent(1938, 'L’atelier est rené de ses cendres après l’incendie.', 'The workshop rose from its ashes after the fire.', ['ambition']),
  sent(1939, 'Après dix ans de travaux, la fondation touche enfin au but.', 'After ten years of work, the foundation is finally within reach of its goal.', ['ambition']),
  sent(1940, 'Viser, jouer, tomber, renaître : le même arc, dix fois raconté.', 'Aiming, staking, falling, rising again: the same arc, told ten times over.', ['rule']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 11 ROWS — La solitude, le repli et la distance (1945-1956)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT11_ROWS: Row[] = [
  sent(1945, 'Après sa défaite, l’ancien ministre s’est retiré dans sa tour d’ivoire.', 'After his defeat, the former minister retreated into his ivory tower.', ['solitude']),
  sent(1946, 'Face aux questions, le témoin s’est enfermé dans le mutisme.', 'Faced with the questions, the witness shut himself into silence.', ['solitude']),
  sent(1947, 'Le nouveau venu garde ses distances avec le reste de l’équipe.', 'The newcomer keeps his distance from the rest of the team.', ['solitude']),
  sent(1948, 'Dans ce service, les deux ingénieurs font bande à part.', 'In this department, the two engineers keep to themselves.', ['solitude']),
  sent(1949, 'Depuis l’annonce, la direction se mure dans le silence.', 'Since the announcement, management has walled itself in silence.', ['solitude']),
  sent(1950, 'L’artiste a choisi de vivre en marge de son époque.', 'The artist chose to live on the margins of his era.', ['solitude']),
  sent(1951, 'Elle préfère se tenir à l’écart des débats publics.', 'She prefers to keep apart from public debates.', ['solitude']),
  sent(1952, 'Après l’échec, le groupe s’est replié sur lui-même.', 'After the failure, the group withdrew into itself.', ['solitude']),
  sent(1953, 'Le promoteur préfère rester à l’abri des regards pendant l’enquête.', 'The developer prefers to stay out of the public eye during the inquiry.', ['solitude']),
  sent(1954, 'Plutôt que de répondre, l’accusé se drape dans sa dignité.', 'Rather than answer, the defendant wraps himself in his dignity.', ['solitude']),
  sent(1955, 'Se retirer, se taire, garder ses distances : trois degrés d’un même geste.', 'Withdrawing, falling silent, keeping one’s distance: three degrees of the same gesture.', ['rule']),
  sent(1956, 'L’image parle ; le registre décide. Dix familles, cent fois la même règle.', 'The image speaks; the register decides. Ten families, the same rule a hundred times over.', ['bilan', 'reframe']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ACT 12 ROWS — Ton portrait (1960-1989)
 * ══════════════════════════════════════════════════════════════════════════ */

export const PORTRAIT_BERTHIER =
  'Le juge Antoine Berthier a longtemps tenu les rênes du tribunal civil. On lui prêtait le sens de la mesure, et sa réputation, de mémoire d’homme, restait sans tache.\n\nTout a changé le jour où un article a terni cette réputation en une phrase. Berthier a d’abord joué sur les mots devant les journalistes, puis a fini par baisser pavillon. Il n’a pas essuyé cet affront en silence : il a préféré se retirer dans sa tour d’ivoire plutôt que de perdre la face plus longtemps.\n\nAujourd’hui, à l’aube de sa retraite, il travaille à un livre. Reste à savoir si ce texte le fera passer à la postérité, ou s’il est déjà tombé dans l’oubli.';

export const PORTRAIT_BERTHIER_EN =
  'Judge Antoine Berthier long held the reins of the civil tribunal. People credited him with a sense of proportion, and his reputation, within living memory, had stayed spotless.\n\nEverything changed the day an article tarnished that reputation in a single sentence. Berthier first played on words in front of the journalists, then finally backed down. He did not suffer that affront in silence: he chose to retreat into his ivory tower rather than keep losing face.\n\nToday, at the dawn of his retirement, he is working on a book. It remains to be seen whether this text will see him go down in history, or whether he has already fallen into oblivion.';

const ACT12_ROWS: Row[] = [
  sent(1960, 'Le portrait de Berthier mêle cinq familles sans jamais en citer plus d’une par phrase.', 'Berthier’s portrait blends five families without ever citing more than one per sentence.', ['modele']),
  sent(1961, 'Une seule expression par idée : jamais deux dans la même phrase.', 'One idiom per idea: never two in the same sentence.', ['plan', 'rule']),
  sent(1962, 'Nomme d’abord la famille qu’il te faut, puis choisis l’expression la plus exacte.', 'Name first the family you need, then choose the most exact idiom.', ['plan']),
  phrase(1963, 'un registre juste', 'the right register', ['vocabulaire']),
  phrase(1964, 'une expression inexistante', 'a non-existent idiom', ['vocabulaire']),
  sent(1965, 'La ministre a préféré se targuer d’un succès qui n’était pas le sien.', 'The minister preferred to boast of a success that was not hers.', ['scenario-alt']),
  sent(1966, 'La fondation Berthier a pris la mesure du désastre avant de réagir.', 'The Berthier foundation gauged the full scale of the disaster before reacting.', ['scenario-reponse']),
  sent(1967, 'Elle a visé haut, puis elle est tombée en disgrâce en un mois.', 'She aimed high, then fell into disgrace within a month.', ['scenario-reponse']),
  sent(1968, 'Il a préféré rendre les armes plutôt que de brûler ses vaisseaux.', 'He preferred to lay down his arms rather than burn his boats.', ['scenario-reponse']),
  sent(1969, 'Il a réussi à sauver la face en se tenant à l’écart du débat.', 'He managed to save face by keeping apart from the debate.', ['scenario-alt'], SR),
  sent(1970, 'Après le procès, il s’est enfin couvert de gloire, pas de ridicule.', 'After the trial, he finally covered himself in glory, not ridicule.', ['scenario-alt'], SR),
  sent(1971, 'Dix familles, un seul geste : nommer juste, avant d’écrire.', 'Ten families, one single gesture: name correctly, before writing.', ['bilan']),
  sent(1972, 'Une expression bien choisie vaut mieux que trois mal placées.', 'One well-chosen idiom is worth more than three badly placed ones.', ['bilan']),
  phrase(1973, 'une distance de registre', 'a register gap', ['vocabulaire']),
  phrase(1974, 'un faux ami idiomatique', 'an idiomatic false friend', ['vocabulaire']),
  sent(1975, 'Berthier a longtemps eu barre sur le barreau de la ville.', 'Berthier long had the upper hand over the city’s bar association.', ['quiz-support']),
  sent(1976, 'Son premier livre n’a pas résisté à l’épreuve du temps.', 'His first book did not stand the test of time.', ['quiz-support']),
  sent(1977, 'La nouvelle procureure ne mâche pas ses mots, dès son premier dossier.', 'The new prosecutor does not mince her words, from her very first case.', ['quiz-support']),
  sent(1978, 'Le tribunal de Genève a tranché dans le vif, sans attendre l’appel.', 'The Geneva tribunal made a hard, decisive cut, without waiting for the appeal.', ['quiz-support']),
  sent(1979, 'La chroniqueuse de Dakar a fait assaut d’éloquence dans sa dernière page.', 'The Dakar columnist vied in eloquence on her last page.', ['quiz-support']),
];

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS, ACT7_ROWS,
  ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** No row is reused from another lesson in this draft: every act imports
 *  nothing. Kept as an export so the lesson file’s assembly code is
 *  identical in shape to every other B1+/C1/C2 lesson. */
export const IMPORTED: Record<string, string[]> = {
  act1: [], act2: [], act3: [], act4: [], act5: [], act6: [], act7: [],
  act8: [], act9: [], act10: [], act11: [], act12: [],
};
export const IMPORT_IDS: string[] = [...new Set(Object.values(IMPORTED).flat())];

/** No row here is unreleasable by kind; some are NAMED but never released
 *  (the `SR` drills = {sentence, review}, no flashcard, no voiceflash): the
 *  wrong-register, wrong-outcome or trap options a learner must not be
 *  quizzed on as if they were correct French to produce. */
export const NOT_DECK_ABLE: string[] = ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id);
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];
