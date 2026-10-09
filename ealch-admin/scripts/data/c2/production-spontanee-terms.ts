// c2.08.l1 « La production orale spontanée » — the lesson glossary. DRAFT.
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER ROW BUDGET on a Pixel 6.
// Every term label below runs 6 to 17 characters; sections that combine two
// or three terms stay inside budget (checked by hand per section, as the C1
// playbook requires — there is no validator for the reverse of "named key
// has no definition").
//
// Every term defined here is surfaced by at least one section's `terms`
// array (asserted by hand, same as every B1+/C1/C2 lesson; there is no
// validator for an unsurfaced term).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './production-spontanee-corpus.ts';

export const PRODUCTION_SPONTANEE_TERMS: Record<string, LessonTerm> = {
  /** Act 1: the central metaphor. */
  direct: {
    term: 'le direct',
    title: 'Ce qui ne s’arrête pas pour toi',
    body: "Un exposé préparé choisit ses mots avant de les dire ; une émission en direct ne te laisse pas ce temps. Elle continue, que tu parles ou que tu te taises, ce qui change entièrement ce que tu dois savoir faire. EN: A prepared exposé has already chosen its words; a live broadcast gives you no such time, and keeps running whether you speak or stay silent.",
    examples: [
      { itemId: E(1805), note: 'un exposé préparé choisit déjà ses mots' },
      { itemId: E(1806), note: 'une réponse spontanée choisit en parlant' },
      { itemId: E(1810), note: 'personne ne te donne une heure ici' },
    ],
  },

  /** Act 2: deliberate gambits vs empty verbal tics. */
  gambit: {
    term: 'le gambit',
    title: 'Un mot qui annonce qu’une réponse arrive',
    body: "Disons que, comment dire, c’est une bonne question : ces formules ne disent encore rien, mais elles annoncent clairement qu’une réponse construite arrive. Un tic verbal répété (euh, euh, euh) ne promet rien du tout, et un silence complet laisse croire que tu n’as rien à dire. EN: A gambit announces that a built answer is coming; an empty verbal tic promises nothing, and total silence suggests you have nothing to say.",
    examples: [
      { itemId: E(1812), note: 'c’est une bonne question' },
      { itemId: E(1813), note: 'disons que…' },
      { itemId: E(1822), note: 'la règle qui sépare les deux' },
    ],
  },

  /** Act 3: the structuring device. */
  gabarit: {
    term: 'le gabarit',
    title: 'Quatre gestes, un contenu différent chaque fois',
    body: "Reformuler, prendre position, justifier avec un exemple, puis nuancer ou ouvrir : le gabarit tient debout quel que soit le sujet, parce qu’il structure la DÉMARCHE, pas le contenu. Sans lui, une réponse spontanée part souvent dans plusieurs directions à la fois. EN: Rephrase, take a position, justify with an example, then qualify or open up; the template structures the MOVE, not the content, which is why it holds regardless of topic.",
    examples: [
      { itemId: E(1830), note: 'premier geste : reformuler' },
      { itemId: E(1832), note: 'deuxième geste : prendre position' },
      { itemId: E(1836), note: 'quatrième geste : nuancer ou ouvrir' },
    ],
  },

  /** Act 4: self-correction that keeps the thread. */
  fil: {
    term: 'le fil',
    title: 'Se corriger sans tout recommencer',
    body: "Ou plutôt, ce que je veux dire, c’est que, pour être exact : chacune répare un mot ou une idée en une phrase, sans arrêter la réponse. Recommencer depuis le début, ou s’excuser plusieurs fois de suite, efface au contraire tout ce qui tenait déjà debout. EN: Each of these repairs one word or idea in a single sentence without stopping the reply; restarting from zero, or apologising repeatedly, erases what was already standing instead.",
    examples: [
      { itemId: E(1847), note: 'ou plutôt, précisons les choses' },
      { itemId: E(1856), note: 'la règle : garder la direction, pas l’effacer' },
      { itemId: E(1862), note: 'un mot, jamais la phrase entière' },
    ],
  },

  /** Act 5: the new skill, judging two whole replies. */
  tenir: {
    term: 'tenir ensemble',
    title: 'Trois choses qui tiennent une réponse debout',
    body: "Rester sur le sujet, se rétablir une fois sans paniquer, et conclure : une réponse qui fait les trois tient debout, même si elle n’est pas parfaite ailleurs. Une réponse peut être grammaticalement sans défaut et pourtant ne tenir debout nulle part, si elle ne conclut jamais rien. EN: Staying on topic, recovering once without panicking, and concluding keep a reply standing, even if it is imperfect elsewhere; a grammatically flawless reply can still not stand up anywhere if it never concludes.",
    examples: [
      { itemId: E(1865), note: 'la réponse B : limite reconnue, fait précis' },
      { itemId: E(1866), note: 'la réponse A : ne conclut jamais' },
      { itemId: E(1875), note: 'les trois choses nommées ensemble' },
    ],
  },

  /** Act 6: the trap — genuine recovery vs lost coherence. */
  retablissement: {
    term: 'le rétablissement',
    title: 'Même surface, deux destinations différentes',
    body: "« Enfin, bon, je sais plus, on verra » et « ou plutôt, disons les choses ainsi » commencent presque pareil. Le premier tourne en rond sans jamais rien nommer ; le second nomme le problème et avance vers une phrase qui tient. La différence n’est jamais dans le mot d’hésitation, elle est dans ce qui arrive juste après. EN: These two openings sound almost alike; one circles without ever naming anything, the other names the problem and moves toward a sentence that holds. The difference is never the hesitation word, it is what comes right after.",
    examples: [
      { itemId: E(1877), note: 'cohérence perdue : tourne en rond' },
      { itemId: E(1878), note: 'rétablissement réel : nomme et avance' },
      { itemId: E(1889), note: 'la règle qui sépare les deux' },
    ],
  },

  /** Act 7 and 8: landing the reply. */
  conclusion: {
    term: 'la conclusion',
    title: 'Un mot de clôture, jamais un arrêt net',
    body: "Une vraie conclusion nomme une suite concrète, même brève : un prochain rendez-vous, un geste déjà en place, un mot de remerciement. Un silence qui traîne, ou un enchaînement direct sur autre chose sans un mot de fin, n’en nomme aucune et laisse l’auditeur en suspens. EN: A real conclusion names a concrete next step, however brief; a silence that drags on, or moving straight into something else with no closing word, names none and leaves the listener hanging.",
    examples: [
      { itemId: E(1900), note: 'en résumé, trois choses' },
      { itemId: E(1901), note: 'la règle : une suite nommée' },
      { itemId: E(1910), note: 'le bilan de la mission' },
    ],
  },
};
