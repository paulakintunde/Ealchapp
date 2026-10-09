// c2.01.l1 « Précision, nuance et l’implicite » — the lesson glossary. DRAFT.
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER ROW BUDGET on a Pixel 6.
// Every term label below runs 8 to 14 characters; sections that combine
// three terms stay inside budget (checked by hand per section, as the C1
// playbook requires — there is no validator for the reverse of "named key
// has no definition").
//
// Every term defined here is surfaced by at least one section’s `terms`
// array (asserted by hand, same as every B1+/C1 lesson; there is no
// validator for an unsurfaced term).
//
// « le présupposé » is deliberately NOT redefined here: it belongs to la
// leçon 20 du C1, recapped by citation in act 5, never re-taught as a term
// in this glossary.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './precision-nuance-corpus.ts';

export const PRECISION_NUANCE_TERMS: Record<string, LessonTerm> = {
  /** Act 2: what a word suggests beyond its dictionary sense. */
  connotation: {
    term: 'connotation',
    title: "Ce qu’un mot suggère, au-delà de son sens",
    body: "Deux mots peuvent pointer vers la même réalité et ne jamais se remplacer : « déçu » et « frustré » parlent tous deux d’une attente non comblée, mais le premier ne blâme personne et le second vient d’un vocabulaire clinique, plus froid. La connotation est ce supplément de sens, jamais dans le dictionnaire seul. EN: Connotation is what a word suggests beyond its definition; two near-synonyms for the same fact can carry opposite colours.",
    examples: [
      { itemId: E(1403), note: 'déçu : une attente, sans accuser personne' },
      { itemId: E(1404), note: 'frustré : clinique, plus froid ici' },
      { itemId: E(1436), note: 'le mot qui nomme cette notion' },
    ],
  },

  /** Act 2 and 3: the familier/courant/soigné/littéraire ladder. */
  registre: {
    term: 'le registre',
    title: "Familier, courant, soigné, littéraire",
    body: "Un même fait se dit à quatre hauteurs : « laisser tomber » (familier), « abandonner » (courant), « renoncer à » (soigné), et une tournure encore plus marquée à l’écrit littéraire. Le bon registre n’est pas le plus poli : c’est celui que la situation demande, à l’écrit comme à l’oral. EN: The same fact can be said at four heights, from casual to literary; the right one is the one the situation calls for, not the most polite.",
    examples: [
      { itemId: E(1430), note: 'laisser tomber, familier' },
      { itemId: E(1431), note: 'abandonner, courant' },
      { itemId: E(1432), note: 'renoncer à, soigné' },
    ],
  },

  /** Act 2: how strong a word reads. */
  intensite: {
    term: "l’intensité",
    title: "À quel point le mot pousse",
    body: "Préoccupé, inquiet, anxieux et angoissé disent la même famille d’émotion à des forces différentes : le premier reste discret, le dernier dit une vraie détresse. Confondre les deux, c’est soit minimiser une urgence, soit dramatiser un détail. EN: Préoccupé, inquiet, anxieux and angoissé say the same family of feeling at different strengths; mixing them up either minimises or dramatises.",
    examples: [
      { itemId: E(1420), note: 'préoccupé, discret' },
      { itemId: E(1422), note: 'anxieuse, plus fort' },
      { itemId: E(1423), note: 'angoissée, le plus fort' },
    ],
  },

  /** Act 4: the English-cognate instinct. */
  reflexe: {
    term: 'le réflexe',
    title: "Choisir un mot parce qu’il ressemble à l’anglais",
    body: "Frustré, intéressant, demander : chacun existe en français et n’est pas faux, mais chacun est le premier mot qu’un anglophone atteint parce qu’il ressemble à son équivalent anglais, et chacun rate le registre voulu au moins une fois sur deux. Le réflexe se corrige en cherchant la famille entière avant d’écrire. EN: Frustré, intéressant, demander each exist and are not wrong, but each is the first word an English speaker reaches for because it looks English, and each misses the wanted register at least half the time.",
    examples: [
      { itemId: E(1465), note: 'frustré : clinique, pas la colère voulue' },
      { itemId: E(1472), note: 'demander : trop faible pour exiger' },
      { itemId: E(1482), note: 'le mot qui nomme ce réflexe' },
    ],
  },

  /** Act 5: irony read from a textual cue, as everyday register, past c1.20. */
  ironie: {
    term: "l’ironie",
    title: 'Le ton qui dit le contraire de ce qu’il affirme',
    body: "Une phrase ironique affirme quelque chose que le contexte contredit : « tout le loisir d’apprécier le délai » ne loue pas le délai, il s’en plaint froidement. La leçon 20 du C1 t’a appris à la repérer ; ici, elle sert à lire le registre que ta réponse doit prendre, jamais à l’ignorer en répondant au premier degré. EN: An ironic line states something the context contradicts; here it tells you the register your reply needs, never a cue to answer it literally.",
    examples: [
      { itemId: E(1490), note: "tout le loisir d’apprécier" },
      { itemId: E(1500), note: 'a eu la bonté de' },
      { itemId: E(1535), note: 'super original' },
    ],
  },

  /** Act 5: understatement, past c1.20. */
  litote: {
    term: 'la litote',
    title: 'Dire moins pour faire entendre plus',
    body: "« Un peu bruyant », « particulier », « au moins le mérite d’être rapide » : chacun dit moins que ce qui est vraiment pensé, et c’est justement ce qui se fait entendre. Une réponse qui prend la litote au mot, sans voir ce qu’elle couvre, répond à côté. EN: « A bit noisy », « particular », « at least fast » each say less than what is really meant, which is exactly the point; a reply that takes it literally misses it.",
    examples: [
      { itemId: E(1492), note: 'un peu bruyant' },
      { itemId: E(1498), note: 'particulier...' },
      { itemId: E(1502), note: "au moins le mérite d’être rapide" },
    ],
  },

  /** Acts 6 and 7: the new skill — matching a reply’s register. */
  tonjuste: {
    term: 'le ton juste',
    title: "Répondre au registre qu’on t’a donné",
    body: "Une ligne ironique ou en litote appelle une réponse qui reconnaît le problème sans le minimiser ni l’amplifier : ni une gaieté forcée, ni de la colère. Le ton juste se règle sur l’indice du message, jamais sur ton propre humeur. EN: An ironic or understated line calls for a reply that acknowledges the problem without minimising or amplifying it; the right tone is set by the message’s cue, never by your own mood.",
    examples: [
      { itemId: E(1511), note: 'je comprends que le délai t’a pesé' },
      { itemId: E(1518), note: 'tu as raison d’être agacé' },
      { itemId: E(1536), note: 'oh non, vraiment désolé' },
    ],
  },

  /** Act 6: the overreading fault, the mirror image c1.20 named for texts. */
  surlecture: {
    term: 'sur-lecture',
    title: 'Trouver une ironie partout',
    body: "Lire une ironie dans chaque phrase neutre est le défaut inverse de ne jamais en voir : sans indice précis dans le texte, c’est une invention, pas une lecture. La règle que la leçon 20 du C1 appliquait aux textes vaut ici pour une réponse : pas d’indice, pas d’ironie. EN: Finding irony in every neutral sentence is the mirror fault of never seeing it: without a precise cue, it is invention, not reading.",
    examples: [
      { itemId: E(1522), note: 'un indice avant de lire une ironie' },
      { itemId: E(1521), note: 'le défaut inverse nommé' },
    ],
  },

  /** Act 6: the underreading fault. */
  souslecture: {
    term: 'sous-lecture',
    title: 'Ne pas voir ce que le ton couvre',
    body: "Répondre au premier degré à une ligne clairement chargée, c’est la sous-lecture : le cue est là, et la réponse l’a laissé passer. Les deux fautes se corrigent de la même façon : chercher l’indice avant de régler le ton de la réponse. EN: Answering a clearly loaded line at face value is under-reading: the cue was there and the reply missed it.",
    examples: [
      { itemId: E(1523), note: 'un message neutre, sans indice, lu au premier degré' },
      { itemId: E(1510), note: 'une réponse qui esquive sans le dire' },
    ],
  },
};
