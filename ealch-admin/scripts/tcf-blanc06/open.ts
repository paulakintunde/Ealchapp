// TCF Canada blanc-06 — Expression écrite and Expression orale.
//
// Three tâches each, shapes fixed by STANDARD-tcf §5 and §6 rather than chosen:
// a message, then an account WITH a comment, then a comparison of two written
// viewpoints; a guided interview, then an interaction driven by a document,
// then a defended position.
//
// ── Why tâche 3 is C1 on this paper, and only tâche 3 ──────────────────────
//
// C1-BUILD-LOG decision 41 (Paul, 2026-10-07), delivering decision 23: the
// sixth TCF paper keeps the real format throughout, and its TOP writing task
// and TOP speaking task are pitched and tagged at c1. A failed attempt then
// routes PE@c1 to c1.10 and PO@c1 to c1.09 (EXAM_PREP_TARGETS), which no TCF
// task could do before, because tâche 3 was b2 on papers 1 to 5.
//
// Pitched at C1 WITHIN the format, not around it: the word bounds, the clocks,
// the two 90-140 word source documents and the no-preparation monologue are
// exactly blanc-05's. What moves is the demand. EE tâche 3's two texts are
// abstract and argue past each other (text B refutes a binding role text A
// never claims), so a comparison that only lines up conclusions cannot reach
// the top band. EO tâche 3's question is a principle (paternalism against
// autonomy) that four minutes can only hold with criteria, a conceded
// objection and hypothesis. Rubric and model answer both target C1.
//
// Tâches 1 and 2 stay at the levels papers 1 to 5 give them (a2, b1).
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

/** The two C1 tâches say so to the examiner as well: a grader anchored on a
 *  B2 expectation would over-mark them. */
const NOTES_OPEN_C1 = [
  ...NOTES_OPEN,
  'Cette tâche est calibrée au niveau C1 : la grille et la réponse modèle visent ce niveau, et non le B2 des épreuves blanches précédentes.',
];

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
    'Samedi dernier, trois amis, Julie, Samir et Thomas, vous ont aidé à déménager ' +
    'pendant toute la journée.\n\n' +
    'Écrivez-leur un message. Remerciez-les, racontez comment se passent vos premiers jours ' +
    'dans le nouveau logement, et invitez-les pour les remercier : dites quand et où.',
  timingS: 900,
  responseSpec: { kind: 'text', minWords: 60, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'consignes',
        label: 'Respect de la consigne',
        maxPoints: 5,
        descriptors: [
          'Les trois éléments sont présents : les remerciements, le récit des premiers jours, l’invitation.',
          'L’invitation est concrète : un jour, une heure ou un lieu.',
          'Les remerciements portent sur quelque chose de précis, pas seulement sur un « merci pour tout ».',
        ],
      },
      {
        key: 'registre',
        label: 'Registre',
        maxPoints: 5,
        descriptors: [
          'Ton amical et chaleureux, adapté à des amis ; formules d’ouverture et de clôture cohérentes.',
          'Les trois destinataires sont bien interpellés ensemble.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Passé composé pour la journée du déménagement, présent pour l’installation, futur proche ou présent pour l’invitation.',
          'Les erreurs qui restent ne gênent pas la compréhension.',
        ],
      },
    ],
  },
  modelAnswer:
    'Chers Julie, Samir et Thomas,\n\n' +
    'Un immense merci pour samedi ! Sans vous, je serais encore en train de porter des cartons ' +
    'dans l’escalier. Vous êtes restés toute la journée, même sous la pluie, ' +
    'et Samir a monté le canapé au troisième étage sans rien abîmer.\n\n' +
    'Je suis enfin installée. L’appartement est plus petit que l’ancien, ' +
    'mais il est très lumineux et la vue sur le parc est magnifique. ' +
    'J’ai déjà rencontré ma voisine, qui m’a apporté des biscuits.\n\n' +
    'Pour vous remercier, je vous invite à dîner chez moi le samedi 18, vers dix-neuf heures. ' +
    'Je prépare tout, vous apportez seulement votre bonne humeur !\n\n' +
    'À très bientôt,\nCamille',
};

export const EE_T2: ExamTask = {
  ...base,
  id: taskId('pe_short', '002'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b1',
  label: 'Expression écrite · Tâche 2',
  prompt:
    'TÂCHE 2 · lettre au comité d’un club (120 à 150 mots)\n\n' +
    'Vous êtes membre d’un club de natation depuis quatre ans. La piscine du club est fermée ' +
    'depuis cinq mois pour travaux, et la réouverture a été repoussée deux fois. ' +
    'Pendant ce temps, la cotisation mensuelle a continué d’être prélevée, sans autre solution proposée.\n\n' +
    'Écrivez au comité de direction du club, dont tous les membres liront votre lettre. ' +
    'RACONTEZ la situation et ce que vous avez déjà fait, puis DONNEZ VOTRE AVIS ' +
    'sur la manière dont le club l’a gérée, et expliquez pourquoi vous résiliez votre abonnement.',
  timingS: 1200,
  responseSpec: { kind: 'text', minWords: 120, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'deuxParties',
        label: 'Récit ET commentaire',
        maxPoints: 5,
        descriptors: [
          'Le texte fait les DEUX choses : il retrace la situation et il porte un jugement argumenté sur sa gestion.',
          'Le récit tient la chronologie : la fermeture, les deux reports, les prélèvements, les démarches déjà faites.',
          'Une lettre qui se contente de résilier, ou de protester, ne répond pas à la consigne.',
        ],
      },
      {
        key: 'destinataires',
        label: 'Adaptation aux lecteurs',
        maxPoints: 5,
        descriptors: [
          'La lettre s’adresse à un comité, donc à plusieurs personnes : formules d’appel et de politesse adaptées.',
          'La critique vise la gestion, non les personnes ; la demande finale est claire.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Temps du passé tenus sur plusieurs épisodes ; expression de l’opinion et de la cause.',
          'Registre écrit formel du début à la fin.',
        ],
      },
    ],
  },
  modelAnswer:
    'Mesdames et Messieurs les membres du comité,\n\n' +
    'Inscrit au club depuis quatre ans, je vous écris pour résilier mon abonnement.\n\n' +
    'La piscine est fermée depuis mai. On nous avait annoncé une réouverture en septembre, ' +
    'puis en novembre ; elle est maintenant prévue « au printemps ». ' +
    'Pendant ces cinq mois, ma cotisation a été prélevée chaque mois. ' +
    'J’ai écrit deux fois au secrétariat, sans réponse.\n\n' +
    'Je comprends que des travaux prennent du retard. En revanche, il me semble anormal ' +
    'de payer un service qui n’existe plus, sans qu’on nous propose un accès à une autre piscine ' +
    'ou une suspension des prélèvements. C’est ce silence, plus que la fermeture, ' +
    'qui me pousse à partir.\n\n' +
    'Je vous demande donc d’arrêter les prélèvements dès ce mois-ci ' +
    'et de me rembourser les cotisations depuis mai.\n\n' +
    'Veuillez agréer mes salutations distinguées.\n' +
    'Karim Benali',
};

export const EE_T3: ExamTask = {
  ...base,
  examinerNotes: NOTES_OPEN_C1,
  id: taskId('pe_short', '003'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'c1',
  label: 'Expression écrite · Tâche 3',
  prompt:
    'TÂCHE 3 · comparaison de deux points de vue (120 à 180 mots)\n\n' +
    'Deux contributions ont paru dans un débat sur la place de l’expertise dans la décision publique.\n\n' +
    'TEXTE A · « Lorsqu’une commune doit fixer la hauteur d’une digue, elle consulte des hydrologues, ' +
    'puis elle tranche. Trop souvent, elle tranche contre eux, parce qu’une digue haute coûte cher ' +
    'et que l’échéance électorale approche. Il faudrait au moins que l’avis des experts soit rendu public ' +
    'avant le vote, et que les élus qui s’en écartent aient à motiver leur choix par écrit. ' +
    'Ce n’est pas confisquer la décision : c’est obliger ceux qui décident à assumer ce qu’ils savaient. ' +
    'Une décision prise en connaissance de cause n’est pas moins démocratique ; ' +
    'elle est seulement plus difficile à faire oublier. »\n\n' +
    'TEXTE B · « On présente l’expertise comme un savoir neutre que la politique viendrait ensuite déformer. ' +
    'C’est oublier que toute expertise répond à une question, et que la question est déjà un choix. ' +
    'Demander aux hydrologues la hauteur d’une digue suppose qu’on a écarté l’idée de déplacer les habitations. ' +
    'Rendre leur avis public et contraignant, c’est donner aux experts le dernier mot ' +
    'dans un débat dont ils n’ont jamais eu le premier. La décision publique ne gagne rien ' +
    'à s’abriter derrière des chiffres : elle doit dire quelles valeurs elle préfère, ' +
    'et en répondre devant les citoyens. »\n\n' +
    'Comparez les deux points de vue, puis prenez position.',
  timingS: 1500,
  responseSpec: { kind: 'text', minWords: 120, maxWords: 180 },
  rubric: {
    criteria: [
      {
        key: 'restitution',
        label: 'Restitution des positions et de leurs raisons',
        maxPoints: 5,
        descriptors: [
          'Les deux thèses sont restituées avec leurs raisons, y compris la prémisse implicite de B : la question posée aux experts est déjà un arbitrage politique.',
          'La proposition de A est rendue avec précision : publicité de l’avis et obligation de motiver un écart, non un avis qui lierait les élus.',
          'Au niveau C1, les raisons sont dégagées et hiérarchisées, non simplement relevées dans l’ordre du texte.',
        ],
      },
      {
        key: 'comparaison',
        label: 'Comparaison critique',
        maxPoints: 5,
        descriptors: [
          'Le désaccord est situé avec exactitude : les deux textes observent le même écart entre avis des experts et décision, mais A y lit une dérive à corriger par la transparence, B un arbitrage de valeurs que l’expertise ne peut trancher ; ils divergent sur la neutralité de l’expertise et donc sur le remède.',
          'Le candidat perçoit que B réfute un avis « contraignant » que A ne réclame pas, et en tire une conséquence pour la discussion.',
          'Un texte qui résume A puis résume B sans les confronter ne dépasse pas la moitié des points.',
        ],
      },
      {
        key: 'position',
        label: 'Position personnelle argumentée et nuancée',
        maxPoints: 5,
        descriptors: [
          'Une position est prise et justifiée par un argument propre, pas par la seule adhésion à l’un des textes.',
          'L’objection la plus forte est intégrée et bornée : une concession explicite ne fait pas tomber la thèse.',
          'Une conclusion ferme le texte et répond à la question du débat.',
        ],
      },
      {
        key: 'synthese',
        label: 'Synthèse sans paraphrase',
        maxPoints: 5,
        descriptors: [
          'Aucune reprise phrase à phrase des documents : les idées sont condensées et reformulées.',
          'Les exemples des textes (la digue, le déplacement des habitations) sont mobilisés au service de l’argument, non recopiés.',
        ],
      },
      {
        key: 'langue',
        label: 'Étendue et maîtrise de la langue (C1)',
        maxPoints: 5,
        descriptors: [
          'Registre soutenu tenu ; lexique abstrait précis (arbitrage, motivation, neutralité, légitimité).',
          'Syntaxe variée et complexe : concession (encore faut-il, quand bien même), subjonctif, nominalisation, articulateurs logiques fins.',
          'Les erreurs sont rares et ne portent pas sur des structures courantes.',
        ],
      },
    ],
  },
  modelAnswer:
    'Les deux textes observent le même écart entre l’avis des experts et la décision des élus, ' +
    'mais ne l’interprètent pas de la même façon. Pour le premier, cet écart trahit souvent un calcul ' +
    'budgétaire ou électoral : il voudrait donc rendre l’avis public et obliger les élus à motiver par écrit ' +
    'tout choix qui s’en écarte, afin qu’ils assument ce qu’ils savaient. ' +
    'Le second récuse la neutralité même de l’expertise : la question posée aux spécialistes, ' +
    'en écartant d’emblée d’autres options, relève déjà d’un arbitrage.\n\n' +
    'Encore faut-il remarquer que B réfute une thèse plus forte que celle de A. ' +
    'Ce dernier ne réclame pas un avis contraignant, mais une obligation de justification, ' +
    'qui laisse le dernier mot aux élus.\n\n' +
    'Je rejoins donc A sur la publicité des avis, tout en retenant l’objection de B, ' +
    'qui en fixe la condition : rendre publics non seulement l’avis, mais aussi la question posée ' +
    'et les options écartées. C’est à ce prix que la transparence éclairerait le débat ' +
    'au lieu de le clore.',
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
    'L’examinateur vous pose des questions sur l’hiver et sur une activité que vous avez apprise ' +
    'ou que vous aimeriez apprendre. Répondez naturellement, et développez vos réponses : ' +
    'une phrase seule ne suffit pas.\n\n' +
    '· Aimez-vous l’hiver ? Que faites-vous quand il fait très froid ?\n' +
    '· Avez-vous déjà appris une activité d’hiver, comme le patinage ou le ski ?\n' +
    '· Si oui : comment s’est passé votre apprentissage ? Qui vous a aidé ?\n' +
    '· Si non : qu’est-ce qui vous en a empêché ?\n' +
    '· Qu’aimeriez-vous essayer l’hiver prochain ?',
  timingS: 120,
  responseSpec: { kind: 'audio', minDurationS: 60, maxDurationS: 150 },
  rubric: {
    criteria: [
      {
        key: 'developpement',
        label: 'Développement des réponses',
        maxPoints: 5,
        descriptors: [
          'Chaque question reçoit plus qu’une phrase : un exemple, une raison, un souvenir précis.',
          'Le récit d’apprentissage suit un ordre clair : le début, une difficulté, un progrès.',
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
          'Passé composé et imparfait pour le récit, conditionnel ou futur pour le projet.',
          'Le lexique du temps qu’il fait et des loisirs est disponible.',
        ],
      },
    ],
  },
  modelAnswer:
    'Oui, j’aime l’hiver, mais il m’a fallu du temps. Quand je suis arrivé, le premier hiver, ' +
    'je restais chez moi dès qu’il faisait moins quinze. Maintenant je sors quand même, ' +
    'avec de bonnes bottes et trois couches de vêtements.\n\n' +
    'L’année dernière, j’ai appris à patiner. Il y a une patinoire gratuite dans le parc ' +
    'à côté de chez moi, et ma voisine m’a proposé de venir avec elle le dimanche matin.\n\n' +
    'Au début, c’était difficile : je tombais tout le temps et j’avais peur des enfants ' +
    'qui allaient très vite autour de moi. Ma voisine me tenait la main pendant les premiers tours. ' +
    'Après un mois, je faisais le tour de la patinoire seul, et j’étais très fier.\n\n' +
    'L’hiver prochain, j’aimerais essayer le ski de fond. Un collègue m’a dit que c’est ' +
    'moins dangereux que le ski alpin et qu’on peut louer le matériel pour une journée. ' +
    'Je pense que je vais commencer en janvier.',
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
    'CHALET À LOUER · LAC MOIRAND\n' +
    'Chalet en bois au bord de l’eau, quatre couchages. Poêle à bois, cuisine équipée, ' +
    'canot à disposition. Location au week-end ou à la semaine, toute l’année. ' +
    'Accès par chemin forestier. Renseignements par téléphone auprès du propriétaire.\n\n' +
    'Vous voulez louer ce chalet avec des amis pour un week-end de février. ' +
    'Vous téléphonez au propriétaire. Posez les questions nécessaires ' +
    'pour savoir si le chalet vous convient et à quelles conditions vous pouvez le réserver.',
  // Prep is clocked SEPARATELY from the exchange (STANDARD-tcf §7). A runner
  // that folds the two into one countdown gives the candidate a shorter
  // interaction the better they prepare.
  prepS: 120,
  timingS: 330,
  responseSpec: { kind: 'audio', minDurationS: 120, maxDurationS: 240 },
  interlocutor: {
    opening: {
      id: 'open',
      text: 'Allô, oui, bonjour. C’est au sujet du chalet du lac Moirand ?',
      covers: 'ouverture',
      cues: [],
    },
    catchAll: {
      id: 'catch',
      text: 'Je ne pourrais pas vous le dire tout de suite. Je vérifie et je vous envoie la réponse par message ce soir.',
      covers: 'information non détenue',
      cues: [],
    },
    closing: {
      id: 'close',
      text: 'Très bien. Je vous envoie la confirmation par courriel dès que je reçois le dépôt. Bonne journée.',
      covers: 'clôture',
      cues: [],
    },
    answers: [
      {
        id: 'prix',
        text: 'Le week-end, du vendredi seize heures au dimanche quinze heures, coûte trois cent vingt dollars. À la semaine, c’est neuf cents dollars. Le ménage de fin de séjour est compris.',
        covers: 'le prix au week-end et à la semaine',
        cues: ['prix', 'combien', 'coute', 'tarif', 'dollars', 'cher', 'payer pour'],
      },
      {
        id: 'disponibilite',
        text: 'En février, il me reste deux week-ends : le premier et le dernier du mois. Les deux du milieu sont déjà réservés pour les vacances scolaires.',
        covers: 'les dates encore libres en février',
        cues: ['disponible', 'libre', 'fevrier', 'date', 'week-end', 'quand'],
      },
      {
        id: 'acces',
        text: 'En hiver, le chemin forestier est déneigé jusqu’au parking, à trois cents mètres du chalet. Le dernier bout se fait à pied ; je prête deux traîneaux pour les bagages.',
        covers: 'l’accès en hiver',
        cues: ['acces', 'route', 'chemin', 'neige', 'voiture', 'hiver', 'parking', 'arriver'],
      },
      {
        id: 'chauffage',
        text: 'Le chalet est chauffé au poêle à bois, avec un radiateur électrique d’appoint dans chaque chambre. Le bois est fourni, rangé sous l’abri à côté de la porte.',
        covers: 'le chauffage et le bois',
        cues: ['chauffage', 'chauffe', 'froid', 'bois', 'poele', 'electricite', 'radiateur'],
      },
      {
        id: 'couchages',
        text: 'Il y a un lit double et deux lits simples. Je peux ajouter un matelas, mais pas au-delà de cinq personnes, à cause de l’assurance.',
        covers: 'le nombre de personnes et de lits',
        cues: ['personnes', 'couchage', 'lits', 'dormir', 'amis', 'cinq', 'six', 'nombre'],
      },
      {
        id: 'animaux',
        text: 'Un chien est accepté, avec un supplément de quarante dollars pour le ménage. Les chats, non, à cause d’allergies dans ma famille.',
        covers: 'les animaux',
        cues: ['animaux', 'animal', 'chien', 'chat'],
      },
      {
        id: 'caution',
        text: 'Je demande un dépôt de cent dollars à la réservation, déduit du prix, et une caution de deux cents dollars, rendue après l’état des lieux.',
        covers: 'le dépôt et la caution',
        cues: ['caution', 'depot', 'acompte', 'paiement', 'reserver', 'reservation', 'avance'],
      },
      {
        id: 'annulation',
        text: 'Si vous annulez plus de trente jours avant, le dépôt est remboursé. Après, je le garde, sauf si le chemin est fermé par une tempête : là, je rembourse tout.',
        covers: 'les conditions d’annulation',
        cues: ['annuler', 'annulation', 'rembourse', 'tempete', 'meteo', 'empeche'],
      },
      {
        id: 'lac',
        text: 'En février, le lac est gelé, donc pas de canot. On peut patiner devant le chalet quand j’ai vérifié la glace. L’eau courante fonctionne toute l’année.',
        covers: 'le lac, le canot et l’eau en hiver',
        cues: ['canot', 'lac', 'glace', 'patiner', 'eau', 'activite', 'activites'],
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
          'Le candidat obtient ce dont il a besoin pour décider : prix, dates libres, nombre de personnes, accès en hiver.',
          'Il pense à ce que l’annonce ne dit pas : le chauffage, les conditions de réservation et d’annulation.',
        ],
      },
      {
        key: 'interaction',
        label: 'Conduite de l’échange',
        maxPoints: 5,
        descriptors: [
          'Le candidat réagit aux réponses (le canot inutilisable en février, la limite de cinq personnes) au lieu de dérouler une liste.',
          'Il conclut : il réserve une date, ou dit clairement pourquoi il ne réserve pas.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Formes interrogatives variées et polies (est-ce que, inversion, conditionnel de politesse).',
          'Les chiffres et les dates sont repris correctement.',
        ],
      },
    ],
  },
  modelAnswer:
    'Bonjour Monsieur, oui, je vous appelle pour le chalet du lac Moirand. ' +
    'Nous sommes quatre amis et nous voudrions le louer pour un week-end en février. ' +
    'Est-ce qu’il est encore libre ?\n\n' +
    'Le premier ou le dernier week-end, d’accord. Et combien coûte le week-end ? ' +
    'Trois cent vingt dollars, ménage compris, très bien.\n\n' +
    'Comment arrive-t-on au chalet en hiver ? Le chemin est déneigé jusqu’au parking, ' +
    'et ensuite trois cents mètres à pied. Avec vos traîneaux, ça ira.\n\n' +
    'Et le chauffage ? Il fait très froid en février. Un poêle et des radiateurs, ' +
    'et le bois est fourni, parfait.\n\n' +
    'L’annonce parle d’un canot : j’imagine qu’en février, ce n’est pas possible ? ' +
    'Ah, on peut patiner sur le lac, c’est encore mieux.\n\n' +
    'Pour réserver, comment est-ce que ça se passe ? Cent dollars de dépôt et une caution. ' +
    'Et si une tempête nous empêche de venir ? Vous remboursez tout, c’est rassurant.\n\n' +
    'Alors je réserve le dernier week-end de février. Je vous envoie le dépôt aujourd’hui. Merci beaucoup.',
};

export const EO_T3: ExamTask = {
  ...base,
  examinerNotes: NOTES_OPEN_C1,
  id: taskId('po_monologue', '002'),
  taskType: 'po_monologue',
  skill: 'PO',
  level: 'c1',
  label: 'Expression orale · Tâche 3',
  prompt:
    'TÂCHE 3 · expression d’un point de vue · environ 4 minutes 30 · sans préparation\n\n' +
    'Ceinture de sécurité obligatoire, taxes sur le tabac, âge minimum pour certains jeux : ' +
    'les pouvoirs publics encadrent souvent des choix qui ne semblent concerner ' +
    'que la personne qui les fait.\n\n' +
    'Une société doit-elle protéger les gens contre leurs propres choix, ' +
    'ou respecter leur liberté de prendre des risques pour eux-mêmes ?\n\n' +
    'Exposez votre point de vue et défendez-le.',
  timingS: 270,
  responseSpec: { kind: 'audio', minDurationS: 150, maxDurationS: 300 },
  rubric: {
    criteria: [
      {
        key: 'position',
        label: 'Position et nuance',
        maxPoints: 5,
        descriptors: [
          'Une position claire est prise sur l’ALTERNATIVE posée, et elle est nuancée par des critères explicites (irréversibilité, consentement réel, coût pour autrui), non par un « ça dépend » sans contenu.',
          'Les exemples de la consigne sont distingués plutôt que traités en bloc.',
          'Un exposé qui aligne le pour et le contre sans jamais trancher ne dépasse pas la moitié des points.',
        ],
      },
      {
        key: 'argumentation',
        label: 'Développement argumentatif',
        maxPoints: 5,
        descriptors: [
          'Au moins deux arguments distincts, chacun développé par un exemple ou une conséquence concrète.',
          'Le raisonnement s’élève au principe (autonomie, paternalisme, responsabilité collective) sans perdre le concret.',
        ],
      },
      {
        key: 'objection',
        label: 'Traitement de l’objection',
        maxPoints: 5,
        descriptors: [
          'L’objection la plus forte est restituée loyalement avant d’être traitée.',
          'Une concession est faite et bornée : ce qu’elle accorde ne fait pas tomber la thèse, et le candidat dit pourquoi.',
        ],
      },
      {
        key: 'organisation',
        label: 'Organisation sur la durée',
        maxPoints: 5,
        descriptors: [
          'Le propos tient environ quatre minutes et suit un plan perceptible : thèse, arguments, objection, conclusion.',
          'Les transitions sont marquées oralement (d’abord, en revanche, on m’objectera que, en somme).',
        ],
      },
      {
        key: 'langue',
        label: 'Étendue et maîtrise de la langue (C1)',
        maxPoints: 5,
        descriptors: [
          'Lexique abstrait précis et varié ; structures complexes disponibles à l’oral : hypothèse (conditionnel passé), concession, subjonctif.',
          'Débit fluide et spontané ; les reformulations servent la précision et non le remplissage.',
          'Les erreurs sont rares et vite corrigées.',
        ],
      },
    ],
  },
  modelAnswer:
    'La question est plus difficile qu’elle n’en a l’air, parce que les deux réponses extrêmes sont intenables. ' +
    'Une société qui respecterait tous les choix individuels, sans exception, laisserait les gens se blesser ' +
    'au nom d’une liberté qu’ils n’ont parfois pas vraiment exercée. Et une société qui protégerait chacun ' +
    'contre lui-même deviendrait vite étouffante : il faudrait interdire l’alpinisme, la moto, ' +
    'et pourquoi pas la pâtisserie.\n\n' +
    'Ma position est donc la suivante : l’État a le droit d’intervenir, mais à certaines conditions, ' +
    'et ces conditions doivent être explicites.\n\n' +
    'La première, c’est l’irréversibilité. Quand un choix peut avoir des conséquences définitives, ' +
    'une blessure grave, une dépendance, une contrainte légère se justifie. C’est le cas de la ceinture : ' +
    'elle coûte trois secondes et elle évite des drames qu’on ne répare pas.\n\n' +
    'La deuxième, c’est la qualité du choix lui-même. Un adolescent qui commence à fumer à quatorze ans, ' +
    'sous l’influence de ses amis, a-t-il vraiment choisi ? Je ne le crois pas. ' +
    'Le protéger contre une décision qu’il n’aurait pas prise en connaissance de cause, ' +
    'ce n’est pas le priver de liberté, c’est plutôt lui en rendre les conditions.\n\n' +
    'La troisième, c’est le coût pour autrui, qui n’est jamais tout à fait absent même d’un risque ' +
    'qu’on dit personnel. L’âge minimum pour entrer dans un casino ou miser en ligne n’est pas seulement ' +
    'là pour protéger le joueur de dix-sept ans contre lui-même : derrière un jeune endetté, ' +
    'il y a souvent une famille qui finit par payer, un employeur qui perd un salarié fiable, ' +
    'parfois une collectivité qui prend en charge les conséquences. Interdire l’accès avant un certain âge ' +
    'revient à retarder un choix jusqu’au moment où la personne peut en mesurer le coût, ' +
    'pour elle et pour les autres, et non à le lui refuser pour toujours.\n\n' +
    'On m’objectera, et l’objection est sérieuse, que ce raisonnement peut justifier presque tout. ' +
    'Qui décide qu’un choix n’est pas éclairé ? On risque de traiter les adultes comme des enfants ' +
    'et de remplacer leur jugement par celui de l’administration. Prenons un exemple concret : ' +
    'si l’on suit cette logique jusqu’au bout, pourquoi ne pas interdire aussi le sucre, l’alcool ' +
    'ou les sports de montagne, qui causent chacun leur lot de drames évitables ? ' +
    'Je reconnais ce danger, et c’est précisément pour l’éviter que je limite l’intervention ' +
    'aux cas où l’irréversibilité est manifeste et où le consentement est le plus fragile, ' +
    'l’adolescence ou la dépendance, et non à toute activité simplement risquée. ' +
    'C’est pourquoi je préfère, chaque fois que c’est possible, des mesures qui informent ou qui découragent ' +
    'plutôt que des interdictions. Une taxe sur le tabac laisse le fumeur libre de fumer ; ' +
    'elle lui rappelle seulement le coût de son choix, un coût que la collectivité supporte d’ailleurs en partie.\n\n' +
    'Le casque de moto illustre bien cette logique. Là où son port est resté facultatif, ' +
    'les services d’urgence rapportent davantage de traumatismes crâniens graves, souvent chez des conducteurs ' +
    'jeunes qui n’avaient pas encore l’expérience pour évaluer le risque qu’ils prenaient. ' +
    'Là où il est devenu obligatoire, ces blessures ont nettement reculé sans que la pratique de la moto, ' +
    'elle, ait disparu. L’obligation n’a donc pas supprimé la liberté de rouler ; ' +
    'elle a seulement retiré une option qui, dans les faits, ne profitait jamais à personne.\n\n' +
    'Il y a enfin une limite qu’on oublie souvent : la protection ne doit pas devenir une façon ' +
    'de culpabiliser les plus fragiles. Multiplier les règles sans offrir d’aide, ' +
    'c’est finir par punir ceux qui avaient déjà le moins de marge.\n\n' +
    'En somme, je ne dirais ni que l’État doit protéger les gens contre eux-mêmes, ' +
    'ni qu’il doit les abandonner à leurs choix. Il doit justifier chaque intervention ' +
    'par un critère clair, l’irréversibilité ou l’absence de consentement réel, ' +
    'et préférer l’incitation à l’interdiction. Si l’on s’en était toujours tenu là, ' +
    'je crois que ce débat serait beaucoup moins passionné qu’il ne l’est aujourd’hui.',
};
