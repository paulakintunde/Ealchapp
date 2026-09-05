// TCF Canada blanc-04 — Expression écrite and Expression orale.
//
// Three tâches each, shapes fixed by STANDARD-tcf §5 and §6 rather than chosen:
// a message, then an account WITH a request, then a comparison of two written
// viewpoints; a guided interview, then an interaction driven by a document,
// then a defended position.
//
// The SITUATIONS come from PLAN-tcf-blanc-04.md; the SHAPES do not, and where
// they pull against each other the shape wins. TCF-217 reads as "an article on
// the transmission of family businesses", which is a document; tâche 3 is a
// comparison of two viewpoints, so it becomes the two positions that article
// sets against each other.
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
    'Une amie vous a invité à son mariage, à l’étranger, dans deux mois. ' +
    'Vous ne pouvez pas y aller : vous n’avez plus de jours de congé et le voyage est trop cher pour vous.\n\n' +
    'Écrivez-lui un message. Remerciez-la de l’invitation, dites que vous ne viendrez pas, ' +
    'donnez la raison sans vous étendre, et proposez quelque chose d’autre.',
  timingS: 900,
  responseSpec: { kind: 'text', minWords: 60, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'consignes',
        label: 'Respect de la consigne',
        maxPoints: 5,
        descriptors: [
          'Les quatre éléments sont présents : le remerciement, le refus, la raison, la proposition.',
          'Le refus est explicite. Un message qui laisse planer le doute ne répond pas à la consigne.',
          'La proposition est concrète : une date, un lieu, une chose à faire ensemble.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre',
        maxPoints: 5,
        descriptors: [
          'Ton amical et chaleureux, sans formule administrative.',
          'La raison est donnée brièvement : une justification longue se lit comme une excuse.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Futur ou conditionnel pour la proposition ; accords de base tenus.',
          'Les erreurs qui restent ne gênent pas la compréhension.',
        ],
      },
    ],
  },
  modelAnswer:
    'Ma chère Inès,\n\n' +
    'Merci beaucoup pour ton invitation. J’ai été très touchée de la recevoir, ' +
    'et j’imagine déjà la fête que ce sera.\n\n' +
    'Je dois pourtant te dire non, et cela me coûte. ' +
    'Je n’ai plus un seul jour de congé cette année, et le billet dépasse largement ' +
    'ce que je peux mettre en ce moment. Je préfère te le dire tout de suite ' +
    'plutôt que de te laisser espérer.\n\n' +
    'Je voudrais quand même fêter cela avec toi. ' +
    'Est-ce que tu passes par ici avant le mariage ? ' +
    'Sinon, je vous invite tous les deux à dîner à votre retour, en septembre, ' +
    'et vous me raconterez tout.\n\n' +
    'Je pense fort à toi ce jour-là.\n\n' +
    'Je t’embrasse,\nMaya',
};

export const EE_T2: ExamTask = {
  ...base,
  id: taskId('pe_short', '002'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b1',
  label: 'Expression écrite · Tâche 2',
  prompt:
    'TÂCHE 2 · lettre à votre employeur (120 à 150 mots)\n\n' +
    'Vous travaillez de neuf heures à dix-sept heures. Depuis la rentrée, ' +
    'la crèche de votre fils ferme à dix-sept heures trente et se trouve à quarante minutes du bureau. ' +
    'Vous arrivez en retard chaque soir. Un collègue de votre service commence déjà à huit heures.\n\n' +
    'Écrivez à votre responsable. RACONTEZ la situation et ce que vous avez déjà essayé, ' +
    'puis DITES CE QUE VOUS DEMANDEZ et pourquoi cela ne gênerait pas le service.',
  timingS: 1200,
  responseSpec: { kind: 'text', minWords: 120, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'deuxParties',
        label: 'Exposé des faits ET demande',
        maxPoints: 5,
        descriptors: [
          'Le texte fait les DEUX choses : il expose la situation et il formule une demande précise, chiffrée en horaires.',
          'Une lettre qui décrit la difficulté sans rien demander ne répond pas à la consigne.',
          'Ce qui a déjà été essayé apparaît : sans cela, la demande paraît être le premier recours.',
        ],
      },
      {
        key: 'argumentation',
        label: 'Intérêt du service',
        maxPoints: 5,
        descriptors: [
          'La demande est présentée du point de vue du service, non du seul confort personnel.',
          'Le précédent du collègue à huit heures est utilisé : il montre que l’aménagement est praticable.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Registre professionnel tenu du début à la fin, sans familiarité ni supplication.',
          'Conditionnel de politesse employé correctement pour formuler la demande.',
        ],
      },
    ],
  },
  modelAnswer:
    'Madame Toussaint,\n\n' +
    'Je me permets de vous exposer une difficulté d’organisation apparue depuis la rentrée.\n\n' +
    'La crèche de mon fils a avancé sa fermeture à dix-sept heures trente, ' +
    'et le trajet depuis le bureau demande quarante minutes. ' +
    'Je pars donc chaque soir dans l’urgence et j’arrive malgré tout en retard. ' +
    'J’ai cherché une place ailleurs et sollicité un membre de ma famille, sans succès.\n\n' +
    'Je souhaiterais décaler mes horaires à huit heures - seize heures, ' +
    'du lundi au vendredi. Le volume de travail resterait identique.\n\n' +
    'Cet aménagement me semble compatible avec le service. ' +
    'Nos réunions d’équipe se tiennent le matin, et Marc Ferreira commence déjà à huit heures, ' +
    'ce qui montre que l’ouverture anticipée du bureau ne pose pas de difficulté. ' +
    'La permanence de fin de journée serait assurée par lui les jours où elle est nécessaire.\n\n' +
    'Je reste à votre disposition pour en parler.\n\n' +
    'Bien cordialement,\nSamir Ouazzani',
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
    'Deux textes ont paru sur la transmission des entreprises familiales.\n\n' +
    'TEXTE A · « Une entreprise transmise à un enfant survit mieux qu’une entreprise vendue. ' +
    'Les chiffres le disent : à dix ans, l’écart de survie est net. ' +
    'La raison n’est pas le talent de l’héritier, elle est le temps qu’il accepte de perdre. ' +
    'Un repreneur extérieur doit rembourser son achat et raisonne donc à cinq ans. ' +
    'Un enfant n’a rien remboursé et peut raisonner à trente. »\n\n' +
    'TEXTE B · « On compare ce qui n’est pas comparable. Les entreprises transmises en famille ' +
    'sont celles que la famille a jugées transmissibles ; les autres ont été vendues ' +
    'ou fermées avant. La survie que l’on observe est celle des affaires déjà solides. ' +
    'Quant au temps long, il a un nom quand il ne réussit pas : c’est le refus de vendre ' +
    'une entreprise qui aurait dû l’être. »\n\n' +
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
          'Le désaccord est situé : il porte sur ce que le chiffre de survie mesure, non sur son exactitude.',
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
    'Les deux textes acceptent le même chiffre et se séparent sur ce qu’il mesure. ' +
    'Ni l’un ni l’autre ne conteste que les entreprises familiales survivent davantage.\n\n' +
    'Le texte A explique cette survie par un horizon : un héritier ne rembourse rien ' +
    'et peut donc attendre. Le texte B répond que la comparaison est faussée en amont, ' +
    'puisque les entreprises transmises sont précisément celles que la famille a jugées ' +
    'dignes d’être transmises. Ce que l’on prend pour un effet de la transmission ' +
    'serait un effet de la sélection qui la précède.\n\n' +
    'L’objection de B est forte et elle ne va pas jusqu’au bout. ' +
    'Elle expliquerait l’écart si les affaires vendues étaient toutes les plus fragiles, ' +
    'ce qui est faux : beaucoup se vendent parce qu’aucun enfant ne veut du métier.\n\n' +
    'Je retiens donc A, en lui empruntant la mise en garde de B. ' +
    'Le temps long protège une entreprise saine et prolonge une entreprise perdue, ' +
    'et rien dans la famille ne permet de distinguer les deux cas à l’avance.',
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
    'L’examinateur vous pose des questions sur un logement que vous avez quitté. ' +
    'Répondez naturellement, et développez vos réponses : une phrase seule ne suffit pas.\n\n' +
    '· Parlez-moi d’un logement où vous avez habité.\n' +
    '· Pourquoi l’aviez-vous choisi ?\n' +
    '· Pourquoi êtes-vous parti ?\n' +
    '· Avec le recul, referiez-vous le même choix ?',
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
          'La dernière question appelle un jugement rétrospectif : une réponse « oui » sans plus ne montre rien.',
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
          'Passé composé et imparfait distingués ; le lexique du logement est disponible.',
          'La prononciation ne gêne pas la compréhension.',
        ],
      },
    ],
  },
  modelAnswer:
    'J’ai habité pendant trois ans un studio au dernier étage d’un vieil immeuble, ' +
    'dans le centre. Il faisait vingt-quatre mètres carrés, avec une grande fenêtre ' +
    'qui donnait sur les toits.\n\n' +
    'Je l’avais choisi très vite, en une seule visite. ' +
    'Il était lumineux, le loyer était bas pour le quartier, ' +
    'et je pouvais aller au travail à pied. À ce moment-là, cela me suffisait complètement.\n\n' +
    'Je suis parti parce qu’il n’y avait pas d’ascenseur et que j’étais au sixième. ' +
    'Au début cela m’amusait, et puis mes parents ont cessé de venir, ' +
    'et je remontais les courses en deux fois. Ce n’est pas un drame, ' +
    'mais au bout de trois ans, on compte.\n\n' +
    'Est-ce que je referais le même choix ? Oui, je crois, ' +
    'à condition de savoir que ce serait pour trois ans et pas pour dix. ' +
    'Mon erreur n’a pas été de le prendre, elle a été de croire que j’y resterais.',
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
    'COMPTOIR D’UNE COMPAGNIE AÉRIENNE · affichage\n\n' +
    'Votre vol de 18 h 40 est annoncé avec quatre heures de retard. ' +
    'Vous aviez une correspondance à 22 h 15 pour rejoindre votre destination finale. ' +
    'L’écran du comptoir indique :\n' +
    '« Retard de 4 h · cause technique · repas offert au-delà de 2 h d’attente · ' +
    'réacheminement selon disponibilité · nuitée non garantie ».\n\n' +
    'Vous vous présentez au comptoir. Posez les questions nécessaires ' +
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
      text: 'Comptoir Vol Austral, bonsoir. Vous avez votre carte d’embarquement ?',
      covers: 'ouverture',
      cues: [],
    },
    catchAll: {
      id: 'catch',
      text: 'Je n’ai pas cette information au comptoir. Il faudrait la demander à la porte d’embarquement une fois le vol confirmé.',
      covers: 'information non détenue',
      cues: [],
    },
    closing: {
      id: 'close',
      text: 'C’est enregistré à votre dossier. Vous recevrez la confirmation par message. Bonne soirée, et désolée pour ce contretemps.',
      covers: 'clôture',
      cues: [],
    },
    answers: [
      {
        id: 'correspondance',
        text: 'Votre correspondance de vingt-deux heures quinze est perdue, c’est certain. Comme les deux vols sont sur le même billet, le réacheminement est à notre charge et vous n’avez rien à racheter.',
        covers: 'la correspondance est manquée et le réacheminement est dû',
        cues: ['correspondance', 'vingt-deux', '22h15', 'rater', 'manquer', 'deuxieme vol', 'reacheminement'],
      },
      {
        id: 'indemnisation',
        text: 'Une panne technique n’est pas considérée comme une circonstance extraordinaire. Une indemnisation forfaitaire est donc due, indépendamment du repas et de l’hôtel, et elle se demande par le formulaire en ligne.',
        covers: 'l’indemnisation reste due malgré la cause technique',
        cues: ['indemnisation', 'indemnise', 'compensation', 'droit', 'panne', 'technique', 'combien'],
      },
      {
        id: 'nuitee',
        text: 'La nuitée n’est pas garantie parce que nous cherchons d’abord à vous faire partir cette nuit. Si le réacheminement tombe au lendemain matin, l’hôtel et le transport sont pris en charge.',
        covers: 'quand l’hôtel devient dû',
        cues: ['nuitee', 'hotel', 'dormir', 'nuit', 'garantie', 'loger'],
      },
      {
        id: 'repas',
        text: 'Le bon de repas est de vingt euros et vous est remis dès maintenant, puisque l’attente dépasse deux heures. Il est valable dans les commerces de la zone d’embarquement.',
        covers: 'le repas et son montant',
        cues: ['repas', 'manger', 'bon', 'restauration', 'vingt euros', 'boire'],
      },
      {
        id: 'bagage',
        text: 'Votre bagage reste enregistré jusqu’à la destination finale. Si vous voulez le récupérer ce soir, il faut nous le dire maintenant : après le chargement, ce n’est plus possible.',
        covers: 'le sort du bagage en soute',
        cues: ['bagage', 'valise', 'soute', 'recuperer', 'affaires', 'medicament'],
      },
      {
        id: 'alternative',
        text: 'Il reste deux places sur le vol de six heures dix demain matin, avec une seule escale. C’est deux heures plus tôt que le réacheminement automatique, mais il faut décider ce soir.',
        covers: 'une solution plus rapide existe',
        cues: ['autre vol', 'alternative', 'plus tot', 'demain', 'compagnie', 'place', 'escale'],
      },
      {
        id: 'refus',
        text: 'Si vous estimez la réponse insuffisante, vous pouvez déposer une réclamation écrite. Passé deux mois sans réponse de notre part, l’autorité de l’aviation civile peut être saisie.',
        covers: 'le recours en cas de refus',
        cues: ['refus', 'refuse', 'reclamation', 'recours', 'contester', 'si vous dites non', 'plainte'],
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
          'Le candidat interroge ce que l’affichage laisse obscur : le sort de la correspondance, ce que « non garantie » veut dire, ce qui est dû malgré la cause technique.',
          'Une question dont la réponse figure déjà sur l’écran ne compte pas.',
        ],
      },
      {
        key: 'interaction',
        label: 'Conduite de l’échange',
        maxPoints: 5,
        descriptors: [
          'Le candidat réagit à ce qu’on lui répond au lieu de dérouler une liste préparée.',
          'Il obtient une décision sur le réacheminement avant de conclure, ou constate qu’il ne l’obtiendra pas ce soir.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Formes interrogatives variées, registre poli tenu malgré la contrariété.',
          'Les horaires et les montants de l’affichage sont repris correctement.',
        ],
      },
    ],
  },
  modelAnswer:
    'Bonsoir, voici ma carte d’embarquement. Je suis sur le vol de dix-huit heures quarante ' +
    'et j’ai une correspondance à vingt-deux heures quinze. Avec quatre heures de retard, ' +
    'je la rate, c’est bien cela ?\n\n' +
    'D’accord. Et comme les deux vols sont sur le même billet, ' +
    'le réacheminement est à votre charge ? Très bien, je n’ai donc rien à racheter.\n\n' +
    'Vous parlez d’une nuitée non garantie : qu’est-ce que cela veut dire exactement ? ' +
    'Je comprends, l’hôtel est pris en charge seulement si je pars demain matin.\n\n' +
    'Une question sur l’indemnisation : la cause est technique, ' +
    'est-ce que cela m’enlève le droit à une compensation ? ' +
    'Non, très bien, je ferai le formulaire en ligne.\n\n' +
    'Et mon bagage ? Il y a un médicament dedans, ' +
    'donc si je peux le récupérer ce soir, je préfère.\n\n' +
    'Dernière chose : y a-t-il un vol plus tôt demain matin ? ' +
    'Six heures dix avec une escale, je prends. Je décide maintenant. Merci beaucoup.',
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
    'Certains proposent de taxer fortement les vols de moins de deux heures ' +
    'lorsqu’un train fait le même trajet. ' +
    'Faut-il y voir une mesure efficace qu’il faut prendre, ' +
    'ou une mesure symbolique qui pèsera surtout sur ceux qui ont le moins le choix ?\n\n' +
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
          'Une position claire est prise sur l’ALTERNATIVE posée, non sur l’écologie en général.',
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
    'Je suis pour la mesure, et je veux dire tout de suite à quelle condition, ' +
    'parce que sans elle je serais contre.\n\n' +
    'Commençons par l’objection, qui est la meilleure des deux. ' +
    'Une taxe sur les vols courts frappe d’abord le billet bon marché. ' +
    'Celui qui prend un vol à quarante euros parce qu’il n’a pas les moyens du train ' +
    'à cent vingt paiera la différence, et celui qui voyage en classe affaires ne la sentira pas. ' +
    'C’est vrai, c’est documenté, et une mesure écologique qui frappe le plus pauvre ' +
    'perd d’avance la bataille politique qu’elle doit gagner.\n\n' +
    'Cela ne me fait pas conclure qu’il faut renoncer. ' +
    'Cela me fait conclure que la taxe ne vaut rien seule. ' +
    'Elle vaut si son produit revient entièrement au prix du billet de train ' +
    'sur les mêmes trajets, de sorte que le voyageur ne perde pas une option, ' +
    'il en change. Sans cette contrepartie, on n’a pas une politique, on a une recette.\n\n' +
    'On m’objectera que c’est symbolique parce que ces vols ne représentent ' +
    'qu’une part modeste des émissions. Je l’accorde. ' +
    'Un trajet remplaçable par un train est pourtant le seul cas ' +
    'où l’on demande à quelqu’un de renoncer à quelque chose qu’il peut faire autrement. ' +
    'Commencer par là n’est pas symbolique, c’est simplement commencer par le plus facile, ' +
    'et je ne vois pas ce qu’il y aurait d’honorable à commencer par le plus difficile ' +
    'pour être sûr de ne rien faire.',
};
