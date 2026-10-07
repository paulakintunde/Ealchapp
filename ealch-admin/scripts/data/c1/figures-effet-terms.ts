// c1.19.l1 « Les figures et leur effet » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6 (labels joined, plus 2 per separator). Labels here run
// 8 to 12 characters; the scratch check asserts every row fits.
//
// C1 LANGUAGE RULE: the body is natural, unsimplified French, addressed as
// « tu », then ONE English line starting « EN: ».
//
// A FIGURES GLOSSARY NAMES THE ONE SKILL (l’effet), THE FIGURES THIS LESSON
// OWNS, AND THE TWO HABITS OF A COMMENTARY (la lecture défendue, la
// citation courte).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './figures-effet-corpus.ts';

export const FIGURES_TERMS: Record<string, LessonTerm> = {
  /** Every act: the skill of the lesson. */
  effet: {
    term: 'l’effet',
    title: 'Dire l’effet, pas seulement le nom',
    body: 'L’effet, c’est ce que la figure fait au sens et au lecteur : elle fait voir, entendre, sentir, comprendre autre chose que les mots pris à la lettre. Une bonne phrase d’effet nomme la figure, cite un ou deux mots du texte et dit ce qu’ils produisent. EN: The effect is what the figure does to the meaning and to the reader, proved by a word of the text.',
    examples: [
      { itemId: E(1204), note: 'la règle de la leçon' },
      { itemId: E(1205), note: 'les trois gestes' },
      { itemId: E(1201), note: 'une vraie phrase d’effet' },
    ],
  },

  /** Every act: interpretation is defended, not decreed. */
  lecture: {
    term: 'la lecture',
    title: 'Une lecture se défend',
    body: 'Un effet est une interprétation : une lecture se défend avec les mots du texte, et une autre peut se défendre aussi. Ce qui ne se défend pas, c’est une lecture que le texte contredit, ou un effet qu’aucun mot ne prouve. EN: An effect is an interpretation: defend it with the text; another reading can be defensible too.',
    examples: [
      { itemId: E(1206), note: 'plusieurs lectures possibles' },
      { itemId: E(1208), note: 'la preuve par les mots' },
      { itemId: E(1336), note: 'défendre une interprétation' },
    ],
  },

  /** Act 2. */
  litote: {
    term: 'la litote',
    title: 'Dire moins pour faire entendre plus',
    body: 'La litote nie le contraire de ce qu’elle veut dire, ou dit moins qu’elle ne pense, pour que le lecteur entende davantage : « Va, je ne te hais point » fait entendre l’amour. Elle suppose un lecteur qui comprend à demi-mot. Ne la confonds pas avec l’euphémisme, qui adoucit une réalité pénible. EN: Litotes says less, often by denying the opposite, so that the reader hears more.',
    examples: [
      { itemId: E(1211), note: 'Chimène, dans Le Cid' },
      { itemId: E(1213), note: 'la règle' },
      { itemId: E(1216), note: 'litote ou euphémisme' },
    ],
  },

  /** Act 3. */
  antiphrase: {
    term: 'l’antiphrase',
    title: 'Un mot pour dire son contraire',
    body: 'L’antiphrase emploie un mot dans le sens contraire du sien : Voltaire appelle « héros » des soldats qui brûlent un village. C’est l’un des moyens de l’ironie, qui est une attitude d’ensemble. Le contexte seul permet de la voir : un détail atroce suffit à retourner l’éloge. EN: Antiphrasis uses a word to mean its opposite; irony is the attitude it serves.',
    examples: [
      { itemId: E(1226), note: 'la règle' },
      { itemId: E(1228), note: 'ironie et antiphrase' },
      { itemId: E(1225), note: 'l’effet chez Voltaire' },
    ],
  },

  /** Act 4. */
  gradation: {
    term: 'la gradation',
    title: 'Une montée qui se lit par la fin',
    body: 'La gradation range des termes par intensité, le plus souvent croissante, parfois décroissante. En littérature, lis-la par son point d’arrivée : le dernier terme porte le poids de la phrase. Une simple énumération sans ordre n’en est pas une. EN: A gradation orders terms by intensity; read it from the last term.',
    examples: [
      { itemId: E(1235), note: 'Don Diègue, dans Le Cid' },
      { itemId: E(1237), note: 'la règle' },
      { itemId: E(1241), note: 'la gradation qui descend' },
    ],
  },

  /** Act 5. */
  chiasme: {
    term: 'le chiasme',
    title: 'A et B, puis B et A',
    body: 'Le chiasme reprend les mêmes termes dans l’ordre inverse : « manger pour vivre », « vivre pour manger ». Le croisement oppose ou met en miroir deux idées, et donne souvent à la phrase l’allure d’une maxime. L’antithèse oppose sans croiser ; l’oxymore serre deux contraires dans un seul groupe. EN: Chiasmus repeats terms in reverse order, opposing or mirroring two ideas.',
    examples: [
      { itemId: E(1246), note: 'Valère, dans L’Avare' },
      { itemId: E(1248), note: 'la règle' },
      { itemId: E(1250), note: 'antithèse et chiasme' },
    ],
  },

  /** Act 6. */
  zeugme: {
    term: 'le zeugme',
    title: 'Deux termes attelés à un même mot',
    body: 'Selon Larousse, le zeugme coordonne des éléments qui ne sont pas sur le même plan, comme une vertu et un tissu dans « vêtu de probité candide et de lin blanc ». Le TLFi lui donne aussi un sens grammatical : un mot exprimé une fois qui sert à deux propositions. Il surprend, puis fait sourire ou réfléchir. EN: Zeugma yokes two unlike terms to one word; dictionaries also record a grammatical sense.',
    examples: [
      { itemId: E(1258), note: 'Hugo, « Booz endormi »' },
      { itemId: E(1260), note: 'la règle' },
      { itemId: E(1262), note: 'un zeugme de tous les jours' },
    ],
  },

  /** Act 7. */
  hypallage: {
    term: 'l’hypallage',
    title: 'Un trait qui passe à un voisin',
    body: 'L’hypallage prête à un mot ce qui convient à un autre mot de la même phrase, sans brouiller le sens : le « comptoir avide » de Hugo appartient à un marchand avide. Le trait déborde de la personne sur ce qui l’entoure. Les dictionnaires la font féminine ; on la trouve parfois au masculin. EN: Hypallage gives a word a trait that belongs to its neighbour in the sentence.',
    examples: [
      { itemId: E(1269), note: 'Hugo, « À Canaris »' },
      { itemId: E(1271), note: 'la règle' },
      { itemId: E(1279), note: 'personnification ou hypallage' },
    ],
  },

  /** Act 8. */
  metonymie: {
    term: 'la métonymie',
    title: 'Nommer par le voisin',
    body: 'La métonymie désigne une chose par une autre qui lui est réellement liée : le lieu pour les gens, l’auteur pour l’œuvre, le contenant pour le contenu. La synecdoque, qui en est une variété, prend la partie pour le tout : une voile pour un navire. La métaphore, elle, passe par une ressemblance. EN: Metonymy names a thing by something really linked to it; synecdoche is the part for the whole.',
    examples: [
      { itemId: E(1283), note: 'la métonymie' },
      { itemId: E(1284), note: 'la synecdoque' },
      { itemId: E(1287), note: 'métaphore ou métonymie' },
    ],
  },

  /** Act 9. */
  sons: {
    term: 'les sons',
    title: 'Allitération et assonance',
    body: 'L’allitération répète une consonne, l’assonance une voyelle. Repère-les dans le texte écrit, puis vérifie-les à voix haute. Un son ne veut rien dire seul : il renforce ce que disent les mots, comme le sifflement des serpents chez Racine. EN: Alliteration repeats a consonant, assonance a vowel; a sound only reinforces what the words say.',
    examples: [
      { itemId: E(1292), note: 'Racine, Andromaque' },
      { itemId: E(1294), note: 'la règle' },
      { itemId: E(1296), note: 'le piège' },
    ],
  },

  /** Act 10. */
  rythme: {
    term: 'le rythme',
    title: 'La longueur et la cadence',
    body: 'Le rythme, c’est la longueur et le groupement des membres d’une phrase : un rythme ternaire en groupe trois ; une cadence majeure finit sur le membre le plus long, une cadence mineure sur le plus court. Compte les syllabes avant d’en parler, et dis toujours ce que le rythme fait sentir. EN: Rhythm is the length and grouping of a sentence’s members; say what it makes the reader feel.',
    examples: [
      { itemId: E(1304), note: 'Pascal, une cadence mineure' },
      { itemId: E(1306), note: 'le rythme ternaire' },
      { itemId: E(1314), note: 'la règle' },
    ],
  },

  /** Act 11. */
  rupture: {
    term: 'la rupture',
    title: 'Ce qui casse, et pourquoi',
    body: 'Un effet de rupture casse ce que le lecteur attendait : l’anacoluthe brise la construction, l’asyndète supprime les liaisons, le rejet fait déborder la phrase sur le vers suivant, la phrase nominale arrête le mouvement. Voulue, une rupture n’est pas une maladresse : dis ce qu’elle casse, et ce que cela fait sentir. EN: A rupture breaks an expectation on purpose; say what it breaks and why.',
    examples: [
      { itemId: E(1317), note: 'l’anacoluthe' },
      { itemId: E(1319), note: 'l’asyndète' },
      { itemId: E(1322), note: 'le rejet' },
    ],
  },

  /** Act 12. */
  commentaire: {
    term: 'commentaire',
    title: 'Le commentaire, en bref',
    body: 'Un commentaire propose une lecture du texte et la prouve : une introduction qui situe l’extrait et annonce ta lecture, deux ou trois mouvements qui citent peu mais juste, une conclusion qui ouvre. Chaque figure nommée y reçoit sa phrase d’effet, au présent. EN: A commentary proposes a reading and proves it, quoting briefly, one effect sentence per figure.',
    examples: [
      { itemId: E(1328), note: 'annoncer une lecture' },
      { itemId: E(1334), note: 'citer peu, mais juste' },
      { itemId: E(1330), note: 'appuyer sa lecture' },
    ],
  },
};
