// b2.20.l1 « Les tournures impersonnelles »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 9 to 13 characters. Most sections carry one or two
// chips; the few that carry three use the shortest labels.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './tournures-impersonnelles-corpus.ts';

export const TOURNURES_IMPERSONNELLES_TERMS: Record<string, LessonTerm> = {
  vide: {
    term: 'le il vide',
    title: 'Un il qui ne désigne personne',
    body: "Dans il faut, il est probable ou il manque, le il ne remplace aucun nom : c'est un sujet vide que la phrase française exige. Il reste toujours masculin singulier. Ce qui compte, c'est ce qui le suit. EN: The impersonal il stands for nothing; what follows it carries the meaning.",
    examples: [
      { itemId: E(2008), note: 'il manque : personne ne manque, deux signatures manquent' },
      { itemId: E(2017), note: 'il faut : aucun nom derrière il' },
      { itemId: E(2012), note: 'il reste : le vrai sujet vient après' },
    ],
  },

  engagement: {
    term: "l'engagement",
    title: "Jusqu'où tu t'engages",
    body: "L'expression après il dit jusqu'où tu t'engages : tu exiges ou tu conseilles, tu affirmes ou tu supposes, tu juges, ou tu laisses la décision sans signature. Le mode suit : ce qui affirme prend l'indicatif, ce qui exige, doute ou juge prend le subjonctif. EN: The expression after il sets how far you commit, and the mood follows.",
    examples: [
      { itemId: E(2004), note: 'certain : tu t’engages à fond' },
      { itemId: E(2003), note: 'possible : tu laisses une porte ouverte' },
      { itemId: E(2021), note: 'il a été décidé : personne ne signe' },
    ],
  },

  necessite: {
    term: 'la nécessité',
    title: 'Du minimum à l’obligation',
    body: "Il suffit que, il vaut mieux que, il faut que, il est indispensable que : de la seule condition à l'obligation, toujours avec le subjonctif. Sans personne de précis, l'infinitif : il faut remplir, il convient de signaler. EN: From the bare minimum to the obligation, always with the subjunctive; with no one in particular, the infinitive.",
    examples: [
      { itemId: E(2052), note: 'il suffit que : le minimum' },
      { itemId: E(2053), note: 'il vaut mieux que : un conseil' },
      { itemId: E(2048), note: 'il est indispensable que : l’obligation' },
    ],
  },

  echelle: {
    term: "l'échelle",
    title: 'Probable ou possible',
    body: "Au-dessus d'une chance sur deux (certain, clair, évident, probable, il ne fait aucun doute), tu affirmes : l'indicatif. En dessous (possible, il se peut, peu probable, douteux, il n'est pas exclu), tu n'affirmes pas : le subjonctif. EN: Above even odds, the indicative; below them, the subjunctive.",
    examples: [
      { itemId: E(2018), note: 'probable : sera, l’indicatif' },
      { itemId: E(2019), note: 'possible : soit, le subjonctif' },
      { itemId: E(2068), note: 'douteux : soient' },
    ],
  },

  negation: {
    term: 'la négation',
    title: 'Quand le non fait basculer le mode',
    body: "Nie une certitude et le subjonctif arrive : il n'est pas certain que le ministre soit au courant. Nie un doute et l'indicatif revient : il ne fait aucun doute que les chiffres ont été vérifiés. Dans une question avec inversion, les deux modes existent, avec deux sens. EN: A denied certainty takes the subjunctive; a denied doubt takes the indicative.",
    examples: [
      { itemId: E(2082), note: 'pas certain : soit' },
      { itemId: E(2089), note: 'aucun doute : ont été' },
      { itemId: E(2087), note: 'la question qui doute' },
    ],
  },

  source: {
    term: 'il semble',
    title: 'Rumeur, impression, avis, fait vérifié',
    body: "Il paraît que rapporte ce qu'on t'a dit, avec l'indicatif, sans le garantir. Il semble que donne une impression, avec le subjonctif. Il me semble que donne ton avis, avec l'indicatif. Il s'avère que présente un fait vérifié. EN: Hearsay, impression, opinion, verified fact.",
    examples: [
      { itemId: E(2100), note: 'il paraît : une rumeur' },
      { itemId: E(2098), note: 'il semble : une impression' },
      { itemId: E(2102), note: 'il s’avère : c’est vérifié' },
    ],
  },

  jugement: {
    term: 'le jugement',
    title: 'Il est dommage que, il est temps que',
    body: "Un jugement porte souvent sur un fait sûr, et il prend quand même le subjonctif : il est regrettable que la navette ait été supprimée. Pour un fait déjà passé, le subjonctif passé. Pour tout le monde, de + infinitif : il est dommage de partir si tôt. EN: A judgement takes the subjunctive, even about a certain fact.",
    examples: [
      { itemId: E(2114), note: 'un fait passé : ait été' },
      { itemId: E(2117), note: 'il est temps que : revoie' },
      { itemId: E(2118), note: 'pour tout le monde : de + infinitif' },
    ],
  },

  registre: {
    term: 'il est, c’est',
    title: "Il est à l'écrit, c'est à l'oral",
    body: "Il est dommage que, il est difficile de, il est interdit de : c'est la forme de l'écrit, du rapport, de l'affiche. À l'oral, on dit c'est dommage que, c'est difficile de, on ne peut pas. Les deux sont corrects ; le registre change. EN: Il est in writing, c’est in speech; both are correct.",
    examples: [
      { itemId: E(2120), note: 'c’est dommage de : oral' },
      { itemId: E(2139), note: 'il est interdit de : l’affiche' },
      { itemId: E(2138), note: 'on ne peut pas : la conversation' },
    ],
  },

  distance: {
    term: 'la distance',
    title: 'Une décision que personne ne signe',
    body: "Il a été décidé que, il est rappelé que, il est demandé aux résidents de : l'avis ou le compte rendu ne dit pas qui décide. Le verbe choisit le mode : décider, rappeler, prévoir affirment (indicatif) ; demander, exiger, souhaiter veulent (subjonctif). EN: The impersonal passive hides who decides; its verb picks the mood.",
    examples: [
      { itemId: E(2130), note: 'décider : fermerait, l’indicatif' },
      { itemId: E(2133), note: 'demander : soit, le subjonctif' },
      { itemId: E(2132), note: 'il est demandé de + infinitif' },
    ],
  },

  accord: {
    term: 'au singulier',
    title: 'Il manque deux chaises',
    body: "Avec il reste, il manque, il existe, il est arrivé ou il s'est produit, le verbe s'accorde avec il, au masculin singulier, même quand ce qui suit est au pluriel. Et il s'agit de n'a jamais d'autre sujet que il. EN: The impersonal verb stays singular, whatever follows it.",
    examples: [
      { itemId: E(2148), note: 'manque, pas manquent' },
      { itemId: E(2151), note: 'arrivé, sans accord' },
      { itemId: E(2155), note: 'dans ce livre, il s’agit de' },
    ],
  },
};
