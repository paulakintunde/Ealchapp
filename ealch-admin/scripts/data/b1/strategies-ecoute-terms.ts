// b1.38.l1 « Écouter sans tout comprendre » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters. The lesson never
// puts three 13-character labels in one row: the scratch check sums every
// section's labels and asserts 37 or under, together with « every term is
// surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».
//
// A WORKSHOP GLOSSARY NAMES MOVES, NOT FORMS. Each term is something a
// listener DOES (prédire, faire répéter, reformuler, prendre note) or a part
// of speech the listener uses (le mot-clé, le connecteur, la source) or lets
// pass (la béquille).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, B137 } from './strategies-ecoute-corpus.ts';

export const STRATEGIES_ECOUTE_TERMS: Record<string, LessonTerm> = {
  /** Act 2: what the situation tells you before the first word. */
  prediction: {
    term: 'la prédiction',
    title: 'Deviner avant la première phrase',
    body: "Avant d'écouter, demande-toi qui parle, où, et pourquoi. La situation te donne déjà les mots probables : une porte à l'aéroport, une date chez le médecin. Ton oreille les reconnaît plus vite. EN: The situation tells you which words to expect, so your ear catches them faster.",
    examples: [
      { itemId: E(1225), note: 'les trois questions avant d’écouter' },
      { itemId: E(1226), note: 'à l’aéroport : une porte, une heure, un retard' },
      { itemId: E(1227), note: 'à la banque : un nom, un numéro, une date' },
    ],
  },

  /** Act 3: the gist, and the two passes. */
  essentiel: {
    term: "l'essentiel",
    title: "L'idée, puis les détails",
    body: "À la première écoute, cherche l'idée générale : de quoi ça parle, bonne ou mauvaise nouvelle. À la deuxième, cherche les détails dont tu as besoin. Si tu n'as qu'une écoute, garde l'idée. EN: First pass for the gist, second pass for the details; with one pass, keep the gist.",
    examples: [
      { itemId: E(1242), note: 'la première écoute' },
      { itemId: E(1243), note: 'la deuxième écoute' },
      { itemId: E(1245), note: "l'idée de la météo, en une phrase" },
    ],
  },

  /** Act 4: the stressed, content-carrying word. */
  motcle: {
    term: 'le mot-clé',
    title: 'Le mot qui porte le sens',
    body: "Les noms, les verbes et les chiffres portent le sens, et en français la voix appuie sur la fin du groupe. Écoute-les. Et garde une oreille pour les petits mots qui changent tout : pas, sauf, et non plus. EN: Nouns, verbs and numbers carry meaning; small words like pas and sauf can turn it.",
    examples: [
      { itemId: E(1258), note: 'les mots forts' },
      { itemId: E(1261), note: 'la note en trois mots-clés' },
      { itemId: E(1263), note: 'le petit « pas » qui change tout' },
    ],
  },

  /** Act 5: numbers, times, dates, names. */
  chiffres: {
    term: 'les chiffres',
    title: 'Ce qui ne se devine pas',
    body: "Un chiffre, une heure, une date ou un nom ne se devinent pas. Écoute la fin du mot (quinze, cinquante), pense à l'heure sur 24 heures, et fais épeler un nom. Au Québec, un numéro se dit chiffre par chiffre. EN: Numbers and names cannot be guessed: listen to the end of the word, or ask.",
    examples: [
      { itemId: E(1276), note: 'quinze : la fin du mot' },
      { itemId: E(1281), note: 'dix-sept heures, cinq heures' },
      { itemId: E(1282), note: 'un numéro, au Québec' },
    ],
  },

  /** Act 6: the spoken signpost. */
  connecteur: {
    term: 'le connecteur',
    title: 'Un panneau que tu entends',
    body: "D'abord, ensuite, par contre, du coup, bref : à l'oral, ces petits mots t'annoncent la suite. Après par contre, l'autre côté. Après du coup, la conséquence. Après bref, l'idée principale. EN: Spoken connectors announce what comes next: the other side, the result, the conclusion.",
    examples: [
      { itemId: E(1295), note: 'par contre : l’autre côté' },
      { itemId: E(1296), note: 'du coup : la conséquence' },
      { itemId: E(1297), note: 'bref : l’idée principale' },
    ],
  },

  /** Act 7: the reduced spoken forms. */
  reduction: {
    term: 'la réduction',
    title: 'Des mots qui rétrécissent',
    body: "À l'oral, je suis devient chuis, tu as devient t'as, il y a devient y a, et le ne disparaît souvent. Ce n'est pas une faute : c'est la langue de tous les jours. Reconnais-la, et écris la forme complète. EN: Spoken French shrinks words and drops ne; recognise it, write the full form.",
    examples: [
      { itemId: E(1312), note: 'chuis : je suis' },
      { itemId: E(1314), note: 'y a : il y a' },
      { itemId: E(1324), note: 'y a plus : il n’y a plus' },
    ],
  },

  /** Act 7: the filler. */
  bequille: {
    term: 'la béquille',
    title: 'Un mot pour gagner du temps',
    body: "Ben, euh, genre, bon : ces mots aident la personne qui parle à réfléchir. Ils ne portent pas de sens. Laisse-les passer, et ne les mets jamais dans ta note. EN: Fillers give the speaker time; they carry no meaning, so let them pass.",
    examples: [
      { itemId: E(1316), note: 'ben' },
      { itemId: E(1317), note: 'euh' },
      { itemId: E(1318), note: 'genre, qui ne veut pas dire kind ici' },
    ],
  },

  /** Act 8: asking for repetition. */
  repeter: {
    term: 'faire répéter',
    title: 'Tu as le droit de demander',
    body: "Au téléphone ou au guichet, faire répéter est normal. Dis pardon, demande plus lentement, ou mieux : dis ce que tu as entendu. Vous avez dit quinze ou cinquante ? La personne répète juste ce qui manque. EN: Asking again is normal; naming what you heard gets you exactly the missing part.",
    examples: [
      { itemId: E(1330), note: 'plus lentement' },
      { itemId: E(1337), note: 'deux choix : la réponse arrive vite' },
      { itemId: 'fr.a2.au-restaurant.133', note: 'la forme simple' },
    ],
  },

  /** Act 8: checking by reformulation. */
  reformuler: {
    term: 'reformuler',
    title: 'Redire pour vérifier',
    body: "Avant de raccrocher, redis l'essentiel avec tes mots : si je comprends bien..., c'est bien ça ? Si tu t'es trompé, la personne te corrige tout de suite. EN: Before hanging up, say the key point back; any mistake gets corrected on the spot.",
    examples: [
      { itemId: E(1334), note: 'si je comprends bien' },
      { itemId: E(1340), note: "c'est bien ça ?" },
      { itemId: E(1336), note: 'la formule' },
    ],
  },

  /** Act 9: who is speaking, and is it fact or opinion. */
  source: {
    term: 'la source',
    title: 'Qui parle, et est-ce vérifié',
    body: "À la radio, écoute d'abord qui parle : l'animateur, la Ville, un auditeur. Selon annonce une source, je trouve et à mon avis une opinion, il paraît que une rumeur. Dans ta note, garde qui dit quoi. EN: On the radio, listen for who is speaking; selon, je trouve and il paraît que tell you what kind of claim it is.",
    examples: [
      { itemId: E(1347), note: 'selon la Ville : une source' },
      { itemId: E(1349), note: 'je trouve : une opinion' },
      { itemId: B137(1164), note: 'il paraît que : une rumeur' },
    ],
  },

  /** Act 11: the note, and the graded task. */
  note: {
    term: 'prendre note',
    title: 'Qui, quoi, quand, quoi faire',
    body: "Une bonne note garde quatre choses : qui a appelé, pourquoi, le jour et l'heure, et ce qu'il faut faire. Avec les bons chiffres, en français écrit, sans euh ni chuis. EN: A good note keeps who, why, when and what to do, with the right numbers, in written French.",
    examples: [
      { itemId: E(1381), note: 'la règle' },
      { itemId: E(1380), note: 'les quatre questions' },
      { itemId: E(1383), note: 'le jour et l’heure' },
    ],
  },
};
