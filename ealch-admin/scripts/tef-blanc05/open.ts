// TEF Canada blanc-05 — the open tasks: EE A and B, EO A and B.
//
// Four tasks, four marks, all to full human review, and the only tasks a grader
// model ever sees: the rubric and the model answer ARE the marking instrument.
//
// EO Section A carries a recorded interlocutor. Every answer must be reachable
// from this task's own model answer, or its fact is unobtainable however well a
// candidate performs — checked by ../tef/paper-rules.ts.
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
    '« Un feu de conteneurs maîtrisé en pleine nuit »\n\n' +
    'Dans la nuit de mardi à mercredi, trois conteneurs à ordures ont pris feu au pied d’un immeuble ' +
    'de la rue des Écoles, à Sarlanges. Les pompiers sont intervenus vers deux heures. Aucun blessé ' +
    'n’est à déplorer.\n\n' +
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
          'La suite se rattache au titre et au début donnés : même immeuble, même nuit, mêmes conteneurs.',
          'Rien ne contredit le début (aucun blessé, intervention vers deux heures).',
        ],
      },
      {
        key: 'apport',
        label: 'Apport d’informations',
        maxPoints: 5,
        descriptors: [
          'Des informations nouvelles sont apportées : origine, dégâts, évacuation, enquête, suites.',
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
    'Le feu se serait déclaré dans le premier conteneur avant de se propager aux deux autres, selon les ' +
    'premières constatations des pompiers. Une dizaine d’habitants du premier étage ont été réveillés ' +
    'par la fumée et sont descendus dans la cour, sans que l’immeuble soit évacué. L’intervention a ' +
    'duré une quarantaine de minutes. La façade est noircie sur deux étages et deux fenêtres ont éclaté ' +
    'sous l’effet de la chaleur. Le bailleur a fait poser des panneaux provisoires dès le matin. ' +
    'Une enquête a été ouverte pour déterminer l’origine du départ de feu ; les conteneurs, ' +
    'habituellement rangés dans un local fermé, avaient été laissés sur le trottoir la veille au soir.',
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
    'Une note interne annonce l’installation d’un badge d’accès enregistrant les heures d’entrée et de ' +
    'sortie de chaque salarié. La direction indique que le dispositif vise uniquement la sécurité des ' +
    'locaux. Plusieurs collègues craignent un contrôle des horaires déguisé.\n\n' +
    'Vous écrivez au comité social et économique. Rédigez votre lettre en 200 mots au moins : exposez ' +
    'les faits, défendez votre position, et répondez à l’argument selon lequel un badge d’accès relève ' +
    'de la seule sécurité des locaux.',
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
          'L’argument adverse (« le badge relève de la seule sécurité des locaux ») est énoncé sérieusement, sans caricature.',
          'Il reçoit une réponse : finalité déclarée, données enregistrées, durée de conservation, garanties demandées.',
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
    'Je souhaite appeler votre attention sur la note du 12 courant annonçant l’installation d’un badge ' +
    'd’accès enregistrant les heures d’entrée et de sortie de chaque salarié.\n\n' +
    'Ma position n’est pas de refuser le dispositif. Elle est de demander que sa finalité soit écrite, ' +
    'et que ce qui n’en relève pas soit exclu. Deux points le justifient. D’abord, la note ne dit ni ' +
    'combien de temps les enregistrements sont conservés, ni qui y accède. Ensuite, elle ne dit pas si ' +
    'ces données pourront être versées à un dossier individuel, ce qui n’est pas une question ' +
    'théorique : un relevé d’heures existe, ou il n’existe pas.\n\n' +
    'On objectera qu’un badge d’accès relève de la seule sécurité des locaux, et c’est exact quant à sa ' +
    'fonction première. Mais un dispositif se juge à ce qu’il rend possible autant qu’à ce qu’il vise. ' +
    'Bien que l’intention affichée soit la sécurité, le même enregistrement permet, sans aucune ' +
    'modification technique, de reconstituer les horaires de chacun. C’est cette possibilité, non ' +
    'l’intention, qu’il convient d’encadrer.\n\n' +
    'Je demande donc que la note précise la durée de conservation, la liste des destinataires, et ' +
    'l’interdiction expresse d’un usage disciplinaire des relevés.\n\n' +
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
    'STAGE DE PHOTOGRAPHIE · vacances de printemps\n\n' +
    'Maison des arts de Dourvin. Cinq demi-journées, pour adultes et grands adolescents.\n' +
    // « Tous niveaux » was here and already ANSWERED this task's own `niveau`
    // turn, so a candidate who read the advert had no reason to ask and the
    // coverage criterion punished them for reading it well.
    'Appareil personnel souhaité. Places limitées, inscription à l’accueil.\n\n' +
    'Ce stage vous intéresse. Posez à votre interlocuteur toutes les questions nécessaires pour savoir ' +
    's’il vous convient.',
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
          'Les informations utiles sont demandées : places, dates, horaires, prix, matériel, niveau, groupe, inscription, annulation.',
          'Une information non demandée est une tâche incomplète, pas une faute de langue.',
        ],
      },
      {
        key: 'questions',
        label: 'Formulation des questions',
        maxPoints: 5,
        descriptors: [
          'Questions correctes et variées : intonation, est-ce que, inversion.',
          'Registre adapté à un échange avec un service d’accueil.',
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
    'Bonjour, je vous appelle au sujet du stage de photographie des vacances de printemps. ' +
    'Est-ce qu’il reste des places ? À quelles dates a-t-il lieu exactement ? ' +
    'Les demi-journées sont le matin ou l’après-midi, et à quelle heure ? ' +
    'Combien coûte le stage, et le tarif est-il le même pour tout le monde ? ' +
    'Vous écrivez « appareil personnel souhaité » : est-ce qu’on peut venir sans, ou est-ce que vous ' +
    'en prêtez ? Quel niveau faut-il avoir, est-ce que c’est ouvert aux débutants complets ? ' +
    'On est combien dans le groupe ? Comment est-ce que je m’inscris, et jusqu’à quand ? ' +
    'Et si je dois annuler, est-ce que vous remboursez ?',
  interlocutor: {
    opening: {
      id: 'open',
      text: 'Maison des arts de Dourvin, bonjour. Vous appelez pour le stage de photographie ? Je vous écoute.',
      covers: '',
      cues: [],
    },
    answers: [
      {
        id: 'places',
        text: 'Il reste quatre places. Le groupe est limité à dix, et nous en sommes à six inscrits.',
        covers: 'les places restantes',
        cues: ['reste des places', 'reste de la place', 'places disponibles', 'complet', 'encore de la place'],
      },
      {
        id: 'dates',
        text: 'Le stage a lieu du lundi 14 au vendredi 18 avril, une demi-journée par jour.',
        covers: 'les dates du stage',
        cues: ['quelles dates', 'quand', 'commence', 'a lieu', 'debut'],
      },
      {
        id: 'horaire',
        text: 'C’est l’après-midi, de quatorze heures à dix-sept heures. Il n’y a pas de groupe le matin cette année.',
        covers: 'l’horaire des séances',
        cues: ['quelle heure', 'horaire', 'horaires', 'matin', 'apres-midi'],
      },
      {
        id: 'prix',
        text: 'Cent vingt euros les cinq demi-journées, ou quatre-vingt-dix euros pour les moins de vingt-cinq ans.',
        covers: 'le prix',
        cues: ['combien coute', 'quel prix', 'le prix', 'tarif', 'coute combien'],
      },
      {
        id: 'materiel',
        text: 'Nous prêtons cinq appareils, réservés à ceux qui n’en ont pas. Si vous avez le vôtre, venez avec.',
        covers: 'le matériel et le prêt d’appareils',
        cues: ['materiel', 'appareil', 'apporter', 'pretez', 'prete', 'sans appareil'],
      },
      {
        id: 'niveau',
        text: 'Aucun niveau demandé. La moitié du groupe n’a jamais utilisé autre chose qu’un téléphone.',
        covers: 'le niveau requis',
        cues: ['niveau', 'debutant', 'debutants', 'experience', 'prerequis'],
      },
      {
        id: 'groupe',
        text: 'Dix personnes au maximum, avec une photographe et une assistante sur les sorties.',
        covers: 'la taille du groupe',
        cues: ['combien de personnes', 'groupe', 'participants', 'combien on est'],
      },
      {
        id: 'inscription',
        text: 'Vous passez à l’accueil avec une pièce d’identité, jusqu’au 4 avril. Après, nous ne pouvons plus ajouter personne.',
        covers: 'comment et jusqu’à quand s’inscrire',
        cues: ['inscrire', 'inscription', 'comment faire', 'demarche', 'jusqu'],
      },
      {
        id: 'annulation',
        text: 'Annulation remboursée jusqu’à huit jours avant. Ensuite, nous gardons trente euros de frais.',
        covers: 'les conditions d’annulation',
        cues: ['annuler', 'rembours', 'si je ne peux pas venir', 'annulation'],
      },
      {
        id: 'sortie',
        text: 'La quatrième séance se passe dehors, dans le vieux village. Prévoyez de bonnes chaussures et un vêtement de pluie.',
        covers: 'la sortie extérieure et ce qu’elle demande',
        cues: ['sortie', 'dehors', 'exterieur', 'se passe ou', 'lieu'],
      },
    ],
    catchAll: {
      id: 'catch',
      text: 'Ah, ça, je ne l’ai pas sous les yeux. Je peux demander à la photographe et vous rappeler.',
      covers: '',
      cues: [],
    },
    closing: {
      id: 'close',
      text: 'Très bien. Je vous laisse réfléchir, et n’hésitez pas à repasser à l’accueil. Bonne journée.',
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
    'PÉTANQUE DU VILLAGE · l’équipe cherche des joueurs\n\n' +
    'Rencontres le vendredi en fin d’après-midi, terrain de la place. Aucun niveau requis.\n' +
    'Boules prêtées aux nouveaux venus. Deux tournois amicaux par an, sans obligation d’y jouer.\n' +
    'Adhésion de dix euros pour l’année.\n\n' +
    'Un ou une de vos proches hésite. Présentez-lui l’activité et convainquez-le ou convainquez-la ' +
    'd’y participer. Donnez votre avis et appuyez-le sur des exemples.',
  timingS: 600,
  prepS: 120,
  responseSpec: { kind: 'audio', minDurationS: 120, maxDurationS: 420 },
  examinerNotes: [
    ...NOTES_OPEN,
    'ÉCHELLE D’OBJECTIONS attendue, du plus faible au plus fort : (1) « je n’ai jamais joué » — aucun ' +
    'niveau requis et les boules sont prêtées ; (2) « je ne veux pas m’engager » — les tournois sont ' +
    'sans obligation et l’adhésion est de dix euros ; (3) « je ne connais personne et j’aurai l’air de ' +
    'm’imposer » — c’est une équipe qui CHERCHE des joueurs, donc arriver n’est pas s’imposer, et le ' +
    'vendredi en fin d’après-midi est le moment le plus informel de la semaine. ' +
    'Un candidat qui ne traite que la première objection ne dépasse pas le milieu de l’échelle « adaptation ».',
  ],
  rubric: {
    criteria: [
      {
        key: 'presentation',
        label: 'Présentation de l’activité',
        maxPoints: 5,
        descriptors: [
          'Les informations du document sont transmises exactement : jour, lieu, niveau, boules prêtées, tournois, adhésion.',
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
          'L’échelle d’objections est parcourue au-delà de la première : niveau, engagement, puis crainte de s’imposer.',
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
    'Écoute, l’équipe de pétanque du village cherche des joueurs, et je pense vraiment que ça te ' +
    'plairait. C’est le vendredi en fin d’après-midi, sur le terrain de la place. ' +
    'Je sais ce que tu vas me dire d’abord : que tu n’as jamais joué. Aucun niveau n’est requis, et ' +
    'les boules sont prêtées aux nouveaux venus, donc tu n’as rien à acheter pour essayer. ' +
    'Ensuite, l’engagement. Tu n’aimes pas t’inscrire à des choses, je comprends. Il y a deux tournois ' +
    'par an et tu n’es pas obligé d’y jouer. L’adhésion, c’est dix euros pour l’année. Tu peux venir ' +
    'trois fois et arrêter, personne ne te dira rien. ' +
    'Et puis il y a ce qui te retient vraiment, je crois : l’idée d’arriver sans connaître personne et ' +
    'd’avoir l’air de t’imposer. Justement, c’est l’équipe qui cherche des joueurs. Tu ne t’imposes ' +
    'pas, tu réponds à une demande. Et le vendredi en fin d’après-midi, c’est le moment le plus ' +
    'détendu de la semaine : on joue, on discute, personne ne compte les points très sérieusement. ' +
    'Moi j’y suis allé en juin sans connaître un seul nom, et j’y retourne toutes les semaines depuis. ' +
    'Viens vendredi, une fois, et tu verras.',
};
