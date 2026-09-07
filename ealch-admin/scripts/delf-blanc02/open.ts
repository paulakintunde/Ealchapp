// DELF B2 blanc-02 — Production écrite et Production orale. 25 points each.
//
// ── The PO draw, and what is not represented ────────────────────────────────
//
// The bank draws TWO trigger documents per paper and the candidate chooses one.
// There is no schema representation for that (TOPICS-delf-b2 §9.2, still
// unresolved), so this paper does what blanc-01 did: authors the drawn document
// (DELF-112, keystroke monitoring) and holds the second (DELF-119, benches
// nobody can lie down on) in the ledger as spent. When the schema grows a
// two-document PO task, both are already reserved to this paper and no other.
//
// ── The PE shape rotates ────────────────────────────────────────────────────
//
// blanc-01's writing task was a `letter`. This one is a `debate` — a
// contribution to a public consultation — because TOPICS-delf-b2 asks the shape
// to rotate so no pack defaults to one form of writing.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_OPEN, taskId } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_OPEN,
};

/* ═══ PRODUCTION ÉCRITE — 25 points ═══════════════════════════════════════ */
//
// DELF-104 · a regional tourist tax, put out to public consultation.
//
// The prompt carries the four things the bank requires of it: the situation,
// the candidate's role, the addressee, and the purpose. A prompt missing the
// role produces an essay rather than a contribution, and the grid cannot mark
// register on an essay.

export const PE_T1: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b2',
  label: 'Production écrite',
  prompt:
    'PRODUCTION ÉCRITE · 25 points · 60 minutes\n\n' +
    'Votre région met en consultation publique un projet de taxe de séjour ' +
    'de deux euros par nuit et par personne, destinée à financer l’entretien ' +
    'des sites naturels les plus fréquentés.\n\n' +
    'Vous vivez dans une commune concernée et vous participez à la consultation. ' +
    'Vous rédigez une contribution argumentée destinée à être publiée ' +
    'avec les autres réponses sur le site de la région.\n\n' +
    'Prenez position sur le projet, appuyez-vous sur au moins un argument ' +
    'que vous concédez à la partie adverse, et proposez une modification précise. ' +
    '250 mots minimum.',
  timingS: 3600,
  responseSpec: { kind: 'text', minWords: 250 },
  modelAnswer:
    'Je soutiens le principe de cette taxe et je conteste la forme qui nous est proposée.\n\n' +
    'Le besoin est réel et il serait malhonnête de le nier. Les sentiers du plateau ont été ' +
    'refaits deux fois en six ans, et ce sont les habitants qui les ont payés par l’impôt local, ' +
    'alors que la fréquentation qui les use vient d’ailleurs. Deux euros par nuit ne dissuadera ' +
    'personne de venir : c’est le prix d’un café, et aucune des régions voisines qui l’ont ' +
    'instaurée n’a vu sa fréquentation reculer.\n\n' +
    'J’accorde volontiers à ceux qui s’y opposent que le raisonnement a une faiblesse. ' +
    'Une taxe uniforme frappe de la même manière la famille qui vient une semaine en camping ' +
    'et le visiteur qui loge trois nuits à l’hôtel. Rapportée au budget du séjour, ' +
    'elle pèse deux fois plus sur la première. Ce n’est pas un détail et je ne l’écarte pas.\n\n' +
    'C’est pourquoi je propose une modification précise plutôt qu’un rejet. ' +
    'Que le montant soit proportionnel au prix de la nuitée, comme il l’est dans plusieurs régions, ' +
    'et non fixé à deux euros pour tous. Le rendement resterait comparable, ' +
    'l’effet sur les séjours les plus modestes serait réduit, ' +
    'et le projet perdrait son principal argument d’opposition.\n\n' +
    'J’ajoute une demande qui ne coûte rien : que la région publie chaque année ' +
    'le montant collecté et les travaux financés. Une taxe affectée dont personne ne vérifie ' +
    'l’affectation devient en quelques années une recette ordinaire, ' +
    'et c’est ainsi que ce type de projet perd le soutien de ceux qui l’avaient accepté.',
  rubric: {
    criteria: [
      {
        key: 'consigne',
        label: 'Respect de la consigne',
        maxPoints: 5,
        descriptors: [
          'Une contribution à une consultation, pas une lettre ni une dissertation : le destinataire est public et le texte est destiné à être lu par d’autres contributeurs.',
          'Les trois éléments demandés sont présents : une position, une concession explicite, une modification précise.',
          'Une copie qui prend position et ne concède rien perd ce point même si l’argumentation est bonne.',
        ],
      },
      {
        key: 'argumentation',
        label: 'Qualité de l’argumentation',
        maxPoints: 6,
        descriptors: [
          'La position est soutenue par des raisons, non par des affirmations répétées.',
          'La concession porte sur un point réel qui coûte quelque chose à la position défendue.',
          'Une concession purement rhétorique, immédiatement annulée par « mais », ne compte pas.',
        ],
      },
      {
        key: 'proposition',
        label: 'Précision de la proposition',
        maxPoints: 4,
        descriptors: [
          'La modification est assez précise pour être mise en œuvre : un mécanisme, pas une intention.',
          '« Il faudrait mieux répartir » n’est pas une proposition ; « proportionnel au prix de la nuitée » en est une.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et connecteurs',
        maxPoints: 4,
        descriptors: [
          'Le texte progresse : la concession prépare la proposition au lieu de flotter à côté.',
          'Les connecteurs marquent la concession et l’opposition sans les confondre.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction lexicale et grammaticale',
        maxPoints: 6,
        descriptors: [
          'Le registre est soutenu et constant : une contribution publique, non un message.',
          'Les erreurs ne gênent pas la lecture et ne portent pas sur les structures de la concession.',
        ],
      },
    ],
  },
};

/* ═══ PRODUCTION ORALE — 25 points ════════════════════════════════════════ */

export const PO_T1: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  level: 'b2',
  label: 'Production orale · Monologue suivi',
  prompt:
    'PRODUCTION ORALE · 25 points · 30 minutes de préparation, 20 minutes de passation\n\n' +
    'Phase 1 · Monologue suivi (5 à 7 minutes)\n\n' +
    'Dégagez le problème soulevé par le document ci-dessous, ' +
    'puis présentez votre opinion sur ce sujet de manière claire et argumentée. ' +
    'Vous défendrez ensuite votre point de vue au cours d’un débat avec l’examinateur.\n\n' +
    'DOCUMENT\n\n' +
    'ENREGISTRER LA FRAPPE, ET APPELER CELA LA SÉCURITÉ\n\n' +
    'Une société de services financiers de Brévane a installé en janvier un logiciel ' +
    'qui enregistre la frappe au clavier de ses quatre-vingts salariés. ' +
    'La direction annonce la mesure et la justifie : en octobre dernier, ' +
    'un fichier de clients a quitté l’entreprise, et six semaines d’enquête ' +
    'n’ont pas permis de savoir par où.\n\n' +
    'Le logiciel ne lit pas les messages, précise la direction : il enregistre ' +
    'les volumes, les horaires et les copies vers des supports externes. ' +
    'Les données sont conservées trente jours et consultables seulement ' +
    'sur signalement d’un incident.\n\n' +
    'Deux salariés sur trois ont signé une lettre demandant le retrait du dispositif. ' +
    '« On ne nous a pas demandé notre avis, on nous l’a annoncé », résume l’une des signataires. ' +
    'La direction répond qu’une consultation n’aurait rien changé à l’obligation légale ' +
    'de protéger les données des clients, et qu’un dispositif annoncé ' +
    'vaut mieux qu’une surveillance discrète.',
  // Thirty minutes with the document, before the first word is spoken. It is a
  // real part of the épreuve and a runner that folds it into the speaking clock
  // gives the better-prepared candidate less time to speak.
  prepS: 1800,
  timingS: 420,
  responseSpec: { kind: 'audio', minDurationS: 300, maxDurationS: 420 },
  modelAnswer:
    'Le document ne pose pas la question de savoir si la surveillance est bonne ou mauvaise. ' +
    'Il met face à face deux obligations que l’entreprise a réellement : protéger les données ' +
    'de ses clients, ce que la loi lui impose, et respecter ses salariés, ce que la loi lui impose aussi. ' +
    'Le problème est qu’elle a choisi de remplir la première sans discuter la seconde, ' +
    'et que sa justification la plus solide, un dispositif annoncé vaut mieux qu’une surveillance discrète, ' +
    'compare sa mesure à quelque chose de pire plutôt qu’à ce qui était possible.\n\n' +
    'Je considère que le dispositif est défendable dans son principe et mal construit dans sa forme. ' +
    'Défendable, parce qu’une fuite a réellement eu lieu et que six semaines d’enquête n’ont rien donné : ' +
    'ne rien faire, c’est accepter que la prochaine fuite soit également introuvable. ' +
    'Mal construit, parce que l’entreprise a présenté un outil déjà choisi. ' +
    'Une consultation n’aurait pas supprimé l’obligation légale, mais elle aurait pu porter ' +
    'sur ce qui est enregistré, sur la durée de conservation, et sur qui peut consulter les données. ' +
    'Ce sont trois questions ouvertes que la direction a fermées seule.\n\n' +
    'J’ajoute que la mesure risque de manquer son but. Le salarié qui voudrait sortir un fichier ' +
    'sait maintenant exactement ce qui est enregistré, et le dispositif ne surveille ' +
    'que les postes de l’entreprise. Il produira surtout des données sur les quatre-vingts ' +
    'personnes qui n’ont rien fait.',
  rubric: {
    criteria: [
      {
        key: 'probleme',
        label: 'Dégager le problème',
        maxPoints: 5,
        descriptors: [
          'Le problème est identifié comme un CONFLIT entre deux obligations réelles de l’employeur, non résumé comme « la surveillance au travail ».',
          'Le candidat distingue ce que chaque partie invoque : une fuite non élucidée et une obligation légale d’un côté, l’absence de consultation de l’autre.',
          'Un candidat qui reformule le document sans nommer la tension n’a pas dégagé le problème.',
        ],
      },
      {
        key: 'position',
        label: 'Prise de position et argumentation',
        maxPoints: 6,
        descriptors: [
          'La position est explicite et tenue jusqu’au bout, y compris si elle est nuancée.',
          'Les arguments s’appuient sur les éléments du document plutôt que sur des généralités sur la vie privée.',
          'Une position qui change en cours de monologue sans le dire est pénalisée ici, non au débat.',
        ],
      },
      {
        key: 'exemple',
        label: 'Usage des éléments du document',
        maxPoints: 4,
        descriptors: [
          'Les chiffres sont utilisés pour soutenir un raisonnement, non récités.',
          'Le candidat exploite au moins un élément que sa propre position doit absorber.',
        ],
      },
      {
        key: 'structure',
        label: 'Structure du monologue',
        maxPoints: 4,
        descriptors: [
          'Une progression audible : le problème, la position, les raisons.',
          'Cinq à sept minutes tenues sans récapitulation qui remplit le temps.',
        ],
      },
      {
        key: 'langue',
        label: 'Étendue et correction de la langue',
        maxPoints: 6,
        descriptors: [
          'Le lexique de l’obligation, de la proportion et de la concession est disponible.',
          'Les erreurs n’obligent pas l’examinateur à reconstruire la phrase.',
        ],
      },
    ],
  },
};

/* ═══ LE DÉBAT ════════════════════════════════════════════════════════════ */
//
// Ten to thirteen minutes, and the bank must be able to attack EITHER side —
// which side the candidate took is unknown until they have spoken for five to
// seven minutes, and guessing wrong makes their correct answer look like a
// non-answer.
//
// Four axes per side, thirteen moves per side, one retreat each. The depth
// ladder matters: depth 3 turns the candidate's own depth-2 answer against them
// and is incoherent if served first.

const M = (
  id: string,
  kind: 'probe' | 'counter' | 'counter-example' | 'consequence' | 'concession' | 'steelman' | 'retreat',
  depth: 1 | 2 | 3,
  text: string,
  covers: string
) => ({ id, kind, depth, text, covers, cues: [] });

export const PO_T2: ExamTask = {
  ...base,
  id: taskId('po_debate', '001'),
  taskType: 'po_debate',
  skill: 'PO',
  level: 'b2',
  label: 'Production orale · Débat',
  prompt:
    'Phase 2 · Débat avec l’examinateur (10 à 13 minutes)\n\n' +
    'L’examinateur va contester la position que vous venez de défendre. ' +
    'Confirmez et nuancez vos idées, apportez des précisions, ' +
    'et réagissez à ses arguments pour défendre votre point de vue.',
  timingS: 780,
  responseSpec: { kind: 'audio', minDurationS: 600, maxDurationS: 780 },
  // What a strong candidate SOUNDS like under contestation, written from the
  // "contre" side. It is not a script: it shows the two things the grid marks
  // and a transcript cannot fake — conceding a real point without losing the
  // position, and answering the objection actually made.
  modelAnswer:
    'Je vous accorde le point sans réserve : la fuite a eu lieu, elle n’est pas élucidée, ' +
    'et une direction qui ne ferait rien serait fautive. Je ne défends pas l’inaction.\n\n' +
    'Là où je ne vous suis pas, c’est sur ce qui découle de ce constat. ' +
    'Vous me demandez ce que je propose à la place. Je propose de commencer par ce que ' +
    'six semaines d’enquête n’ont pas fait : savoir par quel canal le fichier est sorti. ' +
    'On installe ici un dispositif permanent sur quatre-vingts personnes ' +
    'pour un incident dont on ignore encore la forme. C’est l’ordre qui me gêne, ' +
    'pas le principe.\n\n' +
    'Sur les badges et les caméras, vous avez raison et je retire l’argument de l’intrusion. ' +
    'Ce n’est pas le contenu qui fait la différence, puisque le logiciel ne lit rien. ' +
    'Ce qui fait la différence, c’est la durée : une caméra filme un couloir pendant que j’y passe, ' +
    'et ce dispositif enregistre sept heures par jour, tous les jours.\n\n' +
    'Et je maintiens le point de départ. Vous me dites qu’une consultation n’aurait rien changé ' +
    'à l’obligation légale. C’est exact, et ce n’est pas ce que je demandais. ' +
    'Elle aurait pu porter sur la durée de conservation et sur qui consulte les données. ' +
    'Ce sont des questions ouvertes, et elles ont été fermées par ceux qui avaient déjà choisi.',
  debate: {
    question: 'Un employeur peut-il enregistrer l’activité au clavier de ses salariés au nom de la sécurité ?',
    opening: {
      id: 'open',
      text: 'Merci. Je vais maintenant contester ce que vous venez de dire, et vous me répondrez.',
      cues: [],
      covers: 'ouverture du débat',
    },
    clarify: {
      id: 'clarify',
      text:
        'Avant d’aller plus loin, je voudrais être sûr de vous avoir compris. ' +
        'Vous défendez le dispositif tel qu’il a été mis en place, ' +
        'ou vous demandez qu’on le retire ?',
      cues: [],
      covers: 'lever l’ambiguïté sur la position défendue',
    },
    sideCues: {
      // "pour" = the candidate defends the monitoring.
      pour: [
        'le dispositif se defend', 'je suis pour la surveillance', 'l entreprise a raison',
        'il faut le maintenir', 'la mesure est justifiee', 'on ne peut pas ne rien faire',
      ],
      contre: [
        'il faut le retirer', 'je suis contre la surveillance', 'l entreprise a tort',
        'ce dispositif est inacceptable', 'la mesure doit etre supprimee', 'on ne surveille pas les salaries',
      ],
    },
    axes: [
      /* ── against POUR: the candidate defends the monitoring ─────────────── */
      {
        id: 'consentement',
        against: 'pour',
        about: 'un accord que personne ne pouvait refuser',
        moves: [
          M('co1', 'counter', 1,
            'Deux salariés sur trois ont signé pour demander le retrait. Vous défendez un dispositif que la majorité des personnes concernées refuse. Au nom de quoi ?',
            'la mesure est rejetée par ceux qu’elle vise'),
          M('co2', 'probe', 2,
            'Admettons que la direction les ait consultés. Qu’aurait-elle fait d’un refus ? Si la réponse est « rien », en quoi la consultation était-elle autre chose qu’une formalité ?',
            'la consultation aurait-elle pu changer quelque chose'),
          M('co3', 'concession', 3,
            'Vous venez d’admettre que la consultation n’aurait rien changé à la décision. Vous défendez donc une procédure dont vous reconnaissez qu’elle n’en est pas une. Que reste-t-il de votre argument sur la transparence ?',
            'la concession sur la consultation retournée contre l’argument de transparence'),
          M('co-r', 'retreat', 1,
            'Vous semblez maintenant dire l’inverse de ce que vous défendiez. Qu’est-ce qui vous a fait changer d’avis exactement ?',
            'retraite : demander la raison du changement'),
        ],
      },
      {
        id: 'derive',
        against: 'pour',
        about: 'ce que la sécurité finit par couvrir',
        moves: [
          M('de1', 'consequence', 1,
            'Le logiciel enregistre aujourd’hui les volumes et les horaires. Rien dans ce que vous défendez n’empêche d’y ajouter le contenu l’an prochain, avec la même justification. Où placez-vous la limite ?',
            'l’extension future sous la même justification'),
          M('de2', 'counter-example', 2,
            'Un responsable qui verrait qu’un salarié travaille peu le vendredi n’aurait aucun mal à appeler cela un signalement d’incident. Qu’est-ce qui l’en empêche, concrètement ?',
            'le détournement de la clause de signalement'),
          M('de3', 'concession', 3,
            'Vous reconnaissez qu’il faudrait une règle écrite sur les usages autorisés. Elle n’existe pas ici. Vous défendez donc le dispositif en supposant une garantie que l’entreprise n’a pas donnée.',
            'la garantie supposée mais absente'),
        ],
      },
      {
        id: 'efficacite',
        against: 'pour',
        about: 'ce que la mesure attrape réellement',
        moves: [
          M('ef1', 'counter', 1,
            'La fuite est passée par un canal que six semaines d’enquête n’ont pas trouvé. Qu’est-ce qui vous fait croire que ce canal était un clavier de l’entreprise ?',
            'rien n’indique que le dispositif aurait vu la fuite'),
          M('ef2', 'probe', 2,
            'Le dispositif est annoncé. Celui qui voudrait recommencer sait donc précisément ce qui est enregistré. Que reste-t-il de son pouvoir de dissuasion ?',
            'l’annonce détruit-elle l’effet recherché'),
          M('ef3', 'consequence', 3,
            'Si je vous suis, la mesure produira surtout des données sur les soixante-dix-huit personnes qui n’ont rien fait. Vous acceptez ce rapport ?',
            'le coût porté par les innocents'),
        ],
      },
      {
        id: 'confiance',
        against: 'pour',
        about: 'ce que le dispositif fait à la relation de travail',
        moves: [
          M('cf1', 'steelman', 1,
            'Je vous accorde le point le plus fort de votre position : l’entreprise est légalement responsable des données de ses clients. Cela lui donne-t-il un moyen d’action illimité sur ses salariés ?',
            'l’obligation légale ne suffit pas à tout autoriser'),
          M('cf2', 'counter', 2,
            'Vous dites que le dispositif est proportionné. Proportionné à quoi ? À un incident unique, dont on ignore la cause, et qui n’a pas été attribué à un salarié.',
            'la proportionnalité mesurée à quel risque'),
          M('cf3', 'consequence', 3,
            'Une entreprise qui surveille quatre-vingts personnes pour un incident non élucidé leur apprend qu’elles sont suspectes par défaut. Que faites-vous de cet effet-là dans votre bilan ?',
            'le coût sur la relation, absent du bilan'),
        ],
      },

      /* ── against CONTRE: the candidate wants the dispositif removed ──────── */
      {
        id: 'incident',
        against: 'contre',
        about: 'la fuite qui a réellement eu lieu',
        moves: [
          M('in1', 'counter', 1,
            'Un fichier de clients est sorti et personne ne sait par où. Vous demandez le retrait du dispositif. Que proposez-vous à la place, concrètement ?',
            'l’alternative concrète manque'),
          M('in2', 'probe', 2,
            'Vous parlez de formation et de règles internes. Il y en avait avant octobre. Qu’est-ce qui vous fait penser qu’une deuxième version aurait un autre effet ?',
            'pourquoi la même solution marcherait mieux la deuxième fois'),
          M('in3', 'concession', 3,
            'Vous admettez qu’il faut bien faire quelque chose. Vous êtes donc d’accord sur le besoin et en désaccord sur le moyen : dites-moi lequel, précisément, protège les clients aussi bien.',
            'la concession sur le besoin ramenée à la comparaison des moyens'),
          M('in-r', 'retreat', 1,
            'Vous semblez maintenant dire l’inverse de ce que vous défendiez. Qu’est-ce qui vous a fait changer d’avis exactement ?',
            'retraite : demander la raison du changement'),
        ],
      },
      {
        id: 'comparaison',
        against: 'contre',
        about: 'les surveillances déjà acceptées',
        moves: [
          M('cp1', 'counter-example', 1,
            'Cette entreprise a des badges à chaque porte et des caméras à l’entrée. Personne n’a signé de lettre contre. Qu’est-ce qui rend le clavier différent ?',
            'la frontière avec les dispositifs acceptés'),
          M('cp2', 'probe', 2,
            'Vous répondez que le clavier touche au contenu du travail. Le logiciel ne lit pas les messages : il compte. En quoi compter des frappes est-il plus intrusif que filmer un visage ?',
            'l’intrusion mesurée sur quoi'),
          M('cp3', 'consequence', 3,
            'Si votre critère est le contenu, alors un dispositif qui ne lit rien devrait vous convenir. Vous demandez pourtant son retrait. Le critère n’est donc pas celui-là.',
            'le critère annoncé n’explique pas la position'),
        ],
      },
      {
        id: 'responsabilite',
        against: 'contre',
        about: 'qui répond de la fuite suivante',
        moves: [
          M('re1', 'counter', 1,
            'Si le fichier ressort la semaine prochaine, c’est la direction qui répondra devant ses clients et devant la loi, pas les signataires de la lettre. Est-il déraisonnable qu’elle veuille des moyens ?',
            'l’asymétrie de responsabilité'),
          M('re2', 'steelman', 2,
            'Votre meilleur argument, à mon sens, est que la direction a choisi seule. Admettons qu’elle ait consulté et maintenu sa décision : demanderiez-vous encore le retrait ?',
            'le désaccord porte-t-il sur la procédure ou sur la mesure'),
          M('re3', 'concession', 3,
            'Vous venez de dire que la procédure changerait votre jugement. Votre opposition porte donc sur la manière, pas sur le principe. Pourquoi demander le retrait plutôt qu’une reprise de la décision ?',
            'la concession sur la procédure retournée en question sur le retrait'),
        ],
      },
      {
        id: 'transparence',
        against: 'contre',
        about: 'une mesure annoncée plutôt que dissimulée',
        moves: [
          M('tr1', 'counter', 1,
            'La direction a annoncé le dispositif, publié ce qu’il enregistre et fixé trente jours de conservation. Elle aurait pu ne rien dire. Cela ne compte pour rien ?',
            'l’annonce comme choix, non comme obligation'),
          M('tr2', 'probe', 2,
            'Vous dites que l’annonce ne rend pas la mesure acceptable. D’accord. Préféreriez-vous alors qu’elle ne soit pas annoncée ? Sinon, vous reconnaissez qu’annoncer vaut mieux.',
            'l’annonce vaut-elle mieux que son absence'),
          M('tr3', 'consequence', 3,
            'En obtenant le retrait, vous obtenez surtout que la prochaine mesure ne soit pas annoncée. Une direction qui a payé une lettre de deux tiers du personnel apprend quelque chose, et ce n’est pas ce que vous vouliez lui apprendre.',
            'l’effet du retrait sur la prochaine décision'),
        ],
      },
    ],
    closing: {
      id: 'close',
      text: 'Nous allons nous arrêter là. Merci pour cet échange.',
      cues: [],
      covers: 'clôture du débat',
    },
  },
  rubric: {
    criteria: [
      {
        key: 'defense',
        label: 'Défense du point de vue',
        maxPoints: 6,
        descriptors: [
          'Le candidat tient sa position sous contestation, ou en change en le disant.',
          'Une objection reçue est traitée, non contournée par la répétition de l’argument initial.',
          'Céder sur tout n’est pas une réponse : un candidat qui accepte chaque objection n’a pas défendu de position.',
        ],
      },
      {
        key: 'nuance',
        label: 'Nuance et concession',
        maxPoints: 5,
        descriptors: [
          'Le candidat distingue ce qu’il accorde de ce qu’il maintient.',
          'Une concession réelle est reprise ensuite : elle modifie l’argument plutôt que de le suspendre.',
        ],
      },
      {
        key: 'reaction',
        label: 'Réaction et relance',
        maxPoints: 5,
        descriptors: [
          'Le candidat répond à ce qui vient d’être dit, non à une objection qu’il attendait.',
          'Il peut demander une précision plutôt que de répondre à côté.',
        ],
      },
      {
        key: 'interaction',
        label: 'Aisance dans l’échange',
        maxPoints: 4,
        descriptors: [
          'Les tours de parole sont pris sans blanc excessif ni interruption systématique.',
          'Le débit reste tenable sur dix à treize minutes.',
        ],
      },
      {
        key: 'langue',
        label: 'Étendue et correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Le lexique de la concession, de l’objection et de la conséquence est disponible sous pression.',
          'Les erreurs augmentent sous contestation sans empêcher la compréhension.',
        ],
      },
    ],
  },
};
