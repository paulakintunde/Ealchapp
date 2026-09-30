// b2.12.l1 « Le gérondif »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters. The 12- and 13-character
// labels (« trois à part », « la condition », « l’opposition », « en même
// temps », « faux gérondif ») are never used three together; most sections
// carry one or two chips.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './gerondif-corpus.ts';

export const GERONDIF_TERMS: Record<string, LessonTerm> = {
  sujet: {
    term: 'le sujet',
    title: 'Le sujet prêté',
    body: "Le gérondif n'a pas de sujet à lui : il prend celui du verbe principal. En sortant du métro, j'ai dû passer un contrôle : c'est moi qui sortais. Si le verbe principal a un autre sujet, c'est lui qui fait l'action du gérondif, et la phrase dit autre chose. EN: The gérondif borrows the main verb's subject.",
    examples: [
      { itemId: E(1600), note: 'je sors, je passe le contrôle' },
      { itemId: E(1740), note: 'j’entre, je vois Marie' },
      { itemId: E(1745), note: 'c’est moi qui sors du métro' },
    ],
  },

  radical: {
    term: 'le radical',
    title: 'Pars de nous',
    body: "Le participe présent se construit comme l'imparfait de la leçon 1 du B1 : tu pars de nous au présent, tu coupes -ons et tu ajoutes -ant. Nous finissons donne finissant, nous faisons donne faisant. Devant le gérondif, en, toujours. EN: Start from nous, cut -ons, add -ant, and put en in front.",
    examples: [
      { itemId: E(1617), note: 'nous finissons : finissant' },
      { itemId: E(1619), note: 'nous faisons : faisant' },
      { itemId: E(1622), note: 'nous mangeons : le e reste' },
    ],
  },

  trois: {
    term: 'trois à part',
    title: 'Ayant, étant, sachant',
    body: "Trois verbes ne suivent pas le nous : avoir donne ayant, être donne étant, savoir donne sachant. Savant existe, mais c'est un nom ou un adjectif, pas un participe. EN: avoir, être and savoir give ayant, étant, sachant.",
    examples: [
      { itemId: E(1640), note: 'avoir : en ayant' },
      { itemId: E(1641), note: 'être : en étant' },
      { itemId: E(1642), note: 'savoir : en sachant' },
    ],
  },

  simultane: {
    term: 'en même temps',
    title: 'Pendant que, au moment où',
    body: "Le gérondif dit souvent que deux actions se passent en même temps, chez la même personne : il chante en se douchant. Il peut aussi marquer un moment précis : en arrivant à la gare, j'ai acheté un billet. Deux personnes différentes : pendant que ou quand. EN: Two things at once, one person.",
    examples: [
      { itemId: E(1661), note: 'lui chante, lui se douche' },
      { itemId: E(1663), note: 'au moment où j’arrive' },
      { itemId: 'fr.b1.connecteurs-logiques.1333', note: 'deux sujets : pendant que reste' },
    ],
  },

  maniere: {
    term: 'la manière',
    title: 'Comment ? La manière et le moyen',
    body: "Le gérondif répond à la question comment : il est entré en courant (la manière), j'ai payé mes études en travaillant le soir (le moyen). Avec ou par demandent un nom : avec un sourire, par téléphone. EN: The gérondif answers how: the manner or the means.",
    examples: [
      { itemId: E(1610), note: 'la manière : en courant' },
      { itemId: E(1677), note: 'le moyen : en travaillant' },
      { itemId: E(1679), note: 'le proverbe du moyen' },
    ],
  },

  condition: {
    term: 'la condition',
    title: 'En partant tôt = si tu pars tôt',
    body: "Le gérondif peut dire si : en partant tôt, tu éviteras les bouchons. Le verbe principal est alors au futur, au présent, à l'impératif ou au conditionnel. La condition vaut pour la même personne ; si le sujet change, garde si. EN: The gérondif can mean si, with the same subject.",
    examples: [
      { itemId: E(1694), note: 'si tu pars tôt' },
      { itemId: E(1698), note: 'si tu prenais le train' },
      { itemId: 'fr.b2.conseils-et-suggestions.1309', note: 'si tu étais parti plus tôt' },
    ],
  },

  cause: {
    term: 'la cause',
    title: 'En voulant aider',
    body: "Le gérondif peut aussi dire pourquoi : en voulant aider, il a tout cassé, c'est-à-dire parce qu'il voulait aider. Souvent, le verbe principal raconte une conséquence au passé. Un même gérondif peut porter deux sens : c'est la phrase qui choisit. EN: The gérondif can give the cause of what follows.",
    examples: [
      { itemId: E(1611), note: 'parce qu’il voulait aider' },
      { itemId: E(1712), note: 'l’oubli lui a fait rater l’avion' },
      { itemId: 'fr.a2.corps.001', note: 'la chute a causé la fracture' },
    ],
  },

  opposition: {
    term: 'l’opposition',
    title: 'Tout en sachant',
    body: "Tout devant le gérondif souligne que deux choses vont ensemble. Quand elles se contredisent, tout en dit une opposition, comme bien que : tout en sachant que c'était risqué, il a accepté. Le sujet reste le même ; sinon, garde bien que. EN: Tout en sets two facts against each other, like bien que.",
    examples: [
      { itemId: E(1725), note: 'il savait, et pourtant il a accepté' },
      { itemId: E(1728), note: 'bien que je connaisse le chemin' },
      { itemId: E(1730), note: 'deux choses à la fois' },
    ],
  },

  bascule: {
    term: 'la bascule',
    title: 'Quand le sujet change',
    body: "Si les deux verbes n'ont pas le même sujet, le gérondif ne va plus : bascule vers une subordonnée (quand, pendant que, si, parce que, bien que), ou change le sujet du verbe principal pour qu'il fasse les deux actions. EN: Two subjects: switch to a clause, or change the main subject.",
    examples: [
      { itemId: E(1751), note: 'quand je suis arrivée, une amie…' },
      { itemId: E(1750), note: 'en arrivant, j’ai été hébergée' },
      { itemId: E(1746), note: 'qui sortait : c’est Paul qui sort' },
    ],
  },

  faux: {
    term: 'faux gérondif',
    title: 'En tout cas, en tant que',
    body: "Un gérondif, c'est en suivi d'un verbe en -ant. En tout cas, en tant que ou en avant n'en sont pas : cas est un nom, tant et avant sont d'autres mots. En attendant et soit dit en passant sont d'anciens gérondifs devenus des expressions figées. EN: en without an -ant verb is not a gérondif.",
    examples: [
      { itemId: 'fr.b1.expressions-de-quantite.1144', note: 'en tout cas : cas est un nom' },
      { itemId: E(1764), note: 'en tant que : pas de verbe' },
      { itemId: E(1759), note: 'soit dit en passant : figé' },
    ],
  },

  virgule: {
    term: 'la virgule',
    title: 'La place du gérondif',
    body: "En tête de phrase, le gérondif prend une virgule : en ouvrant la lettre, Marie a pâli. Au milieu, il se met entre deux virgules. En fin de phrase, il suit souvent le verbe sans virgule, surtout pour la manière : il est entré en courant. EN: A comma at the start, often none at the end.",
    examples: [
      { itemId: E(1761), note: 'en tête : une virgule' },
      { itemId: E(1760), note: 'au milieu : deux virgules' },
      { itemId: E(1762), note: 'en fin de phrase : aucune' },
    ],
  },
};
