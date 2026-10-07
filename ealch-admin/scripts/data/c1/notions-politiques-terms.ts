// c1.15.l1 « Justice, liberté, identité, pouvoir » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters; no section puts « État de
// droit » (13) beside two other long labels.
//
// C1 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ». Examples cite corpus rows by id and never
// restate the French.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './notions-politiques-corpus.ts';

export const NOTIONS_POLITIQUES_TERMS: Record<string, LessonTerm> = {
  poids: {
    term: 'le poids',
    title: 'Un sens et un poids',
    body: 'Un mot du débat public dit quelque chose, et il fait entendre quelque chose : un éloge, un reproche, une position. Avant de l’employer, dis dans quel sens tu le prends ; quand quelqu’un d’autre l’emploie, dis ce qu’il pèse. EN: A word of public debate has a meaning and a weight; name both.',
    examples: [
      { itemId: E(1003), note: 'la règle de la leçon' },
      { itemId: E(1004), note: 'un mot qui prend parti' },
      { itemId: E(1007), note: 'décrire sans défendre' },
    ],
  },

  egalite: {
    term: 'l’équité',
    title: 'Égalité ou équité',
    body: 'L’égalité donne la même part à chacun, ou les mêmes droits à tous. L’équité tient compte de la situation de chacun pour que le résultat soit juste. Les deux mots sont positifs ; ils ne disent pas la même chose. EN: Equality gives the same; equity gives the fair share.',
    examples: [
      { itemId: E(1016), note: 'la règle' },
      { itemId: E(1018), note: 'égal, pas forcément équitable' },
      { itemId: E(1022), note: 'les chances, pas les résultats' },
    ],
  },

  justice: {
    term: 'la justice',
    title: 'La valeur et l’institution',
    body: 'La justice est une valeur (réclamer justice, un sentiment d’injustice) et l’institution qui juge (saisir la justice, rendre la justice). Rendre justice à quelqu’un, c’est reconnaître ses mérites ; se faire justice soi-même, c’est se venger. EN: Justice is a value and the institution that judges.',
    examples: [
      { itemId: E(1029), note: 'deux justices' },
      { itemId: E(1031), note: 'rendre justice à' },
      { itemId: E(1036), note: 'saisir la justice' },
    ],
  },

  liberte: {
    term: 'la liberté',
    title: 'La liberté et les libertés',
    body: 'Au singulier, la liberté est une valeur. Au pluriel, les libertés publiques sont des droits précis : s’exprimer, se réunir, s’associer, croire. Une mesure peut les restreindre ou y porter atteinte ; aucune n’est sans limites. EN: Liberty is a value; liberties are specific rights.',
    examples: [
      { itemId: E(1042), note: 'la règle' },
      { itemId: E(1043), note: 'pas sans limites' },
      { itemId: E(1048), note: 'une atteinte aux libertés' },
    ],
  },

  droits: {
    term: 'les droits',
    title: 'Les droits et leurs textes',
    body: 'Un droit fondamental est consacré par un texte : la Déclaration de 1789 en France, la Charte canadienne de 1982, la Charte québécoise de 1975. On dit droits de l’homme en France, droits de la personne au Canada, et de plus en plus droits humains. EN: Fundamental rights, the texts that enshrine them, and three usages for « human rights ».',
    examples: [
      { itemId: E(1056), note: 'trois usages' },
      { itemId: E(1057), note: 'l’article premier de 1789' },
      { itemId: E(1061), note: 'des limites raisonnables' },
    ],
  },

  pouvoir: {
    term: 'le pouvoir',
    title: 'Pouvoir, puissance, autorité',
    body: 'Le pouvoir est une capacité de décider ; on l’exerce. La puissance est une force ; elle s’impose. L’autorité se reconnaît : on obéit sans y être forcé. Autoritaire est un reproche ; avoir de l’autorité, un éloge. EN: Power decides, might imposes, authority is recognised.',
    examples: [
      { itemId: E(1068), note: 'la règle' },
      { itemId: E(1069), note: 'le pouvoir sans l’autorité' },
      { itemId: E(1072), note: 'faire autorité' },
    ],
  },

  contrepoids: {
    term: 'contrepoids',
    title: 'Les contre-pouvoirs',
    body: 'Un contre-pouvoir s’organise face à une autorité établie : la presse, les syndicats, l’opposition, les tribunaux. La séparation des pouvoirs répartit le législatif, l’exécutif et le judiciaire. Le mot ne dit pas qui a raison ; il dit qui fait contrepoids. EN: A counter-power checks an established power.',
    examples: [
      { itemId: E(1081), note: 'la règle' },
      { itemId: E(1082), note: 'le quatrième pouvoir' },
      { itemId: E(1088), note: 'un garde-fou' },
    ],
  },

  legal: {
    term: 'légitime',
    title: 'Légal ou légitime',
    body: 'Légal : conforme à la loi. Légitime : juste, fondé, qu’on peut défendre. Une décision peut être légale et jugée illégitime, ou l’inverse. Et pour ce qui touche au droit, dis juridique : un avis juridique, un problème juridique. EN: Lawful against legitimate; and juridique for « legal » in the sense of « about law ».',
    examples: [
      { itemId: E(1095), note: 'la règle' },
      { itemId: E(1096), note: 'légal, pas toujours légitime' },
      { itemId: E(1099), note: 'juridique' },
    ],
  },

  etatdroit: {
    term: 'État de droit',
    title: 'L’État de droit et l’impunité',
    body: 'Dans un État de droit, les gouvernants aussi obéissent à la loi, et des juges indépendants peuvent les sanctionner. L’impunité, c’est rester impuni : elle fait deux poids, deux mesures. Avec une majuscule à État. EN: Under the rule of law, power obeys the law too; impunity breaks it.',
    examples: [
      { itemId: E(1108), note: 'la règle' },
      { itemId: E(1109), note: 'nul n’est au-dessus des lois' },
      { itemId: E(1111), note: 'l’impunité des puissants' },
    ],
  },

  identite: {
    term: 'l’identité',
    title: 'L’identité, au sens abstrait',
    body: 'La pièce d’identité dit qui tu es pour l’administration. L’identité au sens abstrait dit ce par quoi tu te reconnais : elle se construit, elle peut être plurielle. Identitaire est souvent chargé : le repli identitaire est un reproche. EN: Identity papers against identity in the abstract sense.',
    examples: [
      { itemId: E(1120), note: 'la règle' },
      { itemId: E(1116), note: 'une identité plurielle' },
      { itemId: E(1124), note: 'un mot chargé' },
    ],
  },

  modeles: {
    term: 'les modèles',
    title: 'Vivre ensemble : modèles et mots chargés',
    body: 'Le multiculturalisme, politique officielle au Canada, insiste sur la coexistence des cultures ; l’interculturalisme, défendu au Québec, sur leurs échanges autour d’une culture commune. Laïcité et communautarisme sont des mots chargés : dis qui les emploie, et à propos de qui. EN: Two models of living together, and two loaded words to present as uses.',
    examples: [
      { itemId: E(1134), note: 'deux modèles' },
      { itemId: E(1137), note: 'la laïcité selon ses partisans' },
      { itemId: E(1139), note: 'un mot qu’on applique aux autres' },
    ],
  },
};
