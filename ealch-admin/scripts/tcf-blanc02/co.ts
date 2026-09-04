// TCF Canada blanc-02 — Compréhension orale, the lower slope (A1, A2, B1).
//
// Same shape as blanc-01: one task per BAND, so a miss routes to material at
// the band it happened. The upper slope is in co-hi.ts and MUST follow this
// file in the array — order is the instrument here.
//
// Band characters, from TOPICS-tcf-canada:
//   A1  concrete, literal, one fact, stated once plainly
//   A2  still literal, but one competing fact must be ignored
//   B1  two facts held together, or one tracked across a turn change
//
// ── Length is a guard now, not a hope ──────────────────────────────────────
//
// blanc-01 was authored, rendered twice and reviewed before anyone noticed its
// documents ran at a third of the length STANDARD-tcf §3 requires. These are
// written to the envelope from the start: at the band's target rate, A1 fills
// 10-20s, A2 20-30s, B1 30-50s. `lengthShortfalls` in scripts/tcf/paper-rules.ts
// fails the suite if one is short, and check-authored-length.ts reports it
// without needing a single rendered clip.
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
// mentioned in the audio at all. Document 2 states three fares and asks about
// none of them: the fares are colour, and the question turns on what the
// reduced fare REQUIRES, which is said once and whose alternatives are absent.

export const CO_A1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  level: 'a1',
  label: 'Compréhension orale · A1',
  prompt: 'Vous allez entendre trois documents courts. Pour chaque document, choisissez la bonne réponse.',
  timingS: 115,
  targetItemIds: uniq(ITEMS.cafe.a1, ITEMS.transportsQuotidiens.a1, ITEMS.presentationPersonnelle.a1),
  parts: [
    {
      label: 'Document 1 · au comptoir',
      playCount: 1,
      readWindowS: 10,
      durationS: 16,
      text:
        'UNE FEMME : Bonjour. Un café, s’il vous plaît.\n' +
        'UN SERVEUR : Bien sûr. Sur place ou à emporter ?\n' +
        'UNE FEMME : À emporter, je suis pressée.\n' +
        'UN SERVEUR : Deux euros quarante, s’il vous plaît.\n' +
        'UNE FEMME : Voilà. Merci beaucoup, bonne journée.',
      items: [
        {
          q: 'Combien coûte le café ?',
          opts: ['Deux euros quarante', 'Deux euros quatorze', 'Douze euros quarante', 'Deux euros quatre'],
          correct: 0,
          why: 'Le serveur annonce deux euros quarante.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 2 · les tarifs au guichet',
      playCount: 1,
      readWindowS: 10,
      durationS: 18,
      text:
        'UNE VOIX : Rappel des tarifs. Le billet plein tarif coûte deux euros. ' +
        'Le tarif réduit coûte un euro, sur présentation d’une carte d’étudiant. ' +
        'L’abonnement mensuel coûte trente euros. ' +
        'Les guichets sont ouverts jusqu’à dix-neuf heures.',
      items: [
        {
          q: 'Que faut-il présenter pour obtenir le tarif réduit ?',
          opts: ['Une carte d’étudiant', 'Une pièce d’identité', 'Un justificatif de domicile', 'Une photo'],
          correct: 0,
          why: 'Le tarif réduit est accordé sur présentation d’une carte d’étudiant.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 3 · quelqu’un se présente',
      playCount: 1,
      readWindowS: 10,
      durationS: 18,
      text:
        'UN HOMME : Bonjour, je m’appelle Karim Vallier. J’habite à Vaubourg depuis cinq ans. ' +
        'Je suis arrivé ici pour le travail. ' +
        'Je travaille dans une librairie, près de la gare. J’ai deux enfants et un chien.',
      items: [
        {
          q: 'Quel est le métier de cet homme ?',
          opts: ['Il travaille dans une librairie', 'Il est professeur', 'Il est médecin', 'Il est chauffeur'],
          correct: 0,
          why: 'Il dit travailler dans une librairie, près de la gare.',
          band: 'a1',
        },
      ],
    },
  ],
};

/* ═══ A2 — positions 4 to 9 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: every document names exactly ONE competing fact the candidate
// must set aside — a closing date against a reopening, a refund against an
// exchange, a checkout hour against a check-in. That is the whole difference
// from A1 and it is deliberate in each of the six.

export const CO_A2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'a2',
  label: 'Compréhension orale · A2',
  prompt: 'Vous allez entendre six documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 295,
  targetItemIds: uniq(
    ITEMS.sportsEtLoisirs.a2,
    ITEMS.courses.a2,
    ITEMS.hebergement.a2,
    ITEMS.collegues.a2,
    ITEMS.voisinage.a2,
    ITEMS.systemeDeSante.a2
  ),
  parts: [
    {
      label: 'Document 4 · la piscine ferme',
      playCount: 1,
      readWindowS: 12,
      durationS: 21,
      text:
        'UNE VOIX : Avis aux usagers. La piscine municipale fermera pour travaux le lundi trois mars. ' +
        'La réouverture est prévue le mardi quinze avril. ' +
        'Pendant la fermeture, les abonnements sont suspendus et prolongés d’autant. ' +
        'Le bassin extérieur reste ouvert le week-end. Merci de votre compréhension.',
      items: [
        {
          q: 'Quand la piscine rouvrira-t-elle ?',
          opts: ['Le quinze avril', 'Le trois mars', 'Le quinze mars', 'Le trois avril'],
          correct: 0,
          why: 'Le trois mars est la date de fermeture ; la réouverture est prévue le quinze avril.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · un article rapporté',
      playCount: 1,
      readWindowS: 12,
      durationS: 24,
      text:
        'UN CLIENT : Bonjour, je voudrais rapporter cette lampe. Elle ne s’allume pas.\n' +
        'UNE VENDEUSE : Vous avez le ticket ?\n' +
        'UN CLIENT : Oui, je l’ai achetée samedi dernier.\n' +
        'UNE VENDEUSE : Alors je peux vous l’échanger, ou vous rembourser. ' +
        'Le remboursement prend cinq jours.\n' +
        'UN CLIENT : Je préfère l’échange, c’est plus simple.\n' +
        'UNE VENDEUSE : Très bien, je vous en apporte une autre.',
      items: [
        {
          q: 'Que choisit le client ?',
          opts: ['L’échange', 'Le remboursement', 'Un avoir', 'Une réparation'],
          correct: 0,
          why: 'Le remboursement lui est proposé et il le refuse : il préfère l’échange.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · une réservation confirmée',
      playCount: 1,
      readWindowS: 12,
      durationS: 22,
      text:
        'UNE VOIX : Bonjour, ici l’hôtel des Tilleuls. ' +
        'Nous confirmons votre réservation pour deux nuits, du vendredi douze au dimanche quatorze juin. ' +
        'Nous avons noté une chambre double avec petit-déjeuner. ' +
        'L’arrivée se fait à partir de quinze heures et le départ avant onze heures. Bonne journée.',
      items: [
        {
          q: 'À partir de quelle heure peut-on arriver ?',
          opts: ['Quinze heures', 'Onze heures', 'Douze heures', 'Quatorze heures'],
          correct: 0,
          why: 'Onze heures est l’heure limite du départ. L’arrivée se fait à partir de quinze heures.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · en retard au bureau',
      playCount: 1,
      readWindowS: 12,
      durationS: 22,
      text:
        'UNE FEMME : Excuse-moi, je suis en retard. Le train de huit heures a été supprimé.\n' +
        'UN HOMME : Ce n’est pas grave. La réunion a été décalée à dix heures.\n' +
        'UNE FEMME : Ah, tant mieux. J’ai cru que je l’avais manquée.\n' +
        'UN HOMME : Non, tu as même le temps de prendre un café.',
      items: [
        {
          q: 'Pourquoi n’a-t-elle rien manqué ?',
          opts: [
            'La réunion a été décalée',
            'Elle est arrivée à l’heure',
            'La réunion a été annulée',
            'Elle a pris le train suivant',
          ],
          correct: 0,
          why: 'Le train supprimé explique son retard ; ce qui la sauve est le décalage de la réunion à dix heures.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 8 · le quartier expliqué',
      playCount: 1,
      readWindowS: 12,
      durationS: 23,
      text:
        'UNE FEMME : Bienvenue dans l’immeuble. La boulangerie est au coin, elle ouvre à sept heures. ' +
        'Le marché a lieu le mercredi et le samedi matin, sur la place. ' +
        'Les poubelles se sortent le dimanche soir. ' +
        'Si vous avez besoin de quelque chose, je suis au deuxième étage.',
      items: [
        {
          q: 'Quand faut-il sortir les poubelles ?',
          opts: ['Le dimanche soir', 'Le mercredi matin', 'Le samedi matin', 'À sept heures'],
          correct: 0,
          why: 'Le mercredi et le samedi sont les jours de marché. Les poubelles se sortent le dimanche soir.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 9 · un rendez-vous médical',
      playCount: 1,
      readWindowS: 12,
      durationS: 23,
      text:
        'UN HOMME : Bonjour, je voudrais un rendez-vous avec le docteur Ferrand.\n' +
        'UNE SECRÉTAIRE : Il n’a plus rien avant le vingt. ' +
        'Sa collègue, le docteur Almeida, peut vous recevoir jeudi à quatorze heures.\n' +
        'UN HOMME : Jeudi, très bien, je prends.\n' +
        'UNE SECRÉTAIRE : C’est noté. Pensez à apporter votre carte.\n' +
        'UN HOMME : Merci beaucoup, à jeudi.',
      items: [
        {
          q: 'Avec qui aura-t-il rendez-vous ?',
          opts: ['Le docteur Almeida', 'Le docteur Ferrand', 'Une infirmière', 'Le pharmacien'],
          correct: 0,
          why: 'Le docteur Ferrand est celui qu’il demande et qui n’a rien avant le vingt. Il accepte sa collègue.',
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
  timingS: 498,
  targetItemIds: uniq(
    ITEMS.bureau.b1,
    ITEMS.douaneEtImmigration.b1,
    ITEMS.soins.b1,
    ITEMS.systemeDeSante.b1,
    ITEMS.entraide.b1,
    ITEMS.affaires.b1,
    ITEMS.conflitsReconciliation.b1
  ),
  parts: [
    {
      label: 'Document 10 · le quartier depuis le télétravail',
      playCount: 1,
      readWindowS: 20,
      durationS: 40,
      text:
        'UNE CHRONIQUEUSE : Trois jours par semaine, les bureaux du centre se vident. ' +
        'On a beaucoup dit que le quartier allait mourir. Il s’est passé autre chose.\n' +
        'UN COMMERÇANT : Le midi, oui, j’ai perdu la moitié de ma clientèle. ' +
        'Ce sont les employés qui déjeunaient vite entre deux réunions.\n' +
        'UNE CHRONIQUEUSE : Mais le matin et le soir ?\n' +
        'UN COMMERÇANT : Le matin, c’est nouveau. Des gens du quartier qui restent chez eux ' +
        'et qui descendent prendre un café à dix heures. Ils s’installent, ils parlent. ' +
        'Ce n’est pas la même clientèle et ce n’est pas le même métier.',
      items: [
        {
          q: 'Qu’est-ce que le commerçant a perdu ?',
          opts: [
            'La clientèle du midi',
            'La clientèle du matin',
            'Ses fournisseurs',
            'Son bail commercial',
          ],
          correct: 0,
          why: 'Il perd la moitié de sa clientèle le midi, celle des employés pressés.',
          band: 'b1',
        },
        {
          q: 'Qu’est-ce qui a changé le matin ?',
          opts: [
            'Des habitants du quartier viennent et restent',
            'Il ouvre plus tôt',
            'Les employés arrivent plus tôt',
            'Il a baissé ses prix',
          ],
          correct: 0,
          why: 'Des gens qui travaillent chez eux descendent à dix heures, s’installent et parlent.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 11 · un dossier perdu deux fois',
      playCount: 1,
      readWindowS: 20,
      durationS: 40,
      text:
        'UN JOURNALISTE : Vous avez déposé le même dossier trois fois.\n' +
        'UNE FEMME : Trois fois, oui. La première, on m’a dit qu’il manquait une pièce. ' +
        'Je l’ai apportée. La deuxième, le dossier avait disparu entre deux services. ' +
        'La troisième, je suis allée au guichet et je n’ai plus rien envoyé par la poste.\n' +
        'UN JOURNALISTE : Et cela a fonctionné ?\n' +
        'UNE FEMME : Cela a fonctionné. Ce qui me pèse, ce n’est pas l’attente, ' +
        'c’est qu’il faille comprendre le fonctionnement interne d’une administration ' +
        'pour obtenir ce à quoi on a droit.',
      items: [
        {
          q: 'Que s’est-il passé la deuxième fois ?',
          opts: [
            'Le dossier a été perdu entre deux services',
            'Il manquait une pièce',
            'Elle est allée au guichet',
            'Le dossier a été refusé',
          ],
          correct: 0,
          why: 'La pièce manquante est la première fois. La deuxième, le dossier disparaît entre deux services.',
          band: 'b1',
        },
        {
          q: 'Que reproche-t-elle exactement ?',
          opts: [
            'Qu’il faille connaître l’administration pour obtenir son droit',
            'Que les délais soient trop longs',
            'Que les agents soient mal aimables',
            'Que la démarche coûte trop cher',
          ],
          correct: 0,
          why: 'Elle écarte elle-même l’attente : ce qui pèse est de devoir comprendre le fonctionnement interne.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 12 · les horaires d’une infirmière',
      playCount: 1,
      readWindowS: 20,
      durationS: 40,
      text:
        'UN JOURNALISTE : Vous travaillez douze heures d’affilée. C’est le plus dur ?\n' +
        'UNE INFIRMIÈRE : Douze heures, on s’y fait, et beaucoup d’entre nous les préfèrent : ' +
        'trois jours travaillés, quatre jours à soi. Le problème n’est pas la longueur.\n' +
        'UN JOURNALISTE : Alors quoi ?\n' +
        'UNE INFIRMIÈRE : C’est de ne pas savoir. Le planning du mois suivant tombe le vingt-cinq. ' +
        'Avant, il tombait quinze jours plus tôt. Quand vous avez des enfants, ' +
        'ces quinze jours sont exactement ce qui vous permet de vous organiser.',
      items: [
        {
          q: 'Que pense-t-elle des journées de douze heures ?',
          opts: [
            'Beaucoup de ses collègues les préfèrent',
            'Elles sont la principale difficulté',
            'Elles devraient être supprimées',
            'Elles sont mal payées',
          ],
          correct: 0,
          why: 'Elle dit qu’on s’y fait et que beaucoup les préfèrent, pour les quatre jours qu’elles libèrent.',
          band: 'b1',
        },
        {
          q: 'Qu’est-ce qui a changé ?',
          opts: [
            'Le planning arrive quinze jours plus tard',
            'Les journées se sont allongées',
            'Il y a moins de personnel',
            'Les week-ends sont travaillés',
          ],
          correct: 0,
          why: 'Le planning tombe le vingt-cinq, quand il tombait quinze jours plus tôt.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 13 · deux mutuelles comparées',
      playCount: 1,
      readWindowS: 18,
      durationS: 34,
      text:
        'UN HOMME : J’ai les deux devis. La première est moins chère de huit euros par mois.\n' +
        'UNE FEMME : Et pour le reste, c’est pareil ?\n' +
        'UN HOMME : Presque. Les consultations, les médicaments, l’hôpital : identiques. ' +
        'La différence tient au dentaire. La première rembourse la moitié d’une couronne, ' +
        'la seconde la totalité.\n' +
        'UNE FEMME : Avec ce qui nous attend chez le dentiste cette année, ' +
        'huit euros par mois ne pèsent pas lourd.\n' +
        'UN HOMME : C’est aussi ce que je me suis dit. ' +
        'Je renvoie le dossier ce soir, avant la fin de la promotion.',
      items: [
        {
          q: 'Sur quoi les deux mutuelles diffèrent-elles ?',
          opts: [
            'Le remboursement du dentaire',
            'Le prix des consultations',
            'La prise en charge à l’hôpital',
            'Le remboursement des médicaments',
          ],
          correct: 0,
          why: 'Consultations, médicaments et hôpital sont identiques. Seul le dentaire les sépare.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 14 · organiser un déménagement',
      playCount: 1,
      readWindowS: 18,
      durationS: 34,
      text:
        'UNE FEMME : On est six à venir samedi. Le camion est réservé pour huit heures.\n' +
        'UN HOMME : Six, c’est beaucoup pour un deux-pièces. Le problème n’est pas de porter, ' +
        'c’est l’escalier : il est étroit et on ne peut pas se croiser.\n' +
        'UNE FEMME : Alors trois en haut, trois en bas, et personne dans l’escalier ' +
        'sauf celui qui descend un carton.\n' +
        'UN HOMME : Voilà. Et on commence par les meubles, tant que tout le monde est frais.',
      items: [
        {
          q: 'Quelle est la difficulté prévue ?',
          opts: [
            'L’escalier est trop étroit pour se croiser',
            'Il manque des volontaires',
            'Le camion arrive trop tard',
            'Les meubles sont trop lourds',
          ],
          correct: 0,
          why: 'Il écarte le portage : ce qui pose problème est l’escalier, où l’on ne peut pas se croiser.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 15 · les applications de livraison',
      playCount: 1,
      readWindowS: 18,
      durationS: 36,
      text:
        'UNE CHRONIQUEUSE : Un restaurateur sur deux dit y perdre de l’argent, et presque aucun n’arrête. ' +
        'La commission tourne autour de trente pour cent, ce qui est énorme sur une marge de restaurant.\n' +
        'UN RESTAURATEUR : Tout le monde le sait. Mais le client qui ne vous trouve pas sur l’application ' +
        'ne se dit pas qu’il va vous téléphoner. Il se dit que vous avez fermé.\n' +
        'UNE CHRONIQUEUSE : Donc vous payez pour exister.\n' +
        'UN RESTAURATEUR : Nous payons pour rester visibles. Ce n’est pas la même dépense.',
      items: [
        {
          q: 'Pourquoi les restaurateurs restent-ils sur ces applications ?',
          opts: [
            'Pour rester visibles auprès des clients',
            'Parce que la commission est faible',
            'Parce que la loi les y oblige',
            'Parce qu’ils y gagnent de l’argent',
          ],
          correct: 0,
          why: 'Il dit payer pour rester visible : absent de l’application, le restaurant passe pour fermé.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 16 · un désaccord réglé',
      playCount: 1,
      readWindowS: 18,
      durationS: 36,
      text:
        'UN HOMME : Pendant deux ans, on ne s’est pas parlé. Une histoire de haie, quarante centimètres.\n' +
        'UNE FEMME : Et qui a fait le premier pas ?\n' +
        'UN HOMME : Personne, en réalité. Sa fille est tombée de vélo devant chez moi ' +
        'et je l’ai ramenée. On a parlé de la fille, pas de la haie. ' +
        'La haie, on l’a taillée trois semaines plus tard, un samedi, sans en discuter.\n' +
        'UNE FEMME : Vous ne l’avez donc jamais réglée.\n' +
        'UN HOMME : Nous l’avons réglée. Nous ne l’avons pas discutée. Ce n’est pas pareil.',
      items: [
        {
          q: 'Comment le désaccord a-t-il pris fin ?',
          opts: [
            'Un événement extérieur les a remis en contact',
            'L’un des deux s’est excusé',
            'La haie a été arrachée',
            'Un médiateur est intervenu',
          ],
          correct: 0,
          why: 'Ni l’un ni l’autre n’a fait le premier pas : c’est la chute de la fille qui les remet en contact.',
          band: 'b1',
        },
      ],
    },
  ],
};
