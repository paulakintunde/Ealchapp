// b2.06.l1 « Subjonctif ou indicatif ? »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters. The two longest
// (« sans affirmer » 13, « la concession » 13) are never used together.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './subjonctif-indicatif-corpus.ts';

export const SUBJ_IND_TERMS: Record<string, LessonTerm> = {
  affirmer: {
    term: 'affirmer',
    title: 'Poser le fait comme vrai',
    body: "Affirmer, c'est dire « c'est ainsi » : tu donnes le fait comme une information et tu t'engages sur lui. C'est le travail de l'indicatif, même quand le fait est seulement probable. EN: To assert is to present the fact as information and commit to it; that is the indicative's job.",
    examples: [
      { itemId: E(1805), note: 'je sais que : tu poses le fait' },
      { itemId: E(1802), note: 'probable : tu t’engages quand même' },
      { itemId: E(1867), note: 'le restaurant existe, tu l’affirmes' },
    ],
  },

  regarder: {
    term: 'sans affirmer',
    title: 'Regarder le fait sans l’affirmer',
    body: "Le subjonctif prend le fait et fait autre chose avec lui : le vouloir, le craindre, en douter, le chercher, le juger, le concéder. Le fait peut être vrai ; la phrase ne l'affirme pas. EN: The subjunctive does something else with the fact than assert it, even when the fact is true.",
    examples: [
      { itemId: E(1804), note: 'tu en doutes' },
      { itemId: E(1803), note: 'tu l’envisages seulement' },
      { itemId: E(1800), note: 'tu le cherches, il n’existe pas encore' },
    ],
  },

  question: {
    term: 'la question',
    title: 'Crois-tu qu’il vienne, ou qu’il viendra',
    body: "Avec l'inversion, le subjonctif laisse entendre ton doute ; l'indicatif demande simplement un avis. La question avec est-ce que ou l'intonation garde le plus souvent l'indicatif. La question négative (ne crois-tu pas que) affirme : indicatif. EN: Inversion plus subjunctive signals doubt; a negative question asserts.",
    examples: [
      { itemId: E(1827), note: 'qu’il vienne : tu en doutes' },
      { itemId: E(1828), note: 'qu’il viendra : une vraie question' },
      { itemId: E(1831), note: 'la question négative cherche l’accord' },
    ],
  },

  certitude: {
    term: 'la certitude',
    title: 'De certain à peu probable',
    body: "Certain, clair, vrai et probable t'engagent : indicatif. Possible, il se peut, peu probable, exclu et pas certain n'affirment pas : subjonctif. La frontière passe entre probable et possible, pas entre sûr et pas sûr. EN: Probable still asserts; possible does not.",
    examples: [
      { itemId: E(1846), note: 'clair : indicatif' },
      { itemId: E(1848), note: 'probable : indicatif' },
      { itemId: E(1849), note: 'peu probable : subjonctif' },
    ],
  },

  recherche: {
    term: 'la recherche',
    title: 'Chercher ou avoir trouvé',
    body: "Dans une relative, si la chose existe et que tu l'affirmes, l'indicatif. Si tu la cherches, la souhaites ou dis qu'elle n'existe pas (personne qui, rien qui, aucun… qui), le subjonctif. EN: A relative about something that exists takes the indicative; one about something sought or denied, the subjunctive.",
    examples: [
      { itemId: E(1864), note: 'cherchée : sache' },
      { itemId: E(1865), note: 'trouvée : sait' },
      { itemId: E(1868), note: 'personne : puisse' },
    ],
  },

  seul: {
    term: 'le seul qui',
    title: 'Le seul, le premier, le meilleur',
    body: "Après un superlatif ou le seul, l'unique, le premier, le dernier, le subjonctif donne ton jugement ; l'indicatif constate un fait vérifiable. Pour éviter le choix, le premier à ou le dernier à suivi de l'infinitif. EN: The subjunctive judges, the indicative states a checkable fact.",
    examples: [
      { itemId: E(1883), note: 'ton jugement : puisse' },
      { itemId: E(1884), note: 'un fait : a répondu' },
      { itemId: E(1887), note: 'le premier à : pas de choix' },
    ],
  },

  but: {
    term: 'but ou effet',
    title: 'Le but visé, ou le résultat obtenu',
    body: "Un but n'est pas encore atteint : pour que, afin que, trop… pour que, subjonctif. Sans que prend aussi le subjonctif : le fait ne se produit pas. Un résultat est là : si bien que, tellement… que, indicatif. De sorte que et de façon que disent les deux : le mode tranche. EN: A goal takes the subjunctive, a result the indicative.",
    examples: [
      { itemId: E(1901), note: 'pour que : le but' },
      { itemId: E(1902), note: 'si bien que : le résultat' },
      { itemId: E(1903), note: 'de sorte que + subjonctif : le but' },
    ],
  },

  concession: {
    term: 'la concession',
    title: 'Bien que, même si, quoi que',
    body: "Bien que, quoique, quoi que, quel que et si… que concèdent un fait sans l'affirmer : subjonctif. Même si reste un si : indicatif, et l'imparfait ou le plus-que-parfait pour une hypothèse. EN: Bien que concedes with the subjunctive; même si is a si and keeps the indicative.",
    examples: [
      { itemId: E(1919), note: 'bien que : soit' },
      { itemId: E(1920), note: 'même si : est' },
      { itemId: E(1924), note: 'quoi que, en deux mots' },
    ],
  },

  apres: {
    term: 'après que',
    title: 'Le piège d’après que',
    body: "Après que regarde un fait accompli, ou qui le sera : indicatif, même si l'oreille entend partout après qu'il soit parti. Avant que, jusqu'à ce que et en attendant que regardent un fait à venir : subjonctif. EN: Après que takes the indicative; avant que takes the subjunctive.",
    examples: [
      { itemId: E(1937), note: 'après que : a voté' },
      { itemId: E(1938), note: 'avant que : prenne' },
      { itemId: E(1939), note: 'l’erreur la plus fréquente, corrigée' },
    ],
  },

  registre: {
    term: 'le registre',
    title: 'Quand les deux modes sont possibles',
    body: "À l'oral, je ne crois pas qu'il est venu est une variante courante, plus familière. À l'écrit soigné et à l'examen, le subjonctif reste la norme. Et le ne explétif (avant qu'il ne parte) est un signe de registre soutenu. EN: Where both moods occur, the indicative after a denied opinion is mainly a spoken variant.",
    examples: [
      { itemId: E(1955), note: 'l’écrit : soit venu' },
      { itemId: E(1956), note: 'l’oral : est venu' },
      { itemId: E(1941), note: 'le ne explétif, soutenu' },
    ],
  },
};
