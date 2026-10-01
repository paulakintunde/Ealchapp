// c1.20.l1 « Lire entre les lignes » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6. Labels here run 8 to 13 characters; the widest trio
// the lesson uses (« le présupposé » + « l’agent caché » + « la portée ») is
// 35. Asserted in the scratch check with « every term is surfaced ».
//
// C1 LANGUAGE RULE: the body is unsimplified French, addressed as « tu », then
// ONE English line starting « EN: ».
//
// A C1 READING GLOSSARY NAMES WHAT A TEXT DOES WITHOUT SAYING IT: how far it
// grants and limits (restreindre), how far it goes (la portée), what the
// quarrel is really about (le différend), what a paragraph, an image or an
// ending is for (la fonction, l’analogie, la chute), how it treats its
// sources (la posture), what its grammar takes for granted (le présupposé),
// what it means against its words (l’ironie), who acts behind its passives
// (l’agent caché), and the wrong answers an exam builds from all this
// (distracteur).
//
// « le présupposé » is NOT b2.24's term of the same name. At B2 it named the
// unstated ASSUMPTION an argument needs (« l’auteur suppose que… »); at C1 it
// names what the GRAMMAR takes for granted (un article défini, « encore »,
// « cesser de », un verbe factif, une question). The body says so, and calls
// the B2 notion by its linguistic name, le sous-entendu.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './lire-entre-les-lignes-corpus.ts';

export const LIRE_ENTRE_LES_LIGNES_TERMS: Record<string, LessonTerm> = {
  /** Act 2: grant, then limit. */
  restreindre: {
    term: 'restreindre',
    title: 'Accorder un point, puis en limiter la portée',
    body: 'La prose d’essai avance en deux temps : l’auteur accorde (certes, c’est exact, sans doute), puis il restreint (reste que, il n’en demeure pas moins, encore faut-il). Ce qu’il accorde, il le garde ; sa thèse se loge dans la limite qu’il pose. EN: The writer grants a point, keeps it, and places the thesis in the limit set on it.',
    examples: [
      { itemId: E(1816), note: 'le point accordé' },
      { itemId: E(1817), note: 'la restriction qui porte la thèse' },
      { itemId: E(1827), note: 'la règle' },
    ],
  },

  /** Act 3: how far a claim goes. */
  portee: {
    term: 'la portée',
    title: 'Jusqu’où va exactement une conclusion',
    body: 'Une conclusion a un domaine (ne… que), un nombre (certains, la plupart), une force (peut, tend à, doit) et souvent une condition (sauf si). La bonne reformulation garde les quatre. Celle qui va plus loin exagère ; celle qui reste en deçà affaiblit. EN: A conclusion has a domain, a quantity, a strength and a condition; keep all four.',
    examples: [
      { itemId: E(1836), note: 'la conclusion exacte' },
      { itemId: E(1835), note: 'trop forte' },
      { itemId: E(1842), note: 'la règle' },
    ],
  },

  /** Act 4: what the quarrel is really about. */
  differend: {
    term: 'le différend',
    title: 'L’objet réel d’un désaccord',
    body: 'Deux camps peuvent croire se disputer sur des faits et s’opposer en réalité sur une valeur, sur le sens d’un mot ou sur qui décide. Premier indice : ils s’accordent sur les faits, et le désaccord continue. Un essai le signale par « en réalité », « au fond », « le vrai débat ». EN: When both sides agree on the facts and still disagree, the quarrel is elsewhere.',
    examples: [
      { itemId: E(1860), note: 'd’accord sur les faits' },
      { itemId: E(1861), note: 'l’objet réel' },
      { itemId: E(1866), note: 'la règle' },
    ],
  },

  /** Act 5: what a paragraph is doing. */
  fonction: {
    term: 'la fonction',
    title: 'Ce que fait un passage, pas ce qu’il dit',
    body: 'Le contenu d’un paragraphe, c’est son sujet ; sa fonction, c’est son rôle dans le raisonnement : poser un constat, délimiter l’objet, illustrer, se faire une objection, écarter un contresens, élargir. À l’examen, la réponse commence par un verbe : il concède, il illustre, il limite. EN: A paragraph’s function is its job in the argument; answer with a verb.',
    examples: [
      { itemId: E(1880), note: 'la question de l’examen' },
      { itemId: E(1883), note: 'se faire une objection' },
      { itemId: E(1888), note: 'la règle' },
    ],
  },

  /** Act 6: what an image compares. */
  analogie: {
    term: 'l’analogie',
    title: 'Comparer un seul trait, pas tout',
    body: 'Une analogie ne dit jamais que deux choses sont pareilles : elle choisit un trait commun et y transporte un jugement. Cherche ce trait, puis l’endroit où l’image cesse de marcher. Un bon essai le dit lui-même, et en tire parfois un argument. EN: An analogy compares one feature and carries a judgement across; find the feature and where the image breaks.',
    examples: [
      { itemId: E(1898), note: 'le trait comparé' },
      { itemId: E(1900), note: 'la limite de l’image' },
      { itemId: E(1906), note: 'la règle' },
    ],
  },

  /** Act 6: what a last sentence does. */
  chute: {
    term: 'la chute',
    title: 'La dernière phrase et son rôle',
    body: 'La chute d’un essai peut résumer, retourner une promesse, ouvrir une question ou ironiser. « Que veut dire la dernière phrase ? » demande ce qu’elle FAIT, pas ce qu’elle raconte. Cherche le mot qu’elle reprend du début. EN: A closing line sums up, reverses, opens or ironises; ask what it does.',
    examples: [
      { itemId: E(1901), note: 'une chute qui retourne une promesse' },
      { itemId: E(1902), note: 'la question à poser' },
      { itemId: E(1911), note: 'une chute qui ouvre' },
    ],
  },

  /** Act 7: how the writer treats a source. */
  posture: {
    term: 'la posture',
    title: 'Ce que l’auteur fait de ses sources',
    body: 'Un auteur peut s’appuyer sur une source, corriger l’usage qu’on en fait, lui donner raison sur un point et tort sur un autre, l’accorder en partie, la réfuter, ou citer le camp adverse quand il lui donne raison. Les verbes et les connecteurs autour de la citation le disent. EN: The words around a quotation show whether the writer relies on, corrects, partly grants or refutes a source.',
    examples: [
      { itemId: E(1914), note: 'corriger un usage' },
      { itemId: E(1915), note: 'donner raison et tort' },
      { itemId: E(1918), note: 'retourner un camp' },
    ],
  },

  /** Act 8: what the grammar takes for granted. */
  presuppose: {
    term: 'le présupposé',
    title: 'Ce que la grammaire tient pour acquis',
    body: 'Un article défini, « encore », « cesser de », « regretter que », une question en « pourquoi » : ces mots posent une idée sans l’affirmer. Le test : elle survit à la négation et à la question. La leçon 24 du B2 cherchait l’idée qu’un argument suppose ; c’est un sous-entendu, que tu déduis. Le présupposé, lui, est écrit dans la phrase. EN: A presupposition is marked in the grammar and survives negation; an implication is inferred.',
    examples: [
      { itemId: E(1932), note: 'le petit mot « plus »' },
      { itemId: E(1935), note: 'un verbe factif' },
      { itemId: E(1942), note: 'la règle du test' },
    ],
  },

  /** Act 9: irony read from the words. */
  ironie: {
    term: 'l’ironie',
    title: 'Le second degré, prouvé par le texte',
    body: 'Au C1, l’ironie passe souvent par l’écho : l’auteur reprend les mots d’un autre pour les faire entendre creux. Elle passe aussi par l’éloge impossible ou la fausse modestie. Mais elle se prouve toujours : sans indice dans le texte, tu lis au premier degré. EN: Echo irony repeats someone else’s words to empty them; without a cue in the text, read literally.',
    examples: [
      { itemId: E(1946), note: 'l’écho' },
      { itemId: E(1949), note: 'pas d’indice, pas d’ironie' },
      { itemId: E(1957), note: 'l’ironie à l’écrit' },
    ],
  },

  /** Act 10: who acts behind the passive. */
  agent: {
    term: 'l’agent caché',
    title: 'Retrouver qui a décidé',
    body: 'Le passif sans complément, la nominalisation, « on », le « il » impersonnel et le sujet abstrait (« la situation impose ») font disparaître celui qui agit. Une décision devient un événement. Pose la question : par qui ? Puis réécris la phrase avec un sujet. EN: Passives, nominalisations, on and impersonal il can turn a decision into an event; ask « by whom? ».',
    examples: [
      { itemId: E(1967), note: 'le passif sans agent' },
      { itemId: E(1970), note: 'la phrase avec son sujet' },
      { itemId: E(1974), note: 'la règle' },
    ],
  },

  /** Act 11: the wrong answers an exam builds. */
  distracteur: {
    term: 'distracteur',
    title: 'Les quatre mauvaises réponses de l’examen',
    body: 'Au TCF et au TEF C1, les mauvaises options ne sont pas absurdes : l’une exagère le texte, l’une donne le sujet au lieu de la thèse, l’une est vraie mais ne répond pas à la question, l’une donne la position que l’auteur combat. Élimine-les par leur famille. EN: Exam distractors overstate, give the topic, are true but secondary, or give the other camp.',
    examples: [
      { itemId: E(1981), note: 'l’exagération' },
      { itemId: E(1983), note: 'vrai mais secondaire' },
      { itemId: E(1984), note: 'l’autre camp' },
    ],
  },
};
