// c2.07.l1 « Traduire la poésie » — the lesson glossary. DRAFT.
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER ROW BUDGET on a Pixel 6.
// Every term label below runs 6 to 22 characters; checked by hand per
// section, as the C1 playbook requires — there is no validator for the
// reverse of "named key has no definition".
//
// Every term defined here is surfaced by at least one section's `terms`
// array (asserted by hand, same as every B1+/C1 lesson; there is no
// validator for an unsurfaced term). Kept to six terms, deliberately fewer
// than c2.02's nine, matching this lesson's smaller, optional-enrichment
// scope.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './poesie-corpus.ts';

export const POESIE_TERMS: Record<string, LessonTerm> = {
  /** Acts 1-2: the overview concept, set up before any single one is drilled. */
  bagages: {
    term: 'les quatre bagages',
    title: 'Ce qu’une traduction peut porter',
    body: "Une traduction pèse toujours quatre choses : le ton (le climat affectif), le rythme (la respiration du poème), l’image (ce que le lecteur voit) et le sens littéral (ce que les mots disent). Aucune traduction ne porte les quatre à la fois jusqu’à l’autre rive ; le travail du traducteur est de choisir, et de savoir ce qu’il a choisi. EN: A translation always weighs four things: tone, rhythm, imagery and literal meaning; no translation carries all four across, and the translator's job is to choose, and know what was chosen.",
    examples: [
      { itemId: E(2210), note: 'les quatre bagages, nommés' },
      { itemId: E(2211), note: 'la question à se poser avant de choisir' },
    ],
  },

  /** Act 2: tone specifically. */
  ton: {
    term: 'le ton',
    title: 'Le climat affectif d’une ligne',
    body: "Le ton d’un poème est son climat affectif : mélancolique, ironique, tendre. « Blessent mon cœur d’une langueur monotone » porte un ton las et résigné ; une traduction trop neutre (« a monotonous languor ») garde le sens, mais laisse ce ton s’évaporer. EN: A poem's tone is its emotional climate; a too-neutral translation can keep the meaning while letting that climate evaporate.",
    examples: [
      { itemId: E(2212), note: 'la ligne, en français' },
      { itemId: E(2238), note: 'un ton gardé, « faint » contre « suffocating »' },
    ],
  },

  /** Act 2-3: rhythm. */
  rythme: {
    term: 'le rythme',
    title: 'La respiration du poème',
    body: "Le rythme d’un poème est sa respiration : le compte des syllabes, les sons répétés, les lignes courtes ou longues. Les six syllabes courtes de « les sanglots longs des violons de l’automne » imitent, par leur brièveté même, un sanglot ; une traduction plus longue peut garder le sens et perdre ce souffle. EN: A poem's rhythm is its breathing; a longer translation can keep the sense and lose that breath.",
    examples: [
      { itemId: E(2213), note: 'six syllabes courtes, un souffle court' },
      { itemId: E(2244), note: 'un rythme ancien gardé, « hither and thither »' },
    ],
  },

  /** Act 2-4: imagery. */
  image: {
    term: "l’image",
    title: 'Ce que le lecteur voit ou sent',
    body: "L’image d’un poème est ce que le lecteur voit ou sent : une feuille morte, un vent, un visage. Elle se garde ou se perd selon le mot choisi, et elle ne doit jamais être REMPLACÉE par une image absente de l’original, même pour gagner une rime. EN: A poem's imagery is what the reader sees or feels, and it must never be replaced by an image absent from the original, even to win a rhyme.",
    examples: [
      { itemId: E(2214), note: "l’image de la feuille morte" },
      { itemId: E(2270), note: 'une image inventée, refusée' },
    ],
  },

  /** Act 5: the central trap, both directions. */
  piegemotamot: {
    term: 'le piège du mot à mot',
    title: 'Juste, et pourtant perdu',
    body: "Le piège le plus fréquent n’est pas une faute de grammaire : c’est un bagage perdu sans qu’on l’ait choisi, en traduisant mot à mot. Il existe aussi un piège inverse, moins attendu : sacrifier le sens ou l’image pour forcer une rime, comme inventer « the dead rose » là où le poème dit « la feuille morte ». EN: The most frequent trap is a piece of luggage lost without ever being chosen; the opposite trap sacrifices meaning or imagery to force a rhyme.",
    examples: [
      { itemId: E(2267), note: 'le piège direct : perdre sans choisir' },
      { itemId: E(2268), note: 'le piège inverse : sacrifier pour une rime' },
      { itemId: E(2270), note: 'une rose qui n’existe nulle part dans le poème' },
    ],
  },

  /** Acts 1-6: the whole lesson's skill, closing term. */
  traversee: {
    term: 'la traversée',
    title: 'Ce qu’on garde, ce qu’on laisse sur la rive',
    body: "Traduire un poème, c’est une traversée : on ne porte jamais tous ses bagages jusqu’à l’autre rive. Une bonne traduction n’est pas celle qui prétend n’avoir rien perdu ; c’est celle qui sait nommer, pour chaque ligne, ce qu’elle a choisi de garder, et ce qu’elle a laissé derrière elle. EN: Translating a poem is a crossing; a good translation is the one that can name, for every line, what it chose to keep, and what it left behind.",
    examples: [
      { itemId: E(2231), note: 'garder ET nommer ce qui manque' },
      { itemId: E(2287), note: 'aucune traduction n’est parfaite' },
    ],
  },
};
