// TEF Canada blanc-06 — the open tasks: EE A and B, EO A and B.
//
// Four tasks, four marks, all to full human review. The rubric and the model
// answer ARE the marking instrument.
//
// DECISION 41: EE Section B and EO Section B are pitched at C1 and carry
// `level: 'c1'`, so a failed attempt routes PE@c1 → c1.10 and PO@c1 → c1.09
// (EXAM_PREP_TARGETS, once those lessons publish). They keep the real TEF task
// format and timing: a lettre argumentée of 200 words or more in 35 minutes,
// and a ten-minute « convaincre » with an examiner who objects. What makes them
// C1 is the demand, the rubric and the model answer: a principled objection
// that must be conceded in part and then answered, argument hierarchy,
// modalisation, register control and C1 syntax. Section A of each stays at the
// blueprint's level (b1), as in papers 1-5.
//
// EO Section A carries a recorded interlocutor. Every answer must be reachable
// from this task's own model answer, checked by ../tef/paper-rules.ts.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, FORMAT_VERSION, VARIANT, NOTES_OPEN, taskId } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_OPEN,
};

/** Added to the two C1 tasks so a reviewer and the grader see the target. */
const C1_NOTE =
  'Tâche de niveau C1 (décision 41) : le format, la durée et la longueur minimale sont ceux de la ' +
  'section B du TEF Canada ; la grille et la réponse modèle visent le C1. Une copie de bon niveau B2 ' +
  'qui remplit la tâche sans nuance ni traitement de l’objection de principe ne dépasse pas le milieu ' +
  'des critères « objection » et « nuance ».';

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
    '« Onze vélos volés dans un local pourtant fermé à clé »\n\n' +
    'Dans la nuit de samedi à dimanche, onze bicyclettes ont disparu du local à vélos d’un immeuble de ' +
    'la rue des Érables, à Saint-Varin. La porte du local était fermée à clé.\n\n' +
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
          'La suite se rattache au titre et au début donnés : même immeuble, même nuit, onze vélos.',
          'Rien ne contredit le début : la porte était fermée à clé, le vol a eu lieu dans la nuit de samedi à dimanche.',
        ],
      },
      {
        key: 'apport',
        label: 'Apport d’informations',
        maxPoints: 5,
        descriptors: [
          'Des informations nouvelles sont apportées : mode opératoire, découverte, valeur, enquête, mesures prises.',
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
    'Aucune trace d’effraction n’a été relevée sur la porte, ce qui oriente les enquêteurs vers ' +
    'l’utilisation d’une clé ou d’un double. Selon le gestionnaire de l’immeuble, une vingtaine de clés ' +
    'du local circulaient, dont certaines remises à d’anciens locataires et jamais récupérées. Les vélos ' +
    'volés, dont quatre à assistance électrique, représenteraient une valeur totale d’environ douze mille ' +
    'dollars. La caméra du hall n’a filmé que deux silhouettes encapuchonnées, vers trois heures du ' +
    'matin. Les résidents ont découvert le vol au réveil et une plainte collective a été déposée lundi. ' +
    'En attendant, la serrure a été changée et les nouvelles clés ne sont remises que contre signature.',
};

/* ═══ EE Section B — Lettre argumentée (C1) ═══════════════════════════════ */
//
// Two-sided by design: the council's demand for measurable results is
// legitimate, so a C1 letter has to concede it before answering it. A letter
// that simply calls the refusal unfair is B1-B2 whatever its vocabulary.

export const EE_B: ExamTask = {
  ...base,
  id: taskId('pe_essay', '001'),
  taskType: 'pe_essay',
  skill: 'PE',
  level: 'c1',
  label: 'Section B',
  prompt:
    'SECTION B · 35 minutes\n\n' +
    'Depuis trois ans, l’association « Parlons Val-Brumel » anime chaque semaine un cercle de conversation ' +
    'où des personnes nouvellement arrivées pratiquent le français avec des bénévoles du quartier. Le ' +
    'conseil municipal vient de refuser sa demande de subvention de 4 000 $. Motif : « Les fonds publics ' +
    'doivent financer des actions dont les retombées sont mesurables. Les bienfaits d’un cercle de ' +
    'conversation ne le sont pas. »\n\n' +
    'Membre de l’association, vous écrivez au conseil municipal pour demander le réexamen de cette ' +
    'décision. Rédigez une lettre argumentée de 200 mots au moins : prenez position, développez au moins ' +
    'trois arguments appuyés sur des exemples, et répondez à l’argument selon lequel les fonds publics ' +
    'doivent financer des actions aux retombées mesurables. Le ton est celui d’un recours adressé à une ' +
    'institution : ferme, nuancé et courtois.',
  timingS: 2100,
  responseSpec: { kind: 'text', minWords: 200 },
  examinerNotes: [...NOTES_OPEN, C1_NOTE],
  rubric: {
    criteria: [
      {
        key: 'position',
        label: 'Position et architecture argumentative',
        maxPoints: 5,
        descriptors: [
          'Une demande précise (le réexamen) est formulée d’entrée et tenue jusqu’à la conclusion.',
          'Au moins trois arguments distincts, hiérarchisés et articulés, chacun développé par un exemple concret ; la conclusion propose une issue sans ajouter d’argument nouveau.',
        ],
      },
      {
        key: 'objection',
        label: 'Traitement de l’objection',
        maxPoints: 5,
        descriptors: [
          'L’argument du conseil (« les fonds publics doivent financer des actions aux retombées mesurables ») est restitué fidèlement et sa part de légitimité est reconnue.',
          'La réponse le nuance au lieu de le nier : distinction entre ce qui est difficile à chiffrer et ce qui ne compte pas, ou proposition d’indicateurs adaptés.',
        ],
      },
      {
        key: 'nuance',
        label: 'Nuance et registre',
        maxPoints: 5,
        descriptors: [
          'Modalisation et concession maîtrisées : le scripteur concède, restreint, hiérarchise, sans affaiblir sa position.',
          'Registre soutenu d’un recours : formules d’appel et de clôture adaptées à une institution, vouvoiement, ton ferme sans agressivité ni supplication.',
        ],
      },
      {
        key: 'lexique',
        label: 'Étendue et précision du lexique',
        maxPoints: 5,
        descriptors: [
          'Lexique précis et varié, y compris abstrait (retombées, indicateurs, réexamen, collectivité), sans répétitions gênantes.',
          'Connecteurs logiques fins et variés (or, aussi, dès lors, non seulement… mais), employés à bon escient.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction morphosyntaxique',
        maxPoints: 5,
        descriptors: [
          'Syntaxe complexe maîtrisée : subjonctif après les expressions de jugement, hypothèse au conditionnel, inversion après « aussi », relatives composées.',
          'Les erreurs sont rares et ne gênent jamais la lecture ; la longueur minimale est respectée.',
        ],
      },
    ],
  },
  modelAnswer:
    'Madame la Maire,\nMesdames et Messieurs les membres du conseil,\n\n' +
    'Par la présente, je sollicite le réexamen de la décision par laquelle le conseil a refusé à ' +
    'l’association « Parlons Val-Brumel » la subvention de 4 000 $ demandée pour son cercle de conversation.\n\n' +
    'Je ne conteste pas le principe qui fonde ce refus. Qu’une municipalité veuille savoir à quoi sert ' +
    'l’argent public est non seulement légitime, mais relève de sa responsabilité. Ce que je conteste, ' +
    'c’est l’idée que nos résultats échapperaient à toute mesure et, plus encore, la confusion entre ce ' +
    'qui est difficile à chiffrer et ce qui ne compte pas.\n\n' +
    'D’abord, une partie de nos retombées se mesure fort bien. En trois ans, le cercle a accueilli plus de ' +
    'cent trente personnes ; d’après nos registres, une sur trois a ensuite obtenu un emploi ou commencé ' +
    'une formation qui exigeait un niveau de français attesté. Nous aurions dû présenter ces chiffres plus ' +
    'clairement dans notre dossier, je le reconnais volontiers.\n\n' +
    'Ensuite, ce qui ne se compte pas n’en est pas moins réel. Lorsqu’une mère de famille ose, pour la ' +
    'première fois, appeler seule l’école de son enfant, aucun tableau ne l’enregistre ; c’est pourtant ce ' +
    'type de progrès qui épargne ensuite à la collectivité des démarches bien plus coûteuses.\n\n' +
    'Enfin, le critère retenu, s’il était appliqué avec constance, priverait de soutien les bibliothèques ' +
    'de quartier ou les fêtes de voisinage, dont personne ne songe à exiger un rendement chiffré.\n\n' +
    'Aussi vous proposerais-je, plutôt qu’un refus, une subvention assortie d’indicateurs que nous ' +
    'définirions ensemble : assiduité, parcours des participants, entretiens menés six mois après leur ' +
    'départ du cercle. L’exigence de résultats n’y perdrait rien, et le cercle pourrait poursuivre son travail.\n\n' +
    'Dans l’attente de votre réponse, je vous prie d’agréer, Madame la Maire, Mesdames et Messieurs, ' +
    'l’expression de ma haute considération.\n\n' +
    'Camille Dorval, bénévole de l’association « Parlons Val-Brumel »',
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
    'COURS DE CANOT · initiation\n\n' +
    'Base nautique de Lac-Ombreuse. Quatre séances le samedi matin, en juin.\n' +
    'Canots et gilets de sauvetage fournis. Places limitées, inscription au service des loisirs.\n\n' +
    'Ce cours vous intéresse. Posez à votre interlocuteur toutes les questions nécessaires pour savoir ' +
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
          'Les informations utiles sont demandées : places, dates, horaires, prix, natation, âge, tenue, groupe, météo, inscription, annulation.',
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
    'Bonjour, je vous appelle au sujet du cours de canot pour débutants. Est-ce qu’il reste des places ? ' +
    'Quelles sont les dates exactes en juin ? Les séances commencent à quelle heure, et elles durent ' +
    'combien de temps ? Combien coûtent les quatre séances ? Est-ce qu’il faut savoir nager ? ' +
    'Mon neveu voudrait venir aussi : c’est ouvert aux enfants, à partir de quel âge ? ' +
    'Qu’est-ce que je dois apporter ou porter ? Vous êtes combien de moniteurs pour le groupe ? ' +
    'Et s’il pleut ou s’il y a beaucoup de vent ? Comment est-ce que je m’inscris, et jusqu’à quand ? ' +
    'Et si je dois annuler, vous remboursez ?',
  interlocutor: {
    opening: {
      id: 'open',
      text: 'Service des loisirs de Lac-Ombreuse, bonjour. Vous appelez pour le cours de canot ? Je vous écoute.',
      covers: '',
      cues: [],
    },
    answers: [
      {
        id: 'places',
        text: 'Il reste trois places. Le groupe est limité à huit, et nous avons déjà cinq inscrits.',
        covers: 'les places restantes',
        cues: ['reste des places', 'places disponibles', 'complet', 'encore de la place'],
      },
      {
        id: 'dates',
        text: 'Ce sont les quatre samedis de juin, à partir du premier samedi du mois.',
        covers: 'les dates des séances',
        cues: ['quelles dates', 'dates exactes', 'quel jour', 'commence quand'],
      },
      {
        id: 'horaire',
        text: 'De neuf heures à onze heures et demie. Soyez là un quart d’heure avant pour les gilets.',
        covers: 'l’horaire et la durée des séances',
        cues: ['quelle heure', 'horaire', 'combien de temps', 'duree'],
      },
      {
        id: 'prix',
        text: 'Cent vingt dollars les quatre séances, et quatre-vingts dollars pour les moins de seize ans.',
        covers: 'le prix',
        cues: ['combien coutent', 'combien coute', 'prix', 'tarif'],
      },
      {
        id: 'natation',
        text: 'Oui, il faut savoir nager cinquante mètres. On vous demande une attestation, ou un petit test le premier jour.',
        covers: 'l’obligation de savoir nager',
        cues: ['savoir nager', 'nager', 'natation'],
      },
      {
        id: 'age',
        text: 'À partir de douze ans, et les moins de seize ans viennent avec un adulte inscrit.',
        covers: 'l’âge minimum',
        cues: ['quel age', 'age minimum', 'enfants'],
      },
      {
        id: 'tenue',
        text: 'Des vêtements qui peuvent être mouillés, des chaussures fermées et une bouteille d’eau. Le reste est fourni.',
        covers: 'ce qu’il faut apporter et porter',
        cues: ['apporter', 'porter', 'tenue', 'vetements'],
      },
      {
        id: 'groupe',
        text: 'Deux moniteurs pour huit participants, et un bateau de sécurité reste sur le lac pendant la séance.',
        covers: 'l’encadrement du groupe',
        cues: ['moniteurs', 'groupe', 'combien de personnes', 'encadrement'],
      },
      {
        id: 'meteo',
        text: 'La pluie ne nous arrête pas. En cas d’orage ou de vent fort, la séance est reportée au dimanche matin.',
        covers: 'ce qui se passe en cas de mauvais temps',
        cues: ['pleut', 'vent', 'meteo', 'mauvais temps', 'orage'],
      },
      {
        id: 'inscription',
        text: 'Au service des loisirs, à l’hôtel de ville, ou en ligne, jusqu’au 31 mai.',
        covers: 'comment et jusqu’à quand s’inscrire',
        cues: ['inscris', 'inscrire', 'inscription', 'jusqu a quand'],
      },
      {
        id: 'annulation',
        text: 'Remboursement complet jusqu’à une semaine avant la première séance. Après, nous gardons trente dollars.',
        covers: 'les conditions d’annulation',
        cues: ['annuler', 'rembourse', 'remboursez', 'annulation'],
      },
    ],
    catchAll: {
      id: 'catch',
      text: 'Ça, je ne l’ai pas sous les yeux. Je peux demander au moniteur et vous rappeler.',
      covers: '',
      cues: [],
    },
    closing: {
      id: 'close',
      text: 'Très bien. Si vous avez d’autres questions, n’hésitez pas à rappeler. Bonne journée.',
      covers: '',
      cues: [],
    },
  },
};

/* ═══ EO Section B — Convaincre (C1) ══════════════════════════════════════ */
//
// The ladder's fourth rung is a principled objection (« c’est le travail des
// pouvoirs publics ») that cannot be answered by repeating the brief. A C1
// performance concedes what is right in it and reframes; a B2 performance
// restates the benefits.

export const EO_B: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  level: 'c1',
  label: 'Section B',
  prompt:
    'SECTION B · 10 minutes\n\n' +
    'JUMELAGE « VOISINS DE PREMIÈRE ANNÉE » · centre communautaire de Lac-Ombreuse\n\n' +
    'Le centre forme des binômes entre une personne arrivée dans la région depuis moins d’un an et un ' +
    'résident de longue date. Deux heures par mois pendant un an : une sortie, une démarche, un café. ' +
    'Une formation de trois heures est offerte aux bénévoles. Aucune compétence particulière demandée.\n\n' +
    'Un ami ou une amie qui vit dans la région depuis longtemps hésite à s’engager. Présentez-lui le ' +
    'programme et convainquez-le ou convainquez-la d’y participer. Ses objections seront de plus en plus ' +
    'sérieuses : répondez-y en nuançant, en concédant ce qui doit l’être et en appuyant votre avis sur des ' +
    'exemples précis.',
  timingS: 600,
  prepS: 120,
  responseSpec: { kind: 'audio', minDurationS: 120, maxDurationS: 420 },
  examinerNotes: [
    ...NOTES_OPEN,
    C1_NOTE,
    'ÉCHELLE D’OBJECTIONS attendue, du plus faible au plus fort : (1) « je n’ai pas le temps » : deux ' +
    'heures par mois, sur un an ; (2) « je ne saurai pas quoi faire, je ne suis pas travailleur social » : ' +
    'aucune compétence demandée, une formation de trois heures, et le rôle est celui d’un voisin, pas ' +
    'd’un professionnel ; (3) « je vais finir par tout faire à sa place » : le format (une sortie, une ' +
    'démarche, un café) est celui d’un accompagnement, et accompagner n’est pas faire à la place ; ' +
    '(4) OBJECTION DE PRINCIPE : « l’accueil des nouveaux arrivants, c’est le travail des pouvoirs publics ; ' +
    'en le faisant bénévolement, on les dispense de faire leur part ». Réponse de niveau C1 attendue : ' +
    'concéder ce qui est juste (les services publics doivent assurer leur part), puis distinguer ce ' +
    'qu’une institution fournit (des services, des procédures) de ce qu’elle ne peut pas fournir (un ' +
    'réseau, des codes implicites, le fait d’être connu de quelqu’un), et conclure sur la ' +
    'complémentarité plutôt que sur la substitution. ' +
    'Un candidat qui ne traite pas l’objection de principe ne dépasse pas le milieu de l’échelle ' +
    '« adaptation » ; un candidat qui la balaie sans rien concéder ne dépasse pas le milieu de « nuance ».',
  ],
  rubric: {
    criteria: [
      {
        key: 'presentation',
        label: 'Présentation du programme',
        maxPoints: 5,
        descriptors: [
          'Les informations du document sont transmises exactement : binôme, moins d’un an, deux heures par mois pendant un an, formation de trois heures, aucune compétence demandée.',
          'Rien n’est inventé ni promis au-delà de ce que le document annonce.',
        ],
      },
      {
        key: 'argumentation',
        label: 'Argumentation et exemples',
        maxPoints: 5,
        descriptors: [
          'Des arguments hiérarchisés et enchaînés, chacun appuyé sur un exemple précis et vraisemblable.',
          'Les bénéfices sont rattachés à l’interlocuteur et à la personne accueillie, non énoncés dans l’abstrait.',
        ],
      },
      {
        key: 'adaptation',
        label: 'Adaptation aux objections',
        maxPoints: 5,
        descriptors: [
          'Chaque objection reçoit une réponse ajustée, qui reprend les mots de l’interlocuteur au lieu de répéter le document.',
          'L’échelle d’objections est parcourue au-delà de la première, jusqu’à l’objection de principe sur le rôle des pouvoirs publics.',
        ],
      },
      {
        key: 'nuance',
        label: 'Nuance et registre',
        maxPoints: 5,
        descriptors: [
          'Concède ce qui est juste dans l’objection de principe avant d’y répondre ; distingue, restreint, reformule (« je te l’accorde », « encore faut-il », « ce n’est pas tant… que »).',
          'Registre adapté à un proche, familier sans relâchement : tutoiement constant, précision conservée.',
        ],
      },
      {
        key: 'langue',
        label: 'Étendue, correction et fluidité',
        maxPoints: 5,
        descriptors: [
          'Gamme C1 : subjonctif, conditionnel passé, hypothèse, mise en relief ; lexique précis de l’accueil et de l’engagement.',
          'Discours suivi et naturel ; les autocorrections ne gênent pas la compréhension.',
        ],
      },
    ],
  },
  modelAnswer:
    'Tu sais, le centre communautaire lance un jumelage qui s’appelle « Voisins de première année », et ' +
    'j’ai tout de suite pensé à toi. Le principe est simple : on forme un binôme entre quelqu’un qui est ' +
    'arrivé dans la région depuis moins d’un an et quelqu’un qui, comme toi, y vit depuis longtemps. Deux ' +
    'heures par mois, pendant un an : une sortie, une démarche, un café.\n' +
    'Tu me dis que tu n’as pas le temps. Je l’entends, mais regarde ce qu’on te demande réellement : deux ' +
    'heures par mois. C’est moins que le temps que tu passes à la quincaillerie le samedi, et c’est toi qui ' +
    'fixes le moment avec la personne.\n' +
    'Tu ajoutes que tu ne saurais pas quoi faire, que tu n’es pas travailleur social. Justement, personne ' +
    'ne te le demande. Aucune compétence particulière n’est exigée, et il y a une formation de trois ' +
    'heures pour les bénévoles. Ce qu’on attend de toi, ce n’est pas une expertise, c’est ce que tu sais ' +
    'déjà : où l’on trouve un médecin qui prend de nouveaux patients, comment on s’habille en janvier, ' +
    'à qui l’on s’adresse quand le propriétaire ne répond pas.\n' +
    'Tu crains de finir par tout faire à sa place. C’est une vraie question, et le format y répond en ' +
    'partie : une démarche, ce n’est pas remplir le formulaire pour l’autre, c’est s’asseoir à côté de ' +
    'lui pendant qu’il le remplit. Accompagner n’est pas se substituer.\n' +
    'Reste ton objection de fond, et c’est la plus sérieuse : selon toi, l’accueil des nouveaux arrivants ' +
    'relève des pouvoirs publics, et en le faisant bénévolement, on les dispenserait de faire leur part. ' +
    'Je te l’accorde volontiers sur un point : il serait inacceptable que des bénévoles remplacent des ' +
    'services qui doivent exister. Mais encore faut-il voir ce que ces services peuvent offrir. Une ' +
    'institution peut fournir des cours, des formulaires, des guichets. Elle ne peut pas fournir un ' +
    'voisin. Elle ne peut pas expliquer les codes que personne n’écrit nulle part, ni faire en sorte ' +
    'qu’un nouvel arrivant soit connu de quelqu’un dans sa rue. Ce n’est donc pas tant une substitution ' +
    'qu’un complément, et c’est précisément ce que l’État ne saurait faire à notre place.\n' +
    'Moi, quand je suis arrivé ici, si quelqu’un m’avait simplement montré comment fonctionnait le ' +
    'déneigement de la rue, j’aurais évité une contravention et un hiver franchement solitaire. Essaie ' +
    'au moins la formation : tu décideras ensuite, en connaissance de cause.',
};
