// TCF Canada blanc-05 — Expression écrite and Expression orale.
//
// Three tâches each, shapes fixed by STANDARD-tcf §5 and §6 rather than chosen:
// a message, then an account WITH a request, then a comparison of two written
// viewpoints; a guided interview, then an interaction driven by a document,
// then a defended position.
//
// The SITUATIONS come from PLAN-tcf-blanc-05.md; the SHAPES do not, and where
// they pull against each other the shape wins. TCF-231 reads as "an essay on
// translation and what resists it", which is one voice; tâche 3 is a comparison
// of two viewpoints, so it becomes the two positions that essay sets against
// each other.
//
// ── One clock for EE, not three ────────────────────────────────────────────
//
// §7: the candidate manages the split across the three writing tâches, so the
// runner shows ONE section clock. The per-task timingS is a budget that sums to
// the section, not three countdowns.
//
// ── NO targetItemIds ───────────────────────────────────────────────────────
//
// An open task has no atoms to miss: its outcome is a band, not a set of wrong
// answers. validateExamTask rejects the field here, and rightly.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_OPEN, taskId } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_OPEN,
};

/* ═══ Expression écrite ═══════════════════════════════════════════════════ */

export const EE_T1: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'a2',
  label: 'Expression écrite · Tâche 1',
  prompt:
    'TÂCHE 1 · message (60 à 120 mots)\n\n' +
    'Vous aviez rendez-vous hier à quinze heures avec une personne qui vous accorde ' +
    'de son temps pour vous conseiller. Vous ne vous êtes pas présenté et vous n’avez pas prévenu : ' +
    'vous vous étiez trompé de jour.\n\n' +
    'Écrivez-lui un message. Excusez-vous, dites ce qui s’est passé sans vous étendre, ' +
    'reconnaissez ce que cela lui a coûté, et proposez une nouvelle date.',
  timingS: 900,
  responseSpec: { kind: 'text', minWords: 60, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'consignes',
        label: 'Respect de la consigne',
        maxPoints: 5,
        descriptors: [
          'Les quatre éléments sont présents : l’excuse, la raison, la reconnaissance du tort, la nouvelle date.',
          'La proposition est concrète : au moins un jour et une heure, ou deux possibilités.',
          'Le temps perdu par l’autre est mentionné. Un message qui ne parle que de soi ne répond pas à la consigne.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre',
        maxPoints: 5,
        descriptors: [
          'Ton respectueux envers quelqu’un qui rendait service, sans familiarité.',
          'L’excuse est brève et nette. Une justification longue déplace la faute sur les circonstances.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Passé composé pour ce qui s’est passé, conditionnel pour la proposition.',
          'Les erreurs qui restent ne gênent pas la compréhension.',
        ],
      },
    ],
  },
  modelAnswer:
    'Bonjour Madame Roussel,\n\n' +
    'Je vous présente mes excuses pour hier. J’avais noté notre rendez-vous le mercredi ' +
    'et je me suis rendu compte de mon erreur seulement ce matin.\n\n' +
    'Je sais que vous aviez bloqué une heure pour moi, et que cette heure est perdue. ' +
    'C’est d’autant plus gênant que vous m’aviez proposé ce créneau alors que votre semaine était chargée.\n\n' +
    'Si vous acceptez de me revoir, je suis disponible mardi prochain à quinze heures ' +
    'ou jeudi dans la matinée. Je m’adapte à ce qui vous arrange, ' +
    'et je vous confirmerai la veille cette fois.\n\n' +
    'Merci de votre compréhension.\n\n' +
    'Cordialement,\nAdam Ferreira',
};

export const EE_T2: ExamTask = {
  ...base,
  id: taskId('pe_short', '002'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b1',
  label: 'Expression écrite · Tâche 2',
  prompt:
    'TÂCHE 2 · courriel à un service client (120 à 150 mots)\n\n' +
    'Vous commandez chaque mois des produits livrés à domicile. ' +
    'Depuis trois mois, la livraison est déposée à une adresse voisine, la même chaque fois. ' +
    'Vous l’avez signalé deux fois par téléphone. Le mois dernier, le colis a disparu.\n\n' +
    'Écrivez au service client. RACONTEZ ce qui s’est passé et ce que vous avez déjà fait, ' +
    'puis DITES CE QUE VOUS DEMANDEZ et à quelle condition vous resterez client.',
  timingS: 1200,
  responseSpec: { kind: 'text', minWords: 120, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'deuxParties',
        label: 'Exposé des faits ET demande',
        maxPoints: 5,
        descriptors: [
          'Le texte fait les DEUX choses : il retrace la répétition et il formule une demande précise.',
          'La répétition apparaît comme telle : trois mois, deux signalements, une disparition.',
          'Un courriel qui se contente de protester ne répond pas à la consigne.',
        ],
      },
      {
        key: 'fermete',
        label: 'Fermeté sans agressivité',
        maxPoints: 5,
        descriptors: [
          'La condition posée est claire et proportionnée, non une menace vague.',
          'Le ton reste celui d’un client qui veut une solution, pas d’un client qui veut avoir raison.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Les temps du passé sont tenus sur trois épisodes successifs.',
          'Registre écrit formel du début à la fin, formule de clôture adaptée.',
        ],
      },
    ],
  },
  modelAnswer:
    'Madame, Monsieur,\n\n' +
    'Je vous écris au sujet de mes trois dernières livraisons, commande numéro 44-7182.\n\n' +
    'Depuis le mois de mars, mes colis sont déposés au 14 de la rue des Sources ' +
    'alors que mon adresse est le 40. J’ai signalé l’erreur par téléphone le 12 mars ' +
    'et le 9 avril, et l’on m’a répondu les deux fois que l’adresse serait corrigée. ' +
    'Elle ne l’a pas été. Le colis du 8 mai n’a jamais été retrouvé, ' +
    'ni chez le voisin ni chez moi.\n\n' +
    'Je vous demande deux choses : le remboursement de la commande de mai, ' +
    'et la correction effective de l’adresse dans votre système, ' +
    'confirmée par écrit avant la prochaine livraison.\n\n' +
    'Sans cette confirmation, je suspendrai mon abonnement. ' +
    'Je préférerais ne pas en arriver là : le service m’a convenu pendant deux ans.\n\n' +
    'Je vous remercie de votre réponse.\n\n' +
    'Cordialement,\nNoor Belkacem',
};

export const EE_T3: ExamTask = {
  ...base,
  id: taskId('pe_short', '003'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b2',
  label: 'Expression écrite · Tâche 3',
  prompt:
    'TÂCHE 3 · comparaison de deux points de vue (120 à 180 mots)\n\n' +
    'Deux traducteurs ont exposé leur position sur ce qui résiste à la traduction.\n\n' +
    'TEXTE A · « On dit qu’un texte perd à la traduction. Il perd, et il gagne quelque chose ' +
    'dont on ne parle jamais : une lecture. Traduire oblige à trancher là où l’original ' +
    'laissait deux sens ouverts, et ce choix est une interprétation qu’aucun lecteur ' +
    'de la langue d’origine n’est forcé de faire. La traduction est le seul commentaire ' +
    'qui ne s’ajoute pas au texte : il le remplace. »\n\n' +
    'TEXTE B · « Cette élégance masque une perte réelle. Ce qui ne passe pas n’est pas ' +
    'le sens, qui passe presque toujours, mais le régime de la langue : ce qui y est ' +
    'courant et ce qui y est rare. Un mot ordinaire rendu par un mot ordinaire ' +
    'peut trahir complètement, si le premier était attendu et le second surprenant. ' +
    'Aucune interprétation ne compense cela, parce que cela ne se décide pas mot à mot. »\n\n' +
    'Comparez les deux points de vue, puis prenez position.',
  timingS: 1500,
  responseSpec: { kind: 'text', minWords: 120, maxWords: 180 },
  rubric: {
    criteria: [
      {
        key: 'comparaison',
        label: 'Comparaison réelle',
        maxPoints: 5,
        descriptors: [
          'Les deux textes sont restitués fidèlement, y compris celui que le candidat rejette.',
          'Le désaccord est situé : il porte sur CE QUI se perd, non sur le fait qu’il se perde quelque chose.',
          'Un texte qui résume A puis résume B sans les mettre en rapport ne compare pas.',
        ],
      },
      {
        key: 'position',
        label: 'Prise de position',
        maxPoints: 5,
        descriptors: [
          'Une position est prise, argumentée par autre chose que la préférence.',
          'La meilleure objection adverse est traitée plutôt qu’ignorée.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Connecteurs d’opposition et de concession employés correctement.',
          'Registre écrit soutenu ; les erreurs ne gênent pas la lecture.',
        ],
      },
    ],
  },
  modelAnswer:
    'Les deux textes admettent qu’une traduction transforme, et ils divergent sur ce qui est transformé.\n\n' +
    'Le texte A déplace la perte vers un gain : trancher entre deux sens produit une lecture ' +
    'que l’original n’imposait à personne. Le texte B répond que le sens n’est pas ' +
    'le vrai enjeu, puisqu’il passe presque toujours, et que ce qui se perd est le régime ' +
    'de la langue, c’est-à-dire l’effet d’un mot attendu ou surprenant à sa place.\n\n' +
    'L’objection de B est la plus forte des deux, et elle vise juste : ' +
    'un traducteur peut être exact mot à mot et faux de bout en bout. ' +
    'Elle a pourtant une limite. Ce régime se rend, mal et partiellement, ' +
    'par d’autres moyens que le lexique, et les traducteurs qui y parviennent ' +
    'sont précisément ceux que B admire.\n\n' +
    'Je retiens donc B pour le diagnostic et A pour la conclusion. ' +
    'Ce qui résiste ne se traduit pas mot à mot ; ' +
    'cela ne veut pas dire que rien ne le porte.',
};

/* ═══ Expression orale ════════════════════════════════════════════════════ */
//
// Tâches 1 and 3 are MONOLOGUES on this format. The examiner's questions in
// tâche 1 are a ladder the candidate answers, not an exchange the app plays;
// only tâche 2, which the app really does play, is po_interaction.

export const EO_T1: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  level: 'a2',
  label: 'Expression orale · Tâche 1',
  prompt:
    'TÂCHE 1 · entretien dirigé · 2 minutes · sans préparation\n\n' +
    'L’examinateur vous pose des questions sur un métier que vous aimeriez apprendre. ' +
    'Répondez naturellement, et développez vos réponses : une phrase seule ne suffit pas.\n\n' +
    '· Y a-t-il un métier que vous aimeriez apprendre ?\n' +
    '· Qu’est-ce qui vous attire dans ce métier ?\n' +
    '· Qu’est-ce qu’il faudrait faire pour y arriver ?\n' +
    '· Qu’est-ce qui vous en empêche aujourd’hui ?',
  timingS: 120,
  responseSpec: { kind: 'audio', minDurationS: 60, maxDurationS: 150 },
  rubric: {
    criteria: [
      {
        key: 'developpement',
        label: 'Développement des réponses',
        maxPoints: 5,
        descriptors: [
          'Chaque question reçoit plus qu’une phrase : un exemple, une raison, une précision.',
          'La dernière question appelle un obstacle concret, non une formule générale.',
        ],
      },
      {
        key: 'aisance',
        label: 'Aisance',
        maxPoints: 5,
        descriptors: [
          'Le débit reste régulier ; les hésitations ne bloquent pas le tour de parole.',
          'Le candidat se reprend sans s’arrêter quand il se trompe.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Conditionnel et futur employés correctement pour un projet.',
          'Le lexique du travail et de la formation est disponible.',
        ],
      },
    ],
  },
  modelAnswer:
    'Oui, j’aimerais apprendre la menuiserie. Ce n’est pas du tout mon métier : ' +
    'je travaille dans un bureau depuis douze ans.\n\n' +
    'Ce qui m’attire, c’est de voir ce que j’ai fait à la fin de la journée. ' +
    'Dans mon travail, je prépare des dossiers que quelqu’un d’autre utilise, ' +
    'et parfois je ne sais même pas ce qu’ils sont devenus. ' +
    'Une étagère, on la voit, elle tient ou elle ne tient pas.\n\n' +
    'Pour y arriver, il faudrait une formation d’un an, à mi-temps, ' +
    'dans un centre qui se trouve à quarante kilomètres. ' +
    'J’ai déjà téléphoné pour connaître les conditions et il reste des places.\n\n' +
    'Ce qui m’en empêche, c’est l’argent, très simplement. ' +
    'La formation coûte six mille euros et je perdrais la moitié de mon salaire pendant un an. ' +
    'Avec deux enfants, ce n’est pas possible cette année. ' +
    'Je ne dis pas que je renonce, je dis que j’attends.',
};

export const EO_T2: ExamTask = {
  ...base,
  id: taskId('po_interaction', '001'),
  taskType: 'po_interaction',
  skill: 'PO',
  level: 'b1',
  label: 'Expression orale · Tâche 2',
  prompt:
    'TÂCHE 2 · exercice en interaction · 2 minutes de préparation, puis environ 3 minutes 30\n\n' +
    'FACTURE REÇUE · désaccord\n\n' +
    'Une entreprise a repeint deux pièces chez vous. Le devis signé indiquait 1 800 euros. ' +
    'La facture reçue s’élève à 2 340 euros. Elle mentionne :\n' +
    '« Supplément préparation des murs : 340 € · Déplacement supplémentaire : 120 € · ' +
    'Révision tarifaire annuelle : 80 € ».\n' +
    'Aucun de ces postes ne figurait au devis et personne ne vous a prévenu.\n\n' +
    'Vous téléphonez à l’entreprise. Posez les questions nécessaires ' +
    'et cherchez ce qui peut être obtenu.',
  // Prep is clocked SEPARATELY from the exchange (STANDARD-tcf §7). A runner
  // that folds the two into one countdown gives the candidate a shorter
  // interaction the better they prepare.
  prepS: 120,
  timingS: 330,
  responseSpec: { kind: 'audio', minDurationS: 120, maxDurationS: 240 },
  interlocutor: {
    opening: {
      id: 'open',
      text: 'Entreprise Vaubourg Peinture, bonjour. Vous appelez pour quel dossier ?',
      covers: 'ouverture',
      cues: [],
    },
    catchAll: {
      id: 'catch',
      text: 'Cette information est chez le chef de chantier. Je lui transmets votre question et il vous rappelle demain.',
      covers: 'information non détenue',
      cues: [],
    },
    closing: {
      id: 'close',
      text: 'C’est noté. Vous recevrez la facture corrigée par courriel sous deux jours. Bonne journée.',
      covers: 'clôture',
      cues: [],
    },
    answers: [
      {
        id: 'devis',
        text: 'Un devis signé engage l’entreprise sur le prix. Un supplément n’est dû que s’il a fait l’objet d’un avenant accepté avant les travaux. Sans cet accord écrit, nous ne pouvons pas le facturer.',
        covers: 'le devis signé fixe le prix sauf avenant accepté',
        cues: ['devis', 'signe', 'engage', 'prix', 'mille huit cents', '1800', 'accord', 'avenant'],
      },
      {
        id: 'preparation',
        text: 'Les trois cent quarante euros correspondent à un enduit que l’équipe a jugé nécessaire en découvrant les murs. Le chef de chantier aurait dû vous appeler ce jour-là. Il ne l’a pas fait.',
        covers: 'ce que recouvre le supplément de préparation',
        cues: ['preparation', 'murs', 'trois cent quarante', '340', 'supplement', 'enduit', 'pourquoi'],
      },
      {
        id: 'deplacement',
        text: 'Le déplacement supplémentaire est facturé quand l’équipe revient un jour non prévu. Ici, elle est revenue parce qu’il lui manquait de la peinture. Ce poste n’aurait pas dû vous être imputé.',
        covers: 'le déplacement supplémentaire et à qui il incombe',
        cues: ['deplacement', 'cent vingt', '120', 'revenir', 'jour', 'pourquoi'],
      },
      {
        id: 'revision',
        text: 'La révision tarifaire annuelle s’applique aux devis de plus de six mois. Le vôtre date de février, donc elle ne s’applique pas. C’est une erreur de saisie.',
        covers: 'la révision tarifaire ne s’applique pas ici',
        cues: ['revision', 'tarif', 'quatre-vingts', '80', 'annuelle', 'augmentation'],
      },
      {
        id: 'ecrit',
        text: 'Si vous contestez, envoyez-nous un courrier avec le devis signé et la facture. Nous avons quinze jours pour répondre. Je peux aussi bloquer le prélèvement dès aujourd’hui.',
        covers: 'la marche à suivre pour contester',
        cues: ['ecrit', 'courrier', 'contester', 'reclamation', 'delai', 'payer', 'prelevement'],
      },
      {
        id: 'geste',
        text: 'Je peux retirer la révision tarifaire et le déplacement immédiatement, soit deux cents euros. Pour la préparation des murs, il faut l’accord du gérant, que je peux demander aujourd’hui.',
        covers: 'ce qui peut être retiré tout de suite',
        cues: ['retirer', 'geste', 'annuler', 'reduire', 'combien', 'accord', 'gerant'],
      },
      {
        id: 'refus',
        text: 'Si le gérant maintient le supplément, vous pouvez saisir le médiateur de la consommation du secteur du bâtiment. La démarche est gratuite et suspend le recouvrement.',
        covers: 'le recours en cas de refus',
        cues: ['refus', 'refuse', 'recours', 'mediateur', 'contester', 'si vous dites non', 'tribunal'],
      },
    ],
  },
  rubric: {
    criteria: [
      {
        key: 'questions',
        label: 'Questions utiles',
        maxPoints: 5,
        descriptors: [
          'Le candidat interroge chacun des trois suppléments séparément plutôt que de contester la somme en bloc.',
          'La valeur du devis signé est posée comme question, non affirmée comme évidence.',
        ],
      },
      {
        key: 'interaction',
        label: 'Conduite de l’échange',
        maxPoints: 5,
        descriptors: [
          'Le candidat réagit à ce qu’on lui répond au lieu de dérouler une liste préparée.',
          'Il obtient un montant chiffré et une marche à suivre avant de conclure, ou constate qu’il ne les obtiendra pas.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Formes interrogatives variées, registre poli tenu malgré le désaccord.',
          'Les montants de la facture sont repris correctement.',
        ],
      },
    ],
  },
  modelAnswer:
    'Bonjour, je vous appelle au sujet de la facture des travaux de peinture ' +
    'chez moi, rue des Sources. Le devis signé indiquait mille huit cents euros ' +
    'et la facture en demande deux mille trois cent quarante.\n\n' +
    'Première question : un devis signé vous engage-t-il sur le prix ? ' +
    'D’accord, sauf avenant accepté avant les travaux. Je n’ai rien signé de tel.\n\n' +
    'Reprenons les trois lignes. Les trois cent quarante euros de préparation, ' +
    'à quoi correspondent-ils ? Un enduit décidé sur place, je comprends, ' +
    'et personne ne m’a appelé ce jour-là.\n\n' +
    'Le déplacement supplémentaire de cent vingt euros ? ' +
    'L’équipe est revenue parce qu’il lui manquait de la peinture. ' +
    'Ce n’est pas de mon fait.\n\n' +
    'Et la révision tarifaire ? Mon devis date de février, donc elle ne s’applique pas. ' +
    'C’est une erreur, très bien.\n\n' +
    'Que pouvez-vous retirer aujourd’hui ? Deux cents euros tout de suite, ' +
    'et la préparation avec l’accord du gérant. ' +
    'Pouvez-vous bloquer le prélèvement en attendant ? ' +
    'Parfait. Et si le gérant refuse, quel est mon recours ? ' +
    'Le médiateur, très bien. J’attends votre retour. Merci beaucoup.',
};

export const EO_T3: ExamTask = {
  ...base,
  id: taskId('po_monologue', '002'),
  taskType: 'po_monologue',
  skill: 'PO',
  level: 'b2',
  label: 'Expression orale · Tâche 3',
  prompt:
    'TÂCHE 3 · expression d’un point de vue · environ 4 minutes 30 · sans préparation\n\n' +
    'Certains proposent que l’accès aux musées, aux bibliothèques et aux concerts publics ' +
    'soit entièrement gratuit. ' +
    'Faut-il y voir la condition d’un accès réel à la culture, ' +
    'ou une dépense qui profitera surtout à ceux qui y venaient déjà ?\n\n' +
    'Exposez votre point de vue et défendez-le.',
  timingS: 270,
  responseSpec: { kind: 'audio', minDurationS: 150, maxDurationS: 300 },
  rubric: {
    criteria: [
      {
        key: 'position',
        label: 'Position et défense',
        maxPoints: 5,
        descriptors: [
          'Une position claire est prise sur l’ALTERNATIVE posée, non sur la culture en général.',
          'Elle est défendue par au moins deux arguments distincts, non par le même reformulé.',
          'Un exposé équilibré qui ne tranche jamais ne répond pas à la consigne.',
        ],
      },
      {
        key: 'objection',
        label: 'Traitement de l’objection',
        maxPoints: 5,
        descriptors: [
          'La meilleure objection adverse est restituée fidèlement avant d’être traitée.',
          'Une concession est faite et bornée : ce qu’elle accorde ne fait pas tomber la thèse.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Nuance et concession disponibles : « certes », « il n’en reste pas moins », « à condition que ».',
          'Le débit soutient un développement de plusieurs minutes sans se déliter.',
        ],
      },
    ],
  },
  modelAnswer:
    'Je suis contre la gratuité générale, et je voudrais commencer par le meilleur argument ' +
    'de ceux qui la défendent, parce qu’il est bon.\n\n' +
    'Un prix, même modeste, écarte des gens. C’est vrai, c’est mesuré, ' +
    'et cela ne se discute pas. Quand un musée est passé à l’entrée libre, ' +
    'la fréquentation a monté partout où on l’a essayé.\n\n' +
    'Là où je ne suis plus, c’est sur qui est venu. ' +
    'Les enquêtes de public montrent que la hausse vient surtout de visiteurs ' +
    'qui venaient déjà et qui viennent plus souvent. ' +
    'La composition sociale du public ne bouge presque pas. ' +
    'Autrement dit, on a rendu gratuit pour tout le monde ' +
    'ce qui était un obstacle pour quelques-uns, ' +
    'et le budget dépensé profite d’abord à ceux qui payaient sans difficulté.\n\n' +
    'On m’objectera que la gratuité a une valeur symbolique, ' +
    'qu’un lieu gratuit dit « ceci est à vous » d’une manière qu’un tarif réduit ne dit pas. ' +
    'Je l’accorde entièrement, et c’est ce qui rend la question difficile. ' +
    'Un tarif réduit demande de se déclarer pauvre, et beaucoup ne le font pas.\n\n' +
    'Ma position tient donc à une condition. ' +
    'Je préfère la gratuité ciblée, à condition qu’elle soit automatique ' +
    'et qu’elle ne demande à personne de justifier sa situation au guichet. ' +
    'Si cela est impossible, alors la gratuité générale devient le moindre mal, ' +
    'et je change d’avis. ' +
    'Ce n’est pas une position de principe, c’est une question de dispositif, ' +
    'et je crois qu’on gagnerait à en discuter comme telle.',
};
