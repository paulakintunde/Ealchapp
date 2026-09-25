// b1.20.l1 « La négation avancée » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters; the scratch check
// measures every section's actual trio against 37, so the two 13-character
// labels (« le second mot », « aucun, aucune », « ne pas + inf. ») are never
// put in one section together.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './negation-avancee-corpus.ts';

export const NEGATION_AVANCEE_TERMS: Record<string, LessonTerm> = {
  /** The family: the word after the verb that shapes the gap. */
  second: {
    term: 'le second mot',
    title: 'Le mot qui donne sa forme au vide',
    body: "Ne dit qu'il manque quelque chose. Le second mot dit quoi : pas, plus, jamais, rien, personne, aucun, que. Tu en choisis un seul, sauf quand tu les combines. EN: ne says something is missing; the second word says what.",
    examples: [
      { itemId: E(1015), note: 'plus : ça a existé, et ça a cessé' },
      { itemId: E(1016), note: 'jamais : aucun moment' },
      { itemId: E(1018), note: 'personne : aucune personne' },
    ],
  },

  /** Restriction. */
  neque: {
    term: 'ne ... que',
    title: 'Tout manque, sauf une chose',
    body: "Ne ... que veut dire seulement. Ce n'est pas un vrai négatif : la chose après que est bien là, et tout le reste manque. C'est pour ça que l'article reste : je n'ai que du pain. EN: ne ... que means only; the thing after que is there, so the article stays.",
    examples: [
      { itemId: E(1035), note: 'dix dollars, et rien de plus' },
      { itemId: E(1040), note: "du pain : l'article ne change pas" },
      { itemId: 'fr.a2.argent-quotidien.081', note: 'des billets, pas de pièces' },
    ],
  },

  /** Not a single one. */
  aucun: {
    term: 'aucun, aucune',
    title: 'Pas un seul',
    body: "Aucun remplace pas un. Il s'accorde avec le nom, masculin ou féminin, et il reste presque toujours au singulier, parce qu'il compte zéro. Aucun problème, aucune idée. EN: aucun means not one; it agrees in gender and stays singular.",
    examples: [
      { itemId: E(1055), note: 'une idée, féminin, donc aucune' },
      { itemId: E(1056), note: 'un problème, masculin, donc aucun' },
      { itemId: E(1100), note: 'après le participe, au passé composé' },
    ],
  },

  /** Neither ... nor. */
  nini: {
    term: 'ni ... ni',
    title: 'Deux choses manquent',
    body: "Ni ... ni enlève deux choses à la fois. Pas disparaît, et un, une, du, des disparaissent aussi : je n'ai ni frère ni sœur. Le, la, les restent. EN: ni ... ni removes two things; pas goes, and so do un, du and des.",
    examples: [
      { itemId: E(1059), note: "pas d'article, pas de pas" },
      { itemId: E(1061), note: 'le et la restent' },
      { itemId: E(1062), note: "ce qui manque à l'appartement" },
    ],
  },

  /** The negative word as the subject. */
  sujet: {
    term: 'le sujet nié',
    title: 'Quand le vide ouvre la phrase',
    body: "Personne, rien, aucun et ni ... ni peuvent être le sujet. Ils viennent en premier, puis ne, puis le verbe, et il n'y a pas de pas. Personne n'est venu. Rien n'a changé. EN: as the subject they come first, then ne, and there is no pas.",
    examples: [
      { itemId: E(1075), note: 'personne, sujet de venir' },
      { itemId: E(1076), note: 'rien, sujet de changer' },
      { itemId: 'fr.a2.hebergement.088', note: 'la même forme, au bout de la phrase' },
    ],
  },

  /** Placement in compound tenses. */
  place: {
    term: 'la place',
    title: 'Avant ou après le participe',
    body: "Au passé composé, plus, jamais et rien restent près de l'auxiliaire, comme pas. Personne, aucun, que et nulle part vont après le participe. Je n'ai rien vu. Je n'ai vu personne. EN: short words sit before the participle; personne and aucun go after it.",
    examples: [
      { itemId: E(1093), note: 'rien, avant vu' },
      { itemId: E(1094), note: 'personne, après vu' },
      { itemId: E(1101), note: 'que, après payé' },
    ],
  },

  /** Negating an infinitive. */
  infinitif: {
    term: 'ne pas + inf.',
    title: 'Ne pas, ensemble, devant',
    body: "Devant un infinitif, ne et pas ne l'entourent plus : ils se collent et passent devant. De ne pas fumer. Ne plus rien dire. Sans, lui, remplace toute la négation : sans dire au revoir. EN: before an infinitive ne pas go together in front.",
    examples: [
      { itemId: E(1114), note: 'de ne pas, devant fumer' },
      { itemId: E(1117), note: 'ne jamais, pareil' },
      { itemId: E(1121), note: 'sans, et pas de ne' },
    ],
  },

  /** Combined negations. */
  combine: {
    term: 'plus jamais',
    title: 'Plusieurs vides dans une phrase',
    body: "Tu peux mettre plusieurs seconds mots après un seul ne, et ils ne s'annulent pas. L'ordre est fixe : plus, puis jamais, puis rien ou personne. Je ne dirai plus jamais rien. Seul pas ne se combine jamais. EN: several second words, one ne, a fixed order, and pas never joins them.",
    examples: [
      { itemId: E(1131), note: 'plus, puis rien' },
      { itemId: E(1135), note: 'plus, puis jamais' },
      { itemId: E(1136), note: 'les trois, dans l’ordre' },
    ],
  },

  /** Answering. */
  si: {
    term: 'si, pas oui',
    title: 'Répondre à une phrase négative',
    body: "Après une question négative, oui ne marche pas : pour dire le contraire, tu dis si. Pour être d'accord avec un négatif, tu dis moi non plus, lui non plus. Pour insister : pas du tout, jamais de la vie. EN: si contradicts a negative; non plus agrees with one.",
    examples: [
      { itemId: E(1149), note: "on t'a dit que tu n'avais pas payé" },
      { itemId: E(1157), note: 'lui non plus : il est d’accord avec le négatif' },
      { itemId: 'fr.a1.questions.373', note: 'le si le plus court' },
    ],
  },

  /** The dropped ne, as register. */
  oral: {
    term: 'le ne tombé',
    title: "Ce que l'oreille entend",
    body: "À l'oral, ne tombe très souvent : je sais pas, c'est pas grave. Le second mot porte alors tout le sens. À l'écrit, dans un courriel ou une plainte, ne reste toujours. EN: in speech ne often drops and the second word carries the meaning; in writing ne always stays.",
    examples: [
      { itemId: E(1167), note: "ce que tu entends dans la rue" },
      { itemId: E(1168), note: "ce que tu écris" },
      { itemId: E(1175), note: 'plus sans s : on n’en a plus' },
    ],
  },

  /** The written product the task asks for. */
  plainte: {
    term: 'la plainte',
    title: 'Dire exactement ce qui manquait',
    body: "Une bonne plainte ne crie pas. Elle donne des faits, un par un, et chaque négation dit précisément ce qui manquait : personne, rien, aucun, ni ... ni. Puis elle demande une seule chose. EN: a good complaint lists facts, each negative precise, then asks for one thing.",
    examples: [
      { itemId: E(1184), note: "l'annonce et la réalité" },
      { itemId: E(1186), note: 'deux choses qui manquaient' },
      { itemId: E(1192), note: 'une demande, une seule' },
    ],
  },
};
