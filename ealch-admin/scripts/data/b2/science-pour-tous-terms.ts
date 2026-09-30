// b2.29.l1 « La science pour tous »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 12 characters; the two 12-character labels
// (« la causalité », « la certitude ») are never used together with a third
// chip over 9 characters. Most sections carry one or two chips.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».
//
// A GLOSSARY FOR THE INFORMED CITIZEN: the words that say how a finding was
// obtained (l’hypothèse, le témoin), how solid it is (la causalité, la
// solidité, les pairs, la certitude), how its figures read (le point, la
// médiane, les données), and how to pass it on (vulgariser, l’analogie, le
// faux ami).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './science-pour-tous-corpus.ts';

export const SCIENCE_TERMS: Record<string, LessonTerm> = {
  vulgariser: {
    term: 'vulgariser',
    title: 'Rendre la science accessible',
    body: 'Vulgariser, c’est expliquer un savoir à un public qui n’est pas spécialiste. Rien de vulgaire là-dedans : le mot vient du latin vulgus, le peuple. On simplifie les mots, on garde le résultat et son degré de certitude. EN: To popularise is to explain knowledge to non-specialists: simpler words, the same result, the same certainty.',
    examples: [
      { itemId: E(1010), note: 'la règle de la leçon' },
      { itemId: E(1014), note: 'simplement, sans exagérer' },
      { itemId: E(1001), note: 'un titre fidèle à l’étude' },
    ],
  },

  hypothese: {
    term: 'l’hypothèse',
    title: 'Une idée à mettre à l’épreuve',
    body: 'Une hypothèse est une réponse provisoire à une question, qu’on teste par une expérience. Les résultats la soutiennent ou la contredisent ; une seule expérience ne la prouve pas. EN: A hypothesis is a provisional answer that an experiment supports or contradicts, never proves on its own.',
    examples: [
      { itemId: E(1017), note: 'l’hypothèse de la chercheuse' },
      { itemId: E(1022), note: 'des résultats qui vont dans son sens' },
      { itemId: E(1029), note: 'soutenir n’est pas prouver' },
    ],
  },

  temoin: {
    term: 'le témoin',
    title: 'Le groupe témoin',
    body: 'Le groupe témoin ne reçoit pas ce qu’on teste : il sert de point de comparaison. Si les deux groupes sont tirés au sort, la seule différence entre eux est ce qu’on teste. Sans lui, on ne sait pas à quoi comparer. EN: The control group is the comparison point; drawn by lot, it differs from the tested group only in what is tested.',
    examples: [
      { itemId: E(1034), note: 'les classes qui gardent la méthode habituelle' },
      { itemId: E(1041), note: 'répartis au hasard' },
      { itemId: E(1046), note: 'sans lui, pas de comparaison' },
    ],
  },

  causalite: {
    term: 'la causalité',
    title: 'Lié à n’est pas causé par',
    body: 'Deux choses peuvent aller de pair sans que l’une cause l’autre : une troisième peut expliquer les deux (un facteur de confusion), ou la cause peut aller dans l’autre sens. Pour montrer une cause, le plus sûr reste une expérience avec un groupe témoin tiré au sort. EN: A link is not a cause: a third factor or a reversed cause can explain it.',
    examples: [
      { itemId: E(1051), note: 'liées, mais pas causées' },
      { itemId: E(1050), note: 'le facteur de confusion' },
      { itemId: E(1060), note: 'la cause à l’envers' },
    ],
  },

  solidite: {
    term: 'la solidité',
    title: 'Ce qui rend un résultat solide',
    body: 'Un résultat devient solide quand il est significatif, que sa marge d’erreur est connue, et surtout quand d’autres équipes le retrouvent. Un résultat isolé reste fragile, même publié. EN: A result becomes solid when it is significant, its margin of error is known, and above all when other teams replicate it.',
    examples: [
      { itemId: E(1070), note: 'reproduit par une autre équipe' },
      { itemId: E(1077), note: 'isolé, donc fragile' },
      { itemId: E(1068), note: 'significatif ne veut pas dire grand' },
    ],
  },

  pairs: {
    term: 'les pairs',
    title: 'L’évaluation par les pairs',
    body: 'Avant de publier un article, une revue le fait relire par d’autres spécialistes du domaine : les pairs. Ils vérifient surtout la méthode ; ils ne garantissent pas que le résultat est vrai. Une prépublication n’a pas encore passé cette étape. EN: Peer review checks the method before publication; it does not guarantee truth. A preprint has not been through it yet.',
    examples: [
      { itemId: E(1064), note: 'deux relecteurs anonymes' },
      { itemId: E(1066), note: 'la prépublication' },
      { itemId: E(1076), note: 'publié n’est pas prouvé' },
    ],
  },

  point: {
    term: 'le point',
    title: 'Un point de pourcentage',
    body: 'Quand un taux passe de 10 % à 12 %, il gagne deux points de pourcentage ; en pourcentage, c’est une hausse de 20 %. Dire « deux pour cent » serait faux. De annonce la variation, à annonce le nouveau niveau. EN: From 10% to 12% is two percentage points, or a 20% rise; « de » gives the change, « à » the new level.',
    examples: [
      { itemId: E(1089), note: 'le mot' },
      { itemId: E(1090), note: 'deux points, soit vingt pour cent' },
      { itemId: E(1083), note: 'une baisse de deux points' },
    ],
  },

  mediane: {
    term: 'la médiane',
    title: 'La moyenne et la médiane',
    body: 'La moyenne additionne tout et divise : quelques valeurs extrêmes la tirent vers le haut. La médiane coupe le groupe en deux moitiés égales : la moitié est en dessous, la moitié au-dessus. Pour des salaires, la médiane dit mieux ce que vit la plupart des gens. EN: The average is pulled by extremes; the median splits the group into two equal halves.',
    examples: [
      { itemId: E(1096), note: 'moyen et médian, côte à côte' },
      { itemId: E(1097), note: 'deux moitiés égales' },
      { itemId: E(1098), note: 'la moyenne tirée vers le haut' },
    ],
  },

  donnees: {
    term: 'les données',
    title: 'Les données, au pluriel',
    body: 'Les données sont les informations qu’on recueille, qu’on stocke et qu’on analyse : on dit presque toujours les données, au pluriel, et jamais « les datas » dans un texte soigné. Un modèle d’intelligence artificielle s’entraîne sur des données. EN: « Les données » is the French for data, used in the plural.',
    examples: [
      { itemId: E(1030), note: 'les données montrent' },
      { itemId: E(1114), note: 'entraîner un modèle' },
      { itemId: E(1166), note: 'evidence, parfois' },
    ],
  },

  analogie: {
    term: 'l’analogie',
    title: 'Comparer pour faire comprendre',
    body: 'Une analogie explique une chose inconnue par une chose familière : l’ADN comme une recette, l’effet de serre comme une couverture. Elle éclaire, mais elle ne dit pas tout : un bon vulgarisateur dit aussi où l’image s’arrête. EN: An analogy explains the unknown through the familiar; say where it stops.',
    examples: [
      { itemId: E(1129), note: 'la couverture' },
      { itemId: E(1133), note: 'la limite de l’image' },
      { itemId: E(1141), note: 'la règle' },
    ],
  },

  certitude: {
    term: 'la certitude',
    title: 'Dire jusqu’où va l’étude',
    body: 'Entre « des chercheurs ont prouvé » et « une étude suggère », il y a tout un degré de certitude. Choisis le verbe à la mesure de l’étude, et les tournures de la leçon 20 du B2 : il est probable que, il est possible que, il semblerait que, rien ne permet d’affirmer que. EN: Match the verb to the study, and grade the claim with impersonal forms.',
    examples: [
      { itemId: E(1151), note: 'probable, mais pas prouvé' },
      { itemId: E(1160), note: 'suggérer sans démontrer' },
      { itemId: E(1161), note: 'la règle' },
    ],
  },

  fauxami: {
    term: 'le faux ami',
    title: 'Les faux amis de la science',
    body: 'Un faux ami ressemble à un mot anglais mais n’a pas le même sens. En science : une évidence (obvious, pas evidence), un physicien (physicist, pas physician), une lecture (reading), une conférence (a talk), et bien sûr actuellement et éventuellement, déjà vus dans la leçon 37 du B1. EN: Words that look English and mean something else.',
    examples: [
      { itemId: E(1165), note: 'une évidence : ce qui saute aux yeux' },
      { itemId: E(1167), note: 'physicien ou médecin' },
      { itemId: E(1177), note: 'la règle' },
    ],
  },
};
