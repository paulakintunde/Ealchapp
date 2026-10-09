// c2.02.l1 « L’analyse littéraire intégrale » — the authored corpus, the
// identity block, the anchor text and the citation constants. DRAFT, the
// second lesson of the C2 band, wave 1. To RICH-LESSON-STANDARD.md and the
// B1-BUILD-PLAYBOOK.md house rules, with the C2 rules of C2-BUILD-PLAN.md
// ("What is different at C2") and the c2.02 brief in C2-BUILD-LOG.md ("Author
// c2.02 — « L’analyse littéraire intégrale »"). Structural model: this
// lesson's own corpus/lesson files are built on the shape
// `c2/precision-nuance-corpus.ts` (c2.01) already proved: identity block,
// `refFr()` reading trail positions straight from `seed.json`, imported
// REFRAME quotes, row constructors, acts as arrays flattened at the end.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
// No Postgres read or write was made while authoring this file: the id home
// (litterature, 2000-2199, widened to c2) and the sub-theme append
// (« l’analyse littéraire intégrale ») are both already recorded as done in
// C2-BUILD-PLAN.md, 2026-10-09, read-only against live Postgres by the
// planning pass. This file only needs to stay inside the claimed block.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE SECOND C2 LESSON, and the one that FIRST analyses a FULL extract as
//   one integrated whole. No new grammar (C2-BUILD-PLAN.md: "C2 adds no new
//   grammar"): every act reads the SAME anchor text through a different
//   lens, then holds all the lenses together.
//
//     act 1   the problem: naming one thing at a time is not an analysis;
//             meet the full extract; recap c1.02, c1.03, c1.19, c1.14
//     act 2   le registre: the narration's soigné/littéraire register against
//             the dialogue's oral one, inside the SAME extract
//     act 3   la voix narrative: discours direct, indirect, indirect libre;
//             the narrator's ironic distance in "elle fut simple... mais
//             malheureuse comme une déclassée"
//     act 4   la structure: exposition (imparfait, duratif) giving way to the
//             basculement (passé simple, un événement), the hinge the text's
//             own tense shift marks
//     act 5   les figures en réseau: anaphore, énumération, antithèse,
//             gradation, read for what they DO together, not named alone
//     act 6   les quatre fils ensemble: one combined reading grid holding
//             register + voice + structure + figure for the SAME lines
//     act 7   choisir la bonne lecture: one plausible-but-wrong analytical
//             claim against the integrated one, for several passages
//     act 8   le piège qui arrête l’analyse trop tôt: naming a device without
//             tying it to the other three threads, the besetting fault this
//             lesson exists to cure
//     act 9   ta lecture intégrale: the model analysis, the plan, the
//             scenario, the TASK, the quiz, the review, the roundup
//
//   NOT OWNED, CITED ONLY (all published, v88, C1 CLOSED):
//     - the passé antérieur in narrative sequence is c1.02's (« la leçon 2 du
//       C1 »); act 4 cites it once, by trail position, for the ADJACENT tense
//       move (imparfait → passé simple) this extract actually makes, never
//       re-teaching the passé antérieur itself.
//     - the literary sequence of moods (concordance du subjonctif) is c1.03's
//       (« la leçon 3 du C1 »); recapped once in act 1, never re-used as
//       content, since this extract carries no literary subjunctive.
//     - naming a figure's effect is c1.19's (« la leçon 19 du C1 »); acts 5
//       to 8 build past it into READING SEVERAL FIGURES TOGETHER as one
//       cumulative effect, never re-teaching a single figure in isolation.
//     - reacting to a short text, then moving from reaction to analysis
//       through FORM, is c1.14's (« la leçon 14 du C1 »), the closest
//       whole-lesson analogue and the one this lesson must clearly surpass:
//       c1.14 built twelve SEPARATE short anchor texts, one move each; this
//       lesson holds four moves on ONE full extract, at once, by the end.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. ID DISCIPLINE
// ══════════════════════════════════════════════════════════════════════════
//
//   THEME `litterature` (domain `fondations`) was widened b1-c1 -> b1-c2 in
//   Postgres 2026-10-09 (C2-BUILD-PLAN.md, verified by read-back). This
//   lesson owns block 2000-2199 AND NOTHING ELSE. c1.02 holds 1600-1799,
//   c1.03 holds 1800-1999, both published C1 blocks, neither touched here.
//   c2.07 (poetry translation, wave 2) is pencilled for 2200-2399, also not
//   touched here.
//
//   USED: see §H below for the exact range; the remainder of 2000-2199 is
//   left free inside the claimed block for the pre-review pass, the same
//   margin c2.01 kept (.1571-.1599 free out of its own 200-block).
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. THE ANCHOR TEXT, SOURCED AND VERIFIED
// ══════════════════════════════════════════════════════════════════════════
//
//   Guy de Maupassant, « La Parure » (1884), the opening of the story, from
//   Contes du jour et de la nuit (éd. Flammarion, 1885). Maupassant died in
//   1893: the work is public domain everywhere, well past any term. Sourced
//   2026-10-09 from the French Wikisource proofread text (Page:Maupassant -
//   Contes du jour et de la nuit 1885.djvu/75 to /79, "Textes validés"
//   quality, i.e. machine-proofread against page scans), fetched via the
//   wiki's own `action=raw` export so the quotation is the source wikitext
//   itself, never a paraphrase or a summary. Two silent, mechanical fixes
//   only: the page-break hyphenation of "bibe-/-lots" was rejoined to
//   "bibelots" (an artefact of the two-page scan, not an editorial choice),
//   and the "{{Mme}}" template was expanded to its plain text "Mme". No word
//   is added, removed or reordered. Every apostrophe is already the
//   typographic ’ in the source, matching this file's own house rule.
//
//   EXTRACT_A is the portrait (exposition): six paragraphs, ending on "de
//   désespoir et de détresse." EXTRACT_B is the inciting scene (the
//   envelope, the dialogue): the paragraph break between them is the
//   original's own "* * *" (an {{Astérisme}} template in the source
//   wikitext), kept here as the plain row of asterisks Wikisource renders it
//   as, since it is itself a structural marker act 4 teaches from. The full
//   extract runs 2026-10-09 word count: 437 words (A) + 268 words (B) = 705
//   words, inside the "harder than C1, not merely longer" envelope
//   C2-BUILD-PLAN.md sets (300-500 words was C1's; this one runs longer
//   because it is read as ONE integrated whole, not because length alone
//   makes it harder).
//
//   EXTRACT_EN is this file's OWN gloss translation for the EN-pill toggle,
//   not a published translation: competent, literal enough to support the
//   French, never claimed as authoritative. Labelled as such wherever shown.
//
// ══════════════════════════════════════════════════════════════════════════
//  §C. QUOTED FRAGMENTS AS CORPUS ROWS
// ══════════════════════════════════════════════════════════════════════════
//
//   Acts 2 to 8 reuse short fragments of EXTRACT_A/EXTRACT_B as individual
//   corpus rows (tag `citation-parure`), copied word for word from the same
//   verified source, never re-typed from memory and never paraphrased. Each
//   is real, correct, C2-level French, so unlike c2.01's wrong-register
//   decoys these are NOT marked unreleasable: FCVR (flashcard, voiceflash,
//   review) is the default, the same way c1.19's verified literary
//   quotations were released for review. Rows that are this file's OWN
//   analytical claims (correct or deliberately wrong, for a "choose the
//   right reading" check) are tagged `claim-correcte` / `claim-plausible`
//   and carry SR (sentence, review only) when the claim is wrong, so a
//   learner is never quizzed on a false analytical claim as if it were
//   correct French to produce.
//
// ══════════════════════════════════════════════════════════════════════════
//  §D. WHAT IS NOT REUSED, AND WHY
// ══════════════════════════════════════════════════════════════════════════
//
//   No row from c1.02, c1.03, c1.19 or c1.14 is reused by id. Those lessons
//   are published (v88) and resolve through Postgres and the content packs,
//   not through the local `seed.json` cut this draft can read without a
//   database connection. Each predecessor is cited the house way instead:
//   its REFRAME is imported by name from its own corpus file and quoted
//   verbatim (never retyped), and its trail position is read straight out of
//   `seed.json`, where all 24 C1 units already carry a real `seq` (v88
//   publish). Every analytical sentence in this lesson is newly authored for
//   c2.02, and the anchor text is newly sourced for it (c1.02/c1.03/c1.19
//   each used their own different extracts; c1.14 used twelve short original
//   or sourced texts, none of them this one).
//
// ══════════════════════════════════════════════════════════════════════════
//  §E. FACT CHECK
// ══════════════════════════════════════════════════════════════════════════
//
//   REAL, HISTORICAL, PUBLIC DOMAIN: Guy de Maupassant (1850-1893) and the
//   text of « La Parure », quoted as described in §B. No claim is made about
//   Maupassant beyond authorship and date, both well-established.
//   PEOPLE, ALL INVENTED (the frame story around the analysis): Léna
//   Castonguay (a literature student), Professeure Noémie Aubin (her
//   seminar leader), Samuel Okonkwo (a classmate).
//   REAL PLACES, AS PLACES ONLY: none named; the seminar's city is left
//   unnamed, continuing the house convention of not over-specifying a
//   generic academic setting.
//   LOW-HEAT TOPICS ONLY: a student's literature seminar, a draft commentary
//   reviewed by a professor, a classmate's competing reading. No living
//   person, no political topic, no health claim, no legal fact.
//   QUOTATIONS: every French sentence tagged `citation-parure` is Maupassant,
//   verified per §B; every other quotation (the fictional seminar dialogue)
//   is invented for this lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  §F. HOUSE RULES APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; the professor uses vous with her students, the
//   students use tu with each other. No em dash. No U+203F tie. Never
//   "honnête" / "honest" / "honnêtement". Typographic ’ throughout, including
//   inside the quoted Maupassant (already typographic in the source).
//   French only on the learner surface; English authored behind every `en`
//   field and every trailing « EN: », never shown by default. Citations by
//   trail position in French words only, never a raw id.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c2.02',
  seq: 2,
  title: 'Literary French: Complete Analysis',
  sub: "L’analyse littéraire intégrale",
  canDo: "Can read a full literary extract and produce a structured analysis that holds register, narrative voice, structure and at least one figure of style together, as one integrated reading, rather than naming each in isolation",
  prereqUnitIds: ['c1.14', 'c1.02', 'c1.03', 'c1.19'],
} as const;

export const LESSON_ID = 'c2.02.l1';
export const THEME = 'litterature';
export const LEVEL = 'c2' as const;

/** ONE block. c1.02 holds 1600-1799, c1.03 holds 1800-1999, both published,
 *  neither touched here. c2.07 (poetry, wave 2) is pencilled for 2200-2399. */
export const ID_RANGES = [[2000, 2199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  All 24 C1 units are in `seed.json` with a real `seq` (v88 publish,
 *  C1-BUILD-LOG.md), so a C1 citation is read straight from the seed, the
 *  same way a B1/B2 citation always has been, and the same way c2.01 already
 *  does it.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const n = SEQ.get(unitId);
  if (!n) throw new Error(`c2.02: ${unitId} is not in the seed`);
  return `la leçon ${n} du C1`;
}

export const C102_UNIT = 'c1.02';
export const C103_UNIT = 'c1.03';
export const C119_UNIT = 'c1.19';
export const C114_UNIT = 'c1.14';

export const C102_REF = refFr(C102_UNIT);
export const C103_REF = refFr(C103_UNIT);
export const C119_REF = refFr(C119_UNIT);
export const C114_REF = refFr(C114_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as C102_REFRAME, REFRAME_EN as C102_REFRAME_EN } from '../c1/passe-anterieur-corpus.ts';
export { REFRAME as C103_REFRAME, REFRAME_EN as C103_REFRAME_EN } from '../c1/concordance-litteraire-corpus.ts';
export { REFRAME as C119_REFRAME, REFRAME_EN as C119_REFRAME_EN } from '../c1/figures-effet-corpus.ts';
export { REFRAME as C114_REFRAME, REFRAME_EN as C114_REFRAME_EN } from '../c1/analyser-oeuvre-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. THE REFRAME AND THE ONE METAPHOR
 *
 *  LES QUATRE FILS. The extract itself names "tentures orientales", "soie
 *  ancienne", "tapisseries" — Mathilde's own fantasy is textile. The lesson
 *  reuses that image on purpose: a full analysis is a tapestry woven from
 *  four threads (register, voice, structure, figure); pulled apart, one
 *  thread shows nothing of the pattern. Act 1 states this directly; acts 2
 *  to 5 hand the learner one thread at a time; act 6 holds all four at once.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Lire une œuvre, c’est tenir quatre fils ensemble : le registre, la voix, la structure, la figure.";
export const REFRAME_EN = 'Reading a work means holding four threads together: register, voice, structure, figure.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Nommer une figure ou un temps verbal suffit à faire une analyse.',
    why: `False where acts 5 à 8 ont à tenir : c’est exactement ce que ${C102_REF}, ${C103_REF} et ${C119_REF} enseignaient chacune, une compétence à la fois, et ce que ${C114_REF} dépassait déjà sur un texte court. Ici, nommer une anaphore sans dire dans quelle voix, quel registre et quel moment du récit elle tombe n’est pas une lecture intégrale : c’est un fil tiré seul.`,
  },
  {
    text: 'Le registre d’un texte reste le même du début à la fin.',
    why: "False where act 2 a à tenir : le même extrait passe du registre soigné de la narration (« leur finesse native, leur instinct d’élégance ») au registre oral du dialogue (« Tiens, dit-il, voici quelque chose pour toi »), sans qu’aucune règle grammaticale ne change entre les deux.",
  },
  {
    text: 'Une figure produit toujours le même effet, où qu’elle apparaisse.',
    why: "False where act 6 a à tenir : la même anaphore (« elle songeait aux… ») change d’effet selon qu’elle tombe dans l’exposition, à l’imparfait, porté par une voix narrative proche de Mathilde, ou qu’elle tomberait, par hypothèse, dans un dialogue à l’oral : le fil de la figure ne se lit jamais seul.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. THE ANCHOR TEXT
 * ══════════════════════════════════════════════════════════════════════════ */

export const EXTRACT_A =
  "C’était une de ces jolies et charmantes filles, nées, comme par une erreur du destin, dans une famille d’employés. Elle n’avait pas de dot, pas d’espérances, aucun moyen d’être connue, comprise, aimée, épousée par un homme riche et distingué ; et elle se laissa marier avec un petit commis du ministère de l’instruction publique.\n\nElle fut simple ne pouvant être parée, mais malheureuse comme une déclassée ; car les femmes n’ont point de caste ni de race, leur beauté, leur grâce et leur charme leur servant de naissance et de famille. Leur finesse native, leur instinct d’élégance, leur souplesse d’esprit, sont leur seule hiérarchie, et font des filles du peuple les égales des plus grandes dames.\n\nElle souffrait sans cesse, se sentant née pour toutes les délicatesses et tous les luxes. Elle souffrait de la pauvreté de son logement, de la misère des murs, de l’usure des sièges, de la laideur des étoffes. Toutes ces choses, dont une autre femme de sa caste ne se serait même pas aperçue, la torturaient et l’indignaient. La vue de la petite Bretonne qui faisait son humble ménage éveillait en elle des regrets désolés et des rêves éperdus. Elle songeait aux antichambres muettes, capitonnées avec des tentures orientales, éclairées par de hautes torchères de bronze, et aux deux grands valets en culotte courte qui dorment dans les larges fauteuils, assoupis par la chaleur lourde du calorifère. Elle songeait aux grands salons vêtus de soie ancienne, aux meubles fins portant des bibelots inestimables, et aux petits salons coquets, parfumés, faits pour la causerie de cinq heures avec les amis les plus intimes, les hommes connus et recherchés dont toutes les femmes envient et désirent l’attention.\n\nQuand elle s’asseyait, pour dîner, devant la table ronde couverte d’une nappe de trois jours, en face de son mari qui découvrait la soupière en déclarant d’un air enchanté : « Ah ! le bon pot-au-feu ! je ne sais rien de meilleur que cela… », elle songeait aux dîners fins, aux argenteries reluisantes, aux tapisseries peuplant les murailles de personnages anciens et d’oiseaux étranges au milieu d’une forêt de féerie ; elle songeait aux plats exquis servis en des vaisselles merveilleuses, aux galanteries chuchotées et écoutées avec un sourire de sphinx, tout en mangeant la chair rose d’une truite ou des ailes de gélinotte.\n\nElle n’avait pas de toilettes, pas de bijoux, rien. Et elle n’aimait que cela ; elle se sentait faite pour cela. Elle eût tant désiré plaire, être enviée, être séduisante et recherchée.\n\nElle avait une amie riche, une camarade de couvent qu’elle ne voulait plus aller voir, tant elle souffrait en revenant. Et elle pleurait pendant des jours entiers, de chagrin, de regret, de désespoir et de détresse.";

export const EXTRACT_A_EN =
  "She was one of those pretty, charming girls, born, as if by some error of fate, into a family of clerks. She had no dowry, no prospects, no way of being known, understood, loved, married by a rich and distinguished man; and she let herself be married off to a minor clerk at the Ministry of Public Instruction.\n\nShe stayed plain, having no means to be adorned, but unhappy as though she had fallen from her rightful class, for women have no caste and no lineage: their beauty, their grace and their charm serve them as birth and family. Their native refinement, their instinct for elegance, their flexible mind are their only hierarchy, and make the daughters of the people the equals of the greatest ladies.\n\nShe suffered endlessly, feeling herself born for every refinement and every luxury. She suffered from the poverty of her lodging, the shabbiness of the walls, the worn chairs, the ugliness of the fabrics. All these things, which another woman of her station would not even have noticed, tormented and outraged her. The sight of the little Breton girl who did her humble housework stirred in her desolate regrets and wild dreams. She dreamed of silent antechambers, padded with oriental hangings, lit by tall bronze torch-stands, and of two tall footmen in knee breeches dozing in wide armchairs, drowsy from the heavy warmth of the stove. She dreamed of grand drawing-rooms dressed in old silk, of fine furniture bearing priceless trinkets, and of small, pretty, scented sitting rooms made for five o’clock chats with the closest friends, well-known and sought-after men whose attention every woman envies and desires.\n\nWhen she sat down to dinner, at the round table covered with a three-day-old cloth, across from her husband, who would uncover the soup tureen declaring with a delighted air: \"Ah! Good old pot-au-feu! I know nothing better than that…\", she dreamed of fine dinners, of gleaming silverware, of tapestries filling the walls with old figures and strange birds in the middle of an enchanted forest; she dreamed of exquisite dishes served on marvellous china, of gallantries whispered and heard with a sphinx-like smile, all while eating the pink flesh of a trout or a hazel-hen's wing.\n\nShe had no fine clothes, no jewels, nothing. And that was all she loved; she felt made for that. She would have so loved to please, to be envied, to be seductive and sought after.\n\nShe had a rich friend, a convent schoolmate she no longer wished to visit, she suffered so much on coming back from her. And she would weep for days on end, from grief, from regret, from despair and from distress.";

// Six dialogue turns in the source are set off by an opening em dash (the
// standard French "tiret cadratin" convention). The house style bans the em
// dash outright (it has cost a real defect before), so each turn is instead
// bracketed in guillemets here, open at the turn's first word and close at
// its last: no word is added, removed or reordered, only the punctuation
// convention marking a speaker's turn changes from a dash to a guillemet
// pair, the same choice many printed French editions make for dialogue.
export const EXTRACT_B =
  "Or, un soir, son mari rentra, l’air glorieux, et tenant à la main une large enveloppe.\n\n« Tiens, dit-il, voici quelque chose pour toi. »\n\nElle déchira vivement le papier et en tira une carte qui portait ces mots :\n\n« Le ministre de l’instruction publique et Mme Georges Ramponneau prient M. et Mme Loisel de leur faire l’honneur de venir passer la soirée à l’hôtel du ministère, le lundi 18 janvier. »\n\nAu lieu d’être ravie, comme l’espérait son mari, elle jeta avec dépit l’invitation sur la table, murmurant :\n\n« Que veux-tu que je fasse de cela ? »\n\n« Mais, ma chérie, je pensais que tu serais contente. Tu ne sors jamais, et c’est une occasion, cela, une belle ! J’ai eu une peine infinie à l’obtenir. Tout le monde en veut ; c’est très recherché et on n’en donne pas beaucoup aux employés. Tu verras là tout le monde officiel. »\n\nElle le regardait d’un œil irrité, et elle déclara avec impatience :\n\n« Que veux-tu que je me mette sur le dos pour aller là ? »\n\nIl n’y avait pas songé ; il balbutia :\n\n« Mais la robe avec laquelle tu vas au théâtre. Elle me semble très bien, à moi… »\n\nIl se tut, stupéfait, éperdu, en voyant que sa femme pleurait. Deux grosses larmes descendaient lentement des coins des yeux vers les coins de la bouche ; il bégaya :\n\n« Qu’as-tu ? qu’as-tu ? »";

export const EXTRACT_B_EN =
  "Now, one evening, her husband came home, looking triumphant, holding a large envelope in his hand.\n\n\"Here,\" he said, \"something for you.\"\n\nShe tore the paper open quickly and drew out a card bearing these words:\n\n\"The Minister of Public Instruction and Mme Georges Ramponneau request the honour of M. and Mme Loisel's company for an evening at the Ministry, on Monday the 18th of January.\"\n\nInstead of being delighted, as her husband had hoped, she threw the invitation on the table with annoyance, murmuring:\n\n\"What do you want me to do with that?\"\n\n\"But, my dear, I thought you would be pleased. You never go out, and this is an opportunity, a fine one! I had an infinite amount of trouble getting it. Everyone wants one; they are much sought after and not many go to clerks. You will see the whole official world there.\"\n\nShe looked at him with an irritated eye, and declared with impatience:\n\n\"What do you want me to put on my back to go there?\"\n\nHe had not thought of that; he stammered:\n\n\"Why, the dress you wear to the theatre. It seems quite nice to me…\"\n\nHe fell silent, stunned, at a loss, seeing that his wife was weeping. Two large tears slowly ran from the corners of her eyes toward the corners of her mouth; he faltered:\n\n\"What is it? What is it?\"";

export const EXTRACT_FULL = `${EXTRACT_A}\n\n* * *\n\n${EXTRACT_B}`;
export const EXTRACT_FULL_EN = `${EXTRACT_A_EN}\n\n* * *\n\n${EXTRACT_B_EN}`;

export const SOURCE_NOTE =
  "Guy de Maupassant, « La Parure » (1884), dans Contes du jour et de la nuit (éd. Flammarion, 1885), ouverture du conte. Texte du domaine public, vérifié mot pour mot sur Wikisource le 2026-10-09 (Page:Maupassant - Contes du jour et de la nuit 1885.djvu/75 à /79, qualité « Textes validés »).";

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. ROW CONSTRUCTORS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
/** Named for a recap or a wrong-claim card: never released, never spoken. */
const SR = ['sentence', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, tags, drills, version: 1,
  grammarPoints: ['analyse-litteraire-integrale'], ...extra,
});
const phrase = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  ...sent(n, fr, en, tags, drills, extra), kind: 'phrase',
});
/** A verified, word-for-word Maupassant fragment. Real, correct C2 French:
 *  FCVR by default (§C), never SR, unless a specific row overrides it. */
const cite = (n: number, fr: string, en: string, tags: string[]): Row =>
  sent(n, fr, en, ['citation-parure', ...tags]);

/* ══════════════════════════════════════════════════════════════════════════
 *  §M. ACT 1 ROWS — Le problème : un fil à la fois (2000-2013)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT1_ROWS: Row[] = [
  sent(2000, "Léna rend sa fiche de lecture : « Il y a une anaphore au paragraphe trois. »", "Léna hands in her reading note: \"There is an anaphora in paragraph three.\"", ['scene-probleme']),
  sent(2001, "La professeure lit la fiche et demande : « Une anaphore, mais pour dire quoi, portée par quelle voix, à quel moment du récit ? »", 'The professor reads the note and asks: "An anaphora, but saying what, carried by which voice, at which moment of the story?"', ['scene-probleme']),
  sent(2002, "Samuel a nommé le passé simple dans sa fiche, sans dire ce que ce temps fait au rythme du récit.", 'Samuel named the passé simple in his note, without saying what that tense does to the pace of the story.', ['scene-probleme']),
  sent(2003, "Une fiche qui nomme sans relier n’est pas encore une analyse.", 'A note that names without connecting is not yet an analysis.', ['regle']),
  sent(2004, "Cette leçon lit un seul extrait, en entier, à travers quatre fils tenus ensemble.", 'This lesson reads a single extract, in full, through four threads held together.', ['plan']),
  phrase(2005, 'une fiche de lecture', 'a reading note', ['metalangage']),
  phrase(2006, 'un fil tiré seul', 'a thread pulled alone', ['metalangage']),
  phrase(2007, 'une lecture intégrale', 'an integrated reading', ['metalangage']),
  sent(2008, "Le séminaire du jeudi lit cette semaine l’ouverture d’un conte de Maupassant.", 'This week, the Thursday seminar reads the opening of a short story by Maupassant.', ['scene-probleme']),
  sent(2009, "Devine le sens, sans dictionnaire : à quoi Mathilde pense-t-elle sans cesse dans cet extrait.", 'Guess the meaning, no dictionary: what does Mathilde think about constantly in this extract.', ['lecture-question']),
  sent(2010, "La professeure annonce : « À la fin du mois, chacun présente une analyse qui tient les quatre fils ensemble, pas un à la fois. »", 'The professor announces: "By the end of the month, each of you presents an analysis that holds the four threads together, not one at a time."', ['scene-probleme']),
  sent(2011, "Quatre fils, un seul tissu : le registre, la voix, la structure, la figure.", 'Four threads, one single fabric: register, voice, structure, figure.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §M. ACT 2 ROWS — Le registre, en deux voix (2014-2039)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT2_ROWS: Row[] = [
  cite(2014, "Leur finesse native, leur instinct d’élégance, leur souplesse d’esprit, sont leur seule hiérarchie.", 'Their native refinement, their instinct for elegance, their flexible mind are their only hierarchy.', ['registre-narration', 'soigne']),
  cite(2015, "Elle songeait aux antichambres muettes, capitonnées avec des tentures orientales.", 'She dreamed of silent antechambers, padded with oriental hangings.', ['registre-narration', 'litteraire']),
  cite(2016, "Tiens, dit-il, voici quelque chose pour toi.", 'Here, he said, something for you.', ['registre-dialogue', 'oral']),
  cite(2017, "Que veux-tu que je fasse de cela ?", 'What do you want me to do with that?', ['registre-dialogue', 'oral']),
  cite(2018, "Que veux-tu que je me mette sur le dos pour aller là ?", 'What do you want me to put on my back to go there?', ['registre-dialogue', 'oral']),
  cite(2019, "Ah ! le bon pot-au-feu ! je ne sais rien de meilleur que cela…", 'Ah! Good old pot-au-feu! I know nothing better than that…', ['registre-dialogue', 'oral']),
  sent(2020, "Le même extrait porte deux registres : la narration, soignée, presque savante, et le dialogue, oral et familier.", 'The same extract carries two registers: the narration, careful, almost scholarly, and the dialogue, oral and casual.', ['regle']),
  sent(2021, "« Leur souplesse d’esprit, sont leur seule hiérarchie » appartient au registre soigné de la narration.", '"Leur souplesse d’esprit, sont leur seule hiérarchie" belongs to the narration’s careful register.', ['analyse']),
  sent(2022, "« Ah ! le bon pot-au-feu ! » appartient au registre oral du mari, dans le dialogue.", '"Ah! le bon pot-au-feu!" belongs to the husband’s oral register, inside the dialogue.', ['analyse']),
  sent(2023, "Un même texte peut porter deux registres sans qu’aucune règle de grammaire ne change entre les deux.", 'A single text can carry two registers with no grammar rule changing between them.', ['regle']),
  sent(2024, "Le registre soigné de la narration juge Mathilde de loin ; le registre oral du dialogue la montre de près, dans l’instant.", "The narration’s careful register judges Mathilde from a distance; the dialogue’s oral register shows her up close, in the moment.", ['analyse']),
  sent(2025, "Repérer un registre ne suffit pas : il faut dire ce que ce choix fait au lecteur, à cet endroit précis du texte.", 'Spotting a register is not enough: you must say what that choice does to the reader, at that precise point in the text.', ['regle']),
  phrase(2026, 'le registre soigné', 'the careful/literary register', ['metalangage']),
  phrase(2027, 'le registre oral', 'the oral register', ['metalangage']),
  phrase(2028, 'un indice de registre', 'a register cue', ['metalangage']),
  sent(2029, "« Et elle n’aimait que cela ; elle se sentait faite pour cela » reste dans le registre soigné, malgré sa simplicité apparente.", '"Et elle n’aimait que cela ; elle se sentait faite pour cela" stays in the careful register, despite its apparent simplicity.', ['analyse']),
  sent(2030, "« Qu’as-tu ? qu’as-tu ? », répété, sonne oral et affolé, loin du calme de la narration qui l’entoure.", '"Qu’as-tu ? qu’as-tu ?", repeated, sounds oral and flustered, far from the calm of the narration around it.', ['analyse']),
  sent(2031, "Le passage du registre soigné au registre oral marque, ici, le passage de la pensée de Mathilde à sa parole.", "The shift from the careful register to the oral one marks, here, the shift from Mathilde's thought to her speech.", ['regle']),
  sent(2032, "Le mari balbutie et bégaie : deux verbes du registre courant qui disent, sans l’affirmer, sa maladresse.", 'He stammers and falters: two ordinary-register verbs that say, without stating it, his clumsiness.', ['analyse']),
  sent(2033, "Dans un dialogue de roman, un registre trop soigné pour le personnage sonne faux.", 'In a novel’s dialogue, a register too careful for the character rings false.', ['regle']),
  sent(2034, "Léna propose : « Le registre soigné dit comment Mathilde pense ; le registre oral dit comment son mari parle. »", 'Léna suggests: "The careful register says how Mathilde thinks; the oral register says how her husband speaks."', ['scene-analyse']),
  sent(2035, "Samuel objecte : « Mais Mathilde parle aussi, dans le dialogue, avec impatience, dans un registre tout aussi oral. »", 'Samuel objects: "But Mathilde also speaks, in the dialogue, with impatience, in a register just as oral."', ['scene-analyse']),
  sent(2036, "Léna corrige sa fiche : le registre soigné n’appartient pas à Mathilde seule, il appartient à la NARRATION, où qu’elle parle.", "Léna corrects her note: the careful register does not belong to Mathilde alone, it belongs to the NARRATION, wherever she speaks.", ['scene-analyse']),
  phrase(2037, 'la narration', 'the narration', ['metalangage']),
  phrase(2038, 'le dialogue', 'the dialogue', ['metalangage']),
  sent(2039, "Le registre d’une ligne se lit toujours contre le registre de la ligne qui la précède.", 'A line’s register is always read against the register of the line before it.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §M. ACT 3 ROWS — La voix narrative (2040-2064)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT3_ROWS: Row[] = [
  cite(2040, "Elle fut simple ne pouvant être parée, mais malheureuse comme une déclassée.", 'She stayed plain, having no means to be adorned, but unhappy as though fallen from her class.', ['voix-narrateur', 'ironie-narrative']),
  cite(2041, "Car les femmes n’ont point de caste ni de race.", 'For women have no caste and no lineage.', ['voix-narrateur', 'discours-generalisant']),
  cite(2042, "Elle songeait aux grands salons vêtus de soie ancienne.", 'She dreamed of grand drawing-rooms dressed in old silk.', ['voix-indirect-libre']),
  cite(2043, "Elle n’avait pas de toilettes, pas de bijoux, rien. Et elle n’aimait que cela ; elle se sentait faite pour cela.", 'She had no fine clothes, no jewels, nothing. And that was all she loved; she felt made for that.', ['voix-indirect-libre']),
  sent(2044, "Un narrateur peut RAPPORTER une pensée (« elle pensa que… »), ou la LAISSER PARLER sans l’annoncer : c’est le discours indirect libre.", 'A narrator can REPORT a thought ("elle pensa que…"), or let it speak without announcing it: that is free indirect discourse.', ['regle']),
  sent(2045, "« Elle songeait aux grands salons… » n’a pas de verbe déclaratif annoncé pour chaque pensée qui suit : la voix du narrateur se mêle à celle de Mathilde.", '"Elle songeait aux grands salons…" carries no declared reporting verb for every thought that follows: the narrator’s voice blends with Mathilde’s.', ['analyse']),
  sent(2046, "Le discours indirect libre rapproche le lecteur de ce que le personnage pense, sans jamais citer ses mots exacts entre guillemets.", 'Free indirect discourse brings the reader close to what the character thinks, without ever quoting her exact words in quotation marks.', ['regle']),
  sent(2047, "« Elle fut simple ne pouvant être parée, mais malheureuse comme une déclassée » n’est pas la pensée de Mathilde : c’est un jugement du narrateur, posé de l’extérieur.", '"Elle fut simple ne pouvant être parée, mais malheureuse comme une déclassée" is not Mathilde’s own thought: it is the narrator’s judgement, set from outside.', ['analyse']),
  sent(2048, "Ce jugement du narrateur tient une distance légèrement ironique : il nomme sa souffrance sans jamais tout à fait l’excuser.", "That narratorial judgement keeps a slightly ironic distance: it names her suffering without ever quite excusing it.", ['analyse']),
  sent(2049, "« Car les femmes n’ont point de caste ni de race » généralise la voix du narrateur au-delà de Mathilde seule, comme une maxime.", '"Car les femmes n’ont point de caste ni de race" widens the narrator’s voice beyond Mathilde alone, like a maxim.', ['analyse']),
  sent(2050, "Trois voix se croisent dans ce texte : le narrateur qui juge de loin, le narrateur qui pense tout près de Mathilde, et les personnages qui parlent eux-mêmes.", 'Three voices cross in this text: the narrator who judges from afar, the narrator who thinks right beside Mathilde, and the characters who speak for themselves.', ['bilan-partiel']),
  phrase(2051, 'le discours direct', 'direct speech', ['metalangage']),
  phrase(2052, 'le discours indirect libre', 'free indirect discourse', ['metalangage']),
  phrase(2053, 'la distance ironique', 'ironic distance', ['metalangage']),
  sent(2054, "Dans « Tiens, dit-il, voici quelque chose pour toi », le mari parle en discours direct : ses mots exacts, cités entre guillemets.", 'In "Tiens, dit-il, voici quelque chose pour toi", the husband speaks in direct speech: his exact words, quoted between guillemets.', ['analyse']),
  sent(2055, "Le discours direct donne la parole au personnage sans le filtre du narrateur ; le discours indirect libre garde ce filtre, mais discrètement.", 'Direct speech hands the floor to the character with no narrator filter; free indirect discourse keeps that filter, but discreetly.', ['regle']),
  sent(2056, "Samuel confond souvent le discours indirect libre avec la narration neutre : il faut chercher la pensée précise d’un seul personnage, jamais un fait objectif.", "Samuel often confuses free indirect discourse with neutral narration: look for one character's precise thought, never an objective fact.", ['scene-analyse']),
  sent(2057, "« Elle songeait aux dîners fins » appartient au discours indirect libre ; « le ministre de l’instruction publique... prient M. et Mme Loisel » appartient au discours direct, celui de la carte citée.", '"Elle songeait aux dîners fins" belongs to free indirect discourse; "le ministre de l’instruction publique… prient M. et Mme Loisel" belongs to direct speech, the quoted card itself.', ['analyse']),
  sent(2058, "Un carton d’invitation, cité en entier dans le récit, est lui aussi un discours direct : le document parle, non le narrateur.", "An invitation card, quoted in full inside the story, is also direct speech: the document itself speaks, not the narrator.", ['analyse']),
  sent(2059, "La voix narrative choisit QUI parle, de QUELLE distance, et c’est ce choix, plus que le contenu seul, qui construit Mathilde pour le lecteur.", 'The narrative voice chooses WHO speaks, from WHAT distance, and that choice, more than the content alone, builds Mathilde for the reader.', ['regle']),
  sent(2060, "Nommer « discours indirect libre » sans dire ce qu’il rapproche ou tient à distance n’avance pas plus qu’une fiche qui nomme une anaphore seule.", 'Naming "free indirect discourse" without saying what it brings close or holds at a distance gets you no further than a note that names an anaphora alone.', ['regle']),
  sent(2061, "Léna note : « La voix narrative, ici, oscille : elle juge de loin, puis elle pense tout près, puis elle laisse parler. »", 'Léna notes: "The narrative voice here shifts: it judges from afar, then thinks very close, then lets the characters speak."', ['scene-analyse']),
  sent(2062, "C’est cette oscillation, et non un seul procédé isolé, que l’analyse doit suivre d’un bout à l’autre de l’extrait.", 'It is that shifting, not one isolated device, that the analysis must track from one end of the extract to the other.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §M. ACT 4 ROWS — La structure : de l’exposition au basculement (2065-2089)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT4_ROWS: Row[] = [
  cite(2065, "Elle souffrait sans cesse, se sentant née pour toutes les délicatesses et tous les luxes.", 'She suffered endlessly, feeling herself born for every refinement and every luxury.', ['structure-exposition', 'imparfait']),
  cite(2066, "Or, un soir, son mari rentra, l’air glorieux, et tenant à la main une large enveloppe.", 'Now, one evening, her husband came home, looking triumphant, holding a large envelope in his hand.', ['structure-basculement', 'passe-simple']),
  cite(2067, "Elle déchira vivement le papier et en tira une carte.", 'She tore the paper open quickly and drew out a card.', ['structure-basculement', 'passe-simple']),
  cite(2068, "Et elle pleurait pendant des jours entiers, de chagrin, de regret, de désespoir et de détresse.", 'And she would weep for days on end, from grief, from regret, from despair and from distress.', ['structure-exposition', 'imparfait']),
  sent(2069, "L’exposition de ce texte dure six paragraphes et répond à une seule question : qui est Mathilde, et de quoi souffre-t-elle sans cesse.", "This text's exposition runs six paragraphs and answers one question: who is Mathilde, and what does she constantly suffer from.", ['regle']),
  sent(2070, `${Cap(C102_REF)} t’a appris le passé antérieur dans la suite du récit : un temps voisin, jamais celui-ci, mais qui t’a déjà appris à lire une forme verbale comme un signal de structure, pas seulement de temps.`, `${Cap(C102_REF)} taught you the passé antérieur in narrative sequence: a neighbouring tense, never this one, but it already taught you to read a verb form as a structural signal, not only a tense.`, ['recap']),
  sent(2071, "L’exposition est presque entièrement à l’imparfait : « souffrait », « songeait », « n’avait pas », « pleurait ». Ce temps dit la répétition, l’habitude, un état qui dure.", "The exposition runs almost entirely in the imparfait: \"souffrait\", \"songeait\", \"n’avait pas\", \"pleurait\". That tense says repetition, habit, a lasting state.", ['analyse']),
  sent(2072, "Le basculement narratif tombe sur « Or, un soir, son mari rentra » : « rentra » est un passé simple, un événement daté, unique, qui brise la répétition.", 'The narrative turn lands on "Or, un soir, son mari rentra": "rentra" is a passé simple, a single dated event that breaks the repetition.', ['analyse']),
  sent(2073, "« Or » et « un soir » marquent, avant même le verbe, qu’un événement va interrompre l’état décrit depuis le début.", '"Or" and "un soir" mark, even before the verb, that an event is about to interrupt the state described since the start.', ['analyse']),
  phrase(2074, "l’exposition", 'the exposition', ['metalangage']),
  phrase(2075, 'le basculement narratif', 'the narrative turn', ['metalangage']),
  phrase(2076, "l’imparfait duratif", 'the durative imparfait', ['metalangage']),
  sent(2077, "Le texte lui-même marque la coupure par trois astérisques entre les deux scènes, un signal typographique du même basculement.", 'The text itself marks the break with three asterisks between the two scenes, a typographic signal of the same turn.', ['analyse']),
  sent(2078, "Après le basculement, les verbes au passé simple s’enchaînent : « déchira », « tira », « jeta », « déclara », « se tut » : une suite d’actions ponctuelles, plus rapide que l’exposition.", 'After the turn, passé simple verbs chain together: "déchira", "tira", "jeta", "déclara", "se tut": a sequence of single actions, faster than the exposition.', ['analyse']),
  sent(2079, "Le rythme du récit accélère exactement au moment où l’imparfait cède au passé simple : la structure se lit dans la grammaire même du texte.", "The story's pace speeds up exactly where the imparfait gives way to the passé simple: the structure can be read in the text's own grammar.", ['regle']),
  sent(2080, "Repérer un changement de temps verbal ne suffit pas : il faut dire ce que ce changement FAIT au récit, à cet endroit précis.", 'Spotting a tense change is not enough: you must say what that change DOES to the story, at that precise point.', ['regle']),
  sent(2081, "Le dialogue qui suit le basculement ajoute une troisième vitesse : des répliques courtes, au présent, plus rapides encore que le passé simple qui les a amenées.", 'The dialogue that follows the turn adds a third speed: short lines, in the present tense, faster still than the passé simple that brought them.', ['analyse']),
  sent(2082, "Samuel propose : « L’exposition peint un état ; la scène de l’enveloppe raconte un événement ; le dialogue, lui, se joue en direct. » ", 'Samuel suggests: "The exposition paints a state; the envelope scene narrates an event; the dialogue, itself, plays out live."', ['scene-analyse']),
  sent(2083, "Trois vitesses, trois fonctions : décrire, raconter, faire parler. La structure tient les trois ensemble, dans l’ordre où le texte les place.", 'Three speeds, three jobs: describing, narrating, letting characters speak. The structure holds all three together, in the order the text sets them.', ['bilan']),
  sent(2084, "Une analyse qui s’arrête à « il y a un changement de temps » n’a encore rien dit de la structure.", 'An analysis that stops at "there is a tense change" has still said nothing about the structure.', ['regle']),
  sent(2085, "La structure d’un texte se prouve par un marqueur précis (un temps, un mot comme « or », une coupure typographique), jamais par une impression générale.", 'A text’s structure is proved by a precise marker (a tense, a word like "or", a typographic break), never by a general impression.', ['regle']),
  sent(2086, "Léna corrige sa fiche une deuxième fois : « La structure, ce n’est pas juste avant/après : c’est CE QUI, dans le texte, dit que l’avant est fini. »", 'Léna corrects her note a second time: "Structure isn’t just before/after: it is WHAT, in the text, says that the before is over."', ['scene-analyse']),
  sent(2087, "Le passage de l’imparfait au passé simple est, ici, exactement ce marqueur.", 'The shift from the imparfait to the passé simple is, here, exactly that marker.', ['bilan']),
  sent(2088, "La structure d’un texte littéraire se lit dans sa grammaire autant que dans son intrigue.", "A literary text's structure is read in its grammar as much as in its plot.", ['bilan']),
  sent(2089, "Avant de nommer une structure, cherche le mot ou le temps verbal qui la marque réellement dans la phrase.", 'Before naming a structure, find the word or tense that actually marks it in the sentence.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §M. ACT 5 ROWS — Les figures en réseau (2090-2114)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT5_ROWS: Row[] = [
  cite(2090, "Elle songeait aux antichambres muettes… Elle songeait aux grands salons vêtus de soie ancienne… elle songeait aux dîners fins.", 'She dreamed of silent antechambers… She dreamed of grand drawing-rooms dressed in old silk… she dreamed of fine dinners.', ['figure-anaphore']),
  cite(2091, "Elle n’avait pas de dot, pas d’espérances, aucun moyen d’être connue, comprise, aimée, épousée.", 'She had no dowry, no prospects, no way of being known, understood, loved, married.', ['figure-enumeration']),
  cite(2092, "Elle fut simple ne pouvant être parée, mais malheureuse comme une déclassée.", 'She stayed plain, having no means to be adorned, but unhappy as though fallen from her class.', ['figure-antithese']),
  cite(2093, "Elle souffrait sans cesse… Et elle pleurait pendant des jours entiers, de chagrin, de regret, de désespoir et de détresse.", 'She suffered endlessly… And she would weep for days on end, from grief, from regret, from despair and from distress.', ['figure-gradation']),
  sent(2094, `${Cap(C119_REF)} t’a appris à nommer une figure et à dire son effet. Ici, quatre figures travaillent ensemble sur un même extrait, jamais une seule à la fois.`, `${Cap(C119_REF)} taught you to name a figure and say its effect. Here, four figures work together on the same extract, never one alone.`, ['recap']),
  sent(2095, "« Elle songeait aux… », répété quatre fois, est une anaphore : la répétition construit l’obsession plus que chaque rêve pris isolément.", '"Elle songeait aux…", repeated four times, is an anaphora: the repetition builds the obsession more than any single dream taken alone.', ['analyse']),
  sent(2096, "« Pas de dot, pas d’espérances, aucun moyen » est une énumération : chaque manque s’ajoute au précédent, sans qu’aucun seul suffise à expliquer son malheur.", '"Pas de dot, pas d’espérances, aucun moyen" is an enumeration: each lack adds to the one before it, with no single one enough on its own to explain her unhappiness.', ['analyse']),
  sent(2097, "« Simple… mais malheureuse comme une déclassée » est une antithèse : deux états qui devraient s’exclure (la simplicité, le déclassement) tenus ensemble dans une seule phrase.", '"Simple… mais malheureuse comme une déclassée" is an antithesis: two states that should be mutually exclusive (plainness, a fall in rank) held together in a single sentence.', ['analyse']),
  sent(2098, "« Chagrin, regret, désespoir, détresse » est une gradation : quatre mots pour une même douleur, chacun plus fort que le précédent.", '"Chagrin, regret, désespoir, détresse" is a gradation: four words for the same pain, each stronger than the one before it.', ['analyse']),
  phrase(2099, "l’anaphore", 'anaphora', ['metalangage']),
  phrase(2100, "l’énumération", 'enumeration', ['metalangage']),
  phrase(2101, "l’antithèse", 'antithesis', ['metalangage']),
  phrase(2102, 'la gradation', 'gradation', ['metalangage']),
  sent(2103, "L’anaphore de l’acte 5 tombe dans le discours indirect libre de l’acte 3, au registre soigné de l’acte 2, pendant l’exposition de l’acte 4 : les quatre fils se croisent déjà dans une seule phrase.", 'The anaphora from act 5 lands inside the free indirect discourse of act 3, in the careful register of act 2, during the exposition of act 4: the four threads already cross inside one single sentence.', ['bilan-partiel']),
  sent(2104, "Sans la voix narrative (le discours indirect libre), l’anaphore ne serait qu’une liste ; c’est la voix qui la transforme en obsession intérieure de Mathilde.", 'Without the narrative voice (the free indirect discourse), the anaphora would be a mere list; it is the voice that turns it into Mathilde’s own inner obsession.', ['analyse']),
  sent(2105, "Sans la gradation, la dernière phrase du passage A dirait seulement qu’elle pleure ; la gradation dit qu’elle pleure de plus en plus profondément.", 'Without the gradation, the final sentence of extract A would only say that she weeps; the gradation says she weeps more and more deeply.', ['analyse']),
  sent(2106, "Nommer l’antithèse sans dire qu’elle oppose un fait social (simple) à un sentiment (malheureuse) manque son effet exact.", 'Naming the antithesis without saying it opposes a social fact (plain) to a feeling (unhappy) misses its exact effect.', ['regle']),
  sent(2107, "Une figure de style construit un effet ; elle ne le CONTIENT pas toute seule, indépendamment du reste de la phrase.", 'A figure of style builds an effect; it does not CONTAIN it alone, independently of the rest of the sentence.', ['regle']),
  sent(2108, "Samuel propose une lecture plausible mais incomplète : « L’anaphore montre que Mathilde rêve beaucoup. » Léna ajoute : « Elle montre surtout qu’elle ne peut pas s’arrêter de rêver. »", 'Samuel offers a plausible but incomplete reading: "The anaphora shows that Mathilde dreams a lot." Léna adds: "It mostly shows that she cannot stop dreaming."', ['scene-analyse']),
  sent(2109, "La bonne lecture d’une figure ajoute toujours un mot que la figure, seule, ne dit pas : ici, « ne peut pas s’arrêter ».", 'The right reading of a figure always adds a word that the figure alone does not say: here, "cannot stop".', ['regle']),
  sent(2110, "Quatre figures, un seul effet cumulé : montrer un désir si total qu’aucune liste ne peut l’épuiser.", 'Four figures, one cumulative effect: showing a desire so total that no list can exhaust it.', ['bilan']),
  sent(2111, "Une figure se lit toujours contre son registre, sa voix et sa place dans la structure, jamais seule.", 'A figure is always read against its register, its voice and its place in the structure, never alone.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §M. ACT 6 ROWS — Les quatre fils ensemble (2112-2134)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT6_ROWS: Row[] = [
  sent(2112, "Une grille à quatre colonnes tient, pour une même ligne, son registre, sa voix, sa place dans la structure et sa figure.", 'A four-column grid holds, for a single line, its register, its voice, its place in the structure and its figure.', ['grille']),
  sent(2113, "« Elle songeait aux grands salons vêtus de soie ancienne » : registre soigné, voix en discours indirect libre, exposition, anaphore.", '"Elle songeait aux grands salons vêtus de soie ancienne": careful register, free indirect discourse voice, exposition, anaphora.', ['grille-ligne']),
  sent(2114, "« Or, un soir, son mari rentra » : registre courant, voix du narrateur extérieur, basculement, aucune figure majeure, mais le marqueur « or ».", '"Or, un soir, son mari rentra": ordinary register, outside-narrator voice, the narrative turn, no major figure, but the marker "or".', ['grille-ligne']),
  sent(2115, "« Tiens, dit-il, voici quelque chose pour toi » : registre oral, discours direct, dialogue, aucune figure, une phrase nue qui tranche avec tout ce qui précède.", '"Tiens, dit-il, voici quelque chose pour toi": oral register, direct speech, dialogue, no figure, a bare sentence that contrasts with everything before it.', ['grille-ligne']),
  sent(2116, "Cette absence même de figure, juste après l’anaphore qui l’entoure, EST un effet : le réel, soudain, sans ornement.", 'That very absence of figure, right after the anaphora surrounding it, IS an effect: reality, suddenly, without ornament.', ['analyse']),
  sent(2117, "« Que veux-tu que je fasse de cela ? » : registre oral, discours direct, dialogue, une question qui refuse le cadeau sans l’expliquer.", '"Que veux-tu que je fasse de cela?": oral register, direct speech, dialogue, a question that refuses the gift without explaining it.', ['grille-ligne']),
  sent(2118, "Une seule ligne porte toujours ses quatre fils à la fois, même quand l’un d’eux, comme la figure, est absent plutôt que présent.", 'A single line always carries all four of its threads at once, even when one of them, like the figure, is absent rather than present.', ['regle']),
  sent(2119, "La grille ne remplace pas l’analyse ; elle sert à vérifier qu’aucun des quatre fils n’a été oublié pour une ligne donnée.", 'The grid does not replace the analysis; it is there to check that none of the four threads was forgotten for a given line.', ['regle']),
  sent(2120, "Samuel remplit sa grille sans la colonne « voix » : sa lecture reste vraie mais incomplète.", 'Samuel fills in his grid without the "voice" column: his reading stays true but incomplete.', ['scene-analyse']),
  sent(2121, "Léna complète : « Sans la voix, on ne sait pas si c’est Mathilde qui pense cela, ou le narrateur qui le juge. »", 'Léna adds: "Without the voice, we don’t know whether it is Mathilde thinking this, or the narrator judging it."', ['scene-analyse']),
  sent(2122, "Tenir les quatre fils ensemble, pour une seule ligne, prend plus de temps qu’en nommer un seul, et c’est exactement le travail que cette leçon enseigne.", 'Holding the four threads together, for a single line, takes longer than naming just one, and that is exactly the work this lesson teaches.', ['bilan']),
  sent(2123, "La grille appliquée à l’extrait entier montre un mouvement : soigné puis oral, indirect libre puis direct, exposition puis basculement puis dialogue, figures denses puis absentes.", 'The grid applied to the whole extract shows a movement: careful then oral, free indirect then direct, exposition then turn then dialogue, dense figures then none.', ['bilan']),
  sent(2124, "Ce mouvement, et non un seul procédé, est ce que « lire une œuvre dans son ensemble » veut vraiment dire.", 'That movement, not a single device, is what "reading a work as a whole" really means.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §M. ACT 7 ROWS — Choisir la bonne lecture (2125-2139)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT7_ROWS: Row[] = [
  sent(2125, "Lecture plausible : « L’anaphore montre juste que Mathilde aime le luxe. »", 'Plausible reading: "The anaphora just shows that Mathilde loves luxury."', ['lecture-plausible'], SR),
  sent(2126, "Lecture intégrale : « L’anaphore, en discours indirect libre, montre un désir si répété qu’il tient lieu de pensée permanente, pas un simple goût. »", 'Integrated reading: "The anaphora, in free indirect discourse, shows a desire so repeated it functions as a permanent thought, not a simple taste."', ['lecture-correcte']),
  sent(2127, "Lecture plausible : « Le dialogue est juste là pour faire avancer l’histoire, sans lien avec le reste. »", 'Plausible reading: "The dialogue is just there to move the plot forward, unrelated to the rest."', ['lecture-plausible'], SR),
  sent(2128, "Lecture intégrale : « Le dialogue, en registre oral et discours direct, tranche avec la narration soignée qui précède, et ce tranchant EST la rupture que la structure annonçait. »", 'Integrated reading: "The dialogue, in its oral register and direct speech, cuts sharply against the careful narration before it, and that sharpness IS the break the structure had announced."', ['lecture-correcte']),
  sent(2129, "Lecture plausible : « Le passé simple veut juste dire que l’action est au passé. »", 'Plausible reading: "The passé simple just means the action happened in the past."', ['lecture-plausible'], SR),
  sent(2130, "Lecture intégrale : « Le passé simple marque le basculement précisément parce qu’il tranche avec l’imparfait duratif de toute l’exposition qui précède. »", 'Integrated reading: "The passé simple marks the turn precisely because it cuts against the durative imparfait of the whole exposition before it."', ['lecture-correcte']),
  sent(2131, "Lecture plausible : « Mathilde est juste une femme ingrate envers son mari. »", 'Plausible reading: "Mathilde is just an ungrateful woman toward her husband."', ['lecture-plausible'], SR),
  sent(2132, "Lecture intégrale : « La distance ironique du narrateur, dès l’ouverture, empêche une lecture purement morale : le texte juge la situation sociale autant que le personnage. »", 'Integrated reading: "The narrator’s ironic distance, from the very opening, prevents a purely moral reading: the text judges the social situation as much as the character."', ['lecture-correcte']),
  sent(2133, "Une lecture plausible n’est pas fausse mot à mot ; elle est incomplète parce qu’elle ne tient qu’un seul fil.", 'A plausible reading is not wrong word for word; it is incomplete because it holds only one thread.', ['regle']),
  sent(2134, "Choisir entre deux lectures plausibles, c’est demander laquelle tient le registre, la voix, la structure ET la figure, pas laquelle « se trompe ».", 'Choosing between two plausible readings means asking which one holds the register, the voice, the structure AND the figure, not which one is "wrong".', ['regle']),
  phrase(2135, 'une lecture plausible', 'a plausible reading', ['metalangage']),
  phrase(2136, 'une lecture intégrale', 'an integrated reading', ['metalangage']),
  sent(2137, "Un distracteur bien construit n’est jamais absurde : il tient un vrai fil, mais un seul.", 'A well-built distractor is never absurd: it holds a real thread, but only one.', ['bilan']),
  sent(2138, "Avant de trancher entre deux lectures, compte les fils que chacune tient réellement.", 'Before deciding between two readings, count the threads each one actually holds.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §M. ACT 8 ROWS — Le piège : l’analyse qui s’arrête trop tôt (2140-2154)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT8_ROWS: Row[] = [
  sent(2140, "Piège : nommer une figure (« c’est une anaphore ») et s’arrêter là, sans dire son effet ni sa voix.", 'Trap: naming a figure ("this is an anaphora") and stopping there, saying neither its effect nor its voice.', ['piege']),
  sent(2141, "Piège : décrire un registre sans dire contre quel autre registre il se lit dans le même texte.", 'Trap: describing a register without saying which other register in the same text it is read against.', ['piege']),
  sent(2142, "Piège : repérer un changement de temps verbal sans dire ce que ce changement fait au rythme du récit.", 'Trap: spotting a tense change without saying what that change does to the story’s pace.', ['piege']),
  sent(2143, "Piège : traiter le discours indirect libre comme une simple description neutre, en oubliant qu’une voix précise le porte.", 'Trap: treating free indirect discourse as a simple neutral description, forgetting that a precise voice carries it.', ['piege']),
  sent(2144, "Piège : juger Mathilde moralement (ingrate, capricieuse) sans lire la distance ironique que le narrateur installe dès la première phrase.", 'Trap: judging Mathilde morally (ungrateful, capricious) without reading the ironic distance the narrator sets up from the first sentence.', ['piege']),
  sent(2145, "Chacun de ces pièges tient UN fil, le lâche aussitôt, et présente cela comme une analyse complète.", 'Each of these traps holds ONE thread, drops it right away, and presents that as a complete analysis.', ['regle']),
  sent(2146, "Le remède est toujours le même : après avoir nommé un fil, demande quel AUTRE fil il croise à cet endroit précis du texte.", 'The remedy is always the same: after naming one thread, ask what OTHER thread it crosses at that precise point in the text.', ['regle']),
  sent(2147, "Samuel s’arrête après : « Il y a une antithèse entre simple et malheureuse. »", 'Samuel stops after: "There is an antithesis between simple and malheureuse."', ['scene-analyse']),
  sent(2148, "Une analyse qui s’arrête à la première réponse correcte reste, malgré tout, incomplète.", 'An analysis that stops at the first correct answer remains, despite everything, incomplete.', ['bilan']),
  sent(2149, "Le réflexe à corriger n’est pas de mal nommer un procédé : c’est de croire qu’un seul procédé, bien nommé, suffit.", 'The reflex to correct is not naming a device wrongly: it is believing that one device, correctly named, is enough.', ['bilan']),
  sent(2150, "Avant de conclure une analyse, relis-la et compte : combien de fils tiens-tu encore à la dernière phrase ?", 'Before finishing an analysis, reread it and count: how many threads are you still holding by the last sentence?', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §M. ACT 9 ROWS — Ta lecture intégrale (2155-2199)
 * ══════════════════════════════════════════════════════════════════════════ */

export const MODELE_ANALYSE =
  "L’ouverture de « La Parure » tient ses quatre fils dès la première phrase. Le registre y est déjà soigné et presque savant (« une erreur du destin »), porté par une voix narrative qui juge Mathilde de loin avant de penser tout près d’elle en discours indirect libre (« elle songeait aux… », répété comme une anaphore). Cette anaphore ne dit pas seulement un goût pour le luxe : répétée en discours indirect libre, elle construit une obsession permanente, jamais nommée comme telle, mais montrée par la forme même de la phrase. La structure de l’exposition, presque entièrement à l’imparfait, décrit un état qui dure ; elle bascule net sur un passé simple daté (« Or, un soir, son mari rentra »), puis sur un dialogue oral et direct qui tranche, par son registre nu, avec tout ce qui précède. Ce tranchant n’est pas un hasard de mise en scène : c’est la structure elle-même qui se fait entendre dans le changement de temps et de registre, exactement là où l’exposition cède au récit.";

export const MODELE_ANALYSE_EN =
  "The opening of \"La Parure\" holds its four threads from the very first sentence. The register is already careful, almost learned (\"an error of fate\"), carried by a narrative voice that judges Mathilde from afar before thinking right beside her in free indirect discourse (\"she dreamed of…\", repeated like an anaphora). That anaphora does not merely state a taste for luxury: repeated in free indirect discourse, it builds a permanent obsession, never named as such, but shown by the very shape of the sentence. The exposition's structure, almost entirely in the imparfait, describes a lasting state; it turns sharply on a dated passé simple (\"Now, one evening, her husband came home\"), then on an oral, direct dialogue that cuts, through its bare register, against everything before it. That sharp cut is no staging accident: it is the structure itself making itself heard in the shift of tense and register, exactly where the exposition gives way to the narrated event.";

const ACT9_ROWS: Row[] = [
  sent(2155, "Le modèle ci-dessus tient ses quatre fils dans un seul paragraphe, sans jamais les séparer.", 'The model above holds its four threads in a single paragraph, never separating them.', ['modele']),
  sent(2156, "Nomme d’abord le registre, puis la voix, puis la structure, puis au moins une figure, en montrant comment chacun croise les autres.", 'Name first the register, then the voice, then the structure, then at least one figure, showing how each crosses the others.', ['plan']),
  sent(2157, "Appuie chaque affirmation sur une citation exacte du texte, jamais sur une impression générale.", 'Support every claim with an exact quotation from the text, never a general impression.', ['plan']),
  sent(2158, "Termine par une phrase qui dit ce que l’ensemble, les quatre fils tenus ensemble, construit pour le lecteur.", 'End with a sentence that says what the whole, the four threads held together, builds for the reader.', ['plan']),
  sent(2159, "Léna s’entraîne à voix haute avec Samuel avant de remettre sa version finale à la professeure.", 'Léna rehearses aloud with Samuel before handing in her final version to the professor.', ['scenario-cadre']),
  sent(2160, "Je commence par le registre, je montre ensuite la voix qui le porte.", 'I start with the register, then I show the voice that carries it.', ['scenario-reponse']),
  sent(2161, "Je relie maintenant cette anaphore à la structure de l’exposition, pas seulement à son sens.", 'I am now linking this anaphora to the structure of the exposition, not only to its meaning.', ['scenario-reponse']),
  sent(2162, "Je m’arrête après avoir nommé l’antithèse, sans dire qui la porte ni où elle tombe dans le texte.", 'I stop after naming the antithesis, without saying who carries it or where it falls in the text.', ['scenario-alt'], SR),
  phrase(2163, 'un extrait intégral', 'a full extract', ['vocabulaire']),
  phrase(2164, 'tenir un fil', 'to hold a thread', ['vocabulaire']),
  phrase(2165, 'croiser deux fils', 'to cross two threads', ['vocabulaire']),
  sent(2166, "La professeure note : « Cette version tient enfin les quatre fils du début à la fin, sans en lâcher un seul en chemin. »", 'The professor notes: "This version finally holds the four threads from start to finish, without dropping a single one along the way."', ['bilan']),
  sent(2167, "Une lecture intégrale ne demande pas plus de procédés : elle demande de ne jamais lâcher ceux qu’on tient déjà.", 'An integrated reading does not ask for more devices: it asks never to drop the ones you already hold.', ['bilan']),
  sent(2168, "Avant l’examen, reprends un texte que tu as déjà annoté et vérifie : registre, voix, structure, figure, les quatre à la fois.", 'Before any exam, take a text you have already annotated and check: register, voice, structure, figure, all four at once.', ['bilan']),
];

export const ROWS_BY_ACT: Row[][] = [ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS, ACT7_ROWS, ACT8_ROWS, ACT9_ROWS];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** No row is reused from another lesson in this draft (§D above): every act
 *  imports nothing. Kept as an export so the lesson file’s assembly code is
 *  identical in shape to every other B1+/C1 lesson. */
export const IMPORTED: Record<string, string[]> = {
  act1: [], act2: [], act3: [], act4: [], act5: [], act6: [], act7: [], act8: [], act9: [],
};
export const IMPORT_IDS: string[] = [...new Set(Object.values(IMPORTED).flat())];

/** Every row whose `drills` carries no `flashcard`: the deliberately-wrong
 *  "plausible" readings a learner must never be quizzed on as if they were
 *  the correct analysis to produce. */
export const NOT_DECK_ABLE: string[] = ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id);
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];
