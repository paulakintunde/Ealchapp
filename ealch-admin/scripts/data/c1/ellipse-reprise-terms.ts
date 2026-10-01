// c1.05.l1 « L’ellipse et la reprise »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6 (labels joined, plus 2 per separator). Labels run 8 to 13
// characters; no section carries a trio over the budget (checked by the
// validation script), and most sections carry one or two chips.
//
// C1 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './ellipse-reprise-corpus.ts';

export const ELLIPSE_REPRISE_TERMS: Record<string, LessonTerm> = {
  fil: {
    term: 'le fil rouge',
    title: 'Un seul fil, de la première ligne à la dernière',
    body: 'Un texte se coud avec un seul fil. Chaque reprise le fait revenir à la surface (le, faire, celui de, l’arbre, ledit) ; chaque ellipse le fait passer derrière le tissu. Tant que le lecteur sait ce qui est repris ou tu, le fil tient. EN: Every reprise brings the thread back up; every ellipsis runs it behind the cloth.',
    examples: [
      { itemId: E(2008), note: 'la règle de toute la leçon' },
      { itemId: E(2000), note: 'repris par l’, sans rien répéter' },
      { itemId: E(2066), note: 'le verbe passe derrière le tissu' },
    ],
  },

  neutre: {
    term: 'le neutre',
    title: 'Le, qui ne reprend personne',
    body: 'Ce le ne remplace ni un homme ni un objet : il reprend un adjectif, un nom sans article ou une idée entière. Il ne s’accorde donc jamais : fatiguée, je le suis ; elles le sont ; comme je l’ai dit. EN: Neutral le stands for an adjective or a whole idea, so it never agrees.',
    examples: [
      { itemId: E(2013), note: 'le reprend fatiguée, et reste le' },
      { itemId: E(2018), note: 'au pluriel, toujours le' },
      { itemId: E(2032), note: 'l’ reprend tout ce qui a été dit' },
    ],
  },

  proVerbe: {
    term: 'le pro-verbe',
    title: 'Faire, le verbe qui en remplace un autre',
    body: 'Faire, avec le ou en … autant, reprend un verbe d’action déjà dit : je le ferai, elle en a fait autant, plus que je ne le fais. Être et avoir ne passent jamais par faire : plus patiente que je ne le suis. EN: Faire stands in for an action verb; être and avoir never go through faire.',
    examples: [
      { itemId: E(2049), note: 'je le ferai : j’appellerai le plombier' },
      { itemId: E(2051), note: 'que je ne le fais : que je ne lis' },
      { itemId: E(2055), note: 'être se reprend lui-même' },
    ],
  },

  ellipse: {
    term: 'l’ellipse',
    title: 'Le verbe sous-entendu',
    body: 'Quand deux phrases ont le même verbe, la seconde peut le taire ; une virgule marque souvent sa place. Non, aussi, non plus, pas et si tiennent la place d’un groupe entier. Ce n’est pas l’ellipse du récit, qui saute des années. EN: A shared verb can be left out of the second clause; this is not the narrative time-skip.',
    examples: [
      { itemId: E(2066), note: 'Marie, Zola : lit est sous-entendu' },
      { itemId: E(2068), note: 'elle non : elle n’accepte pas' },
      { itemId: 'fr.b2.litterature.1460', note: 'l’autre ellipse, celle du récit' },
    ],
  },

  motSeul: {
    term: 'le mot seul',
    title: 'La question réduite à son mot',
    body: 'Après savoir, dire, ignorer, se demander ou reste à savoir, le mot interrogatif peut rester seul : je ne sais pas qui, reste à savoir laquelle, si oui, lesquels. Pour une chose, c’est quoi, jamais ce que. EN: After know, say or wonder, the question word can stand alone; for a thing, quoi.',
    examples: [
      { itemId: E(2084), note: 'qui : qui a appelé' },
      { itemId: E(2085), note: 'laquelle : quelle pièce manque' },
      { itemId: E(2087), note: 'quoi, pour une chose' },
    ],
  },

  celuiDe: {
    term: 'celui de',
    title: 'Le démonstratif qui reprend de loin',
    body: 'Celui, celle, ceux, celles reprennent un nom déjà dit pour lui donner un autre complément : la question des loyers, celle du chauffage. Le pronom prend le genre et le nombre du nom repris, même loin derrière. EN: Celui and its forms take up a noun to give it a new complement, and agree with that noun.',
    examples: [
      { itemId: E(2100), note: 'celle reprend question' },
      { itemId: E(2104), note: 'celui annonce ce qui suit' },
      { itemId: E(2108), note: 'celui proposé : courant, discuté' },
    ],
  },

  hyperonyme: {
    term: 'l’hyperonyme',
    title: 'Le nom plus large',
    body: 'Un nom plus large reprend un nom précis sans le répéter : l’érable devient l’arbre, la camionnette le véhicule, la chorale l’ensemble. Il doit couvrir la chose et ne désigner qu’elle dans le passage. EN: A broader noun takes up a precise one, as long as nothing else in the passage fits it.',
    examples: [
      { itemId: E(2118), note: 'l’érable, puis l’arbre' },
      { itemId: E(2125), note: 'la camionnette, puis le véhicule' },
      { itemId: E(2121), note: 'la chorale, puis l’ensemble' },
    ],
  },

  nomResume: {
    term: 'le nom-résumé',
    title: 'Un nom pour toute une phrase',
    body: 'Un nom peut résumer toute la phrase précédente, souvent avec ce ou cette : le conseil a reporté le vote, cette décision… On le forme avec les suffixes de la nominalisation : refuser, ce refus ; partir, ces départs. EN: A noun with ce or cette can sum up the whole previous sentence.',
    examples: [
      { itemId: E(2119), note: 'cette décision reprend le report' },
      { itemId: E(2124), note: 'ce silence : personne n’a répondu' },
      { itemId: E(2128), note: 'refuser, ce refus' },
    ],
  },

  ledit: {
    term: 'ledit, ladite',
    title: 'La reprise des textes officiels',
    body: 'Ledit, ladite, lesdits (dudit, audit) reprennent un nom déjà nommé, en un seul mot, dans un avis, un contrat, un règlement. Le cas échéant tait une condition : si le cas se présente. Dans une conversation, ledit fait sourire. EN: Ledit picks up a noun in official writing; in conversation it is comic.',
    examples: [
      { itemId: E(2136), note: 'ladite fuite : celle qu’on vient de signaler' },
      { itemId: E(2143), note: 'le cas échéant : si tu es concerné' },
      { itemId: E(2149), note: 'à l’oral, un effet comique' },
    ],
  },

  ambiguite: {
    term: 'l’ambiguïté',
    title: 'Deux fils qui se croisent',
    body: 'Quand deux noms peuvent répondre à un pronom, le lecteur ne sait plus lequel suivre. Change d’outil : répète le nom, écris cette dernière, réorganise la phrase ou passe au discours direct. EN: When two nouns could answer a pronoun, change tools: the noun, cette dernière, another construction.',
    examples: [
      { itemId: E(2151), note: 'qui est rentrée ? on ne sait pas' },
      { itemId: E(2152), note: 'cette dernière : la sœur' },
      { itemId: E(2153), note: 'une autre construction : Marie' },
    ],
  },
};
