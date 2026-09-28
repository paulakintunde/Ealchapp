// b2.03.l1 « Si j’avais su »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 12 characters, so any trio fits (the widest,
// « la condition » + « la question » + « le reproche », is 34).
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ». `examples` cite rows by id and never restate
// French.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, B110 } from './si-irreel-passe-corpus.ts';

export const SI_PASSE_TERMS: Record<string, LessonTerm> = {
  recul: {
    term: 'le recul',
    title: 'La paire recule d’un cran',
    body: "D’une paire à l’autre, les deux moitiés reculent ensemble : présent, imparfait, plus-que-parfait devant ; futur, conditionnel, conditionnel passé derrière. Si une seule moitié bouge, la paire casse. EN: From one pair to the next, both halves move back together; if only one moves, the pair breaks.",
    examples: [
      { itemId: B110(1200), note: 'la paire réelle : ça peut arriver' },
      { itemId: B110(1201), note: 'un cran : ce n’est pas le cas' },
      { itemId: E(1412), note: 'deux crans : ce n’est pas arrivé' },
    ],
  },

  condition: {
    term: 'la condition',
    title: 'La moitié si',
    body: "Au passé, la moitié si prend le plus-que-parfait : avoir ou être à l’imparfait, puis le participe. Le choix de l’auxiliaire est celui du passé composé, et jamais de conditionnel derrière si. EN: The si half takes the pluperfect, with the same auxiliary as the passé composé, and never a conditional.",
    examples: [
      { itemId: E(1425), note: 'avoir : nous avions réservé' },
      { itemId: E(1426), note: 'être : elle était arrivée' },
      { itemId: E(1428), note: 'la négation autour de l’auxiliaire' },
    ],
  },

  resultat: {
    term: 'le résultat',
    title: 'La moitié conditionnel passé',
    body: "Le résultat prend avoir ou être au conditionnel, puis le participe : j’aurais pris, je serais venu. Avec un s. Sans s, j’aurai pris est un futur antérieur, et la phrase ne parle plus d’hier. EN: The result takes avoir or être in the conditional plus the participle, with an s.",
    examples: [
      { itemId: E(1440), note: 'j’aurais appelé' },
      { itemId: E(1443), note: 'nous serions partis' },
      { itemId: E(1445), note: 'tu aurais pu : pouvoir au conditionnel passé' },
    ],
  },

  inverse: {
    term: 'l’inverse',
    title: 'Le contraire des faits',
    body: "Une paire au passé dit ce qui n’a pas eu lieu. Pour retrouver les faits, retourne les deux moitiés : si j’avais su veut dire je ne savais pas. Avec une négation dans la paire, le fait est positif. EN: A past pair states what did not happen; turn both halves over to find the facts.",
    examples: [
      { itemId: E(1400), note: 'donc : je n’ai pas vérifié, j’ai raté le train' },
      { itemId: E(1467), note: 'donc : tu m’as appelé, je n’ai rien raté' },
      { itemId: E(1411), note: 'la règle' },
    ],
  },

  regret: {
    term: 'le regret',
    title: 'Ce que tu aurais voulu faire',
    body: "Le regret, c’est la paire au passé à la première personne : si j’avais travaillé, j’aurais réussi. Si seulement, suivi du plus-que-parfait, dit le regret sans la deuxième moitié. EN: A regret is the past pair in the first person; si seulement plus the pluperfect says it alone.",
    examples: [
      { itemId: E(1454), note: 'un regret complet' },
      { itemId: E(1456), note: 'si seulement : la moitié seule' },
      { itemId: E(1460), note: 'un regret qu’on pèse, et qu’on ne regrette pas' },
    ],
  },

  reproche: {
    term: 'le reproche',
    title: 'Ce que l’autre aurait dû faire',
    body: "Le reproche, c’est la même paire adressée à tu ou à vous. Pour l’adoucir, parle de toi dans le résultat : si tu m’en avais parlé, j’aurais compris. EN: A reproach is the same pair aimed at tu or vous; soften it by putting yourself in the result.",
    examples: [
      { itemId: E(1457), note: 'un reproche direct' },
      { itemId: E(1463), note: 'un reproche adouci' },
      { itemId: E(1465), note: 'la règle' },
    ],
  },

  chance: {
    term: 'la chance',
    title: 'Le soulagement : ce qu’on a évité',
    body: "La paire au passé sert aussi à mesurer sa chance : si tu ne m’avais pas appelé, j’aurais raté le train. Sans ton appel dit la même chose en trois mots, et j’ai failli dit que ça a presque eu lieu. EN: The past pair also measures luck: the negative pair names what was avoided.",
    examples: [
      { itemId: E(1467), note: 'tu m’as appelé, je n’ai rien raté' },
      { itemId: E(1475), note: 'sans + nom' },
      { itemId: E(1474), note: 'presque arrivé' },
    ],
  },

  memeSi: {
    term: 'le même si',
    title: 'Le résultat qui ne change pas',
    body: "Même si + plus-que-parfait, puis conditionnel passé : même avec une autre condition, le résultat aurait été le même. Avec un passé composé derrière, même si concède un fait réel. EN: With même si, the result would have been the same; with a passé composé, it concedes a real fact.",
    examples: [
      { itemId: E(1494), note: 'je serais venu de toute façon' },
      { itemId: E(1496), note: 'il a plu, et le match a eu lieu' },
      { itemId: E(1504), note: 'la règle' },
    ],
  },

  saufSi: {
    term: 'le sauf si',
    title: 'La seule exception',
    body: "Sauf si + plus-que-parfait nomme la seule condition qui aurait tout changé : je n’aurais jamais quitté Lyon, sauf si on m’avait proposé un poste. Dans un discours rapporté, sauf si suit simplement la concordance. EN: Sauf si plus the pluperfect names the one condition that would have changed everything.",
    examples: [
      { itemId: E(1499), note: 'la seule exception' },
      { itemId: E(1501), note: 'rien, sauf une chose' },
      { itemId: E(1500), note: 'rapporté : sauf s’il neigeait' },
    ],
  },

  question: {
    term: 'la question',
    title: 'Le si qui demande',
    body: "Après demander, savoir ou se demander, si veut dire whether. Le plus-que-parfait derrière lui ne fait aucune hypothèse, et un conditionnel y est permis : je me demandais si elle aurait le temps. EN: After a question verb, si means whether: no hypothesis, and a conditional is allowed.",
    examples: [
      { itemId: E(1512), note: 'une question rapportée' },
      { itemId: E(1522), note: 'un conditionnel après si, et c’est juste' },
      { itemId: E(1519), note: 'la règle' },
    ],
  },

  uchronie: {
    term: 'l’uchronie',
    title: 'Refaire l’histoire',
    body: "Une uchronie part d’un fait réel, le change, et déroule les suites : si le chemin de fer n’était pas passé par là, le village serait resté minuscule. C’est une chaîne de paires au passé. EN: A counterfactual history changes one real fact and follows the chain of consequences.",
    examples: [
      { itemId: E(1523), note: 'le premier maillon' },
      { itemId: E(1524), note: 'le maillon suivant' },
      { itemId: E(1534), note: 'la définition' },
    ],
  },
};
