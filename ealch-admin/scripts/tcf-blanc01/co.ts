// TCF Canada blanc-01 — Compréhension orale, the lower slope (A1, A2, B1).
//
// ── One task per BAND, not one per document ────────────────────────────────
//
// TEF splits CO into seven tasks because it has seven named blocks. TCF has
// none, so the split is a choice, and band is the right one: `targetItemIds`
// hangs off the TASK, and ITEMS is keyed by theme AND band, so a band-shaped
// task routes a miss to material at the band the candidate actually failed.
// One task for all 39 would route a missed A1 question to C1 vocabulary.
//
// ── The ramp ───────────────────────────────────────────────────────────────
//
// A1 3 · A2 6 · B1 10 — in that order, and the order is the instrument. The
// upper slope is in co-hi.ts and MUST follow this file in the array.
//
// Band characters, from TOPICS-tcf-canada:
//   A1  concrete, literal, one fact, stated once plainly
//   A2  still literal, but one competing fact must be ignored
//   B1  two facts held together, or one tracked across a turn change
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, uniq, ITEMS } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'co_mcq' as const,
  skill: 'CO' as const,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ A1 — positions 1 to 3 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: each answer is said once, in plain words, and no distractor is
// mentioned in the audio at all. At A1 a distractor that appears in the text is
// a trap, and the on-ramp is not where a trap belongs.

export const CO_A1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  level: 'a1',
  label: 'Compréhension orale · A1',
  prompt: 'Vous allez entendre trois documents courts. Pour chaque document, choisissez la bonne réponse.',
  timingS: 165,
  targetItemIds: uniq(ITEMS.salutations.a1, ITEMS.deplacements.a1, ITEMS.marche.a1),
  parts: [
    {
      label: 'Document 1 · un message',
      playCount: 1,
      readWindowS: 10,
      durationS: 14,
      text: 'UNE FEMME : Salut, c’est Amina. Je suis dans le bus, j’arrive dans dix minutes. Commencez sans moi.',
      items: [
        {
          q: 'Pourquoi Amina téléphone-t-elle ?',
          opts: ['Pour dire qu’elle arrive en retard', 'Pour annuler le rendez-vous', 'Pour demander l’adresse', 'Pour proposer une autre date'],
          correct: 0,
          why: 'Elle est dans le bus et arrive dans dix minutes : elle prévient d’un retard.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 2 · dans un centre commercial',
      playCount: 1,
      readWindowS: 10,
      durationS: 12,
      text:
        'UN HOMME : Excusez-moi, où sont les toilettes ?\n' +
        'UNE EMPLOYÉE : Au fond du couloir, à gauche.',
      items: [
        {
          q: 'Que cherche cet homme ?',
          opts: ['Les toilettes', 'La sortie', 'Un ascenseur', 'La caisse'],
          correct: 0,
          why: 'Il demande où sont les toilettes, et on lui indique le couloir.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 3 · une annonce en magasin',
      playCount: 1,
      readWindowS: 10,
      durationS: 13,
      text: 'UNE VOIX : Chers clients, le magasin ferme dans dix minutes. Merci de vous diriger vers les caisses.',
      items: [
        {
          q: 'Que dit cette annonce ?',
          opts: ['Le magasin va fermer', 'Le magasin vient d’ouvrir', 'Une caisse est en panne', 'Il y a une promotion'],
          correct: 0,
          why: 'Le magasin ferme dans dix minutes ; les clients doivent aller aux caisses.',
          band: 'a1',
        },
      ],
    },
  ],
};

/* ═══ A2 — positions 4 to 9 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: every document names exactly ONE competing fact the candidate
// must set aside — a second time, a second platform, a second price. That is
// the whole difference from A1 and it is deliberate in each of the six.

export const CO_A2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'a2',
  label: 'Compréhension orale · A2',
  prompt: 'Vous allez entendre six documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 325,
  targetItemIds: uniq(
    ITEMS.transportsQuotidiens.a2,
    ITEMS.rpSante.a2,
    ITEMS.deplacements.a2,
    ITEMS.auRestaurant.a2,
    ITEMS.meteo.a2,
    ITEMS.rpEtiquette.a2
  ),
  parts: [
    {
      label: 'Document 4 · en gare',
      playCount: 1,
      readWindowS: 12,
      durationS: 18,
      text:
        'UNE VOIX : Le train de quatorze heures dix à destination de Vaubourg partira avec vingt minutes de retard. ' +
        'Il partira donc à quatorze heures trente, voie six.',
      items: [
        {
          q: 'À quelle heure le train partira-t-il ?',
          opts: ['À quatorze heures trente', 'À quatorze heures dix', 'À vingt heures', 'À six heures'],
          correct: 0,
          why: 'Quatorze heures dix est l’horaire prévu ; avec vingt minutes de retard, le départ est à quatorze heures trente.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · un appel au cabinet dentaire',
      playCount: 1,
      readWindowS: 12,
      durationS: 20,
      text:
        'UN HOMME : Bonjour, j’ai rendez-vous mardi à dix heures. Je ne peux plus. Auriez-vous jeudi ?\n' +
        'UNE SECRÉTAIRE : Jeudi, il me reste seize heures trente.\n' +
        'UN HOMME : Très bien, je prends.',
      items: [
        {
          q: 'Quel est le nouveau rendez-vous ?',
          opts: ['Jeudi à seize heures trente', 'Mardi à dix heures', 'Jeudi à dix heures', 'Mardi à seize heures trente'],
          correct: 0,
          why: 'Mardi dix heures est le rendez-vous qu’il annule. Il accepte jeudi seize heures trente.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · dans la rue',
      playCount: 1,
      readWindowS: 12,
      durationS: 19,
      text:
        'UNE FEMME : Pardon, la gare, c’est loin ?\n' +
        'UN HOMME : À pied, un quart d’heure. Vous prenez la deuxième rue à droite, puis tout droit. ' +
        'En bus c’est cinq minutes, mais il passe dans une demi-heure.',
      items: [
        {
          q: 'Combien de temps faut-il à pied ?',
          opts: ['Un quart d’heure', 'Cinq minutes', 'Une demi-heure', 'Deux minutes'],
          correct: 0,
          why: 'Cinq minutes est le trajet en bus, une demi-heure l’attente. À pied, c’est un quart d’heure.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · une réservation',
      playCount: 1,
      readWindowS: 12,
      durationS: 21,
      text:
        'UNE FEMME : Bonjour, je voudrais réserver pour samedi soir, quatre personnes.\n' +
        'UN SERVEUR : Samedi, c’est complet à vingt heures. À vingt et une heures, j’ai une table de quatre.\n' +
        'UNE FEMME : Parfait, vingt et une heures.',
      items: [
        {
          q: 'À quelle heure la table est-elle réservée ?',
          opts: ['À vingt et une heures', 'À vingt heures', 'À dix-neuf heures', 'À vingt-deux heures'],
          correct: 0,
          why: 'Vingt heures est complet. La réservation est prise à vingt et une heures.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 8 · la météo du week-end',
      playCount: 1,
      readWindowS: 12,
      durationS: 22,
      text:
        'UNE VOIX : Samedi, la pluie s’installe sur toute la région, avec quinze degrés l’après-midi. ' +
        'Dimanche en revanche, le soleil revient et il fera vingt et un degrés.',
      items: [
        {
          q: 'Quel temps fera-t-il dimanche ?',
          opts: ['Du soleil et vingt et un degrés', 'De la pluie et quinze degrés', 'De la pluie et vingt et un degrés', 'Du soleil et quinze degrés'],
          correct: 0,
          why: 'La pluie et quinze degrés, c’est samedi. Dimanche, soleil et vingt et un degrés.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 9 · un message sur répondeur',
      playCount: 1,
      readWindowS: 12,
      durationS: 20,
      text:
        'UNE VOIX : Bonjour, ici le salon Pralet. Votre rendez-vous de vendredi est bien noté. ' +
        'Rappelez-nous avant jeudi midi si vous souhaitez le déplacer.',
      items: [
        {
          q: 'Que demande ce message ?',
          opts: ['De rappeler seulement en cas de changement', 'De rappeler pour confirmer', 'D’arriver plus tôt vendredi', 'D’annuler le rendez-vous'],
          correct: 0,
          why: 'Le rendez-vous est déjà noté. Il faut rappeler uniquement pour le déplacer, avant jeudi midi.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ B1 — positions 10 to 19 ═════════════════════════════════════════════ */
//
// Seven documents, ten questions: three of them carry two. That is where the
// band character bites — a document with two questions is one where two facts
// must be held at once, not one fact asked twice.

export const CO_B1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '003'),
  level: 'b1',
  label: 'Compréhension orale · B1',
  prompt: 'Vous allez entendre sept documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 540,
  targetItemIds: uniq(
    ITEMS.metiers.b1,
    ITEMS.examensEtDiplomes.b1,
    ITEMS.traditions.b1,
    ITEMS.tourisme.b1,
    ITEMS.rpQuotidien.b1,
    ITEMS.transportsQuotidiens.b1
  ),
  parts: [
    {
      label: 'Document 10 · un entretien',
      playCount: 1,
      readWindowS: 20,
      durationS: 42,
      text:
        'UNE JOURNALISTE : Vous étiez comptable pendant douze ans. Pourquoi devenir ébéniste ?\n' +
        'UN HOMME : Ce n’est pas le bureau qui me pesait, les collègues étaient très bien. C’est que je ne voyais jamais le résultat de mon travail. ' +
        'Un meuble, on le voit. J’ai suivi une formation de deux ans, le soir, avant de me lancer.',
      items: [
        {
          q: 'Pourquoi a-t-il changé de métier ?',
          opts: [
            'Il ne voyait pas le résultat de son travail',
            'Il ne s’entendait pas avec ses collègues',
            'Il gagnait mal sa vie',
            'Il voulait travailler le soir',
          ],
          correct: 0,
          why: 'Il écarte lui-même le bureau et les collègues. Ce qui pesait, c’est de ne jamais voir le résultat.',
          band: 'b1',
        },
        {
          q: 'Comment s’est-il préparé ?',
          opts: [
            'Par une formation du soir sur deux ans',
            'En apprenant seul chez lui',
            'En reprenant ses études à plein temps',
            'Directement, sans formation',
          ],
          correct: 0,
          why: 'Il précise une formation de deux ans, le soir, avant de se lancer.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 11 · deux parents discutent',
      playCount: 1,
      readWindowS: 20,
      durationS: 44,
      text:
        'UNE FEMME : L’école du centre a une très bonne réputation, mais c’est quarante minutes de trajet.\n' +
        'UN HOMME : Celle du quartier est à cinq minutes. Les classes sont plus chargées, c’est vrai.\n' +
        'UNE FEMME : À son âge, quarante minutes matin et soir, je trouve que c’est beaucoup. On commence par celle du quartier.',
      items: [
        {
          q: 'Quelle école choisissent-ils ?',
          opts: ['Celle du quartier', 'Celle du centre', 'Aucune des deux', 'Ils ne se décident pas'],
          correct: 0,
          why: 'La mère conclut « on commence par celle du quartier », malgré la réputation de l’autre.',
          band: 'b1',
        },
        {
          q: 'Qu’est-ce qui emporte la décision ?',
          opts: ['La durée du trajet', 'La taille des classes', 'La réputation de l’école', 'Le coût de la cantine'],
          correct: 0,
          why: 'Les classes chargées sont l’inconvénient qu’ils acceptent ; ce sont les quarante minutes qui tranchent.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 12 · un reportage au marché',
      playCount: 1,
      readWindowS: 20,
      durationS: 46,
      text:
        'UNE REPORTRICE : Le marché de Corbeny a lieu depuis quarante ans, tous les jeudis. Depuis l’an dernier, il ouvre aussi le dimanche.\n' +
        'UN PRODUCTEUR : Le dimanche, on voit surtout des familles. Le jeudi, ce sont les habitués, ceux qui viennent chaque semaine. ' +
        'Les deux marchés ne se ressemblent pas du tout.',
      items: [
        {
          q: 'Quelle est la nouveauté cette année ?',
          opts: ['Le marché ouvre aussi le dimanche', 'Le marché a changé de place', 'Le marché a quarante ans', 'Le marché ferme le jeudi'],
          correct: 0,
          why: 'Les quarante ans et le jeudi sont anciens ; l’ouverture du dimanche date de l’an dernier.',
          band: 'b1',
        },
        {
          q: 'Selon le producteur, qui vient le jeudi ?',
          opts: ['Les clients habitués', 'Les familles', 'Les touristes', 'Les restaurateurs'],
          correct: 0,
          why: 'Les familles viennent le dimanche ; le jeudi, ce sont les habitués.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 13 · des vacances annulées',
      playCount: 1,
      readWindowS: 18,
      durationS: 38,
      text:
        'UN HOMME : On devait partir jeudi, mais avec la grève des trains on a tout annulé.\n' +
        'UNE FEMME : Vous auriez pu prendre la voiture, non ?\n' +
        'UN HOMME : Huit heures de route avec les enfants, non merci. On repartira en septembre, ce sera plus calme.',
      items: [
        {
          q: 'Pourquoi n’ont-ils pas pris la voiture ?',
          opts: ['Le trajet était trop long avec les enfants', 'Ils n’ont pas de voiture', 'Les routes étaient fermées', 'C’était trop cher'],
          correct: 0,
          why: 'Il refuse à cause des huit heures de route avec les enfants, pas de la grève, qui explique l’annulation du train.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 14 · une interview',
      playCount: 1,
      readWindowS: 18,
      durationS: 40,
      text:
        'UNE JOURNALISTE : Vous commencez à quelle heure ?\n' +
        'UN BOULANGER : Trois heures du matin, six jours sur sept. Le plus dur n’est pas de se lever, on s’habitue. ' +
        'C’est de se coucher à vingt heures quand tout le monde commence sa soirée.',
      items: [
        {
          q: 'Qu’est-ce qui lui pèse le plus ?',
          opts: ['L’heure du coucher', 'L’heure du lever', 'Le nombre de jours travaillés', 'La chaleur du fournil'],
          correct: 0,
          why: 'Il dit explicitement qu’on s’habitue au lever ; le difficile est de se coucher à vingt heures.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 15 · une conversation à la maison',
      playCount: 1,
      readWindowS: 18,
      durationS: 39,
      text:
        'UNE FEMME : On avait dit chacun sa semaine pour la cuisine, mais ça ne tient pas.\n' +
        'UN HOMME : Le problème, c’est que ma semaine tombe toujours quand je rentre tard.\n' +
        'UNE FEMME : Alors on change : toi les courses, moi la cuisine. Chacun garde la même tâche.',
      items: [
        {
          q: 'Quelle solution trouvent-ils ?',
          opts: ['Chacun garde une tâche fixe', 'Ils alternent chaque semaine', 'Ils font tout ensemble', 'Ils renoncent à s’organiser'],
          correct: 0,
          why: 'L’alternance est ce qui ne tient pas. Ils passent à une tâche fixe par personne.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 16 · une ligne supprimée',
      playCount: 1,
      readWindowS: 18,
      durationS: 41,
      text:
        'UN REPORTER : La ligne 12 desservait le hameau de Vaubourg deux fois par jour. Elle est supprimée depuis septembre.\n' +
        'UNE HABITANTE : On nous a proposé un service à la demande, il faut réserver la veille. ' +
        'Pour un rendez-vous prévu, ça va. Pour aller à la pharmacie un dimanche, ça ne va pas.',
      items: [
        {
          q: 'Que reproche l’habitante au nouveau service ?',
          opts: [
            'Il ne convient pas aux déplacements imprévus',
            'Il coûte plus cher que le bus',
            'Il ne dessert plus le hameau',
            'Il ne circule pas le matin',
          ],
          correct: 0,
          why: 'Elle admet que pour un rendez-vous prévu cela convient ; c’est la réservation la veille qui exclut l’imprévu.',
          band: 'b1',
        },
      ],
    },
  ],
};
