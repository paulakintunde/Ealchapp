// b1.34.l1 « Les médias » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters; the scratch check
// asserts that every section's chips fit in 37, and that every term is
// surfaced by at least one section.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './medias-corpus.ts';

export const MEDIAS_TERMS: Record<string, LessonTerm> = {
  /** Word families, as in b1.33. */
  famille: {
    term: 'la famille',
    title: 'Une famille de mots',
    body: "Un verbe, un nom, un adjectif, parfois une personne, qui viennent de la même racine : informer, l’information, un informateur. Quand tu en connais un, tu devines les autres. EN: A word family is a verb, a noun, an adjective and sometimes a person built on one root.",
    examples: [
      { itemId: E(1000), note: 'quatre mots, une racine' },
      { itemId: E(1136), note: 'le verbe, le nom, l’adjectif' },
    ],
  },

  /** Collocations. */
  voisins: {
    term: 'les voisins',
    title: 'Les mots qui vont ensemble',
    body: "Certains mots vont toujours avec les mêmes voisins : on fait la une, on publie un article, on relaie une info. Si tu changes le voisin, la phrase sonne faux. EN: Collocations are the words a word always stands next to.",
    examples: [
      { itemId: E(1039), note: 'faire la une' },
      { itemId: E(1021), note: 'publier un article' },
      { itemId: E(1105), note: 'relayer une info' },
    ],
  },

  /** Act 3: how a headline is built. */
  titre: {
    term: 'le titre',
    title: 'La grammaire du titre',
    body: "Un titre enlève les petits mots. Il garde le nom à la place du verbe (démission, fermeture, hausse) et le participe à la place du passif (élue, arrêtés). EN: A headline drops the little words and keeps the noun or the participle.",
    examples: [
      { itemId: E(1050), note: 'la règle en une phrase' },
      { itemId: E(1041), note: 'le nom à la place du verbe' },
      { itemId: E(1045), note: 'le participe à la place du passif' },
    ],
  },

  /** Act 6: the conditional of unconfirmed news. */
  ondit: {
    term: 'le on-dit',
    title: 'Le conditionnel du on-dit',
    body: "Au conditionnel, le journaliste dit : on me l’a dit, mais ce n’est pas encore confirmé. « Le ministre démissionnerait. » Au futur, c’est sûr : « il démissionnera ». EN: The conditional marks news that is reported but not yet confirmed.",
    examples: [
      { itemId: E(1099), note: 'la règle en une phrase' },
      { itemId: E(1091), note: 'pas encore confirmé' },
      { itemId: E(1097), note: 'confirmé : le futur' },
    ],
  },

  /** Act 5: who is speaking. */
  source: {
    term: 'la source',
    title: 'La source : qui le dit',
    body: "La source, c’est la personne ou l’organisme qui donne l’info : la police, un témoin, un ministère. Selon et d’après la nomment. Sans source, tu ne sais pas qui parle. EN: The source is who is giving the information.",
    examples: [
      { itemId: E(1084), note: 'selon qui ?' },
      { itemId: E(1069), note: 'selon, d’après' },
      { itemId: E(1081), note: 'citer ses sources' },
    ],
  },

  /** Act 7: the chain of sharing. */
  relais: {
    term: 'le relais',
    title: 'Relayer, faire passer plus loin',
    body: "Comme dans une course de relais, chacun passe l’info au suivant : tu partages, tes abonnés relaient, et l’info devient virale. Chaque relais l’éloigne de sa source. EN: Every share passes a story further from where it started.",
    examples: [
      { itemId: E(1117), note: 'partager, relayer' },
      { itemId: E(1113), note: 'des milliers de relais' },
    ],
  },

  /** Act 8: fake news. */
  infox: {
    term: 'une infox',
    title: 'Une infox, une fausse nouvelle',
    body: "Une info fausse, faite pour tromper ou pour faire réagir. En France, on dit une infox ; au Québec, une fausse nouvelle. Elle circule vite parce qu’elle fait peur ou plaisir. EN: Fake news, made to mislead or to provoke a reaction.",
    examples: [
      { itemId: E(1120), note: 'deux mots, un sens' },
      { itemId: E(1129), note: 'elle circule' },
    ],
  },

  /** Act 9: reliability. */
  fiable: {
    term: 'la fiabilité',
    title: 'Une source fiable',
    body: "Une source fiable dit qui elle est, quand elle écrit et d’où vient l’info. Tu peux la vérifier, et d’autres sources disent la même chose. EN: A reliable source can be checked, and others confirm it.",
    examples: [
      { itemId: E(1151), note: 'trois questions' },
      { itemId: E(1137), note: 'fiable, la fiabilité' },
    ],
  },

  /** The English look-alikes. */
  fauxami: {
    term: 'le faux ami',
    title: 'Un mot qui ressemble à l’anglais',
    body: "Il ressemble à un mot anglais, mais il ne veut pas dire la même chose. L’éditeur publie des livres ; le rédacteur en chef dirige le journal. Une émission, c’est a programme. EN: A false friend looks English but means something else.",
    examples: [
      { itemId: E(1032), note: 'editor : le rédacteur en chef' },
      { itemId: E(1067), note: 'a programme : une émission' },
      { itemId: E(1013), note: 'on the news : aux nouvelles' },
    ],
  },

  /** Regional forms, none wrong. */
  variante: {
    term: 'la variante',
    title: 'Un autre mot ailleurs',
    body: "Le même objet a parfois un autre nom au Québec, en Belgique, en Suisse ou en France : un balado ou un podcast, une entrevue ou une interview. Aucun n’est faux : chacun est juste chez lui. EN: A regional variant is right where it is used.",
    examples: [
      { itemId: E(1060), note: 'au Québec : un balado' },
      { itemId: E(1059), note: 'au Québec : une entrevue' },
      { itemId: E(1002), note: 'au Québec : aux nouvelles' },
    ],
  },

  /** Acts 10 and 11: judging a story. */
  avis: {
    term: 'ton avis',
    title: 'Juger une info',
    body: "Dire si une info te paraît fiable ou non, avec tes raisons : la source, la date, les preuves. Un bon avis montre aussi ce qui fait douter. EN: Your judgement on a story, with reasons.",
    examples: [
      { itemId: E(1159), note: 'à mon avis' },
      { itemId: E(1169), note: 'ce que tu penses, et pourquoi' },
    ],
  },
};
