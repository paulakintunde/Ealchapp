// b2.30.l1 « Lire un texte littéraire »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6. Labels run 8 to 14 characters; the widest trio the
// lesson uses is asserted under 37 by scratch/_b230-validate.mts.
//
// B2 LANGUAGE RULE: the body is natural B2 French, addressed as « tu », then
// ONE English line starting « EN: ».
//
// A LITERARY GLOSSARY NAMES THE THREE QUESTIONS OF THE REFRAME: who speaks
// (le narrateur, indirect libre, le genre), through whose eyes (la
// focalisation, le portrait), with which words (les plans, le rythme, la
// tonalité, les images, l’incipit), and how you prove it (la citation).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './lire-litterature-corpus.ts';

export const LIRE_LITTERATURE_TERMS: Record<string, LessonTerm> = {
  /** Acts 1 and 2: the voice. */
  narrateur: {
    term: 'le narrateur',
    title: 'La voix qui raconte',
    body: 'Le narrateur est la voix qui raconte l’histoire ; l’auteur est la personne réelle qui a écrit le livre. Même quand il dit « je », le narrateur est une voix inventée, qui peut se tromper ou mentir. Il peut être le héros, un simple témoin, ou rester hors de l’histoire. EN: The narrator is the voice that tells the story, not the real person who wrote the book.',
    examples: [
      { itemId: E(1413), note: 'l’auteur signe, le narrateur raconte' },
      { itemId: E(1420), note: 'une narratrice témoin' },
      { itemId: E(1406), note: 'un narrateur qui ne voit pas tout' },
    ],
  },

  /** Act 3: whose eyes. */
  focalisation: {
    term: 'focalisation',
    title: 'Par quels yeux on voit la scène',
    body: 'La focalisation dit d’où l’on voit. Interne : par les yeux d’un personnage, avec ses pensées et ses erreurs. Externe : comme une caméra, seulement les gestes et les paroles. Zéro, ou omnisciente : le narrateur sait tout, les pensées de chacun, parfois l’avenir. EN: Focalisation is the point from which the scene is seen: one character, the outside, or everywhere.',
    examples: [
      { itemId: E(1439), note: 'focalisation interne' },
      { itemId: E(1438), note: 'focalisation externe' },
      { itemId: E(1437), note: 'le narrateur omniscient' },
    ],
  },

  /** Act 4: foreground and background. */
  plans: {
    term: 'les plans',
    title: 'Ce qui avance, ce qui dure',
    body: 'Dans un récit au passé, le passé simple (ou le passé composé) fait avancer l’action : c’est le premier plan. L’imparfait pose le décor et ce qui dure : c’est l’arrière-plan. Le plus-que-parfait fait un pas en arrière, et le présent de narration rapproche la scène. EN: The passé simple moves the story on; the imparfait holds the background.',
    examples: [
      { itemId: E(1456), note: 'l’arrière-plan : un état, pas un événement' },
      { itemId: E(1458), note: 'le retour en arrière' },
      { itemId: E(1457), note: 'le présent de narration' },
    ],
  },

  /** Act 4: the speed of a narrative. */
  rythme: {
    term: 'le rythme',
    title: 'Accélérer, ralentir, sauter',
    body: 'Un récit ne raconte pas tout à la même vitesse. La scène s’attarde (un dialogue, un geste), le sommaire résume des années en une phrase, l’ellipse saute une période, la pause décrit pendant que l’histoire s’arrête. Le rythme montre ce que le texte juge important. EN: Scene, summary, ellipsis and pause: the rhythm shows what matters.',
    examples: [
      { itemId: E(1464), note: 'scène et sommaire' },
      { itemId: E(1459), note: 'trente ans en deux phrases' },
      { itemId: E(1460), note: 'une ellipse' },
    ],
  },

  /** Act 5: words and thoughts. */
  indirect: {
    term: 'indirect libre',
    title: 'La voix du personnage, sans guillemets',
    body: 'Au discours direct, on cite (guillemets) ; au discours indirect, on rapporte avec que et un verbe comme dire. Le style indirect libre mélange les deux : la phrase garde le temps et la personne du récit, mais on y entend les mots, les exclamations et les questions du personnage. EN: Free indirect style keeps the narrative’s tense and person but carries the character’s voice.',
    examples: [
      { itemId: E(1471), note: 'la colère de Lise, sans guillemets' },
      { itemId: E(1472), note: 'qui parle vraiment' },
      { itemId: E(1473), note: 'la règle' },
    ],
  },

  /** Act 6: the tone of a text. */
  tonalite: {
    term: 'la tonalité',
    title: 'Ce que le texte fait ressentir',
    body: 'La tonalité est l’émotion qu’un texte veut faire naître : comique (le rire), ironique (dire autre chose que ce qu’on pense), lyrique (les émotions d’un je), pathétique (la pitié), dramatique (la tension). Elle se prouve toujours par ses moyens : les mots, la longueur des phrases, les répétitions, les images. EN: The tone is the feeling a text aims to create, proved by the means that create it.',
    examples: [
      { itemId: E(1480), note: 'la tonalité pathétique' },
      { itemId: E(1482), note: 'des phrases courtes, de la tension' },
      { itemId: E(1498), note: 'la règle' },
    ],
  },

  /** Act 7: figures of speech, with their effect. */
  images: {
    term: 'les images',
    title: 'Comparaison, métaphore, personnification',
    body: 'La comparaison rapproche deux choses avec un outil (comme, tel, pareil à, on aurait dit). La métaphore les fond, sans outil : le ciel est une mer. La personnification donne à une chose des gestes humains. Nommer l’image ne suffit jamais : dis ce qu’elle fait voir ou sentir. EN: Name the image, then say what it makes the reader see or feel.',
    examples: [
      { itemId: E(1500), note: 'une comparaison' },
      { itemId: E(1501), note: 'une métaphore' },
      { itemId: E(1507), note: 'l’image et son effet' },
    ],
  },

  /** Act 8: description and portrait. */
  portrait: {
    term: 'le portrait',
    title: 'Montrer quelqu’un',
    body: 'Un portrait présente un personnage : son corps, son caractère, ses gestes. Il ne sert pas à décorer : un détail révèle un secret, une habitude dit un caractère, et le regard du narrateur (tendre, moqueur) se lit dans les adjectifs. Commente ce que le portrait révèle, pas la liste des traits. EN: A portrait reveals a character; comment on what it reveals, not on the list of features.',
    examples: [
      { itemId: E(1519), note: 'le corps annonce le caractère' },
      { itemId: E(1520), note: 'le détail qui révèle' },
      { itemId: E(1524), note: 'le regard du narrateur' },
    ],
  },

  /** Act 9: beginnings and endings. */
  incipit: {
    term: 'l’incipit',
    title: 'La première page, et la dernière',
    body: 'L’incipit est le début d’un texte : il informe (qui, où, quand), il intrigue et il donne le ton. Il peut poser un décor, ou jeter le lecteur au milieu de l’action. La chute est la fin d’une nouvelle, souvent une surprise qui oblige à relire tout le reste autrement. EN: The opening informs, intrigues and sets the tone; the twist ending changes how you read the rest.',
    examples: [
      { itemId: E(1535), note: 'ce que fait un incipit' },
      { itemId: E(1531), note: 'au milieu de l’action' },
      { itemId: E(1534), note: 'la chute' },
    ],
  },

  /** Act 10: the genres. */
  genre: {
    term: 'le genre',
    title: 'Roman, nouvelle, conte, poème, théâtre',
    body: 'Le roman est long et suit plusieurs personnages ; la nouvelle est courte, souvent à chute ; le conte ouvre sur un autre monde et porte une leçon. Le poème en vers a un rythme et souvent des rimes, le poème en prose n’en a pas. Au théâtre, personne ne raconte : les répliques se disent, les didascalies se lisent. EN: Each genre has its own voice and form; in a play, nobody narrates.',
    examples: [
      { itemId: E(1546), note: 'la nouvelle' },
      { itemId: E(1545), note: 'le théâtre, sans narrateur' },
      { itemId: E(1544), note: 'la didascalie' },
    ],
  },

  /** Acts 11 and 12: proving with the text. */
  citation: {
    term: 'la citation',
    title: 'Les mots du texte, entre guillemets',
    body: 'Un commentaire prouve ce qu’il avance avec de courtes citations : quelques mots exacts, entre guillemets, glissés dans ta phrase sans la casser. Une citation seule ne prouve rien : dis toujours ce qu’elle montre. Si tu coupes, marque la coupure par [...]. EN: Quote a few exact words, fit them into your sentence, and say what they show.',
    examples: [
      { itemId: E(1557), note: 'une citation glissée dans la phrase' },
      { itemId: E(1559), note: 'la méthode' },
      { itemId: E(1560), note: 'la règle' },
    ],
  },
};
