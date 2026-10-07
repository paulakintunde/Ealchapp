// c1.14.l1 « Analyser une œuvre » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6. Labels here run 6 to 14 characters; the widest trio
// the lesson uses (« l’impression » + « les moyens » + « l’effet ») is 33.
// Asserted in the scratch check with « every term is surfaced ».
//
// C1 LANGUAGE RULE: the body is natural, unsimplified French, addressed as
// « tu », then ONE English line starting « EN: ».
//
// A GLOSSARY OF ANALYSIS NAMES THE STEPS AND THE TOOLS: the four steps of
// an argued reading (l’impression, les moyens, l’effet, le jugement), the
// tools of each art (le plan, le hors-champ, le montage, la bande-son, la
// composition, la lumière) and the genre that holds them (la critique).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './analyser-oeuvre-corpus.ts';

export const ANALYSER_OEUVRE_TERMS: Record<string, LessonTerm> = {
  impression: {
    term: 'l’impression',
    title: 'Ce que l’œuvre te fait',
    body: 'Ce que tu ressens devant l’œuvre : l’émotion, l’ennui, le malaise, l’envie de revoir une scène. C’est le point de départ de l’analyse, jamais son point d’arrivée : une impression se ressent, elle ne se prouve pas. EN: What the work does to you: the starting point, never the conclusion.',
    examples: [
      { itemId: E(1215), note: 'une impression, sans plus' },
      { itemId: E(1224), note: 'une impression qui annonce une observation' },
      { itemId: E(1203), note: 'le principe' },
    ],
  },

  moyens: {
    term: 'les moyens',
    title: 'Ce qui, dans l’œuvre, produit l’effet',
    body: 'Les choix concrets que tu peux montrer du doigt : un plan, une coupe, un son, une lumière, une couleur, un rythme. Analyser, c’est remonter de l’impression à ces moyens. EN: The concrete choices you can point to; analysis traces the impression back to them.',
    examples: [
      { itemId: E(1207), note: 'remonter aux moyens' },
      { itemId: E(1226), note: 'un effet renvoie à un moyen' },
      { itemId: E(1202), note: 'la question à poser' },
    ],
  },

  effet: {
    term: 'l’effet',
    title: 'Ce que le moyen produit',
    body: 'Ce qu’un choix précis fait au spectateur, au lecteur ou à l’auditeur : une tension, un malaise, une attente, une émotion. On dit « produire un effet », « créer un effet de… ». EN: What a precise choice does to the audience.',
    examples: [
      { itemId: E(1221), note: 'un effet nommé' },
      { itemId: E(1217), note: 'un effet expliqué' },
      { itemId: E(1222), note: 'grâce à ce choix' },
    ],
  },

  jugement: {
    term: 'le jugement',
    title: 'Une évaluation qui s’appuie sur l’analyse',
    body: 'Ton avis, mais fondé : il vient après l’observation et l’effet, et il dit si le choix sert l’œuvre. Un jugement précis préfère « saisissant », « convenu », « appuyé » à « beau » ou « nul ». EN: Your verdict, grounded in observation and effect, in precise words.',
    examples: [
      { itemId: E(1218), note: 'un jugement fondé' },
      { itemId: E(1227), note: 'un adjectif précis' },
      { itemId: E(1228), note: 'un reproche précis' },
    ],
  },

  plan: {
    term: 'le plan',
    title: 'Un morceau de film sans interruption',
    body: 'Au cinéma, le plan est l’unité de base : ce qui est filmé entre deux coupes. On le décrit par sa valeur (plan d’ensemble, plan moyen, gros plan), par l’angle (plongée, contre-plongée) et par le mouvement ou l’immobilité de la caméra. EN: The basic unit of film, described by size, angle and camera movement.',
    examples: [
      { itemId: E(1243), note: 'la définition' },
      { itemId: E(1237), note: 'un gros plan et son effet' },
      { itemId: E(1238), note: 'une plongée et son effet' },
    ],
  },

  horschamp: {
    term: 'le hors-champ',
    title: 'Ce qui existe autour du cadre',
    body: 'Le champ, c’est ce que le cadre montre ; le hors-champ, tout ce qui existe autour sans être vu : une voix, un bruit, une personne qu’on devine. Il fait travailler l’imagination du spectateur. EN: What exists around the frame, heard or guessed but not seen.',
    examples: [
      { itemId: E(1250), note: 'un cri hors champ' },
      { itemId: E(1251), note: 'son effet' },
      { itemId: E(1252), note: 'quand le contrechamp manque' },
    ],
  },

  montage: {
    term: 'le montage',
    title: 'L’ordre et la durée des plans',
    body: 'Le montage assemble les plans : il décide de leur ordre, de leur durée et de la manière de passer de l’un à l’autre. Il peut se cacher (un raccord invisible), se montrer (un faux raccord) ou presque disparaître (le plan-séquence). EN: Editing decides the order, length and joins of shots.',
    examples: [
      { itemId: E(1263), note: 'la définition' },
      { itemId: E(1268), note: 'le faux raccord' },
      { itemId: E(1265), note: 'le plan-séquence' },
    ],
  },

  son: {
    term: 'la bande-son',
    title: 'Tout ce qu’on entend',
    body: 'Les voix, les bruits, la musique et les silences d’un film. Deux questions : d’où vient le son (de la scène, ou ajouté) et que fait-il (il souligne, il contredit, il se tait) ? EN: Voices, noises, music and silences: where does each come from, and what does it do?',
    examples: [
      { itemId: E(1278), note: 'la définition' },
      { itemId: E(1282), note: 'le silence compte' },
      { itemId: E(1287), note: 'une musique qui contredit' },
    ],
  },

  composition: {
    term: 'la composition',
    title: 'L’organisation d’une image',
    body: 'La façon dont une image est construite : ce qu’il y a au premier plan et à l’arrière-plan, où se trouve le sujet, où mènent les lignes, où est le vide. La décrire, c’est dire où elle conduit le regard. EN: How an image is built and where it leads the eye.',
    examples: [
      { itemId: E(1295), note: 'premier plan et arrière-plan' },
      { itemId: E(1296), note: 'des lignes qui guident' },
      { itemId: E(1297), note: 'le vide et son effet' },
    ],
  },

  lumiere: {
    term: 'la lumière',
    title: 'D’où elle vient, comment elle est peinte',
    body: 'En peinture, on dit d’où vient la lumière (une source unique, une lumière diffuse), comment elle se répartit (le clair-obscur) et comment la couleur est posée (une touche visible, un aplat lisse). EN: Where the light comes from, how it is spread, how the colour is laid on.',
    examples: [
      { itemId: E(1308), note: 'une source unique' },
      { itemId: E(1309), note: 'le clair-obscur' },
      { itemId: E(1311), note: 'la touche' },
    ],
  },

  critique: {
    term: 'la critique',
    title: 'Un genre qui analyse et qui pèse',
    body: 'Un texte qui présente une œuvre, analyse ses moyens, pèse ses forces et ses faiblesses, puis rend un verdict argumenté. Ce n’est ni un résumé ni un simple avis. EN: A text that presents, analyses, weighs, then gives a reasoned verdict.',
    examples: [
      { itemId: E(1210), note: 'peser' },
      { itemId: E(1352), note: 'la structure' },
      { itemId: E(1361), note: 'ce qu’elle n’est pas' },
    ],
  },
};
