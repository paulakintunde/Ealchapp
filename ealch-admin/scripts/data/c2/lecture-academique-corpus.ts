// c2.12.l1 « Lire des textes académiques denses » — the authored corpus, the
// identity block, the anchor texts and the citation constants. DRAFT, wave 3
// of the C2 band. To RICH-LESSON-STANDARD.md and the B1-BUILD-PLAYBOOK.md
// house rules, with the C2 rules of C2-BUILD-PLAN.md and the c2.12 brief in
// C2-RESEARCH-PLAN.md (§c2.12, "C2 reading: dense, unsimplified academic
// texts"). Structural model: `c2/analyse-litteraire-corpus.ts` (c2.02):
// identity block, `refFr()` reading trail positions straight from
// `seed.json`, imported REFRAME quote, row constructors, acts as arrays
// flattened at the end.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json. No
// Postgres read or write was made while authoring this file: the id home
// (strategies-de-comprehension, 2400-2599, inside the widen c2.11 already
// claims) is recorded in C2-RESEARCH-PLAN.md. This file only needs to stay
// inside the claimed block, and does not touch c2.11's own 2200-2399 block.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS, AND WHY IT IS NOT c1.20 AGAIN
// ══════════════════════════════════════════════════════════════════════════
//
//   c1.20 « Lire entre les lignes » (la leçon 20 du C1) taught INTERPRETATION
//   on a moderately dense essay: the exact scope of a conclusion, concession
//   then restriction, the real object of a disagreement, a paragraph's
//   function, an analogy's fall, the writer's stance toward a source,
//   grammatical presupposition, irony from a textual cue, the agent hidden
//   behind a passive or a nominalisation. Every one of those moves assumed
//   the SENTENCE ITSELF was already parseable; the skill was reading what the
//   parseable sentence implied.
//
//   c2.12 does not re-teach any of that. It goes past interpretation into raw
//   DENSITY and REGISTER: genuinely dense, unsimplified academic prose that
//   assumes background knowledge, where the first problem is not what a
//   sentence implies but what it SAYS, because the sentence itself nests three
//   or four clauses before its own main verb arrives. The second, equally new
//   axis is TIME: a C2 reader meets this density inside a realistic time
//   budget, not with unlimited re-reading.
//
//     act 1   the problem: a C2 learner, timing herself, loses the clock
//             inside a single 52-word sentence; the explicit line between
//             what c1.20 already taught and what this lesson adds
//     act 2   l’armature de la phrase: finding a dense sentence's own subject
//             and main verb FIRST, before resolving any subordinate clause
//     act 3   les réserves empilées: academic hedging stacked two or three
//             deep in one sentence (il semble que... dans une certaine
//             mesure... sous réserve de...), and what is actually being
//             asserted underneath the stack
//     act 4   attribuer la citation: whose claim a sentence is reporting (the
//             author's own, a named scholar's, cited only to be qualified or
//             refuted), from the reporting verb and the parenthetical
//             reference, never from tone alone
//     act 5   la chaîne nominale: a chain of abstract nominalisations that
//             compresses two or three plain clauses into one dense noun
//             phrase, unpacked back into those plain clauses (NOT who acts
//             behind it, which is c1.20's "l'agent caché"; this is how MUCH a
//             single noun phrase is carrying)
//     act 6   l’architecture de l’argument: one full academic paragraph read
//             for its backbone, its hedges, its citation and its nominal
//             chains AT ONCE, the four moves held together on new material
//     act 7   lire contre le chronomètre: the realistic time constraint
//             itself, named as a skill (skim for the backbone and the
//             citation first, resolve a hedge only if the question needs it),
//             against the three reflexes that burn the clock
//     act 8   ta lecture dense: one complete original academic text (four
//             paragraphs, a thesis, two opposing citations, a hedged close),
//             read once, cold, under the lesson's own stated time budget, then
//             the quiz, review and roundup. R SHAPE: recognition only, no
//             writing-production task and no spoken scenario (the brief for
//             this lesson is explicit that CE@c2 is extraction, not
//             production; a learner is never asked to write or perform an
//             academic register here, only to extract its structure).
//
// ══════════════════════════════════════════════════════════════════════════
//  SOURCES AND ORIGINALITY (the copyright rule this lesson follows)
// ══════════════════════════════════════════════════════════════════════════
//
//   Every academic-register text below (EXTRACT_DEMO, EXTRACT_PARAGRAPH,
//   EXTRACT_FULL and every dense practice sentence in acts 2-5) is an ORIGINAL
//   PASTICHE, newly written for this lesson in the register of Le Monde
//   « Idées » / Cairn.info general-interest academic essays. NONE of it is
//   copied from, or closely modelled on, any specific live article: no
//   paywalled or public text was read or quoted while drafting this file.
//   This is the same rule c2.02 (Maupassant, public domain, copied verbatim
//   because its copyright has expired) and c2.07 (poetry, also public domain)
//   both follow, applied in the opposite direction: this lesson's style
//   reference is NOT public domain, so nothing is copied, only the REGISTER
//   is imitated, in freshly authored sentences.
//
//   The topic (digital reading, attention and reading practices) is a
//   deliberately GENERAL-academic one, not the property of any single
//   discipline: no legal, medical or philosophical technical vocabulary is
//   used anywhere in this file, since law, medicine and philosophy already
//   each have their own dedicated C1 vocabulary lesson (langage-juridique,
//   francais-soins, notions-morales / notions-politiques). The vocabulary
//   taught here is argumentative and rhetorical (hedging, citation,
//   nominalisation, backbone-finding), not topical.
//
//   Every named scholar (H. Noguès, T. Verrier, Delmas) and every cited
//   finding is INVENTED for this lesson, exactly as Léna/Samuel/Professeure
//   Aubin are invented in c2.02: no living or historical academic is named,
//   quoted or attributed a real finding anywhere in this file.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE RULES APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner. No em dash. No U+203F tie. Never "honnête" / "honest"
//   / "honnêtement" in any language. Typographic ’ throughout. French only on
//   the learner surface; English authored behind every `en` field and every
//   trailing « EN: », never shown by default. Citations by trail position in
//   French words only (« la leçon 20 du C1 »), never a raw id.

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §A. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c2.12',
  seq: 12,
  title: 'Dense Academic Reading',
  sub: 'Lire des textes académiques denses',
  canDo: "Can read a genuinely dense, unsimplified general-academic text (argumentative structure, hedged claims, citation conventions, chains of abstract nominalisation) and extract its thesis, its stacked qualifications, who is being cited for what and how a compressed noun phrase unpacks into plain clauses, inside a realistic time budget, without first needing to resolve stance or irony",
  prereqUnitIds: ['c1.20'],
} as const;

export const LESSON_ID = 'c2.12.l1';
export const THEME = 'strategies-de-comprehension';
export const LEVEL = 'c2' as const;

/** ONE block. c2.11 (expert listening, wave 3) holds 2200-2399, inside the
 *  same widen, not touched here. */
export const ID_RANGES = [[2400, 2599]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. HOW THIS LESSON NAMES ITS PREDECESSOR
 *
 *  c1.20 is in `seed.json` with a real `seq` (v88 publish, C1-BUILD-LOG.md),
 *  so its citation is read straight from the seed, the same way c2.02 already
 *  does it for its own four C1 predecessors.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const n = SEQ.get(unitId);
  if (!n) throw new Error(`c2.12: ${unitId} is not in the seed`);
  return `la leçon ${n} du C1`;
}

export const C120_UNIT = 'c1.20';
export const C120_REF = refFr(C120_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. c1.20's REFRAME, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as C120_REFRAME, REFRAME_EN as C120_REFRAME_EN } from '../c1/lire-entre-les-lignes-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE REFRAME AND THE ONE METAPHOR
 *
 *  DÉPLIER (unfolding). c1.20's image was the filigrane, a sheet held up to
 *  the light for what shows through it. This lesson's problem is prior to
 *  that: a sentence folded shut, clause inside clause, that must be unfolded,
 *  panel by panel, before any light can be held up to it at all, and unfolded
 *  before the clock runs out.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un texte dense se déplie, phrase par phrase, avant que l’horloge ne s’arrête.';
export const REFRAME_EN = 'A dense text unfolds, sentence by sentence, before the clock runs out.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Un texte académique dense se lit comme un texte normal, seulement plus lentement.',
    why: "False where les actes 2 à 5 ont à tenir : relire plus lentement ne suffit pas si l’on ne sait pas d’abord lequel, dans quatre ou cinq groupes de mots, porte le verbe principal de la phrase ; la lenteur sans méthode perd autant de temps qu’elle en gagne.",
  },
  {
    text: 'Comprendre une phrase dense, c’est comprendre chaque mot qu’elle contient.',
    why: "False where l’acte 7 a à tenir : sous un temps limité, un lecteur de C2 résout l’armature et la citation d’abord, et ne déplie une réserve empilée que si la question posée l’exige ; chaque mot n’a pas le même poids.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE ANCHOR TEXTS (original academic-register pastiche, §Sources above)
 * ══════════════════════════════════════════════════════════════════════════ */

/** ACT 1. One sentence, 52 words, nesting four clauses before its own main
 *  verb. The demonstration of the problem itself. */
export const EXTRACT_DEMO =
  "Si l’hypothèse d’un affaiblissement généralisé des capacités de lecture longue, que certains chercheurs rattachent sans détour à la multiplication des sollicitations numériques, mérite d’être prise au sérieux, elle ne saurait toutefois être validée sans que soit d’abord interrogée la définition même de ce que l’on entend, dans cette littérature, par « lecture longue ».";

export const EXTRACT_DEMO_EN =
  "If the hypothesis of a generalised weakening of long-reading capacities, one that some researchers link directly to the multiplication of digital stimuli, deserves to be taken seriously, it cannot however be validated without first questioning the very definition of what this body of research means by \"long reading\".";

/** ACT 6. One full paragraph, backbone + stacked hedge + one citation + one
 *  nominal chain, held together on NEW material. */
export const EXTRACT_PARAGRAPH =
  "Si l’on admet, non sans quelque réserve, que la fragmentation des supports de lecture modifie la nature même de l’attention qu’elle requiert, on comprend mal pourquoi cette fragmentation serait systématiquement interprétée comme un appauvrissement plutôt que comme une simple redistribution des capacités cognitives disponibles. C’est précisément ce que suggère, selon une formule reprise par plusieurs commentateurs, l’hypothèse d’une « attention polymorphe », capable de se répartir entre plusieurs tâches sans que chacune en soit nécessairement amoindrie (Delmas, 2020). Cette hypothèse, séduisante par sa capacité à expliquer l’absence de déclin mesurable des performances cognitives globales, laisse cependant entière la question, plus étroite, de la persistance de l’effort attentionnel sur la durée propre à la lecture longue.";

export const EXTRACT_PARAGRAPH_EN =
  "If one admits, not without some reservation, that the fragmentation of reading media changes the very nature of the attention it requires, it is hard to see why this fragmentation would be systematically read as an impoverishment rather than as a simple redistribution of available cognitive capacities. This is precisely what is suggested, according to a formula taken up by several commentators, by the hypothesis of a \"polymorphous attention\", capable of being spread across several tasks without each one necessarily being diminished (Delmas, 2020). This hypothesis, appealing for its ability to explain the absence of a measurable decline in overall cognitive performance, nonetheless leaves entirely open the narrower question of the persistence of attentional effort over the span proper to long reading.";

/** ACT 8. The closing anchor: four paragraphs, a thesis, two opposing
 *  citations, a hedged, scope-limited close. ~315 words. */
export const EXTRACT_P1 =
  "Il est devenu courant, dans la presse comme dans certains cercles académiques, d’attribuer à la multiplication des écrans un déclin généralisé de l’attention et, par extension, de la capacité à mener à son terme une lecture longue. Une telle généralisation mérite toutefois d’être examinée avec prudence, dans la mesure où elle repose moins sur une mesure rigoureuse des pratiques effectives que sur une impression largement partagée, qu’aucune enquête systématique n’est, à ce jour, venue pleinement corroborer.";

export const EXTRACT_P1_EN =
  "It has become common, in the press as in certain academic circles, to attribute to the multiplication of screens a generalised decline in attention and, by extension, in the capacity to see a long reading through to its end. Such a generalisation nonetheless deserves to be examined with caution, insofar as it rests less on a rigorous measurement of actual practices than on a widely shared impression, which no systematic survey has, to date, fully corroborated.";

export const EXTRACT_P2 =
  "C’est du moins ce que soutient H. Noguès, pour qui la baisse apparente du temps consacré à la lecture d’ouvrages longs s’expliquerait moins par une incapacité nouvelle à soutenir l’attention que par une redistribution des pratiques de lecture elles-mêmes, désormais fragmentées en de multiples supports dont l’addition, loin d’être négligeable, échapperait aux instruments de mesure traditionnels (Noguès, 2021). Cette hypothèse, si elle n’est pas sans fondement, ne saurait cependant être retenue sans réserve.";

export const EXTRACT_P2_EN =
  "This is at least what H. Noguès argues, for whom the apparent drop in time spent reading long works would be explained less by a new incapacity to sustain attention than by a redistribution of reading practices themselves, now fragmented across multiple media whose sum, far from being negligible, would escape traditional measurement instruments (Noguès, 2021). This hypothesis, while not without foundation, cannot however be accepted without reservation.";

export const EXTRACT_P3 =
  "T. Verrier objecte en effet que la mise en évidence, par plusieurs enquêtes convergentes, d’une diminution mesurable du nombre d’ouvrages achevés chaque année ne peut être entièrement imputée à un simple déplacement de l’attention vers d’autres supports, et qu’elle invite au contraire à s’interroger sur l’érosion progressive, chez un nombre croissant de lecteurs, de la disposition même à soutenir un effort cognitif prolongé sans interruption extérieure (Verrier, 2023). La question posée par Verrier n’est donc pas celle du temps global consacré à la lecture, mais bien celle de l’endurance attentionnelle qu’exige la lecture longue en tant que telle.";

export const EXTRACT_P3_EN =
  "T. Verrier objects, in fact, that the finding, by several convergent surveys, of a measurable decrease in the number of books finished each year cannot be entirely attributed to a simple shift of attention toward other media, and that it instead invites questioning of the progressive erosion, among a growing number of readers, of the very disposition to sustain a prolonged cognitive effort without outside interruption (Verrier, 2023). The question Verrier raises is therefore not that of the overall time spent reading, but rather that of the attentional endurance that long reading, as such, demands.";

export const EXTRACT_P4 =
  "On se gardera, pour conclure, de trancher entre ces deux lectures concurrentes du même phénomène, chacune reposant sur des données partielles et sur des définitions de la lecture longue qui ne se recouvrent qu’imparfaitement. Il paraît en revanche raisonnable d’admettre, à tout le moins, que le débat ne saurait se réduire à la seule question du temps d’écran, et qu’il engage plus largement la manière dont une société donnée organise, valorise et transmet les conditions mêmes de l’attention prolongée.";

export const EXTRACT_P4_EN =
  "To conclude, we shall refrain from deciding between these two competing readings of the same phenomenon, each resting on partial data and on definitions of long reading that overlap only imperfectly. It does however seem reasonable to admit, at the very least, that the debate cannot be reduced to the question of screen time alone, and that it more broadly concerns the way a given society organises, values and passes on the very conditions of sustained attention.";

export const EXTRACT_FULL = `${EXTRACT_P1}\n\n${EXTRACT_P2}\n\n${EXTRACT_P3}\n\n${EXTRACT_P4}`;
export const EXTRACT_FULL_EN = `${EXTRACT_P1_EN}\n\n${EXTRACT_P2_EN}\n\n${EXTRACT_P3_EN}\n\n${EXTRACT_P4_EN}`;

export const SOURCE_NOTE =
  "Texte original, écrit pour cette leçon dans le registre des essais académiques généraux (Le Monde « Idées », Cairn.info) : ce n’est pas une citation d’un article réel. H. Noguès, T. Verrier et Delmas sont des chercheurs inventés, comme Léna et Samuel le sont dans la leçon 2 du C2.";

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. ROW CONSTRUCTORS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
/** Named for a recap or a wrong-claim card: never released, never spoken. */
const SR = ['sentence', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, tags, drills, version: 1,
  grammarPoints: ['lecture-academique-dense'], ...extra,
});
const phrase = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  ...sent(n, fr, en, tags, drills, extra), kind: 'phrase',
});
/** A fragment copied word for word from this file's own pastiche extracts
 *  (§E): real, correct C2 French, FCVR by default, never SR. */
const frag = (n: number, fr: string, en: string, tags: string[]): Row =>
  sent(n, fr, en, ['extrait-dense', ...tags]);

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. ACT 1 ROWS — Le problème : une phrase, une horloge (2400-2409)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT1_ROWS: Row[] = [
  sent(2400, "Nadia s’entraîne pour l’épreuve en se chronométrant, et elle arrive au bout du temps sans avoir fini la première page.", 'Nadia is practising for the exam by timing herself, and reaches the end of the time without finishing the first page.', ['scene-probleme']),
  sent(2401, "Elle relit la même phrase une troisième fois, et comprend chaque mot sans trouver ce que la phrase affirme vraiment.", 'She reads the same sentence a third time, and understands every word without finding what the sentence actually asserts.', ['scene-probleme']),
  sent(2402, "La leçon 20 du C1 t’a appris à lire ce qu’une phrase laisse entendre ; cette leçon t’apprend à lire une phrase que tu n’arrives pas encore à suivre.", 'The lesson 20 of C1 taught you to read what a sentence implies; this lesson teaches you to read a sentence you cannot yet follow at all.', ['plan']),
  sent(2403, "Un texte académique dense n’est pas plus subtil qu’un texte du C1 : il est plus replié sur lui-même, clause dans clause.", 'A dense academic text is not more subtle than a C1 text: it is more folded in on itself, clause inside clause.', ['regle']),
  phrase(2404, 'une phrase repliée', 'a folded-up sentence', ['metalangage']),
  phrase(2405, 'le temps qui presse', 'time running out', ['metalangage']),
  sent(2406, "Cette leçon ne demande pas d’interpréter un sous-entendu : elle demande de déplier une phrase dense avant que le temps ne manque.", 'This lesson does not ask you to interpret an implication: it asks you to unfold a dense sentence before time runs out.', ['plan']),
  sent(2407, "Devine le sens, sans dictionnaire : de quoi cette phrase unique parle-t-elle, même sans en comprendre chaque mot.", 'Guess the meaning, no dictionary: what is this single sentence about, even without understanding every word in it.', ['lecture-question']),
  sent(2408, "Une phrase dense n’a presque toujours qu’un seul verbe principal, même quand elle en compte huit ou neuf au total.", 'A dense sentence almost always has only one main verb, even when it contains eight or nine verbs in total.', ['bilan']),
  sent(2409, "Déplier une phrase, puis une page, puis un texte entier contre l’horloge : c’est exactement ce que cette leçon enseigne.", 'Unfolding a sentence, then a page, then a whole text against the clock: that is exactly what this lesson teaches.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. ACT 2 ROWS — L’armature de la phrase (2410-2424)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT2_ROWS: Row[] = [
  sent(2410, "Dans une phrase dense, le sujet et le verbe principaux arrivent souvent après deux, trois, voire quatre groupes de mots qui ne sont que des subordonnées.", 'In a dense sentence, the main subject and verb often arrive after two, three, even four word groups that are only subordinate clauses.', ['regle']),
  sent(2411, "Bien que la plupart des études consultées convergent, du moins en apparence, vers une explication unique, la prudence méthodologique impose de ne pas trancher trop vite.", 'Although most of the studies consulted converge, at least in appearance, on a single explanation, methodological caution requires not deciding too quickly.', ['pratique-dense']),
  sent(2412, "Dans la phrase précédente, l’armature est « la prudence méthodologique impose de ne pas trancher trop vite » ; tout le reste prépare cette seule affirmation.", 'In the previous sentence, the backbone is "la prudence méthodologique impose de ne pas trancher trop vite"; everything else only sets up that single claim.', ['analyse']),
  sent(2413, "Ce que plusieurs chercheurs, sans toujours s’accorder sur les termes exacts, ont fini par admettre, c’est que la question reste largement ouverte.", 'What several researchers, without always agreeing on the exact terms, eventually came to admit, is that the question remains largely open.', ['pratique-dense']),
  sent(2414, "Repérer l’armature d’une phrase, c’est chercher d’abord qui fait quoi, et ignorer, pour un premier passage, tout ce qui vient avant ce verbe.", 'Finding a sentence\'s backbone means looking first for who does what, and ignoring, on a first pass, everything that comes before that verb.', ['regle']),
  phrase(2415, 'l’armature de la phrase', 'the sentence\'s backbone', ['metalangage']),
  phrase(2416, 'une subordonnée d’appui', 'a scaffolding clause', ['metalangage']),
  sent(2417, "Une virgule après une longue subordonnée annonce presque toujours que le sujet réel de la phrase arrive juste après elle.", 'A comma after a long subordinate clause almost always signals that the sentence\'s real subject arrives right after it.', ['regle']),
  sent(2418, "Alors même que le phénomène décrit demeure, selon plusieurs sources, difficile à mesurer précisément, son existence même n’est contestée par personne.", 'Even as the described phenomenon remains, according to several sources, difficult to measure precisely, its very existence is contested by no one.', ['pratique-dense']),
  sent(2419, "Dans cette dernière phrase, l’armature tient en quatre mots : « son existence n’est contestée ». Le reste prépare cette seule affirmation.", 'In this last sentence, the backbone fits in four words: "son existence n’est contestée". Everything else only sets up that single claim.', ['analyse']),
  sent(2420, "Un lecteur qui cherche d’abord le verbe principal perd moins de temps qu’un lecteur qui traduit chaque subordonnée au fur et à mesure.", 'A reader who looks for the main verb first loses less time than a reader who translates each subordinate clause as it comes.', ['regle']),
  sent(2421, "Quelle que soit la méthode retenue, et malgré les réserves qu’elle inspire à certains, le constat de départ, lui, ne varie guère d’une étude à l’autre.", 'Whatever method is chosen, and despite the reservations it inspires in some, the starting observation itself barely varies from one study to another.', ['pratique-dense']),
  phrase(2422, 'le premier passage', 'the first pass', ['metalangage']),
  sent(2423, "Avant de comprendre chaque clause, trouve d’abord celle qui reste vraie si l’on supprime toutes les autres : c’est l’armature.", 'Before understanding every clause, first find the one that stays true if you remove all the others: that is the backbone.', ['regle']),
  sent(2424, "Une phrase dense se déplie toujours de l’extérieur vers l’intérieur : d’abord l’armature, ensuite chaque subordonnée qu’elle porte.", 'A dense sentence always unfolds from the outside in: first the backbone, then each subordinate clause it carries.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. ACT 3 ROWS — Les réserves empilées (2425-2439)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT3_ROWS: Row[] = [
  sent(2425, "Il semble, dans une certaine mesure du moins, et sous réserve d’un examen plus approfondi, que cette tendance se confirme.", 'It seems, to some extent at least, and pending a more thorough examination, that this trend is being confirmed.', ['pratique-dense']),
  sent(2426, "Cette phrase empile trois réserves (« il semble », « dans une certaine mesure », « sous réserve de ») avant d’arriver à sa seule affirmation : que la tendance se confirme.", 'This sentence stacks three hedges ("il semble", "dans une certaine mesure", "sous réserve de") before reaching its one claim: that the trend is being confirmed.', ['analyse']),
  sent(2427, "Une réserve empilée ne nie jamais l’affirmation qu’elle entoure : elle en limite seulement la force, la portée ou la certitude.", 'A stacked hedge never denies the claim it surrounds: it only limits its force, its scope or its certainty.', ['regle']),
  sent(2428, "Tout porte à croire, sans que l’on puisse pour autant l’affirmer avec certitude, que le phénomène décrit n’est pas isolé.", 'Everything suggests, though it cannot for all that be stated with certainty, that the described phenomenon is not isolated.', ['pratique-dense']),
  phrase(2429, 'une réserve empilée', 'a stacked hedge', ['metalangage']),
  phrase(2430, 'la force d’une affirmation', 'the force of a claim', ['metalangage']),
  sent(2431, "Compter les réserves d’une phrase avant de la comprendre évite une erreur fréquente : prendre une hypothèse prudente pour un fait établi.", 'Counting a sentence\'s hedges before understanding it avoids a frequent error: mistaking a cautious hypothesis for an established fact.', ['regle']),
  sent(2432, "Non sans quelque hésitation, et conscient des limites de l’échantillon étudié, l’auteur avance néanmoins une explication qu’il juge la plus probable.", 'Not without some hesitation, and aware of the limits of the sample studied, the author nonetheless puts forward an explanation he judges the most likely.', ['pratique-dense']),
  sent(2433, "Dans la phrase précédente, deux réserves précèdent l’affirmation, mais l’affirmation finit par arriver : « l’auteur avance une explication ».", 'In the previous sentence, two hedges precede the claim, but the claim does arrive in the end: "l’auteur avance une explication".', ['analyse']),
  sent(2434, "Plus les réserves s’empilent, plus l’affirmation qu’elles entourent mérite d’être prise au sérieux : un auteur prudent ne hasarde pas une idée faible sous tant de précautions.", 'The more the hedges stack up, the more the claim they surround deserves to be taken seriously: a cautious author does not risk a weak idea under so many precautions.', ['regle']),
  sent(2435, "Ne pas confondre une réserve avec un refus : « on ne saurait exclure que » laisse la porte ouverte, elle ne la ferme pas.", 'Do not confuse a hedge with a refusal: "on ne saurait exclure que" leaves the door open, it does not close it.', ['regle']),
  phrase(2436, 'laisser la porte ouverte', 'to leave the door open', ['metalangage']),
  sent(2437, "Pour ainsi dire acquis dans certains milieux, ce constat reste, ailleurs, loin de faire consensus.", 'Taken as more or less settled in some circles, this finding remains, elsewhere, far from commanding consensus.', ['pratique-dense']),
  sent(2438, "Une phrase sans aucune réserve, dans un texte académique, affirme en général un fait vérifié plutôt qu’une interprétation.", 'A sentence with no hedge at all, in an academic text, generally states a verified fact rather than an interpretation.', ['regle']),
  sent(2439, "Déplier une réserve empilée, c’est séparer ce qui est affirmé de ce qui en limite seulement la force.", 'Unfolding a stacked hedge means separating what is being claimed from what only limits its force.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. ACT 4 ROWS — Attribuer la citation (2440-2454)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT4_ROWS: Row[] = [
  sent(2440, "Un texte académique cite rarement une source pour la seule répéter : il la cite pour s’appuyer sur elle, la nuancer, ou la réfuter.", 'An academic text rarely cites a source only to repeat it: it cites it to rely on it, to qualify it, or to refute it.', ['regle']),
  sent(2441, "« La lecture longue n’est pas un simple exercice d’endurance », rappelle un chercheur, qui y voit plutôt une discipline de l’attention.", '"Long reading is not a mere exercise in endurance", a researcher recalls, seeing it instead as a discipline of attention.', ['pratique-dense']),
  sent(2442, "Le verbe « rappelle » signale que l’auteur reprend cette citation comme un fait déjà admis, pas comme une idée neuve qu’il faudrait prouver.", 'The verb "rappelle" signals that the author takes up this quotation as an already accepted fact, not as a new idea still to be proven.', ['analyse']),
  sent(2443, "Selon un second chercheur, le phénomène observé s’expliquerait davantage par un changement de disposition que par un simple déplacement de l’attention.", 'According to a second researcher, the observed phenomenon would be explained more by a change in disposition than by a simple shift of attention.', ['pratique-dense']),
  sent(2444, "« Selon X » attribue la phrase entière qui suit à X, pas à l’auteur du texte : une erreur fréquente est de lire cette phrase comme la position de l’auteur lui-même.", '"Selon X" attributes the whole sentence that follows to X, not to the text\'s author: a frequent error is reading that sentence as the author\'s own position.', ['regle']),
  phrase(2445, 'le verbe qui attribue', 'the attributing verb', ['metalangage']),
  phrase(2446, 'reprendre pour nuancer', 'citing in order to qualify', ['metalangage']),
  sent(2447, "Si un troisième chercheur avance qu’une capacité se redistribue sans perte globale, cette lecture laisse, on l’a vu, une question plus étroite entière.", 'If a third researcher argues that a capacity redistributes itself without overall loss, this reading leaves, as we have seen, a narrower question entirely open.', ['pratique-dense']),
  sent(2448, "« Si X avance que... cette lecture laisse... entière » cite X pour mieux montrer, ensuite, la limite de sa position : une citation suivie d’une réserve de l’auteur.", '"Si X avance que... cette lecture laisse... entière" cites X only to then show the limit of X\'s position: a citation followed by the author\'s own reservation.', ['analyse']),
  sent(2449, "Un chiffre entre parenthèses après un nom propre, dans ce registre, renvoie presque toujours à l’année d’une publication, jamais à une page au hasard.", 'A number in parentheses after a proper name, in this register, almost always refers to a publication year, never to a random page.', ['regle']),
  sent(2450, "« Objecte », « conteste », « réfute » annoncent un désaccord avec la source citée ; « confirme », « rappelle », « rejoint » annoncent un appui.", '"Objecte", "conteste", "réfute" announce disagreement with the cited source; "confirme", "rappelle", "rejoint" announce support.', ['regle']),
  sent(2451, "Deux chercheurs cités dans le même paragraphe ne défendent pas forcément deux positions opposées : parfois, l’un répond à une question que l’autre n’a jamais posée.", 'Two researchers cited in the same paragraph do not necessarily defend two opposite positions: sometimes, one answers a question the other never asked.', ['regle']),
  phrase(2452, 'une position opposée', 'an opposite position', ['metalangage']),
  sent(2453, "Avant de résumer un paragraphe cité, demande toujours : cette phrase est-elle la mienne, celle de l’auteur, ou celle de la source qu’il cite.", 'Before summarising a cited paragraph, always ask: is this sentence mine, the author\'s own, or the cited source\'s.', ['regle']),
  sent(2454, "Attribuer une citation, c’est savoir, à chaque phrase, qui parle : l’auteur du texte, ou la source qu’il convoque.", 'Attributing a citation means knowing, at every sentence, who is speaking: the text\'s own author, or the source it calls on.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. ACT 5 ROWS — La chaîne nominale (2455-2469)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT5_ROWS: Row[] = [
  sent(2455, "Une chaîne nominale compresse deux ou trois phrases simples en un seul groupe de noms abstraits, sans jamais perdre l’information, seulement sa forme la plus lisible.", 'A nominal chain compresses two or three simple sentences into a single group of abstract nouns, never losing the information, only its most readable form.', ['regle']),
  sent(2456, "La prise en compte insuffisante, dans la plupart des enquêtes existantes, de la diversité des pratiques de lecture numérique, explique une partie des résultats contradictoires.", 'The insufficient taking into account, in most existing surveys, of the diversity of digital reading practices, explains part of the contradictory results.', ['pratique-dense']),
  sent(2457, "Dépliée, la chaîne précédente devient : « la plupart des enquêtes existantes ne prennent pas suffisamment en compte le fait que les pratiques de lecture numérique sont diverses ».", 'Unfolded, the previous chain becomes: "la plupart des enquêtes existantes ne prennent pas suffisamment en compte le fait que les pratiques de lecture numérique sont diverses".', ['analyse']),
  sent(2458, "Déplier une chaîne nominale, c’est retrouver, pour chaque nom abstrait, le verbe et le sujet qu’il remplace.", 'Unfolding a nominal chain means recovering, for each abstract noun, the verb and the subject it stands in for.', ['regle']),
  sent(2459, "L’érosion progressive de la disposition à soutenir un effort attentionnel prolongé touche, selon cette étude, un nombre croissant de lecteurs.", 'The progressive erosion of the disposition to sustain a prolonged attentional effort affects, according to this study, a growing number of readers.', ['pratique-dense']),
  sent(2460, "Dépliée, la chaîne précédente devient : « un nombre croissant de lecteurs sont de moins en moins disposés à soutenir un effort attentionnel prolongé ».", 'Unfolded, the previous chain becomes: "un nombre croissant de lecteurs sont de moins en moins disposés à soutenir un effort attentionnel prolongé".', ['analyse']),
  phrase(2461, 'une chaîne nominale', 'a nominal chain', ['metalangage']),
  phrase(2462, 'déplier une chaîne', 'unfolding a chain', ['metalangage']),
  sent(2463, "Compter trois noms abstraits à la suite dans un même groupe (« la prise en compte de la diversité des pratiques ») signale presque toujours une chaîne à déplier, pas une idée simple.", 'Counting three abstract nouns in a row inside the same group ("la prise en compte de la diversité des pratiques") almost always signals a chain to unfold, not a simple idea.', ['regle']),
  sent(2464, "La généralisation rapide d’un déclin de l’attention, sans mesure rigoureuse des pratiques effectives, inquiète certains chercheurs plus que le déclin lui-même.", 'The rapid generalisation of a decline in attention, without rigorous measurement of actual practices, worries some researchers more than the decline itself.', ['pratique-dense']),
  sent(2465, "Dépliée, la chaîne précédente devient : « certains chercheurs généralisent rapidement un déclin de l’attention, sans mesurer rigoureusement les pratiques effectives, et cela les inquiète plus que le déclin lui-même ».", 'Unfolded, the previous chain becomes: "certains chercheurs généralisent rapidement un déclin de l’attention, sans mesurer rigoureusement les pratiques effectives, et cela les inquiète plus que le déclin lui-même".', ['analyse']),
  sent(2466, "Une chaîne nominale non dépliée se lit souvent comme une seule idée ; dépliée, elle révèle deux ou trois affirmations distinctes, parfois enchaînées par une cause.", 'An un-unfolded nominal chain often reads as a single idea; unfolded, it reveals two or three distinct claims, sometimes linked by a cause.', ['regle']),
  sent(2467, "Le remède à une chaîne nominale n’est pas de la traduire mot à mot, mais de se demander, pour chaque nom, qui fait quoi.", 'The remedy for a nominal chain is not to translate it word for word, but to ask, for each noun, who does what.', ['regle']),
  phrase(2468, 'qui fait quoi', 'who does what', ['metalangage']),
  sent(2469, "Une phrase dense porte souvent son armature, ses réserves ET une chaîne nominale à la fois : les trois se déplient l’un après l’autre, jamais tous en même temps.", 'A dense sentence often carries its backbone, its hedges AND a nominal chain all at once: the three are unfolded one after another, never all at the same time.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. ACT 6 ROWS — L’architecture de l’argument (2470-2479)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT6_ROWS: Row[] = [
  frag(2470, "Si l’on admet, non sans quelque réserve, que la fragmentation des supports de lecture modifie la nature même de l’attention qu’elle requiert.", 'If one admits, not without some reservation, that the fragmentation of reading media changes the very nature of the attention it requires.', ['armature']),
  frag(2471, "on comprend mal pourquoi cette fragmentation serait systématiquement interprétée comme un appauvrissement plutôt que comme une simple redistribution des capacités cognitives disponibles.", 'it is hard to see why this fragmentation would be systematically read as an impoverishment rather than as a simple redistribution of available cognitive capacities.', ['armature']),
  frag(2472, "non sans quelque réserve", 'not without some reservation', ['reserve']),
  frag(2473, "l’hypothèse d’une « attention polymorphe », capable de se répartir entre plusieurs tâches sans que chacune en soit nécessairement amoindrie (Delmas, 2020).", 'the hypothesis of a "polymorphous attention", capable of being spread across several tasks without each one necessarily being diminished (Delmas, 2020).', ['citation']),
  frag(2474, "la persistance de l’effort attentionnel sur la durée propre à la lecture longue.", 'the persistence of attentional effort over the span proper to long reading.', ['chaine-nominale']),
  sent(2475, "Dans ce paragraphe, l’armature tient en une question : pourquoi lirait-on la fragmentation comme une perte plutôt que comme une redistribution.", 'In this paragraph, the backbone fits in one question: why would fragmentation be read as a loss rather than as a redistribution.', ['analyse']),
  sent(2476, "Delmas (2020) est cité pour une hypothèse qui explique l’absence de déclin global, pas pour régler la question plus étroite de l’endurance en lecture longue, que le paragraphe laisse lui-même ouverte.", 'Delmas (2020) is cited for a hypothesis that explains the absence of a global decline, not to settle the narrower question of endurance in long reading, which the paragraph itself leaves open.', ['analyse']),
  sent(2477, "Tenir l’armature, la réserve, la citation et la chaîne nominale en même temps, sur le même paragraphe, c’est l’architecture complète de l’argument.", 'Holding the backbone, the hedge, the citation and the nominal chain together, on the same paragraph, is the argument\'s complete architecture.', ['bilan']),
  sent(2478, "Un paragraphe académique dense tient rarement une seule idée simple : il tient une question, une réserve sur sa propre généralité, et une limite explicitement reconnue.", 'A dense academic paragraph rarely holds a single simple idea: it holds a question, a reservation about its own generality, and an explicitly acknowledged limit.', ['regle']),
  sent(2479, "La grille à quatre colonnes (armature, réserve, citation, chaîne) ne remplace pas la lecture : elle vérifie qu’aucun des quatre n’a été oublié.", 'The four-column grid (backbone, hedge, citation, chain) does not replace reading: it checks that none of the four has been forgotten.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. ACT 7 ROWS — Lire contre le chronomètre (2480-2494)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT7_ROWS: Row[] = [
  sent(2480, "Sous un temps limité, un lecteur de C2 ne lit pas plus vite : il choisit ce qu’il résout en entier, et ce qu’il laisse de côté au premier passage.", 'Under limited time, a C2 reader does not read faster: they choose what to resolve in full, and what to set aside on the first pass.', ['regle']),
  sent(2481, "Le premier réflexe qui brûle le chronomètre est de relire une phrase dense plusieurs fois, dans l’ordre, en espérant qu’elle devienne plus claire sans changer de méthode.", 'The first reflex that burns the clock is rereading a dense sentence several times, in order, hoping it will become clearer without changing method.', ['piege']),
  sent(2482, "Le remède : chercher l’armature une seule fois, puis ne revenir sur une réserve ou une chaîne nominale que si une question posée l’exige vraiment.", 'The remedy: look for the backbone just once, then return to a hedge or a nominal chain only if a question asked genuinely requires it.', ['remede']),
  sent(2483, "Le deuxième réflexe qui brûle le chronomètre est de vouloir vérifier chaque citation jusqu’à la source complète, au lieu de retenir seulement qui dit quoi.", 'The second reflex that burns the clock is wanting to verify every citation down to its full source, instead of only retaining who says what.', ['piege']),
  sent(2484, "Le remède : noter en une ligne qui est cité et pour quelle idée, sans chercher à juger si la source citée a raison dans l’absolu.", 'The remedy: note in one line who is cited and for which idea, without trying to judge whether the cited source is right in absolute terms.', ['remede']),
  sent(2485, "Le troisième réflexe qui brûle le chronomètre est de résoudre toutes les réserves empilées d’une phrase avant de savoir si la question posée en a besoin.", 'The third reflex that burns the clock is resolving every stacked hedge in a sentence before knowing whether the question asked even needs it.', ['piege']),
  sent(2486, "Le remède : repérer qu’une réserve existe, sans la développer, et n’y revenir que si une question demande exactement son degré de certitude.", 'The remedy: notice that a hedge exists, without unpacking it, and come back to it only if a question asks exactly about its degree of certainty.', ['remede']),
  phrase(2487, 'brûler le chronomètre', 'to burn the clock', ['metalangage']),
  phrase(2488, 'le premier passage, puis le second', 'the first pass, then the second', ['metalangage']),
  sent(2489, "Un budget réaliste pour un paragraphe dense de huit à dix lignes tient en deux passages : un premier pour l’armature de chaque phrase, un second pour ce que la question exige vraiment.", 'A realistic budget for a dense eight-to-ten-line paragraph fits in two passes: a first for each sentence\'s backbone, a second for exactly what the question requires.', ['regle']),
  sent(2490, "Lire contre le chronomètre n’est pas lire moins bien : c’est lire dans un ordre qui protège d’abord ce qui répond à la question posée.", 'Reading against the clock is not reading worse: it is reading in an order that protects, first, whatever answers the question asked.', ['bilan']),
  sent(2491, "Avant l’épreuve, chronomètre-toi sur un seul paragraphe dense, puis vérifie lequel des trois réflexes t’a coûté le plus de temps.", 'Before the exam, time yourself on a single dense paragraph, then check which of the three reflexes cost you the most time.', ['regle']),
  sent(2492, "Un texte de quatre paragraphes rédigé pour cette leçon tient, dans ce budget, en moins de temps qu’il n’en faudrait pour résoudre une seule phrase mot à mot.", 'A four-paragraph text written for this lesson fits, within that budget, into less time than it would take to resolve a single sentence word for word.', ['bilan']),
  sent(2493, "Le réflexe à corriger n’est jamais de lire plus vite : c’est de résoudre dans le bon ordre, l’armature d’abord, le détail ensuite, seulement s’il le faut.", 'The reflex to correct is never reading faster: it is resolving in the right order, the backbone first, the detail after, only if needed.', ['bilan']),
  sent(2494, "Les trois pièges (relire sans méthode, vérifier chaque source, résoudre chaque réserve) partagent un seul remède : décider d’abord ce que la question exige réellement.", 'The three traps (rereading without method, verifying every source, resolving every hedge) share a single remedy: deciding first what the question actually requires.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. ACT 8 ROWS — Ta lecture dense (2495-2507)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT8_ROWS: Row[] = [
  frag(2495, "Une telle généralisation mérite toutefois d’être examinée avec prudence.", 'Such a generalisation nonetheless deserves to be examined with caution.', ['armature']),
  frag(2496, "aucune enquête systématique n’est, à ce jour, venue pleinement corroborer", 'no systematic survey has, to date, fully corroborated', ['reserve']),
  frag(2497, "C’est du moins ce que soutient H. Noguès, pour qui la baisse apparente du temps consacré à la lecture d’ouvrages longs s’expliquerait moins par une incapacité nouvelle à soutenir l’attention que par une redistribution des pratiques de lecture elles-mêmes.", 'This is at least what H. Noguès argues, for whom the apparent drop in time spent reading long works would be explained less by a new incapacity to sustain attention than by a redistribution of reading practices themselves.', ['citation']),
  frag(2498, "T. Verrier objecte en effet que la mise en évidence, par plusieurs enquêtes convergentes, d’une diminution mesurable du nombre d’ouvrages achevés chaque année ne peut être entièrement imputée à un simple déplacement de l’attention vers d’autres supports.", 'T. Verrier objects, in fact, that the finding, by several convergent surveys, of a measurable decrease in the number of books finished each year cannot be entirely attributed to a simple shift of attention toward other media.', ['citation']),
  frag(2499, "l’érosion progressive, chez un nombre croissant de lecteurs, de la disposition même à soutenir un effort cognitif prolongé sans interruption extérieure", 'the progressive erosion, among a growing number of readers, of the very disposition to sustain a prolonged cognitive effort without outside interruption', ['chaine-nominale']),
  frag(2500, "On se gardera, pour conclure, de trancher entre ces deux lectures concurrentes du même phénomène.", 'To conclude, we shall refrain from deciding between these two competing readings of the same phenomenon.', ['armature']),
  sent(2501, "La thèse que ce texte examine n’est jamais affirmée par l’auteur lui-même : elle est d’abord posée, puis mise en doute, dès la première phrase du premier paragraphe.", 'The thesis this text examines is never asserted by the author themself: it is first stated, then cast into doubt, from the very first sentence of the first paragraph.', ['analyse']),
  sent(2502, "Noguès et Verrier ne défendent pas deux réponses opposées à la même question : Noguès explique une baisse de temps par une redistribution, Verrier pose une question distincte, celle de l’endurance.", 'Noguès and Verrier do not defend two opposite answers to the same question: Noguès explains a drop in time by a redistribution, Verrier raises a distinct question, that of endurance.', ['analyse']),
  sent(2503, "Le dernier paragraphe ne choisit ni Noguès ni Verrier : il élargit la question du temps d’écran individuel à la manière dont une société transmet l’attention prolongée.", 'The last paragraph picks neither Noguès nor Verrier: it widens the question from individual screen time to the way a society passes on sustained attention.', ['analyse']),
  sent(2504, "Un texte académique dense annonce souvent, dans son premier paragraphe, la réserve même qui limitera sa propre thèse : cela ne doit jamais surprendre un lecteur de C2.", 'A dense academic text often announces, in its first paragraph, the very reservation that will limit its own thesis: this should never surprise a C2 reader.', ['regle']),
  sent(2505, "Lire ce texte en quatre paragraphes contre un budget de temps réaliste, c’est appliquer, dans l’ordre, l’armature, la réserve, l’attribution de chaque citation et la chaîne nominale.", 'Reading this four-paragraph text against a realistic time budget means applying, in order, the backbone, the hedge, the attribution of each citation and the nominal chain.', ['bilan']),
  sent(2506, "La lecture dense n’ajoute aucun sens caché au texte : elle retrouve seulement ce que le texte dit déjà, replié dans sa propre syntaxe.", 'Dense reading adds no hidden meaning to the text: it only recovers what the text already says, folded into its own syntax.', ['bilan']),
  sent(2507, "La leçon 20 du C1 t’aurait demandé la portée exacte de la conclusion de ce texte ; cette leçon te demande seulement de retrouver sa structure, sous le temps.", 'The lesson 20 of C1 would have asked you for the exact scope of this text\'s conclusion; this lesson only asks you to recover its structure, under time.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. ACTS, FLATTENED
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS, ACT7_ROWS, ACT8_ROWS];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** No row is reused from c1.20 or any other lesson in this draft: no
 *  Postgres session was opened while authoring this file (§A above), so a
 *  cross-file id could not be verified against the real published rows.
 *  Kept as an export so the lesson file's assembly code is identical in
 *  shape to every other B1+/C1/C2 lesson. */
export const IMPORTED: Record<string, string[]> = {
  act1: [], act2: [], act3: [], act4: [], act5: [], act6: [], act7: [], act8: [],
};
export const IMPORT_IDS: string[] = [...new Set(Object.values(IMPORTED).flat())];

export const NOT_DECK_ABLE: string[] = ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id);
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];
