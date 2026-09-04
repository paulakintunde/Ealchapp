// TCF Canada blanc-01 — Expression écrite and Expression orale.
//
// Three tâches each, and the shapes are fixed by STANDARD-tcf §5 and §6 rather
// than chosen: a message, then an account WITH a comment, then a comparison of
// two written viewpoints; a guided interview, then an interaction driven by a
// document, then a defended position.
//
// ── One clock for EE, not three ────────────────────────────────────────────
//
// §7 is explicit: the candidate manages the split across the three writing
// tâches themselves, so the runner shows ONE section clock. The per-task
// timingS below is a budget that sums to the section, not three separate
// countdowns — a candidate who spends forty minutes on tâche 3 has done
// something the format allows and the runner must not prevent.
//
// ── NO targetItemIds ───────────────────────────────────────────────────────
//
// The field is how a missed CLOSED question routes back to the corpus atoms it
// was built from. An open task has no atoms to miss: its outcome is a band, not
// a set of wrong answers. validateExamTask rejects the field here, and rightly.
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
    'Votre collègue Amina quitte le service à la fin du mois. Vous organisez un pot de départ.\n\n' +
    'Écrivez un message aux collègues du service. Annoncez le pot, donnez la date, l’heure et le lieu, ' +
    'dites ce que chacun peut apporter, et demandez une réponse avant une date précise.',
  timingS: 900,
  responseSpec: { kind: 'text', minWords: 60, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'consignes',
        label: 'Respect de la consigne',
        maxPoints: 5,
        descriptors: [
          'Les quatre informations demandées sont présentes : date, heure, lieu, contribution.',
          'Une demande de réponse avant une date précise figure dans le message.',
          'Une information manquante coûte des points même si le message est bien écrit.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre',
        maxPoints: 5,
        descriptors: [
          'Ton de collègue à collègues : ni formel administratif, ni familier.',
          'Une formule d’ouverture et une de clôture, adaptées à un message interne.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Présent et futur proche corrects ; accords de base tenus.',
          'Les erreurs qui restent ne gênent pas la compréhension.',
        ],
      },
    ],
  },
  modelAnswer:
    'Bonjour à toutes et à tous,\n\n' +
    'Amina nous quitte à la fin du mois après six ans dans le service. Nous organisons un pot pour lui dire au revoir ' +
    'le jeudi 27, à partir de 17 h 30, dans la salle de réunion du deuxième étage.\n\n' +
    'Chacun peut apporter quelque chose : une boisson, un gâteau, ou de quoi grignoter. Une liste est affichée près ' +
    'de la machine à café pour éviter d’avoir dix paquets de chips et rien à boire.\n\n' +
    'Merci de me dire avant lundi 24 si vous venez, pour que nous sachions combien nous serons.\n\n' +
    'À jeudi,\nKarim',
};

export const EE_T2: ExamTask = {
  ...base,
  id: taskId('pe_short', '002'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b1',
  label: 'Expression écrite · Tâche 2',
  prompt:
    'TÂCHE 2 · article pour un bulletin associatif (120 à 150 mots)\n\n' +
    'La sortie annuelle de votre association, prévue au lac de Vaubourg, a été annulée trois jours avant, ' +
    'faute d’un nombre suffisant d’inscrits : 11 personnes sur les 25 nécessaires.\n\n' +
    'Vous écrivez l’article du bulletin. RACONTEZ ce qui s’est passé, puis DONNEZ VOTRE AVIS ' +
    'sur ce qu’il faudrait changer pour la prochaine fois.',
  timingS: 1200,
  responseSpec: { kind: 'text', minWords: 120, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'deuxParties',
        label: 'Récit ET commentaire',
        maxPoints: 5,
        descriptors: [
          'Le texte fait les DEUX choses : il raconte l’annulation et il prend position sur la suite.',
          'Un texte qui ne fait que raconter, si bon soit-il, ne répond pas à la consigne.',
          'Un texte qui ne fait que commenter sans rappeler les faits non plus.',
        ],
      },
      {
        key: 'articulation',
        label: 'Organisation',
        maxPoints: 5,
        descriptors: [
          'Le passage du récit au commentaire est marqué, par un paragraphe ou une transition explicite.',
          'Les chiffres donnés dans la consigne sont repris sans être déformés.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Passé composé et imparfait employés à bon escient dans la partie récit.',
          'Le commentaire emploie des marqueurs d’opinion clairs.',
        ],
      },
    ],
  },
  modelAnswer:
    'La sortie au lac de Vaubourg n’aura pas lieu. Prévue pour le 14 juin, elle a été annulée trois jours avant : ' +
    'à la clôture des inscriptions, onze personnes s’étaient manifestées, alors que le car ne pouvait être réservé ' +
    'qu’à partir de vingt-cinq. Le bureau a préféré annuler plutôt que d’engager une dépense que l’association ' +
    'n’aurait pas couverte.\n\n' +
    'Il me semble que le problème n’est pas le manque d’intérêt. Onze inscrits en trois semaines, pour une sortie ' +
    'annoncée par une seule affiche dans le hall, ce n’est pas un désaveu. C’est le signe que l’information ' +
    'n’a pas circulé.\n\n' +
    'Je propose deux changements : annoncer la sortie six semaines à l’avance, et ouvrir les inscriptions en ligne. ' +
    'Demander à chacun de passer au local un mardi soir, c’est déjà écarter la moitié des adhérents.',
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
    'Deux personnes réagissent au projet d’imposer une tenue commune dans les collèges de la commune.\n\n' +
    'DOCUMENT 1 · Sonia, parente d’élève\n' +
    '« Chaque matin, il y a une négociation sur ce qui se porte, et elle n’a rien d’innocent : ce qui se joue, ' +
    'c’est qui peut suivre et qui ne peut pas. Une tenue commune ne rend personne égal, mais elle retire au moins ' +
    'ce terrain-là à la comparaison. »\n\n' +
    'DOCUMENT 2 · Marc, professeur\n' +
    '« On me dit que la tenue efface les différences. Elle les déplace, plutôt : les chaussures restent, ' +
    'le téléphone reste, le voyage scolaire reste. Et on aura dépensé un budget et deux ans de débats ' +
    'pour un résultat qu’aucune étude ne montre. »\n\n' +
    'Comparez ces deux positions, puis prenez la vôtre et justifiez-la.',
  timingS: 1500,
  responseSpec: { kind: 'text', minWords: 120, maxWords: 180 },
  rubric: {
    criteria: [
      {
        key: 'comparaison',
        label: 'Comparaison des deux positions',
        maxPoints: 5,
        descriptors: [
          'Les deux positions sont restituées fidèlement, chacune avec SA raison.',
          'Le point de désaccord réel est identifié : la tenue supprime-t-elle la comparaison ou la déplace-t-elle.',
          'Résumer les deux documents à « pour » et « contre » ne suffit pas.',
        ],
      },
      {
        key: 'position',
        label: 'Position personnelle',
        maxPoints: 5,
        descriptors: [
          'Une position est prise et elle est justifiée par un argument, pas par une préférence.',
          'La position peut reprendre l’un des deux documents, à condition d’ajouter quelque chose.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction et nuance',
        maxPoints: 5,
        descriptors: [
          'Les marqueurs de concession et d’opposition sont employés correctement.',
          'Le registre reste celui d’un texte argumentatif, sans familiarité.',
        ],
      },
    ],
  },
  modelAnswer:
    'Les deux intervenants partent du même constat : les vêtements rendent visibles des différences de moyens. ' +
    'Ils en tirent des conclusions opposées.\n\n' +
    'Pour Sonia, la tenue commune retire un terrain à la comparaison quotidienne. Elle ne prétend pas qu’elle crée ' +
    'l’égalité, seulement qu’elle en supprime un lieu. Pour Marc, ce lieu ne disparaît pas : il se déplace vers ' +
    'les chaussures, le téléphone, le voyage scolaire, et le coût de l’opération n’est pas justifié par des résultats ' +
    'démontrés.\n\n' +
    'Le désaccord ne porte donc pas sur l’existence des inégalités, mais sur ce que produit leur déplacement.\n\n' +
    'Je suis plutôt de l’avis de Marc, pour une raison qu’il n’avance pas : une mesure visible qui ne change rien ' +
    'de mesurable a un effet propre, celui de faire croire que la question est traitée. Le risque n’est pas que ' +
    'la tenue soit inutile, c’est qu’elle serve de réponse.',
};

/* ═══ Expression orale ════════════════════════════════════════════════════ */
//
// ── Why tâches 1 and 3 are both `po_monologue` ─────────────────────────────
//
// In the real exam tâche 1 IS an interaction: an examiner asks and follows up.
// But the schema's two speaking shapes are not about who talks — they are about
// whether the APP plays a recorded interlocutor, and `po_interaction` MUST
// carry an answer bank or validateExamTask refuses it: "an interaction with
// nothing to interact with is a monologue".
//
// Tâche 1 has a question LADDER for a human examiner, in examinerNotes, and no
// recorded bank. So po_monologue is what it honestly is inside this app, and
// the ladder is where the interaction actually lives. Only tâche 2, which the
// app really does play, is po_interaction.

export const EO_T1: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  level: 'a2',
  label: 'Expression orale · Tâche 1',
  prompt:
    'TÂCHE 1 · entretien dirigé · 2 minutes · sans préparation\n\n' +
    'L’examinateur vous pose des questions pour faire connaissance. Répondez naturellement, ' +
    'et développez vos réponses : une phrase seule ne suffit pas.',
  timingS: 120,
  responseSpec: { kind: 'audio', minDurationS: 60, maxDurationS: 150 },
  // A LADDER, not a list. Each rung has a follow-up that depends on the answer,
  // because the tâche assesses whether the candidate can converse with someone
  // they do not know — and a candidate who answers four unrelated questions in
  // four sentences has not conversed.
  examinerNotes: [
    ...NOTES_OPEN,
    'Ouverture : « Bonjour. Pouvez-vous vous présenter en quelques mots ? »',
    'Rung 1 — « Qu’est-ce que vous aimez faire quand vous avez du temps libre ? » ' +
      'Si la réponse nomme une activité de plein air, enchaîner sur « Racontez-moi la dernière fois. » ' +
      'Si elle nomme une activité d’intérieur, enchaîner sur « Est-ce que vous le faites seul ou avec quelqu’un ? »',
    'Rung 2 — « Parlez-moi d’une sortie qui ne s’est pas passée comme prévu. » ' +
      'Si le candidat raconte un imprévu météo, demander « Qu’est-ce que vous avez décidé de faire ? ». ' +
      'S’il raconte autre chose, demander « Est-ce que vous y retourneriez ? »',
    'Rung 3 — « Est-ce que vous préférez préparer une sortie à l’avance ou partir sans plan ? Pourquoi ? »',
    'Relance si le candidat répond par une seule phrase : « Pouvez-vous m’en dire un peu plus ? » ' +
      'Une seule relance par rung ; au-delà, noter la brièveté plutôt que la provoquer.',
  ],
  rubric: {
    criteria: [
      {
        key: 'interaction',
        label: 'Capacité à converser',
        maxPoints: 5,
        descriptors: [
          'Répond à la question posée, et non à celle qu’il avait préparée.',
          'Développe sans qu’on le lui demande à chaque fois.',
          'Réagit aux relances plutôt que de reprendre son récit au début.',
        ],
      },
      {
        key: 'lexique',
        label: 'Étendue lexicale',
        maxPoints: 5,
        descriptors: [
          'Le vocabulaire du quotidien et des loisirs est disponible sans contournement lourd.',
          'Une hésitation lexicale est réparée sans abandonner la phrase.',
        ],
      },
      {
        key: 'fluidite',
        label: 'Fluidité et prononciation',
        maxPoints: 5,
        descriptors: [
          'Le débit permet de suivre ; les pauses ne rompent pas le sens.',
          'La prononciation ne demande pas d’effort d’interprétation à l’examinateur.',
        ],
      },
    ],
  },
  modelAnswer:
    'Bonjour. Je m’appelle Karim, j’ai trente-quatre ans et je travaille dans une petite entreprise de logistique. ' +
    'Quand j’ai du temps libre, je marche : le week-end, j’essaie de partir tôt et de faire une quinzaine de kilomètres. ' +
    'La dernière fois, c’était il y a trois semaines, dans les collines au-dessus de Corbeny. Il faisait beau au départ, ' +
    'et à mi-parcours le brouillard est descendu d’un coup. On ne voyait plus le sentier. On a décidé de redescendre ' +
    'par la route, ce qui était plus long mais plus sûr. Je préfère préparer un peu à l’avance, justement pour ça : ' +
    'pas pour tout prévoir, mais pour savoir par où revenir si ça tourne mal.',
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
    'ÉTAT DES LIEUX DE SORTIE · logement meublé\n\n' +
    'Vous quittez votre logement. L’agence vous informe qu’une retenue sera faite sur le dépôt de garantie.\n' +
    'Dépôt versé : 950 €. Retenue annoncée : 380 €.\n' +
    'Motif indiqué : « remise en état, peinture et nettoyage ».\n\n' +
    'Vous téléphonez à l’agence. Posez les questions nécessaires pour comprendre et contester si besoin.',
  // Prep is clocked SEPARATELY from the exchange (STANDARD-tcf §7). A runner
  // that folds the two into one countdown gives the candidate a shorter
  // interaction the better they prepare.
  prepS: 120,
  timingS: 330,
  responseSpec: { kind: 'audio', minDurationS: 120, maxDurationS: 240 },
  interlocutor: {
    opening: {
      id: 'open',
      text: 'Agence Pralet, bonjour.',
      covers: 'ouverture',
      cues: [],
    },
    catchAll: {
      id: 'catch',
      text: 'Je n’ai pas cette information sous les yeux, il faudrait voir avec la gestionnaire du dossier.',
      covers: 'information non détenue',
      cues: [],
    },
    closing: {
      id: 'close',
      text: 'Très bien, je note votre demande. Vous recevrez un courrier sous huit jours. Bonne journée.',
      covers: 'clôture',
      cues: [],
    },
    answers: [
      {
        id: 'detail',
        text: 'La retenue se décompose en deux cent quatre-vingts euros de peinture et cent euros de nettoyage.',
        covers: 'le détail de la retenue',
        cues: ['detail', 'decomposition', 'compose', 'comment', 'calcul', 'a quoi correspond'],
      },
      {
        id: 'devis',
        text: 'Oui, un devis a été établi par une entreprise. Nous pouvons vous en envoyer une copie.',
        covers: 'l’existence d’un devis',
        cues: ['devis', 'facture', 'justificatif', 'preuve', 'entreprise'],
      },
      {
        id: 'etatdeslieux',
        text: 'L’état des lieux d’entrée mentionnait déjà des traces sur deux murs, mais pas sur les autres.',
        covers: 'ce que disait l’état des lieux d’entrée',
        cues: ['etat des lieux', 'entree', 'arrivee', 'au depart', 'deja', 'mentionne'],
      },
      {
        id: 'vetuste',
        text: 'La vétusté est prise en compte : la peinture avait six ans, un abattement de trente pour cent a été appliqué.',
        covers: 'la prise en compte de la vétusté',
        cues: ['vetuste', 'usure', 'anciennete', 'age', 'normale', 'abattement'],
      },
      {
        id: 'delai',
        text: 'Le solde du dépôt vous sera restitué sous un mois à compter de la remise des clés.',
        covers: 'le délai de restitution',
        cues: ['delai', 'quand', 'combien de temps', 'restitution', 'rembourse', 'recevoir'],
      },
      {
        id: 'contester',
        text: 'Si vous contestez, adressez-nous un courrier recommandé. À défaut d’accord, la commission de conciliation peut être saisie.',
        covers: 'la marche à suivre pour contester',
        cues: ['contester', 'desaccord', 'recours', 'refuse', 'pas d accord', 'reclamation'],
      },
    ],
  },
  rubric: {
    criteria: [
      {
        key: 'couverture',
        label: 'Couverture du document',
        maxPoints: 5,
        descriptors: [
          'Les informations utiles sont demandées : détail de la retenue, devis, état des lieux d’entrée, vétusté, délai, recours.',
          'Une information non demandée est une tâche incomplète, pas une faute de langue.',
        ],
      },
      {
        key: 'questions',
        label: 'Formulation des questions',
        maxPoints: 5,
        descriptors: [
          'Questions correctes et variées : intonation, est-ce que, inversion.',
          'Registre adapté à un échange avec une agence.',
        ],
      },
      {
        key: 'interaction',
        label: 'Interaction et relance',
        maxPoints: 5,
        descriptors: [
          'Réagit aux réponses au lieu de dérouler une liste préparée.',
          'Relance quand une réponse est incomplète ou évasive.',
        ],
      },
    ],
  },
  modelAnswer:
    'Bonjour, je vous appelle au sujet de mon dépôt de garantie. Vous retenez trois cent quatre-vingts euros : ' +
    'à quoi correspond exactement cette somme ? … Est-ce qu’un devis a été fait, et puis-je en avoir une copie ? … ' +
    'L’état des lieux d’entrée mentionnait-il déjà des traces sur ces murs ? … Est-ce que la vétusté de la peinture ' +
    'a été prise en compte ? Elle avait six ans, si je comprends bien. … Dans quel délai le solde me sera-t-il versé ? … ' +
    'Et si je conteste cette retenue, quelle est la marche à suivre ?',
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
    'Reprendre des études après trente ans : est-ce un choix que la société encourage assez, ' +
    'ou une décision qu’elle fait payer trop cher à ceux qui la prennent ?\n\n' +
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
          'Une position claire est prise sur la question posée, et elle répond aux DEUX termes de l’alternative.',
          'Au moins deux arguments distincts la soutiennent, développés et non énumérés.',
          'Une objection prévisible est envisagée et traitée.',
        ],
      },
      {
        key: 'organisation',
        label: 'Organisation du propos',
        maxPoints: 5,
        descriptors: [
          'Le propos a un début, un développement et une conclusion audibles.',
          'Les articulateurs marquent la progression sans la surcharger.',
        ],
      },
      {
        key: 'langue',
        label: 'Étendue et correction',
        maxPoints: 5,
        descriptors: [
          'Lexique de l’argumentation et de la formation disponible sans contournement.',
          'Subjonctif après les tournures qui l’appellent ; concession construite correctement.',
          'Les erreurs résiduelles ne gênent pas la compréhension.',
        ],
      },
    ],
  },
  modelAnswer:
    'Je pense que la société encourage ce choix en paroles et le fait payer en pratique, et que la contradiction ' +
    'est assez précise pour être nommée.\n\n' +
    'En paroles, tout est là : on parle de formation tout au long de la vie, on cite des reconversions réussies. ' +
    'En pratique, une personne de trente-cinq ans qui reprend des études perd un salaire, garde un loyer, ' +
    'et souvent une famille à charge. Les aides existantes sont calculées pour un étudiant de vingt ans, ' +
    'c’est-à-dire pour quelqu’un qui n’a pas ces charges.\n\n' +
    'On me répondra que ces personnes choisissent, et qu’un choix se paie. C’est vrai, mais on ne peut pas ' +
    'à la fois demander à une population de se reconvertir et traiter chaque reconversion comme une affaire privée.\n\n' +
    'Je dirais donc ceci : le problème n’est pas le manque d’encouragement, c’est que l’encouragement ne coûte rien ' +
    'à celui qui l’adresse et beaucoup à celui qui le suit.',
};
