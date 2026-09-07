// TEF Canada blanc-04 — the open tasks: EE A and B, EO A and B.
//
// Four tasks, four marks, all to full human review, and the only tasks a grader
// model ever sees: the rubric and the model answer ARE the marking instrument.
//
// EO Section A carries a recorded interlocutor. Every answer in the bank must be
// reachable from this task's own model answer, or its fact is unobtainable
// however well a candidate performs — checked by ../tef/paper-rules.ts.
//
// No `targetItemIds` on any of these: the schema refuses them on an open task,
// which has no wrong answers to decompose.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, FORMAT_VERSION, VARIANT, NOTES_OPEN, taskId } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_OPEN,
};

/* ═══ EE Section A — Fait divers ══════════════════════════════════════════ */

export const EE_A: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b1',
  label: 'Section A',
  prompt:
    'SECTION A · 25 minutes\n\n' +
    '« Une association de quartier victime d’un piratage de son compte »\n\n' +
    'Lundi, les responsables d’une association de Roquelaure ont découvert que le compte de messagerie ' +
    'de la structure avait été utilisé pour envoyer des messages à tous ses adhérents. Aucune somme ' +
    'n’a été prélevée.\n\n' +
    'Vous êtes journaliste. Rédigez la suite de ce fait divers en 80 à 120 mots. ' +
    'Apportez des informations nouvelles : les circonstances, le déroulement et les suites. ' +
    'Ne recopiez pas le début et ne le résumez pas.',
  timingS: 1500,
  responseSpec: { kind: 'text', minWords: 80, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'pertinence',
        label: 'Pertinence',
        maxPoints: 5,
        descriptors: [
          'La suite se rattache au titre et au début donnés : même association, même compte, même semaine.',
          'Rien ne contredit le début (aucune somme n’a été prélevée).',
        ],
      },
      {
        key: 'apport',
        label: 'Apport d’informations',
        maxPoints: 5,
        descriptors: [
          'Des informations nouvelles sont apportées : origine, contenu des messages, réaction, suites.',
          'Le début n’est ni recopié ni résumé.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre journalistique',
        maxPoints: 5,
        descriptors: [
          'Troisième personne, pas de « je », pas d’opinion ni d’évaluation.',
          'Ce qui n’est pas établi est donné comme tel (conditionnel ou source citée).',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Temps du récit maîtrisés : passé composé pour les faits, imparfait pour les circonstances.',
          'Accords, ponctuation et connecteurs corrects ; la longueur demandée est respectée.',
        ],
      },
    ],
  },
  modelAnswer:
    'L’accès aurait été obtenu à partir d’un mot de passe réutilisé sur un autre service, selon les ' +
    'premières constatations du prestataire informatique de l’association. Les messages envoyés, une ' +
    'quarantaine au total, invitaient les adhérents à régler une cotisation sur un compte inconnu. ' +
    'Aucun virement n’a été enregistré : plusieurs destinataires ont signalé l’anomalie dès le matin, ' +
    'et la trésorière a fait suspendre la boîte avant midi. Une plainte a été déposée mardi. ' +
    'L’association, qui compte cent vingt adhérents, a prévenu chacun par téléphone plutôt que par ' +
    'courriel. Elle prévoit de mettre en place une double authentification et une adresse distincte ' +
    'pour les échanges financiers.',
};

/* ═══ EE Section B — Lettre argumentée ════════════════════════════════════ */

export const EE_B: ExamTask = {
  ...base,
  id: taskId('pe_essay', '001'),
  taskType: 'pe_essay',
  skill: 'PE',
  level: 'b2',
  label: 'Section B',
  prompt:
    'SECTION B · 35 minutes\n\n' +
    'Votre employeur souhaite ramener tout le personnel sur site cinq jours par semaine, en supprimant ' +
    'les deux jours de télétravail accordés depuis trois ans. La direction invoque la cohésion des ' +
    'équipes et la qualité des échanges informels.\n\n' +
    'Vous écrivez au comité social et économique. Rédigez votre lettre en 200 mots au moins : exposez ' +
    'les faits, défendez votre position, et répondez à l’argument selon lequel la présence sur site est ' +
    'nécessaire à la cohésion de l’équipe.',
  timingS: 2100,
  responseSpec: { kind: 'text', minWords: 200 },
  rubric: {
    criteria: [
      {
        key: 'position',
        label: 'Position et argumentation',
        maxPoints: 5,
        descriptors: [
          'Une position claire est tenue d’un bout à l’autre de la lettre.',
          'Au moins deux arguments distincts la soutiennent, chacun développé et non simplement affirmé.',
        ],
      },
      {
        key: 'contradiction',
        label: 'Prise en compte de l’objection',
        maxPoints: 5,
        descriptors: [
          'L’argument adverse (« la présence sur site est nécessaire à la cohésion ») est énoncé sérieusement, sans caricature.',
          'Il reçoit une réponse : jours communs, temps de trajet, qualité mesurée du travail, compromis proposé.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre et format',
        maxPoints: 5,
        descriptors: [
          'Formules d’appel et de politesse d’une lettre adressée à une instance ; vouvoiement constant.',
          'Ton ferme et courtois : ni familiarité, ni agressivité, ni supplication.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction et étendue de la langue',
        maxPoints: 5,
        descriptors: [
          'Syntaxe complexe maîtrisée : subordonnées, concession, hypothèse.',
          'Connecteurs argumentatifs variés et corrects ; longueur minimale respectée.',
        ],
      },
    ],
  },
  modelAnswer:
    'Madame, Monsieur,\n\n' +
    'Je me permets de vous saisir au sujet du projet de retour sur site cinq jours par semaine, qui ' +
    'supprimerait les deux jours de télétravail en vigueur depuis trois ans.\n\n' +
    'Je souhaite d’abord rappeler ce que ces trois années ont montré. Les délais de livraison de mon ' +
    'service n’ont pas été dégradés ; ils se sont légèrement améliorés. Par ailleurs, pour une partie ' +
    'du personnel, la suppression représente deux heures de trajet supplémentaires par jour, soit dix ' +
    'heures hebdomadaires qui ne bénéficient ni au salarié ni à l’entreprise.\n\n' +
    'On objectera que la présence sur site est nécessaire à la cohésion et aux échanges informels. ' +
    'Cet argument mérite d’être pris au sérieux : ces échanges existent, ils sont utiles, et le ' +
    'télétravail les raréfie. Mais il suppose que la cohésion tienne au nombre de jours, alors qu’elle ' +
    'tient bien davantage aux jours COMMUNS. Trois jours où toute l’équipe est présente valent mieux, ' +
    'de ce point de vue, que cinq jours où chacun arrive et repart à des heures différentes. Bien que ' +
    'la direction craigne un affaiblissement du collectif, c’est la synchronisation, non la durée, qui ' +
    'le produit.\n\n' +
    'Je propose donc le maintien de deux jours de télétravail, assorti de trois jours communs fixés à ' +
    'l’avance pour l’ensemble du service.\n\n' +
    'Je vous prie d’agréer, Madame, Monsieur, l’expression de ma considération distinguée.',
};

/* ═══ EO Section A — Obtenir de l’information ═════════════════════════════ */

export const EO_A: ExamTask = {
  ...base,
  id: taskId('po_interaction', '001'),
  taskType: 'po_interaction',
  skill: 'PO',
  level: 'b1',
  label: 'Section A',
  prompt:
    'SECTION A · 5 minutes\n\n' +
    'CRÈCHE MUNICIPALE · inscriptions pour la rentrée\n\n' +
    'Accueil des enfants de 3 mois à 3 ans, du lundi au vendredi.\n' +
    'Dossier à déposer au service petite enfance. Places attribuées en commission.\n' +
    'Renseignements à l’accueil de la mairie.\n\n' +
    'Cette crèche vous intéresse. Posez à votre interlocuteur toutes les questions nécessaires pour ' +
    'savoir si elle vous convient.',
  timingS: 300,
  prepS: 60,
  responseSpec: { kind: 'audio', minDurationS: 60, maxDurationS: 240 },
  rubric: {
    criteria: [
      {
        key: 'couverture',
        label: 'Couverture du document',
        maxPoints: 5,
        descriptors: [
          'Les informations utiles sont demandées : places, horaires, tarif, dossier, commission, délai, repas, adaptation.',
          'Une information non demandée est une tâche incomplète, pas une faute de langue.',
        ],
      },
      {
        key: 'questions',
        label: 'Formulation des questions',
        maxPoints: 5,
        descriptors: [
          'Questions correctes et variées : intonation, est-ce que, inversion.',
          'Registre adapté à un échange avec un service municipal.',
        ],
      },
      {
        key: 'interaction',
        label: 'Interaction et relance',
        maxPoints: 5,
        descriptors: [
          'Réagit aux réponses au lieu de dérouler une liste préparée.',
          'Relance, demande une précision, reformule ce qui n’a pas été compris.',
        ],
      },
      {
        key: 'fluidite',
        label: 'Fluidité et étendue',
        maxPoints: 5,
        descriptors: [
          'Débit régulier ; les hésitations ne gênent pas la compréhension.',
          'Lexique suffisant pour poser la question sans la contourner.',
        ],
      },
    ],
  },
  modelAnswer:
    'Bonjour, je vous appelle au sujet des inscriptions à la crèche municipale. Est-ce qu’il reste des ' +
    'places pour la rentrée ? Quels sont les horaires d’ouverture, le matin et le soir ? ' +
    'Combien coûte la garde, et comment le tarif est-il calculé ? ' +
    'Quelles pièces faut-il pour le dossier, et jusqu’à quand peut-on le déposer ? ' +
    'La commission se réunit quand, et comment sommes-nous prévenus de la réponse ? ' +
    'Est-ce que les repas sont fournis, ou faut-il apporter quelque chose ? ' +
    'Comment se passe l’adaptation les premiers jours ? ' +
    'Et si mon enfant est malade dans la journée, qu’est-ce que vous faites ? ' +
    'Enfin, si nous n’avons pas de place, est-ce qu’il y a une liste d’attente ?',
  interlocutor: {
    opening: {
      id: 'open',
      text: 'Service petite enfance de Roquelaure, bonjour. Vous appelez pour une inscription en crèche ? Je vous écoute.',
      covers: '',
      cues: [],
    },
    answers: [
      {
        id: 'places',
        text: 'Il reste six places pour septembre, réparties sur les trois sections. C’est peu : nous recevons une soixantaine de demandes.',
        covers: 'les places disponibles',
        cues: ['reste des places', 'reste de la place', 'places disponibles', 'complet', 'encore de la place'],
      },
      {
        id: 'horaires',
        text: 'Nous ouvrons de sept heures trente à dix-huit heures trente, du lundi au vendredi. Il faut arriver avant neuf heures trente.',
        covers: 'les horaires d’ouverture',
        cues: ['horaire', 'horaires', 'quelle heure', 'ouvre', 'ferme', 'quels jours'],
      },
      {
        id: 'tarif',
        text: 'Le tarif dépend de vos revenus et du nombre d’enfants. Cela va de quatre-vingts à quatre cent vingt euros par mois.',
        covers: 'le tarif et son calcul',
        cues: ['combien coute', 'quel prix', 'le prix', 'tarif', 'coute combien', 'calcule'],
      },
      {
        id: 'dossier',
        text: 'Le dossier demande un justificatif de domicile, un avis d’imposition, le carnet de santé et une attestation d’activité des deux parents.',
        covers: 'les pièces du dossier',
        cues: ['dossier', 'pieces', 'documents', 'papiers', 'justificatif', 'faut-il fournir'],
      },
      {
        id: 'depot',
        text: 'Les dossiers se déposent jusqu’au 31 mars. Après cette date, ils basculent sur la commission suivante, en juin.',
        covers: 'la date limite de dépôt',
        cues: ['jusqu', 'date limite', 'quand deposer', 'delai', 'avant quand'],
      },
      {
        id: 'commission',
        text: 'La commission se réunit mi-avril. Vous recevez une réponse écrite dans les quinze jours, favorable ou non.',
        covers: 'la commission et la réponse',
        cues: ['commission', 'reponse', 'prevenus', 'resultat', 'quand saurai'],
      },
      {
        id: 'repas',
        text: 'Les repas et les couches sont fournis et compris dans le tarif. Vous apportez seulement un doudou et des vêtements de rechange.',
        covers: 'les repas et le matériel fournis',
        cues: ['repas', 'manger', 'couches', 'apporter', 'fourni', 'compris'],
      },
      {
        id: 'adaptation',
        text: 'L’adaptation dure une semaine : une heure le premier jour, une matinée le troisième, une journée entière le vendredi.',
        covers: 'la période d’adaptation',
        cues: ['adaptation', 'premiers jours', 'premier jour', 'debut', 'habituer'],
      },
      {
        id: 'attente',
        text: 'Oui, une liste d’attente est tenue à jour. Environ un enfant sur trois y entre en cours d’année, quand une famille déménage.',
        covers: 'la liste d’attente',
        cues: ['liste d attente', 'attente', 'si pas de place', 'refus', 'sinon'],
      },
      {
        id: 'urgence',
        text: 'En cas de maladie, nous appelons le parent référent. Un enfant fiévreux ne peut pas rester : c’est la règle, pour les autres.',
        covers: 'la conduite en cas de maladie',
        cues: ['malade', 'maladie', 'fievre', 'urgence', 'si mon enfant est'],
      },
    ],
    catchAll: {
      id: 'catch',
      text: 'Ah, ça, je ne l’ai pas sous les yeux. Je peux vérifier et vous rappeler dans la journée si vous voulez.',
      covers: '',
      cues: [],
    },
    closing: {
      id: 'close',
      text: 'Très bien. Je vous laisse préparer le dossier, et n’hésitez pas à repasser. Bonne journée.',
      covers: '',
      cues: [],
    },
  },
};

/* ═══ EO Section B — Convaincre ═══════════════════════════════════════════ */

export const EO_B: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  level: 'b2',
  label: 'Section B',
  prompt:
    'SECTION B · 10 minutes\n\n' +
    'CHORALE DE QUARTIER · recrutement pour le concert de fin d’année\n\n' +
    'Répétition le mardi soir, une heure trente. Aucune connaissance du solfège demandée.\n' +
    'Pupitres ouverts à toutes les voix. Concert unique en décembre, dans l’église du quartier.\n' +
    'Adhésion de quinze euros pour la saison.\n\n' +
    'Un ou une de vos proches hésite. Présentez-lui l’activité et convainquez-le ou convainquez-la ' +
    'd’y participer. Donnez votre avis et appuyez-le sur des exemples.',
  timingS: 600,
  prepS: 120,
  responseSpec: { kind: 'audio', minDurationS: 120, maxDurationS: 420 },
  examinerNotes: [
    ...NOTES_OPEN,
    'ÉCHELLE D’OBJECTIONS attendue, du plus faible au plus fort : (1) « je chante faux » — aucun solfège ' +
    'demandé et l’on chante en pupitre, jamais seul ; (2) « je n’ai pas le temps » — une heure trente ' +
    'par semaine et un seul concert, pas une tournée ; (3) « je ne veux pas monter sur scène devant des ' +
    'gens que je connais » — c’est précisément un concert de quartier, on y chante à trente et le public ' +
    'vient pour le groupe, pas pour repérer une voix. ' +
    'Un candidat qui ne traite que la première objection ne dépasse pas le milieu de l’échelle « adaptation ».',
  ],
  rubric: {
    criteria: [
      {
        key: 'presentation',
        label: 'Présentation de l’activité',
        maxPoints: 5,
        descriptors: [
          'Les informations du document sont transmises exactement : jour, durée, solfège, pupitres, concert, adhésion.',
          'Rien n’est inventé ni promis au-delà de ce que le document annonce.',
        ],
      },
      {
        key: 'persuasion',
        label: 'Force de conviction',
        maxPoints: 5,
        descriptors: [
          'Un avis personnel est exprimé et soutenu par des exemples concrets.',
          'Les bénéfices sont rattachés à l’interlocuteur, non énoncés dans l’abstrait.',
        ],
      },
      {
        key: 'adaptation',
        label: 'Adaptation aux objections',
        maxPoints: 5,
        descriptors: [
          'Les réticences sont anticipées et traitées, pas ignorées.',
          'L’échelle d’objections est parcourue au-delà de la première : niveau, temps, puis appréhension de la scène.',
        ],
      },
      {
        key: 'langue',
        label: 'Fluidité et correction',
        maxPoints: 5,
        descriptors: [
          'Discours suivi, articulé par des connecteurs ; peu d’hésitations gênantes.',
          'Lexique de la persuasion et de la concession employé correctement.',
        ],
      },
    ],
  },
  modelAnswer:
    'Je voudrais te parler de la chorale du quartier, parce que je crois que c’est exactement ce qu’il ' +
    'te faut cette année. Répétition le mardi soir, une heure trente, et un concert en décembre. ' +
    'Je t’entends déjà me dire que tu chantes faux. Le solfège n’est pas demandé, personne ne lit une ' +
    'partition, et surtout on chante en pupitre : tu n’es jamais seul, ta voix se pose sur celle des ' +
    'autres. ' +
    'Ensuite, le temps. Une heure trente par semaine, ce n’est pas un engagement écrasant, et il n’y a ' +
    'qu’un seul concert, pas une tournée. Tu sais à l’avance ce que tu donnes. ' +
    'Et puis il y a ce que tu ne dis pas, je crois : l’idée de monter sur scène devant des voisins. ' +
    'Justement, c’est un concert de quartier. Vous êtes une trentaine sur scène, le public vient pour ' +
    'le groupe, personne ne cherche à repérer une voix en particulier. ' +
    'Moi j’y suis allé l’an dernier en me disant que j’arrêterais après trois séances, et j’ai fait la ' +
    'saison entière. Quinze euros pour l’année, c’est le prix d’un billet de cinéma. Viens mardi, ' +
    'écoute une répétition, et décide après.',
};
