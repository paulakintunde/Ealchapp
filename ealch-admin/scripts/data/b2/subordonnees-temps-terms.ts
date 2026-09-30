// b2.18.l1 « Les rapports de temps »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters. The 13-character labels
// (« en même temps », « un seul sujet », « l’antériorité ») are never used
// three together; most sections carry one or two chips.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './subordonnees-temps-corpus.ts';

export const SUBORDONNEES_TEMPS_TERMS: Record<string, LessonTerm> = {
  ligne: {
    term: 'la ligne',
    title: 'La ligne, vue du fait principal',
    body: "Place les deux faits sur une ligne et tiens-toi sur le fait principal. Si l'autre fait n'a pas encore eu lieu à ce moment-là, subjonctif : avant que, jusqu'à ce que. S'il a lieu ou a déjà eu lieu, indicatif : pendant que, après que, dès que. EN: Stand on the main event: not yet, subjunctive; happening or done, indicative.",
    examples: [
      { itemId: E(2417), note: 'le départ est encore à venir : subjonctif' },
      { itemId: E(2418), note: 'le train roule au même moment : indicatif' },
      { itemId: E(2424), note: 'le départ a déjà eu lieu : indicatif' },
    ],
  },

  avant: {
    term: 'avant que',
    title: 'Avant que, avant de',
    body: "Avant que regarde un fait qui n'a pas encore eu lieu : toujours le subjonctif, même dans un récit au passé, et le subjonctif passé pour un fait fini avant l'autre. Avec un seul sujet, l'écrit soigné passe à avant de + infinitif. EN: avant que always takes the subjunctive; one subject, avant de.",
    examples: [
      { itemId: E(2433), note: 'deux sujets : avant que + subjonctif' },
      { itemId: E(2435), note: 'un fait fini avant : subjonctif passé' },
      { itemId: E(2440), note: 'un seul sujet : avant de' },
    ],
  },

  limite: {
    term: 'la limite',
    title: "Jusqu'à ce que, en attendant que, d'ici à ce que",
    body: "Ces mots posent une limite qu'on attend : le fait n'a pas encore eu lieu, donc subjonctif. Jusqu'au moment où, lui, pose la limite comme un fait daté : indicatif. Tant que + négation dit la même chose que jusqu'à ce que. EN: A limit still awaited takes the subjunctive; a dated moment, the indicative.",
    examples: [
      { itemId: E(2450), note: "jusqu'à ce que : subjonctif" },
      { itemId: E(2456), note: "jusqu'au moment où : indicatif" },
      { itemId: E(2458), note: 'tant que + ne… pas : la même limite' },
    ],
  },

  expletif: {
    term: 'ne explétif',
    title: 'Le ne explétif',
    body: "Le ne explétif ne nie rien : il se glisse, sans obligation, là où le fait n'a pas encore eu lieu, après avant que, à moins que, de peur que, craindre que, éviter que, ou après un comparatif. Il marque un registre soutenu. Pour nier, il faut pas. EN: The expletive ne negates nothing; it is optional and formal.",
    examples: [
      { itemId: E(2468), note: 'le notaire va partir : rien de nié' },
      { itemId: E(2472), note: 'avec pas, une vraie négation' },
      { itemId: E(2473), note: 'après un comparatif' },
    ],
  },

  pendant: {
    term: 'en même temps',
    title: 'Quand, lorsque, pendant que, au moment où',
    body: "Les deux faits se passent en même temps, donc l'indicatif. Pendant que dit une durée, au moment où un instant, lorsque est le quand de l'écrit. Comme + imparfait, en tête de phrase, veut dire juste au moment où si l'autre fait tombe pendant l'action ; s'il en découle, c'est une cause. EN: Same time, so the indicative: a stretch, an instant, or the written quand.",
    examples: [
      { itemId: E(2487), note: 'pendant que : une action qui dure' },
      { itemId: E(2486), note: 'au moment où : un instant' },
      { itemId: E(2489), note: 'comme + imparfait : juste à ce moment' },
    ],
  },

  duree: {
    term: 'la durée',
    title: 'À mesure que, chaque fois que, tant que, depuis que',
    body: "À mesure que fait avancer deux faits ensemble ; chaque fois que répète un fait ; tant que dit aussi longtemps que ; depuis que date un début ; maintenant que ajoute une raison. Tous posent des faits réels : l'indicatif. EN: Progression, repetition, duration, a starting point: all take the indicative.",
    examples: [
      { itemId: E(2504), note: 'à mesure que : deux progressions' },
      { itemId: E(2506), note: 'chaque fois que : une répétition' },
      { itemId: E(2509), note: 'depuis que : un point de départ' },
    ],
  },

  alors: {
    term: 'alors que',
    title: 'Alors que, tandis que : le temps ou l’opposition',
    body: "Alors que et tandis que ont deux sens. Si tu peux dire pendant que, c'est le temps, souvent avec l'imparfait. Si tu peux dire en revanche, c'est l'opposition, comme dans la leçon 16 du B2. Dans les deux cas, l'indicatif. EN: If pendant que fits, it is time; if en revanche fits, it is opposition.",
    examples: [
      { itemId: E(2522), note: 'le temps : pendant qu’il traversait' },
      { itemId: E(2524), note: 'l’opposition : moi, au contraire' },
      { itemId: E(2526), note: 'tandis que : deux étages opposés' },
    ],
  },

  futur: {
    term: 'le futur',
    title: 'Quand tu arriveras',
    body: "Après quand, lorsque, pendant que, tant que, chaque fois que ou dès que, l'avenir se dit au futur, pas au présent comme en anglais. Seul si garde le présent. Vu du passé, ce futur devient un conditionnel : il a dit qu'il appellerait quand il arriverait. EN: The future after time words; si keeps the present.",
    examples: [
      { itemId: E(2538), note: 'quand + futur' },
      { itemId: E(2549), note: 'si + présent' },
      { itemId: E(2546), note: 'le futur vu du passé : conditionnel' },
    ],
  },

  apres: {
    term: 'après que',
    title: "Après que, et comment l'éviter",
    body: "Après que regarde un fait qui a eu lieu : l'indicatif. « Après qu'il soit parti » s'entend partout, mais reste critiqué à l'écrit. Pour éviter la question : après son départ, après être parti (même sujet), une fois qu'il est parti. EN: après que takes the indicative; a noun or a past infinitive avoids it.",
    examples: [
      { itemId: E(2556), note: 'après que + indicatif' },
      { itemId: E(2557), note: 'même sujet : après avoir' },
      { itemId: E(2558), note: 'après + nom' },
    ],
  },

  anteriorite: {
    term: 'l’antériorité',
    title: 'Dès que, aussitôt que, une fois que',
    body: "Pour dire qu'un fait est fini juste avant l'autre, mets un temps composé après dès que, et accorde-le au temps de l'autre verbe : passé composé avec un présent, plus-que-parfait avec un imparfait, futur antérieur avec un futur. Le passé antérieur se lit dans les livres. EN: The compound tense follows the other verb's tense.",
    examples: [
      { itemId: E(2572), note: 'présent : passé composé' },
      { itemId: E(2573), note: 'imparfait : plus-que-parfait' },
      { itemId: E(2574), note: 'futur : futur antérieur' },
    ],
  },

  sujet: {
    term: 'un seul sujet',
    title: 'Un seul sujet, un infinitif',
    body: "Quand la personne est la même dans les deux parties, l'écrit soigné préfère l'infinitif : avant de partir, en attendant de savoir, après avoir fini. Avec deux personnes différentes, la subordonnée revient : avant que tu partes. EN: One subject, an infinitive; two subjects, a clause.",
    examples: [
      { itemId: E(2440), note: 'avant de signer' },
      { itemId: E(2452), note: 'en attendant de connaître' },
      { itemId: E(2565), note: 'après avoir voté' },
    ],
  },

  oral: {
    term: 'à l’oral',
    title: 'Ce qui se dit, ce qui s’écrit',
    body: "À l'oral, on entend « après qu'il soit parti » et « sans qu'on ne l'entende ». Ce sont des formes répandues, mais critiquées à l'écrit : à l'examen, garde après que + indicatif et sans que sans ne. « Avant que la fuite a commencé », lui, est une faute partout. EN: Spoken forms are named, not taught; the written norm is tested.",
    examples: [
      { itemId: E(2564), note: "à l'écrit : est parti" },
      { itemId: E(2479), note: 'sans que, sans ne' },
      { itemId: E(2400), note: 'avant que + subjonctif, partout' },
    ],
  },

  rapport: {
    term: 'le rapport',
    title: 'Le compte rendu',
    body: "Un compte rendu raconte les faits dans l'ordre, du début à la fin, puis dit ce qui a été fait et ce qui reste à faire. Les mots de temps font la chronologie : avant que, pendant que, dès que, après avoir, jusqu'à ce que. EN: A report tells the events in order, then what was done and what comes next.",
    examples: [
      { itemId: E(2590), note: "l'annonce de la chronologie" },
      { itemId: E(2593), note: 'deux actions en même temps' },
      { itemId: E(2598), note: 'la suite, au futur' },
    ],
  },
};
