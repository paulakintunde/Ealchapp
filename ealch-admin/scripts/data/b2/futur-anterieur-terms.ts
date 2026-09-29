// b2.07.l1 « Le futur antérieur »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters. The four 12-character labels
// (« l’auxiliaire », « la charnière », « fausse piste ») are never used three
// together; most sections carry one or two chips.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './futur-anterieur-corpus.ts';

export const FUTUR_ANTERIEUR_TERMS: Record<string, LessonTerm> = {
  jalon: {
    term: 'le jalon',
    title: 'Le moment à venir où tu te places',
    body: "Le jalon, c'est un moment plus tard sur la route : vendredi à neuf heures, ton arrivée, la fin du mois, dans dix ans. Le futur antérieur se place sur ce jalon et regarde en arrière ce qui sera déjà fait. Le futur simple dit ce qui se passe au jalon lui-même. EN: The marker is a later moment; the futur antérieur stands on it and looks back.",
    examples: [
      { itemId: E(1800), note: 'vendredi à neuf heures est le jalon' },
      { itemId: E(1810), note: 'ton retour est le jalon' },
      { itemId: E(1861), note: 'vingt heures est le jalon' },
    ],
  },

  auxiliaire: {
    term: 'l’auxiliaire',
    title: 'Avoir ou être, au futur',
    body: "Le futur antérieur garde l'auxiliaire du passé composé et le met au futur : j'ai terminé donne j'aurai terminé, je suis parti donne je serai parti. Les radicaux aur- et ser- sont ceux de la leçon 6 du B1. EN: Keep the passé composé auxiliary and put it in the future.",
    examples: [
      { itemId: E(1816), note: 'avoir : j’aurai terminé' },
      { itemId: E(1822), note: 'être : je serai parti' },
      { itemId: E(1827), note: 'aller prend être' },
    ],
  },

  accord: {
    term: 'l’accord',
    title: 'Quand le participe change',
    body: "Avec être, le participe s'accorde avec le sujet : elle sera arrivée. Avec avoir, il ne s'accorde qu'avec un complément placé avant lui : les photos que tu auras prises. Les pronominaux prennent être. Ce sont les règles du passé composé. EN: With être, agree with the subject; with avoir, only with an object placed before.",
    examples: [
      { itemId: E(1842), note: 'être : arrivée, avec elle' },
      { itemId: E(1844), note: 'avoir : prises, avec que' },
      { itemId: E(1847), note: 'avoir, rien avant : réservé' },
    ],
  },

  ligne: {
    term: 'la ligne',
    title: 'Deux futurs sur une seule ligne',
    body: "Place le jalon sur la ligne du temps. Ce qui se passe à ce moment-là, ou juste après, va au futur simple. Ce qui sera déjà fait avant lui va au futur antérieur. Le même verbe peut prendre les deux, et chacun raconte autre chose. EN: At the marker: futur simple; already done by it: futur antérieur.",
    examples: [
      { itemId: E(1860), note: 'je partirai : au jalon' },
      { itemId: E(1861), note: 'je serai parti : avant lui' },
      { itemId: E(1862), note: 'je serai sur la route : en cours' },
    ],
  },

  charniere: {
    term: 'la charnière',
    title: 'Quand, dès que, une fois que',
    body: "La charnière relie deux moments à venir. Si l'action qui suit quand, dès que, une fois que ou après que sera finie avant l'autre, elle prend le futur antérieur. Si les deux vont ensemble, les deux moitiés restent au futur simple. EN: Finished first after the hinge word: futur antérieur; together: futur simple.",
    examples: [
      { itemId: E(1878), note: 'finir, puis appeler' },
      { itemId: E(1885), note: 'au moment même où tu finis' },
      { itemId: E(1893), note: 'après que + indicatif' },
    ],
  },

  calque: {
    term: 'le calque',
    title: 'When you’ve finished',
    body: "L'anglais met un present perfect après when, as soon as ou once : when you've finished. Le français, lui, regarde le moment : c'est à venir, donc quand tu auras fini. Le passé composé ne va après quand que pour une habitude ou pour le passé. EN: English uses the present perfect after when; French uses the futur antérieur.",
    examples: [
      { itemId: E(1899), note: 'à venir : futur antérieur' },
      { itemId: E(1898), note: 'une habitude : passé composé' },
      { itemId: E(1906), note: 'as soon as I’ve received' },
    ],
  },

  echeance: {
    term: 'l’échéance',
    title: 'D’ici vendredi, ce sera fait',
    body: "Une échéance est une date limite : d'ici jeudi, avant la fin du mois, au plus tard lundi. Pour promettre ce qui sera fait à ce moment-là, le futur antérieur est le temps juste. Il rassure : à l'échéance, la tâche est déjà derrière toi. EN: At a deadline, the futur antérieur says the task will already be done.",
    examples: [
      { itemId: E(1914), note: 'd’ici vendredi' },
      { itemId: E(1917), note: 'au plus tard lundi' },
      { itemId: E(1926), note: 'pas encore, à l’échéance' },
    ],
  },

  hypothese: {
    term: 'l’hypothèse',
    title: 'Il aura oublié',
    body: "Le futur antérieur sert aussi à expliquer un fait passé qu'on ne connaît pas encore avec certitude : il n'est pas venu, il aura oublié. Tu te places au moment où tu sauras, et tu regardes en arrière. Il a dû oublier dit presque la même chose. EN: It also offers a likely explanation of a past fact: il aura oublié.",
    examples: [
      { itemId: E(1930), note: 'une explication probable' },
      { itemId: E(1931), note: 'pronominal : trompée' },
      { itemId: 'fr.b1.recits-au-passe.1207', note: 'le même sens avec devoir' },
    ],
  },

  bilan: {
    term: 'le bilan',
    title: 'En dix ans, j’aurai vu',
    body: "Pour faire le bilan d'une période, tu te places à sa fin et tu comptes ce qui aura été fait : en dix ans, j'aurai vu grandir tout un quartier. Le ton est plus solennel qu'avec le passé composé, même quand la période s'achève aujourd'hui. EN: A review of a period, seen from its end.",
    examples: [
      { itemId: E(1946), note: 'le compte de dix ans' },
      { itemId: E(1950), note: 'une année qui se termine' },
      { itemId: E(1956), note: 'la même idée au passé composé' },
    ],
  },

  lettre: {
    term: 'le s final',
    title: 'Aurai ou aurais',
    body: "À l'oral, j'aurai et j'aurais se confondent souvent. À l'écrit, le s change tout : j'aurai fini promet, j'aurais fini imagine ce qui n'a pas eu lieu, comme dans la leçon 2 du B2. Au doute, passe à nous : aurons ou aurions. EN: The final s separates a promise from what did not happen.",
    examples: [
      { itemId: E(1961), note: 'aurai : une promesse' },
      { itemId: E(1962), note: 'aurais : sans cet appel' },
      { itemId: E(1963), note: 'serons : un moment réel' },
    ],
  },

  piste: {
    term: 'fausse piste',
    title: 'Ce qui ressemble au futur antérieur',
    body: "Aurai n'annonce pas toujours un futur antérieur : quand j'aurai le billet est le futur d'avoir. Sera signé est un futur passif, et je serai installé peut décrire un état. Cherche le participe, puis le sens. EN: Not every aurai or sera is a futur antérieur; look for the participle and the meaning.",
    examples: [
      { itemId: 'fr.b1.projets-et-futur.549', note: 'aurai + un nom : futur d’avoir' },
      { itemId: 'fr.b1.faits-et-procedures.1049', note: 'sera signé : un passif' },
      { itemId: 'fr.b1.projets-et-futur.410', note: 'serai installé : un état' },
    ],
  },
};
