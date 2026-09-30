// b2.09.l1 « Reconnaître le subjonctif littéraire »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters. The two longest
// (« l’antériorité » 13, « l’expression » 12) are never used together with a
// third chip of more than 11.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».
//
// RECOGNITION ONLY: every example is either a literary line to READ or the
// sentence a writer would use today. No body asks for a form.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './subjonctif-litteraire-corpus.ts';

export const SL_TERMS: Record<string, LessonTerm> = {
  registre: {
    term: 'le registre',
    title: 'Un subjonctif de la page soignée',
    body: "Tu rencontres ces formes dans les romans classiques, les livres d'histoire soignés, certains discours, et dans la presse quand elle veut donner du poids ou faire sourire. Dans une conversation ou un message, jamais, sauf pour plaisanter. EN: These forms live in careful writing; in conversation only as a joke.",
    examples: [
      { itemId: E(1215), note: 'un manuel d’histoire' },
      { itemId: E(1223), note: 'la presse, pour l’effet' },
      { itemId: E(1227), note: 'la même idée, dite à voix haute' },
    ],
  },

  chapeau: {
    term: 'le chapeau',
    title: 'Fut ou fût : un accent de différence',
    body: "Au singulier, un accent circonflexe sépare le subjonctif du passé simple : il fut, qu'il fût ; il eut, qu'il eût ; il vint, qu'il vînt. À l'oreille, rien ne change : écoute plutôt le déclencheur devant que. EN: The circumflex marks the subjunctive in the singular; the ear hears no difference.",
    examples: [
      { itemId: E(1246), note: 'fut : un fait, au passé simple' },
      { itemId: E(1244), note: 'fût : un subjonctif, après il fallait que' },
      { itemId: E(1269), note: 'vînt puis vint, dans la même phrase' },
    ],
  },

  radical: {
    term: 'le radical',
    title: 'Construit sur le passé simple',
    body: "L'imparfait du subjonctif part du passé simple que tu reconnais depuis la leçon 8 du B2 : aima donne qu'il aimât, finit donne qu'il finît, fut donne qu'il fût. Retrouve le passé simple, et tu retrouves le verbe. EN: The imperfect subjunctive is built on the passé simple.",
    examples: [
      { itemId: E(1250), note: 'chantât : chanter' },
      { itemId: E(1252), note: 'finît : finir' },
      { itemId: E(1256), note: 'sût : savoir' },
    ],
  },

  personne: {
    term: 'la personne',
    title: 'Surtout il et elle',
    body: "La troisième personne du singulier est de loin la plus fréquente, et la seule qu'on rencontre encore hors des vieux textes. Les autres personnes (-asse, -isse, -usse, -ssent) sont rares et sonnent vieillies, parfois comiques. EN: The third person singular is by far the most frequent.",
    examples: [
      { itemId: E(1204), note: 'qu’elle vînt : la forme la plus courante' },
      { itemId: E(1260), note: 'partissent : ils, un pluriel rare' },
      { itemId: E(1328), note: 'tu fusses : très rare' },
    ],
  },

  anteriorite: {
    term: 'l’antériorité',
    title: 'Ce qui était déjà fait',
    body: "Eût ou fût, puis un participe : c'est le plus-que-parfait du subjonctif. Il dit que l'action était déjà finie au moment du verbe principal. Aujourd'hui, on dit le subjonctif passé : qu'il ait fini, qu'elle soit partie. EN: Eût or fût plus a participle: already done; today, the past subjunctive.",
    examples: [
      { itemId: E(1275), note: 'fût venue : soit venue' },
      { itemId: E(1279), note: 'eût fini : ait fini' },
      { itemId: E(1286), note: 'la version d’aujourd’hui' },
    ],
  },

  deuxieme: {
    term: 'la 2e forme',
    title: 'Le conditionnel passé à l’ancienne',
    body: "Il eût fallu, j'eusse aimé, on eût dit : la même forme que le plus-que-parfait du subjonctif, mais sans que ni déclencheur. Le sens est celui du conditionnel passé : il aurait fallu. Après si, lis le plus-que-parfait : s'il l'eût su, s'il l'avait su. EN: The same form, read as the past conditional.",
    examples: [
      { itemId: E(1295), note: 'eût fallu : aurait fallu' },
      { itemId: E(1299), note: 'on eût dit : on aurait dit' },
      { itemId: E(1301), note: 'après si : avait su' },
    ],
  },

  concordance: {
    term: 'concordance',
    title: 'La concordance des temps',
    body: "Dans un texte classique, un verbe principal au passé entraîne l'imparfait du subjonctif : je voulais qu'il vînt. Le français d'aujourd'hui garde le présent : je voulais qu'il vienne. Le sens ne change pas ; seul l'habit change. EN: Classic texts shift the subjunctive into the past; today's French keeps the present.",
    examples: [
      { itemId: E(1315), note: 'voulais… partît' },
      { itemId: E(1316), note: 'voulais… parte' },
      { itemId: E(1320), note: 'après un conditionnel aussi' },
    ],
  },

  aujourdhui: {
    term: 'aujourd’hui',
    title: 'Ce que tu dirais',
    body: "Trois traductions suffisent. L'imparfait du subjonctif devient présent, le plus-que-parfait du subjonctif devient subjonctif passé, la deuxième forme devient conditionnel passé. Après si et comme si, le plus-que-parfait de l'indicatif. Le reste du texte ne bouge pas. EN: Three maps: present, past subjunctive, past conditional.",
    examples: [
      { itemId: E(1202), note: 'fût : soit' },
      { itemId: E(1278), note: 'eût travaillé : ait travaillé' },
      { itemId: E(1296), note: 'eût fallu : aurait fallu' },
    ],
  },

  figee: {
    term: 'l’expression',
    title: 'Les formes qui vivent encore',
    body: "Fût-ce (même), ne fût-ce que (ne serait-ce que), dût-il (même s'il devait) : tu les liras encore dans la presse et les discours. Quoi qu'il en fût appartient aux livres ; aujourd'hui, on dit quoi qu'il en soit. Qu'à cela ne tienne est un présent. EN: A few fixed forms survive in formal French.",
    examples: [
      { itemId: E(1350), note: 'ne fût-ce que : ne serait-ce que' },
      { itemId: E(1356), note: 'quoi qu’il en soit, tous les jours' },
      { itemId: E(1357), note: 'qu’à cela ne tienne : un présent' },
    ],
  },

  signal: {
    term: 'le signal',
    title: 'Le déclencheur devant que',
    body: "Il fallait que, bien que, avant que, sans que, je voulais que : ce sont les déclencheurs de la leçon 15 du B1. Ils annoncent un subjonctif, et c'est grâce à eux que ton oreille reconnaît qu'il fût, qui sonne comme il fut. EN: The trigger before que tells your ear it is a subjunctive.",
    examples: [
      { itemId: E(1206), note: 'bien que : subjonctif' },
      { itemId: E(1238), note: 'attendit que : subjonctif' },
      { itemId: E(1322), note: 'sans que : subjonctif' },
    ],
  },

  ironie: {
    term: 'l’ironie',
    title: 'Un habit trop grand',
    body: "Un auteur d'aujourd'hui peut habiller un personnage ridicule de subjonctifs solennels : le décalage entre le style et la situation fait sourire. Cherche ce contraste, et ce que le texte laisse entendre sans le dire. EN: A solemn style on a small situation creates irony.",
    examples: [
      { itemId: E(1372), note: 'un style solennel, une situation comique' },
      { itemId: E(1373), note: 'le décalage crée l’ironie' },
      { itemId: E(1376), note: 'un roi en exil, dans un jardin' },
    ],
  },
};
