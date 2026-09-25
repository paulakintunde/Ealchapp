// b1.23.l1 « Tout, tous, toute, toutes » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters; the scratch check
// measures every section's actual row against 37.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './tout-corpus.ts';

export const TOUT_TERMS: Record<string, LessonTerm> = {
  /** The four written forms. */
  formes: {
    term: 'quatre formes',
    title: 'Tout, toute, tous, toutes',
    body: "À l'écrit, tout a quatre formes. À l'oral, tu en entends surtout deux : [too] pour tout et tous devant un nom, [toot] pour toute et toutes. EN: four written forms, mostly two sounds.",
    examples: [
      { itemId: E(1002), note: 'tous les cartons : masculin pluriel' },
      { itemId: E(1003), note: 'toute la vaisselle : féminin singulier' },
      { itemId: E(1004), note: 'toutes les chaises : féminin pluriel' },
    ],
  },

  /** Agreement with the noun. */
  accord: {
    term: "l'accord",
    title: 'Tout prend la forme du nom',
    body: "Devant un nom, tout regarde ce nom : son genre et son nombre. Tout le salon, toute la cuisine, tous les livres, toutes les assiettes. Avec mes, ces ou un, c'est pareil. EN: before a noun, tout agrees with it.",
    examples: [
      { itemId: E(1016), note: 'le salon : tout' },
      { itemId: E(1017), note: 'la cuisine : toute' },
      { itemId: E(1057), note: 'ces cartons : tous' },
    ],
  },

  /** How often. */
  frequence: {
    term: 'la fréquence',
    title: 'Combien de fois',
    body: "Tous les jours, toutes les semaines, tous les deux jours : tu comptes des fois qui se répètent. Le nom est au pluriel. EN: tous les plus a plural time word counts repetitions.",
    examples: [
      { itemId: E(1034), note: 'chaque jour, un après l’autre' },
      { itemId: E(1037), note: 'un jour sur deux' },
      { itemId: E(1039), note: 'toutes les dix minutes' },
    ],
  },

  /** How long. */
  duree: {
    term: 'la durée',
    title: 'Du début à la fin',
    body: "Toute la journée, toute la nuit, tout l'été : un seul moment, pris en entier. Le nom est au singulier. EN: toute la plus a singular time word measures one whole stretch.",
    examples: [
      { itemId: E(1035), note: 'une journée, du matin au soir' },
      { itemId: E(1042), note: 'une nuit entière' },
      { itemId: E(1041), note: 'un été entier' },
    ],
  },

  /** Tout, the pronoun. */
  pronom: {
    term: 'tout pronom',
    title: 'Tout, tout seul : everything',
    body: "Sans nom après lui, tout veut dire toutes les choses. Il ne change jamais et le verbe reste au singulier : tout est prêt, tout va bien. EN: on its own, tout means everything, with a singular verb.",
    examples: [
      { itemId: E(1072), note: 'tout, sujet, au singulier' },
      { itemId: E(1074), note: 'tout, après le verbe' },
      { itemId: 'fr.sons.masterclass.037', note: 'la phrase que tu connais déjà' },
    ],
  },

  /** The S of pronoun tous. */
  tus: {
    term: 'le s de tous',
    title: 'Tous, pronom : [toos]',
    body: "Quand tous est un pronom, seul, sans nom après lui, son s se prononce : ils sont tous là, [toos]. Devant un nom, il reste muet : tous les jours, [too]. EN: pronoun tous sounds its s; determiner tous does not.",
    examples: [
      { itemId: 'fr.sons.muettes.059', note: 'le pronom, avec son s' },
      { itemId: E(1094), note: 'tous, après le verbe : [toos]' },
      { itemId: E(1095), note: 'tous, devant les voisins : [too]' },
    ],
  },

  /** Place in compound tenses. */
  place: {
    term: 'la place',
    title: 'Entre l’auxiliaire et le participe',
    body: "Au passé composé, tout et tous se mettent après avoir ou être, devant le participe : j'ai tout compris, ils sont tous partis. Avec un infinitif, tout passe devant : je vais tout ranger. EN: between the auxiliary and the participle.",
    examples: [
      { itemId: E(1106), note: 'tout, entre ai et compris' },
      { itemId: E(1107), note: 'tous, entre sont et partis' },
      { itemId: E(1111), note: 'tout, devant ranger' },
    ],
  },

  /** Tout, the adverb. */
  adverbe: {
    term: 'tout adverbe',
    title: 'Tout veut dire complètement',
    body: "Devant un adjectif ou un adverbe, tout veut dire complètement, très. Il ne change pas : tout près, tout neuf, tout heureuse. Une seule exception, au féminin : toute seule. EN: before an adjective, tout means completely and stays unchanged.",
    examples: [
      { itemId: E(1124), note: 'tout près : très près' },
      { itemId: E(1125), note: 'tout neuf : complètement neuf' },
      { itemId: E(1129), note: 'tout heureuse : pas de changement devant une voyelle' },
    ],
  },

  /** The adverb's one agreement. */
  exception: {
    term: "l'exception",
    title: 'Toute seule, toutes contentes',
    body: "Tout adverbe change devant un adjectif féminin qui commence par une consonne ou un h aspiré : toute seule, toutes contentes, toute honteuse. Devant une voyelle, il ne change pas : tout heureuse. EN: it agrees only before a feminine adjective starting with a consonant sound.",
    examples: [
      { itemId: E(1123), note: 'seule, féminin, s : toute' },
      { itemId: E(1130), note: 'honteuse, h aspiré : toute' },
      { itemId: E(1136), note: 'émues, voyelle : tout' },
    ],
  },

  /** Fixed expressions. */
  expressions: {
    term: 'expressions',
    title: 'Des blocs qui ne bougent pas',
    body: "Tout à fait, tout à l'heure, tout de suite, en tout cas, malgré tout, tout le temps : ce sont des blocs. Tu les apprends entiers, et ils ne s'accordent jamais. EN: learn them whole; they never agree.",
    examples: [
      { itemId: E(1141), note: 'tout à fait : absolument' },
      { itemId: E(1142), note: "tout à l'heure : il y a un moment" },
      { itemId: E(1143), note: "tout à l'heure : dans un moment" },
    ],
  },

  /** Tout le monde. */
  monde: {
    term: 'tout le monde',
    title: 'Everybody, au singulier',
    body: "Tout le monde veut dire everybody, pas the whole world. C'est un groupe vu comme un bloc, donc le verbe reste au singulier : tout le monde est là. Pour le monde entier, dis le monde entier. EN: everybody, with a singular verb.",
    examples: [
      { itemId: E(1160), note: 'est, au singulier' },
      { itemId: E(1168), note: 'le monde entier : the whole world' },
      { itemId: 'fr.a2.transports-quotidiens.211', note: 'au terminus, dans le métro' },
    ],
  },

  /** The organising message. */
  message: {
    term: 'le message',
    title: 'Un message qui organise',
    body: "Un bon message d'organisation dit quand, où, qui fait quoi, et ce qui est déjà prêt. Chaque tout couvre un groupe précis : tout le monde, tous les deux, toute l'équipe. EN: when, where, who does what, and what is ready.",
    examples: [
      { itemId: E(1176), note: 'le groupe entier, invité' },
      { itemId: E(1186), note: 'deux personnes précises' },
      { itemId: E(1194), note: 'ce qui est fait' },
    ],
  },
};
