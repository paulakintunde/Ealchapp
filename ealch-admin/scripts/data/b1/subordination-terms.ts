// b1.31.l1 « La subordination : cause, conséquence, but » · the lesson
// glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 7 to 13 characters; the scratch check
// measures every section's actual trio against 37.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './subordination-corpus.ts';

export const SUBORDINATION_TERMS: Record<string, LessonTerm> = {
  /** The system: main and subordinate. */
  principale: {
    term: 'la principale',
    title: 'La phrase qui tient seule',
    body: "La principale tient debout toute seule : le métro était bloqué. La subordonnée s'appuie sur elle et commence par une conjonction : parce que le métro était bloqué. EN: the main clause stands alone; the subordinate clause leans on it.",
    examples: [
      { itemId: E(1202), note: 'une principale, toute seule' },
      { itemId: E(1201), note: 'une principale, puis une subordonnée' },
      { itemId: E(1209), note: 'la règle en une phrase' },
    ],
  },

  /** The small word at the head of the subordinate clause. */
  conjonction: {
    term: 'conjonction',
    title: 'Le petit mot qui fait le lien',
    body: "Parce que, puisque, comme, si bien que, pendant que, pour que : ce sont des conjonctions. Chacune dit le lien (cause, conséquence, temps, but) et chacune choisit le mode du verbe qui suit. EN: each conjunction names the link and picks the mood.",
    examples: [
      { itemId: E(1210), note: 'le lien, et le mode' },
      { itemId: E(1351), note: "parce que : l'indicatif" },
      { itemId: E(1352), note: 'pour que : le subjonctif, leçon 16' },
    ],
  },

  /** parce que, and why it cannot take a noun. */
  parceque: {
    term: 'parce que',
    title: 'La réponse à pourquoi',
    body: "Parce que répond à pourquoi. Il ouvre une subordonnée, donc il attend un sujet et un verbe : parce qu'il neige. Devant un nom seul, il faut à cause de. EN: parce que answers pourquoi and needs a subject and a verb.",
    examples: [
      { itemId: E(1215), note: 'la réponse, à l’oral' },
      { itemId: E(1216), note: "parce qu' devant il" },
      { itemId: 'fr.a1.maison.149', note: 'la forme la plus simple' },
    ],
  },

  /** puisque and comme. */
  puisque: {
    term: 'puisque/comme',
    title: 'La cause connue, la cause en tête',
    body: "Puisque donne une cause que l'autre connaît déjà : puisque tu as une voiture. Comme donne la cause au début de la phrase, avant la principale : comme il pleuvait, nous sommes restés. EN: puisque is a known cause; comme puts the cause first.",
    examples: [
      { itemId: E(1231), note: 'tu sais bien que tu as une voiture' },
      { itemId: E(1234), note: 'comme, en tête de phrase' },
      { itemId: E(1240), note: 'étant donné que, à lire' },
    ],
  },

  /** à cause de, grâce à. */
  causenom: {
    term: 'à cause de',
    title: 'Une cause qui est un nom',
    body: "À cause de et grâce à sont suivis d'un nom, pas d'une phrase. À cause de pour une cause négative, grâce à pour une cause positive. Du, au, des : ils se contractent. EN: à cause de and grâce à take a noun; one is negative, one positive.",
    examples: [
      { itemId: E(1249), note: 'la neige, une mauvaise cause' },
      { itemId: E(1251), note: 'ton aide, une bonne cause' },
      { itemId: E(1253), note: 'de + le = du' },
    ],
  },

  /** si bien que, de sorte que. */
  resultat: {
    term: 'si bien que',
    title: 'Le résultat, à l’indicatif',
    body: "Si bien que et de sorte que ouvrent la conséquence. Elle est un fait, elle est arrivée : le verbe est à l'indicatif. Ils viennent toujours après la cause, avec une virgule. EN: si bien que and de sorte que give the result, in the indicative.",
    examples: [
      { itemId: E(1267), note: 'la pluie, puis la rivière' },
      { itemId: E(1269), note: 'de sorte que, même sens' },
      { itemId: E(1331), note: 'un fait : l’a entendue' },
    ],
  },

  /** si / tellement / tant ... que. */
  intensite: {
    term: 'tellement que',
    title: 'Trop fort, donc une conséquence',
    body: "Si et tellement vont devant un adjectif ou un adverbe, tellement et tant après un verbe, tellement de et tant de devant un nom. Le que qui suit ouvre la conséquence. EN: si, tellement and tant mark the degree; que opens the result.",
    examples: [
      { itemId: E(1283), note: 'tellement + adjectif' },
      { itemId: E(1285), note: 'tellement de + nom' },
      { itemId: E(1288), note: 'tellement après le verbe' },
    ],
  },

  /** c'est pourquoi, par conséquent. */
  adverbe: {
    term: 'les adverbes',
    title: 'Deux phrases, pas une',
    body: "C'est pourquoi et par conséquent ne sont pas des conjonctions. Ils relient deux phrases, souvent après un point ou un point-virgule, et ne changent aucun mode. Par conséquent est le plus soutenu. EN: they join two sentences and open no subordinate clause.",
    examples: [
      { itemId: E(1301), note: 'un point, puis c’est pourquoi' },
      { itemId: E(1302), note: 'un point-virgule, puis par conséquent' },
      { itemId: E(1314), note: 'à l’oral : c’est pour ça que' },
    ],
  },

  /** purpose, recap of b1.16. */
  but: {
    term: 'le but',
    title: 'Ce que tu cherches à faire',
    body: "Pour et afin de avec un infinitif quand il y a un seul sujet. Pour que et afin que avec le subjonctif quand il y en a deux : c'est la leçon 16 du B1. Le but regarde devant. EN: one subject, pour + infinitive; two subjects, pour que + subjunctive.",
    examples: [
      { itemId: E(1318), note: 'un sujet : pour + infinitif' },
      { itemId: E(1319), note: 'afin de, plus écrit' },
      { itemId: E(1321), note: 'deux sujets : pour que' },
    ],
  },

  /** time subordinators. */
  temps: {
    term: 'pendant que',
    title: 'Le temps, sans quand',
    body: "Pendant que : deux choses en même temps. Depuis que : le début d'une situation qui dure. Lorsque : le quand de l'écrit. Après que : un fait déjà arrivé, donc l'indicatif. EN: while, since, when (written), after: all four take the indicative.",
    examples: [
      { itemId: E(1333), note: 'en même temps' },
      { itemId: E(1335), note: 'depuis que : ça dure' },
      { itemId: E(1339), note: 'après que : il est parti' },
    ],
  },

  /** the mood follows the conjunction. */
  mode: {
    term: 'le mode',
    title: 'Indicatif ou subjonctif',
    body: "Le mode ne vient pas du verbe : il vient de la conjonction. Parce que, puisque, si bien que, pendant que : indicatif. Pour que, avant que, bien que : subjonctif, comme dans les leçons 15, 16 et 32 du B1. EN: the conjunction, not the verb, decides the mood.",
    examples: [
      { itemId: E(1351), note: 'parce que : tu es là' },
      { itemId: E(1352), note: 'pour que : tu sois' },
      { itemId: E(1356), note: 'pendant que : tu es là' },
    ],
  },

  /** writing it up. */
  incident: {
    term: 'expliquer',
    title: 'Raconter un incident',
    body: "Pour expliquer un incident, dis ce qui s'est passé, puis les causes, puis les conséquences, puis ce que tu fais pour la suite. Varie les liens : un seul parce que, pas cinq. EN: what happened, the causes, the results, then the next step, with varied links.",
    examples: [
      { itemId: E(1379), note: 'annonce les causes' },
      { itemId: E(1375), note: 'une conséquence, par conséquent' },
      { itemId: E(1376), note: 'le but, pour la suite' },
    ],
  },
};
